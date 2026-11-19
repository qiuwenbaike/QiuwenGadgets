import {beforeEach, describe, it} from 'node:test';
import {strict as assert} from 'node:assert';
import {fallbackTable} from '../modules/util/generateFallbackTable';
import {initI18nMethods} from '../modules/initI18nMethods';
import {initShims} from '../modules/initShims';
import {resolveLocaleChain} from '../modules/util/resolveLocaleChain';

interface MockConfig {
	wgContentLanguage: string;
	wgUserLanguage: string;
	wgUserVariant?: string;
}

interface MockEnvironment {
	documentLanguage?: string;
	navigatorLanguage?: string;
	config?: MockConfig;
}

const DEFAULT_CONFIG: MockConfig = {
	wgContentLanguage: 'zh-hans',
	wgUserLanguage: 'zh-hant',
	wgUserVariant: 'zh-hk',
};

const setEnvironment = ({
	documentLanguage = 'zh-Hant-TW',
	navigatorLanguage = 'en-US',
	config = DEFAULT_CONFIG,
}: MockEnvironment = {}): void => {
	Object.defineProperty(globalThis, 'document', {
		configurable: true,
		value: {
			documentElement: {
				lang: documentLanguage,
			},
		},
	});
	Object.defineProperty(globalThis, 'navigator', {
		configurable: true,
		value: {
			language: navigatorLanguage,
		},
	});
	Object.defineProperty(globalThis, 'mw', {
		configurable: true,
		value: {
			config: {
				get: (): MockConfig => {
					return config;
				},
			},
		},
	});
};

const getI18nMethods = () => initI18nMethods();

beforeEach(() => {
	setEnvironment();
});

describe('fallbackTable', () => {
	it('由分组规则生成与旧表完全一致的中文回退链', () => {
		assert.deepEqual(fallbackTable, {
			zh: ['zh', 'zh-hans', 'zh-hant', 'zh-cn', 'zh-tw', 'zh-hk', 'zh-sg', 'zh-mo', 'zh-my'],
			'zh-hans': ['zh-hans', 'zh-cn', 'zh-sg', 'zh-my', 'zh', 'zh-hant', 'zh-tw', 'zh-hk', 'zh-mo'],
			'zh-hant': ['zh-hant', 'zh-tw', 'zh-hk', 'zh-mo', 'zh', 'zh-hans', 'zh-cn', 'zh-sg', 'zh-my'],
			'zh-cn': ['zh-cn', 'zh-hans', 'zh-sg', 'zh-my', 'zh', 'zh-hant', 'zh-tw', 'zh-hk', 'zh-mo'],
			'zh-sg': ['zh-sg', 'zh-hans', 'zh-cn', 'zh-my', 'zh', 'zh-hant', 'zh-tw', 'zh-hk', 'zh-mo'],
			'zh-my': ['zh-my', 'zh-hans', 'zh-cn', 'zh-sg', 'zh', 'zh-hant', 'zh-tw', 'zh-hk', 'zh-mo'],
			'zh-tw': ['zh-tw', 'zh-hant', 'zh-hk', 'zh-mo', 'zh', 'zh-hans', 'zh-cn', 'zh-sg', 'zh-my'],
			'zh-hk': ['zh-hk', 'zh-hant', 'zh-mo', 'zh-tw', 'zh', 'zh-hans', 'zh-cn', 'zh-sg', 'zh-my'],
			'zh-mo': ['zh-mo', 'zh-hant', 'zh-hk', 'zh-tw', 'zh', 'zh-hans', 'zh-cn', 'zh-sg', 'zh-my'],
		});
	});
});

describe('resolveLocaleChain', () => {
	it('合并 locale、分组表和浏览器回退链', () => {
		assert.deepEqual(
			resolveLocaleChain('zh-hant', {
				documentLanguage: 'zh-Hant-TW',
				navigatorLanguage: 'en-US',
			}),
			['zh-hant', 'zh-tw', 'zh-hk', 'zh-mo', 'zh', 'zh-hans', 'zh-cn', 'zh-sg', 'zh-my', 'en']
		);
	});

	it('locale 不在表内时使用浏览器语言对应的分组', () => {
		assert.deepEqual(
			resolveLocaleChain('ja', {
				documentLanguage: 'zh-Hant-TW',
				navigatorLanguage: 'en-US',
			}),
			['ja', 'zh-tw', 'zh-hant', 'zh-hk', 'zh-mo', 'zh', 'zh-hans', 'zh-cn', 'zh-sg', 'zh-my', 'en']
		);
	});

	it('将 zh-Hans-CN 归一为 zh-cn 后使用简体分组', () => {
		assert.deepEqual(
			resolveLocaleChain('ja', {
				documentLanguage: 'zh-Hans-CN',
				navigatorLanguage: 'en-US',
			}),
			['ja', 'zh-cn', 'zh-hans', 'zh-sg', 'zh-my', 'zh', 'zh-hant', 'zh-tw', 'zh-hk', 'zh-mo', 'en']
		);
	});

	it('没有任何分组时保留浏览器语言和默认语言 en', () => {
		assert.deepEqual(
			resolveLocaleChain('en', {
				documentLanguage: 'fr',
				navigatorLanguage: 'fr-FR',
			}),
			['en', 'fr-fr']
		);
	});
});

describe('initI18nMethods', () => {
	it('content / localize / vary 分别使用内容语言、用户语言、用户变体', () => {
		setEnvironment({
			config: {
				wgContentLanguage: 'zh-hans',
				wgUserLanguage: 'zh-hant',
				wgUserVariant: 'zh-hk',
			},
		});
		const {content, localize, vary} = getI18nMethods();
		const candidates = {
			en: 'English',
			'zh-hans': '简体',
			'zh-hant': '繁體',
			'zh-hk': '香港',
		};

		assert.equal(content(candidates), '简体');
		assert.equal(localize(candidates), '繁體');
		assert.equal(vary(candidates), '香港');
	});

	it('按变体回退表选择可用候选', () => {
		setEnvironment({
			config: {
				wgContentLanguage: 'en',
				wgUserLanguage: 'zh-tw',
			},
		});
		const {localize} = getI18nMethods();

		assert.equal(localize({en: 'English', 'zh-hant': '繁體'}), '繁體');
	});

	it('用户语言无候选时回退到浏览器语言或默认语言', () => {
		setEnvironment({
			documentLanguage: 'ja',
			navigatorLanguage: 'zh-CN',
			config: {
				wgContentLanguage: 'ja',
				wgUserLanguage: 'ja',
			},
		});
		const {localize} = getI18nMethods();

		assert.equal(localize({en: 'English', zh: '中文'}), '中文');
	});

	it('用户语言和浏览器语言都无候选时回退到默认语言 en', () => {
		setEnvironment({
			documentLanguage: 'fr',
			navigatorLanguage: 'fr-FR',
			config: {
				wgContentLanguage: 'fr',
				wgUserLanguage: 'fr',
			},
		});
		const {localize} = getI18nMethods();

		assert.equal(localize({en: 'English', 'zh-hans': '简体'}), 'English');
	});

	it('vary 在没有用户变体时使用内容语言', () => {
		setEnvironment({
			config: {
				wgContentLanguage: 'zh-hans',
				wgUserLanguage: 'en',
			},
		});
		const {vary} = getI18nMethods();

		assert.equal(vary({'zh-hans': '简体', en: 'English'}), '简体');
	});

	it('没有任何匹配候选时返回空字符串', () => {
		setEnvironment({
			documentLanguage: 'fr',
			navigatorLanguage: 'fr-FR',
			config: {
				wgContentLanguage: 'en',
				wgUserLanguage: 'en',
			},
		});
		const {localize} = getI18nMethods();

		assert.equal(localize({'zh-hans': '简体'}), '');
	});
});

describe('initShims', () => {
	it('将位置参数收敛为简繁候选', () => {
		setEnvironment({
			config: {
				wgContentLanguage: 'zh-hans',
				wgUserLanguage: 'zh-hk',
			},
		});
		Object.defineProperty(globalThis, 'window', {
			configurable: true,
			value: globalThis,
		});
		const {wgUCS, wgULS} = initShims(initI18nMethods());

		assert.equal(wgULS('简体', '繁體'), '繁體');
		assert.equal(wgULS('简体'), '简体');
		assert.equal(wgUCS('简体', '繁體'), '简体');
		assert.equal(wgULS('汉', '漢', '大陆', '台湾', '香港', '新加坡', '中文', '澳门', '马新', 'English'), '香港');
	});
});

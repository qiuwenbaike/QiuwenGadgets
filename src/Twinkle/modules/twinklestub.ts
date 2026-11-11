/*! Twinkle.js - twinklestub.ts */
import {Morebits} from './ui/morebits';
import {footerLinks} from './utils/footerLinks';
import {mountLazyDialog} from './utils/lazyDialogs';
import {uls} from './utils/useUls';

/**
 * twinklestub.ts: Tag module
 * Mode of invocation: Tab ("Stub")
 * Active on: Existing articles
 * Config directives in: FriendlyConfig
 * Note: customised friendlytag module
 *
 * Dialog rendering and the submission logic (`evaluate` and
 * `callbacks.main`) live in `ui/TwStubDialog.vue`; this file provides the
 * module entry and the static tag data.
 */
interface StubTagItem {
	value: string;
	label: string;
	url: string;
}

interface StubSubgroup {
	title?: string;
	items: StubTagItem[];
}

interface StubCatGroup {
	header: string;
	subgroups: StubSubgroup[];
}

interface StubArticleData {
	/** A list of all article tags, in alphabetical order. To ensure tags
	 * appear in the default "categorized" view, add them to the tagCategories
	 * hash below. */
	tags: Record<string, string>;
	/** A list of tags in order of category. Tags should be in alphabetical
	 * order within the categories. Add new categories with discretion - the
	 * list is long enough as is! */
	tagCategoriesHeader: Record<string, string>;
	tagCategories: Record<string, string[] | Record<string, string[]>>;
}

export interface TwinkleStubModule {
	(): void;
	callback: () => void;
	mode: string;
	article: StubArticleData;
}

declare global {
	interface TwinkleModules {
		stub?: TwinkleStubModule;
	}
}

const twinklestub = ((): void => {
	if (Morebits.isPageRedirect()) {
		// Skip
		// article/draft article tagging
	} else if (
		([0, 118].includes(mw.config.get('wgNamespaceNumber')) && mw.config.get('wgCurRevisionId')) ||
		Morebits.pageNameNorm === Twinkle.getPref('sandboxPage')
	) {
		twinklestub.mode = uls('条目', '條目');
		Twinkle.addPortletLink(twinklestub.callback, '小作品', 'friendly-tag', uls('标记小作品', '標記小作品'));
	}
}) as TwinkleStubModule;

twinklestub.callback = () => {
	const tagUrl = (tag: string): string => {
		return mw.util.getUrl(`Template:${Morebits.string.toUpperCaseFirstChar(tag)}`);
	};
	const makeItems = (tags: string[]): StubTagItem[] => {
		return tags.map((tag) => {
			return {
				value: tag,
				label: `{{${tag}}}: ${twinklestub.article.tags[tag] ?? ''}`,
				url: tagUrl(tag),
			};
		});
	};
	const customTags: StubTagItem[] = Twinkle.getPref('customStubList').map((item) => {
		return {
			value: item.value,
			label: item.label,
			url: tagUrl(item.value),
		};
	});
	const catGroups = Object.entries(twinklestub.article.tagCategories).map(([title, content]): StubCatGroup => {
		return {
			header: twinklestub.article.tagCategoriesHeader[title] ?? '',
			subgroups: Array.isArray(content)
				? [{items: makeItems(content)}]
				: Object.entries(content).map(([subtitle, subcontent]) => {
						return {
							title: subtitle,
							items: makeItems(subcontent),
						};
					}),
		};
	});
	const alphaTags = makeItems(Object.keys(twinklestub.article.tags));
	mountLazyDialog('TwStubDialog', {
		title: uls('条目小作品标记', '條目小作品標記'),
		mode: twinklestub.mode,
		initialSortOrder: Twinkle.getPref('stubArticleSortOrder') === 'alpha' ? 'alpha' : 'cat',
		showPatrol: !!document.querySelector('.patrollink'),
		initialPatrol: Twinkle.getPref('markStubbedPagesAsPatrolled') === true,
		customTags,
		catGroups,
		alphaTags,
		footerLinks: footerLinks(
			'stub',
			uls('小作品设置', '小作品設定'),
			[{text: uls('小作品说明', '小作品說明'), href: mw.util.getUrl('QW:小作品')}],
			true
		),
	});
};

// Tags for ARTICLES start here
twinklestub.article = {
	tags: {
		'actor-stub': '演员',
		'asia-stub': '亚洲',
		'bio-stub': '人物',
		'biology-stub': '生物学',
		'chem-stub': '化学',
		'europe-stub': '欧洲',
		'expand list': '未完成列表',
		'food-stub': '食物',
		'france-geo-stub': '法国地理',
		'geo-stub': '地理位置',
		'hist-stub': '历史或历史学',
		'JP-stub': '日本',
		'lit-stub': '文学',
		'math-stub': '数学',
		'med-stub': '医学',
		'mil-stub': '军事',
		'movie-stub': '电影',
		'music-stub': '音乐',
		'physics-stub': '物理学',
		'politic-stub': '政治',
		'religion-stub': '宗教',
		'science-stub': '科学',
		'sport-stub': '体育',
		stub: '通用小作品',
		'switzerland-stub': '瑞士',
		'tech-stub': '科技',
		'transp-stub': '交通',
		'TV-stub': '电视',
		'UK-stub': '英国',
		'US-bio-stub': '美国人物',
		'US-geo-stub': '美国地理',
		'US-stub': '美国',
		'weather-stub': '天气和特别的天气事件',
	},
	tagCategoriesHeader: {
		general: '通用模板',
		geo: '国家和地理',
		others: '杂项',
		bio: '人物',
		science: '科学',
		sport: '体育',
		tech: '技术',
		art: '艺术',
	},
	tagCategories: {
		general: ['stub', 'expand list'],
		geo: [
			'asia-stub',
			'europe-stub',
			'france-geo-stub',
			'geo-stub',
			'JP-stub',
			'switzerland-stub',
			'UK-stub',
			'US-bio-stub',
			'US-geo-stub',
			'US-stub',
		],
		others: ['food-stub', 'hist-stub', 'mil-stub', 'politic-stub', 'religion-stub', 'transp-stub'],
		bio: ['actor-stub', 'bio-stub', 'US-bio-stub'],
		science: ['biology-stub', 'chem-stub', 'math-stub', 'med-stub', 'physics-stub', 'science-stub', 'weather-stub'],
		sport: ['sport-stub'],
		tech: ['tech-stub'],
		art: ['actor-stub', 'lit-stub', 'movie-stub', 'music-stub', 'TV-stub'],
	},
};

Twinkle.stub = twinklestub;
Twinkle.addInitCallback(twinklestub, 'stub');

export {};

<script setup lang="ts">
import {
	CdxButton,
	CdxCheckbox,
	CdxField,
	CdxSelect,
	CdxTextArea,
	CdxTextInput,
	type MenuItemData,
} from '@wikimedia/codex';
import {computed, ref, watch} from 'vue';
import {Morebits} from './morebits';
import TwDialog from './TwDialog.vue';
import TwStatus from './TwStatus.vue';
import type {TwStatusExposed} from './types';
import {uls} from '../utils/useUls';

interface ArvParams {
	category: 'aiv' | 'ewip' | 'username' | 'spi';
	uid: string;
	pages: string[];
	arvtype: string[];
	hidename: boolean;
	reason: string;
	sockmaster: string;
	sockpuppets: string[];
	checkuser: boolean;
	page: string;
	badid: string;
	goodid: string;
}

const props = defineProps<{
	uid: string;
	isIP: boolean;
	title: string;
	blockNotice: {
		text: string;
		severe: boolean;
	};
	footerLinks: {
		text: string;
		href: string;
	}[];
}>();

const emit = defineEmits<{
	close: [];
}>();

const open = ref(true);
const submitting = ref(false);
const category = ref<'aiv' | 'ewip' | 'username' | 'spi'>('aiv');
// ewip
const pages = ref<string[]>(['']);
// common
const reason = ref('');
const hidename = ref(false);
const arvtype = ref<string[]>([]);
// spi
const sockmaster = ref(props.uid);
const sockpuppets = ref<string[]>([props.uid, '']);
const checkuser = ref(false);
// aiv
const page = ref(mw.util.getParamValue('vanarticle') || '');
const badid = ref(mw.util.getParamValue('vanarticlerevid') || '');
const goodid = ref(mw.util.getParamValue('vanarticlegoodrevid') || '');

const statusRef = ref<TwStatusExposed | null>(null);
const previewBox = ref<HTMLElement | null>(null);
let previewer: {
	beginRender: (text: string, title?: string) => void;
	closePreview: () => void;
} | null = null;

const categoryItems: MenuItemData[] = [
	{value: 'aiv', label: uls('破坏（QW:VIP）', '破壞（QW:VIP）')},
	{value: 'ewip', label: uls('编辑争议（QW:EWIP）', '編輯爭議（QW:EWIP）')},
	{
		value: 'username',
		label: uls('用户名（QW:UAA）', '使用者名稱（QW:UAA）'),
		disabled: props.isIP,
	},
	{
		value: 'spi',
		label: uls('傀儡调查（QW:SPI）', '傀儡調查（QW:SPI）'),
		disabled: props.isIP,
	},
];

const usernameTypes = [
	{
		value: uls('误导性', '誤導性'),
		label: uls('误导性用户名', '誤導性使用者名稱'),
		tooltip: uls(
			'误导性用户名隐含着与贡献者相关或误导他人的事情。例如︰不实观点、暗示账号拥有特定权限或暗示该账号并非由一人拥有而是由一个组群、一个项目或一个集体运作。',
			'誤導性使用者名稱隱含著與貢獻者相關或誤導他人的事情。例如︰不實觀點、暗示賬號擁有特定權限或暗示該賬號並非由一人擁有而是由一個群組、一個計畫或一個集體運作。'
		),
	},
	{
		value: uls('宣传性', '宣傳性'),
		label: uls('宣传性用户名', '宣傳性使用者名稱'),
		tooltip: uls(
			'宣传性用户名会于求闻百科上起推销一个组群或一间公司的作用。',
			'宣傳性使用者名稱會於有獸檔案館上起推銷一個群組或一間公司的作用。'
		),
	},
	{
		value: 'shared',
		label: uls('暗示并非由一人拥有', '暗示並非由一人擁有'),
		tooltip: uls(
			'每个账号只可以代表个人（容许一些例外情况），所有与他人分享账号的行为（包括分享账号密码）均被禁止。',
			'每個賬號只可以代表個人（容許一些例外情況），所有與他人分享賬號的行為（包括分享賬號密碼）均被禁止。'
		),
	},
	{
		value: '侮辱性',
		label: uls('侮辱性用户名', '侮辱性使用者名稱'),
		tooltip: uls(
			'侮辱性用户名令协调编辑变得困难，甚至无可能。',
			'侮辱性使用者名稱令協調編輯變得困難，甚至無可能。'
		),
	},
	{
		value: uls('破坏性', '破壞性'),
		label: uls('破坏性用户名', '破壞性使用者名稱'),
		tooltip: uls(
			'破坏性用户名包括人身攻击、伪冒他人或其他一切有着清晰可见的破坏求闻百科意图的用户名。',
			'破壞性使用者名稱包括人身攻擊、偽冒他人或其他一切有著清晰可見的破壞有獸檔案館意圖的使用者名稱。'
		),
	},
];

const aivTypes = [
	{value: 'final', label: uls('已发出最后警告', '已發出最後警告')},
	{value: 'postblock', label: uls('封禁过期后随即破坏', '封鎖過期後隨即破壞')},
	{
		value: 'vandalonly',
		label: uls('显而易见的纯破坏用户', '顯而易見的純破壞使用者'),
		disabled: props.isIP,
	},
	{value: 'spambot', label: uls('显而易见的spambot或失窃账号', '顯而易見的spambot或失竊賬號')},
	{
		value: 'promoonly',
		label: uls('仅用来散发广告宣传的用户', '僅用來散發廣告宣傳的使用者'),
		disabled: props.isIP,
	},
];

const badidDisabled = computed(() => page.value === '');
const goodidDisabled = computed(() => badidDisabled.value || badid.value === '');

const addPage = () => {
	if (pages.value.length < 10) {
		pages.value.push('');
	}
};

const removePage = (index: number) => {
	if (pages.value.length > 1) {
		pages.value.splice(index, 1);
	}
};

const addSockpuppet = () => {
	if (sockpuppets.value.length < 9) {
		sockpuppets.value.push('');
	}
};

const sockmasterNotice = computed(() => '{{'.concat('subst:', `Socksuspectnotice|1=${sockmaster.value}}}`));

const removeSockpuppet = (index: number) => {
	if (sockpuppets.value.length > 2) {
		sockpuppets.value.splice(index, 1);
	}
};

const onTypeToggle = (value: string, modelValue: string[] | boolean) => {
	if (Array.isArray(modelValue)) {
		arvtype.value = modelValue.filter((item): item is string => typeof item === 'string');
	} else if (modelValue) {
		arvtype.value = [...arvtype.value, value];
	} else {
		arvtype.value = arvtype.value.filter((item) => item !== value);
	}
};

const updatePage = (index: number, value: string | number) => {
	pages.value[index] = String(value);
};

const updateSockpuppet = (index: number, value: string | number) => {
	sockpuppets.value[index] = String(value);
};

const buildParams = (): ArvParams => ({
	category: category.value,
	uid: props.uid,
	pages: [...pages.value],
	arvtype: [...arvtype.value],
	hidename: hidename.value,
	reason: reason.value,
	sockmaster: sockmaster.value,
	sockpuppets: [...sockpuppets.value],
	checkuser: checkuser.value,
	page: page.value,
	badid: badid.value,
	goodid: goodid.value,
});

const primaryAction = computed(() => ({
	label: uls('提交', '提交'),
	actionType: 'progressive' as const,
	disabled: submitting.value,
}));

const onPreview = () => {
	const params = buildParams();
	const reason = getReportWikitext(params);
	if (reason === undefined || !previewBox.value) {
		return;
	}
	if (previewer) {
		previewer.closePreview();
	}
	previewer = new Morebits.wiki.preview(previewBox.value);
	let title;
	switch (params.category) {
		case 'aiv':
			title = 'Qiuwen_talk:报告当前破坏';
			break;
		case 'ewip':
		case 'username':
		case 'spi':
			title = 'Qiuwen_talk:管理员告示板';
			break;
		default:
			title = mw.config.get('wgPageName');
			break;
	}
	previewer.beginRender(`__NOTOC__${reason[0]}`, title);
};

const submit = () => {
	if (submitting.value) {
		return;
	}
	submitting.value = true;
	evaluate(buildParams(), statusRef.value?.getStatusRoot() ?? null, () => {
		submitting.value = false;
	});
};

watch(open, (value) => {
	if (!value) {
		emit('close');
	}
});

const getReportWikitext = (input: ArvParams): [string, string] | undefined => {
	let reason = '';
	let comment = '';
	const {uid} = input;
	const checkTitle = (title: string, revid: boolean | string | number): mw.Title | false => {
		if (/https?:\/\//.test(title)) {
			void mw.notify(uls('页面名称不能使用网址。', '頁面名稱不能使用網址。'), {
				type: 'warn',
				tag: 'twinklearv',
			});
			return false;
		}
		let page: mw.Title;
		try {
			page = new mw.Title(title);
		} catch {
			void mw.notify(
				`${
					uls('“', '「') +
					title +
					uls(
						'”不是一个有效的页面名称，如要使用差异链接请放在“评论”',
						'」不是一個有效的頁面名稱，如要使用差異連結請放在「評論」'
					) +
					(revid ? uls('，或正确输入“修订版本”', '，或正確輸入「修訂版本」') : '')
				}。`,
				{
					type: 'warn',
					tag: 'twinklearv',
				}
			);
			return false;
		}
		if (page.getNamespaceId() === -1) {
			void mw.notify(
				`${
					uls('“', '「') +
					title +
					uls(
						'”属于特殊页面，如要使用差异链接请放在“评论”',
						'」屬於特殊頁面，如要使用差異連結請放在「評論」'
					) +
					(revid ? uls('，或正确输入“修订版本”', '，或正確輸入「修訂版本」') : '')
				}。`,
				{
					type: 'warn',
					tag: 'twinklearv',
				}
			);
			return false;
		}
		return page;
	};
	let page;
	switch (input.category) {
		// Report 3RR
		case 'ewip': {
			if (input.reason === '') {
				void mw.notify(uls('您必须指定理由', '您必須指定理由'), {
					type: 'warn',
					tag: 'twinklearv',
				});
				return;
			}
			reason += `== 编辑战举报（${uid}） ==\n`;
			reason += `* '''{{vandal|${/[=]/.test(uid) ? '1=' : ''}${uid}}}'''\n`;
			const pages = input.pages.map((value) => {
				return value || null;
			});
			for (const pageTitle of pages) {
				page = checkTitle(pageTitle as string, false);
				if (!page) {
					return;
				}
				comment += `* {{pagelinks|${
					page.getPrefixedText().includes('=') ? '1=' : ''
				}${page.getPrefixedText()}}}\n`;
			}
			input.reason = input.reason.replace(/\n\n+/g, '\n');
			input.reason = input.reason.replace(/\r?\n/g, '\n*:'); // indent newlines
			comment += `* ${input.reason}\n`;
			comment = comment.trim();
			comment = Morebits.string.appendPunctuation(comment);
			reason += `${comment}\n* 提报人：~~`.concat('~~\n* 处理：');
			break;
		}
		// Report inappropriate username
		case 'username': {
			const types = input.arvtype.map(Morebits.string.toLowerCaseFirstChar);
			const hasShared = types.includes('shared');
			if (hasShared) {
				types.splice(types.indexOf('shared'), 1);
			}
			if (
				types.includes('侮辱性') &&
				!confirm(
					uls(
						'警告：严重的侮辱性用户名和针对特定个人的侮辱性用户名不应在公开页面报告，而是应当私下联系监督员处理。是否继续？',
						'警告：嚴重的侮辱性使用者名稱和針對特定個人的侮辱性使用者名稱不應在公開頁面報告，而是應當私下聯絡監督員處理。是否繼續？'
					)
				)
			) {
				return;
			}
			let typeText: string;
			if (types.length <= 2) {
				typeText = types.join('和');
			} else {
				typeText = [types.slice(0, -1).join('、'), types.slice(-1)].join('和');
			}
			comment += `*{{user-uaa|1=${uid}`;
			if (input.hidename) {
				comment += '|hidename=1';
			}
			comment += '}} &ndash; ';
			if (typeText.length) {
				comment += typeText + uls('用户名', '使用者名稱');
			}
			if (typeText.length && hasShared) {
				comment += '，';
			}
			if (hasShared) {
				comment += uls('暗示该账号并非由一人拥有', '暗示該賬號並非由一人擁有');
			}
			if (types.length || hasShared) {
				comment += '。';
			}
			if (input.reason) {
				comment += Morebits.string.toUpperCaseFirstChar(input.reason);
			}
			comment = Morebits.string.appendPunctuation(comment);
			comment += '——~~'.concat('~~');
			comment = comment.replace(/\r?\n/g, '\n*:'); // indent newlines
			reason = `== 不当用户名报告（${input.hidename ? uls('已隐藏用户名', '已隱藏使用者名稱') : uid}） ==\n`;
			reason += comment;
			break;
		}
		// QW:SPI
		case 'spi': {
			if (!input.reason) {
				void mw.notify(uls('请输入证据。', '請輸入證據。'), {
					type: 'warn',
					tag: 'twinklearv',
				});
				return;
			}
			const sockpuppets = Morebits.array.uniq(
				input.sockpuppets.map((o) => {
					return o.trim() || null;
				})
			);
			if (!sockpuppets[0]) {
				void mw.notify(uls('您没有指定任何傀儡。', '您沒有指定任何傀儡。'), {
					type: 'warn',
					tag: 'twinklearv',
				});
				return;
			}
			comment += '{{'.concat('subst:', 'SPI report|');
			if (!sockpuppets.includes(input.sockmaster)) {
				comment += '1={{'.concat('subst:', '#ifexist:{{', 'subst:', `FULLPAGENAME}}||${input.sockmaster}}}|`);
			}
			comment += `${sockpuppets
				.map((sock, index) => {
					return `${index + 2}=${sock}`;
				})
				.join('|')}\n|evidence=${Morebits.string.appendPunctuation(input.reason)}\n`;
			if (input.checkuser) {
				comment += '|checkuser=yes';
			}
			comment += '}}';
			reason = comment;
			break;
		}

		// Report user for vandalism
		/* case 'aiv': */
		/* falls through */
		default: {
			if (!input.arvtype.length && input.reason === '') {
				void mw.notify(uls('您必须指定理由', '您必須指定理由'), {
					type: 'warn',
					tag: 'twinklearv',
				});
				return;
			}
			reason += `== ${input.hidename ? uls('已隐藏用户名', '已隱藏使用者名稱') : uid} ==\n`;
			reason += `* '''{{vandal|${/[=]/.test(uid) ? '1=' : ''}${uid}`;
			if (input.hidename) {
				reason += '|hidename=1';
			}
			reason += "}}'''\n";
			const types = input.arvtype
				.map((v) => {
					switch (v) {
						case 'final':
							return '已发出最后警告';
						case 'postblock':
							return '封禁过期后随即破坏';
						case 'spambot':
							return '显而易见的spambot或失窃账号';
						case 'vandalonly':
							return '显而易见的纯破坏用户';
						case 'promoonly':
							return '仅用来散发广告宣传的用户';
						default:
							return '未知理由';
					}
				})
				.join('，');
			if (input.page !== '') {
				page = checkTitle(input.page, true);
				if (!page) {
					return;
				}
				comment += `* {{pagelinks|${
					page.getPrefixedText().includes('=') ? '1=' : ''
				}${page.getPrefixedText()}}}`;
				if (input.badid) {
					comment += `（{{diff|${page.getPrefixedText()}|${input.badid}|${input.goodid ?? ''}|diff}}）`;
				}
				comment += '\n';
			}
			if (types) {
				comment += `* ${types}`;
			}
			if (input.reason !== '') {
				input.reason = input.reason.replace(/\n\n+/g, '\n');
				input.reason = input.reason.replace(/\r?\n/g, '\n*:'); // indent newlines
				comment += (types ? '。' : '* ') + input.reason;
			}
			comment = comment.trim();
			comment = Morebits.string.appendPunctuation(comment);
			reason += `${comment}\n* 发现人：~~`.concat('~~\n* 处理：');
			break;
		}
	}
	return [reason, comment];
};

const evaluate = (input: ArvParams, statusContainer: HTMLElement | null, restore?: () => void): void => {
	const {uid} = input;
	let summary = '';
	switch (input.category) {
		// Report 3RR
		case 'ewip': {
			const report = getReportWikitext(input);
			if (report === undefined) {
				if (restore) {
					restore();
				}
				return;
			}
			summary = `${uls('报告', '報告')}[[Special:Contribs/${uid}|${uid}]]`;
			Morebits.status.init(statusContainer);
			Morebits.wiki.actionCompleted.redirect = 'Qiuwen_talk:管理员告示板';
			Morebits.wiki.actionCompleted.notice = uls('报告完成', '報告完成');
			const ewipPage = new Morebits.wiki.page('Qiuwen_talk:管理员告示板', uls('处理EWIP请求', '處理EWIP請求'));
			ewipPage.setFollowRedirect(true);
			ewipPage.load(() => {
				const text = ewipPage.getPageText();
				const $ewipLink = '<a rel="noopener" target="_blank" href="/wiki/QW:EWIP">QW:EWIP</a>';
				// check if user has already been reported
				if (
					new RegExp(
						`===\\s*\\{\\{\\s*(?:[Vv]andal)\\s*\\|\\s*(?:1=)?\\s*${Morebits.string.escapeRegExp(
							uid
						)}\\s*\\}\\}\\s*===`
					).test(text ?? '')
				) {
					ewipPage.getStatusElement().error(uls('报告已存在，将不会加入新的', '報告已存在，將不會加入新的'));
					Morebits.status.printUserText(
						report[1],
						uls(
							'您输入的评论已在下方提供，您可以将其加入到',
							'您輸入的評論已在下方提供，您可以將其加入到'
						) +
							$ewipLink +
							uls('已存在的小节中：', '已存在的小節中：')
					);
					return;
				}
				ewipPage.setPageSection(0);
				ewipPage.getStatusElement().status(uls('加入新报告…', '加入新報告…'));
				ewipPage.setEditSummary(summary);
				ewipPage.setChangeTags(Twinkle.changeTags);
				ewipPage.setAppendText(`\n${report[0]}`);
				ewipPage.append();
			});
			break;
		}
		// Report inappropriate username
		case 'username': {
			const report = getReportWikitext(input);
			if (report === undefined) {
				if (restore) {
					restore();
				}
				return;
			}
			Morebits.status.init(statusContainer);
			Morebits.wiki.actionCompleted.redirect = 'Qiuwen_talk:管理员告示板';
			Morebits.wiki.actionCompleted.notice = uls('报告完成', '報告完成');
			const uaaPage = new Morebits.wiki.page('Qiuwen_talk:管理员告示板', uls('处理UAA请求', '處理UAA請求'));
			uaaPage.setFollowRedirect(true);
			uaaPage.load(() => {
				const text = uaaPage.getPageText();
				// check if user has already been reported
				if (
					new RegExp(
						`\\{\\{\\s*user-uaa\\s*\\|\\s*(1\\s*=\\s*)?${Morebits.string.escapeRegExp(uid)}\\s*(\\||\\})`
					).test(text ?? '')
				) {
					uaaPage.getStatusElement().error(uls('用户已被列入。', '使用者已被列入。'));
					const $uaaLink = '<a rel="noopener" target="_blank" href="/wiki/QW:UAA">QW:UAA</a>';
					Morebits.status.printUserText(
						report[1],
						uls(
							'您输入的评论已在下方提供，您可以将其手工加入',
							'您輸入的評論已在下方提供，您可以將其手工加入'
						) +
							$uaaLink +
							uls('上该用户的报告中：', '上該使用者的報告中：')
					);
					return;
				}
				uaaPage.getStatusElement().status(uls('加入新报告…', '加入新報告…'));
				uaaPage.setEditSummary(uls('新提报', '新提報'));
				uaaPage.setChangeTags(Twinkle.changeTags);
				uaaPage.setAppendText(`\n\n${report[0]}`);
				uaaPage.append();
			});
			break;
		}
		// QW:SPI
		case 'spi': {
			const report = getReportWikitext(input);
			if (report === undefined) {
				if (restore) {
					restore();
				}
				return;
			}
			Morebits.status.init(statusContainer);
			const reportpage = 'Qiuwen_talk:管理员告示板';
			Morebits.wiki.actionCompleted.redirect = reportpage;
			Morebits.wiki.actionCompleted.notice = uls('报告完成', '報告完成');
			const spiPage = new Morebits.wiki.page(reportpage, uls('抓取讨论页面', '抓取討論頁面'));
			spiPage.setFollowRedirect(true);
			spiPage.setEditSummary(uls('加入新提报', '加入新提報'));
			spiPage.setChangeTags(Twinkle.changeTags);
			spiPage.setAppendText(report[0]);
			spiPage.setWatchlist(Twinkle.getPref('spiWatchReport'));
			spiPage.append();
			break;
		}

		// Report user for vandalism
		/* case 'aiv': */
		/* falls through */
		default: {
			const report = getReportWikitext(input);
			if (report === undefined) {
				if (restore) {
					restore();
				}
				return;
			}
			summary = `${uls('报告', '報告')}[[Special:Contribs/${uid}|${uid}]]`;
			if (input.hidename) {
				summary = uls('报告一名用户', '報告一名使用者');
			}
			Morebits.status.init(statusContainer);
			Morebits.wiki.actionCompleted.redirect = 'Qiuwen_talk:报告当前破坏';
			Morebits.wiki.actionCompleted.notice = uls('报告完成', '報告完成');
			const aivPage = new Morebits.wiki.page('Qiuwen_talk:报告当前破坏', uls('处理VIP请求', '處理VIP請求'));
			aivPage.setFollowRedirect(true);
			aivPage.load(() => {
				const text = aivPage.getPageText();
				const $aivLink = '<a rel="noopener" target="_blank" href="/wiki/QW:VIP">QW:VIP</a>';
				// check if user has already been reported
				if (
					new RegExp(
						`===\\s*\\{\\{\\s*(?:[Vv]andal)\\s*\\|\\s*(?:1=)?\\s*${Morebits.string.escapeRegExp(
							uid
						)}\\s*\\}\\}\\s*===`
					).test(text ?? '')
				) {
					aivPage.getStatusElement().error(uls('报告已存在，将不会加入新的', '報告已存在，將不會加入新的'));
					Morebits.status.printUserText(
						report[1],
						uls(
							'您输入的评论已在下方提供，您可以将其加入到',
							'您輸入的評論已在下方提供，您可以將其加入到'
						) +
							$aivLink +
							uls('已存在的小节中：', '已存在的小節中：')
					);
					return;
				}
				aivPage.setPageSection(0);
				aivPage.getStatusElement().status(uls('加入新报告…', '加入新報告…'));
				aivPage.setEditSummary(summary);
				aivPage.setChangeTags(Twinkle.changeTags);
				aivPage.setAppendText(`\n${report[0]}`);
				aivPage.append();
			});
			break;
		}
	}
};
</script>

<template>
	<tw-dialog
		:open="open"
		:title="title"
		script-name="Twinkle"
		:footer-links="footerLinks"
		:primary-action="primaryAction"
		@update:open="open = $event"
		@primary="submit"
	>
		<cdx-field>
			<template #label>{{ uls('选择报告类型：', '選擇報告類別：') }}</template>
			<cdx-select v-model:selected="category" :menu-items="categoryItems" :disabled="submitting" />
		</cdx-field>
		<div
			v-if="blockNotice.text"
			:style="{color: blockNotice.severe ? '#f00' : 'black'}"
			class="tw-arv-blockwarning"
		>
			{{ blockNotice.text }}
		</div>

		<!-- 编辑争议 -->
		<template v-if="category === 'ewip'">
			<cdx-field>
				<template #label>{{ uls('相关页面：', '相關頁面：') }}</template>
				<template #description>
					{{ uls('如不希望让报告链接到页面，请留空', '如不希望讓報告連結到頁面，請留空') }}
				</template>
				<div v-for="(_, index) in pages" :key="index" class="tw-arv-dyninput">
					<cdx-text-input
						:model-value="pages[index] ?? ''"
						:aria-label="`${uls('页面：', '頁面：')} ${index + 1}`"
						:disabled="submitting"
						@update:model-value="updatePage(index, $event)"
					/>
					<cdx-button
						v-if="pages.length > 1"
						weight="quiet"
						:disabled="submitting"
						@click="removePage(index)"
					>
						{{ uls('移除', '移除') }}
					</cdx-button>
				</div>
				<cdx-button v-if="pages.length < 10" weight="quiet" :disabled="submitting" @click="addPage">
					{{ uls('添加页面', '新增頁面') }}
				</cdx-button>
			</cdx-field>
			<cdx-field>
				<template #label>{{ uls('评论：', '評論：') }}</template>
				<cdx-text-area v-model="reason" :disabled="submitting" />
			</cdx-field>
		</template>

		<!-- 不当用户名 -->
		<template v-else-if="category === 'username'">
			<cdx-field>
				<template #label>{{ uls('不当用户名类型', '不當使用者名稱類別') }}</template>
				<template #description>
					{{
						uls(
							'求闻百科不允许使用带有误导性、宣传性、侮辱性或破坏性的用户名。此外，使用域名及邮箱地址的用户名亦被禁止。这些准则俱应应用至用户名及签名。在其他语言中不当的用户名或通过错拼、替代、暗示、拆字或任何间接方法达成的非妥当用户名同样视为违规。',
							'有獸檔案館不允許使用帶有誤導性、宣傳性、侮辱性或破壞性的使用者名稱。此外，使用域名及電子信箱位址的使用者名稱亦被禁止。這些準則俱應應用至使用者名稱及簽名。在其他語言中不當的使用者名稱或通過錯拼、替代、暗示、拆字或任何間接方法達成的非妥當使用者名稱同樣視為違規。'
						)
					}}
				</template>
				<cdx-checkbox
					v-for="item in usernameTypes"
					:key="item.value"
					:model-value="arvtype"
					:input-value="item.value"
					name="twinklearv-username-types"
					:disabled="submitting"
					@update:model-value="onTypeToggle(item.value, $event)"
				>
					<span :title="item.tooltip">{{ item.label }}</span>
				</cdx-checkbox>
			</cdx-field>
			<cdx-checkbox
				v-model="hidename"
				:disabled="submitting"
				:title="
					uls(
						'若用户名不当请勾选此项，注意：请考虑私下联系管理员处理。',
						'若使用者名稱不當請勾選此項，注意：請考慮私下聯絡管理員處理。'
					)
				"
			>
				{{
					uls(
						'在页面上隐藏用户名（需监督的用户名请勿于站内报告，勾选此项并不构成能在站内报告的理由）',
						'在頁面上隱藏使用者名稱（需監督的使用者名稱請勿於站內報告，勾選此項並不構成能在站內報告的理由）'
					)
				}}
			</cdx-checkbox>
			<cdx-field>
				<template #label>{{ uls('评论：', '評論：') }}</template>
				<cdx-text-area v-model="reason" :disabled="submitting" />
			</cdx-field>
		</template>

		<!-- 傀儡调查 -->
		<template v-else-if="category === 'spi'">
			<cdx-field>
				<template #label>{{ uls('主账号：', '主賬號：') }}</template>
				<template #description>
					{{ uls('主账号的用户名（不含User:前缀）', '主賬號的使用者名稱（不含User:字首）') }}
				</template>
				<cdx-text-input v-model="sockmaster" :disabled="submitting" />
			</cdx-field>
			<cdx-field>
				<template #label>{{ uls('傀儡：', '傀儡：') }}</template>
				<template #description>
					{{ uls('傀儡的用户名（不含User:前缀）', '傀儡的使用者名稱（不含User:字首）') }}
				</template>
				<div v-for="(_, index) in sockpuppets" :key="index" class="tw-arv-dyninput">
					<cdx-text-input
						:model-value="sockpuppets[index] ?? ''"
						:aria-label="`${uls('傀儡：', '傀儡：')} ${index + 1}`"
						:disabled="submitting"
						@update:model-value="updateSockpuppet(index, $event)"
					/>
					<cdx-button
						v-if="sockpuppets.length > 2"
						weight="quiet"
						:disabled="submitting"
						@click="removeSockpuppet(index)"
					>
						{{ uls('移除', '移除') }}
					</cdx-button>
				</div>
				<cdx-button v-if="sockpuppets.length < 9" weight="quiet" :disabled="submitting" @click="addSockpuppet">
					{{ uls('添加傀儡', '新增傀儡') }}
				</cdx-button>
			</cdx-field>
			<cdx-field>
				<template #label>{{ uls('证据：', '證據：') }}</template>
				<template #description>
					{{
						uls(
							'输入能够用来体现这些用户可能滥用多重账号的证据，这通常包括茶馆发言、页面历史或其他有关的信息。请避免在此处提供非与傀儡或滥用多重账号相关的其他讨论。',
							'輸入能夠用來體現這些使用者可能濫用多重賬號的證據，這通常包括茶館發言、頁面歷史或其他有關的資訊。請避免在此處提供非與傀儡或濫用多重賬號相關的其他討論。'
						)
					}}
				</template>
				<cdx-text-area v-model="reason" :disabled="submitting" />
			</cdx-field>
			<cdx-checkbox
				v-model="checkuser"
				:disabled="submitting"
				:title="
					uls(
						'用户查核是一种用于获取傀儡指控相关技术证据的工具，若没有正当理由则不会使用，您必须在证据字段充分解释为什么需要使用该工具。用户查核不会用于公开连接用户账号使用的IP地址。',
						'使用者查核是一種用於獲取傀儡指控相關技術證據的工具，若沒有正當理由則不會使用，您必須在證據欄位充分解釋為什麼需要使用該工具。使用者查核不會用於公開連接使用者賬號使用的IP位址。'
					)
				"
			>
				{{ uls('请求用户查核', '請求使用者查核') }}
			</cdx-checkbox>
			<div class="tw-arv-spinotice">
				{{ uls('请使用常识决定是否以', '請使用常識決定是否以') }}
				<code>{{ sockmasterNotice }}</code>
				{{
					uls(
						'通知用户。这不是必须的，对于涉及新用户的报告而言，通知他们能让报告显得更公平，但是许多情况下（如长期破坏者）通知更可能适得其反。',
						'通知使用者。這不是必須的，對於涉及新使用者的報告而言，通知他們能讓報告顯得更公平，但是許多情況下（如長期破壞者）通知更可能適得其反。'
					)
				}}
			</div>
		</template>

		<!-- 破坏 -->
		<template v-else>
			<div class="tw-arv-aiv-notice">
				{{
					uls(
						'提报傀儡应优先发送至傀儡调查，除非相关的账号有高频率、涉及多个页面等紧急严重的破坏行为。',
						'提報傀儡應優先發送至傀儡調查，除非相關的賬號有高頻率、涉及多個頁面等緊急嚴重的破壞行為。'
					)
				}}
			</div>
			<cdx-field>
				<template #label>{{ uls('相关页面：', '相關頁面：') }}</template>
				<template #description>
					{{ uls('如不希望让报告链接到页面，请留空', '如不希望讓報告連結到頁面，請留空') }}
				</template>
				<cdx-text-input v-model="page" :disabled="submitting" />
			</cdx-field>
			<cdx-field>
				<template #label>{{ uls('受到破坏的修订版本：', '受到破壞的修訂版本：') }}</template>
				<template #description>{{ uls('留空以略过差异', '留空以略過差異') }}</template>
				<cdx-text-input v-model="badid" :disabled="submitting || badidDisabled" />
			</cdx-field>
			<cdx-field>
				<template #label>{{ uls('破坏前的修订版本：', '破壞前的修訂版本：') }}</template>
				<template #description>{{ uls('留空以略过差异的较早版本', '留空以略過差異的較早版本') }}</template>
				<cdx-text-input v-model="goodid" :disabled="submitting || goodidDisabled" />
			</cdx-field>
			<cdx-field>
				<template #label>{{ uls('破坏类型：', '破壞類型：') }}</template>
				<cdx-checkbox
					v-for="item in aivTypes"
					:key="item.value"
					:model-value="arvtype"
					:input-value="item.value"
					name="twinklearv-aiv-types"
					:disabled="submitting || item.disabled"
					@update:model-value="onTypeToggle(item.value, $event)"
				>
					{{ item.label }}
				</cdx-checkbox>
			</cdx-field>
			<cdx-checkbox
				v-if="!isIP"
				v-model="hidename"
				:disabled="submitting"
				:title="
					uls(
						'若用户名不当请勾选此项，注意：请考虑私下联系管理员处理。',
						'若使用者名稱不當請勾選此項，注意：請考慮私下聯絡管理員處理。'
					)
				"
			>
				{{ uls('在页面上及编辑摘要隐藏用户名', '在頁面上及編輯摘要隱藏使用者名稱') }}
			</cdx-checkbox>
			<cdx-field>
				<template #label>{{ uls('评论：', '評論：') }}</template>
				<cdx-text-area v-model="reason" :disabled="submitting" />
			</cdx-field>
		</template>

		<cdx-button :disabled="submitting" weight="quiet" @click="onPreview">
			{{ uls('预览', '預覽') }}
		</cdx-button>
		<div ref="previewBox" hidden></div>
		<tw-status ref="statusRef" />
	</tw-dialog>
</template>

<style scoped lang="less">
.tw-arv-blockwarning {
	margin-bottom: 0.5em;
}

.tw-arv-dyninput {
	display: flex;
	align-items: center;
	gap: 0.25em;
	margin-bottom: 0.25em;

	:deep(.cdx-text-input) {
		flex: 1;
	}
}

.tw-arv-spinotice,
.tw-arv-aiv-notice {
	margin: 0.5em 0;
}
</style>

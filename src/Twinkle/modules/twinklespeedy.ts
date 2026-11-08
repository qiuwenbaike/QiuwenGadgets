/*! Twinkle.js - twinklespeedy.ts */
import {Morebits, type MorebitsWikiApi} from './ui/morebits';
import type {SpeedyCriterion, SpeedyLogParams} from './ui/types';
import TwSpeedyDialog from './ui/TwSpeedyDialog.vue';
import {footerLinks} from './utils/footerLinks.ts';
import {mountDialog} from './utils/mountDialog';
import {reactive} from 'vue';
import {uls} from './utils/useUls';

/**
 * twinklespeedy.ts: CSD module
 * Mode of invocation: Tab ("CSD")
 * Active on: Non-special, existing pages
 *
 * Tagging/deletion logic (`evaluate`, `callbacks`) lives in
 * `ui/TwSpeedyDialog.vue`; this file provides the module entry, the static
 * criterion lists and the shared userspace log writer (`addToLog`).
 */

interface SpeedyDialogData {
	priorCountText: string | null;
	priorCountColor: string;
}

type SpeedyCallback = (() => void) & {
	priorDeletionCount: (dialogData: SpeedyDialogData) => void;
};

export interface TwinkleSpeedyModule {
	(): void;
	callback: SpeedyCallback;
	closeDialog: () => void;
	hasCSD: boolean;
	customRationale: SpeedyCriterion[];
	articleList: SpeedyCriterion[];
	userList: SpeedyCriterion[];
	usertalkList: SpeedyCriterion[];
	fileList: SpeedyCriterion[];
	categoryList: SpeedyCriterion[];
	draftList: SpeedyCriterion[];
	talkList: SpeedyCriterion[];
	generalList: SpeedyCriterion[];
	redirectList: SpeedyCriterion[];
	normalizeHash: Record<string, string>;
	callbacks: {
		parseWikitext: (title: string, wikitext: string, callback: (reason: string) => void) => void;
		user: {
			addToLog: (params: SpeedyLogParams, initialContrib: string | null) => void;
		};
	};
}

declare global {
	interface TwinkleModules {
		speedy?: TwinkleSpeedyModule;
	}
}

const twinklespeedy = ((): void => {
	// Disable on:
	// * special pages
	// * non-existent pages
	if (mw.config.get('wgNamespaceNumber') < 0 || !mw.config.get('wgArticleId')) {
		return;
	}
	Twinkle.addPortletLink(
		twinklespeedy.callback,
		uls('速删', '速刪'),
		'tw-csd',
		Morebits.userIsSysop ? uls('快速删除', '快速刪除') : uls('请求快速删除', '請求快速刪除')
	);
}) as TwinkleSpeedyModule;

// Used by the post-deletion tool links (protect/unlink) to close the dialog
twinklespeedy.closeDialog = () => {};
// Used throughout
twinklespeedy.hasCSD = !!document.querySelector('#delete-reason');

// This function is run when the CSD tab/header link is clicked
twinklespeedy.callback = (() => {
	const dialogData: SpeedyDialogData = reactive({
		priorCountText: null,
		priorCountColor: 'inherit',
	}) as SpeedyDialogData;
	const {close} = mountDialog(TwSpeedyDialog, {
		isSysop: Morebits.userIsSysop,
		hasCSD: twinklespeedy.hasCSD,
		namespace: mw.config.get('wgNamespaceNumber'),
		isRedirect: mw.config.get('wgIsRedirect'),
		isIPUserTalk: mw.util.isIPAddress(mw.config.get('wgRelevantUserName') as string),
		pageContentModel: mw.config.get('wgPageContentModel'),
		radioClick: Twinkle.getPref('speedySelectionStyle') === 'radioClick',
		deleteSysopDefaultToDelete: Twinkle.getPref('deleteSysopDefaultToDelete') === true,
		deleteTalkPageOnDelete: Twinkle.getPref('deleteTalkPageOnDelete') === true,
		deleteRedirectsOnDelete: Twinkle.getPref('deleteRedirectsOnDelete') === true,
		hasCSDReason: twinklespeedy.hasCSD
			? decodeURIComponent(document.querySelector('#delete-reason')?.textContent ?? '').replace(/\+/g, ' ')
			: '',
		enlargeG7: Twinkle.getPref('enlargeG7Input') === true,
		priorCountText: dialogData.priorCountText,
		priorCountColor: dialogData.priorCountColor,
		customList: twinklespeedy.customRationale,
		articleList: twinklespeedy.articleList,
		userList: twinklespeedy.userList,
		usertalkList: twinklespeedy.usertalkList,
		fileList: twinklespeedy.fileList,
		categoryList: twinklespeedy.categoryList,
		draftList: twinklespeedy.draftList,
		talkList: twinklespeedy.talkList,
		generalList: twinklespeedy.generalList,
		redirectList: twinklespeedy.redirectList,
		footerLinks: footerLinks('speedy', uls('速删设置', '速刪設定'), [
			{text: uls('快速删除方针', '快速刪除方針'), href: mw.util.getUrl('QW:CSD')},
		]),
	});
	// Used by the post-deletion tool links (protect/unlink) to close the dialog
	twinklespeedy.closeDialog = () => {
		twinklespeedy.closeDialog = () => {};
		close();
	};
	// Check for prior deletions.  Just once, upon init
	twinklespeedy.callback.priorDeletionCount(dialogData);
}) as SpeedyCallback;

twinklespeedy.callback.priorDeletionCount = (dialogData: SpeedyDialogData) => {
	const query: Record<string, unknown> = {
		action: 'query',
		format: 'json',
		list: 'logevents',
		letype: 'delete',
		leaction: 'delete/delete',
		// Just pure page deletion, no redirect overwrites or revdel
		letitle: mw.config.get('wgPageName'),
		leprop: '',
		// We're just counting we don't actually care about the entries
		lelimit: 5,
		// A little bit goes a long way
	};
	new Morebits.wiki.api(uls('检查之前的删除', '檢查之前的刪除'), query, (apiobj: MorebitsWikiApi) => {
		const response = apiobj.getResponse() as unknown as {
			query?: {logevents?: unknown[]};
			continue?: unknown;
		};
		const delCount = response.query?.logevents?.length ?? 0;
		if (delCount) {
			let message = uls('被删除', '被刪除');
			if (response['continue']) {
				message += uls('超过', '超過');
			}
			message += `${delCount}次`;
			// 3+ seems problematic
			dialogData.priorCountText = message;
			dialogData.priorCountColor = delCount >= 3 ? '#ff0000' : 'inherit';
		}
	}).post();
};

twinklespeedy.customRationale = [
	{
		label: `自定义理由${Morebits.userIsSysop ? '（自定义删除理由）' : ''}`,
		value: 'reason',
		tooltip: '该页至少应该符合一条快速删除的标准，并且您必须在理由中提到。',
		subgroup: {
			name: 'reason_1',
			type: 'input',
			label: '理由：',
			size: 60,
		},
	},
];
twinklespeedy.fileList = [
	{
		label: 'F1：明显不符合本站著作权方针的文件',
		value: 'f1',
		tooltip:
			'包括以下情况：1.上传后3天内仍然来源不明、著作权不明的文件。2.上传者宣称拥有，而在其他来源找到的文件。3.文件宣称由某作者依据某自由著作权协议发布，但找不到该自由协议的声明。4.其他明显侵权的文件，可附加侵权理由。',
	},
	{
		label: 'F2：重复且不再被使用的文件',
		value: 'f2',
		tooltip:
			'包括以下情况：与现有文件完全相同（或与现有文件内容一致但尺寸较小），且没有客观需要（如某些场合需使用小尺寸图片）的文件。或是被更加清晰的文件、SVG格式文件所取代的文件。请提报者确定文件没有任何页面使用后再提报删除，并附注对应质量更好的文件名。',
		subgroup: {
			name: 'f2_filename',
			type: 'input',
			label: '新文件名：',
			tooltip: '可不含“File:”前缀。',
		},
	},
];
twinklespeedy.articleList = [
	{
		label: 'A1：内容空泛或完全没有内容。',
		value: 'a1',
		tooltip:
			'条目的内容笼统，或甚至根本没有提及条目主体，使条目不能用以区分其他事物；或条目只包括外部链接、参见、参考来源、分类、模板，而没有文字描述。消歧义页、重定向页不适用此条。请注意有些用户可能会多次保存，若此类页面的最后一次编辑时间超过24小时，则可提请快速删除。',
	},
	{
		label: 'A2：与其他条目或其历史版本重复，且不适合作为其重定向。',
		value: 'a2',
		tooltip:
			'条目创建时的内容，与其他现有条目（或其历史版本）内容完全相同或非常相似，且名称不适合作为后者的重定向。不包括拆分、合并、重组后产生的条目。如有疑虑，可转交删除讨论。若后创建的条目名称可作为重定向，可直接改为重定向；若先创建的条目宜作为后创建条目的重定向，请提请移动请求。',
		subgroup: {
			name: 'a2_pagename',
			type: 'input',
			label: '现有条目名：',
			tooltip: '不自动加上链接，若需要请自行加上[[]]。',
			size: 60,
		},
	},
	{
		label: 'A3：非现代汉语或翻译拙劣的条目',
		value: 'a3',
		tooltip:
			'条目内容绝大部分非现代汉语，包括未翻译的外语、方言及文言文；或翻译质量低下，以至于难以理解或出现较多错误。',
	},
];
twinklespeedy.categoryList = [
	{
		label: 'O2：空分类。',
		value: 'o2',
		tooltip: '没有收录任何页面、文件、子分类的分类。Category:请勿删除的分类中的分类不适用。',
	},
];
twinklespeedy.draftList = [
	{
		label: 'O3：废弃草稿。',
		value: 'o3',
		tooltip: '草稿名字空间内六个月内无编辑的页面。',
	},
];
// CSD没有专门针对讨论页的准则：孤立的讨论页与子页面适用G9，故此处为空列表。
// 必须定义，否则讨论页上TwSpeedyDialog引用undefined会导致渲染出错、无法显示准则。
twinklespeedy.usertalkList = [];
twinklespeedy.talkList = [];
twinklespeedy.userList = [
	{
		label: 'O1：用户请求删除自己的用户页。',
		value: 'o1',
		tooltip: '管理员需查看编辑历史，确认该页面不是从其他名字空间移动而来。',
	},
	{
		label: 'O3：废弃草稿。',
		value: 'o3',
		tooltip: '使用条目创建向导创建的超过六个月未改善的用户页草稿。',
	},
];

twinklespeedy.generalList = [
	{
		label: 'G1：明显违反法律法规或违背公序良俗的页面',
		value: 'g1',
		tooltip:
			'明显违反服务器所在地的法律法规及有关规定，或突破社会公序良俗底线，按照中华人民共和国互联网管理规定应予删除的页面。',
	},
	{
		label: 'G2：没有实际内容的页面',
		value: 'g2',
		tooltip:
			'仅包括无意义字符串而没有实际内容的页面。由用户本人创建的用户页、用户讨论页，及专为测试提供的沙盒，不适用此准则。',
	},
	{
		label: 'G3：纯粹破坏',
		value: 'g3',
		tooltip:
			'包括但不限于明显的恶作剧、错误信息、人身攻击等，以及清理移动破坏时留下的重定向。若收到或发现严重的人身攻击与诋毁，管理员及其他用户应通知监督员进行监督隐藏。',
	},
	{
		label: 'G4：重新创建已被删除的页面',
		value: 'g4',
		tooltip:
			'若现有页面与曾在删除讨论（含页面存废讨论、文件存废讨论和侵权审核，不含快速删除）中被删除内容相同或非常相似，且现有内容仍然适用删除讨论中的结论，无论标题是否相同，都适用本标准。若现有页面标题与已删版本不一致，则提请速删者应一并注明已删版本的页面名；若该页面之前被快速删除，请以相同理由重新提请速删。若现有内容不适用删除讨论中的结论，应重新提出删除讨论。',
		subgroup: [
			{
				name: 'g4_pagename',
				type: 'input',
				label: '已删版此页面名：',
				size: 60,
			},
		],
		hideSubgroupWhenMultiple: true,
	},
	{
		label: 'G5：因技术原因删除页面',
		value: 'g5',
		tooltip:
			'包括以下情形：因移动请求而删除页面；以覆盖删除重定向；删除无用的MediaWiki页面，及其他技术团队或界面管理员认为有必要执行的快速删除情形。',
		subgroup: {
			name: 'g5_rationale',
			type: 'input',
			label: '删除原因：',
			size: 60,
		},
	},
	{
		label: 'G6：原作者提请删除或清空页面，且页面原作者仅有一人',
		value: 'g6',
		tooltip:
			'页面原作者持合理理由提出的快速删除；或页面原作者（实际贡献者）清空页面，其他用户提交的快速删除。页面原作者（实际贡献者）仅一人时满足本准则。若页面实际贡献者多于一人，请持合理理由提交删除讨论。后一情形不包括用户页、用户讨论页，且应在页面最后一次编辑6小时后提出。被导入的页面，导入者视为原作者。',
		subgroup: {
			name: 'g6_rationale',
			type: 'input',
			label: '删除原因：',
			size: 60,
		},
		hideSubgroupWhenSysop: true,
	},
	{
		label: 'G7：明显的广告宣传',
		value: 'g7',
		tooltip:
			'应用于明显的广告宣传，或只有相关人物、组织等事物联系方法（包括但不限于电话、地址、电子邮箱、即时通讯软件联系方式（如QQ号、微信号）、社交媒体链接）。若宣传语气不明显，建议转交删除讨论。',
	},
	{
		label: 'G8：未列明可靠来源且语调负面的生者传记',
		value: 'g8',
		tooltip: '本情况下有的页面严重侵犯他人名誉权，有时可能侵犯隐私权，可能需要提请监督。',
	},
	{
		label: 'G9：孤立页面',
		value: 'g9',
		tooltip:
			'包括以下几种类型：1.没有对应文件的文件页面；2.没有对应母页面的子页面（用户页子页面除外）；3.指向不存在页面的重定向；4.没有对应内容页面的讨论页（讨论页存档、用户讨论页，以及在主页面挂有{{CSD Placeholder}}模板的讨论页除外）；5.不存在注册用户的用户页及用户页子页面（随用户更名产生的用户页重定向除外）。请在删除时注意有无将内容移至他处的必要。',
	},
];

twinklespeedy.redirectList = [
	{
		label: 'R1：不能发挥实际作用的重定向。',
		value: 'r1',
		tooltip:
			'包括以下情况：1.指向本身或循环的重定向，如A→B→C→……→A或A→A（繁简重定向不适用此项）；2.格式错误的重定向，包括标题仅为繁体、繁简混用、消歧义使用的括弧或空格错误、间隔号使用错误（因类推简化字未收录至《通用规范汉字表》导致的繁简混杂情形，或系统无法自动进行繁简处理的情形，则不适用）。若重定向页面标题，与合乎命名常规的目标页面标题之间，仅存在繁简字体的区别，而不存在词语用法区别，则不保留该重定向。因系统无法自动繁简转换而必须保留的重定向页面除外。对于其他未列出的情况，若用户认为该重定向无法发挥实际作用，且依据常识没有任何争议，可凭合理理由提请速删，由管理员判断。指向不存在页面的重定向，适用G9准则。',
		subgroup: {
			name: 'r1_type',
			type: 'select',
			label: '适用类型：',
			list: [
				{
					label: '请选择',
					value: '',
				},
				{
					label: '指向本身或循环的重定向',
					value: '指向本身或循环的重定向。',
				},
				{
					label: '标题繁简混用',
					value: '标题繁简混用。',
				},
				{
					label: '消歧义使用的括号或空格错误',
					value: '消歧义使用的括号或空格错误。',
				},
				{
					label: '间隔号使用错误',
					value: '间隔号使用错误。',
				},
				{
					label: '草稿命名空间内的重定向',
					value: '草稿命名空间内的重定向。',
				},
				{
					label: '其他理由（请勾选上方“应用多个理由”，并填写自定义理由）',
					value: 'other',
				},
			],
		},
	},
	{
		label: 'R2：名称与导向目标代表事物不一致或不完全一致的重定向。',
		value: 'r2',
		tooltip:
			'包括但不限于以下情况：1.由任何非条目页面（除用户页）导向条目页的重定向，以及由条目页导向任何非条目页面的重定向。2.明显笔误的重定向，如出现不常见的错别字等。（别称重定向不适用此项。若含错别字或有笔误的重定向使用频率高，此类重定向有助于帮助用户寻找到正确的页面，不适用此标准。有争议的此类重定向宜提交删除讨论。）3.明显与导向目标所涵盖的主题无关，或比导向目标所涵盖的主题更广泛的重定向。（若不明显，可改为提交删除讨论。）',
		subgroup: {
			name: 'r2_type',
			type: 'select',
			label: '适用类型：',
			list: [
				{
					label: '请选择',
					value: '',
				},
				{
					label: '由非条目页面（除用户页）导向条目页的重定向',
					value: '由非条目页面（除用户页）导向条目页的重定向。',
				},
				{
					label: '由条目页导向非条目页面的重定向',
					value: '由条目页导向任何非条目页面的重定向。',
				},
				{
					label: '明显笔误的重定向',
					value: '明显笔误的重定向。',
				},
				{
					label: '与导向目标无关或比其范围更广泛的重定向',
					value: '与导向目标无关或比其范围更广泛的重定向。',
				},
				{
					label: '其他理由（请勾选上方“应用多个理由”，并填写自定义理由）',
					value: 'other',
				},
			],
		},
	},
];

twinklespeedy.normalizeHash = {
	reason: 'db',
	multiple: 'multiple',
	'multiple-finish': 'multiple-finish',
	g1: 'g1',
	g2: 'g2',
	g3: 'g3',
	g4: 'g4',
	g5: 'g5',
	g6: 'g6',
	g7: 'g7',
	g8: 'g8',
	g9: 'g9',
	a1: 'a1',
	a2: 'a2',
	a3: 'a3',
	r1: 'r1',
	r2: 'r2',
	f1: 'f1',
	f2: 'f2',
	f3: 'f3',
	f4: 'f4',
	f5: 'f5',
	o1: 'o1',
	o2: 'o2',
	o3: 'o3',
};

// note: this code is also invoked from twinkleimage
// the params used are:
//   for CSD: params.values, params.normalizeds  (note: normalizeds is an array)
//   for DI: params.fromDI = true, params.templatename, params.normalized  (note: normalized is a string)
// Shared with twinkleclose: parse a deletion template into a plain-text reason
twinklespeedy.callbacks = {
	parseWikitext: (title: string, wikitext: string, callback: (reason: string) => void): void => {
		const query = {
			action: 'parse',
			prop: 'text',
			pst: 'true',
			text: wikitext,
			contentmodel: 'wikitext',
			title,
		};
		const statusIndicator = new Morebits.status(uls('构造删除理由', '構造刪除理由'));
		const api = new Morebits.wiki.api(
			uls('解析删除模板', '解析刪除模板'),
			query,
			(apiObj: MorebitsWikiApi) => {
				const xmlDoc = apiObj.getXML() as unknown as XMLDocument;
				const raw = xmlDoc.querySelector('text')?.childNodes[0]?.nodeValue ?? '';
				const reason = decodeURIComponent($(raw).find('#delete-reason').text().replace(/\+/g, ' '));
				if (reason) {
					statusIndicator.info('完成');
				} else {
					statusIndicator.warn(uls('未能从删除模板生成删除理由', '未能從刪除模板生成刪除理由'));
				}
				callback(reason);
			},
			statusIndicator
		);
		api.post();
	},
	user: {
		addToLog: (params: SpeedyLogParams, initialContrib: string | null): void => {
			const usl = new Morebits.userspaceLogger(Twinkle.getPref('speedyLogPageName'));
			usl.initialText = `这是该用户使用[[H:TW|Twinkle]]的速删模块做出的[[QW:CSD|快速删除]]提名列表。\n\n若您不再想保留此日志，请在[[${Twinkle.getPref(
				'configPage'
			)}|参数设置]]中关掉，并使用[[QW:CSD#O1|CSD O1]]提交快速删除。${
				Morebits.userIsSysop ? '\n\n此日志并不记录用Twinkle直接执行的删除。' : ''
			}`;
			let appendText = `# [[:${Morebits.pageNameNorm}]]：`;
			if (params.fromDI) {
				appendText += `图版[[QW:CSD#${(params.normalized ?? '').toUpperCase()}|CSD ${(params.normalized ?? '').toUpperCase()}]]（{{tl|${params.templatename}}}）`;
			} else if ((params.normalizeds ?? []).length > 1) {
				appendText += '多个理由（';
				for (const norm of params.normalizeds ?? []) {
					appendText += `[[QW:CSD#${norm.toUpperCase()}|${norm.toUpperCase()}]]、`;
				}
				appendText = appendText.slice(0, Math.max(0, appendText.length - 1)); // remove trailing comma
				appendText += '）';
			} else if ((params.normalizeds ?? [])[0] === 'db') {
				appendText += '自定义理由';
			} else {
				const firstNorm = (params.normalizeds ?? [])[0] ?? '';
				appendText += `[[QW:CSD#${firstNorm.toUpperCase()}|CSD ${firstNorm.toUpperCase()}]]`;
			}
			if (params.requestsalt) {
				appendText += uls('；请求白纸保护', '；請求白紙保護');
			}
			if (initialContrib) {
				appendText += `；通知{{user|${initialContrib}}}`;
			}
			appendText += ' ~~'.concat('~', '~~\n');
			usl.changeTags = Twinkle.changeTags;
			usl.log(
				appendText,
				uls('记录对[[', '記錄對[[') + Morebits.pageNameNorm + uls(']]的快速删除提名', ']]的快速刪除提名')
			);
		},
	},
};

Twinkle.speedy = twinklespeedy;
Twinkle.addInitCallback(twinklespeedy, 'speedy');

export {};

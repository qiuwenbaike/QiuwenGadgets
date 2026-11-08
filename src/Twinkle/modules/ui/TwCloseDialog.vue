<script setup lang="ts">
import {CdxCheckbox, CdxField, CdxSelect, CdxTextInput, type MenuItemData} from '@wikimedia/codex';
import {Morebits, type MorebitsWikiApiWithParams, type MorebitsWikiPage} from './morebits';
import {computed, ref, watch} from 'vue';
import TwDialog from './TwDialog.vue';
import TwStatus from './TwStatus.vue';
import type {TwStatusExposed} from './types';
import {uls} from '../utils/useUls';

type MorebitsWikiApi = MorebitsWikiApiWithParams<SubmitParams>;
type MorebitsTalkCheckApi = MorebitsWikiApiWithParams<SubmitParams & {talkPage: string}>;
/** Matches the `onSuccess` parameter of the `Morebits.wiki.api` constructor. */
type ApiSuccessCallback = NonNullable<ConstructorParameters<(typeof Morebits.wiki)['api']>[2]>;

declare const Twinkle: import('./twinkleGlobal').TwinkleGlobalBase & {
	changeTags: string[];
	hatnoteRegex: string;
	getPref: {
		(key: 'XfdClose'): string;
		(key: 'batchdeleteChunks'): number;
		(key: string): string | boolean | number;
	};
	speedy: {
		callbacks: {
			parseWikitext: (title: string, wikitext: string, callback: (reason: string) => void) => void;
		};
	};
};

interface CloseOption {
	value: string;
	label: string;
	action: 'keep' | 'del' | 'noop';
	disabled?: boolean;
	selected?: boolean;
}

interface CloseGroup {
	label: string;
	items: CloseOption[];
}

interface CloseCodeItem {
	label: string;
	action: 'keep' | 'del' | 'noop';
	adminonly?: boolean;
	selected?: boolean;
	value?: string;
	disabled?: boolean;
}

interface SubmitParams {
	title: string;
	code: string | null;
	remark: string;
	sdreason: string;
	section: number;
	parentSection: undefined;
	messageData: CloseOption;
	talkpage: boolean;
	redirects: boolean;
	noop: boolean;
}

const props = defineProps<{
	title: string;
	section: string;
	initialNoop: boolean;
	footerLinks: {
		text: string;
		href: string;
	}[];
}>();

const emit = defineEmits<{
	close: [];
}>();

// Keep this synchronized with {{delh}} (moved from twinkleclose.js)
const codes: {key: string; value: Record<string, CloseCodeItem>}[] = [
	{
		key: uls('请求无效', '請求無效'),
		value: {
			ir: {
				label: uls('请求无效', '請求無效'),
				action: 'keep',
			},
			rep: {
				label: uls('重复提出，无效', '重複提出，無效'),
				action: 'keep',
			},
			ne: {
				label: uls('目标页面或文件不存在，无效', '目標頁面或檔案不存在，無效'),
				action: 'keep',
			},
			nq: {
				label: uls('提删者未获取提删资格，无效', '提刪者未取得提刪資格，無效'),
				action: 'keep',
			},
		},
	},
	{
		key: '保留',
		value: {
			k: {
				label: '保留',
				action: 'keep',
				adminonly: true,
			},
			sk: {
				label: '快速保留',
				action: 'keep',
			},
			tk: {
				label: uls('暂时保留，改挂维护模板（关注度等）', '暫時保留，改掛維護模板（關注度等）'),
				value: uls('暂时保留', '暫時保留'),
				action: 'keep',
			},
			rr: {
				label: uls('请求理由消失', '請求理由消失'),
				action: 'keep',
				selected: Twinkle.getPref('XfdClose') === 'nonadminonly',
			},
			dan: {
				label: uls('删后重建', '刪後重建'),
				action: 'keep',
				adminonly: true,
			},
		},
	},
	{
		key: uls('删除', '刪除'),
		value: {
			d: {
				label: uls('删除', '刪除'),
				action: 'del',
				adminonly: true,
				selected: Twinkle.getPref('XfdClose') === 'all',
			},
			ic: {
				label: uls('图像因侵权被删', '圖像因侵權被刪'),
				action: 'del',
				adminonly: true,
			},
		},
	},
	{
		key: uls('快速删除', '快速刪除'),
		value: {
			sd: {
				label: uls('快速删除', '快速刪除'),
				action: 'del',
			},
			lssd: {
				label: uls('无来源或著作权信息，快速删除', '無來源或版權資訊，快速刪除'),
				action: 'del',
			},
			svg: {
				label: uls('已改用SVG图形，快速删除', '已改用SVG圖形，快速刪除'),
				action: 'del',
			},
			drep: {
				label: uls('多次被删除，条目锁定', '多次被刪除，條目鎖定'),
				action: 'del',
				adminonly: true,
			},
		},
	},
	{
		key: uls('其他处理方法', '其他處理方法'),
		value: {
			c: {
				label: uls('转交侵权', '轉交侵權'),
				action: 'noop',
			},
			r: {
				label: '重定向',
				action: 'keep',
				adminonly: true,
			},
			cr: {
				label: uls('分类重定向', '分類重定向'),
				action: 'keep',
				adminonly: true,
			},
			m: {
				label: uls('移动', '移動'),
				action: 'keep',
				adminonly: true,
			},
			merge: {
				label: uls('并入', '併入'),
				action: 'keep',
				adminonly: true,
			},
			mergeapproved: {
				label: uls('允许并入', '允許併入'),
				action: 'keep',
				adminonly: true,
			},
			nc: {
				label: uls('无共识暂时保留', '無共識暫時保留'),
				value: uls('无共识', '無共識'),
				action: 'keep',
			},
		},
	},
];

const groups: CloseGroup[] = codes.map((group) => ({
	label: group.key,
	items: Object.entries(group.value).map(([key, itemProperties]) => ({
		value: key,
		label: `${key}：${itemProperties.label}`,
		action: itemProperties.action,
		disabled:
			(Twinkle.getPref('XfdClose') !== 'all' && itemProperties.adminonly === true) ||
			itemProperties.disabled === true,
		selected: itemProperties.selected === true,
	})),
}));

const open = ref(true);
const defaultCode =
	groups
		.flatMap((group) => group.items)
		.find((item) => {
			return item.selected && !item.disabled;
		})?.value ??
	groups
		.flatMap((group) => group.items)
		.find((item) => {
			return !item.disabled;
		})?.value;
const selectedCode = ref<string | number | null>(defaultCode ?? null);
const sdreason = ref('');
const remark = ref('');
const noop = ref(props.initialNoop);
const talkpage = ref(true);
const redirects = ref(true);
const submitting = ref(false);
const statusRef = ref<TwStatusExposed | null>(null);

// Show the "delete talk page" checkbox only on content namespaces (not User:)
const talkpageTitle = new mw.Title(props.title);
const talkpageNamespace = talkpageTitle.getNamespaceId();
const showTalkpage = talkpageNamespace % 2 === 0 && talkpageNamespace !== 2;

const options = computed(() => groups.flatMap((group) => group.items));
const currentOption = computed(() => options.value.find((item) => item.value === selectedCode.value) ?? null);
const currentAction = computed(() => currentOption.value?.action);
const noopDisabled = computed(() => props.initialNoop || currentAction.value === 'noop');
const talkpageDisabled = computed(
	() => noop.value || props.initialNoop || currentAction.value === 'noop' || currentAction.value === 'keep'
);
const redirectsDisabled = computed(
	() => noop.value || props.initialNoop || currentAction.value === 'noop' || currentAction.value === 'keep'
);
const showSdreason = computed(() => selectedCode.value === 'sd' && currentAction.value !== 'noop' && !noop.value);

// The Select component shipped with the target wiki's Codex does not support
// menu groups, so flatten the groups and insert a disabled group-heading item
// before each group to emulate the original <optgroup> layout.
const menuItems = computed<MenuItemData[]>(() => {
	const items: MenuItemData[] = [];
	for (const [groupIndex, group] of groups.entries()) {
		items.push({
			value: `__group_${groupIndex}`,
			label: group.label,
			disabled: true,
		});
		for (const item of group.items) {
			const menuItem: MenuItemData = {
				value: item.value,
				label: item.label,
			};
			if (item.disabled) {
				menuItem.disabled = item.disabled;
			}
			items.push(menuItem);
		}
	}
	return items;
});

// Faithful port of Twinkle.close.callback.change_operation: toggling noop
// (un)checks and (dis)ables talkpage/redirects.
const applyOperationState = () => {
	if (noop.value || currentAction.value === 'keep') {
		talkpage.value = false;
		redirects.value = false;
	} else {
		talkpage.value = true;
		redirects.value = true;
	}
};

// Faithful port of Twinkle.close.callback.change_code: switching the code
// resets the noop checkbox and the talkpage/redirects checkboxes.
watch(
	selectedCode,
	() => {
		if (props.initialNoop || currentAction.value === 'noop') {
			noop.value = true;
		} else {
			noop.value = false;
		}
		applyOperationState();
	},
	{immediate: true}
);

watch(noop, applyOperationState);

const primaryAction = computed(() => ({
	label: uls('提交', '提交'),
	actionType: 'progressive' as const,
	disabled: submitting.value || currentOption.value === null,
}));

const submit = () => {
	if (submitting.value || currentOption.value === null) {
		return;
	}
	submitting.value = true;
	evaluate(
		{
			title: props.title,
			code: typeof selectedCode.value === 'string' ? selectedCode.value : null,
			remark: remark.value,
			sdreason: sdreason.value,
			section: Number.parseInt(props.section, 10),
			parentSection: undefined,
			messageData: currentOption.value,
			talkpage: showTalkpage && talkpage.value,
			redirects: redirects.value,
			noop: noop.value,
		},
		statusRef.value?.getStatusRoot() ?? null
	);
};

watch(open, (value) => {
	if (!value) {
		emit('close');
	}
});

const evaluate = (params: SubmitParams, statusContainer: HTMLElement | null): void => {
	const {noop, messageData, code} = params;
	Morebits.status.init(statusContainer);
	Morebits.wiki.actionCompleted.notice = '操作完成';
	if (noop || messageData.action === 'noop') {
		callbacks.talkend(params);
	} else {
		switch (messageData.action) {
			case 'del':
				callbacks.del(params);
				break;
			case 'keep': {
				const qiuwen_page = new Morebits.wiki.page(params.title, '移除存废讨论模板');
				qiuwen_page.setCallbackParameters(params);
				qiuwen_page.load(callbacks.keep);
				break;
			}
			default:
				void mw.notify(`关闭存废讨论：未定义 ${code}`, {
					type: 'warn',
					tag: 'twinkleclose',
				});
		}
	}
};

const callbacks = {
	del: (params: SubmitParams): void => {
		Morebits.wiki.addCheckpoint();
		const page = new Morebits.wiki.page(params.title, '删除页面');
		if (params.code === 'sd') {
			Twinkle.speedy.callbacks.parseWikitext(params.title, `{{delete|${params.sdreason}}}`, (reason) => {
				const prompted = prompt('输入删除理由，或点击确定以接受自动生成的：', reason);
				if (prompted === null) {
					page.getStatusElement().warn('没有执行删除');
					callbacks.talkend(params);
				} else {
					page.setEditSummary(prompted);
					page.setChangeTags(Twinkle.changeTags);
					page.deletePage(() => {
						page.getStatusElement().info('完成');
						callbacks.talkend(params);
					});
				}
			});
		} else {
			page.setEditSummary(`存废讨论通过：[[${mw.config.get('wgPageName')}#${params.title}]]`);
			page.setChangeTags(Twinkle.changeTags);
			page.deletePage(() => {
				page.getStatusElement().info('完成');
				callbacks.talkend(params);
			});
		}
		if (params.redirects) {
			const query = {
				action: 'query',
				titles: params.title,
				prop: 'redirects',
				rdlimit: 'max', // 500 is max for normal users, 5000 for bots and sysops
			};
			const api = new Morebits.wiki.api(
				'正在获取重定向',
				query,
				callbacks.deleteRedirectsMain as unknown as ApiSuccessCallback
			) as MorebitsWikiApi;
			api.params = params;
			api.post();
		}
		if (params.talkpage) {
			const pageTitle = mw.Title.newFromText(params.title);
			if (pageTitle && pageTitle.getNamespaceId() % 2 === 0 && pageTitle.getNamespaceId() !== 2) {
				// now talkTitle is the talk page title!
				const talkTitle = new mw.Title(pageTitle.getMainText(), pageTitle.getNamespaceId() + 1);
				const query = {
					action: 'query',
					titles: talkTitle.toText(),
				};
				const api = new Morebits.wiki.api(
					'正在检查讨论页面是否存在',
					query,
					callbacks.deleteTalk as unknown as ApiSuccessCallback
				) as MorebitsTalkCheckApi;
				// The legacy implementation mounted `talkPage` through the
				// non-existent `api.apiobj` property, which threw a
				// TypeError at runtime. Attach it to the callback parameters
				// directly so that `deleteTalk` can read it as intended.
				api.params = {...params, talkPage: talkTitle.toText()};
				api.post();
			}
		}
		Morebits.wiki.removeCheckpoint();
	},
	deleteRedirectsMain: (apiobj: MorebitsWikiApi): void => {
		const pages: string[] = $(apiobj.responseXML as XMLDocument)
			.find('rd')
			.map((_index, element) => {
				return $(element).attr('title');
			})
			.get();
		if (pages.length === 0) {
			return;
		}
		const redirectDeleter = new Morebits.batchOperation(
			uls('正在删除到 ', '正在刪除到 ') + apiobj.params.title + uls(' 的重定向', ' 的重新導向')
		);
		redirectDeleter.setOption('chunkSize', Twinkle.getPref('batchdeleteChunks'));
		redirectDeleter.setPageList(pages);
		redirectDeleter.run((pageName) => {
			const qiuwen_page = new Morebits.wiki.page(pageName, uls('正在删除 ', '正在刪除 ') + pageName);
			qiuwen_page.setEditSummary(
				`[[QW:CSD#G5|G5]]：${uls('指向已删页面“', '指向已刪頁面「')}${apiobj.params.title}${uls(
					'”的重定向',
					'」的重新導向'
				)}`
			);
			qiuwen_page.setChangeTags(Twinkle.changeTags);
			qiuwen_page.deletePage(redirectDeleter.workerSuccess, redirectDeleter.workerFailure);
		});
	},
	deleteTalk: (apiobj: MorebitsTalkCheckApi): void => {
		const exists = $(apiobj.responseXML as XMLDocument).find('page:not([missing])').length > 0;
		if (!exists) {
			// no talk page; forget about it
			return;
		}
		const page = new Morebits.wiki.page(
			apiobj.params.talkPage,
			uls('正在删除页面 ', '正在刪除頁面 ') + apiobj.params.title + uls(' 的讨论页', ' 的討論頁')
		);
		page.setEditSummary(
			`[[QW:CSD#G5|G5]]：${uls('已删页面“', '已刪頁面「')}${apiobj.params.title}${uls(
				'”的[[Help:讨论页|讨论页]]',
				'」的[[Help:討論頁|討論頁]]'
			)}`
		);
		page.setChangeTags(Twinkle.changeTags);
		page.deletePage();
	},
	keep: (pageobj: MorebitsWikiPage): void => {
		const statelem = pageobj.getStatusElement();
		if (!pageobj.exists()) {
			statelem.error('页面不存在，可能已被删除');
			return;
		}
		const text = pageobj.getPageText() ?? '';
		const params = pageobj.getCallbackParameters() as SubmitParams;
		const pagetitle = mw.Title.newFromText(params.title);
		if (pagetitle && pagetitle.getNamespaceId() % 2 === 0) {
			const talkpagetitle = new mw.Title(pagetitle.getMainText(), pagetitle.getNamespaceId() + 1);
			const talkpage = new Morebits.wiki.page(talkpagetitle.toString(), uls('标记讨论页', '標記討論頁'));
			const reason = params.messageData.value || params.messageData.label;
			const vfdkept = `{{Old vfd multi|${mw.config
				.get('wgPageName')
				.split('/')
				.slice(2)
				.join('/')}|${reason}}}\n`;
			talkpage.setPrependText(vfdkept);
			talkpage.setEditSummary(`[[${mw.config.get('wgPageName')}#${params.title}]]：${reason}`);
			talkpage.setChangeTags(Twinkle.changeTags);
			talkpage.setCreateOption('recreate');
			talkpage.prepend();
		}
		let newtext = text.replace(
			/<noinclude>\s*\{\{([rsaiftcmv]fd)(\|(?:\{\{[^{}]*\}\}|[^{}])*)?\}\}\s*<\/noinclude>\s*/gi,
			''
		);
		newtext = newtext.replace(/\{\{([rsaiftcmv]fd)(\|(?:\{\{[^{}]*\}\}|[^{}])*)?\}\}\s*/gi, '');
		if (params.code !== 'tk') {
			newtext = newtext.replace(
				/{{(notability|fame|mair|知名度|重要性|显著性|顯著性|知名度不足|人物重要性|重要性不足|notable|关注度|关注度不足|關注度|關注度不足|重要|重要度)(\|(?:{{[^{}]*}}|[^{}])*)?}}\n*/gi,
				''
			);
			newtext = newtext.replace(
				/{{(substub|小小作品|cod|小小條目|小小条目)(\|(?:{{[^{}]*}}|[^{}])*)?}}\n*/gi,
				''
			);
		}
		if (params.code === 'mergeapproved') {
			const tag = '{{'
				.concat('subst:')
				.concat(`Merge approved/auto|discuss=${mw.config.get('wgPageName')}#${params.title}}}\n`);
			// Insert tag after short description or any hatnotes
			const qiuwen_page = new Morebits.wikitext.page(newtext);
			newtext = qiuwen_page.insertAfterTemplates(tag, Twinkle.hatnoteRegex).getText();
		}
		if (newtext === text) {
			statelem.warn('未找到存废讨论模板，可能已被移除');
			callbacks.talkend(params);
			return;
		}
		const editsummary = `存废讨论关闭：[[${mw.config.get('wgPageName')}#${params.title}]]`;
		pageobj.setPageText(newtext);
		pageobj.setEditSummary(editsummary);
		pageobj.setChangeTags(Twinkle.changeTags);
		pageobj.setCreateOption('nocreate');
		pageobj.save(callbacks.keepComplete);
	},
	keepComplete: (pageobj: MorebitsWikiPage): void => {
		const params = pageobj.getCallbackParameters() as SubmitParams;
		callbacks.talkend(params);
	},
	talkend: (params: SubmitParams): void => {
		const qiuwen_page = new Morebits.wiki.page(mw.config.get('wgPageName'), '关闭讨论');
		qiuwen_page.setCallbackParameters(params);
		qiuwen_page.setPageSection(params.section);
		qiuwen_page.load(callbacks.saveTalk);
	},
	saveTalk: (pageobj: MorebitsWikiPage): void => {
		const statelem = pageobj.getStatusElement();
		let text = pageobj.getPageText() ?? '';
		const params = pageobj.getCallbackParameters() as SubmitParams;
		if (text.includes('{{delh')) {
			statelem.error('讨论已被关闭');
			return;
		}
		const sbegin = text.includes('<section begin=backlog />');
		const send = text.includes('<section end=backlog />');
		text = text.replace('\n<section begin=backlog />', '');
		text = text.replace('\n<section end=backlog />', '');
		const bar = text.split('\n----\n');
		const split = (bar[0] ?? '').split('\n');
		text = `${split[0] ?? ''}\n{{delh|${params.code}}}\n`;
		text += split.slice(1).join('\n');
		const reason = params.messageData.value || params.messageData.label;
		text += `\n<hr>\n: ${reason}`;
		if (params.remark) {
			text += `：${Morebits.string.appendPunctuation(params.remark)}`;
		} else {
			text += '。';
		}
		if (!Morebits.userIsSysop) {
			text += '{{'.concat('subst:').concat('NAC}}');
		}
		text += '——~~'.concat('~~', '\n{{delf}}');
		const restBar = bar.slice(1);
		if (restBar.length > 0) {
			text += `\n----\n${restBar.join('\n----\n')}`;
		}
		if (send) {
			text += '\n<section end=backlog />';
		}
		if (sbegin) {
			// guaranteed to be at tne end?
			text += '\n<section begin=backlog />';
		}
		pageobj.setPageText(text);
		pageobj.setEditSummary(`/* ${params.title} */ ${reason}`);
		pageobj.setChangeTags(Twinkle.changeTags);
		pageobj.setCreateOption('nocreate');
		pageobj.save(callbacks.disableLink);
	},
	disableLink: (pageobj: MorebitsWikiPage): void => {
		const params = pageobj.getCallbackParameters() as SubmitParams;
		$(`strong a[href=#${params.section}] span`).css('color', '#808080');
	},
};
</script>

<template>
	<tw-dialog
		:open="open"
		:title="`关闭存废讨论 \u00B7 ${title}`"
		script-name="Twinkle"
		:footer-links="footerLinks"
		:primary-action="primaryAction"
		@update:open="open = $event"
		@primary="submit"
	>
		<cdx-field>
			<template #label>处理结果：</template>
			<cdx-select v-model:selected="selectedCode" :menu-items="menuItems" :disabled="submitting" />
		</cdx-field>
		<cdx-field v-if="showSdreason">
			<template #label>速删理由：</template>
			<cdx-text-input
				v-model="sdreason"
				:disabled="submitting"
				placeholder="用于删除日志，使用{{delete}}的参数格式，例如 A1 或 A1|G1"
			/>
		</cdx-field>
		<cdx-field>
			<template #label>补充说明：</template>
			<cdx-text-input v-model="remark" :disabled="submitting" />
		</cdx-field>
		<cdx-checkbox v-model="noop" :disabled="noopDisabled || submitting">
			{{ uls('只关闭讨论，不进行其他操作', '只關閉討論，不進行其他操作') }}
		</cdx-checkbox>
		<cdx-checkbox v-if="showTalkpage" v-model="talkpage" :disabled="talkpageDisabled || submitting">
			{{ uls('删除关联的讨论页', '刪除關聯的討論頁') }}
		</cdx-checkbox>
		<cdx-checkbox v-model="redirects" :disabled="redirectsDisabled || submitting">
			{{ uls('删除重定向页', '刪除重定向頁') }}
		</cdx-checkbox>
		<tw-status ref="statusRef" />
	</tw-dialog>
</template>

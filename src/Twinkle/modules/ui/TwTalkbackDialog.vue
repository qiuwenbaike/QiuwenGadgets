<script setup lang="ts">
import {CdxButton, CdxField, CdxRadio, CdxSelect, CdxTextArea, CdxTextInput, type MenuItemData} from '@wikimedia/codex';
import {Morebits, type MorebitsWikiPreview} from './morebits';
import {computed, ref, watch} from 'vue';
import TwDialog from './TwDialog.vue';
import TwStatus from './TwStatus.vue';
import type {TwStatusExposed} from './types';
import {uls} from '../utils/useUls';

declare const Twinkle: {
	changeTags: string[];
	getPref: {
		(key: 'mailHeading' | 'talkbackHeading'): string;
		(key: string): string | boolean;
	};
};

interface NoticeboardData {
	label: string;
	title: string;
	content: string;
	editSummary: string;
	defaultSelected?: boolean;
}

interface SubmitParams {
	tbtarget: string;
	page: string;
	section: string;
	message: string;
}

defineProps<{
	title: string;
	footerLinks: {
		text: string;
		href: string;
	}[];
}>();

const emit = defineEmits<{
	close: [];
}>();

// Noticeboard data (moved from friendlytalkback.js; used by the noticeboard
// selector, the preview renderer and `evaluate`)
const noticeboards: Record<string, NoticeboardData> = {
	affp: {
		label: `QW:AF/FP（${uls('过滤器处理/报告', '過濾器處理/報告')}）`,
		title: uls('过滤器错误报告有新回应', '過濾器錯誤報告有新回應'),
		content: `${uls(
			'您的[[Qiuwen_talk:过滤器处理/报告|过滤器错误报告]]已有回应，请前往查看。',
			'您的[[Qiuwen_talk:过滤器处理/报告|過濾器錯誤報告]]已有回應，請前往查看。'
		)}——~~`.concat('~~'),
		editSummary: uls(
			'有关[[Qiuwen_talk:过滤器处理/报告|过滤器错误报告]]的通知',
			'有關[[Qiuwen_talk:过滤器处理/报告|過濾器錯誤報告]]的通知'
		),
		defaultSelected: true,
	},
	sbl: {
		label: 'Spam-blacklist',
		title: uls('垃圾链接黑名单请求有新回应', '垃圾連結黑名單請求有新回應'),
		content: `${uls(
			'您的[[Qiuwen_talk:管理员告示板|垃圾链接黑名单请求]]已有回应，请前往查看。',
			'您的[[Qiuwen_talk:管理员告示板|垃圾連結黑名單請求]]已有回應，請前往查看。'
		)}——~~`.concat('~~'),
		editSummary: uls(
			'有关[[Qiuwen_talk:管理员告示板|垃圾链接黑名单请求]]的通知',
			'有關[[Qiuwen_talk:管理员告示板|垃圾連結黑名單請求]]的通知'
		),
	},
	shl: {
		label: 'Spam-whitelist',
		title: uls('垃圾链接白名单请求有新回应', '垃圾連結白名單請求有新回應'),
		content: `${uls(
			'您的[[Qiuwen_talk:管理员告示板|垃圾链接白名单请求]]已有回应，请前往查看。',
			'您的[[Qiuwen_talk:管理员告示板|垃圾連結白名單請求]]已有回應，請前往查看。'
		)}——~~`.concat('~~'),
		editSummary: uls(
			'有关[[Qiuwen_talk:管理员告示板|垃圾链接白名单请求]]的通知',
			'有關[[Qiuwen_talk:管理员告示板|垃圾連結白名單請求]]的通知'
		),
	},
};

const open = ref(true);
const target = ref('mytalk');
const page = ref('');
const section = ref('');
const message = ref('');
const noticeboard = ref(
	Object.entries(noticeboards).find(([, data]) => {
		return data.defaultSelected;
	})?.[0] ?? ''
);
const submitting = ref(false);
const statusRef = ref<TwStatusExposed | null>(null);
const previewBox = ref<HTMLElement | null>(null);

const targetOptions: {value: string; label: string}[] = [
	{value: 'mytalk', label: uls('回复：我的讨论页', '回覆：我的討論頁')},
	{value: 'usertalk', label: uls('回复：其他用户的讨论页', '回覆：其他使用者的討論頁')},
	{value: 'other', label: uls('回复：其它页面', '回覆：其它頁面')},
	{value: 'see', label: uls('邀请讨论', '邀請討論')},
	{value: 'notice', label: '通告板通知'},
	{value: 'mail', label: uls('“有新邮件”', '「有新郵件」')},
];

const noticeboardItems = computed<MenuItemData[]>(() =>
	Object.entries(noticeboards).map(([value, data]) => ({
		value,
		label: data.label,
	}))
);

const showOptout = computed(() => ['usertalk', 'other', 'mytalk'].includes(target.value));
const showNoticeboard = computed(() => target.value === 'notice');
const showPageInput = computed(() => ['usertalk', 'other', 'see'].includes(target.value));
const showMessage = computed(() => target.value !== 'notice');

const pageLabel = computed(() =>
	target.value === 'usertalk' ? uls('用户（必填）', '使用者（必填）') : uls('完整页面名', '完整頁面名')
);
const sectionLabel = computed(() =>
	target.value === 'mail' ? uls('电子邮件主题（可选）', '電子郵件主題（可選）') : uls('章节（可选）', '章節（可選）')
);

const buildParams = (): SubmitParams => ({
	tbtarget: target.value,
	page:
		target.value === 'notice'
			? noticeboard.value
			: showPageInput.value
				? page.value
				: (mw.config.get('wgUserName') ?? ''),
	section: section.value,
	message: message.value.trim(),
});

const primaryAction = computed(() => ({
	label: uls('提交', '提交'),
	actionType: 'progressive' as const,
	disabled: submitting.value,
}));

const submit = () => {
	if (submitting.value) {
		return;
	}
	if (showPageInput.value && !page.value.trim()) {
		void mw.notify(uls('请填写页面名', '請填寫頁面名'), {
			type: 'warn',
			tag: 'friendlytalkback',
		});
		return;
	}
	submitting.value = true;
	evaluate(buildParams(), statusRef.value?.getStatusRoot() ?? null);
};

let previewer: MorebitsWikiPreview | null = null;

const onPreview = () => {
	if (previewer) {
		previewer.closePreview();
	}
	if (!previewBox.value) {
		return;
	}
	previewer = new Morebits.wiki.preview(previewBox.value);
	const params = buildParams();
	const [noticetext] = getNoticeWikitext(params.tbtarget, params.page, params.section, params.message);
	previewer.beginRender(
		noticetext,
		`User_talk:${mw.config.get('wgRelevantUserName')}` // Force wikitext/correct username
	);
};

watch(target, () => {
	if (previewer) {
		previewer.closePreview();
	}
});

watch(open, (value) => {
	if (!value) {
		emit('close');
	}
});

const evaluate = (params: SubmitParams, statusContainer: HTMLElement | null): void => {
	const {tbtarget, page, section, message} = params;
	let editSummary: string;
	switch (tbtarget) {
		case 'notice':
			editSummary = noticeboards[page]?.editSummary ?? '';
			break;
		case 'mail':
			editSummary = uls('通知：有新邮件', '通知：有新郵件');
			break;
		case 'see':
			editSummary = `${uls('请看看', '請看看')}[[:${page}${section ? `#${section}` : ''}]]${uls(
				'上的讨论',
				'上的討論'
			)}`;
			break;
		default:
			// tbtarget one of mytalk, usertalk, other
			editSummary = `${uls('回复通告', '回覆通告')}（[[:`;
			if (tbtarget !== 'other' && !new RegExp(`^\\s*${Morebits.namespaceRegex(3)}:`, 'i').test(page)) {
				editSummary += 'User talk:';
			}
			editSummary += `${page + (section ? `#${section}` : '')}]])`;
			break;
	}
	Morebits.status.init(statusContainer);
	const fullUserTalkPageName = `${
		mw.config.get('wgFormattedNamespaces')[mw.config.get('wgNamespaceIds')['user_talk'] as number]
	}:${mw.config.get('wgRelevantUserName')}`;
	Morebits.wiki.actionCompleted.redirect = fullUserTalkPageName;
	Morebits.wiki.actionCompleted.notice = uls(
		'回复通告完成，将在几秒内刷新页面',
		'回覆通告完成，將在幾秒內重新整理頁面'
	);
	const text = `\n\n${getNoticeWikitext(tbtarget, page, section, message)[0]}`;
	const talkpage = new Morebits.wiki.page(fullUserTalkPageName, uls('加入回复通告', '加入回覆通告'));
	talkpage.setEditSummary(editSummary);
	talkpage.setChangeTags(Twinkle.changeTags);
	talkpage.setAppendText(text);
	talkpage.setCreateOption('recreate');
	talkpage.setMinorEdit(Boolean(Twinkle.getPref('markTalkbackAsMinor')));
	talkpage.setFollowRedirect(true);
	talkpage.append();
};

const getNoticeWikitext = (
	tbtarget: string,
	page: string,
	section: string,
	message: string
): [string, string | undefined, string | undefined] => {
	let text: string;
	let title: string | undefined;
	let content: string | undefined;
	if (tbtarget === 'notice') {
		const board = noticeboards[page];
		title = board?.title;
		content = board ? Morebits.string.safeReplace(board.content, '$SECTION', section) : undefined;
		text = `== ${title} ==\n${content}`;
	} else if (tbtarget === 'see') {
		title = page + uls('的相关讨论', '的相關討論');
		content = '{{'.concat(
			'subst:',
			`Please see|location=${page}${section ? `#${section}` : ''}|more=${message.trim()}}}`
		);
		text = '{{'.concat(
			'subst:',
			`Please see|location=${page}${section ? `#${section}` : ''}|more=${message.trim()}}}`
		);
	} else {
		text = '==';
		if (tbtarget === 'mail') {
			title = Twinkle.getPref('mailHeading');
			content = `{{You've got mail|subject=${section}|ts=~~`.concat('~', '~~}}');
			text += `${title}==\n{{You've got mail|subject=${section}`;
		} else {
			// tbtarget one of mytalk, usertalk, other
			// clean talkback heading: strip section header markers that were erroneously suggested in the documentation
			title = Twinkle.getPref('talkbackHeading').replace(/^\s*=+\s*(.*?)\s*=+$\s*/, '$1');
			content = `{{talkback|${page}${section ? `|${section}` : ''}`;
			text += `${title}==\n{{talkback|${page}${section ? `|${section}` : ''}`;
		}
		content += '|ts=~~'.concat('~', '~~}}');
		text += '|ts=~~'.concat('~', '~~}}');
		if (message) {
			content += `\n${message}`;
			text += `\n${message}  ~~`.concat('~~');
		} else if (Twinkle.getPref('insertTalkbackSignature')) {
			text += '\n~~'.concat('~~');
		}
	}
	return [text, title, content];
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
		<cdx-field is-fieldset>
			<template #label>{{ uls('回复类型', '回覆類型') }}</template>
			<cdx-radio
				v-for="option in targetOptions"
				:key="option.value"
				v-model="target"
				name="twinkle-talkback-target"
				:input-value="option.value"
				:disabled="submitting"
			>
				{{ option.label }}
			</cdx-radio>
		</cdx-field>
		<cdx-field is-fieldset>
			<template #label>工作区</template>
			<div v-if="showOptout" id="twinkle-talkback-optout-message" class="tw-talkback-optout"></div>
			<cdx-field v-if="showNoticeboard">
				<template #label>通告板：</template>
				<cdx-select v-model:selected="noticeboard" :menu-items="noticeboardItems" :disabled="submitting" />
			</cdx-field>
			<cdx-field v-if="showPageInput">
				<template #label>{{ pageLabel }}</template>
				<cdx-text-input v-model="page" :disabled="submitting" />
			</cdx-field>
			<cdx-field>
				<template #label>{{ sectionLabel }}</template>
				<cdx-text-input v-model="section" :disabled="submitting" />
			</cdx-field>
			<cdx-field v-if="showMessage">
				<template #label>{{ uls('附加信息（可选）：', '附加資訊（可選）：') }}</template>
				<cdx-text-area v-model="message" :disabled="submitting" />
			</cdx-field>
		</cdx-field>
		<cdx-button :disabled="submitting" weight="quiet" @click="onPreview">
			{{ uls('预览', '預覽') }}
		</cdx-button>
		<div ref="previewBox" hidden></div>
		<tw-status ref="statusRef" />
	</tw-dialog>
</template>

<style scoped lang="less">
.tw-talkback-optout {
	color: #f00;
}
</style>

<script setup lang="ts">
import {CdxCheckbox, CdxField, CdxTextArea, CdxTextInput} from '@wikimedia/codex';
import {Morebits, type MorebitsWikiPage} from './morebits';
import {computed, ref, watch} from 'vue';
import TwDialog from './TwDialog.vue';
import TwStatus from './TwStatus.vue';
import type {TwStatusExposed} from './types';
import {uls} from '../utils/useUls';

declare const Twinkle: import('./twinkleGlobal').TwinkleGlobalBase & {
	changeTags: string[];
	getPref: (key: string) => string | boolean;
};

interface CopyvioParams {
	source: string;
	g4: boolean;
	g4_pagename: string;
	notify: boolean;
	logpage: string;
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

const open = ref(true);
const source = ref('');
const g4 = ref(false);
const g4Pagename = ref('');
const notify = ref(true);
const submitting = ref(false);
const statusRef = ref<TwStatusExposed | null>(null);

const primaryAction = computed(() => ({
	label: uls('提交', '提交'),
	actionType: 'progressive' as const,
	disabled: submitting.value,
}));

const submit = () => {
	if (submitting.value) {
		return;
	}
	if (!source.value.trim()) {
		void mw.notify(uls('请指定侵权来源', '請指定侵權來源'), {
			type: 'warn',
			tag: 'twinklecopyvio',
		});
		return;
	}
	submitting.value = true;
	evaluate(
		{
			source: source.value.trim(),
			g4: g4.value,
			g4_pagename: g4Pagename.value.trim(),
			notify: notify.value,
			logpage: 'Qiuwen_talk:侵权提报',
		},
		statusRef.value?.getStatusRoot() ?? null
	);
};

watch(open, (value) => {
	if (!value) {
		emit('close');
	}
});

const evaluate = (params: CopyvioParams, statusContainer: HTMLElement | null): void => {
	Morebits.status.init(statusContainer);
	Morebits.wiki.addCheckpoint();
	// Updating data for the action completed event
	Morebits.wiki.actionCompleted.redirect = mw.config.get('wgPageName');
	Morebits.wiki.actionCompleted.notice = uls('提报完成，将在几秒内刷新页面', '提報完成，將在幾秒內重新整理頁面');
	// Tagging file
	const qiuwen_page = new Morebits.wiki.page(
		mw.config.get('wgPageName'),
		uls('加入侵权模板到页面', '加入侵權模板到頁面')
	);
	qiuwen_page.setCallbackParameters(params);
	qiuwen_page.load(callbacks.tryTagging);
	Morebits.wiki.removeCheckpoint();
};

const callbacks = {
	tryTagging: (pageobj: MorebitsWikiPage): void => {
		// 先尝试标记页面，若发现已经标记则停止提报
		const text = pageobj.getPageText() ?? '';
		if (text.includes('{{Copyvio|')) {
			Morebits.status.error(
				uls('错误', '錯誤'),
				uls('页面已经标记侵权，请人工确认是否已经提报。', '頁面已經標記侵權，請人工確認是否已經提報。')
			);
		} else {
			callbacks.taggingArticle(pageobj);
			// Contributor specific edits
			const qiuwen_page = new Morebits.wiki.page(mw.config.get('wgPageName'));
			qiuwen_page.setCallbackParameters(pageobj.getCallbackParameters() as CopyvioParams);
			qiuwen_page.lookupCreation(callbacks.main);
		}
	},
	main: (pageobj: MorebitsWikiPage): void => {
		// this is coming in from lookupCreation...!
		const params = pageobj.getCallbackParameters() as CopyvioParams;
		const initialContrib = pageobj.getCreator();
		// Adding discussion
		const qiuwen_page = new Morebits.wiki.page(params.logpage, uls('加入侵权记录项', '加入侵權記錄項'));
		qiuwen_page.setFollowRedirect(true);
		qiuwen_page.setCallbackParameters(params);
		qiuwen_page.load(callbacks.copyvioList);
		// Notification to first contributor
		if (params.notify) {
			const usertalkpage = new Morebits.wiki.page(
				`User talk:${initialContrib}`,
				`${uls('通知页面创建者（', '通知頁面建立者（') + initialContrib}）`
			);
			const notifytext = '\n{{'.concat('subst:', `CopyvioNotice|${mw.config.get('wgPageName')}}}`);
			usertalkpage.setAppendText(notifytext);
			usertalkpage.setEditSummary(
				uls('通知：页面[[', '通知：頁面[[') +
					mw.config.get('wgPageName') +
					uls(']]疑似侵犯著作权', ']]疑似侵犯版權')
			);
			usertalkpage.setChangeTags(Twinkle.changeTags);
			usertalkpage.setCreateOption('recreate');
			usertalkpage.setWatchlist(Twinkle.getPref('copyvioWatchUser'));
			usertalkpage.setFollowRedirect(true, false);
			usertalkpage.append();
		}
	},
	taggingArticle: (pageobj: MorebitsWikiPage): void => {
		const params = pageobj.getCallbackParameters() as CopyvioParams;
		const revisionId =
			mw.config.get('wgRevisionId') || mw.config.get('wgDiffNewId') || mw.config.get('wgCurRevisionId');
		let tag = '{{'.concat(
			'subst:',
			`Copyvio/auto|url=${params.source
				.replace(/http/g, '&#104;ttp')
				.replace(/\n+/g, '\n')
				.replace(/^\s*([^*])/gm, '* $1')
				.replace(/^\* $/m, '')}|OldRevision=${revisionId}}}`
		);
		const text = pageobj.getPageText() ?? '';
		const oldcsd = text.match(/\{\{\s*(db(-\w*)?|d|delete)\s*(\|(?:\{\{[^{}]*\}\}|[^{}])*)?\}\}/i);
		if (
			oldcsd &&
			confirm(
				uls(
					'在页面上找到快速删除模板，要保留吗？\n\n当页面同时侵犯著作权又符合快速删除标准时，应该优先走快速删除程序。\n单击“确认”以保留快速删除模板，若您认为快速删除理由不合，单击“取消”以移除快速删除模板。',
					'在頁面上找到快速刪除模板，要保留嗎？\n\n當頁面同時侵犯版權又符合快速刪除標準時，應該優先走快速刪除程序。\n點擊「確認」以保留快速刪除模板，若您認為快速刪除理由不合，點擊「取消」以移除快速刪除模板。'
				)
			)
		) {
			tag = `${oldcsd[0]}\n${tag}`;
		}
		if (params.g4) {
			let speedyTag = '{{delete';
			speedyTag += '|g4';
			if (params.g4_pagename) {
				speedyTag += `|${params.g4_pagename}|c1=[[Special:Undelete/${params.g4_pagename}]]`;
			} else {
				speedyTag += `|c1=[[Special:Undelete/${mw.config.get('wgPageName')}]]`;
			}
			speedyTag += '}}';
			tag = `${speedyTag}\n${tag}`;
		}
		pageobj.setPageText(tag);
		pageobj.setEditSummary(uls('此页面疑似侵犯著作权', '此頁面疑似侵犯版權'));
		pageobj.setChangeTags(Twinkle.changeTags);
		pageobj.setWatchlist(Twinkle.getPref('copyvioWatchPage'));
		// pageobj.setCreateOption('recreate');
		pageobj.save();
		if (Twinkle.getPref('markCopyvioPagesAsPatrolled')) {
			pageobj.patrol();
		}
	},
	copyvioList: (pageobj: MorebitsWikiPage): void => {
		const text = pageobj.getPageText() ?? '';
		let output = '';
		const date = new Date();
		const dateHeaderRegex = new RegExp(`^==+\\s*${date.getUTCMonth() + 1}月${date.getUTCDate()}日\\s*==+`, 'mg');
		if (!dateHeaderRegex.exec(text)) {
			output = `\n\n==${date.getUTCMonth() + 1}月${date.getUTCDate()}日==`;
		}
		output += '\n{{'.concat('subst:', `CopyvioVFDRecord|${mw.config.get('wgPageName')}}}`);
		pageobj.setAppendText(output);
		pageobj.setEditSummary(`加入[[${mw.config.get('wgPageName')}]]`);
		pageobj.setChangeTags(Twinkle.changeTags);
		pageobj.setCreateOption('recreate');
		pageobj.append();
	},
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
			<template #label>{{ uls('侵权来源：', '侵權來源：') }}</template>
			<cdx-text-area v-model="source" :disabled="submitting" />
		</cdx-field>
		<cdx-checkbox v-model="g4" :disabled="submitting">
			{{
				uls('CSD G4: 曾经根据侵权审核删除后又重新创建的内容', 'CSD G4: 曾經根據侵權審核刪除後又重新建立的內容')
			}}
		</cdx-checkbox>
		<cdx-field v-if="g4">
			<template #label>{{ uls('前次删除的页面名称', '前次刪除的頁面名稱') }}</template>
			<cdx-text-input v-model="g4Pagename" :disabled="submitting" />
		</cdx-field>
		<cdx-checkbox v-model="notify" :disabled="submitting">
			{{ uls('通知页面创建者', '通知頁面建立者') }}
		</cdx-checkbox>
		<tw-status ref="statusRef" />
	</tw-dialog>
</template>

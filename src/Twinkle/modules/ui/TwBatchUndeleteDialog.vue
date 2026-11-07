<script setup lang="ts">
import {CdxButton, CdxCheckbox, CdxField, CdxTextInput} from '@wikimedia/codex';
import {
	Morebits,
	type MorebitsBatchOperation,
	type MorebitsWikiApiWithParams,
	type MorebitsWikiPage,
	newParamsApi,
} from './morebits';
import type {PageItem, TwStatusExposed} from './types';
import {computed, ref, watch} from 'vue';
import {uls} from '../utils/useUls';
import {useShiftClick} from '../utils/useShiftClick.ts';

declare const Twinkle: {
	changeTags: string[];
	getPref: {
		(key: 'batchChunks'): string;
		(key: string): string | boolean;
	};
};

interface BatchUndeleteParams {
	undel_talk: boolean;
	reason: string;
	pages: string[];
	protectedCount: number;
}

/** Parameters carried through the undelete workers. */
interface BatchUndeleteWorkerParams {
	page: string;
	undel_talk: boolean;
	reason: string;
	pageUndeleter: MorebitsBatchOperation;
	talkPage?: string;
}

const props = defineProps<{
	title: string;
	list: PageItem[];
	footerLinks: {
		text: string;
		href: string;
	}[];
}>();

const emit = defineEmits<{
	close: [];
}>();

const open = ref(true);
const undelTalk = ref(true);
const reason = ref('');
const selectedPages = ref<string[]>([]);
const submitting = ref(false);
const statusRef = ref<TwStatusExposed | null>(null);
const {onShiftClick} = useShiftClick();

// Exposed so the module entry can init Morebits.status before the page
// list arrives (the original accessed `dialogInstance?.exposed`, which
// was never populated by the dialog)
defineExpose({
	getStatusRoot: (): HTMLElement | null => {
		return statusRef.value?.getStatusRoot() ?? null;
	},
});

// When the list arrives asynchronously, select everything by default.
watch(
	() => props.list,
	(list) => {
		selectedPages.value = list.map((item) => item.title);
	}
);

const protectedCount = computed(
	() => props.list.filter((item) => item.isProtected && selectedPages.value.includes(item.title)).length
);

const selectAll = () => {
	selectedPages.value = props.list.map((item) => item.title);
};

const selectNone = () => {
	selectedPages.value = [];
};

const onToggle = (value: string, modelValue: string[] | boolean) => {
	if (Array.isArray(modelValue)) {
		selectedPages.value = modelValue.filter((item): item is string => typeof item === 'string');
	} else if (modelValue) {
		selectedPages.value = [...selectedPages.value, value];
	} else {
		selectedPages.value = selectedPages.value.filter((item) => item !== value);
	}
};

const primaryAction = computed(() => ({
	label: uls('提交', '提交'),
	actionType: 'progressive' as const,
	disabled: submitting.value,
}));

const submit = () => {
	if (submitting.value) {
		return;
	}
	if (!reason.value.trim()) {
		void mw.notify('您需要指定理由。', {
			type: 'warn',
			tag: 'twinklebatchundelete',
		});
		return;
	}
	if (selectedPages.value.length === 0) {
		void mw.notify(uls('请至少选择一个页面。', '請至少選擇一個頁面。'), {
			type: 'warn',
			tag: 'twinklebatchundelete',
		});
		return;
	}
	submitting.value = true;
	evaluate(
		{
			undel_talk: undelTalk.value,
			reason: reason.value.trim(),
			pages: [...selectedPages.value],
			protectedCount: protectedCount.value,
		},
		statusRef.value?.getStatusRoot() ?? null,
		() => {
			submitting.value = false;
		}
	);
};

watch(open, (value) => {
	if (!value) {
		emit('close');
	}
});

// Faithful port of Twinkle.batchundelete.callbacks / .callback.evaluate from here on

const callbacks = {
	// In the original this inspected `thingWithParameters.parent`, but
	// doExtras is only ever called with a Morebits.wiki.page, so the
	// callback parameters are read from it directly.
	doExtras: (pageobj: MorebitsWikiPage): void => {
		const params = pageobj.getCallbackParameters() as BatchUndeleteWorkerParams;
		// the initial batch operation's job is to delete the page, and that has
		// succeeded by now
		params.pageUndeleter.workerSuccess(pageobj);
		if (params.undel_talk) {
			const talkTitle = new mw.Title(params.page).getTalkPage();
			const talkpagename = talkTitle?.getPrefixedText();
			if (talkpagename && talkpagename !== params.page) {
				const query = {
					action: 'query',
					prop: 'deletedrevisions',
					drvprop: 'ids',
					drvlimit: 1,
					titles: talkpagename,
				};
				const qiuwen_api = newParamsApi(
					uls('检查讨论页的已删版本', '檢查討論頁的已刪版本'),
					query,
					callbacks.undeleteTalk
				);
				qiuwen_api.params = params;
				qiuwen_api.params.talkPage = talkpagename;
				qiuwen_api.post();
			}
		}
	},
	undeleteTalk: (apiobj: MorebitsWikiApiWithParams<BatchUndeleteWorkerParams>): void => {
		const xml = apiobj.getResponse() as unknown as XMLDocument;
		const exists = $(xml).find('page:not([missing])').length > 0;
		const delrevs = $(xml).find('rev').attr('revid');
		if (exists || !delrevs) {
			// page exists or has no deleted revisions; forget about it
			return;
		}
		const page = new Morebits.wiki.page(
			apiobj.params.talkPage ?? '',
			uls('正在反删除', '正在反刪除') + apiobj.params.page + uls('的讨论页', '的討論頁')
		);
		page.setEditSummary(
			uls('反删除“', '反刪除「') +
				apiobj.params.page +
				uls('”的[[Help:讨论页|讨论页]]', '」的[[Help:討論頁|討論頁]]')
		);
		page.setChangeTags(Twinkle.changeTags);
		page.undeletePage();
	},
};

const evaluate = (params: BatchUndeleteParams, statusContainer: HTMLElement | null, restore?: () => void): void => {
	Morebits.wiki.actionCompleted.notice = uls('反删除已完成', '反刪除已完成');
	if (
		params.protectedCount > 0 &&
		!confirm(
			uls('您正要反删除 ', '您正要反刪除 ') +
				params.protectedCount +
				uls(' 个全保护页面，您确定吗？', ' 個全保護頁面，您確定嗎？')
		)
	) {
		if (restore) {
			restore();
		}
		return;
	}
	const {pages} = params;
	const {reason} = params;
	const {undel_talk} = params;
	if (!reason) {
		void mw.notify('您需要指定理由。', {
			type: 'warn',
			tag: 'twinklebatchundelete',
		});
		if (restore) {
			restore();
		}
		return;
	}
	Morebits.status.init(statusContainer);
	if (pages.length === 0) {
		Morebits.status.error(uls('错误', '錯誤'), uls('没什么要反删除的，取消操作', '沒什麼要反刪除的，取消操作'));
		if (restore) {
			restore();
		}
		return;
	}
	const pageUndeleter = new Morebits.batchOperation(uls('反删除页面', '反刪除頁面'));
	pageUndeleter.setOption('chunkSize', Number.parseInt(Twinkle.getPref('batchChunks'), 10));
	pageUndeleter.setOption('preserveIndividualStatusLines', true);
	pageUndeleter.setPageList(pages);
	pageUndeleter.run((pageName) => {
		const pageParams: BatchUndeleteWorkerParams = {
			page: pageName,
			undel_talk,
			reason,
			pageUndeleter,
		};
		const qiuwen_page = new Morebits.wiki.page(pageName, uls('反删除页面', '反刪除頁面') + pageName);
		qiuwen_page.setCallbackParameters(pageParams);
		qiuwen_page.setEditSummary(`${reason} (批量)`);
		qiuwen_page.setChangeTags(Twinkle.changeTags);
		qiuwen_page.suppressProtectWarning();
		// temporary increase from 2 to make batchundelete more likely to succeed
		qiuwen_page.setMaxRetries(3);
		qiuwen_page.undeletePage(callbacks.doExtras, pageUndeleter.workerFailure);
	});
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
		<cdx-checkbox v-model="undelTalk" :disabled="submitting">
			{{ uls('若存在已删除的讨论页，也恢复', '若存在已刪除的討論頁，也恢復') }}
		</cdx-checkbox>
		<cdx-field>
			<template #label>理由：</template>
			<cdx-text-input v-model="reason" :disabled="submitting" />
		</cdx-field>
		<div v-if="list.length === 0" class="tw-loading">
			{{ uls('加载中……', '載入中……') }}
		</div>
		<template v-else>
			<h5>{{ uls('待恢复页面', '待恢復頁面') }}</h5>
			<div class="tw-batch-actions">
				<cdx-button :disabled="submitting" weight="quiet" @click="selectAll">
					{{ uls('全选', '全選') }}
				</cdx-button>
				<cdx-button :disabled="submitting" weight="quiet" @click="selectNone">
					{{ uls('全不选', '全不選') }}
				</cdx-button>
			</div>
			<div @click="onShiftClick">
				<cdx-checkbox
					v-for="item in list"
					:key="item.title"
					:model-value="selectedPages"
					:input-value="item.title"
					name="twinkle-batchundelete-pages"
					:disabled="submitting"
					@update:model-value="onToggle(item.title, $event)"
				>
					<span :class="{'tw-batch-protected': item.isProtected}">{{ item.label }}</span>
				</cdx-checkbox>
			</div>
		</template>
		<tw-status ref="statusRef" />
	</tw-dialog>
</template>

<style scoped lang="less">
.tw-batch-protected {
	color: #f00;
}
</style>

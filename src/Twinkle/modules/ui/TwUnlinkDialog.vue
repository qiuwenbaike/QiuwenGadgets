<script setup lang="ts">
import {CdxButton, CdxCheckbox, CdxField, CdxTextInput} from '@wikimedia/codex';
import {Morebits, type MorebitsBatchOperation, type MorebitsWikiPage} from './morebits';
import type {TwStatusExposed, UnlinkListData} from './types';
import {computed, ref, watch} from 'vue';
import TwDialog from './TwDialog.vue';
import TwStatus from './TwStatus.vue';
import {uls} from '../utils/useUls';
import {useShiftClick} from '../utils/useShiftClick';

declare const Twinkle: {
	changeTags: string[];
	getPref: {
		(key: 'unlinkNamespaces'): string[];
		(key: string): string | boolean;
	};
};

interface UnlinkParams {
	reason: string;
	backlinks: string[];
	imageusage: string[];
}

/** Parameters carried through the unlink workers. */
interface UnlinkWorkerParams {
	reason: string;
	unlinker: MorebitsBatchOperation;
	doBacklinks: boolean;
	doImageusage: boolean;
}

const props = defineProps<{
	title: string;
	fileSpace: boolean;
	presetReason: string;
	docHtml: string;
	list: UnlinkListData;
	footerLinks: {
		text: string;
		href: string;
	}[];
}>();

const emit = defineEmits<{
	close: [];
}>();

const open = ref(true);
const reason = ref(props.presetReason);
const selectedBacklinks = ref<string[]>([]);
const selectedImageusage = ref<string[]>([]);
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

watch(
	() => props.list.backlinks,
	(list) => {
		selectedBacklinks.value = [...list];
	}
);
watch(
	() => props.list.imageusage,
	(list) => {
		selectedImageusage.value = [...list];
	}
);

const pageUrl = (title: string) => mw.util.getUrl(title);

const onToggle = (kind: 'backlinks' | 'imageusage', value: string, modelValue: string[] | boolean) => {
	const target = kind === 'backlinks' ? selectedBacklinks : selectedImageusage;
	if (Array.isArray(modelValue)) {
		target.value = modelValue.filter((item): item is string => typeof item === 'string');
	} else if (modelValue) {
		target.value = [...target.value, value];
	} else {
		target.value = target.value.filter((item) => item !== value);
	}
};

const selectAll = (kind: 'backlinks' | 'imageusage') => {
	if (kind === 'backlinks') {
		selectedBacklinks.value = [...props.list.backlinks];
	} else {
		selectedImageusage.value = [...props.list.imageusage];
	}
};

const selectNone = (kind: 'backlinks' | 'imageusage') => {
	if (kind === 'backlinks') {
		selectedBacklinks.value = [];
	} else {
		selectedImageusage.value = [];
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
	submitting.value = true;
	evaluate(
		{
			reason: reason.value.trim(),
			backlinks: [...selectedBacklinks.value],
			imageusage: [...selectedImageusage.value],
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

// Faithful port of Twinkle.unlink.callback.evaluate / .callbacks from here on

const callbacks = {
	unlinkBacklinks: (pageobj: MorebitsWikiPage): void => {
		const params = pageobj.getCallbackParameters() as UnlinkWorkerParams;
		const unlinker = params.unlinker;
		let oldtext = pageobj.getPageText() ?? '';
		const qiuwen_page = new Morebits.wikitext.page(oldtext);
		let summaryText = '';
		let warningString: string | boolean = false;
		let text;
		// remove image usages
		if (params.doImageusage) {
			text = qiuwen_page.commentOutImage(mw.config.get('wgTitle') ?? '', uls('注释', '注釋')).getText();
			// did we actually make any changes?
			if (text === oldtext) {
				warningString = uls('文件使用', '檔案使用');
			} else {
				summaryText = uls('注释文件使用', '注釋檔案使用');
				oldtext = text;
			}
		}
		// remove backlinks
		if (params.doBacklinks) {
			text = qiuwen_page.removeLink(Morebits.pageNameNorm).getText();
			text = qiuwen_page.removeTemplate(mw.config.get('wgTitle') ?? '').getText();
			// did we actually make any changes?
			if (text === oldtext) {
				warningString = warningString
					? uls('取消链入或文件使用', '取消連入或檔案使用')
					: uls('取消链入', '取消連入');
			} else {
				summaryText = (summaryText ? `${summaryText} / ` : '') + uls('取消链接到', '取消連結到');
				oldtext = text;
			}
		}
		if (warningString) {
			// nothing to do!
			pageobj.getStatusElement().error(`${uls('未能在页面上找到', '未能在頁面上找到') + warningString}。`);
			unlinker.workerFailure();
			return;
		}
		pageobj.setPageText(text ?? '');
		pageobj.setEditSummary(
			summaryText + uls('“', '「') + Morebits.pageNameNorm + uls('”：', '」：') + params.reason
		);
		pageobj.setChangeTags(Twinkle.changeTags);
		pageobj.setCreateOption('nocreate');
		pageobj.save(unlinker.workerSuccess, unlinker.workerFailure);
	},
};

const evaluate = (params: UnlinkParams, statusContainer: HTMLElement | null, restore?: () => void): void => {
	if (!params.reason) {
		void mw.notify(uls('您必须指定取消链入的理由。', '您必須指定取消連入的理由。'), {
			type: 'warn',
			tag: 'twinkleunlink',
		});
		if (restore) {
			restore();
		}
		return;
	}
	const pages = Morebits.array.uniq([...params.backlinks, ...params.imageusage]);
	if (!pages.length) {
		void mw.notify(uls('您必须至少选择一个要取消链入的页面。', '您必須至少選擇一個要取消連入的頁面。'), {
			type: 'warn',
			tag: 'twinkleunlink',
		});
		if (restore) {
			restore();
		}
		return;
	}
	Morebits.status.init(statusContainer);
	const unlinker = new Morebits.batchOperation(
		`取消${
			params.backlinks.length
				? uls('链入', '連入') + (params.imageusage.length ? uls('与文件使用', '與檔案使用') : '')
				: uls('文件使用', '檔案使用')
		}`
	);
	unlinker.setOption('preserveIndividualStatusLines', true);
	unlinker.setPageList(pages);
	const batchParams = {
		reason: params.reason,
		unlinker,
	};
	unlinker.run((pageName) => {
		const qiuwen_page = new Morebits.wiki.page(
			pageName,
			uls('在页面“', '在頁面「') + pageName + uls('”中取消链入', '」中取消連入')
		);
		qiuwen_page.setBotEdit(true); // unlink considered a floody operation
		qiuwen_page.setCallbackParameters({
			doBacklinks: params.backlinks.includes(pageName),
			doImageusage: params.imageusage.includes(pageName),
			...batchParams,
		} satisfies UnlinkWorkerParams);
		qiuwen_page.load(callbacks.unlinkBacklinks);
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
		<!-- eslint-disable-next-line vue/no-v-html -- docHtml is assembled from localized strings and escaped page names -->
		<div class="tw-unlink-doc" v-html="docHtml"></div>
		<cdx-field>
			<template #label>理由：</template>
			<cdx-text-input v-model="reason" :disabled="submitting" />
		</cdx-field>
		<div v-if="!list.loaded" class="tw-loading">
			{{ uls('加载中……', '載入中……') }}
		</div>
		<template v-else>
			<template v-if="fileSpace">
				<h5>{{ uls('文件使用', '檔案使用') }}</h5>
				<div v-if="list.imageusage.length === 0">{{ uls('未找到文件使用。', '未找到檔案使用。') }}</div>
				<template v-else>
					<div>{{ list.namespacesText }}</div>
					<div class="tw-batch-actions">
						<cdx-button :disabled="submitting" weight="quiet" @click="selectAll('imageusage')">
							{{ uls('全选', '全選') }}
						</cdx-button>
						<cdx-button :disabled="submitting" weight="quiet" @click="selectNone('imageusage')">
							{{ uls('全不选', '全不選') }}
						</cdx-button>
					</div>
					<div @click="onShiftClick">
						<cdx-checkbox
							v-for="iuTitle in list.imageusage"
							:key="iuTitle"
							:model-value="selectedImageusage"
							:input-value="iuTitle"
							name="twinkle-unlink-imageusage"
							:disabled="submitting"
							@update:model-value="onToggle('imageusage', iuTitle, $event)"
						>
							<a :href="pageUrl(iuTitle)" target="_blank" rel="noopener noreferrer">{{ iuTitle }}</a>
						</cdx-checkbox>
					</div>
				</template>
			</template>
			<h5>{{ uls('链入', '連入') }}</h5>
			<div v-if="list.backlinks.length === 0">{{ uls('未找到链入。', '未找到連入。') }}</div>
			<template v-else>
				<div>{{ list.namespacesText }}</div>
				<div class="tw-batch-actions">
					<cdx-button :disabled="submitting" weight="quiet" @click="selectAll('backlinks')">
						{{ uls('全选', '全選') }}
					</cdx-button>
					<cdx-button :disabled="submitting" weight="quiet" @click="selectNone('backlinks')">
						{{ uls('全不选', '全不選') }}
					</cdx-button>
				</div>
				<div @click="onShiftClick">
					<cdx-checkbox
						v-for="blTitle in list.backlinks"
						:key="blTitle"
						:model-value="selectedBacklinks"
						:input-value="blTitle"
						name="twinkle-unlink-backlinks"
						:disabled="submitting"
						@update:model-value="onToggle('backlinks', blTitle, $event)"
					>
						<a :href="pageUrl(blTitle)" target="_blank" rel="noopener noreferrer">{{ blTitle }}</a>
					</cdx-checkbox>
				</div>
			</template>
		</template>
		<tw-status ref="statusRef" />
	</tw-dialog>
</template>

<style scoped lang="less">
.tw-unlink-doc {
	margin-bottom: 0.5em;
}
</style>

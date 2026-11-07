<script setup lang="ts">
import {CdxCheckbox, CdxField, CdxSelect, type MenuItemData} from '@wikimedia/codex';
import {Morebits, type MorebitsWikiPage} from './morebits';
import {computed, ref, watch} from 'vue';
import TwDialog from './TwDialog.vue';
import TwStatus from './TwStatus.vue';
import type {TwStatusExposed} from './types';
import {uls} from '../utils/useUls';

declare const Twinkle: {
	changeTags: string[];
	getPref: (key: string) => string | boolean;
};

interface TagItem {
	value: string;
	label: string;
	url: string;
}

interface TagGroup {
	header: string;
	subgroups: {
		title?: string;
		items: TagItem[];
	}[];
}

interface StubParams {
	patrol: boolean;
	tags: string[];
	group: boolean;
}

const props = defineProps<{
	title: string;
	/** Display label of the tagging mode, e.g. 条目 (set by the module entry). */
	mode: string;
	initialSortOrder: 'cat' | 'alpha';
	showPatrol: boolean;
	initialPatrol: boolean;
	customTags: TagItem[];
	catGroups: TagGroup[];
	alphaTags: TagItem[];
	footerLinks: {
		text: string;
		href: string;
	}[];
}>();

const emit = defineEmits<{
	close: [];
}>();

const open = ref(true);
const sortOrder = ref<'cat' | 'alpha'>(props.initialSortOrder);
const selectedTags = ref<string[]>([]);
const patrol = ref(props.initialPatrol);
const submitting = ref(false);
const statusRef = ref<TwStatusExposed | null>(null);

const sortOrderItems: MenuItemData[] = [
	{value: 'cat', label: uls('按类型', '按類別')},
	{value: 'alpha', label: '按字母'},
];

const displayGroups = computed<TagGroup[]>(() => {
	const groups: TagGroup[] = [];
	if (props.customTags.length > 0) {
		groups.push({
			header: uls('自定义模板', '自訂模板'),
			subgroups: [{items: props.customTags}],
		});
	}
	if (sortOrder.value === 'cat') {
		groups.push(...props.catGroups);
	} else {
		groups.push({
			header: '',
			subgroups: [{items: props.alphaTags}],
		});
	}
	return groups;
});

const onTagToggle = (value: string, modelValue: string[] | boolean) => {
	if (Array.isArray(modelValue)) {
		selectedTags.value = modelValue.filter((item): item is string => typeof item === 'string');
	} else if (modelValue) {
		selectedTags.value = [...selectedTags.value, value];
	} else {
		selectedTags.value = selectedTags.value.filter((item) => item !== value);
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
			patrol: patrol.value,
			tags: [...selectedTags.value],
			group: false,
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

const callbacks = {
	main: (pageobj: MorebitsWikiPage): void => {
		const params = pageobj.getCallbackParameters() as StubParams;
		let summaryText = '加入';
		let tags: string[] = [];
		// Remove tags that become superfluous with this action
		let pageText = pageobj.getPageText() ?? '';
		// Check for preexisting tags
		for (const tag of params.tags) {
			const tagRe = new RegExp(`(\\{\\{${tag}(\\||\\}\\}))`, 'im');
			if (tagRe.exec(pageText)) {
				Morebits.status.info(
					uls('信息', '資訊'),
					uls(`在页面上找到{{${tag}}}……跳过`, `在頁面上找到{{${tag}}}……跳過`)
				);
			} else {
				tags = tags.concat(tag);
			}
		}
		tags.sort();
		const totalTags = tags.length;
		const addTag = (tagName: string, tagIndex: number): void => {
			pageText += `\n{{${tagName}}}`;
			if (tagIndex > 0) {
				if (tagIndex === totalTags - 1) {
					summaryText += '和';
				} else if (tagIndex < totalTags - 1) {
					summaryText += '、';
				}
			}
			summaryText += '{{[[';
			summaryText += tagName.includes(':') ? tagName : `Template:${tagName}|${tagName}`;
			summaryText += ']]}}';
		};
		// Faithful port of Twinkle.stub.callbacks.main; the index lets the
		// 、/和 separators in addTag actually kick in (they never fired in the
		// original since addTag was called without the index argument)
		tags.forEach((tag, tagIndex) => {
			addTag(tag, tagIndex);
		});
		summaryText += uls('标记到', '標記到') + props.mode;
		pageobj.setPageText(pageText);
		pageobj.setEditSummary(summaryText);
		pageobj.setChangeTags(Twinkle.changeTags);
		pageobj.setWatchlist(Twinkle.getPref('watchStubbedPages') === true);
		pageobj.setMinorEdit(Twinkle.getPref('markStubbedPagesAsMinor') === true);
		pageobj.setCreateOption('nocreate');
		pageobj.save();
		if (params.patrol) {
			pageobj.patrol();
		}
	},
};

const evaluate = (params: StubParams, statusContainer: HTMLElement | null, restore?: () => void): void => {
	switch (props.mode) {
		case '條目':
		case '条目':
			params.group = false;
			break;
		default:
			void mw.notify(`Twinkle.stub：未知模式 ${props.mode}`, {
				type: 'warn',
				tag: 'twinklestub',
			});
			if (restore) {
				restore();
			}
			return;
	}
	// Duplicate tags are tolerated by callbacks.main, which skips preexisting ones
	if (params.tags.length === 0) {
		void mw.notify(uls('必须选择至少一个标记！', '必須選擇至少一個標記！'), {
			type: 'warn',
			tag: 'twinklestub',
		});
		if (restore) {
			restore();
		}
		return;
	}
	Morebits.status.init(statusContainer);
	Morebits.wiki.actionCompleted.redirect = mw.config.get('wgPageName');
	Morebits.wiki.actionCompleted.notice = uls('标记完成，将在几秒内刷新页面', '標記完成，將在幾秒內重新整理頁面');
	const qiuwen_page = new Morebits.wiki.page(mw.config.get('wgPageName'), uls('正在标记', '正在標記') + props.mode);
	qiuwen_page.setCallbackParameters(params);
	qiuwen_page.load(callbacks.main);
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
		<cdx-checkbox v-if="showPatrol" v-model="patrol" :disabled="submitting">
			{{ uls('标记页面为已巡查', '標記頁面為已巡查') }}
		</cdx-checkbox>
		<cdx-field>
			<template #label>{{ uls('查看列表：', '檢視列表：') }}</template>
			<cdx-select v-model:selected="sortOrder" :menu-items="sortOrderItems" :disabled="submitting" />
		</cdx-field>
		<div v-for="(group, groupIndex) in displayGroups" :key="`${group.header}-${groupIndex}`">
			<h5 v-if="group.header" class="tw-stub-group-header">{{ group.header }}</h5>
			<div v-for="(subgroup, subgroupIndex) in group.subgroups" :key="`${subgroup.title ?? ''}-${subgroupIndex}`">
				<b v-if="subgroup.title">{{ subgroup.title }}</b>
				<cdx-checkbox
					v-for="item in subgroup.items"
					:key="item.value"
					:model-value="selectedTags"
					:input-value="item.value"
					name="twinkle-stub-tags"
					:disabled="submitting"
					@update:model-value="onTagToggle(item.value, $event)"
				>
					{{ item.label }}
					<a :href="item.url" target="_blank" rel="noopener noreferrer" class="tw-stub-template-link"> › </a>
				</cdx-checkbox>
			</div>
		</div>
		<tw-status ref="statusRef" />
	</tw-dialog>
</template>

<style scoped lang="less">
.tw-stub-group-header {
	margin: 0.5em 0 0;
}

.tw-stub-template-link {
	margin-left: 0.25em;
}
</style>

<script setup lang="ts">
import {CdxButton, CdxCheckbox, CdxField, CdxSelect, CdxTextInput, type MenuItemData} from '@wikimedia/codex';
import {onMounted, ref} from 'vue';
import type {FilterOptions} from './types';

const props = defineProps<{
	rightsLogOnly: boolean;
	instructions: string;
	initialOptions: FilterOptions;
	filterAtStartup: boolean;
	highlightAtStartup: boolean;
	onFilter: (options: FilterOptions, highlight: boolean) => void;
}>();

const type = ref<string | null>(props.initialOptions.type);
const invert = ref(props.initialOptions.invert);
const search = ref(props.initialOptions.search);
const caseSensitive = ref(props.initialOptions.caseSensitive);
const lastClickedHighlight = ref(false);
const typeItems: MenuItemData[] = [
	{value: '0', label: mw.message('filter-option-added').plain()},
	{value: '1', label: mw.message('filter-option-removed').plain()},
	{value: '2', label: mw.message('filter-option-added-or-removed').plain()},
	{value: '3', label: mw.message('filter-option-added-removed-static').plain()},
];
const msg = (key: string): string => mw.message(`filter-${key}`).plain();

const filter = (highlight?: boolean): void => {
	props.onFilter(
		{
			type: type.value ?? '0',
			invert: invert.value,
			search: search.value,
			caseSensitive: caseSensitive.value,
		},
		!!(highlight || lastClickedHighlight.value)
	);
};

const chooseHighlight = (highlight: boolean): void => {
	lastClickedHighlight.value = highlight;
	filter();
};

onMounted((): void => {
	document.getElementById('log-filter__regex')?.focus();
	if (props.filterAtStartup) {
		filter(props.highlightAtStartup);
	}
});
</script>

<template>
	<fieldset id="rightsFilter" class="log-filter">
		<legend>{{ msg('legend') }}</legend>
		<div class="log-filter__instructions">{{ instructions }}</div>
		<cdx-field v-if="rightsLogOnly" class="log-filter__select">
			<cdx-select
				id="log-filter__select"
				v-model:selected="type"
				:aria-label="msg('legend')"
				:menu-items="typeItems"
				@update:selected="filter()"
			/>
		</cdx-field>
		<cdx-field class="log-filter__regex">
			<template #label>{{ msg('regex-label') }}</template>
			<cdx-text-input id="log-filter__regex" v-model="search" @update:model-value="filter()" />
		</cdx-field>
		<div class="log-filter__checkboxes">
			<cdx-checkbox id="log-filter__invert" v-model="invert" @update:model-value="filter()">
				{{ msg('invert-label') }}
			</cdx-checkbox>
			<cdx-checkbox id="log-filter__case" v-model="caseSensitive" @update:model-value="filter()">
				{{ msg('case-label') }}
			</cdx-checkbox>
		</div>
		<div class="log-filter__buttons">
			<cdx-button action="progressive" weight="primary" @click="chooseHighlight(false)">
				{{ msg('filter-button') }}
			</cdx-button>
			<cdx-button action="progressive" weight="primary" @click="chooseHighlight(true)">
				{{ msg('highlight-button') }}
			</cdx-button>
		</div>
	</fieldset>
</template>

<style scoped lang="less">
.log-filter {
	display: flex;
	flex-flow: row wrap;
	align-items: baseline;
	flex: 1 1 auto;
	justify-content: space-evenly;
	gap: 0.25em;
}

.log-filter__select {
	display: flex;
	flex-flow: row wrap;
	align-items: center;
	gap: 0.25em;

	:deep(.cdx-select) {
		margin-top: 0;
	}
}

.log-filter__instructions,
.log-filter__regex,
.log-filter__checkboxes,
.log-filter__buttons {
	display: flex;
	flex-flow: row wrap;
	align-items: flex-start;
	gap: 0.25em;
}

.log-filter__checkboxes :deep(.cdx-checkbox) {
	margin-bottom: 0;
}
</style>

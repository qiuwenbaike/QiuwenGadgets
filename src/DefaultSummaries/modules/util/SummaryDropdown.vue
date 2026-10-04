<script setup lang="ts">
import {CdxSelect, type MenuItemData} from '@wikimedia/codex';
import {computed} from 'vue';

const props = defineProps<{
	label: string;
	summaries: string[];
	onSelect: (summary: string) => void;
}>();

const menuItems = computed<MenuItemData[]>(() =>
	props.summaries.map((summary) => ({
		value: summary,
		label: summary,
	}))
);

const selectSummary = (summary: string | number | null): void => {
	if (typeof summary === 'string') {
		props.onSelect(summary);
	}
};
</script>

<template>
	<cdx-select :selected="null" :menu-items="menuItems" :default-label="label" @update:selected="selectSummary" />
</template>

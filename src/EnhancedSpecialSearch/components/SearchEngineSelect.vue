<script setup lang="ts">
import {CdxField, CdxSelect, type MenuItemData} from '@wikimedia/codex';
import {computed, ref, watch} from 'vue';
import type {OptionData} from '../modules/getOptionData';
import {getMessage} from '../modules/i18n';

const props = defineProps<{
	options: OptionData[];
	onSelect: (index: string) => void;
}>();

const selectedIndex = ref<string | null>('0');
const menuItems = computed<MenuItemData[]>(() =>
	props.options.map(({site}, index) => ({
		value: String(index),
		label: site,
	}))
);

watch(selectedIndex, (index) => {
	if (index !== null) {
		props.onSelect(index);
	}
});
</script>

<template>
	<cdx-field id="enhancedSearchSelectField">
		<template #label>{{ getMessage('Search engine') }}</template>
		<cdx-select v-model:selected="selectedIndex" :menu-items="menuItems" />
	</cdx-field>
</template>

<style scoped>
#enhancedSearchSelectField {
	display: flex;
	flex-flow: row wrap;
	align-items: center;
	gap: 0.5em;
	margin: 0;
}
</style>

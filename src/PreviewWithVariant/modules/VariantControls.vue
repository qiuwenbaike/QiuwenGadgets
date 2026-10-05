<script setup lang="ts">
import {CdxCheckbox, CdxField, CdxSelect, type MenuItemData} from '@wikimedia/codex';
import {computed, ref, watch} from 'vue';

const props = defineProps<{
	initialEnabled: boolean;
	initialVariant: string;
	variants: MenuItemData[];
	checkboxLabel: string;
	selectLabel: string;
	onVariantChange: (variant: string) => void;
}>();

const enabled = ref(props.initialEnabled);
const selectedVariant = ref<string | null>(props.initialVariant);
const menuItems = computed(() => props.variants);

watch(selectedVariant, (variant) => {
	if (variant !== null) {
		props.onVariantChange(variant);
	}
});

const getSelectedVariant = (): string | undefined => (enabled.value ? (selectedVariant.value ?? undefined) : undefined);

defineExpose({getSelectedVariant});
</script>

<template>
	<div id="pwv-area">
		<cdx-checkbox v-model="enabled" class="pwv-variant-switch">{{ checkboxLabel }}</cdx-checkbox>
		<cdx-field class="pwv-variant-select">
			<template #label>{{ selectLabel }}</template>
			<cdx-select v-model:selected="selectedVariant" :menu-items="menuItems" :disabled="!enabled" />
		</cdx-field>
	</div>
</template>

<style lang="less" scoped>
#pwv-area {
	display: flex;
	flex-flow: row wrap;
	align-items: baseline;
	gap: 0.75em;

	.pwv-variant-switch,
	.pwv-variant-select {
		display: flex;
		flex-wrap: wrap;
		align-items: baseline;
		flex-basis: content;
		margin: 0;
	}

	.cdx-checkbox {
		margin-bottom: 0;
	}
}
</style>

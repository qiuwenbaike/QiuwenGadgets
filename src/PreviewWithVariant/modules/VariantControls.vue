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
	<cdx-checkbox v-model="enabled">{{ checkboxLabel }}</cdx-checkbox>
	<cdx-field class="pwv-variant-select">
		<template #label>{{ selectLabel }}</template>
		<cdx-select v-model:selected="selectedVariant" :menu-items="menuItems" :disabled="!enabled" />
	</cdx-field>
</template>

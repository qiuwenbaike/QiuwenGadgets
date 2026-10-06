<script setup lang="ts">
import {ref, watch} from 'vue';
import {CdxCheckbox} from '@wikimedia/codex';

const props = defineProps<{
	label: string;
	onChange: (selected: boolean) => void;
}>();

const selected = ref(false);

watch(selected, props.onChange);
</script>

<template>
	<cdx-checkbox v-model="selected">{{ label }}</cdx-checkbox>
</template>

<script setup lang="ts">
import {CdxCheckbox, CdxDialog} from '@wikimedia/codex';
import type {PrintOptions} from './modules/types';
import {getMessage} from './modules/i18n';
import {reactive} from 'vue';

const props = defineProps<{
	state: {
		open: boolean;
	};
}>();

const emit = defineEmits<{
	'update:open': [value: boolean];
	print: [options: PrintOptions];
}>();

const options = reactive<PrintOptions>({
	enhanced: true,
	noimages: false,
	norefs: false,
	notoc: false,
	nobackground: false,
	blacktext: true,
});

const print = (): void => {
	const selectedOptions: PrintOptions = {...options};
	emit('update:open', false);
	window.setTimeout(() => emit('print', selectedOptions), 300);
};
</script>

<template>
	<cdx-dialog
		:open="props.state.open"
		:title="getMessage('Print this page')"
		:primary-action="{label: getMessage('Print'), actionType: 'progressive'}"
		:default-action="{label: getMessage('Cancel')}"
		:use-close-button="true"
		@update:open="emit('update:open', $event)"
		@default="emit('update:open', false)"
		@primary="print"
	>
		<div class="print-options">
			<cdx-checkbox v-model="options.enhanced">{{ getMessage('Enhanced') }}</cdx-checkbox>
			<cdx-checkbox v-model="options.noimages">{{ getMessage('NoImages') }}</cdx-checkbox>
			<cdx-checkbox v-model="options.norefs">{{ getMessage('NoReferences') }}</cdx-checkbox>
			<cdx-checkbox v-model="options.notoc">{{ getMessage('NoTableOfContents') }}</cdx-checkbox>
			<cdx-checkbox v-model="options.nobackground">{{ getMessage('NoBackground') }}</cdx-checkbox>
			<cdx-checkbox v-model="options.blacktext">{{ getMessage('BlackText') }}</cdx-checkbox>
		</div>
	</cdx-dialog>
</template>

<style scoped lang="less">
.print-options {
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
}
</style>

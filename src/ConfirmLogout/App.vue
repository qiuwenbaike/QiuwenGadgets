<script setup lang="ts">
import {CdxDialog} from '@wikimedia/codex';
import {getMessage} from './modules/i18n';

const props = defineProps<{
	state: {
		open: boolean;
	};
	onConfirm: () => void;
	message: string;
}>();

const emit = defineEmits<{
	'update:open': [value: boolean];
}>();

const close = (): void => {
	emit('update:open', false);
};

const confirm = (): void => {
	close();
	props.onConfirm();
};
</script>

<template>
	<cdx-dialog
		:open="state.open"
		:title="message"
		:primary-action="{label: getMessage('ConfirmAction'), actionType: 'progressive'}"
		:default-action="{label: getMessage('Cancel')}"
		:use-close-button="true"
		@primary="confirm"
		@default="close"
		@update:open="emit('update:open', $event)"
	/>
</template>

<script setup lang="ts">
import {CdxDialog} from '@wikimedia/codex';
import {getMessage} from './utils/i18n';

const props = defineProps<{
	open: boolean;
	message: string;
	onConfirm: () => void;
	onCancel: () => void;
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

const cancel = (): void => {
	close();
	props.onCancel();
};

const handleOpenChange = (open: boolean): void => {
	emit('update:open', open);
	if (!open) {
		props.onCancel();
	}
};
</script>

<template>
	<cdx-dialog
		:open="open"
		:title="message"
		:primary-action="{label: getMessage('Confirm'), actionType: 'progressive'}"
		:default-action="{label: getMessage('Cancel')}"
		:use-close-button="true"
		@update:open="handleOpenChange"
		@primary="confirm"
		@default="cancel"
	/>
</template>

<style scoped lang="less">
.cdx-dialog :deep(.cdx-dialog__footer) {
	border-top: 0.1rem solid #0645ad;
	display: flex;
	justify-content: space-evenly;
}

.cdx-dialog :deep(.cdx-dialog__title) {
	font-size: 1.2rem;
	font-weight: 500;
	line-height: 1.8;
	padding: 0.4em 0;
}
</style>

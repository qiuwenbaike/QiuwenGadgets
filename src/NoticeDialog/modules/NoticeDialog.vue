<script setup lang="ts">
import {CdxButton, CdxDialog} from '@wikimedia/codex';

interface NoticeAction {
	label: string;
	onClick: () => void;
}

const props = defineProps<{
	title: string;
	message: string;
	cancelLabel: string;
	helpLabel: string;
	helpURL: string;
	primary?: NoticeAction;
	actions?: NoticeAction[];
	onClose: () => void;
}>();

const close = (): void => {
	props.onClose();
};

const handleOpenChange = (open: boolean): void => {
	if (!open) {
		close();
	}
};

const runAction = (action: NoticeAction): void => {
	close();
	action.onClick();
};

const runPrimary = (): void => {
	if (!props.primary) {
		return;
	}
	runAction(props.primary);
};
</script>

<template>
	<cdx-dialog
		:open="true"
		:title="title"
		:primary-action="primary ? {label: primary.label, actionType: 'progressive'} : undefined"
		:default-action="{label: cancelLabel}"
		:use-close-button="true"
		@update:open="handleOpenChange"
		@default="close"
		@primary="runPrimary"
	>
		<p>{{ message }}</p>
		<div v-if="actions && actions.length" class="util-dialog-actions">
			<cdx-button
				v-for="action in actions"
				:key="action.label"
				weight="normal"
				action="progressive"
				@click="runAction(action)"
			>
				{{ action.label }}
			</cdx-button>
		</div>
		<template #footer-text>
			<a :href="helpURL">{{ helpLabel }}</a>
		</template>
	</cdx-dialog>
</template>

<style scoped lang="less">
.util-dialog-actions {
	margin-top: 0.75rem;
	display: flex;
	flex-flow: row wrap;
	place-content: space-between center;
	gap: 1em;
}
</style>

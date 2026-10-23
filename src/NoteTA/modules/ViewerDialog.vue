<script setup lang="ts">
import {CdxDialog} from '@wikimedia/codex';
import {getMessage} from './i18n';

const props = defineProps<{
	state: {
		open: boolean;
		loading: boolean;
		output: string;
		errorMessage: string;
		errors: string[];
		retryable: boolean;
	};
	onRetry: () => void;
}>();

const emit = defineEmits<{
	'update:open': [open: boolean];
}>();

const close = (): void => {
	emit('update:open', false);
};
</script>

<template>
	<cdx-dialog
		:open="state.open"
		:title="getMessage('Title')"
		:default-action="{label: getMessage('Close')}"
		:primary-action="state.retryable ? {label: getMessage('Retry'), actionType: 'progressive'} : undefined"
		:use-close-button="true"
		@update:open="emit('update:open', $event)"
		@default="close"
		@primary="props.onRetry"
	>
		<p v-if="state.loading">{{ getMessage('Loading') }}</p>
		<div v-else-if="state.errorMessage" class="x-noteTA-viewer-output">
			<p class="error">{{ state.errorMessage }}</p>
			<ol v-if="state.errors.length">
				<li v-for="(error, index) in state.errors" :key="index">
					{{ error }}
				</li>
			</ol>
		</div>
		<!-- MediaWiki's parser returns sanitized HTML for this output. -->
		<!-- eslint-disable-next-line vue/no-v-html -->
		<div v-else class="x-noteTA-viewer-output" v-html="state.output"></div>
	</cdx-dialog>
</template>

<style lang="less" scoped>
@import (reference) '../../variables.less';

.x-noteTA-viewer-output {
	.error {
		color: @color--error;
		font-size: 1.2em;
		font-weight: bold;
	}
}
</style>

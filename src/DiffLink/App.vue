<script setup lang="ts">
import {CdxButton, CdxDialog} from '@wikimedia/codex';
import {ref, watch} from 'vue';
import {getMessage} from './modules/i18n';

interface CopyItem {
	label: string;
	text: string;
}

const props = defineProps<{
	open: boolean;
	items: CopyItem[];
	onClose: () => void;
}>();

const emit = defineEmits<{
	'update:open': [value: boolean];
}>();
const isOpen = ref(props.open);

watch(
	() => props.open,
	(value) => {
		isOpen.value = value;
	},
	{immediate: true}
);

const close = (): void => {
	isOpen.value = false;
	emit('update:open', false);
	props.onClose();
};

const handleOpenChange = (value: boolean): void => {
	isOpen.value = value;
	if (!value) {
		close();
	}
};

const copyText = (text: string): void => {
	(async () => {
		try {
			if (navigator.clipboard && window.isSecureContext) {
				await navigator.clipboard.writeText(text);
				return;
			}
		} catch {}

		const helper = document.createElement('textarea');
		helper.value = text;
		helper.setAttribute('readonly', 'true');
		helper.style.position = 'fixed';
		helper.style.top = '-9999px';
		helper.style.left = '-9999px';
		document.body.append(helper);
		helper.select();
		document.execCommand('copy');
		helper.remove();
	})().then(() => {
		void mw.notify(getMessage('Copied'), {
			type: 'success',
			tag: 'DiffLinks',
		});
	});
};
</script>

<template>
	<cdx-dialog
		v-model:open="isOpen"
		:title="getMessage('Diff')"
		:default-action="{label: getMessage('Close')}"
		:use-close-button="true"
		@update:open="handleOpenChange"
		@default="close"
	>
		<div class="diff-link-copy-list">
			<div v-for="item in items" :key="item.text" class="diff-link-copy-item">
				<code class="diff-link-copy-text">{{ item.text }}</code>
				<cdx-button weight="primary" @click="copyText(item.text)">{{ getMessage('Copy') }}</cdx-button>
			</div>
		</div>
	</cdx-dialog>
</template>

<style scoped lang="less">
.diff-link-copy-list {
	display: flex;
	flex-direction: column;
	gap: 0.75rem;
}

.diff-link-copy-item {
	display: grid;
	gap: 0.5rem;
}

.diff-link-copy-text {
	display: block;
	padding: 0.5rem 0.75rem;
	border: 1px solid #eaecf0;
	border-radius: 0.25rem;
	background: #f8f9fa;
	color: #202122;
	font-size: 0.875rem;
	word-break: break-all;
}
</style>

<script setup lang="ts">
import {CdxButton, CdxDialog, CdxIcon} from '@wikimedia/codex';
import {ref, watch} from 'vue';
import {copyText} from './modules/copyText';
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

/**
 * SVG paths inlined from `@wikimedia/codex-icons` v2.7.0.
 *
 * MediaWiki does not ship a ResourceLoader module that bundles
 * `@wikimedia/codex-icons` (see https://www.mediawiki.org/wiki/Codex),
 * so the path data is copied here verbatim and rendered as inline SVG
 * to keep the gadget self-contained while still sourcing the icons
 * from `@wikimedia/codex-icons`.
 *
 * @see {@link https://doc.wikimedia.org/codex/latest/icons/}
 */
/** Path for `cdxIconCopy`. */
const cdxIconCopy = {
	path: 'M13 19H1V7h6V1h12v12h-6zm-6-6V9H3v8h8v-4zm2-2h8V3H9z',
	shouldFlip: true,
};
</script>

<template>
	<cdx-dialog
		v-model:open="isOpen"
		:title="getMessage('Share URL for the page')"
		:default-action="{label: getMessage('Close')}"
		:use-close-button="true"
		@update:open="handleOpenChange"
		@default="close"
	>
		<div class="short-url-copy-list">
			<div v-for="item in items" :key="item.text" class="short-url-copy-item">
				<span>{{ item.label }}</span>
				<code class="short-url-copy-text">{{ item.text }}</code>
				<cdx-button weight="normal" :aria-label="getMessage('Copy')" @click="copyText(item.text)">
					<cdx-icon :icon="cdxIconCopy" />
					{{ getMessage('Copy') }}
				</cdx-button>
			</div>
		</div>
	</cdx-dialog>
</template>

<style scoped lang="less">
.short-url-copy-list {
	display: flex;
	flex-direction: column;
	gap: 0.75rem;
}

.short-url-copy-item {
	display: flex;
	grid-gap: 0.5rem;
	gap: 0.5rem;
	justify-content: space-between;
}

.short-url-copy-text {
	display: block;
	padding: 0.5rem 0.75rem;
	border: 1px solid #eaecf0;
	border-radius: 0.25rem;
	background: #f8f9fa;
	color: #202122;
	font-size: 0.875rem;
	word-break: break-all;
	flex: 1 1 100%;
}
</style>

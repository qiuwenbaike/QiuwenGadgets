<script setup lang="ts">
import {CdxButton, CdxDialog, CdxIcon} from '@wikimedia/codex';

interface CopyItem {
	label?: string;
	text: string;
}

const props = defineProps<{
	title: string;
	items: CopyItem[];
	copyLabel: string;
	closeLabel: string;
	onCopy: (text: string) => void | Promise<void>;
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

const copy = (text: string): void => {
	void props.onCopy(text);
};

/**
 * SVG paths inlined from `@wikimedia/codex-icons` v2.8.0.
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
		:open="true"
		:title="title"
		:default-action="{label: closeLabel}"
		:use-close-button="true"
		@update:open="handleOpenChange"
		@default="close"
	>
		<div class="util-dialog-copy-list">
			<div v-for="item in items" :key="item.text" class="util-dialog-copy-item">
				<div v-if="item.label" class="util-dialog-copy-label">{{ item.label }}</div>
				<code class="util-dialog-copy-text">{{ item.text }}</code>
				<cdx-button weight="normal" :aria-label="copyLabel" @click="copy(item.text)">
					<cdx-icon :icon="cdxIconCopy" />
					{{ copyLabel }}
				</cdx-button>
			</div>
		</div>
	</cdx-dialog>
</template>

<style scoped lang="less">
.util-dialog-copy-list {
	display: flex;
	flex-direction: column;
	gap: 0.75rem;
}

.util-dialog-copy-item {
	display: flex;
	gap: 0.5rem;
	flex-wrap: wrap;
	justify-content: space-between;
	align-items: center;
}

.util-dialog-copy-text {
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

<script setup lang="ts">
import {CdxButton, CdxField, CdxMessage, CdxProgressBar, CdxSelect} from '@wikimedia/codex';
import {computed, ref, watch} from 'vue';

interface VariantOption {
	value: string;
	label: string;
}

const props = defineProps<{
	initialVariant: string;
	caption: string;
	variants: VariantOption[];
	fetchPreview: (variant: string) => Promise<HTMLElement>;
	getErrorMessage: (error: unknown) => string;
	onPreviewStart: () => void;
	onPreviewEnd: () => void;
	onShowPreview: () => void;
}>();

const selectedVariant = ref(props.initialVariant);
const activeVariant = ref(props.initialVariant);
const previewNode = ref<HTMLElement | null>(null);
const loading = ref(false);
const errorMessage = ref('');
const failedVariant = ref<string>();
const menuItems = computed(() => props.variants);
const previews = new Map<string, HTMLElement>();
const pendingRequests = new Map<string, Promise<boolean>>();
const loadingMessage = mw.msg('pwv-2017-loading');
const retryLabel = mw.msg('pwv-2017-retry');

const loadVariant = (variant: string): Promise<boolean> => {
	const cachedPreview = previews.get(variant);
	if (cachedPreview !== undefined) {
		previewNode.value = cachedPreview;
		activeVariant.value = variant;
		errorMessage.value = '';
		return Promise.resolve(true);
	}

	const pendingRequest = pendingRequests.get(variant);
	if (pendingRequest) {
		return pendingRequest;
	}

	errorMessage.value = '';
	failedVariant.value = undefined;
	loading.value = true;
	const request = props
		.fetchPreview(variant)
		.then((node) => {
			previews.set(variant, node);
			previewNode.value = node;
			activeVariant.value = variant;
			return true;
		})
		.catch((error: unknown) => {
			errorMessage.value = props.getErrorMessage(error);
			failedVariant.value = variant;
			selectedVariant.value = activeVariant.value;
			return false;
		})
		.finally(() => {
			loading.value = false;
			pendingRequests.delete(variant);
		});
	pendingRequests.set(variant, request);
	return request;
};

watch(selectedVariant, (variant) => {
	if (variant !== activeVariant.value) {
		void loadVariant(variant);
	}
});

watch(
	previewNode,
	(node) => {
		previewNode.value = node;
	},
	{flush: 'post'}
);

const retry = (): void => {
	if (failedVariant.value) {
		selectedVariant.value = failedVariant.value;
		void loadVariant(failedVariant.value);
	}
};

const preview = async (): Promise<void> => {
	props.onPreviewStart();
	try {
		await loadVariant(selectedVariant.value);
		props.onShowPreview();
	} finally {
		props.onPreviewEnd();
	}
};

const invalidate = (): void => {
	previews.clear();
	previewNode.value = null;
	errorMessage.value = '';
	failedVariant.value = undefined;
	activeVariant.value = selectedVariant.value;
};

defineExpose({invalidate, preview});
</script>

<template>
	<div class="pwv-2017-preview">
		<cdx-field>
			<template #label>{{ caption }}</template>
			<cdx-select v-model:selected="selectedVariant" :menu-items="menuItems" :disabled="loading" />
		</cdx-field>
		<cdx-progress-bar v-if="loading" :aria-label="loadingMessage" :inline="true" />
		<cdx-message v-if="errorMessage" type="error">
			{{ errorMessage }}
			<cdx-button :disabled="loading" @click="retry">{{ retryLabel }}</cdx-button>
		</cdx-message>
		<!-- eslint-disable-next-line vue/no-v-html --- content of previewNode is from a trusted source -->
		<div class="pwv-2017-preview__content" v-html="previewNode" />
	</div>
</template>

<style lang="less">
.pwv-2017-preview {
	.pwv-2017-preview__content .firstHeading {
		margin-top: 0;
	}
}
</style>

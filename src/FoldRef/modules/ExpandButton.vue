<script setup lang="ts">
import {CdxButton} from '@wikimedia/codex';
import {getMessage} from './i18n';

const props = defineProps<{
	onExpand: () => void;
}>();
</script>

<template>
	<div class="fold-ref-expand">
		<cdx-button weight="normal" @click="props.onExpand">
			{{ getMessage('Expand') }}
		</cdx-button>
	</div>
</template>

<style scoped lang="less">
.fold-ref-expand {
	position: relative;
	bottom: 2em;
	left: 50%;
	width: 20%;
	height: 2em;
	transform: translateX(-50%);

	:deep(.cdx-button) {
		width: 100%;
		height: 100%;
		border-radius: 0.5em 0.5em 0 0;
		line-height: 2em;
	}
}
</style>

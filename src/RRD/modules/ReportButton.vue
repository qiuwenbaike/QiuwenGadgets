<script setup lang="ts">
import * as OPTIONS from '../options.json';
import {CdxButton} from '@wikimedia/codex';
import {computed} from 'vue';
import {getMessage} from './i18n';
import {isSpecialLog} from './isSpecialLog';

const props = defineProps<{
	onClick: () => void;
}>();

const buttonLabel = computed(() =>
	isSpecialLog() ? getMessage('reportButtonLogText') : getMessage('reportButtonText')
);
const buttonTitle = computed(() => getMessage('reportButtonTitle') + OPTIONS.rrdPage);
</script>

<template>
	<cdx-button
		class="rrd__report"
		weight="primary"
		:type="'button'"
		:aria-label="buttonTitle"
		:title="buttonTitle"
		@click="props.onClick"
	>
		{{ buttonLabel }}
	</cdx-button>
</template>

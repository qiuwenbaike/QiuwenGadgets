<script setup lang="ts">
import {CdxButton} from '@wikimedia/codex';
import {getMessage} from '../i18n';

const props = defineProps<{
	onClick: () => void;
}>();
</script>

<template>
	<span>
		{{ getMessage('Edit Confilict Notice') }}
		<cdx-button weight="quiet" type="button" size="small" @click="props.onClick">
			{{ getMessage('Refresh') }}
		</cdx-button>
	</span>
</template>

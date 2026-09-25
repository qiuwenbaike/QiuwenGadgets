<script setup lang="ts">
import {CdxDialog} from '@wikimedia/codex';
import {getMessage} from './modules/i18n';
import {ref} from 'vue';

defineProps<{
	accessKeyItems: {
		key: string;
		label: string;
	}[];
}>();

const open = ref(false);

const close = (): void => {
	open.value = false;
};
</script>

<template>
	<a href="#" accesskey="?" style="display: none" @click.prevent="open = !open">{{ getMessage('Text') }}</a>
	<cdx-dialog
		v-model:open="open"
		:title="getMessage('Title')"
		:default-action="{label: getMessage('Close')}"
		:use-close-button="true"
		@default="close"
	>
		<table class="wikitable access-key-cheatsheet-table">
			<tbody>
				<tr v-for="(item, index) in accessKeyItems" :key="index">
					<th>{{ item.key }}</th>
					<td>{{ item.label }}</td>
				</tr>
			</tbody>
		</table>
	</cdx-dialog>
</template>

<style scoped lang="less">
.access-key-cheatsheet-table {
	width: 100%;
}
</style>

<script setup lang="ts">
import {CdxDialog} from '@wikimedia/codex';
import {getMessage} from './modules/i18n';

defineProps<{
	state: {
		open: boolean;
	};
}>();

const emit = defineEmits<{
	'update:open': [value: boolean];
}>();

const helpURL: string = 'https://www.qiuwenbaike.cn/wiki/H:RNRS';
const verifyURL: string = `${mw.util.getUrl('Special:Preferences')}#mw-input-wprnrshook-module`;

const close = (): void => {
	emit('update:open', false);
};

const verify = (): void => {
	close();
	location.href = verifyURL;
};
</script>

<template>
	<cdx-dialog
		:open="state.open"
		:title="getMessage('DialogTitle')"
		:primary-action="{label: getMessage('Verify'), actionType: 'progressive'}"
		:default-action="{label: getMessage('Cancel')}"
		:use-close-button="true"
		@primary="verify"
		@default="close"
		@update:open="emit('update:open', $event)"
	>
		<p>{{ getMessage('DialogMessage') }}</p>
		<template #footer-text>
			<a :href="helpURL">{{ getMessage('Help') }}</a>
		</template>
	</cdx-dialog>
</template>

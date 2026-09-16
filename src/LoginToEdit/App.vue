<script setup lang="ts">
import {CdxButton, CdxDialog} from '@wikimedia/codex';
import {getMessage} from './modules/i18n';

const props = defineProps<{
	state: {
		open: boolean;
	};
	loginURL: string;
	registerURL: string;
	triggerLogin: () => void;
}>();

const emit = defineEmits<{
	'update:open': [value: boolean];
}>();

const close = (): void => {
	emit('update:open', false);
};

const login = (): void => {
	close();
	props.triggerLogin();
};

const register = (): void => {
	close();
	location.href = props.registerURL;
};
</script>

<template>
	<cdx-dialog
		:open="state.open"
		:title="getMessage('DialogTitle')"
		:primary-action="{label: getMessage('Login'), actionType: 'progressive'}"
		:default-action="{label: getMessage('Cancel')}"
		:use-close-button="true"
		@primary="login"
		@default="close"
		@update:open="emit('update:open', $event)"
	>
		<p>{{ getMessage('DialogMessage') }}</p>
		<div class="login-to-edit__register">
			<cdx-button weight="normal" action="progressive" @click="register">
				{{ getMessage('Register') }}
			</cdx-button>
		</div>
	</cdx-dialog>
</template>

<style scoped lang="less">
.login-to-edit__register {
	margin-top: 0.75rem;
}
</style>

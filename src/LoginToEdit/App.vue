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

const helpURL: string = 'https://www.qiuwenbaike.cn/wiki/H:LOGIN';

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
		:default-action="{label: getMessage('Cancel')}"
		:primary-action="undefined"
		:use-close-button="true"
		@update:open="emit('update:open', $event)"
		@default="close"
		@primary="undefined"
	>
		<p>{{ getMessage('DialogMessage') }}</p>
		<div class="login-to-edit__register">
			<cdx-button weight="normal" action="progressive" @click="register">
				{{ getMessage('Register') }}
			</cdx-button>
			<cdx-button weight="normal" action="progressive" @click="login">
				{{ getMessage('Login') }}
			</cdx-button>
		</div>
		<template #footer-text>
			<a :href="helpURL">{{ getMessage('Help') }}</a>
		</template>
	</cdx-dialog>
</template>

<style scoped lang="less">
.login-to-edit__register {
	margin-top: 0.75rem;
	display: flex;
	flex-flow: row wrap;
	place-content: space-between center;
	gap: 1em;
}
</style>

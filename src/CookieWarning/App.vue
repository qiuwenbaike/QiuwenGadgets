<!-- eslint-disable vue/no-v-html -->
<script setup lang="ts">
import * as OPTIONS from './options.json';
import {CdxButton} from '@wikimedia/codex';
import {getMessage} from './modules/i18n';

const props = defineProps<{
	agreeButtonOnClick: () => void;
}>();

const personalInfoPolicyUrl = `/wiki/QW:PIPP?${OPTIONS.readingPIPPKey}=1`;
</script>

<template>
	<div class="cookie-warning noprint">
		<p>
			{{ getMessage('CookieNotice') }}
			{{ getMessage('PIPPNotice0') }}
			<a rel="noopener" target="_blank" :href="personalInfoPolicyUrl" :title="getMessage('PIPPNotice1')">
				{{ getMessage('PIPPNotice1') }}
			</a>
			{{ getMessage('PIPPNotice2') }}
		</p>
		<cdx-button action="progressive" weight="primary" @click="props.agreeButtonOnClick">
			{{ getMessage('Agree') }}
		</cdx-button>
	</div>
</template>

<style scoped lang="less">
.cookie-warning {
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	position: fixed;
	z-index: 101;
	bottom: 1rem;
	right: 0;
	left: 0;
	max-width: min(92.5%, 20rem);
	padding: 1rem;
	border: 1px solid #e6e6e6;
	margin: 1rem;
	background-color: #fff;
	color: #191919;

	p {
		margin-top: 0;
	}

	:deep(.cdx-button) {
		width: 100%;
	}

	@media screen and (min-width: 768px) {
		right: auto;
	}
}
</style>

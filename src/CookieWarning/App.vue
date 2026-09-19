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
	position: fixed;
	z-index: 101;
	bottom: 1em;
	right: 0;
	left: 0;
	max-width: 92.5%;
	padding: 0.75em;
	border: 1px solid #e6e6e6;
	border-radius: 0.5em;
	margin: 0.75em;
	background-color: #fff;
	color: #191919;
	font-size: 0.9em;
	line-height: 1.25;
	opacity: 1;
	pointer-events: auto;

	p {
		margin: 0 auto 0.5rem;
	}

	:deep(.cdx-button) {
		display: block;
		width: 100%;
		padding: 0.5em 0;
		border-color: #36c;
		border-radius: 0.25em;
		margin: 0 auto;
		background-color: #36c;
		color: #fff;
		line-height: 1;
		text-align: center;
	}

	@media screen and (min-width: 768px) {
		width: 20em;
		left: 0;
		right: auto;
	}
}
</style>

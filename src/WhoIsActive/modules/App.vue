<script setup lang="ts">
import {CdxIcon} from '@wikimedia/codex';
import {TONE_MAP} from './constant';
import type {TimeSpan} from './types';
import {USER_CONTRIBUTIONS_ICON} from './icons';
import {computed} from 'vue';
import {getMessage} from './i18n';

interface AppProps {
	/** The period since the user's last activity. */
	timeSpan: TimeSpan;
	/** Whether only the icon is visible, with the text hidden from view. */
	indicator: boolean;
}

const CLASS_NAME: string = 'gadget-whoisactive';

const props = defineProps<AppProps>();

const toneClassName = computed((): string => {
	return `${CLASS_NAME}__badge--${TONE_MAP[props.timeSpan]}`;
});

const text = computed((): string => {
	return getMessage(props.timeSpan);
});
</script>

<template>
	<span
		class="gadget-whoisactive__badge"
		:class="[toneClassName, {'gadget-whoisactive__badge--compact': indicator}]"
		:title="text"
	>
		<cdx-icon class="gadget-whoisactive__icon" :icon="USER_CONTRIBUTIONS_ICON" size="small" />
		<span class="gadget-whoisactive__text">{{ text }}</span>
	</span>
</template>

<style scoped lang="less">
@import (reference) '../../variables.less';

.gadget-whoisactive__badge {
	display: inline-flex;
	align-items: center;
	gap: 0.25em;
	margin: 0 0.25em !important;
	padding: 0 0.5em !important;
	border: 1px solid @const-color-gray;
	font-size: 0.9em;
	white-space: nowrap;
	border-radius: @border-radius--small;
	user-select: none;

	.mw-footer & {
		margin-bottom: 0.25em;
	}

	/* Edited this week: green */
	&--success {
		border-color: @color--success;
		color: @color--success;
	}

	/* Edited this month: blue */
	&--info {
		border-color: @color--info;
		color: @color--info;
	}

	/* Edited in 3 months: purple */
	&--purple {
		border-color: @color--purple;
		color: @color--purple;
	}

	/* Edited in half a year: orange */
	&--orange {
		border-color: @color--orange;
		color: @color--orange;
	}

	/* Edited this year: brown */
	&--warning {
		border-color: @color--warning;
		color: @color--warning;
	}

	/* Edited over a year ago: red */
	&--error {
		border-color: @color--error;
		color: @color--error;
	}

	/* Only the icon is visible, the text is kept for screen readers */
	&--compact {
		.gadget-whoisactive__text {
			position: absolute;
			width: 1px;
			height: 1px;
			overflow: hidden;
			clip-path: inset(50%);
		}
	}
}

.gadget-whoisactive__icon {
	width: 1em;
	height: 1em;
	color: inherit;

	:deep(svg) {
		width: 100%;
		height: 100%;
		fill: currentColor;
	}
}
</style>

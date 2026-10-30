<script setup lang="ts">
import {GROUP_ICONS, UNKNOWN_GROUP_ICON} from './icons';
import type {Indicator, IndicatorIcon, IndicatorTone} from './types';
import {CdxIcon} from '@wikimedia/codex';
import {TONE_MAP} from './constant';
import {computed} from 'vue';

interface AppProps {
	/** The user groups to display. */
	indicators: Indicator[];
}

interface Badge {
	group: Indicator['group'];
	icon: IndicatorIcon;
	text: string;
	tone: IndicatorTone | undefined;
}

const CLASS_NAME: string = 'gadget-markrights_userpage';

const props = defineProps<AppProps>();

const badges = computed<Badge[]>(() => {
	return props.indicators.map<Badge>(({group, text}) => {
		return {
			group,
			icon: GROUP_ICONS[group] ?? UNKNOWN_GROUP_ICON,
			text,
			tone: TONE_MAP[group],
		};
	});
});
</script>

<template>
	<span
		v-for="badge in badges"
		:key="badge.group"
		class="gadget-markrights_userpage__badge"
		:class="badge.tone ? `${CLASS_NAME}__badge--${badge.tone}` : ''"
		:title="badge.text"
	>
		<cdx-icon class="gadget-markrights_userpage__icon" :icon="badge.icon" size="small" />
		<span class="gadget-markrights_userpage__text">{{ badge.text }}</span>
	</span>
</template>

<style scoped lang="less">
@import (reference) '../../mixins.less';
@import (reference) '../../variables.less';

.gadget-markrights_userpage__badge {
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

	/* The webmaster and the stewards: violet */
	&--steward {
		border-color: @color-group--steward;
		color: @color-group--steward;
	}

	/* High-level managers and checkusers: dark pink */
	&--sysop {
		border-color: @color-group--sysop;
		color: @color-group--sysop;
	}

	/* Page patrollers and event sponsors: brown */
	&--patroller {
		border-color: @color-group--patroller;
		color: @color-group--patroller;
	}

	/* Editing related rights: blue */
	&--editor {
		border-color: @color-group--bot;
		color: @color-group--bot;
	}

	/* Confirmation and exemption rights: green */
	&--confirmed {
		border-color: @color-group--confirmed;
		color: @color-group--confirmed;
	}
}

.gadget-markrights_userpage__icon {
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

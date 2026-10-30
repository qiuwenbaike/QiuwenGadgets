<script setup lang="ts">
import {CdxIcon} from '@wikimedia/codex';
import type {GeoLocationProps} from './types';
import {computed} from 'vue';
import {getMessage} from './i18n';

const props = defineProps<GeoLocationProps>();

/**
 * SVG paths inlined from `@wikimedia/codex-icons` v2.7.0.
 *
 * MediaWiki does not ship a ResourceLoader module that bundles
 * `@wikimedia/codex-icons` (see https://www.mediawiki.org/wiki/Codex),
 * so the path data is copied here verbatim and rendered as inline SVG
 * to keep the gadget self-contained while still sourcing the icons
 * from `@wikimedia/codex-icons`.
 *
 * @see {@link https://doc.wikimedia.org/codex/latest/icons/}
 */

/** Path for `cdxIconGlobe`. */
const cdxIconGlobe = {
	path: 'M10 1a9 9 0 110 18 9 9 0 010-18M8.028 11c.1 1.846.473 3.431.97 4.552.295.661.594 1.073.824 1.292.081.077.14.117.178.138a1 1 0 00.178-.138c.23-.22.529-.63.823-1.292.498-1.12.87-2.706.97-4.552zm-4.956 0a7 7 0 004.122 5.413C6.557 15.001 6.13 13.11 6.025 11zm10.903 0c-.104 2.11-.533 4-1.17 5.413A7 7 0 0016.928 11zm-6.78-7.414A7 7 0 003.071 9h2.953c.104-2.11.531-4.001 1.17-5.414ZM10 3.016a1 1 0 00-.178.14c-.23.22-.53.63-.823 1.292-.498 1.12-.87 2.706-.97 4.552h3.943c-.101-1.846-.473-3.431-.971-4.552-.294-.661-.593-1.073-.823-1.292a1 1 0 00-.178-.14m2.805.57c.638 1.413 1.066 3.303 1.17 5.414h2.953a7 7 0 00-4.123-5.414',
};

/** Path for `cdxIconHelpNotice`. */
const cdxIconHelpNotice = {
	path: 'M11 15.5H9v-2h2zm-1-11c1.015 0 1.787.469 2.283 1.074.473.576.717 1.299.717 1.926 0 .68-.174 1.242-.467 1.706-.283.448-.646.753-.933.969-.136.101-.29.208-.385.276a3 3 0 00-.215.166v.883H9v-1c0-.645.346-1.08.637-1.347a4 4 0 01.414-.327c.139-.1.235-.165.35-.25.212-.16.349-.293.44-.438.083-.13.159-.319.159-.638 0-.152-.076-.43-.264-.658A.9.9 0 0010 6.5c-.282 0-.518.133-.714.375C9.066 7.146 9 7.43 9 7.5H7c0-.611.28-1.327.733-1.886C8.211 5.026 8.975 4.5 10 4.5M10 1a9 9 0 110 18 9 9 0 010-18m0 2a7 7 0 100 14 7 7 0 000-14',
	shouldFlip: true,
};

const icons = {
	globe: cdxIconGlobe,
	helpNotice: cdxIconHelpNotice,
};

const icon = computed(() => {
	return icons[props.icon];
});

const text = computed(() => {
	return props.icon === 'globe'
		? `${getMessage('Location')}${getMessage(':')}${props.indicatorText}`
		: props.indicatorText;
});
</script>

<template>
	<span class="gadget-geo_location_reader__badge" :class="`gadget-geo_location_reader__badge--${props.status}`">
		<cdx-icon class="gadget-geo_location_reader__icon" :icon="icon" size="small" />
		<span class="gadget-geo_location_reader__text">{{ text }}</span>
	</span>
</template>

<style scoped lang="less">
@import (reference) '../../mixins.less';
@import (reference) '../../variables.less';

.gadget-geo_location_reader__badge {
	display: inline-flex;
	align-items: center;
	gap: 0.25em;
	margin: 0 0.25em !important;
	padding: 0 0.5em !important;
	border: 1px solid @const-color-gray;
	border-radius: @border-radius--small;
	font-size: 0.9em;
	white-space: nowrap;
	user-select: none;

	.mw-footer & {
		margin-bottom: 0.25em;
	}

	&--success {
		border-color: @color--success;
		color: @color--success;
	}

	&--warning {
		border-color: @color--warning;
		color: @color--warning;
	}
}

.gadget-geo_location_reader__icon {
	color: inherit;
}
</style>

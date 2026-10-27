<script setup lang="ts">
import {CdxButton, CdxIcon} from '@wikimedia/codex';
import {getMessage} from './i18n';

interface NoticeViewState {
	html: string;
	key: number;
	visible: boolean;
}

defineProps<{
	state: NoticeViewState;
	onDismiss: () => void;
	onNoticeHidden: () => void;
}>();

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

/** Path for `cdxIconClose`. */
const cdxIconClose = {
	path: 'M16.707 4.707 11.414 10l5.293 5.293-1.414 1.414L10 11.414l-5.293 5.293-1.414-1.414L8.586 10 3.293 4.707l1.414-1.414L10 8.586l5.293-5.293z',
};
</script>

<template>
	<div class="gadget-advanced_site_notices noprint">
		<div class="gadget-advanced_site_notices__title">{{ getMessage('Title') }}</div>
		<div class="gadget-advanced_site_notices__notice">
			<Transition name="asn-notice" mode="out-in" appear @after-leave="onNoticeHidden">
				<!-- eslint-disable vue/no-v-html -- parsed HTML is provided by the configured announcement template -->
				<div
					v-if="state.visible"
					:key="state.key"
					class="gadget-advanced_site_notices__notice__content center"
					v-html="state.html"
				></div>
				<!-- eslint-enable vue/no-v-html -->
			</Transition>
		</div>
		<div class="gadget-advanced_site_notices__dismiss">
			<cdx-button
				weight="quiet"
				type="button"
				:aria-label="getMessage('Dismiss')"
				:title="getMessage('Dismiss')"
				@click="onDismiss"
			>
				<cdx-icon :icon="cdxIconClose" />
			</cdx-button>
		</div>
	</div>
</template>

<style scoped lang="less">
@import (reference) '../../mixins.less';
@import (reference) '../../variables.less';

.gadget-advanced_site_notices {
	display: flex;
	min-height: 4em;
	align-items: center;
	padding: 0 0.5em;
	border: 1px solid @const-color-gray;
	box-shadow: 0 0.5px 0 @background-color-primary;
	background-color: @background-color-white--light;
	color: @const-color-primary;
	line-height: 1;
	overflow-y: hidden;
	text-align: center;

	.client-darkmode & {
		background: @const-color-gray--dark;
	}
}

.gadget-advanced_site_notices__title {
	order: 1;
	padding: 0.2em 0.4em;
	border-radius: @border-radius--small;
	background: @color--primary;
	color: @const-color-white;
	white-space: nowrap;
}

.gadget-advanced_site_notices__notice {
	width: 100%;
	order: 2;
	margin: 0.5em;
}

.gadget-advanced_site_notices__notice__content {
	// stylelint-disable-next-line declaration-property-value-keyword-no-deprecated
	word-break: break-word;
	will-change: opacity;
}

.gadget-advanced_site_notices__dismiss {
	min-width: 2em;
	order: 3;

	:deep(.cdx-button) {
		display: block;
		min-width: 2em;
		padding: 0.25em;
		font-size: 150%;
	}

	:deep(.cdx-icon) {
		width: 1em;
		height: 1em;
	}
}

.ve-activated-disabled('!important');
</style>
<style lang="less">
.gadget-advanced_site_notices {
	.asn-notice-enter-from,
	.asn-notice-appear-from,
	.asn-notice-leave-to {
		opacity: 0;
	}

	.asn-notice-enter-active,
	.asn-notice-appear-active,
	.asn-notice-leave-active {
		transition: opacity 0.4s ease-in-out;
	}
}
</style>

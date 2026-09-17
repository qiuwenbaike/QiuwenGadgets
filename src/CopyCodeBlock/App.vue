<script setup lang="ts">
import {CdxButton, CdxIcon} from '@wikimedia/codex';
import {getMessage} from './modules/i18n';

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
/** Path for `cdxIconCopy`. */
const cdxIconCopy = {
	path: 'M13 19H1V7h6V1h12v12h-6zm-6-6V9H3v8h8v-4zm2-2h8V3H9z',
	shouldFlip: true,
};
</script>

<template>
	<cdx-button weight="quiet" :aria-label="getMessage('Copy')">
		<cdx-icon :icon="cdxIconCopy" />
	</cdx-button>
</template>

<script setup lang="ts">
import {CdxButton, CdxIcon} from '@wikimedia/codex';
import {getMessage} from './modules/i18n';

// The "copy" icon from @wikimedia/codex-icons, inlined because MediaWiki does
// not provide a ResourceLoader module for @wikimedia/codex-icons.
const copyIcon = {
	path: 'M13 19H1V7h6V1h12v12h-6zm-6-6V9H3v8h8v-4zm2-2h8V3H9z',
	shouldFlip: true,
};
</script>

<template>
	<cdx-button weight="quiet" :aria-label="getMessage('Copy')">
		<cdx-icon :icon="copyIcon" />
	</cdx-button>
</template>

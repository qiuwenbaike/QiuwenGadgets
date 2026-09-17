<script setup lang="ts">
import {CdxButton, CdxIcon} from '@wikimedia/codex';
import {cdxIconClose, cdxIconReference} from './modules/icons';
import {getMessage} from './modules/i18n';

defineProps<{
	state: {
		open: boolean;
		opener: boolean;
	};
	tocHtml: string;
	triggerOpen: () => void;
	triggerClose: () => void;
	triggerScroll: (event: MouseEvent) => void;
}>();

const closeIcon = {
	path: cdxIconClose,
};

const referenceIcon = {
	path: cdxIconReference,
};
</script>

<template>
	<div>
		<transition name="float-toc-fade">
			<cdx-button
				v-show="state.opener"
				class="float-toc__opener"
				weight="quiet"
				:aria-label="getMessage('Contents')"
				@click="triggerOpen"
			>
				<cdx-icon :icon="referenceIcon" />
				<span class="float-toc__opener-text">{{ getMessage('Contents') }}</span>
			</cdx-button>
		</transition>
		<transition name="float-toc-fade">
			<div v-show="state.open" class="float-toc" @click="triggerScroll">
				<cdx-button
					class="float-toc__close"
					weight="quiet"
					:aria-label="getMessage('Close')"
					@click.stop="triggerClose"
				>
					<cdx-icon :icon="closeIcon" />
				</cdx-button>
				<!-- eslint-disable-next-line vue/no-v-html -- tocHtml is a clone of the page's own TOC markup -->
				<div class="float-toc__content" v-html="tocHtml"></div>
			</div>
		</transition>
	</div>
</template>

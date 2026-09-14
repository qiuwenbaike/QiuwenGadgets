<script setup lang="ts">
import {CdxButton, CdxDialog} from '@wikimedia/codex';
import {nextTick, ref, watch} from 'vue';
import {ToolsRedirect} from './modules/core';
import {getMessage} from './modules/util/getMessage';

const props = defineProps<{
	controller: typeof ToolsRedirect;
}>();

const isOpen = ref(false);
const activeTab = ref('view');
const viewContainer = ref<HTMLElement>();
const createContainer = ref<HTMLElement>();

const open = () => {
	isOpen.value = true;
};

defineExpose({open});

const loadTab = async (tab: string, reload = false) => {
	await nextTick();
	if (!viewContainer.value || !createContainer.value) {
		return;
	}
	props.controller.attachContainers(viewContainer.value, createContainer.value);
	if (tab === 'view') {
		props.controller.loadView(reload);
	} else {
		props.controller.loadCreate(reload);
	}
};

watch(activeTab, (tab) => {
	void loadTab(tab);
});

watch(isOpen, (open) => {
	if (open) {
		void loadTab(activeTab.value);
	}
});
</script>

<template>
	<cdx-dialog v-model:open="isOpen" :title="getMessage('dlgtitle')" :use-close-button="true">
		<div class="tools-redirect-tabs" role="tablist">
			<cdx-button
				:weight="activeTab === 'view' ? 'primary' : 'quiet'"
				role="tab"
				:aria-selected="activeTab === 'view'"
				@click="activeTab = 'view'"
			>
				{{ getMessage('tabviewtitle') }}
			</cdx-button>
			<cdx-button
				:weight="activeTab === 'create' ? 'primary' : 'quiet'"
				role="tab"
				:aria-selected="activeTab === 'create'"
				@click="activeTab = 'create'"
			>
				{{ getMessage('tabcreatetitle') }}
			</cdx-button>
		</div>
		<div
			v-show="activeTab === 'view'"
			ref="viewContainer"
			class="dialog-redirect tab-redirect"
			role="tabpanel"
		></div>
		<div
			v-show="activeTab === 'create'"
			ref="createContainer"
			class="dialog-redirect tab-redirect"
			role="tabpanel"
		></div>
	</cdx-dialog>
</template>

<style lang="less">
.tools-redirect-tabs {
	display: flex;
	gap: 4px;
	margin-bottom: 12px;
}

.dialog-redirect {
	max-height: 65vh;
	overflow-y: auto;

	.mw-ajax-loader {
		top: 0;
	}

	a {
		color: #0645ad;

		&:visited {
			color: #0b0080;
		}

		&.new {
			color: #c20;

			&:visited {
				color: #a55858;
			}
		}
	}
}
</style>

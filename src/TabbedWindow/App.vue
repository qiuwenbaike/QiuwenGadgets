<script setup lang="ts">
import {nextTick, onBeforeUnmount, onMounted, ref} from 'vue';
import {CdxButton} from '@wikimedia/codex';

interface TabPanel {
	id: string;
	label: string;
	content: HTMLElement[];
}

const props = defineProps<{
	panels: TabPanel[];
}>();

const activeId = ref('');
const panelContainers = new Map<string, HTMLElement>();

const setActivePanel = (id: string, updateHash = true): void => {
	if (!props.panels.some((panel) => panel.id === id)) {
		return;
	}
	activeId.value = id;
	if (updateHash && history.replaceState) {
		history.replaceState(null, document.title, `#${id}`);
	}
};

const setPanelContainer = (id: string, element: Element | null): void => {
	if (element instanceof HTMLElement) {
		panelContainers.set(id, element);
		for (const contentElement of props.panels.find((panel) => panel.id === id)?.content ?? []) {
			element.append(contentElement);
		}
	} else {
		panelContainers.delete(id);
	}
};

const setFromHash = (): void => {
	const id = decodeURIComponent(location.hash.slice(1));
	if (id) {
		setActivePanel(id, false);
	}
};

onMounted(async () => {
	activeId.value = props.panels[0]?.id ?? '';
	await nextTick();
	setFromHash();
	window.addEventListener('hashchange', setFromHash);
});

onBeforeUnmount(() => {
	window.removeEventListener('hashchange', setFromHash);
});
</script>

<template>
	<div class="tabbed-window">
		<div class="tabbed-window__tabs" role="tablist">
			<cdx-button
				v-for="panel in panels"
				:key="panel.id"
				:weight="activeId === panel.id ? 'primary' : 'quiet'"
				role="tab"
				:aria-selected="activeId === panel.id"
				:aria-controls="`tabbed-window-panel-${panel.id}`"
				@click="setActivePanel(panel.id)"
			>
				{{ panel.label }}
			</cdx-button>
		</div>
		<div
			v-for="panel in panels"
			v-show="activeId === panel.id"
			:id="`tabbed-window-panel-${panel.id}`"
			:key="panel.id"
			:ref="(element) => setPanelContainer(panel.id, element as Element | null)"
			:aria-hidden="activeId !== panel.id"
			class="tabbed-window__panel"
			role="tabpanel"
			:tabindex="activeId === panel.id ? 0 : -1"
		></div>
	</div>
</template>

<style scoped lang="less">
.tabbed-window {
	border: 1px solid var(--border-color-base, #a2a9b1);
}

.tabbed-window__tabs {
	display: flex;
	flex-wrap: wrap;
	gap: 0.25rem;
	padding: 0.25rem;
	border-bottom: 1px solid var(--border-color-base, #a2a9b1);
}

.tabbed-window__panel {
	padding: 0.5em;
}
</style>

<script setup lang="ts">
import {archiveSection, removeSection} from './util/editSection';
import {computed, createApp, onBeforeUnmount, onMounted, ref} from 'vue';
import {getArchivedMessage, getArchivingMessage, getDeletedMessage, getDeletingMessage} from './util/getMessage';
import {CdxButton} from '@wikimedia/codex';
import ConflictNotice from './components/ConflictNotice.vue';
import {getMessage} from './i18n';
import {refresh} from './util/refreshPage';
import {toastify} from 'ext.gadget.Toastify';

const props = defineProps<{
	noticeType: FooterNoticeType;
	arcLoc: string;
	sectionLinks: SectionLink[];
}>();

const archiveUrl = computed(() => mw.util.getUrl(props.arcLoc));
const showSectionLinks = ref(true);
const workingSection = ref<SectionLink>();
const workingAction = ref<SectionAction>();
const actionFailed = ref(false);
let toastifyInstance: ToastifyInstance = {hideToast: () => {}};
let conflictApp: ReturnType<typeof createApp> | undefined;
let conflictRoot: HTMLElement | undefined;

const hideToast = (): void => {
	toastifyInstance.hideToast();
	conflictApp?.unmount();
	conflictApp = undefined;
	conflictRoot?.remove();
	conflictRoot = undefined;
};

const showToast = (text: string, type: 'info' | 'error' = 'info', duration = -1): void => {
	hideToast();
	toastifyInstance = toastify({text, close: true, duration}, type);
};

const messageChannel = new BroadcastChannel(`${mw.config.get().wgPageName}_message`);
const refreshChannel = new BroadcastChannel(`${mw.config.get().wgPageName}_refresh`);

const onMessage = (event: MessageEvent<unknown>): void => {
	showSectionLinks.value = false;
	if (typeof event.data === 'string') {
		showToast(event.data, 'info', 3 * 1000);
	}
};

const onRefreshMessage = (): void => {
	hideToast();
	conflictRoot = document.createElement('span');
	conflictApp = createApp(ConflictNotice, {
		onClick: () => {
			hideToast();
			refresh();
		},
	});
	conflictApp.mount(conflictRoot);
	toastifyInstance = toastify({node: conflictRoot, close: true, duration: -1}, 'info');
};

onMounted(() => {
	messageChannel.addEventListener('message', onMessage);
	refreshChannel.addEventListener('message', onRefreshMessage);
});

onBeforeUnmount(() => {
	messageChannel.removeEventListener('message', onMessage);
	refreshChannel.removeEventListener('message', onRefreshMessage);
	messageChannel.close();
	refreshChannel.close();
	hideToast();
});

const runSectionAction = async (section: SectionLink, action: SectionAction): Promise<void> => {
	if (workingSection.value) {
		return;
	}

	workingSection.value = section;
	workingAction.value = action;
	actionFailed.value = false;
	const pendingMessage =
		action === 'archive' ? getArchivingMessage(section.indexNo) : getDeletingMessage(section.indexNo);
	messageChannel.postMessage(pendingMessage);
	showToast(pendingMessage);

	try {
		if (action === 'archive') {
			await archiveSection({
				index: section.indexNo,
				anchor: section.anchor,
				archiveTo: section.archiveTo,
			});
		} else {
			await removeSection({index: section.indexNo, anchor: section.anchor});
		}
	} catch (error) {
		console.error(`EasyArchive failed to ${action} section ${section.indexNo}`, error);
		const failureMessage = getMessage('Easy Archive operation failed');
		actionFailed.value = true;
		messageChannel.postMessage(failureMessage);
		showToast(failureMessage, 'error');
		return;
	}

	const completeMessage =
		action === 'archive' ? getArchivedMessage(section.indexNo) : getDeletedMessage(section.indexNo);
	showToast(completeMessage);
	messageChannel.postMessage(completeMessage);
	refreshChannel.postMessage('Refresh');
	refresh({toastifyInstance});
};

const archiveLink = (section: SectionLink): void => {
	void runSectionAction(section, 'archive');
};

const deleteLink = (section: SectionLink): void => {
	void runSectionAction(section, 'delete');
};
</script>

<template>
	<template v-if="props.noticeType === 'blacklist'">
		{{ getMessage('Easy Archive not supported') }}<br />{{ getMessage('Easy Archive not supported details') }}
	</template>
	<template v-else-if="props.noticeType === 'notAllowed'">
		{{ getMessage('Easy Archive not allowed') }}
	</template>
	<template v-else-if="props.noticeType === 'noArcLoc'">
		{{ getMessage('No Archive Location') }}
	</template>
	<template v-else-if="props.noticeType === 'arcLocNotAllowed'">
		{{ getMessage('Archive Location not allowed').replace('$1', props.arcLoc) }}<br />
		{{ getMessage('Archive Location not allowed details') }}
	</template>
	<template v-else>
		{{ getMessage('Easy Archive enabled') }}{{ getMessage('(') }}{{ getMessage('Archive location') }}
		<a :title="props.arcLoc" :href="archiveUrl">{{ props.arcLoc }}</a>
		{{ getMessage(')') }}{{ getMessage('.') }}
	</template>

	<Teleport v-for="section in props.sectionLinks" :key="section.indexNo" :to="section.target">
		<span v-if="showSectionLinks" class="gadget-easy_archive__section-id">
			<cdx-button
				v-if="section.canArchive"
				class="gadget-easy_archive__button"
				weight="quiet"
				type="button"
				size="small"
				:disabled="Boolean(workingSection)"
				@click="archiveLink(section)"
			>
				{{ getMessage('Archive') }}
			</cdx-button>
			<span v-if="section.canArchive && section.canDelete" class="mw-editsection-divider">|</span>
			<cdx-button
				v-if="section.canDelete"
				class="gadget-easy_archive__button"
				weight="quiet"
				type="button"
				size="small"
				action="destructive"
				:disabled="Boolean(workingSection)"
				@click="deleteLink(section)"
			>
				{{ getMessage('Delete') }}
			</cdx-button>
			<span v-if="workingSection?.indexNo === section.indexNo">
				{{
					actionFailed
						? getMessage('Easy Archive operation failed')
						: workingAction === 'archive'
							? getMessage('Archiving')
							: getMessage('Deleting')
				}}
			</span>
		</span>
	</Teleport>
</template>

<style scoped lang="less">
.gadget-easy_archive__section-id {
	:global(.skin-citizen) & {
		font-size: 0.875rem;
		margin: 0 0.5rem;
	}

	:deep(.gadget-easy_archive__button) {
		font-size: inherit;
		margin: 0 0.25em;
		vertical-align: baseline;
	}
}
</style>

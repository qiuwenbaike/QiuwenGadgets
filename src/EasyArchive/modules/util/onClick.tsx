import {archiveSection, removeSection} from './editSection';
import {getArchivedMessage, getArchivingMessage, getDeletedMessage, getDeletingMessage} from './getMessage';
import React from 'ext.gadget.React';
import {getMessage} from '../i18n';
import {refresh} from './refreshPage';
import {toastify} from 'ext.gadget.Toastify';

const archiveOnClick = async (
	event: Event,
	{
		sectionIdSpans,
		messageChannel,
		refreshChannel,
		indexNo,
		anchor,
		archiveTo,
		toastifyInstance,
	}: {
		sectionIdSpans: Element[];
		messageChannel: BroadcastChannel;
		refreshChannel: BroadcastChannel;
		indexNo: string;
		anchor: string;
		archiveTo: string;
		toastifyInstance: ToastifyInstance;
	}
) => {
	event.preventDefault();
	const parentElement = (event.target as HTMLElement)?.parentElement;
	if (!parentElement) {
		return;
	}

	parentElement.replaceChildren(<span>{getMessage('Archiving')}</span>);

	for (const span of sectionIdSpans) {
		span.remove();
	}

	const message1 = getArchivingMessage(indexNo);
	messageChannel.postMessage(message1);

	toastifyInstance ||= {
		hideToast: () => {},
	};
	toastifyInstance.hideToast();
	toastifyInstance = toastify(
		{
			text: message1,
			close: true,
			duration: -1,
		},
		'info'
	);

	await archiveSection({index: indexNo, anchor, archiveTo});

	parentElement.replaceChildren(<span>{getMessage('Archived')}</span>);

	const message = getArchivedMessage(indexNo);
	messageChannel.postMessage(message);

	toastifyInstance.hideToast();
	toastifyInstance = toastify(
		{
			text: message,
			close: true,
			duration: -1,
		},
		'info'
	);

	messageChannel.close();

	refreshChannel.postMessage('Refresh');
	refresh({toastifyInstance});
};

const removeOnClick = async (
	event: Event,
	{
		sectionIdSpans,
		messageChannel,
		refreshChannel,
		indexNo,
		anchor,
		toastifyInstance,
	}: {
		sectionIdSpans: Element[];
		messageChannel: BroadcastChannel;
		refreshChannel: BroadcastChannel;
		indexNo: string;
		anchor: string;
		toastifyInstance: ToastifyInstance;
	}
) => {
	event.preventDefault();
	const parentElement = (event.target as HTMLElement)?.parentElement;
	if (!parentElement) {
		return;
	}

	parentElement.replaceChildren(<span>{getMessage('Deleting')}</span>);

	for (const span of sectionIdSpans) {
		span.remove();
	}

	let message = getDeletingMessage(indexNo);
	messageChannel.postMessage(message);

	toastifyInstance ||= {
		hideToast: () => {},
	};
	toastifyInstance.hideToast();
	toastifyInstance = toastify(
		{
			text: message,
			close: true,
			duration: -1,
		},
		'info'
	);

	await removeSection({index: indexNo, anchor});

	parentElement.replaceChildren(<span>{getMessage('Deleted')}</span>);

	message = getDeletedMessage(indexNo);
	messageChannel.postMessage(message);

	toastifyInstance.hideToast();
	toastifyInstance = toastify(
		{
			text: message,
			close: true,
			duration: -1,
		},
		'info'
	);

	messageChannel.close();

	refreshChannel.postMessage('Refresh');
	refresh({toastifyInstance});
};

export {archiveOnClick, removeOnClick};

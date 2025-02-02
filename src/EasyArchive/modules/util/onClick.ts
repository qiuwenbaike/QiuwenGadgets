import {archiveSection, removeSection} from './editSection';
import {getMessage} from '../i18n';
import {refresh} from './refreshPage';
import {replaceChild} from './replaceChild';
import {spanWrap} from '../components/react';
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

	replaceChild(parentElement, spanWrap(getMessage('Archiving')));

	for (const span of sectionIdSpans) {
		span.remove();
	}

	const message1 = getMessage('Archiving') + getMessage(':') + getMessage('Section $1').replace('$1', indexNo);
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

	replaceChild(parentElement, spanWrap(getMessage('Archived')));

	const message2 = getMessage('Archived') + getMessage(':') + getMessage('Section $1').replace('$1', indexNo);
	messageChannel.postMessage(message2);

	toastifyInstance.hideToast();
	toastifyInstance = toastify(
		{
			text: message2,
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

	replaceChild(parentElement, spanWrap(getMessage('Deleting')));

	for (const span of sectionIdSpans) {
		span.remove();
	}

	const message1 = getMessage('Deleting') + getMessage(':') + getMessage('Section $1').replace('$1', indexNo);
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

	await removeSection({index: indexNo, anchor});

	replaceChild(parentElement, spanWrap(getMessage('Deleted')));

	const message2 = getMessage('Deleted') + getMessage(':') + getMessage('Section $1').replace('$1', indexNo);
	messageChannel.postMessage(message2);

	toastifyInstance.hideToast();
	toastifyInstance = toastify(
		{
			text: message2,
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

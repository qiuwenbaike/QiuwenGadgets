import {OnClick, Pipe, SectionID} from './react';
import {archiveSection, removeSection} from './editSection';
import React from 'ext.gadget.React';
import {getMessage} from '../i18n';
import {refresh} from './refreshPage';
import {replaceChild} from './replaceChild';
import {toastify} from 'ext.gadget.Toastify';

const archiveOnClick = async (
	event: Event,
	{
		sectionIdSpans,
		messageChannel,
		refreshChannel,
	}: {sectionIdSpans: Element[]; messageChannel: BroadcastChannel; refreshChannel: BroadcastChannel},
	{
		indexNo,
		anchor,
		archiveTo,
		toast,
	}: {
		indexNo: string;
		anchor: string;
		archiveTo: string;
		toast: ToastifyInstance;
	}
) => {
	event.preventDefault();
	const parentElement = (event.target as HTMLElement)?.parentElement;
	if (!parentElement) {
		return;
	}

	replaceChild(parentElement, <span>{getMessage('Archiving')}</span>);
	for (const span of sectionIdSpans) {
		span.remove();
	}
	const message1 = getMessage('Archiving') + getMessage(':') + getMessage('Section $1').replace('$1', indexNo);
	messageChannel.postMessage(message1);

	toast ||= {
		hideToast: () => {},
	};
	toast.hideToast();
	toast = toastify(
		{
			text: message1,
			close: true,
			duration: -1,
		},
		'info'
	);

	await archiveSection({index: indexNo, anchor, archiveTo});
	replaceChild(parentElement, <span>{getMessage('Archived')}</span>);
	const message2 = getMessage('Archived') + getMessage(':') + getMessage('Section $1').replace('$1', indexNo);
	messageChannel.postMessage(message2);
	toast.hideToast();
	toast = toastify(
		{
			text: message2,
			close: true,
			duration: -1,
		},
		'info'
	);
	messageChannel.close();
	refreshChannel.postMessage('Refresh');
	refresh({toastifyInstance: toast});
};

const removeOnClick = async (
	event: Event,
	{
		sectionIdSpans,
		messageChannel,
		refreshChannel,
	}: {sectionIdSpans: Element[]; messageChannel: BroadcastChannel; refreshChannel: BroadcastChannel},
	{
		indexNo,
		anchor,
		toast,
	}: {
		indexNo: string;
		anchor: string;
		toast: ToastifyInstance;
	}
) => {
	event.preventDefault();
	const parentElement = (event.target as HTMLElement)?.parentElement;
	if (!parentElement) {
		return;
	}

	replaceChild(parentElement, <span>{getMessage('Deleting')}</span>);
	for (const span of sectionIdSpans) {
		span.remove();
	}
	const message1 = getMessage('Deleting') + getMessage(':') + getMessage('Section $1').replace('$1', indexNo);
	messageChannel.postMessage(message1);

	toast ||= {
		hideToast: () => {},
	};
	toast.hideToast();
	toast = toastify(
		{
			text: message1,
			close: true,
			duration: -1,
		},
		'info'
	);

	await removeSection({index: indexNo, anchor});
	replaceChild(parentElement, <span>{getMessage('Deleted')}</span>);
	const message2 = getMessage('Deleted') + getMessage(':') + getMessage('Section $1').replace('$1', indexNo);
	messageChannel.postMessage(message2);
	toast.hideToast();
	toast = toastify(
		{
			text: message2,
			close: true,
			duration: -1,
		},
		'info'
	);
	messageChannel.close();
	refreshChannel.postMessage('Refresh');
	refresh({toastifyInstance: toast});
};

interface ArchiveSectionLinkProps {
	sectionIdSpans: Element[];
	messageChannel: BroadcastChannel;
	refreshChannel: BroadcastChannel;
	indexNo: string;
	anchor: string;
	toast: ToastifyInstance;
	archiveTo: string;
}

const ArchiveSectionLink = ({
	sectionIdSpans,
	messageChannel,
	refreshChannel,
	indexNo,
	anchor,
	archiveTo,
	toast,
}: ArchiveSectionLinkProps) => (
	<OnClick
		className={'archive'}
		onClick={(event: Event) => {
			void archiveOnClick(
				event,
				{
					sectionIdSpans,
					messageChannel,
					refreshChannel,
				},
				{
					indexNo,
					anchor,
					archiveTo,
					toast,
				}
			);
		}}
		textContent={getMessage('Archive')}
	/>
);

interface RemoveSectionLinkProps {
	sectionIdSpans: Element[];
	messageChannel: BroadcastChannel;
	refreshChannel: BroadcastChannel;
	indexNo: string;
	anchor: string;
	toast: ToastifyInstance;
}

const RemoveSectionLink = ({
	sectionIdSpans,
	messageChannel,
	refreshChannel,
	indexNo,
	anchor,
	toast,
}: RemoveSectionLinkProps) => (
	<OnClick
		className={'delete'}
		textContent={getMessage('Delete')}
		onClick={(event) => {
			void removeOnClick(
				event,
				{
					sectionIdSpans,
					messageChannel,
					refreshChannel,
				},
				{
					indexNo,
					anchor,
					toast,
				}
			);
		}}
	/>
);

interface ArchiveAndDeleteSectionLinkProps {
	sectionIdSpans: Element[];
	messageChannel: BroadcastChannel;
	refreshChannel: BroadcastChannel;
	index: string;
	id: string;
	toastifyInstance: ToastifyInstance;
	secArc: string;
	secDel: string;
	arcLoc: string;
}

const ArchiveAndDeleteSectionLink = ({
	sectionIdSpans,
	messageChannel,
	refreshChannel,
	index,
	id,
	toastifyInstance,
	secArc,
	secDel,
	arcLoc,
}: ArchiveAndDeleteSectionLinkProps) => (
	<SectionID>
		{secArc === '1' ? (
			<ArchiveSectionLink
				sectionIdSpans={sectionIdSpans}
				messageChannel={messageChannel}
				refreshChannel={refreshChannel}
				indexNo={index}
				anchor={id}
				toast={toastifyInstance}
				archiveTo={arcLoc}
			/>
		) : (
			<></>
		)}
		{secArc === '1' && secDel === '1' ? <Pipe /> : <></>}
		{secDel === '1' ? (
			<RemoveSectionLink
				sectionIdSpans={sectionIdSpans}
				messageChannel={messageChannel}
				refreshChannel={refreshChannel}
				indexNo={index}
				anchor={id}
				toast={toastifyInstance}
			/>
		) : (
			<></>
		)}
	</SectionID>
);

export {ArchiveSectionLink, RemoveSectionLink, ArchiveAndDeleteSectionLink};

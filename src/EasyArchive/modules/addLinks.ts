import {noticeMessage, onClickWrap, pipeElement, sectionIdSpanElement, spanWrap} from './util/react';
import {type ReactElement} from 'ext.gadget.React';
import {archiveSection} from './archiveSection';
import {getMessage} from './i18n';
import {getSections} from './util/getSection';
import {refresh} from './util/refreshPage';
import {removeSection} from './removeSection';
import {replaceChild} from './util/replaceChild';
import {toastify} from 'ext.gadget.Toastify';

const addLinks = async ({
	arcLevel,
	arcLoc,
	secArc,
	secDel,
}: {
	arcLevel: string;
	arcLoc: string | null;
	secArc: string;
	secDel: string;
}) => {
	if (!arcLoc) {
		return;
	}

	const {wgPageName} = mw.config.get();
	const sectionsToArchive = await getSections(wgPageName);

	const headings = document.querySelectorAll(`h${arcLevel}`);
	const headlines = [];
	const headingIndices = [];

	for (const heading of headings) {
		const headline = heading.querySelector('.mw-headline');
		headlines[headlines.length] = headline?.id;
	}

	const sectionIdSpans: ReactElement[] = [];
	let toastifyInstance: ToastifyInstance = {
		hideToast: () => {},
	};

	const messageChannel: BroadcastChannel = new BroadcastChannel(`${wgPageName}_message`);
	const refreshChannel: BroadcastChannel = new BroadcastChannel(`${wgPageName}_refresh`);

	for (const section of sectionsToArchive) {
		if (section.level !== arcLevel) {
			continue;
		}

		if (headlines.includes(section.anchor)) {
			headingIndices[headingIndices.length] = {
				index: section.index,
				id: section.anchor,
			};
		}
	}

	for (const {index, id} of headingIndices) {
		// eslint-disable-next-line unicorn/prefer-query-selector
		const headline = document.getElementById(id);
		if (!headline) {
			continue;
		}

		const parentHeading = headline.parentElement;
		if (!parentHeading) {
			continue;
		}

		const editSection = parentHeading.querySelector('.mw-editsection');
		if (!editSection) {
			continue;
		}

		const sectionIdSpan = sectionIdSpanElement();
		const archiveSectionLink = ({
			indexNo,
			anchor,
			archiveTo,
			toast,
		}: {
			indexNo: string;
			anchor: string;
			archiveTo: string;
			toast: ToastifyInstance;
		}) => {
			const archiveOnClick = (event: Event) => {
				event.preventDefault();
				const parentElement = (event.target as HTMLElement)?.parentElement;
				if (!parentElement) {
					return;
				}

				replaceChild(parentElement, spanWrap(getMessage('Archiving')));
				for (const span of sectionIdSpans) {
					span.remove();
				}
				const message1 =
					getMessage('Archiving') + getMessage(':') + getMessage('Section $1').replace('$1', indexNo);
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

				void archiveSection({index: indexNo, anchor, archiveTo}).then(() => {
					replaceChild(parentElement, spanWrap(getMessage('Archived')));
					const message2 =
						getMessage('Archived') + getMessage(':') + getMessage('Section $1').replace('$1', indexNo);
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
				});
			};
			return onClickWrap(getMessage('Archive'), 'archive', archiveOnClick);
		};

		const removeSectionLink = ({
			indexNo,
			anchor,
			toast,
		}: {
			indexNo: string;
			anchor: string;
			toast: ToastifyInstance;
		}) => {
			const removeOnClick = (event: Event) => {
				event.preventDefault();
				const parentElement = (event.target as HTMLElement)?.parentElement;
				if (!parentElement) {
					return;
				}

				replaceChild(parentElement, spanWrap(getMessage('Deleting')));
				for (const span of sectionIdSpans) {
					span.remove();
				}
				const message1 =
					getMessage('Deleting') + getMessage(':') + getMessage('Section $1').replace('$1', indexNo);
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

				void removeSection({index: indexNo, anchor}).then(() => {
					replaceChild(parentElement, spanWrap(getMessage('Deleted')));
					const message2 =
						getMessage('Deleted') + getMessage(':') + getMessage('Section $1').replace('$1', indexNo);
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
				});
			};
			return onClickWrap(getMessage('Delete'), 'delete', removeOnClick);
		};

		if (secArc === '1' || secDel === '1') {
			if (secArc === '1') {
				const archiveLink = archiveSectionLink({
					indexNo: index,
					anchor: id,
					archiveTo: arcLoc,
					toast: toastifyInstance,
				});
				sectionIdSpan.append(archiveLink);
			}
			if (secArc === '1' && secDel === '1') {
				sectionIdSpan.append(pipeElement());
			}
			if (secDel === '1') {
				const removeLink = removeSectionLink({indexNo: index, anchor: id, toast: toastifyInstance});
				sectionIdSpan.append(removeLink);
			}
			sectionIdSpans[sectionIdSpans.length] = sectionIdSpan;
			editSection.prepend(sectionIdSpan);
		}
	}

	messageChannel.addEventListener('message', (event) => {
		for (const span of sectionIdSpans) {
			span.remove();
		}
		toastifyInstance.hideToast();
		toastifyInstance = toastify(
			{
				text: event.data as string,
				close: true,
				duration: 3 * 1000,
			},
			'info'
		);
	});

	refreshChannel.addEventListener('message', () => {
		toastifyInstance.hideToast();
		toastifyInstance = toastify(
			{
				node: noticeMessage({
					onClick: () => {
						toastifyInstance.hideToast();
						refresh();
					},
				}),
				close: true,
				duration: -1,
			},
			'info'
		);
	});
};

export {addLinks};

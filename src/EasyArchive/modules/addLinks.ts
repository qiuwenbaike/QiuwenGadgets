import {noticeMessage, onClickWrap, pipeElement, sectionIdSpanElement, spanWrap} from './util/react';
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

	const arcDelChannel: BroadcastChannel = new BroadcastChannel(wgPageName);
	const arcDelMessageChannel: BroadcastChannel = new BroadcastChannel(`${wgPageName}_message`);
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

		let toastifyInstance: ToastifyInstance = {
			hideToast: () => {},
		};
		const sectionIdSpan = sectionIdSpanElement();
		const archiveSectionLink = ({
			indexNo,
			anchor,
			archiveTo,
		}: {
			indexNo: string;
			anchor: string;
			archiveTo: string;
		}) => {
			return onClickWrap(getMessage('Archive'), 'archive', (event) => {
				event.preventDefault();
				const parentElement = (event.target as HTMLElement)?.parentElement;
				if (!parentElement) {
					return;
				}

				replaceChild(parentElement, spanWrap(getMessage('Archiving')));

				toastifyInstance = toastify(
					{
						text:
							getMessage('Archiving') + getMessage(':') + getMessage('Section $1').replace('$1', indexNo),
						duration: -1,
					},
					'info'
				);
				arcDelChannel.postMessage('Archive');
				arcDelMessageChannel.postMessage(
					getMessage('Archiving') + getMessage(':') + getMessage('Section $1').replace('$1', indexNo)
				);

				void archiveSection({index: indexNo, anchor, archiveTo}).then(() => {
					toastifyInstance.hideToast();
					replaceChild(parentElement, spanWrap(getMessage('Archived')));
					arcDelChannel.close();
					toastifyInstance = toastify(
						{
							text: getMessage('Archived'),
							duration: 3 * 1000,
						},
						'success'
					);
					toastifyInstance = toastify(
						{
							text: getMessage('Refreshing'),
							close: true,
							duration: -1,
						},
						'info'
					);
					refreshChannel.postMessage('Refresh');
					refresh();
				});
			});
		};

		const removeSectionLink = ({indexNo, anchor}: {indexNo: string; anchor: string}) => {
			return onClickWrap(getMessage('Delete'), 'delete', (event) => {
				event.preventDefault();
				const parentElement = (event.target as HTMLElement)?.parentElement;
				if (!parentElement) {
					return;
				}

				replaceChild(parentElement, spanWrap(getMessage('Deleting')));

				toastifyInstance = toastify(
					{
						text:
							getMessage('Deleting') + getMessage(':') + getMessage('Section $1').replace('$1', indexNo),
						duration: -1,
					},
					'info'
				);
				arcDelChannel.postMessage('Delete');
				arcDelMessageChannel.postMessage(
					getMessage('Deleting') + getMessage(':') + getMessage('Section $1').replace('$1', indexNo)
				);

				void removeSection({index: indexNo, anchor}).then(() => {
					toastifyInstance.hideToast();
					replaceChild(parentElement, spanWrap(getMessage('Deleted')));
					arcDelChannel.close();
					toastifyInstance = toastify(
						{
							text: getMessage('Deleted'),
							duration: 3 * 1000,
						},
						'success'
					);
					toastifyInstance = toastify(
						{
							text: getMessage('Refreshing'),
							close: true,
							duration: -1,
						},
						'info'
					);
					refreshChannel.postMessage('Refresh');
					refresh();
				});
			});
		};

		if (secArc === '1') {
			const archiveLink = archiveSectionLink({indexNo: index, anchor: id, archiveTo: arcLoc});
			sectionIdSpan.append(archiveLink);
		}
		if (secArc === '1' && secDel === '1') {
			sectionIdSpan.append(pipeElement());
		}
		if (secDel === '1') {
			const removeLink = removeSectionLink({indexNo: index, anchor: id});
			sectionIdSpan.append(removeLink);
		}
		editSection.prepend(sectionIdSpan);

		arcDelChannel.addEventListener('message', () => {
			sectionIdSpan.remove();
		});
		arcDelMessageChannel.addEventListener('message', (event) => {
			toastifyInstance.hideToast();
			toastifyInstance = toastify(
				{
					text: event.data as string,
					close: true,
					duration: -1,
				},
				'info'
			);
		});
		refreshChannel.addEventListener('message', () => {
			const locationReload = () => {
				toastifyInstance.hideToast();
				toastifyInstance = toastify(
					{
						text: getMessage('Refreshing'),
						close: true,
						duration: -1,
					},
					'info'
				);
				location.reload();
				return false;
			};
			toastifyInstance.hideToast();
			toastifyInstance = toastify(
				{
					node: noticeMessage({onClick: locationReload}),
					close: true,
					duration: -1,
				},
				'info'
			);
		});
	}
};

export {addLinks};

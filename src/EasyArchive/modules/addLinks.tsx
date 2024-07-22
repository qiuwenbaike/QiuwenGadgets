import {onClickWrap, pipeElement, sectionIdSpanElement} from './react';
import React from 'ext.gadget.React';
import {archive} from './archive';
import {getMessage} from './i18n';
import {getSections} from './parse';
import {refresh} from './refreshPage';
import {remove} from './remove';
import {replaceChild} from './replaceChild';
import {toastify} from 'ext.gadget.Toastify';

const addLinks = async ({
	arcLevel,
	arcLoc,
	secArc,
	secDel,
}: {
	arcLevel: string;
	arcLoc: string;
	secArc: string;
	secDel: string;
}) => {
	const {wgPageName} = mw.config.get();
	const sectionsToArchive = await getSections(wgPageName);

	const headings = document.querySelectorAll(`h${arcLevel}`);
	const headlines = [];
	const headingIndices = [];

	for (const heading of headings) {
		const headline = heading.querySelector('.mw-headline');
		headlines[headlines.length] = headline?.id;
	}

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
		if (secArc === '1') {
			sectionIdSpan.append(
				onClickWrap(getMessage('Archive'), 'archive', (event) => {
					event.preventDefault();
					const parentElement = (event.target as HTMLElement)?.parentElement;
					if (!parentElement) {
						return;
					}
					replaceChild(parentElement, <span>{getMessage('Archiving')}</span>);
					let toastifyInstance: ToastifyInstance = {
						hideToast: () => {},
					};
					toastifyInstance = toastify(
						{
							text: getMessage('Archiving'),
							duration: -1,
						},
						'info'
					);
					void archive(index, id, arcLoc).then(() => {
						toastifyInstance.hideToast();
						replaceChild(parentElement, <span>{getMessage('Archived')}</span>);
						toastifyInstance = toastify(
							{
								text: getMessage('Archived'),
								duration: 3 * 1000,
							},
							'success'
						);
						refresh();
					});
				})
			);
		}
		if (secArc === '1' && secDel === '1') {
			sectionIdSpan.append(pipeElement());
		}
		if (secDel === '1') {
			sectionIdSpan.append(
				onClickWrap(getMessage('Delete'), 'delete', (event) => {
					event.preventDefault();
					const parentElement = (event.target as HTMLElement)?.parentElement;
					if (!parentElement) {
						return;
					}
					replaceChild(parentElement, <span>{getMessage('Deleting')}</span>);
					let toastifyInstance: ToastifyInstance = {
						hideToast: () => {},
					};
					toastifyInstance = toastify(
						{
							text: getMessage('Deleting'),
							duration: -1,
						},
						'info'
					);
					void remove(index, id).then(() => {
						toastifyInstance.hideToast();
						replaceChild(parentElement, <span>{getMessage('Deleted')}</span>);
						toastifyInstance = toastify(
							{
								text: getMessage('Deleted'),
								duration: 3 * 1000,
							},
							'success'
						);
						refresh();
					});
				})
			);
		}
		editSection.prepend(sectionIdSpan);
	}
};

export {addLinks};

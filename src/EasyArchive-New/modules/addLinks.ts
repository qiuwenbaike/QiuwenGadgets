import {emptyElement, onClickWrap, pipeElement, sectionIdSpanElement} from './react';
import {archive} from './archive';
import {getSections} from './parse';
import {remove} from './remove';

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
		const heading = document.getElementById(id);
		if (!heading) {
			continue;
		}

		const editSectionSpan = heading.querySelector('.mw-editsection');
		if (!editSectionSpan) {
			continue;
		}

		const sectionIdSpan = sectionIdSpanElement();
		sectionIdSpan.append(
			secArc === '1'
				? onClickWrap('存档', () => {
						void archive(index, id, arcLoc);
					})
				: emptyElement(),
			secArc === '1' && secDel === '1' ? pipeElement() : emptyElement(),
			secDel === '1'
				? onClickWrap('删除', () => {
						void remove(index, id);
					})
				: emptyElement()
		);
		editSectionSpan.append(sectionIdSpan);
	}
};

export {addLinks};

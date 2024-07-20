import './EasyArchive-New.less';
import {emptyElement, onClickWrap, pipeElement, sectionIdSpanElement} from './modules/react';
import {archive} from './modules/archive';
import {getSections} from './modules/parse';
import {getSettings} from './modules/settings';
import {remove} from './modules/remove';

const main = async () => {
	const {arcLevel, arcLoc, secArc, secDel} = getSettings();

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

		if (heading) {
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
			heading.after(sectionIdSpan);
		}
	}
};

void main();

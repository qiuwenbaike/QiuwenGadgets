import {isDiff} from './isDiff';
import {isTargetSpecialPage} from './isTargetSpecialPage';

interface TargetElements {
	color: string;
	targetElements: HTMLElement[];
}

const getTargetElements = ($content: JQuery<HTMLElement>): TargetElements => {
	let color: string = ''; // links color (coloured links)
	let targetElements: HTMLElement[] = [];
	const {wgAction} = mw.config.get();

	if (isDiff()) {
		// in diff pages
		color = 'inherit'; // not coloured links
		targetElements = [...$content.find(['.diff', '.firstrevisionheader'].join(','))];
	} else if (['edit', 'submit', 'history'].includes(wgAction) || isTargetSpecialPage()) {
		// in comments
		targetElements = [...$content.find('.comment')];
	} else {
		// in code sections
		targetElements = [
			...$content.find(['source', '.css', '.source-css', '.javascript', '.source-javascript'].join(',')),
		];
	}

	return {
		color,
		targetElements,
	};
};

export {type TargetElements, getTargetElements};

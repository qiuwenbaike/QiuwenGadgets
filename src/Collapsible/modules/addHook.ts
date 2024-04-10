import {generateTargetElements} from './util/generateTargetElements';
import {makeCollapsible} from './makeCollapsible';
import {navFrame} from './navFrame';

const addHook = (): void => {
	mw.hook('wikipage.content').add(($content): void => {
		// compatible with old navFrames (see {{HideH}} and {{HideF}})
		navFrame($content);

		const $collapsibles: JQuery = generateTargetElements($content);
		if (!$collapsibles.length) {
			return;
		}

		makeCollapsible($collapsibles);
	});
};

export {addHook};

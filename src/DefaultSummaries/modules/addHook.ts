import {processVisualEditor} from './processVisualEditor';
import {processWikiEditor} from './processWikiEditor';

const addHook = (): void => {
	$((): void => {
		const $body: JQuery<HTMLBodyElement> = $('body');

		mw.hook('ve.saveDialog.stateChanged').add((): void => {
			processVisualEditor($body);
		});
		processWikiEditor($body);
	});
};

export {addHook};

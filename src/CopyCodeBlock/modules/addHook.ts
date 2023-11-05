import {addButton} from './addButton';

const addHook = (): void => {
	mw.hook('wikipage.content').add(($content: JQuery): void => {
		const $pres: JQuery<HTMLPreElement> = $content.find('pre');
		if (!$pres.length) {
			return;
		}

		addButton($pres);
	});
};

export {addHook};

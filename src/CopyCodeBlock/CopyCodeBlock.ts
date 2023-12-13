import {addButton} from './modules/addButton';

mw.hook<JQuery[]>('wikipage.content').add(($content): void => {
	const $pres: JQuery<HTMLPreElement> = $content.find('pre');
	if (!$pres.length) {
		return;
	}

	addButton($pres);
});

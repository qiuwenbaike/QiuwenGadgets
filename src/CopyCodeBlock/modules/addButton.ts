import {CLASS_CODE_BLOCK, CLASS_COPY_BUTTON} from './constant';
import {addCopyListener} from './addCopyListener';
import {getMessage} from './i18n';

const addButton = ($pres: JQuery<HTMLPreElement>): void => {
	// The following classes are used here:
	// * see ./constant.ts
	// * for more information
	const copyButton: OO.ui.ButtonWidget = new OO.ui.ButtonWidget({
		classes: [CLASS_COPY_BUTTON],
		framed: false,
		icon: 'copy',
		title: getMessage('Copy'),
	});
	// The following classes are used here:
	// * see ./constant.ts
	// * for more information
	$pres.addClass(CLASS_CODE_BLOCK).append(copyButton.$element);

	addCopyListener($pres);
};

export {addButton};

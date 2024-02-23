import {INPUT_ID} from './constant';
import {getMessage} from './i18n';

let isInit: boolean = false;

const processWikiEditor = ({$body, $editForm}: {$body: JQuery<HTMLBodyElement>; $editForm?: JQuery}): void => {
	if (isInit) {
		return;
	}

	const $target: JQuery = ($editForm as JQuery).find('.editCheckboxes .oo-ui-horizontalLayout');
	if (!$target.length) {
		return;
	}

	isInit = true;

	const checkbox: OO.ui.CheckboxInputWidget = new OO.ui.CheckboxInputWidget({
		selected: false,
	});

	checkbox.setInputId(INPUT_ID);

	checkbox.on('change', (): void => {
		const changeTag: string = 'AI_assisted';
		const generateChangeTags = (originChangeTags: string): string => {
			return checkbox.isSelected()
				? `${originChangeTags},${changeTag}`
				: originChangeTags.replace(`,${changeTag}`, '');
		};

		let changeTags: string = '';

		const $wpChangeTags: JQuery = $('<input>').attr({
			id: 'wpChangeTags',
			name: 'wpChangeTags',
			type: 'hidden',
			value: '',
		});
		$body = ($editForm as JQuery).parents('body');
		const $originWpChangeTags: JQuery = $body.find('input[name=wpChangeTags]');
		if (!$originWpChangeTags.length) {
			$body.prepend($wpChangeTags);
		}
		changeTags = generateChangeTags($originWpChangeTags.val()?.toString() ?? '');
		$originWpChangeTags.val(changeTags);
	});

	const checkboxLayout: OO.ui.FieldLayout<OO.ui.CheckboxInputWidget> = new OO.ui.FieldLayout(checkbox, {
		align: 'inline',
		label: getMessage('AiAssisted'),
	});

	if (!$body.find(`#${INPUT_ID}`).length) {
		$target.append(checkboxLayout.$element);
	}
};

export {processWikiEditor};

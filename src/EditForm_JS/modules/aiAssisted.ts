import {getMessage} from './i18n';

let isInit: boolean = false;

const aiAssisted = ({$body, $editForm}: {$body?: JQuery<HTMLBodyElement>; $editForm?: JQuery}): void => {
	if (isInit) {
		return;
	}

	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore
	const isVeInit: boolean = !!ve.init;

	const $target: JQuery = isVeInit
		? ($body as JQuery<HTMLBodyElement>).find('.ve-ui-mwSaveDialog-checkboxes')
		: ($editForm as JQuery).find('.editCheckboxes .oo-ui-horizontalLayout');
	if (!$target.length) {
		return;
	}

	isInit = true;

	const checkbox: OO.ui.CheckboxInputWidget = new OO.ui.CheckboxInputWidget({
		selected: false,
	});
	checkbox.on('change', (): void => {
		const changeTag: string = 'AI_assisted';
		const generateChangeTags = (originChangeTags: string): string => {
			return checkbox.isSelected()
				? `${originChangeTags},${changeTag}`
				: originChangeTags.replace(`,${changeTag}`, '');
		};

		let changeTags: string = '';
		if (isVeInit) {
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			changeTags = generateChangeTags(ve.init.target.saveFields.wpChangeTags?.() ?? '');
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			ve.init.target.saveFields.wpChangeTags = (): string => {
				return changeTags;
			};
		} else {
			const $wpChangeTags: JQuery = $('<input>').attr({
				id: 'wpChangeTags',
				name: 'wpChangeTags',
				type: 'hidden',
				value: '',
			});
			$body = ($editForm as JQuery).parents('body');
			const $originWpChangeTags: JQuery = $body.find('#wpChangeTags');
			if (!$originWpChangeTags.length) {
				$body.prepend($wpChangeTags);
			}
			changeTags = generateChangeTags($originWpChangeTags.val()?.toString() ?? '');
			$originWpChangeTags.val(changeTags);
		}
	});

	const checkboxLayout: OO.ui.FieldLayout<OO.ui.CheckboxInputWidget> = new OO.ui.FieldLayout(checkbox, {
		align: 'inline',
		label: getMessage('AiAssisted'),
	});
	$target.append(checkboxLayout.$element);
};

export {aiAssisted};

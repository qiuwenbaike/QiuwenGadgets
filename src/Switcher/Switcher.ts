import {getBody} from 'ext.gadget.Util';
import {getMessage} from './modules/i18n';

void getBody().then(function switcherJS(): void {
	for (const [index, container] of [...document.querySelectorAll('.switcher-container')].entries()) {
		const radioName: string = `switcher-${index}`;

		let $selectedSwitcher: JQuery | undefined;
		let $radio: JQuery | undefined;
		const switchers: HTMLElement[] = [];

		for (const switcher of [...container.children].values()) {
			const label: HTMLElement | null = switcher.querySelector('.switcher-label');
			if (!label?.childNodes.length) {
				continue;
			}

			switchers[switchers.length] = switcher as HTMLElement; // Replace `switchers.push()` to avoid polyfilling core-js
			const $switcher: JQuery = $(switcher as HTMLElement);

			$radio = $('<input>').prop({
				type: 'radio',
				name: radioName,
			});
			// eslint-disable-next-line no-loop-func
			$radio.on('click', (): void => {
				$selectedSwitcher?.hide();
				$switcher.show();
				$selectedSwitcher = $switcher;
			});

			if (!$selectedSwitcher) {
				// Mark the first one as selected
				$selectedSwitcher = $switcher;
				$radio.prop('checked', true);
			} else if (label.dataset['switcherDefault']) {
				// Hide non-default
				$switcher.hide();
			} else {
				// Custom default
				$radio.trigger('click');
			}

			const $radios = $('<label>').css('display', 'block');
			$radios.append($radio, label.childNodes as unknown as Element[]);
			$radios.appendTo(container);

			label.remove();
		}

		if (switchers.length > 1) {
			const $label = $('<label>').css('display', 'block').text(getMessage('Show all'));
			const $showAllRadio = $('<input>').prop({
				type: 'radio',
				name: radioName,
			});
			$showAllRadio.on('click', (): void => {
				const $switchers: JQuery = $(switchers);
				$switchers.show();
				$selectedSwitcher = $switchers;
			});
			$label.prepend($showAllRadio);
			$label.appendTo(container);
		} else if (switchers.length) {
			$radio?.remove();
		}
	}
});

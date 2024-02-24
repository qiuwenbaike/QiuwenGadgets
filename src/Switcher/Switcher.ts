import {getBody} from 'ext.gadget.Util';

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

			$radio = $('<input>')
				.prop({
					type: 'radio',
					name: radioName,
				})
				// eslint-disable-next-line no-loop-func
				.on('click', (): void => {
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

			$('<label>')
				.css('display', 'block')
				.append($radio, label.childNodes as unknown as Element[])
				.appendTo(container);

			label.remove();
		}

		if (switchers.length > 1) {
			$('<label>')
				.css('display', 'block')
				.text(`${window.wgULS('显示', '顯示')}全部`)
				.prepend(
					$('<input>')
						.prop({
							type: 'radio',
							name: radioName,
						})
						.on('click', (): void => {
							const $switchers: JQuery = $(switchers);
							$switchers.show();
							$selectedSwitcher = $switchers;
						})
				)
				.appendTo(container);
		} else if (switchers.length) {
			$radio?.remove();
		}
	}
});

const switcherJS = () => {
	for (const [index, container] of [...document.querySelectorAll('.switcher-container')].entries()) {
		// eslint-disable-next-line no-undef-init, unicorn/no-useless-undefined
		let selected: unknown[] | Element | undefined = undefined;
		let $radio: JQuery<Element> | undefined;
		const switchers: Element[] = [];
		const radioName = `switcher-${index}`;
		for (const [_index, switcher] of [...container.children].entries()) {
			const label = switcher.querySelector('.switcher-label');
			if (!label || label.childNodes.length === 0) {
				continue;
			}
			switchers.push(switcher);
			$radio = $('<input>')
				.prop({type: 'radio', name: radioName})
				// eslint-disable-next-line no-loop-func
				.on('click', () => {
					$(selected as NonNullable<typeof selected>).hide();
					$(switcher).show();
					selected = switcher;
				});
			if (!selected) {
				// Mark the first one as selected
				selected = switcher;
				$radio.prop('checked', true);
			} else if ((label as HTMLElement).dataset['switcherDefault'] === null) {
				// Hide non-default
				$(switcher).hide();
			} else {
				// Custom default
				$radio.trigger('click');
			}
			$('<label>')
				.css('display', 'block')
				.append($radio, label.childNodes as unknown as HTMLElement)
				.appendTo(container);
			$(label).remove();
		}
		if (switchers.length > 1) {
			$('<label>')
				.css('display', 'block')
				.text(`${window.wgULS('显示', '顯示')}全部`)
				.prepend(
					$('<input>')
						.prop({type: 'radio', name: radioName})
						.on('click', () => {
							$(switchers).show();
							selected = switchers;
						})
				)
				.appendTo(container);
		}
		if (switchers.length === 1 && $radio !== undefined) {
			$radio.remove();
		}
	}
};

$(switcherJS);

const checkA11yConfirmKey = (event: KeyboardEvent | MouseEvent | JQuery.ClickEvent | JQuery.KeyDownEvent): boolean => {
	if (['click', 'keydown'].includes(event.type)) {
		if (event.type === 'keydown') {
			return ['Enter', ' '].includes((event as KeyboardEvent).key);
		}
		return true;
	}
	return false;
};

const ding = (value: string, autoHide = false, type: 'default' | 'info' | 'success' | 'warning' = 'default'): void => {
	autoHide ? DingExposedInterface(value, type) : DingExposedInterface(value, type, 'long');
};

const initMwApi = (userAgent?: string): mw.Api => {
	return new mw.Api({
		ajax: {
			headers: {
				'Api-User-Agent': userAgent,
			},
		},
	});
};

const oouiConfirmWithStyle = (message: string): JQuery.Promise<boolean> => {
	return OO.ui.confirm(
		$('<div>')
			.addClass('oo-ui-window-foot')
			.css({
				border: '.1rem solid #0645ad',
				display: 'flex',
				'justify-content': 'space-evenly',
			})
			.append(
				$('<span>')
					.css({
						'font-size': '1.2rem',
						'font-weight': '500',
						'line-height': '1.8',
						padding: '.4em 0',
					})
					.text(message)
			)
	);
};

export {checkA11yConfirmKey, ding, initMwApi, oouiConfirmWithStyle};

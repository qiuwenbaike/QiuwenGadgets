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

export {checkA11yConfirmKey, ding, initMwApi};

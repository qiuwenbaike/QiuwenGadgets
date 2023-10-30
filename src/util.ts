const checkA11yConfirmKey = (
	event: JQuery.ClickEvent | JQuery.KeyDownEvent,
	{preventDefault = false, stopPropagation = false}: {preventDefault?: boolean; stopPropagation?: boolean} = {}
): boolean => {
	if (event.type === 'keydown' && event.key !== 'Enter' && event.key !== ' ') {
		return true;
	}
	if (preventDefault) {
		event.preventDefault();
	}
	if (stopPropagation) {
		event.stopPropagation();
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

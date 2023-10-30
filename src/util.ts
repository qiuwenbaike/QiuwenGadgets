const ding = (value: string, autoHide = false, type: 'default' | 'info' | 'success' | 'warning' = 'default'): void => {
	autoHide ? DingExposedInterface(value, type) : DingExposedInterface(value, type, 'long');
};

export {ding};

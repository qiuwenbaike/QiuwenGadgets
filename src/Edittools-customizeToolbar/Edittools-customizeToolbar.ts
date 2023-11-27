const edittoolsCustomizeToolbar = (customizer: () => void): void => {
	if (!mw.user.options.get('usebetatoolbar')) {
		return;
	}

	$(function callCustomizer(): void {
		const $body: JQuery<HTMLBodyElement> = $('body');

		customizer.call($body.find('#wpTextbox1'));
	});
};

(window as unknown as {customizeToolbar: typeof edittoolsCustomizeToolbar}).customizeToolbar =
	edittoolsCustomizeToolbar;

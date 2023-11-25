// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
const customizeToolbar = (customizer) => {
	/* Check if we are in edit mode and the required modules are available and then customize the toolbar */
	if (!['edit', 'submit'].includes(mw.config.get('wgAction'))) {
		return;
	}

	if (!mw.user.options.get('usebetatoolbar')) {
		return;
	}

	mw.loader.using('ext.wikiEditor').then(() => {
		$(function callCustomizer() {
			const $body = $('body');
			customizer.call($body.find('#wpTextbox1'));
		});
	});
};

/* Generic code */
window.customizeToolbar = customizeToolbar;

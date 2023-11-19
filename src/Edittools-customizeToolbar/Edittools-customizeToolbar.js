const customizeToolbar = (customizer) => {
	/* Check if we are in edit mode and the required modules are available and then customize the toolbar */
	if (['edit', 'submit'].includes(mw.config.get('wgAction')) && mw.user.options.get('usebetatoolbar')) {
		mw.loader.using('ext.wikiEditor').done(() => {
			$(() => {
				customizer.call($('#wpTextbox1'));
			});
		});
	}
};

/* Generic code */
window.customizeToolbar = customizeToolbar;

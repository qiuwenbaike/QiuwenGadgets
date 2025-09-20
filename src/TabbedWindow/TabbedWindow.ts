(function () {
	const trySettingTab = function (indexLayout: OO.ui.IndexLayout, hash: string | unknown[]) {
		const possiblePanelName = hash.slice(1) as string;
		const possiblePanel = possiblePanelName && indexLayout.getTabPanel(possiblePanelName);
		if (possiblePanel) {
			indexLayout.setTabPanel(possiblePanelName);
			indexLayout.scrollElementIntoView();
		}
	};

	/**
	 * This function fetches sample code in different programming languages
	 * from the sub-sections of the section "Sample Code" and places
	 * them into an OOUI tabbed window.
	 *
	 * @param {jQuery} $tabbedWindows
	 */
	const makeTabWindow = function ($tabbedWindows: JQuery<Element>) {
		$tabbedWindows.each((_i: number, tabbedWindow: Element) => {
			const indexLayout = new OO.ui.IndexLayout({
				expanded: false,
			});

			const tabs: OO.ui.TabPanelLayout[] = [];
			$(tabbedWindow)
				.find('h3, h4, h5, h6')
				.each((_j: number, heading: Element) => {
					const $heading = $(heading);
					let $headingWrapper, $headingText;
					if ($heading.closest('.mw-heading').length) {
						$headingWrapper = $heading.closest('.mw-heading');
						$headingText = $heading;
					} else if ($heading.find('.mw-headline').length) {
						$headingWrapper = $heading;
						$headingText = $heading.find('.mw-headline');
					} else {
						return;
					}
					const id = $headingText.attr('id') as string;

					const $content = $headingWrapper.nextUntil(
						'h3, h4, h5, h6, .mw-heading3, .mw-heading4, .mw-heading5, .mw-heading6'
					);

					// Add the heading the content panel to preserve the original IDs as may be required by other tools (T350840)
					$content.prepend($headingWrapper.hide());

					const tabPanel = new OO.ui.TabPanelLayout(id, {
						expanded: false,
						label: $headingText.text(),
						// Attach the original DOM elements directly by reference.
						// This means they move directly in memory instead of getting copied/serialized/parsed as HTML.
						// If we didn't move them, but instead copied and re-parsed HTML, then it would disconnect events
						// and other live references from gadgets and extensions, which breaks sorting features, responsive gallery, etc.
						$content,
					});

					tabPanel.$element.css('padding', '0.5em');

					tabs.push(tabPanel);
				});

			indexLayout.addTabPanels(tabs, 0);

			const panelLayout = new OO.ui.PanelLayout({
				expanded: false,
				framed: true,
				content: [indexLayout],
			});

			$(tabbedWindow).empty().append(panelLayout.$element);

			// Workaround for T348680
			mw.hook('ve.deactivationComplete').fire();

			// Select and scroll to any initially linked item in the address
			trySettingTab(indexLayout, location.hash);
			// Keep address bar updated with sharable link (also makes forward/backward browser navigation work)
			if (history.replaceState) {
				indexLayout.on('set', (tabPanel) => {
					history.replaceState(null, document.title, `#${tabPanel.getName()}`);
				});
			}
			// Support anchor links on the same page (from table of Contents, or [[#Section]] links)
			window.addEventListener('hashchange', () => {
				trySettingTab(indexLayout, location.hash);
			});
		});
	};

	mw.hook('wikipage.content').add(($content) => {
		const $tabbedWindows = $content.find('.mw-gadget-tabbedwindow');
		if ($tabbedWindows.length > 0) {
			// Viewing an API subject page with tabs on it, let's make them nice!
			makeTabWindow($tabbedWindows);
		}
	});
})();

import App from './App.vue';
import {createApp} from 'vue';

/**
 * This function fetches sample code in different programming languages
 * from the sub-sections of the section "Sample Code" and places
 * them into a Vue tabbed window.
 *
 * @param {jQuery} $tabbedWindows
 */
const makeTabWindow = ($tabbedWindows: JQuery<Element>) => {
	$tabbedWindows.each((_i: number, tabbedWindow: Element) => {
		const panels: {id: string; label: string; content: HTMLElement[]}[] = [];
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

				panels.push({
					id,
					label: $headingText.text(),
					// Keep the original nodes so existing event handlers and live references survive.
					content: $content.toArray(),
				});
			});

		$(tabbedWindow).empty();
		createApp(App, {panels}).mount(tabbedWindow);

		// Workaround for T348680
		mw.hook('ve.deactivationComplete').fire();
	});
};

mw.hook('wikipage.content').add(($content) => {
	const $tabbedWindows = $content.find('.mw-gadget-tabbedwindow');
	if ($tabbedWindows.length > 0) {
		// Viewing an API subject page with tabs on it, let's make them nice!
		makeTabWindow($tabbedWindows);
	}
});

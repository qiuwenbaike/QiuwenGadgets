export const editToolbar = (): void => {
	const $element: JQuery = $('span.oo-ui-fieldLayout-header');
	if (mw.config.get('wgAction') === 'edit' && $element.length > 0) {
		$element.css('max-width', 'none'); // 在一行显示编辑摘要
	}
};

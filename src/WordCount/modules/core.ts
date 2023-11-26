const countByte = (text: string): number => {
	text = text.replace(/[\u0000-\u007F]/g, '.');
	text = text.replace(/[\u0080-\u07FF\uD800-\uDFFF]/g, '..');
	text = text.replace(/[\u0800-\uD7FF\uE000-\uFFFF]/g, '...');
	return text.length;
};

const countCJK = (text: string): number => {
	text = text.replace(/\./g, '');
	text = text.replace(
		/[\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3005\u3007\u3021-\u3029\u3038-\u303B\u3400-\u4DB5\u4E00-\u9FCC\uF900-\uFA6D\uFA70-\uFAD9]|[\uD840-\uD868][\uDC00-\uDFFF]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|[\uD86A-\uD86C][\uDC00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D]|\uD87E[\uDC00-\uDE1D]/g,
		'.'
	);
	text = text.replace(/[^.]/g, '');
	return text.length;
};

const getCountByTextLength = (text: string) => {
	return `${text.length} character(s) (${countCJK(text)} CJK)<br>${countByte(text)} byte(s) in UTF-8 encoding`;
};

export const wordCountCore = (): void => {
	const $body: JQuery<HTMLBodyElement> = $('body');

	$body.find('.wordcount').remove();
	const text: string = window.getSelection()?.toString() ?? '';
	if (!text) {
		return;
	}
	const $wordcount: JQuery = $('<div>')
		.addClass('wordcount ui-state-highlight ui-corner-all')
		.css({
			position: 'fixed',
			right: '0',
			bottom: '0',
			margin: '4px',
			padding: '6px',
		})
		.html(getCountByTextLength(text))
		.appendTo($('body'));
	setTimeout((): void => {
		$wordcount.fadeOut('slow');
	}, 5000);
};

export const wordCountLoad = (): void => {
	if (mw.config.get('wgAction') !== 'view') {
		return;
	}
	if ('ontouchstart' in document) {
		$(document).on('touchstart touchend', wordCountCore);
	} else {
		$(document).on('mouseup keyup', wordCountCore);
	}
};

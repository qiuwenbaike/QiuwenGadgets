import {CLASS_NAME} from './modules/constant';
import React from 'ext.gadget.React';
import {getBody} from 'ext.gadget.Util';
import {getMessage} from './modules/i18n';

const countCJK = (text: string): number => {
	text = text
		.replace(/\./g, '')
		.replace(
			/[\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3005\u3007\u3021-\u3029\u3038-\u303B\u3400-\u4DB5\u4E00-\u9FCC\uF900-\uFA6D\uFA70-\uFAD9]|[\uD840-\uD868][\uDC00-\uDFFF]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|[\uD86A-\uD86C][\uDC00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D]|\uD87E[\uDC00-\uDE1D]/g,
			'.'
		)
		.replace(/[^.]/g, '');
	return text.length;
};

const countByte = (text: string): number => {
	text = text
		.replace(/[\u0000-\u007F]/g, '.')
		.replace(/[\u0080-\u07FF\uD800-\uDFFF]/g, '..')
		.replace(/[\u0800-\uD7FF\uE000-\uFFFF]/g, '...');
	return text.length;
};

const getCountByTextLength = (text: string) =>
	`${text.length}${getMessage('character(s)')}${getMessage('(')}${countCJK(text)}${getMessage('CJK')}${getMessage(
		')'
	)}<br>${countByte(text)}${getMessage('byte(s) in UTF-8 encoding')}`;

const wordCountCore = ($body: JQuery<HTMLBodyElement>): void => {
	$body.find(`.${CLASS_NAME}`).remove();
	const text: string = window.getSelection()?.toString() ?? '';
	if (!text) {
		return;
	}

	const rootElement = () => (
		<div
			className={[CLASS_NAME, 'noprint ui-state-highlight ui-corner-all']}
			content={getCountByTextLength(text)}
		/>
	);

	$body.append(rootElement());

	setTimeout((): void => {
		$body.find(`.${CLASS_NAME}`).fadeOut('slow');
	}, 5000);
};

void getBody().then(function wordCount($body: JQuery<HTMLBodyElement>) {
	const wordCountLoad = (): void => {
		if (mw.config.get('wgAction') !== 'view') {
			return;
		}

		let events;
		if ('ontouchstart' in document) {
			events = 'touchstart touchend';
		} else {
			events = 'mouseup keyup';
		}

		$(document).on(events, () => {
			wordCountCore($body);
		});
	};

	$(wordCountLoad);
});

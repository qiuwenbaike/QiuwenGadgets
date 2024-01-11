import {CLASS_NAME} from './constant';
import React from 'ext.gadget.React';
import WordCount from '../components/WordCount';

const wordCount = ($body: JQuery<HTMLBodyElement>): void => {
	$body.find(`.${CLASS_NAME}`).remove();

	const text: string | undefined = window.getSelection()?.toString();
	if (!text) {
		return;
	}

	const $element = $(<WordCount text={text} />);

	$element.appendTo($body);

	setTimeout((): void => {
		$element.fadeOut('slow');
	}, 5 * 1000);
};

export {wordCount};

import {CLASS_NAME} from './constant';
import React from 'ext.gadget.React';
import WordCount from '../components/WordCount';

const wordCount = (): void => {
	for (const element of document.querySelectorAll(`.${CLASS_NAME}`)) {
		element.remove();
	}

	const text: string | undefined = window.getSelection()?.toString();
	if (!text) {
		return;
	}

	const wordCountElement = <WordCount text={text} />;

	document.body.append(wordCountElement);

	setTimeout((): void => {
		wordCountElement.style.display = 'none';
	}, 5 * 1000);
};

export {wordCount};

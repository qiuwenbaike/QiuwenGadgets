import {wordCount} from './wordCount';

const addListener = (): void => {
	let events: string[];

	if ('ontouchstart' in document) {
		events = ['touchstart', 'touchend'];
	} else {
		events = ['mouseup', 'keyup'];
	}

	for (const event of events) {
		document.body.addEventListener(event, (): void => {
			wordCount();
		});
	}
};

export {addListener};

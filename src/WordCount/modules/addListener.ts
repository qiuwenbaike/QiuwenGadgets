import {wordCount} from './wordCount';

const addListener = ($body: JQuery<HTMLBodyElement>): void => {
	let events: string;
	let data: {passive?: true} = {};
	if ('ontouchstart' in document) {
		events = 'touchstart touchend';
		data = {passive: true};
	} else {
		events = 'mouseup keyup';
	}

	$body.on(events, data, (): void => {
		wordCount($body);
	});
};

export {addListener};

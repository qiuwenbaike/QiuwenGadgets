import {wordCount} from './wordCount';

const addListener = ($body: JQuery<HTMLBodyElement>): void => {
	let events: string;
	let data: {passive?: true} | null = null;
	if ('ontouchstart' in document) {
		events = 'touchstart touchend';
		data = {passive: true};
	} else {
		events = 'mouseup keyup';
	}

	if (data === null) {
		$body.on(events, (): void => {
			wordCount($body);
		});
	} else {
		$body.on(events, data, (): void => {
			wordCount($body);
		});
	}
};

export {addListener};

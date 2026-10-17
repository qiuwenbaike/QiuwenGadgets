import {scrollDownButton, scrollUpButton} from './scrollButton';
import {tippy} from 'ext.gadget.Tippy';

const insertElementandListener = ($body: JQuery<HTMLBodyElement>): void => {
	const downButton = scrollDownButton();
	const upButton = scrollUpButton();

	for (const element of [downButton, upButton]) {
		$body.append(element);

		tippy(element, {
			arrow: true,
			content: element.getAttribute('alt') as string,
			placement: 'left',
		});
	}

	const scrollListener = (): void => {
		let downButtonButtom: string;
		let upButtonButtom: string;

		if (
			document.querySelector('#proveit') ||
			document.querySelector('.gadget-cat_a_lot-container') ||
			document.querySelector('#gadget-word_count-tip')
		) {
			downButtonButtom = '85px';
			upButtonButtom = '127px';
		} else {
			downButtonButtom = '45px';
			upButtonButtom = '85px';
		}

		downButton.style.bottom = downButtonButtom;
		upButton.style.bottom = upButtonButtom;
	};
	const scrollListenerWithThrottle: typeof scrollListener = mw.util.throttle(scrollListener, 200);

	$(window).on('scroll selectionchange', scrollListenerWithThrottle);
};

export {insertElementandListener};

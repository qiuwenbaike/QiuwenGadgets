import {ScrollDownButton, ScrollUpButton} from '../components/scrollButton';
import {changeOpacityWhenMouseEnterOrLeave} from 'ext.gadget.Util';
import {tippy} from 'ext.gadget.Tippy';

const insertElementandListener = ($body: JQuery<HTMLBodyElement>): void => {
	const onMouseEnterMouseLeave = (event: MouseEvent): void => {
		changeOpacityWhenMouseEnterOrLeave(event);
	};

	for (const element of [ScrollDownButton, ScrollUpButton] as HTMLElement[]) {
		for (const event of ['mouseenter', 'mouseleave'] as const) {
			element.addEventListener(event, onMouseEnterMouseLeave);
		}

		$body.append(element);

		tippy(element, {
			arrow: true,
			content: element.getAttribute('alt') as string,
			placement: 'left',
		});
	}

	const scrollListener = (): void => {
		let downButtonButtom, upButtonButtom;
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

		ScrollDownButton.style.bottom = downButtonButtom;
		ScrollUpButton.style.bottom = upButtonButtom;
	};
	const scrollListenerWithThrottle: typeof scrollListener = mw.util.throttle(scrollListener, 200);

	$(window).on('scroll selectionchange', scrollListenerWithThrottle);
};

export {insertElementandListener};

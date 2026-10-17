import {changeOpacityWhenMouseEnterOrLeave} from 'ext.gadget.Util';
import {reportButton} from './reportButton';
import {tippy} from 'ext.gadget.Tippy';

const addButton = ($body: JQuery<HTMLBodyElement>, URL: string): void => {
	const {wgNamespaceNumber} = mw.config.get();
	if (wgNamespaceNumber < 0) {
		return;
	}

	const onMouseEnterMouseLeave = (event: MouseEvent): void => {
		changeOpacityWhenMouseEnterOrLeave(event);
	};

	const button = reportButton(URL, onMouseEnterMouseLeave);

	tippy(button, {
		arrow: true,
		content: button.getAttribute('alt') as string,
		placement: 'left',
	});

	$body.append(button);

	const scrollListener = (): void => {
		let buttonBottom: string;

		if (
			document.querySelector('#proveit') ||
			document.querySelector('.gadget-cat_a_lot-container') ||
			document.querySelector('#gadget-word_count-tip')
		) {
			buttonBottom = '253px';
		} else {
			buttonBottom = '211px';
		}

		button.style.bottom = buttonBottom;
	};
	const scrollListenerWithThrottle: typeof scrollListener = mw.util.throttle(scrollListener, 200);

	$(window).on('scroll selectionchange', scrollListenerWithThrottle);
};

export {addButton};

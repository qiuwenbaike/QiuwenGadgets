import * as OPTIONS from '../../options.json';
import {CLASS_NAME, CLASS_NAME_ICON, CLASS_NAME_TEXT} from '../constant';
import React, {ReactElement} from 'ext.gadget.React';
import {getMessage} from '../i18n';

const elementWrap = (spanClass: 'green' | 'orange', innerElement: ReactElement) => {
	const {skin} = mw.config.get();
	const classNames = [CLASS_NAME, `${CLASS_NAME}-${spanClass}`];

	if (skin === 'citizen') {
		return <section className={classNames}>{innerElement}</section>;
	} else if (['vector', 'vector-2022', 'gongbi'].includes(skin) || document.querySelector('ul#footer-info')) {
		return <li className={classNames}>{innerElement}</li>;
	}
	return <div className={classNames}>{innerElement}</div>;
};

const indicator = (icon: 'globe' | 'helpNotice', indicatorText: string) => {
	const ipLocationDesc: string = getMessage('Location') + getMessage(':');
	const text: string = icon === 'globe' ? ipLocationDesc + indicatorText : indicatorText ?? '';

	return (
		<>
			<span className={[CLASS_NAME_ICON, `${CLASS_NAME_ICON}-${icon}`]} aria-label={text}></span>
			<span className={CLASS_NAME_TEXT}>{text}</span>
		</>
	);
};

const appendIcon = ({
	icon,
	indicatorText,
	spanClass,
}: {
	icon: 'globe' | 'helpNotice';
	indicatorText: string;
	spanClass: 'green' | 'orange';
}): void => {
	if (!spanClass || !icon) {
		return;
	}
	const tag = elementWrap(spanClass, indicator(icon, indicatorText));
	document.querySelectorAll<HTMLElement>(OPTIONS.mountPointSelector)[0]?.prepend(tag);
};

export {appendIcon};

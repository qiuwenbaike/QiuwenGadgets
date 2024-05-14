import * as OPTIONS from '../options.json';
import React, {ReactElement} from 'ext.gadget.React';
import type {UserRights} from '~/MarkRights/modules/types';

const elementWrap = (spanClass: UserRights, innerElement: ReactElement) => {
	const {skin} = mw.config.get();
	const classNames = ['gadget-markrights_userpage', `gadget-markrights_userpage__${spanClass}`];

	if (skin === 'citizen') {
		return <section className={classNames}>{innerElement}</section>;
	} else if (['vector', 'vector-2022', 'gongbi'].includes(skin) || document.querySelector('ul#footer-info')) {
		return <li className={classNames}>{innerElement}</li>;
	}
	return <div className={classNames}>{innerElement}</div>;
};

const indicator = (indicatorText: string | undefined, spanClass: UserRights | 'unknown') => (
	<>
		<span
			className={['gadget-markrights_userpage__icon', `gadget-markrights_userpage__icon__${spanClass}`]}
			title={indicatorText}
		/>
		<span className="gadget-markrights_userpage__text">{indicatorText}</span>
	</>
);

const appendIcon = (indicatorText: string | undefined, spanClass: UserRights | 'unknown'): void => {
	if (spanClass === 'unknown' || !indicatorText) {
		return;
	}
	const tag = elementWrap(spanClass, indicator(indicatorText, spanClass));
	document.querySelectorAll<HTMLElement>(OPTIONS.mountPointSelector)[0]?.prepend(tag);
};

export {appendIcon};

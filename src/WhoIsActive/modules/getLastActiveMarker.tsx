import React, {ReactElement} from 'ext.gadget.React';
import {WG_SKIN} from './constant';
import {getMessage} from './i18n';

type timeSpan = 'ThisWeek' | 'ThisMonth' | 'ThisYear' | 'OverAYear';

const elementWrap = (timespan: timeSpan, innerElement: ReactElement) => {
	const className = ['gadget-whoisactive__span', `gadget-whoisactive__${timespan}`];

	if (WG_SKIN === 'citizen') {
		return <section className={className}>{innerElement}</section>;
	} else if (['vector', 'vector-2022', 'gongbi'].includes(WG_SKIN) || document.querySelector('ul#footer-info')) {
		return <li className={className}>{innerElement}</li>;
	}
	return <div className={className}>{innerElement}</div>;
};

const tagInner = (timespan: timeSpan, indicator: boolean) => {
	const iconClassName = ['gadget-whoisactive__icon', `gadget-whoisactive__icon__${timespan}`];
	const textClassName = ['gadget-whoisactive__text', indicator === true ? ', gadget-whoisactive__notext' : ''];

	return (
		<>
			<span className={iconClassName} title={getMessage(timespan)} />
			<span className={textClassName}>{getMessage(timespan) ?? ''}</span>
		</>
	);
};

const getLastActiveMarker = (timestamp: string, indicator: boolean) => {
	const date: number = Date.parse(timestamp);
	const now: number = Date.now();
	const diff: number = Math.floor((now - date) / (1000 * 60 * 60 * 24));
	let timespan: timeSpan;
	if (diff > 365) {
		timespan = 'OverAYear';
	} else if (diff > 30) {
		timespan = 'ThisYear';
	} else if (diff > 7) {
		timespan = 'ThisMonth';
	} else {
		timespan = 'ThisWeek';
	}

	return elementWrap(timespan, tagInner(timespan, indicator));
};

export {getLastActiveMarker};

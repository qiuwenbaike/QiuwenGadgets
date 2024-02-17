import React, {ReactElement} from 'ext.gadget.React';
import {WG_SKIN} from './constant';

const elementWrap = (id: string, innerElement: ReactElement) => {
	if (WG_SKIN === 'citizen') {
		return (
			<section className={'page-info__item'} id={id}>
				{innerElement}
			</section>
		);
	} else if (['vector', 'vector-2022', 'gongbi'].includes(WG_SKIN) || document.querySelector('ul#footer-info')) {
		return <li id={id}>{innerElement}</li>;
	}
	return <div id={id}>{innerElement}</div>;
};

export {elementWrap};

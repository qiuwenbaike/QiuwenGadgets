import React from 'ext.gadget.React';
import {WG_SKIN} from './constant';

const elementWrap = (id: string) => {
	if (WG_SKIN === 'citizen') {
		return <section className={'page-info__item'} id={id} />;
	} else if (['vector', 'vector-2022', 'gongbi'].includes(WG_SKIN) || document.querySelector('ul#footer-info')) {
		return <li id={id} />;
	}
	return <div id={id} />;
};

export {elementWrap};

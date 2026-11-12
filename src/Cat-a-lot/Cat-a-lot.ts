import './Cat-a-lot.less';
import {catALot} from './modules/core';
import {extendJQueryPrototype} from './modules/extendJQueryPrototype';
import {getBody} from 'ext.gadget.Util';
import {setMessages} from './modules/messages';

void getBody().then(($body: JQuery<HTMLBodyElement>): void => {
	/*! jQuery checkboxShiftClick | CC-BY-SA-4.0 <https://qwbk.cc/H:CC-BY-SA-4.0> */
	extendJQueryPrototype();

	/*! Cat-a-lot messages | CC-BY-SA-4.0 <https://qwbk.cc/H:CC-BY-SA-4.0> */
	setMessages();

	/*! Cat-a-lot | CC-BY-SA-4.0 <https://qwbk.cc/H:CC-BY-SA-4.0> */
	void catALot($body);
});

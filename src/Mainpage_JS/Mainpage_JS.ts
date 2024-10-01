import {getBody} from 'ext.gadget.Util';
import {newLinkUnwrap} from './modules/newLinkUnwrap';

void getBody().then(($body: JQuery<HTMLBodyElement>): void => {
	const {wgIsMainPage, wgAction} = mw.config.get();

	if (wgAction !== 'view' || !wgIsMainPage) {
		return;
	}

	newLinkUnwrap($body);
});

import {addButton} from './modules/addButton';
import {addPortletLink} from './modules/addPortletLink';
import {fillSpecialPage} from './modules/fillSpecialPage';
import {getBody} from 'ext.gadget.Util';
import {getURL} from './modules/getURL';

void getBody().then(function report($body: JQuery<HTMLBodyElement>): void {
	const URL: string = getURL();
	addButton($body, URL);
	addPortletLink(URL);
	fillSpecialPage($body);
});

import {addButton} from './modules/addButton';
import {addPortletLink} from './modules/addPortletLink';
import {fillSpecialPage} from './modules/fillSpecialPage';
import {getBody} from 'ext.gadget.Util';

void getBody().then(function report($body: JQuery<HTMLBodyElement>): void {
	addButton($body);
	addPortletLink();
	fillSpecialPage($body);
});

import {CLASS_NAME, WG_CUR_REVISION_ID, WG_REVISION_ID} from './modules/constant';
import {getBody} from '~/util';

void getBody().then(function historyDisclaimer($body: JQuery<HTMLBodyElement>): void {
	if (!WG_CUR_REVISION_ID || !WG_REVISION_ID || WG_CUR_REVISION_ID <= WG_REVISION_ID) {
		return;
	}

	if ($body.find(`.${CLASS_NAME}`).length) {
		return;
	}

	// The following classes are used here:
	// * see constant.ts
	// * for more information
	$('<div>').addClass(CLASS_NAME).appendTo($body);
});

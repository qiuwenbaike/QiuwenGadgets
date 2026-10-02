import {getBody} from 'ext.gadget.Util';
import {installPrintOptions} from './modules/installPrintOptions';

void getBody().then(function printOptionsLoad($body) {
	if (mw.config.get('wgNamespaceNumber') < 0) {
		return;
	}
	// This can be before the click listener by MW is installed. Instead,
	// re-add ourselves to the back of the document.ready list
	// use an asynchronous timeout to do this.
	setTimeout(() => installPrintOptions($body), 0);
});

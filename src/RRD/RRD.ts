import {getBody} from 'ext.gadget.Util';
import {reportButton} from './modules/reportButton';
import {showDialog} from './modules/showDialog';

void getBody().then(function rrd($body: JQuery<HTMLBodyElement>): void {
	const {wgAction, wgCanonicalSpecialPageName} = mw.config.get();

	if (wgAction === 'history' || wgCanonicalSpecialPageName === 'Log') {
		for (const element of $body.find(
			[
				'.historysubmit.mw-history-compareselectedversions-button',
				'.editchangetags-log-submit.mw-log-editchangetags-button',
			].join(',')
		)) {
			const appendElement = reportButton.cloneNode(true) as HTMLButtonElement;
			element.after(appendElement);
			appendElement.addEventListener('click', () => {
				showDialog($body);
			});
		}
	}
});

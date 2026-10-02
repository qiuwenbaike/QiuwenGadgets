import ReportButton from './modules/ReportButton.vue';
import {createApp} from 'vue';
import {getBody} from 'ext.gadget.Util';
import {showDialog} from './modules/showDialog';

void getBody().then(function rrd($body: JQuery<HTMLBodyElement>): void {
	const {wgAction, wgCanonicalSpecialPageName} = mw.config.get();

	if (wgAction === 'history' || wgCanonicalSpecialPageName === 'Log') {
		const CLASS_NAMES = [
			'.historysubmit.mw-history-compareselectedversions-button',
			'.editchangetags-log-submit.mw-log-editchangetags-button',
		];
		const button = (onClick: () => void): HTMLSpanElement => {
			const root = document.createElement('span');
			createApp(ReportButton, {onClick}).mount(root);
			return root;
		};

		for (const element of $body.find(CLASS_NAMES.join(','))) {
			const appendElement = button(() => showDialog($body));
			element.after(appendElement);
		}
	}
});

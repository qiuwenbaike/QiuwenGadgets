import {IS_WG_HISTORY_ACTION, IS_WG_LOG_NS} from './modules/constant';
import ReportButton from './components/ReportButton';
import {getBody} from 'ext.gadget.Util';
import {showDialog} from './modules/showDialog';

if (IS_WG_HISTORY_ACTION || IS_WG_LOG_NS) {
	void getBody().then(function rrd($body: JQuery<HTMLBodyElement>): void {
		// For action=history and Special:Log
		for (const element of $body.find(
			[
				'.historysubmit.mw-history-compareselectedversions-button',
				'.editchangetags-log-submit.mw-log-editchangetags-button',
			].join(',')
		)) {
			element.after(
				ReportButton({
					onClick: (): void => {
						showDialog($body);
					},
				})
			);
		}
	});
}

import {$body} from '../util';

const historyDisclaimer = (): void => {
	if (
		(mw.config.get('wgCurRevisionId') || -1) > 0 &&
		(mw.config.get('wgRevisionId') || -1) > 0 &&
		(mw.config.get('wgCurRevisionId') || -1) > (mw.config.get('wgRevisionId') || -1) &&
		!$body.find('#historyDisclaimer').length
	) {
		$('<div>').attr('id', 'historyDisclaimer').appendTo($body);
	}
};

$(historyDisclaimer);

import {getMessage} from './i18n';

const fillSpecialPage = ($body: JQuery<HTMLBodyElement>): void => {
	const $wpSubjectElement: JQuery<HTMLInputElement> = $body.find<HTMLInputElement>('input[name="wpSubject"]');
	if (!$wpSubjectElement.length) {
		return;
	}

	const isBodyHasClass: boolean =
		$body.hasClass('page-Special_联系_Report') || $body.hasClass('page-Special_联系_report');
	if (!isBodyHasClass) {
		return;
	}

	const $wpTitleElement: JQuery<HTMLInputElement> = $body.find<HTMLInputElement>('input[name="wpTitle"]');

	const {wgSiteName} = mw.config.get();
	const linkTitle: string = getMessage('Report Title').replace('$1', wgSiteName);
	const reportRevision: string = mw.util.getParamValue('reportrevision') || '0';
	let reportTitle: string = mw.util.getParamValue('reporttitle') || '';
	if (reportRevision !== '0') {
		reportTitle += getMessage('(') + getMessage('Revision') + reportRevision + getMessage(')');
	}

	if (reportTitle) {
		$wpSubjectElement.val(linkTitle + getMessage(':') + reportTitle);
		$wpTitleElement.val(reportTitle);
	} else {
		$wpSubjectElement.val(linkTitle);
	}
};

export {fillSpecialPage};

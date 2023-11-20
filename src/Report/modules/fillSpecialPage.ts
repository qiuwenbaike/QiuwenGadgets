import {getMessage} from './i18n';

const fillSpecialPage = (): void => {
	const $body = $('body');

	const $wpSubjectElement = $body.find('[name="wpSubject"]');
	if (!$wpSubjectElement.length) {
		return;
	}

	const $wpTitleElement = $body.find('[name="wpTitle"]');

	const linkTilte: string = getMessage('Report');
	const reportRevision = mw.util.getParamValue('report_revision') || null;
	let reportTitle: string = mw.util.getParamValue('report_title') || '';
	if (reportRevision && reportRevision !== '0') {
		reportTitle += `${getMessage('(')}${getMessage('Revision')}${reportRevision}${getMessage(')')}`;
	}

	if ($body.hasClass('page-Special_联系_Report') && !!reportTitle) {
		$wpSubjectElement.val(`${linkTilte}${getMessage(':')}${reportTitle}`);
		$wpTitleElement.val(reportTitle);
	} else {
		$wpSubjectElement.val(linkTilte);
	}
};

export {fillSpecialPage};

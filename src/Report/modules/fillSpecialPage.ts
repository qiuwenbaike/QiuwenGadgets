import {getMessage} from './i18n';

const fillSpecialPage = (): void => {
	const $body: JQuery<HTMLBodyElement> = $('body');

	const $wpSubjectElement: JQuery<HTMLInputElement> = $body.find<HTMLInputElement>('input[name="wpSubject"]');
	if (!$wpSubjectElement.length) {
		return;
	}

	const $wpTitleElement: JQuery<HTMLInputElement> = $body.find<HTMLInputElement>('input[name="wpTitle"]');

	const linkTilte: string = getMessage('Report');
	const reportRevision: string = mw.util.getParamValue('report_revision') ?? '';
	let reportTitle: string = mw.util.getParamValue('report_title') || '';
	if (reportRevision !== '0') {
		reportTitle += `${getMessage('(')}${getMessage('Revision')}${reportRevision}${getMessage(')')}`;
	}

	if ($('body').hasClass('page-Special_联系_Report') && !!reportTitle) {
		$wpSubjectElement.val(`${linkTilte}${getMessage(':')}${reportTitle}`);
		$wpTitleElement.val(reportTitle);
	} else {
		$wpSubjectElement.val(linkTilte);
	}
};

export {fillSpecialPage};

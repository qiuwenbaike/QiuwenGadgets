import {getMessage} from './i18n';

const fillSpecialPage = (): void => {
	const wpSubjectElement: HTMLInputElement | null = document.querySelector('[name="wpSubject"]');
	if (!wpSubjectElement) {
		return;
	}

	const wpTitleElement: HTMLInputElement | null = document.querySelector('[name="wpTitle"]');

	const linkTilte: string = getMessage('Report');
	const reportTitle: string =
		(mw.util.getParamValue('report_title') ?? '') +
		(mw.util.getParamValue('report_revision')
			? `${getMessage('(')}${getMessage('Revision')}${mw.util.getParamValue('report_revision')}${getMessage(')')}`
			: '');

	if (
		(document.querySelector('body') as HTMLBodyElement).classList.contains('page-Special_联系_Report') &&
		!!reportTitle
	) {
		wpSubjectElement.value = `${linkTilte}${getMessage(':')}${reportTitle}`;
		(wpTitleElement as NonNullable<typeof wpTitleElement>).value = reportTitle;
	} else {
		wpSubjectElement.value = linkTilte;
	}
};

export {fillSpecialPage};

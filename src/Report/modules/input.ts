import {LINK_TITLE} from './constant';

const REPORT_TITLE =
	(mw.util.getParamValue('report_title') ?? '') +
	(mw.util.getParamValue('report_revision') ? `（版本${mw.util.getParamValue('report_revision')}）` : '');

if (
	['Special:Contact/report', 'Special:Contact/Report', 'Special:联系/report', 'Special:联系/Report'].includes(
		mw.config.get('wgPageName')
	) &&
	!!REPORT_TITLE
) {
	Array.prototype.forEach.call(document.getElementsByName('wpSubject'), (e) => {
		e.value = `${LINK_TITLE}：${REPORT_TITLE}`;
	});
	Array.prototype.forEach.call(document.getElementsByName('wpTitle'), (e) => {
		e.value = REPORT_TITLE;
	});
} else {
	Array.prototype.forEach.call(document.getElementsByName('wpSubject'), (e) => {
		e.value = LINK_TITLE;
	});
}

/* eslint-disable camelcase */
const CLASS_REPORT_BUTTON = 'gadget-report__button';

const URL: string = mw.util.getUrl('Special:Contact/Report', {
	report_title: mw.config.get('wgPageName'),
	report_revision: (mw.config.get('wgRevisionId') || mw.config.get('wgCurRevisionId')).toString(),
});

export {CLASS_REPORT_BUTTON, URL};

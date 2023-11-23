/* eslint-disable camelcase */
const CLASS_NAME = 'gadget-report';
const CLASS_NAME_BUTTON = `${CLASS_NAME}-button`;

const URL: string = mw.util.getUrl('Special:Contact/Report', {
	report_title: mw.config.get('wgPageName'),
	report_revision: (mw.config.get('wgRevisionId') || mw.config.get('wgCurRevisionId')).toString(),
});

export {CLASS_NAME_BUTTON, URL};

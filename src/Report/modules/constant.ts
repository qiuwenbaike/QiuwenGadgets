/* eslint-disable camelcase */
const CLASS_NAME: string = 'gadget-report';
const CLASS_NAME_BUTTON: string = `${CLASS_NAME}-button`;

const URL: string = mw.util.getUrl('Special:Contact/Report', {
	report_title: mw.config.get('wgPageName'),
	report_revision: (mw.config.get('wgRevisionId') || mw.config.get('wgCurRevisionId')).toString(),
});

const WG_NAMESPACE_NUMBER: number = mw.config.get('wgNamespaceNumber');

export {CLASS_NAME_BUTTON, URL, WG_NAMESPACE_NUMBER};

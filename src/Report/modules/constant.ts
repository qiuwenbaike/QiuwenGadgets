/* eslint-disable camelcase */
const CLASS_NAME: string = 'gadget-report';
const CLASS_NAME_BUTTON: string = `${CLASS_NAME}-button`;

const {wgCurRevisionId, wgNamespaceNumber, wgPageName, wgRevisionId} = mw.config.get();

const URL: string = mw.util.getUrl('Special:Contact/Report', {
	report_title: wgPageName,
	report_revision: (wgRevisionId || wgCurRevisionId).toString(),
});

const WG_NAMESPACE_NUMBER: number = wgNamespaceNumber;

export {CLASS_NAME_BUTTON, URL, WG_NAMESPACE_NUMBER};

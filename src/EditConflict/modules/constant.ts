const WG_ACTION: MediaWikiConfigMapWgAction = mw.config.get('wgAction');
const WG_CUR_REVISION_ID: number = mw.config.get('wgCurRevisionId');
const WG_PAGE_NAME: string = mw.config.get('wgPageName');
const WG_WIKI_ID: string = mw.config.get('wgWikiID');

const IS_WG_EDIT_OR_SUBMIT_ACTION: boolean = ['edit', 'submit'].includes(WG_ACTION);

export {WG_CUR_REVISION_ID, WG_PAGE_NAME, WG_WIKI_ID, IS_WG_EDIT_OR_SUBMIT_ACTION};

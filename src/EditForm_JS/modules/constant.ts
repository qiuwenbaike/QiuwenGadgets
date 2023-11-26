const WG_ACTION: MediaWikiConfigMapWgAction = mw.config.get('wgAction');
const WG_PAGE_NAME: string = mw.config.get('wgPageName');
const WG_USER_GROUPS: string[] | null = mw.config.get('wgUserGroups');

const IS_WG_EDIT_OR_SUBMIT_ACTION: boolean = ['edit', 'submit'].includes(WG_ACTION);

export {WG_PAGE_NAME, WG_USER_GROUPS, IS_WG_EDIT_OR_SUBMIT_ACTION};

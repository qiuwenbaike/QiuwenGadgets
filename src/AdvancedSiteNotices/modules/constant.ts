const AJAX_PAGE_TITLE = 'Template:AdvancedSiteNotices/ajax';
const STORAGE_KEY = 'ext.gadget.AdvancedSiteNotices_dismissASN';

const WG_ACTION: string = mw.config.get('wgAction');
const WG_USER_GROUPS: string[] | null = mw.config.get('wgUserGroups');
const WG_USER_LANGUAGE: string = mw.config.get('wgUserLanguage');
const WG_WIKI_ID: string = mw.config.get('wgWikiID');

export {AJAX_PAGE_TITLE, STORAGE_KEY, WG_ACTION, WG_USER_GROUPS, WG_USER_LANGUAGE, WG_WIKI_ID};

const AJAX_PAGE_TITLE = 'Template:AdvancedSiteNotices/ajax';
const CLASS_NOTICES_AREA = 'gadget-advanced_site_notices__area';
const CLASS_NOTICES_DISMISS = 'gadget-advanced_site_notices__dismiss';
const CLASS_NOTICES_NOTICE = 'gadget-advanced_site_notices__notice';
const CLASS_NOTICES_NOTICE_AREA = 'gadget-advanced_site_notices__notice__area';
const CLASS_NOTICES_TITLE = 'gadget-advanced_site_notices__title';
const STORAGE_KEY = 'ext.gadget.AdvancedSiteNotices_dismissASN';

const WG_ACTION: string = mw.config.get('wgAction');
const WG_USER_GROUPS: string[] | null = mw.config.get('wgUserGroups');
const WG_USER_LANGUAGE: string = mw.config.get('wgUserLanguage');
const WG_WIKI_ID: string = mw.config.get('wgWikiID');

export {
	AJAX_PAGE_TITLE,
	CLASS_NOTICES_AREA,
	CLASS_NOTICES_DISMISS,
	CLASS_NOTICES_NOTICE,
	CLASS_NOTICES_NOTICE_AREA,
	CLASS_NOTICES_TITLE,
	STORAGE_KEY,
	WG_ACTION,
	WG_USER_GROUPS,
	WG_USER_LANGUAGE,
	WG_WIKI_ID,
};

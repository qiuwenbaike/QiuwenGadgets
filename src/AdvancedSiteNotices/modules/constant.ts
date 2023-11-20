const CLASS_NOTICES = 'gadget-advanced_site_notices';
const CLASS_NOTICES_AREA = `${CLASS_NOTICES}__area`;
const CLASS_NOTICES_DISMISS = `${CLASS_NOTICES}__dismiss`;
const CLASS_NOTICES_NOTICE = `${CLASS_NOTICES}__notice`;
const CLASS_NOTICES_NOTICE_AREA = `${CLASS_NOTICES_NOTICE}__area`;
const CLASS_NOTICES_TITLE = `${CLASS_NOTICES}__title`;

const STORAGE_KEY = 'ext.gadget.AdvancedSiteNotices_dismissASN';

const WG_ACTION: string = mw.config.get('wgAction');
const WG_USER_GROUPS: string[] | null = mw.config.get('wgUserGroups');
const WG_USER_LANGUAGE: string = mw.config.get('wgUserLanguage');
const WG_WIKI_ID: string = mw.config.get('wgWikiID');

export {
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

const CLASS_NAME = 'gadget-advanced_site_notices';
const CLASS_NAME_DISMISS = `${CLASS_NAME}__dismiss`;
const CLASS_NAME_NOTICE = `${CLASS_NAME}__notice`;
const CLASS_NAME_NOTICE_CONTENT = `${CLASS_NAME_NOTICE}__content`;
const CLASS_NAME_TITLE = `${CLASS_NAME}__title`;

const STORAGE_KEY = 'ext.gadget.AdvancedSiteNotices_dismissASN';

const WG_USER_GROUPS: string[] | null = mw.config.get('wgUserGroups');
const WG_USER_LANGUAGE: string = mw.config.get('wgUserLanguage');
const WG_WIKI_ID: string = mw.config.get('wgWikiID');

export {
	CLASS_NAME,
	CLASS_NAME_DISMISS,
	CLASS_NAME_NOTICE,
	CLASS_NAME_NOTICE_CONTENT,
	CLASS_NAME_TITLE,
	STORAGE_KEY,
	WG_USER_GROUPS,
	WG_USER_LANGUAGE,
	WG_WIKI_ID,
};

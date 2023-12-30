const WG_USER_GROUPS: string[] = mw.config.get('wgUserGroups') ?? [];
const WG_USER_LANGUAGE: string = mw.config.get('wgUserLanguage');
const WG_WIKI_ID: string = mw.config.get('wgWikiID');

export {WG_USER_GROUPS, WG_USER_LANGUAGE, WG_WIKI_ID};

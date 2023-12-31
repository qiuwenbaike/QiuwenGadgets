const WG_NAMESPACE_NUMBER: number = mw.config.get('wgNamespaceNumber');
const WG_PAGE_NAME: string = mw.config.get('wgPageName');
const WG_WIKI_ID: string = mw.config.get('wgWikiID');

const IS_CATEGORY = WG_NAMESPACE_NUMBER === 14;

export {IS_CATEGORY, WG_NAMESPACE_NUMBER, WG_PAGE_NAME, WG_WIKI_ID};

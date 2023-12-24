const WG_ACTION: MediaWikiConfigMapWgAction = mw.config.get('wgAction');
const WG_IS_NAIN_PAGE: true | null = mw.config.get('wgIsMainPage');

export {WG_ACTION, WG_IS_NAIN_PAGE};

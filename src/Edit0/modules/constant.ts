const WG_ACTION: MediaWikiConfigMapWgAction = mw.config.get('wgAction');
const WG_NAMESPACE_NUMBER: number = mw.config.get('wgNamespaceNumber');

export {WG_ACTION, WG_NAMESPACE_NUMBER};

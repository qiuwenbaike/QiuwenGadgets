const WG_PAGE_NAME: string = mw.config.get('wgPageName');

const IS_WG_HISTORY_ACTION: boolean = mw.config.get('wgAction') === 'history';
const IS_WG_LOG_NS: boolean = mw.config.get('wgCanonicalSpecialPageName') === 'Log';

export {IS_WG_HISTORY_ACTION, IS_WG_LOG_NS, WG_PAGE_NAME};

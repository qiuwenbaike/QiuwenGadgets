const WG_ACTION: MediaWikiConfigMapWgAction = mw.config.get('wgAction');

const IS_WG_EDIT_OR_SUBMIT_ACTION: boolean = ['edit', 'submit'].includes(WG_ACTION);

const NS_WITHOUT_SUBPAGES: number[] = [-1, 0, 14];

const NS_WITH_LOG: number[] = [-1, 2, 3];

export {IS_WG_EDIT_OR_SUBMIT_ACTION, NS_WITHOUT_SUBPAGES, NS_WITH_LOG};

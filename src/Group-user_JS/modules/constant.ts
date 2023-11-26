const WG_ACTION: MediaWikiConfigMapWgAction = mw.config.get('wgAction');

const IS_WG_EDIT_OR_SUBMIT_ACTION: boolean = ['edit', 'submit'].includes(WG_ACTION);

export {IS_WG_EDIT_OR_SUBMIT_ACTION};

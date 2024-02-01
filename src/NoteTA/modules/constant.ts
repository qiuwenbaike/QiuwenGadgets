const WG_PAGE_NAME: string = mw.config.get('wgPageName');
const WG_SKIN: string = mw.config.get('skin');
const WG_USER_VARIANT: string | null = mw.config.get('wgUserVariant');

const IS_VECTOR: boolean = ['vector', 'vector-2022'].includes(WG_SKIN);
const PORTLET_ID: string = 'p-noteTA';

export {IS_VECTOR, PORTLET_ID, WG_PAGE_NAME, WG_SKIN, WG_USER_VARIANT};

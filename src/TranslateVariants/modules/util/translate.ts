import {localize} from 'ext.gadget.i18n';

const translate = (simplified: string, traditional: string, en?: string): string =>
	localize({en: en ?? simplified, 'zh-hans': simplified ?? traditional, 'zh-hant': traditional ?? simplified});

export {translate};

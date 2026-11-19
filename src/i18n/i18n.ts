/**
 * i18n 小工具入口。
 *
 * 使用说明见 {@link ../../docs/how-to-use-i18n.md}。
 */
import type {I18nMethods, I18nShimMethods} from './modules/types';
import {initI18nMethods} from './modules/initI18nMethods';
import {initShims} from './modules/initShims';

const i18nMethods: I18nMethods = initI18nMethods();
const i18nShimMethods: I18nShimMethods = initShims(i18nMethods);

export const {content, localize, vary, wgUCS, wgULS, wgUVS} = {...i18nMethods, ...i18nShimMethods};

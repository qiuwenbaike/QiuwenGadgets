/**
 * SPDX-License-Identifier: GPL-3.0-or-later
 * _addText: '{{Gadget Header|license=GPL-3.0-or-later}}'
 *
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/i18n}
 * @author 安忆 <i@anyi.in>
 * @license GPL-3.0-or-later {@link https://www.qiuwenbaike.cn/wiki/H:GPL-3.0}
 */
/**
 * +------------------------------------------------------------+
 * |            === WARNING: GLOBAL GADGET FILE ===             |
 * +------------------------------------------------------------+
 * |       All changes should be made in the repository,        |
 * |                otherwise they will be lost.                |
 * +------------------------------------------------------------+
 * |        Changes to this page may affect many users.         |
 * | Please discuss changes by opening an issue before editing. |
 * +------------------------------------------------------------+
 */
/* <nowiki> */

(() => {

"use strict";

// dist/i18n/i18n.js
function _createForOfIteratorHelper(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it)
        o = it;
      var i = 0;
      var F = function() {
      };
      return { s: F, n: function() {
        if (i >= o.length)
          return { done: true };
        return { done: false, value: o[i++] };
      }, e: function(e) {
        throw e;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var normalCompletion = true, didErr = false, err;
  return { s: function() {
    it = it.call(o);
  }, n: function() {
    var step = it.next();
    normalCompletion = step.done;
    return step;
  }, e: function(e) {
    didErr = true;
    err = e;
  }, f: function() {
    try {
      if (!normalCompletion && it.return != null)
        it.return();
    } finally {
      if (didErr)
        throw err;
    }
  } };
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, {
      get: all[name],
      enumerable: true
    });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    var _iterator = _createForOfIteratorHelper(__getOwnPropNames(from)), _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done; ) {
        let key = _step.value;
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, {
            get: () => from[key],
            enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
          });
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", {
  value: true
}), mod);
//! src/i18n/i18n.ts
var i18n_exports = {};
__export(i18n_exports, {
  content: () => content,
  localize: () => localize,
  vary: () => vary
});
module.exports = __toCommonJS(i18n_exports);
//! src/i18n/options.json
var defaultLanguageCode = "en";
var fallbackTable = {
  zh: ["zh", "zh-hans", "zh-hant", "zh-cn", "zh-tw", "zh-hk", "zh-sg", "zh-mo", "zh-my"],
  "zh-hans": ["zh-hans", "zh-cn", "zh-sg", "zh-my", "zh", "zh-hant", "zh-tw", "zh-hk", "zh-mo"],
  "zh-hant": ["zh-hant", "zh-tw", "zh-hk", "zh-mo", "zh", "zh-hans", "zh-cn", "zh-sg", "zh-my"],
  "zh-cn": ["zh-cn", "zh-hans", "zh-sg", "zh-my", "zh", "zh-hant", "zh-tw", "zh-hk", "zh-mo"],
  "zh-sg": ["zh-sg", "zh-hans", "zh-cn", "zh-my", "zh", "zh-hant", "zh-tw", "zh-hk", "zh-mo"],
  "zh-my": ["zh-my", "zh-hans", "zh-cn", "zh-sg", "zh", "zh-hant", "zh-tw", "zh-hk", "zh-mo"],
  "zh-tw": ["zh-tw", "zh-hant", "zh-hk", "zh-mo", "zh", "zh-hans", "zh-cn", "zh-sg", "zh-my"],
  "zh-hk": ["zh-hk", "zh-hant", "zh-mo", "zh-tw", "zh", "zh-hans", "zh-cn", "zh-sg", "zh-my"],
  "zh-mo": ["zh-mo", "zh-hant", "zh-hk", "zh-tw", "zh", "zh-hans", "zh-cn", "zh-sg", "zh-my"]
};
//! src/i18n/modules/constant.ts
var WG_CONTENT_LANGUAGE = mw.config.get("wgContentLanguage");
var WG_USER_LANGUAGE = mw.config.get("wgUserLanguage");
var WG_USER_VARIANT = mw.config.get("wgUserVariant");
//! src/i18n/modules/util/generateLanguageCodeSplitArray.ts
var generateLanguageCodeSplitArray = (originLanguageCode) => {
  const languageCodeSplitArray = originLanguageCode.split("-").map((value) => {
    return value.toLowerCase();
  });
  return languageCodeSplitArray;
};
//! src/i18n/modules/util/generateDefaultFallbackList.ts
var import_ext_gadget = require("ext.gadget.Util");
var generateDefaultFallbackList = () => {
  const documentLanguageSplitArray = generateLanguageCodeSplitArray(document.documentElement.lang);
  const navigatorLanguageSplitArray = generateLanguageCodeSplitArray(navigator.language);
  let languageCode = defaultLanguageCode;
  for (var _i = 0, _arr = [documentLanguageSplitArray, navigatorLanguageSplitArray]; _i < _arr.length; _i++) {
    const languageCodeSplitArray = _arr[_i];
    switch (languageCodeSplitArray.length) {
      case 2:
        languageCode = "".concat(languageCodeSplitArray[0], "-").concat(languageCodeSplitArray[1]);
        break;
      case 3:
        languageCode = "".concat(languageCodeSplitArray[0], "-").concat(languageCodeSplitArray[2]);
        break;
      default:
        languageCode = languageCodeSplitArray[0];
        break;
    }
    if ((0, import_ext_gadget.isValidKey)(fallbackTable, languageCode)) {
      break;
    }
  }
  return [.../* @__PURE__ */ new Set([languageCode, defaultLanguageCode])];
};
//! src/i18n/modules/initI18nMethods.ts
var import_ext_gadget2 = require("ext.gadget.Util");
var initI18nMethods = () => {
  const defaultFallbackList = generateDefaultFallbackList();
  const elect = (candidates, locale) => {
    let fallbackList = defaultFallbackList;
    for (var _i2 = 0, _arr2 = [locale, ...fallbackList]; _i2 < _arr2.length; _i2++) {
      const key = _arr2[_i2];
      if ((0, import_ext_gadget2.isValidKey)(fallbackTable, key)) {
        fallbackList = fallbackTable[key];
        break;
      }
    }
    var _iterator2 = _createForOfIteratorHelper(/* @__PURE__ */ new Set([locale, ...fallbackList, ...defaultFallbackList])), _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
        const key = _step2.value;
        if ((0, import_ext_gadget2.isValidKey)(candidates, key)) {
          return candidates[key];
        }
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    return "";
  };
  const i18nMethods2 = {
    content: (candidates) => {
      return elect(candidates, WG_CONTENT_LANGUAGE);
    },
    localize: (candidates) => {
      return elect(candidates, WG_USER_LANGUAGE);
    },
    vary: (candidates) => {
      return elect(candidates, WG_USER_VARIANT !== null && WG_USER_VARIANT !== void 0 ? WG_USER_VARIANT : WG_CONTENT_LANGUAGE);
    }
  };
  return i18nMethods2;
};
//! src/i18n/modules/initShims.ts
var initShims = (i18nMethods2) => {
  const wgUXS = (hans, hant, cn, tw, hk, sg, zh, mo, my, en, method) => {
    var _ref, _ref2, _ref3, _ref4, _ref5, _ref6, _ref7, _ref8, _zh, _ref9, _ref10, _ref11, _hans, _ref12, _ref13, _ref14, _hant, _cn, _sg, _tw, _hk, _mo, _my, _en;
    zh = String((_ref = (_ref2 = (_ref3 = (_ref4 = (_ref5 = (_ref6 = (_ref7 = (_ref8 = (_zh = zh) !== null && _zh !== void 0 ? _zh : hans) !== null && _ref8 !== void 0 ? _ref8 : hant) !== null && _ref7 !== void 0 ? _ref7 : cn) !== null && _ref6 !== void 0 ? _ref6 : tw) !== null && _ref5 !== void 0 ? _ref5 : hk) !== null && _ref4 !== void 0 ? _ref4 : sg) !== null && _ref3 !== void 0 ? _ref3 : mo) !== null && _ref2 !== void 0 ? _ref2 : my) !== null && _ref !== void 0 ? _ref : en);
    hans = String((_ref9 = (_ref10 = (_ref11 = (_hans = hans) !== null && _hans !== void 0 ? _hans : cn) !== null && _ref11 !== void 0 ? _ref11 : sg) !== null && _ref10 !== void 0 ? _ref10 : my) !== null && _ref9 !== void 0 ? _ref9 : zh);
    hant = String((_ref12 = (_ref13 = (_ref14 = (_hant = hant) !== null && _hant !== void 0 ? _hant : tw) !== null && _ref14 !== void 0 ? _ref14 : hk) !== null && _ref13 !== void 0 ? _ref13 : mo) !== null && _ref12 !== void 0 ? _ref12 : zh);
    cn = String((_cn = cn) !== null && _cn !== void 0 ? _cn : hans);
    sg = String((_sg = sg) !== null && _sg !== void 0 ? _sg : hans);
    tw = String((_tw = tw) !== null && _tw !== void 0 ? _tw : hant);
    hk = String((_hk = hk) !== null && _hk !== void 0 ? _hk : hant);
    mo = String((_mo = mo) !== null && _mo !== void 0 ? _mo : hant);
    my = String((_my = my) !== null && _my !== void 0 ? _my : hant);
    en = String((_en = en) !== null && _en !== void 0 ? _en : zh);
    return i18nMethods2[method]({
      en,
      zh,
      "zh-hans": hans,
      "zh-hant": hant,
      "zh-cn": cn,
      "zh-tw": tw,
      "zh-hk": hk,
      "zh-sg": sg,
      "zh-mo": mo,
      "zh-my": my
    });
  };
  window.wgUCS = (hans, hant, cn, tw, hk, sg, zh, mo, my, en) => {
    return wgUXS(hans, hant, cn, tw, hk, sg, zh, mo, my, en, "content");
  };
  window.wgULS = (hans, hant, cn, tw, hk, sg, zh, mo, my, en) => {
    return wgUXS(hans, hant, cn, tw, hk, sg, zh, mo, my, en, "localize");
  };
  window.wgUVS = (hans, hant, cn, tw, hk, sg, zh, mo, my, en) => {
    return wgUXS(hans, hant, cn, tw, hk, sg, zh, mo, my, en, "vary");
  };
};
//! src/i18n/i18n.ts
var i18nMethods = initI18nMethods();
initShims(i18nMethods);
var {
  content,
  localize,
  vary
} = i18nMethods;
/*!
// 仓库内用法
	// 定义多条消息
	// 支持多语言，可选值定义在modules/types.d.ts#L-1，可直接添加其他值（RFC 5646）
	import {content, localize, vary} from 'ext.gadget.i18n';
	const getI18nMessages = () => {
		// i18n的三个方法会匹配当前语言和它所接收对象中的键，对于localize来说，假设已定义zh、en和ja，则
		//   当页面语言（wgUserLanguage ?? wgContentLanguage）为中文/英语/日语时，返回页面语言所对应的值
		//   当页面语言为法语，浏览器语言为中文/英语/日语时，返回浏览器语言所对应的值
		//   当页面语言为法语，且不存在浏览器语言所对应的键，返回L-25定义的键所对应的值。若此键同样没被定义，则返回空字符串
		return {
			Cancel: content({
				en: 'Cancel',
				ja: 'キャンセル',
				zh: '取消',
			}),
			QiuWen: localize({
				en: 'QiuWen',
				ja: 'ちゅううん',
				'zh-cn': '求闻',
				'zh-hk': '求聞',
			}),
			LongText: vary({
				en: 'This is a very long text',
				ja: 'これは非常に長いテキストです',
				'zh-hans': '这是一段非常长的文本',
				'zh-hant': '這是一段非常長的文字',
			}),
		};
	};
	const i18nMessages = getI18nMessages();
	const getMessage: GetMessages<typeof i18nMessages> = (key) => {
		return i18nMessages[key] || key;
	};
	// 调用
	getMessage('Cancel'); // en: Cancel, ja: キャンセル, zh: 取消, zh-hans: 取消, zh-hant: 取消, zh-cn: 取消, zh-hk: 取消, zh-tw: 取消
	getMessage('QiuWen'); // en: QiuWen, ja: ちゅううん, zh: 求闻, zh-hans: 求闻, zh-hant: 求聞, zh-cn: 求闻, zh-hk: 求聞, zh-tw: 求聞
	getMessage('LongText');
		// en: This is a very long text
		// ja: これは非常に長いテキストです
		// zh: 这是一段非常长的文本
		// zh-hans: 这是一段非常长的文本
		// zh-hant: 這是一段非常長的文字
		// zh-cn: 这是一段非常长的文本
		// zh-hk: 這是一段非常長的文字
		// zh-tw: 這是一段非常長的文字

	// 直接转换单条消息（不推荐，仅为兼容性保留）
	// 仅支持传递中文和英语。在非中文环境且未传递英语文本时，最终返回zh的值
	wgUCS('求闻', '求聞'); // en: 求闻, ja: 求闻, zh: 求闻, zh-hans: 求闻, zh-hant: 求聞, zh-cn: 求闻, zh-hk: 求聞, zh-tw: 求聞
	wgULS('求闻', '求聞'); // en: 求闻, ja: 求闻, zh: 求闻, zh-hans: 求闻, zh-hant: 求聞, zh-cn: 求闻, zh-hk: 求聞, zh-tw: 求聞
	wgUVS('求闻', '求聞'); // en: 求闻, ja: 求闻, zh: 求闻, zh-hans: 求闻, zh-hant: 求聞, zh-cn: 求闻, zh-hk: 求聞, zh-tw: 求聞

	// 非MediaWiki命名空间的脚本可以通过mw.loader.using加载ext.gadget.i18n模块
	mw.loader.using('ext.gadget.i18n').then((require) => {
		const {content, localize, vary} = require('ext.gadget.i18n');
	});
 */
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2kxOG4vaTE4bi50cyIsICJzcmMvaTE4bi9vcHRpb25zLmpzb24iLCAic3JjL2kxOG4vbW9kdWxlcy9jb25zdGFudC50cyIsICJzcmMvaTE4bi9tb2R1bGVzL3V0aWwvZ2VuZXJhdGVMYW5ndWFnZUNvZGVTcGxpdEFycmF5LnRzIiwgInNyYy9pMThuL21vZHVsZXMvdXRpbC9nZW5lcmF0ZURlZmF1bHRGYWxsYmFja0xpc3QudHMiLCAic3JjL2kxOG4vbW9kdWxlcy9pbml0STE4bk1ldGhvZHMudHMiLCAic3JjL2kxOG4vbW9kdWxlcy9pbml0U2hpbXMudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7aW5pdEkxOG5NZXRob2RzfSBmcm9tICcuL21vZHVsZXMvaW5pdEkxOG5NZXRob2RzJztcbmltcG9ydCB7aW5pdFNoaW1zfSBmcm9tICcuL21vZHVsZXMvaW5pdFNoaW1zJztcblxuY29uc3QgaTE4bk1ldGhvZHM6IFJldHVyblR5cGU8dHlwZW9mIGluaXRJMThuTWV0aG9kcz4gPSBpbml0STE4bk1ldGhvZHMoKTtcbmluaXRTaGltcyhpMThuTWV0aG9kcyk7XG5cbmV4cG9ydCBjb25zdCB7Y29udGVudCwgbG9jYWxpemUsIHZhcnl9ID0gaTE4bk1ldGhvZHM7XG5cbi8qIVxuLy8g5LuT5bqT5YaF55So5rOVXG5cdC8vIOWumuS5ieWkmuadoea2iOaBr1xuXHQvLyDmlK/mjIHlpJror63oqIDvvIzlj6/pgInlgLzlrprkuYnlnKhtb2R1bGVzL3R5cGVzLmQudHMjTC0x77yM5Y+v55u05o6l5re75Yqg5YW25LuW5YC877yIUkZDIDU2NDbvvIlcblx0aW1wb3J0IHtjb250ZW50LCBsb2NhbGl6ZSwgdmFyeX0gZnJvbSAnZXh0LmdhZGdldC5pMThuJztcblx0Y29uc3QgZ2V0STE4bk1lc3NhZ2VzID0gKCkgPT4ge1xuXHRcdC8vIGkxOG7nmoTkuInkuKrmlrnms5XkvJrljLnphY3lvZPliY3or63oqIDlkozlroPmiYDmjqXmlLblr7nosaHkuK3nmoTplK7vvIzlr7nkuo5sb2NhbGl6ZeadpeivtO+8jOWBh+iuvuW3suWumuS5iXpo44CBZW7lkoxqYe+8jOWImVxuXHRcdC8vICAg5b2T6aG16Z2i6K+t6KiA77yId2dVc2VyTGFuZ3VhZ2UgPz8gd2dDb250ZW50TGFuZ3VhZ2XvvInkuLrkuK3mlocv6Iux6K+tL+aXpeivreaXtu+8jOi/lOWbnumhtemdouivreiogOaJgOWvueW6lOeahOWAvFxuXHRcdC8vICAg5b2T6aG16Z2i6K+t6KiA5Li65rOV6K+t77yM5rWP6KeI5Zmo6K+t6KiA5Li65Lit5paHL+iLseivrS/ml6Xor63ml7bvvIzov5Tlm57mtY/op4jlmajor63oqIDmiYDlr7nlupTnmoTlgLxcblx0XHQvLyAgIOW9k+mhtemdouivreiogOS4uuazleivre+8jOS4lOS4jeWtmOWcqOa1j+iniOWZqOivreiogOaJgOWvueW6lOeahOmUru+8jOi/lOWbnkwtMjXlrprkuYnnmoTplK7miYDlr7nlupTnmoTlgLzjgILoi6XmraTplK7lkIzmoLfmsqHooqvlrprkuYnvvIzliJnov5Tlm57nqbrlrZfnrKbkuLJcblx0XHRyZXR1cm4ge1xuXHRcdFx0Q2FuY2VsOiBjb250ZW50KHtcblx0XHRcdFx0ZW46ICdDYW5jZWwnLFxuXHRcdFx0XHRqYTogJ+OCreODo+ODs+OCu+ODqycsXG5cdFx0XHRcdHpoOiAn5Y+W5raIJyxcblx0XHRcdH0pLFxuXHRcdFx0UWl1V2VuOiBsb2NhbGl6ZSh7XG5cdFx0XHRcdGVuOiAnUWl1V2VuJyxcblx0XHRcdFx0amE6ICfjgaHjgoXjgYbjgYbjgpMnLFxuXHRcdFx0XHQnemgtY24nOiAn5rGC6Ze7Jyxcblx0XHRcdFx0J3poLWhrJzogJ+axguiBnicsXG5cdFx0XHR9KSxcblx0XHRcdExvbmdUZXh0OiB2YXJ5KHtcblx0XHRcdFx0ZW46ICdUaGlzIGlzIGEgdmVyeSBsb25nIHRleHQnLFxuXHRcdFx0XHRqYTogJ+OBk+OCjOOBr+mdnuW4uOOBq+mVt+OBhOODhuOCreOCueODiOOBp+OBmScsXG5cdFx0XHRcdCd6aC1oYW5zJzogJ+i/meaYr+S4gOautemdnuW4uOmVv+eahOaWh+acrCcsXG5cdFx0XHRcdCd6aC1oYW50JzogJ+mAmeaYr+S4gOautemdnuW4uOmVt+eahOaWh+WtlycsXG5cdFx0XHR9KSxcblx0XHR9O1xuXHR9O1xuXHRjb25zdCBpMThuTWVzc2FnZXMgPSBnZXRJMThuTWVzc2FnZXMoKTtcblx0Y29uc3QgZ2V0TWVzc2FnZTogR2V0TWVzc2FnZXM8dHlwZW9mIGkxOG5NZXNzYWdlcz4gPSAoa2V5KSA9PiB7XG5cdFx0cmV0dXJuIGkxOG5NZXNzYWdlc1trZXldIHx8IGtleTtcblx0fTtcblx0Ly8g6LCD55SoXG5cdGdldE1lc3NhZ2UoJ0NhbmNlbCcpOyAvLyBlbjogQ2FuY2VsLCBqYTog44Kt44Oj44Oz44K744OrLCB6aDog5Y+W5raILCB6aC1oYW5zOiDlj5bmtogsIHpoLWhhbnQ6IOWPlua2iCwgemgtY246IOWPlua2iCwgemgtaGs6IOWPlua2iCwgemgtdHc6IOWPlua2iFxuXHRnZXRNZXNzYWdlKCdRaXVXZW4nKTsgLy8gZW46IFFpdVdlbiwgamE6IOOBoeOCheOBhuOBhuOCkywgemg6IOaxgumXuywgemgtaGFuczog5rGC6Ze7LCB6aC1oYW50OiDmsYLogZ4sIHpoLWNuOiDmsYLpl7ssIHpoLWhrOiDmsYLogZ4sIHpoLXR3OiDmsYLogZ5cblx0Z2V0TWVzc2FnZSgnTG9uZ1RleHQnKTtcblx0XHQvLyBlbjogVGhpcyBpcyBhIHZlcnkgbG9uZyB0ZXh0XG5cdFx0Ly8gamE6IOOBk+OCjOOBr+mdnuW4uOOBq+mVt+OBhOODhuOCreOCueODiOOBp+OBmVxuXHRcdC8vIHpoOiDov5nmmK/kuIDmrrXpnZ7luLjplb/nmoTmlofmnKxcblx0XHQvLyB6aC1oYW5zOiDov5nmmK/kuIDmrrXpnZ7luLjplb/nmoTmlofmnKxcblx0XHQvLyB6aC1oYW50OiDpgJnmmK/kuIDmrrXpnZ7luLjplbfnmoTmloflrZdcblx0XHQvLyB6aC1jbjog6L+Z5piv5LiA5q616Z2e5bi46ZW/55qE5paH5pysXG5cdFx0Ly8gemgtaGs6IOmAmeaYr+S4gOautemdnuW4uOmVt+eahOaWh+Wtl1xuXHRcdC8vIHpoLXR3OiDpgJnmmK/kuIDmrrXpnZ7luLjplbfnmoTmloflrZdcblxuXHQvLyDnm7TmjqXovazmjaLljZXmnaHmtojmga/vvIjkuI3mjqjojZDvvIzku4XkuLrlhbzlrrnmgKfkv53nlZnvvIlcblx0Ly8g5LuF5pSv5oyB5Lyg6YCS5Lit5paH5ZKM6Iux6K+t44CC5Zyo6Z2e5Lit5paH546v5aKD5LiU5pyq5Lyg6YCS6Iux6K+t5paH5pys5pe277yM5pyA57uI6L+U5ZueemjnmoTlgLxcblx0d2dVQ1MoJ+axgumXuycsICfmsYLogZ4nKTsgLy8gZW46IOaxgumXuywgamE6IOaxgumXuywgemg6IOaxgumXuywgemgtaGFuczog5rGC6Ze7LCB6aC1oYW50OiDmsYLogZ4sIHpoLWNuOiDmsYLpl7ssIHpoLWhrOiDmsYLogZ4sIHpoLXR3OiDmsYLogZ5cblx0d2dVTFMoJ+axgumXuycsICfmsYLogZ4nKTsgLy8gZW46IOaxgumXuywgamE6IOaxgumXuywgemg6IOaxgumXuywgemgtaGFuczog5rGC6Ze7LCB6aC1oYW50OiDmsYLogZ4sIHpoLWNuOiDmsYLpl7ssIHpoLWhrOiDmsYLogZ4sIHpoLXR3OiDmsYLogZ5cblx0d2dVVlMoJ+axgumXuycsICfmsYLogZ4nKTsgLy8gZW46IOaxgumXuywgamE6IOaxgumXuywgemg6IOaxgumXuywgemgtaGFuczog5rGC6Ze7LCB6aC1oYW50OiDmsYLogZ4sIHpoLWNuOiDmsYLpl7ssIHpoLWhrOiDmsYLogZ4sIHpoLXR3OiDmsYLogZ5cblxuXHQvLyDpnZ5NZWRpYVdpa2nlkb3lkI3nqbrpl7TnmoTohJrmnKzlj6/ku6XpgJrov4dtdy5sb2FkZXIudXNpbmfliqDovb1leHQuZ2FkZ2V0LmkxOG7mqKHlnZdcblx0bXcubG9hZGVyLnVzaW5nKCdleHQuZ2FkZ2V0LmkxOG4nKS50aGVuKChyZXF1aXJlKSA9PiB7XG5cdFx0Y29uc3Qge2NvbnRlbnQsIGxvY2FsaXplLCB2YXJ5fSA9IHJlcXVpcmUoJ2V4dC5nYWRnZXQuaTE4bicpO1xuXHR9KTtcbiAqL1xuIiwgIntcblx0XCJkZWZhdWx0TGFuZ3VhZ2VDb2RlXCI6IFwiZW5cIixcblx0XCJmYWxsYmFja1RhYmxlXCI6IHtcblx0XHRcInpoXCI6IFtcInpoXCIsIFwiemgtaGFuc1wiLCBcInpoLWhhbnRcIiwgXCJ6aC1jblwiLCBcInpoLXR3XCIsIFwiemgtaGtcIiwgXCJ6aC1zZ1wiLCBcInpoLW1vXCIsIFwiemgtbXlcIl0sXG5cdFx0XCJ6aC1oYW5zXCI6IFtcInpoLWhhbnNcIiwgXCJ6aC1jblwiLCBcInpoLXNnXCIsIFwiemgtbXlcIiwgXCJ6aFwiLCBcInpoLWhhbnRcIiwgXCJ6aC10d1wiLCBcInpoLWhrXCIsIFwiemgtbW9cIl0sXG5cdFx0XCJ6aC1oYW50XCI6IFtcInpoLWhhbnRcIiwgXCJ6aC10d1wiLCBcInpoLWhrXCIsIFwiemgtbW9cIiwgXCJ6aFwiLCBcInpoLWhhbnNcIiwgXCJ6aC1jblwiLCBcInpoLXNnXCIsIFwiemgtbXlcIl0sXG5cdFx0XCJ6aC1jblwiOiBbXCJ6aC1jblwiLCBcInpoLWhhbnNcIiwgXCJ6aC1zZ1wiLCBcInpoLW15XCIsIFwiemhcIiwgXCJ6aC1oYW50XCIsIFwiemgtdHdcIiwgXCJ6aC1oa1wiLCBcInpoLW1vXCJdLFxuXHRcdFwiemgtc2dcIjogW1wiemgtc2dcIiwgXCJ6aC1oYW5zXCIsIFwiemgtY25cIiwgXCJ6aC1teVwiLCBcInpoXCIsIFwiemgtaGFudFwiLCBcInpoLXR3XCIsIFwiemgtaGtcIiwgXCJ6aC1tb1wiXSxcblx0XHRcInpoLW15XCI6IFtcInpoLW15XCIsIFwiemgtaGFuc1wiLCBcInpoLWNuXCIsIFwiemgtc2dcIiwgXCJ6aFwiLCBcInpoLWhhbnRcIiwgXCJ6aC10d1wiLCBcInpoLWhrXCIsIFwiemgtbW9cIl0sXG5cdFx0XCJ6aC10d1wiOiBbXCJ6aC10d1wiLCBcInpoLWhhbnRcIiwgXCJ6aC1oa1wiLCBcInpoLW1vXCIsIFwiemhcIiwgXCJ6aC1oYW5zXCIsIFwiemgtY25cIiwgXCJ6aC1zZ1wiLCBcInpoLW15XCJdLFxuXHRcdFwiemgtaGtcIjogW1wiemgtaGtcIiwgXCJ6aC1oYW50XCIsIFwiemgtbW9cIiwgXCJ6aC10d1wiLCBcInpoXCIsIFwiemgtaGFuc1wiLCBcInpoLWNuXCIsIFwiemgtc2dcIiwgXCJ6aC1teVwiXSxcblx0XHRcInpoLW1vXCI6IFtcInpoLW1vXCIsIFwiemgtaGFudFwiLCBcInpoLWhrXCIsIFwiemgtdHdcIiwgXCJ6aFwiLCBcInpoLWhhbnNcIiwgXCJ6aC1jblwiLCBcInpoLXNnXCIsIFwiemgtbXlcIl1cblx0fVxufVxuIiwgImNvbnN0IFdHX0NPTlRFTlRfTEFOR1VBR0U6IHN0cmluZyA9IG13LmNvbmZpZy5nZXQoJ3dnQ29udGVudExhbmd1YWdlJyk7XG5jb25zdCBXR19VU0VSX0xBTkdVQUdFOiBzdHJpbmcgPSBtdy5jb25maWcuZ2V0KCd3Z1VzZXJMYW5ndWFnZScpO1xuY29uc3QgV0dfVVNFUl9WQVJJQU5UOiBzdHJpbmcgfCBudWxsID0gbXcuY29uZmlnLmdldCgnd2dVc2VyVmFyaWFudCcpO1xuXG5leHBvcnQge1dHX0NPTlRFTlRfTEFOR1VBR0UsIFdHX1VTRVJfTEFOR1VBR0UsIFdHX1VTRVJfVkFSSUFOVH07XG4iLCAiY29uc3QgZ2VuZXJhdGVMYW5ndWFnZUNvZGVTcGxpdEFycmF5ID0gKG9yaWdpbkxhbmd1YWdlQ29kZTogc3RyaW5nKTogc3RyaW5nW10gPT4ge1xuXHRjb25zdCBsYW5ndWFnZUNvZGVTcGxpdEFycmF5OiBzdHJpbmdbXSA9IG9yaWdpbkxhbmd1YWdlQ29kZS5zcGxpdCgnLScpLm1hcCgodmFsdWU6IHN0cmluZyk6IHN0cmluZyA9PiB7XG5cdFx0cmV0dXJuIHZhbHVlLnRvTG93ZXJDYXNlKCk7XG5cdH0pO1xuXG5cdHJldHVybiBsYW5ndWFnZUNvZGVTcGxpdEFycmF5O1xufTtcblxuZXhwb3J0IHtnZW5lcmF0ZUxhbmd1YWdlQ29kZVNwbGl0QXJyYXl9O1xuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7Z2VuZXJhdGVMYW5ndWFnZUNvZGVTcGxpdEFycmF5fSBmcm9tICcuL2dlbmVyYXRlTGFuZ3VhZ2VDb2RlU3BsaXRBcnJheSc7XG5pbXBvcnQge2lzVmFsaWRLZXl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmNvbnN0IGdlbmVyYXRlRGVmYXVsdEZhbGxiYWNrTGlzdCA9ICgpOiBzdHJpbmdbXSA9PiB7XG5cdGNvbnN0IGRvY3VtZW50TGFuZ3VhZ2VTcGxpdEFycmF5OiBzdHJpbmdbXSA9IGdlbmVyYXRlTGFuZ3VhZ2VDb2RlU3BsaXRBcnJheShkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQubGFuZyk7XG5cdGNvbnN0IG5hdmlnYXRvckxhbmd1YWdlU3BsaXRBcnJheTogc3RyaW5nW10gPSBnZW5lcmF0ZUxhbmd1YWdlQ29kZVNwbGl0QXJyYXkobmF2aWdhdG9yLmxhbmd1YWdlKTtcblxuXHRsZXQgbGFuZ3VhZ2VDb2RlOiBzdHJpbmcgPSBPUFRJT05TLmRlZmF1bHRMYW5ndWFnZUNvZGU7XG5cdGZvciAoY29uc3QgbGFuZ3VhZ2VDb2RlU3BsaXRBcnJheSBvZiBbZG9jdW1lbnRMYW5ndWFnZVNwbGl0QXJyYXksIG5hdmlnYXRvckxhbmd1YWdlU3BsaXRBcnJheV0pIHtcblx0XHRzd2l0Y2ggKGxhbmd1YWdlQ29kZVNwbGl0QXJyYXkubGVuZ3RoKSB7XG5cdFx0XHRjYXNlIDI6XG5cdFx0XHRcdGxhbmd1YWdlQ29kZSA9IGAke2xhbmd1YWdlQ29kZVNwbGl0QXJyYXlbMF19LSR7bGFuZ3VhZ2VDb2RlU3BsaXRBcnJheVsxXX1gO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgMzpcblx0XHRcdFx0bGFuZ3VhZ2VDb2RlID0gYCR7bGFuZ3VhZ2VDb2RlU3BsaXRBcnJheVswXX0tJHtsYW5ndWFnZUNvZGVTcGxpdEFycmF5WzJdfWA7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0bGFuZ3VhZ2VDb2RlID0gbGFuZ3VhZ2VDb2RlU3BsaXRBcnJheVswXSBhcyBzdHJpbmc7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblx0XHRpZiAoaXNWYWxpZEtleShPUFRJT05TLmZhbGxiYWNrVGFibGUsIGxhbmd1YWdlQ29kZSkpIHtcblx0XHRcdGJyZWFrO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBbLi4ubmV3IFNldChbbGFuZ3VhZ2VDb2RlLCBPUFRJT05TLmRlZmF1bHRMYW5ndWFnZUNvZGVdKV07XG59O1xuXG5leHBvcnQge2dlbmVyYXRlRGVmYXVsdEZhbGxiYWNrTGlzdH07XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtXR19DT05URU5UX0xBTkdVQUdFLCBXR19VU0VSX0xBTkdVQUdFLCBXR19VU0VSX1ZBUklBTlR9IGZyb20gJy4vY29uc3RhbnQnO1xuaW1wb3J0IHR5cGUge0kxOG5DYW5kaWRhdGVzfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7Z2VuZXJhdGVEZWZhdWx0RmFsbGJhY2tMaXN0fSBmcm9tICcuL3V0aWwvZ2VuZXJhdGVEZWZhdWx0RmFsbGJhY2tMaXN0JztcbmltcG9ydCB7aXNWYWxpZEtleX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxuY29uc3QgaW5pdEkxOG5NZXRob2RzID0gKCk6IHR5cGVvZiBpMThuTWV0aG9kcyA9PiB7XG5cdGNvbnN0IGRlZmF1bHRGYWxsYmFja0xpc3Q6IHN0cmluZ1tdID0gZ2VuZXJhdGVEZWZhdWx0RmFsbGJhY2tMaXN0KCk7XG5cblx0Y29uc3QgZWxlY3QgPSAoY2FuZGlkYXRlczogSTE4bkNhbmRpZGF0ZXMsIGxvY2FsZTogc3RyaW5nKTogc3RyaW5nID0+IHtcblx0XHRsZXQgZmFsbGJhY2tMaXN0OiBzdHJpbmdbXSA9IGRlZmF1bHRGYWxsYmFja0xpc3Q7XG5cdFx0Zm9yIChjb25zdCBrZXkgb2YgW2xvY2FsZSwgLi4uZmFsbGJhY2tMaXN0XSkge1xuXHRcdFx0aWYgKGlzVmFsaWRLZXkoT1BUSU9OUy5mYWxsYmFja1RhYmxlLCBrZXkpKSB7XG5cdFx0XHRcdGZhbGxiYWNrTGlzdCA9IE9QVElPTlMuZmFsbGJhY2tUYWJsZVtrZXldO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHR9XG5cblx0XHRmb3IgKGNvbnN0IGtleSBvZiBuZXcgU2V0KFtsb2NhbGUsIC4uLmZhbGxiYWNrTGlzdCwgLi4uZGVmYXVsdEZhbGxiYWNrTGlzdF0pKSB7XG5cdFx0XHRpZiAoaXNWYWxpZEtleShjYW5kaWRhdGVzLCBrZXkpKSB7XG5cdFx0XHRcdHJldHVybiBjYW5kaWRhdGVzW2tleV07XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuICcnO1xuXHR9O1xuXG5cdGNvbnN0IGkxOG5NZXRob2RzOiB0eXBlb2YgaW1wb3J0KCdleHQuZ2FkZ2V0LmkxOG4nKSA9IHtcblx0XHRjb250ZW50OiAoY2FuZGlkYXRlcykgPT4ge1xuXHRcdFx0cmV0dXJuIGVsZWN0KGNhbmRpZGF0ZXMsIFdHX0NPTlRFTlRfTEFOR1VBR0UpO1xuXHRcdH0sXG5cdFx0bG9jYWxpemU6IChjYW5kaWRhdGVzKSA9PiB7XG5cdFx0XHRyZXR1cm4gZWxlY3QoY2FuZGlkYXRlcywgV0dfVVNFUl9MQU5HVUFHRSk7XG5cdFx0fSxcblx0XHR2YXJ5OiAoY2FuZGlkYXRlcykgPT4ge1xuXHRcdFx0cmV0dXJuIGVsZWN0KGNhbmRpZGF0ZXMsIFdHX1VTRVJfVkFSSUFOVCA/PyBXR19DT05URU5UX0xBTkdVQUdFKTtcblx0XHR9LFxuXHR9O1xuXG5cdHJldHVybiBpMThuTWV0aG9kcztcbn07XG5cbmV4cG9ydCB7aW5pdEkxOG5NZXRob2RzfTtcbiIsICJjb25zdCBpbml0U2hpbXMgPSAoaTE4bk1ldGhvZHM6IHR5cGVvZiBpbXBvcnQoJ2V4dC5nYWRnZXQuaTE4bicpKTogdm9pZCA9PiB7XG5cdGNvbnN0IHdnVVhTID0gKFxuXHRcdGhhbnM6IHVua25vd24sXG5cdFx0aGFudDogdW5rbm93bixcblx0XHRjbjogdW5rbm93bixcblx0XHR0dzogdW5rbm93bixcblx0XHRoazogdW5rbm93bixcblx0XHRzZzogdW5rbm93bixcblx0XHR6aDogdW5rbm93bixcblx0XHRtbzogdW5rbm93bixcblx0XHRteTogdW5rbm93bixcblx0XHRlbjogdW5rbm93bixcblx0XHRtZXRob2Q6ICdjb250ZW50JyB8ICdsb2NhbGl6ZScgfCAndmFyeSdcblx0KTogc3RyaW5nID0+IHtcblx0XHR6aCA9IFN0cmluZyh6aCA/PyBoYW5zID8/IGhhbnQgPz8gY24gPz8gdHcgPz8gaGsgPz8gc2cgPz8gbW8gPz8gbXkgPz8gZW4pO1xuXHRcdGhhbnMgPSBTdHJpbmcoaGFucyA/PyBjbiA/PyBzZyA/PyBteSA/PyB6aCk7XG5cdFx0aGFudCA9IFN0cmluZyhoYW50ID8/IHR3ID8/IGhrID8/IG1vID8/IHpoKTtcblx0XHRjbiA9IFN0cmluZyhjbiA/PyBoYW5zKTtcblx0XHRzZyA9IFN0cmluZyhzZyA/PyBoYW5zKTtcblx0XHR0dyA9IFN0cmluZyh0dyA/PyBoYW50KTtcblx0XHRoayA9IFN0cmluZyhoayA/PyBoYW50KTtcblx0XHRtbyA9IFN0cmluZyhtbyA/PyBoYW50KTtcblx0XHRteSA9IFN0cmluZyhteSA/PyBoYW50KTtcblx0XHRlbiA9IFN0cmluZyhlbiA/PyB6aCk7XG5cblx0XHRyZXR1cm4gaTE4bk1ldGhvZHNbbWV0aG9kXSh7XG5cdFx0XHRlbjogZW4gYXMgc3RyaW5nLFxuXHRcdFx0emg6IHpoIGFzIHN0cmluZyxcblx0XHRcdCd6aC1oYW5zJzogaGFucyBhcyBzdHJpbmcsXG5cdFx0XHQnemgtaGFudCc6IGhhbnQgYXMgc3RyaW5nLFxuXHRcdFx0J3poLWNuJzogY24gYXMgc3RyaW5nLFxuXHRcdFx0J3poLXR3JzogdHcgYXMgc3RyaW5nLFxuXHRcdFx0J3poLWhrJzogaGsgYXMgc3RyaW5nLFxuXHRcdFx0J3poLXNnJzogc2cgYXMgc3RyaW5nLFxuXHRcdFx0J3poLW1vJzogbW8gYXMgc3RyaW5nLFxuXHRcdFx0J3poLW15JzogbXkgYXMgc3RyaW5nLFxuXHRcdH0pO1xuXHR9O1xuXG5cdHdpbmRvdy53Z1VDUyA9IChoYW5zLCBoYW50LCBjbiwgdHcsIGhrLCBzZywgemgsIG1vLCBteSwgZW4pID0+IHtcblx0XHRyZXR1cm4gd2dVWFMoaGFucywgaGFudCwgY24sIHR3LCBoaywgc2csIHpoLCBtbywgbXksIGVuLCAnY29udGVudCcpO1xuXHR9O1xuXHR3aW5kb3cud2dVTFMgPSAoaGFucywgaGFudCwgY24sIHR3LCBoaywgc2csIHpoLCBtbywgbXksIGVuKSA9PiB7XG5cdFx0cmV0dXJuIHdnVVhTKGhhbnMsIGhhbnQsIGNuLCB0dywgaGssIHNnLCB6aCwgbW8sIG15LCBlbiwgJ2xvY2FsaXplJyk7XG5cdH07XG5cdHdpbmRvdy53Z1VWUyA9IChoYW5zLCBoYW50LCBjbiwgdHcsIGhrLCBzZywgemgsIG1vLCBteSwgZW4pID0+IHtcblx0XHRyZXR1cm4gd2dVWFMoaGFucywgaGFudCwgY24sIHR3LCBoaywgc2csIHpoLCBtbywgbXksIGVuLCAndmFyeScpO1xuXHR9O1xufTtcblxuZXhwb3J0IHtpbml0U2hpbXN9O1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLGVBQUEsQ0FBQTtBQUFBQyxTQUFBRCxjQUFBO0VBQUFFLFNBQUFBLE1BQUFBO0VBQUFDLFVBQUFBLE1BQUFBO0VBQUFDLE1BQUFBLE1BQUFBO0FBQUEsQ0FBQTtBQUFBQyxPQUFBQyxVQUFBQyxhQUFBUCxZQUFBOztBQ0NDLElBQUFRLHNCQUF1QjtBQUN2QixJQUFBQyxnQkFBaUI7RUFDaEJDLElBQU0sQ0FBQyxNQUFNLFdBQVcsV0FBVyxTQUFTLFNBQVMsU0FBUyxTQUFTLFNBQVMsT0FBTztFQUN2RixXQUFXLENBQUMsV0FBVyxTQUFTLFNBQVMsU0FBUyxNQUFN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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLAogICJuYW1lcyI6IFsiaTE4bl9leHBvcnRzIiwgIl9fZXhwb3J0IiwgImNvbnRlbnQiLCAibG9jYWxpemUiLCAidmFyeSIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJfX3RvQ29tbW9uSlMiLCAiZGVmYXVsdExhbmd1YWdlQ29kZSIsICJmYWxsYmFja1RhYmxlIiwgInpoIiwgIldHX0NPTlRFTlRfTEFOR1VBR0UiLCAibXciLCAiY29uZmlnIiwgImdldCIsICJXR19VU0VSX0xBTkdVQUdFIiwgIldHX1VTRVJfVkFSSUFOVCIsICJnZW5lcmF0ZUxhbmd1YWdlQ29kZVNwbGl0QXJyYXkiLCAib3JpZ2luTGFuZ3VhZ2VDb2RlIiwgImxhbmd1YWdlQ29kZVNwbGl0QXJyYXkiLCAic3BsaXQiLCAibWFwIiwgInZhbHVlIiwgInRvTG93ZXJDYXNlIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgInJlcXVpcmUiLCAiZ2VuZXJhdGVEZWZhdWx0RmFsbGJhY2tMaXN0IiwgImRvY3VtZW50TGFuZ3VhZ2VTcGxpdEFycmF5IiwgImRvY3VtZW50IiwgImRvY3VtZW50RWxlbWVudCIsICJsYW5nIiwgIm5hdmlnYXRvckxhbmd1YWdlU3BsaXRBcnJheSIsICJuYXZpZ2F0b3IiLCAibGFuZ3VhZ2UiLCAibGFuZ3VhZ2VDb2RlIiwgIl9pIiwgIl9hcnIiLCAibGVuZ3RoIiwgImNvbmNhdCIsICJpc1ZhbGlkS2V5IiwgIlNldCIsICJpbXBvcnRfZXh0X2dhZGdldDIiLCAiaW5pdEkxOG5NZXRob2RzIiwgImRlZmF1bHRGYWxsYmFja0xpc3QiLCAiZWxlY3QiLCAiY2FuZGlkYXRlcyIsICJsb2NhbGUiLCAiZmFsbGJhY2tMaXN0IiwgIl9pMiIsICJfYXJyMiIsICJrZXkiLCAiX2l0ZXJhdG9yMiIsICJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsICJfc3RlcDIiLCAicyIsICJuIiwgImRvbmUiLCAiZXJyIiwgImUiLCAiZiIsICJpMThuTWV0aG9kczIiLCAiaW5pdFNoaW1zIiwgIndnVVhTIiwgImhhbnMiLCAiaGFudCIsICJjbiIsICJ0dyIsICJoayIsICJzZyIsICJtbyIsICJteSIsICJlbiIsICJtZXRob2QiLCAiX3JlZiIsICJfcmVmMiIsICJfcmVmMyIsICJfcmVmNCIsICJfcmVmNSIsICJfcmVmNiIsICJfcmVmNyIsICJfcmVmOCIsICJfemgiLCAiX3JlZjkiLCAiX3JlZjEwIiwgIl9yZWYxMSIsICJfaGFucyIsICJfcmVmMTIiLCAiX3JlZjEzIiwgIl9yZWYxNCIsICJfaGFudCIsICJfY24iLCAiX3NnIiwgIl90dyIsICJfaGsiLCAiX21vIiwgIl9teSIsICJfZW4iLCAiU3RyaW5nIiwgIndpbmRvdyIsICJ3Z1VDUyIsICJ3Z1VMUyIsICJ3Z1VWUyIsICJpMThuTWV0aG9kcyJdCn0K

})();

/* </nowiki> */

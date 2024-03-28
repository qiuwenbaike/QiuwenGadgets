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
  const {
    wgContentLanguage,
    wgUserLanguage,
    wgUserVariant
  } = mw.config.get();
  const i18nMethods2 = {
    content: (candidates) => {
      return elect(candidates, wgContentLanguage);
    },
    localize: (candidates) => {
      return elect(candidates, wgUserLanguage);
    },
    vary: (candidates) => {
      return elect(candidates, wgUserVariant !== null && wgUserVariant !== void 0 ? wgUserVariant : wgContentLanguage);
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

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2kxOG4vaTE4bi50cyIsICJzcmMvaTE4bi9vcHRpb25zLmpzb24iLCAic3JjL2kxOG4vbW9kdWxlcy91dGlsL2dlbmVyYXRlTGFuZ3VhZ2VDb2RlU3BsaXRBcnJheS50cyIsICJzcmMvaTE4bi9tb2R1bGVzL3V0aWwvZ2VuZXJhdGVEZWZhdWx0RmFsbGJhY2tMaXN0LnRzIiwgInNyYy9pMThuL21vZHVsZXMvaW5pdEkxOG5NZXRob2RzLnRzIiwgInNyYy9pMThuL21vZHVsZXMvaW5pdFNoaW1zLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQge2luaXRJMThuTWV0aG9kc30gZnJvbSAnLi9tb2R1bGVzL2luaXRJMThuTWV0aG9kcyc7XG5pbXBvcnQge2luaXRTaGltc30gZnJvbSAnLi9tb2R1bGVzL2luaXRTaGltcyc7XG5cbmNvbnN0IGkxOG5NZXRob2RzOiBSZXR1cm5UeXBlPHR5cGVvZiBpbml0STE4bk1ldGhvZHM+ID0gaW5pdEkxOG5NZXRob2RzKCk7XG5pbml0U2hpbXMoaTE4bk1ldGhvZHMpO1xuXG5leHBvcnQgY29uc3Qge2NvbnRlbnQsIGxvY2FsaXplLCB2YXJ5fSA9IGkxOG5NZXRob2RzO1xuXG4vKiFcbi8vIOS7k+W6k+WGheeUqOazlVxuXHQvLyDlrprkuYnlpJrmnaHmtojmga9cblx0Ly8g5pSv5oyB5aSa6K+t6KiA77yM5Y+v6YCJ5YC85a6a5LmJ5ZyobW9kdWxlcy90eXBlcy5kLnRzI0wtMe+8jOWPr+ebtOaOpea3u+WKoOWFtuS7luWAvO+8iFJGQyA1NjQ277yJXG5cdGltcG9ydCB7Y29udGVudCwgbG9jYWxpemUsIHZhcnl9IGZyb20gJ2V4dC5nYWRnZXQuaTE4bic7XG5cdGNvbnN0IGdldEkxOG5NZXNzYWdlcyA9ICgpID0+IHtcblx0XHQvLyBpMThu55qE5LiJ5Liq5pa55rOV5Lya5Yy56YWN5b2T5YmN6K+t6KiA5ZKM5a6D5omA5o6l5pS25a+56LGh5Lit55qE6ZSu77yM5a+55LqObG9jYWxpemXmnaXor7TvvIzlgYforr7lt7LlrprkuYl6aOOAgWVu5ZKMamHvvIzliJlcblx0XHQvLyAgIOW9k+mhtemdouivreiogO+8iHdnVXNlckxhbmd1YWdlID8/IHdnQ29udGVudExhbmd1YWdl77yJ5Li65Lit5paHL+iLseivrS/ml6Xor63ml7bvvIzov5Tlm57pobXpnaLor63oqIDmiYDlr7nlupTnmoTlgLxcblx0XHQvLyAgIOW9k+mhtemdouivreiogOS4uuazleivre+8jOa1j+iniOWZqOivreiogOS4uuS4reaWhy/oi7Hor60v5pel6K+t5pe277yM6L+U5Zue5rWP6KeI5Zmo6K+t6KiA5omA5a+55bqU55qE5YC8XG5cdFx0Ly8gICDlvZPpobXpnaLor63oqIDkuLrms5Xor63vvIzkuJTkuI3lrZjlnKjmtY/op4jlmajor63oqIDmiYDlr7nlupTnmoTplK7vvIzov5Tlm55MLTI15a6a5LmJ55qE6ZSu5omA5a+55bqU55qE5YC844CC6Iul5q2k6ZSu5ZCM5qC35rKh6KKr5a6a5LmJ77yM5YiZ6L+U5Zue56m65a2X56ym5LiyXG5cdFx0cmV0dXJuIHtcblx0XHRcdENhbmNlbDogY29udGVudCh7XG5cdFx0XHRcdGVuOiAnQ2FuY2VsJyxcblx0XHRcdFx0amE6ICfjgq3jg6Pjg7Pjgrvjg6snLFxuXHRcdFx0XHR6aDogJ+WPlua2iCcsXG5cdFx0XHR9KSxcblx0XHRcdFFpdVdlbjogbG9jYWxpemUoe1xuXHRcdFx0XHRlbjogJ1FpdVdlbicsXG5cdFx0XHRcdGphOiAn44Gh44KF44GG44GG44KTJyxcblx0XHRcdFx0J3poLWNuJzogJ+axgumXuycsXG5cdFx0XHRcdCd6aC1oayc6ICfmsYLogZ4nLFxuXHRcdFx0fSksXG5cdFx0XHRMb25nVGV4dDogdmFyeSh7XG5cdFx0XHRcdGVuOiAnVGhpcyBpcyBhIHZlcnkgbG9uZyB0ZXh0Jyxcblx0XHRcdFx0amE6ICfjgZPjgozjga/pnZ7luLjjgavplbfjgYTjg4bjgq3jgrnjg4jjgafjgZknLFxuXHRcdFx0XHQnemgtaGFucyc6ICfov5nmmK/kuIDmrrXpnZ7luLjplb/nmoTmlofmnKwnLFxuXHRcdFx0XHQnemgtaGFudCc6ICfpgJnmmK/kuIDmrrXpnZ7luLjplbfnmoTmloflrZcnLFxuXHRcdFx0fSksXG5cdFx0fTtcblx0fTtcblx0Y29uc3QgaTE4bk1lc3NhZ2VzID0gZ2V0STE4bk1lc3NhZ2VzKCk7XG5cdGNvbnN0IGdldE1lc3NhZ2U6IEdldE1lc3NhZ2VzPHR5cGVvZiBpMThuTWVzc2FnZXM+ID0gKGtleSkgPT4ge1xuXHRcdHJldHVybiBpMThuTWVzc2FnZXNba2V5XSB8fCBrZXk7XG5cdH07XG5cdC8vIOiwg+eUqFxuXHRnZXRNZXNzYWdlKCdDYW5jZWwnKTsgLy8gZW46IENhbmNlbCwgamE6IOOCreODo+ODs+OCu+ODqywgemg6IOWPlua2iCwgemgtaGFuczog5Y+W5raILCB6aC1oYW50OiDlj5bmtogsIHpoLWNuOiDlj5bmtogsIHpoLWhrOiDlj5bmtogsIHpoLXR3OiDlj5bmtohcblx0Z2V0TWVzc2FnZSgnUWl1V2VuJyk7IC8vIGVuOiBRaXVXZW4sIGphOiDjgaHjgoXjgYbjgYbjgpMsIHpoOiDmsYLpl7ssIHpoLWhhbnM6IOaxgumXuywgemgtaGFudDog5rGC6IGeLCB6aC1jbjog5rGC6Ze7LCB6aC1oazog5rGC6IGeLCB6aC10dzog5rGC6IGeXG5cdGdldE1lc3NhZ2UoJ0xvbmdUZXh0Jyk7XG5cdFx0Ly8gZW46IFRoaXMgaXMgYSB2ZXJ5IGxvbmcgdGV4dFxuXHRcdC8vIGphOiDjgZPjgozjga/pnZ7luLjjgavplbfjgYTjg4bjgq3jgrnjg4jjgafjgZlcblx0XHQvLyB6aDog6L+Z5piv5LiA5q616Z2e5bi46ZW/55qE5paH5pysXG5cdFx0Ly8gemgtaGFuczog6L+Z5piv5LiA5q616Z2e5bi46ZW/55qE5paH5pysXG5cdFx0Ly8gemgtaGFudDog6YCZ5piv5LiA5q616Z2e5bi46ZW355qE5paH5a2XXG5cdFx0Ly8gemgtY246IOi/meaYr+S4gOautemdnuW4uOmVv+eahOaWh+acrFxuXHRcdC8vIHpoLWhrOiDpgJnmmK/kuIDmrrXpnZ7luLjplbfnmoTmloflrZdcblx0XHQvLyB6aC10dzog6YCZ5piv5LiA5q616Z2e5bi46ZW355qE5paH5a2XXG5cblx0Ly8g55u05o6l6L2s5o2i5Y2V5p2h5raI5oGv77yI5LiN5o6o6I2Q77yM5LuF5Li65YW85a655oCn5L+d55WZ77yJXG5cdC8vIOS7heaUr+aMgeS8oOmAkuS4reaWh+WSjOiLseivreOAguWcqOmdnuS4reaWh+eOr+Wig+S4lOacquS8oOmAkuiLseivreaWh+acrOaXtu+8jOacgOe7iOi/lOWbnnpo55qE5YC8XG5cdHdnVUNTKCfmsYLpl7snLCAn5rGC6IGeJyk7IC8vIGVuOiDmsYLpl7ssIGphOiDmsYLpl7ssIHpoOiDmsYLpl7ssIHpoLWhhbnM6IOaxgumXuywgemgtaGFudDog5rGC6IGeLCB6aC1jbjog5rGC6Ze7LCB6aC1oazog5rGC6IGeLCB6aC10dzog5rGC6IGeXG5cdHdnVUxTKCfmsYLpl7snLCAn5rGC6IGeJyk7IC8vIGVuOiDmsYLpl7ssIGphOiDmsYLpl7ssIHpoOiDmsYLpl7ssIHpoLWhhbnM6IOaxgumXuywgemgtaGFudDog5rGC6IGeLCB6aC1jbjog5rGC6Ze7LCB6aC1oazog5rGC6IGeLCB6aC10dzog5rGC6IGeXG5cdHdnVVZTKCfmsYLpl7snLCAn5rGC6IGeJyk7IC8vIGVuOiDmsYLpl7ssIGphOiDmsYLpl7ssIHpoOiDmsYLpl7ssIHpoLWhhbnM6IOaxgumXuywgemgtaGFudDog5rGC6IGeLCB6aC1jbjog5rGC6Ze7LCB6aC1oazog5rGC6IGeLCB6aC10dzog5rGC6IGeXG5cblx0Ly8g6Z2eTWVkaWFXaWtp5ZG95ZCN56m66Ze055qE6ISa5pys5Y+v5Lul6YCa6L+HbXcubG9hZGVyLnVzaW5n5Yqg6L29ZXh0LmdhZGdldC5pMThu5qih5Z2XXG5cdG13LmxvYWRlci51c2luZygnZXh0LmdhZGdldC5pMThuJykudGhlbigocmVxdWlyZSkgPT4ge1xuXHRcdGNvbnN0IHtjb250ZW50LCBsb2NhbGl6ZSwgdmFyeX0gPSByZXF1aXJlKCdleHQuZ2FkZ2V0LmkxOG4nKTtcblx0fSk7XG4gKi9cbiIsICJ7XG5cdFwiZGVmYXVsdExhbmd1YWdlQ29kZVwiOiBcImVuXCIsXG5cdFwiZmFsbGJhY2tUYWJsZVwiOiB7XG5cdFx0XCJ6aFwiOiBbXCJ6aFwiLCBcInpoLWhhbnNcIiwgXCJ6aC1oYW50XCIsIFwiemgtY25cIiwgXCJ6aC10d1wiLCBcInpoLWhrXCIsIFwiemgtc2dcIiwgXCJ6aC1tb1wiLCBcInpoLW15XCJdLFxuXHRcdFwiemgtaGFuc1wiOiBbXCJ6aC1oYW5zXCIsIFwiemgtY25cIiwgXCJ6aC1zZ1wiLCBcInpoLW15XCIsIFwiemhcIiwgXCJ6aC1oYW50XCIsIFwiemgtdHdcIiwgXCJ6aC1oa1wiLCBcInpoLW1vXCJdLFxuXHRcdFwiemgtaGFudFwiOiBbXCJ6aC1oYW50XCIsIFwiemgtdHdcIiwgXCJ6aC1oa1wiLCBcInpoLW1vXCIsIFwiemhcIiwgXCJ6aC1oYW5zXCIsIFwiemgtY25cIiwgXCJ6aC1zZ1wiLCBcInpoLW15XCJdLFxuXHRcdFwiemgtY25cIjogW1wiemgtY25cIiwgXCJ6aC1oYW5zXCIsIFwiemgtc2dcIiwgXCJ6aC1teVwiLCBcInpoXCIsIFwiemgtaGFudFwiLCBcInpoLXR3XCIsIFwiemgtaGtcIiwgXCJ6aC1tb1wiXSxcblx0XHRcInpoLXNnXCI6IFtcInpoLXNnXCIsIFwiemgtaGFuc1wiLCBcInpoLWNuXCIsIFwiemgtbXlcIiwgXCJ6aFwiLCBcInpoLWhhbnRcIiwgXCJ6aC10d1wiLCBcInpoLWhrXCIsIFwiemgtbW9cIl0sXG5cdFx0XCJ6aC1teVwiOiBbXCJ6aC1teVwiLCBcInpoLWhhbnNcIiwgXCJ6aC1jblwiLCBcInpoLXNnXCIsIFwiemhcIiwgXCJ6aC1oYW50XCIsIFwiemgtdHdcIiwgXCJ6aC1oa1wiLCBcInpoLW1vXCJdLFxuXHRcdFwiemgtdHdcIjogW1wiemgtdHdcIiwgXCJ6aC1oYW50XCIsIFwiemgtaGtcIiwgXCJ6aC1tb1wiLCBcInpoXCIsIFwiemgtaGFuc1wiLCBcInpoLWNuXCIsIFwiemgtc2dcIiwgXCJ6aC1teVwiXSxcblx0XHRcInpoLWhrXCI6IFtcInpoLWhrXCIsIFwiemgtaGFudFwiLCBcInpoLW1vXCIsIFwiemgtdHdcIiwgXCJ6aFwiLCBcInpoLWhhbnNcIiwgXCJ6aC1jblwiLCBcInpoLXNnXCIsIFwiemgtbXlcIl0sXG5cdFx0XCJ6aC1tb1wiOiBbXCJ6aC1tb1wiLCBcInpoLWhhbnRcIiwgXCJ6aC1oa1wiLCBcInpoLXR3XCIsIFwiemhcIiwgXCJ6aC1oYW5zXCIsIFwiemgtY25cIiwgXCJ6aC1zZ1wiLCBcInpoLW15XCJdXG5cdH1cbn1cbiIsICJjb25zdCBnZW5lcmF0ZUxhbmd1YWdlQ29kZVNwbGl0QXJyYXkgPSAob3JpZ2luTGFuZ3VhZ2VDb2RlOiBzdHJpbmcpOiBzdHJpbmdbXSA9PiB7XG5cdGNvbnN0IGxhbmd1YWdlQ29kZVNwbGl0QXJyYXk6IHN0cmluZ1tdID0gb3JpZ2luTGFuZ3VhZ2VDb2RlLnNwbGl0KCctJykubWFwKCh2YWx1ZTogc3RyaW5nKTogc3RyaW5nID0+IHtcblx0XHRyZXR1cm4gdmFsdWUudG9Mb3dlckNhc2UoKTtcblx0fSk7XG5cblx0cmV0dXJuIGxhbmd1YWdlQ29kZVNwbGl0QXJyYXk7XG59O1xuXG5leHBvcnQge2dlbmVyYXRlTGFuZ3VhZ2VDb2RlU3BsaXRBcnJheX07XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi8uLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtnZW5lcmF0ZUxhbmd1YWdlQ29kZVNwbGl0QXJyYXl9IGZyb20gJy4vZ2VuZXJhdGVMYW5ndWFnZUNvZGVTcGxpdEFycmF5JztcbmltcG9ydCB7aXNWYWxpZEtleX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxuY29uc3QgZ2VuZXJhdGVEZWZhdWx0RmFsbGJhY2tMaXN0ID0gKCk6IHN0cmluZ1tdID0+IHtcblx0Y29uc3QgZG9jdW1lbnRMYW5ndWFnZVNwbGl0QXJyYXk6IHN0cmluZ1tdID0gZ2VuZXJhdGVMYW5ndWFnZUNvZGVTcGxpdEFycmF5KGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5sYW5nKTtcblx0Y29uc3QgbmF2aWdhdG9yTGFuZ3VhZ2VTcGxpdEFycmF5OiBzdHJpbmdbXSA9IGdlbmVyYXRlTGFuZ3VhZ2VDb2RlU3BsaXRBcnJheShuYXZpZ2F0b3IubGFuZ3VhZ2UpO1xuXG5cdGxldCBsYW5ndWFnZUNvZGU6IHN0cmluZyA9IE9QVElPTlMuZGVmYXVsdExhbmd1YWdlQ29kZTtcblx0Zm9yIChjb25zdCBsYW5ndWFnZUNvZGVTcGxpdEFycmF5IG9mIFtkb2N1bWVudExhbmd1YWdlU3BsaXRBcnJheSwgbmF2aWdhdG9yTGFuZ3VhZ2VTcGxpdEFycmF5XSkge1xuXHRcdHN3aXRjaCAobGFuZ3VhZ2VDb2RlU3BsaXRBcnJheS5sZW5ndGgpIHtcblx0XHRcdGNhc2UgMjpcblx0XHRcdFx0bGFuZ3VhZ2VDb2RlID0gYCR7bGFuZ3VhZ2VDb2RlU3BsaXRBcnJheVswXX0tJHtsYW5ndWFnZUNvZGVTcGxpdEFycmF5WzFdfWA7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAzOlxuXHRcdFx0XHRsYW5ndWFnZUNvZGUgPSBgJHtsYW5ndWFnZUNvZGVTcGxpdEFycmF5WzBdfS0ke2xhbmd1YWdlQ29kZVNwbGl0QXJyYXlbMl19YDtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRsYW5ndWFnZUNvZGUgPSBsYW5ndWFnZUNvZGVTcGxpdEFycmF5WzBdIGFzIHN0cmluZztcblx0XHRcdFx0YnJlYWs7XG5cdFx0fVxuXHRcdGlmIChpc1ZhbGlkS2V5KE9QVElPTlMuZmFsbGJhY2tUYWJsZSwgbGFuZ3VhZ2VDb2RlKSkge1xuXHRcdFx0YnJlYWs7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIFsuLi5uZXcgU2V0KFtsYW5ndWFnZUNvZGUsIE9QVElPTlMuZGVmYXVsdExhbmd1YWdlQ29kZV0pXTtcbn07XG5cbmV4cG9ydCB7Z2VuZXJhdGVEZWZhdWx0RmFsbGJhY2tMaXN0fTtcbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQgdHlwZSB7STE4bkNhbmRpZGF0ZXN9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHtnZW5lcmF0ZURlZmF1bHRGYWxsYmFja0xpc3R9IGZyb20gJy4vdXRpbC9nZW5lcmF0ZURlZmF1bHRGYWxsYmFja0xpc3QnO1xuaW1wb3J0IHtpc1ZhbGlkS2V5fSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG5jb25zdCBpbml0STE4bk1ldGhvZHMgPSAoKTogdHlwZW9mIGkxOG5NZXRob2RzID0+IHtcblx0Y29uc3QgZGVmYXVsdEZhbGxiYWNrTGlzdDogc3RyaW5nW10gPSBnZW5lcmF0ZURlZmF1bHRGYWxsYmFja0xpc3QoKTtcblxuXHRjb25zdCBlbGVjdCA9IChjYW5kaWRhdGVzOiBJMThuQ2FuZGlkYXRlcywgbG9jYWxlOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuXHRcdGxldCBmYWxsYmFja0xpc3Q6IHN0cmluZ1tdID0gZGVmYXVsdEZhbGxiYWNrTGlzdDtcblx0XHRmb3IgKGNvbnN0IGtleSBvZiBbbG9jYWxlLCAuLi5mYWxsYmFja0xpc3RdKSB7XG5cdFx0XHRpZiAoaXNWYWxpZEtleShPUFRJT05TLmZhbGxiYWNrVGFibGUsIGtleSkpIHtcblx0XHRcdFx0ZmFsbGJhY2tMaXN0ID0gT1BUSU9OUy5mYWxsYmFja1RhYmxlW2tleV07XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGZvciAoY29uc3Qga2V5IG9mIG5ldyBTZXQoW2xvY2FsZSwgLi4uZmFsbGJhY2tMaXN0LCAuLi5kZWZhdWx0RmFsbGJhY2tMaXN0XSkpIHtcblx0XHRcdGlmIChpc1ZhbGlkS2V5KGNhbmRpZGF0ZXMsIGtleSkpIHtcblx0XHRcdFx0cmV0dXJuIGNhbmRpZGF0ZXNba2V5XTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gJyc7XG5cdH07XG5cblx0Y29uc3Qge3dnQ29udGVudExhbmd1YWdlLCB3Z1VzZXJMYW5ndWFnZSwgd2dVc2VyVmFyaWFudH0gPSBtdy5jb25maWcuZ2V0KCk7XG5cblx0Y29uc3QgaTE4bk1ldGhvZHM6IHR5cGVvZiBpbXBvcnQoJ2V4dC5nYWRnZXQuaTE4bicpID0ge1xuXHRcdGNvbnRlbnQ6IChjYW5kaWRhdGVzKSA9PiB7XG5cdFx0XHRyZXR1cm4gZWxlY3QoY2FuZGlkYXRlcywgd2dDb250ZW50TGFuZ3VhZ2UpO1xuXHRcdH0sXG5cdFx0bG9jYWxpemU6IChjYW5kaWRhdGVzKSA9PiB7XG5cdFx0XHRyZXR1cm4gZWxlY3QoY2FuZGlkYXRlcywgd2dVc2VyTGFuZ3VhZ2UpO1xuXHRcdH0sXG5cdFx0dmFyeTogKGNhbmRpZGF0ZXMpID0+IHtcblx0XHRcdHJldHVybiBlbGVjdChjYW5kaWRhdGVzLCB3Z1VzZXJWYXJpYW50ID8/IHdnQ29udGVudExhbmd1YWdlKTtcblx0XHR9LFxuXHR9O1xuXG5cdHJldHVybiBpMThuTWV0aG9kcztcbn07XG5cbmV4cG9ydCB7aW5pdEkxOG5NZXRob2RzfTtcbiIsICJjb25zdCBpbml0U2hpbXMgPSAoaTE4bk1ldGhvZHM6IHR5cGVvZiBpbXBvcnQoJ2V4dC5nYWRnZXQuaTE4bicpKTogdm9pZCA9PiB7XG5cdGNvbnN0IHdnVVhTID0gKFxuXHRcdGhhbnM6IHVua25vd24sXG5cdFx0aGFudDogdW5rbm93bixcblx0XHRjbjogdW5rbm93bixcblx0XHR0dzogdW5rbm93bixcblx0XHRoazogdW5rbm93bixcblx0XHRzZzogdW5rbm93bixcblx0XHR6aDogdW5rbm93bixcblx0XHRtbzogdW5rbm93bixcblx0XHRteTogdW5rbm93bixcblx0XHRlbjogdW5rbm93bixcblx0XHRtZXRob2Q6ICdjb250ZW50JyB8ICdsb2NhbGl6ZScgfCAndmFyeSdcblx0KTogc3RyaW5nID0+IHtcblx0XHR6aCA9IFN0cmluZyh6aCA/PyBoYW5zID8/IGhhbnQgPz8gY24gPz8gdHcgPz8gaGsgPz8gc2cgPz8gbW8gPz8gbXkgPz8gZW4pO1xuXHRcdGhhbnMgPSBTdHJpbmcoaGFucyA/PyBjbiA/PyBzZyA/PyBteSA/PyB6aCk7XG5cdFx0aGFudCA9IFN0cmluZyhoYW50ID8/IHR3ID8/IGhrID8/IG1vID8/IHpoKTtcblx0XHRjbiA9IFN0cmluZyhjbiA/PyBoYW5zKTtcblx0XHRzZyA9IFN0cmluZyhzZyA/PyBoYW5zKTtcblx0XHR0dyA9IFN0cmluZyh0dyA/PyBoYW50KTtcblx0XHRoayA9IFN0cmluZyhoayA/PyBoYW50KTtcblx0XHRtbyA9IFN0cmluZyhtbyA/PyBoYW50KTtcblx0XHRteSA9IFN0cmluZyhteSA/PyBoYW50KTtcblx0XHRlbiA9IFN0cmluZyhlbiA/PyB6aCk7XG5cblx0XHRyZXR1cm4gaTE4bk1ldGhvZHNbbWV0aG9kXSh7XG5cdFx0XHRlbjogZW4gYXMgc3RyaW5nLFxuXHRcdFx0emg6IHpoIGFzIHN0cmluZyxcblx0XHRcdCd6aC1oYW5zJzogaGFucyBhcyBzdHJpbmcsXG5cdFx0XHQnemgtaGFudCc6IGhhbnQgYXMgc3RyaW5nLFxuXHRcdFx0J3poLWNuJzogY24gYXMgc3RyaW5nLFxuXHRcdFx0J3poLXR3JzogdHcgYXMgc3RyaW5nLFxuXHRcdFx0J3poLWhrJzogaGsgYXMgc3RyaW5nLFxuXHRcdFx0J3poLXNnJzogc2cgYXMgc3RyaW5nLFxuXHRcdFx0J3poLW1vJzogbW8gYXMgc3RyaW5nLFxuXHRcdFx0J3poLW15JzogbXkgYXMgc3RyaW5nLFxuXHRcdH0pO1xuXHR9O1xuXG5cdHdpbmRvdy53Z1VDUyA9IChoYW5zLCBoYW50LCBjbiwgdHcsIGhrLCBzZywgemgsIG1vLCBteSwgZW4pID0+IHtcblx0XHRyZXR1cm4gd2dVWFMoaGFucywgaGFudCwgY24sIHR3LCBoaywgc2csIHpoLCBtbywgbXksIGVuLCAnY29udGVudCcpO1xuXHR9O1xuXHR3aW5kb3cud2dVTFMgPSAoaGFucywgaGFudCwgY24sIHR3LCBoaywgc2csIHpoLCBtbywgbXksIGVuKSA9PiB7XG5cdFx0cmV0dXJuIHdnVVhTKGhhbnMsIGhhbnQsIGNuLCB0dywgaGssIHNnLCB6aCwgbW8sIG15LCBlbiwgJ2xvY2FsaXplJyk7XG5cdH07XG5cdHdpbmRvdy53Z1VWUyA9IChoYW5zLCBoYW50LCBjbiwgdHcsIGhrLCBzZywgemgsIG1vLCBteSwgZW4pID0+IHtcblx0XHRyZXR1cm4gd2dVWFMoaGFucywgaGFudCwgY24sIHR3LCBoaywgc2csIHpoLCBtbywgbXksIGVuLCAndmFyeScpO1xuXHR9O1xufTtcblxuZXhwb3J0IHtpbml0U2hpbXN9O1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsZUFBQSxDQUFBO0FBQUFDLFNBQUFELGNBQUE7RUFBQUUsU0FBQUEsTUFBQUE7RUFBQUMsVUFBQUEsTUFBQUE7RUFBQUMsTUFBQUEsTUFBQUE7QUFBQSxDQUFBO0FBQUFDLE9BQUFDLFVBQUFDLGFBQUFQLFlBQUE7O0FDQ0MsSUFBQVEsc0JBQXVCO0FBQ3ZCLElBQUFDLGdCQUFpQjtFQUNoQkMsSUFBTSxDQUFDLE1BQU0sV0FBVyxXQUFXLFNBQVMsU0FBUyxTQUFTLFNBQVMsU0FBUyxPQUFPO0VBQ3ZGLFdBQVcsQ0FBQyxXQUFXLFNBQVMsU0FBUyxTQUFTLE1BQU0sV0FBVyxTQUFTLFNBQVMsT0FBTztFQUM1RixXQUFXLENBQUMsV0FBVyxTQUFTLFNBQVMsU0FBUyxNQUFNLFdBQVcsU0FBUyxTQUFTLE9BQU87RUFDNUYsU0FBUyxDQUFDLFNBQVMsV0FBVyxTQUFTLFNBQVMsTUFBTSxXQUFXLFNBQVMsU0FBUyxPQUFPO0VBQzFGLFNBQVMsQ0FBQyxTQUFTLFdBQVcsU0FBUyxTQUFTLE1BQU0sV0FBVyxTQUFTLFNBQVMsT0FBTztFQUMxRixTQUFTLENBQUMsU0FBUyxXQUFXLFNBQVMsU0FBUyxNQUFNLFdBQVcsU0FBUyxTQUFTLE9BQU87RUFDMUYsU0FBUyxDQUFDLFNBQVMsV0FBVyxTQUFTLFNBQVMs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QUFJQyxJQUFJQyxJQUFJMUQsSUFBSTJELElBQUlDLElBQUlDLElBQUksU0FBUztFQUNuRTtBQUNBMkIsU0FBT0UsUUFBUSxDQUFDckMsTUFBTUMsTUFBTUMsSUFBSUMsSUFBSUMsSUFBSUMsSUFBSTFELElBQUkyRCxJQUFJQyxJQUFJQyxPQUFPO0FBQzlELFdBQU9ULE1BQU1DLE1BQU1DLE1BQU1DLElBQUlDLElBQUlDLElBQUlDLElBQUkxRCxJQUFJMkQsSUFBSUMsSUFBSUMsSUFBSSxVQUFVO0VBQ3BFO0FBQ0EyQixTQUFPRyxRQUFRLENBQUN0QyxNQUFNQyxNQUFNQyxJQUFJQyxJQUFJQyxJQUFJQyxJQUFJMUQsSUFBSTJELElBQUlDLElBQUlDLE9BQU87QUFDOUQsV0FBT1QsTUFBTUMsTUFBTUMsTUFBTUMsSUFBSUMsSUFBSUMsSUFBSUMsSUFBSTFELElBQUkyRCxJQUFJQyxJQUFJQyxJQUFJLE1BQU07RUFDaEU7QUFDRDs7QUw3Q0EsSUFBTStCLGNBQWtEbEUsZ0JBQWdCO0FBQ3hFeUIsVUFBVXlDLFdBQVc7QUFFZCxJQUFNO0VBQUNwRztFQUFTQztFQUFVQztBQUFJLElBQUlrRztBQUV6Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLAogICJuYW1lcyI6IFsiaTE4bl9leHBvcnRzIiwgIl9fZXhwb3J0IiwgImNvbnRlbnQiLCAibG9jYWxpemUiLCAidmFyeSIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJfX3RvQ29tbW9uSlMiLCAiZGVmYXVsdExhbmd1YWdlQ29kZSIsICJmYWxsYmFja1RhYmxlIiwgInpoIiwgImdlbmVyYXRlTGFuZ3VhZ2VDb2RlU3BsaXRBcnJheSIsICJvcmlnaW5MYW5ndWFnZUNvZGUiLCAibGFuZ3VhZ2VDb2RlU3BsaXRBcnJheSIsICJzcGxpdCIsICJtYXAiLCAidmFsdWUiLCAidG9Mb3dlckNhc2UiLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAicmVxdWlyZSIsICJnZW5lcmF0ZURlZmF1bHRGYWxsYmFja0xpc3QiLCAiZG9jdW1lbnRMYW5ndWFnZVNwbGl0QXJyYXkiLCAiZG9jdW1lbnQiLCAiZG9jdW1lbnRFbGVtZW50IiwgImxhbmciLCAibmF2aWdhdG9yTGFuZ3VhZ2VTcGxpdEFycmF5IiwgIm5hdmlnYXRvciIsICJsYW5ndWFnZSIsICJsYW5ndWFnZUNvZGUiLCAiX2kiLCAiX2FyciIsICJsZW5ndGgiLCAiY29uY2F0IiwgImlzVmFsaWRLZXkiLCAiU2V0IiwgImltcG9ydF9leHRfZ2FkZ2V0MiIsICJpbml0STE4bk1ldGhvZHMiLCAiZGVmYXVsdEZhbGxiYWNrTGlzdCIsICJlbGVjdCIsICJjYW5kaWRhdGVzIiwgImxvY2FsZSIsICJmYWxsYmFja0xpc3QiLCAiX2kyIiwgIl9hcnIyIiwgImtleSIsICJfaXRlcmF0b3IyIiwgIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwgIl9zdGVwMiIsICJzIiwgIm4iLCAiZG9uZSIsICJlcnIiLCAiZSIsICJmIiwgIndnQ29udGVudExhbmd1YWdlIiwgIndnVXNlckxhbmd1YWdlIiwgIndnVXNlclZhcmlhbnQiLCAibXciLCAiY29uZmlnIiwgImdldCIsICJpMThuTWV0aG9kczIiLCAiaW5pdFNoaW1zIiwgIndnVVhTIiwgImhhbnMiLCAiaGFudCIsICJjbiIsICJ0dyIsICJoayIsICJzZyIsICJtbyIsICJteSIsICJlbiIsICJtZXRob2QiLCAiX3JlZiIsICJfcmVmMiIsICJfcmVmMyIsICJfcmVmNCIsICJfcmVmNSIsICJfcmVmNiIsICJfcmVmNyIsICJfcmVmOCIsICJfemgiLCAiX3JlZjkiLCAiX3JlZjEwIiwgIl9yZWYxMSIsICJfaGFucyIsICJfcmVmMTIiLCAiX3JlZjEzIiwgIl9yZWYxNCIsICJfaGFudCIsICJfY24iLCAiX3NnIiwgIl90dyIsICJfaGsiLCAiX21vIiwgIl9teSIsICJfZW4iLCAiU3RyaW5nIiwgIndpbmRvdyIsICJ3Z1VDUyIsICJ3Z1VMUyIsICJ3Z1VWUyIsICJpMThuTWV0aG9kcyJdCn0K

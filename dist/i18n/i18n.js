/**
 * SPDX-License-Identifier: GPL-3.0-or-later
 * _addText: '{{Gadget Header|license=GPL-3.0-or-later}}'
 *
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/i18n}
 * @author 安忆 <i@anyi.in>
 * @license GPL-3.0-or-later {@link https://www.qiuwenbaike.cn/wiki/H:GPL-3.0}
 */

/**
 * Copyright (C)  安忆
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
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
function _createForOfIteratorHelper(r, e) {
  var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (!t) {
    if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) {
      t && (r = t);
      var n = 0, F = function() {
      };
      return { s: F, n: function() {
        return n >= r.length ? { done: true } : { done: false, value: r[n++] };
      }, e: function(r2) {
        throw r2;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var o, a = true, u = false;
  return { s: function() {
    t = t.call(r);
  }, n: function() {
    var r2 = t.next();
    return a = r2.done, r2;
  }, e: function(r2) {
    u = true, o = r2;
  }, f: function() {
    try {
      a || null == t.return || t.return();
    } finally {
      if (u) throw o;
    }
  } };
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}
function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all) __defProp(target, name, {
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
        if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
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
//! src/i18n/modules/util/isValidKey.ts
var isValidKey = (object, key) => {
  return key in object;
};
//! src/i18n/modules/util/generateDefaultFallbackList.ts
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
    if (isValidKey(fallbackTable, languageCode)) {
      break;
    }
  }
  return [.../* @__PURE__ */ new Set([languageCode, defaultLanguageCode])];
};
//! src/i18n/modules/initI18nMethods.ts
var initI18nMethods = () => {
  const defaultFallbackList = generateDefaultFallbackList();
  const elect = (candidates, locale) => {
    let fallbackList = defaultFallbackList;
    for (var _i2 = 0, _arr2 = [locale, ...fallbackList]; _i2 < _arr2.length; _i2++) {
      const key = _arr2[_i2];
      if (isValidKey(fallbackTable, key)) {
        fallbackList = fallbackTable[key];
        break;
      }
    }
    var _iterator2 = _createForOfIteratorHelper(/* @__PURE__ */ new Set([locale, ...fallbackList, ...defaultFallbackList])), _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
        const key = _step2.value;
        if (isValidKey(candidates, key)) {
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
    var _ref, _ref2, _ref3, _ref4, _ref5, _ref6, _ref7, _ref8, _ref9, _ref0, _ref1, _ref10, _ref11, _ref12;
    zh = String((_ref = (_ref2 = (_ref3 = (_ref4 = (_ref5 = (_ref6 = (_ref7 = (_ref8 = zh !== null && zh !== void 0 ? zh : hans) !== null && _ref8 !== void 0 ? _ref8 : hant) !== null && _ref7 !== void 0 ? _ref7 : cn) !== null && _ref6 !== void 0 ? _ref6 : tw) !== null && _ref5 !== void 0 ? _ref5 : hk) !== null && _ref4 !== void 0 ? _ref4 : sg) !== null && _ref3 !== void 0 ? _ref3 : mo) !== null && _ref2 !== void 0 ? _ref2 : my) !== null && _ref !== void 0 ? _ref : en);
    hans = String((_ref9 = (_ref0 = (_ref1 = hans !== null && hans !== void 0 ? hans : cn) !== null && _ref1 !== void 0 ? _ref1 : sg) !== null && _ref0 !== void 0 ? _ref0 : my) !== null && _ref9 !== void 0 ? _ref9 : zh);
    hant = String((_ref10 = (_ref11 = (_ref12 = hant !== null && hant !== void 0 ? hant : tw) !== null && _ref12 !== void 0 ? _ref12 : hk) !== null && _ref11 !== void 0 ? _ref11 : mo) !== null && _ref10 !== void 0 ? _ref10 : zh);
    cn = String(cn !== null && cn !== void 0 ? cn : hans);
    sg = String(sg !== null && sg !== void 0 ? sg : hans);
    tw = String(tw !== null && tw !== void 0 ? tw : hant);
    hk = String(hk !== null && hk !== void 0 ? hk : hant);
    mo = String(mo !== null && mo !== void 0 ? mo : hant);
    my = String(my !== null && my !== void 0 ? my : hant);
    en = String(en !== null && en !== void 0 ? en : zh);
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2kxOG4vaTE4bi50cyIsICJzcmMvaTE4bi9vcHRpb25zLmpzb24iLCAic3JjL2kxOG4vbW9kdWxlcy91dGlsL2dlbmVyYXRlTGFuZ3VhZ2VDb2RlU3BsaXRBcnJheS50cyIsICJzcmMvaTE4bi9tb2R1bGVzL3V0aWwvaXNWYWxpZEtleS50cyIsICJzcmMvaTE4bi9tb2R1bGVzL3V0aWwvZ2VuZXJhdGVEZWZhdWx0RmFsbGJhY2tMaXN0LnRzIiwgInNyYy9pMThuL21vZHVsZXMvaW5pdEkxOG5NZXRob2RzLnRzIiwgInNyYy9pMThuL21vZHVsZXMvaW5pdFNoaW1zLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQge2luaXRJMThuTWV0aG9kc30gZnJvbSAnLi9tb2R1bGVzL2luaXRJMThuTWV0aG9kcyc7XG5pbXBvcnQge2luaXRTaGltc30gZnJvbSAnLi9tb2R1bGVzL2luaXRTaGltcyc7XG5cbmNvbnN0IGkxOG5NZXRob2RzOiBSZXR1cm5UeXBlPHR5cGVvZiBpbml0STE4bk1ldGhvZHM+ID0gaW5pdEkxOG5NZXRob2RzKCk7XG5pbml0U2hpbXMoaTE4bk1ldGhvZHMpO1xuXG5leHBvcnQgY29uc3Qge2NvbnRlbnQsIGxvY2FsaXplLCB2YXJ5fSA9IGkxOG5NZXRob2RzO1xuXG4vKiFcbi8vIOS7k+W6k+WGheeUqOazlVxuXHQvLyDlrprkuYnlpJrmnaHmtojmga9cblx0Ly8g5pSv5oyB5aSa6K+t6KiA77yM5Y+v6YCJ5YC85a6a5LmJ5ZyobW9kdWxlcy90eXBlcy5kLnRzI0wtMe+8jOWPr+ebtOaOpea3u+WKoOWFtuS7luWAvO+8iFJGQyA1NjQ277yJXG5cdGltcG9ydCB7Y29udGVudCwgbG9jYWxpemUsIHZhcnl9IGZyb20gJ2V4dC5nYWRnZXQuaTE4bic7XG5cdGNvbnN0IGdldEkxOG5NZXNzYWdlcyA9ICgpID0+IHtcblx0XHQvLyBpMThu55qE5LiJ5Liq5pa55rOV5Lya5Yy56YWN5b2T5YmN6K+t6KiA5ZKM5a6D5omA5o6l5pS25a+56LGh5Lit55qE6ZSu77yM5a+55LqObG9jYWxpemXmnaXor7TvvIzlgYforr7lt7LlrprkuYl6aOOAgWVu5ZKMamHvvIzliJlcblx0XHQvLyAgIOW9k+mhtemdouivreiogO+8iHdnVXNlckxhbmd1YWdlID8/IHdnQ29udGVudExhbmd1YWdl77yJ5Li65Lit5paHL+iLseivrS/ml6Xor63ml7bvvIzov5Tlm57pobXpnaLor63oqIDmiYDlr7nlupTnmoTlgLxcblx0XHQvLyAgIOW9k+mhtemdouivreiogOS4uuazleivre+8jOa1j+iniOWZqOivreiogOS4uuS4reaWhy/oi7Hor60v5pel6K+t5pe277yM6L+U5Zue5rWP6KeI5Zmo6K+t6KiA5omA5a+55bqU55qE5YC8XG5cdFx0Ly8gICDlvZPpobXpnaLor63oqIDkuLrms5Xor63vvIzkuJTkuI3lrZjlnKjmtY/op4jlmajor63oqIDmiYDlr7nlupTnmoTplK7vvIzov5Tlm55MLTI15a6a5LmJ55qE6ZSu5omA5a+55bqU55qE5YC844CC6Iul5q2k6ZSu5ZCM5qC35rKh6KKr5a6a5LmJ77yM5YiZ6L+U5Zue56m65a2X56ym5LiyXG5cdFx0cmV0dXJuIHtcblx0XHRcdENhbmNlbDogY29udGVudCh7XG5cdFx0XHRcdGVuOiAnQ2FuY2VsJyxcblx0XHRcdFx0amE6ICfjgq3jg6Pjg7Pjgrvjg6snLFxuXHRcdFx0XHR6aDogJ+WPlua2iCcsXG5cdFx0XHR9KSxcblx0XHRcdFFpdVdlbjogbG9jYWxpemUoe1xuXHRcdFx0XHRlbjogJ1FpdVdlbicsXG5cdFx0XHRcdGphOiAn44Gh44KF44GG44GG44KTJyxcblx0XHRcdFx0J3poLWNuJzogJ+axgumXuycsXG5cdFx0XHRcdCd6aC1oayc6ICfmsYLogZ4nLFxuXHRcdFx0fSksXG5cdFx0XHRMb25nVGV4dDogdmFyeSh7XG5cdFx0XHRcdGVuOiAnVGhpcyBpcyBhIHZlcnkgbG9uZyB0ZXh0Jyxcblx0XHRcdFx0amE6ICfjgZPjgozjga/pnZ7luLjjgavplbfjgYTjg4bjgq3jgrnjg4jjgafjgZknLFxuXHRcdFx0XHQnemgtaGFucyc6ICfov5nmmK/kuIDmrrXpnZ7luLjplb/nmoTmlofmnKwnLFxuXHRcdFx0XHQnemgtaGFudCc6ICfpgJnmmK/kuIDmrrXpnZ7luLjplbfnmoTmloflrZcnLFxuXHRcdFx0fSksXG5cdFx0fTtcblx0fTtcblx0Y29uc3QgaTE4bk1lc3NhZ2VzID0gZ2V0STE4bk1lc3NhZ2VzKCk7XG5cdGNvbnN0IGdldE1lc3NhZ2U6IEdldE1lc3NhZ2VzPHR5cGVvZiBpMThuTWVzc2FnZXM+ID0gKGtleSkgPT4ge1xuXHRcdHJldHVybiBpMThuTWVzc2FnZXNba2V5XSB8fCBrZXk7XG5cdH07XG5cdC8vIOiwg+eUqFxuXHRnZXRNZXNzYWdlKCdDYW5jZWwnKTsgLy8gZW46IENhbmNlbCwgamE6IOOCreODo+ODs+OCu+ODqywgemg6IOWPlua2iCwgemgtaGFuczog5Y+W5raILCB6aC1oYW50OiDlj5bmtogsIHpoLWNuOiDlj5bmtogsIHpoLWhrOiDlj5bmtogsIHpoLXR3OiDlj5bmtohcblx0Z2V0TWVzc2FnZSgnUWl1V2VuJyk7IC8vIGVuOiBRaXVXZW4sIGphOiDjgaHjgoXjgYbjgYbjgpMsIHpoOiDmsYLpl7ssIHpoLWhhbnM6IOaxgumXuywgemgtaGFudDog5rGC6IGeLCB6aC1jbjog5rGC6Ze7LCB6aC1oazog5rGC6IGeLCB6aC10dzog5rGC6IGeXG5cdGdldE1lc3NhZ2UoJ0xvbmdUZXh0Jyk7XG5cdFx0Ly8gZW46IFRoaXMgaXMgYSB2ZXJ5IGxvbmcgdGV4dFxuXHRcdC8vIGphOiDjgZPjgozjga/pnZ7luLjjgavplbfjgYTjg4bjgq3jgrnjg4jjgafjgZlcblx0XHQvLyB6aDog6L+Z5piv5LiA5q616Z2e5bi46ZW/55qE5paH5pysXG5cdFx0Ly8gemgtaGFuczog6L+Z5piv5LiA5q616Z2e5bi46ZW/55qE5paH5pysXG5cdFx0Ly8gemgtaGFudDog6YCZ5piv5LiA5q616Z2e5bi46ZW355qE5paH5a2XXG5cdFx0Ly8gemgtY246IOi/meaYr+S4gOautemdnuW4uOmVv+eahOaWh+acrFxuXHRcdC8vIHpoLWhrOiDpgJnmmK/kuIDmrrXpnZ7luLjplbfnmoTmloflrZdcblx0XHQvLyB6aC10dzog6YCZ5piv5LiA5q616Z2e5bi46ZW355qE5paH5a2XXG5cblx0Ly8g55u05o6l6L2s5o2i5Y2V5p2h5raI5oGv77yI5LiN5o6o6I2Q77yM5LuF5Li65YW85a655oCn5L+d55WZ77yJXG5cdC8vIOS7heaUr+aMgeS8oOmAkuS4reaWh+WSjOiLseivreOAguWcqOmdnuS4reaWh+eOr+Wig+S4lOacquS8oOmAkuiLseivreaWh+acrOaXtu+8jOacgOe7iOi/lOWbnnpo55qE5YC8XG5cdHdnVUNTKCfmsYLpl7snLCAn5rGC6IGeJyk7IC8vIGVuOiDmsYLpl7ssIGphOiDmsYLpl7ssIHpoOiDmsYLpl7ssIHpoLWhhbnM6IOaxgumXuywgemgtaGFudDog5rGC6IGeLCB6aC1jbjog5rGC6Ze7LCB6aC1oazog5rGC6IGeLCB6aC10dzog5rGC6IGeXG5cdHdnVUxTKCfmsYLpl7snLCAn5rGC6IGeJyk7IC8vIGVuOiDmsYLpl7ssIGphOiDmsYLpl7ssIHpoOiDmsYLpl7ssIHpoLWhhbnM6IOaxgumXuywgemgtaGFudDog5rGC6IGeLCB6aC1jbjog5rGC6Ze7LCB6aC1oazog5rGC6IGeLCB6aC10dzog5rGC6IGeXG5cdHdnVVZTKCfmsYLpl7snLCAn5rGC6IGeJyk7IC8vIGVuOiDmsYLpl7ssIGphOiDmsYLpl7ssIHpoOiDmsYLpl7ssIHpoLWhhbnM6IOaxgumXuywgemgtaGFudDog5rGC6IGeLCB6aC1jbjog5rGC6Ze7LCB6aC1oazog5rGC6IGeLCB6aC10dzog5rGC6IGeXG5cblx0Ly8g6Z2eTWVkaWFXaWtp5ZG95ZCN56m66Ze055qE6ISa5pys5Y+v5Lul6YCa6L+HbXcubG9hZGVyLnVzaW5n5Yqg6L29ZXh0LmdhZGdldC5pMThu5qih5Z2XXG5cdG13LmxvYWRlci51c2luZygnZXh0LmdhZGdldC5pMThuJykudGhlbigocmVxdWlyZSkgPT4ge1xuXHRcdGNvbnN0IHtjb250ZW50LCBsb2NhbGl6ZSwgdmFyeX0gPSByZXF1aXJlKCdleHQuZ2FkZ2V0LmkxOG4nKTtcblx0fSk7XG4gKi9cbiIsICJ7XG5cdFwiZGVmYXVsdExhbmd1YWdlQ29kZVwiOiBcImVuXCIsXG5cdFwiZmFsbGJhY2tUYWJsZVwiOiB7XG5cdFx0XCJ6aFwiOiBbXCJ6aFwiLCBcInpoLWhhbnNcIiwgXCJ6aC1oYW50XCIsIFwiemgtY25cIiwgXCJ6aC10d1wiLCBcInpoLWhrXCIsIFwiemgtc2dcIiwgXCJ6aC1tb1wiLCBcInpoLW15XCJdLFxuXHRcdFwiemgtaGFuc1wiOiBbXCJ6aC1oYW5zXCIsIFwiemgtY25cIiwgXCJ6aC1zZ1wiLCBcInpoLW15XCIsIFwiemhcIiwgXCJ6aC1oYW50XCIsIFwiemgtdHdcIiwgXCJ6aC1oa1wiLCBcInpoLW1vXCJdLFxuXHRcdFwiemgtaGFudFwiOiBbXCJ6aC1oYW50XCIsIFwiemgtdHdcIiwgXCJ6aC1oa1wiLCBcInpoLW1vXCIsIFwiemhcIiwgXCJ6aC1oYW5zXCIsIFwiemgtY25cIiwgXCJ6aC1zZ1wiLCBcInpoLW15XCJdLFxuXHRcdFwiemgtY25cIjogW1wiemgtY25cIiwgXCJ6aC1oYW5zXCIsIFwiemgtc2dcIiwgXCJ6aC1teVwiLCBcInpoXCIsIFwiemgtaGFudFwiLCBcInpoLXR3XCIsIFwiemgtaGtcIiwgXCJ6aC1tb1wiXSxcblx0XHRcInpoLXNnXCI6IFtcInpoLXNnXCIsIFwiemgtaGFuc1wiLCBcInpoLWNuXCIsIFwiemgtbXlcIiwgXCJ6aFwiLCBcInpoLWhhbnRcIiwgXCJ6aC10d1wiLCBcInpoLWhrXCIsIFwiemgtbW9cIl0sXG5cdFx0XCJ6aC1teVwiOiBbXCJ6aC1teVwiLCBcInpoLWhhbnNcIiwgXCJ6aC1jblwiLCBcInpoLXNnXCIsIFwiemhcIiwgXCJ6aC1oYW50XCIsIFwiemgtdHdcIiwgXCJ6aC1oa1wiLCBcInpoLW1vXCJdLFxuXHRcdFwiemgtdHdcIjogW1wiemgtdHdcIiwgXCJ6aC1oYW50XCIsIFwiemgtaGtcIiwgXCJ6aC1tb1wiLCBcInpoXCIsIFwiemgtaGFuc1wiLCBcInpoLWNuXCIsIFwiemgtc2dcIiwgXCJ6aC1teVwiXSxcblx0XHRcInpoLWhrXCI6IFtcInpoLWhrXCIsIFwiemgtaGFudFwiLCBcInpoLW1vXCIsIFwiemgtdHdcIiwgXCJ6aFwiLCBcInpoLWhhbnNcIiwgXCJ6aC1jblwiLCBcInpoLXNnXCIsIFwiemgtbXlcIl0sXG5cdFx0XCJ6aC1tb1wiOiBbXCJ6aC1tb1wiLCBcInpoLWhhbnRcIiwgXCJ6aC1oa1wiLCBcInpoLXR3XCIsIFwiemhcIiwgXCJ6aC1oYW5zXCIsIFwiemgtY25cIiwgXCJ6aC1zZ1wiLCBcInpoLW15XCJdXG5cdH1cbn1cbiIsICJjb25zdCBnZW5lcmF0ZUxhbmd1YWdlQ29kZVNwbGl0QXJyYXkgPSAob3JpZ2luTGFuZ3VhZ2VDb2RlOiBzdHJpbmcpOiBzdHJpbmdbXSA9PiB7XG5cdGNvbnN0IGxhbmd1YWdlQ29kZVNwbGl0QXJyYXk6IHN0cmluZ1tdID0gb3JpZ2luTGFuZ3VhZ2VDb2RlLnNwbGl0KCctJykubWFwKCh2YWx1ZTogc3RyaW5nKTogc3RyaW5nID0+IHtcblx0XHRyZXR1cm4gdmFsdWUudG9Mb3dlckNhc2UoKTtcblx0fSk7XG5cblx0cmV0dXJuIGxhbmd1YWdlQ29kZVNwbGl0QXJyYXk7XG59O1xuXG5leHBvcnQge2dlbmVyYXRlTGFuZ3VhZ2VDb2RlU3BsaXRBcnJheX07XG4iLCAiY29uc3QgaXNWYWxpZEtleSA9IChvYmplY3Q6IG9iamVjdCwga2V5OiBzdHJpbmcgfCBudW1iZXIgfCBzeW1ib2wpOiBrZXkgaXMga2V5b2YgdHlwZW9mIG9iamVjdCA9PiB7XG5cdHJldHVybiBrZXkgaW4gb2JqZWN0O1xufTtcblxuZXhwb3J0IHtpc1ZhbGlkS2V5fTtcbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uLy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge2dlbmVyYXRlTGFuZ3VhZ2VDb2RlU3BsaXRBcnJheX0gZnJvbSAnLi9nZW5lcmF0ZUxhbmd1YWdlQ29kZVNwbGl0QXJyYXknO1xuaW1wb3J0IHtpc1ZhbGlkS2V5fSBmcm9tICcuL2lzVmFsaWRLZXknO1xuXG5jb25zdCBnZW5lcmF0ZURlZmF1bHRGYWxsYmFja0xpc3QgPSAoKTogc3RyaW5nW10gPT4ge1xuXHRjb25zdCBkb2N1bWVudExhbmd1YWdlU3BsaXRBcnJheTogc3RyaW5nW10gPSBnZW5lcmF0ZUxhbmd1YWdlQ29kZVNwbGl0QXJyYXkoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmxhbmcpO1xuXHRjb25zdCBuYXZpZ2F0b3JMYW5ndWFnZVNwbGl0QXJyYXk6IHN0cmluZ1tdID0gZ2VuZXJhdGVMYW5ndWFnZUNvZGVTcGxpdEFycmF5KG5hdmlnYXRvci5sYW5ndWFnZSk7XG5cblx0bGV0IGxhbmd1YWdlQ29kZTogc3RyaW5nID0gT1BUSU9OUy5kZWZhdWx0TGFuZ3VhZ2VDb2RlO1xuXHRmb3IgKGNvbnN0IGxhbmd1YWdlQ29kZVNwbGl0QXJyYXkgb2YgW2RvY3VtZW50TGFuZ3VhZ2VTcGxpdEFycmF5LCBuYXZpZ2F0b3JMYW5ndWFnZVNwbGl0QXJyYXldKSB7XG5cdFx0c3dpdGNoIChsYW5ndWFnZUNvZGVTcGxpdEFycmF5Lmxlbmd0aCkge1xuXHRcdFx0Y2FzZSAyOlxuXHRcdFx0XHRsYW5ndWFnZUNvZGUgPSBgJHtsYW5ndWFnZUNvZGVTcGxpdEFycmF5WzBdfS0ke2xhbmd1YWdlQ29kZVNwbGl0QXJyYXlbMV19YDtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIDM6XG5cdFx0XHRcdGxhbmd1YWdlQ29kZSA9IGAke2xhbmd1YWdlQ29kZVNwbGl0QXJyYXlbMF19LSR7bGFuZ3VhZ2VDb2RlU3BsaXRBcnJheVsyXX1gO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdGxhbmd1YWdlQ29kZSA9IGxhbmd1YWdlQ29kZVNwbGl0QXJyYXlbMF0gYXMgc3RyaW5nO1xuXHRcdFx0XHRicmVhaztcblx0XHR9XG5cdFx0aWYgKGlzVmFsaWRLZXkoT1BUSU9OUy5mYWxsYmFja1RhYmxlLCBsYW5ndWFnZUNvZGUpKSB7XG5cdFx0XHRicmVhaztcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gWy4uLm5ldyBTZXQoW2xhbmd1YWdlQ29kZSwgT1BUSU9OUy5kZWZhdWx0TGFuZ3VhZ2VDb2RlXSldO1xufTtcblxuZXhwb3J0IHtnZW5lcmF0ZURlZmF1bHRGYWxsYmFja0xpc3R9O1xuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB0eXBlIHtJMThuQ2FuZGlkYXRlc30gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQge2dlbmVyYXRlRGVmYXVsdEZhbGxiYWNrTGlzdH0gZnJvbSAnLi91dGlsL2dlbmVyYXRlRGVmYXVsdEZhbGxiYWNrTGlzdCc7XG5pbXBvcnQge2lzVmFsaWRLZXl9IGZyb20gJy4vdXRpbC9pc1ZhbGlkS2V5JztcblxuY29uc3QgaW5pdEkxOG5NZXRob2RzID0gKCk6IHR5cGVvZiBpMThuTWV0aG9kcyA9PiB7XG5cdGNvbnN0IGRlZmF1bHRGYWxsYmFja0xpc3Q6IHN0cmluZ1tdID0gZ2VuZXJhdGVEZWZhdWx0RmFsbGJhY2tMaXN0KCk7XG5cblx0Y29uc3QgZWxlY3QgPSAoY2FuZGlkYXRlczogSTE4bkNhbmRpZGF0ZXMsIGxvY2FsZTogc3RyaW5nKTogc3RyaW5nID0+IHtcblx0XHRsZXQgZmFsbGJhY2tMaXN0OiBzdHJpbmdbXSA9IGRlZmF1bHRGYWxsYmFja0xpc3Q7XG5cdFx0Zm9yIChjb25zdCBrZXkgb2YgW2xvY2FsZSwgLi4uZmFsbGJhY2tMaXN0XSkge1xuXHRcdFx0aWYgKGlzVmFsaWRLZXkoT1BUSU9OUy5mYWxsYmFja1RhYmxlLCBrZXkpKSB7XG5cdFx0XHRcdGZhbGxiYWNrTGlzdCA9IE9QVElPTlMuZmFsbGJhY2tUYWJsZVtrZXldO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHR9XG5cblx0XHRmb3IgKGNvbnN0IGtleSBvZiBuZXcgU2V0KFtsb2NhbGUsIC4uLmZhbGxiYWNrTGlzdCwgLi4uZGVmYXVsdEZhbGxiYWNrTGlzdF0pKSB7XG5cdFx0XHRpZiAoaXNWYWxpZEtleShjYW5kaWRhdGVzLCBrZXkpKSB7XG5cdFx0XHRcdHJldHVybiBjYW5kaWRhdGVzW2tleV07XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuICcnO1xuXHR9O1xuXG5cdGNvbnN0IHt3Z0NvbnRlbnRMYW5ndWFnZSwgd2dVc2VyTGFuZ3VhZ2UsIHdnVXNlclZhcmlhbnR9ID0gbXcuY29uZmlnLmdldCgpO1xuXG5cdGNvbnN0IGkxOG5NZXRob2RzOiB0eXBlb2YgaW1wb3J0KCdleHQuZ2FkZ2V0LmkxOG4nKSA9IHtcblx0XHRjb250ZW50OiAoY2FuZGlkYXRlcykgPT4ge1xuXHRcdFx0cmV0dXJuIGVsZWN0KGNhbmRpZGF0ZXMsIHdnQ29udGVudExhbmd1YWdlKTtcblx0XHR9LFxuXHRcdGxvY2FsaXplOiAoY2FuZGlkYXRlcykgPT4ge1xuXHRcdFx0cmV0dXJuIGVsZWN0KGNhbmRpZGF0ZXMsIHdnVXNlckxhbmd1YWdlKTtcblx0XHR9LFxuXHRcdHZhcnk6IChjYW5kaWRhdGVzKSA9PiB7XG5cdFx0XHRyZXR1cm4gZWxlY3QoY2FuZGlkYXRlcywgd2dVc2VyVmFyaWFudCA/PyB3Z0NvbnRlbnRMYW5ndWFnZSk7XG5cdFx0fSxcblx0fTtcblxuXHRyZXR1cm4gaTE4bk1ldGhvZHM7XG59O1xuXG5leHBvcnQge2luaXRJMThuTWV0aG9kc307XG4iLCAiY29uc3QgaW5pdFNoaW1zID0gKGkxOG5NZXRob2RzOiB0eXBlb2YgaW1wb3J0KCdleHQuZ2FkZ2V0LmkxOG4nKSk6IHZvaWQgPT4ge1xuXHRjb25zdCB3Z1VYUyA9IChcblx0XHRoYW5zOiB1bmtub3duLFxuXHRcdGhhbnQ6IHVua25vd24sXG5cdFx0Y246IHVua25vd24sXG5cdFx0dHc6IHVua25vd24sXG5cdFx0aGs6IHVua25vd24sXG5cdFx0c2c6IHVua25vd24sXG5cdFx0emg6IHVua25vd24sXG5cdFx0bW86IHVua25vd24sXG5cdFx0bXk6IHVua25vd24sXG5cdFx0ZW46IHVua25vd24sXG5cdFx0bWV0aG9kOiAnY29udGVudCcgfCAnbG9jYWxpemUnIHwgJ3ZhcnknXG5cdCk6IHN0cmluZyA9PiB7XG5cdFx0emggPSBTdHJpbmcoemggPz8gaGFucyA/PyBoYW50ID8/IGNuID8/IHR3ID8/IGhrID8/IHNnID8/IG1vID8/IG15ID8/IGVuKTtcblx0XHRoYW5zID0gU3RyaW5nKGhhbnMgPz8gY24gPz8gc2cgPz8gbXkgPz8gemgpO1xuXHRcdGhhbnQgPSBTdHJpbmcoaGFudCA/PyB0dyA/PyBoayA/PyBtbyA/PyB6aCk7XG5cdFx0Y24gPSBTdHJpbmcoY24gPz8gaGFucyk7XG5cdFx0c2cgPSBTdHJpbmcoc2cgPz8gaGFucyk7XG5cdFx0dHcgPSBTdHJpbmcodHcgPz8gaGFudCk7XG5cdFx0aGsgPSBTdHJpbmcoaGsgPz8gaGFudCk7XG5cdFx0bW8gPSBTdHJpbmcobW8gPz8gaGFudCk7XG5cdFx0bXkgPSBTdHJpbmcobXkgPz8gaGFudCk7XG5cdFx0ZW4gPSBTdHJpbmcoZW4gPz8gemgpO1xuXG5cdFx0cmV0dXJuIGkxOG5NZXRob2RzW21ldGhvZF0oe1xuXHRcdFx0ZW46IGVuIGFzIHN0cmluZyxcblx0XHRcdHpoOiB6aCBhcyBzdHJpbmcsXG5cdFx0XHQnemgtaGFucyc6IGhhbnMgYXMgc3RyaW5nLFxuXHRcdFx0J3poLWhhbnQnOiBoYW50IGFzIHN0cmluZyxcblx0XHRcdCd6aC1jbic6IGNuIGFzIHN0cmluZyxcblx0XHRcdCd6aC10dyc6IHR3IGFzIHN0cmluZyxcblx0XHRcdCd6aC1oayc6IGhrIGFzIHN0cmluZyxcblx0XHRcdCd6aC1zZyc6IHNnIGFzIHN0cmluZyxcblx0XHRcdCd6aC1tbyc6IG1vIGFzIHN0cmluZyxcblx0XHRcdCd6aC1teSc6IG15IGFzIHN0cmluZyxcblx0XHR9KTtcblx0fTtcblxuXHR3aW5kb3cud2dVQ1MgPSAoaGFucywgaGFudCwgY24sIHR3LCBoaywgc2csIHpoLCBtbywgbXksIGVuKSA9PiB7XG5cdFx0cmV0dXJuIHdnVVhTKGhhbnMsIGhhbnQsIGNuLCB0dywgaGssIHNnLCB6aCwgbW8sIG15LCBlbiwgJ2NvbnRlbnQnKTtcblx0fTtcblx0d2luZG93LndnVUxTID0gKGhhbnMsIGhhbnQsIGNuLCB0dywgaGssIHNnLCB6aCwgbW8sIG15LCBlbikgPT4ge1xuXHRcdHJldHVybiB3Z1VYUyhoYW5zLCBoYW50LCBjbiwgdHcsIGhrLCBzZywgemgsIG1vLCBteSwgZW4sICdsb2NhbGl6ZScpO1xuXHR9O1xuXHR3aW5kb3cud2dVVlMgPSAoaGFucywgaGFudCwgY24sIHR3LCBoaywgc2csIHpoLCBtbywgbXksIGVuKSA9PiB7XG5cdFx0cmV0dXJuIHdnVVhTKGhhbnMsIGhhbnQsIGNuLCB0dywgaGssIHNnLCB6aCwgbW8sIG15LCBlbiwgJ3ZhcnknKTtcblx0fTtcbn07XG5cbmV4cG9ydCB7aW5pdFNoaW1zfTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsZUFBQSxDQUFBO0FBQUFDLFNBQUFELGNBQUE7RUFBQUUsU0FBQUEsTUFBQUE7RUFBQUMsVUFBQUEsTUFBQUE7RUFBQUMsTUFBQUEsTUFBQUE7QUFBQSxDQUFBO0FBQUFDLE9BQUFDLFVBQUFDLGFBQUFQLFlBQUE7O0FDQ0MsSUFBQVEsc0JBQXVCO0FBQ3ZCLElBQUFDLGdCQUFpQjtFQUNoQkMsSUFBTSxDQUFDLE1BQU0sV0FBVyxXQUFXLFNBQVMsU0FBUyxTQUFTLFNBQVMsU0FBUyxPQUFPO0VBQ3ZGLFdBQVcsQ0FBQyxXQUFXLFNBQVMsU0FBUyxTQUFTLE1BQU0sV0FBVyxTQUFTLFNBQVMsT0FBTztFQUM1RixXQUFXLENBQUMsV0FBVyxTQUFTLFNBQVMsU0FBUyxNQUFNLFdBQVcsU0FBUyxTQUFTLE9BQU87RUFDNUYsU0FBUyxDQUFDLFNBQVMsV0FB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QU1DLE1BQU1DLE1BQU1DLElBQUlDLElBQUlDLElBQUlDLElBQUl4RCxJQUFJeUQsSUFBSUMsSUFBSUMsSUFBSSxTQUFTO0VBQ25FO0FBQ0FpQixTQUFPRSxRQUFRLENBQUMzQixNQUFNQyxNQUFNQyxJQUFJQyxJQUFJQyxJQUFJQyxJQUFJeEQsSUFBSXlELElBQUlDLElBQUlDLE9BQU87QUFDOUQsV0FBT1QsTUFBTUMsTUFBTUMsTUFBTUMsSUFBSUMsSUFBSUMsSUFBSUMsSUFBSXhELElBQUl5RCxJQUFJQyxJQUFJQyxJQUFJLFVBQVU7RUFDcEU7QUFDQWlCLFNBQU9HLFFBQVEsQ0FBQzVCLE1BQU1DLE1BQU1DLElBQUlDLElBQUlDLElBQUlDLElBQUl4RCxJQUFJeUQsSUFBSUMsSUFBSUMsT0FBTztBQUM5RCxXQUFPVCxNQUFNQyxNQUFNQyxNQUFNQyxJQUFJQyxJQUFJQyxJQUFJQyxJQUFJeEQsSUFBSXlELElBQUlDLElBQUlDLElBQUksTUFBTTtFQUNoRTtBQUNEOztBTjdDQSxJQUFNcUIsY0FBa0R2RCxnQkFBZ0I7QUFDeEV3QixVQUFVK0IsV0FBVztBQUVkLElBQU07RUFBQ3hGO0VBQVNDO0VBQVVDO0FBQUksSUFBSXNGO0FBRXpDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsCiAgIm5hbWVzIjogWyJpMThuX2V4cG9ydHMiLCAiX19leHBvcnQiLCAiY29udGVudCIsICJsb2NhbGl6ZSIsICJ2YXJ5IiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIl9fdG9Db21tb25KUyIsICJkZWZhdWx0TGFuZ3VhZ2VDb2RlIiwgImZhbGxiYWNrVGFibGUiLCAiemgiLCAiZ2VuZXJhdGVMYW5ndWFnZUNvZGVTcGxpdEFycmF5IiwgIm9yaWdpbkxhbmd1YWdlQ29kZSIsICJsYW5ndWFnZUNvZGVTcGxpdEFycmF5IiwgInNwbGl0IiwgIm1hcCIsICJ2YWx1ZSIsICJ0b0xvd2VyQ2FzZSIsICJpc1ZhbGlkS2V5IiwgIm9iamVjdCIsICJrZXkiLCAiZ2VuZXJhdGVEZWZhdWx0RmFsbGJhY2tMaXN0IiwgImRvY3VtZW50TGFuZ3VhZ2VTcGxpdEFycmF5IiwgImRvY3VtZW50IiwgImRvY3VtZW50RWxlbWVudCIsICJsYW5nIiwgIm5hdmlnYXRvckxhbmd1YWdlU3BsaXRBcnJheSIsICJuYXZpZ2F0b3IiLCAibGFuZ3VhZ2UiLCAibGFuZ3VhZ2VDb2RlIiwgIl9pIiwgIl9hcnIiLCAibGVuZ3RoIiwgImNvbmNhdCIsICJTZXQiLCAiaW5pdEkxOG5NZXRob2RzIiwgImRlZmF1bHRGYWxsYmFja0xpc3QiLCAiZWxlY3QiLCAiY2FuZGlkYXRlcyIsICJsb2NhbGUiLCAiZmFsbGJhY2tMaXN0IiwgIl9pMiIsICJfYXJyMiIsICJfaXRlcmF0b3IyIiwgIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwgIl9zdGVwMiIsICJzIiwgIm4iLCAiZG9uZSIsICJlcnIiLCAiZSIsICJmIiwgIndnQ29udGVudExhbmd1YWdlIiwgIndnVXNlckxhbmd1YWdlIiwgIndnVXNlclZhcmlhbnQiLCAibXciLCAiY29uZmlnIiwgImdldCIsICJpMThuTWV0aG9kczIiLCAiaW5pdFNoaW1zIiwgIndnVVhTIiwgImhhbnMiLCAiaGFudCIsICJjbiIsICJ0dyIsICJoayIsICJzZyIsICJtbyIsICJteSIsICJlbiIsICJtZXRob2QiLCAiX3JlZiIsICJfcmVmMiIsICJfcmVmMyIsICJfcmVmNCIsICJfcmVmNSIsICJfcmVmNiIsICJfcmVmNyIsICJfcmVmOCIsICJfcmVmOSIsICJfcmVmMCIsICJfcmVmMSIsICJfcmVmMTAiLCAiX3JlZjExIiwgIl9yZWYxMiIsICJTdHJpbmciLCAid2luZG93IiwgIndnVUNTIiwgIndnVUxTIiwgIndnVVZTIiwgImkxOG5NZXRob2RzIl0KfQo=

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
  vary: () => vary,
  wgUCS: () => wgUCS,
  wgULS: () => wgULS,
  wgUVS: () => wgUVS
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
  return Object.hasOwn(object, key);
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
  const fallbackLists = /* @__PURE__ */ new Map();
  const getFallbackList = (locale) => {
    const cachedFallbackList = fallbackLists.get(locale);
    if (cachedFallbackList) {
      return cachedFallbackList;
    }
    let fallbackList = defaultFallbackList;
    for (var _i2 = 0, _arr2 = [locale, ...fallbackList]; _i2 < _arr2.length; _i2++) {
      const key = _arr2[_i2];
      if (isValidKey(fallbackTable, key)) {
        fallbackList = fallbackTable[key];
        break;
      }
    }
    const resolvedFallbackList = [.../* @__PURE__ */ new Set([locale, ...fallbackList, ...defaultFallbackList])];
    fallbackLists.set(locale, resolvedFallbackList);
    return resolvedFallbackList;
  };
  const elect = (candidates, locale) => {
    var _iterator2 = _createForOfIteratorHelper(getFallbackList(locale)), _step2;
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
  const createShim = (method) => (...candidates) => {
    var _ref, _ref2, _ref3, _ref4, _ref5, _ref6, _ref7, _ref8, _ref9, _ref0, _ref1, _ref10, _ref11, _ref12;
    let [hans, hant, cn, tw, hk, sg, zh, mo, my, en] = candidates;
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
  const wgUCS2 = createShim("content");
  const wgULS2 = createShim("localize");
  const wgUVS2 = createShim("vary");
  window.wgUCS = wgUCS2;
  window.wgULS = wgULS2;
  window.wgUVS = wgUVS2;
  return {
    wgUCS: wgUCS2,
    wgULS: wgULS2,
    wgUVS: wgUVS2
  };
};
//! src/i18n/i18n.ts
var i18nMethods = initI18nMethods();
var i18nShimMethods = initShims(i18nMethods);
var {
  content,
  localize,
  vary,
  wgUCS,
  wgULS,
  wgUVS
} = {
  ...i18nMethods,
  ...i18nShimMethods
};
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2kxOG4vaTE4bi50cyIsICJzcmMvaTE4bi9vcHRpb25zLmpzb24iLCAic3JjL2kxOG4vbW9kdWxlcy91dGlsL2dlbmVyYXRlTGFuZ3VhZ2VDb2RlU3BsaXRBcnJheS50cyIsICJzcmMvaTE4bi9tb2R1bGVzL3V0aWwvaXNWYWxpZEtleS50cyIsICJzcmMvaTE4bi9tb2R1bGVzL3V0aWwvZ2VuZXJhdGVEZWZhdWx0RmFsbGJhY2tMaXN0LnRzIiwgInNyYy9pMThuL21vZHVsZXMvaW5pdEkxOG5NZXRob2RzLnRzIiwgInNyYy9pMThuL21vZHVsZXMvaW5pdFNoaW1zLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQge2luaXRJMThuTWV0aG9kc30gZnJvbSAnLi9tb2R1bGVzL2luaXRJMThuTWV0aG9kcyc7XG5pbXBvcnQge2luaXRTaGltc30gZnJvbSAnLi9tb2R1bGVzL2luaXRTaGltcyc7XG5cbmNvbnN0IGkxOG5NZXRob2RzOiBSZXR1cm5UeXBlPHR5cGVvZiBpbml0STE4bk1ldGhvZHM+ID0gaW5pdEkxOG5NZXRob2RzKCk7XG5jb25zdCBpMThuU2hpbU1ldGhvZHMgPSBpbml0U2hpbXMoaTE4bk1ldGhvZHMpO1xuXG5leHBvcnQgY29uc3Qge2NvbnRlbnQsIGxvY2FsaXplLCB2YXJ5LCB3Z1VDUywgd2dVTFMsIHdnVVZTfSA9IHsuLi5pMThuTWV0aG9kcywgLi4uaTE4blNoaW1NZXRob2RzfTtcblxuLyohXG4vLyDku5PlupPlhoXnlKjms5Vcblx0Ly8g5a6a5LmJ5aSa5p2h5raI5oGvXG5cdC8vIOaUr+aMgeWkmuivreiogO+8jOWPr+mAieWAvOWumuS5ieWcqG1vZHVsZXMvdHlwZXMuZC50cyNMLTHvvIzlj6/nm7TmjqXmt7vliqDlhbbku5blgLzvvIhSRkMgNTY0Nu+8iVxuXHRpbXBvcnQge2NvbnRlbnQsIGxvY2FsaXplLCB2YXJ5fSBmcm9tICdleHQuZ2FkZ2V0LmkxOG4nO1xuXHRjb25zdCBnZXRJMThuTWVzc2FnZXMgPSAoKSA9PiB7XG5cdFx0Ly8gaTE4bueahOS4ieS4quaWueazleS8muWMuemFjeW9k+WJjeivreiogOWSjOWug+aJgOaOpeaUtuWvueixoeS4reeahOmUru+8jOWvueS6jmxvY2FsaXpl5p2l6K+077yM5YGH6K6+5bey5a6a5LmJemjjgIFlbuWSjGph77yM5YiZXG5cdFx0Ly8gICDlvZPpobXpnaLor63oqIDvvIh3Z1VzZXJMYW5ndWFnZSA/PyB3Z0NvbnRlbnRMYW5ndWFnZe+8ieS4uuS4reaWhy/oi7Hor60v5pel6K+t5pe277yM6L+U5Zue6aG16Z2i6K+t6KiA5omA5a+55bqU55qE5YC8XG5cdFx0Ly8gICDlvZPpobXpnaLor63oqIDkuLrms5Xor63vvIzmtY/op4jlmajor63oqIDkuLrkuK3mlocv6Iux6K+tL+aXpeivreaXtu+8jOi/lOWbnua1j+iniOWZqOivreiogOaJgOWvueW6lOeahOWAvFxuXHRcdC8vICAg5b2T6aG16Z2i6K+t6KiA5Li65rOV6K+t77yM5LiU5LiN5a2Y5Zyo5rWP6KeI5Zmo6K+t6KiA5omA5a+55bqU55qE6ZSu77yM6L+U5ZueTC0yNeWumuS5ieeahOmUruaJgOWvueW6lOeahOWAvOOAguiLpeatpOmUruWQjOagt+ayoeiiq+WumuS5ie+8jOWImei/lOWbnuepuuWtl+espuS4slxuXHRcdHJldHVybiB7XG5cdFx0XHRDYW5jZWw6IGNvbnRlbnQoe1xuXHRcdFx0XHRlbjogJ0NhbmNlbCcsXG5cdFx0XHRcdGphOiAn44Kt44Oj44Oz44K744OrJyxcblx0XHRcdFx0emg6ICflj5bmtognLFxuXHRcdFx0fSksXG5cdFx0XHRRaXVXZW46IGxvY2FsaXplKHtcblx0XHRcdFx0ZW46ICdRaXVXZW4nLFxuXHRcdFx0XHRqYTogJ+OBoeOCheOBhuOBhuOCkycsXG5cdFx0XHRcdCd6aC1jbic6ICfmsYLpl7snLFxuXHRcdFx0XHQnemgtaGsnOiAn5rGC6IGeJyxcblx0XHRcdH0pLFxuXHRcdFx0TG9uZ1RleHQ6IHZhcnkoe1xuXHRcdFx0XHRlbjogJ1RoaXMgaXMgYSB2ZXJ5IGxvbmcgdGV4dCcsXG5cdFx0XHRcdGphOiAn44GT44KM44Gv6Z2e5bi444Gr6ZW344GE44OG44Kt44K544OI44Gn44GZJyxcblx0XHRcdFx0J3poLWhhbnMnOiAn6L+Z5piv5LiA5q616Z2e5bi46ZW/55qE5paH5pysJyxcblx0XHRcdFx0J3poLWhhbnQnOiAn6YCZ5piv5LiA5q616Z2e5bi46ZW355qE5paH5a2XJyxcblx0XHRcdH0pLFxuXHRcdH07XG5cdH07XG5cdGNvbnN0IGkxOG5NZXNzYWdlcyA9IGdldEkxOG5NZXNzYWdlcygpO1xuXHRjb25zdCBnZXRNZXNzYWdlOiBHZXRNZXNzYWdlczx0eXBlb2YgaTE4bk1lc3NhZ2VzPiA9IChrZXkpID0+IHtcblx0XHRyZXR1cm4gaTE4bk1lc3NhZ2VzW2tleV0gfHwga2V5O1xuXHR9O1xuXHQvLyDosIPnlKhcblx0Z2V0TWVzc2FnZSgnQ2FuY2VsJyk7IC8vIGVuOiBDYW5jZWwsIGphOiDjgq3jg6Pjg7Pjgrvjg6ssIHpoOiDlj5bmtogsIHpoLWhhbnM6IOWPlua2iCwgemgtaGFudDog5Y+W5raILCB6aC1jbjog5Y+W5raILCB6aC1oazog5Y+W5raILCB6aC10dzog5Y+W5raIXG5cdGdldE1lc3NhZ2UoJ1FpdVdlbicpOyAvLyBlbjogUWl1V2VuLCBqYTog44Gh44KF44GG44GG44KTLCB6aDog5rGC6Ze7LCB6aC1oYW5zOiDmsYLpl7ssIHpoLWhhbnQ6IOaxguiBniwgemgtY246IOaxgumXuywgemgtaGs6IOaxguiBniwgemgtdHc6IOaxguiBnlxuXHRnZXRNZXNzYWdlKCdMb25nVGV4dCcpO1xuXHRcdC8vIGVuOiBUaGlzIGlzIGEgdmVyeSBsb25nIHRleHRcblx0XHQvLyBqYTog44GT44KM44Gv6Z2e5bi444Gr6ZW344GE44OG44Kt44K544OI44Gn44GZXG5cdFx0Ly8gemg6IOi/meaYr+S4gOautemdnuW4uOmVv+eahOaWh+acrFxuXHRcdC8vIHpoLWhhbnM6IOi/meaYr+S4gOautemdnuW4uOmVv+eahOaWh+acrFxuXHRcdC8vIHpoLWhhbnQ6IOmAmeaYr+S4gOautemdnuW4uOmVt+eahOaWh+Wtl1xuXHRcdC8vIHpoLWNuOiDov5nmmK/kuIDmrrXpnZ7luLjplb/nmoTmlofmnKxcblx0XHQvLyB6aC1oazog6YCZ5piv5LiA5q616Z2e5bi46ZW355qE5paH5a2XXG5cdFx0Ly8gemgtdHc6IOmAmeaYr+S4gOautemdnuW4uOmVt+eahOaWh+Wtl1xuXG5cdC8vIOebtOaOpei9rOaNouWNleadoea2iOaBr++8iOS4jeaOqOiNkO+8jOS7heS4uuWFvOWuueaAp+S/neeVme+8iVxuXHQvLyDku4XmlK/mjIHkvKDpgJLkuK3mloflkozoi7Hor63jgILlnKjpnZ7kuK3mlofnjq/looPkuJTmnKrkvKDpgJLoi7Hor63mlofmnKzml7bvvIzmnIDnu4jov5Tlm556aOeahOWAvFxuXHR3Z1VDUygn5rGC6Ze7JywgJ+axguiBnicpOyAvLyBlbjog5rGC6Ze7LCBqYTog5rGC6Ze7LCB6aDog5rGC6Ze7LCB6aC1oYW5zOiDmsYLpl7ssIHpoLWhhbnQ6IOaxguiBniwgemgtY246IOaxgumXuywgemgtaGs6IOaxguiBniwgemgtdHc6IOaxguiBnlxuXHR3Z1VMUygn5rGC6Ze7JywgJ+axguiBnicpOyAvLyBlbjog5rGC6Ze7LCBqYTog5rGC6Ze7LCB6aDog5rGC6Ze7LCB6aC1oYW5zOiDmsYLpl7ssIHpoLWhhbnQ6IOaxguiBniwgemgtY246IOaxgumXuywgemgtaGs6IOaxguiBniwgemgtdHc6IOaxguiBnlxuXHR3Z1VWUygn5rGC6Ze7JywgJ+axguiBnicpOyAvLyBlbjog5rGC6Ze7LCBqYTog5rGC6Ze7LCB6aDog5rGC6Ze7LCB6aC1oYW5zOiDmsYLpl7ssIHpoLWhhbnQ6IOaxguiBniwgemgtY246IOaxgumXuywgemgtaGs6IOaxguiBniwgemgtdHc6IOaxguiBnlxuXG5cdC8vIOmdnk1lZGlhV2lraeWRveWQjeepuumXtOeahOiEmuacrOWPr+S7pemAmui/h213LmxvYWRlci51c2luZ+WKoOi9vWV4dC5nYWRnZXQuaTE4buaooeWdl1xuXHRtdy5sb2FkZXIudXNpbmcoJ2V4dC5nYWRnZXQuaTE4bicpLnRoZW4oKHJlcXVpcmUpID0+IHtcblx0XHRjb25zdCB7Y29udGVudCwgbG9jYWxpemUsIHZhcnl9ID0gcmVxdWlyZSgnZXh0LmdhZGdldC5pMThuJyk7XG5cdH0pO1xuICovXG4iLCAie1xuXHRcImRlZmF1bHRMYW5ndWFnZUNvZGVcIjogXCJlblwiLFxuXHRcImZhbGxiYWNrVGFibGVcIjoge1xuXHRcdFwiemhcIjogW1wiemhcIiwgXCJ6aC1oYW5zXCIsIFwiemgtaGFudFwiLCBcInpoLWNuXCIsIFwiemgtdHdcIiwgXCJ6aC1oa1wiLCBcInpoLXNnXCIsIFwiemgtbW9cIiwgXCJ6aC1teVwiXSxcblx0XHRcInpoLWhhbnNcIjogW1wiemgtaGFuc1wiLCBcInpoLWNuXCIsIFwiemgtc2dcIiwgXCJ6aC1teVwiLCBcInpoXCIsIFwiemgtaGFudFwiLCBcInpoLXR3XCIsIFwiemgtaGtcIiwgXCJ6aC1tb1wiXSxcblx0XHRcInpoLWhhbnRcIjogW1wiemgtaGFudFwiLCBcInpoLXR3XCIsIFwiemgtaGtcIiwgXCJ6aC1tb1wiLCBcInpoXCIsIFwiemgtaGFuc1wiLCBcInpoLWNuXCIsIFwiemgtc2dcIiwgXCJ6aC1teVwiXSxcblx0XHRcInpoLWNuXCI6IFtcInpoLWNuXCIsIFwiemgtaGFuc1wiLCBcInpoLXNnXCIsIFwiemgtbXlcIiwgXCJ6aFwiLCBcInpoLWhhbnRcIiwgXCJ6aC10d1wiLCBcInpoLWhrXCIsIFwiemgtbW9cIl0sXG5cdFx0XCJ6aC1zZ1wiOiBbXCJ6aC1zZ1wiLCBcInpoLWhhbnNcIiwgXCJ6aC1jblwiLCBcInpoLW15XCIsIFwiemhcIiwgXCJ6aC1oYW50XCIsIFwiemgtdHdcIiwgXCJ6aC1oa1wiLCBcInpoLW1vXCJdLFxuXHRcdFwiemgtbXlcIjogW1wiemgtbXlcIiwgXCJ6aC1oYW5zXCIsIFwiemgtY25cIiwgXCJ6aC1zZ1wiLCBcInpoXCIsIFwiemgtaGFudFwiLCBcInpoLXR3XCIsIFwiemgtaGtcIiwgXCJ6aC1tb1wiXSxcblx0XHRcInpoLXR3XCI6IFtcInpoLXR3XCIsIFwiemgtaGFudFwiLCBcInpoLWhrXCIsIFwiemgtbW9cIiwgXCJ6aFwiLCBcInpoLWhhbnNcIiwgXCJ6aC1jblwiLCBcInpoLXNnXCIsIFwiemgtbXlcIl0sXG5cdFx0XCJ6aC1oa1wiOiBbXCJ6aC1oa1wiLCBcInpoLWhhbnRcIiwgXCJ6aC1tb1wiLCBcInpoLXR3XCIsIFwiemhcIiwgXCJ6aC1oYW5zXCIsIFwiemgtY25cIiwgXCJ6aC1zZ1wiLCBcInpoLW15XCJdLFxuXHRcdFwiemgtbW9cIjogW1wiemgtbW9cIiwgXCJ6aC1oYW50XCIsIFwiemgtaGtcIiwgXCJ6aC10d1wiLCBcInpoXCIsIFwiemgtaGFuc1wiLCBcInpoLWNuXCIsIFwiemgtc2dcIiwgXCJ6aC1teVwiXVxuXHR9XG59XG4iLCAiY29uc3QgZ2VuZXJhdGVMYW5ndWFnZUNvZGVTcGxpdEFycmF5ID0gKG9yaWdpbkxhbmd1YWdlQ29kZTogc3RyaW5nKTogc3RyaW5nW10gPT4ge1xuXHRjb25zdCBsYW5ndWFnZUNvZGVTcGxpdEFycmF5OiBzdHJpbmdbXSA9IG9yaWdpbkxhbmd1YWdlQ29kZS5zcGxpdCgnLScpLm1hcCgodmFsdWU6IHN0cmluZyk6IHN0cmluZyA9PiB7XG5cdFx0cmV0dXJuIHZhbHVlLnRvTG93ZXJDYXNlKCk7XG5cdH0pO1xuXG5cdHJldHVybiBsYW5ndWFnZUNvZGVTcGxpdEFycmF5O1xufTtcblxuZXhwb3J0IHtnZW5lcmF0ZUxhbmd1YWdlQ29kZVNwbGl0QXJyYXl9O1xuIiwgImNvbnN0IGlzVmFsaWRLZXkgPSAob2JqZWN0OiBvYmplY3QsIGtleTogc3RyaW5nIHwgbnVtYmVyIHwgc3ltYm9sKToga2V5IGlzIGtleW9mIHR5cGVvZiBvYmplY3QgPT4ge1xuXHRyZXR1cm4gT2JqZWN0Lmhhc093bihvYmplY3QsIGtleSk7XG59O1xuXG5leHBvcnQge2lzVmFsaWRLZXl9O1xuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7Z2VuZXJhdGVMYW5ndWFnZUNvZGVTcGxpdEFycmF5fSBmcm9tICcuL2dlbmVyYXRlTGFuZ3VhZ2VDb2RlU3BsaXRBcnJheSc7XG5pbXBvcnQge2lzVmFsaWRLZXl9IGZyb20gJy4vaXNWYWxpZEtleSc7XG5cbmNvbnN0IGdlbmVyYXRlRGVmYXVsdEZhbGxiYWNrTGlzdCA9ICgpOiBzdHJpbmdbXSA9PiB7XG5cdGNvbnN0IGRvY3VtZW50TGFuZ3VhZ2VTcGxpdEFycmF5OiBzdHJpbmdbXSA9IGdlbmVyYXRlTGFuZ3VhZ2VDb2RlU3BsaXRBcnJheShkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQubGFuZyk7XG5cdGNvbnN0IG5hdmlnYXRvckxhbmd1YWdlU3BsaXRBcnJheTogc3RyaW5nW10gPSBnZW5lcmF0ZUxhbmd1YWdlQ29kZVNwbGl0QXJyYXkobmF2aWdhdG9yLmxhbmd1YWdlKTtcblxuXHRsZXQgbGFuZ3VhZ2VDb2RlOiBzdHJpbmcgPSBPUFRJT05TLmRlZmF1bHRMYW5ndWFnZUNvZGU7XG5cdGZvciAoY29uc3QgbGFuZ3VhZ2VDb2RlU3BsaXRBcnJheSBvZiBbZG9jdW1lbnRMYW5ndWFnZVNwbGl0QXJyYXksIG5hdmlnYXRvckxhbmd1YWdlU3BsaXRBcnJheV0pIHtcblx0XHRzd2l0Y2ggKGxhbmd1YWdlQ29kZVNwbGl0QXJyYXkubGVuZ3RoKSB7XG5cdFx0XHRjYXNlIDI6XG5cdFx0XHRcdGxhbmd1YWdlQ29kZSA9IGAke2xhbmd1YWdlQ29kZVNwbGl0QXJyYXlbMF19LSR7bGFuZ3VhZ2VDb2RlU3BsaXRBcnJheVsxXX1gO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgMzpcblx0XHRcdFx0bGFuZ3VhZ2VDb2RlID0gYCR7bGFuZ3VhZ2VDb2RlU3BsaXRBcnJheVswXX0tJHtsYW5ndWFnZUNvZGVTcGxpdEFycmF5WzJdfWA7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0bGFuZ3VhZ2VDb2RlID0gbGFuZ3VhZ2VDb2RlU3BsaXRBcnJheVswXSBhcyBzdHJpbmc7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblx0XHRpZiAoaXNWYWxpZEtleShPUFRJT05TLmZhbGxiYWNrVGFibGUsIGxhbmd1YWdlQ29kZSkpIHtcblx0XHRcdGJyZWFrO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBbLi4ubmV3IFNldChbbGFuZ3VhZ2VDb2RlLCBPUFRJT05TLmRlZmF1bHRMYW5ndWFnZUNvZGVdKV07XG59O1xuXG5leHBvcnQge2dlbmVyYXRlRGVmYXVsdEZhbGxiYWNrTGlzdH07XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHR5cGUge0kxOG5DYW5kaWRhdGVzfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7Z2VuZXJhdGVEZWZhdWx0RmFsbGJhY2tMaXN0fSBmcm9tICcuL3V0aWwvZ2VuZXJhdGVEZWZhdWx0RmFsbGJhY2tMaXN0JztcbmltcG9ydCB7aXNWYWxpZEtleX0gZnJvbSAnLi91dGlsL2lzVmFsaWRLZXknO1xuXG5jb25zdCBpbml0STE4bk1ldGhvZHMgPSAoKTogdHlwZW9mIGkxOG5NZXRob2RzID0+IHtcblx0Y29uc3QgZGVmYXVsdEZhbGxiYWNrTGlzdDogc3RyaW5nW10gPSBnZW5lcmF0ZURlZmF1bHRGYWxsYmFja0xpc3QoKTtcblx0Y29uc3QgZmFsbGJhY2tMaXN0cyA9IG5ldyBNYXA8c3RyaW5nLCBzdHJpbmdbXT4oKTtcblxuXHRjb25zdCBnZXRGYWxsYmFja0xpc3QgPSAobG9jYWxlOiBzdHJpbmcpOiBzdHJpbmdbXSA9PiB7XG5cdFx0Y29uc3QgY2FjaGVkRmFsbGJhY2tMaXN0ID0gZmFsbGJhY2tMaXN0cy5nZXQobG9jYWxlKTtcblx0XHRpZiAoY2FjaGVkRmFsbGJhY2tMaXN0KSB7XG5cdFx0XHRyZXR1cm4gY2FjaGVkRmFsbGJhY2tMaXN0O1xuXHRcdH1cblxuXHRcdGxldCBmYWxsYmFja0xpc3Q6IHN0cmluZ1tdID0gZGVmYXVsdEZhbGxiYWNrTGlzdDtcblx0XHRmb3IgKGNvbnN0IGtleSBvZiBbbG9jYWxlLCAuLi5mYWxsYmFja0xpc3RdKSB7XG5cdFx0XHRpZiAoaXNWYWxpZEtleShPUFRJT05TLmZhbGxiYWNrVGFibGUsIGtleSkpIHtcblx0XHRcdFx0ZmFsbGJhY2tMaXN0ID0gT1BUSU9OUy5mYWxsYmFja1RhYmxlW2tleV07XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGNvbnN0IHJlc29sdmVkRmFsbGJhY2tMaXN0ID0gWy4uLm5ldyBTZXQoW2xvY2FsZSwgLi4uZmFsbGJhY2tMaXN0LCAuLi5kZWZhdWx0RmFsbGJhY2tMaXN0XSldO1xuXHRcdGZhbGxiYWNrTGlzdHMuc2V0KGxvY2FsZSwgcmVzb2x2ZWRGYWxsYmFja0xpc3QpO1xuXHRcdHJldHVybiByZXNvbHZlZEZhbGxiYWNrTGlzdDtcblx0fTtcblxuXHRjb25zdCBlbGVjdCA9IChjYW5kaWRhdGVzOiBJMThuQ2FuZGlkYXRlcywgbG9jYWxlOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuXHRcdGZvciAoY29uc3Qga2V5IG9mIGdldEZhbGxiYWNrTGlzdChsb2NhbGUpKSB7XG5cdFx0XHRpZiAoaXNWYWxpZEtleShjYW5kaWRhdGVzLCBrZXkpKSB7XG5cdFx0XHRcdHJldHVybiBjYW5kaWRhdGVzW2tleV07XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuICcnO1xuXHR9O1xuXG5cdGNvbnN0IHt3Z0NvbnRlbnRMYW5ndWFnZSwgd2dVc2VyTGFuZ3VhZ2UsIHdnVXNlclZhcmlhbnR9ID0gbXcuY29uZmlnLmdldCgpO1xuXG5cdGNvbnN0IGkxOG5NZXRob2RzOiBQYXJ0aWFsPHR5cGVvZiBpbXBvcnQoJ2V4dC5nYWRnZXQuaTE4bicpPiA9IHtcblx0XHRjb250ZW50OiAoY2FuZGlkYXRlcykgPT4ge1xuXHRcdFx0cmV0dXJuIGVsZWN0KGNhbmRpZGF0ZXMsIHdnQ29udGVudExhbmd1YWdlKTtcblx0XHR9LFxuXHRcdGxvY2FsaXplOiAoY2FuZGlkYXRlcykgPT4ge1xuXHRcdFx0cmV0dXJuIGVsZWN0KGNhbmRpZGF0ZXMsIHdnVXNlckxhbmd1YWdlKTtcblx0XHR9LFxuXHRcdHZhcnk6IChjYW5kaWRhdGVzKSA9PiB7XG5cdFx0XHRyZXR1cm4gZWxlY3QoY2FuZGlkYXRlcywgd2dVc2VyVmFyaWFudCA/PyB3Z0NvbnRlbnRMYW5ndWFnZSk7XG5cdFx0fSxcblx0fTtcblxuXHRyZXR1cm4gaTE4bk1ldGhvZHM7XG59O1xuXG5leHBvcnQge2luaXRJMThuTWV0aG9kc307XG4iLCAiaW1wb3J0IHR5cGUge1dnVVhTQ2FuZGljYXRlc30gZnJvbSAnLi90eXBlcyc7XG5cbmNvbnN0IGluaXRTaGltcyA9IChpMThuTWV0aG9kczogdHlwZW9mIGltcG9ydCgnZXh0LmdhZGdldC5pMThuJykpOiBQYXJ0aWFsPHR5cGVvZiBpbXBvcnQoJ2V4dC5nYWRnZXQuaTE4bicpPiA9PiB7XG5cdGNvbnN0IGNyZWF0ZVNoaW0gPVxuXHRcdChtZXRob2Q6ICdjb250ZW50JyB8ICdsb2NhbGl6ZScgfCAndmFyeScpOiAoKC4uLmNhbmRpZGF0ZXM6IFdnVVhTQ2FuZGljYXRlcykgPT4gc3RyaW5nKSA9PlxuXHRcdCguLi5jYW5kaWRhdGVzKSA9PiB7XG5cdFx0XHRsZXQgW2hhbnMsIGhhbnQsIGNuLCB0dywgaGssIHNnLCB6aCwgbW8sIG15LCBlbl0gPSBjYW5kaWRhdGVzO1xuXHRcdFx0emggPSBTdHJpbmcoemggPz8gaGFucyA/PyBoYW50ID8/IGNuID8/IHR3ID8/IGhrID8/IHNnID8/IG1vID8/IG15ID8/IGVuKTtcblx0XHRcdGhhbnMgPSBTdHJpbmcoaGFucyA/PyBjbiA/PyBzZyA/PyBteSA/PyB6aCk7XG5cdFx0XHRoYW50ID0gU3RyaW5nKGhhbnQgPz8gdHcgPz8gaGsgPz8gbW8gPz8gemgpO1xuXHRcdFx0Y24gPSBTdHJpbmcoY24gPz8gaGFucyk7XG5cdFx0XHRzZyA9IFN0cmluZyhzZyA/PyBoYW5zKTtcblx0XHRcdHR3ID0gU3RyaW5nKHR3ID8/IGhhbnQpO1xuXHRcdFx0aGsgPSBTdHJpbmcoaGsgPz8gaGFudCk7XG5cdFx0XHRtbyA9IFN0cmluZyhtbyA/PyBoYW50KTtcblx0XHRcdG15ID0gU3RyaW5nKG15ID8/IGhhbnQpO1xuXHRcdFx0ZW4gPSBTdHJpbmcoZW4gPz8gemgpO1xuXG5cdFx0XHRyZXR1cm4gaTE4bk1ldGhvZHNbbWV0aG9kXSh7XG5cdFx0XHRcdGVuOiBlbiBhcyBzdHJpbmcsXG5cdFx0XHRcdHpoOiB6aCBhcyBzdHJpbmcsXG5cdFx0XHRcdCd6aC1oYW5zJzogaGFucyBhcyBzdHJpbmcsXG5cdFx0XHRcdCd6aC1oYW50JzogaGFudCBhcyBzdHJpbmcsXG5cdFx0XHRcdCd6aC1jbic6IGNuIGFzIHN0cmluZyxcblx0XHRcdFx0J3poLXR3JzogdHcgYXMgc3RyaW5nLFxuXHRcdFx0XHQnemgtaGsnOiBoayBhcyBzdHJpbmcsXG5cdFx0XHRcdCd6aC1zZyc6IHNnIGFzIHN0cmluZyxcblx0XHRcdFx0J3poLW1vJzogbW8gYXMgc3RyaW5nLFxuXHRcdFx0XHQnemgtbXknOiBteSBhcyBzdHJpbmcsXG5cdFx0XHR9KTtcblx0XHR9O1xuXG5cdGNvbnN0IHdnVUNTID0gY3JlYXRlU2hpbSgnY29udGVudCcpO1xuXHRjb25zdCB3Z1VMUyA9IGNyZWF0ZVNoaW0oJ2xvY2FsaXplJyk7XG5cdGNvbnN0IHdnVVZTID0gY3JlYXRlU2hpbSgndmFyeScpO1xuXG5cdHdpbmRvdy53Z1VDUyA9IHdnVUNTO1xuXHR3aW5kb3cud2dVTFMgPSB3Z1VMUztcblx0d2luZG93LndnVVZTID0gd2dVVlM7XG5cblx0cmV0dXJuIHt3Z1VDUywgd2dVTFMsIHdnVVZTfTtcbn07XG5cbmV4cG9ydCB7aW5pdFNoaW1zfTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEs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QU9DO0FBQUssSUFBSTtFQUFDLEdBQUc4RjtFQUFhLEdBQUdDO0FBQWU7QUFFakc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwKICAibmFtZXMiOiBbImkxOG5fZXhwb3J0cyIsICJfX2V4cG9ydCIsICJjb250ZW50IiwgImxvY2FsaXplIiwgInZhcnkiLCAid2dVQ1MiLCAid2dVTFMiLCAid2dVVlMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAiX190b0NvbW1vbkpTIiwgImRlZmF1bHRMYW5ndWFnZUNvZGUiLCAiZmFsbGJhY2tUYWJsZSIsICJ6aCIsICJnZW5lcmF0ZUxhbmd1YWdlQ29kZVNwbGl0QXJyYXkiLCAib3JpZ2luTGFuZ3VhZ2VDb2RlIiwgImxhbmd1YWdlQ29kZVNwbGl0QXJyYXkiLCAic3BsaXQiLCAibWFwIiwgInZhbHVlIiwgInRvTG93ZXJDYXNlIiwgImlzVmFsaWRLZXkiLCAib2JqZWN0IiwgImtleSIsICJPYmplY3QiLCAiaGFzT3duIiwgImdlbmVyYXRlRGVmYXVsdEZhbGxiYWNrTGlzdCIsICJkb2N1bWVudExhbmd1YWdlU3BsaXRBcnJheSIsICJkb2N1bWVudCIsICJkb2N1bWVudEVsZW1lbnQiLCAibGFuZyIsICJuYXZpZ2F0b3JMYW5ndWFnZVNwbGl0QXJyYXkiLCAibmF2aWdhdG9yIiwgImxhbmd1YWdlIiwgImxhbmd1YWdlQ29kZSIsICJfaSIsICJfYXJyIiwgImxlbmd0aCIsICJjb25jYXQiLCAiU2V0IiwgImluaXRJMThuTWV0aG9kcyIsICJkZWZhdWx0RmFsbGJhY2tMaXN0IiwgImZhbGxiYWNrTGlzdHMiLCAiTWFwIiwgImdldEZhbGxiYWNrTGlzdCIsICJsb2NhbGUiLCAiY2FjaGVkRmFsbGJhY2tMaXN0IiwgImdldCIsICJmYWxsYmFja0xpc3QiLCAiX2kyIiwgIl9hcnIyIiwgInJlc29sdmVkRmFsbGJhY2tMaXN0IiwgInNldCIsICJlbGVjdCIsICJjYW5kaWRhdGVzIiwgIl9pdGVyYXRvcjIiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAiX3N0ZXAyIiwgInMiLCAibiIsICJkb25lIiwgImVyciIsICJlIiwgImYiLCAid2dDb250ZW50TGFuZ3VhZ2UiLCAid2dVc2VyTGFuZ3VhZ2UiLCAid2dVc2VyVmFyaWFudCIsICJtdyIsICJjb25maWciLCAiaTE4bk1ldGhvZHMyIiwgImluaXRTaGltcyIsICJjcmVhdGVTaGltIiwgIm1ldGhvZCIsICJfcmVmIiwgIl9yZWYyIiwgIl9yZWYzIiwgIl9yZWY0IiwgIl9yZWY1IiwgIl9yZWY2IiwgIl9yZWY3IiwgIl9yZWY4IiwgIl9yZWY5IiwgIl9yZWYwIiwgIl9yZWYxIiwgIl9yZWYxMCIsICJfcmVmMTEiLCAiX3JlZjEyIiwgImhhbnMiLCAiaGFudCIsICJjbiIsICJ0dyIsICJoayIsICJzZyIsICJtbyIsICJteSIsICJlbiIsICJTdHJpbmciLCAid2dVQ1MyIiwgIndnVUxTMiIsICJ3Z1VWUzIiLCAid2luZG93IiwgImkxOG5NZXRob2RzIiwgImkxOG5TaGltTWV0aG9kcyJdCn0K

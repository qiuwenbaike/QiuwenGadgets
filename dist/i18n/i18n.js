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
    for (let key of __getOwnPropNames(from)) if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
      get: () => from[key],
      enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
    });
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
//! src/i18n/modules/util/isValidKey.ts
var isValidKey = (object, key) => {
  return Object.hasOwn(object, key);
};
//! src/i18n/options.json
var defaultLanguageCode = "en";
var fallbackGroups = {
  hans: ["zh-hans", "zh-cn", "zh-sg", "zh-my"],
  hant: ["zh-hant", "zh-tw", "zh-hk", "zh-mo"]
};
//! src/i18n/modules/util/generateFallbackTable.ts
var HANT_REGION_PEER = {
  "zh-hk": "zh-mo",
  "zh-mo": "zh-hk"
};
var ZH_ORDER = ["zh-hans", "zh-hant", "zh-cn", "zh-tw", "zh-hk", "zh-sg", "zh-mo", "zh-my"];
var generateFallbackTable = () => {
  const {
    hans,
    hant
  } = fallbackGroups;
  const table = {
    zh: ["zh", ...ZH_ORDER]
  };
  for (const [group, otherGroup] of [[hans, hant], [hant, hans]]) {
    const primary = group[0];
    for (const locale of group) {
      const peer = HANT_REGION_PEER[locale];
      const sameScript = peer && group.includes(peer) ? [locale, primary, peer, ...group.filter((name) => name !== locale && name !== peer && name !== primary)] : [locale, ...group.filter((name) => name !== locale)];
      table[locale] = [...sameScript, "zh", ...otherGroup];
    }
  }
  return table;
};
var fallbackTable = generateFallbackTable();
//! src/i18n/modules/util/resolveLocaleChain.ts
var splitLanguageCode = (languageCode) => {
  return languageCode.split("-").map((value) => value.toLowerCase());
};
var generateBrowserFallback = ({
  documentLanguage = document.documentElement.lang,
  navigatorLanguage = navigator.language
} = {}) => {
  const documentLanguageSplitArray = splitLanguageCode(documentLanguage);
  const navigatorLanguageSplitArray = splitLanguageCode(navigatorLanguage);
  let languageCode = defaultLanguageCode;
  for (const languageCodeSplitArray of [documentLanguageSplitArray, navigatorLanguageSplitArray]) {
    switch (languageCodeSplitArray.length) {
      case 2:
        languageCode = `${languageCodeSplitArray[0]}-${languageCodeSplitArray[1]}`;
        break;
      case 3:
        languageCode = `${languageCodeSplitArray[0]}-${languageCodeSplitArray[2]}`;
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
var resolveLocaleChain = (locale, environment = {}) => {
  const browserFallback = generateBrowserFallback(environment);
  let tableFallback = browserFallback;
  for (const key of [locale, ...browserFallback]) {
    if (isValidKey(fallbackTable, key)) {
      tableFallback = fallbackTable[key];
      break;
    }
  }
  return [.../* @__PURE__ */ new Set([locale, ...tableFallback, ...browserFallback])];
};
//! src/i18n/modules/initI18nMethods.ts
var initI18nMethods = () => {
  const fallbackLists = /* @__PURE__ */ new Map();
  const getFallbackList = (locale) => {
    const cachedFallbackList = fallbackLists.get(locale);
    if (cachedFallbackList) {
      return cachedFallbackList;
    }
    const resolvedFallbackList = resolveLocaleChain(locale);
    fallbackLists.set(locale, resolvedFallbackList);
    return resolvedFallbackList;
  };
  const elect = (candidates, locale) => {
    for (const key of getFallbackList(locale)) {
      if (isValidKey(candidates, key)) {
        return candidates[key];
      }
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
      return elect(candidates, wgUserVariant ?? wgContentLanguage);
    }
  };
  return i18nMethods2;
};
//! src/i18n/modules/initShims.ts
var toCandidates = (candidates) => {
  const [rawHans, rawHant, rawCn, rawTw, rawHk, rawSg, rawZh, rawMo, rawMy, rawEn] = candidates;
  const zh = String(rawZh ?? rawHans ?? rawHant ?? rawCn ?? rawTw ?? rawHk ?? rawSg ?? rawMo ?? rawMy ?? rawEn);
  const hans = String(rawHans ?? rawCn ?? rawSg ?? rawMy ?? zh);
  const hant = String(rawHant ?? rawTw ?? rawHk ?? rawMo ?? zh);
  const cn = String(rawCn ?? hans);
  const sg = String(rawSg ?? hans);
  const tw = String(rawTw ?? hant);
  const hk = String(rawHk ?? hant);
  const mo = String(rawMo ?? hant);
  const my = String(rawMy ?? hant);
  const en = String(rawEn ?? zh);
  return {
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
  };
};
var initShims = (i18nMethods2) => {
  const createShim = (method) => (...candidates) => {
    return i18nMethods2[method](toCandidates(candidates));
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

})();

/* </nowiki> */


/**
 * SPDX-License-Identifier: GPL-2.0-only
 * _addText: '{{Gadget Header|license=GPL-2.0-only}}'
 *
 * @base {@link https://github.com/wikimedia-gadgets/VariantAlly}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/VariantAlly}
 * @license GPL-2.0-only {@link https://www.qiuwenbaike.cn/wiki/H:GPLV2}
 */

/**
 * VariantAlly
 * Copyright (C) 2023-2024 Diskdance
 *
 * This program is free software; you can redistribute it and/or
 * modify it under the terms of the GNU General Public License
 * as published by the Free Software Foundation, version 2.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program; if not, write to the Free Software
 * Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.
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

// dist/VariantAlly/VariantAlly.js
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
//! src/VariantAlly/VariantAlly.ts
var VariantAlly_exports = {};
__export(VariantAlly_exports, {
  redirect: () => redirect,
  setLocalVariant: () => setLocalVariant,
  setOptOut: () => setOptOut
});
module.exports = __toCommonJS(VariantAlly_exports);
//! src/VariantAlly/modules/utils.ts
var BLOCKED_REFERRER_HOST = /^([a-z]+\.)?(bkwz\.cn|qwbk\.cc|qwbk\.org)$/i;
function isLoggedIn() {
  return mw.config.exists("wgUserId");
}
function isReferrerSelf() {
  try {
    return new URL(document.referrer).hostname === location.hostname;
  } catch {
    return false;
  }
}
function isReferrerBlocked() {
  try {
    return BLOCKED_REFERRER_HOST.test(new URL(document.referrer).hostname);
  } catch {
    return false;
  }
}
function isViewingPage() {
  return mw.config.get("wgAction") === "view";
}
function isLangChinese() {
  return mw.config.get("wgUserLanguage").startsWith("zh");
}
function isWikitextPage() {
  return mw.config.get("wgCanonicalNamespace") !== "Special" && mw.config.get("wgPageContentModel") === "wikitext";
}
//! src/VariantAlly/modules/model.ts
var LOCAL_VARIANT_KEY = "va-var";
var OPTOUT_KEY = "va-optout";
var VALID_VARIANTS = ["zh-cn", "zh-sg", "zh-my", "zh-tw", "zh-hk", "zh-mo"];
var VARIANTS = ["zh", "zh-hans", "zh-hant", ...VALID_VARIANTS];
var EXT_VARIANTS = ["zh-hans-cn", "zh-hans-sg", "zh-hans-my", "zh-hant-tw", "zh-hant-hk", "zh-hant-mo", ...VARIANTS];
var EXT_MAPPING = {
  "zh-hans-cn": "zh-cn",
  "zh-hans-sg": "zh-sg",
  "zh-hans-my": "zh-my",
  "zh-hant-tw": "zh-tw",
  "zh-hant-hk": "zh-hk",
  "zh-hant-mo": "zh-mo"
};
function isVariant(str) {
  return VARIANTS.includes(str);
}
function isValidVariant(str) {
  return VALID_VARIANTS.includes(str);
}
function isExtVariant(str) {
  return EXT_VARIANTS.includes(str);
}
function normalizeVariant(extVariant) {
  return EXT_MAPPING[extVariant] ?? extVariant;
}
function getPageVariant() {
  const result = mw.config.get("wgUserVariant");
  return result !== null && isExtVariant(result) ? normalizeVariant(result) : null;
}
function getAccountVariant() {
  if (isLoggedIn()) {
    const result = mw.user.options.get("variant");
    return isExtVariant(result) ? normalizeVariant(result) : null;
  }
  return null;
}
function getLocalVariant() {
  const result = mw.storage.get(LOCAL_VARIANT_KEY);
  if (result === null || !isExtVariant(result)) {
    return null;
  }
  return normalizeVariant(result);
}
function getBrowserVariant() {
  return navigator.languages.map((lang) => {
    return lang.toLowerCase();
  }).filter(isExtVariant).map(normalizeVariant).find(isVariant) ?? null;
}
function getMediaWikiVariant() {
  return getAccountVariant() ?? getBrowserVariant();
}
function calculatePreferredVariant() {
  return [getAccountVariant(), getBrowserVariant(), getLocalVariant()].map((variant) => {
    return variant !== null && isValidVariant(variant) ? variant : null;
  }).reduce((prev, curr) => {
    return prev ?? curr;
  });
}
function setLocalVariant(variant) {
  mw.storage.set(LOCAL_VARIANT_KEY, variant);
}
function setOptOut() {
  mw.storage.set(OPTOUT_KEY, "");
}
function isOptOuted() {
  return mw.storage.get(OPTOUT_KEY) !== null;
}
//! src/VariantAlly/modules/controller.ts
var REGEX_WIKI_URL = /^\/(?:wiki|zh(?:-\w+)?)\//i;
var REGEX_VARIANT_URL = /^\/zh(?:-\w+)?\//i;
var VARIANT_PARAM = "va-variant";
function isEligibleForRewriting(link) {
  try {
    if (link === "") {
      return false;
    }
    const url = new URL(link, location.origin);
    if (REGEX_VARIANT_URL.test(url.pathname)) {
      return false;
    }
    if (url.searchParams.has("variant")) {
      return false;
    }
    if (url.host !== location.host) {
      return false;
    }
    return true;
  } catch {
    return false;
  }
}
function rewriteLink(link, variant) {
  try {
    const normalizationTargetVariant = getMediaWikiVariant();
    const url = new URL(link, location.origin);
    const {
      pathname,
      searchParams
    } = url;
    if (REGEX_WIKI_URL.test(pathname)) {
      url.pathname = `/${variant}/${url.pathname.replace(REGEX_WIKI_URL, "")}`;
      searchParams.delete("variant");
    } else {
      searchParams.set("variant", variant);
    }
    if (variant === normalizationTargetVariant) {
      url.pathname = url.pathname.replace(REGEX_WIKI_URL, "/wiki/");
      url.searchParams.delete("variant");
    }
    const result = url.toString();
    return result;
  } catch {
    return link;
  }
}
function redirect(preferredVariant, options = {}) {
  const origLink = options.link ?? location.href;
  const newLink = rewriteLink(origLink, preferredVariant);
  if (options.forced || newLink !== location.href) {
    location.replace(newLink);
  }
}
function checkThisPage(preferredVariant, pageVariant) {
  if (pageVariant === preferredVariant) {
    return;
  }
  const redirectionOrigin = mw.config.get("wgRedirectedFrom");
  if (redirectionOrigin === null) {
    redirect(preferredVariant);
    return;
  }
  const redirectionURL = new URL(location.href);
  redirectionURL.pathname = `/wiki/${redirectionOrigin}`;
  redirect(preferredVariant, {
    link: redirectionURL.toString()
  });
}
function rewriteNavigation(variant) {
  for (const name of ["click", "auxclick", "dragstart"]) {
    document.addEventListener(name, (ev) => {
      const {
        target
      } = ev;
      if (target instanceof Element) {
        const anchor = target.closest('a[href]:not([href^="#"])');
        if (anchor !== null) {
          const origLink = anchor.href;
          if (!isEligibleForRewriting(origLink)) {
            return;
          }
          const newLink = rewriteLink(origLink, variant);
          if (newLink === origLink) {
            return;
          }
          if (window.DragEvent && ev instanceof DragEvent && ev.dataTransfer) {
            for (const type of ev.dataTransfer.types) {
              ev.dataTransfer.setData(type, newLink);
            }
          } else {
            if (anchor.dataset["vaMutex"] === void 0) {
              anchor.dataset["vaMutex"] = "";
            }
            anchor.href = newLink;
            for (const innerName of ["mouseover", "mouseleave", "keyup"]) {
              anchor.addEventListener(innerName, () => {
                if (anchor.dataset["vaMutex"] !== void 0) {
                  anchor.href = origLink;
                  delete anchor.dataset["vaMutex"];
                }
              }, {
                once: true
              });
            }
          }
        }
      }
    });
  }
  document.addEventListener("submit", (ev) => {
    const {
      target
    } = ev;
    if (target instanceof HTMLFormElement) {
      const submitUrl = target.getAttribute("action");
      if (submitUrl && isEligibleForRewriting(submitUrl)) {
        const method = target.getAttribute("method") ?? "get";
        if (method === "get") {
          for (const elem of target.querySelectorAll('input[name="variant"]')) elem.remove();
          const variantInput = document.createElement("input");
          variantInput.type = "hidden";
          variantInput.name = "variant";
          variantInput.value = variant;
          target.append(variantInput);
        } else {
          target.setAttribute("action", rewriteLink(submitUrl, variant));
        }
      }
    }
  });
}
function showVariantPrompt() {
  const moduleName = "ext.gadget.VariantAllyDialog";
  void mw.loader.using(moduleName, (require2) => {
    require2(moduleName);
  });
}
function applyURLVariant() {
  const variant = new URL(location.href).searchParams.get(VARIANT_PARAM);
  if (variant !== null && isValidVariant(variant)) {
    setLocalVariant(variant);
  }
}
//! src/VariantAlly/VariantAlly.ts
function main() {
  if (isOptOuted()) {
    return;
  }
  if (isLoggedIn()) {
    return;
  }
  if (!isLangChinese()) {
    return;
  }
  applyURLVariant();
  const preferredVariant = calculatePreferredVariant();
  if (preferredVariant !== null) {
    setLocalVariant(preferredVariant);
  }
  const pageVariant = getPageVariant();
  if (pageVariant === null || !isWikitextPage()) {
    if (preferredVariant !== null) {
      rewriteNavigation(preferredVariant);
    }
    return;
  }
  if (preferredVariant === null) {
    if (isViewingPage()) {
      showVariantPrompt();
      return;
    }
    return;
  }
  if (isReferrerBlocked()) {
    rewriteNavigation(preferredVariant);
    return;
  }
  if (isReferrerSelf() && !isEligibleForRewriting(location.href)) {
    rewriteNavigation(preferredVariant);
    return;
  }
  checkThisPage(preferredVariant, pageVariant);
  rewriteNavigation(preferredVariant);
}
main();

})();

/* </nowiki> */


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
  var _EXT_MAPPING$extVaria;
  return (_EXT_MAPPING$extVaria = EXT_MAPPING[extVariant]) !== null && _EXT_MAPPING$extVaria !== void 0 ? _EXT_MAPPING$extVaria : extVariant;
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
  var _navigator$languages$;
  return (_navigator$languages$ = navigator.languages.map((lang) => {
    return lang.toLowerCase();
  }).filter(isExtVariant).map(normalizeVariant).find(isVariant)) !== null && _navigator$languages$ !== void 0 ? _navigator$languages$ : null;
}
function getMediaWikiVariant() {
  var _getAccountVariant;
  return (_getAccountVariant = getAccountVariant()) !== null && _getAccountVariant !== void 0 ? _getAccountVariant : getBrowserVariant();
}
function calculatePreferredVariant() {
  return [getAccountVariant(), getBrowserVariant(), getLocalVariant()].map((variant) => {
    return variant !== null && isValidVariant(variant) ? variant : null;
  }).reduce((prev, curr) => {
    return prev !== null && prev !== void 0 ? prev : curr;
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
      url.pathname = "/".concat(variant, "/").concat(url.pathname.replace(REGEX_WIKI_URL, ""));
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
  var _options$link;
  const origLink = (_options$link = options.link) !== null && _options$link !== void 0 ? _options$link : location.href;
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
  redirectionURL.pathname = "/wiki/".concat(redirectionOrigin);
  redirect(preferredVariant, {
    link: redirectionURL.toString()
  });
}
function rewriteNavigation(variant) {
  for (var _i = 0, _arr = ["click", "auxclick", "dragstart"]; _i < _arr.length; _i++) {
    const name = _arr[_i];
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
            var _iterator2 = _createForOfIteratorHelper(ev.dataTransfer.types), _step2;
            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
                const type = _step2.value;
                ev.dataTransfer.setData(type, newLink);
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
          } else {
            if (anchor.dataset["vaMutex"] === void 0) {
              anchor.dataset["vaMutex"] = "";
            }
            anchor.href = newLink;
            for (var _i2 = 0, _arr2 = ["mouseover", "mouseleave", "keyup"]; _i2 < _arr2.length; _i2++) {
              const innerName = _arr2[_i2];
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
        var _target$getAttribute;
        const method = (_target$getAttribute = target.getAttribute("method")) !== null && _target$getAttribute !== void 0 ? _target$getAttribute : "get";
        if (method === "get") {
          var _iterator3 = _createForOfIteratorHelper(target.querySelectorAll('input[name="variant"]')), _step3;
          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
              const elem = _step3.value;
              elem.remove();
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1ZhcmlhbnRBbGx5L1ZhcmlhbnRBbGx5LnRzIiwgInNyYy9WYXJpYW50QWxseS9tb2R1bGVzL3V0aWxzLnRzIiwgInNyYy9WYXJpYW50QWxseS9tb2R1bGVzL21vZGVsLnRzIiwgInNyYy9WYXJpYW50QWxseS9tb2R1bGVzL2NvbnRyb2xsZXIudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7XG5cdGFwcGx5VVJMVmFyaWFudCxcblx0Y2hlY2tUaGlzUGFnZSxcblx0aXNFbGlnaWJsZUZvclJld3JpdGluZyxcblx0cmV3cml0ZU5hdmlnYXRpb24sXG5cdHNob3dWYXJpYW50UHJvbXB0LFxufSBmcm9tICcuL21vZHVsZXMvY29udHJvbGxlcic7XG5pbXBvcnQge2NhbGN1bGF0ZVByZWZlcnJlZFZhcmlhbnQsIGdldFBhZ2VWYXJpYW50LCBpc09wdE91dGVkLCBzZXRMb2NhbFZhcmlhbnR9IGZyb20gJy4vbW9kdWxlcy9tb2RlbCc7XG5pbXBvcnQge1xuXHRpc0xhbmdDaGluZXNlLFxuXHRpc0xvZ2dlZEluLFxuXHRpc1JlZmVycmVyQmxvY2tlZCxcblx0aXNSZWZlcnJlclNlbGYsXG5cdGlzVmlld2luZ1BhZ2UsXG5cdGlzV2lraXRleHRQYWdlLFxufSBmcm9tICcuL21vZHVsZXMvdXRpbHMnO1xuXG5mdW5jdGlvbiBtYWluKCkge1xuXHQvLyBNYW51YWxseSBvcHQgb3V0ZWQgdXNlcnNcblx0aWYgKGlzT3B0T3V0ZWQoKSkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGlmIChpc0xvZ2dlZEluKCkpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHQvLyBOb24tQ2hpbmVzZSBwYWdlcy91c2Vyc1xuXHRpZiAoIWlzTGFuZ0NoaW5lc2UoKSkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGFwcGx5VVJMVmFyaWFudCgpO1xuXG5cdGNvbnN0IHByZWZlcnJlZFZhcmlhbnQgPSBjYWxjdWxhdGVQcmVmZXJyZWRWYXJpYW50KCk7XG5cdGlmIChwcmVmZXJyZWRWYXJpYW50ICE9PSBudWxsKSB7XG5cdFx0Ly8gT3B0aW1pc3RpY2FsbHkgc2V0IGxvY2FsIHZhcmlhbnQgdG8gYmUgZXF1YWwgdG8gYnJvd3NlciB2YXJpYW50XG5cdFx0Ly8gSW4gY2FzZSB0aGUgdXNlcidzIGJyb3dzZXIgbGFuZ3VhZ2UgYmVjb21lcyBpbnZhbGlkIGluIHRoZSBmdXR1cmUsXG5cdFx0Ly8gdGhpcyByZWR1Y2VzIHRoZSBwb3NzaWJpbGl0eSB0byBzaG93IHByb21wdCB0byBkaXNydXB0IHVzZXJzLlxuXHRcdHNldExvY2FsVmFyaWFudChwcmVmZXJyZWRWYXJpYW50KTtcblx0fVxuXG5cdGNvbnN0IHBhZ2VWYXJpYW50ID0gZ2V0UGFnZVZhcmlhbnQoKTtcblxuXHQvLyBOb24tYXJ0aWNsZSBwYWdlIChKUy9DU1MgcGFnZXMsIFNwZWNpYWwgcGFnZXMgZXRjLilcblx0aWYgKHBhZ2VWYXJpYW50ID09PSBudWxsIHx8ICFpc1dpa2l0ZXh0UGFnZSgpKSB7XG5cdFx0Ly8gU3VjaCBwYWdlIGNhbid0IGhhdmUgdmFyaWFudCwgYnV0IHByZWZlcnJlZCB2YXJpYW50IG1heSBiZSBhdmFpbGFibGVcblx0XHQvLyBTbyBzdGlsbCByZXdyaXRlIGxpbmtzXG5cdFx0aWYgKHByZWZlcnJlZFZhcmlhbnQgIT09IG51bGwpIHtcblx0XHRcdHJld3JpdGVOYXZpZ2F0aW9uKHByZWZlcnJlZFZhcmlhbnQpO1xuXHRcdH1cblx0XHRyZXR1cm47XG5cdH1cblxuXHQvLyBQcmVmZXJyZWQgdmFyaWFudCB1bmF2YWlsYWJsZVxuXHRpZiAocHJlZmVycmVkVmFyaWFudCA9PT0gbnVsbCkge1xuXHRcdGlmIChpc1ZpZXdpbmdQYWdlKCkpIHtcblx0XHRcdHNob3dWYXJpYW50UHJvbXB0KCk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0aWYgKGlzUmVmZXJyZXJCbG9ja2VkKCkpIHtcblx0XHRyZXdyaXRlTmF2aWdhdGlvbihwcmVmZXJyZWRWYXJpYW50KTtcblx0XHRyZXR1cm47XG5cdH1cblxuXHQvLyBPbi1zaXRlIG5hdmlnYXRpb24gdG8gbGlua3MgaW5lbGlnaWJsZSBmb3Igd3JpdGluZ1xuXHQvLyBUaGUgZWxpZ2liaWxpdHkgY2hlY2sgaXMgcmVxdWlyZSBiZWNhdXNlIHVzZXIgbWF5IGNsaWNrIG9uIGEgbGluayB3aXRoIHZhcmlhbnQgaW50ZW50aW9uYWxseVxuXHQvLyBlLmcuIHZhcmlhbnQgZHJvcGRvd24gYW5kIHt7VmFyaWFudC1jbmhrdHdzZ319XG5cdGlmIChpc1JlZmVycmVyU2VsZigpICYmICFpc0VsaWdpYmxlRm9yUmV3cml0aW5nKGxvY2F0aW9uLmhyZWYpKSB7XG5cdFx0cmV3cml0ZU5hdmlnYXRpb24ocHJlZmVycmVkVmFyaWFudCk7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y2hlY2tUaGlzUGFnZShwcmVmZXJyZWRWYXJpYW50LCBwYWdlVmFyaWFudCk7XG5cdHJld3JpdGVOYXZpZ2F0aW9uKHByZWZlcnJlZFZhcmlhbnQpO1xufVxuXG5tYWluKCk7XG5cbi8vIEV4cG9zZSBmb3IgVmFyaWFudEFsbHlEaWFsb2cncyB1c2VcbmV4cG9ydCB7c2V0TG9jYWxWYXJpYW50LCBzZXRPcHRPdXR9IGZyb20gJy4vbW9kdWxlcy9tb2RlbCc7XG5leHBvcnQge3JlZGlyZWN0fSBmcm9tICcuL21vZHVsZXMvY29udHJvbGxlcic7XG4iLCAiY29uc3QgQkxPQ0tFRF9SRUZFUlJFUl9IT1NUID0gL14oW2Etel0rXFwuKT8oYmt3elxcLmNufHF3YmtcXC5jY3xxd2JrXFwub3JnKSQvaTtcblxuZnVuY3Rpb24gaXNMb2dnZWRJbigpOiBib29sZWFuIHtcblx0cmV0dXJuIG13LmNvbmZpZy5leGlzdHMoJ3dnVXNlcklkJyk7XG59XG5cbi8qKlxuICogQ2hlY2sgd2hldGhlciByZWZlcnJlciBvcmlnaW5hdGVzIGZyb20gdGhlIHNhbWUgZG9tYWluLlxuICovXG5mdW5jdGlvbiBpc1JlZmVycmVyU2VsZigpOiBib29sZWFuIHtcblx0dHJ5IHtcblx0XHRyZXR1cm4gbmV3IFVSTChkb2N1bWVudC5yZWZlcnJlcikuaG9zdG5hbWUgPT09IGxvY2F0aW9uLmhvc3RuYW1lO1xuXHR9IGNhdGNoIHtcblx0XHQvLyBJbnZhbGlkIFVSTFxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxufVxuXG5mdW5jdGlvbiBpc1JlZmVycmVyQmxvY2tlZCgpOiBib29sZWFuIHtcblx0dHJ5IHtcblx0XHRyZXR1cm4gQkxPQ0tFRF9SRUZFUlJFUl9IT1NULnRlc3QobmV3IFVSTChkb2N1bWVudC5yZWZlcnJlcikuaG9zdG5hbWUpO1xuXHR9IGNhdGNoIHtcblx0XHQvLyBJbnZhbGlkIFVSTFxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxufVxuXG5mdW5jdGlvbiBpc1ZpZXdpbmdQYWdlKCk6IGJvb2xlYW4ge1xuXHRyZXR1cm4gbXcuY29uZmlnLmdldCgnd2dBY3Rpb24nKSA9PT0gJ3ZpZXcnO1xufVxuXG4vKipcbiAqIENoZWNrIHdoZXRoZXIgdGhlIGN1cnJlbnQgbGFuZ3VhZ2UgKHNldCBpbiB1c2VyIHByZWZlcmVuY2Ugb3IgYnkgP3VzZWxhbmc9eHh4KVxuICogaXMgQ2hpbmVzZSBvciBub3QuXG4gKi9cbmZ1bmN0aW9uIGlzTGFuZ0NoaW5lc2UoKTogYm9vbGVhbiB7XG5cdHJldHVybiBtdy5jb25maWcuZ2V0KCd3Z1VzZXJMYW5ndWFnZScpLnN0YXJ0c1dpdGgoJ3poJyk7XG59XG5cbmZ1bmN0aW9uIGlzV2lraXRleHRQYWdlKCk6IGJvb2xlYW4ge1xuXHRyZXR1cm4gbXcuY29uZmlnLmdldCgnd2dDYW5vbmljYWxOYW1lc3BhY2UnKSAhPT0gJ1NwZWNpYWwnICYmIG13LmNvbmZpZy5nZXQoJ3dnUGFnZUNvbnRlbnRNb2RlbCcpID09PSAnd2lraXRleHQnO1xufVxuXG5leHBvcnQge2lzTG9nZ2VkSW4sIGlzUmVmZXJyZXJTZWxmLCBpc1JlZmVycmVyQmxvY2tlZCwgaXNWaWV3aW5nUGFnZSwgaXNMYW5nQ2hpbmVzZSwgaXNXaWtpdGV4dFBhZ2V9O1xuIiwgImltcG9ydCB7aXNMb2dnZWRJbn0gZnJvbSAnLi91dGlscyc7XG5cbmNvbnN0IExPQ0FMX1ZBUklBTlRfS0VZID0gJ3ZhLXZhcic7XG5jb25zdCBPUFRPVVRfS0VZID0gJ3ZhLW9wdG91dCc7XG5jb25zdCBWQUxJRF9WQVJJQU5UUyA9IFsnemgtY24nLCAnemgtc2cnLCAnemgtbXknLCAnemgtdHcnLCAnemgtaGsnLCAnemgtbW8nXSBhcyBjb25zdDtcbmNvbnN0IFZBUklBTlRTID0gWyd6aCcsICd6aC1oYW5zJywgJ3poLWhhbnQnLCAuLi5WQUxJRF9WQVJJQU5UU10gYXMgY29uc3Q7XG5jb25zdCBFWFRfVkFSSUFOVFMgPSBbXG5cdCd6aC1oYW5zLWNuJyxcblx0J3poLWhhbnMtc2cnLFxuXHQnemgtaGFucy1teScsXG5cdCd6aC1oYW50LXR3Jyxcblx0J3poLWhhbnQtaGsnLFxuXHQnemgtaGFudC1tbycsXG5cdC4uLlZBUklBTlRTLFxuXSBhcyBjb25zdDtcbi8vIFNvbWUgYnJvd3NlcnMgKGUuZy4gRmlyZWZveCBBbmRyb2lkKSBtYXkgcmV0dXJuIHN1Y2ggbGFuZ3VhZ2VzXG5jb25zdCBFWFRfTUFQUElORzogUmVjb3JkPHN0cmluZywgVmFsaWRWYXJpYW50PiA9IHtcblx0J3poLWhhbnMtY24nOiAnemgtY24nLFxuXHQnemgtaGFucy1zZyc6ICd6aC1zZycsXG5cdCd6aC1oYW5zLW15JzogJ3poLW15Jyxcblx0J3poLWhhbnQtdHcnOiAnemgtdHcnLFxuXHQnemgtaGFudC1oayc6ICd6aC1oaycsXG5cdCd6aC1oYW50LW1vJzogJ3poLW1vJyxcbn07XG5cbnR5cGUgVmFsaWRWYXJpYW50ID0gKHR5cGVvZiBWQUxJRF9WQVJJQU5UUylbbnVtYmVyXTtcbnR5cGUgVmFyaWFudCA9ICh0eXBlb2YgVkFSSUFOVFMpW251bWJlcl07XG50eXBlIEV4dFZhcmlhbnQgPSAodHlwZW9mIEVYVF9WQVJJQU5UUylbbnVtYmVyXTtcblxuZnVuY3Rpb24gaXNWYXJpYW50KHN0cjogc3RyaW5nKTogc3RyIGlzIFZhcmlhbnQge1xuXHRyZXR1cm4gKFZBUklBTlRTIGFzIHJlYWRvbmx5IHN0cmluZ1tdKS5pbmNsdWRlcyhzdHIpO1xufVxuXG5mdW5jdGlvbiBpc1ZhbGlkVmFyaWFudChzdHI6IHN0cmluZyk6IHN0ciBpcyBWYWxpZFZhcmlhbnQge1xuXHRyZXR1cm4gKFZBTElEX1ZBUklBTlRTIGFzIHJlYWRvbmx5IHN0cmluZ1tdKS5pbmNsdWRlcyhzdHIpO1xufVxuXG5mdW5jdGlvbiBpc0V4dFZhcmlhbnQoc3RyOiBzdHJpbmcpOiBzdHIgaXMgRXh0VmFyaWFudCB7XG5cdHJldHVybiAoRVhUX1ZBUklBTlRTIGFzIHJlYWRvbmx5IHN0cmluZ1tdKS5pbmNsdWRlcyhzdHIpO1xufVxuXG4vKipcbiAqIE1hcHMgYWRkaXRpb25hbCBsYW5nIGNvZGVzIHRvIHN0YW5kYXJkIHZhcmlhbnRzLlxuICpcbiAqIEByZXR1cm5zIHN0YW5kYXJkIHZhcmlhbnRcbiAqL1xuZnVuY3Rpb24gbm9ybWFsaXplVmFyaWFudChleHRWYXJpYW50OiBFeHRWYXJpYW50KTogVmFyaWFudCB7XG5cdHJldHVybiAoRVhUX01BUFBJTkdbZXh0VmFyaWFudF0gPz8gZXh0VmFyaWFudCkgYXMgVmFyaWFudDtcbn1cblxuLyoqXG4gKiBHZXQgY3VycmVudCB2YXJpYW50IG9mIHRoZSBwYWdlIChkb24ndCBiZSBtaXNsZWQgYnkgY29uZmlnIG5hbWluZykuXG4gKlxuICogQHJldHVybnMgdmFyaWFudCwgbnVsbCBmb3Igbm9uLXdpa2l0ZXh0IHBhZ2UgKGJ1dCBOT1QgYWxsIHN1Y2ggcGFnZXMgcmV0dXJucyBudWxsISlcbiAqL1xuZnVuY3Rpb24gZ2V0UGFnZVZhcmlhbnQoKTogVmFyaWFudCB8IG51bGwge1xuXHRjb25zdCByZXN1bHQgPSBtdy5jb25maWcuZ2V0KCd3Z1VzZXJWYXJpYW50Jyk7XG5cdHJldHVybiByZXN1bHQgIT09IG51bGwgJiYgaXNFeHRWYXJpYW50KHJlc3VsdCkgPyBub3JtYWxpemVWYXJpYW50KHJlc3VsdCkgOiBudWxsO1xufVxuXG4vKipcbiAqIEdldCBhY2NvdW50IHZhcmlhbnQuXG4gKlxuICogQHJldHVybnMgYWNjb3VudCB2YXJpYW50LCBudWxsIGZvciBhbm9ueW1vdXMgdXNlclxuICovXG5mdW5jdGlvbiBnZXRBY2NvdW50VmFyaWFudCgpOiBWYXJpYW50IHwgbnVsbCB7XG5cdGlmIChpc0xvZ2dlZEluKCkpIHtcblx0XHRjb25zdCByZXN1bHQgPSBtdy51c2VyLm9wdGlvbnMuZ2V0KCd2YXJpYW50JykgYXMgc3RyaW5nO1xuXHRcdHJldHVybiBpc0V4dFZhcmlhbnQocmVzdWx0KSA/IG5vcm1hbGl6ZVZhcmlhbnQocmVzdWx0KSA6IG51bGw7XG5cdH1cblx0cmV0dXJuIG51bGw7XG59XG5cbmZ1bmN0aW9uIGdldExvY2FsVmFyaWFudCgpOiBWYXJpYW50IHwgbnVsbCB7XG5cdGNvbnN0IHJlc3VsdCA9IG13LnN0b3JhZ2UuZ2V0KExPQ0FMX1ZBUklBTlRfS0VZKSBhcyBzdHJpbmc7XG5cdGlmIChyZXN1bHQgPT09IG51bGwgfHwgIWlzRXh0VmFyaWFudChyZXN1bHQpKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblx0cmV0dXJuIG5vcm1hbGl6ZVZhcmlhbnQocmVzdWx0KTtcbn1cblxuLyoqXG4gKiBSZXR1cm4gYnJvd3NlciBsYW5ndWFnZSBpZiBpdCdzIGEgQ2hpbmVzZSB2YXJpYW50LlxuICpcbiAqIEByZXR1cm5zIGJyb3dzZXIgdmFyaWFudFxuICovXG5mdW5jdGlvbiBnZXRCcm93c2VyVmFyaWFudCgpOiBWYXJpYW50IHwgbnVsbCB7XG5cdHJldHVybiAoXG5cdFx0bmF2aWdhdG9yLmxhbmd1YWdlc1xuXHRcdFx0Lm1hcCgobGFuZykgPT4ge1xuXHRcdFx0XHRyZXR1cm4gbGFuZy50b0xvd2VyQ2FzZSgpO1xuXHRcdFx0fSlcblx0XHRcdC5maWx0ZXIoaXNFeHRWYXJpYW50KVxuXHRcdFx0Lm1hcChub3JtYWxpemVWYXJpYW50KVxuXHRcdFx0LmZpbmQoaXNWYXJpYW50KSA/PyBudWxsXG5cdCk7XG59XG5cbi8qKlxuICogR2V0IHRoZSBcIm5hdHVyYWxcIiB2YXJpYW50IGluZmVycmVkIGJ5IE1lZGlhV2lraSBmb3IgYW5vbnltb3VzIHVzZXJzXG4gKiB3aGVuIHRoZSBsaW5rIGRvZXNuJ3Qgc3BlY2lmeSBhIHZhcmlhbnQuXG4gKlxuICogVXNlZCBpbiBsaW5rIG5vcm1hbGl6YXRpb24uXG4gKlxuICogRklYTUU6IE9sZCBTYWZhcmkgaXMga25vd24gdG8gYnJlYWsgdGhpcyBtZXRob2QuXG4gKiBVc2VyIHJlcG9ydGVkIHRoYXQgb24gYW4gaU9TIDE0IGRldmljZSB3aXRoIENoaW5lc2UgbGFuZ3VhZ2UgYW5kIFNpbmdhcG9yZSByZWdpb24gc2V0dGluZ3MsXG4gKiBBY2NlcHQtTGFuZ3VhZ2UgaXMgemgtY24gKHRodXMgaW5mZXJyZWQgYnkgTWVkaWFXaWtpKSBidXQgdGhpcyBtZXRob2QgcmV0dXJucyB6aC1zZy5cbiAqXG4gKiBAcmV0dXJucyB2YXJpYW50XG4gKi9cbmZ1bmN0aW9uIGdldE1lZGlhV2lraVZhcmlhbnQoKTogVmFyaWFudCB8IG51bGwge1xuXHRyZXR1cm4gZ2V0QWNjb3VudFZhcmlhbnQoKSA/PyBnZXRCcm93c2VyVmFyaWFudCgpO1xufVxuXG4vKipcbiAqIENhbGN1bGF0ZSBwcmVmZXJyZWQgdmFyaWFudCBmcm9tIGJyb3dzZXIgdmFyaWFudCwgbG9jYWwgdmFyaWFudCBhbmQgYWNjb3VudCB2YXJpYW50LlxuICpcbiAqIFByaW9yaXR5OiBhY2NvdW50IHZhcmlhbnQgPiBicm93c2VyIHZhcmlhbnQgPiBsb2NhbCB2YXJpYW50XG4gKlxuICogQHJldHVybnMgcHJlZmVycmVkIHZhcmlhbnRcbiAqL1xuZnVuY3Rpb24gY2FsY3VsYXRlUHJlZmVycmVkVmFyaWFudCgpOiBWYWxpZFZhcmlhbnQgfCBudWxsIHtcblx0cmV0dXJuIFtnZXRBY2NvdW50VmFyaWFudCgpLCBnZXRCcm93c2VyVmFyaWFudCgpLCBnZXRMb2NhbFZhcmlhbnQoKV1cblx0XHQubWFwKCh2YXJpYW50KSA9PiB7XG5cdFx0XHRyZXR1cm4gdmFyaWFudCAhPT0gbnVsbCAmJiBpc1ZhbGlkVmFyaWFudCh2YXJpYW50KSA/IHZhcmlhbnQgOiBudWxsO1xuXHRcdH0pXG5cdFx0LnJlZHVjZSgocHJldiwgY3VycikgPT4ge1xuXHRcdFx0cmV0dXJuIHByZXYgPz8gY3Vycjtcblx0XHR9KTtcbn1cblxudHlwZSBTZXRMb2NhbFZhcmlhbnQgPSB0eXBlb2Ygc2V0TG9jYWxWYXJpYW50O1xuXG5mdW5jdGlvbiBzZXRMb2NhbFZhcmlhbnQodmFyaWFudDogVmFyaWFudCk6IHZvaWQge1xuXHRtdy5zdG9yYWdlLnNldChMT0NBTF9WQVJJQU5UX0tFWSwgdmFyaWFudCk7XG59XG5cbnR5cGUgU2V0T3B0T3V0ID0gdHlwZW9mIHNldE9wdE91dDtcblxuZnVuY3Rpb24gc2V0T3B0T3V0KCk6IHZvaWQge1xuXHRtdy5zdG9yYWdlLnNldChPUFRPVVRfS0VZLCAnJyk7XG59XG5cbmZ1bmN0aW9uIGlzT3B0T3V0ZWQoKTogYm9vbGVhbiB7XG5cdHJldHVybiBtdy5zdG9yYWdlLmdldChPUFRPVVRfS0VZKSAhPT0gbnVsbDtcbn1cblxuZXhwb3J0IHtcblx0dHlwZSBTZXRMb2NhbFZhcmlhbnQsXG5cdHR5cGUgU2V0T3B0T3V0LFxuXHR0eXBlIFZhbGlkVmFyaWFudCxcblx0dHlwZSBWYXJpYW50LFxuXHRpc1ZhcmlhbnQsXG5cdGlzVmFsaWRWYXJpYW50LFxuXHRnZXRQYWdlVmFyaWFudCxcblx0Z2V0QWNjb3VudFZhcmlhbnQsXG5cdGdldExvY2FsVmFyaWFudCxcblx0Z2V0QnJvd3NlclZhcmlhbnQsXG5cdGdldE1lZGlhV2lraVZhcmlhbnQsXG5cdGNhbGN1bGF0ZVByZWZlcnJlZFZhcmlhbnQsXG5cdHNldExvY2FsVmFyaWFudCxcblx0c2V0T3B0T3V0LFxuXHRpc09wdE91dGVkLFxufTtcbiIsICJpbXBvcnQge1ZhcmlhbnQsIGdldE1lZGlhV2lraVZhcmlhbnQsIGlzVmFsaWRWYXJpYW50LCBzZXRMb2NhbFZhcmlhbnR9IGZyb20gJy4vbW9kZWwnO1xuXG5jb25zdCBSRUdFWF9XSUtJX1VSTCA9IC9eXFwvKD86d2lraXx6aCg/Oi1cXHcrKT8pXFwvL2k7XG5jb25zdCBSRUdFWF9WQVJJQU5UX1VSTCA9IC9eXFwvemgoPzotXFx3Kyk/XFwvL2k7XG5jb25zdCBWQVJJQU5UX1BBUkFNID0gJ3ZhLXZhcmlhbnQnO1xuXG5mdW5jdGlvbiBpc0VsaWdpYmxlRm9yUmV3cml0aW5nKGxpbms6IHN0cmluZyk6IGJvb2xlYW4ge1xuXHR0cnkge1xuXHRcdC8vIE5vIHJld3JpdGluZyBmb3IgZW1wdHkgbGlua3Ncblx0XHRpZiAobGluayA9PT0gJycpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0Y29uc3QgdXJsID0gbmV3IFVSTChsaW5rLCBsb2NhdGlvbi5vcmlnaW4pO1xuXHRcdC8vIE5vIHJld3JpdGluZyBpZiBsaW5rIGl0c2VsZiBoYXMgdmFyaWFudCBpbmZvXG5cdFx0aWYgKFJFR0VYX1ZBUklBTlRfVVJMLnRlc3QodXJsLnBhdGhuYW1lKSkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHRpZiAodXJsLnNlYXJjaFBhcmFtcy5oYXMoJ3ZhcmlhbnQnKSkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHQvLyBObyByZXdyaXRpbmcgZm9yIGZvcmVpZ24gb3JpZ2luIFVSTHNcblx0XHQvLyBOb3RlIHRoYXQgbGlua3MgbGlrZSBqYXZhc2NyaXB0OnZvaWQoMCkgYXJlIGJsb2NrZWQgYnkgdGhpc1xuXHRcdGlmICh1cmwuaG9zdCAhPT0gbG9jYXRpb24uaG9zdCkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdHJldHVybiB0cnVlO1xuXHR9IGNhdGNoIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cbn1cblxuZnVuY3Rpb24gcmV3cml0ZUxpbmsobGluazogc3RyaW5nLCB2YXJpYW50OiBWYXJpYW50KTogc3RyaW5nIHtcblx0dHJ5IHtcblx0XHRjb25zdCBub3JtYWxpemF0aW9uVGFyZ2V0VmFyaWFudCA9IGdldE1lZGlhV2lraVZhcmlhbnQoKTtcblx0XHRjb25zdCB1cmwgPSBuZXcgVVJMKGxpbmssIGxvY2F0aW9uLm9yaWdpbik7XG5cdFx0Y29uc3Qge3BhdGhuYW1lLCBzZWFyY2hQYXJhbXN9ID0gdXJsO1xuXG5cdFx0aWYgKFJFR0VYX1dJS0lfVVJMLnRlc3QocGF0aG5hbWUpKSB7XG5cdFx0XHR1cmwucGF0aG5hbWUgPSBgLyR7dmFyaWFudH0vJHt1cmwucGF0aG5hbWUucmVwbGFjZShSRUdFWF9XSUtJX1VSTCwgJycpfWA7XG5cdFx0XHRzZWFyY2hQYXJhbXMuZGVsZXRlKCd2YXJpYW50Jyk7IC8vIEZvciB0aGluZ3MgbGlrZSAvemgtY24vQT92YXJpYW50PXpoLWhrXG5cdFx0fSBlbHNlIHtcblx0XHRcdHNlYXJjaFBhcmFtcy5zZXQoJ3ZhcmlhbnQnLCB2YXJpYW50KTtcblx0XHR9XG5cblx0XHRpZiAodmFyaWFudCA9PT0gbm9ybWFsaXphdGlvblRhcmdldFZhcmlhbnQpIHtcblx0XHRcdC8vIE5vcm1hbGl6ZSB0aGUgbGluay5cblx0XHRcdC8vXG5cdFx0XHQvLyBGb3IgZXhhbXBsZSwgZm9yIGxpbmsgL3poLXR3L1RpdGxlIGFuZCBub3JtYWxpemF0aW9uIHZhcmlhbnQgemgtdHcsIHRoZSByZXN1bHQgaXMgL3dpa2kvVGl0bGUsXG5cdFx0XHQvLyB3aGlsZSBmb3IgdGhlIHNhbWUgbGluayBhbmQgbm9ybWFsaXphdGlvbiB2YXJpYW50IHpoLWNuLCB0aGUgcmVzdWx0IGlzIC96aC10dy9UaXRsZSAodW5jaGFuZ2VkKS5cblx0XHRcdHVybC5wYXRobmFtZSA9IHVybC5wYXRobmFtZS5yZXBsYWNlKFJFR0VYX1dJS0lfVVJMLCAnL3dpa2kvJyk7XG5cdFx0XHR1cmwuc2VhcmNoUGFyYW1zLmRlbGV0ZSgndmFyaWFudCcpO1xuXHRcdH1cblxuXHRcdGNvbnN0IHJlc3VsdCA9IHVybC50b1N0cmluZygpO1xuXG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fSBjYXRjaCB7XG5cdFx0cmV0dXJuIGxpbms7XG5cdH1cbn1cblxuaW50ZXJmYWNlIFJlZGlyZWN0aW9uT3B0aW9ucyB7XG5cdGxpbms/OiBzdHJpbmc7XG5cdC8qKiBTaG91bGQgc3RpbGwgcmVkaXJlY3QgZXZlbiBkZXN0aW5hdGlvbiBsaW5rIGlzIHRoZSBzYW1lIGFzIGN1cnJlbnQgcGFnZSAqL1xuXHRmb3JjZWQ/OiBib29sZWFuO1xufVxuXG50eXBlIFJlZGlyZWN0ID0gdHlwZW9mIHJlZGlyZWN0O1xuXG5mdW5jdGlvbiByZWRpcmVjdChwcmVmZXJyZWRWYXJpYW50OiBWYXJpYW50LCBvcHRpb25zOiBSZWRpcmVjdGlvbk9wdGlvbnMgPSB7fSk6IHZvaWQge1xuXHRjb25zdCBvcmlnTGluayA9IG9wdGlvbnMubGluayA/PyBsb2NhdGlvbi5ocmVmO1xuXHRjb25zdCBuZXdMaW5rID0gcmV3cml0ZUxpbmsob3JpZ0xpbmssIHByZWZlcnJlZFZhcmlhbnQpO1xuXG5cdC8vIFByZXZlbnQgaW5maW5pdGUgcmVkaXJlY3RzXG5cdC8vIFRoaXMgY291bGQgaGFwcGVuIG9jY2FzaW9uYWxseSwgc2VlIGdldE1lZGlhV2lraVZhcmlhbnQoKSdzIGNvbW1lbnRzXG5cdGlmIChvcHRpb25zLmZvcmNlZCB8fCBuZXdMaW5rICE9PSBsb2NhdGlvbi5ocmVmKSB7XG5cdFx0Ly8gVXNlIHJlcGxhY2UoKSB0byBwcmV2ZW50IG5hdmlnYXRpbmcgYmFja1xuXHRcdGxvY2F0aW9uLnJlcGxhY2UobmV3TGluayk7XG5cdH1cbn1cblxuZnVuY3Rpb24gY2hlY2tUaGlzUGFnZShwcmVmZXJyZWRWYXJpYW50OiBWYXJpYW50LCBwYWdlVmFyaWFudD86IFZhcmlhbnQpOiB2b2lkIHtcblx0aWYgKHBhZ2VWYXJpYW50ID09PSBwcmVmZXJyZWRWYXJpYW50KSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgcmVkaXJlY3Rpb25PcmlnaW46IHN0cmluZyB8IG51bGwgPSBtdy5jb25maWcuZ2V0KCd3Z1JlZGlyZWN0ZWRGcm9tJyk7XG5cdGlmIChyZWRpcmVjdGlvbk9yaWdpbiA9PT0gbnVsbCkge1xuXHRcdHJlZGlyZWN0KHByZWZlcnJlZFZhcmlhbnQpO1xuXHRcdHJldHVybjtcblx0fVxuXG5cdC8vIFVzZSBVUkwgdG8gcmVzZXJ2ZSBvdGhlciBwYXJ0cyBvZiB0aGUgbGlua1xuXHRjb25zdCByZWRpcmVjdGlvblVSTCA9IG5ldyBVUkwobG9jYXRpb24uaHJlZik7XG5cdHJlZGlyZWN0aW9uVVJMLnBhdGhuYW1lID0gYC93aWtpLyR7cmVkaXJlY3Rpb25PcmlnaW59YDtcblx0cmVkaXJlY3QocHJlZmVycmVkVmFyaWFudCwge2xpbms6IHJlZGlyZWN0aW9uVVJMLnRvU3RyaW5nKCl9KTtcbn1cblxuZnVuY3Rpb24gcmV3cml0ZU5hdmlnYXRpb24odmFyaWFudDogVmFyaWFudCk6IHZvaWQge1xuXHRmb3IgKGNvbnN0IG5hbWUgb2YgWydjbGljaycsICdhdXhjbGljaycsICdkcmFnc3RhcnQnXSkge1xuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIobmFtZSwgKGV2KSA9PiB7XG5cdFx0XHRjb25zdCB7dGFyZ2V0fSA9IGV2O1xuXG5cdFx0XHRpZiAodGFyZ2V0IGluc3RhbmNlb2YgRWxlbWVudCkge1xuXHRcdFx0XHQvLyBEbyBub3Qgd3JpdGUgPGE+IHdpdGggaGFzaCBvbmx5IGhyZWYgb3Igbm8gaHJlZlxuXHRcdFx0XHQvLyB3aGljaCBpcyBrbm93biB0byBjYXVzZSBicmVha2FnZSBpbiBlLmcuIFZpc3VhbCBFZGl0b3Jcblx0XHRcdFx0Y29uc3QgYW5jaG9yOiBIVE1MQW5jaG9yRWxlbWVudCB8IG51bGwgPSB0YXJnZXQuY2xvc2VzdCgnYVtocmVmXTpub3QoW2hyZWZePVwiI1wiXSknKTtcblxuXHRcdFx0XHRpZiAoYW5jaG9yICE9PSBudWxsKSB7XG5cdFx0XHRcdFx0Y29uc3Qgb3JpZ0xpbmsgPSBhbmNob3IuaHJlZjtcblx0XHRcdFx0XHRpZiAoIWlzRWxpZ2libGVGb3JSZXdyaXRpbmcob3JpZ0xpbmspKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Y29uc3QgbmV3TGluayA9IHJld3JpdGVMaW5rKG9yaWdMaW5rLCB2YXJpYW50KTtcblx0XHRcdFx0XHRpZiAobmV3TGluayA9PT0gb3JpZ0xpbmspIHtcblx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQvLyBCcm93c2VyIHN1cHBvcnQ6IFNhZmFyaSA8IDE0XG5cdFx0XHRcdFx0Ly8gRmFpbCBzaWxlbnRseSB3aGVuIERyYWdFdmVudCBpcyBub3QgcHJlc2VudFxuXHRcdFx0XHRcdGlmICh3aW5kb3cuRHJhZ0V2ZW50ICYmIGV2IGluc3RhbmNlb2YgRHJhZ0V2ZW50ICYmIGV2LmRhdGFUcmFuc2Zlcikge1xuXHRcdFx0XHRcdFx0Ly8gTW9kaWZ5IGRyYWcgZGF0YSBkaXJlY3RseSBiZWNhdXNlIHNldHRpbmcgaHJlZiBoYXMgbm8gZWZmZWN0IGluIGRyYWcgZXZlbnRcblx0XHRcdFx0XHRcdGZvciAoY29uc3QgdHlwZSBvZiBldi5kYXRhVHJhbnNmZXIudHlwZXMpIHtcblx0XHRcdFx0XHRcdFx0ZXYuZGF0YVRyYW5zZmVyLnNldERhdGEodHlwZSwgbmV3TGluayk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdC8vIFVzZSBhIG11dGV4IHRvIGF2b2lkIGJlaW5nIG92ZXJ3cml0dGVuIGJ5IG92ZXJsYXBwZWQgaGFuZGxlciBjYWxsc1xuXHRcdFx0XHRcdFx0aWYgKGFuY2hvci5kYXRhc2V0Wyd2YU11dGV4J10gPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRcdFx0XHRhbmNob3IuZGF0YXNldFsndmFNdXRleCddID0gJyc7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdGFuY2hvci5ocmVmID0gbmV3TGluaztcblxuXHRcdFx0XHRcdFx0Ly8gSEFDSzogd29ya2Fyb3VuZCBwb3B1cHMgbm90IHdvcmtpbmcgb24gbW9kaWZpZWQgbGlua3Ncblx0XHRcdFx0XHRcdC8vIEFkZCBoYW5kbGVyIHRvIDxhPiBkaXJlY3RseSBzbyBpdCB3YXMgdHJpZ2dlcmVkIGJlZm9yZSBhbnl0aGluZyBlbHNlXG5cdFx0XHRcdFx0XHRmb3IgKGNvbnN0IGlubmVyTmFtZSBvZiBbJ21vdXNlb3ZlcicsICdtb3VzZWxlYXZlJywgJ2tleXVwJ10pIHtcblx0XHRcdFx0XHRcdFx0YW5jaG9yLmFkZEV2ZW50TGlzdGVuZXIoXG5cdFx0XHRcdFx0XHRcdFx0aW5uZXJOYW1lLFxuXHRcdFx0XHRcdFx0XHRcdCgpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdGlmIChhbmNob3IuZGF0YXNldFsndmFNdXRleCddICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0YW5jaG9yLmhyZWYgPSBvcmlnTGluaztcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZGVsZXRlIGFuY2hvci5kYXRhc2V0Wyd2YU11dGV4J107XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0XHR7b25jZTogdHJ1ZX1cblx0XHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9KTtcblx0fVxuXG5cdC8vIEFsdGVyIDxmb3JtPiBzdWJtaXNzaW9uIGFjdGlvbnMsIGVzcGVjaWFsbHkgZm9yIGVkaXQgZm9ybXNcblx0Ly8gdG8gcHJldmVudCBhIGxhdGVyIHJlZnJlc2ggY2F1c2luZyBsb3NzIG9mIHRoZSBlZGl0IGJ1ZmZlclxuXHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZXYpID0+IHtcblx0XHRjb25zdCB7dGFyZ2V0fSA9IGV2O1xuXG5cdFx0aWYgKHRhcmdldCBpbnN0YW5jZW9mIEhUTUxGb3JtRWxlbWVudCkge1xuXHRcdFx0Ly8gVXNlIGdldEF0dHJpYnV0ZSAmIHNldEF0dHJpYnV0ZSB0byB3b3JrIGFyb3VuZCBodHRwczovL2dpdGh1Yi5jb20vd2lraW1lZGlhLWdhZGdldHMvVmFyaWFudEFsbHkvaXNzdWVzLzE0XG5cdFx0XHRjb25zdCBzdWJtaXRVcmwgPSB0YXJnZXQuZ2V0QXR0cmlidXRlKCdhY3Rpb24nKTtcblx0XHRcdGlmIChzdWJtaXRVcmwgJiYgaXNFbGlnaWJsZUZvclJld3JpdGluZyhzdWJtaXRVcmwpKSB7XG5cdFx0XHRcdGNvbnN0IG1ldGhvZCA9IHRhcmdldC5nZXRBdHRyaWJ1dGUoJ21ldGhvZCcpID8/ICdnZXQnO1xuXG5cdFx0XHRcdGlmIChtZXRob2QgPT09ICdnZXQnKSB7XG5cdFx0XHRcdFx0Ly8gSW4gR0VUIGZvcm1zLCBxdWVyeSBwYXJhbWV0ZXJzIGluIGFjdGlvbiBhcmUgc3RyaXBlZCwgc28gYWRkIGl0IHZpYSBhIGhpZGRlbiA8aW5wdXQ+XG5cdFx0XHRcdFx0Ly8gU2VlIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzExMTYwMTkvd2hlbi1zdWJtaXR0aW5nLWEtZ2V0LWZvcm0tdGhlLXF1ZXJ5LXN0cmluZy1pcy1yZW1vdmVkLWZyb20tdGhlLWFjdGlvbi11cmxcblxuXHRcdFx0XHRcdC8vIFJlbW92ZSBleGlzdGluZyB2YXJpYW50IDxpbnB1dD4ncywgc2hvdWxkIG9ubHkgYmUgY2F1c2VkIGJ5IGJmY2FjaGUgZHVlIHRvIHRoZSBzcGVjaWFsXG5cdFx0XHRcdFx0Ly8gcm9sZSBvZiA/dmFyaWFudCBpbiBNZWRpYVdpa2lcblx0XHRcdFx0XHRmb3IgKGNvbnN0IGVsZW0gb2YgdGFyZ2V0LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0W25hbWU9XCJ2YXJpYW50XCJdJykpIGVsZW0ucmVtb3ZlKCk7XG5cblx0XHRcdFx0XHRjb25zdCB2YXJpYW50SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuXHRcdFx0XHRcdHZhcmlhbnRJbnB1dC50eXBlID0gJ2hpZGRlbic7XG5cdFx0XHRcdFx0dmFyaWFudElucHV0Lm5hbWUgPSAndmFyaWFudCc7XG5cdFx0XHRcdFx0dmFyaWFudElucHV0LnZhbHVlID0gdmFyaWFudDsgLy8gVE9ETzogTm8gbm9ybWFsaXphdGlvbiBoZXJlLCBidXQgc2hvdWxkIG5vdCBiZSBhIGJpZyBwcm9ibGVtXG5cdFx0XHRcdFx0dGFyZ2V0LmFwcGVuZCh2YXJpYW50SW5wdXQpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHRhcmdldC5zZXRBdHRyaWJ1dGUoJ2FjdGlvbicsIHJld3JpdGVMaW5rKHN1Ym1pdFVybCwgdmFyaWFudCkpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9KTtcbn1cblxuZnVuY3Rpb24gc2hvd1ZhcmlhbnRQcm9tcHQoKTogdm9pZCB7XG5cdGNvbnN0IG1vZHVsZU5hbWUgPSAnZXh0LmdhZGdldC5WYXJpYW50QWxseURpYWxvZyc7XG5cdHZvaWQgbXcubG9hZGVyLnVzaW5nKG1vZHVsZU5hbWUsIChyZXF1aXJlKSA9PiB7XG5cdFx0cmVxdWlyZShtb2R1bGVOYW1lKTtcblx0fSk7XG59XG5cbi8qKlxuICogU2V0IGxvY2FsIHZhcmlhbnQgYWNjb3JkaW5nIHRvIFVSTCBxdWVyeSBwYXJhbWV0ZXJzLlxuICpcbiAqIGUuZy4gYSBVUkwgd2l0aCA/dmEtdmFyaWFudD16aC1jbiB3aWxsIHNldCBsb2NhbCB2YXJpYW50IHRvIHpoLWNuXG4gKi9cbmZ1bmN0aW9uIGFwcGx5VVJMVmFyaWFudCgpOiB2b2lkIHtcblx0Y29uc3QgdmFyaWFudCA9IG5ldyBVUkwobG9jYXRpb24uaHJlZikuc2VhcmNoUGFyYW1zLmdldChWQVJJQU5UX1BBUkFNKTtcblx0aWYgKHZhcmlhbnQgIT09IG51bGwgJiYgaXNWYWxpZFZhcmlhbnQodmFyaWFudCkpIHtcblx0XHRzZXRMb2NhbFZhcmlhbnQodmFyaWFudCk7XG5cdH1cbn1cblxuZXhwb3J0IHtcblx0dHlwZSBSZWRpcmVjdCxcblx0aXNFbGlnaWJsZUZvclJld3JpdGluZyxcblx0cmV3cml0ZUxpbmssXG5cdHJlZGlyZWN0LFxuXHRjaGVja1RoaXNQYWdlLFxuXHRyZXdyaXRlTmF2aWdhdGlvbixcblx0c2hvd1ZhcmlhbnRQcm9tcHQsXG5cdGFwcGx5VVJMVmFyaWFudCxcbn07XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxzQkFBQSxDQUFBO0FBQUFDLFNBQUFELHFCQUFBO0VBQUFFLFVBQUFBLE1BQUFBO0VBQUFDLGlCQUFBQSxNQUFBQTtFQUFBQyxXQUFBQSxNQUFBQTtBQUFBLENBQUE7QUFBQUMsT0FBQUMsVUFBQUMsYUFBQVAsbUJBQUE7O0FDQUEsSUFBTVEsd0JBQXdCO0FBRTlCLFNBQVNDLGFBQXNCO0FBQzlCLFNBQU9DLEdBQUdDLE9BQU9DLE9BQU8sVUFBVTtBQUNuQztBQUtBLFNBQVNDLGlCQUEwQjtBQUNsQyxNQUFJO0FBQ0gsV0FBTyxJQUFJQyxJQUFJQyxTQUFTQyxRQUFRLEVBQUVDLGFBQWFDLFNBQVNEO0VBQ3pELFFBQVE7QUFFUCxXQUFPO0VBQ1I7QUFDRDtBQUVBLFNBQVNFLG9CQUE2QjtBQUNyQyxNQUFJO0FBQ0gsV0FBT1gsc0JBQXNCWSxLQUFLLElBQUlOLElBQUlDLFNBQVNDLFFBQVEsRUFBRUMsUUFBUTtFQUN0RSxRQUFRO0FBRVAsV0FBTztFQUNSO0FBQ0Q7QUFFQSxTQUFTSSxnQkFBeUI7QUFDakMsU0FBT1gsR0FBR0MsT0FBT1csSUFBSSxVQUFVLE1BQU07QUFDdEM7QUFNQSxTQUFTQyxnQkFBeUI7QUFDakMsU0FBT2IsR0FBR0MsT0FBT1csSUFBSSxnQkFBZ0IsRUFBRUUsV0FBVyxJQUFJO0FBQ3ZEO0FBRUEsU0FBU0MsaUJBQTBCO0FBQ2xDLFNBQU9mLEdBQUdDLE9BQU9XLElBQUksc0JBQXNCLE1BQU0sYUFBYVosR0FBR0MsT0FBT1csSUFB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LE9BQU87RUFDeEI7QUFDRDs7QUgzTEEsU0FBU3FGLE9BQU87QUFFZixNQUFJaEYsV0FBVyxHQUFHO0FBQ2pCO0VBQ0Q7QUFFQSxNQUFJdkQsV0FBVyxHQUFHO0FBQ2pCO0VBQ0Q7QUFHQSxNQUFJLENBQUNjLGNBQWMsR0FBRztBQUNyQjtFQUNEO0FBRUF3SCxrQkFBZ0I7QUFFaEIsUUFBTTdELG1CQUFtQnhCLDBCQUEwQjtBQUNuRCxNQUFJd0IscUJBQXFCLE1BQU07QUFJOUIvRSxvQkFBZ0IrRSxnQkFBZ0I7RUFDakM7QUFFQSxRQUFNTyxjQUFjakQsZUFBZTtBQUduQyxNQUFJaUQsZ0JBQWdCLFFBQVEsQ0FBQ2hFLGVBQWUsR0FBRztBQUc5QyxRQUFJeUQscUJBQXFCLE1BQU07QUFDOUJVLHdCQUFrQlYsZ0JBQWdCO0lBQ25DO0FBQ0E7RUFDRDtBQUdBLE1BQUlBLHFCQUFxQixNQUFNO0FBQzlCLFFBQUk3RCxjQUFjLEdBQUc7QUFDcEJxSCx3QkFBa0I7QUFDbEI7SUFDRDtBQUVBO0VBQ0Q7QUFFQSxNQUFJdkgsa0JBQWtCLEdBQUc7QUFDeEJ5RSxzQkFBa0JWLGdCQUFnQjtBQUNsQztFQUNEO0FBS0EsTUFBSXJFLGVBQWUsS0FBSyxDQUFDdUQsdUJBQXVCbEQsU0FBU21FLElBQUksR0FBRztBQUMvRE8sc0JBQWtCVixnQkFBZ0I7QUFDbEM7RUFDRDtBQUVBTSxnQkFBY04sa0JBQWtCTyxXQUFXO0FBQzNDRyxvQkFBa0JWLGdCQUFnQjtBQUNuQztBQUVBOEQsS0FBSzsiLAogICJuYW1lcyI6IFsiVmFyaWFudEFsbHlfZXhwb3J0cyIsICJfX2V4cG9ydCIsICJyZWRpcmVjdCIsICJzZXRMb2NhbFZhcmlhbnQiLCAic2V0T3B0T3V0IiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIl9fdG9Db21tb25KUyIsICJCTE9DS0VEX1JFRkVSUkVSX0hPU1QiLCAiaXNMb2dnZWRJbiIsICJtdyIsICJjb25maWciLCAiZXhpc3RzIiwgImlzUmVmZXJyZXJTZWxmIiwgIlVSTCIsICJkb2N1bWVudCIsICJyZWZlcnJlciIsICJob3N0bmFtZSIsICJsb2NhdGlvbiIsICJpc1JlZmVycmVyQmxvY2tlZCIsICJ0ZXN0IiwgImlzVmlld2luZ1BhZ2UiLCAiZ2V0IiwgImlzTGFuZ0NoaW5lc2UiLCAic3RhcnRzV2l0aCIsICJpc1dpa2l0ZXh0UGFnZSIsICJMT0NBTF9WQVJJQU5UX0tFWSIsICJPUFRPVVRfS0VZIiwgIlZBTElEX1ZBUklBTlRTIiwgIlZBUklBTlRTIiwgIkVYVF9WQVJJQU5UUyIsICJFWFRfTUFQUElORyIsICJpc1ZhcmlhbnQiLCAic3RyIiwgImluY2x1ZGVzIiwgImlzVmFsaWRWYXJpYW50IiwgImlzRXh0VmFyaWFudCIsICJub3JtYWxpemVWYXJpYW50IiwgImV4dFZhcmlhbnQiLCAiX0VYVF9NQVBQSU5HJGV4dFZhcmlhIiwgImdldFBhZ2VWYXJpYW50IiwgInJlc3VsdCIsICJnZXRBY2NvdW50VmFyaWFudCIsICJ1c2VyIiwgIm9wdGlvbnMiLCAiZ2V0TG9jYWxWYXJpYW50IiwgInN0b3JhZ2UiLCAiZ2V0QnJvd3NlclZhcmlhbnQiLCAiX25hdmlnYXRvciRsYW5ndWFnZXMkIiwgIm5hdmlnYXRvciIsICJsYW5ndWFnZXMiLCAibWFwIiwgImxhbmciLCAidG9Mb3dlckNhc2UiLCAiZmlsdGVyIiwgImZpbmQiLCAiZ2V0TWVkaWFXaWtpVmFyaWFudCIsICJfZ2V0QWNjb3VudFZhcmlhbnQiLCAiY2FsY3VsYXRlUHJlZmVycmVkVmFyaWFudCIsICJ2YXJpYW50IiwgInJlZHVjZSIsICJwcmV2IiwgImN1cnIiLCAic2V0IiwgImlzT3B0T3V0ZWQiLCAiUkVHRVhfV0lLSV9VUkwiLCAiUkVHRVhfVkFSSUFOVF9VUkwiLCAiVkFSSUFOVF9QQVJBTSIsICJpc0VsaWdpYmxlRm9yUmV3cml0aW5nIiwgImxpbmsiLCAidXJsIiwgIm9yaWdpbiIsICJwYXRobmFtZSIsICJzZWFyY2hQYXJhbXMiLCAiaGFzIiwgImhvc3QiLCAicmV3cml0ZUxpbmsiLCAibm9ybWFsaXphdGlvblRhcmdldFZhcmlhbnQiLCAiY29uY2F0IiwgInJlcGxhY2UiLCAiZGVsZXRlIiwgInRvU3RyaW5nIiwgInByZWZlcnJlZFZhcmlhbnQiLCAiX29wdGlvbnMkbGluayIsICJvcmlnTGluayIsICJocmVmIiwgIm5ld0xpbmsiLCAiZm9yY2VkIiwgImNoZWNrVGhpc1BhZ2UiLCAicGFnZVZhcmlhbnQiLCAicmVkaXJlY3Rpb25PcmlnaW4iLCAicmVkaXJlY3Rpb25VUkwiLCAicmV3cml0ZU5hdmlnYXRpb24iLCAiX2kiLCAiX2FyciIsICJsZW5ndGgiLCAibmFtZSIsICJhZGRFdmVudExpc3RlbmVyIiwgImV2IiwgInRhcmdldCIsICJFbGVtZW50IiwgImFuY2hvciIsICJjbG9zZXN0IiwgIndpbmRvdyIsICJEcmFnRXZlbnQiLCAiZGF0YVRyYW5zZmVyIiwgIl9pdGVyYXRvcjIiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAidHlwZXMiLCAiX3N0ZXAyIiwgInMiLCAibiIsICJkb25lIiwgInR5cGUiLCAidmFsdWUiLCAic2V0RGF0YSIsICJlcnIiLCAiZSIsICJmIiwgImRhdGFzZXQiLCAiX2kyIiwgIl9hcnIyIiwgImlubmVyTmFtZSIsICJvbmNlIiwgIkhUTUxGb3JtRWxlbWVudCIsICJzdWJtaXRVcmwiLCAiZ2V0QXR0cmlidXRlIiwgIl90YXJnZXQkZ2V0QXR0cmlidXRlIiwgIm1ldGhvZCIsICJfaXRlcmF0b3IzIiwgInF1ZXJ5U2VsZWN0b3JBbGwiLCAiX3N0ZXAzIiwgImVsZW0iLCAicmVtb3ZlIiwgInZhcmlhbnRJbnB1dCIsICJjcmVhdGVFbGVtZW50IiwgImFwcGVuZCIsICJzZXRBdHRyaWJ1dGUiLCAic2hvd1ZhcmlhbnRQcm9tcHQiLCAibW9kdWxlTmFtZSIsICJsb2FkZXIiLCAidXNpbmciLCAicmVxdWlyZTIiLCAiYXBwbHlVUkxWYXJpYW50IiwgIm1haW4iXQp9Cg==

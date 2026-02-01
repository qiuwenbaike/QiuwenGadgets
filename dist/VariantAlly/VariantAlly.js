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
  const result = localStorage.getItem(LOCAL_VARIANT_KEY);
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
  localStorage.setItem(LOCAL_VARIANT_KEY, variant);
}
function setOptOut() {
  localStorage.setItem(OPTOUT_KEY, "");
}
function isOptOuted() {
  return localStorage.getItem(OPTOUT_KEY) !== null;
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1ZhcmlhbnRBbGx5L1ZhcmlhbnRBbGx5LnRzIiwgInNyYy9WYXJpYW50QWxseS9tb2R1bGVzL3V0aWxzLnRzIiwgInNyYy9WYXJpYW50QWxseS9tb2R1bGVzL21vZGVsLnRzIiwgInNyYy9WYXJpYW50QWxseS9tb2R1bGVzL2NvbnRyb2xsZXIudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7XG5cdGNoZWNrVGhpc1BhZ2UsXG5cdHJld3JpdGVOYXZpZ2F0aW9uLFxuXHRhcHBseVVSTFZhcmlhbnQsXG5cdHNob3dWYXJpYW50UHJvbXB0LFxuXHRpc0VsaWdpYmxlRm9yUmV3cml0aW5nLFxufSBmcm9tICcuL21vZHVsZXMvY29udHJvbGxlcic7XG5pbXBvcnQge2NhbGN1bGF0ZVByZWZlcnJlZFZhcmlhbnQsIGdldFBhZ2VWYXJpYW50LCBpc09wdE91dGVkLCBzZXRMb2NhbFZhcmlhbnR9IGZyb20gJy4vbW9kdWxlcy9tb2RlbCc7XG5pbXBvcnQge1xuXHRpc0xvZ2dlZEluLFxuXHRpc0xhbmdDaGluZXNlLFxuXHRpc1JlZmVycmVyQmxvY2tlZCxcblx0aXNXaWtpdGV4dFBhZ2UsXG5cdGlzVmlld2luZ1BhZ2UsXG5cdGlzUmVmZXJyZXJTZWxmLFxufSBmcm9tICcuL21vZHVsZXMvdXRpbHMnO1xuXG5mdW5jdGlvbiBtYWluKCkge1xuXHQvLyBNYW51YWxseSBvcHQgb3V0ZWQgdXNlcnNcblx0aWYgKGlzT3B0T3V0ZWQoKSkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGlmIChpc0xvZ2dlZEluKCkpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHQvLyBOb24tQ2hpbmVzZSBwYWdlcy91c2Vyc1xuXHRpZiAoIWlzTGFuZ0NoaW5lc2UoKSkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGFwcGx5VVJMVmFyaWFudCgpO1xuXG5cdGNvbnN0IHByZWZlcnJlZFZhcmlhbnQgPSBjYWxjdWxhdGVQcmVmZXJyZWRWYXJpYW50KCk7XG5cdGlmIChwcmVmZXJyZWRWYXJpYW50ICE9PSBudWxsKSB7XG5cdFx0Ly8gT3B0aW1pc3RpY2FsbHkgc2V0IGxvY2FsIHZhcmlhbnQgdG8gYmUgZXF1YWwgdG8gYnJvd3NlciB2YXJpYW50XG5cdFx0Ly8gSW4gY2FzZSB0aGUgdXNlcidzIGJyb3dzZXIgbGFuZ3VhZ2UgYmVjb21lcyBpbnZhbGlkIGluIHRoZSBmdXR1cmUsXG5cdFx0Ly8gdGhpcyByZWR1Y2VzIHRoZSBwb3NzaWJpbGl0eSB0byBzaG93IHByb21wdCB0byBkaXNydXB0IHVzZXJzLlxuXHRcdHNldExvY2FsVmFyaWFudChwcmVmZXJyZWRWYXJpYW50KTtcblx0fVxuXG5cdGNvbnN0IHBhZ2VWYXJpYW50ID0gZ2V0UGFnZVZhcmlhbnQoKTtcblxuXHQvLyBOb24tYXJ0aWNsZSBwYWdlIChKUy9DU1MgcGFnZXMsIFNwZWNpYWwgcGFnZXMgZXRjLilcblx0aWYgKHBhZ2VWYXJpYW50ID09PSBudWxsIHx8ICFpc1dpa2l0ZXh0UGFnZSgpKSB7XG5cdFx0Ly8gU3VjaCBwYWdlIGNhbid0IGhhdmUgdmFyaWFudCwgYnV0IHByZWZlcnJlZCB2YXJpYW50IG1heSBiZSBhdmFpbGFibGVcblx0XHQvLyBTbyBzdGlsbCByZXdyaXRlIGxpbmtzXG5cdFx0aWYgKHByZWZlcnJlZFZhcmlhbnQgIT09IG51bGwpIHtcblx0XHRcdHJld3JpdGVOYXZpZ2F0aW9uKHByZWZlcnJlZFZhcmlhbnQpO1xuXHRcdH1cblx0XHRyZXR1cm47XG5cdH1cblxuXHQvLyBQcmVmZXJyZWQgdmFyaWFudCB1bmF2YWlsYWJsZVxuXHRpZiAocHJlZmVycmVkVmFyaWFudCA9PT0gbnVsbCkge1xuXHRcdGlmIChpc1ZpZXdpbmdQYWdlKCkpIHtcblx0XHRcdHNob3dWYXJpYW50UHJvbXB0KCk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0aWYgKGlzUmVmZXJyZXJCbG9ja2VkKCkpIHtcblx0XHRyZXdyaXRlTmF2aWdhdGlvbihwcmVmZXJyZWRWYXJpYW50KTtcblx0XHRyZXR1cm47XG5cdH1cblxuXHQvLyBPbi1zaXRlIG5hdmlnYXRpb24gdG8gbGlua3MgaW5lbGlnaWJsZSBmb3Igd3JpdGluZ1xuXHQvLyBUaGUgZWxpZ2liaWxpdHkgY2hlY2sgaXMgcmVxdWlyZSBiZWNhdXNlIHVzZXIgbWF5IGNsaWNrIG9uIGEgbGluayB3aXRoIHZhcmlhbnQgaW50ZW50aW9uYWxseVxuXHQvLyBlLmcuIHZhcmlhbnQgZHJvcGRvd24gYW5kIHt7VmFyaWFudC1jbmhrdHdzZ319XG5cdGlmIChpc1JlZmVycmVyU2VsZigpICYmICFpc0VsaWdpYmxlRm9yUmV3cml0aW5nKGxvY2F0aW9uLmhyZWYpKSB7XG5cdFx0cmV3cml0ZU5hdmlnYXRpb24ocHJlZmVycmVkVmFyaWFudCk7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y2hlY2tUaGlzUGFnZShwcmVmZXJyZWRWYXJpYW50LCBwYWdlVmFyaWFudCk7XG5cdHJld3JpdGVOYXZpZ2F0aW9uKHByZWZlcnJlZFZhcmlhbnQpO1xufVxuXG5tYWluKCk7XG5cbi8vIEV4cG9zZSBmb3IgVmFyaWFudEFsbHlEaWFsb2cncyB1c2VcbmV4cG9ydCB7c2V0TG9jYWxWYXJpYW50LCBzZXRPcHRPdXR9IGZyb20gJy4vbW9kdWxlcy9tb2RlbCc7XG5leHBvcnQge3JlZGlyZWN0fSBmcm9tICcuL21vZHVsZXMvY29udHJvbGxlcic7XG4iLCAiY29uc3QgQkxPQ0tFRF9SRUZFUlJFUl9IT1NUID0gL14oW2Etel0rXFwuKT8oYmt3elxcLmNufHF3YmtcXC5jY3xxd2JrXFwub3JnKSQvaTtcblxuZnVuY3Rpb24gaXNMb2dnZWRJbigpOiBib29sZWFuIHtcblx0cmV0dXJuIG13LmNvbmZpZy5leGlzdHMoJ3dnVXNlcklkJyk7XG59XG5cbi8qKlxuICogQ2hlY2sgd2hldGhlciByZWZlcnJlciBvcmlnaW5hdGVzIGZyb20gdGhlIHNhbWUgZG9tYWluLlxuICovXG5mdW5jdGlvbiBpc1JlZmVycmVyU2VsZigpOiBib29sZWFuIHtcblx0dHJ5IHtcblx0XHRyZXR1cm4gbmV3IFVSTChkb2N1bWVudC5yZWZlcnJlcikuaG9zdG5hbWUgPT09IGxvY2F0aW9uLmhvc3RuYW1lO1xuXHR9IGNhdGNoIHtcblx0XHQvLyBJbnZhbGlkIFVSTFxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxufVxuXG5mdW5jdGlvbiBpc1JlZmVycmVyQmxvY2tlZCgpOiBib29sZWFuIHtcblx0dHJ5IHtcblx0XHRyZXR1cm4gQkxPQ0tFRF9SRUZFUlJFUl9IT1NULnRlc3QobmV3IFVSTChkb2N1bWVudC5yZWZlcnJlcikuaG9zdG5hbWUpO1xuXHR9IGNhdGNoIHtcblx0XHQvLyBJbnZhbGlkIFVSTFxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxufVxuXG5mdW5jdGlvbiBpc1ZpZXdpbmdQYWdlKCk6IGJvb2xlYW4ge1xuXHRyZXR1cm4gbXcuY29uZmlnLmdldCgnd2dBY3Rpb24nKSA9PT0gJ3ZpZXcnO1xufVxuXG4vKipcbiAqIENoZWNrIHdoZXRoZXIgdGhlIGN1cnJlbnQgbGFuZ3VhZ2UgKHNldCBpbiB1c2VyIHByZWZlcmVuY2Ugb3IgYnkgP3VzZWxhbmc9eHh4KVxuICogaXMgQ2hpbmVzZSBvciBub3QuXG4gKi9cbmZ1bmN0aW9uIGlzTGFuZ0NoaW5lc2UoKTogYm9vbGVhbiB7XG5cdHJldHVybiBtdy5jb25maWcuZ2V0KCd3Z1VzZXJMYW5ndWFnZScpLnN0YXJ0c1dpdGgoJ3poJyk7XG59XG5cbmZ1bmN0aW9uIGlzV2lraXRleHRQYWdlKCk6IGJvb2xlYW4ge1xuXHRyZXR1cm4gbXcuY29uZmlnLmdldCgnd2dDYW5vbmljYWxOYW1lc3BhY2UnKSAhPT0gJ1NwZWNpYWwnICYmIG13LmNvbmZpZy5nZXQoJ3dnUGFnZUNvbnRlbnRNb2RlbCcpID09PSAnd2lraXRleHQnO1xufVxuXG5leHBvcnQge2lzTG9nZ2VkSW4sIGlzUmVmZXJyZXJTZWxmLCBpc1JlZmVycmVyQmxvY2tlZCwgaXNWaWV3aW5nUGFnZSwgaXNMYW5nQ2hpbmVzZSwgaXNXaWtpdGV4dFBhZ2V9O1xuIiwgImltcG9ydCB7aXNMb2dnZWRJbn0gZnJvbSAnLi91dGlscyc7XG5cbmNvbnN0IExPQ0FMX1ZBUklBTlRfS0VZID0gJ3ZhLXZhcic7XG5jb25zdCBPUFRPVVRfS0VZID0gJ3ZhLW9wdG91dCc7XG5jb25zdCBWQUxJRF9WQVJJQU5UUyA9IFsnemgtY24nLCAnemgtc2cnLCAnemgtbXknLCAnemgtdHcnLCAnemgtaGsnLCAnemgtbW8nXSBhcyBjb25zdDtcbmNvbnN0IFZBUklBTlRTID0gWyd6aCcsICd6aC1oYW5zJywgJ3poLWhhbnQnLCAuLi5WQUxJRF9WQVJJQU5UU10gYXMgY29uc3Q7XG5jb25zdCBFWFRfVkFSSUFOVFMgPSBbXG5cdCd6aC1oYW5zLWNuJyxcblx0J3poLWhhbnMtc2cnLFxuXHQnemgtaGFucy1teScsXG5cdCd6aC1oYW50LXR3Jyxcblx0J3poLWhhbnQtaGsnLFxuXHQnemgtaGFudC1tbycsXG5cdC4uLlZBUklBTlRTLFxuXSBhcyBjb25zdDtcbi8vIFNvbWUgYnJvd3NlcnMgKGUuZy4gRmlyZWZveCBBbmRyb2lkKSBtYXkgcmV0dXJuIHN1Y2ggbGFuZ3VhZ2VzXG5jb25zdCBFWFRfTUFQUElORzogUmVjb3JkPHN0cmluZywgVmFsaWRWYXJpYW50PiA9IHtcblx0J3poLWhhbnMtY24nOiAnemgtY24nLFxuXHQnemgtaGFucy1zZyc6ICd6aC1zZycsXG5cdCd6aC1oYW5zLW15JzogJ3poLW15Jyxcblx0J3poLWhhbnQtdHcnOiAnemgtdHcnLFxuXHQnemgtaGFudC1oayc6ICd6aC1oaycsXG5cdCd6aC1oYW50LW1vJzogJ3poLW1vJyxcbn07XG5cbnR5cGUgVmFsaWRWYXJpYW50ID0gKHR5cGVvZiBWQUxJRF9WQVJJQU5UUylbbnVtYmVyXTtcbnR5cGUgVmFyaWFudCA9ICh0eXBlb2YgVkFSSUFOVFMpW251bWJlcl07XG50eXBlIEV4dFZhcmlhbnQgPSAodHlwZW9mIEVYVF9WQVJJQU5UUylbbnVtYmVyXTtcblxuZnVuY3Rpb24gaXNWYXJpYW50KHN0cjogc3RyaW5nKTogc3RyIGlzIFZhcmlhbnQge1xuXHRyZXR1cm4gKFZBUklBTlRTIGFzIFJlYWRvbmx5QXJyYXk8c3RyaW5nPikuaW5jbHVkZXMoc3RyKTtcbn1cblxuZnVuY3Rpb24gaXNWYWxpZFZhcmlhbnQoc3RyOiBzdHJpbmcpOiBzdHIgaXMgVmFsaWRWYXJpYW50IHtcblx0cmV0dXJuIChWQUxJRF9WQVJJQU5UUyBhcyBSZWFkb25seUFycmF5PHN0cmluZz4pLmluY2x1ZGVzKHN0cik7XG59XG5cbmZ1bmN0aW9uIGlzRXh0VmFyaWFudChzdHI6IHN0cmluZyk6IHN0ciBpcyBFeHRWYXJpYW50IHtcblx0cmV0dXJuIChFWFRfVkFSSUFOVFMgYXMgUmVhZG9ubHlBcnJheTxzdHJpbmc+KS5pbmNsdWRlcyhzdHIpO1xufVxuXG4vKipcbiAqIE1hcHMgYWRkaXRpb25hbCBsYW5nIGNvZGVzIHRvIHN0YW5kYXJkIHZhcmlhbnRzLlxuICpcbiAqIEByZXR1cm5zIHN0YW5kYXJkIHZhcmlhbnRcbiAqL1xuZnVuY3Rpb24gbm9ybWFsaXplVmFyaWFudChleHRWYXJpYW50OiBFeHRWYXJpYW50KTogVmFyaWFudCB7XG5cdHJldHVybiAoRVhUX01BUFBJTkdbZXh0VmFyaWFudF0gPz8gZXh0VmFyaWFudCkgYXMgVmFyaWFudDtcbn1cblxuLyoqXG4gKiBHZXQgY3VycmVudCB2YXJpYW50IG9mIHRoZSBwYWdlIChkb24ndCBiZSBtaXNsZWQgYnkgY29uZmlnIG5hbWluZykuXG4gKlxuICogQHJldHVybnMgdmFyaWFudCwgbnVsbCBmb3Igbm9uLXdpa2l0ZXh0IHBhZ2UgKGJ1dCBOT1QgYWxsIHN1Y2ggcGFnZXMgcmV0dXJucyBudWxsISlcbiAqL1xuZnVuY3Rpb24gZ2V0UGFnZVZhcmlhbnQoKTogVmFyaWFudCB8IG51bGwge1xuXHRjb25zdCByZXN1bHQgPSBtdy5jb25maWcuZ2V0KCd3Z1VzZXJWYXJpYW50Jyk7XG5cdHJldHVybiByZXN1bHQgIT09IG51bGwgJiYgaXNFeHRWYXJpYW50KHJlc3VsdCkgPyBub3JtYWxpemVWYXJpYW50KHJlc3VsdCkgOiBudWxsO1xufVxuXG4vKipcbiAqIEdldCBhY2NvdW50IHZhcmlhbnQuXG4gKlxuICogQHJldHVybnMgYWNjb3VudCB2YXJpYW50LCBudWxsIGZvciBhbm9ueW1vdXMgdXNlclxuICovXG5mdW5jdGlvbiBnZXRBY2NvdW50VmFyaWFudCgpOiBWYXJpYW50IHwgbnVsbCB7XG5cdGlmIChpc0xvZ2dlZEluKCkpIHtcblx0XHRjb25zdCByZXN1bHQgPSBtdy51c2VyLm9wdGlvbnMuZ2V0KCd2YXJpYW50JykgYXMgc3RyaW5nO1xuXHRcdHJldHVybiBpc0V4dFZhcmlhbnQocmVzdWx0KSA/IG5vcm1hbGl6ZVZhcmlhbnQocmVzdWx0KSA6IG51bGw7XG5cdH1cblx0cmV0dXJuIG51bGw7XG59XG5cbmZ1bmN0aW9uIGdldExvY2FsVmFyaWFudCgpOiBWYXJpYW50IHwgbnVsbCB7XG5cdGNvbnN0IHJlc3VsdCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKExPQ0FMX1ZBUklBTlRfS0VZKTtcblx0aWYgKHJlc3VsdCA9PT0gbnVsbCB8fCAhaXNFeHRWYXJpYW50KHJlc3VsdCkpIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXHRyZXR1cm4gbm9ybWFsaXplVmFyaWFudChyZXN1bHQpO1xufVxuXG4vKipcbiAqIFJldHVybiBicm93c2VyIGxhbmd1YWdlIGlmIGl0J3MgYSBDaGluZXNlIHZhcmlhbnQuXG4gKlxuICogQHJldHVybnMgYnJvd3NlciB2YXJpYW50XG4gKi9cbmZ1bmN0aW9uIGdldEJyb3dzZXJWYXJpYW50KCk6IFZhcmlhbnQgfCBudWxsIHtcblx0cmV0dXJuIChcblx0XHRuYXZpZ2F0b3IubGFuZ3VhZ2VzXG5cdFx0XHQubWFwKChsYW5nKSA9PiB7XG5cdFx0XHRcdHJldHVybiBsYW5nLnRvTG93ZXJDYXNlKCk7XG5cdFx0XHR9KVxuXHRcdFx0LmZpbHRlcihpc0V4dFZhcmlhbnQpXG5cdFx0XHQubWFwKG5vcm1hbGl6ZVZhcmlhbnQpXG5cdFx0XHQuZmluZChpc1ZhcmlhbnQpID8/IG51bGxcblx0KTtcbn1cblxuLyoqXG4gKiBHZXQgdGhlIFwibmF0dXJhbFwiIHZhcmlhbnQgaW5mZXJyZWQgYnkgTWVkaWFXaWtpIGZvciBhbm9ueW1vdXMgdXNlcnNcbiAqIHdoZW4gdGhlIGxpbmsgZG9lc24ndCBzcGVjaWZ5IGEgdmFyaWFudC5cbiAqXG4gKiBVc2VkIGluIGxpbmsgbm9ybWFsaXphdGlvbi5cbiAqXG4gKiBGSVhNRTogT2xkIFNhZmFyaSBpcyBrbm93biB0byBicmVhayB0aGlzIG1ldGhvZC5cbiAqIFVzZXIgcmVwb3J0ZWQgdGhhdCBvbiBhbiBpT1MgMTQgZGV2aWNlIHdpdGggQ2hpbmVzZSBsYW5ndWFnZSBhbmQgU2luZ2Fwb3JlIHJlZ2lvbiBzZXR0aW5ncyxcbiAqIEFjY2VwdC1MYW5ndWFnZSBpcyB6aC1jbiAodGh1cyBpbmZlcnJlZCBieSBNZWRpYVdpa2kpIGJ1dCB0aGlzIG1ldGhvZCByZXR1cm5zIHpoLXNnLlxuICpcbiAqIEByZXR1cm5zIHZhcmlhbnRcbiAqL1xuZnVuY3Rpb24gZ2V0TWVkaWFXaWtpVmFyaWFudCgpOiBWYXJpYW50IHwgbnVsbCB7XG5cdHJldHVybiBnZXRBY2NvdW50VmFyaWFudCgpID8/IGdldEJyb3dzZXJWYXJpYW50KCk7XG59XG5cbi8qKlxuICogQ2FsY3VsYXRlIHByZWZlcnJlZCB2YXJpYW50IGZyb20gYnJvd3NlciB2YXJpYW50LCBsb2NhbCB2YXJpYW50IGFuZCBhY2NvdW50IHZhcmlhbnQuXG4gKlxuICogUHJpb3JpdHk6IGFjY291bnQgdmFyaWFudCA+IGJyb3dzZXIgdmFyaWFudCA+IGxvY2FsIHZhcmlhbnRcbiAqXG4gKiBAcmV0dXJucyBwcmVmZXJyZWQgdmFyaWFudFxuICovXG5mdW5jdGlvbiBjYWxjdWxhdGVQcmVmZXJyZWRWYXJpYW50KCk6IFZhbGlkVmFyaWFudCB8IG51bGwge1xuXHRyZXR1cm4gW2dldEFjY291bnRWYXJpYW50KCksIGdldEJyb3dzZXJWYXJpYW50KCksIGdldExvY2FsVmFyaWFudCgpXVxuXHRcdC5tYXAoKHZhcmlhbnQpID0+IHtcblx0XHRcdHJldHVybiB2YXJpYW50ICE9PSBudWxsICYmIGlzVmFsaWRWYXJpYW50KHZhcmlhbnQpID8gdmFyaWFudCA6IG51bGw7XG5cdFx0fSlcblx0XHQucmVkdWNlKChwcmV2LCBjdXJyKSA9PiB7XG5cdFx0XHRyZXR1cm4gcHJldiA/PyBjdXJyO1xuXHRcdH0pO1xufVxuXG50eXBlIFNldExvY2FsVmFyaWFudCA9IHR5cGVvZiBzZXRMb2NhbFZhcmlhbnQ7XG5cbmZ1bmN0aW9uIHNldExvY2FsVmFyaWFudCh2YXJpYW50OiBWYXJpYW50KTogdm9pZCB7XG5cdGxvY2FsU3RvcmFnZS5zZXRJdGVtKExPQ0FMX1ZBUklBTlRfS0VZLCB2YXJpYW50KTtcbn1cblxudHlwZSBTZXRPcHRPdXQgPSB0eXBlb2Ygc2V0T3B0T3V0O1xuXG5mdW5jdGlvbiBzZXRPcHRPdXQoKTogdm9pZCB7XG5cdGxvY2FsU3RvcmFnZS5zZXRJdGVtKE9QVE9VVF9LRVksICcnKTtcbn1cblxuZnVuY3Rpb24gaXNPcHRPdXRlZCgpOiBib29sZWFuIHtcblx0cmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKE9QVE9VVF9LRVkpICE9PSBudWxsO1xufVxuXG5leHBvcnQge1xuXHR0eXBlIFNldExvY2FsVmFyaWFudCxcblx0dHlwZSBTZXRPcHRPdXQsXG5cdHR5cGUgVmFsaWRWYXJpYW50LFxuXHR0eXBlIFZhcmlhbnQsXG5cdGlzVmFyaWFudCxcblx0aXNWYWxpZFZhcmlhbnQsXG5cdGdldFBhZ2VWYXJpYW50LFxuXHRnZXRBY2NvdW50VmFyaWFudCxcblx0Z2V0TG9jYWxWYXJpYW50LFxuXHRnZXRCcm93c2VyVmFyaWFudCxcblx0Z2V0TWVkaWFXaWtpVmFyaWFudCxcblx0Y2FsY3VsYXRlUHJlZmVycmVkVmFyaWFudCxcblx0c2V0TG9jYWxWYXJpYW50LFxuXHRzZXRPcHRPdXQsXG5cdGlzT3B0T3V0ZWQsXG59O1xuIiwgImltcG9ydCB7VmFyaWFudCwgZ2V0TWVkaWFXaWtpVmFyaWFudCwgaXNWYWxpZFZhcmlhbnQsIHNldExvY2FsVmFyaWFudH0gZnJvbSAnLi9tb2RlbCc7XG5cbmNvbnN0IFJFR0VYX1dJS0lfVVJMID0gL15cXC8oPzp3aWtpfHpoKD86LVxcdyspPylcXC8vaTtcbmNvbnN0IFJFR0VYX1ZBUklBTlRfVVJMID0gL15cXC96aCg/Oi1cXHcrKT9cXC8vaTtcbmNvbnN0IFZBUklBTlRfUEFSQU0gPSAndmEtdmFyaWFudCc7XG5cbmZ1bmN0aW9uIGlzRWxpZ2libGVGb3JSZXdyaXRpbmcobGluazogc3RyaW5nKTogYm9vbGVhbiB7XG5cdHRyeSB7XG5cdFx0Ly8gTm8gcmV3cml0aW5nIGZvciBlbXB0eSBsaW5rc1xuXHRcdGlmIChsaW5rID09PSAnJykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHRjb25zdCB1cmwgPSBuZXcgVVJMKGxpbmssIGxvY2F0aW9uLm9yaWdpbik7XG5cdFx0Ly8gTm8gcmV3cml0aW5nIGlmIGxpbmsgaXRzZWxmIGhhcyB2YXJpYW50IGluZm9cblx0XHRpZiAoUkVHRVhfVkFSSUFOVF9VUkwudGVzdCh1cmwucGF0aG5hbWUpKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdGlmICh1cmwuc2VhcmNoUGFyYW1zLmhhcygndmFyaWFudCcpKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdC8vIE5vIHJld3JpdGluZyBmb3IgZm9yZWlnbiBvcmlnaW4gVVJMc1xuXHRcdC8vIE5vdGUgdGhhdCBsaW5rcyBsaWtlIGphdmFzY3JpcHQ6dm9pZCgwKSBhcmUgYmxvY2tlZCBieSB0aGlzXG5cdFx0aWYgKHVybC5ob3N0ICE9PSBsb2NhdGlvbi5ob3N0KSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRydWU7XG5cdH0gY2F0Y2gge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxufVxuXG5mdW5jdGlvbiByZXdyaXRlTGluayhsaW5rOiBzdHJpbmcsIHZhcmlhbnQ6IFZhcmlhbnQpOiBzdHJpbmcge1xuXHR0cnkge1xuXHRcdGNvbnN0IG5vcm1hbGl6YXRpb25UYXJnZXRWYXJpYW50ID0gZ2V0TWVkaWFXaWtpVmFyaWFudCgpO1xuXHRcdGNvbnN0IHVybCA9IG5ldyBVUkwobGluaywgbG9jYXRpb24ub3JpZ2luKTtcblx0XHRjb25zdCB7cGF0aG5hbWUsIHNlYXJjaFBhcmFtc30gPSB1cmw7XG5cblx0XHRpZiAoUkVHRVhfV0lLSV9VUkwudGVzdChwYXRobmFtZSkpIHtcblx0XHRcdHVybC5wYXRobmFtZSA9IGAvJHt2YXJpYW50fS8ke3VybC5wYXRobmFtZS5yZXBsYWNlKFJFR0VYX1dJS0lfVVJMLCAnJyl9YDtcblx0XHRcdHNlYXJjaFBhcmFtcy5kZWxldGUoJ3ZhcmlhbnQnKTsgLy8gRm9yIHRoaW5ncyBsaWtlIC96aC1jbi9BP3ZhcmlhbnQ9emgtaGtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c2VhcmNoUGFyYW1zLnNldCgndmFyaWFudCcsIHZhcmlhbnQpO1xuXHRcdH1cblxuXHRcdGlmICh2YXJpYW50ID09PSBub3JtYWxpemF0aW9uVGFyZ2V0VmFyaWFudCkge1xuXHRcdFx0Ly8gTm9ybWFsaXplIHRoZSBsaW5rLlxuXHRcdFx0Ly9cblx0XHRcdC8vIEZvciBleGFtcGxlLCBmb3IgbGluayAvemgtdHcvVGl0bGUgYW5kIG5vcm1hbGl6YXRpb24gdmFyaWFudCB6aC10dywgdGhlIHJlc3VsdCBpcyAvd2lraS9UaXRsZSxcblx0XHRcdC8vIHdoaWxlIGZvciB0aGUgc2FtZSBsaW5rIGFuZCBub3JtYWxpemF0aW9uIHZhcmlhbnQgemgtY24sIHRoZSByZXN1bHQgaXMgL3poLXR3L1RpdGxlICh1bmNoYW5nZWQpLlxuXHRcdFx0dXJsLnBhdGhuYW1lID0gdXJsLnBhdGhuYW1lLnJlcGxhY2UoUkVHRVhfV0lLSV9VUkwsICcvd2lraS8nKTtcblx0XHRcdHVybC5zZWFyY2hQYXJhbXMuZGVsZXRlKCd2YXJpYW50Jyk7XG5cdFx0fVxuXG5cdFx0Y29uc3QgcmVzdWx0ID0gdXJsLnRvU3RyaW5nKCk7XG5cblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9IGNhdGNoIHtcblx0XHRyZXR1cm4gbGluaztcblx0fVxufVxuXG5pbnRlcmZhY2UgUmVkaXJlY3Rpb25PcHRpb25zIHtcblx0bGluaz86IHN0cmluZztcblx0LyoqIFNob3VsZCBzdGlsbCByZWRpcmVjdCBldmVuIGRlc3RpbmF0aW9uIGxpbmsgaXMgdGhlIHNhbWUgYXMgY3VycmVudCBwYWdlICovXG5cdGZvcmNlZD86IGJvb2xlYW47XG59XG5cbnR5cGUgUmVkaXJlY3QgPSB0eXBlb2YgcmVkaXJlY3Q7XG5cbmZ1bmN0aW9uIHJlZGlyZWN0KHByZWZlcnJlZFZhcmlhbnQ6IFZhcmlhbnQsIG9wdGlvbnM6IFJlZGlyZWN0aW9uT3B0aW9ucyA9IHt9KTogdm9pZCB7XG5cdGNvbnN0IG9yaWdMaW5rID0gb3B0aW9ucy5saW5rID8/IGxvY2F0aW9uLmhyZWY7XG5cdGNvbnN0IG5ld0xpbmsgPSByZXdyaXRlTGluayhvcmlnTGluaywgcHJlZmVycmVkVmFyaWFudCk7XG5cblx0Ly8gUHJldmVudCBpbmZpbml0ZSByZWRpcmVjdHNcblx0Ly8gVGhpcyBjb3VsZCBoYXBwZW4gb2NjYXNpb25hbGx5LCBzZWUgZ2V0TWVkaWFXaWtpVmFyaWFudCgpJ3MgY29tbWVudHNcblx0aWYgKG9wdGlvbnMuZm9yY2VkIHx8IG5ld0xpbmsgIT09IGxvY2F0aW9uLmhyZWYpIHtcblx0XHQvLyBVc2UgcmVwbGFjZSgpIHRvIHByZXZlbnQgbmF2aWdhdGluZyBiYWNrXG5cdFx0bG9jYXRpb24ucmVwbGFjZShuZXdMaW5rKTtcblx0fVxufVxuXG5mdW5jdGlvbiBjaGVja1RoaXNQYWdlKHByZWZlcnJlZFZhcmlhbnQ6IFZhcmlhbnQsIHBhZ2VWYXJpYW50PzogVmFyaWFudCk6IHZvaWQge1xuXHRpZiAocGFnZVZhcmlhbnQgPT09IHByZWZlcnJlZFZhcmlhbnQpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCByZWRpcmVjdGlvbk9yaWdpbjogc3RyaW5nIHwgbnVsbCA9IG13LmNvbmZpZy5nZXQoJ3dnUmVkaXJlY3RlZEZyb20nKTtcblx0aWYgKHJlZGlyZWN0aW9uT3JpZ2luID09PSBudWxsKSB7XG5cdFx0cmVkaXJlY3QocHJlZmVycmVkVmFyaWFudCk7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Ly8gVXNlIFVSTCB0byByZXNlcnZlIG90aGVyIHBhcnRzIG9mIHRoZSBsaW5rXG5cdGNvbnN0IHJlZGlyZWN0aW9uVVJMID0gbmV3IFVSTChsb2NhdGlvbi5ocmVmKTtcblx0cmVkaXJlY3Rpb25VUkwucGF0aG5hbWUgPSBgL3dpa2kvJHtyZWRpcmVjdGlvbk9yaWdpbn1gO1xuXHRyZWRpcmVjdChwcmVmZXJyZWRWYXJpYW50LCB7bGluazogcmVkaXJlY3Rpb25VUkwudG9TdHJpbmcoKX0pO1xufVxuXG5mdW5jdGlvbiByZXdyaXRlTmF2aWdhdGlvbih2YXJpYW50OiBWYXJpYW50KTogdm9pZCB7XG5cdGZvciAoY29uc3QgbmFtZSBvZiBbJ2NsaWNrJywgJ2F1eGNsaWNrJywgJ2RyYWdzdGFydCddKSB7XG5cdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihuYW1lLCAoZXYpID0+IHtcblx0XHRcdGNvbnN0IHt0YXJnZXR9ID0gZXY7XG5cblx0XHRcdGlmICh0YXJnZXQgaW5zdGFuY2VvZiBFbGVtZW50KSB7XG5cdFx0XHRcdC8vIERvIG5vdCB3cml0ZSA8YT4gd2l0aCBoYXNoIG9ubHkgaHJlZiBvciBubyBocmVmXG5cdFx0XHRcdC8vIHdoaWNoIGlzIGtub3duIHRvIGNhdXNlIGJyZWFrYWdlIGluIGUuZy4gVmlzdWFsIEVkaXRvclxuXHRcdFx0XHRjb25zdCBhbmNob3I6IEhUTUxBbmNob3JFbGVtZW50IHwgbnVsbCA9IHRhcmdldC5jbG9zZXN0KCdhW2hyZWZdOm5vdChbaHJlZl49XCIjXCJdKScpO1xuXG5cdFx0XHRcdGlmIChhbmNob3IgIT09IG51bGwpIHtcblx0XHRcdFx0XHRjb25zdCBvcmlnTGluayA9IGFuY2hvci5ocmVmO1xuXHRcdFx0XHRcdGlmICghaXNFbGlnaWJsZUZvclJld3JpdGluZyhvcmlnTGluaykpIHtcblx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRjb25zdCBuZXdMaW5rID0gcmV3cml0ZUxpbmsob3JpZ0xpbmssIHZhcmlhbnQpO1xuXHRcdFx0XHRcdGlmIChuZXdMaW5rID09PSBvcmlnTGluaykge1xuXHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC8vIEJyb3dzZXIgc3VwcG9ydDogU2FmYXJpIDwgMTRcblx0XHRcdFx0XHQvLyBGYWlsIHNpbGVudGx5IHdoZW4gRHJhZ0V2ZW50IGlzIG5vdCBwcmVzZW50XG5cdFx0XHRcdFx0aWYgKHdpbmRvdy5EcmFnRXZlbnQgJiYgZXYgaW5zdGFuY2VvZiBEcmFnRXZlbnQgJiYgZXYuZGF0YVRyYW5zZmVyKSB7XG5cdFx0XHRcdFx0XHQvLyBNb2RpZnkgZHJhZyBkYXRhIGRpcmVjdGx5IGJlY2F1c2Ugc2V0dGluZyBocmVmIGhhcyBubyBlZmZlY3QgaW4gZHJhZyBldmVudFxuXHRcdFx0XHRcdFx0Zm9yIChjb25zdCB0eXBlIG9mIGV2LmRhdGFUcmFuc2Zlci50eXBlcykge1xuXHRcdFx0XHRcdFx0XHRldi5kYXRhVHJhbnNmZXIuc2V0RGF0YSh0eXBlLCBuZXdMaW5rKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0Ly8gVXNlIGEgbXV0ZXggdG8gYXZvaWQgYmVpbmcgb3ZlcndyaXR0ZW4gYnkgb3ZlcmxhcHBlZCBoYW5kbGVyIGNhbGxzXG5cdFx0XHRcdFx0XHRpZiAoYW5jaG9yLmRhdGFzZXRbJ3ZhTXV0ZXgnXSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdFx0XHRcdGFuY2hvci5kYXRhc2V0Wyd2YU11dGV4J10gPSAnJztcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0YW5jaG9yLmhyZWYgPSBuZXdMaW5rO1xuXG5cdFx0XHRcdFx0XHQvLyBIQUNLOiB3b3JrYXJvdW5kIHBvcHVwcyBub3Qgd29ya2luZyBvbiBtb2RpZmllZCBsaW5rc1xuXHRcdFx0XHRcdFx0Ly8gQWRkIGhhbmRsZXIgdG8gPGE+IGRpcmVjdGx5IHNvIGl0IHdhcyB0cmlnZ2VyZWQgYmVmb3JlIGFueXRoaW5nIGVsc2Vcblx0XHRcdFx0XHRcdGZvciAoY29uc3QgaW5uZXJOYW1lIG9mIFsnbW91c2VvdmVyJywgJ21vdXNlbGVhdmUnLCAna2V5dXAnXSkge1xuXHRcdFx0XHRcdFx0XHRhbmNob3IuYWRkRXZlbnRMaXN0ZW5lcihcblx0XHRcdFx0XHRcdFx0XHRpbm5lck5hbWUsXG5cdFx0XHRcdFx0XHRcdFx0KCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0aWYgKGFuY2hvci5kYXRhc2V0Wyd2YU11dGV4J10gIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRhbmNob3IuaHJlZiA9IG9yaWdMaW5rO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRkZWxldGUgYW5jaG9yLmRhdGFzZXRbJ3ZhTXV0ZXgnXTtcblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRcdHtvbmNlOiB0cnVlfVxuXHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG5cblx0Ly8gQWx0ZXIgPGZvcm0+IHN1Ym1pc3Npb24gYWN0aW9ucywgZXNwZWNpYWxseSBmb3IgZWRpdCBmb3Jtc1xuXHQvLyB0byBwcmV2ZW50IGEgbGF0ZXIgcmVmcmVzaCBjYXVzaW5nIGxvc3Mgb2YgdGhlIGVkaXQgYnVmZmVyXG5cdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChldikgPT4ge1xuXHRcdGNvbnN0IHt0YXJnZXR9ID0gZXY7XG5cblx0XHRpZiAodGFyZ2V0IGluc3RhbmNlb2YgSFRNTEZvcm1FbGVtZW50KSB7XG5cdFx0XHQvLyBVc2UgZ2V0QXR0cmlidXRlICYgc2V0QXR0cmlidXRlIHRvIHdvcmsgYXJvdW5kIGh0dHBzOi8vZ2l0aHViLmNvbS93aWtpbWVkaWEtZ2FkZ2V0cy9WYXJpYW50QWxseS9pc3N1ZXMvMTRcblx0XHRcdGNvbnN0IHN1Ym1pdFVybCA9IHRhcmdldC5nZXRBdHRyaWJ1dGUoJ2FjdGlvbicpO1xuXHRcdFx0aWYgKHN1Ym1pdFVybCAmJiBpc0VsaWdpYmxlRm9yUmV3cml0aW5nKHN1Ym1pdFVybCkpIHtcblx0XHRcdFx0Y29uc3QgbWV0aG9kID0gdGFyZ2V0LmdldEF0dHJpYnV0ZSgnbWV0aG9kJykgPz8gJ2dldCc7XG5cblx0XHRcdFx0aWYgKG1ldGhvZCA9PT0gJ2dldCcpIHtcblx0XHRcdFx0XHQvLyBJbiBHRVQgZm9ybXMsIHF1ZXJ5IHBhcmFtZXRlcnMgaW4gYWN0aW9uIGFyZSBzdHJpcGVkLCBzbyBhZGQgaXQgdmlhIGEgaGlkZGVuIDxpbnB1dD5cblx0XHRcdFx0XHQvLyBTZWUgaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMTExNjAxOS93aGVuLXN1Ym1pdHRpbmctYS1nZXQtZm9ybS10aGUtcXVlcnktc3RyaW5nLWlzLXJlbW92ZWQtZnJvbS10aGUtYWN0aW9uLXVybFxuXG5cdFx0XHRcdFx0Ly8gUmVtb3ZlIGV4aXN0aW5nIHZhcmlhbnQgPGlucHV0PidzLCBzaG91bGQgb25seSBiZSBjYXVzZWQgYnkgYmZjYWNoZSBkdWUgdG8gdGhlIHNwZWNpYWxcblx0XHRcdFx0XHQvLyByb2xlIG9mID92YXJpYW50IGluIE1lZGlhV2lraVxuXHRcdFx0XHRcdGZvciAoY29uc3QgZWxlbSBvZiB0YXJnZXQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbbmFtZT1cInZhcmlhbnRcIl0nKSkgZWxlbS5yZW1vdmUoKTtcblxuXHRcdFx0XHRcdGNvbnN0IHZhcmlhbnRJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG5cdFx0XHRcdFx0dmFyaWFudElucHV0LnR5cGUgPSAnaGlkZGVuJztcblx0XHRcdFx0XHR2YXJpYW50SW5wdXQubmFtZSA9ICd2YXJpYW50Jztcblx0XHRcdFx0XHR2YXJpYW50SW5wdXQudmFsdWUgPSB2YXJpYW50OyAvLyBUT0RPOiBObyBub3JtYWxpemF0aW9uIGhlcmUsIGJ1dCBzaG91bGQgbm90IGJlIGEgYmlnIHByb2JsZW1cblx0XHRcdFx0XHR0YXJnZXQuYXBwZW5kKHZhcmlhbnRJbnB1dCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGFyZ2V0LnNldEF0dHJpYnV0ZSgnYWN0aW9uJywgcmV3cml0ZUxpbmsoc3VibWl0VXJsLCB2YXJpYW50KSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBzaG93VmFyaWFudFByb21wdCgpOiB2b2lkIHtcblx0Y29uc3QgbW9kdWxlTmFtZSA9ICdleHQuZ2FkZ2V0LlZhcmlhbnRBbGx5RGlhbG9nJztcblx0dm9pZCBtdy5sb2FkZXIudXNpbmcobW9kdWxlTmFtZSwgKHJlcXVpcmUpID0+IHtcblx0XHRyZXF1aXJlKG1vZHVsZU5hbWUpO1xuXHR9KTtcbn1cblxuLyoqXG4gKiBTZXQgbG9jYWwgdmFyaWFudCBhY2NvcmRpbmcgdG8gVVJMIHF1ZXJ5IHBhcmFtZXRlcnMuXG4gKlxuICogZS5nLiBhIFVSTCB3aXRoID92YS12YXJpYW50PXpoLWNuIHdpbGwgc2V0IGxvY2FsIHZhcmlhbnQgdG8gemgtY25cbiAqL1xuZnVuY3Rpb24gYXBwbHlVUkxWYXJpYW50KCk6IHZvaWQge1xuXHRjb25zdCB2YXJpYW50ID0gbmV3IFVSTChsb2NhdGlvbi5ocmVmKS5zZWFyY2hQYXJhbXMuZ2V0KFZBUklBTlRfUEFSQU0pO1xuXHRpZiAodmFyaWFudCAhPT0gbnVsbCAmJiBpc1ZhbGlkVmFyaWFudCh2YXJpYW50KSkge1xuXHRcdHNldExvY2FsVmFyaWFudCh2YXJpYW50KTtcblx0fVxufVxuXG5leHBvcnQge1xuXHR0eXBlIFJlZGlyZWN0LFxuXHRpc0VsaWdpYmxlRm9yUmV3cml0aW5nLFxuXHRyZXdyaXRlTGluayxcblx0cmVkaXJlY3QsXG5cdGNoZWNrVGhpc1BhZ2UsXG5cdHJld3JpdGVOYXZpZ2F0aW9uLFxuXHRzaG93VmFyaWFudFByb21wdCxcblx0YXBwbHlVUkxWYXJpYW50LFxufTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLHNCQUFBLENBQUE7QUFBQUMsU0FBQUQscUJBQUE7RUFBQUUsVUFBQUEsTUFBQUE7RUFBQUMsaUJBQUFBLE1BQUFBO0VBQUFDLFdBQUFBLE1BQUFBO0FBQUEsQ0FBQTtBQUFBQyxPQUFBQyxVQUFBQyxhQUFBUCxtQkFBQTs7QUNBQSxJQUFNUSx3QkFBd0I7QUFFOUIsU0FBU0MsYUFBc0I7QUFDOUIsU0FBT0MsR0FBR0MsT0FBT0MsT0FBTyxVQUFVO0FBQ25DO0FBS0EsU0FBU0MsaUJBQTBCO0FBQ2xDLE1BQUk7QUFDSCxXQUFPLElBQUlDLElBQUlDLFNBQVNDLFFBQVEsRUFBRUMsYUFBYUMsU0FBU0Q7RUFDekQsUUFBUTtBQUVQLFdBQU87RUFDUjtBQUNEO0FBRUEsU0FBU0Usb0JBQTZCO0FBQ3JDLE1BQUk7QUFDSCxXQUFPWCxzQkFBc0JZLEtBQUssSUFBSU4sSUFBSUMsU0FBU0MsUUFBUSxFQUFFQyxRQUFRO0VBQ3RFLFFBQVE7QUFFUCxXQUFPO0VBQ1I7QUFDRDtBQUVBLFNBQVNJLGdCQUF5QjtBQUNqQyxTQUFPWCxHQUFHQyxPQUFPVyxJQUFJLFVBQVUsTUFBTTtBQUN0QztBQU1BLFNBQVNDLGdCQUF5QjtBQUNqQyxTQUFPYixHQUFHQyxPQUFPVyxJQUFJLGdCQUFnQixFQUFFRSxXQUFXLElBQUk7QUFDdkQ7QUFFQSxTQUFTQyxpQkFBMEI7QUFDbEMsU0FBT2YsR0FBR0MsT0FBT1csSUFBSSxzQkFBc0Is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RCxPQUFPO0VBQ3hCO0FBQ0Q7O0FIM0xBLFNBQVNzRixPQUFPO0FBRWYsTUFBSWpGLFdBQVcsR0FBRztBQUNqQjtFQUNEO0FBRUEsTUFBSXhELFdBQVcsR0FBRztBQUNqQjtFQUNEO0FBR0EsTUFBSSxDQUFDYyxjQUFjLEdBQUc7QUFDckI7RUFDRDtBQUVBMEgsa0JBQWdCO0FBRWhCLFFBQU03RCxtQkFBbUJ6QiwwQkFBMEI7QUFDbkQsTUFBSXlCLHFCQUFxQixNQUFNO0FBSTlCakYsb0JBQWdCaUYsZ0JBQWdCO0VBQ2pDO0FBRUEsUUFBTU8sY0FBY25ELGVBQWU7QUFHbkMsTUFBSW1ELGdCQUFnQixRQUFRLENBQUNsRSxlQUFlLEdBQUc7QUFHOUMsUUFBSTJELHFCQUFxQixNQUFNO0FBQzlCVSx3QkFBa0JWLGdCQUFnQjtJQUNuQztBQUNBO0VBQ0Q7QUFHQSxNQUFJQSxxQkFBcUIsTUFBTTtBQUM5QixRQUFJL0QsY0FBYyxHQUFHO0FBQ3BCdUgsd0JBQWtCO0FBQ2xCO0lBQ0Q7QUFFQTtFQUNEO0FBRUEsTUFBSXpILGtCQUFrQixHQUFHO0FBQ3hCMkUsc0JBQWtCVixnQkFBZ0I7QUFDbEM7RUFDRDtBQUtBLE1BQUl2RSxlQUFlLEtBQUssQ0FBQ3dELHVCQUF1Qm5ELFNBQVNxRSxJQUFJLEdBQUc7QUFDL0RPLHNCQUFrQlYsZ0JBQWdCO0FBQ2xDO0VBQ0Q7QUFFQU0sZ0JBQWNOLGtCQUFrQk8sV0FBVztBQUMzQ0csb0JBQWtCVixnQkFBZ0I7QUFDbkM7QUFFQThELEtBQUs7IiwKICAibmFtZXMiOiBbIlZhcmlhbnRBbGx5X2V4cG9ydHMiLCAiX19leHBvcnQiLCAicmVkaXJlY3QiLCAic2V0TG9jYWxWYXJpYW50IiwgInNldE9wdE91dCIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJfX3RvQ29tbW9uSlMiLCAiQkxPQ0tFRF9SRUZFUlJFUl9IT1NUIiwgImlzTG9nZ2VkSW4iLCAibXciLCAiY29uZmlnIiwgImV4aXN0cyIsICJpc1JlZmVycmVyU2VsZiIsICJVUkwiLCAiZG9jdW1lbnQiLCAicmVmZXJyZXIiLCAiaG9zdG5hbWUiLCAibG9jYXRpb24iLCAiaXNSZWZlcnJlckJsb2NrZWQiLCAidGVzdCIsICJpc1ZpZXdpbmdQYWdlIiwgImdldCIsICJpc0xhbmdDaGluZXNlIiwgInN0YXJ0c1dpdGgiLCAiaXNXaWtpdGV4dFBhZ2UiLCAiTE9DQUxfVkFSSUFOVF9LRVkiLCAiT1BUT1VUX0tFWSIsICJWQUxJRF9WQVJJQU5UUyIsICJWQVJJQU5UUyIsICJFWFRfVkFSSUFOVFMiLCAiRVhUX01BUFBJTkciLCAiaXNWYXJpYW50IiwgInN0ciIsICJpbmNsdWRlcyIsICJpc1ZhbGlkVmFyaWFudCIsICJpc0V4dFZhcmlhbnQiLCAibm9ybWFsaXplVmFyaWFudCIsICJleHRWYXJpYW50IiwgIl9FWFRfTUFQUElORyRleHRWYXJpYSIsICJnZXRQYWdlVmFyaWFudCIsICJyZXN1bHQiLCAiZ2V0QWNjb3VudFZhcmlhbnQiLCAidXNlciIsICJvcHRpb25zIiwgImdldExvY2FsVmFyaWFudCIsICJsb2NhbFN0b3JhZ2UiLCAiZ2V0SXRlbSIsICJnZXRCcm93c2VyVmFyaWFudCIsICJfbmF2aWdhdG9yJGxhbmd1YWdlcyQiLCAibmF2aWdhdG9yIiwgImxhbmd1YWdlcyIsICJtYXAiLCAibGFuZyIsICJ0b0xvd2VyQ2FzZSIsICJmaWx0ZXIiLCAiZmluZCIsICJnZXRNZWRpYVdpa2lWYXJpYW50IiwgIl9nZXRBY2NvdW50VmFyaWFudCIsICJjYWxjdWxhdGVQcmVmZXJyZWRWYXJpYW50IiwgInZhcmlhbnQiLCAicmVkdWNlIiwgInByZXYiLCAiY3VyciIsICJzZXRJdGVtIiwgImlzT3B0T3V0ZWQiLCAiUkVHRVhfV0lLSV9VUkwiLCAiUkVHRVhfVkFSSUFOVF9VUkwiLCAiVkFSSUFOVF9QQVJBTSIsICJpc0VsaWdpYmxlRm9yUmV3cml0aW5nIiwgImxpbmsiLCAidXJsIiwgIm9yaWdpbiIsICJwYXRobmFtZSIsICJzZWFyY2hQYXJhbXMiLCAiaGFzIiwgImhvc3QiLCAicmV3cml0ZUxpbmsiLCAibm9ybWFsaXphdGlvblRhcmdldFZhcmlhbnQiLCAiY29uY2F0IiwgInJlcGxhY2UiLCAiZGVsZXRlIiwgInNldCIsICJ0b1N0cmluZyIsICJwcmVmZXJyZWRWYXJpYW50IiwgIl9vcHRpb25zJGxpbmsiLCAib3JpZ0xpbmsiLCAiaHJlZiIsICJuZXdMaW5rIiwgImZvcmNlZCIsICJjaGVja1RoaXNQYWdlIiwgInBhZ2VWYXJpYW50IiwgInJlZGlyZWN0aW9uT3JpZ2luIiwgInJlZGlyZWN0aW9uVVJMIiwgInJld3JpdGVOYXZpZ2F0aW9uIiwgIl9pIiwgIl9hcnIiLCAibGVuZ3RoIiwgIm5hbWUiLCAiYWRkRXZlbnRMaXN0ZW5lciIsICJldiIsICJ0YXJnZXQiLCAiRWxlbWVudCIsICJhbmNob3IiLCAiY2xvc2VzdCIsICJ3aW5kb3ciLCAiRHJhZ0V2ZW50IiwgImRhdGFUcmFuc2ZlciIsICJfaXRlcmF0b3IyIiwgIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwgInR5cGVzIiwgIl9zdGVwMiIsICJzIiwgIm4iLCAiZG9uZSIsICJ0eXBlIiwgInZhbHVlIiwgInNldERhdGEiLCAiZXJyIiwgImUiLCAiZiIsICJkYXRhc2V0IiwgIl9pMiIsICJfYXJyMiIsICJpbm5lck5hbWUiLCAib25jZSIsICJIVE1MRm9ybUVsZW1lbnQiLCAic3VibWl0VXJsIiwgImdldEF0dHJpYnV0ZSIsICJfdGFyZ2V0JGdldEF0dHJpYnV0ZSIsICJtZXRob2QiLCAiX2l0ZXJhdG9yMyIsICJxdWVyeVNlbGVjdG9yQWxsIiwgIl9zdGVwMyIsICJlbGVtIiwgInJlbW92ZSIsICJ2YXJpYW50SW5wdXQiLCAiY3JlYXRlRWxlbWVudCIsICJhcHBlbmQiLCAic2V0QXR0cmlidXRlIiwgInNob3dWYXJpYW50UHJvbXB0IiwgIm1vZHVsZU5hbWUiLCAibG9hZGVyIiwgInVzaW5nIiwgInJlcXVpcmUyIiwgImFwcGx5VVJMVmFyaWFudCIsICJtYWluIl0KfQo=

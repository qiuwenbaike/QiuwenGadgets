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
  const result = mw.storage.getObject(LOCAL_VARIANT_KEY);
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1ZhcmlhbnRBbGx5L1ZhcmlhbnRBbGx5LnRzIiwgInNyYy9WYXJpYW50QWxseS9tb2R1bGVzL3V0aWxzLnRzIiwgInNyYy9WYXJpYW50QWxseS9tb2R1bGVzL21vZGVsLnRzIiwgInNyYy9WYXJpYW50QWxseS9tb2R1bGVzL2NvbnRyb2xsZXIudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7XG5cdGNoZWNrVGhpc1BhZ2UsXG5cdHJld3JpdGVOYXZpZ2F0aW9uLFxuXHRhcHBseVVSTFZhcmlhbnQsXG5cdHNob3dWYXJpYW50UHJvbXB0LFxuXHRpc0VsaWdpYmxlRm9yUmV3cml0aW5nLFxufSBmcm9tICcuL21vZHVsZXMvY29udHJvbGxlcic7XG5pbXBvcnQge2NhbGN1bGF0ZVByZWZlcnJlZFZhcmlhbnQsIGdldFBhZ2VWYXJpYW50LCBpc09wdE91dGVkLCBzZXRMb2NhbFZhcmlhbnR9IGZyb20gJy4vbW9kdWxlcy9tb2RlbCc7XG5pbXBvcnQge1xuXHRpc0xvZ2dlZEluLFxuXHRpc0xhbmdDaGluZXNlLFxuXHRpc1JlZmVycmVyQmxvY2tlZCxcblx0aXNXaWtpdGV4dFBhZ2UsXG5cdGlzVmlld2luZ1BhZ2UsXG5cdGlzUmVmZXJyZXJTZWxmLFxufSBmcm9tICcuL21vZHVsZXMvdXRpbHMnO1xuXG5mdW5jdGlvbiBtYWluKCkge1xuXHQvLyBNYW51YWxseSBvcHQgb3V0ZWQgdXNlcnNcblx0aWYgKGlzT3B0T3V0ZWQoKSkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGlmIChpc0xvZ2dlZEluKCkpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHQvLyBOb24tQ2hpbmVzZSBwYWdlcy91c2Vyc1xuXHRpZiAoIWlzTGFuZ0NoaW5lc2UoKSkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGFwcGx5VVJMVmFyaWFudCgpO1xuXG5cdGNvbnN0IHByZWZlcnJlZFZhcmlhbnQgPSBjYWxjdWxhdGVQcmVmZXJyZWRWYXJpYW50KCk7XG5cdGlmIChwcmVmZXJyZWRWYXJpYW50ICE9PSBudWxsKSB7XG5cdFx0Ly8gT3B0aW1pc3RpY2FsbHkgc2V0IGxvY2FsIHZhcmlhbnQgdG8gYmUgZXF1YWwgdG8gYnJvd3NlciB2YXJpYW50XG5cdFx0Ly8gSW4gY2FzZSB0aGUgdXNlcidzIGJyb3dzZXIgbGFuZ3VhZ2UgYmVjb21lcyBpbnZhbGlkIGluIHRoZSBmdXR1cmUsXG5cdFx0Ly8gdGhpcyByZWR1Y2VzIHRoZSBwb3NzaWJpbGl0eSB0byBzaG93IHByb21wdCB0byBkaXNydXB0IHVzZXJzLlxuXHRcdHNldExvY2FsVmFyaWFudChwcmVmZXJyZWRWYXJpYW50KTtcblx0fVxuXG5cdGNvbnN0IHBhZ2VWYXJpYW50ID0gZ2V0UGFnZVZhcmlhbnQoKTtcblxuXHQvLyBOb24tYXJ0aWNsZSBwYWdlIChKUy9DU1MgcGFnZXMsIFNwZWNpYWwgcGFnZXMgZXRjLilcblx0aWYgKHBhZ2VWYXJpYW50ID09PSBudWxsIHx8ICFpc1dpa2l0ZXh0UGFnZSgpKSB7XG5cdFx0Ly8gU3VjaCBwYWdlIGNhbid0IGhhdmUgdmFyaWFudCwgYnV0IHByZWZlcnJlZCB2YXJpYW50IG1heSBiZSBhdmFpbGFibGVcblx0XHQvLyBTbyBzdGlsbCByZXdyaXRlIGxpbmtzXG5cdFx0aWYgKHByZWZlcnJlZFZhcmlhbnQgIT09IG51bGwpIHtcblx0XHRcdHJld3JpdGVOYXZpZ2F0aW9uKHByZWZlcnJlZFZhcmlhbnQpO1xuXHRcdH1cblx0XHRyZXR1cm47XG5cdH1cblxuXHQvLyBQcmVmZXJyZWQgdmFyaWFudCB1bmF2YWlsYWJsZVxuXHRpZiAocHJlZmVycmVkVmFyaWFudCA9PT0gbnVsbCkge1xuXHRcdGlmIChpc1ZpZXdpbmdQYWdlKCkpIHtcblx0XHRcdHNob3dWYXJpYW50UHJvbXB0KCk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0aWYgKGlzUmVmZXJyZXJCbG9ja2VkKCkpIHtcblx0XHRyZXdyaXRlTmF2aWdhdGlvbihwcmVmZXJyZWRWYXJpYW50KTtcblx0XHRyZXR1cm47XG5cdH1cblxuXHQvLyBPbi1zaXRlIG5hdmlnYXRpb24gdG8gbGlua3MgaW5lbGlnaWJsZSBmb3Igd3JpdGluZ1xuXHQvLyBUaGUgZWxpZ2liaWxpdHkgY2hlY2sgaXMgcmVxdWlyZSBiZWNhdXNlIHVzZXIgbWF5IGNsaWNrIG9uIGEgbGluayB3aXRoIHZhcmlhbnQgaW50ZW50aW9uYWxseVxuXHQvLyBlLmcuIHZhcmlhbnQgZHJvcGRvd24gYW5kIHt7VmFyaWFudC1jbmhrdHdzZ319XG5cdGlmIChpc1JlZmVycmVyU2VsZigpICYmICFpc0VsaWdpYmxlRm9yUmV3cml0aW5nKGxvY2F0aW9uLmhyZWYpKSB7XG5cdFx0cmV3cml0ZU5hdmlnYXRpb24ocHJlZmVycmVkVmFyaWFudCk7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y2hlY2tUaGlzUGFnZShwcmVmZXJyZWRWYXJpYW50LCBwYWdlVmFyaWFudCk7XG5cdHJld3JpdGVOYXZpZ2F0aW9uKHByZWZlcnJlZFZhcmlhbnQpO1xufVxuXG5tYWluKCk7XG5cbi8vIEV4cG9zZSBmb3IgVmFyaWFudEFsbHlEaWFsb2cncyB1c2VcbmV4cG9ydCB7c2V0TG9jYWxWYXJpYW50LCBzZXRPcHRPdXR9IGZyb20gJy4vbW9kdWxlcy9tb2RlbCc7XG5leHBvcnQge3JlZGlyZWN0fSBmcm9tICcuL21vZHVsZXMvY29udHJvbGxlcic7XG4iLCAiY29uc3QgQkxPQ0tFRF9SRUZFUlJFUl9IT1NUID0gL14oW2Etel0rXFwuKT8oYmt3elxcLmNufHF3YmtcXC5jY3xxd2JrXFwub3JnKSQvaTtcblxuZnVuY3Rpb24gaXNMb2dnZWRJbigpOiBib29sZWFuIHtcblx0cmV0dXJuIG13LmNvbmZpZy5leGlzdHMoJ3dnVXNlcklkJyk7XG59XG5cbi8qKlxuICogQ2hlY2sgd2hldGhlciByZWZlcnJlciBvcmlnaW5hdGVzIGZyb20gdGhlIHNhbWUgZG9tYWluLlxuICovXG5mdW5jdGlvbiBpc1JlZmVycmVyU2VsZigpOiBib29sZWFuIHtcblx0dHJ5IHtcblx0XHRyZXR1cm4gbmV3IFVSTChkb2N1bWVudC5yZWZlcnJlcikuaG9zdG5hbWUgPT09IGxvY2F0aW9uLmhvc3RuYW1lO1xuXHR9IGNhdGNoIHtcblx0XHQvLyBJbnZhbGlkIFVSTFxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxufVxuXG5mdW5jdGlvbiBpc1JlZmVycmVyQmxvY2tlZCgpOiBib29sZWFuIHtcblx0dHJ5IHtcblx0XHRyZXR1cm4gQkxPQ0tFRF9SRUZFUlJFUl9IT1NULnRlc3QobmV3IFVSTChkb2N1bWVudC5yZWZlcnJlcikuaG9zdG5hbWUpO1xuXHR9IGNhdGNoIHtcblx0XHQvLyBJbnZhbGlkIFVSTFxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxufVxuXG5mdW5jdGlvbiBpc1ZpZXdpbmdQYWdlKCk6IGJvb2xlYW4ge1xuXHRyZXR1cm4gbXcuY29uZmlnLmdldCgnd2dBY3Rpb24nKSA9PT0gJ3ZpZXcnO1xufVxuXG4vKipcbiAqIENoZWNrIHdoZXRoZXIgdGhlIGN1cnJlbnQgbGFuZ3VhZ2UgKHNldCBpbiB1c2VyIHByZWZlcmVuY2Ugb3IgYnkgP3VzZWxhbmc9eHh4KVxuICogaXMgQ2hpbmVzZSBvciBub3QuXG4gKi9cbmZ1bmN0aW9uIGlzTGFuZ0NoaW5lc2UoKTogYm9vbGVhbiB7XG5cdHJldHVybiBtdy5jb25maWcuZ2V0KCd3Z1VzZXJMYW5ndWFnZScpLnN0YXJ0c1dpdGgoJ3poJyk7XG59XG5cbmZ1bmN0aW9uIGlzV2lraXRleHRQYWdlKCk6IGJvb2xlYW4ge1xuXHRyZXR1cm4gbXcuY29uZmlnLmdldCgnd2dDYW5vbmljYWxOYW1lc3BhY2UnKSAhPT0gJ1NwZWNpYWwnICYmIG13LmNvbmZpZy5nZXQoJ3dnUGFnZUNvbnRlbnRNb2RlbCcpID09PSAnd2lraXRleHQnO1xufVxuXG5leHBvcnQge2lzTG9nZ2VkSW4sIGlzUmVmZXJyZXJTZWxmLCBpc1JlZmVycmVyQmxvY2tlZCwgaXNWaWV3aW5nUGFnZSwgaXNMYW5nQ2hpbmVzZSwgaXNXaWtpdGV4dFBhZ2V9O1xuIiwgImltcG9ydCB7aXNMb2dnZWRJbn0gZnJvbSAnLi91dGlscyc7XG5cbmNvbnN0IExPQ0FMX1ZBUklBTlRfS0VZID0gJ3ZhLXZhcic7XG5jb25zdCBPUFRPVVRfS0VZID0gJ3ZhLW9wdG91dCc7XG5jb25zdCBWQUxJRF9WQVJJQU5UUyA9IFsnemgtY24nLCAnemgtc2cnLCAnemgtbXknLCAnemgtdHcnLCAnemgtaGsnLCAnemgtbW8nXSBhcyBjb25zdDtcbmNvbnN0IFZBUklBTlRTID0gWyd6aCcsICd6aC1oYW5zJywgJ3poLWhhbnQnLCAuLi5WQUxJRF9WQVJJQU5UU10gYXMgY29uc3Q7XG5jb25zdCBFWFRfVkFSSUFOVFMgPSBbXG5cdCd6aC1oYW5zLWNuJyxcblx0J3poLWhhbnMtc2cnLFxuXHQnemgtaGFucy1teScsXG5cdCd6aC1oYW50LXR3Jyxcblx0J3poLWhhbnQtaGsnLFxuXHQnemgtaGFudC1tbycsXG5cdC4uLlZBUklBTlRTLFxuXSBhcyBjb25zdDtcbi8vIFNvbWUgYnJvd3NlcnMgKGUuZy4gRmlyZWZveCBBbmRyb2lkKSBtYXkgcmV0dXJuIHN1Y2ggbGFuZ3VhZ2VzXG5jb25zdCBFWFRfTUFQUElORzogUmVjb3JkPHN0cmluZywgVmFsaWRWYXJpYW50PiA9IHtcblx0J3poLWhhbnMtY24nOiAnemgtY24nLFxuXHQnemgtaGFucy1zZyc6ICd6aC1zZycsXG5cdCd6aC1oYW5zLW15JzogJ3poLW15Jyxcblx0J3poLWhhbnQtdHcnOiAnemgtdHcnLFxuXHQnemgtaGFudC1oayc6ICd6aC1oaycsXG5cdCd6aC1oYW50LW1vJzogJ3poLW1vJyxcbn07XG5cbnR5cGUgVmFsaWRWYXJpYW50ID0gKHR5cGVvZiBWQUxJRF9WQVJJQU5UUylbbnVtYmVyXTtcbnR5cGUgVmFyaWFudCA9ICh0eXBlb2YgVkFSSUFOVFMpW251bWJlcl07XG50eXBlIEV4dFZhcmlhbnQgPSAodHlwZW9mIEVYVF9WQVJJQU5UUylbbnVtYmVyXTtcblxuZnVuY3Rpb24gaXNWYXJpYW50KHN0cjogc3RyaW5nKTogc3RyIGlzIFZhcmlhbnQge1xuXHRyZXR1cm4gKFZBUklBTlRTIGFzIHJlYWRvbmx5IHN0cmluZ1tdKS5pbmNsdWRlcyhzdHIpO1xufVxuXG5mdW5jdGlvbiBpc1ZhbGlkVmFyaWFudChzdHI6IHN0cmluZyk6IHN0ciBpcyBWYWxpZFZhcmlhbnQge1xuXHRyZXR1cm4gKFZBTElEX1ZBUklBTlRTIGFzIHJlYWRvbmx5IHN0cmluZ1tdKS5pbmNsdWRlcyhzdHIpO1xufVxuXG5mdW5jdGlvbiBpc0V4dFZhcmlhbnQoc3RyOiBzdHJpbmcpOiBzdHIgaXMgRXh0VmFyaWFudCB7XG5cdHJldHVybiAoRVhUX1ZBUklBTlRTIGFzIHJlYWRvbmx5IHN0cmluZ1tdKS5pbmNsdWRlcyhzdHIpO1xufVxuXG4vKipcbiAqIE1hcHMgYWRkaXRpb25hbCBsYW5nIGNvZGVzIHRvIHN0YW5kYXJkIHZhcmlhbnRzLlxuICpcbiAqIEByZXR1cm5zIHN0YW5kYXJkIHZhcmlhbnRcbiAqL1xuZnVuY3Rpb24gbm9ybWFsaXplVmFyaWFudChleHRWYXJpYW50OiBFeHRWYXJpYW50KTogVmFyaWFudCB7XG5cdHJldHVybiAoRVhUX01BUFBJTkdbZXh0VmFyaWFudF0gPz8gZXh0VmFyaWFudCkgYXMgVmFyaWFudDtcbn1cblxuLyoqXG4gKiBHZXQgY3VycmVudCB2YXJpYW50IG9mIHRoZSBwYWdlIChkb24ndCBiZSBtaXNsZWQgYnkgY29uZmlnIG5hbWluZykuXG4gKlxuICogQHJldHVybnMgdmFyaWFudCwgbnVsbCBmb3Igbm9uLXdpa2l0ZXh0IHBhZ2UgKGJ1dCBOT1QgYWxsIHN1Y2ggcGFnZXMgcmV0dXJucyBudWxsISlcbiAqL1xuZnVuY3Rpb24gZ2V0UGFnZVZhcmlhbnQoKTogVmFyaWFudCB8IG51bGwge1xuXHRjb25zdCByZXN1bHQgPSBtdy5jb25maWcuZ2V0KCd3Z1VzZXJWYXJpYW50Jyk7XG5cdHJldHVybiByZXN1bHQgIT09IG51bGwgJiYgaXNFeHRWYXJpYW50KHJlc3VsdCkgPyBub3JtYWxpemVWYXJpYW50KHJlc3VsdCkgOiBudWxsO1xufVxuXG4vKipcbiAqIEdldCBhY2NvdW50IHZhcmlhbnQuXG4gKlxuICogQHJldHVybnMgYWNjb3VudCB2YXJpYW50LCBudWxsIGZvciBhbm9ueW1vdXMgdXNlclxuICovXG5mdW5jdGlvbiBnZXRBY2NvdW50VmFyaWFudCgpOiBWYXJpYW50IHwgbnVsbCB7XG5cdGlmIChpc0xvZ2dlZEluKCkpIHtcblx0XHRjb25zdCByZXN1bHQgPSBtdy51c2VyLm9wdGlvbnMuZ2V0KCd2YXJpYW50JykgYXMgc3RyaW5nO1xuXHRcdHJldHVybiBpc0V4dFZhcmlhbnQocmVzdWx0KSA/IG5vcm1hbGl6ZVZhcmlhbnQocmVzdWx0KSA6IG51bGw7XG5cdH1cblx0cmV0dXJuIG51bGw7XG59XG5cbmZ1bmN0aW9uIGdldExvY2FsVmFyaWFudCgpOiBWYXJpYW50IHwgbnVsbCB7XG5cdGNvbnN0IHJlc3VsdCA9IG13LnN0b3JhZ2UuZ2V0T2JqZWN0KExPQ0FMX1ZBUklBTlRfS0VZKSBhcyBzdHJpbmcgfCBudWxsO1xuXHRpZiAocmVzdWx0ID09PSBudWxsIHx8ICFpc0V4dFZhcmlhbnQocmVzdWx0KSkge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cdHJldHVybiBub3JtYWxpemVWYXJpYW50KHJlc3VsdCk7XG59XG5cbi8qKlxuICogUmV0dXJuIGJyb3dzZXIgbGFuZ3VhZ2UgaWYgaXQncyBhIENoaW5lc2UgdmFyaWFudC5cbiAqXG4gKiBAcmV0dXJucyBicm93c2VyIHZhcmlhbnRcbiAqL1xuZnVuY3Rpb24gZ2V0QnJvd3NlclZhcmlhbnQoKTogVmFyaWFudCB8IG51bGwge1xuXHRyZXR1cm4gKFxuXHRcdG5hdmlnYXRvci5sYW5ndWFnZXNcblx0XHRcdC5tYXAoKGxhbmcpID0+IHtcblx0XHRcdFx0cmV0dXJuIGxhbmcudG9Mb3dlckNhc2UoKTtcblx0XHRcdH0pXG5cdFx0XHQuZmlsdGVyKGlzRXh0VmFyaWFudClcblx0XHRcdC5tYXAobm9ybWFsaXplVmFyaWFudClcblx0XHRcdC5maW5kKGlzVmFyaWFudCkgPz8gbnVsbFxuXHQpO1xufVxuXG4vKipcbiAqIEdldCB0aGUgXCJuYXR1cmFsXCIgdmFyaWFudCBpbmZlcnJlZCBieSBNZWRpYVdpa2kgZm9yIGFub255bW91cyB1c2Vyc1xuICogd2hlbiB0aGUgbGluayBkb2Vzbid0IHNwZWNpZnkgYSB2YXJpYW50LlxuICpcbiAqIFVzZWQgaW4gbGluayBub3JtYWxpemF0aW9uLlxuICpcbiAqIEZJWE1FOiBPbGQgU2FmYXJpIGlzIGtub3duIHRvIGJyZWFrIHRoaXMgbWV0aG9kLlxuICogVXNlciByZXBvcnRlZCB0aGF0IG9uIGFuIGlPUyAxNCBkZXZpY2Ugd2l0aCBDaGluZXNlIGxhbmd1YWdlIGFuZCBTaW5nYXBvcmUgcmVnaW9uIHNldHRpbmdzLFxuICogQWNjZXB0LUxhbmd1YWdlIGlzIHpoLWNuICh0aHVzIGluZmVycmVkIGJ5IE1lZGlhV2lraSkgYnV0IHRoaXMgbWV0aG9kIHJldHVybnMgemgtc2cuXG4gKlxuICogQHJldHVybnMgdmFyaWFudFxuICovXG5mdW5jdGlvbiBnZXRNZWRpYVdpa2lWYXJpYW50KCk6IFZhcmlhbnQgfCBudWxsIHtcblx0cmV0dXJuIGdldEFjY291bnRWYXJpYW50KCkgPz8gZ2V0QnJvd3NlclZhcmlhbnQoKTtcbn1cblxuLyoqXG4gKiBDYWxjdWxhdGUgcHJlZmVycmVkIHZhcmlhbnQgZnJvbSBicm93c2VyIHZhcmlhbnQsIGxvY2FsIHZhcmlhbnQgYW5kIGFjY291bnQgdmFyaWFudC5cbiAqXG4gKiBQcmlvcml0eTogYWNjb3VudCB2YXJpYW50ID4gYnJvd3NlciB2YXJpYW50ID4gbG9jYWwgdmFyaWFudFxuICpcbiAqIEByZXR1cm5zIHByZWZlcnJlZCB2YXJpYW50XG4gKi9cbmZ1bmN0aW9uIGNhbGN1bGF0ZVByZWZlcnJlZFZhcmlhbnQoKTogVmFsaWRWYXJpYW50IHwgbnVsbCB7XG5cdHJldHVybiBbZ2V0QWNjb3VudFZhcmlhbnQoKSwgZ2V0QnJvd3NlclZhcmlhbnQoKSwgZ2V0TG9jYWxWYXJpYW50KCldXG5cdFx0Lm1hcCgodmFyaWFudCkgPT4ge1xuXHRcdFx0cmV0dXJuIHZhcmlhbnQgIT09IG51bGwgJiYgaXNWYWxpZFZhcmlhbnQodmFyaWFudCkgPyB2YXJpYW50IDogbnVsbDtcblx0XHR9KVxuXHRcdC5yZWR1Y2UoKHByZXYsIGN1cnIpID0+IHtcblx0XHRcdHJldHVybiBwcmV2ID8/IGN1cnI7XG5cdFx0fSk7XG59XG5cbnR5cGUgU2V0TG9jYWxWYXJpYW50ID0gdHlwZW9mIHNldExvY2FsVmFyaWFudDtcblxuZnVuY3Rpb24gc2V0TG9jYWxWYXJpYW50KHZhcmlhbnQ6IFZhcmlhbnQpOiB2b2lkIHtcblx0bXcuc3RvcmFnZS5zZXQoTE9DQUxfVkFSSUFOVF9LRVksIHZhcmlhbnQpO1xufVxuXG50eXBlIFNldE9wdE91dCA9IHR5cGVvZiBzZXRPcHRPdXQ7XG5cbmZ1bmN0aW9uIHNldE9wdE91dCgpOiB2b2lkIHtcblx0bXcuc3RvcmFnZS5zZXQoT1BUT1VUX0tFWSwgJycpO1xufVxuXG5mdW5jdGlvbiBpc09wdE91dGVkKCk6IGJvb2xlYW4ge1xuXHRyZXR1cm4gbXcuc3RvcmFnZS5nZXQoT1BUT1VUX0tFWSkgIT09IG51bGw7XG59XG5cbmV4cG9ydCB7XG5cdHR5cGUgU2V0TG9jYWxWYXJpYW50LFxuXHR0eXBlIFNldE9wdE91dCxcblx0dHlwZSBWYWxpZFZhcmlhbnQsXG5cdHR5cGUgVmFyaWFudCxcblx0aXNWYXJpYW50LFxuXHRpc1ZhbGlkVmFyaWFudCxcblx0Z2V0UGFnZVZhcmlhbnQsXG5cdGdldEFjY291bnRWYXJpYW50LFxuXHRnZXRMb2NhbFZhcmlhbnQsXG5cdGdldEJyb3dzZXJWYXJpYW50LFxuXHRnZXRNZWRpYVdpa2lWYXJpYW50LFxuXHRjYWxjdWxhdGVQcmVmZXJyZWRWYXJpYW50LFxuXHRzZXRMb2NhbFZhcmlhbnQsXG5cdHNldE9wdE91dCxcblx0aXNPcHRPdXRlZCxcbn07XG4iLCAiaW1wb3J0IHtWYXJpYW50LCBnZXRNZWRpYVdpa2lWYXJpYW50LCBpc1ZhbGlkVmFyaWFudCwgc2V0TG9jYWxWYXJpYW50fSBmcm9tICcuL21vZGVsJztcblxuY29uc3QgUkVHRVhfV0lLSV9VUkwgPSAvXlxcLyg/Ondpa2l8emgoPzotXFx3Kyk/KVxcLy9pO1xuY29uc3QgUkVHRVhfVkFSSUFOVF9VUkwgPSAvXlxcL3poKD86LVxcdyspP1xcLy9pO1xuY29uc3QgVkFSSUFOVF9QQVJBTSA9ICd2YS12YXJpYW50JztcblxuZnVuY3Rpb24gaXNFbGlnaWJsZUZvclJld3JpdGluZyhsaW5rOiBzdHJpbmcpOiBib29sZWFuIHtcblx0dHJ5IHtcblx0XHQvLyBObyByZXdyaXRpbmcgZm9yIGVtcHR5IGxpbmtzXG5cdFx0aWYgKGxpbmsgPT09ICcnKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdGNvbnN0IHVybCA9IG5ldyBVUkwobGluaywgbG9jYXRpb24ub3JpZ2luKTtcblx0XHQvLyBObyByZXdyaXRpbmcgaWYgbGluayBpdHNlbGYgaGFzIHZhcmlhbnQgaW5mb1xuXHRcdGlmIChSRUdFWF9WQVJJQU5UX1VSTC50ZXN0KHVybC5wYXRobmFtZSkpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0aWYgKHVybC5zZWFyY2hQYXJhbXMuaGFzKCd2YXJpYW50JykpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0Ly8gTm8gcmV3cml0aW5nIGZvciBmb3JlaWduIG9yaWdpbiBVUkxzXG5cdFx0Ly8gTm90ZSB0aGF0IGxpbmtzIGxpa2UgamF2YXNjcmlwdDp2b2lkKDApIGFyZSBibG9ja2VkIGJ5IHRoaXNcblx0XHRpZiAodXJsLmhvc3QgIT09IGxvY2F0aW9uLmhvc3QpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fSBjYXRjaCB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHJld3JpdGVMaW5rKGxpbms6IHN0cmluZywgdmFyaWFudDogVmFyaWFudCk6IHN0cmluZyB7XG5cdHRyeSB7XG5cdFx0Y29uc3Qgbm9ybWFsaXphdGlvblRhcmdldFZhcmlhbnQgPSBnZXRNZWRpYVdpa2lWYXJpYW50KCk7XG5cdFx0Y29uc3QgdXJsID0gbmV3IFVSTChsaW5rLCBsb2NhdGlvbi5vcmlnaW4pO1xuXHRcdGNvbnN0IHtwYXRobmFtZSwgc2VhcmNoUGFyYW1zfSA9IHVybDtcblxuXHRcdGlmIChSRUdFWF9XSUtJX1VSTC50ZXN0KHBhdGhuYW1lKSkge1xuXHRcdFx0dXJsLnBhdGhuYW1lID0gYC8ke3ZhcmlhbnR9LyR7dXJsLnBhdGhuYW1lLnJlcGxhY2UoUkVHRVhfV0lLSV9VUkwsICcnKX1gO1xuXHRcdFx0c2VhcmNoUGFyYW1zLmRlbGV0ZSgndmFyaWFudCcpOyAvLyBGb3IgdGhpbmdzIGxpa2UgL3poLWNuL0E/dmFyaWFudD16aC1oa1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzZWFyY2hQYXJhbXMuc2V0KCd2YXJpYW50JywgdmFyaWFudCk7XG5cdFx0fVxuXG5cdFx0aWYgKHZhcmlhbnQgPT09IG5vcm1hbGl6YXRpb25UYXJnZXRWYXJpYW50KSB7XG5cdFx0XHQvLyBOb3JtYWxpemUgdGhlIGxpbmsuXG5cdFx0XHQvL1xuXHRcdFx0Ly8gRm9yIGV4YW1wbGUsIGZvciBsaW5rIC96aC10dy9UaXRsZSBhbmQgbm9ybWFsaXphdGlvbiB2YXJpYW50IHpoLXR3LCB0aGUgcmVzdWx0IGlzIC93aWtpL1RpdGxlLFxuXHRcdFx0Ly8gd2hpbGUgZm9yIHRoZSBzYW1lIGxpbmsgYW5kIG5vcm1hbGl6YXRpb24gdmFyaWFudCB6aC1jbiwgdGhlIHJlc3VsdCBpcyAvemgtdHcvVGl0bGUgKHVuY2hhbmdlZCkuXG5cdFx0XHR1cmwucGF0aG5hbWUgPSB1cmwucGF0aG5hbWUucmVwbGFjZShSRUdFWF9XSUtJX1VSTCwgJy93aWtpLycpO1xuXHRcdFx0dXJsLnNlYXJjaFBhcmFtcy5kZWxldGUoJ3ZhcmlhbnQnKTtcblx0XHR9XG5cblx0XHRjb25zdCByZXN1bHQgPSB1cmwudG9TdHJpbmcoKTtcblxuXHRcdHJldHVybiByZXN1bHQ7XG5cdH0gY2F0Y2gge1xuXHRcdHJldHVybiBsaW5rO1xuXHR9XG59XG5cbmludGVyZmFjZSBSZWRpcmVjdGlvbk9wdGlvbnMge1xuXHRsaW5rPzogc3RyaW5nO1xuXHQvKiogU2hvdWxkIHN0aWxsIHJlZGlyZWN0IGV2ZW4gZGVzdGluYXRpb24gbGluayBpcyB0aGUgc2FtZSBhcyBjdXJyZW50IHBhZ2UgKi9cblx0Zm9yY2VkPzogYm9vbGVhbjtcbn1cblxudHlwZSBSZWRpcmVjdCA9IHR5cGVvZiByZWRpcmVjdDtcblxuZnVuY3Rpb24gcmVkaXJlY3QocHJlZmVycmVkVmFyaWFudDogVmFyaWFudCwgb3B0aW9uczogUmVkaXJlY3Rpb25PcHRpb25zID0ge30pOiB2b2lkIHtcblx0Y29uc3Qgb3JpZ0xpbmsgPSBvcHRpb25zLmxpbmsgPz8gbG9jYXRpb24uaHJlZjtcblx0Y29uc3QgbmV3TGluayA9IHJld3JpdGVMaW5rKG9yaWdMaW5rLCBwcmVmZXJyZWRWYXJpYW50KTtcblxuXHQvLyBQcmV2ZW50IGluZmluaXRlIHJlZGlyZWN0c1xuXHQvLyBUaGlzIGNvdWxkIGhhcHBlbiBvY2Nhc2lvbmFsbHksIHNlZSBnZXRNZWRpYVdpa2lWYXJpYW50KCkncyBjb21tZW50c1xuXHRpZiAob3B0aW9ucy5mb3JjZWQgfHwgbmV3TGluayAhPT0gbG9jYXRpb24uaHJlZikge1xuXHRcdC8vIFVzZSByZXBsYWNlKCkgdG8gcHJldmVudCBuYXZpZ2F0aW5nIGJhY2tcblx0XHRsb2NhdGlvbi5yZXBsYWNlKG5ld0xpbmspO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGNoZWNrVGhpc1BhZ2UocHJlZmVycmVkVmFyaWFudDogVmFyaWFudCwgcGFnZVZhcmlhbnQ/OiBWYXJpYW50KTogdm9pZCB7XG5cdGlmIChwYWdlVmFyaWFudCA9PT0gcHJlZmVycmVkVmFyaWFudCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IHJlZGlyZWN0aW9uT3JpZ2luOiBzdHJpbmcgfCBudWxsID0gbXcuY29uZmlnLmdldCgnd2dSZWRpcmVjdGVkRnJvbScpO1xuXHRpZiAocmVkaXJlY3Rpb25PcmlnaW4gPT09IG51bGwpIHtcblx0XHRyZWRpcmVjdChwcmVmZXJyZWRWYXJpYW50KTtcblx0XHRyZXR1cm47XG5cdH1cblxuXHQvLyBVc2UgVVJMIHRvIHJlc2VydmUgb3RoZXIgcGFydHMgb2YgdGhlIGxpbmtcblx0Y29uc3QgcmVkaXJlY3Rpb25VUkwgPSBuZXcgVVJMKGxvY2F0aW9uLmhyZWYpO1xuXHRyZWRpcmVjdGlvblVSTC5wYXRobmFtZSA9IGAvd2lraS8ke3JlZGlyZWN0aW9uT3JpZ2lufWA7XG5cdHJlZGlyZWN0KHByZWZlcnJlZFZhcmlhbnQsIHtsaW5rOiByZWRpcmVjdGlvblVSTC50b1N0cmluZygpfSk7XG59XG5cbmZ1bmN0aW9uIHJld3JpdGVOYXZpZ2F0aW9uKHZhcmlhbnQ6IFZhcmlhbnQpOiB2b2lkIHtcblx0Zm9yIChjb25zdCBuYW1lIG9mIFsnY2xpY2snLCAnYXV4Y2xpY2snLCAnZHJhZ3N0YXJ0J10pIHtcblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKG5hbWUsIChldikgPT4ge1xuXHRcdFx0Y29uc3Qge3RhcmdldH0gPSBldjtcblxuXHRcdFx0aWYgKHRhcmdldCBpbnN0YW5jZW9mIEVsZW1lbnQpIHtcblx0XHRcdFx0Ly8gRG8gbm90IHdyaXRlIDxhPiB3aXRoIGhhc2ggb25seSBocmVmIG9yIG5vIGhyZWZcblx0XHRcdFx0Ly8gd2hpY2ggaXMga25vd24gdG8gY2F1c2UgYnJlYWthZ2UgaW4gZS5nLiBWaXN1YWwgRWRpdG9yXG5cdFx0XHRcdGNvbnN0IGFuY2hvcjogSFRNTEFuY2hvckVsZW1lbnQgfCBudWxsID0gdGFyZ2V0LmNsb3Nlc3QoJ2FbaHJlZl06bm90KFtocmVmXj1cIiNcIl0pJyk7XG5cblx0XHRcdFx0aWYgKGFuY2hvciAhPT0gbnVsbCkge1xuXHRcdFx0XHRcdGNvbnN0IG9yaWdMaW5rID0gYW5jaG9yLmhyZWY7XG5cdFx0XHRcdFx0aWYgKCFpc0VsaWdpYmxlRm9yUmV3cml0aW5nKG9yaWdMaW5rKSkge1xuXHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGNvbnN0IG5ld0xpbmsgPSByZXdyaXRlTGluayhvcmlnTGluaywgdmFyaWFudCk7XG5cdFx0XHRcdFx0aWYgKG5ld0xpbmsgPT09IG9yaWdMaW5rKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Ly8gQnJvd3NlciBzdXBwb3J0OiBTYWZhcmkgPCAxNFxuXHRcdFx0XHRcdC8vIEZhaWwgc2lsZW50bHkgd2hlbiBEcmFnRXZlbnQgaXMgbm90IHByZXNlbnRcblx0XHRcdFx0XHRpZiAod2luZG93LkRyYWdFdmVudCAmJiBldiBpbnN0YW5jZW9mIERyYWdFdmVudCAmJiBldi5kYXRhVHJhbnNmZXIpIHtcblx0XHRcdFx0XHRcdC8vIE1vZGlmeSBkcmFnIGRhdGEgZGlyZWN0bHkgYmVjYXVzZSBzZXR0aW5nIGhyZWYgaGFzIG5vIGVmZmVjdCBpbiBkcmFnIGV2ZW50XG5cdFx0XHRcdFx0XHRmb3IgKGNvbnN0IHR5cGUgb2YgZXYuZGF0YVRyYW5zZmVyLnR5cGVzKSB7XG5cdFx0XHRcdFx0XHRcdGV2LmRhdGFUcmFuc2Zlci5zZXREYXRhKHR5cGUsIG5ld0xpbmspO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHQvLyBVc2UgYSBtdXRleCB0byBhdm9pZCBiZWluZyBvdmVyd3JpdHRlbiBieSBvdmVybGFwcGVkIGhhbmRsZXIgY2FsbHNcblx0XHRcdFx0XHRcdGlmIChhbmNob3IuZGF0YXNldFsndmFNdXRleCddID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0XHRcdFx0YW5jaG9yLmRhdGFzZXRbJ3ZhTXV0ZXgnXSA9ICcnO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRhbmNob3IuaHJlZiA9IG5ld0xpbms7XG5cblx0XHRcdFx0XHRcdC8vIEhBQ0s6IHdvcmthcm91bmQgcG9wdXBzIG5vdCB3b3JraW5nIG9uIG1vZGlmaWVkIGxpbmtzXG5cdFx0XHRcdFx0XHQvLyBBZGQgaGFuZGxlciB0byA8YT4gZGlyZWN0bHkgc28gaXQgd2FzIHRyaWdnZXJlZCBiZWZvcmUgYW55dGhpbmcgZWxzZVxuXHRcdFx0XHRcdFx0Zm9yIChjb25zdCBpbm5lck5hbWUgb2YgWydtb3VzZW92ZXInLCAnbW91c2VsZWF2ZScsICdrZXl1cCddKSB7XG5cdFx0XHRcdFx0XHRcdGFuY2hvci5hZGRFdmVudExpc3RlbmVyKFxuXHRcdFx0XHRcdFx0XHRcdGlubmVyTmFtZSxcblx0XHRcdFx0XHRcdFx0XHQoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRpZiAoYW5jaG9yLmRhdGFzZXRbJ3ZhTXV0ZXgnXSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGFuY2hvci5ocmVmID0gb3JpZ0xpbms7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGRlbGV0ZSBhbmNob3IuZGF0YXNldFsndmFNdXRleCddO1xuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdFx0e29uY2U6IHRydWV9XG5cdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cblxuXHQvLyBBbHRlciA8Zm9ybT4gc3VibWlzc2lvbiBhY3Rpb25zLCBlc3BlY2lhbGx5IGZvciBlZGl0IGZvcm1zXG5cdC8vIHRvIHByZXZlbnQgYSBsYXRlciByZWZyZXNoIGNhdXNpbmcgbG9zcyBvZiB0aGUgZWRpdCBidWZmZXJcblx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGV2KSA9PiB7XG5cdFx0Y29uc3Qge3RhcmdldH0gPSBldjtcblxuXHRcdGlmICh0YXJnZXQgaW5zdGFuY2VvZiBIVE1MRm9ybUVsZW1lbnQpIHtcblx0XHRcdC8vIFVzZSBnZXRBdHRyaWJ1dGUgJiBzZXRBdHRyaWJ1dGUgdG8gd29yayBhcm91bmQgaHR0cHM6Ly9naXRodWIuY29tL3dpa2ltZWRpYS1nYWRnZXRzL1ZhcmlhbnRBbGx5L2lzc3Vlcy8xNFxuXHRcdFx0Y29uc3Qgc3VibWl0VXJsID0gdGFyZ2V0LmdldEF0dHJpYnV0ZSgnYWN0aW9uJyk7XG5cdFx0XHRpZiAoc3VibWl0VXJsICYmIGlzRWxpZ2libGVGb3JSZXdyaXRpbmcoc3VibWl0VXJsKSkge1xuXHRcdFx0XHRjb25zdCBtZXRob2QgPSB0YXJnZXQuZ2V0QXR0cmlidXRlKCdtZXRob2QnKSA/PyAnZ2V0JztcblxuXHRcdFx0XHRpZiAobWV0aG9kID09PSAnZ2V0Jykge1xuXHRcdFx0XHRcdC8vIEluIEdFVCBmb3JtcywgcXVlcnkgcGFyYW1ldGVycyBpbiBhY3Rpb24gYXJlIHN0cmlwZWQsIHNvIGFkZCBpdCB2aWEgYSBoaWRkZW4gPGlucHV0PlxuXHRcdFx0XHRcdC8vIFNlZSBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8xMTE2MDE5L3doZW4tc3VibWl0dGluZy1hLWdldC1mb3JtLXRoZS1xdWVyeS1zdHJpbmctaXMtcmVtb3ZlZC1mcm9tLXRoZS1hY3Rpb24tdXJsXG5cblx0XHRcdFx0XHQvLyBSZW1vdmUgZXhpc3RpbmcgdmFyaWFudCA8aW5wdXQ+J3MsIHNob3VsZCBvbmx5IGJlIGNhdXNlZCBieSBiZmNhY2hlIGR1ZSB0byB0aGUgc3BlY2lhbFxuXHRcdFx0XHRcdC8vIHJvbGUgb2YgP3ZhcmlhbnQgaW4gTWVkaWFXaWtpXG5cdFx0XHRcdFx0Zm9yIChjb25zdCBlbGVtIG9mIHRhcmdldC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dFtuYW1lPVwidmFyaWFudFwiXScpKSBlbGVtLnJlbW92ZSgpO1xuXG5cdFx0XHRcdFx0Y29uc3QgdmFyaWFudElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcblx0XHRcdFx0XHR2YXJpYW50SW5wdXQudHlwZSA9ICdoaWRkZW4nO1xuXHRcdFx0XHRcdHZhcmlhbnRJbnB1dC5uYW1lID0gJ3ZhcmlhbnQnO1xuXHRcdFx0XHRcdHZhcmlhbnRJbnB1dC52YWx1ZSA9IHZhcmlhbnQ7IC8vIFRPRE86IE5vIG5vcm1hbGl6YXRpb24gaGVyZSwgYnV0IHNob3VsZCBub3QgYmUgYSBiaWcgcHJvYmxlbVxuXHRcdFx0XHRcdHRhcmdldC5hcHBlbmQodmFyaWFudElucHV0KTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0YXJnZXQuc2V0QXR0cmlidXRlKCdhY3Rpb24nLCByZXdyaXRlTGluayhzdWJtaXRVcmwsIHZhcmlhbnQpKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fSk7XG59XG5cbmZ1bmN0aW9uIHNob3dWYXJpYW50UHJvbXB0KCk6IHZvaWQge1xuXHRjb25zdCBtb2R1bGVOYW1lID0gJ2V4dC5nYWRnZXQuVmFyaWFudEFsbHlEaWFsb2cnO1xuXHR2b2lkIG13LmxvYWRlci51c2luZyhtb2R1bGVOYW1lLCAocmVxdWlyZSkgPT4ge1xuXHRcdHJlcXVpcmUobW9kdWxlTmFtZSk7XG5cdH0pO1xufVxuXG4vKipcbiAqIFNldCBsb2NhbCB2YXJpYW50IGFjY29yZGluZyB0byBVUkwgcXVlcnkgcGFyYW1ldGVycy5cbiAqXG4gKiBlLmcuIGEgVVJMIHdpdGggP3ZhLXZhcmlhbnQ9emgtY24gd2lsbCBzZXQgbG9jYWwgdmFyaWFudCB0byB6aC1jblxuICovXG5mdW5jdGlvbiBhcHBseVVSTFZhcmlhbnQoKTogdm9pZCB7XG5cdGNvbnN0IHZhcmlhbnQgPSBuZXcgVVJMKGxvY2F0aW9uLmhyZWYpLnNlYXJjaFBhcmFtcy5nZXQoVkFSSUFOVF9QQVJBTSk7XG5cdGlmICh2YXJpYW50ICE9PSBudWxsICYmIGlzVmFsaWRWYXJpYW50KHZhcmlhbnQpKSB7XG5cdFx0c2V0TG9jYWxWYXJpYW50KHZhcmlhbnQpO1xuXHR9XG59XG5cbmV4cG9ydCB7XG5cdHR5cGUgUmVkaXJlY3QsXG5cdGlzRWxpZ2libGVGb3JSZXdyaXRpbmcsXG5cdHJld3JpdGVMaW5rLFxuXHRyZWRpcmVjdCxcblx0Y2hlY2tUaGlzUGFnZSxcblx0cmV3cml0ZU5hdmlnYXRpb24sXG5cdHNob3dWYXJpYW50UHJvbXB0LFxuXHRhcHBseVVSTFZhcmlhbnQsXG59O1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsc0JBQUEsQ0FBQTtBQUFBQyxTQUFBRCxxQkFBQTtFQUFBRSxVQUFBQSxNQUFBQTtFQUFBQyxpQkFBQUEsTUFBQUE7RUFBQUMsV0FBQUEsTUFBQUE7QUFBQSxDQUFBO0FBQUFDLE9BQUFDLFVBQUFDLGFBQUFQLG1CQUFBOztBQ0FBLElBQU1RLHdCQUF3QjtBQUU5QixTQUFTQyxhQUFzQjtBQUM5QixTQUFPQyxHQUFHQyxPQUFPQyxPQUFPLFVBQVU7QUFDbkM7QUFLQSxTQUFTQyxpQkFBMEI7QUFDbEMsTUFBSTtBQUNILFdBQU8sSUFBSUMsSUFBSUMsU0FBU0MsUUFBUSxFQUFFQyxhQUFhQyxTQUFTRDtFQUN6RCxRQUFRO0FBRVAsV0FBTztFQUNSO0FBQ0Q7QUFFQSxTQUFTRSxvQkFBNkI7QUFDckMsTUFBSTtBQUNILFdBQU9YLHNCQUFzQlksS0FBSyxJQUFJTixJQUFJQyxTQUFTQyxRQUFRLEVBQUVDLFFBQVE7RUFDdEUsUUFBUTtBQUVQLFdBQU87RUFDUjtBQUNEO0FBRUEsU0FBU0ksZ0JBQXlCO0FBQ2pDLFNBQU9YLEdBQUdDLE9BQU9XLElBQUksVUFBVSxNQUFNO0FBQ3RDO0FBTUEsU0FBU0MsZ0JBQXlCO0FBQ2pDLFNBQU9iLEdBQUdDLE9BQU9XLElBQUksZ0JBQWdCLEVBQUVFLFdBQVcsSUFBSTtBQUN2RDtBQUVBLFNBQVNDLGlCQUEwQjtBQUNsQyxTQUFPZixHQUFHQyxPQUFPVyxJQUFJLHNCQUFzQixNQUFNLGFBQWFaLEdB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QUFDaER6RCxvQkFBZ0J5RCxPQUFPO0VBQ3hCO0FBQ0Q7O0FIM0xBLFNBQVNxRixPQUFPO0FBRWYsTUFBSWhGLFdBQVcsR0FBRztBQUNqQjtFQUNEO0FBRUEsTUFBSXhELFdBQVcsR0FBRztBQUNqQjtFQUNEO0FBR0EsTUFBSSxDQUFDYyxjQUFjLEdBQUc7QUFDckI7RUFDRDtBQUVBeUgsa0JBQWdCO0FBRWhCLFFBQU03RCxtQkFBbUJ4QiwwQkFBMEI7QUFDbkQsTUFBSXdCLHFCQUFxQixNQUFNO0FBSTlCaEYsb0JBQWdCZ0YsZ0JBQWdCO0VBQ2pDO0FBRUEsUUFBTU8sY0FBY2xELGVBQWU7QUFHbkMsTUFBSWtELGdCQUFnQixRQUFRLENBQUNqRSxlQUFlLEdBQUc7QUFHOUMsUUFBSTBELHFCQUFxQixNQUFNO0FBQzlCVSx3QkFBa0JWLGdCQUFnQjtJQUNuQztBQUNBO0VBQ0Q7QUFHQSxNQUFJQSxxQkFBcUIsTUFBTTtBQUM5QixRQUFJOUQsY0FBYyxHQUFHO0FBQ3BCc0gsd0JBQWtCO0FBQ2xCO0lBQ0Q7QUFFQTtFQUNEO0FBRUEsTUFBSXhILGtCQUFrQixHQUFHO0FBQ3hCMEUsc0JBQWtCVixnQkFBZ0I7QUFDbEM7RUFDRDtBQUtBLE1BQUl0RSxlQUFlLEtBQUssQ0FBQ3dELHVCQUF1Qm5ELFNBQVNvRSxJQUFJLEdBQUc7QUFDL0RPLHNCQUFrQlYsZ0JBQWdCO0FBQ2xDO0VBQ0Q7QUFFQU0sZ0JBQWNOLGtCQUFrQk8sV0FBVztBQUMzQ0csb0JBQWtCVixnQkFBZ0I7QUFDbkM7QUFFQThELEtBQUs7IiwKICAibmFtZXMiOiBbIlZhcmlhbnRBbGx5X2V4cG9ydHMiLCAiX19leHBvcnQiLCAicmVkaXJlY3QiLCAic2V0TG9jYWxWYXJpYW50IiwgInNldE9wdE91dCIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJfX3RvQ29tbW9uSlMiLCAiQkxPQ0tFRF9SRUZFUlJFUl9IT1NUIiwgImlzTG9nZ2VkSW4iLCAibXciLCAiY29uZmlnIiwgImV4aXN0cyIsICJpc1JlZmVycmVyU2VsZiIsICJVUkwiLCAiZG9jdW1lbnQiLCAicmVmZXJyZXIiLCAiaG9zdG5hbWUiLCAibG9jYXRpb24iLCAiaXNSZWZlcnJlckJsb2NrZWQiLCAidGVzdCIsICJpc1ZpZXdpbmdQYWdlIiwgImdldCIsICJpc0xhbmdDaGluZXNlIiwgInN0YXJ0c1dpdGgiLCAiaXNXaWtpdGV4dFBhZ2UiLCAiTE9DQUxfVkFSSUFOVF9LRVkiLCAiT1BUT1VUX0tFWSIsICJWQUxJRF9WQVJJQU5UUyIsICJWQVJJQU5UUyIsICJFWFRfVkFSSUFOVFMiLCAiRVhUX01BUFBJTkciLCAiaXNWYXJpYW50IiwgInN0ciIsICJpbmNsdWRlcyIsICJpc1ZhbGlkVmFyaWFudCIsICJpc0V4dFZhcmlhbnQiLCAibm9ybWFsaXplVmFyaWFudCIsICJleHRWYXJpYW50IiwgIl9FWFRfTUFQUElORyRleHRWYXJpYSIsICJnZXRQYWdlVmFyaWFudCIsICJyZXN1bHQiLCAiZ2V0QWNjb3VudFZhcmlhbnQiLCAidXNlciIsICJvcHRpb25zIiwgImdldExvY2FsVmFyaWFudCIsICJzdG9yYWdlIiwgImdldE9iamVjdCIsICJnZXRCcm93c2VyVmFyaWFudCIsICJfbmF2aWdhdG9yJGxhbmd1YWdlcyQiLCAibmF2aWdhdG9yIiwgImxhbmd1YWdlcyIsICJtYXAiLCAibGFuZyIsICJ0b0xvd2VyQ2FzZSIsICJmaWx0ZXIiLCAiZmluZCIsICJnZXRNZWRpYVdpa2lWYXJpYW50IiwgIl9nZXRBY2NvdW50VmFyaWFudCIsICJjYWxjdWxhdGVQcmVmZXJyZWRWYXJpYW50IiwgInZhcmlhbnQiLCAicmVkdWNlIiwgInByZXYiLCAiY3VyciIsICJzZXQiLCAiaXNPcHRPdXRlZCIsICJSRUdFWF9XSUtJX1VSTCIsICJSRUdFWF9WQVJJQU5UX1VSTCIsICJWQVJJQU5UX1BBUkFNIiwgImlzRWxpZ2libGVGb3JSZXdyaXRpbmciLCAibGluayIsICJ1cmwiLCAib3JpZ2luIiwgInBhdGhuYW1lIiwgInNlYXJjaFBhcmFtcyIsICJoYXMiLCAiaG9zdCIsICJyZXdyaXRlTGluayIsICJub3JtYWxpemF0aW9uVGFyZ2V0VmFyaWFudCIsICJjb25jYXQiLCAicmVwbGFjZSIsICJkZWxldGUiLCAidG9TdHJpbmciLCAicHJlZmVycmVkVmFyaWFudCIsICJfb3B0aW9ucyRsaW5rIiwgIm9yaWdMaW5rIiwgImhyZWYiLCAibmV3TGluayIsICJmb3JjZWQiLCAiY2hlY2tUaGlzUGFnZSIsICJwYWdlVmFyaWFudCIsICJyZWRpcmVjdGlvbk9yaWdpbiIsICJyZWRpcmVjdGlvblVSTCIsICJyZXdyaXRlTmF2aWdhdGlvbiIsICJfaSIsICJfYXJyIiwgImxlbmd0aCIsICJuYW1lIiwgImFkZEV2ZW50TGlzdGVuZXIiLCAiZXYiLCAidGFyZ2V0IiwgIkVsZW1lbnQiLCAiYW5jaG9yIiwgImNsb3Nlc3QiLCAid2luZG93IiwgIkRyYWdFdmVudCIsICJkYXRhVHJhbnNmZXIiLCAiX2l0ZXJhdG9yMiIsICJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsICJ0eXBlcyIsICJfc3RlcDIiLCAicyIsICJuIiwgImRvbmUiLCAidHlwZSIsICJ2YWx1ZSIsICJzZXREYXRhIiwgImVyciIsICJlIiwgImYiLCAiZGF0YXNldCIsICJfaTIiLCAiX2FycjIiLCAiaW5uZXJOYW1lIiwgIm9uY2UiLCAiSFRNTEZvcm1FbGVtZW50IiwgInN1Ym1pdFVybCIsICJnZXRBdHRyaWJ1dGUiLCAiX3RhcmdldCRnZXRBdHRyaWJ1dGUiLCAibWV0aG9kIiwgIl9pdGVyYXRvcjMiLCAicXVlcnlTZWxlY3RvckFsbCIsICJfc3RlcDMiLCAiZWxlbSIsICJyZW1vdmUiLCAidmFyaWFudElucHV0IiwgImNyZWF0ZUVsZW1lbnQiLCAiYXBwZW5kIiwgInNldEF0dHJpYnV0ZSIsICJzaG93VmFyaWFudFByb21wdCIsICJtb2R1bGVOYW1lIiwgImxvYWRlciIsICJ1c2luZyIsICJyZXF1aXJlMiIsICJhcHBseVVSTFZhcmlhbnQiLCAibWFpbiJdCn0K

/**
 * SPDX-License-Identifier: GPL-2.0
 * _addText: '{{Gadget Header|license=GPL-2.0}}'
 *
 * @base {@link https://github.com/wikimedia-gadgets/VariantAlly}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/VariantAlly}
 * @license GPL-2.0 {@link https://www.qiuwenbaike.cn/wiki/H:GPLV2}
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
function _getRequireWildcardCache(e) {
  if ("function" != typeof WeakMap)
    return null;
  var r = /* @__PURE__ */ new WeakMap(), t = /* @__PURE__ */ new WeakMap();
  return (_getRequireWildcardCache = function(e2) {
    return e2 ? t : r;
  })(e);
}
function _interopRequireWildcard(e, r) {
  if (!r && e && e.__esModule)
    return e;
  if (null === e || "object" != typeof e && "function" != typeof e)
    return { default: e };
  var t = _getRequireWildcardCache(r);
  if (t && t.has(e))
    return t.get(e);
  var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var u in e)
    if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) {
      var i = a ? Object.getOwnPropertyDescriptor(e, u) : null;
      i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u];
    }
  return n.default = e, t && t.set(e, n), n;
}
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
//! src/VariantAlly/VariantAlly.ts
var VariantAlly_exports = {};
__export(VariantAlly_exports, {
  redirect: () => redirect,
  setLocalVariant: () => setLocalVariant,
  setOptOut: () => setOptOut
});
module.exports = __toCommonJS(VariantAlly_exports);
//! src/VariantAlly/modules/utils.ts
function isLoggedIn() {
  return mw.config.exists("wgUserId");
}
function isReferrerSelf() {
  try {
    return new mw.Uri(document.referrer).host === location.host;
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
    const url = new mw.Uri(link);
    if (REGEX_VARIANT_URL.test(url.path)) {
      return false;
    }
    if (url.query["variant"]) {
      return false;
    }
    if (url.host !== location.host) {
      return false;
    }
    return true;
  } catch {
    output("isEligibleForRewriting", "Exception occurs when checking ".concat(link, "!"));
    return false;
  }
}
function rewriteLink(link, variant) {
  try {
    const normalizationTargetVariant = getMediaWikiVariant();
    const url = new mw.Uri(link);
    const {
      path
    } = url;
    const {
      query
    } = url;
    if (REGEX_WIKI_URL.test(path)) {
      url.path = "/".concat(variant, "/").concat(url.path.replace(REGEX_WIKI_URL, ""));
      delete query["variant"];
    } else {
      query["variant"] = variant;
    }
    if (variant === normalizationTargetVariant) {
      url.path = path.replace(REGEX_WIKI_URL, "/wiki/");
      delete query["variant"];
    }
    const result = url.toString();
    output("rewriteLink", "".concat(link, " + ").concat(variant, " - ").concat(normalizationTargetVariant, " => ").concat(result));
    return result;
  } catch {
    output("rewriteLink", "Exception occurs when rewriting ".concat(link, " + ").concat(variant, "!"));
    return link;
  }
}
function redirect(preferredVariant, options = {}) {
  var _options$link;
  const origLink = (_options$link = options.link) !== null && _options$link !== void 0 ? _options$link : location.href;
  const newLink = rewriteLink(origLink, preferredVariant);
  if (options.forced || newLink !== location.href) {
    location.replace(newLink);
  } else {
    output("redirect", "newLink === location.href. No refreshing page.");
  }
}
function checkThisPage(preferredVariant, pageVariant) {
  if (pageVariant === preferredVariant) {
    output("checkThisPage", "Variant is correct :)");
    return;
  }
  output("checkThisPage", "Redirecting to ".concat(preferredVariant, "..."));
  const redirectionOrigin = mw.config.get("wgRedirectedFrom");
  if (redirectionOrigin === null) {
    redirect(preferredVariant);
    return;
  }
  output("checkThisPage", "Detected redirection from ".concat(redirectionOrigin));
  const redirectionURL = new mw.Uri();
  redirectionURL.path = "/wiki/".concat(redirectionOrigin);
  redirect(preferredVariant, {
    link: redirectionURL.toString()
  });
}
function rewriteAnchors(variant) {
  for (var _i = 0, _arr = ["click", "auxclick", "dragstart"]; _i < _arr.length; _i++) {
    const name = _arr[_i];
    document.addEventListener(name, (ev) => {
      const {
        target
      } = ev;
      if (target instanceof Element) {
        const anchor = target.closest('a[href]:not([href^="#"])');
        if (anchor !== null) {
          output("rewriteAnchors", "Event ".concat(ev.type, " on ").concat(anchor.href));
          const origLink = anchor.href;
          if (!isEligibleForRewriting(origLink)) {
            output("rewriteAnchors", "Anchor does not require rewriting. Stop.");
            return;
          }
          const newLink = rewriteLink(origLink, variant);
          if (newLink === origLink) {
            output("rewriteAnchors", "Anchor link is unchanged. Stop.");
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
            output("rewriteAnchors", "dragHandler", "Drop data changed!");
          } else {
            if (anchor.dataset["vaMutex"] === void 0) {
              anchor.dataset["vaMutex"] = "";
              output("rewriteAnchors", "clickHandler", "Anchor locked.");
            }
            anchor.href = newLink;
            output("rewriteAnchors", "clickHandler", "href ".concat(anchor.href, ", origLink ").concat(origLink));
            for (var _i2 = 0, _arr2 = ["mouseover", "mouseleave", "keyup"]; _i2 < _arr2.length; _i2++) {
              const innerName = _arr2[_i2];
              anchor.addEventListener(innerName, (innerEv) => {
                output("rewriteAnchors", "clickHandler", "restorationHandler", "Event ".concat(innerEv.type, " on ").concat(anchor.href, ", origLink ").concat(origLink));
                if (anchor.dataset["vaMutex"] !== void 0) {
                  anchor.href = origLink;
                  delete anchor.dataset["vaMutex"];
                  output("rewriteAnchors", "clickHandler", "restorationHandler", "Anchor unlocked.");
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
}
function showVariantPrompt() {
  Promise.resolve().then(() => _interopRequireWildcard(require("ext.gadget.VariantAllyDialog")));
}
function applyURLVariant() {
  var _mw$Uri$query$VARIANT;
  const variant = (_mw$Uri$query$VARIANT = new mw.Uri().query[VARIANT_PARAM]) === null || _mw$Uri$query$VARIANT === void 0 ? void 0 : _mw$Uri$query$VARIANT.toString();
  if (variant && isValidVariant(variant)) {
    output("applyURLVariant", "".concat(VARIANT_PARAM, "=").concat(variant, ", setting local variant..."));
    setLocalVariant(variant);
  }
}
//! src/VariantAlly/modules/debug.ts
function showDebugInfo() {
  console.log("[VariantAlly]\nReferrer: ".concat(document.referrer || "(empty)", "\nBrowser variant: ").concat(getBrowserVariant(), "\nLocal variant: ").concat(getLocalVariant(), "\nAccount variant: ").concat(getAccountVariant(), "\nPage variant: ").concat(getPageVariant(), "\nMediaWiki variant: ").concat(getMediaWikiVariant(), "\nUser logged in: ").concat(isLoggedIn(), "\nCalculated preferred variant: ").concat(calculatePreferredVariant(), "\n"));
}
function output(...outputs) {
  console.log("[VariantAlly] ".concat(outputs.slice(0, -1).join("/"), ": ").concat(outputs.pop()));
}
function checkDebugURLParam() {
  const vaForceDialog = new mw.Uri().query["va-force-dialog"];
  if (vaForceDialog) {
    showVariantPrompt();
  }
}
//! src/VariantAlly/VariantAlly.ts
showDebugInfo();
checkDebugURLParam();
function main() {
  if (isOptOuted()) {
    output("main", "Opt-outed. Stop.");
    return;
  }
  if (isLoggedIn()) {
    output("main", "Logged in. Stop.");
    return;
  }
  if (!isLangChinese()) {
    output("main", "Current lang is not Chinese. Stop.");
    return;
  }
  applyURLVariant();
  const preferredVariant = calculatePreferredVariant();
  if (preferredVariant !== null) {
    setLocalVariant(preferredVariant);
  }
  const pageVariant = getPageVariant();
  if (pageVariant === null || !isWikitextPage()) {
    output("main", "Non-article page.");
    if (preferredVariant !== null) {
      output("main", "Preferred variant is not null, continue.");
      rewriteAnchors(preferredVariant);
    }
    return;
  }
  if (preferredVariant === null) {
    if (isViewingPage()) {
      output("main", "Preferred variant is null, show variant prompt");
      showVariantPrompt();
      return;
    }
    output("main", "Preferred variant is null, do nothing.");
    return;
  }
  if (isReferrerSelf() && !isEligibleForRewriting(location.href)) {
    output("main", "On-site navigation to links ineligible for writing. No checking redirection.");
    rewriteAnchors(preferredVariant);
    return;
  }
  checkThisPage(preferredVariant, pageVariant);
  rewriteAnchors(preferredVariant);
}
main();

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1ZhcmlhbnRBbGx5L1ZhcmlhbnRBbGx5LnRzIiwgInNyYy9WYXJpYW50QWxseS9tb2R1bGVzL3V0aWxzLnRzIiwgInNyYy9WYXJpYW50QWxseS9tb2R1bGVzL21vZGVsLnRzIiwgInNyYy9WYXJpYW50QWxseS9tb2R1bGVzL2NvbnRyb2xsZXIudHMiLCAic3JjL1ZhcmlhbnRBbGx5L21vZHVsZXMvZGVidWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7Y2hlY2tEZWJ1Z1VSTFBhcmFtLCBvdXRwdXQsIHNob3dEZWJ1Z0luZm99IGZyb20gJy4vbW9kdWxlcy9kZWJ1Zyc7XG5pbXBvcnQge1xuXHRjaGVja1RoaXNQYWdlLFxuXHRyZXdyaXRlQW5jaG9ycyxcblx0YXBwbHlVUkxWYXJpYW50LFxuXHRzaG93VmFyaWFudFByb21wdCxcblx0aXNFbGlnaWJsZUZvclJld3JpdGluZyxcbn0gZnJvbSAnLi9tb2R1bGVzL2NvbnRyb2xsZXInO1xuaW1wb3J0IHtjYWxjdWxhdGVQcmVmZXJyZWRWYXJpYW50LCBnZXRQYWdlVmFyaWFudCwgaXNPcHRPdXRlZCwgc2V0TG9jYWxWYXJpYW50fSBmcm9tICcuL21vZHVsZXMvbW9kZWwnO1xuaW1wb3J0IHtpc0xvZ2dlZEluLCBpc0xhbmdDaGluZXNlLCBpc1dpa2l0ZXh0UGFnZSwgaXNWaWV3aW5nUGFnZSwgaXNSZWZlcnJlclNlbGZ9IGZyb20gJy4vbW9kdWxlcy91dGlscyc7XG5cbi8vIERlYnVnIHV0aWxpdGllcyBhcmUgKGludGVudGlvbmFsbHkpIHVuYWZmZWN0ZWQgYnkgb3B0LW91dCBsb2dpY3NcbnNob3dEZWJ1Z0luZm8oKTtcbmNoZWNrRGVidWdVUkxQYXJhbSgpO1xuXG5mdW5jdGlvbiBtYWluKCkge1xuXHQvLyBNYW51YWxseSBvcHQgb3V0ZWQgdXNlcnNcblx0aWYgKGlzT3B0T3V0ZWQoKSkge1xuXHRcdG91dHB1dCgnbWFpbicsICdPcHQtb3V0ZWQuIFN0b3AuJyk7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0aWYgKGlzTG9nZ2VkSW4oKSkge1xuXHRcdG91dHB1dCgnbWFpbicsICdMb2dnZWQgaW4uIFN0b3AuJyk7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Ly8gTm9uLUNoaW5lc2UgcGFnZXMvdXNlcnNcblx0aWYgKCFpc0xhbmdDaGluZXNlKCkpIHtcblx0XHRvdXRwdXQoJ21haW4nLCAnQ3VycmVudCBsYW5nIGlzIG5vdCBDaGluZXNlLiBTdG9wLicpO1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGFwcGx5VVJMVmFyaWFudCgpO1xuXG5cdGNvbnN0IHByZWZlcnJlZFZhcmlhbnQgPSBjYWxjdWxhdGVQcmVmZXJyZWRWYXJpYW50KCk7XG5cdGlmIChwcmVmZXJyZWRWYXJpYW50ICE9PSBudWxsKSB7XG5cdFx0Ly8gT3B0aW1pc3RpY2FsbHkgc2V0IGxvY2FsIHZhcmlhbnQgdG8gYmUgZXF1YWwgdG8gYnJvd3NlciB2YXJpYW50XG5cdFx0Ly8gSW4gY2FzZSB0aGUgdXNlcidzIGJyb3dzZXIgbGFuZ3VhZ2UgYmVjb21lcyBpbnZhbGlkIGluIHRoZSBmdXR1cmUsXG5cdFx0Ly8gdGhpcyByZWR1Y2VzIHRoZSBwb3NzaWJpbGl0eSB0byBzaG93IHByb21wdCB0byBkaXNydXB0IHVzZXJzLlxuXHRcdHNldExvY2FsVmFyaWFudChwcmVmZXJyZWRWYXJpYW50KTtcblx0fVxuXG5cdGNvbnN0IHBhZ2VWYXJpYW50ID0gZ2V0UGFnZVZhcmlhbnQoKTtcblxuXHQvLyBOb24tYXJ0aWNsZSBwYWdlIChKUy9DU1MgcGFnZXMsIFNwZWNpYWwgcGFnZXMgZXRjLilcblx0aWYgKHBhZ2VWYXJpYW50ID09PSBudWxsIHx8ICFpc1dpa2l0ZXh0UGFnZSgpKSB7XG5cdFx0b3V0cHV0KCdtYWluJywgJ05vbi1hcnRpY2xlIHBhZ2UuJyk7XG5cdFx0Ly8gU3VjaCBwYWdlIGNhbid0IGhhdmUgdmFyaWFudCwgYnV0IHByZWZlcnJlZCB2YXJpYW50IG1heSBiZSBhdmFpbGFibGVcblx0XHQvLyBTbyBzdGlsbCByZXdyaXRlIGxpbmtzXG5cdFx0aWYgKHByZWZlcnJlZFZhcmlhbnQgIT09IG51bGwpIHtcblx0XHRcdG91dHB1dCgnbWFpbicsICdQcmVmZXJyZWQgdmFyaWFudCBpcyBub3QgbnVsbCwgY29udGludWUuJyk7XG5cdFx0XHRyZXdyaXRlQW5jaG9ycyhwcmVmZXJyZWRWYXJpYW50KTtcblx0XHR9XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Ly8gUHJlZmVycmVkIHZhcmlhbnQgdW5hdmFpbGFibGVcblx0aWYgKHByZWZlcnJlZFZhcmlhbnQgPT09IG51bGwpIHtcblx0XHRpZiAoaXNWaWV3aW5nUGFnZSgpKSB7XG5cdFx0XHRvdXRwdXQoJ21haW4nLCAnUHJlZmVycmVkIHZhcmlhbnQgaXMgbnVsbCwgc2hvdyB2YXJpYW50IHByb21wdCcpO1xuXHRcdFx0c2hvd1ZhcmlhbnRQcm9tcHQoKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRvdXRwdXQoJ21haW4nLCAnUHJlZmVycmVkIHZhcmlhbnQgaXMgbnVsbCwgZG8gbm90aGluZy4nKTtcblx0XHRyZXR1cm47XG5cdH1cblxuXHQvLyBPbi1zaXRlIG5hdmlnYXRpb24gdG8gbGlua3MgaW5lbGlnaWJsZSBmb3Igd3JpdGluZ1xuXHQvLyBUaGUgZWxpZ2liaWxpdHkgY2hlY2sgaXMgcmVxdWlyZSBiZWNhdXNlIHVzZXIgbWF5IGNsaWNrIG9uIGEgbGluayB3aXRoIHZhcmlhbnQgaW50ZW50aW9uYWxseVxuXHQvLyBlLmcuIHZhcmlhbnQgZHJvcGRvd24gYW5kIHt7VmFyaWFudC1jbmhrdHdzZ319XG5cdGlmIChpc1JlZmVycmVyU2VsZigpICYmICFpc0VsaWdpYmxlRm9yUmV3cml0aW5nKGxvY2F0aW9uLmhyZWYpKSB7XG5cdFx0b3V0cHV0KCdtYWluJywgJ09uLXNpdGUgbmF2aWdhdGlvbiB0byBsaW5rcyBpbmVsaWdpYmxlIGZvciB3cml0aW5nLiBObyBjaGVja2luZyByZWRpcmVjdGlvbi4nKTtcblx0XHRyZXdyaXRlQW5jaG9ycyhwcmVmZXJyZWRWYXJpYW50KTtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjaGVja1RoaXNQYWdlKHByZWZlcnJlZFZhcmlhbnQsIHBhZ2VWYXJpYW50KTtcblx0cmV3cml0ZUFuY2hvcnMocHJlZmVycmVkVmFyaWFudCk7XG59XG5cbm1haW4oKTtcblxuLy8gRXhwb3NlIGZvciBWYXJpYW50QWxseURpYWxvZydzIHVzZVxuZXhwb3J0IHtzZXRMb2NhbFZhcmlhbnQsIHNldE9wdE91dH0gZnJvbSAnLi9tb2R1bGVzL21vZGVsJztcbmV4cG9ydCB7cmVkaXJlY3R9IGZyb20gJy4vbW9kdWxlcy9jb250cm9sbGVyJztcbiIsICJmdW5jdGlvbiBpc0xvZ2dlZEluKCk6IGJvb2xlYW4ge1xuXHRyZXR1cm4gbXcuY29uZmlnLmV4aXN0cygnd2dVc2VySWQnKTtcbn1cblxuLyoqXG4gKiBDaGVjayB3aGV0aGVyIHJlZmVycmVyIG9yaWdpbmF0ZXMgZnJvbSB0aGUgc2FtZSBkb21haW4uXG4gKi9cbmZ1bmN0aW9uIGlzUmVmZXJyZXJTZWxmKCk6IGJvb2xlYW4ge1xuXHR0cnkge1xuXHRcdHJldHVybiBuZXcgbXcuVXJpKGRvY3VtZW50LnJlZmVycmVyKS5ob3N0ID09PSBsb2NhdGlvbi5ob3N0O1xuXHR9IGNhdGNoIHtcblx0XHQvLyBJbnZhbGlkIFVSTFxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxufVxuXG5mdW5jdGlvbiBpc1ZpZXdpbmdQYWdlKCk6IGJvb2xlYW4ge1xuXHRyZXR1cm4gbXcuY29uZmlnLmdldCgnd2dBY3Rpb24nKSA9PT0gJ3ZpZXcnO1xufVxuXG4vKipcbiAqIENoZWNrIHdoZXRoZXIgdGhlIGN1cnJlbnQgbGFuZ3VhZ2UgKHNldCBpbiB1c2VyIHByZWZlcmVuY2Ugb3IgYnkgP3VzZWxhbmc9eHh4KVxuICogaXMgQ2hpbmVzZSBvciBub3QuXG4gKi9cbmZ1bmN0aW9uIGlzTGFuZ0NoaW5lc2UoKTogYm9vbGVhbiB7XG5cdHJldHVybiBtdy5jb25maWcuZ2V0KCd3Z1VzZXJMYW5ndWFnZScpLnN0YXJ0c1dpdGgoJ3poJyk7XG59XG5cbmZ1bmN0aW9uIGlzV2lraXRleHRQYWdlKCk6IGJvb2xlYW4ge1xuXHRyZXR1cm4gbXcuY29uZmlnLmdldCgnd2dDYW5vbmljYWxOYW1lc3BhY2UnKSAhPT0gJ1NwZWNpYWwnICYmIG13LmNvbmZpZy5nZXQoJ3dnUGFnZUNvbnRlbnRNb2RlbCcpID09PSAnd2lraXRleHQnO1xufVxuXG5leHBvcnQge2lzTG9nZ2VkSW4sIGlzUmVmZXJyZXJTZWxmLCBpc1ZpZXdpbmdQYWdlLCBpc0xhbmdDaGluZXNlLCBpc1dpa2l0ZXh0UGFnZX07XG4iLCAiaW1wb3J0IHtpc0xvZ2dlZElufSBmcm9tICcuL3V0aWxzJztcblxuY29uc3QgTE9DQUxfVkFSSUFOVF9LRVkgPSAndmEtdmFyJztcbmNvbnN0IE9QVE9VVF9LRVkgPSAndmEtb3B0b3V0JztcbmNvbnN0IFZBTElEX1ZBUklBTlRTID0gWyd6aC1jbicsICd6aC1zZycsICd6aC1teScsICd6aC10dycsICd6aC1oaycsICd6aC1tbyddIGFzIGNvbnN0O1xuY29uc3QgVkFSSUFOVFMgPSBbJ3poJywgJ3poLWhhbnMnLCAnemgtaGFudCcsIC4uLlZBTElEX1ZBUklBTlRTXSBhcyBjb25zdDtcbmNvbnN0IEVYVF9WQVJJQU5UUyA9IFtcblx0J3poLWhhbnMtY24nLFxuXHQnemgtaGFucy1zZycsXG5cdCd6aC1oYW5zLW15Jyxcblx0J3poLWhhbnQtdHcnLFxuXHQnemgtaGFudC1oaycsXG5cdCd6aC1oYW50LW1vJyxcblx0Li4uVkFSSUFOVFMsXG5dIGFzIGNvbnN0O1xuLy8gU29tZSBicm93c2VycyAoZS5nLiBGaXJlZm94IEFuZHJvaWQpIG1heSByZXR1cm4gc3VjaCBsYW5ndWFnZXNcbmNvbnN0IEVYVF9NQVBQSU5HOiBSZWNvcmQ8c3RyaW5nLCBWYWxpZFZhcmlhbnQ+ID0ge1xuXHQnemgtaGFucy1jbic6ICd6aC1jbicsXG5cdCd6aC1oYW5zLXNnJzogJ3poLXNnJyxcblx0J3poLWhhbnMtbXknOiAnemgtbXknLFxuXHQnemgtaGFudC10dyc6ICd6aC10dycsXG5cdCd6aC1oYW50LWhrJzogJ3poLWhrJyxcblx0J3poLWhhbnQtbW8nOiAnemgtbW8nLFxufTtcblxudHlwZSBWYWxpZFZhcmlhbnQgPSAodHlwZW9mIFZBTElEX1ZBUklBTlRTKVtudW1iZXJdO1xudHlwZSBWYXJpYW50ID0gKHR5cGVvZiBWQVJJQU5UUylbbnVtYmVyXTtcbnR5cGUgRXh0VmFyaWFudCA9ICh0eXBlb2YgRVhUX1ZBUklBTlRTKVtudW1iZXJdO1xuXG5mdW5jdGlvbiBpc1ZhcmlhbnQoc3RyOiBzdHJpbmcpOiBzdHIgaXMgVmFyaWFudCB7XG5cdHJldHVybiAoVkFSSUFOVFMgYXMgUmVhZG9ubHlBcnJheTxzdHJpbmc+KS5pbmNsdWRlcyhzdHIpO1xufVxuXG5mdW5jdGlvbiBpc1ZhbGlkVmFyaWFudChzdHI6IHN0cmluZyk6IHN0ciBpcyBWYWxpZFZhcmlhbnQge1xuXHRyZXR1cm4gKFZBTElEX1ZBUklBTlRTIGFzIFJlYWRvbmx5QXJyYXk8c3RyaW5nPikuaW5jbHVkZXMoc3RyKTtcbn1cblxuZnVuY3Rpb24gaXNFeHRWYXJpYW50KHN0cjogc3RyaW5nKTogc3RyIGlzIEV4dFZhcmlhbnQge1xuXHRyZXR1cm4gKEVYVF9WQVJJQU5UUyBhcyBSZWFkb25seUFycmF5PHN0cmluZz4pLmluY2x1ZGVzKHN0cik7XG59XG5cbi8qKlxuICogTWFwcyBhZGRpdGlvbmFsIGxhbmcgY29kZXMgdG8gc3RhbmRhcmQgdmFyaWFudHMuXG4gKlxuICogQHJldHVybnMgc3RhbmRhcmQgdmFyaWFudFxuICovXG5mdW5jdGlvbiBub3JtYWxpemVWYXJpYW50KGV4dFZhcmlhbnQ6IEV4dFZhcmlhbnQpOiBWYXJpYW50IHtcblx0cmV0dXJuIChFWFRfTUFQUElOR1tleHRWYXJpYW50XSA/PyBleHRWYXJpYW50KSBhcyBWYXJpYW50O1xufVxuXG4vKipcbiAqIEdldCBjdXJyZW50IHZhcmlhbnQgb2YgdGhlIHBhZ2UgKGRvbid0IGJlIG1pc2xlZCBieSBjb25maWcgbmFtaW5nKS5cbiAqIEByZXR1cm5zIHZhcmlhbnQsIG51bGwgZm9yIG5vbi13aWtpdGV4dCBwYWdlIChidXQgTk9UIGFsbCBzdWNoIHBhZ2VzIHJldHVybnMgbnVsbCEpXG4gKi9cbmZ1bmN0aW9uIGdldFBhZ2VWYXJpYW50KCk6IFZhcmlhbnQgfCBudWxsIHtcblx0Y29uc3QgcmVzdWx0ID0gbXcuY29uZmlnLmdldCgnd2dVc2VyVmFyaWFudCcpO1xuXHRyZXR1cm4gcmVzdWx0ICE9PSBudWxsICYmIGlzRXh0VmFyaWFudChyZXN1bHQpID8gbm9ybWFsaXplVmFyaWFudChyZXN1bHQpIDogbnVsbDtcbn1cblxuLyoqXG4gKiBHZXQgYWNjb3VudCB2YXJpYW50LlxuICogQHJldHVybnMgYWNjb3VudCB2YXJpYW50LCBudWxsIGZvciBhbm9ueW1vdXMgdXNlclxuICovXG5mdW5jdGlvbiBnZXRBY2NvdW50VmFyaWFudCgpOiBWYXJpYW50IHwgbnVsbCB7XG5cdGlmIChpc0xvZ2dlZEluKCkpIHtcblx0XHRjb25zdCByZXN1bHQgPSBtdy51c2VyLm9wdGlvbnMuZ2V0KCd2YXJpYW50JykgYXMgc3RyaW5nO1xuXHRcdHJldHVybiBpc0V4dFZhcmlhbnQocmVzdWx0KSA/IG5vcm1hbGl6ZVZhcmlhbnQocmVzdWx0KSA6IG51bGw7XG5cdH1cblx0cmV0dXJuIG51bGw7XG59XG5cbmZ1bmN0aW9uIGdldExvY2FsVmFyaWFudCgpOiBWYXJpYW50IHwgbnVsbCB7XG5cdGNvbnN0IHJlc3VsdCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKExPQ0FMX1ZBUklBTlRfS0VZKTtcblx0aWYgKHJlc3VsdCA9PT0gbnVsbCB8fCAhaXNFeHRWYXJpYW50KHJlc3VsdCkpIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXHRyZXR1cm4gbm9ybWFsaXplVmFyaWFudChyZXN1bHQpO1xufVxuXG4vKipcbiAqIFJldHVybiBicm93c2VyIGxhbmd1YWdlIGlmIGl0J3MgYSBDaGluZXNlIHZhcmlhbnQuXG4gKiBAcmV0dXJucyBicm93c2VyIHZhcmlhbnRcbiAqL1xuZnVuY3Rpb24gZ2V0QnJvd3NlclZhcmlhbnQoKTogVmFyaWFudCB8IG51bGwge1xuXHRyZXR1cm4gKFxuXHRcdG5hdmlnYXRvci5sYW5ndWFnZXNcblx0XHRcdC5tYXAoKGxhbmcpID0+IHtcblx0XHRcdFx0cmV0dXJuIGxhbmcudG9Mb3dlckNhc2UoKTtcblx0XHRcdH0pXG5cdFx0XHQuZmlsdGVyKGlzRXh0VmFyaWFudClcblx0XHRcdC5tYXAobm9ybWFsaXplVmFyaWFudClcblx0XHRcdC5maW5kKGlzVmFyaWFudCkgPz8gbnVsbFxuXHQpO1xufVxuXG4vKipcbiAqIEdldCB0aGUgXCJuYXR1cmFsXCIgdmFyaWFudCBpbmZlcnJlZCBieSBNZWRpYVdpa2kgZm9yIGFub255bW91cyB1c2Vyc1xuICogd2hlbiB0aGUgbGluayBkb2Vzbid0IHNwZWNpZnkgYSB2YXJpYW50LlxuICpcbiAqIFVzZWQgaW4gbGluayBub3JtYWxpemF0aW9uLlxuICpcbiAqIEZJWE1FOiBPbGQgU2FmYXJpIGlzIGtub3duIHRvIGJyZWFrIHRoaXMgbWV0aG9kLlxuICogVXNlciByZXBvcnRlZCB0aGF0IG9uIGFuIGlPUyAxNCBkZXZpY2Ugd2l0aCBDaGluZXNlIGxhbmd1YWdlIGFuZCBTaW5nYXBvcmUgcmVnaW9uIHNldHRpbmdzLFxuICogQWNjZXB0LUxhbmd1YWdlIGlzIHpoLWNuICh0aHVzIGluZmVycmVkIGJ5IE1lZGlhV2lraSkgYnV0IHRoaXMgbWV0aG9kIHJldHVybnMgemgtc2cuXG4gKlxuICogQHJldHVybnMgdmFyaWFudFxuICovXG5mdW5jdGlvbiBnZXRNZWRpYVdpa2lWYXJpYW50KCk6IFZhcmlhbnQgfCBudWxsIHtcblx0cmV0dXJuIGdldEFjY291bnRWYXJpYW50KCkgPz8gZ2V0QnJvd3NlclZhcmlhbnQoKTtcbn1cblxuLyoqXG4gKiBDYWxjdWxhdGUgcHJlZmVycmVkIHZhcmlhbnQgZnJvbSBicm93c2VyIHZhcmlhbnQsIGxvY2FsIHZhcmlhbnQgYW5kIGFjY291bnQgdmFyaWFudC5cbiAqXG4gKiBQcmlvcml0eTogYWNjb3VudCB2YXJpYW50ID4gYnJvd3NlciB2YXJpYW50ID4gbG9jYWwgdmFyaWFudFxuICpcbiAqIEByZXR1cm5zIHByZWZlcnJlZCB2YXJpYW50XG4gKi9cbmZ1bmN0aW9uIGNhbGN1bGF0ZVByZWZlcnJlZFZhcmlhbnQoKTogVmFsaWRWYXJpYW50IHwgbnVsbCB7XG5cdHJldHVybiBbZ2V0QWNjb3VudFZhcmlhbnQoKSwgZ2V0QnJvd3NlclZhcmlhbnQoKSwgZ2V0TG9jYWxWYXJpYW50KCldXG5cdFx0Lm1hcCgodmFyaWFudCkgPT4ge1xuXHRcdFx0cmV0dXJuIHZhcmlhbnQgIT09IG51bGwgJiYgaXNWYWxpZFZhcmlhbnQodmFyaWFudCkgPyB2YXJpYW50IDogbnVsbDtcblx0XHR9KVxuXHRcdC5yZWR1Y2UoKHByZXYsIGN1cnIpID0+IHtcblx0XHRcdHJldHVybiBwcmV2ID8/IGN1cnI7XG5cdFx0fSk7XG59XG5cbnR5cGUgU2V0TG9jYWxWYXJpYW50ID0gdHlwZW9mIHNldExvY2FsVmFyaWFudDtcblxuZnVuY3Rpb24gc2V0TG9jYWxWYXJpYW50KHZhcmlhbnQ6IFZhcmlhbnQpOiB2b2lkIHtcblx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oTE9DQUxfVkFSSUFOVF9LRVksIHZhcmlhbnQpO1xufVxuXG50eXBlIFNldE9wdE91dCA9IHR5cGVvZiBzZXRPcHRPdXQ7XG5cbmZ1bmN0aW9uIHNldE9wdE91dCgpOiB2b2lkIHtcblx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oT1BUT1VUX0tFWSwgJycpO1xufVxuXG5mdW5jdGlvbiBpc09wdE91dGVkKCk6IGJvb2xlYW4ge1xuXHRyZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oT1BUT1VUX0tFWSkgIT09IG51bGw7XG59XG5cbmV4cG9ydCB7XG5cdHR5cGUgU2V0TG9jYWxWYXJpYW50LFxuXHR0eXBlIFNldE9wdE91dCxcblx0dHlwZSBWYWxpZFZhcmlhbnQsXG5cdHR5cGUgVmFyaWFudCxcblx0aXNWYXJpYW50LFxuXHRpc1ZhbGlkVmFyaWFudCxcblx0Z2V0UGFnZVZhcmlhbnQsXG5cdGdldEFjY291bnRWYXJpYW50LFxuXHRnZXRMb2NhbFZhcmlhbnQsXG5cdGdldEJyb3dzZXJWYXJpYW50LFxuXHRnZXRNZWRpYVdpa2lWYXJpYW50LFxuXHRjYWxjdWxhdGVQcmVmZXJyZWRWYXJpYW50LFxuXHRzZXRMb2NhbFZhcmlhbnQsXG5cdHNldE9wdE91dCxcblx0aXNPcHRPdXRlZCxcbn07XG4iLCAiaW1wb3J0IHtvdXRwdXR9IGZyb20gJy4vZGVidWcnO1xuaW1wb3J0IHtWYXJpYW50LCBnZXRNZWRpYVdpa2lWYXJpYW50LCBpc1ZhbGlkVmFyaWFudCwgc2V0TG9jYWxWYXJpYW50fSBmcm9tICcuL21vZGVsJztcblxuY29uc3QgUkVHRVhfV0lLSV9VUkwgPSAvXlxcLyg/Ondpa2l8emgoPzotXFx3Kyk/KVxcLy9pO1xuY29uc3QgUkVHRVhfVkFSSUFOVF9VUkwgPSAvXlxcL3poKD86LVxcdyspP1xcLy9pO1xuY29uc3QgVkFSSUFOVF9QQVJBTSA9ICd2YS12YXJpYW50JztcblxuZnVuY3Rpb24gaXNFbGlnaWJsZUZvclJld3JpdGluZyhsaW5rOiBzdHJpbmcpOiBib29sZWFuIHtcblx0dHJ5IHtcblx0XHQvLyBObyByZXdyaXRpbmcgZm9yIGVtcHR5IGxpbmtzXG5cdFx0aWYgKGxpbmsgPT09ICcnKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdGNvbnN0IHVybCA9IG5ldyBtdy5VcmkobGluayk7XG5cdFx0Ly8gTm8gcmV3cml0aW5nIGlmIGxpbmsgaXRzZWxmIGhhcyB2YXJpYW50IGluZm9cblx0XHRpZiAoUkVHRVhfVkFSSUFOVF9VUkwudGVzdCh1cmwucGF0aCkpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0aWYgKHVybC5xdWVyeVsndmFyaWFudCddKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdC8vIE5vIHJld3JpdGluZyBmb3IgZm9yZWlnbiBvcmlnaW4gVVJMc1xuXHRcdC8vIE5vdGUgdGhhdCBsaW5rcyBsaWtlIGphdmFzY3JpcHQ6dm9pZCgwKSBhcmUgYmxvY2tlZCBieSB0aGlzXG5cdFx0aWYgKHVybC5ob3N0ICE9PSBsb2NhdGlvbi5ob3N0KSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRydWU7XG5cdH0gY2F0Y2gge1xuXHRcdG91dHB1dCgnaXNFbGlnaWJsZUZvclJld3JpdGluZycsIGBFeGNlcHRpb24gb2NjdXJzIHdoZW4gY2hlY2tpbmcgJHtsaW5rfSFgKTtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cbn1cblxuZnVuY3Rpb24gcmV3cml0ZUxpbmsobGluazogc3RyaW5nLCB2YXJpYW50OiBWYXJpYW50KTogc3RyaW5nIHtcblx0dHJ5IHtcblx0XHRjb25zdCBub3JtYWxpemF0aW9uVGFyZ2V0VmFyaWFudCA9IGdldE1lZGlhV2lraVZhcmlhbnQoKTtcblx0XHRjb25zdCB1cmwgPSBuZXcgbXcuVXJpKGxpbmspO1xuXHRcdGNvbnN0IHtwYXRofSA9IHVybDtcblx0XHRjb25zdCB7cXVlcnl9ID0gdXJsO1xuXG5cdFx0aWYgKFJFR0VYX1dJS0lfVVJMLnRlc3QocGF0aCkpIHtcblx0XHRcdHVybC5wYXRoID0gYC8ke3ZhcmlhbnR9LyR7dXJsLnBhdGgucmVwbGFjZShSRUdFWF9XSUtJX1VSTCwgJycpfWA7XG5cdFx0XHRkZWxldGUgcXVlcnlbJ3ZhcmlhbnQnXTsgLy8gRm9yIHRoaW5ncyBsaWtlIC96aC1jbi9BP3ZhcmlhbnQ9emgtaGtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cXVlcnlbJ3ZhcmlhbnQnXSA9IHZhcmlhbnQ7XG5cdFx0fVxuXG5cdFx0aWYgKHZhcmlhbnQgPT09IG5vcm1hbGl6YXRpb25UYXJnZXRWYXJpYW50KSB7XG5cdFx0XHQvLyBOb3JtYWxpemUgdGhlIGxpbmsuXG5cdFx0XHQvL1xuXHRcdFx0Ly8gRm9yIGV4YW1wbGUsIGZvciBsaW5rIC96aC10dy9UaXRsZSBhbmQgbm9ybWFsaXphdGlvbiB2YXJpYW50IHpoLXR3LCB0aGUgcmVzdWx0IGlzIC93aWtpL1RpdGxlLFxuXHRcdFx0Ly8gd2hpbGUgZm9yIHRoZSBzYW1lIGxpbmsgYW5kIG5vcm1hbGl6YXRpb24gdmFyaWFudCB6aC1jbiwgdGhlIHJlc3VsdCBpcyAvemgtdHcvVGl0bGUgKHVuY2hhbmdlZCkuXG5cdFx0XHR1cmwucGF0aCA9IHBhdGgucmVwbGFjZShSRUdFWF9XSUtJX1VSTCwgJy93aWtpLycpO1xuXHRcdFx0ZGVsZXRlIHF1ZXJ5Wyd2YXJpYW50J107XG5cdFx0fVxuXG5cdFx0Y29uc3QgcmVzdWx0ID0gdXJsLnRvU3RyaW5nKCk7XG5cdFx0b3V0cHV0KCdyZXdyaXRlTGluaycsIGAke2xpbmt9ICsgJHt2YXJpYW50fSAtICR7bm9ybWFsaXphdGlvblRhcmdldFZhcmlhbnR9ID0+ICR7cmVzdWx0fWApO1xuXG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fSBjYXRjaCB7XG5cdFx0b3V0cHV0KCdyZXdyaXRlTGluaycsIGBFeGNlcHRpb24gb2NjdXJzIHdoZW4gcmV3cml0aW5nICR7bGlua30gKyAke3ZhcmlhbnR9IWApO1xuXHRcdHJldHVybiBsaW5rO1xuXHR9XG59XG5cbmludGVyZmFjZSBSZWRpcmVjdGlvbk9wdGlvbnMge1xuXHRsaW5rPzogc3RyaW5nO1xuXHQvKiogU2hvdWxkIHN0aWxsIHJlZGlyZWN0IGV2ZW4gZGVzdGluYXRpb24gbGluayBpcyB0aGUgc2FtZSBhcyBjdXJyZW50IHBhZ2UgKi9cblx0Zm9yY2VkPzogYm9vbGVhbjtcbn1cblxudHlwZSBSZWRpcmVjdCA9IHR5cGVvZiByZWRpcmVjdDtcblxuZnVuY3Rpb24gcmVkaXJlY3QocHJlZmVycmVkVmFyaWFudDogVmFyaWFudCwgb3B0aW9uczogUmVkaXJlY3Rpb25PcHRpb25zID0ge30pOiB2b2lkIHtcblx0Y29uc3Qgb3JpZ0xpbmsgPSBvcHRpb25zLmxpbmsgPz8gbG9jYXRpb24uaHJlZjtcblx0Y29uc3QgbmV3TGluayA9IHJld3JpdGVMaW5rKG9yaWdMaW5rLCBwcmVmZXJyZWRWYXJpYW50KTtcblxuXHQvLyBQcmV2ZW50IGluZmluaXRlIHJlZGlyZWN0c1xuXHQvLyBUaGlzIGNvdWxkIGhhcHBlbiBvY2Nhc2lvbmFsbHksIHNlZSBnZXRNZWRpYVdpa2lWYXJpYW50KCkncyBjb21tZW50c1xuXHRpZiAob3B0aW9ucy5mb3JjZWQgfHwgbmV3TGluayAhPT0gbG9jYXRpb24uaHJlZikge1xuXHRcdC8vIFVzZSByZXBsYWNlKCkgdG8gcHJldmVudCBuYXZpZ2F0aW5nIGJhY2tcblx0XHRsb2NhdGlvbi5yZXBsYWNlKG5ld0xpbmspO1xuXHR9IGVsc2Uge1xuXHRcdG91dHB1dCgncmVkaXJlY3QnLCAnbmV3TGluayA9PT0gbG9jYXRpb24uaHJlZi4gTm8gcmVmcmVzaGluZyBwYWdlLicpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGNoZWNrVGhpc1BhZ2UocHJlZmVycmVkVmFyaWFudDogVmFyaWFudCwgcGFnZVZhcmlhbnQ/OiBWYXJpYW50KTogdm9pZCB7XG5cdGlmIChwYWdlVmFyaWFudCA9PT0gcHJlZmVycmVkVmFyaWFudCkge1xuXHRcdG91dHB1dCgnY2hlY2tUaGlzUGFnZScsICdWYXJpYW50IGlzIGNvcnJlY3QgOiknKTtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRvdXRwdXQoJ2NoZWNrVGhpc1BhZ2UnLCBgUmVkaXJlY3RpbmcgdG8gJHtwcmVmZXJyZWRWYXJpYW50fS4uLmApO1xuXG5cdGNvbnN0IHJlZGlyZWN0aW9uT3JpZ2luOiBzdHJpbmcgfCBudWxsID0gbXcuY29uZmlnLmdldCgnd2dSZWRpcmVjdGVkRnJvbScpO1xuXHRpZiAocmVkaXJlY3Rpb25PcmlnaW4gPT09IG51bGwpIHtcblx0XHRyZWRpcmVjdChwcmVmZXJyZWRWYXJpYW50KTtcblx0XHRyZXR1cm47XG5cdH1cblxuXHQvLyBJZiBjdXJyZW50IHBhZ2UgaXMgcmVkaXJlY3RlZCBmcm9tIGFub3RoZXIgcGFnZSwgcmV3cml0ZSBsaW5rIHRvIHBvaW50IHRvXG5cdC8vIHRoZSBvcmlnaW5hbCByZWRpcmVjdCBzbyB0aGUgXCJyZWRpcmVjdGVkIGZyb20gWFhYXCIgaGludCBpcyBjb3JyZWN0bHkgZGlzcGxheWVkXG5cdG91dHB1dCgnY2hlY2tUaGlzUGFnZScsIGBEZXRlY3RlZCByZWRpcmVjdGlvbiBmcm9tICR7cmVkaXJlY3Rpb25PcmlnaW59YCk7XG5cblx0Ly8gVXNlIFVSTCB0byByZXNlcnZlIG90aGVyIHBhcnRzIG9mIHRoZSBsaW5rXG5cdGNvbnN0IHJlZGlyZWN0aW9uVVJMID0gbmV3IG13LlVyaSgpO1xuXHRyZWRpcmVjdGlvblVSTC5wYXRoID0gYC93aWtpLyR7cmVkaXJlY3Rpb25PcmlnaW59YDtcblx0cmVkaXJlY3QocHJlZmVycmVkVmFyaWFudCwge2xpbms6IHJlZGlyZWN0aW9uVVJMLnRvU3RyaW5nKCl9KTtcbn1cblxuZnVuY3Rpb24gcmV3cml0ZUFuY2hvcnModmFyaWFudDogVmFyaWFudCk6IHZvaWQge1xuXHRmb3IgKGNvbnN0IG5hbWUgb2YgWydjbGljaycsICdhdXhjbGljaycsICdkcmFnc3RhcnQnXSkge1xuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIobmFtZSwgKGV2KSA9PiB7XG5cdFx0XHRjb25zdCB7dGFyZ2V0fSA9IGV2O1xuXG5cdFx0XHRpZiAodGFyZ2V0IGluc3RhbmNlb2YgRWxlbWVudCkge1xuXHRcdFx0XHQvLyBEbyBub3Qgd3JpdGUgPGE+IHdpdGggaGFzaCBvbmx5IGhyZWYgb3Igbm8gaHJlZlxuXHRcdFx0XHQvLyB3aGljaCBpcyBrbm93biB0byBjYXVzZSBicmVha2FnZSBpbiBlLmcuIFZpc3VhbCBFZGl0b3Jcblx0XHRcdFx0Y29uc3QgYW5jaG9yOiBIVE1MQW5jaG9yRWxlbWVudCB8IG51bGwgPSB0YXJnZXQuY2xvc2VzdCgnYVtocmVmXTpub3QoW2hyZWZePVwiI1wiXSknKTtcblxuXHRcdFx0XHRpZiAoYW5jaG9yICE9PSBudWxsKSB7XG5cdFx0XHRcdFx0b3V0cHV0KCdyZXdyaXRlQW5jaG9ycycsIGBFdmVudCAke2V2LnR5cGV9IG9uICR7YW5jaG9yLmhyZWZ9YCk7XG5cblx0XHRcdFx0XHRjb25zdCBvcmlnTGluayA9IGFuY2hvci5ocmVmO1xuXHRcdFx0XHRcdGlmICghaXNFbGlnaWJsZUZvclJld3JpdGluZyhvcmlnTGluaykpIHtcblx0XHRcdFx0XHRcdG91dHB1dCgncmV3cml0ZUFuY2hvcnMnLCAnQW5jaG9yIGRvZXMgbm90IHJlcXVpcmUgcmV3cml0aW5nLiBTdG9wLicpO1xuXHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGNvbnN0IG5ld0xpbmsgPSByZXdyaXRlTGluayhvcmlnTGluaywgdmFyaWFudCk7XG5cdFx0XHRcdFx0aWYgKG5ld0xpbmsgPT09IG9yaWdMaW5rKSB7XG5cdFx0XHRcdFx0XHRvdXRwdXQoJ3Jld3JpdGVBbmNob3JzJywgJ0FuY2hvciBsaW5rIGlzIHVuY2hhbmdlZC4gU3RvcC4nKTtcblx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQvLyBCcm93c2VyIHN1cHBvcnQ6IFNhZmFyaSA8IDE0XG5cdFx0XHRcdFx0Ly8gRmFpbCBzaWxlbnRseSB3aGVuIERyYWdFdmVudCBpcyBub3QgcHJlc2VudFxuXHRcdFx0XHRcdGlmICh3aW5kb3cuRHJhZ0V2ZW50ICYmIGV2IGluc3RhbmNlb2YgRHJhZ0V2ZW50ICYmIGV2LmRhdGFUcmFuc2Zlcikge1xuXHRcdFx0XHRcdFx0Ly8gTW9kaWZ5IGRyYWcgZGF0YSBkaXJlY3RseSBiZWNhdXNlIHNldHRpbmcgaHJlZiBoYXMgbm8gZWZmZWN0IGluIGRyYWcgZXZlbnRcblx0XHRcdFx0XHRcdGZvciAoY29uc3QgdHlwZSBvZiBldi5kYXRhVHJhbnNmZXIudHlwZXMpIHtcblx0XHRcdFx0XHRcdFx0ZXYuZGF0YVRyYW5zZmVyLnNldERhdGEodHlwZSwgbmV3TGluayk7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdG91dHB1dCgncmV3cml0ZUFuY2hvcnMnLCAnZHJhZ0hhbmRsZXInLCAnRHJvcCBkYXRhIGNoYW5nZWQhJyk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdC8vIFVzZSBhIG11dGV4IHRvIGF2b2lkIGJlaW5nIG92ZXJ3cml0dGVuIGJ5IG92ZXJsYXBwZWQgaGFuZGxlciBjYWxsc1xuXHRcdFx0XHRcdFx0aWYgKGFuY2hvci5kYXRhc2V0Wyd2YU11dGV4J10gPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRcdFx0XHRhbmNob3IuZGF0YXNldFsndmFNdXRleCddID0gJyc7XG5cblx0XHRcdFx0XHRcdFx0b3V0cHV0KCdyZXdyaXRlQW5jaG9ycycsICdjbGlja0hhbmRsZXInLCAnQW5jaG9yIGxvY2tlZC4nKTtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0YW5jaG9yLmhyZWYgPSBuZXdMaW5rO1xuXHRcdFx0XHRcdFx0b3V0cHV0KCdyZXdyaXRlQW5jaG9ycycsICdjbGlja0hhbmRsZXInLCBgaHJlZiAke2FuY2hvci5ocmVmfSwgb3JpZ0xpbmsgJHtvcmlnTGlua31gKTtcblxuXHRcdFx0XHRcdFx0Ly8gSEFDSzogd29ya2Fyb3VuZCBwb3B1cHMgbm90IHdvcmtpbmcgb24gbW9kaWZpZWQgbGlua3Ncblx0XHRcdFx0XHRcdC8vIEFkZCBoYW5kbGVyIHRvIDxhPiBkaXJlY3RseSBzbyBpdCB3YXMgdHJpZ2dlcmVkIGJlZm9yZSBhbnl0aGluZyBlbHNlXG5cdFx0XHRcdFx0XHRmb3IgKGNvbnN0IGlubmVyTmFtZSBvZiBbJ21vdXNlb3ZlcicsICdtb3VzZWxlYXZlJywgJ2tleXVwJ10pIHtcblx0XHRcdFx0XHRcdFx0YW5jaG9yLmFkZEV2ZW50TGlzdGVuZXIoXG5cdFx0XHRcdFx0XHRcdFx0aW5uZXJOYW1lLFxuXHRcdFx0XHRcdFx0XHRcdChpbm5lckV2KSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRvdXRwdXQoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCdyZXdyaXRlQW5jaG9ycycsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCdjbGlja0hhbmRsZXInLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQncmVzdG9yYXRpb25IYW5kbGVyJyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0YEV2ZW50ICR7aW5uZXJFdi50eXBlfSBvbiAke2FuY2hvci5ocmVmfSwgb3JpZ0xpbmsgJHtvcmlnTGlua31gXG5cdFx0XHRcdFx0XHRcdFx0XHQpO1xuXG5cdFx0XHRcdFx0XHRcdFx0XHRpZiAoYW5jaG9yLmRhdGFzZXRbJ3ZhTXV0ZXgnXSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGFuY2hvci5ocmVmID0gb3JpZ0xpbms7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGRlbGV0ZSBhbmNob3IuZGF0YXNldFsndmFNdXRleCddO1xuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG91dHB1dChcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQncmV3cml0ZUFuY2hvcnMnLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCdjbGlja0hhbmRsZXInLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCdyZXN0b3JhdGlvbkhhbmRsZXInLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCdBbmNob3IgdW5sb2NrZWQuJ1xuXHRcdFx0XHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdFx0e29uY2U6IHRydWV9XG5cdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gc2hvd1ZhcmlhbnRQcm9tcHQoKTogdm9pZCB7XG5cdGltcG9ydCgnZXh0LmdhZGdldC5WYXJpYW50QWxseURpYWxvZycpO1xufVxuXG4vKipcbiAqIFNldCBsb2NhbCB2YXJpYW50IGFjY29yZGluZyB0byBVUkwgcXVlcnkgcGFyYW1ldGVycy5cbiAqXG4gKiBlLmcuIGEgVVJMIHdpdGggP3ZhLXZhcmlhbnQ9emgtY24gd2lsbCBzZXQgbG9jYWwgdmFyaWFudCB0byB6aC1jblxuICovXG5mdW5jdGlvbiBhcHBseVVSTFZhcmlhbnQoKTogdm9pZCB7XG5cdGNvbnN0IHZhcmlhbnQgPSBuZXcgbXcuVXJpKCkucXVlcnlbVkFSSUFOVF9QQVJBTV0/LnRvU3RyaW5nKCk7XG5cdGlmICh2YXJpYW50ICYmIGlzVmFsaWRWYXJpYW50KHZhcmlhbnQpKSB7XG5cdFx0b3V0cHV0KCdhcHBseVVSTFZhcmlhbnQnLCBgJHtWQVJJQU5UX1BBUkFNfT0ke3ZhcmlhbnR9LCBzZXR0aW5nIGxvY2FsIHZhcmlhbnQuLi5gKTtcblx0XHRzZXRMb2NhbFZhcmlhbnQodmFyaWFudCk7XG5cdH1cbn1cblxuZXhwb3J0IHtcblx0dHlwZSBSZWRpcmVjdCxcblx0aXNFbGlnaWJsZUZvclJld3JpdGluZyxcblx0cmV3cml0ZUxpbmssXG5cdHJlZGlyZWN0LFxuXHRjaGVja1RoaXNQYWdlLFxuXHRyZXdyaXRlQW5jaG9ycyxcblx0c2hvd1ZhcmlhbnRQcm9tcHQsXG5cdGFwcGx5VVJMVmFyaWFudCxcbn07XG4iLCAiLy8gQ2FsbCB0byBjb250ZW50IGluIHRoaXMgZmlsZSB3aWxsIGJlIHN0cmlwZWQgaW4gcHJvZHVjdGlvbiBidWlsZC5cbmltcG9ydCB7c2hvd1ZhcmlhbnRQcm9tcHR9IGZyb20gJy4vY29udHJvbGxlcic7XG5pbXBvcnQge1xuXHRnZXRBY2NvdW50VmFyaWFudCxcblx0Z2V0TG9jYWxWYXJpYW50LFxuXHRnZXRQYWdlVmFyaWFudCxcblx0Y2FsY3VsYXRlUHJlZmVycmVkVmFyaWFudCxcblx0Z2V0QnJvd3NlclZhcmlhbnQsXG5cdGdldE1lZGlhV2lraVZhcmlhbnQsXG59IGZyb20gJy4vbW9kZWwnO1xuaW1wb3J0IHtpc0xvZ2dlZElufSBmcm9tICcuL3V0aWxzJztcblxuZnVuY3Rpb24gc2hvd0RlYnVnSW5mbygpOiB2b2lkIHtcblx0Y29uc29sZS5sb2coYFtWYXJpYW50QWxseV1cblJlZmVycmVyOiAke2RvY3VtZW50LnJlZmVycmVyIHx8ICcoZW1wdHkpJ31cbkJyb3dzZXIgdmFyaWFudDogJHtnZXRCcm93c2VyVmFyaWFudCgpfVxuTG9jYWwgdmFyaWFudDogJHtnZXRMb2NhbFZhcmlhbnQoKX1cbkFjY291bnQgdmFyaWFudDogJHtnZXRBY2NvdW50VmFyaWFudCgpfVxuUGFnZSB2YXJpYW50OiAke2dldFBhZ2VWYXJpYW50KCl9XG5NZWRpYVdpa2kgdmFyaWFudDogJHtnZXRNZWRpYVdpa2lWYXJpYW50KCl9XG5Vc2VyIGxvZ2dlZCBpbjogJHtpc0xvZ2dlZEluKCl9XG5DYWxjdWxhdGVkIHByZWZlcnJlZCB2YXJpYW50OiAke2NhbGN1bGF0ZVByZWZlcnJlZFZhcmlhbnQoKX1cbmApO1xufVxuXG5mdW5jdGlvbiBvdXRwdXQoLi4ub3V0cHV0czogc3RyaW5nW10pOiB2b2lkIHtcblx0Y29uc29sZS5sb2coYFtWYXJpYW50QWxseV0gJHtvdXRwdXRzLnNsaWNlKDAsIC0xKS5qb2luKCcvJyl9OiAke291dHB1dHMucG9wKCl9YCk7XG59XG5cbi8qKlxuICogRm9yY2libHkgZGlzcGxheSB2YXJpYW50IHByb21wdCB3aGVuIFVSTCBwYXJhbSA/dmEtZm9yY2UtZGlhbG9nIGlzIHNldFxuICovXG5mdW5jdGlvbiBjaGVja0RlYnVnVVJMUGFyYW0oKTogdm9pZCB7XG5cdGNvbnN0IHZhRm9yY2VEaWFsb2cgPSBuZXcgbXcuVXJpKCkucXVlcnlbJ3ZhLWZvcmNlLWRpYWxvZyddO1xuXHRpZiAodmFGb3JjZURpYWxvZykge1xuXHRcdHNob3dWYXJpYW50UHJvbXB0KCk7XG5cdH1cbn1cblxuZXhwb3J0IHtzaG93RGVidWdJbmZvLCBvdXRwdXQsIGNoZWNrRGVidWdVUkxQYXJhbX07XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QnNELGFBQU8sUUFBUSxnREFBZ0Q7QUFDL0RpRCx3QkFBa0I7QUFDbEI7SUFDRDtBQUVBakQsV0FBTyxRQUFRLHdDQUF3QztBQUN2RDtFQUNEO0FBS0EsTUFBSTVELGVBQWUsS0FBSyxDQUFDc0QsdUJBQXVCakQsU0FBU2dFLElBQUksR0FBRztBQUMvRFQsV0FBTyxRQUFRLDhFQUE4RTtBQUM3RmdCLG1CQUFlVixnQkFBZ0I7QUFDL0I7RUFDRDtBQUVBTSxnQkFBY04sa0JBQWtCTyxXQUFXO0FBQzNDRyxpQkFBZVYsZ0JBQWdCO0FBQ2hDO0FBRUE0RCxLQUFLOyIsCiAgIm5hbWVzIjogWyJWYXJpYW50QWxseV9leHBvcnRzIiwgIl9fZXhwb3J0IiwgInJlZGlyZWN0IiwgInNldExvY2FsVmFyaWFudCIsICJzZXRPcHRPdXQiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAiX190b0NvbW1vbkpTIiwgImlzTG9nZ2VkSW4iLCAibXciLCAiY29uZmlnIiwgImV4aXN0cyIsICJpc1JlZmVycmVyU2VsZiIsICJVcmkiLCAiZG9jdW1lbnQiLCAicmVmZXJyZXIiLCAiaG9zdCIsICJsb2NhdGlvbiIsICJpc1ZpZXdpbmdQYWdlIiwgImdldCIsICJpc0xhbmdDaGluZXNlIiwgInN0YXJ0c1dpdGgiLCAiaXNXaWtpdGV4dFBhZ2UiLCAiTE9DQUxfVkFSSUFOVF9LRVkiLCAiT1BUT1VUX0tFWSIsICJWQUxJRF9WQVJJQU5UUyIsICJWQVJJQU5UUyIsICJFWFRfVkFSSUFOVFMiLCAiRVhUX01BUFBJTkciLCAiaXNWYXJpYW50IiwgInN0ciIsICJpbmNsdWRlcyIsICJpc1ZhbGlkVmFyaWFudCIsICJpc0V4dFZhcmlhbnQiLCAibm9ybWFsaXplVmFyaWFudCIsICJleHRWYXJpYW50IiwgIl9FWFRfTUFQUElORyRleHRWYXJpYSIsICJnZXRQYWdlVmFyaWFudCIsICJyZXN1bHQiLCAiZ2V0QWNjb3VudFZhcmlhbnQiLCAidXNlciIsICJvcHRpb25zIiwgImdldExvY2FsVmFyaWFudCIsICJsb2NhbFN0b3JhZ2UiLCAiZ2V0SXRlbSIsICJnZXRCcm93c2VyVmFyaWFudCIsICJfbmF2aWdhdG9yJGxhbmd1YWdlcyQiLCAibmF2aWdhdG9yIiwgImxhbmd1YWdlcyIsICJtYXAiLCAibGFuZyIsICJ0b0xvd2VyQ2FzZSIsICJmaWx0ZXIiLCAiZmluZCIsICJnZXRNZWRpYVdpa2lWYXJpYW50IiwgIl9nZXRBY2NvdW50VmFyaWFudCIsICJjYWxjdWxhdGVQcmVmZXJyZWRWYXJpYW50IiwgInZhcmlhbnQiLCAicmVkdWNlIiwgInByZXYiLCAiY3VyciIsICJzZXRJdGVtIiwgImlzT3B0T3V0ZWQiLCAiUkVHRVhfV0lLSV9VUkwiLCAiUkVHRVhfVkFSSUFOVF9VUkwiLCAiVkFSSUFOVF9QQVJBTSIsICJpc0VsaWdpYmxlRm9yUmV3cml0aW5nIiwgImxpbmsiLCAidXJsIiwgInRlc3QiLCAicGF0aCIsICJxdWVyeSIsICJvdXRwdXQiLCAiY29uY2F0IiwgInJld3JpdGVMaW5rIiwgIm5vcm1hbGl6YXRpb25UYXJnZXRWYXJpYW50IiwgInJlcGxhY2UiLCAidG9TdHJpbmciLCAicHJlZmVycmVkVmFyaWFudCIsICJfb3B0aW9ucyRsaW5rIiwgIm9yaWdMaW5rIiwgImhyZWYiLCAibmV3TGluayIsICJmb3JjZWQiLCAiY2hlY2tUaGlzUGFnZSIsICJwYWdlVmFyaWFudCIsICJyZWRpcmVjdGlvbk9yaWdpbiIsICJyZWRpcmVjdGlvblVSTCIsICJyZXdyaXRlQW5jaG9ycyIsICJfaSIsICJfYXJyIiwgImxlbmd0aCIsICJuYW1lIiwgImFkZEV2ZW50TGlzdGVuZXIiLCAiZXYiLCAidGFyZ2V0IiwgIkVsZW1lbnQiLCAiYW5jaG9yIiwgImNsb3Nlc3QiLCAidHlwZSIsICJ3aW5kb3ciLCAiRHJhZ0V2ZW50IiwgImRhdGFUcmFuc2ZlciIsICJfaXRlcmF0b3IyIiwgIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwgInR5cGVzIiwgIl9zdGVwMiIsICJzIiwgIm4iLCAiZG9uZSIsICJ2YWx1ZSIsICJzZXREYXRhIiwgImVyciIsICJlIiwgImYiLCAiZGF0YXNldCIsICJfaTIiLCAiX2FycjIiLCAiaW5uZXJOYW1lIiwgImlubmVyRXYiLCAib25jZSIsICJzaG93VmFyaWFudFByb21wdCIsICJQcm9taXNlIiwgInJlc29sdmUiLCAidGhlbiIsICJfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCIsICJyZXF1aXJlIiwgImFwcGx5VVJMVmFyaWFudCIsICJfbXckVXJpJHF1ZXJ5JFZBUklBTlQiLCAic2hvd0RlYnVnSW5mbyIsICJjb25zb2xlIiwgImxvZyIsICJvdXRwdXRzIiwgInNsaWNlIiwgImpvaW4iLCAicG9wIiwgImNoZWNrRGVidWdVUkxQYXJhbSIsICJ2YUZvcmNlRGlhbG9nIiwgIm1haW4iXQp9Cg==

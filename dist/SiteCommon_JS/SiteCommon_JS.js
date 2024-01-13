/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://zh.wikipedia.org/wiki/MediaWiki:Common.js}
 * @base {@link https://en.wikipedia.org/wiki/MediaWiki:Gadget-exlinks.js}
 * @base {@link https://meta.wikimedia.org/wiki/MediaWiki:Gadget-ShortLink.js}
 * @base {@link https://www.mediawiki.org/wiki/MediaWiki:Gadget-workinprogress.js}
 * @base {@link https://www.mediawiki.org/wiki/Snippets/Load_JS_and_CSS_by_URL}
 * @base {@link https://en.wikipedia.org/wiki/MediaWiki:Gadget-search-new-tab.js}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/SiteCommon_JS}
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

// dist/SiteCommon_JS/SiteCommon_JS.js
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function() {
    var self = this, args = arguments;
    return new Promise(function(resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(void 0);
    });
  };
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
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
    value: mod,
    enumerable: true
  }) : target,
  mod
));
//! src/SiteCommon_JS/modules/constant.ts
var URL_DIFF = mw.util.getParamValue("diff");
var URL_HIGHLIGHT = mw.util.getParamValue("highlight");
var URL_HILIGHT = mw.util.getParamValue("hilight");
var URL_NO_PERM = mw.util.getParamValue("noperm");
var URL_USE = mw.util.getParamValue("use");
var URL_WITH_CSS = mw.util.getParamValue("withCSS");
var URL_WITH_JS = mw.util.getParamValue("withJS");
var URL_WITH_MODULE = mw.util.getParamValue("withModule");
var WG_ACTION = mw.config.get("wgAction");
var WG_CANONICAL_SPECIAL_PAGE_NAME = mw.config.get("wgCanonicalSpecialPageName");
var WG_NAMESPACE_NUMBER = mw.config.get("wgNamespaceNumber");
var WG_PAGE_NAME = mw.config.get("wgPageName");
var WG_SCRIPT = mw.config.get("wgScript");
var WG_SKIN = mw.config.get("skin");
var WG_USER_NAME = mw.config.get("wgUserName");
//! src/SiteCommon_JS/modules/core.tsx
var import_ext_gadget2 = __toESM(require("ext.gadget.React"), 1);
//! src/SiteCommon_JS/modules/i18n.ts
var import_ext_gadget = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    Note: (0, import_ext_gadget.localize)({
      en: "Note: ",
      "zh-hans": "注释：",
      "zh-hant": "注釋："
    })
  };
};
var i18nMessages = getI18nMessages();
var getMessage = (key) => {
  return i18nMessages[key] || key;
};
//! src/SiteCommon_JS/modules/core.tsx
var loadWithURL = () => {
  if (URL_WITH_CSS || URL_WITH_JS || URL_WITH_MODULE) {
    if (URL_WITH_CSS && /^MediaWiki:[^#%&<=>]*\.css$/.test(URL_WITH_CSS)) {
      mw.loader.load(mw.util.getUrl(URL_WITH_CSS, {
        action: "raw",
        ctype: "text/css",
        maxage: "3600",
        smaxage: "3600"
      }), "text/css");
    }
    if (URL_WITH_JS && /^MediaWiki:[^#%&<=>]*\.js$/.test(URL_WITH_JS)) {
      mw.loader.load(mw.util.getUrl(URL_WITH_JS, {
        action: "raw",
        ctype: "text/javascript",
        maxage: "3600",
        smaxage: "3600"
      }));
    }
    if (URL_WITH_MODULE && /^ext\.[^,|]+$/.test(URL_WITH_MODULE)) {
      mw.loader.load(URL_WITH_MODULE);
    }
  }
  if (URL_USE) {
    const wgUserName = mw.util.escapeRegExp(WG_USER_NAME !== null && WG_USER_NAME !== void 0 ? WG_USER_NAME : "");
    const REGEX_FILE = new RegExp("^(?:MediaWiki:".concat(wgUserName ? "|User:".concat(wgUserName, "/") : "", ")[^&<>=%#]*\\.(js|css)$"));
    const REGEX_EXT = /^ext\.[^,]+$/;
    const path = "".concat(WG_SCRIPT, "?action=raw&ctype=text/");
    var _iterator2 = _createForOfIteratorHelper(URL_USE.split("|")), _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
        var _REGEX_FILE$exec;
        const useFile = _step2.value;
        const name = useFile.toString().trim();
        const what = (_REGEX_FILE$exec = REGEX_FILE.exec(name)) !== null && _REGEX_FILE$exec !== void 0 ? _REGEX_FILE$exec : ["", ""];
        switch (what[1]) {
          case "js":
            mw.loader.load("".concat(path, "javascript&title=").concat(encodeURIComponent(name)));
            break;
          case "css":
            mw.loader.load("".concat(path, "css&title=").concat(encodeURIComponent(name)));
            break;
          default:
            if (REGEX_EXT.test(name)) {
              mw.loader.load(name);
            }
        }
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
  }
};
var noPermWarning = () => {
  if (!URL_NO_PERM) {
    return;
  }
  switch (URL_NO_PERM) {
    case "0":
      void mw.notify(window.wgULS("因技术原因，您没有权限访问相关页面。若有疑问，请与求闻百科运营者联系。", "因技術原因，您沒有權限訪問相關頁面。若有疑問，請與求聞百科運營者聯系。"), {
        tag: "noPerm",
        type: "error"
      });
      break;
    case "1":
      void mw.notify(window.wgULS("您没有权限访问相关页面。若您是资深编者，请与求闻百科技术团队联系，以获取权限。", "您沒有權限訪問相關頁面。若您是資深編者，請與求聞百科技術團隊聯系，以獲取權限。"), {
        tag: "noPerm",
        type: "error"
      });
      break;
    case "2":
      void mw.notify(window.wgULS("您的网络环境存在风险，请登录后继续使用。若您没有求闻百科账号，请注册后登录。", "您的網路環境存在風險，請登入後繼續使用。若您沒有求聞百科賬號，請注冊後登錄。"), {
        tag: "noPerm",
        type: "warn"
      });
      break;
    case "3":
      void mw.notify(window.wgULS("相关功能仅向注册用户开放，请登录后继续使用。若您没有求闻百科账号，请注册后登录。", "相關功能僅向注冊用戶開放，請登入後繼續使用。若您沒有求聞百科賬號，請注冊後登錄。"), {
        tag: "noPerm",
        type: "warn"
      });
      break;
    default:
      void mw.notify(window.wgULS("您没有权限访问相关页面。若有疑问，请与求闻百科运营者联系。", "您沒有權限訪問相關頁面。若有疑問，請與求聞百科運營者聯系。"), {
        tag: "noPerm",
        type: "error"
      });
  }
  const newUrl = location.href.replace(/[?&]noperm=[0-9]+/, "");
  history.pushState({}, document.title, newUrl);
};
var highLightRev = ($body) => {
  const highlight = URL_HIGHLIGHT !== null && URL_HIGHLIGHT !== void 0 ? URL_HIGHLIGHT : URL_HILIGHT;
  if (!highlight || WG_ACTION !== "history") {
    return;
  }
  var _iterator3 = _createForOfIteratorHelper(highlight.split(",")), _step3;
  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
      const version = _step3.value;
      $body.find("input[name=oldid][value=".concat(version, "]")).parent().addClass("not-patrolled");
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }
};
var addTargetBlank = ($body) => {
  $body.find('a.external, a[rel="mw:ExtLink"]').filter((_index, element) => {
    const linkHref = $(element).attr("href");
    if (linkHref) {
      const hrefSplit = linkHref.split("/");
      if (hrefSplit.length < 3 || hrefSplit[2] === location.host) {
        return false;
      }
    }
    if (element.href.includes("".concat(location.protocol, "//").concat(location.hostname))) {
      element.target = "_blank";
      if (!element.rel.includes("noopener")) {
        element.rel += " noopener";
      }
      if (!element.rel.includes("noreferrer")) {
        element.rel += " noreferrer";
      }
    }
    return true;
  });
};
var removeTitleFromPermalink = ($body) => {
  const $permaLink = $body.find("#t-permalink");
  if ($permaLink.length) {
    var _$permaLinkFirstChild;
    const $permaLinkFirstChild = $permaLink.find(":first-child");
    const href = (_$permaLinkFirstChild = $permaLinkFirstChild.attr("href")) === null || _$permaLinkFirstChild === void 0 ? void 0 : _$permaLinkFirstChild.replace(/title=[^&]*&/, "");
    if (!href) {
      return;
    }
    $permaLinkFirstChild.attr("href", href);
  }
};
var openSearchInNewTab = ($body) => {
  $body.find("#search,#searchbox,#searchform,.search-types,#search-types").on("keydown keyup mousedown", (event) => {
    const {
      ctrlKey,
      metaKey,
      target
    } = event;
    $(target).attr("target", (ctrlKey !== null && ctrlKey !== void 0 ? ctrlKey : metaKey) ? "_blank" : "");
  });
};
var titleCleanUp = ($body) => {
  if (URL_DIFF || WG_ACTION !== "view" || ![6, 118].includes(WG_NAMESPACE_NUMBER)) {
    return;
  }
  const fullPageName = new mw.Title(WG_PAGE_NAME).getPrefixedText();
  const $firstHeading = $body.find(".firstHeading");
  const documentTitle = document.title;
  const pageTitle = $firstHeading.text();
  const replaceTitle = (title) => title.replace(pageTitle, fullPageName);
  document.title = replaceTitle(documentTitle);
  $firstHeading.text(replaceTitle(pageTitle));
};
var unihanPopup = ($body) => {
  if (WG_NAMESPACE_NUMBER < 0) {
    return;
  }
  $body.find("attr, .inline-unihan").each((_index, element) => {
    const $element = $(element);
    const title = $element.attr("title");
    if (!title) {
      return;
    }
    void mw.loader.using("oojs-ui-core").then(() => {
      const popup = new OO.ui.PopupWidget({
        $content: $(/* @__PURE__ */ import_ext_gadget2.default.createElement("p", null, title)),
        label: getMessage("Note"),
        anchor: true,
        head: true,
        padded: true
      });
      $element.append(popup.$element).on("click", () => {
        popup.toggle();
      });
    });
  });
};
var fixLocationHash = () => {
  if (location.hash) {
    location.href = location.hash;
  }
};
var hideNewUsersLog = ($body) => {
  if (WG_CANONICAL_SPECIAL_PAGE_NAME !== "Log") {
    return;
  }
  const $newUsersLog = $body.find('input[name="wpfilters[]"][value=newusers]');
  $newUsersLog.prop({
    checked: 0,
    disabled: "disabled"
  });
};
var toggleLink = ($body) => {
  var _$toggler$parent$;
  const $toggler = $body.find(".mw-collapsible-toggle, .gadget-collapsible-toggler");
  if ($toggler.length && (_$toggler$parent$ = $toggler.parent()[0]) !== null && _$toggler$parent$ !== void 0 && _$toggler$parent$.style.color) {
    $toggler.find("a").css("color", "inherit");
  }
};
//! src/SiteCommon_JS/modules/tippy.ts
var import_ext_gadget3 = require("ext.gadget.Tippy");
var getContent = (reference) => {
  var _reference$getAttribu;
  const label = reference.getAttribute("aria-label");
  const title = (_reference$getAttribu = reference.getAttribute("alt")) !== null && _reference$getAttribu !== void 0 ? _reference$getAttribu : reference.getAttribute("title");
  return (label === title ? label : title || label) || reference.textContent;
};
var onCreateCallback = (instance) => {
  const {
    reference
  } = instance;
  reference.setAttribute("aria-label", getContent(reference));
  reference.removeAttribute("title");
};
var onShowCallback = (instance) => {
  onCreateCallback(instance);
  instance.setContent(getContent(instance.reference));
};
var tippyForCitizenHeader = ($body) => {
  if (WG_SKIN !== "citizen") {
    return;
  }
  var _iterator4 = _createForOfIteratorHelper($body.find(".citizen-header label[title],.citizen-header .mw-echo-notifications-badge,.citizen-header__logo a,.page-actions>nav>ul>li a,.page-actions__button")), _step4;
  try {
    for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
      const element = _step4.value;
      const $element = $(element);
      let title = $element.attr("title");
      if (!title) {
        continue;
      }
      title = title.replace(/\s*?\[.+?]$/, "");
      $element.attr({
        "aria-label": title,
        title: ""
      });
      (0, import_ext_gadget3.tippy)($element.get(0), {
        arrow: true,
        content: title,
        placement: "bottom",
        onCreate: onCreateCallback,
        onHidden: onCreateCallback,
        onShow: onShowCallback
      });
    }
  } catch (err) {
    _iterator4.e(err);
  } finally {
    _iterator4.f();
  }
};
var tippyForExtension = /* @__PURE__ */ function() {
  var _ref = _asyncToGenerator(function* () {
    yield mw.loader.using("ext.CollapsibleSidebar.js");
    (0, import_ext_gadget3.tippy)("#sidebarButton", {
      arrow: true,
      content: getContent,
      placement: "left",
      onCreate: onCreateCallback,
      onHidden: onCreateCallback,
      onShow: onShowCallback
    });
    if (WG_SKIN === "vector") {
      yield mw.loader.using("ext.CollapsibleSidebar.vector");
      (0, import_ext_gadget3.tippy)("#sidebarCollapse", {
        arrow: true,
        content: getContent,
        placement: "right",
        onCreate: onCreateCallback,
        onHidden: onCreateCallback,
        onShow: onShowCallback
      });
    }
    yield mw.loader.using("ext.DarkMode");
    (0, import_ext_gadget3.tippy)("#darkmode-button", {
      arrow: true,
      content: getContent,
      placement: "left",
      onCreate: onCreateCallback,
      onHidden: onCreateCallback,
      onShow: onShowCallback
    });
  });
  return function tippyForExtension2() {
    return _ref.apply(this, arguments);
  };
}();
//! src/SiteCommon_JS/modules/deprecatedFunctions.ts
var deprecatedFunctions = () => {
  mw.log.deprecate(window, "importScript", (title) => {
    mw.loader.load(mw.util.getUrl(title, {
      action: "raw",
      ctype: "text/javascript",
      maxage: "3600",
      smaxage: "3600"
    }));
  }, "Use mw.loader.load() or mw.loader.getScript() instead");
  mw.log.deprecate(window, "importStylesheet", (title) => {
    mw.loader.load(mw.util.getUrl(title, {
      action: "raw",
      ctype: "text/css",
      maxage: "3600",
      smaxage: "3600"
    }), "text/css");
  }, "Use mw.loader.load() instead");
  mw.log.deprecate(window, "importScriptURI", (modules) => {
    mw.loader.load(mw.util.wikiUrlencode(modules));
  }, "Use mw.loader.load() or mw.loader.getScript() instead");
  mw.log.deprecate(window, "importStylesheetURI", (modules) => {
    mw.loader.load(mw.util.wikiUrlencode(modules), "text/css");
  }, "Use mw.loader.load() instead");
  mw.log.deprecate(window, "importScriptCallback", (title, ready) => {
    void mw.loader.getScript(mw.util.getUrl(title, {
      action: "raw",
      ctype: "text/javascript",
      maxage: "3600",
      smaxage: "3600"
    })).then(ready);
  }, "Use mw.loader.load() or mw.loader.getScript() instead");
  mw.log.deprecate(window, "importScriptURICallback", (url, ready) => {
    void mw.loader.getScript(url).then(ready);
  }, "Use mw.loader.getScript() instead");
};
//! src/SiteCommon_JS/SiteCommon_JS.ts
(function siteCommon() {
  if (mw.config.get("wgSiteCommonInstalled")) {
    return;
  }
  mw.config.set("wgSiteCommonInstalled", true);
  loadWithURL();
  noPermWarning();
  fixLocationHash();
  $(() => {
    const $body = $("body");
    highLightRev($body);
    addTargetBlank($body);
    removeTitleFromPermalink($body);
    openSearchInNewTab($body);
    titleCleanUp($body);
    unihanPopup($body);
    hideNewUsersLog($body);
    toggleLink($body);
    tippyForCitizenHeader($body);
  });
  deprecatedFunctions();
  void tippyForExtension();
})();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1NpdGVDb21tb25fSlMvbW9kdWxlcy9jb25zdGFudC50cyIsICJzcmMvU2l0ZUNvbW1vbl9KUy9tb2R1bGVzL2NvcmUudHN4IiwgInNyYy9TaXRlQ29tbW9uX0pTL21vZHVsZXMvaTE4bi50cyIsICJzcmMvU2l0ZUNvbW1vbl9KUy9tb2R1bGVzL3RpcHB5LnRzIiwgInNyYy9TaXRlQ29tbW9uX0pTL21vZHVsZXMvZGVwcmVjYXRlZEZ1bmN0aW9ucy50cyIsICJzcmMvU2l0ZUNvbW1vbl9KUy9TaXRlQ29tbW9uX0pTLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBVUkxfRElGRjogc3RyaW5nIHwgbnVsbCA9IG13LnV0aWwuZ2V0UGFyYW1WYWx1ZSgnZGlmZicpO1xuY29uc3QgVVJMX0hJR0hMSUdIVDogc3RyaW5nIHwgbnVsbCA9IG13LnV0aWwuZ2V0UGFyYW1WYWx1ZSgnaGlnaGxpZ2h0Jyk7XG5jb25zdCBVUkxfSElMSUdIVDogc3RyaW5nIHwgbnVsbCA9IG13LnV0aWwuZ2V0UGFyYW1WYWx1ZSgnaGlsaWdodCcpO1xuY29uc3QgVVJMX05PX1BFUk06IHN0cmluZyB8IG51bGwgPSBtdy51dGlsLmdldFBhcmFtVmFsdWUoJ25vcGVybScpO1xuY29uc3QgVVJMX1VTRTogc3RyaW5nIHwgbnVsbCA9IG13LnV0aWwuZ2V0UGFyYW1WYWx1ZSgndXNlJyk7XG5jb25zdCBVUkxfV0lUSF9DU1M6IHN0cmluZyB8IG51bGwgPSBtdy51dGlsLmdldFBhcmFtVmFsdWUoJ3dpdGhDU1MnKTtcbmNvbnN0IFVSTF9XSVRIX0pTOiBzdHJpbmcgfCBudWxsID0gbXcudXRpbC5nZXRQYXJhbVZhbHVlKCd3aXRoSlMnKTtcbmNvbnN0IFVSTF9XSVRIX01PRFVMRTogc3RyaW5nIHwgbnVsbCA9IG13LnV0aWwuZ2V0UGFyYW1WYWx1ZSgnd2l0aE1vZHVsZScpO1xuXG5jb25zdCBXR19BQ1RJT046IE1lZGlhV2lraUNvbmZpZ01hcFdnQWN0aW9uID0gbXcuY29uZmlnLmdldCgnd2dBY3Rpb24nKTtcbmNvbnN0IFdHX0NBTk9OSUNBTF9TUEVDSUFMX1BBR0VfTkFNRTogc3RyaW5nIHwgZmFsc2UgPSBtdy5jb25maWcuZ2V0KCd3Z0Nhbm9uaWNhbFNwZWNpYWxQYWdlTmFtZScpO1xuY29uc3QgV0dfTkFNRVNQQUNFX05VTUJFUjogbnVtYmVyID0gbXcuY29uZmlnLmdldCgnd2dOYW1lc3BhY2VOdW1iZXInKTtcbmNvbnN0IFdHX1BBR0VfTkFNRTogc3RyaW5nID0gbXcuY29uZmlnLmdldCgnd2dQYWdlTmFtZScpO1xuY29uc3QgV0dfU0NSSVBUOiBzdHJpbmcgPSBtdy5jb25maWcuZ2V0KCd3Z1NjcmlwdCcpO1xuY29uc3QgV0dfU0tJTjogc3RyaW5nID0gbXcuY29uZmlnLmdldCgnc2tpbicpO1xuY29uc3QgV0dfVVNFUl9OQU1FOiBzdHJpbmcgfCBudWxsID0gbXcuY29uZmlnLmdldCgnd2dVc2VyTmFtZScpO1xuXG5leHBvcnQge1xuXHRVUkxfRElGRixcblx0VVJMX0hJR0hMSUdIVCxcblx0VVJMX0hJTElHSFQsXG5cdFVSTF9OT19QRVJNLFxuXHRVUkxfVVNFLFxuXHRVUkxfV0lUSF9DU1MsXG5cdFVSTF9XSVRIX0pTLFxuXHRVUkxfV0lUSF9NT0RVTEUsXG5cdFdHX0FDVElPTixcblx0V0dfQ0FOT05JQ0FMX1NQRUNJQUxfUEFHRV9OQU1FLFxuXHRXR19OQU1FU1BBQ0VfTlVNQkVSLFxuXHRXR19QQUdFX05BTUUsXG5cdFdHX1NDUklQVCxcblx0V0dfU0tJTixcblx0V0dfVVNFUl9OQU1FLFxufTtcbiIsICJpbXBvcnQge1xuXHRVUkxfRElGRixcblx0VVJMX0hJR0hMSUdIVCxcblx0VVJMX0hJTElHSFQsXG5cdFVSTF9OT19QRVJNLFxuXHRVUkxfVVNFLFxuXHRVUkxfV0lUSF9DU1MsXG5cdFVSTF9XSVRIX0pTLFxuXHRVUkxfV0lUSF9NT0RVTEUsXG5cdFdHX0FDVElPTixcblx0V0dfQ0FOT05JQ0FMX1NQRUNJQUxfUEFHRV9OQU1FLFxuXHRXR19OQU1FU1BBQ0VfTlVNQkVSLFxuXHRXR19QQUdFX05BTUUsXG5cdFdHX1NDUklQVCxcblx0V0dfVVNFUl9OQU1FLFxufSBmcm9tICcuL2NvbnN0YW50JztcbmltcG9ydCBSZWFjdCBmcm9tICdleHQuZ2FkZ2V0LlJlYWN0JztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9pMThuJztcblxuY29uc3QgbG9hZFdpdGhVUkwgPSAoKTogdm9pZCA9PiB7XG5cdC8qKlxuXHQgKiAmd2l0aENTUz0gYW5kICZ3aXRoSlM9IFVSTCBwYXJhbWV0ZXJzXG5cdCAqIEFsbG93IHRvIHRyeSBjdXN0b20gc2NyaXB0cyBmcm9tIE1lZGlhV2lraSBzcGFjZVxuXHQgKiB3aXRob3V0IGVkaXRpbmcgcGVyc29uYWwgLmNzcyBvciAuanMgZmlsZXNcblx0ICovXG5cdGlmIChVUkxfV0lUSF9DU1MgfHwgVVJMX1dJVEhfSlMgfHwgVVJMX1dJVEhfTU9EVUxFKSB7XG5cdFx0aWYgKFVSTF9XSVRIX0NTUyAmJiAvXk1lZGlhV2lraTpbXiMlJjw9Pl0qXFwuY3NzJC8udGVzdChVUkxfV0lUSF9DU1MpKSB7XG5cdFx0XHRtdy5sb2FkZXIubG9hZChcblx0XHRcdFx0bXcudXRpbC5nZXRVcmwoVVJMX1dJVEhfQ1NTLCB7XG5cdFx0XHRcdFx0YWN0aW9uOiAncmF3Jyxcblx0XHRcdFx0XHRjdHlwZTogJ3RleHQvY3NzJyxcblx0XHRcdFx0XHRtYXhhZ2U6ICczNjAwJyxcblx0XHRcdFx0XHRzbWF4YWdlOiAnMzYwMCcsXG5cdFx0XHRcdH0pLFxuXHRcdFx0XHQndGV4dC9jc3MnXG5cdFx0XHQpO1xuXHRcdH1cblx0XHRpZiAoVVJMX1dJVEhfSlMgJiYgL15NZWRpYVdpa2k6W14jJSY8PT5dKlxcLmpzJC8udGVzdChVUkxfV0lUSF9KUykpIHtcblx0XHRcdG13LmxvYWRlci5sb2FkKFxuXHRcdFx0XHRtdy51dGlsLmdldFVybChVUkxfV0lUSF9KUywge1xuXHRcdFx0XHRcdGFjdGlvbjogJ3JhdycsXG5cdFx0XHRcdFx0Y3R5cGU6ICd0ZXh0L2phdmFzY3JpcHQnLFxuXHRcdFx0XHRcdG1heGFnZTogJzM2MDAnLFxuXHRcdFx0XHRcdHNtYXhhZ2U6ICczNjAwJyxcblx0XHRcdFx0fSlcblx0XHRcdCk7XG5cdFx0fVxuXHRcdGlmIChVUkxfV0lUSF9NT0RVTEUgJiYgL15leHRcXC5bXix8XSskLy50ZXN0KFVSTF9XSVRIX01PRFVMRSkpIHtcblx0XHRcdG13LmxvYWRlci5sb2FkKFVSTF9XSVRIX01PRFVMRSk7XG5cdFx0fVxuXHR9XG5cdC8qKlxuXHQgKiBMb2FkIENTUyBhbmQgSlMgZmlsZXMgdGVtcG9yYXJpbHkgdGhyb3VnaCBVUkwuXG5cdCAqICZ1c2U9RmlsZTEuY3NzfEZpbGUyLmNzc3xGaWxlMy5qc1xuXHQgKi9cblx0aWYgKFVSTF9VU0UpIHtcblx0XHRjb25zdCB3Z1VzZXJOYW1lOiBzdHJpbmcgPSBtdy51dGlsLmVzY2FwZVJlZ0V4cChXR19VU0VSX05BTUUgPz8gJycpO1xuXHRcdGNvbnN0IFJFR0VYX0ZJTEU6IFJlZ0V4cCA9IG5ldyBSZWdFeHAoXG5cdFx0XHRgXig/Ok1lZGlhV2lraToke3dnVXNlck5hbWUgPyBgfFVzZXI6JHt3Z1VzZXJOYW1lfS9gIDogJyd9KVteJjw+PSUjXSpcXFxcLihqc3xjc3MpJGBcblx0XHQpO1xuXHRcdGNvbnN0IFJFR0VYX0VYVDogUmVnRXhwID0gL15leHRcXC5bXixdKyQvO1xuXHRcdGNvbnN0IHBhdGg6IHN0cmluZyA9IGAke1dHX1NDUklQVH0/YWN0aW9uPXJhdyZjdHlwZT10ZXh0L2A7XG5cdFx0Zm9yIChjb25zdCB1c2VGaWxlIG9mIFVSTF9VU0Uuc3BsaXQoJ3wnKSkge1xuXHRcdFx0Y29uc3QgbmFtZTogc3RyaW5nID0gdXNlRmlsZS50b1N0cmluZygpLnRyaW0oKTtcblx0XHRcdGNvbnN0IHdoYXQ6IHN0cmluZ1tdID0gUkVHRVhfRklMRS5leGVjKG5hbWUpID8/IFsnJywgJyddO1xuXHRcdFx0c3dpdGNoICh3aGF0WzFdKSB7XG5cdFx0XHRcdGNhc2UgJ2pzJzpcblx0XHRcdFx0XHRtdy5sb2FkZXIubG9hZChgJHtwYXRofWphdmFzY3JpcHQmdGl0bGU9JHtlbmNvZGVVUklDb21wb25lbnQobmFtZSl9YCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgJ2Nzcyc6XG5cdFx0XHRcdFx0bXcubG9hZGVyLmxvYWQoYCR7cGF0aH1jc3MmdGl0bGU9JHtlbmNvZGVVUklDb21wb25lbnQobmFtZSl9YCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0aWYgKFJFR0VYX0VYVC50ZXN0KG5hbWUpKSB7XG5cdFx0XHRcdFx0XHRtdy5sb2FkZXIubG9hZChuYW1lKTtcblx0XHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59O1xuXG5jb25zdCBub1Blcm1XYXJuaW5nID0gKCk6IHZvaWQgPT4ge1xuXHQvKipcblx0ICogTG9hZCB3YXJuaW5nKHMpIHdoZW4gdXNlciBoYXMgbm8gYWNjZXNzIHRvIHBhZ2Vcblx0ICovXG5cdGlmICghVVJMX05PX1BFUk0pIHtcblx0XHRyZXR1cm47XG5cdH1cblx0c3dpdGNoIChVUkxfTk9fUEVSTSkge1xuXHRcdGNhc2UgJzAnOlxuXHRcdFx0dm9pZCBtdy5ub3RpZnkoXG5cdFx0XHRcdHdpbmRvdy53Z1VMUyhcblx0XHRcdFx0XHQn5Zug5oqA5pyv5Y6f5Zug77yM5oKo5rKh5pyJ5p2D6ZmQ6K6/6Zeu55u45YWz6aG16Z2i44CC6Iul5pyJ55aR6Zeu77yM6K+35LiO5rGC6Ze755m+56eR6L+Q6JCl6ICF6IGU57O744CCJyxcblx0XHRcdFx0XHQn5Zug5oqA6KGT5Y6f5Zug77yM5oKo5rKS5pyJ5qyK6ZmQ6Kiq5ZWP55u46Zec6aCB6Z2i44CC6Iul5pyJ55aR5ZWP77yM6KuL6IiH5rGC6IGe55m+56eR6YGL54ef6ICF6IGv57O744CCJ1xuXHRcdFx0XHQpLFxuXHRcdFx0XHR7dGFnOiAnbm9QZXJtJywgdHlwZTogJ2Vycm9yJ31cblx0XHRcdCk7XG5cdFx0XHRicmVhaztcblx0XHRjYXNlICcxJzpcblx0XHRcdHZvaWQgbXcubm90aWZ5KFxuXHRcdFx0XHR3aW5kb3cud2dVTFMoXG5cdFx0XHRcdFx0J+aCqOayoeacieadg+mZkOiuv+mXruebuOWFs+mhtemdouOAguiLpeaCqOaYr+i1hOa3see8luiAhe+8jOivt+S4juaxgumXu+eZvuenkeaKgOacr+WboumYn+iBlOezu++8jOS7peiOt+WPluadg+mZkOOAgicsXG5cdFx0XHRcdFx0J+aCqOaykuacieasiumZkOioquWVj+ebuOmXnOmggemdouOAguiLpeaCqOaYr+izh+a3see3qOiAhe+8jOiri+iIh+axguiBnueZvuenkeaKgOihk+WcmOmaiuiBr+ezu++8jOS7peeNsuWPluasiumZkOOAgidcblx0XHRcdFx0KSxcblx0XHRcdFx0e3RhZzogJ25vUGVybScsIHR5cGU6ICdlcnJvcid9XG5cdFx0XHQpO1xuXHRcdFx0YnJlYWs7XG5cdFx0Y2FzZSAnMic6XG5cdFx0XHR2b2lkIG13Lm5vdGlmeShcblx0XHRcdFx0d2luZG93LndnVUxTKFxuXHRcdFx0XHRcdCfmgqjnmoTnvZHnu5znjq/looPlrZjlnKjpo47pmanvvIzor7fnmbvlvZXlkI7nu6fnu63kvb/nlKjjgILoi6XmgqjmsqHmnInmsYLpl7vnmb7np5HotKblj7fvvIzor7fms6jlhozlkI7nmbvlvZXjgIInLFxuXHRcdFx0XHRcdCfmgqjnmoTntrLot6/nkrDlooPlrZjlnKjpoqjpmqrvvIzoq4vnmbvlhaXlvoznubznuozkvb/nlKjjgILoi6XmgqjmspLmnInmsYLogZ7nmb7np5Hos6zomZ/vvIzoq4vms6jlhorlvoznmbvpjITjgIInXG5cdFx0XHRcdCksXG5cdFx0XHRcdHt0YWc6ICdub1Blcm0nLCB0eXBlOiAnd2Fybid9XG5cdFx0XHQpO1xuXHRcdFx0YnJlYWs7XG5cdFx0Y2FzZSAnMyc6XG5cdFx0XHR2b2lkIG13Lm5vdGlmeShcblx0XHRcdFx0d2luZG93LndnVUxTKFxuXHRcdFx0XHRcdCfnm7jlhbPlip/og73ku4XlkJHms6jlhoznlKjmiLflvIDmlL7vvIzor7fnmbvlvZXlkI7nu6fnu63kvb/nlKjjgILoi6XmgqjmsqHmnInmsYLpl7vnmb7np5HotKblj7fvvIzor7fms6jlhozlkI7nmbvlvZXjgIInLFxuXHRcdFx0XHRcdCfnm7jpl5zlip/og73lg4XlkJHms6jlhornlKjmiLbplovmlL7vvIzoq4vnmbvlhaXlvoznubznuozkvb/nlKjjgILoi6XmgqjmspLmnInmsYLogZ7nmb7np5Hos6zomZ/vvIzoq4vms6jlhorlvoznmbvpjITjgIInXG5cdFx0XHRcdCksXG5cdFx0XHRcdHt0YWc6ICdub1Blcm0nLCB0eXBlOiAnd2Fybid9XG5cdFx0XHQpO1xuXHRcdFx0YnJlYWs7XG5cdFx0ZGVmYXVsdDpcblx0XHRcdHZvaWQgbXcubm90aWZ5KFxuXHRcdFx0XHR3aW5kb3cud2dVTFMoXG5cdFx0XHRcdFx0J+aCqOayoeacieadg+mZkOiuv+mXruebuOWFs+mhtemdouOAguiLpeacieeWkemXru+8jOivt+S4juaxgumXu+eZvuenkei/kOiQpeiAheiBlOezu+OAgicsXG5cdFx0XHRcdFx0J+aCqOaykuacieasiumZkOioquWVj+ebuOmXnOmggemdouOAguiLpeacieeWkeWVj++8jOiri+iIh+axguiBnueZvuenkemBi+eHn+iAheiBr+ezu+OAgidcblx0XHRcdFx0KSxcblx0XHRcdFx0e3RhZzogJ25vUGVybScsIHR5cGU6ICdlcnJvcid9XG5cdFx0XHQpO1xuXHR9XG5cdGNvbnN0IG5ld1VybDogc3RyaW5nID0gbG9jYXRpb24uaHJlZi5yZXBsYWNlKC9bPyZdbm9wZXJtPVswLTldKy8sICcnKTtcblx0aGlzdG9yeS5wdXNoU3RhdGUoe30sIGRvY3VtZW50LnRpdGxlLCBuZXdVcmwpO1xufTtcblxuY29uc3QgaGlnaExpZ2h0UmV2ID0gKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQgPT4ge1xuXHQvKipcblx0ICogQWRkIGhpZ2hsaWdodCB0byByZXZpc2lvbnMgd2hlbiB1c2luZyBgJmhpbGlnaHQ9cmV2aWRgIG9yIGAmaGlnaGxpZ2h0PXJldmlkYFxuXHQgKi9cblx0Y29uc3QgaGlnaGxpZ2h0OiBzdHJpbmcgfCBudWxsID0gVVJMX0hJR0hMSUdIVCA/PyBVUkxfSElMSUdIVDtcblx0aWYgKCFoaWdobGlnaHQgfHwgV0dfQUNUSU9OICE9PSAnaGlzdG9yeScpIHtcblx0XHRyZXR1cm47XG5cdH1cblx0Zm9yIChjb25zdCB2ZXJzaW9uIG9mIGhpZ2hsaWdodC5zcGxpdCgnLCcpKSB7XG5cdFx0JGJvZHkuZmluZChgaW5wdXRbbmFtZT1vbGRpZF1bdmFsdWU9JHt2ZXJzaW9ufV1gKS5wYXJlbnQoKS5hZGRDbGFzcygnbm90LXBhdHJvbGxlZCcpO1xuXHR9XG59O1xuXG5jb25zdCBhZGRUYXJnZXRCbGFuayA9ICgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkID0+IHtcblx0LyoqXG5cdCAqIEFkZCB0YXJnZXQ9XCJibGFua1wiIHRvIGV4dGVybmFsIGxpbmtzXG5cdCAqL1xuXHQkYm9keS5maW5kPEhUTUxBbmNob3JFbGVtZW50PignYS5leHRlcm5hbCwgYVtyZWw9XCJtdzpFeHRMaW5rXCJdJykuZmlsdGVyKChfaW5kZXgsIGVsZW1lbnQpOiBib29sZWFuID0+IHtcblx0XHRjb25zdCBsaW5rSHJlZjogc3RyaW5nIHwgdW5kZWZpbmVkID0gJChlbGVtZW50KS5hdHRyKCdocmVmJyk7XG5cdFx0aWYgKGxpbmtIcmVmKSB7XG5cdFx0XHRjb25zdCBocmVmU3BsaXQ6IHN0cmluZ1tdID0gbGlua0hyZWYuc3BsaXQoJy8nKTtcblx0XHRcdGlmIChocmVmU3BsaXQubGVuZ3RoIDwgMyB8fCBocmVmU3BsaXRbMl0gPT09IGxvY2F0aW9uLmhvc3QpIHtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZiAoZWxlbWVudC5ocmVmLmluY2x1ZGVzKGAke2xvY2F0aW9uLnByb3RvY29sfS8vJHtsb2NhdGlvbi5ob3N0bmFtZX1gKSkge1xuXHRcdFx0ZWxlbWVudC50YXJnZXQgPSAnX2JsYW5rJztcblx0XHRcdGlmICghZWxlbWVudC5yZWwuaW5jbHVkZXMoJ25vb3BlbmVyJykpIHtcblx0XHRcdFx0ZWxlbWVudC5yZWwgKz0gJyBub29wZW5lcic7XG5cdFx0XHR9XG5cdFx0XHRpZiAoIWVsZW1lbnQucmVsLmluY2x1ZGVzKCdub3JlZmVycmVyJykpIHtcblx0XHRcdFx0ZWxlbWVudC5yZWwgKz0gJyBub3JlZmVycmVyJztcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIHRydWU7XG5cdH0pO1xufTtcblxuY29uc3QgcmVtb3ZlVGl0bGVGcm9tUGVybWFsaW5rID0gKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQgPT4ge1xuXHQvKipcblx0ICogUmVtb3ZlIHRpdGxlPSogZnJvbSBwZXJtYWxpbmtcblx0ICovXG5cdGNvbnN0ICRwZXJtYUxpbms6IEpRdWVyeSA9ICRib2R5LmZpbmQoJyN0LXBlcm1hbGluaycpO1xuXHRpZiAoJHBlcm1hTGluay5sZW5ndGgpIHtcblx0XHRjb25zdCAkcGVybWFMaW5rRmlyc3RDaGlsZDogSlF1ZXJ5PEhUTUxBbmNob3JFbGVtZW50PiA9ICRwZXJtYUxpbmsuZmluZDxIVE1MQW5jaG9yRWxlbWVudD4oJzpmaXJzdC1jaGlsZCcpO1xuXHRcdGNvbnN0IGhyZWY6IHN0cmluZyB8IHVuZGVmaW5lZCA9ICRwZXJtYUxpbmtGaXJzdENoaWxkLmF0dHIoJ2hyZWYnKT8ucmVwbGFjZSgvdGl0bGU9W14mXSomLywgJycpO1xuXHRcdGlmICghaHJlZikge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHQkcGVybWFMaW5rRmlyc3RDaGlsZC5hdHRyKCdocmVmJywgaHJlZik7XG5cdH1cbn07XG5cbmNvbnN0IG9wZW5TZWFyY2hJbk5ld1RhYiA9ICgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkID0+IHtcblx0LyoqXG5cdCAqIE9wZW4gc2VhcmNoIHJlc3VsdHMgaW4gYSBuZXcgdGFiIG9yIHdpbmRvd1xuXHQgKiB3aGVuIGhvbGRpbmcgZG93biB0aGUgQ3RybCBrZXkgKGJ5IFRpbWVzaGlmdGVyKVxuXHQgKi9cblx0JGJvZHlcblx0XHQuZmluZCgnI3NlYXJjaCwjc2VhcmNoYm94LCNzZWFyY2hmb3JtLC5zZWFyY2gtdHlwZXMsI3NlYXJjaC10eXBlcycpXG5cdFx0Lm9uKCdrZXlkb3duIGtleXVwIG1vdXNlZG93bicsIChldmVudDogSlF1ZXJ5LlRyaWdnZXJlZEV2ZW50PEhUTUxFbGVtZW50Pik6IHZvaWQgPT4ge1xuXHRcdFx0Y29uc3Qge2N0cmxLZXksIG1ldGFLZXksIHRhcmdldH0gPSBldmVudDtcblx0XHRcdCQodGFyZ2V0KS5hdHRyKCd0YXJnZXQnLCBjdHJsS2V5ID8/IG1ldGFLZXkgPyAnX2JsYW5rJyA6ICcnKTtcblx0XHR9KTtcbn07XG5cbmNvbnN0IHRpdGxlQ2xlYW5VcCA9ICgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkID0+IHtcblx0LyoqXG5cdCAqIENsZWFudXAgdGl0bGUgZm9yIGFsbCBwYWdlc1xuXHQgKi9cblx0aWYgKFVSTF9ESUZGIHx8IFdHX0FDVElPTiAhPT0gJ3ZpZXcnIHx8ICFbNiwgMTE4XS5pbmNsdWRlcyhXR19OQU1FU1BBQ0VfTlVNQkVSKSkge1xuXHRcdHJldHVybjtcblx0fVxuXHRjb25zdCBmdWxsUGFnZU5hbWU6IHN0cmluZyA9IG5ldyBtdy5UaXRsZShXR19QQUdFX05BTUUpLmdldFByZWZpeGVkVGV4dCgpO1xuXHRjb25zdCAkZmlyc3RIZWFkaW5nOiBKUXVlcnkgPSAkYm9keS5maW5kKCcuZmlyc3RIZWFkaW5nJyk7XG5cdGNvbnN0IGRvY3VtZW50VGl0bGU6IHN0cmluZyA9IGRvY3VtZW50LnRpdGxlO1xuXHRjb25zdCBwYWdlVGl0bGU6IHN0cmluZyA9ICRmaXJzdEhlYWRpbmcudGV4dCgpO1xuXHRjb25zdCByZXBsYWNlVGl0bGUgPSAodGl0bGU6IHN0cmluZyk6IHN0cmluZyA9PiB0aXRsZS5yZXBsYWNlKHBhZ2VUaXRsZSwgZnVsbFBhZ2VOYW1lKTtcblx0ZG9jdW1lbnQudGl0bGUgPSByZXBsYWNlVGl0bGUoZG9jdW1lbnRUaXRsZSk7XG5cdCRmaXJzdEhlYWRpbmcudGV4dChyZXBsYWNlVGl0bGUocGFnZVRpdGxlKSk7XG59O1xuXG5jb25zdCB1bmloYW5Qb3B1cCA9ICgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkID0+IHtcblx0LyoqXG5cdCAqIERpc3BsYXkgdGl0bGU9KC4qKSBvZiA8c3BhbiBjbGFzcz1cImlubGluZS11bmloYW5cIj4gYWZ0ZXIgdGhlbS5cblx0ICogKGJldGEgdGVzdClcblx0ICovXG5cdC8vIERvIG5vdCBkaXNwbGF5IG9uIFNwZWNpYWwgUGFnZXNcblx0aWYgKFdHX05BTUVTUEFDRV9OVU1CRVIgPCAwKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdCRib2R5LmZpbmQoJ2F0dHIsIC5pbmxpbmUtdW5paGFuJykuZWFjaCgoX2luZGV4OiBudW1iZXIsIGVsZW1lbnQ6IEhUTUxFbGVtZW50KTogdm9pZCA9PiB7XG5cdFx0Y29uc3QgJGVsZW1lbnQ6IEpRdWVyeSA9ICQoZWxlbWVudCk7XG5cdFx0Y29uc3QgdGl0bGU6IHN0cmluZyB8IHVuZGVmaW5lZCA9ICRlbGVtZW50LmF0dHIoJ3RpdGxlJyk7XG5cdFx0aWYgKCF0aXRsZSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHR2b2lkIG13LmxvYWRlci51c2luZygnb29qcy11aS1jb3JlJykudGhlbigoKTogdm9pZCA9PiB7XG5cdFx0XHRjb25zdCBwb3B1cDogT08udWkuUG9wdXBXaWRnZXQgPSBuZXcgT08udWkuUG9wdXBXaWRnZXQoe1xuXHRcdFx0XHQkY29udGVudDogJCgoPHA+e3RpdGxlfTwvcD4pIGFzIEhUTUxFbGVtZW50KSxcblx0XHRcdFx0bGFiZWw6IGdldE1lc3NhZ2UoJ05vdGUnKSxcblx0XHRcdFx0YW5jaG9yOiB0cnVlLFxuXHRcdFx0XHRoZWFkOiB0cnVlLFxuXHRcdFx0XHRwYWRkZWQ6IHRydWUsXG5cdFx0XHR9KTtcblx0XHRcdCRlbGVtZW50LmFwcGVuZChwb3B1cC4kZWxlbWVudCkub24oJ2NsaWNrJywgKCk6IHZvaWQgPT4ge1xuXHRcdFx0XHRwb3B1cC50b2dnbGUoKTtcblx0XHRcdH0pO1xuXHRcdH0pO1xuXHR9KTtcbn07XG5cbmNvbnN0IGZpeExvY2F0aW9uSGFzaCA9ICgpOiB2b2lkID0+IHtcblx0Lyog5L+u5q2j5oqY5Y+g5ZCO5a6a5L2N5Y+Y5YyWICovXG5cdGlmIChsb2NhdGlvbi5oYXNoKSB7XG5cdFx0bG9jYXRpb24uaHJlZiA9IGxvY2F0aW9uLmhhc2g7XG5cdH1cbn07XG5cbmNvbnN0IGhpZGVOZXdVc2Vyc0xvZyA9ICgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkID0+IHtcblx0Lyog5Li05pe277ya56aB5q2i55So5oi35p+l55yL55So5oi35Yib5bu65pel5b+XICovXG5cdGlmIChXR19DQU5PTklDQUxfU1BFQ0lBTF9QQUdFX05BTUUgIT09ICdMb2cnKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdGNvbnN0ICRuZXdVc2Vyc0xvZzogSlF1ZXJ5ID0gJGJvZHkuZmluZCgnaW5wdXRbbmFtZT1cIndwZmlsdGVyc1tdXCJdW3ZhbHVlPW5ld3VzZXJzXScpO1xuXHQkbmV3VXNlcnNMb2cucHJvcCh7XG5cdFx0Y2hlY2tlZDogMCxcblx0XHRkaXNhYmxlZDogJ2Rpc2FibGVkJyxcblx0fSk7XG59O1xuXG5jb25zdCB0b2dnbGVMaW5rID0gKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQgPT4ge1xuXHQvKiDosIPmlbTmipjlj6DmjInpkq7nmoTpopzoibIgKi9cblx0Y29uc3QgJHRvZ2dsZXI6IEpRdWVyeSA9ICRib2R5LmZpbmQoJy5tdy1jb2xsYXBzaWJsZS10b2dnbGUsIC5nYWRnZXQtY29sbGFwc2libGUtdG9nZ2xlcicpO1xuXHRpZiAoJHRvZ2dsZXIubGVuZ3RoICYmICR0b2dnbGVyLnBhcmVudCgpWzBdPy5zdHlsZS5jb2xvcikge1xuXHRcdCR0b2dnbGVyLmZpbmQoJ2EnKS5jc3MoJ2NvbG9yJywgJ2luaGVyaXQnKTtcblx0fVxufTtcblxuZXhwb3J0IHtcblx0bG9hZFdpdGhVUkwsXG5cdG5vUGVybVdhcm5pbmcsXG5cdGhpZ2hMaWdodFJldixcblx0YWRkVGFyZ2V0QmxhbmssXG5cdHJlbW92ZVRpdGxlRnJvbVBlcm1hbGluayxcblx0b3BlblNlYXJjaEluTmV3VGFiLFxuXHR0aXRsZUNsZWFuVXAsXG5cdHVuaWhhblBvcHVwLFxuXHRmaXhMb2NhdGlvbkhhc2gsXG5cdGhpZGVOZXdVc2Vyc0xvZyxcblx0dG9nZ2xlTGluayxcbn07XG4iLCAiaW1wb3J0IHtsb2NhbGl6ZX0gZnJvbSAnZXh0LmdhZGdldC5pMThuJztcblxuY29uc3QgZ2V0STE4bk1lc3NhZ2VzID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdE5vdGU6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnTm90ZTogJyxcblx0XHRcdCd6aC1oYW5zJzogJ+azqOmHiu+8micsXG5cdFx0XHQnemgtaGFudCc6ICfms6jph4vvvJonLFxuXHRcdH0pLFxuXHR9O1xufTtcblxuY29uc3QgaTE4bk1lc3NhZ2VzID0gZ2V0STE4bk1lc3NhZ2VzKCk7XG5cbmNvbnN0IGdldE1lc3NhZ2U6IEdldE1lc3NhZ2VzPHR5cGVvZiBpMThuTWVzc2FnZXM+ID0gKGtleSkgPT4ge1xuXHRyZXR1cm4gaTE4bk1lc3NhZ2VzW2tleV0gfHwga2V5O1xufTtcblxuZXhwb3J0IHtnZXRNZXNzYWdlfTtcbiIsICJpbXBvcnQge1dHX1NLSU59IGZyb20gJy4vY29uc3RhbnQnO1xuaW1wb3J0IHt0aXBweX0gZnJvbSAnZXh0LmdhZGdldC5UaXBweSc7XG5cbmNvbnN0IGdldENvbnRlbnQgPSAocmVmZXJlbmNlOiBFbGVtZW50KTogc3RyaW5nID0+IHtcblx0Y29uc3QgbGFiZWw6IHN0cmluZyB8IG51bGwgPSByZWZlcmVuY2UuZ2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJyk7XG5cdGNvbnN0IHRpdGxlOiBzdHJpbmcgfCBudWxsID0gcmVmZXJlbmNlLmdldEF0dHJpYnV0ZSgnYWx0JykgPz8gcmVmZXJlbmNlLmdldEF0dHJpYnV0ZSgndGl0bGUnKTtcblxuXHRyZXR1cm4gKGxhYmVsID09PSB0aXRsZSA/IGxhYmVsIDogdGl0bGUgfHwgbGFiZWwpIHx8IChyZWZlcmVuY2UudGV4dENvbnRlbnQgYXMgc3RyaW5nKTtcbn07XG5cbmNvbnN0IG9uQ3JlYXRlQ2FsbGJhY2sgPSAoaW5zdGFuY2U6IFJldHVyblR5cGU8dHlwZW9mIHRpcHB5PlswXSk6IHZvaWQgPT4ge1xuXHRjb25zdCB7cmVmZXJlbmNlfSA9IGluc3RhbmNlO1xuXHRyZWZlcmVuY2Uuc2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJywgZ2V0Q29udGVudChyZWZlcmVuY2UpKTtcblx0cmVmZXJlbmNlLnJlbW92ZUF0dHJpYnV0ZSgndGl0bGUnKTtcbn07XG5cbmNvbnN0IG9uU2hvd0NhbGxiYWNrID0gKGluc3RhbmNlOiBSZXR1cm5UeXBlPHR5cGVvZiB0aXBweT5bMF0pOiB2b2lkID0+IHtcblx0b25DcmVhdGVDYWxsYmFjayhpbnN0YW5jZSk7XG5cdGluc3RhbmNlLnNldENvbnRlbnQoZ2V0Q29udGVudChpbnN0YW5jZS5yZWZlcmVuY2UpKTtcbn07XG5cbmNvbnN0IHRpcHB5Rm9yQ2l0aXplbkhlYWRlciA9ICgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkID0+IHtcblx0aWYgKFdHX1NLSU4gIT09ICdjaXRpemVuJykge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGZvciAoY29uc3QgZWxlbWVudCBvZiAkYm9keS5maW5kKFxuXHRcdCcuY2l0aXplbi1oZWFkZXIgbGFiZWxbdGl0bGVdLC5jaXRpemVuLWhlYWRlciAubXctZWNoby1ub3RpZmljYXRpb25zLWJhZGdlLC5jaXRpemVuLWhlYWRlcl9fbG9nbyBhLC5wYWdlLWFjdGlvbnM+bmF2PnVsPmxpIGEsLnBhZ2UtYWN0aW9uc19fYnV0dG9uJ1xuXHQpKSB7XG5cdFx0Y29uc3QgJGVsZW1lbnQ6IEpRdWVyeSA9ICQoZWxlbWVudCk7XG5cdFx0bGV0IHRpdGxlOiBzdHJpbmcgfCB1bmRlZmluZWQgPSAkZWxlbWVudC5hdHRyKCd0aXRsZScpO1xuXHRcdGlmICghdGl0bGUpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdHRpdGxlID0gdGl0bGUucmVwbGFjZSgvXFxzKj9cXFsuKz9dJC8sICcnKTtcblxuXHRcdCRlbGVtZW50LmF0dHIoe1xuXHRcdFx0J2FyaWEtbGFiZWwnOiB0aXRsZSxcblx0XHRcdHRpdGxlOiAnJyxcblx0XHR9KTtcblx0XHR0aXBweSgkZWxlbWVudC5nZXQoMCkgYXMgSFRNTEVsZW1lbnQsIHtcblx0XHRcdGFycm93OiB0cnVlLFxuXHRcdFx0Y29udGVudDogdGl0bGUsXG5cdFx0XHRwbGFjZW1lbnQ6ICdib3R0b20nLFxuXHRcdFx0b25DcmVhdGU6IG9uQ3JlYXRlQ2FsbGJhY2ssXG5cdFx0XHRvbkhpZGRlbjogb25DcmVhdGVDYWxsYmFjayxcblx0XHRcdG9uU2hvdzogb25TaG93Q2FsbGJhY2ssXG5cdFx0fSk7XG5cdH1cbn07XG5cbmNvbnN0IHRpcHB5Rm9yRXh0ZW5zaW9uID0gYXN5bmMgKCk6IFByb21pc2U8dm9pZD4gPT4ge1xuXHRhd2FpdCBtdy5sb2FkZXIudXNpbmcoJ2V4dC5Db2xsYXBzaWJsZVNpZGViYXIuanMnKTtcblx0dGlwcHkoJyNzaWRlYmFyQnV0dG9uJywge1xuXHRcdGFycm93OiB0cnVlLFxuXHRcdGNvbnRlbnQ6IGdldENvbnRlbnQsXG5cdFx0cGxhY2VtZW50OiAnbGVmdCcsXG5cdFx0b25DcmVhdGU6IG9uQ3JlYXRlQ2FsbGJhY2ssXG5cdFx0b25IaWRkZW46IG9uQ3JlYXRlQ2FsbGJhY2ssXG5cdFx0b25TaG93OiBvblNob3dDYWxsYmFjayxcblx0fSk7XG5cblx0aWYgKFdHX1NLSU4gPT09ICd2ZWN0b3InKSB7XG5cdFx0YXdhaXQgbXcubG9hZGVyLnVzaW5nKCdleHQuQ29sbGFwc2libGVTaWRlYmFyLnZlY3RvcicpO1xuXHRcdHRpcHB5KCcjc2lkZWJhckNvbGxhcHNlJywge1xuXHRcdFx0YXJyb3c6IHRydWUsXG5cdFx0XHRjb250ZW50OiBnZXRDb250ZW50LFxuXHRcdFx0cGxhY2VtZW50OiAncmlnaHQnLFxuXHRcdFx0b25DcmVhdGU6IG9uQ3JlYXRlQ2FsbGJhY2ssXG5cdFx0XHRvbkhpZGRlbjogb25DcmVhdGVDYWxsYmFjayxcblx0XHRcdG9uU2hvdzogb25TaG93Q2FsbGJhY2ssXG5cdFx0fSk7XG5cdH1cblxuXHRhd2FpdCBtdy5sb2FkZXIudXNpbmcoJ2V4dC5EYXJrTW9kZScpO1xuXHR0aXBweSgnI2Rhcmttb2RlLWJ1dHRvbicsIHtcblx0XHRhcnJvdzogdHJ1ZSxcblx0XHRjb250ZW50OiBnZXRDb250ZW50LFxuXHRcdHBsYWNlbWVudDogJ2xlZnQnLFxuXHRcdG9uQ3JlYXRlOiBvbkNyZWF0ZUNhbGxiYWNrLFxuXHRcdG9uSGlkZGVuOiBvbkNyZWF0ZUNhbGxiYWNrLFxuXHRcdG9uU2hvdzogb25TaG93Q2FsbGJhY2ssXG5cdH0pO1xufTtcblxuZXhwb3J0IHt0aXBweUZvckNpdGl6ZW5IZWFkZXIsIHRpcHB5Rm9yRXh0ZW5zaW9ufTtcbiIsICJjb25zdCBkZXByZWNhdGVkRnVuY3Rpb25zID0gKCk6IHZvaWQgPT4ge1xuXHQvKipcblx0ICogbWFpbnRlbmFuY2U6IFNvbWUgdXNlciBzY3JpcHRzIG1heSBiZSB1c2luZyB0aGUgZm9sbG93aW5nIGRlcHJlY2F0ZWQgZnVuY3Rpb25zLlxuXHQgKiBUaGVzZSBmdW5jdGlvbnMgYXJlIG5vIGxvbmdlciBzdXBwb3J0ZWQgYW5kIHNob3VsZCBiZSB1cGRhdGVkIHRvIHVzZSBtdy5sb2FkZXIuZ2V0U2NyaXB0LlxuXHQgKlxuXHQgKiBAZGVwcmVjYXRlZDogVXNlciBtdy5sb2FkZXIubG9hZCgpIG9yIG13LmxvYWRlci5nZXRTY3JpcHQoKSBpbnN0ZWFkLlxuXHQgKi9cblx0bXcubG9nLmRlcHJlY2F0ZShcblx0XHR3aW5kb3csXG5cdFx0J2ltcG9ydFNjcmlwdCcsXG5cdFx0KHRpdGxlOiBzdHJpbmcpOiB2b2lkID0+IHtcblx0XHRcdG13LmxvYWRlci5sb2FkKFxuXHRcdFx0XHRtdy51dGlsLmdldFVybCh0aXRsZSwge1xuXHRcdFx0XHRcdGFjdGlvbjogJ3JhdycsXG5cdFx0XHRcdFx0Y3R5cGU6ICd0ZXh0L2phdmFzY3JpcHQnLFxuXHRcdFx0XHRcdG1heGFnZTogJzM2MDAnLFxuXHRcdFx0XHRcdHNtYXhhZ2U6ICczNjAwJyxcblx0XHRcdFx0fSlcblx0XHRcdCk7XG5cdFx0fSxcblx0XHQnVXNlIG13LmxvYWRlci5sb2FkKCkgb3IgbXcubG9hZGVyLmdldFNjcmlwdCgpIGluc3RlYWQnXG5cdCk7XG5cdG13LmxvZy5kZXByZWNhdGUoXG5cdFx0d2luZG93LFxuXHRcdCdpbXBvcnRTdHlsZXNoZWV0Jyxcblx0XHQodGl0bGU6IHN0cmluZyk6IHZvaWQgPT4ge1xuXHRcdFx0bXcubG9hZGVyLmxvYWQoXG5cdFx0XHRcdG13LnV0aWwuZ2V0VXJsKHRpdGxlLCB7XG5cdFx0XHRcdFx0YWN0aW9uOiAncmF3Jyxcblx0XHRcdFx0XHRjdHlwZTogJ3RleHQvY3NzJyxcblx0XHRcdFx0XHRtYXhhZ2U6ICczNjAwJyxcblx0XHRcdFx0XHRzbWF4YWdlOiAnMzYwMCcsXG5cdFx0XHRcdH0pLFxuXHRcdFx0XHQndGV4dC9jc3MnXG5cdFx0XHQpO1xuXHRcdH0sXG5cdFx0J1VzZSBtdy5sb2FkZXIubG9hZCgpIGluc3RlYWQnXG5cdCk7XG5cdG13LmxvZy5kZXByZWNhdGUoXG5cdFx0d2luZG93LFxuXHRcdCdpbXBvcnRTY3JpcHRVUkknLFxuXHRcdChtb2R1bGVzOiBzdHJpbmcpOiB2b2lkID0+IHtcblx0XHRcdG13LmxvYWRlci5sb2FkKG13LnV0aWwud2lraVVybGVuY29kZShtb2R1bGVzKSk7XG5cdFx0fSxcblx0XHQnVXNlIG13LmxvYWRlci5sb2FkKCkgb3IgbXcubG9hZGVyLmdldFNjcmlwdCgpIGluc3RlYWQnXG5cdCk7XG5cdG13LmxvZy5kZXByZWNhdGUoXG5cdFx0d2luZG93LFxuXHRcdCdpbXBvcnRTdHlsZXNoZWV0VVJJJyxcblx0XHQobW9kdWxlczogc3RyaW5nKTogdm9pZCA9PiB7XG5cdFx0XHRtdy5sb2FkZXIubG9hZChtdy51dGlsLndpa2lVcmxlbmNvZGUobW9kdWxlcyksICd0ZXh0L2NzcycpO1xuXHRcdH0sXG5cdFx0J1VzZSBtdy5sb2FkZXIubG9hZCgpIGluc3RlYWQnXG5cdCk7XG5cdG13LmxvZy5kZXByZWNhdGUoXG5cdFx0d2luZG93LFxuXHRcdCdpbXBvcnRTY3JpcHRDYWxsYmFjaycsXG5cdFx0KHRpdGxlOiBzdHJpbmcsIHJlYWR5OiBuZXZlcik6IHZvaWQgPT4ge1xuXHRcdFx0dm9pZCBtdy5sb2FkZXJcblx0XHRcdFx0LmdldFNjcmlwdChcblx0XHRcdFx0XHRtdy51dGlsLmdldFVybCh0aXRsZSwge1xuXHRcdFx0XHRcdFx0YWN0aW9uOiAncmF3Jyxcblx0XHRcdFx0XHRcdGN0eXBlOiAndGV4dC9qYXZhc2NyaXB0Jyxcblx0XHRcdFx0XHRcdG1heGFnZTogJzM2MDAnLFxuXHRcdFx0XHRcdFx0c21heGFnZTogJzM2MDAnLFxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdClcblx0XHRcdFx0LnRoZW4ocmVhZHkpO1xuXHRcdH0sXG5cdFx0J1VzZSBtdy5sb2FkZXIubG9hZCgpIG9yIG13LmxvYWRlci5nZXRTY3JpcHQoKSBpbnN0ZWFkJ1xuXHQpO1xuXHRtdy5sb2cuZGVwcmVjYXRlKFxuXHRcdHdpbmRvdyxcblx0XHQnaW1wb3J0U2NyaXB0VVJJQ2FsbGJhY2snLFxuXHRcdCh1cmw6IHN0cmluZywgcmVhZHk6IG5ldmVyKTogdm9pZCA9PiB7XG5cdFx0XHR2b2lkIG13LmxvYWRlci5nZXRTY3JpcHQodXJsKS50aGVuKHJlYWR5KTtcblx0XHR9LFxuXHRcdCdVc2UgbXcubG9hZGVyLmdldFNjcmlwdCgpIGluc3RlYWQnXG5cdCk7XG5cdC8qKlxuXHQgKiBtYWludGVuYW5jZTogU29tZSB1c2VyIHNjcmlwdHMgbWF5IGJlIHVzaW5nIHRoZSBmb2xsb3dpbmcgZGVwcmVjYXRlZCBmdW5jdGlvbnMuXG5cdCAqIFRoZXNlIGZ1bmN0aW9ucyBhcmUga2VwdCBmb3IgY29tcGFiaWxpdHkuXG5cdCAqL1xuXHQvLyBtdy5sb2cuZGVwcmVjYXRlKHdpbmRvdywgJ0pTQ29uZmlnJywge30sICdVc2Uge30gaW5zdGVhZCcpO1xuXHQvKipcblx0ICogd2dVKlMgZnVuY3Rpb25zIGhhdmUgYmVlbiBzcGxpdCB0byBhIHNlcGVyYXRlIGdhZGdldCAoZXh0LmdhZGdldC5pMThuKS5cblx0ICovXG59O1xuXG5leHBvcnQge2RlcHJlY2F0ZWRGdW5jdGlvbnN9O1xuIiwgImltcG9ydCB7XG5cdGFkZFRhcmdldEJsYW5rLFxuXHRmaXhMb2NhdGlvbkhhc2gsXG5cdGhpZGVOZXdVc2Vyc0xvZyxcblx0aGlnaExpZ2h0UmV2LFxuXHRsb2FkV2l0aFVSTCxcblx0bm9QZXJtV2FybmluZyxcblx0b3BlblNlYXJjaEluTmV3VGFiLFxuXHRyZW1vdmVUaXRsZUZyb21QZXJtYWxpbmssXG5cdHRpdGxlQ2xlYW5VcCxcblx0dG9nZ2xlTGluayxcblx0dW5paGFuUG9wdXAsXG59IGZyb20gJy4vbW9kdWxlcy9jb3JlJztcbmltcG9ydCB7dGlwcHlGb3JDaXRpemVuSGVhZGVyLCB0aXBweUZvckV4dGVuc2lvbn0gZnJvbSAnLi9tb2R1bGVzL3RpcHB5JztcbmltcG9ydCB7ZGVwcmVjYXRlZEZ1bmN0aW9uc30gZnJvbSAnLi9tb2R1bGVzL2RlcHJlY2F0ZWRGdW5jdGlvbnMnO1xuXG4oZnVuY3Rpb24gc2l0ZUNvbW1vbigpOiB2b2lkIHtcblx0aWYgKG13LmNvbmZpZy5nZXQoJ3dnU2l0ZUNvbW1vbkluc3RhbGxlZCcpKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdG13LmNvbmZpZy5zZXQoJ3dnU2l0ZUNvbW1vbkluc3RhbGxlZCcsIHRydWUpO1xuXG5cdC8vIENvcmUgbW9kdWxlc1xuXHRsb2FkV2l0aFVSTCgpO1xuXHRub1Blcm1XYXJuaW5nKCk7XG5cdGZpeExvY2F0aW9uSGFzaCgpO1xuXG5cdCQoKCk6IHZvaWQgPT4ge1xuXHRcdGNvbnN0ICRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50PiA9ICQoJ2JvZHknKTtcblxuXHRcdC8vIENvcmUgbW9kdWxlcyAobmVlZCAkLnJlYWR5KVxuXHRcdGhpZ2hMaWdodFJldigkYm9keSk7XG5cdFx0YWRkVGFyZ2V0QmxhbmsoJGJvZHkpO1xuXHRcdHJlbW92ZVRpdGxlRnJvbVBlcm1hbGluaygkYm9keSk7XG5cdFx0b3BlblNlYXJjaEluTmV3VGFiKCRib2R5KTtcblx0XHR0aXRsZUNsZWFuVXAoJGJvZHkpO1xuXHRcdHVuaWhhblBvcHVwKCRib2R5KTtcblx0XHRoaWRlTmV3VXNlcnNMb2coJGJvZHkpO1xuXHRcdHRvZ2dsZUxpbmsoJGJvZHkpO1xuXG5cdFx0Ly8gVGlwcHktcmVsYXRlZCBjb2RlcyAobmVlZCAkLnJlYWR5KVxuXHRcdHRpcHB5Rm9yQ2l0aXplbkhlYWRlcigkYm9keSk7XG5cdH0pO1xuXG5cdC8vIERlcHJlY2F0ZWQgZnVuY3Rpb25zXG5cdGRlcHJlY2F0ZWRGdW5jdGlvbnMoKTtcblxuXHQvLyBUaXBweS1yZWxhdGVkIGNvZGVzXG5cdHZvaWQgdGlwcHlGb3JFeHRlbnNpb24oKTtcbn0pKCk7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFNQSxXQUEwQkMsR0FBR0MsS0FBS0MsY0FBYyxNQUFNO0FBQzVELElBQU1DLGdCQUErQkgsR0FBR0MsS0FBS0MsY0FBYyxXQUFXO0FBQ3RFLElBQU1FLGNBQTZCSixHQUFHQyxLQUFLQyxjQUFjLFNBQVM7QUFDbEUsSUFBTUcsY0FBNkJMLEdBQUdDLEtBQUtDLGNBQWMsUUFBUTtBQUNqRSxJQUFNSSxVQUF5Qk4sR0FBR0MsS0FB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QUFJQyxVQUNObEgsUUFDQSx3QkFDQSxDQUFDVyxPQUFlMEcsVUFBdUI7QUFDdEMsU0FBS3hMLEdBQUdnQyxPQUNOeUosVUFDQXpMLEdBQUdDLEtBQUtpQyxPQUFPNEMsT0FBTztNQUNyQjNDLFFBQVE7TUFDUkMsT0FBTztNQUNQQyxRQUFRO01BQ1JDLFNBQVM7SUFDVixDQUFDLENBQ0YsRUFDQ3VGLEtBQUsyRCxLQUFLO0VBQ2IsR0FDQSx1REFDRDtBQUNBeEwsS0FBR29MLElBQUlDLFVBQ05sSCxRQUNBLDJCQUNBLENBQUN1SCxLQUFhRixVQUF1QjtBQUNwQyxTQUFLeEwsR0FBR2dDLE9BQU95SixVQUFVQyxHQUFHLEVBQUU3RCxLQUFLMkQsS0FBSztFQUN6QyxHQUNBLG1DQUNEO0FBU0Q7O0NDdkVDLFNBQVNHLGFBQW1CO0FBQzVCLE1BQUkzTCxHQUFHVyxPQUFPQyxJQUFJLHVCQUF1QixHQUFHO0FBQzNDO0VBQ0Q7QUFDQVosS0FBR1csT0FBT2lMLElBQUkseUJBQXlCLElBQUk7QUFHM0M5SixjQUFZO0FBQ1ptQyxnQkFBYztBQUNkMEUsa0JBQWdCO0FBRWhCOUMsSUFBRSxNQUFZO0FBQ2IsVUFBTWIsUUFBaUNhLEVBQUUsTUFBTTtBQUcvQ2QsaUJBQWFDLEtBQUs7QUFDbEJRLG1CQUFlUixLQUFLO0FBQ3BCdUIsNkJBQXlCdkIsS0FBSztBQUM5QjJCLHVCQUFtQjNCLEtBQUs7QUFDeEJnQyxpQkFBYWhDLEtBQUs7QUFDbEJ5QyxnQkFBWXpDLEtBQUs7QUFDakI2RCxvQkFBZ0I3RCxLQUFLO0FBQ3JCa0UsZUFBV2xFLEtBQUs7QUFHaEJvRiwwQkFBc0JwRixLQUFLO0VBQzVCLENBQUM7QUFHRG1HLHNCQUFvQjtBQUdwQixPQUFLTCxrQkFBa0I7QUFDeEIsR0FBRzsiLAogICJuYW1lcyI6IFsiVVJMX0RJRkYiLCAibXciLCAidXRpbCIsICJnZXRQYXJhbVZhbHVlIiwgIlVSTF9ISUdITElHSFQiLCAiVVJMX0hJTElHSFQiLCAiVVJMX05PX1BFUk0iLCAiVVJMX1VTRSIsICJVUkxfV0lUSF9DU1MiLCAiVVJMX1dJVEhfSlMiLCAiVVJMX1dJVEhfTU9EVUxFIiwgIldHX0FDVElPTiIsICJjb25maWciLCAiZ2V0IiwgIldHX0NBTk9OSUNBTF9TUEVDSUFMX1BBR0VfTkFNRSIsICJXR19OQU1FU1BBQ0VfTlVNQkVSIiwgIldHX1BBR0VfTkFNRSIsICJXR19TQ1JJUFQiLCAiV0dfU0tJTiIsICJXR19VU0VSX05BTUUiLCAiaW1wb3J0X2V4dF9nYWRnZXQyIiwgIl9fdG9FU00iLCAicmVxdWlyZSIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJnZXRJMThuTWVzc2FnZXMiLCAiTm90ZSIsICJsb2NhbGl6ZSIsICJlbiIsICJpMThuTWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAibG9hZFdpdGhVUkwiLCAidGVzdCIsICJsb2FkZXIiLCAibG9hZCIsICJnZXRVcmwiLCAiYWN0aW9uIiwgImN0eXBlIiwgIm1heGFnZSIsICJzbWF4YWdlIiwgIndnVXNlck5hbWUiLCAiZXNjYXBlUmVnRXhwIiwgIlJFR0VYX0ZJTEUiLCAiUmVnRXhwIiwgImNvbmNhdCIsICJSRUdFWF9FWFQiLCAicGF0aCIsICJfaXRlcmF0b3IyIiwgIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwgInNwbGl0IiwgIl9zdGVwMiIsICJzIiwgIm4iLCAiZG9uZSIsICJfUkVHRVhfRklMRSRleGVjIiwgInVzZUZpbGUiLCAidmFsdWUiLCAibmFtZSIsICJ0b1N0cmluZyIsICJ0cmltIiwgIndoYXQiLCAiZXhlYyIsICJlbmNvZGVVUklDb21wb25lbnQiLCAiZXJyIiwgImUiLCAiZiIsICJub1Blcm1XYXJuaW5nIiwgIm5vdGlmeSIsICJ3aW5kb3ciLCAid2dVTFMiLCAidGFnIiwgInR5cGUiLCAibmV3VXJsIiwgImxvY2F0aW9uIiwgImhyZWYiLCAicmVwbGFjZSIsICJoaXN0b3J5IiwgInB1c2hTdGF0ZSIsICJkb2N1bWVudCIsICJ0aXRsZSIsICJoaWdoTGlnaHRSZXYiLCAiJGJvZHkiLCAiaGlnaGxpZ2h0IiwgIl9pdGVyYXRvcjMiLCAiX3N0ZXAzIiwgInZlcnNpb24iLCAiZmluZCIsICJwYXJlbnQiLCAiYWRkQ2xhc3MiLCAiYWRkVGFyZ2V0QmxhbmsiLCAiZmlsdGVyIiwgIl9pbmRleCIsICJlbGVtZW50IiwgImxpbmtIcmVmIiwgIiQiLCAiYXR0ciIsICJocmVmU3BsaXQiLCAibGVuZ3RoIiwgImhvc3QiLCAiaW5jbHVkZXMiLCAicHJvdG9jb2wiLCAiaG9zdG5hbWUiLCAidGFyZ2V0IiwgInJlbCIsICJyZW1vdmVUaXRsZUZyb21QZXJtYWxpbmsiLCAiJHBlcm1hTGluayIsICJfJHBlcm1hTGlua0ZpcnN0Q2hpbGQiLCAiJHBlcm1hTGlua0ZpcnN0Q2hpbGQiLCAib3BlblNlYXJjaEluTmV3VGFiIiwgIm9uIiwgImV2ZW50IiwgImN0cmxLZXkiLCAibWV0YUtleSIsICJ0aXRsZUNsZWFuVXAiLCAiZnVsbFBhZ2VOYW1lIiwgIlRpdGxlIiwgImdldFByZWZpeGVkVGV4dCIsICIkZmlyc3RIZWFkaW5nIiwgImRvY3VtZW50VGl0bGUiLCAicGFnZVRpdGxlIiwgInRleHQiLCAicmVwbGFjZVRpdGxlIiwgInVuaWhhblBvcHVwIiwgImVhY2giLCAiJGVsZW1lbnQiLCAidXNpbmciLCAidGhlbiIsICJwb3B1cCIsICJPTyIsICJ1aSIsICJQb3B1cFdpZGdldCIsICIkY29udGVudCIsICJkZWZhdWx0IiwgImNyZWF0ZUVsZW1lbnQiLCAibGFiZWwiLCAiYW5jaG9yIiwgImhlYWQiLCAicGFkZGVkIiwgImFwcGVuZCIsICJ0b2dnbGUiLCAiZml4TG9jYXRpb25IYXNoIiwgImhhc2giLCAiaGlkZU5ld1VzZXJzTG9nIiwgIiRuZXdVc2Vyc0xvZyIsICJwcm9wIiwgImNoZWNrZWQiLCAiZGlzYWJsZWQiLCAidG9nZ2xlTGluayIsICJfJHRvZ2dsZXIkcGFyZW50JCIsICIkdG9nZ2xlciIsICJzdHlsZSIsICJjb2xvciIsICJjc3MiLCAiaW1wb3J0X2V4dF9nYWRnZXQzIiwgImdldENvbnRlbnQiLCAicmVmZXJlbmNlIiwgIl9yZWZlcmVuY2UkZ2V0QXR0cmlidSIsICJnZXRBdHRyaWJ1dGUiLCAidGV4dENvbnRlbnQiLCAib25DcmVhdGVDYWxsYmFjayIsICJpbnN0YW5jZSIsICJzZXRBdHRyaWJ1dGUiLCAicmVtb3ZlQXR0cmlidXRlIiwgIm9uU2hvd0NhbGxiYWNrIiwgInNldENvbnRlbnQiLCAidGlwcHlGb3JDaXRpemVuSGVhZGVyIiwgIl9pdGVyYXRvcjQiLCAiX3N0ZXA0IiwgInRpcHB5IiwgImFycm93IiwgImNvbnRlbnQiLCAicGxhY2VtZW50IiwgIm9uQ3JlYXRlIiwgIm9uSGlkZGVuIiwgIm9uU2hvdyIsICJ0aXBweUZvckV4dGVuc2lvbiIsICJfcmVmIiwgIl9hc3luY1RvR2VuZXJhdG9yIiwgImFwcGx5IiwgImFyZ3VtZW50cyIsICJkZXByZWNhdGVkRnVuY3Rpb25zIiwgImxvZyIsICJkZXByZWNhdGUiLCAibW9kdWxlcyIsICJ3aWtpVXJsZW5jb2RlIiwgInJlYWR5IiwgImdldFNjcmlwdCIsICJ1cmwiLCAic2l0ZUNvbW1vbiIsICJzZXQiXQp9Cg==

})();

/* </nowiki> */

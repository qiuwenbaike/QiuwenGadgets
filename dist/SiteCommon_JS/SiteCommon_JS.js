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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1NpdGVDb21tb25fSlMvbW9kdWxlcy9jb25zdGFudC50cyIsICJzcmMvU2l0ZUNvbW1vbl9KUy9tb2R1bGVzL2NvcmUudHN4IiwgInNyYy9TaXRlQ29tbW9uX0pTL21vZHVsZXMvaTE4bi50cyIsICJzcmMvU2l0ZUNvbW1vbl9KUy9tb2R1bGVzL3RpcHB5LnRzIiwgInNyYy9TaXRlQ29tbW9uX0pTL21vZHVsZXMvZGVwcmVjYXRlZEZ1bmN0aW9ucy50cyIsICJzcmMvU2l0ZUNvbW1vbl9KUy9TaXRlQ29tbW9uX0pTLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBVUkxfRElGRjogc3RyaW5nIHwgbnVsbCA9IG13LnV0aWwuZ2V0UGFyYW1WYWx1ZSgnZGlmZicpO1xuY29uc3QgVVJMX0hJR0hMSUdIVDogc3RyaW5nIHwgbnVsbCA9IG13LnV0aWwuZ2V0UGFyYW1WYWx1ZSgnaGlnaGxpZ2h0Jyk7XG5jb25zdCBVUkxfSElMSUdIVDogc3RyaW5nIHwgbnVsbCA9IG13LnV0aWwuZ2V0UGFyYW1WYWx1ZSgnaGlsaWdodCcpO1xuY29uc3QgVVJMX05PX1BFUk06IHN0cmluZyB8IG51bGwgPSBtdy51dGlsLmdldFBhcmFtVmFsdWUoJ25vcGVybScpO1xuY29uc3QgVVJMX1VTRTogc3RyaW5nIHwgbnVsbCA9IG13LnV0aWwuZ2V0UGFyYW1WYWx1ZSgndXNlJyk7XG5jb25zdCBVUkxfV0lUSF9DU1M6IHN0cmluZyB8IG51bGwgPSBtdy51dGlsLmdldFBhcmFtVmFsdWUoJ3dpdGhDU1MnKTtcbmNvbnN0IFVSTF9XSVRIX0pTOiBzdHJpbmcgfCBudWxsID0gbXcudXRpbC5nZXRQYXJhbVZhbHVlKCd3aXRoSlMnKTtcbmNvbnN0IFVSTF9XSVRIX01PRFVMRTogc3RyaW5nIHwgbnVsbCA9IG13LnV0aWwuZ2V0UGFyYW1WYWx1ZSgnd2l0aE1vZHVsZScpO1xuXG5jb25zdCBXR19BQ1RJT046IE1lZGlhV2lraUNvbmZpZ01hcFdnQWN0aW9uID0gbXcuY29uZmlnLmdldCgnd2dBY3Rpb24nKTtcbmNvbnN0IFdHX0NBTk9OSUNBTF9TUEVDSUFMX1BBR0VfTkFNRTogc3RyaW5nIHwgZmFsc2UgPSBtdy5jb25maWcuZ2V0KCd3Z0Nhbm9uaWNhbFNwZWNpYWxQYWdlTmFtZScpO1xuY29uc3QgV0dfTkFNRVNQQUNFX05VTUJFUjogbnVtYmVyID0gbXcuY29uZmlnLmdldCgnd2dOYW1lc3BhY2VOdW1iZXInKTtcbmNvbnN0IFdHX1BBR0VfTkFNRTogc3RyaW5nID0gbXcuY29uZmlnLmdldCgnd2dQYWdlTmFtZScpO1xuY29uc3QgV0dfU0NSSVBUOiBzdHJpbmcgPSBtdy5jb25maWcuZ2V0KCd3Z1NjcmlwdCcpO1xuY29uc3QgV0dfU0tJTjogc3RyaW5nID0gbXcuY29uZmlnLmdldCgnc2tpbicpO1xuY29uc3QgV0dfVVNFUl9OQU1FOiBzdHJpbmcgfCBudWxsID0gbXcuY29uZmlnLmdldCgnd2dVc2VyTmFtZScpO1xuXG5leHBvcnQge1xuXHRVUkxfRElGRixcblx0VVJMX0hJR0hMSUdIVCxcblx0VVJMX0hJTElHSFQsXG5cdFVSTF9OT19QRVJNLFxuXHRVUkxfVVNFLFxuXHRVUkxfV0lUSF9DU1MsXG5cdFVSTF9XSVRIX0pTLFxuXHRVUkxfV0lUSF9NT0RVTEUsXG5cdFdHX0FDVElPTixcblx0V0dfQ0FOT05JQ0FMX1NQRUNJQUxfUEFHRV9OQU1FLFxuXHRXR19OQU1FU1BBQ0VfTlVNQkVSLFxuXHRXR19QQUdFX05BTUUsXG5cdFdHX1NDUklQVCxcblx0V0dfU0tJTixcblx0V0dfVVNFUl9OQU1FLFxufTtcbiIsICJpbXBvcnQge1xuXHRVUkxfRElGRixcblx0VVJMX0hJR0hMSUdIVCxcblx0VVJMX0hJTElHSFQsXG5cdFVSTF9OT19QRVJNLFxuXHRVUkxfVVNFLFxuXHRVUkxfV0lUSF9DU1MsXG5cdFVSTF9XSVRIX0pTLFxuXHRVUkxfV0lUSF9NT0RVTEUsXG5cdFdHX0FDVElPTixcblx0V0dfQ0FOT05JQ0FMX1NQRUNJQUxfUEFHRV9OQU1FLFxuXHRXR19OQU1FU1BBQ0VfTlVNQkVSLFxuXHRXR19QQUdFX05BTUUsXG5cdFdHX1NDUklQVCxcblx0V0dfVVNFUl9OQU1FLFxufSBmcm9tICcuL2NvbnN0YW50JztcbmltcG9ydCBSZWFjdCBmcm9tICdleHQuZ2FkZ2V0LlJlYWN0JztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9pMThuJztcblxuY29uc3QgbG9hZFdpdGhVUkwgPSAoKTogdm9pZCA9PiB7XG5cdC8qKlxuXHQgKiAmd2l0aENTUz0gYW5kICZ3aXRoSlM9IFVSTCBwYXJhbWV0ZXJzXG5cdCAqIEFsbG93IHRvIHRyeSBjdXN0b20gc2NyaXB0cyBmcm9tIE1lZGlhV2lraSBzcGFjZVxuXHQgKiB3aXRob3V0IGVkaXRpbmcgcGVyc29uYWwgLmNzcyBvciAuanMgZmlsZXNcblx0ICovXG5cdGlmIChVUkxfV0lUSF9DU1MgfHwgVVJMX1dJVEhfSlMgfHwgVVJMX1dJVEhfTU9EVUxFKSB7XG5cdFx0aWYgKFVSTF9XSVRIX0NTUyAmJiAvXk1lZGlhV2lraTpbXiMlJjw9Pl0qXFwuY3NzJC8udGVzdChVUkxfV0lUSF9DU1MpKSB7XG5cdFx0XHRtdy5sb2FkZXIubG9hZChcblx0XHRcdFx0bXcudXRpbC5nZXRVcmwoVVJMX1dJVEhfQ1NTLCB7XG5cdFx0XHRcdFx0YWN0aW9uOiAncmF3Jyxcblx0XHRcdFx0XHRjdHlwZTogJ3RleHQvY3NzJyxcblx0XHRcdFx0XHRtYXhhZ2U6ICczNjAwJyxcblx0XHRcdFx0XHRzbWF4YWdlOiAnMzYwMCcsXG5cdFx0XHRcdH0pLFxuXHRcdFx0XHQndGV4dC9jc3MnXG5cdFx0XHQpO1xuXHRcdH1cblx0XHRpZiAoVVJMX1dJVEhfSlMgJiYgL15NZWRpYVdpa2k6W14jJSY8PT5dKlxcLmpzJC8udGVzdChVUkxfV0lUSF9KUykpIHtcblx0XHRcdG13LmxvYWRlci5sb2FkKFxuXHRcdFx0XHRtdy51dGlsLmdldFVybChVUkxfV0lUSF9KUywge1xuXHRcdFx0XHRcdGFjdGlvbjogJ3JhdycsXG5cdFx0XHRcdFx0Y3R5cGU6ICd0ZXh0L2phdmFzY3JpcHQnLFxuXHRcdFx0XHRcdG1heGFnZTogJzM2MDAnLFxuXHRcdFx0XHRcdHNtYXhhZ2U6ICczNjAwJyxcblx0XHRcdFx0fSlcblx0XHRcdCk7XG5cdFx0fVxuXHRcdGlmIChVUkxfV0lUSF9NT0RVTEUgJiYgL15leHRcXC5bXix8XSskLy50ZXN0KFVSTF9XSVRIX01PRFVMRSkpIHtcblx0XHRcdG13LmxvYWRlci5sb2FkKFVSTF9XSVRIX01PRFVMRSk7XG5cdFx0fVxuXHR9XG5cdC8qKlxuXHQgKiBMb2FkIENTUyBhbmQgSlMgZmlsZXMgdGVtcG9yYXJpbHkgdGhyb3VnaCBVUkwuXG5cdCAqICZ1c2U9RmlsZTEuY3NzfEZpbGUyLmNzc3xGaWxlMy5qc1xuXHQgKi9cblx0aWYgKFVSTF9VU0UpIHtcblx0XHRjb25zdCB3Z1VzZXJOYW1lOiBzdHJpbmcgPSBtdy51dGlsLmVzY2FwZVJlZ0V4cChXR19VU0VSX05BTUUgPz8gJycpO1xuXHRcdGNvbnN0IFJFR0VYX0ZJTEU6IFJlZ0V4cCA9IG5ldyBSZWdFeHAoXG5cdFx0XHRgXig/Ok1lZGlhV2lraToke3dnVXNlck5hbWUgPyBgfFVzZXI6JHt3Z1VzZXJOYW1lfS9gIDogJyd9KVteJjw+PSUjXSpcXFxcLihqc3xjc3MpJGBcblx0XHQpO1xuXHRcdGNvbnN0IFJFR0VYX0VYVDogUmVnRXhwID0gL15leHRcXC5bXixdKyQvO1xuXHRcdGNvbnN0IHBhdGg6IHN0cmluZyA9IGAke1dHX1NDUklQVH0/YWN0aW9uPXJhdyZjdHlwZT10ZXh0L2A7XG5cdFx0Zm9yIChjb25zdCB1c2VGaWxlIG9mIFVSTF9VU0Uuc3BsaXQoJ3wnKSkge1xuXHRcdFx0Y29uc3QgbmFtZTogc3RyaW5nID0gdXNlRmlsZS50b1N0cmluZygpLnRyaW0oKTtcblx0XHRcdGNvbnN0IHdoYXQ6IHN0cmluZ1tdID0gUkVHRVhfRklMRS5leGVjKG5hbWUpID8/IFsnJywgJyddO1xuXHRcdFx0c3dpdGNoICh3aGF0WzFdKSB7XG5cdFx0XHRcdGNhc2UgJ2pzJzpcblx0XHRcdFx0XHRtdy5sb2FkZXIubG9hZChgJHtwYXRofWphdmFzY3JpcHQmdGl0bGU9JHtlbmNvZGVVUklDb21wb25lbnQobmFtZSl9YCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgJ2Nzcyc6XG5cdFx0XHRcdFx0bXcubG9hZGVyLmxvYWQoYCR7cGF0aH1jc3MmdGl0bGU9JHtlbmNvZGVVUklDb21wb25lbnQobmFtZSl9YCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0aWYgKFJFR0VYX0VYVC50ZXN0KG5hbWUpKSB7XG5cdFx0XHRcdFx0XHRtdy5sb2FkZXIubG9hZChuYW1lKTtcblx0XHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59O1xuXG5jb25zdCBub1Blcm1XYXJuaW5nID0gKCk6IHZvaWQgPT4ge1xuXHQvKipcblx0ICogTG9hZCB3YXJuaW5nKHMpIHdoZW4gdXNlciBoYXMgbm8gYWNjZXNzIHRvIHBhZ2Vcblx0ICovXG5cdGlmICghVVJMX05PX1BFUk0pIHtcblx0XHRyZXR1cm47XG5cdH1cblx0c3dpdGNoIChVUkxfTk9fUEVSTSkge1xuXHRcdGNhc2UgJzAnOlxuXHRcdFx0dm9pZCBtdy5ub3RpZnkoXG5cdFx0XHRcdHdpbmRvdy53Z1VMUyhcblx0XHRcdFx0XHQn5Zug5oqA5pyv5Y6f5Zug77yM5oKo5rKh5pyJ5p2D6ZmQ6K6/6Zeu55u45YWz6aG16Z2i44CC6Iul5pyJ55aR6Zeu77yM6K+35LiO5rGC6Ze755m+56eR6L+Q6JCl6ICF6IGU57O744CCJyxcblx0XHRcdFx0XHQn5Zug5oqA6KGT5Y6f5Zug77yM5oKo5rKS5pyJ5qyK6ZmQ6Kiq5ZWP55u46Zec6aCB6Z2i44CC6Iul5pyJ55aR5ZWP77yM6KuL6IiH5rGC6IGe55m+56eR6YGL54ef6ICF6IGv57O744CCJ1xuXHRcdFx0XHQpLFxuXHRcdFx0XHR7dGFnOiAnbm9QZXJtJywgdHlwZTogJ2Vycm9yJ31cblx0XHRcdCk7XG5cdFx0XHRicmVhaztcblx0XHRjYXNlICcxJzpcblx0XHRcdHZvaWQgbXcubm90aWZ5KFxuXHRcdFx0XHR3aW5kb3cud2dVTFMoXG5cdFx0XHRcdFx0J+aCqOayoeacieadg+mZkOiuv+mXruebuOWFs+mhtemdouOAguiLpeaCqOaYr+i1hOa3see8luiAhe+8jOivt+S4juaxgumXu+eZvuenkeaKgOacr+WboumYn+iBlOezu++8jOS7peiOt+WPluadg+mZkOOAgicsXG5cdFx0XHRcdFx0J+aCqOaykuacieasiumZkOioquWVj+ebuOmXnOmggemdouOAguiLpeaCqOaYr+izh+a3see3qOiAhe+8jOiri+iIh+axguiBnueZvuenkeaKgOihk+WcmOmaiuiBr+ezu++8jOS7peeNsuWPluasiumZkOOAgidcblx0XHRcdFx0KSxcblx0XHRcdFx0e3RhZzogJ25vUGVybScsIHR5cGU6ICdlcnJvcid9XG5cdFx0XHQpO1xuXHRcdFx0YnJlYWs7XG5cdFx0Y2FzZSAnMic6XG5cdFx0XHR2b2lkIG13Lm5vdGlmeShcblx0XHRcdFx0d2luZG93LndnVUxTKFxuXHRcdFx0XHRcdCfmgqjnmoTnvZHnu5znjq/looPlrZjlnKjpo47pmanvvIzor7fnmbvlvZXlkI7nu6fnu63kvb/nlKjjgILoi6XmgqjmsqHmnInmsYLpl7vnmb7np5HotKblj7fvvIzor7fms6jlhozlkI7nmbvlvZXjgIInLFxuXHRcdFx0XHRcdCfmgqjnmoTntrLot6/nkrDlooPlrZjlnKjpoqjpmqrvvIzoq4vnmbvlhaXlvoznubznuozkvb/nlKjjgILoi6XmgqjmspLmnInmsYLogZ7nmb7np5Hos6zomZ/vvIzoq4vms6jlhorlvoznmbvpjITjgIInXG5cdFx0XHRcdCksXG5cdFx0XHRcdHt0YWc6ICdub1Blcm0nLCB0eXBlOiAnd2Fybid9XG5cdFx0XHQpO1xuXHRcdFx0YnJlYWs7XG5cdFx0Y2FzZSAnMyc6XG5cdFx0XHR2b2lkIG13Lm5vdGlmeShcblx0XHRcdFx0d2luZG93LndnVUxTKFxuXHRcdFx0XHRcdCfnm7jlhbPlip/og73ku4XlkJHms6jlhoznlKjmiLflvIDmlL7vvIzor7fnmbvlvZXlkI7nu6fnu63kvb/nlKjjgILoi6XmgqjmsqHmnInmsYLpl7vnmb7np5HotKblj7fvvIzor7fms6jlhozlkI7nmbvlvZXjgIInLFxuXHRcdFx0XHRcdCfnm7jpl5zlip/og73lg4XlkJHms6jlhornlKjmiLbplovmlL7vvIzoq4vnmbvlhaXlvoznubznuozkvb/nlKjjgILoi6XmgqjmspLmnInmsYLogZ7nmb7np5Hos6zomZ/vvIzoq4vms6jlhorlvoznmbvpjITjgIInXG5cdFx0XHRcdCksXG5cdFx0XHRcdHt0YWc6ICdub1Blcm0nLCB0eXBlOiAnd2Fybid9XG5cdFx0XHQpO1xuXHRcdFx0YnJlYWs7XG5cdFx0ZGVmYXVsdDpcblx0XHRcdHZvaWQgbXcubm90aWZ5KFxuXHRcdFx0XHR3aW5kb3cud2dVTFMoXG5cdFx0XHRcdFx0J+aCqOayoeacieadg+mZkOiuv+mXruebuOWFs+mhtemdouOAguiLpeacieeWkemXru+8jOivt+S4juaxgumXu+eZvuenkei/kOiQpeiAheiBlOezu+OAgicsXG5cdFx0XHRcdFx0J+aCqOaykuacieasiumZkOioquWVj+ebuOmXnOmggemdouOAguiLpeacieeWkeWVj++8jOiri+iIh+axguiBnueZvuenkemBi+eHn+iAheiBr+ezu+OAgidcblx0XHRcdFx0KSxcblx0XHRcdFx0e3RhZzogJ25vUGVybScsIHR5cGU6ICdlcnJvcid9XG5cdFx0XHQpO1xuXHR9XG5cdGNvbnN0IG5ld1VybDogc3RyaW5nID0gbG9jYXRpb24uaHJlZi5yZXBsYWNlKC9bPyZdbm9wZXJtPVswLTldKy8sICcnKTtcblx0aGlzdG9yeS5wdXNoU3RhdGUoe30sIGRvY3VtZW50LnRpdGxlLCBuZXdVcmwpO1xufTtcblxuY29uc3QgaGlnaExpZ2h0UmV2ID0gKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQgPT4ge1xuXHQvKipcblx0ICogQWRkIGhpZ2hsaWdodCB0byByZXZpc2lvbnMgd2hlbiB1c2luZyBgJmhpbGlnaHQ9cmV2aWRgIG9yIGAmaGlnaGxpZ2h0PXJldmlkYFxuXHQgKi9cblx0Y29uc3QgaGlnaGxpZ2h0OiBzdHJpbmcgfCBudWxsID0gVVJMX0hJR0hMSUdIVCA/PyBVUkxfSElMSUdIVDtcblx0aWYgKCFoaWdobGlnaHQgfHwgV0dfQUNUSU9OICE9PSAnaGlzdG9yeScpIHtcblx0XHRyZXR1cm47XG5cdH1cblx0Zm9yIChjb25zdCB2ZXJzaW9uIG9mIGhpZ2hsaWdodC5zcGxpdCgnLCcpKSB7XG5cdFx0JGJvZHkuZmluZChgaW5wdXRbbmFtZT1vbGRpZF1bdmFsdWU9JHt2ZXJzaW9ufV1gKS5wYXJlbnQoKS5hZGRDbGFzcygnbm90LXBhdHJvbGxlZCcpO1xuXHR9XG59O1xuXG5jb25zdCBhZGRUYXJnZXRCbGFuayA9ICgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkID0+IHtcblx0LyoqXG5cdCAqIEFkZCB0YXJnZXQ9XCJibGFua1wiIHRvIGV4dGVybmFsIGxpbmtzXG5cdCAqL1xuXHQkYm9keS5maW5kPEhUTUxBbmNob3JFbGVtZW50PignYS5leHRlcm5hbCwgYVtyZWw9XCJtdzpFeHRMaW5rXCJdJykuZmlsdGVyKChfaW5kZXgsIGVsZW1lbnQpOiBib29sZWFuID0+IHtcblx0XHRjb25zdCBsaW5rSHJlZjogc3RyaW5nIHwgdW5kZWZpbmVkID0gJChlbGVtZW50KS5hdHRyKCdocmVmJyk7XG5cdFx0aWYgKGxpbmtIcmVmKSB7XG5cdFx0XHRjb25zdCBocmVmU3BsaXQ6IHN0cmluZ1tdID0gbGlua0hyZWYuc3BsaXQoJy8nKTtcblx0XHRcdGlmIChocmVmU3BsaXQubGVuZ3RoIDwgMyB8fCBocmVmU3BsaXRbMl0gPT09IGxvY2F0aW9uLmhvc3QpIHtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZiAoZWxlbWVudC5ocmVmLmluY2x1ZGVzKGAke2xvY2F0aW9uLnByb3RvY29sfS8vJHtsb2NhdGlvbi5ob3N0bmFtZX1gKSkge1xuXHRcdFx0ZWxlbWVudC50YXJnZXQgPSAnX2JsYW5rJztcblx0XHRcdGlmICghZWxlbWVudC5yZWwuaW5jbHVkZXMoJ25vb3BlbmVyJykpIHtcblx0XHRcdFx0ZWxlbWVudC5yZWwgKz0gJyBub29wZW5lcic7XG5cdFx0XHR9XG5cdFx0XHRpZiAoIWVsZW1lbnQucmVsLmluY2x1ZGVzKCdub3JlZmVycmVyJykpIHtcblx0XHRcdFx0ZWxlbWVudC5yZWwgKz0gJyBub3JlZmVycmVyJztcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIHRydWU7XG5cdH0pO1xufTtcblxuY29uc3QgcmVtb3ZlVGl0bGVGcm9tUGVybWFsaW5rID0gKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQgPT4ge1xuXHQvKipcblx0ICogUmVtb3ZlIHRpdGxlPSogZnJvbSBwZXJtYWxpbmtcblx0ICovXG5cdGNvbnN0ICRwZXJtYUxpbms6IEpRdWVyeSA9ICRib2R5LmZpbmQoJyN0LXBlcm1hbGluaycpO1xuXHRpZiAoJHBlcm1hTGluay5sZW5ndGgpIHtcblx0XHRjb25zdCAkcGVybWFMaW5rRmlyc3RDaGlsZDogSlF1ZXJ5PEhUTUxBbmNob3JFbGVtZW50PiA9ICRwZXJtYUxpbmsuZmluZDxIVE1MQW5jaG9yRWxlbWVudD4oJzpmaXJzdC1jaGlsZCcpO1xuXHRcdGNvbnN0IGhyZWY6IHN0cmluZyB8IHVuZGVmaW5lZCA9ICRwZXJtYUxpbmtGaXJzdENoaWxkLmF0dHIoJ2hyZWYnKT8ucmVwbGFjZSgvdGl0bGU9W14mXSomLywgJycpO1xuXHRcdGlmICghaHJlZikge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHQkcGVybWFMaW5rRmlyc3RDaGlsZC5hdHRyKCdocmVmJywgaHJlZik7XG5cdH1cbn07XG5cbmNvbnN0IG9wZW5TZWFyY2hJbk5ld1RhYiA9ICgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkID0+IHtcblx0LyoqXG5cdCAqIE9wZW4gc2VhcmNoIHJlc3VsdHMgaW4gYSBuZXcgdGFiIG9yIHdpbmRvd1xuXHQgKiB3aGVuIGhvbGRpbmcgZG93biB0aGUgQ3RybCBrZXkgKGJ5IFRpbWVzaGlmdGVyKVxuXHQgKi9cblx0JGJvZHlcblx0XHQuZmluZCgnI3NlYXJjaCwjc2VhcmNoYm94LCNzZWFyY2hmb3JtLC5zZWFyY2gtdHlwZXMsI3NlYXJjaC10eXBlcycpXG5cdFx0Lm9uKCdrZXlkb3duIGtleXVwIG1vdXNlZG93bicsIChldmVudDogSlF1ZXJ5LlRyaWdnZXJlZEV2ZW50PEhUTUxFbGVtZW50Pik6IHZvaWQgPT4ge1xuXHRcdFx0Y29uc3Qge2N0cmxLZXksIG1ldGFLZXksIHRhcmdldH0gPSBldmVudDtcblx0XHRcdCQodGFyZ2V0KS5hdHRyKCd0YXJnZXQnLCBjdHJsS2V5ID8/IG1ldGFLZXkgPyAnX2JsYW5rJyA6ICcnKTtcblx0XHR9KTtcbn07XG5cbmNvbnN0IHRpdGxlQ2xlYW5VcCA9ICgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkID0+IHtcblx0LyoqXG5cdCAqIENsZWFudXAgdGl0bGUgZm9yIGFsbCBwYWdlc1xuXHQgKi9cblx0aWYgKFVSTF9ESUZGIHx8IFdHX0FDVElPTiAhPT0gJ3ZpZXcnIHx8ICFbNiwgMTE4XS5pbmNsdWRlcyhXR19OQU1FU1BBQ0VfTlVNQkVSKSkge1xuXHRcdHJldHVybjtcblx0fVxuXHRjb25zdCBmdWxsUGFnZU5hbWU6IHN0cmluZyA9IG5ldyBtdy5UaXRsZShXR19QQUdFX05BTUUpLmdldFByZWZpeGVkVGV4dCgpO1xuXHRjb25zdCAkZmlyc3RIZWFkaW5nOiBKUXVlcnkgPSAkYm9keS5maW5kKCcuZmlyc3RIZWFkaW5nJyk7XG5cdGNvbnN0IGRvY3VtZW50VGl0bGU6IHN0cmluZyA9IGRvY3VtZW50LnRpdGxlO1xuXHRjb25zdCBwYWdlVGl0bGU6IHN0cmluZyA9ICRmaXJzdEhlYWRpbmcudGV4dCgpO1xuXHRjb25zdCByZXBsYWNlVGl0bGUgPSAodGl0bGU6IHN0cmluZyk6IHN0cmluZyA9PiB0aXRsZS5yZXBsYWNlKHBhZ2VUaXRsZSwgZnVsbFBhZ2VOYW1lKTtcblx0ZG9jdW1lbnQudGl0bGUgPSByZXBsYWNlVGl0bGUoZG9jdW1lbnRUaXRsZSk7XG5cdCRmaXJzdEhlYWRpbmcudGV4dChyZXBsYWNlVGl0bGUocGFnZVRpdGxlKSk7XG59O1xuXG5jb25zdCB1bmloYW5Qb3B1cCA9ICgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkID0+IHtcblx0LyoqXG5cdCAqIERpc3BsYXkgdGl0bGU9KC4qKSBvZiA8c3BhbiBjbGFzcz1cImlubGluZS11bmloYW5cIj4gYWZ0ZXIgdGhlbS5cblx0ICogKGJldGEgdGVzdClcblx0ICovXG5cdC8vIERvIG5vdCBkaXNwbGF5IG9uIFNwZWNpYWwgUGFnZXNcblx0aWYgKFdHX05BTUVTUEFDRV9OVU1CRVIgPCAwKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdCRib2R5LmZpbmQoJ2F0dHIsIC5pbmxpbmUtdW5paGFuJykuZWFjaCgoX2luZGV4OiBudW1iZXIsIGVsZW1lbnQ6IEhUTUxFbGVtZW50KTogdm9pZCA9PiB7XG5cdFx0Y29uc3QgJGVsZW1lbnQ6IEpRdWVyeSA9ICQoZWxlbWVudCk7XG5cdFx0Y29uc3QgdGl0bGU6IHN0cmluZyB8IHVuZGVmaW5lZCA9ICRlbGVtZW50LmF0dHIoJ3RpdGxlJyk7XG5cdFx0aWYgKCF0aXRsZSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHR2b2lkIG13LmxvYWRlci51c2luZygnb29qcy11aS1jb3JlJykudGhlbigoKTogdm9pZCA9PiB7XG5cdFx0XHRjb25zdCBwb3B1cDogT08udWkuUG9wdXBXaWRnZXQgPSBuZXcgT08udWkuUG9wdXBXaWRnZXQoe1xuXHRcdFx0XHQkY29udGVudDogJCg8cD57dGl0bGV9PC9wPikgYXMgSlF1ZXJ5LFxuXHRcdFx0XHRsYWJlbDogZ2V0TWVzc2FnZSgnTm90ZScpLFxuXHRcdFx0XHRhbmNob3I6IHRydWUsXG5cdFx0XHRcdGhlYWQ6IHRydWUsXG5cdFx0XHRcdHBhZGRlZDogdHJ1ZSxcblx0XHRcdH0pO1xuXHRcdFx0JGVsZW1lbnQuYXBwZW5kKHBvcHVwLiRlbGVtZW50KS5vbignY2xpY2snLCAoKTogdm9pZCA9PiB7XG5cdFx0XHRcdHBvcHVwLnRvZ2dsZSgpO1xuXHRcdFx0fSk7XG5cdFx0fSk7XG5cdH0pO1xufTtcblxuY29uc3QgZml4TG9jYXRpb25IYXNoID0gKCk6IHZvaWQgPT4ge1xuXHQvKiDkv67mraPmipjlj6DlkI7lrprkvY3lj5jljJYgKi9cblx0aWYgKGxvY2F0aW9uLmhhc2gpIHtcblx0XHRsb2NhdGlvbi5ocmVmID0gbG9jYXRpb24uaGFzaDtcblx0fVxufTtcblxuY29uc3QgaGlkZU5ld1VzZXJzTG9nID0gKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQgPT4ge1xuXHQvKiDkuLTml7bvvJrnpoHmraLnlKjmiLfmn6XnnIvnlKjmiLfliJvlu7rml6Xlv5cgKi9cblx0aWYgKFdHX0NBTk9OSUNBTF9TUEVDSUFMX1BBR0VfTkFNRSAhPT0gJ0xvZycpIHtcblx0XHRyZXR1cm47XG5cdH1cblx0Y29uc3QgJG5ld1VzZXJzTG9nOiBKUXVlcnkgPSAkYm9keS5maW5kKCdpbnB1dFtuYW1lPVwid3BmaWx0ZXJzW11cIl1bdmFsdWU9bmV3dXNlcnNdJyk7XG5cdCRuZXdVc2Vyc0xvZy5wcm9wKHtcblx0XHRjaGVja2VkOiAwLFxuXHRcdGRpc2FibGVkOiAnZGlzYWJsZWQnLFxuXHR9KTtcbn07XG5cbmNvbnN0IHRvZ2dsZUxpbmsgPSAoJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KTogdm9pZCA9PiB7XG5cdC8qIOiwg+aVtOaKmOWPoOaMiemSrueahOminOiJsiAqL1xuXHRjb25zdCAkdG9nZ2xlcjogSlF1ZXJ5ID0gJGJvZHkuZmluZCgnLm13LWNvbGxhcHNpYmxlLXRvZ2dsZSwgLmdhZGdldC1jb2xsYXBzaWJsZS10b2dnbGVyJyk7XG5cdGlmICgkdG9nZ2xlci5sZW5ndGggJiYgJHRvZ2dsZXIucGFyZW50KClbMF0/LnN0eWxlLmNvbG9yKSB7XG5cdFx0JHRvZ2dsZXIuZmluZCgnYScpLmNzcygnY29sb3InLCAnaW5oZXJpdCcpO1xuXHR9XG59O1xuXG5leHBvcnQge1xuXHRsb2FkV2l0aFVSTCxcblx0bm9QZXJtV2FybmluZyxcblx0aGlnaExpZ2h0UmV2LFxuXHRhZGRUYXJnZXRCbGFuayxcblx0cmVtb3ZlVGl0bGVGcm9tUGVybWFsaW5rLFxuXHRvcGVuU2VhcmNoSW5OZXdUYWIsXG5cdHRpdGxlQ2xlYW5VcCxcblx0dW5paGFuUG9wdXAsXG5cdGZpeExvY2F0aW9uSGFzaCxcblx0aGlkZU5ld1VzZXJzTG9nLFxuXHR0b2dnbGVMaW5rLFxufTtcbiIsICJpbXBvcnQge2xvY2FsaXplfSBmcm9tICdleHQuZ2FkZ2V0LmkxOG4nO1xuXG5jb25zdCBnZXRJMThuTWVzc2FnZXMgPSAoKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0Tm90ZTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdOb3RlOiAnLFxuXHRcdFx0J3poLWhhbnMnOiAn5rOo6YeK77yaJyxcblx0XHRcdCd6aC1oYW50JzogJ+azqOmHi++8micsXG5cdFx0fSksXG5cdH07XG59O1xuXG5jb25zdCBpMThuTWVzc2FnZXMgPSBnZXRJMThuTWVzc2FnZXMoKTtcblxuY29uc3QgZ2V0TWVzc2FnZTogR2V0TWVzc2FnZXM8dHlwZW9mIGkxOG5NZXNzYWdlcz4gPSAoa2V5KSA9PiB7XG5cdHJldHVybiBpMThuTWVzc2FnZXNba2V5XSB8fCBrZXk7XG59O1xuXG5leHBvcnQge2dldE1lc3NhZ2V9O1xuIiwgImltcG9ydCB7V0dfU0tJTn0gZnJvbSAnLi9jb25zdGFudCc7XG5pbXBvcnQge3RpcHB5fSBmcm9tICdleHQuZ2FkZ2V0LlRpcHB5JztcblxuY29uc3QgZ2V0Q29udGVudCA9IChyZWZlcmVuY2U6IEVsZW1lbnQpOiBzdHJpbmcgPT4ge1xuXHRjb25zdCBsYWJlbDogc3RyaW5nIHwgbnVsbCA9IHJlZmVyZW5jZS5nZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKTtcblx0Y29uc3QgdGl0bGU6IHN0cmluZyB8IG51bGwgPSByZWZlcmVuY2UuZ2V0QXR0cmlidXRlKCdhbHQnKSA/PyByZWZlcmVuY2UuZ2V0QXR0cmlidXRlKCd0aXRsZScpO1xuXG5cdHJldHVybiAobGFiZWwgPT09IHRpdGxlID8gbGFiZWwgOiB0aXRsZSB8fCBsYWJlbCkgfHwgKHJlZmVyZW5jZS50ZXh0Q29udGVudCBhcyBzdHJpbmcpO1xufTtcblxuY29uc3Qgb25DcmVhdGVDYWxsYmFjayA9IChpbnN0YW5jZTogUmV0dXJuVHlwZTx0eXBlb2YgdGlwcHk+WzBdKTogdm9pZCA9PiB7XG5cdGNvbnN0IHtyZWZlcmVuY2V9ID0gaW5zdGFuY2U7XG5cdHJlZmVyZW5jZS5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnLCBnZXRDb250ZW50KHJlZmVyZW5jZSkpO1xuXHRyZWZlcmVuY2UucmVtb3ZlQXR0cmlidXRlKCd0aXRsZScpO1xufTtcblxuY29uc3Qgb25TaG93Q2FsbGJhY2sgPSAoaW5zdGFuY2U6IFJldHVyblR5cGU8dHlwZW9mIHRpcHB5PlswXSk6IHZvaWQgPT4ge1xuXHRvbkNyZWF0ZUNhbGxiYWNrKGluc3RhbmNlKTtcblx0aW5zdGFuY2Uuc2V0Q29udGVudChnZXRDb250ZW50KGluc3RhbmNlLnJlZmVyZW5jZSkpO1xufTtcblxuY29uc3QgdGlwcHlGb3JDaXRpemVuSGVhZGVyID0gKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQgPT4ge1xuXHRpZiAoV0dfU0tJTiAhPT0gJ2NpdGl6ZW4nKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Zm9yIChjb25zdCBlbGVtZW50IG9mICRib2R5LmZpbmQoXG5cdFx0Jy5jaXRpemVuLWhlYWRlciBsYWJlbFt0aXRsZV0sLmNpdGl6ZW4taGVhZGVyIC5tdy1lY2hvLW5vdGlmaWNhdGlvbnMtYmFkZ2UsLmNpdGl6ZW4taGVhZGVyX19sb2dvIGEsLnBhZ2UtYWN0aW9ucz5uYXY+dWw+bGkgYSwucGFnZS1hY3Rpb25zX19idXR0b24nXG5cdCkpIHtcblx0XHRjb25zdCAkZWxlbWVudDogSlF1ZXJ5ID0gJChlbGVtZW50KTtcblx0XHRsZXQgdGl0bGU6IHN0cmluZyB8IHVuZGVmaW5lZCA9ICRlbGVtZW50LmF0dHIoJ3RpdGxlJyk7XG5cdFx0aWYgKCF0aXRsZSkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0dGl0bGUgPSB0aXRsZS5yZXBsYWNlKC9cXHMqP1xcWy4rP10kLywgJycpO1xuXG5cdFx0JGVsZW1lbnQuYXR0cih7XG5cdFx0XHQnYXJpYS1sYWJlbCc6IHRpdGxlLFxuXHRcdFx0dGl0bGU6ICcnLFxuXHRcdH0pO1xuXHRcdHRpcHB5KCRlbGVtZW50LmdldCgwKSBhcyBIVE1MRWxlbWVudCwge1xuXHRcdFx0YXJyb3c6IHRydWUsXG5cdFx0XHRjb250ZW50OiB0aXRsZSxcblx0XHRcdHBsYWNlbWVudDogJ2JvdHRvbScsXG5cdFx0XHRvbkNyZWF0ZTogb25DcmVhdGVDYWxsYmFjayxcblx0XHRcdG9uSGlkZGVuOiBvbkNyZWF0ZUNhbGxiYWNrLFxuXHRcdFx0b25TaG93OiBvblNob3dDYWxsYmFjayxcblx0XHR9KTtcblx0fVxufTtcblxuY29uc3QgdGlwcHlGb3JFeHRlbnNpb24gPSBhc3luYyAoKTogUHJvbWlzZTx2b2lkPiA9PiB7XG5cdGF3YWl0IG13LmxvYWRlci51c2luZygnZXh0LkNvbGxhcHNpYmxlU2lkZWJhci5qcycpO1xuXHR0aXBweSgnI3NpZGViYXJCdXR0b24nLCB7XG5cdFx0YXJyb3c6IHRydWUsXG5cdFx0Y29udGVudDogZ2V0Q29udGVudCxcblx0XHRwbGFjZW1lbnQ6ICdsZWZ0Jyxcblx0XHRvbkNyZWF0ZTogb25DcmVhdGVDYWxsYmFjayxcblx0XHRvbkhpZGRlbjogb25DcmVhdGVDYWxsYmFjayxcblx0XHRvblNob3c6IG9uU2hvd0NhbGxiYWNrLFxuXHR9KTtcblxuXHRpZiAoV0dfU0tJTiA9PT0gJ3ZlY3RvcicpIHtcblx0XHRhd2FpdCBtdy5sb2FkZXIudXNpbmcoJ2V4dC5Db2xsYXBzaWJsZVNpZGViYXIudmVjdG9yJyk7XG5cdFx0dGlwcHkoJyNzaWRlYmFyQ29sbGFwc2UnLCB7XG5cdFx0XHRhcnJvdzogdHJ1ZSxcblx0XHRcdGNvbnRlbnQ6IGdldENvbnRlbnQsXG5cdFx0XHRwbGFjZW1lbnQ6ICdyaWdodCcsXG5cdFx0XHRvbkNyZWF0ZTogb25DcmVhdGVDYWxsYmFjayxcblx0XHRcdG9uSGlkZGVuOiBvbkNyZWF0ZUNhbGxiYWNrLFxuXHRcdFx0b25TaG93OiBvblNob3dDYWxsYmFjayxcblx0XHR9KTtcblx0fVxuXG5cdGF3YWl0IG13LmxvYWRlci51c2luZygnZXh0LkRhcmtNb2RlJyk7XG5cdHRpcHB5KCcjZGFya21vZGUtYnV0dG9uJywge1xuXHRcdGFycm93OiB0cnVlLFxuXHRcdGNvbnRlbnQ6IGdldENvbnRlbnQsXG5cdFx0cGxhY2VtZW50OiAnbGVmdCcsXG5cdFx0b25DcmVhdGU6IG9uQ3JlYXRlQ2FsbGJhY2ssXG5cdFx0b25IaWRkZW46IG9uQ3JlYXRlQ2FsbGJhY2ssXG5cdFx0b25TaG93OiBvblNob3dDYWxsYmFjayxcblx0fSk7XG59O1xuXG5leHBvcnQge3RpcHB5Rm9yQ2l0aXplbkhlYWRlciwgdGlwcHlGb3JFeHRlbnNpb259O1xuIiwgImNvbnN0IGRlcHJlY2F0ZWRGdW5jdGlvbnMgPSAoKTogdm9pZCA9PiB7XG5cdC8qKlxuXHQgKiBtYWludGVuYW5jZTogU29tZSB1c2VyIHNjcmlwdHMgbWF5IGJlIHVzaW5nIHRoZSBmb2xsb3dpbmcgZGVwcmVjYXRlZCBmdW5jdGlvbnMuXG5cdCAqIFRoZXNlIGZ1bmN0aW9ucyBhcmUgbm8gbG9uZ2VyIHN1cHBvcnRlZCBhbmQgc2hvdWxkIGJlIHVwZGF0ZWQgdG8gdXNlIG13LmxvYWRlci5nZXRTY3JpcHQuXG5cdCAqXG5cdCAqIEBkZXByZWNhdGVkOiBVc2VyIG13LmxvYWRlci5sb2FkKCkgb3IgbXcubG9hZGVyLmdldFNjcmlwdCgpIGluc3RlYWQuXG5cdCAqL1xuXHRtdy5sb2cuZGVwcmVjYXRlKFxuXHRcdHdpbmRvdyxcblx0XHQnaW1wb3J0U2NyaXB0Jyxcblx0XHQodGl0bGU6IHN0cmluZyk6IHZvaWQgPT4ge1xuXHRcdFx0bXcubG9hZGVyLmxvYWQoXG5cdFx0XHRcdG13LnV0aWwuZ2V0VXJsKHRpdGxlLCB7XG5cdFx0XHRcdFx0YWN0aW9uOiAncmF3Jyxcblx0XHRcdFx0XHRjdHlwZTogJ3RleHQvamF2YXNjcmlwdCcsXG5cdFx0XHRcdFx0bWF4YWdlOiAnMzYwMCcsXG5cdFx0XHRcdFx0c21heGFnZTogJzM2MDAnLFxuXHRcdFx0XHR9KVxuXHRcdFx0KTtcblx0XHR9LFxuXHRcdCdVc2UgbXcubG9hZGVyLmxvYWQoKSBvciBtdy5sb2FkZXIuZ2V0U2NyaXB0KCkgaW5zdGVhZCdcblx0KTtcblx0bXcubG9nLmRlcHJlY2F0ZShcblx0XHR3aW5kb3csXG5cdFx0J2ltcG9ydFN0eWxlc2hlZXQnLFxuXHRcdCh0aXRsZTogc3RyaW5nKTogdm9pZCA9PiB7XG5cdFx0XHRtdy5sb2FkZXIubG9hZChcblx0XHRcdFx0bXcudXRpbC5nZXRVcmwodGl0bGUsIHtcblx0XHRcdFx0XHRhY3Rpb246ICdyYXcnLFxuXHRcdFx0XHRcdGN0eXBlOiAndGV4dC9jc3MnLFxuXHRcdFx0XHRcdG1heGFnZTogJzM2MDAnLFxuXHRcdFx0XHRcdHNtYXhhZ2U6ICczNjAwJyxcblx0XHRcdFx0fSksXG5cdFx0XHRcdCd0ZXh0L2Nzcydcblx0XHRcdCk7XG5cdFx0fSxcblx0XHQnVXNlIG13LmxvYWRlci5sb2FkKCkgaW5zdGVhZCdcblx0KTtcblx0bXcubG9nLmRlcHJlY2F0ZShcblx0XHR3aW5kb3csXG5cdFx0J2ltcG9ydFNjcmlwdFVSSScsXG5cdFx0KG1vZHVsZXM6IHN0cmluZyk6IHZvaWQgPT4ge1xuXHRcdFx0bXcubG9hZGVyLmxvYWQobXcudXRpbC53aWtpVXJsZW5jb2RlKG1vZHVsZXMpKTtcblx0XHR9LFxuXHRcdCdVc2UgbXcubG9hZGVyLmxvYWQoKSBvciBtdy5sb2FkZXIuZ2V0U2NyaXB0KCkgaW5zdGVhZCdcblx0KTtcblx0bXcubG9nLmRlcHJlY2F0ZShcblx0XHR3aW5kb3csXG5cdFx0J2ltcG9ydFN0eWxlc2hlZXRVUkknLFxuXHRcdChtb2R1bGVzOiBzdHJpbmcpOiB2b2lkID0+IHtcblx0XHRcdG13LmxvYWRlci5sb2FkKG13LnV0aWwud2lraVVybGVuY29kZShtb2R1bGVzKSwgJ3RleHQvY3NzJyk7XG5cdFx0fSxcblx0XHQnVXNlIG13LmxvYWRlci5sb2FkKCkgaW5zdGVhZCdcblx0KTtcblx0bXcubG9nLmRlcHJlY2F0ZShcblx0XHR3aW5kb3csXG5cdFx0J2ltcG9ydFNjcmlwdENhbGxiYWNrJyxcblx0XHQodGl0bGU6IHN0cmluZywgcmVhZHk6IG5ldmVyKTogdm9pZCA9PiB7XG5cdFx0XHR2b2lkIG13LmxvYWRlclxuXHRcdFx0XHQuZ2V0U2NyaXB0KFxuXHRcdFx0XHRcdG13LnV0aWwuZ2V0VXJsKHRpdGxlLCB7XG5cdFx0XHRcdFx0XHRhY3Rpb246ICdyYXcnLFxuXHRcdFx0XHRcdFx0Y3R5cGU6ICd0ZXh0L2phdmFzY3JpcHQnLFxuXHRcdFx0XHRcdFx0bWF4YWdlOiAnMzYwMCcsXG5cdFx0XHRcdFx0XHRzbWF4YWdlOiAnMzYwMCcsXG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0KVxuXHRcdFx0XHQudGhlbihyZWFkeSk7XG5cdFx0fSxcblx0XHQnVXNlIG13LmxvYWRlci5sb2FkKCkgb3IgbXcubG9hZGVyLmdldFNjcmlwdCgpIGluc3RlYWQnXG5cdCk7XG5cdG13LmxvZy5kZXByZWNhdGUoXG5cdFx0d2luZG93LFxuXHRcdCdpbXBvcnRTY3JpcHRVUklDYWxsYmFjaycsXG5cdFx0KHVybDogc3RyaW5nLCByZWFkeTogbmV2ZXIpOiB2b2lkID0+IHtcblx0XHRcdHZvaWQgbXcubG9hZGVyLmdldFNjcmlwdCh1cmwpLnRoZW4ocmVhZHkpO1xuXHRcdH0sXG5cdFx0J1VzZSBtdy5sb2FkZXIuZ2V0U2NyaXB0KCkgaW5zdGVhZCdcblx0KTtcblx0LyoqXG5cdCAqIG1haW50ZW5hbmNlOiBTb21lIHVzZXIgc2NyaXB0cyBtYXkgYmUgdXNpbmcgdGhlIGZvbGxvd2luZyBkZXByZWNhdGVkIGZ1bmN0aW9ucy5cblx0ICogVGhlc2UgZnVuY3Rpb25zIGFyZSBrZXB0IGZvciBjb21wYWJpbGl0eS5cblx0ICovXG5cdC8vIG13LmxvZy5kZXByZWNhdGUod2luZG93LCAnSlNDb25maWcnLCB7fSwgJ1VzZSB7fSBpbnN0ZWFkJyk7XG5cdC8qKlxuXHQgKiB3Z1UqUyBmdW5jdGlvbnMgaGF2ZSBiZWVuIHNwbGl0IHRvIGEgc2VwZXJhdGUgZ2FkZ2V0IChleHQuZ2FkZ2V0LmkxOG4pLlxuXHQgKi9cbn07XG5cbmV4cG9ydCB7ZGVwcmVjYXRlZEZ1bmN0aW9uc307XG4iLCAiaW1wb3J0IHtcblx0YWRkVGFyZ2V0QmxhbmssXG5cdGZpeExvY2F0aW9uSGFzaCxcblx0aGlkZU5ld1VzZXJzTG9nLFxuXHRoaWdoTGlnaHRSZXYsXG5cdGxvYWRXaXRoVVJMLFxuXHRub1Blcm1XYXJuaW5nLFxuXHRvcGVuU2VhcmNoSW5OZXdUYWIsXG5cdHJlbW92ZVRpdGxlRnJvbVBlcm1hbGluayxcblx0dGl0bGVDbGVhblVwLFxuXHR0b2dnbGVMaW5rLFxuXHR1bmloYW5Qb3B1cCxcbn0gZnJvbSAnLi9tb2R1bGVzL2NvcmUnO1xuaW1wb3J0IHt0aXBweUZvckNpdGl6ZW5IZWFkZXIsIHRpcHB5Rm9yRXh0ZW5zaW9ufSBmcm9tICcuL21vZHVsZXMvdGlwcHknO1xuaW1wb3J0IHtkZXByZWNhdGVkRnVuY3Rpb25zfSBmcm9tICcuL21vZHVsZXMvZGVwcmVjYXRlZEZ1bmN0aW9ucyc7XG5cbihmdW5jdGlvbiBzaXRlQ29tbW9uKCk6IHZvaWQge1xuXHRpZiAobXcuY29uZmlnLmdldCgnd2dTaXRlQ29tbW9uSW5zdGFsbGVkJykpIHtcblx0XHRyZXR1cm47XG5cdH1cblx0bXcuY29uZmlnLnNldCgnd2dTaXRlQ29tbW9uSW5zdGFsbGVkJywgdHJ1ZSk7XG5cblx0Ly8gQ29yZSBtb2R1bGVzXG5cdGxvYWRXaXRoVVJMKCk7XG5cdG5vUGVybVdhcm5pbmcoKTtcblx0Zml4TG9jYXRpb25IYXNoKCk7XG5cblx0JCgoKTogdm9pZCA9PiB7XG5cdFx0Y29uc3QgJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+ID0gJCgnYm9keScpO1xuXG5cdFx0Ly8gQ29yZSBtb2R1bGVzIChuZWVkICQucmVhZHkpXG5cdFx0aGlnaExpZ2h0UmV2KCRib2R5KTtcblx0XHRhZGRUYXJnZXRCbGFuaygkYm9keSk7XG5cdFx0cmVtb3ZlVGl0bGVGcm9tUGVybWFsaW5rKCRib2R5KTtcblx0XHRvcGVuU2VhcmNoSW5OZXdUYWIoJGJvZHkpO1xuXHRcdHRpdGxlQ2xlYW5VcCgkYm9keSk7XG5cdFx0dW5paGFuUG9wdXAoJGJvZHkpO1xuXHRcdGhpZGVOZXdVc2Vyc0xvZygkYm9keSk7XG5cdFx0dG9nZ2xlTGluaygkYm9keSk7XG5cblx0XHQvLyBUaXBweS1yZWxhdGVkIGNvZGVzIChuZWVkICQucmVhZHkpXG5cdFx0dGlwcHlGb3JDaXRpemVuSGVhZGVyKCRib2R5KTtcblx0fSk7XG5cblx0Ly8gRGVwcmVjYXRlZCBmdW5jdGlvbnNcblx0ZGVwcmVjYXRlZEZ1bmN0aW9ucygpO1xuXG5cdC8vIFRpcHB5LXJlbGF0ZWQgY29kZXNcblx0dm9pZCB0aXBweUZvckV4dGVuc2lvbigpO1xufSkoKTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLFdBQTBCQyxHQUFHQyxLQUFLQyxjQUFjLE1BQU07QUFDNUQsSUFBTUMsZ0JBQStCSCxHQUFHQyxLQUFLQyxjQUFjLFdBQVc7QUFDdEUsSUFBTUUsY0FBNkJKLEdBQUdDLEtBQUtDLGNBQWMsU0FBUztBQUNsRSxJQUFNRyxjQUE2QkwsR0FBR0MsS0FBS0MsY0FBYyxRQUFRO0FBQ2pFLElBQU1JLFVBQXlCTixHQUFHQyxLQUFLQyxjQUFj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TmxILFFBQ0Esd0JBQ0EsQ0FBQ1csT0FBZTBHLFVBQXVCO0FBQ3RDLFNBQUt4TCxHQUFHZ0MsT0FDTnlKLFVBQ0F6TCxHQUFHQyxLQUFLaUMsT0FBTzRDLE9BQU87TUFDckIzQyxRQUFRO01BQ1JDLE9BQU87TUFDUEMsUUFBUTtNQUNSQyxTQUFTO0lBQ1YsQ0FBQyxDQUNGLEVBQ0N1RixLQUFLMkQsS0FBSztFQUNiLEdBQ0EsdURBQ0Q7QUFDQXhMLEtBQUdvTCxJQUFJQyxVQUNObEgsUUFDQSwyQkFDQSxDQUFDdUgsS0FBYUYsVUFBdUI7QUFDcEMsU0FBS3hMLEdBQUdnQyxPQUFPeUosVUFBVUMsR0FBRyxFQUFFN0QsS0FBSzJELEtBQUs7RUFDekMsR0FDQSxtQ0FDRDtBQVNEOztDQ3ZFQyxTQUFTRyxhQUFtQjtBQUM1QixNQUFJM0wsR0FBR1csT0FBT0MsSUFBSSx1QkFBdUIsR0FBRztBQUMzQztFQUNEO0FBQ0FaLEtBQUdXLE9BQU9pTCxJQUFJLHlCQUF5QixJQUFJO0FBRzNDOUosY0FBWTtBQUNabUMsZ0JBQWM7QUFDZDBFLGtCQUFnQjtBQUVoQjlDLElBQUUsTUFBWTtBQUNiLFVBQU1iLFFBQWlDYSxFQUFFLE1BQU07QUFHL0NkLGlCQUFhQyxLQUFLO0FBQ2xCUSxtQkFBZVIsS0FBSztBQUNwQnVCLDZCQUF5QnZCLEtBQUs7QUFDOUIyQix1QkFBbUIzQixLQUFLO0FBQ3hCZ0MsaUJBQWFoQyxLQUFLO0FBQ2xCeUMsZ0JBQVl6QyxLQUFLO0FBQ2pCNkQsb0JBQWdCN0QsS0FBSztBQUNyQmtFLGVBQVdsRSxLQUFLO0FBR2hCb0YsMEJBQXNCcEYsS0FBSztFQUM1QixDQUFDO0FBR0RtRyxzQkFBb0I7QUFHcEIsT0FBS0wsa0JBQWtCO0FBQ3hCLEdBQUc7IiwKICAibmFtZXMiOiBbIlVSTF9ESUZGIiwgIm13IiwgInV0aWwiLCAiZ2V0UGFyYW1WYWx1ZSIsICJVUkxfSElHSExJR0hUIiwgIlVSTF9ISUxJR0hUIiwgIlVSTF9OT19QRVJNIiwgIlVSTF9VU0UiLCAiVVJMX1dJVEhfQ1NTIiwgIlVSTF9XSVRIX0pTIiwgIlVSTF9XSVRIX01PRFVMRSIsICJXR19BQ1RJT04iLCAiY29uZmlnIiwgImdldCIsICJXR19DQU5PTklDQUxfU1BFQ0lBTF9QQUdFX05BTUUiLCAiV0dfTkFNRVNQQUNFX05VTUJFUiIsICJXR19QQUdFX05BTUUiLCAiV0dfU0NSSVBUIiwgIldHX1NLSU4iLCAiV0dfVVNFUl9OQU1FIiwgImltcG9ydF9leHRfZ2FkZ2V0MiIsICJfX3RvRVNNIiwgInJlcXVpcmUiLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAiZ2V0STE4bk1lc3NhZ2VzIiwgIk5vdGUiLCAibG9jYWxpemUiLCAiZW4iLCAiaTE4bk1lc3NhZ2VzIiwgImdldE1lc3NhZ2UiLCAia2V5IiwgImxvYWRXaXRoVVJMIiwgInRlc3QiLCAibG9hZGVyIiwgImxvYWQiLCAiZ2V0VXJsIiwgImFjdGlvbiIsICJjdHlwZSIsICJtYXhhZ2UiLCAic21heGFnZSIsICJ3Z1VzZXJOYW1lIiwgImVzY2FwZVJlZ0V4cCIsICJSRUdFWF9GSUxFIiwgIlJlZ0V4cCIsICJjb25jYXQiLCAiUkVHRVhfRVhUIiwgInBhdGgiLCAiX2l0ZXJhdG9yMiIsICJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsICJzcGxpdCIsICJfc3RlcDIiLCAicyIsICJuIiwgImRvbmUiLCAiX1JFR0VYX0ZJTEUkZXhlYyIsICJ1c2VGaWxlIiwgInZhbHVlIiwgIm5hbWUiLCAidG9TdHJpbmciLCAidHJpbSIsICJ3aGF0IiwgImV4ZWMiLCAiZW5jb2RlVVJJQ29tcG9uZW50IiwgImVyciIsICJlIiwgImYiLCAibm9QZXJtV2FybmluZyIsICJub3RpZnkiLCAid2luZG93IiwgIndnVUxTIiwgInRhZyIsICJ0eXBlIiwgIm5ld1VybCIsICJsb2NhdGlvbiIsICJocmVmIiwgInJlcGxhY2UiLCAiaGlzdG9yeSIsICJwdXNoU3RhdGUiLCAiZG9jdW1lbnQiLCAidGl0bGUiLCAiaGlnaExpZ2h0UmV2IiwgIiRib2R5IiwgImhpZ2hsaWdodCIsICJfaXRlcmF0b3IzIiwgIl9zdGVwMyIsICJ2ZXJzaW9uIiwgImZpbmQiLCAicGFyZW50IiwgImFkZENsYXNzIiwgImFkZFRhcmdldEJsYW5rIiwgImZpbHRlciIsICJfaW5kZXgiLCAiZWxlbWVudCIsICJsaW5rSHJlZiIsICIkIiwgImF0dHIiLCAiaHJlZlNwbGl0IiwgImxlbmd0aCIsICJob3N0IiwgImluY2x1ZGVzIiwgInByb3RvY29sIiwgImhvc3RuYW1lIiwgInRhcmdldCIsICJyZWwiLCAicmVtb3ZlVGl0bGVGcm9tUGVybWFsaW5rIiwgIiRwZXJtYUxpbmsiLCAiXyRwZXJtYUxpbmtGaXJzdENoaWxkIiwgIiRwZXJtYUxpbmtGaXJzdENoaWxkIiwgIm9wZW5TZWFyY2hJbk5ld1RhYiIsICJvbiIsICJldmVudCIsICJjdHJsS2V5IiwgIm1ldGFLZXkiLCAidGl0bGVDbGVhblVwIiwgImZ1bGxQYWdlTmFtZSIsICJUaXRsZSIsICJnZXRQcmVmaXhlZFRleHQiLCAiJGZpcnN0SGVhZGluZyIsICJkb2N1bWVudFRpdGxlIiwgInBhZ2VUaXRsZSIsICJ0ZXh0IiwgInJlcGxhY2VUaXRsZSIsICJ1bmloYW5Qb3B1cCIsICJlYWNoIiwgIiRlbGVtZW50IiwgInVzaW5nIiwgInRoZW4iLCAicG9wdXAiLCAiT08iLCAidWkiLCAiUG9wdXBXaWRnZXQiLCAiJGNvbnRlbnQiLCAiZGVmYXVsdCIsICJjcmVhdGVFbGVtZW50IiwgImxhYmVsIiwgImFuY2hvciIsICJoZWFkIiwgInBhZGRlZCIsICJhcHBlbmQiLCAidG9nZ2xlIiwgImZpeExvY2F0aW9uSGFzaCIsICJoYXNoIiwgImhpZGVOZXdVc2Vyc0xvZyIsICIkbmV3VXNlcnNMb2ciLCAicHJvcCIsICJjaGVja2VkIiwgImRpc2FibGVkIiwgInRvZ2dsZUxpbmsiLCAiXyR0b2dnbGVyJHBhcmVudCQiLCAiJHRvZ2dsZXIiLCAic3R5bGUiLCAiY29sb3IiLCAiY3NzIiwgImltcG9ydF9leHRfZ2FkZ2V0MyIsICJnZXRDb250ZW50IiwgInJlZmVyZW5jZSIsICJfcmVmZXJlbmNlJGdldEF0dHJpYnUiLCAiZ2V0QXR0cmlidXRlIiwgInRleHRDb250ZW50IiwgIm9uQ3JlYXRlQ2FsbGJhY2siLCAiaW5zdGFuY2UiLCAic2V0QXR0cmlidXRlIiwgInJlbW92ZUF0dHJpYnV0ZSIsICJvblNob3dDYWxsYmFjayIsICJzZXRDb250ZW50IiwgInRpcHB5Rm9yQ2l0aXplbkhlYWRlciIsICJfaXRlcmF0b3I0IiwgIl9zdGVwNCIsICJ0aXBweSIsICJhcnJvdyIsICJjb250ZW50IiwgInBsYWNlbWVudCIsICJvbkNyZWF0ZSIsICJvbkhpZGRlbiIsICJvblNob3ciLCAidGlwcHlGb3JFeHRlbnNpb24iLCAiX3JlZiIsICJfYXN5bmNUb0dlbmVyYXRvciIsICJhcHBseSIsICJhcmd1bWVudHMiLCAiZGVwcmVjYXRlZEZ1bmN0aW9ucyIsICJsb2ciLCAiZGVwcmVjYXRlIiwgIm1vZHVsZXMiLCAid2lraVVybGVuY29kZSIsICJyZWFkeSIsICJnZXRTY3JpcHQiLCAidXJsIiwgInNpdGVDb21tb24iLCAic2V0Il0KfQo=

})();

/* </nowiki> */

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
 * @license CC-BY-SA-4.0 {@link https://www.qiuwenbaike.cn/wiki/H:CC-BY-SA-4.0}
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
var loadWithURL = /* @__PURE__ */ function() {
  var _ref = _asyncToGenerator(function* () {
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
        const require2 = yield mw.loader.using("mediawiki.util");
        mw.loader.load(mw.util.getUrl(URL_WITH_JS, {
          action: "raw",
          ctype: "text/javascript",
          maxage: "3600",
          smaxage: "3600"
        }));
      }
      if (URL_WITH_MODULE && /^ext\.[^,|]+$/.test(URL_WITH_MODULE)) {
        const require2 = yield mw.loader.using("mediawiki.util");
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
            case "js": {
              const require2 = yield mw.loader.using("mediawiki.util");
              mw.loader.load("".concat(path, "javascript&title=").concat(encodeURIComponent(name)));
              break;
            }
            case "css":
              mw.loader.load("".concat(path, "css&title=").concat(encodeURIComponent(name)));
              break;
            default:
              if (REGEX_EXT.test(name)) {
                const require2 = yield mw.loader.using("mediawiki.util");
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
  });
  return function loadWithURL2() {
    return _ref.apply(this, arguments);
  };
}();
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
  var _ref2 = _asyncToGenerator(function* () {
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
    return _ref2.apply(this, arguments);
  };
}();
//! src/SiteCommon_JS/modules/deprecatedFunctions.ts
var deprecatedFunctions = () => {
  /*!
   * maintenance: Some user scripts may be using the following deprecated functions.
   * These functions are no longer supported and should be updated.
   */
  mw.log.deprecate(window, "importScript", (title) => {
    return mw.loader.addScriptTag(mw.util.getUrl(title, {
      action: "raw",
      ctype: "text/javascript",
      maxage: "3600",
      smaxage: "3600"
    }));
  }, "Use mw.loader.addScriptTag() instead");
  mw.log.deprecate(window, "importStylesheet", (title) => {
    return mw.loader.addLinkTag(mw.util.getUrl(title, {
      action: "raw",
      ctype: "text/css",
      maxage: "3600",
      smaxage: "3600"
    }), "text/css");
  }, "Use mw.loader.addLinkTag() instead");
  mw.log.deprecate(window, "importScriptURI", (modules) => {
    return mw.loader.addScriptTag(mw.util.wikiUrlencode(modules));
  }, "Use mw.loader.addScriptTag() or mw.loader.getScript() instead");
  mw.log.deprecate(window, "importStylesheetURI", (modules) => {
    return mw.loader.addLinkTag(mw.util.wikiUrlencode(modules), "text/css");
  }, "Use mw.loader.addLinkTag() instead");
  mw.log.deprecate(
    window,
    // @ts-expect-error TS2345
    "importScriptCallback",
    (title, ready) => {
      void mw.loader.getScript(mw.util.getUrl(title, {
        action: "raw",
        ctype: "text/javascript",
        maxage: "3600",
        smaxage: "3600"
      })).then(ready);
    },
    "Use mw.loader.getScript() instead"
  );
  mw.log.deprecate(
    window,
    // @ts-expect-error TS2345
    "importScriptURICallback",
    (url, ready) => {
      void mw.loader.getScript(url).then(ready);
    },
    "Use mw.loader.getScript() instead"
  );
};
//! src/SiteCommon_JS/SiteCommon_JS.ts
(function siteCommon() {
  if (mw.config.get("wgSiteCommonInstalled")) {
    return;
  }
  mw.config.set("wgSiteCommonInstalled", true);
  void loadWithURL();
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1NpdGVDb21tb25fSlMvbW9kdWxlcy9jb25zdGFudC50cyIsICJzcmMvU2l0ZUNvbW1vbl9KUy9tb2R1bGVzL2NvcmUudHN4IiwgInNyYy9TaXRlQ29tbW9uX0pTL21vZHVsZXMvaTE4bi50cyIsICJzcmMvU2l0ZUNvbW1vbl9KUy9tb2R1bGVzL3RpcHB5LnRzIiwgInNyYy9TaXRlQ29tbW9uX0pTL21vZHVsZXMvZGVwcmVjYXRlZEZ1bmN0aW9ucy50cyIsICJzcmMvU2l0ZUNvbW1vbl9KUy9TaXRlQ29tbW9uX0pTLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBVUkxfRElGRjogc3RyaW5nIHwgbnVsbCA9IG13LnV0aWwuZ2V0UGFyYW1WYWx1ZSgnZGlmZicpO1xuY29uc3QgVVJMX0hJR0hMSUdIVDogc3RyaW5nIHwgbnVsbCA9IG13LnV0aWwuZ2V0UGFyYW1WYWx1ZSgnaGlnaGxpZ2h0Jyk7XG5jb25zdCBVUkxfSElMSUdIVDogc3RyaW5nIHwgbnVsbCA9IG13LnV0aWwuZ2V0UGFyYW1WYWx1ZSgnaGlsaWdodCcpO1xuY29uc3QgVVJMX05PX1BFUk06IHN0cmluZyB8IG51bGwgPSBtdy51dGlsLmdldFBhcmFtVmFsdWUoJ25vcGVybScpO1xuY29uc3QgVVJMX1VTRTogc3RyaW5nIHwgbnVsbCA9IG13LnV0aWwuZ2V0UGFyYW1WYWx1ZSgndXNlJyk7XG5jb25zdCBVUkxfV0lUSF9DU1M6IHN0cmluZyB8IG51bGwgPSBtdy51dGlsLmdldFBhcmFtVmFsdWUoJ3dpdGhDU1MnKTtcbmNvbnN0IFVSTF9XSVRIX0pTOiBzdHJpbmcgfCBudWxsID0gbXcudXRpbC5nZXRQYXJhbVZhbHVlKCd3aXRoSlMnKTtcbmNvbnN0IFVSTF9XSVRIX01PRFVMRTogc3RyaW5nIHwgbnVsbCA9IG13LnV0aWwuZ2V0UGFyYW1WYWx1ZSgnd2l0aE1vZHVsZScpO1xuXG5jb25zdCBXR19BQ1RJT046IE1lZGlhV2lraUNvbmZpZ01hcFdnQWN0aW9uID0gbXcuY29uZmlnLmdldCgnd2dBY3Rpb24nKTtcbmNvbnN0IFdHX0NBTk9OSUNBTF9TUEVDSUFMX1BBR0VfTkFNRTogc3RyaW5nIHwgZmFsc2UgPSBtdy5jb25maWcuZ2V0KCd3Z0Nhbm9uaWNhbFNwZWNpYWxQYWdlTmFtZScpO1xuY29uc3QgV0dfTkFNRVNQQUNFX05VTUJFUjogbnVtYmVyID0gbXcuY29uZmlnLmdldCgnd2dOYW1lc3BhY2VOdW1iZXInKTtcbmNvbnN0IFdHX1BBR0VfTkFNRTogc3RyaW5nID0gbXcuY29uZmlnLmdldCgnd2dQYWdlTmFtZScpO1xuY29uc3QgV0dfU0NSSVBUOiBzdHJpbmcgPSBtdy5jb25maWcuZ2V0KCd3Z1NjcmlwdCcpO1xuY29uc3QgV0dfU0tJTjogc3RyaW5nID0gbXcuY29uZmlnLmdldCgnc2tpbicpO1xuY29uc3QgV0dfVVNFUl9OQU1FOiBzdHJpbmcgfCBudWxsID0gbXcuY29uZmlnLmdldCgnd2dVc2VyTmFtZScpO1xuXG5leHBvcnQge1xuXHRVUkxfRElGRixcblx0VVJMX0hJR0hMSUdIVCxcblx0VVJMX0hJTElHSFQsXG5cdFVSTF9OT19QRVJNLFxuXHRVUkxfVVNFLFxuXHRVUkxfV0lUSF9DU1MsXG5cdFVSTF9XSVRIX0pTLFxuXHRVUkxfV0lUSF9NT0RVTEUsXG5cdFdHX0FDVElPTixcblx0V0dfQ0FOT05JQ0FMX1NQRUNJQUxfUEFHRV9OQU1FLFxuXHRXR19OQU1FU1BBQ0VfTlVNQkVSLFxuXHRXR19QQUdFX05BTUUsXG5cdFdHX1NDUklQVCxcblx0V0dfU0tJTixcblx0V0dfVVNFUl9OQU1FLFxufTtcbiIsICJpbXBvcnQge1xuXHRVUkxfRElGRixcblx0VVJMX0hJR0hMSUdIVCxcblx0VVJMX0hJTElHSFQsXG5cdFVSTF9OT19QRVJNLFxuXHRVUkxfVVNFLFxuXHRVUkxfV0lUSF9DU1MsXG5cdFVSTF9XSVRIX0pTLFxuXHRVUkxfV0lUSF9NT0RVTEUsXG5cdFdHX0FDVElPTixcblx0V0dfQ0FOT05JQ0FMX1NQRUNJQUxfUEFHRV9OQU1FLFxuXHRXR19OQU1FU1BBQ0VfTlVNQkVSLFxuXHRXR19QQUdFX05BTUUsXG5cdFdHX1NDUklQVCxcblx0V0dfVVNFUl9OQU1FLFxufSBmcm9tICcuL2NvbnN0YW50JztcbmltcG9ydCBSZWFjdCBmcm9tICdleHQuZ2FkZ2V0LlJlYWN0JztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9pMThuJztcblxuY29uc3QgbG9hZFdpdGhVUkwgPSBhc3luYyAoKTogUHJvbWlzZTx2b2lkPiA9PiB7XG5cdC8qKlxuXHQgKiAmd2l0aENTUz0gYW5kICZ3aXRoSlM9IFVSTCBwYXJhbWV0ZXJzXG5cdCAqIEFsbG93IHRvIHRyeSBjdXN0b20gc2NyaXB0cyBmcm9tIE1lZGlhV2lraSBzcGFjZVxuXHQgKiB3aXRob3V0IGVkaXRpbmcgcGVyc29uYWwgLmNzcyBvciAuanMgZmlsZXNcblx0ICovXG5cdGlmIChVUkxfV0lUSF9DU1MgfHwgVVJMX1dJVEhfSlMgfHwgVVJMX1dJVEhfTU9EVUxFKSB7XG5cdFx0aWYgKFVSTF9XSVRIX0NTUyAmJiAvXk1lZGlhV2lraTpbXiMlJjw9Pl0qXFwuY3NzJC8udGVzdChVUkxfV0lUSF9DU1MpKSB7XG5cdFx0XHRtdy5sb2FkZXIubG9hZChcblx0XHRcdFx0bXcudXRpbC5nZXRVcmwoVVJMX1dJVEhfQ1NTLCB7XG5cdFx0XHRcdFx0YWN0aW9uOiAncmF3Jyxcblx0XHRcdFx0XHRjdHlwZTogJ3RleHQvY3NzJyxcblx0XHRcdFx0XHRtYXhhZ2U6ICczNjAwJyxcblx0XHRcdFx0XHRzbWF4YWdlOiAnMzYwMCcsXG5cdFx0XHRcdH0pLFxuXHRcdFx0XHQndGV4dC9jc3MnXG5cdFx0XHQpO1xuXHRcdH1cblx0XHRpZiAoVVJMX1dJVEhfSlMgJiYgL15NZWRpYVdpa2k6W14jJSY8PT5dKlxcLmpzJC8udGVzdChVUkxfV0lUSF9KUykpIHtcblx0XHRcdC8vIEB0cy1leHBlY3QtZXJyb3IgVFM2MTMzXG5cdFx0XHRjb25zdCByZXF1aXJlID0gYXdhaXQgbXcubG9hZGVyLnVzaW5nKCdtZWRpYXdpa2kudXRpbCcpO1xuXHRcdFx0bXcubG9hZGVyLmxvYWQoXG5cdFx0XHRcdG13LnV0aWwuZ2V0VXJsKFVSTF9XSVRIX0pTLCB7XG5cdFx0XHRcdFx0YWN0aW9uOiAncmF3Jyxcblx0XHRcdFx0XHRjdHlwZTogJ3RleHQvamF2YXNjcmlwdCcsXG5cdFx0XHRcdFx0bWF4YWdlOiAnMzYwMCcsXG5cdFx0XHRcdFx0c21heGFnZTogJzM2MDAnLFxuXHRcdFx0XHR9KVxuXHRcdFx0KTtcblx0XHR9XG5cdFx0aWYgKFVSTF9XSVRIX01PRFVMRSAmJiAvXmV4dFxcLlteLHxdKyQvLnRlc3QoVVJMX1dJVEhfTU9EVUxFKSkge1xuXHRcdFx0Ly8gQHRzLWV4cGVjdC1lcnJvciBUUzYxMzNcblx0XHRcdGNvbnN0IHJlcXVpcmUgPSBhd2FpdCBtdy5sb2FkZXIudXNpbmcoJ21lZGlhd2lraS51dGlsJyk7XG5cdFx0XHRtdy5sb2FkZXIubG9hZChVUkxfV0lUSF9NT0RVTEUpO1xuXHRcdH1cblx0fVxuXHQvKipcblx0ICogTG9hZCBDU1MgYW5kIEpTIGZpbGVzIHRlbXBvcmFyaWx5IHRocm91Z2ggVVJMLlxuXHQgKiAmdXNlPUZpbGUxLmNzc3xGaWxlMi5jc3N8RmlsZTMuanNcblx0ICovXG5cdGlmIChVUkxfVVNFKSB7XG5cdFx0Y29uc3Qgd2dVc2VyTmFtZTogc3RyaW5nID0gbXcudXRpbC5lc2NhcGVSZWdFeHAoV0dfVVNFUl9OQU1FID8/ICcnKTtcblx0XHRjb25zdCBSRUdFWF9GSUxFOiBSZWdFeHAgPSBuZXcgUmVnRXhwKFxuXHRcdFx0YF4oPzpNZWRpYVdpa2k6JHt3Z1VzZXJOYW1lID8gYHxVc2VyOiR7d2dVc2VyTmFtZX0vYCA6ICcnfSlbXiY8Pj0lI10qXFxcXC4oanN8Y3NzKSRgXG5cdFx0KTtcblx0XHRjb25zdCBSRUdFWF9FWFQ6IFJlZ0V4cCA9IC9eZXh0XFwuW14sXSskLztcblx0XHRjb25zdCBwYXRoOiBzdHJpbmcgPSBgJHtXR19TQ1JJUFR9P2FjdGlvbj1yYXcmY3R5cGU9dGV4dC9gO1xuXHRcdGZvciAoY29uc3QgdXNlRmlsZSBvZiBVUkxfVVNFLnNwbGl0KCd8JykpIHtcblx0XHRcdGNvbnN0IG5hbWU6IHN0cmluZyA9IHVzZUZpbGUudG9TdHJpbmcoKS50cmltKCk7XG5cdFx0XHRjb25zdCB3aGF0OiBzdHJpbmdbXSA9IFJFR0VYX0ZJTEUuZXhlYyhuYW1lKSA/PyBbJycsICcnXTtcblx0XHRcdHN3aXRjaCAod2hhdFsxXSkge1xuXHRcdFx0XHRjYXNlICdqcyc6IHtcblx0XHRcdFx0XHQvLyBAdHMtZXhwZWN0LWVycm9yIFRTNjEzM1xuXHRcdFx0XHRcdGNvbnN0IHJlcXVpcmUgPSBhd2FpdCBtdy5sb2FkZXIudXNpbmcoJ21lZGlhd2lraS51dGlsJyk7XG5cdFx0XHRcdFx0bXcubG9hZGVyLmxvYWQoYCR7cGF0aH1qYXZhc2NyaXB0JnRpdGxlPSR7ZW5jb2RlVVJJQ29tcG9uZW50KG5hbWUpfWApO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNhc2UgJ2Nzcyc6XG5cdFx0XHRcdFx0bXcubG9hZGVyLmxvYWQoYCR7cGF0aH1jc3MmdGl0bGU9JHtlbmNvZGVVUklDb21wb25lbnQobmFtZSl9YCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0aWYgKFJFR0VYX0VYVC50ZXN0KG5hbWUpKSB7XG5cdFx0XHRcdFx0XHQvLyBAdHMtZXhwZWN0LWVycm9yIFRTNjEzM1xuXHRcdFx0XHRcdFx0Y29uc3QgcmVxdWlyZSA9IGF3YWl0IG13LmxvYWRlci51c2luZygnbWVkaWF3aWtpLnV0aWwnKTtcblx0XHRcdFx0XHRcdG13LmxvYWRlci5sb2FkKG5hbWUpO1xuXHRcdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cbn07XG5cbmNvbnN0IG5vUGVybVdhcm5pbmcgPSAoKTogdm9pZCA9PiB7XG5cdC8qKlxuXHQgKiBMb2FkIHdhcm5pbmcocykgd2hlbiB1c2VyIGhhcyBubyBhY2Nlc3MgdG8gcGFnZVxuXHQgKi9cblx0aWYgKCFVUkxfTk9fUEVSTSkge1xuXHRcdHJldHVybjtcblx0fVxuXHRzd2l0Y2ggKFVSTF9OT19QRVJNKSB7XG5cdFx0Y2FzZSAnMCc6XG5cdFx0XHR2b2lkIG13Lm5vdGlmeShcblx0XHRcdFx0d2luZG93LndnVUxTKFxuXHRcdFx0XHRcdCflm6DmioDmnK/ljp/lm6DvvIzmgqjmsqHmnInmnYPpmZDorr/pl67nm7jlhbPpobXpnaLjgILoi6XmnInnlpHpl67vvIzor7fkuI7msYLpl7vnmb7np5Hov5DokKXogIXogZTns7vjgIInLFxuXHRcdFx0XHRcdCflm6DmioDooZPljp/lm6DvvIzmgqjmspLmnInmrIrpmZDoqKrllY/nm7jpl5zpoIHpnaLjgILoi6XmnInnlpHllY/vvIzoq4voiIfmsYLogZ7nmb7np5HpgYvnh5/ogIXoga/ns7vjgIInXG5cdFx0XHRcdCksXG5cdFx0XHRcdHt0YWc6ICdub1Blcm0nLCB0eXBlOiAnZXJyb3InfVxuXHRcdFx0KTtcblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgJzEnOlxuXHRcdFx0dm9pZCBtdy5ub3RpZnkoXG5cdFx0XHRcdHdpbmRvdy53Z1VMUyhcblx0XHRcdFx0XHQn5oKo5rKh5pyJ5p2D6ZmQ6K6/6Zeu55u45YWz6aG16Z2i44CC6Iul5oKo5piv6LWE5rex57yW6ICF77yM6K+35LiO5rGC6Ze755m+56eR5oqA5pyv5Zui6Zif6IGU57O777yM5Lul6I635Y+W5p2D6ZmQ44CCJyxcblx0XHRcdFx0XHQn5oKo5rKS5pyJ5qyK6ZmQ6Kiq5ZWP55u46Zec6aCB6Z2i44CC6Iul5oKo5piv6LOH5rex57eo6ICF77yM6KuL6IiH5rGC6IGe55m+56eR5oqA6KGT5ZyY6ZqK6IGv57O777yM5Lul542y5Y+W5qyK6ZmQ44CCJ1xuXHRcdFx0XHQpLFxuXHRcdFx0XHR7dGFnOiAnbm9QZXJtJywgdHlwZTogJ2Vycm9yJ31cblx0XHRcdCk7XG5cdFx0XHRicmVhaztcblx0XHRjYXNlICcyJzpcblx0XHRcdHZvaWQgbXcubm90aWZ5KFxuXHRcdFx0XHR3aW5kb3cud2dVTFMoXG5cdFx0XHRcdFx0J+aCqOeahOe9kee7nOeOr+Wig+WtmOWcqOmjjumZqe+8jOivt+eZu+W9leWQjue7p+e7reS9v+eUqOOAguiLpeaCqOayoeacieaxgumXu+eZvuenkei0puWPt++8jOivt+azqOWGjOWQjueZu+W9leOAgicsXG5cdFx0XHRcdFx0J+aCqOeahOe2sui3r+eSsOWig+WtmOWcqOmiqOmaqu+8jOiri+eZu+WFpeW+jOe5vOe6jOS9v+eUqOOAguiLpeaCqOaykuacieaxguiBnueZvuenkeizrOiZn++8jOiri+azqOWGiuW+jOeZu+mMhOOAgidcblx0XHRcdFx0KSxcblx0XHRcdFx0e3RhZzogJ25vUGVybScsIHR5cGU6ICd3YXJuJ31cblx0XHRcdCk7XG5cdFx0XHRicmVhaztcblx0XHRjYXNlICczJzpcblx0XHRcdHZvaWQgbXcubm90aWZ5KFxuXHRcdFx0XHR3aW5kb3cud2dVTFMoXG5cdFx0XHRcdFx0J+ebuOWFs+WKn+iDveS7heWQkeazqOWGjOeUqOaIt+W8gOaUvu+8jOivt+eZu+W9leWQjue7p+e7reS9v+eUqOOAguiLpeaCqOayoeacieaxgumXu+eZvuenkei0puWPt++8jOivt+azqOWGjOWQjueZu+W9leOAgicsXG5cdFx0XHRcdFx0J+ebuOmXnOWKn+iDveWDheWQkeazqOWGiueUqOaItumWi+aUvu+8jOiri+eZu+WFpeW+jOe5vOe6jOS9v+eUqOOAguiLpeaCqOaykuacieaxguiBnueZvuenkeizrOiZn++8jOiri+azqOWGiuW+jOeZu+mMhOOAgidcblx0XHRcdFx0KSxcblx0XHRcdFx0e3RhZzogJ25vUGVybScsIHR5cGU6ICd3YXJuJ31cblx0XHRcdCk7XG5cdFx0XHRicmVhaztcblx0XHRkZWZhdWx0OlxuXHRcdFx0dm9pZCBtdy5ub3RpZnkoXG5cdFx0XHRcdHdpbmRvdy53Z1VMUyhcblx0XHRcdFx0XHQn5oKo5rKh5pyJ5p2D6ZmQ6K6/6Zeu55u45YWz6aG16Z2i44CC6Iul5pyJ55aR6Zeu77yM6K+35LiO5rGC6Ze755m+56eR6L+Q6JCl6ICF6IGU57O744CCJyxcblx0XHRcdFx0XHQn5oKo5rKS5pyJ5qyK6ZmQ6Kiq5ZWP55u46Zec6aCB6Z2i44CC6Iul5pyJ55aR5ZWP77yM6KuL6IiH5rGC6IGe55m+56eR6YGL54ef6ICF6IGv57O744CCJ1xuXHRcdFx0XHQpLFxuXHRcdFx0XHR7dGFnOiAnbm9QZXJtJywgdHlwZTogJ2Vycm9yJ31cblx0XHRcdCk7XG5cdH1cblx0Y29uc3QgbmV3VXJsOiBzdHJpbmcgPSBsb2NhdGlvbi5ocmVmLnJlcGxhY2UoL1s/Jl1ub3Blcm09WzAtOV0rLywgJycpO1xuXHRoaXN0b3J5LnB1c2hTdGF0ZSh7fSwgZG9jdW1lbnQudGl0bGUsIG5ld1VybCk7XG59O1xuXG5jb25zdCBoaWdoTGlnaHRSZXYgPSAoJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KTogdm9pZCA9PiB7XG5cdC8qKlxuXHQgKiBBZGQgaGlnaGxpZ2h0IHRvIHJldmlzaW9ucyB3aGVuIHVzaW5nIGAmaGlsaWdodD1yZXZpZGAgb3IgYCZoaWdobGlnaHQ9cmV2aWRgXG5cdCAqL1xuXHRjb25zdCBoaWdobGlnaHQ6IHN0cmluZyB8IG51bGwgPSBVUkxfSElHSExJR0hUID8/IFVSTF9ISUxJR0hUO1xuXHRpZiAoIWhpZ2hsaWdodCB8fCBXR19BQ1RJT04gIT09ICdoaXN0b3J5Jykge1xuXHRcdHJldHVybjtcblx0fVxuXHRmb3IgKGNvbnN0IHZlcnNpb24gb2YgaGlnaGxpZ2h0LnNwbGl0KCcsJykpIHtcblx0XHQkYm9keS5maW5kKGBpbnB1dFtuYW1lPW9sZGlkXVt2YWx1ZT0ke3ZlcnNpb259XWApLnBhcmVudCgpLmFkZENsYXNzKCdub3QtcGF0cm9sbGVkJyk7XG5cdH1cbn07XG5cbmNvbnN0IGFkZFRhcmdldEJsYW5rID0gKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQgPT4ge1xuXHQvKipcblx0ICogQWRkIHRhcmdldD1cImJsYW5rXCIgdG8gZXh0ZXJuYWwgbGlua3Ncblx0ICovXG5cdCRib2R5LmZpbmQ8SFRNTEFuY2hvckVsZW1lbnQ+KCdhLmV4dGVybmFsLCBhW3JlbD1cIm13OkV4dExpbmtcIl0nKS5maWx0ZXIoKF9pbmRleCwgZWxlbWVudCk6IGJvb2xlYW4gPT4ge1xuXHRcdGNvbnN0IGxpbmtIcmVmOiBzdHJpbmcgfCB1bmRlZmluZWQgPSAkKGVsZW1lbnQpLmF0dHIoJ2hyZWYnKTtcblx0XHRpZiAobGlua0hyZWYpIHtcblx0XHRcdGNvbnN0IGhyZWZTcGxpdDogc3RyaW5nW10gPSBsaW5rSHJlZi5zcGxpdCgnLycpO1xuXHRcdFx0aWYgKGhyZWZTcGxpdC5sZW5ndGggPCAzIHx8IGhyZWZTcGxpdFsyXSA9PT0gbG9jYXRpb24uaG9zdCkge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmIChlbGVtZW50LmhyZWYuaW5jbHVkZXMoYCR7bG9jYXRpb24ucHJvdG9jb2x9Ly8ke2xvY2F0aW9uLmhvc3RuYW1lfWApKSB7XG5cdFx0XHRlbGVtZW50LnRhcmdldCA9ICdfYmxhbmsnO1xuXHRcdFx0aWYgKCFlbGVtZW50LnJlbC5pbmNsdWRlcygnbm9vcGVuZXInKSkge1xuXHRcdFx0XHRlbGVtZW50LnJlbCArPSAnIG5vb3BlbmVyJztcblx0XHRcdH1cblx0XHRcdGlmICghZWxlbWVudC5yZWwuaW5jbHVkZXMoJ25vcmVmZXJyZXInKSkge1xuXHRcdFx0XHRlbGVtZW50LnJlbCArPSAnIG5vcmVmZXJyZXInO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fSk7XG59O1xuXG5jb25zdCByZW1vdmVUaXRsZUZyb21QZXJtYWxpbmsgPSAoJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KTogdm9pZCA9PiB7XG5cdC8qKlxuXHQgKiBSZW1vdmUgdGl0bGU9KiBmcm9tIHBlcm1hbGlua1xuXHQgKi9cblx0Y29uc3QgJHBlcm1hTGluazogSlF1ZXJ5ID0gJGJvZHkuZmluZCgnI3QtcGVybWFsaW5rJyk7XG5cdGlmICgkcGVybWFMaW5rLmxlbmd0aCkge1xuXHRcdGNvbnN0ICRwZXJtYUxpbmtGaXJzdENoaWxkOiBKUXVlcnk8SFRNTEFuY2hvckVsZW1lbnQ+ID0gJHBlcm1hTGluay5maW5kPEhUTUxBbmNob3JFbGVtZW50PignOmZpcnN0LWNoaWxkJyk7XG5cdFx0Y29uc3QgaHJlZjogc3RyaW5nIHwgdW5kZWZpbmVkID0gJHBlcm1hTGlua0ZpcnN0Q2hpbGQuYXR0cignaHJlZicpPy5yZXBsYWNlKC90aXRsZT1bXiZdKiYvLCAnJyk7XG5cdFx0aWYgKCFocmVmKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdCRwZXJtYUxpbmtGaXJzdENoaWxkLmF0dHIoJ2hyZWYnLCBocmVmKTtcblx0fVxufTtcblxuY29uc3Qgb3BlblNlYXJjaEluTmV3VGFiID0gKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQgPT4ge1xuXHQvKipcblx0ICogT3BlbiBzZWFyY2ggcmVzdWx0cyBpbiBhIG5ldyB0YWIgb3Igd2luZG93XG5cdCAqIHdoZW4gaG9sZGluZyBkb3duIHRoZSBDdHJsIGtleSAoYnkgVGltZXNoaWZ0ZXIpXG5cdCAqL1xuXHQkYm9keVxuXHRcdC5maW5kKCcjc2VhcmNoLCNzZWFyY2hib3gsI3NlYXJjaGZvcm0sLnNlYXJjaC10eXBlcywjc2VhcmNoLXR5cGVzJylcblx0XHQub24oJ2tleWRvd24ga2V5dXAgbW91c2Vkb3duJywgKGV2ZW50OiBKUXVlcnkuVHJpZ2dlcmVkRXZlbnQ8SFRNTEVsZW1lbnQ+KTogdm9pZCA9PiB7XG5cdFx0XHRjb25zdCB7Y3RybEtleSwgbWV0YUtleSwgdGFyZ2V0fSA9IGV2ZW50O1xuXHRcdFx0JCh0YXJnZXQpLmF0dHIoJ3RhcmdldCcsIGN0cmxLZXkgPz8gbWV0YUtleSA/ICdfYmxhbmsnIDogJycpO1xuXHRcdH0pO1xufTtcblxuY29uc3QgdGl0bGVDbGVhblVwID0gKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQgPT4ge1xuXHQvKipcblx0ICogQ2xlYW51cCB0aXRsZSBmb3IgYWxsIHBhZ2VzXG5cdCAqL1xuXHRpZiAoVVJMX0RJRkYgfHwgV0dfQUNUSU9OICE9PSAndmlldycgfHwgIVs2LCAxMThdLmluY2x1ZGVzKFdHX05BTUVTUEFDRV9OVU1CRVIpKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdGNvbnN0IGZ1bGxQYWdlTmFtZTogc3RyaW5nID0gbmV3IG13LlRpdGxlKFdHX1BBR0VfTkFNRSkuZ2V0UHJlZml4ZWRUZXh0KCk7XG5cdGNvbnN0ICRmaXJzdEhlYWRpbmc6IEpRdWVyeSA9ICRib2R5LmZpbmQoJy5maXJzdEhlYWRpbmcnKTtcblx0Y29uc3QgZG9jdW1lbnRUaXRsZTogc3RyaW5nID0gZG9jdW1lbnQudGl0bGU7XG5cdGNvbnN0IHBhZ2VUaXRsZTogc3RyaW5nID0gJGZpcnN0SGVhZGluZy50ZXh0KCk7XG5cdGNvbnN0IHJlcGxhY2VUaXRsZSA9ICh0aXRsZTogc3RyaW5nKTogc3RyaW5nID0+IHRpdGxlLnJlcGxhY2UocGFnZVRpdGxlLCBmdWxsUGFnZU5hbWUpO1xuXHRkb2N1bWVudC50aXRsZSA9IHJlcGxhY2VUaXRsZShkb2N1bWVudFRpdGxlKTtcblx0JGZpcnN0SGVhZGluZy50ZXh0KHJlcGxhY2VUaXRsZShwYWdlVGl0bGUpKTtcbn07XG5cbmNvbnN0IHVuaWhhblBvcHVwID0gKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQgPT4ge1xuXHQvKipcblx0ICogRGlzcGxheSB0aXRsZT0oLiopIG9mIDxzcGFuIGNsYXNzPVwiaW5saW5lLXVuaWhhblwiPiBhZnRlciB0aGVtLlxuXHQgKiAoYmV0YSB0ZXN0KVxuXHQgKi9cblx0Ly8gRG8gbm90IGRpc3BsYXkgb24gU3BlY2lhbCBQYWdlc1xuXHRpZiAoV0dfTkFNRVNQQUNFX05VTUJFUiA8IDApIHtcblx0XHRyZXR1cm47XG5cdH1cblx0JGJvZHkuZmluZCgnYXR0ciwgLmlubGluZS11bmloYW4nKS5lYWNoKChfaW5kZXg6IG51bWJlciwgZWxlbWVudDogSFRNTEVsZW1lbnQpOiB2b2lkID0+IHtcblx0XHRjb25zdCAkZWxlbWVudDogSlF1ZXJ5ID0gJChlbGVtZW50KTtcblx0XHRjb25zdCB0aXRsZTogc3RyaW5nIHwgdW5kZWZpbmVkID0gJGVsZW1lbnQuYXR0cigndGl0bGUnKTtcblx0XHRpZiAoIXRpdGxlKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdHZvaWQgbXcubG9hZGVyLnVzaW5nKCdvb2pzLXVpLWNvcmUnKS50aGVuKCgpOiB2b2lkID0+IHtcblx0XHRcdGNvbnN0IHBvcHVwOiBPTy51aS5Qb3B1cFdpZGdldCA9IG5ldyBPTy51aS5Qb3B1cFdpZGdldCh7XG5cdFx0XHRcdCRjb250ZW50OiAkKDxwPnt0aXRsZX08L3A+KSBhcyBKUXVlcnksXG5cdFx0XHRcdGxhYmVsOiBnZXRNZXNzYWdlKCdOb3RlJyksXG5cdFx0XHRcdGFuY2hvcjogdHJ1ZSxcblx0XHRcdFx0aGVhZDogdHJ1ZSxcblx0XHRcdFx0cGFkZGVkOiB0cnVlLFxuXHRcdFx0fSk7XG5cdFx0XHQkZWxlbWVudC5hcHBlbmQocG9wdXAuJGVsZW1lbnQpLm9uKCdjbGljaycsICgpOiB2b2lkID0+IHtcblx0XHRcdFx0cG9wdXAudG9nZ2xlKCk7XG5cdFx0XHR9KTtcblx0XHR9KTtcblx0fSk7XG59O1xuXG5jb25zdCBmaXhMb2NhdGlvbkhhc2ggPSAoKTogdm9pZCA9PiB7XG5cdC8qIOS/ruato+aKmOWPoOWQjuWumuS9jeWPmOWMliAqL1xuXHRpZiAobG9jYXRpb24uaGFzaCkge1xuXHRcdGxvY2F0aW9uLmhyZWYgPSBsb2NhdGlvbi5oYXNoO1xuXHR9XG59O1xuXG5jb25zdCBoaWRlTmV3VXNlcnNMb2cgPSAoJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KTogdm9pZCA9PiB7XG5cdC8qIOS4tOaXtu+8muemgeatoueUqOaIt+afpeeci+eUqOaIt+WIm+W7uuaXpeW/lyAqL1xuXHRpZiAoV0dfQ0FOT05JQ0FMX1NQRUNJQUxfUEFHRV9OQU1FICE9PSAnTG9nJykge1xuXHRcdHJldHVybjtcblx0fVxuXHRjb25zdCAkbmV3VXNlcnNMb2c6IEpRdWVyeSA9ICRib2R5LmZpbmQoJ2lucHV0W25hbWU9XCJ3cGZpbHRlcnNbXVwiXVt2YWx1ZT1uZXd1c2Vyc10nKTtcblx0JG5ld1VzZXJzTG9nLnByb3Aoe1xuXHRcdGNoZWNrZWQ6IDAsXG5cdFx0ZGlzYWJsZWQ6ICdkaXNhYmxlZCcsXG5cdH0pO1xufTtcblxuY29uc3QgdG9nZ2xlTGluayA9ICgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkID0+IHtcblx0Lyog6LCD5pW05oqY5Y+g5oyJ6ZKu55qE6aKc6ImyICovXG5cdGNvbnN0ICR0b2dnbGVyOiBKUXVlcnkgPSAkYm9keS5maW5kKCcubXctY29sbGFwc2libGUtdG9nZ2xlLCAuZ2FkZ2V0LWNvbGxhcHNpYmxlLXRvZ2dsZXInKTtcblx0aWYgKCR0b2dnbGVyLmxlbmd0aCAmJiAkdG9nZ2xlci5wYXJlbnQoKVswXT8uc3R5bGUuY29sb3IpIHtcblx0XHQkdG9nZ2xlci5maW5kKCdhJykuY3NzKCdjb2xvcicsICdpbmhlcml0Jyk7XG5cdH1cbn07XG5cbmV4cG9ydCB7XG5cdGxvYWRXaXRoVVJMLFxuXHRub1Blcm1XYXJuaW5nLFxuXHRoaWdoTGlnaHRSZXYsXG5cdGFkZFRhcmdldEJsYW5rLFxuXHRyZW1vdmVUaXRsZUZyb21QZXJtYWxpbmssXG5cdG9wZW5TZWFyY2hJbk5ld1RhYixcblx0dGl0bGVDbGVhblVwLFxuXHR1bmloYW5Qb3B1cCxcblx0Zml4TG9jYXRpb25IYXNoLFxuXHRoaWRlTmV3VXNlcnNMb2csXG5cdHRvZ2dsZUxpbmssXG59O1xuIiwgImltcG9ydCB7bG9jYWxpemV9IGZyb20gJ2V4dC5nYWRnZXQuaTE4bic7XG5cbmNvbnN0IGdldEkxOG5NZXNzYWdlcyA9ICgpID0+IHtcblx0cmV0dXJuIHtcblx0XHROb3RlOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ05vdGU6ICcsXG5cdFx0XHQnemgtaGFucyc6ICfms6jph4rvvJonLFxuXHRcdFx0J3poLWhhbnQnOiAn5rOo6YeL77yaJyxcblx0XHR9KSxcblx0fTtcbn07XG5cbmNvbnN0IGkxOG5NZXNzYWdlcyA9IGdldEkxOG5NZXNzYWdlcygpO1xuXG5jb25zdCBnZXRNZXNzYWdlOiBHZXRNZXNzYWdlczx0eXBlb2YgaTE4bk1lc3NhZ2VzPiA9IChrZXkpID0+IHtcblx0cmV0dXJuIGkxOG5NZXNzYWdlc1trZXldIHx8IGtleTtcbn07XG5cbmV4cG9ydCB7Z2V0TWVzc2FnZX07XG4iLCAiaW1wb3J0IHtXR19TS0lOfSBmcm9tICcuL2NvbnN0YW50JztcbmltcG9ydCB7dGlwcHl9IGZyb20gJ2V4dC5nYWRnZXQuVGlwcHknO1xuXG5jb25zdCBnZXRDb250ZW50ID0gKHJlZmVyZW5jZTogRWxlbWVudCk6IHN0cmluZyA9PiB7XG5cdGNvbnN0IGxhYmVsOiBzdHJpbmcgfCBudWxsID0gcmVmZXJlbmNlLmdldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpO1xuXHRjb25zdCB0aXRsZTogc3RyaW5nIHwgbnVsbCA9IHJlZmVyZW5jZS5nZXRBdHRyaWJ1dGUoJ2FsdCcpID8/IHJlZmVyZW5jZS5nZXRBdHRyaWJ1dGUoJ3RpdGxlJyk7XG5cblx0cmV0dXJuIChsYWJlbCA9PT0gdGl0bGUgPyBsYWJlbCA6IHRpdGxlIHx8IGxhYmVsKSB8fCAocmVmZXJlbmNlLnRleHRDb250ZW50IGFzIHN0cmluZyk7XG59O1xuXG5jb25zdCBvbkNyZWF0ZUNhbGxiYWNrID0gKGluc3RhbmNlOiBSZXR1cm5UeXBlPHR5cGVvZiB0aXBweT5bMF0pOiB2b2lkID0+IHtcblx0Y29uc3Qge3JlZmVyZW5jZX0gPSBpbnN0YW5jZTtcblx0cmVmZXJlbmNlLnNldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcsIGdldENvbnRlbnQocmVmZXJlbmNlKSk7XG5cdHJlZmVyZW5jZS5yZW1vdmVBdHRyaWJ1dGUoJ3RpdGxlJyk7XG59O1xuXG5jb25zdCBvblNob3dDYWxsYmFjayA9IChpbnN0YW5jZTogUmV0dXJuVHlwZTx0eXBlb2YgdGlwcHk+WzBdKTogdm9pZCA9PiB7XG5cdG9uQ3JlYXRlQ2FsbGJhY2soaW5zdGFuY2UpO1xuXHRpbnN0YW5jZS5zZXRDb250ZW50KGdldENvbnRlbnQoaW5zdGFuY2UucmVmZXJlbmNlKSk7XG59O1xuXG5jb25zdCB0aXBweUZvckNpdGl6ZW5IZWFkZXIgPSAoJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KTogdm9pZCA9PiB7XG5cdGlmIChXR19TS0lOICE9PSAnY2l0aXplbicpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRmb3IgKGNvbnN0IGVsZW1lbnQgb2YgJGJvZHkuZmluZChcblx0XHQnLmNpdGl6ZW4taGVhZGVyIGxhYmVsW3RpdGxlXSwuY2l0aXplbi1oZWFkZXIgLm13LWVjaG8tbm90aWZpY2F0aW9ucy1iYWRnZSwuY2l0aXplbi1oZWFkZXJfX2xvZ28gYSwucGFnZS1hY3Rpb25zPm5hdj51bD5saSBhLC5wYWdlLWFjdGlvbnNfX2J1dHRvbidcblx0KSkge1xuXHRcdGNvbnN0ICRlbGVtZW50OiBKUXVlcnkgPSAkKGVsZW1lbnQpO1xuXHRcdGxldCB0aXRsZTogc3RyaW5nIHwgdW5kZWZpbmVkID0gJGVsZW1lbnQuYXR0cigndGl0bGUnKTtcblx0XHRpZiAoIXRpdGxlKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHR0aXRsZSA9IHRpdGxlLnJlcGxhY2UoL1xccyo/XFxbLis/XSQvLCAnJyk7XG5cblx0XHQkZWxlbWVudC5hdHRyKHtcblx0XHRcdCdhcmlhLWxhYmVsJzogdGl0bGUsXG5cdFx0XHR0aXRsZTogJycsXG5cdFx0fSk7XG5cdFx0dGlwcHkoJGVsZW1lbnQuZ2V0KDApIGFzIEhUTUxFbGVtZW50LCB7XG5cdFx0XHRhcnJvdzogdHJ1ZSxcblx0XHRcdGNvbnRlbnQ6IHRpdGxlLFxuXHRcdFx0cGxhY2VtZW50OiAnYm90dG9tJyxcblx0XHRcdG9uQ3JlYXRlOiBvbkNyZWF0ZUNhbGxiYWNrLFxuXHRcdFx0b25IaWRkZW46IG9uQ3JlYXRlQ2FsbGJhY2ssXG5cdFx0XHRvblNob3c6IG9uU2hvd0NhbGxiYWNrLFxuXHRcdH0pO1xuXHR9XG59O1xuXG5jb25zdCB0aXBweUZvckV4dGVuc2lvbiA9IGFzeW5jICgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0YXdhaXQgbXcubG9hZGVyLnVzaW5nKCdleHQuQ29sbGFwc2libGVTaWRlYmFyLmpzJyk7XG5cdHRpcHB5KCcjc2lkZWJhckJ1dHRvbicsIHtcblx0XHRhcnJvdzogdHJ1ZSxcblx0XHRjb250ZW50OiBnZXRDb250ZW50LFxuXHRcdHBsYWNlbWVudDogJ2xlZnQnLFxuXHRcdG9uQ3JlYXRlOiBvbkNyZWF0ZUNhbGxiYWNrLFxuXHRcdG9uSGlkZGVuOiBvbkNyZWF0ZUNhbGxiYWNrLFxuXHRcdG9uU2hvdzogb25TaG93Q2FsbGJhY2ssXG5cdH0pO1xuXG5cdGlmIChXR19TS0lOID09PSAndmVjdG9yJykge1xuXHRcdGF3YWl0IG13LmxvYWRlci51c2luZygnZXh0LkNvbGxhcHNpYmxlU2lkZWJhci52ZWN0b3InKTtcblx0XHR0aXBweSgnI3NpZGViYXJDb2xsYXBzZScsIHtcblx0XHRcdGFycm93OiB0cnVlLFxuXHRcdFx0Y29udGVudDogZ2V0Q29udGVudCxcblx0XHRcdHBsYWNlbWVudDogJ3JpZ2h0Jyxcblx0XHRcdG9uQ3JlYXRlOiBvbkNyZWF0ZUNhbGxiYWNrLFxuXHRcdFx0b25IaWRkZW46IG9uQ3JlYXRlQ2FsbGJhY2ssXG5cdFx0XHRvblNob3c6IG9uU2hvd0NhbGxiYWNrLFxuXHRcdH0pO1xuXHR9XG5cblx0YXdhaXQgbXcubG9hZGVyLnVzaW5nKCdleHQuRGFya01vZGUnKTtcblx0dGlwcHkoJyNkYXJrbW9kZS1idXR0b24nLCB7XG5cdFx0YXJyb3c6IHRydWUsXG5cdFx0Y29udGVudDogZ2V0Q29udGVudCxcblx0XHRwbGFjZW1lbnQ6ICdsZWZ0Jyxcblx0XHRvbkNyZWF0ZTogb25DcmVhdGVDYWxsYmFjayxcblx0XHRvbkhpZGRlbjogb25DcmVhdGVDYWxsYmFjayxcblx0XHRvblNob3c6IG9uU2hvd0NhbGxiYWNrLFxuXHR9KTtcbn07XG5cbmV4cG9ydCB7dGlwcHlGb3JDaXRpemVuSGVhZGVyLCB0aXBweUZvckV4dGVuc2lvbn07XG4iLCAiY29uc3QgZGVwcmVjYXRlZEZ1bmN0aW9ucyA9ICgpOiB2b2lkID0+IHtcblx0LyohXG5cdCAqIG1haW50ZW5hbmNlOiBTb21lIHVzZXIgc2NyaXB0cyBtYXkgYmUgdXNpbmcgdGhlIGZvbGxvd2luZyBkZXByZWNhdGVkIGZ1bmN0aW9ucy5cblx0ICogVGhlc2UgZnVuY3Rpb25zIGFyZSBubyBsb25nZXIgc3VwcG9ydGVkIGFuZCBzaG91bGQgYmUgdXBkYXRlZC5cblx0ICovXG5cdG13LmxvZy5kZXByZWNhdGUoXG5cdFx0d2luZG93LFxuXHRcdCdpbXBvcnRTY3JpcHQnLFxuXHRcdCh0aXRsZTogc3RyaW5nKTogSFRNTFNjcmlwdEVsZW1lbnQgPT4ge1xuXHRcdFx0cmV0dXJuIG13LmxvYWRlci5hZGRTY3JpcHRUYWcoXG5cdFx0XHRcdG13LnV0aWwuZ2V0VXJsKHRpdGxlLCB7XG5cdFx0XHRcdFx0YWN0aW9uOiAncmF3Jyxcblx0XHRcdFx0XHRjdHlwZTogJ3RleHQvamF2YXNjcmlwdCcsXG5cdFx0XHRcdFx0bWF4YWdlOiAnMzYwMCcsXG5cdFx0XHRcdFx0c21heGFnZTogJzM2MDAnLFxuXHRcdFx0XHR9KVxuXHRcdFx0KTtcblx0XHR9LFxuXHRcdCdVc2UgbXcubG9hZGVyLmFkZFNjcmlwdFRhZygpIGluc3RlYWQnXG5cdCk7XG5cdG13LmxvZy5kZXByZWNhdGUoXG5cdFx0d2luZG93LFxuXHRcdCdpbXBvcnRTdHlsZXNoZWV0Jyxcblx0XHQodGl0bGU6IHN0cmluZyk6IEhUTUxMaW5rRWxlbWVudCA9PiB7XG5cdFx0XHRyZXR1cm4gbXcubG9hZGVyLmFkZExpbmtUYWcoXG5cdFx0XHRcdG13LnV0aWwuZ2V0VXJsKHRpdGxlLCB7XG5cdFx0XHRcdFx0YWN0aW9uOiAncmF3Jyxcblx0XHRcdFx0XHRjdHlwZTogJ3RleHQvY3NzJyxcblx0XHRcdFx0XHRtYXhhZ2U6ICczNjAwJyxcblx0XHRcdFx0XHRzbWF4YWdlOiAnMzYwMCcsXG5cdFx0XHRcdH0pLFxuXHRcdFx0XHQndGV4dC9jc3MnXG5cdFx0XHQpO1xuXHRcdH0sXG5cdFx0J1VzZSBtdy5sb2FkZXIuYWRkTGlua1RhZygpIGluc3RlYWQnXG5cdCk7XG5cdG13LmxvZy5kZXByZWNhdGUoXG5cdFx0d2luZG93LFxuXHRcdCdpbXBvcnRTY3JpcHRVUkknLFxuXHRcdChtb2R1bGVzOiBzdHJpbmcpOiBIVE1MU2NyaXB0RWxlbWVudCA9PiB7XG5cdFx0XHRyZXR1cm4gbXcubG9hZGVyLmFkZFNjcmlwdFRhZyhtdy51dGlsLndpa2lVcmxlbmNvZGUobW9kdWxlcykpO1xuXHRcdH0sXG5cdFx0J1VzZSBtdy5sb2FkZXIuYWRkU2NyaXB0VGFnKCkgb3IgbXcubG9hZGVyLmdldFNjcmlwdCgpIGluc3RlYWQnXG5cdCk7XG5cdG13LmxvZy5kZXByZWNhdGUoXG5cdFx0d2luZG93LFxuXHRcdCdpbXBvcnRTdHlsZXNoZWV0VVJJJyxcblx0XHQobW9kdWxlczogc3RyaW5nKTogSFRNTExpbmtFbGVtZW50ID0+IHtcblx0XHRcdHJldHVybiBtdy5sb2FkZXIuYWRkTGlua1RhZyhtdy51dGlsLndpa2lVcmxlbmNvZGUobW9kdWxlcyksICd0ZXh0L2NzcycpO1xuXHRcdH0sXG5cdFx0J1VzZSBtdy5sb2FkZXIuYWRkTGlua1RhZygpIGluc3RlYWQnXG5cdCk7XG5cdG13LmxvZy5kZXByZWNhdGUoXG5cdFx0d2luZG93LFxuXHRcdC8vIEB0cy1leHBlY3QtZXJyb3IgVFMyMzQ1XG5cdFx0J2ltcG9ydFNjcmlwdENhbGxiYWNrJyxcblx0XHQodGl0bGU6IHN0cmluZywgcmVhZHk6IG5ldmVyKTogdm9pZCA9PiB7XG5cdFx0XHR2b2lkIG13LmxvYWRlclxuXHRcdFx0XHQuZ2V0U2NyaXB0KFxuXHRcdFx0XHRcdG13LnV0aWwuZ2V0VXJsKHRpdGxlLCB7XG5cdFx0XHRcdFx0XHRhY3Rpb246ICdyYXcnLFxuXHRcdFx0XHRcdFx0Y3R5cGU6ICd0ZXh0L2phdmFzY3JpcHQnLFxuXHRcdFx0XHRcdFx0bWF4YWdlOiAnMzYwMCcsXG5cdFx0XHRcdFx0XHRzbWF4YWdlOiAnMzYwMCcsXG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0KVxuXHRcdFx0XHQudGhlbihyZWFkeSk7XG5cdFx0fSxcblx0XHQnVXNlIG13LmxvYWRlci5nZXRTY3JpcHQoKSBpbnN0ZWFkJ1xuXHQpO1xuXHRtdy5sb2cuZGVwcmVjYXRlKFxuXHRcdHdpbmRvdyxcblx0XHQvLyBAdHMtZXhwZWN0LWVycm9yIFRTMjM0NVxuXHRcdCdpbXBvcnRTY3JpcHRVUklDYWxsYmFjaycsXG5cdFx0KHVybDogc3RyaW5nLCByZWFkeTogbmV2ZXIpOiB2b2lkID0+IHtcblx0XHRcdHZvaWQgbXcubG9hZGVyLmdldFNjcmlwdCh1cmwpLnRoZW4ocmVhZHkpO1xuXHRcdH0sXG5cdFx0J1VzZSBtdy5sb2FkZXIuZ2V0U2NyaXB0KCkgaW5zdGVhZCdcblx0KTtcblx0LyoqXG5cdCAqIG1haW50ZW5hbmNlOiBTb21lIHVzZXIgc2NyaXB0cyBtYXkgYmUgdXNpbmcgdGhlIGZvbGxvd2luZyBkZXByZWNhdGVkIGZ1bmN0aW9ucy5cblx0ICogVGhlc2UgZnVuY3Rpb25zIGFyZSBrZXB0IGZvciBjb21wYWJpbGl0eS5cblx0ICovXG5cdC8vIG13LmxvZy5kZXByZWNhdGUod2luZG93LCAnSlNDb25maWcnLCB7fSwgJ1VzZSB7fSBpbnN0ZWFkJyk7XG5cdC8qKlxuXHQgKiB3Z1UqUyBmdW5jdGlvbnMgaGF2ZSBiZWVuIHNwbGl0IHRvIGEgc2VwZXJhdGUgZ2FkZ2V0IChleHQuZ2FkZ2V0LmkxOG4pLlxuXHQgKi9cbn07XG5cbmV4cG9ydCB7ZGVwcmVjYXRlZEZ1bmN0aW9uc307XG4iLCAiaW1wb3J0IHtcblx0YWRkVGFyZ2V0QmxhbmssXG5cdGZpeExvY2F0aW9uSGFzaCxcblx0aGlkZU5ld1VzZXJzTG9nLFxuXHRoaWdoTGlnaHRSZXYsXG5cdGxvYWRXaXRoVVJMLFxuXHRub1Blcm1XYXJuaW5nLFxuXHRvcGVuU2VhcmNoSW5OZXdUYWIsXG5cdHJlbW92ZVRpdGxlRnJvbVBlcm1hbGluayxcblx0dGl0bGVDbGVhblVwLFxuXHR0b2dnbGVMaW5rLFxuXHR1bmloYW5Qb3B1cCxcbn0gZnJvbSAnLi9tb2R1bGVzL2NvcmUnO1xuaW1wb3J0IHt0aXBweUZvckNpdGl6ZW5IZWFkZXIsIHRpcHB5Rm9yRXh0ZW5zaW9ufSBmcm9tICcuL21vZHVsZXMvdGlwcHknO1xuaW1wb3J0IHtkZXByZWNhdGVkRnVuY3Rpb25zfSBmcm9tICcuL21vZHVsZXMvZGVwcmVjYXRlZEZ1bmN0aW9ucyc7XG5cbihmdW5jdGlvbiBzaXRlQ29tbW9uKCk6IHZvaWQge1xuXHRpZiAobXcuY29uZmlnLmdldCgnd2dTaXRlQ29tbW9uSW5zdGFsbGVkJykpIHtcblx0XHRyZXR1cm47XG5cdH1cblx0bXcuY29uZmlnLnNldCgnd2dTaXRlQ29tbW9uSW5zdGFsbGVkJywgdHJ1ZSk7XG5cblx0Ly8gQ29yZSBtb2R1bGVzXG5cdHZvaWQgbG9hZFdpdGhVUkwoKTtcblx0bm9QZXJtV2FybmluZygpO1xuXHRmaXhMb2NhdGlvbkhhc2goKTtcblxuXHQkKCgpOiB2b2lkID0+IHtcblx0XHRjb25zdCAkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4gPSAkKCdib2R5Jyk7XG5cblx0XHQvLyBDb3JlIG1vZHVsZXMgKG5lZWQgJC5yZWFkeSlcblx0XHRoaWdoTGlnaHRSZXYoJGJvZHkpO1xuXHRcdGFkZFRhcmdldEJsYW5rKCRib2R5KTtcblx0XHRyZW1vdmVUaXRsZUZyb21QZXJtYWxpbmsoJGJvZHkpO1xuXHRcdG9wZW5TZWFyY2hJbk5ld1RhYigkYm9keSk7XG5cdFx0dGl0bGVDbGVhblVwKCRib2R5KTtcblx0XHR1bmloYW5Qb3B1cCgkYm9keSk7XG5cdFx0aGlkZU5ld1VzZXJzTG9nKCRib2R5KTtcblx0XHR0b2dnbGVMaW5rKCRib2R5KTtcblxuXHRcdC8vIFRpcHB5LXJlbGF0ZWQgY29kZXMgKG5lZWQgJC5yZWFkeSlcblx0XHR0aXBweUZvckNpdGl6ZW5IZWFkZXIoJGJvZHkpO1xuXHR9KTtcblxuXHQvLyBEZXByZWNhdGVkIGZ1bmN0aW9uc1xuXHRkZXByZWNhdGVkRnVuY3Rpb25zKCk7XG5cblx0Ly8gVGlwcHktcmVsYXRlZCBjb2Rlc1xuXHR2b2lkIHRpcHB5Rm9yRXh0ZW5zaW9uKCk7XG59KSgpO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsV0FBMEJDLEdBQUdDLEtBQUtDLGNBQWMsTUFBTTtBQUM1RCxJQUFNQyxnQkFBK0JILEdBQUdDLEtBQUtDLGNBQWMsV0FBVztBQUN0RSxJQUFNRSxjQUE2QkosR0FBR0MsS0FBS0MsY0FBYyxTQUFTO0FBQ2xFLElBQU1HLGNBQTZCTCxHQUFHQyxLQUFLQyxjQUFjLFFBQVE7QUFDakUsSUFBTUksVUFBeUJOLEdBQUdDLEtBQUtDLGNBQWMsS0FBSztBQUMxRCxJQUFNSyxlQUE4QlAsR0FBR0MsS0FBS0MsY0FBYyxTQUFTO0FBQ25FLElBQU1NLGNBQTZCUixHQUFHQyxLQUFLQyxjQUFjLFFBQVE7QUFDakUsSUFBTU8sa0JBQWlDVCxHQUFHQyxLQUFLQyxjQUFjLFlBQVk7QUFFekUsSUFBTVEsWUFBd0NWLEdBQUdXLE9BQU9DLElBQUksVUFBVTtBQUN0RSxJQUFNQyxpQ0FBaURiLEdBQUdXLE9BQU9DLElBQUksNEJBQTRCO0FBQ2pHLElBQU1FLHNCQUE4QmQsR0FBR1csT0FBT0MsSUFBSSxtQkFBbUI7QUFDckUsSUFBTUcsZUFBdUJmLEdBQUdXLE9BQU9DLElBQUksWUFBWTtBQUN2RCxJQUFNSSxZQUFvQmhCLEdBQUdXLE9BQU9DLElBQUksVUFBVTtBQUNsRCxJQUFNSyxVQUFrQmpCLEdBQUdXLE9BQU9DLElBQUksTUFBTTtBQUM1QyxJQUFNTSxlQUE4QmxCLEdBQUdXLE9B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QUFHa0MsT0FDTjJKLFVBQ0E3TCxHQUFHQyxLQUFLbUMsT0FBT2dELE9BQU87UUFDckIvQyxRQUFRO1FBQ1JDLE9BQU87UUFDUEMsUUFBUTtRQUNSQyxTQUFTO01BQ1YsQ0FBQyxDQUNGLEVBQ0MwRixLQUFLMEQsS0FBSztJQUNiO0lBQ0E7RUFDRDtBQUNBNUwsS0FBR3NMLElBQUlDO0lBQ045Rzs7SUFFQTtJQUNBLENBQUNxSCxLQUFhRixVQUF1QjtBQUNwQyxXQUFLNUwsR0FBR2tDLE9BQU8ySixVQUFVQyxHQUFHLEVBQUU1RCxLQUFLMEQsS0FBSztJQUN6QztJQUNBO0VBQ0Q7QUFTRDs7Q0N2RUMsU0FBU0csYUFBbUI7QUFDNUIsTUFBSS9MLEdBQUdXLE9BQU9DLElBQUksdUJBQXVCLEdBQUc7QUFDM0M7RUFDRDtBQUNBWixLQUFHVyxPQUFPcUwsSUFBSSx5QkFBeUIsSUFBSTtBQUczQyxPQUFLbEssWUFBWTtBQUNqQnlDLGdCQUFjO0FBQ2R5RSxrQkFBZ0I7QUFFaEI3QyxJQUFFLE1BQVk7QUFDYixVQUFNYixRQUFpQ2EsRUFBRSxNQUFNO0FBRy9DZCxpQkFBYUMsS0FBSztBQUNsQlEsbUJBQWVSLEtBQUs7QUFDcEJ1Qiw2QkFBeUJ2QixLQUFLO0FBQzlCMkIsdUJBQW1CM0IsS0FBSztBQUN4QmdDLGlCQUFhaEMsS0FBSztBQUNsQnlDLGdCQUFZekMsS0FBSztBQUNqQjRELG9CQUFnQjVELEtBQUs7QUFDckJpRSxlQUFXakUsS0FBSztBQUdoQm1GLDBCQUFzQm5GLEtBQUs7RUFDNUIsQ0FBQztBQUdEK0Ysc0JBQW9CO0FBR3BCLE9BQUtGLGtCQUFrQjtBQUN4QixHQUFHOyIsCiAgIm5hbWVzIjogWyJVUkxfRElGRiIsICJtdyIsICJ1dGlsIiwgImdldFBhcmFtVmFsdWUiLCAiVVJMX0hJR0hMSUdIVCIsICJVUkxfSElMSUdIVCIsICJVUkxfTk9fUEVSTSIsICJVUkxfVVNFIiwgIlVSTF9XSVRIX0NTUyIsICJVUkxfV0lUSF9KUyIsICJVUkxfV0lUSF9NT0RVTEUiLCAiV0dfQUNUSU9OIiwgImNvbmZpZyIsICJnZXQiLCAiV0dfQ0FOT05JQ0FMX1NQRUNJQUxfUEFHRV9OQU1FIiwgIldHX05BTUVTUEFDRV9OVU1CRVIiLCAiV0dfUEFHRV9OQU1FIiwgIldHX1NDUklQVCIsICJXR19TS0lOIiwgIldHX1VTRVJfTkFNRSIsICJpbXBvcnRfZXh0X2dhZGdldDIiLCAiX190b0VTTSIsICJyZXF1aXJlIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgImdldEkxOG5NZXNzYWdlcyIsICJOb3RlIiwgImxvY2FsaXplIiwgImVuIiwgImkxOG5NZXNzYWdlcyIsICJnZXRNZXNzYWdlIiwgImtleSIsICJsb2FkV2l0aFVSTCIsICJfcmVmIiwgIl9hc3luY1RvR2VuZXJhdG9yIiwgInRlc3QiLCAibG9hZGVyIiwgImxvYWQiLCAiZ2V0VXJsIiwgImFjdGlvbiIsICJjdHlwZSIsICJtYXhhZ2UiLCAic21heGFnZSIsICJyZXF1aXJlMiIsICJ1c2luZyIsICJ3Z1VzZXJOYW1lIiwgImVzY2FwZVJlZ0V4cCIsICJSRUdFWF9GSUxFIiwgIlJlZ0V4cCIsICJjb25jYXQiLCAiUkVHRVhfRVhUIiwgInBhdGgiLCAiX2l0ZXJhdG9yMiIsICJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsICJzcGxpdCIsICJfc3RlcDIiLCAicyIsICJuIiwgImRvbmUiLCAiX1JFR0VYX0ZJTEUkZXhlYyIsICJ1c2VGaWxlIiwgInZhbHVlIiwgIm5hbWUiLCAidG9TdHJpbmciLCAidHJpbSIsICJ3aGF0IiwgImV4ZWMiLCAiZW5jb2RlVVJJQ29tcG9uZW50IiwgImVyciIsICJlIiwgImYiLCAiYXBwbHkiLCAiYXJndW1lbnRzIiwgIm5vUGVybVdhcm5pbmciLCAibm90aWZ5IiwgIndpbmRvdyIsICJ3Z1VMUyIsICJ0YWciLCAidHlwZSIsICJuZXdVcmwiLCAibG9jYXRpb24iLCAiaHJlZiIsICJyZXBsYWNlIiwgImhpc3RvcnkiLCAicHVzaFN0YXRlIiwgImRvY3VtZW50IiwgInRpdGxlIiwgImhpZ2hMaWdodFJldiIsICIkYm9keSIsICJoaWdobGlnaHQiLCAiX2l0ZXJhdG9yMyIsICJfc3RlcDMiLCAidmVyc2lvbiIsICJmaW5kIiwgInBhcmVudCIsICJhZGRDbGFzcyIsICJhZGRUYXJnZXRCbGFuayIsICJmaWx0ZXIiLCAiX2luZGV4IiwgImVsZW1lbnQiLCAibGlua0hyZWYiLCAiJCIsICJhdHRyIiwgImhyZWZTcGxpdCIsICJsZW5ndGgiLCAiaG9zdCIsICJpbmNsdWRlcyIsICJwcm90b2NvbCIsICJob3N0bmFtZSIsICJ0YXJnZXQiLCAicmVsIiwgInJlbW92ZVRpdGxlRnJvbVBlcm1hbGluayIsICIkcGVybWFMaW5rIiwgIl8kcGVybWFMaW5rRmlyc3RDaGlsZCIsICIkcGVybWFMaW5rRmlyc3RDaGlsZCIsICJvcGVuU2VhcmNoSW5OZXdUYWIiLCAib24iLCAiZXZlbnQiLCAiY3RybEtleSIsICJtZXRhS2V5IiwgInRpdGxlQ2xlYW5VcCIsICJmdWxsUGFnZU5hbWUiLCAiVGl0bGUiLCAiZ2V0UHJlZml4ZWRUZXh0IiwgIiRmaXJzdEhlYWRpbmciLCAiZG9jdW1lbnRUaXRsZSIsICJwYWdlVGl0bGUiLCAidGV4dCIsICJyZXBsYWNlVGl0bGUiLCAidW5paGFuUG9wdXAiLCAiZWFjaCIsICIkZWxlbWVudCIsICJ0aGVuIiwgInBvcHVwIiwgIk9PIiwgInVpIiwgIlBvcHVwV2lkZ2V0IiwgIiRjb250ZW50IiwgImRlZmF1bHQiLCAiY3JlYXRlRWxlbWVudCIsICJsYWJlbCIsICJhbmNob3IiLCAiaGVhZCIsICJwYWRkZWQiLCAiYXBwZW5kIiwgInRvZ2dsZSIsICJmaXhMb2NhdGlvbkhhc2giLCAiaGFzaCIsICJoaWRlTmV3VXNlcnNMb2ciLCAiJG5ld1VzZXJzTG9nIiwgInByb3AiLCAiY2hlY2tlZCIsICJkaXNhYmxlZCIsICJ0b2dnbGVMaW5rIiwgIl8kdG9nZ2xlciRwYXJlbnQkIiwgIiR0b2dnbGVyIiwgInN0eWxlIiwgImNvbG9yIiwgImNzcyIsICJpbXBvcnRfZXh0X2dhZGdldDMiLCAiZ2V0Q29udGVudCIsICJyZWZlcmVuY2UiLCAiX3JlZmVyZW5jZSRnZXRBdHRyaWJ1IiwgImdldEF0dHJpYnV0ZSIsICJ0ZXh0Q29udGVudCIsICJvbkNyZWF0ZUNhbGxiYWNrIiwgImluc3RhbmNlIiwgInNldEF0dHJpYnV0ZSIsICJyZW1vdmVBdHRyaWJ1dGUiLCAib25TaG93Q2FsbGJhY2siLCAic2V0Q29udGVudCIsICJ0aXBweUZvckNpdGl6ZW5IZWFkZXIiLCAiX2l0ZXJhdG9yNCIsICJfc3RlcDQiLCAidGlwcHkiLCAiYXJyb3ciLCAiY29udGVudCIsICJwbGFjZW1lbnQiLCAib25DcmVhdGUiLCAib25IaWRkZW4iLCAib25TaG93IiwgInRpcHB5Rm9yRXh0ZW5zaW9uIiwgIl9yZWYyIiwgImRlcHJlY2F0ZWRGdW5jdGlvbnMiLCAibG9nIiwgImRlcHJlY2F0ZSIsICJhZGRTY3JpcHRUYWciLCAiYWRkTGlua1RhZyIsICJtb2R1bGVzIiwgIndpa2lVcmxlbmNvZGUiLCAicmVhZHkiLCAiZ2V0U2NyaXB0IiwgInVybCIsICJzaXRlQ29tbW9uIiwgInNldCJdCn0K

})();

/* </nowiki> */

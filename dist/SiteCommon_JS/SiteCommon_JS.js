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
      void mw.loader.using("").then((require2) => {
        mw.loader.load(mw.util.getUrl(URL_WITH_JS, {
          action: "raw",
          ctype: "text/javascript",
          maxage: "3600",
          smaxage: "3600"
        }));
      });
    }
    if (URL_WITH_MODULE && /^ext\.[^,|]+$/.test(URL_WITH_MODULE)) {
      void mw.loader.using(URL_WITH_MODULE).then((require2) => {
        mw.loader.load(URL_WITH_MODULE);
      });
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
            void mw.loader.using("").then((require2) => {
              mw.loader.load("".concat(path, "javascript&title=").concat(encodeURIComponent(name)));
            });
            break;
          case "css":
            mw.loader.load("".concat(path, "css&title=").concat(encodeURIComponent(name)));
            break;
          default:
            if (REGEX_EXT.test(name)) {
              void mw.loader.using(name).then((require2) => {
                mw.loader.load(name);
              });
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1NpdGVDb21tb25fSlMvbW9kdWxlcy9jb25zdGFudC50cyIsICJzcmMvU2l0ZUNvbW1vbl9KUy9tb2R1bGVzL2NvcmUudHN4IiwgInNyYy9TaXRlQ29tbW9uX0pTL21vZHVsZXMvaTE4bi50cyIsICJzcmMvU2l0ZUNvbW1vbl9KUy9tb2R1bGVzL3RpcHB5LnRzIiwgInNyYy9TaXRlQ29tbW9uX0pTL21vZHVsZXMvZGVwcmVjYXRlZEZ1bmN0aW9ucy50cyIsICJzcmMvU2l0ZUNvbW1vbl9KUy9TaXRlQ29tbW9uX0pTLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBVUkxfRElGRjogc3RyaW5nIHwgbnVsbCA9IG13LnV0aWwuZ2V0UGFyYW1WYWx1ZSgnZGlmZicpO1xuY29uc3QgVVJMX0hJR0hMSUdIVDogc3RyaW5nIHwgbnVsbCA9IG13LnV0aWwuZ2V0UGFyYW1WYWx1ZSgnaGlnaGxpZ2h0Jyk7XG5jb25zdCBVUkxfSElMSUdIVDogc3RyaW5nIHwgbnVsbCA9IG13LnV0aWwuZ2V0UGFyYW1WYWx1ZSgnaGlsaWdodCcpO1xuY29uc3QgVVJMX05PX1BFUk06IHN0cmluZyB8IG51bGwgPSBtdy51dGlsLmdldFBhcmFtVmFsdWUoJ25vcGVybScpO1xuY29uc3QgVVJMX1VTRTogc3RyaW5nIHwgbnVsbCA9IG13LnV0aWwuZ2V0UGFyYW1WYWx1ZSgndXNlJyk7XG5jb25zdCBVUkxfV0lUSF9DU1M6IHN0cmluZyB8IG51bGwgPSBtdy51dGlsLmdldFBhcmFtVmFsdWUoJ3dpdGhDU1MnKTtcbmNvbnN0IFVSTF9XSVRIX0pTOiBzdHJpbmcgfCBudWxsID0gbXcudXRpbC5nZXRQYXJhbVZhbHVlKCd3aXRoSlMnKTtcbmNvbnN0IFVSTF9XSVRIX01PRFVMRTogc3RyaW5nIHwgbnVsbCA9IG13LnV0aWwuZ2V0UGFyYW1WYWx1ZSgnd2l0aE1vZHVsZScpO1xuXG5jb25zdCBXR19BQ1RJT046IE1lZGlhV2lraUNvbmZpZ01hcFdnQWN0aW9uID0gbXcuY29uZmlnLmdldCgnd2dBY3Rpb24nKTtcbmNvbnN0IFdHX0NBTk9OSUNBTF9TUEVDSUFMX1BBR0VfTkFNRTogc3RyaW5nIHwgZmFsc2UgPSBtdy5jb25maWcuZ2V0KCd3Z0Nhbm9uaWNhbFNwZWNpYWxQYWdlTmFtZScpO1xuY29uc3QgV0dfTkFNRVNQQUNFX05VTUJFUjogbnVtYmVyID0gbXcuY29uZmlnLmdldCgnd2dOYW1lc3BhY2VOdW1iZXInKTtcbmNvbnN0IFdHX1BBR0VfTkFNRTogc3RyaW5nID0gbXcuY29uZmlnLmdldCgnd2dQYWdlTmFtZScpO1xuY29uc3QgV0dfU0NSSVBUOiBzdHJpbmcgPSBtdy5jb25maWcuZ2V0KCd3Z1NjcmlwdCcpO1xuY29uc3QgV0dfU0tJTjogc3RyaW5nID0gbXcuY29uZmlnLmdldCgnc2tpbicpO1xuY29uc3QgV0dfVVNFUl9OQU1FOiBzdHJpbmcgfCBudWxsID0gbXcuY29uZmlnLmdldCgnd2dVc2VyTmFtZScpO1xuXG5leHBvcnQge1xuXHRVUkxfRElGRixcblx0VVJMX0hJR0hMSUdIVCxcblx0VVJMX0hJTElHSFQsXG5cdFVSTF9OT19QRVJNLFxuXHRVUkxfVVNFLFxuXHRVUkxfV0lUSF9DU1MsXG5cdFVSTF9XSVRIX0pTLFxuXHRVUkxfV0lUSF9NT0RVTEUsXG5cdFdHX0FDVElPTixcblx0V0dfQ0FOT05JQ0FMX1NQRUNJQUxfUEFHRV9OQU1FLFxuXHRXR19OQU1FU1BBQ0VfTlVNQkVSLFxuXHRXR19QQUdFX05BTUUsXG5cdFdHX1NDUklQVCxcblx0V0dfU0tJTixcblx0V0dfVVNFUl9OQU1FLFxufTtcbiIsICJpbXBvcnQge1xuXHRVUkxfRElGRixcblx0VVJMX0hJR0hMSUdIVCxcblx0VVJMX0hJTElHSFQsXG5cdFVSTF9OT19QRVJNLFxuXHRVUkxfVVNFLFxuXHRVUkxfV0lUSF9DU1MsXG5cdFVSTF9XSVRIX0pTLFxuXHRVUkxfV0lUSF9NT0RVTEUsXG5cdFdHX0FDVElPTixcblx0V0dfQ0FOT05JQ0FMX1NQRUNJQUxfUEFHRV9OQU1FLFxuXHRXR19OQU1FU1BBQ0VfTlVNQkVSLFxuXHRXR19QQUdFX05BTUUsXG5cdFdHX1NDUklQVCxcblx0V0dfVVNFUl9OQU1FLFxufSBmcm9tICcuL2NvbnN0YW50JztcbmltcG9ydCBSZWFjdCBmcm9tICdleHQuZ2FkZ2V0LlJlYWN0JztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9pMThuJztcblxuY29uc3QgbG9hZFdpdGhVUkwgPSAoKTogdm9pZCA9PiB7XG5cdC8qKlxuXHQgKiAmd2l0aENTUz0gYW5kICZ3aXRoSlM9IFVSTCBwYXJhbWV0ZXJzXG5cdCAqIEFsbG93IHRvIHRyeSBjdXN0b20gc2NyaXB0cyBmcm9tIE1lZGlhV2lraSBzcGFjZVxuXHQgKiB3aXRob3V0IGVkaXRpbmcgcGVyc29uYWwgLmNzcyBvciAuanMgZmlsZXNcblx0ICovXG5cdGlmIChVUkxfV0lUSF9DU1MgfHwgVVJMX1dJVEhfSlMgfHwgVVJMX1dJVEhfTU9EVUxFKSB7XG5cdFx0aWYgKFVSTF9XSVRIX0NTUyAmJiAvXk1lZGlhV2lraTpbXiMlJjw9Pl0qXFwuY3NzJC8udGVzdChVUkxfV0lUSF9DU1MpKSB7XG5cdFx0XHRtdy5sb2FkZXIubG9hZChcblx0XHRcdFx0bXcudXRpbC5nZXRVcmwoVVJMX1dJVEhfQ1NTLCB7XG5cdFx0XHRcdFx0YWN0aW9uOiAncmF3Jyxcblx0XHRcdFx0XHRjdHlwZTogJ3RleHQvY3NzJyxcblx0XHRcdFx0XHRtYXhhZ2U6ICczNjAwJyxcblx0XHRcdFx0XHRzbWF4YWdlOiAnMzYwMCcsXG5cdFx0XHRcdH0pLFxuXHRcdFx0XHQndGV4dC9jc3MnXG5cdFx0XHQpO1xuXHRcdH1cblx0XHRpZiAoVVJMX1dJVEhfSlMgJiYgL15NZWRpYVdpa2k6W14jJSY8PT5dKlxcLmpzJC8udGVzdChVUkxfV0lUSF9KUykpIHtcblx0XHRcdC8vIEB0cy1leHBlY3QtZXJyb3IgVFM2MTMzXG5cdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG5cdFx0XHR2b2lkIG13LmxvYWRlci51c2luZygnJykudGhlbigocmVxdWlyZSk6IHZvaWQgPT4ge1xuXHRcdFx0XHRtdy5sb2FkZXIubG9hZChcblx0XHRcdFx0XHRtdy51dGlsLmdldFVybChVUkxfV0lUSF9KUywge1xuXHRcdFx0XHRcdFx0YWN0aW9uOiAncmF3Jyxcblx0XHRcdFx0XHRcdGN0eXBlOiAndGV4dC9qYXZhc2NyaXB0Jyxcblx0XHRcdFx0XHRcdG1heGFnZTogJzM2MDAnLFxuXHRcdFx0XHRcdFx0c21heGFnZTogJzM2MDAnLFxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdCk7XG5cdFx0XHR9KTtcblx0XHR9XG5cdFx0aWYgKFVSTF9XSVRIX01PRFVMRSAmJiAvXmV4dFxcLlteLHxdKyQvLnRlc3QoVVJMX1dJVEhfTU9EVUxFKSkge1xuXHRcdFx0Ly8gQHRzLWV4cGVjdC1lcnJvciBUUzYxMzNcblx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcblx0XHRcdHZvaWQgbXcubG9hZGVyLnVzaW5nKFVSTF9XSVRIX01PRFVMRSkudGhlbigocmVxdWlyZSk6IHZvaWQgPT4ge1xuXHRcdFx0XHRtdy5sb2FkZXIubG9hZChVUkxfV0lUSF9NT0RVTEUgYXMgc3RyaW5nKTtcblx0XHRcdH0pO1xuXHRcdH1cblx0fVxuXHQvKipcblx0ICogTG9hZCBDU1MgYW5kIEpTIGZpbGVzIHRlbXBvcmFyaWx5IHRocm91Z2ggVVJMLlxuXHQgKiAmdXNlPUZpbGUxLmNzc3xGaWxlMi5jc3N8RmlsZTMuanNcblx0ICovXG5cdGlmIChVUkxfVVNFKSB7XG5cdFx0Y29uc3Qgd2dVc2VyTmFtZTogc3RyaW5nID0gbXcudXRpbC5lc2NhcGVSZWdFeHAoV0dfVVNFUl9OQU1FID8/ICcnKTtcblx0XHRjb25zdCBSRUdFWF9GSUxFOiBSZWdFeHAgPSBuZXcgUmVnRXhwKFxuXHRcdFx0YF4oPzpNZWRpYVdpa2k6JHt3Z1VzZXJOYW1lID8gYHxVc2VyOiR7d2dVc2VyTmFtZX0vYCA6ICcnfSlbXiY8Pj0lI10qXFxcXC4oanN8Y3NzKSRgXG5cdFx0KTtcblx0XHRjb25zdCBSRUdFWF9FWFQ6IFJlZ0V4cCA9IC9eZXh0XFwuW14sXSskLztcblx0XHRjb25zdCBwYXRoOiBzdHJpbmcgPSBgJHtXR19TQ1JJUFR9P2FjdGlvbj1yYXcmY3R5cGU9dGV4dC9gO1xuXHRcdGZvciAoY29uc3QgdXNlRmlsZSBvZiBVUkxfVVNFLnNwbGl0KCd8JykpIHtcblx0XHRcdGNvbnN0IG5hbWU6IHN0cmluZyA9IHVzZUZpbGUudG9TdHJpbmcoKS50cmltKCk7XG5cdFx0XHRjb25zdCB3aGF0OiBzdHJpbmdbXSA9IFJFR0VYX0ZJTEUuZXhlYyhuYW1lKSA/PyBbJycsICcnXTtcblx0XHRcdHN3aXRjaCAod2hhdFsxXSkge1xuXHRcdFx0XHRjYXNlICdqcyc6XG5cdFx0XHRcdFx0Ly8gQHRzLWV4cGVjdC1lcnJvciBUUzYxMzNcblx0XHRcdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG5cdFx0XHRcdFx0dm9pZCBtdy5sb2FkZXIudXNpbmcoJycpLnRoZW4oKHJlcXVpcmUpOiB2b2lkID0+IHtcblx0XHRcdFx0XHRcdG13LmxvYWRlci5sb2FkKGAke3BhdGh9amF2YXNjcmlwdCZ0aXRsZT0ke2VuY29kZVVSSUNvbXBvbmVudChuYW1lKX1gKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAnY3NzJzpcblx0XHRcdFx0XHRtdy5sb2FkZXIubG9hZChgJHtwYXRofWNzcyZ0aXRsZT0ke2VuY29kZVVSSUNvbXBvbmVudChuYW1lKX1gKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRpZiAoUkVHRVhfRVhULnRlc3QobmFtZSkpIHtcblx0XHRcdFx0XHRcdC8vIEB0cy1leHBlY3QtZXJyb3IgVFM2MTMzXG5cdFx0XHRcdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG5cdFx0XHRcdFx0XHR2b2lkIG13LmxvYWRlci51c2luZyhuYW1lKS50aGVuKChyZXF1aXJlKTogdm9pZCA9PiB7XG5cdFx0XHRcdFx0XHRcdG13LmxvYWRlci5sb2FkKG5hbWUpO1xuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxufTtcblxuY29uc3Qgbm9QZXJtV2FybmluZyA9ICgpOiB2b2lkID0+IHtcblx0LyoqXG5cdCAqIExvYWQgd2FybmluZyhzKSB3aGVuIHVzZXIgaGFzIG5vIGFjY2VzcyB0byBwYWdlXG5cdCAqL1xuXHRpZiAoIVVSTF9OT19QRVJNKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdHN3aXRjaCAoVVJMX05PX1BFUk0pIHtcblx0XHRjYXNlICcwJzpcblx0XHRcdHZvaWQgbXcubm90aWZ5KFxuXHRcdFx0XHR3aW5kb3cud2dVTFMoXG5cdFx0XHRcdFx0J+WboOaKgOacr+WOn+WboO+8jOaCqOayoeacieadg+mZkOiuv+mXruebuOWFs+mhtemdouOAguiLpeacieeWkemXru+8jOivt+S4juaxgumXu+eZvuenkei/kOiQpeiAheiBlOezu+OAgicsXG5cdFx0XHRcdFx0J+WboOaKgOihk+WOn+WboO+8jOaCqOaykuacieasiumZkOioquWVj+ebuOmXnOmggemdouOAguiLpeacieeWkeWVj++8jOiri+iIh+axguiBnueZvuenkemBi+eHn+iAheiBr+ezu+OAgidcblx0XHRcdFx0KSxcblx0XHRcdFx0e3RhZzogJ25vUGVybScsIHR5cGU6ICdlcnJvcid9XG5cdFx0XHQpO1xuXHRcdFx0YnJlYWs7XG5cdFx0Y2FzZSAnMSc6XG5cdFx0XHR2b2lkIG13Lm5vdGlmeShcblx0XHRcdFx0d2luZG93LndnVUxTKFxuXHRcdFx0XHRcdCfmgqjmsqHmnInmnYPpmZDorr/pl67nm7jlhbPpobXpnaLjgILoi6XmgqjmmK/otYTmt7HnvJbogIXvvIzor7fkuI7msYLpl7vnmb7np5HmioDmnK/lm6LpmJ/ogZTns7vvvIzku6Xojrflj5bmnYPpmZDjgIInLFxuXHRcdFx0XHRcdCfmgqjmspLmnInmrIrpmZDoqKrllY/nm7jpl5zpoIHpnaLjgILoi6XmgqjmmK/os4fmt7Hnt6jogIXvvIzoq4voiIfmsYLogZ7nmb7np5HmioDooZPlnJjpmoroga/ns7vvvIzku6XnjbLlj5bmrIrpmZDjgIInXG5cdFx0XHRcdCksXG5cdFx0XHRcdHt0YWc6ICdub1Blcm0nLCB0eXBlOiAnZXJyb3InfVxuXHRcdFx0KTtcblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgJzInOlxuXHRcdFx0dm9pZCBtdy5ub3RpZnkoXG5cdFx0XHRcdHdpbmRvdy53Z1VMUyhcblx0XHRcdFx0XHQn5oKo55qE572R57uc546v5aKD5a2Y5Zyo6aOO6Zmp77yM6K+355m75b2V5ZCO57un57ut5L2/55So44CC6Iul5oKo5rKh5pyJ5rGC6Ze755m+56eR6LSm5Y+377yM6K+35rOo5YaM5ZCO55m75b2V44CCJyxcblx0XHRcdFx0XHQn5oKo55qE57ay6Lev55Kw5aKD5a2Y5Zyo6aKo6Zqq77yM6KuL55m75YWl5b6M57m857qM5L2/55So44CC6Iul5oKo5rKS5pyJ5rGC6IGe55m+56eR6LOs6Jmf77yM6KuL5rOo5YaK5b6M55m76YyE44CCJ1xuXHRcdFx0XHQpLFxuXHRcdFx0XHR7dGFnOiAnbm9QZXJtJywgdHlwZTogJ3dhcm4nfVxuXHRcdFx0KTtcblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgJzMnOlxuXHRcdFx0dm9pZCBtdy5ub3RpZnkoXG5cdFx0XHRcdHdpbmRvdy53Z1VMUyhcblx0XHRcdFx0XHQn55u45YWz5Yqf6IO95LuF5ZCR5rOo5YaM55So5oi35byA5pS+77yM6K+355m75b2V5ZCO57un57ut5L2/55So44CC6Iul5oKo5rKh5pyJ5rGC6Ze755m+56eR6LSm5Y+377yM6K+35rOo5YaM5ZCO55m75b2V44CCJyxcblx0XHRcdFx0XHQn55u46Zec5Yqf6IO95YOF5ZCR5rOo5YaK55So5oi26ZaL5pS+77yM6KuL55m75YWl5b6M57m857qM5L2/55So44CC6Iul5oKo5rKS5pyJ5rGC6IGe55m+56eR6LOs6Jmf77yM6KuL5rOo5YaK5b6M55m76YyE44CCJ1xuXHRcdFx0XHQpLFxuXHRcdFx0XHR7dGFnOiAnbm9QZXJtJywgdHlwZTogJ3dhcm4nfVxuXHRcdFx0KTtcblx0XHRcdGJyZWFrO1xuXHRcdGRlZmF1bHQ6XG5cdFx0XHR2b2lkIG13Lm5vdGlmeShcblx0XHRcdFx0d2luZG93LndnVUxTKFxuXHRcdFx0XHRcdCfmgqjmsqHmnInmnYPpmZDorr/pl67nm7jlhbPpobXpnaLjgILoi6XmnInnlpHpl67vvIzor7fkuI7msYLpl7vnmb7np5Hov5DokKXogIXogZTns7vjgIInLFxuXHRcdFx0XHRcdCfmgqjmspLmnInmrIrpmZDoqKrllY/nm7jpl5zpoIHpnaLjgILoi6XmnInnlpHllY/vvIzoq4voiIfmsYLogZ7nmb7np5HpgYvnh5/ogIXoga/ns7vjgIInXG5cdFx0XHRcdCksXG5cdFx0XHRcdHt0YWc6ICdub1Blcm0nLCB0eXBlOiAnZXJyb3InfVxuXHRcdFx0KTtcblx0fVxuXHRjb25zdCBuZXdVcmw6IHN0cmluZyA9IGxvY2F0aW9uLmhyZWYucmVwbGFjZSgvWz8mXW5vcGVybT1bMC05XSsvLCAnJyk7XG5cdGhpc3RvcnkucHVzaFN0YXRlKHt9LCBkb2N1bWVudC50aXRsZSwgbmV3VXJsKTtcbn07XG5cbmNvbnN0IGhpZ2hMaWdodFJldiA9ICgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkID0+IHtcblx0LyoqXG5cdCAqIEFkZCBoaWdobGlnaHQgdG8gcmV2aXNpb25zIHdoZW4gdXNpbmcgYCZoaWxpZ2h0PXJldmlkYCBvciBgJmhpZ2hsaWdodD1yZXZpZGBcblx0ICovXG5cdGNvbnN0IGhpZ2hsaWdodDogc3RyaW5nIHwgbnVsbCA9IFVSTF9ISUdITElHSFQgPz8gVVJMX0hJTElHSFQ7XG5cdGlmICghaGlnaGxpZ2h0IHx8IFdHX0FDVElPTiAhPT0gJ2hpc3RvcnknKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdGZvciAoY29uc3QgdmVyc2lvbiBvZiBoaWdobGlnaHQuc3BsaXQoJywnKSkge1xuXHRcdCRib2R5LmZpbmQoYGlucHV0W25hbWU9b2xkaWRdW3ZhbHVlPSR7dmVyc2lvbn1dYCkucGFyZW50KCkuYWRkQ2xhc3MoJ25vdC1wYXRyb2xsZWQnKTtcblx0fVxufTtcblxuY29uc3QgYWRkVGFyZ2V0QmxhbmsgPSAoJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KTogdm9pZCA9PiB7XG5cdC8qKlxuXHQgKiBBZGQgdGFyZ2V0PVwiYmxhbmtcIiB0byBleHRlcm5hbCBsaW5rc1xuXHQgKi9cblx0JGJvZHkuZmluZDxIVE1MQW5jaG9yRWxlbWVudD4oJ2EuZXh0ZXJuYWwsIGFbcmVsPVwibXc6RXh0TGlua1wiXScpLmZpbHRlcigoX2luZGV4LCBlbGVtZW50KTogYm9vbGVhbiA9PiB7XG5cdFx0Y29uc3QgbGlua0hyZWY6IHN0cmluZyB8IHVuZGVmaW5lZCA9ICQoZWxlbWVudCkuYXR0cignaHJlZicpO1xuXHRcdGlmIChsaW5rSHJlZikge1xuXHRcdFx0Y29uc3QgaHJlZlNwbGl0OiBzdHJpbmdbXSA9IGxpbmtIcmVmLnNwbGl0KCcvJyk7XG5cdFx0XHRpZiAoaHJlZlNwbGl0Lmxlbmd0aCA8IDMgfHwgaHJlZlNwbGl0WzJdID09PSBsb2NhdGlvbi5ob3N0KSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYgKGVsZW1lbnQuaHJlZi5pbmNsdWRlcyhgJHtsb2NhdGlvbi5wcm90b2NvbH0vLyR7bG9jYXRpb24uaG9zdG5hbWV9YCkpIHtcblx0XHRcdGVsZW1lbnQudGFyZ2V0ID0gJ19ibGFuayc7XG5cdFx0XHRpZiAoIWVsZW1lbnQucmVsLmluY2x1ZGVzKCdub29wZW5lcicpKSB7XG5cdFx0XHRcdGVsZW1lbnQucmVsICs9ICcgbm9vcGVuZXInO1xuXHRcdFx0fVxuXHRcdFx0aWYgKCFlbGVtZW50LnJlbC5pbmNsdWRlcygnbm9yZWZlcnJlcicpKSB7XG5cdFx0XHRcdGVsZW1lbnQucmVsICs9ICcgbm9yZWZlcnJlcic7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiB0cnVlO1xuXHR9KTtcbn07XG5cbmNvbnN0IHJlbW92ZVRpdGxlRnJvbVBlcm1hbGluayA9ICgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkID0+IHtcblx0LyoqXG5cdCAqIFJlbW92ZSB0aXRsZT0qIGZyb20gcGVybWFsaW5rXG5cdCAqL1xuXHRjb25zdCAkcGVybWFMaW5rOiBKUXVlcnkgPSAkYm9keS5maW5kKCcjdC1wZXJtYWxpbmsnKTtcblx0aWYgKCRwZXJtYUxpbmsubGVuZ3RoKSB7XG5cdFx0Y29uc3QgJHBlcm1hTGlua0ZpcnN0Q2hpbGQ6IEpRdWVyeTxIVE1MQW5jaG9yRWxlbWVudD4gPSAkcGVybWFMaW5rLmZpbmQ8SFRNTEFuY2hvckVsZW1lbnQ+KCc6Zmlyc3QtY2hpbGQnKTtcblx0XHRjb25zdCBocmVmOiBzdHJpbmcgfCB1bmRlZmluZWQgPSAkcGVybWFMaW5rRmlyc3RDaGlsZC5hdHRyKCdocmVmJyk/LnJlcGxhY2UoL3RpdGxlPVteJl0qJi8sICcnKTtcblx0XHRpZiAoIWhyZWYpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0JHBlcm1hTGlua0ZpcnN0Q2hpbGQuYXR0cignaHJlZicsIGhyZWYpO1xuXHR9XG59O1xuXG5jb25zdCBvcGVuU2VhcmNoSW5OZXdUYWIgPSAoJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KTogdm9pZCA9PiB7XG5cdC8qKlxuXHQgKiBPcGVuIHNlYXJjaCByZXN1bHRzIGluIGEgbmV3IHRhYiBvciB3aW5kb3dcblx0ICogd2hlbiBob2xkaW5nIGRvd24gdGhlIEN0cmwga2V5IChieSBUaW1lc2hpZnRlcilcblx0ICovXG5cdCRib2R5XG5cdFx0LmZpbmQoJyNzZWFyY2gsI3NlYXJjaGJveCwjc2VhcmNoZm9ybSwuc2VhcmNoLXR5cGVzLCNzZWFyY2gtdHlwZXMnKVxuXHRcdC5vbigna2V5ZG93biBrZXl1cCBtb3VzZWRvd24nLCAoZXZlbnQ6IEpRdWVyeS5UcmlnZ2VyZWRFdmVudDxIVE1MRWxlbWVudD4pOiB2b2lkID0+IHtcblx0XHRcdGNvbnN0IHtjdHJsS2V5LCBtZXRhS2V5LCB0YXJnZXR9ID0gZXZlbnQ7XG5cdFx0XHQkKHRhcmdldCkuYXR0cigndGFyZ2V0JywgY3RybEtleSA/PyBtZXRhS2V5ID8gJ19ibGFuaycgOiAnJyk7XG5cdFx0fSk7XG59O1xuXG5jb25zdCB0aXRsZUNsZWFuVXAgPSAoJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KTogdm9pZCA9PiB7XG5cdC8qKlxuXHQgKiBDbGVhbnVwIHRpdGxlIGZvciBhbGwgcGFnZXNcblx0ICovXG5cdGlmIChVUkxfRElGRiB8fCBXR19BQ1RJT04gIT09ICd2aWV3JyB8fCAhWzYsIDExOF0uaW5jbHVkZXMoV0dfTkFNRVNQQUNFX05VTUJFUikpIHtcblx0XHRyZXR1cm47XG5cdH1cblx0Y29uc3QgZnVsbFBhZ2VOYW1lOiBzdHJpbmcgPSBuZXcgbXcuVGl0bGUoV0dfUEFHRV9OQU1FKS5nZXRQcmVmaXhlZFRleHQoKTtcblx0Y29uc3QgJGZpcnN0SGVhZGluZzogSlF1ZXJ5ID0gJGJvZHkuZmluZCgnLmZpcnN0SGVhZGluZycpO1xuXHRjb25zdCBkb2N1bWVudFRpdGxlOiBzdHJpbmcgPSBkb2N1bWVudC50aXRsZTtcblx0Y29uc3QgcGFnZVRpdGxlOiBzdHJpbmcgPSAkZmlyc3RIZWFkaW5nLnRleHQoKTtcblx0Y29uc3QgcmVwbGFjZVRpdGxlID0gKHRpdGxlOiBzdHJpbmcpOiBzdHJpbmcgPT4gdGl0bGUucmVwbGFjZShwYWdlVGl0bGUsIGZ1bGxQYWdlTmFtZSk7XG5cdGRvY3VtZW50LnRpdGxlID0gcmVwbGFjZVRpdGxlKGRvY3VtZW50VGl0bGUpO1xuXHQkZmlyc3RIZWFkaW5nLnRleHQocmVwbGFjZVRpdGxlKHBhZ2VUaXRsZSkpO1xufTtcblxuY29uc3QgdW5paGFuUG9wdXAgPSAoJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KTogdm9pZCA9PiB7XG5cdC8qKlxuXHQgKiBEaXNwbGF5IHRpdGxlPSguKikgb2YgPHNwYW4gY2xhc3M9XCJpbmxpbmUtdW5paGFuXCI+IGFmdGVyIHRoZW0uXG5cdCAqIChiZXRhIHRlc3QpXG5cdCAqL1xuXHQvLyBEbyBub3QgZGlzcGxheSBvbiBTcGVjaWFsIFBhZ2VzXG5cdGlmIChXR19OQU1FU1BBQ0VfTlVNQkVSIDwgMCkge1xuXHRcdHJldHVybjtcblx0fVxuXHQkYm9keS5maW5kKCdhdHRyLCAuaW5saW5lLXVuaWhhbicpLmVhY2goKF9pbmRleDogbnVtYmVyLCBlbGVtZW50OiBIVE1MRWxlbWVudCk6IHZvaWQgPT4ge1xuXHRcdGNvbnN0ICRlbGVtZW50OiBKUXVlcnkgPSAkKGVsZW1lbnQpO1xuXHRcdGNvbnN0IHRpdGxlOiBzdHJpbmcgfCB1bmRlZmluZWQgPSAkZWxlbWVudC5hdHRyKCd0aXRsZScpO1xuXHRcdGlmICghdGl0bGUpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0dm9pZCBtdy5sb2FkZXIudXNpbmcoJ29vanMtdWktY29yZScpLnRoZW4oKCk6IHZvaWQgPT4ge1xuXHRcdFx0Y29uc3QgcG9wdXA6IE9PLnVpLlBvcHVwV2lkZ2V0ID0gbmV3IE9PLnVpLlBvcHVwV2lkZ2V0KHtcblx0XHRcdFx0JGNvbnRlbnQ6ICQoPHA+e3RpdGxlfTwvcD4pIGFzIEpRdWVyeSxcblx0XHRcdFx0bGFiZWw6IGdldE1lc3NhZ2UoJ05vdGUnKSxcblx0XHRcdFx0YW5jaG9yOiB0cnVlLFxuXHRcdFx0XHRoZWFkOiB0cnVlLFxuXHRcdFx0XHRwYWRkZWQ6IHRydWUsXG5cdFx0XHR9KTtcblx0XHRcdCRlbGVtZW50LmFwcGVuZChwb3B1cC4kZWxlbWVudCkub24oJ2NsaWNrJywgKCk6IHZvaWQgPT4ge1xuXHRcdFx0XHRwb3B1cC50b2dnbGUoKTtcblx0XHRcdH0pO1xuXHRcdH0pO1xuXHR9KTtcbn07XG5cbmNvbnN0IGZpeExvY2F0aW9uSGFzaCA9ICgpOiB2b2lkID0+IHtcblx0Lyog5L+u5q2j5oqY5Y+g5ZCO5a6a5L2N5Y+Y5YyWICovXG5cdGlmIChsb2NhdGlvbi5oYXNoKSB7XG5cdFx0bG9jYXRpb24uaHJlZiA9IGxvY2F0aW9uLmhhc2g7XG5cdH1cbn07XG5cbmNvbnN0IGhpZGVOZXdVc2Vyc0xvZyA9ICgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkID0+IHtcblx0Lyog5Li05pe277ya56aB5q2i55So5oi35p+l55yL55So5oi35Yib5bu65pel5b+XICovXG5cdGlmIChXR19DQU5PTklDQUxfU1BFQ0lBTF9QQUdFX05BTUUgIT09ICdMb2cnKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdGNvbnN0ICRuZXdVc2Vyc0xvZzogSlF1ZXJ5ID0gJGJvZHkuZmluZCgnaW5wdXRbbmFtZT1cIndwZmlsdGVyc1tdXCJdW3ZhbHVlPW5ld3VzZXJzXScpO1xuXHQkbmV3VXNlcnNMb2cucHJvcCh7XG5cdFx0Y2hlY2tlZDogMCxcblx0XHRkaXNhYmxlZDogJ2Rpc2FibGVkJyxcblx0fSk7XG59O1xuXG5jb25zdCB0b2dnbGVMaW5rID0gKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQgPT4ge1xuXHQvKiDosIPmlbTmipjlj6DmjInpkq7nmoTpopzoibIgKi9cblx0Y29uc3QgJHRvZ2dsZXI6IEpRdWVyeSA9ICRib2R5LmZpbmQoJy5tdy1jb2xsYXBzaWJsZS10b2dnbGUsIC5nYWRnZXQtY29sbGFwc2libGUtdG9nZ2xlcicpO1xuXHRpZiAoJHRvZ2dsZXIubGVuZ3RoICYmICR0b2dnbGVyLnBhcmVudCgpWzBdPy5zdHlsZS5jb2xvcikge1xuXHRcdCR0b2dnbGVyLmZpbmQoJ2EnKS5jc3MoJ2NvbG9yJywgJ2luaGVyaXQnKTtcblx0fVxufTtcblxuZXhwb3J0IHtcblx0bG9hZFdpdGhVUkwsXG5cdG5vUGVybVdhcm5pbmcsXG5cdGhpZ2hMaWdodFJldixcblx0YWRkVGFyZ2V0QmxhbmssXG5cdHJlbW92ZVRpdGxlRnJvbVBlcm1hbGluayxcblx0b3BlblNlYXJjaEluTmV3VGFiLFxuXHR0aXRsZUNsZWFuVXAsXG5cdHVuaWhhblBvcHVwLFxuXHRmaXhMb2NhdGlvbkhhc2gsXG5cdGhpZGVOZXdVc2Vyc0xvZyxcblx0dG9nZ2xlTGluayxcbn07XG4iLCAiaW1wb3J0IHtsb2NhbGl6ZX0gZnJvbSAnZXh0LmdhZGdldC5pMThuJztcblxuY29uc3QgZ2V0STE4bk1lc3NhZ2VzID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdE5vdGU6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnTm90ZTogJyxcblx0XHRcdCd6aC1oYW5zJzogJ+azqOmHiu+8micsXG5cdFx0XHQnemgtaGFudCc6ICfms6jph4vvvJonLFxuXHRcdH0pLFxuXHR9O1xufTtcblxuY29uc3QgaTE4bk1lc3NhZ2VzID0gZ2V0STE4bk1lc3NhZ2VzKCk7XG5cbmNvbnN0IGdldE1lc3NhZ2U6IEdldE1lc3NhZ2VzPHR5cGVvZiBpMThuTWVzc2FnZXM+ID0gKGtleSkgPT4ge1xuXHRyZXR1cm4gaTE4bk1lc3NhZ2VzW2tleV0gfHwga2V5O1xufTtcblxuZXhwb3J0IHtnZXRNZXNzYWdlfTtcbiIsICJpbXBvcnQge1dHX1NLSU59IGZyb20gJy4vY29uc3RhbnQnO1xuaW1wb3J0IHt0aXBweX0gZnJvbSAnZXh0LmdhZGdldC5UaXBweSc7XG5cbmNvbnN0IGdldENvbnRlbnQgPSAocmVmZXJlbmNlOiBFbGVtZW50KTogc3RyaW5nID0+IHtcblx0Y29uc3QgbGFiZWw6IHN0cmluZyB8IG51bGwgPSByZWZlcmVuY2UuZ2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJyk7XG5cdGNvbnN0IHRpdGxlOiBzdHJpbmcgfCBudWxsID0gcmVmZXJlbmNlLmdldEF0dHJpYnV0ZSgnYWx0JykgPz8gcmVmZXJlbmNlLmdldEF0dHJpYnV0ZSgndGl0bGUnKTtcblxuXHRyZXR1cm4gKGxhYmVsID09PSB0aXRsZSA/IGxhYmVsIDogdGl0bGUgfHwgbGFiZWwpIHx8IChyZWZlcmVuY2UudGV4dENvbnRlbnQgYXMgc3RyaW5nKTtcbn07XG5cbmNvbnN0IG9uQ3JlYXRlQ2FsbGJhY2sgPSAoaW5zdGFuY2U6IFJldHVyblR5cGU8dHlwZW9mIHRpcHB5PlswXSk6IHZvaWQgPT4ge1xuXHRjb25zdCB7cmVmZXJlbmNlfSA9IGluc3RhbmNlO1xuXHRyZWZlcmVuY2Uuc2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJywgZ2V0Q29udGVudChyZWZlcmVuY2UpKTtcblx0cmVmZXJlbmNlLnJlbW92ZUF0dHJpYnV0ZSgndGl0bGUnKTtcbn07XG5cbmNvbnN0IG9uU2hvd0NhbGxiYWNrID0gKGluc3RhbmNlOiBSZXR1cm5UeXBlPHR5cGVvZiB0aXBweT5bMF0pOiB2b2lkID0+IHtcblx0b25DcmVhdGVDYWxsYmFjayhpbnN0YW5jZSk7XG5cdGluc3RhbmNlLnNldENvbnRlbnQoZ2V0Q29udGVudChpbnN0YW5jZS5yZWZlcmVuY2UpKTtcbn07XG5cbmNvbnN0IHRpcHB5Rm9yQ2l0aXplbkhlYWRlciA9ICgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkID0+IHtcblx0aWYgKFdHX1NLSU4gIT09ICdjaXRpemVuJykge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGZvciAoY29uc3QgZWxlbWVudCBvZiAkYm9keS5maW5kKFxuXHRcdCcuY2l0aXplbi1oZWFkZXIgbGFiZWxbdGl0bGVdLC5jaXRpemVuLWhlYWRlciAubXctZWNoby1ub3RpZmljYXRpb25zLWJhZGdlLC5jaXRpemVuLWhlYWRlcl9fbG9nbyBhLC5wYWdlLWFjdGlvbnM+bmF2PnVsPmxpIGEsLnBhZ2UtYWN0aW9uc19fYnV0dG9uJ1xuXHQpKSB7XG5cdFx0Y29uc3QgJGVsZW1lbnQ6IEpRdWVyeSA9ICQoZWxlbWVudCk7XG5cdFx0bGV0IHRpdGxlOiBzdHJpbmcgfCB1bmRlZmluZWQgPSAkZWxlbWVudC5hdHRyKCd0aXRsZScpO1xuXHRcdGlmICghdGl0bGUpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdHRpdGxlID0gdGl0bGUucmVwbGFjZSgvXFxzKj9cXFsuKz9dJC8sICcnKTtcblxuXHRcdCRlbGVtZW50LmF0dHIoe1xuXHRcdFx0J2FyaWEtbGFiZWwnOiB0aXRsZSxcblx0XHRcdHRpdGxlOiAnJyxcblx0XHR9KTtcblx0XHR0aXBweSgkZWxlbWVudC5nZXQoMCkgYXMgSFRNTEVsZW1lbnQsIHtcblx0XHRcdGFycm93OiB0cnVlLFxuXHRcdFx0Y29udGVudDogdGl0bGUsXG5cdFx0XHRwbGFjZW1lbnQ6ICdib3R0b20nLFxuXHRcdFx0b25DcmVhdGU6IG9uQ3JlYXRlQ2FsbGJhY2ssXG5cdFx0XHRvbkhpZGRlbjogb25DcmVhdGVDYWxsYmFjayxcblx0XHRcdG9uU2hvdzogb25TaG93Q2FsbGJhY2ssXG5cdFx0fSk7XG5cdH1cbn07XG5cbmNvbnN0IHRpcHB5Rm9yRXh0ZW5zaW9uID0gYXN5bmMgKCk6IFByb21pc2U8dm9pZD4gPT4ge1xuXHRhd2FpdCBtdy5sb2FkZXIudXNpbmcoJ2V4dC5Db2xsYXBzaWJsZVNpZGViYXIuanMnKTtcblx0dGlwcHkoJyNzaWRlYmFyQnV0dG9uJywge1xuXHRcdGFycm93OiB0cnVlLFxuXHRcdGNvbnRlbnQ6IGdldENvbnRlbnQsXG5cdFx0cGxhY2VtZW50OiAnbGVmdCcsXG5cdFx0b25DcmVhdGU6IG9uQ3JlYXRlQ2FsbGJhY2ssXG5cdFx0b25IaWRkZW46IG9uQ3JlYXRlQ2FsbGJhY2ssXG5cdFx0b25TaG93OiBvblNob3dDYWxsYmFjayxcblx0fSk7XG5cblx0aWYgKFdHX1NLSU4gPT09ICd2ZWN0b3InKSB7XG5cdFx0YXdhaXQgbXcubG9hZGVyLnVzaW5nKCdleHQuQ29sbGFwc2libGVTaWRlYmFyLnZlY3RvcicpO1xuXHRcdHRpcHB5KCcjc2lkZWJhckNvbGxhcHNlJywge1xuXHRcdFx0YXJyb3c6IHRydWUsXG5cdFx0XHRjb250ZW50OiBnZXRDb250ZW50LFxuXHRcdFx0cGxhY2VtZW50OiAncmlnaHQnLFxuXHRcdFx0b25DcmVhdGU6IG9uQ3JlYXRlQ2FsbGJhY2ssXG5cdFx0XHRvbkhpZGRlbjogb25DcmVhdGVDYWxsYmFjayxcblx0XHRcdG9uU2hvdzogb25TaG93Q2FsbGJhY2ssXG5cdFx0fSk7XG5cdH1cblxuXHRhd2FpdCBtdy5sb2FkZXIudXNpbmcoJ2V4dC5EYXJrTW9kZScpO1xuXHR0aXBweSgnI2Rhcmttb2RlLWJ1dHRvbicsIHtcblx0XHRhcnJvdzogdHJ1ZSxcblx0XHRjb250ZW50OiBnZXRDb250ZW50LFxuXHRcdHBsYWNlbWVudDogJ2xlZnQnLFxuXHRcdG9uQ3JlYXRlOiBvbkNyZWF0ZUNhbGxiYWNrLFxuXHRcdG9uSGlkZGVuOiBvbkNyZWF0ZUNhbGxiYWNrLFxuXHRcdG9uU2hvdzogb25TaG93Q2FsbGJhY2ssXG5cdH0pO1xufTtcblxuZXhwb3J0IHt0aXBweUZvckNpdGl6ZW5IZWFkZXIsIHRpcHB5Rm9yRXh0ZW5zaW9ufTtcbiIsICJjb25zdCBkZXByZWNhdGVkRnVuY3Rpb25zID0gKCk6IHZvaWQgPT4ge1xuXHQvKiFcblx0ICogbWFpbnRlbmFuY2U6IFNvbWUgdXNlciBzY3JpcHRzIG1heSBiZSB1c2luZyB0aGUgZm9sbG93aW5nIGRlcHJlY2F0ZWQgZnVuY3Rpb25zLlxuXHQgKiBUaGVzZSBmdW5jdGlvbnMgYXJlIG5vIGxvbmdlciBzdXBwb3J0ZWQgYW5kIHNob3VsZCBiZSB1cGRhdGVkLlxuXHQgKi9cblx0bXcubG9nLmRlcHJlY2F0ZShcblx0XHR3aW5kb3csXG5cdFx0J2ltcG9ydFNjcmlwdCcsXG5cdFx0KHRpdGxlOiBzdHJpbmcpOiBIVE1MU2NyaXB0RWxlbWVudCA9PiB7XG5cdFx0XHRyZXR1cm4gbXcubG9hZGVyLmFkZFNjcmlwdFRhZyhcblx0XHRcdFx0bXcudXRpbC5nZXRVcmwodGl0bGUsIHtcblx0XHRcdFx0XHRhY3Rpb246ICdyYXcnLFxuXHRcdFx0XHRcdGN0eXBlOiAndGV4dC9qYXZhc2NyaXB0Jyxcblx0XHRcdFx0XHRtYXhhZ2U6ICczNjAwJyxcblx0XHRcdFx0XHRzbWF4YWdlOiAnMzYwMCcsXG5cdFx0XHRcdH0pXG5cdFx0XHQpO1xuXHRcdH0sXG5cdFx0J1VzZSBtdy5sb2FkZXIuYWRkU2NyaXB0VGFnKCkgaW5zdGVhZCdcblx0KTtcblx0bXcubG9nLmRlcHJlY2F0ZShcblx0XHR3aW5kb3csXG5cdFx0J2ltcG9ydFN0eWxlc2hlZXQnLFxuXHRcdCh0aXRsZTogc3RyaW5nKTogSFRNTExpbmtFbGVtZW50ID0+IHtcblx0XHRcdHJldHVybiBtdy5sb2FkZXIuYWRkTGlua1RhZyhcblx0XHRcdFx0bXcudXRpbC5nZXRVcmwodGl0bGUsIHtcblx0XHRcdFx0XHRhY3Rpb246ICdyYXcnLFxuXHRcdFx0XHRcdGN0eXBlOiAndGV4dC9jc3MnLFxuXHRcdFx0XHRcdG1heGFnZTogJzM2MDAnLFxuXHRcdFx0XHRcdHNtYXhhZ2U6ICczNjAwJyxcblx0XHRcdFx0fSksXG5cdFx0XHRcdCd0ZXh0L2Nzcydcblx0XHRcdCk7XG5cdFx0fSxcblx0XHQnVXNlIG13LmxvYWRlci5hZGRMaW5rVGFnKCkgaW5zdGVhZCdcblx0KTtcblx0bXcubG9nLmRlcHJlY2F0ZShcblx0XHR3aW5kb3csXG5cdFx0J2ltcG9ydFNjcmlwdFVSSScsXG5cdFx0KG1vZHVsZXM6IHN0cmluZyk6IEhUTUxTY3JpcHRFbGVtZW50ID0+IHtcblx0XHRcdHJldHVybiBtdy5sb2FkZXIuYWRkU2NyaXB0VGFnKG13LnV0aWwud2lraVVybGVuY29kZShtb2R1bGVzKSk7XG5cdFx0fSxcblx0XHQnVXNlIG13LmxvYWRlci5hZGRTY3JpcHRUYWcoKSBvciBtdy5sb2FkZXIuZ2V0U2NyaXB0KCkgaW5zdGVhZCdcblx0KTtcblx0bXcubG9nLmRlcHJlY2F0ZShcblx0XHR3aW5kb3csXG5cdFx0J2ltcG9ydFN0eWxlc2hlZXRVUkknLFxuXHRcdChtb2R1bGVzOiBzdHJpbmcpOiBIVE1MTGlua0VsZW1lbnQgPT4ge1xuXHRcdFx0cmV0dXJuIG13LmxvYWRlci5hZGRMaW5rVGFnKG13LnV0aWwud2lraVVybGVuY29kZShtb2R1bGVzKSwgJ3RleHQvY3NzJyk7XG5cdFx0fSxcblx0XHQnVXNlIG13LmxvYWRlci5hZGRMaW5rVGFnKCkgaW5zdGVhZCdcblx0KTtcblx0bXcubG9nLmRlcHJlY2F0ZShcblx0XHR3aW5kb3csXG5cdFx0Ly8gQHRzLWV4cGVjdC1lcnJvciBUUzIzNDVcblx0XHQnaW1wb3J0U2NyaXB0Q2FsbGJhY2snLFxuXHRcdCh0aXRsZTogc3RyaW5nLCByZWFkeTogbmV2ZXIpOiB2b2lkID0+IHtcblx0XHRcdHZvaWQgbXcubG9hZGVyXG5cdFx0XHRcdC5nZXRTY3JpcHQoXG5cdFx0XHRcdFx0bXcudXRpbC5nZXRVcmwodGl0bGUsIHtcblx0XHRcdFx0XHRcdGFjdGlvbjogJ3JhdycsXG5cdFx0XHRcdFx0XHRjdHlwZTogJ3RleHQvamF2YXNjcmlwdCcsXG5cdFx0XHRcdFx0XHRtYXhhZ2U6ICczNjAwJyxcblx0XHRcdFx0XHRcdHNtYXhhZ2U6ICczNjAwJyxcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHQpXG5cdFx0XHRcdC50aGVuKHJlYWR5KTtcblx0XHR9LFxuXHRcdCdVc2UgbXcubG9hZGVyLmdldFNjcmlwdCgpIGluc3RlYWQnXG5cdCk7XG5cdG13LmxvZy5kZXByZWNhdGUoXG5cdFx0d2luZG93LFxuXHRcdC8vIEB0cy1leHBlY3QtZXJyb3IgVFMyMzQ1XG5cdFx0J2ltcG9ydFNjcmlwdFVSSUNhbGxiYWNrJyxcblx0XHQodXJsOiBzdHJpbmcsIHJlYWR5OiBuZXZlcik6IHZvaWQgPT4ge1xuXHRcdFx0dm9pZCBtdy5sb2FkZXIuZ2V0U2NyaXB0KHVybCkudGhlbihyZWFkeSk7XG5cdFx0fSxcblx0XHQnVXNlIG13LmxvYWRlci5nZXRTY3JpcHQoKSBpbnN0ZWFkJ1xuXHQpO1xuXHQvKipcblx0ICogbWFpbnRlbmFuY2U6IFNvbWUgdXNlciBzY3JpcHRzIG1heSBiZSB1c2luZyB0aGUgZm9sbG93aW5nIGRlcHJlY2F0ZWQgZnVuY3Rpb25zLlxuXHQgKiBUaGVzZSBmdW5jdGlvbnMgYXJlIGtlcHQgZm9yIGNvbXBhYmlsaXR5LlxuXHQgKi9cblx0Ly8gbXcubG9nLmRlcHJlY2F0ZSh3aW5kb3csICdKU0NvbmZpZycsIHt9LCAnVXNlIHt9IGluc3RlYWQnKTtcblx0LyoqXG5cdCAqIHdnVSpTIGZ1bmN0aW9ucyBoYXZlIGJlZW4gc3BsaXQgdG8gYSBzZXBlcmF0ZSBnYWRnZXQgKGV4dC5nYWRnZXQuaTE4bikuXG5cdCAqL1xufTtcblxuZXhwb3J0IHtkZXByZWNhdGVkRnVuY3Rpb25zfTtcbiIsICJpbXBvcnQge1xuXHRhZGRUYXJnZXRCbGFuayxcblx0Zml4TG9jYXRpb25IYXNoLFxuXHRoaWRlTmV3VXNlcnNMb2csXG5cdGhpZ2hMaWdodFJldixcblx0bG9hZFdpdGhVUkwsXG5cdG5vUGVybVdhcm5pbmcsXG5cdG9wZW5TZWFyY2hJbk5ld1RhYixcblx0cmVtb3ZlVGl0bGVGcm9tUGVybWFsaW5rLFxuXHR0aXRsZUNsZWFuVXAsXG5cdHRvZ2dsZUxpbmssXG5cdHVuaWhhblBvcHVwLFxufSBmcm9tICcuL21vZHVsZXMvY29yZSc7XG5pbXBvcnQge3RpcHB5Rm9yQ2l0aXplbkhlYWRlciwgdGlwcHlGb3JFeHRlbnNpb259IGZyb20gJy4vbW9kdWxlcy90aXBweSc7XG5pbXBvcnQge2RlcHJlY2F0ZWRGdW5jdGlvbnN9IGZyb20gJy4vbW9kdWxlcy9kZXByZWNhdGVkRnVuY3Rpb25zJztcblxuKGZ1bmN0aW9uIHNpdGVDb21tb24oKTogdm9pZCB7XG5cdGlmIChtdy5jb25maWcuZ2V0KCd3Z1NpdGVDb21tb25JbnN0YWxsZWQnKSkge1xuXHRcdHJldHVybjtcblx0fVxuXHRtdy5jb25maWcuc2V0KCd3Z1NpdGVDb21tb25JbnN0YWxsZWQnLCB0cnVlKTtcblxuXHQvLyBDb3JlIG1vZHVsZXNcblx0bG9hZFdpdGhVUkwoKTtcblx0bm9QZXJtV2FybmluZygpO1xuXHRmaXhMb2NhdGlvbkhhc2goKTtcblxuXHQkKCgpOiB2b2lkID0+IHtcblx0XHRjb25zdCAkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4gPSAkKCdib2R5Jyk7XG5cblx0XHQvLyBDb3JlIG1vZHVsZXMgKG5lZWQgJC5yZWFkeSlcblx0XHRoaWdoTGlnaHRSZXYoJGJvZHkpO1xuXHRcdGFkZFRhcmdldEJsYW5rKCRib2R5KTtcblx0XHRyZW1vdmVUaXRsZUZyb21QZXJtYWxpbmsoJGJvZHkpO1xuXHRcdG9wZW5TZWFyY2hJbk5ld1RhYigkYm9keSk7XG5cdFx0dGl0bGVDbGVhblVwKCRib2R5KTtcblx0XHR1bmloYW5Qb3B1cCgkYm9keSk7XG5cdFx0aGlkZU5ld1VzZXJzTG9nKCRib2R5KTtcblx0XHR0b2dnbGVMaW5rKCRib2R5KTtcblxuXHRcdC8vIFRpcHB5LXJlbGF0ZWQgY29kZXMgKG5lZWQgJC5yZWFkeSlcblx0XHR0aXBweUZvckNpdGl6ZW5IZWFkZXIoJGJvZHkpO1xuXHR9KTtcblxuXHQvLyBEZXByZWNhdGVkIGZ1bmN0aW9uc1xuXHRkZXByZWNhdGVkRnVuY3Rpb25zKCk7XG5cblx0Ly8gVGlwcHktcmVsYXRlZCBjb2Rlc1xuXHR2b2lkIHRpcHB5Rm9yRXh0ZW5zaW9uKCk7XG59KSgpO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsV0FBMEJDLEdBQUdDLEtBQUtDLGNBQWMsTUFBTTtBQUM1RCxJQUFNQyxnQkFBK0JILEdBQUdDLEtBQUtDLGNBQWMsV0FBVztBQUN0RSxJQUFNRSxjQUE2QkosR0FBR0MsS0FBS0MsY0FBYyxTQUFTO0FBQ2xFLElBQU1HLGNBQTZCTCxHQUFHQyxLQUFLQyxjQUFjLFFBQVE7QUFDakUsSUFBTUksVUFBeUJOLEdBQUdDLEtBQUtDLGNBQWMsS0FBSztBQUMxRCxJQUFNSyxlQUE4QlAsR0FBR0MsS0FBS0MsY0FBYyxTQUFTO0FBQ25FLElBQU1NLGNBQTZCUixHQUFHQyxLQUFLQyxjQUFj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R2hCa0YsMEJBQXNCbEYsS0FBSztFQUM1QixDQUFDO0FBR0RpRyxzQkFBb0I7QUFHcEIsT0FBS0wsa0JBQWtCO0FBQ3hCLEdBQUc7IiwKICAibmFtZXMiOiBbIlVSTF9ESUZGIiwgIm13IiwgInV0aWwiLCAiZ2V0UGFyYW1WYWx1ZSIsICJVUkxfSElHSExJR0hUIiwgIlVSTF9ISUxJR0hUIiwgIlVSTF9OT19QRVJNIiwgIlVSTF9VU0UiLCAiVVJMX1dJVEhfQ1NTIiwgIlVSTF9XSVRIX0pTIiwgIlVSTF9XSVRIX01PRFVMRSIsICJXR19BQ1RJT04iLCAiY29uZmlnIiwgImdldCIsICJXR19DQU5PTklDQUxfU1BFQ0lBTF9QQUdFX05BTUUiLCAiV0dfTkFNRVNQQUNFX05VTUJFUiIsICJXR19QQUdFX05BTUUiLCAiV0dfU0NSSVBUIiwgIldHX1NLSU4iLCAiV0dfVVNFUl9OQU1FIiwgImltcG9ydF9leHRfZ2FkZ2V0MiIsICJfX3RvRVNNIiwgInJlcXVpcmUiLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAiZ2V0STE4bk1lc3NhZ2VzIiwgIk5vdGUiLCAibG9jYWxpemUiLCAiZW4iLCAiaTE4bk1lc3NhZ2VzIiwgImdldE1lc3NhZ2UiLCAia2V5IiwgImxvYWRXaXRoVVJMIiwgInRlc3QiLCAibG9hZGVyIiwgImxvYWQiLCAiZ2V0VXJsIiwgImFjdGlvbiIsICJjdHlwZSIsICJtYXhhZ2UiLCAic21heGFnZSIsICJ1c2luZyIsICJ0aGVuIiwgInJlcXVpcmUyIiwgIndnVXNlck5hbWUiLCAiZXNjYXBlUmVnRXhwIiwgIlJFR0VYX0ZJTEUiLCAiUmVnRXhwIiwgImNvbmNhdCIsICJSRUdFWF9FWFQiLCAicGF0aCIsICJfaXRlcmF0b3IyIiwgIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwgInNwbGl0IiwgIl9zdGVwMiIsICJzIiwgIm4iLCAiZG9uZSIsICJfUkVHRVhfRklMRSRleGVjIiwgInVzZUZpbGUiLCAidmFsdWUiLCAibmFtZSIsICJ0b1N0cmluZyIsICJ0cmltIiwgIndoYXQiLCAiZXhlYyIsICJlbmNvZGVVUklDb21wb25lbnQiLCAiZXJyIiwgImUiLCAiZiIsICJub1Blcm1XYXJuaW5nIiwgIm5vdGlmeSIsICJ3aW5kb3ciLCAid2dVTFMiLCAidGFnIiwgInR5cGUiLCAibmV3VXJsIiwgImxvY2F0aW9uIiwgImhyZWYiLCAicmVwbGFjZSIsICJoaXN0b3J5IiwgInB1c2hTdGF0ZSIsICJkb2N1bWVudCIsICJ0aXRsZSIsICJoaWdoTGlnaHRSZXYiLCAiJGJvZHkiLCAiaGlnaGxpZ2h0IiwgIl9pdGVyYXRvcjMiLCAiX3N0ZXAzIiwgInZlcnNpb24iLCAiZmluZCIsICJwYXJlbnQiLCAiYWRkQ2xhc3MiLCAiYWRkVGFyZ2V0QmxhbmsiLCAiZmlsdGVyIiwgIl9pbmRleCIsICJlbGVtZW50IiwgImxpbmtIcmVmIiwgIiQiLCAiYXR0ciIsICJocmVmU3BsaXQiLCAibGVuZ3RoIiwgImhvc3QiLCAiaW5jbHVkZXMiLCAicHJvdG9jb2wiLCAiaG9zdG5hbWUiLCAidGFyZ2V0IiwgInJlbCIsICJyZW1vdmVUaXRsZUZyb21QZXJtYWxpbmsiLCAiJHBlcm1hTGluayIsICJfJHBlcm1hTGlua0ZpcnN0Q2hpbGQiLCAiJHBlcm1hTGlua0ZpcnN0Q2hpbGQiLCAib3BlblNlYXJjaEluTmV3VGFiIiwgIm9uIiwgImV2ZW50IiwgImN0cmxLZXkiLCAibWV0YUtleSIsICJ0aXRsZUNsZWFuVXAiLCAiZnVsbFBhZ2VOYW1lIiwgIlRpdGxlIiwgImdldFByZWZpeGVkVGV4dCIsICIkZmlyc3RIZWFkaW5nIiwgImRvY3VtZW50VGl0bGUiLCAicGFnZVRpdGxlIiwgInRleHQiLCAicmVwbGFjZVRpdGxlIiwgInVuaWhhblBvcHVwIiwgImVhY2giLCAiJGVsZW1lbnQiLCAicG9wdXAiLCAiT08iLCAidWkiLCAiUG9wdXBXaWRnZXQiLCAiJGNvbnRlbnQiLCAiZGVmYXVsdCIsICJjcmVhdGVFbGVtZW50IiwgImxhYmVsIiwgImFuY2hvciIsICJoZWFkIiwgInBhZGRlZCIsICJhcHBlbmQiLCAidG9nZ2xlIiwgImZpeExvY2F0aW9uSGFzaCIsICJoYXNoIiwgImhpZGVOZXdVc2Vyc0xvZyIsICIkbmV3VXNlcnNMb2ciLCAicHJvcCIsICJjaGVja2VkIiwgImRpc2FibGVkIiwgInRvZ2dsZUxpbmsiLCAiXyR0b2dnbGVyJHBhcmVudCQiLCAiJHRvZ2dsZXIiLCAic3R5bGUiLCAiY29sb3IiLCAiY3NzIiwgImltcG9ydF9leHRfZ2FkZ2V0MyIsICJnZXRDb250ZW50IiwgInJlZmVyZW5jZSIsICJfcmVmZXJlbmNlJGdldEF0dHJpYnUiLCAiZ2V0QXR0cmlidXRlIiwgInRleHRDb250ZW50IiwgIm9uQ3JlYXRlQ2FsbGJhY2siLCAiaW5zdGFuY2UiLCAic2V0QXR0cmlidXRlIiwgInJlbW92ZUF0dHJpYnV0ZSIsICJvblNob3dDYWxsYmFjayIsICJzZXRDb250ZW50IiwgInRpcHB5Rm9yQ2l0aXplbkhlYWRlciIsICJfaXRlcmF0b3I0IiwgIl9zdGVwNCIsICJ0aXBweSIsICJhcnJvdyIsICJjb250ZW50IiwgInBsYWNlbWVudCIsICJvbkNyZWF0ZSIsICJvbkhpZGRlbiIsICJvblNob3ciLCAidGlwcHlGb3JFeHRlbnNpb24iLCAiX3JlZiIsICJfYXN5bmNUb0dlbmVyYXRvciIsICJhcHBseSIsICJhcmd1bWVudHMiLCAiZGVwcmVjYXRlZEZ1bmN0aW9ucyIsICJsb2ciLCAiZGVwcmVjYXRlIiwgImFkZFNjcmlwdFRhZyIsICJhZGRMaW5rVGFnIiwgIm1vZHVsZXMiLCAid2lraVVybGVuY29kZSIsICJyZWFkeSIsICJnZXRTY3JpcHQiLCAidXJsIiwgInNpdGVDb21tb24iLCAic2V0Il0KfQo=

})();

/* </nowiki> */

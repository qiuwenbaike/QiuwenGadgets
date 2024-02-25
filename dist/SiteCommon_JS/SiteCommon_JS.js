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
//! src/SiteCommon_JS/modules/core.tsx
var import_ext_gadget2 = __toESM(require("ext.gadget.React"), 1);
//! src/SiteCommon_JS/modules/i18n.ts
var import_ext_gadget = require("ext.gadget.i18n");
var getI18nMessages = () => {
  const {
    wgULS
  } = window;
  return {
    Note: (0, import_ext_gadget.localize)({
      en: "Note: ",
      "zh-hans": "注释：",
      "zh-hant": "注釋："
    }),
    NoPermError0: wgULS("因技术原因，您没有权限访问相关页面。若有疑问，请与求闻百科运营者联系。", "因技術原因，您沒有權限訪問相關頁面。若有疑問，請與求聞百科運營者聯系。"),
    NoPermError1: wgULS("您没有权限访问相关页面。若您是资深编者，请与求闻百科技术团队联系，以获取权限。", "您沒有權限訪問相關頁面。若您是資深編者，請與求聞百科技術團隊聯系，以獲取權限。"),
    NoPermError2: wgULS("您的网络环境存在风险，请登录后继续使用。若您没有求闻百科账号，请注册后登录。", "您的網路環境存在風險，請登入後繼續使用。若您沒有求聞百科賬號，請注冊後登錄。"),
    NoPermError3: wgULS("相关功能仅向注册用户开放，请登录后继续使用。若您没有求闻百科账号，请注册后登录。", "相關功能僅向注冊用戶開放，請登入後繼續使用。若您沒有求聞百科賬號，請注冊後登錄。"),
    NoPermError4: wgULS("您没有权限访问相关页面。若有疑问，请与求闻百科运营者联系。", "您沒有權限訪問相關頁面。若有疑問，請與求聞百科運營者聯系。")
  };
};
var i18nMessages = getI18nMessages();
var getMessage = (key) => {
  return i18nMessages[key] || key;
};
//! src/SiteCommon_JS/modules/core.tsx
var {
  wgAction,
  wgCanonicalSpecialPageName,
  wgNamespaceNumber,
  wgPageName,
  wgScript,
  wgUserName
} = mw.config.get();
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
    const wgUserNameExcaped = mw.util.escapeRegExp(wgUserName !== null && wgUserName !== void 0 ? wgUserName : "");
    const REGEX_FILE = new RegExp("^(?:MediaWiki:".concat(wgUserNameExcaped ? "|User:".concat(wgUserNameExcaped, "/") : "", ")[^&<>=%#]*\\.(js|css)$"));
    const REGEX_EXT = /^ext\.[^,]+$/;
    const path = "".concat(wgScript, "?action=raw&ctype=text/");
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
  if (!highlight || wgAction !== "history") {
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
  var _$permaLinkFirstChild;
  const $permaLink = $body.find("#t-permalink");
  if (!$permaLink.length) {
    return;
  }
  const $permaLinkFirstChild = $permaLink.find(":first-child");
  const href = (_$permaLinkFirstChild = $permaLinkFirstChild.attr("href")) === null || _$permaLinkFirstChild === void 0 ? void 0 : _$permaLinkFirstChild.replace(/title=[^&]*&/, "");
  if (!href) {
    return;
  }
  $permaLinkFirstChild.attr("href", href);
};
var openSearchInNewTab = ($body) => {
  $body.find(["#search", "#searchbox", "#searchform", ".search-types", "#search-types"].join(",")).on("keydown keyup mousedown", (event) => {
    const {
      ctrlKey,
      metaKey,
      target
    } = event;
    $(target).attr("target", (ctrlKey !== null && ctrlKey !== void 0 ? ctrlKey : metaKey) ? "_blank" : "");
  });
};
var titleCleanUp = ($body) => {
  if (URL_DIFF || wgAction !== "view" || ![6, 118].includes(wgNamespaceNumber)) {
    return;
  }
  const fullPageName = new mw.Title(wgPageName).getPrefixedText();
  const $firstHeading = $body.find(".firstHeading");
  const documentTitle = document.title;
  const pageTitle = $firstHeading.text();
  const replaceTitle = (title) => title.replace(pageTitle, fullPageName);
  document.title = replaceTitle(documentTitle);
  $firstHeading.text(replaceTitle(pageTitle));
};
var unihanPopup = ($body) => {
  if (wgNamespaceNumber < 0) {
    return;
  }
  var _iterator4 = _createForOfIteratorHelper($body.find("attr, .inline-unihan")), _step4;
  try {
    for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
      const element = _step4.value;
      const $element = $(element);
      const title = $element.attr("title");
      if (!title) {
        continue;
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
    }
  } catch (err) {
    _iterator4.e(err);
  } finally {
    _iterator4.f();
  }
};
var fixLocationHash = () => {
  if (location.hash) {
    location.href = location.hash;
  }
};
var hideNewUsersLog = ($body) => {
  if (wgCanonicalSpecialPageName !== "Log") {
    return;
  }
  const $newUsersLog = $body.find('input[name="wpfilters[]"][value=newusers]');
  $newUsersLog.prop({
    checked: false,
    disabled: true
  });
};
var toggleLink = ($body) => {
  var _$toggler$parent$;
  const $toggler = $body.find(".mw-collapsible-toggle, .gadget-collapsible-toggler");
  if (!$toggler.length) {
    return;
  }
  if ((_$toggler$parent$ = $toggler.parent()[0]) !== null && _$toggler$parent$ !== void 0 && _$toggler$parent$.style.color) {
    $toggler.find("a").css("color", "inherit");
  }
};
//! src/SiteCommon_JS/modules/tippy.ts
var import_ext_gadget3 = require("ext.gadget.Tippy");
var {
  skin
} = mw.config.get();
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
  if (skin !== "citizen") {
    return;
  }
  var _iterator5 = _createForOfIteratorHelper($body.find([".citizen-header label[title]", ".citizen-header .mw-echo-notifications-badge", ".citizen-header__logo a", ".page-actions>nav>ul>li a", ".page-actions__button"].join(","))), _step5;
  try {
    for (_iterator5.s(); !(_step5 = _iterator5.n()).done; ) {
      const element = _step5.value;
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
    _iterator5.e(err);
  } finally {
    _iterator5.f();
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
    if (skin === "vector") {
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
var import_ext_gadget4 = require("ext.gadget.Util");
var isInit = false;
(function siteCommon() {
  if (isInit) {
    return;
  }
  isInit = true;
  loadWithURL();
  noPermWarning();
  fixLocationHash();
  void (0, import_ext_gadget4.getBody)().then(($body) => {
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

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1NpdGVDb21tb25fSlMvbW9kdWxlcy9jb25zdGFudC50cyIsICJzcmMvU2l0ZUNvbW1vbl9KUy9tb2R1bGVzL2NvcmUudHN4IiwgInNyYy9TaXRlQ29tbW9uX0pTL21vZHVsZXMvaTE4bi50cyIsICJzcmMvU2l0ZUNvbW1vbl9KUy9tb2R1bGVzL3RpcHB5LnRzIiwgInNyYy9TaXRlQ29tbW9uX0pTL21vZHVsZXMvZGVwcmVjYXRlZEZ1bmN0aW9ucy50cyIsICJzcmMvU2l0ZUNvbW1vbl9KUy9TaXRlQ29tbW9uX0pTLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBVUkxfRElGRjogc3RyaW5nIHwgbnVsbCA9IG13LnV0aWwuZ2V0UGFyYW1WYWx1ZSgnZGlmZicpO1xuY29uc3QgVVJMX0hJR0hMSUdIVDogc3RyaW5nIHwgbnVsbCA9IG13LnV0aWwuZ2V0UGFyYW1WYWx1ZSgnaGlnaGxpZ2h0Jyk7XG5jb25zdCBVUkxfSElMSUdIVDogc3RyaW5nIHwgbnVsbCA9IG13LnV0aWwuZ2V0UGFyYW1WYWx1ZSgnaGlsaWdodCcpO1xuY29uc3QgVVJMX05PX1BFUk06IHN0cmluZyB8IG51bGwgPSBtdy51dGlsLmdldFBhcmFtVmFsdWUoJ25vcGVybScpO1xuY29uc3QgVVJMX1VTRTogc3RyaW5nIHwgbnVsbCA9IG13LnV0aWwuZ2V0UGFyYW1WYWx1ZSgndXNlJyk7XG5jb25zdCBVUkxfV0lUSF9DU1M6IHN0cmluZyB8IG51bGwgPSBtdy51dGlsLmdldFBhcmFtVmFsdWUoJ3dpdGhDU1MnKTtcbmNvbnN0IFVSTF9XSVRIX0pTOiBzdHJpbmcgfCBudWxsID0gbXcudXRpbC5nZXRQYXJhbVZhbHVlKCd3aXRoSlMnKTtcbmNvbnN0IFVSTF9XSVRIX01PRFVMRTogc3RyaW5nIHwgbnVsbCA9IG13LnV0aWwuZ2V0UGFyYW1WYWx1ZSgnd2l0aE1vZHVsZScpO1xuXG5leHBvcnQge1VSTF9ESUZGLCBVUkxfSElHSExJR0hULCBVUkxfSElMSUdIVCwgVVJMX05PX1BFUk0sIFVSTF9VU0UsIFVSTF9XSVRIX0NTUywgVVJMX1dJVEhfSlMsIFVSTF9XSVRIX01PRFVMRX07XG4iLCAiaW1wb3J0IHtcblx0VVJMX0RJRkYsXG5cdFVSTF9ISUdITElHSFQsXG5cdFVSTF9ISUxJR0hULFxuXHRVUkxfTk9fUEVSTSxcblx0VVJMX1VTRSxcblx0VVJMX1dJVEhfQ1NTLFxuXHRVUkxfV0lUSF9KUyxcblx0VVJMX1dJVEhfTU9EVUxFLFxufSBmcm9tICcuL2NvbnN0YW50JztcbmltcG9ydCBSZWFjdCBmcm9tICdleHQuZ2FkZ2V0LlJlYWN0JztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9pMThuJztcblxuY29uc3Qge3dnQWN0aW9uLCB3Z0Nhbm9uaWNhbFNwZWNpYWxQYWdlTmFtZSwgd2dOYW1lc3BhY2VOdW1iZXIsIHdnUGFnZU5hbWUsIHdnU2NyaXB0LCB3Z1VzZXJOYW1lfSA9IG13LmNvbmZpZy5nZXQoKTtcblxuY29uc3QgbG9hZFdpdGhVUkwgPSAoKTogdm9pZCA9PiB7XG5cdC8qKlxuXHQgKiAmd2l0aENTUz0gYW5kICZ3aXRoSlM9IFVSTCBwYXJhbWV0ZXJzXG5cdCAqIEFsbG93IHRvIHRyeSBjdXN0b20gc2NyaXB0cyBmcm9tIE1lZGlhV2lraSBzcGFjZVxuXHQgKiB3aXRob3V0IGVkaXRpbmcgcGVyc29uYWwgLmNzcyBvciAuanMgZmlsZXNcblx0ICovXG5cdGlmIChVUkxfV0lUSF9DU1MgfHwgVVJMX1dJVEhfSlMgfHwgVVJMX1dJVEhfTU9EVUxFKSB7XG5cdFx0aWYgKFVSTF9XSVRIX0NTUyAmJiAvXk1lZGlhV2lraTpbXiMlJjw9Pl0qXFwuY3NzJC8udGVzdChVUkxfV0lUSF9DU1MpKSB7XG5cdFx0XHRtdy5sb2FkZXIubG9hZChcblx0XHRcdFx0bXcudXRpbC5nZXRVcmwoVVJMX1dJVEhfQ1NTLCB7XG5cdFx0XHRcdFx0YWN0aW9uOiAncmF3Jyxcblx0XHRcdFx0XHRjdHlwZTogJ3RleHQvY3NzJyxcblx0XHRcdFx0XHRtYXhhZ2U6ICczNjAwJyxcblx0XHRcdFx0XHRzbWF4YWdlOiAnMzYwMCcsXG5cdFx0XHRcdH0pLFxuXHRcdFx0XHQndGV4dC9jc3MnXG5cdFx0XHQpO1xuXHRcdH1cblx0XHRpZiAoVVJMX1dJVEhfSlMgJiYgL15NZWRpYVdpa2k6W14jJSY8PT5dKlxcLmpzJC8udGVzdChVUkxfV0lUSF9KUykpIHtcblx0XHRcdC8vIEB0cy1leHBlY3QtZXJyb3IgVFM2MTMzXG5cdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG5cdFx0XHR2b2lkIG13LmxvYWRlci51c2luZygnJykudGhlbigocmVxdWlyZSk6IHZvaWQgPT4ge1xuXHRcdFx0XHRtdy5sb2FkZXIubG9hZChcblx0XHRcdFx0XHRtdy51dGlsLmdldFVybChVUkxfV0lUSF9KUywge1xuXHRcdFx0XHRcdFx0YWN0aW9uOiAncmF3Jyxcblx0XHRcdFx0XHRcdGN0eXBlOiAndGV4dC9qYXZhc2NyaXB0Jyxcblx0XHRcdFx0XHRcdG1heGFnZTogJzM2MDAnLFxuXHRcdFx0XHRcdFx0c21heGFnZTogJzM2MDAnLFxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdCk7XG5cdFx0XHR9KTtcblx0XHR9XG5cdFx0aWYgKFVSTF9XSVRIX01PRFVMRSAmJiAvXmV4dFxcLlteLHxdKyQvLnRlc3QoVVJMX1dJVEhfTU9EVUxFKSkge1xuXHRcdFx0Ly8gQHRzLWV4cGVjdC1lcnJvciBUUzYxMzNcblx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcblx0XHRcdHZvaWQgbXcubG9hZGVyLnVzaW5nKFVSTF9XSVRIX01PRFVMRSkudGhlbigocmVxdWlyZSk6IHZvaWQgPT4ge1xuXHRcdFx0XHRtdy5sb2FkZXIubG9hZChVUkxfV0lUSF9NT0RVTEUgYXMgc3RyaW5nKTtcblx0XHRcdH0pO1xuXHRcdH1cblx0fVxuXHQvKipcblx0ICogTG9hZCBDU1MgYW5kIEpTIGZpbGVzIHRlbXBvcmFyaWx5IHRocm91Z2ggVVJMLlxuXHQgKiAmdXNlPUZpbGUxLmNzc3xGaWxlMi5jc3N8RmlsZTMuanNcblx0ICovXG5cdGlmIChVUkxfVVNFKSB7XG5cdFx0Y29uc3Qgd2dVc2VyTmFtZUV4Y2FwZWQ6IHN0cmluZyA9IG13LnV0aWwuZXNjYXBlUmVnRXhwKHdnVXNlck5hbWUgPz8gJycpO1xuXHRcdGNvbnN0IFJFR0VYX0ZJTEU6IFJlZ0V4cCA9IG5ldyBSZWdFeHAoXG5cdFx0XHRgXig/Ok1lZGlhV2lraToke3dnVXNlck5hbWVFeGNhcGVkID8gYHxVc2VyOiR7d2dVc2VyTmFtZUV4Y2FwZWR9L2AgOiAnJ30pW14mPD49JSNdKlxcXFwuKGpzfGNzcykkYFxuXHRcdCk7XG5cdFx0Y29uc3QgUkVHRVhfRVhUOiBSZWdFeHAgPSAvXmV4dFxcLlteLF0rJC87XG5cdFx0Y29uc3QgcGF0aDogc3RyaW5nID0gYCR7d2dTY3JpcHR9P2FjdGlvbj1yYXcmY3R5cGU9dGV4dC9gO1xuXHRcdGZvciAoY29uc3QgdXNlRmlsZSBvZiBVUkxfVVNFLnNwbGl0KCd8JykpIHtcblx0XHRcdGNvbnN0IG5hbWU6IHN0cmluZyA9IHVzZUZpbGUudG9TdHJpbmcoKS50cmltKCk7XG5cdFx0XHRjb25zdCB3aGF0OiBzdHJpbmdbXSA9IFJFR0VYX0ZJTEUuZXhlYyhuYW1lKSA/PyBbJycsICcnXTtcblx0XHRcdHN3aXRjaCAod2hhdFsxXSkge1xuXHRcdFx0XHRjYXNlICdqcyc6XG5cdFx0XHRcdFx0Ly8gQHRzLWV4cGVjdC1lcnJvciBUUzYxMzNcblx0XHRcdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG5cdFx0XHRcdFx0dm9pZCBtdy5sb2FkZXIudXNpbmcoJycpLnRoZW4oKHJlcXVpcmUpOiB2b2lkID0+IHtcblx0XHRcdFx0XHRcdG13LmxvYWRlci5sb2FkKGAke3BhdGh9amF2YXNjcmlwdCZ0aXRsZT0ke2VuY29kZVVSSUNvbXBvbmVudChuYW1lKX1gKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAnY3NzJzpcblx0XHRcdFx0XHRtdy5sb2FkZXIubG9hZChgJHtwYXRofWNzcyZ0aXRsZT0ke2VuY29kZVVSSUNvbXBvbmVudChuYW1lKX1gKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRpZiAoUkVHRVhfRVhULnRlc3QobmFtZSkpIHtcblx0XHRcdFx0XHRcdC8vIEB0cy1leHBlY3QtZXJyb3IgVFM2MTMzXG5cdFx0XHRcdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG5cdFx0XHRcdFx0XHR2b2lkIG13LmxvYWRlci51c2luZyhuYW1lKS50aGVuKChyZXF1aXJlKTogdm9pZCA9PiB7XG5cdFx0XHRcdFx0XHRcdG13LmxvYWRlci5sb2FkKG5hbWUpO1xuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxufTtcblxuY29uc3Qgbm9QZXJtV2FybmluZyA9ICgpOiB2b2lkID0+IHtcblx0LyoqXG5cdCAqIExvYWQgd2FybmluZyhzKSB3aGVuIHVzZXIgaGFzIG5vIGFjY2VzcyB0byBwYWdlXG5cdCAqL1xuXHRpZiAoIVVSTF9OT19QRVJNKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0c3dpdGNoIChVUkxfTk9fUEVSTSkge1xuXHRcdGNhc2UgJzAnOlxuXHRcdFx0dm9pZCBtdy5ub3RpZnkoXG5cdFx0XHRcdHdpbmRvdy53Z1VMUyhcblx0XHRcdFx0XHQn5Zug5oqA5pyv5Y6f5Zug77yM5oKo5rKh5pyJ5p2D6ZmQ6K6/6Zeu55u45YWz6aG16Z2i44CC6Iul5pyJ55aR6Zeu77yM6K+35LiO5rGC6Ze755m+56eR6L+Q6JCl6ICF6IGU57O744CCJyxcblx0XHRcdFx0XHQn5Zug5oqA6KGT5Y6f5Zug77yM5oKo5rKS5pyJ5qyK6ZmQ6Kiq5ZWP55u46Zec6aCB6Z2i44CC6Iul5pyJ55aR5ZWP77yM6KuL6IiH5rGC6IGe55m+56eR6YGL54ef6ICF6IGv57O744CCJ1xuXHRcdFx0XHQpLFxuXHRcdFx0XHR7dGFnOiAnbm9QZXJtJywgdHlwZTogJ2Vycm9yJ31cblx0XHRcdCk7XG5cdFx0XHRicmVhaztcblx0XHRjYXNlICcxJzpcblx0XHRcdHZvaWQgbXcubm90aWZ5KFxuXHRcdFx0XHR3aW5kb3cud2dVTFMoXG5cdFx0XHRcdFx0J+aCqOayoeacieadg+mZkOiuv+mXruebuOWFs+mhtemdouOAguiLpeaCqOaYr+i1hOa3see8luiAhe+8jOivt+S4juaxgumXu+eZvuenkeaKgOacr+WboumYn+iBlOezu++8jOS7peiOt+WPluadg+mZkOOAgicsXG5cdFx0XHRcdFx0J+aCqOaykuacieasiumZkOioquWVj+ebuOmXnOmggemdouOAguiLpeaCqOaYr+izh+a3see3qOiAhe+8jOiri+iIh+axguiBnueZvuenkeaKgOihk+WcmOmaiuiBr+ezu++8jOS7peeNsuWPluasiumZkOOAgidcblx0XHRcdFx0KSxcblx0XHRcdFx0e3RhZzogJ25vUGVybScsIHR5cGU6ICdlcnJvcid9XG5cdFx0XHQpO1xuXHRcdFx0YnJlYWs7XG5cdFx0Y2FzZSAnMic6XG5cdFx0XHR2b2lkIG13Lm5vdGlmeShcblx0XHRcdFx0d2luZG93LndnVUxTKFxuXHRcdFx0XHRcdCfmgqjnmoTnvZHnu5znjq/looPlrZjlnKjpo47pmanvvIzor7fnmbvlvZXlkI7nu6fnu63kvb/nlKjjgILoi6XmgqjmsqHmnInmsYLpl7vnmb7np5HotKblj7fvvIzor7fms6jlhozlkI7nmbvlvZXjgIInLFxuXHRcdFx0XHRcdCfmgqjnmoTntrLot6/nkrDlooPlrZjlnKjpoqjpmqrvvIzoq4vnmbvlhaXlvoznubznuozkvb/nlKjjgILoi6XmgqjmspLmnInmsYLogZ7nmb7np5Hos6zomZ/vvIzoq4vms6jlhorlvoznmbvpjITjgIInXG5cdFx0XHRcdCksXG5cdFx0XHRcdHt0YWc6ICdub1Blcm0nLCB0eXBlOiAnd2Fybid9XG5cdFx0XHQpO1xuXHRcdFx0YnJlYWs7XG5cdFx0Y2FzZSAnMyc6XG5cdFx0XHR2b2lkIG13Lm5vdGlmeShcblx0XHRcdFx0d2luZG93LndnVUxTKFxuXHRcdFx0XHRcdCfnm7jlhbPlip/og73ku4XlkJHms6jlhoznlKjmiLflvIDmlL7vvIzor7fnmbvlvZXlkI7nu6fnu63kvb/nlKjjgILoi6XmgqjmsqHmnInmsYLpl7vnmb7np5HotKblj7fvvIzor7fms6jlhozlkI7nmbvlvZXjgIInLFxuXHRcdFx0XHRcdCfnm7jpl5zlip/og73lg4XlkJHms6jlhornlKjmiLbplovmlL7vvIzoq4vnmbvlhaXlvoznubznuozkvb/nlKjjgILoi6XmgqjmspLmnInmsYLogZ7nmb7np5Hos6zomZ/vvIzoq4vms6jlhorlvoznmbvpjITjgIInXG5cdFx0XHRcdCksXG5cdFx0XHRcdHt0YWc6ICdub1Blcm0nLCB0eXBlOiAnd2Fybid9XG5cdFx0XHQpO1xuXHRcdFx0YnJlYWs7XG5cdFx0ZGVmYXVsdDpcblx0XHRcdHZvaWQgbXcubm90aWZ5KFxuXHRcdFx0XHR3aW5kb3cud2dVTFMoXG5cdFx0XHRcdFx0J+aCqOayoeacieadg+mZkOiuv+mXruebuOWFs+mhtemdouOAguiLpeacieeWkemXru+8jOivt+S4juaxgumXu+eZvuenkei/kOiQpeiAheiBlOezu+OAgicsXG5cdFx0XHRcdFx0J+aCqOaykuacieasiumZkOioquWVj+ebuOmXnOmggemdouOAguiLpeacieeWkeWVj++8jOiri+iIh+axguiBnueZvuenkemBi+eHn+iAheiBr+ezu+OAgidcblx0XHRcdFx0KSxcblx0XHRcdFx0e3RhZzogJ25vUGVybScsIHR5cGU6ICdlcnJvcid9XG5cdFx0XHQpO1xuXHR9XG5cblx0Y29uc3QgbmV3VXJsOiBzdHJpbmcgPSBsb2NhdGlvbi5ocmVmLnJlcGxhY2UoL1s/Jl1ub3Blcm09WzAtOV0rLywgJycpO1xuXHRoaXN0b3J5LnB1c2hTdGF0ZSh7fSwgZG9jdW1lbnQudGl0bGUsIG5ld1VybCk7XG59O1xuXG5jb25zdCBoaWdoTGlnaHRSZXYgPSAoJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KTogdm9pZCA9PiB7XG5cdC8qKlxuXHQgKiBBZGQgaGlnaGxpZ2h0IHRvIHJldmlzaW9ucyB3aGVuIHVzaW5nIGAmaGlsaWdodD1yZXZpZGAgb3IgYCZoaWdobGlnaHQ9cmV2aWRgXG5cdCAqL1xuXHRjb25zdCBoaWdobGlnaHQ6IHN0cmluZyB8IG51bGwgPSBVUkxfSElHSExJR0hUID8/IFVSTF9ISUxJR0hUO1xuXG5cdGlmICghaGlnaGxpZ2h0IHx8IHdnQWN0aW9uICE9PSAnaGlzdG9yeScpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRmb3IgKGNvbnN0IHZlcnNpb24gb2YgaGlnaGxpZ2h0LnNwbGl0KCcsJykpIHtcblx0XHQkYm9keS5maW5kKGBpbnB1dFtuYW1lPW9sZGlkXVt2YWx1ZT0ke3ZlcnNpb259XWApLnBhcmVudCgpLmFkZENsYXNzKCdub3QtcGF0cm9sbGVkJyk7XG5cdH1cbn07XG5cbmNvbnN0IGFkZFRhcmdldEJsYW5rID0gKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQgPT4ge1xuXHQvKipcblx0ICogQWRkIHRhcmdldD1cImJsYW5rXCIgdG8gZXh0ZXJuYWwgbGlua3Ncblx0ICovXG5cdCRib2R5LmZpbmQ8SFRNTEFuY2hvckVsZW1lbnQ+KCdhLmV4dGVybmFsLCBhW3JlbD1cIm13OkV4dExpbmtcIl0nKS5maWx0ZXIoKF9pbmRleCwgZWxlbWVudCk6IGJvb2xlYW4gPT4ge1xuXHRcdGNvbnN0IGxpbmtIcmVmOiBzdHJpbmcgfCB1bmRlZmluZWQgPSAkKGVsZW1lbnQpLmF0dHIoJ2hyZWYnKTtcblx0XHRpZiAobGlua0hyZWYpIHtcblx0XHRcdGNvbnN0IGhyZWZTcGxpdDogc3RyaW5nW10gPSBsaW5rSHJlZi5zcGxpdCgnLycpO1xuXHRcdFx0aWYgKGhyZWZTcGxpdC5sZW5ndGggPCAzIHx8IGhyZWZTcGxpdFsyXSA9PT0gbG9jYXRpb24uaG9zdCkge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKGVsZW1lbnQuaHJlZi5pbmNsdWRlcyhgJHtsb2NhdGlvbi5wcm90b2NvbH0vLyR7bG9jYXRpb24uaG9zdG5hbWV9YCkpIHtcblx0XHRcdGVsZW1lbnQudGFyZ2V0ID0gJ19ibGFuayc7XG5cdFx0XHRpZiAoIWVsZW1lbnQucmVsLmluY2x1ZGVzKCdub29wZW5lcicpKSB7XG5cdFx0XHRcdGVsZW1lbnQucmVsICs9ICcgbm9vcGVuZXInO1xuXHRcdFx0fVxuXHRcdFx0aWYgKCFlbGVtZW50LnJlbC5pbmNsdWRlcygnbm9yZWZlcnJlcicpKSB7XG5cdFx0XHRcdGVsZW1lbnQucmVsICs9ICcgbm9yZWZlcnJlcic7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRydWU7XG5cdH0pO1xufTtcblxuY29uc3QgcmVtb3ZlVGl0bGVGcm9tUGVybWFsaW5rID0gKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQgPT4ge1xuXHQvKipcblx0ICogUmVtb3ZlIHRpdGxlPSogZnJvbSBwZXJtYWxpbmtcblx0ICovXG5cdGNvbnN0ICRwZXJtYUxpbms6IEpRdWVyeSA9ICRib2R5LmZpbmQoJyN0LXBlcm1hbGluaycpO1xuXHRpZiAoISRwZXJtYUxpbmsubGVuZ3RoKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgJHBlcm1hTGlua0ZpcnN0Q2hpbGQ6IEpRdWVyeTxIVE1MQW5jaG9yRWxlbWVudD4gPSAkcGVybWFMaW5rLmZpbmQ8SFRNTEFuY2hvckVsZW1lbnQ+KCc6Zmlyc3QtY2hpbGQnKTtcblxuXHRjb25zdCBocmVmOiBzdHJpbmcgfCB1bmRlZmluZWQgPSAkcGVybWFMaW5rRmlyc3RDaGlsZC5hdHRyKCdocmVmJyk/LnJlcGxhY2UoL3RpdGxlPVteJl0qJi8sICcnKTtcblx0aWYgKCFocmVmKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0JHBlcm1hTGlua0ZpcnN0Q2hpbGQuYXR0cignaHJlZicsIGhyZWYpO1xufTtcblxuY29uc3Qgb3BlblNlYXJjaEluTmV3VGFiID0gKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQgPT4ge1xuXHQvKipcblx0ICogT3BlbiBzZWFyY2ggcmVzdWx0cyBpbiBhIG5ldyB0YWIgb3Igd2luZG93XG5cdCAqIHdoZW4gaG9sZGluZyBkb3duIHRoZSBDdHJsIGtleSAoYnkgVGltZXNoaWZ0ZXIpXG5cdCAqL1xuXHQkYm9keVxuXHRcdC5maW5kKFsnI3NlYXJjaCcsICcjc2VhcmNoYm94JywgJyNzZWFyY2hmb3JtJywgJy5zZWFyY2gtdHlwZXMnLCAnI3NlYXJjaC10eXBlcyddLmpvaW4oJywnKSlcblx0XHQub24oJ2tleWRvd24ga2V5dXAgbW91c2Vkb3duJywgKGV2ZW50OiBKUXVlcnkuVHJpZ2dlcmVkRXZlbnQ8SFRNTEVsZW1lbnQ+KTogdm9pZCA9PiB7XG5cdFx0XHRjb25zdCB7Y3RybEtleSwgbWV0YUtleSwgdGFyZ2V0fSA9IGV2ZW50O1xuXHRcdFx0JCh0YXJnZXQpLmF0dHIoJ3RhcmdldCcsIGN0cmxLZXkgPz8gbWV0YUtleSA/ICdfYmxhbmsnIDogJycpO1xuXHRcdH0pO1xufTtcblxuY29uc3QgdGl0bGVDbGVhblVwID0gKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQgPT4ge1xuXHQvKipcblx0ICogQ2xlYW51cCB0aXRsZSBmb3IgYWxsIHBhZ2VzXG5cdCAqL1xuXHRpZiAoVVJMX0RJRkYgfHwgd2dBY3Rpb24gIT09ICd2aWV3JyB8fCAhWzYsIDExOF0uaW5jbHVkZXMod2dOYW1lc3BhY2VOdW1iZXIpKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgZnVsbFBhZ2VOYW1lOiBzdHJpbmcgPSBuZXcgbXcuVGl0bGUod2dQYWdlTmFtZSkuZ2V0UHJlZml4ZWRUZXh0KCk7XG5cdGNvbnN0ICRmaXJzdEhlYWRpbmc6IEpRdWVyeSA9ICRib2R5LmZpbmQoJy5maXJzdEhlYWRpbmcnKTtcblx0Y29uc3QgZG9jdW1lbnRUaXRsZTogc3RyaW5nID0gZG9jdW1lbnQudGl0bGU7XG5cdGNvbnN0IHBhZ2VUaXRsZTogc3RyaW5nID0gJGZpcnN0SGVhZGluZy50ZXh0KCk7XG5cblx0Y29uc3QgcmVwbGFjZVRpdGxlID0gKHRpdGxlOiBzdHJpbmcpOiBzdHJpbmcgPT4gdGl0bGUucmVwbGFjZShwYWdlVGl0bGUsIGZ1bGxQYWdlTmFtZSk7XG5cblx0ZG9jdW1lbnQudGl0bGUgPSByZXBsYWNlVGl0bGUoZG9jdW1lbnRUaXRsZSk7XG5cdCRmaXJzdEhlYWRpbmcudGV4dChyZXBsYWNlVGl0bGUocGFnZVRpdGxlKSk7XG59O1xuXG5jb25zdCB1bmloYW5Qb3B1cCA9ICgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkID0+IHtcblx0LyoqXG5cdCAqIERpc3BsYXkgdGl0bGU9KC4qKSBvZiA8c3BhbiBjbGFzcz1cImlubGluZS11bmloYW5cIj4gYWZ0ZXIgdGhlbS5cblx0ICogKGJldGEgdGVzdClcblx0ICovXG5cdC8vIERvIG5vdCBkaXNwbGF5IG9uIFNwZWNpYWwgUGFnZXNcblx0aWYgKHdnTmFtZXNwYWNlTnVtYmVyIDwgMCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGZvciAoY29uc3QgZWxlbWVudCBvZiAkYm9keS5maW5kKCdhdHRyLCAuaW5saW5lLXVuaWhhbicpKSB7XG5cdFx0Y29uc3QgJGVsZW1lbnQ6IEpRdWVyeSA9ICQoZWxlbWVudCk7XG5cblx0XHRjb25zdCB0aXRsZTogc3RyaW5nIHwgdW5kZWZpbmVkID0gJGVsZW1lbnQuYXR0cigndGl0bGUnKTtcblx0XHRpZiAoIXRpdGxlKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHR2b2lkIG13LmxvYWRlci51c2luZygnb29qcy11aS1jb3JlJykudGhlbigoKTogdm9pZCA9PiB7XG5cdFx0XHRjb25zdCBwb3B1cDogT08udWkuUG9wdXBXaWRnZXQgPSBuZXcgT08udWkuUG9wdXBXaWRnZXQoe1xuXHRcdFx0XHQkY29udGVudDogJCg8cD57dGl0bGV9PC9wPikgYXMgSlF1ZXJ5LFxuXHRcdFx0XHRsYWJlbDogZ2V0TWVzc2FnZSgnTm90ZScpLFxuXHRcdFx0XHRhbmNob3I6IHRydWUsXG5cdFx0XHRcdGhlYWQ6IHRydWUsXG5cdFx0XHRcdHBhZGRlZDogdHJ1ZSxcblx0XHRcdH0pO1xuXHRcdFx0JGVsZW1lbnQuYXBwZW5kKHBvcHVwLiRlbGVtZW50KS5vbignY2xpY2snLCAoKTogdm9pZCA9PiB7XG5cdFx0XHRcdHBvcHVwLnRvZ2dsZSgpO1xuXHRcdFx0fSk7XG5cdFx0fSk7XG5cdH1cbn07XG5cbmNvbnN0IGZpeExvY2F0aW9uSGFzaCA9ICgpOiB2b2lkID0+IHtcblx0Lyog5L+u5q2j5oqY5Y+g5ZCO5a6a5L2N5Y+Y5YyWICovXG5cdGlmIChsb2NhdGlvbi5oYXNoKSB7XG5cdFx0bG9jYXRpb24uaHJlZiA9IGxvY2F0aW9uLmhhc2g7XG5cdH1cbn07XG5cbmNvbnN0IGhpZGVOZXdVc2Vyc0xvZyA9ICgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkID0+IHtcblx0Lyog5Li05pe277ya56aB5q2i55So5oi35p+l55yL55So5oi35Yib5bu65pel5b+XICovXG5cdGlmICh3Z0Nhbm9uaWNhbFNwZWNpYWxQYWdlTmFtZSAhPT0gJ0xvZycpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCAkbmV3VXNlcnNMb2c6IEpRdWVyeSA9ICRib2R5LmZpbmQoJ2lucHV0W25hbWU9XCJ3cGZpbHRlcnNbXVwiXVt2YWx1ZT1uZXd1c2Vyc10nKTtcblx0JG5ld1VzZXJzTG9nLnByb3Aoe1xuXHRcdGNoZWNrZWQ6IGZhbHNlLFxuXHRcdGRpc2FibGVkOiB0cnVlLFxuXHR9KTtcbn07XG5cbmNvbnN0IHRvZ2dsZUxpbmsgPSAoJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KTogdm9pZCA9PiB7XG5cdC8qIOiwg+aVtOaKmOWPoOaMiemSrueahOminOiJsiAqL1xuXHRjb25zdCAkdG9nZ2xlcjogSlF1ZXJ5ID0gJGJvZHkuZmluZCgnLm13LWNvbGxhcHNpYmxlLXRvZ2dsZSwgLmdhZGdldC1jb2xsYXBzaWJsZS10b2dnbGVyJyk7XG5cdGlmICghJHRvZ2dsZXIubGVuZ3RoKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0aWYgKCR0b2dnbGVyLnBhcmVudCgpWzBdPy5zdHlsZS5jb2xvcikge1xuXHRcdCR0b2dnbGVyLmZpbmQoJ2EnKS5jc3MoJ2NvbG9yJywgJ2luaGVyaXQnKTtcblx0fVxufTtcblxuZXhwb3J0IHtcblx0bG9hZFdpdGhVUkwsXG5cdG5vUGVybVdhcm5pbmcsXG5cdGhpZ2hMaWdodFJldixcblx0YWRkVGFyZ2V0QmxhbmssXG5cdHJlbW92ZVRpdGxlRnJvbVBlcm1hbGluayxcblx0b3BlblNlYXJjaEluTmV3VGFiLFxuXHR0aXRsZUNsZWFuVXAsXG5cdHVuaWhhblBvcHVwLFxuXHRmaXhMb2NhdGlvbkhhc2gsXG5cdGhpZGVOZXdVc2Vyc0xvZyxcblx0dG9nZ2xlTGluayxcbn07XG4iLCAiaW1wb3J0IHtsb2NhbGl6ZX0gZnJvbSAnZXh0LmdhZGdldC5pMThuJztcblxuY29uc3QgZ2V0STE4bk1lc3NhZ2VzID0gKCkgPT4ge1xuXHRjb25zdCB7d2dVTFN9ID0gd2luZG93O1xuXHRyZXR1cm4ge1xuXHRcdE5vdGU6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnTm90ZTogJyxcblx0XHRcdCd6aC1oYW5zJzogJ+azqOmHiu+8micsXG5cdFx0XHQnemgtaGFudCc6ICfms6jph4vvvJonLFxuXHRcdH0pLFxuXHRcdE5vUGVybUVycm9yMDogd2dVTFMoXG5cdFx0XHQn5Zug5oqA5pyv5Y6f5Zug77yM5oKo5rKh5pyJ5p2D6ZmQ6K6/6Zeu55u45YWz6aG16Z2i44CC6Iul5pyJ55aR6Zeu77yM6K+35LiO5rGC6Ze755m+56eR6L+Q6JCl6ICF6IGU57O744CCJyxcblx0XHRcdCflm6DmioDooZPljp/lm6DvvIzmgqjmspLmnInmrIrpmZDoqKrllY/nm7jpl5zpoIHpnaLjgILoi6XmnInnlpHllY/vvIzoq4voiIfmsYLogZ7nmb7np5HpgYvnh5/ogIXoga/ns7vjgIInXG5cdFx0KSxcblx0XHROb1Blcm1FcnJvcjE6IHdnVUxTKFxuXHRcdFx0J+aCqOayoeacieadg+mZkOiuv+mXruebuOWFs+mhtemdouOAguiLpeaCqOaYr+i1hOa3see8luiAhe+8jOivt+S4juaxgumXu+eZvuenkeaKgOacr+WboumYn+iBlOezu++8jOS7peiOt+WPluadg+mZkOOAgicsXG5cdFx0XHQn5oKo5rKS5pyJ5qyK6ZmQ6Kiq5ZWP55u46Zec6aCB6Z2i44CC6Iul5oKo5piv6LOH5rex57eo6ICF77yM6KuL6IiH5rGC6IGe55m+56eR5oqA6KGT5ZyY6ZqK6IGv57O777yM5Lul542y5Y+W5qyK6ZmQ44CCJ1xuXHRcdCksXG5cdFx0Tm9QZXJtRXJyb3IyOiB3Z1VMUyhcblx0XHRcdCfmgqjnmoTnvZHnu5znjq/looPlrZjlnKjpo47pmanvvIzor7fnmbvlvZXlkI7nu6fnu63kvb/nlKjjgILoi6XmgqjmsqHmnInmsYLpl7vnmb7np5HotKblj7fvvIzor7fms6jlhozlkI7nmbvlvZXjgIInLFxuXHRcdFx0J+aCqOeahOe2sui3r+eSsOWig+WtmOWcqOmiqOmaqu+8jOiri+eZu+WFpeW+jOe5vOe6jOS9v+eUqOOAguiLpeaCqOaykuacieaxguiBnueZvuenkeizrOiZn++8jOiri+azqOWGiuW+jOeZu+mMhOOAgidcblx0XHQpLFxuXHRcdE5vUGVybUVycm9yMzogd2dVTFMoXG5cdFx0XHQn55u45YWz5Yqf6IO95LuF5ZCR5rOo5YaM55So5oi35byA5pS+77yM6K+355m75b2V5ZCO57un57ut5L2/55So44CC6Iul5oKo5rKh5pyJ5rGC6Ze755m+56eR6LSm5Y+377yM6K+35rOo5YaM5ZCO55m75b2V44CCJyxcblx0XHRcdCfnm7jpl5zlip/og73lg4XlkJHms6jlhornlKjmiLbplovmlL7vvIzoq4vnmbvlhaXlvoznubznuozkvb/nlKjjgILoi6XmgqjmspLmnInmsYLogZ7nmb7np5Hos6zomZ/vvIzoq4vms6jlhorlvoznmbvpjITjgIInXG5cdFx0KSxcblx0XHROb1Blcm1FcnJvcjQ6IHdnVUxTKFxuXHRcdFx0J+aCqOayoeacieadg+mZkOiuv+mXruebuOWFs+mhtemdouOAguiLpeacieeWkemXru+8jOivt+S4juaxgumXu+eZvuenkei/kOiQpeiAheiBlOezu+OAgicsXG5cdFx0XHQn5oKo5rKS5pyJ5qyK6ZmQ6Kiq5ZWP55u46Zec6aCB6Z2i44CC6Iul5pyJ55aR5ZWP77yM6KuL6IiH5rGC6IGe55m+56eR6YGL54ef6ICF6IGv57O744CCJ1xuXHRcdCksXG5cdH07XG59O1xuXG5jb25zdCBpMThuTWVzc2FnZXMgPSBnZXRJMThuTWVzc2FnZXMoKTtcblxuY29uc3QgZ2V0TWVzc2FnZTogR2V0TWVzc2FnZXM8dHlwZW9mIGkxOG5NZXNzYWdlcz4gPSAoa2V5KSA9PiB7XG5cdHJldHVybiBpMThuTWVzc2FnZXNba2V5XSB8fCBrZXk7XG59O1xuXG5leHBvcnQge2dldE1lc3NhZ2V9O1xuIiwgImltcG9ydCB7dGlwcHl9IGZyb20gJ2V4dC5nYWRnZXQuVGlwcHknO1xuXG5jb25zdCB7c2tpbn0gPSBtdy5jb25maWcuZ2V0KCk7XG5cbmNvbnN0IGdldENvbnRlbnQgPSAocmVmZXJlbmNlOiBFbGVtZW50KTogc3RyaW5nID0+IHtcblx0Y29uc3QgbGFiZWw6IHN0cmluZyB8IG51bGwgPSByZWZlcmVuY2UuZ2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJyk7XG5cdGNvbnN0IHRpdGxlOiBzdHJpbmcgfCBudWxsID0gcmVmZXJlbmNlLmdldEF0dHJpYnV0ZSgnYWx0JykgPz8gcmVmZXJlbmNlLmdldEF0dHJpYnV0ZSgndGl0bGUnKTtcblxuXHRyZXR1cm4gKGxhYmVsID09PSB0aXRsZSA/IGxhYmVsIDogdGl0bGUgfHwgbGFiZWwpIHx8IChyZWZlcmVuY2UudGV4dENvbnRlbnQgYXMgc3RyaW5nKTtcbn07XG5cbmNvbnN0IG9uQ3JlYXRlQ2FsbGJhY2sgPSAoaW5zdGFuY2U6IFJldHVyblR5cGU8dHlwZW9mIHRpcHB5PlswXSk6IHZvaWQgPT4ge1xuXHRjb25zdCB7cmVmZXJlbmNlfSA9IGluc3RhbmNlO1xuXHRyZWZlcmVuY2Uuc2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJywgZ2V0Q29udGVudChyZWZlcmVuY2UpKTtcblx0cmVmZXJlbmNlLnJlbW92ZUF0dHJpYnV0ZSgndGl0bGUnKTtcbn07XG5cbmNvbnN0IG9uU2hvd0NhbGxiYWNrID0gKGluc3RhbmNlOiBSZXR1cm5UeXBlPHR5cGVvZiB0aXBweT5bMF0pOiB2b2lkID0+IHtcblx0b25DcmVhdGVDYWxsYmFjayhpbnN0YW5jZSk7XG5cdGluc3RhbmNlLnNldENvbnRlbnQoZ2V0Q29udGVudChpbnN0YW5jZS5yZWZlcmVuY2UpKTtcbn07XG5cbmNvbnN0IHRpcHB5Rm9yQ2l0aXplbkhlYWRlciA9ICgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkID0+IHtcblx0aWYgKHNraW4gIT09ICdjaXRpemVuJykge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGZvciAoY29uc3QgZWxlbWVudCBvZiAkYm9keS5maW5kKFxuXHRcdFtcblx0XHRcdCcuY2l0aXplbi1oZWFkZXIgbGFiZWxbdGl0bGVdJyxcblx0XHRcdCcuY2l0aXplbi1oZWFkZXIgLm13LWVjaG8tbm90aWZpY2F0aW9ucy1iYWRnZScsXG5cdFx0XHQnLmNpdGl6ZW4taGVhZGVyX19sb2dvIGEnLFxuXHRcdFx0Jy5wYWdlLWFjdGlvbnM+bmF2PnVsPmxpIGEnLFxuXHRcdFx0Jy5wYWdlLWFjdGlvbnNfX2J1dHRvbicsXG5cdFx0XS5qb2luKCcsJylcblx0KSkge1xuXHRcdGNvbnN0ICRlbGVtZW50OiBKUXVlcnkgPSAkKGVsZW1lbnQpO1xuXHRcdGxldCB0aXRsZTogc3RyaW5nIHwgdW5kZWZpbmVkID0gJGVsZW1lbnQuYXR0cigndGl0bGUnKTtcblx0XHRpZiAoIXRpdGxlKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHR0aXRsZSA9IHRpdGxlLnJlcGxhY2UoL1xccyo/XFxbLis/XSQvLCAnJyk7XG5cblx0XHQkZWxlbWVudC5hdHRyKHtcblx0XHRcdCdhcmlhLWxhYmVsJzogdGl0bGUsXG5cdFx0XHR0aXRsZTogJycsXG5cdFx0fSk7XG5cdFx0dGlwcHkoJGVsZW1lbnQuZ2V0KDApIGFzIEhUTUxFbGVtZW50LCB7XG5cdFx0XHRhcnJvdzogdHJ1ZSxcblx0XHRcdGNvbnRlbnQ6IHRpdGxlLFxuXHRcdFx0cGxhY2VtZW50OiAnYm90dG9tJyxcblx0XHRcdG9uQ3JlYXRlOiBvbkNyZWF0ZUNhbGxiYWNrLFxuXHRcdFx0b25IaWRkZW46IG9uQ3JlYXRlQ2FsbGJhY2ssXG5cdFx0XHRvblNob3c6IG9uU2hvd0NhbGxiYWNrLFxuXHRcdH0pO1xuXHR9XG59O1xuXG5jb25zdCB0aXBweUZvckV4dGVuc2lvbiA9IGFzeW5jICgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0YXdhaXQgbXcubG9hZGVyLnVzaW5nKCdleHQuQ29sbGFwc2libGVTaWRlYmFyLmpzJyk7XG5cdHRpcHB5KCcjc2lkZWJhckJ1dHRvbicsIHtcblx0XHRhcnJvdzogdHJ1ZSxcblx0XHRjb250ZW50OiBnZXRDb250ZW50LFxuXHRcdHBsYWNlbWVudDogJ2xlZnQnLFxuXHRcdG9uQ3JlYXRlOiBvbkNyZWF0ZUNhbGxiYWNrLFxuXHRcdG9uSGlkZGVuOiBvbkNyZWF0ZUNhbGxiYWNrLFxuXHRcdG9uU2hvdzogb25TaG93Q2FsbGJhY2ssXG5cdH0pO1xuXG5cdGlmIChza2luID09PSAndmVjdG9yJykge1xuXHRcdGF3YWl0IG13LmxvYWRlci51c2luZygnZXh0LkNvbGxhcHNpYmxlU2lkZWJhci52ZWN0b3InKTtcblx0XHR0aXBweSgnI3NpZGViYXJDb2xsYXBzZScsIHtcblx0XHRcdGFycm93OiB0cnVlLFxuXHRcdFx0Y29udGVudDogZ2V0Q29udGVudCxcblx0XHRcdHBsYWNlbWVudDogJ3JpZ2h0Jyxcblx0XHRcdG9uQ3JlYXRlOiBvbkNyZWF0ZUNhbGxiYWNrLFxuXHRcdFx0b25IaWRkZW46IG9uQ3JlYXRlQ2FsbGJhY2ssXG5cdFx0XHRvblNob3c6IG9uU2hvd0NhbGxiYWNrLFxuXHRcdH0pO1xuXHR9XG5cblx0YXdhaXQgbXcubG9hZGVyLnVzaW5nKCdleHQuRGFya01vZGUnKTtcblx0dGlwcHkoJyNkYXJrbW9kZS1idXR0b24nLCB7XG5cdFx0YXJyb3c6IHRydWUsXG5cdFx0Y29udGVudDogZ2V0Q29udGVudCxcblx0XHRwbGFjZW1lbnQ6ICdsZWZ0Jyxcblx0XHRvbkNyZWF0ZTogb25DcmVhdGVDYWxsYmFjayxcblx0XHRvbkhpZGRlbjogb25DcmVhdGVDYWxsYmFjayxcblx0XHRvblNob3c6IG9uU2hvd0NhbGxiYWNrLFxuXHR9KTtcbn07XG5cbmV4cG9ydCB7dGlwcHlGb3JDaXRpemVuSGVhZGVyLCB0aXBweUZvckV4dGVuc2lvbn07XG4iLCAiY29uc3QgZGVwcmVjYXRlZEZ1bmN0aW9ucyA9ICgpOiB2b2lkID0+IHtcblx0LyohXG5cdCAqIG1haW50ZW5hbmNlOiBTb21lIHVzZXIgc2NyaXB0cyBtYXkgYmUgdXNpbmcgdGhlIGZvbGxvd2luZyBkZXByZWNhdGVkIGZ1bmN0aW9ucy5cblx0ICogVGhlc2UgZnVuY3Rpb25zIGFyZSBubyBsb25nZXIgc3VwcG9ydGVkIGFuZCBzaG91bGQgYmUgdXBkYXRlZC5cblx0ICovXG5cdG13LmxvZy5kZXByZWNhdGUoXG5cdFx0d2luZG93LFxuXHRcdCdpbXBvcnRTY3JpcHQnLFxuXHRcdCh0aXRsZTogc3RyaW5nKTogSFRNTFNjcmlwdEVsZW1lbnQgPT4ge1xuXHRcdFx0cmV0dXJuIG13LmxvYWRlci5hZGRTY3JpcHRUYWcoXG5cdFx0XHRcdG13LnV0aWwuZ2V0VXJsKHRpdGxlLCB7XG5cdFx0XHRcdFx0YWN0aW9uOiAncmF3Jyxcblx0XHRcdFx0XHRjdHlwZTogJ3RleHQvamF2YXNjcmlwdCcsXG5cdFx0XHRcdFx0bWF4YWdlOiAnMzYwMCcsXG5cdFx0XHRcdFx0c21heGFnZTogJzM2MDAnLFxuXHRcdFx0XHR9KVxuXHRcdFx0KTtcblx0XHR9LFxuXHRcdCdVc2UgbXcubG9hZGVyLmFkZFNjcmlwdFRhZygpIGluc3RlYWQnXG5cdCk7XG5cdG13LmxvZy5kZXByZWNhdGUoXG5cdFx0d2luZG93LFxuXHRcdCdpbXBvcnRTdHlsZXNoZWV0Jyxcblx0XHQodGl0bGU6IHN0cmluZyk6IEhUTUxMaW5rRWxlbWVudCA9PiB7XG5cdFx0XHRyZXR1cm4gbXcubG9hZGVyLmFkZExpbmtUYWcoXG5cdFx0XHRcdG13LnV0aWwuZ2V0VXJsKHRpdGxlLCB7XG5cdFx0XHRcdFx0YWN0aW9uOiAncmF3Jyxcblx0XHRcdFx0XHRjdHlwZTogJ3RleHQvY3NzJyxcblx0XHRcdFx0XHRtYXhhZ2U6ICczNjAwJyxcblx0XHRcdFx0XHRzbWF4YWdlOiAnMzYwMCcsXG5cdFx0XHRcdH0pLFxuXHRcdFx0XHQndGV4dC9jc3MnXG5cdFx0XHQpO1xuXHRcdH0sXG5cdFx0J1VzZSBtdy5sb2FkZXIuYWRkTGlua1RhZygpIGluc3RlYWQnXG5cdCk7XG5cdG13LmxvZy5kZXByZWNhdGUoXG5cdFx0d2luZG93LFxuXHRcdCdpbXBvcnRTY3JpcHRVUkknLFxuXHRcdChtb2R1bGVzOiBzdHJpbmcpOiBIVE1MU2NyaXB0RWxlbWVudCA9PiB7XG5cdFx0XHRyZXR1cm4gbXcubG9hZGVyLmFkZFNjcmlwdFRhZyhtdy51dGlsLndpa2lVcmxlbmNvZGUobW9kdWxlcykpO1xuXHRcdH0sXG5cdFx0J1VzZSBtdy5sb2FkZXIuYWRkU2NyaXB0VGFnKCkgb3IgbXcubG9hZGVyLmdldFNjcmlwdCgpIGluc3RlYWQnXG5cdCk7XG5cdG13LmxvZy5kZXByZWNhdGUoXG5cdFx0d2luZG93LFxuXHRcdCdpbXBvcnRTdHlsZXNoZWV0VVJJJyxcblx0XHQobW9kdWxlczogc3RyaW5nKTogSFRNTExpbmtFbGVtZW50ID0+IHtcblx0XHRcdHJldHVybiBtdy5sb2FkZXIuYWRkTGlua1RhZyhtdy51dGlsLndpa2lVcmxlbmNvZGUobW9kdWxlcyksICd0ZXh0L2NzcycpO1xuXHRcdH0sXG5cdFx0J1VzZSBtdy5sb2FkZXIuYWRkTGlua1RhZygpIGluc3RlYWQnXG5cdCk7XG5cdG13LmxvZy5kZXByZWNhdGUoXG5cdFx0d2luZG93LFxuXHRcdC8vIEB0cy1leHBlY3QtZXJyb3IgVFMyMzQ1XG5cdFx0J2ltcG9ydFNjcmlwdENhbGxiYWNrJyxcblx0XHQodGl0bGU6IHN0cmluZywgcmVhZHk6IG5ldmVyKTogdm9pZCA9PiB7XG5cdFx0XHR2b2lkIG13LmxvYWRlclxuXHRcdFx0XHQuZ2V0U2NyaXB0KFxuXHRcdFx0XHRcdG13LnV0aWwuZ2V0VXJsKHRpdGxlLCB7XG5cdFx0XHRcdFx0XHRhY3Rpb246ICdyYXcnLFxuXHRcdFx0XHRcdFx0Y3R5cGU6ICd0ZXh0L2phdmFzY3JpcHQnLFxuXHRcdFx0XHRcdFx0bWF4YWdlOiAnMzYwMCcsXG5cdFx0XHRcdFx0XHRzbWF4YWdlOiAnMzYwMCcsXG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0KVxuXHRcdFx0XHQudGhlbihyZWFkeSk7XG5cdFx0fSxcblx0XHQnVXNlIG13LmxvYWRlci5nZXRTY3JpcHQoKSBpbnN0ZWFkJ1xuXHQpO1xuXHRtdy5sb2cuZGVwcmVjYXRlKFxuXHRcdHdpbmRvdyxcblx0XHQvLyBAdHMtZXhwZWN0LWVycm9yIFRTMjM0NVxuXHRcdCdpbXBvcnRTY3JpcHRVUklDYWxsYmFjaycsXG5cdFx0KHVybDogc3RyaW5nLCByZWFkeTogbmV2ZXIpOiB2b2lkID0+IHtcblx0XHRcdHZvaWQgbXcubG9hZGVyLmdldFNjcmlwdCh1cmwpLnRoZW4ocmVhZHkpO1xuXHRcdH0sXG5cdFx0J1VzZSBtdy5sb2FkZXIuZ2V0U2NyaXB0KCkgaW5zdGVhZCdcblx0KTtcblx0LyoqXG5cdCAqIG1haW50ZW5hbmNlOiBTb21lIHVzZXIgc2NyaXB0cyBtYXkgYmUgdXNpbmcgdGhlIGZvbGxvd2luZyBkZXByZWNhdGVkIGZ1bmN0aW9ucy5cblx0ICogVGhlc2UgZnVuY3Rpb25zIGFyZSBrZXB0IGZvciBjb21wYWJpbGl0eS5cblx0ICovXG5cdC8vIG13LmxvZy5kZXByZWNhdGUod2luZG93LCAnSlNDb25maWcnLCB7fSwgJ1VzZSB7fSBpbnN0ZWFkJyk7XG5cdC8qKlxuXHQgKiB3Z1UqUyBmdW5jdGlvbnMgaGF2ZSBiZWVuIHNwbGl0IHRvIGEgc2VwZXJhdGUgZ2FkZ2V0IChleHQuZ2FkZ2V0LmkxOG4pLlxuXHQgKi9cbn07XG5cbmV4cG9ydCB7ZGVwcmVjYXRlZEZ1bmN0aW9uc307XG4iLCAiaW1wb3J0IHtcblx0YWRkVGFyZ2V0QmxhbmssXG5cdGZpeExvY2F0aW9uSGFzaCxcblx0aGlkZU5ld1VzZXJzTG9nLFxuXHRoaWdoTGlnaHRSZXYsXG5cdGxvYWRXaXRoVVJMLFxuXHRub1Blcm1XYXJuaW5nLFxuXHRvcGVuU2VhcmNoSW5OZXdUYWIsXG5cdHJlbW92ZVRpdGxlRnJvbVBlcm1hbGluayxcblx0dGl0bGVDbGVhblVwLFxuXHR0b2dnbGVMaW5rLFxuXHR1bmloYW5Qb3B1cCxcbn0gZnJvbSAnLi9tb2R1bGVzL2NvcmUnO1xuaW1wb3J0IHt0aXBweUZvckNpdGl6ZW5IZWFkZXIsIHRpcHB5Rm9yRXh0ZW5zaW9ufSBmcm9tICcuL21vZHVsZXMvdGlwcHknO1xuaW1wb3J0IHtkZXByZWNhdGVkRnVuY3Rpb25zfSBmcm9tICcuL21vZHVsZXMvZGVwcmVjYXRlZEZ1bmN0aW9ucyc7XG5pbXBvcnQge2dldEJvZHl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmxldCBpc0luaXQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuKGZ1bmN0aW9uIHNpdGVDb21tb24oKTogdm9pZCB7XG5cdC8vIEd1YXJkIGFnYWluc3QgZG91YmxlIGluY2x1c2lvbnNcblx0aWYgKGlzSW5pdCkge1xuXHRcdHJldHVybjtcblx0fVxuXHQvLyBTZXQgZ3VhcmRcblx0aXNJbml0ID0gdHJ1ZTtcblxuXHQvLyBDb3JlIG1vZHVsZXNcblx0bG9hZFdpdGhVUkwoKTtcblx0bm9QZXJtV2FybmluZygpO1xuXHRmaXhMb2NhdGlvbkhhc2goKTtcblxuXHR2b2lkIGdldEJvZHkoKS50aGVuKCgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkID0+IHtcblx0XHQvLyBDb3JlIG1vZHVsZXMgKG5lZWQgJC5yZWFkeSlcblx0XHRoaWdoTGlnaHRSZXYoJGJvZHkpO1xuXHRcdGFkZFRhcmdldEJsYW5rKCRib2R5KTtcblx0XHRyZW1vdmVUaXRsZUZyb21QZXJtYWxpbmsoJGJvZHkpO1xuXHRcdG9wZW5TZWFyY2hJbk5ld1RhYigkYm9keSk7XG5cdFx0dGl0bGVDbGVhblVwKCRib2R5KTtcblx0XHR1bmloYW5Qb3B1cCgkYm9keSk7XG5cdFx0aGlkZU5ld1VzZXJzTG9nKCRib2R5KTtcblx0XHR0b2dnbGVMaW5rKCRib2R5KTtcblxuXHRcdC8vIFRpcHB5LXJlbGF0ZWQgY29kZXMgKG5lZWQgJC5yZWFkeSlcblx0XHR0aXBweUZvckNpdGl6ZW5IZWFkZXIoJGJvZHkpO1xuXHR9KTtcblxuXHQvLyBEZXByZWNhdGVkIGZ1bmN0aW9uc1xuXHRkZXByZWNhdGVkRnVuY3Rpb25zKCk7XG5cblx0Ly8gVGlwcHktcmVsYXRlZCBjb2Rlc1xuXHR2b2lkIHRpcHB5Rm9yRXh0ZW5zaW9uKCk7XG59KSgpO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLFdBQTBCQyxHQUFHQyxLQUFLQyxjQUFjLE1BQU07QUFDNUQsSUFBTUMsZ0JBQStCSCxHQUFHQyxLQUFLQyxjQUFjLFdBQVc7QUFDdEUsSUFBTUUsY0FBNkJKLEdBQUdDLEtBQUtDLGNBQWMsU0FBUztBQUNsRSxJQUFNRyxjQUE2QkwsR0FBR0MsS0FBS0MsY0FBYyxRQUFRO0FBQ2pFLElBQU1JLFVBQXlCTixHQUFHQyxLQUFLQyxjQUFjLEtBQUs7QUFDMUQsSUFBTUssZUFBOEJQLEdB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QUFLO0lBQ3pDO0lBQ0E7RUFDRDtBQVNEOztBQ3hFQSxJQUFBRyxxQkFBc0J6TCxRQUFBLGlCQUFBO0FBRXRCLElBQUkwTCxTQUFrQjtDQUVyQixTQUFTQyxhQUFtQjtBQUU1QixNQUFJRCxRQUFRO0FBQ1g7RUFDRDtBQUVBQSxXQUFTO0FBR1RsSyxjQUFZO0FBQ1pzQyxnQkFBYztBQUNkd0Usa0JBQWdCO0FBRWhCLFFBQUEsR0FBS21ELG1CQUFBRyxTQUFRLEVBQUUxSixLQUFNeUMsV0FBeUM7QUFFN0RELGlCQUFhQyxLQUFLO0FBQ2xCUSxtQkFBZVIsS0FBSztBQUNwQnVCLDZCQUF5QnZCLEtBQUs7QUFDOUIyQix1QkFBbUIzQixLQUFLO0FBQ3hCaUMsaUJBQWFqQyxLQUFLO0FBQ2xCMEMsZ0JBQVkxQyxLQUFLO0FBQ2pCNkQsb0JBQWdCN0QsS0FBSztBQUNyQmtFLGVBQVdsRSxLQUFLO0FBR2hCcUYsMEJBQXNCckYsS0FBSztFQUM1QixDQUFDO0FBR0RvRyxzQkFBb0I7QUFHcEIsT0FBS0wsa0JBQWtCO0FBQ3hCLEdBQUc7IiwKICAibmFtZXMiOiBbIlVSTF9ESUZGIiwgIm13IiwgInV0aWwiLCAiZ2V0UGFyYW1WYWx1ZSIsICJVUkxfSElHSExJR0hUIiwgIlVSTF9ISUxJR0hUIiwgIlVSTF9OT19QRVJNIiwgIlVSTF9VU0UiLCAiVVJMX1dJVEhfQ1NTIiwgIlVSTF9XSVRIX0pTIiwgIlVSTF9XSVRIX01PRFVMRSIsICJpbXBvcnRfZXh0X2dhZGdldDIiLCAiX190b0VTTSIsICJyZXF1aXJlIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgImdldEkxOG5NZXNzYWdlcyIsICJ3Z1VMUyIsICJ3aW5kb3ciLCAiTm90ZSIsICJsb2NhbGl6ZSIsICJlbiIsICJOb1Blcm1FcnJvcjAiLCAiTm9QZXJtRXJyb3IxIiwgIk5vUGVybUVycm9yMiIsICJOb1Blcm1FcnJvcjMiLCAiTm9QZXJtRXJyb3I0IiwgImkxOG5NZXNzYWdlcyIsICJnZXRNZXNzYWdlIiwgImtleSIsICJ3Z0FjdGlvbiIsICJ3Z0Nhbm9uaWNhbFNwZWNpYWxQYWdlTmFtZSIsICJ3Z05hbWVzcGFjZU51bWJlciIsICJ3Z1BhZ2VOYW1lIiwgIndnU2NyaXB0IiwgIndnVXNlck5hbWUiLCAiY29uZmlnIiwgImdldCIsICJsb2FkV2l0aFVSTCIsICJ0ZXN0IiwgImxvYWRlciIsICJsb2FkIiwgImdldFVybCIsICJhY3Rpb24iLCAiY3R5cGUiLCAibWF4YWdlIiwgInNtYXhhZ2UiLCAidXNpbmciLCAidGhlbiIsICJyZXF1aXJlMiIsICJ3Z1VzZXJOYW1lRXhjYXBlZCIsICJlc2NhcGVSZWdFeHAiLCAiUkVHRVhfRklMRSIsICJSZWdFeHAiLCAiY29uY2F0IiwgIlJFR0VYX0VYVCIsICJwYXRoIiwgIl9pdGVyYXRvcjIiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAic3BsaXQiLCAiX3N0ZXAyIiwgInMiLCAibiIsICJkb25lIiwgIl9SRUdFWF9GSUxFJGV4ZWMiLCAidXNlRmlsZSIsICJ2YWx1ZSIsICJuYW1lIiwgInRvU3RyaW5nIiwgInRyaW0iLCAid2hhdCIsICJleGVjIiwgImVuY29kZVVSSUNvbXBvbmVudCIsICJlcnIiLCAiZSIsICJmIiwgIm5vUGVybVdhcm5pbmciLCAibm90aWZ5IiwgInRhZyIsICJ0eXBlIiwgIm5ld1VybCIsICJsb2NhdGlvbiIsICJocmVmIiwgInJlcGxhY2UiLCAiaGlzdG9yeSIsICJwdXNoU3RhdGUiLCAiZG9jdW1lbnQiLCAidGl0bGUiLCAiaGlnaExpZ2h0UmV2IiwgIiRib2R5IiwgImhpZ2hsaWdodCIsICJfaXRlcmF0b3IzIiwgIl9zdGVwMyIsICJ2ZXJzaW9uIiwgImZpbmQiLCAicGFyZW50IiwgImFkZENsYXNzIiwgImFkZFRhcmdldEJsYW5rIiwgImZpbHRlciIsICJfaW5kZXgiLCAiZWxlbWVudCIsICJsaW5rSHJlZiIsICIkIiwgImF0dHIiLCAiaHJlZlNwbGl0IiwgImxlbmd0aCIsICJob3N0IiwgImluY2x1ZGVzIiwgInByb3RvY29sIiwgImhvc3RuYW1lIiwgInRhcmdldCIsICJyZWwiLCAicmVtb3ZlVGl0bGVGcm9tUGVybWFsaW5rIiwgIl8kcGVybWFMaW5rRmlyc3RDaGlsZCIsICIkcGVybWFMaW5rIiwgIiRwZXJtYUxpbmtGaXJzdENoaWxkIiwgIm9wZW5TZWFyY2hJbk5ld1RhYiIsICJqb2luIiwgIm9uIiwgImV2ZW50IiwgImN0cmxLZXkiLCAibWV0YUtleSIsICJ0aXRsZUNsZWFuVXAiLCAiZnVsbFBhZ2VOYW1lIiwgIlRpdGxlIiwgImdldFByZWZpeGVkVGV4dCIsICIkZmlyc3RIZWFkaW5nIiwgImRvY3VtZW50VGl0bGUiLCAicGFnZVRpdGxlIiwgInRleHQiLCAicmVwbGFjZVRpdGxlIiwgInVuaWhhblBvcHVwIiwgIl9pdGVyYXRvcjQiLCAiX3N0ZXA0IiwgIiRlbGVtZW50IiwgInBvcHVwIiwgIk9PIiwgInVpIiwgIlBvcHVwV2lkZ2V0IiwgIiRjb250ZW50IiwgImRlZmF1bHQiLCAiY3JlYXRlRWxlbWVudCIsICJsYWJlbCIsICJhbmNob3IiLCAiaGVhZCIsICJwYWRkZWQiLCAiYXBwZW5kIiwgInRvZ2dsZSIsICJmaXhMb2NhdGlvbkhhc2giLCAiaGFzaCIsICJoaWRlTmV3VXNlcnNMb2ciLCAiJG5ld1VzZXJzTG9nIiwgInByb3AiLCAiY2hlY2tlZCIsICJkaXNhYmxlZCIsICJ0b2dnbGVMaW5rIiwgIl8kdG9nZ2xlciRwYXJlbnQkIiwgIiR0b2dnbGVyIiwgInN0eWxlIiwgImNvbG9yIiwgImNzcyIsICJpbXBvcnRfZXh0X2dhZGdldDMiLCAic2tpbiIsICJnZXRDb250ZW50IiwgInJlZmVyZW5jZSIsICJfcmVmZXJlbmNlJGdldEF0dHJpYnUiLCAiZ2V0QXR0cmlidXRlIiwgInRleHRDb250ZW50IiwgIm9uQ3JlYXRlQ2FsbGJhY2siLCAiaW5zdGFuY2UiLCAic2V0QXR0cmlidXRlIiwgInJlbW92ZUF0dHJpYnV0ZSIsICJvblNob3dDYWxsYmFjayIsICJzZXRDb250ZW50IiwgInRpcHB5Rm9yQ2l0aXplbkhlYWRlciIsICJfaXRlcmF0b3I1IiwgIl9zdGVwNSIsICJ0aXBweSIsICJhcnJvdyIsICJjb250ZW50IiwgInBsYWNlbWVudCIsICJvbkNyZWF0ZSIsICJvbkhpZGRlbiIsICJvblNob3ciLCAidGlwcHlGb3JFeHRlbnNpb24iLCAiX3JlZiIsICJfYXN5bmNUb0dlbmVyYXRvciIsICJhcHBseSIsICJhcmd1bWVudHMiLCAiZGVwcmVjYXRlZEZ1bmN0aW9ucyIsICJsb2ciLCAiZGVwcmVjYXRlIiwgImFkZFNjcmlwdFRhZyIsICJhZGRMaW5rVGFnIiwgIm1vZHVsZXMiLCAid2lraVVybGVuY29kZSIsICJyZWFkeSIsICJnZXRTY3JpcHQiLCAidXJsIiwgImltcG9ydF9leHRfZ2FkZ2V0NCIsICJpc0luaXQiLCAic2l0ZUNvbW1vbiIsICJnZXRCb2R5Il0KfQo=

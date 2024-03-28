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
  const URL_WITH_CSS = mw.util.getParamValue("withCSS");
  const URL_WITH_JS = mw.util.getParamValue("withJS");
  const URL_WITH_MODULE = mw.util.getParamValue("withModule");
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
  const URL_USE = mw.util.getParamValue("use");
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
  const URL_NO_PERM = mw.util.getParamValue("noperm");
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
  const URL_HIGHLIGHT = mw.util.getParamValue("highlight");
  const URL_HILIGHT = mw.util.getParamValue("hilight");
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
  const URL_DIFF = mw.util.getParamValue("diff");
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
(function siteCommon() {
  const configKey = "gadget-SiteCommon_JS__Initialized";
  if (mw.config.get(configKey)) {
    return;
  }
  mw.config.set(configKey, true);
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1NpdGVDb21tb25fSlMvbW9kdWxlcy9jb3JlLnRzeCIsICJzcmMvU2l0ZUNvbW1vbl9KUy9tb2R1bGVzL2kxOG4udHMiLCAic3JjL1NpdGVDb21tb25fSlMvbW9kdWxlcy90aXBweS50cyIsICJzcmMvU2l0ZUNvbW1vbl9KUy9tb2R1bGVzL2RlcHJlY2F0ZWRGdW5jdGlvbnMudHMiLCAic3JjL1NpdGVDb21tb25fSlMvU2l0ZUNvbW1vbl9KUy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IFJlYWN0IGZyb20gJ2V4dC5nYWRnZXQuUmVhY3QnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL2kxOG4nO1xuXG5jb25zdCB7d2dBY3Rpb24sIHdnQ2Fub25pY2FsU3BlY2lhbFBhZ2VOYW1lLCB3Z05hbWVzcGFjZU51bWJlciwgd2dQYWdlTmFtZSwgd2dTY3JpcHQsIHdnVXNlck5hbWV9ID0gbXcuY29uZmlnLmdldCgpO1xuXG5jb25zdCBsb2FkV2l0aFVSTCA9ICgpOiB2b2lkID0+IHtcblx0Y29uc3QgVVJMX1dJVEhfQ1NTOiBzdHJpbmcgfCBudWxsID0gbXcudXRpbC5nZXRQYXJhbVZhbHVlKCd3aXRoQ1NTJyk7XG5cdGNvbnN0IFVSTF9XSVRIX0pTOiBzdHJpbmcgfCBudWxsID0gbXcudXRpbC5nZXRQYXJhbVZhbHVlKCd3aXRoSlMnKTtcblx0Y29uc3QgVVJMX1dJVEhfTU9EVUxFOiBzdHJpbmcgfCBudWxsID0gbXcudXRpbC5nZXRQYXJhbVZhbHVlKCd3aXRoTW9kdWxlJyk7XG5cdC8qKlxuXHQgKiAmd2l0aENTUz0gYW5kICZ3aXRoSlM9IFVSTCBwYXJhbWV0ZXJzXG5cdCAqIEFsbG93IHRvIHRyeSBjdXN0b20gc2NyaXB0cyBmcm9tIE1lZGlhV2lraSBzcGFjZVxuXHQgKiB3aXRob3V0IGVkaXRpbmcgcGVyc29uYWwgLmNzcyBvciAuanMgZmlsZXNcblx0ICovXG5cdGlmIChVUkxfV0lUSF9DU1MgfHwgVVJMX1dJVEhfSlMgfHwgVVJMX1dJVEhfTU9EVUxFKSB7XG5cdFx0aWYgKFVSTF9XSVRIX0NTUyAmJiAvXk1lZGlhV2lraTpbXiMlJjw9Pl0qXFwuY3NzJC8udGVzdChVUkxfV0lUSF9DU1MpKSB7XG5cdFx0XHRtdy5sb2FkZXIubG9hZChcblx0XHRcdFx0bXcudXRpbC5nZXRVcmwoVVJMX1dJVEhfQ1NTLCB7XG5cdFx0XHRcdFx0YWN0aW9uOiAncmF3Jyxcblx0XHRcdFx0XHRjdHlwZTogJ3RleHQvY3NzJyxcblx0XHRcdFx0XHRtYXhhZ2U6ICczNjAwJyxcblx0XHRcdFx0XHRzbWF4YWdlOiAnMzYwMCcsXG5cdFx0XHRcdH0pLFxuXHRcdFx0XHQndGV4dC9jc3MnXG5cdFx0XHQpO1xuXHRcdH1cblx0XHRpZiAoVVJMX1dJVEhfSlMgJiYgL15NZWRpYVdpa2k6W14jJSY8PT5dKlxcLmpzJC8udGVzdChVUkxfV0lUSF9KUykpIHtcblx0XHRcdC8vIEB0cy1leHBlY3QtZXJyb3IgVFM2MTMzXG5cdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG5cdFx0XHR2b2lkIG13LmxvYWRlci51c2luZygnJykudGhlbigocmVxdWlyZSk6IHZvaWQgPT4ge1xuXHRcdFx0XHRtdy5sb2FkZXIubG9hZChcblx0XHRcdFx0XHRtdy51dGlsLmdldFVybChVUkxfV0lUSF9KUywge1xuXHRcdFx0XHRcdFx0YWN0aW9uOiAncmF3Jyxcblx0XHRcdFx0XHRcdGN0eXBlOiAndGV4dC9qYXZhc2NyaXB0Jyxcblx0XHRcdFx0XHRcdG1heGFnZTogJzM2MDAnLFxuXHRcdFx0XHRcdFx0c21heGFnZTogJzM2MDAnLFxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdCk7XG5cdFx0XHR9KTtcblx0XHR9XG5cdFx0aWYgKFVSTF9XSVRIX01PRFVMRSAmJiAvXmV4dFxcLlteLHxdKyQvLnRlc3QoVVJMX1dJVEhfTU9EVUxFKSkge1xuXHRcdFx0Ly8gQHRzLWV4cGVjdC1lcnJvciBUUzYxMzNcblx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcblx0XHRcdHZvaWQgbXcubG9hZGVyLnVzaW5nKFVSTF9XSVRIX01PRFVMRSkudGhlbigocmVxdWlyZSk6IHZvaWQgPT4ge1xuXHRcdFx0XHRtdy5sb2FkZXIubG9hZChVUkxfV0lUSF9NT0RVTEUpO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHR9XG5cdC8qKlxuXHQgKiBMb2FkIENTUyBhbmQgSlMgZmlsZXMgdGVtcG9yYXJpbHkgdGhyb3VnaCBVUkwuXG5cdCAqICZ1c2U9RmlsZTEuY3NzfEZpbGUyLmNzc3xGaWxlMy5qc1xuXHQgKi9cblx0Y29uc3QgVVJMX1VTRTogc3RyaW5nIHwgbnVsbCA9IG13LnV0aWwuZ2V0UGFyYW1WYWx1ZSgndXNlJyk7XG5cdGlmIChVUkxfVVNFKSB7XG5cdFx0Y29uc3Qgd2dVc2VyTmFtZUV4Y2FwZWQ6IHN0cmluZyA9IG13LnV0aWwuZXNjYXBlUmVnRXhwKHdnVXNlck5hbWUgPz8gJycpO1xuXHRcdGNvbnN0IFJFR0VYX0ZJTEU6IFJlZ0V4cCA9IG5ldyBSZWdFeHAoXG5cdFx0XHRgXig/Ok1lZGlhV2lraToke3dnVXNlck5hbWVFeGNhcGVkID8gYHxVc2VyOiR7d2dVc2VyTmFtZUV4Y2FwZWR9L2AgOiAnJ30pW14mPD49JSNdKlxcXFwuKGpzfGNzcykkYFxuXHRcdCk7XG5cdFx0Y29uc3QgUkVHRVhfRVhUOiBSZWdFeHAgPSAvXmV4dFxcLlteLF0rJC87XG5cdFx0Y29uc3QgcGF0aDogc3RyaW5nID0gYCR7d2dTY3JpcHR9P2FjdGlvbj1yYXcmY3R5cGU9dGV4dC9gO1xuXHRcdGZvciAoY29uc3QgdXNlRmlsZSBvZiBVUkxfVVNFLnNwbGl0KCd8JykpIHtcblx0XHRcdGNvbnN0IG5hbWU6IHN0cmluZyA9IHVzZUZpbGUudG9TdHJpbmcoKS50cmltKCk7XG5cdFx0XHRjb25zdCB3aGF0OiBzdHJpbmdbXSA9IFJFR0VYX0ZJTEUuZXhlYyhuYW1lKSA/PyBbJycsICcnXTtcblx0XHRcdHN3aXRjaCAod2hhdFsxXSkge1xuXHRcdFx0XHRjYXNlICdqcyc6XG5cdFx0XHRcdFx0Ly8gQHRzLWV4cGVjdC1lcnJvciBUUzYxMzNcblx0XHRcdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG5cdFx0XHRcdFx0dm9pZCBtdy5sb2FkZXIudXNpbmcoJycpLnRoZW4oKHJlcXVpcmUpOiB2b2lkID0+IHtcblx0XHRcdFx0XHRcdG13LmxvYWRlci5sb2FkKGAke3BhdGh9amF2YXNjcmlwdCZ0aXRsZT0ke2VuY29kZVVSSUNvbXBvbmVudChuYW1lKX1gKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAnY3NzJzpcblx0XHRcdFx0XHRtdy5sb2FkZXIubG9hZChgJHtwYXRofWNzcyZ0aXRsZT0ke2VuY29kZVVSSUNvbXBvbmVudChuYW1lKX1gKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRpZiAoUkVHRVhfRVhULnRlc3QobmFtZSkpIHtcblx0XHRcdFx0XHRcdC8vIEB0cy1leHBlY3QtZXJyb3IgVFM2MTMzXG5cdFx0XHRcdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG5cdFx0XHRcdFx0XHR2b2lkIG13LmxvYWRlci51c2luZyhuYW1lKS50aGVuKChyZXF1aXJlKTogdm9pZCA9PiB7XG5cdFx0XHRcdFx0XHRcdG13LmxvYWRlci5sb2FkKG5hbWUpO1xuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxufTtcblxuY29uc3Qgbm9QZXJtV2FybmluZyA9ICgpOiB2b2lkID0+IHtcblx0LyoqXG5cdCAqIExvYWQgd2FybmluZyhzKSB3aGVuIHVzZXIgaGFzIG5vIGFjY2VzcyB0byBwYWdlXG5cdCAqL1xuXHRjb25zdCBVUkxfTk9fUEVSTTogc3RyaW5nIHwgbnVsbCA9IG13LnV0aWwuZ2V0UGFyYW1WYWx1ZSgnbm9wZXJtJyk7XG5cdGlmICghVVJMX05PX1BFUk0pIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRzd2l0Y2ggKFVSTF9OT19QRVJNKSB7XG5cdFx0Y2FzZSAnMCc6XG5cdFx0XHR2b2lkIG13Lm5vdGlmeShcblx0XHRcdFx0d2luZG93LndnVUxTKFxuXHRcdFx0XHRcdCflm6DmioDmnK/ljp/lm6DvvIzmgqjmsqHmnInmnYPpmZDorr/pl67nm7jlhbPpobXpnaLjgILoi6XmnInnlpHpl67vvIzor7fkuI7msYLpl7vnmb7np5Hov5DokKXogIXogZTns7vjgIInLFxuXHRcdFx0XHRcdCflm6DmioDooZPljp/lm6DvvIzmgqjmspLmnInmrIrpmZDoqKrllY/nm7jpl5zpoIHpnaLjgILoi6XmnInnlpHllY/vvIzoq4voiIfmsYLogZ7nmb7np5HpgYvnh5/ogIXoga/ns7vjgIInXG5cdFx0XHRcdCksXG5cdFx0XHRcdHt0YWc6ICdub1Blcm0nLCB0eXBlOiAnZXJyb3InfVxuXHRcdFx0KTtcblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgJzEnOlxuXHRcdFx0dm9pZCBtdy5ub3RpZnkoXG5cdFx0XHRcdHdpbmRvdy53Z1VMUyhcblx0XHRcdFx0XHQn5oKo5rKh5pyJ5p2D6ZmQ6K6/6Zeu55u45YWz6aG16Z2i44CC6Iul5oKo5piv6LWE5rex57yW6ICF77yM6K+35LiO5rGC6Ze755m+56eR5oqA5pyv5Zui6Zif6IGU57O777yM5Lul6I635Y+W5p2D6ZmQ44CCJyxcblx0XHRcdFx0XHQn5oKo5rKS5pyJ5qyK6ZmQ6Kiq5ZWP55u46Zec6aCB6Z2i44CC6Iul5oKo5piv6LOH5rex57eo6ICF77yM6KuL6IiH5rGC6IGe55m+56eR5oqA6KGT5ZyY6ZqK6IGv57O777yM5Lul542y5Y+W5qyK6ZmQ44CCJ1xuXHRcdFx0XHQpLFxuXHRcdFx0XHR7dGFnOiAnbm9QZXJtJywgdHlwZTogJ2Vycm9yJ31cblx0XHRcdCk7XG5cdFx0XHRicmVhaztcblx0XHRjYXNlICcyJzpcblx0XHRcdHZvaWQgbXcubm90aWZ5KFxuXHRcdFx0XHR3aW5kb3cud2dVTFMoXG5cdFx0XHRcdFx0J+aCqOeahOe9kee7nOeOr+Wig+WtmOWcqOmjjumZqe+8jOivt+eZu+W9leWQjue7p+e7reS9v+eUqOOAguiLpeaCqOayoeacieaxgumXu+eZvuenkei0puWPt++8jOivt+azqOWGjOWQjueZu+W9leOAgicsXG5cdFx0XHRcdFx0J+aCqOeahOe2sui3r+eSsOWig+WtmOWcqOmiqOmaqu+8jOiri+eZu+WFpeW+jOe5vOe6jOS9v+eUqOOAguiLpeaCqOaykuacieaxguiBnueZvuenkeizrOiZn++8jOiri+azqOWGiuW+jOeZu+mMhOOAgidcblx0XHRcdFx0KSxcblx0XHRcdFx0e3RhZzogJ25vUGVybScsIHR5cGU6ICd3YXJuJ31cblx0XHRcdCk7XG5cdFx0XHRicmVhaztcblx0XHRjYXNlICczJzpcblx0XHRcdHZvaWQgbXcubm90aWZ5KFxuXHRcdFx0XHR3aW5kb3cud2dVTFMoXG5cdFx0XHRcdFx0J+ebuOWFs+WKn+iDveS7heWQkeazqOWGjOeUqOaIt+W8gOaUvu+8jOivt+eZu+W9leWQjue7p+e7reS9v+eUqOOAguiLpeaCqOayoeacieaxgumXu+eZvuenkei0puWPt++8jOivt+azqOWGjOWQjueZu+W9leOAgicsXG5cdFx0XHRcdFx0J+ebuOmXnOWKn+iDveWDheWQkeazqOWGiueUqOaItumWi+aUvu+8jOiri+eZu+WFpeW+jOe5vOe6jOS9v+eUqOOAguiLpeaCqOaykuacieaxguiBnueZvuenkeizrOiZn++8jOiri+azqOWGiuW+jOeZu+mMhOOAgidcblx0XHRcdFx0KSxcblx0XHRcdFx0e3RhZzogJ25vUGVybScsIHR5cGU6ICd3YXJuJ31cblx0XHRcdCk7XG5cdFx0XHRicmVhaztcblx0XHRkZWZhdWx0OlxuXHRcdFx0dm9pZCBtdy5ub3RpZnkoXG5cdFx0XHRcdHdpbmRvdy53Z1VMUyhcblx0XHRcdFx0XHQn5oKo5rKh5pyJ5p2D6ZmQ6K6/6Zeu55u45YWz6aG16Z2i44CC6Iul5pyJ55aR6Zeu77yM6K+35LiO5rGC6Ze755m+56eR6L+Q6JCl6ICF6IGU57O744CCJyxcblx0XHRcdFx0XHQn5oKo5rKS5pyJ5qyK6ZmQ6Kiq5ZWP55u46Zec6aCB6Z2i44CC6Iul5pyJ55aR5ZWP77yM6KuL6IiH5rGC6IGe55m+56eR6YGL54ef6ICF6IGv57O744CCJ1xuXHRcdFx0XHQpLFxuXHRcdFx0XHR7dGFnOiAnbm9QZXJtJywgdHlwZTogJ2Vycm9yJ31cblx0XHRcdCk7XG5cdH1cblxuXHRjb25zdCBuZXdVcmw6IHN0cmluZyA9IGxvY2F0aW9uLmhyZWYucmVwbGFjZSgvWz8mXW5vcGVybT1bMC05XSsvLCAnJyk7XG5cdGhpc3RvcnkucHVzaFN0YXRlKHt9LCBkb2N1bWVudC50aXRsZSwgbmV3VXJsKTtcbn07XG5cbmNvbnN0IGhpZ2hMaWdodFJldiA9ICgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkID0+IHtcblx0LyoqXG5cdCAqIEFkZCBoaWdobGlnaHQgdG8gcmV2aXNpb25zIHdoZW4gdXNpbmcgYCZoaWxpZ2h0PXJldmlkYCBvciBgJmhpZ2hsaWdodD1yZXZpZGBcblx0ICovXG5cdGNvbnN0IFVSTF9ISUdITElHSFQ6IHN0cmluZyB8IG51bGwgPSBtdy51dGlsLmdldFBhcmFtVmFsdWUoJ2hpZ2hsaWdodCcpO1xuXHRjb25zdCBVUkxfSElMSUdIVDogc3RyaW5nIHwgbnVsbCA9IG13LnV0aWwuZ2V0UGFyYW1WYWx1ZSgnaGlsaWdodCcpO1xuXHRjb25zdCBoaWdobGlnaHQ6IHN0cmluZyB8IG51bGwgPSBVUkxfSElHSExJR0hUID8/IFVSTF9ISUxJR0hUO1xuXG5cdGlmICghaGlnaGxpZ2h0IHx8IHdnQWN0aW9uICE9PSAnaGlzdG9yeScpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRmb3IgKGNvbnN0IHZlcnNpb24gb2YgaGlnaGxpZ2h0LnNwbGl0KCcsJykpIHtcblx0XHQkYm9keS5maW5kKGBpbnB1dFtuYW1lPW9sZGlkXVt2YWx1ZT0ke3ZlcnNpb259XWApLnBhcmVudCgpLmFkZENsYXNzKCdub3QtcGF0cm9sbGVkJyk7XG5cdH1cbn07XG5cbmNvbnN0IGFkZFRhcmdldEJsYW5rID0gKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQgPT4ge1xuXHQvKipcblx0ICogQWRkIHRhcmdldD1cImJsYW5rXCIgdG8gZXh0ZXJuYWwgbGlua3Ncblx0ICovXG5cdCRib2R5LmZpbmQ8SFRNTEFuY2hvckVsZW1lbnQ+KCdhLmV4dGVybmFsLCBhW3JlbD1cIm13OkV4dExpbmtcIl0nKS5maWx0ZXIoKF9pbmRleCwgZWxlbWVudCk6IGJvb2xlYW4gPT4ge1xuXHRcdGNvbnN0IGxpbmtIcmVmOiBzdHJpbmcgfCB1bmRlZmluZWQgPSAkKGVsZW1lbnQpLmF0dHIoJ2hyZWYnKTtcblx0XHRpZiAobGlua0hyZWYpIHtcblx0XHRcdGNvbnN0IGhyZWZTcGxpdDogc3RyaW5nW10gPSBsaW5rSHJlZi5zcGxpdCgnLycpO1xuXHRcdFx0aWYgKGhyZWZTcGxpdC5sZW5ndGggPCAzIHx8IGhyZWZTcGxpdFsyXSA9PT0gbG9jYXRpb24uaG9zdCkge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKGVsZW1lbnQuaHJlZi5pbmNsdWRlcyhgJHtsb2NhdGlvbi5wcm90b2NvbH0vLyR7bG9jYXRpb24uaG9zdG5hbWV9YCkpIHtcblx0XHRcdGVsZW1lbnQudGFyZ2V0ID0gJ19ibGFuayc7XG5cdFx0XHRpZiAoIWVsZW1lbnQucmVsLmluY2x1ZGVzKCdub29wZW5lcicpKSB7XG5cdFx0XHRcdGVsZW1lbnQucmVsICs9ICcgbm9vcGVuZXInO1xuXHRcdFx0fVxuXHRcdFx0aWYgKCFlbGVtZW50LnJlbC5pbmNsdWRlcygnbm9yZWZlcnJlcicpKSB7XG5cdFx0XHRcdGVsZW1lbnQucmVsICs9ICcgbm9yZWZlcnJlcic7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRydWU7XG5cdH0pO1xufTtcblxuY29uc3QgcmVtb3ZlVGl0bGVGcm9tUGVybWFsaW5rID0gKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQgPT4ge1xuXHQvKipcblx0ICogUmVtb3ZlIHRpdGxlPSogZnJvbSBwZXJtYWxpbmtcblx0ICovXG5cdGNvbnN0ICRwZXJtYUxpbms6IEpRdWVyeSA9ICRib2R5LmZpbmQoJyN0LXBlcm1hbGluaycpO1xuXHRpZiAoISRwZXJtYUxpbmsubGVuZ3RoKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgJHBlcm1hTGlua0ZpcnN0Q2hpbGQ6IEpRdWVyeTxIVE1MQW5jaG9yRWxlbWVudD4gPSAkcGVybWFMaW5rLmZpbmQ8SFRNTEFuY2hvckVsZW1lbnQ+KCc6Zmlyc3QtY2hpbGQnKTtcblxuXHRjb25zdCBocmVmOiBzdHJpbmcgfCB1bmRlZmluZWQgPSAkcGVybWFMaW5rRmlyc3RDaGlsZC5hdHRyKCdocmVmJyk/LnJlcGxhY2UoL3RpdGxlPVteJl0qJi8sICcnKTtcblx0aWYgKCFocmVmKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0JHBlcm1hTGlua0ZpcnN0Q2hpbGQuYXR0cignaHJlZicsIGhyZWYpO1xufTtcblxuY29uc3Qgb3BlblNlYXJjaEluTmV3VGFiID0gKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQgPT4ge1xuXHQvKipcblx0ICogT3BlbiBzZWFyY2ggcmVzdWx0cyBpbiBhIG5ldyB0YWIgb3Igd2luZG93XG5cdCAqIHdoZW4gaG9sZGluZyBkb3duIHRoZSBDdHJsIGtleSAoYnkgVGltZXNoaWZ0ZXIpXG5cdCAqL1xuXHQkYm9keVxuXHRcdC5maW5kKFsnI3NlYXJjaCcsICcjc2VhcmNoYm94JywgJyNzZWFyY2hmb3JtJywgJy5zZWFyY2gtdHlwZXMnLCAnI3NlYXJjaC10eXBlcyddLmpvaW4oJywnKSlcblx0XHQub24oJ2tleWRvd24ga2V5dXAgbW91c2Vkb3duJywgKGV2ZW50OiBKUXVlcnkuVHJpZ2dlcmVkRXZlbnQ8SFRNTEVsZW1lbnQ+KTogdm9pZCA9PiB7XG5cdFx0XHRjb25zdCB7Y3RybEtleSwgbWV0YUtleSwgdGFyZ2V0fSA9IGV2ZW50O1xuXHRcdFx0JCh0YXJnZXQpLmF0dHIoJ3RhcmdldCcsIGN0cmxLZXkgPz8gbWV0YUtleSA/ICdfYmxhbmsnIDogJycpO1xuXHRcdH0pO1xufTtcblxuY29uc3QgdGl0bGVDbGVhblVwID0gKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQgPT4ge1xuXHQvKipcblx0ICogQ2xlYW51cCB0aXRsZSBmb3IgYWxsIHBhZ2VzXG5cdCAqL1xuXHRjb25zdCBVUkxfRElGRjogc3RyaW5nIHwgbnVsbCA9IG13LnV0aWwuZ2V0UGFyYW1WYWx1ZSgnZGlmZicpO1xuXHRpZiAoVVJMX0RJRkYgfHwgd2dBY3Rpb24gIT09ICd2aWV3JyB8fCAhWzYsIDExOF0uaW5jbHVkZXMod2dOYW1lc3BhY2VOdW1iZXIpKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgZnVsbFBhZ2VOYW1lOiBzdHJpbmcgPSBuZXcgbXcuVGl0bGUod2dQYWdlTmFtZSkuZ2V0UHJlZml4ZWRUZXh0KCk7XG5cdGNvbnN0ICRmaXJzdEhlYWRpbmc6IEpRdWVyeSA9ICRib2R5LmZpbmQoJy5maXJzdEhlYWRpbmcnKTtcblx0Y29uc3QgZG9jdW1lbnRUaXRsZTogc3RyaW5nID0gZG9jdW1lbnQudGl0bGU7XG5cdGNvbnN0IHBhZ2VUaXRsZTogc3RyaW5nID0gJGZpcnN0SGVhZGluZy50ZXh0KCk7XG5cblx0Y29uc3QgcmVwbGFjZVRpdGxlID0gKHRpdGxlOiBzdHJpbmcpOiBzdHJpbmcgPT4gdGl0bGUucmVwbGFjZShwYWdlVGl0bGUsIGZ1bGxQYWdlTmFtZSk7XG5cblx0ZG9jdW1lbnQudGl0bGUgPSByZXBsYWNlVGl0bGUoZG9jdW1lbnRUaXRsZSk7XG5cdCRmaXJzdEhlYWRpbmcudGV4dChyZXBsYWNlVGl0bGUocGFnZVRpdGxlKSk7XG59O1xuXG5jb25zdCB1bmloYW5Qb3B1cCA9ICgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkID0+IHtcblx0LyoqXG5cdCAqIERpc3BsYXkgdGl0bGU9KC4qKSBvZiA8c3BhbiBjbGFzcz1cImlubGluZS11bmloYW5cIj4gYWZ0ZXIgdGhlbS5cblx0ICogKGJldGEgdGVzdClcblx0ICovXG5cdC8vIERvIG5vdCBkaXNwbGF5IG9uIFNwZWNpYWwgUGFnZXNcblx0aWYgKHdnTmFtZXNwYWNlTnVtYmVyIDwgMCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGZvciAoY29uc3QgZWxlbWVudCBvZiAkYm9keS5maW5kKCdhdHRyLCAuaW5saW5lLXVuaWhhbicpKSB7XG5cdFx0Y29uc3QgJGVsZW1lbnQ6IEpRdWVyeSA9ICQoZWxlbWVudCk7XG5cblx0XHRjb25zdCB0aXRsZTogc3RyaW5nIHwgdW5kZWZpbmVkID0gJGVsZW1lbnQuYXR0cigndGl0bGUnKTtcblx0XHRpZiAoIXRpdGxlKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHR2b2lkIG13LmxvYWRlci51c2luZygnb29qcy11aS1jb3JlJykudGhlbigoKTogdm9pZCA9PiB7XG5cdFx0XHRjb25zdCBwb3B1cDogT08udWkuUG9wdXBXaWRnZXQgPSBuZXcgT08udWkuUG9wdXBXaWRnZXQoe1xuXHRcdFx0XHQkY29udGVudDogJCg8cD57dGl0bGV9PC9wPikgYXMgSlF1ZXJ5LFxuXHRcdFx0XHRsYWJlbDogZ2V0TWVzc2FnZSgnTm90ZScpLFxuXHRcdFx0XHRhbmNob3I6IHRydWUsXG5cdFx0XHRcdGhlYWQ6IHRydWUsXG5cdFx0XHRcdHBhZGRlZDogdHJ1ZSxcblx0XHRcdH0pO1xuXHRcdFx0JGVsZW1lbnQuYXBwZW5kKHBvcHVwLiRlbGVtZW50KS5vbignY2xpY2snLCAoKTogdm9pZCA9PiB7XG5cdFx0XHRcdHBvcHVwLnRvZ2dsZSgpO1xuXHRcdFx0fSk7XG5cdFx0fSk7XG5cdH1cbn07XG5cbmNvbnN0IGZpeExvY2F0aW9uSGFzaCA9ICgpOiB2b2lkID0+IHtcblx0Lyog5L+u5q2j5oqY5Y+g5ZCO5a6a5L2N5Y+Y5YyWICovXG5cdGlmIChsb2NhdGlvbi5oYXNoKSB7XG5cdFx0bG9jYXRpb24uaHJlZiA9IGxvY2F0aW9uLmhhc2g7XG5cdH1cbn07XG5cbmNvbnN0IGhpZGVOZXdVc2Vyc0xvZyA9ICgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkID0+IHtcblx0Lyog5Li05pe277ya56aB5q2i55So5oi35p+l55yL55So5oi35Yib5bu65pel5b+XICovXG5cdGlmICh3Z0Nhbm9uaWNhbFNwZWNpYWxQYWdlTmFtZSAhPT0gJ0xvZycpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCAkbmV3VXNlcnNMb2c6IEpRdWVyeSA9ICRib2R5LmZpbmQoJ2lucHV0W25hbWU9XCJ3cGZpbHRlcnNbXVwiXVt2YWx1ZT1uZXd1c2Vyc10nKTtcblx0JG5ld1VzZXJzTG9nLnByb3Aoe1xuXHRcdGNoZWNrZWQ6IGZhbHNlLFxuXHRcdGRpc2FibGVkOiB0cnVlLFxuXHR9KTtcbn07XG5cbmNvbnN0IHRvZ2dsZUxpbmsgPSAoJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KTogdm9pZCA9PiB7XG5cdC8qIOiwg+aVtOaKmOWPoOaMiemSrueahOminOiJsiAqL1xuXHRjb25zdCAkdG9nZ2xlcjogSlF1ZXJ5ID0gJGJvZHkuZmluZCgnLm13LWNvbGxhcHNpYmxlLXRvZ2dsZSwgLmdhZGdldC1jb2xsYXBzaWJsZS10b2dnbGVyJyk7XG5cdGlmICghJHRvZ2dsZXIubGVuZ3RoKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0aWYgKCR0b2dnbGVyLnBhcmVudCgpWzBdPy5zdHlsZS5jb2xvcikge1xuXHRcdCR0b2dnbGVyLmZpbmQoJ2EnKS5jc3MoJ2NvbG9yJywgJ2luaGVyaXQnKTtcblx0fVxufTtcblxuZXhwb3J0IHtcblx0bG9hZFdpdGhVUkwsXG5cdG5vUGVybVdhcm5pbmcsXG5cdGhpZ2hMaWdodFJldixcblx0YWRkVGFyZ2V0QmxhbmssXG5cdHJlbW92ZVRpdGxlRnJvbVBlcm1hbGluayxcblx0b3BlblNlYXJjaEluTmV3VGFiLFxuXHR0aXRsZUNsZWFuVXAsXG5cdHVuaWhhblBvcHVwLFxuXHRmaXhMb2NhdGlvbkhhc2gsXG5cdGhpZGVOZXdVc2Vyc0xvZyxcblx0dG9nZ2xlTGluayxcbn07XG4iLCAiaW1wb3J0IHtsb2NhbGl6ZX0gZnJvbSAnZXh0LmdhZGdldC5pMThuJztcblxuY29uc3QgZ2V0STE4bk1lc3NhZ2VzID0gKCkgPT4ge1xuXHRjb25zdCB7d2dVTFN9ID0gd2luZG93O1xuXHRyZXR1cm4ge1xuXHRcdE5vdGU6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnTm90ZTogJyxcblx0XHRcdCd6aC1oYW5zJzogJ+azqOmHiu+8micsXG5cdFx0XHQnemgtaGFudCc6ICfms6jph4vvvJonLFxuXHRcdH0pLFxuXHRcdE5vUGVybUVycm9yMDogd2dVTFMoXG5cdFx0XHQn5Zug5oqA5pyv5Y6f5Zug77yM5oKo5rKh5pyJ5p2D6ZmQ6K6/6Zeu55u45YWz6aG16Z2i44CC6Iul5pyJ55aR6Zeu77yM6K+35LiO5rGC6Ze755m+56eR6L+Q6JCl6ICF6IGU57O744CCJyxcblx0XHRcdCflm6DmioDooZPljp/lm6DvvIzmgqjmspLmnInmrIrpmZDoqKrllY/nm7jpl5zpoIHpnaLjgILoi6XmnInnlpHllY/vvIzoq4voiIfmsYLogZ7nmb7np5HpgYvnh5/ogIXoga/ns7vjgIInXG5cdFx0KSxcblx0XHROb1Blcm1FcnJvcjE6IHdnVUxTKFxuXHRcdFx0J+aCqOayoeacieadg+mZkOiuv+mXruebuOWFs+mhtemdouOAguiLpeaCqOaYr+i1hOa3see8luiAhe+8jOivt+S4juaxgumXu+eZvuenkeaKgOacr+WboumYn+iBlOezu++8jOS7peiOt+WPluadg+mZkOOAgicsXG5cdFx0XHQn5oKo5rKS5pyJ5qyK6ZmQ6Kiq5ZWP55u46Zec6aCB6Z2i44CC6Iul5oKo5piv6LOH5rex57eo6ICF77yM6KuL6IiH5rGC6IGe55m+56eR5oqA6KGT5ZyY6ZqK6IGv57O777yM5Lul542y5Y+W5qyK6ZmQ44CCJ1xuXHRcdCksXG5cdFx0Tm9QZXJtRXJyb3IyOiB3Z1VMUyhcblx0XHRcdCfmgqjnmoTnvZHnu5znjq/looPlrZjlnKjpo47pmanvvIzor7fnmbvlvZXlkI7nu6fnu63kvb/nlKjjgILoi6XmgqjmsqHmnInmsYLpl7vnmb7np5HotKblj7fvvIzor7fms6jlhozlkI7nmbvlvZXjgIInLFxuXHRcdFx0J+aCqOeahOe2sui3r+eSsOWig+WtmOWcqOmiqOmaqu+8jOiri+eZu+WFpeW+jOe5vOe6jOS9v+eUqOOAguiLpeaCqOaykuacieaxguiBnueZvuenkeizrOiZn++8jOiri+azqOWGiuW+jOeZu+mMhOOAgidcblx0XHQpLFxuXHRcdE5vUGVybUVycm9yMzogd2dVTFMoXG5cdFx0XHQn55u45YWz5Yqf6IO95LuF5ZCR5rOo5YaM55So5oi35byA5pS+77yM6K+355m75b2V5ZCO57un57ut5L2/55So44CC6Iul5oKo5rKh5pyJ5rGC6Ze755m+56eR6LSm5Y+377yM6K+35rOo5YaM5ZCO55m75b2V44CCJyxcblx0XHRcdCfnm7jpl5zlip/og73lg4XlkJHms6jlhornlKjmiLbplovmlL7vvIzoq4vnmbvlhaXlvoznubznuozkvb/nlKjjgILoi6XmgqjmspLmnInmsYLogZ7nmb7np5Hos6zomZ/vvIzoq4vms6jlhorlvoznmbvpjITjgIInXG5cdFx0KSxcblx0XHROb1Blcm1FcnJvcjQ6IHdnVUxTKFxuXHRcdFx0J+aCqOayoeacieadg+mZkOiuv+mXruebuOWFs+mhtemdouOAguiLpeacieeWkemXru+8jOivt+S4juaxgumXu+eZvuenkei/kOiQpeiAheiBlOezu+OAgicsXG5cdFx0XHQn5oKo5rKS5pyJ5qyK6ZmQ6Kiq5ZWP55u46Zec6aCB6Z2i44CC6Iul5pyJ55aR5ZWP77yM6KuL6IiH5rGC6IGe55m+56eR6YGL54ef6ICF6IGv57O744CCJ1xuXHRcdCksXG5cdH07XG59O1xuXG5jb25zdCBpMThuTWVzc2FnZXMgPSBnZXRJMThuTWVzc2FnZXMoKTtcblxuY29uc3QgZ2V0TWVzc2FnZTogR2V0TWVzc2FnZXM8dHlwZW9mIGkxOG5NZXNzYWdlcz4gPSAoa2V5KSA9PiB7XG5cdHJldHVybiBpMThuTWVzc2FnZXNba2V5XSB8fCBrZXk7XG59O1xuXG5leHBvcnQge2dldE1lc3NhZ2V9O1xuIiwgImltcG9ydCB7dGlwcHl9IGZyb20gJ2V4dC5nYWRnZXQuVGlwcHknO1xuXG5jb25zdCB7c2tpbn0gPSBtdy5jb25maWcuZ2V0KCk7XG5cbmNvbnN0IGdldENvbnRlbnQgPSAocmVmZXJlbmNlOiBFbGVtZW50KTogc3RyaW5nID0+IHtcblx0Y29uc3QgbGFiZWw6IHN0cmluZyB8IG51bGwgPSByZWZlcmVuY2UuZ2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJyk7XG5cdGNvbnN0IHRpdGxlOiBzdHJpbmcgfCBudWxsID0gcmVmZXJlbmNlLmdldEF0dHJpYnV0ZSgnYWx0JykgPz8gcmVmZXJlbmNlLmdldEF0dHJpYnV0ZSgndGl0bGUnKTtcblxuXHRyZXR1cm4gKGxhYmVsID09PSB0aXRsZSA/IGxhYmVsIDogdGl0bGUgfHwgbGFiZWwpIHx8IChyZWZlcmVuY2UudGV4dENvbnRlbnQgYXMgc3RyaW5nKTtcbn07XG5cbmNvbnN0IG9uQ3JlYXRlQ2FsbGJhY2sgPSAoaW5zdGFuY2U6IFJldHVyblR5cGU8dHlwZW9mIHRpcHB5PlswXSk6IHZvaWQgPT4ge1xuXHRjb25zdCB7cmVmZXJlbmNlfSA9IGluc3RhbmNlO1xuXHRyZWZlcmVuY2Uuc2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJywgZ2V0Q29udGVudChyZWZlcmVuY2UpKTtcblx0cmVmZXJlbmNlLnJlbW92ZUF0dHJpYnV0ZSgndGl0bGUnKTtcbn07XG5cbmNvbnN0IG9uU2hvd0NhbGxiYWNrID0gKGluc3RhbmNlOiBSZXR1cm5UeXBlPHR5cGVvZiB0aXBweT5bMF0pOiB2b2lkID0+IHtcblx0b25DcmVhdGVDYWxsYmFjayhpbnN0YW5jZSk7XG5cdGluc3RhbmNlLnNldENvbnRlbnQoZ2V0Q29udGVudChpbnN0YW5jZS5yZWZlcmVuY2UpKTtcbn07XG5cbmNvbnN0IHRpcHB5Rm9yQ2l0aXplbkhlYWRlciA9ICgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkID0+IHtcblx0aWYgKHNraW4gIT09ICdjaXRpemVuJykge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGZvciAoY29uc3QgZWxlbWVudCBvZiAkYm9keS5maW5kKFxuXHRcdFtcblx0XHRcdCcuY2l0aXplbi1oZWFkZXIgbGFiZWxbdGl0bGVdJyxcblx0XHRcdCcuY2l0aXplbi1oZWFkZXIgLm13LWVjaG8tbm90aWZpY2F0aW9ucy1iYWRnZScsXG5cdFx0XHQnLmNpdGl6ZW4taGVhZGVyX19sb2dvIGEnLFxuXHRcdFx0Jy5wYWdlLWFjdGlvbnM+bmF2PnVsPmxpIGEnLFxuXHRcdFx0Jy5wYWdlLWFjdGlvbnNfX2J1dHRvbicsXG5cdFx0XS5qb2luKCcsJylcblx0KSkge1xuXHRcdGNvbnN0ICRlbGVtZW50OiBKUXVlcnkgPSAkKGVsZW1lbnQpO1xuXHRcdGxldCB0aXRsZTogc3RyaW5nIHwgdW5kZWZpbmVkID0gJGVsZW1lbnQuYXR0cigndGl0bGUnKTtcblx0XHRpZiAoIXRpdGxlKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHR0aXRsZSA9IHRpdGxlLnJlcGxhY2UoL1xccyo/XFxbLis/XSQvLCAnJyk7XG5cblx0XHQkZWxlbWVudC5hdHRyKHtcblx0XHRcdCdhcmlhLWxhYmVsJzogdGl0bGUsXG5cdFx0XHR0aXRsZTogJycsXG5cdFx0fSk7XG5cdFx0dGlwcHkoJGVsZW1lbnQuZ2V0KDApIGFzIEhUTUxFbGVtZW50LCB7XG5cdFx0XHRhcnJvdzogdHJ1ZSxcblx0XHRcdGNvbnRlbnQ6IHRpdGxlLFxuXHRcdFx0cGxhY2VtZW50OiAnYm90dG9tJyxcblx0XHRcdG9uQ3JlYXRlOiBvbkNyZWF0ZUNhbGxiYWNrLFxuXHRcdFx0b25IaWRkZW46IG9uQ3JlYXRlQ2FsbGJhY2ssXG5cdFx0XHRvblNob3c6IG9uU2hvd0NhbGxiYWNrLFxuXHRcdH0pO1xuXHR9XG59O1xuXG5jb25zdCB0aXBweUZvckV4dGVuc2lvbiA9IGFzeW5jICgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0YXdhaXQgbXcubG9hZGVyLnVzaW5nKCdleHQuQ29sbGFwc2libGVTaWRlYmFyLmpzJyk7XG5cdHRpcHB5KCcjc2lkZWJhckJ1dHRvbicsIHtcblx0XHRhcnJvdzogdHJ1ZSxcblx0XHRjb250ZW50OiBnZXRDb250ZW50LFxuXHRcdHBsYWNlbWVudDogJ2xlZnQnLFxuXHRcdG9uQ3JlYXRlOiBvbkNyZWF0ZUNhbGxiYWNrLFxuXHRcdG9uSGlkZGVuOiBvbkNyZWF0ZUNhbGxiYWNrLFxuXHRcdG9uU2hvdzogb25TaG93Q2FsbGJhY2ssXG5cdH0pO1xuXG5cdGlmIChza2luID09PSAndmVjdG9yJykge1xuXHRcdGF3YWl0IG13LmxvYWRlci51c2luZygnZXh0LkNvbGxhcHNpYmxlU2lkZWJhci52ZWN0b3InKTtcblx0XHR0aXBweSgnI3NpZGViYXJDb2xsYXBzZScsIHtcblx0XHRcdGFycm93OiB0cnVlLFxuXHRcdFx0Y29udGVudDogZ2V0Q29udGVudCxcblx0XHRcdHBsYWNlbWVudDogJ3JpZ2h0Jyxcblx0XHRcdG9uQ3JlYXRlOiBvbkNyZWF0ZUNhbGxiYWNrLFxuXHRcdFx0b25IaWRkZW46IG9uQ3JlYXRlQ2FsbGJhY2ssXG5cdFx0XHRvblNob3c6IG9uU2hvd0NhbGxiYWNrLFxuXHRcdH0pO1xuXHR9XG5cblx0YXdhaXQgbXcubG9hZGVyLnVzaW5nKCdleHQuRGFya01vZGUnKTtcblx0dGlwcHkoJyNkYXJrbW9kZS1idXR0b24nLCB7XG5cdFx0YXJyb3c6IHRydWUsXG5cdFx0Y29udGVudDogZ2V0Q29udGVudCxcblx0XHRwbGFjZW1lbnQ6ICdsZWZ0Jyxcblx0XHRvbkNyZWF0ZTogb25DcmVhdGVDYWxsYmFjayxcblx0XHRvbkhpZGRlbjogb25DcmVhdGVDYWxsYmFjayxcblx0XHRvblNob3c6IG9uU2hvd0NhbGxiYWNrLFxuXHR9KTtcbn07XG5cbmV4cG9ydCB7dGlwcHlGb3JDaXRpemVuSGVhZGVyLCB0aXBweUZvckV4dGVuc2lvbn07XG4iLCAiY29uc3QgZGVwcmVjYXRlZEZ1bmN0aW9ucyA9ICgpOiB2b2lkID0+IHtcblx0LyohXG5cdCAqIG1haW50ZW5hbmNlOiBTb21lIHVzZXIgc2NyaXB0cyBtYXkgYmUgdXNpbmcgdGhlIGZvbGxvd2luZyBkZXByZWNhdGVkIGZ1bmN0aW9ucy5cblx0ICogVGhlc2UgZnVuY3Rpb25zIGFyZSBubyBsb25nZXIgc3VwcG9ydGVkIGFuZCBzaG91bGQgYmUgdXBkYXRlZC5cblx0ICovXG5cdG13LmxvZy5kZXByZWNhdGUoXG5cdFx0d2luZG93LFxuXHRcdCdpbXBvcnRTY3JpcHQnLFxuXHRcdCh0aXRsZTogc3RyaW5nKTogSFRNTFNjcmlwdEVsZW1lbnQgPT4ge1xuXHRcdFx0cmV0dXJuIG13LmxvYWRlci5hZGRTY3JpcHRUYWcoXG5cdFx0XHRcdG13LnV0aWwuZ2V0VXJsKHRpdGxlLCB7XG5cdFx0XHRcdFx0YWN0aW9uOiAncmF3Jyxcblx0XHRcdFx0XHRjdHlwZTogJ3RleHQvamF2YXNjcmlwdCcsXG5cdFx0XHRcdFx0bWF4YWdlOiAnMzYwMCcsXG5cdFx0XHRcdFx0c21heGFnZTogJzM2MDAnLFxuXHRcdFx0XHR9KVxuXHRcdFx0KTtcblx0XHR9LFxuXHRcdCdVc2UgbXcubG9hZGVyLmFkZFNjcmlwdFRhZygpIGluc3RlYWQnXG5cdCk7XG5cdG13LmxvZy5kZXByZWNhdGUoXG5cdFx0d2luZG93LFxuXHRcdCdpbXBvcnRTdHlsZXNoZWV0Jyxcblx0XHQodGl0bGU6IHN0cmluZyk6IEhUTUxMaW5rRWxlbWVudCA9PiB7XG5cdFx0XHRyZXR1cm4gbXcubG9hZGVyLmFkZExpbmtUYWcoXG5cdFx0XHRcdG13LnV0aWwuZ2V0VXJsKHRpdGxlLCB7XG5cdFx0XHRcdFx0YWN0aW9uOiAncmF3Jyxcblx0XHRcdFx0XHRjdHlwZTogJ3RleHQvY3NzJyxcblx0XHRcdFx0XHRtYXhhZ2U6ICczNjAwJyxcblx0XHRcdFx0XHRzbWF4YWdlOiAnMzYwMCcsXG5cdFx0XHRcdH0pLFxuXHRcdFx0XHQndGV4dC9jc3MnXG5cdFx0XHQpO1xuXHRcdH0sXG5cdFx0J1VzZSBtdy5sb2FkZXIuYWRkTGlua1RhZygpIGluc3RlYWQnXG5cdCk7XG5cdG13LmxvZy5kZXByZWNhdGUoXG5cdFx0d2luZG93LFxuXHRcdCdpbXBvcnRTY3JpcHRVUkknLFxuXHRcdChtb2R1bGVzOiBzdHJpbmcpOiBIVE1MU2NyaXB0RWxlbWVudCA9PiB7XG5cdFx0XHRyZXR1cm4gbXcubG9hZGVyLmFkZFNjcmlwdFRhZyhtdy51dGlsLndpa2lVcmxlbmNvZGUobW9kdWxlcykpO1xuXHRcdH0sXG5cdFx0J1VzZSBtdy5sb2FkZXIuYWRkU2NyaXB0VGFnKCkgb3IgbXcubG9hZGVyLmdldFNjcmlwdCgpIGluc3RlYWQnXG5cdCk7XG5cdG13LmxvZy5kZXByZWNhdGUoXG5cdFx0d2luZG93LFxuXHRcdCdpbXBvcnRTdHlsZXNoZWV0VVJJJyxcblx0XHQobW9kdWxlczogc3RyaW5nKTogSFRNTExpbmtFbGVtZW50ID0+IHtcblx0XHRcdHJldHVybiBtdy5sb2FkZXIuYWRkTGlua1RhZyhtdy51dGlsLndpa2lVcmxlbmNvZGUobW9kdWxlcyksICd0ZXh0L2NzcycpO1xuXHRcdH0sXG5cdFx0J1VzZSBtdy5sb2FkZXIuYWRkTGlua1RhZygpIGluc3RlYWQnXG5cdCk7XG5cdG13LmxvZy5kZXByZWNhdGUoXG5cdFx0d2luZG93LFxuXHRcdC8vIEB0cy1leHBlY3QtZXJyb3IgVFMyMzQ1XG5cdFx0J2ltcG9ydFNjcmlwdENhbGxiYWNrJyxcblx0XHQodGl0bGU6IHN0cmluZywgcmVhZHk6IG5ldmVyKTogdm9pZCA9PiB7XG5cdFx0XHR2b2lkIG13LmxvYWRlclxuXHRcdFx0XHQuZ2V0U2NyaXB0KFxuXHRcdFx0XHRcdG13LnV0aWwuZ2V0VXJsKHRpdGxlLCB7XG5cdFx0XHRcdFx0XHRhY3Rpb246ICdyYXcnLFxuXHRcdFx0XHRcdFx0Y3R5cGU6ICd0ZXh0L2phdmFzY3JpcHQnLFxuXHRcdFx0XHRcdFx0bWF4YWdlOiAnMzYwMCcsXG5cdFx0XHRcdFx0XHRzbWF4YWdlOiAnMzYwMCcsXG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0KVxuXHRcdFx0XHQudGhlbihyZWFkeSk7XG5cdFx0fSxcblx0XHQnVXNlIG13LmxvYWRlci5nZXRTY3JpcHQoKSBpbnN0ZWFkJ1xuXHQpO1xuXHRtdy5sb2cuZGVwcmVjYXRlKFxuXHRcdHdpbmRvdyxcblx0XHQvLyBAdHMtZXhwZWN0LWVycm9yIFRTMjM0NVxuXHRcdCdpbXBvcnRTY3JpcHRVUklDYWxsYmFjaycsXG5cdFx0KHVybDogc3RyaW5nLCByZWFkeTogbmV2ZXIpOiB2b2lkID0+IHtcblx0XHRcdHZvaWQgbXcubG9hZGVyLmdldFNjcmlwdCh1cmwpLnRoZW4ocmVhZHkpO1xuXHRcdH0sXG5cdFx0J1VzZSBtdy5sb2FkZXIuZ2V0U2NyaXB0KCkgaW5zdGVhZCdcblx0KTtcblx0LyoqXG5cdCAqIG1haW50ZW5hbmNlOiBTb21lIHVzZXIgc2NyaXB0cyBtYXkgYmUgdXNpbmcgdGhlIGZvbGxvd2luZyBkZXByZWNhdGVkIGZ1bmN0aW9ucy5cblx0ICogVGhlc2UgZnVuY3Rpb25zIGFyZSBrZXB0IGZvciBjb21wYWJpbGl0eS5cblx0ICovXG5cdC8vIG13LmxvZy5kZXByZWNhdGUod2luZG93LCAnSlNDb25maWcnLCB7fSwgJ1VzZSB7fSBpbnN0ZWFkJyk7XG5cdC8qKlxuXHQgKiB3Z1UqUyBmdW5jdGlvbnMgaGF2ZSBiZWVuIHNwbGl0IHRvIGEgc2VwZXJhdGUgZ2FkZ2V0IChleHQuZ2FkZ2V0LmkxOG4pLlxuXHQgKi9cbn07XG5cbmV4cG9ydCB7ZGVwcmVjYXRlZEZ1bmN0aW9uc307XG4iLCAiaW1wb3J0IHtcblx0YWRkVGFyZ2V0QmxhbmssXG5cdGZpeExvY2F0aW9uSGFzaCxcblx0aGlkZU5ld1VzZXJzTG9nLFxuXHRoaWdoTGlnaHRSZXYsXG5cdGxvYWRXaXRoVVJMLFxuXHRub1Blcm1XYXJuaW5nLFxuXHRvcGVuU2VhcmNoSW5OZXdUYWIsXG5cdHJlbW92ZVRpdGxlRnJvbVBlcm1hbGluayxcblx0dGl0bGVDbGVhblVwLFxuXHR0b2dnbGVMaW5rLFxuXHR1bmloYW5Qb3B1cCxcbn0gZnJvbSAnLi9tb2R1bGVzL2NvcmUnO1xuaW1wb3J0IHt0aXBweUZvckNpdGl6ZW5IZWFkZXIsIHRpcHB5Rm9yRXh0ZW5zaW9ufSBmcm9tICcuL21vZHVsZXMvdGlwcHknO1xuaW1wb3J0IHtkZXByZWNhdGVkRnVuY3Rpb25zfSBmcm9tICcuL21vZHVsZXMvZGVwcmVjYXRlZEZ1bmN0aW9ucyc7XG5pbXBvcnQge2dldEJvZHl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbihmdW5jdGlvbiBzaXRlQ29tbW9uKCk6IHZvaWQge1xuXHRjb25zdCBjb25maWdLZXk6IHN0cmluZyA9ICdnYWRnZXQtU2l0ZUNvbW1vbl9KU19fSW5pdGlhbGl6ZWQnO1xuXG5cdC8vIEd1YXJkIGFnYWluc3QgZG91YmxlIGluY2x1c2lvbnNcblx0aWYgKG13LmNvbmZpZy5nZXQoY29uZmlnS2V5KSkge1xuXHRcdHJldHVybjtcblx0fVxuXHQvLyBTZXQgZ3VhcmRcblx0bXcuY29uZmlnLnNldChjb25maWdLZXksIHRydWUpO1xuXG5cdC8vIENvcmUgbW9kdWxlc1xuXHRsb2FkV2l0aFVSTCgpO1xuXHRub1Blcm1XYXJuaW5nKCk7XG5cdGZpeExvY2F0aW9uSGFzaCgpO1xuXG5cdHZvaWQgZ2V0Qm9keSgpLnRoZW4oKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQgPT4ge1xuXHRcdC8vIENvcmUgbW9kdWxlcyAobmVlZCAkLnJlYWR5KVxuXHRcdGhpZ2hMaWdodFJldigkYm9keSk7XG5cdFx0YWRkVGFyZ2V0QmxhbmsoJGJvZHkpO1xuXHRcdHJlbW92ZVRpdGxlRnJvbVBlcm1hbGluaygkYm9keSk7XG5cdFx0b3BlblNlYXJjaEluTmV3VGFiKCRib2R5KTtcblx0XHR0aXRsZUNsZWFuVXAoJGJvZHkpO1xuXHRcdHVuaWhhblBvcHVwKCRib2R5KTtcblx0XHRoaWRlTmV3VXNlcnNMb2coJGJvZHkpO1xuXHRcdHRvZ2dsZUxpbmsoJGJvZHkpO1xuXG5cdFx0Ly8gVGlwcHktcmVsYXRlZCBjb2RlcyAobmVlZCAkLnJlYWR5KVxuXHRcdHRpcHB5Rm9yQ2l0aXplbkhlYWRlcigkYm9keSk7XG5cdH0pO1xuXG5cdC8vIERlcHJlY2F0ZWQgZnVuY3Rpb25zXG5cdGRlcHJlY2F0ZWRGdW5jdGlvbnMoKTtcblxuXHQvLyBUaXBweS1yZWxhdGVkIGNvZGVzXG5cdHZvaWQgdGlwcHlGb3JFeHRlbnNpb24oKTtcbn0pKCk7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEscUJBQWtCQyxRQUFBQyxRQUFBLGtCQUFBLEdBQUEsQ0FBQTs7QUNBbEIsSUFBQUMsb0JBQXVCRCxRQUFBLGlCQUFBO0FBRXZCLElBQU1FLGtCQUFrQkEsTUFBTTtBQUM3QixRQUFNO0lBQUNDO0VBQUssSUFBSUM7QUFDaEIsU0FBTztJQUNOQyxPQUFBLEdBQU1KLGtCQUFBSyxVQUFTO01BQ2RDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDREMsY0FBY0wsTUFDYix1Q0FDQSxxQ0FDRDtJQUNBTSxjQUFjTixNQUNiLDJDQUNBLHlDQUNEO0lBQ0FPLGNBQWNQLE1BQ2IsMENBQ0Esd0NBQ0Q7SUFDQVEsY0FBY1IsTUFDYiw0Q0FDQSwwQ0FDRDtJQUNBUyxjQUFjVCxNQUNiLGlDQUNBLCtCQUNEO0VBQ0Q7QUFDRDtBQUVBLElBQU1VLGVBQWVYLGdCQUFnQjtBQUVyQyxJQUFNWSxhQUFnREMsU0FBUTtBQUM3RCxTQUFPRixhQUFhRSxHQUFHLEtBQUtBO0FBQzdCOztBRGxDQSxJQUFNO0VBQUNDO0VB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S0FBSztBQUNsQlUsbUJBQWVWLEtBQUs7QUFDcEJ5Qiw2QkFBeUJ6QixLQUFLO0FBQzlCNkIsdUJBQW1CN0IsS0FBSztBQUN4Qm1DLGlCQUFhbkMsS0FBSztBQUNsQjZDLGdCQUFZN0MsS0FBSztBQUNqQmdFLG9CQUFnQmhFLEtBQUs7QUFDckJxRSxlQUFXckUsS0FBSztBQUdoQndGLDBCQUFzQnhGLEtBQUs7RUFDNUIsQ0FBQztBQUdEdUcsc0JBQW9CO0FBR3BCLE9BQUtMLGtCQUFrQjtBQUN4QixHQUFHOyIsCiAgIm5hbWVzIjogWyJpbXBvcnRfZXh0X2dhZGdldDIiLCAiX190b0VTTSIsICJyZXF1aXJlIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgImdldEkxOG5NZXNzYWdlcyIsICJ3Z1VMUyIsICJ3aW5kb3ciLCAiTm90ZSIsICJsb2NhbGl6ZSIsICJlbiIsICJOb1Blcm1FcnJvcjAiLCAiTm9QZXJtRXJyb3IxIiwgIk5vUGVybUVycm9yMiIsICJOb1Blcm1FcnJvcjMiLCAiTm9QZXJtRXJyb3I0IiwgImkxOG5NZXNzYWdlcyIsICJnZXRNZXNzYWdlIiwgImtleSIsICJ3Z0FjdGlvbiIsICJ3Z0Nhbm9uaWNhbFNwZWNpYWxQYWdlTmFtZSIsICJ3Z05hbWVzcGFjZU51bWJlciIsICJ3Z1BhZ2VOYW1lIiwgIndnU2NyaXB0IiwgIndnVXNlck5hbWUiLCAibXciLCAiY29uZmlnIiwgImdldCIsICJsb2FkV2l0aFVSTCIsICJVUkxfV0lUSF9DU1MiLCAidXRpbCIsICJnZXRQYXJhbVZhbHVlIiwgIlVSTF9XSVRIX0pTIiwgIlVSTF9XSVRIX01PRFVMRSIsICJ0ZXN0IiwgImxvYWRlciIsICJsb2FkIiwgImdldFVybCIsICJhY3Rpb24iLCAiY3R5cGUiLCAibWF4YWdlIiwgInNtYXhhZ2UiLCAidXNpbmciLCAidGhlbiIsICJyZXF1aXJlMiIsICJVUkxfVVNFIiwgIndnVXNlck5hbWVFeGNhcGVkIiwgImVzY2FwZVJlZ0V4cCIsICJSRUdFWF9GSUxFIiwgIlJlZ0V4cCIsICJjb25jYXQiLCAiUkVHRVhfRVhUIiwgInBhdGgiLCAiX2l0ZXJhdG9yMiIsICJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsICJzcGxpdCIsICJfc3RlcDIiLCAicyIsICJuIiwgImRvbmUiLCAiX1JFR0VYX0ZJTEUkZXhlYyIsICJ1c2VGaWxlIiwgInZhbHVlIiwgIm5hbWUiLCAidG9TdHJpbmciLCAidHJpbSIsICJ3aGF0IiwgImV4ZWMiLCAiZW5jb2RlVVJJQ29tcG9uZW50IiwgImVyciIsICJlIiwgImYiLCAibm9QZXJtV2FybmluZyIsICJVUkxfTk9fUEVSTSIsICJub3RpZnkiLCAidGFnIiwgInR5cGUiLCAibmV3VXJsIiwgImxvY2F0aW9uIiwgImhyZWYiLCAicmVwbGFjZSIsICJoaXN0b3J5IiwgInB1c2hTdGF0ZSIsICJkb2N1bWVudCIsICJ0aXRsZSIsICJoaWdoTGlnaHRSZXYiLCAiJGJvZHkiLCAiVVJMX0hJR0hMSUdIVCIsICJVUkxfSElMSUdIVCIsICJoaWdobGlnaHQiLCAiX2l0ZXJhdG9yMyIsICJfc3RlcDMiLCAidmVyc2lvbiIsICJmaW5kIiwgInBhcmVudCIsICJhZGRDbGFzcyIsICJhZGRUYXJnZXRCbGFuayIsICJmaWx0ZXIiLCAiX2luZGV4IiwgImVsZW1lbnQiLCAibGlua0hyZWYiLCAiJCIsICJhdHRyIiwgImhyZWZTcGxpdCIsICJsZW5ndGgiLCAiaG9zdCIsICJpbmNsdWRlcyIsICJwcm90b2NvbCIsICJob3N0bmFtZSIsICJ0YXJnZXQiLCAicmVsIiwgInJlbW92ZVRpdGxlRnJvbVBlcm1hbGluayIsICJfJHBlcm1hTGlua0ZpcnN0Q2hpbGQiLCAiJHBlcm1hTGluayIsICIkcGVybWFMaW5rRmlyc3RDaGlsZCIsICJvcGVuU2VhcmNoSW5OZXdUYWIiLCAiam9pbiIsICJvbiIsICJldmVudCIsICJjdHJsS2V5IiwgIm1ldGFLZXkiLCAidGl0bGVDbGVhblVwIiwgIlVSTF9ESUZGIiwgImZ1bGxQYWdlTmFtZSIsICJUaXRsZSIsICJnZXRQcmVmaXhlZFRleHQiLCAiJGZpcnN0SGVhZGluZyIsICJkb2N1bWVudFRpdGxlIiwgInBhZ2VUaXRsZSIsICJ0ZXh0IiwgInJlcGxhY2VUaXRsZSIsICJ1bmloYW5Qb3B1cCIsICJfaXRlcmF0b3I0IiwgIl9zdGVwNCIsICIkZWxlbWVudCIsICJwb3B1cCIsICJPTyIsICJ1aSIsICJQb3B1cFdpZGdldCIsICIkY29udGVudCIsICJkZWZhdWx0IiwgImNyZWF0ZUVsZW1lbnQiLCAibGFiZWwiLCAiYW5jaG9yIiwgImhlYWQiLCAicGFkZGVkIiwgImFwcGVuZCIsICJ0b2dnbGUiLCAiZml4TG9jYXRpb25IYXNoIiwgImhhc2giLCAiaGlkZU5ld1VzZXJzTG9nIiwgIiRuZXdVc2Vyc0xvZyIsICJwcm9wIiwgImNoZWNrZWQiLCAiZGlzYWJsZWQiLCAidG9nZ2xlTGluayIsICJfJHRvZ2dsZXIkcGFyZW50JCIsICIkdG9nZ2xlciIsICJzdHlsZSIsICJjb2xvciIsICJjc3MiLCAiaW1wb3J0X2V4dF9nYWRnZXQzIiwgInNraW4iLCAiZ2V0Q29udGVudCIsICJyZWZlcmVuY2UiLCAiX3JlZmVyZW5jZSRnZXRBdHRyaWJ1IiwgImdldEF0dHJpYnV0ZSIsICJ0ZXh0Q29udGVudCIsICJvbkNyZWF0ZUNhbGxiYWNrIiwgImluc3RhbmNlIiwgInNldEF0dHJpYnV0ZSIsICJyZW1vdmVBdHRyaWJ1dGUiLCAib25TaG93Q2FsbGJhY2siLCAic2V0Q29udGVudCIsICJ0aXBweUZvckNpdGl6ZW5IZWFkZXIiLCAiX2l0ZXJhdG9yNSIsICJfc3RlcDUiLCAidGlwcHkiLCAiYXJyb3ciLCAiY29udGVudCIsICJwbGFjZW1lbnQiLCAib25DcmVhdGUiLCAib25IaWRkZW4iLCAib25TaG93IiwgInRpcHB5Rm9yRXh0ZW5zaW9uIiwgIl9yZWYiLCAiX2FzeW5jVG9HZW5lcmF0b3IiLCAiYXBwbHkiLCAiYXJndW1lbnRzIiwgImRlcHJlY2F0ZWRGdW5jdGlvbnMiLCAibG9nIiwgImRlcHJlY2F0ZSIsICJhZGRTY3JpcHRUYWciLCAiYWRkTGlua1RhZyIsICJtb2R1bGVzIiwgIndpa2lVcmxlbmNvZGUiLCAicmVhZHkiLCAiZ2V0U2NyaXB0IiwgInVybCIsICJpbXBvcnRfZXh0X2dhZGdldDQiLCAic2l0ZUNvbW1vbiIsICJjb25maWdLZXkiLCAic2V0IiwgImdldEJvZHkiXQp9Cg==

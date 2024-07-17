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
function asyncGeneratorStep(n, t, e, r, o, a, c) {
  try {
    var i = n[a](c), u = i.value;
  } catch (n2) {
    return void e(n2);
  }
  i.done ? t(u) : Promise.resolve(u).then(r, o);
}
function _asyncToGenerator(n) {
  return function() {
    var t = this, e = arguments;
    return new Promise(function(r, o) {
      var a = n.apply(t, e);
      function _next(n2) {
        asyncGeneratorStep(a, r, o, _next, _throw, "next", n2);
      }
      function _throw(n2) {
        asyncGeneratorStep(a, r, o, _next, _throw, "throw", n2);
      }
      _next(void 0);
    });
  };
}
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1NpdGVDb21tb25fSlMvbW9kdWxlcy9jb3JlLnRzeCIsICJzcmMvU2l0ZUNvbW1vbl9KUy9tb2R1bGVzL2kxOG4udHMiLCAic3JjL1NpdGVDb21tb25fSlMvbW9kdWxlcy90aXBweS50cyIsICJzcmMvU2l0ZUNvbW1vbl9KUy9tb2R1bGVzL2RlcHJlY2F0ZWRGdW5jdGlvbnMudHMiLCAic3JjL1NpdGVDb21tb25fSlMvU2l0ZUNvbW1vbl9KUy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IFJlYWN0IGZyb20gJ2V4dC5nYWRnZXQuUmVhY3QnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL2kxOG4nO1xuXG5jb25zdCB7d2dBY3Rpb24sIHdnQ2Fub25pY2FsU3BlY2lhbFBhZ2VOYW1lLCB3Z05hbWVzcGFjZU51bWJlciwgd2dQYWdlTmFtZSwgd2dTY3JpcHQsIHdnVXNlck5hbWV9ID0gbXcuY29uZmlnLmdldCgpO1xuXG5jb25zdCBsb2FkV2l0aFVSTCA9ICgpOiB2b2lkID0+IHtcblx0Y29uc3QgVVJMX1dJVEhfQ1NTOiBzdHJpbmcgfCBudWxsID0gbXcudXRpbC5nZXRQYXJhbVZhbHVlKCd3aXRoQ1NTJyk7XG5cdGNvbnN0IFVSTF9XSVRIX0pTOiBzdHJpbmcgfCBudWxsID0gbXcudXRpbC5nZXRQYXJhbVZhbHVlKCd3aXRoSlMnKTtcblx0Y29uc3QgVVJMX1dJVEhfTU9EVUxFOiBzdHJpbmcgfCBudWxsID0gbXcudXRpbC5nZXRQYXJhbVZhbHVlKCd3aXRoTW9kdWxlJyk7XG5cdC8qKlxuXHQgKiAmd2l0aENTUz0gYW5kICZ3aXRoSlM9IFVSTCBwYXJhbWV0ZXJzXG5cdCAqIEFsbG93IHRvIHRyeSBjdXN0b20gc2NyaXB0cyBmcm9tIE1lZGlhV2lraSBzcGFjZVxuXHQgKiB3aXRob3V0IGVkaXRpbmcgcGVyc29uYWwgLmNzcyBvciAuanMgZmlsZXNcblx0ICovXG5cdGlmIChVUkxfV0lUSF9DU1MgfHwgVVJMX1dJVEhfSlMgfHwgVVJMX1dJVEhfTU9EVUxFKSB7XG5cdFx0aWYgKFVSTF9XSVRIX0NTUyAmJiAvXk1lZGlhV2lraTpbXiMlJjw9Pl0qXFwuY3NzJC8udGVzdChVUkxfV0lUSF9DU1MpKSB7XG5cdFx0XHRtdy5sb2FkZXIubG9hZChcblx0XHRcdFx0bXcudXRpbC5nZXRVcmwoVVJMX1dJVEhfQ1NTLCB7XG5cdFx0XHRcdFx0YWN0aW9uOiAncmF3Jyxcblx0XHRcdFx0XHRjdHlwZTogJ3RleHQvY3NzJyxcblx0XHRcdFx0XHRtYXhhZ2U6ICczNjAwJyxcblx0XHRcdFx0XHRzbWF4YWdlOiAnMzYwMCcsXG5cdFx0XHRcdH0pLFxuXHRcdFx0XHQndGV4dC9jc3MnXG5cdFx0XHQpO1xuXHRcdH1cblx0XHRpZiAoVVJMX1dJVEhfSlMgJiYgL15NZWRpYVdpa2k6W14jJSY8PT5dKlxcLmpzJC8udGVzdChVUkxfV0lUSF9KUykpIHtcblx0XHRcdC8vIEB0cy1leHBlY3QtZXJyb3IgVFM2MTMzXG5cdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG5cdFx0XHR2b2lkIG13LmxvYWRlci51c2luZygnJykudGhlbigocmVxdWlyZSk6IHZvaWQgPT4ge1xuXHRcdFx0XHRtdy5sb2FkZXIubG9hZChcblx0XHRcdFx0XHRtdy51dGlsLmdldFVybChVUkxfV0lUSF9KUywge1xuXHRcdFx0XHRcdFx0YWN0aW9uOiAncmF3Jyxcblx0XHRcdFx0XHRcdGN0eXBlOiAndGV4dC9qYXZhc2NyaXB0Jyxcblx0XHRcdFx0XHRcdG1heGFnZTogJzM2MDAnLFxuXHRcdFx0XHRcdFx0c21heGFnZTogJzM2MDAnLFxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdCk7XG5cdFx0XHR9KTtcblx0XHR9XG5cdFx0aWYgKFVSTF9XSVRIX01PRFVMRSAmJiAvXmV4dFxcLlteLHxdKyQvLnRlc3QoVVJMX1dJVEhfTU9EVUxFKSkge1xuXHRcdFx0Ly8gQHRzLWV4cGVjdC1lcnJvciBUUzYxMzNcblx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcblx0XHRcdHZvaWQgbXcubG9hZGVyLnVzaW5nKFVSTF9XSVRIX01PRFVMRSkudGhlbigocmVxdWlyZSk6IHZvaWQgPT4ge1xuXHRcdFx0XHRtdy5sb2FkZXIubG9hZChVUkxfV0lUSF9NT0RVTEUpO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHR9XG5cdC8qKlxuXHQgKiBMb2FkIENTUyBhbmQgSlMgZmlsZXMgdGVtcG9yYXJpbHkgdGhyb3VnaCBVUkwuXG5cdCAqICZ1c2U9RmlsZTEuY3NzfEZpbGUyLmNzc3xGaWxlMy5qc1xuXHQgKi9cblx0Y29uc3QgVVJMX1VTRTogc3RyaW5nIHwgbnVsbCA9IG13LnV0aWwuZ2V0UGFyYW1WYWx1ZSgndXNlJyk7XG5cdGlmIChVUkxfVVNFKSB7XG5cdFx0Y29uc3Qgd2dVc2VyTmFtZUV4Y2FwZWQ6IHN0cmluZyA9IG13LnV0aWwuZXNjYXBlUmVnRXhwKHdnVXNlck5hbWUgPz8gJycpO1xuXHRcdGNvbnN0IFJFR0VYX0ZJTEU6IFJlZ0V4cCA9IG5ldyBSZWdFeHAoXG5cdFx0XHRgXig/Ok1lZGlhV2lraToke3dnVXNlck5hbWVFeGNhcGVkID8gYHxVc2VyOiR7d2dVc2VyTmFtZUV4Y2FwZWR9L2AgOiAnJ30pW14mPD49JSNdKlxcXFwuKGpzfGNzcykkYFxuXHRcdCk7XG5cdFx0Y29uc3QgUkVHRVhfRVhUOiBSZWdFeHAgPSAvXmV4dFxcLlteLF0rJC87XG5cdFx0Y29uc3QgcGF0aDogc3RyaW5nID0gYCR7d2dTY3JpcHR9P2FjdGlvbj1yYXcmY3R5cGU9dGV4dC9gO1xuXHRcdGZvciAoY29uc3QgdXNlRmlsZSBvZiBVUkxfVVNFLnNwbGl0KCd8JykpIHtcblx0XHRcdGNvbnN0IG5hbWU6IHN0cmluZyA9IHVzZUZpbGUudG9TdHJpbmcoKS50cmltKCk7XG5cdFx0XHRjb25zdCB3aGF0OiBzdHJpbmdbXSA9IFJFR0VYX0ZJTEUuZXhlYyhuYW1lKSA/PyBbJycsICcnXTtcblx0XHRcdHN3aXRjaCAod2hhdFsxXSkge1xuXHRcdFx0XHRjYXNlICdqcyc6XG5cdFx0XHRcdFx0Ly8gQHRzLWV4cGVjdC1lcnJvciBUUzYxMzNcblx0XHRcdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG5cdFx0XHRcdFx0dm9pZCBtdy5sb2FkZXIudXNpbmcoJycpLnRoZW4oKHJlcXVpcmUpOiB2b2lkID0+IHtcblx0XHRcdFx0XHRcdG13LmxvYWRlci5sb2FkKGAke3BhdGh9amF2YXNjcmlwdCZ0aXRsZT0ke2VuY29kZVVSSUNvbXBvbmVudChuYW1lKX1gKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAnY3NzJzpcblx0XHRcdFx0XHRtdy5sb2FkZXIubG9hZChgJHtwYXRofWNzcyZ0aXRsZT0ke2VuY29kZVVSSUNvbXBvbmVudChuYW1lKX1gKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRpZiAoUkVHRVhfRVhULnRlc3QobmFtZSkpIHtcblx0XHRcdFx0XHRcdC8vIEB0cy1leHBlY3QtZXJyb3IgVFM2MTMzXG5cdFx0XHRcdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG5cdFx0XHRcdFx0XHR2b2lkIG13LmxvYWRlci51c2luZyhuYW1lKS50aGVuKChyZXF1aXJlKTogdm9pZCA9PiB7XG5cdFx0XHRcdFx0XHRcdG13LmxvYWRlci5sb2FkKG5hbWUpO1xuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxufTtcblxuY29uc3Qgbm9QZXJtV2FybmluZyA9ICgpOiB2b2lkID0+IHtcblx0LyoqXG5cdCAqIExvYWQgd2FybmluZyhzKSB3aGVuIHVzZXIgaGFzIG5vIGFjY2VzcyB0byBwYWdlXG5cdCAqL1xuXHRjb25zdCBVUkxfTk9fUEVSTTogc3RyaW5nIHwgbnVsbCA9IG13LnV0aWwuZ2V0UGFyYW1WYWx1ZSgnbm9wZXJtJyk7XG5cdGlmICghVVJMX05PX1BFUk0pIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRzd2l0Y2ggKFVSTF9OT19QRVJNKSB7XG5cdFx0Y2FzZSAnMCc6XG5cdFx0XHR2b2lkIG13Lm5vdGlmeShcblx0XHRcdFx0d2luZG93LndnVUxTKFxuXHRcdFx0XHRcdCflm6DmioDmnK/ljp/lm6DvvIzmgqjmsqHmnInmnYPpmZDorr/pl67nm7jlhbPpobXpnaLjgILoi6XmnInnlpHpl67vvIzor7fkuI7msYLpl7vnmb7np5Hov5DokKXogIXogZTns7vjgIInLFxuXHRcdFx0XHRcdCflm6DmioDooZPljp/lm6DvvIzmgqjmspLmnInmrIrpmZDoqKrllY/nm7jpl5zpoIHpnaLjgILoi6XmnInnlpHllY/vvIzoq4voiIfmsYLogZ7nmb7np5HpgYvnh5/ogIXoga/ns7vjgIInXG5cdFx0XHRcdCksXG5cdFx0XHRcdHt0YWc6ICdub1Blcm0nLCB0eXBlOiAnZXJyb3InfVxuXHRcdFx0KTtcblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgJzEnOlxuXHRcdFx0dm9pZCBtdy5ub3RpZnkoXG5cdFx0XHRcdHdpbmRvdy53Z1VMUyhcblx0XHRcdFx0XHQn5oKo5rKh5pyJ5p2D6ZmQ6K6/6Zeu55u45YWz6aG16Z2i44CC6Iul5oKo5piv6LWE5rex57yW6ICF77yM6K+35LiO5rGC6Ze755m+56eR5oqA5pyv5Zui6Zif6IGU57O777yM5Lul6I635Y+W5p2D6ZmQ44CCJyxcblx0XHRcdFx0XHQn5oKo5rKS5pyJ5qyK6ZmQ6Kiq5ZWP55u46Zec6aCB6Z2i44CC6Iul5oKo5piv6LOH5rex57eo6ICF77yM6KuL6IiH5rGC6IGe55m+56eR5oqA6KGT5ZyY6ZqK6IGv57O777yM5Lul542y5Y+W5qyK6ZmQ44CCJ1xuXHRcdFx0XHQpLFxuXHRcdFx0XHR7dGFnOiAnbm9QZXJtJywgdHlwZTogJ2Vycm9yJ31cblx0XHRcdCk7XG5cdFx0XHRicmVhaztcblx0XHRjYXNlICcyJzpcblx0XHRcdHZvaWQgbXcubm90aWZ5KFxuXHRcdFx0XHR3aW5kb3cud2dVTFMoXG5cdFx0XHRcdFx0J+aCqOeahOe9kee7nOeOr+Wig+WtmOWcqOmjjumZqe+8jOivt+eZu+W9leWQjue7p+e7reS9v+eUqOOAguiLpeaCqOayoeacieaxgumXu+eZvuenkei0puWPt++8jOivt+azqOWGjOWQjueZu+W9leOAgicsXG5cdFx0XHRcdFx0J+aCqOeahOe2sui3r+eSsOWig+WtmOWcqOmiqOmaqu+8jOiri+eZu+WFpeW+jOe5vOe6jOS9v+eUqOOAguiLpeaCqOaykuacieaxguiBnueZvuenkeizrOiZn++8jOiri+azqOWGiuW+jOeZu+mMhOOAgidcblx0XHRcdFx0KSxcblx0XHRcdFx0e3RhZzogJ25vUGVybScsIHR5cGU6ICd3YXJuJ31cblx0XHRcdCk7XG5cdFx0XHRicmVhaztcblx0XHRjYXNlICczJzpcblx0XHRcdHZvaWQgbXcubm90aWZ5KFxuXHRcdFx0XHR3aW5kb3cud2dVTFMoXG5cdFx0XHRcdFx0J+ebuOWFs+WKn+iDveS7heWQkeazqOWGjOeUqOaIt+W8gOaUvu+8jOivt+eZu+W9leWQjue7p+e7reS9v+eUqOOAguiLpeaCqOayoeacieaxgumXu+eZvuenkei0puWPt++8jOivt+azqOWGjOWQjueZu+W9leOAgicsXG5cdFx0XHRcdFx0J+ebuOmXnOWKn+iDveWDheWQkeazqOWGiueUqOaItumWi+aUvu+8jOiri+eZu+WFpeW+jOe5vOe6jOS9v+eUqOOAguiLpeaCqOaykuacieaxguiBnueZvuenkeizrOiZn++8jOiri+azqOWGiuW+jOeZu+mMhOOAgidcblx0XHRcdFx0KSxcblx0XHRcdFx0e3RhZzogJ25vUGVybScsIHR5cGU6ICd3YXJuJ31cblx0XHRcdCk7XG5cdFx0XHRicmVhaztcblx0XHRkZWZhdWx0OlxuXHRcdFx0dm9pZCBtdy5ub3RpZnkoXG5cdFx0XHRcdHdpbmRvdy53Z1VMUyhcblx0XHRcdFx0XHQn5oKo5rKh5pyJ5p2D6ZmQ6K6/6Zeu55u45YWz6aG16Z2i44CC6Iul5pyJ55aR6Zeu77yM6K+35LiO5rGC6Ze755m+56eR6L+Q6JCl6ICF6IGU57O744CCJyxcblx0XHRcdFx0XHQn5oKo5rKS5pyJ5qyK6ZmQ6Kiq5ZWP55u46Zec6aCB6Z2i44CC6Iul5pyJ55aR5ZWP77yM6KuL6IiH5rGC6IGe55m+56eR6YGL54ef6ICF6IGv57O744CCJ1xuXHRcdFx0XHQpLFxuXHRcdFx0XHR7dGFnOiAnbm9QZXJtJywgdHlwZTogJ2Vycm9yJ31cblx0XHRcdCk7XG5cdH1cblxuXHRjb25zdCBuZXdVcmw6IHN0cmluZyA9IGxvY2F0aW9uLmhyZWYucmVwbGFjZSgvWz8mXW5vcGVybT1bMC05XSsvLCAnJyk7XG5cdGhpc3RvcnkucHVzaFN0YXRlKHt9LCBkb2N1bWVudC50aXRsZSwgbmV3VXJsKTtcbn07XG5cbmNvbnN0IGhpZ2hMaWdodFJldiA9ICgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkID0+IHtcblx0LyoqXG5cdCAqIEFkZCBoaWdobGlnaHQgdG8gcmV2aXNpb25zIHdoZW4gdXNpbmcgYCZoaWxpZ2h0PXJldmlkYCBvciBgJmhpZ2hsaWdodD1yZXZpZGBcblx0ICovXG5cdGNvbnN0IFVSTF9ISUdITElHSFQ6IHN0cmluZyB8IG51bGwgPSBtdy51dGlsLmdldFBhcmFtVmFsdWUoJ2hpZ2hsaWdodCcpO1xuXHRjb25zdCBVUkxfSElMSUdIVDogc3RyaW5nIHwgbnVsbCA9IG13LnV0aWwuZ2V0UGFyYW1WYWx1ZSgnaGlsaWdodCcpO1xuXHRjb25zdCBoaWdobGlnaHQ6IHN0cmluZyB8IG51bGwgPSBVUkxfSElHSExJR0hUID8/IFVSTF9ISUxJR0hUO1xuXG5cdGlmICghaGlnaGxpZ2h0IHx8IHdnQWN0aW9uICE9PSAnaGlzdG9yeScpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRmb3IgKGNvbnN0IHZlcnNpb24gb2YgaGlnaGxpZ2h0LnNwbGl0KCcsJykpIHtcblx0XHQkYm9keS5maW5kKGBpbnB1dFtuYW1lPW9sZGlkXVt2YWx1ZT0ke3ZlcnNpb259XWApLnBhcmVudCgpLmFkZENsYXNzKCdub3QtcGF0cm9sbGVkJyk7XG5cdH1cbn07XG5cbmNvbnN0IGFkZFRhcmdldEJsYW5rID0gKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQgPT4ge1xuXHQvKipcblx0ICogQWRkIHRhcmdldD1cImJsYW5rXCIgdG8gZXh0ZXJuYWwgbGlua3Ncblx0ICovXG5cdCRib2R5LmZpbmQ8SFRNTEFuY2hvckVsZW1lbnQ+KCdhLmV4dGVybmFsLCBhW3JlbD1cIm13OkV4dExpbmtcIl0nKS5maWx0ZXIoKF9pbmRleCwgZWxlbWVudCk6IGJvb2xlYW4gPT4ge1xuXHRcdGNvbnN0IGxpbmtIcmVmOiBzdHJpbmcgfCB1bmRlZmluZWQgPSAkKGVsZW1lbnQpLmF0dHIoJ2hyZWYnKTtcblx0XHRpZiAobGlua0hyZWYpIHtcblx0XHRcdGNvbnN0IGhyZWZTcGxpdDogc3RyaW5nW10gPSBsaW5rSHJlZi5zcGxpdCgnLycpO1xuXHRcdFx0aWYgKGhyZWZTcGxpdC5sZW5ndGggPCAzIHx8IGhyZWZTcGxpdFsyXSA9PT0gbG9jYXRpb24uaG9zdCkge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKGVsZW1lbnQuaHJlZi5pbmNsdWRlcyhgJHtsb2NhdGlvbi5wcm90b2NvbH0vLyR7bG9jYXRpb24uaG9zdG5hbWV9YCkpIHtcblx0XHRcdGVsZW1lbnQudGFyZ2V0ID0gJ19ibGFuayc7XG5cdFx0XHRpZiAoIWVsZW1lbnQucmVsLmluY2x1ZGVzKCdub29wZW5lcicpKSB7XG5cdFx0XHRcdGVsZW1lbnQucmVsICs9ICcgbm9vcGVuZXInO1xuXHRcdFx0fVxuXHRcdFx0aWYgKCFlbGVtZW50LnJlbC5pbmNsdWRlcygnbm9yZWZlcnJlcicpKSB7XG5cdFx0XHRcdGVsZW1lbnQucmVsICs9ICcgbm9yZWZlcnJlcic7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRydWU7XG5cdH0pO1xufTtcblxuY29uc3QgcmVtb3ZlVGl0bGVGcm9tUGVybWFsaW5rID0gKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQgPT4ge1xuXHQvKipcblx0ICogUmVtb3ZlIHRpdGxlPSogZnJvbSBwZXJtYWxpbmtcblx0ICovXG5cdGNvbnN0ICRwZXJtYUxpbms6IEpRdWVyeSA9ICRib2R5LmZpbmQoJyN0LXBlcm1hbGluaycpO1xuXHRpZiAoISRwZXJtYUxpbmsubGVuZ3RoKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgJHBlcm1hTGlua0ZpcnN0Q2hpbGQ6IEpRdWVyeTxIVE1MQW5jaG9yRWxlbWVudD4gPSAkcGVybWFMaW5rLmZpbmQ8SFRNTEFuY2hvckVsZW1lbnQ+KCc6Zmlyc3QtY2hpbGQnKTtcblxuXHRjb25zdCBocmVmOiBzdHJpbmcgfCB1bmRlZmluZWQgPSAkcGVybWFMaW5rRmlyc3RDaGlsZC5hdHRyKCdocmVmJyk/LnJlcGxhY2UoL3RpdGxlPVteJl0qJi8sICcnKTtcblx0aWYgKCFocmVmKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0JHBlcm1hTGlua0ZpcnN0Q2hpbGQuYXR0cignaHJlZicsIGhyZWYpO1xufTtcblxuY29uc3Qgb3BlblNlYXJjaEluTmV3VGFiID0gKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQgPT4ge1xuXHQvKipcblx0ICogT3BlbiBzZWFyY2ggcmVzdWx0cyBpbiBhIG5ldyB0YWIgb3Igd2luZG93XG5cdCAqIHdoZW4gaG9sZGluZyBkb3duIHRoZSBDdHJsIGtleSAoYnkgVGltZXNoaWZ0ZXIpXG5cdCAqL1xuXHQkYm9keVxuXHRcdC5maW5kKFsnI3NlYXJjaCcsICcjc2VhcmNoYm94JywgJyNzZWFyY2hmb3JtJywgJy5zZWFyY2gtdHlwZXMnLCAnI3NlYXJjaC10eXBlcyddLmpvaW4oJywnKSlcblx0XHQub24oJ2tleWRvd24ga2V5dXAgbW91c2Vkb3duJywgKGV2ZW50OiBKUXVlcnkuVHJpZ2dlcmVkRXZlbnQ8SFRNTEVsZW1lbnQ+KTogdm9pZCA9PiB7XG5cdFx0XHRjb25zdCB7Y3RybEtleSwgbWV0YUtleSwgdGFyZ2V0fSA9IGV2ZW50O1xuXHRcdFx0JCh0YXJnZXQpLmF0dHIoJ3RhcmdldCcsIChjdHJsS2V5ID8/IG1ldGFLZXkpID8gJ19ibGFuaycgOiAnJyk7XG5cdFx0fSk7XG59O1xuXG5jb25zdCB0aXRsZUNsZWFuVXAgPSAoJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KTogdm9pZCA9PiB7XG5cdC8qKlxuXHQgKiBDbGVhbnVwIHRpdGxlIGZvciBhbGwgcGFnZXNcblx0ICovXG5cdGNvbnN0IFVSTF9ESUZGOiBzdHJpbmcgfCBudWxsID0gbXcudXRpbC5nZXRQYXJhbVZhbHVlKCdkaWZmJyk7XG5cdGlmIChVUkxfRElGRiB8fCB3Z0FjdGlvbiAhPT0gJ3ZpZXcnIHx8ICFbNiwgMTE4XS5pbmNsdWRlcyh3Z05hbWVzcGFjZU51bWJlcikpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBmdWxsUGFnZU5hbWU6IHN0cmluZyA9IG5ldyBtdy5UaXRsZSh3Z1BhZ2VOYW1lKS5nZXRQcmVmaXhlZFRleHQoKTtcblx0Y29uc3QgJGZpcnN0SGVhZGluZzogSlF1ZXJ5ID0gJGJvZHkuZmluZCgnLmZpcnN0SGVhZGluZycpO1xuXHRjb25zdCBkb2N1bWVudFRpdGxlOiBzdHJpbmcgPSBkb2N1bWVudC50aXRsZTtcblx0Y29uc3QgcGFnZVRpdGxlOiBzdHJpbmcgPSAkZmlyc3RIZWFkaW5nLnRleHQoKTtcblxuXHRjb25zdCByZXBsYWNlVGl0bGUgPSAodGl0bGU6IHN0cmluZyk6IHN0cmluZyA9PiB0aXRsZS5yZXBsYWNlKHBhZ2VUaXRsZSwgZnVsbFBhZ2VOYW1lKTtcblxuXHRkb2N1bWVudC50aXRsZSA9IHJlcGxhY2VUaXRsZShkb2N1bWVudFRpdGxlKTtcblx0JGZpcnN0SGVhZGluZy50ZXh0KHJlcGxhY2VUaXRsZShwYWdlVGl0bGUpKTtcbn07XG5cbmNvbnN0IHVuaWhhblBvcHVwID0gKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQgPT4ge1xuXHQvKipcblx0ICogRGlzcGxheSB0aXRsZT0oLiopIG9mIDxzcGFuIGNsYXNzPVwiaW5saW5lLXVuaWhhblwiPiBhZnRlciB0aGVtLlxuXHQgKiAoYmV0YSB0ZXN0KVxuXHQgKi9cblx0Ly8gRG8gbm90IGRpc3BsYXkgb24gU3BlY2lhbCBQYWdlc1xuXHRpZiAod2dOYW1lc3BhY2VOdW1iZXIgPCAwKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Zm9yIChjb25zdCBlbGVtZW50IG9mICRib2R5LmZpbmQoJ2F0dHIsIC5pbmxpbmUtdW5paGFuJykpIHtcblx0XHRjb25zdCAkZWxlbWVudDogSlF1ZXJ5ID0gJChlbGVtZW50KTtcblxuXHRcdGNvbnN0IHRpdGxlOiBzdHJpbmcgfCB1bmRlZmluZWQgPSAkZWxlbWVudC5hdHRyKCd0aXRsZScpO1xuXHRcdGlmICghdGl0bGUpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdHZvaWQgbXcubG9hZGVyLnVzaW5nKCdvb2pzLXVpLWNvcmUnKS50aGVuKCgpOiB2b2lkID0+IHtcblx0XHRcdGNvbnN0IHBvcHVwOiBPTy51aS5Qb3B1cFdpZGdldCA9IG5ldyBPTy51aS5Qb3B1cFdpZGdldCh7XG5cdFx0XHRcdCRjb250ZW50OiAkKDxwPnt0aXRsZX08L3A+KSBhcyBKUXVlcnksXG5cdFx0XHRcdGxhYmVsOiBnZXRNZXNzYWdlKCdOb3RlJyksXG5cdFx0XHRcdGFuY2hvcjogdHJ1ZSxcblx0XHRcdFx0aGVhZDogdHJ1ZSxcblx0XHRcdFx0cGFkZGVkOiB0cnVlLFxuXHRcdFx0fSk7XG5cdFx0XHQkZWxlbWVudC5hcHBlbmQocG9wdXAuJGVsZW1lbnQpLm9uKCdjbGljaycsICgpOiB2b2lkID0+IHtcblx0XHRcdFx0cG9wdXAudG9nZ2xlKCk7XG5cdFx0XHR9KTtcblx0XHR9KTtcblx0fVxufTtcblxuY29uc3QgZml4TG9jYXRpb25IYXNoID0gKCk6IHZvaWQgPT4ge1xuXHQvKiDkv67mraPmipjlj6DlkI7lrprkvY3lj5jljJYgKi9cblx0aWYgKGxvY2F0aW9uLmhhc2gpIHtcblx0XHRsb2NhdGlvbi5ocmVmID0gbG9jYXRpb24uaGFzaDtcblx0fVxufTtcblxuY29uc3QgaGlkZU5ld1VzZXJzTG9nID0gKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQgPT4ge1xuXHQvKiDkuLTml7bvvJrnpoHmraLnlKjmiLfmn6XnnIvnlKjmiLfliJvlu7rml6Xlv5cgKi9cblx0aWYgKHdnQ2Fub25pY2FsU3BlY2lhbFBhZ2VOYW1lICE9PSAnTG9nJykge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0ICRuZXdVc2Vyc0xvZzogSlF1ZXJ5ID0gJGJvZHkuZmluZCgnaW5wdXRbbmFtZT1cIndwZmlsdGVyc1tdXCJdW3ZhbHVlPW5ld3VzZXJzXScpO1xuXHQkbmV3VXNlcnNMb2cucHJvcCh7XG5cdFx0Y2hlY2tlZDogZmFsc2UsXG5cdFx0ZGlzYWJsZWQ6IHRydWUsXG5cdH0pO1xufTtcblxuY29uc3QgdG9nZ2xlTGluayA9ICgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkID0+IHtcblx0Lyog6LCD5pW05oqY5Y+g5oyJ6ZKu55qE6aKc6ImyICovXG5cdGNvbnN0ICR0b2dnbGVyOiBKUXVlcnkgPSAkYm9keS5maW5kKCcubXctY29sbGFwc2libGUtdG9nZ2xlLCAuZ2FkZ2V0LWNvbGxhcHNpYmxlLXRvZ2dsZXInKTtcblx0aWYgKCEkdG9nZ2xlci5sZW5ndGgpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRpZiAoJHRvZ2dsZXIucGFyZW50KClbMF0/LnN0eWxlLmNvbG9yKSB7XG5cdFx0JHRvZ2dsZXIuZmluZCgnYScpLmNzcygnY29sb3InLCAnaW5oZXJpdCcpO1xuXHR9XG59O1xuXG5leHBvcnQge1xuXHRsb2FkV2l0aFVSTCxcblx0bm9QZXJtV2FybmluZyxcblx0aGlnaExpZ2h0UmV2LFxuXHRhZGRUYXJnZXRCbGFuayxcblx0cmVtb3ZlVGl0bGVGcm9tUGVybWFsaW5rLFxuXHRvcGVuU2VhcmNoSW5OZXdUYWIsXG5cdHRpdGxlQ2xlYW5VcCxcblx0dW5paGFuUG9wdXAsXG5cdGZpeExvY2F0aW9uSGFzaCxcblx0aGlkZU5ld1VzZXJzTG9nLFxuXHR0b2dnbGVMaW5rLFxufTtcbiIsICJpbXBvcnQge2xvY2FsaXplfSBmcm9tICdleHQuZ2FkZ2V0LmkxOG4nO1xuXG5jb25zdCBnZXRJMThuTWVzc2FnZXMgPSAoKSA9PiB7XG5cdGNvbnN0IHt3Z1VMU30gPSB3aW5kb3c7XG5cdHJldHVybiB7XG5cdFx0Tm90ZTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdOb3RlOiAnLFxuXHRcdFx0J3poLWhhbnMnOiAn5rOo6YeK77yaJyxcblx0XHRcdCd6aC1oYW50JzogJ+azqOmHi++8micsXG5cdFx0fSksXG5cdFx0Tm9QZXJtRXJyb3IwOiB3Z1VMUyhcblx0XHRcdCflm6DmioDmnK/ljp/lm6DvvIzmgqjmsqHmnInmnYPpmZDorr/pl67nm7jlhbPpobXpnaLjgILoi6XmnInnlpHpl67vvIzor7fkuI7msYLpl7vnmb7np5Hov5DokKXogIXogZTns7vjgIInLFxuXHRcdFx0J+WboOaKgOihk+WOn+WboO+8jOaCqOaykuacieasiumZkOioquWVj+ebuOmXnOmggemdouOAguiLpeacieeWkeWVj++8jOiri+iIh+axguiBnueZvuenkemBi+eHn+iAheiBr+ezu+OAgidcblx0XHQpLFxuXHRcdE5vUGVybUVycm9yMTogd2dVTFMoXG5cdFx0XHQn5oKo5rKh5pyJ5p2D6ZmQ6K6/6Zeu55u45YWz6aG16Z2i44CC6Iul5oKo5piv6LWE5rex57yW6ICF77yM6K+35LiO5rGC6Ze755m+56eR5oqA5pyv5Zui6Zif6IGU57O777yM5Lul6I635Y+W5p2D6ZmQ44CCJyxcblx0XHRcdCfmgqjmspLmnInmrIrpmZDoqKrllY/nm7jpl5zpoIHpnaLjgILoi6XmgqjmmK/os4fmt7Hnt6jogIXvvIzoq4voiIfmsYLogZ7nmb7np5HmioDooZPlnJjpmoroga/ns7vvvIzku6XnjbLlj5bmrIrpmZDjgIInXG5cdFx0KSxcblx0XHROb1Blcm1FcnJvcjI6IHdnVUxTKFxuXHRcdFx0J+aCqOeahOe9kee7nOeOr+Wig+WtmOWcqOmjjumZqe+8jOivt+eZu+W9leWQjue7p+e7reS9v+eUqOOAguiLpeaCqOayoeacieaxgumXu+eZvuenkei0puWPt++8jOivt+azqOWGjOWQjueZu+W9leOAgicsXG5cdFx0XHQn5oKo55qE57ay6Lev55Kw5aKD5a2Y5Zyo6aKo6Zqq77yM6KuL55m75YWl5b6M57m857qM5L2/55So44CC6Iul5oKo5rKS5pyJ5rGC6IGe55m+56eR6LOs6Jmf77yM6KuL5rOo5YaK5b6M55m76YyE44CCJ1xuXHRcdCksXG5cdFx0Tm9QZXJtRXJyb3IzOiB3Z1VMUyhcblx0XHRcdCfnm7jlhbPlip/og73ku4XlkJHms6jlhoznlKjmiLflvIDmlL7vvIzor7fnmbvlvZXlkI7nu6fnu63kvb/nlKjjgILoi6XmgqjmsqHmnInmsYLpl7vnmb7np5HotKblj7fvvIzor7fms6jlhozlkI7nmbvlvZXjgIInLFxuXHRcdFx0J+ebuOmXnOWKn+iDveWDheWQkeazqOWGiueUqOaItumWi+aUvu+8jOiri+eZu+WFpeW+jOe5vOe6jOS9v+eUqOOAguiLpeaCqOaykuacieaxguiBnueZvuenkeizrOiZn++8jOiri+azqOWGiuW+jOeZu+mMhOOAgidcblx0XHQpLFxuXHRcdE5vUGVybUVycm9yNDogd2dVTFMoXG5cdFx0XHQn5oKo5rKh5pyJ5p2D6ZmQ6K6/6Zeu55u45YWz6aG16Z2i44CC6Iul5pyJ55aR6Zeu77yM6K+35LiO5rGC6Ze755m+56eR6L+Q6JCl6ICF6IGU57O744CCJyxcblx0XHRcdCfmgqjmspLmnInmrIrpmZDoqKrllY/nm7jpl5zpoIHpnaLjgILoi6XmnInnlpHllY/vvIzoq4voiIfmsYLogZ7nmb7np5HpgYvnh5/ogIXoga/ns7vjgIInXG5cdFx0KSxcblx0fTtcbn07XG5cbmNvbnN0IGkxOG5NZXNzYWdlcyA9IGdldEkxOG5NZXNzYWdlcygpO1xuXG5jb25zdCBnZXRNZXNzYWdlOiBHZXRNZXNzYWdlczx0eXBlb2YgaTE4bk1lc3NhZ2VzPiA9IChrZXkpID0+IHtcblx0cmV0dXJuIGkxOG5NZXNzYWdlc1trZXldIHx8IGtleTtcbn07XG5cbmV4cG9ydCB7Z2V0TWVzc2FnZX07XG4iLCAiaW1wb3J0IHt0aXBweX0gZnJvbSAnZXh0LmdhZGdldC5UaXBweSc7XG5cbmNvbnN0IHtza2lufSA9IG13LmNvbmZpZy5nZXQoKTtcblxuY29uc3QgZ2V0Q29udGVudCA9IChyZWZlcmVuY2U6IEVsZW1lbnQpOiBzdHJpbmcgPT4ge1xuXHRjb25zdCBsYWJlbDogc3RyaW5nIHwgbnVsbCA9IHJlZmVyZW5jZS5nZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKTtcblx0Y29uc3QgdGl0bGU6IHN0cmluZyB8IG51bGwgPSByZWZlcmVuY2UuZ2V0QXR0cmlidXRlKCdhbHQnKSA/PyByZWZlcmVuY2UuZ2V0QXR0cmlidXRlKCd0aXRsZScpO1xuXG5cdHJldHVybiAobGFiZWwgPT09IHRpdGxlID8gbGFiZWwgOiB0aXRsZSB8fCBsYWJlbCkgfHwgKHJlZmVyZW5jZS50ZXh0Q29udGVudCBhcyBzdHJpbmcpO1xufTtcblxuY29uc3Qgb25DcmVhdGVDYWxsYmFjayA9IChpbnN0YW5jZTogUmV0dXJuVHlwZTx0eXBlb2YgdGlwcHk+WzBdKTogdm9pZCA9PiB7XG5cdGNvbnN0IHtyZWZlcmVuY2V9ID0gaW5zdGFuY2U7XG5cdHJlZmVyZW5jZS5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnLCBnZXRDb250ZW50KHJlZmVyZW5jZSkpO1xuXHRyZWZlcmVuY2UucmVtb3ZlQXR0cmlidXRlKCd0aXRsZScpO1xufTtcblxuY29uc3Qgb25TaG93Q2FsbGJhY2sgPSAoaW5zdGFuY2U6IFJldHVyblR5cGU8dHlwZW9mIHRpcHB5PlswXSk6IHZvaWQgPT4ge1xuXHRvbkNyZWF0ZUNhbGxiYWNrKGluc3RhbmNlKTtcblx0aW5zdGFuY2Uuc2V0Q29udGVudChnZXRDb250ZW50KGluc3RhbmNlLnJlZmVyZW5jZSkpO1xufTtcblxuY29uc3QgdGlwcHlGb3JDaXRpemVuSGVhZGVyID0gKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQgPT4ge1xuXHRpZiAoc2tpbiAhPT0gJ2NpdGl6ZW4nKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Zm9yIChjb25zdCBlbGVtZW50IG9mICRib2R5LmZpbmQoXG5cdFx0W1xuXHRcdFx0Jy5jaXRpemVuLWhlYWRlciBsYWJlbFt0aXRsZV0nLFxuXHRcdFx0Jy5jaXRpemVuLWhlYWRlciAubXctZWNoby1ub3RpZmljYXRpb25zLWJhZGdlJyxcblx0XHRcdCcuY2l0aXplbi1oZWFkZXJfX2xvZ28gYScsXG5cdFx0XHQnLnBhZ2UtYWN0aW9ucz5uYXY+dWw+bGkgYScsXG5cdFx0XHQnLnBhZ2UtYWN0aW9uc19fYnV0dG9uJyxcblx0XHRdLmpvaW4oJywnKVxuXHQpKSB7XG5cdFx0Y29uc3QgJGVsZW1lbnQ6IEpRdWVyeSA9ICQoZWxlbWVudCk7XG5cdFx0bGV0IHRpdGxlOiBzdHJpbmcgfCB1bmRlZmluZWQgPSAkZWxlbWVudC5hdHRyKCd0aXRsZScpO1xuXHRcdGlmICghdGl0bGUpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdHRpdGxlID0gdGl0bGUucmVwbGFjZSgvXFxzKj9cXFsuKz9dJC8sICcnKTtcblxuXHRcdCRlbGVtZW50LmF0dHIoe1xuXHRcdFx0J2FyaWEtbGFiZWwnOiB0aXRsZSxcblx0XHRcdHRpdGxlOiAnJyxcblx0XHR9KTtcblx0XHR0aXBweSgkZWxlbWVudC5nZXQoMCkgYXMgSFRNTEVsZW1lbnQsIHtcblx0XHRcdGFycm93OiB0cnVlLFxuXHRcdFx0Y29udGVudDogdGl0bGUsXG5cdFx0XHRwbGFjZW1lbnQ6ICdib3R0b20nLFxuXHRcdFx0b25DcmVhdGU6IG9uQ3JlYXRlQ2FsbGJhY2ssXG5cdFx0XHRvbkhpZGRlbjogb25DcmVhdGVDYWxsYmFjayxcblx0XHRcdG9uU2hvdzogb25TaG93Q2FsbGJhY2ssXG5cdFx0fSk7XG5cdH1cbn07XG5cbmNvbnN0IHRpcHB5Rm9yRXh0ZW5zaW9uID0gYXN5bmMgKCk6IFByb21pc2U8dm9pZD4gPT4ge1xuXHRhd2FpdCBtdy5sb2FkZXIudXNpbmcoJ2V4dC5Db2xsYXBzaWJsZVNpZGViYXIuanMnKTtcblx0dGlwcHkoJyNzaWRlYmFyQnV0dG9uJywge1xuXHRcdGFycm93OiB0cnVlLFxuXHRcdGNvbnRlbnQ6IGdldENvbnRlbnQsXG5cdFx0cGxhY2VtZW50OiAnbGVmdCcsXG5cdFx0b25DcmVhdGU6IG9uQ3JlYXRlQ2FsbGJhY2ssXG5cdFx0b25IaWRkZW46IG9uQ3JlYXRlQ2FsbGJhY2ssXG5cdFx0b25TaG93OiBvblNob3dDYWxsYmFjayxcblx0fSk7XG5cblx0aWYgKHNraW4gPT09ICd2ZWN0b3InKSB7XG5cdFx0YXdhaXQgbXcubG9hZGVyLnVzaW5nKCdleHQuQ29sbGFwc2libGVTaWRlYmFyLnZlY3RvcicpO1xuXHRcdHRpcHB5KCcjc2lkZWJhckNvbGxhcHNlJywge1xuXHRcdFx0YXJyb3c6IHRydWUsXG5cdFx0XHRjb250ZW50OiBnZXRDb250ZW50LFxuXHRcdFx0cGxhY2VtZW50OiAncmlnaHQnLFxuXHRcdFx0b25DcmVhdGU6IG9uQ3JlYXRlQ2FsbGJhY2ssXG5cdFx0XHRvbkhpZGRlbjogb25DcmVhdGVDYWxsYmFjayxcblx0XHRcdG9uU2hvdzogb25TaG93Q2FsbGJhY2ssXG5cdFx0fSk7XG5cdH1cblxuXHRhd2FpdCBtdy5sb2FkZXIudXNpbmcoJ2V4dC5EYXJrTW9kZScpO1xuXHR0aXBweSgnI2Rhcmttb2RlLWJ1dHRvbicsIHtcblx0XHRhcnJvdzogdHJ1ZSxcblx0XHRjb250ZW50OiBnZXRDb250ZW50LFxuXHRcdHBsYWNlbWVudDogJ2xlZnQnLFxuXHRcdG9uQ3JlYXRlOiBvbkNyZWF0ZUNhbGxiYWNrLFxuXHRcdG9uSGlkZGVuOiBvbkNyZWF0ZUNhbGxiYWNrLFxuXHRcdG9uU2hvdzogb25TaG93Q2FsbGJhY2ssXG5cdH0pO1xufTtcblxuZXhwb3J0IHt0aXBweUZvckNpdGl6ZW5IZWFkZXIsIHRpcHB5Rm9yRXh0ZW5zaW9ufTtcbiIsICJjb25zdCBkZXByZWNhdGVkRnVuY3Rpb25zID0gKCk6IHZvaWQgPT4ge1xuXHQvKiFcblx0ICogbWFpbnRlbmFuY2U6IFNvbWUgdXNlciBzY3JpcHRzIG1heSBiZSB1c2luZyB0aGUgZm9sbG93aW5nIGRlcHJlY2F0ZWQgZnVuY3Rpb25zLlxuXHQgKiBUaGVzZSBmdW5jdGlvbnMgYXJlIG5vIGxvbmdlciBzdXBwb3J0ZWQgYW5kIHNob3VsZCBiZSB1cGRhdGVkLlxuXHQgKi9cblx0bXcubG9nLmRlcHJlY2F0ZShcblx0XHR3aW5kb3csXG5cdFx0J2ltcG9ydFNjcmlwdCcsXG5cdFx0KHRpdGxlOiBzdHJpbmcpOiBIVE1MU2NyaXB0RWxlbWVudCA9PiB7XG5cdFx0XHRyZXR1cm4gbXcubG9hZGVyLmFkZFNjcmlwdFRhZyhcblx0XHRcdFx0bXcudXRpbC5nZXRVcmwodGl0bGUsIHtcblx0XHRcdFx0XHRhY3Rpb246ICdyYXcnLFxuXHRcdFx0XHRcdGN0eXBlOiAndGV4dC9qYXZhc2NyaXB0Jyxcblx0XHRcdFx0XHRtYXhhZ2U6ICczNjAwJyxcblx0XHRcdFx0XHRzbWF4YWdlOiAnMzYwMCcsXG5cdFx0XHRcdH0pXG5cdFx0XHQpO1xuXHRcdH0sXG5cdFx0J1VzZSBtdy5sb2FkZXIuYWRkU2NyaXB0VGFnKCkgaW5zdGVhZCdcblx0KTtcblxuXHRtdy5sb2cuZGVwcmVjYXRlKFxuXHRcdHdpbmRvdyxcblx0XHQnaW1wb3J0U3R5bGVzaGVldCcsXG5cdFx0KHRpdGxlOiBzdHJpbmcpOiBIVE1MTGlua0VsZW1lbnQgPT4ge1xuXHRcdFx0cmV0dXJuIG13LmxvYWRlci5hZGRMaW5rVGFnKFxuXHRcdFx0XHRtdy51dGlsLmdldFVybCh0aXRsZSwge1xuXHRcdFx0XHRcdGFjdGlvbjogJ3JhdycsXG5cdFx0XHRcdFx0Y3R5cGU6ICd0ZXh0L2NzcycsXG5cdFx0XHRcdFx0bWF4YWdlOiAnMzYwMCcsXG5cdFx0XHRcdFx0c21heGFnZTogJzM2MDAnLFxuXHRcdFx0XHR9KSxcblx0XHRcdFx0J3RleHQvY3NzJ1xuXHRcdFx0KTtcblx0XHR9LFxuXHRcdCdVc2UgbXcubG9hZGVyLmFkZExpbmtUYWcoKSBpbnN0ZWFkJ1xuXHQpO1xuXG5cdG13LmxvZy5kZXByZWNhdGUoXG5cdFx0d2luZG93LFxuXHRcdCdpbXBvcnRTY3JpcHRVUkknLFxuXHRcdChtb2R1bGVzOiBzdHJpbmcpOiBIVE1MU2NyaXB0RWxlbWVudCA9PiB7XG5cdFx0XHRyZXR1cm4gbXcubG9hZGVyLmFkZFNjcmlwdFRhZyhtdy51dGlsLndpa2lVcmxlbmNvZGUobW9kdWxlcykpO1xuXHRcdH0sXG5cdFx0J1VzZSBtdy5sb2FkZXIuYWRkU2NyaXB0VGFnKCkgb3IgbXcubG9hZGVyLmdldFNjcmlwdCgpIGluc3RlYWQnXG5cdCk7XG5cblx0bXcubG9nLmRlcHJlY2F0ZShcblx0XHR3aW5kb3csXG5cdFx0J2ltcG9ydFN0eWxlc2hlZXRVUkknLFxuXHRcdChtb2R1bGVzOiBzdHJpbmcpOiBIVE1MTGlua0VsZW1lbnQgPT4ge1xuXHRcdFx0cmV0dXJuIG13LmxvYWRlci5hZGRMaW5rVGFnKG13LnV0aWwud2lraVVybGVuY29kZShtb2R1bGVzKSwgJ3RleHQvY3NzJyk7XG5cdFx0fSxcblx0XHQnVXNlIG13LmxvYWRlci5hZGRMaW5rVGFnKCkgaW5zdGVhZCdcblx0KTtcblxuXHRtdy5sb2cuZGVwcmVjYXRlKFxuXHRcdHdpbmRvdyxcblx0XHQvLyBAdHMtZXhwZWN0LWVycm9yIFRTMjM0NVxuXHRcdCdpbXBvcnRTY3JpcHRDYWxsYmFjaycsXG5cdFx0KHRpdGxlOiBzdHJpbmcsIHJlYWR5OiBuZXZlcik6IHZvaWQgPT4ge1xuXHRcdFx0dm9pZCBtdy5sb2FkZXJcblx0XHRcdFx0LmdldFNjcmlwdChcblx0XHRcdFx0XHRtdy51dGlsLmdldFVybCh0aXRsZSwge1xuXHRcdFx0XHRcdFx0YWN0aW9uOiAncmF3Jyxcblx0XHRcdFx0XHRcdGN0eXBlOiAndGV4dC9qYXZhc2NyaXB0Jyxcblx0XHRcdFx0XHRcdG1heGFnZTogJzM2MDAnLFxuXHRcdFx0XHRcdFx0c21heGFnZTogJzM2MDAnLFxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdClcblx0XHRcdFx0LnRoZW4ocmVhZHkpO1xuXHRcdH0sXG5cdFx0J1VzZSBtdy5sb2FkZXIuZ2V0U2NyaXB0KCkgaW5zdGVhZCdcblx0KTtcblxuXHRtdy5sb2cuZGVwcmVjYXRlKFxuXHRcdHdpbmRvdyxcblx0XHQvLyBAdHMtZXhwZWN0LWVycm9yIFRTMjM0NVxuXHRcdCdpbXBvcnRTY3JpcHRVUklDYWxsYmFjaycsXG5cdFx0KHVybDogc3RyaW5nLCByZWFkeTogbmV2ZXIpOiB2b2lkID0+IHtcblx0XHRcdHZvaWQgbXcubG9hZGVyLmdldFNjcmlwdCh1cmwpLnRoZW4ocmVhZHkpO1xuXHRcdH0sXG5cdFx0J1VzZSBtdy5sb2FkZXIuZ2V0U2NyaXB0KCkgaW5zdGVhZCdcblx0KTtcblx0LyoqXG5cdCAqIG1haW50ZW5hbmNlOiBTb21lIHVzZXIgc2NyaXB0cyBtYXkgYmUgdXNpbmcgdGhlIGZvbGxvd2luZyBkZXByZWNhdGVkIGZ1bmN0aW9ucy5cblx0ICogVGhlc2UgZnVuY3Rpb25zIGFyZSBrZXB0IGZvciBjb21wYWJpbGl0eS5cblx0ICovXG5cdC8vIG13LmxvZy5kZXByZWNhdGUod2luZG93LCAnSlNDb25maWcnLCB7fSwgJ1VzZSB7fSBpbnN0ZWFkJyk7XG5cdC8qKlxuXHQgKiB3Z1UqUyBmdW5jdGlvbnMgaGF2ZSBiZWVuIHNwbGl0IHRvIGEgc2VwZXJhdGUgZ2FkZ2V0IChleHQuZ2FkZ2V0LmkxOG4pLlxuXHQgKi9cbn07XG5cbmV4cG9ydCB7ZGVwcmVjYXRlZEZ1bmN0aW9uc307XG4iLCAiaW1wb3J0IHtcblx0YWRkVGFyZ2V0QmxhbmssXG5cdGZpeExvY2F0aW9uSGFzaCxcblx0aGlkZU5ld1VzZXJzTG9nLFxuXHRoaWdoTGlnaHRSZXYsXG5cdGxvYWRXaXRoVVJMLFxuXHRub1Blcm1XYXJuaW5nLFxuXHRvcGVuU2VhcmNoSW5OZXdUYWIsXG5cdHJlbW92ZVRpdGxlRnJvbVBlcm1hbGluayxcblx0dGl0bGVDbGVhblVwLFxuXHR0b2dnbGVMaW5rLFxuXHR1bmloYW5Qb3B1cCxcbn0gZnJvbSAnLi9tb2R1bGVzL2NvcmUnO1xuaW1wb3J0IHt0aXBweUZvckNpdGl6ZW5IZWFkZXIsIHRpcHB5Rm9yRXh0ZW5zaW9ufSBmcm9tICcuL21vZHVsZXMvdGlwcHknO1xuaW1wb3J0IHtkZXByZWNhdGVkRnVuY3Rpb25zfSBmcm9tICcuL21vZHVsZXMvZGVwcmVjYXRlZEZ1bmN0aW9ucyc7XG5pbXBvcnQge2dldEJvZHl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbihmdW5jdGlvbiBzaXRlQ29tbW9uKCk6IHZvaWQge1xuXHRjb25zdCBjb25maWdLZXk6IHN0cmluZyA9ICdnYWRnZXQtU2l0ZUNvbW1vbl9KU19fSW5pdGlhbGl6ZWQnO1xuXG5cdC8vIEd1YXJkIGFnYWluc3QgZG91YmxlIGluY2x1c2lvbnNcblx0aWYgKG13LmNvbmZpZy5nZXQoY29uZmlnS2V5KSkge1xuXHRcdHJldHVybjtcblx0fVxuXHQvLyBTZXQgZ3VhcmRcblx0bXcuY29uZmlnLnNldChjb25maWdLZXksIHRydWUpO1xuXG5cdC8vIENvcmUgbW9kdWxlc1xuXHRsb2FkV2l0aFVSTCgpO1xuXHRub1Blcm1XYXJuaW5nKCk7XG5cdGZpeExvY2F0aW9uSGFzaCgpO1xuXG5cdHZvaWQgZ2V0Qm9keSgpLnRoZW4oKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQgPT4ge1xuXHRcdC8vIENvcmUgbW9kdWxlcyAobmVlZCAkLnJlYWR5KVxuXHRcdGhpZ2hMaWdodFJldigkYm9keSk7XG5cdFx0YWRkVGFyZ2V0QmxhbmsoJGJvZHkpO1xuXHRcdHJlbW92ZVRpdGxlRnJvbVBlcm1hbGluaygkYm9keSk7XG5cdFx0b3BlblNlYXJjaEluTmV3VGFiKCRib2R5KTtcblx0XHR0aXRsZUNsZWFuVXAoJGJvZHkpO1xuXHRcdHVuaWhhblBvcHVwKCRib2R5KTtcblx0XHRoaWRlTmV3VXNlcnNMb2coJGJvZHkpO1xuXHRcdHRvZ2dsZUxpbmsoJGJvZHkpO1xuXG5cdFx0Ly8gVGlwcHktcmVsYXRlZCBjb2RlcyAobmVlZCAkLnJlYWR5KVxuXHRcdHRpcHB5Rm9yQ2l0aXplbkhlYWRlcigkYm9keSk7XG5cdH0pO1xuXG5cdC8vIERlcHJlY2F0ZWQgZnVuY3Rpb25zXG5cdGRlcHJlY2F0ZWRGdW5jdGlvbnMoKTtcblxuXHQvLyBUaXBweS1yZWxhdGVkIGNvZGVzXG5cdHZvaWQgdGlwcHlGb3JFeHRlbnNpb24oKTtcbn0pKCk7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLHFCQUFrQkMsUUFBQUMsUUFBQSxrQkFBQSxHQUFBLENBQUE7O0FDQWxCLElBQUFDLG9CQUF1QkQsUUFBQSxpQkFBQTtBQUV2QixJQUFNRSxrQkFBa0JBLE1BQU07QUFDN0IsUUFBTTtJQUFDQztFQUFLLElBQUlDO0FBQ2hCLFNBQU87SUFDTkMsT0FBQSxHQUFNSixrQkFBQUssVUFBUztNQUNkQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0RDLGNBQWNMLE1BQ2IsdUNBQ0EscUNBQ0Q7SUFDQU0sY0FBY04sTUFDYiwyQ0FDQSx5Q0FDRDtJQUNBTyxjQUFjUCxNQUNiLDBDQUNBLHdDQUNEO0lBQ0FRLGNBQWNSLE1BQ2IsNENBQ0EsMENBQ0Q7SUFDQVMsY0FBY1QsTUFDYixpQ0FDQSwrQkFDRDtFQUNEO0FBQ0Q7QUFFQSxJQUFNVSxlQUFlWCxnQkFBZ0I7QUFFckMsSUFBTVksYUFBZ0RDLFNBQVE7QUFDN0QsU0FBT0YsYUFBYUUsR0FBRyxLQUFLQTtBQUM3Qjs7QURsQ0EsSUFBTTtFQUFDQztFQUFVQztFQUE0QkM7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LG1CQUFlVixLQUFLO0FBQ3BCeUIsNkJBQXlCekIsS0FBSztBQUM5QjZCLHVCQUFtQjdCLEtBQUs7QUFDeEJtQyxpQkFBYW5DLEtBQUs7QUFDbEI2QyxnQkFBWTdDLEtBQUs7QUFDakJnRSxvQkFBZ0JoRSxLQUFLO0FBQ3JCcUUsZUFBV3JFLEtBQUs7QUFHaEJ3RiwwQkFBc0J4RixLQUFLO0VBQzVCLENBQUM7QUFHRHVHLHNCQUFvQjtBQUdwQixPQUFLTCxrQkFBa0I7QUFDeEIsR0FBRzsiLAogICJuYW1lcyI6IFsiaW1wb3J0X2V4dF9nYWRnZXQyIiwgIl9fdG9FU00iLCAicmVxdWlyZSIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJnZXRJMThuTWVzc2FnZXMiLCAid2dVTFMiLCAid2luZG93IiwgIk5vdGUiLCAibG9jYWxpemUiLCAiZW4iLCAiTm9QZXJtRXJyb3IwIiwgIk5vUGVybUVycm9yMSIsICJOb1Blcm1FcnJvcjIiLCAiTm9QZXJtRXJyb3IzIiwgIk5vUGVybUVycm9yNCIsICJpMThuTWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAid2dBY3Rpb24iLCAid2dDYW5vbmljYWxTcGVjaWFsUGFnZU5hbWUiLCAid2dOYW1lc3BhY2VOdW1iZXIiLCAid2dQYWdlTmFtZSIsICJ3Z1NjcmlwdCIsICJ3Z1VzZXJOYW1lIiwgIm13IiwgImNvbmZpZyIsICJnZXQiLCAibG9hZFdpdGhVUkwiLCAiVVJMX1dJVEhfQ1NTIiwgInV0aWwiLCAiZ2V0UGFyYW1WYWx1ZSIsICJVUkxfV0lUSF9KUyIsICJVUkxfV0lUSF9NT0RVTEUiLCAidGVzdCIsICJsb2FkZXIiLCAibG9hZCIsICJnZXRVcmwiLCAiYWN0aW9uIiwgImN0eXBlIiwgIm1heGFnZSIsICJzbWF4YWdlIiwgInVzaW5nIiwgInRoZW4iLCAicmVxdWlyZTIiLCAiVVJMX1VTRSIsICJ3Z1VzZXJOYW1lRXhjYXBlZCIsICJlc2NhcGVSZWdFeHAiLCAiUkVHRVhfRklMRSIsICJSZWdFeHAiLCAiY29uY2F0IiwgIlJFR0VYX0VYVCIsICJwYXRoIiwgIl9pdGVyYXRvcjIiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAic3BsaXQiLCAiX3N0ZXAyIiwgInMiLCAibiIsICJkb25lIiwgIl9SRUdFWF9GSUxFJGV4ZWMiLCAidXNlRmlsZSIsICJ2YWx1ZSIsICJuYW1lIiwgInRvU3RyaW5nIiwgInRyaW0iLCAid2hhdCIsICJleGVjIiwgImVuY29kZVVSSUNvbXBvbmVudCIsICJlcnIiLCAiZSIsICJmIiwgIm5vUGVybVdhcm5pbmciLCAiVVJMX05PX1BFUk0iLCAibm90aWZ5IiwgInRhZyIsICJ0eXBlIiwgIm5ld1VybCIsICJsb2NhdGlvbiIsICJocmVmIiwgInJlcGxhY2UiLCAiaGlzdG9yeSIsICJwdXNoU3RhdGUiLCAiZG9jdW1lbnQiLCAidGl0bGUiLCAiaGlnaExpZ2h0UmV2IiwgIiRib2R5IiwgIlVSTF9ISUdITElHSFQiLCAiVVJMX0hJTElHSFQiLCAiaGlnaGxpZ2h0IiwgIl9pdGVyYXRvcjMiLCAiX3N0ZXAzIiwgInZlcnNpb24iLCAiZmluZCIsICJwYXJlbnQiLCAiYWRkQ2xhc3MiLCAiYWRkVGFyZ2V0QmxhbmsiLCAiZmlsdGVyIiwgIl9pbmRleCIsICJlbGVtZW50IiwgImxpbmtIcmVmIiwgIiQiLCAiYXR0ciIsICJocmVmU3BsaXQiLCAibGVuZ3RoIiwgImhvc3QiLCAiaW5jbHVkZXMiLCAicHJvdG9jb2wiLCAiaG9zdG5hbWUiLCAidGFyZ2V0IiwgInJlbCIsICJyZW1vdmVUaXRsZUZyb21QZXJtYWxpbmsiLCAiXyRwZXJtYUxpbmtGaXJzdENoaWxkIiwgIiRwZXJtYUxpbmsiLCAiJHBlcm1hTGlua0ZpcnN0Q2hpbGQiLCAib3BlblNlYXJjaEluTmV3VGFiIiwgImpvaW4iLCAib24iLCAiZXZlbnQiLCAiY3RybEtleSIsICJtZXRhS2V5IiwgInRpdGxlQ2xlYW5VcCIsICJVUkxfRElGRiIsICJmdWxsUGFnZU5hbWUiLCAiVGl0bGUiLCAiZ2V0UHJlZml4ZWRUZXh0IiwgIiRmaXJzdEhlYWRpbmciLCAiZG9jdW1lbnRUaXRsZSIsICJwYWdlVGl0bGUiLCAidGV4dCIsICJyZXBsYWNlVGl0bGUiLCAidW5paGFuUG9wdXAiLCAiX2l0ZXJhdG9yNCIsICJfc3RlcDQiLCAiJGVsZW1lbnQiLCAicG9wdXAiLCAiT08iLCAidWkiLCAiUG9wdXBXaWRnZXQiLCAiJGNvbnRlbnQiLCAiZGVmYXVsdCIsICJjcmVhdGVFbGVtZW50IiwgImxhYmVsIiwgImFuY2hvciIsICJoZWFkIiwgInBhZGRlZCIsICJhcHBlbmQiLCAidG9nZ2xlIiwgImZpeExvY2F0aW9uSGFzaCIsICJoYXNoIiwgImhpZGVOZXdVc2Vyc0xvZyIsICIkbmV3VXNlcnNMb2ciLCAicHJvcCIsICJjaGVja2VkIiwgImRpc2FibGVkIiwgInRvZ2dsZUxpbmsiLCAiXyR0b2dnbGVyJHBhcmVudCQiLCAiJHRvZ2dsZXIiLCAic3R5bGUiLCAiY29sb3IiLCAiY3NzIiwgImltcG9ydF9leHRfZ2FkZ2V0MyIsICJza2luIiwgImdldENvbnRlbnQiLCAicmVmZXJlbmNlIiwgIl9yZWZlcmVuY2UkZ2V0QXR0cmlidSIsICJnZXRBdHRyaWJ1dGUiLCAidGV4dENvbnRlbnQiLCAib25DcmVhdGVDYWxsYmFjayIsICJpbnN0YW5jZSIsICJzZXRBdHRyaWJ1dGUiLCAicmVtb3ZlQXR0cmlidXRlIiwgIm9uU2hvd0NhbGxiYWNrIiwgInNldENvbnRlbnQiLCAidGlwcHlGb3JDaXRpemVuSGVhZGVyIiwgIl9pdGVyYXRvcjUiLCAiX3N0ZXA1IiwgInRpcHB5IiwgImFycm93IiwgImNvbnRlbnQiLCAicGxhY2VtZW50IiwgIm9uQ3JlYXRlIiwgIm9uSGlkZGVuIiwgIm9uU2hvdyIsICJ0aXBweUZvckV4dGVuc2lvbiIsICJfcmVmIiwgIl9hc3luY1RvR2VuZXJhdG9yIiwgImFwcGx5IiwgImFyZ3VtZW50cyIsICJkZXByZWNhdGVkRnVuY3Rpb25zIiwgImxvZyIsICJkZXByZWNhdGUiLCAiYWRkU2NyaXB0VGFnIiwgImFkZExpbmtUYWciLCAibW9kdWxlcyIsICJ3aWtpVXJsZW5jb2RlIiwgInJlYWR5IiwgImdldFNjcmlwdCIsICJ1cmwiLCAiaW1wb3J0X2V4dF9nYWRnZXQ0IiwgInNpdGVDb21tb24iLCAiY29uZmlnS2V5IiwgInNldCIsICJnZXRCb2R5Il0KfQo=

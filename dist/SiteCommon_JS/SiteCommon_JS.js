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
var import_ext_gadget3 = require("ext.gadget.Util");
var {
  wgAction,
  wgCanonicalSpecialPageName,
  wgNamespaceNumber,
  wgPageName,
  wgScript,
  wgUserName
} = mw.config.get();
var loadWithURL = /* @__PURE__ */ function() {
  var _ref = _asyncToGenerator(function* () {
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
      if (URL_WITH_JS || URL_WITH_MODULE) {
        const require2 = yield mw.loader.using("ext.gadget.SiteCommon_JS");
        if (URL_WITH_JS && /^MediaWiki:[^#%&<=>]*\.js$/.test(URL_WITH_JS)) {
          mw.loader.load(mw.util.getUrl(URL_WITH_JS, {
            action: "raw",
            ctype: "text/javascript",
            maxage: "3600",
            smaxage: "3600"
          }));
        }
        if (URL_WITH_MODULE && /^(ext\.((?!(ext\.|[,|])).)*[,|]?)+$/.test(URL_WITH_MODULE)) {
          const modules = (0, import_ext_gadget3.uniqueArray)(URL_WITH_MODULE.split(/[,|]/));
          mw.loader.load(modules);
        }
      }
    }
    const URL_USE = mw.util.getParamValue("use");
    if (URL_USE) {
      const wgUserNameExcaped = mw.util.escapeRegExp(wgUserName !== null && wgUserName !== void 0 ? wgUserName : "");
      const REGEX_FILE = new RegExp("^(?:MediaWiki:".concat(wgUserNameExcaped ? "|User:".concat(wgUserNameExcaped, "/") : "", ")[^&<>=%#]*\\.(js|css)$"));
      const REGEX_EXT = /^ext\.[^,]+$/;
      const path = wgScript;
      const useFiles = URL_USE.split(/[,|]/);
      var _iterator2 = _createForOfIteratorHelper(useFiles), _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
          var _REGEX_FILE$exec;
          const useFile = _step2.value;
          const name = useFile.toString().trim();
          const what = (_REGEX_FILE$exec = REGEX_FILE.exec(name)) !== null && _REGEX_FILE$exec !== void 0 ? _REGEX_FILE$exec : ["", ""];
          switch (what[1]) {
            case "css":
              mw.loader.load("".concat(path, "?action=raw&ctype=text/css&title=").concat(encodeURIComponent(name)));
              break;
            case "js": {
              const require2 = yield mw.loader.using("ext.gadget.SiteCommon_JS");
              mw.loader.load("".concat(path, "?action=raw&ctype=text/javascript&title=").concat(encodeURIComponent(name)));
              break;
            }
            default:
              if (REGEX_EXT.test(name)) {
                const require2 = yield mw.loader.using("ext.gadget.SiteCommon_JS");
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
var unihanPopup = /* @__PURE__ */ function() {
  var _ref2 = _asyncToGenerator(function* ($body) {
    if (wgNamespaceNumber < 0) {
      return;
    }
    yield mw.loader.using("oojs-ui-core");
    var _iterator4 = _createForOfIteratorHelper($body.find("attr, .inline-unihan")), _step4;
    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
        const element = _step4.value;
        const $element = $(element);
        const title = $element.attr("title");
        if (!title) {
          continue;
        }
        const popup = new OO.ui.PopupWidget({
          $content: $(/* @__PURE__ */ import_ext_gadget2.default.createElement("p", null, title)),
          label: getMessage("Note"),
          anchor: true,
          head: true,
          padded: true
        });
        $body.append(popup.$element);
        $element.on("click", () => {
          popup.toggle();
        });
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }
  });
  return function unihanPopup2(_x) {
    return _ref2.apply(this, arguments);
  };
}();
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
var import_ext_gadget4 = require("ext.gadget.Tippy");
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
  const {
    skin
  } = mw.config.get();
  if (skin !== "citizen") {
    return;
  }
  var _iterator5 = _createForOfIteratorHelper($body.find([".citizen-header .citizen-dropdown-summary", ".citizen-header .citizen-echo-notification-badge", ".citizen-header__logo a", ".page-actions>nav>ul>li a", ".page-actions__button"].join(","))), _step5;
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
      (0, import_ext_gadget4.tippy)($element.get(0), {
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
  var _ref3 = _asyncToGenerator(function* () {
    const {
      skin
    } = mw.config.get();
    if (skin === "vector-2022") {
      return;
    }
    yield mw.loader.using("ext.CollapsibleSidebar.js");
    (0, import_ext_gadget4.tippy)("#sidebarButton", {
      arrow: true,
      content: getContent,
      placement: "left",
      onCreate: onCreateCallback,
      onHidden: onCreateCallback,
      onShow: onShowCallback
    });
    if (skin === "vector") {
      yield mw.loader.using("ext.CollapsibleSidebar.vector");
      (0, import_ext_gadget4.tippy)("#sidebarCollapse", {
        arrow: true,
        content: getContent,
        placement: "right",
        onCreate: onCreateCallback,
        onHidden: onCreateCallback,
        onShow: onShowCallback
      });
    }
    yield mw.loader.using("ext.DarkMode");
    (0, import_ext_gadget4.tippy)("#darkmode-button", {
      arrow: true,
      content: getContent,
      placement: "left",
      onCreate: onCreateCallback,
      onHidden: onCreateCallback,
      onShow: onShowCallback
    });
  });
  return function tippyForExtension2() {
    return _ref3.apply(this, arguments);
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
var import_ext_gadget5 = require("ext.gadget.Util");
//! src/SiteCommon_JS/modules/resizeJQueryUI.ts
var resizeJQueryUI = ($body) => {
  $(window).on("resize", () => {
    const windowWidth = $(window).width();
    const $jqueryUIDialog = $body.find(".ui-dialog");
    if ($jqueryUIDialog) {
      $jqueryUIDialog.css("max-width", "calc(".concat(windowWidth, "px - 2em)"));
    }
  });
};
//! src/SiteCommon_JS/SiteCommon_JS.ts
(function siteCommon() {
  const configKey = "gadget-SiteCommon_JS__Initialized";
  const {
    skin
  } = mw.config.get();
  if (mw.config.get(configKey)) {
    return;
  }
  mw.config.set(configKey, true);
  void loadWithURL();
  fixLocationHash();
  void (0, import_ext_gadget5.getBody)().then(($body) => {
    highLightRev($body);
    addTargetBlank($body);
    removeTitleFromPermalink($body);
    openSearchInNewTab($body);
    titleCleanUp($body);
    void unihanPopup($body);
    hideNewUsersLog($body);
    toggleLink($body);
    resizeJQueryUI($body);
    if (skin === "citizen") {
      tippyForCitizenHeader($body);
    }
  });
  deprecatedFunctions();
  if (!["vector-2022", "citizen"].includes(skin)) {
    void tippyForExtension();
  }
})();

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1NpdGVDb21tb25fSlMvbW9kdWxlcy9jb3JlLnRzeCIsICJzcmMvU2l0ZUNvbW1vbl9KUy9tb2R1bGVzL2kxOG4udHMiLCAic3JjL1NpdGVDb21tb25fSlMvbW9kdWxlcy90aXBweS50cyIsICJzcmMvU2l0ZUNvbW1vbl9KUy9tb2R1bGVzL2RlcHJlY2F0ZWRGdW5jdGlvbnMudHMiLCAic3JjL1NpdGVDb21tb25fSlMvU2l0ZUNvbW1vbl9KUy50cyIsICJzcmMvU2l0ZUNvbW1vbl9KUy9tb2R1bGVzL3Jlc2l6ZUpRdWVyeVVJLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgUmVhY3QgZnJvbSAnZXh0LmdhZGdldC5SZWFjdCc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vaTE4bic7XG5pbXBvcnQge3VuaXF1ZUFycmF5fSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG5jb25zdCB7d2dBY3Rpb24sIHdnQ2Fub25pY2FsU3BlY2lhbFBhZ2VOYW1lLCB3Z05hbWVzcGFjZU51bWJlciwgd2dQYWdlTmFtZSwgd2dTY3JpcHQsIHdnVXNlck5hbWV9ID0gbXcuY29uZmlnLmdldCgpO1xuXG5jb25zdCBsb2FkV2l0aFVSTCA9IGFzeW5jICgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0Y29uc3QgVVJMX1dJVEhfQ1NTOiBzdHJpbmcgfCBudWxsID0gbXcudXRpbC5nZXRQYXJhbVZhbHVlKCd3aXRoQ1NTJyk7XG5cdGNvbnN0IFVSTF9XSVRIX0pTOiBzdHJpbmcgfCBudWxsID0gbXcudXRpbC5nZXRQYXJhbVZhbHVlKCd3aXRoSlMnKTtcblx0Y29uc3QgVVJMX1dJVEhfTU9EVUxFOiBzdHJpbmcgfCBudWxsID0gbXcudXRpbC5nZXRQYXJhbVZhbHVlKCd3aXRoTW9kdWxlJyk7XG5cdC8qKlxuXHQgKiAmd2l0aENTUz0gYW5kICZ3aXRoSlM9IFVSTCBwYXJhbWV0ZXJzXG5cdCAqIEFsbG93IHRvIHRyeSBjdXN0b20gc2NyaXB0cyBmcm9tIE1lZGlhV2lraSBzcGFjZVxuXHQgKiB3aXRob3V0IGVkaXRpbmcgcGVyc29uYWwgLmNzcyBvciAuanMgZmlsZXNcblx0ICovXG5cdGlmIChVUkxfV0lUSF9DU1MgfHwgVVJMX1dJVEhfSlMgfHwgVVJMX1dJVEhfTU9EVUxFKSB7XG5cdFx0aWYgKFVSTF9XSVRIX0NTUyAmJiAvXk1lZGlhV2lraTpbXiMlJjw9Pl0qXFwuY3NzJC8udGVzdChVUkxfV0lUSF9DU1MpKSB7XG5cdFx0XHRtdy5sb2FkZXIubG9hZChcblx0XHRcdFx0bXcudXRpbC5nZXRVcmwoVVJMX1dJVEhfQ1NTLCB7XG5cdFx0XHRcdFx0YWN0aW9uOiAncmF3Jyxcblx0XHRcdFx0XHRjdHlwZTogJ3RleHQvY3NzJyxcblx0XHRcdFx0XHRtYXhhZ2U6ICczNjAwJyxcblx0XHRcdFx0XHRzbWF4YWdlOiAnMzYwMCcsXG5cdFx0XHRcdH0pLFxuXHRcdFx0XHQndGV4dC9jc3MnXG5cdFx0XHQpO1xuXHRcdH1cblx0XHRpZiAoVVJMX1dJVEhfSlMgfHwgVVJMX1dJVEhfTU9EVUxFKSB7XG5cdFx0XHQvLyBAdHMtZXhwZWN0LWVycm9yIFRTNjEzM1xuXHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuXHRcdFx0Y29uc3QgcmVxdWlyZSA9IGF3YWl0IG13LmxvYWRlci51c2luZygnZXh0LmdhZGdldC5TaXRlQ29tbW9uX0pTJyk7XG5cblx0XHRcdGlmIChVUkxfV0lUSF9KUyAmJiAvXk1lZGlhV2lraTpbXiMlJjw9Pl0qXFwuanMkLy50ZXN0KFVSTF9XSVRIX0pTKSkge1xuXHRcdFx0XHRtdy5sb2FkZXIubG9hZChcblx0XHRcdFx0XHRtdy51dGlsLmdldFVybChVUkxfV0lUSF9KUywge1xuXHRcdFx0XHRcdFx0YWN0aW9uOiAncmF3Jyxcblx0XHRcdFx0XHRcdGN0eXBlOiAndGV4dC9qYXZhc2NyaXB0Jyxcblx0XHRcdFx0XHRcdG1heGFnZTogJzM2MDAnLFxuXHRcdFx0XHRcdFx0c21heGFnZTogJzM2MDAnLFxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChVUkxfV0lUSF9NT0RVTEUgJiYgL14oZXh0XFwuKCg/IShleHRcXC58Wyx8XSkpLikqWyx8XT8pKyQvLnRlc3QoVVJMX1dJVEhfTU9EVUxFKSkge1xuXHRcdFx0XHRjb25zdCBtb2R1bGVzID0gdW5pcXVlQXJyYXkoVVJMX1dJVEhfTU9EVUxFLnNwbGl0KC9bLHxdLykpO1xuXHRcdFx0XHRtdy5sb2FkZXIubG9hZChtb2R1bGVzKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0LyoqXG5cdCAqIExvYWQgQ1NTIGFuZCBKUyBmaWxlcyB0ZW1wb3JhcmlseSB0aHJvdWdoIFVSTC5cblx0ICogJnVzZT1GaWxlMS5jc3N8RmlsZTIuY3NzfEZpbGUzLmpzXG5cdCAqL1xuXHRjb25zdCBVUkxfVVNFOiBzdHJpbmcgfCBudWxsID0gbXcudXRpbC5nZXRQYXJhbVZhbHVlKCd1c2UnKTtcblx0aWYgKFVSTF9VU0UpIHtcblx0XHRjb25zdCB3Z1VzZXJOYW1lRXhjYXBlZDogc3RyaW5nID0gbXcudXRpbC5lc2NhcGVSZWdFeHAod2dVc2VyTmFtZSA/PyAnJyk7XG5cdFx0Y29uc3QgUkVHRVhfRklMRTogUmVnRXhwID0gbmV3IFJlZ0V4cChcblx0XHRcdGBeKD86TWVkaWFXaWtpOiR7d2dVc2VyTmFtZUV4Y2FwZWQgPyBgfFVzZXI6JHt3Z1VzZXJOYW1lRXhjYXBlZH0vYCA6ICcnfSlbXiY8Pj0lI10qXFxcXC4oanN8Y3NzKSRgXG5cdFx0KTtcblx0XHRjb25zdCBSRUdFWF9FWFQ6IFJlZ0V4cCA9IC9eZXh0XFwuW14sXSskLztcblx0XHRjb25zdCBwYXRoOiBzdHJpbmcgPSB3Z1NjcmlwdDtcblx0XHRjb25zdCB1c2VGaWxlcyA9IFVSTF9VU0Uuc3BsaXQoL1ssfF0vKTtcblx0XHRmb3IgKGNvbnN0IHVzZUZpbGUgb2YgdXNlRmlsZXMpIHtcblx0XHRcdGNvbnN0IG5hbWU6IHN0cmluZyA9IHVzZUZpbGUudG9TdHJpbmcoKS50cmltKCk7XG5cdFx0XHRjb25zdCB3aGF0OiBzdHJpbmdbXSA9IFJFR0VYX0ZJTEUuZXhlYyhuYW1lKSA/PyBbJycsICcnXTtcblx0XHRcdHN3aXRjaCAod2hhdFsxXSkge1xuXHRcdFx0XHRjYXNlICdjc3MnOlxuXHRcdFx0XHRcdG13LmxvYWRlci5sb2FkKGAke3BhdGh9P2FjdGlvbj1yYXcmY3R5cGU9dGV4dC9jc3MmdGl0bGU9JHtlbmNvZGVVUklDb21wb25lbnQobmFtZSl9YCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgJ2pzJzoge1xuXHRcdFx0XHRcdC8vIEB0cy1leHBlY3QtZXJyb3IgVFM2MTMzXG5cdFx0XHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuXHRcdFx0XHRcdGNvbnN0IHJlcXVpcmUgPSBhd2FpdCBtdy5sb2FkZXIudXNpbmcoJ2V4dC5nYWRnZXQuU2l0ZUNvbW1vbl9KUycpO1xuXHRcdFx0XHRcdG13LmxvYWRlci5sb2FkKGAke3BhdGh9P2FjdGlvbj1yYXcmY3R5cGU9dGV4dC9qYXZhc2NyaXB0JnRpdGxlPSR7ZW5jb2RlVVJJQ29tcG9uZW50KG5hbWUpfWApO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0aWYgKFJFR0VYX0VYVC50ZXN0KG5hbWUpKSB7XG5cdFx0XHRcdFx0XHQvLyBAdHMtZXhwZWN0LWVycm9yIFRTNjEzM1xuXHRcdFx0XHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuXHRcdFx0XHRcdFx0Y29uc3QgcmVxdWlyZSA9IGF3YWl0IG13LmxvYWRlci51c2luZygnZXh0LmdhZGdldC5TaXRlQ29tbW9uX0pTJyk7XG5cdFx0XHRcdFx0XHRtdy5sb2FkZXIubG9hZChuYW1lKTtcblx0XHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59O1xuXG5jb25zdCBoaWdoTGlnaHRSZXYgPSAoJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KTogdm9pZCA9PiB7XG5cdC8qKlxuXHQgKiBBZGQgaGlnaGxpZ2h0IHRvIHJldmlzaW9ucyB3aGVuIHVzaW5nIGAmaGlsaWdodD1yZXZpZGAgb3IgYCZoaWdobGlnaHQ9cmV2aWRgXG5cdCAqL1xuXHRjb25zdCBVUkxfSElHSExJR0hUOiBzdHJpbmcgfCBudWxsID0gbXcudXRpbC5nZXRQYXJhbVZhbHVlKCdoaWdobGlnaHQnKTtcblx0Y29uc3QgVVJMX0hJTElHSFQ6IHN0cmluZyB8IG51bGwgPSBtdy51dGlsLmdldFBhcmFtVmFsdWUoJ2hpbGlnaHQnKTtcblx0Y29uc3QgaGlnaGxpZ2h0OiBzdHJpbmcgfCBudWxsID0gVVJMX0hJR0hMSUdIVCA/PyBVUkxfSElMSUdIVDtcblxuXHRpZiAoIWhpZ2hsaWdodCB8fCB3Z0FjdGlvbiAhPT0gJ2hpc3RvcnknKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Zm9yIChjb25zdCB2ZXJzaW9uIG9mIGhpZ2hsaWdodC5zcGxpdCgnLCcpKSB7XG5cdFx0JGJvZHkuZmluZChgaW5wdXRbbmFtZT1vbGRpZF1bdmFsdWU9JHt2ZXJzaW9ufV1gKS5wYXJlbnQoKS5hZGRDbGFzcygnbm90LXBhdHJvbGxlZCcpO1xuXHR9XG59O1xuXG5jb25zdCBhZGRUYXJnZXRCbGFuayA9ICgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkID0+IHtcblx0LyoqXG5cdCAqIEFkZCB0YXJnZXQ9XCJibGFua1wiIHRvIGV4dGVybmFsIGxpbmtzXG5cdCAqL1xuXHQkYm9keS5maW5kPEhUTUxBbmNob3JFbGVtZW50PignYS5leHRlcm5hbCwgYVtyZWw9XCJtdzpFeHRMaW5rXCJdJykuZmlsdGVyKChfaW5kZXgsIGVsZW1lbnQpOiBib29sZWFuID0+IHtcblx0XHRjb25zdCBsaW5rSHJlZjogc3RyaW5nIHwgdW5kZWZpbmVkID0gJChlbGVtZW50KS5hdHRyKCdocmVmJyk7XG5cdFx0aWYgKGxpbmtIcmVmKSB7XG5cdFx0XHRjb25zdCBocmVmU3BsaXQ6IHN0cmluZ1tdID0gbGlua0hyZWYuc3BsaXQoJy8nKTtcblx0XHRcdGlmIChocmVmU3BsaXQubGVuZ3RoIDwgMyB8fCBocmVmU3BsaXRbMl0gPT09IGxvY2F0aW9uLmhvc3QpIHtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChlbGVtZW50LmhyZWYuaW5jbHVkZXMoYCR7bG9jYXRpb24ucHJvdG9jb2x9Ly8ke2xvY2F0aW9uLmhvc3RuYW1lfWApKSB7XG5cdFx0XHRlbGVtZW50LnRhcmdldCA9ICdfYmxhbmsnO1xuXHRcdFx0aWYgKCFlbGVtZW50LnJlbC5pbmNsdWRlcygnbm9vcGVuZXInKSkge1xuXHRcdFx0XHRlbGVtZW50LnJlbCArPSAnIG5vb3BlbmVyJztcblx0XHRcdH1cblx0XHRcdGlmICghZWxlbWVudC5yZWwuaW5jbHVkZXMoJ25vcmVmZXJyZXInKSkge1xuXHRcdFx0XHRlbGVtZW50LnJlbCArPSAnIG5vcmVmZXJyZXInO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiB0cnVlO1xuXHR9KTtcbn07XG5cbmNvbnN0IHJlbW92ZVRpdGxlRnJvbVBlcm1hbGluayA9ICgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkID0+IHtcblx0LyoqXG5cdCAqIFJlbW92ZSB0aXRsZT0qIGZyb20gcGVybWFsaW5rXG5cdCAqL1xuXHRjb25zdCAkcGVybWFMaW5rOiBKUXVlcnkgPSAkYm9keS5maW5kKCcjdC1wZXJtYWxpbmsnKTtcblx0aWYgKCEkcGVybWFMaW5rLmxlbmd0aCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0ICRwZXJtYUxpbmtGaXJzdENoaWxkOiBKUXVlcnk8SFRNTEFuY2hvckVsZW1lbnQ+ID0gJHBlcm1hTGluay5maW5kPEhUTUxBbmNob3JFbGVtZW50PignOmZpcnN0LWNoaWxkJyk7XG5cblx0Y29uc3QgaHJlZjogc3RyaW5nIHwgdW5kZWZpbmVkID0gJHBlcm1hTGlua0ZpcnN0Q2hpbGQuYXR0cignaHJlZicpPy5yZXBsYWNlKC90aXRsZT1bXiZdKiYvLCAnJyk7XG5cdGlmICghaHJlZikge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdCRwZXJtYUxpbmtGaXJzdENoaWxkLmF0dHIoJ2hyZWYnLCBocmVmKTtcbn07XG5cbmNvbnN0IG9wZW5TZWFyY2hJbk5ld1RhYiA9ICgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkID0+IHtcblx0LyoqXG5cdCAqIE9wZW4gc2VhcmNoIHJlc3VsdHMgaW4gYSBuZXcgdGFiIG9yIHdpbmRvd1xuXHQgKiB3aGVuIGhvbGRpbmcgZG93biB0aGUgQ3RybCBrZXkgKGJ5IFRpbWVzaGlmdGVyKVxuXHQgKi9cblx0JGJvZHlcblx0XHQuZmluZChbJyNzZWFyY2gnLCAnI3NlYXJjaGJveCcsICcjc2VhcmNoZm9ybScsICcuc2VhcmNoLXR5cGVzJywgJyNzZWFyY2gtdHlwZXMnXS5qb2luKCcsJykpXG5cdFx0Lm9uKCdrZXlkb3duIGtleXVwIG1vdXNlZG93bicsIChldmVudDogSlF1ZXJ5LlRyaWdnZXJlZEV2ZW50PEhUTUxFbGVtZW50Pik6IHZvaWQgPT4ge1xuXHRcdFx0Y29uc3Qge2N0cmxLZXksIG1ldGFLZXksIHRhcmdldH0gPSBldmVudDtcblx0XHRcdCQodGFyZ2V0KS5hdHRyKCd0YXJnZXQnLCAoY3RybEtleSA/PyBtZXRhS2V5KSA/ICdfYmxhbmsnIDogJycpO1xuXHRcdH0pO1xufTtcblxuY29uc3QgdGl0bGVDbGVhblVwID0gKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQgPT4ge1xuXHQvKipcblx0ICogQ2xlYW51cCB0aXRsZSBmb3IgYWxsIHBhZ2VzXG5cdCAqL1xuXHRjb25zdCBVUkxfRElGRjogc3RyaW5nIHwgbnVsbCA9IG13LnV0aWwuZ2V0UGFyYW1WYWx1ZSgnZGlmZicpO1xuXHRpZiAoVVJMX0RJRkYgfHwgd2dBY3Rpb24gIT09ICd2aWV3JyB8fCAhWzYsIDExOF0uaW5jbHVkZXMod2dOYW1lc3BhY2VOdW1iZXIpKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgZnVsbFBhZ2VOYW1lOiBzdHJpbmcgPSBuZXcgbXcuVGl0bGUod2dQYWdlTmFtZSkuZ2V0UHJlZml4ZWRUZXh0KCk7XG5cdGNvbnN0ICRmaXJzdEhlYWRpbmc6IEpRdWVyeSA9ICRib2R5LmZpbmQoJy5maXJzdEhlYWRpbmcnKTtcblx0Y29uc3QgZG9jdW1lbnRUaXRsZTogc3RyaW5nID0gZG9jdW1lbnQudGl0bGU7XG5cdGNvbnN0IHBhZ2VUaXRsZTogc3RyaW5nID0gJGZpcnN0SGVhZGluZy50ZXh0KCk7XG5cblx0Y29uc3QgcmVwbGFjZVRpdGxlID0gKHRpdGxlOiBzdHJpbmcpOiBzdHJpbmcgPT4gdGl0bGUucmVwbGFjZShwYWdlVGl0bGUsIGZ1bGxQYWdlTmFtZSk7XG5cblx0ZG9jdW1lbnQudGl0bGUgPSByZXBsYWNlVGl0bGUoZG9jdW1lbnRUaXRsZSk7XG5cdCRmaXJzdEhlYWRpbmcudGV4dChyZXBsYWNlVGl0bGUocGFnZVRpdGxlKSk7XG59O1xuXG5jb25zdCB1bmloYW5Qb3B1cCA9IGFzeW5jICgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0LyoqXG5cdCAqIERpc3BsYXkgdGl0bGU9KC4qKSBvZiA8c3BhbiBjbGFzcz1cImlubGluZS11bmloYW5cIj4gYWZ0ZXIgdGhlbS5cblx0ICogKGJldGEgdGVzdClcblx0ICovXG5cdC8vIERvIG5vdCBkaXNwbGF5IG9uIFNwZWNpYWwgUGFnZXNcblx0aWYgKHdnTmFtZXNwYWNlTnVtYmVyIDwgMCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGF3YWl0IG13LmxvYWRlci51c2luZygnb29qcy11aS1jb3JlJyk7XG5cblx0Zm9yIChjb25zdCBlbGVtZW50IG9mICRib2R5LmZpbmQoJ2F0dHIsIC5pbmxpbmUtdW5paGFuJykpIHtcblx0XHRjb25zdCAkZWxlbWVudDogSlF1ZXJ5ID0gJChlbGVtZW50KTtcblxuXHRcdGNvbnN0IHRpdGxlOiBzdHJpbmcgfCB1bmRlZmluZWQgPSAkZWxlbWVudC5hdHRyKCd0aXRsZScpO1xuXHRcdGlmICghdGl0bGUpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGNvbnN0IHBvcHVwOiBPTy51aS5Qb3B1cFdpZGdldCA9IG5ldyBPTy51aS5Qb3B1cFdpZGdldCh7XG5cdFx0XHQkY29udGVudDogJCg8cD57dGl0bGV9PC9wPikgYXMgSlF1ZXJ5LFxuXHRcdFx0bGFiZWw6IGdldE1lc3NhZ2UoJ05vdGUnKSxcblx0XHRcdGFuY2hvcjogdHJ1ZSxcblx0XHRcdGhlYWQ6IHRydWUsXG5cdFx0XHRwYWRkZWQ6IHRydWUsXG5cdFx0fSk7XG5cblx0XHQkYm9keS5hcHBlbmQocG9wdXAuJGVsZW1lbnQpO1xuXG5cdFx0JGVsZW1lbnQub24oJ2NsaWNrJywgKCk6IHZvaWQgPT4ge1xuXHRcdFx0cG9wdXAudG9nZ2xlKCk7XG5cdFx0fSk7XG5cdH1cbn07XG5cbmNvbnN0IGZpeExvY2F0aW9uSGFzaCA9ICgpOiB2b2lkID0+IHtcblx0Lyog5L+u5q2j5oqY5Y+g5ZCO5a6a5L2N5Y+Y5YyWICovXG5cdGlmIChsb2NhdGlvbi5oYXNoKSB7XG5cdFx0bG9jYXRpb24uaHJlZiA9IGxvY2F0aW9uLmhhc2g7XG5cdH1cbn07XG5cbmNvbnN0IGhpZGVOZXdVc2Vyc0xvZyA9ICgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkID0+IHtcblx0Lyog5Li05pe277ya56aB5q2i55So5oi35p+l55yL55So5oi35Yib5bu65pel5b+XICovXG5cdGlmICh3Z0Nhbm9uaWNhbFNwZWNpYWxQYWdlTmFtZSAhPT0gJ0xvZycpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCAkbmV3VXNlcnNMb2c6IEpRdWVyeSA9ICRib2R5LmZpbmQoJ2lucHV0W25hbWU9XCJ3cGZpbHRlcnNbXVwiXVt2YWx1ZT1uZXd1c2Vyc10nKTtcblx0JG5ld1VzZXJzTG9nLnByb3Aoe1xuXHRcdGNoZWNrZWQ6IGZhbHNlLFxuXHRcdGRpc2FibGVkOiB0cnVlLFxuXHR9KTtcbn07XG5cbmNvbnN0IHRvZ2dsZUxpbmsgPSAoJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KTogdm9pZCA9PiB7XG5cdC8qIOiwg+aVtOaKmOWPoOaMiemSrueahOminOiJsiAqL1xuXHRjb25zdCAkdG9nZ2xlcjogSlF1ZXJ5ID0gJGJvZHkuZmluZCgnLm13LWNvbGxhcHNpYmxlLXRvZ2dsZSwgLmdhZGdldC1jb2xsYXBzaWJsZS10b2dnbGVyJyk7XG5cdGlmICghJHRvZ2dsZXIubGVuZ3RoKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0aWYgKCR0b2dnbGVyLnBhcmVudCgpWzBdPy5zdHlsZS5jb2xvcikge1xuXHRcdCR0b2dnbGVyLmZpbmQoJ2EnKS5jc3MoJ2NvbG9yJywgJ2luaGVyaXQnKTtcblx0fVxufTtcblxuZXhwb3J0IHtcblx0bG9hZFdpdGhVUkwsXG5cdGhpZ2hMaWdodFJldixcblx0YWRkVGFyZ2V0QmxhbmssXG5cdHJlbW92ZVRpdGxlRnJvbVBlcm1hbGluayxcblx0b3BlblNlYXJjaEluTmV3VGFiLFxuXHR0aXRsZUNsZWFuVXAsXG5cdHVuaWhhblBvcHVwLFxuXHRmaXhMb2NhdGlvbkhhc2gsXG5cdGhpZGVOZXdVc2Vyc0xvZyxcblx0dG9nZ2xlTGluayxcbn07XG4iLCAiaW1wb3J0IHtsb2NhbGl6ZX0gZnJvbSAnZXh0LmdhZGdldC5pMThuJztcblxuY29uc3QgZ2V0STE4bk1lc3NhZ2VzID0gKCkgPT4ge1xuXHRjb25zdCB7d2dVTFN9ID0gd2luZG93O1xuXHRyZXR1cm4ge1xuXHRcdE5vdGU6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnTm90ZTogJyxcblx0XHRcdCd6aC1oYW5zJzogJ+azqOmHiu+8micsXG5cdFx0XHQnemgtaGFudCc6ICfms6jph4vvvJonLFxuXHRcdH0pLFxuXHRcdE5vUGVybUVycm9yMDogd2dVTFMoXG5cdFx0XHQn5Zug5oqA5pyv5Y6f5Zug77yM5oKo5rKh5pyJ5p2D6ZmQ6K6/6Zeu55u45YWz6aG16Z2i44CC6Iul5pyJ55aR6Zeu77yM6K+35LiO5rGC6Ze755m+56eR6L+Q6JCl6ICF6IGU57O744CCJyxcblx0XHRcdCflm6DmioDooZPljp/lm6DvvIzmgqjmspLmnInmrIrpmZDoqKrllY/nm7jpl5zpoIHpnaLjgILoi6XmnInnlpHllY/vvIzoq4voiIfmsYLogZ7nmb7np5HpgYvnh5/ogIXoga/ns7vjgIInXG5cdFx0KSxcblx0XHROb1Blcm1FcnJvcjE6IHdnVUxTKFxuXHRcdFx0J+aCqOayoeacieadg+mZkOiuv+mXruebuOWFs+mhtemdouOAguiLpeaCqOaYr+i1hOa3see8luiAhe+8jOivt+S4juaxgumXu+eZvuenkeaKgOacr+WboumYn+iBlOezu++8jOS7peiOt+WPluadg+mZkOOAgicsXG5cdFx0XHQn5oKo5rKS5pyJ5qyK6ZmQ6Kiq5ZWP55u46Zec6aCB6Z2i44CC6Iul5oKo5piv6LOH5rex57eo6ICF77yM6KuL6IiH5rGC6IGe55m+56eR5oqA6KGT5ZyY6ZqK6IGv57O777yM5Lul542y5Y+W5qyK6ZmQ44CCJ1xuXHRcdCksXG5cdFx0Tm9QZXJtRXJyb3IyOiB3Z1VMUyhcblx0XHRcdCfmgqjnmoTnvZHnu5znjq/looPlrZjlnKjpo47pmanvvIzor7fnmbvlvZXlkI7nu6fnu63kvb/nlKjjgILoi6XmgqjmsqHmnInmsYLpl7vnmb7np5HotKblj7fvvIzor7fms6jlhozlkI7nmbvlvZXjgIInLFxuXHRcdFx0J+aCqOeahOe2sui3r+eSsOWig+WtmOWcqOmiqOmaqu+8jOiri+eZu+WFpeW+jOe5vOe6jOS9v+eUqOOAguiLpeaCqOaykuacieaxguiBnueZvuenkeizrOiZn++8jOiri+azqOWGiuW+jOeZu+mMhOOAgidcblx0XHQpLFxuXHRcdE5vUGVybUVycm9yMzogd2dVTFMoXG5cdFx0XHQn55u45YWz5Yqf6IO95LuF5ZCR5rOo5YaM55So5oi35byA5pS+77yM6K+355m75b2V5ZCO57un57ut5L2/55So44CC6Iul5oKo5rKh5pyJ5rGC6Ze755m+56eR6LSm5Y+377yM6K+35rOo5YaM5ZCO55m75b2V44CCJyxcblx0XHRcdCfnm7jpl5zlip/og73lg4XlkJHms6jlhornlKjmiLbplovmlL7vvIzoq4vnmbvlhaXlvoznubznuozkvb/nlKjjgILoi6XmgqjmspLmnInmsYLogZ7nmb7np5Hos6zomZ/vvIzoq4vms6jlhorlvoznmbvpjITjgIInXG5cdFx0KSxcblx0XHROb1Blcm1FcnJvcjQ6IHdnVUxTKFxuXHRcdFx0J+aCqOayoeacieadg+mZkOiuv+mXruebuOWFs+mhtemdouOAguiLpeacieeWkemXru+8jOivt+S4juaxgumXu+eZvuenkei/kOiQpeiAheiBlOezu+OAgicsXG5cdFx0XHQn5oKo5rKS5pyJ5qyK6ZmQ6Kiq5ZWP55u46Zec6aCB6Z2i44CC6Iul5pyJ55aR5ZWP77yM6KuL6IiH5rGC6IGe55m+56eR6YGL54ef6ICF6IGv57O744CCJ1xuXHRcdCksXG5cdH07XG59O1xuXG5jb25zdCBpMThuTWVzc2FnZXMgPSBnZXRJMThuTWVzc2FnZXMoKTtcblxuY29uc3QgZ2V0TWVzc2FnZTogR2V0TWVzc2FnZXM8dHlwZW9mIGkxOG5NZXNzYWdlcz4gPSAoa2V5KSA9PiB7XG5cdHJldHVybiBpMThuTWVzc2FnZXNba2V5XSB8fCBrZXk7XG59O1xuXG5leHBvcnQge2dldE1lc3NhZ2V9O1xuIiwgImltcG9ydCB7dGlwcHl9IGZyb20gJ2V4dC5nYWRnZXQuVGlwcHknO1xuXG5jb25zdCBnZXRDb250ZW50ID0gKHJlZmVyZW5jZTogRWxlbWVudCk6IHN0cmluZyA9PiB7XG5cdGNvbnN0IGxhYmVsOiBzdHJpbmcgfCBudWxsID0gcmVmZXJlbmNlLmdldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpO1xuXHRjb25zdCB0aXRsZTogc3RyaW5nIHwgbnVsbCA9IHJlZmVyZW5jZS5nZXRBdHRyaWJ1dGUoJ2FsdCcpID8/IHJlZmVyZW5jZS5nZXRBdHRyaWJ1dGUoJ3RpdGxlJyk7XG5cblx0cmV0dXJuIChsYWJlbCA9PT0gdGl0bGUgPyBsYWJlbCA6IHRpdGxlIHx8IGxhYmVsKSB8fCAocmVmZXJlbmNlLnRleHRDb250ZW50IGFzIHN0cmluZyk7XG59O1xuXG5jb25zdCBvbkNyZWF0ZUNhbGxiYWNrID0gKGluc3RhbmNlOiBSZXR1cm5UeXBlPHR5cGVvZiB0aXBweT5bMF0pOiB2b2lkID0+IHtcblx0Y29uc3Qge3JlZmVyZW5jZX0gPSBpbnN0YW5jZTtcblx0cmVmZXJlbmNlLnNldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcsIGdldENvbnRlbnQocmVmZXJlbmNlKSk7XG5cdHJlZmVyZW5jZS5yZW1vdmVBdHRyaWJ1dGUoJ3RpdGxlJyk7XG59O1xuXG5jb25zdCBvblNob3dDYWxsYmFjayA9IChpbnN0YW5jZTogUmV0dXJuVHlwZTx0eXBlb2YgdGlwcHk+WzBdKTogdm9pZCA9PiB7XG5cdG9uQ3JlYXRlQ2FsbGJhY2soaW5zdGFuY2UpO1xuXHRpbnN0YW5jZS5zZXRDb250ZW50KGdldENvbnRlbnQoaW5zdGFuY2UucmVmZXJlbmNlKSk7XG59O1xuXG5jb25zdCB0aXBweUZvckNpdGl6ZW5IZWFkZXIgPSAoJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KTogdm9pZCA9PiB7XG5cdGNvbnN0IHtza2lufSA9IG13LmNvbmZpZy5nZXQoKTtcblx0aWYgKHNraW4gIT09ICdjaXRpemVuJykge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGZvciAoY29uc3QgZWxlbWVudCBvZiAkYm9keS5maW5kKFxuXHRcdFtcblx0XHRcdCcuY2l0aXplbi1oZWFkZXIgLmNpdGl6ZW4tZHJvcGRvd24tc3VtbWFyeScsXG5cdFx0XHQnLmNpdGl6ZW4taGVhZGVyIC5jaXRpemVuLWVjaG8tbm90aWZpY2F0aW9uLWJhZGdlJyxcblx0XHRcdCcuY2l0aXplbi1oZWFkZXJfX2xvZ28gYScsXG5cdFx0XHQnLnBhZ2UtYWN0aW9ucz5uYXY+dWw+bGkgYScsXG5cdFx0XHQnLnBhZ2UtYWN0aW9uc19fYnV0dG9uJyxcblx0XHRdLmpvaW4oJywnKVxuXHQpKSB7XG5cdFx0Y29uc3QgJGVsZW1lbnQ6IEpRdWVyeSA9ICQoZWxlbWVudCk7XG5cdFx0bGV0IHRpdGxlOiBzdHJpbmcgfCB1bmRlZmluZWQgPSAkZWxlbWVudC5hdHRyKCd0aXRsZScpO1xuXHRcdGlmICghdGl0bGUpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdHRpdGxlID0gdGl0bGUucmVwbGFjZSgvXFxzKj9cXFsuKz9dJC8sICcnKTtcblxuXHRcdCRlbGVtZW50LmF0dHIoe1xuXHRcdFx0J2FyaWEtbGFiZWwnOiB0aXRsZSxcblx0XHRcdHRpdGxlOiAnJyxcblx0XHR9KTtcblx0XHR0aXBweSgkZWxlbWVudC5nZXQoMCkgYXMgSFRNTEVsZW1lbnQsIHtcblx0XHRcdGFycm93OiB0cnVlLFxuXHRcdFx0Y29udGVudDogdGl0bGUsXG5cdFx0XHRwbGFjZW1lbnQ6ICdib3R0b20nLFxuXHRcdFx0b25DcmVhdGU6IG9uQ3JlYXRlQ2FsbGJhY2ssXG5cdFx0XHRvbkhpZGRlbjogb25DcmVhdGVDYWxsYmFjayxcblx0XHRcdG9uU2hvdzogb25TaG93Q2FsbGJhY2ssXG5cdFx0fSk7XG5cdH1cbn07XG5cbmNvbnN0IHRpcHB5Rm9yRXh0ZW5zaW9uID0gYXN5bmMgKCk6IFByb21pc2U8dm9pZD4gPT4ge1xuXHRjb25zdCB7c2tpbn0gPSBtdy5jb25maWcuZ2V0KCk7XG5cdGlmIChza2luID09PSAndmVjdG9yLTIwMjInKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0YXdhaXQgbXcubG9hZGVyLnVzaW5nKCdleHQuQ29sbGFwc2libGVTaWRlYmFyLmpzJyk7XG5cdHRpcHB5KCcjc2lkZWJhckJ1dHRvbicsIHtcblx0XHRhcnJvdzogdHJ1ZSxcblx0XHRjb250ZW50OiBnZXRDb250ZW50LFxuXHRcdHBsYWNlbWVudDogJ2xlZnQnLFxuXHRcdG9uQ3JlYXRlOiBvbkNyZWF0ZUNhbGxiYWNrLFxuXHRcdG9uSGlkZGVuOiBvbkNyZWF0ZUNhbGxiYWNrLFxuXHRcdG9uU2hvdzogb25TaG93Q2FsbGJhY2ssXG5cdH0pO1xuXG5cdGlmIChza2luID09PSAndmVjdG9yJykge1xuXHRcdGF3YWl0IG13LmxvYWRlci51c2luZygnZXh0LkNvbGxhcHNpYmxlU2lkZWJhci52ZWN0b3InKTtcblx0XHR0aXBweSgnI3NpZGViYXJDb2xsYXBzZScsIHtcblx0XHRcdGFycm93OiB0cnVlLFxuXHRcdFx0Y29udGVudDogZ2V0Q29udGVudCxcblx0XHRcdHBsYWNlbWVudDogJ3JpZ2h0Jyxcblx0XHRcdG9uQ3JlYXRlOiBvbkNyZWF0ZUNhbGxiYWNrLFxuXHRcdFx0b25IaWRkZW46IG9uQ3JlYXRlQ2FsbGJhY2ssXG5cdFx0XHRvblNob3c6IG9uU2hvd0NhbGxiYWNrLFxuXHRcdH0pO1xuXHR9XG5cblx0YXdhaXQgbXcubG9hZGVyLnVzaW5nKCdleHQuRGFya01vZGUnKTtcblx0dGlwcHkoJyNkYXJrbW9kZS1idXR0b24nLCB7XG5cdFx0YXJyb3c6IHRydWUsXG5cdFx0Y29udGVudDogZ2V0Q29udGVudCxcblx0XHRwbGFjZW1lbnQ6ICdsZWZ0Jyxcblx0XHRvbkNyZWF0ZTogb25DcmVhdGVDYWxsYmFjayxcblx0XHRvbkhpZGRlbjogb25DcmVhdGVDYWxsYmFjayxcblx0XHRvblNob3c6IG9uU2hvd0NhbGxiYWNrLFxuXHR9KTtcbn07XG5cbmV4cG9ydCB7dGlwcHlGb3JDaXRpemVuSGVhZGVyLCB0aXBweUZvckV4dGVuc2lvbn07XG4iLCAiY29uc3QgZGVwcmVjYXRlZEZ1bmN0aW9ucyA9ICgpOiB2b2lkID0+IHtcblx0LyohXG5cdCAqIG1haW50ZW5hbmNlOiBTb21lIHVzZXIgc2NyaXB0cyBtYXkgYmUgdXNpbmcgdGhlIGZvbGxvd2luZyBkZXByZWNhdGVkIGZ1bmN0aW9ucy5cblx0ICogVGhlc2UgZnVuY3Rpb25zIGFyZSBubyBsb25nZXIgc3VwcG9ydGVkIGFuZCBzaG91bGQgYmUgdXBkYXRlZC5cblx0ICovXG5cdG13LmxvZy5kZXByZWNhdGUoXG5cdFx0d2luZG93LFxuXHRcdCdpbXBvcnRTY3JpcHQnLFxuXHRcdCh0aXRsZTogc3RyaW5nKTogSFRNTFNjcmlwdEVsZW1lbnQgPT4ge1xuXHRcdFx0cmV0dXJuIG13LmxvYWRlci5hZGRTY3JpcHRUYWcoXG5cdFx0XHRcdG13LnV0aWwuZ2V0VXJsKHRpdGxlLCB7XG5cdFx0XHRcdFx0YWN0aW9uOiAncmF3Jyxcblx0XHRcdFx0XHRjdHlwZTogJ3RleHQvamF2YXNjcmlwdCcsXG5cdFx0XHRcdFx0bWF4YWdlOiAnMzYwMCcsXG5cdFx0XHRcdFx0c21heGFnZTogJzM2MDAnLFxuXHRcdFx0XHR9KVxuXHRcdFx0KTtcblx0XHR9LFxuXHRcdCdVc2UgbXcubG9hZGVyLmFkZFNjcmlwdFRhZygpIGluc3RlYWQnXG5cdCk7XG5cblx0bXcubG9nLmRlcHJlY2F0ZShcblx0XHR3aW5kb3csXG5cdFx0J2ltcG9ydFN0eWxlc2hlZXQnLFxuXHRcdCh0aXRsZTogc3RyaW5nKTogSFRNTExpbmtFbGVtZW50ID0+IHtcblx0XHRcdHJldHVybiBtdy5sb2FkZXIuYWRkTGlua1RhZyhcblx0XHRcdFx0bXcudXRpbC5nZXRVcmwodGl0bGUsIHtcblx0XHRcdFx0XHRhY3Rpb246ICdyYXcnLFxuXHRcdFx0XHRcdGN0eXBlOiAndGV4dC9jc3MnLFxuXHRcdFx0XHRcdG1heGFnZTogJzM2MDAnLFxuXHRcdFx0XHRcdHNtYXhhZ2U6ICczNjAwJyxcblx0XHRcdFx0fSksXG5cdFx0XHRcdCd0ZXh0L2Nzcydcblx0XHRcdCk7XG5cdFx0fSxcblx0XHQnVXNlIG13LmxvYWRlci5hZGRMaW5rVGFnKCkgaW5zdGVhZCdcblx0KTtcblxuXHRtdy5sb2cuZGVwcmVjYXRlKFxuXHRcdHdpbmRvdyxcblx0XHQnaW1wb3J0U2NyaXB0VVJJJyxcblx0XHQobW9kdWxlczogc3RyaW5nKTogSFRNTFNjcmlwdEVsZW1lbnQgPT4ge1xuXHRcdFx0cmV0dXJuIG13LmxvYWRlci5hZGRTY3JpcHRUYWcobXcudXRpbC53aWtpVXJsZW5jb2RlKG1vZHVsZXMpKTtcblx0XHR9LFxuXHRcdCdVc2UgbXcubG9hZGVyLmFkZFNjcmlwdFRhZygpIG9yIG13LmxvYWRlci5nZXRTY3JpcHQoKSBpbnN0ZWFkJ1xuXHQpO1xuXG5cdG13LmxvZy5kZXByZWNhdGUoXG5cdFx0d2luZG93LFxuXHRcdCdpbXBvcnRTdHlsZXNoZWV0VVJJJyxcblx0XHQobW9kdWxlczogc3RyaW5nKTogSFRNTExpbmtFbGVtZW50ID0+IHtcblx0XHRcdHJldHVybiBtdy5sb2FkZXIuYWRkTGlua1RhZyhtdy51dGlsLndpa2lVcmxlbmNvZGUobW9kdWxlcyksICd0ZXh0L2NzcycpO1xuXHRcdH0sXG5cdFx0J1VzZSBtdy5sb2FkZXIuYWRkTGlua1RhZygpIGluc3RlYWQnXG5cdCk7XG5cblx0bXcubG9nLmRlcHJlY2F0ZShcblx0XHR3aW5kb3csXG5cdFx0Ly8gQHRzLWV4cGVjdC1lcnJvciBUUzIzNDVcblx0XHQnaW1wb3J0U2NyaXB0Q2FsbGJhY2snLFxuXHRcdCh0aXRsZTogc3RyaW5nLCByZWFkeTogbmV2ZXIpOiB2b2lkID0+IHtcblx0XHRcdHZvaWQgbXcubG9hZGVyXG5cdFx0XHRcdC5nZXRTY3JpcHQoXG5cdFx0XHRcdFx0bXcudXRpbC5nZXRVcmwodGl0bGUsIHtcblx0XHRcdFx0XHRcdGFjdGlvbjogJ3JhdycsXG5cdFx0XHRcdFx0XHRjdHlwZTogJ3RleHQvamF2YXNjcmlwdCcsXG5cdFx0XHRcdFx0XHRtYXhhZ2U6ICczNjAwJyxcblx0XHRcdFx0XHRcdHNtYXhhZ2U6ICczNjAwJyxcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHQpXG5cdFx0XHRcdC50aGVuKHJlYWR5KTtcblx0XHR9LFxuXHRcdCdVc2UgbXcubG9hZGVyLmdldFNjcmlwdCgpIGluc3RlYWQnXG5cdCk7XG5cblx0bXcubG9nLmRlcHJlY2F0ZShcblx0XHR3aW5kb3csXG5cdFx0Ly8gQHRzLWV4cGVjdC1lcnJvciBUUzIzNDVcblx0XHQnaW1wb3J0U2NyaXB0VVJJQ2FsbGJhY2snLFxuXHRcdCh1cmw6IHN0cmluZywgcmVhZHk6IG5ldmVyKTogdm9pZCA9PiB7XG5cdFx0XHR2b2lkIG13LmxvYWRlci5nZXRTY3JpcHQodXJsKS50aGVuKHJlYWR5KTtcblx0XHR9LFxuXHRcdCdVc2UgbXcubG9hZGVyLmdldFNjcmlwdCgpIGluc3RlYWQnXG5cdCk7XG5cdC8qKlxuXHQgKiBtYWludGVuYW5jZTogU29tZSB1c2VyIHNjcmlwdHMgbWF5IGJlIHVzaW5nIHRoZSBmb2xsb3dpbmcgZGVwcmVjYXRlZCBmdW5jdGlvbnMuXG5cdCAqIFRoZXNlIGZ1bmN0aW9ucyBhcmUga2VwdCBmb3IgY29tcGFiaWxpdHkuXG5cdCAqL1xuXHQvLyBtdy5sb2cuZGVwcmVjYXRlKHdpbmRvdywgJ0pTQ29uZmlnJywge30sICdVc2Uge30gaW5zdGVhZCcpO1xuXHQvKipcblx0ICogd2dVKlMgZnVuY3Rpb25zIGhhdmUgYmVlbiBzcGxpdCB0byBhIHNlcGVyYXRlIGdhZGdldCAoZXh0LmdhZGdldC5pMThuKS5cblx0ICovXG59O1xuXG5leHBvcnQge2RlcHJlY2F0ZWRGdW5jdGlvbnN9O1xuIiwgImltcG9ydCB7XG5cdGFkZFRhcmdldEJsYW5rLFxuXHRmaXhMb2NhdGlvbkhhc2gsXG5cdGhpZGVOZXdVc2Vyc0xvZyxcblx0aGlnaExpZ2h0UmV2LFxuXHRsb2FkV2l0aFVSTCxcblx0b3BlblNlYXJjaEluTmV3VGFiLFxuXHRyZW1vdmVUaXRsZUZyb21QZXJtYWxpbmssXG5cdHRpdGxlQ2xlYW5VcCxcblx0dG9nZ2xlTGluayxcblx0dW5paGFuUG9wdXAsXG59IGZyb20gJy4vbW9kdWxlcy9jb3JlJztcbmltcG9ydCB7dGlwcHlGb3JDaXRpemVuSGVhZGVyLCB0aXBweUZvckV4dGVuc2lvbn0gZnJvbSAnLi9tb2R1bGVzL3RpcHB5JztcbmltcG9ydCB7ZGVwcmVjYXRlZEZ1bmN0aW9uc30gZnJvbSAnLi9tb2R1bGVzL2RlcHJlY2F0ZWRGdW5jdGlvbnMnO1xuaW1wb3J0IHtnZXRCb2R5fSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuaW1wb3J0IHtyZXNpemVKUXVlcnlVSX0gZnJvbSAnLi9tb2R1bGVzL3Jlc2l6ZUpRdWVyeVVJJztcblxuKGZ1bmN0aW9uIHNpdGVDb21tb24oKTogdm9pZCB7XG5cdGNvbnN0IGNvbmZpZ0tleTogc3RyaW5nID0gJ2dhZGdldC1TaXRlQ29tbW9uX0pTX19Jbml0aWFsaXplZCc7XG5cdGNvbnN0IHtza2lufSA9IG13LmNvbmZpZy5nZXQoKTtcblxuXHQvLyBHdWFyZCBhZ2FpbnN0IGRvdWJsZSBpbmNsdXNpb25zXG5cdGlmIChtdy5jb25maWcuZ2V0KGNvbmZpZ0tleSkpIHtcblx0XHRyZXR1cm47XG5cdH1cblx0Ly8gU2V0IGd1YXJkXG5cdG13LmNvbmZpZy5zZXQoY29uZmlnS2V5LCB0cnVlKTtcblxuXHQvLyBDb3JlIG1vZHVsZXNcblx0dm9pZCBsb2FkV2l0aFVSTCgpO1xuXHRmaXhMb2NhdGlvbkhhc2goKTtcblxuXHR2b2lkIGdldEJvZHkoKS50aGVuKCgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkID0+IHtcblx0XHQvLyBDb3JlIG1vZHVsZXMgKG5lZWQgJC5yZWFkeSlcblx0XHRoaWdoTGlnaHRSZXYoJGJvZHkpO1xuXHRcdGFkZFRhcmdldEJsYW5rKCRib2R5KTtcblx0XHRyZW1vdmVUaXRsZUZyb21QZXJtYWxpbmsoJGJvZHkpO1xuXHRcdG9wZW5TZWFyY2hJbk5ld1RhYigkYm9keSk7XG5cdFx0dGl0bGVDbGVhblVwKCRib2R5KTtcblx0XHR2b2lkIHVuaWhhblBvcHVwKCRib2R5KTtcblx0XHRoaWRlTmV3VXNlcnNMb2coJGJvZHkpO1xuXHRcdHRvZ2dsZUxpbmsoJGJvZHkpO1xuXHRcdHJlc2l6ZUpRdWVyeVVJKCRib2R5KTtcblxuXHRcdC8vIFRpcHB5LXJlbGF0ZWQgY29kZXMgKG5lZWQgJC5yZWFkeSlcblx0XHRpZiAoc2tpbiA9PT0gJ2NpdGl6ZW4nKSB7XG5cdFx0XHR0aXBweUZvckNpdGl6ZW5IZWFkZXIoJGJvZHkpO1xuXHRcdH1cblx0fSk7XG5cblx0Ly8gRGVwcmVjYXRlZCBmdW5jdGlvbnNcblx0ZGVwcmVjYXRlZEZ1bmN0aW9ucygpO1xuXG5cdC8vIFRpcHB5LXJlbGF0ZWQgY29kZXNcblx0aWYgKCFbJ3ZlY3Rvci0yMDIyJywgJ2NpdGl6ZW4nXS5pbmNsdWRlcyhza2luKSkge1xuXHRcdHZvaWQgdGlwcHlGb3JFeHRlbnNpb24oKTtcblx0fVxufSkoKTtcbiIsICJjb25zdCByZXNpemVKUXVlcnlVSSA9ICgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkID0+IHtcblx0JCh3aW5kb3cpLm9uKCdyZXNpemUnLCAoKTogdm9pZCA9PiB7XG5cdFx0Y29uc3Qgd2luZG93V2lkdGggPSAkKHdpbmRvdykud2lkdGgoKTtcblx0XHRjb25zdCAkanF1ZXJ5VUlEaWFsb2cgPSAkYm9keS5maW5kKCcudWktZGlhbG9nJyk7XG5cdFx0aWYgKCRqcXVlcnlVSURpYWxvZykge1xuXHRcdFx0JGpxdWVyeVVJRGlhbG9nLmNzcygnbWF4LXdpZHRoJywgYGNhbGMoJHt3aW5kb3dXaWR0aH1weCAtIDJlbSlgKTtcblx0XHR9XG5cdH0pO1xufTtcblxuZXhwb3J0IHtyZXNpemVKUXVlcnlVSX07XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLHFCQUFrQkMsUUFBQUMsUUFBQSxrQkFBQSxHQUFBLENBQUE7O0FDQWxCLElBQUFDLG9CQUF1QkQsUUFBQSxpQkFBQTtBQUV2QixJQUFNRSxrQkFBa0JBLE1BQU07QUFDN0IsUUFBTTtJQUFDQztFQUFLLElBQUlDO0FBQ2hCLFNBQU87SUFDTkMsT0FBQSxHQUFNSixrQkFBQUssVUFBUztNQUNkQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFD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akwsS0FBR0MsT0FBT2lMLElBQUlELFdBQVcsSUFBSTtBQUc3QixPQUFLOUssWUFBWTtBQUNqQndILGtCQUFnQjtBQUVoQixRQUFBLEdBQUtnRCxtQkFBQVEsU0FBUSxFQUFFVixLQUFNbkgsV0FBeUM7QUFFN0RELGlCQUFhQyxLQUFLO0FBQ2xCVSxtQkFBZVYsS0FBSztBQUNwQjJCLDZCQUF5QjNCLEtBQUs7QUFDOUJnQyx1QkFBbUJoQyxLQUFLO0FBQ3hCc0MsaUJBQWF0QyxLQUFLO0FBQ2xCLFNBQUtrRCxZQUFZbEQsS0FBSztBQUN0QnVFLG9CQUFnQnZFLEtBQUs7QUFDckI0RSxlQUFXNUUsS0FBSztBQUNoQnNILG1CQUFldEgsS0FBSztBQUdwQixRQUFJK0YsU0FBUyxXQUFXO0FBQ3ZCRCw0QkFBc0I5RixLQUFLO0lBQzVCO0VBQ0QsQ0FBQztBQUdEMkcsc0JBQW9CO0FBR3BCLE1BQUksQ0FBQyxDQUFDLGVBQWUsU0FBUyxFQUFFckYsU0FBU3lFLElBQUksR0FBRztBQUMvQyxTQUFLVSxrQkFBa0I7RUFDeEI7QUFDRCxHQUFHOyIsCiAgIm5hbWVzIjogWyJpbXBvcnRfZXh0X2dhZGdldDIiLCAiX190b0VTTSIsICJyZXF1aXJlIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgImdldEkxOG5NZXNzYWdlcyIsICJ3Z1VMUyIsICJ3aW5kb3ciLCAiTm90ZSIsICJsb2NhbGl6ZSIsICJlbiIsICJOb1Blcm1FcnJvcjAiLCAiTm9QZXJtRXJyb3IxIiwgIk5vUGVybUVycm9yMiIsICJOb1Blcm1FcnJvcjMiLCAiTm9QZXJtRXJyb3I0IiwgImkxOG5NZXNzYWdlcyIsICJnZXRNZXNzYWdlIiwgImtleSIsICJpbXBvcnRfZXh0X2dhZGdldDMiLCAid2dBY3Rpb24iLCAid2dDYW5vbmljYWxTcGVjaWFsUGFnZU5hbWUiLCAid2dOYW1lc3BhY2VOdW1iZXIiLCAid2dQYWdlTmFtZSIsICJ3Z1NjcmlwdCIsICJ3Z1VzZXJOYW1lIiwgIm13IiwgImNvbmZpZyIsICJnZXQiLCAibG9hZFdpdGhVUkwiLCAiX3JlZiIsICJfYXN5bmNUb0dlbmVyYXRvciIsICJVUkxfV0lUSF9DU1MiLCAidXRpbCIsICJnZXRQYXJhbVZhbHVlIiwgIlVSTF9XSVRIX0pTIiwgIlVSTF9XSVRIX01PRFVMRSIsICJ0ZXN0IiwgImxvYWRlciIsICJsb2FkIiwgImdldFVybCIsICJhY3Rpb24iLCAiY3R5cGUiLCAibWF4YWdlIiwgInNtYXhhZ2UiLCAicmVxdWlyZTIiLCAidXNpbmciLCAibW9kdWxlcyIsICJ1bmlxdWVBcnJheSIsICJzcGxpdCIsICJVUkxfVVNFIiwgIndnVXNlck5hbWVFeGNhcGVkIiwgImVzY2FwZVJlZ0V4cCIsICJSRUdFWF9GSUxFIiwgIlJlZ0V4cCIsICJjb25jYXQiLCAiUkVHRVhfRVhUIiwgInBhdGgiLCAidXNlRmlsZXMiLCAiX2l0ZXJhdG9yMiIsICJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsICJfc3RlcDIiLCAicyIsICJuIiwgImRvbmUiLCAiX1JFR0VYX0ZJTEUkZXhlYyIsICJ1c2VGaWxlIiwgInZhbHVlIiwgIm5hbWUiLCAidG9TdHJpbmciLCAidHJpbSIsICJ3aGF0IiwgImV4ZWMiLCAiZW5jb2RlVVJJQ29tcG9uZW50IiwgImVyciIsICJlIiwgImYiLCAiYXBwbHkiLCAiYXJndW1lbnRzIiwgImhpZ2hMaWdodFJldiIsICIkYm9keSIsICJVUkxfSElHSExJR0hUIiwgIlVSTF9ISUxJR0hUIiwgImhpZ2hsaWdodCIsICJfaXRlcmF0b3IzIiwgIl9zdGVwMyIsICJ2ZXJzaW9uIiwgImZpbmQiLCAicGFyZW50IiwgImFkZENsYXNzIiwgImFkZFRhcmdldEJsYW5rIiwgImZpbHRlciIsICJfaW5kZXgiLCAiZWxlbWVudCIsICJsaW5rSHJlZiIsICIkIiwgImF0dHIiLCAiaHJlZlNwbGl0IiwgImxlbmd0aCIsICJsb2NhdGlvbiIsICJob3N0IiwgImhyZWYiLCAiaW5jbHVkZXMiLCAicHJvdG9jb2wiLCAiaG9zdG5hbWUiLCAidGFyZ2V0IiwgInJlbCIsICJyZW1vdmVUaXRsZUZyb21QZXJtYWxpbmsiLCAiXyRwZXJtYUxpbmtGaXJzdENoaWxkIiwgIiRwZXJtYUxpbmsiLCAiJHBlcm1hTGlua0ZpcnN0Q2hpbGQiLCAicmVwbGFjZSIsICJvcGVuU2VhcmNoSW5OZXdUYWIiLCAiam9pbiIsICJvbiIsICJldmVudCIsICJjdHJsS2V5IiwgIm1ldGFLZXkiLCAidGl0bGVDbGVhblVwIiwgIlVSTF9ESUZGIiwgImZ1bGxQYWdlTmFtZSIsICJUaXRsZSIsICJnZXRQcmVmaXhlZFRleHQiLCAiJGZpcnN0SGVhZGluZyIsICJkb2N1bWVudFRpdGxlIiwgImRvY3VtZW50IiwgInRpdGxlIiwgInBhZ2VUaXRsZSIsICJ0ZXh0IiwgInJlcGxhY2VUaXRsZSIsICJ1bmloYW5Qb3B1cCIsICJfcmVmMiIsICJfaXRlcmF0b3I0IiwgIl9zdGVwNCIsICIkZWxlbWVudCIsICJwb3B1cCIsICJPTyIsICJ1aSIsICJQb3B1cFdpZGdldCIsICIkY29udGVudCIsICJkZWZhdWx0IiwgImNyZWF0ZUVsZW1lbnQiLCAibGFiZWwiLCAiYW5jaG9yIiwgImhlYWQiLCAicGFkZGVkIiwgImFwcGVuZCIsICJ0b2dnbGUiLCAiX3giLCAiZml4TG9jYXRpb25IYXNoIiwgImhhc2giLCAiaGlkZU5ld1VzZXJzTG9nIiwgIiRuZXdVc2Vyc0xvZyIsICJwcm9wIiwgImNoZWNrZWQiLCAiZGlzYWJsZWQiLCAidG9nZ2xlTGluayIsICJfJHRvZ2dsZXIkcGFyZW50JCIsICIkdG9nZ2xlciIsICJzdHlsZSIsICJjb2xvciIsICJjc3MiLCAiaW1wb3J0X2V4dF9nYWRnZXQ0IiwgImdldENvbnRlbnQiLCAicmVmZXJlbmNlIiwgIl9yZWZlcmVuY2UkZ2V0QXR0cmlidSIsICJnZXRBdHRyaWJ1dGUiLCAidGV4dENvbnRlbnQiLCAib25DcmVhdGVDYWxsYmFjayIsICJpbnN0YW5jZSIsICJzZXRBdHRyaWJ1dGUiLCAicmVtb3ZlQXR0cmlidXRlIiwgIm9uU2hvd0NhbGxiYWNrIiwgInNldENvbnRlbnQiLCAidGlwcHlGb3JDaXRpemVuSGVhZGVyIiwgInNraW4iLCAiX2l0ZXJhdG9yNSIsICJfc3RlcDUiLCAidGlwcHkiLCAiYXJyb3ciLCAiY29udGVudCIsICJwbGFjZW1lbnQiLCAib25DcmVhdGUiLCAib25IaWRkZW4iLCAib25TaG93IiwgInRpcHB5Rm9yRXh0ZW5zaW9uIiwgIl9yZWYzIiwgImRlcHJlY2F0ZWRGdW5jdGlvbnMiLCAibG9nIiwgImRlcHJlY2F0ZSIsICJhZGRTY3JpcHRUYWciLCAiYWRkTGlua1RhZyIsICJ3aWtpVXJsZW5jb2RlIiwgInJlYWR5IiwgImdldFNjcmlwdCIsICJ0aGVuIiwgInVybCIsICJpbXBvcnRfZXh0X2dhZGdldDUiLCAicmVzaXplSlF1ZXJ5VUkiLCAid2luZG93V2lkdGgiLCAid2lkdGgiLCAiJGpxdWVyeVVJRGlhbG9nIiwgInNpdGVDb21tb24iLCAiY29uZmlnS2V5IiwgInNldCIsICJnZXRCb2R5Il0KfQo=

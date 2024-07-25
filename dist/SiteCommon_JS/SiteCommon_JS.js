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
(function siteCommon() {
  const configKey = "gadget-SiteCommon_JS__Initialized";
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
    tippyForCitizenHeader($body);
  });
  deprecatedFunctions();
  void tippyForExtension();
})();

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1NpdGVDb21tb25fSlMvbW9kdWxlcy9jb3JlLnRzeCIsICJzcmMvU2l0ZUNvbW1vbl9KUy9tb2R1bGVzL2kxOG4udHMiLCAic3JjL1NpdGVDb21tb25fSlMvbW9kdWxlcy90aXBweS50cyIsICJzcmMvU2l0ZUNvbW1vbl9KUy9tb2R1bGVzL2RlcHJlY2F0ZWRGdW5jdGlvbnMudHMiLCAic3JjL1NpdGVDb21tb25fSlMvU2l0ZUNvbW1vbl9KUy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IFJlYWN0IGZyb20gJ2V4dC5nYWRnZXQuUmVhY3QnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL2kxOG4nO1xuaW1wb3J0IHt1bmlxdWVBcnJheX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxuY29uc3Qge3dnQWN0aW9uLCB3Z0Nhbm9uaWNhbFNwZWNpYWxQYWdlTmFtZSwgd2dOYW1lc3BhY2VOdW1iZXIsIHdnUGFnZU5hbWUsIHdnU2NyaXB0LCB3Z1VzZXJOYW1lfSA9IG13LmNvbmZpZy5nZXQoKTtcblxuY29uc3QgbG9hZFdpdGhVUkwgPSBhc3luYyAoKTogUHJvbWlzZTx2b2lkPiA9PiB7XG5cdGNvbnN0IFVSTF9XSVRIX0NTUzogc3RyaW5nIHwgbnVsbCA9IG13LnV0aWwuZ2V0UGFyYW1WYWx1ZSgnd2l0aENTUycpO1xuXHRjb25zdCBVUkxfV0lUSF9KUzogc3RyaW5nIHwgbnVsbCA9IG13LnV0aWwuZ2V0UGFyYW1WYWx1ZSgnd2l0aEpTJyk7XG5cdGNvbnN0IFVSTF9XSVRIX01PRFVMRTogc3RyaW5nIHwgbnVsbCA9IG13LnV0aWwuZ2V0UGFyYW1WYWx1ZSgnd2l0aE1vZHVsZScpO1xuXHQvKipcblx0ICogJndpdGhDU1M9IGFuZCAmd2l0aEpTPSBVUkwgcGFyYW1ldGVyc1xuXHQgKiBBbGxvdyB0byB0cnkgY3VzdG9tIHNjcmlwdHMgZnJvbSBNZWRpYVdpa2kgc3BhY2Vcblx0ICogd2l0aG91dCBlZGl0aW5nIHBlcnNvbmFsIC5jc3Mgb3IgLmpzIGZpbGVzXG5cdCAqL1xuXHRpZiAoVVJMX1dJVEhfQ1NTIHx8IFVSTF9XSVRIX0pTIHx8IFVSTF9XSVRIX01PRFVMRSkge1xuXHRcdGlmIChVUkxfV0lUSF9DU1MgJiYgL15NZWRpYVdpa2k6W14jJSY8PT5dKlxcLmNzcyQvLnRlc3QoVVJMX1dJVEhfQ1NTKSkge1xuXHRcdFx0bXcubG9hZGVyLmxvYWQoXG5cdFx0XHRcdG13LnV0aWwuZ2V0VXJsKFVSTF9XSVRIX0NTUywge1xuXHRcdFx0XHRcdGFjdGlvbjogJ3JhdycsXG5cdFx0XHRcdFx0Y3R5cGU6ICd0ZXh0L2NzcycsXG5cdFx0XHRcdFx0bWF4YWdlOiAnMzYwMCcsXG5cdFx0XHRcdFx0c21heGFnZTogJzM2MDAnLFxuXHRcdFx0XHR9KSxcblx0XHRcdFx0J3RleHQvY3NzJ1xuXHRcdFx0KTtcblx0XHR9XG5cdFx0aWYgKFVSTF9XSVRIX0pTIHx8IFVSTF9XSVRIX01PRFVMRSkge1xuXHRcdFx0Ly8gQHRzLWV4cGVjdC1lcnJvciBUUzYxMzNcblx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcblx0XHRcdGNvbnN0IHJlcXVpcmUgPSBhd2FpdCBtdy5sb2FkZXIudXNpbmcoJ2V4dC5nYWRnZXQuU2l0ZUNvbW1vbl9KUycpO1xuXG5cdFx0XHRpZiAoVVJMX1dJVEhfSlMgJiYgL15NZWRpYVdpa2k6W14jJSY8PT5dKlxcLmpzJC8udGVzdChVUkxfV0lUSF9KUykpIHtcblx0XHRcdFx0bXcubG9hZGVyLmxvYWQoXG5cdFx0XHRcdFx0bXcudXRpbC5nZXRVcmwoVVJMX1dJVEhfSlMsIHtcblx0XHRcdFx0XHRcdGFjdGlvbjogJ3JhdycsXG5cdFx0XHRcdFx0XHRjdHlwZTogJ3RleHQvamF2YXNjcmlwdCcsXG5cdFx0XHRcdFx0XHRtYXhhZ2U6ICczNjAwJyxcblx0XHRcdFx0XHRcdHNtYXhhZ2U6ICczNjAwJyxcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoVVJMX1dJVEhfTU9EVUxFICYmIC9eKGV4dFxcLigoPyEoZXh0XFwufFssfF0pKS4pKlssfF0/KSskLy50ZXN0KFVSTF9XSVRIX01PRFVMRSkpIHtcblx0XHRcdFx0Y29uc3QgbW9kdWxlcyA9IHVuaXF1ZUFycmF5KFVSTF9XSVRIX01PRFVMRS5zcGxpdCgvWyx8XS8pKTtcblx0XHRcdFx0bXcubG9hZGVyLmxvYWQobW9kdWxlcyk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdC8qKlxuXHQgKiBMb2FkIENTUyBhbmQgSlMgZmlsZXMgdGVtcG9yYXJpbHkgdGhyb3VnaCBVUkwuXG5cdCAqICZ1c2U9RmlsZTEuY3NzfEZpbGUyLmNzc3xGaWxlMy5qc1xuXHQgKi9cblx0Y29uc3QgVVJMX1VTRTogc3RyaW5nIHwgbnVsbCA9IG13LnV0aWwuZ2V0UGFyYW1WYWx1ZSgndXNlJyk7XG5cdGlmIChVUkxfVVNFKSB7XG5cdFx0Y29uc3Qgd2dVc2VyTmFtZUV4Y2FwZWQ6IHN0cmluZyA9IG13LnV0aWwuZXNjYXBlUmVnRXhwKHdnVXNlck5hbWUgPz8gJycpO1xuXHRcdGNvbnN0IFJFR0VYX0ZJTEU6IFJlZ0V4cCA9IG5ldyBSZWdFeHAoXG5cdFx0XHRgXig/Ok1lZGlhV2lraToke3dnVXNlck5hbWVFeGNhcGVkID8gYHxVc2VyOiR7d2dVc2VyTmFtZUV4Y2FwZWR9L2AgOiAnJ30pW14mPD49JSNdKlxcXFwuKGpzfGNzcykkYFxuXHRcdCk7XG5cdFx0Y29uc3QgUkVHRVhfRVhUOiBSZWdFeHAgPSAvXmV4dFxcLlteLF0rJC87XG5cdFx0Y29uc3QgcGF0aDogc3RyaW5nID0gd2dTY3JpcHQ7XG5cdFx0Y29uc3QgdXNlRmlsZXMgPSBVUkxfVVNFLnNwbGl0KC9bLHxdLyk7XG5cdFx0Zm9yIChjb25zdCB1c2VGaWxlIG9mIHVzZUZpbGVzKSB7XG5cdFx0XHRjb25zdCBuYW1lOiBzdHJpbmcgPSB1c2VGaWxlLnRvU3RyaW5nKCkudHJpbSgpO1xuXHRcdFx0Y29uc3Qgd2hhdDogc3RyaW5nW10gPSBSRUdFWF9GSUxFLmV4ZWMobmFtZSkgPz8gWycnLCAnJ107XG5cdFx0XHRzd2l0Y2ggKHdoYXRbMV0pIHtcblx0XHRcdFx0Y2FzZSAnY3NzJzpcblx0XHRcdFx0XHRtdy5sb2FkZXIubG9hZChgJHtwYXRofT9hY3Rpb249cmF3JmN0eXBlPXRleHQvY3NzJnRpdGxlPSR7ZW5jb2RlVVJJQ29tcG9uZW50KG5hbWUpfWApO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICdqcyc6IHtcblx0XHRcdFx0XHQvLyBAdHMtZXhwZWN0LWVycm9yIFRTNjEzM1xuXHRcdFx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcblx0XHRcdFx0XHRjb25zdCByZXF1aXJlID0gYXdhaXQgbXcubG9hZGVyLnVzaW5nKCdleHQuZ2FkZ2V0LlNpdGVDb21tb25fSlMnKTtcblx0XHRcdFx0XHRtdy5sb2FkZXIubG9hZChgJHtwYXRofT9hY3Rpb249cmF3JmN0eXBlPXRleHQvamF2YXNjcmlwdCZ0aXRsZT0ke2VuY29kZVVSSUNvbXBvbmVudChuYW1lKX1gKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdGlmIChSRUdFWF9FWFQudGVzdChuYW1lKSkge1xuXHRcdFx0XHRcdFx0Ly8gQHRzLWV4cGVjdC1lcnJvciBUUzYxMzNcblx0XHRcdFx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcblx0XHRcdFx0XHRcdGNvbnN0IHJlcXVpcmUgPSBhd2FpdCBtdy5sb2FkZXIudXNpbmcoJ2V4dC5nYWRnZXQuU2l0ZUNvbW1vbl9KUycpO1xuXHRcdFx0XHRcdFx0bXcubG9hZGVyLmxvYWQobmFtZSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxufTtcblxuY29uc3QgaGlnaExpZ2h0UmV2ID0gKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQgPT4ge1xuXHQvKipcblx0ICogQWRkIGhpZ2hsaWdodCB0byByZXZpc2lvbnMgd2hlbiB1c2luZyBgJmhpbGlnaHQ9cmV2aWRgIG9yIGAmaGlnaGxpZ2h0PXJldmlkYFxuXHQgKi9cblx0Y29uc3QgVVJMX0hJR0hMSUdIVDogc3RyaW5nIHwgbnVsbCA9IG13LnV0aWwuZ2V0UGFyYW1WYWx1ZSgnaGlnaGxpZ2h0Jyk7XG5cdGNvbnN0IFVSTF9ISUxJR0hUOiBzdHJpbmcgfCBudWxsID0gbXcudXRpbC5nZXRQYXJhbVZhbHVlKCdoaWxpZ2h0Jyk7XG5cdGNvbnN0IGhpZ2hsaWdodDogc3RyaW5nIHwgbnVsbCA9IFVSTF9ISUdITElHSFQgPz8gVVJMX0hJTElHSFQ7XG5cblx0aWYgKCFoaWdobGlnaHQgfHwgd2dBY3Rpb24gIT09ICdoaXN0b3J5Jykge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGZvciAoY29uc3QgdmVyc2lvbiBvZiBoaWdobGlnaHQuc3BsaXQoJywnKSkge1xuXHRcdCRib2R5LmZpbmQoYGlucHV0W25hbWU9b2xkaWRdW3ZhbHVlPSR7dmVyc2lvbn1dYCkucGFyZW50KCkuYWRkQ2xhc3MoJ25vdC1wYXRyb2xsZWQnKTtcblx0fVxufTtcblxuY29uc3QgYWRkVGFyZ2V0QmxhbmsgPSAoJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KTogdm9pZCA9PiB7XG5cdC8qKlxuXHQgKiBBZGQgdGFyZ2V0PVwiYmxhbmtcIiB0byBleHRlcm5hbCBsaW5rc1xuXHQgKi9cblx0JGJvZHkuZmluZDxIVE1MQW5jaG9yRWxlbWVudD4oJ2EuZXh0ZXJuYWwsIGFbcmVsPVwibXc6RXh0TGlua1wiXScpLmZpbHRlcigoX2luZGV4LCBlbGVtZW50KTogYm9vbGVhbiA9PiB7XG5cdFx0Y29uc3QgbGlua0hyZWY6IHN0cmluZyB8IHVuZGVmaW5lZCA9ICQoZWxlbWVudCkuYXR0cignaHJlZicpO1xuXHRcdGlmIChsaW5rSHJlZikge1xuXHRcdFx0Y29uc3QgaHJlZlNwbGl0OiBzdHJpbmdbXSA9IGxpbmtIcmVmLnNwbGl0KCcvJyk7XG5cdFx0XHRpZiAoaHJlZlNwbGl0Lmxlbmd0aCA8IDMgfHwgaHJlZlNwbGl0WzJdID09PSBsb2NhdGlvbi5ob3N0KSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoZWxlbWVudC5ocmVmLmluY2x1ZGVzKGAke2xvY2F0aW9uLnByb3RvY29sfS8vJHtsb2NhdGlvbi5ob3N0bmFtZX1gKSkge1xuXHRcdFx0ZWxlbWVudC50YXJnZXQgPSAnX2JsYW5rJztcblx0XHRcdGlmICghZWxlbWVudC5yZWwuaW5jbHVkZXMoJ25vb3BlbmVyJykpIHtcblx0XHRcdFx0ZWxlbWVudC5yZWwgKz0gJyBub29wZW5lcic7XG5cdFx0XHR9XG5cdFx0XHRpZiAoIWVsZW1lbnQucmVsLmluY2x1ZGVzKCdub3JlZmVycmVyJykpIHtcblx0XHRcdFx0ZWxlbWVudC5yZWwgKz0gJyBub3JlZmVycmVyJztcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fSk7XG59O1xuXG5jb25zdCByZW1vdmVUaXRsZUZyb21QZXJtYWxpbmsgPSAoJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KTogdm9pZCA9PiB7XG5cdC8qKlxuXHQgKiBSZW1vdmUgdGl0bGU9KiBmcm9tIHBlcm1hbGlua1xuXHQgKi9cblx0Y29uc3QgJHBlcm1hTGluazogSlF1ZXJ5ID0gJGJvZHkuZmluZCgnI3QtcGVybWFsaW5rJyk7XG5cdGlmICghJHBlcm1hTGluay5sZW5ndGgpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCAkcGVybWFMaW5rRmlyc3RDaGlsZDogSlF1ZXJ5PEhUTUxBbmNob3JFbGVtZW50PiA9ICRwZXJtYUxpbmsuZmluZDxIVE1MQW5jaG9yRWxlbWVudD4oJzpmaXJzdC1jaGlsZCcpO1xuXG5cdGNvbnN0IGhyZWY6IHN0cmluZyB8IHVuZGVmaW5lZCA9ICRwZXJtYUxpbmtGaXJzdENoaWxkLmF0dHIoJ2hyZWYnKT8ucmVwbGFjZSgvdGl0bGU9W14mXSomLywgJycpO1xuXHRpZiAoIWhyZWYpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHQkcGVybWFMaW5rRmlyc3RDaGlsZC5hdHRyKCdocmVmJywgaHJlZik7XG59O1xuXG5jb25zdCBvcGVuU2VhcmNoSW5OZXdUYWIgPSAoJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KTogdm9pZCA9PiB7XG5cdC8qKlxuXHQgKiBPcGVuIHNlYXJjaCByZXN1bHRzIGluIGEgbmV3IHRhYiBvciB3aW5kb3dcblx0ICogd2hlbiBob2xkaW5nIGRvd24gdGhlIEN0cmwga2V5IChieSBUaW1lc2hpZnRlcilcblx0ICovXG5cdCRib2R5XG5cdFx0LmZpbmQoWycjc2VhcmNoJywgJyNzZWFyY2hib3gnLCAnI3NlYXJjaGZvcm0nLCAnLnNlYXJjaC10eXBlcycsICcjc2VhcmNoLXR5cGVzJ10uam9pbignLCcpKVxuXHRcdC5vbigna2V5ZG93biBrZXl1cCBtb3VzZWRvd24nLCAoZXZlbnQ6IEpRdWVyeS5UcmlnZ2VyZWRFdmVudDxIVE1MRWxlbWVudD4pOiB2b2lkID0+IHtcblx0XHRcdGNvbnN0IHtjdHJsS2V5LCBtZXRhS2V5LCB0YXJnZXR9ID0gZXZlbnQ7XG5cdFx0XHQkKHRhcmdldCkuYXR0cigndGFyZ2V0JywgKGN0cmxLZXkgPz8gbWV0YUtleSkgPyAnX2JsYW5rJyA6ICcnKTtcblx0XHR9KTtcbn07XG5cbmNvbnN0IHRpdGxlQ2xlYW5VcCA9ICgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkID0+IHtcblx0LyoqXG5cdCAqIENsZWFudXAgdGl0bGUgZm9yIGFsbCBwYWdlc1xuXHQgKi9cblx0Y29uc3QgVVJMX0RJRkY6IHN0cmluZyB8IG51bGwgPSBtdy51dGlsLmdldFBhcmFtVmFsdWUoJ2RpZmYnKTtcblx0aWYgKFVSTF9ESUZGIHx8IHdnQWN0aW9uICE9PSAndmlldycgfHwgIVs2LCAxMThdLmluY2x1ZGVzKHdnTmFtZXNwYWNlTnVtYmVyKSkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IGZ1bGxQYWdlTmFtZTogc3RyaW5nID0gbmV3IG13LlRpdGxlKHdnUGFnZU5hbWUpLmdldFByZWZpeGVkVGV4dCgpO1xuXHRjb25zdCAkZmlyc3RIZWFkaW5nOiBKUXVlcnkgPSAkYm9keS5maW5kKCcuZmlyc3RIZWFkaW5nJyk7XG5cdGNvbnN0IGRvY3VtZW50VGl0bGU6IHN0cmluZyA9IGRvY3VtZW50LnRpdGxlO1xuXHRjb25zdCBwYWdlVGl0bGU6IHN0cmluZyA9ICRmaXJzdEhlYWRpbmcudGV4dCgpO1xuXG5cdGNvbnN0IHJlcGxhY2VUaXRsZSA9ICh0aXRsZTogc3RyaW5nKTogc3RyaW5nID0+IHRpdGxlLnJlcGxhY2UocGFnZVRpdGxlLCBmdWxsUGFnZU5hbWUpO1xuXG5cdGRvY3VtZW50LnRpdGxlID0gcmVwbGFjZVRpdGxlKGRvY3VtZW50VGl0bGUpO1xuXHQkZmlyc3RIZWFkaW5nLnRleHQocmVwbGFjZVRpdGxlKHBhZ2VUaXRsZSkpO1xufTtcblxuY29uc3QgdW5paGFuUG9wdXAgPSBhc3luYyAoJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KTogUHJvbWlzZTx2b2lkPiA9PiB7XG5cdC8qKlxuXHQgKiBEaXNwbGF5IHRpdGxlPSguKikgb2YgPHNwYW4gY2xhc3M9XCJpbmxpbmUtdW5paGFuXCI+IGFmdGVyIHRoZW0uXG5cdCAqIChiZXRhIHRlc3QpXG5cdCAqL1xuXHQvLyBEbyBub3QgZGlzcGxheSBvbiBTcGVjaWFsIFBhZ2VzXG5cdGlmICh3Z05hbWVzcGFjZU51bWJlciA8IDApIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRhd2FpdCBtdy5sb2FkZXIudXNpbmcoJ29vanMtdWktY29yZScpO1xuXG5cdGZvciAoY29uc3QgZWxlbWVudCBvZiAkYm9keS5maW5kKCdhdHRyLCAuaW5saW5lLXVuaWhhbicpKSB7XG5cdFx0Y29uc3QgJGVsZW1lbnQ6IEpRdWVyeSA9ICQoZWxlbWVudCk7XG5cblx0XHRjb25zdCB0aXRsZTogc3RyaW5nIHwgdW5kZWZpbmVkID0gJGVsZW1lbnQuYXR0cigndGl0bGUnKTtcblx0XHRpZiAoIXRpdGxlKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRjb25zdCBwb3B1cDogT08udWkuUG9wdXBXaWRnZXQgPSBuZXcgT08udWkuUG9wdXBXaWRnZXQoe1xuXHRcdFx0JGNvbnRlbnQ6ICQoPHA+e3RpdGxlfTwvcD4pIGFzIEpRdWVyeSxcblx0XHRcdGxhYmVsOiBnZXRNZXNzYWdlKCdOb3RlJyksXG5cdFx0XHRhbmNob3I6IHRydWUsXG5cdFx0XHRoZWFkOiB0cnVlLFxuXHRcdFx0cGFkZGVkOiB0cnVlLFxuXHRcdH0pO1xuXG5cdFx0JGJvZHkuYXBwZW5kKHBvcHVwLiRlbGVtZW50KTtcblxuXHRcdCRlbGVtZW50Lm9uKCdjbGljaycsICgpOiB2b2lkID0+IHtcblx0XHRcdHBvcHVwLnRvZ2dsZSgpO1xuXHRcdH0pO1xuXHR9XG59O1xuXG5jb25zdCBmaXhMb2NhdGlvbkhhc2ggPSAoKTogdm9pZCA9PiB7XG5cdC8qIOS/ruato+aKmOWPoOWQjuWumuS9jeWPmOWMliAqL1xuXHRpZiAobG9jYXRpb24uaGFzaCkge1xuXHRcdGxvY2F0aW9uLmhyZWYgPSBsb2NhdGlvbi5oYXNoO1xuXHR9XG59O1xuXG5jb25zdCBoaWRlTmV3VXNlcnNMb2cgPSAoJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KTogdm9pZCA9PiB7XG5cdC8qIOS4tOaXtu+8muemgeatoueUqOaIt+afpeeci+eUqOaIt+WIm+W7uuaXpeW/lyAqL1xuXHRpZiAod2dDYW5vbmljYWxTcGVjaWFsUGFnZU5hbWUgIT09ICdMb2cnKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgJG5ld1VzZXJzTG9nOiBKUXVlcnkgPSAkYm9keS5maW5kKCdpbnB1dFtuYW1lPVwid3BmaWx0ZXJzW11cIl1bdmFsdWU9bmV3dXNlcnNdJyk7XG5cdCRuZXdVc2Vyc0xvZy5wcm9wKHtcblx0XHRjaGVja2VkOiBmYWxzZSxcblx0XHRkaXNhYmxlZDogdHJ1ZSxcblx0fSk7XG59O1xuXG5jb25zdCB0b2dnbGVMaW5rID0gKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQgPT4ge1xuXHQvKiDosIPmlbTmipjlj6DmjInpkq7nmoTpopzoibIgKi9cblx0Y29uc3QgJHRvZ2dsZXI6IEpRdWVyeSA9ICRib2R5LmZpbmQoJy5tdy1jb2xsYXBzaWJsZS10b2dnbGUsIC5nYWRnZXQtY29sbGFwc2libGUtdG9nZ2xlcicpO1xuXHRpZiAoISR0b2dnbGVyLmxlbmd0aCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGlmICgkdG9nZ2xlci5wYXJlbnQoKVswXT8uc3R5bGUuY29sb3IpIHtcblx0XHQkdG9nZ2xlci5maW5kKCdhJykuY3NzKCdjb2xvcicsICdpbmhlcml0Jyk7XG5cdH1cbn07XG5cbmV4cG9ydCB7XG5cdGxvYWRXaXRoVVJMLFxuXHRoaWdoTGlnaHRSZXYsXG5cdGFkZFRhcmdldEJsYW5rLFxuXHRyZW1vdmVUaXRsZUZyb21QZXJtYWxpbmssXG5cdG9wZW5TZWFyY2hJbk5ld1RhYixcblx0dGl0bGVDbGVhblVwLFxuXHR1bmloYW5Qb3B1cCxcblx0Zml4TG9jYXRpb25IYXNoLFxuXHRoaWRlTmV3VXNlcnNMb2csXG5cdHRvZ2dsZUxpbmssXG59O1xuIiwgImltcG9ydCB7bG9jYWxpemV9IGZyb20gJ2V4dC5nYWRnZXQuaTE4bic7XG5cbmNvbnN0IGdldEkxOG5NZXNzYWdlcyA9ICgpID0+IHtcblx0Y29uc3Qge3dnVUxTfSA9IHdpbmRvdztcblx0cmV0dXJuIHtcblx0XHROb3RlOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ05vdGU6ICcsXG5cdFx0XHQnemgtaGFucyc6ICfms6jph4rvvJonLFxuXHRcdFx0J3poLWhhbnQnOiAn5rOo6YeL77yaJyxcblx0XHR9KSxcblx0XHROb1Blcm1FcnJvcjA6IHdnVUxTKFxuXHRcdFx0J+WboOaKgOacr+WOn+WboO+8jOaCqOayoeacieadg+mZkOiuv+mXruebuOWFs+mhtemdouOAguiLpeacieeWkemXru+8jOivt+S4juaxgumXu+eZvuenkei/kOiQpeiAheiBlOezu+OAgicsXG5cdFx0XHQn5Zug5oqA6KGT5Y6f5Zug77yM5oKo5rKS5pyJ5qyK6ZmQ6Kiq5ZWP55u46Zec6aCB6Z2i44CC6Iul5pyJ55aR5ZWP77yM6KuL6IiH5rGC6IGe55m+56eR6YGL54ef6ICF6IGv57O744CCJ1xuXHRcdCksXG5cdFx0Tm9QZXJtRXJyb3IxOiB3Z1VMUyhcblx0XHRcdCfmgqjmsqHmnInmnYPpmZDorr/pl67nm7jlhbPpobXpnaLjgILoi6XmgqjmmK/otYTmt7HnvJbogIXvvIzor7fkuI7msYLpl7vnmb7np5HmioDmnK/lm6LpmJ/ogZTns7vvvIzku6Xojrflj5bmnYPpmZDjgIInLFxuXHRcdFx0J+aCqOaykuacieasiumZkOioquWVj+ebuOmXnOmggemdouOAguiLpeaCqOaYr+izh+a3see3qOiAhe+8jOiri+iIh+axguiBnueZvuenkeaKgOihk+WcmOmaiuiBr+ezu++8jOS7peeNsuWPluasiumZkOOAgidcblx0XHQpLFxuXHRcdE5vUGVybUVycm9yMjogd2dVTFMoXG5cdFx0XHQn5oKo55qE572R57uc546v5aKD5a2Y5Zyo6aOO6Zmp77yM6K+355m75b2V5ZCO57un57ut5L2/55So44CC6Iul5oKo5rKh5pyJ5rGC6Ze755m+56eR6LSm5Y+377yM6K+35rOo5YaM5ZCO55m75b2V44CCJyxcblx0XHRcdCfmgqjnmoTntrLot6/nkrDlooPlrZjlnKjpoqjpmqrvvIzoq4vnmbvlhaXlvoznubznuozkvb/nlKjjgILoi6XmgqjmspLmnInmsYLogZ7nmb7np5Hos6zomZ/vvIzoq4vms6jlhorlvoznmbvpjITjgIInXG5cdFx0KSxcblx0XHROb1Blcm1FcnJvcjM6IHdnVUxTKFxuXHRcdFx0J+ebuOWFs+WKn+iDveS7heWQkeazqOWGjOeUqOaIt+W8gOaUvu+8jOivt+eZu+W9leWQjue7p+e7reS9v+eUqOOAguiLpeaCqOayoeacieaxgumXu+eZvuenkei0puWPt++8jOivt+azqOWGjOWQjueZu+W9leOAgicsXG5cdFx0XHQn55u46Zec5Yqf6IO95YOF5ZCR5rOo5YaK55So5oi26ZaL5pS+77yM6KuL55m75YWl5b6M57m857qM5L2/55So44CC6Iul5oKo5rKS5pyJ5rGC6IGe55m+56eR6LOs6Jmf77yM6KuL5rOo5YaK5b6M55m76YyE44CCJ1xuXHRcdCksXG5cdFx0Tm9QZXJtRXJyb3I0OiB3Z1VMUyhcblx0XHRcdCfmgqjmsqHmnInmnYPpmZDorr/pl67nm7jlhbPpobXpnaLjgILoi6XmnInnlpHpl67vvIzor7fkuI7msYLpl7vnmb7np5Hov5DokKXogIXogZTns7vjgIInLFxuXHRcdFx0J+aCqOaykuacieasiumZkOioquWVj+ebuOmXnOmggemdouOAguiLpeacieeWkeWVj++8jOiri+iIh+axguiBnueZvuenkemBi+eHn+iAheiBr+ezu+OAgidcblx0XHQpLFxuXHR9O1xufTtcblxuY29uc3QgaTE4bk1lc3NhZ2VzID0gZ2V0STE4bk1lc3NhZ2VzKCk7XG5cbmNvbnN0IGdldE1lc3NhZ2U6IEdldE1lc3NhZ2VzPHR5cGVvZiBpMThuTWVzc2FnZXM+ID0gKGtleSkgPT4ge1xuXHRyZXR1cm4gaTE4bk1lc3NhZ2VzW2tleV0gfHwga2V5O1xufTtcblxuZXhwb3J0IHtnZXRNZXNzYWdlfTtcbiIsICJpbXBvcnQge3RpcHB5fSBmcm9tICdleHQuZ2FkZ2V0LlRpcHB5JztcblxuY29uc3Qge3NraW59ID0gbXcuY29uZmlnLmdldCgpO1xuXG5jb25zdCBnZXRDb250ZW50ID0gKHJlZmVyZW5jZTogRWxlbWVudCk6IHN0cmluZyA9PiB7XG5cdGNvbnN0IGxhYmVsOiBzdHJpbmcgfCBudWxsID0gcmVmZXJlbmNlLmdldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpO1xuXHRjb25zdCB0aXRsZTogc3RyaW5nIHwgbnVsbCA9IHJlZmVyZW5jZS5nZXRBdHRyaWJ1dGUoJ2FsdCcpID8/IHJlZmVyZW5jZS5nZXRBdHRyaWJ1dGUoJ3RpdGxlJyk7XG5cblx0cmV0dXJuIChsYWJlbCA9PT0gdGl0bGUgPyBsYWJlbCA6IHRpdGxlIHx8IGxhYmVsKSB8fCAocmVmZXJlbmNlLnRleHRDb250ZW50IGFzIHN0cmluZyk7XG59O1xuXG5jb25zdCBvbkNyZWF0ZUNhbGxiYWNrID0gKGluc3RhbmNlOiBSZXR1cm5UeXBlPHR5cGVvZiB0aXBweT5bMF0pOiB2b2lkID0+IHtcblx0Y29uc3Qge3JlZmVyZW5jZX0gPSBpbnN0YW5jZTtcblx0cmVmZXJlbmNlLnNldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcsIGdldENvbnRlbnQocmVmZXJlbmNlKSk7XG5cdHJlZmVyZW5jZS5yZW1vdmVBdHRyaWJ1dGUoJ3RpdGxlJyk7XG59O1xuXG5jb25zdCBvblNob3dDYWxsYmFjayA9IChpbnN0YW5jZTogUmV0dXJuVHlwZTx0eXBlb2YgdGlwcHk+WzBdKTogdm9pZCA9PiB7XG5cdG9uQ3JlYXRlQ2FsbGJhY2soaW5zdGFuY2UpO1xuXHRpbnN0YW5jZS5zZXRDb250ZW50KGdldENvbnRlbnQoaW5zdGFuY2UucmVmZXJlbmNlKSk7XG59O1xuXG5jb25zdCB0aXBweUZvckNpdGl6ZW5IZWFkZXIgPSAoJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KTogdm9pZCA9PiB7XG5cdGlmIChza2luICE9PSAnY2l0aXplbicpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRmb3IgKGNvbnN0IGVsZW1lbnQgb2YgJGJvZHkuZmluZChcblx0XHRbXG5cdFx0XHQnLmNpdGl6ZW4taGVhZGVyIGxhYmVsW3RpdGxlXScsXG5cdFx0XHQnLmNpdGl6ZW4taGVhZGVyIC5tdy1lY2hvLW5vdGlmaWNhdGlvbnMtYmFkZ2UnLFxuXHRcdFx0Jy5jaXRpemVuLWhlYWRlcl9fbG9nbyBhJyxcblx0XHRcdCcucGFnZS1hY3Rpb25zPm5hdj51bD5saSBhJyxcblx0XHRcdCcucGFnZS1hY3Rpb25zX19idXR0b24nLFxuXHRcdF0uam9pbignLCcpXG5cdCkpIHtcblx0XHRjb25zdCAkZWxlbWVudDogSlF1ZXJ5ID0gJChlbGVtZW50KTtcblx0XHRsZXQgdGl0bGU6IHN0cmluZyB8IHVuZGVmaW5lZCA9ICRlbGVtZW50LmF0dHIoJ3RpdGxlJyk7XG5cdFx0aWYgKCF0aXRsZSkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0dGl0bGUgPSB0aXRsZS5yZXBsYWNlKC9cXHMqP1xcWy4rP10kLywgJycpO1xuXG5cdFx0JGVsZW1lbnQuYXR0cih7XG5cdFx0XHQnYXJpYS1sYWJlbCc6IHRpdGxlLFxuXHRcdFx0dGl0bGU6ICcnLFxuXHRcdH0pO1xuXHRcdHRpcHB5KCRlbGVtZW50LmdldCgwKSBhcyBIVE1MRWxlbWVudCwge1xuXHRcdFx0YXJyb3c6IHRydWUsXG5cdFx0XHRjb250ZW50OiB0aXRsZSxcblx0XHRcdHBsYWNlbWVudDogJ2JvdHRvbScsXG5cdFx0XHRvbkNyZWF0ZTogb25DcmVhdGVDYWxsYmFjayxcblx0XHRcdG9uSGlkZGVuOiBvbkNyZWF0ZUNhbGxiYWNrLFxuXHRcdFx0b25TaG93OiBvblNob3dDYWxsYmFjayxcblx0XHR9KTtcblx0fVxufTtcblxuY29uc3QgdGlwcHlGb3JFeHRlbnNpb24gPSBhc3luYyAoKTogUHJvbWlzZTx2b2lkPiA9PiB7XG5cdGF3YWl0IG13LmxvYWRlci51c2luZygnZXh0LkNvbGxhcHNpYmxlU2lkZWJhci5qcycpO1xuXHR0aXBweSgnI3NpZGViYXJCdXR0b24nLCB7XG5cdFx0YXJyb3c6IHRydWUsXG5cdFx0Y29udGVudDogZ2V0Q29udGVudCxcblx0XHRwbGFjZW1lbnQ6ICdsZWZ0Jyxcblx0XHRvbkNyZWF0ZTogb25DcmVhdGVDYWxsYmFjayxcblx0XHRvbkhpZGRlbjogb25DcmVhdGVDYWxsYmFjayxcblx0XHRvblNob3c6IG9uU2hvd0NhbGxiYWNrLFxuXHR9KTtcblxuXHRpZiAoc2tpbiA9PT0gJ3ZlY3RvcicpIHtcblx0XHRhd2FpdCBtdy5sb2FkZXIudXNpbmcoJ2V4dC5Db2xsYXBzaWJsZVNpZGViYXIudmVjdG9yJyk7XG5cdFx0dGlwcHkoJyNzaWRlYmFyQ29sbGFwc2UnLCB7XG5cdFx0XHRhcnJvdzogdHJ1ZSxcblx0XHRcdGNvbnRlbnQ6IGdldENvbnRlbnQsXG5cdFx0XHRwbGFjZW1lbnQ6ICdyaWdodCcsXG5cdFx0XHRvbkNyZWF0ZTogb25DcmVhdGVDYWxsYmFjayxcblx0XHRcdG9uSGlkZGVuOiBvbkNyZWF0ZUNhbGxiYWNrLFxuXHRcdFx0b25TaG93OiBvblNob3dDYWxsYmFjayxcblx0XHR9KTtcblx0fVxuXG5cdGF3YWl0IG13LmxvYWRlci51c2luZygnZXh0LkRhcmtNb2RlJyk7XG5cdHRpcHB5KCcjZGFya21vZGUtYnV0dG9uJywge1xuXHRcdGFycm93OiB0cnVlLFxuXHRcdGNvbnRlbnQ6IGdldENvbnRlbnQsXG5cdFx0cGxhY2VtZW50OiAnbGVmdCcsXG5cdFx0b25DcmVhdGU6IG9uQ3JlYXRlQ2FsbGJhY2ssXG5cdFx0b25IaWRkZW46IG9uQ3JlYXRlQ2FsbGJhY2ssXG5cdFx0b25TaG93OiBvblNob3dDYWxsYmFjayxcblx0fSk7XG59O1xuXG5leHBvcnQge3RpcHB5Rm9yQ2l0aXplbkhlYWRlciwgdGlwcHlGb3JFeHRlbnNpb259O1xuIiwgImNvbnN0IGRlcHJlY2F0ZWRGdW5jdGlvbnMgPSAoKTogdm9pZCA9PiB7XG5cdC8qIVxuXHQgKiBtYWludGVuYW5jZTogU29tZSB1c2VyIHNjcmlwdHMgbWF5IGJlIHVzaW5nIHRoZSBmb2xsb3dpbmcgZGVwcmVjYXRlZCBmdW5jdGlvbnMuXG5cdCAqIFRoZXNlIGZ1bmN0aW9ucyBhcmUgbm8gbG9uZ2VyIHN1cHBvcnRlZCBhbmQgc2hvdWxkIGJlIHVwZGF0ZWQuXG5cdCAqL1xuXHRtdy5sb2cuZGVwcmVjYXRlKFxuXHRcdHdpbmRvdyxcblx0XHQnaW1wb3J0U2NyaXB0Jyxcblx0XHQodGl0bGU6IHN0cmluZyk6IEhUTUxTY3JpcHRFbGVtZW50ID0+IHtcblx0XHRcdHJldHVybiBtdy5sb2FkZXIuYWRkU2NyaXB0VGFnKFxuXHRcdFx0XHRtdy51dGlsLmdldFVybCh0aXRsZSwge1xuXHRcdFx0XHRcdGFjdGlvbjogJ3JhdycsXG5cdFx0XHRcdFx0Y3R5cGU6ICd0ZXh0L2phdmFzY3JpcHQnLFxuXHRcdFx0XHRcdG1heGFnZTogJzM2MDAnLFxuXHRcdFx0XHRcdHNtYXhhZ2U6ICczNjAwJyxcblx0XHRcdFx0fSlcblx0XHRcdCk7XG5cdFx0fSxcblx0XHQnVXNlIG13LmxvYWRlci5hZGRTY3JpcHRUYWcoKSBpbnN0ZWFkJ1xuXHQpO1xuXG5cdG13LmxvZy5kZXByZWNhdGUoXG5cdFx0d2luZG93LFxuXHRcdCdpbXBvcnRTdHlsZXNoZWV0Jyxcblx0XHQodGl0bGU6IHN0cmluZyk6IEhUTUxMaW5rRWxlbWVudCA9PiB7XG5cdFx0XHRyZXR1cm4gbXcubG9hZGVyLmFkZExpbmtUYWcoXG5cdFx0XHRcdG13LnV0aWwuZ2V0VXJsKHRpdGxlLCB7XG5cdFx0XHRcdFx0YWN0aW9uOiAncmF3Jyxcblx0XHRcdFx0XHRjdHlwZTogJ3RleHQvY3NzJyxcblx0XHRcdFx0XHRtYXhhZ2U6ICczNjAwJyxcblx0XHRcdFx0XHRzbWF4YWdlOiAnMzYwMCcsXG5cdFx0XHRcdH0pLFxuXHRcdFx0XHQndGV4dC9jc3MnXG5cdFx0XHQpO1xuXHRcdH0sXG5cdFx0J1VzZSBtdy5sb2FkZXIuYWRkTGlua1RhZygpIGluc3RlYWQnXG5cdCk7XG5cblx0bXcubG9nLmRlcHJlY2F0ZShcblx0XHR3aW5kb3csXG5cdFx0J2ltcG9ydFNjcmlwdFVSSScsXG5cdFx0KG1vZHVsZXM6IHN0cmluZyk6IEhUTUxTY3JpcHRFbGVtZW50ID0+IHtcblx0XHRcdHJldHVybiBtdy5sb2FkZXIuYWRkU2NyaXB0VGFnKG13LnV0aWwud2lraVVybGVuY29kZShtb2R1bGVzKSk7XG5cdFx0fSxcblx0XHQnVXNlIG13LmxvYWRlci5hZGRTY3JpcHRUYWcoKSBvciBtdy5sb2FkZXIuZ2V0U2NyaXB0KCkgaW5zdGVhZCdcblx0KTtcblxuXHRtdy5sb2cuZGVwcmVjYXRlKFxuXHRcdHdpbmRvdyxcblx0XHQnaW1wb3J0U3R5bGVzaGVldFVSSScsXG5cdFx0KG1vZHVsZXM6IHN0cmluZyk6IEhUTUxMaW5rRWxlbWVudCA9PiB7XG5cdFx0XHRyZXR1cm4gbXcubG9hZGVyLmFkZExpbmtUYWcobXcudXRpbC53aWtpVXJsZW5jb2RlKG1vZHVsZXMpLCAndGV4dC9jc3MnKTtcblx0XHR9LFxuXHRcdCdVc2UgbXcubG9hZGVyLmFkZExpbmtUYWcoKSBpbnN0ZWFkJ1xuXHQpO1xuXG5cdG13LmxvZy5kZXByZWNhdGUoXG5cdFx0d2luZG93LFxuXHRcdC8vIEB0cy1leHBlY3QtZXJyb3IgVFMyMzQ1XG5cdFx0J2ltcG9ydFNjcmlwdENhbGxiYWNrJyxcblx0XHQodGl0bGU6IHN0cmluZywgcmVhZHk6IG5ldmVyKTogdm9pZCA9PiB7XG5cdFx0XHR2b2lkIG13LmxvYWRlclxuXHRcdFx0XHQuZ2V0U2NyaXB0KFxuXHRcdFx0XHRcdG13LnV0aWwuZ2V0VXJsKHRpdGxlLCB7XG5cdFx0XHRcdFx0XHRhY3Rpb246ICdyYXcnLFxuXHRcdFx0XHRcdFx0Y3R5cGU6ICd0ZXh0L2phdmFzY3JpcHQnLFxuXHRcdFx0XHRcdFx0bWF4YWdlOiAnMzYwMCcsXG5cdFx0XHRcdFx0XHRzbWF4YWdlOiAnMzYwMCcsXG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0KVxuXHRcdFx0XHQudGhlbihyZWFkeSk7XG5cdFx0fSxcblx0XHQnVXNlIG13LmxvYWRlci5nZXRTY3JpcHQoKSBpbnN0ZWFkJ1xuXHQpO1xuXG5cdG13LmxvZy5kZXByZWNhdGUoXG5cdFx0d2luZG93LFxuXHRcdC8vIEB0cy1leHBlY3QtZXJyb3IgVFMyMzQ1XG5cdFx0J2ltcG9ydFNjcmlwdFVSSUNhbGxiYWNrJyxcblx0XHQodXJsOiBzdHJpbmcsIHJlYWR5OiBuZXZlcik6IHZvaWQgPT4ge1xuXHRcdFx0dm9pZCBtdy5sb2FkZXIuZ2V0U2NyaXB0KHVybCkudGhlbihyZWFkeSk7XG5cdFx0fSxcblx0XHQnVXNlIG13LmxvYWRlci5nZXRTY3JpcHQoKSBpbnN0ZWFkJ1xuXHQpO1xuXHQvKipcblx0ICogbWFpbnRlbmFuY2U6IFNvbWUgdXNlciBzY3JpcHRzIG1heSBiZSB1c2luZyB0aGUgZm9sbG93aW5nIGRlcHJlY2F0ZWQgZnVuY3Rpb25zLlxuXHQgKiBUaGVzZSBmdW5jdGlvbnMgYXJlIGtlcHQgZm9yIGNvbXBhYmlsaXR5LlxuXHQgKi9cblx0Ly8gbXcubG9nLmRlcHJlY2F0ZSh3aW5kb3csICdKU0NvbmZpZycsIHt9LCAnVXNlIHt9IGluc3RlYWQnKTtcblx0LyoqXG5cdCAqIHdnVSpTIGZ1bmN0aW9ucyBoYXZlIGJlZW4gc3BsaXQgdG8gYSBzZXBlcmF0ZSBnYWRnZXQgKGV4dC5nYWRnZXQuaTE4bikuXG5cdCAqL1xufTtcblxuZXhwb3J0IHtkZXByZWNhdGVkRnVuY3Rpb25zfTtcbiIsICJpbXBvcnQge1xuXHRhZGRUYXJnZXRCbGFuayxcblx0Zml4TG9jYXRpb25IYXNoLFxuXHRoaWRlTmV3VXNlcnNMb2csXG5cdGhpZ2hMaWdodFJldixcblx0bG9hZFdpdGhVUkwsXG5cdG9wZW5TZWFyY2hJbk5ld1RhYixcblx0cmVtb3ZlVGl0bGVGcm9tUGVybWFsaW5rLFxuXHR0aXRsZUNsZWFuVXAsXG5cdHRvZ2dsZUxpbmssXG5cdHVuaWhhblBvcHVwLFxufSBmcm9tICcuL21vZHVsZXMvY29yZSc7XG5pbXBvcnQge3RpcHB5Rm9yQ2l0aXplbkhlYWRlciwgdGlwcHlGb3JFeHRlbnNpb259IGZyb20gJy4vbW9kdWxlcy90aXBweSc7XG5pbXBvcnQge2RlcHJlY2F0ZWRGdW5jdGlvbnN9IGZyb20gJy4vbW9kdWxlcy9kZXByZWNhdGVkRnVuY3Rpb25zJztcbmltcG9ydCB7Z2V0Qm9keX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxuKGZ1bmN0aW9uIHNpdGVDb21tb24oKTogdm9pZCB7XG5cdGNvbnN0IGNvbmZpZ0tleTogc3RyaW5nID0gJ2dhZGdldC1TaXRlQ29tbW9uX0pTX19Jbml0aWFsaXplZCc7XG5cblx0Ly8gR3VhcmQgYWdhaW5zdCBkb3VibGUgaW5jbHVzaW9uc1xuXHRpZiAobXcuY29uZmlnLmdldChjb25maWdLZXkpKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdC8vIFNldCBndWFyZFxuXHRtdy5jb25maWcuc2V0KGNvbmZpZ0tleSwgdHJ1ZSk7XG5cblx0Ly8gQ29yZSBtb2R1bGVzXG5cdHZvaWQgbG9hZFdpdGhVUkwoKTtcblx0Zml4TG9jYXRpb25IYXNoKCk7XG5cblx0dm9pZCBnZXRCb2R5KCkudGhlbigoJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KTogdm9pZCA9PiB7XG5cdFx0Ly8gQ29yZSBtb2R1bGVzIChuZWVkICQucmVhZHkpXG5cdFx0aGlnaExpZ2h0UmV2KCRib2R5KTtcblx0XHRhZGRUYXJnZXRCbGFuaygkYm9keSk7XG5cdFx0cmVtb3ZlVGl0bGVGcm9tUGVybWFsaW5rKCRib2R5KTtcblx0XHRvcGVuU2VhcmNoSW5OZXdUYWIoJGJvZHkpO1xuXHRcdHRpdGxlQ2xlYW5VcCgkYm9keSk7XG5cdFx0dm9pZCB1bmloYW5Qb3B1cCgkYm9keSk7XG5cdFx0aGlkZU5ld1VzZXJzTG9nKCRib2R5KTtcblx0XHR0b2dnbGVMaW5rKCRib2R5KTtcblxuXHRcdC8vIFRpcHB5LXJlbGF0ZWQgY29kZXMgKG5lZWQgJC5yZWFkeSlcblx0XHR0aXBweUZvckNpdGl6ZW5IZWFkZXIoJGJvZHkpO1xuXHR9KTtcblxuXHQvLyBEZXByZWNhdGVkIGZ1bmN0aW9uc1xuXHRkZXByZWNhdGVkRnVuY3Rpb25zKCk7XG5cblx0Ly8gVGlwcHktcmVsYXRlZCBjb2Rlc1xuXHR2b2lkIHRpcHB5Rm9yRXh0ZW5zaW9uKCk7XG59KSgpO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxxQkFBa0JDLFFBQUFDLFFBQUEsa0JBQUEs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dEMsS0FBSztBQUNsQixTQUFLa0QsWUFBWWxELEtBQUs7QUFDdEJ1RSxvQkFBZ0J2RSxLQUFLO0FBQ3JCNEUsZUFBVzVFLEtBQUs7QUFHaEIrRiwwQkFBc0IvRixLQUFLO0VBQzVCLENBQUM7QUFHRDJHLHNCQUFvQjtBQUdwQixPQUFLRixrQkFBa0I7QUFDeEIsR0FBRzsiLAogICJuYW1lcyI6IFsiaW1wb3J0X2V4dF9nYWRnZXQyIiwgIl9fdG9FU00iLCAicmVxdWlyZSIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJnZXRJMThuTWVzc2FnZXMiLCAid2dVTFMiLCAid2luZG93IiwgIk5vdGUiLCAibG9jYWxpemUiLCAiZW4iLCAiTm9QZXJtRXJyb3IwIiwgIk5vUGVybUVycm9yMSIsICJOb1Blcm1FcnJvcjIiLCAiTm9QZXJtRXJyb3IzIiwgIk5vUGVybUVycm9yNCIsICJpMThuTWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAiaW1wb3J0X2V4dF9nYWRnZXQzIiwgIndnQWN0aW9uIiwgIndnQ2Fub25pY2FsU3BlY2lhbFBhZ2VOYW1lIiwgIndnTmFtZXNwYWNlTnVtYmVyIiwgIndnUGFnZU5hbWUiLCAid2dTY3JpcHQiLCAid2dVc2VyTmFtZSIsICJtdyIsICJjb25maWciLCAiZ2V0IiwgImxvYWRXaXRoVVJMIiwgIl9yZWYiLCAiX2FzeW5jVG9HZW5lcmF0b3IiLCAiVVJMX1dJVEhfQ1NTIiwgInV0aWwiLCAiZ2V0UGFyYW1WYWx1ZSIsICJVUkxfV0lUSF9KUyIsICJVUkxfV0lUSF9NT0RVTEUiLCAidGVzdCIsICJsb2FkZXIiLCAibG9hZCIsICJnZXRVcmwiLCAiYWN0aW9uIiwgImN0eXBlIiwgIm1heGFnZSIsICJzbWF4YWdlIiwgInJlcXVpcmUyIiwgInVzaW5nIiwgIm1vZHVsZXMiLCAidW5pcXVlQXJyYXkiLCAic3BsaXQiLCAiVVJMX1VTRSIsICJ3Z1VzZXJOYW1lRXhjYXBlZCIsICJlc2NhcGVSZWdFeHAiLCAiUkVHRVhfRklMRSIsICJSZWdFeHAiLCAiY29uY2F0IiwgIlJFR0VYX0VYVCIsICJwYXRoIiwgInVzZUZpbGVzIiwgIl9pdGVyYXRvcjIiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAiX3N0ZXAyIiwgInMiLCAibiIsICJkb25lIiwgIl9SRUdFWF9GSUxFJGV4ZWMiLCAidXNlRmlsZSIsICJ2YWx1ZSIsICJuYW1lIiwgInRvU3RyaW5nIiwgInRyaW0iLCAid2hhdCIsICJleGVjIiwgImVuY29kZVVSSUNvbXBvbmVudCIsICJlcnIiLCAiZSIsICJmIiwgImFwcGx5IiwgImFyZ3VtZW50cyIsICJoaWdoTGlnaHRSZXYiLCAiJGJvZHkiLCAiVVJMX0hJR0hMSUdIVCIsICJVUkxfSElMSUdIVCIsICJoaWdobGlnaHQiLCAiX2l0ZXJhdG9yMyIsICJfc3RlcDMiLCAidmVyc2lvbiIsICJmaW5kIiwgInBhcmVudCIsICJhZGRDbGFzcyIsICJhZGRUYXJnZXRCbGFuayIsICJmaWx0ZXIiLCAiX2luZGV4IiwgImVsZW1lbnQiLCAibGlua0hyZWYiLCAiJCIsICJhdHRyIiwgImhyZWZTcGxpdCIsICJsZW5ndGgiLCAibG9jYXRpb24iLCAiaG9zdCIsICJocmVmIiwgImluY2x1ZGVzIiwgInByb3RvY29sIiwgImhvc3RuYW1lIiwgInRhcmdldCIsICJyZWwiLCAicmVtb3ZlVGl0bGVGcm9tUGVybWFsaW5rIiwgIl8kcGVybWFMaW5rRmlyc3RDaGlsZCIsICIkcGVybWFMaW5rIiwgIiRwZXJtYUxpbmtGaXJzdENoaWxkIiwgInJlcGxhY2UiLCAib3BlblNlYXJjaEluTmV3VGFiIiwgImpvaW4iLCAib24iLCAiZXZlbnQiLCAiY3RybEtleSIsICJtZXRhS2V5IiwgInRpdGxlQ2xlYW5VcCIsICJVUkxfRElGRiIsICJmdWxsUGFnZU5hbWUiLCAiVGl0bGUiLCAiZ2V0UHJlZml4ZWRUZXh0IiwgIiRmaXJzdEhlYWRpbmciLCAiZG9jdW1lbnRUaXRsZSIsICJkb2N1bWVudCIsICJ0aXRsZSIsICJwYWdlVGl0bGUiLCAidGV4dCIsICJyZXBsYWNlVGl0bGUiLCAidW5paGFuUG9wdXAiLCAiX3JlZjIiLCAiX2l0ZXJhdG9yNCIsICJfc3RlcDQiLCAiJGVsZW1lbnQiLCAicG9wdXAiLCAiT08iLCAidWkiLCAiUG9wdXBXaWRnZXQiLCAiJGNvbnRlbnQiLCAiZGVmYXVsdCIsICJjcmVhdGVFbGVtZW50IiwgImxhYmVsIiwgImFuY2hvciIsICJoZWFkIiwgInBhZGRlZCIsICJhcHBlbmQiLCAidG9nZ2xlIiwgIl94IiwgImZpeExvY2F0aW9uSGFzaCIsICJoYXNoIiwgImhpZGVOZXdVc2Vyc0xvZyIsICIkbmV3VXNlcnNMb2ciLCAicHJvcCIsICJjaGVja2VkIiwgImRpc2FibGVkIiwgInRvZ2dsZUxpbmsiLCAiXyR0b2dnbGVyJHBhcmVudCQiLCAiJHRvZ2dsZXIiLCAic3R5bGUiLCAiY29sb3IiLCAiY3NzIiwgImltcG9ydF9leHRfZ2FkZ2V0NCIsICJza2luIiwgImdldENvbnRlbnQiLCAicmVmZXJlbmNlIiwgIl9yZWZlcmVuY2UkZ2V0QXR0cmlidSIsICJnZXRBdHRyaWJ1dGUiLCAidGV4dENvbnRlbnQiLCAib25DcmVhdGVDYWxsYmFjayIsICJpbnN0YW5jZSIsICJzZXRBdHRyaWJ1dGUiLCAicmVtb3ZlQXR0cmlidXRlIiwgIm9uU2hvd0NhbGxiYWNrIiwgInNldENvbnRlbnQiLCAidGlwcHlGb3JDaXRpemVuSGVhZGVyIiwgIl9pdGVyYXRvcjUiLCAiX3N0ZXA1IiwgInRpcHB5IiwgImFycm93IiwgImNvbnRlbnQiLCAicGxhY2VtZW50IiwgIm9uQ3JlYXRlIiwgIm9uSGlkZGVuIiwgIm9uU2hvdyIsICJ0aXBweUZvckV4dGVuc2lvbiIsICJfcmVmMyIsICJkZXByZWNhdGVkRnVuY3Rpb25zIiwgImxvZyIsICJkZXByZWNhdGUiLCAiYWRkU2NyaXB0VGFnIiwgImFkZExpbmtUYWciLCAid2lraVVybGVuY29kZSIsICJyZWFkeSIsICJnZXRTY3JpcHQiLCAidGhlbiIsICJ1cmwiLCAiaW1wb3J0X2V4dF9nYWRnZXQ1IiwgInNpdGVDb21tb24iLCAiY29uZmlnS2V5IiwgInNldCIsICJnZXRCb2R5Il0KfQo=

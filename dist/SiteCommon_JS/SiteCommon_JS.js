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
      void mw.notify(getMessage("NoPermError0"), {
        tag: "noPerm",
        type: "error"
      });
      break;
    case "1":
      void mw.notify(getMessage("NoPermError1"), {
        tag: "noPerm",
        type: "error"
      });
      break;
    case "2":
      void mw.notify(getMessage("NoPermError2"), {
        tag: "noPerm",
        type: "warn"
      });
      break;
    case "3":
      void mw.notify(getMessage("NoPermError3"), {
        tag: "noPerm",
        type: "warn"
      });
      break;
    default:
      void mw.notify(getMessage("NoPermError4"), {
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

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1NpdGVDb21tb25fSlMvbW9kdWxlcy9jb25zdGFudC50cyIsICJzcmMvU2l0ZUNvbW1vbl9KUy9tb2R1bGVzL2NvcmUudHN4IiwgInNyYy9TaXRlQ29tbW9uX0pTL21vZHVsZXMvaTE4bi50cyIsICJzcmMvU2l0ZUNvbW1vbl9KUy9tb2R1bGVzL3RpcHB5LnRzIiwgInNyYy9TaXRlQ29tbW9uX0pTL21vZHVsZXMvZGVwcmVjYXRlZEZ1bmN0aW9ucy50cyIsICJzcmMvU2l0ZUNvbW1vbl9KUy9TaXRlQ29tbW9uX0pTLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBVUkxfRElGRjogc3RyaW5nIHwgbnVsbCA9IG13LnV0aWwuZ2V0UGFyYW1WYWx1ZSgnZGlmZicpO1xuY29uc3QgVVJMX0hJR0hMSUdIVDogc3RyaW5nIHwgbnVsbCA9IG13LnV0aWwuZ2V0UGFyYW1WYWx1ZSgnaGlnaGxpZ2h0Jyk7XG5jb25zdCBVUkxfSElMSUdIVDogc3RyaW5nIHwgbnVsbCA9IG13LnV0aWwuZ2V0UGFyYW1WYWx1ZSgnaGlsaWdodCcpO1xuY29uc3QgVVJMX05PX1BFUk06IHN0cmluZyB8IG51bGwgPSBtdy51dGlsLmdldFBhcmFtVmFsdWUoJ25vcGVybScpO1xuY29uc3QgVVJMX1VTRTogc3RyaW5nIHwgbnVsbCA9IG13LnV0aWwuZ2V0UGFyYW1WYWx1ZSgndXNlJyk7XG5jb25zdCBVUkxfV0lUSF9DU1M6IHN0cmluZyB8IG51bGwgPSBtdy51dGlsLmdldFBhcmFtVmFsdWUoJ3dpdGhDU1MnKTtcbmNvbnN0IFVSTF9XSVRIX0pTOiBzdHJpbmcgfCBudWxsID0gbXcudXRpbC5nZXRQYXJhbVZhbHVlKCd3aXRoSlMnKTtcbmNvbnN0IFVSTF9XSVRIX01PRFVMRTogc3RyaW5nIHwgbnVsbCA9IG13LnV0aWwuZ2V0UGFyYW1WYWx1ZSgnd2l0aE1vZHVsZScpO1xuXG5jb25zdCBXR19BQ1RJT046IE1lZGlhV2lraUNvbmZpZ01hcFdnQWN0aW9uID0gbXcuY29uZmlnLmdldCgnd2dBY3Rpb24nKTtcbmNvbnN0IFdHX0NBTk9OSUNBTF9TUEVDSUFMX1BBR0VfTkFNRTogc3RyaW5nIHwgZmFsc2UgPSBtdy5jb25maWcuZ2V0KCd3Z0Nhbm9uaWNhbFNwZWNpYWxQYWdlTmFtZScpO1xuY29uc3QgV0dfTkFNRVNQQUNFX05VTUJFUjogbnVtYmVyID0gbXcuY29uZmlnLmdldCgnd2dOYW1lc3BhY2VOdW1iZXInKTtcbmNvbnN0IFdHX1BBR0VfTkFNRTogc3RyaW5nID0gbXcuY29uZmlnLmdldCgnd2dQYWdlTmFtZScpO1xuY29uc3QgV0dfU0NSSVBUOiBzdHJpbmcgPSBtdy5jb25maWcuZ2V0KCd3Z1NjcmlwdCcpO1xuY29uc3QgV0dfU0tJTjogc3RyaW5nID0gbXcuY29uZmlnLmdldCgnc2tpbicpO1xuY29uc3QgV0dfVVNFUl9OQU1FOiBzdHJpbmcgfCBudWxsID0gbXcuY29uZmlnLmdldCgnd2dVc2VyTmFtZScpO1xuXG5leHBvcnQge1xuXHRVUkxfRElGRixcblx0VVJMX0hJR0hMSUdIVCxcblx0VVJMX0hJTElHSFQsXG5cdFVSTF9OT19QRVJNLFxuXHRVUkxfVVNFLFxuXHRVUkxfV0lUSF9DU1MsXG5cdFVSTF9XSVRIX0pTLFxuXHRVUkxfV0lUSF9NT0RVTEUsXG5cdFdHX0FDVElPTixcblx0V0dfQ0FOT05JQ0FMX1NQRUNJQUxfUEFHRV9OQU1FLFxuXHRXR19OQU1FU1BBQ0VfTlVNQkVSLFxuXHRXR19QQUdFX05BTUUsXG5cdFdHX1NDUklQVCxcblx0V0dfU0tJTixcblx0V0dfVVNFUl9OQU1FLFxufTtcbiIsICJpbXBvcnQge1xuXHRVUkxfRElGRixcblx0VVJMX0hJR0hMSUdIVCxcblx0VVJMX0hJTElHSFQsXG5cdFVSTF9OT19QRVJNLFxuXHRVUkxfVVNFLFxuXHRVUkxfV0lUSF9DU1MsXG5cdFVSTF9XSVRIX0pTLFxuXHRVUkxfV0lUSF9NT0RVTEUsXG5cdFdHX0FDVElPTixcblx0V0dfQ0FOT05JQ0FMX1NQRUNJQUxfUEFHRV9OQU1FLFxuXHRXR19OQU1FU1BBQ0VfTlVNQkVSLFxuXHRXR19QQUdFX05BTUUsXG5cdFdHX1NDUklQVCxcblx0V0dfVVNFUl9OQU1FLFxufSBmcm9tICcuL2NvbnN0YW50JztcbmltcG9ydCBSZWFjdCBmcm9tICdleHQuZ2FkZ2V0LlJlYWN0JztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9pMThuJztcblxuY29uc3QgbG9hZFdpdGhVUkwgPSAoKTogdm9pZCA9PiB7XG5cdC8qKlxuXHQgKiAmd2l0aENTUz0gYW5kICZ3aXRoSlM9IFVSTCBwYXJhbWV0ZXJzXG5cdCAqIEFsbG93IHRvIHRyeSBjdXN0b20gc2NyaXB0cyBmcm9tIE1lZGlhV2lraSBzcGFjZVxuXHQgKiB3aXRob3V0IGVkaXRpbmcgcGVyc29uYWwgLmNzcyBvciAuanMgZmlsZXNcblx0ICovXG5cdGlmIChVUkxfV0lUSF9DU1MgfHwgVVJMX1dJVEhfSlMgfHwgVVJMX1dJVEhfTU9EVUxFKSB7XG5cdFx0aWYgKFVSTF9XSVRIX0NTUyAmJiAvXk1lZGlhV2lraTpbXiMlJjw9Pl0qXFwuY3NzJC8udGVzdChVUkxfV0lUSF9DU1MpKSB7XG5cdFx0XHRtdy5sb2FkZXIubG9hZChcblx0XHRcdFx0bXcudXRpbC5nZXRVcmwoVVJMX1dJVEhfQ1NTLCB7XG5cdFx0XHRcdFx0YWN0aW9uOiAncmF3Jyxcblx0XHRcdFx0XHRjdHlwZTogJ3RleHQvY3NzJyxcblx0XHRcdFx0XHRtYXhhZ2U6ICczNjAwJyxcblx0XHRcdFx0XHRzbWF4YWdlOiAnMzYwMCcsXG5cdFx0XHRcdH0pLFxuXHRcdFx0XHQndGV4dC9jc3MnXG5cdFx0XHQpO1xuXHRcdH1cblx0XHRpZiAoVVJMX1dJVEhfSlMgJiYgL15NZWRpYVdpa2k6W14jJSY8PT5dKlxcLmpzJC8udGVzdChVUkxfV0lUSF9KUykpIHtcblx0XHRcdC8vIEB0cy1leHBlY3QtZXJyb3IgVFM2MTMzXG5cdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG5cdFx0XHR2b2lkIG13LmxvYWRlci51c2luZygnJykudGhlbigocmVxdWlyZSk6IHZvaWQgPT4ge1xuXHRcdFx0XHRtdy5sb2FkZXIubG9hZChcblx0XHRcdFx0XHRtdy51dGlsLmdldFVybChVUkxfV0lUSF9KUywge1xuXHRcdFx0XHRcdFx0YWN0aW9uOiAncmF3Jyxcblx0XHRcdFx0XHRcdGN0eXBlOiAndGV4dC9qYXZhc2NyaXB0Jyxcblx0XHRcdFx0XHRcdG1heGFnZTogJzM2MDAnLFxuXHRcdFx0XHRcdFx0c21heGFnZTogJzM2MDAnLFxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdCk7XG5cdFx0XHR9KTtcblx0XHR9XG5cdFx0aWYgKFVSTF9XSVRIX01PRFVMRSAmJiAvXmV4dFxcLlteLHxdKyQvLnRlc3QoVVJMX1dJVEhfTU9EVUxFKSkge1xuXHRcdFx0Ly8gQHRzLWV4cGVjdC1lcnJvciBUUzYxMzNcblx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcblx0XHRcdHZvaWQgbXcubG9hZGVyLnVzaW5nKFVSTF9XSVRIX01PRFVMRSkudGhlbigocmVxdWlyZSk6IHZvaWQgPT4ge1xuXHRcdFx0XHRtdy5sb2FkZXIubG9hZChVUkxfV0lUSF9NT0RVTEUgYXMgc3RyaW5nKTtcblx0XHRcdH0pO1xuXHRcdH1cblx0fVxuXHQvKipcblx0ICogTG9hZCBDU1MgYW5kIEpTIGZpbGVzIHRlbXBvcmFyaWx5IHRocm91Z2ggVVJMLlxuXHQgKiAmdXNlPUZpbGUxLmNzc3xGaWxlMi5jc3N8RmlsZTMuanNcblx0ICovXG5cdGlmIChVUkxfVVNFKSB7XG5cdFx0Y29uc3Qgd2dVc2VyTmFtZTogc3RyaW5nID0gbXcudXRpbC5lc2NhcGVSZWdFeHAoV0dfVVNFUl9OQU1FID8/ICcnKTtcblx0XHRjb25zdCBSRUdFWF9GSUxFOiBSZWdFeHAgPSBuZXcgUmVnRXhwKFxuXHRcdFx0YF4oPzpNZWRpYVdpa2k6JHt3Z1VzZXJOYW1lID8gYHxVc2VyOiR7d2dVc2VyTmFtZX0vYCA6ICcnfSlbXiY8Pj0lI10qXFxcXC4oanN8Y3NzKSRgXG5cdFx0KTtcblx0XHRjb25zdCBSRUdFWF9FWFQ6IFJlZ0V4cCA9IC9eZXh0XFwuW14sXSskLztcblx0XHRjb25zdCBwYXRoOiBzdHJpbmcgPSBgJHtXR19TQ1JJUFR9P2FjdGlvbj1yYXcmY3R5cGU9dGV4dC9gO1xuXHRcdGZvciAoY29uc3QgdXNlRmlsZSBvZiBVUkxfVVNFLnNwbGl0KCd8JykpIHtcblx0XHRcdGNvbnN0IG5hbWU6IHN0cmluZyA9IHVzZUZpbGUudG9TdHJpbmcoKS50cmltKCk7XG5cdFx0XHRjb25zdCB3aGF0OiBzdHJpbmdbXSA9IFJFR0VYX0ZJTEUuZXhlYyhuYW1lKSA/PyBbJycsICcnXTtcblx0XHRcdHN3aXRjaCAod2hhdFsxXSkge1xuXHRcdFx0XHRjYXNlICdqcyc6XG5cdFx0XHRcdFx0Ly8gQHRzLWV4cGVjdC1lcnJvciBUUzYxMzNcblx0XHRcdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG5cdFx0XHRcdFx0dm9pZCBtdy5sb2FkZXIudXNpbmcoJycpLnRoZW4oKHJlcXVpcmUpOiB2b2lkID0+IHtcblx0XHRcdFx0XHRcdG13LmxvYWRlci5sb2FkKGAke3BhdGh9amF2YXNjcmlwdCZ0aXRsZT0ke2VuY29kZVVSSUNvbXBvbmVudChuYW1lKX1gKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAnY3NzJzpcblx0XHRcdFx0XHRtdy5sb2FkZXIubG9hZChgJHtwYXRofWNzcyZ0aXRsZT0ke2VuY29kZVVSSUNvbXBvbmVudChuYW1lKX1gKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRpZiAoUkVHRVhfRVhULnRlc3QobmFtZSkpIHtcblx0XHRcdFx0XHRcdC8vIEB0cy1leHBlY3QtZXJyb3IgVFM2MTMzXG5cdFx0XHRcdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG5cdFx0XHRcdFx0XHR2b2lkIG13LmxvYWRlci51c2luZyhuYW1lKS50aGVuKChyZXF1aXJlKTogdm9pZCA9PiB7XG5cdFx0XHRcdFx0XHRcdG13LmxvYWRlci5sb2FkKG5hbWUpO1xuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxufTtcblxuY29uc3Qgbm9QZXJtV2FybmluZyA9ICgpOiB2b2lkID0+IHtcblx0LyoqXG5cdCAqIExvYWQgd2FybmluZyhzKSB3aGVuIHVzZXIgaGFzIG5vIGFjY2VzcyB0byBwYWdlXG5cdCAqL1xuXHRpZiAoIVVSTF9OT19QRVJNKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdHN3aXRjaCAoVVJMX05PX1BFUk0pIHtcblx0XHRjYXNlICcwJzpcblx0XHRcdHZvaWQgbXcubm90aWZ5KGdldE1lc3NhZ2UoJ05vUGVybUVycm9yMCcpLCB7dGFnOiAnbm9QZXJtJywgdHlwZTogJ2Vycm9yJ30pO1xuXHRcdFx0YnJlYWs7XG5cdFx0Y2FzZSAnMSc6XG5cdFx0XHR2b2lkIG13Lm5vdGlmeShnZXRNZXNzYWdlKCdOb1Blcm1FcnJvcjEnKSwge3RhZzogJ25vUGVybScsIHR5cGU6ICdlcnJvcid9KTtcblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgJzInOlxuXHRcdFx0dm9pZCBtdy5ub3RpZnkoZ2V0TWVzc2FnZSgnTm9QZXJtRXJyb3IyJyksIHt0YWc6ICdub1Blcm0nLCB0eXBlOiAnd2Fybid9KTtcblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgJzMnOlxuXHRcdFx0dm9pZCBtdy5ub3RpZnkoZ2V0TWVzc2FnZSgnTm9QZXJtRXJyb3IzJyksIHt0YWc6ICdub1Blcm0nLCB0eXBlOiAnd2Fybid9KTtcblx0XHRcdGJyZWFrO1xuXHRcdGRlZmF1bHQ6XG5cdFx0XHR2b2lkIG13Lm5vdGlmeShnZXRNZXNzYWdlKCdOb1Blcm1FcnJvcjQnKSwge3RhZzogJ25vUGVybScsIHR5cGU6ICdlcnJvcid9KTtcblx0fVxuXHRjb25zdCBuZXdVcmw6IHN0cmluZyA9IGxvY2F0aW9uLmhyZWYucmVwbGFjZSgvWz8mXW5vcGVybT1bMC05XSsvLCAnJyk7XG5cdGhpc3RvcnkucHVzaFN0YXRlKHt9LCBkb2N1bWVudC50aXRsZSwgbmV3VXJsKTtcbn07XG5cbmNvbnN0IGhpZ2hMaWdodFJldiA9ICgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkID0+IHtcblx0LyoqXG5cdCAqIEFkZCBoaWdobGlnaHQgdG8gcmV2aXNpb25zIHdoZW4gdXNpbmcgYCZoaWxpZ2h0PXJldmlkYCBvciBgJmhpZ2hsaWdodD1yZXZpZGBcblx0ICovXG5cdGNvbnN0IGhpZ2hsaWdodDogc3RyaW5nIHwgbnVsbCA9IFVSTF9ISUdITElHSFQgPz8gVVJMX0hJTElHSFQ7XG5cdGlmICghaGlnaGxpZ2h0IHx8IFdHX0FDVElPTiAhPT0gJ2hpc3RvcnknKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdGZvciAoY29uc3QgdmVyc2lvbiBvZiBoaWdobGlnaHQuc3BsaXQoJywnKSkge1xuXHRcdCRib2R5LmZpbmQoYGlucHV0W25hbWU9b2xkaWRdW3ZhbHVlPSR7dmVyc2lvbn1dYCkucGFyZW50KCkuYWRkQ2xhc3MoJ25vdC1wYXRyb2xsZWQnKTtcblx0fVxufTtcblxuY29uc3QgYWRkVGFyZ2V0QmxhbmsgPSAoJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KTogdm9pZCA9PiB7XG5cdC8qKlxuXHQgKiBBZGQgdGFyZ2V0PVwiYmxhbmtcIiB0byBleHRlcm5hbCBsaW5rc1xuXHQgKi9cblx0JGJvZHkuZmluZDxIVE1MQW5jaG9yRWxlbWVudD4oJ2EuZXh0ZXJuYWwsIGFbcmVsPVwibXc6RXh0TGlua1wiXScpLmZpbHRlcigoX2luZGV4LCBlbGVtZW50KTogYm9vbGVhbiA9PiB7XG5cdFx0Y29uc3QgbGlua0hyZWY6IHN0cmluZyB8IHVuZGVmaW5lZCA9ICQoZWxlbWVudCkuYXR0cignaHJlZicpO1xuXHRcdGlmIChsaW5rSHJlZikge1xuXHRcdFx0Y29uc3QgaHJlZlNwbGl0OiBzdHJpbmdbXSA9IGxpbmtIcmVmLnNwbGl0KCcvJyk7XG5cdFx0XHRpZiAoaHJlZlNwbGl0Lmxlbmd0aCA8IDMgfHwgaHJlZlNwbGl0WzJdID09PSBsb2NhdGlvbi5ob3N0KSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYgKGVsZW1lbnQuaHJlZi5pbmNsdWRlcyhgJHtsb2NhdGlvbi5wcm90b2NvbH0vLyR7bG9jYXRpb24uaG9zdG5hbWV9YCkpIHtcblx0XHRcdGVsZW1lbnQudGFyZ2V0ID0gJ19ibGFuayc7XG5cdFx0XHRpZiAoIWVsZW1lbnQucmVsLmluY2x1ZGVzKCdub29wZW5lcicpKSB7XG5cdFx0XHRcdGVsZW1lbnQucmVsICs9ICcgbm9vcGVuZXInO1xuXHRcdFx0fVxuXHRcdFx0aWYgKCFlbGVtZW50LnJlbC5pbmNsdWRlcygnbm9yZWZlcnJlcicpKSB7XG5cdFx0XHRcdGVsZW1lbnQucmVsICs9ICcgbm9yZWZlcnJlcic7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiB0cnVlO1xuXHR9KTtcbn07XG5cbmNvbnN0IHJlbW92ZVRpdGxlRnJvbVBlcm1hbGluayA9ICgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkID0+IHtcblx0LyoqXG5cdCAqIFJlbW92ZSB0aXRsZT0qIGZyb20gcGVybWFsaW5rXG5cdCAqL1xuXHRjb25zdCAkcGVybWFMaW5rOiBKUXVlcnkgPSAkYm9keS5maW5kKCcjdC1wZXJtYWxpbmsnKTtcblx0aWYgKCRwZXJtYUxpbmsubGVuZ3RoKSB7XG5cdFx0Y29uc3QgJHBlcm1hTGlua0ZpcnN0Q2hpbGQ6IEpRdWVyeTxIVE1MQW5jaG9yRWxlbWVudD4gPSAkcGVybWFMaW5rLmZpbmQ8SFRNTEFuY2hvckVsZW1lbnQ+KCc6Zmlyc3QtY2hpbGQnKTtcblx0XHRjb25zdCBocmVmOiBzdHJpbmcgfCB1bmRlZmluZWQgPSAkcGVybWFMaW5rRmlyc3RDaGlsZC5hdHRyKCdocmVmJyk/LnJlcGxhY2UoL3RpdGxlPVteJl0qJi8sICcnKTtcblx0XHRpZiAoIWhyZWYpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0JHBlcm1hTGlua0ZpcnN0Q2hpbGQuYXR0cignaHJlZicsIGhyZWYpO1xuXHR9XG59O1xuXG5jb25zdCBvcGVuU2VhcmNoSW5OZXdUYWIgPSAoJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KTogdm9pZCA9PiB7XG5cdC8qKlxuXHQgKiBPcGVuIHNlYXJjaCByZXN1bHRzIGluIGEgbmV3IHRhYiBvciB3aW5kb3dcblx0ICogd2hlbiBob2xkaW5nIGRvd24gdGhlIEN0cmwga2V5IChieSBUaW1lc2hpZnRlcilcblx0ICovXG5cdCRib2R5XG5cdFx0LmZpbmQoJyNzZWFyY2gsI3NlYXJjaGJveCwjc2VhcmNoZm9ybSwuc2VhcmNoLXR5cGVzLCNzZWFyY2gtdHlwZXMnKVxuXHRcdC5vbigna2V5ZG93biBrZXl1cCBtb3VzZWRvd24nLCAoZXZlbnQ6IEpRdWVyeS5UcmlnZ2VyZWRFdmVudDxIVE1MRWxlbWVudD4pOiB2b2lkID0+IHtcblx0XHRcdGNvbnN0IHtjdHJsS2V5LCBtZXRhS2V5LCB0YXJnZXR9ID0gZXZlbnQ7XG5cdFx0XHQkKHRhcmdldCkuYXR0cigndGFyZ2V0JywgY3RybEtleSA/PyBtZXRhS2V5ID8gJ19ibGFuaycgOiAnJyk7XG5cdFx0fSk7XG59O1xuXG5jb25zdCB0aXRsZUNsZWFuVXAgPSAoJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KTogdm9pZCA9PiB7XG5cdC8qKlxuXHQgKiBDbGVhbnVwIHRpdGxlIGZvciBhbGwgcGFnZXNcblx0ICovXG5cdGlmIChVUkxfRElGRiB8fCBXR19BQ1RJT04gIT09ICd2aWV3JyB8fCAhWzYsIDExOF0uaW5jbHVkZXMoV0dfTkFNRVNQQUNFX05VTUJFUikpIHtcblx0XHRyZXR1cm47XG5cdH1cblx0Y29uc3QgZnVsbFBhZ2VOYW1lOiBzdHJpbmcgPSBuZXcgbXcuVGl0bGUoV0dfUEFHRV9OQU1FKS5nZXRQcmVmaXhlZFRleHQoKTtcblx0Y29uc3QgJGZpcnN0SGVhZGluZzogSlF1ZXJ5ID0gJGJvZHkuZmluZCgnLmZpcnN0SGVhZGluZycpO1xuXHRjb25zdCBkb2N1bWVudFRpdGxlOiBzdHJpbmcgPSBkb2N1bWVudC50aXRsZTtcblx0Y29uc3QgcGFnZVRpdGxlOiBzdHJpbmcgPSAkZmlyc3RIZWFkaW5nLnRleHQoKTtcblx0Y29uc3QgcmVwbGFjZVRpdGxlID0gKHRpdGxlOiBzdHJpbmcpOiBzdHJpbmcgPT4gdGl0bGUucmVwbGFjZShwYWdlVGl0bGUsIGZ1bGxQYWdlTmFtZSk7XG5cdGRvY3VtZW50LnRpdGxlID0gcmVwbGFjZVRpdGxlKGRvY3VtZW50VGl0bGUpO1xuXHQkZmlyc3RIZWFkaW5nLnRleHQocmVwbGFjZVRpdGxlKHBhZ2VUaXRsZSkpO1xufTtcblxuY29uc3QgdW5paGFuUG9wdXAgPSAoJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KTogdm9pZCA9PiB7XG5cdC8qKlxuXHQgKiBEaXNwbGF5IHRpdGxlPSguKikgb2YgPHNwYW4gY2xhc3M9XCJpbmxpbmUtdW5paGFuXCI+IGFmdGVyIHRoZW0uXG5cdCAqIChiZXRhIHRlc3QpXG5cdCAqL1xuXHQvLyBEbyBub3QgZGlzcGxheSBvbiBTcGVjaWFsIFBhZ2VzXG5cdGlmIChXR19OQU1FU1BBQ0VfTlVNQkVSIDwgMCkge1xuXHRcdHJldHVybjtcblx0fVxuXHQkYm9keS5maW5kKCdhdHRyLCAuaW5saW5lLXVuaWhhbicpLmVhY2goKF9pbmRleDogbnVtYmVyLCBlbGVtZW50OiBIVE1MRWxlbWVudCk6IHZvaWQgPT4ge1xuXHRcdGNvbnN0ICRlbGVtZW50OiBKUXVlcnkgPSAkKGVsZW1lbnQpO1xuXHRcdGNvbnN0IHRpdGxlOiBzdHJpbmcgfCB1bmRlZmluZWQgPSAkZWxlbWVudC5hdHRyKCd0aXRsZScpO1xuXHRcdGlmICghdGl0bGUpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0dm9pZCBtdy5sb2FkZXIudXNpbmcoJ29vanMtdWktY29yZScpLnRoZW4oKCk6IHZvaWQgPT4ge1xuXHRcdFx0Y29uc3QgcG9wdXA6IE9PLnVpLlBvcHVwV2lkZ2V0ID0gbmV3IE9PLnVpLlBvcHVwV2lkZ2V0KHtcblx0XHRcdFx0JGNvbnRlbnQ6ICQoPHA+e3RpdGxlfTwvcD4pIGFzIEpRdWVyeSxcblx0XHRcdFx0bGFiZWw6IGdldE1lc3NhZ2UoJ05vdGUnKSxcblx0XHRcdFx0YW5jaG9yOiB0cnVlLFxuXHRcdFx0XHRoZWFkOiB0cnVlLFxuXHRcdFx0XHRwYWRkZWQ6IHRydWUsXG5cdFx0XHR9KTtcblx0XHRcdCRlbGVtZW50LmFwcGVuZChwb3B1cC4kZWxlbWVudCkub24oJ2NsaWNrJywgKCk6IHZvaWQgPT4ge1xuXHRcdFx0XHRwb3B1cC50b2dnbGUoKTtcblx0XHRcdH0pO1xuXHRcdH0pO1xuXHR9KTtcbn07XG5cbmNvbnN0IGZpeExvY2F0aW9uSGFzaCA9ICgpOiB2b2lkID0+IHtcblx0Lyog5L+u5q2j5oqY5Y+g5ZCO5a6a5L2N5Y+Y5YyWICovXG5cdGlmIChsb2NhdGlvbi5oYXNoKSB7XG5cdFx0bG9jYXRpb24uaHJlZiA9IGxvY2F0aW9uLmhhc2g7XG5cdH1cbn07XG5cbmNvbnN0IGhpZGVOZXdVc2Vyc0xvZyA9ICgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkID0+IHtcblx0Lyog5Li05pe277ya56aB5q2i55So5oi35p+l55yL55So5oi35Yib5bu65pel5b+XICovXG5cdGlmIChXR19DQU5PTklDQUxfU1BFQ0lBTF9QQUdFX05BTUUgIT09ICdMb2cnKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdGNvbnN0ICRuZXdVc2Vyc0xvZzogSlF1ZXJ5ID0gJGJvZHkuZmluZCgnaW5wdXRbbmFtZT1cIndwZmlsdGVyc1tdXCJdW3ZhbHVlPW5ld3VzZXJzXScpO1xuXHQkbmV3VXNlcnNMb2cucHJvcCh7XG5cdFx0Y2hlY2tlZDogMCxcblx0XHRkaXNhYmxlZDogJ2Rpc2FibGVkJyxcblx0fSk7XG59O1xuXG5jb25zdCB0b2dnbGVMaW5rID0gKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQgPT4ge1xuXHQvKiDosIPmlbTmipjlj6DmjInpkq7nmoTpopzoibIgKi9cblx0Y29uc3QgJHRvZ2dsZXI6IEpRdWVyeSA9ICRib2R5LmZpbmQoJy5tdy1jb2xsYXBzaWJsZS10b2dnbGUsIC5nYWRnZXQtY29sbGFwc2libGUtdG9nZ2xlcicpO1xuXHRpZiAoJHRvZ2dsZXIubGVuZ3RoICYmICR0b2dnbGVyLnBhcmVudCgpWzBdPy5zdHlsZS5jb2xvcikge1xuXHRcdCR0b2dnbGVyLmZpbmQoJ2EnKS5jc3MoJ2NvbG9yJywgJ2luaGVyaXQnKTtcblx0fVxufTtcblxuZXhwb3J0IHtcblx0bG9hZFdpdGhVUkwsXG5cdG5vUGVybVdhcm5pbmcsXG5cdGhpZ2hMaWdodFJldixcblx0YWRkVGFyZ2V0QmxhbmssXG5cdHJlbW92ZVRpdGxlRnJvbVBlcm1hbGluayxcblx0b3BlblNlYXJjaEluTmV3VGFiLFxuXHR0aXRsZUNsZWFuVXAsXG5cdHVuaWhhblBvcHVwLFxuXHRmaXhMb2NhdGlvbkhhc2gsXG5cdGhpZGVOZXdVc2Vyc0xvZyxcblx0dG9nZ2xlTGluayxcbn07XG4iLCAiaW1wb3J0IHtsb2NhbGl6ZX0gZnJvbSAnZXh0LmdhZGdldC5pMThuJztcblxuY29uc3QgZ2V0STE4bk1lc3NhZ2VzID0gKCkgPT4ge1xuXHRjb25zdCB7d2dVTFN9ID0gd2luZG93O1xuXHRyZXR1cm4ge1xuXHRcdE5vdGU6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnTm90ZTogJyxcblx0XHRcdCd6aC1oYW5zJzogJ+azqOmHiu+8micsXG5cdFx0XHQnemgtaGFudCc6ICfms6jph4vvvJonLFxuXHRcdH0pLFxuXHRcdE5vUGVybUVycm9yMDogd2dVTFMoXG5cdFx0XHQn5Zug5oqA5pyv5Y6f5Zug77yM5oKo5rKh5pyJ5p2D6ZmQ6K6/6Zeu55u45YWz6aG16Z2i44CC6Iul5pyJ55aR6Zeu77yM6K+35LiO5rGC6Ze755m+56eR6L+Q6JCl6ICF6IGU57O744CCJyxcblx0XHRcdCflm6DmioDooZPljp/lm6DvvIzmgqjmspLmnInmrIrpmZDoqKrllY/nm7jpl5zpoIHpnaLjgILoi6XmnInnlpHllY/vvIzoq4voiIfmsYLogZ7nmb7np5HpgYvnh5/ogIXoga/ns7vjgIInXG5cdFx0KSxcblx0XHROb1Blcm1FcnJvcjE6IHdnVUxTKFxuXHRcdFx0J+aCqOayoeacieadg+mZkOiuv+mXruebuOWFs+mhtemdouOAguiLpeaCqOaYr+i1hOa3see8luiAhe+8jOivt+S4juaxgumXu+eZvuenkeaKgOacr+WboumYn+iBlOezu++8jOS7peiOt+WPluadg+mZkOOAgicsXG5cdFx0XHQn5oKo5rKS5pyJ5qyK6ZmQ6Kiq5ZWP55u46Zec6aCB6Z2i44CC6Iul5oKo5piv6LOH5rex57eo6ICF77yM6KuL6IiH5rGC6IGe55m+56eR5oqA6KGT5ZyY6ZqK6IGv57O777yM5Lul542y5Y+W5qyK6ZmQ44CCJ1xuXHRcdCksXG5cdFx0Tm9QZXJtRXJyb3IyOiB3Z1VMUyhcblx0XHRcdCfmgqjnmoTnvZHnu5znjq/looPlrZjlnKjpo47pmanvvIzor7fnmbvlvZXlkI7nu6fnu63kvb/nlKjjgILoi6XmgqjmsqHmnInmsYLpl7vnmb7np5HotKblj7fvvIzor7fms6jlhozlkI7nmbvlvZXjgIInLFxuXHRcdFx0J+aCqOeahOe2sui3r+eSsOWig+WtmOWcqOmiqOmaqu+8jOiri+eZu+WFpeW+jOe5vOe6jOS9v+eUqOOAguiLpeaCqOaykuacieaxguiBnueZvuenkeizrOiZn++8jOiri+azqOWGiuW+jOeZu+mMhOOAgidcblx0XHQpLFxuXHRcdE5vUGVybUVycm9yMzogd2dVTFMoXG5cdFx0XHQn55u45YWz5Yqf6IO95LuF5ZCR5rOo5YaM55So5oi35byA5pS+77yM6K+355m75b2V5ZCO57un57ut5L2/55So44CC6Iul5oKo5rKh5pyJ5rGC6Ze755m+56eR6LSm5Y+377yM6K+35rOo5YaM5ZCO55m75b2V44CCJyxcblx0XHRcdCfnm7jpl5zlip/og73lg4XlkJHms6jlhornlKjmiLbplovmlL7vvIzoq4vnmbvlhaXlvoznubznuozkvb/nlKjjgILoi6XmgqjmspLmnInmsYLogZ7nmb7np5Hos6zomZ/vvIzoq4vms6jlhorlvoznmbvpjITjgIInXG5cdFx0KSxcblx0XHROb1Blcm1FcnJvcjQ6IHdnVUxTKFxuXHRcdFx0J+aCqOayoeacieadg+mZkOiuv+mXruebuOWFs+mhtemdouOAguiLpeacieeWkemXru+8jOivt+S4juaxgumXu+eZvuenkei/kOiQpeiAheiBlOezu+OAgicsXG5cdFx0XHQn5oKo5rKS5pyJ5qyK6ZmQ6Kiq5ZWP55u46Zec6aCB6Z2i44CC6Iul5pyJ55aR5ZWP77yM6KuL6IiH5rGC6IGe55m+56eR6YGL54ef6ICF6IGv57O744CCJ1xuXHRcdCksXG5cdH07XG59O1xuXG5jb25zdCBpMThuTWVzc2FnZXMgPSBnZXRJMThuTWVzc2FnZXMoKTtcblxuY29uc3QgZ2V0TWVzc2FnZTogR2V0TWVzc2FnZXM8dHlwZW9mIGkxOG5NZXNzYWdlcz4gPSAoa2V5KSA9PiB7XG5cdHJldHVybiBpMThuTWVzc2FnZXNba2V5XSB8fCBrZXk7XG59O1xuXG5leHBvcnQge2dldE1lc3NhZ2V9O1xuIiwgImltcG9ydCB7V0dfU0tJTn0gZnJvbSAnLi9jb25zdGFudCc7XG5pbXBvcnQge3RpcHB5fSBmcm9tICdleHQuZ2FkZ2V0LlRpcHB5JztcblxuY29uc3QgZ2V0Q29udGVudCA9IChyZWZlcmVuY2U6IEVsZW1lbnQpOiBzdHJpbmcgPT4ge1xuXHRjb25zdCBsYWJlbDogc3RyaW5nIHwgbnVsbCA9IHJlZmVyZW5jZS5nZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKTtcblx0Y29uc3QgdGl0bGU6IHN0cmluZyB8IG51bGwgPSByZWZlcmVuY2UuZ2V0QXR0cmlidXRlKCdhbHQnKSA/PyByZWZlcmVuY2UuZ2V0QXR0cmlidXRlKCd0aXRsZScpO1xuXG5cdHJldHVybiAobGFiZWwgPT09IHRpdGxlID8gbGFiZWwgOiB0aXRsZSB8fCBsYWJlbCkgfHwgKHJlZmVyZW5jZS50ZXh0Q29udGVudCBhcyBzdHJpbmcpO1xufTtcblxuY29uc3Qgb25DcmVhdGVDYWxsYmFjayA9IChpbnN0YW5jZTogUmV0dXJuVHlwZTx0eXBlb2YgdGlwcHk+WzBdKTogdm9pZCA9PiB7XG5cdGNvbnN0IHtyZWZlcmVuY2V9ID0gaW5zdGFuY2U7XG5cdHJlZmVyZW5jZS5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnLCBnZXRDb250ZW50KHJlZmVyZW5jZSkpO1xuXHRyZWZlcmVuY2UucmVtb3ZlQXR0cmlidXRlKCd0aXRsZScpO1xufTtcblxuY29uc3Qgb25TaG93Q2FsbGJhY2sgPSAoaW5zdGFuY2U6IFJldHVyblR5cGU8dHlwZW9mIHRpcHB5PlswXSk6IHZvaWQgPT4ge1xuXHRvbkNyZWF0ZUNhbGxiYWNrKGluc3RhbmNlKTtcblx0aW5zdGFuY2Uuc2V0Q29udGVudChnZXRDb250ZW50KGluc3RhbmNlLnJlZmVyZW5jZSkpO1xufTtcblxuY29uc3QgdGlwcHlGb3JDaXRpemVuSGVhZGVyID0gKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQgPT4ge1xuXHRpZiAoV0dfU0tJTiAhPT0gJ2NpdGl6ZW4nKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Zm9yIChjb25zdCBlbGVtZW50IG9mICRib2R5LmZpbmQoXG5cdFx0Jy5jaXRpemVuLWhlYWRlciBsYWJlbFt0aXRsZV0sLmNpdGl6ZW4taGVhZGVyIC5tdy1lY2hvLW5vdGlmaWNhdGlvbnMtYmFkZ2UsLmNpdGl6ZW4taGVhZGVyX19sb2dvIGEsLnBhZ2UtYWN0aW9ucz5uYXY+dWw+bGkgYSwucGFnZS1hY3Rpb25zX19idXR0b24nXG5cdCkpIHtcblx0XHRjb25zdCAkZWxlbWVudDogSlF1ZXJ5ID0gJChlbGVtZW50KTtcblx0XHRsZXQgdGl0bGU6IHN0cmluZyB8IHVuZGVmaW5lZCA9ICRlbGVtZW50LmF0dHIoJ3RpdGxlJyk7XG5cdFx0aWYgKCF0aXRsZSkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0dGl0bGUgPSB0aXRsZS5yZXBsYWNlKC9cXHMqP1xcWy4rP10kLywgJycpO1xuXG5cdFx0JGVsZW1lbnQuYXR0cih7XG5cdFx0XHQnYXJpYS1sYWJlbCc6IHRpdGxlLFxuXHRcdFx0dGl0bGU6ICcnLFxuXHRcdH0pO1xuXHRcdHRpcHB5KCRlbGVtZW50LmdldCgwKSBhcyBIVE1MRWxlbWVudCwge1xuXHRcdFx0YXJyb3c6IHRydWUsXG5cdFx0XHRjb250ZW50OiB0aXRsZSxcblx0XHRcdHBsYWNlbWVudDogJ2JvdHRvbScsXG5cdFx0XHRvbkNyZWF0ZTogb25DcmVhdGVDYWxsYmFjayxcblx0XHRcdG9uSGlkZGVuOiBvbkNyZWF0ZUNhbGxiYWNrLFxuXHRcdFx0b25TaG93OiBvblNob3dDYWxsYmFjayxcblx0XHR9KTtcblx0fVxufTtcblxuY29uc3QgdGlwcHlGb3JFeHRlbnNpb24gPSBhc3luYyAoKTogUHJvbWlzZTx2b2lkPiA9PiB7XG5cdGF3YWl0IG13LmxvYWRlci51c2luZygnZXh0LkNvbGxhcHNpYmxlU2lkZWJhci5qcycpO1xuXHR0aXBweSgnI3NpZGViYXJCdXR0b24nLCB7XG5cdFx0YXJyb3c6IHRydWUsXG5cdFx0Y29udGVudDogZ2V0Q29udGVudCxcblx0XHRwbGFjZW1lbnQ6ICdsZWZ0Jyxcblx0XHRvbkNyZWF0ZTogb25DcmVhdGVDYWxsYmFjayxcblx0XHRvbkhpZGRlbjogb25DcmVhdGVDYWxsYmFjayxcblx0XHRvblNob3c6IG9uU2hvd0NhbGxiYWNrLFxuXHR9KTtcblxuXHRpZiAoV0dfU0tJTiA9PT0gJ3ZlY3RvcicpIHtcblx0XHRhd2FpdCBtdy5sb2FkZXIudXNpbmcoJ2V4dC5Db2xsYXBzaWJsZVNpZGViYXIudmVjdG9yJyk7XG5cdFx0dGlwcHkoJyNzaWRlYmFyQ29sbGFwc2UnLCB7XG5cdFx0XHRhcnJvdzogdHJ1ZSxcblx0XHRcdGNvbnRlbnQ6IGdldENvbnRlbnQsXG5cdFx0XHRwbGFjZW1lbnQ6ICdyaWdodCcsXG5cdFx0XHRvbkNyZWF0ZTogb25DcmVhdGVDYWxsYmFjayxcblx0XHRcdG9uSGlkZGVuOiBvbkNyZWF0ZUNhbGxiYWNrLFxuXHRcdFx0b25TaG93OiBvblNob3dDYWxsYmFjayxcblx0XHR9KTtcblx0fVxuXG5cdGF3YWl0IG13LmxvYWRlci51c2luZygnZXh0LkRhcmtNb2RlJyk7XG5cdHRpcHB5KCcjZGFya21vZGUtYnV0dG9uJywge1xuXHRcdGFycm93OiB0cnVlLFxuXHRcdGNvbnRlbnQ6IGdldENvbnRlbnQsXG5cdFx0cGxhY2VtZW50OiAnbGVmdCcsXG5cdFx0b25DcmVhdGU6IG9uQ3JlYXRlQ2FsbGJhY2ssXG5cdFx0b25IaWRkZW46IG9uQ3JlYXRlQ2FsbGJhY2ssXG5cdFx0b25TaG93OiBvblNob3dDYWxsYmFjayxcblx0fSk7XG59O1xuXG5leHBvcnQge3RpcHB5Rm9yQ2l0aXplbkhlYWRlciwgdGlwcHlGb3JFeHRlbnNpb259O1xuIiwgImNvbnN0IGRlcHJlY2F0ZWRGdW5jdGlvbnMgPSAoKTogdm9pZCA9PiB7XG5cdC8qIVxuXHQgKiBtYWludGVuYW5jZTogU29tZSB1c2VyIHNjcmlwdHMgbWF5IGJlIHVzaW5nIHRoZSBmb2xsb3dpbmcgZGVwcmVjYXRlZCBmdW5jdGlvbnMuXG5cdCAqIFRoZXNlIGZ1bmN0aW9ucyBhcmUgbm8gbG9uZ2VyIHN1cHBvcnRlZCBhbmQgc2hvdWxkIGJlIHVwZGF0ZWQuXG5cdCAqL1xuXHRtdy5sb2cuZGVwcmVjYXRlKFxuXHRcdHdpbmRvdyxcblx0XHQnaW1wb3J0U2NyaXB0Jyxcblx0XHQodGl0bGU6IHN0cmluZyk6IEhUTUxTY3JpcHRFbGVtZW50ID0+IHtcblx0XHRcdHJldHVybiBtdy5sb2FkZXIuYWRkU2NyaXB0VGFnKFxuXHRcdFx0XHRtdy51dGlsLmdldFVybCh0aXRsZSwge1xuXHRcdFx0XHRcdGFjdGlvbjogJ3JhdycsXG5cdFx0XHRcdFx0Y3R5cGU6ICd0ZXh0L2phdmFzY3JpcHQnLFxuXHRcdFx0XHRcdG1heGFnZTogJzM2MDAnLFxuXHRcdFx0XHRcdHNtYXhhZ2U6ICczNjAwJyxcblx0XHRcdFx0fSlcblx0XHRcdCk7XG5cdFx0fSxcblx0XHQnVXNlIG13LmxvYWRlci5hZGRTY3JpcHRUYWcoKSBpbnN0ZWFkJ1xuXHQpO1xuXHRtdy5sb2cuZGVwcmVjYXRlKFxuXHRcdHdpbmRvdyxcblx0XHQnaW1wb3J0U3R5bGVzaGVldCcsXG5cdFx0KHRpdGxlOiBzdHJpbmcpOiBIVE1MTGlua0VsZW1lbnQgPT4ge1xuXHRcdFx0cmV0dXJuIG13LmxvYWRlci5hZGRMaW5rVGFnKFxuXHRcdFx0XHRtdy51dGlsLmdldFVybCh0aXRsZSwge1xuXHRcdFx0XHRcdGFjdGlvbjogJ3JhdycsXG5cdFx0XHRcdFx0Y3R5cGU6ICd0ZXh0L2NzcycsXG5cdFx0XHRcdFx0bWF4YWdlOiAnMzYwMCcsXG5cdFx0XHRcdFx0c21heGFnZTogJzM2MDAnLFxuXHRcdFx0XHR9KSxcblx0XHRcdFx0J3RleHQvY3NzJ1xuXHRcdFx0KTtcblx0XHR9LFxuXHRcdCdVc2UgbXcubG9hZGVyLmFkZExpbmtUYWcoKSBpbnN0ZWFkJ1xuXHQpO1xuXHRtdy5sb2cuZGVwcmVjYXRlKFxuXHRcdHdpbmRvdyxcblx0XHQnaW1wb3J0U2NyaXB0VVJJJyxcblx0XHQobW9kdWxlczogc3RyaW5nKTogSFRNTFNjcmlwdEVsZW1lbnQgPT4ge1xuXHRcdFx0cmV0dXJuIG13LmxvYWRlci5hZGRTY3JpcHRUYWcobXcudXRpbC53aWtpVXJsZW5jb2RlKG1vZHVsZXMpKTtcblx0XHR9LFxuXHRcdCdVc2UgbXcubG9hZGVyLmFkZFNjcmlwdFRhZygpIG9yIG13LmxvYWRlci5nZXRTY3JpcHQoKSBpbnN0ZWFkJ1xuXHQpO1xuXHRtdy5sb2cuZGVwcmVjYXRlKFxuXHRcdHdpbmRvdyxcblx0XHQnaW1wb3J0U3R5bGVzaGVldFVSSScsXG5cdFx0KG1vZHVsZXM6IHN0cmluZyk6IEhUTUxMaW5rRWxlbWVudCA9PiB7XG5cdFx0XHRyZXR1cm4gbXcubG9hZGVyLmFkZExpbmtUYWcobXcudXRpbC53aWtpVXJsZW5jb2RlKG1vZHVsZXMpLCAndGV4dC9jc3MnKTtcblx0XHR9LFxuXHRcdCdVc2UgbXcubG9hZGVyLmFkZExpbmtUYWcoKSBpbnN0ZWFkJ1xuXHQpO1xuXHRtdy5sb2cuZGVwcmVjYXRlKFxuXHRcdHdpbmRvdyxcblx0XHQvLyBAdHMtZXhwZWN0LWVycm9yIFRTMjM0NVxuXHRcdCdpbXBvcnRTY3JpcHRDYWxsYmFjaycsXG5cdFx0KHRpdGxlOiBzdHJpbmcsIHJlYWR5OiBuZXZlcik6IHZvaWQgPT4ge1xuXHRcdFx0dm9pZCBtdy5sb2FkZXJcblx0XHRcdFx0LmdldFNjcmlwdChcblx0XHRcdFx0XHRtdy51dGlsLmdldFVybCh0aXRsZSwge1xuXHRcdFx0XHRcdFx0YWN0aW9uOiAncmF3Jyxcblx0XHRcdFx0XHRcdGN0eXBlOiAndGV4dC9qYXZhc2NyaXB0Jyxcblx0XHRcdFx0XHRcdG1heGFnZTogJzM2MDAnLFxuXHRcdFx0XHRcdFx0c21heGFnZTogJzM2MDAnLFxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdClcblx0XHRcdFx0LnRoZW4ocmVhZHkpO1xuXHRcdH0sXG5cdFx0J1VzZSBtdy5sb2FkZXIuZ2V0U2NyaXB0KCkgaW5zdGVhZCdcblx0KTtcblx0bXcubG9nLmRlcHJlY2F0ZShcblx0XHR3aW5kb3csXG5cdFx0Ly8gQHRzLWV4cGVjdC1lcnJvciBUUzIzNDVcblx0XHQnaW1wb3J0U2NyaXB0VVJJQ2FsbGJhY2snLFxuXHRcdCh1cmw6IHN0cmluZywgcmVhZHk6IG5ldmVyKTogdm9pZCA9PiB7XG5cdFx0XHR2b2lkIG13LmxvYWRlci5nZXRTY3JpcHQodXJsKS50aGVuKHJlYWR5KTtcblx0XHR9LFxuXHRcdCdVc2UgbXcubG9hZGVyLmdldFNjcmlwdCgpIGluc3RlYWQnXG5cdCk7XG5cdC8qKlxuXHQgKiBtYWludGVuYW5jZTogU29tZSB1c2VyIHNjcmlwdHMgbWF5IGJlIHVzaW5nIHRoZSBmb2xsb3dpbmcgZGVwcmVjYXRlZCBmdW5jdGlvbnMuXG5cdCAqIFRoZXNlIGZ1bmN0aW9ucyBhcmUga2VwdCBmb3IgY29tcGFiaWxpdHkuXG5cdCAqL1xuXHQvLyBtdy5sb2cuZGVwcmVjYXRlKHdpbmRvdywgJ0pTQ29uZmlnJywge30sICdVc2Uge30gaW5zdGVhZCcpO1xuXHQvKipcblx0ICogd2dVKlMgZnVuY3Rpb25zIGhhdmUgYmVlbiBzcGxpdCB0byBhIHNlcGVyYXRlIGdhZGdldCAoZXh0LmdhZGdldC5pMThuKS5cblx0ICovXG59O1xuXG5leHBvcnQge2RlcHJlY2F0ZWRGdW5jdGlvbnN9O1xuIiwgImltcG9ydCB7XG5cdGFkZFRhcmdldEJsYW5rLFxuXHRmaXhMb2NhdGlvbkhhc2gsXG5cdGhpZGVOZXdVc2Vyc0xvZyxcblx0aGlnaExpZ2h0UmV2LFxuXHRsb2FkV2l0aFVSTCxcblx0bm9QZXJtV2FybmluZyxcblx0b3BlblNlYXJjaEluTmV3VGFiLFxuXHRyZW1vdmVUaXRsZUZyb21QZXJtYWxpbmssXG5cdHRpdGxlQ2xlYW5VcCxcblx0dG9nZ2xlTGluayxcblx0dW5paGFuUG9wdXAsXG59IGZyb20gJy4vbW9kdWxlcy9jb3JlJztcbmltcG9ydCB7dGlwcHlGb3JDaXRpemVuSGVhZGVyLCB0aXBweUZvckV4dGVuc2lvbn0gZnJvbSAnLi9tb2R1bGVzL3RpcHB5JztcbmltcG9ydCB7ZGVwcmVjYXRlZEZ1bmN0aW9uc30gZnJvbSAnLi9tb2R1bGVzL2RlcHJlY2F0ZWRGdW5jdGlvbnMnO1xuXG4oZnVuY3Rpb24gc2l0ZUNvbW1vbigpOiB2b2lkIHtcblx0aWYgKG13LmNvbmZpZy5nZXQoJ3dnU2l0ZUNvbW1vbkluc3RhbGxlZCcpKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdG13LmNvbmZpZy5zZXQoJ3dnU2l0ZUNvbW1vbkluc3RhbGxlZCcsIHRydWUpO1xuXG5cdC8vIENvcmUgbW9kdWxlc1xuXHRsb2FkV2l0aFVSTCgpO1xuXHRub1Blcm1XYXJuaW5nKCk7XG5cdGZpeExvY2F0aW9uSGFzaCgpO1xuXG5cdCQoKCk6IHZvaWQgPT4ge1xuXHRcdGNvbnN0ICRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50PiA9ICQoJ2JvZHknKTtcblxuXHRcdC8vIENvcmUgbW9kdWxlcyAobmVlZCAkLnJlYWR5KVxuXHRcdGhpZ2hMaWdodFJldigkYm9keSk7XG5cdFx0YWRkVGFyZ2V0QmxhbmsoJGJvZHkpO1xuXHRcdHJlbW92ZVRpdGxlRnJvbVBlcm1hbGluaygkYm9keSk7XG5cdFx0b3BlblNlYXJjaEluTmV3VGFiKCRib2R5KTtcblx0XHR0aXRsZUNsZWFuVXAoJGJvZHkpO1xuXHRcdHVuaWhhblBvcHVwKCRib2R5KTtcblx0XHRoaWRlTmV3VXNlcnNMb2coJGJvZHkpO1xuXHRcdHRvZ2dsZUxpbmsoJGJvZHkpO1xuXG5cdFx0Ly8gVGlwcHktcmVsYXRlZCBjb2RlcyAobmVlZCAkLnJlYWR5KVxuXHRcdHRpcHB5Rm9yQ2l0aXplbkhlYWRlcigkYm9keSk7XG5cdH0pO1xuXG5cdC8vIERlcHJlY2F0ZWQgZnVuY3Rpb25zXG5cdGRlcHJlY2F0ZWRGdW5jdGlvbnMoKTtcblxuXHQvLyBUaXBweS1yZWxhdGVkIGNvZGVzXG5cdHZvaWQgdGlwcHlGb3JFeHRlbnNpb24oKTtcbn0pKCk7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsV0FBMEJDLEdBQUdDLEtBQUtDLGNBQWMsTUFBTTtBQUM1RCxJQUFNQyxnQkFBK0JILEdBQUdDLEtBQUtDLGNBQWMsV0FBVztBQUN0RSxJQUFNRSxjQUE2QkosR0FBR0MsS0FBS0MsY0FBYyxTQUFTO0FBQ2xFLElBQU1HLGNBQTZCTCxHQUFHQyxLQUFLQyxjQUFjLFFBQVE7QUFDakUsSUFBTUksVUFBeUJOLEdBQUdDLEtBQUtDLGNBQWMsS0FBSztBQUMxRCxJQUFNSyxl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UUFBaUNhLEVBQUUsTUFBTTtBQUcvQ2QsaUJBQWFDLEtBQUs7QUFDbEJRLG1CQUFlUixLQUFLO0FBQ3BCdUIsNkJBQXlCdkIsS0FBSztBQUM5QjJCLHVCQUFtQjNCLEtBQUs7QUFDeEJnQyxpQkFBYWhDLEtBQUs7QUFDbEJ5QyxnQkFBWXpDLEtBQUs7QUFDakIyRCxvQkFBZ0IzRCxLQUFLO0FBQ3JCZ0UsZUFBV2hFLEtBQUs7QUFHaEJrRiwwQkFBc0JsRixLQUFLO0VBQzVCLENBQUM7QUFHRGlHLHNCQUFvQjtBQUdwQixPQUFLTCxrQkFBa0I7QUFDeEIsR0FBRzsiLAogICJuYW1lcyI6IFsiVVJMX0RJRkYiLCAibXciLCAidXRpbCIsICJnZXRQYXJhbVZhbHVlIiwgIlVSTF9ISUdITElHSFQiLCAiVVJMX0hJTElHSFQiLCAiVVJMX05PX1BFUk0iLCAiVVJMX1VTRSIsICJVUkxfV0lUSF9DU1MiLCAiVVJMX1dJVEhfSlMiLCAiVVJMX1dJVEhfTU9EVUxFIiwgIldHX0FDVElPTiIsICJjb25maWciLCAiZ2V0IiwgIldHX0NBTk9OSUNBTF9TUEVDSUFMX1BBR0VfTkFNRSIsICJXR19OQU1FU1BBQ0VfTlVNQkVSIiwgIldHX1BBR0VfTkFNRSIsICJXR19TQ1JJUFQiLCAiV0dfU0tJTiIsICJXR19VU0VSX05BTUUiLCAiaW1wb3J0X2V4dF9nYWRnZXQyIiwgIl9fdG9FU00iLCAicmVxdWlyZSIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJnZXRJMThuTWVzc2FnZXMiLCAid2dVTFMiLCAid2luZG93IiwgIk5vdGUiLCAibG9jYWxpemUiLCAiZW4iLCAiTm9QZXJtRXJyb3IwIiwgIk5vUGVybUVycm9yMSIsICJOb1Blcm1FcnJvcjIiLCAiTm9QZXJtRXJyb3IzIiwgIk5vUGVybUVycm9yNCIsICJpMThuTWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAibG9hZFdpdGhVUkwiLCAidGVzdCIsICJsb2FkZXIiLCAibG9hZCIsICJnZXRVcmwiLCAiYWN0aW9uIiwgImN0eXBlIiwgIm1heGFnZSIsICJzbWF4YWdlIiwgInVzaW5nIiwgInRoZW4iLCAicmVxdWlyZTIiLCAid2dVc2VyTmFtZSIsICJlc2NhcGVSZWdFeHAiLCAiUkVHRVhfRklMRSIsICJSZWdFeHAiLCAiY29uY2F0IiwgIlJFR0VYX0VYVCIsICJwYXRoIiwgIl9pdGVyYXRvcjIiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAic3BsaXQiLCAiX3N0ZXAyIiwgInMiLCAibiIsICJkb25lIiwgIl9SRUdFWF9GSUxFJGV4ZWMiLCAidXNlRmlsZSIsICJ2YWx1ZSIsICJuYW1lIiwgInRvU3RyaW5nIiwgInRyaW0iLCAid2hhdCIsICJleGVjIiwgImVuY29kZVVSSUNvbXBvbmVudCIsICJlcnIiLCAiZSIsICJmIiwgIm5vUGVybVdhcm5pbmciLCAibm90aWZ5IiwgInRhZyIsICJ0eXBlIiwgIm5ld1VybCIsICJsb2NhdGlvbiIsICJocmVmIiwgInJlcGxhY2UiLCAiaGlzdG9yeSIsICJwdXNoU3RhdGUiLCAiZG9jdW1lbnQiLCAidGl0bGUiLCAiaGlnaExpZ2h0UmV2IiwgIiRib2R5IiwgImhpZ2hsaWdodCIsICJfaXRlcmF0b3IzIiwgIl9zdGVwMyIsICJ2ZXJzaW9uIiwgImZpbmQiLCAicGFyZW50IiwgImFkZENsYXNzIiwgImFkZFRhcmdldEJsYW5rIiwgImZpbHRlciIsICJfaW5kZXgiLCAiZWxlbWVudCIsICJsaW5rSHJlZiIsICIkIiwgImF0dHIiLCAiaHJlZlNwbGl0IiwgImxlbmd0aCIsICJob3N0IiwgImluY2x1ZGVzIiwgInByb3RvY29sIiwgImhvc3RuYW1lIiwgInRhcmdldCIsICJyZWwiLCAicmVtb3ZlVGl0bGVGcm9tUGVybWFsaW5rIiwgIiRwZXJtYUxpbmsiLCAiXyRwZXJtYUxpbmtGaXJzdENoaWxkIiwgIiRwZXJtYUxpbmtGaXJzdENoaWxkIiwgIm9wZW5TZWFyY2hJbk5ld1RhYiIsICJvbiIsICJldmVudCIsICJjdHJsS2V5IiwgIm1ldGFLZXkiLCAidGl0bGVDbGVhblVwIiwgImZ1bGxQYWdlTmFtZSIsICJUaXRsZSIsICJnZXRQcmVmaXhlZFRleHQiLCAiJGZpcnN0SGVhZGluZyIsICJkb2N1bWVudFRpdGxlIiwgInBhZ2VUaXRsZSIsICJ0ZXh0IiwgInJlcGxhY2VUaXRsZSIsICJ1bmloYW5Qb3B1cCIsICJlYWNoIiwgIiRlbGVtZW50IiwgInBvcHVwIiwgIk9PIiwgInVpIiwgIlBvcHVwV2lkZ2V0IiwgIiRjb250ZW50IiwgImRlZmF1bHQiLCAiY3JlYXRlRWxlbWVudCIsICJsYWJlbCIsICJhbmNob3IiLCAiaGVhZCIsICJwYWRkZWQiLCAiYXBwZW5kIiwgInRvZ2dsZSIsICJmaXhMb2NhdGlvbkhhc2giLCAiaGFzaCIsICJoaWRlTmV3VXNlcnNMb2ciLCAiJG5ld1VzZXJzTG9nIiwgInByb3AiLCAiY2hlY2tlZCIsICJkaXNhYmxlZCIsICJ0b2dnbGVMaW5rIiwgIl8kdG9nZ2xlciRwYXJlbnQkIiwgIiR0b2dnbGVyIiwgInN0eWxlIiwgImNvbG9yIiwgImNzcyIsICJpbXBvcnRfZXh0X2dhZGdldDMiLCAiZ2V0Q29udGVudCIsICJyZWZlcmVuY2UiLCAiX3JlZmVyZW5jZSRnZXRBdHRyaWJ1IiwgImdldEF0dHJpYnV0ZSIsICJ0ZXh0Q29udGVudCIsICJvbkNyZWF0ZUNhbGxiYWNrIiwgImluc3RhbmNlIiwgInNldEF0dHJpYnV0ZSIsICJyZW1vdmVBdHRyaWJ1dGUiLCAib25TaG93Q2FsbGJhY2siLCAic2V0Q29udGVudCIsICJ0aXBweUZvckNpdGl6ZW5IZWFkZXIiLCAiX2l0ZXJhdG9yNCIsICJfc3RlcDQiLCAidGlwcHkiLCAiYXJyb3ciLCAiY29udGVudCIsICJwbGFjZW1lbnQiLCAib25DcmVhdGUiLCAib25IaWRkZW4iLCAib25TaG93IiwgInRpcHB5Rm9yRXh0ZW5zaW9uIiwgIl9yZWYiLCAiX2FzeW5jVG9HZW5lcmF0b3IiLCAiYXBwbHkiLCAiYXJndW1lbnRzIiwgImRlcHJlY2F0ZWRGdW5jdGlvbnMiLCAibG9nIiwgImRlcHJlY2F0ZSIsICJhZGRTY3JpcHRUYWciLCAiYWRkTGlua1RhZyIsICJtb2R1bGVzIiwgIndpa2lVcmxlbmNvZGUiLCAicmVhZHkiLCAiZ2V0U2NyaXB0IiwgInVybCIsICJzaXRlQ29tbW9uIiwgInNldCJdCn0K

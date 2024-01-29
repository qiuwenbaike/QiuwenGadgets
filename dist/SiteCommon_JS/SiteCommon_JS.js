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
    }),
    NoPermError0: (0, import_ext_gadget.localize)({
      "zh-hans": "因技术原因，您没有权限访问相关页面。若有疑问，请与求闻百科运营者联系。",
      "zh-hant": "因技術原因，您沒有權限訪問相關頁面。若有疑問，請與求聞百科運營者聯系。"
    }),
    NoPermError1: (0, import_ext_gadget.localize)({
      "zh-hans": "您没有权限访问相关页面。若您是资深编者，请与求闻百科技术团队联系，以获取权限。",
      "zh-hant": "您沒有權限訪問相關頁面。若您是資深編者，請與求聞百科技術團隊聯系，以獲取權限。"
    }),
    NoPermError2: (0, import_ext_gadget.localize)({
      "zh-hans": "您的网络环境存在风险，请登录后继续使用。若您没有求闻百科账号，请注册后登录。",
      "zh-hant": "您的網路環境存在風險，請登入後繼續使用。若您沒有求聞百科賬號，請注冊後登錄。"
    }),
    NoPermError3: (0, import_ext_gadget.localize)({
      "zh-hans": "相关功能仅向注册用户开放，请登录后继续使用。若您没有求闻百科账号，请注册后登录。",
      "zh-hant": "相關功能僅向注冊用戶開放，請登入後繼續使用。若您沒有求聞百科賬號，請注冊後登錄。"
    }),
    NoPermError4: (0, import_ext_gadget.localize)({
      "zh-hans": "您没有权限访问相关页面。若有疑问，请与求闻百科运营者联系。",
      "zh-hant": "您沒有權限訪問相關頁面。若有疑問，請與求聞百科運營者聯系。"
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1NpdGVDb21tb25fSlMvbW9kdWxlcy9jb25zdGFudC50cyIsICJzcmMvU2l0ZUNvbW1vbl9KUy9tb2R1bGVzL2NvcmUudHN4IiwgInNyYy9TaXRlQ29tbW9uX0pTL21vZHVsZXMvaTE4bi50cyIsICJzcmMvU2l0ZUNvbW1vbl9KUy9tb2R1bGVzL3RpcHB5LnRzIiwgInNyYy9TaXRlQ29tbW9uX0pTL21vZHVsZXMvZGVwcmVjYXRlZEZ1bmN0aW9ucy50cyIsICJzcmMvU2l0ZUNvbW1vbl9KUy9TaXRlQ29tbW9uX0pTLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBVUkxfRElGRjogc3RyaW5nIHwgbnVsbCA9IG13LnV0aWwuZ2V0UGFyYW1WYWx1ZSgnZGlmZicpO1xuY29uc3QgVVJMX0hJR0hMSUdIVDogc3RyaW5nIHwgbnVsbCA9IG13LnV0aWwuZ2V0UGFyYW1WYWx1ZSgnaGlnaGxpZ2h0Jyk7XG5jb25zdCBVUkxfSElMSUdIVDogc3RyaW5nIHwgbnVsbCA9IG13LnV0aWwuZ2V0UGFyYW1WYWx1ZSgnaGlsaWdodCcpO1xuY29uc3QgVVJMX05PX1BFUk06IHN0cmluZyB8IG51bGwgPSBtdy51dGlsLmdldFBhcmFtVmFsdWUoJ25vcGVybScpO1xuY29uc3QgVVJMX1VTRTogc3RyaW5nIHwgbnVsbCA9IG13LnV0aWwuZ2V0UGFyYW1WYWx1ZSgndXNlJyk7XG5jb25zdCBVUkxfV0lUSF9DU1M6IHN0cmluZyB8IG51bGwgPSBtdy51dGlsLmdldFBhcmFtVmFsdWUoJ3dpdGhDU1MnKTtcbmNvbnN0IFVSTF9XSVRIX0pTOiBzdHJpbmcgfCBudWxsID0gbXcudXRpbC5nZXRQYXJhbVZhbHVlKCd3aXRoSlMnKTtcbmNvbnN0IFVSTF9XSVRIX01PRFVMRTogc3RyaW5nIHwgbnVsbCA9IG13LnV0aWwuZ2V0UGFyYW1WYWx1ZSgnd2l0aE1vZHVsZScpO1xuXG5jb25zdCBXR19BQ1RJT046IE1lZGlhV2lraUNvbmZpZ01hcFdnQWN0aW9uID0gbXcuY29uZmlnLmdldCgnd2dBY3Rpb24nKTtcbmNvbnN0IFdHX0NBTk9OSUNBTF9TUEVDSUFMX1BBR0VfTkFNRTogc3RyaW5nIHwgZmFsc2UgPSBtdy5jb25maWcuZ2V0KCd3Z0Nhbm9uaWNhbFNwZWNpYWxQYWdlTmFtZScpO1xuY29uc3QgV0dfTkFNRVNQQUNFX05VTUJFUjogbnVtYmVyID0gbXcuY29uZmlnLmdldCgnd2dOYW1lc3BhY2VOdW1iZXInKTtcbmNvbnN0IFdHX1BBR0VfTkFNRTogc3RyaW5nID0gbXcuY29uZmlnLmdldCgnd2dQYWdlTmFtZScpO1xuY29uc3QgV0dfU0NSSVBUOiBzdHJpbmcgPSBtdy5jb25maWcuZ2V0KCd3Z1NjcmlwdCcpO1xuY29uc3QgV0dfU0tJTjogc3RyaW5nID0gbXcuY29uZmlnLmdldCgnc2tpbicpO1xuY29uc3QgV0dfVVNFUl9OQU1FOiBzdHJpbmcgfCBudWxsID0gbXcuY29uZmlnLmdldCgnd2dVc2VyTmFtZScpO1xuXG5leHBvcnQge1xuXHRVUkxfRElGRixcblx0VVJMX0hJR0hMSUdIVCxcblx0VVJMX0hJTElHSFQsXG5cdFVSTF9OT19QRVJNLFxuXHRVUkxfVVNFLFxuXHRVUkxfV0lUSF9DU1MsXG5cdFVSTF9XSVRIX0pTLFxuXHRVUkxfV0lUSF9NT0RVTEUsXG5cdFdHX0FDVElPTixcblx0V0dfQ0FOT05JQ0FMX1NQRUNJQUxfUEFHRV9OQU1FLFxuXHRXR19OQU1FU1BBQ0VfTlVNQkVSLFxuXHRXR19QQUdFX05BTUUsXG5cdFdHX1NDUklQVCxcblx0V0dfU0tJTixcblx0V0dfVVNFUl9OQU1FLFxufTtcbiIsICJpbXBvcnQge1xuXHRVUkxfRElGRixcblx0VVJMX0hJR0hMSUdIVCxcblx0VVJMX0hJTElHSFQsXG5cdFVSTF9OT19QRVJNLFxuXHRVUkxfVVNFLFxuXHRVUkxfV0lUSF9DU1MsXG5cdFVSTF9XSVRIX0pTLFxuXHRVUkxfV0lUSF9NT0RVTEUsXG5cdFdHX0FDVElPTixcblx0V0dfQ0FOT05JQ0FMX1NQRUNJQUxfUEFHRV9OQU1FLFxuXHRXR19OQU1FU1BBQ0VfTlVNQkVSLFxuXHRXR19QQUdFX05BTUUsXG5cdFdHX1NDUklQVCxcblx0V0dfVVNFUl9OQU1FLFxufSBmcm9tICcuL2NvbnN0YW50JztcbmltcG9ydCBSZWFjdCBmcm9tICdleHQuZ2FkZ2V0LlJlYWN0JztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9pMThuJztcblxuY29uc3QgbG9hZFdpdGhVUkwgPSAoKTogdm9pZCA9PiB7XG5cdC8qKlxuXHQgKiAmd2l0aENTUz0gYW5kICZ3aXRoSlM9IFVSTCBwYXJhbWV0ZXJzXG5cdCAqIEFsbG93IHRvIHRyeSBjdXN0b20gc2NyaXB0cyBmcm9tIE1lZGlhV2lraSBzcGFjZVxuXHQgKiB3aXRob3V0IGVkaXRpbmcgcGVyc29uYWwgLmNzcyBvciAuanMgZmlsZXNcblx0ICovXG5cdGlmIChVUkxfV0lUSF9DU1MgfHwgVVJMX1dJVEhfSlMgfHwgVVJMX1dJVEhfTU9EVUxFKSB7XG5cdFx0aWYgKFVSTF9XSVRIX0NTUyAmJiAvXk1lZGlhV2lraTpbXiMlJjw9Pl0qXFwuY3NzJC8udGVzdChVUkxfV0lUSF9DU1MpKSB7XG5cdFx0XHRtdy5sb2FkZXIubG9hZChcblx0XHRcdFx0bXcudXRpbC5nZXRVcmwoVVJMX1dJVEhfQ1NTLCB7XG5cdFx0XHRcdFx0YWN0aW9uOiAncmF3Jyxcblx0XHRcdFx0XHRjdHlwZTogJ3RleHQvY3NzJyxcblx0XHRcdFx0XHRtYXhhZ2U6ICczNjAwJyxcblx0XHRcdFx0XHRzbWF4YWdlOiAnMzYwMCcsXG5cdFx0XHRcdH0pLFxuXHRcdFx0XHQndGV4dC9jc3MnXG5cdFx0XHQpO1xuXHRcdH1cblx0XHRpZiAoVVJMX1dJVEhfSlMgJiYgL15NZWRpYVdpa2k6W14jJSY8PT5dKlxcLmpzJC8udGVzdChVUkxfV0lUSF9KUykpIHtcblx0XHRcdC8vIEB0cy1leHBlY3QtZXJyb3IgVFM2MTMzXG5cdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG5cdFx0XHR2b2lkIG13LmxvYWRlci51c2luZygnJykudGhlbigocmVxdWlyZSk6IHZvaWQgPT4ge1xuXHRcdFx0XHRtdy5sb2FkZXIubG9hZChcblx0XHRcdFx0XHRtdy51dGlsLmdldFVybChVUkxfV0lUSF9KUywge1xuXHRcdFx0XHRcdFx0YWN0aW9uOiAncmF3Jyxcblx0XHRcdFx0XHRcdGN0eXBlOiAndGV4dC9qYXZhc2NyaXB0Jyxcblx0XHRcdFx0XHRcdG1heGFnZTogJzM2MDAnLFxuXHRcdFx0XHRcdFx0c21heGFnZTogJzM2MDAnLFxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdCk7XG5cdFx0XHR9KTtcblx0XHR9XG5cdFx0aWYgKFVSTF9XSVRIX01PRFVMRSAmJiAvXmV4dFxcLlteLHxdKyQvLnRlc3QoVVJMX1dJVEhfTU9EVUxFKSkge1xuXHRcdFx0Ly8gQHRzLWV4cGVjdC1lcnJvciBUUzYxMzNcblx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcblx0XHRcdHZvaWQgbXcubG9hZGVyLnVzaW5nKFVSTF9XSVRIX01PRFVMRSkudGhlbigocmVxdWlyZSk6IHZvaWQgPT4ge1xuXHRcdFx0XHRtdy5sb2FkZXIubG9hZChVUkxfV0lUSF9NT0RVTEUgYXMgc3RyaW5nKTtcblx0XHRcdH0pO1xuXHRcdH1cblx0fVxuXHQvKipcblx0ICogTG9hZCBDU1MgYW5kIEpTIGZpbGVzIHRlbXBvcmFyaWx5IHRocm91Z2ggVVJMLlxuXHQgKiAmdXNlPUZpbGUxLmNzc3xGaWxlMi5jc3N8RmlsZTMuanNcblx0ICovXG5cdGlmIChVUkxfVVNFKSB7XG5cdFx0Y29uc3Qgd2dVc2VyTmFtZTogc3RyaW5nID0gbXcudXRpbC5lc2NhcGVSZWdFeHAoV0dfVVNFUl9OQU1FID8/ICcnKTtcblx0XHRjb25zdCBSRUdFWF9GSUxFOiBSZWdFeHAgPSBuZXcgUmVnRXhwKFxuXHRcdFx0YF4oPzpNZWRpYVdpa2k6JHt3Z1VzZXJOYW1lID8gYHxVc2VyOiR7d2dVc2VyTmFtZX0vYCA6ICcnfSlbXiY8Pj0lI10qXFxcXC4oanN8Y3NzKSRgXG5cdFx0KTtcblx0XHRjb25zdCBSRUdFWF9FWFQ6IFJlZ0V4cCA9IC9eZXh0XFwuW14sXSskLztcblx0XHRjb25zdCBwYXRoOiBzdHJpbmcgPSBgJHtXR19TQ1JJUFR9P2FjdGlvbj1yYXcmY3R5cGU9dGV4dC9gO1xuXHRcdGZvciAoY29uc3QgdXNlRmlsZSBvZiBVUkxfVVNFLnNwbGl0KCd8JykpIHtcblx0XHRcdGNvbnN0IG5hbWU6IHN0cmluZyA9IHVzZUZpbGUudG9TdHJpbmcoKS50cmltKCk7XG5cdFx0XHRjb25zdCB3aGF0OiBzdHJpbmdbXSA9IFJFR0VYX0ZJTEUuZXhlYyhuYW1lKSA/PyBbJycsICcnXTtcblx0XHRcdHN3aXRjaCAod2hhdFsxXSkge1xuXHRcdFx0XHRjYXNlICdqcyc6XG5cdFx0XHRcdFx0Ly8gQHRzLWV4cGVjdC1lcnJvciBUUzYxMzNcblx0XHRcdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG5cdFx0XHRcdFx0dm9pZCBtdy5sb2FkZXIudXNpbmcoJycpLnRoZW4oKHJlcXVpcmUpOiB2b2lkID0+IHtcblx0XHRcdFx0XHRcdG13LmxvYWRlci5sb2FkKGAke3BhdGh9amF2YXNjcmlwdCZ0aXRsZT0ke2VuY29kZVVSSUNvbXBvbmVudChuYW1lKX1gKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAnY3NzJzpcblx0XHRcdFx0XHRtdy5sb2FkZXIubG9hZChgJHtwYXRofWNzcyZ0aXRsZT0ke2VuY29kZVVSSUNvbXBvbmVudChuYW1lKX1gKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRpZiAoUkVHRVhfRVhULnRlc3QobmFtZSkpIHtcblx0XHRcdFx0XHRcdC8vIEB0cy1leHBlY3QtZXJyb3IgVFM2MTMzXG5cdFx0XHRcdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG5cdFx0XHRcdFx0XHR2b2lkIG13LmxvYWRlci51c2luZyhuYW1lKS50aGVuKChyZXF1aXJlKTogdm9pZCA9PiB7XG5cdFx0XHRcdFx0XHRcdG13LmxvYWRlci5sb2FkKG5hbWUpO1xuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxufTtcblxuY29uc3Qgbm9QZXJtV2FybmluZyA9ICgpOiB2b2lkID0+IHtcblx0LyoqXG5cdCAqIExvYWQgd2FybmluZyhzKSB3aGVuIHVzZXIgaGFzIG5vIGFjY2VzcyB0byBwYWdlXG5cdCAqL1xuXHRpZiAoIVVSTF9OT19QRVJNKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdHN3aXRjaCAoVVJMX05PX1BFUk0pIHtcblx0XHRjYXNlICcwJzpcblx0XHRcdHZvaWQgbXcubm90aWZ5KGdldE1lc3NhZ2UoJ05vUGVybUVycm9yMCcpLCB7dGFnOiAnbm9QZXJtJywgdHlwZTogJ2Vycm9yJ30pO1xuXHRcdFx0YnJlYWs7XG5cdFx0Y2FzZSAnMSc6XG5cdFx0XHR2b2lkIG13Lm5vdGlmeShnZXRNZXNzYWdlKCdOb1Blcm1FcnJvcjEnKSwge3RhZzogJ25vUGVybScsIHR5cGU6ICdlcnJvcid9KTtcblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgJzInOlxuXHRcdFx0dm9pZCBtdy5ub3RpZnkoZ2V0TWVzc2FnZSgnTm9QZXJtRXJyb3IyJyksIHt0YWc6ICdub1Blcm0nLCB0eXBlOiAnd2Fybid9KTtcblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgJzMnOlxuXHRcdFx0dm9pZCBtdy5ub3RpZnkoZ2V0TWVzc2FnZSgnTm9QZXJtRXJyb3IzJyksIHt0YWc6ICdub1Blcm0nLCB0eXBlOiAnd2Fybid9KTtcblx0XHRcdGJyZWFrO1xuXHRcdGRlZmF1bHQ6XG5cdFx0XHR2b2lkIG13Lm5vdGlmeShnZXRNZXNzYWdlKCdOb1Blcm1FcnJvcjQnKSwge3RhZzogJ25vUGVybScsIHR5cGU6ICdlcnJvcid9KTtcblx0fVxuXHRjb25zdCBuZXdVcmw6IHN0cmluZyA9IGxvY2F0aW9uLmhyZWYucmVwbGFjZSgvWz8mXW5vcGVybT1bMC05XSsvLCAnJyk7XG5cdGhpc3RvcnkucHVzaFN0YXRlKHt9LCBkb2N1bWVudC50aXRsZSwgbmV3VXJsKTtcbn07XG5cbmNvbnN0IGhpZ2hMaWdodFJldiA9ICgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkID0+IHtcblx0LyoqXG5cdCAqIEFkZCBoaWdobGlnaHQgdG8gcmV2aXNpb25zIHdoZW4gdXNpbmcgYCZoaWxpZ2h0PXJldmlkYCBvciBgJmhpZ2hsaWdodD1yZXZpZGBcblx0ICovXG5cdGNvbnN0IGhpZ2hsaWdodDogc3RyaW5nIHwgbnVsbCA9IFVSTF9ISUdITElHSFQgPz8gVVJMX0hJTElHSFQ7XG5cdGlmICghaGlnaGxpZ2h0IHx8IFdHX0FDVElPTiAhPT0gJ2hpc3RvcnknKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdGZvciAoY29uc3QgdmVyc2lvbiBvZiBoaWdobGlnaHQuc3BsaXQoJywnKSkge1xuXHRcdCRib2R5LmZpbmQoYGlucHV0W25hbWU9b2xkaWRdW3ZhbHVlPSR7dmVyc2lvbn1dYCkucGFyZW50KCkuYWRkQ2xhc3MoJ25vdC1wYXRyb2xsZWQnKTtcblx0fVxufTtcblxuY29uc3QgYWRkVGFyZ2V0QmxhbmsgPSAoJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KTogdm9pZCA9PiB7XG5cdC8qKlxuXHQgKiBBZGQgdGFyZ2V0PVwiYmxhbmtcIiB0byBleHRlcm5hbCBsaW5rc1xuXHQgKi9cblx0JGJvZHkuZmluZDxIVE1MQW5jaG9yRWxlbWVudD4oJ2EuZXh0ZXJuYWwsIGFbcmVsPVwibXc6RXh0TGlua1wiXScpLmZpbHRlcigoX2luZGV4LCBlbGVtZW50KTogYm9vbGVhbiA9PiB7XG5cdFx0Y29uc3QgbGlua0hyZWY6IHN0cmluZyB8IHVuZGVmaW5lZCA9ICQoZWxlbWVudCkuYXR0cignaHJlZicpO1xuXHRcdGlmIChsaW5rSHJlZikge1xuXHRcdFx0Y29uc3QgaHJlZlNwbGl0OiBzdHJpbmdbXSA9IGxpbmtIcmVmLnNwbGl0KCcvJyk7XG5cdFx0XHRpZiAoaHJlZlNwbGl0Lmxlbmd0aCA8IDMgfHwgaHJlZlNwbGl0WzJdID09PSBsb2NhdGlvbi5ob3N0KSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYgKGVsZW1lbnQuaHJlZi5pbmNsdWRlcyhgJHtsb2NhdGlvbi5wcm90b2NvbH0vLyR7bG9jYXRpb24uaG9zdG5hbWV9YCkpIHtcblx0XHRcdGVsZW1lbnQudGFyZ2V0ID0gJ19ibGFuayc7XG5cdFx0XHRpZiAoIWVsZW1lbnQucmVsLmluY2x1ZGVzKCdub29wZW5lcicpKSB7XG5cdFx0XHRcdGVsZW1lbnQucmVsICs9ICcgbm9vcGVuZXInO1xuXHRcdFx0fVxuXHRcdFx0aWYgKCFlbGVtZW50LnJlbC5pbmNsdWRlcygnbm9yZWZlcnJlcicpKSB7XG5cdFx0XHRcdGVsZW1lbnQucmVsICs9ICcgbm9yZWZlcnJlcic7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiB0cnVlO1xuXHR9KTtcbn07XG5cbmNvbnN0IHJlbW92ZVRpdGxlRnJvbVBlcm1hbGluayA9ICgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkID0+IHtcblx0LyoqXG5cdCAqIFJlbW92ZSB0aXRsZT0qIGZyb20gcGVybWFsaW5rXG5cdCAqL1xuXHRjb25zdCAkcGVybWFMaW5rOiBKUXVlcnkgPSAkYm9keS5maW5kKCcjdC1wZXJtYWxpbmsnKTtcblx0aWYgKCRwZXJtYUxpbmsubGVuZ3RoKSB7XG5cdFx0Y29uc3QgJHBlcm1hTGlua0ZpcnN0Q2hpbGQ6IEpRdWVyeTxIVE1MQW5jaG9yRWxlbWVudD4gPSAkcGVybWFMaW5rLmZpbmQ8SFRNTEFuY2hvckVsZW1lbnQ+KCc6Zmlyc3QtY2hpbGQnKTtcblx0XHRjb25zdCBocmVmOiBzdHJpbmcgfCB1bmRlZmluZWQgPSAkcGVybWFMaW5rRmlyc3RDaGlsZC5hdHRyKCdocmVmJyk/LnJlcGxhY2UoL3RpdGxlPVteJl0qJi8sICcnKTtcblx0XHRpZiAoIWhyZWYpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0JHBlcm1hTGlua0ZpcnN0Q2hpbGQuYXR0cignaHJlZicsIGhyZWYpO1xuXHR9XG59O1xuXG5jb25zdCBvcGVuU2VhcmNoSW5OZXdUYWIgPSAoJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KTogdm9pZCA9PiB7XG5cdC8qKlxuXHQgKiBPcGVuIHNlYXJjaCByZXN1bHRzIGluIGEgbmV3IHRhYiBvciB3aW5kb3dcblx0ICogd2hlbiBob2xkaW5nIGRvd24gdGhlIEN0cmwga2V5IChieSBUaW1lc2hpZnRlcilcblx0ICovXG5cdCRib2R5XG5cdFx0LmZpbmQoJyNzZWFyY2gsI3NlYXJjaGJveCwjc2VhcmNoZm9ybSwuc2VhcmNoLXR5cGVzLCNzZWFyY2gtdHlwZXMnKVxuXHRcdC5vbigna2V5ZG93biBrZXl1cCBtb3VzZWRvd24nLCAoZXZlbnQ6IEpRdWVyeS5UcmlnZ2VyZWRFdmVudDxIVE1MRWxlbWVudD4pOiB2b2lkID0+IHtcblx0XHRcdGNvbnN0IHtjdHJsS2V5LCBtZXRhS2V5LCB0YXJnZXR9ID0gZXZlbnQ7XG5cdFx0XHQkKHRhcmdldCkuYXR0cigndGFyZ2V0JywgY3RybEtleSA/PyBtZXRhS2V5ID8gJ19ibGFuaycgOiAnJyk7XG5cdFx0fSk7XG59O1xuXG5jb25zdCB0aXRsZUNsZWFuVXAgPSAoJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KTogdm9pZCA9PiB7XG5cdC8qKlxuXHQgKiBDbGVhbnVwIHRpdGxlIGZvciBhbGwgcGFnZXNcblx0ICovXG5cdGlmIChVUkxfRElGRiB8fCBXR19BQ1RJT04gIT09ICd2aWV3JyB8fCAhWzYsIDExOF0uaW5jbHVkZXMoV0dfTkFNRVNQQUNFX05VTUJFUikpIHtcblx0XHRyZXR1cm47XG5cdH1cblx0Y29uc3QgZnVsbFBhZ2VOYW1lOiBzdHJpbmcgPSBuZXcgbXcuVGl0bGUoV0dfUEFHRV9OQU1FKS5nZXRQcmVmaXhlZFRleHQoKTtcblx0Y29uc3QgJGZpcnN0SGVhZGluZzogSlF1ZXJ5ID0gJGJvZHkuZmluZCgnLmZpcnN0SGVhZGluZycpO1xuXHRjb25zdCBkb2N1bWVudFRpdGxlOiBzdHJpbmcgPSBkb2N1bWVudC50aXRsZTtcblx0Y29uc3QgcGFnZVRpdGxlOiBzdHJpbmcgPSAkZmlyc3RIZWFkaW5nLnRleHQoKTtcblx0Y29uc3QgcmVwbGFjZVRpdGxlID0gKHRpdGxlOiBzdHJpbmcpOiBzdHJpbmcgPT4gdGl0bGUucmVwbGFjZShwYWdlVGl0bGUsIGZ1bGxQYWdlTmFtZSk7XG5cdGRvY3VtZW50LnRpdGxlID0gcmVwbGFjZVRpdGxlKGRvY3VtZW50VGl0bGUpO1xuXHQkZmlyc3RIZWFkaW5nLnRleHQocmVwbGFjZVRpdGxlKHBhZ2VUaXRsZSkpO1xufTtcblxuY29uc3QgdW5paGFuUG9wdXAgPSAoJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KTogdm9pZCA9PiB7XG5cdC8qKlxuXHQgKiBEaXNwbGF5IHRpdGxlPSguKikgb2YgPHNwYW4gY2xhc3M9XCJpbmxpbmUtdW5paGFuXCI+IGFmdGVyIHRoZW0uXG5cdCAqIChiZXRhIHRlc3QpXG5cdCAqL1xuXHQvLyBEbyBub3QgZGlzcGxheSBvbiBTcGVjaWFsIFBhZ2VzXG5cdGlmIChXR19OQU1FU1BBQ0VfTlVNQkVSIDwgMCkge1xuXHRcdHJldHVybjtcblx0fVxuXHQkYm9keS5maW5kKCdhdHRyLCAuaW5saW5lLXVuaWhhbicpLmVhY2goKF9pbmRleDogbnVtYmVyLCBlbGVtZW50OiBIVE1MRWxlbWVudCk6IHZvaWQgPT4ge1xuXHRcdGNvbnN0ICRlbGVtZW50OiBKUXVlcnkgPSAkKGVsZW1lbnQpO1xuXHRcdGNvbnN0IHRpdGxlOiBzdHJpbmcgfCB1bmRlZmluZWQgPSAkZWxlbWVudC5hdHRyKCd0aXRsZScpO1xuXHRcdGlmICghdGl0bGUpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0dm9pZCBtdy5sb2FkZXIudXNpbmcoJ29vanMtdWktY29yZScpLnRoZW4oKCk6IHZvaWQgPT4ge1xuXHRcdFx0Y29uc3QgcG9wdXA6IE9PLnVpLlBvcHVwV2lkZ2V0ID0gbmV3IE9PLnVpLlBvcHVwV2lkZ2V0KHtcblx0XHRcdFx0JGNvbnRlbnQ6ICQoPHA+e3RpdGxlfTwvcD4pIGFzIEpRdWVyeSxcblx0XHRcdFx0bGFiZWw6IGdldE1lc3NhZ2UoJ05vdGUnKSxcblx0XHRcdFx0YW5jaG9yOiB0cnVlLFxuXHRcdFx0XHRoZWFkOiB0cnVlLFxuXHRcdFx0XHRwYWRkZWQ6IHRydWUsXG5cdFx0XHR9KTtcblx0XHRcdCRlbGVtZW50LmFwcGVuZChwb3B1cC4kZWxlbWVudCkub24oJ2NsaWNrJywgKCk6IHZvaWQgPT4ge1xuXHRcdFx0XHRwb3B1cC50b2dnbGUoKTtcblx0XHRcdH0pO1xuXHRcdH0pO1xuXHR9KTtcbn07XG5cbmNvbnN0IGZpeExvY2F0aW9uSGFzaCA9ICgpOiB2b2lkID0+IHtcblx0Lyog5L+u5q2j5oqY5Y+g5ZCO5a6a5L2N5Y+Y5YyWICovXG5cdGlmIChsb2NhdGlvbi5oYXNoKSB7XG5cdFx0bG9jYXRpb24uaHJlZiA9IGxvY2F0aW9uLmhhc2g7XG5cdH1cbn07XG5cbmNvbnN0IGhpZGVOZXdVc2Vyc0xvZyA9ICgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkID0+IHtcblx0Lyog5Li05pe277ya56aB5q2i55So5oi35p+l55yL55So5oi35Yib5bu65pel5b+XICovXG5cdGlmIChXR19DQU5PTklDQUxfU1BFQ0lBTF9QQUdFX05BTUUgIT09ICdMb2cnKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdGNvbnN0ICRuZXdVc2Vyc0xvZzogSlF1ZXJ5ID0gJGJvZHkuZmluZCgnaW5wdXRbbmFtZT1cIndwZmlsdGVyc1tdXCJdW3ZhbHVlPW5ld3VzZXJzXScpO1xuXHQkbmV3VXNlcnNMb2cucHJvcCh7XG5cdFx0Y2hlY2tlZDogMCxcblx0XHRkaXNhYmxlZDogJ2Rpc2FibGVkJyxcblx0fSk7XG59O1xuXG5jb25zdCB0b2dnbGVMaW5rID0gKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQgPT4ge1xuXHQvKiDosIPmlbTmipjlj6DmjInpkq7nmoTpopzoibIgKi9cblx0Y29uc3QgJHRvZ2dsZXI6IEpRdWVyeSA9ICRib2R5LmZpbmQoJy5tdy1jb2xsYXBzaWJsZS10b2dnbGUsIC5nYWRnZXQtY29sbGFwc2libGUtdG9nZ2xlcicpO1xuXHRpZiAoJHRvZ2dsZXIubGVuZ3RoICYmICR0b2dnbGVyLnBhcmVudCgpWzBdPy5zdHlsZS5jb2xvcikge1xuXHRcdCR0b2dnbGVyLmZpbmQoJ2EnKS5jc3MoJ2NvbG9yJywgJ2luaGVyaXQnKTtcblx0fVxufTtcblxuZXhwb3J0IHtcblx0bG9hZFdpdGhVUkwsXG5cdG5vUGVybVdhcm5pbmcsXG5cdGhpZ2hMaWdodFJldixcblx0YWRkVGFyZ2V0QmxhbmssXG5cdHJlbW92ZVRpdGxlRnJvbVBlcm1hbGluayxcblx0b3BlblNlYXJjaEluTmV3VGFiLFxuXHR0aXRsZUNsZWFuVXAsXG5cdHVuaWhhblBvcHVwLFxuXHRmaXhMb2NhdGlvbkhhc2gsXG5cdGhpZGVOZXdVc2Vyc0xvZyxcblx0dG9nZ2xlTGluayxcbn07XG4iLCAiaW1wb3J0IHtsb2NhbGl6ZX0gZnJvbSAnZXh0LmdhZGdldC5pMThuJztcblxuY29uc3QgZ2V0STE4bk1lc3NhZ2VzID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdE5vdGU6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnTm90ZTogJyxcblx0XHRcdCd6aC1oYW5zJzogJ+azqOmHiu+8micsXG5cdFx0XHQnemgtaGFudCc6ICfms6jph4vvvJonLFxuXHRcdH0pLFxuXHRcdE5vUGVybUVycm9yMDogbG9jYWxpemUoe1xuXHRcdFx0J3poLWhhbnMnOiAn5Zug5oqA5pyv5Y6f5Zug77yM5oKo5rKh5pyJ5p2D6ZmQ6K6/6Zeu55u45YWz6aG16Z2i44CC6Iul5pyJ55aR6Zeu77yM6K+35LiO5rGC6Ze755m+56eR6L+Q6JCl6ICF6IGU57O744CCJyxcblx0XHRcdCd6aC1oYW50JzogJ+WboOaKgOihk+WOn+WboO+8jOaCqOaykuacieasiumZkOioquWVj+ebuOmXnOmggemdouOAguiLpeacieeWkeWVj++8jOiri+iIh+axguiBnueZvuenkemBi+eHn+iAheiBr+ezu+OAgicsXG5cdFx0fSksXG5cdFx0Tm9QZXJtRXJyb3IxOiBsb2NhbGl6ZSh7XG5cdFx0XHQnemgtaGFucyc6ICfmgqjmsqHmnInmnYPpmZDorr/pl67nm7jlhbPpobXpnaLjgILoi6XmgqjmmK/otYTmt7HnvJbogIXvvIzor7fkuI7msYLpl7vnmb7np5HmioDmnK/lm6LpmJ/ogZTns7vvvIzku6Xojrflj5bmnYPpmZDjgIInLFxuXHRcdFx0J3poLWhhbnQnOiAn5oKo5rKS5pyJ5qyK6ZmQ6Kiq5ZWP55u46Zec6aCB6Z2i44CC6Iul5oKo5piv6LOH5rex57eo6ICF77yM6KuL6IiH5rGC6IGe55m+56eR5oqA6KGT5ZyY6ZqK6IGv57O777yM5Lul542y5Y+W5qyK6ZmQ44CCJyxcblx0XHR9KSxcblx0XHROb1Blcm1FcnJvcjI6IGxvY2FsaXplKHtcblx0XHRcdCd6aC1oYW5zJzogJ+aCqOeahOe9kee7nOeOr+Wig+WtmOWcqOmjjumZqe+8jOivt+eZu+W9leWQjue7p+e7reS9v+eUqOOAguiLpeaCqOayoeacieaxgumXu+eZvuenkei0puWPt++8jOivt+azqOWGjOWQjueZu+W9leOAgicsXG5cdFx0XHQnemgtaGFudCc6ICfmgqjnmoTntrLot6/nkrDlooPlrZjlnKjpoqjpmqrvvIzoq4vnmbvlhaXlvoznubznuozkvb/nlKjjgILoi6XmgqjmspLmnInmsYLogZ7nmb7np5Hos6zomZ/vvIzoq4vms6jlhorlvoznmbvpjITjgIInLFxuXHRcdH0pLFxuXHRcdE5vUGVybUVycm9yMzogbG9jYWxpemUoe1xuXHRcdFx0J3poLWhhbnMnOiAn55u45YWz5Yqf6IO95LuF5ZCR5rOo5YaM55So5oi35byA5pS+77yM6K+355m75b2V5ZCO57un57ut5L2/55So44CC6Iul5oKo5rKh5pyJ5rGC6Ze755m+56eR6LSm5Y+377yM6K+35rOo5YaM5ZCO55m75b2V44CCJyxcblx0XHRcdCd6aC1oYW50JzogJ+ebuOmXnOWKn+iDveWDheWQkeazqOWGiueUqOaItumWi+aUvu+8jOiri+eZu+WFpeW+jOe5vOe6jOS9v+eUqOOAguiLpeaCqOaykuacieaxguiBnueZvuenkeizrOiZn++8jOiri+azqOWGiuW+jOeZu+mMhOOAgicsXG5cdFx0fSksXG5cdFx0Tm9QZXJtRXJyb3I0OiBsb2NhbGl6ZSh7XG5cdFx0XHQnemgtaGFucyc6ICfmgqjmsqHmnInmnYPpmZDorr/pl67nm7jlhbPpobXpnaLjgILoi6XmnInnlpHpl67vvIzor7fkuI7msYLpl7vnmb7np5Hov5DokKXogIXogZTns7vjgIInLFxuXHRcdFx0J3poLWhhbnQnOiAn5oKo5rKS5pyJ5qyK6ZmQ6Kiq5ZWP55u46Zec6aCB6Z2i44CC6Iul5pyJ55aR5ZWP77yM6KuL6IiH5rGC6IGe55m+56eR6YGL54ef6ICF6IGv57O744CCJyxcblx0XHR9KSxcblx0fTtcbn07XG5cbmNvbnN0IGkxOG5NZXNzYWdlcyA9IGdldEkxOG5NZXNzYWdlcygpO1xuXG5jb25zdCBnZXRNZXNzYWdlOiBHZXRNZXNzYWdlczx0eXBlb2YgaTE4bk1lc3NhZ2VzPiA9IChrZXkpID0+IHtcblx0cmV0dXJuIGkxOG5NZXNzYWdlc1trZXldIHx8IGtleTtcbn07XG5cbmV4cG9ydCB7Z2V0TWVzc2FnZX07XG4iLCAiaW1wb3J0IHtXR19TS0lOfSBmcm9tICcuL2NvbnN0YW50JztcbmltcG9ydCB7dGlwcHl9IGZyb20gJ2V4dC5nYWRnZXQuVGlwcHknO1xuXG5jb25zdCBnZXRDb250ZW50ID0gKHJlZmVyZW5jZTogRWxlbWVudCk6IHN0cmluZyA9PiB7XG5cdGNvbnN0IGxhYmVsOiBzdHJpbmcgfCBudWxsID0gcmVmZXJlbmNlLmdldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpO1xuXHRjb25zdCB0aXRsZTogc3RyaW5nIHwgbnVsbCA9IHJlZmVyZW5jZS5nZXRBdHRyaWJ1dGUoJ2FsdCcpID8/IHJlZmVyZW5jZS5nZXRBdHRyaWJ1dGUoJ3RpdGxlJyk7XG5cblx0cmV0dXJuIChsYWJlbCA9PT0gdGl0bGUgPyBsYWJlbCA6IHRpdGxlIHx8IGxhYmVsKSB8fCAocmVmZXJlbmNlLnRleHRDb250ZW50IGFzIHN0cmluZyk7XG59O1xuXG5jb25zdCBvbkNyZWF0ZUNhbGxiYWNrID0gKGluc3RhbmNlOiBSZXR1cm5UeXBlPHR5cGVvZiB0aXBweT5bMF0pOiB2b2lkID0+IHtcblx0Y29uc3Qge3JlZmVyZW5jZX0gPSBpbnN0YW5jZTtcblx0cmVmZXJlbmNlLnNldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcsIGdldENvbnRlbnQocmVmZXJlbmNlKSk7XG5cdHJlZmVyZW5jZS5yZW1vdmVBdHRyaWJ1dGUoJ3RpdGxlJyk7XG59O1xuXG5jb25zdCBvblNob3dDYWxsYmFjayA9IChpbnN0YW5jZTogUmV0dXJuVHlwZTx0eXBlb2YgdGlwcHk+WzBdKTogdm9pZCA9PiB7XG5cdG9uQ3JlYXRlQ2FsbGJhY2soaW5zdGFuY2UpO1xuXHRpbnN0YW5jZS5zZXRDb250ZW50KGdldENvbnRlbnQoaW5zdGFuY2UucmVmZXJlbmNlKSk7XG59O1xuXG5jb25zdCB0aXBweUZvckNpdGl6ZW5IZWFkZXIgPSAoJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KTogdm9pZCA9PiB7XG5cdGlmIChXR19TS0lOICE9PSAnY2l0aXplbicpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRmb3IgKGNvbnN0IGVsZW1lbnQgb2YgJGJvZHkuZmluZChcblx0XHQnLmNpdGl6ZW4taGVhZGVyIGxhYmVsW3RpdGxlXSwuY2l0aXplbi1oZWFkZXIgLm13LWVjaG8tbm90aWZpY2F0aW9ucy1iYWRnZSwuY2l0aXplbi1oZWFkZXJfX2xvZ28gYSwucGFnZS1hY3Rpb25zPm5hdj51bD5saSBhLC5wYWdlLWFjdGlvbnNfX2J1dHRvbidcblx0KSkge1xuXHRcdGNvbnN0ICRlbGVtZW50OiBKUXVlcnkgPSAkKGVsZW1lbnQpO1xuXHRcdGxldCB0aXRsZTogc3RyaW5nIHwgdW5kZWZpbmVkID0gJGVsZW1lbnQuYXR0cigndGl0bGUnKTtcblx0XHRpZiAoIXRpdGxlKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHR0aXRsZSA9IHRpdGxlLnJlcGxhY2UoL1xccyo/XFxbLis/XSQvLCAnJyk7XG5cblx0XHQkZWxlbWVudC5hdHRyKHtcblx0XHRcdCdhcmlhLWxhYmVsJzogdGl0bGUsXG5cdFx0XHR0aXRsZTogJycsXG5cdFx0fSk7XG5cdFx0dGlwcHkoJGVsZW1lbnQuZ2V0KDApIGFzIEhUTUxFbGVtZW50LCB7XG5cdFx0XHRhcnJvdzogdHJ1ZSxcblx0XHRcdGNvbnRlbnQ6IHRpdGxlLFxuXHRcdFx0cGxhY2VtZW50OiAnYm90dG9tJyxcblx0XHRcdG9uQ3JlYXRlOiBvbkNyZWF0ZUNhbGxiYWNrLFxuXHRcdFx0b25IaWRkZW46IG9uQ3JlYXRlQ2FsbGJhY2ssXG5cdFx0XHRvblNob3c6IG9uU2hvd0NhbGxiYWNrLFxuXHRcdH0pO1xuXHR9XG59O1xuXG5jb25zdCB0aXBweUZvckV4dGVuc2lvbiA9IGFzeW5jICgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0YXdhaXQgbXcubG9hZGVyLnVzaW5nKCdleHQuQ29sbGFwc2libGVTaWRlYmFyLmpzJyk7XG5cdHRpcHB5KCcjc2lkZWJhckJ1dHRvbicsIHtcblx0XHRhcnJvdzogdHJ1ZSxcblx0XHRjb250ZW50OiBnZXRDb250ZW50LFxuXHRcdHBsYWNlbWVudDogJ2xlZnQnLFxuXHRcdG9uQ3JlYXRlOiBvbkNyZWF0ZUNhbGxiYWNrLFxuXHRcdG9uSGlkZGVuOiBvbkNyZWF0ZUNhbGxiYWNrLFxuXHRcdG9uU2hvdzogb25TaG93Q2FsbGJhY2ssXG5cdH0pO1xuXG5cdGlmIChXR19TS0lOID09PSAndmVjdG9yJykge1xuXHRcdGF3YWl0IG13LmxvYWRlci51c2luZygnZXh0LkNvbGxhcHNpYmxlU2lkZWJhci52ZWN0b3InKTtcblx0XHR0aXBweSgnI3NpZGViYXJDb2xsYXBzZScsIHtcblx0XHRcdGFycm93OiB0cnVlLFxuXHRcdFx0Y29udGVudDogZ2V0Q29udGVudCxcblx0XHRcdHBsYWNlbWVudDogJ3JpZ2h0Jyxcblx0XHRcdG9uQ3JlYXRlOiBvbkNyZWF0ZUNhbGxiYWNrLFxuXHRcdFx0b25IaWRkZW46IG9uQ3JlYXRlQ2FsbGJhY2ssXG5cdFx0XHRvblNob3c6IG9uU2hvd0NhbGxiYWNrLFxuXHRcdH0pO1xuXHR9XG5cblx0YXdhaXQgbXcubG9hZGVyLnVzaW5nKCdleHQuRGFya01vZGUnKTtcblx0dGlwcHkoJyNkYXJrbW9kZS1idXR0b24nLCB7XG5cdFx0YXJyb3c6IHRydWUsXG5cdFx0Y29udGVudDogZ2V0Q29udGVudCxcblx0XHRwbGFjZW1lbnQ6ICdsZWZ0Jyxcblx0XHRvbkNyZWF0ZTogb25DcmVhdGVDYWxsYmFjayxcblx0XHRvbkhpZGRlbjogb25DcmVhdGVDYWxsYmFjayxcblx0XHRvblNob3c6IG9uU2hvd0NhbGxiYWNrLFxuXHR9KTtcbn07XG5cbmV4cG9ydCB7dGlwcHlGb3JDaXRpemVuSGVhZGVyLCB0aXBweUZvckV4dGVuc2lvbn07XG4iLCAiY29uc3QgZGVwcmVjYXRlZEZ1bmN0aW9ucyA9ICgpOiB2b2lkID0+IHtcblx0LyohXG5cdCAqIG1haW50ZW5hbmNlOiBTb21lIHVzZXIgc2NyaXB0cyBtYXkgYmUgdXNpbmcgdGhlIGZvbGxvd2luZyBkZXByZWNhdGVkIGZ1bmN0aW9ucy5cblx0ICogVGhlc2UgZnVuY3Rpb25zIGFyZSBubyBsb25nZXIgc3VwcG9ydGVkIGFuZCBzaG91bGQgYmUgdXBkYXRlZC5cblx0ICovXG5cdG13LmxvZy5kZXByZWNhdGUoXG5cdFx0d2luZG93LFxuXHRcdCdpbXBvcnRTY3JpcHQnLFxuXHRcdCh0aXRsZTogc3RyaW5nKTogSFRNTFNjcmlwdEVsZW1lbnQgPT4ge1xuXHRcdFx0cmV0dXJuIG13LmxvYWRlci5hZGRTY3JpcHRUYWcoXG5cdFx0XHRcdG13LnV0aWwuZ2V0VXJsKHRpdGxlLCB7XG5cdFx0XHRcdFx0YWN0aW9uOiAncmF3Jyxcblx0XHRcdFx0XHRjdHlwZTogJ3RleHQvamF2YXNjcmlwdCcsXG5cdFx0XHRcdFx0bWF4YWdlOiAnMzYwMCcsXG5cdFx0XHRcdFx0c21heGFnZTogJzM2MDAnLFxuXHRcdFx0XHR9KVxuXHRcdFx0KTtcblx0XHR9LFxuXHRcdCdVc2UgbXcubG9hZGVyLmFkZFNjcmlwdFRhZygpIGluc3RlYWQnXG5cdCk7XG5cdG13LmxvZy5kZXByZWNhdGUoXG5cdFx0d2luZG93LFxuXHRcdCdpbXBvcnRTdHlsZXNoZWV0Jyxcblx0XHQodGl0bGU6IHN0cmluZyk6IEhUTUxMaW5rRWxlbWVudCA9PiB7XG5cdFx0XHRyZXR1cm4gbXcubG9hZGVyLmFkZExpbmtUYWcoXG5cdFx0XHRcdG13LnV0aWwuZ2V0VXJsKHRpdGxlLCB7XG5cdFx0XHRcdFx0YWN0aW9uOiAncmF3Jyxcblx0XHRcdFx0XHRjdHlwZTogJ3RleHQvY3NzJyxcblx0XHRcdFx0XHRtYXhhZ2U6ICczNjAwJyxcblx0XHRcdFx0XHRzbWF4YWdlOiAnMzYwMCcsXG5cdFx0XHRcdH0pLFxuXHRcdFx0XHQndGV4dC9jc3MnXG5cdFx0XHQpO1xuXHRcdH0sXG5cdFx0J1VzZSBtdy5sb2FkZXIuYWRkTGlua1RhZygpIGluc3RlYWQnXG5cdCk7XG5cdG13LmxvZy5kZXByZWNhdGUoXG5cdFx0d2luZG93LFxuXHRcdCdpbXBvcnRTY3JpcHRVUkknLFxuXHRcdChtb2R1bGVzOiBzdHJpbmcpOiBIVE1MU2NyaXB0RWxlbWVudCA9PiB7XG5cdFx0XHRyZXR1cm4gbXcubG9hZGVyLmFkZFNjcmlwdFRhZyhtdy51dGlsLndpa2lVcmxlbmNvZGUobW9kdWxlcykpO1xuXHRcdH0sXG5cdFx0J1VzZSBtdy5sb2FkZXIuYWRkU2NyaXB0VGFnKCkgb3IgbXcubG9hZGVyLmdldFNjcmlwdCgpIGluc3RlYWQnXG5cdCk7XG5cdG13LmxvZy5kZXByZWNhdGUoXG5cdFx0d2luZG93LFxuXHRcdCdpbXBvcnRTdHlsZXNoZWV0VVJJJyxcblx0XHQobW9kdWxlczogc3RyaW5nKTogSFRNTExpbmtFbGVtZW50ID0+IHtcblx0XHRcdHJldHVybiBtdy5sb2FkZXIuYWRkTGlua1RhZyhtdy51dGlsLndpa2lVcmxlbmNvZGUobW9kdWxlcyksICd0ZXh0L2NzcycpO1xuXHRcdH0sXG5cdFx0J1VzZSBtdy5sb2FkZXIuYWRkTGlua1RhZygpIGluc3RlYWQnXG5cdCk7XG5cdG13LmxvZy5kZXByZWNhdGUoXG5cdFx0d2luZG93LFxuXHRcdC8vIEB0cy1leHBlY3QtZXJyb3IgVFMyMzQ1XG5cdFx0J2ltcG9ydFNjcmlwdENhbGxiYWNrJyxcblx0XHQodGl0bGU6IHN0cmluZywgcmVhZHk6IG5ldmVyKTogdm9pZCA9PiB7XG5cdFx0XHR2b2lkIG13LmxvYWRlclxuXHRcdFx0XHQuZ2V0U2NyaXB0KFxuXHRcdFx0XHRcdG13LnV0aWwuZ2V0VXJsKHRpdGxlLCB7XG5cdFx0XHRcdFx0XHRhY3Rpb246ICdyYXcnLFxuXHRcdFx0XHRcdFx0Y3R5cGU6ICd0ZXh0L2phdmFzY3JpcHQnLFxuXHRcdFx0XHRcdFx0bWF4YWdlOiAnMzYwMCcsXG5cdFx0XHRcdFx0XHRzbWF4YWdlOiAnMzYwMCcsXG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0KVxuXHRcdFx0XHQudGhlbihyZWFkeSk7XG5cdFx0fSxcblx0XHQnVXNlIG13LmxvYWRlci5nZXRTY3JpcHQoKSBpbnN0ZWFkJ1xuXHQpO1xuXHRtdy5sb2cuZGVwcmVjYXRlKFxuXHRcdHdpbmRvdyxcblx0XHQvLyBAdHMtZXhwZWN0LWVycm9yIFRTMjM0NVxuXHRcdCdpbXBvcnRTY3JpcHRVUklDYWxsYmFjaycsXG5cdFx0KHVybDogc3RyaW5nLCByZWFkeTogbmV2ZXIpOiB2b2lkID0+IHtcblx0XHRcdHZvaWQgbXcubG9hZGVyLmdldFNjcmlwdCh1cmwpLnRoZW4ocmVhZHkpO1xuXHRcdH0sXG5cdFx0J1VzZSBtdy5sb2FkZXIuZ2V0U2NyaXB0KCkgaW5zdGVhZCdcblx0KTtcblx0LyoqXG5cdCAqIG1haW50ZW5hbmNlOiBTb21lIHVzZXIgc2NyaXB0cyBtYXkgYmUgdXNpbmcgdGhlIGZvbGxvd2luZyBkZXByZWNhdGVkIGZ1bmN0aW9ucy5cblx0ICogVGhlc2UgZnVuY3Rpb25zIGFyZSBrZXB0IGZvciBjb21wYWJpbGl0eS5cblx0ICovXG5cdC8vIG13LmxvZy5kZXByZWNhdGUod2luZG93LCAnSlNDb25maWcnLCB7fSwgJ1VzZSB7fSBpbnN0ZWFkJyk7XG5cdC8qKlxuXHQgKiB3Z1UqUyBmdW5jdGlvbnMgaGF2ZSBiZWVuIHNwbGl0IHRvIGEgc2VwZXJhdGUgZ2FkZ2V0IChleHQuZ2FkZ2V0LmkxOG4pLlxuXHQgKi9cbn07XG5cbmV4cG9ydCB7ZGVwcmVjYXRlZEZ1bmN0aW9uc307XG4iLCAiaW1wb3J0IHtcblx0YWRkVGFyZ2V0QmxhbmssXG5cdGZpeExvY2F0aW9uSGFzaCxcblx0aGlkZU5ld1VzZXJzTG9nLFxuXHRoaWdoTGlnaHRSZXYsXG5cdGxvYWRXaXRoVVJMLFxuXHRub1Blcm1XYXJuaW5nLFxuXHRvcGVuU2VhcmNoSW5OZXdUYWIsXG5cdHJlbW92ZVRpdGxlRnJvbVBlcm1hbGluayxcblx0dGl0bGVDbGVhblVwLFxuXHR0b2dnbGVMaW5rLFxuXHR1bmloYW5Qb3B1cCxcbn0gZnJvbSAnLi9tb2R1bGVzL2NvcmUnO1xuaW1wb3J0IHt0aXBweUZvckNpdGl6ZW5IZWFkZXIsIHRpcHB5Rm9yRXh0ZW5zaW9ufSBmcm9tICcuL21vZHVsZXMvdGlwcHknO1xuaW1wb3J0IHtkZXByZWNhdGVkRnVuY3Rpb25zfSBmcm9tICcuL21vZHVsZXMvZGVwcmVjYXRlZEZ1bmN0aW9ucyc7XG5cbihmdW5jdGlvbiBzaXRlQ29tbW9uKCk6IHZvaWQge1xuXHRpZiAobXcuY29uZmlnLmdldCgnd2dTaXRlQ29tbW9uSW5zdGFsbGVkJykpIHtcblx0XHRyZXR1cm47XG5cdH1cblx0bXcuY29uZmlnLnNldCgnd2dTaXRlQ29tbW9uSW5zdGFsbGVkJywgdHJ1ZSk7XG5cblx0Ly8gQ29yZSBtb2R1bGVzXG5cdGxvYWRXaXRoVVJMKCk7XG5cdG5vUGVybVdhcm5pbmcoKTtcblx0Zml4TG9jYXRpb25IYXNoKCk7XG5cblx0JCgoKTogdm9pZCA9PiB7XG5cdFx0Y29uc3QgJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+ID0gJCgnYm9keScpO1xuXG5cdFx0Ly8gQ29yZSBtb2R1bGVzIChuZWVkICQucmVhZHkpXG5cdFx0aGlnaExpZ2h0UmV2KCRib2R5KTtcblx0XHRhZGRUYXJnZXRCbGFuaygkYm9keSk7XG5cdFx0cmVtb3ZlVGl0bGVGcm9tUGVybWFsaW5rKCRib2R5KTtcblx0XHRvcGVuU2VhcmNoSW5OZXdUYWIoJGJvZHkpO1xuXHRcdHRpdGxlQ2xlYW5VcCgkYm9keSk7XG5cdFx0dW5paGFuUG9wdXAoJGJvZHkpO1xuXHRcdGhpZGVOZXdVc2Vyc0xvZygkYm9keSk7XG5cdFx0dG9nZ2xlTGluaygkYm9keSk7XG5cblx0XHQvLyBUaXBweS1yZWxhdGVkIGNvZGVzIChuZWVkICQucmVhZHkpXG5cdFx0dGlwcHlGb3JDaXRpemVuSGVhZGVyKCRib2R5KTtcblx0fSk7XG5cblx0Ly8gRGVwcmVjYXRlZCBmdW5jdGlvbnNcblx0ZGVwcmVjYXRlZEZ1bmN0aW9ucygpO1xuXG5cdC8vIFRpcHB5LXJlbGF0ZWQgY29kZXNcblx0dm9pZCB0aXBweUZvckV4dGVuc2lvbigpO1xufSkoKTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFNQSxXQUEwQkMsR0FBR0MsS0FBS0MsY0FBYyxNQUFNO0FBQzVELElBQU1DLGdCQUErQkgsR0FBR0MsS0FBS0MsY0FBYyxXQUFXO0FBQ3RFLElBQU1FLGNBQTZCSixHQUFH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MkosVUFBVUMsR0FBRyxFQUFFcEosS0FBS2tKLEtBQUs7SUFDekM7SUFDQTtFQUNEO0FBU0Q7O0NDdkVDLFNBQVNHLGFBQW1CO0FBQzVCLE1BQUlsTSxHQUFHVyxPQUFPQyxJQUFJLHVCQUF1QixHQUFHO0FBQzNDO0VBQ0Q7QUFDQVosS0FBR1csT0FBT3dMLElBQUkseUJBQXlCLElBQUk7QUFHM0NoSyxjQUFZO0FBQ1pzQyxnQkFBYztBQUNkc0Usa0JBQWdCO0FBRWhCNUMsSUFBRSxNQUFZO0FBQ2IsVUFBTWIsUUFBaUNhLEVBQUUsTUFBTTtBQUcvQ2QsaUJBQWFDLEtBQUs7QUFDbEJRLG1CQUFlUixLQUFLO0FBQ3BCdUIsNkJBQXlCdkIsS0FBSztBQUM5QjJCLHVCQUFtQjNCLEtBQUs7QUFDeEJnQyxpQkFBYWhDLEtBQUs7QUFDbEJ5QyxnQkFBWXpDLEtBQUs7QUFDakIyRCxvQkFBZ0IzRCxLQUFLO0FBQ3JCZ0UsZUFBV2hFLEtBQUs7QUFHaEJrRiwwQkFBc0JsRixLQUFLO0VBQzVCLENBQUM7QUFHRGlHLHNCQUFvQjtBQUdwQixPQUFLTCxrQkFBa0I7QUFDeEIsR0FBRzsiLAogICJuYW1lcyI6IFsiVVJMX0RJRkYiLCAibXciLCAidXRpbCIsICJnZXRQYXJhbVZhbHVlIiwgIlVSTF9ISUdITElHSFQiLCAiVVJMX0hJTElHSFQiLCAiVVJMX05PX1BFUk0iLCAiVVJMX1VTRSIsICJVUkxfV0lUSF9DU1MiLCAiVVJMX1dJVEhfSlMiLCAiVVJMX1dJVEhfTU9EVUxFIiwgIldHX0FDVElPTiIsICJjb25maWciLCAiZ2V0IiwgIldHX0NBTk9OSUNBTF9TUEVDSUFMX1BBR0VfTkFNRSIsICJXR19OQU1FU1BBQ0VfTlVNQkVSIiwgIldHX1BBR0VfTkFNRSIsICJXR19TQ1JJUFQiLCAiV0dfU0tJTiIsICJXR19VU0VSX05BTUUiLCAiaW1wb3J0X2V4dF9nYWRnZXQyIiwgIl9fdG9FU00iLCAicmVxdWlyZSIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJnZXRJMThuTWVzc2FnZXMiLCAiTm90ZSIsICJsb2NhbGl6ZSIsICJlbiIsICJOb1Blcm1FcnJvcjAiLCAiTm9QZXJtRXJyb3IxIiwgIk5vUGVybUVycm9yMiIsICJOb1Blcm1FcnJvcjMiLCAiTm9QZXJtRXJyb3I0IiwgImkxOG5NZXNzYWdlcyIsICJnZXRNZXNzYWdlIiwgImtleSIsICJsb2FkV2l0aFVSTCIsICJ0ZXN0IiwgImxvYWRlciIsICJsb2FkIiwgImdldFVybCIsICJhY3Rpb24iLCAiY3R5cGUiLCAibWF4YWdlIiwgInNtYXhhZ2UiLCAidXNpbmciLCAidGhlbiIsICJyZXF1aXJlMiIsICJ3Z1VzZXJOYW1lIiwgImVzY2FwZVJlZ0V4cCIsICJSRUdFWF9GSUxFIiwgIlJlZ0V4cCIsICJjb25jYXQiLCAiUkVHRVhfRVhUIiwgInBhdGgiLCAiX2l0ZXJhdG9yMiIsICJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsICJzcGxpdCIsICJfc3RlcDIiLCAicyIsICJuIiwgImRvbmUiLCAiX1JFR0VYX0ZJTEUkZXhlYyIsICJ1c2VGaWxlIiwgInZhbHVlIiwgIm5hbWUiLCAidG9TdHJpbmciLCAidHJpbSIsICJ3aGF0IiwgImV4ZWMiLCAiZW5jb2RlVVJJQ29tcG9uZW50IiwgImVyciIsICJlIiwgImYiLCAibm9QZXJtV2FybmluZyIsICJub3RpZnkiLCAidGFnIiwgInR5cGUiLCAibmV3VXJsIiwgImxvY2F0aW9uIiwgImhyZWYiLCAicmVwbGFjZSIsICJoaXN0b3J5IiwgInB1c2hTdGF0ZSIsICJkb2N1bWVudCIsICJ0aXRsZSIsICJoaWdoTGlnaHRSZXYiLCAiJGJvZHkiLCAiaGlnaGxpZ2h0IiwgIl9pdGVyYXRvcjMiLCAiX3N0ZXAzIiwgInZlcnNpb24iLCAiZmluZCIsICJwYXJlbnQiLCAiYWRkQ2xhc3MiLCAiYWRkVGFyZ2V0QmxhbmsiLCAiZmlsdGVyIiwgIl9pbmRleCIsICJlbGVtZW50IiwgImxpbmtIcmVmIiwgIiQiLCAiYXR0ciIsICJocmVmU3BsaXQiLCAibGVuZ3RoIiwgImhvc3QiLCAiaW5jbHVkZXMiLCAicHJvdG9jb2wiLCAiaG9zdG5hbWUiLCAidGFyZ2V0IiwgInJlbCIsICJyZW1vdmVUaXRsZUZyb21QZXJtYWxpbmsiLCAiJHBlcm1hTGluayIsICJfJHBlcm1hTGlua0ZpcnN0Q2hpbGQiLCAiJHBlcm1hTGlua0ZpcnN0Q2hpbGQiLCAib3BlblNlYXJjaEluTmV3VGFiIiwgIm9uIiwgImV2ZW50IiwgImN0cmxLZXkiLCAibWV0YUtleSIsICJ0aXRsZUNsZWFuVXAiLCAiZnVsbFBhZ2VOYW1lIiwgIlRpdGxlIiwgImdldFByZWZpeGVkVGV4dCIsICIkZmlyc3RIZWFkaW5nIiwgImRvY3VtZW50VGl0bGUiLCAicGFnZVRpdGxlIiwgInRleHQiLCAicmVwbGFjZVRpdGxlIiwgInVuaWhhblBvcHVwIiwgImVhY2giLCAiJGVsZW1lbnQiLCAicG9wdXAiLCAiT08iLCAidWkiLCAiUG9wdXBXaWRnZXQiLCAiJGNvbnRlbnQiLCAiZGVmYXVsdCIsICJjcmVhdGVFbGVtZW50IiwgImxhYmVsIiwgImFuY2hvciIsICJoZWFkIiwgInBhZGRlZCIsICJhcHBlbmQiLCAidG9nZ2xlIiwgImZpeExvY2F0aW9uSGFzaCIsICJoYXNoIiwgImhpZGVOZXdVc2Vyc0xvZyIsICIkbmV3VXNlcnNMb2ciLCAicHJvcCIsICJjaGVja2VkIiwgImRpc2FibGVkIiwgInRvZ2dsZUxpbmsiLCAiXyR0b2dnbGVyJHBhcmVudCQiLCAiJHRvZ2dsZXIiLCAic3R5bGUiLCAiY29sb3IiLCAiY3NzIiwgImltcG9ydF9leHRfZ2FkZ2V0MyIsICJnZXRDb250ZW50IiwgInJlZmVyZW5jZSIsICJfcmVmZXJlbmNlJGdldEF0dHJpYnUiLCAiZ2V0QXR0cmlidXRlIiwgInRleHRDb250ZW50IiwgIm9uQ3JlYXRlQ2FsbGJhY2siLCAiaW5zdGFuY2UiLCAic2V0QXR0cmlidXRlIiwgInJlbW92ZUF0dHJpYnV0ZSIsICJvblNob3dDYWxsYmFjayIsICJzZXRDb250ZW50IiwgInRpcHB5Rm9yQ2l0aXplbkhlYWRlciIsICJfaXRlcmF0b3I0IiwgIl9zdGVwNCIsICJ0aXBweSIsICJhcnJvdyIsICJjb250ZW50IiwgInBsYWNlbWVudCIsICJvbkNyZWF0ZSIsICJvbkhpZGRlbiIsICJvblNob3ciLCAidGlwcHlGb3JFeHRlbnNpb24iLCAiX3JlZiIsICJfYXN5bmNUb0dlbmVyYXRvciIsICJhcHBseSIsICJhcmd1bWVudHMiLCAiZGVwcmVjYXRlZEZ1bmN0aW9ucyIsICJsb2ciLCAiZGVwcmVjYXRlIiwgIndpbmRvdyIsICJhZGRTY3JpcHRUYWciLCAiYWRkTGlua1RhZyIsICJtb2R1bGVzIiwgIndpa2lVcmxlbmNvZGUiLCAicmVhZHkiLCAiZ2V0U2NyaXB0IiwgInVybCIsICJzaXRlQ29tbW9uIiwgInNldCJdCn0K

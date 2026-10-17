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
//! src/SiteCommon_JS/modules/core.ts
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
var import_ext_gadget = require("ext.gadget.Util");
var {
  wgAction,
  wgCanonicalSpecialPageName,
  wgNamespaceNumber,
  wgPageName,
  wgScript,
  wgUserName
} = mw.config.get();
var loadWithURL = /* @__PURE__ */ (function() {
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
          const modules = (0, import_ext_gadget.uniqueArray)(URL_WITH_MODULE.split(/[,|]/));
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
      var _iterator = _createForOfIteratorHelper(useFiles), _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done; ) {
          var _REGEX_FILE$exec;
          const useFile = _step.value;
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
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  });
  return function loadWithURL2() {
    return _ref.apply(this, arguments);
  };
})();
var highLightRev = ($body) => {
  const URL_HIGHLIGHT = mw.util.getParamValue("highlight");
  const URL_HILIGHT = mw.util.getParamValue("hilight");
  const highlight = URL_HIGHLIGHT !== null && URL_HIGHLIGHT !== void 0 ? URL_HIGHLIGHT : URL_HILIGHT;
  if (!highlight || wgAction !== "history") {
    return;
  }
  var _iterator2 = _createForOfIteratorHelper(highlight.split(",")), _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
      const version = _step2.value;
      $body.find("input[name=oldid][value=".concat(version, "]")).parent().addClass("not-patrolled");
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
};
var addTargetBlank = ($body) => {
  const elements = $body.find('a.external, a[rel="mw:ExtLink"]');
  var _iterator3 = _createForOfIteratorHelper(elements), _step3;
  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
      const element = _step3.value;
      if (!element.rel.includes("nofollow")) {
        continue;
      }
      element.target = "_blank";
      if (!element.rel.includes("noopener")) {
        element.rel += " noopener";
      }
      if (!element.rel.includes("noreferrer")) {
        element.rel += " noreferrer";
      }
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }
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
var import_ext_gadget2 = require("ext.gadget.Tippy");
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
  var _iterator4 = _createForOfIteratorHelper($body.find([".citizen-header .citizen-dropdown-summary", ".citizen-header .citizen-echo-notification-badge", ".citizen-header__logo a", ".page-actions>nav>ul>li a", ".page-actions__button"].join(","))), _step4;
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
      (0, import_ext_gadget2.tippy)($element.get(0), {
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
var tippyForExtension = /* @__PURE__ */ (function() {
  var _ref2 = _asyncToGenerator(function* () {
    const {
      skin
    } = mw.config.get();
    if (skin === "vector-2022") {
      return;
    }
    yield mw.loader.using("ext.CollapsibleSidebar.js");
    (0, import_ext_gadget2.tippy)("#sidebarButton", {
      arrow: true,
      content: getContent,
      placement: "left",
      onCreate: onCreateCallback,
      onHidden: onCreateCallback,
      onShow: onShowCallback
    });
    if (skin === "vector") {
      yield mw.loader.using("ext.CollapsibleSidebar.vector");
      (0, import_ext_gadget2.tippy)("#sidebarCollapse", {
        arrow: true,
        content: getContent,
        placement: "right",
        onCreate: onCreateCallback,
        onHidden: onCreateCallback,
        onShow: onShowCallback
      });
    }
    yield mw.loader.using("ext.DarkMode");
    (0, import_ext_gadget2.tippy)("#darkmode-button", {
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
})();
//! src/SiteCommon_JS/modules/clearExpiredLocalStorage.ts
var import_ext_gadget3 = require("ext.gadget.Util");
var clearExpiredLocalStorage = /* @__PURE__ */ (function() {
  var _ref3 = _asyncToGenerator(function* () {
    while (true) {
      yield mw.storage.clearExpired();
      yield (0, import_ext_gadget3.delay)(60 * 1e3);
    }
  });
  return function clearExpiredLocalStorage2() {
    return _ref3.apply(this, arguments);
  };
})();
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
  void (0, import_ext_gadget4.getBody)().then(($body) => {
    highLightRev($body);
    addTargetBlank($body);
    removeTitleFromPermalink($body);
    openSearchInNewTab($body);
    titleCleanUp($body);
    hideNewUsersLog($body);
    toggleLink($body);
    resizeJQueryUI($body);
    if (skin === "citizen") {
      tippyForCitizenHeader($body);
    }
  });
  deprecatedFunctions();
  void clearExpiredLocalStorage();
  if (!["vector-2022", "citizen"].includes(skin)) {
    void tippyForExtension();
  }
})();

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1NpdGVDb21tb25fSlMvbW9kdWxlcy9jb3JlLnRzIiwgInNyYy9TaXRlQ29tbW9uX0pTL21vZHVsZXMvdGlwcHkudHMiLCAic3JjL1NpdGVDb21tb25fSlMvbW9kdWxlcy9jbGVhckV4cGlyZWRMb2NhbFN0b3JhZ2UudHMiLCAic3JjL1NpdGVDb21tb25fSlMvbW9kdWxlcy9kZXByZWNhdGVkRnVuY3Rpb25zLnRzIiwgInNyYy9TaXRlQ29tbW9uX0pTL1NpdGVDb21tb25fSlMudHMiLCAic3JjL1NpdGVDb21tb25fSlMvbW9kdWxlcy9yZXNpemVKUXVlcnlVSS50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHt1bmlxdWVBcnJheX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxuY29uc3Qge3dnQWN0aW9uLCB3Z0Nhbm9uaWNhbFNwZWNpYWxQYWdlTmFtZSwgd2dOYW1lc3BhY2VOdW1iZXIsIHdnUGFnZU5hbWUsIHdnU2NyaXB0LCB3Z1VzZXJOYW1lfSA9IG13LmNvbmZpZy5nZXQoKTtcblxuY29uc3QgbG9hZFdpdGhVUkwgPSBhc3luYyAoKTogUHJvbWlzZTx2b2lkPiA9PiB7XG5cdGNvbnN0IFVSTF9XSVRIX0NTUzogc3RyaW5nIHwgbnVsbCA9IG13LnV0aWwuZ2V0UGFyYW1WYWx1ZSgnd2l0aENTUycpO1xuXHRjb25zdCBVUkxfV0lUSF9KUzogc3RyaW5nIHwgbnVsbCA9IG13LnV0aWwuZ2V0UGFyYW1WYWx1ZSgnd2l0aEpTJyk7XG5cdGNvbnN0IFVSTF9XSVRIX01PRFVMRTogc3RyaW5nIHwgbnVsbCA9IG13LnV0aWwuZ2V0UGFyYW1WYWx1ZSgnd2l0aE1vZHVsZScpO1xuXHQvKipcblx0ICogJndpdGhDU1M9IGFuZCAmd2l0aEpTPSBVUkwgcGFyYW1ldGVyc1xuXHQgKiBBbGxvdyB0byB0cnkgY3VzdG9tIHNjcmlwdHMgZnJvbSBNZWRpYVdpa2kgc3BhY2Vcblx0ICogd2l0aG91dCBlZGl0aW5nIHBlcnNvbmFsIC5jc3Mgb3IgLmpzIGZpbGVzXG5cdCAqL1xuXHRpZiAoVVJMX1dJVEhfQ1NTIHx8IFVSTF9XSVRIX0pTIHx8IFVSTF9XSVRIX01PRFVMRSkge1xuXHRcdGlmIChVUkxfV0lUSF9DU1MgJiYgL15NZWRpYVdpa2k6W14jJSY8PT5dKlxcLmNzcyQvLnRlc3QoVVJMX1dJVEhfQ1NTKSkge1xuXHRcdFx0bXcubG9hZGVyLmxvYWQoXG5cdFx0XHRcdG13LnV0aWwuZ2V0VXJsKFVSTF9XSVRIX0NTUywge1xuXHRcdFx0XHRcdGFjdGlvbjogJ3JhdycsXG5cdFx0XHRcdFx0Y3R5cGU6ICd0ZXh0L2NzcycsXG5cdFx0XHRcdFx0bWF4YWdlOiAnMzYwMCcsXG5cdFx0XHRcdFx0c21heGFnZTogJzM2MDAnLFxuXHRcdFx0XHR9KSxcblx0XHRcdFx0J3RleHQvY3NzJ1xuXHRcdFx0KTtcblx0XHR9XG5cdFx0aWYgKFVSTF9XSVRIX0pTIHx8IFVSTF9XSVRIX01PRFVMRSkge1xuXHRcdFx0Ly8gQHRzLWV4cGVjdC1lcnJvciBUUzYxMzNcblx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcblx0XHRcdGNvbnN0IHJlcXVpcmUgPSBhd2FpdCBtdy5sb2FkZXIudXNpbmcoJ2V4dC5nYWRnZXQuU2l0ZUNvbW1vbl9KUycpO1xuXG5cdFx0XHRpZiAoVVJMX1dJVEhfSlMgJiYgL15NZWRpYVdpa2k6W14jJSY8PT5dKlxcLmpzJC8udGVzdChVUkxfV0lUSF9KUykpIHtcblx0XHRcdFx0bXcubG9hZGVyLmxvYWQoXG5cdFx0XHRcdFx0bXcudXRpbC5nZXRVcmwoVVJMX1dJVEhfSlMsIHtcblx0XHRcdFx0XHRcdGFjdGlvbjogJ3JhdycsXG5cdFx0XHRcdFx0XHRjdHlwZTogJ3RleHQvamF2YXNjcmlwdCcsXG5cdFx0XHRcdFx0XHRtYXhhZ2U6ICczNjAwJyxcblx0XHRcdFx0XHRcdHNtYXhhZ2U6ICczNjAwJyxcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoVVJMX1dJVEhfTU9EVUxFICYmIC9eKGV4dFxcLigoPyEoZXh0XFwufFssfF0pKS4pKlssfF0/KSskLy50ZXN0KFVSTF9XSVRIX01PRFVMRSkpIHtcblx0XHRcdFx0Y29uc3QgbW9kdWxlcyA9IHVuaXF1ZUFycmF5KFVSTF9XSVRIX01PRFVMRS5zcGxpdCgvWyx8XS8pKTtcblx0XHRcdFx0bXcubG9hZGVyLmxvYWQobW9kdWxlcyk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdC8qKlxuXHQgKiBMb2FkIENTUyBhbmQgSlMgZmlsZXMgdGVtcG9yYXJpbHkgdGhyb3VnaCBVUkwuXG5cdCAqICZ1c2U9RmlsZTEuY3NzfEZpbGUyLmNzc3xGaWxlMy5qc1xuXHQgKi9cblx0Y29uc3QgVVJMX1VTRTogc3RyaW5nIHwgbnVsbCA9IG13LnV0aWwuZ2V0UGFyYW1WYWx1ZSgndXNlJyk7XG5cdGlmIChVUkxfVVNFKSB7XG5cdFx0Y29uc3Qgd2dVc2VyTmFtZUV4Y2FwZWQ6IHN0cmluZyA9IG13LnV0aWwuZXNjYXBlUmVnRXhwKHdnVXNlck5hbWUgPz8gJycpO1xuXHRcdGNvbnN0IFJFR0VYX0ZJTEU6IFJlZ0V4cCA9IG5ldyBSZWdFeHAoXG5cdFx0XHRgXig/Ok1lZGlhV2lraToke3dnVXNlck5hbWVFeGNhcGVkID8gYHxVc2VyOiR7d2dVc2VyTmFtZUV4Y2FwZWR9L2AgOiAnJ30pW14mPD49JSNdKlxcXFwuKGpzfGNzcykkYFxuXHRcdCk7XG5cdFx0Y29uc3QgUkVHRVhfRVhUOiBSZWdFeHAgPSAvXmV4dFxcLlteLF0rJC87XG5cdFx0Y29uc3QgcGF0aDogc3RyaW5nID0gd2dTY3JpcHQ7XG5cdFx0Y29uc3QgdXNlRmlsZXMgPSBVUkxfVVNFLnNwbGl0KC9bLHxdLyk7XG5cdFx0Zm9yIChjb25zdCB1c2VGaWxlIG9mIHVzZUZpbGVzKSB7XG5cdFx0XHRjb25zdCBuYW1lOiBzdHJpbmcgPSB1c2VGaWxlLnRvU3RyaW5nKCkudHJpbSgpO1xuXHRcdFx0Y29uc3Qgd2hhdDogc3RyaW5nW10gPSBSRUdFWF9GSUxFLmV4ZWMobmFtZSkgPz8gWycnLCAnJ107XG5cdFx0XHRzd2l0Y2ggKHdoYXRbMV0pIHtcblx0XHRcdFx0Y2FzZSAnY3NzJzpcblx0XHRcdFx0XHRtdy5sb2FkZXIubG9hZChgJHtwYXRofT9hY3Rpb249cmF3JmN0eXBlPXRleHQvY3NzJnRpdGxlPSR7ZW5jb2RlVVJJQ29tcG9uZW50KG5hbWUpfWApO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICdqcyc6IHtcblx0XHRcdFx0XHQvLyBAdHMtZXhwZWN0LWVycm9yIFRTNjEzM1xuXHRcdFx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcblx0XHRcdFx0XHRjb25zdCByZXF1aXJlID0gYXdhaXQgbXcubG9hZGVyLnVzaW5nKCdleHQuZ2FkZ2V0LlNpdGVDb21tb25fSlMnKTtcblx0XHRcdFx0XHRtdy5sb2FkZXIubG9hZChgJHtwYXRofT9hY3Rpb249cmF3JmN0eXBlPXRleHQvamF2YXNjcmlwdCZ0aXRsZT0ke2VuY29kZVVSSUNvbXBvbmVudChuYW1lKX1gKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdGlmIChSRUdFWF9FWFQudGVzdChuYW1lKSkge1xuXHRcdFx0XHRcdFx0Ly8gQHRzLWV4cGVjdC1lcnJvciBUUzYxMzNcblx0XHRcdFx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcblx0XHRcdFx0XHRcdGNvbnN0IHJlcXVpcmUgPSBhd2FpdCBtdy5sb2FkZXIudXNpbmcoJ2V4dC5nYWRnZXQuU2l0ZUNvbW1vbl9KUycpO1xuXHRcdFx0XHRcdFx0bXcubG9hZGVyLmxvYWQobmFtZSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxufTtcblxuY29uc3QgaGlnaExpZ2h0UmV2ID0gKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQgPT4ge1xuXHQvKipcblx0ICogQWRkIGhpZ2hsaWdodCB0byByZXZpc2lvbnMgd2hlbiB1c2luZyBgJmhpbGlnaHQ9cmV2aWRgIG9yIGAmaGlnaGxpZ2h0PXJldmlkYFxuXHQgKi9cblx0Y29uc3QgVVJMX0hJR0hMSUdIVDogc3RyaW5nIHwgbnVsbCA9IG13LnV0aWwuZ2V0UGFyYW1WYWx1ZSgnaGlnaGxpZ2h0Jyk7XG5cdGNvbnN0IFVSTF9ISUxJR0hUOiBzdHJpbmcgfCBudWxsID0gbXcudXRpbC5nZXRQYXJhbVZhbHVlKCdoaWxpZ2h0Jyk7XG5cdGNvbnN0IGhpZ2hsaWdodDogc3RyaW5nIHwgbnVsbCA9IFVSTF9ISUdITElHSFQgPz8gVVJMX0hJTElHSFQ7XG5cblx0aWYgKCFoaWdobGlnaHQgfHwgd2dBY3Rpb24gIT09ICdoaXN0b3J5Jykge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGZvciAoY29uc3QgdmVyc2lvbiBvZiBoaWdobGlnaHQuc3BsaXQoJywnKSkge1xuXHRcdCRib2R5LmZpbmQoYGlucHV0W25hbWU9b2xkaWRdW3ZhbHVlPSR7dmVyc2lvbn1dYCkucGFyZW50KCkuYWRkQ2xhc3MoJ25vdC1wYXRyb2xsZWQnKTtcblx0fVxufTtcblxuY29uc3QgYWRkVGFyZ2V0QmxhbmsgPSAoJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KTogdm9pZCA9PiB7XG5cdC8qKlxuXHQgKiBBZGQgdGFyZ2V0PVwiYmxhbmtcIiB0byBleHRlcm5hbCBsaW5rc1xuXHQgKi9cblx0Y29uc3QgZWxlbWVudHMgPSAkYm9keS5maW5kPEhUTUxBbmNob3JFbGVtZW50PignYS5leHRlcm5hbCwgYVtyZWw9XCJtdzpFeHRMaW5rXCJdJyk7XG5cdGZvciAoY29uc3QgZWxlbWVudCBvZiBlbGVtZW50cykge1xuXHRcdGlmICghZWxlbWVudC5yZWwuaW5jbHVkZXMoJ25vZm9sbG93JykpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGVsZW1lbnQudGFyZ2V0ID0gJ19ibGFuayc7XG5cdFx0aWYgKCFlbGVtZW50LnJlbC5pbmNsdWRlcygnbm9vcGVuZXInKSkge1xuXHRcdFx0ZWxlbWVudC5yZWwgKz0gJyBub29wZW5lcic7XG5cdFx0fVxuXHRcdGlmICghZWxlbWVudC5yZWwuaW5jbHVkZXMoJ25vcmVmZXJyZXInKSkge1xuXHRcdFx0ZWxlbWVudC5yZWwgKz0gJyBub3JlZmVycmVyJztcblx0XHR9XG5cdH1cbn07XG5cbmNvbnN0IHJlbW92ZVRpdGxlRnJvbVBlcm1hbGluayA9ICgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkID0+IHtcblx0LyoqXG5cdCAqIFJlbW92ZSB0aXRsZT0qIGZyb20gcGVybWFsaW5rXG5cdCAqL1xuXHRjb25zdCAkcGVybWFMaW5rOiBKUXVlcnkgPSAkYm9keS5maW5kKCcjdC1wZXJtYWxpbmsnKTtcblx0aWYgKCEkcGVybWFMaW5rLmxlbmd0aCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0ICRwZXJtYUxpbmtGaXJzdENoaWxkOiBKUXVlcnk8SFRNTEFuY2hvckVsZW1lbnQ+ID0gJHBlcm1hTGluay5maW5kPEhUTUxBbmNob3JFbGVtZW50PignOmZpcnN0LWNoaWxkJyk7XG5cblx0Y29uc3QgaHJlZjogc3RyaW5nIHwgdW5kZWZpbmVkID0gJHBlcm1hTGlua0ZpcnN0Q2hpbGQuYXR0cignaHJlZicpPy5yZXBsYWNlKC90aXRsZT1bXiZdKiYvLCAnJyk7XG5cdGlmICghaHJlZikge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdCRwZXJtYUxpbmtGaXJzdENoaWxkLmF0dHIoJ2hyZWYnLCBocmVmKTtcbn07XG5cbmNvbnN0IG9wZW5TZWFyY2hJbk5ld1RhYiA9ICgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkID0+IHtcblx0LyoqXG5cdCAqIE9wZW4gc2VhcmNoIHJlc3VsdHMgaW4gYSBuZXcgdGFiIG9yIHdpbmRvd1xuXHQgKiB3aGVuIGhvbGRpbmcgZG93biB0aGUgQ3RybCBrZXkgKGJ5IFRpbWVzaGlmdGVyKVxuXHQgKi9cblx0JGJvZHlcblx0XHQuZmluZChbJyNzZWFyY2gnLCAnI3NlYXJjaGJveCcsICcjc2VhcmNoZm9ybScsICcuc2VhcmNoLXR5cGVzJywgJyNzZWFyY2gtdHlwZXMnXS5qb2luKCcsJykpXG5cdFx0Lm9uKCdrZXlkb3duIGtleXVwIG1vdXNlZG93bicsIChldmVudDogSlF1ZXJ5LlRyaWdnZXJlZEV2ZW50PEhUTUxFbGVtZW50Pik6IHZvaWQgPT4ge1xuXHRcdFx0Y29uc3Qge2N0cmxLZXksIG1ldGFLZXksIHRhcmdldH0gPSBldmVudDtcblx0XHRcdCQodGFyZ2V0KS5hdHRyKCd0YXJnZXQnLCAoY3RybEtleSA/PyBtZXRhS2V5KSA/ICdfYmxhbmsnIDogJycpO1xuXHRcdH0pO1xufTtcblxuY29uc3QgdGl0bGVDbGVhblVwID0gKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQgPT4ge1xuXHQvKipcblx0ICogQ2xlYW51cCB0aXRsZSBmb3IgYWxsIHBhZ2VzXG5cdCAqL1xuXHRjb25zdCBVUkxfRElGRjogc3RyaW5nIHwgbnVsbCA9IG13LnV0aWwuZ2V0UGFyYW1WYWx1ZSgnZGlmZicpO1xuXHRpZiAoVVJMX0RJRkYgfHwgd2dBY3Rpb24gIT09ICd2aWV3JyB8fCAhWzYsIDExOF0uaW5jbHVkZXMod2dOYW1lc3BhY2VOdW1iZXIpKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgZnVsbFBhZ2VOYW1lOiBzdHJpbmcgPSBuZXcgbXcuVGl0bGUod2dQYWdlTmFtZSkuZ2V0UHJlZml4ZWRUZXh0KCk7XG5cdGNvbnN0ICRmaXJzdEhlYWRpbmc6IEpRdWVyeSA9ICRib2R5LmZpbmQoJy5maXJzdEhlYWRpbmcnKTtcblx0Y29uc3QgZG9jdW1lbnRUaXRsZTogc3RyaW5nID0gZG9jdW1lbnQudGl0bGU7XG5cdGNvbnN0IHBhZ2VUaXRsZTogc3RyaW5nID0gJGZpcnN0SGVhZGluZy50ZXh0KCk7XG5cblx0Y29uc3QgcmVwbGFjZVRpdGxlID0gKHRpdGxlOiBzdHJpbmcpOiBzdHJpbmcgPT4gdGl0bGUucmVwbGFjZShwYWdlVGl0bGUsIGZ1bGxQYWdlTmFtZSk7XG5cblx0ZG9jdW1lbnQudGl0bGUgPSByZXBsYWNlVGl0bGUoZG9jdW1lbnRUaXRsZSk7XG5cdCRmaXJzdEhlYWRpbmcudGV4dChyZXBsYWNlVGl0bGUocGFnZVRpdGxlKSk7XG59O1xuXG5jb25zdCBmaXhMb2NhdGlvbkhhc2ggPSAoKTogdm9pZCA9PiB7XG5cdC8qIOS/ruato+aKmOWPoOWQjuWumuS9jeWPmOWMliAqL1xuXHRpZiAobG9jYXRpb24uaGFzaCkge1xuXHRcdGxvY2F0aW9uLmhyZWYgPSBsb2NhdGlvbi5oYXNoO1xuXHR9XG59O1xuXG5jb25zdCBoaWRlTmV3VXNlcnNMb2cgPSAoJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KTogdm9pZCA9PiB7XG5cdC8qIOS4tOaXtu+8muemgeatoueUqOaIt+afpeeci+eUqOaIt+WIm+W7uuaXpeW/lyAqL1xuXHRpZiAod2dDYW5vbmljYWxTcGVjaWFsUGFnZU5hbWUgIT09ICdMb2cnKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgJG5ld1VzZXJzTG9nOiBKUXVlcnkgPSAkYm9keS5maW5kKCdpbnB1dFtuYW1lPVwid3BmaWx0ZXJzW11cIl1bdmFsdWU9bmV3dXNlcnNdJyk7XG5cdCRuZXdVc2Vyc0xvZy5wcm9wKHtcblx0XHRjaGVja2VkOiBmYWxzZSxcblx0XHRkaXNhYmxlZDogdHJ1ZSxcblx0fSk7XG59O1xuXG5jb25zdCB0b2dnbGVMaW5rID0gKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQgPT4ge1xuXHQvKiDosIPmlbTmipjlj6DmjInpkq7nmoTpopzoibIgKi9cblx0Y29uc3QgJHRvZ2dsZXI6IEpRdWVyeSA9ICRib2R5LmZpbmQoJy5tdy1jb2xsYXBzaWJsZS10b2dnbGUsIC5nYWRnZXQtY29sbGFwc2libGUtdG9nZ2xlcicpO1xuXHRpZiAoISR0b2dnbGVyLmxlbmd0aCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGlmICgkdG9nZ2xlci5wYXJlbnQoKVswXT8uc3R5bGUuY29sb3IpIHtcblx0XHQkdG9nZ2xlci5maW5kKCdhJykuY3NzKCdjb2xvcicsICdpbmhlcml0Jyk7XG5cdH1cbn07XG5cbmV4cG9ydCB7XG5cdGxvYWRXaXRoVVJMLFxuXHRoaWdoTGlnaHRSZXYsXG5cdGFkZFRhcmdldEJsYW5rLFxuXHRyZW1vdmVUaXRsZUZyb21QZXJtYWxpbmssXG5cdG9wZW5TZWFyY2hJbk5ld1RhYixcblx0dGl0bGVDbGVhblVwLFxuXHRmaXhMb2NhdGlvbkhhc2gsXG5cdGhpZGVOZXdVc2Vyc0xvZyxcblx0dG9nZ2xlTGluayxcbn07XG4iLCAiaW1wb3J0IHt0aXBweX0gZnJvbSAnZXh0LmdhZGdldC5UaXBweSc7XG5cbmNvbnN0IGdldENvbnRlbnQgPSAocmVmZXJlbmNlOiBFbGVtZW50KTogc3RyaW5nID0+IHtcblx0Y29uc3QgbGFiZWw6IHN0cmluZyB8IG51bGwgPSByZWZlcmVuY2UuZ2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJyk7XG5cdGNvbnN0IHRpdGxlOiBzdHJpbmcgfCBudWxsID0gcmVmZXJlbmNlLmdldEF0dHJpYnV0ZSgnYWx0JykgPz8gcmVmZXJlbmNlLmdldEF0dHJpYnV0ZSgndGl0bGUnKTtcblxuXHRyZXR1cm4gKGxhYmVsID09PSB0aXRsZSA/IGxhYmVsIDogdGl0bGUgfHwgbGFiZWwpIHx8IHJlZmVyZW5jZS50ZXh0Q29udGVudDtcbn07XG5cbmNvbnN0IG9uQ3JlYXRlQ2FsbGJhY2sgPSAoaW5zdGFuY2U6IFJldHVyblR5cGU8dHlwZW9mIHRpcHB5PlswXSk6IHZvaWQgPT4ge1xuXHRjb25zdCB7cmVmZXJlbmNlfSA9IGluc3RhbmNlO1xuXHRyZWZlcmVuY2Uuc2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJywgZ2V0Q29udGVudChyZWZlcmVuY2UpKTtcblx0cmVmZXJlbmNlLnJlbW92ZUF0dHJpYnV0ZSgndGl0bGUnKTtcbn07XG5cbmNvbnN0IG9uU2hvd0NhbGxiYWNrID0gKGluc3RhbmNlOiBSZXR1cm5UeXBlPHR5cGVvZiB0aXBweT5bMF0pOiB2b2lkID0+IHtcblx0b25DcmVhdGVDYWxsYmFjayhpbnN0YW5jZSk7XG5cdGluc3RhbmNlLnNldENvbnRlbnQoZ2V0Q29udGVudChpbnN0YW5jZS5yZWZlcmVuY2UpKTtcbn07XG5cbmNvbnN0IHRpcHB5Rm9yQ2l0aXplbkhlYWRlciA9ICgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkID0+IHtcblx0Y29uc3Qge3NraW59ID0gbXcuY29uZmlnLmdldCgpO1xuXHRpZiAoc2tpbiAhPT0gJ2NpdGl6ZW4nKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Zm9yIChjb25zdCBlbGVtZW50IG9mICRib2R5LmZpbmQoXG5cdFx0W1xuXHRcdFx0Jy5jaXRpemVuLWhlYWRlciAuY2l0aXplbi1kcm9wZG93bi1zdW1tYXJ5Jyxcblx0XHRcdCcuY2l0aXplbi1oZWFkZXIgLmNpdGl6ZW4tZWNoby1ub3RpZmljYXRpb24tYmFkZ2UnLFxuXHRcdFx0Jy5jaXRpemVuLWhlYWRlcl9fbG9nbyBhJyxcblx0XHRcdCcucGFnZS1hY3Rpb25zPm5hdj51bD5saSBhJyxcblx0XHRcdCcucGFnZS1hY3Rpb25zX19idXR0b24nLFxuXHRcdF0uam9pbignLCcpXG5cdCkpIHtcblx0XHRjb25zdCAkZWxlbWVudDogSlF1ZXJ5ID0gJChlbGVtZW50KTtcblx0XHRsZXQgdGl0bGU6IHN0cmluZyB8IHVuZGVmaW5lZCA9ICRlbGVtZW50LmF0dHIoJ3RpdGxlJyk7XG5cdFx0aWYgKCF0aXRsZSkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0dGl0bGUgPSB0aXRsZS5yZXBsYWNlKC9cXHMqP1xcWy4rP10kLywgJycpO1xuXG5cdFx0JGVsZW1lbnQuYXR0cih7XG5cdFx0XHQnYXJpYS1sYWJlbCc6IHRpdGxlLFxuXHRcdFx0dGl0bGU6ICcnLFxuXHRcdH0pO1xuXHRcdHRpcHB5KCRlbGVtZW50LmdldCgwKSBhcyBIVE1MRWxlbWVudCwge1xuXHRcdFx0YXJyb3c6IHRydWUsXG5cdFx0XHRjb250ZW50OiB0aXRsZSxcblx0XHRcdHBsYWNlbWVudDogJ2JvdHRvbScsXG5cdFx0XHRvbkNyZWF0ZTogb25DcmVhdGVDYWxsYmFjayxcblx0XHRcdG9uSGlkZGVuOiBvbkNyZWF0ZUNhbGxiYWNrLFxuXHRcdFx0b25TaG93OiBvblNob3dDYWxsYmFjayxcblx0XHR9KTtcblx0fVxufTtcblxuY29uc3QgdGlwcHlGb3JFeHRlbnNpb24gPSBhc3luYyAoKTogUHJvbWlzZTx2b2lkPiA9PiB7XG5cdGNvbnN0IHtza2lufSA9IG13LmNvbmZpZy5nZXQoKTtcblx0aWYgKHNraW4gPT09ICd2ZWN0b3ItMjAyMicpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRhd2FpdCBtdy5sb2FkZXIudXNpbmcoJ2V4dC5Db2xsYXBzaWJsZVNpZGViYXIuanMnKTtcblx0dGlwcHkoJyNzaWRlYmFyQnV0dG9uJywge1xuXHRcdGFycm93OiB0cnVlLFxuXHRcdGNvbnRlbnQ6IGdldENvbnRlbnQsXG5cdFx0cGxhY2VtZW50OiAnbGVmdCcsXG5cdFx0b25DcmVhdGU6IG9uQ3JlYXRlQ2FsbGJhY2ssXG5cdFx0b25IaWRkZW46IG9uQ3JlYXRlQ2FsbGJhY2ssXG5cdFx0b25TaG93OiBvblNob3dDYWxsYmFjayxcblx0fSk7XG5cblx0aWYgKHNraW4gPT09ICd2ZWN0b3InKSB7XG5cdFx0YXdhaXQgbXcubG9hZGVyLnVzaW5nKCdleHQuQ29sbGFwc2libGVTaWRlYmFyLnZlY3RvcicpO1xuXHRcdHRpcHB5KCcjc2lkZWJhckNvbGxhcHNlJywge1xuXHRcdFx0YXJyb3c6IHRydWUsXG5cdFx0XHRjb250ZW50OiBnZXRDb250ZW50LFxuXHRcdFx0cGxhY2VtZW50OiAncmlnaHQnLFxuXHRcdFx0b25DcmVhdGU6IG9uQ3JlYXRlQ2FsbGJhY2ssXG5cdFx0XHRvbkhpZGRlbjogb25DcmVhdGVDYWxsYmFjayxcblx0XHRcdG9uU2hvdzogb25TaG93Q2FsbGJhY2ssXG5cdFx0fSk7XG5cdH1cblxuXHRhd2FpdCBtdy5sb2FkZXIudXNpbmcoJ2V4dC5EYXJrTW9kZScpO1xuXHR0aXBweSgnI2Rhcmttb2RlLWJ1dHRvbicsIHtcblx0XHRhcnJvdzogdHJ1ZSxcblx0XHRjb250ZW50OiBnZXRDb250ZW50LFxuXHRcdHBsYWNlbWVudDogJ2xlZnQnLFxuXHRcdG9uQ3JlYXRlOiBvbkNyZWF0ZUNhbGxiYWNrLFxuXHRcdG9uSGlkZGVuOiBvbkNyZWF0ZUNhbGxiYWNrLFxuXHRcdG9uU2hvdzogb25TaG93Q2FsbGJhY2ssXG5cdH0pO1xufTtcblxuZXhwb3J0IHt0aXBweUZvckNpdGl6ZW5IZWFkZXIsIHRpcHB5Rm9yRXh0ZW5zaW9ufTtcbiIsICJpbXBvcnQge2RlbGF5fSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG5jb25zdCBjbGVhckV4cGlyZWRMb2NhbFN0b3JhZ2UgPSBhc3luYyAoKSA9PiB7XG5cdHdoaWxlICh0cnVlKSB7XG5cdFx0YXdhaXQgbXcuc3RvcmFnZS5jbGVhckV4cGlyZWQoKTtcblxuXHRcdGF3YWl0IGRlbGF5KDYwICogMTAwMCk7XG5cdH1cbn07XG5cbmV4cG9ydCB7Y2xlYXJFeHBpcmVkTG9jYWxTdG9yYWdlfTtcbiIsICJjb25zdCBkZXByZWNhdGVkRnVuY3Rpb25zID0gKCk6IHZvaWQgPT4ge1xuXHQvKiFcblx0ICogbWFpbnRlbmFuY2U6IFNvbWUgdXNlciBzY3JpcHRzIG1heSBiZSB1c2luZyB0aGUgZm9sbG93aW5nIGRlcHJlY2F0ZWQgZnVuY3Rpb25zLlxuXHQgKiBUaGVzZSBmdW5jdGlvbnMgYXJlIG5vIGxvbmdlciBzdXBwb3J0ZWQgYW5kIHNob3VsZCBiZSB1cGRhdGVkLlxuXHQgKi9cblx0bXcubG9nLmRlcHJlY2F0ZShcblx0XHR3aW5kb3csXG5cdFx0J2ltcG9ydFNjcmlwdCcsXG5cdFx0KHRpdGxlOiBzdHJpbmcpOiBIVE1MU2NyaXB0RWxlbWVudCA9PiB7XG5cdFx0XHRyZXR1cm4gbXcubG9hZGVyLmFkZFNjcmlwdFRhZyhcblx0XHRcdFx0bXcudXRpbC5nZXRVcmwodGl0bGUsIHtcblx0XHRcdFx0XHRhY3Rpb246ICdyYXcnLFxuXHRcdFx0XHRcdGN0eXBlOiAndGV4dC9qYXZhc2NyaXB0Jyxcblx0XHRcdFx0XHRtYXhhZ2U6ICczNjAwJyxcblx0XHRcdFx0XHRzbWF4YWdlOiAnMzYwMCcsXG5cdFx0XHRcdH0pXG5cdFx0XHQpO1xuXHRcdH0sXG5cdFx0J1VzZSBtdy5sb2FkZXIuYWRkU2NyaXB0VGFnKCkgaW5zdGVhZCdcblx0KTtcblxuXHRtdy5sb2cuZGVwcmVjYXRlKFxuXHRcdHdpbmRvdyxcblx0XHQnaW1wb3J0U3R5bGVzaGVldCcsXG5cdFx0KHRpdGxlOiBzdHJpbmcpOiBIVE1MTGlua0VsZW1lbnQgPT4ge1xuXHRcdFx0cmV0dXJuIG13LmxvYWRlci5hZGRMaW5rVGFnKFxuXHRcdFx0XHRtdy51dGlsLmdldFVybCh0aXRsZSwge1xuXHRcdFx0XHRcdGFjdGlvbjogJ3JhdycsXG5cdFx0XHRcdFx0Y3R5cGU6ICd0ZXh0L2NzcycsXG5cdFx0XHRcdFx0bWF4YWdlOiAnMzYwMCcsXG5cdFx0XHRcdFx0c21heGFnZTogJzM2MDAnLFxuXHRcdFx0XHR9KSxcblx0XHRcdFx0J3RleHQvY3NzJ1xuXHRcdFx0KTtcblx0XHR9LFxuXHRcdCdVc2UgbXcubG9hZGVyLmFkZExpbmtUYWcoKSBpbnN0ZWFkJ1xuXHQpO1xuXG5cdG13LmxvZy5kZXByZWNhdGUoXG5cdFx0d2luZG93LFxuXHRcdCdpbXBvcnRTY3JpcHRVUkknLFxuXHRcdChtb2R1bGVzOiBzdHJpbmcpOiBIVE1MU2NyaXB0RWxlbWVudCA9PiB7XG5cdFx0XHRyZXR1cm4gbXcubG9hZGVyLmFkZFNjcmlwdFRhZyhtdy51dGlsLndpa2lVcmxlbmNvZGUobW9kdWxlcykpO1xuXHRcdH0sXG5cdFx0J1VzZSBtdy5sb2FkZXIuYWRkU2NyaXB0VGFnKCkgb3IgbXcubG9hZGVyLmdldFNjcmlwdCgpIGluc3RlYWQnXG5cdCk7XG5cblx0bXcubG9nLmRlcHJlY2F0ZShcblx0XHR3aW5kb3csXG5cdFx0J2ltcG9ydFN0eWxlc2hlZXRVUkknLFxuXHRcdChtb2R1bGVzOiBzdHJpbmcpOiBIVE1MTGlua0VsZW1lbnQgPT4ge1xuXHRcdFx0cmV0dXJuIG13LmxvYWRlci5hZGRMaW5rVGFnKG13LnV0aWwud2lraVVybGVuY29kZShtb2R1bGVzKSwgJ3RleHQvY3NzJyk7XG5cdFx0fSxcblx0XHQnVXNlIG13LmxvYWRlci5hZGRMaW5rVGFnKCkgaW5zdGVhZCdcblx0KTtcblxuXHRtdy5sb2cuZGVwcmVjYXRlKFxuXHRcdHdpbmRvdyxcblx0XHQvLyBAdHMtZXhwZWN0LWVycm9yIFRTMjM0NVxuXHRcdCdpbXBvcnRTY3JpcHRDYWxsYmFjaycsXG5cdFx0KHRpdGxlOiBzdHJpbmcsIHJlYWR5OiBuZXZlcik6IHZvaWQgPT4ge1xuXHRcdFx0dm9pZCBtdy5sb2FkZXJcblx0XHRcdFx0LmdldFNjcmlwdChcblx0XHRcdFx0XHRtdy51dGlsLmdldFVybCh0aXRsZSwge1xuXHRcdFx0XHRcdFx0YWN0aW9uOiAncmF3Jyxcblx0XHRcdFx0XHRcdGN0eXBlOiAndGV4dC9qYXZhc2NyaXB0Jyxcblx0XHRcdFx0XHRcdG1heGFnZTogJzM2MDAnLFxuXHRcdFx0XHRcdFx0c21heGFnZTogJzM2MDAnLFxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdClcblx0XHRcdFx0LnRoZW4ocmVhZHkpO1xuXHRcdH0sXG5cdFx0J1VzZSBtdy5sb2FkZXIuZ2V0U2NyaXB0KCkgaW5zdGVhZCdcblx0KTtcblxuXHRtdy5sb2cuZGVwcmVjYXRlKFxuXHRcdHdpbmRvdyxcblx0XHQvLyBAdHMtZXhwZWN0LWVycm9yIFRTMjM0NVxuXHRcdCdpbXBvcnRTY3JpcHRVUklDYWxsYmFjaycsXG5cdFx0KHVybDogc3RyaW5nLCByZWFkeTogbmV2ZXIpOiB2b2lkID0+IHtcblx0XHRcdHZvaWQgbXcubG9hZGVyLmdldFNjcmlwdCh1cmwpLnRoZW4ocmVhZHkpO1xuXHRcdH0sXG5cdFx0J1VzZSBtdy5sb2FkZXIuZ2V0U2NyaXB0KCkgaW5zdGVhZCdcblx0KTtcblx0LyoqXG5cdCAqIG1haW50ZW5hbmNlOiBTb21lIHVzZXIgc2NyaXB0cyBtYXkgYmUgdXNpbmcgdGhlIGZvbGxvd2luZyBkZXByZWNhdGVkIGZ1bmN0aW9ucy5cblx0ICogVGhlc2UgZnVuY3Rpb25zIGFyZSBrZXB0IGZvciBjb21wYWJpbGl0eS5cblx0ICovXG5cdC8vIG13LmxvZy5kZXByZWNhdGUod2luZG93LCAnSlNDb25maWcnLCB7fSwgJ1VzZSB7fSBpbnN0ZWFkJyk7XG5cdC8qKlxuXHQgKiB3Z1UqUyBmdW5jdGlvbnMgaGF2ZSBiZWVuIHNwbGl0IHRvIGEgc2VwZXJhdGUgZ2FkZ2V0IChleHQuZ2FkZ2V0LmkxOG4pLlxuXHQgKi9cbn07XG5cbmV4cG9ydCB7ZGVwcmVjYXRlZEZ1bmN0aW9uc307XG4iLCAiaW1wb3J0IHtcblx0YWRkVGFyZ2V0QmxhbmssXG5cdGZpeExvY2F0aW9uSGFzaCxcblx0aGlkZU5ld1VzZXJzTG9nLFxuXHRoaWdoTGlnaHRSZXYsXG5cdGxvYWRXaXRoVVJMLFxuXHRvcGVuU2VhcmNoSW5OZXdUYWIsXG5cdHJlbW92ZVRpdGxlRnJvbVBlcm1hbGluayxcblx0dGl0bGVDbGVhblVwLFxuXHR0b2dnbGVMaW5rLFxufSBmcm9tICcuL21vZHVsZXMvY29yZSc7XG5pbXBvcnQge3RpcHB5Rm9yQ2l0aXplbkhlYWRlciwgdGlwcHlGb3JFeHRlbnNpb259IGZyb20gJy4vbW9kdWxlcy90aXBweSc7XG5pbXBvcnQge2NsZWFyRXhwaXJlZExvY2FsU3RvcmFnZX0gZnJvbSAnLi9tb2R1bGVzL2NsZWFyRXhwaXJlZExvY2FsU3RvcmFnZSc7XG5pbXBvcnQge2RlcHJlY2F0ZWRGdW5jdGlvbnN9IGZyb20gJy4vbW9kdWxlcy9kZXByZWNhdGVkRnVuY3Rpb25zJztcbmltcG9ydCB7Z2V0Qm9keX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbmltcG9ydCB7cmVzaXplSlF1ZXJ5VUl9IGZyb20gJy4vbW9kdWxlcy9yZXNpemVKUXVlcnlVSSc7XG5cbihmdW5jdGlvbiBzaXRlQ29tbW9uKCk6IHZvaWQge1xuXHRjb25zdCBjb25maWdLZXk6IHN0cmluZyA9ICdnYWRnZXQtU2l0ZUNvbW1vbl9KU19fSW5pdGlhbGl6ZWQnO1xuXHRjb25zdCB7c2tpbn0gPSBtdy5jb25maWcuZ2V0KCk7XG5cblx0Ly8gR3VhcmQgYWdhaW5zdCBkb3VibGUgaW5jbHVzaW9uc1xuXHRpZiAobXcuY29uZmlnLmdldChjb25maWdLZXkpKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdC8vIFNldCBndWFyZFxuXHRtdy5jb25maWcuc2V0KGNvbmZpZ0tleSwgdHJ1ZSk7XG5cblx0Ly8gQ29yZSBtb2R1bGVzXG5cdHZvaWQgbG9hZFdpdGhVUkwoKTtcblx0Zml4TG9jYXRpb25IYXNoKCk7XG5cblx0dm9pZCBnZXRCb2R5KCkudGhlbigoJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KTogdm9pZCA9PiB7XG5cdFx0Ly8gQ29yZSBtb2R1bGVzIChuZWVkICQucmVhZHkpXG5cdFx0aGlnaExpZ2h0UmV2KCRib2R5KTtcblx0XHRhZGRUYXJnZXRCbGFuaygkYm9keSk7XG5cdFx0cmVtb3ZlVGl0bGVGcm9tUGVybWFsaW5rKCRib2R5KTtcblx0XHRvcGVuU2VhcmNoSW5OZXdUYWIoJGJvZHkpO1xuXHRcdHRpdGxlQ2xlYW5VcCgkYm9keSk7XG5cdFx0aGlkZU5ld1VzZXJzTG9nKCRib2R5KTtcblx0XHR0b2dnbGVMaW5rKCRib2R5KTtcblx0XHRyZXNpemVKUXVlcnlVSSgkYm9keSk7XG5cblx0XHQvLyBUaXBweS1yZWxhdGVkIGNvZGVzIChuZWVkICQucmVhZHkpXG5cdFx0aWYgKHNraW4gPT09ICdjaXRpemVuJykge1xuXHRcdFx0dGlwcHlGb3JDaXRpemVuSGVhZGVyKCRib2R5KTtcblx0XHR9XG5cdH0pO1xuXG5cdC8vIERlcHJlY2F0ZWQgZnVuY3Rpb25zXG5cdGRlcHJlY2F0ZWRGdW5jdGlvbnMoKTtcblxuXHQvLyBDbGVhciBleHBpcmVkIGxvY2FsU3RvcmFnZSBpdGVtc1xuXHR2b2lkIGNsZWFyRXhwaXJlZExvY2FsU3RvcmFnZSgpO1xuXG5cdC8vIFRpcHB5LXJlbGF0ZWQgY29kZXNcblx0aWYgKCFbJ3ZlY3Rvci0yMDIyJywgJ2NpdGl6ZW4nXS5pbmNsdWRlcyhza2luKSkge1xuXHRcdHZvaWQgdGlwcHlGb3JFeHRlbnNpb24oKTtcblx0fVxufSkoKTtcbiIsICJjb25zdCByZXNpemVKUXVlcnlVSSA9ICgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkID0+IHtcblx0JCh3aW5kb3cpLm9uKCdyZXNpemUnLCAoKTogdm9pZCA9PiB7XG5cdFx0Y29uc3Qgd2luZG93V2lkdGggPSAkKHdpbmRvdykud2lkdGgoKTtcblx0XHRjb25zdCAkanF1ZXJ5VUlEaWFsb2cgPSAkYm9keS5maW5kKCcudWktZGlhbG9nJyk7XG5cdFx0aWYgKCRqcXVlcnlVSURpYWxvZykge1xuXHRcdFx0JGpxdWVyeVVJRGlhbG9nLmNzcygnbWF4LXdpZHRoJywgYGNhbGMoJHt3aW5kb3dXaWR0aH1weCAtIDJlbSlgKTtcblx0XHR9XG5cdH0pO1xufTtcblxuZXhwb3J0IHtyZXNpemVKUXVlcnlVSX07XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLG9CQUEwQkMsUUFBQSxpQkFBQTtBQUUxQixJQUFNO0VBQUNDO0VBQVVDO0VBQTRCQztFQUFtQkM7RUFBWUM7RUFBVUM7QUFBVSxJQUFJQyxHQUFHQyxPQUFPQyxJQUFJO0FBRWxILElBQU1DLGNBQUEsNEJBQUE7QUFBQSxNQUFBQyxPQUFBQyxrQkFBYyxhQUEyQjtBQUM5QyxVQUFNQyxlQUE4Qk4sR0FBR08sS0FBS0MsY0FBYyxTQUFTO0FBQ25FLFVBQU1DLGNBQTZCVCxHQUFH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Qix1QkFBbUIxQixLQUFLO0FBQ3hCaUMsaUJBQWFqQyxLQUFLO0FBQ2xCZ0Qsb0JBQWdCaEQsS0FBSztBQUNyQnFELGVBQVdyRCxLQUFLO0FBQ2hCd0csbUJBQWV4RyxLQUFLO0FBR3BCLFFBQUl5RSxTQUFTLFdBQVc7QUFDdkJELDRCQUFzQnhFLEtBQUs7SUFDNUI7RUFDRCxDQUFDO0FBR0Q0RixzQkFBb0I7QUFHcEIsT0FBS0wseUJBQXlCO0FBRzlCLE1BQUksQ0FBQyxDQUFDLGVBQWUsU0FBUyxFQUFFdkUsU0FBU3lELElBQUksR0FBRztBQUMvQyxTQUFLVyxrQkFBa0I7RUFDeEI7QUFDRCxHQUFHOyIsCiAgIm5hbWVzIjogWyJpbXBvcnRfZXh0X2dhZGdldCIsICJyZXF1aXJlIiwgIndnQWN0aW9uIiwgIndnQ2Fub25pY2FsU3BlY2lhbFBhZ2VOYW1lIiwgIndnTmFtZXNwYWNlTnVtYmVyIiwgIndnUGFnZU5hbWUiLCAid2dTY3JpcHQiLCAid2dVc2VyTmFtZSIsICJtdyIsICJjb25maWciLCAiZ2V0IiwgImxvYWRXaXRoVVJMIiwgIl9yZWYiLCAiX2FzeW5jVG9HZW5lcmF0b3IiLCAiVVJMX1dJVEhfQ1NTIiwgInV0aWwiLCAiZ2V0UGFyYW1WYWx1ZSIsICJVUkxfV0lUSF9KUyIsICJVUkxfV0lUSF9NT0RVTEUiLCAidGVzdCIsICJsb2FkZXIiLCAibG9hZCIsICJnZXRVcmwiLCAiYWN0aW9uIiwgImN0eXBlIiwgIm1heGFnZSIsICJzbWF4YWdlIiwgInJlcXVpcmUyIiwgInVzaW5nIiwgIm1vZHVsZXMiLCAidW5pcXVlQXJyYXkiLCAic3BsaXQiLCAiVVJMX1VTRSIsICJ3Z1VzZXJOYW1lRXhjYXBlZCIsICJlc2NhcGVSZWdFeHAiLCAiUkVHRVhfRklMRSIsICJSZWdFeHAiLCAiY29uY2F0IiwgIlJFR0VYX0VYVCIsICJwYXRoIiwgInVzZUZpbGVzIiwgIl9pdGVyYXRvciIsICJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsICJfc3RlcCIsICJzIiwgIm4iLCAiZG9uZSIsICJfUkVHRVhfRklMRSRleGVjIiwgInVzZUZpbGUiLCAidmFsdWUiLCAibmFtZSIsICJ0b1N0cmluZyIsICJ0cmltIiwgIndoYXQiLCAiZXhlYyIsICJlbmNvZGVVUklDb21wb25lbnQiLCAiZXJyIiwgImUiLCAiZiIsICJhcHBseSIsICJhcmd1bWVudHMiLCAiaGlnaExpZ2h0UmV2IiwgIiRib2R5IiwgIlVSTF9ISUdITElHSFQiLCAiVVJMX0hJTElHSFQiLCAiaGlnaGxpZ2h0IiwgIl9pdGVyYXRvcjIiLCAiX3N0ZXAyIiwgInZlcnNpb24iLCAiZmluZCIsICJwYXJlbnQiLCAiYWRkQ2xhc3MiLCAiYWRkVGFyZ2V0QmxhbmsiLCAiZWxlbWVudHMiLCAiX2l0ZXJhdG9yMyIsICJfc3RlcDMiLCAiZWxlbWVudCIsICJyZWwiLCAiaW5jbHVkZXMiLCAidGFyZ2V0IiwgInJlbW92ZVRpdGxlRnJvbVBlcm1hbGluayIsICJfJHBlcm1hTGlua0ZpcnN0Q2hpbGQiLCAiJHBlcm1hTGluayIsICJsZW5ndGgiLCAiJHBlcm1hTGlua0ZpcnN0Q2hpbGQiLCAiaHJlZiIsICJhdHRyIiwgInJlcGxhY2UiLCAib3BlblNlYXJjaEluTmV3VGFiIiwgImpvaW4iLCAib24iLCAiZXZlbnQiLCAiY3RybEtleSIsICJtZXRhS2V5IiwgIiQiLCAidGl0bGVDbGVhblVwIiwgIlVSTF9ESUZGIiwgImZ1bGxQYWdlTmFtZSIsICJUaXRsZSIsICJnZXRQcmVmaXhlZFRleHQiLCAiJGZpcnN0SGVhZGluZyIsICJkb2N1bWVudFRpdGxlIiwgImRvY3VtZW50IiwgInRpdGxlIiwgInBhZ2VUaXRsZSIsICJ0ZXh0IiwgInJlcGxhY2VUaXRsZSIsICJmaXhMb2NhdGlvbkhhc2giLCAibG9jYXRpb24iLCAiaGFzaCIsICJoaWRlTmV3VXNlcnNMb2ciLCAiJG5ld1VzZXJzTG9nIiwgInByb3AiLCAiY2hlY2tlZCIsICJkaXNhYmxlZCIsICJ0b2dnbGVMaW5rIiwgIl8kdG9nZ2xlciRwYXJlbnQkIiwgIiR0b2dnbGVyIiwgInN0eWxlIiwgImNvbG9yIiwgImNzcyIsICJpbXBvcnRfZXh0X2dhZGdldDIiLCAiZ2V0Q29udGVudCIsICJyZWZlcmVuY2UiLCAiX3JlZmVyZW5jZSRnZXRBdHRyaWJ1IiwgImxhYmVsIiwgImdldEF0dHJpYnV0ZSIsICJ0ZXh0Q29udGVudCIsICJvbkNyZWF0ZUNhbGxiYWNrIiwgImluc3RhbmNlIiwgInNldEF0dHJpYnV0ZSIsICJyZW1vdmVBdHRyaWJ1dGUiLCAib25TaG93Q2FsbGJhY2siLCAic2V0Q29udGVudCIsICJ0aXBweUZvckNpdGl6ZW5IZWFkZXIiLCAic2tpbiIsICJfaXRlcmF0b3I0IiwgIl9zdGVwNCIsICIkZWxlbWVudCIsICJ0aXBweSIsICJhcnJvdyIsICJjb250ZW50IiwgInBsYWNlbWVudCIsICJvbkNyZWF0ZSIsICJvbkhpZGRlbiIsICJvblNob3ciLCAidGlwcHlGb3JFeHRlbnNpb24iLCAiX3JlZjIiLCAiaW1wb3J0X2V4dF9nYWRnZXQzIiwgImNsZWFyRXhwaXJlZExvY2FsU3RvcmFnZSIsICJfcmVmMyIsICJzdG9yYWdlIiwgImNsZWFyRXhwaXJlZCIsICJkZWxheSIsICJkZXByZWNhdGVkRnVuY3Rpb25zIiwgImxvZyIsICJkZXByZWNhdGUiLCAid2luZG93IiwgImFkZFNjcmlwdFRhZyIsICJhZGRMaW5rVGFnIiwgIndpa2lVcmxlbmNvZGUiLCAicmVhZHkiLCAiZ2V0U2NyaXB0IiwgInRoZW4iLCAidXJsIiwgImltcG9ydF9leHRfZ2FkZ2V0NCIsICJyZXNpemVKUXVlcnlVSSIsICJ3aW5kb3dXaWR0aCIsICJ3aWR0aCIsICIkanF1ZXJ5VUlEaWFsb2ciLCAic2l0ZUNvbW1vbiIsICJjb25maWdLZXkiLCAic2V0IiwgImdldEJvZHkiXQp9Cg==

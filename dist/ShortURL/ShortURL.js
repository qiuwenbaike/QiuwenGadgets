/**
 * SPDX-License-Identifier: GPL-3.0-or-later
 * _addText: '{{Gadget Header|license=GPL-3.0-or-later}}'
 *
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/ShortURL}
 * @author 安忆 <i@anyi.in>; WaitSpring <me@waitspring.com>
 * @license GPL-3.0-or-later {@link https://www.qiuwenbaike.cn/wiki/H:GPL-3.0}
 */

/**
 * Copyright (C)  安忆
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
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

// dist/ShortURL/ShortURL.js
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
//! src/ShortURL/modules/util/checkRevisionPage.ts
var checkRevisionPage = ($content) => {
  return ($content.find("#contentSub #mw-revision-nav").length || $content.find("main#content>.pre-content #mw-revision-nav").length) > 0;
};
//! src/ShortURL/modules/util/getShortDomains.ts
var getShortDomains = () => {
  const {
    wgWikiID
  } = mw.config.get();
  let domains2 = [];
  switch (wgWikiID) {
    case "zhqiuwenbaike":
      domains2 = ["qwbk.cc", "bkwz.cn"];
      break;
    case "licencewiki":
      domains2 = ["l.qwbk.cc", "l.bkwz.cn"];
      break;
    case "mncqiuwenbaike":
      domains2 = ["mnc.qwbk.cc", "mnc.bkwz.cn"];
      break;
  }
  return domains2;
};
//! src/ShortURL/modules/addLink.tsx
var import_ext_gadget2 = require("ext.gadget.Clipboard");
var import_ext_gadget3 = __toESM(require("ext.gadget.React"), 1);
var import_ext_gadget4 = require("ext.gadget.Util");
//! src/ShortURL/modules/i18n.ts
var import_ext_gadget = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    "Network error": (0, import_ext_gadget.localize)({
      en: "Network error",
      ja: "ネットワークエラー",
      "zh-hans": "网络异常",
      "zh-hant": "網路異常"
    }),
    "Page URL": (0, import_ext_gadget.localize)({
      en: "Permanent URL",
      "zh-hans": "页面链接",
      "zh-hant": "頁面網址"
    }),
    "Permanent URL": (0, import_ext_gadget.localize)({
      en: "Permanent URL",
      "zh-hans": "永久链接",
      "zh-hant": "永久網址"
    }),
    "Share URL for the page": (0, import_ext_gadget.localize)({
      en: "Share URL for the page",
      "zh-hans": "分享本页链接",
      "zh-hant": "分享本頁網址"
    }),
    "Short URL": (0, import_ext_gadget.localize)({
      en: "Short URL",
      "zh-hans": "短链接",
      "zh-hant": "短網址"
    }),
    "Show URL": (0, import_ext_gadget.localize)({
      en: "Show URL",
      "zh-hans": "显示该页链接",
      "zh-hant": "顯示該頁網址"
    }),
    "URL copied to clipboard": (0, import_ext_gadget.localize)({
      en: "The URL has been copied to clipboard:",
      "zh-hans": "已复制本页链接：",
      "zh-hant": "已復製本頁網址："
    })
  };
};
var i18nMessages = getI18nMessages();
var getMessage = (key) => {
  return i18nMessages[key] || key;
};
//! src/ShortURL/modules/addLink.tsx
var import_ext_gadget5 = require("ext.gadget.Tippy");
var {
  skin,
  wgUserName
} = mw.config.get();
var domains = getShortDomains();
var clipboardInstance;
var headerLinkEventListener = {
  remove: () => {
  }
};
var portletLinkEventListener = {
  remove: () => {
  }
};
var addLink = (link, permaLink) => {
  var _clipboardInstance;
  let portletLink = document.querySelector("#t-shortlink");
  if (!portletLink) {
    const portletId = document.querySelector("#p-cactions") ? "p-cactions" : "p-tb";
    portletLink = mw.util.addPortletLink(portletId, "#", getMessage("Share URL for the page"), "t-shortlink", getMessage("Show URL"));
  }
  if (portletLink) {
    var _portletLink$firstEle;
    const portletLinkClickListener = (event) => {
      event.preventDefault();
      const $element = $("<div>");
      $element.append(
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-argument
        new mw.widgets.CopyTextLayout({
          label: getMessage("Page URL"),
          title: getMessage("Page URL"),
          align: "top",
          copyText: location.href
        }).$element
      );
      $element.append(
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-explicit-any
        new mw.widgets.CopyTextLayout({
          label: getMessage("Permanent URL"),
          title: getMessage("Permanent URL"),
          align: "top",
          copyText: "https://".concat(location.host).concat(permaLink)
        }).$element
      );
      if (wgUserName) {
        var _iterator2 = _createForOfIteratorHelper(domains.entries()), _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
            const [i, domain] = _step2.value;
            $element.append(
              // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-argument
              new mw.widgets.CopyTextLayout({
                label: "".concat(getMessage("Short URL")).concat(i + 1),
                title: "".concat(getMessage("Short URL")).concat(i + 1),
                align: "top",
                copyText: "https://".concat(domain).concat(link)
              }).$element
            );
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      }
      void OO.ui.alert($element, {
        size: "medium",
        title: $(/* @__PURE__ */ import_ext_gadget3.default.createElement("b", null, getMessage("Share URL for the page")))
      });
    };
    portletLinkEventListener.remove();
    portletLinkEventListener = (0, import_ext_gadget4.addEventListenerWithRemover)({
      target: (_portletLink$firstEle = portletLink.firstElementChild) !== null && _portletLink$firstEle !== void 0 ? _portletLink$firstEle : portletLink,
      type: "click",
      listener: portletLinkClickListener
    });
    const isCitizen = skin === "citizen";
    if (isCitizen && !$(portletLink).find(".mw-ui-icon-wikimedia-shortlink").length) {
      $(portletLink).find("a").prepend(/* @__PURE__ */ import_ext_gadget3.default.createElement("span", {
        class: "citizen-ui-icon mw-ui-icon-wikimedia-shortlink"
      }));
    }
  }
  let headerLink = document.querySelector("#mw-indicator-shortURL a");
  if (!headerLink) {
    headerLink = /* @__PURE__ */ import_ext_gadget3.default.createElement("a", {
      "aria-label": wgUserName ? getMessage("Short URL") : getMessage("Share URL for the page"),
      href: "#"
    }, /* @__PURE__ */ import_ext_gadget3.default.createElement("span", {
      className: "gadget-short-link__icon"
    }, wgUserName ? getMessage("Short URL") : getMessage("Share URL for the page")));
    (0, import_ext_gadget5.tippy)(headerLink, {
      arrow: true,
      content: wgUserName ? getMessage("Short URL") : getMessage("Share URL for the page"),
      placement: "bottom"
    });
    const $headerElement = $(/* @__PURE__ */ import_ext_gadget3.default.createElement("div", {
      className: "mw-indicator",
      id: "mw-indicator-shortURL"
    }, headerLink));
    $headerElement.prependTo(".mw-indicators");
  }
  const fullLink = wgUserName ? "https://".concat(domains[0]).concat(link) : "https://".concat(location.host).concat(permaLink);
  const $notifyElement = $(/* @__PURE__ */ import_ext_gadget3.default.createElement("span", null, getMessage("URL copied to clipboard"), /* @__PURE__ */ import_ext_gadget3.default.createElement("br", null), /* @__PURE__ */ import_ext_gadget3.default.createElement("a", {
    href: "#",
    onClick: (event) => {
      event.preventDefault();
      event.stopPropagation();
    }
  }, fullLink)));
  const headerLinkClickListener = (event) => {
    event.preventDefault();
    void mw.notify($notifyElement, {
      tag: "shortURL",
      type: "info"
    });
  };
  headerLinkEventListener.remove();
  headerLinkEventListener = (0, import_ext_gadget4.addEventListenerWithRemover)({
    target: headerLink,
    type: "click",
    listener: headerLinkClickListener
  });
  (_clipboardInstance = clipboardInstance) === null || _clipboardInstance === void 0 || _clipboardInstance.destroy();
  clipboardInstance = new import_ext_gadget2.Clipboard(headerLink, {
    text: () => fullLink
  });
};
//! src/ShortURL/modules/buildLink.ts
var buildLink = (oldId, diffId) => {
  let link = "/d";
  let permaLink = "/wiki/Special:Diff";
  if (oldId) {
    link += "/".concat(oldId);
    permaLink += "/".concat(oldId);
  }
  link += "/".concat(diffId);
  permaLink += "/".concat(diffId);
  addLink(link, permaLink);
};
//! src/ShortURL/options.json
var version = "2.0";
//! src/ShortURL/modules/api.ts
var import_ext_gadget6 = require("ext.gadget.Util");
var api = (0, import_ext_gadget6.initMwApi)("ShortURL/".concat(version));
//! src/ShortURL/modules/util/queryApi.ts
var import_ext_gadget7 = require("ext.gadget.Toastify");
var parameters = {
  action: "compare",
  format: "json",
  formatversion: "2",
  prop: "ids",
  torelative: "prev",
  smaxage: 600,
  maxage: 600
};
var queryApi = /* @__PURE__ */ function() {
  var _ref = _asyncToGenerator(function* (diffId) {
    try {
      return yield api.get({
        ...parameters,
        fromrev: diffId
      });
    } catch (error) {
      console.error("[ShortURL] Ajax error:", error);
      (0, import_ext_gadget7.toastify)({
        text: getMessage("Network error"),
        close: true,
        duration: -1
      }, "error");
      return {};
    }
  });
  return function queryApi2(_x) {
    return _ref.apply(this, arguments);
  };
}();
//! src/ShortURL/modules/compareWithRemoteDiffId.ts
var compareWithRemoteDiffId = /* @__PURE__ */ function() {
  var _ref2 = _asyncToGenerator(function* (diffId) {
    var _response$compare;
    const response = yield queryApi(diffId);
    if (diffId === mw.config.get("wgDiffNewId") && ((_response$compare = response["compare"]) === null || _response$compare === void 0 ? void 0 : _response$compare.fromrevid) === mw.config.get("wgDiffOldId")) {
      buildLink(0, diffId);
    }
  });
  return function compareWithRemoteDiffId2(_x2) {
    return _ref2.apply(this, arguments);
  };
}();
//! src/ShortURL/modules/processId.ts
var processId = (isRevisionPage, {
  articleId,
  diffId,
  oldId,
  revisionId
}) => {
  if (diffId) {
    buildLink(oldId, diffId);
    if (oldId) {
      void compareWithRemoteDiffId(diffId);
    }
  } else if (revisionId && isRevisionPage) {
    addLink("/p/".concat(revisionId), "/wiki/Special:Permalink/".concat(revisionId));
  } else if (articleId) {
    addLink("/c/".concat(articleId), "/index.php?curid=".concat(articleId));
  }
};
//! src/ShortURL/ShortURL.ts
(function shortURL() {
  const {
    wgAction,
    wgArticleId,
    wgNamespaceNumber
  } = mw.config.get();
  const domains2 = getShortDomains();
  if (!domains2.length || wgNamespaceNumber < 0) {
    return;
  }
  if (wgAction === "view" && wgArticleId) {
    mw.hook("wikipage.content").add(($content) => {
      if ($content.attr("id") !== "mw-content-text") {
        return;
      }
      const isRevisionPage = checkRevisionPage($content);
      processId(isRevisionPage, {
        articleId: mw.config.get("wgArticleId"),
        diffId: mw.config.get("wgDiffNewId"),
        oldId: mw.config.get("wgDiffOldId"),
        revisionId: mw.config.get("wgRevisionId")
      });
    });
  }
})();

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1Nob3J0VVJML21vZHVsZXMvdXRpbC9jaGVja1JldmlzaW9uUGFnZS50cyIsICJzcmMvU2hvcnRVUkwvbW9kdWxlcy91dGlsL2dldFNob3J0RG9tYWlucy50cyIsICJzcmMvU2hvcnRVUkwvbW9kdWxlcy9hZGRMaW5rLnRzeCIsICJzcmMvU2hvcnRVUkwvbW9kdWxlcy9pMThuLnRzIiwgInNyYy9TaG9ydFVSTC9tb2R1bGVzL2J1aWxkTGluay50cyIsICJzcmMvU2hvcnRVUkwvb3B0aW9ucy5qc29uIiwgInNyYy9TaG9ydFVSTC9tb2R1bGVzL2FwaS50cyIsICJzcmMvU2hvcnRVUkwvbW9kdWxlcy91dGlsL3F1ZXJ5QXBpLnRzIiwgInNyYy9TaG9ydFVSTC9tb2R1bGVzL2NvbXBhcmVXaXRoUmVtb3RlRGlmZklkLnRzIiwgInNyYy9TaG9ydFVSTC9tb2R1bGVzL3Byb2Nlc3NJZC50cyIsICJzcmMvU2hvcnRVUkwvU2hvcnRVUkwudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IGNoZWNrUmV2aXNpb25QYWdlID0gKCRjb250ZW50OiBKUXVlcnkpOiBib29sZWFuID0+IHtcblx0cmV0dXJuIChcblx0XHQoJGNvbnRlbnQuZmluZCgnI2NvbnRlbnRTdWIgI213LXJldmlzaW9uLW5hdicpLmxlbmd0aCB8fFxuXHRcdFx0JGNvbnRlbnQuZmluZCgnbWFpbiNjb250ZW50Pi5wcmUtY29udGVudCAjbXctcmV2aXNpb24tbmF2JykubGVuZ3RoKSA+IDBcblx0KTtcbn07XG5cbmV4cG9ydCB7Y2hlY2tSZXZpc2lvblBhZ2V9O1xuIiwgImNvbnN0IGdldFNob3J0RG9tYWlucyA9ICgpOiBzdHJpbmdbXSA9PiB7XG5cdGNvbnN0IHt3Z1dpa2lJRH0gPSBtdy5jb25maWcuZ2V0KCk7XG5cdGxldCBkb21haW5zOiBzdHJpbmdbXSA9IFtdO1xuXG5cdHN3aXRjaCAod2dXaWtpSUQpIHtcblx0XHRjYXNlICd6aHFpdXdlbmJhaWtlJzpcblx0XHRcdGRvbWFpbnMgPSBbJ3F3YmsuY2MnLCAnYmt3ei5jbiddO1xuXHRcdFx0YnJlYWs7XG5cdFx0Y2FzZSAnbGljZW5jZXdpa2knOlxuXHRcdFx0ZG9tYWlucyA9IFsnbC5xd2JrLmNjJywgJ2wuYmt3ei5jbiddO1xuXHRcdFx0YnJlYWs7XG5cdFx0Y2FzZSAnbW5jcWl1d2VuYmFpa2UnOlxuXHRcdFx0ZG9tYWlucyA9IFsnbW5jLnF3YmsuY2MnLCAnbW5jLmJrd3ouY24nXTtcblx0XHRcdGJyZWFrO1xuXHR9XG5cblx0cmV0dXJuIGRvbWFpbnM7XG59O1xuXG5leHBvcnQge2dldFNob3J0RG9tYWluc307XG4iLCAiaW1wb3J0IHtDbGlwYm9hcmR9IGZyb20gJ2V4dC5nYWRnZXQuQ2xpcGJvYXJkJztcbmltcG9ydCBSZWFjdCBmcm9tICdleHQuZ2FkZ2V0LlJlYWN0JztcbmltcG9ydCB7YWRkRXZlbnRMaXN0ZW5lcldpdGhSZW1vdmVyfSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL2kxOG4nO1xuaW1wb3J0IHtnZXRTaG9ydERvbWFpbnN9IGZyb20gJy4vdXRpbC9nZXRTaG9ydERvbWFpbnMnO1xuaW1wb3J0IHt0aXBweX0gZnJvbSAnZXh0LmdhZGdldC5UaXBweSc7XG5cbmNvbnN0IHtza2luLCB3Z1VzZXJOYW1lfSA9IG13LmNvbmZpZy5nZXQoKTtcbmNvbnN0IGRvbWFpbnMgPSBnZXRTaG9ydERvbWFpbnMoKTtcblxubGV0IGNsaXBib2FyZEluc3RhbmNlOiBDbGlwYm9hcmRKUyB8IHVuZGVmaW5lZDtcbmxldCBoZWFkZXJMaW5rRXZlbnRMaXN0ZW5lcjogUmV0dXJuVHlwZTx0eXBlb2YgYWRkRXZlbnRMaXN0ZW5lcldpdGhSZW1vdmVyPiA9IHtcblx0cmVtb3ZlOiAoKTogdm9pZCA9PiB7fSxcbn07XG5sZXQgcG9ydGxldExpbmtFdmVudExpc3RlbmVyOiBSZXR1cm5UeXBlPHR5cGVvZiBhZGRFdmVudExpc3RlbmVyV2l0aFJlbW92ZXI+ID0ge1xuXHRyZW1vdmU6ICgpOiB2b2lkID0+IHt9LFxufTtcblxuY29uc3QgYWRkTGluayA9IChsaW5rOiBzdHJpbmcsIHBlcm1hTGluazogc3RyaW5nKTogdm9pZCA9PiB7XG5cdGxldCBwb3J0bGV0TGluazogSFRNTExJRWxlbWVudCB8IG51bGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdC1zaG9ydGxpbmsnKTtcblx0aWYgKCFwb3J0bGV0TGluaykge1xuXHRcdGNvbnN0IHBvcnRsZXRJZDogJ3AtY2FjdGlvbnMnIHwgJ3AtdGInID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3AtY2FjdGlvbnMnKSA/ICdwLWNhY3Rpb25zJyA6ICdwLXRiJztcblx0XHRwb3J0bGV0TGluayA9IG13LnV0aWwuYWRkUG9ydGxldExpbmsoXG5cdFx0XHRwb3J0bGV0SWQsXG5cdFx0XHQnIycsXG5cdFx0XHRnZXRNZXNzYWdlKCdTaGFyZSBVUkwgZm9yIHRoZSBwYWdlJyksXG5cdFx0XHQndC1zaG9ydGxpbmsnLFxuXHRcdFx0Z2V0TWVzc2FnZSgnU2hvdyBVUkwnKVxuXHRcdCk7XG5cdH1cblxuXHRpZiAocG9ydGxldExpbmspIHtcblx0XHRjb25zdCBwb3J0bGV0TGlua0NsaWNrTGlzdGVuZXIgPSAoZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkID0+IHtcblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cblx0XHRcdGNvbnN0ICRlbGVtZW50OiBKUXVlcnkgPSAkKCc8ZGl2PicpO1xuXG5cdFx0XHQkZWxlbWVudC5hcHBlbmQoXG5cdFx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW5zYWZlLWNhbGwsIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnksIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnNhZmUtYXJndW1lbnRcblx0XHRcdFx0bmV3IChtdyBhcyBhbnkpLndpZGdldHMuQ29weVRleHRMYXlvdXQoe1xuXHRcdFx0XHRcdGxhYmVsOiBnZXRNZXNzYWdlKCdQYWdlIFVSTCcpLFxuXHRcdFx0XHRcdHRpdGxlOiBnZXRNZXNzYWdlKCdQYWdlIFVSTCcpLFxuXHRcdFx0XHRcdGFsaWduOiAndG9wJyxcblx0XHRcdFx0XHRjb3B5VGV4dDogbG9jYXRpb24uaHJlZixcblx0XHRcdFx0fSkuJGVsZW1lbnRcblx0XHRcdCk7XG5cblx0XHRcdCRlbGVtZW50LmFwcGVuZChcblx0XHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnNhZmUtYXJndW1lbnQsIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnNhZmUtY2FsbCwgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuXHRcdFx0XHRuZXcgKG13IGFzIGFueSkud2lkZ2V0cy5Db3B5VGV4dExheW91dCh7XG5cdFx0XHRcdFx0bGFiZWw6IGdldE1lc3NhZ2UoJ1Blcm1hbmVudCBVUkwnKSxcblx0XHRcdFx0XHR0aXRsZTogZ2V0TWVzc2FnZSgnUGVybWFuZW50IFVSTCcpLFxuXHRcdFx0XHRcdGFsaWduOiAndG9wJyxcblx0XHRcdFx0XHRjb3B5VGV4dDogYGh0dHBzOi8vJHtsb2NhdGlvbi5ob3N0fSR7cGVybWFMaW5rfWAsXG5cdFx0XHRcdH0pLiRlbGVtZW50XG5cdFx0XHQpO1xuXG5cdFx0XHRpZiAod2dVc2VyTmFtZSkge1xuXHRcdFx0XHRmb3IgKGNvbnN0IFtpLCBkb21haW5dIG9mIGRvbWFpbnMuZW50cmllcygpKSB7XG5cdFx0XHRcdFx0JGVsZW1lbnQuYXBwZW5kKFxuXHRcdFx0XHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnNhZmUtY2FsbCwgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueSwgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVuc2FmZS1hcmd1bWVudFxuXHRcdFx0XHRcdFx0bmV3IChtdyBhcyBhbnkpLndpZGdldHMuQ29weVRleHRMYXlvdXQoe1xuXHRcdFx0XHRcdFx0XHRsYWJlbDogYCR7Z2V0TWVzc2FnZSgnU2hvcnQgVVJMJyl9JHtpICsgMX1gLFxuXHRcdFx0XHRcdFx0XHR0aXRsZTogYCR7Z2V0TWVzc2FnZSgnU2hvcnQgVVJMJyl9JHtpICsgMX1gLFxuXHRcdFx0XHRcdFx0XHRhbGlnbjogJ3RvcCcsXG5cdFx0XHRcdFx0XHRcdGNvcHlUZXh0OiBgaHR0cHM6Ly8ke2RvbWFpbn0ke2xpbmt9YCxcblx0XHRcdFx0XHRcdH0pLiRlbGVtZW50XG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHR2b2lkIE9PLnVpLmFsZXJ0KCRlbGVtZW50LCB7XG5cdFx0XHRcdHNpemU6ICdtZWRpdW0nLFxuXHRcdFx0XHR0aXRsZTogJCgoPGI+e2dldE1lc3NhZ2UoJ1NoYXJlIFVSTCBmb3IgdGhlIHBhZ2UnKX08L2I+KSBhcyBIVE1MRWxlbWVudCksXG5cdFx0XHR9KTtcblx0XHR9O1xuXG5cdFx0cG9ydGxldExpbmtFdmVudExpc3RlbmVyLnJlbW92ZSgpO1xuXHRcdHBvcnRsZXRMaW5rRXZlbnRMaXN0ZW5lciA9IGFkZEV2ZW50TGlzdGVuZXJXaXRoUmVtb3Zlcih7XG5cdFx0XHR0YXJnZXQ6IChwb3J0bGV0TGluay5maXJzdEVsZW1lbnRDaGlsZCA/PyBwb3J0bGV0TGluaykgYXMgSFRNTEVsZW1lbnQsXG5cdFx0XHR0eXBlOiAnY2xpY2snLFxuXHRcdFx0bGlzdGVuZXI6IHBvcnRsZXRMaW5rQ2xpY2tMaXN0ZW5lcixcblx0XHR9KTtcblxuXHRcdGNvbnN0IGlzQ2l0aXplbjogYm9vbGVhbiA9IHNraW4gPT09ICdjaXRpemVuJztcblx0XHRpZiAoaXNDaXRpemVuICYmICEkKHBvcnRsZXRMaW5rKS5maW5kKCcubXctdWktaWNvbi13aWtpbWVkaWEtc2hvcnRsaW5rJykubGVuZ3RoKSB7XG5cdFx0XHQkKHBvcnRsZXRMaW5rKVxuXHRcdFx0XHQuZmluZCgnYScpXG5cdFx0XHRcdC5wcmVwZW5kKDxzcGFuIGNsYXNzPVwiY2l0aXplbi11aS1pY29uIG13LXVpLWljb24td2lraW1lZGlhLXNob3J0bGlua1wiIC8+KTtcblx0XHR9XG5cdH1cblxuXHRsZXQgaGVhZGVyTGluazogSFRNTEFuY2hvckVsZW1lbnQgfCBudWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI213LWluZGljYXRvci1zaG9ydFVSTCBhJyk7XG5cdGlmICghaGVhZGVyTGluaykge1xuXHRcdGhlYWRlckxpbmsgPSAoXG5cdFx0XHQ8YSBhcmlhLWxhYmVsPXt3Z1VzZXJOYW1lID8gZ2V0TWVzc2FnZSgnU2hvcnQgVVJMJykgOiBnZXRNZXNzYWdlKCdTaGFyZSBVUkwgZm9yIHRoZSBwYWdlJyl9IGhyZWY9XCIjXCI+XG5cdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImdhZGdldC1zaG9ydC1saW5rX19pY29uXCI+XG5cdFx0XHRcdFx0e3dnVXNlck5hbWUgPyBnZXRNZXNzYWdlKCdTaG9ydCBVUkwnKSA6IGdldE1lc3NhZ2UoJ1NoYXJlIFVSTCBmb3IgdGhlIHBhZ2UnKX1cblx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0PC9hPlxuXHRcdCkgYXMgSFRNTEFuY2hvckVsZW1lbnQ7XG5cblx0XHR0aXBweShoZWFkZXJMaW5rLCB7XG5cdFx0XHRhcnJvdzogdHJ1ZSxcblx0XHRcdGNvbnRlbnQ6IHdnVXNlck5hbWUgPyBnZXRNZXNzYWdlKCdTaG9ydCBVUkwnKSA6IGdldE1lc3NhZ2UoJ1NoYXJlIFVSTCBmb3IgdGhlIHBhZ2UnKSxcblx0XHRcdHBsYWNlbWVudDogJ2JvdHRvbScsXG5cdFx0fSk7XG5cblx0XHRjb25zdCAkaGVhZGVyRWxlbWVudCA9ICQoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm13LWluZGljYXRvclwiIGlkPVwibXctaW5kaWNhdG9yLXNob3J0VVJMXCI+XG5cdFx0XHRcdHtoZWFkZXJMaW5rfVxuXHRcdFx0PC9kaXY+XG5cdFx0KSBhcyBKUXVlcnk7XG5cblx0XHQkaGVhZGVyRWxlbWVudC5wcmVwZW5kVG8oJy5tdy1pbmRpY2F0b3JzJyk7XG5cdH1cblxuXHRjb25zdCBmdWxsTGluazogc3RyaW5nID0gd2dVc2VyTmFtZSA/IGBodHRwczovLyR7ZG9tYWluc1swXX0ke2xpbmt9YCA6IGBodHRwczovLyR7bG9jYXRpb24uaG9zdH0ke3Blcm1hTGlua31gO1xuXG5cdGNvbnN0ICRub3RpZnlFbGVtZW50ID0gJChcblx0XHQ8c3Bhbj5cblx0XHRcdHtnZXRNZXNzYWdlKCdVUkwgY29waWVkIHRvIGNsaXBib2FyZCcpfVxuXHRcdFx0PGJyIC8+XG5cdFx0XHQ8YVxuXHRcdFx0XHRocmVmPVwiI1wiXG5cdFx0XHRcdG9uQ2xpY2s9eyhldmVudCk6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0XHRcdH19XG5cdFx0XHQ+XG5cdFx0XHRcdHtmdWxsTGlua31cblx0XHRcdDwvYT5cblx0XHQ8L3NwYW4+XG5cdCkgYXMgSlF1ZXJ5O1xuXG5cdGNvbnN0IGhlYWRlckxpbmtDbGlja0xpc3RlbmVyID0gKGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCA9PiB7XG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuXHRcdHZvaWQgbXcubm90aWZ5KCRub3RpZnlFbGVtZW50LCB7XG5cdFx0XHR0YWc6ICdzaG9ydFVSTCcsXG5cdFx0XHR0eXBlOiAnaW5mbycsXG5cdFx0fSk7XG5cdH07XG5cblx0aGVhZGVyTGlua0V2ZW50TGlzdGVuZXIucmVtb3ZlKCk7XG5cdGhlYWRlckxpbmtFdmVudExpc3RlbmVyID0gYWRkRXZlbnRMaXN0ZW5lcldpdGhSZW1vdmVyKHtcblx0XHR0YXJnZXQ6IGhlYWRlckxpbmssXG5cdFx0dHlwZTogJ2NsaWNrJyxcblx0XHRsaXN0ZW5lcjogaGVhZGVyTGlua0NsaWNrTGlzdGVuZXIsXG5cdH0pO1xuXG5cdGNsaXBib2FyZEluc3RhbmNlPy5kZXN0cm95KCk7XG5cdGNsaXBib2FyZEluc3RhbmNlID0gbmV3IENsaXBib2FyZChoZWFkZXJMaW5rLCB7XG5cdFx0dGV4dDogKCk6IHN0cmluZyA9PiBmdWxsTGluayxcblx0fSk7XG59O1xuXG5leHBvcnQge2FkZExpbmt9O1xuIiwgImltcG9ydCB7bG9jYWxpemV9IGZyb20gJ2V4dC5nYWRnZXQuaTE4bic7XG5cbmNvbnN0IGdldEkxOG5NZXNzYWdlcyA9ICgpID0+IHtcblx0cmV0dXJuIHtcblx0XHQnTmV0d29yayBlcnJvcic6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnTmV0d29yayBlcnJvcicsXG5cdFx0XHRqYTogJ+ODjeODg+ODiOODr+ODvOOCr+OCqOODqeODvCcsXG5cdFx0XHQnemgtaGFucyc6ICfnvZHnu5zlvILluLgnLFxuXHRcdFx0J3poLWhhbnQnOiAn57ay6Lev55Ww5bi4Jyxcblx0XHR9KSxcblx0XHQnUGFnZSBVUkwnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1Blcm1hbmVudCBVUkwnLFxuXHRcdFx0J3poLWhhbnMnOiAn6aG16Z2i6ZO+5o6lJyxcblx0XHRcdCd6aC1oYW50JzogJ+mggemdoue2suWdgCcsXG5cdFx0fSksXG5cdFx0J1Blcm1hbmVudCBVUkwnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1Blcm1hbmVudCBVUkwnLFxuXHRcdFx0J3poLWhhbnMnOiAn5rC45LmF6ZO+5o6lJyxcblx0XHRcdCd6aC1oYW50JzogJ+awuOS5hee2suWdgCcsXG5cdFx0fSksXG5cdFx0J1NoYXJlIFVSTCBmb3IgdGhlIHBhZ2UnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1NoYXJlIFVSTCBmb3IgdGhlIHBhZ2UnLFxuXHRcdFx0J3poLWhhbnMnOiAn5YiG5Lqr5pys6aG16ZO+5o6lJyxcblx0XHRcdCd6aC1oYW50JzogJ+WIhuS6q+acrOmggee2suWdgCcsXG5cdFx0fSksXG5cdFx0J1Nob3J0IFVSTCc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnU2hvcnQgVVJMJyxcblx0XHRcdCd6aC1oYW5zJzogJ+efremTvuaOpScsXG5cdFx0XHQnemgtaGFudCc6ICfnn63ntrLlnYAnLFxuXHRcdH0pLFxuXHRcdCdTaG93IFVSTCc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnU2hvdyBVUkwnLFxuXHRcdFx0J3poLWhhbnMnOiAn5pi+56S66K+l6aG16ZO+5o6lJyxcblx0XHRcdCd6aC1oYW50JzogJ+mhr+ekuuipsumggee2suWdgCcsXG5cdFx0fSksXG5cdFx0J1VSTCBjb3BpZWQgdG8gY2xpcGJvYXJkJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdUaGUgVVJMIGhhcyBiZWVuIGNvcGllZCB0byBjbGlwYm9hcmQ6Jyxcblx0XHRcdCd6aC1oYW5zJzogJ+W3suWkjeWItuacrOmhtemTvuaOpe+8micsXG5cdFx0XHQnemgtaGFudCc6ICflt7Llvqnoo73mnKzpoIHntrLlnYDvvJonLFxuXHRcdH0pLFxuXHR9O1xufTtcblxuY29uc3QgaTE4bk1lc3NhZ2VzID0gZ2V0STE4bk1lc3NhZ2VzKCk7XG5cbmNvbnN0IGdldE1lc3NhZ2U6IEdldE1lc3NhZ2VzPHR5cGVvZiBpMThuTWVzc2FnZXM+ID0gKGtleSkgPT4ge1xuXHRyZXR1cm4gaTE4bk1lc3NhZ2VzW2tleV0gfHwga2V5O1xufTtcblxuZXhwb3J0IHtnZXRNZXNzYWdlfTtcbiIsICJpbXBvcnQge2FkZExpbmt9IGZyb20gJy4vYWRkTGluayc7XG5cbmNvbnN0IGJ1aWxkTGluayA9IChvbGRJZDogbnVtYmVyIHwgbnVsbCwgZGlmZklkOiBudW1iZXIpOiB2b2lkID0+IHtcblx0bGV0IGxpbms6IHN0cmluZyA9ICcvZCc7XG5cdGxldCBwZXJtYUxpbms6IHN0cmluZyA9ICcvd2lraS9TcGVjaWFsOkRpZmYnO1xuXHRpZiAob2xkSWQpIHtcblx0XHRsaW5rICs9IGAvJHtvbGRJZH1gO1xuXHRcdHBlcm1hTGluayArPSBgLyR7b2xkSWR9YDtcblx0fVxuXHRsaW5rICs9IGAvJHtkaWZmSWR9YDtcblx0cGVybWFMaW5rICs9IGAvJHtkaWZmSWR9YDtcblxuXHRhZGRMaW5rKGxpbmssIHBlcm1hTGluayk7XG59O1xuXG5leHBvcnQge2J1aWxkTGlua307XG4iLCAie1xuXHRcInZlcnNpb25cIjogXCIyLjBcIlxufVxuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7aW5pdE13QXBpfSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG5jb25zdCBhcGk6IG13LkFwaSA9IGluaXRNd0FwaShgU2hvcnRVUkwvJHtPUFRJT05TLnZlcnNpb259YCk7XG5cbmV4cG9ydCB7YXBpfTtcbiIsICJpbXBvcnQge2FwaX0gZnJvbSAnLi4vYXBpJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi4vaTE4bic7XG5pbXBvcnQge3RvYXN0aWZ5fSBmcm9tICdleHQuZ2FkZ2V0LlRvYXN0aWZ5JztcblxudHlwZSBDb21wYXJlUmVzcG9uc2UgPSB7XG5cdGNvbXBhcmU/OiB7XG5cdFx0ZnJvbXJldmlkOiBudW1iZXI7XG5cdH07XG59O1xuXG5jb25zdCBwYXJhbWV0ZXJzOiBBcGlDb21wYXJlUGFnZXNQYXJhbXMgPSB7XG5cdGFjdGlvbjogJ2NvbXBhcmUnLFxuXHRmb3JtYXQ6ICdqc29uJyxcblx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRwcm9wOiAnaWRzJyxcblx0dG9yZWxhdGl2ZTogJ3ByZXYnLFxuXHRzbWF4YWdlOiA2MDAsXG5cdG1heGFnZTogNjAwLFxufTtcblxuY29uc3QgcXVlcnlBcGkgPSBhc3luYyAoZGlmZklkOiBudW1iZXIpOiBQcm9taXNlPENvbXBhcmVSZXNwb25zZT4gPT4ge1xuXHR0cnkge1xuXHRcdHJldHVybiBhd2FpdCBhcGkuZ2V0KHtcblx0XHRcdC4uLnBhcmFtZXRlcnMsXG5cdFx0XHRmcm9tcmV2OiBkaWZmSWQsXG5cdFx0fSBhcyB0eXBlb2YgcGFyYW1ldGVycyk7XG5cdH0gY2F0Y2ggKGVycm9yOiB1bmtub3duKSB7XG5cdFx0Y29uc29sZS5lcnJvcignW1Nob3J0VVJMXSBBamF4IGVycm9yOicsIGVycm9yKTtcblx0XHR0b2FzdGlmeShcblx0XHRcdHtcblx0XHRcdFx0dGV4dDogZ2V0TWVzc2FnZSgnTmV0d29yayBlcnJvcicpLFxuXHRcdFx0XHRjbG9zZTogdHJ1ZSxcblx0XHRcdFx0ZHVyYXRpb246IC0xLFxuXHRcdFx0fSxcblx0XHRcdCdlcnJvcidcblx0XHQpO1xuXG5cdFx0cmV0dXJuIHt9O1xuXHR9XG59O1xuXG5leHBvcnQge3F1ZXJ5QXBpfTtcbiIsICJpbXBvcnQge2J1aWxkTGlua30gZnJvbSAnLi9idWlsZExpbmsnO1xuaW1wb3J0IHtxdWVyeUFwaX0gZnJvbSAnLi91dGlsL3F1ZXJ5QXBpJztcblxuY29uc3QgY29tcGFyZVdpdGhSZW1vdGVEaWZmSWQgPSBhc3luYyAoZGlmZklkOiBudW1iZXIpOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0Y29uc3QgcmVzcG9uc2U6IEF3YWl0ZWQ8UmV0dXJuVHlwZTx0eXBlb2YgcXVlcnlBcGk+PiA9IGF3YWl0IHF1ZXJ5QXBpKGRpZmZJZCk7XG5cdGlmIChkaWZmSWQgPT09IG13LmNvbmZpZy5nZXQoJ3dnRGlmZk5ld0lkJykgJiYgcmVzcG9uc2VbJ2NvbXBhcmUnXT8uZnJvbXJldmlkID09PSBtdy5jb25maWcuZ2V0KCd3Z0RpZmZPbGRJZCcpKSB7XG5cdFx0YnVpbGRMaW5rKDAsIGRpZmZJZCk7XG5cdH1cbn07XG5cbmV4cG9ydCB7Y29tcGFyZVdpdGhSZW1vdGVEaWZmSWR9O1xuIiwgImltcG9ydCB7YWRkTGlua30gZnJvbSAnLi9hZGRMaW5rJztcbmltcG9ydCB7YnVpbGRMaW5rfSBmcm9tICcuL2J1aWxkTGluayc7XG5pbXBvcnQge2NvbXBhcmVXaXRoUmVtb3RlRGlmZklkfSBmcm9tICcuL2NvbXBhcmVXaXRoUmVtb3RlRGlmZklkJztcblxuY29uc3QgcHJvY2Vzc0lkID0gKFxuXHRpc1JldmlzaW9uUGFnZTogYm9vbGVhbixcblx0e1xuXHRcdGFydGljbGVJZCxcblx0XHRkaWZmSWQsXG5cdFx0b2xkSWQsXG5cdFx0cmV2aXNpb25JZCxcblx0fToge1xuXHRcdGFydGljbGVJZDogbnVtYmVyO1xuXHRcdGRpZmZJZDogbnVtYmVyIHwgbnVsbDtcblx0XHRvbGRJZDogbnVtYmVyIHwgbnVsbDtcblx0XHRyZXZpc2lvbklkOiBudW1iZXIgfCBudWxsO1xuXHR9XG4pOiB2b2lkID0+IHtcblx0aWYgKGRpZmZJZCkge1xuXHRcdGJ1aWxkTGluayhvbGRJZCwgZGlmZklkKTtcblx0XHRpZiAob2xkSWQpIHtcblx0XHRcdHZvaWQgY29tcGFyZVdpdGhSZW1vdGVEaWZmSWQoZGlmZklkKTtcblx0XHR9XG5cdH0gZWxzZSBpZiAocmV2aXNpb25JZCAmJiBpc1JldmlzaW9uUGFnZSkge1xuXHRcdGFkZExpbmsoYC9wLyR7cmV2aXNpb25JZH1gLCBgL3dpa2kvU3BlY2lhbDpQZXJtYWxpbmsvJHtyZXZpc2lvbklkfWApO1xuXHR9IGVsc2UgaWYgKGFydGljbGVJZCkge1xuXHRcdGFkZExpbmsoYC9jLyR7YXJ0aWNsZUlkfWAsIGAvaW5kZXgucGhwP2N1cmlkPSR7YXJ0aWNsZUlkfWApO1xuXHR9XG59O1xuXG5leHBvcnQge3Byb2Nlc3NJZH07XG4iLCAiaW1wb3J0IHtjaGVja1JldmlzaW9uUGFnZX0gZnJvbSAnLi9tb2R1bGVzL3V0aWwvY2hlY2tSZXZpc2lvblBhZ2UnO1xuaW1wb3J0IHtnZXRTaG9ydERvbWFpbnN9IGZyb20gJy4vbW9kdWxlcy91dGlsL2dldFNob3J0RG9tYWlucyc7XG5pbXBvcnQge3Byb2Nlc3NJZH0gZnJvbSAnLi9tb2R1bGVzL3Byb2Nlc3NJZCc7XG5cbihmdW5jdGlvbiBzaG9ydFVSTCgpIHtcblx0Y29uc3Qge3dnQWN0aW9uLCB3Z0FydGljbGVJZCwgd2dOYW1lc3BhY2VOdW1iZXJ9ID0gbXcuY29uZmlnLmdldCgpO1xuXG5cdGNvbnN0IGRvbWFpbnMgPSBnZXRTaG9ydERvbWFpbnMoKTtcblxuXHRpZiAoIWRvbWFpbnMubGVuZ3RoIHx8IHdnTmFtZXNwYWNlTnVtYmVyIDwgMCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGlmICh3Z0FjdGlvbiA9PT0gJ3ZpZXcnICYmIHdnQXJ0aWNsZUlkKSB7XG5cdFx0bXcuaG9vaygnd2lraXBhZ2UuY29udGVudCcpLmFkZCgoJGNvbnRlbnQpOiB2b2lkID0+IHtcblx0XHRcdGlmICgkY29udGVudC5hdHRyKCdpZCcpICE9PSAnbXctY29udGVudC10ZXh0Jykge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IGlzUmV2aXNpb25QYWdlOiBib29sZWFuID0gY2hlY2tSZXZpc2lvblBhZ2UoJGNvbnRlbnQpO1xuXG5cdFx0XHRwcm9jZXNzSWQoaXNSZXZpc2lvblBhZ2UsIHtcblx0XHRcdFx0YXJ0aWNsZUlkOiBtdy5jb25maWcuZ2V0KCd3Z0FydGljbGVJZCcpLFxuXHRcdFx0XHRkaWZmSWQ6IG13LmNvbmZpZy5nZXQoJ3dnRGlmZk5ld0lkJyksXG5cdFx0XHRcdG9sZElkOiBtdy5jb25maWcuZ2V0KCd3Z0RpZmZPbGRJZCcpLFxuXHRcdFx0XHRyZXZpc2lvbklkOiBtdy5jb25maWcuZ2V0KCd3Z1JldmlzaW9uSWQnKSxcblx0XHRcdH0pO1xuXHRcdH0pO1xuXHR9XG59KSgpO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFNQSxvQkFBcUJDLGNBQThCO0FBQ3hELFVBQ0VBLFNBQVNDLEtBQUssOEJBQThCLEVBQUVDLFVBQzlDRixTQUFTQyxLQUFLLDRDQUE0QyxFQUFFQyxVQUFVO0FBRXpFOztBQ0xBLElBQU1DLGtCQUFrQkEsTUFBZ0I7QUFDdkMsUUFBTTtJQUFDQztFQUFRLElBQUlDLEdBQUdDLE9BQU9DLElBQUk7QUFDakMsTUFBSUMsV0FBb0IsQ0FBQTtBQUV4QixVQUFRSixVQUFBO0lBQ1AsS0FBSztB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QixRQUFJRCxPQUFPO0FBQ1YsV0FBSzJCLHdCQUF3QjFCLE1BQU07SUFDcEM7RUFDRCxXQUFXbUMsY0FBY0YsZ0JBQWdCO0FBQ3hDNUcsWUFBQSxNQUFBeUIsT0FBY3FGLFVBQVUsR0FBQSwyQkFBQXJGLE9BQStCcUYsVUFBVSxDQUFFO0VBQ3BFLFdBQVdELFdBQVc7QUFDckI3RyxZQUFBLE1BQUF5QixPQUFjb0YsU0FBUyxHQUFBLG9CQUFBcEYsT0FBd0JvRixTQUFTLENBQUU7RUFDM0Q7QUFDRDs7Q0N4QkMsU0FBU0UsV0FBVztBQUNwQixRQUFNO0lBQUNDO0lBQVVDO0lBQWFDO0VBQWlCLElBQUkzSSxHQUFHQyxPQUFPQyxJQUFJO0FBRWpFLFFBQU1DLFdBQVVMLGdCQUFnQjtBQUVoQyxNQUFJLENBQUNLLFNBQVFOLFVBQVU4SSxvQkFBb0IsR0FBRztBQUM3QztFQUNEO0FBRUEsTUFBSUYsYUFBYSxVQUFVQyxhQUFhO0FBQ3ZDMUksT0FBRzRJLEtBQUssa0JBQWtCLEVBQUVDLElBQUtsSixjQUFtQjtBQUNuRCxVQUFJQSxTQUFTbUosS0FBSyxJQUFJLE1BQU0sbUJBQW1CO0FBQzlDO01BQ0Q7QUFFQSxZQUFNVCxpQkFBMEIzSSxrQkFBa0JDLFFBQVE7QUFFMUR5SSxnQkFBVUMsZ0JBQWdCO1FBQ3pCQyxXQUFXdEksR0FBR0MsT0FBT0MsSUFBSSxhQUFhO1FBQ3RDa0csUUFBUXBHLEdBQUdDLE9BQU9DLElBQUksYUFBYTtRQUNuQ2lHLE9BQU9uRyxHQUFHQyxPQUFPQyxJQUFJLGFBQWE7UUFDbENxSSxZQUFZdkksR0FBR0MsT0FBT0MsSUFBSSxjQUFjO01BQ3pDLENBQUM7SUFDRixDQUFDO0VBQ0Y7QUFDRCxHQUFHOyIsCiAgIm5hbWVzIjogWyJjaGVja1JldmlzaW9uUGFnZSIsICIkY29udGVudCIsICJmaW5kIiwgImxlbmd0aCIsICJnZXRTaG9ydERvbWFpbnMiLCAid2dXaWtpSUQiLCAibXciLCAiY29uZmlnIiwgImdldCIsICJkb21haW5zMiIsICJpbXBvcnRfZXh0X2dhZGdldDIiLCAicmVxdWlyZSIsICJpbXBvcnRfZXh0X2dhZGdldDMiLCAiX190b0VTTSIsICJpbXBvcnRfZXh0X2dhZGdldDQiLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAiZ2V0STE4bk1lc3NhZ2VzIiwgImxvY2FsaXplIiwgImVuIiwgImphIiwgImkxOG5NZXNzYWdlcyIsICJnZXRNZXNzYWdlIiwgImtleSIsICJpbXBvcnRfZXh0X2dhZGdldDUiLCAic2tpbiIsICJ3Z1VzZXJOYW1lIiwgImRvbWFpbnMiLCAiY2xpcGJvYXJkSW5zdGFuY2UiLCAiaGVhZGVyTGlua0V2ZW50TGlzdGVuZXIiLCAicmVtb3ZlIiwgInBvcnRsZXRMaW5rRXZlbnRMaXN0ZW5lciIsICJhZGRMaW5rIiwgImxpbmsiLCAicGVybWFMaW5rIiwgIl9jbGlwYm9hcmRJbnN0YW5jZSIsICJwb3J0bGV0TGluayIsICJkb2N1bWVudCIsICJxdWVyeVNlbGVjdG9yIiwgInBvcnRsZXRJZCIsICJ1dGlsIiwgImFkZFBvcnRsZXRMaW5rIiwgIl9wb3J0bGV0TGluayRmaXJzdEVsZSIsICJwb3J0bGV0TGlua0NsaWNrTGlzdGVuZXIiLCAiZXZlbnQiLCAicHJldmVudERlZmF1bHQiLCAiJGVsZW1lbnQiLCAiJCIsICJhcHBlbmQiLCAid2lkZ2V0cyIsICJDb3B5VGV4dExheW91dCIsICJsYWJlbCIsICJ0aXRsZSIsICJhbGlnbiIsICJjb3B5VGV4dCIsICJsb2NhdGlvbiIsICJocmVmIiwgImNvbmNhdCIsICJob3N0IiwgIl9pdGVyYXRvcjIiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAiZW50cmllcyIsICJfc3RlcDIiLCAicyIsICJuIiwgImRvbmUiLCAiaSIsICJkb21haW4iLCAidmFsdWUiLCAiZXJyIiwgImUiLCAiZiIsICJPTyIsICJ1aSIsICJhbGVydCIsICJzaXplIiwgImRlZmF1bHQiLCAiY3JlYXRlRWxlbWVudCIsICJhZGRFdmVudExpc3RlbmVyV2l0aFJlbW92ZXIiLCAidGFyZ2V0IiwgImZpcnN0RWxlbWVudENoaWxkIiwgInR5cGUiLCAibGlzdGVuZXIiLCAiaXNDaXRpemVuIiwgInByZXBlbmQiLCAiY2xhc3MiLCAiaGVhZGVyTGluayIsICJjbGFzc05hbWUiLCAidGlwcHkiLCAiYXJyb3ciLCAiY29udGVudCIsICJwbGFjZW1lbnQiLCAiJGhlYWRlckVsZW1lbnQiLCAiaWQiLCAicHJlcGVuZFRvIiwgImZ1bGxMaW5rIiwgIiRub3RpZnlFbGVtZW50IiwgIm9uQ2xpY2siLCAic3RvcFByb3BhZ2F0aW9uIiwgImhlYWRlckxpbmtDbGlja0xpc3RlbmVyIiwgIm5vdGlmeSIsICJ0YWciLCAiZGVzdHJveSIsICJDbGlwYm9hcmQiLCAidGV4dCIsICJidWlsZExpbmsiLCAib2xkSWQiLCAiZGlmZklkIiwgInZlcnNpb24iLCAiaW1wb3J0X2V4dF9nYWRnZXQ2IiwgImFwaSIsICJpbml0TXdBcGkiLCAiaW1wb3J0X2V4dF9nYWRnZXQ3IiwgInBhcmFtZXRlcnMiLCAiYWN0aW9uIiwgImZvcm1hdCIsICJmb3JtYXR2ZXJzaW9uIiwgInByb3AiLCAidG9yZWxhdGl2ZSIsICJzbWF4YWdlIiwgIm1heGFnZSIsICJxdWVyeUFwaSIsICJfcmVmIiwgIl9hc3luY1RvR2VuZXJhdG9yIiwgImZyb21yZXYiLCAiZXJyb3IiLCAiY29uc29sZSIsICJ0b2FzdGlmeSIsICJjbG9zZSIsICJkdXJhdGlvbiIsICJfeCIsICJhcHBseSIsICJhcmd1bWVudHMiLCAiY29tcGFyZVdpdGhSZW1vdGVEaWZmSWQiLCAiX3JlZjIiLCAiX3Jlc3BvbnNlJGNvbXBhcmUiLCAicmVzcG9uc2UiLCAiZnJvbXJldmlkIiwgIl94MiIsICJwcm9jZXNzSWQiLCAiaXNSZXZpc2lvblBhZ2UiLCAiYXJ0aWNsZUlkIiwgInJldmlzaW9uSWQiLCAic2hvcnRVUkwiLCAid2dBY3Rpb24iLCAid2dBcnRpY2xlSWQiLCAid2dOYW1lc3BhY2VOdW1iZXIiLCAiaG9vayIsICJhZGQiLCAiYXR0ciJdCn0K

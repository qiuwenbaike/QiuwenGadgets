/**
 * SPDX-License-Identifier: GPL-3.0-or-later
 * _addText: '{{Gadget Header|license=GPL-3.0-or-later}}'
 *
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/ShortURL}
 * @author 安忆 <i@anyi.in>; WaitSpring <me@waitspring.com>
 * @license GPL-3.0-or-later {@link https://www.qiuwenbaike.cn/wiki/H:GPL-3.0}
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
//! src/ShortURL/modules/util/checkRevisionPage.ts
var checkRevisionPage = ($content) => {
  return ($content.find("#contentSub #mw-revision-nav").length || $content.find("main#content>.pre-content #mw-revision-nav").length) > 0;
};
//! src/ShortURL/modules/util/getDomains.ts
var getDomains = () => {
  const {
    wgWikiID
  } = mw.config.get();
  let domains2 = [];
  switch (wgWikiID) {
    case "zhqiuwenbaike":
      domains2 = ["qwbk.cc", "qwbk.org", "bkwz.cn"];
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
    "Short URL": (0, import_ext_gadget.localize)({
      en: "Short URL",
      "zh-hans": "短链接",
      "zh-hant": "短網址"
    }),
    "Short URL copied to clipboard": (0, import_ext_gadget.localize)({
      en: "The short URL has been copied to clipboard:",
      "zh-hans": "已复制本页短链接：",
      "zh-hant": "已復製本頁短網址："
    }),
    "Show short URL": (0, import_ext_gadget.localize)({
      en: "Show short URL",
      "zh-hans": "显示该页短链接",
      "zh-hant": "顯示該頁短網址"
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
  skin
} = mw.config.get();
var clipboardInstance;
var headerLinkEventListener = {
  remove: () => {
  }
};
var portletLinkEventListener = {
  remove: () => {
  }
};
var addLink = (link) => {
  var _clipboardInstance;
  let portletLink = document.querySelector("#t-shortlink");
  if (!portletLink) {
    const portletId = document.querySelector("#p-cactions") ? "p-cactions" : "p-tb";
    portletLink = mw.util.addPortletLink(portletId, "#", getMessage("Short URL"), "t-shortlink", getMessage("Show short URL"));
  }
  if (portletLink) {
    var _portletLink$firstEle;
    const portletLinkClickListener = (event) => {
      event.preventDefault();
      const $element = $("<div>");
      const domains2 = getDomains();
      var _iterator2 = _createForOfIteratorHelper(domains2), _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
          const domain = _step2.value;
          $element.append(
            // eslint-disable-next-line @typescript-eslint/no-unsafe-call
            new mw.widgets.CopyTextLayout({
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
      void OO.ui.alert($element, {
        size: "medium",
        title: getMessage("Short URL copied to clipboard")
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
      "aria-label": getMessage("Short URL"),
      href: "#"
    }, /* @__PURE__ */ import_ext_gadget3.default.createElement("span", {
      className: "gadget-short-link__icon"
    }, getMessage("Short URL")));
    (0, import_ext_gadget5.tippy)(headerLink, {
      arrow: true,
      content: getMessage("Short URL"),
      placement: "bottom"
    });
    const $headerElement = $(/* @__PURE__ */ import_ext_gadget3.default.createElement("div", {
      className: "mw-indicator",
      id: "mw-indicator-shortURL"
    }, headerLink));
    $headerElement.prependTo(".mw-indicators");
  }
  const fullLink = "https://qwbk.cc".concat(link);
  const $notifyElement = $(/* @__PURE__ */ import_ext_gadget3.default.createElement("span", null, getMessage("Short URL copied to clipboard"), /* @__PURE__ */ import_ext_gadget3.default.createElement("br", null), /* @__PURE__ */ import_ext_gadget3.default.createElement("a", {
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
  if (oldId) {
    link += "/".concat(oldId);
  }
  link += "/".concat(diffId);
  addLink(link);
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
  torelative: "prev"
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
    addLink("/p/".concat(revisionId));
  } else if (articleId) {
    addLink("/c/".concat(articleId));
  }
};
//! src/ShortURL/ShortURL.ts
var {
  wgAction,
  wgArticleId,
  wgNamespaceNumber
} = mw.config.get();
var domains = getDomains();
if (domains.length > 0 && wgAction === "view" && wgArticleId && wgNamespaceNumber >= 0) {
  mw.hook("wikipage.content").add(function shortURL($content) {
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

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1Nob3J0VVJML21vZHVsZXMvdXRpbC9jaGVja1JldmlzaW9uUGFnZS50cyIsICJzcmMvU2hvcnRVUkwvbW9kdWxlcy91dGlsL2dldERvbWFpbnMudHMiLCAic3JjL1Nob3J0VVJML21vZHVsZXMvYWRkTGluay50c3giLCAic3JjL1Nob3J0VVJML21vZHVsZXMvaTE4bi50cyIsICJzcmMvU2hvcnRVUkwvbW9kdWxlcy9idWlsZExpbmsudHMiLCAic3JjL1Nob3J0VVJML29wdGlvbnMuanNvbiIsICJzcmMvU2hvcnRVUkwvbW9kdWxlcy9hcGkudHMiLCAic3JjL1Nob3J0VVJML21vZHVsZXMvdXRpbC9xdWVyeUFwaS50cyIsICJzcmMvU2hvcnRVUkwvbW9kdWxlcy9jb21wYXJlV2l0aFJlbW90ZURpZmZJZC50cyIsICJzcmMvU2hvcnRVUkwvbW9kdWxlcy9wcm9jZXNzSWQudHMiLCAic3JjL1Nob3J0VVJML1Nob3J0VVJMLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBjaGVja1JldmlzaW9uUGFnZSA9ICgkY29udGVudDogSlF1ZXJ5KTogYm9vbGVhbiA9PiB7XG5cdHJldHVybiAoXG5cdFx0KCRjb250ZW50LmZpbmQoJyNjb250ZW50U3ViICNtdy1yZXZpc2lvbi1uYXYnKS5sZW5ndGggfHxcblx0XHRcdCRjb250ZW50LmZpbmQoJ21haW4jY29udGVudD4ucHJlLWNvbnRlbnQgI213LXJldmlzaW9uLW5hdicpLmxlbmd0aCkgPiAwXG5cdCk7XG59O1xuXG5leHBvcnQge2NoZWNrUmV2aXNpb25QYWdlfTtcbiIsICJjb25zdCBnZXREb21haW5zID0gKCk6IHN0cmluZ1tdID0+IHtcblx0Y29uc3Qge3dnV2lraUlEfSA9IG13LmNvbmZpZy5nZXQoKTtcblx0bGV0IGRvbWFpbnM6IHN0cmluZ1tdID0gW107XG5cblx0c3dpdGNoICh3Z1dpa2lJRCkge1xuXHRcdGNhc2UgJ3pocWl1d2VuYmFpa2UnOlxuXHRcdFx0ZG9tYWlucyA9IFsncXdiay5jYycsICdxd2JrLm9yZycsICdia3d6LmNuJ107XG5cdFx0XHRicmVhaztcblx0XHRjYXNlICdsaWNlbmNld2lraSc6XG5cdFx0XHRkb21haW5zID0gWydsLnF3YmsuY2MnLCAnbC5ia3d6LmNuJ107XG5cdFx0XHRicmVhaztcblx0XHRjYXNlICdtbmNxaXV3ZW5iYWlrZSc6XG5cdFx0XHRkb21haW5zID0gWydtbmMucXdiay5jYycsICdtbmMuYmt3ei5jbiddO1xuXHRcdFx0YnJlYWs7XG5cdH1cblxuXHRyZXR1cm4gZG9tYWlucztcbn07XG5cbmV4cG9ydCB7Z2V0RG9tYWluc307XG4iLCAiaW1wb3J0IHtDbGlwYm9hcmR9IGZyb20gJ2V4dC5nYWRnZXQuQ2xpcGJvYXJkJztcbmltcG9ydCBSZWFjdCBmcm9tICdleHQuZ2FkZ2V0LlJlYWN0JztcbmltcG9ydCB7YWRkRXZlbnRMaXN0ZW5lcldpdGhSZW1vdmVyfSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuaW1wb3J0IHtnZXREb21haW5zfSBmcm9tICcuL3V0aWwvZ2V0RG9tYWlucyc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vaTE4bic7XG5pbXBvcnQge3RpcHB5fSBmcm9tICdleHQuZ2FkZ2V0LlRpcHB5JztcblxuY29uc3Qge3NraW59ID0gbXcuY29uZmlnLmdldCgpO1xuXG5sZXQgY2xpcGJvYXJkSW5zdGFuY2U6IENsaXBib2FyZEpTIHwgdW5kZWZpbmVkO1xubGV0IGhlYWRlckxpbmtFdmVudExpc3RlbmVyOiBSZXR1cm5UeXBlPHR5cGVvZiBhZGRFdmVudExpc3RlbmVyV2l0aFJlbW92ZXI+ID0ge1xuXHRyZW1vdmU6ICgpOiB2b2lkID0+IHt9LFxufTtcbmxldCBwb3J0bGV0TGlua0V2ZW50TGlzdGVuZXI6IFJldHVyblR5cGU8dHlwZW9mIGFkZEV2ZW50TGlzdGVuZXJXaXRoUmVtb3Zlcj4gPSB7XG5cdHJlbW92ZTogKCk6IHZvaWQgPT4ge30sXG59O1xuXG5jb25zdCBhZGRMaW5rID0gKGxpbms6IHN0cmluZyk6IHZvaWQgPT4ge1xuXHRsZXQgcG9ydGxldExpbms6IEhUTUxMSUVsZW1lbnQgfCBudWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Qtc2hvcnRsaW5rJyk7XG5cdGlmICghcG9ydGxldExpbmspIHtcblx0XHRjb25zdCBwb3J0bGV0SWQ6ICdwLWNhY3Rpb25zJyB8ICdwLXRiJyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwLWNhY3Rpb25zJykgPyAncC1jYWN0aW9ucycgOiAncC10Yic7XG5cdFx0cG9ydGxldExpbmsgPSBtdy51dGlsLmFkZFBvcnRsZXRMaW5rKFxuXHRcdFx0cG9ydGxldElkLFxuXHRcdFx0JyMnLFxuXHRcdFx0Z2V0TWVzc2FnZSgnU2hvcnQgVVJMJyksXG5cdFx0XHQndC1zaG9ydGxpbmsnLFxuXHRcdFx0Z2V0TWVzc2FnZSgnU2hvdyBzaG9ydCBVUkwnKVxuXHRcdCk7XG5cdH1cblxuXHRpZiAocG9ydGxldExpbmspIHtcblx0XHRjb25zdCBwb3J0bGV0TGlua0NsaWNrTGlzdGVuZXIgPSAoZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkID0+IHtcblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cblx0XHRcdGNvbnN0ICRlbGVtZW50OiBKUXVlcnkgPSAkKCc8ZGl2PicpO1xuXHRcdFx0Y29uc3QgZG9tYWlucyA9IGdldERvbWFpbnMoKTtcblxuXHRcdFx0Zm9yIChjb25zdCBkb21haW4gb2YgZG9tYWlucykge1xuXHRcdFx0XHQkZWxlbWVudC5hcHBlbmQoXG5cdFx0XHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnNhZmUtY2FsbFxuXHRcdFx0XHRcdG5ldyBtdy53aWRnZXRzLkNvcHlUZXh0TGF5b3V0KHtcblx0XHRcdFx0XHRcdGFsaWduOiAndG9wJyxcblx0XHRcdFx0XHRcdGNvcHlUZXh0OiBgaHR0cHM6Ly8ke2RvbWFpbn0ke2xpbmt9YCxcblx0XHRcdFx0XHR9KS4kZWxlbWVudCBhcyBKUXVlcnlcblx0XHRcdFx0KTtcblx0XHRcdH1cblxuXHRcdFx0dm9pZCBPTy51aS5hbGVydCgkZWxlbWVudCwge1xuXHRcdFx0XHRzaXplOiAnbWVkaXVtJyxcblx0XHRcdFx0dGl0bGU6IGdldE1lc3NhZ2UoJ1Nob3J0IFVSTCBjb3BpZWQgdG8gY2xpcGJvYXJkJyksXG5cdFx0XHR9KTtcblx0XHR9O1xuXG5cdFx0cG9ydGxldExpbmtFdmVudExpc3RlbmVyLnJlbW92ZSgpO1xuXHRcdHBvcnRsZXRMaW5rRXZlbnRMaXN0ZW5lciA9IGFkZEV2ZW50TGlzdGVuZXJXaXRoUmVtb3Zlcih7XG5cdFx0XHR0YXJnZXQ6IChwb3J0bGV0TGluay5maXJzdEVsZW1lbnRDaGlsZCA/PyBwb3J0bGV0TGluaykgYXMgSFRNTEVsZW1lbnQsXG5cdFx0XHR0eXBlOiAnY2xpY2snLFxuXHRcdFx0bGlzdGVuZXI6IHBvcnRsZXRMaW5rQ2xpY2tMaXN0ZW5lcixcblx0XHR9KTtcblxuXHRcdGNvbnN0IGlzQ2l0aXplbjogYm9vbGVhbiA9IHNraW4gPT09ICdjaXRpemVuJztcblx0XHRpZiAoaXNDaXRpemVuICYmICEkKHBvcnRsZXRMaW5rKS5maW5kKCcubXctdWktaWNvbi13aWtpbWVkaWEtc2hvcnRsaW5rJykubGVuZ3RoKSB7XG5cdFx0XHQkKHBvcnRsZXRMaW5rKVxuXHRcdFx0XHQuZmluZCgnYScpXG5cdFx0XHRcdC5wcmVwZW5kKDxzcGFuIGNsYXNzPVwiY2l0aXplbi11aS1pY29uIG13LXVpLWljb24td2lraW1lZGlhLXNob3J0bGlua1wiIC8+KTtcblx0XHR9XG5cdH1cblxuXHRsZXQgaGVhZGVyTGluazogSFRNTEFuY2hvckVsZW1lbnQgfCBudWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI213LWluZGljYXRvci1zaG9ydFVSTCBhJyk7XG5cdGlmICghaGVhZGVyTGluaykge1xuXHRcdGhlYWRlckxpbmsgPSAoXG5cdFx0XHQ8YSBhcmlhLWxhYmVsPXtnZXRNZXNzYWdlKCdTaG9ydCBVUkwnKX0gaHJlZj1cIiNcIj5cblx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiZ2FkZ2V0LXNob3J0LWxpbmtfX2ljb25cIj57Z2V0TWVzc2FnZSgnU2hvcnQgVVJMJyl9PC9zcGFuPlxuXHRcdFx0PC9hPlxuXHRcdCkgYXMgSFRNTEFuY2hvckVsZW1lbnQ7XG5cblx0XHR0aXBweShoZWFkZXJMaW5rLCB7XG5cdFx0XHRhcnJvdzogdHJ1ZSxcblx0XHRcdGNvbnRlbnQ6IGdldE1lc3NhZ2UoJ1Nob3J0IFVSTCcpLFxuXHRcdFx0cGxhY2VtZW50OiAnYm90dG9tJyxcblx0XHR9KTtcblxuXHRcdGNvbnN0ICRoZWFkZXJFbGVtZW50ID0gJChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibXctaW5kaWNhdG9yXCIgaWQ9XCJtdy1pbmRpY2F0b3Itc2hvcnRVUkxcIj5cblx0XHRcdFx0e2hlYWRlckxpbmt9XG5cdFx0XHQ8L2Rpdj5cblx0XHQpIGFzIEpRdWVyeTtcblxuXHRcdCRoZWFkZXJFbGVtZW50LnByZXBlbmRUbygnLm13LWluZGljYXRvcnMnKTtcblx0fVxuXG5cdGNvbnN0IGZ1bGxMaW5rOiBzdHJpbmcgPSBgaHR0cHM6Ly9xd2JrLmNjJHtsaW5rfWA7XG5cblx0Y29uc3QgJG5vdGlmeUVsZW1lbnQgPSAkKFxuXHRcdDxzcGFuPlxuXHRcdFx0e2dldE1lc3NhZ2UoJ1Nob3J0IFVSTCBjb3BpZWQgdG8gY2xpcGJvYXJkJyl9XG5cdFx0XHQ8YnIgLz5cblx0XHRcdDxhXG5cdFx0XHRcdGhyZWY9XCIjXCJcblx0XHRcdFx0b25DbGljaz17KGV2ZW50KTogdm9pZCA9PiB7XG5cdFx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHRcdFx0fX1cblx0XHRcdD5cblx0XHRcdFx0e2Z1bGxMaW5rfVxuXHRcdFx0PC9hPlxuXHRcdDwvc3Bhbj5cblx0KSBhcyBKUXVlcnk7XG5cblx0Y29uc3QgaGVhZGVyTGlua0NsaWNrTGlzdGVuZXIgPSAoZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkID0+IHtcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cdFx0dm9pZCBtdy5ub3RpZnkoJG5vdGlmeUVsZW1lbnQsIHtcblx0XHRcdHRhZzogJ3Nob3J0VVJMJyxcblx0XHRcdHR5cGU6ICdpbmZvJyxcblx0XHR9KTtcblx0fTtcblxuXHRoZWFkZXJMaW5rRXZlbnRMaXN0ZW5lci5yZW1vdmUoKTtcblx0aGVhZGVyTGlua0V2ZW50TGlzdGVuZXIgPSBhZGRFdmVudExpc3RlbmVyV2l0aFJlbW92ZXIoe1xuXHRcdHRhcmdldDogaGVhZGVyTGluayxcblx0XHR0eXBlOiAnY2xpY2snLFxuXHRcdGxpc3RlbmVyOiBoZWFkZXJMaW5rQ2xpY2tMaXN0ZW5lcixcblx0fSk7XG5cblx0Y2xpcGJvYXJkSW5zdGFuY2U/LmRlc3Ryb3koKTtcblx0Y2xpcGJvYXJkSW5zdGFuY2UgPSBuZXcgQ2xpcGJvYXJkKGhlYWRlckxpbmssIHtcblx0XHR0ZXh0OiAoKTogc3RyaW5nID0+IGZ1bGxMaW5rLFxuXHR9KTtcbn07XG5cbmV4cG9ydCB7YWRkTGlua307XG4iLCAiaW1wb3J0IHtsb2NhbGl6ZX0gZnJvbSAnZXh0LmdhZGdldC5pMThuJztcblxuY29uc3QgZ2V0STE4bk1lc3NhZ2VzID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdCdOZXR3b3JrIGVycm9yJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdOZXR3b3JrIGVycm9yJyxcblx0XHRcdGphOiAn44ON44OD44OI44Ov44O844Kv44Ko44Op44O8Jyxcblx0XHRcdCd6aC1oYW5zJzogJ+e9kee7nOW8guW4uCcsXG5cdFx0XHQnemgtaGFudCc6ICfntrLot6/nlbDluLgnLFxuXHRcdH0pLFxuXHRcdCdTaG9ydCBVUkwnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1Nob3J0IFVSTCcsXG5cdFx0XHQnemgtaGFucyc6ICfnn63pk77mjqUnLFxuXHRcdFx0J3poLWhhbnQnOiAn55+t57ay5Z2AJyxcblx0XHR9KSxcblx0XHQnU2hvcnQgVVJMIGNvcGllZCB0byBjbGlwYm9hcmQnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1RoZSBzaG9ydCBVUkwgaGFzIGJlZW4gY29waWVkIHRvIGNsaXBib2FyZDonLFxuXHRcdFx0J3poLWhhbnMnOiAn5bey5aSN5Yi25pys6aG155+t6ZO+5o6l77yaJyxcblx0XHRcdCd6aC1oYW50JzogJ+W3suW+qeijveacrOmggeefree2suWdgO+8micsXG5cdFx0fSksXG5cdFx0J1Nob3cgc2hvcnQgVVJMJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdTaG93IHNob3J0IFVSTCcsXG5cdFx0XHQnemgtaGFucyc6ICfmmL7npLror6XpobXnn63pk77mjqUnLFxuXHRcdFx0J3poLWhhbnQnOiAn6aGv56S66Kmy6aCB55+t57ay5Z2AJyxcblx0XHR9KSxcblx0fTtcbn07XG5cbmNvbnN0IGkxOG5NZXNzYWdlcyA9IGdldEkxOG5NZXNzYWdlcygpO1xuXG5jb25zdCBnZXRNZXNzYWdlOiBHZXRNZXNzYWdlczx0eXBlb2YgaTE4bk1lc3NhZ2VzPiA9IChrZXkpID0+IHtcblx0cmV0dXJuIGkxOG5NZXNzYWdlc1trZXldIHx8IGtleTtcbn07XG5cbmV4cG9ydCB7Z2V0TWVzc2FnZX07XG4iLCAiaW1wb3J0IHthZGRMaW5rfSBmcm9tICcuL2FkZExpbmsnO1xuXG5jb25zdCBidWlsZExpbmsgPSAob2xkSWQ6IG51bWJlciB8IG51bGwsIGRpZmZJZDogbnVtYmVyKTogdm9pZCA9PiB7XG5cdGxldCBsaW5rOiBzdHJpbmcgPSAnL2QnO1xuXHRpZiAob2xkSWQpIHtcblx0XHRsaW5rICs9IGAvJHtvbGRJZH1gO1xuXHR9XG5cdGxpbmsgKz0gYC8ke2RpZmZJZH1gO1xuXG5cdGFkZExpbmsobGluayk7XG59O1xuXG5leHBvcnQge2J1aWxkTGlua307XG4iLCAie1xuXHRcInZlcnNpb25cIjogXCIyLjBcIlxufVxuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7aW5pdE13QXBpfSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG5jb25zdCBhcGk6IG13LkFwaSA9IGluaXRNd0FwaShgU2hvcnRVUkwvJHtPUFRJT05TLnZlcnNpb259YCk7XG5cbmV4cG9ydCB7YXBpfTtcbiIsICJpbXBvcnQge2FwaX0gZnJvbSAnLi4vYXBpJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi4vaTE4bic7XG5pbXBvcnQge3RvYXN0aWZ5fSBmcm9tICdleHQuZ2FkZ2V0LlRvYXN0aWZ5JztcblxudHlwZSBDb21wYXJlUmVzcG9uc2UgPSB7XG5cdGNvbXBhcmU/OiB7XG5cdFx0ZnJvbXJldmlkOiBudW1iZXI7XG5cdH07XG59O1xuXG5jb25zdCBwYXJhbWV0ZXJzOiBBcGlDb21wYXJlUGFnZXNQYXJhbXMgPSB7XG5cdGFjdGlvbjogJ2NvbXBhcmUnLFxuXHRmb3JtYXQ6ICdqc29uJyxcblx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRwcm9wOiAnaWRzJyxcblx0dG9yZWxhdGl2ZTogJ3ByZXYnLFxufTtcblxuY29uc3QgcXVlcnlBcGkgPSBhc3luYyAoZGlmZklkOiBudW1iZXIpOiBQcm9taXNlPENvbXBhcmVSZXNwb25zZT4gPT4ge1xuXHR0cnkge1xuXHRcdHJldHVybiBhd2FpdCBhcGkuZ2V0KHtcblx0XHRcdC4uLnBhcmFtZXRlcnMsXG5cdFx0XHRmcm9tcmV2OiBkaWZmSWQsXG5cdFx0fSBhcyB0eXBlb2YgcGFyYW1ldGVycyk7XG5cdH0gY2F0Y2ggKGVycm9yOiB1bmtub3duKSB7XG5cdFx0Y29uc29sZS5lcnJvcignW1Nob3J0VVJMXSBBamF4IGVycm9yOicsIGVycm9yKTtcblx0XHR0b2FzdGlmeShcblx0XHRcdHtcblx0XHRcdFx0dGV4dDogZ2V0TWVzc2FnZSgnTmV0d29yayBlcnJvcicpLFxuXHRcdFx0XHRjbG9zZTogdHJ1ZSxcblx0XHRcdFx0ZHVyYXRpb246IC0xLFxuXHRcdFx0fSxcblx0XHRcdCdlcnJvcidcblx0XHQpO1xuXG5cdFx0cmV0dXJuIHt9O1xuXHR9XG59O1xuXG5leHBvcnQge3F1ZXJ5QXBpfTtcbiIsICJpbXBvcnQge2J1aWxkTGlua30gZnJvbSAnLi9idWlsZExpbmsnO1xuaW1wb3J0IHtxdWVyeUFwaX0gZnJvbSAnLi91dGlsL3F1ZXJ5QXBpJztcblxuY29uc3QgY29tcGFyZVdpdGhSZW1vdGVEaWZmSWQgPSBhc3luYyAoZGlmZklkOiBudW1iZXIpOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0Y29uc3QgcmVzcG9uc2U6IEF3YWl0ZWQ8UmV0dXJuVHlwZTx0eXBlb2YgcXVlcnlBcGk+PiA9IGF3YWl0IHF1ZXJ5QXBpKGRpZmZJZCk7XG5cdGlmIChkaWZmSWQgPT09IG13LmNvbmZpZy5nZXQoJ3dnRGlmZk5ld0lkJykgJiYgcmVzcG9uc2VbJ2NvbXBhcmUnXT8uZnJvbXJldmlkID09PSBtdy5jb25maWcuZ2V0KCd3Z0RpZmZPbGRJZCcpKSB7XG5cdFx0YnVpbGRMaW5rKDAsIGRpZmZJZCk7XG5cdH1cbn07XG5cbmV4cG9ydCB7Y29tcGFyZVdpdGhSZW1vdGVEaWZmSWR9O1xuIiwgImltcG9ydCB7YWRkTGlua30gZnJvbSAnLi9hZGRMaW5rJztcbmltcG9ydCB7YnVpbGRMaW5rfSBmcm9tICcuL2J1aWxkTGluayc7XG5pbXBvcnQge2NvbXBhcmVXaXRoUmVtb3RlRGlmZklkfSBmcm9tICcuL2NvbXBhcmVXaXRoUmVtb3RlRGlmZklkJztcblxuY29uc3QgcHJvY2Vzc0lkID0gKFxuXHRpc1JldmlzaW9uUGFnZTogYm9vbGVhbixcblx0e1xuXHRcdGFydGljbGVJZCxcblx0XHRkaWZmSWQsXG5cdFx0b2xkSWQsXG5cdFx0cmV2aXNpb25JZCxcblx0fToge1xuXHRcdGFydGljbGVJZDogbnVtYmVyO1xuXHRcdGRpZmZJZDogbnVtYmVyIHwgbnVsbDtcblx0XHRvbGRJZDogbnVtYmVyIHwgbnVsbDtcblx0XHRyZXZpc2lvbklkOiBudW1iZXIgfCBudWxsO1xuXHR9XG4pOiB2b2lkID0+IHtcblx0aWYgKGRpZmZJZCkge1xuXHRcdGJ1aWxkTGluayhvbGRJZCwgZGlmZklkKTtcblx0XHRpZiAob2xkSWQpIHtcblx0XHRcdHZvaWQgY29tcGFyZVdpdGhSZW1vdGVEaWZmSWQoZGlmZklkKTtcblx0XHR9XG5cdH0gZWxzZSBpZiAocmV2aXNpb25JZCAmJiBpc1JldmlzaW9uUGFnZSkge1xuXHRcdGFkZExpbmsoYC9wLyR7cmV2aXNpb25JZH1gKTtcblx0fSBlbHNlIGlmIChhcnRpY2xlSWQpIHtcblx0XHRhZGRMaW5rKGAvYy8ke2FydGljbGVJZH1gKTtcblx0fVxufTtcblxuZXhwb3J0IHtwcm9jZXNzSWR9O1xuIiwgImltcG9ydCB7Y2hlY2tSZXZpc2lvblBhZ2V9IGZyb20gJy4vbW9kdWxlcy91dGlsL2NoZWNrUmV2aXNpb25QYWdlJztcbmltcG9ydCB7Z2V0RG9tYWluc30gZnJvbSAnLi9tb2R1bGVzL3V0aWwvZ2V0RG9tYWlucyc7XG5pbXBvcnQge3Byb2Nlc3NJZH0gZnJvbSAnLi9tb2R1bGVzL3Byb2Nlc3NJZCc7XG5cbmNvbnN0IHt3Z0FjdGlvbiwgd2dBcnRpY2xlSWQsIHdnTmFtZXNwYWNlTnVtYmVyfSA9IG13LmNvbmZpZy5nZXQoKTtcblxuY29uc3QgZG9tYWlucyA9IGdldERvbWFpbnMoKTtcblxuaWYgKGRvbWFpbnMubGVuZ3RoID4gMCAmJiB3Z0FjdGlvbiA9PT0gJ3ZpZXcnICYmIHdnQXJ0aWNsZUlkICYmIHdnTmFtZXNwYWNlTnVtYmVyID49IDApIHtcblx0bXcuaG9vaygnd2lraXBhZ2UuY29udGVudCcpLmFkZChmdW5jdGlvbiBzaG9ydFVSTCgkY29udGVudCk6IHZvaWQge1xuXHRcdGlmICgkY29udGVudC5hdHRyKCdpZCcpICE9PSAnbXctY29udGVudC10ZXh0Jykge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGNvbnN0IGlzUmV2aXNpb25QYWdlOiBib29sZWFuID0gY2hlY2tSZXZpc2lvblBhZ2UoJGNvbnRlbnQpO1xuXG5cdFx0cHJvY2Vzc0lkKGlzUmV2aXNpb25QYWdlLCB7XG5cdFx0XHRhcnRpY2xlSWQ6IG13LmNvbmZpZy5nZXQoJ3dnQXJ0aWNsZUlkJyksXG5cdFx0XHRkaWZmSWQ6IG13LmNvbmZpZy5nZXQoJ3dnRGlmZk5ld0lkJyksXG5cdFx0XHRvbGRJZDogbXcuY29uZmlnLmdldCgnd2dEaWZmT2xkSWQnKSxcblx0XHRcdHJldmlzaW9uSWQ6IG13LmNvbmZpZy5nZXQoJ3dnUmV2aXNpb25JZCcpLFxuXHRcdH0pO1xuXHR9KTtcbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsb0JBQXFCQyxjQUE4QjtBQUN4RCxVQUNFQSxTQUFTQyxLQUFLLDhCQUE4QixFQUFFQyxVQUM5Q0YsU0FBU0MsS0FBSyw0Q0FBNEMsRUFBRUMsVUFBVTtBQUV6RTs7QUNMQSxJQUFNQyxhQUFhQSxNQUFnQjtBQUNsQyxRQUFNO0lBQUNDO0VBQVEsSUFBSUMsR0FBR0MsT0FBT0MsSUFBSTtBQUNqQyxNQUFJQyxXQUFvQixDQUFBO0FBRXhCLFVBQVFKLFVBQUE7SUFDUCxLQUFLO0FBQ0pJLGlCQUFVLENBQUMsV0FBVyxZQUFZLFNBQVM7QUFDM0M7SUFDRCxLQUFLO0FBQ0pBLGlCQUFVLENBQUMsYUFBYSxXQUFXO0FBQ25DO0lBQ0QsS0FBSztBQUNKQSxpQkFBVSxDQUFDLGVBQWUsYUFBYTtBQUN2QztFQUNGO0FBRUEsU0FBT0E7QUFDUjs7QUNqQkEsSUFBQUMscUJBQXdCQyxRQUFBLHNCQUFBO0FBQ3hCLElBQUFDLHFCQUFrQkMsUUFBQUYsUUFBQSxrQkFBQSxHQUFBLENBQUE7QUFDbEIsSUFBQUcscUJBQTBDSCxRQUFBLGlCQUFBOztBQ0YxQyxJQUFBSSxvQkFBdUJKLFFBQUEsaUJBQUE7QUFFdkIsSUFBTUssa0JBQWtCQSxNQUFN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VUMsZ0JBQWdCO01BQ3pCQyxXQUFXNUgsR0FBR0MsT0FBT0MsSUFBSSxhQUFhO01BQ3RDMEYsUUFBUTVGLEdBQUdDLE9BQU9DLElBQUksYUFBYTtNQUNuQ3lGLE9BQU8zRixHQUFHQyxPQUFPQyxJQUFJLGFBQWE7TUFDbEMySCxZQUFZN0gsR0FBR0MsT0FBT0MsSUFBSSxjQUFjO0lBQ3pDLENBQUM7RUFDRixDQUFDO0FBQ0Y7IiwKICAibmFtZXMiOiBbImNoZWNrUmV2aXNpb25QYWdlIiwgIiRjb250ZW50IiwgImZpbmQiLCAibGVuZ3RoIiwgImdldERvbWFpbnMiLCAid2dXaWtpSUQiLCAibXciLCAiY29uZmlnIiwgImdldCIsICJkb21haW5zMiIsICJpbXBvcnRfZXh0X2dhZGdldDIiLCAicmVxdWlyZSIsICJpbXBvcnRfZXh0X2dhZGdldDMiLCAiX190b0VTTSIsICJpbXBvcnRfZXh0X2dhZGdldDQiLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAiZ2V0STE4bk1lc3NhZ2VzIiwgImxvY2FsaXplIiwgImVuIiwgImphIiwgImkxOG5NZXNzYWdlcyIsICJnZXRNZXNzYWdlIiwgImtleSIsICJpbXBvcnRfZXh0X2dhZGdldDUiLCAic2tpbiIsICJjbGlwYm9hcmRJbnN0YW5jZSIsICJoZWFkZXJMaW5rRXZlbnRMaXN0ZW5lciIsICJyZW1vdmUiLCAicG9ydGxldExpbmtFdmVudExpc3RlbmVyIiwgImFkZExpbmsiLCAibGluayIsICJfY2xpcGJvYXJkSW5zdGFuY2UiLCAicG9ydGxldExpbmsiLCAiZG9jdW1lbnQiLCAicXVlcnlTZWxlY3RvciIsICJwb3J0bGV0SWQiLCAidXRpbCIsICJhZGRQb3J0bGV0TGluayIsICJfcG9ydGxldExpbmskZmlyc3RFbGUiLCAicG9ydGxldExpbmtDbGlja0xpc3RlbmVyIiwgImV2ZW50IiwgInByZXZlbnREZWZhdWx0IiwgIiRlbGVtZW50IiwgIiQiLCAiX2l0ZXJhdG9yMiIsICJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsICJfc3RlcDIiLCAicyIsICJuIiwgImRvbmUiLCAiZG9tYWluIiwgInZhbHVlIiwgImFwcGVuZCIsICJ3aWRnZXRzIiwgIkNvcHlUZXh0TGF5b3V0IiwgImFsaWduIiwgImNvcHlUZXh0IiwgImNvbmNhdCIsICJlcnIiLCAiZSIsICJmIiwgIk9PIiwgInVpIiwgImFsZXJ0IiwgInNpemUiLCAidGl0bGUiLCAiYWRkRXZlbnRMaXN0ZW5lcldpdGhSZW1vdmVyIiwgInRhcmdldCIsICJmaXJzdEVsZW1lbnRDaGlsZCIsICJ0eXBlIiwgImxpc3RlbmVyIiwgImlzQ2l0aXplbiIsICJwcmVwZW5kIiwgImRlZmF1bHQiLCAiY3JlYXRlRWxlbWVudCIsICJjbGFzcyIsICJoZWFkZXJMaW5rIiwgImhyZWYiLCAiY2xhc3NOYW1lIiwgInRpcHB5IiwgImFycm93IiwgImNvbnRlbnQiLCAicGxhY2VtZW50IiwgIiRoZWFkZXJFbGVtZW50IiwgImlkIiwgInByZXBlbmRUbyIsICJmdWxsTGluayIsICIkbm90aWZ5RWxlbWVudCIsICJvbkNsaWNrIiwgInN0b3BQcm9wYWdhdGlvbiIsICJoZWFkZXJMaW5rQ2xpY2tMaXN0ZW5lciIsICJub3RpZnkiLCAidGFnIiwgImRlc3Ryb3kiLCAiQ2xpcGJvYXJkIiwgInRleHQiLCAiYnVpbGRMaW5rIiwgIm9sZElkIiwgImRpZmZJZCIsICJ2ZXJzaW9uIiwgImltcG9ydF9leHRfZ2FkZ2V0NiIsICJhcGkiLCAiaW5pdE13QXBpIiwgImltcG9ydF9leHRfZ2FkZ2V0NyIsICJwYXJhbWV0ZXJzIiwgImFjdGlvbiIsICJmb3JtYXQiLCAiZm9ybWF0dmVyc2lvbiIsICJwcm9wIiwgInRvcmVsYXRpdmUiLCAicXVlcnlBcGkiLCAiX3JlZiIsICJfYXN5bmNUb0dlbmVyYXRvciIsICJmcm9tcmV2IiwgImVycm9yIiwgImNvbnNvbGUiLCAidG9hc3RpZnkiLCAiY2xvc2UiLCAiZHVyYXRpb24iLCAiX3giLCAiYXBwbHkiLCAiYXJndW1lbnRzIiwgImNvbXBhcmVXaXRoUmVtb3RlRGlmZklkIiwgIl9yZWYyIiwgIl9yZXNwb25zZSRjb21wYXJlIiwgInJlc3BvbnNlIiwgImZyb21yZXZpZCIsICJfeDIiLCAicHJvY2Vzc0lkIiwgImlzUmV2aXNpb25QYWdlIiwgImFydGljbGVJZCIsICJyZXZpc2lvbklkIiwgIndnQWN0aW9uIiwgIndnQXJ0aWNsZUlkIiwgIndnTmFtZXNwYWNlTnVtYmVyIiwgImRvbWFpbnMiLCAiaG9vayIsICJhZGQiLCAic2hvcnRVUkwiLCAiYXR0ciJdCn0K

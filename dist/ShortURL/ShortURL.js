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
//! src/ShortURL/modules/addPortletLink.tsx
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
//! src/ShortURL/modules/addPortletLink.tsx
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
var addPortletLink = (link) => {
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
      for (var _i = 0, _arr = ["qwbk.cc", "qwbk.org", "bkwz.cn"]; _i < _arr.length; _i++) {
        const domain = _arr[_i];
        $element.append(
          // eslint-disable-next-line @typescript-eslint/no-unsafe-call
          new mw.widgets.CopyTextLayout({
            align: "top",
            copyText: "https://".concat(domain).concat(link)
          }).$element
        );
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
    if (isCitizen) {
      $(portletLink).find("a").prepend('<span class="citizen-ui-icon mw-ui-icon-wikimedia-shortlink"></span>');
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
  addPortletLink(link);
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
    addPortletLink("/p/".concat(revisionId));
  } else if (articleId) {
    addPortletLink("/c/".concat(articleId));
  }
};
//! src/ShortURL/ShortURL.ts
var {
  wgAction,
  wgArticleId,
  wgNamespaceNumber
} = mw.config.get();
if (wgAction === "view" && wgArticleId && wgNamespaceNumber >= 0) {
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

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1Nob3J0VVJML21vZHVsZXMvdXRpbC9jaGVja1JldmlzaW9uUGFnZS50cyIsICJzcmMvU2hvcnRVUkwvbW9kdWxlcy9hZGRQb3J0bGV0TGluay50c3giLCAic3JjL1Nob3J0VVJML21vZHVsZXMvaTE4bi50cyIsICJzcmMvU2hvcnRVUkwvbW9kdWxlcy9idWlsZExpbmsudHMiLCAic3JjL1Nob3J0VVJML29wdGlvbnMuanNvbiIsICJzcmMvU2hvcnRVUkwvbW9kdWxlcy9hcGkudHMiLCAic3JjL1Nob3J0VVJML21vZHVsZXMvdXRpbC9xdWVyeUFwaS50cyIsICJzcmMvU2hvcnRVUkwvbW9kdWxlcy9jb21wYXJlV2l0aFJlbW90ZURpZmZJZC50cyIsICJzcmMvU2hvcnRVUkwvbW9kdWxlcy9wcm9jZXNzSWQudHMiLCAic3JjL1Nob3J0VVJML1Nob3J0VVJMLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBjaGVja1JldmlzaW9uUGFnZSA9ICgkY29udGVudDogSlF1ZXJ5KTogYm9vbGVhbiA9PiB7XG5cdHJldHVybiAoXG5cdFx0KCRjb250ZW50LmZpbmQoJyNjb250ZW50U3ViICNtdy1yZXZpc2lvbi1uYXYnKS5sZW5ndGggfHxcblx0XHRcdCRjb250ZW50LmZpbmQoJ21haW4jY29udGVudD4ucHJlLWNvbnRlbnQgI213LXJldmlzaW9uLW5hdicpLmxlbmd0aCkgPiAwXG5cdCk7XG59O1xuXG5leHBvcnQge2NoZWNrUmV2aXNpb25QYWdlfTtcbiIsICJpbXBvcnQge0NsaXBib2FyZH0gZnJvbSAnZXh0LmdhZGdldC5DbGlwYm9hcmQnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ2V4dC5nYWRnZXQuUmVhY3QnO1xuaW1wb3J0IHthZGRFdmVudExpc3RlbmVyV2l0aFJlbW92ZXJ9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vaTE4bic7XG5pbXBvcnQge3RpcHB5fSBmcm9tICdleHQuZ2FkZ2V0LlRpcHB5JztcblxuY29uc3Qge3NraW59ID0gbXcuY29uZmlnLmdldCgpO1xuXG5sZXQgY2xpcGJvYXJkSW5zdGFuY2U6IENsaXBib2FyZEpTIHwgdW5kZWZpbmVkO1xubGV0IGhlYWRlckxpbmtFdmVudExpc3RlbmVyOiBSZXR1cm5UeXBlPHR5cGVvZiBhZGRFdmVudExpc3RlbmVyV2l0aFJlbW92ZXI+ID0ge1xuXHRyZW1vdmU6ICgpOiB2b2lkID0+IHt9LFxufTtcbmxldCBwb3J0bGV0TGlua0V2ZW50TGlzdGVuZXI6IFJldHVyblR5cGU8dHlwZW9mIGFkZEV2ZW50TGlzdGVuZXJXaXRoUmVtb3Zlcj4gPSB7XG5cdHJlbW92ZTogKCk6IHZvaWQgPT4ge30sXG59O1xuXG5jb25zdCBhZGRQb3J0bGV0TGluayA9IChsaW5rOiBzdHJpbmcpOiB2b2lkID0+IHtcblx0bGV0IHBvcnRsZXRMaW5rOiBIVE1MTElFbGVtZW50IHwgbnVsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0LXNob3J0bGluaycpO1xuXHRpZiAoIXBvcnRsZXRMaW5rKSB7XG5cdFx0Y29uc3QgcG9ydGxldElkOiAncC1jYWN0aW9ucycgfCAncC10YicgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcC1jYWN0aW9ucycpID8gJ3AtY2FjdGlvbnMnIDogJ3AtdGInO1xuXHRcdHBvcnRsZXRMaW5rID0gbXcudXRpbC5hZGRQb3J0bGV0TGluayhcblx0XHRcdHBvcnRsZXRJZCxcblx0XHRcdCcjJyxcblx0XHRcdGdldE1lc3NhZ2UoJ1Nob3J0IFVSTCcpLFxuXHRcdFx0J3Qtc2hvcnRsaW5rJyxcblx0XHRcdGdldE1lc3NhZ2UoJ1Nob3cgc2hvcnQgVVJMJylcblx0XHQpO1xuXHR9XG5cblx0aWYgKHBvcnRsZXRMaW5rKSB7XG5cdFx0Y29uc3QgcG9ydGxldExpbmtDbGlja0xpc3RlbmVyID0gKGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCA9PiB7XG5cdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cdFx0XHRjb25zdCAkZWxlbWVudDogSlF1ZXJ5ID0gJCgnPGRpdj4nKTtcblx0XHRcdGZvciAoY29uc3QgZG9tYWluIG9mIFsncXdiay5jYycsICdxd2JrLm9yZycsICdia3d6LmNuJ10pIHtcblx0XHRcdFx0JGVsZW1lbnQuYXBwZW5kKFxuXHRcdFx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW5zYWZlLWNhbGxcblx0XHRcdFx0XHRuZXcgbXcud2lkZ2V0cy5Db3B5VGV4dExheW91dCh7XG5cdFx0XHRcdFx0XHRhbGlnbjogJ3RvcCcsXG5cdFx0XHRcdFx0XHRjb3B5VGV4dDogYGh0dHBzOi8vJHtkb21haW59JHtsaW5rfWAsXG5cdFx0XHRcdFx0fSkuJGVsZW1lbnQgYXMgSlF1ZXJ5XG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cblx0XHRcdHZvaWQgT08udWkuYWxlcnQoJGVsZW1lbnQsIHtcblx0XHRcdFx0c2l6ZTogJ21lZGl1bScsXG5cdFx0XHRcdHRpdGxlOiBnZXRNZXNzYWdlKCdTaG9ydCBVUkwgY29waWVkIHRvIGNsaXBib2FyZCcpLFxuXHRcdFx0fSk7XG5cdFx0fTtcblxuXHRcdHBvcnRsZXRMaW5rRXZlbnRMaXN0ZW5lci5yZW1vdmUoKTtcblx0XHRwb3J0bGV0TGlua0V2ZW50TGlzdGVuZXIgPSBhZGRFdmVudExpc3RlbmVyV2l0aFJlbW92ZXIoe1xuXHRcdFx0dGFyZ2V0OiAocG9ydGxldExpbmsuZmlyc3RFbGVtZW50Q2hpbGQgPz8gcG9ydGxldExpbmspIGFzIEhUTUxFbGVtZW50LFxuXHRcdFx0dHlwZTogJ2NsaWNrJyxcblx0XHRcdGxpc3RlbmVyOiBwb3J0bGV0TGlua0NsaWNrTGlzdGVuZXIsXG5cdFx0fSk7XG5cblx0XHRjb25zdCBpc0NpdGl6ZW46IGJvb2xlYW4gPSBza2luID09PSAnY2l0aXplbic7XG5cdFx0aWYgKGlzQ2l0aXplbikge1xuXHRcdFx0JChwb3J0bGV0TGluaykuZmluZCgnYScpLnByZXBlbmQoJzxzcGFuIGNsYXNzPVwiY2l0aXplbi11aS1pY29uIG13LXVpLWljb24td2lraW1lZGlhLXNob3J0bGlua1wiPjwvc3Bhbj4nKTtcblx0XHR9XG5cdH1cblxuXHRsZXQgaGVhZGVyTGluazogSFRNTEFuY2hvckVsZW1lbnQgfCBudWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI213LWluZGljYXRvci1zaG9ydFVSTCBhJyk7XG5cdGlmICghaGVhZGVyTGluaykge1xuXHRcdGhlYWRlckxpbmsgPSAoXG5cdFx0XHQ8YSBhcmlhLWxhYmVsPXtnZXRNZXNzYWdlKCdTaG9ydCBVUkwnKX0gaHJlZj1cIiNcIj5cblx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiZ2FkZ2V0LXNob3J0LWxpbmtfX2ljb25cIj57Z2V0TWVzc2FnZSgnU2hvcnQgVVJMJyl9PC9zcGFuPlxuXHRcdFx0PC9hPlxuXHRcdCkgYXMgSFRNTEFuY2hvckVsZW1lbnQ7XG5cblx0XHR0aXBweShoZWFkZXJMaW5rLCB7XG5cdFx0XHRhcnJvdzogdHJ1ZSxcblx0XHRcdGNvbnRlbnQ6IGdldE1lc3NhZ2UoJ1Nob3J0IFVSTCcpLFxuXHRcdFx0cGxhY2VtZW50OiAnYm90dG9tJyxcblx0XHR9KTtcblxuXHRcdGNvbnN0ICRoZWFkZXJFbGVtZW50ID0gJChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibXctaW5kaWNhdG9yXCIgaWQ9XCJtdy1pbmRpY2F0b3Itc2hvcnRVUkxcIj5cblx0XHRcdFx0e2hlYWRlckxpbmt9XG5cdFx0XHQ8L2Rpdj5cblx0XHQpIGFzIEpRdWVyeTtcblxuXHRcdCRoZWFkZXJFbGVtZW50LnByZXBlbmRUbygnLm13LWluZGljYXRvcnMnKTtcblx0fVxuXG5cdGNvbnN0IGZ1bGxMaW5rOiBzdHJpbmcgPSBgaHR0cHM6Ly9xd2JrLmNjJHtsaW5rfWA7XG5cblx0Y29uc3QgJG5vdGlmeUVsZW1lbnQgPSAkKFxuXHRcdDxzcGFuPlxuXHRcdFx0e2dldE1lc3NhZ2UoJ1Nob3J0IFVSTCBjb3BpZWQgdG8gY2xpcGJvYXJkJyl9XG5cdFx0XHQ8YnIgLz5cblx0XHRcdDxhXG5cdFx0XHRcdGhyZWY9XCIjXCJcblx0XHRcdFx0b25DbGljaz17KGV2ZW50KTogdm9pZCA9PiB7XG5cdFx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHRcdFx0fX1cblx0XHRcdD5cblx0XHRcdFx0e2Z1bGxMaW5rfVxuXHRcdFx0PC9hPlxuXHRcdDwvc3Bhbj5cblx0KSBhcyBKUXVlcnk7XG5cblx0Y29uc3QgaGVhZGVyTGlua0NsaWNrTGlzdGVuZXIgPSAoZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkID0+IHtcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cdFx0dm9pZCBtdy5ub3RpZnkoJG5vdGlmeUVsZW1lbnQsIHtcblx0XHRcdHRhZzogJ3Nob3J0VVJMJyxcblx0XHRcdHR5cGU6ICdpbmZvJyxcblx0XHR9KTtcblx0fTtcblxuXHRoZWFkZXJMaW5rRXZlbnRMaXN0ZW5lci5yZW1vdmUoKTtcblx0aGVhZGVyTGlua0V2ZW50TGlzdGVuZXIgPSBhZGRFdmVudExpc3RlbmVyV2l0aFJlbW92ZXIoe1xuXHRcdHRhcmdldDogaGVhZGVyTGluayxcblx0XHR0eXBlOiAnY2xpY2snLFxuXHRcdGxpc3RlbmVyOiBoZWFkZXJMaW5rQ2xpY2tMaXN0ZW5lcixcblx0fSk7XG5cblx0Y2xpcGJvYXJkSW5zdGFuY2U/LmRlc3Ryb3koKTtcblx0Y2xpcGJvYXJkSW5zdGFuY2UgPSBuZXcgQ2xpcGJvYXJkKGhlYWRlckxpbmssIHtcblx0XHR0ZXh0OiAoKTogc3RyaW5nID0+IGZ1bGxMaW5rLFxuXHR9KTtcbn07XG5cbmV4cG9ydCB7YWRkUG9ydGxldExpbmt9O1xuIiwgImltcG9ydCB7bG9jYWxpemV9IGZyb20gJ2V4dC5nYWRnZXQuaTE4bic7XG5cbmNvbnN0IGdldEkxOG5NZXNzYWdlcyA9ICgpID0+IHtcblx0cmV0dXJuIHtcblx0XHQnTmV0d29yayBlcnJvcic6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnTmV0d29yayBlcnJvcicsXG5cdFx0XHRqYTogJ+ODjeODg+ODiOODr+ODvOOCr+OCqOODqeODvCcsXG5cdFx0XHQnemgtaGFucyc6ICfnvZHnu5zlvILluLgnLFxuXHRcdFx0J3poLWhhbnQnOiAn57ay6Lev55Ww5bi4Jyxcblx0XHR9KSxcblx0XHQnU2hvcnQgVVJMJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdTaG9ydCBVUkwnLFxuXHRcdFx0J3poLWhhbnMnOiAn55+t6ZO+5o6lJyxcblx0XHRcdCd6aC1oYW50JzogJ+efree2suWdgCcsXG5cdFx0fSksXG5cdFx0J1Nob3J0IFVSTCBjb3BpZWQgdG8gY2xpcGJvYXJkJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdUaGUgc2hvcnQgVVJMIGhhcyBiZWVuIGNvcGllZCB0byBjbGlwYm9hcmQ6Jyxcblx0XHRcdCd6aC1oYW5zJzogJ+W3suWkjeWItuacrOmhteefremTvuaOpe+8micsXG5cdFx0XHQnemgtaGFudCc6ICflt7Llvqnoo73mnKzpoIHnn63ntrLlnYDvvJonLFxuXHRcdH0pLFxuXHRcdCdTaG93IHNob3J0IFVSTCc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnU2hvdyBzaG9ydCBVUkwnLFxuXHRcdFx0J3poLWhhbnMnOiAn5pi+56S66K+l6aG155+t6ZO+5o6lJyxcblx0XHRcdCd6aC1oYW50JzogJ+mhr+ekuuipsumggeefree2suWdgCcsXG5cdFx0fSksXG5cdH07XG59O1xuXG5jb25zdCBpMThuTWVzc2FnZXMgPSBnZXRJMThuTWVzc2FnZXMoKTtcblxuY29uc3QgZ2V0TWVzc2FnZTogR2V0TWVzc2FnZXM8dHlwZW9mIGkxOG5NZXNzYWdlcz4gPSAoa2V5KSA9PiB7XG5cdHJldHVybiBpMThuTWVzc2FnZXNba2V5XSB8fCBrZXk7XG59O1xuXG5leHBvcnQge2dldE1lc3NhZ2V9O1xuIiwgImltcG9ydCB7YWRkUG9ydGxldExpbmt9IGZyb20gJy4vYWRkUG9ydGxldExpbmsnO1xuXG5jb25zdCBidWlsZExpbmsgPSAob2xkSWQ6IG51bWJlciB8IG51bGwsIGRpZmZJZDogbnVtYmVyKTogdm9pZCA9PiB7XG5cdGxldCBsaW5rOiBzdHJpbmcgPSAnL2QnO1xuXHRpZiAob2xkSWQpIHtcblx0XHRsaW5rICs9IGAvJHtvbGRJZH1gO1xuXHR9XG5cdGxpbmsgKz0gYC8ke2RpZmZJZH1gO1xuXG5cdGFkZFBvcnRsZXRMaW5rKGxpbmspO1xufTtcblxuZXhwb3J0IHtidWlsZExpbmt9O1xuIiwgIntcblx0XCJ2ZXJzaW9uXCI6IFwiMi4wXCJcbn1cbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge2luaXRNd0FwaX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxuY29uc3QgYXBpOiBtdy5BcGkgPSBpbml0TXdBcGkoYFNob3J0VVJMLyR7T1BUSU9OUy52ZXJzaW9ufWApO1xuXG5leHBvcnQge2FwaX07XG4iLCAiaW1wb3J0IHthcGl9IGZyb20gJy4uL2FwaSc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4uL2kxOG4nO1xuaW1wb3J0IHt0b2FzdGlmeX0gZnJvbSAnZXh0LmdhZGdldC5Ub2FzdGlmeSc7XG5cbnR5cGUgQ29tcGFyZVJlc3BvbnNlID0ge1xuXHRjb21wYXJlPzoge1xuXHRcdGZyb21yZXZpZDogbnVtYmVyO1xuXHR9O1xufTtcblxuY29uc3QgcGFyYW1ldGVyczogQXBpQ29tcGFyZVBhZ2VzUGFyYW1zID0ge1xuXHRhY3Rpb246ICdjb21wYXJlJyxcblx0Zm9ybWF0OiAnanNvbicsXG5cdGZvcm1hdHZlcnNpb246ICcyJyxcblx0cHJvcDogJ2lkcycsXG5cdHRvcmVsYXRpdmU6ICdwcmV2Jyxcbn07XG5cbmNvbnN0IHF1ZXJ5QXBpID0gYXN5bmMgKGRpZmZJZDogbnVtYmVyKTogUHJvbWlzZTxDb21wYXJlUmVzcG9uc2U+ID0+IHtcblx0dHJ5IHtcblx0XHRyZXR1cm4gYXdhaXQgYXBpLmdldCh7XG5cdFx0XHQuLi5wYXJhbWV0ZXJzLFxuXHRcdFx0ZnJvbXJldjogZGlmZklkLFxuXHRcdH0pO1xuXHR9IGNhdGNoIChlcnJvcjogdW5rbm93bikge1xuXHRcdGNvbnNvbGUuZXJyb3IoJ1tTaG9ydFVSTF0gQWpheCBlcnJvcjonLCBlcnJvcik7XG5cdFx0dG9hc3RpZnkoXG5cdFx0XHR7XG5cdFx0XHRcdHRleHQ6IGdldE1lc3NhZ2UoJ05ldHdvcmsgZXJyb3InKSxcblx0XHRcdFx0Y2xvc2U6IHRydWUsXG5cdFx0XHRcdGR1cmF0aW9uOiAtMSxcblx0XHRcdH0sXG5cdFx0XHQnZXJyb3InXG5cdFx0KTtcblxuXHRcdHJldHVybiB7fTtcblx0fVxufTtcblxuZXhwb3J0IHtxdWVyeUFwaX07XG4iLCAiaW1wb3J0IHtidWlsZExpbmt9IGZyb20gJy4vYnVpbGRMaW5rJztcbmltcG9ydCB7cXVlcnlBcGl9IGZyb20gJy4vdXRpbC9xdWVyeUFwaSc7XG5cbmNvbnN0IGNvbXBhcmVXaXRoUmVtb3RlRGlmZklkID0gYXN5bmMgKGRpZmZJZDogbnVtYmVyKTogUHJvbWlzZTx2b2lkPiA9PiB7XG5cdGNvbnN0IHJlc3BvbnNlOiBBd2FpdGVkPFJldHVyblR5cGU8dHlwZW9mIHF1ZXJ5QXBpPj4gPSBhd2FpdCBxdWVyeUFwaShkaWZmSWQpO1xuXHRpZiAoZGlmZklkID09PSBtdy5jb25maWcuZ2V0KCd3Z0RpZmZOZXdJZCcpICYmIHJlc3BvbnNlWydjb21wYXJlJ10/LmZyb21yZXZpZCA9PT0gbXcuY29uZmlnLmdldCgnd2dEaWZmT2xkSWQnKSkge1xuXHRcdGJ1aWxkTGluaygwLCBkaWZmSWQpO1xuXHR9XG59O1xuXG5leHBvcnQge2NvbXBhcmVXaXRoUmVtb3RlRGlmZklkfTtcbiIsICJpbXBvcnQge2FkZFBvcnRsZXRMaW5rfSBmcm9tICcuL2FkZFBvcnRsZXRMaW5rJztcbmltcG9ydCB7YnVpbGRMaW5rfSBmcm9tICcuL2J1aWxkTGluayc7XG5pbXBvcnQge2NvbXBhcmVXaXRoUmVtb3RlRGlmZklkfSBmcm9tICcuL2NvbXBhcmVXaXRoUmVtb3RlRGlmZklkJztcblxuY29uc3QgcHJvY2Vzc0lkID0gKFxuXHRpc1JldmlzaW9uUGFnZTogYm9vbGVhbixcblx0e1xuXHRcdGFydGljbGVJZCxcblx0XHRkaWZmSWQsXG5cdFx0b2xkSWQsXG5cdFx0cmV2aXNpb25JZCxcblx0fToge1xuXHRcdGFydGljbGVJZDogbnVtYmVyO1xuXHRcdGRpZmZJZDogbnVtYmVyIHwgbnVsbDtcblx0XHRvbGRJZDogbnVtYmVyIHwgbnVsbDtcblx0XHRyZXZpc2lvbklkOiBudW1iZXIgfCBudWxsO1xuXHR9XG4pOiB2b2lkID0+IHtcblx0aWYgKGRpZmZJZCkge1xuXHRcdGJ1aWxkTGluayhvbGRJZCwgZGlmZklkKTtcblx0XHRpZiAob2xkSWQpIHtcblx0XHRcdHZvaWQgY29tcGFyZVdpdGhSZW1vdGVEaWZmSWQoZGlmZklkKTtcblx0XHR9XG5cdH0gZWxzZSBpZiAocmV2aXNpb25JZCAmJiBpc1JldmlzaW9uUGFnZSkge1xuXHRcdGFkZFBvcnRsZXRMaW5rKGAvcC8ke3JldmlzaW9uSWR9YCk7XG5cdH0gZWxzZSBpZiAoYXJ0aWNsZUlkKSB7XG5cdFx0YWRkUG9ydGxldExpbmsoYC9jLyR7YXJ0aWNsZUlkfWApO1xuXHR9XG59O1xuXG5leHBvcnQge3Byb2Nlc3NJZH07XG4iLCAiaW1wb3J0IHtjaGVja1JldmlzaW9uUGFnZX0gZnJvbSAnLi9tb2R1bGVzL3V0aWwvY2hlY2tSZXZpc2lvblBhZ2UnO1xuaW1wb3J0IHtwcm9jZXNzSWR9IGZyb20gJy4vbW9kdWxlcy9wcm9jZXNzSWQnO1xuXG5jb25zdCB7d2dBY3Rpb24sIHdnQXJ0aWNsZUlkLCB3Z05hbWVzcGFjZU51bWJlcn0gPSBtdy5jb25maWcuZ2V0KCk7XG5cbmlmICh3Z0FjdGlvbiA9PT0gJ3ZpZXcnICYmIHdnQXJ0aWNsZUlkICYmIHdnTmFtZXNwYWNlTnVtYmVyID49IDApIHtcblx0bXcuaG9vaygnd2lraXBhZ2UuY29udGVudCcpLmFkZCgoJGNvbnRlbnQpOiB2b2lkID0+IHtcblx0XHRpZiAoJGNvbnRlbnQuYXR0cignaWQnKSAhPT0gJ213LWNvbnRlbnQtdGV4dCcpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRjb25zdCBpc1JldmlzaW9uUGFnZTogYm9vbGVhbiA9IGNoZWNrUmV2aXNpb25QYWdlKCRjb250ZW50KTtcblxuXHRcdHByb2Nlc3NJZChpc1JldmlzaW9uUGFnZSwge1xuXHRcdFx0YXJ0aWNsZUlkOiBtdy5jb25maWcuZ2V0KCd3Z0FydGljbGVJZCcpLFxuXHRcdFx0ZGlmZklkOiBtdy5jb25maWcuZ2V0KCd3Z0RpZmZOZXdJZCcpLFxuXHRcdFx0b2xkSWQ6IG13LmNvbmZpZy5nZXQoJ3dnRGlmZk9sZElkJyksXG5cdFx0XHRyZXZpc2lvbklkOiBtdy5jb25maWcuZ2V0KCd3Z1JldmlzaW9uSWQnKSxcblx0XHR9KTtcblx0fSk7XG59XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLG9CQUFxQkMsY0FBOEI7QUFDeEQsVUFDRUEsU0FBU0MsS0FBSyw4QkFBOEIsRUFBRUMsVUFDOUNGLFNBQVNDLEtBQUssNENBQTRDLEVBQUVDLFVBQVU7QUFFekU7O0FDTEEsSUFBQUMscUJBQXdCQyxRQUFBLHNCQUFBO0FBQ3hCLElBQUFDLHFCQUFrQkMsUUFBQUYsUUFBQSxrQkFBQSxHQUFBLENBQUE7QUFDbEIsSUFBQUcscUJBQTBDSCxRQUFBLGlCQUFBOztBQ0YxQyxJQUFBSSxvQkFBdUJKLFFBQUEsaUJBQUE7QUFFdkIsSUFBTUssa0JBQWtCQSxNQUFNO0FBQzdCLFNBQU87SUFDTixrQkFBQSxHQUFpQkQsa0JBQUFFLFVBQVM7TUFDekJDLElBQUk7TUFDSkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxX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RUFBQTtBQUFBLEVBQUE7O0FDQ04sSUFBTU8sWUFBWUEsQ0FDakJDLGdCQUNBO0VBQ0NDO0VBQ0FoQztFQUNBRDtFQUNBa0M7QUFDRCxNQU1VO0FBQ1YsTUFBSWpDLFFBQVE7QUFDWEYsY0FBVUMsT0FBT0MsTUFBTTtBQUN2QixRQUFJRCxPQUFPO0FBQ1YsV0FBS3lCLHdCQUF3QnhCLE1BQU07SUFDcEM7RUFDRCxXQUFXaUMsY0FBY0YsZ0JBQWdCO0FBQ3hDMUYsbUJBQUEsTUFBQXNCLE9BQXFCc0UsVUFBVSxDQUFFO0VBQ2xDLFdBQVdELFdBQVc7QUFDckIzRixtQkFBQSxNQUFBc0IsT0FBcUJxRSxTQUFTLENBQUU7RUFDakM7QUFDRDs7QUN6QkEsSUFBTTtFQUFDRTtFQUFVQztFQUFhQztBQUFpQixJQUFJdEcsR0FBR0MsT0FBT0MsSUFBSTtBQUVqRSxJQUFJa0csYUFBYSxVQUFVQyxlQUFlQyxxQkFBcUIsR0FBRztBQUNqRXRHLEtBQUd1RyxLQUFLLGtCQUFrQixFQUFFQyxJQUFLMUgsY0FBbUI7QUFDbkQsUUFBSUEsU0FBUzJILEtBQUssSUFBSSxNQUFNLG1CQUFtQjtBQUM5QztJQUNEO0FBRUEsVUFBTVIsaUJBQTBCcEgsa0JBQWtCQyxRQUFRO0FBRTFEa0gsY0FBVUMsZ0JBQWdCO01BQ3pCQyxXQUFXbEcsR0FBR0MsT0FBT0MsSUFBSSxhQUFhO01BQ3RDZ0UsUUFBUWxFLEdBQUdDLE9BQU9DLElBQUksYUFBYTtNQUNuQytELE9BQU9qRSxHQUFHQyxPQUFPQyxJQUFJLGFBQWE7TUFDbENpRyxZQUFZbkcsR0FBR0MsT0FBT0MsSUFBSSxjQUFjO0lBQ3pDLENBQUM7RUFDRixDQUFDO0FBQ0Y7IiwKICAibmFtZXMiOiBbImNoZWNrUmV2aXNpb25QYWdlIiwgIiRjb250ZW50IiwgImZpbmQiLCAibGVuZ3RoIiwgImltcG9ydF9leHRfZ2FkZ2V0MiIsICJyZXF1aXJlIiwgImltcG9ydF9leHRfZ2FkZ2V0MyIsICJfX3RvRVNNIiwgImltcG9ydF9leHRfZ2FkZ2V0NCIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJnZXRJMThuTWVzc2FnZXMiLCAibG9jYWxpemUiLCAiZW4iLCAiamEiLCAiaTE4bk1lc3NhZ2VzIiwgImdldE1lc3NhZ2UiLCAia2V5IiwgImltcG9ydF9leHRfZ2FkZ2V0NSIsICJza2luIiwgIm13IiwgImNvbmZpZyIsICJnZXQiLCAiY2xpcGJvYXJkSW5zdGFuY2UiLCAiaGVhZGVyTGlua0V2ZW50TGlzdGVuZXIiLCAicmVtb3ZlIiwgInBvcnRsZXRMaW5rRXZlbnRMaXN0ZW5lciIsICJhZGRQb3J0bGV0TGluayIsICJsaW5rIiwgIl9jbGlwYm9hcmRJbnN0YW5jZSIsICJwb3J0bGV0TGluayIsICJkb2N1bWVudCIsICJxdWVyeVNlbGVjdG9yIiwgInBvcnRsZXRJZCIsICJ1dGlsIiwgIl9wb3J0bGV0TGluayRmaXJzdEVsZSIsICJwb3J0bGV0TGlua0NsaWNrTGlzdGVuZXIiLCAiZXZlbnQiLCAicHJldmVudERlZmF1bHQiLCAiJGVsZW1lbnQiLCAiJCIsICJfaSIsICJfYXJyIiwgImRvbWFpbiIsICJhcHBlbmQiLCAid2lkZ2V0cyIsICJDb3B5VGV4dExheW91dCIsICJhbGlnbiIsICJjb3B5VGV4dCIsICJjb25jYXQiLCAiT08iLCAidWkiLCAiYWxlcnQiLCAic2l6ZSIsICJ0aXRsZSIsICJhZGRFdmVudExpc3RlbmVyV2l0aFJlbW92ZXIiLCAidGFyZ2V0IiwgImZpcnN0RWxlbWVudENoaWxkIiwgInR5cGUiLCAibGlzdGVuZXIiLCAiaXNDaXRpemVuIiwgInByZXBlbmQiLCAiaGVhZGVyTGluayIsICJkZWZhdWx0IiwgImNyZWF0ZUVsZW1lbnQiLCAiaHJlZiIsICJjbGFzc05hbWUiLCAidGlwcHkiLCAiYXJyb3ciLCAiY29udGVudCIsICJwbGFjZW1lbnQiLCAiJGhlYWRlckVsZW1lbnQiLCAiaWQiLCAicHJlcGVuZFRvIiwgImZ1bGxMaW5rIiwgIiRub3RpZnlFbGVtZW50IiwgIm9uQ2xpY2siLCAic3RvcFByb3BhZ2F0aW9uIiwgImhlYWRlckxpbmtDbGlja0xpc3RlbmVyIiwgIm5vdGlmeSIsICJ0YWciLCAiZGVzdHJveSIsICJDbGlwYm9hcmQiLCAidGV4dCIsICJidWlsZExpbmsiLCAib2xkSWQiLCAiZGlmZklkIiwgInZlcnNpb24iLCAiaW1wb3J0X2V4dF9nYWRnZXQ2IiwgImFwaSIsICJpbml0TXdBcGkiLCAiaW1wb3J0X2V4dF9nYWRnZXQ3IiwgInBhcmFtZXRlcnMiLCAiYWN0aW9uIiwgImZvcm1hdCIsICJmb3JtYXR2ZXJzaW9uIiwgInByb3AiLCAidG9yZWxhdGl2ZSIsICJxdWVyeUFwaSIsICJfcmVmIiwgIl9hc3luY1RvR2VuZXJhdG9yIiwgImZyb21yZXYiLCAiZXJyb3IiLCAiY29uc29sZSIsICJ0b2FzdGlmeSIsICJjbG9zZSIsICJkdXJhdGlvbiIsICJfeCIsICJhcHBseSIsICJhcmd1bWVudHMiLCAiY29tcGFyZVdpdGhSZW1vdGVEaWZmSWQiLCAiX3JlZjIiLCAiX3Jlc3BvbnNlJGNvbXBhcmUiLCAicmVzcG9uc2UiLCAiZnJvbXJldmlkIiwgIl94MiIsICJwcm9jZXNzSWQiLCAiaXNSZXZpc2lvblBhZ2UiLCAiYXJ0aWNsZUlkIiwgInJldmlzaW9uSWQiLCAid2dBY3Rpb24iLCAid2dBcnRpY2xlSWQiLCAid2dOYW1lc3BhY2VOdW1iZXIiLCAiaG9vayIsICJhZGQiLCAiYXR0ciJdCn0K

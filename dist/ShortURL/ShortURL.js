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
if (wgAction === "view" && wgArticleId && wgNamespaceNumber >= 0) {
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1Nob3J0VVJML21vZHVsZXMvdXRpbC9jaGVja1JldmlzaW9uUGFnZS50cyIsICJzcmMvU2hvcnRVUkwvbW9kdWxlcy9hZGRMaW5rLnRzeCIsICJzcmMvU2hvcnRVUkwvbW9kdWxlcy9pMThuLnRzIiwgInNyYy9TaG9ydFVSTC9tb2R1bGVzL2J1aWxkTGluay50cyIsICJzcmMvU2hvcnRVUkwvb3B0aW9ucy5qc29uIiwgInNyYy9TaG9ydFVSTC9tb2R1bGVzL2FwaS50cyIsICJzcmMvU2hvcnRVUkwvbW9kdWxlcy91dGlsL3F1ZXJ5QXBpLnRzIiwgInNyYy9TaG9ydFVSTC9tb2R1bGVzL2NvbXBhcmVXaXRoUmVtb3RlRGlmZklkLnRzIiwgInNyYy9TaG9ydFVSTC9tb2R1bGVzL3Byb2Nlc3NJZC50cyIsICJzcmMvU2hvcnRVUkwvU2hvcnRVUkwudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IGNoZWNrUmV2aXNpb25QYWdlID0gKCRjb250ZW50OiBKUXVlcnkpOiBib29sZWFuID0+IHtcblx0cmV0dXJuIChcblx0XHQoJGNvbnRlbnQuZmluZCgnI2NvbnRlbnRTdWIgI213LXJldmlzaW9uLW5hdicpLmxlbmd0aCB8fFxuXHRcdFx0JGNvbnRlbnQuZmluZCgnbWFpbiNjb250ZW50Pi5wcmUtY29udGVudCAjbXctcmV2aXNpb24tbmF2JykubGVuZ3RoKSA+IDBcblx0KTtcbn07XG5cbmV4cG9ydCB7Y2hlY2tSZXZpc2lvblBhZ2V9O1xuIiwgImltcG9ydCB7Q2xpcGJvYXJkfSBmcm9tICdleHQuZ2FkZ2V0LkNsaXBib2FyZCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAnZXh0LmdhZGdldC5SZWFjdCc7XG5pbXBvcnQge2FkZEV2ZW50TGlzdGVuZXJXaXRoUmVtb3Zlcn0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9pMThuJztcbmltcG9ydCB7dGlwcHl9IGZyb20gJ2V4dC5nYWRnZXQuVGlwcHknO1xuXG5jb25zdCB7c2tpbn0gPSBtdy5jb25maWcuZ2V0KCk7XG5cbmxldCBjbGlwYm9hcmRJbnN0YW5jZTogQ2xpcGJvYXJkSlMgfCB1bmRlZmluZWQ7XG5sZXQgaGVhZGVyTGlua0V2ZW50TGlzdGVuZXI6IFJldHVyblR5cGU8dHlwZW9mIGFkZEV2ZW50TGlzdGVuZXJXaXRoUmVtb3Zlcj4gPSB7XG5cdHJlbW92ZTogKCk6IHZvaWQgPT4ge30sXG59O1xubGV0IHBvcnRsZXRMaW5rRXZlbnRMaXN0ZW5lcjogUmV0dXJuVHlwZTx0eXBlb2YgYWRkRXZlbnRMaXN0ZW5lcldpdGhSZW1vdmVyPiA9IHtcblx0cmVtb3ZlOiAoKTogdm9pZCA9PiB7fSxcbn07XG5cbmNvbnN0IGFkZExpbmsgPSAobGluazogc3RyaW5nKTogdm9pZCA9PiB7XG5cdGxldCBwb3J0bGV0TGluazogSFRNTExJRWxlbWVudCB8IG51bGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdC1zaG9ydGxpbmsnKTtcblx0aWYgKCFwb3J0bGV0TGluaykge1xuXHRcdGNvbnN0IHBvcnRsZXRJZDogJ3AtY2FjdGlvbnMnIHwgJ3AtdGInID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3AtY2FjdGlvbnMnKSA/ICdwLWNhY3Rpb25zJyA6ICdwLXRiJztcblx0XHRwb3J0bGV0TGluayA9IG13LnV0aWwuYWRkUG9ydGxldExpbmsoXG5cdFx0XHRwb3J0bGV0SWQsXG5cdFx0XHQnIycsXG5cdFx0XHRnZXRNZXNzYWdlKCdTaG9ydCBVUkwnKSxcblx0XHRcdCd0LXNob3J0bGluaycsXG5cdFx0XHRnZXRNZXNzYWdlKCdTaG93IHNob3J0IFVSTCcpXG5cdFx0KTtcblx0fVxuXG5cdGlmIChwb3J0bGV0TGluaykge1xuXHRcdGNvbnN0IHBvcnRsZXRMaW5rQ2xpY2tMaXN0ZW5lciA9IChldmVudDogTW91c2VFdmVudCk6IHZvaWQgPT4ge1xuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuXHRcdFx0Y29uc3QgJGVsZW1lbnQ6IEpRdWVyeSA9ICQoJzxkaXY+Jyk7XG5cdFx0XHRmb3IgKGNvbnN0IGRvbWFpbiBvZiBbJ3F3YmsuY2MnLCAncXdiay5vcmcnLCAnYmt3ei5jbiddKSB7XG5cdFx0XHRcdCRlbGVtZW50LmFwcGVuZChcblx0XHRcdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVuc2FmZS1jYWxsXG5cdFx0XHRcdFx0bmV3IG13LndpZGdldHMuQ29weVRleHRMYXlvdXQoe1xuXHRcdFx0XHRcdFx0YWxpZ246ICd0b3AnLFxuXHRcdFx0XHRcdFx0Y29weVRleHQ6IGBodHRwczovLyR7ZG9tYWlufSR7bGlua31gLFxuXHRcdFx0XHRcdH0pLiRlbGVtZW50IGFzIEpRdWVyeVxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXG5cdFx0XHR2b2lkIE9PLnVpLmFsZXJ0KCRlbGVtZW50LCB7XG5cdFx0XHRcdHNpemU6ICdtZWRpdW0nLFxuXHRcdFx0XHR0aXRsZTogZ2V0TWVzc2FnZSgnU2hvcnQgVVJMIGNvcGllZCB0byBjbGlwYm9hcmQnKSxcblx0XHRcdH0pO1xuXHRcdH07XG5cblx0XHRwb3J0bGV0TGlua0V2ZW50TGlzdGVuZXIucmVtb3ZlKCk7XG5cdFx0cG9ydGxldExpbmtFdmVudExpc3RlbmVyID0gYWRkRXZlbnRMaXN0ZW5lcldpdGhSZW1vdmVyKHtcblx0XHRcdHRhcmdldDogKHBvcnRsZXRMaW5rLmZpcnN0RWxlbWVudENoaWxkID8/IHBvcnRsZXRMaW5rKSBhcyBIVE1MRWxlbWVudCxcblx0XHRcdHR5cGU6ICdjbGljaycsXG5cdFx0XHRsaXN0ZW5lcjogcG9ydGxldExpbmtDbGlja0xpc3RlbmVyLFxuXHRcdH0pO1xuXG5cdFx0Y29uc3QgaXNDaXRpemVuOiBib29sZWFuID0gc2tpbiA9PT0gJ2NpdGl6ZW4nO1xuXHRcdGlmIChpc0NpdGl6ZW4gJiYgISQocG9ydGxldExpbmspLmZpbmQoJy5tdy11aS1pY29uLXdpa2ltZWRpYS1zaG9ydGxpbmsnKS5sZW5ndGgpIHtcblx0XHRcdCQocG9ydGxldExpbmspXG5cdFx0XHRcdC5maW5kKCdhJylcblx0XHRcdFx0LnByZXBlbmQoPHNwYW4gY2xhc3M9XCJjaXRpemVuLXVpLWljb24gbXctdWktaWNvbi13aWtpbWVkaWEtc2hvcnRsaW5rXCIgLz4pO1xuXHRcdH1cblx0fVxuXG5cdGxldCBoZWFkZXJMaW5rOiBIVE1MQW5jaG9yRWxlbWVudCB8IG51bGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbXctaW5kaWNhdG9yLXNob3J0VVJMIGEnKTtcblx0aWYgKCFoZWFkZXJMaW5rKSB7XG5cdFx0aGVhZGVyTGluayA9IChcblx0XHRcdDxhIGFyaWEtbGFiZWw9e2dldE1lc3NhZ2UoJ1Nob3J0IFVSTCcpfSBocmVmPVwiI1wiPlxuXHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJnYWRnZXQtc2hvcnQtbGlua19faWNvblwiPntnZXRNZXNzYWdlKCdTaG9ydCBVUkwnKX08L3NwYW4+XG5cdFx0XHQ8L2E+XG5cdFx0KSBhcyBIVE1MQW5jaG9yRWxlbWVudDtcblxuXHRcdHRpcHB5KGhlYWRlckxpbmssIHtcblx0XHRcdGFycm93OiB0cnVlLFxuXHRcdFx0Y29udGVudDogZ2V0TWVzc2FnZSgnU2hvcnQgVVJMJyksXG5cdFx0XHRwbGFjZW1lbnQ6ICdib3R0b20nLFxuXHRcdH0pO1xuXG5cdFx0Y29uc3QgJGhlYWRlckVsZW1lbnQgPSAkKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtdy1pbmRpY2F0b3JcIiBpZD1cIm13LWluZGljYXRvci1zaG9ydFVSTFwiPlxuXHRcdFx0XHR7aGVhZGVyTGlua31cblx0XHRcdDwvZGl2PlxuXHRcdCkgYXMgSlF1ZXJ5O1xuXG5cdFx0JGhlYWRlckVsZW1lbnQucHJlcGVuZFRvKCcubXctaW5kaWNhdG9ycycpO1xuXHR9XG5cblx0Y29uc3QgZnVsbExpbms6IHN0cmluZyA9IGBodHRwczovL3F3YmsuY2Mke2xpbmt9YDtcblxuXHRjb25zdCAkbm90aWZ5RWxlbWVudCA9ICQoXG5cdFx0PHNwYW4+XG5cdFx0XHR7Z2V0TWVzc2FnZSgnU2hvcnQgVVJMIGNvcGllZCB0byBjbGlwYm9hcmQnKX1cblx0XHRcdDxiciAvPlxuXHRcdFx0PGFcblx0XHRcdFx0aHJlZj1cIiNcIlxuXHRcdFx0XHRvbkNsaWNrPXsoZXZlbnQpOiB2b2lkID0+IHtcblx0XHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdFx0XHR9fVxuXHRcdFx0PlxuXHRcdFx0XHR7ZnVsbExpbmt9XG5cdFx0XHQ8L2E+XG5cdFx0PC9zcGFuPlxuXHQpIGFzIEpRdWVyeTtcblxuXHRjb25zdCBoZWFkZXJMaW5rQ2xpY2tMaXN0ZW5lciA9IChldmVudDogTW91c2VFdmVudCk6IHZvaWQgPT4ge1xuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cblx0XHR2b2lkIG13Lm5vdGlmeSgkbm90aWZ5RWxlbWVudCwge1xuXHRcdFx0dGFnOiAnc2hvcnRVUkwnLFxuXHRcdFx0dHlwZTogJ2luZm8nLFxuXHRcdH0pO1xuXHR9O1xuXG5cdGhlYWRlckxpbmtFdmVudExpc3RlbmVyLnJlbW92ZSgpO1xuXHRoZWFkZXJMaW5rRXZlbnRMaXN0ZW5lciA9IGFkZEV2ZW50TGlzdGVuZXJXaXRoUmVtb3Zlcih7XG5cdFx0dGFyZ2V0OiBoZWFkZXJMaW5rLFxuXHRcdHR5cGU6ICdjbGljaycsXG5cdFx0bGlzdGVuZXI6IGhlYWRlckxpbmtDbGlja0xpc3RlbmVyLFxuXHR9KTtcblxuXHRjbGlwYm9hcmRJbnN0YW5jZT8uZGVzdHJveSgpO1xuXHRjbGlwYm9hcmRJbnN0YW5jZSA9IG5ldyBDbGlwYm9hcmQoaGVhZGVyTGluaywge1xuXHRcdHRleHQ6ICgpOiBzdHJpbmcgPT4gZnVsbExpbmssXG5cdH0pO1xufTtcblxuZXhwb3J0IHthZGRMaW5rfTtcbiIsICJpbXBvcnQge2xvY2FsaXplfSBmcm9tICdleHQuZ2FkZ2V0LmkxOG4nO1xuXG5jb25zdCBnZXRJMThuTWVzc2FnZXMgPSAoKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0J05ldHdvcmsgZXJyb3InOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ05ldHdvcmsgZXJyb3InLFxuXHRcdFx0amE6ICfjg43jg4Pjg4jjg6/jg7zjgq/jgqjjg6njg7wnLFxuXHRcdFx0J3poLWhhbnMnOiAn572R57uc5byC5bi4Jyxcblx0XHRcdCd6aC1oYW50JzogJ+e2sui3r+eVsOW4uCcsXG5cdFx0fSksXG5cdFx0J1Nob3J0IFVSTCc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnU2hvcnQgVVJMJyxcblx0XHRcdCd6aC1oYW5zJzogJ+efremTvuaOpScsXG5cdFx0XHQnemgtaGFudCc6ICfnn63ntrLlnYAnLFxuXHRcdH0pLFxuXHRcdCdTaG9ydCBVUkwgY29waWVkIHRvIGNsaXBib2FyZCc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnVGhlIHNob3J0IFVSTCBoYXMgYmVlbiBjb3BpZWQgdG8gY2xpcGJvYXJkOicsXG5cdFx0XHQnemgtaGFucyc6ICflt7LlpI3liLbmnKzpobXnn63pk77mjqXvvJonLFxuXHRcdFx0J3poLWhhbnQnOiAn5bey5b6p6KO95pys6aCB55+t57ay5Z2A77yaJyxcblx0XHR9KSxcblx0XHQnU2hvdyBzaG9ydCBVUkwnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1Nob3cgc2hvcnQgVVJMJyxcblx0XHRcdCd6aC1oYW5zJzogJ+aYvuekuuivpemhteefremTvuaOpScsXG5cdFx0XHQnemgtaGFudCc6ICfpoa/npLroqbLpoIHnn63ntrLlnYAnLFxuXHRcdH0pLFxuXHR9O1xufTtcblxuY29uc3QgaTE4bk1lc3NhZ2VzID0gZ2V0STE4bk1lc3NhZ2VzKCk7XG5cbmNvbnN0IGdldE1lc3NhZ2U6IEdldE1lc3NhZ2VzPHR5cGVvZiBpMThuTWVzc2FnZXM+ID0gKGtleSkgPT4ge1xuXHRyZXR1cm4gaTE4bk1lc3NhZ2VzW2tleV0gfHwga2V5O1xufTtcblxuZXhwb3J0IHtnZXRNZXNzYWdlfTtcbiIsICJpbXBvcnQge2FkZExpbmt9IGZyb20gJy4vYWRkTGluayc7XG5cbmNvbnN0IGJ1aWxkTGluayA9IChvbGRJZDogbnVtYmVyIHwgbnVsbCwgZGlmZklkOiBudW1iZXIpOiB2b2lkID0+IHtcblx0bGV0IGxpbms6IHN0cmluZyA9ICcvZCc7XG5cdGlmIChvbGRJZCkge1xuXHRcdGxpbmsgKz0gYC8ke29sZElkfWA7XG5cdH1cblx0bGluayArPSBgLyR7ZGlmZklkfWA7XG5cblx0YWRkTGluayhsaW5rKTtcbn07XG5cbmV4cG9ydCB7YnVpbGRMaW5rfTtcbiIsICJ7XG5cdFwidmVyc2lvblwiOiBcIjIuMFwiXG59XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtpbml0TXdBcGl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmNvbnN0IGFwaTogbXcuQXBpID0gaW5pdE13QXBpKGBTaG9ydFVSTC8ke09QVElPTlMudmVyc2lvbn1gKTtcblxuZXhwb3J0IHthcGl9O1xuIiwgImltcG9ydCB7YXBpfSBmcm9tICcuLi9hcGknO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuLi9pMThuJztcbmltcG9ydCB7dG9hc3RpZnl9IGZyb20gJ2V4dC5nYWRnZXQuVG9hc3RpZnknO1xuXG50eXBlIENvbXBhcmVSZXNwb25zZSA9IHtcblx0Y29tcGFyZT86IHtcblx0XHRmcm9tcmV2aWQ6IG51bWJlcjtcblx0fTtcbn07XG5cbmNvbnN0IHBhcmFtZXRlcnM6IEFwaUNvbXBhcmVQYWdlc1BhcmFtcyA9IHtcblx0YWN0aW9uOiAnY29tcGFyZScsXG5cdGZvcm1hdDogJ2pzb24nLFxuXHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdHByb3A6ICdpZHMnLFxuXHR0b3JlbGF0aXZlOiAncHJldicsXG59O1xuXG5jb25zdCBxdWVyeUFwaSA9IGFzeW5jIChkaWZmSWQ6IG51bWJlcik6IFByb21pc2U8Q29tcGFyZVJlc3BvbnNlPiA9PiB7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIGF3YWl0IGFwaS5nZXQoe1xuXHRcdFx0Li4ucGFyYW1ldGVycyxcblx0XHRcdGZyb21yZXY6IGRpZmZJZCxcblx0XHR9IGFzIHR5cGVvZiBwYXJhbWV0ZXJzKTtcblx0fSBjYXRjaCAoZXJyb3I6IHVua25vd24pIHtcblx0XHRjb25zb2xlLmVycm9yKCdbU2hvcnRVUkxdIEFqYXggZXJyb3I6JywgZXJyb3IpO1xuXHRcdHRvYXN0aWZ5KFxuXHRcdFx0e1xuXHRcdFx0XHR0ZXh0OiBnZXRNZXNzYWdlKCdOZXR3b3JrIGVycm9yJyksXG5cdFx0XHRcdGNsb3NlOiB0cnVlLFxuXHRcdFx0XHRkdXJhdGlvbjogLTEsXG5cdFx0XHR9LFxuXHRcdFx0J2Vycm9yJ1xuXHRcdCk7XG5cblx0XHRyZXR1cm4ge307XG5cdH1cbn07XG5cbmV4cG9ydCB7cXVlcnlBcGl9O1xuIiwgImltcG9ydCB7YnVpbGRMaW5rfSBmcm9tICcuL2J1aWxkTGluayc7XG5pbXBvcnQge3F1ZXJ5QXBpfSBmcm9tICcuL3V0aWwvcXVlcnlBcGknO1xuXG5jb25zdCBjb21wYXJlV2l0aFJlbW90ZURpZmZJZCA9IGFzeW5jIChkaWZmSWQ6IG51bWJlcik6IFByb21pc2U8dm9pZD4gPT4ge1xuXHRjb25zdCByZXNwb25zZTogQXdhaXRlZDxSZXR1cm5UeXBlPHR5cGVvZiBxdWVyeUFwaT4+ID0gYXdhaXQgcXVlcnlBcGkoZGlmZklkKTtcblx0aWYgKGRpZmZJZCA9PT0gbXcuY29uZmlnLmdldCgnd2dEaWZmTmV3SWQnKSAmJiByZXNwb25zZVsnY29tcGFyZSddPy5mcm9tcmV2aWQgPT09IG13LmNvbmZpZy5nZXQoJ3dnRGlmZk9sZElkJykpIHtcblx0XHRidWlsZExpbmsoMCwgZGlmZklkKTtcblx0fVxufTtcblxuZXhwb3J0IHtjb21wYXJlV2l0aFJlbW90ZURpZmZJZH07XG4iLCAiaW1wb3J0IHthZGRMaW5rfSBmcm9tICcuL2FkZExpbmsnO1xuaW1wb3J0IHtidWlsZExpbmt9IGZyb20gJy4vYnVpbGRMaW5rJztcbmltcG9ydCB7Y29tcGFyZVdpdGhSZW1vdGVEaWZmSWR9IGZyb20gJy4vY29tcGFyZVdpdGhSZW1vdGVEaWZmSWQnO1xuXG5jb25zdCBwcm9jZXNzSWQgPSAoXG5cdGlzUmV2aXNpb25QYWdlOiBib29sZWFuLFxuXHR7XG5cdFx0YXJ0aWNsZUlkLFxuXHRcdGRpZmZJZCxcblx0XHRvbGRJZCxcblx0XHRyZXZpc2lvbklkLFxuXHR9OiB7XG5cdFx0YXJ0aWNsZUlkOiBudW1iZXI7XG5cdFx0ZGlmZklkOiBudW1iZXIgfCBudWxsO1xuXHRcdG9sZElkOiBudW1iZXIgfCBudWxsO1xuXHRcdHJldmlzaW9uSWQ6IG51bWJlciB8IG51bGw7XG5cdH1cbik6IHZvaWQgPT4ge1xuXHRpZiAoZGlmZklkKSB7XG5cdFx0YnVpbGRMaW5rKG9sZElkLCBkaWZmSWQpO1xuXHRcdGlmIChvbGRJZCkge1xuXHRcdFx0dm9pZCBjb21wYXJlV2l0aFJlbW90ZURpZmZJZChkaWZmSWQpO1xuXHRcdH1cblx0fSBlbHNlIGlmIChyZXZpc2lvbklkICYmIGlzUmV2aXNpb25QYWdlKSB7XG5cdFx0YWRkTGluayhgL3AvJHtyZXZpc2lvbklkfWApO1xuXHR9IGVsc2UgaWYgKGFydGljbGVJZCkge1xuXHRcdGFkZExpbmsoYC9jLyR7YXJ0aWNsZUlkfWApO1xuXHR9XG59O1xuXG5leHBvcnQge3Byb2Nlc3NJZH07XG4iLCAiaW1wb3J0IHtjaGVja1JldmlzaW9uUGFnZX0gZnJvbSAnLi9tb2R1bGVzL3V0aWwvY2hlY2tSZXZpc2lvblBhZ2UnO1xuaW1wb3J0IHtwcm9jZXNzSWR9IGZyb20gJy4vbW9kdWxlcy9wcm9jZXNzSWQnO1xuXG5jb25zdCB7d2dBY3Rpb24sIHdnQXJ0aWNsZUlkLCB3Z05hbWVzcGFjZU51bWJlcn0gPSBtdy5jb25maWcuZ2V0KCk7XG5cbmlmICh3Z0FjdGlvbiA9PT0gJ3ZpZXcnICYmIHdnQXJ0aWNsZUlkICYmIHdnTmFtZXNwYWNlTnVtYmVyID49IDApIHtcblx0bXcuaG9vaygnd2lraXBhZ2UuY29udGVudCcpLmFkZChmdW5jdGlvbiBzaG9ydFVSTCgkY29udGVudCk6IHZvaWQge1xuXHRcdGlmICgkY29udGVudC5hdHRyKCdpZCcpICE9PSAnbXctY29udGVudC10ZXh0Jykge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGNvbnN0IGlzUmV2aXNpb25QYWdlOiBib29sZWFuID0gY2hlY2tSZXZpc2lvblBhZ2UoJGNvbnRlbnQpO1xuXG5cdFx0cHJvY2Vzc0lkKGlzUmV2aXNpb25QYWdlLCB7XG5cdFx0XHRhcnRpY2xlSWQ6IG13LmNvbmZpZy5nZXQoJ3dnQXJ0aWNsZUlkJyksXG5cdFx0XHRkaWZmSWQ6IG13LmNvbmZpZy5nZXQoJ3dnRGlmZk5ld0lkJyksXG5cdFx0XHRvbGRJZDogbXcuY29uZmlnLmdldCgnd2dEaWZmT2xkSWQnKSxcblx0XHRcdHJldmlzaW9uSWQ6IG13LmNvbmZpZy5nZXQoJ3dnUmV2aXNpb25JZCcpLFxuXHRcdH0pO1xuXHR9KTtcbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsb0JBQXFCQyxjQUE4QjtBQUN4RCxVQUNFQSxTQUFTQyxLQUFLLDhCQUE4QixFQUFFQyxVQUM5Q0YsU0FBU0MsS0FBSyw0Q0FBNEMsRUFBRUMsVUFBVTtBQUV6RTs7QUNMQSxJQUFBQyxxQkFBd0JDLFFBQUEsc0JBQUE7QUFDeEIsSUFBQUMscUJBQWtCQyxRQUFBRixRQUFBLGtCQUFBLEdBQUEsQ0FBQTtBQUNsQixJQUFBRyxxQkFBMENILFFBQUEsaUJBQUE7O0FDRjFDLElBQUFJLG9CQUF1QkosUUFBQSxpQkFBQTtBQUV2QixJQUFNSyxrQkFBa0JBLE1BQU07QUFDN0IsU0FBTztJQUNOLGtCQUFBLEdBQWlCRCxrQkFBQUUs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b25QYWdlIiwgIiRjb250ZW50IiwgImZpbmQiLCAibGVuZ3RoIiwgImltcG9ydF9leHRfZ2FkZ2V0MiIsICJyZXF1aXJlIiwgImltcG9ydF9leHRfZ2FkZ2V0MyIsICJfX3RvRVNNIiwgImltcG9ydF9leHRfZ2FkZ2V0NCIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJnZXRJMThuTWVzc2FnZXMiLCAibG9jYWxpemUiLCAiZW4iLCAiamEiLCAiaTE4bk1lc3NhZ2VzIiwgImdldE1lc3NhZ2UiLCAia2V5IiwgImltcG9ydF9leHRfZ2FkZ2V0NSIsICJza2luIiwgIm13IiwgImNvbmZpZyIsICJnZXQiLCAiY2xpcGJvYXJkSW5zdGFuY2UiLCAiaGVhZGVyTGlua0V2ZW50TGlzdGVuZXIiLCAicmVtb3ZlIiwgInBvcnRsZXRMaW5rRXZlbnRMaXN0ZW5lciIsICJhZGRMaW5rIiwgImxpbmsiLCAiX2NsaXBib2FyZEluc3RhbmNlIiwgInBvcnRsZXRMaW5rIiwgImRvY3VtZW50IiwgInF1ZXJ5U2VsZWN0b3IiLCAicG9ydGxldElkIiwgInV0aWwiLCAiYWRkUG9ydGxldExpbmsiLCAiX3BvcnRsZXRMaW5rJGZpcnN0RWxlIiwgInBvcnRsZXRMaW5rQ2xpY2tMaXN0ZW5lciIsICJldmVudCIsICJwcmV2ZW50RGVmYXVsdCIsICIkZWxlbWVudCIsICIkIiwgIl9pIiwgIl9hcnIiLCAiZG9tYWluIiwgImFwcGVuZCIsICJ3aWRnZXRzIiwgIkNvcHlUZXh0TGF5b3V0IiwgImFsaWduIiwgImNvcHlUZXh0IiwgImNvbmNhdCIsICJPTyIsICJ1aSIsICJhbGVydCIsICJzaXplIiwgInRpdGxlIiwgImFkZEV2ZW50TGlzdGVuZXJXaXRoUmVtb3ZlciIsICJ0YXJnZXQiLCAiZmlyc3RFbGVtZW50Q2hpbGQiLCAidHlwZSIsICJsaXN0ZW5lciIsICJpc0NpdGl6ZW4iLCAicHJlcGVuZCIsICJkZWZhdWx0IiwgImNyZWF0ZUVsZW1lbnQiLCAiY2xhc3MiLCAiaGVhZGVyTGluayIsICJocmVmIiwgImNsYXNzTmFtZSIsICJ0aXBweSIsICJhcnJvdyIsICJjb250ZW50IiwgInBsYWNlbWVudCIsICIkaGVhZGVyRWxlbWVudCIsICJpZCIsICJwcmVwZW5kVG8iLCAiZnVsbExpbmsiLCAiJG5vdGlmeUVsZW1lbnQiLCAib25DbGljayIsICJzdG9wUHJvcGFnYXRpb24iLCAiaGVhZGVyTGlua0NsaWNrTGlzdGVuZXIiLCAibm90aWZ5IiwgInRhZyIsICJkZXN0cm95IiwgIkNsaXBib2FyZCIsICJ0ZXh0IiwgImJ1aWxkTGluayIsICJvbGRJZCIsICJkaWZmSWQiLCAidmVyc2lvbiIsICJpbXBvcnRfZXh0X2dhZGdldDYiLCAiYXBpIiwgImluaXRNd0FwaSIsICJpbXBvcnRfZXh0X2dhZGdldDciLCAicGFyYW1ldGVycyIsICJhY3Rpb24iLCAiZm9ybWF0IiwgImZvcm1hdHZlcnNpb24iLCAicHJvcCIsICJ0b3JlbGF0aXZlIiwgInF1ZXJ5QXBpIiwgIl9yZWYiLCAiX2FzeW5jVG9HZW5lcmF0b3IiLCAiZnJvbXJldiIsICJlcnJvciIsICJjb25zb2xlIiwgInRvYXN0aWZ5IiwgImNsb3NlIiwgImR1cmF0aW9uIiwgIl94IiwgImFwcGx5IiwgImFyZ3VtZW50cyIsICJjb21wYXJlV2l0aFJlbW90ZURpZmZJZCIsICJfcmVmMiIsICJfcmVzcG9uc2UkY29tcGFyZSIsICJyZXNwb25zZSIsICJmcm9tcmV2aWQiLCAiX3gyIiwgInByb2Nlc3NJZCIsICJpc1JldmlzaW9uUGFnZSIsICJhcnRpY2xlSWQiLCAicmV2aXNpb25JZCIsICJ3Z0FjdGlvbiIsICJ3Z0FydGljbGVJZCIsICJ3Z05hbWVzcGFjZU51bWJlciIsICJob29rIiwgImFkZCIsICJzaG9ydFVSTCIsICJhdHRyIl0KfQo=

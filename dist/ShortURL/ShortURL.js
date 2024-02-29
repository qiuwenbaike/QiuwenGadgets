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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1Nob3J0VVJML21vZHVsZXMvdXRpbC9jaGVja1JldmlzaW9uUGFnZS50cyIsICJzcmMvU2hvcnRVUkwvbW9kdWxlcy9hZGRMaW5rLnRzeCIsICJzcmMvU2hvcnRVUkwvbW9kdWxlcy9pMThuLnRzIiwgInNyYy9TaG9ydFVSTC9tb2R1bGVzL2J1aWxkTGluay50cyIsICJzcmMvU2hvcnRVUkwvb3B0aW9ucy5qc29uIiwgInNyYy9TaG9ydFVSTC9tb2R1bGVzL2FwaS50cyIsICJzcmMvU2hvcnRVUkwvbW9kdWxlcy91dGlsL3F1ZXJ5QXBpLnRzIiwgInNyYy9TaG9ydFVSTC9tb2R1bGVzL2NvbXBhcmVXaXRoUmVtb3RlRGlmZklkLnRzIiwgInNyYy9TaG9ydFVSTC9tb2R1bGVzL3Byb2Nlc3NJZC50cyIsICJzcmMvU2hvcnRVUkwvU2hvcnRVUkwudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IGNoZWNrUmV2aXNpb25QYWdlID0gKCRjb250ZW50OiBKUXVlcnkpOiBib29sZWFuID0+IHtcblx0cmV0dXJuIChcblx0XHQoJGNvbnRlbnQuZmluZCgnI2NvbnRlbnRTdWIgI213LXJldmlzaW9uLW5hdicpLmxlbmd0aCB8fFxuXHRcdFx0JGNvbnRlbnQuZmluZCgnbWFpbiNjb250ZW50Pi5wcmUtY29udGVudCAjbXctcmV2aXNpb24tbmF2JykubGVuZ3RoKSA+IDBcblx0KTtcbn07XG5cbmV4cG9ydCB7Y2hlY2tSZXZpc2lvblBhZ2V9O1xuIiwgImltcG9ydCB7Q2xpcGJvYXJkfSBmcm9tICdleHQuZ2FkZ2V0LkNsaXBib2FyZCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAnZXh0LmdhZGdldC5SZWFjdCc7XG5pbXBvcnQge2FkZEV2ZW50TGlzdGVuZXJXaXRoUmVtb3Zlcn0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9pMThuJztcbmltcG9ydCB7dGlwcHl9IGZyb20gJ2V4dC5nYWRnZXQuVGlwcHknO1xuXG5jb25zdCB7c2tpbn0gPSBtdy5jb25maWcuZ2V0KCk7XG5cbmxldCBjbGlwYm9hcmRJbnN0YW5jZTogQ2xpcGJvYXJkSlMgfCB1bmRlZmluZWQ7XG5sZXQgaGVhZGVyTGlua0V2ZW50TGlzdGVuZXI6IFJldHVyblR5cGU8dHlwZW9mIGFkZEV2ZW50TGlzdGVuZXJXaXRoUmVtb3Zlcj4gPSB7XG5cdHJlbW92ZTogKCk6IHZvaWQgPT4ge30sXG59O1xubGV0IHBvcnRsZXRMaW5rRXZlbnRMaXN0ZW5lcjogUmV0dXJuVHlwZTx0eXBlb2YgYWRkRXZlbnRMaXN0ZW5lcldpdGhSZW1vdmVyPiA9IHtcblx0cmVtb3ZlOiAoKTogdm9pZCA9PiB7fSxcbn07XG5cbmNvbnN0IGFkZExpbmsgPSAobGluazogc3RyaW5nKTogdm9pZCA9PiB7XG5cdGxldCBwb3J0bGV0TGluazogSFRNTExJRWxlbWVudCB8IG51bGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdC1zaG9ydGxpbmsnKTtcblx0aWYgKCFwb3J0bGV0TGluaykge1xuXHRcdGNvbnN0IHBvcnRsZXRJZDogJ3AtY2FjdGlvbnMnIHwgJ3AtdGInID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3AtY2FjdGlvbnMnKSA/ICdwLWNhY3Rpb25zJyA6ICdwLXRiJztcblx0XHRwb3J0bGV0TGluayA9IG13LnV0aWwuYWRkUG9ydGxldExpbmsoXG5cdFx0XHRwb3J0bGV0SWQsXG5cdFx0XHQnIycsXG5cdFx0XHRnZXRNZXNzYWdlKCdTaG9ydCBVUkwnKSxcblx0XHRcdCd0LXNob3J0bGluaycsXG5cdFx0XHRnZXRNZXNzYWdlKCdTaG93IHNob3J0IFVSTCcpXG5cdFx0KTtcblx0fVxuXG5cdGlmIChwb3J0bGV0TGluaykge1xuXHRcdGNvbnN0IHBvcnRsZXRMaW5rQ2xpY2tMaXN0ZW5lciA9IChldmVudDogTW91c2VFdmVudCk6IHZvaWQgPT4ge1xuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuXHRcdFx0Y29uc3QgJGVsZW1lbnQ6IEpRdWVyeSA9ICQoJzxkaXY+Jyk7XG5cdFx0XHRmb3IgKGNvbnN0IGRvbWFpbiBvZiBbJ3F3YmsuY2MnLCAncXdiay5vcmcnLCAnYmt3ei5jbiddKSB7XG5cdFx0XHRcdCRlbGVtZW50LmFwcGVuZChcblx0XHRcdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVuc2FmZS1jYWxsXG5cdFx0XHRcdFx0bmV3IG13LndpZGdldHMuQ29weVRleHRMYXlvdXQoe1xuXHRcdFx0XHRcdFx0YWxpZ246ICd0b3AnLFxuXHRcdFx0XHRcdFx0Y29weVRleHQ6IGBodHRwczovLyR7ZG9tYWlufSR7bGlua31gLFxuXHRcdFx0XHRcdH0pLiRlbGVtZW50IGFzIEpRdWVyeVxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXG5cdFx0XHR2b2lkIE9PLnVpLmFsZXJ0KCRlbGVtZW50LCB7XG5cdFx0XHRcdHNpemU6ICdtZWRpdW0nLFxuXHRcdFx0XHR0aXRsZTogZ2V0TWVzc2FnZSgnU2hvcnQgVVJMIGNvcGllZCB0byBjbGlwYm9hcmQnKSxcblx0XHRcdH0pO1xuXHRcdH07XG5cblx0XHRwb3J0bGV0TGlua0V2ZW50TGlzdGVuZXIucmVtb3ZlKCk7XG5cdFx0cG9ydGxldExpbmtFdmVudExpc3RlbmVyID0gYWRkRXZlbnRMaXN0ZW5lcldpdGhSZW1vdmVyKHtcblx0XHRcdHRhcmdldDogKHBvcnRsZXRMaW5rLmZpcnN0RWxlbWVudENoaWxkID8/IHBvcnRsZXRMaW5rKSBhcyBIVE1MRWxlbWVudCxcblx0XHRcdHR5cGU6ICdjbGljaycsXG5cdFx0XHRsaXN0ZW5lcjogcG9ydGxldExpbmtDbGlja0xpc3RlbmVyLFxuXHRcdH0pO1xuXG5cdFx0Y29uc3QgaXNDaXRpemVuOiBib29sZWFuID0gc2tpbiA9PT0gJ2NpdGl6ZW4nO1xuXHRcdGlmIChpc0NpdGl6ZW4pIHtcblx0XHRcdCQocG9ydGxldExpbmspLmZpbmQoJ2EnKS5wcmVwZW5kKCc8c3BhbiBjbGFzcz1cImNpdGl6ZW4tdWktaWNvbiBtdy11aS1pY29uLXdpa2ltZWRpYS1zaG9ydGxpbmtcIj48L3NwYW4+Jyk7XG5cdFx0fVxuXHR9XG5cblx0bGV0IGhlYWRlckxpbms6IEhUTUxBbmNob3JFbGVtZW50IHwgbnVsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtdy1pbmRpY2F0b3Itc2hvcnRVUkwgYScpO1xuXHRpZiAoIWhlYWRlckxpbmspIHtcblx0XHRoZWFkZXJMaW5rID0gKFxuXHRcdFx0PGEgYXJpYS1sYWJlbD17Z2V0TWVzc2FnZSgnU2hvcnQgVVJMJyl9IGhyZWY9XCIjXCI+XG5cdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImdhZGdldC1zaG9ydC1saW5rX19pY29uXCI+e2dldE1lc3NhZ2UoJ1Nob3J0IFVSTCcpfTwvc3Bhbj5cblx0XHRcdDwvYT5cblx0XHQpIGFzIEhUTUxBbmNob3JFbGVtZW50O1xuXG5cdFx0dGlwcHkoaGVhZGVyTGluaywge1xuXHRcdFx0YXJyb3c6IHRydWUsXG5cdFx0XHRjb250ZW50OiBnZXRNZXNzYWdlKCdTaG9ydCBVUkwnKSxcblx0XHRcdHBsYWNlbWVudDogJ2JvdHRvbScsXG5cdFx0fSk7XG5cblx0XHRjb25zdCAkaGVhZGVyRWxlbWVudCA9ICQoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm13LWluZGljYXRvclwiIGlkPVwibXctaW5kaWNhdG9yLXNob3J0VVJMXCI+XG5cdFx0XHRcdHtoZWFkZXJMaW5rfVxuXHRcdFx0PC9kaXY+XG5cdFx0KSBhcyBKUXVlcnk7XG5cblx0XHQkaGVhZGVyRWxlbWVudC5wcmVwZW5kVG8oJy5tdy1pbmRpY2F0b3JzJyk7XG5cdH1cblxuXHRjb25zdCBmdWxsTGluazogc3RyaW5nID0gYGh0dHBzOi8vcXdiay5jYyR7bGlua31gO1xuXG5cdGNvbnN0ICRub3RpZnlFbGVtZW50ID0gJChcblx0XHQ8c3Bhbj5cblx0XHRcdHtnZXRNZXNzYWdlKCdTaG9ydCBVUkwgY29waWVkIHRvIGNsaXBib2FyZCcpfVxuXHRcdFx0PGJyIC8+XG5cdFx0XHQ8YVxuXHRcdFx0XHRocmVmPVwiI1wiXG5cdFx0XHRcdG9uQ2xpY2s9eyhldmVudCk6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0XHRcdH19XG5cdFx0XHQ+XG5cdFx0XHRcdHtmdWxsTGlua31cblx0XHRcdDwvYT5cblx0XHQ8L3NwYW4+XG5cdCkgYXMgSlF1ZXJ5O1xuXG5cdGNvbnN0IGhlYWRlckxpbmtDbGlja0xpc3RlbmVyID0gKGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCA9PiB7XG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuXHRcdHZvaWQgbXcubm90aWZ5KCRub3RpZnlFbGVtZW50LCB7XG5cdFx0XHR0YWc6ICdzaG9ydFVSTCcsXG5cdFx0XHR0eXBlOiAnaW5mbycsXG5cdFx0fSk7XG5cdH07XG5cblx0aGVhZGVyTGlua0V2ZW50TGlzdGVuZXIucmVtb3ZlKCk7XG5cdGhlYWRlckxpbmtFdmVudExpc3RlbmVyID0gYWRkRXZlbnRMaXN0ZW5lcldpdGhSZW1vdmVyKHtcblx0XHR0YXJnZXQ6IGhlYWRlckxpbmssXG5cdFx0dHlwZTogJ2NsaWNrJyxcblx0XHRsaXN0ZW5lcjogaGVhZGVyTGlua0NsaWNrTGlzdGVuZXIsXG5cdH0pO1xuXG5cdGNsaXBib2FyZEluc3RhbmNlPy5kZXN0cm95KCk7XG5cdGNsaXBib2FyZEluc3RhbmNlID0gbmV3IENsaXBib2FyZChoZWFkZXJMaW5rLCB7XG5cdFx0dGV4dDogKCk6IHN0cmluZyA9PiBmdWxsTGluayxcblx0fSk7XG59O1xuXG5leHBvcnQge2FkZExpbmt9O1xuIiwgImltcG9ydCB7bG9jYWxpemV9IGZyb20gJ2V4dC5nYWRnZXQuaTE4bic7XG5cbmNvbnN0IGdldEkxOG5NZXNzYWdlcyA9ICgpID0+IHtcblx0cmV0dXJuIHtcblx0XHQnTmV0d29yayBlcnJvcic6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnTmV0d29yayBlcnJvcicsXG5cdFx0XHRqYTogJ+ODjeODg+ODiOODr+ODvOOCr+OCqOODqeODvCcsXG5cdFx0XHQnemgtaGFucyc6ICfnvZHnu5zlvILluLgnLFxuXHRcdFx0J3poLWhhbnQnOiAn57ay6Lev55Ww5bi4Jyxcblx0XHR9KSxcblx0XHQnU2hvcnQgVVJMJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdTaG9ydCBVUkwnLFxuXHRcdFx0J3poLWhhbnMnOiAn55+t6ZO+5o6lJyxcblx0XHRcdCd6aC1oYW50JzogJ+efree2suWdgCcsXG5cdFx0fSksXG5cdFx0J1Nob3J0IFVSTCBjb3BpZWQgdG8gY2xpcGJvYXJkJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdUaGUgc2hvcnQgVVJMIGhhcyBiZWVuIGNvcGllZCB0byBjbGlwYm9hcmQ6Jyxcblx0XHRcdCd6aC1oYW5zJzogJ+W3suWkjeWItuacrOmhteefremTvuaOpe+8micsXG5cdFx0XHQnemgtaGFudCc6ICflt7Llvqnoo73mnKzpoIHnn63ntrLlnYDvvJonLFxuXHRcdH0pLFxuXHRcdCdTaG93IHNob3J0IFVSTCc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnU2hvdyBzaG9ydCBVUkwnLFxuXHRcdFx0J3poLWhhbnMnOiAn5pi+56S66K+l6aG155+t6ZO+5o6lJyxcblx0XHRcdCd6aC1oYW50JzogJ+mhr+ekuuipsumggeefree2suWdgCcsXG5cdFx0fSksXG5cdH07XG59O1xuXG5jb25zdCBpMThuTWVzc2FnZXMgPSBnZXRJMThuTWVzc2FnZXMoKTtcblxuY29uc3QgZ2V0TWVzc2FnZTogR2V0TWVzc2FnZXM8dHlwZW9mIGkxOG5NZXNzYWdlcz4gPSAoa2V5KSA9PiB7XG5cdHJldHVybiBpMThuTWVzc2FnZXNba2V5XSB8fCBrZXk7XG59O1xuXG5leHBvcnQge2dldE1lc3NhZ2V9O1xuIiwgImltcG9ydCB7YWRkTGlua30gZnJvbSAnLi9hZGRMaW5rJztcblxuY29uc3QgYnVpbGRMaW5rID0gKG9sZElkOiBudW1iZXIgfCBudWxsLCBkaWZmSWQ6IG51bWJlcik6IHZvaWQgPT4ge1xuXHRsZXQgbGluazogc3RyaW5nID0gJy9kJztcblx0aWYgKG9sZElkKSB7XG5cdFx0bGluayArPSBgLyR7b2xkSWR9YDtcblx0fVxuXHRsaW5rICs9IGAvJHtkaWZmSWR9YDtcblxuXHRhZGRMaW5rKGxpbmspO1xufTtcblxuZXhwb3J0IHtidWlsZExpbmt9O1xuIiwgIntcblx0XCJ2ZXJzaW9uXCI6IFwiMi4wXCJcbn1cbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge2luaXRNd0FwaX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxuY29uc3QgYXBpOiBtdy5BcGkgPSBpbml0TXdBcGkoYFNob3J0VVJMLyR7T1BUSU9OUy52ZXJzaW9ufWApO1xuXG5leHBvcnQge2FwaX07XG4iLCAiaW1wb3J0IHthcGl9IGZyb20gJy4uL2FwaSc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4uL2kxOG4nO1xuaW1wb3J0IHt0b2FzdGlmeX0gZnJvbSAnZXh0LmdhZGdldC5Ub2FzdGlmeSc7XG5cbnR5cGUgQ29tcGFyZVJlc3BvbnNlID0ge1xuXHRjb21wYXJlPzoge1xuXHRcdGZyb21yZXZpZDogbnVtYmVyO1xuXHR9O1xufTtcblxuY29uc3QgcGFyYW1ldGVyczogQXBpQ29tcGFyZVBhZ2VzUGFyYW1zID0ge1xuXHRhY3Rpb246ICdjb21wYXJlJyxcblx0Zm9ybWF0OiAnanNvbicsXG5cdGZvcm1hdHZlcnNpb246ICcyJyxcblx0cHJvcDogJ2lkcycsXG5cdHRvcmVsYXRpdmU6ICdwcmV2Jyxcbn07XG5cbmNvbnN0IHF1ZXJ5QXBpID0gYXN5bmMgKGRpZmZJZDogbnVtYmVyKTogUHJvbWlzZTxDb21wYXJlUmVzcG9uc2U+ID0+IHtcblx0dHJ5IHtcblx0XHRyZXR1cm4gYXdhaXQgYXBpLmdldCh7XG5cdFx0XHQuLi5wYXJhbWV0ZXJzLFxuXHRcdFx0ZnJvbXJldjogZGlmZklkLFxuXHRcdH0pO1xuXHR9IGNhdGNoIChlcnJvcjogdW5rbm93bikge1xuXHRcdGNvbnNvbGUuZXJyb3IoJ1tTaG9ydFVSTF0gQWpheCBlcnJvcjonLCBlcnJvcik7XG5cdFx0dG9hc3RpZnkoXG5cdFx0XHR7XG5cdFx0XHRcdHRleHQ6IGdldE1lc3NhZ2UoJ05ldHdvcmsgZXJyb3InKSxcblx0XHRcdFx0Y2xvc2U6IHRydWUsXG5cdFx0XHRcdGR1cmF0aW9uOiAtMSxcblx0XHRcdH0sXG5cdFx0XHQnZXJyb3InXG5cdFx0KTtcblxuXHRcdHJldHVybiB7fTtcblx0fVxufTtcblxuZXhwb3J0IHtxdWVyeUFwaX07XG4iLCAiaW1wb3J0IHtidWlsZExpbmt9IGZyb20gJy4vYnVpbGRMaW5rJztcbmltcG9ydCB7cXVlcnlBcGl9IGZyb20gJy4vdXRpbC9xdWVyeUFwaSc7XG5cbmNvbnN0IGNvbXBhcmVXaXRoUmVtb3RlRGlmZklkID0gYXN5bmMgKGRpZmZJZDogbnVtYmVyKTogUHJvbWlzZTx2b2lkPiA9PiB7XG5cdGNvbnN0IHJlc3BvbnNlOiBBd2FpdGVkPFJldHVyblR5cGU8dHlwZW9mIHF1ZXJ5QXBpPj4gPSBhd2FpdCBxdWVyeUFwaShkaWZmSWQpO1xuXHRpZiAoZGlmZklkID09PSBtdy5jb25maWcuZ2V0KCd3Z0RpZmZOZXdJZCcpICYmIHJlc3BvbnNlWydjb21wYXJlJ10/LmZyb21yZXZpZCA9PT0gbXcuY29uZmlnLmdldCgnd2dEaWZmT2xkSWQnKSkge1xuXHRcdGJ1aWxkTGluaygwLCBkaWZmSWQpO1xuXHR9XG59O1xuXG5leHBvcnQge2NvbXBhcmVXaXRoUmVtb3RlRGlmZklkfTtcbiIsICJpbXBvcnQge2FkZExpbmt9IGZyb20gJy4vYWRkTGluayc7XG5pbXBvcnQge2J1aWxkTGlua30gZnJvbSAnLi9idWlsZExpbmsnO1xuaW1wb3J0IHtjb21wYXJlV2l0aFJlbW90ZURpZmZJZH0gZnJvbSAnLi9jb21wYXJlV2l0aFJlbW90ZURpZmZJZCc7XG5cbmNvbnN0IHByb2Nlc3NJZCA9IChcblx0aXNSZXZpc2lvblBhZ2U6IGJvb2xlYW4sXG5cdHtcblx0XHRhcnRpY2xlSWQsXG5cdFx0ZGlmZklkLFxuXHRcdG9sZElkLFxuXHRcdHJldmlzaW9uSWQsXG5cdH06IHtcblx0XHRhcnRpY2xlSWQ6IG51bWJlcjtcblx0XHRkaWZmSWQ6IG51bWJlciB8IG51bGw7XG5cdFx0b2xkSWQ6IG51bWJlciB8IG51bGw7XG5cdFx0cmV2aXNpb25JZDogbnVtYmVyIHwgbnVsbDtcblx0fVxuKTogdm9pZCA9PiB7XG5cdGlmIChkaWZmSWQpIHtcblx0XHRidWlsZExpbmsob2xkSWQsIGRpZmZJZCk7XG5cdFx0aWYgKG9sZElkKSB7XG5cdFx0XHR2b2lkIGNvbXBhcmVXaXRoUmVtb3RlRGlmZklkKGRpZmZJZCk7XG5cdFx0fVxuXHR9IGVsc2UgaWYgKHJldmlzaW9uSWQgJiYgaXNSZXZpc2lvblBhZ2UpIHtcblx0XHRhZGRMaW5rKGAvcC8ke3JldmlzaW9uSWR9YCk7XG5cdH0gZWxzZSBpZiAoYXJ0aWNsZUlkKSB7XG5cdFx0YWRkTGluayhgL2MvJHthcnRpY2xlSWR9YCk7XG5cdH1cbn07XG5cbmV4cG9ydCB7cHJvY2Vzc0lkfTtcbiIsICJpbXBvcnQge2NoZWNrUmV2aXNpb25QYWdlfSBmcm9tICcuL21vZHVsZXMvdXRpbC9jaGVja1JldmlzaW9uUGFnZSc7XG5pbXBvcnQge3Byb2Nlc3NJZH0gZnJvbSAnLi9tb2R1bGVzL3Byb2Nlc3NJZCc7XG5cbmNvbnN0IHt3Z0FjdGlvbiwgd2dBcnRpY2xlSWQsIHdnTmFtZXNwYWNlTnVtYmVyfSA9IG13LmNvbmZpZy5nZXQoKTtcblxuaWYgKHdnQWN0aW9uID09PSAndmlldycgJiYgd2dBcnRpY2xlSWQgJiYgd2dOYW1lc3BhY2VOdW1iZXIgPj0gMCkge1xuXHRtdy5ob29rKCd3aWtpcGFnZS5jb250ZW50JykuYWRkKGZ1bmN0aW9uIHNob3J0VVJMKCRjb250ZW50KTogdm9pZCB7XG5cdFx0aWYgKCRjb250ZW50LmF0dHIoJ2lkJykgIT09ICdtdy1jb250ZW50LXRleHQnKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Y29uc3QgaXNSZXZpc2lvblBhZ2U6IGJvb2xlYW4gPSBjaGVja1JldmlzaW9uUGFnZSgkY29udGVudCk7XG5cblx0XHRwcm9jZXNzSWQoaXNSZXZpc2lvblBhZ2UsIHtcblx0XHRcdGFydGljbGVJZDogbXcuY29uZmlnLmdldCgnd2dBcnRpY2xlSWQnKSxcblx0XHRcdGRpZmZJZDogbXcuY29uZmlnLmdldCgnd2dEaWZmTmV3SWQnKSxcblx0XHRcdG9sZElkOiBtdy5jb25maWcuZ2V0KCd3Z0RpZmZPbGRJZCcpLFxuXHRcdFx0cmV2aXNpb25JZDogbXcuY29uZmlnLmdldCgnd2dSZXZpc2lvbklkJyksXG5cdFx0fSk7XG5cdH0pO1xufVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFNQSxvQkFBcUJDLGNBQThCO0FBQ3hELFVBQ0VBLFNBQVNDLEtBQUssOEJBQThCLEVBQUVDLFVBQzlDRixTQUFTQyxLQUFLLDRDQUE0QyxFQUFFQyxVQUFVO0FBRXpFOztBQ0xBLElBQUFDLHFCQUF3QkMsUUFBQSxzQkFBQTtBQUN4QixJQUFBQyxxQkFBa0JDLFFBQUFGLFFBQUEsa0JBQUEsR0FBQSxDQUFBO0FBQ2xCLElBQUFHLHFCQUEwQ0gsUUFBQSxpQkFBQTs7QUNGMUMsSUFBQUksb0JBQXVCSixRQUFBLGlCQUFBO0FBRXZCLElBQU1LLGtCQUFrQkEsTUFBTTtBQUM3QixTQUFPO0lBQ04sa0JBQUEsR0FBaUJELGtCQUFBRSxVQUFTO01BQ3pCQyxJQUFJO01BQ0pDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDRCxjQUFBLEdBQWFKLGtCQUFBRSxVQUFTO01BQ3JCQyxJQUFJO01B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QUNBRDtFQUNBa0M7QUFDRCxNQU1VO0FBQ1YsTUFBSWpDLFFBQVE7QUFDWEYsY0FBVUMsT0FBT0MsTUFBTTtBQUN2QixRQUFJRCxPQUFPO0FBQ1YsV0FBS3lCLHdCQUF3QnhCLE1BQU07SUFDcEM7RUFDRCxXQUFXaUMsY0FBY0YsZ0JBQWdCO0FBQ3hDM0YsWUFBQSxNQUFBdUIsT0FBY3NFLFVBQVUsQ0FBRTtFQUMzQixXQUFXRCxXQUFXO0FBQ3JCNUYsWUFBQSxNQUFBdUIsT0FBY3FFLFNBQVMsQ0FBRTtFQUMxQjtBQUNEOztBQ3pCQSxJQUFNO0VBQUNFO0VBQVVDO0VBQWFDO0FBQWlCLElBQUl2RyxHQUFHQyxPQUFPQyxJQUFJO0FBRWpFLElBQUltRyxhQUFhLFVBQVVDLGVBQWVDLHFCQUFxQixHQUFHO0FBQ2pFdkcsS0FBR3dHLEtBQUssa0JBQWtCLEVBQUVDLElBQUksU0FBU0MsU0FBUzVILFVBQWdCO0FBQ2pFLFFBQUlBLFNBQVM2SCxLQUFLLElBQUksTUFBTSxtQkFBbUI7QUFDOUM7SUFDRDtBQUVBLFVBQU1ULGlCQUEwQnJILGtCQUFrQkMsUUFBUTtBQUUxRG1ILGNBQVVDLGdCQUFnQjtNQUN6QkMsV0FBV25HLEdBQUdDLE9BQU9DLElBQUksYUFBYTtNQUN0Q2lFLFFBQVFuRSxHQUFHQyxPQUFPQyxJQUFJLGFBQWE7TUFDbkNnRSxPQUFPbEUsR0FBR0MsT0FBT0MsSUFBSSxhQUFhO01BQ2xDa0csWUFBWXBHLEdBQUdDLE9BQU9DLElBQUksY0FBYztJQUN6QyxDQUFDO0VBQ0YsQ0FBQztBQUNGOyIsCiAgIm5hbWVzIjogWyJjaGVja1JldmlzaW9uUGFnZSIsICIkY29udGVudCIsICJmaW5kIiwgImxlbmd0aCIsICJpbXBvcnRfZXh0X2dhZGdldDIiLCAicmVxdWlyZSIsICJpbXBvcnRfZXh0X2dhZGdldDMiLCAiX190b0VTTSIsICJpbXBvcnRfZXh0X2dhZGdldDQiLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAiZ2V0STE4bk1lc3NhZ2VzIiwgImxvY2FsaXplIiwgImVuIiwgImphIiwgImkxOG5NZXNzYWdlcyIsICJnZXRNZXNzYWdlIiwgImtleSIsICJpbXBvcnRfZXh0X2dhZGdldDUiLCAic2tpbiIsICJtdyIsICJjb25maWciLCAiZ2V0IiwgImNsaXBib2FyZEluc3RhbmNlIiwgImhlYWRlckxpbmtFdmVudExpc3RlbmVyIiwgInJlbW92ZSIsICJwb3J0bGV0TGlua0V2ZW50TGlzdGVuZXIiLCAiYWRkTGluayIsICJsaW5rIiwgIl9jbGlwYm9hcmRJbnN0YW5jZSIsICJwb3J0bGV0TGluayIsICJkb2N1bWVudCIsICJxdWVyeVNlbGVjdG9yIiwgInBvcnRsZXRJZCIsICJ1dGlsIiwgImFkZFBvcnRsZXRMaW5rIiwgIl9wb3J0bGV0TGluayRmaXJzdEVsZSIsICJwb3J0bGV0TGlua0NsaWNrTGlzdGVuZXIiLCAiZXZlbnQiLCAicHJldmVudERlZmF1bHQiLCAiJGVsZW1lbnQiLCAiJCIsICJfaSIsICJfYXJyIiwgImRvbWFpbiIsICJhcHBlbmQiLCAid2lkZ2V0cyIsICJDb3B5VGV4dExheW91dCIsICJhbGlnbiIsICJjb3B5VGV4dCIsICJjb25jYXQiLCAiT08iLCAidWkiLCAiYWxlcnQiLCAic2l6ZSIsICJ0aXRsZSIsICJhZGRFdmVudExpc3RlbmVyV2l0aFJlbW92ZXIiLCAidGFyZ2V0IiwgImZpcnN0RWxlbWVudENoaWxkIiwgInR5cGUiLCAibGlzdGVuZXIiLCAiaXNDaXRpemVuIiwgInByZXBlbmQiLCAiaGVhZGVyTGluayIsICJkZWZhdWx0IiwgImNyZWF0ZUVsZW1lbnQiLCAiaHJlZiIsICJjbGFzc05hbWUiLCAidGlwcHkiLCAiYXJyb3ciLCAiY29udGVudCIsICJwbGFjZW1lbnQiLCAiJGhlYWRlckVsZW1lbnQiLCAiaWQiLCAicHJlcGVuZFRvIiwgImZ1bGxMaW5rIiwgIiRub3RpZnlFbGVtZW50IiwgIm9uQ2xpY2siLCAic3RvcFByb3BhZ2F0aW9uIiwgImhlYWRlckxpbmtDbGlja0xpc3RlbmVyIiwgIm5vdGlmeSIsICJ0YWciLCAiZGVzdHJveSIsICJDbGlwYm9hcmQiLCAidGV4dCIsICJidWlsZExpbmsiLCAib2xkSWQiLCAiZGlmZklkIiwgInZlcnNpb24iLCAiaW1wb3J0X2V4dF9nYWRnZXQ2IiwgImFwaSIsICJpbml0TXdBcGkiLCAiaW1wb3J0X2V4dF9nYWRnZXQ3IiwgInBhcmFtZXRlcnMiLCAiYWN0aW9uIiwgImZvcm1hdCIsICJmb3JtYXR2ZXJzaW9uIiwgInByb3AiLCAidG9yZWxhdGl2ZSIsICJxdWVyeUFwaSIsICJfcmVmIiwgIl9hc3luY1RvR2VuZXJhdG9yIiwgImZyb21yZXYiLCAiZXJyb3IiLCAiY29uc29sZSIsICJ0b2FzdGlmeSIsICJjbG9zZSIsICJkdXJhdGlvbiIsICJfeCIsICJhcHBseSIsICJhcmd1bWVudHMiLCAiY29tcGFyZVdpdGhSZW1vdGVEaWZmSWQiLCAiX3JlZjIiLCAiX3Jlc3BvbnNlJGNvbXBhcmUiLCAicmVzcG9uc2UiLCAiZnJvbXJldmlkIiwgIl94MiIsICJwcm9jZXNzSWQiLCAiaXNSZXZpc2lvblBhZ2UiLCAiYXJ0aWNsZUlkIiwgInJldmlzaW9uSWQiLCAid2dBY3Rpb24iLCAid2dBcnRpY2xlSWQiLCAid2dOYW1lc3BhY2VOdW1iZXIiLCAiaG9vayIsICJhZGQiLCAic2hvcnRVUkwiLCAiYXR0ciJdCn0K

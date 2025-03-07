/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/QuickImport}
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

// dist/QuickImport/QuickImport.js
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
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all) __defProp(target, name, {
    get: all[name],
    enumerable: true
  });
};
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", {
  value: true
}), mod);
//! src/QuickImport/QuickImport.ts
var QuickImport_exports = {};
__export(QuickImport_exports, {
  api: () => api,
  detectIfFileRedirect: () => _detectIfFileRedirect,
  refreshPage: () => refreshPage
});
module.exports = __toCommonJS(QuickImport_exports);
//! src/QuickImport/modules/core.ts
var import_ext_gadget2 = require("ext.gadget.Util");
//! src/QuickImport/options.json
var version = "2.0";
//! src/QuickImport/modules/api.ts
var import_ext_gadget = require("ext.gadget.Util");
var api = (0, import_ext_gadget.initMwApi)("QuickImport/".concat(version));
//! src/QuickImport/modules/core.ts
var import_ext_gadget3 = require("ext.gadget.Toastify");
var toastifyInstance = {
  hideToast: () => {
  }
};
var refreshPage = (title) => {
  toastifyInstance.hideToast();
  (0, import_ext_gadget3.toastify)({
    text: "正在刷新页面",
    duration: -1
  }, "info");
  if (title) {
    location.replace(mw.util.getUrl(title));
  } else {
    location.reload();
  }
};
var importPage = /* @__PURE__ */ function() {
  var _ref = _asyncToGenerator(function* (pageName, iwprefix, isFileNS = false) {
    toastifyInstance.hideToast();
    toastifyInstance = (0, import_ext_gadget3.toastify)({
      text: "导入页面中：".concat(iwprefix, ":").concat(pageName),
      duration: -1
    }, "info");
    let summary = "页面文字原许可：[[cc-by-sa:4.0|CC BY-SA 4.0]]；作者请参见来源页面历史";
    if (isFileNS) {
      summary += "；文件作者请参见此页面及来源页面记载";
    }
    const params = {
      action: "import",
      format: "json",
      assignknownusers: true,
      interwikipage: pageName,
      interwikiprefix: iwprefix,
      interwikisource: iwprefix,
      summary: "［".concat(summary, "］")
    };
    const result = yield api.postWithEditToken(params);
    if (result["import"] && result["import"][0] && result["import"].revisions) {
      toastifyInstance.hideToast();
      toastifyInstance = (0, import_ext_gadget3.toastify)({
        text: "页面导入完成：".concat(pageName),
        duration: 3 * 1e3
      }, "success");
      return true;
    }
    toastifyInstance.hideToast();
    toastifyInstance = (0, import_ext_gadget3.toastify)({
      text: "页面导入失败：".concat(iwprefix, ":").concat(pageName),
      duration: 3 * 1e3
    }, "warning");
    return false;
  });
  return function importPage2(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var uploadFile = /* @__PURE__ */ function() {
  var _ref2 = _asyncToGenerator(function* (target, url) {
    toastifyInstance.hideToast();
    toastifyInstance = (0, import_ext_gadget3.toastify)({
      text: "迁移文件中：".concat(target),
      duration: -1
    }, "info");
    const params = {
      url: url !== null && url !== void 0 ? url : "https://zh.wikipedia.org/wiki/Special:Redirect/file/".concat(mw.util.rawurlencode(target)),
      action: "upload",
      format: "json",
      filename: target,
      comment: "自其他网站迁移文件",
      ignorewarnings: true
    };
    yield api.postWithEditToken(params);
    toastifyInstance.hideToast();
    toastifyInstance = (0, import_ext_gadget3.toastify)({
      text: "文件迁移完成：".concat(target),
      duration: 3 * 1e3
    }, "success");
  });
  return function uploadFile2(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
var queryImageInfo = /* @__PURE__ */ function() {
  var _ref3 = _asyncToGenerator(function* (titles) {
    const params = {
      titles,
      action: "query",
      format: "json",
      formatversion: "2",
      prop: ["imageinfo", "info"],
      iiprop: ["url"],
      redirects: true
    };
    const response = yield api.get(params);
    return response;
  });
  return function queryImageInfo2(_x5) {
    return _ref3.apply(this, arguments);
  };
}();
var _detectIfFileRedirect = /* @__PURE__ */ function() {
  var _ref4 = _asyncToGenerator(function* (pageNames, isFileNS = false) {
    pageNames = (0, import_ext_gadget2.uniqueArray)((0, import_ext_gadget2.generateArray)(pageNames));
    const promises = [];
    for (let i = 0; i < pageNames.length; i++) {
      let titles = pageNames.splice(0, 25);
      if (!titles.length) {
        continue;
      }
      promises[promises.length] = /* @__PURE__ */ _asyncToGenerator(function* () {
        const tos = [];
        const response = yield queryImageInfo(titles);
        if (response["query"]) {
          if (response["query"].normalized) {
            var _iterator2 = _createForOfIteratorHelper(response["query"].normalized), _step2;
            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
                const {
                  from,
                  to
                } = _step2.value;
                titles = titles.map((element) => {
                  return element === from ? to : element;
                });
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
          }
          if (response["query"].pages) {
            var _iterator3 = _createForOfIteratorHelper(response["query"].pages), _step3;
            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
                const page1 = _step3.value;
                const title = page1.title;
                if (!page1.missing) {
                  continue;
                }
                let ifImportSuccess = false;
                if (isFileNS) {
                  ifImportSuccess = yield importPage(title, "commons", isFileNS);
                }
                if (!ifImportSuccess) {
                  yield importPage(title, "zhwiki", isFileNS);
                }
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }
          }
          if (response["query"].redirects) {
            var _iterator4 = _createForOfIteratorHelper(response["query"].redirects), _step4;
            try {
              for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
                const {
                  to
                } = _step4.value;
                tos[tos.length] = to;
              }
            } catch (err) {
              _iterator4.e(err);
            } finally {
              _iterator4.f();
            }
          }
        }
        if (isFileNS) {
          const response2 = yield queryImageInfo(titles);
          if (response2["query"]) {
            if (response2["query"].normalized) {
              var _iterator5 = _createForOfIteratorHelper(response2["query"].normalized), _step5;
              try {
                for (_iterator5.s(); !(_step5 = _iterator5.n()).done; ) {
                  const {
                    from,
                    to
                  } = _step5.value;
                  titles = titles.map((element) => {
                    return element === from ? to : element;
                  });
                }
              } catch (err) {
                _iterator5.e(err);
              } finally {
                _iterator5.f();
              }
            }
            if (response2["query"].pages) {
              var _iterator6 = _createForOfIteratorHelper(response2["query"].pages), _step6;
              try {
                for (_iterator6.s(); !(_step6 = _iterator6.n()).done; ) {
                  const page2 = _step6.value;
                  const title = page2.title;
                  if (page2.missing || page2.redirect) {
                    continue;
                  }
                  if (page2.imagerepository && page2.imagerepository !== "local") {
                    yield uploadFile(title, "".concat(page2.imageinfo[0].url).replace("wm.zhongwen.wiki", "upload.wikimedia.org"));
                  }
                }
              } catch (err) {
                _iterator6.e(err);
              } finally {
                _iterator6.f();
              }
            }
            if (response2["query"].redirects) {
              var _iterator7 = _createForOfIteratorHelper(response2["query"].redirects), _step7;
              try {
                for (_iterator7.s(); !(_step7 = _iterator7.n()).done; ) {
                  const {
                    to
                  } = _step7.value;
                  tos[tos.length] = to;
                }
              } catch (err) {
                _iterator7.e(err);
              } finally {
                _iterator7.f();
              }
            }
          }
        }
        if (tos.length) {
          yield _detectIfFileRedirect((0, import_ext_gadget2.uniqueArray)(tos));
        }
      });
    }
    for (var _i = 0, _promises = promises; _i < _promises.length; _i++) {
      const promise = _promises[_i];
      try {
        yield promise();
      } catch {
      }
    }
  });
  return function detectIfFileRedirect(_x6) {
    return _ref4.apply(this, arguments);
  };
}();
//! src/QuickImport/QuickImport.ts
(function quickImport() {
  const {
    wgNamespaceNumber,
    wgPageName,
    wgWikiID
  } = mw.config.get();
  const caViewForeignZhwiki = document.querySelector("#ca-view-foreign a[href*='zh.wikipedia.org']");
  const redirectTextA = document.querySelector(".redirectText a");
  const isFileNS = wgNamespaceNumber === 6;
  const hasMwNoarticletext = !!document.querySelector("#mw-noarticletext");
  const iwprefix = caViewForeignZhwiki ? "zhwiki" : "commons";
  const label = isFileNS && !hasMwNoarticletext ? iwprefix : "";
  const buttonLabel = isFileNS ? label ? "文件（".concat(label, "）") : "页面" : redirectTextA ? "重定向目标" : "页面";
  if (wgWikiID !== "zhqiuwenbaike" && isFileNS || wgNamespaceNumber < 0) {
    return;
  }
  const portletId = document.querySelector("#p-cactions") ? "p-cactions" : "p-tb";
  const element = mw.util.addPortletLink(portletId, "#", "导入".concat(buttonLabel), "t-import");
  if (!element) {
    return;
  }
  let wgPageName2;
  let wgPageName3;
  if (!isFileNS) {
    const disamRegExpFW = /^(.*)（(.*?)）$/;
    const matchFW = wgPageName.match(disamRegExpFW);
    const disamRegExpHW = /^(.*)[_ ]\((.*?)\)$/;
    const matchHW = wgPageName.match(disamRegExpHW);
    try {
      let rootPageName, disamKey;
      if (matchFW) {
        [, rootPageName, disamKey] = matchFW;
      } else if (matchHW) {
        [, rootPageName, disamKey] = matchHW;
      }
      if (rootPageName && disamKey) {
        wgPageName2 = "".concat(rootPageName, "_(").concat(disamKey, ")");
        if (disamKey === "消歧义") {
          wgPageName3 = "".concat(rootPageName, "_(消歧義)");
        } else if (disamKey === "消歧義") {
          wgPageName3 = "".concat(rootPageName, "_(消歧义)");
        }
      }
    } catch {
    }
  }
  element.addEventListener("click", () => {
    void _asyncToGenerator(function* () {
      const pageName = redirectTextA ? redirectTextA.textContent || wgPageName : wgPageName;
      const pageNames = [pageName];
      if (wgPageName2) {
        pageNames[pageNames.length] = wgPageName2;
      }
      if (wgPageName3) {
        pageNames[pageNames.length] = wgPageName3;
      }
      yield _detectIfFileRedirect(pageNames, isFileNS);
    })().then(() => {
      var _ref7;
      refreshPage((_ref7 = wgPageName3 !== null && wgPageName3 !== void 0 ? wgPageName3 : wgPageName2) !== null && _ref7 !== void 0 ? _ref7 : wgPageName);
    });
  });
})();
window.detectIfFileRedirect = _detectIfFileRedirect;

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL1F1aWNrSW1wb3J0L1F1aWNrSW1wb3J0LnRzIiwgIi4uLy4uL3NyYy9RdWlja0ltcG9ydC9tb2R1bGVzL2NvcmUudHMiLCAiLi4vLi4vc3JjL1F1aWNrSW1wb3J0L29wdGlvbnMuanNvbiIsICIuLi8uLi9zcmMvUXVpY2tJbXBvcnQvbW9kdWxlcy9hcGkudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7ZGV0ZWN0SWZGaWxlUmVkaXJlY3QsIHJlZnJlc2hQYWdlfSBmcm9tICcuL21vZHVsZXMvY29yZSc7XG5cbihmdW5jdGlvbiBxdWlja0ltcG9ydCgpOiB2b2lkIHtcblx0Y29uc3Qge3dnTmFtZXNwYWNlTnVtYmVyLCB3Z1BhZ2VOYW1lLCB3Z1dpa2lJRH0gPSBtdy5jb25maWcuZ2V0KCk7XG5cblx0Y29uc3QgY2FWaWV3Rm9yZWlnblpod2lraSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2Etdmlldy1mb3JlaWduIGFbaHJlZio9J3poLndpa2lwZWRpYS5vcmcnXVwiKTtcblx0Y29uc3QgcmVkaXJlY3RUZXh0QSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZWRpcmVjdFRleHQgYScpO1xuXG5cdGNvbnN0IGlzRmlsZU5TOiBib29sZWFuID0gd2dOYW1lc3BhY2VOdW1iZXIgPT09IDY7XG5cdGNvbnN0IGhhc013Tm9hcnRpY2xldGV4dDogYm9vbGVhbiA9ICEhZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI213LW5vYXJ0aWNsZXRleHQnKTtcblx0Y29uc3QgaXdwcmVmaXg6IHN0cmluZyA9IGNhVmlld0ZvcmVpZ25aaHdpa2kgPyAnemh3aWtpJyA6ICdjb21tb25zJztcblxuXHRjb25zdCBsYWJlbDogc3RyaW5nID0gaXNGaWxlTlMgJiYgIWhhc013Tm9hcnRpY2xldGV4dCA/IGl3cHJlZml4IDogJyc7XG5cdGNvbnN0IGJ1dHRvbkxhYmVsOiBzdHJpbmcgPSBpc0ZpbGVOU1xuXHRcdD8gbGFiZWxcblx0XHRcdD8gYOaWh+S7tu+8iCR7bGFiZWx977yJYFxuXHRcdFx0OiAn6aG16Z2iJ1xuXHRcdDogcmVkaXJlY3RUZXh0QVxuXHRcdFx0PyAn6YeN5a6a5ZCR55uu5qCHJ1xuXHRcdFx0OiAn6aG16Z2iJztcblxuXHRpZiAoKHdnV2lraUlEICE9PSAnemhxaXV3ZW5iYWlrZScgJiYgaXNGaWxlTlMpIHx8IHdnTmFtZXNwYWNlTnVtYmVyIDwgMCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IHBvcnRsZXRJZDogJ3AtY2FjdGlvbnMnIHwgJ3AtdGInID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3AtY2FjdGlvbnMnKSA/ICdwLWNhY3Rpb25zJyA6ICdwLXRiJztcblx0Y29uc3QgZWxlbWVudDogSFRNTExJRWxlbWVudCB8IG51bGwgPSBtdy51dGlsLmFkZFBvcnRsZXRMaW5rKHBvcnRsZXRJZCwgJyMnLCBg5a+85YWlJHtidXR0b25MYWJlbH1gLCAndC1pbXBvcnQnKTtcblx0aWYgKCFlbGVtZW50KSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0bGV0IHdnUGFnZU5hbWUyOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cdGxldCB3Z1BhZ2VOYW1lMzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG5cdGlmICghaXNGaWxlTlMpIHtcblx0XHQvLyBNYXRjaGluZyBkaXNhbWlnLWVkIHBhZ2VzIHdpdGggZnVsbC13aWR0aCBwYXJlbnRoZXNlc1xuXHRcdGNvbnN0IGRpc2FtUmVnRXhwRlcgPSAvXiguKinvvIgoLio/Ke+8iSQvO1xuXHRcdGNvbnN0IG1hdGNoRlcgPSB3Z1BhZ2VOYW1lLm1hdGNoKGRpc2FtUmVnRXhwRlcpO1xuXHRcdC8vIE1hdGNoaW5nIGRpc2FtaWctZWQgcGFnZXMgd2l0aCBoYWxmLXdpZHRoIHBhcmVudGhlc2VzXG5cdFx0Y29uc3QgZGlzYW1SZWdFeHBIVyA9IC9eKC4qKVtfIF1cXCgoLio/KVxcKSQvO1xuXHRcdGNvbnN0IG1hdGNoSFcgPSB3Z1BhZ2VOYW1lLm1hdGNoKGRpc2FtUmVnRXhwSFcpO1xuXG5cdFx0dHJ5IHtcblx0XHRcdC8vIHJvb3QgcGFnZSBuYW1lIGFuZCBkaXNhbWJpZy1rZXlcblx0XHRcdGxldCByb290UGFnZU5hbWU6IHN0cmluZyB8IHVuZGVmaW5lZCwgZGlzYW1LZXk6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuXHRcdFx0aWYgKG1hdGNoRlcpIHtcblx0XHRcdFx0Wywgcm9vdFBhZ2VOYW1lLCBkaXNhbUtleV0gPSBtYXRjaEZXO1xuXHRcdFx0fSBlbHNlIGlmIChtYXRjaEhXKSB7XG5cdFx0XHRcdFssIHJvb3RQYWdlTmFtZSwgZGlzYW1LZXldID0gbWF0Y2hIVztcblx0XHRcdH1cblxuXHRcdFx0aWYgKHJvb3RQYWdlTmFtZSAmJiBkaXNhbUtleSkge1xuXHRcdFx0XHR3Z1BhZ2VOYW1lMiA9IGAke3Jvb3RQYWdlTmFtZX1fKCR7ZGlzYW1LZXl9KWA7XG5cdFx0XHRcdGlmIChkaXNhbUtleSA9PT0gJ+a2iOatp+S5iScpIHtcblx0XHRcdFx0XHR3Z1BhZ2VOYW1lMyA9IGAke3Jvb3RQYWdlTmFtZX1fKOa2iOatp+e+qSlgO1xuXHRcdFx0XHR9IGVsc2UgaWYgKGRpc2FtS2V5ID09PSAn5raI5q2n576pJykge1xuXHRcdFx0XHRcdHdnUGFnZU5hbWUzID0gYCR7cm9vdFBhZ2VOYW1lfV8o5raI5q2n5LmJKWA7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9IGNhdGNoIHt9XG5cdH1cblxuXHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk6IHZvaWQgPT4ge1xuXHRcdHZvaWQgKGFzeW5jICgpID0+IHtcblx0XHRcdGNvbnN0IHBhZ2VOYW1lOiBzdHJpbmcgPSByZWRpcmVjdFRleHRBID8gcmVkaXJlY3RUZXh0QS50ZXh0Q29udGVudCB8fCB3Z1BhZ2VOYW1lIDogd2dQYWdlTmFtZTtcblx0XHRcdGNvbnN0IHBhZ2VOYW1lcyA9IFtwYWdlTmFtZV07XG5cdFx0XHRpZiAod2dQYWdlTmFtZTIpIHtcblx0XHRcdFx0cGFnZU5hbWVzW3BhZ2VOYW1lcy5sZW5ndGhdID0gd2dQYWdlTmFtZTI7XG5cdFx0XHR9XG5cdFx0XHRpZiAod2dQYWdlTmFtZTMpIHtcblx0XHRcdFx0cGFnZU5hbWVzW3BhZ2VOYW1lcy5sZW5ndGhdID0gd2dQYWdlTmFtZTM7XG5cdFx0XHR9XG5cdFx0XHRhd2FpdCBkZXRlY3RJZkZpbGVSZWRpcmVjdChwYWdlTmFtZXMsIGlzRmlsZU5TKTtcblx0XHR9KSgpLnRoZW4oKCkgPT4ge1xuXHRcdFx0cmVmcmVzaFBhZ2Uod2dQYWdlTmFtZTMgPz8gd2dQYWdlTmFtZTIgPz8gd2dQYWdlTmFtZSk7XG5cdFx0fSk7XG5cdH0pO1xufSkoKTtcblxud2luZG93LmRldGVjdElmRmlsZVJlZGlyZWN0ID0gZGV0ZWN0SWZGaWxlUmVkaXJlY3Q7XG5cbmV4cG9ydCB7YXBpfSBmcm9tICcuL21vZHVsZXMvYXBpJztcbmV4cG9ydCB7ZGV0ZWN0SWZGaWxlUmVkaXJlY3QsIHJlZnJlc2hQYWdlfSBmcm9tICcuL21vZHVsZXMvY29yZSc7XG4iLCAiaW1wb3J0IHtnZW5lcmF0ZUFycmF5LCB1bmlxdWVBcnJheX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbmltcG9ydCB7YXBpfSBmcm9tICcuL2FwaSc7XG5pbXBvcnQge3RvYXN0aWZ5fSBmcm9tICdleHQuZ2FkZ2V0LlRvYXN0aWZ5JztcblxudHlwZSBEZXRlY3RJZkZpbGVSZWRpcmVjdCA9IChwYWdlTmFtZXM6IHN0cmluZyB8IHN0cmluZ1tdLCBpc0ZpbGVOUz86IGJvb2xlYW4pID0+IFByb21pc2U8dm9pZD47XG50eXBlIFJlZnJlc2hQYWdlID0gKHRpdGxlPzogc3RyaW5nKSA9PiB2b2lkO1xuXG5sZXQgdG9hc3RpZnlJbnN0YW5jZTogVG9hc3RpZnlJbnN0YW5jZSA9IHtcblx0aGlkZVRvYXN0OiAoKSA9PiB7fSxcbn07XG5cbmNvbnN0IHJlZnJlc2hQYWdlOiBSZWZyZXNoUGFnZSA9ICh0aXRsZSkgPT4ge1xuXHR0b2FzdGlmeUluc3RhbmNlLmhpZGVUb2FzdCgpO1xuXHR0b2FzdGlmeShcblx0XHR7XG5cdFx0XHR0ZXh0OiAn5q2j5Zyo5Yi35paw6aG16Z2iJyxcblx0XHRcdGR1cmF0aW9uOiAtMSxcblx0XHR9LFxuXHRcdCdpbmZvJ1xuXHQpO1xuXG5cdGlmICh0aXRsZSkge1xuXHRcdGxvY2F0aW9uLnJlcGxhY2UobXcudXRpbC5nZXRVcmwodGl0bGUpKTtcblx0fSBlbHNlIHtcblx0XHRsb2NhdGlvbi5yZWxvYWQoKTtcblx0fVxufTtcblxuY29uc3QgaW1wb3J0UGFnZSA9IGFzeW5jIChwYWdlTmFtZTogc3RyaW5nLCBpd3ByZWZpeDogc3RyaW5nLCBpc0ZpbGVOUzogYm9vbGVhbiA9IGZhbHNlKTogUHJvbWlzZTxib29sZWFuPiA9PiB7XG5cdHRvYXN0aWZ5SW5zdGFuY2UuaGlkZVRvYXN0KCk7XG5cdHRvYXN0aWZ5SW5zdGFuY2UgPSB0b2FzdGlmeShcblx0XHR7XG5cdFx0XHR0ZXh0OiBg5a+85YWl6aG16Z2i5Lit77yaJHtpd3ByZWZpeH06JHtwYWdlTmFtZX1gLFxuXHRcdFx0ZHVyYXRpb246IC0xLFxuXHRcdH0sXG5cdFx0J2luZm8nXG5cdCk7XG5cblx0bGV0IHN1bW1hcnk6IHN0cmluZyA9ICfpobXpnaLmloflrZfljp/orrjlj6/vvJpbW2NjLWJ5LXNhOjQuMHxDQyBCWS1TQSA0LjBdXe+8m+S9nOiAheivt+WPguingeadpea6kOmhtemdouWOhuWPsic7XG5cdGlmIChpc0ZpbGVOUykge1xuXHRcdHN1bW1hcnkgKz0gJ++8m+aWh+S7tuS9nOiAheivt+WPguingeatpOmhtemdouWPiuadpea6kOmhtemdouiusOi9vSc7XG5cdH1cblxuXHRjb25zdCBwYXJhbXM6IEFwaUltcG9ydFBhcmFtcyA9IHtcblx0XHRhY3Rpb246ICdpbXBvcnQnLFxuXHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdGFzc2lnbmtub3dudXNlcnM6IHRydWUsXG5cdFx0aW50ZXJ3aWtpcGFnZTogcGFnZU5hbWUsXG5cdFx0aW50ZXJ3aWtpcHJlZml4OiBpd3ByZWZpeCxcblx0XHRpbnRlcndpa2lzb3VyY2U6IGl3cHJlZml4LFxuXHRcdHN1bW1hcnk6IGDvvLske3N1bW1hcnl977y9YCxcblx0fTtcblx0Y29uc3QgcmVzdWx0ID0gYXdhaXQgYXBpLnBvc3RXaXRoRWRpdFRva2VuKHBhcmFtcyk7XG5cblx0aWYgKHJlc3VsdFsnaW1wb3J0J10gJiYgcmVzdWx0WydpbXBvcnQnXVswXSAmJiByZXN1bHRbJ2ltcG9ydCddLnJldmlzaW9ucykge1xuXHRcdHRvYXN0aWZ5SW5zdGFuY2UuaGlkZVRvYXN0KCk7XG5cdFx0dG9hc3RpZnlJbnN0YW5jZSA9IHRvYXN0aWZ5KFxuXHRcdFx0e1xuXHRcdFx0XHR0ZXh0OiBg6aG16Z2i5a+85YWl5a6M5oiQ77yaJHtwYWdlTmFtZX1gLFxuXHRcdFx0XHRkdXJhdGlvbjogMyAqIDEwMDAsXG5cdFx0XHR9LFxuXHRcdFx0J3N1Y2Nlc3MnXG5cdFx0KTtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXG5cdHRvYXN0aWZ5SW5zdGFuY2UuaGlkZVRvYXN0KCk7XG5cdHRvYXN0aWZ5SW5zdGFuY2UgPSB0b2FzdGlmeShcblx0XHR7XG5cdFx0XHR0ZXh0OiBg6aG16Z2i5a+85YWl5aSx6LSl77yaJHtpd3ByZWZpeH06JHtwYWdlTmFtZX1gLFxuXHRcdFx0ZHVyYXRpb246IDMgKiAxMDAwLFxuXHRcdH0sXG5cdFx0J3dhcm5pbmcnXG5cdCk7XG5cdHJldHVybiBmYWxzZTtcbn07XG5cbmNvbnN0IHVwbG9hZEZpbGUgPSBhc3luYyAodGFyZ2V0OiBzdHJpbmcsIHVybD86IHN0cmluZyk6IFByb21pc2U8dm9pZD4gPT4ge1xuXHR0b2FzdGlmeUluc3RhbmNlLmhpZGVUb2FzdCgpO1xuXHR0b2FzdGlmeUluc3RhbmNlID0gdG9hc3RpZnkoXG5cdFx0e1xuXHRcdFx0dGV4dDogYOi/geenu+aWh+S7tuS4re+8miR7dGFyZ2V0fWAsXG5cdFx0XHRkdXJhdGlvbjogLTEsXG5cdFx0fSxcblx0XHQnaW5mbydcblx0KTtcblxuXHRjb25zdCBwYXJhbXM6IEFwaVVwbG9hZFBhcmFtcyA9IHtcblx0XHR1cmw6IHVybCA/PyBgaHR0cHM6Ly96aC53aWtpcGVkaWEub3JnL3dpa2kvU3BlY2lhbDpSZWRpcmVjdC9maWxlLyR7bXcudXRpbC5yYXd1cmxlbmNvZGUodGFyZ2V0KX1gLFxuXHRcdGFjdGlvbjogJ3VwbG9hZCcsXG5cdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0ZmlsZW5hbWU6IHRhcmdldCxcblx0XHRjb21tZW50OiAn6Ieq5YW25LuW572R56uZ6L+B56e75paH5Lu2Jyxcblx0XHRpZ25vcmV3YXJuaW5nczogdHJ1ZSxcblx0fTtcblx0YXdhaXQgYXBpLnBvc3RXaXRoRWRpdFRva2VuKHBhcmFtcyk7XG5cblx0dG9hc3RpZnlJbnN0YW5jZS5oaWRlVG9hc3QoKTtcblx0dG9hc3RpZnlJbnN0YW5jZSA9IHRvYXN0aWZ5KFxuXHRcdHtcblx0XHRcdHRleHQ6IGDmlofku7bov4Hnp7vlrozmiJDvvJoke3RhcmdldH1gLFxuXHRcdFx0ZHVyYXRpb246IDMgKiAxMDAwLFxuXHRcdH0sXG5cdFx0J3N1Y2Nlc3MnXG5cdCk7XG59O1xuXG5jb25zdCBxdWVyeUltYWdlSW5mbyA9IGFzeW5jICh0aXRsZXM6IHN0cmluZyB8IHN0cmluZ1tdKSA9PiB7XG5cdGNvbnN0IHBhcmFtczogQXBpUXVlcnlJbmZvUGFyYW1zICYgQXBpUXVlcnlJbWFnZUluZm9QYXJhbXMgPSB7XG5cdFx0dGl0bGVzLFxuXHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0cHJvcDogWydpbWFnZWluZm8nLCAnaW5mbyddLFxuXHRcdGlpcHJvcDogWyd1cmwnXSxcblx0XHRyZWRpcmVjdHM6IHRydWUsXG5cdH07XG5cdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXBpLmdldChwYXJhbXMpO1xuXG5cdHJldHVybiByZXNwb25zZTtcbn07XG5cbmNvbnN0IGRldGVjdElmRmlsZVJlZGlyZWN0OiBEZXRlY3RJZkZpbGVSZWRpcmVjdCA9IGFzeW5jIChwYWdlTmFtZXMsIGlzRmlsZU5TID0gZmFsc2UpID0+IHtcblx0cGFnZU5hbWVzID0gdW5pcXVlQXJyYXkoZ2VuZXJhdGVBcnJheShwYWdlTmFtZXMpKTtcblx0Y29uc3QgcHJvbWlzZXM6ICgoKSA9PiBQcm9taXNlPHZvaWQ+KVtdID0gW107XG5cblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBwYWdlTmFtZXMubGVuZ3RoOyBpKyspIHtcblx0XHRsZXQgdGl0bGVzID0gcGFnZU5hbWVzLnNwbGljZSgwLCAyNSk7XG5cdFx0aWYgKCF0aXRsZXMubGVuZ3RoKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRwcm9taXNlc1twcm9taXNlcy5sZW5ndGhdID0gYXN5bmMgKCk6IFByb21pc2U8dm9pZD4gPT4ge1xuXHRcdFx0Ly8gUmVkaXJlY3QgdGFyZ2V0KHMpXG5cdFx0XHRjb25zdCB0b3M6IHN0cmluZ1tdID0gW107XG5cblx0XHRcdC8vIEFuYWx5emUgc3RlcCAxOiBpbXBvcnQgcGFnZXMgaXRzZWxmXG5cdFx0XHQvLy8vIFF1ZXJ5XG5cdFx0XHRjb25zdCByZXNwb25zZSA9IGF3YWl0IHF1ZXJ5SW1hZ2VJbmZvKHRpdGxlcyk7XG5cdFx0XHRpZiAocmVzcG9uc2VbJ3F1ZXJ5J10pIHtcblx0XHRcdFx0Ly8vLyBOb3JtYWxpemVcblx0XHRcdFx0aWYgKHJlc3BvbnNlWydxdWVyeSddLm5vcm1hbGl6ZWQpIHtcblx0XHRcdFx0XHRmb3IgKGNvbnN0IHtmcm9tLCB0b30gb2YgcmVzcG9uc2VbJ3F1ZXJ5J10ubm9ybWFsaXplZCBhcyB7ZnJvbTogc3RyaW5nOyB0bzogc3RyaW5nfVtdKSB7XG5cdFx0XHRcdFx0XHR0aXRsZXMgPSB0aXRsZXMubWFwKChlbGVtZW50KSA9PiB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBlbGVtZW50ID09PSBmcm9tID8gdG8gOiBlbGVtZW50O1xuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8vLyBJbXBvcnRcblx0XHRcdFx0aWYgKHJlc3BvbnNlWydxdWVyeSddLnBhZ2VzKSB7XG5cdFx0XHRcdFx0Zm9yIChjb25zdCBwYWdlMSBvZiByZXNwb25zZVsncXVlcnknXS5wYWdlcykge1xuXHRcdFx0XHRcdFx0Y29uc3QgdGl0bGUgPSBwYWdlMS50aXRsZSBhcyBzdHJpbmc7XG5cblx0XHRcdFx0XHRcdGlmICghcGFnZTEubWlzc2luZykge1xuXHRcdFx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0bGV0IGlmSW1wb3J0U3VjY2VzcyA9IGZhbHNlO1xuXHRcdFx0XHRcdFx0aWYgKGlzRmlsZU5TKSB7XG5cdFx0XHRcdFx0XHRcdGlmSW1wb3J0U3VjY2VzcyA9IGF3YWl0IGltcG9ydFBhZ2UodGl0bGUsICdjb21tb25zJywgaXNGaWxlTlMpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0aWYgKCFpZkltcG9ydFN1Y2Nlc3MpIHtcblx0XHRcdFx0XHRcdFx0YXdhaXQgaW1wb3J0UGFnZSh0aXRsZSwgJ3pod2lraScsIGlzRmlsZU5TKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLy8vIFB1c2ggcmVkaXJlY3QgdGFyZ2V0cyBpbnRvIGFycmF5XG5cdFx0XHRcdGlmIChyZXNwb25zZVsncXVlcnknXS5yZWRpcmVjdHMpIHtcblx0XHRcdFx0XHRmb3IgKGNvbnN0IHt0b30gb2YgcmVzcG9uc2VbJ3F1ZXJ5J10ucmVkaXJlY3RzIGFzIHtmcm9tOiBzdHJpbmc7IHRvOiBzdHJpbmd9W10pIHtcblx0XHRcdFx0XHRcdHRvc1t0b3MubGVuZ3RoXSA9IHRvO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQvLyBBbmFseXplIHN0ZXAgMjogZm9yIGZpbGVzLCBjaGVjayBpZiBpdCBpcyBhIHJlZGlyZWN0XG5cdFx0XHRpZiAoaXNGaWxlTlMpIHtcblx0XHRcdFx0Ly8vLyBRdWVyeVxuXHRcdFx0XHRjb25zdCByZXNwb25zZTIgPSBhd2FpdCBxdWVyeUltYWdlSW5mbyh0aXRsZXMpO1xuXHRcdFx0XHRpZiAocmVzcG9uc2UyWydxdWVyeSddKSB7XG5cdFx0XHRcdFx0Ly8vLyBOb3JtYWxpemVcblx0XHRcdFx0XHRpZiAocmVzcG9uc2UyWydxdWVyeSddLm5vcm1hbGl6ZWQpIHtcblx0XHRcdFx0XHRcdGZvciAoY29uc3Qge2Zyb20sIHRvfSBvZiByZXNwb25zZTJbJ3F1ZXJ5J10ubm9ybWFsaXplZCBhcyB7ZnJvbTogc3RyaW5nOyB0bzogc3RyaW5nfVtdKSB7XG5cdFx0XHRcdFx0XHRcdHRpdGxlcyA9IHRpdGxlcy5tYXAoKGVsZW1lbnQpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gZWxlbWVudCA9PT0gZnJvbSA/IHRvIDogZWxlbWVudDtcblx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Ly8vLyB1cGxvYWRcblx0XHRcdFx0XHRpZiAocmVzcG9uc2UyWydxdWVyeSddLnBhZ2VzKSB7XG5cdFx0XHRcdFx0XHRmb3IgKGNvbnN0IHBhZ2UyIG9mIHJlc3BvbnNlMlsncXVlcnknXS5wYWdlcykge1xuXHRcdFx0XHRcdFx0XHRjb25zdCB0aXRsZSA9IHBhZ2UyLnRpdGxlIGFzIHN0cmluZztcblxuXHRcdFx0XHRcdFx0XHRpZiAocGFnZTIubWlzc2luZyB8fCBwYWdlMi5yZWRpcmVjdCkge1xuXHRcdFx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0aWYgKHBhZ2UyLmltYWdlcmVwb3NpdG9yeSAmJiBwYWdlMi5pbWFnZXJlcG9zaXRvcnkgIT09ICdsb2NhbCcpIHtcblx0XHRcdFx0XHRcdFx0XHRhd2FpdCB1cGxvYWRGaWxlKFxuXHRcdFx0XHRcdFx0XHRcdFx0dGl0bGUsXG5cdFx0XHRcdFx0XHRcdFx0XHRgJHtwYWdlMi5pbWFnZWluZm9bMF0udXJsfWAucmVwbGFjZSgnd20uemhvbmd3ZW4ud2lraScsICd1cGxvYWQud2lraW1lZGlhLm9yZycpXG5cdFx0XHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGlmIChyZXNwb25zZTJbJ3F1ZXJ5J10ucmVkaXJlY3RzKSB7XG5cdFx0XHRcdFx0XHRmb3IgKGNvbnN0IHt0b30gb2YgcmVzcG9uc2UyWydxdWVyeSddLnJlZGlyZWN0cyBhcyB7ZnJvbTogc3RyaW5nOyB0bzogc3RyaW5nfVtdKSB7XG5cdFx0XHRcdFx0XHRcdHRvc1t0b3MubGVuZ3RoXSA9IHRvO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQvLyBBbmFseXplIHN0ZXAgMzogaW1wb3J0IHBhZ2VzIGFzIHJlZGlyZWN0IHRhcmdldFxuXHRcdFx0Ly8vLyBRdWV1ZSByZXF1ZXN0cyB0byBpbXBvcnQgcmVkaXJlY3QgdGFyZ2V0c1xuXHRcdFx0aWYgKHRvcy5sZW5ndGgpIHtcblx0XHRcdFx0YXdhaXQgZGV0ZWN0SWZGaWxlUmVkaXJlY3QodW5pcXVlQXJyYXkodG9zKSk7IC8vIFJlcGxhY2UgU2V0IHdpdGggdW5pcXVlQXJyYXksIGF2b2lkaW5nIGNvcmUtanMgcG9seWZpbGxpbmdcblx0XHRcdH1cblx0XHR9O1xuXHR9XG5cblx0Zm9yIChjb25zdCBwcm9taXNlIG9mIHByb21pc2VzKSB7XG5cdFx0dHJ5IHtcblx0XHRcdGF3YWl0IHByb21pc2UoKTtcblx0XHR9IGNhdGNoIHt9XG5cdH1cbn07XG5cbmV4cG9ydCB7dHlwZSBEZXRlY3RJZkZpbGVSZWRpcmVjdCwgZGV0ZWN0SWZGaWxlUmVkaXJlY3QsIHR5cGUgUmVmcmVzaFBhZ2UsIHJlZnJlc2hQYWdlfTtcbiIsICJ7XG5cdFwidmVyc2lvblwiOiBcIjIuMFwiXG59XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtpbml0TXdBcGl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmNvbnN0IGFwaTogbXcuQXBpID0gaW5pdE13QXBpKGBRdWlja0ltcG9ydC8ke09QVElPTlMudmVyc2lvbn1gKTtcblxuZXhwb3J0IHthcGl9O1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLHNCQUFBLENBQUE7QUFBQUMsU0FBQUQscUJBQUE7RUFBQUUsS0FBQUEsTUFBQUE7RUFBQUMsc0JBQUFBLE1BQUFBO0VBQUFDLGFBQUFBLE1BQUFBO0FBQUEsQ0FBQTtBQUFBQyxPQUFBQyxVQUFBQyxhQUFBUCxtQkFBQTs7QUNBQSxJQUFBUSxxQkFBeUNDLFFBQUEsaUJBQUE7O0FDQ3hDLElBQUFDLFVBQVc7O0FDQVosSUFBQUMsb0JBQXdCRixRQUFBLGlCQUFBO0FBRXhCLElBQU1QLE9BQUEsR0FBY1Msa0JBQUFDLFdBQUEsZUFBQUMsT0FBaUNILE9BQU8sQ0FBRTs7QUZEOUQsSUFBQUkscUJBQXVCTCxRQUFBLHFCQUFBO0FBS3ZCLElBQUlNLG1CQUFxQztFQUN4Q0MsV0FBV0EsTUFBTTtFQUFDO0FBQ25CO0FBRUEsSUFBTVosY0FBNEJhLFdBQVU7QUFDM0NGLG1CQUFpQkMsVUFBVTtBQUMzQixHQUFBLEdBQUFGLG1CQUFBSSxVQUNDO0lBQ0NDLE1BQU07SUFDTkMsVUFBVTtFQUNYLEdBQ0EsTUFDRDtBQUVBLE1BQUlILE9BQU87QUFDVkksYUFBU0MsUUFBUUMsR0FBR0MsS0FBS0MsT0FBT1IsS0FBSyxDQUFDO0VBQ3ZDLE9BQU87QUFDTkksYUFBU0ssT0FBTztFQUNqQjtBQUNEO0FBRUEsSUFBTUMsYUFBQSwyQkFBQTtBQUFBLE1BQUFDLE9BQUFDLGtCQUFhLFdBQU9DLFVBQWtCQyxVQUFrQkMsV0FBb0IsT0FBNEI7QUFDN0dqQixxQkFBaUJDLFVBQVU7QUFDM0JELHdCQUFBLEdBQW1CRCxtQkFBQUksVUFDbEI7TUFDQ0MsTUFBQSxTQUFBTixPQUFla0IsVUFBUSxHQUFBLEVBQUFsQixPQUFJaUIsUUFBUTtNQUNuQ1YsVUFBVTtJQUNYLEdBQ0EsTUFDRDtBQUVBLFFBQUlhLFVBQWtCO0FBQ3RCLFFBQUlELFVBQVU7QUFDYkMsaUJBQVc7SUFDWjtBQUVBLFVBQU1DLFNBQTBCO01BQy9CQyxRQUFRO01BQ1JDLFFBQVE7TUFDUkMsa0JBQWtCO01BQ2xCQyxlQUFlUjtNQUNmUyxpQkFBaUJSO01BQ2pCUyxpQkFBaUJUO01BQ2pCRSxTQUFBLElBQUFwQixPQUFhb0IsU0FBTyxHQUFBO0lBQ3JCO0FBQ0EsVUFBTVEsU0FBQSxNQUFldkMsSUFBSXdDLGtCQUFrQlIsTUFBTTtBQUVqRCxRQUFJTyxPQUFPLFFBQVEsS0FBS0EsT0FBTyxRQUFRLEVBQUUsQ0FBQyxLQUFLQSxPQUFPLFFBQVEsRUFBRUUsV0FBVztBQUMxRTVCLHVCQUFpQkMsVUFBVTtBQUMzQkQsMEJBQUEsR0FBbUJELG1CQUFBSSxVQUNsQjtRQUNDQyxNQUFBLFVBQUFOLE9BQWdCaUIsUUFBUTtRQUN4QlYsVUFBVSxJQUFJO01BQ2YsR0FDQSxTQUNEO0FBQ0EsYUFBTztJQUNSO0FBRUFMLHFCQUFpQkMsVUFBVTtBQUMzQkQsd0JBQUEsR0FBbUJELG1CQUFBSSxVQUNsQjtNQUNDQyxNQUFBLFVBQUFOLE9BQWdCa0IsVUFBUSxHQUFBLEVBQUFsQixPQUFJaUIsUUFBUTtNQUNwQ1YsVUFBVSxJQUFJO0lBQ2YsR0FDQSxTQUNEO0FBQ0EsV0FBTztFQUNSLENBQUE7QUFBQSxTQUFBLFNBL0NNTyxZQUFBaUIsSUFBQUMsS0FBQTtBQUFBLFdBQUFqQixLQUFBa0IsTUFBQSxNQUFBQyxTQUFBO0VBQUE7QUFBQSxFQUFBO0FBaUROLElBQU1DLGFBQUEsMkJBQUE7QUFBQSxNQUFBQyxRQUFBcEIsa0JBQWEsV0FBT3FCLFFBQWdCQyxLQUFnQztBQUN6RXBDLHFCQUFpQkMsVUFBVTtBQUMzQkQsd0JBQUEsR0FBbUJELG1CQUFBSSxVQUNsQjtNQUNDQyxNQUFBLFNBQUFOLE9BQWVxQyxNQUFNO01BQ3JCOUIsVUFBVTtJQUNYLEdBQ0EsTUFDRDtBQUVBLFVBQU1jLFNBQTBCO01BQy9CaUIsS0FBS0EsUUFBQSxRQUFBQSxRQUFBLFNBQUFBLE1BQUEsdURBQUF0QyxPQUE4RFUsR0FBR0MsS0FBSzRCLGFBQWFGLE1BQU0sQ0FBQztNQUMvRmYsUUFBUTtNQUNSQyxRQUFRO01BQ1JpQixVQUFVSDtNQUNWSSxTQUFTO01BQ1RDLGdCQUFnQjtJQUNqQjtBQUNBLFVBQU1yRCxJQUFJd0Msa0JBQWtCUixNQUFNO0FBRWxDbkIscUJBQWlCQyxVQUFVO0FBQzNCRCx3QkFBQSxHQUFtQkQsbUJBQUFJLFVBQ2xCO01BQ0NDLE1BQUEsVUFBQU4sT0FBZ0JxQyxNQUFNO01BQ3RCOUIsVUFBVSxJQUFJO0lBQ2YsR0FDQSxTQUNEO0VBQ0QsQ0FBQTtBQUFBLFNBQUEsU0E1Qk00QixZQUFBUSxLQUFBQyxLQUFBO0FBQUEsV0FBQVIsTUFBQUgsTUFBQSxNQUFBQyxTQUFBO0VBQUE7QUFBQSxFQUFBO0FBOEJOLElBQU1XLGlCQUFBLDJCQUFBO0FBQUEsTUFBQUMsUUFBQTlCLGtCQUFpQixXQUFPK0IsUUFBOEI7QUFDM0QsVUFBTTFCLFNBQXVEO01BQzVEMEI7TUFDQXpCLFFBQVE7TUFDUkMsUUFBUTtNQUNSeUIsZUFBZTtNQUNmQyxNQUFNLENBQUMsYUFBYSxNQUFNO01BQzFCQyxRQUFRLENBQUMsS0FBSztNQUNkQyxXQUFXO0lBQ1o7QUFDQSxVQUFNQyxXQUFBLE1BQWlCL0QsSUFBSWdFLElBQUloQyxNQUFNO0FBRXJDLFdBQU8rQjtFQUNSLENBQUE7QUFBQSxTQUFBLFNBYk1QLGdCQUFBUyxLQUFBO0FBQUEsV0FBQVIsTUFBQWIsTUFBQSxNQUFBQyxTQUFBO0VBQUE7QUFBQSxFQUFBO0FBZU4sSUFBTTVDLHdCQUFBLDJCQUFBO0FBQUEsTUFBQWlFLFFBQUF2QyxrQkFBNkMsV0FBT3dDLFdBQVdyQyxXQUFXLE9BQVU7QUFDekZxQyxpQkFBQSxHQUFZN0QsbUJBQUE4RCxjQUFBLEdBQVk5RCxtQkFBQStELGVBQWNGLFNBQVMsQ0FBQztBQUNoRCxVQUFNRyxXQUFvQyxDQUFBO0FBRTFDLGFBQVNDLElBQUksR0FBR0EsSUFBSUosVUFBVUssUUFBUUQsS0FBSztBQUMxQyxVQUFJYixTQUFTUyxVQUFVTSxPQUFPLEdBQUcsRUFBRTtBQUNuQyxVQUFJLENBQUNmLE9BQU9jLFFBQVE7QUFDbkI7TUFDRDtBQUVBRixlQUFTQSxTQUFTRSxNQUFNLElBQUE3QyxrQ0FBSSxhQUEyQjtBQUV0RCxjQUFNK0MsTUFBZ0IsQ0FBQTtBQUl0QixjQUFNWCxXQUFBLE1BQWlCUCxlQUFlRSxNQUFNO0FBQzVDLFlBQUlLLFNBQVMsT0FBTyxHQUFHO0FBRXRCLGNBQUlBLFNBQVMsT0FBTyxFQUFFWSxZQUFZO0FBQUEsZ0JBQUFDLGFBQUFDLDJCQUNSZCxTQUFTLE9BQU8sRUFBRVksVUFBQSxHQUFBRztBQUFBLGdCQUFBO0FBQTNDLG1CQUFBRixXQUFBRyxFQUFBLEdBQUEsRUFBQUQsU0FBQUYsV0FBQUksRUFBQSxHQUFBQyxRQUF1RjtBQUFBLHNCQUE1RTtrQkFBQ0M7a0JBQU1DO2dCQUFFLElBQUFMLE9BQUFNO0FBQ25CMUIseUJBQVNBLE9BQU8yQixJQUFLQyxhQUFZO0FBQ2hDLHlCQUFPQSxZQUFZSixPQUFPQyxLQUFLRztnQkFDaEMsQ0FBQztjQUNGO1lBQUEsU0FBQUMsS0FBQTtBQUFBWCx5QkFBQVksRUFBQUQsR0FBQTtZQUFBLFVBQUE7QUFBQVgseUJBQUFhLEVBQUE7WUFBQTtVQUNEO0FBR0EsY0FBSTFCLFNBQVMsT0FBTyxFQUFFMkIsT0FBTztBQUFBLGdCQUFBQyxhQUFBZCwyQkFDUmQsU0FBUyxPQUFPLEVBQUUyQixLQUFBLEdBQUFFO0FBQUEsZ0JBQUE7QUFBdEMsbUJBQUFELFdBQUFaLEVBQUEsR0FBQSxFQUFBYSxTQUFBRCxXQUFBWCxFQUFBLEdBQUFDLFFBQTZDO0FBQUEsc0JBQWxDWSxRQUFBRCxPQUFBUjtBQUNWLHNCQUFNckUsUUFBUThFLE1BQU05RTtBQUVwQixvQkFBSSxDQUFDOEUsTUFBTUMsU0FBUztBQUNuQjtnQkFDRDtBQUVBLG9CQUFJQyxrQkFBa0I7QUFDdEIsb0JBQUlqRSxVQUFVO0FBQ2JpRSxvQ0FBQSxNQUF3QnRFLFdBQVdWLE9BQU8sV0FBV2UsUUFBUTtnQkFDOUQ7QUFDQSxvQkFBSSxDQUFDaUUsaUJBQWlCO0FBQ3JCLHdCQUFNdEUsV0FBV1YsT0FBTyxVQUFVZSxRQUFRO2dCQUMzQztjQUNEO1lBQUEsU0FBQXlELEtBQUE7QUFBQUkseUJBQUFILEVBQUFELEdBQUE7WUFBQSxVQUFBO0FBQUFJLHlCQUFBRixFQUFBO1lBQUE7VUFDRDtBQUdBLGNBQUkxQixTQUFTLE9BQU8sRUFBRUQsV0FBVztBQUFBLGdCQUFBa0MsYUFBQW5CLDJCQUNiZCxTQUFTLE9BQU8sRUFBRUQsU0FBQSxHQUFBbUM7QUFBQSxnQkFBQTtBQUFyQyxtQkFBQUQsV0FBQWpCLEVBQUEsR0FBQSxFQUFBa0IsU0FBQUQsV0FBQWhCLEVBQUEsR0FBQUMsUUFBZ0Y7QUFBQSxzQkFBckU7a0JBQUNFO2dCQUFFLElBQUFjLE9BQUFiO0FBQ2JWLG9CQUFJQSxJQUFJRixNQUFNLElBQUlXO2NBQ25CO1lBQUEsU0FBQUksS0FBQTtBQUFBUyx5QkFBQVIsRUFBQUQsR0FBQTtZQUFBLFVBQUE7QUFBQVMseUJBQUFQLEVBQUE7WUFBQTtVQUNEO1FBQ0Q7QUFHQSxZQUFJM0QsVUFBVTtBQUViLGdCQUFNb0UsWUFBQSxNQUFrQjFDLGVBQWVFLE1BQU07QUFDN0MsY0FBSXdDLFVBQVUsT0FBTyxHQUFHO0FBRXZCLGdCQUFJQSxVQUFVLE9BQU8sRUFBRXZCLFlBQVk7QUFBQSxrQkFBQXdCLGFBQUF0QiwyQkFDVHFCLFVBQVUsT0FBTyxFQUFFdkIsVUFBQSxHQUFBeUI7QUFBQSxrQkFBQTtBQUE1QyxxQkFBQUQsV0FBQXBCLEVBQUEsR0FBQSxFQUFBcUIsU0FBQUQsV0FBQW5CLEVBQUEsR0FBQUMsUUFBd0Y7QUFBQSx3QkFBN0U7b0JBQUNDO29CQUFNQztrQkFBRSxJQUFBaUIsT0FBQWhCO0FBQ25CMUIsMkJBQVNBLE9BQU8yQixJQUFLQyxhQUFZO0FBQ2hDLDJCQUFPQSxZQUFZSixPQUFPQyxLQUFLRztrQkFDaEMsQ0FBQztnQkFDRjtjQUFBLFNBQUFDLEtBQUE7QUFBQVksMkJBQUFYLEVBQUFELEdBQUE7Y0FBQSxVQUFBO0FBQUFZLDJCQUFBVixFQUFBO2NBQUE7WUFDRDtBQUdBLGdCQUFJUyxVQUFVLE9BQU8sRUFBRVIsT0FBTztBQUFBLGtCQUFBVyxhQUFBeEIsMkJBQ1RxQixVQUFVLE9BQU8sRUFBRVIsS0FBQSxHQUFBWTtBQUFBLGtCQUFBO0FBQXZDLHFCQUFBRCxXQUFBdEIsRUFBQSxHQUFBLEVBQUF1QixTQUFBRCxXQUFBckIsRUFBQSxHQUFBQyxRQUE4QztBQUFBLHdCQUFuQ3NCLFFBQUFELE9BQUFsQjtBQUNWLHdCQUFNckUsUUFBUXdGLE1BQU14RjtBQUVwQixzQkFBSXdGLE1BQU1ULFdBQVdTLE1BQU1DLFVBQVU7QUFDcEM7a0JBQ0Q7QUFFQSxzQkFBSUQsTUFBTUUsbUJBQW1CRixNQUFNRSxvQkFBb0IsU0FBUztBQUMvRCwwQkFBTTNELFdBQ0wvQixPQUNBLEdBQUFKLE9BQUc0RixNQUFNRyxVQUFVLENBQUMsRUFBRXpELEdBQUcsRUFBRzdCLFFBQVEsb0JBQW9CLHNCQUFzQixDQUMvRTtrQkFDRDtnQkFDRDtjQUFBLFNBQUFtRSxLQUFBO0FBQUFjLDJCQUFBYixFQUFBRCxHQUFBO2NBQUEsVUFBQTtBQUFBYywyQkFBQVosRUFBQTtjQUFBO1lBQ0Q7QUFFQSxnQkFBSVMsVUFBVSxPQUFPLEVBQUVwQyxXQUFXO0FBQUEsa0JBQUE2QyxhQUFBOUIsMkJBQ2RxQixVQUFVLE9BQU8sRUFBRXBDLFNBQUEsR0FBQThDO0FBQUEsa0JBQUE7QUFBdEMscUJBQUFELFdBQUE1QixFQUFBLEdBQUEsRUFBQTZCLFNBQUFELFdBQUEzQixFQUFBLEdBQUFDLFFBQWlGO0FBQUEsd0JBQXRFO29CQUFDRTtrQkFBRSxJQUFBeUIsT0FBQXhCO0FBQ2JWLHNCQUFJQSxJQUFJRixNQUFNLElBQUlXO2dCQUNuQjtjQUFBLFNBQUFJLEtBQUE7QUFBQW9CLDJCQUFBbkIsRUFBQUQsR0FBQTtjQUFBLFVBQUE7QUFBQW9CLDJCQUFBbEIsRUFBQTtjQUFBO1lBQ0Q7VUFDRDtRQUNEO0FBSUEsWUFBSWYsSUFBSUYsUUFBUTtBQUNmLGdCQUFNdkUsdUJBQUEsR0FBcUJLLG1CQUFBOEQsYUFBWU0sR0FBRyxDQUFDO1FBQzVDO01BQ0QsQ0FBQTtJQUNEO0FBRUEsYUFBQW1DLEtBQUEsR0FBQUMsWUFBc0J4QyxVQUFBdUMsS0FBQUMsVUFBQXRDLFFBQUFxQyxNQUFVO0FBQWhDLFlBQVdFLFVBQUFELFVBQUFELEVBQUE7QUFDVixVQUFJO0FBQ0gsY0FBTUUsUUFBUTtNQUNmLFFBQVE7TUFBQztJQUNWO0VBQ0QsQ0FBQTtBQUFBLFNBQUEsU0EzR005RyxxQkFBQStHLEtBQUE7QUFBQSxXQUFBOUMsTUFBQXRCLE1BQUEsTUFBQUMsU0FBQTtFQUFBO0FBQUEsRUFBQTs7Q0R4SEwsU0FBU29FLGNBQW9CO0FBQzdCLFFBQU07SUFBQ0M7SUFBbUJDO0lBQVlDO0VBQVEsSUFBSS9GLEdBQUdnRyxPQUFPckQsSUFBSTtBQUVoRSxRQUFNc0Qsc0JBQXNCQyxTQUFTQyxjQUFjLDhDQUE4QztBQUNqRyxRQUFNQyxnQkFBZ0JGLFNBQVNDLGNBQWMsaUJBQWlCO0FBRTlELFFBQU0xRixXQUFvQm9GLHNCQUFzQjtBQUNoRCxRQUFNUSxxQkFBOEIsQ0FBQyxDQUFDSCxTQUFTQyxjQUFjLG1CQUFtQjtBQUNoRixRQUFNM0YsV0FBbUJ5RixzQkFBc0IsV0FBVztBQUUxRCxRQUFNSyxRQUFnQjdGLFlBQVksQ0FBQzRGLHFCQUFxQjdGLFdBQVc7QUFDbkUsUUFBTStGLGNBQXNCOUYsV0FDekI2RixRQUFBLE1BQUFoSCxPQUNPZ0gsT0FBSyxHQUFBLElBQ1gsT0FDREYsZ0JBQ0MsVUFDQTtBQUVKLE1BQUtMLGFBQWEsbUJBQW1CdEYsWUFBYW9GLG9CQUFvQixHQUFHO0FBQ3hFO0VBQ0Q7QUFFQSxRQUFNVyxZQUFtQ04sU0FBU0MsY0FBYyxhQUFhLElBQUksZUFBZTtBQUNoRyxRQUFNbEMsVUFBZ0NqRSxHQUFHQyxLQUFLd0csZUFBZUQsV0FBVyxLQUFBLEtBQUFsSCxPQUFVaUgsV0FBVyxHQUFJLFVBQVU7QUFDM0csTUFBSSxDQUFDdEMsU0FBUztBQUNiO0VBQ0Q7QUFFQSxNQUFJeUM7QUFDSixNQUFJQztBQUVKLE1BQUksQ0FBQ2xHLFVBQVU7QUFFZCxVQUFNbUcsZ0JBQWdCO0FBQ3RCLFVBQU1DLFVBQVVmLFdBQVdnQixNQUFNRixhQUFhO0FBRTlDLFVBQU1HLGdCQUFnQjtBQUN0QixVQUFNQyxVQUFVbEIsV0FBV2dCLE1BQU1DLGFBQWE7QUFFOUMsUUFBSTtBQUVILFVBQUlFLGNBQWtDQztBQUV0QyxVQUFJTCxTQUFTO0FBQ1osU0FBQSxFQUFHSSxjQUFjQyxRQUFRLElBQUlMO01BQzlCLFdBQVdHLFNBQVM7QUFDbkIsU0FBQSxFQUFHQyxjQUFjQyxRQUFRLElBQUlGO01BQzlCO0FBRUEsVUFBSUMsZ0JBQWdCQyxVQUFVO0FBQzdCUixzQkFBQSxHQUFBcEgsT0FBaUIySCxjQUFZLElBQUEsRUFBQTNILE9BQUs0SCxVQUFRLEdBQUE7QUFDMUMsWUFBSUEsYUFBYSxPQUFPO0FBQ3ZCUCx3QkFBQSxHQUFBckgsT0FBaUIySCxjQUFZLFFBQUE7UUFDOUIsV0FBV0MsYUFBYSxPQUFPO0FBQzlCUCx3QkFBQSxHQUFBckgsT0FBaUIySCxjQUFZLFFBQUE7UUFDOUI7TUFDRDtJQUNELFFBQVE7SUFBQztFQUNWO0FBRUFoRCxVQUFRa0QsaUJBQWlCLFNBQVMsTUFBWTtBQUM3QyxTQUFBN0csa0JBQU0sYUFBWTtBQUNqQixZQUFNQyxXQUFtQjZGLGdCQUFnQkEsY0FBY2dCLGVBQWV0QixhQUFhQTtBQUNuRixZQUFNaEQsWUFBWSxDQUFDdkMsUUFBUTtBQUMzQixVQUFJbUcsYUFBYTtBQUNoQjVELGtCQUFVQSxVQUFVSyxNQUFNLElBQUl1RDtNQUMvQjtBQUNBLFVBQUlDLGFBQWE7QUFDaEI3RCxrQkFBVUEsVUFBVUssTUFBTSxJQUFJd0Q7TUFDL0I7QUFDQSxZQUFNL0gsc0JBQXFCa0UsV0FBV3JDLFFBQVE7SUFDL0MsQ0FBQSxFQUFHLEVBQUU0RyxLQUFLLE1BQU07QUFBQSxVQUFBQztBQUNmekksbUJBQUF5SSxRQUFZWCxnQkFBQSxRQUFBQSxnQkFBQSxTQUFBQSxjQUFlRCxpQkFBQSxRQUFBWSxVQUFBLFNBQUFBLFFBQWV4QixVQUFVO0lBQ3JELENBQUM7RUFDRixDQUFDO0FBQ0YsR0FBRztBQUVIeUIsT0FBTzNJLHVCQUF1QkE7IiwKICAibmFtZXMiOiBbIlF1aWNrSW1wb3J0X2V4cG9ydHMiLCAiX19leHBvcnQiLCAiYXBpIiwgImRldGVjdElmRmlsZVJlZGlyZWN0IiwgInJlZnJlc2hQYWdlIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIl9fdG9Db21tb25KUyIsICJpbXBvcnRfZXh0X2dhZGdldDIiLCAicmVxdWlyZSIsICJ2ZXJzaW9uIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgImluaXRNd0FwaSIsICJjb25jYXQiLCAiaW1wb3J0X2V4dF9nYWRnZXQzIiwgInRvYXN0aWZ5SW5zdGFuY2UiLCAiaGlkZVRvYXN0IiwgInRpdGxlIiwgInRvYXN0aWZ5IiwgInRleHQiLCAiZHVyYXRpb24iLCAibG9jYXRpb24iLCAicmVwbGFjZSIsICJtdyIsICJ1dGlsIiwgImdldFVybCIsICJyZWxvYWQiLCAiaW1wb3J0UGFnZSIsICJfcmVmIiwgIl9hc3luY1RvR2VuZXJhdG9yIiwgInBhZ2VOYW1lIiwgIml3cHJlZml4IiwgImlzRmlsZU5TIiwgInN1bW1hcnkiLCAicGFyYW1zIiwgImFjdGlvbiIsICJmb3JtYXQiLCAiYXNzaWdua25vd251c2VycyIsICJpbnRlcndpa2lwYWdlIiwgImludGVyd2lraXByZWZpeCIsICJpbnRlcndpa2lzb3VyY2UiLCAicmVzdWx0IiwgInBvc3RXaXRoRWRpdFRva2VuIiwgInJldmlzaW9ucyIsICJfeCIsICJfeDIiLCAiYXBwbHkiLCAiYXJndW1lbnRzIiwgInVwbG9hZEZpbGUiLCAiX3JlZjIiLCAidGFyZ2V0IiwgInVybCIsICJyYXd1cmxlbmNvZGUiLCAiZmlsZW5hbWUiLCAiY29tbWVudCIsICJpZ25vcmV3YXJuaW5ncyIsICJfeDMiLCAiX3g0IiwgInF1ZXJ5SW1hZ2VJbmZvIiwgIl9yZWYzIiwgInRpdGxlcyIsICJmb3JtYXR2ZXJzaW9uIiwgInByb3AiLCAiaWlwcm9wIiwgInJlZGlyZWN0cyIsICJyZXNwb25zZSIsICJnZXQiLCAiX3g1IiwgIl9yZWY0IiwgInBhZ2VOYW1lcyIsICJ1bmlxdWVBcnJheSIsICJnZW5lcmF0ZUFycmF5IiwgInByb21pc2VzIiwgImkiLCAibGVuZ3RoIiwgInNwbGljZSIsICJ0b3MiLCAibm9ybWFsaXplZCIsICJfaXRlcmF0b3IyIiwgIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwgIl9zdGVwMiIsICJzIiwgIm4iLCAiZG9uZSIsICJmcm9tIiwgInRvIiwgInZhbHVlIiwgIm1hcCIsICJlbGVtZW50IiwgImVyciIsICJlIiwgImYiLCAicGFnZXMiLCAiX2l0ZXJhdG9yMyIsICJfc3RlcDMiLCAicGFnZTEiLCAibWlzc2luZyIsICJpZkltcG9ydFN1Y2Nlc3MiLCAiX2l0ZXJhdG9yNCIsICJfc3RlcDQiLCAicmVzcG9uc2UyIiwgIl9pdGVyYXRvcjUiLCAiX3N0ZXA1IiwgIl9pdGVyYXRvcjYiLCAiX3N0ZXA2IiwgInBhZ2UyIiwgInJlZGlyZWN0IiwgImltYWdlcmVwb3NpdG9yeSIsICJpbWFnZWluZm8iLCAiX2l0ZXJhdG9yNyIsICJfc3RlcDciLCAiX2kiLCAiX3Byb21pc2VzIiwgInByb21pc2UiLCAiX3g2IiwgInF1aWNrSW1wb3J0IiwgIndnTmFtZXNwYWNlTnVtYmVyIiwgIndnUGFnZU5hbWUiLCAid2dXaWtpSUQiLCAiY29uZmlnIiwgImNhVmlld0ZvcmVpZ25aaHdpa2kiLCAiZG9jdW1lbnQiLCAicXVlcnlTZWxlY3RvciIsICJyZWRpcmVjdFRleHRBIiwgImhhc013Tm9hcnRpY2xldGV4dCIsICJsYWJlbCIsICJidXR0b25MYWJlbCIsICJwb3J0bGV0SWQiLCAiYWRkUG9ydGxldExpbmsiLCAid2dQYWdlTmFtZTIiLCAid2dQYWdlTmFtZTMiLCAiZGlzYW1SZWdFeHBGVyIsICJtYXRjaEZXIiwgIm1hdGNoIiwgImRpc2FtUmVnRXhwSFciLCAibWF0Y2hIVyIsICJyb290UGFnZU5hbWUiLCAiZGlzYW1LZXkiLCAiYWRkRXZlbnRMaXN0ZW5lciIsICJ0ZXh0Q29udGVudCIsICJ0aGVuIiwgIl9yZWY3IiwgIndpbmRvdyJdCn0K

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
var importPage = /* @__PURE__ */ (function() {
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
})();
var uploadFile = /* @__PURE__ */ (function() {
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
})();
var queryImageInfo = /* @__PURE__ */ (function() {
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
})();
var _detectIfFileRedirect = /* @__PURE__ */ (function() {
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
})();
//! src/QuickImport/modules/getIwPrefix.ts
var getIwPrefix = () => {
  const caViewForeignCommons = document.querySelector("#ca-view-foreign a[href*='commons.wikimedia.org']");
  const caViewForeignEnwiki = document.querySelector("#ca-view-foreign a[href*='en.wikipedia.org']");
  const caViewForeignZhwiki = document.querySelector("#ca-view-foreign a[href*='zh.wikipedia.org']");
  if (caViewForeignCommons) {
    return "commons";
  } else if (caViewForeignZhwiki) {
    return "zhwiki";
  } else if (caViewForeignEnwiki) {
    return "enwiki";
  }
  return "zhwiki";
};
//! src/QuickImport/QuickImport.ts
(function quickImport() {
  const {
    wgNamespaceNumber,
    wgPageName,
    wgWikiID
  } = mw.config.get();
  const redirectTextA = document.querySelector(".redirectText a");
  const isFileNS = wgNamespaceNumber === 6;
  const hasMwNoarticletext = !!document.querySelector("#mw-noarticletext");
  const iwprefix = getIwPrefix();
  if (!iwprefix) {
    return;
  }
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
  element.addEventListener("click", /* @__PURE__ */ _asyncToGenerator(function* () {
    var _ref7;
    const pageName = redirectTextA ? redirectTextA.textContent || wgPageName : wgPageName;
    const pageNames = [pageName];
    if (wgPageName2) {
      pageNames[pageNames.length] = wgPageName2;
    }
    if (wgPageName3) {
      pageNames[pageNames.length] = wgPageName3;
    }
    yield _detectIfFileRedirect(pageNames, isFileNS);
    refreshPage((_ref7 = wgPageName3 !== null && wgPageName3 !== void 0 ? wgPageName3 : wgPageName2) !== null && _ref7 !== void 0 ? _ref7 : wgPageName);
  }));
})();
window.detectIfFileRedirect = _detectIfFileRedirect;

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1F1aWNrSW1wb3J0L1F1aWNrSW1wb3J0LnRzIiwgInNyYy9RdWlja0ltcG9ydC9tb2R1bGVzL2NvcmUudHMiLCAic3JjL1F1aWNrSW1wb3J0L29wdGlvbnMuanNvbiIsICJzcmMvUXVpY2tJbXBvcnQvbW9kdWxlcy9hcGkudHMiLCAic3JjL1F1aWNrSW1wb3J0L21vZHVsZXMvZ2V0SXdQcmVmaXgudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7ZGV0ZWN0SWZGaWxlUmVkaXJlY3QsIHJlZnJlc2hQYWdlfSBmcm9tICcuL21vZHVsZXMvY29yZSc7XG5pbXBvcnQge2dldEl3UHJlZml4fSBmcm9tICcuL21vZHVsZXMvZ2V0SXdQcmVmaXgnO1xuXG4oZnVuY3Rpb24gcXVpY2tJbXBvcnQoKTogdm9pZCB7XG5cdGNvbnN0IHt3Z05hbWVzcGFjZU51bWJlciwgd2dQYWdlTmFtZSwgd2dXaWtpSUR9ID0gbXcuY29uZmlnLmdldCgpO1xuXG5cdGNvbnN0IHJlZGlyZWN0VGV4dEEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVkaXJlY3RUZXh0IGEnKTtcblxuXHRjb25zdCBpc0ZpbGVOUzogYm9vbGVhbiA9IHdnTmFtZXNwYWNlTnVtYmVyID09PSA2O1xuXHRjb25zdCBoYXNNd05vYXJ0aWNsZXRleHQ6IGJvb2xlYW4gPSAhIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtdy1ub2FydGljbGV0ZXh0Jyk7XG5cdGNvbnN0IGl3cHJlZml4OiBzdHJpbmcgPSBnZXRJd1ByZWZpeCgpO1xuXG5cdGlmICghaXdwcmVmaXgpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBsYWJlbDogc3RyaW5nID0gaXNGaWxlTlMgJiYgIWhhc013Tm9hcnRpY2xldGV4dCA/IGl3cHJlZml4IDogJyc7XG5cdGNvbnN0IGJ1dHRvbkxhYmVsOiBzdHJpbmcgPSBpc0ZpbGVOU1xuXHRcdD8gbGFiZWxcblx0XHRcdD8gYOaWh+S7tu+8iCR7bGFiZWx977yJYFxuXHRcdFx0OiAn6aG16Z2iJ1xuXHRcdDogcmVkaXJlY3RUZXh0QVxuXHRcdFx0PyAn6YeN5a6a5ZCR55uu5qCHJ1xuXHRcdFx0OiAn6aG16Z2iJztcblxuXHRpZiAoKHdnV2lraUlEICE9PSAnemhxaXV3ZW5iYWlrZScgJiYgaXNGaWxlTlMpIHx8IHdnTmFtZXNwYWNlTnVtYmVyIDwgMCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IHBvcnRsZXRJZDogJ3AtY2FjdGlvbnMnIHwgJ3AtdGInID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3AtY2FjdGlvbnMnKSA/ICdwLWNhY3Rpb25zJyA6ICdwLXRiJztcblx0Y29uc3QgZWxlbWVudDogSFRNTExJRWxlbWVudCB8IG51bGwgPSBtdy51dGlsLmFkZFBvcnRsZXRMaW5rKHBvcnRsZXRJZCwgJyMnLCBg5a+85YWlJHtidXR0b25MYWJlbH1gLCAndC1pbXBvcnQnKTtcblx0aWYgKCFlbGVtZW50KSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0bGV0IHdnUGFnZU5hbWUyOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cdGxldCB3Z1BhZ2VOYW1lMzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG5cdGlmICghaXNGaWxlTlMpIHtcblx0XHQvLyBNYXRjaGluZyBkaXNhbWlnLWVkIHBhZ2VzIHdpdGggZnVsbC13aWR0aCBwYXJlbnRoZXNlc1xuXHRcdGNvbnN0IGRpc2FtUmVnRXhwRlcgPSAvXiguKinvvIgoLio/Ke+8iSQvO1xuXHRcdGNvbnN0IG1hdGNoRlcgPSB3Z1BhZ2VOYW1lLm1hdGNoKGRpc2FtUmVnRXhwRlcpO1xuXHRcdC8vIE1hdGNoaW5nIGRpc2FtaWctZWQgcGFnZXMgd2l0aCBoYWxmLXdpZHRoIHBhcmVudGhlc2VzXG5cdFx0Y29uc3QgZGlzYW1SZWdFeHBIVyA9IC9eKC4qKVtfIF1cXCgoLio/KVxcKSQvO1xuXHRcdGNvbnN0IG1hdGNoSFcgPSB3Z1BhZ2VOYW1lLm1hdGNoKGRpc2FtUmVnRXhwSFcpO1xuXG5cdFx0dHJ5IHtcblx0XHRcdC8vIHJvb3QgcGFnZSBuYW1lIGFuZCBkaXNhbWJpZy1rZXlcblx0XHRcdGxldCByb290UGFnZU5hbWU6IHN0cmluZyB8IHVuZGVmaW5lZCwgZGlzYW1LZXk6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuXHRcdFx0aWYgKG1hdGNoRlcpIHtcblx0XHRcdFx0Wywgcm9vdFBhZ2VOYW1lLCBkaXNhbUtleV0gPSBtYXRjaEZXO1xuXHRcdFx0fSBlbHNlIGlmIChtYXRjaEhXKSB7XG5cdFx0XHRcdFssIHJvb3RQYWdlTmFtZSwgZGlzYW1LZXldID0gbWF0Y2hIVztcblx0XHRcdH1cblxuXHRcdFx0aWYgKHJvb3RQYWdlTmFtZSAmJiBkaXNhbUtleSkge1xuXHRcdFx0XHR3Z1BhZ2VOYW1lMiA9IGAke3Jvb3RQYWdlTmFtZX1fKCR7ZGlzYW1LZXl9KWA7XG5cdFx0XHRcdGlmIChkaXNhbUtleSA9PT0gJ+a2iOatp+S5iScpIHtcblx0XHRcdFx0XHR3Z1BhZ2VOYW1lMyA9IGAke3Jvb3RQYWdlTmFtZX1fKOa2iOatp+e+qSlgO1xuXHRcdFx0XHR9IGVsc2UgaWYgKGRpc2FtS2V5ID09PSAn5raI5q2n576pJykge1xuXHRcdFx0XHRcdHdnUGFnZU5hbWUzID0gYCR7cm9vdFBhZ2VOYW1lfV8o5raI5q2n5LmJKWA7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9IGNhdGNoIHt9XG5cdH1cblxuXHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKCk6IFByb21pc2U8dm9pZD4gPT4ge1xuXHRcdGNvbnN0IHBhZ2VOYW1lOiBzdHJpbmcgPSByZWRpcmVjdFRleHRBID8gcmVkaXJlY3RUZXh0QS50ZXh0Q29udGVudCB8fCB3Z1BhZ2VOYW1lIDogd2dQYWdlTmFtZTtcblx0XHRjb25zdCBwYWdlTmFtZXMgPSBbcGFnZU5hbWVdO1xuXHRcdGlmICh3Z1BhZ2VOYW1lMikge1xuXHRcdFx0cGFnZU5hbWVzW3BhZ2VOYW1lcy5sZW5ndGhdID0gd2dQYWdlTmFtZTI7XG5cdFx0fVxuXHRcdGlmICh3Z1BhZ2VOYW1lMykge1xuXHRcdFx0cGFnZU5hbWVzW3BhZ2VOYW1lcy5sZW5ndGhdID0gd2dQYWdlTmFtZTM7XG5cdFx0fVxuXHRcdGF3YWl0IGRldGVjdElmRmlsZVJlZGlyZWN0KHBhZ2VOYW1lcywgaXNGaWxlTlMpO1xuXHRcdHJlZnJlc2hQYWdlKHdnUGFnZU5hbWUzID8/IHdnUGFnZU5hbWUyID8/IHdnUGFnZU5hbWUpO1xuXHR9KTtcbn0pKCk7XG5cbndpbmRvdy5kZXRlY3RJZkZpbGVSZWRpcmVjdCA9IGRldGVjdElmRmlsZVJlZGlyZWN0O1xuXG5leHBvcnQge2FwaX0gZnJvbSAnLi9tb2R1bGVzL2FwaSc7XG5leHBvcnQge2RldGVjdElmRmlsZVJlZGlyZWN0LCByZWZyZXNoUGFnZX0gZnJvbSAnLi9tb2R1bGVzL2NvcmUnO1xuIiwgImltcG9ydCB7Z2VuZXJhdGVBcnJheSwgdW5pcXVlQXJyYXl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5pbXBvcnQge2FwaX0gZnJvbSAnLi9hcGknO1xuaW1wb3J0IHt0b2FzdGlmeX0gZnJvbSAnZXh0LmdhZGdldC5Ub2FzdGlmeSc7XG5cbnR5cGUgRGV0ZWN0SWZGaWxlUmVkaXJlY3QgPSAocGFnZU5hbWVzOiBzdHJpbmcgfCBzdHJpbmdbXSwgaXNGaWxlTlM/OiBib29sZWFuKSA9PiBQcm9taXNlPHZvaWQ+O1xudHlwZSBSZWZyZXNoUGFnZSA9ICh0aXRsZT86IHN0cmluZykgPT4gdm9pZDtcblxubGV0IHRvYXN0aWZ5SW5zdGFuY2U6IFRvYXN0aWZ5SW5zdGFuY2UgPSB7XG5cdGhpZGVUb2FzdDogKCkgPT4ge30sXG59O1xuXG5jb25zdCByZWZyZXNoUGFnZTogUmVmcmVzaFBhZ2UgPSAodGl0bGUpID0+IHtcblx0dG9hc3RpZnlJbnN0YW5jZS5oaWRlVG9hc3QoKTtcblx0dG9hc3RpZnkoXG5cdFx0e1xuXHRcdFx0dGV4dDogJ+ato+WcqOWIt+aWsOmhtemdoicsXG5cdFx0XHRkdXJhdGlvbjogLTEsXG5cdFx0fSxcblx0XHQnaW5mbydcblx0KTtcblxuXHRpZiAodGl0bGUpIHtcblx0XHRsb2NhdGlvbi5yZXBsYWNlKG13LnV0aWwuZ2V0VXJsKHRpdGxlKSk7XG5cdH0gZWxzZSB7XG5cdFx0bG9jYXRpb24ucmVsb2FkKCk7XG5cdH1cbn07XG5cbmNvbnN0IGltcG9ydFBhZ2UgPSBhc3luYyAocGFnZU5hbWU6IHN0cmluZywgaXdwcmVmaXg6IHN0cmluZywgaXNGaWxlTlM6IGJvb2xlYW4gPSBmYWxzZSk6IFByb21pc2U8Ym9vbGVhbj4gPT4ge1xuXHR0b2FzdGlmeUluc3RhbmNlLmhpZGVUb2FzdCgpO1xuXHR0b2FzdGlmeUluc3RhbmNlID0gdG9hc3RpZnkoXG5cdFx0e1xuXHRcdFx0dGV4dDogYOWvvOWFpemhtemdouS4re+8miR7aXdwcmVmaXh9OiR7cGFnZU5hbWV9YCxcblx0XHRcdGR1cmF0aW9uOiAtMSxcblx0XHR9LFxuXHRcdCdpbmZvJ1xuXHQpO1xuXG5cdGxldCBzdW1tYXJ5OiBzdHJpbmcgPSAn6aG16Z2i5paH5a2X5Y6f6K645Y+v77yaW1tjYy1ieS1zYTo0LjB8Q0MgQlktU0EgNC4wXV3vvJvkvZzogIXor7flj4Lop4HmnaXmupDpobXpnaLljoblj7InO1xuXHRpZiAoaXNGaWxlTlMpIHtcblx0XHRzdW1tYXJ5ICs9ICfvvJvmlofku7bkvZzogIXor7flj4Lop4HmraTpobXpnaLlj4rmnaXmupDpobXpnaLorrDovb0nO1xuXHR9XG5cblx0Y29uc3QgcGFyYW1zOiBBcGlJbXBvcnRQYXJhbXMgPSB7XG5cdFx0YWN0aW9uOiAnaW1wb3J0Jyxcblx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRhc3NpZ25rbm93bnVzZXJzOiB0cnVlLFxuXHRcdGludGVyd2lraXBhZ2U6IHBhZ2VOYW1lLFxuXHRcdGludGVyd2lraXByZWZpeDogaXdwcmVmaXgsXG5cdFx0aW50ZXJ3aWtpc291cmNlOiBpd3ByZWZpeCxcblx0XHRzdW1tYXJ5OiBg77y7JHtzdW1tYXJ5fe+8vWAsXG5cdH07XG5cdGNvbnN0IHJlc3VsdCA9IGF3YWl0IGFwaS5wb3N0V2l0aEVkaXRUb2tlbihwYXJhbXMpO1xuXG5cdGlmIChyZXN1bHRbJ2ltcG9ydCddICYmIHJlc3VsdFsnaW1wb3J0J11bMF0gJiYgcmVzdWx0WydpbXBvcnQnXS5yZXZpc2lvbnMpIHtcblx0XHR0b2FzdGlmeUluc3RhbmNlLmhpZGVUb2FzdCgpO1xuXHRcdHRvYXN0aWZ5SW5zdGFuY2UgPSB0b2FzdGlmeShcblx0XHRcdHtcblx0XHRcdFx0dGV4dDogYOmhtemdouWvvOWFpeWujOaIkO+8miR7cGFnZU5hbWV9YCxcblx0XHRcdFx0ZHVyYXRpb246IDMgKiAxMDAwLFxuXHRcdFx0fSxcblx0XHRcdCdzdWNjZXNzJ1xuXHRcdCk7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblxuXHR0b2FzdGlmeUluc3RhbmNlLmhpZGVUb2FzdCgpO1xuXHR0b2FzdGlmeUluc3RhbmNlID0gdG9hc3RpZnkoXG5cdFx0e1xuXHRcdFx0dGV4dDogYOmhtemdouWvvOWFpeWksei0pe+8miR7aXdwcmVmaXh9OiR7cGFnZU5hbWV9YCxcblx0XHRcdGR1cmF0aW9uOiAzICogMTAwMCxcblx0XHR9LFxuXHRcdCd3YXJuaW5nJ1xuXHQpO1xuXHRyZXR1cm4gZmFsc2U7XG59O1xuXG5jb25zdCB1cGxvYWRGaWxlID0gYXN5bmMgKHRhcmdldDogc3RyaW5nLCB1cmw/OiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0dG9hc3RpZnlJbnN0YW5jZS5oaWRlVG9hc3QoKTtcblx0dG9hc3RpZnlJbnN0YW5jZSA9IHRvYXN0aWZ5KFxuXHRcdHtcblx0XHRcdHRleHQ6IGDov4Hnp7vmlofku7bkuK3vvJoke3RhcmdldH1gLFxuXHRcdFx0ZHVyYXRpb246IC0xLFxuXHRcdH0sXG5cdFx0J2luZm8nXG5cdCk7XG5cblx0Y29uc3QgcGFyYW1zOiBBcGlVcGxvYWRQYXJhbXMgPSB7XG5cdFx0dXJsOiB1cmwgPz8gYGh0dHBzOi8vemgud2lraXBlZGlhLm9yZy93aWtpL1NwZWNpYWw6UmVkaXJlY3QvZmlsZS8ke213LnV0aWwucmF3dXJsZW5jb2RlKHRhcmdldCl9YCxcblx0XHRhY3Rpb246ICd1cGxvYWQnLFxuXHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdGZpbGVuYW1lOiB0YXJnZXQsXG5cdFx0Y29tbWVudDogJ+iHquWFtuS7lue9keermei/geenu+aWh+S7ticsXG5cdFx0aWdub3Jld2FybmluZ3M6IHRydWUsXG5cdH07XG5cdGF3YWl0IGFwaS5wb3N0V2l0aEVkaXRUb2tlbihwYXJhbXMpO1xuXG5cdHRvYXN0aWZ5SW5zdGFuY2UuaGlkZVRvYXN0KCk7XG5cdHRvYXN0aWZ5SW5zdGFuY2UgPSB0b2FzdGlmeShcblx0XHR7XG5cdFx0XHR0ZXh0OiBg5paH5Lu26L+B56e75a6M5oiQ77yaJHt0YXJnZXR9YCxcblx0XHRcdGR1cmF0aW9uOiAzICogMTAwMCxcblx0XHR9LFxuXHRcdCdzdWNjZXNzJ1xuXHQpO1xufTtcblxuY29uc3QgcXVlcnlJbWFnZUluZm8gPSBhc3luYyAodGl0bGVzOiBzdHJpbmcgfCBzdHJpbmdbXSkgPT4ge1xuXHRjb25zdCBwYXJhbXM6IEFwaVF1ZXJ5SW5mb1BhcmFtcyAmIEFwaVF1ZXJ5SW1hZ2VJbmZvUGFyYW1zID0ge1xuXHRcdHRpdGxlcyxcblx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdHByb3A6IFsnaW1hZ2VpbmZvJywgJ2luZm8nXSxcblx0XHRpaXByb3A6IFsndXJsJ10sXG5cdFx0cmVkaXJlY3RzOiB0cnVlLFxuXHR9O1xuXHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGFwaS5nZXQocGFyYW1zKTtcblxuXHRyZXR1cm4gcmVzcG9uc2U7XG59O1xuXG5jb25zdCBkZXRlY3RJZkZpbGVSZWRpcmVjdDogRGV0ZWN0SWZGaWxlUmVkaXJlY3QgPSBhc3luYyAocGFnZU5hbWVzLCBpc0ZpbGVOUyA9IGZhbHNlKSA9PiB7XG5cdHBhZ2VOYW1lcyA9IHVuaXF1ZUFycmF5KGdlbmVyYXRlQXJyYXkocGFnZU5hbWVzKSk7XG5cdGNvbnN0IHByb21pc2VzOiAoKCkgPT4gUHJvbWlzZTx2b2lkPilbXSA9IFtdO1xuXG5cdGZvciAobGV0IGkgPSAwOyBpIDwgcGFnZU5hbWVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0bGV0IHRpdGxlcyA9IHBhZ2VOYW1lcy5zcGxpY2UoMCwgMjUpO1xuXHRcdGlmICghdGl0bGVzLmxlbmd0aCkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0cHJvbWlzZXNbcHJvbWlzZXMubGVuZ3RoXSA9IGFzeW5jICgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0XHRcdC8vIFJlZGlyZWN0IHRhcmdldChzKVxuXHRcdFx0Y29uc3QgdG9zOiBzdHJpbmdbXSA9IFtdO1xuXG5cdFx0XHQvLyBBbmFseXplIHN0ZXAgMTogaW1wb3J0IHBhZ2VzIGl0c2VsZlxuXHRcdFx0Ly8vLyBRdWVyeVxuXHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBxdWVyeUltYWdlSW5mbyh0aXRsZXMpO1xuXHRcdFx0aWYgKHJlc3BvbnNlWydxdWVyeSddKSB7XG5cdFx0XHRcdC8vLy8gTm9ybWFsaXplXG5cdFx0XHRcdGlmIChyZXNwb25zZVsncXVlcnknXS5ub3JtYWxpemVkKSB7XG5cdFx0XHRcdFx0Zm9yIChjb25zdCB7ZnJvbSwgdG99IG9mIHJlc3BvbnNlWydxdWVyeSddLm5vcm1hbGl6ZWQgYXMge2Zyb206IHN0cmluZzsgdG86IHN0cmluZ31bXSkge1xuXHRcdFx0XHRcdFx0dGl0bGVzID0gdGl0bGVzLm1hcCgoZWxlbWVudCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gZWxlbWVudCA9PT0gZnJvbSA/IHRvIDogZWxlbWVudDtcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vLy8gSW1wb3J0XG5cdFx0XHRcdGlmIChyZXNwb25zZVsncXVlcnknXS5wYWdlcykge1xuXHRcdFx0XHRcdGZvciAoY29uc3QgcGFnZTEgb2YgcmVzcG9uc2VbJ3F1ZXJ5J10ucGFnZXMpIHtcblx0XHRcdFx0XHRcdGNvbnN0IHRpdGxlID0gcGFnZTEudGl0bGUgYXMgc3RyaW5nO1xuXG5cdFx0XHRcdFx0XHRpZiAoIXBhZ2UxLm1pc3NpbmcpIHtcblx0XHRcdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdGxldCBpZkltcG9ydFN1Y2Nlc3MgPSBmYWxzZTtcblx0XHRcdFx0XHRcdGlmIChpc0ZpbGVOUykge1xuXHRcdFx0XHRcdFx0XHRpZkltcG9ydFN1Y2Nlc3MgPSBhd2FpdCBpbXBvcnRQYWdlKHRpdGxlLCAnY29tbW9ucycsIGlzRmlsZU5TKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGlmICghaWZJbXBvcnRTdWNjZXNzKSB7XG5cdFx0XHRcdFx0XHRcdGF3YWl0IGltcG9ydFBhZ2UodGl0bGUsICd6aHdpa2knLCBpc0ZpbGVOUyk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8vLyBQdXNoIHJlZGlyZWN0IHRhcmdldHMgaW50byBhcnJheVxuXHRcdFx0XHRpZiAocmVzcG9uc2VbJ3F1ZXJ5J10ucmVkaXJlY3RzKSB7XG5cdFx0XHRcdFx0Zm9yIChjb25zdCB7dG99IG9mIHJlc3BvbnNlWydxdWVyeSddLnJlZGlyZWN0cyBhcyB7ZnJvbTogc3RyaW5nOyB0bzogc3RyaW5nfVtdKSB7XG5cdFx0XHRcdFx0XHR0b3NbdG9zLmxlbmd0aF0gPSB0bztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Ly8gQW5hbHl6ZSBzdGVwIDI6IGZvciBmaWxlcywgY2hlY2sgaWYgaXQgaXMgYSByZWRpcmVjdFxuXHRcdFx0aWYgKGlzRmlsZU5TKSB7XG5cdFx0XHRcdC8vLy8gUXVlcnlcblx0XHRcdFx0Y29uc3QgcmVzcG9uc2UyID0gYXdhaXQgcXVlcnlJbWFnZUluZm8odGl0bGVzKTtcblx0XHRcdFx0aWYgKHJlc3BvbnNlMlsncXVlcnknXSkge1xuXHRcdFx0XHRcdC8vLy8gTm9ybWFsaXplXG5cdFx0XHRcdFx0aWYgKHJlc3BvbnNlMlsncXVlcnknXS5ub3JtYWxpemVkKSB7XG5cdFx0XHRcdFx0XHRmb3IgKGNvbnN0IHtmcm9tLCB0b30gb2YgcmVzcG9uc2UyWydxdWVyeSddLm5vcm1hbGl6ZWQgYXMge2Zyb206IHN0cmluZzsgdG86IHN0cmluZ31bXSkge1xuXHRcdFx0XHRcdFx0XHR0aXRsZXMgPSB0aXRsZXMubWFwKChlbGVtZW50KSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIGVsZW1lbnQgPT09IGZyb20gPyB0byA6IGVsZW1lbnQ7XG5cdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC8vLy8gdXBsb2FkXG5cdFx0XHRcdFx0aWYgKHJlc3BvbnNlMlsncXVlcnknXS5wYWdlcykge1xuXHRcdFx0XHRcdFx0Zm9yIChjb25zdCBwYWdlMiBvZiByZXNwb25zZTJbJ3F1ZXJ5J10ucGFnZXMpIHtcblx0XHRcdFx0XHRcdFx0Y29uc3QgdGl0bGUgPSBwYWdlMi50aXRsZSBhcyBzdHJpbmc7XG5cblx0XHRcdFx0XHRcdFx0aWYgKHBhZ2UyLm1pc3NpbmcgfHwgcGFnZTIucmVkaXJlY3QpIHtcblx0XHRcdFx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdGlmIChwYWdlMi5pbWFnZXJlcG9zaXRvcnkgJiYgcGFnZTIuaW1hZ2VyZXBvc2l0b3J5ICE9PSAnbG9jYWwnKSB7XG5cdFx0XHRcdFx0XHRcdFx0YXdhaXQgdXBsb2FkRmlsZShcblx0XHRcdFx0XHRcdFx0XHRcdHRpdGxlLFxuXHRcdFx0XHRcdFx0XHRcdFx0YCR7cGFnZTIuaW1hZ2VpbmZvWzBdLnVybH1gLnJlcGxhY2UoJ3dtLnpob25nd2VuLndpa2knLCAndXBsb2FkLndpa2ltZWRpYS5vcmcnKVxuXHRcdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRpZiAocmVzcG9uc2UyWydxdWVyeSddLnJlZGlyZWN0cykge1xuXHRcdFx0XHRcdFx0Zm9yIChjb25zdCB7dG99IG9mIHJlc3BvbnNlMlsncXVlcnknXS5yZWRpcmVjdHMgYXMge2Zyb206IHN0cmluZzsgdG86IHN0cmluZ31bXSkge1xuXHRcdFx0XHRcdFx0XHR0b3NbdG9zLmxlbmd0aF0gPSB0bztcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Ly8gQW5hbHl6ZSBzdGVwIDM6IGltcG9ydCBwYWdlcyBhcyByZWRpcmVjdCB0YXJnZXRcblx0XHRcdC8vLy8gUXVldWUgcmVxdWVzdHMgdG8gaW1wb3J0IHJlZGlyZWN0IHRhcmdldHNcblx0XHRcdGlmICh0b3MubGVuZ3RoKSB7XG5cdFx0XHRcdGF3YWl0IGRldGVjdElmRmlsZVJlZGlyZWN0KHVuaXF1ZUFycmF5KHRvcykpOyAvLyBSZXBsYWNlIFNldCB3aXRoIHVuaXF1ZUFycmF5LCBhdm9pZGluZyBjb3JlLWpzIHBvbHlmaWxsaW5nXG5cdFx0XHR9XG5cdFx0fTtcblx0fVxuXG5cdGZvciAoY29uc3QgcHJvbWlzZSBvZiBwcm9taXNlcykge1xuXHRcdHRyeSB7XG5cdFx0XHRhd2FpdCBwcm9taXNlKCk7XG5cdFx0fSBjYXRjaCB7fVxuXHR9XG59O1xuXG5leHBvcnQge3R5cGUgRGV0ZWN0SWZGaWxlUmVkaXJlY3QsIGRldGVjdElmRmlsZVJlZGlyZWN0LCB0eXBlIFJlZnJlc2hQYWdlLCByZWZyZXNoUGFnZX07XG4iLCAie1xuXHRcInZlcnNpb25cIjogXCIyLjBcIlxufVxuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7aW5pdE13QXBpfSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG5jb25zdCBhcGk6IG13LkFwaSA9IGluaXRNd0FwaShgUXVpY2tJbXBvcnQvJHtPUFRJT05TLnZlcnNpb259YCk7XG5cbmV4cG9ydCB7YXBpfTtcbiIsICJjb25zdCBnZXRJd1ByZWZpeCA9ICgpOiBzdHJpbmcgPT4ge1xuXHRjb25zdCBjYVZpZXdGb3JlaWduQ29tbW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2Etdmlldy1mb3JlaWduIGFbaHJlZio9J2NvbW1vbnMud2lraW1lZGlhLm9yZyddXCIpO1xuXHRjb25zdCBjYVZpZXdGb3JlaWduRW53aWtpID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjYS12aWV3LWZvcmVpZ24gYVtocmVmKj0nZW4ud2lraXBlZGlhLm9yZyddXCIpO1xuXHRjb25zdCBjYVZpZXdGb3JlaWduWmh3aWtpID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjYS12aWV3LWZvcmVpZ24gYVtocmVmKj0nemgud2lraXBlZGlhLm9yZyddXCIpO1xuXG5cdGlmIChjYVZpZXdGb3JlaWduQ29tbW9ucykge1xuXHRcdHJldHVybiAnY29tbW9ucyc7XG5cdH0gZWxzZSBpZiAoY2FWaWV3Rm9yZWlnblpod2lraSkge1xuXHRcdHJldHVybiAnemh3aWtpJztcblx0fSBlbHNlIGlmIChjYVZpZXdGb3JlaWduRW53aWtpKSB7XG5cdFx0cmV0dXJuICdlbndpa2knO1xuXHR9XG5cblx0cmV0dXJuICd6aHdpa2knO1xufTtcblxuZXhwb3J0IHtnZXRJd1ByZWZpeH07XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsc0JBQUEsQ0FBQTtBQUFBQyxTQUFBRCxxQkFBQTtFQUFBRSxLQUFBQSxNQUFBQTtFQUFBQyxzQkFBQUEsTUFBQUE7RUFBQUMsYUFBQUEsTUFBQUE7QUFBQSxDQUFBO0FBQUFDLE9BQUFDLFVBQUFDLGFBQUFQLG1CQUFBOztBQ0FBLElBQUFRLHFCQUF5Q0MsUUFBQSxpQkFBQTs7QUNDeEMsSUFBQUMsVUFBVzs7QUNBWixJQUFBQyxvQkFBd0JGLFFBQUEsaUJBQUE7QUFFeEIsSUFBTVAsT0FBQSxHQUFjUyxrQkFBQUMsV0FBQSxlQUFBQyxPQUFpQ0gsT0FBTyxDQUFFOztBRkQ5RCxJQUFBSSxxQkFBdUJMLFFBQUEscUJBQUE7QUFLdkIsSUFBSU0sbUJBQXFDO0VBQ3hDQyxXQUFXQSxNQUFNO0VBQUM7QUFDbkI7QUFFQSxJQUFNWixjQUE0QmEsV0FBVTtBQUMzQ0YsbUJBQWlCQyxVQUFVO0FBQzNCLEdBQUEsR0FBQUYsbUJBQUFJLFVBQ0M7SUFDQ0MsTUFBTTtJQUNOQyxVQUFVO0VBQ1gsR0FDQSxNQUNEO0FBRUEsTUFBSUgsT0FBTztBQUNWSSxhQUFTQyxRQUFRQyxHQUFHQyxLQUFLQyxPQUFPUixLQUFLLENBQUM7RUFDdkMsT0FBTztBQUNOSSxhQUFTSyxPQUFPO0VBQ2pCO0FBQ0Q7QUFFQSxJQUFNQyxhQUFBLDRCQUFBO0FBQUEsTUFBQUMsT0FBQUMsa0JBQWEsV0FBT0MsVUFBa0JDLFVBQWtCQyxXQUFvQixPQUE0QjtBQUM3R2pCLHFCQUFpQkMsVUFBVTtBQUMzQkQsd0JBQUEsR0FBbUJELG1CQUFBSSxVQUNsQjtNQUNDQyxNQUFBLFNBQUFOLE9BQWVrQixVQUFRLEdBQUEsRUFBQWxCLE9BQUlpQixRQUFRO01BQ25DVixVQUFVO0lBQ1gsR0FDQSxNQUNEO0FBRUEsUUFBSWEsVUFBa0I7QUFDdEIsUUFBSUQsVUFBVTtBQUNiQyxpQkFBVztJQUNaO0FBRUEsVUFBTUMsU0FBMEI7TUFDL0JDLFFBQVE7TUFDUkMsUUFBUTtNQUNSQyxrQkFBa0I7TUFDbEJDLGVBQWVSO01BQ2ZTLGlCQUFpQlI7TUFDakJTLGlCQUFpQlQ7TUFDakJFLFNBQUEsSUFBQXBCLE9BQWFvQixTQUFPLEdBQUE7SUFDckI7QUFDQSxVQUFNUSxTQUFBLE1BQWV2QyxJQUFJd0Msa0JBQWtCUixNQUFNO0FBRWpELFFBQUlPLE9BQU8sUUFBUSxLQUFLQSxPQUFPLFFBQVEsRUFBRSxDQUFDLEtBQUtBLE9BQU8sUUFBUSxFQUFFRSxXQUFXO0FBQzFFNUIsdUJBQWlCQyxVQUFVO0FBQzNCRCwwQkFBQSxHQUFtQkQsbUJBQUFJLFVBQ2xCO1FBQ0NDLE1BQUEsVUFBQU4sT0FBZ0JpQixRQUFRO1FBQ3hCVixVQUFVLElBQUk7TUFDZixHQUNBLFNBQ0Q7QUFDQSxhQUFPO0lBQ1I7QUFFQUwscUJBQWlCQyxVQUFVO0FBQzNCRCx3QkFBQSxHQUFtQkQsbUJBQUFJLFVBQ2xCO01BQ0NDLE1BQUEsVUFBQU4sT0FBZ0JrQixVQUFRLEdBQUEsRUFBQWxCLE9BQUlpQixRQUFRO01BQ3BDVixVQUFVLElBQUk7SUFDZixHQUNBLFNBQ0Q7QUFDQSxXQUFPO0VBQ1IsQ0FBQTtBQUFBLFNBQUEsU0EvQ01PLFlBQUFpQixJQUFBQyxLQUFBO0FBQUEsV0FBQWpCLEtBQUFrQixNQUFBLE1BQUFDLFNBQUE7RUFBQTtBQUFBLEdBQUE7QUFpRE4sSUFBTUMsYUFBQSw0QkFBQTtBQUFBLE1BQUFDLFFBQUFwQixrQkFBYSxXQUFPcUIsUUFBZ0JDLEtBQWdDO0FBQ3pFcEMscUJBQWlCQyxVQUFVO0FBQzNCRCx3QkFBQSxHQUFtQkQsbUJBQUFJLFVBQ2xCO01BQ0NDLE1BQUEsU0FBQU4sT0FBZXFDLE1BQU07TUFDckI5QixVQUFVO0lBQ1gsR0FDQSxNQUNEO0FBRUEsVUFBTWMsU0FBMEI7TUFDL0JpQixLQUFLQSxRQUFBLFFBQUFBLFFBQUEsU0FBQUEsTUFBQSx1REFBQXRDLE9BQThEVSxHQUFHQyxLQUFLNEIsYUFBYUYsTUFBTSxDQUFDO01BQy9GZixRQUFRO01BQ1JDLFFBQVE7TUFDUmlCLFVBQVVIO01BQ1ZJLFNBQVM7TUFDVEMsZ0JBQWdCO0lBQ2pCO0FBQ0EsVUFBTXJELElBQUl3QyxrQkFBa0JSLE1BQU07QUFFbENuQixxQkFBaUJDLFVBQVU7QUFDM0JELHdCQUFBLEdBQW1CRCxtQkFBQUksVUFDbEI7TUFDQ0MsTUFBQSxVQUFBTixPQUFnQnFDLE1BQU07TUFDdEI5QixVQUFVLElBQUk7SUFDZixHQUNBLFNBQ0Q7RUFDRCxDQUFBO0FBQUEsU0FBQSxTQTVCTTRCLFlBQUFRLEtBQUFDLEtBQUE7QUFBQSxXQUFBUixNQUFBSCxNQUFBLE1BQUFDLFNBQUE7RUFBQTtBQUFBLEdBQUE7QUE4Qk4sSUFBTVcsaUJBQUEsNEJBQUE7QUFBQSxNQUFBQyxRQUFBOUIsa0JBQWlCLFdBQU8rQixRQUE4QjtBQUMzRCxVQUFNMUIsU0FBdUQ7TUFDNUQwQjtNQUNBekIsUUFBUTtNQUNSQyxRQUFRO01BQ1J5QixlQUFlO01BQ2ZDLE1BQU0sQ0FBQyxhQUFhLE1BQU07TUFDMUJDLFFBQVEsQ0FBQyxLQUFLO01BQ2RDLFdBQVc7SUFDWjtBQUNBLFVBQU1DLFdBQUEsTUFBaUIvRCxJQUFJZ0UsSUFBSWhDLE1BQU07QUFFckMsV0FBTytCO0VBQ1IsQ0FBQTtBQUFBLFNBQUEsU0FiTVAsZ0JBQUFTLEtBQUE7QUFBQSxXQUFBUixNQUFBYixNQUFBLE1BQUFDLFNBQUE7RUFBQTtBQUFBLEdBQUE7QUFlTixJQUFNNUMsd0JBQUEsNEJBQUE7QUFBQSxNQUFBaUUsUUFBQXZDLGtCQUE2QyxXQUFPd0MsV0FBV3JDLFdBQVcsT0FBVTtBQUN6RnFDLGlCQUFBLEdBQVk3RCxtQkFBQThELGNBQUEsR0FBWTlELG1CQUFBK0QsZUFBY0YsU0FBUyxDQUFDO0FBQ2hELFVBQU1HLFdBQW9DLENBQUE7QUFFMUMsYUFBU0MsSUFBSSxHQUFHQSxJQUFJSixVQUFVSyxRQUFRRCxLQUFLO0FBQzFDLFVBQUliLFNBQVNTLFVBQVVNLE9BQU8sR0FBRyxFQUFFO0FBQ25DLFVBQUksQ0FBQ2YsT0FBT2MsUUFBUTtBQUNuQjtNQUNEO0FBRUFGLGVBQVNBLFNBQVNFLE1BQU0sSUFBQTdDLGtDQUFJLGFBQTJCO0FBRXRELGNBQU0rQyxNQUFnQixDQUFBO0FBSXRCLGNBQU1YLFdBQUEsTUFBaUJQLGVBQWVFLE1BQU07QUFDNUMsWUFBSUssU0FBUyxPQUFPLEdBQUc7QUFFdEIsY0FBSUEsU0FBUyxPQUFPLEVBQUVZLFlBQVk7QUFBQSxnQkFBQUMsYUFBQUMsMkJBQ1JkLFNBQVMsT0FBTyxFQUFFWSxVQUFBLEdBQUFHO0FBQUEsZ0JBQUE7QUFBM0MsbUJBQUFGLFdBQUFHLEVBQUEsR0FBQSxFQUFBRCxTQUFBRixXQUFBSSxFQUFBLEdBQUFDLFFBQXVGO0FBQUEsc0JBQTVFO2tCQUFDQztrQkFBTUM7Z0JBQUUsSUFBQUwsT0FBQU07QUFDbkIxQix5QkFBU0EsT0FBTzJCLElBQUtDLGFBQVk7QUFDaEMseUJBQU9BLFlBQVlKLE9BQU9DLEtBQUtHO2dCQUNoQyxDQUFDO2NBQ0Y7WUFBQSxTQUFBQyxLQUFBO0FBQUFYLHlCQUFBWSxFQUFBRCxHQUFBO1lBQUEsVUFBQTtBQUFBWCx5QkFBQWEsRUFBQTtZQUFBO1VBQ0Q7QUFHQSxjQUFJMUIsU0FBUyxPQUFPLEVBQUUyQixPQUFPO0FBQUEsZ0JBQUFDLGFBQUFkLDJCQUNSZCxTQUFTLE9BQU8sRUFBRTJCLEtBQUEsR0FBQUU7QUFBQSxnQkFBQTtBQUF0QyxtQkFBQUQsV0FBQVosRUFBQSxHQUFBLEVBQUFhLFNBQUFELFdBQUFYLEVBQUEsR0FBQUMsUUFBNkM7QUFBQSxzQkFBbENZLFFBQUFELE9BQUFSO0FBQ1Ysc0JBQU1yRSxRQUFROEUsTUFBTTlFO0FBRXBCLG9CQUFJLENBQUM4RSxNQUFNQyxTQUFTO0FBQ25CO2dCQUNEO0FBRUEsb0JBQUlDLGtCQUFrQjtBQUN0QixvQkFBSWpFLFVBQVU7QUFDYmlFLG9DQUFBLE1BQXdCdEUsV0FBV1YsT0FBTyxXQUFXZSxRQUFRO2dCQUM5RDtBQUNBLG9CQUFJLENBQUNpRSxpQkFBaUI7QUFDckIsd0JBQU10RSxXQUFXVixPQUFPLFVBQVVlLFFBQVE7Z0JBQzNDO2NBQ0Q7WUFBQSxTQUFBeUQsS0FBQTtBQUFBSSx5QkFBQUgsRUFBQUQsR0FBQTtZQUFBLFVBQUE7QUFBQUkseUJBQUFGLEVBQUE7WUFBQTtVQUNEO0FBR0EsY0FBSTFCLFNBQVMsT0FBTyxFQUFFRCxXQUFXO0FBQUEsZ0JBQUFrQyxhQUFBbkIsMkJBQ2JkLFNBQVMsT0FBTyxFQUFFRCxTQUFBLEdBQUFtQztBQUFBLGdCQUFBO0FBQXJDLG1CQUFBRCxXQUFBakIsRUFBQSxHQUFBLEVBQUFrQixTQUFBRCxXQUFBaEIsRUFBQSxHQUFBQyxRQUFnRjtBQUFBLHNCQUFyRTtrQkFBQ0U7Z0JBQUUsSUFBQWMsT0FBQWI7QUFDYlYsb0JBQUlBLElBQUlGLE1BQU0sSUFBSVc7Y0FDbkI7WUFBQSxTQUFBSSxLQUFBO0FBQUFTLHlCQUFBUixFQUFBRCxHQUFBO1lBQUEsVUFBQTtBQUFBUyx5QkFBQVAsRUFBQTtZQUFBO1VBQ0Q7UUFDRDtBQUdBLFlBQUkzRCxVQUFVO0FBRWIsZ0JBQU1vRSxZQUFBLE1BQWtCMUMsZUFBZUUsTUFBTTtBQUM3QyxjQUFJd0MsVUFBVSxPQUFPLEdBQUc7QUFFdkIsZ0JBQUlBLFVBQVUsT0FBTyxFQUFFdkIsWUFBWTtBQUFBLGtCQUFBd0IsYUFBQXRCLDJCQUNUcUIsVUFBVSxPQUFPLEVBQUV2QixVQUFBLEdBQUF5QjtBQUFBLGtCQUFBO0FBQTVDLHFCQUFBRCxXQUFBcEIsRUFBQSxHQUFBLEVBQUFxQixTQUFBRCxXQUFBbkIsRUFBQSxHQUFBQyxRQUF3RjtBQUFBLHdCQUE3RTtvQkFBQ0M7b0JBQU1DO2tCQUFFLElBQUFpQixPQUFBaEI7QUFDbkIxQiwyQkFBU0EsT0FBTzJCLElBQUtDLGFBQVk7QUFDaEMsMkJBQU9BLFlBQVlKLE9BQU9DLEtBQUtHO2tCQUNoQyxDQUFDO2dCQUNGO2NBQUEsU0FBQUMsS0FBQTtBQUFBWSwyQkFBQVgsRUFBQUQsR0FBQTtjQUFBLFVBQUE7QUFBQVksMkJBQUFWLEVBQUE7Y0FBQTtZQUNEO0FBR0EsZ0JBQUlTLFVBQVUsT0FBTyxFQUFFUixPQUFPO0FBQUEsa0JBQUFXLGFBQUF4QiwyQkFDVHFCLFVBQVUsT0FBTyxFQUFFUixLQUFBLEdBQUFZO0FBQUEsa0JBQUE7QUFBdkMscUJBQUFELFdBQUF0QixFQUFBLEdBQUEsRUFBQXVCLFNBQUFELFdBQUFyQixFQUFBLEdBQUFDLFFBQThDO0FBQUEsd0JBQW5Dc0IsUUFBQUQsT0FBQWxCO0FBQ1Ysd0JBQU1yRSxRQUFRd0YsTUFBTXhGO0FBRXBCLHNCQUFJd0YsTUFBTVQsV0FBV1MsTUFBTUMsVUFBVTtBQUNwQztrQkFDRDtBQUVBLHNCQUFJRCxNQUFNRSxtQkFBbUJGLE1BQU1FLG9CQUFvQixTQUFTO0FBQy9ELDBCQUFNM0QsV0FDTC9CLE9BQ0EsR0FBQUosT0FBRzRGLE1BQU1HLFVBQVUsQ0FBQyxFQUFFekQsR0FBRyxFQUFHN0IsUUFBUSxvQkFBb0Isc0JBQXNCLENBQy9FO2tCQUNEO2dCQUNEO2NBQUEsU0FBQW1FLEtBQUE7QUFBQWMsMkJBQUFiLEVBQUFELEdBQUE7Y0FBQSxVQUFBO0FBQUFjLDJCQUFBWixFQUFBO2NBQUE7WUFDRDtBQUVBLGdCQUFJUyxVQUFVLE9BQU8sRUFBRXBDLFdBQVc7QUFBQSxrQkFBQTZDLGFBQUE5QiwyQkFDZHFCLFVBQVUsT0FBTyxFQUFFcEMsU0FBQSxHQUFBOEM7QUFBQSxrQkFBQTtBQUF0QyxxQkFBQUQsV0FBQTVCLEVBQUEsR0FBQSxFQUFBNkIsU0FBQUQsV0FBQTNCLEVBQUEsR0FBQUMsUUFBaUY7QUFBQSx3QkFBdEU7b0JBQUNFO2tCQUFFLElBQUF5QixPQUFBeEI7QUFDYlYsc0JBQUlBLElBQUlGLE1BQU0sSUFBSVc7Z0JBQ25CO2NBQUEsU0FBQUksS0FBQTtBQUFBb0IsMkJBQUFuQixFQUFBRCxHQUFBO2NBQUEsVUFBQTtBQUFBb0IsMkJBQUFsQixFQUFBO2NBQUE7WUFDRDtVQUNEO1FBQ0Q7QUFJQSxZQUFJZixJQUFJRixRQUFRO0FBQ2YsZ0JBQU12RSx1QkFBQSxHQUFxQkssbUJBQUE4RCxhQUFZTSxHQUFHLENBQUM7UUFDNUM7TUFDRCxDQUFBO0lBQ0Q7QUFFQSxhQUFBbUMsS0FBQSxHQUFBQyxZQUFzQnhDLFVBQUF1QyxLQUFBQyxVQUFBdEMsUUFBQXFDLE1BQVU7QUFBaEMsWUFBV0UsVUFBQUQsVUFBQUQsRUFBQTtBQUNWLFVBQUk7QUFDSCxjQUFNRSxRQUFRO01BQ2YsUUFBUTtNQUFDO0lBQ1Y7RUFDRCxDQUFBO0FBQUEsU0FBQSxTQTNHTTlHLHFCQUFBK0csS0FBQTtBQUFBLFdBQUE5QyxNQUFBdEIsTUFBQSxNQUFBQyxTQUFBO0VBQUE7QUFBQSxHQUFBOztBRzFITixJQUFNb0UsY0FBY0EsTUFBYztBQUNqQyxRQUFNQyx1QkFBdUJDLFNBQVNDLGNBQWMsbURBQW1EO0FBQ3ZHLFFBQU1DLHNCQUFzQkYsU0FBU0MsY0FBYyw4Q0FBOEM7QUFDakcsUUFBTUUsc0JBQXNCSCxTQUFTQyxjQUFjLDhDQUE4QztBQUVqRyxNQUFJRixzQkFBc0I7QUFDekIsV0FBTztFQUNSLFdBQVdJLHFCQUFxQjtBQUMvQixXQUFPO0VBQ1IsV0FBV0QscUJBQXFCO0FBQy9CLFdBQU87RUFDUjtBQUVBLFNBQU87QUFDUjs7Q0pYQyxTQUFTRSxjQUFvQjtBQUM3QixRQUFNO0lBQUNDO0lBQW1CQztJQUFZQztFQUFRLElBQUlyRyxHQUFHc0csT0FBTzNELElBQUk7QUFFaEUsUUFBTTRELGdCQUFnQlQsU0FBU0MsY0FBYyxpQkFBaUI7QUFFOUQsUUFBTXRGLFdBQW9CMEYsc0JBQXNCO0FBQ2hELFFBQU1LLHFCQUE4QixDQUFDLENBQUNWLFNBQVNDLGNBQWMsbUJBQW1CO0FBQ2hGLFFBQU12RixXQUFtQm9GLFlBQVk7QUFFckMsTUFBSSxDQUFDcEYsVUFBVTtBQUNkO0VBQ0Q7QUFFQSxRQUFNaUcsUUFBZ0JoRyxZQUFZLENBQUMrRixxQkFBcUJoRyxXQUFXO0FBQ25FLFFBQU1rRyxjQUFzQmpHLFdBQ3pCZ0csUUFBQSxNQUFBbkgsT0FDT21ILE9BQUssR0FBQSxJQUNYLE9BQ0RGLGdCQUNDLFVBQ0E7QUFFSixNQUFLRixhQUFhLG1CQUFtQjVGLFlBQWEwRixvQkFBb0IsR0FBRztBQUN4RTtFQUNEO0FBRUEsUUFBTVEsWUFBbUNiLFNBQVNDLGNBQWMsYUFBYSxJQUFJLGVBQWU7QUFDaEcsUUFBTTlCLFVBQWdDakUsR0FBR0MsS0FBSzJHLGVBQWVELFdBQVcsS0FBQSxLQUFBckgsT0FBVW9ILFdBQVcsR0FBSSxVQUFVO0FBQzNHLE1BQUksQ0FBQ3pDLFNBQVM7QUFDYjtFQUNEO0FBRUEsTUFBSTRDO0FBQ0osTUFBSUM7QUFFSixNQUFJLENBQUNyRyxVQUFVO0FBRWQsVUFBTXNHLGdCQUFnQjtBQUN0QixVQUFNQyxVQUFVWixXQUFXYSxNQUFNRixhQUFhO0FBRTlDLFVBQU1HLGdCQUFnQjtBQUN0QixVQUFNQyxVQUFVZixXQUFXYSxNQUFNQyxhQUFhO0FBRTlDLFFBQUk7QUFFSCxVQUFJRSxjQUFrQ0M7QUFFdEMsVUFBSUwsU0FBUztBQUNaLFNBQUEsRUFBR0ksY0FBY0MsUUFBUSxJQUFJTDtNQUM5QixXQUFXRyxTQUFTO0FBQ25CLFNBQUEsRUFBR0MsY0FBY0MsUUFBUSxJQUFJRjtNQUM5QjtBQUVBLFVBQUlDLGdCQUFnQkMsVUFBVTtBQUM3QlIsc0JBQUEsR0FBQXZILE9BQWlCOEgsY0FBWSxJQUFBLEVBQUE5SCxPQUFLK0gsVUFBUSxHQUFBO0FBQzFDLFlBQUlBLGFBQWEsT0FBTztBQUN2QlAsd0JBQUEsR0FBQXhILE9BQWlCOEgsY0FBWSxRQUFBO1FBQzlCLFdBQVdDLGFBQWEsT0FBTztBQUM5QlAsd0JBQUEsR0FBQXhILE9BQWlCOEgsY0FBWSxRQUFBO1FBQzlCO01BQ0Q7SUFDRCxRQUFRO0lBQUM7RUFDVjtBQUVBbkQsVUFBUXFELGlCQUFpQixTQUFBaEgsa0NBQVMsYUFBMkI7QUFBQSxRQUFBaUg7QUFDNUQsVUFBTWhILFdBQW1CZ0csZ0JBQWdCQSxjQUFjaUIsZUFBZXBCLGFBQWFBO0FBQ25GLFVBQU10RCxZQUFZLENBQUN2QyxRQUFRO0FBQzNCLFFBQUlzRyxhQUFhO0FBQ2hCL0QsZ0JBQVVBLFVBQVVLLE1BQU0sSUFBSTBEO0lBQy9CO0FBQ0EsUUFBSUMsYUFBYTtBQUNoQmhFLGdCQUFVQSxVQUFVSyxNQUFNLElBQUkyRDtJQUMvQjtBQUNBLFVBQU1sSSxzQkFBcUJrRSxXQUFXckMsUUFBUTtBQUM5QzVCLGlCQUFBMEksUUFBWVQsZ0JBQUEsUUFBQUEsZ0JBQUEsU0FBQUEsY0FBZUQsaUJBQUEsUUFBQVUsVUFBQSxTQUFBQSxRQUFlbkIsVUFBVTtFQUNyRCxDQUFDLENBQUE7QUFDRixHQUFHO0FBRUhxQixPQUFPN0ksdUJBQXVCQTsiLAogICJuYW1lcyI6IFsiUXVpY2tJbXBvcnRfZXhwb3J0cyIsICJfX2V4cG9ydCIsICJhcGkiLCAiZGV0ZWN0SWZGaWxlUmVkaXJlY3QiLCAicmVmcmVzaFBhZ2UiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAiX190b0NvbW1vbkpTIiwgImltcG9ydF9leHRfZ2FkZ2V0MiIsICJyZXF1aXJlIiwgInZlcnNpb24iLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAiaW5pdE13QXBpIiwgImNvbmNhdCIsICJpbXBvcnRfZXh0X2dhZGdldDMiLCAidG9hc3RpZnlJbnN0YW5jZSIsICJoaWRlVG9hc3QiLCAidGl0bGUiLCAidG9hc3RpZnkiLCAidGV4dCIsICJkdXJhdGlvbiIsICJsb2NhdGlvbiIsICJyZXBsYWNlIiwgIm13IiwgInV0aWwiLCAiZ2V0VXJsIiwgInJlbG9hZCIsICJpbXBvcnRQYWdlIiwgIl9yZWYiLCAiX2FzeW5jVG9HZW5lcmF0b3IiLCAicGFnZU5hbWUiLCAiaXdwcmVmaXgiLCAiaXNGaWxlTlMiLCAic3VtbWFyeSIsICJwYXJhbXMiLCAiYWN0aW9uIiwgImZvcm1hdCIsICJhc3NpZ25rbm93bnVzZXJzIiwgImludGVyd2lraXBhZ2UiLCAiaW50ZXJ3aWtpcHJlZml4IiwgImludGVyd2lraXNvdXJjZSIsICJyZXN1bHQiLCAicG9zdFdpdGhFZGl0VG9rZW4iLCAicmV2aXNpb25zIiwgIl94IiwgIl94MiIsICJhcHBseSIsICJhcmd1bWVudHMiLCAidXBsb2FkRmlsZSIsICJfcmVmMiIsICJ0YXJnZXQiLCAidXJsIiwgInJhd3VybGVuY29kZSIsICJmaWxlbmFtZSIsICJjb21tZW50IiwgImlnbm9yZXdhcm5pbmdzIiwgIl94MyIsICJfeDQiLCAicXVlcnlJbWFnZUluZm8iLCAiX3JlZjMiLCAidGl0bGVzIiwgImZvcm1hdHZlcnNpb24iLCAicHJvcCIsICJpaXByb3AiLCAicmVkaXJlY3RzIiwgInJlc3BvbnNlIiwgImdldCIsICJfeDUiLCAiX3JlZjQiLCAicGFnZU5hbWVzIiwgInVuaXF1ZUFycmF5IiwgImdlbmVyYXRlQXJyYXkiLCAicHJvbWlzZXMiLCAiaSIsICJsZW5ndGgiLCAic3BsaWNlIiwgInRvcyIsICJub3JtYWxpemVkIiwgIl9pdGVyYXRvcjIiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAiX3N0ZXAyIiwgInMiLCAibiIsICJkb25lIiwgImZyb20iLCAidG8iLCAidmFsdWUiLCAibWFwIiwgImVsZW1lbnQiLCAiZXJyIiwgImUiLCAiZiIsICJwYWdlcyIsICJfaXRlcmF0b3IzIiwgIl9zdGVwMyIsICJwYWdlMSIsICJtaXNzaW5nIiwgImlmSW1wb3J0U3VjY2VzcyIsICJfaXRlcmF0b3I0IiwgIl9zdGVwNCIsICJyZXNwb25zZTIiLCAiX2l0ZXJhdG9yNSIsICJfc3RlcDUiLCAiX2l0ZXJhdG9yNiIsICJfc3RlcDYiLCAicGFnZTIiLCAicmVkaXJlY3QiLCAiaW1hZ2VyZXBvc2l0b3J5IiwgImltYWdlaW5mbyIsICJfaXRlcmF0b3I3IiwgIl9zdGVwNyIsICJfaSIsICJfcHJvbWlzZXMiLCAicHJvbWlzZSIsICJfeDYiLCAiZ2V0SXdQcmVmaXgiLCAiY2FWaWV3Rm9yZWlnbkNvbW1vbnMiLCAiZG9jdW1lbnQiLCAicXVlcnlTZWxlY3RvciIsICJjYVZpZXdGb3JlaWduRW53aWtpIiwgImNhVmlld0ZvcmVpZ25aaHdpa2kiLCAicXVpY2tJbXBvcnQiLCAid2dOYW1lc3BhY2VOdW1iZXIiLCAid2dQYWdlTmFtZSIsICJ3Z1dpa2lJRCIsICJjb25maWciLCAicmVkaXJlY3RUZXh0QSIsICJoYXNNd05vYXJ0aWNsZXRleHQiLCAibGFiZWwiLCAiYnV0dG9uTGFiZWwiLCAicG9ydGxldElkIiwgImFkZFBvcnRsZXRMaW5rIiwgIndnUGFnZU5hbWUyIiwgIndnUGFnZU5hbWUzIiwgImRpc2FtUmVnRXhwRlciLCAibWF0Y2hGVyIsICJtYXRjaCIsICJkaXNhbVJlZ0V4cEhXIiwgIm1hdGNoSFciLCAicm9vdFBhZ2VOYW1lIiwgImRpc2FtS2V5IiwgImFkZEV2ZW50TGlzdGVuZXIiLCAiX3JlZjciLCAidGV4dENvbnRlbnQiLCAid2luZG93Il0KfQo=

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
      if (it) o = it;
      var i = 0;
      var F = function() {
      };
      return { s: F, n: function() {
        if (i >= o.length) return { done: true };
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
      if (!normalCompletion && it.return != null) it.return();
    } finally {
      if (didErr) throw err;
    }
  } };
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
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
  detectIfFileRedirect: () => detectIfFileRedirect,
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
    const response = yield api.post(params);
    return response;
  });
  return function queryImageInfo2(_x5) {
    return _ref3.apply(this, arguments);
  };
}();
var detectIfFileRedirect = /* @__PURE__ */ function() {
  var _ref4 = _asyncToGenerator(function* (pageNames, isFileNS = false) {
    pageNames = (0, import_ext_gadget2.generateArray)(pageNames);
    const promises = [];
    for (let i = 0; i < pageNames.length; i++) {
      let titles = pageNames.splice(0, 50);
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
                    yield uploadFile(title, page2.imageinfo[0].url);
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
          yield detectIfFileRedirect((0, import_ext_gadget2.uniqueArray)(tos));
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
  return function detectIfFileRedirect2(_x6) {
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
  const caViewForeignZhwiki = document.querySelectorAll("#ca-view-foreign a[href*='zh.wikipedia.org']");
  const redirectTextA = document.querySelectorAll(".redirectText a");
  const isFileNS = wgNamespaceNumber === 6;
  const hasMwNoarticletext = !!document.querySelector("#mw-noarticletext");
  const iwprefix = caViewForeignZhwiki.length ? "zhwiki" : "commons";
  const label = isFileNS && !hasMwNoarticletext ? iwprefix : "";
  const buttonLabel = isFileNS ? label ? "文件（".concat(label, "）") : "页面" : redirectTextA.length ? "重定向目标" : "页面";
  if (wgWikiID !== "zhqiuwenbaike" && isFileNS || wgNamespaceNumber < 0) {
    return;
  }
  const portletId = document.querySelector("#p-cactions") ? "p-cactions" : "p-tb";
  const element = mw.util.addPortletLink(portletId, "#", "导入".concat(buttonLabel), "t-import");
  if (!element) {
    return;
  }
  element.addEventListener("click", () => {
    void _asyncToGenerator(function* () {
      var _redirectTextA$;
      const pageName = ((_redirectTextA$ = redirectTextA[0]) === null || _redirectTextA$ === void 0 ? void 0 : _redirectTextA$.textContent) || wgPageName;
      yield detectIfFileRedirect(pageName, isFileNS);
    })().then(() => {
      refreshPage(wgPageName);
    });
  });
})();

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1F1aWNrSW1wb3J0L1F1aWNrSW1wb3J0LnRzIiwgInNyYy9RdWlja0ltcG9ydC9tb2R1bGVzL2NvcmUudHMiLCAic3JjL1F1aWNrSW1wb3J0L29wdGlvbnMuanNvbiIsICJzcmMvUXVpY2tJbXBvcnQvbW9kdWxlcy9hcGkudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7ZGV0ZWN0SWZGaWxlUmVkaXJlY3QsIHJlZnJlc2hQYWdlfSBmcm9tICcuL21vZHVsZXMvY29yZSc7XG5cbihmdW5jdGlvbiBxdWlja0ltcG9ydCgpOiB2b2lkIHtcblx0Y29uc3Qge3dnTmFtZXNwYWNlTnVtYmVyLCB3Z1BhZ2VOYW1lLCB3Z1dpa2lJRH0gPSBtdy5jb25maWcuZ2V0KCk7XG5cblx0Y29uc3QgY2FWaWV3Rm9yZWlnblpod2lraSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIjY2Etdmlldy1mb3JlaWduIGFbaHJlZio9J3poLndpa2lwZWRpYS5vcmcnXVwiKTtcblx0Y29uc3QgcmVkaXJlY3RUZXh0QSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5yZWRpcmVjdFRleHQgYScpO1xuXG5cdGNvbnN0IGlzRmlsZU5TOiBib29sZWFuID0gd2dOYW1lc3BhY2VOdW1iZXIgPT09IDY7XG5cdGNvbnN0IGhhc013Tm9hcnRpY2xldGV4dDogYm9vbGVhbiA9ICEhZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI213LW5vYXJ0aWNsZXRleHQnKTtcblx0Y29uc3QgaXdwcmVmaXg6IHN0cmluZyA9IGNhVmlld0ZvcmVpZ25aaHdpa2kubGVuZ3RoID8gJ3pod2lraScgOiAnY29tbW9ucyc7XG5cblx0Y29uc3QgbGFiZWw6IHN0cmluZyA9IGlzRmlsZU5TICYmICFoYXNNd05vYXJ0aWNsZXRleHQgPyBpd3ByZWZpeCA6ICcnO1xuXHRjb25zdCBidXR0b25MYWJlbDogc3RyaW5nID0gaXNGaWxlTlNcblx0XHQ/IGxhYmVsXG5cdFx0XHQ/IGDmlofku7bvvIgke2xhYmVsfe+8iWBcblx0XHRcdDogJ+mhtemdoidcblx0XHQ6IHJlZGlyZWN0VGV4dEEubGVuZ3RoXG5cdFx0XHQ/ICfph43lrprlkJHnm67moIcnXG5cdFx0XHQ6ICfpobXpnaInO1xuXG5cdGlmICgod2dXaWtpSUQgIT09ICd6aHFpdXdlbmJhaWtlJyAmJiBpc0ZpbGVOUykgfHwgd2dOYW1lc3BhY2VOdW1iZXIgPCAwKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgcG9ydGxldElkOiAncC1jYWN0aW9ucycgfCAncC10YicgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcC1jYWN0aW9ucycpID8gJ3AtY2FjdGlvbnMnIDogJ3AtdGInO1xuXHRjb25zdCBlbGVtZW50OiBIVE1MTElFbGVtZW50IHwgbnVsbCA9IG13LnV0aWwuYWRkUG9ydGxldExpbmsocG9ydGxldElkLCAnIycsIGDlr7zlhaUke2J1dHRvbkxhYmVsfWAsICd0LWltcG9ydCcpO1xuXHRpZiAoIWVsZW1lbnQpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk6IHZvaWQgPT4ge1xuXHRcdHZvaWQgKGFzeW5jICgpID0+IHtcblx0XHRcdGNvbnN0IHBhZ2VOYW1lOiBzdHJpbmcgPSByZWRpcmVjdFRleHRBWzBdPy50ZXh0Q29udGVudCB8fCB3Z1BhZ2VOYW1lO1xuXHRcdFx0YXdhaXQgZGV0ZWN0SWZGaWxlUmVkaXJlY3QocGFnZU5hbWUsIGlzRmlsZU5TKTtcblx0XHR9KSgpLnRoZW4oKCkgPT4ge1xuXHRcdFx0cmVmcmVzaFBhZ2Uod2dQYWdlTmFtZSk7XG5cdFx0fSk7XG5cdH0pO1xufSkoKTtcblxuZXhwb3J0IHthcGl9IGZyb20gJy4vbW9kdWxlcy9hcGknO1xuZXhwb3J0IHtkZXRlY3RJZkZpbGVSZWRpcmVjdCwgcmVmcmVzaFBhZ2V9IGZyb20gJy4vbW9kdWxlcy9jb3JlJztcbiIsICJpbXBvcnQge2dlbmVyYXRlQXJyYXksIHVuaXF1ZUFycmF5fSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuaW1wb3J0IHthcGl9IGZyb20gJy4vYXBpJztcbmltcG9ydCB7dG9hc3RpZnl9IGZyb20gJ2V4dC5nYWRnZXQuVG9hc3RpZnknO1xuXG50eXBlIERldGVjdElmRmlsZVJlZGlyZWN0ID0gKHBhZ2VOYW1lczogc3RyaW5nIHwgc3RyaW5nW10sIGlzRmlsZU5TPzogYm9vbGVhbikgPT4gUHJvbWlzZTx2b2lkPjtcbnR5cGUgUmVmcmVzaFBhZ2UgPSAodGl0bGU/OiBzdHJpbmcpID0+IHZvaWQ7XG5cbmxldCB0b2FzdGlmeUluc3RhbmNlOiBUb2FzdGlmeUluc3RhbmNlID0ge1xuXHRoaWRlVG9hc3Q6ICgpID0+IHt9LFxufTtcblxuY29uc3QgcmVmcmVzaFBhZ2U6IFJlZnJlc2hQYWdlID0gKHRpdGxlKSA9PiB7XG5cdHRvYXN0aWZ5SW5zdGFuY2UuaGlkZVRvYXN0KCk7XG5cdHRvYXN0aWZ5KFxuXHRcdHtcblx0XHRcdHRleHQ6ICfmraPlnKjliLfmlrDpobXpnaInLFxuXHRcdFx0ZHVyYXRpb246IC0xLFxuXHRcdH0sXG5cdFx0J2luZm8nXG5cdCk7XG5cblx0aWYgKHRpdGxlKSB7XG5cdFx0bG9jYXRpb24ucmVwbGFjZShtdy51dGlsLmdldFVybCh0aXRsZSkpO1xuXHR9IGVsc2Uge1xuXHRcdGxvY2F0aW9uLnJlbG9hZCgpO1xuXHR9XG59O1xuXG5jb25zdCBpbXBvcnRQYWdlID0gYXN5bmMgKHBhZ2VOYW1lOiBzdHJpbmcsIGl3cHJlZml4OiBzdHJpbmcsIGlzRmlsZU5TOiBib29sZWFuID0gZmFsc2UpOiBQcm9taXNlPGJvb2xlYW4+ID0+IHtcblx0dG9hc3RpZnlJbnN0YW5jZS5oaWRlVG9hc3QoKTtcblx0dG9hc3RpZnlJbnN0YW5jZSA9IHRvYXN0aWZ5KFxuXHRcdHtcblx0XHRcdHRleHQ6IGDlr7zlhaXpobXpnaLkuK3vvJoke2l3cHJlZml4fToke3BhZ2VOYW1lfWAsXG5cdFx0XHRkdXJhdGlvbjogLTEsXG5cdFx0fSxcblx0XHQnaW5mbydcblx0KTtcblxuXHRsZXQgc3VtbWFyeTogc3RyaW5nID0gJ+mhtemdouaWh+Wtl+WOn+iuuOWPr++8mltbY2MtYnktc2E6NC4wfENDIEJZLVNBIDQuMF1d77yb5L2c6ICF6K+35Y+C6KeB5p2l5rqQ6aG16Z2i5Y6G5Y+yJztcblx0aWYgKGlzRmlsZU5TKSB7XG5cdFx0c3VtbWFyeSArPSAn77yb5paH5Lu25L2c6ICF6K+35Y+C6KeB5q2k6aG16Z2i5Y+K5p2l5rqQ6aG16Z2i6K6w6L29Jztcblx0fVxuXG5cdGNvbnN0IHBhcmFtczogQXBpSW1wb3J0UGFyYW1zID0ge1xuXHRcdGFjdGlvbjogJ2ltcG9ydCcsXG5cdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0YXNzaWdua25vd251c2VyczogdHJ1ZSxcblx0XHRpbnRlcndpa2lwYWdlOiBwYWdlTmFtZSxcblx0XHRpbnRlcndpa2lwcmVmaXg6IGl3cHJlZml4LFxuXHRcdGludGVyd2lraXNvdXJjZTogaXdwcmVmaXgsXG5cdFx0c3VtbWFyeTogYO+8uyR7c3VtbWFyeX3vvL1gLFxuXHR9O1xuXHRjb25zdCByZXN1bHQgPSBhd2FpdCBhcGkucG9zdFdpdGhFZGl0VG9rZW4ocGFyYW1zKTtcblxuXHRpZiAocmVzdWx0WydpbXBvcnQnXSAmJiByZXN1bHRbJ2ltcG9ydCddWzBdICYmIHJlc3VsdFsnaW1wb3J0J10ucmV2aXNpb25zKSB7XG5cdFx0dG9hc3RpZnlJbnN0YW5jZS5oaWRlVG9hc3QoKTtcblx0XHR0b2FzdGlmeUluc3RhbmNlID0gdG9hc3RpZnkoXG5cdFx0XHR7XG5cdFx0XHRcdHRleHQ6IGDpobXpnaLlr7zlhaXlrozmiJDvvJoke3BhZ2VOYW1lfWAsXG5cdFx0XHRcdGR1cmF0aW9uOiAzICogMTAwMCxcblx0XHRcdH0sXG5cdFx0XHQnc3VjY2Vzcydcblx0XHQpO1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cblx0dG9hc3RpZnlJbnN0YW5jZS5oaWRlVG9hc3QoKTtcblx0dG9hc3RpZnlJbnN0YW5jZSA9IHRvYXN0aWZ5KFxuXHRcdHtcblx0XHRcdHRleHQ6IGDpobXpnaLlr7zlhaXlpLHotKXvvJoke2l3cHJlZml4fToke3BhZ2VOYW1lfWAsXG5cdFx0XHRkdXJhdGlvbjogMyAqIDEwMDAsXG5cdFx0fSxcblx0XHQnd2FybmluZydcblx0KTtcblx0cmV0dXJuIGZhbHNlO1xufTtcblxuY29uc3QgdXBsb2FkRmlsZSA9IGFzeW5jICh0YXJnZXQ6IHN0cmluZywgdXJsPzogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiA9PiB7XG5cdHRvYXN0aWZ5SW5zdGFuY2UuaGlkZVRvYXN0KCk7XG5cdHRvYXN0aWZ5SW5zdGFuY2UgPSB0b2FzdGlmeShcblx0XHR7XG5cdFx0XHR0ZXh0OiBg6L+B56e75paH5Lu25Lit77yaJHt0YXJnZXR9YCxcblx0XHRcdGR1cmF0aW9uOiAtMSxcblx0XHR9LFxuXHRcdCdpbmZvJ1xuXHQpO1xuXG5cdGNvbnN0IHBhcmFtczogQXBpVXBsb2FkUGFyYW1zID0ge1xuXHRcdHVybDogdXJsID8/IGBodHRwczovL3poLndpa2lwZWRpYS5vcmcvd2lraS9TcGVjaWFsOlJlZGlyZWN0L2ZpbGUvJHttdy51dGlsLnJhd3VybGVuY29kZSh0YXJnZXQpfWAsXG5cdFx0YWN0aW9uOiAndXBsb2FkJyxcblx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRmaWxlbmFtZTogdGFyZ2V0LFxuXHRcdGNvbW1lbnQ6ICfoh6rlhbbku5bnvZHnq5nov4Hnp7vmlofku7YnLFxuXHRcdGlnbm9yZXdhcm5pbmdzOiB0cnVlLFxuXHR9O1xuXHRhd2FpdCBhcGkucG9zdFdpdGhFZGl0VG9rZW4ocGFyYW1zKTtcblxuXHR0b2FzdGlmeUluc3RhbmNlLmhpZGVUb2FzdCgpO1xuXHR0b2FzdGlmeUluc3RhbmNlID0gdG9hc3RpZnkoXG5cdFx0e1xuXHRcdFx0dGV4dDogYOaWh+S7tui/geenu+WujOaIkO+8miR7dGFyZ2V0fWAsXG5cdFx0XHRkdXJhdGlvbjogMyAqIDEwMDAsXG5cdFx0fSxcblx0XHQnc3VjY2Vzcydcblx0KTtcbn07XG5cbmNvbnN0IHF1ZXJ5SW1hZ2VJbmZvID0gYXN5bmMgKHRpdGxlczogc3RyaW5nIHwgc3RyaW5nW10pID0+IHtcblx0Y29uc3QgcGFyYW1zOiBBcGlRdWVyeUluZm9QYXJhbXMgJiBBcGlRdWVyeUltYWdlSW5mb1BhcmFtcyA9IHtcblx0XHR0aXRsZXMsXG5cdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRwcm9wOiBbJ2ltYWdlaW5mbycsICdpbmZvJ10sXG5cdFx0aWlwcm9wOiBbJ3VybCddLFxuXHRcdHJlZGlyZWN0czogdHJ1ZSxcblx0fTtcblx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGkucG9zdChwYXJhbXMpO1xuXG5cdHJldHVybiByZXNwb25zZTtcbn07XG5cbmNvbnN0IGRldGVjdElmRmlsZVJlZGlyZWN0OiBEZXRlY3RJZkZpbGVSZWRpcmVjdCA9IGFzeW5jIChwYWdlTmFtZXMsIGlzRmlsZU5TID0gZmFsc2UpID0+IHtcblx0cGFnZU5hbWVzID0gZ2VuZXJhdGVBcnJheShwYWdlTmFtZXMpO1xuXHRjb25zdCBwcm9taXNlczogKCgpID0+IFByb21pc2U8dm9pZD4pW10gPSBbXTtcblxuXHRmb3IgKGxldCBpID0gMDsgaSA8IHBhZ2VOYW1lcy5sZW5ndGg7IGkrKykge1xuXHRcdGxldCB0aXRsZXMgPSBwYWdlTmFtZXMuc3BsaWNlKDAsIDUwKTtcblx0XHRpZiAoIXRpdGxlcy5sZW5ndGgpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdHByb21pc2VzW3Byb21pc2VzLmxlbmd0aF0gPSBhc3luYyAoKTogUHJvbWlzZTx2b2lkPiA9PiB7XG5cdFx0XHQvLyBSZWRpcmVjdCB0YXJnZXQocylcblx0XHRcdGNvbnN0IHRvczogc3RyaW5nW10gPSBbXTtcblxuXHRcdFx0Ly8gQW5hbHl6ZSBzdGVwIDE6IGltcG9ydCBwYWdlcyBpdHNlbGZcblx0XHRcdC8vLy8gUXVlcnlcblx0XHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcXVlcnlJbWFnZUluZm8odGl0bGVzKTtcblx0XHRcdGlmIChyZXNwb25zZVsncXVlcnknXSkge1xuXHRcdFx0XHQvLy8vIE5vcm1hbGl6ZVxuXHRcdFx0XHRpZiAocmVzcG9uc2VbJ3F1ZXJ5J10ubm9ybWFsaXplZCkge1xuXHRcdFx0XHRcdGZvciAoY29uc3Qge2Zyb20sIHRvfSBvZiByZXNwb25zZVsncXVlcnknXS5ub3JtYWxpemVkIGFzIHtmcm9tOiBzdHJpbmc7IHRvOiBzdHJpbmd9W10pIHtcblx0XHRcdFx0XHRcdHRpdGxlcyA9IHRpdGxlcy5tYXAoKGVsZW1lbnQpID0+IHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIGVsZW1lbnQgPT09IGZyb20gPyB0byA6IGVsZW1lbnQ7XG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLy8vIEltcG9ydFxuXHRcdFx0XHRpZiAocmVzcG9uc2VbJ3F1ZXJ5J10ucGFnZXMpIHtcblx0XHRcdFx0XHRmb3IgKGNvbnN0IHBhZ2UxIG9mIHJlc3BvbnNlWydxdWVyeSddLnBhZ2VzKSB7XG5cdFx0XHRcdFx0XHRjb25zdCB0aXRsZSA9IHBhZ2UxLnRpdGxlIGFzIHN0cmluZztcblxuXHRcdFx0XHRcdFx0aWYgKCFwYWdlMS5taXNzaW5nKSB7XG5cdFx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRsZXQgaWZJbXBvcnRTdWNjZXNzID0gZmFsc2U7XG5cdFx0XHRcdFx0XHRpZiAoaXNGaWxlTlMpIHtcblx0XHRcdFx0XHRcdFx0aWZJbXBvcnRTdWNjZXNzID0gYXdhaXQgaW1wb3J0UGFnZSh0aXRsZSwgJ2NvbW1vbnMnLCBpc0ZpbGVOUyk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRpZiAoIWlmSW1wb3J0U3VjY2Vzcykge1xuXHRcdFx0XHRcdFx0XHRhd2FpdCBpbXBvcnRQYWdlKHRpdGxlLCAnemh3aWtpJywgaXNGaWxlTlMpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vLy8gUHVzaCByZWRpcmVjdCB0YXJnZXRzIGludG8gYXJyYXlcblx0XHRcdFx0aWYgKHJlc3BvbnNlWydxdWVyeSddLnJlZGlyZWN0cykge1xuXHRcdFx0XHRcdGZvciAoY29uc3Qge3RvfSBvZiByZXNwb25zZVsncXVlcnknXS5yZWRpcmVjdHMgYXMge2Zyb206IHN0cmluZzsgdG86IHN0cmluZ31bXSkge1xuXHRcdFx0XHRcdFx0dG9zW3Rvcy5sZW5ndGhdID0gdG87XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC8vIEFuYWx5emUgc3RlcCAyOiBmb3IgZmlsZXMsIGNoZWNrIGlmIGl0IGlzIGEgcmVkaXJlY3Rcblx0XHRcdGlmIChpc0ZpbGVOUykge1xuXHRcdFx0XHQvLy8vIFF1ZXJ5XG5cdFx0XHRcdGNvbnN0IHJlc3BvbnNlMiA9IGF3YWl0IHF1ZXJ5SW1hZ2VJbmZvKHRpdGxlcyk7XG5cdFx0XHRcdGlmIChyZXNwb25zZTJbJ3F1ZXJ5J10pIHtcblx0XHRcdFx0XHQvLy8vIE5vcm1hbGl6ZVxuXHRcdFx0XHRcdGlmIChyZXNwb25zZTJbJ3F1ZXJ5J10ubm9ybWFsaXplZCkge1xuXHRcdFx0XHRcdFx0Zm9yIChjb25zdCB7ZnJvbSwgdG99IG9mIHJlc3BvbnNlMlsncXVlcnknXS5ub3JtYWxpemVkIGFzIHtmcm9tOiBzdHJpbmc7IHRvOiBzdHJpbmd9W10pIHtcblx0XHRcdFx0XHRcdFx0dGl0bGVzID0gdGl0bGVzLm1hcCgoZWxlbWVudCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdHJldHVybiBlbGVtZW50ID09PSBmcm9tID8gdG8gOiBlbGVtZW50O1xuXHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQvLy8vIHVwbG9hZFxuXHRcdFx0XHRcdGlmIChyZXNwb25zZTJbJ3F1ZXJ5J10ucGFnZXMpIHtcblx0XHRcdFx0XHRcdGZvciAoY29uc3QgcGFnZTIgb2YgcmVzcG9uc2UyWydxdWVyeSddLnBhZ2VzKSB7XG5cdFx0XHRcdFx0XHRcdGNvbnN0IHRpdGxlID0gcGFnZTIudGl0bGUgYXMgc3RyaW5nO1xuXG5cdFx0XHRcdFx0XHRcdGlmIChwYWdlMi5taXNzaW5nIHx8IHBhZ2UyLnJlZGlyZWN0KSB7XG5cdFx0XHRcdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRpZiAocGFnZTIuaW1hZ2VyZXBvc2l0b3J5ICYmIHBhZ2UyLmltYWdlcmVwb3NpdG9yeSAhPT0gJ2xvY2FsJykge1xuXHRcdFx0XHRcdFx0XHRcdGF3YWl0IHVwbG9hZEZpbGUodGl0bGUsIHBhZ2UyLmltYWdlaW5mb1swXS51cmwgYXMgc3RyaW5nKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGlmIChyZXNwb25zZTJbJ3F1ZXJ5J10ucmVkaXJlY3RzKSB7XG5cdFx0XHRcdFx0XHRmb3IgKGNvbnN0IHt0b30gb2YgcmVzcG9uc2UyWydxdWVyeSddLnJlZGlyZWN0cyBhcyB7ZnJvbTogc3RyaW5nOyB0bzogc3RyaW5nfVtdKSB7XG5cdFx0XHRcdFx0XHRcdHRvc1t0b3MubGVuZ3RoXSA9IHRvO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQvLyBBbmFseXplIHN0ZXAgMzogaW1wb3J0IHBhZ2VzIGFzIHJlZGlyZWN0IHRhcmdldFxuXHRcdFx0Ly8vLyBRdWV1ZSByZXF1ZXN0cyB0byBpbXBvcnQgcmVkaXJlY3QgdGFyZ2V0c1xuXHRcdFx0aWYgKHRvcy5sZW5ndGgpIHtcblx0XHRcdFx0YXdhaXQgZGV0ZWN0SWZGaWxlUmVkaXJlY3QodW5pcXVlQXJyYXkodG9zKSk7IC8vIFJlcGxhY2UgYFsuLi5uZXcgU2V0KCldYCB0byBhdm9pZCBwb2x5ZmlsbGluZyBjb3JlLWpzXG5cdFx0XHR9XG5cdFx0fTtcblx0fVxuXG5cdGZvciAoY29uc3QgcHJvbWlzZSBvZiBwcm9taXNlcykge1xuXHRcdHRyeSB7XG5cdFx0XHRhd2FpdCBwcm9taXNlKCk7XG5cdFx0fSBjYXRjaCB7fVxuXHR9XG59O1xuXG5leHBvcnQge3R5cGUgRGV0ZWN0SWZGaWxlUmVkaXJlY3QsIGRldGVjdElmRmlsZVJlZGlyZWN0LCB0eXBlIFJlZnJlc2hQYWdlLCByZWZyZXNoUGFnZX07XG4iLCAie1xuXHRcInZlcnNpb25cIjogXCIyLjBcIlxufVxuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7aW5pdE13QXBpfSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG5jb25zdCBhcGk6IG13LkFwaSA9IGluaXRNd0FwaShgUXVpY2tJbXBvcnQvJHtPUFRJT05TLnZlcnNpb259YCk7XG5cbmV4cG9ydCB7YXBpfTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLHNCQUFBLENBQUE7QUFBQUMsU0FBQUQscUJBQUE7RUFBQUUsS0FBQUEsTUFBQUE7RUFBQUMsc0JBQUFBLE1BQUFBO0VBQUFDLGFBQUFBLE1BQUFBO0FBQUEsQ0FBQTtBQUFBQyxPQUFBQyxVQUFBQyxhQUFBUCxtQkFBQTs7QUNBQSxJQUFBUSxxQkFBeUNDLFFBQUEsaUJBQUE7O0FDQ3hDLElBQUFDLFVBQVc7O0FDQVosSUFBQUMsb0JBQXdCRixRQUFBLGlCQUFBO0FBRXhCLElBQU1QLE9BQUEsR0FBY1Msa0JBQUFDLFdBQUEsZUFBQUMsT0FBaUNILE9BQU8sQ0FBRTs7QUZEOUQsSUFBQUkscUJBQXVCTCxRQUFBLHFCQUFBO0FBS3ZCLElBQUlNLG1CQUFxQztFQUN4Q0MsV0FB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QUNILFNBQVNJLGNBQWMsbUJBQW1CO0FBQ2hGLFFBQU0vRixXQUFtQjBGLG9CQUFvQmhELFNBQVMsV0FBVztBQUVqRSxRQUFNc0QsUUFBZ0IvRixZQUFZLENBQUM2RixxQkFBcUI5RixXQUFXO0FBQ25FLFFBQU1pRyxjQUFzQmhHLFdBQ3pCK0YsUUFBQSxNQUFBbEgsT0FDT2tILE9BQUssR0FBQSxJQUNYLE9BQ0RILGNBQWNuRCxTQUNiLFVBQ0E7QUFFSixNQUFLNkMsYUFBYSxtQkFBbUJ0RixZQUFhb0Ysb0JBQW9CLEdBQUc7QUFDeEU7RUFDRDtBQUVBLFFBQU1hLFlBQW1DUCxTQUFTSSxjQUFjLGFBQWEsSUFBSSxlQUFlO0FBQ2hHLFFBQU12QyxVQUFnQ2hFLEdBQUdDLEtBQUswRyxlQUFlRCxXQUFXLEtBQUEsS0FBQXBILE9BQVVtSCxXQUFXLEdBQUksVUFBVTtBQUMzRyxNQUFJLENBQUN6QyxTQUFTO0FBQ2I7RUFDRDtBQUVBQSxVQUFRNEMsaUJBQWlCLFNBQVMsTUFBWTtBQUM3QyxTQUFBdEcsa0JBQU0sYUFBWTtBQUFBLFVBQUF1RztBQUNqQixZQUFNdEcsYUFBbUJzRyxrQkFBQVIsY0FBYyxDQUFDLE9BQUEsUUFBQVEsb0JBQUEsU0FBQSxTQUFmQSxnQkFBa0JDLGdCQUFlaEI7QUFDMUQsWUFBTWxILHFCQUFxQjJCLFVBQVVFLFFBQVE7SUFDOUMsQ0FBQSxFQUFHLEVBQUVzRyxLQUFLLE1BQU07QUFDZmxJLGtCQUFZaUgsVUFBVTtJQUN2QixDQUFDO0VBQ0YsQ0FBQztBQUNGLEdBQUc7IiwKICAibmFtZXMiOiBbIlF1aWNrSW1wb3J0X2V4cG9ydHMiLCAiX19leHBvcnQiLCAiYXBpIiwgImRldGVjdElmRmlsZVJlZGlyZWN0IiwgInJlZnJlc2hQYWdlIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIl9fdG9Db21tb25KUyIsICJpbXBvcnRfZXh0X2dhZGdldDIiLCAicmVxdWlyZSIsICJ2ZXJzaW9uIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgImluaXRNd0FwaSIsICJjb25jYXQiLCAiaW1wb3J0X2V4dF9nYWRnZXQzIiwgInRvYXN0aWZ5SW5zdGFuY2UiLCAiaGlkZVRvYXN0IiwgInRpdGxlIiwgInRvYXN0aWZ5IiwgInRleHQiLCAiZHVyYXRpb24iLCAibG9jYXRpb24iLCAicmVwbGFjZSIsICJtdyIsICJ1dGlsIiwgImdldFVybCIsICJyZWxvYWQiLCAiaW1wb3J0UGFnZSIsICJfcmVmIiwgIl9hc3luY1RvR2VuZXJhdG9yIiwgInBhZ2VOYW1lIiwgIml3cHJlZml4IiwgImlzRmlsZU5TIiwgInN1bW1hcnkiLCAicGFyYW1zIiwgImFjdGlvbiIsICJmb3JtYXQiLCAiYXNzaWdua25vd251c2VycyIsICJpbnRlcndpa2lwYWdlIiwgImludGVyd2lraXByZWZpeCIsICJpbnRlcndpa2lzb3VyY2UiLCAicmVzdWx0IiwgInBvc3RXaXRoRWRpdFRva2VuIiwgInJldmlzaW9ucyIsICJfeCIsICJfeDIiLCAiYXBwbHkiLCAiYXJndW1lbnRzIiwgInVwbG9hZEZpbGUiLCAiX3JlZjIiLCAidGFyZ2V0IiwgInVybCIsICJyYXd1cmxlbmNvZGUiLCAiZmlsZW5hbWUiLCAiY29tbWVudCIsICJpZ25vcmV3YXJuaW5ncyIsICJfeDMiLCAiX3g0IiwgInF1ZXJ5SW1hZ2VJbmZvIiwgIl9yZWYzIiwgInRpdGxlcyIsICJmb3JtYXR2ZXJzaW9uIiwgInByb3AiLCAiaWlwcm9wIiwgInJlZGlyZWN0cyIsICJyZXNwb25zZSIsICJwb3N0IiwgIl94NSIsICJfcmVmNCIsICJwYWdlTmFtZXMiLCAiZ2VuZXJhdGVBcnJheSIsICJwcm9taXNlcyIsICJpIiwgImxlbmd0aCIsICJzcGxpY2UiLCAidG9zIiwgIm5vcm1hbGl6ZWQiLCAiX2l0ZXJhdG9yMiIsICJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsICJfc3RlcDIiLCAicyIsICJuIiwgImRvbmUiLCAiZnJvbSIsICJ0byIsICJ2YWx1ZSIsICJtYXAiLCAiZWxlbWVudCIsICJlcnIiLCAiZSIsICJmIiwgInBhZ2VzIiwgIl9pdGVyYXRvcjMiLCAiX3N0ZXAzIiwgInBhZ2UxIiwgIm1pc3NpbmciLCAiaWZJbXBvcnRTdWNjZXNzIiwgIl9pdGVyYXRvcjQiLCAiX3N0ZXA0IiwgInJlc3BvbnNlMiIsICJfaXRlcmF0b3I1IiwgIl9zdGVwNSIsICJfaXRlcmF0b3I2IiwgIl9zdGVwNiIsICJwYWdlMiIsICJyZWRpcmVjdCIsICJpbWFnZXJlcG9zaXRvcnkiLCAiaW1hZ2VpbmZvIiwgIl9pdGVyYXRvcjciLCAiX3N0ZXA3IiwgInVuaXF1ZUFycmF5IiwgIl9pIiwgIl9wcm9taXNlcyIsICJwcm9taXNlIiwgIl94NiIsICJxdWlja0ltcG9ydCIsICJ3Z05hbWVzcGFjZU51bWJlciIsICJ3Z1BhZ2VOYW1lIiwgIndnV2lraUlEIiwgImNvbmZpZyIsICJnZXQiLCAiY2FWaWV3Rm9yZWlnblpod2lraSIsICJkb2N1bWVudCIsICJxdWVyeVNlbGVjdG9yQWxsIiwgInJlZGlyZWN0VGV4dEEiLCAiaGFzTXdOb2FydGljbGV0ZXh0IiwgInF1ZXJ5U2VsZWN0b3IiLCAibGFiZWwiLCAiYnV0dG9uTGFiZWwiLCAicG9ydGxldElkIiwgImFkZFBvcnRsZXRMaW5rIiwgImFkZEV2ZW50TGlzdGVuZXIiLCAiX3JlZGlyZWN0VGV4dEEkIiwgInRleHRDb250ZW50IiwgInRoZW4iXQp9Cg==

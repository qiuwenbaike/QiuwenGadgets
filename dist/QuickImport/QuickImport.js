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
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, {
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
//! src/QuickImport/options.json
var version = "2.0";
//! src/QuickImport/modules/api.ts
var import_ext_gadget = require("ext.gadget.Util");
var api = (0, import_ext_gadget.initMwApi)("QuickImport/".concat(version));
//! src/QuickImport/modules/core.ts
var import_ext_gadget2 = require("ext.gadget.Util");
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
  location.replace(mw.util.getUrl(title));
};
var importPage = /* @__PURE__ */ function() {
  var _ref = _asyncToGenerator(function* (pageName, iwprefix, isFileNS = false) {
    toastifyInstance.hideToast();
    toastifyInstance = (0, import_ext_gadget3.toastify)({
      text: "导入页面中：".concat(pageName),
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
    yield api.postWithEditToken(params);
    toastifyInstance.hideToast();
    toastifyInstance = (0, import_ext_gadget3.toastify)({
      text: "页面导入完成：".concat(pageName),
      duration: -1
    }, "success");
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
    const uploadParams = {
      url: url !== null && url !== void 0 ? url : "https://zh.wikipedia.org/wiki/Special:Redirect/file/".concat(mw.util.rawurlencode(target)),
      action: "upload",
      format: "json",
      filename: target,
      comment: "自其他网站迁移文件",
      ignorewarnings: true
    };
    yield api.postWithEditToken(uploadParams);
    toastifyInstance.hideToast();
    toastifyInstance = (0, import_ext_gadget3.toastify)({
      text: "文件迁移完成：".concat(target),
      duration: -1
    }, "success");
  });
  return function uploadFile2(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
var queryImageInfo = /* @__PURE__ */ function() {
  var _ref3 = _asyncToGenerator(function* (titles) {
    const queryParams = {
      action: "query",
      format: "json",
      formatversion: "2",
      prop: ["imageinfo", "info"],
      iiprop: ["url"],
      titles,
      redirects: true
    };
    const response = yield api.post(queryParams);
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
    const tos = [];
    for (let i = 0; i < (pageNames.length + 50) / 50; i++) {
      promises[promises.length] = /* @__PURE__ */ _asyncToGenerator(function* () {
        let titles = pageNames.slice(i * 50, (i + 1) * 50);
        if (pageNames.length === 0) {
          return;
        }
        const response = yield queryImageInfo(titles);
        if (!response["query"]) {
          return;
        }
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
        var _iterator3 = _createForOfIteratorHelper(response["query"].pages), _step3;
        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
            const page1 = _step3.value;
            const title = page1.title;
            if (!page1.missing) {
              continue;
            }
            if (isFileNS) {
              yield importPage(title, "commons", isFileNS);
            }
            yield importPage(title, "zhwiki", isFileNS);
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
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
        if (isFileNS) {
          const response2 = yield queryImageInfo(titles);
          if (!response2["query"]) {
            return;
          }
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
        yield detectIfFileRedirect(tos);
      });
    }
    for (var _i = 0, _promises = promises; _i < _promises.length; _i++) {
      const promise = _promises[_i];
      yield promise();
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
  const iwprefix = caViewForeignZhwiki.length > 0 ? "zhwiki" : "commons";
  const label = isFileNS && !hasMwNoarticletext ? iwprefix : "";
  const buttonLabel = isFileNS ? label ? "文件（".concat(label, "）") : "页面" : redirectTextA.length > 0 ? "重定向目标" : "页面";
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1F1aWNrSW1wb3J0L1F1aWNrSW1wb3J0LnRzIiwgInNyYy9RdWlja0ltcG9ydC9vcHRpb25zLmpzb24iLCAic3JjL1F1aWNrSW1wb3J0L21vZHVsZXMvYXBpLnRzIiwgInNyYy9RdWlja0ltcG9ydC9tb2R1bGVzL2NvcmUudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7ZGV0ZWN0SWZGaWxlUmVkaXJlY3QsIHJlZnJlc2hQYWdlfSBmcm9tICcuL21vZHVsZXMvY29yZSc7XG5cbihmdW5jdGlvbiBxdWlja0ltcG9ydCgpOiB2b2lkIHtcblx0Y29uc3Qge3dnTmFtZXNwYWNlTnVtYmVyLCB3Z1BhZ2VOYW1lLCB3Z1dpa2lJRH0gPSBtdy5jb25maWcuZ2V0KCk7XG5cblx0Y29uc3QgY2FWaWV3Rm9yZWlnblpod2lraSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIjY2Etdmlldy1mb3JlaWduIGFbaHJlZio9J3poLndpa2lwZWRpYS5vcmcnXVwiKTtcblx0Y29uc3QgcmVkaXJlY3RUZXh0QSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5yZWRpcmVjdFRleHQgYScpO1xuXG5cdGNvbnN0IGlzRmlsZU5TOiBib29sZWFuID0gd2dOYW1lc3BhY2VOdW1iZXIgPT09IDY7XG5cdGNvbnN0IGhhc013Tm9hcnRpY2xldGV4dDogYm9vbGVhbiA9ICEhZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI213LW5vYXJ0aWNsZXRleHQnKTtcblx0Y29uc3QgaXdwcmVmaXg6IHN0cmluZyA9IGNhVmlld0ZvcmVpZ25aaHdpa2kubGVuZ3RoID4gMCA/ICd6aHdpa2knIDogJ2NvbW1vbnMnO1xuXG5cdGNvbnN0IGxhYmVsOiBzdHJpbmcgPSBpc0ZpbGVOUyAmJiAhaGFzTXdOb2FydGljbGV0ZXh0ID8gaXdwcmVmaXggOiAnJztcblx0Y29uc3QgYnV0dG9uTGFiZWw6IHN0cmluZyA9IGlzRmlsZU5TXG5cdFx0PyBsYWJlbFxuXHRcdFx0PyBg5paH5Lu277yIJHtsYWJlbH3vvIlgXG5cdFx0XHQ6ICfpobXpnaInXG5cdFx0OiByZWRpcmVjdFRleHRBLmxlbmd0aCA+IDBcblx0XHRcdD8gJ+mHjeWumuWQkeebruaghydcblx0XHRcdDogJ+mhtemdoic7XG5cblx0aWYgKCh3Z1dpa2lJRCAhPT0gJ3pocWl1d2VuYmFpa2UnICYmIGlzRmlsZU5TKSB8fCB3Z05hbWVzcGFjZU51bWJlciA8IDApIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBwb3J0bGV0SWQ6ICdwLWNhY3Rpb25zJyB8ICdwLXRiJyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwLWNhY3Rpb25zJykgPyAncC1jYWN0aW9ucycgOiAncC10Yic7XG5cdGNvbnN0IGVsZW1lbnQ6IEhUTUxMSUVsZW1lbnQgfCBudWxsID0gbXcudXRpbC5hZGRQb3J0bGV0TGluayhwb3J0bGV0SWQsICcjJywgYOWvvOWFpSR7YnV0dG9uTGFiZWx9YCwgJ3QtaW1wb3J0Jyk7XG5cdGlmICghZWxlbWVudCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKTogdm9pZCA9PiB7XG5cdFx0dm9pZCAoYXN5bmMgKCkgPT4ge1xuXHRcdFx0Y29uc3QgcGFnZU5hbWU6IHN0cmluZyA9IHJlZGlyZWN0VGV4dEFbMF0/LnRleHRDb250ZW50IHx8IHdnUGFnZU5hbWU7XG5cdFx0XHRhd2FpdCBkZXRlY3RJZkZpbGVSZWRpcmVjdChwYWdlTmFtZSwgaXNGaWxlTlMpO1xuXHRcdH0pKCkudGhlbigoKSA9PiB7XG5cdFx0XHRyZWZyZXNoUGFnZSh3Z1BhZ2VOYW1lKTtcblx0XHR9KTtcblx0fSk7XG59KSgpO1xuXG5leHBvcnQge2FwaX0gZnJvbSAnLi9tb2R1bGVzL2FwaSc7XG5leHBvcnQge2RldGVjdElmRmlsZVJlZGlyZWN0LCByZWZyZXNoUGFnZX0gZnJvbSAnLi9tb2R1bGVzL2NvcmUnO1xuIiwgIntcblx0XCJ2ZXJzaW9uXCI6IFwiMi4wXCJcbn1cbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge2luaXRNd0FwaX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxuY29uc3QgYXBpOiBtdy5BcGkgPSBpbml0TXdBcGkoYFF1aWNrSW1wb3J0LyR7T1BUSU9OUy52ZXJzaW9ufWApO1xuXG5leHBvcnQge2FwaX07XG4iLCAiaW1wb3J0IHthcGl9IGZyb20gJy4vYXBpJztcbmltcG9ydCB7Z2VuZXJhdGVBcnJheX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbmltcG9ydCB7dG9hc3RpZnl9IGZyb20gJ2V4dC5nYWRnZXQuVG9hc3RpZnknO1xuXG50eXBlIERldGVjdElmRmlsZVJlZGlyZWN0ID0gKHBhZ2VOYW1lczogc3RyaW5nIHwgc3RyaW5nW10sIGlzRmlsZU5TPzogYm9vbGVhbikgPT4gUHJvbWlzZTx2b2lkPjtcbnR5cGUgUmVmcmVzaFBhZ2UgPSAodGl0bGU6IHN0cmluZykgPT4gdm9pZDtcblxubGV0IHRvYXN0aWZ5SW5zdGFuY2U6IFRvYXN0aWZ5SW5zdGFuY2UgPSB7XG5cdGhpZGVUb2FzdDogKCkgPT4ge30sXG59O1xuXG5jb25zdCByZWZyZXNoUGFnZTogUmVmcmVzaFBhZ2UgPSAodGl0bGUpID0+IHtcblx0dG9hc3RpZnlJbnN0YW5jZS5oaWRlVG9hc3QoKTtcblx0dG9hc3RpZnkoXG5cdFx0e1xuXHRcdFx0dGV4dDogJ+ato+WcqOWIt+aWsOmhtemdoicsXG5cdFx0XHRkdXJhdGlvbjogLTEsXG5cdFx0fSxcblx0XHQnaW5mbydcblx0KTtcblxuXHRsb2NhdGlvbi5yZXBsYWNlKG13LnV0aWwuZ2V0VXJsKHRpdGxlKSk7XG59O1xuXG5jb25zdCBpbXBvcnRQYWdlID0gYXN5bmMgKHBhZ2VOYW1lOiBzdHJpbmcsIGl3cHJlZml4OiBzdHJpbmcsIGlzRmlsZU5TOiBib29sZWFuID0gZmFsc2UpOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0dG9hc3RpZnlJbnN0YW5jZS5oaWRlVG9hc3QoKTtcblx0dG9hc3RpZnlJbnN0YW5jZSA9IHRvYXN0aWZ5KFxuXHRcdHtcblx0XHRcdHRleHQ6IGDlr7zlhaXpobXpnaLkuK3vvJoke3BhZ2VOYW1lfWAsXG5cdFx0XHRkdXJhdGlvbjogLTEsXG5cdFx0fSxcblx0XHQnaW5mbydcblx0KTtcblxuXHRsZXQgc3VtbWFyeTogc3RyaW5nID0gJ+mhtemdouaWh+Wtl+WOn+iuuOWPr++8mltbY2MtYnktc2E6NC4wfENDIEJZLVNBIDQuMF1d77yb5L2c6ICF6K+35Y+C6KeB5p2l5rqQ6aG16Z2i5Y6G5Y+yJztcblx0aWYgKGlzRmlsZU5TKSB7XG5cdFx0c3VtbWFyeSArPSAn77yb5paH5Lu25L2c6ICF6K+35Y+C6KeB5q2k6aG16Z2i5Y+K5p2l5rqQ6aG16Z2i6K6w6L29Jztcblx0fVxuXG5cdGNvbnN0IHBhcmFtczogQXBpSW1wb3J0UGFyYW1zID0ge1xuXHRcdGFjdGlvbjogJ2ltcG9ydCcsXG5cdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0YXNzaWdua25vd251c2VyczogdHJ1ZSxcblx0XHRpbnRlcndpa2lwYWdlOiBwYWdlTmFtZSxcblx0XHRpbnRlcndpa2lwcmVmaXg6IGl3cHJlZml4LFxuXHRcdGludGVyd2lraXNvdXJjZTogaXdwcmVmaXggYXMgTm9uTnVsbGFibGU8QXBpSW1wb3J0UGFyYW1zWydpbnRlcndpa2lzb3VyY2UnXT4sXG5cdFx0c3VtbWFyeTogYO+8uyR7c3VtbWFyeX3vvL1gLFxuXHR9O1xuXHRhd2FpdCBhcGkucG9zdFdpdGhFZGl0VG9rZW4ocGFyYW1zKTtcblxuXHR0b2FzdGlmeUluc3RhbmNlLmhpZGVUb2FzdCgpO1xuXHR0b2FzdGlmeUluc3RhbmNlID0gdG9hc3RpZnkoXG5cdFx0e1xuXHRcdFx0dGV4dDogYOmhtemdouWvvOWFpeWujOaIkO+8miR7cGFnZU5hbWV9YCxcblx0XHRcdGR1cmF0aW9uOiAtMSxcblx0XHR9LFxuXHRcdCdzdWNjZXNzJ1xuXHQpO1xufTtcblxuY29uc3QgdXBsb2FkRmlsZSA9IGFzeW5jICh0YXJnZXQ6IHN0cmluZywgdXJsPzogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiA9PiB7XG5cdHRvYXN0aWZ5SW5zdGFuY2UuaGlkZVRvYXN0KCk7XG5cdHRvYXN0aWZ5SW5zdGFuY2UgPSB0b2FzdGlmeShcblx0XHR7XG5cdFx0XHR0ZXh0OiBg6L+B56e75paH5Lu25Lit77yaJHt0YXJnZXR9YCxcblx0XHRcdGR1cmF0aW9uOiAtMSxcblx0XHR9LFxuXHRcdCdpbmZvJ1xuXHQpO1xuXG5cdGNvbnN0IHVwbG9hZFBhcmFtczogQXBpVXBsb2FkUGFyYW1zID0ge1xuXHRcdHVybDogdXJsID8/IGBodHRwczovL3poLndpa2lwZWRpYS5vcmcvd2lraS9TcGVjaWFsOlJlZGlyZWN0L2ZpbGUvJHttdy51dGlsLnJhd3VybGVuY29kZSh0YXJnZXQpfWAsXG5cdFx0YWN0aW9uOiAndXBsb2FkJyxcblx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRmaWxlbmFtZTogdGFyZ2V0LFxuXHRcdGNvbW1lbnQ6ICfoh6rlhbbku5bnvZHnq5nov4Hnp7vmlofku7YnLFxuXHRcdGlnbm9yZXdhcm5pbmdzOiB0cnVlLFxuXHR9O1xuXHRhd2FpdCBhcGkucG9zdFdpdGhFZGl0VG9rZW4odXBsb2FkUGFyYW1zKTtcblxuXHR0b2FzdGlmeUluc3RhbmNlLmhpZGVUb2FzdCgpO1xuXHR0b2FzdGlmeUluc3RhbmNlID0gdG9hc3RpZnkoXG5cdFx0e1xuXHRcdFx0dGV4dDogYOaWh+S7tui/geenu+WujOaIkO+8miR7dGFyZ2V0fWAsXG5cdFx0XHRkdXJhdGlvbjogLTEsXG5cdFx0fSxcblx0XHQnc3VjY2Vzcydcblx0KTtcbn07XG5cbmNvbnN0IHF1ZXJ5SW1hZ2VJbmZvID0gYXN5bmMgKHRpdGxlczogc3RyaW5nIHwgc3RyaW5nW10pID0+IHtcblx0Y29uc3QgcXVlcnlQYXJhbXM6IEFwaVF1ZXJ5SW5mb1BhcmFtcyAmIEFwaVF1ZXJ5SW1hZ2VJbmZvUGFyYW1zID0ge1xuXHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0cHJvcDogWydpbWFnZWluZm8nLCAnaW5mbyddLFxuXHRcdGlpcHJvcDogWyd1cmwnXSxcblx0XHR0aXRsZXMsXG5cdFx0cmVkaXJlY3RzOiB0cnVlLFxuXHR9O1xuXHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGFwaS5wb3N0KHF1ZXJ5UGFyYW1zKTtcblxuXHRyZXR1cm4gcmVzcG9uc2U7XG59O1xuXG5jb25zdCBkZXRlY3RJZkZpbGVSZWRpcmVjdDogRGV0ZWN0SWZGaWxlUmVkaXJlY3QgPSBhc3luYyAocGFnZU5hbWVzLCBpc0ZpbGVOUyA9IGZhbHNlKSA9PiB7XG5cdHBhZ2VOYW1lcyA9IGdlbmVyYXRlQXJyYXkocGFnZU5hbWVzKTtcblx0Y29uc3QgcHJvbWlzZXM6ICgoKSA9PiBQcm9taXNlPHZvaWQ+KVtdID0gW107XG5cdGNvbnN0IHRvczogc3RyaW5nW10gPSBbXTtcblxuXHRmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgKHBhZ2VOYW1lcy5sZW5ndGggKyA1MCkgLyA1MDsgaSsrKSB7XG5cdFx0cHJvbWlzZXNbcHJvbWlzZXMubGVuZ3RoXSA9IGFzeW5jICgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0XHRcdGxldCB0aXRsZXMgPSBwYWdlTmFtZXMuc2xpY2UoaSAqIDUwLCAoaSArIDEpICogNTApO1xuXHRcdFx0aWYgKHBhZ2VOYW1lcy5sZW5ndGggPT09IDApIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBBbmFseXplIHN0ZXAgMTogaW1wb3J0IHBhZ2VzIGl0c2VsZlxuXHRcdFx0Ly8vLyBRdWVyeVxuXHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBxdWVyeUltYWdlSW5mbyh0aXRsZXMpO1xuXHRcdFx0aWYgKCFyZXNwb25zZVsncXVlcnknXSkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdC8vLy8gTm9ybWFsaXplXG5cdFx0XHRpZiAocmVzcG9uc2VbJ3F1ZXJ5J10ubm9ybWFsaXplZCkge1xuXHRcdFx0XHRmb3IgKGNvbnN0IHtmcm9tLCB0b30gb2YgcmVzcG9uc2VbJ3F1ZXJ5J10ubm9ybWFsaXplZCBhcyB7ZnJvbTogc3RyaW5nOyB0bzogc3RyaW5nfVtdKSB7XG5cdFx0XHRcdFx0dGl0bGVzID0gdGl0bGVzLm1hcCgoZWxlbWVudCkgPT4ge1xuXHRcdFx0XHRcdFx0cmV0dXJuIGVsZW1lbnQgPT09IGZyb20gPyB0byA6IGVsZW1lbnQ7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Ly8vLyBJbXBvcnRcblx0XHRcdGZvciAoY29uc3QgcGFnZTEgb2YgcmVzcG9uc2VbJ3F1ZXJ5J10ucGFnZXMpIHtcblx0XHRcdFx0Y29uc3QgdGl0bGUgPSBwYWdlMS50aXRsZSBhcyBzdHJpbmc7XG5cblx0XHRcdFx0aWYgKCFwYWdlMS5taXNzaW5nKSB7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoaXNGaWxlTlMpIHtcblx0XHRcdFx0XHRhd2FpdCBpbXBvcnRQYWdlKHRpdGxlLCAnY29tbW9ucycsIGlzRmlsZU5TKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRhd2FpdCBpbXBvcnRQYWdlKHRpdGxlLCAnemh3aWtpJywgaXNGaWxlTlMpO1xuXHRcdFx0fVxuXG5cdFx0XHQvLy8vIFB1c2ggcmVkaXJlY3QgdGFyZ2V0cyBpbnRvIGFycmF5XG5cdFx0XHRpZiAocmVzcG9uc2VbJ3F1ZXJ5J10ucmVkaXJlY3RzKSB7XG5cdFx0XHRcdGZvciAoY29uc3Qge3RvfSBvZiByZXNwb25zZVsncXVlcnknXS5yZWRpcmVjdHMgYXMge2Zyb206IHN0cmluZzsgdG86IHN0cmluZ31bXSkge1xuXHRcdFx0XHRcdHRvc1t0b3MubGVuZ3RoXSA9IHRvO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC8vIEFuYWx5emUgc3RlcCAyOiBmb3IgZmlsZXMsIGNoZWNrIGlmIGl0IGlzIGEgcmVkaXJlY3Rcblx0XHRcdGlmIChpc0ZpbGVOUykge1xuXHRcdFx0XHQvLy8vIFF1ZXJ5XG5cdFx0XHRcdGNvbnN0IHJlc3BvbnNlMiA9IGF3YWl0IHF1ZXJ5SW1hZ2VJbmZvKHRpdGxlcyk7XG5cdFx0XHRcdGlmICghcmVzcG9uc2UyWydxdWVyeSddKSB7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8vLyBOb3JtYWxpemVcblx0XHRcdFx0aWYgKHJlc3BvbnNlMlsncXVlcnknXS5ub3JtYWxpemVkKSB7XG5cdFx0XHRcdFx0Zm9yIChjb25zdCB7ZnJvbSwgdG99IG9mIHJlc3BvbnNlMlsncXVlcnknXS5ub3JtYWxpemVkIGFzIHtmcm9tOiBzdHJpbmc7IHRvOiBzdHJpbmd9W10pIHtcblx0XHRcdFx0XHRcdHRpdGxlcyA9IHRpdGxlcy5tYXAoKGVsZW1lbnQpID0+IHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIGVsZW1lbnQgPT09IGZyb20gPyB0byA6IGVsZW1lbnQ7XG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLy8vIHVwbG9hZFxuXHRcdFx0XHRmb3IgKGNvbnN0IHBhZ2UyIG9mIHJlc3BvbnNlMlsncXVlcnknXS5wYWdlcykge1xuXHRcdFx0XHRcdGNvbnN0IHRpdGxlID0gcGFnZTIudGl0bGUgYXMgc3RyaW5nO1xuXG5cdFx0XHRcdFx0aWYgKHBhZ2UyLm1pc3NpbmcgfHwgcGFnZTIucmVkaXJlY3QpIHtcblx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGlmIChwYWdlMi5pbWFnZXJlcG9zaXRvcnkgJiYgcGFnZTIuaW1hZ2VyZXBvc2l0b3J5ICE9PSAnbG9jYWwnKSB7XG5cdFx0XHRcdFx0XHRhd2FpdCB1cGxvYWRGaWxlKHRpdGxlLCBwYWdlMi5pbWFnZWluZm9bMF0udXJsIGFzIHN0cmluZyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKHJlc3BvbnNlMlsncXVlcnknXS5yZWRpcmVjdHMpIHtcblx0XHRcdFx0XHRmb3IgKGNvbnN0IHt0b30gb2YgcmVzcG9uc2UyWydxdWVyeSddLnJlZGlyZWN0cyBhcyB7ZnJvbTogc3RyaW5nOyB0bzogc3RyaW5nfVtdKSB7XG5cdFx0XHRcdFx0XHR0b3NbdG9zLmxlbmd0aF0gPSB0bztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Ly8gQW5hbHl6ZSBzdGVwIDM6IGltcG9ydCBwYWdlcyBhcyByZWRpcmVjdCB0YXJnZXRcblx0XHRcdC8vLy8gUXVldWUgcmVxdWVzdHMgdG8gaW1wb3J0IHJlZGlyZWN0IHRhcmdldHNcblx0XHRcdGF3YWl0IGRldGVjdElmRmlsZVJlZGlyZWN0KHRvcyk7XG5cdFx0fTtcblx0fVxuXG5cdGZvciAoY29uc3QgcHJvbWlzZSBvZiBwcm9taXNlcykge1xuXHRcdGF3YWl0IHByb21pc2UoKTtcblx0fVxufTtcblxuZXhwb3J0IHt0eXBlIERldGVjdElmRmlsZVJlZGlyZWN0LCBkZXRlY3RJZkZpbGVSZWRpcmVjdCwgdHlwZSBSZWZyZXNoUGFnZSwgcmVmcmVzaFBhZ2V9O1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLHNCQUFBLENBQUE7QUFBQUMsU0FBQUQscUJBQUE7RUFBQUUsS0FBQUEsTUFBQUE7RUFBQUMsc0JBQUFBLE1BQUFBO0VBQUFDLGFBQUFBLE1BQUFBO0FBQUEsQ0FBQTtBQUFBQyxPQUFBQyxVQUFBQyxhQUFBUCxtQkFBQTs7QUNDQyxJQUFBUSxVQUFXOztBQ0FaLElBQUFDLG9CQUF3QkMsUUFBQSxpQkFBQTtBQUV4QixJQUFNUixPQUFBLEdBQWNPLGtCQUFBRSxXQUFB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O0VBQ0Q7QUFFQUEsVUFBUTBDLGlCQUFpQixTQUFTLE1BQVk7QUFDN0MsU0FBQXBHLGtCQUFNLGFBQVk7QUFBQSxVQUFBcUc7QUFDakIsWUFBTXBHLGFBQW1Cb0csa0JBQUFSLGNBQWMsQ0FBQyxPQUFBLFFBQUFRLG9CQUFBLFNBQUEsU0FBZkEsZ0JBQWtCQyxnQkFBZWhCO0FBQzFELFlBQU0vRyxxQkFBcUIwQixVQUFVRSxRQUFRO0lBQzlDLENBQUEsRUFBRyxFQUFFb0csS0FBSyxNQUFNO0FBQ2YvSCxrQkFBWThHLFVBQVU7SUFDdkIsQ0FBQztFQUNGLENBQUM7QUFDRixHQUFHOyIsCiAgIm5hbWVzIjogWyJRdWlja0ltcG9ydF9leHBvcnRzIiwgIl9fZXhwb3J0IiwgImFwaSIsICJkZXRlY3RJZkZpbGVSZWRpcmVjdCIsICJyZWZyZXNoUGFnZSIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJfX3RvQ29tbW9uSlMiLCAidmVyc2lvbiIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJyZXF1aXJlIiwgImluaXRNd0FwaSIsICJjb25jYXQiLCAiaW1wb3J0X2V4dF9nYWRnZXQyIiwgImltcG9ydF9leHRfZ2FkZ2V0MyIsICJ0b2FzdGlmeUluc3RhbmNlIiwgImhpZGVUb2FzdCIsICJ0aXRsZSIsICJ0b2FzdGlmeSIsICJ0ZXh0IiwgImR1cmF0aW9uIiwgImxvY2F0aW9uIiwgInJlcGxhY2UiLCAibXciLCAidXRpbCIsICJnZXRVcmwiLCAiaW1wb3J0UGFnZSIsICJfcmVmIiwgIl9hc3luY1RvR2VuZXJhdG9yIiwgInBhZ2VOYW1lIiwgIml3cHJlZml4IiwgImlzRmlsZU5TIiwgInN1bW1hcnkiLCAicGFyYW1zIiwgImFjdGlvbiIsICJmb3JtYXQiLCAiYXNzaWdua25vd251c2VycyIsICJpbnRlcndpa2lwYWdlIiwgImludGVyd2lraXByZWZpeCIsICJpbnRlcndpa2lzb3VyY2UiLCAicG9zdFdpdGhFZGl0VG9rZW4iLCAiX3giLCAiX3gyIiwgImFwcGx5IiwgImFyZ3VtZW50cyIsICJ1cGxvYWRGaWxlIiwgIl9yZWYyIiwgInRhcmdldCIsICJ1cmwiLCAidXBsb2FkUGFyYW1zIiwgInJhd3VybGVuY29kZSIsICJmaWxlbmFtZSIsICJjb21tZW50IiwgImlnbm9yZXdhcm5pbmdzIiwgIl94MyIsICJfeDQiLCAicXVlcnlJbWFnZUluZm8iLCAiX3JlZjMiLCAidGl0bGVzIiwgInF1ZXJ5UGFyYW1zIiwgImZvcm1hdHZlcnNpb24iLCAicHJvcCIsICJpaXByb3AiLCAicmVkaXJlY3RzIiwgInJlc3BvbnNlIiwgInBvc3QiLCAiX3g1IiwgIl9yZWY0IiwgInBhZ2VOYW1lcyIsICJnZW5lcmF0ZUFycmF5IiwgInByb21pc2VzIiwgInRvcyIsICJpIiwgImxlbmd0aCIsICJzbGljZSIsICJub3JtYWxpemVkIiwgIl9pdGVyYXRvcjIiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAiX3N0ZXAyIiwgInMiLCAibiIsICJkb25lIiwgImZyb20iLCAidG8iLCAidmFsdWUiLCAibWFwIiwgImVsZW1lbnQiLCAiZXJyIiwgImUiLCAiZiIsICJfaXRlcmF0b3IzIiwgInBhZ2VzIiwgIl9zdGVwMyIsICJwYWdlMSIsICJtaXNzaW5nIiwgIl9pdGVyYXRvcjQiLCAiX3N0ZXA0IiwgInJlc3BvbnNlMiIsICJfaXRlcmF0b3I1IiwgIl9zdGVwNSIsICJfaXRlcmF0b3I2IiwgIl9zdGVwNiIsICJwYWdlMiIsICJyZWRpcmVjdCIsICJpbWFnZXJlcG9zaXRvcnkiLCAiaW1hZ2VpbmZvIiwgIl9pdGVyYXRvcjciLCAiX3N0ZXA3IiwgIl9pIiwgIl9wcm9taXNlcyIsICJwcm9taXNlIiwgIl94NiIsICJxdWlja0ltcG9ydCIsICJ3Z05hbWVzcGFjZU51bWJlciIsICJ3Z1BhZ2VOYW1lIiwgIndnV2lraUlEIiwgImNvbmZpZyIsICJnZXQiLCAiY2FWaWV3Rm9yZWlnblpod2lraSIsICJkb2N1bWVudCIsICJxdWVyeVNlbGVjdG9yQWxsIiwgInJlZGlyZWN0VGV4dEEiLCAiaGFzTXdOb2FydGljbGV0ZXh0IiwgInF1ZXJ5U2VsZWN0b3IiLCAibGFiZWwiLCAiYnV0dG9uTGFiZWwiLCAicG9ydGxldElkIiwgImFkZFBvcnRsZXRMaW5rIiwgImFkZEV2ZW50TGlzdGVuZXIiLCAiX3JlZGlyZWN0VGV4dEEkIiwgInRleHRDb250ZW50IiwgInRoZW4iXQp9Cg==

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
    for (let i = 0; i < pageNames.length; i++) {
      promises[promises.length] = /* @__PURE__ */ _asyncToGenerator(function* () {
        let titles = pageNames.splice(0, 50);
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1F1aWNrSW1wb3J0L1F1aWNrSW1wb3J0LnRzIiwgInNyYy9RdWlja0ltcG9ydC9vcHRpb25zLmpzb24iLCAic3JjL1F1aWNrSW1wb3J0L21vZHVsZXMvYXBpLnRzIiwgInNyYy9RdWlja0ltcG9ydC9tb2R1bGVzL2NvcmUudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7ZGV0ZWN0SWZGaWxlUmVkaXJlY3QsIHJlZnJlc2hQYWdlfSBmcm9tICcuL21vZHVsZXMvY29yZSc7XG5cbihmdW5jdGlvbiBxdWlja0ltcG9ydCgpOiB2b2lkIHtcblx0Y29uc3Qge3dnTmFtZXNwYWNlTnVtYmVyLCB3Z1BhZ2VOYW1lLCB3Z1dpa2lJRH0gPSBtdy5jb25maWcuZ2V0KCk7XG5cblx0Y29uc3QgY2FWaWV3Rm9yZWlnblpod2lraSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIjY2Etdmlldy1mb3JlaWduIGFbaHJlZio9J3poLndpa2lwZWRpYS5vcmcnXVwiKTtcblx0Y29uc3QgcmVkaXJlY3RUZXh0QSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5yZWRpcmVjdFRleHQgYScpO1xuXG5cdGNvbnN0IGlzRmlsZU5TOiBib29sZWFuID0gd2dOYW1lc3BhY2VOdW1iZXIgPT09IDY7XG5cdGNvbnN0IGhhc013Tm9hcnRpY2xldGV4dDogYm9vbGVhbiA9ICEhZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI213LW5vYXJ0aWNsZXRleHQnKTtcblx0Y29uc3QgaXdwcmVmaXg6IHN0cmluZyA9IGNhVmlld0ZvcmVpZ25aaHdpa2kubGVuZ3RoID4gMCA/ICd6aHdpa2knIDogJ2NvbW1vbnMnO1xuXG5cdGNvbnN0IGxhYmVsOiBzdHJpbmcgPSBpc0ZpbGVOUyAmJiAhaGFzTXdOb2FydGljbGV0ZXh0ID8gaXdwcmVmaXggOiAnJztcblx0Y29uc3QgYnV0dG9uTGFiZWw6IHN0cmluZyA9IGlzRmlsZU5TXG5cdFx0PyBsYWJlbFxuXHRcdFx0PyBg5paH5Lu277yIJHtsYWJlbH3vvIlgXG5cdFx0XHQ6ICfpobXpnaInXG5cdFx0OiByZWRpcmVjdFRleHRBLmxlbmd0aCA+IDBcblx0XHRcdD8gJ+mHjeWumuWQkeebruaghydcblx0XHRcdDogJ+mhtemdoic7XG5cblx0aWYgKCh3Z1dpa2lJRCAhPT0gJ3pocWl1d2VuYmFpa2UnICYmIGlzRmlsZU5TKSB8fCB3Z05hbWVzcGFjZU51bWJlciA8IDApIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBwb3J0bGV0SWQ6ICdwLWNhY3Rpb25zJyB8ICdwLXRiJyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwLWNhY3Rpb25zJykgPyAncC1jYWN0aW9ucycgOiAncC10Yic7XG5cdGNvbnN0IGVsZW1lbnQ6IEhUTUxMSUVsZW1lbnQgfCBudWxsID0gbXcudXRpbC5hZGRQb3J0bGV0TGluayhwb3J0bGV0SWQsICcjJywgYOWvvOWFpSR7YnV0dG9uTGFiZWx9YCwgJ3QtaW1wb3J0Jyk7XG5cdGlmICghZWxlbWVudCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKTogdm9pZCA9PiB7XG5cdFx0dm9pZCAoYXN5bmMgKCkgPT4ge1xuXHRcdFx0Y29uc3QgcGFnZU5hbWU6IHN0cmluZyA9IHJlZGlyZWN0VGV4dEFbMF0/LnRleHRDb250ZW50IHx8IHdnUGFnZU5hbWU7XG5cdFx0XHRhd2FpdCBkZXRlY3RJZkZpbGVSZWRpcmVjdChwYWdlTmFtZSwgaXNGaWxlTlMpO1xuXHRcdH0pKCkudGhlbigoKSA9PiB7XG5cdFx0XHRyZWZyZXNoUGFnZSh3Z1BhZ2VOYW1lKTtcblx0XHR9KTtcblx0fSk7XG59KSgpO1xuXG5leHBvcnQge2FwaX0gZnJvbSAnLi9tb2R1bGVzL2FwaSc7XG5leHBvcnQge2RldGVjdElmRmlsZVJlZGlyZWN0LCByZWZyZXNoUGFnZX0gZnJvbSAnLi9tb2R1bGVzL2NvcmUnO1xuIiwgIntcblx0XCJ2ZXJzaW9uXCI6IFwiMi4wXCJcbn1cbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge2luaXRNd0FwaX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxuY29uc3QgYXBpOiBtdy5BcGkgPSBpbml0TXdBcGkoYFF1aWNrSW1wb3J0LyR7T1BUSU9OUy52ZXJzaW9ufWApO1xuXG5leHBvcnQge2FwaX07XG4iLCAiaW1wb3J0IHthcGl9IGZyb20gJy4vYXBpJztcbmltcG9ydCB7Z2VuZXJhdGVBcnJheX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbmltcG9ydCB7dG9hc3RpZnl9IGZyb20gJ2V4dC5nYWRnZXQuVG9hc3RpZnknO1xuXG50eXBlIERldGVjdElmRmlsZVJlZGlyZWN0ID0gKHBhZ2VOYW1lczogc3RyaW5nIHwgc3RyaW5nW10sIGlzRmlsZU5TPzogYm9vbGVhbikgPT4gUHJvbWlzZTx2b2lkPjtcbnR5cGUgUmVmcmVzaFBhZ2UgPSAodGl0bGU6IHN0cmluZykgPT4gdm9pZDtcblxubGV0IHRvYXN0aWZ5SW5zdGFuY2U6IFRvYXN0aWZ5SW5zdGFuY2UgPSB7XG5cdGhpZGVUb2FzdDogKCkgPT4ge30sXG59O1xuXG5jb25zdCByZWZyZXNoUGFnZTogUmVmcmVzaFBhZ2UgPSAodGl0bGUpID0+IHtcblx0dG9hc3RpZnlJbnN0YW5jZS5oaWRlVG9hc3QoKTtcblx0dG9hc3RpZnkoXG5cdFx0e1xuXHRcdFx0dGV4dDogJ+ato+WcqOWIt+aWsOmhtemdoicsXG5cdFx0XHRkdXJhdGlvbjogLTEsXG5cdFx0fSxcblx0XHQnaW5mbydcblx0KTtcblxuXHRsb2NhdGlvbi5yZXBsYWNlKG13LnV0aWwuZ2V0VXJsKHRpdGxlKSk7XG59O1xuXG5jb25zdCBpbXBvcnRQYWdlID0gYXN5bmMgKHBhZ2VOYW1lOiBzdHJpbmcsIGl3cHJlZml4OiBzdHJpbmcsIGlzRmlsZU5TOiBib29sZWFuID0gZmFsc2UpOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0dG9hc3RpZnlJbnN0YW5jZS5oaWRlVG9hc3QoKTtcblx0dG9hc3RpZnlJbnN0YW5jZSA9IHRvYXN0aWZ5KFxuXHRcdHtcblx0XHRcdHRleHQ6IGDlr7zlhaXpobXpnaLkuK3vvJoke3BhZ2VOYW1lfWAsXG5cdFx0XHRkdXJhdGlvbjogLTEsXG5cdFx0fSxcblx0XHQnaW5mbydcblx0KTtcblxuXHRsZXQgc3VtbWFyeTogc3RyaW5nID0gJ+mhtemdouaWh+Wtl+WOn+iuuOWPr++8mltbY2MtYnktc2E6NC4wfENDIEJZLVNBIDQuMF1d77yb5L2c6ICF6K+35Y+C6KeB5p2l5rqQ6aG16Z2i5Y6G5Y+yJztcblx0aWYgKGlzRmlsZU5TKSB7XG5cdFx0c3VtbWFyeSArPSAn77yb5paH5Lu25L2c6ICF6K+35Y+C6KeB5q2k6aG16Z2i5Y+K5p2l5rqQ6aG16Z2i6K6w6L29Jztcblx0fVxuXG5cdGNvbnN0IHBhcmFtczogQXBpSW1wb3J0UGFyYW1zID0ge1xuXHRcdGFjdGlvbjogJ2ltcG9ydCcsXG5cdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0YXNzaWdua25vd251c2VyczogdHJ1ZSxcblx0XHRpbnRlcndpa2lwYWdlOiBwYWdlTmFtZSxcblx0XHRpbnRlcndpa2lwcmVmaXg6IGl3cHJlZml4LFxuXHRcdGludGVyd2lraXNvdXJjZTogaXdwcmVmaXggYXMgTm9uTnVsbGFibGU8QXBpSW1wb3J0UGFyYW1zWydpbnRlcndpa2lzb3VyY2UnXT4sXG5cdFx0c3VtbWFyeTogYO+8uyR7c3VtbWFyeX3vvL1gLFxuXHR9O1xuXHRhd2FpdCBhcGkucG9zdFdpdGhFZGl0VG9rZW4ocGFyYW1zKTtcblxuXHR0b2FzdGlmeUluc3RhbmNlLmhpZGVUb2FzdCgpO1xuXHR0b2FzdGlmeUluc3RhbmNlID0gdG9hc3RpZnkoXG5cdFx0e1xuXHRcdFx0dGV4dDogYOmhtemdouWvvOWFpeWujOaIkO+8miR7cGFnZU5hbWV9YCxcblx0XHRcdGR1cmF0aW9uOiAtMSxcblx0XHR9LFxuXHRcdCdzdWNjZXNzJ1xuXHQpO1xufTtcblxuY29uc3QgdXBsb2FkRmlsZSA9IGFzeW5jICh0YXJnZXQ6IHN0cmluZywgdXJsPzogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiA9PiB7XG5cdHRvYXN0aWZ5SW5zdGFuY2UuaGlkZVRvYXN0KCk7XG5cdHRvYXN0aWZ5SW5zdGFuY2UgPSB0b2FzdGlmeShcblx0XHR7XG5cdFx0XHR0ZXh0OiBg6L+B56e75paH5Lu25Lit77yaJHt0YXJnZXR9YCxcblx0XHRcdGR1cmF0aW9uOiAtMSxcblx0XHR9LFxuXHRcdCdpbmZvJ1xuXHQpO1xuXG5cdGNvbnN0IHVwbG9hZFBhcmFtczogQXBpVXBsb2FkUGFyYW1zID0ge1xuXHRcdHVybDogdXJsID8/IGBodHRwczovL3poLndpa2lwZWRpYS5vcmcvd2lraS9TcGVjaWFsOlJlZGlyZWN0L2ZpbGUvJHttdy51dGlsLnJhd3VybGVuY29kZSh0YXJnZXQpfWAsXG5cdFx0YWN0aW9uOiAndXBsb2FkJyxcblx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRmaWxlbmFtZTogdGFyZ2V0LFxuXHRcdGNvbW1lbnQ6ICfoh6rlhbbku5bnvZHnq5nov4Hnp7vmlofku7YnLFxuXHRcdGlnbm9yZXdhcm5pbmdzOiB0cnVlLFxuXHR9O1xuXHRhd2FpdCBhcGkucG9zdFdpdGhFZGl0VG9rZW4odXBsb2FkUGFyYW1zKTtcblxuXHR0b2FzdGlmeUluc3RhbmNlLmhpZGVUb2FzdCgpO1xuXHR0b2FzdGlmeUluc3RhbmNlID0gdG9hc3RpZnkoXG5cdFx0e1xuXHRcdFx0dGV4dDogYOaWh+S7tui/geenu+WujOaIkO+8miR7dGFyZ2V0fWAsXG5cdFx0XHRkdXJhdGlvbjogLTEsXG5cdFx0fSxcblx0XHQnc3VjY2Vzcydcblx0KTtcbn07XG5cbmNvbnN0IHF1ZXJ5SW1hZ2VJbmZvID0gYXN5bmMgKHRpdGxlczogc3RyaW5nIHwgc3RyaW5nW10pID0+IHtcblx0Y29uc3QgcXVlcnlQYXJhbXM6IEFwaVF1ZXJ5SW5mb1BhcmFtcyAmIEFwaVF1ZXJ5SW1hZ2VJbmZvUGFyYW1zID0ge1xuXHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0cHJvcDogWydpbWFnZWluZm8nLCAnaW5mbyddLFxuXHRcdGlpcHJvcDogWyd1cmwnXSxcblx0XHR0aXRsZXMsXG5cdFx0cmVkaXJlY3RzOiB0cnVlLFxuXHR9O1xuXHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGFwaS5wb3N0KHF1ZXJ5UGFyYW1zKTtcblxuXHRyZXR1cm4gcmVzcG9uc2U7XG59O1xuXG5jb25zdCBkZXRlY3RJZkZpbGVSZWRpcmVjdDogRGV0ZWN0SWZGaWxlUmVkaXJlY3QgPSBhc3luYyAocGFnZU5hbWVzLCBpc0ZpbGVOUyA9IGZhbHNlKSA9PiB7XG5cdHBhZ2VOYW1lcyA9IGdlbmVyYXRlQXJyYXkocGFnZU5hbWVzKTtcblx0Y29uc3QgcHJvbWlzZXM6ICgoKSA9PiBQcm9taXNlPHZvaWQ+KVtdID0gW107XG5cdGNvbnN0IHRvczogc3RyaW5nW10gPSBbXTtcblxuXHRmb3IgKGxldCBpID0gMDsgaSA8IHBhZ2VOYW1lcy5sZW5ndGg7IGkrKykge1xuXHRcdHByb21pc2VzW3Byb21pc2VzLmxlbmd0aF0gPSBhc3luYyAoKTogUHJvbWlzZTx2b2lkPiA9PiB7XG5cdFx0XHRsZXQgdGl0bGVzID0gcGFnZU5hbWVzLnNwbGljZSgwLCA1MCk7XG5cdFx0XHRpZiAocGFnZU5hbWVzLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdC8vIEFuYWx5emUgc3RlcCAxOiBpbXBvcnQgcGFnZXMgaXRzZWxmXG5cdFx0XHQvLy8vIFF1ZXJ5XG5cdFx0XHRjb25zdCByZXNwb25zZSA9IGF3YWl0IHF1ZXJ5SW1hZ2VJbmZvKHRpdGxlcyk7XG5cdFx0XHRpZiAoIXJlc3BvbnNlWydxdWVyeSddKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0Ly8vLyBOb3JtYWxpemVcblx0XHRcdGlmIChyZXNwb25zZVsncXVlcnknXS5ub3JtYWxpemVkKSB7XG5cdFx0XHRcdGZvciAoY29uc3Qge2Zyb20sIHRvfSBvZiByZXNwb25zZVsncXVlcnknXS5ub3JtYWxpemVkIGFzIHtmcm9tOiBzdHJpbmc7IHRvOiBzdHJpbmd9W10pIHtcblx0XHRcdFx0XHR0aXRsZXMgPSB0aXRsZXMubWFwKChlbGVtZW50KSA9PiB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gZWxlbWVudCA9PT0gZnJvbSA/IHRvIDogZWxlbWVudDtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQvLy8vIEltcG9ydFxuXHRcdFx0Zm9yIChjb25zdCBwYWdlMSBvZiByZXNwb25zZVsncXVlcnknXS5wYWdlcykge1xuXHRcdFx0XHRjb25zdCB0aXRsZSA9IHBhZ2UxLnRpdGxlIGFzIHN0cmluZztcblxuXHRcdFx0XHRpZiAoIXBhZ2UxLm1pc3NpbmcpIHtcblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChpc0ZpbGVOUykge1xuXHRcdFx0XHRcdGF3YWl0IGltcG9ydFBhZ2UodGl0bGUsICdjb21tb25zJywgaXNGaWxlTlMpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGF3YWl0IGltcG9ydFBhZ2UodGl0bGUsICd6aHdpa2knLCBpc0ZpbGVOUyk7XG5cdFx0XHR9XG5cblx0XHRcdC8vLy8gUHVzaCByZWRpcmVjdCB0YXJnZXRzIGludG8gYXJyYXlcblx0XHRcdGlmIChyZXNwb25zZVsncXVlcnknXS5yZWRpcmVjdHMpIHtcblx0XHRcdFx0Zm9yIChjb25zdCB7dG99IG9mIHJlc3BvbnNlWydxdWVyeSddLnJlZGlyZWN0cyBhcyB7ZnJvbTogc3RyaW5nOyB0bzogc3RyaW5nfVtdKSB7XG5cdFx0XHRcdFx0dG9zW3Rvcy5sZW5ndGhdID0gdG87XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Ly8gQW5hbHl6ZSBzdGVwIDI6IGZvciBmaWxlcywgY2hlY2sgaWYgaXQgaXMgYSByZWRpcmVjdFxuXHRcdFx0aWYgKGlzRmlsZU5TKSB7XG5cdFx0XHRcdC8vLy8gUXVlcnlcblx0XHRcdFx0Y29uc3QgcmVzcG9uc2UyID0gYXdhaXQgcXVlcnlJbWFnZUluZm8odGl0bGVzKTtcblx0XHRcdFx0aWYgKCFyZXNwb25zZTJbJ3F1ZXJ5J10pIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLy8vIE5vcm1hbGl6ZVxuXHRcdFx0XHRpZiAocmVzcG9uc2UyWydxdWVyeSddLm5vcm1hbGl6ZWQpIHtcblx0XHRcdFx0XHRmb3IgKGNvbnN0IHtmcm9tLCB0b30gb2YgcmVzcG9uc2UyWydxdWVyeSddLm5vcm1hbGl6ZWQgYXMge2Zyb206IHN0cmluZzsgdG86IHN0cmluZ31bXSkge1xuXHRcdFx0XHRcdFx0dGl0bGVzID0gdGl0bGVzLm1hcCgoZWxlbWVudCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gZWxlbWVudCA9PT0gZnJvbSA/IHRvIDogZWxlbWVudDtcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vLy8gdXBsb2FkXG5cdFx0XHRcdGZvciAoY29uc3QgcGFnZTIgb2YgcmVzcG9uc2UyWydxdWVyeSddLnBhZ2VzKSB7XG5cdFx0XHRcdFx0Y29uc3QgdGl0bGUgPSBwYWdlMi50aXRsZSBhcyBzdHJpbmc7XG5cblx0XHRcdFx0XHRpZiAocGFnZTIubWlzc2luZyB8fCBwYWdlMi5yZWRpcmVjdCkge1xuXHRcdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0aWYgKHBhZ2UyLmltYWdlcmVwb3NpdG9yeSAmJiBwYWdlMi5pbWFnZXJlcG9zaXRvcnkgIT09ICdsb2NhbCcpIHtcblx0XHRcdFx0XHRcdGF3YWl0IHVwbG9hZEZpbGUodGl0bGUsIHBhZ2UyLmltYWdlaW5mb1swXS51cmwgYXMgc3RyaW5nKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAocmVzcG9uc2UyWydxdWVyeSddLnJlZGlyZWN0cykge1xuXHRcdFx0XHRcdGZvciAoY29uc3Qge3RvfSBvZiByZXNwb25zZTJbJ3F1ZXJ5J10ucmVkaXJlY3RzIGFzIHtmcm9tOiBzdHJpbmc7IHRvOiBzdHJpbmd9W10pIHtcblx0XHRcdFx0XHRcdHRvc1t0b3MubGVuZ3RoXSA9IHRvO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQvLyBBbmFseXplIHN0ZXAgMzogaW1wb3J0IHBhZ2VzIGFzIHJlZGlyZWN0IHRhcmdldFxuXHRcdFx0Ly8vLyBRdWV1ZSByZXF1ZXN0cyB0byBpbXBvcnQgcmVkaXJlY3QgdGFyZ2V0c1xuXHRcdFx0YXdhaXQgZGV0ZWN0SWZGaWxlUmVkaXJlY3QodG9zKTtcblx0XHR9O1xuXHR9XG5cblx0Zm9yIChjb25zdCBwcm9taXNlIG9mIHByb21pc2VzKSB7XG5cdFx0YXdhaXQgcHJvbWlzZSgpO1xuXHR9XG59O1xuXG5leHBvcnQge3R5cGUgRGV0ZWN0SWZGaWxlUmVkaXJlY3QsIGRldGVjdElmRmlsZVJlZGlyZWN0LCB0eXBlIFJlZnJlc2hQYWdlLCByZWZyZXNoUGFnZX07XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsc0JBQUEsQ0FBQTtBQUFBQyxTQUFBRCxxQkFBQTtFQUFBRSxLQUFBQSxNQUFBQTtFQUFBQyxzQkFBQUEsTUFBQUE7RUFBQUMsYUFBQUEsTUFBQUE7QUFBQSxDQUFBO0FBQUFDLE9BQUFDLFVBQUFDLGFBQUFQLG1CQUFBOztBQ0NDLElBQUFRLFVBQVc7O0FDQVosSUFBQUMsb0JBQXdCQyxRQUFBLGlCQUFBO0FBRXhCLElBQU1SLE9BQUEsR0FBY08sa0JBQUFFLFdBQUEsZUFBQUMsT0FBaUNKLE9BQU8sQ0FBRTs7QUNGOUQsSUFB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QUFBLFVBQUFxRztBQUNqQixZQUFNcEcsYUFBbUJvRyxrQkFBQVIsY0FBYyxDQUFDLE9BQUEsUUFBQVEsb0JBQUEsU0FBQSxTQUFmQSxnQkFBa0JDLGdCQUFlaEI7QUFDMUQsWUFBTS9HLHFCQUFxQjBCLFVBQVVFLFFBQVE7SUFDOUMsQ0FBQSxFQUFHLEVBQUVvRyxLQUFLLE1BQU07QUFDZi9ILGtCQUFZOEcsVUFBVTtJQUN2QixDQUFDO0VBQ0YsQ0FBQztBQUNGLEdBQUc7IiwKICAibmFtZXMiOiBbIlF1aWNrSW1wb3J0X2V4cG9ydHMiLCAiX19leHBvcnQiLCAiYXBpIiwgImRldGVjdElmRmlsZVJlZGlyZWN0IiwgInJlZnJlc2hQYWdlIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIl9fdG9Db21tb25KUyIsICJ2ZXJzaW9uIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgInJlcXVpcmUiLCAiaW5pdE13QXBpIiwgImNvbmNhdCIsICJpbXBvcnRfZXh0X2dhZGdldDIiLCAiaW1wb3J0X2V4dF9nYWRnZXQzIiwgInRvYXN0aWZ5SW5zdGFuY2UiLCAiaGlkZVRvYXN0IiwgInRpdGxlIiwgInRvYXN0aWZ5IiwgInRleHQiLCAiZHVyYXRpb24iLCAibG9jYXRpb24iLCAicmVwbGFjZSIsICJtdyIsICJ1dGlsIiwgImdldFVybCIsICJpbXBvcnRQYWdlIiwgIl9yZWYiLCAiX2FzeW5jVG9HZW5lcmF0b3IiLCAicGFnZU5hbWUiLCAiaXdwcmVmaXgiLCAiaXNGaWxlTlMiLCAic3VtbWFyeSIsICJwYXJhbXMiLCAiYWN0aW9uIiwgImZvcm1hdCIsICJhc3NpZ25rbm93bnVzZXJzIiwgImludGVyd2lraXBhZ2UiLCAiaW50ZXJ3aWtpcHJlZml4IiwgImludGVyd2lraXNvdXJjZSIsICJwb3N0V2l0aEVkaXRUb2tlbiIsICJfeCIsICJfeDIiLCAiYXBwbHkiLCAiYXJndW1lbnRzIiwgInVwbG9hZEZpbGUiLCAiX3JlZjIiLCAidGFyZ2V0IiwgInVybCIsICJ1cGxvYWRQYXJhbXMiLCAicmF3dXJsZW5jb2RlIiwgImZpbGVuYW1lIiwgImNvbW1lbnQiLCAiaWdub3Jld2FybmluZ3MiLCAiX3gzIiwgIl94NCIsICJxdWVyeUltYWdlSW5mbyIsICJfcmVmMyIsICJ0aXRsZXMiLCAicXVlcnlQYXJhbXMiLCAiZm9ybWF0dmVyc2lvbiIsICJwcm9wIiwgImlpcHJvcCIsICJyZWRpcmVjdHMiLCAicmVzcG9uc2UiLCAicG9zdCIsICJfeDUiLCAiX3JlZjQiLCAicGFnZU5hbWVzIiwgImdlbmVyYXRlQXJyYXkiLCAicHJvbWlzZXMiLCAidG9zIiwgImkiLCAibGVuZ3RoIiwgInNwbGljZSIsICJub3JtYWxpemVkIiwgIl9pdGVyYXRvcjIiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAiX3N0ZXAyIiwgInMiLCAibiIsICJkb25lIiwgImZyb20iLCAidG8iLCAidmFsdWUiLCAibWFwIiwgImVsZW1lbnQiLCAiZXJyIiwgImUiLCAiZiIsICJfaXRlcmF0b3IzIiwgInBhZ2VzIiwgIl9zdGVwMyIsICJwYWdlMSIsICJtaXNzaW5nIiwgIl9pdGVyYXRvcjQiLCAiX3N0ZXA0IiwgInJlc3BvbnNlMiIsICJfaXRlcmF0b3I1IiwgIl9zdGVwNSIsICJfaXRlcmF0b3I2IiwgIl9zdGVwNiIsICJwYWdlMiIsICJyZWRpcmVjdCIsICJpbWFnZXJlcG9zaXRvcnkiLCAiaW1hZ2VpbmZvIiwgIl9pdGVyYXRvcjciLCAiX3N0ZXA3IiwgIl9pIiwgIl9wcm9taXNlcyIsICJwcm9taXNlIiwgIl94NiIsICJxdWlja0ltcG9ydCIsICJ3Z05hbWVzcGFjZU51bWJlciIsICJ3Z1BhZ2VOYW1lIiwgIndnV2lraUlEIiwgImNvbmZpZyIsICJnZXQiLCAiY2FWaWV3Rm9yZWlnblpod2lraSIsICJkb2N1bWVudCIsICJxdWVyeVNlbGVjdG9yQWxsIiwgInJlZGlyZWN0VGV4dEEiLCAiaGFzTXdOb2FydGljbGV0ZXh0IiwgInF1ZXJ5U2VsZWN0b3IiLCAibGFiZWwiLCAiYnV0dG9uTGFiZWwiLCAicG9ydGxldElkIiwgImFkZFBvcnRsZXRMaW5rIiwgImFkZEV2ZW50TGlzdGVuZXIiLCAiX3JlZGlyZWN0VGV4dEEkIiwgInRleHRDb250ZW50IiwgInRoZW4iXQp9Cg==

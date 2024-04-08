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
    try {
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
    } catch {
    }
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
    try {
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
    } catch {
    }
  });
  return function uploadFile2(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
var queryImageInfo = /* @__PURE__ */ function() {
  var _ref3 = _asyncToGenerator(function* (titles) {
    try {
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
    } catch {
    }
    return {};
  });
  return function queryImageInfo2(_x5) {
    return _ref3.apply(this, arguments);
  };
}();
var detectIfFileRedirect = /* @__PURE__ */ function() {
  var _ref4 = _asyncToGenerator(function* (pageNames, isFileNS = false) {
    pageNames = (0, import_ext_gadget2.generateArray)(pageNames);
    const promises = [];
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
        let response2;
        if (isFileNS) {
          response2 = yield queryImageInfo(titles);
          if (!response2["query"]) {
            return;
          }
          if (response2["query"].normalized) {
            var _iterator4 = _createForOfIteratorHelper(response2["query"].normalized), _step4;
            try {
              for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
                const {
                  from,
                  to
                } = _step4.value;
                titles = titles.map((element) => {
                  return element === from ? to : element;
                });
              }
            } catch (err) {
              _iterator4.e(err);
            } finally {
              _iterator4.f();
            }
          }
          var _iterator5 = _createForOfIteratorHelper(response2["query"].pages), _step5;
          try {
            for (_iterator5.s(); !(_step5 = _iterator5.n()).done; ) {
              const page2 = _step5.value;
              const title = page2.title;
              if (page2.missing || page2.redirect) {
                continue;
              }
              if (page2.imagerepository && page2.imagerepository !== "local") {
                yield uploadFile(title, page2.imageinfo[0].url);
              }
            }
          } catch (err) {
            _iterator5.e(err);
          } finally {
            _iterator5.f();
          }
        }
        const tos = [];
        if (response["query"].redirects) {
          var _iterator6 = _createForOfIteratorHelper(response["query"].redirects), _step6;
          try {
            for (_iterator6.s(); !(_step6 = _iterator6.n()).done; ) {
              const {
                to
              } = _step6.value;
              tos[tos.length] = to;
            }
          } catch (err) {
            _iterator6.e(err);
          } finally {
            _iterator6.f();
          }
        }
        if (response2 && response2["query"].redirects) {
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1F1aWNrSW1wb3J0L1F1aWNrSW1wb3J0LnRzIiwgInNyYy9RdWlja0ltcG9ydC9vcHRpb25zLmpzb24iLCAic3JjL1F1aWNrSW1wb3J0L21vZHVsZXMvYXBpLnRzIiwgInNyYy9RdWlja0ltcG9ydC9tb2R1bGVzL2NvcmUudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7ZGV0ZWN0SWZGaWxlUmVkaXJlY3QsIHJlZnJlc2hQYWdlfSBmcm9tICcuL21vZHVsZXMvY29yZSc7XG5cbihmdW5jdGlvbiBxdWlja0ltcG9ydCgpOiB2b2lkIHtcblx0Y29uc3Qge3dnTmFtZXNwYWNlTnVtYmVyLCB3Z1BhZ2VOYW1lLCB3Z1dpa2lJRH0gPSBtdy5jb25maWcuZ2V0KCk7XG5cblx0Y29uc3QgY2FWaWV3Rm9yZWlnblpod2lraSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIjY2Etdmlldy1mb3JlaWduIGFbaHJlZio9J3poLndpa2lwZWRpYS5vcmcnXVwiKTtcblx0Y29uc3QgcmVkaXJlY3RUZXh0QSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5yZWRpcmVjdFRleHQgYScpO1xuXG5cdGNvbnN0IGlzRmlsZU5TOiBib29sZWFuID0gd2dOYW1lc3BhY2VOdW1iZXIgPT09IDY7XG5cdGNvbnN0IGhhc013Tm9hcnRpY2xldGV4dDogYm9vbGVhbiA9ICEhZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI213LW5vYXJ0aWNsZXRleHQnKTtcblx0Y29uc3QgaXdwcmVmaXg6IHN0cmluZyA9IGNhVmlld0ZvcmVpZ25aaHdpa2kubGVuZ3RoID4gMCA/ICd6aHdpa2knIDogJ2NvbW1vbnMnO1xuXG5cdGNvbnN0IGxhYmVsOiBzdHJpbmcgPSBpc0ZpbGVOUyAmJiAhaGFzTXdOb2FydGljbGV0ZXh0ID8gaXdwcmVmaXggOiAnJztcblx0Y29uc3QgYnV0dG9uTGFiZWw6IHN0cmluZyA9IGlzRmlsZU5TXG5cdFx0PyBsYWJlbFxuXHRcdFx0PyBg5paH5Lu277yIJHtsYWJlbH3vvIlgXG5cdFx0XHQ6ICfpobXpnaInXG5cdFx0OiByZWRpcmVjdFRleHRBLmxlbmd0aCA+IDBcblx0XHRcdD8gJ+mHjeWumuWQkeebruaghydcblx0XHRcdDogJ+mhtemdoic7XG5cblx0aWYgKCh3Z1dpa2lJRCAhPT0gJ3pocWl1d2VuYmFpa2UnICYmIGlzRmlsZU5TKSB8fCB3Z05hbWVzcGFjZU51bWJlciA8IDApIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBwb3J0bGV0SWQ6ICdwLWNhY3Rpb25zJyB8ICdwLXRiJyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwLWNhY3Rpb25zJykgPyAncC1jYWN0aW9ucycgOiAncC10Yic7XG5cdGNvbnN0IGVsZW1lbnQ6IEhUTUxMSUVsZW1lbnQgfCBudWxsID0gbXcudXRpbC5hZGRQb3J0bGV0TGluayhwb3J0bGV0SWQsICcjJywgYOWvvOWFpSR7YnV0dG9uTGFiZWx9YCwgJ3QtaW1wb3J0Jyk7XG5cdGlmICghZWxlbWVudCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKTogdm9pZCA9PiB7XG5cdFx0dm9pZCAoYXN5bmMgKCkgPT4ge1xuXHRcdFx0Y29uc3QgcGFnZU5hbWU6IHN0cmluZyA9IHJlZGlyZWN0VGV4dEFbMF0/LnRleHRDb250ZW50IHx8IHdnUGFnZU5hbWU7XG5cdFx0XHRhd2FpdCBkZXRlY3RJZkZpbGVSZWRpcmVjdChwYWdlTmFtZSwgaXNGaWxlTlMpO1xuXHRcdH0pKCkudGhlbigoKSA9PiB7XG5cdFx0XHRyZWZyZXNoUGFnZSh3Z1BhZ2VOYW1lKTtcblx0XHR9KTtcblx0fSk7XG59KSgpO1xuXG5leHBvcnQge2FwaX0gZnJvbSAnLi9tb2R1bGVzL2FwaSc7XG5leHBvcnQge2RldGVjdElmRmlsZVJlZGlyZWN0LCByZWZyZXNoUGFnZX0gZnJvbSAnLi9tb2R1bGVzL2NvcmUnO1xuIiwgIntcblx0XCJ2ZXJzaW9uXCI6IFwiMi4wXCJcbn1cbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge2luaXRNd0FwaX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxuY29uc3QgYXBpOiBtdy5BcGkgPSBpbml0TXdBcGkoYFF1aWNrSW1wb3J0LyR7T1BUSU9OUy52ZXJzaW9ufWApO1xuXG5leHBvcnQge2FwaX07XG4iLCAiaW1wb3J0IHthcGl9IGZyb20gJy4vYXBpJztcbmltcG9ydCB7Z2VuZXJhdGVBcnJheX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbmltcG9ydCB7dG9hc3RpZnl9IGZyb20gJ2V4dC5nYWRnZXQuVG9hc3RpZnknO1xuXG50eXBlIERldGVjdElmRmlsZVJlZGlyZWN0ID0gKHBhZ2VOYW1lczogc3RyaW5nIHwgc3RyaW5nW10sIGlzRmlsZU5TPzogYm9vbGVhbikgPT4gUHJvbWlzZTx2b2lkPjtcbnR5cGUgUmVmcmVzaFBhZ2UgPSAodGl0bGU6IHN0cmluZykgPT4gdm9pZDtcblxubGV0IHRvYXN0aWZ5SW5zdGFuY2U6IFRvYXN0aWZ5SW5zdGFuY2UgPSB7XG5cdGhpZGVUb2FzdDogKCkgPT4ge30sXG59O1xuXG5jb25zdCByZWZyZXNoUGFnZTogUmVmcmVzaFBhZ2UgPSAodGl0bGUpID0+IHtcblx0dG9hc3RpZnlJbnN0YW5jZS5oaWRlVG9hc3QoKTtcblx0dG9hc3RpZnkoXG5cdFx0e1xuXHRcdFx0dGV4dDogJ+ato+WcqOWIt+aWsOmhtemdoicsXG5cdFx0XHRkdXJhdGlvbjogLTEsXG5cdFx0fSxcblx0XHQnaW5mbydcblx0KTtcblxuXHRsb2NhdGlvbi5yZXBsYWNlKG13LnV0aWwuZ2V0VXJsKHRpdGxlKSk7XG59O1xuXG5jb25zdCBpbXBvcnRQYWdlID0gYXN5bmMgKHBhZ2VOYW1lOiBzdHJpbmcsIGl3cHJlZml4OiBzdHJpbmcsIGlzRmlsZU5TOiBib29sZWFuID0gZmFsc2UpOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0dG9hc3RpZnlJbnN0YW5jZS5oaWRlVG9hc3QoKTtcblx0dG9hc3RpZnlJbnN0YW5jZSA9IHRvYXN0aWZ5KFxuXHRcdHtcblx0XHRcdHRleHQ6IGDlr7zlhaXpobXpnaLkuK3vvJoke3BhZ2VOYW1lfWAsXG5cdFx0XHRkdXJhdGlvbjogLTEsXG5cdFx0fSxcblx0XHQnaW5mbydcblx0KTtcblxuXHRsZXQgc3VtbWFyeTogc3RyaW5nID0gJ+mhtemdouaWh+Wtl+WOn+iuuOWPr++8mltbY2MtYnktc2E6NC4wfENDIEJZLVNBIDQuMF1d77yb5L2c6ICF6K+35Y+C6KeB5p2l5rqQ6aG16Z2i5Y6G5Y+yJztcblx0aWYgKGlzRmlsZU5TKSB7XG5cdFx0c3VtbWFyeSArPSAn77yb5paH5Lu25L2c6ICF6K+35Y+C6KeB5q2k6aG16Z2i5Y+K5p2l5rqQ6aG16Z2i6K6w6L29Jztcblx0fVxuXG5cdHRyeSB7XG5cdFx0Y29uc3QgcGFyYW1zOiBBcGlJbXBvcnRQYXJhbXMgPSB7XG5cdFx0XHRhY3Rpb246ICdpbXBvcnQnLFxuXHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHRhc3NpZ25rbm93bnVzZXJzOiB0cnVlLFxuXHRcdFx0aW50ZXJ3aWtpcGFnZTogcGFnZU5hbWUsXG5cdFx0XHRpbnRlcndpa2lwcmVmaXg6IGl3cHJlZml4LFxuXHRcdFx0aW50ZXJ3aWtpc291cmNlOiBpd3ByZWZpeCBhcyBOb25OdWxsYWJsZTxBcGlJbXBvcnRQYXJhbXNbJ2ludGVyd2lraXNvdXJjZSddPixcblx0XHRcdHN1bW1hcnk6IGDvvLske3N1bW1hcnl977y9YCxcblx0XHR9O1xuXHRcdGF3YWl0IGFwaS5wb3N0V2l0aEVkaXRUb2tlbihwYXJhbXMpO1xuXG5cdFx0dG9hc3RpZnlJbnN0YW5jZS5oaWRlVG9hc3QoKTtcblx0XHR0b2FzdGlmeUluc3RhbmNlID0gdG9hc3RpZnkoXG5cdFx0XHR7XG5cdFx0XHRcdHRleHQ6IGDpobXpnaLlr7zlhaXlrozmiJDvvJoke3BhZ2VOYW1lfWAsXG5cdFx0XHRcdGR1cmF0aW9uOiAtMSxcblx0XHRcdH0sXG5cdFx0XHQnc3VjY2Vzcydcblx0XHQpO1xuXHR9IGNhdGNoIHt9XG59O1xuXG5jb25zdCB1cGxvYWRGaWxlID0gYXN5bmMgKHRhcmdldDogc3RyaW5nLCB1cmw/OiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0dG9hc3RpZnlJbnN0YW5jZS5oaWRlVG9hc3QoKTtcblx0dG9hc3RpZnlJbnN0YW5jZSA9IHRvYXN0aWZ5KFxuXHRcdHtcblx0XHRcdHRleHQ6IGDov4Hnp7vmlofku7bkuK3vvJoke3RhcmdldH1gLFxuXHRcdFx0ZHVyYXRpb246IC0xLFxuXHRcdH0sXG5cdFx0J2luZm8nXG5cdCk7XG5cblx0dHJ5IHtcblx0XHRjb25zdCB1cGxvYWRQYXJhbXM6IEFwaVVwbG9hZFBhcmFtcyA9IHtcblx0XHRcdHVybDogdXJsID8/IGBodHRwczovL3poLndpa2lwZWRpYS5vcmcvd2lraS9TcGVjaWFsOlJlZGlyZWN0L2ZpbGUvJHttdy51dGlsLnJhd3VybGVuY29kZSh0YXJnZXQpfWAsXG5cdFx0XHRhY3Rpb246ICd1cGxvYWQnLFxuXHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHRmaWxlbmFtZTogdGFyZ2V0LFxuXHRcdFx0Y29tbWVudDogJ+iHquWFtuS7lue9keermei/geenu+aWh+S7ticsXG5cdFx0XHRpZ25vcmV3YXJuaW5nczogdHJ1ZSxcblx0XHR9O1xuXHRcdGF3YWl0IGFwaS5wb3N0V2l0aEVkaXRUb2tlbih1cGxvYWRQYXJhbXMpO1xuXG5cdFx0dG9hc3RpZnlJbnN0YW5jZS5oaWRlVG9hc3QoKTtcblx0XHR0b2FzdGlmeUluc3RhbmNlID0gdG9hc3RpZnkoXG5cdFx0XHR7XG5cdFx0XHRcdHRleHQ6IGDmlofku7bov4Hnp7vlrozmiJDvvJoke3RhcmdldH1gLFxuXHRcdFx0XHRkdXJhdGlvbjogLTEsXG5cdFx0XHR9LFxuXHRcdFx0J3N1Y2Nlc3MnXG5cdFx0KTtcblx0fSBjYXRjaCB7fVxufTtcblxuY29uc3QgcXVlcnlJbWFnZUluZm8gPSBhc3luYyAodGl0bGVzOiBzdHJpbmcgfCBzdHJpbmdbXSkgPT4ge1xuXHR0cnkge1xuXHRcdGNvbnN0IHF1ZXJ5UGFyYW1zOiBBcGlRdWVyeUluZm9QYXJhbXMgJiBBcGlRdWVyeUltYWdlSW5mb1BhcmFtcyA9IHtcblx0XHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdFx0cHJvcDogWydpbWFnZWluZm8nLCAnaW5mbyddLFxuXHRcdFx0aWlwcm9wOiBbJ3VybCddLFxuXHRcdFx0dGl0bGVzLFxuXHRcdFx0cmVkaXJlY3RzOiB0cnVlLFxuXHRcdH07XG5cdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGkucG9zdChxdWVyeVBhcmFtcyk7XG5cblx0XHRyZXR1cm4gcmVzcG9uc2U7XG5cdH0gY2F0Y2gge31cblxuXHRyZXR1cm4ge307XG59O1xuXG5jb25zdCBkZXRlY3RJZkZpbGVSZWRpcmVjdDogRGV0ZWN0SWZGaWxlUmVkaXJlY3QgPSBhc3luYyAocGFnZU5hbWVzLCBpc0ZpbGVOUyA9IGZhbHNlKSA9PiB7XG5cdHBhZ2VOYW1lcyA9IGdlbmVyYXRlQXJyYXkocGFnZU5hbWVzKTtcblx0Y29uc3QgcHJvbWlzZXM6ICgoKSA9PiBQcm9taXNlPHZvaWQ+KVtdID0gW107XG5cblx0Zm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IChwYWdlTmFtZXMubGVuZ3RoICsgNTApIC8gNTA7IGkrKykge1xuXHRcdHByb21pc2VzW3Byb21pc2VzLmxlbmd0aF0gPSBhc3luYyAoKTogUHJvbWlzZTx2b2lkPiA9PiB7XG5cdFx0XHRsZXQgdGl0bGVzID0gcGFnZU5hbWVzLnNsaWNlKGkgKiA1MCwgKGkgKyAxKSAqIDUwKTtcblx0XHRcdGlmIChwYWdlTmFtZXMubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0Ly8gQW5hbHl6ZSBzdGVwIDE6IGltcG9ydCBwYWdlcyBpdHNlbGZcblx0XHRcdC8vLy8gUXVlcnlcblx0XHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcXVlcnlJbWFnZUluZm8odGl0bGVzKTtcblx0XHRcdGlmICghcmVzcG9uc2VbJ3F1ZXJ5J10pIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHQvLy8vIE5vcm1hbGl6ZVxuXHRcdFx0aWYgKHJlc3BvbnNlWydxdWVyeSddLm5vcm1hbGl6ZWQpIHtcblx0XHRcdFx0Zm9yIChjb25zdCB7ZnJvbSwgdG99IG9mIHJlc3BvbnNlWydxdWVyeSddLm5vcm1hbGl6ZWQgYXMge2Zyb206IHN0cmluZzsgdG86IHN0cmluZ31bXSkge1xuXHRcdFx0XHRcdHRpdGxlcyA9IHRpdGxlcy5tYXAoKGVsZW1lbnQpID0+IHtcblx0XHRcdFx0XHRcdHJldHVybiBlbGVtZW50ID09PSBmcm9tID8gdG8gOiBlbGVtZW50O1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC8vLy8gSW1wb3J0XG5cdFx0XHRmb3IgKGNvbnN0IHBhZ2UxIG9mIHJlc3BvbnNlWydxdWVyeSddLnBhZ2VzKSB7XG5cdFx0XHRcdGNvbnN0IHRpdGxlID0gcGFnZTEudGl0bGUgYXMgc3RyaW5nO1xuXG5cdFx0XHRcdGlmICghcGFnZTEubWlzc2luZykge1xuXHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKGlzRmlsZU5TKSB7XG5cdFx0XHRcdFx0YXdhaXQgaW1wb3J0UGFnZSh0aXRsZSwgJ2NvbW1vbnMnLCBpc0ZpbGVOUyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YXdhaXQgaW1wb3J0UGFnZSh0aXRsZSwgJ3pod2lraScsIGlzRmlsZU5TKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gQW5hbHl6ZSBzdGVwIDI6IGZvciBmaWxlcywgY2hlY2sgaWYgaXQgaXMgYSByZWRpcmVjdFxuXHRcdFx0bGV0IHJlc3BvbnNlMjtcblx0XHRcdGlmIChpc0ZpbGVOUykge1xuXHRcdFx0XHQvLy8vIFF1ZXJ5XG5cdFx0XHRcdHJlc3BvbnNlMiA9IGF3YWl0IHF1ZXJ5SW1hZ2VJbmZvKHRpdGxlcyk7XG5cdFx0XHRcdGlmICghcmVzcG9uc2UyWydxdWVyeSddKSB7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8vLyBOb3JtYWxpemVcblx0XHRcdFx0aWYgKHJlc3BvbnNlMlsncXVlcnknXS5ub3JtYWxpemVkKSB7XG5cdFx0XHRcdFx0Zm9yIChjb25zdCB7ZnJvbSwgdG99IG9mIHJlc3BvbnNlMlsncXVlcnknXS5ub3JtYWxpemVkIGFzIHtmcm9tOiBzdHJpbmc7IHRvOiBzdHJpbmd9W10pIHtcblx0XHRcdFx0XHRcdHRpdGxlcyA9IHRpdGxlcy5tYXAoKGVsZW1lbnQpID0+IHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIGVsZW1lbnQgPT09IGZyb20gPyB0byA6IGVsZW1lbnQ7XG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLy8vIHVwbG9hZFxuXHRcdFx0XHRmb3IgKGNvbnN0IHBhZ2UyIG9mIHJlc3BvbnNlMlsncXVlcnknXS5wYWdlcykge1xuXHRcdFx0XHRcdGNvbnN0IHRpdGxlID0gcGFnZTIudGl0bGUgYXMgc3RyaW5nO1xuXG5cdFx0XHRcdFx0aWYgKHBhZ2UyLm1pc3NpbmcgfHwgcGFnZTIucmVkaXJlY3QpIHtcblx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGlmIChwYWdlMi5pbWFnZXJlcG9zaXRvcnkgJiYgcGFnZTIuaW1hZ2VyZXBvc2l0b3J5ICE9PSAnbG9jYWwnKSB7XG5cdFx0XHRcdFx0XHRhd2FpdCB1cGxvYWRGaWxlKHRpdGxlLCBwYWdlMi5pbWFnZWluZm9bMF0udXJsIGFzIHN0cmluZyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC8vIEFuYWx5emUgc3RlcCAzOiBpbXBvcnQgcGFnZXMgYXMgcmVkaXJlY3QgdGFyZ2V0XG5cdFx0XHRjb25zdCB0b3M6IHN0cmluZ1tdID0gW107XG5cblx0XHRcdC8vLy8gUHVzaCByZWRpcmVjdCB0YXJnZXRzIGludG8gYXJyYXlcblx0XHRcdGlmIChyZXNwb25zZVsncXVlcnknXS5yZWRpcmVjdHMpIHtcblx0XHRcdFx0Zm9yIChjb25zdCB7dG99IG9mIHJlc3BvbnNlWydxdWVyeSddLnJlZGlyZWN0cyBhcyB7ZnJvbTogc3RyaW5nOyB0bzogc3RyaW5nfVtdKSB7XG5cdFx0XHRcdFx0dG9zW3Rvcy5sZW5ndGhdID0gdG87XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0aWYgKHJlc3BvbnNlMiAmJiByZXNwb25zZTJbJ3F1ZXJ5J10ucmVkaXJlY3RzKSB7XG5cdFx0XHRcdGZvciAoY29uc3Qge3RvfSBvZiByZXNwb25zZTJbJ3F1ZXJ5J10ucmVkaXJlY3RzIGFzIHtmcm9tOiBzdHJpbmc7IHRvOiBzdHJpbmd9W10pIHtcblx0XHRcdFx0XHR0b3NbdG9zLmxlbmd0aF0gPSB0bztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQvLy8vIFF1ZXVlIHJlcXVlc3RzIHRvIGltcG9ydCByZWRpcmVjdCB0YXJnZXRzXG5cdFx0XHRhd2FpdCBkZXRlY3RJZkZpbGVSZWRpcmVjdCh0b3MpO1xuXHRcdH07XG5cdH1cblxuXHRmb3IgKGNvbnN0IHByb21pc2Ugb2YgcHJvbWlzZXMpIHtcblx0XHRhd2FpdCBwcm9taXNlKCk7XG5cdH1cbn07XG5cbmV4cG9ydCB7dHlwZSBEZXRlY3RJZkZpbGVSZWRpcmVjdCwgZGV0ZWN0SWZGaWxlUmVkaXJlY3QsIHR5cGUgUmVmcmVzaFBhZ2UsIHJlZnJlc2hQYWdlfTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxzQkFB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cUJBQXFCNUYsV0FBVztBQUNuRSxRQUFNK0YsY0FBc0I5RixXQUN6QjZGLFFBQUEsTUFBQWhILE9BQ09nSCxPQUFLLEdBQUEsSUFDWCxPQUNESCxjQUFjakQsU0FBUyxJQUN0QixVQUNBO0FBRUosTUFBSzJDLGFBQWEsbUJBQW1CcEYsWUFBYWtGLG9CQUFvQixHQUFHO0FBQ3hFO0VBQ0Q7QUFFQSxRQUFNYSxZQUFtQ1AsU0FBU0ksY0FBYyxhQUFhLElBQUksZUFBZTtBQUNoRyxRQUFNdEMsVUFBZ0M5RCxHQUFHQyxLQUFLdUcsZUFBZUQsV0FBVyxLQUFBLEtBQUFsSCxPQUFVaUgsV0FBVyxHQUFJLFVBQVU7QUFDM0csTUFBSSxDQUFDeEMsU0FBUztBQUNiO0VBQ0Q7QUFFQUEsVUFBUTJDLGlCQUFpQixTQUFTLE1BQVk7QUFDN0MsU0FBQXBHLGtCQUFNLGFBQVk7QUFBQSxVQUFBcUc7QUFDakIsWUFBTXBHLGFBQW1Cb0csa0JBQUFSLGNBQWMsQ0FBQyxPQUFBLFFBQUFRLG9CQUFBLFNBQUEsU0FBZkEsZ0JBQWtCQyxnQkFBZWhCO0FBQzFELFlBQU0vRyxxQkFBcUIwQixVQUFVRSxRQUFRO0lBQzlDLENBQUEsRUFBRyxFQUFFb0csS0FBSyxNQUFNO0FBQ2YvSCxrQkFBWThHLFVBQVU7SUFDdkIsQ0FBQztFQUNGLENBQUM7QUFDRixHQUFHOyIsCiAgIm5hbWVzIjogWyJRdWlja0ltcG9ydF9leHBvcnRzIiwgIl9fZXhwb3J0IiwgImFwaSIsICJkZXRlY3RJZkZpbGVSZWRpcmVjdCIsICJyZWZyZXNoUGFnZSIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJfX3RvQ29tbW9uSlMiLCAidmVyc2lvbiIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJyZXF1aXJlIiwgImluaXRNd0FwaSIsICJjb25jYXQiLCAiaW1wb3J0X2V4dF9nYWRnZXQyIiwgImltcG9ydF9leHRfZ2FkZ2V0MyIsICJ0b2FzdGlmeUluc3RhbmNlIiwgImhpZGVUb2FzdCIsICJ0aXRsZSIsICJ0b2FzdGlmeSIsICJ0ZXh0IiwgImR1cmF0aW9uIiwgImxvY2F0aW9uIiwgInJlcGxhY2UiLCAibXciLCAidXRpbCIsICJnZXRVcmwiLCAiaW1wb3J0UGFnZSIsICJfcmVmIiwgIl9hc3luY1RvR2VuZXJhdG9yIiwgInBhZ2VOYW1lIiwgIml3cHJlZml4IiwgImlzRmlsZU5TIiwgInN1bW1hcnkiLCAicGFyYW1zIiwgImFjdGlvbiIsICJmb3JtYXQiLCAiYXNzaWdua25vd251c2VycyIsICJpbnRlcndpa2lwYWdlIiwgImludGVyd2lraXByZWZpeCIsICJpbnRlcndpa2lzb3VyY2UiLCAicG9zdFdpdGhFZGl0VG9rZW4iLCAiX3giLCAiX3gyIiwgImFwcGx5IiwgImFyZ3VtZW50cyIsICJ1cGxvYWRGaWxlIiwgIl9yZWYyIiwgInRhcmdldCIsICJ1cmwiLCAidXBsb2FkUGFyYW1zIiwgInJhd3VybGVuY29kZSIsICJmaWxlbmFtZSIsICJjb21tZW50IiwgImlnbm9yZXdhcm5pbmdzIiwgIl94MyIsICJfeDQiLCAicXVlcnlJbWFnZUluZm8iLCAiX3JlZjMiLCAidGl0bGVzIiwgInF1ZXJ5UGFyYW1zIiwgImZvcm1hdHZlcnNpb24iLCAicHJvcCIsICJpaXByb3AiLCAicmVkaXJlY3RzIiwgInJlc3BvbnNlIiwgInBvc3QiLCAiX3g1IiwgIl9yZWY0IiwgInBhZ2VOYW1lcyIsICJnZW5lcmF0ZUFycmF5IiwgInByb21pc2VzIiwgImkiLCAibGVuZ3RoIiwgInNsaWNlIiwgIm5vcm1hbGl6ZWQiLCAiX2l0ZXJhdG9yMiIsICJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsICJfc3RlcDIiLCAicyIsICJuIiwgImRvbmUiLCAiZnJvbSIsICJ0byIsICJ2YWx1ZSIsICJtYXAiLCAiZWxlbWVudCIsICJlcnIiLCAiZSIsICJmIiwgIl9pdGVyYXRvcjMiLCAicGFnZXMiLCAiX3N0ZXAzIiwgInBhZ2UxIiwgIm1pc3NpbmciLCAicmVzcG9uc2UyIiwgIl9pdGVyYXRvcjQiLCAiX3N0ZXA0IiwgIl9pdGVyYXRvcjUiLCAiX3N0ZXA1IiwgInBhZ2UyIiwgInJlZGlyZWN0IiwgImltYWdlcmVwb3NpdG9yeSIsICJpbWFnZWluZm8iLCAidG9zIiwgIl9pdGVyYXRvcjYiLCAiX3N0ZXA2IiwgIl9pdGVyYXRvcjciLCAiX3N0ZXA3IiwgIl9pIiwgIl9wcm9taXNlcyIsICJwcm9taXNlIiwgIl94NiIsICJxdWlja0ltcG9ydCIsICJ3Z05hbWVzcGFjZU51bWJlciIsICJ3Z1BhZ2VOYW1lIiwgIndnV2lraUlEIiwgImNvbmZpZyIsICJnZXQiLCAiY2FWaWV3Rm9yZWlnblpod2lraSIsICJkb2N1bWVudCIsICJxdWVyeVNlbGVjdG9yQWxsIiwgInJlZGlyZWN0VGV4dEEiLCAiaGFzTXdOb2FydGljbGV0ZXh0IiwgInF1ZXJ5U2VsZWN0b3IiLCAibGFiZWwiLCAiYnV0dG9uTGFiZWwiLCAicG9ydGxldElkIiwgImFkZFBvcnRsZXRMaW5rIiwgImFkZEV2ZW50TGlzdGVuZXIiLCAiX3JlZGlyZWN0VGV4dEEkIiwgInRleHRDb250ZW50IiwgInRoZW4iXQp9Cg==

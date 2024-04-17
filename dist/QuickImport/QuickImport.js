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
    for (let i = 0; i < pageNames.length; i++) {
      promises[promises.length] = /* @__PURE__ */ _asyncToGenerator(function* () {
        let titles = pageNames.splice(0, 50);
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
          yield detectIfFileRedirect(tos);
        }
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1F1aWNrSW1wb3J0L1F1aWNrSW1wb3J0LnRzIiwgInNyYy9RdWlja0ltcG9ydC9vcHRpb25zLmpzb24iLCAic3JjL1F1aWNrSW1wb3J0L21vZHVsZXMvYXBpLnRzIiwgInNyYy9RdWlja0ltcG9ydC9tb2R1bGVzL2NvcmUudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7ZGV0ZWN0SWZGaWxlUmVkaXJlY3QsIHJlZnJlc2hQYWdlfSBmcm9tICcuL21vZHVsZXMvY29yZSc7XG5cbihmdW5jdGlvbiBxdWlja0ltcG9ydCgpOiB2b2lkIHtcblx0Y29uc3Qge3dnTmFtZXNwYWNlTnVtYmVyLCB3Z1BhZ2VOYW1lLCB3Z1dpa2lJRH0gPSBtdy5jb25maWcuZ2V0KCk7XG5cblx0Y29uc3QgY2FWaWV3Rm9yZWlnblpod2lraSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIjY2Etdmlldy1mb3JlaWduIGFbaHJlZio9J3poLndpa2lwZWRpYS5vcmcnXVwiKTtcblx0Y29uc3QgcmVkaXJlY3RUZXh0QSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5yZWRpcmVjdFRleHQgYScpO1xuXG5cdGNvbnN0IGlzRmlsZU5TOiBib29sZWFuID0gd2dOYW1lc3BhY2VOdW1iZXIgPT09IDY7XG5cdGNvbnN0IGhhc013Tm9hcnRpY2xldGV4dDogYm9vbGVhbiA9ICEhZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI213LW5vYXJ0aWNsZXRleHQnKTtcblx0Y29uc3QgaXdwcmVmaXg6IHN0cmluZyA9IGNhVmlld0ZvcmVpZ25aaHdpa2kubGVuZ3RoID8gJ3pod2lraScgOiAnY29tbW9ucyc7XG5cblx0Y29uc3QgbGFiZWw6IHN0cmluZyA9IGlzRmlsZU5TICYmICFoYXNNd05vYXJ0aWNsZXRleHQgPyBpd3ByZWZpeCA6ICcnO1xuXHRjb25zdCBidXR0b25MYWJlbDogc3RyaW5nID0gaXNGaWxlTlNcblx0XHQ/IGxhYmVsXG5cdFx0XHQ/IGDmlofku7bvvIgke2xhYmVsfe+8iWBcblx0XHRcdDogJ+mhtemdoidcblx0XHQ6IHJlZGlyZWN0VGV4dEEubGVuZ3RoXG5cdFx0XHQ/ICfph43lrprlkJHnm67moIcnXG5cdFx0XHQ6ICfpobXpnaInO1xuXG5cdGlmICgod2dXaWtpSUQgIT09ICd6aHFpdXdlbmJhaWtlJyAmJiBpc0ZpbGVOUykgfHwgd2dOYW1lc3BhY2VOdW1iZXIgPCAwKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgcG9ydGxldElkOiAncC1jYWN0aW9ucycgfCAncC10YicgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcC1jYWN0aW9ucycpID8gJ3AtY2FjdGlvbnMnIDogJ3AtdGInO1xuXHRjb25zdCBlbGVtZW50OiBIVE1MTElFbGVtZW50IHwgbnVsbCA9IG13LnV0aWwuYWRkUG9ydGxldExpbmsocG9ydGxldElkLCAnIycsIGDlr7zlhaUke2J1dHRvbkxhYmVsfWAsICd0LWltcG9ydCcpO1xuXHRpZiAoIWVsZW1lbnQpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk6IHZvaWQgPT4ge1xuXHRcdHZvaWQgKGFzeW5jICgpID0+IHtcblx0XHRcdGNvbnN0IHBhZ2VOYW1lOiBzdHJpbmcgPSByZWRpcmVjdFRleHRBWzBdPy50ZXh0Q29udGVudCB8fCB3Z1BhZ2VOYW1lO1xuXHRcdFx0YXdhaXQgZGV0ZWN0SWZGaWxlUmVkaXJlY3QocGFnZU5hbWUsIGlzRmlsZU5TKTtcblx0XHR9KSgpLnRoZW4oKCkgPT4ge1xuXHRcdFx0cmVmcmVzaFBhZ2Uod2dQYWdlTmFtZSk7XG5cdFx0fSk7XG5cdH0pO1xufSkoKTtcblxuZXhwb3J0IHthcGl9IGZyb20gJy4vbW9kdWxlcy9hcGknO1xuZXhwb3J0IHtkZXRlY3RJZkZpbGVSZWRpcmVjdCwgcmVmcmVzaFBhZ2V9IGZyb20gJy4vbW9kdWxlcy9jb3JlJztcbiIsICJ7XG5cdFwidmVyc2lvblwiOiBcIjIuMFwiXG59XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtpbml0TXdBcGl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmNvbnN0IGFwaTogbXcuQXBpID0gaW5pdE13QXBpKGBRdWlja0ltcG9ydC8ke09QVElPTlMudmVyc2lvbn1gKTtcblxuZXhwb3J0IHthcGl9O1xuIiwgImltcG9ydCB7YXBpfSBmcm9tICcuL2FwaSc7XG5pbXBvcnQge2dlbmVyYXRlQXJyYXl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5pbXBvcnQge3RvYXN0aWZ5fSBmcm9tICdleHQuZ2FkZ2V0LlRvYXN0aWZ5JztcblxudHlwZSBEZXRlY3RJZkZpbGVSZWRpcmVjdCA9IChwYWdlTmFtZXM6IHN0cmluZyB8IHN0cmluZ1tdLCBpc0ZpbGVOUz86IGJvb2xlYW4pID0+IFByb21pc2U8dm9pZD47XG50eXBlIFJlZnJlc2hQYWdlID0gKHRpdGxlOiBzdHJpbmcpID0+IHZvaWQ7XG5cbmxldCB0b2FzdGlmeUluc3RhbmNlOiBUb2FzdGlmeUluc3RhbmNlID0ge1xuXHRoaWRlVG9hc3Q6ICgpID0+IHt9LFxufTtcblxuY29uc3QgcmVmcmVzaFBhZ2U6IFJlZnJlc2hQYWdlID0gKHRpdGxlKSA9PiB7XG5cdHRvYXN0aWZ5SW5zdGFuY2UuaGlkZVRvYXN0KCk7XG5cdHRvYXN0aWZ5KFxuXHRcdHtcblx0XHRcdHRleHQ6ICfmraPlnKjliLfmlrDpobXpnaInLFxuXHRcdFx0ZHVyYXRpb246IC0xLFxuXHRcdH0sXG5cdFx0J2luZm8nXG5cdCk7XG5cblx0bG9jYXRpb24ucmVwbGFjZShtdy51dGlsLmdldFVybCh0aXRsZSkpO1xufTtcblxuY29uc3QgaW1wb3J0UGFnZSA9IGFzeW5jIChwYWdlTmFtZTogc3RyaW5nLCBpd3ByZWZpeDogc3RyaW5nLCBpc0ZpbGVOUzogYm9vbGVhbiA9IGZhbHNlKTogUHJvbWlzZTx2b2lkPiA9PiB7XG5cdHRvYXN0aWZ5SW5zdGFuY2UuaGlkZVRvYXN0KCk7XG5cdHRvYXN0aWZ5SW5zdGFuY2UgPSB0b2FzdGlmeShcblx0XHR7XG5cdFx0XHR0ZXh0OiBg5a+85YWl6aG16Z2i5Lit77yaJHtwYWdlTmFtZX1gLFxuXHRcdFx0ZHVyYXRpb246IC0xLFxuXHRcdH0sXG5cdFx0J2luZm8nXG5cdCk7XG5cblx0bGV0IHN1bW1hcnk6IHN0cmluZyA9ICfpobXpnaLmloflrZfljp/orrjlj6/vvJpbW2NjLWJ5LXNhOjQuMHxDQyBCWS1TQSA0LjBdXe+8m+S9nOiAheivt+WPguingeadpea6kOmhtemdouWOhuWPsic7XG5cdGlmIChpc0ZpbGVOUykge1xuXHRcdHN1bW1hcnkgKz0gJ++8m+aWh+S7tuS9nOiAheivt+WPguingeatpOmhtemdouWPiuadpea6kOmhtemdouiusOi9vSc7XG5cdH1cblxuXHRjb25zdCBwYXJhbXM6IEFwaUltcG9ydFBhcmFtcyA9IHtcblx0XHRhY3Rpb246ICdpbXBvcnQnLFxuXHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdGFzc2lnbmtub3dudXNlcnM6IHRydWUsXG5cdFx0aW50ZXJ3aWtpcGFnZTogcGFnZU5hbWUsXG5cdFx0aW50ZXJ3aWtpcHJlZml4OiBpd3ByZWZpeCxcblx0XHRpbnRlcndpa2lzb3VyY2U6IGl3cHJlZml4IGFzIE5vbk51bGxhYmxlPEFwaUltcG9ydFBhcmFtc1snaW50ZXJ3aWtpc291cmNlJ10+LFxuXHRcdHN1bW1hcnk6IGDvvLske3N1bW1hcnl977y9YCxcblx0fTtcblx0YXdhaXQgYXBpLnBvc3RXaXRoRWRpdFRva2VuKHBhcmFtcyk7XG5cblx0dG9hc3RpZnlJbnN0YW5jZS5oaWRlVG9hc3QoKTtcblx0dG9hc3RpZnlJbnN0YW5jZSA9IHRvYXN0aWZ5KFxuXHRcdHtcblx0XHRcdHRleHQ6IGDpobXpnaLlr7zlhaXlrozmiJDvvJoke3BhZ2VOYW1lfWAsXG5cdFx0XHRkdXJhdGlvbjogLTEsXG5cdFx0fSxcblx0XHQnc3VjY2Vzcydcblx0KTtcbn07XG5cbmNvbnN0IHVwbG9hZEZpbGUgPSBhc3luYyAodGFyZ2V0OiBzdHJpbmcsIHVybD86IHN0cmluZyk6IFByb21pc2U8dm9pZD4gPT4ge1xuXHR0b2FzdGlmeUluc3RhbmNlLmhpZGVUb2FzdCgpO1xuXHR0b2FzdGlmeUluc3RhbmNlID0gdG9hc3RpZnkoXG5cdFx0e1xuXHRcdFx0dGV4dDogYOi/geenu+aWh+S7tuS4re+8miR7dGFyZ2V0fWAsXG5cdFx0XHRkdXJhdGlvbjogLTEsXG5cdFx0fSxcblx0XHQnaW5mbydcblx0KTtcblxuXHRjb25zdCB1cGxvYWRQYXJhbXM6IEFwaVVwbG9hZFBhcmFtcyA9IHtcblx0XHR1cmw6IHVybCA/PyBgaHR0cHM6Ly96aC53aWtpcGVkaWEub3JnL3dpa2kvU3BlY2lhbDpSZWRpcmVjdC9maWxlLyR7bXcudXRpbC5yYXd1cmxlbmNvZGUodGFyZ2V0KX1gLFxuXHRcdGFjdGlvbjogJ3VwbG9hZCcsXG5cdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0ZmlsZW5hbWU6IHRhcmdldCxcblx0XHRjb21tZW50OiAn6Ieq5YW25LuW572R56uZ6L+B56e75paH5Lu2Jyxcblx0XHRpZ25vcmV3YXJuaW5nczogdHJ1ZSxcblx0fTtcblx0YXdhaXQgYXBpLnBvc3RXaXRoRWRpdFRva2VuKHVwbG9hZFBhcmFtcyk7XG5cblx0dG9hc3RpZnlJbnN0YW5jZS5oaWRlVG9hc3QoKTtcblx0dG9hc3RpZnlJbnN0YW5jZSA9IHRvYXN0aWZ5KFxuXHRcdHtcblx0XHRcdHRleHQ6IGDmlofku7bov4Hnp7vlrozmiJDvvJoke3RhcmdldH1gLFxuXHRcdFx0ZHVyYXRpb246IC0xLFxuXHRcdH0sXG5cdFx0J3N1Y2Nlc3MnXG5cdCk7XG59O1xuXG5jb25zdCBxdWVyeUltYWdlSW5mbyA9IGFzeW5jICh0aXRsZXM6IHN0cmluZyB8IHN0cmluZ1tdKSA9PiB7XG5cdGNvbnN0IHF1ZXJ5UGFyYW1zOiBBcGlRdWVyeUluZm9QYXJhbXMgJiBBcGlRdWVyeUltYWdlSW5mb1BhcmFtcyA9IHtcblx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdHByb3A6IFsnaW1hZ2VpbmZvJywgJ2luZm8nXSxcblx0XHRpaXByb3A6IFsndXJsJ10sXG5cdFx0dGl0bGVzLFxuXHRcdHJlZGlyZWN0czogdHJ1ZSxcblx0fTtcblx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGkucG9zdChxdWVyeVBhcmFtcyk7XG5cblx0cmV0dXJuIHJlc3BvbnNlO1xufTtcblxuY29uc3QgZGV0ZWN0SWZGaWxlUmVkaXJlY3Q6IERldGVjdElmRmlsZVJlZGlyZWN0ID0gYXN5bmMgKHBhZ2VOYW1lcywgaXNGaWxlTlMgPSBmYWxzZSkgPT4ge1xuXHRwYWdlTmFtZXMgPSBnZW5lcmF0ZUFycmF5KHBhZ2VOYW1lcyk7XG5cdGNvbnN0IHByb21pc2VzOiAoKCkgPT4gUHJvbWlzZTx2b2lkPilbXSA9IFtdO1xuXG5cdGZvciAobGV0IGkgPSAwOyBpIDwgcGFnZU5hbWVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0cHJvbWlzZXNbcHJvbWlzZXMubGVuZ3RoXSA9IGFzeW5jICgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0XHRcdGxldCB0aXRsZXMgPSBwYWdlTmFtZXMuc3BsaWNlKDAsIDUwKTtcblxuXHRcdFx0Ly8gUmVkaXJlY3QgdGFyZ2V0KHMpXG5cdFx0XHRjb25zdCB0b3M6IHN0cmluZ1tdID0gW107XG5cblx0XHRcdC8vIEFuYWx5emUgc3RlcCAxOiBpbXBvcnQgcGFnZXMgaXRzZWxmXG5cdFx0XHQvLy8vIFF1ZXJ5XG5cdFx0XHRjb25zdCByZXNwb25zZSA9IGF3YWl0IHF1ZXJ5SW1hZ2VJbmZvKHRpdGxlcyk7XG5cdFx0XHRpZiAocmVzcG9uc2VbJ3F1ZXJ5J10pIHtcblx0XHRcdFx0Ly8vLyBOb3JtYWxpemVcblx0XHRcdFx0aWYgKHJlc3BvbnNlWydxdWVyeSddLm5vcm1hbGl6ZWQpIHtcblx0XHRcdFx0XHRmb3IgKGNvbnN0IHtmcm9tLCB0b30gb2YgcmVzcG9uc2VbJ3F1ZXJ5J10ubm9ybWFsaXplZCBhcyB7ZnJvbTogc3RyaW5nOyB0bzogc3RyaW5nfVtdKSB7XG5cdFx0XHRcdFx0XHR0aXRsZXMgPSB0aXRsZXMubWFwKChlbGVtZW50KSA9PiB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBlbGVtZW50ID09PSBmcm9tID8gdG8gOiBlbGVtZW50O1xuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8vLyBJbXBvcnRcblx0XHRcdFx0aWYgKHJlc3BvbnNlWydxdWVyeSddLnBhZ2VzKSB7XG5cdFx0XHRcdFx0Zm9yIChjb25zdCBwYWdlMSBvZiByZXNwb25zZVsncXVlcnknXS5wYWdlcykge1xuXHRcdFx0XHRcdFx0Y29uc3QgdGl0bGUgPSBwYWdlMS50aXRsZSBhcyBzdHJpbmc7XG5cblx0XHRcdFx0XHRcdGlmICghcGFnZTEubWlzc2luZykge1xuXHRcdFx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0aWYgKGlzRmlsZU5TKSB7XG5cdFx0XHRcdFx0XHRcdGF3YWl0IGltcG9ydFBhZ2UodGl0bGUsICdjb21tb25zJywgaXNGaWxlTlMpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0YXdhaXQgaW1wb3J0UGFnZSh0aXRsZSwgJ3pod2lraScsIGlzRmlsZU5TKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLy8vIFB1c2ggcmVkaXJlY3QgdGFyZ2V0cyBpbnRvIGFycmF5XG5cdFx0XHRcdGlmIChyZXNwb25zZVsncXVlcnknXS5yZWRpcmVjdHMpIHtcblx0XHRcdFx0XHRmb3IgKGNvbnN0IHt0b30gb2YgcmVzcG9uc2VbJ3F1ZXJ5J10ucmVkaXJlY3RzIGFzIHtmcm9tOiBzdHJpbmc7IHRvOiBzdHJpbmd9W10pIHtcblx0XHRcdFx0XHRcdHRvc1t0b3MubGVuZ3RoXSA9IHRvO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQvLyBBbmFseXplIHN0ZXAgMjogZm9yIGZpbGVzLCBjaGVjayBpZiBpdCBpcyBhIHJlZGlyZWN0XG5cdFx0XHRpZiAoaXNGaWxlTlMpIHtcblx0XHRcdFx0Ly8vLyBRdWVyeVxuXHRcdFx0XHRjb25zdCByZXNwb25zZTIgPSBhd2FpdCBxdWVyeUltYWdlSW5mbyh0aXRsZXMpO1xuXHRcdFx0XHRpZiAocmVzcG9uc2UyWydxdWVyeSddKSB7XG5cdFx0XHRcdFx0Ly8vLyBOb3JtYWxpemVcblx0XHRcdFx0XHRpZiAocmVzcG9uc2UyWydxdWVyeSddLm5vcm1hbGl6ZWQpIHtcblx0XHRcdFx0XHRcdGZvciAoY29uc3Qge2Zyb20sIHRvfSBvZiByZXNwb25zZTJbJ3F1ZXJ5J10ubm9ybWFsaXplZCBhcyB7ZnJvbTogc3RyaW5nOyB0bzogc3RyaW5nfVtdKSB7XG5cdFx0XHRcdFx0XHRcdHRpdGxlcyA9IHRpdGxlcy5tYXAoKGVsZW1lbnQpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gZWxlbWVudCA9PT0gZnJvbSA/IHRvIDogZWxlbWVudDtcblx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Ly8vLyB1cGxvYWRcblx0XHRcdFx0XHRpZiAocmVzcG9uc2UyWydxdWVyeSddLnBhZ2VzKSB7XG5cdFx0XHRcdFx0XHRmb3IgKGNvbnN0IHBhZ2UyIG9mIHJlc3BvbnNlMlsncXVlcnknXS5wYWdlcykge1xuXHRcdFx0XHRcdFx0XHRjb25zdCB0aXRsZSA9IHBhZ2UyLnRpdGxlIGFzIHN0cmluZztcblxuXHRcdFx0XHRcdFx0XHRpZiAocGFnZTIubWlzc2luZyB8fCBwYWdlMi5yZWRpcmVjdCkge1xuXHRcdFx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0aWYgKHBhZ2UyLmltYWdlcmVwb3NpdG9yeSAmJiBwYWdlMi5pbWFnZXJlcG9zaXRvcnkgIT09ICdsb2NhbCcpIHtcblx0XHRcdFx0XHRcdFx0XHRhd2FpdCB1cGxvYWRGaWxlKHRpdGxlLCBwYWdlMi5pbWFnZWluZm9bMF0udXJsIGFzIHN0cmluZyk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRpZiAocmVzcG9uc2UyWydxdWVyeSddLnJlZGlyZWN0cykge1xuXHRcdFx0XHRcdFx0Zm9yIChjb25zdCB7dG99IG9mIHJlc3BvbnNlMlsncXVlcnknXS5yZWRpcmVjdHMgYXMge2Zyb206IHN0cmluZzsgdG86IHN0cmluZ31bXSkge1xuXHRcdFx0XHRcdFx0XHR0b3NbdG9zLmxlbmd0aF0gPSB0bztcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Ly8gQW5hbHl6ZSBzdGVwIDM6IGltcG9ydCBwYWdlcyBhcyByZWRpcmVjdCB0YXJnZXRcblx0XHRcdC8vLy8gUXVldWUgcmVxdWVzdHMgdG8gaW1wb3J0IHJlZGlyZWN0IHRhcmdldHNcblx0XHRcdGlmICh0b3MubGVuZ3RoKSB7XG5cdFx0XHRcdGF3YWl0IGRldGVjdElmRmlsZVJlZGlyZWN0KHRvcyk7XG5cdFx0XHR9XG5cdFx0fTtcblx0fVxuXG5cdGZvciAoY29uc3QgcHJvbWlzZSBvZiBwcm9taXNlcykge1xuXHRcdGF3YWl0IHByb21pc2UoKTtcblx0fVxufTtcblxuZXhwb3J0IHt0eXBlIERldGVjdElmRmlsZVJlZGlyZWN0LCBkZXRlY3RJZkZpbGVSZWRpcmVjdCwgdHlwZSBSZWZyZXNoUGFnZSwgcmVmcmVzaFBhZ2V9O1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLHNCQUFBLENBQUE7QUFBQUMsU0FBQUQscUJBQUE7RUFBQUUsS0FBQUEsTUFBQUE7RUFBQUMsc0JBQUFBLE1BQUFBO0VBQUFDLGFBQUFBLE1BQUFBO0FBQUEsQ0FBQTtBQUFBQyxPQUFBQyxVQUFBQyxhQUFBUCxtQkFBQTs7QUNDQyxJQUFBUSxVQUFXOztBQ0FaLElBQUFDLG9CQUF3QkMsUUFBQSxpQkFBQTtBQUV4QixJQUFNUixPQUFBLEdBQWNPLGtCQUFBRSxXQUFBLGVBQUFDLE9BQWlDSixPQUFPLENBQUU7O0FDRjlELElBQUFLLHFCQUE0QkgsUUFBQSxpQkFBQTtBQUM1QixJQUFBSSxxQkFBdUJKLFFBQUEscUJBQUE7QUFLdkIsSUFBSUssbUJBQXFDO0VBQ3hDQyxXQUFXQSxNQUFNO0VBQUM7QUFDbkI7QUFFQSxJQUFNWixjQUE0QmEsV0FBVTtBQUMzQ0YsbUJBQWlCQyxVQUFVO0FBQzNCLEdBQUEsR0FBQUYsbUJBQUFJLFVBQ0M7SUFDQ0MsTUFBTTtJQUNOQyxVQUFVO0VBQ1gsR0FDQSxNQUNEO0FBRUFDLFdBQVNDLFFBQVFDLEdBQUdDLEtBQUtDLE9BQU9SLEtBQUssQ0FBQztBQUN2QztBQUVBLElBQU1TLGFBQUEsMkJBQUE7QUFBQSxNQUFBQyxPQUFBQyxrQkFBYSxXQUFPQyxVQUFrQkMsVUFBa0JDLFdBQW9CLE9BQXlCO0FBQzFHaEIscUJBQWlCQyxVQUFVO0FBQzNCRCx3QkFBQSxHQUFtQkQsbUJBQUFJLFVBQ2xCO01BQ0NDLE1BQUEsU0FBQVAsT0FBZWlCLFFBQVE7TUFDdkJULFVBQVU7SUFDWCxHQUNBLE1BQ0Q7QUFFQSxRQUFJWSxVQUFrQjtBQUN0QixRQUFJRCxVQUFVO0FBQ2JDLGlCQUFXO0lBQ1o7QUFFQSxVQUFNQyxTQUEwQjtNQUMvQkMsUUFBUTtNQUNSQyxRQUFRO01BQ1JDLGtCQUFrQjtNQUNsQkMsZUFBZVI7TUFDZlMsaUJBQWlCUjtNQUNqQlMsaUJBQWlCVDtNQUNqQkUsU0FBQSxJQUFBcEIsT0FBYW9CLFNBQU8sR0FBQTtJQUNyQjtBQUNBLFVBQU05QixJQUFJc0Msa0JBQWtCUCxNQUFNO0FBRWxDbEIscUJBQWlCQyxVQUFVO0FBQzNCRCx3QkFBQSxHQUFtQkQsbUJBQUFJLFVBQ2xCO01BQ0NDLE1BQUEsVUFBQVAsT0FBZ0JpQixRQUFRO01BQ3hCVCxVQUFVO0lBQ1gsR0FDQSxTQUNEO0VBQ0QsQ0FBQTtBQUFBLFNBQUEsU0FsQ01NLFlBQUFlLElBQUFDLEtBQUE7QUFBQSxXQUFBZixLQUFBZ0IsTUFBQSxNQUFBQyxTQUFBO0VBQUE7QUFBQSxFQUFBO0FBb0NOLElBQU1DLGFBQUEsMkJBQUE7QUFBQSxNQUFBQyxRQUFBbEIsa0JBQWEsV0FBT21CLFFBQWdCQyxLQUFnQztBQUN6RWpDLHFCQUFpQkMsVUFBVTtBQUMzQkQsd0JBQUEsR0FBbUJELG1CQUFBSSxVQUNsQjtNQUNDQyxNQUFBLFNBQUFQLE9BQWVtQyxNQUFNO01BQ3JCM0IsVUFBVTtJQUNYLEdBQ0EsTUFDRDtBQUVBLFVBQU02QixlQUFnQztNQUNyQ0QsS0FBS0EsUUFBQSxRQUFBQSxRQUFBLFNBQUFBLE1BQUEsdURBQUFwQyxPQUE4RFcsR0FBR0MsS0FBSzBCLGFBQWFILE1BQU0sQ0FBQztNQUMvRmIsUUFBUTtNQUNSQyxRQUFRO01BQ1JnQixVQUFVSjtNQUNWSyxTQUFTO01BQ1RDLGdCQUFnQjtJQUNqQjtBQUNBLFVBQU1uRCxJQUFJc0Msa0JBQWtCUyxZQUFZO0FBRXhDbEMscUJBQWlCQyxVQUFVO0FBQzNCRCx3QkFBQSxHQUFtQkQsbUJBQUFJLFVBQ2xCO01BQ0NDLE1BQUEsVUFBQVAsT0FBZ0JtQyxNQUFNO01BQ3RCM0IsVUFBVTtJQUNYLEdBQ0EsU0FDRDtFQUNELENBQUE7QUFBQSxTQUFBLFNBNUJNeUIsWUFBQVMsS0FBQUMsS0FBQTtBQUFBLFdBQUFULE1BQUFILE1BQUEsTUFBQUMsU0FBQTtFQUFBO0FBQUEsRUFBQTtBQThCTixJQUFNWSxpQkFBQSwyQkFBQTtBQUFBLE1BQUFDLFFBQUE3QixrQkFBaUIsV0FBTzhCLFFBQThCO0FBQzNELFVBQU1DLGNBQTREO01BQ2pFekIsUUFBUTtNQUNSQyxRQUFRO01BQ1J5QixlQUFlO01BQ2ZDLE1BQU0sQ0FBQyxhQUFhLE1BQU07TUFDMUJDLFFBQVEsQ0FBQyxLQUFLO01BQ2RKO01BQ0FLLFdBQVc7SUFDWjtBQUNBLFVBQU1DLFdBQUEsTUFBaUI5RCxJQUFJK0QsS0FBS04sV0FBVztBQUUzQyxXQUFPSztFQUNSLENBQUE7QUFBQSxTQUFBLFNBYk1SLGdCQUFBVSxLQUFBO0FBQUEsV0FBQVQsTUFBQWQsTUFBQSxNQUFBQyxTQUFBO0VBQUE7QUFBQSxFQUFBO0FBZU4sSUFBTXpDLHVCQUFBLDJCQUFBO0FBQUEsTUFBQWdFLFFBQUF2QyxrQkFBNkMsV0FBT3dDLFdBQVdyQyxXQUFXLE9BQVU7QUFDekZxQyxpQkFBQSxHQUFZdkQsbUJBQUF3RCxlQUFjRCxTQUFTO0FBQ25DLFVBQU1FLFdBQW9DLENBQUE7QUFFMUMsYUFBU0MsSUFBSSxHQUFHQSxJQUFJSCxVQUFVSSxRQUFRRCxLQUFLO0FBQzFDRCxlQUFTQSxTQUFTRSxNQUFNLElBQUE1QyxrQ0FBSSxhQUEyQjtBQUN0RCxZQUFJOEIsU0FBU1UsVUFBVUssT0FBTyxHQUFHLEVBQUU7QUFHbkMsY0FBTUMsTUFBZ0IsQ0FBQTtBQUl0QixjQUFNVixXQUFBLE1BQWlCUixlQUFlRSxNQUFNO0FBQzVDLFlBQUlNLFNBQVMsT0FBTyxHQUFHO0FBRXRCLGNBQUlBLFNBQVMsT0FBTyxFQUFFVyxZQUFZO0FBQUEsZ0JBQUFDLGFBQUFDLDJCQUNSYixTQUFTLE9BQU8sRUFBRVcsVUFBQSxHQUFBRztBQUFBLGdCQUFBO0FBQTNDLG1CQUFBRixXQUFBRyxFQUFBLEdBQUEsRUFBQUQsU0FBQUYsV0FBQUksRUFBQSxHQUFBQyxRQUF1RjtBQUFBLHNCQUE1RTtrQkFBQ0M7a0JBQU1DO2dCQUFFLElBQUFMLE9BQUFNO0FBQ25CMUIseUJBQVNBLE9BQU8yQixJQUFLQyxhQUFZO0FBQ2hDLHlCQUFPQSxZQUFZSixPQUFPQyxLQUFLRztnQkFDaEMsQ0FBQztjQUNGO1lBQUEsU0FBQUMsS0FBQTtBQUFBWCx5QkFBQVksRUFBQUQsR0FBQTtZQUFBLFVBQUE7QUFBQVgseUJBQUFhLEVBQUE7WUFBQTtVQUNEO0FBR0EsY0FBSXpCLFNBQVMsT0FBTyxFQUFFMEIsT0FBTztBQUFBLGdCQUFBQyxhQUFBZCwyQkFDUmIsU0FBUyxPQUFPLEVBQUUwQixLQUFBLEdBQUFFO0FBQUEsZ0JBQUE7QUFBdEMsbUJBQUFELFdBQUFaLEVBQUEsR0FBQSxFQUFBYSxTQUFBRCxXQUFBWCxFQUFBLEdBQUFDLFFBQTZDO0FBQUEsc0JBQWxDWSxRQUFBRCxPQUFBUjtBQUNWLHNCQUFNbkUsUUFBUTRFLE1BQU01RTtBQUVwQixvQkFBSSxDQUFDNEUsTUFBTUMsU0FBUztBQUNuQjtnQkFDRDtBQUVBLG9CQUFJL0QsVUFBVTtBQUNiLHdCQUFNTCxXQUFXVCxPQUFPLFdBQVdjLFFBQVE7Z0JBQzVDO0FBQ0Esc0JBQU1MLFdBQVdULE9BQU8sVUFBVWMsUUFBUTtjQUMzQztZQUFBLFNBQUF3RCxLQUFBO0FBQUFJLHlCQUFBSCxFQUFBRCxHQUFBO1lBQUEsVUFBQTtBQUFBSSx5QkFBQUYsRUFBQTtZQUFBO1VBQ0Q7QUFHQSxjQUFJekIsU0FBUyxPQUFPLEVBQUVELFdBQVc7QUFBQSxnQkFBQWdDLGFBQUFsQiwyQkFDYmIsU0FBUyxPQUFPLEVBQUVELFNBQUEsR0FBQWlDO0FBQUEsZ0JBQUE7QUFBckMsbUJBQUFELFdBQUFoQixFQUFBLEdBQUEsRUFBQWlCLFNBQUFELFdBQUFmLEVBQUEsR0FBQUMsUUFBZ0Y7QUFBQSxzQkFBckU7a0JBQUNFO2dCQUFFLElBQUFhLE9BQUFaO0FBQ2JWLG9CQUFJQSxJQUFJRixNQUFNLElBQUlXO2NBQ25CO1lBQUEsU0FBQUksS0FBQTtBQUFBUSx5QkFBQVAsRUFBQUQsR0FBQTtZQUFBLFVBQUE7QUFBQVEseUJBQUFOLEVBQUE7WUFBQTtVQUNEO1FBQ0Q7QUFHQSxZQUFJMUQsVUFBVTtBQUViLGdCQUFNa0UsWUFBQSxNQUFrQnpDLGVBQWVFLE1BQU07QUFDN0MsY0FBSXVDLFVBQVUsT0FBTyxHQUFHO0FBRXZCLGdCQUFJQSxVQUFVLE9BQU8sRUFBRXRCLFlBQVk7QUFBQSxrQkFBQXVCLGFBQUFyQiwyQkFDVG9CLFVBQVUsT0FBTyxFQUFFdEIsVUFBQSxHQUFBd0I7QUFBQSxrQkFBQTtBQUE1QyxxQkFBQUQsV0FBQW5CLEVBQUEsR0FBQSxFQUFBb0IsU0FBQUQsV0FBQWxCLEVBQUEsR0FBQUMsUUFBd0Y7QUFBQSx3QkFBN0U7b0JBQUNDO29CQUFNQztrQkFBRSxJQUFBZ0IsT0FBQWY7QUFDbkIxQiwyQkFBU0EsT0FBTzJCLElBQUtDLGFBQVk7QUFDaEMsMkJBQU9BLFlBQVlKLE9BQU9DLEtBQUtHO2tCQUNoQyxDQUFDO2dCQUNGO2NBQUEsU0FBQUMsS0FBQTtBQUFBVywyQkFBQVYsRUFBQUQsR0FBQTtjQUFBLFVBQUE7QUFBQVcsMkJBQUFULEVBQUE7Y0FBQTtZQUNEO0FBR0EsZ0JBQUlRLFVBQVUsT0FBTyxFQUFFUCxPQUFPO0FBQUEsa0JBQUFVLGFBQUF2QiwyQkFDVG9CLFVBQVUsT0FBTyxFQUFFUCxLQUFBLEdBQUFXO0FBQUEsa0JBQUE7QUFBdkMscUJBQUFELFdBQUFyQixFQUFBLEdBQUEsRUFBQXNCLFNBQUFELFdBQUFwQixFQUFBLEdBQUFDLFFBQThDO0FBQUEsd0JBQW5DcUIsUUFBQUQsT0FBQWpCO0FBQ1Ysd0JBQU1uRSxRQUFRcUYsTUFBTXJGO0FBRXBCLHNCQUFJcUYsTUFBTVIsV0FBV1EsTUFBTUMsVUFBVTtBQUNwQztrQkFDRDtBQUVBLHNCQUFJRCxNQUFNRSxtQkFBbUJGLE1BQU1FLG9CQUFvQixTQUFTO0FBQy9ELDBCQUFNM0QsV0FBVzVCLE9BQU9xRixNQUFNRyxVQUFVLENBQUMsRUFBRXpELEdBQWE7a0JBQ3pEO2dCQUNEO2NBQUEsU0FBQXVDLEtBQUE7QUFBQWEsMkJBQUFaLEVBQUFELEdBQUE7Y0FBQSxVQUFBO0FBQUFhLDJCQUFBWCxFQUFBO2NBQUE7WUFDRDtBQUVBLGdCQUFJUSxVQUFVLE9BQU8sRUFBRWxDLFdBQVc7QUFBQSxrQkFBQTJDLGFBQUE3QiwyQkFDZG9CLFVBQVUsT0FBTyxFQUFFbEMsU0FBQSxHQUFBNEM7QUFBQSxrQkFBQTtBQUF0QyxxQkFBQUQsV0FBQTNCLEVBQUEsR0FBQSxFQUFBNEIsU0FBQUQsV0FBQTFCLEVBQUEsR0FBQUMsUUFBaUY7QUFBQSx3QkFBdEU7b0JBQUNFO2tCQUFFLElBQUF3QixPQUFBdkI7QUFDYlYsc0JBQUlBLElBQUlGLE1BQU0sSUFBSVc7Z0JBQ25CO2NBQUEsU0FBQUksS0FBQTtBQUFBbUIsMkJBQUFsQixFQUFBRCxHQUFBO2NBQUEsVUFBQTtBQUFBbUIsMkJBQUFqQixFQUFBO2NBQUE7WUFDRDtVQUNEO1FBQ0Q7QUFJQSxZQUFJZixJQUFJRixRQUFRO0FBQ2YsZ0JBQU1yRSxxQkFBcUJ1RSxHQUFHO1FBQy9CO01BQ0QsQ0FBQTtJQUNEO0FBRUEsYUFBQWtDLEtBQUEsR0FBQUMsWUFBc0J2QyxVQUFBc0MsS0FBQUMsVUFBQXJDLFFBQUFvQyxNQUFVO0FBQWhDLFlBQVdFLFVBQUFELFVBQUFELEVBQUE7QUFDVixZQUFNRSxRQUFRO0lBQ2Y7RUFDRCxDQUFBO0FBQUEsU0FBQSxTQWhHTTNHLHNCQUFBNEcsS0FBQTtBQUFBLFdBQUE1QyxNQUFBeEIsTUFBQSxNQUFBQyxTQUFBO0VBQUE7QUFBQSxFQUFBOztDSHZHTCxTQUFTb0UsY0FBb0I7QUFDN0IsUUFBTTtJQUFDQztJQUFtQkM7SUFBWUM7RUFBUSxJQUFJNUYsR0FBRzZGLE9BQU9DLElBQUk7QUFFaEUsUUFBTUMsc0JBQXNCQyxTQUFTQyxpQkFBaUIsOENBQThDO0FBQ3BHLFFBQU1DLGdCQUFnQkYsU0FBU0MsaUJBQWlCLGlCQUFpQjtBQUVqRSxRQUFNekYsV0FBb0JrRixzQkFBc0I7QUFDaEQsUUFBTVMscUJBQThCLENBQUMsQ0FBQ0gsU0FBU0ksY0FBYyxtQkFBbUI7QUFDaEYsUUFBTTdGLFdBQW1Cd0Ysb0JBQW9COUMsU0FBUyxXQUFXO0FBRWpFLFFBQU1vRCxRQUFnQjdGLFlBQVksQ0FBQzJGLHFCQUFxQjVGLFdBQVc7QUFDbkUsUUFBTStGLGNBQXNCOUYsV0FDekI2RixRQUFBLE1BQUFoSCxPQUNPZ0gsT0FBSyxHQUFBLElBQ1gsT0FDREgsY0FBY2pELFNBQ2IsVUFDQTtBQUVKLE1BQUsyQyxhQUFhLG1CQUFtQnBGLFlBQWFrRixvQkFBb0IsR0FBRztBQUN4RTtFQUNEO0FBRUEsUUFBTWEsWUFBbUNQLFNBQVNJLGNBQWMsYUFBYSxJQUFJLGVBQWU7QUFDaEcsUUFBTXJDLFVBQWdDL0QsR0FBR0MsS0FBS3VHLGVBQWVELFdBQVcsS0FBQSxLQUFBbEgsT0FBVWlILFdBQVcsR0FBSSxVQUFVO0FBQzNHLE1BQUksQ0FBQ3ZDLFNBQVM7QUFDYjtFQUNEO0FBRUFBLFVBQVEwQyxpQkFBaUIsU0FBUyxNQUFZO0FBQzdDLFNBQUFwRyxrQkFBTSxhQUFZO0FBQUEsVUFBQXFHO0FBQ2pCLFlBQU1wRyxhQUFtQm9HLGtCQUFBUixjQUFjLENBQUMsT0FBQSxRQUFBUSxvQkFBQSxTQUFBLFNBQWZBLGdCQUFrQkMsZ0JBQWVoQjtBQUMxRCxZQUFNL0cscUJBQXFCMEIsVUFBVUUsUUFBUTtJQUM5QyxDQUFBLEVBQUcsRUFBRW9HLEtBQUssTUFBTTtBQUNmL0gsa0JBQVk4RyxVQUFVO0lBQ3ZCLENBQUM7RUFDRixDQUFDO0FBQ0YsR0FBRzsiLAogICJuYW1lcyI6IFsiUXVpY2tJbXBvcnRfZXhwb3J0cyIsICJfX2V4cG9ydCIsICJhcGkiLCAiZGV0ZWN0SWZGaWxlUmVkaXJlY3QiLCAicmVmcmVzaFBhZ2UiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAiX190b0NvbW1vbkpTIiwgInZlcnNpb24iLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAicmVxdWlyZSIsICJpbml0TXdBcGkiLCAiY29uY2F0IiwgImltcG9ydF9leHRfZ2FkZ2V0MiIsICJpbXBvcnRfZXh0X2dhZGdldDMiLCAidG9hc3RpZnlJbnN0YW5jZSIsICJoaWRlVG9hc3QiLCAidGl0bGUiLCAidG9hc3RpZnkiLCAidGV4dCIsICJkdXJhdGlvbiIsICJsb2NhdGlvbiIsICJyZXBsYWNlIiwgIm13IiwgInV0aWwiLCAiZ2V0VXJsIiwgImltcG9ydFBhZ2UiLCAiX3JlZiIsICJfYXN5bmNUb0dlbmVyYXRvciIsICJwYWdlTmFtZSIsICJpd3ByZWZpeCIsICJpc0ZpbGVOUyIsICJzdW1tYXJ5IiwgInBhcmFtcyIsICJhY3Rpb24iLCAiZm9ybWF0IiwgImFzc2lnbmtub3dudXNlcnMiLCAiaW50ZXJ3aWtpcGFnZSIsICJpbnRlcndpa2lwcmVmaXgiLCAiaW50ZXJ3aWtpc291cmNlIiwgInBvc3RXaXRoRWRpdFRva2VuIiwgIl94IiwgIl94MiIsICJhcHBseSIsICJhcmd1bWVudHMiLCAidXBsb2FkRmlsZSIsICJfcmVmMiIsICJ0YXJnZXQiLCAidXJsIiwgInVwbG9hZFBhcmFtcyIsICJyYXd1cmxlbmNvZGUiLCAiZmlsZW5hbWUiLCAiY29tbWVudCIsICJpZ25vcmV3YXJuaW5ncyIsICJfeDMiLCAiX3g0IiwgInF1ZXJ5SW1hZ2VJbmZvIiwgIl9yZWYzIiwgInRpdGxlcyIsICJxdWVyeVBhcmFtcyIsICJmb3JtYXR2ZXJzaW9uIiwgInByb3AiLCAiaWlwcm9wIiwgInJlZGlyZWN0cyIsICJyZXNwb25zZSIsICJwb3N0IiwgIl94NSIsICJfcmVmNCIsICJwYWdlTmFtZXMiLCAiZ2VuZXJhdGVBcnJheSIsICJwcm9taXNlcyIsICJpIiwgImxlbmd0aCIsICJzcGxpY2UiLCAidG9zIiwgIm5vcm1hbGl6ZWQiLCAiX2l0ZXJhdG9yMiIsICJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsICJfc3RlcDIiLCAicyIsICJuIiwgImRvbmUiLCAiZnJvbSIsICJ0byIsICJ2YWx1ZSIsICJtYXAiLCAiZWxlbWVudCIsICJlcnIiLCAiZSIsICJmIiwgInBhZ2VzIiwgIl9pdGVyYXRvcjMiLCAiX3N0ZXAzIiwgInBhZ2UxIiwgIm1pc3NpbmciLCAiX2l0ZXJhdG9yNCIsICJfc3RlcDQiLCAicmVzcG9uc2UyIiwgIl9pdGVyYXRvcjUiLCAiX3N0ZXA1IiwgIl9pdGVyYXRvcjYiLCAiX3N0ZXA2IiwgInBhZ2UyIiwgInJlZGlyZWN0IiwgImltYWdlcmVwb3NpdG9yeSIsICJpbWFnZWluZm8iLCAiX2l0ZXJhdG9yNyIsICJfc3RlcDciLCAiX2kiLCAiX3Byb21pc2VzIiwgInByb21pc2UiLCAiX3g2IiwgInF1aWNrSW1wb3J0IiwgIndnTmFtZXNwYWNlTnVtYmVyIiwgIndnUGFnZU5hbWUiLCAid2dXaWtpSUQiLCAiY29uZmlnIiwgImdldCIsICJjYVZpZXdGb3JlaWduWmh3aWtpIiwgImRvY3VtZW50IiwgInF1ZXJ5U2VsZWN0b3JBbGwiLCAicmVkaXJlY3RUZXh0QSIsICJoYXNNd05vYXJ0aWNsZXRleHQiLCAicXVlcnlTZWxlY3RvciIsICJsYWJlbCIsICJidXR0b25MYWJlbCIsICJwb3J0bGV0SWQiLCAiYWRkUG9ydGxldExpbmsiLCAiYWRkRXZlbnRMaXN0ZW5lciIsICJfcmVkaXJlY3RUZXh0QSQiLCAidGV4dENvbnRlbnQiLCAidGhlbiJdCn0K

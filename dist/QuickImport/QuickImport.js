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
    pageNames = (0, import_ext_gadget2.uniqueArray)((0, import_ext_gadget2.generateArray)(pageNames));
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1F1aWNrSW1wb3J0L1F1aWNrSW1wb3J0LnRzIiwgInNyYy9RdWlja0ltcG9ydC9tb2R1bGVzL2NvcmUudHMiLCAic3JjL1F1aWNrSW1wb3J0L29wdGlvbnMuanNvbiIsICJzcmMvUXVpY2tJbXBvcnQvbW9kdWxlcy9hcGkudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7ZGV0ZWN0SWZGaWxlUmVkaXJlY3QsIHJlZnJlc2hQYWdlfSBmcm9tICcuL21vZHVsZXMvY29yZSc7XG5cbihmdW5jdGlvbiBxdWlja0ltcG9ydCgpOiB2b2lkIHtcblx0Y29uc3Qge3dnTmFtZXNwYWNlTnVtYmVyLCB3Z1BhZ2VOYW1lLCB3Z1dpa2lJRH0gPSBtdy5jb25maWcuZ2V0KCk7XG5cblx0Y29uc3QgY2FWaWV3Rm9yZWlnblpod2lraSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIjY2Etdmlldy1mb3JlaWduIGFbaHJlZio9J3poLndpa2lwZWRpYS5vcmcnXVwiKTtcblx0Y29uc3QgcmVkaXJlY3RUZXh0QSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5yZWRpcmVjdFRleHQgYScpO1xuXG5cdGNvbnN0IGlzRmlsZU5TOiBib29sZWFuID0gd2dOYW1lc3BhY2VOdW1iZXIgPT09IDY7XG5cdGNvbnN0IGhhc013Tm9hcnRpY2xldGV4dDogYm9vbGVhbiA9ICEhZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI213LW5vYXJ0aWNsZXRleHQnKTtcblx0Y29uc3QgaXdwcmVmaXg6IHN0cmluZyA9IGNhVmlld0ZvcmVpZ25aaHdpa2kubGVuZ3RoID8gJ3pod2lraScgOiAnY29tbW9ucyc7XG5cblx0Y29uc3QgbGFiZWw6IHN0cmluZyA9IGlzRmlsZU5TICYmICFoYXNNd05vYXJ0aWNsZXRleHQgPyBpd3ByZWZpeCA6ICcnO1xuXHRjb25zdCBidXR0b25MYWJlbDogc3RyaW5nID0gaXNGaWxlTlNcblx0XHQ/IGxhYmVsXG5cdFx0XHQ/IGDmlofku7bvvIgke2xhYmVsfe+8iWBcblx0XHRcdDogJ+mhtemdoidcblx0XHQ6IHJlZGlyZWN0VGV4dEEubGVuZ3RoXG5cdFx0XHQ/ICfph43lrprlkJHnm67moIcnXG5cdFx0XHQ6ICfpobXpnaInO1xuXG5cdGlmICgod2dXaWtpSUQgIT09ICd6aHFpdXdlbmJhaWtlJyAmJiBpc0ZpbGVOUykgfHwgd2dOYW1lc3BhY2VOdW1iZXIgPCAwKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgcG9ydGxldElkOiAncC1jYWN0aW9ucycgfCAncC10YicgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcC1jYWN0aW9ucycpID8gJ3AtY2FjdGlvbnMnIDogJ3AtdGInO1xuXHRjb25zdCBlbGVtZW50OiBIVE1MTElFbGVtZW50IHwgbnVsbCA9IG13LnV0aWwuYWRkUG9ydGxldExpbmsocG9ydGxldElkLCAnIycsIGDlr7zlhaUke2J1dHRvbkxhYmVsfWAsICd0LWltcG9ydCcpO1xuXHRpZiAoIWVsZW1lbnQpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk6IHZvaWQgPT4ge1xuXHRcdHZvaWQgKGFzeW5jICgpID0+IHtcblx0XHRcdGNvbnN0IHBhZ2VOYW1lOiBzdHJpbmcgPSByZWRpcmVjdFRleHRBWzBdPy50ZXh0Q29udGVudCB8fCB3Z1BhZ2VOYW1lO1xuXHRcdFx0YXdhaXQgZGV0ZWN0SWZGaWxlUmVkaXJlY3QocGFnZU5hbWUsIGlzRmlsZU5TKTtcblx0XHR9KSgpLnRoZW4oKCkgPT4ge1xuXHRcdFx0cmVmcmVzaFBhZ2Uod2dQYWdlTmFtZSk7XG5cdFx0fSk7XG5cdH0pO1xufSkoKTtcblxuZXhwb3J0IHthcGl9IGZyb20gJy4vbW9kdWxlcy9hcGknO1xuZXhwb3J0IHtkZXRlY3RJZkZpbGVSZWRpcmVjdCwgcmVmcmVzaFBhZ2V9IGZyb20gJy4vbW9kdWxlcy9jb3JlJztcbiIsICJpbXBvcnQge2dlbmVyYXRlQXJyYXksIHVuaXF1ZUFycmF5fSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuaW1wb3J0IHthcGl9IGZyb20gJy4vYXBpJztcbmltcG9ydCB7dG9hc3RpZnl9IGZyb20gJ2V4dC5nYWRnZXQuVG9hc3RpZnknO1xuXG50eXBlIERldGVjdElmRmlsZVJlZGlyZWN0ID0gKHBhZ2VOYW1lczogc3RyaW5nIHwgc3RyaW5nW10sIGlzRmlsZU5TPzogYm9vbGVhbikgPT4gUHJvbWlzZTx2b2lkPjtcbnR5cGUgUmVmcmVzaFBhZ2UgPSAodGl0bGU/OiBzdHJpbmcpID0+IHZvaWQ7XG5cbmxldCB0b2FzdGlmeUluc3RhbmNlOiBUb2FzdGlmeUluc3RhbmNlID0ge1xuXHRoaWRlVG9hc3Q6ICgpID0+IHt9LFxufTtcblxuY29uc3QgcmVmcmVzaFBhZ2U6IFJlZnJlc2hQYWdlID0gKHRpdGxlKSA9PiB7XG5cdHRvYXN0aWZ5SW5zdGFuY2UuaGlkZVRvYXN0KCk7XG5cdHRvYXN0aWZ5KFxuXHRcdHtcblx0XHRcdHRleHQ6ICfmraPlnKjliLfmlrDpobXpnaInLFxuXHRcdFx0ZHVyYXRpb246IC0xLFxuXHRcdH0sXG5cdFx0J2luZm8nXG5cdCk7XG5cblx0aWYgKHRpdGxlKSB7XG5cdFx0bG9jYXRpb24ucmVwbGFjZShtdy51dGlsLmdldFVybCh0aXRsZSkpO1xuXHR9IGVsc2Uge1xuXHRcdGxvY2F0aW9uLnJlbG9hZCgpO1xuXHR9XG59O1xuXG5jb25zdCBpbXBvcnRQYWdlID0gYXN5bmMgKHBhZ2VOYW1lOiBzdHJpbmcsIGl3cHJlZml4OiBzdHJpbmcsIGlzRmlsZU5TOiBib29sZWFuID0gZmFsc2UpOiBQcm9taXNlPGJvb2xlYW4+ID0+IHtcblx0dG9hc3RpZnlJbnN0YW5jZS5oaWRlVG9hc3QoKTtcblx0dG9hc3RpZnlJbnN0YW5jZSA9IHRvYXN0aWZ5KFxuXHRcdHtcblx0XHRcdHRleHQ6IGDlr7zlhaXpobXpnaLkuK3vvJoke2l3cHJlZml4fToke3BhZ2VOYW1lfWAsXG5cdFx0XHRkdXJhdGlvbjogLTEsXG5cdFx0fSxcblx0XHQnaW5mbydcblx0KTtcblxuXHRsZXQgc3VtbWFyeTogc3RyaW5nID0gJ+mhtemdouaWh+Wtl+WOn+iuuOWPr++8mltbY2MtYnktc2E6NC4wfENDIEJZLVNBIDQuMF1d77yb5L2c6ICF6K+35Y+C6KeB5p2l5rqQ6aG16Z2i5Y6G5Y+yJztcblx0aWYgKGlzRmlsZU5TKSB7XG5cdFx0c3VtbWFyeSArPSAn77yb5paH5Lu25L2c6ICF6K+35Y+C6KeB5q2k6aG16Z2i5Y+K5p2l5rqQ6aG16Z2i6K6w6L29Jztcblx0fVxuXG5cdGNvbnN0IHBhcmFtczogQXBpSW1wb3J0UGFyYW1zID0ge1xuXHRcdGFjdGlvbjogJ2ltcG9ydCcsXG5cdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0YXNzaWdua25vd251c2VyczogdHJ1ZSxcblx0XHRpbnRlcndpa2lwYWdlOiBwYWdlTmFtZSxcblx0XHRpbnRlcndpa2lwcmVmaXg6IGl3cHJlZml4LFxuXHRcdGludGVyd2lraXNvdXJjZTogaXdwcmVmaXgsXG5cdFx0c3VtbWFyeTogYO+8uyR7c3VtbWFyeX3vvL1gLFxuXHR9O1xuXHRjb25zdCByZXN1bHQgPSBhd2FpdCBhcGkucG9zdFdpdGhFZGl0VG9rZW4ocGFyYW1zKTtcblxuXHRpZiAocmVzdWx0WydpbXBvcnQnXSAmJiByZXN1bHRbJ2ltcG9ydCddWzBdICYmIHJlc3VsdFsnaW1wb3J0J10ucmV2aXNpb25zKSB7XG5cdFx0dG9hc3RpZnlJbnN0YW5jZS5oaWRlVG9hc3QoKTtcblx0XHR0b2FzdGlmeUluc3RhbmNlID0gdG9hc3RpZnkoXG5cdFx0XHR7XG5cdFx0XHRcdHRleHQ6IGDpobXpnaLlr7zlhaXlrozmiJDvvJoke3BhZ2VOYW1lfWAsXG5cdFx0XHRcdGR1cmF0aW9uOiAzICogMTAwMCxcblx0XHRcdH0sXG5cdFx0XHQnc3VjY2Vzcydcblx0XHQpO1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cblx0dG9hc3RpZnlJbnN0YW5jZS5oaWRlVG9hc3QoKTtcblx0dG9hc3RpZnlJbnN0YW5jZSA9IHRvYXN0aWZ5KFxuXHRcdHtcblx0XHRcdHRleHQ6IGDpobXpnaLlr7zlhaXlpLHotKXvvJoke2l3cHJlZml4fToke3BhZ2VOYW1lfWAsXG5cdFx0XHRkdXJhdGlvbjogMyAqIDEwMDAsXG5cdFx0fSxcblx0XHQnd2FybmluZydcblx0KTtcblx0cmV0dXJuIGZhbHNlO1xufTtcblxuY29uc3QgdXBsb2FkRmlsZSA9IGFzeW5jICh0YXJnZXQ6IHN0cmluZywgdXJsPzogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiA9PiB7XG5cdHRvYXN0aWZ5SW5zdGFuY2UuaGlkZVRvYXN0KCk7XG5cdHRvYXN0aWZ5SW5zdGFuY2UgPSB0b2FzdGlmeShcblx0XHR7XG5cdFx0XHR0ZXh0OiBg6L+B56e75paH5Lu25Lit77yaJHt0YXJnZXR9YCxcblx0XHRcdGR1cmF0aW9uOiAtMSxcblx0XHR9LFxuXHRcdCdpbmZvJ1xuXHQpO1xuXG5cdGNvbnN0IHBhcmFtczogQXBpVXBsb2FkUGFyYW1zID0ge1xuXHRcdHVybDogdXJsID8/IGBodHRwczovL3poLndpa2lwZWRpYS5vcmcvd2lraS9TcGVjaWFsOlJlZGlyZWN0L2ZpbGUvJHttdy51dGlsLnJhd3VybGVuY29kZSh0YXJnZXQpfWAsXG5cdFx0YWN0aW9uOiAndXBsb2FkJyxcblx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRmaWxlbmFtZTogdGFyZ2V0LFxuXHRcdGNvbW1lbnQ6ICfoh6rlhbbku5bnvZHnq5nov4Hnp7vmlofku7YnLFxuXHRcdGlnbm9yZXdhcm5pbmdzOiB0cnVlLFxuXHR9O1xuXHRhd2FpdCBhcGkucG9zdFdpdGhFZGl0VG9rZW4ocGFyYW1zKTtcblxuXHR0b2FzdGlmeUluc3RhbmNlLmhpZGVUb2FzdCgpO1xuXHR0b2FzdGlmeUluc3RhbmNlID0gdG9hc3RpZnkoXG5cdFx0e1xuXHRcdFx0dGV4dDogYOaWh+S7tui/geenu+WujOaIkO+8miR7dGFyZ2V0fWAsXG5cdFx0XHRkdXJhdGlvbjogMyAqIDEwMDAsXG5cdFx0fSxcblx0XHQnc3VjY2Vzcydcblx0KTtcbn07XG5cbmNvbnN0IHF1ZXJ5SW1hZ2VJbmZvID0gYXN5bmMgKHRpdGxlczogc3RyaW5nIHwgc3RyaW5nW10pID0+IHtcblx0Y29uc3QgcGFyYW1zOiBBcGlRdWVyeUluZm9QYXJhbXMgJiBBcGlRdWVyeUltYWdlSW5mb1BhcmFtcyA9IHtcblx0XHR0aXRsZXMsXG5cdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRwcm9wOiBbJ2ltYWdlaW5mbycsICdpbmZvJ10sXG5cdFx0aWlwcm9wOiBbJ3VybCddLFxuXHRcdHJlZGlyZWN0czogdHJ1ZSxcblx0fTtcblx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGkucG9zdChwYXJhbXMpO1xuXG5cdHJldHVybiByZXNwb25zZTtcbn07XG5cbmNvbnN0IGRldGVjdElmRmlsZVJlZGlyZWN0OiBEZXRlY3RJZkZpbGVSZWRpcmVjdCA9IGFzeW5jIChwYWdlTmFtZXMsIGlzRmlsZU5TID0gZmFsc2UpID0+IHtcblx0cGFnZU5hbWVzID0gdW5pcXVlQXJyYXkoZ2VuZXJhdGVBcnJheShwYWdlTmFtZXMpKTtcblx0Y29uc3QgcHJvbWlzZXM6ICgoKSA9PiBQcm9taXNlPHZvaWQ+KVtdID0gW107XG5cblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBwYWdlTmFtZXMubGVuZ3RoOyBpKyspIHtcblx0XHRsZXQgdGl0bGVzID0gcGFnZU5hbWVzLnNwbGljZSgwLCA1MCk7XG5cdFx0aWYgKCF0aXRsZXMubGVuZ3RoKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRwcm9taXNlc1twcm9taXNlcy5sZW5ndGhdID0gYXN5bmMgKCk6IFByb21pc2U8dm9pZD4gPT4ge1xuXHRcdFx0Ly8gUmVkaXJlY3QgdGFyZ2V0KHMpXG5cdFx0XHRjb25zdCB0b3M6IHN0cmluZ1tdID0gW107XG5cblx0XHRcdC8vIEFuYWx5emUgc3RlcCAxOiBpbXBvcnQgcGFnZXMgaXRzZWxmXG5cdFx0XHQvLy8vIFF1ZXJ5XG5cdFx0XHRjb25zdCByZXNwb25zZSA9IGF3YWl0IHF1ZXJ5SW1hZ2VJbmZvKHRpdGxlcyk7XG5cdFx0XHRpZiAocmVzcG9uc2VbJ3F1ZXJ5J10pIHtcblx0XHRcdFx0Ly8vLyBOb3JtYWxpemVcblx0XHRcdFx0aWYgKHJlc3BvbnNlWydxdWVyeSddLm5vcm1hbGl6ZWQpIHtcblx0XHRcdFx0XHRmb3IgKGNvbnN0IHtmcm9tLCB0b30gb2YgcmVzcG9uc2VbJ3F1ZXJ5J10ubm9ybWFsaXplZCBhcyB7ZnJvbTogc3RyaW5nOyB0bzogc3RyaW5nfVtdKSB7XG5cdFx0XHRcdFx0XHR0aXRsZXMgPSB0aXRsZXMubWFwKChlbGVtZW50KSA9PiB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBlbGVtZW50ID09PSBmcm9tID8gdG8gOiBlbGVtZW50O1xuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8vLyBJbXBvcnRcblx0XHRcdFx0aWYgKHJlc3BvbnNlWydxdWVyeSddLnBhZ2VzKSB7XG5cdFx0XHRcdFx0Zm9yIChjb25zdCBwYWdlMSBvZiByZXNwb25zZVsncXVlcnknXS5wYWdlcykge1xuXHRcdFx0XHRcdFx0Y29uc3QgdGl0bGUgPSBwYWdlMS50aXRsZSBhcyBzdHJpbmc7XG5cblx0XHRcdFx0XHRcdGlmICghcGFnZTEubWlzc2luZykge1xuXHRcdFx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0bGV0IGlmSW1wb3J0U3VjY2VzcyA9IGZhbHNlO1xuXHRcdFx0XHRcdFx0aWYgKGlzRmlsZU5TKSB7XG5cdFx0XHRcdFx0XHRcdGlmSW1wb3J0U3VjY2VzcyA9IGF3YWl0IGltcG9ydFBhZ2UodGl0bGUsICdjb21tb25zJywgaXNGaWxlTlMpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0aWYgKCFpZkltcG9ydFN1Y2Nlc3MpIHtcblx0XHRcdFx0XHRcdFx0YXdhaXQgaW1wb3J0UGFnZSh0aXRsZSwgJ3pod2lraScsIGlzRmlsZU5TKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLy8vIFB1c2ggcmVkaXJlY3QgdGFyZ2V0cyBpbnRvIGFycmF5XG5cdFx0XHRcdGlmIChyZXNwb25zZVsncXVlcnknXS5yZWRpcmVjdHMpIHtcblx0XHRcdFx0XHRmb3IgKGNvbnN0IHt0b30gb2YgcmVzcG9uc2VbJ3F1ZXJ5J10ucmVkaXJlY3RzIGFzIHtmcm9tOiBzdHJpbmc7IHRvOiBzdHJpbmd9W10pIHtcblx0XHRcdFx0XHRcdHRvc1t0b3MubGVuZ3RoXSA9IHRvO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQvLyBBbmFseXplIHN0ZXAgMjogZm9yIGZpbGVzLCBjaGVjayBpZiBpdCBpcyBhIHJlZGlyZWN0XG5cdFx0XHRpZiAoaXNGaWxlTlMpIHtcblx0XHRcdFx0Ly8vLyBRdWVyeVxuXHRcdFx0XHRjb25zdCByZXNwb25zZTIgPSBhd2FpdCBxdWVyeUltYWdlSW5mbyh0aXRsZXMpO1xuXHRcdFx0XHRpZiAocmVzcG9uc2UyWydxdWVyeSddKSB7XG5cdFx0XHRcdFx0Ly8vLyBOb3JtYWxpemVcblx0XHRcdFx0XHRpZiAocmVzcG9uc2UyWydxdWVyeSddLm5vcm1hbGl6ZWQpIHtcblx0XHRcdFx0XHRcdGZvciAoY29uc3Qge2Zyb20sIHRvfSBvZiByZXNwb25zZTJbJ3F1ZXJ5J10ubm9ybWFsaXplZCBhcyB7ZnJvbTogc3RyaW5nOyB0bzogc3RyaW5nfVtdKSB7XG5cdFx0XHRcdFx0XHRcdHRpdGxlcyA9IHRpdGxlcy5tYXAoKGVsZW1lbnQpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gZWxlbWVudCA9PT0gZnJvbSA/IHRvIDogZWxlbWVudDtcblx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Ly8vLyB1cGxvYWRcblx0XHRcdFx0XHRpZiAocmVzcG9uc2UyWydxdWVyeSddLnBhZ2VzKSB7XG5cdFx0XHRcdFx0XHRmb3IgKGNvbnN0IHBhZ2UyIG9mIHJlc3BvbnNlMlsncXVlcnknXS5wYWdlcykge1xuXHRcdFx0XHRcdFx0XHRjb25zdCB0aXRsZSA9IHBhZ2UyLnRpdGxlIGFzIHN0cmluZztcblxuXHRcdFx0XHRcdFx0XHRpZiAocGFnZTIubWlzc2luZyB8fCBwYWdlMi5yZWRpcmVjdCkge1xuXHRcdFx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0aWYgKHBhZ2UyLmltYWdlcmVwb3NpdG9yeSAmJiBwYWdlMi5pbWFnZXJlcG9zaXRvcnkgIT09ICdsb2NhbCcpIHtcblx0XHRcdFx0XHRcdFx0XHRhd2FpdCB1cGxvYWRGaWxlKHRpdGxlLCBwYWdlMi5pbWFnZWluZm9bMF0udXJsIGFzIHN0cmluZyk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRpZiAocmVzcG9uc2UyWydxdWVyeSddLnJlZGlyZWN0cykge1xuXHRcdFx0XHRcdFx0Zm9yIChjb25zdCB7dG99IG9mIHJlc3BvbnNlMlsncXVlcnknXS5yZWRpcmVjdHMgYXMge2Zyb206IHN0cmluZzsgdG86IHN0cmluZ31bXSkge1xuXHRcdFx0XHRcdFx0XHR0b3NbdG9zLmxlbmd0aF0gPSB0bztcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Ly8gQW5hbHl6ZSBzdGVwIDM6IGltcG9ydCBwYWdlcyBhcyByZWRpcmVjdCB0YXJnZXRcblx0XHRcdC8vLy8gUXVldWUgcmVxdWVzdHMgdG8gaW1wb3J0IHJlZGlyZWN0IHRhcmdldHNcblx0XHRcdGlmICh0b3MubGVuZ3RoKSB7XG5cdFx0XHRcdGF3YWl0IGRldGVjdElmRmlsZVJlZGlyZWN0KHVuaXF1ZUFycmF5KHRvcykpOyAvLyBSZXBsYWNlIGBbLi4ubmV3IFNldCgpXWAgdG8gYXZvaWQgcG9seWZpbGxpbmcgY29yZS1qc1xuXHRcdFx0fVxuXHRcdH07XG5cdH1cblxuXHRmb3IgKGNvbnN0IHByb21pc2Ugb2YgcHJvbWlzZXMpIHtcblx0XHR0cnkge1xuXHRcdFx0YXdhaXQgcHJvbWlzZSgpO1xuXHRcdH0gY2F0Y2gge31cblx0fVxufTtcblxuZXhwb3J0IHt0eXBlIERldGVjdElmRmlsZVJlZGlyZWN0LCBkZXRlY3RJZkZpbGVSZWRpcmVjdCwgdHlwZSBSZWZyZXNoUGFnZSwgcmVmcmVzaFBhZ2V9O1xuIiwgIntcblx0XCJ2ZXJzaW9uXCI6IFwiMi4wXCJcbn1cbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge2luaXRNd0FwaX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxuY29uc3QgYXBpOiBtdy5BcGkgPSBpbml0TXdBcGkoYFF1aWNrSW1wb3J0LyR7T1BUSU9OUy52ZXJzaW9ufWApO1xuXG5leHBvcnQge2FwaX07XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsc0JBQUEsQ0FBQTtBQUFBQyxTQUFBRCxxQkFBQTtFQUFBRSxLQUFBQSxNQUFBQTtFQUFBQyxzQkFBQUEsTUFBQUE7RUFBQUMsYUFBQUEsTUFBQUE7QUFBQSxDQUFBO0FBQUFDLE9BQUFDLFVBQUFDLGFBQUFQLG1CQUFBOztBQ0FBLElBQUFRLHFCQUF5Q0MsUUFBQSxpQkFBQTs7QUNDeEMsSUFBQUMsVUFBVzs7QUNBWixJQUFBQyxvQkFBd0JGLFFBQUEsaUJBQUE7QUFFeEIsSUFBTVAsT0FBQSxHQUFjUyxrQkFBQUMsV0FBQSxlQUFBQyxPQUFpQ0gsT0FBTyxDQUFFOztBRkQ5RCxJQUFBSSxxQkFBdUJMLFFBQUEscUJBQUE7QUFLdkIsSUFBSU0sbUJBQXFDO0VBQ3hDQyxX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QUFDaEQsUUFBTVMscUJBQThCLENBQUMsQ0FBQ0gsU0FBU0ksY0FBYyxtQkFBbUI7QUFDaEYsUUFBTS9GLFdBQW1CMEYsb0JBQW9CL0MsU0FBUyxXQUFXO0FBRWpFLFFBQU1xRCxRQUFnQi9GLFlBQVksQ0FBQzZGLHFCQUFxQjlGLFdBQVc7QUFDbkUsUUFBTWlHLGNBQXNCaEcsV0FDekIrRixRQUFBLE1BQUFsSCxPQUNPa0gsT0FBSyxHQUFBLElBQ1gsT0FDREgsY0FBY2xELFNBQ2IsVUFDQTtBQUVKLE1BQUs0QyxhQUFhLG1CQUFtQnRGLFlBQWFvRixvQkFBb0IsR0FBRztBQUN4RTtFQUNEO0FBRUEsUUFBTWEsWUFBbUNQLFNBQVNJLGNBQWMsYUFBYSxJQUFJLGVBQWU7QUFDaEcsUUFBTXRDLFVBQWdDakUsR0FBR0MsS0FBSzBHLGVBQWVELFdBQVcsS0FBQSxLQUFBcEgsT0FBVW1ILFdBQVcsR0FBSSxVQUFVO0FBQzNHLE1BQUksQ0FBQ3hDLFNBQVM7QUFDYjtFQUNEO0FBRUFBLFVBQVEyQyxpQkFBaUIsU0FBUyxNQUFZO0FBQzdDLFNBQUF0RyxrQkFBTSxhQUFZO0FBQUEsVUFBQXVHO0FBQ2pCLFlBQU10RyxhQUFtQnNHLGtCQUFBUixjQUFjLENBQUMsT0FBQSxRQUFBUSxvQkFBQSxTQUFBLFNBQWZBLGdCQUFrQkMsZ0JBQWVoQjtBQUMxRCxZQUFNbEgscUJBQXFCMkIsVUFBVUUsUUFBUTtJQUM5QyxDQUFBLEVBQUcsRUFBRXNHLEtBQUssTUFBTTtBQUNmbEksa0JBQVlpSCxVQUFVO0lBQ3ZCLENBQUM7RUFDRixDQUFDO0FBQ0YsR0FBRzsiLAogICJuYW1lcyI6IFsiUXVpY2tJbXBvcnRfZXhwb3J0cyIsICJfX2V4cG9ydCIsICJhcGkiLCAiZGV0ZWN0SWZGaWxlUmVkaXJlY3QiLCAicmVmcmVzaFBhZ2UiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAiX190b0NvbW1vbkpTIiwgImltcG9ydF9leHRfZ2FkZ2V0MiIsICJyZXF1aXJlIiwgInZlcnNpb24iLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAiaW5pdE13QXBpIiwgImNvbmNhdCIsICJpbXBvcnRfZXh0X2dhZGdldDMiLCAidG9hc3RpZnlJbnN0YW5jZSIsICJoaWRlVG9hc3QiLCAidGl0bGUiLCAidG9hc3RpZnkiLCAidGV4dCIsICJkdXJhdGlvbiIsICJsb2NhdGlvbiIsICJyZXBsYWNlIiwgIm13IiwgInV0aWwiLCAiZ2V0VXJsIiwgInJlbG9hZCIsICJpbXBvcnRQYWdlIiwgIl9yZWYiLCAiX2FzeW5jVG9HZW5lcmF0b3IiLCAicGFnZU5hbWUiLCAiaXdwcmVmaXgiLCAiaXNGaWxlTlMiLCAic3VtbWFyeSIsICJwYXJhbXMiLCAiYWN0aW9uIiwgImZvcm1hdCIsICJhc3NpZ25rbm93bnVzZXJzIiwgImludGVyd2lraXBhZ2UiLCAiaW50ZXJ3aWtpcHJlZml4IiwgImludGVyd2lraXNvdXJjZSIsICJyZXN1bHQiLCAicG9zdFdpdGhFZGl0VG9rZW4iLCAicmV2aXNpb25zIiwgIl94IiwgIl94MiIsICJhcHBseSIsICJhcmd1bWVudHMiLCAidXBsb2FkRmlsZSIsICJfcmVmMiIsICJ0YXJnZXQiLCAidXJsIiwgInJhd3VybGVuY29kZSIsICJmaWxlbmFtZSIsICJjb21tZW50IiwgImlnbm9yZXdhcm5pbmdzIiwgIl94MyIsICJfeDQiLCAicXVlcnlJbWFnZUluZm8iLCAiX3JlZjMiLCAidGl0bGVzIiwgImZvcm1hdHZlcnNpb24iLCAicHJvcCIsICJpaXByb3AiLCAicmVkaXJlY3RzIiwgInJlc3BvbnNlIiwgInBvc3QiLCAiX3g1IiwgIl9yZWY0IiwgInBhZ2VOYW1lcyIsICJ1bmlxdWVBcnJheSIsICJnZW5lcmF0ZUFycmF5IiwgInByb21pc2VzIiwgImkiLCAibGVuZ3RoIiwgInNwbGljZSIsICJ0b3MiLCAibm9ybWFsaXplZCIsICJfaXRlcmF0b3IyIiwgIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwgIl9zdGVwMiIsICJzIiwgIm4iLCAiZG9uZSIsICJmcm9tIiwgInRvIiwgInZhbHVlIiwgIm1hcCIsICJlbGVtZW50IiwgImVyciIsICJlIiwgImYiLCAicGFnZXMiLCAiX2l0ZXJhdG9yMyIsICJfc3RlcDMiLCAicGFnZTEiLCAibWlzc2luZyIsICJpZkltcG9ydFN1Y2Nlc3MiLCAiX2l0ZXJhdG9yNCIsICJfc3RlcDQiLCAicmVzcG9uc2UyIiwgIl9pdGVyYXRvcjUiLCAiX3N0ZXA1IiwgIl9pdGVyYXRvcjYiLCAiX3N0ZXA2IiwgInBhZ2UyIiwgInJlZGlyZWN0IiwgImltYWdlcmVwb3NpdG9yeSIsICJpbWFnZWluZm8iLCAiX2l0ZXJhdG9yNyIsICJfc3RlcDciLCAiX2kiLCAiX3Byb21pc2VzIiwgInByb21pc2UiLCAiX3g2IiwgInF1aWNrSW1wb3J0IiwgIndnTmFtZXNwYWNlTnVtYmVyIiwgIndnUGFnZU5hbWUiLCAid2dXaWtpSUQiLCAiY29uZmlnIiwgImdldCIsICJjYVZpZXdGb3JlaWduWmh3aWtpIiwgImRvY3VtZW50IiwgInF1ZXJ5U2VsZWN0b3JBbGwiLCAicmVkaXJlY3RUZXh0QSIsICJoYXNNd05vYXJ0aWNsZXRleHQiLCAicXVlcnlTZWxlY3RvciIsICJsYWJlbCIsICJidXR0b25MYWJlbCIsICJwb3J0bGV0SWQiLCAiYWRkUG9ydGxldExpbmsiLCAiYWRkRXZlbnRMaXN0ZW5lciIsICJfcmVkaXJlY3RUZXh0QSQiLCAidGV4dENvbnRlbnQiLCAidGhlbiJdCn0K

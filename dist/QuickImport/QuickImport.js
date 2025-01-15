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
      var _redirectTextA$;
      const pageName = ((_redirectTextA$ = redirectTextA[0]) === null || _redirectTextA$ === void 0 ? void 0 : _redirectTextA$.textContent) || wgPageName;
      const pageNames = [pageName];
      if (wgPageName2) {
        pageNames[pageNames.length] = wgPageName2;
      }
      if (wgPageName3) {
        pageNames[pageNames.length] = wgPageName3;
      }
      yield _detectIfFileRedirect(pageNames, isFileNS);
    })().then(() => {
      refreshPage((wgPageName3 !== null && wgPageName3 !== void 0 ? wgPageName3 : wgPageName2) !== null && (wgPageName3 !== null && wgPageName3 !== void 0 ? wgPageName3 : wgPageName2) !== void 0 ? wgPageName3 !== null && wgPageName3 !== void 0 ? wgPageName3 : wgPageName2 : wgPageName);
    });
  });
})();
window.detectIfFileRedirect = _detectIfFileRedirect;

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1F1aWNrSW1wb3J0L1F1aWNrSW1wb3J0LnRzIiwgInNyYy9RdWlja0ltcG9ydC9tb2R1bGVzL2NvcmUudHMiLCAic3JjL1F1aWNrSW1wb3J0L29wdGlvbnMuanNvbiIsICJzcmMvUXVpY2tJbXBvcnQvbW9kdWxlcy9hcGkudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7ZGV0ZWN0SWZGaWxlUmVkaXJlY3QsIHJlZnJlc2hQYWdlfSBmcm9tICcuL21vZHVsZXMvY29yZSc7XG5cbihmdW5jdGlvbiBxdWlja0ltcG9ydCgpOiB2b2lkIHtcblx0Y29uc3Qge3dnTmFtZXNwYWNlTnVtYmVyLCB3Z1BhZ2VOYW1lLCB3Z1dpa2lJRH0gPSBtdy5jb25maWcuZ2V0KCk7XG5cblx0Y29uc3QgY2FWaWV3Rm9yZWlnblpod2lraSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIjY2Etdmlldy1mb3JlaWduIGFbaHJlZio9J3poLndpa2lwZWRpYS5vcmcnXVwiKTtcblx0Y29uc3QgcmVkaXJlY3RUZXh0QSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5yZWRpcmVjdFRleHQgYScpO1xuXG5cdGNvbnN0IGlzRmlsZU5TOiBib29sZWFuID0gd2dOYW1lc3BhY2VOdW1iZXIgPT09IDY7XG5cdGNvbnN0IGhhc013Tm9hcnRpY2xldGV4dDogYm9vbGVhbiA9ICEhZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI213LW5vYXJ0aWNsZXRleHQnKTtcblx0Y29uc3QgaXdwcmVmaXg6IHN0cmluZyA9IGNhVmlld0ZvcmVpZ25aaHdpa2kubGVuZ3RoID8gJ3pod2lraScgOiAnY29tbW9ucyc7XG5cblx0Y29uc3QgbGFiZWw6IHN0cmluZyA9IGlzRmlsZU5TICYmICFoYXNNd05vYXJ0aWNsZXRleHQgPyBpd3ByZWZpeCA6ICcnO1xuXHRjb25zdCBidXR0b25MYWJlbDogc3RyaW5nID0gaXNGaWxlTlNcblx0XHQ/IGxhYmVsXG5cdFx0XHQ/IGDmlofku7bvvIgke2xhYmVsfe+8iWBcblx0XHRcdDogJ+mhtemdoidcblx0XHQ6IHJlZGlyZWN0VGV4dEEubGVuZ3RoXG5cdFx0XHQ/ICfph43lrprlkJHnm67moIcnXG5cdFx0XHQ6ICfpobXpnaInO1xuXG5cdGlmICgod2dXaWtpSUQgIT09ICd6aHFpdXdlbmJhaWtlJyAmJiBpc0ZpbGVOUykgfHwgd2dOYW1lc3BhY2VOdW1iZXIgPCAwKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgcG9ydGxldElkOiAncC1jYWN0aW9ucycgfCAncC10YicgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcC1jYWN0aW9ucycpID8gJ3AtY2FjdGlvbnMnIDogJ3AtdGInO1xuXHRjb25zdCBlbGVtZW50OiBIVE1MTElFbGVtZW50IHwgbnVsbCA9IG13LnV0aWwuYWRkUG9ydGxldExpbmsocG9ydGxldElkLCAnIycsIGDlr7zlhaUke2J1dHRvbkxhYmVsfWAsICd0LWltcG9ydCcpO1xuXHRpZiAoIWVsZW1lbnQpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRsZXQgd2dQYWdlTmFtZTI6IHN0cmluZyB8IHVuZGVmaW5lZDtcblx0bGV0IHdnUGFnZU5hbWUzOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cblx0aWYgKCFpc0ZpbGVOUykge1xuXHRcdC8vIE1hdGNoaW5nIGRpc2FtaWctZWQgcGFnZXMgd2l0aCBmdWxsLXdpZHRoIHBhcmVudGhlc2VzXG5cdFx0Y29uc3QgZGlzYW1SZWdFeHBGVyA9IC9eKC4qKe+8iCguKj8p77yJJC87XG5cdFx0Y29uc3QgbWF0Y2hGVyA9IHdnUGFnZU5hbWUubWF0Y2goZGlzYW1SZWdFeHBGVyk7XG5cdFx0Ly8gTWF0Y2hpbmcgZGlzYW1pZy1lZCBwYWdlcyB3aXRoIGhhbGYtd2lkdGggcGFyZW50aGVzZXNcblx0XHRjb25zdCBkaXNhbVJlZ0V4cEhXID0gL14oLiopW18gXVxcKCguKj8pXFwpJC87XG5cdFx0Y29uc3QgbWF0Y2hIVyA9IHdnUGFnZU5hbWUubWF0Y2goZGlzYW1SZWdFeHBIVyk7XG5cblx0XHR0cnkge1xuXHRcdFx0Ly8gcm9vdCBwYWdlIG5hbWUgYW5kIGRpc2FtYmlnLWtleVxuXHRcdFx0bGV0IHJvb3RQYWdlTmFtZTogc3RyaW5nIHwgdW5kZWZpbmVkLCBkaXNhbUtleTogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG5cdFx0XHRpZiAobWF0Y2hGVykge1xuXHRcdFx0XHRbLCByb290UGFnZU5hbWUsIGRpc2FtS2V5XSA9IG1hdGNoRlc7XG5cdFx0XHR9IGVsc2UgaWYgKG1hdGNoSFcpIHtcblx0XHRcdFx0Wywgcm9vdFBhZ2VOYW1lLCBkaXNhbUtleV0gPSBtYXRjaEhXO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAocm9vdFBhZ2VOYW1lICYmIGRpc2FtS2V5KSB7XG5cdFx0XHRcdHdnUGFnZU5hbWUyID0gYCR7cm9vdFBhZ2VOYW1lfV8oJHtkaXNhbUtleX0pYDtcblx0XHRcdFx0aWYgKGRpc2FtS2V5ID09PSAn5raI5q2n5LmJJykge1xuXHRcdFx0XHRcdHdnUGFnZU5hbWUzID0gYCR7cm9vdFBhZ2VOYW1lfV8o5raI5q2n576pKWA7XG5cdFx0XHRcdH0gZWxzZSBpZiAoZGlzYW1LZXkgPT09ICfmtojmrafnvqknKSB7XG5cdFx0XHRcdFx0d2dQYWdlTmFtZTMgPSBgJHtyb290UGFnZU5hbWV9XyjmtojmrafkuYkpYDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0gY2F0Y2gge31cblx0fVxuXG5cdGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKTogdm9pZCA9PiB7XG5cdFx0dm9pZCAoYXN5bmMgKCkgPT4ge1xuXHRcdFx0Y29uc3QgcGFnZU5hbWU6IHN0cmluZyA9IHJlZGlyZWN0VGV4dEFbMF0/LnRleHRDb250ZW50IHx8IHdnUGFnZU5hbWU7XG5cdFx0XHRjb25zdCBwYWdlTmFtZXMgPSBbcGFnZU5hbWVdO1xuXHRcdFx0aWYgKHdnUGFnZU5hbWUyKSB7XG5cdFx0XHRcdHBhZ2VOYW1lc1twYWdlTmFtZXMubGVuZ3RoXSA9IHdnUGFnZU5hbWUyO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHdnUGFnZU5hbWUzKSB7XG5cdFx0XHRcdHBhZ2VOYW1lc1twYWdlTmFtZXMubGVuZ3RoXSA9IHdnUGFnZU5hbWUzO1xuXHRcdFx0fVxuXHRcdFx0YXdhaXQgZGV0ZWN0SWZGaWxlUmVkaXJlY3QocGFnZU5hbWVzLCBpc0ZpbGVOUyk7XG5cdFx0fSkoKS50aGVuKCgpID0+IHtcblx0XHRcdHJlZnJlc2hQYWdlKHdnUGFnZU5hbWUzID8/IHdnUGFnZU5hbWUyID8/IHdnUGFnZU5hbWUpO1xuXHRcdH0pO1xuXHR9KTtcbn0pKCk7XG5cbndpbmRvdy5kZXRlY3RJZkZpbGVSZWRpcmVjdCA9IGRldGVjdElmRmlsZVJlZGlyZWN0O1xuXG5leHBvcnQge2FwaX0gZnJvbSAnLi9tb2R1bGVzL2FwaSc7XG5leHBvcnQge2RldGVjdElmRmlsZVJlZGlyZWN0LCByZWZyZXNoUGFnZX0gZnJvbSAnLi9tb2R1bGVzL2NvcmUnO1xuIiwgImltcG9ydCB7Z2VuZXJhdGVBcnJheSwgdW5pcXVlQXJyYXl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5pbXBvcnQge2FwaX0gZnJvbSAnLi9hcGknO1xuaW1wb3J0IHt0b2FzdGlmeX0gZnJvbSAnZXh0LmdhZGdldC5Ub2FzdGlmeSc7XG5cbnR5cGUgRGV0ZWN0SWZGaWxlUmVkaXJlY3QgPSAocGFnZU5hbWVzOiBzdHJpbmcgfCBzdHJpbmdbXSwgaXNGaWxlTlM/OiBib29sZWFuKSA9PiBQcm9taXNlPHZvaWQ+O1xudHlwZSBSZWZyZXNoUGFnZSA9ICh0aXRsZT86IHN0cmluZykgPT4gdm9pZDtcblxubGV0IHRvYXN0aWZ5SW5zdGFuY2U6IFRvYXN0aWZ5SW5zdGFuY2UgPSB7XG5cdGhpZGVUb2FzdDogKCkgPT4ge30sXG59O1xuXG5jb25zdCByZWZyZXNoUGFnZTogUmVmcmVzaFBhZ2UgPSAodGl0bGUpID0+IHtcblx0dG9hc3RpZnlJbnN0YW5jZS5oaWRlVG9hc3QoKTtcblx0dG9hc3RpZnkoXG5cdFx0e1xuXHRcdFx0dGV4dDogJ+ato+WcqOWIt+aWsOmhtemdoicsXG5cdFx0XHRkdXJhdGlvbjogLTEsXG5cdFx0fSxcblx0XHQnaW5mbydcblx0KTtcblxuXHRpZiAodGl0bGUpIHtcblx0XHRsb2NhdGlvbi5yZXBsYWNlKG13LnV0aWwuZ2V0VXJsKHRpdGxlKSk7XG5cdH0gZWxzZSB7XG5cdFx0bG9jYXRpb24ucmVsb2FkKCk7XG5cdH1cbn07XG5cbmNvbnN0IGltcG9ydFBhZ2UgPSBhc3luYyAocGFnZU5hbWU6IHN0cmluZywgaXdwcmVmaXg6IHN0cmluZywgaXNGaWxlTlM6IGJvb2xlYW4gPSBmYWxzZSk6IFByb21pc2U8Ym9vbGVhbj4gPT4ge1xuXHR0b2FzdGlmeUluc3RhbmNlLmhpZGVUb2FzdCgpO1xuXHR0b2FzdGlmeUluc3RhbmNlID0gdG9hc3RpZnkoXG5cdFx0e1xuXHRcdFx0dGV4dDogYOWvvOWFpemhtemdouS4re+8miR7aXdwcmVmaXh9OiR7cGFnZU5hbWV9YCxcblx0XHRcdGR1cmF0aW9uOiAtMSxcblx0XHR9LFxuXHRcdCdpbmZvJ1xuXHQpO1xuXG5cdGxldCBzdW1tYXJ5OiBzdHJpbmcgPSAn6aG16Z2i5paH5a2X5Y6f6K645Y+v77yaW1tjYy1ieS1zYTo0LjB8Q0MgQlktU0EgNC4wXV3vvJvkvZzogIXor7flj4Lop4HmnaXmupDpobXpnaLljoblj7InO1xuXHRpZiAoaXNGaWxlTlMpIHtcblx0XHRzdW1tYXJ5ICs9ICfvvJvmlofku7bkvZzogIXor7flj4Lop4HmraTpobXpnaLlj4rmnaXmupDpobXpnaLorrDovb0nO1xuXHR9XG5cblx0Y29uc3QgcGFyYW1zOiBBcGlJbXBvcnRQYXJhbXMgPSB7XG5cdFx0YWN0aW9uOiAnaW1wb3J0Jyxcblx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRhc3NpZ25rbm93bnVzZXJzOiB0cnVlLFxuXHRcdGludGVyd2lraXBhZ2U6IHBhZ2VOYW1lLFxuXHRcdGludGVyd2lraXByZWZpeDogaXdwcmVmaXgsXG5cdFx0aW50ZXJ3aWtpc291cmNlOiBpd3ByZWZpeCxcblx0XHRzdW1tYXJ5OiBg77y7JHtzdW1tYXJ5fe+8vWAsXG5cdH07XG5cdGNvbnN0IHJlc3VsdCA9IGF3YWl0IGFwaS5wb3N0V2l0aEVkaXRUb2tlbihwYXJhbXMpO1xuXG5cdGlmIChyZXN1bHRbJ2ltcG9ydCddICYmIHJlc3VsdFsnaW1wb3J0J11bMF0gJiYgcmVzdWx0WydpbXBvcnQnXS5yZXZpc2lvbnMpIHtcblx0XHR0b2FzdGlmeUluc3RhbmNlLmhpZGVUb2FzdCgpO1xuXHRcdHRvYXN0aWZ5SW5zdGFuY2UgPSB0b2FzdGlmeShcblx0XHRcdHtcblx0XHRcdFx0dGV4dDogYOmhtemdouWvvOWFpeWujOaIkO+8miR7cGFnZU5hbWV9YCxcblx0XHRcdFx0ZHVyYXRpb246IDMgKiAxMDAwLFxuXHRcdFx0fSxcblx0XHRcdCdzdWNjZXNzJ1xuXHRcdCk7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblxuXHR0b2FzdGlmeUluc3RhbmNlLmhpZGVUb2FzdCgpO1xuXHR0b2FzdGlmeUluc3RhbmNlID0gdG9hc3RpZnkoXG5cdFx0e1xuXHRcdFx0dGV4dDogYOmhtemdouWvvOWFpeWksei0pe+8miR7aXdwcmVmaXh9OiR7cGFnZU5hbWV9YCxcblx0XHRcdGR1cmF0aW9uOiAzICogMTAwMCxcblx0XHR9LFxuXHRcdCd3YXJuaW5nJ1xuXHQpO1xuXHRyZXR1cm4gZmFsc2U7XG59O1xuXG5jb25zdCB1cGxvYWRGaWxlID0gYXN5bmMgKHRhcmdldDogc3RyaW5nLCB1cmw/OiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0dG9hc3RpZnlJbnN0YW5jZS5oaWRlVG9hc3QoKTtcblx0dG9hc3RpZnlJbnN0YW5jZSA9IHRvYXN0aWZ5KFxuXHRcdHtcblx0XHRcdHRleHQ6IGDov4Hnp7vmlofku7bkuK3vvJoke3RhcmdldH1gLFxuXHRcdFx0ZHVyYXRpb246IC0xLFxuXHRcdH0sXG5cdFx0J2luZm8nXG5cdCk7XG5cblx0Y29uc3QgcGFyYW1zOiBBcGlVcGxvYWRQYXJhbXMgPSB7XG5cdFx0dXJsOiB1cmwgPz8gYGh0dHBzOi8vemgud2lraXBlZGlhLm9yZy93aWtpL1NwZWNpYWw6UmVkaXJlY3QvZmlsZS8ke213LnV0aWwucmF3dXJsZW5jb2RlKHRhcmdldCl9YCxcblx0XHRhY3Rpb246ICd1cGxvYWQnLFxuXHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdGZpbGVuYW1lOiB0YXJnZXQsXG5cdFx0Y29tbWVudDogJ+iHquWFtuS7lue9keermei/geenu+aWh+S7ticsXG5cdFx0aWdub3Jld2FybmluZ3M6IHRydWUsXG5cdH07XG5cdGF3YWl0IGFwaS5wb3N0V2l0aEVkaXRUb2tlbihwYXJhbXMpO1xuXG5cdHRvYXN0aWZ5SW5zdGFuY2UuaGlkZVRvYXN0KCk7XG5cdHRvYXN0aWZ5SW5zdGFuY2UgPSB0b2FzdGlmeShcblx0XHR7XG5cdFx0XHR0ZXh0OiBg5paH5Lu26L+B56e75a6M5oiQ77yaJHt0YXJnZXR9YCxcblx0XHRcdGR1cmF0aW9uOiAzICogMTAwMCxcblx0XHR9LFxuXHRcdCdzdWNjZXNzJ1xuXHQpO1xufTtcblxuY29uc3QgcXVlcnlJbWFnZUluZm8gPSBhc3luYyAodGl0bGVzOiBzdHJpbmcgfCBzdHJpbmdbXSkgPT4ge1xuXHRjb25zdCBwYXJhbXM6IEFwaVF1ZXJ5SW5mb1BhcmFtcyAmIEFwaVF1ZXJ5SW1hZ2VJbmZvUGFyYW1zID0ge1xuXHRcdHRpdGxlcyxcblx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdHByb3A6IFsnaW1hZ2VpbmZvJywgJ2luZm8nXSxcblx0XHRpaXByb3A6IFsndXJsJ10sXG5cdFx0cmVkaXJlY3RzOiB0cnVlLFxuXHR9O1xuXHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGFwaS5nZXQocGFyYW1zKTtcblxuXHRyZXR1cm4gcmVzcG9uc2U7XG59O1xuXG5jb25zdCBkZXRlY3RJZkZpbGVSZWRpcmVjdDogRGV0ZWN0SWZGaWxlUmVkaXJlY3QgPSBhc3luYyAocGFnZU5hbWVzLCBpc0ZpbGVOUyA9IGZhbHNlKSA9PiB7XG5cdHBhZ2VOYW1lcyA9IHVuaXF1ZUFycmF5KGdlbmVyYXRlQXJyYXkocGFnZU5hbWVzKSk7XG5cdGNvbnN0IHByb21pc2VzOiAoKCkgPT4gUHJvbWlzZTx2b2lkPilbXSA9IFtdO1xuXG5cdGZvciAobGV0IGkgPSAwOyBpIDwgcGFnZU5hbWVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0bGV0IHRpdGxlcyA9IHBhZ2VOYW1lcy5zcGxpY2UoMCwgMjUpO1xuXHRcdGlmICghdGl0bGVzLmxlbmd0aCkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0cHJvbWlzZXNbcHJvbWlzZXMubGVuZ3RoXSA9IGFzeW5jICgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0XHRcdC8vIFJlZGlyZWN0IHRhcmdldChzKVxuXHRcdFx0Y29uc3QgdG9zOiBzdHJpbmdbXSA9IFtdO1xuXG5cdFx0XHQvLyBBbmFseXplIHN0ZXAgMTogaW1wb3J0IHBhZ2VzIGl0c2VsZlxuXHRcdFx0Ly8vLyBRdWVyeVxuXHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBxdWVyeUltYWdlSW5mbyh0aXRsZXMpO1xuXHRcdFx0aWYgKHJlc3BvbnNlWydxdWVyeSddKSB7XG5cdFx0XHRcdC8vLy8gTm9ybWFsaXplXG5cdFx0XHRcdGlmIChyZXNwb25zZVsncXVlcnknXS5ub3JtYWxpemVkKSB7XG5cdFx0XHRcdFx0Zm9yIChjb25zdCB7ZnJvbSwgdG99IG9mIHJlc3BvbnNlWydxdWVyeSddLm5vcm1hbGl6ZWQgYXMge2Zyb206IHN0cmluZzsgdG86IHN0cmluZ31bXSkge1xuXHRcdFx0XHRcdFx0dGl0bGVzID0gdGl0bGVzLm1hcCgoZWxlbWVudCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gZWxlbWVudCA9PT0gZnJvbSA/IHRvIDogZWxlbWVudDtcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vLy8gSW1wb3J0XG5cdFx0XHRcdGlmIChyZXNwb25zZVsncXVlcnknXS5wYWdlcykge1xuXHRcdFx0XHRcdGZvciAoY29uc3QgcGFnZTEgb2YgcmVzcG9uc2VbJ3F1ZXJ5J10ucGFnZXMpIHtcblx0XHRcdFx0XHRcdGNvbnN0IHRpdGxlID0gcGFnZTEudGl0bGUgYXMgc3RyaW5nO1xuXG5cdFx0XHRcdFx0XHRpZiAoIXBhZ2UxLm1pc3NpbmcpIHtcblx0XHRcdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdGxldCBpZkltcG9ydFN1Y2Nlc3MgPSBmYWxzZTtcblx0XHRcdFx0XHRcdGlmIChpc0ZpbGVOUykge1xuXHRcdFx0XHRcdFx0XHRpZkltcG9ydFN1Y2Nlc3MgPSBhd2FpdCBpbXBvcnRQYWdlKHRpdGxlLCAnY29tbW9ucycsIGlzRmlsZU5TKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGlmICghaWZJbXBvcnRTdWNjZXNzKSB7XG5cdFx0XHRcdFx0XHRcdGF3YWl0IGltcG9ydFBhZ2UodGl0bGUsICd6aHdpa2knLCBpc0ZpbGVOUyk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8vLyBQdXNoIHJlZGlyZWN0IHRhcmdldHMgaW50byBhcnJheVxuXHRcdFx0XHRpZiAocmVzcG9uc2VbJ3F1ZXJ5J10ucmVkaXJlY3RzKSB7XG5cdFx0XHRcdFx0Zm9yIChjb25zdCB7dG99IG9mIHJlc3BvbnNlWydxdWVyeSddLnJlZGlyZWN0cyBhcyB7ZnJvbTogc3RyaW5nOyB0bzogc3RyaW5nfVtdKSB7XG5cdFx0XHRcdFx0XHR0b3NbdG9zLmxlbmd0aF0gPSB0bztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Ly8gQW5hbHl6ZSBzdGVwIDI6IGZvciBmaWxlcywgY2hlY2sgaWYgaXQgaXMgYSByZWRpcmVjdFxuXHRcdFx0aWYgKGlzRmlsZU5TKSB7XG5cdFx0XHRcdC8vLy8gUXVlcnlcblx0XHRcdFx0Y29uc3QgcmVzcG9uc2UyID0gYXdhaXQgcXVlcnlJbWFnZUluZm8odGl0bGVzKTtcblx0XHRcdFx0aWYgKHJlc3BvbnNlMlsncXVlcnknXSkge1xuXHRcdFx0XHRcdC8vLy8gTm9ybWFsaXplXG5cdFx0XHRcdFx0aWYgKHJlc3BvbnNlMlsncXVlcnknXS5ub3JtYWxpemVkKSB7XG5cdFx0XHRcdFx0XHRmb3IgKGNvbnN0IHtmcm9tLCB0b30gb2YgcmVzcG9uc2UyWydxdWVyeSddLm5vcm1hbGl6ZWQgYXMge2Zyb206IHN0cmluZzsgdG86IHN0cmluZ31bXSkge1xuXHRcdFx0XHRcdFx0XHR0aXRsZXMgPSB0aXRsZXMubWFwKChlbGVtZW50KSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIGVsZW1lbnQgPT09IGZyb20gPyB0byA6IGVsZW1lbnQ7XG5cdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC8vLy8gdXBsb2FkXG5cdFx0XHRcdFx0aWYgKHJlc3BvbnNlMlsncXVlcnknXS5wYWdlcykge1xuXHRcdFx0XHRcdFx0Zm9yIChjb25zdCBwYWdlMiBvZiByZXNwb25zZTJbJ3F1ZXJ5J10ucGFnZXMpIHtcblx0XHRcdFx0XHRcdFx0Y29uc3QgdGl0bGUgPSBwYWdlMi50aXRsZSBhcyBzdHJpbmc7XG5cblx0XHRcdFx0XHRcdFx0aWYgKHBhZ2UyLm1pc3NpbmcgfHwgcGFnZTIucmVkaXJlY3QpIHtcblx0XHRcdFx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdGlmIChwYWdlMi5pbWFnZXJlcG9zaXRvcnkgJiYgcGFnZTIuaW1hZ2VyZXBvc2l0b3J5ICE9PSAnbG9jYWwnKSB7XG5cdFx0XHRcdFx0XHRcdFx0YXdhaXQgdXBsb2FkRmlsZShcblx0XHRcdFx0XHRcdFx0XHRcdHRpdGxlLFxuXHRcdFx0XHRcdFx0XHRcdFx0YCR7cGFnZTIuaW1hZ2VpbmZvWzBdLnVybH1gLnJlcGxhY2UoJ3dtLnpob25nd2VuLndpa2knLCAndXBsb2FkLndpa2ltZWRpYS5vcmcnKVxuXHRcdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRpZiAocmVzcG9uc2UyWydxdWVyeSddLnJlZGlyZWN0cykge1xuXHRcdFx0XHRcdFx0Zm9yIChjb25zdCB7dG99IG9mIHJlc3BvbnNlMlsncXVlcnknXS5yZWRpcmVjdHMgYXMge2Zyb206IHN0cmluZzsgdG86IHN0cmluZ31bXSkge1xuXHRcdFx0XHRcdFx0XHR0b3NbdG9zLmxlbmd0aF0gPSB0bztcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Ly8gQW5hbHl6ZSBzdGVwIDM6IGltcG9ydCBwYWdlcyBhcyByZWRpcmVjdCB0YXJnZXRcblx0XHRcdC8vLy8gUXVldWUgcmVxdWVzdHMgdG8gaW1wb3J0IHJlZGlyZWN0IHRhcmdldHNcblx0XHRcdGlmICh0b3MubGVuZ3RoKSB7XG5cdFx0XHRcdGF3YWl0IGRldGVjdElmRmlsZVJlZGlyZWN0KHVuaXF1ZUFycmF5KHRvcykpOyAvLyBSZXBsYWNlIFNldCB3aXRoIHVuaXF1ZUFycmF5LCBhdm9pZGluZyBjb3JlLWpzIHBvbHlmaWxsaW5nXG5cdFx0XHR9XG5cdFx0fTtcblx0fVxuXG5cdGZvciAoY29uc3QgcHJvbWlzZSBvZiBwcm9taXNlcykge1xuXHRcdHRyeSB7XG5cdFx0XHRhd2FpdCBwcm9taXNlKCk7XG5cdFx0fSBjYXRjaCB7fVxuXHR9XG59O1xuXG5leHBvcnQge3R5cGUgRGV0ZWN0SWZGaWxlUmVkaXJlY3QsIGRldGVjdElmRmlsZVJlZGlyZWN0LCB0eXBlIFJlZnJlc2hQYWdlLCByZWZyZXNoUGFnZX07XG4iLCAie1xuXHRcInZlcnNpb25cIjogXCIyLjBcIlxufVxuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7aW5pdE13QXBpfSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG5jb25zdCBhcGk6IG13LkFwaSA9IGluaXRNd0FwaShgUXVpY2tJbXBvcnQvJHtPUFRJT05TLnZlcnNpb259YCk7XG5cbmV4cG9ydCB7YXBpfTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxzQkFBQSxDQUFBO0FBQUFDLFNBQUFELHFCQUFBO0VBQUFFLEtBQUFBLE1BQUFBO0VBQUFDLHNCQUFBQSxNQUFBQTtFQUFBQyxhQUFBQSxNQUFBQTtBQUFBLENBQUE7QUFBQUMsT0FBQUMsVUFBQUMsYUFBQVAsbUJBQUE7O0FDQUEsSUFBQVEscUJBQXlDQyxRQUFBLGlCQUFBOztBQ0N4QyxJQUFBQyxVQUFXOztBQ0FaLElBQUFDLG9CQUF3QkYsUUFBQSxpQkFBQTtBQUV4QixJQUFNUCxPQUFBLEdBQWNTLGtCQUFBQyxXQUFBLGVBQUFDLE9BQWlDSCxPQUFPLENBQUU7O0FGRDlELElBQUFJLHFCQUF1QkwsUUFBQSxxQkFBQTtBQUt2QixJQUFJTSxtQkFBcUM7RUFDeENDLFdBQVdBLE1BQU07RUFBQztBQUNuQjtBQUVBLElBQU1aLGNBQTRCYSxXQUFVO0FBQzNDRixtQkFBaUJDLFVBQVU7QUFDM0IsR0FBQSxHQUFBRixtQkFBQUksVUFDQztJQUNDQyxNQUFNO0lBQ05DLFVBQVU7RUFDWCxHQUNBLE1BQ0Q7QUFFQSxNQUFJSCxPQUFPO0FBQ1ZJLGFBQVNDLFFBQVFDLEdBQUdDLEtBQUtDLE9BQU9SLEtBQUssQ0FBQztFQUN2QyxPQUFPO0FBQ05JLGFBQVNLLE9BQU87RUFDakI7QUFDRDtBQUVBLElBQU1DLGFBQUEsMkJBQUE7QUFBQSxNQUFBQyxPQUFBQyxrQkFBYSxXQUFPQyxVQUFrQkMsVUFBa0JDLFdBQW9CLE9BQTRCO0FBQzdHakIscUJBQWlCQyxVQUFVO0FBQzNC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QUl3RDtNQUMvQjtBQUNBLFVBQUlDLGFBQWE7QUFDaEI5RCxrQkFBVUEsVUFBVUssTUFBTSxJQUFJeUQ7TUFDL0I7QUFDQSxZQUFNaEksc0JBQXFCa0UsV0FBV3JDLFFBQVE7SUFDL0MsQ0FBQSxFQUFHLEVBQUU4RyxLQUFLLE1BQU07QUFDZjFJLG1CQUFZK0gsZ0JBQUEsUUFBQUEsZ0JBQUEsU0FBQUEsY0FBZUQsaUJBQUEsU0FBZkMsZ0JBQUEsUUFBQUEsZ0JBQUEsU0FBQUEsY0FBZUQsaUJBQUEsU0FBZkMsZ0JBQUEsUUFBQUEsZ0JBQUEsU0FBQUEsY0FBZUQsY0FBZWIsVUFBVTtJQUNyRCxDQUFDO0VBQ0YsQ0FBQztBQUNGLEdBQUc7QUFFSDBCLE9BQU81SSx1QkFBdUJBOyIsCiAgIm5hbWVzIjogWyJRdWlja0ltcG9ydF9leHBvcnRzIiwgIl9fZXhwb3J0IiwgImFwaSIsICJkZXRlY3RJZkZpbGVSZWRpcmVjdCIsICJyZWZyZXNoUGFnZSIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJfX3RvQ29tbW9uSlMiLCAiaW1wb3J0X2V4dF9nYWRnZXQyIiwgInJlcXVpcmUiLCAidmVyc2lvbiIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJpbml0TXdBcGkiLCAiY29uY2F0IiwgImltcG9ydF9leHRfZ2FkZ2V0MyIsICJ0b2FzdGlmeUluc3RhbmNlIiwgImhpZGVUb2FzdCIsICJ0aXRsZSIsICJ0b2FzdGlmeSIsICJ0ZXh0IiwgImR1cmF0aW9uIiwgImxvY2F0aW9uIiwgInJlcGxhY2UiLCAibXciLCAidXRpbCIsICJnZXRVcmwiLCAicmVsb2FkIiwgImltcG9ydFBhZ2UiLCAiX3JlZiIsICJfYXN5bmNUb0dlbmVyYXRvciIsICJwYWdlTmFtZSIsICJpd3ByZWZpeCIsICJpc0ZpbGVOUyIsICJzdW1tYXJ5IiwgInBhcmFtcyIsICJhY3Rpb24iLCAiZm9ybWF0IiwgImFzc2lnbmtub3dudXNlcnMiLCAiaW50ZXJ3aWtpcGFnZSIsICJpbnRlcndpa2lwcmVmaXgiLCAiaW50ZXJ3aWtpc291cmNlIiwgInJlc3VsdCIsICJwb3N0V2l0aEVkaXRUb2tlbiIsICJyZXZpc2lvbnMiLCAiX3giLCAiX3gyIiwgImFwcGx5IiwgImFyZ3VtZW50cyIsICJ1cGxvYWRGaWxlIiwgIl9yZWYyIiwgInRhcmdldCIsICJ1cmwiLCAicmF3dXJsZW5jb2RlIiwgImZpbGVuYW1lIiwgImNvbW1lbnQiLCAiaWdub3Jld2FybmluZ3MiLCAiX3gzIiwgIl94NCIsICJxdWVyeUltYWdlSW5mbyIsICJfcmVmMyIsICJ0aXRsZXMiLCAiZm9ybWF0dmVyc2lvbiIsICJwcm9wIiwgImlpcHJvcCIsICJyZWRpcmVjdHMiLCAicmVzcG9uc2UiLCAiZ2V0IiwgIl94NSIsICJfcmVmNCIsICJwYWdlTmFtZXMiLCAidW5pcXVlQXJyYXkiLCAiZ2VuZXJhdGVBcnJheSIsICJwcm9taXNlcyIsICJpIiwgImxlbmd0aCIsICJzcGxpY2UiLCAidG9zIiwgIm5vcm1hbGl6ZWQiLCAiX2l0ZXJhdG9yMiIsICJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsICJfc3RlcDIiLCAicyIsICJuIiwgImRvbmUiLCAiZnJvbSIsICJ0byIsICJ2YWx1ZSIsICJtYXAiLCAiZWxlbWVudCIsICJlcnIiLCAiZSIsICJmIiwgInBhZ2VzIiwgIl9pdGVyYXRvcjMiLCAiX3N0ZXAzIiwgInBhZ2UxIiwgIm1pc3NpbmciLCAiaWZJbXBvcnRTdWNjZXNzIiwgIl9pdGVyYXRvcjQiLCAiX3N0ZXA0IiwgInJlc3BvbnNlMiIsICJfaXRlcmF0b3I1IiwgIl9zdGVwNSIsICJfaXRlcmF0b3I2IiwgIl9zdGVwNiIsICJwYWdlMiIsICJyZWRpcmVjdCIsICJpbWFnZXJlcG9zaXRvcnkiLCAiaW1hZ2VpbmZvIiwgIl9pdGVyYXRvcjciLCAiX3N0ZXA3IiwgIl9pIiwgIl9wcm9taXNlcyIsICJwcm9taXNlIiwgIl94NiIsICJxdWlja0ltcG9ydCIsICJ3Z05hbWVzcGFjZU51bWJlciIsICJ3Z1BhZ2VOYW1lIiwgIndnV2lraUlEIiwgImNvbmZpZyIsICJjYVZpZXdGb3JlaWduWmh3aWtpIiwgImRvY3VtZW50IiwgInF1ZXJ5U2VsZWN0b3JBbGwiLCAicmVkaXJlY3RUZXh0QSIsICJoYXNNd05vYXJ0aWNsZXRleHQiLCAicXVlcnlTZWxlY3RvciIsICJsYWJlbCIsICJidXR0b25MYWJlbCIsICJwb3J0bGV0SWQiLCAiYWRkUG9ydGxldExpbmsiLCAid2dQYWdlTmFtZTIiLCAid2dQYWdlTmFtZTMiLCAiZGlzYW1SZWdFeHBGVyIsICJtYXRjaEZXIiwgIm1hdGNoIiwgImRpc2FtUmVnRXhwSFciLCAibWF0Y2hIVyIsICJyb290UGFnZU5hbWUiLCAiZGlzYW1LZXkiLCAiYWRkRXZlbnRMaXN0ZW5lciIsICJfcmVkaXJlY3RUZXh0QSQiLCAidGV4dENvbnRlbnQiLCAidGhlbiIsICJ3aW5kb3ciXQp9Cg==

/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/QuickImport}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/QuickImportAllMedia}
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

// dist/QuickImportAllMedia/QuickImportAllMedia.js
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
//! src/QuickImportAllMedia/QuickImportAllMedia.ts
var import_ext_gadget4 = require("ext.gadget.QuickImport");
//! src/QuickImportAllMedia/modules/core.ts
var import_ext_gadget2 = require("ext.gadget.Util");
//! src/QuickImportAllMedia/modules/api.ts
var import_ext_gadget = require("ext.gadget.QuickImport");
//! src/QuickImportAllMedia/modules/core.ts
var import_ext_gadget3 = require("ext.gadget.Toastify");
var toastifyInstance = {
  hideToast: () => {
  }
};
var parse = /* @__PURE__ */ function() {
  var _ref = _asyncToGenerator(function* (page) {
    const params = {
      page,
      action: "parse",
      format: "json",
      formatversion: "2",
      prop: ["links", "images"],
      redirects: true,
      disabletoc: true
    };
    const response = yield import_ext_gadget.api.get(params);
    return response;
  });
  return function parse2(_x) {
    return _ref.apply(this, arguments);
  };
}();
var getElements = (element) => {
  return [...element.querySelectorAll("a[href^='/wiki/File:']"), ...element.querySelectorAll("a[href*='title=File:']")];
};
var getElementsFromParse = /* @__PURE__ */ function() {
  var _ref2 = _asyncToGenerator(function* (titles) {
    const fileNamesFromParse = [];
    titles = (0, import_ext_gadget2.uniqueArray)(titles);
    var _iterator = _createForOfIteratorHelper(titles), _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done; ) {
        const title = _step.value;
        try {
          const response = yield parse(title);
          if (response["parse"].links) {
            const regex = /(File:[^#]+)/;
            var _iterator2 = _createForOfIteratorHelper(response["parse"].links), _step2;
            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
                const {
                  title: titleName
                } = _step2.value;
                if (regex.test(titleName)) {
                  const match = regex.exec(titleName);
                  let [fileName] = match;
                  fileName = fileName.replace(/((File|Image):)((File|Image):)?/i, "File:").replace("+", "_");
                  fileNamesFromParse[fileNamesFromParse.length] = "".concat(fileName);
                }
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
          }
          if (response["parse"].images) {
            var _iterator3 = _createForOfIteratorHelper(response["parse"].images), _step3;
            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
                const fileName = _step3.value;
                fileNamesFromParse[fileNamesFromParse.length] = "File:".concat(fileName);
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }
          }
        } catch {
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    return fileNamesFromParse;
  });
  return function getElementsFromParse2(_x2) {
    return _ref2.apply(this, arguments);
  };
}();
var queryImages = /* @__PURE__ */ function() {
  var _ref3 = _asyncToGenerator(function* (titles) {
    const params = {
      titles,
      action: "query",
      format: "json",
      formatversion: "2",
      prop: "images",
      imlimit: 5e3
    };
    const response = yield import_ext_gadget.api.get(params);
    return response;
  });
  return function queryImages2(_x3) {
    return _ref3.apply(this, arguments);
  };
}();
var getImagesFromElements = (fileLinkElements) => {
  const fileNames = [];
  fileLinkElements = (0, import_ext_gadget2.uniqueArray)(fileLinkElements);
  const {
    wgArticlePath,
    wgScript
  } = mw.config.get();
  const articleRegex = new RegExp("".concat(wgArticlePath.replace("$1", ""), "(File:[^#]+)"));
  const scriptRegex = new RegExp("".concat(wgScript, "\\?title=(File:[^#&]+)"));
  var _iterator4 = _createForOfIteratorHelper(fileLinkElements), _step4;
  try {
    for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
      const element = _step4.value;
      const {
        href,
        classList
      } = element;
      if (!href || href.includes("redlink=1")) {
        continue;
      }
      if (classList.contains("new")) {
        continue;
      }
      let fileName;
      if (articleRegex.test(href)) {
        const match = articleRegex.exec(href);
        fileName = match[1];
        fileName = decodeURIComponent(fileName).replace(/((File|Image):)((File|Image):)?/i, "File:").replace("+", "_");
      }
      if (scriptRegex.test(href)) {
        const match = scriptRegex.exec(href);
        fileName = match[1];
        fileName = decodeURIComponent(fileName).replace(/((File|Image):)((File|Image):)?/i, "File:").replace("+", "_");
        fileNames[fileNames.length] = fileName;
      }
    }
  } catch (err) {
    _iterator4.e(err);
  } finally {
    _iterator4.f();
  }
  return (0, import_ext_gadget2.uniqueArray)(fileNames);
};
var getImages = /* @__PURE__ */ function() {
  var _ref4 = _asyncToGenerator(function* (titles) {
    const fileNames = [];
    titles = (0, import_ext_gadget2.uniqueArray)((0, import_ext_gadget2.generateArray)(titles));
    for (let i = 0; i < titles.length; i++) {
      const querytitles = titles.splice(0, 50);
      if (!querytitles.length) {
        continue;
      }
      try {
        const response = yield queryImages(querytitles);
        if (!response["query"] || !response["query"].pages) {
          continue;
        }
        var _iterator5 = _createForOfIteratorHelper(response["query"].pages), _step5;
        try {
          for (_iterator5.s(); !(_step5 = _iterator5.n()).done; ) {
            const page = _step5.value;
            if (!page.images) {
              continue;
            }
            var _iterator6 = _createForOfIteratorHelper(page.images), _step6;
            try {
              for (_iterator6.s(); !(_step6 = _iterator6.n()).done; ) {
                const {
                  title
                } = _step6.value;
                if (!title) {
                  continue;
                }
                fileNames[fileNames.length] = title;
              }
            } catch (err) {
              _iterator6.e(err);
            } finally {
              _iterator6.f();
            }
          }
        } catch (err) {
          _iterator5.e(err);
        } finally {
          _iterator5.f();
        }
      } catch {
      }
    }
    return (0, import_ext_gadget2.uniqueArray)(fileNames);
  });
  return function getImages2(_x4) {
    return _ref4.apply(this, arguments);
  };
}();
var getAllImages = /* @__PURE__ */ function() {
  var _ref5 = _asyncToGenerator(function* (titles) {
    toastifyInstance.hideToast();
    (0, import_ext_gadget3.toastify)({
      text: "正在获取迁移目标",
      duration: -1
    }, "info");
    let fileNames = [];
    const {
      wgNamespaceNumber,
      wgPageName
    } = mw.config.get();
    if (!titles || !titles.length) {
      titles = wgNamespaceNumber < 0 ? [] : [wgPageName];
    }
    const elementsFromPage = getElements(document);
    const fileNamesFromPage = getImagesFromElements(elementsFromPage);
    const fileNamesFromParse = yield getElementsFromParse(fileNamesFromPage);
    fileNames = (0, import_ext_gadget2.uniqueArray)([...fileNamesFromPage, ...fileNamesFromParse, ...yield getImages([...titles, ...fileNamesFromPage])]);
    toastifyInstance.hideToast();
    toastifyInstance = (0, import_ext_gadget3.toastify)({
      text: "获取迁移目标完成",
      duration: -1
    }, "success");
    return (0, import_ext_gadget2.uniqueArray)(fileNames);
  });
  return function getAllImages2(_x5) {
    return _ref5.apply(this, arguments);
  };
}();
//! src/QuickImportAllMedia/QuickImportAllMedia.ts
window.detectIfFileRedirect = import_ext_gadget4.detectIfFileRedirect;
window.getAllImages = getAllImages;
(function quickImportAllMedia() {
  const {
    wgCanonicalSpecialPageName,
    wgCurRevisionId
  } = mw.config.get();
  if (!(wgCurRevisionId || ["Prefixindex", "BrokenRedirects", "Wantedfiles"].includes(wgCanonicalSpecialPageName || ""))) {
    return;
  }
  const portletId = document.querySelector("#p-cactions") ? "p-cactions" : "p-tb";
  const element = mw.util.addPortletLink(portletId, "#", "导入此页面所有文件", "t-import");
  if (!element) {
    return;
  }
  element.addEventListener("click", () => {
    void _asyncToGenerator(function* () {
      const fileNames = yield getAllImages();
      if (!fileNames.length) {
        return;
      }
      yield (0, import_ext_gadget4.detectIfFileRedirect)(fileNames, true);
    })().then(() => {
      (0, import_ext_gadget4.refreshPage)();
    });
  });
})();

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1F1aWNrSW1wb3J0QWxsTWVkaWEvUXVpY2tJbXBvcnRBbGxNZWRpYS50cyIsICJzcmMvUXVpY2tJbXBvcnRBbGxNZWRpYS9tb2R1bGVzL2NvcmUudHMiLCAic3JjL1F1aWNrSW1wb3J0QWxsTWVkaWEvbW9kdWxlcy9hcGkudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7ZGV0ZWN0SWZGaWxlUmVkaXJlY3QsIHJlZnJlc2hQYWdlfSBmcm9tICdleHQuZ2FkZ2V0LlF1aWNrSW1wb3J0JztcbmltcG9ydCB7Z2V0QWxsSW1hZ2VzfSBmcm9tICcuL21vZHVsZXMvY29yZSc7XG5cbmRlY2xhcmUgZ2xvYmFsIHtcblx0aW50ZXJmYWNlIFdpbmRvdyB7XG5cdFx0ZGV0ZWN0SWZGaWxlUmVkaXJlY3Q6IERldGVjdElmRmlsZVJlZGlyZWN0O1xuXHRcdGdldEFsbEltYWdlczogdHlwZW9mIGdldEFsbEltYWdlcztcblx0fVxufVxuXG53aW5kb3cuZGV0ZWN0SWZGaWxlUmVkaXJlY3QgPSBkZXRlY3RJZkZpbGVSZWRpcmVjdDtcbndpbmRvdy5nZXRBbGxJbWFnZXMgPSBnZXRBbGxJbWFnZXM7XG5cbihmdW5jdGlvbiBxdWlja0ltcG9ydEFsbE1lZGlhKCk6IHZvaWQge1xuXHRjb25zdCB7d2dDYW5vbmljYWxTcGVjaWFsUGFnZU5hbWUsIHdnQ3VyUmV2aXNpb25JZH0gPSBtdy5jb25maWcuZ2V0KCk7XG5cdGlmIChcblx0XHQhKFxuXHRcdFx0d2dDdXJSZXZpc2lvbklkIHx8XG5cdFx0XHRbJ1ByZWZpeGluZGV4JywgJ0Jyb2tlblJlZGlyZWN0cycsICdXYW50ZWRmaWxlcyddLmluY2x1ZGVzKHdnQ2Fub25pY2FsU3BlY2lhbFBhZ2VOYW1lIHx8ICcnKVxuXHRcdClcblx0KSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgcG9ydGxldElkOiAncC1jYWN0aW9ucycgfCAncC10YicgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcC1jYWN0aW9ucycpID8gJ3AtY2FjdGlvbnMnIDogJ3AtdGInO1xuXHRjb25zdCBlbGVtZW50OiBIVE1MTElFbGVtZW50IHwgbnVsbCA9IG13LnV0aWwuYWRkUG9ydGxldExpbmsocG9ydGxldElkLCAnIycsICflr7zlhaXmraTpobXpnaLmiYDmnInmlofku7YnLCAndC1pbXBvcnQnKTtcblx0aWYgKCFlbGVtZW50KSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpOiB2b2lkID0+IHtcblx0XHR2b2lkIChhc3luYyAoKSA9PiB7XG5cdFx0XHRjb25zdCBmaWxlTmFtZXMgPSBhd2FpdCBnZXRBbGxJbWFnZXMoKTtcblx0XHRcdGlmICghZmlsZU5hbWVzLmxlbmd0aCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRhd2FpdCBkZXRlY3RJZkZpbGVSZWRpcmVjdChmaWxlTmFtZXMsIHRydWUpO1xuXHRcdH0pKCkudGhlbigoKSA9PiB7XG5cdFx0XHRyZWZyZXNoUGFnZSgpO1xuXHRcdH0pO1xuXHR9KTtcbn0pKCk7XG4iLCAiaW1wb3J0IHtnZW5lcmF0ZUFycmF5LCB1bmlxdWVBcnJheX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbmltcG9ydCB7YXBpfSBmcm9tICcuL2FwaSc7XG5pbXBvcnQge3RvYXN0aWZ5fSBmcm9tICdleHQuZ2FkZ2V0LlRvYXN0aWZ5JztcblxubGV0IHRvYXN0aWZ5SW5zdGFuY2U6IFRvYXN0aWZ5SW5zdGFuY2UgPSB7XG5cdGhpZGVUb2FzdDogKCkgPT4ge30sXG59O1xuXG5jb25zdCBwYXJzZSA9IGFzeW5jIChwYWdlOiBzdHJpbmcpID0+IHtcblx0Y29uc3QgcGFyYW1zOiBBcGlQYXJzZVBhcmFtcyA9IHtcblx0XHRwYWdlLFxuXHRcdGFjdGlvbjogJ3BhcnNlJyxcblx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0cHJvcDogWydsaW5rcycsICdpbWFnZXMnXSxcblx0XHRyZWRpcmVjdHM6IHRydWUsXG5cdFx0ZGlzYWJsZXRvYzogdHJ1ZSxcblx0fTtcblx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGkuZ2V0KHBhcmFtcyk7XG5cblx0cmV0dXJuIHJlc3BvbnNlO1xufTtcblxuY29uc3QgZ2V0RWxlbWVudHMgPSAoZWxlbWVudDogRG9jdW1lbnQgfCBIVE1MRWxlbWVudCkgPT4ge1xuXHRyZXR1cm4gW1xuXHRcdC4uLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MQW5jaG9yRWxlbWVudD4oXCJhW2hyZWZePScvd2lraS9GaWxlOiddXCIpLFxuXHRcdC4uLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MQW5jaG9yRWxlbWVudD4oXCJhW2hyZWYqPSd0aXRsZT1GaWxlOiddXCIpLFxuXHRdO1xufTtcblxuY29uc3QgZ2V0RWxlbWVudHNGcm9tUGFyc2UgPSBhc3luYyAodGl0bGVzOiBzdHJpbmdbXSkgPT4ge1xuXHRjb25zdCBmaWxlTmFtZXNGcm9tUGFyc2U6IHN0cmluZ1tdID0gW107XG5cdHRpdGxlcyA9IHVuaXF1ZUFycmF5KHRpdGxlcyk7XG5cblx0Zm9yIChjb25zdCB0aXRsZSBvZiB0aXRsZXMpIHtcblx0XHR0cnkge1xuXHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBwYXJzZSh0aXRsZSk7XG5cblx0XHRcdGlmIChyZXNwb25zZVsncGFyc2UnXS5saW5rcykge1xuXHRcdFx0XHRjb25zdCByZWdleDogUmVnRXhwID0gLyhGaWxlOlteI10rKS87XG5cblx0XHRcdFx0Zm9yIChjb25zdCB7dGl0bGU6IHRpdGxlTmFtZX0gb2YgcmVzcG9uc2VbJ3BhcnNlJ10ubGlua3MgYXMge3RpdGxlOiBzdHJpbmd9W10pIHtcblx0XHRcdFx0XHRpZiAocmVnZXgudGVzdCh0aXRsZU5hbWUpKSB7XG5cdFx0XHRcdFx0XHRjb25zdCBtYXRjaDogUmVnRXhwRXhlY0FycmF5ID0gcmVnZXguZXhlYyh0aXRsZU5hbWUpIGFzIFJlZ0V4cEV4ZWNBcnJheTtcblx0XHRcdFx0XHRcdGxldCBbZmlsZU5hbWVdID0gbWF0Y2g7XG5cdFx0XHRcdFx0XHRmaWxlTmFtZSA9IGZpbGVOYW1lLnJlcGxhY2UoLygoRmlsZXxJbWFnZSk6KSgoRmlsZXxJbWFnZSk6KT8vaSwgJ0ZpbGU6JykucmVwbGFjZSgnKycsICdfJyk7XG5cdFx0XHRcdFx0XHRmaWxlTmFtZXNGcm9tUGFyc2VbZmlsZU5hbWVzRnJvbVBhcnNlLmxlbmd0aF0gPSBgJHtmaWxlTmFtZX1gO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRpZiAocmVzcG9uc2VbJ3BhcnNlJ10uaW1hZ2VzKSB7XG5cdFx0XHRcdGZvciAoY29uc3QgZmlsZU5hbWUgb2YgcmVzcG9uc2VbJ3BhcnNlJ10uaW1hZ2VzKSB7XG5cdFx0XHRcdFx0ZmlsZU5hbWVzRnJvbVBhcnNlW2ZpbGVOYW1lc0Zyb21QYXJzZS5sZW5ndGhdID0gYEZpbGU6JHtmaWxlTmFtZX1gO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSBjYXRjaCB7fVxuXHR9XG5cblx0cmV0dXJuIGZpbGVOYW1lc0Zyb21QYXJzZTtcbn07XG5cbmNvbnN0IHF1ZXJ5SW1hZ2VzID0gYXN5bmMgKHRpdGxlczogc3RyaW5nIHwgc3RyaW5nW10pID0+IHtcblx0Y29uc3QgcGFyYW1zOiBBcGlRdWVyeUltYWdlc1BhcmFtcyA9IHtcblx0XHR0aXRsZXMsXG5cdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRwcm9wOiAnaW1hZ2VzJyxcblx0XHRpbWxpbWl0OiA1MDAwLFxuXHR9O1xuXHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGFwaS5nZXQocGFyYW1zKTtcblxuXHRyZXR1cm4gcmVzcG9uc2U7XG59O1xuXG5jb25zdCBnZXRJbWFnZXNGcm9tRWxlbWVudHMgPSAoZmlsZUxpbmtFbGVtZW50czogSFRNTEFuY2hvckVsZW1lbnRbXSkgPT4ge1xuXHRjb25zdCBmaWxlTmFtZXM6IHN0cmluZ1tdID0gW107XG5cdGZpbGVMaW5rRWxlbWVudHMgPSB1bmlxdWVBcnJheShmaWxlTGlua0VsZW1lbnRzKTtcblx0Y29uc3Qge3dnQXJ0aWNsZVBhdGgsIHdnU2NyaXB0fSA9IG13LmNvbmZpZy5nZXQoKTtcblx0Y29uc3QgYXJ0aWNsZVJlZ2V4OiBSZWdFeHAgPSBuZXcgUmVnRXhwKGAke3dnQXJ0aWNsZVBhdGgucmVwbGFjZSgnJDEnLCAnJyl9KEZpbGU6W14jXSspYCk7XG5cdGNvbnN0IHNjcmlwdFJlZ2V4OiBSZWdFeHAgPSBuZXcgUmVnRXhwKGAke3dnU2NyaXB0fVxcXFw/dGl0bGU9KEZpbGU6W14jJl0rKWApO1xuXG5cdGZvciAoY29uc3QgZWxlbWVudCBvZiBmaWxlTGlua0VsZW1lbnRzKSB7XG5cdFx0Ly8gUmVwbGFjZSBgbmV3IFNldCgpYCB0byBhdm9pZCBwb2x5ZmlsbGluZyBjb3JlLWpzXG5cdFx0Y29uc3Qge2hyZWYsIGNsYXNzTGlzdH0gPSBlbGVtZW50O1xuXG5cdFx0aWYgKCFocmVmIHx8IGhyZWYuaW5jbHVkZXMoJ3JlZGxpbms9MScpKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRpZiAoY2xhc3NMaXN0LmNvbnRhaW5zKCduZXcnKSkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0bGV0IGZpbGVOYW1lOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cdFx0aWYgKGFydGljbGVSZWdleC50ZXN0KGhyZWYpKSB7XG5cdFx0XHRjb25zdCBtYXRjaDogUmVnRXhwRXhlY0FycmF5ID0gYXJ0aWNsZVJlZ2V4LmV4ZWMoaHJlZikgYXMgUmVnRXhwRXhlY0FycmF5O1xuXHRcdFx0ZmlsZU5hbWUgPSBtYXRjaFsxXSBhcyBzdHJpbmc7XG5cdFx0XHRmaWxlTmFtZSA9IGRlY29kZVVSSUNvbXBvbmVudChmaWxlTmFtZSlcblx0XHRcdFx0LnJlcGxhY2UoLygoRmlsZXxJbWFnZSk6KSgoRmlsZXxJbWFnZSk6KT8vaSwgJ0ZpbGU6Jylcblx0XHRcdFx0LnJlcGxhY2UoJysnLCAnXycpO1xuXHRcdH1cblxuXHRcdGlmIChzY3JpcHRSZWdleC50ZXN0KGhyZWYpKSB7XG5cdFx0XHRjb25zdCBtYXRjaDogUmVnRXhwRXhlY0FycmF5ID0gc2NyaXB0UmVnZXguZXhlYyhocmVmKSBhcyBSZWdFeHBFeGVjQXJyYXk7XG5cdFx0XHRmaWxlTmFtZSA9IG1hdGNoWzFdIGFzIHN0cmluZztcblx0XHRcdGZpbGVOYW1lID0gZGVjb2RlVVJJQ29tcG9uZW50KGZpbGVOYW1lKVxuXHRcdFx0XHQucmVwbGFjZSgvKChGaWxlfEltYWdlKTopKChGaWxlfEltYWdlKTopPy9pLCAnRmlsZTonKVxuXHRcdFx0XHQucmVwbGFjZSgnKycsICdfJyk7XG5cdFx0XHRmaWxlTmFtZXNbZmlsZU5hbWVzLmxlbmd0aF0gPSBmaWxlTmFtZTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gdW5pcXVlQXJyYXkoZmlsZU5hbWVzKTtcbn07XG5cbmNvbnN0IGdldEltYWdlcyA9IGFzeW5jICh0aXRsZXM6IHN0cmluZyB8IHN0cmluZ1tdKSA9PiB7XG5cdGNvbnN0IGZpbGVOYW1lczogc3RyaW5nW10gPSBbXTtcblx0dGl0bGVzID0gdW5pcXVlQXJyYXkoZ2VuZXJhdGVBcnJheSh0aXRsZXMpKTtcblxuXHRmb3IgKGxldCBpID0gMDsgaSA8IHRpdGxlcy5sZW5ndGg7IGkrKykge1xuXHRcdGNvbnN0IHF1ZXJ5dGl0bGVzID0gdGl0bGVzLnNwbGljZSgwLCA1MCk7XG5cdFx0aWYgKCFxdWVyeXRpdGxlcy5sZW5ndGgpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdHRyeSB7XG5cdFx0XHRjb25zdCByZXNwb25zZSA9IGF3YWl0IHF1ZXJ5SW1hZ2VzKHF1ZXJ5dGl0bGVzKTtcblx0XHRcdGlmICghcmVzcG9uc2VbJ3F1ZXJ5J10gfHwgIXJlc3BvbnNlWydxdWVyeSddLnBhZ2VzKSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3IgKGNvbnN0IHBhZ2Ugb2YgcmVzcG9uc2VbJ3F1ZXJ5J10ucGFnZXMpIHtcblx0XHRcdFx0aWYgKCFwYWdlLmltYWdlcykge1xuXHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Zm9yIChjb25zdCB7dGl0bGV9IG9mIHBhZ2UuaW1hZ2VzIGFzIHtcblx0XHRcdFx0XHRuczogbnVtYmVyO1xuXHRcdFx0XHRcdHRpdGxlOiBzdHJpbmc7XG5cdFx0XHRcdH1bXSkge1xuXHRcdFx0XHRcdGlmICghdGl0bGUpIHtcblx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGZpbGVOYW1lc1tmaWxlTmFtZXMubGVuZ3RoXSA9IHRpdGxlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSBjYXRjaCB7fVxuXHR9XG5cblx0cmV0dXJuIHVuaXF1ZUFycmF5KGZpbGVOYW1lcyk7XG59O1xuXG5jb25zdCBnZXRBbGxJbWFnZXMgPSBhc3luYyAodGl0bGVzPzogc3RyaW5nIHwgc3RyaW5nW10pOiBQcm9taXNlPHN0cmluZ1tdPiA9PiB7XG5cdHRvYXN0aWZ5SW5zdGFuY2UuaGlkZVRvYXN0KCk7XG5cdHRvYXN0aWZ5KFxuXHRcdHtcblx0XHRcdHRleHQ6ICfmraPlnKjojrflj5bov4Hnp7vnm67moIcnLFxuXHRcdFx0ZHVyYXRpb246IC0xLFxuXHRcdH0sXG5cdFx0J2luZm8nXG5cdCk7XG5cblx0bGV0IGZpbGVOYW1lczogc3RyaW5nW10gPSBbXTtcblx0Y29uc3Qge3dnTmFtZXNwYWNlTnVtYmVyLCB3Z1BhZ2VOYW1lfSA9IG13LmNvbmZpZy5nZXQoKTtcblxuXHRpZiAoIXRpdGxlcyB8fCAhdGl0bGVzLmxlbmd0aCkge1xuXHRcdHRpdGxlcyA9IHdnTmFtZXNwYWNlTnVtYmVyIDwgMCA/IFtdIDogW3dnUGFnZU5hbWVdO1xuXHR9XG5cblx0Y29uc3QgZWxlbWVudHNGcm9tUGFnZSA9IGdldEVsZW1lbnRzKGRvY3VtZW50KTtcblx0Y29uc3QgZmlsZU5hbWVzRnJvbVBhZ2UgPSBnZXRJbWFnZXNGcm9tRWxlbWVudHMoZWxlbWVudHNGcm9tUGFnZSk7XG5cdGNvbnN0IGZpbGVOYW1lc0Zyb21QYXJzZSA9IGF3YWl0IGdldEVsZW1lbnRzRnJvbVBhcnNlKGZpbGVOYW1lc0Zyb21QYWdlKTtcblxuXHRmaWxlTmFtZXMgPSB1bmlxdWVBcnJheShbXG5cdFx0Li4uZmlsZU5hbWVzRnJvbVBhZ2UsXG5cdFx0Li4uZmlsZU5hbWVzRnJvbVBhcnNlLFxuXHRcdC4uLihhd2FpdCBnZXRJbWFnZXMoWy4uLnRpdGxlcywgLi4uZmlsZU5hbWVzRnJvbVBhZ2VdKSksXG5cdF0pO1xuXG5cdHRvYXN0aWZ5SW5zdGFuY2UuaGlkZVRvYXN0KCk7XG5cdHRvYXN0aWZ5SW5zdGFuY2UgPSB0b2FzdGlmeShcblx0XHR7XG5cdFx0XHR0ZXh0OiAn6I635Y+W6L+B56e755uu5qCH5a6M5oiQJyxcblx0XHRcdGR1cmF0aW9uOiAtMSxcblx0XHR9LFxuXHRcdCdzdWNjZXNzJ1xuXHQpO1xuXG5cdHJldHVybiB1bmlxdWVBcnJheShmaWxlTmFtZXMpOyAvLyBSZXBsYWNlIGBbLi4ubmV3IFNldCgpXWAgdG8gYXZvaWQgcG9seWZpbGxpbmcgY29yZS1qc1xufTtcblxuZXhwb3J0IHtnZXRBbGxJbWFnZXN9O1xuIiwgImV4cG9ydCB7YXBpfSBmcm9tICdleHQuZ2FkZ2V0LlF1aWNrSW1wb3J0JztcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLHFCQUFnREMsUUFBQSx3QkFBQTs7QUNBaEQsSUFBQUMscUJBQXlDRCxRQUFBLGlCQUFBOztBQ0F6QyxJQUFBRSxvQkFBa0JGLFFBQUEsd0JBQUE7O0FERWxCLElBQUFHLHFCQUF1QkgsUUFBQSxxQkFBQTtBQUV2QixJQUFJSSxtQkFBcUM7RUFDeENDLFdBQVdBLE1BQU07RUFB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VTtBQUNwRyxNQUFJLENBQUNuRixTQUFTO0FBQ2I7RUFDRDtBQUVBQSxVQUFRdUYsaUJBQWlCLFNBQVMsTUFBWTtBQUM3QyxTQUFBdkcsa0JBQU0sYUFBWTtBQUNqQixZQUFNd0QsWUFBQSxNQUFrQjJCLGFBQWE7QUFDckMsVUFBSSxDQUFDM0IsVUFBVWYsUUFBUTtBQUN0QjtNQUNEO0FBQ0EsYUFBQSxHQUFNbEQsbUJBQUF3RyxzQkFBcUJ2QyxXQUFXLElBQUk7SUFDM0MsQ0FBQSxFQUFHLEVBQUVnRCxLQUFLLE1BQU07QUFDZixPQUFBLEdBQUFqSCxtQkFBQWtILGFBQVk7SUFDYixDQUFDO0VBQ0YsQ0FBQztBQUNGLEdBQUc7IiwKICAibmFtZXMiOiBbImltcG9ydF9leHRfZ2FkZ2V0NCIsICJyZXF1aXJlIiwgImltcG9ydF9leHRfZ2FkZ2V0MiIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJpbXBvcnRfZXh0X2dhZGdldDMiLCAidG9hc3RpZnlJbnN0YW5jZSIsICJoaWRlVG9hc3QiLCAicGFyc2UiLCAiX3JlZiIsICJfYXN5bmNUb0dlbmVyYXRvciIsICJwYWdlIiwgInBhcmFtcyIsICJhY3Rpb24iLCAiZm9ybWF0IiwgImZvcm1hdHZlcnNpb24iLCAicHJvcCIsICJyZWRpcmVjdHMiLCAiZGlzYWJsZXRvYyIsICJyZXNwb25zZSIsICJhcGkiLCAiZ2V0IiwgIl94IiwgImFwcGx5IiwgImFyZ3VtZW50cyIsICJnZXRFbGVtZW50cyIsICJlbGVtZW50IiwgInF1ZXJ5U2VsZWN0b3JBbGwiLCAiZ2V0RWxlbWVudHNGcm9tUGFyc2UiLCAiX3JlZjIiLCAidGl0bGVzIiwgImZpbGVOYW1lc0Zyb21QYXJzZSIsICJ1bmlxdWVBcnJheSIsICJfaXRlcmF0b3IiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAiX3N0ZXAiLCAicyIsICJuIiwgImRvbmUiLCAidGl0bGUiLCAidmFsdWUiLCAibGlua3MiLCAicmVnZXgiLCAiX2l0ZXJhdG9yMiIsICJfc3RlcDIiLCAidGl0bGVOYW1lIiwgInRlc3QiLCAibWF0Y2giLCAiZXhlYyIsICJmaWxlTmFtZSIsICJyZXBsYWNlIiwgImxlbmd0aCIsICJjb25jYXQiLCAiZXJyIiwgImUiLCAiZiIsICJpbWFnZXMiLCAiX2l0ZXJhdG9yMyIsICJfc3RlcDMiLCAiX3gyIiwgInF1ZXJ5SW1hZ2VzIiwgIl9yZWYzIiwgImltbGltaXQiLCAiX3gzIiwgImdldEltYWdlc0Zyb21FbGVtZW50cyIsICJmaWxlTGlua0VsZW1lbnRzIiwgImZpbGVOYW1lcyIsICJ3Z0FydGljbGVQYXRoIiwgIndnU2NyaXB0IiwgIm13IiwgImNvbmZpZyIsICJhcnRpY2xlUmVnZXgiLCAiUmVnRXhwIiwgInNjcmlwdFJlZ2V4IiwgIl9pdGVyYXRvcjQiLCAiX3N0ZXA0IiwgImhyZWYiLCAiY2xhc3NMaXN0IiwgImluY2x1ZGVzIiwgImNvbnRhaW5zIiwgImRlY29kZVVSSUNvbXBvbmVudCIsICJnZXRJbWFnZXMiLCAiX3JlZjQiLCAiZ2VuZXJhdGVBcnJheSIsICJpIiwgInF1ZXJ5dGl0bGVzIiwgInNwbGljZSIsICJwYWdlcyIsICJfaXRlcmF0b3I1IiwgIl9zdGVwNSIsICJfaXRlcmF0b3I2IiwgIl9zdGVwNiIsICJfeDQiLCAiZ2V0QWxsSW1hZ2VzIiwgIl9yZWY1IiwgInRvYXN0aWZ5IiwgInRleHQiLCAiZHVyYXRpb24iLCAid2dOYW1lc3BhY2VOdW1iZXIiLCAid2dQYWdlTmFtZSIsICJlbGVtZW50c0Zyb21QYWdlIiwgImRvY3VtZW50IiwgImZpbGVOYW1lc0Zyb21QYWdlIiwgIl94NSIsICJ3aW5kb3ciLCAiZGV0ZWN0SWZGaWxlUmVkaXJlY3QiLCAicXVpY2tJbXBvcnRBbGxNZWRpYSIsICJ3Z0Nhbm9uaWNhbFNwZWNpYWxQYWdlTmFtZSIsICJ3Z0N1clJldmlzaW9uSWQiLCAicG9ydGxldElkIiwgInF1ZXJ5U2VsZWN0b3IiLCAidXRpbCIsICJhZGRQb3J0bGV0TGluayIsICJhZGRFdmVudExpc3RlbmVyIiwgInRoZW4iLCAicmVmcmVzaFBhZ2UiXQp9Cg==

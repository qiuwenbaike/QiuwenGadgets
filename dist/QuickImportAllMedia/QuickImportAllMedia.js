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
var import_ext_gadget = require("ext.gadget.Util");
var import_ext_gadget2 = require("ext.gadget.QuickImport");
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
    const response = yield import_ext_gadget2.api.get(params);
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
    titles = (0, import_ext_gadget.uniqueArray)(titles);
    var _iterator = _createForOfIteratorHelper(titles), _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done; ) {
        const title = _step.value;
        try {
          const response = yield parse(title);
          if (!response["parse"] || !response["parse"].links && !response["parse"].images) {
            continue;
          }
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
                  fileName = fileName.replace(/((File|Image):)((File|Image):)?/i, "File:").replace("+", " ");
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
    return (0, import_ext_gadget.uniqueArray)(fileNamesFromParse);
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
    const response = yield import_ext_gadget2.api.get(params);
    return response;
  });
  return function queryImages2(_x3) {
    return _ref3.apply(this, arguments);
  };
}();
var getImagesFromElements = (fileLinkElements) => {
  const fileNames = [];
  fileLinkElements = (0, import_ext_gadget.uniqueArray)(fileLinkElements);
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
        fileName = decodeURIComponent(fileName).replace(/((File|Image):)((File|Image):)?/i, "File:").replace("+", " ");
        fileNames[fileNames.length] = fileName;
      }
      if (scriptRegex.test(href)) {
        const match = scriptRegex.exec(href);
        fileName = match[1];
        fileName = decodeURIComponent(fileName).replace(/((File|Image):)((File|Image):)?/i, "File:").replace("+", " ");
        fileNames[fileNames.length] = fileName;
      }
    }
  } catch (err) {
    _iterator4.e(err);
  } finally {
    _iterator4.f();
  }
  return (0, import_ext_gadget.uniqueArray)(fileNames);
};
var getImages = /* @__PURE__ */ function() {
  var _ref4 = _asyncToGenerator(function* (titles) {
    const fileNames = [];
    titles = (0, import_ext_gadget.uniqueArray)((0, import_ext_gadget.generateArray)(titles));
    for (let i = 0; i < titles.length; i++) {
      const querytitles = titles.splice(0, 25);
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
    return (0, import_ext_gadget.uniqueArray)(fileNames);
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
    fileNames = (0, import_ext_gadget.uniqueArray)([...fileNamesFromPage, ...fileNamesFromParse, ...yield getImages([...titles, ...fileNamesFromPage])]);
    toastifyInstance.hideToast();
    toastifyInstance = (0, import_ext_gadget3.toastify)({
      text: "获取迁移目标完成",
      duration: -1
    }, "success");
    return (0, import_ext_gadget.uniqueArray)(fileNames);
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1F1aWNrSW1wb3J0QWxsTWVkaWEvUXVpY2tJbXBvcnRBbGxNZWRpYS50cyIsICJzcmMvUXVpY2tJbXBvcnRBbGxNZWRpYS9tb2R1bGVzL2NvcmUudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7ZGV0ZWN0SWZGaWxlUmVkaXJlY3QsIHJlZnJlc2hQYWdlfSBmcm9tICdleHQuZ2FkZ2V0LlF1aWNrSW1wb3J0JztcbmltcG9ydCB7Z2V0QWxsSW1hZ2VzfSBmcm9tICcuL21vZHVsZXMvY29yZSc7XG5cbmRlY2xhcmUgZ2xvYmFsIHtcblx0aW50ZXJmYWNlIFdpbmRvdyB7XG5cdFx0ZGV0ZWN0SWZGaWxlUmVkaXJlY3Q6IERldGVjdElmRmlsZVJlZGlyZWN0O1xuXHRcdGdldEFsbEltYWdlczogdHlwZW9mIGdldEFsbEltYWdlcztcblx0fVxufVxuXG53aW5kb3cuZGV0ZWN0SWZGaWxlUmVkaXJlY3QgPSBkZXRlY3RJZkZpbGVSZWRpcmVjdDtcbndpbmRvdy5nZXRBbGxJbWFnZXMgPSBnZXRBbGxJbWFnZXM7XG5cbihmdW5jdGlvbiBxdWlja0ltcG9ydEFsbE1lZGlhKCk6IHZvaWQge1xuXHRjb25zdCB7d2dDYW5vbmljYWxTcGVjaWFsUGFnZU5hbWUsIHdnQ3VyUmV2aXNpb25JZH0gPSBtdy5jb25maWcuZ2V0KCk7XG5cdGlmIChcblx0XHQhKFxuXHRcdFx0d2dDdXJSZXZpc2lvbklkIHx8XG5cdFx0XHRbJ1ByZWZpeGluZGV4JywgJ0Jyb2tlblJlZGlyZWN0cycsICdXYW50ZWRmaWxlcyddLmluY2x1ZGVzKHdnQ2Fub25pY2FsU3BlY2lhbFBhZ2VOYW1lIHx8ICcnKVxuXHRcdClcblx0KSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgcG9ydGxldElkOiAncC1jYWN0aW9ucycgfCAncC10YicgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcC1jYWN0aW9ucycpID8gJ3AtY2FjdGlvbnMnIDogJ3AtdGInO1xuXHRjb25zdCBlbGVtZW50OiBIVE1MTElFbGVtZW50IHwgbnVsbCA9IG13LnV0aWwuYWRkUG9ydGxldExpbmsocG9ydGxldElkLCAnIycsICflr7zlhaXmraTpobXpnaLmiYDmnInmlofku7YnLCAndC1pbXBvcnQnKTtcblx0aWYgKCFlbGVtZW50KSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpOiB2b2lkID0+IHtcblx0XHR2b2lkIChhc3luYyAoKSA9PiB7XG5cdFx0XHRjb25zdCBmaWxlTmFtZXMgPSBhd2FpdCBnZXRBbGxJbWFnZXMoKTtcblx0XHRcdGlmICghZmlsZU5hbWVzLmxlbmd0aCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRhd2FpdCBkZXRlY3RJZkZpbGVSZWRpcmVjdChmaWxlTmFtZXMsIHRydWUpO1xuXHRcdH0pKCkudGhlbigoKSA9PiB7XG5cdFx0XHRyZWZyZXNoUGFnZSgpO1xuXHRcdH0pO1xuXHR9KTtcbn0pKCk7XG4iLCAiaW1wb3J0IHtnZW5lcmF0ZUFycmF5LCB1bmlxdWVBcnJheX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbmltcG9ydCB7YXBpfSBmcm9tICdleHQuZ2FkZ2V0LlF1aWNrSW1wb3J0JztcbmltcG9ydCB7dG9hc3RpZnl9IGZyb20gJ2V4dC5nYWRnZXQuVG9hc3RpZnknO1xuXG5sZXQgdG9hc3RpZnlJbnN0YW5jZTogVG9hc3RpZnlJbnN0YW5jZSA9IHtcblx0aGlkZVRvYXN0OiAoKSA9PiB7fSxcbn07XG5cbmNvbnN0IHBhcnNlID0gYXN5bmMgKHBhZ2U6IHN0cmluZykgPT4ge1xuXHRjb25zdCBwYXJhbXM6IEFwaVBhcnNlUGFyYW1zID0ge1xuXHRcdHBhZ2UsXG5cdFx0YWN0aW9uOiAncGFyc2UnLFxuXHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRwcm9wOiBbJ2xpbmtzJywgJ2ltYWdlcyddLFxuXHRcdHJlZGlyZWN0czogdHJ1ZSxcblx0XHRkaXNhYmxldG9jOiB0cnVlLFxuXHR9O1xuXHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGFwaS5nZXQocGFyYW1zKTtcblxuXHRyZXR1cm4gcmVzcG9uc2U7XG59O1xuXG5jb25zdCBnZXRFbGVtZW50cyA9IChlbGVtZW50OiBEb2N1bWVudCB8IEhUTUxFbGVtZW50KSA9PiB7XG5cdHJldHVybiBbXG5cdFx0Li4uZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxBbmNob3JFbGVtZW50PihcImFbaHJlZl49Jy93aWtpL0ZpbGU6J11cIiksXG5cdFx0Li4uZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxBbmNob3JFbGVtZW50PihcImFbaHJlZio9J3RpdGxlPUZpbGU6J11cIiksXG5cdF07XG59O1xuXG5jb25zdCBnZXRFbGVtZW50c0Zyb21QYXJzZSA9IGFzeW5jICh0aXRsZXM6IHN0cmluZ1tdKSA9PiB7XG5cdGNvbnN0IGZpbGVOYW1lc0Zyb21QYXJzZTogc3RyaW5nW10gPSBbXTtcblx0dGl0bGVzID0gdW5pcXVlQXJyYXkodGl0bGVzKTtcblxuXHRmb3IgKGNvbnN0IHRpdGxlIG9mIHRpdGxlcykge1xuXHRcdHRyeSB7XG5cdFx0XHRjb25zdCByZXNwb25zZSA9IGF3YWl0IHBhcnNlKHRpdGxlKTtcblx0XHRcdGlmICghcmVzcG9uc2VbJ3BhcnNlJ10gfHwgKCFyZXNwb25zZVsncGFyc2UnXS5saW5rcyAmJiAhcmVzcG9uc2VbJ3BhcnNlJ10uaW1hZ2VzKSkge1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKHJlc3BvbnNlWydwYXJzZSddLmxpbmtzKSB7XG5cdFx0XHRcdGNvbnN0IHJlZ2V4OiBSZWdFeHAgPSAvKEZpbGU6W14jXSspLztcblxuXHRcdFx0XHRmb3IgKGNvbnN0IHt0aXRsZTogdGl0bGVOYW1lfSBvZiByZXNwb25zZVsncGFyc2UnXS5saW5rcyBhcyB7dGl0bGU6IHN0cmluZ31bXSkge1xuXHRcdFx0XHRcdGlmIChyZWdleC50ZXN0KHRpdGxlTmFtZSkpIHtcblx0XHRcdFx0XHRcdGNvbnN0IG1hdGNoOiBSZWdFeHBFeGVjQXJyYXkgPSByZWdleC5leGVjKHRpdGxlTmFtZSkgYXMgUmVnRXhwRXhlY0FycmF5O1xuXHRcdFx0XHRcdFx0bGV0IFtmaWxlTmFtZV0gPSBtYXRjaDtcblx0XHRcdFx0XHRcdGZpbGVOYW1lID0gZmlsZU5hbWUucmVwbGFjZSgvKChGaWxlfEltYWdlKTopKChGaWxlfEltYWdlKTopPy9pLCAnRmlsZTonKS5yZXBsYWNlKCcrJywgJyAnKTtcblx0XHRcdFx0XHRcdGZpbGVOYW1lc0Zyb21QYXJzZVtmaWxlTmFtZXNGcm9tUGFyc2UubGVuZ3RoXSA9IGAke2ZpbGVOYW1lfWA7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGlmIChyZXNwb25zZVsncGFyc2UnXS5pbWFnZXMpIHtcblx0XHRcdFx0Zm9yIChjb25zdCBmaWxlTmFtZSBvZiByZXNwb25zZVsncGFyc2UnXS5pbWFnZXMpIHtcblx0XHRcdFx0XHRmaWxlTmFtZXNGcm9tUGFyc2VbZmlsZU5hbWVzRnJvbVBhcnNlLmxlbmd0aF0gPSBgRmlsZToke2ZpbGVOYW1lfWA7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9IGNhdGNoIHt9XG5cdH1cblxuXHRyZXR1cm4gdW5pcXVlQXJyYXkoZmlsZU5hbWVzRnJvbVBhcnNlKTtcbn07XG5cbmNvbnN0IHF1ZXJ5SW1hZ2VzID0gYXN5bmMgKHRpdGxlczogc3RyaW5nIHwgc3RyaW5nW10pID0+IHtcblx0Y29uc3QgcGFyYW1zOiBBcGlRdWVyeUltYWdlc1BhcmFtcyA9IHtcblx0XHR0aXRsZXMsXG5cdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRwcm9wOiAnaW1hZ2VzJyxcblx0XHRpbWxpbWl0OiA1MDAwLFxuXHR9O1xuXHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGFwaS5nZXQocGFyYW1zKTtcblxuXHRyZXR1cm4gcmVzcG9uc2U7XG59O1xuXG5jb25zdCBnZXRJbWFnZXNGcm9tRWxlbWVudHMgPSAoZmlsZUxpbmtFbGVtZW50czogSFRNTEFuY2hvckVsZW1lbnRbXSkgPT4ge1xuXHRjb25zdCBmaWxlTmFtZXM6IHN0cmluZ1tdID0gW107XG5cdGZpbGVMaW5rRWxlbWVudHMgPSB1bmlxdWVBcnJheShmaWxlTGlua0VsZW1lbnRzKTtcblx0Y29uc3Qge3dnQXJ0aWNsZVBhdGgsIHdnU2NyaXB0fSA9IG13LmNvbmZpZy5nZXQoKTtcblx0Y29uc3QgYXJ0aWNsZVJlZ2V4OiBSZWdFeHAgPSBuZXcgUmVnRXhwKGAke3dnQXJ0aWNsZVBhdGgucmVwbGFjZSgnJDEnLCAnJyl9KEZpbGU6W14jXSspYCk7XG5cdGNvbnN0IHNjcmlwdFJlZ2V4OiBSZWdFeHAgPSBuZXcgUmVnRXhwKGAke3dnU2NyaXB0fVxcXFw/dGl0bGU9KEZpbGU6W14jJl0rKWApO1xuXG5cdGZvciAoY29uc3QgZWxlbWVudCBvZiBmaWxlTGlua0VsZW1lbnRzKSB7XG5cdFx0Ly8gUmVwbGFjZSBgbmV3IFNldCgpYCB0byBhdm9pZCBwb2x5ZmlsbGluZyBjb3JlLWpzXG5cdFx0Y29uc3Qge2hyZWYsIGNsYXNzTGlzdH0gPSBlbGVtZW50O1xuXG5cdFx0aWYgKCFocmVmIHx8IGhyZWYuaW5jbHVkZXMoJ3JlZGxpbms9MScpKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRpZiAoY2xhc3NMaXN0LmNvbnRhaW5zKCduZXcnKSkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0bGV0IGZpbGVOYW1lOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cdFx0aWYgKGFydGljbGVSZWdleC50ZXN0KGhyZWYpKSB7XG5cdFx0XHRjb25zdCBtYXRjaDogUmVnRXhwRXhlY0FycmF5ID0gYXJ0aWNsZVJlZ2V4LmV4ZWMoaHJlZikgYXMgUmVnRXhwRXhlY0FycmF5O1xuXHRcdFx0ZmlsZU5hbWUgPSBtYXRjaFsxXSBhcyBzdHJpbmc7XG5cdFx0XHRmaWxlTmFtZSA9IGRlY29kZVVSSUNvbXBvbmVudChmaWxlTmFtZSlcblx0XHRcdFx0LnJlcGxhY2UoLygoRmlsZXxJbWFnZSk6KSgoRmlsZXxJbWFnZSk6KT8vaSwgJ0ZpbGU6Jylcblx0XHRcdFx0LnJlcGxhY2UoJysnLCAnICcpO1xuXHRcdFx0ZmlsZU5hbWVzW2ZpbGVOYW1lcy5sZW5ndGhdID0gZmlsZU5hbWU7XG5cdFx0fVxuXG5cdFx0aWYgKHNjcmlwdFJlZ2V4LnRlc3QoaHJlZikpIHtcblx0XHRcdGNvbnN0IG1hdGNoOiBSZWdFeHBFeGVjQXJyYXkgPSBzY3JpcHRSZWdleC5leGVjKGhyZWYpIGFzIFJlZ0V4cEV4ZWNBcnJheTtcblx0XHRcdGZpbGVOYW1lID0gbWF0Y2hbMV0gYXMgc3RyaW5nO1xuXHRcdFx0ZmlsZU5hbWUgPSBkZWNvZGVVUklDb21wb25lbnQoZmlsZU5hbWUpXG5cdFx0XHRcdC5yZXBsYWNlKC8oKEZpbGV8SW1hZ2UpOikoKEZpbGV8SW1hZ2UpOik/L2ksICdGaWxlOicpXG5cdFx0XHRcdC5yZXBsYWNlKCcrJywgJyAnKTtcblx0XHRcdGZpbGVOYW1lc1tmaWxlTmFtZXMubGVuZ3RoXSA9IGZpbGVOYW1lO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiB1bmlxdWVBcnJheShmaWxlTmFtZXMpO1xufTtcblxuY29uc3QgZ2V0SW1hZ2VzID0gYXN5bmMgKHRpdGxlczogc3RyaW5nIHwgc3RyaW5nW10pID0+IHtcblx0Y29uc3QgZmlsZU5hbWVzOiBzdHJpbmdbXSA9IFtdO1xuXHR0aXRsZXMgPSB1bmlxdWVBcnJheShnZW5lcmF0ZUFycmF5KHRpdGxlcykpO1xuXG5cdGZvciAobGV0IGkgPSAwOyBpIDwgdGl0bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y29uc3QgcXVlcnl0aXRsZXMgPSB0aXRsZXMuc3BsaWNlKDAsIDI1KTtcblx0XHRpZiAoIXF1ZXJ5dGl0bGVzLmxlbmd0aCkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcXVlcnlJbWFnZXMocXVlcnl0aXRsZXMpO1xuXHRcdFx0aWYgKCFyZXNwb25zZVsncXVlcnknXSB8fCAhcmVzcG9uc2VbJ3F1ZXJ5J10ucGFnZXMpIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cblx0XHRcdGZvciAoY29uc3QgcGFnZSBvZiByZXNwb25zZVsncXVlcnknXS5wYWdlcykge1xuXHRcdFx0XHRpZiAoIXBhZ2UuaW1hZ2VzKSB7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRmb3IgKGNvbnN0IHt0aXRsZX0gb2YgcGFnZS5pbWFnZXMgYXMge1xuXHRcdFx0XHRcdG5zOiBudW1iZXI7XG5cdFx0XHRcdFx0dGl0bGU6IHN0cmluZztcblx0XHRcdFx0fVtdKSB7XG5cdFx0XHRcdFx0aWYgKCF0aXRsZSkge1xuXHRcdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0ZmlsZU5hbWVzW2ZpbGVOYW1lcy5sZW5ndGhdID0gdGl0bGU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9IGNhdGNoIHt9XG5cdH1cblxuXHRyZXR1cm4gdW5pcXVlQXJyYXkoZmlsZU5hbWVzKTtcbn07XG5cbmNvbnN0IGdldEFsbEltYWdlcyA9IGFzeW5jICh0aXRsZXM/OiBzdHJpbmcgfCBzdHJpbmdbXSk6IFByb21pc2U8c3RyaW5nW10+ID0+IHtcblx0dG9hc3RpZnlJbnN0YW5jZS5oaWRlVG9hc3QoKTtcblx0dG9hc3RpZnkoXG5cdFx0e1xuXHRcdFx0dGV4dDogJ+ato+WcqOiOt+WPlui/geenu+ebruaghycsXG5cdFx0XHRkdXJhdGlvbjogLTEsXG5cdFx0fSxcblx0XHQnaW5mbydcblx0KTtcblxuXHRsZXQgZmlsZU5hbWVzOiBzdHJpbmdbXSA9IFtdO1xuXHRjb25zdCB7d2dOYW1lc3BhY2VOdW1iZXIsIHdnUGFnZU5hbWV9ID0gbXcuY29uZmlnLmdldCgpO1xuXG5cdGlmICghdGl0bGVzIHx8ICF0aXRsZXMubGVuZ3RoKSB7XG5cdFx0dGl0bGVzID0gd2dOYW1lc3BhY2VOdW1iZXIgPCAwID8gW10gOiBbd2dQYWdlTmFtZV07XG5cdH1cblxuXHRjb25zdCBlbGVtZW50c0Zyb21QYWdlID0gZ2V0RWxlbWVudHMoZG9jdW1lbnQpO1xuXHRjb25zdCBmaWxlTmFtZXNGcm9tUGFnZSA9IGdldEltYWdlc0Zyb21FbGVtZW50cyhlbGVtZW50c0Zyb21QYWdlKTtcblx0Y29uc3QgZmlsZU5hbWVzRnJvbVBhcnNlID0gYXdhaXQgZ2V0RWxlbWVudHNGcm9tUGFyc2UoZmlsZU5hbWVzRnJvbVBhZ2UpO1xuXG5cdGZpbGVOYW1lcyA9IHVuaXF1ZUFycmF5KFtcblx0XHQuLi5maWxlTmFtZXNGcm9tUGFnZSxcblx0XHQuLi5maWxlTmFtZXNGcm9tUGFyc2UsXG5cdFx0Li4uKGF3YWl0IGdldEltYWdlcyhbLi4udGl0bGVzLCAuLi5maWxlTmFtZXNGcm9tUGFnZV0pKSxcblx0XSk7XG5cblx0dG9hc3RpZnlJbnN0YW5jZS5oaWRlVG9hc3QoKTtcblx0dG9hc3RpZnlJbnN0YW5jZSA9IHRvYXN0aWZ5KFxuXHRcdHtcblx0XHRcdHRleHQ6ICfojrflj5bov4Hnp7vnm67moIflrozmiJAnLFxuXHRcdFx0ZHVyYXRpb246IC0xLFxuXHRcdH0sXG5cdFx0J3N1Y2Nlc3MnXG5cdCk7XG5cblx0cmV0dXJuIHVuaXF1ZUFycmF5KGZpbGVOYW1lcyk7IC8vIFJlcGxhY2UgYFsuLi5uZXcgU2V0KCldYCB0byBhdm9pZCBwb2x5ZmlsbGluZyBjb3JlLWpzXG59O1xuXG5leHBvcnQge2dldEFsbEltYWdlc307XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxxQkFBZ0RDLFFBQUEsd0JBQUE7O0FDQWhELElBQUFDLG9CQUF5Q0QsUUFBQSxpQkFBQTtBQUN6QyxJQUFBRSxxQkFBa0JGLFFBQUEsd0JBQUE7QUFDbEIsSUFBQUcscUJBQXVCSCxRQUFBLHFCQUFBO0FBRXZCLElBQUlJLG1CQUFxQztFQUN4Q0MsV0FBV0EsTUFBTTtFQUFDO0FBQ25CO0FBRUEsSUFBTUMsUUFBQSwyQkFBQTtBQUFBLE1BQUFDLE9BQUFDLGtCQUFRLFdBQU9DLE1BQWlCO0FBQ3JDLFVBQU1DLFNBQXlCO01BQzlCRDtNQUNBRSxRQUFRO01BQ1JDLFFBQVE7TUFDUkMsZUFBZTtNQUNmQyxNQUFNLENBQUMsU0FBUyxRQUFRO01BQ3hCQyxXQUFXO01BQ1hDLFlBQVk7SUFDYjtBQUNBLFVBQU1DLFdBQUEsTUFBaUJmLG1CQUFBZ0IsSUFBSUMsSUFBSVQsTUFBTTtBQUVyQyxXQUFPTztFQUNSLENBQUE7QUFBQSxTQUFBLFNBYk1YLE9BQUFjLElBQUE7QUFBQSxXQUFBYixLQUFBYyxNQUFBLE1BQUFDLFNBQUE7RUFBQTtBQUFBLEVBQUE7QUFlTixJQUFNQyxjQUFlQyxhQUFvQztBQUN4RCxTQUFPLENBQ04sR0FBR0EsUUFBUUMsaUJBQW9DLHdCQUF3QixHQUN2RSxHQUFHRCxRQUFRQyxpQkFBb0Msd0JBQXdCLENBQUE7QUFFekU7QUFFQSxJQUFNQyx1QkFBQSwyQkFBQTtBQUFBLE1BQUFDLFFBQUFuQixrQkFBdUIsV0FBT29CLFFBQXFCO0FBQ3hELFVBQU1DLHFCQUErQixDQUFBO0FBQ3JDRCxjQUFBLEdBQVMzQixrQkFBQTZCLGFBQVlGLE1BQU07QUFBQSxRQUFBRyxZQUFBQywyQkFFUEosTUFBQSxHQUFBSztBQUFBLFFBQUE7QUFBcEIsV0FBQUYsVUFBQUcsRUFBQSxHQUFBLEVBQUFELFFBQUFGLFVBQUFJLEVBQUEsR0FBQUMsUUFBNEI7QUFBQSxjQUFqQkMsUUFBQUosTUFBQUs7QUFDVixZQUFJO0FBQ0gsZ0JBQU1yQixXQUFBLE1BQWlCWCxNQUFNK0IsS0FBSztBQUNsQyxjQUFJLENBQUNwQixTQUFTLE9BQU8sS0FBTSxDQUFDQSxTQUFTLE9BQU8sRUFBRXNCLFNBQVMsQ0FBQ3RCLFNBQVMsT0FBTyxFQUFFdUIsUUFBUztBQUNsRjtVQUNEO0FBRUEsY0FBSXZCLFNBQVMsT0FBTyxFQUFFc0IsT0FBTztBQUM1QixrQkFBTUUsUUFBZ0I7QUFBQSxnQkFBQUMsYUFBQVYsMkJBRVdmLFNBQVMsT0FBTyxFQUFFc0IsS0FBQSxHQUFBSTtBQUFBLGdCQUFBO0FBQW5ELG1CQUFBRCxXQUFBUixFQUFBLEdBQUEsRUFBQVMsU0FBQUQsV0FBQVAsRUFBQSxHQUFBQyxRQUErRTtBQUFBLHNCQUFwRTtrQkFBQ0MsT0FBT087Z0JBQVMsSUFBQUQsT0FBQUw7QUFDM0Isb0JBQUlHLE1BQU1JLEtBQUtELFNBQVMsR0FBRztBQUMxQix3QkFBTUUsUUFBeUJMLE1BQU1NLEtBQUtILFNBQVM7QUFDbkQsc0JBQUksQ0FBQ0ksUUFBUSxJQUFJRjtBQUNqQkUsNkJBQVdBLFNBQVNDLFFBQVEsb0NBQW9DLE9BQU8sRUFBRUEsUUFBUSxLQUFLLEdBQUc7QUFDekZwQixxQ0FBbUJBLG1CQUFtQnFCLE1BQU0sSUFBQSxHQUFBQyxPQUFPSCxRQUFRO2dCQUM1RDtjQUNEO1lBQUEsU0FBQUksS0FBQTtBQUFBVix5QkFBQVcsRUFBQUQsR0FBQTtZQUFBLFVBQUE7QUFBQVYseUJBQUFZLEVBQUE7WUFBQTtVQUNEO0FBRUEsY0FBSXJDLFNBQVMsT0FBTyxFQUFFdUIsUUFBUTtBQUFBLGdCQUFBZSxhQUFBdkIsMkJBQ05mLFNBQVMsT0FBTyxFQUFFdUIsTUFBQSxHQUFBZ0I7QUFBQSxnQkFBQTtBQUF6QyxtQkFBQUQsV0FBQXJCLEVBQUEsR0FBQSxFQUFBc0IsU0FBQUQsV0FBQXBCLEVBQUEsR0FBQUMsUUFBaUQ7QUFBQSxzQkFBdENZLFdBQUFRLE9BQUFsQjtBQUNWVCxtQ0FBbUJBLG1CQUFtQnFCLE1BQU0sSUFBQSxRQUFBQyxPQUFZSCxRQUFRO2NBQ2pFO1lBQUEsU0FBQUksS0FBQTtBQUFBRyx5QkFBQUYsRUFBQUQsR0FBQTtZQUFBLFVBQUE7QUFBQUcseUJBQUFELEVBQUE7WUFBQTtVQUNEO1FBQ0QsUUFBUTtRQUFDO01BQ1Y7SUFBQSxTQUFBRixLQUFBO0FBQUFyQixnQkFBQXNCLEVBQUFELEdBQUE7SUFBQSxVQUFBO0FBQUFyQixnQkFBQXVCLEVBQUE7SUFBQTtBQUVBLFlBQUEsR0FBT3JELGtCQUFBNkIsYUFBWUQsa0JBQWtCO0VBQ3RDLENBQUE7QUFBQSxTQUFBLFNBakNNSCxzQkFBQStCLEtBQUE7QUFBQSxXQUFBOUIsTUFBQU4sTUFBQSxNQUFBQyxTQUFBO0VBQUE7QUFBQSxFQUFBO0FBbUNOLElBQU1vQyxjQUFBLDJCQUFBO0FBQUEsTUFBQUMsUUFBQW5ELGtCQUFjLFdBQU9vQixRQUE4QjtBQUN4RCxVQUFNbEIsU0FBK0I7TUFDcENrQjtNQUNBakIsUUFBUTtNQUNSQyxRQUFRO01BQ1JDLGVBQWU7TUFDZkMsTUFBTTtNQUNOOEMsU0FBUztJQUNWO0FBQ0EsVUFBTTNDLFdBQUEsTUFBaUJmLG1CQUFBZ0IsSUFBSUMsSUFBSVQsTUFBTTtBQUVyQyxXQUFPTztFQUNSLENBQUE7QUFBQSxTQUFBLFNBWk15QyxhQUFBRyxLQUFBO0FBQUEsV0FBQUYsTUFBQXRDLE1BQUEsTUFBQUMsU0FBQTtFQUFBO0FBQUEsRUFBQTtBQWNOLElBQU13Qyx3QkFBeUJDLHNCQUEwQztBQUN4RSxRQUFNQyxZQUFzQixDQUFBO0FBQzVCRCxzQkFBQSxHQUFtQjlELGtCQUFBNkIsYUFBWWlDLGdCQUFnQjtBQUMvQyxRQUFNO0lBQUNFO0lBQWVDO0VBQVEsSUFBSUMsR0FBR0MsT0FBT2pELElBQUk7QUFDaEQsUUFBTWtELGVBQXVCLElBQUlDLE9BQUEsR0FBQW5CLE9BQVVjLGNBQWNoQixRQUFRLE1BQU0sRUFBRSxHQUFDLGNBQUEsQ0FBYztBQUN4RixRQUFNc0IsY0FBc0IsSUFBSUQsT0FBQSxHQUFBbkIsT0FBVWUsVUFBUSx3QkFBQSxDQUF3QjtBQUFBLE1BQUFNLGFBQUF4QywyQkFFcEQrQixnQkFBQSxHQUFBVTtBQUFBLE1BQUE7QUFBdEIsU0FBQUQsV0FBQXRDLEVBQUEsR0FBQSxFQUFBdUMsU0FBQUQsV0FBQXJDLEVBQUEsR0FBQUMsUUFBd0M7QUFBQSxZQUE3QlosVUFBQWlELE9BQUFuQztBQUVWLFlBQU07UUFBQ29DO1FBQU1DO01BQVMsSUFBSW5EO0FBRTFCLFVBQUksQ0FBQ2tELFFBQVFBLEtBQUtFLFNBQVMsV0FBVyxHQUFHO0FBQ3hDO01BQ0Q7QUFFQSxVQUFJRCxVQUFVRSxTQUFTLEtBQUssR0FBRztBQUM5QjtNQUNEO0FBRUEsVUFBSTdCO0FBQ0osVUFBSXFCLGFBQWF4QixLQUFLNkIsSUFBSSxHQUFHO0FBQzVCLGNBQU01QixRQUF5QnVCLGFBQWF0QixLQUFLMkIsSUFBSTtBQUNyRDFCLG1CQUFXRixNQUFNLENBQUM7QUFDbEJFLG1CQUFXOEIsbUJBQW1COUIsUUFBUSxFQUNwQ0MsUUFBUSxvQ0FBb0MsT0FBTyxFQUNuREEsUUFBUSxLQUFLLEdBQUc7QUFDbEJlLGtCQUFVQSxVQUFVZCxNQUFNLElBQUlGO01BQy9CO0FBRUEsVUFBSXVCLFlBQVkxQixLQUFLNkIsSUFBSSxHQUFHO0FBQzNCLGNBQU01QixRQUF5QnlCLFlBQVl4QixLQUFLMkIsSUFBSTtBQUNwRDFCLG1CQUFXRixNQUFNLENBQUM7QUFDbEJFLG1CQUFXOEIsbUJBQW1COUIsUUFBUSxFQUNwQ0MsUUFBUSxvQ0FBb0MsT0FBTyxFQUNuREEsUUFBUSxLQUFLLEdBQUc7QUFDbEJlLGtCQUFVQSxVQUFVZCxNQUFNLElBQUlGO01BQy9CO0lBQ0Q7RUFBQSxTQUFBSSxLQUFBO0FBQUFvQixlQUFBbkIsRUFBQUQsR0FBQTtFQUFBLFVBQUE7QUFBQW9CLGVBQUFsQixFQUFBO0VBQUE7QUFFQSxVQUFBLEdBQU9yRCxrQkFBQTZCLGFBQVlrQyxTQUFTO0FBQzdCO0FBRUEsSUFBTWUsWUFBQSwyQkFBQTtBQUFBLE1BQUFDLFFBQUF4RSxrQkFBWSxXQUFPb0IsUUFBOEI7QUFDdEQsVUFBTW9DLFlBQXNCLENBQUE7QUFDNUJwQyxjQUFBLEdBQVMzQixrQkFBQTZCLGNBQUEsR0FBWTdCLGtCQUFBZ0YsZUFBY3JELE1BQU0sQ0FBQztBQUUxQyxhQUFTc0QsSUFBSSxHQUFHQSxJQUFJdEQsT0FBT3NCLFFBQVFnQyxLQUFLO0FBQ3ZDLFlBQU1DLGNBQWN2RCxPQUFPd0QsT0FBTyxHQUFHLEVBQUU7QUFDdkMsVUFBSSxDQUFDRCxZQUFZakMsUUFBUTtBQUN4QjtNQUNEO0FBRUEsVUFBSTtBQUNILGNBQU1qQyxXQUFBLE1BQWlCeUMsWUFBWXlCLFdBQVc7QUFDOUMsWUFBSSxDQUFDbEUsU0FBUyxPQUFPLEtBQUssQ0FBQ0EsU0FBUyxPQUFPLEVBQUVvRSxPQUFPO0FBQ25EO1FBQ0Q7QUFBQSxZQUFBQyxhQUFBdEQsMkJBRW1CZixTQUFTLE9BQU8sRUFBRW9FLEtBQUEsR0FBQUU7QUFBQSxZQUFBO0FBQXJDLGVBQUFELFdBQUFwRCxFQUFBLEdBQUEsRUFBQXFELFNBQUFELFdBQUFuRCxFQUFBLEdBQUFDLFFBQTRDO0FBQUEsa0JBQWpDM0IsT0FBQThFLE9BQUFqRDtBQUNWLGdCQUFJLENBQUM3QixLQUFLK0IsUUFBUTtBQUNqQjtZQUNEO0FBQUEsZ0JBQUFnRCxhQUFBeEQsMkJBRXNCdkIsS0FBSytCLE1BQUEsR0FBQWlEO0FBQUEsZ0JBQUE7QUFBM0IsbUJBQUFELFdBQUF0RCxFQUFBLEdBQUEsRUFBQXVELFNBQUFELFdBQUFyRCxFQUFBLEdBQUFDLFFBR0s7QUFBQSxzQkFITTtrQkFBQ0M7Z0JBQUssSUFBQW9ELE9BQUFuRDtBQUloQixvQkFBSSxDQUFDRCxPQUFPO0FBQ1g7Z0JBQ0Q7QUFFQTJCLDBCQUFVQSxVQUFVZCxNQUFNLElBQUliO2NBQy9CO1lBQUEsU0FBQWUsS0FBQTtBQUFBb0MseUJBQUFuQyxFQUFBRCxHQUFBO1lBQUEsVUFBQTtBQUFBb0MseUJBQUFsQyxFQUFBO1lBQUE7VUFDRDtRQUFBLFNBQUFGLEtBQUE7QUFBQWtDLHFCQUFBakMsRUFBQUQsR0FBQTtRQUFBLFVBQUE7QUFBQWtDLHFCQUFBaEMsRUFBQTtRQUFBO01BQ0QsUUFBUTtNQUFDO0lBQ1Y7QUFFQSxZQUFBLEdBQU9yRCxrQkFBQTZCLGFBQVlrQyxTQUFTO0VBQzdCLENBQUE7QUFBQSxTQUFBLFNBcENNZSxXQUFBVyxLQUFBO0FBQUEsV0FBQVYsTUFBQTNELE1BQUEsTUFBQUMsU0FBQTtFQUFBO0FBQUEsRUFBQTtBQXNDTixJQUFNcUUsZUFBQSwyQkFBQTtBQUFBLE1BQUFDLFFBQUFwRixrQkFBZSxXQUFPb0IsUUFBa0Q7QUFDN0V4QixxQkFBaUJDLFVBQVU7QUFDM0IsS0FBQSxHQUFBRixtQkFBQTBGLFVBQ0M7TUFDQ0MsTUFBTTtNQUNOQyxVQUFVO0lBQ1gsR0FDQSxNQUNEO0FBRUEsUUFBSS9CLFlBQXNCLENBQUE7QUFDMUIsVUFBTTtNQUFDZ0M7TUFBbUJDO0lBQVUsSUFBSTlCLEdBQUdDLE9BQU9qRCxJQUFJO0FBRXRELFFBQUksQ0FBQ1MsVUFBVSxDQUFDQSxPQUFPc0IsUUFBUTtBQUM5QnRCLGVBQVNvRSxvQkFBb0IsSUFBSSxDQUFBLElBQUssQ0FBQ0MsVUFBVTtJQUNsRDtBQUVBLFVBQU1DLG1CQUFtQjNFLFlBQVk0RSxRQUFRO0FBQzdDLFVBQU1DLG9CQUFvQnRDLHNCQUFzQm9DLGdCQUFnQjtBQUNoRSxVQUFNckUscUJBQUEsTUFBMkJILHFCQUFxQjBFLGlCQUFpQjtBQUV2RXBDLGlCQUFBLEdBQVkvRCxrQkFBQTZCLGFBQVksQ0FDdkIsR0FBR3NFLG1CQUNILEdBQUd2RSxvQkFDSCxHQUFBLE1BQVVrRCxVQUFVLENBQUMsR0FBR25ELFFBQVEsR0FBR3dFLGlCQUFpQixDQUFDLENBQUEsQ0FDckQ7QUFFRGhHLHFCQUFpQkMsVUFBVTtBQUMzQkQsd0JBQUEsR0FBbUJELG1CQUFBMEYsVUFDbEI7TUFDQ0MsTUFBTTtNQUNOQyxVQUFVO0lBQ1gsR0FDQSxTQUNEO0FBRUEsWUFBQSxHQUFPOUYsa0JBQUE2QixhQUFZa0MsU0FBUztFQUM3QixDQUFBO0FBQUEsU0FBQSxTQXJDTTJCLGNBQUFVLEtBQUE7QUFBQSxXQUFBVCxNQUFBdkUsTUFBQSxNQUFBQyxTQUFBO0VBQUE7QUFBQSxFQUFBOztBRHJKTmdGLE9BQU9DLHVCQUF1QnhHLG1CQUFBd0c7QUFDOUJELE9BQU9YLGVBQWVBO0NBRXJCLFNBQVNhLHNCQUE0QjtBQUNyQyxRQUFNO0lBQUNDO0lBQTRCQztFQUFlLElBQUl2QyxHQUFHQyxPQUFPakQsSUFBSTtBQUNwRSxNQUNDLEVBQ0N1RixtQkFDQSxDQUFDLGVBQWUsbUJBQW1CLGFBQWEsRUFBRTlCLFNBQVM2Qiw4QkFBOEIsRUFBRSxJQUUzRjtBQUNEO0VBQ0Q7QUFFQSxRQUFNRSxZQUFtQ1IsU0FBU1MsY0FBYyxhQUFhLElBQUksZUFBZTtBQUNoRyxRQUFNcEYsVUFBZ0MyQyxHQUFHMEMsS0FBS0MsZUFBZUgsV0FBVyxLQUFLLGFBQWEsVUFBVTtBQUNwRyxNQUFJLENBQUNuRixTQUFTO0FBQ2I7RUFDRDtBQUVBQSxVQUFRdUYsaUJBQWlCLFNBQVMsTUFBWTtBQUM3QyxTQUFBdkcsa0JBQU0sYUFBWTtBQUNqQixZQUFNd0QsWUFBQSxNQUFrQjJCLGFBQWE7QUFDckMsVUFBSSxDQUFDM0IsVUFBVWQsUUFBUTtBQUN0QjtNQUNEO0FBQ0EsYUFBQSxHQUFNbkQsbUJBQUF3RyxzQkFBcUJ2QyxXQUFXLElBQUk7SUFDM0MsQ0FBQSxFQUFHLEVBQUVnRCxLQUFLLE1BQU07QUFDZixPQUFBLEdBQUFqSCxtQkFBQWtILGFBQVk7SUFDYixDQUFDO0VBQ0YsQ0FBQztBQUNGLEdBQUc7IiwKICAibmFtZXMiOiBbImltcG9ydF9leHRfZ2FkZ2V0NCIsICJyZXF1aXJlIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgImltcG9ydF9leHRfZ2FkZ2V0MiIsICJpbXBvcnRfZXh0X2dhZGdldDMiLCAidG9hc3RpZnlJbnN0YW5jZSIsICJoaWRlVG9hc3QiLCAicGFyc2UiLCAiX3JlZiIsICJfYXN5bmNUb0dlbmVyYXRvciIsICJwYWdlIiwgInBhcmFtcyIsICJhY3Rpb24iLCAiZm9ybWF0IiwgImZvcm1hdHZlcnNpb24iLCAicHJvcCIsICJyZWRpcmVjdHMiLCAiZGlzYWJsZXRvYyIsICJyZXNwb25zZSIsICJhcGkiLCAiZ2V0IiwgIl94IiwgImFwcGx5IiwgImFyZ3VtZW50cyIsICJnZXRFbGVtZW50cyIsICJlbGVtZW50IiwgInF1ZXJ5U2VsZWN0b3JBbGwiLCAiZ2V0RWxlbWVudHNGcm9tUGFyc2UiLCAiX3JlZjIiLCAidGl0bGVzIiwgImZpbGVOYW1lc0Zyb21QYXJzZSIsICJ1bmlxdWVBcnJheSIsICJfaXRlcmF0b3IiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAiX3N0ZXAiLCAicyIsICJuIiwgImRvbmUiLCAidGl0bGUiLCAidmFsdWUiLCAibGlua3MiLCAiaW1hZ2VzIiwgInJlZ2V4IiwgIl9pdGVyYXRvcjIiLCAiX3N0ZXAyIiwgInRpdGxlTmFtZSIsICJ0ZXN0IiwgIm1hdGNoIiwgImV4ZWMiLCAiZmlsZU5hbWUiLCAicmVwbGFjZSIsICJsZW5ndGgiLCAiY29uY2F0IiwgImVyciIsICJlIiwgImYiLCAiX2l0ZXJhdG9yMyIsICJfc3RlcDMiLCAiX3gyIiwgInF1ZXJ5SW1hZ2VzIiwgIl9yZWYzIiwgImltbGltaXQiLCAiX3gzIiwgImdldEltYWdlc0Zyb21FbGVtZW50cyIsICJmaWxlTGlua0VsZW1lbnRzIiwgImZpbGVOYW1lcyIsICJ3Z0FydGljbGVQYXRoIiwgIndnU2NyaXB0IiwgIm13IiwgImNvbmZpZyIsICJhcnRpY2xlUmVnZXgiLCAiUmVnRXhwIiwgInNjcmlwdFJlZ2V4IiwgIl9pdGVyYXRvcjQiLCAiX3N0ZXA0IiwgImhyZWYiLCAiY2xhc3NMaXN0IiwgImluY2x1ZGVzIiwgImNvbnRhaW5zIiwgImRlY29kZVVSSUNvbXBvbmVudCIsICJnZXRJbWFnZXMiLCAiX3JlZjQiLCAiZ2VuZXJhdGVBcnJheSIsICJpIiwgInF1ZXJ5dGl0bGVzIiwgInNwbGljZSIsICJwYWdlcyIsICJfaXRlcmF0b3I1IiwgIl9zdGVwNSIsICJfaXRlcmF0b3I2IiwgIl9zdGVwNiIsICJfeDQiLCAiZ2V0QWxsSW1hZ2VzIiwgIl9yZWY1IiwgInRvYXN0aWZ5IiwgInRleHQiLCAiZHVyYXRpb24iLCAid2dOYW1lc3BhY2VOdW1iZXIiLCAid2dQYWdlTmFtZSIsICJlbGVtZW50c0Zyb21QYWdlIiwgImRvY3VtZW50IiwgImZpbGVOYW1lc0Zyb21QYWdlIiwgIl94NSIsICJ3aW5kb3ciLCAiZGV0ZWN0SWZGaWxlUmVkaXJlY3QiLCAicXVpY2tJbXBvcnRBbGxNZWRpYSIsICJ3Z0Nhbm9uaWNhbFNwZWNpYWxQYWdlTmFtZSIsICJ3Z0N1clJldmlzaW9uSWQiLCAicG9ydGxldElkIiwgInF1ZXJ5U2VsZWN0b3IiLCAidXRpbCIsICJhZGRQb3J0bGV0TGluayIsICJhZGRFdmVudExpc3RlbmVyIiwgInRoZW4iLCAicmVmcmVzaFBhZ2UiXQp9Cg==

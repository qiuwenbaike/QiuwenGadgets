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
                  if (!fileName || typeof fileName !== "string") {
                    continue;
                  }
                  fileName = decodeURIComponent(fileName).replace(/((File|Image):)((File|Image):)?/i, "File:");
                  fileNamesFromParse[fileNamesFromParse.length] = fileName;
                  if (fileName.includes("+")) {
                    fileNamesFromParse[fileNamesFromParse.length] = fileName.replace("+", " ");
                  }
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
                if ("".concat(fileName).includes("+")) {
                  fileNamesFromParse[fileNamesFromParse.length] = "File:".concat(fileName).replace("+", " ");
                }
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
      imlimit: 5e3,
      redirects: true
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
        if (!fileName || typeof fileName !== "string") {
          continue;
        }
        fileName = decodeURIComponent(fileName).replace(/((File|Image):)((File|Image):)?/i, "File:");
        fileNames[fileNames.length] = fileName;
        if (fileName.includes("+")) {
          fileNames[fileNames.length] = fileName.replace("+", " ");
        }
      }
      if (scriptRegex.test(href)) {
        const match = scriptRegex.exec(href);
        fileName = match[1];
        if (!fileName || typeof fileName !== "string") {
          continue;
        }
        fileName = decodeURIComponent(fileName).replace(/((File|Image):)((File|Image):)?/i, "File:");
        fileNames[fileNames.length] = fileName;
        if (fileName.includes("+")) {
          fileNames[fileNames.length] = fileName.replace("+", " ");
        }
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
window.getAllImages = getAllImages;

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1F1aWNrSW1wb3J0QWxsTWVkaWEvUXVpY2tJbXBvcnRBbGxNZWRpYS50cyIsICJzcmMvUXVpY2tJbXBvcnRBbGxNZWRpYS9tb2R1bGVzL2NvcmUudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7ZGV0ZWN0SWZGaWxlUmVkaXJlY3QsIHJlZnJlc2hQYWdlfSBmcm9tICdleHQuZ2FkZ2V0LlF1aWNrSW1wb3J0JztcbmltcG9ydCB7Z2V0QWxsSW1hZ2VzfSBmcm9tICcuL21vZHVsZXMvY29yZSc7XG5cbihmdW5jdGlvbiBxdWlja0ltcG9ydEFsbE1lZGlhKCk6IHZvaWQge1xuXHRjb25zdCB7d2dDYW5vbmljYWxTcGVjaWFsUGFnZU5hbWUsIHdnQ3VyUmV2aXNpb25JZH0gPSBtdy5jb25maWcuZ2V0KCk7XG5cdGlmIChcblx0XHQhKFxuXHRcdFx0d2dDdXJSZXZpc2lvbklkIHx8XG5cdFx0XHRbJ1ByZWZpeGluZGV4JywgJ0Jyb2tlblJlZGlyZWN0cycsICdXYW50ZWRmaWxlcyddLmluY2x1ZGVzKHdnQ2Fub25pY2FsU3BlY2lhbFBhZ2VOYW1lIHx8ICcnKVxuXHRcdClcblx0KSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgcG9ydGxldElkOiAncC1jYWN0aW9ucycgfCAncC10YicgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcC1jYWN0aW9ucycpID8gJ3AtY2FjdGlvbnMnIDogJ3AtdGInO1xuXHRjb25zdCBlbGVtZW50OiBIVE1MTElFbGVtZW50IHwgbnVsbCA9IG13LnV0aWwuYWRkUG9ydGxldExpbmsocG9ydGxldElkLCAnIycsICflr7zlhaXmraTpobXpnaLmiYDmnInmlofku7YnLCAndC1pbXBvcnQnKTtcblx0aWYgKCFlbGVtZW50KSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpOiB2b2lkID0+IHtcblx0XHR2b2lkIChhc3luYyAoKSA9PiB7XG5cdFx0XHRjb25zdCBmaWxlTmFtZXMgPSBhd2FpdCBnZXRBbGxJbWFnZXMoKTtcblx0XHRcdGlmICghZmlsZU5hbWVzLmxlbmd0aCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRhd2FpdCBkZXRlY3RJZkZpbGVSZWRpcmVjdChmaWxlTmFtZXMsIHRydWUpO1xuXHRcdH0pKCkudGhlbigoKSA9PiB7XG5cdFx0XHRyZWZyZXNoUGFnZSgpO1xuXHRcdH0pO1xuXHR9KTtcbn0pKCk7XG5cbndpbmRvdy5nZXRBbGxJbWFnZXMgPSBnZXRBbGxJbWFnZXM7XG4iLCAiaW1wb3J0IHtnZW5lcmF0ZUFycmF5LCB1bmlxdWVBcnJheX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbmltcG9ydCB7YXBpfSBmcm9tICdleHQuZ2FkZ2V0LlF1aWNrSW1wb3J0JztcbmltcG9ydCB7dG9hc3RpZnl9IGZyb20gJ2V4dC5nYWRnZXQuVG9hc3RpZnknO1xuXG5sZXQgdG9hc3RpZnlJbnN0YW5jZTogVG9hc3RpZnlJbnN0YW5jZSA9IHtcblx0aGlkZVRvYXN0OiAoKSA9PiB7fSxcbn07XG5cbmNvbnN0IHBhcnNlID0gYXN5bmMgKHBhZ2U6IHN0cmluZykgPT4ge1xuXHRjb25zdCBwYXJhbXM6IEFwaVBhcnNlUGFyYW1zID0ge1xuXHRcdHBhZ2UsXG5cdFx0YWN0aW9uOiAncGFyc2UnLFxuXHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRwcm9wOiBbJ2xpbmtzJywgJ2ltYWdlcyddLFxuXHRcdHJlZGlyZWN0czogdHJ1ZSxcblx0XHRkaXNhYmxldG9jOiB0cnVlLFxuXHR9O1xuXHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGFwaS5nZXQocGFyYW1zKTtcblxuXHRyZXR1cm4gcmVzcG9uc2U7XG59O1xuXG5jb25zdCBnZXRFbGVtZW50cyA9IChlbGVtZW50OiBEb2N1bWVudCB8IEhUTUxFbGVtZW50KSA9PiB7XG5cdHJldHVybiBbXG5cdFx0Li4uZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxBbmNob3JFbGVtZW50PihcImFbaHJlZl49Jy93aWtpL0ZpbGU6J11cIiksXG5cdFx0Li4uZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxBbmNob3JFbGVtZW50PihcImFbaHJlZio9J3RpdGxlPUZpbGU6J11cIiksXG5cdF07XG59O1xuXG5jb25zdCBnZXRFbGVtZW50c0Zyb21QYXJzZSA9IGFzeW5jICh0aXRsZXM6IHN0cmluZ1tdKSA9PiB7XG5cdGNvbnN0IGZpbGVOYW1lc0Zyb21QYXJzZTogc3RyaW5nW10gPSBbXTtcblx0dGl0bGVzID0gdW5pcXVlQXJyYXkodGl0bGVzKTtcblxuXHRmb3IgKGNvbnN0IHRpdGxlIG9mIHRpdGxlcykge1xuXHRcdHRyeSB7XG5cdFx0XHRjb25zdCByZXNwb25zZSA9IGF3YWl0IHBhcnNlKHRpdGxlKTtcblx0XHRcdGlmICghcmVzcG9uc2VbJ3BhcnNlJ10gfHwgKCFyZXNwb25zZVsncGFyc2UnXS5saW5rcyAmJiAhcmVzcG9uc2VbJ3BhcnNlJ10uaW1hZ2VzKSkge1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKHJlc3BvbnNlWydwYXJzZSddLmxpbmtzKSB7XG5cdFx0XHRcdGNvbnN0IHJlZ2V4OiBSZWdFeHAgPSAvKEZpbGU6W14jXSspLztcblxuXHRcdFx0XHRmb3IgKGNvbnN0IHt0aXRsZTogdGl0bGVOYW1lfSBvZiByZXNwb25zZVsncGFyc2UnXS5saW5rcyBhcyB7dGl0bGU6IHN0cmluZ31bXSkge1xuXHRcdFx0XHRcdGlmIChyZWdleC50ZXN0KHRpdGxlTmFtZSkpIHtcblx0XHRcdFx0XHRcdGNvbnN0IG1hdGNoOiBSZWdFeHBFeGVjQXJyYXkgPSByZWdleC5leGVjKHRpdGxlTmFtZSkgYXMgUmVnRXhwRXhlY0FycmF5O1xuXHRcdFx0XHRcdFx0bGV0IFtmaWxlTmFtZV0gPSBtYXRjaCBhcyBzdHJpbmdbXTtcblxuXHRcdFx0XHRcdFx0aWYgKCFmaWxlTmFtZSB8fCB0eXBlb2YgZmlsZU5hbWUgIT09ICdzdHJpbmcnKSB7XG5cdFx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRmaWxlTmFtZSA9IGRlY29kZVVSSUNvbXBvbmVudChmaWxlTmFtZSkucmVwbGFjZSgvKChGaWxlfEltYWdlKTopKChGaWxlfEltYWdlKTopPy9pLCAnRmlsZTonKTtcblx0XHRcdFx0XHRcdGZpbGVOYW1lc0Zyb21QYXJzZVtmaWxlTmFtZXNGcm9tUGFyc2UubGVuZ3RoXSA9IGZpbGVOYW1lO1xuXHRcdFx0XHRcdFx0aWYgKGZpbGVOYW1lLmluY2x1ZGVzKCcrJykpIHtcblx0XHRcdFx0XHRcdFx0ZmlsZU5hbWVzRnJvbVBhcnNlW2ZpbGVOYW1lc0Zyb21QYXJzZS5sZW5ndGhdID0gZmlsZU5hbWUucmVwbGFjZSgnKycsICcgJyk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGlmIChyZXNwb25zZVsncGFyc2UnXS5pbWFnZXMpIHtcblx0XHRcdFx0Zm9yIChjb25zdCBmaWxlTmFtZSBvZiByZXNwb25zZVsncGFyc2UnXS5pbWFnZXMpIHtcblx0XHRcdFx0XHRmaWxlTmFtZXNGcm9tUGFyc2VbZmlsZU5hbWVzRnJvbVBhcnNlLmxlbmd0aF0gPSBgRmlsZToke2ZpbGVOYW1lfWA7XG5cdFx0XHRcdFx0aWYgKGAke2ZpbGVOYW1lfWAuaW5jbHVkZXMoJysnKSkge1xuXHRcdFx0XHRcdFx0ZmlsZU5hbWVzRnJvbVBhcnNlW2ZpbGVOYW1lc0Zyb21QYXJzZS5sZW5ndGhdID0gYEZpbGU6JHtmaWxlTmFtZX1gLnJlcGxhY2UoJysnLCAnICcpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0gY2F0Y2gge31cblx0fVxuXG5cdHJldHVybiB1bmlxdWVBcnJheShmaWxlTmFtZXNGcm9tUGFyc2UpO1xufTtcblxuY29uc3QgcXVlcnlJbWFnZXMgPSBhc3luYyAodGl0bGVzOiBzdHJpbmcgfCBzdHJpbmdbXSkgPT4ge1xuXHRjb25zdCBwYXJhbXM6IEFwaVF1ZXJ5SW1hZ2VzUGFyYW1zID0ge1xuXHRcdHRpdGxlcyxcblx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdHByb3A6ICdpbWFnZXMnLFxuXHRcdGltbGltaXQ6IDUwMDAsXG5cdFx0cmVkaXJlY3RzOiB0cnVlLFxuXHR9O1xuXHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGFwaS5nZXQocGFyYW1zKTtcblxuXHRyZXR1cm4gcmVzcG9uc2U7XG59O1xuXG5jb25zdCBnZXRJbWFnZXNGcm9tRWxlbWVudHMgPSAoZmlsZUxpbmtFbGVtZW50czogSFRNTEFuY2hvckVsZW1lbnRbXSkgPT4ge1xuXHRjb25zdCBmaWxlTmFtZXM6IHN0cmluZ1tdID0gW107XG5cdGZpbGVMaW5rRWxlbWVudHMgPSB1bmlxdWVBcnJheShmaWxlTGlua0VsZW1lbnRzKTtcblx0Y29uc3Qge3dnQXJ0aWNsZVBhdGgsIHdnU2NyaXB0fSA9IG13LmNvbmZpZy5nZXQoKTtcblx0Y29uc3QgYXJ0aWNsZVJlZ2V4OiBSZWdFeHAgPSBuZXcgUmVnRXhwKGAke3dnQXJ0aWNsZVBhdGgucmVwbGFjZSgnJDEnLCAnJyl9KEZpbGU6W14jXSspYCk7XG5cdGNvbnN0IHNjcmlwdFJlZ2V4OiBSZWdFeHAgPSBuZXcgUmVnRXhwKGAke3dnU2NyaXB0fVxcXFw/dGl0bGU9KEZpbGU6W14jJl0rKWApO1xuXG5cdGZvciAoY29uc3QgZWxlbWVudCBvZiBmaWxlTGlua0VsZW1lbnRzKSB7XG5cdFx0Ly8gUmVwbGFjZSBTZXQgd2l0aCB1bmlxdWVBcnJheSwgYXZvaWRpbmcgY29yZS1qcyBwb2x5ZmlsbGluZ1xuXHRcdGNvbnN0IHtocmVmLCBjbGFzc0xpc3R9ID0gZWxlbWVudDtcblxuXHRcdGlmICghaHJlZiB8fCBocmVmLmluY2x1ZGVzKCdyZWRsaW5rPTEnKSkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0aWYgKGNsYXNzTGlzdC5jb250YWlucygnbmV3JykpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGxldCBmaWxlTmFtZTogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXHRcdGlmIChhcnRpY2xlUmVnZXgudGVzdChocmVmKSkge1xuXHRcdFx0Y29uc3QgbWF0Y2g6IFJlZ0V4cEV4ZWNBcnJheSA9IGFydGljbGVSZWdleC5leGVjKGhyZWYpIGFzIFJlZ0V4cEV4ZWNBcnJheTtcblx0XHRcdGZpbGVOYW1lID0gbWF0Y2hbMV07XG5cdFx0XHRpZiAoIWZpbGVOYW1lIHx8IHR5cGVvZiBmaWxlTmFtZSAhPT0gJ3N0cmluZycpIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cdFx0XHRmaWxlTmFtZSA9IGRlY29kZVVSSUNvbXBvbmVudChmaWxlTmFtZSkucmVwbGFjZSgvKChGaWxlfEltYWdlKTopKChGaWxlfEltYWdlKTopPy9pLCAnRmlsZTonKTtcblx0XHRcdGZpbGVOYW1lc1tmaWxlTmFtZXMubGVuZ3RoXSA9IGZpbGVOYW1lO1xuXHRcdFx0aWYgKGZpbGVOYW1lLmluY2x1ZGVzKCcrJykpIHtcblx0XHRcdFx0ZmlsZU5hbWVzW2ZpbGVOYW1lcy5sZW5ndGhdID0gZmlsZU5hbWUucmVwbGFjZSgnKycsICcgJyk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKHNjcmlwdFJlZ2V4LnRlc3QoaHJlZikpIHtcblx0XHRcdGNvbnN0IG1hdGNoOiBSZWdFeHBFeGVjQXJyYXkgPSBzY3JpcHRSZWdleC5leGVjKGhyZWYpIGFzIFJlZ0V4cEV4ZWNBcnJheTtcblx0XHRcdGZpbGVOYW1lID0gbWF0Y2hbMV07XG5cdFx0XHRpZiAoIWZpbGVOYW1lIHx8IHR5cGVvZiBmaWxlTmFtZSAhPT0gJ3N0cmluZycpIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cdFx0XHRmaWxlTmFtZSA9IGRlY29kZVVSSUNvbXBvbmVudChmaWxlTmFtZSkucmVwbGFjZSgvKChGaWxlfEltYWdlKTopKChGaWxlfEltYWdlKTopPy9pLCAnRmlsZTonKTtcblx0XHRcdGZpbGVOYW1lc1tmaWxlTmFtZXMubGVuZ3RoXSA9IGZpbGVOYW1lO1xuXHRcdFx0aWYgKGZpbGVOYW1lLmluY2x1ZGVzKCcrJykpIHtcblx0XHRcdFx0ZmlsZU5hbWVzW2ZpbGVOYW1lcy5sZW5ndGhdID0gZmlsZU5hbWUucmVwbGFjZSgnKycsICcgJyk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHVuaXF1ZUFycmF5KGZpbGVOYW1lcyk7XG59O1xuXG5jb25zdCBnZXRJbWFnZXMgPSBhc3luYyAodGl0bGVzOiBzdHJpbmcgfCBzdHJpbmdbXSkgPT4ge1xuXHRjb25zdCBmaWxlTmFtZXM6IHN0cmluZ1tdID0gW107XG5cdHRpdGxlcyA9IHVuaXF1ZUFycmF5KGdlbmVyYXRlQXJyYXkodGl0bGVzKSk7XG5cblx0Zm9yIChsZXQgaSA9IDA7IGkgPCB0aXRsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRjb25zdCBxdWVyeXRpdGxlcyA9IHRpdGxlcy5zcGxpY2UoMCwgMjUpO1xuXHRcdGlmICghcXVlcnl0aXRsZXMubGVuZ3RoKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHR0cnkge1xuXHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBxdWVyeUltYWdlcyhxdWVyeXRpdGxlcyk7XG5cdFx0XHRpZiAoIXJlc3BvbnNlWydxdWVyeSddIHx8ICFyZXNwb25zZVsncXVlcnknXS5wYWdlcykge1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblxuXHRcdFx0Zm9yIChjb25zdCBwYWdlIG9mIHJlc3BvbnNlWydxdWVyeSddLnBhZ2VzKSB7XG5cdFx0XHRcdGlmICghcGFnZS5pbWFnZXMpIHtcblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGZvciAoY29uc3Qge3RpdGxlfSBvZiBwYWdlLmltYWdlcyBhcyB7XG5cdFx0XHRcdFx0bnM6IG51bWJlcjtcblx0XHRcdFx0XHR0aXRsZTogc3RyaW5nO1xuXHRcdFx0XHR9W10pIHtcblx0XHRcdFx0XHRpZiAoIXRpdGxlKSB7XG5cdFx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRmaWxlTmFtZXNbZmlsZU5hbWVzLmxlbmd0aF0gPSB0aXRsZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0gY2F0Y2gge31cblx0fVxuXG5cdHJldHVybiB1bmlxdWVBcnJheShmaWxlTmFtZXMpO1xufTtcblxuY29uc3QgZ2V0QWxsSW1hZ2VzID0gYXN5bmMgKHRpdGxlcz86IHN0cmluZyB8IHN0cmluZ1tdKTogUHJvbWlzZTxzdHJpbmdbXT4gPT4ge1xuXHR0b2FzdGlmeUluc3RhbmNlLmhpZGVUb2FzdCgpO1xuXHR0b2FzdGlmeShcblx0XHR7XG5cdFx0XHR0ZXh0OiAn5q2j5Zyo6I635Y+W6L+B56e755uu5qCHJyxcblx0XHRcdGR1cmF0aW9uOiAtMSxcblx0XHR9LFxuXHRcdCdpbmZvJ1xuXHQpO1xuXG5cdGxldCBmaWxlTmFtZXM6IHN0cmluZ1tdID0gW107XG5cdGNvbnN0IHt3Z05hbWVzcGFjZU51bWJlciwgd2dQYWdlTmFtZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cblx0aWYgKCF0aXRsZXMgfHwgIXRpdGxlcy5sZW5ndGgpIHtcblx0XHR0aXRsZXMgPSB3Z05hbWVzcGFjZU51bWJlciA8IDAgPyBbXSA6IFt3Z1BhZ2VOYW1lXTtcblx0fVxuXG5cdGNvbnN0IGVsZW1lbnRzRnJvbVBhZ2UgPSBnZXRFbGVtZW50cyhkb2N1bWVudCk7XG5cdGNvbnN0IGZpbGVOYW1lc0Zyb21QYWdlID0gZ2V0SW1hZ2VzRnJvbUVsZW1lbnRzKGVsZW1lbnRzRnJvbVBhZ2UpO1xuXHRjb25zdCBmaWxlTmFtZXNGcm9tUGFyc2UgPSBhd2FpdCBnZXRFbGVtZW50c0Zyb21QYXJzZShmaWxlTmFtZXNGcm9tUGFnZSk7XG5cblx0ZmlsZU5hbWVzID0gdW5pcXVlQXJyYXkoW1xuXHRcdC4uLmZpbGVOYW1lc0Zyb21QYWdlLFxuXHRcdC4uLmZpbGVOYW1lc0Zyb21QYXJzZSxcblx0XHQuLi4oYXdhaXQgZ2V0SW1hZ2VzKFsuLi50aXRsZXMsIC4uLmZpbGVOYW1lc0Zyb21QYWdlXSkpLFxuXHRdKTtcblxuXHR0b2FzdGlmeUluc3RhbmNlLmhpZGVUb2FzdCgpO1xuXHR0b2FzdGlmeUluc3RhbmNlID0gdG9hc3RpZnkoXG5cdFx0e1xuXHRcdFx0dGV4dDogJ+iOt+WPlui/geenu+ebruagh+WujOaIkCcsXG5cdFx0XHRkdXJhdGlvbjogLTEsXG5cdFx0fSxcblx0XHQnc3VjY2Vzcydcblx0KTtcblxuXHRyZXR1cm4gdW5pcXVlQXJyYXkoZmlsZU5hbWVzKTsgLy8gUmVwbGFjZSBTZXQgd2l0aCB1bmlxdWVBcnJheSwgYXZvaWRpbmcgY29yZS1qcyBwb2x5ZmlsbGluZ1xufTtcblxuZXhwb3J0IHtnZXRBbGxJbWFnZXN9O1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEscUJBQWdEQyxRQUFBLHdCQUFBOztBQ0FoRCxJQUFBQyxvQkFBeUNELFFBQUEsaUJBQUE7QUFDekMsSUFBQUUscUJBQWtCRixRQUFBLHdCQUFBO0FBQ2xCLElBQUFHLHFCQUF1QkgsUUFBQSxxQkFBQTtBQUV2QixJQUFJSSxtQkFBcUM7RUFDeENDLFdBQVdBLE1BQU07RUFBQztBQUNuQjtBQUVBLElBQU1DLFFBQUEsMkJBQUE7QUFBQSxNQUFBQyxPQUFBQyxrQkFBUSxXQUFPQyxNQUFpQjtBQUNyQyxVQUFNQyxTQUF5QjtNQUM5QkQ7TUFDQUUsUUFBUTtNQUNSQyxRQUFRO01BQ1JDLGVBQWU7TUFDZkMsTUFBTSxDQUFDLFNBQVMsUUFBUTtNQUN4QkMsV0FBVztNQUNYQyxZQUFZO0lBQ2I7QUFDQSxVQUFNQyxXQUFBLE1BQWlCZixtQkFBQWdCLElBQUlDLElBQUlULE1BQU07QUFFckMs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QTZCLGFBQVlvQyxTQUFTO0VBQzdCLENBQUE7QUFBQSxTQUFBLFNBckNNeUIsY0FBQVUsS0FBQTtBQUFBLFdBQUFULE1BQUF2RSxNQUFBLE1BQUFDLFNBQUE7RUFBQTtBQUFBLEVBQUE7O0NEaExMLFNBQVNnRixzQkFBNEI7QUFDckMsUUFBTTtJQUFDQztJQUE0QkM7RUFBZSxJQUFJbkMsR0FBR0MsT0FBT25ELElBQUk7QUFDcEUsTUFDQyxFQUNDcUYsbUJBQ0EsQ0FBQyxlQUFlLG1CQUFtQixhQUFhLEVBQUVwRCxTQUFTbUQsOEJBQThCLEVBQUUsSUFFM0Y7QUFDRDtFQUNEO0FBRUEsUUFBTUUsWUFBbUNOLFNBQVNPLGNBQWMsYUFBYSxJQUFJLGVBQWU7QUFDaEcsUUFBTWxGLFVBQWdDNkMsR0FBR3NDLEtBQUtDLGVBQWVILFdBQVcsS0FBSyxhQUFhLFVBQVU7QUFDcEcsTUFBSSxDQUFDakYsU0FBUztBQUNiO0VBQ0Q7QUFFQUEsVUFBUXFGLGlCQUFpQixTQUFTLE1BQVk7QUFDN0MsU0FBQXJHLGtCQUFNLGFBQVk7QUFDakIsWUFBTTBELFlBQUEsTUFBa0J5QixhQUFhO0FBQ3JDLFVBQUksQ0FBQ3pCLFVBQVVmLFFBQVE7QUFDdEI7TUFDRDtBQUNBLGFBQUEsR0FBTXBELG1CQUFBK0csc0JBQXFCNUMsV0FBVyxJQUFJO0lBQzNDLENBQUEsRUFBRyxFQUFFNkMsS0FBSyxNQUFNO0FBQ2YsT0FBQSxHQUFBaEgsbUJBQUFpSCxhQUFZO0lBQ2IsQ0FBQztFQUNGLENBQUM7QUFDRixHQUFHO0FBRUhDLE9BQU90QixlQUFlQTsiLAogICJuYW1lcyI6IFsiaW1wb3J0X2V4dF9nYWRnZXQ0IiwgInJlcXVpcmUiLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAiaW1wb3J0X2V4dF9nYWRnZXQyIiwgImltcG9ydF9leHRfZ2FkZ2V0MyIsICJ0b2FzdGlmeUluc3RhbmNlIiwgImhpZGVUb2FzdCIsICJwYXJzZSIsICJfcmVmIiwgIl9hc3luY1RvR2VuZXJhdG9yIiwgInBhZ2UiLCAicGFyYW1zIiwgImFjdGlvbiIsICJmb3JtYXQiLCAiZm9ybWF0dmVyc2lvbiIsICJwcm9wIiwgInJlZGlyZWN0cyIsICJkaXNhYmxldG9jIiwgInJlc3BvbnNlIiwgImFwaSIsICJnZXQiLCAiX3giLCAiYXBwbHkiLCAiYXJndW1lbnRzIiwgImdldEVsZW1lbnRzIiwgImVsZW1lbnQiLCAicXVlcnlTZWxlY3RvckFsbCIsICJnZXRFbGVtZW50c0Zyb21QYXJzZSIsICJfcmVmMiIsICJ0aXRsZXMiLCAiZmlsZU5hbWVzRnJvbVBhcnNlIiwgInVuaXF1ZUFycmF5IiwgIl9pdGVyYXRvciIsICJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsICJfc3RlcCIsICJzIiwgIm4iLCAiZG9uZSIsICJ0aXRsZSIsICJ2YWx1ZSIsICJsaW5rcyIsICJpbWFnZXMiLCAicmVnZXgiLCAiX2l0ZXJhdG9yMiIsICJfc3RlcDIiLCAidGl0bGVOYW1lIiwgInRlc3QiLCAibWF0Y2giLCAiZXhlYyIsICJmaWxlTmFtZSIsICJkZWNvZGVVUklDb21wb25lbnQiLCAicmVwbGFjZSIsICJsZW5ndGgiLCAiaW5jbHVkZXMiLCAiZXJyIiwgImUiLCAiZiIsICJfaXRlcmF0b3IzIiwgIl9zdGVwMyIsICJjb25jYXQiLCAiX3gyIiwgInF1ZXJ5SW1hZ2VzIiwgIl9yZWYzIiwgImltbGltaXQiLCAiX3gzIiwgImdldEltYWdlc0Zyb21FbGVtZW50cyIsICJmaWxlTGlua0VsZW1lbnRzIiwgImZpbGVOYW1lcyIsICJ3Z0FydGljbGVQYXRoIiwgIndnU2NyaXB0IiwgIm13IiwgImNvbmZpZyIsICJhcnRpY2xlUmVnZXgiLCAiUmVnRXhwIiwgInNjcmlwdFJlZ2V4IiwgIl9pdGVyYXRvcjQiLCAiX3N0ZXA0IiwgImhyZWYiLCAiY2xhc3NMaXN0IiwgImNvbnRhaW5zIiwgImdldEltYWdlcyIsICJfcmVmNCIsICJnZW5lcmF0ZUFycmF5IiwgImkiLCAicXVlcnl0aXRsZXMiLCAic3BsaWNlIiwgInBhZ2VzIiwgIl9pdGVyYXRvcjUiLCAiX3N0ZXA1IiwgIl9pdGVyYXRvcjYiLCAiX3N0ZXA2IiwgIl94NCIsICJnZXRBbGxJbWFnZXMiLCAiX3JlZjUiLCAidG9hc3RpZnkiLCAidGV4dCIsICJkdXJhdGlvbiIsICJ3Z05hbWVzcGFjZU51bWJlciIsICJ3Z1BhZ2VOYW1lIiwgImVsZW1lbnRzRnJvbVBhZ2UiLCAiZG9jdW1lbnQiLCAiZmlsZU5hbWVzRnJvbVBhZ2UiLCAiX3g1IiwgInF1aWNrSW1wb3J0QWxsTWVkaWEiLCAid2dDYW5vbmljYWxTcGVjaWFsUGFnZU5hbWUiLCAid2dDdXJSZXZpc2lvbklkIiwgInBvcnRsZXRJZCIsICJxdWVyeVNlbGVjdG9yIiwgInV0aWwiLCAiYWRkUG9ydGxldExpbmsiLCAiYWRkRXZlbnRMaXN0ZW5lciIsICJkZXRlY3RJZkZpbGVSZWRpcmVjdCIsICJ0aGVuIiwgInJlZnJlc2hQYWdlIiwgIndpbmRvdyJdCn0K

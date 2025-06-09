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
        fileName = decodeURIComponent(fileName).replace(/((File|Image):)((File|Image):)?/i, "File:");
        fileNames[fileNames.length] = fileName;
        if (fileName.includes("+")) {
          fileNames[fileNames.length] = fileName.replace("+", " ");
        }
      }
      if (scriptRegex.test(href)) {
        const match = scriptRegex.exec(href);
        fileName = match[1];
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1F1aWNrSW1wb3J0QWxsTWVkaWEvUXVpY2tJbXBvcnRBbGxNZWRpYS50cyIsICJzcmMvUXVpY2tJbXBvcnRBbGxNZWRpYS9tb2R1bGVzL2NvcmUudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7ZGV0ZWN0SWZGaWxlUmVkaXJlY3QsIHJlZnJlc2hQYWdlfSBmcm9tICdleHQuZ2FkZ2V0LlF1aWNrSW1wb3J0JztcbmltcG9ydCB7Z2V0QWxsSW1hZ2VzfSBmcm9tICcuL21vZHVsZXMvY29yZSc7XG5cbihmdW5jdGlvbiBxdWlja0ltcG9ydEFsbE1lZGlhKCk6IHZvaWQge1xuXHRjb25zdCB7d2dDYW5vbmljYWxTcGVjaWFsUGFnZU5hbWUsIHdnQ3VyUmV2aXNpb25JZH0gPSBtdy5jb25maWcuZ2V0KCk7XG5cdGlmIChcblx0XHQhKFxuXHRcdFx0d2dDdXJSZXZpc2lvbklkIHx8XG5cdFx0XHRbJ1ByZWZpeGluZGV4JywgJ0Jyb2tlblJlZGlyZWN0cycsICdXYW50ZWRmaWxlcyddLmluY2x1ZGVzKHdnQ2Fub25pY2FsU3BlY2lhbFBhZ2VOYW1lIHx8ICcnKVxuXHRcdClcblx0KSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgcG9ydGxldElkOiAncC1jYWN0aW9ucycgfCAncC10YicgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcC1jYWN0aW9ucycpID8gJ3AtY2FjdGlvbnMnIDogJ3AtdGInO1xuXHRjb25zdCBlbGVtZW50OiBIVE1MTElFbGVtZW50IHwgbnVsbCA9IG13LnV0aWwuYWRkUG9ydGxldExpbmsocG9ydGxldElkLCAnIycsICflr7zlhaXmraTpobXpnaLmiYDmnInmlofku7YnLCAndC1pbXBvcnQnKTtcblx0aWYgKCFlbGVtZW50KSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpOiB2b2lkID0+IHtcblx0XHR2b2lkIChhc3luYyAoKSA9PiB7XG5cdFx0XHRjb25zdCBmaWxlTmFtZXMgPSBhd2FpdCBnZXRBbGxJbWFnZXMoKTtcblx0XHRcdGlmICghZmlsZU5hbWVzLmxlbmd0aCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRhd2FpdCBkZXRlY3RJZkZpbGVSZWRpcmVjdChmaWxlTmFtZXMsIHRydWUpO1xuXHRcdH0pKCkudGhlbigoKSA9PiB7XG5cdFx0XHRyZWZyZXNoUGFnZSgpO1xuXHRcdH0pO1xuXHR9KTtcbn0pKCk7XG5cbndpbmRvdy5nZXRBbGxJbWFnZXMgPSBnZXRBbGxJbWFnZXM7XG4iLCAiaW1wb3J0IHtnZW5lcmF0ZUFycmF5LCB1bmlxdWVBcnJheX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbmltcG9ydCB7YXBpfSBmcm9tICdleHQuZ2FkZ2V0LlF1aWNrSW1wb3J0JztcbmltcG9ydCB7dG9hc3RpZnl9IGZyb20gJ2V4dC5nYWRnZXQuVG9hc3RpZnknO1xuXG5sZXQgdG9hc3RpZnlJbnN0YW5jZTogVG9hc3RpZnlJbnN0YW5jZSA9IHtcblx0aGlkZVRvYXN0OiAoKSA9PiB7fSxcbn07XG5cbmNvbnN0IHBhcnNlID0gYXN5bmMgKHBhZ2U6IHN0cmluZykgPT4ge1xuXHRjb25zdCBwYXJhbXM6IEFwaVBhcnNlUGFyYW1zID0ge1xuXHRcdHBhZ2UsXG5cdFx0YWN0aW9uOiAncGFyc2UnLFxuXHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRwcm9wOiBbJ2xpbmtzJywgJ2ltYWdlcyddLFxuXHRcdHJlZGlyZWN0czogdHJ1ZSxcblx0XHRkaXNhYmxldG9jOiB0cnVlLFxuXHR9O1xuXHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGFwaS5nZXQocGFyYW1zKTtcblxuXHRyZXR1cm4gcmVzcG9uc2U7XG59O1xuXG5jb25zdCBnZXRFbGVtZW50cyA9IChlbGVtZW50OiBEb2N1bWVudCB8IEhUTUxFbGVtZW50KSA9PiB7XG5cdHJldHVybiBbXG5cdFx0Li4uZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxBbmNob3JFbGVtZW50PihcImFbaHJlZl49Jy93aWtpL0ZpbGU6J11cIiksXG5cdFx0Li4uZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxBbmNob3JFbGVtZW50PihcImFbaHJlZio9J3RpdGxlPUZpbGU6J11cIiksXG5cdF07XG59O1xuXG5jb25zdCBnZXRFbGVtZW50c0Zyb21QYXJzZSA9IGFzeW5jICh0aXRsZXM6IHN0cmluZ1tdKSA9PiB7XG5cdGNvbnN0IGZpbGVOYW1lc0Zyb21QYXJzZTogc3RyaW5nW10gPSBbXTtcblx0dGl0bGVzID0gdW5pcXVlQXJyYXkodGl0bGVzKTtcblxuXHRmb3IgKGNvbnN0IHRpdGxlIG9mIHRpdGxlcykge1xuXHRcdHRyeSB7XG5cdFx0XHRjb25zdCByZXNwb25zZSA9IGF3YWl0IHBhcnNlKHRpdGxlKTtcblx0XHRcdGlmICghcmVzcG9uc2VbJ3BhcnNlJ10gfHwgKCFyZXNwb25zZVsncGFyc2UnXS5saW5rcyAmJiAhcmVzcG9uc2VbJ3BhcnNlJ10uaW1hZ2VzKSkge1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKHJlc3BvbnNlWydwYXJzZSddLmxpbmtzKSB7XG5cdFx0XHRcdGNvbnN0IHJlZ2V4OiBSZWdFeHAgPSAvKEZpbGU6W14jXSspLztcblxuXHRcdFx0XHRmb3IgKGNvbnN0IHt0aXRsZTogdGl0bGVOYW1lfSBvZiByZXNwb25zZVsncGFyc2UnXS5saW5rcyBhcyB7dGl0bGU6IHN0cmluZ31bXSkge1xuXHRcdFx0XHRcdGlmIChyZWdleC50ZXN0KHRpdGxlTmFtZSkpIHtcblx0XHRcdFx0XHRcdGNvbnN0IG1hdGNoOiBSZWdFeHBFeGVjQXJyYXkgPSByZWdleC5leGVjKHRpdGxlTmFtZSkgYXMgUmVnRXhwRXhlY0FycmF5O1xuXHRcdFx0XHRcdFx0bGV0IFtmaWxlTmFtZV0gPSBtYXRjaDtcblx0XHRcdFx0XHRcdGZpbGVOYW1lID0gZGVjb2RlVVJJQ29tcG9uZW50KGZpbGVOYW1lKS5yZXBsYWNlKC8oKEZpbGV8SW1hZ2UpOikoKEZpbGV8SW1hZ2UpOik/L2ksICdGaWxlOicpO1xuXHRcdFx0XHRcdFx0ZmlsZU5hbWVzRnJvbVBhcnNlW2ZpbGVOYW1lc0Zyb21QYXJzZS5sZW5ndGhdID0gZmlsZU5hbWU7XG5cdFx0XHRcdFx0XHRpZiAoZmlsZU5hbWUuaW5jbHVkZXMoJysnKSkge1xuXHRcdFx0XHRcdFx0XHRmaWxlTmFtZXNGcm9tUGFyc2VbZmlsZU5hbWVzRnJvbVBhcnNlLmxlbmd0aF0gPSBmaWxlTmFtZS5yZXBsYWNlKCcrJywgJyAnKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0aWYgKHJlc3BvbnNlWydwYXJzZSddLmltYWdlcykge1xuXHRcdFx0XHRmb3IgKGNvbnN0IGZpbGVOYW1lIG9mIHJlc3BvbnNlWydwYXJzZSddLmltYWdlcykge1xuXHRcdFx0XHRcdGZpbGVOYW1lc0Zyb21QYXJzZVtmaWxlTmFtZXNGcm9tUGFyc2UubGVuZ3RoXSA9IGBGaWxlOiR7ZmlsZU5hbWV9YDtcblx0XHRcdFx0XHRpZiAoYCR7ZmlsZU5hbWV9YC5pbmNsdWRlcygnKycpKSB7XG5cdFx0XHRcdFx0XHRmaWxlTmFtZXNGcm9tUGFyc2VbZmlsZU5hbWVzRnJvbVBhcnNlLmxlbmd0aF0gPSBgRmlsZToke2ZpbGVOYW1lfWAucmVwbGFjZSgnKycsICcgJyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSBjYXRjaCB7fVxuXHR9XG5cblx0cmV0dXJuIHVuaXF1ZUFycmF5KGZpbGVOYW1lc0Zyb21QYXJzZSk7XG59O1xuXG5jb25zdCBxdWVyeUltYWdlcyA9IGFzeW5jICh0aXRsZXM6IHN0cmluZyB8IHN0cmluZ1tdKSA9PiB7XG5cdGNvbnN0IHBhcmFtczogQXBpUXVlcnlJbWFnZXNQYXJhbXMgPSB7XG5cdFx0dGl0bGVzLFxuXHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0cHJvcDogJ2ltYWdlcycsXG5cdFx0aW1saW1pdDogNTAwMCxcblx0XHRyZWRpcmVjdHM6IHRydWUsXG5cdH07XG5cdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXBpLmdldChwYXJhbXMpO1xuXG5cdHJldHVybiByZXNwb25zZTtcbn07XG5cbmNvbnN0IGdldEltYWdlc0Zyb21FbGVtZW50cyA9IChmaWxlTGlua0VsZW1lbnRzOiBIVE1MQW5jaG9yRWxlbWVudFtdKSA9PiB7XG5cdGNvbnN0IGZpbGVOYW1lczogc3RyaW5nW10gPSBbXTtcblx0ZmlsZUxpbmtFbGVtZW50cyA9IHVuaXF1ZUFycmF5KGZpbGVMaW5rRWxlbWVudHMpO1xuXHRjb25zdCB7d2dBcnRpY2xlUGF0aCwgd2dTY3JpcHR9ID0gbXcuY29uZmlnLmdldCgpO1xuXHRjb25zdCBhcnRpY2xlUmVnZXg6IFJlZ0V4cCA9IG5ldyBSZWdFeHAoYCR7d2dBcnRpY2xlUGF0aC5yZXBsYWNlKCckMScsICcnKX0oRmlsZTpbXiNdKylgKTtcblx0Y29uc3Qgc2NyaXB0UmVnZXg6IFJlZ0V4cCA9IG5ldyBSZWdFeHAoYCR7d2dTY3JpcHR9XFxcXD90aXRsZT0oRmlsZTpbXiMmXSspYCk7XG5cblx0Zm9yIChjb25zdCBlbGVtZW50IG9mIGZpbGVMaW5rRWxlbWVudHMpIHtcblx0XHQvLyBSZXBsYWNlIFNldCB3aXRoIHVuaXF1ZUFycmF5LCBhdm9pZGluZyBjb3JlLWpzIHBvbHlmaWxsaW5nXG5cdFx0Y29uc3Qge2hyZWYsIGNsYXNzTGlzdH0gPSBlbGVtZW50O1xuXG5cdFx0aWYgKCFocmVmIHx8IGhyZWYuaW5jbHVkZXMoJ3JlZGxpbms9MScpKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRpZiAoY2xhc3NMaXN0LmNvbnRhaW5zKCduZXcnKSkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0bGV0IGZpbGVOYW1lOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cdFx0aWYgKGFydGljbGVSZWdleC50ZXN0KGhyZWYpKSB7XG5cdFx0XHRjb25zdCBtYXRjaDogUmVnRXhwRXhlY0FycmF5ID0gYXJ0aWNsZVJlZ2V4LmV4ZWMoaHJlZikgYXMgUmVnRXhwRXhlY0FycmF5O1xuXHRcdFx0ZmlsZU5hbWUgPSBtYXRjaFsxXSBhcyBzdHJpbmc7XG5cdFx0XHRmaWxlTmFtZSA9IGRlY29kZVVSSUNvbXBvbmVudChmaWxlTmFtZSkucmVwbGFjZSgvKChGaWxlfEltYWdlKTopKChGaWxlfEltYWdlKTopPy9pLCAnRmlsZTonKTtcblx0XHRcdGZpbGVOYW1lc1tmaWxlTmFtZXMubGVuZ3RoXSA9IGZpbGVOYW1lO1xuXHRcdFx0aWYgKGZpbGVOYW1lLmluY2x1ZGVzKCcrJykpIHtcblx0XHRcdFx0ZmlsZU5hbWVzW2ZpbGVOYW1lcy5sZW5ndGhdID0gZmlsZU5hbWUucmVwbGFjZSgnKycsICcgJyk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKHNjcmlwdFJlZ2V4LnRlc3QoaHJlZikpIHtcblx0XHRcdGNvbnN0IG1hdGNoOiBSZWdFeHBFeGVjQXJyYXkgPSBzY3JpcHRSZWdleC5leGVjKGhyZWYpIGFzIFJlZ0V4cEV4ZWNBcnJheTtcblx0XHRcdGZpbGVOYW1lID0gbWF0Y2hbMV0gYXMgc3RyaW5nO1xuXHRcdFx0ZmlsZU5hbWUgPSBkZWNvZGVVUklDb21wb25lbnQoZmlsZU5hbWUpLnJlcGxhY2UoLygoRmlsZXxJbWFnZSk6KSgoRmlsZXxJbWFnZSk6KT8vaSwgJ0ZpbGU6Jyk7XG5cdFx0XHRmaWxlTmFtZXNbZmlsZU5hbWVzLmxlbmd0aF0gPSBmaWxlTmFtZTtcblx0XHRcdGlmIChmaWxlTmFtZS5pbmNsdWRlcygnKycpKSB7XG5cdFx0XHRcdGZpbGVOYW1lc1tmaWxlTmFtZXMubGVuZ3RoXSA9IGZpbGVOYW1lLnJlcGxhY2UoJysnLCAnICcpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiB1bmlxdWVBcnJheShmaWxlTmFtZXMpO1xufTtcblxuY29uc3QgZ2V0SW1hZ2VzID0gYXN5bmMgKHRpdGxlczogc3RyaW5nIHwgc3RyaW5nW10pID0+IHtcblx0Y29uc3QgZmlsZU5hbWVzOiBzdHJpbmdbXSA9IFtdO1xuXHR0aXRsZXMgPSB1bmlxdWVBcnJheShnZW5lcmF0ZUFycmF5KHRpdGxlcykpO1xuXG5cdGZvciAobGV0IGkgPSAwOyBpIDwgdGl0bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y29uc3QgcXVlcnl0aXRsZXMgPSB0aXRsZXMuc3BsaWNlKDAsIDI1KTtcblx0XHRpZiAoIXF1ZXJ5dGl0bGVzLmxlbmd0aCkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcXVlcnlJbWFnZXMocXVlcnl0aXRsZXMpO1xuXHRcdFx0aWYgKCFyZXNwb25zZVsncXVlcnknXSB8fCAhcmVzcG9uc2VbJ3F1ZXJ5J10ucGFnZXMpIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cblx0XHRcdGZvciAoY29uc3QgcGFnZSBvZiByZXNwb25zZVsncXVlcnknXS5wYWdlcykge1xuXHRcdFx0XHRpZiAoIXBhZ2UuaW1hZ2VzKSB7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRmb3IgKGNvbnN0IHt0aXRsZX0gb2YgcGFnZS5pbWFnZXMgYXMge1xuXHRcdFx0XHRcdG5zOiBudW1iZXI7XG5cdFx0XHRcdFx0dGl0bGU6IHN0cmluZztcblx0XHRcdFx0fVtdKSB7XG5cdFx0XHRcdFx0aWYgKCF0aXRsZSkge1xuXHRcdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0ZmlsZU5hbWVzW2ZpbGVOYW1lcy5sZW5ndGhdID0gdGl0bGU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9IGNhdGNoIHt9XG5cdH1cblxuXHRyZXR1cm4gdW5pcXVlQXJyYXkoZmlsZU5hbWVzKTtcbn07XG5cbmNvbnN0IGdldEFsbEltYWdlcyA9IGFzeW5jICh0aXRsZXM/OiBzdHJpbmcgfCBzdHJpbmdbXSk6IFByb21pc2U8c3RyaW5nW10+ID0+IHtcblx0dG9hc3RpZnlJbnN0YW5jZS5oaWRlVG9hc3QoKTtcblx0dG9hc3RpZnkoXG5cdFx0e1xuXHRcdFx0dGV4dDogJ+ato+WcqOiOt+WPlui/geenu+ebruaghycsXG5cdFx0XHRkdXJhdGlvbjogLTEsXG5cdFx0fSxcblx0XHQnaW5mbydcblx0KTtcblxuXHRsZXQgZmlsZU5hbWVzOiBzdHJpbmdbXSA9IFtdO1xuXHRjb25zdCB7d2dOYW1lc3BhY2VOdW1iZXIsIHdnUGFnZU5hbWV9ID0gbXcuY29uZmlnLmdldCgpO1xuXG5cdGlmICghdGl0bGVzIHx8ICF0aXRsZXMubGVuZ3RoKSB7XG5cdFx0dGl0bGVzID0gd2dOYW1lc3BhY2VOdW1iZXIgPCAwID8gW10gOiBbd2dQYWdlTmFtZV07XG5cdH1cblxuXHRjb25zdCBlbGVtZW50c0Zyb21QYWdlID0gZ2V0RWxlbWVudHMoZG9jdW1lbnQpO1xuXHRjb25zdCBmaWxlTmFtZXNGcm9tUGFnZSA9IGdldEltYWdlc0Zyb21FbGVtZW50cyhlbGVtZW50c0Zyb21QYWdlKTtcblx0Y29uc3QgZmlsZU5hbWVzRnJvbVBhcnNlID0gYXdhaXQgZ2V0RWxlbWVudHNGcm9tUGFyc2UoZmlsZU5hbWVzRnJvbVBhZ2UpO1xuXG5cdGZpbGVOYW1lcyA9IHVuaXF1ZUFycmF5KFtcblx0XHQuLi5maWxlTmFtZXNGcm9tUGFnZSxcblx0XHQuLi5maWxlTmFtZXNGcm9tUGFyc2UsXG5cdFx0Li4uKGF3YWl0IGdldEltYWdlcyhbLi4udGl0bGVzLCAuLi5maWxlTmFtZXNGcm9tUGFnZV0pKSxcblx0XSk7XG5cblx0dG9hc3RpZnlJbnN0YW5jZS5oaWRlVG9hc3QoKTtcblx0dG9hc3RpZnlJbnN0YW5jZSA9IHRvYXN0aWZ5KFxuXHRcdHtcblx0XHRcdHRleHQ6ICfojrflj5bov4Hnp7vnm67moIflrozmiJAnLFxuXHRcdFx0ZHVyYXRpb246IC0xLFxuXHRcdH0sXG5cdFx0J3N1Y2Nlc3MnXG5cdCk7XG5cblx0cmV0dXJuIHVuaXF1ZUFycmF5KGZpbGVOYW1lcyk7IC8vIFJlcGxhY2UgU2V0IHdpdGggdW5pcXVlQXJyYXksIGF2b2lkaW5nIGNvcmUtanMgcG9seWZpbGxpbmdcbn07XG5cbmV4cG9ydCB7Z2V0QWxsSW1hZ2VzfTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLHFCQUFnREMsUUFBQSx3QkFBQTs7QUNBaEQsSUFBQUMsb0JBQXlDRCxRQUFBLGlCQUFBO0FBQ3pDLElBQUFFLHFCQUFrQkYsUUFBQSx3QkFBQTtBQUNsQixJQUFBRyxxQkFBdUJILFFBQUEscUJBQUE7QUFFdkIsSUFBSUksbUJBQXFDO0VBQ3hDQyxXQUFXQSxNQUFNO0VBQUM7QUFDbkI7QUFFQSxJQUFNQyxRQUFBLDJCQUFBO0FBQUEsTUFBQUMsT0FBQUMsa0JBQVEsV0FBT0MsTUFBaUI7QUFDckMsVUFBTUMsU0FBeUI7TUFDOUJEO01BQ0FFLFFBQVE7TUFDUkMsUUFBUTtNQUNSQyxlQUFlO01BQ2ZDLE1BQU0sQ0FBQyxTQUFTLFFBQVE7TUFDeEJDLFdBQVc7TUFDWEMsWUFBWTtJQUNiO0FBQ0EsVUFBTUMsV0FBQSxNQUFpQmYsbUJBQUFnQixJQUFJQyxJQUFJVCxNQUFNO0FBRXJDLFdBQU9PO0VBQ1IsQ0FBQTtBQUFBLFNBQUEsU0FiTVgsT0FBQWMsSUFBQTtBQUFBLFdBQUFiLEtBQUFjLE1BQUEsTUFBQUMsU0FBQTtFQUFBO0FBQUEsRUFBQTtBQWVOLElBQU1DLGNBQWVDLGFBQW9DO0FBQ3hELFNBQU8sQ0FDTixHQUFHQSxRQUFRQyxpQkFBb0Msd0JBQXdCLEdBQ3ZFLEdBQUdELFFBQVFDLGlCQUFvQyx3QkFBd0IsQ0FBQTtBQUV6RTtBQUVBLElBQU1DLHVCQUFBLDJCQUFBO0FBQUEsTUFBQUMsUUFBQW5CLGtCQUF1QixXQUFPb0IsUUFBcUI7QUFDeEQs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QUFRcUYsaUJBQWlCLFNBQVMsTUFBWTtBQUM3QyxTQUFBckcsa0JBQU0sYUFBWTtBQUNqQixZQUFNMEQsWUFBQSxNQUFrQnlCLGFBQWE7QUFDckMsVUFBSSxDQUFDekIsVUFBVWYsUUFBUTtBQUN0QjtNQUNEO0FBQ0EsYUFBQSxHQUFNcEQsbUJBQUErRyxzQkFBcUI1QyxXQUFXLElBQUk7SUFDM0MsQ0FBQSxFQUFHLEVBQUU2QyxLQUFLLE1BQU07QUFDZixPQUFBLEdBQUFoSCxtQkFBQWlILGFBQVk7SUFDYixDQUFDO0VBQ0YsQ0FBQztBQUNGLEdBQUc7QUFFSEMsT0FBT3RCLGVBQWVBOyIsCiAgIm5hbWVzIjogWyJpbXBvcnRfZXh0X2dhZGdldDQiLCAicmVxdWlyZSIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJpbXBvcnRfZXh0X2dhZGdldDIiLCAiaW1wb3J0X2V4dF9nYWRnZXQzIiwgInRvYXN0aWZ5SW5zdGFuY2UiLCAiaGlkZVRvYXN0IiwgInBhcnNlIiwgIl9yZWYiLCAiX2FzeW5jVG9HZW5lcmF0b3IiLCAicGFnZSIsICJwYXJhbXMiLCAiYWN0aW9uIiwgImZvcm1hdCIsICJmb3JtYXR2ZXJzaW9uIiwgInByb3AiLCAicmVkaXJlY3RzIiwgImRpc2FibGV0b2MiLCAicmVzcG9uc2UiLCAiYXBpIiwgImdldCIsICJfeCIsICJhcHBseSIsICJhcmd1bWVudHMiLCAiZ2V0RWxlbWVudHMiLCAiZWxlbWVudCIsICJxdWVyeVNlbGVjdG9yQWxsIiwgImdldEVsZW1lbnRzRnJvbVBhcnNlIiwgIl9yZWYyIiwgInRpdGxlcyIsICJmaWxlTmFtZXNGcm9tUGFyc2UiLCAidW5pcXVlQXJyYXkiLCAiX2l0ZXJhdG9yIiwgIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwgIl9zdGVwIiwgInMiLCAibiIsICJkb25lIiwgInRpdGxlIiwgInZhbHVlIiwgImxpbmtzIiwgImltYWdlcyIsICJyZWdleCIsICJfaXRlcmF0b3IyIiwgIl9zdGVwMiIsICJ0aXRsZU5hbWUiLCAidGVzdCIsICJtYXRjaCIsICJleGVjIiwgImZpbGVOYW1lIiwgImRlY29kZVVSSUNvbXBvbmVudCIsICJyZXBsYWNlIiwgImxlbmd0aCIsICJpbmNsdWRlcyIsICJlcnIiLCAiZSIsICJmIiwgIl9pdGVyYXRvcjMiLCAiX3N0ZXAzIiwgImNvbmNhdCIsICJfeDIiLCAicXVlcnlJbWFnZXMiLCAiX3JlZjMiLCAiaW1saW1pdCIsICJfeDMiLCAiZ2V0SW1hZ2VzRnJvbUVsZW1lbnRzIiwgImZpbGVMaW5rRWxlbWVudHMiLCAiZmlsZU5hbWVzIiwgIndnQXJ0aWNsZVBhdGgiLCAid2dTY3JpcHQiLCAibXciLCAiY29uZmlnIiwgImFydGljbGVSZWdleCIsICJSZWdFeHAiLCAic2NyaXB0UmVnZXgiLCAiX2l0ZXJhdG9yNCIsICJfc3RlcDQiLCAiaHJlZiIsICJjbGFzc0xpc3QiLCAiY29udGFpbnMiLCAiZ2V0SW1hZ2VzIiwgIl9yZWY0IiwgImdlbmVyYXRlQXJyYXkiLCAiaSIsICJxdWVyeXRpdGxlcyIsICJzcGxpY2UiLCAicGFnZXMiLCAiX2l0ZXJhdG9yNSIsICJfc3RlcDUiLCAiX2l0ZXJhdG9yNiIsICJfc3RlcDYiLCAiX3g0IiwgImdldEFsbEltYWdlcyIsICJfcmVmNSIsICJ0b2FzdGlmeSIsICJ0ZXh0IiwgImR1cmF0aW9uIiwgIndnTmFtZXNwYWNlTnVtYmVyIiwgIndnUGFnZU5hbWUiLCAiZWxlbWVudHNGcm9tUGFnZSIsICJkb2N1bWVudCIsICJmaWxlTmFtZXNGcm9tUGFnZSIsICJfeDUiLCAicXVpY2tJbXBvcnRBbGxNZWRpYSIsICJ3Z0Nhbm9uaWNhbFNwZWNpYWxQYWdlTmFtZSIsICJ3Z0N1clJldmlzaW9uSWQiLCAicG9ydGxldElkIiwgInF1ZXJ5U2VsZWN0b3IiLCAidXRpbCIsICJhZGRQb3J0bGV0TGluayIsICJhZGRFdmVudExpc3RlbmVyIiwgImRldGVjdElmRmlsZVJlZGlyZWN0IiwgInRoZW4iLCAicmVmcmVzaFBhZ2UiLCAid2luZG93Il0KfQo=

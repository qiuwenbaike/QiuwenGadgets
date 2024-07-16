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
    return (0, import_ext_gadget2.uniqueArray)(fileNamesFromParse);
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
        fileNames[fileNames.length] = fileName;
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1F1aWNrSW1wb3J0QWxsTWVkaWEvUXVpY2tJbXBvcnRBbGxNZWRpYS50cyIsICJzcmMvUXVpY2tJbXBvcnRBbGxNZWRpYS9tb2R1bGVzL2NvcmUudHMiLCAic3JjL1F1aWNrSW1wb3J0QWxsTWVkaWEvbW9kdWxlcy9hcGkudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7ZGV0ZWN0SWZGaWxlUmVkaXJlY3QsIHJlZnJlc2hQYWdlfSBmcm9tICdleHQuZ2FkZ2V0LlF1aWNrSW1wb3J0JztcbmltcG9ydCB7Z2V0QWxsSW1hZ2VzfSBmcm9tICcuL21vZHVsZXMvY29yZSc7XG5cbmRlY2xhcmUgZ2xvYmFsIHtcblx0aW50ZXJmYWNlIFdpbmRvdyB7XG5cdFx0ZGV0ZWN0SWZGaWxlUmVkaXJlY3Q6IERldGVjdElmRmlsZVJlZGlyZWN0O1xuXHRcdGdldEFsbEltYWdlczogdHlwZW9mIGdldEFsbEltYWdlcztcblx0fVxufVxuXG53aW5kb3cuZGV0ZWN0SWZGaWxlUmVkaXJlY3QgPSBkZXRlY3RJZkZpbGVSZWRpcmVjdDtcbndpbmRvdy5nZXRBbGxJbWFnZXMgPSBnZXRBbGxJbWFnZXM7XG5cbihmdW5jdGlvbiBxdWlja0ltcG9ydEFsbE1lZGlhKCk6IHZvaWQge1xuXHRjb25zdCB7d2dDYW5vbmljYWxTcGVjaWFsUGFnZU5hbWUsIHdnQ3VyUmV2aXNpb25JZH0gPSBtdy5jb25maWcuZ2V0KCk7XG5cdGlmIChcblx0XHQhKFxuXHRcdFx0d2dDdXJSZXZpc2lvbklkIHx8XG5cdFx0XHRbJ1ByZWZpeGluZGV4JywgJ0Jyb2tlblJlZGlyZWN0cycsICdXYW50ZWRmaWxlcyddLmluY2x1ZGVzKHdnQ2Fub25pY2FsU3BlY2lhbFBhZ2VOYW1lIHx8ICcnKVxuXHRcdClcblx0KSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgcG9ydGxldElkOiAncC1jYWN0aW9ucycgfCAncC10YicgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcC1jYWN0aW9ucycpID8gJ3AtY2FjdGlvbnMnIDogJ3AtdGInO1xuXHRjb25zdCBlbGVtZW50OiBIVE1MTElFbGVtZW50IHwgbnVsbCA9IG13LnV0aWwuYWRkUG9ydGxldExpbmsocG9ydGxldElkLCAnIycsICflr7zlhaXmraTpobXpnaLmiYDmnInmlofku7YnLCAndC1pbXBvcnQnKTtcblx0aWYgKCFlbGVtZW50KSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpOiB2b2lkID0+IHtcblx0XHR2b2lkIChhc3luYyAoKSA9PiB7XG5cdFx0XHRjb25zdCBmaWxlTmFtZXMgPSBhd2FpdCBnZXRBbGxJbWFnZXMoKTtcblx0XHRcdGlmICghZmlsZU5hbWVzLmxlbmd0aCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRhd2FpdCBkZXRlY3RJZkZpbGVSZWRpcmVjdChmaWxlTmFtZXMsIHRydWUpO1xuXHRcdH0pKCkudGhlbigoKSA9PiB7XG5cdFx0XHRyZWZyZXNoUGFnZSgpO1xuXHRcdH0pO1xuXHR9KTtcbn0pKCk7XG4iLCAiaW1wb3J0IHtnZW5lcmF0ZUFycmF5LCB1bmlxdWVBcnJheX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbmltcG9ydCB7YXBpfSBmcm9tICcuL2FwaSc7XG5pbXBvcnQge3RvYXN0aWZ5fSBmcm9tICdleHQuZ2FkZ2V0LlRvYXN0aWZ5JztcblxubGV0IHRvYXN0aWZ5SW5zdGFuY2U6IFRvYXN0aWZ5SW5zdGFuY2UgPSB7XG5cdGhpZGVUb2FzdDogKCkgPT4ge30sXG59O1xuXG5jb25zdCBwYXJzZSA9IGFzeW5jIChwYWdlOiBzdHJpbmcpID0+IHtcblx0Y29uc3QgcGFyYW1zOiBBcGlQYXJzZVBhcmFtcyA9IHtcblx0XHRwYWdlLFxuXHRcdGFjdGlvbjogJ3BhcnNlJyxcblx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0cHJvcDogWydsaW5rcycsICdpbWFnZXMnXSxcblx0XHRyZWRpcmVjdHM6IHRydWUsXG5cdFx0ZGlzYWJsZXRvYzogdHJ1ZSxcblx0fTtcblx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGkuZ2V0KHBhcmFtcyk7XG5cblx0cmV0dXJuIHJlc3BvbnNlO1xufTtcblxuY29uc3QgZ2V0RWxlbWVudHMgPSAoZWxlbWVudDogRG9jdW1lbnQgfCBIVE1MRWxlbWVudCkgPT4ge1xuXHRyZXR1cm4gW1xuXHRcdC4uLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MQW5jaG9yRWxlbWVudD4oXCJhW2hyZWZePScvd2lraS9GaWxlOiddXCIpLFxuXHRcdC4uLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MQW5jaG9yRWxlbWVudD4oXCJhW2hyZWYqPSd0aXRsZT1GaWxlOiddXCIpLFxuXHRdO1xufTtcblxuY29uc3QgZ2V0RWxlbWVudHNGcm9tUGFyc2UgPSBhc3luYyAodGl0bGVzOiBzdHJpbmdbXSkgPT4ge1xuXHRjb25zdCBmaWxlTmFtZXNGcm9tUGFyc2U6IHN0cmluZ1tdID0gW107XG5cdHRpdGxlcyA9IHVuaXF1ZUFycmF5KHRpdGxlcyk7XG5cblx0Zm9yIChjb25zdCB0aXRsZSBvZiB0aXRsZXMpIHtcblx0XHR0cnkge1xuXHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBwYXJzZSh0aXRsZSk7XG5cdFx0XHRpZiAoIXJlc3BvbnNlWydwYXJzZSddIHx8ICghcmVzcG9uc2VbJ3BhcnNlJ10ubGlua3MgJiYgIXJlc3BvbnNlWydwYXJzZSddLmltYWdlcykpIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChyZXNwb25zZVsncGFyc2UnXS5saW5rcykge1xuXHRcdFx0XHRjb25zdCByZWdleDogUmVnRXhwID0gLyhGaWxlOlteI10rKS87XG5cblx0XHRcdFx0Zm9yIChjb25zdCB7dGl0bGU6IHRpdGxlTmFtZX0gb2YgcmVzcG9uc2VbJ3BhcnNlJ10ubGlua3MgYXMge3RpdGxlOiBzdHJpbmd9W10pIHtcblx0XHRcdFx0XHRpZiAocmVnZXgudGVzdCh0aXRsZU5hbWUpKSB7XG5cdFx0XHRcdFx0XHRjb25zdCBtYXRjaDogUmVnRXhwRXhlY0FycmF5ID0gcmVnZXguZXhlYyh0aXRsZU5hbWUpIGFzIFJlZ0V4cEV4ZWNBcnJheTtcblx0XHRcdFx0XHRcdGxldCBbZmlsZU5hbWVdID0gbWF0Y2g7XG5cdFx0XHRcdFx0XHRmaWxlTmFtZSA9IGZpbGVOYW1lLnJlcGxhY2UoLygoRmlsZXxJbWFnZSk6KSgoRmlsZXxJbWFnZSk6KT8vaSwgJ0ZpbGU6JykucmVwbGFjZSgnKycsICdfJyk7XG5cdFx0XHRcdFx0XHRmaWxlTmFtZXNGcm9tUGFyc2VbZmlsZU5hbWVzRnJvbVBhcnNlLmxlbmd0aF0gPSBgJHtmaWxlTmFtZX1gO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRpZiAocmVzcG9uc2VbJ3BhcnNlJ10uaW1hZ2VzKSB7XG5cdFx0XHRcdGZvciAoY29uc3QgZmlsZU5hbWUgb2YgcmVzcG9uc2VbJ3BhcnNlJ10uaW1hZ2VzKSB7XG5cdFx0XHRcdFx0ZmlsZU5hbWVzRnJvbVBhcnNlW2ZpbGVOYW1lc0Zyb21QYXJzZS5sZW5ndGhdID0gYEZpbGU6JHtmaWxlTmFtZX1gO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSBjYXRjaCB7fVxuXHR9XG5cblx0cmV0dXJuIHVuaXF1ZUFycmF5KGZpbGVOYW1lc0Zyb21QYXJzZSk7XG59O1xuXG5jb25zdCBxdWVyeUltYWdlcyA9IGFzeW5jICh0aXRsZXM6IHN0cmluZyB8IHN0cmluZ1tdKSA9PiB7XG5cdGNvbnN0IHBhcmFtczogQXBpUXVlcnlJbWFnZXNQYXJhbXMgPSB7XG5cdFx0dGl0bGVzLFxuXHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0cHJvcDogJ2ltYWdlcycsXG5cdFx0aW1saW1pdDogNTAwMCxcblx0fTtcblx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGkuZ2V0KHBhcmFtcyk7XG5cblx0cmV0dXJuIHJlc3BvbnNlO1xufTtcblxuY29uc3QgZ2V0SW1hZ2VzRnJvbUVsZW1lbnRzID0gKGZpbGVMaW5rRWxlbWVudHM6IEhUTUxBbmNob3JFbGVtZW50W10pID0+IHtcblx0Y29uc3QgZmlsZU5hbWVzOiBzdHJpbmdbXSA9IFtdO1xuXHRmaWxlTGlua0VsZW1lbnRzID0gdW5pcXVlQXJyYXkoZmlsZUxpbmtFbGVtZW50cyk7XG5cdGNvbnN0IHt3Z0FydGljbGVQYXRoLCB3Z1NjcmlwdH0gPSBtdy5jb25maWcuZ2V0KCk7XG5cdGNvbnN0IGFydGljbGVSZWdleDogUmVnRXhwID0gbmV3IFJlZ0V4cChgJHt3Z0FydGljbGVQYXRoLnJlcGxhY2UoJyQxJywgJycpfShGaWxlOlteI10rKWApO1xuXHRjb25zdCBzY3JpcHRSZWdleDogUmVnRXhwID0gbmV3IFJlZ0V4cChgJHt3Z1NjcmlwdH1cXFxcP3RpdGxlPShGaWxlOlteIyZdKylgKTtcblxuXHRmb3IgKGNvbnN0IGVsZW1lbnQgb2YgZmlsZUxpbmtFbGVtZW50cykge1xuXHRcdC8vIFJlcGxhY2UgYG5ldyBTZXQoKWAgdG8gYXZvaWQgcG9seWZpbGxpbmcgY29yZS1qc1xuXHRcdGNvbnN0IHtocmVmLCBjbGFzc0xpc3R9ID0gZWxlbWVudDtcblxuXHRcdGlmICghaHJlZiB8fCBocmVmLmluY2x1ZGVzKCdyZWRsaW5rPTEnKSkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0aWYgKGNsYXNzTGlzdC5jb250YWlucygnbmV3JykpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGxldCBmaWxlTmFtZTogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXHRcdGlmIChhcnRpY2xlUmVnZXgudGVzdChocmVmKSkge1xuXHRcdFx0Y29uc3QgbWF0Y2g6IFJlZ0V4cEV4ZWNBcnJheSA9IGFydGljbGVSZWdleC5leGVjKGhyZWYpIGFzIFJlZ0V4cEV4ZWNBcnJheTtcblx0XHRcdGZpbGVOYW1lID0gbWF0Y2hbMV0gYXMgc3RyaW5nO1xuXHRcdFx0ZmlsZU5hbWUgPSBkZWNvZGVVUklDb21wb25lbnQoZmlsZU5hbWUpXG5cdFx0XHRcdC5yZXBsYWNlKC8oKEZpbGV8SW1hZ2UpOikoKEZpbGV8SW1hZ2UpOik/L2ksICdGaWxlOicpXG5cdFx0XHRcdC5yZXBsYWNlKCcrJywgJ18nKTtcblx0XHRcdGZpbGVOYW1lc1tmaWxlTmFtZXMubGVuZ3RoXSA9IGZpbGVOYW1lO1xuXHRcdH1cblxuXHRcdGlmIChzY3JpcHRSZWdleC50ZXN0KGhyZWYpKSB7XG5cdFx0XHRjb25zdCBtYXRjaDogUmVnRXhwRXhlY0FycmF5ID0gc2NyaXB0UmVnZXguZXhlYyhocmVmKSBhcyBSZWdFeHBFeGVjQXJyYXk7XG5cdFx0XHRmaWxlTmFtZSA9IG1hdGNoWzFdIGFzIHN0cmluZztcblx0XHRcdGZpbGVOYW1lID0gZGVjb2RlVVJJQ29tcG9uZW50KGZpbGVOYW1lKVxuXHRcdFx0XHQucmVwbGFjZSgvKChGaWxlfEltYWdlKTopKChGaWxlfEltYWdlKTopPy9pLCAnRmlsZTonKVxuXHRcdFx0XHQucmVwbGFjZSgnKycsICdfJyk7XG5cdFx0XHRmaWxlTmFtZXNbZmlsZU5hbWVzLmxlbmd0aF0gPSBmaWxlTmFtZTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gdW5pcXVlQXJyYXkoZmlsZU5hbWVzKTtcbn07XG5cbmNvbnN0IGdldEltYWdlcyA9IGFzeW5jICh0aXRsZXM6IHN0cmluZyB8IHN0cmluZ1tdKSA9PiB7XG5cdGNvbnN0IGZpbGVOYW1lczogc3RyaW5nW10gPSBbXTtcblx0dGl0bGVzID0gdW5pcXVlQXJyYXkoZ2VuZXJhdGVBcnJheSh0aXRsZXMpKTtcblxuXHRmb3IgKGxldCBpID0gMDsgaSA8IHRpdGxlcy5sZW5ndGg7IGkrKykge1xuXHRcdGNvbnN0IHF1ZXJ5dGl0bGVzID0gdGl0bGVzLnNwbGljZSgwLCA1MCk7XG5cdFx0aWYgKCFxdWVyeXRpdGxlcy5sZW5ndGgpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdHRyeSB7XG5cdFx0XHRjb25zdCByZXNwb25zZSA9IGF3YWl0IHF1ZXJ5SW1hZ2VzKHF1ZXJ5dGl0bGVzKTtcblx0XHRcdGlmICghcmVzcG9uc2VbJ3F1ZXJ5J10gfHwgIXJlc3BvbnNlWydxdWVyeSddLnBhZ2VzKSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3IgKGNvbnN0IHBhZ2Ugb2YgcmVzcG9uc2VbJ3F1ZXJ5J10ucGFnZXMpIHtcblx0XHRcdFx0aWYgKCFwYWdlLmltYWdlcykge1xuXHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Zm9yIChjb25zdCB7dGl0bGV9IG9mIHBhZ2UuaW1hZ2VzIGFzIHtcblx0XHRcdFx0XHRuczogbnVtYmVyO1xuXHRcdFx0XHRcdHRpdGxlOiBzdHJpbmc7XG5cdFx0XHRcdH1bXSkge1xuXHRcdFx0XHRcdGlmICghdGl0bGUpIHtcblx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGZpbGVOYW1lc1tmaWxlTmFtZXMubGVuZ3RoXSA9IHRpdGxlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSBjYXRjaCB7fVxuXHR9XG5cblx0cmV0dXJuIHVuaXF1ZUFycmF5KGZpbGVOYW1lcyk7XG59O1xuXG5jb25zdCBnZXRBbGxJbWFnZXMgPSBhc3luYyAodGl0bGVzPzogc3RyaW5nIHwgc3RyaW5nW10pOiBQcm9taXNlPHN0cmluZ1tdPiA9PiB7XG5cdHRvYXN0aWZ5SW5zdGFuY2UuaGlkZVRvYXN0KCk7XG5cdHRvYXN0aWZ5KFxuXHRcdHtcblx0XHRcdHRleHQ6ICfmraPlnKjojrflj5bov4Hnp7vnm67moIcnLFxuXHRcdFx0ZHVyYXRpb246IC0xLFxuXHRcdH0sXG5cdFx0J2luZm8nXG5cdCk7XG5cblx0bGV0IGZpbGVOYW1lczogc3RyaW5nW10gPSBbXTtcblx0Y29uc3Qge3dnTmFtZXNwYWNlTnVtYmVyLCB3Z1BhZ2VOYW1lfSA9IG13LmNvbmZpZy5nZXQoKTtcblxuXHRpZiAoIXRpdGxlcyB8fCAhdGl0bGVzLmxlbmd0aCkge1xuXHRcdHRpdGxlcyA9IHdnTmFtZXNwYWNlTnVtYmVyIDwgMCA/IFtdIDogW3dnUGFnZU5hbWVdO1xuXHR9XG5cblx0Y29uc3QgZWxlbWVudHNGcm9tUGFnZSA9IGdldEVsZW1lbnRzKGRvY3VtZW50KTtcblx0Y29uc3QgZmlsZU5hbWVzRnJvbVBhZ2UgPSBnZXRJbWFnZXNGcm9tRWxlbWVudHMoZWxlbWVudHNGcm9tUGFnZSk7XG5cdGNvbnN0IGZpbGVOYW1lc0Zyb21QYXJzZSA9IGF3YWl0IGdldEVsZW1lbnRzRnJvbVBhcnNlKGZpbGVOYW1lc0Zyb21QYWdlKTtcblxuXHRmaWxlTmFtZXMgPSB1bmlxdWVBcnJheShbXG5cdFx0Li4uZmlsZU5hbWVzRnJvbVBhZ2UsXG5cdFx0Li4uZmlsZU5hbWVzRnJvbVBhcnNlLFxuXHRcdC4uLihhd2FpdCBnZXRJbWFnZXMoWy4uLnRpdGxlcywgLi4uZmlsZU5hbWVzRnJvbVBhZ2VdKSksXG5cdF0pO1xuXG5cdHRvYXN0aWZ5SW5zdGFuY2UuaGlkZVRvYXN0KCk7XG5cdHRvYXN0aWZ5SW5zdGFuY2UgPSB0b2FzdGlmeShcblx0XHR7XG5cdFx0XHR0ZXh0OiAn6I635Y+W6L+B56e755uu5qCH5a6M5oiQJyxcblx0XHRcdGR1cmF0aW9uOiAtMSxcblx0XHR9LFxuXHRcdCdzdWNjZXNzJ1xuXHQpO1xuXG5cdHJldHVybiB1bmlxdWVBcnJheShmaWxlTmFtZXMpOyAvLyBSZXBsYWNlIGBbLi4ubmV3IFNldCgpXWAgdG8gYXZvaWQgcG9seWZpbGxpbmcgY29yZS1qc1xufTtcblxuZXhwb3J0IHtnZXRBbGxJbWFnZXN9O1xuIiwgImV4cG9ydCB7YXBpfSBmcm9tICdleHQuZ2FkZ2V0LlF1aWNrSW1wb3J0JztcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLHFCQUFnREMsUUFBQSx3QkFBQTs7QUNBaEQsSUFBQUMscUJBQXlDRCxRQUFBLGlCQUFBOztBQ0F6QyxJQUFBRSxvQkFBa0JGLFFBQUEsd0JBQUE7O0FERWxCLElBQUFHLHFCQUF1QkgsUUFBQSxxQkFBQTtBQUV2QixJQUFJSSxtQkFBcUM7RUFDeENDLFdBQVdBLE1BQU07RUFBQztBQUNuQjtBQUVBLElBQU1DLFFBQUEsMkJBQUE7QUFBQSxNQUFBQyxPQUFBQyxrQkFBUSxXQUFPQyxNQUFpQjtBQUNyQyxVQUFNQyxTQUF5QjtNQUM5QkQ7TUFDQUUsUUFBUTtNQUNSQyxRQUFRO01BQ1JDLGVBQWU7TUFDZkMsTUFBTSxDQUFDLFNBQVMsUUFBUTtNQUN4QkMsV0FBVztNQUNYQyxZQUFZO0lBQ2I7QUFDQSxVQUFNQyxXQUFBLE1BQWlCZixrQkFBQWdCLElBQUlDLElBQUlULE1BQU07QUFFckMsV0FBT087RUFDUixDQUFBO0FBQUEsU0FBQSxTQWJNWCxPQUFBYyxJQUFBO0FBQUEsV0FBQWIsS0FBQWMsTUFBQSxNQUFBQyxTQUFBO0VBQUE7QUFBQSxFQUFBO0FBZU4sSUFBTUMsY0FBZUMsYUFBb0M7QUFDeEQsU0FBTyxDQUNOLEdBQUdBLFFBQVFDLGlCQUFvQyx3QkFBd0IsR0FDdkUsR0FBR0QsUUFBUUMsaUJBQW9DLHdCQUF3QixDQUFBO0FBRXpFO0FBRUEsSUFBTUMsdUJBQUEsMkJBQUE7QUFBQSxNQUFBQyxRQUFBbkIsa0JBQXVCLFdBQU9vQixRQUFxQjtBQUN4RCxVQUFNQyxxQkFBK0IsQ0FBQTtBQUNyQ0QsY0FBQSxHQUFTM0IsbUJBQUE2QixhQUFZRixNQUFNO0FBQUEsUUFBQUcsWUFBQUMsMkJBRVBKLE1BQUEsR0FBQUs7QUFBQSxRQUFBO0FBQXBCLFdBQUFGLFVBQUFHLEVBQUEsR0FBQSxFQUFBRCxRQUFBRixVQUFBSSxFQUFBLEdBQUFDLFFBQTRCO0FBQUEsY0FBakJDLFFBQUFKLE1BQUFLO0FBQ1YsWUFBSTtBQUNILGdCQUFNckIsV0FBQSxNQUFpQlgsTUFBTStCLEtBQUs7QUFDbEMsY0FBSSxDQUFDcEIsU0FBUyxPQUFPLEtBQU0sQ0FBQ0EsU0FBUyxPQUFPLEVBQUVzQixTQUFTLENBQUN0QixTQUFTLE9BQU8sRUFBRXVCLFFBQVM7QUFDbEY7VUFDRDtBQUVBLGNBQUl2QixTQUFTLE9BQU8sRUFBRXNCLE9BQU87QUFDNUIsa0JBQU1FLFFBQWdCO0FBQUEsZ0JBQUFDLGFBQUFWLDJCQUVXZixTQUFTLE9BQU8sRUFBRXNCLEtBQUEsR0FBQUk7QUFBQSxnQkFBQTtBQUFuRCxtQkFBQUQsV0FBQVIsRUFBQSxHQUFBLEVBQUFTLFNBQUFELFdBQUFQLEVBQUEsR0FBQUMsUUFBK0U7QUFBQSxzQkFBcEU7a0JBQUNDLE9BQU9PO2dCQUFTLElBQUFELE9BQUFMO0FBQzNCLG9CQUFJRyxNQUFNSSxLQUFLRCxTQUFTLEdBQUc7QUFDMUIsd0JBQU1FLFFBQXlCTCxNQUFNTSxLQUFLSCxTQUFTO0FBQ25ELHNCQUFJLENBQUNJLFFBQVEsSUFBSUY7QUFDakJFLDZCQUFXQSxTQUFTQyxRQUFRLG9DQUFvQyxPQUFPLEVBQUVBLFFBQVEsS0FBSyxHQUFHO0FBQ3pGcEIscUNBQW1CQSxtQkFBbUJxQixNQUFNLElBQUEsR0FBQUMsT0FBT0gsUUFBUTtnQkFDNUQ7Y0FDRDtZQUFBLFNBQUFJLEtBQUE7QUFBQVYseUJBQUFXLEVBQUFELEdBQUE7WUFBQSxVQUFBO0FBQUFWLHlCQUFBWSxFQUFBO1lBQUE7VUFDRDtBQUVBLGNBQUlyQyxTQUFTLE9BQU8sRUFBRXVCLFFBQVE7QUFBQSxnQkFBQWUsYUFBQXZCLDJCQUNOZixTQUFTLE9BQU8sRUFBRXVCLE1BQUEsR0FBQWdCO0FBQUEsZ0JBQUE7QUFBekMsbUJBQUFELFdBQUFyQixFQUFBLEdBQUEsRUFBQXNCLFNBQUFELFdBQUFwQixFQUFBLEdBQUFDLFFBQWlEO0FBQUEsc0JBQXRDWSxXQUFBUSxPQUFBbEI7QUFDVlQsbUNBQW1CQSxtQkFBbUJxQixNQUFNLElBQUEsUUFBQUMsT0FBWUgsUUFBUTtjQUNqRTtZQUFBLFNBQUFJLEtBQUE7QUFBQUcseUJBQUFGLEVBQUFELEdBQUE7WUFBQSxVQUFBO0FBQUFHLHlCQUFBRCxFQUFBO1lBQUE7VUFDRDtRQUNELFFBQVE7UUFBQztNQUNWO0lBQUEsU0FBQUYsS0FBQTtBQUFBckIsZ0JBQUFzQixFQUFBRCxHQUFBO0lBQUEsVUFBQTtBQUFBckIsZ0JBQUF1QixFQUFBO0lBQUE7QUFFQSxZQUFBLEdBQU9yRCxtQkFBQTZCLGFBQVlELGtCQUFrQjtFQUN0QyxDQUFBO0FBQUEsU0FBQSxTQWpDTUgsc0JBQUErQixLQUFBO0FBQUEsV0FBQTlCLE1BQUFOLE1BQUEsTUFBQUMsU0FBQTtFQUFBO0FBQUEsRUFBQTtBQW1DTixJQUFNb0MsY0FBQSwyQkFBQTtBQUFBLE1BQUFDLFFBQUFuRCxrQkFBYyxXQUFPb0IsUUFBOEI7QUFDeEQsVUFBTWxCLFNBQStCO01BQ3BDa0I7TUFDQWpCLFFBQVE7TUFDUkMsUUFBUTtNQUNSQyxlQUFlO01BQ2ZDLE1BQU07TUFDTjhDLFNBQVM7SUFDVjtBQUNBLFVBQU0zQyxXQUFBLE1BQWlCZixrQkFBQWdCLElBQUlDLElBQUlULE1BQU07QUFFckMsV0FBT087RUFDUixDQUFBO0FBQUEsU0FBQSxTQVpNeUMsYUFBQUcsS0FBQTtBQUFBLFdBQUFGLE1BQUF0QyxNQUFBLE1BQUFDLFNBQUE7RUFBQTtBQUFBLEVBQUE7QUFjTixJQUFNd0Msd0JBQXlCQyxzQkFBMEM7QUFDeEUsUUFBTUMsWUFBc0IsQ0FBQTtBQUM1QkQsc0JBQUEsR0FBbUI5RCxtQkFBQTZCLGFBQVlpQyxnQkFBZ0I7QUFDL0MsUUFBTTtJQUFDRTtJQUFlQztFQUFRLElBQUlDLEdBQUdDLE9BQU9qRCxJQUFJO0FBQ2hELFFBQU1rRCxlQUF1QixJQUFJQyxPQUFBLEdBQUFuQixPQUFVYyxjQUFjaEIsUUFBUSxNQUFNLEVBQUUsR0FBQyxjQUFBLENBQWM7QUFDeEYsUUFBTXNCLGNBQXNCLElBQUlELE9BQUEsR0FBQW5CLE9BQVVlLFVBQVEsd0JBQUEsQ0FBd0I7QUFBQSxNQUFBTSxhQUFBeEMsMkJBRXBEK0IsZ0JBQUEsR0FBQVU7QUFBQSxNQUFBO0FBQXRCLFNBQUFELFdBQUF0QyxFQUFBLEdBQUEsRUFBQXVDLFNBQUFELFdBQUFyQyxFQUFBLEdBQUFDLFFBQXdDO0FBQUEsWUFBN0JaLFVBQUFpRCxPQUFBbkM7QUFFVixZQUFNO1FBQUNvQztRQUFNQztNQUFTLElBQUluRDtBQUUxQixVQUFJLENBQUNrRCxRQUFRQSxLQUFLRSxTQUFTLFdBQVcsR0FBRztBQUN4QztNQUNEO0FBRUEsVUFBSUQsVUFBVUUsU0FBUyxLQUFLLEdBQUc7QUFDOUI7TUFDRDtBQUVBLFVBQUk3QjtBQUNKLFVBQUlxQixhQUFheEIsS0FBSzZCLElBQUksR0FBRztBQUM1QixjQUFNNUIsUUFBeUJ1QixhQUFhdEIsS0FBSzJCLElBQUk7QUFDckQxQixtQkFBV0YsTUFBTSxDQUFDO0FBQ2xCRSxtQkFBVzhCLG1CQUFtQjlCLFFBQVEsRUFDcENDLFFBQVEsb0NBQW9DLE9BQU8sRUFDbkRBLFFBQVEsS0FBSyxHQUFHO0FBQ2xCZSxrQkFBVUEsVUFBVWQsTUFBTSxJQUFJRjtNQUMvQjtBQUVBLFVBQUl1QixZQUFZMUIsS0FBSzZCLElBQUksR0FBRztBQUMzQixjQUFNNUIsUUFBeUJ5QixZQUFZeEIsS0FBSzJCLElBQUk7QUFDcEQxQixtQkFBV0YsTUFBTSxDQUFDO0FBQ2xCRSxtQkFBVzhCLG1CQUFtQjlCLFFBQVEsRUFDcENDLFFBQVEsb0NBQW9DLE9BQU8sRUFDbkRBLFFBQVEsS0FBSyxHQUFHO0FBQ2xCZSxrQkFBVUEsVUFBVWQsTUFBTSxJQUFJRjtNQUMvQjtJQUNEO0VBQUEsU0FBQUksS0FBQTtBQUFBb0IsZUFBQW5CLEVBQUFELEdBQUE7RUFBQSxVQUFBO0FBQUFvQixlQUFBbEIsRUFBQTtFQUFBO0FBRUEsVUFBQSxHQUFPckQsbUJBQUE2QixhQUFZa0MsU0FBUztBQUM3QjtBQUVBLElBQU1lLFlBQUEsMkJBQUE7QUFBQSxNQUFBQyxRQUFBeEUsa0JBQVksV0FBT29CLFFBQThCO0FBQ3RELFVBQU1vQyxZQUFzQixDQUFBO0FBQzVCcEMsY0FBQSxHQUFTM0IsbUJBQUE2QixjQUFBLEdBQVk3QixtQkFBQWdGLGVBQWNyRCxNQUFNLENBQUM7QUFFMUMsYUFBU3NELElBQUksR0FBR0EsSUFBSXRELE9BQU9zQixRQUFRZ0MsS0FBSztBQUN2QyxZQUFNQyxjQUFjdkQsT0FBT3dELE9BQU8sR0FBRyxFQUFFO0FBQ3ZDLFVBQUksQ0FBQ0QsWUFBWWpDLFFBQVE7QUFDeEI7TUFDRDtBQUVBLFVBQUk7QUFDSCxjQUFNakMsV0FBQSxNQUFpQnlDLFlBQVl5QixXQUFXO0FBQzlDLFlBQUksQ0FBQ2xFLFNBQVMsT0FBTyxLQUFLLENBQUNBLFNBQVMsT0FBTyxFQUFFb0UsT0FBTztBQUNuRDtRQUNEO0FBQUEsWUFBQUMsYUFBQXRELDJCQUVtQmYsU0FBUyxPQUFPLEVBQUVvRSxLQUFBLEdBQUFFO0FBQUEsWUFBQTtBQUFyQyxlQUFBRCxXQUFBcEQsRUFBQSxHQUFBLEVBQUFxRCxTQUFBRCxXQUFBbkQsRUFBQSxHQUFBQyxRQUE0QztBQUFBLGtCQUFqQzNCLE9BQUE4RSxPQUFBakQ7QUFDVixnQkFBSSxDQUFDN0IsS0FBSytCLFFBQVE7QUFDakI7WUFDRDtBQUFBLGdCQUFBZ0QsYUFBQXhELDJCQUVzQnZCLEtBQUsrQixNQUFBLEdBQUFpRDtBQUFBLGdCQUFBO0FBQTNCLG1CQUFBRCxXQUFBdEQsRUFBQSxHQUFBLEVBQUF1RCxTQUFBRCxXQUFBckQsRUFBQSxHQUFBQyxRQUdLO0FBQUEsc0JBSE07a0JBQUNDO2dCQUFLLElBQUFvRCxPQUFBbkQ7QUFJaEIsb0JBQUksQ0FBQ0QsT0FBTztBQUNYO2dCQUNEO0FBRUEyQiwwQkFBVUEsVUFBVWQsTUFBTSxJQUFJYjtjQUMvQjtZQUFBLFNBQUFlLEtBQUE7QUFBQW9DLHlCQUFBbkMsRUFBQUQsR0FBQTtZQUFBLFVBQUE7QUFBQW9DLHlCQUFBbEMsRUFBQTtZQUFBO1VBQ0Q7UUFBQSxTQUFBRixLQUFBO0FBQUFrQyxxQkFBQWpDLEVBQUFELEdBQUE7UUFBQSxVQUFBO0FBQUFrQyxxQkFBQWhDLEVBQUE7UUFBQTtNQUNELFFBQVE7TUFBQztJQUNWO0FBRUEsWUFBQSxHQUFPckQsbUJBQUE2QixhQUFZa0MsU0FBUztFQUM3QixDQUFBO0FBQUEsU0FBQSxTQXBDTWUsV0FBQVcsS0FBQTtBQUFBLFdBQUFWLE1BQUEzRCxNQUFBLE1BQUFDLFNBQUE7RUFBQTtBQUFBLEVBQUE7QUFzQ04sSUFBTXFFLGVBQUEsMkJBQUE7QUFBQSxNQUFBQyxRQUFBcEYsa0JBQWUsV0FBT29CLFFBQWtEO0FBQzdFeEIscUJBQWlCQyxVQUFVO0FBQzNCLEtBQUEsR0FBQUYsbUJBQUEwRixVQUNDO01BQ0NDLE1BQU07TUFDTkMsVUFBVTtJQUNYLEdBQ0EsTUFDRDtBQUVBLFFBQUkvQixZQUFzQixDQUFBO0FBQzFCLFVBQU07TUFBQ2dDO01BQW1CQztJQUFVLElBQUk5QixHQUFHQyxPQUFPakQsSUFBSTtBQUV0RCxRQUFJLENBQUNTLFVBQVUsQ0FBQ0EsT0FBT3NCLFFBQVE7QUFDOUJ0QixlQUFTb0Usb0JBQW9CLElBQUksQ0FBQSxJQUFLLENBQUNDLFVBQVU7SUFDbEQ7QUFFQSxVQUFNQyxtQkFBbUIzRSxZQUFZNEUsUUFBUTtBQUM3QyxVQUFNQyxvQkFBb0J0QyxzQkFBc0JvQyxnQkFBZ0I7QUFDaEUsVUFBTXJFLHFCQUFBLE1BQTJCSCxxQkFBcUIwRSxpQkFBaUI7QUFFdkVwQyxpQkFBQSxHQUFZL0QsbUJBQUE2QixhQUFZLENBQ3ZCLEdBQUdzRSxtQkFDSCxHQUFHdkUsb0JBQ0gsR0FBQSxNQUFVa0QsVUFBVSxDQUFDLEdBQUduRCxRQUFRLEdBQUd3RSxpQkFBaUIsQ0FBQyxDQUFBLENBQ3JEO0FBRURoRyxxQkFBaUJDLFVBQVU7QUFDM0JELHdCQUFBLEdBQW1CRCxtQkFBQTBGLFVBQ2xCO01BQ0NDLE1BQU07TUFDTkMsVUFBVTtJQUNYLEdBQ0EsU0FDRDtBQUVBLFlBQUEsR0FBTzlGLG1CQUFBNkIsYUFBWWtDLFNBQVM7RUFDN0IsQ0FBQTtBQUFBLFNBQUEsU0FyQ00yQixjQUFBVSxLQUFBO0FBQUEsV0FBQVQsTUFBQXZFLE1BQUEsTUFBQUMsU0FBQTtFQUFBO0FBQUEsRUFBQTs7QURySk5nRixPQUFPQyx1QkFBdUJ4RyxtQkFBQXdHO0FBQzlCRCxPQUFPWCxlQUFlQTtDQUVyQixTQUFTYSxzQkFBNEI7QUFDckMsUUFBTTtJQUFDQztJQUE0QkM7RUFBZSxJQUFJdkMsR0FBR0MsT0FBT2pELElBQUk7QUFDcEUsTUFDQyxFQUNDdUYsbUJBQ0EsQ0FBQyxlQUFlLG1CQUFtQixhQUFhLEVBQUU5QixTQUFTNkIsOEJBQThCLEVBQUUsSUFFM0Y7QUFDRDtFQUNEO0FBRUEsUUFBTUUsWUFBbUNSLFNBQVNTLGNBQWMsYUFBYSxJQUFJLGVBQWU7QUFDaEcsUUFBTXBGLFVBQWdDMkMsR0FBRzBDLEtBQUtDLGVBQWVILFdBQVcsS0FBSyxhQUFhLFVBQVU7QUFDcEcsTUFBSSxDQUFDbkYsU0FBUztBQUNiO0VBQ0Q7QUFFQUEsVUFBUXVGLGlCQUFpQixTQUFTLE1BQVk7QUFDN0MsU0FBQXZHLGtCQUFNLGFBQVk7QUFDakIsWUFBTXdELFlBQUEsTUFBa0IyQixhQUFhO0FBQ3JDLFVBQUksQ0FBQzNCLFVBQVVkLFFBQVE7QUFDdEI7TUFDRDtBQUNBLGFBQUEsR0FBTW5ELG1CQUFBd0csc0JBQXFCdkMsV0FBVyxJQUFJO0lBQzNDLENBQUEsRUFBRyxFQUFFZ0QsS0FBSyxNQUFNO0FBQ2YsT0FBQSxHQUFBakgsbUJBQUFrSCxhQUFZO0lBQ2IsQ0FBQztFQUNGLENBQUM7QUFDRixHQUFHOyIsCiAgIm5hbWVzIjogWyJpbXBvcnRfZXh0X2dhZGdldDQiLCAicmVxdWlyZSIsICJpbXBvcnRfZXh0X2dhZGdldDIiLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAiaW1wb3J0X2V4dF9nYWRnZXQzIiwgInRvYXN0aWZ5SW5zdGFuY2UiLCAiaGlkZVRvYXN0IiwgInBhcnNlIiwgIl9yZWYiLCAiX2FzeW5jVG9HZW5lcmF0b3IiLCAicGFnZSIsICJwYXJhbXMiLCAiYWN0aW9uIiwgImZvcm1hdCIsICJmb3JtYXR2ZXJzaW9uIiwgInByb3AiLCAicmVkaXJlY3RzIiwgImRpc2FibGV0b2MiLCAicmVzcG9uc2UiLCAiYXBpIiwgImdldCIsICJfeCIsICJhcHBseSIsICJhcmd1bWVudHMiLCAiZ2V0RWxlbWVudHMiLCAiZWxlbWVudCIsICJxdWVyeVNlbGVjdG9yQWxsIiwgImdldEVsZW1lbnRzRnJvbVBhcnNlIiwgIl9yZWYyIiwgInRpdGxlcyIsICJmaWxlTmFtZXNGcm9tUGFyc2UiLCAidW5pcXVlQXJyYXkiLCAiX2l0ZXJhdG9yIiwgIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwgIl9zdGVwIiwgInMiLCAibiIsICJkb25lIiwgInRpdGxlIiwgInZhbHVlIiwgImxpbmtzIiwgImltYWdlcyIsICJyZWdleCIsICJfaXRlcmF0b3IyIiwgIl9zdGVwMiIsICJ0aXRsZU5hbWUiLCAidGVzdCIsICJtYXRjaCIsICJleGVjIiwgImZpbGVOYW1lIiwgInJlcGxhY2UiLCAibGVuZ3RoIiwgImNvbmNhdCIsICJlcnIiLCAiZSIsICJmIiwgIl9pdGVyYXRvcjMiLCAiX3N0ZXAzIiwgIl94MiIsICJxdWVyeUltYWdlcyIsICJfcmVmMyIsICJpbWxpbWl0IiwgIl94MyIsICJnZXRJbWFnZXNGcm9tRWxlbWVudHMiLCAiZmlsZUxpbmtFbGVtZW50cyIsICJmaWxlTmFtZXMiLCAid2dBcnRpY2xlUGF0aCIsICJ3Z1NjcmlwdCIsICJtdyIsICJjb25maWciLCAiYXJ0aWNsZVJlZ2V4IiwgIlJlZ0V4cCIsICJzY3JpcHRSZWdleCIsICJfaXRlcmF0b3I0IiwgIl9zdGVwNCIsICJocmVmIiwgImNsYXNzTGlzdCIsICJpbmNsdWRlcyIsICJjb250YWlucyIsICJkZWNvZGVVUklDb21wb25lbnQiLCAiZ2V0SW1hZ2VzIiwgIl9yZWY0IiwgImdlbmVyYXRlQXJyYXkiLCAiaSIsICJxdWVyeXRpdGxlcyIsICJzcGxpY2UiLCAicGFnZXMiLCAiX2l0ZXJhdG9yNSIsICJfc3RlcDUiLCAiX2l0ZXJhdG9yNiIsICJfc3RlcDYiLCAiX3g0IiwgImdldEFsbEltYWdlcyIsICJfcmVmNSIsICJ0b2FzdGlmeSIsICJ0ZXh0IiwgImR1cmF0aW9uIiwgIndnTmFtZXNwYWNlTnVtYmVyIiwgIndnUGFnZU5hbWUiLCAiZWxlbWVudHNGcm9tUGFnZSIsICJkb2N1bWVudCIsICJmaWxlTmFtZXNGcm9tUGFnZSIsICJfeDUiLCAid2luZG93IiwgImRldGVjdElmRmlsZVJlZGlyZWN0IiwgInF1aWNrSW1wb3J0QWxsTWVkaWEiLCAid2dDYW5vbmljYWxTcGVjaWFsUGFnZU5hbWUiLCAid2dDdXJSZXZpc2lvbklkIiwgInBvcnRsZXRJZCIsICJxdWVyeVNlbGVjdG9yIiwgInV0aWwiLCAiYWRkUG9ydGxldExpbmsiLCAiYWRkRXZlbnRMaXN0ZW5lciIsICJ0aGVuIiwgInJlZnJlc2hQYWdlIl0KfQo=

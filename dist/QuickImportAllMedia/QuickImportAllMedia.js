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
//! src/QuickImportAllMedia/QuickImportAllMedia.ts
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
var import_ext_gadget4 = require("ext.gadget.QuickImport");
//! src/QuickImportAllMedia/modules/core.ts
var import_ext_gadget = require("ext.gadget.Util");
var import_ext_gadget2 = require("ext.gadget.QuickImport");
var import_ext_gadget3 = require("ext.gadget.Toastify");
var toastifyInstance = {
  hideToast: () => {
  }
};
var parse = /* @__PURE__ */ (function() {
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
})();
var getElements = (element) => {
  return [...element.querySelectorAll("a[href^='/wiki/File:']"), ...element.querySelectorAll("a[href*='title=File:']")];
};
var getElementsFromParse = /* @__PURE__ */ (function() {
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
})();
var queryImages = /* @__PURE__ */ (function() {
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
})();
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
var getImages = /* @__PURE__ */ (function() {
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
})();
var getAllImages = /* @__PURE__ */ (function() {
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
})();
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
      if (fileNames.length) {
        yield (0, import_ext_gadget4.detectIfFileRedirect)(fileNames, true);
      }
      (0, import_ext_gadget4.refreshPage)();
    })();
  });
})();
window.getAllImages = getAllImages;

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1F1aWNrSW1wb3J0QWxsTWVkaWEvUXVpY2tJbXBvcnRBbGxNZWRpYS50cyIsICJzcmMvUXVpY2tJbXBvcnRBbGxNZWRpYS9tb2R1bGVzL2NvcmUudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7ZGV0ZWN0SWZGaWxlUmVkaXJlY3QsIHJlZnJlc2hQYWdlfSBmcm9tICdleHQuZ2FkZ2V0LlF1aWNrSW1wb3J0JztcbmltcG9ydCB7Z2V0QWxsSW1hZ2VzfSBmcm9tICcuL21vZHVsZXMvY29yZSc7XG5cbihmdW5jdGlvbiBxdWlja0ltcG9ydEFsbE1lZGlhKCk6IHZvaWQge1xuXHRjb25zdCB7d2dDYW5vbmljYWxTcGVjaWFsUGFnZU5hbWUsIHdnQ3VyUmV2aXNpb25JZH0gPSBtdy5jb25maWcuZ2V0KCk7XG5cdGlmICghKFxuXHRcdHdnQ3VyUmV2aXNpb25JZCB8fCBbJ1ByZWZpeGluZGV4JywgJ0Jyb2tlblJlZGlyZWN0cycsICdXYW50ZWRmaWxlcyddLmluY2x1ZGVzKHdnQ2Fub25pY2FsU3BlY2lhbFBhZ2VOYW1lIHx8ICcnKVxuXHQpKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgcG9ydGxldElkOiAncC1jYWN0aW9ucycgfCAncC10YicgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcC1jYWN0aW9ucycpID8gJ3AtY2FjdGlvbnMnIDogJ3AtdGInO1xuXHRjb25zdCBlbGVtZW50OiBIVE1MTElFbGVtZW50IHwgbnVsbCA9IG13LnV0aWwuYWRkUG9ydGxldExpbmsocG9ydGxldElkLCAnIycsICflr7zlhaXmraTpobXpnaLmiYDmnInmlofku7YnLCAndC1pbXBvcnQnKTtcblx0aWYgKCFlbGVtZW50KSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpOiB2b2lkID0+IHtcblx0XHR2b2lkIChhc3luYyAoKSA9PiB7XG5cdFx0XHRjb25zdCBmaWxlTmFtZXMgPSBhd2FpdCBnZXRBbGxJbWFnZXMoKTtcblx0XHRcdGlmIChmaWxlTmFtZXMubGVuZ3RoKSB7XG5cdFx0XHRcdGF3YWl0IGRldGVjdElmRmlsZVJlZGlyZWN0KGZpbGVOYW1lcywgdHJ1ZSk7XG5cdFx0XHR9XG5cblx0XHRcdHJlZnJlc2hQYWdlKCk7XG5cdFx0fSkoKTtcblx0fSk7XG59KSgpO1xuXG53aW5kb3cuZ2V0QWxsSW1hZ2VzID0gZ2V0QWxsSW1hZ2VzO1xuIiwgImltcG9ydCB7Z2VuZXJhdGVBcnJheSwgdW5pcXVlQXJyYXl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5pbXBvcnQge2FwaX0gZnJvbSAnZXh0LmdhZGdldC5RdWlja0ltcG9ydCc7XG5pbXBvcnQge3RvYXN0aWZ5fSBmcm9tICdleHQuZ2FkZ2V0LlRvYXN0aWZ5JztcblxubGV0IHRvYXN0aWZ5SW5zdGFuY2U6IFRvYXN0aWZ5SW5zdGFuY2UgPSB7XG5cdGhpZGVUb2FzdDogKCkgPT4ge30sXG59O1xuXG5jb25zdCBwYXJzZSA9IGFzeW5jIChwYWdlOiBzdHJpbmcpID0+IHtcblx0Y29uc3QgcGFyYW1zOiBBcGlQYXJzZVBhcmFtcyA9IHtcblx0XHRwYWdlLFxuXHRcdGFjdGlvbjogJ3BhcnNlJyxcblx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0cHJvcDogWydsaW5rcycsICdpbWFnZXMnXSxcblx0XHRyZWRpcmVjdHM6IHRydWUsXG5cdFx0ZGlzYWJsZXRvYzogdHJ1ZSxcblx0fTtcblx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGkuZ2V0KHBhcmFtcyk7XG5cblx0cmV0dXJuIHJlc3BvbnNlO1xufTtcblxuY29uc3QgZ2V0RWxlbWVudHMgPSAoZWxlbWVudDogRG9jdW1lbnQgfCBIVE1MRWxlbWVudCkgPT4ge1xuXHRyZXR1cm4gW1xuXHRcdC4uLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MQW5jaG9yRWxlbWVudD4oXCJhW2hyZWZePScvd2lraS9GaWxlOiddXCIpLFxuXHRcdC4uLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MQW5jaG9yRWxlbWVudD4oXCJhW2hyZWYqPSd0aXRsZT1GaWxlOiddXCIpLFxuXHRdO1xufTtcblxuY29uc3QgZ2V0RWxlbWVudHNGcm9tUGFyc2UgPSBhc3luYyAodGl0bGVzOiBzdHJpbmdbXSkgPT4ge1xuXHRjb25zdCBmaWxlTmFtZXNGcm9tUGFyc2U6IHN0cmluZ1tdID0gW107XG5cdHRpdGxlcyA9IHVuaXF1ZUFycmF5KHRpdGxlcyk7XG5cblx0Zm9yIChjb25zdCB0aXRsZSBvZiB0aXRsZXMpIHtcblx0XHR0cnkge1xuXHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBwYXJzZSh0aXRsZSk7XG5cdFx0XHRpZiAoIXJlc3BvbnNlWydwYXJzZSddIHx8ICghcmVzcG9uc2VbJ3BhcnNlJ10ubGlua3MgJiYgIXJlc3BvbnNlWydwYXJzZSddLmltYWdlcykpIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChyZXNwb25zZVsncGFyc2UnXS5saW5rcykge1xuXHRcdFx0XHRjb25zdCByZWdleDogUmVnRXhwID0gLyhGaWxlOlteI10rKS87XG5cblx0XHRcdFx0Zm9yIChjb25zdCB7dGl0bGU6IHRpdGxlTmFtZX0gb2YgcmVzcG9uc2VbJ3BhcnNlJ10ubGlua3MgYXMge3RpdGxlOiBzdHJpbmd9W10pIHtcblx0XHRcdFx0XHRpZiAocmVnZXgudGVzdCh0aXRsZU5hbWUpKSB7XG5cdFx0XHRcdFx0XHRjb25zdCBtYXRjaDogUmVnRXhwRXhlY0FycmF5ID0gcmVnZXguZXhlYyh0aXRsZU5hbWUpIGFzIFJlZ0V4cEV4ZWNBcnJheTtcblx0XHRcdFx0XHRcdGxldCBbZmlsZU5hbWVdID0gbWF0Y2ggYXMgc3RyaW5nW107XG5cblx0XHRcdFx0XHRcdGlmICghZmlsZU5hbWUgfHwgdHlwZW9mIGZpbGVOYW1lICE9PSAnc3RyaW5nJykge1xuXHRcdFx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0ZmlsZU5hbWUgPSBkZWNvZGVVUklDb21wb25lbnQoZmlsZU5hbWUpLnJlcGxhY2UoLygoRmlsZXxJbWFnZSk6KSgoRmlsZXxJbWFnZSk6KT8vaSwgJ0ZpbGU6Jyk7XG5cdFx0XHRcdFx0XHRmaWxlTmFtZXNGcm9tUGFyc2VbZmlsZU5hbWVzRnJvbVBhcnNlLmxlbmd0aF0gPSBmaWxlTmFtZTtcblx0XHRcdFx0XHRcdGlmIChmaWxlTmFtZS5pbmNsdWRlcygnKycpKSB7XG5cdFx0XHRcdFx0XHRcdGZpbGVOYW1lc0Zyb21QYXJzZVtmaWxlTmFtZXNGcm9tUGFyc2UubGVuZ3RoXSA9IGZpbGVOYW1lLnJlcGxhY2UoJysnLCAnICcpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRpZiAocmVzcG9uc2VbJ3BhcnNlJ10uaW1hZ2VzKSB7XG5cdFx0XHRcdGZvciAoY29uc3QgZmlsZU5hbWUgb2YgcmVzcG9uc2VbJ3BhcnNlJ10uaW1hZ2VzKSB7XG5cdFx0XHRcdFx0ZmlsZU5hbWVzRnJvbVBhcnNlW2ZpbGVOYW1lc0Zyb21QYXJzZS5sZW5ndGhdID0gYEZpbGU6JHtmaWxlTmFtZX1gO1xuXHRcdFx0XHRcdGlmIChgJHtmaWxlTmFtZX1gLmluY2x1ZGVzKCcrJykpIHtcblx0XHRcdFx0XHRcdGZpbGVOYW1lc0Zyb21QYXJzZVtmaWxlTmFtZXNGcm9tUGFyc2UubGVuZ3RoXSA9IGBGaWxlOiR7ZmlsZU5hbWV9YC5yZXBsYWNlKCcrJywgJyAnKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9IGNhdGNoIHt9XG5cdH1cblxuXHRyZXR1cm4gdW5pcXVlQXJyYXkoZmlsZU5hbWVzRnJvbVBhcnNlKTtcbn07XG5cbmNvbnN0IHF1ZXJ5SW1hZ2VzID0gYXN5bmMgKHRpdGxlczogc3RyaW5nIHwgc3RyaW5nW10pID0+IHtcblx0Y29uc3QgcGFyYW1zOiBBcGlRdWVyeUltYWdlc1BhcmFtcyA9IHtcblx0XHR0aXRsZXMsXG5cdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRwcm9wOiAnaW1hZ2VzJyxcblx0XHRpbWxpbWl0OiA1MDAwLFxuXHRcdHJlZGlyZWN0czogdHJ1ZSxcblx0fTtcblx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGkuZ2V0KHBhcmFtcyk7XG5cblx0cmV0dXJuIHJlc3BvbnNlO1xufTtcblxuY29uc3QgZ2V0SW1hZ2VzRnJvbUVsZW1lbnRzID0gKGZpbGVMaW5rRWxlbWVudHM6IEhUTUxBbmNob3JFbGVtZW50W10pID0+IHtcblx0Y29uc3QgZmlsZU5hbWVzOiBzdHJpbmdbXSA9IFtdO1xuXHRmaWxlTGlua0VsZW1lbnRzID0gdW5pcXVlQXJyYXkoZmlsZUxpbmtFbGVtZW50cyk7XG5cdGNvbnN0IHt3Z0FydGljbGVQYXRoLCB3Z1NjcmlwdH0gPSBtdy5jb25maWcuZ2V0KCk7XG5cdGNvbnN0IGFydGljbGVSZWdleDogUmVnRXhwID0gbmV3IFJlZ0V4cChgJHt3Z0FydGljbGVQYXRoLnJlcGxhY2UoJyQxJywgJycpfShGaWxlOlteI10rKWApO1xuXHRjb25zdCBzY3JpcHRSZWdleDogUmVnRXhwID0gbmV3IFJlZ0V4cChgJHt3Z1NjcmlwdH1cXFxcP3RpdGxlPShGaWxlOlteIyZdKylgKTtcblxuXHRmb3IgKGNvbnN0IGVsZW1lbnQgb2YgZmlsZUxpbmtFbGVtZW50cykge1xuXHRcdC8vIFJlcGxhY2UgU2V0IHdpdGggdW5pcXVlQXJyYXksIGF2b2lkaW5nIGNvcmUtanMgcG9seWZpbGxpbmdcblx0XHRjb25zdCB7aHJlZiwgY2xhc3NMaXN0fSA9IGVsZW1lbnQ7XG5cblx0XHRpZiAoIWhyZWYgfHwgaHJlZi5pbmNsdWRlcygncmVkbGluaz0xJykpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGlmIChjbGFzc0xpc3QuY29udGFpbnMoJ25ldycpKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRsZXQgZmlsZU5hbWU6IHN0cmluZyB8IHVuZGVmaW5lZDtcblx0XHRpZiAoYXJ0aWNsZVJlZ2V4LnRlc3QoaHJlZikpIHtcblx0XHRcdGNvbnN0IG1hdGNoOiBSZWdFeHBFeGVjQXJyYXkgPSBhcnRpY2xlUmVnZXguZXhlYyhocmVmKSBhcyBSZWdFeHBFeGVjQXJyYXk7XG5cdFx0XHRmaWxlTmFtZSA9IG1hdGNoWzFdO1xuXHRcdFx0aWYgKCFmaWxlTmFtZSB8fCB0eXBlb2YgZmlsZU5hbWUgIT09ICdzdHJpbmcnKSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXHRcdFx0ZmlsZU5hbWUgPSBkZWNvZGVVUklDb21wb25lbnQoZmlsZU5hbWUpLnJlcGxhY2UoLygoRmlsZXxJbWFnZSk6KSgoRmlsZXxJbWFnZSk6KT8vaSwgJ0ZpbGU6Jyk7XG5cdFx0XHRmaWxlTmFtZXNbZmlsZU5hbWVzLmxlbmd0aF0gPSBmaWxlTmFtZTtcblx0XHRcdGlmIChmaWxlTmFtZS5pbmNsdWRlcygnKycpKSB7XG5cdFx0XHRcdGZpbGVOYW1lc1tmaWxlTmFtZXMubGVuZ3RoXSA9IGZpbGVOYW1lLnJlcGxhY2UoJysnLCAnICcpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChzY3JpcHRSZWdleC50ZXN0KGhyZWYpKSB7XG5cdFx0XHRjb25zdCBtYXRjaDogUmVnRXhwRXhlY0FycmF5ID0gc2NyaXB0UmVnZXguZXhlYyhocmVmKSBhcyBSZWdFeHBFeGVjQXJyYXk7XG5cdFx0XHRmaWxlTmFtZSA9IG1hdGNoWzFdO1xuXHRcdFx0aWYgKCFmaWxlTmFtZSB8fCB0eXBlb2YgZmlsZU5hbWUgIT09ICdzdHJpbmcnKSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXHRcdFx0ZmlsZU5hbWUgPSBkZWNvZGVVUklDb21wb25lbnQoZmlsZU5hbWUpLnJlcGxhY2UoLygoRmlsZXxJbWFnZSk6KSgoRmlsZXxJbWFnZSk6KT8vaSwgJ0ZpbGU6Jyk7XG5cdFx0XHRmaWxlTmFtZXNbZmlsZU5hbWVzLmxlbmd0aF0gPSBmaWxlTmFtZTtcblx0XHRcdGlmIChmaWxlTmFtZS5pbmNsdWRlcygnKycpKSB7XG5cdFx0XHRcdGZpbGVOYW1lc1tmaWxlTmFtZXMubGVuZ3RoXSA9IGZpbGVOYW1lLnJlcGxhY2UoJysnLCAnICcpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiB1bmlxdWVBcnJheShmaWxlTmFtZXMpO1xufTtcblxuY29uc3QgZ2V0SW1hZ2VzID0gYXN5bmMgKHRpdGxlczogc3RyaW5nIHwgc3RyaW5nW10pID0+IHtcblx0Y29uc3QgZmlsZU5hbWVzOiBzdHJpbmdbXSA9IFtdO1xuXHR0aXRsZXMgPSB1bmlxdWVBcnJheShnZW5lcmF0ZUFycmF5KHRpdGxlcykpO1xuXG5cdGZvciAobGV0IGkgPSAwOyBpIDwgdGl0bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y29uc3QgcXVlcnl0aXRsZXMgPSB0aXRsZXMuc3BsaWNlKDAsIDI1KTtcblx0XHRpZiAoIXF1ZXJ5dGl0bGVzLmxlbmd0aCkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcXVlcnlJbWFnZXMocXVlcnl0aXRsZXMpO1xuXHRcdFx0aWYgKCFyZXNwb25zZVsncXVlcnknXSB8fCAhcmVzcG9uc2VbJ3F1ZXJ5J10ucGFnZXMpIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cblx0XHRcdGZvciAoY29uc3QgcGFnZSBvZiByZXNwb25zZVsncXVlcnknXS5wYWdlcykge1xuXHRcdFx0XHRpZiAoIXBhZ2UuaW1hZ2VzKSB7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRmb3IgKGNvbnN0IHt0aXRsZX0gb2YgcGFnZS5pbWFnZXMgYXMge1xuXHRcdFx0XHRcdG5zOiBudW1iZXI7XG5cdFx0XHRcdFx0dGl0bGU6IHN0cmluZztcblx0XHRcdFx0fVtdKSB7XG5cdFx0XHRcdFx0aWYgKCF0aXRsZSkge1xuXHRcdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0ZmlsZU5hbWVzW2ZpbGVOYW1lcy5sZW5ndGhdID0gdGl0bGU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9IGNhdGNoIHt9XG5cdH1cblxuXHRyZXR1cm4gdW5pcXVlQXJyYXkoZmlsZU5hbWVzKTtcbn07XG5cbmNvbnN0IGdldEFsbEltYWdlcyA9IGFzeW5jICh0aXRsZXM/OiBzdHJpbmcgfCBzdHJpbmdbXSk6IFByb21pc2U8c3RyaW5nW10+ID0+IHtcblx0dG9hc3RpZnlJbnN0YW5jZS5oaWRlVG9hc3QoKTtcblx0dG9hc3RpZnkoXG5cdFx0e1xuXHRcdFx0dGV4dDogJ+ato+WcqOiOt+WPlui/geenu+ebruaghycsXG5cdFx0XHRkdXJhdGlvbjogLTEsXG5cdFx0fSxcblx0XHQnaW5mbydcblx0KTtcblxuXHRsZXQgZmlsZU5hbWVzOiBzdHJpbmdbXSA9IFtdO1xuXHRjb25zdCB7d2dOYW1lc3BhY2VOdW1iZXIsIHdnUGFnZU5hbWV9ID0gbXcuY29uZmlnLmdldCgpO1xuXG5cdGlmICghdGl0bGVzIHx8ICF0aXRsZXMubGVuZ3RoKSB7XG5cdFx0dGl0bGVzID0gd2dOYW1lc3BhY2VOdW1iZXIgPCAwID8gW10gOiBbd2dQYWdlTmFtZV07XG5cdH1cblxuXHRjb25zdCBlbGVtZW50c0Zyb21QYWdlID0gZ2V0RWxlbWVudHMoZG9jdW1lbnQpO1xuXHRjb25zdCBmaWxlTmFtZXNGcm9tUGFnZSA9IGdldEltYWdlc0Zyb21FbGVtZW50cyhlbGVtZW50c0Zyb21QYWdlKTtcblx0Y29uc3QgZmlsZU5hbWVzRnJvbVBhcnNlID0gYXdhaXQgZ2V0RWxlbWVudHNGcm9tUGFyc2UoZmlsZU5hbWVzRnJvbVBhZ2UpO1xuXG5cdGZpbGVOYW1lcyA9IHVuaXF1ZUFycmF5KFtcblx0XHQuLi5maWxlTmFtZXNGcm9tUGFnZSxcblx0XHQuLi5maWxlTmFtZXNGcm9tUGFyc2UsXG5cdFx0Li4uKGF3YWl0IGdldEltYWdlcyhbLi4udGl0bGVzLCAuLi5maWxlTmFtZXNGcm9tUGFnZV0pKSxcblx0XSk7XG5cblx0dG9hc3RpZnlJbnN0YW5jZS5oaWRlVG9hc3QoKTtcblx0dG9hc3RpZnlJbnN0YW5jZSA9IHRvYXN0aWZ5KFxuXHRcdHtcblx0XHRcdHRleHQ6ICfojrflj5bov4Hnp7vnm67moIflrozmiJAnLFxuXHRcdFx0ZHVyYXRpb246IC0xLFxuXHRcdH0sXG5cdFx0J3N1Y2Nlc3MnXG5cdCk7XG5cblx0cmV0dXJuIHVuaXF1ZUFycmF5KGZpbGVOYW1lcyk7IC8vIFJlcGxhY2UgU2V0IHdpdGggdW5pcXVlQXJyYXksIGF2b2lkaW5nIGNvcmUtanMgcG9seWZpbGxpbmdcbn07XG5cbmV4cG9ydCB7Z2V0QWxsSW1hZ2VzfTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLHFCQUFnREMsUUFBQSx3QkFBQTs7QUNBaEQsSUFBQUMsb0JBQXlDRCxRQUFBLGlCQUFBO0FBQ3pDLElBQUFFLHFCQUFrQkYsUUFBQSx3QkFBQTtBQUNsQixJQUFBRyxxQkFBdUJILFFBQUEscUJBQUE7QUFFdkIsSUFBSUksbUJBQXFDO0VBQ3hDQyxXQUFXQSxNQUFNO0VBQUM7QUFDbkI7QUFFQSxJQUFNQyxRQUFBLDRCQUFBO0FBQUEsTUFBQUMsT0FBQUMsa0JBQVEsV0FBT0MsTUFBaUI7QUFDckMsVUFBTUMsU0FBeUI7TUFDOUJEO01BQ0FFLFFBQVE7TUFDUkMsUUFBUTtNQUNSQyxlQUFlO01BQ2ZDLE1BQU0sQ0FBQyxTQUFTLFFBQVE7TUFDeEJDLFdBQVc7TUFDWEMsWUFBWTtJQUNiO0FBQ0EsVUFBTUMsV0FBQSxNQUFpQmYsbUJBQUFnQixJQUFJQyxJQUFJVCxNQUFNO0FBRXJDLFdBQU9PO0VBQ1IsQ0FBQTtBQUFBLFNBQUEsU0FiTVgsT0FBQWMsSUFBQTtBQUFBLFdBQUFiLEtB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QUFBQSxXQUFBVCxNQUFBdkUsTUFBQSxNQUFBQyxTQUFBO0VBQUE7QUFBQSxHQUFBOztDRGhMTCxTQUFTZ0Ysc0JBQTRCO0FBQ3JDLFFBQU07SUFBQ0M7SUFBNEJDO0VBQWUsSUFBSW5DLEdBQUdDLE9BQU9uRCxJQUFJO0FBQ3BFLE1BQUksRUFDSHFGLG1CQUFtQixDQUFDLGVBQWUsbUJBQW1CLGFBQWEsRUFBRXBELFNBQVNtRCw4QkFBOEIsRUFBRSxJQUM1RztBQUNGO0VBQ0Q7QUFFQSxRQUFNRSxZQUFtQ04sU0FBU08sY0FBYyxhQUFhLElBQUksZUFBZTtBQUNoRyxRQUFNbEYsVUFBZ0M2QyxHQUFHc0MsS0FBS0MsZUFBZUgsV0FBVyxLQUFLLGFBQWEsVUFBVTtBQUNwRyxNQUFJLENBQUNqRixTQUFTO0FBQ2I7RUFDRDtBQUVBQSxVQUFRcUYsaUJBQWlCLFNBQVMsTUFBWTtBQUM3QyxTQUFBckcsa0JBQU0sYUFBWTtBQUNqQixZQUFNMEQsWUFBQSxNQUFrQnlCLGFBQWE7QUFDckMsVUFBSXpCLFVBQVVmLFFBQVE7QUFDckIsZUFBQSxHQUFNcEQsbUJBQUErRyxzQkFBcUI1QyxXQUFXLElBQUk7TUFDM0M7QUFFQSxPQUFBLEdBQUFuRSxtQkFBQWdILGFBQVk7SUFDYixDQUFBLEVBQUc7RUFDSixDQUFDO0FBQ0YsR0FBRztBQUVIQyxPQUFPckIsZUFBZUE7IiwKICAibmFtZXMiOiBbImltcG9ydF9leHRfZ2FkZ2V0NCIsICJyZXF1aXJlIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgImltcG9ydF9leHRfZ2FkZ2V0MiIsICJpbXBvcnRfZXh0X2dhZGdldDMiLCAidG9hc3RpZnlJbnN0YW5jZSIsICJoaWRlVG9hc3QiLCAicGFyc2UiLCAiX3JlZiIsICJfYXN5bmNUb0dlbmVyYXRvciIsICJwYWdlIiwgInBhcmFtcyIsICJhY3Rpb24iLCAiZm9ybWF0IiwgImZvcm1hdHZlcnNpb24iLCAicHJvcCIsICJyZWRpcmVjdHMiLCAiZGlzYWJsZXRvYyIsICJyZXNwb25zZSIsICJhcGkiLCAiZ2V0IiwgIl94IiwgImFwcGx5IiwgImFyZ3VtZW50cyIsICJnZXRFbGVtZW50cyIsICJlbGVtZW50IiwgInF1ZXJ5U2VsZWN0b3JBbGwiLCAiZ2V0RWxlbWVudHNGcm9tUGFyc2UiLCAiX3JlZjIiLCAidGl0bGVzIiwgImZpbGVOYW1lc0Zyb21QYXJzZSIsICJ1bmlxdWVBcnJheSIsICJfaXRlcmF0b3IiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAiX3N0ZXAiLCAicyIsICJuIiwgImRvbmUiLCAidGl0bGUiLCAidmFsdWUiLCAibGlua3MiLCAiaW1hZ2VzIiwgInJlZ2V4IiwgIl9pdGVyYXRvcjIiLCAiX3N0ZXAyIiwgInRpdGxlTmFtZSIsICJ0ZXN0IiwgIm1hdGNoIiwgImV4ZWMiLCAiZmlsZU5hbWUiLCAiZGVjb2RlVVJJQ29tcG9uZW50IiwgInJlcGxhY2UiLCAibGVuZ3RoIiwgImluY2x1ZGVzIiwgImVyciIsICJlIiwgImYiLCAiX2l0ZXJhdG9yMyIsICJfc3RlcDMiLCAiY29uY2F0IiwgIl94MiIsICJxdWVyeUltYWdlcyIsICJfcmVmMyIsICJpbWxpbWl0IiwgIl94MyIsICJnZXRJbWFnZXNGcm9tRWxlbWVudHMiLCAiZmlsZUxpbmtFbGVtZW50cyIsICJmaWxlTmFtZXMiLCAid2dBcnRpY2xlUGF0aCIsICJ3Z1NjcmlwdCIsICJtdyIsICJjb25maWciLCAiYXJ0aWNsZVJlZ2V4IiwgIlJlZ0V4cCIsICJzY3JpcHRSZWdleCIsICJfaXRlcmF0b3I0IiwgIl9zdGVwNCIsICJocmVmIiwgImNsYXNzTGlzdCIsICJjb250YWlucyIsICJnZXRJbWFnZXMiLCAiX3JlZjQiLCAiZ2VuZXJhdGVBcnJheSIsICJpIiwgInF1ZXJ5dGl0bGVzIiwgInNwbGljZSIsICJwYWdlcyIsICJfaXRlcmF0b3I1IiwgIl9zdGVwNSIsICJfaXRlcmF0b3I2IiwgIl9zdGVwNiIsICJfeDQiLCAiZ2V0QWxsSW1hZ2VzIiwgIl9yZWY1IiwgInRvYXN0aWZ5IiwgInRleHQiLCAiZHVyYXRpb24iLCAid2dOYW1lc3BhY2VOdW1iZXIiLCAid2dQYWdlTmFtZSIsICJlbGVtZW50c0Zyb21QYWdlIiwgImRvY3VtZW50IiwgImZpbGVOYW1lc0Zyb21QYWdlIiwgIl94NSIsICJxdWlja0ltcG9ydEFsbE1lZGlhIiwgIndnQ2Fub25pY2FsU3BlY2lhbFBhZ2VOYW1lIiwgIndnQ3VyUmV2aXNpb25JZCIsICJwb3J0bGV0SWQiLCAicXVlcnlTZWxlY3RvciIsICJ1dGlsIiwgImFkZFBvcnRsZXRMaW5rIiwgImFkZEV2ZW50TGlzdGVuZXIiLCAiZGV0ZWN0SWZGaWxlUmVkaXJlY3QiLCAicmVmcmVzaFBhZ2UiLCAid2luZG93Il0KfQo=

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
var queryImages = /* @__PURE__ */ function() {
  var _ref = _asyncToGenerator(function* (titles) {
    const params = {
      titles,
      action: "query",
      format: "json",
      formatversion: "2",
      prop: "images",
      imlimit: 5e3
    };
    const response = yield import_ext_gadget.api.post(params);
    return response;
  });
  return function queryImages2(_x) {
    return _ref.apply(this, arguments);
  };
}();
var parse = /* @__PURE__ */ function() {
  var _ref2 = _asyncToGenerator(function* (page) {
    const params = {
      page,
      action: "parse",
      format: "json",
      formatversion: "2",
      prop: "text",
      redirects: true,
      disabletoc: true
    };
    const response = yield import_ext_gadget.api.post(params);
    return response;
  });
  return function parse2(_x2) {
    return _ref2.apply(this, arguments);
  };
}();
var getElements = /* @__PURE__ */ function() {
  var _ref3 = _asyncToGenerator(function* (titles) {
    let fileLinkElements = [];
    titles = (0, import_ext_gadget2.uniqueArray)(titles);
    var _iterator = _createForOfIteratorHelper(titles), _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done; ) {
        const title = _step.value;
        try {
          const parseResponse = yield parse(title);
          if (!parseResponse["parse"] || !parseResponse["parse"].text) {
            continue;
          }
          const pageContent = document.createElement("span");
          pageContent.innerHTML = parseResponse["parse"].text;
          fileLinkElements = [...pageContent.querySelectorAll("a[href^='/wiki/File:']"), ...pageContent.querySelectorAll("a[href*='title=File:']")];
        } catch {
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    fileLinkElements = [...fileLinkElements, ...document.querySelectorAll("a[href^='/wiki/File:']"), ...document.querySelectorAll("a[href*='title=File:']")];
    return fileLinkElements;
  });
  return function getElements2(_x3) {
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
  var _iterator2 = _createForOfIteratorHelper(fileLinkElements), _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
      const element = _step2.value;
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
        fileName = fileName.replace(/File:(File:|Image:)?/i, "File:");
        fileName = decodeURIComponent(fileName);
        fileNames[fileNames.length] = fileName;
      }
      if (scriptRegex.test(href)) {
        const match = scriptRegex.exec(href);
        fileName = match[1];
        fileName = fileName.replace(/File:(File:|Image:)?/i, "File:");
        fileName = decodeURIComponent(fileName);
        fileNames[fileNames.length] = fileName;
      }
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
  return (0, import_ext_gadget2.uniqueArray)(fileNames);
};
var getImages = /* @__PURE__ */ function() {
  var _ref4 = _asyncToGenerator(function* (titles) {
    let fileNames = [];
    let fileLinkElements = [];
    titles = (0, import_ext_gadget2.generateArray)(titles);
    try {
      const queryImageResponse = yield queryImages(titles);
      if (queryImageResponse["query"] && queryImageResponse["query"].pages[0] && queryImageResponse["query"].pages[0].images) {
        var _iterator3 = _createForOfIteratorHelper(queryImageResponse["query"].pages[0].images), _step3;
        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
            const imageInfo = _step3.value;
            if (!imageInfo || !imageInfo.title) {
              continue;
            }
            fileNames[fileNames.length] = imageInfo.title;
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
      }
    } catch {
    }
    fileLinkElements = yield getElements(titles);
    fileNames = [...fileNames, ...getImagesFromElements(fileLinkElements)];
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
    if (titles.length) {
      fileNames = yield getImages(titles);
    }
    fileNames = [...fileNames, ...getImagesFromElements([...document.querySelectorAll("a[href^='/wiki/File:']"), ...document.querySelectorAll("a[href*='title=File:']")])];
    fileNames = [...fileNames, ...yield getImages(titles), ...yield getImages(fileNames)];
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1F1aWNrSW1wb3J0QWxsTWVkaWEvUXVpY2tJbXBvcnRBbGxNZWRpYS50cyIsICJzcmMvUXVpY2tJbXBvcnRBbGxNZWRpYS9tb2R1bGVzL2NvcmUudHMiLCAic3JjL1F1aWNrSW1wb3J0QWxsTWVkaWEvbW9kdWxlcy9hcGkudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7ZGV0ZWN0SWZGaWxlUmVkaXJlY3QsIHJlZnJlc2hQYWdlfSBmcm9tICdleHQuZ2FkZ2V0LlF1aWNrSW1wb3J0JztcbmltcG9ydCB7Z2V0QWxsSW1hZ2VzfSBmcm9tICcuL21vZHVsZXMvY29yZSc7XG5cbmRlY2xhcmUgZ2xvYmFsIHtcblx0aW50ZXJmYWNlIFdpbmRvdyB7XG5cdFx0ZGV0ZWN0SWZGaWxlUmVkaXJlY3Q6IERldGVjdElmRmlsZVJlZGlyZWN0O1xuXHRcdGdldEFsbEltYWdlczogdHlwZW9mIGdldEFsbEltYWdlcztcblx0fVxufVxuXG53aW5kb3cuZGV0ZWN0SWZGaWxlUmVkaXJlY3QgPSBkZXRlY3RJZkZpbGVSZWRpcmVjdDtcbndpbmRvdy5nZXRBbGxJbWFnZXMgPSBnZXRBbGxJbWFnZXM7XG5cbihmdW5jdGlvbiBxdWlja0ltcG9ydEFsbE1lZGlhKCk6IHZvaWQge1xuXHRjb25zdCB7d2dDYW5vbmljYWxTcGVjaWFsUGFnZU5hbWUsIHdnQ3VyUmV2aXNpb25JZH0gPSBtdy5jb25maWcuZ2V0KCk7XG5cdGlmIChcblx0XHQhKFxuXHRcdFx0d2dDdXJSZXZpc2lvbklkIHx8XG5cdFx0XHRbJ1ByZWZpeGluZGV4JywgJ0Jyb2tlblJlZGlyZWN0cycsICdXYW50ZWRmaWxlcyddLmluY2x1ZGVzKHdnQ2Fub25pY2FsU3BlY2lhbFBhZ2VOYW1lIHx8ICcnKVxuXHRcdClcblx0KSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgcG9ydGxldElkOiAncC1jYWN0aW9ucycgfCAncC10YicgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcC1jYWN0aW9ucycpID8gJ3AtY2FjdGlvbnMnIDogJ3AtdGInO1xuXHRjb25zdCBlbGVtZW50OiBIVE1MTElFbGVtZW50IHwgbnVsbCA9IG13LnV0aWwuYWRkUG9ydGxldExpbmsocG9ydGxldElkLCAnIycsICflr7zlhaXmraTpobXpnaLmiYDmnInmlofku7YnLCAndC1pbXBvcnQnKTtcblx0aWYgKCFlbGVtZW50KSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpOiB2b2lkID0+IHtcblx0XHR2b2lkIChhc3luYyAoKSA9PiB7XG5cdFx0XHRjb25zdCBmaWxlTmFtZXMgPSBhd2FpdCBnZXRBbGxJbWFnZXMoKTtcblx0XHRcdGlmICghZmlsZU5hbWVzLmxlbmd0aCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRhd2FpdCBkZXRlY3RJZkZpbGVSZWRpcmVjdChmaWxlTmFtZXMsIHRydWUpO1xuXHRcdH0pKCkudGhlbigoKSA9PiB7XG5cdFx0XHRyZWZyZXNoUGFnZSgpO1xuXHRcdH0pO1xuXHR9KTtcbn0pKCk7XG4iLCAiaW1wb3J0IHtnZW5lcmF0ZUFycmF5LCB1bmlxdWVBcnJheX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbmltcG9ydCB7YXBpfSBmcm9tICcuL2FwaSc7XG5pbXBvcnQge3RvYXN0aWZ5fSBmcm9tICdleHQuZ2FkZ2V0LlRvYXN0aWZ5JztcblxubGV0IHRvYXN0aWZ5SW5zdGFuY2U6IFRvYXN0aWZ5SW5zdGFuY2UgPSB7XG5cdGhpZGVUb2FzdDogKCkgPT4ge30sXG59O1xuXG5jb25zdCBxdWVyeUltYWdlcyA9IGFzeW5jICh0aXRsZXM6IHN0cmluZyB8IHN0cmluZ1tdKSA9PiB7XG5cdGNvbnN0IHBhcmFtczogQXBpUXVlcnlJbWFnZXNQYXJhbXMgPSB7XG5cdFx0dGl0bGVzLFxuXHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0cHJvcDogJ2ltYWdlcycsXG5cdFx0aW1saW1pdDogNTAwMCxcblx0fTtcblx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGkucG9zdChwYXJhbXMpO1xuXG5cdHJldHVybiByZXNwb25zZTtcbn07XG5cbmNvbnN0IHBhcnNlID0gYXN5bmMgKHBhZ2U6IHN0cmluZykgPT4ge1xuXHRjb25zdCBwYXJhbXM6IEFwaVBhcnNlUGFyYW1zID0ge1xuXHRcdHBhZ2UsXG5cdFx0YWN0aW9uOiAncGFyc2UnLFxuXHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRwcm9wOiAndGV4dCcsXG5cdFx0cmVkaXJlY3RzOiB0cnVlLFxuXHRcdGRpc2FibGV0b2M6IHRydWUsXG5cdH07XG5cdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXBpLnBvc3QocGFyYW1zKTtcblxuXHRyZXR1cm4gcmVzcG9uc2U7XG59O1xuXG5jb25zdCBnZXRFbGVtZW50cyA9IGFzeW5jICh0aXRsZXM6IHN0cmluZ1tdKSA9PiB7XG5cdGxldCBmaWxlTGlua0VsZW1lbnRzOiBIVE1MQW5jaG9yRWxlbWVudFtdID0gW107XG5cdHRpdGxlcyA9IHVuaXF1ZUFycmF5KHRpdGxlcyk7XG5cblx0Zm9yIChjb25zdCB0aXRsZSBvZiB0aXRsZXMpIHtcblx0XHR0cnkge1xuXHRcdFx0Y29uc3QgcGFyc2VSZXNwb25zZSA9IGF3YWl0IHBhcnNlKHRpdGxlKTtcblx0XHRcdGlmICghcGFyc2VSZXNwb25zZVsncGFyc2UnXSB8fCAhcGFyc2VSZXNwb25zZVsncGFyc2UnXS50ZXh0KSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgcGFnZUNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5cdFx0XHRwYWdlQ29udGVudC5pbm5lckhUTUwgPSBwYXJzZVJlc3BvbnNlWydwYXJzZSddLnRleHQgYXMgc3RyaW5nO1xuXG5cdFx0XHRmaWxlTGlua0VsZW1lbnRzID0gW1xuXHRcdFx0XHQuLi5wYWdlQ29udGVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxBbmNob3JFbGVtZW50PihcImFbaHJlZl49Jy93aWtpL0ZpbGU6J11cIiksXG5cdFx0XHRcdC4uLnBhZ2VDb250ZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEFuY2hvckVsZW1lbnQ+KFwiYVtocmVmKj0ndGl0bGU9RmlsZTonXVwiKSxcblx0XHRcdF07XG5cdFx0fSBjYXRjaCB7fVxuXHR9XG5cblx0ZmlsZUxpbmtFbGVtZW50cyA9IFtcblx0XHQuLi5maWxlTGlua0VsZW1lbnRzLFxuXHRcdC4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEFuY2hvckVsZW1lbnQ+KFwiYVtocmVmXj0nL3dpa2kvRmlsZTonXVwiKSxcblx0XHQuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxBbmNob3JFbGVtZW50PihcImFbaHJlZio9J3RpdGxlPUZpbGU6J11cIiksXG5cdF07XG5cblx0cmV0dXJuIGZpbGVMaW5rRWxlbWVudHM7XG59O1xuXG5jb25zdCBnZXRJbWFnZXNGcm9tRWxlbWVudHMgPSAoZmlsZUxpbmtFbGVtZW50czogSFRNTEFuY2hvckVsZW1lbnRbXSkgPT4ge1xuXHRjb25zdCBmaWxlTmFtZXM6IHN0cmluZ1tdID0gW107XG5cdGZpbGVMaW5rRWxlbWVudHMgPSB1bmlxdWVBcnJheShmaWxlTGlua0VsZW1lbnRzKTtcblx0Y29uc3Qge3dnQXJ0aWNsZVBhdGgsIHdnU2NyaXB0fSA9IG13LmNvbmZpZy5nZXQoKTtcblx0Y29uc3QgYXJ0aWNsZVJlZ2V4OiBSZWdFeHAgPSBuZXcgUmVnRXhwKGAke3dnQXJ0aWNsZVBhdGgucmVwbGFjZSgnJDEnLCAnJyl9KEZpbGU6W14jXSspYCk7XG5cdGNvbnN0IHNjcmlwdFJlZ2V4OiBSZWdFeHAgPSBuZXcgUmVnRXhwKGAke3dnU2NyaXB0fVxcXFw/dGl0bGU9KEZpbGU6W14jJl0rKWApO1xuXG5cdGZvciAoY29uc3QgZWxlbWVudCBvZiBmaWxlTGlua0VsZW1lbnRzKSB7XG5cdFx0Ly8gUmVwbGFjZSBgbmV3IFNldCgpYCB0byBhdm9pZCBwb2x5ZmlsbGluZyBjb3JlLWpzXG5cdFx0Y29uc3Qge2hyZWYsIGNsYXNzTGlzdH0gPSBlbGVtZW50O1xuXG5cdFx0aWYgKCFocmVmIHx8IGhyZWYuaW5jbHVkZXMoJ3JlZGxpbms9MScpKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRpZiAoY2xhc3NMaXN0LmNvbnRhaW5zKCduZXcnKSkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0bGV0IGZpbGVOYW1lOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cdFx0aWYgKGFydGljbGVSZWdleC50ZXN0KGhyZWYpKSB7XG5cdFx0XHRjb25zdCBtYXRjaDogUmVnRXhwRXhlY0FycmF5ID0gYXJ0aWNsZVJlZ2V4LmV4ZWMoaHJlZikgYXMgUmVnRXhwRXhlY0FycmF5O1xuXHRcdFx0ZmlsZU5hbWUgPSBtYXRjaFsxXSBhcyBzdHJpbmc7XG5cdFx0XHRmaWxlTmFtZSA9IGZpbGVOYW1lLnJlcGxhY2UoL0ZpbGU6KEZpbGU6fEltYWdlOik/L2ksICdGaWxlOicpO1xuXHRcdFx0ZmlsZU5hbWUgPSBkZWNvZGVVUklDb21wb25lbnQoZmlsZU5hbWUpO1xuXHRcdFx0ZmlsZU5hbWVzW2ZpbGVOYW1lcy5sZW5ndGhdID0gZmlsZU5hbWU7XG5cdFx0fVxuXG5cdFx0aWYgKHNjcmlwdFJlZ2V4LnRlc3QoaHJlZikpIHtcblx0XHRcdGNvbnN0IG1hdGNoOiBSZWdFeHBFeGVjQXJyYXkgPSBzY3JpcHRSZWdleC5leGVjKGhyZWYpIGFzIFJlZ0V4cEV4ZWNBcnJheTtcblx0XHRcdGZpbGVOYW1lID0gbWF0Y2hbMV0gYXMgc3RyaW5nO1xuXHRcdFx0ZmlsZU5hbWUgPSBmaWxlTmFtZS5yZXBsYWNlKC9GaWxlOihGaWxlOnxJbWFnZTopPy9pLCAnRmlsZTonKTtcblx0XHRcdGZpbGVOYW1lID0gZGVjb2RlVVJJQ29tcG9uZW50KGZpbGVOYW1lKTtcblx0XHRcdGZpbGVOYW1lc1tmaWxlTmFtZXMubGVuZ3RoXSA9IGZpbGVOYW1lO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiB1bmlxdWVBcnJheShmaWxlTmFtZXMpO1xufTtcblxuY29uc3QgZ2V0SW1hZ2VzID0gYXN5bmMgKHRpdGxlczogc3RyaW5nIHwgc3RyaW5nW10pID0+IHtcblx0bGV0IGZpbGVOYW1lczogc3RyaW5nW10gPSBbXTtcblx0bGV0IGZpbGVMaW5rRWxlbWVudHM6IEhUTUxBbmNob3JFbGVtZW50W10gPSBbXTtcblxuXHR0aXRsZXMgPSBnZW5lcmF0ZUFycmF5KHRpdGxlcyk7XG5cblx0Ly8gQW5hbHl6ZSBzdGVwIDE6IFF1ZXJ5XG5cdHRyeSB7XG5cdFx0Y29uc3QgcXVlcnlJbWFnZVJlc3BvbnNlID0gYXdhaXQgcXVlcnlJbWFnZXModGl0bGVzKTtcblx0XHRpZiAoXG5cdFx0XHRxdWVyeUltYWdlUmVzcG9uc2VbJ3F1ZXJ5J10gJiZcblx0XHRcdHF1ZXJ5SW1hZ2VSZXNwb25zZVsncXVlcnknXS5wYWdlc1swXSAmJlxuXHRcdFx0cXVlcnlJbWFnZVJlc3BvbnNlWydxdWVyeSddLnBhZ2VzWzBdLmltYWdlc1xuXHRcdCkge1xuXHRcdFx0Zm9yIChjb25zdCBpbWFnZUluZm8gb2YgcXVlcnlJbWFnZVJlc3BvbnNlWydxdWVyeSddLnBhZ2VzWzBdLmltYWdlcyBhcyB7XG5cdFx0XHRcdG5zOiBudW1iZXI7XG5cdFx0XHRcdHRpdGxlOiBzdHJpbmc7XG5cdFx0XHR9W10pIHtcblx0XHRcdFx0aWYgKCFpbWFnZUluZm8gfHwgIWltYWdlSW5mby50aXRsZSkge1xuXHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGZpbGVOYW1lc1tmaWxlTmFtZXMubGVuZ3RoXSA9IGltYWdlSW5mby50aXRsZTtcblx0XHRcdH1cblx0XHR9XG5cdH0gY2F0Y2gge31cblxuXHRmaWxlTGlua0VsZW1lbnRzID0gYXdhaXQgZ2V0RWxlbWVudHModGl0bGVzKTtcblxuXHQvLyBBbmFseXplIHN0ZXAgMjogRmluZCBmcm9tIHBhZ2VzXG5cdGZpbGVOYW1lcyA9IFsuLi5maWxlTmFtZXMsIC4uLmdldEltYWdlc0Zyb21FbGVtZW50cyhmaWxlTGlua0VsZW1lbnRzKV07XG5cblx0cmV0dXJuIHVuaXF1ZUFycmF5KGZpbGVOYW1lcyk7XG59O1xuXG5jb25zdCBnZXRBbGxJbWFnZXMgPSBhc3luYyAodGl0bGVzPzogc3RyaW5nIHwgc3RyaW5nW10pOiBQcm9taXNlPHN0cmluZ1tdPiA9PiB7XG5cdHRvYXN0aWZ5SW5zdGFuY2UuaGlkZVRvYXN0KCk7XG5cdHRvYXN0aWZ5KFxuXHRcdHtcblx0XHRcdHRleHQ6ICfmraPlnKjojrflj5bov4Hnp7vnm67moIcnLFxuXHRcdFx0ZHVyYXRpb246IC0xLFxuXHRcdH0sXG5cdFx0J2luZm8nXG5cdCk7XG5cblx0bGV0IGZpbGVOYW1lczogc3RyaW5nW10gPSBbXTtcblx0Y29uc3Qge3dnTmFtZXNwYWNlTnVtYmVyLCB3Z1BhZ2VOYW1lfSA9IG13LmNvbmZpZy5nZXQoKTtcblxuXHRpZiAoIXRpdGxlcyB8fCAhdGl0bGVzLmxlbmd0aCkge1xuXHRcdHRpdGxlcyA9IHdnTmFtZXNwYWNlTnVtYmVyIDwgMCA/IFtdIDogW3dnUGFnZU5hbWVdO1xuXHR9XG5cblx0aWYgKHRpdGxlcy5sZW5ndGgpIHtcblx0XHRmaWxlTmFtZXMgPSBhd2FpdCBnZXRJbWFnZXModGl0bGVzKTtcblx0fVxuXG5cdGZpbGVOYW1lcyA9IFtcblx0XHQuLi5maWxlTmFtZXMsXG5cdFx0Li4uZ2V0SW1hZ2VzRnJvbUVsZW1lbnRzKFtcblx0XHRcdC4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEFuY2hvckVsZW1lbnQ+KFwiYVtocmVmXj0nL3dpa2kvRmlsZTonXVwiKSxcblx0XHRcdC4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEFuY2hvckVsZW1lbnQ+KFwiYVtocmVmKj0ndGl0bGU9RmlsZTonXVwiKSxcblx0XHRdKSxcblx0XTtcblx0ZmlsZU5hbWVzID0gWy4uLmZpbGVOYW1lcywgLi4uKGF3YWl0IGdldEltYWdlcyh0aXRsZXMpKSwgLi4uKGF3YWl0IGdldEltYWdlcyhmaWxlTmFtZXMpKV07XG5cblx0dG9hc3RpZnlJbnN0YW5jZS5oaWRlVG9hc3QoKTtcblx0dG9hc3RpZnlJbnN0YW5jZSA9IHRvYXN0aWZ5KFxuXHRcdHtcblx0XHRcdHRleHQ6ICfojrflj5bov4Hnp7vnm67moIflrozmiJAnLFxuXHRcdFx0ZHVyYXRpb246IC0xLFxuXHRcdH0sXG5cdFx0J3N1Y2Nlc3MnXG5cdCk7XG5cblx0cmV0dXJuIHVuaXF1ZUFycmF5KGZpbGVOYW1lcyk7IC8vIFJlcGxhY2UgYFsuLi5uZXcgU2V0KCldYCB0byBhdm9pZCBwb2x5ZmlsbGluZyBjb3JlLWpzXG59O1xuXG5leHBvcnQge2dldEFsbEltYWdlc307XG4iLCAiZXhwb3J0IHthcGl9IGZyb20gJ2V4dC5nYWRnZXQuUXVpY2tJbXBvcnQnO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEscUJBQWdEQyxRQUFBLHdCQUFBOztBQ0FoRCxJQUFBQyxxQkFBeUNELFFBQUEsaUJBQUE7O0FDQXpDLElBQUFFLG9CQUFrQkYsUUFBQSx3QkFBQTs7QURFbEIsSUFBQUcscUJBQXVCSCxRQUFBLHFCQUFBO0FBRXZCLElBQUlJLG1CQUFxQztFQUN4Q0MsV0FBV0EsTUFBTTtFQUFDO0FBQ25CO0FBRUEsSUFBTUMsY0FBQSwyQkFBQTtBQUFBLE1BQUFDLE9BQUFDLGtCQUFjLFdBQU9DLFFBQThCO0FBQ3hELFVBQU1DLFNBQStCO01BQ3BDRDtNQUNBRSxRQUFRO01BQ1JDLFFBQVE7TUFDUkMsZUFBZTtNQUNmQyxNQUFNO01BQ05DLFNBQVM7SUFDVjtBQUNBLFVBQU1DLFdBQUEsTUFBaUJkLGtCQUFBZSxJQUFJQyxLQUFLUixNQUFNO0FBRXRDLFdB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QUFJO0lBQzNDLENBQUEsRUFBRyxFQUFFbUQsS0FBSyxNQUFNO0FBQ2YsT0FBQSxHQUFBeEcsbUJBQUF5RyxhQUFZO0lBQ2IsQ0FBQztFQUNGLENBQUM7QUFDRixHQUFHOyIsCiAgIm5hbWVzIjogWyJpbXBvcnRfZXh0X2dhZGdldDQiLCAicmVxdWlyZSIsICJpbXBvcnRfZXh0X2dhZGdldDIiLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAiaW1wb3J0X2V4dF9nYWRnZXQzIiwgInRvYXN0aWZ5SW5zdGFuY2UiLCAiaGlkZVRvYXN0IiwgInF1ZXJ5SW1hZ2VzIiwgIl9yZWYiLCAiX2FzeW5jVG9HZW5lcmF0b3IiLCAidGl0bGVzIiwgInBhcmFtcyIsICJhY3Rpb24iLCAiZm9ybWF0IiwgImZvcm1hdHZlcnNpb24iLCAicHJvcCIsICJpbWxpbWl0IiwgInJlc3BvbnNlIiwgImFwaSIsICJwb3N0IiwgIl94IiwgImFwcGx5IiwgImFyZ3VtZW50cyIsICJwYXJzZSIsICJfcmVmMiIsICJwYWdlIiwgInJlZGlyZWN0cyIsICJkaXNhYmxldG9jIiwgIl94MiIsICJnZXRFbGVtZW50cyIsICJfcmVmMyIsICJmaWxlTGlua0VsZW1lbnRzIiwgInVuaXF1ZUFycmF5IiwgIl9pdGVyYXRvciIsICJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsICJfc3RlcCIsICJzIiwgIm4iLCAiZG9uZSIsICJ0aXRsZSIsICJ2YWx1ZSIsICJwYXJzZVJlc3BvbnNlIiwgInRleHQiLCAicGFnZUNvbnRlbnQiLCAiZG9jdW1lbnQiLCAiY3JlYXRlRWxlbWVudCIsICJpbm5lckhUTUwiLCAicXVlcnlTZWxlY3RvckFsbCIsICJlcnIiLCAiZSIsICJmIiwgIl94MyIsICJnZXRJbWFnZXNGcm9tRWxlbWVudHMiLCAiZmlsZU5hbWVzIiwgIndnQXJ0aWNsZVBhdGgiLCAid2dTY3JpcHQiLCAibXciLCAiY29uZmlnIiwgImdldCIsICJhcnRpY2xlUmVnZXgiLCAiUmVnRXhwIiwgImNvbmNhdCIsICJyZXBsYWNlIiwgInNjcmlwdFJlZ2V4IiwgIl9pdGVyYXRvcjIiLCAiX3N0ZXAyIiwgImVsZW1lbnQiLCAiaHJlZiIsICJjbGFzc0xpc3QiLCAiaW5jbHVkZXMiLCAiY29udGFpbnMiLCAiZmlsZU5hbWUiLCAidGVzdCIsICJtYXRjaCIsICJleGVjIiwgImRlY29kZVVSSUNvbXBvbmVudCIsICJsZW5ndGgiLCAiZ2V0SW1hZ2VzIiwgIl9yZWY0IiwgImdlbmVyYXRlQXJyYXkiLCAicXVlcnlJbWFnZVJlc3BvbnNlIiwgInBhZ2VzIiwgImltYWdlcyIsICJfaXRlcmF0b3IzIiwgIl9zdGVwMyIsICJpbWFnZUluZm8iLCAiX3g0IiwgImdldEFsbEltYWdlcyIsICJfcmVmNSIsICJ0b2FzdGlmeSIsICJkdXJhdGlvbiIsICJ3Z05hbWVzcGFjZU51bWJlciIsICJ3Z1BhZ2VOYW1lIiwgIl94NSIsICJ3aW5kb3ciLCAiZGV0ZWN0SWZGaWxlUmVkaXJlY3QiLCAicXVpY2tJbXBvcnRBbGxNZWRpYSIsICJ3Z0Nhbm9uaWNhbFNwZWNpYWxQYWdlTmFtZSIsICJ3Z0N1clJldmlzaW9uSWQiLCAicG9ydGxldElkIiwgInF1ZXJ5U2VsZWN0b3IiLCAidXRpbCIsICJhZGRQb3J0bGV0TGluayIsICJhZGRFdmVudExpc3RlbmVyIiwgInRoZW4iLCAicmVmcmVzaFBhZ2UiXQp9Cg==

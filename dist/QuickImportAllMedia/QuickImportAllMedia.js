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
var getElements = () => {
  return [...document.querySelectorAll("a[href^='/wiki/File:']"), ...document.querySelectorAll("a[href*='title=File:']")];
};
var getImagesFromElements = (fileLinkElements) => {
  const fileNames = [];
  fileLinkElements = (0, import_ext_gadget2.uniqueArray)(fileLinkElements);
  const {
    wgArticlePath,
    wgScript
  } = mw.config.get();
  const articleRegex = new RegExp("".concat(wgArticlePath.replace("$1", ""), "(File:[^#]+)"));
  const scriptRegex = new RegExp("".concat(wgScript, "\\?title=(File:[^#&]+)"));
  var _iterator = _createForOfIteratorHelper(fileLinkElements), _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done; ) {
      const element = _step.value;
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
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return (0, import_ext_gadget2.uniqueArray)(fileNames);
};
var getImages = /* @__PURE__ */ function() {
  var _ref2 = _asyncToGenerator(function* (titles) {
    const fileNames = [];
    titles = (0, import_ext_gadget2.uniqueArray)((0, import_ext_gadget2.generateArray)(titles));
    try {
      const queryImageResponse = yield queryImages(titles);
      if (queryImageResponse["query"] && queryImageResponse["query"].pages[0] && queryImageResponse["query"].pages[0].images) {
        var _iterator2 = _createForOfIteratorHelper(queryImageResponse["query"].pages[0].images), _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
            const imageInfo = _step2.value;
            if (!imageInfo || !imageInfo.title) {
              continue;
            }
            fileNames[fileNames.length] = imageInfo.title;
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      }
    } catch {
    }
    return (0, import_ext_gadget2.uniqueArray)(fileNames);
  });
  return function getImages2(_x2) {
    return _ref2.apply(this, arguments);
  };
}();
var getAllImages = /* @__PURE__ */ function() {
  var _ref3 = _asyncToGenerator(function* (titles) {
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
    fileNames = (0, import_ext_gadget2.uniqueArray)([...getImagesFromElements(getElements()), ...yield getImages([...titles, ...getImagesFromElements(getElements())])]);
    toastifyInstance.hideToast();
    toastifyInstance = (0, import_ext_gadget3.toastify)({
      text: "获取迁移目标完成",
      duration: -1
    }, "success");
    return (0, import_ext_gadget2.uniqueArray)(fileNames);
  });
  return function getAllImages2(_x3) {
    return _ref3.apply(this, arguments);
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1F1aWNrSW1wb3J0QWxsTWVkaWEvUXVpY2tJbXBvcnRBbGxNZWRpYS50cyIsICJzcmMvUXVpY2tJbXBvcnRBbGxNZWRpYS9tb2R1bGVzL2NvcmUudHMiLCAic3JjL1F1aWNrSW1wb3J0QWxsTWVkaWEvbW9kdWxlcy9hcGkudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7ZGV0ZWN0SWZGaWxlUmVkaXJlY3QsIHJlZnJlc2hQYWdlfSBmcm9tICdleHQuZ2FkZ2V0LlF1aWNrSW1wb3J0JztcbmltcG9ydCB7Z2V0QWxsSW1hZ2VzfSBmcm9tICcuL21vZHVsZXMvY29yZSc7XG5cbmRlY2xhcmUgZ2xvYmFsIHtcblx0aW50ZXJmYWNlIFdpbmRvdyB7XG5cdFx0ZGV0ZWN0SWZGaWxlUmVkaXJlY3Q6IERldGVjdElmRmlsZVJlZGlyZWN0O1xuXHRcdGdldEFsbEltYWdlczogdHlwZW9mIGdldEFsbEltYWdlcztcblx0fVxufVxuXG53aW5kb3cuZGV0ZWN0SWZGaWxlUmVkaXJlY3QgPSBkZXRlY3RJZkZpbGVSZWRpcmVjdDtcbndpbmRvdy5nZXRBbGxJbWFnZXMgPSBnZXRBbGxJbWFnZXM7XG5cbihmdW5jdGlvbiBxdWlja0ltcG9ydEFsbE1lZGlhKCk6IHZvaWQge1xuXHRjb25zdCB7d2dDYW5vbmljYWxTcGVjaWFsUGFnZU5hbWUsIHdnQ3VyUmV2aXNpb25JZH0gPSBtdy5jb25maWcuZ2V0KCk7XG5cdGlmIChcblx0XHQhKFxuXHRcdFx0d2dDdXJSZXZpc2lvbklkIHx8XG5cdFx0XHRbJ1ByZWZpeGluZGV4JywgJ0Jyb2tlblJlZGlyZWN0cycsICdXYW50ZWRmaWxlcyddLmluY2x1ZGVzKHdnQ2Fub25pY2FsU3BlY2lhbFBhZ2VOYW1lIHx8ICcnKVxuXHRcdClcblx0KSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgcG9ydGxldElkOiAncC1jYWN0aW9ucycgfCAncC10YicgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcC1jYWN0aW9ucycpID8gJ3AtY2FjdGlvbnMnIDogJ3AtdGInO1xuXHRjb25zdCBlbGVtZW50OiBIVE1MTElFbGVtZW50IHwgbnVsbCA9IG13LnV0aWwuYWRkUG9ydGxldExpbmsocG9ydGxldElkLCAnIycsICflr7zlhaXmraTpobXpnaLmiYDmnInmlofku7YnLCAndC1pbXBvcnQnKTtcblx0aWYgKCFlbGVtZW50KSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpOiB2b2lkID0+IHtcblx0XHR2b2lkIChhc3luYyAoKSA9PiB7XG5cdFx0XHRjb25zdCBmaWxlTmFtZXMgPSBhd2FpdCBnZXRBbGxJbWFnZXMoKTtcblx0XHRcdGlmICghZmlsZU5hbWVzLmxlbmd0aCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRhd2FpdCBkZXRlY3RJZkZpbGVSZWRpcmVjdChmaWxlTmFtZXMsIHRydWUpO1xuXHRcdH0pKCkudGhlbigoKSA9PiB7XG5cdFx0XHRyZWZyZXNoUGFnZSgpO1xuXHRcdH0pO1xuXHR9KTtcbn0pKCk7XG4iLCAiaW1wb3J0IHtnZW5lcmF0ZUFycmF5LCB1bmlxdWVBcnJheX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbmltcG9ydCB7YXBpfSBmcm9tICcuL2FwaSc7XG5pbXBvcnQge3RvYXN0aWZ5fSBmcm9tICdleHQuZ2FkZ2V0LlRvYXN0aWZ5JztcblxubGV0IHRvYXN0aWZ5SW5zdGFuY2U6IFRvYXN0aWZ5SW5zdGFuY2UgPSB7XG5cdGhpZGVUb2FzdDogKCkgPT4ge30sXG59O1xuXG5jb25zdCBxdWVyeUltYWdlcyA9IGFzeW5jICh0aXRsZXM6IHN0cmluZyB8IHN0cmluZ1tdKSA9PiB7XG5cdGNvbnN0IHBhcmFtczogQXBpUXVlcnlJbWFnZXNQYXJhbXMgPSB7XG5cdFx0dGl0bGVzLFxuXHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0cHJvcDogJ2ltYWdlcycsXG5cdFx0aW1saW1pdDogNTAwMCxcblx0fTtcblx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGkucG9zdChwYXJhbXMpO1xuXG5cdHJldHVybiByZXNwb25zZTtcbn07XG5cbmNvbnN0IGdldEVsZW1lbnRzID0gKCkgPT4ge1xuXHRyZXR1cm4gW1xuXHRcdC4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEFuY2hvckVsZW1lbnQ+KFwiYVtocmVmXj0nL3dpa2kvRmlsZTonXVwiKSxcblx0XHQuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxBbmNob3JFbGVtZW50PihcImFbaHJlZio9J3RpdGxlPUZpbGU6J11cIiksXG5cdF07XG59O1xuXG5jb25zdCBnZXRJbWFnZXNGcm9tRWxlbWVudHMgPSAoZmlsZUxpbmtFbGVtZW50czogSFRNTEFuY2hvckVsZW1lbnRbXSkgPT4ge1xuXHRjb25zdCBmaWxlTmFtZXM6IHN0cmluZ1tdID0gW107XG5cdGZpbGVMaW5rRWxlbWVudHMgPSB1bmlxdWVBcnJheShmaWxlTGlua0VsZW1lbnRzKTtcblx0Y29uc3Qge3dnQXJ0aWNsZVBhdGgsIHdnU2NyaXB0fSA9IG13LmNvbmZpZy5nZXQoKTtcblx0Y29uc3QgYXJ0aWNsZVJlZ2V4OiBSZWdFeHAgPSBuZXcgUmVnRXhwKGAke3dnQXJ0aWNsZVBhdGgucmVwbGFjZSgnJDEnLCAnJyl9KEZpbGU6W14jXSspYCk7XG5cdGNvbnN0IHNjcmlwdFJlZ2V4OiBSZWdFeHAgPSBuZXcgUmVnRXhwKGAke3dnU2NyaXB0fVxcXFw/dGl0bGU9KEZpbGU6W14jJl0rKWApO1xuXG5cdGZvciAoY29uc3QgZWxlbWVudCBvZiBmaWxlTGlua0VsZW1lbnRzKSB7XG5cdFx0Ly8gUmVwbGFjZSBgbmV3IFNldCgpYCB0byBhdm9pZCBwb2x5ZmlsbGluZyBjb3JlLWpzXG5cdFx0Y29uc3Qge2hyZWYsIGNsYXNzTGlzdH0gPSBlbGVtZW50O1xuXG5cdFx0aWYgKCFocmVmIHx8IGhyZWYuaW5jbHVkZXMoJ3JlZGxpbms9MScpKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRpZiAoY2xhc3NMaXN0LmNvbnRhaW5zKCduZXcnKSkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0bGV0IGZpbGVOYW1lOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cdFx0aWYgKGFydGljbGVSZWdleC50ZXN0KGhyZWYpKSB7XG5cdFx0XHRjb25zdCBtYXRjaDogUmVnRXhwRXhlY0FycmF5ID0gYXJ0aWNsZVJlZ2V4LmV4ZWMoaHJlZikgYXMgUmVnRXhwRXhlY0FycmF5O1xuXHRcdFx0ZmlsZU5hbWUgPSBtYXRjaFsxXSBhcyBzdHJpbmc7XG5cdFx0XHRmaWxlTmFtZSA9IGZpbGVOYW1lLnJlcGxhY2UoL0ZpbGU6KEZpbGU6fEltYWdlOik/L2ksICdGaWxlOicpO1xuXHRcdFx0ZmlsZU5hbWUgPSBkZWNvZGVVUklDb21wb25lbnQoZmlsZU5hbWUpO1xuXHRcdFx0ZmlsZU5hbWVzW2ZpbGVOYW1lcy5sZW5ndGhdID0gZmlsZU5hbWU7XG5cdFx0fVxuXG5cdFx0aWYgKHNjcmlwdFJlZ2V4LnRlc3QoaHJlZikpIHtcblx0XHRcdGNvbnN0IG1hdGNoOiBSZWdFeHBFeGVjQXJyYXkgPSBzY3JpcHRSZWdleC5leGVjKGhyZWYpIGFzIFJlZ0V4cEV4ZWNBcnJheTtcblx0XHRcdGZpbGVOYW1lID0gbWF0Y2hbMV0gYXMgc3RyaW5nO1xuXHRcdFx0ZmlsZU5hbWUgPSBmaWxlTmFtZS5yZXBsYWNlKC9GaWxlOihGaWxlOnxJbWFnZTopPy9pLCAnRmlsZTonKTtcblx0XHRcdGZpbGVOYW1lID0gZGVjb2RlVVJJQ29tcG9uZW50KGZpbGVOYW1lKTtcblx0XHRcdGZpbGVOYW1lc1tmaWxlTmFtZXMubGVuZ3RoXSA9IGZpbGVOYW1lO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiB1bmlxdWVBcnJheShmaWxlTmFtZXMpO1xufTtcblxuY29uc3QgZ2V0SW1hZ2VzID0gYXN5bmMgKHRpdGxlczogc3RyaW5nIHwgc3RyaW5nW10pID0+IHtcblx0Y29uc3QgZmlsZU5hbWVzOiBzdHJpbmdbXSA9IFtdO1xuXHR0aXRsZXMgPSB1bmlxdWVBcnJheShnZW5lcmF0ZUFycmF5KHRpdGxlcykpO1xuXG5cdC8vIEFuYWx5emUgc3RlcCAxOiBRdWVyeVxuXHR0cnkge1xuXHRcdGNvbnN0IHF1ZXJ5SW1hZ2VSZXNwb25zZSA9IGF3YWl0IHF1ZXJ5SW1hZ2VzKHRpdGxlcyk7XG5cdFx0aWYgKFxuXHRcdFx0cXVlcnlJbWFnZVJlc3BvbnNlWydxdWVyeSddICYmXG5cdFx0XHRxdWVyeUltYWdlUmVzcG9uc2VbJ3F1ZXJ5J10ucGFnZXNbMF0gJiZcblx0XHRcdHF1ZXJ5SW1hZ2VSZXNwb25zZVsncXVlcnknXS5wYWdlc1swXS5pbWFnZXNcblx0XHQpIHtcblx0XHRcdGZvciAoY29uc3QgaW1hZ2VJbmZvIG9mIHF1ZXJ5SW1hZ2VSZXNwb25zZVsncXVlcnknXS5wYWdlc1swXS5pbWFnZXMgYXMge1xuXHRcdFx0XHRuczogbnVtYmVyO1xuXHRcdFx0XHR0aXRsZTogc3RyaW5nO1xuXHRcdFx0fVtdKSB7XG5cdFx0XHRcdGlmICghaW1hZ2VJbmZvIHx8ICFpbWFnZUluZm8udGl0bGUpIHtcblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRmaWxlTmFtZXNbZmlsZU5hbWVzLmxlbmd0aF0gPSBpbWFnZUluZm8udGl0bGU7XG5cdFx0XHR9XG5cdFx0fVxuXHR9IGNhdGNoIHt9XG5cblx0cmV0dXJuIHVuaXF1ZUFycmF5KGZpbGVOYW1lcyk7XG59O1xuXG5jb25zdCBnZXRBbGxJbWFnZXMgPSBhc3luYyAodGl0bGVzPzogc3RyaW5nIHwgc3RyaW5nW10pOiBQcm9taXNlPHN0cmluZ1tdPiA9PiB7XG5cdHRvYXN0aWZ5SW5zdGFuY2UuaGlkZVRvYXN0KCk7XG5cdHRvYXN0aWZ5KFxuXHRcdHtcblx0XHRcdHRleHQ6ICfmraPlnKjojrflj5bov4Hnp7vnm67moIcnLFxuXHRcdFx0ZHVyYXRpb246IC0xLFxuXHRcdH0sXG5cdFx0J2luZm8nXG5cdCk7XG5cblx0bGV0IGZpbGVOYW1lczogc3RyaW5nW10gPSBbXTtcblx0Y29uc3Qge3dnTmFtZXNwYWNlTnVtYmVyLCB3Z1BhZ2VOYW1lfSA9IG13LmNvbmZpZy5nZXQoKTtcblxuXHRpZiAoIXRpdGxlcyB8fCAhdGl0bGVzLmxlbmd0aCkge1xuXHRcdHRpdGxlcyA9IHdnTmFtZXNwYWNlTnVtYmVyIDwgMCA/IFtdIDogW3dnUGFnZU5hbWVdO1xuXHR9XG5cblx0ZmlsZU5hbWVzID0gdW5pcXVlQXJyYXkoW1xuXHRcdC4uLmdldEltYWdlc0Zyb21FbGVtZW50cyhnZXRFbGVtZW50cygpKSxcblx0XHQuLi4oYXdhaXQgZ2V0SW1hZ2VzKFsuLi50aXRsZXMsIC4uLmdldEltYWdlc0Zyb21FbGVtZW50cyhnZXRFbGVtZW50cygpKV0pKSxcblx0XSk7XG5cblx0dG9hc3RpZnlJbnN0YW5jZS5oaWRlVG9hc3QoKTtcblx0dG9hc3RpZnlJbnN0YW5jZSA9IHRvYXN0aWZ5KFxuXHRcdHtcblx0XHRcdHRleHQ6ICfojrflj5bov4Hnp7vnm67moIflrozmiJAnLFxuXHRcdFx0ZHVyYXRpb246IC0xLFxuXHRcdH0sXG5cdFx0J3N1Y2Nlc3MnXG5cdCk7XG5cblx0cmV0dXJuIHVuaXF1ZUFycmF5KGZpbGVOYW1lcyk7IC8vIFJlcGxhY2UgYFsuLi5uZXcgU2V0KCldYCB0byBhdm9pZCBwb2x5ZmlsbGluZyBjb3JlLWpzXG59O1xuXG5leHBvcnQge2dldEFsbEltYWdlc307XG4iLCAiZXhwb3J0IHthcGl9IGZyb20gJ2V4dC5nYWRnZXQuUXVpY2tJbXBvcnQnO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEscUJBQWdEQyxRQUFBLHdCQUFBOztBQ0FoRCxJQUFBQyxxQkFBeUNELFFBQUEsaUJBQUE7O0FD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Q2YsT0FBQSxHQUFBMUYsbUJBQUEyRixhQUFZO0lBQ2IsQ0FBQztFQUNGLENBQUM7QUFDRixHQUFHOyIsCiAgIm5hbWVzIjogWyJpbXBvcnRfZXh0X2dhZGdldDQiLCAicmVxdWlyZSIsICJpbXBvcnRfZXh0X2dhZGdldDIiLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAiaW1wb3J0X2V4dF9nYWRnZXQzIiwgInRvYXN0aWZ5SW5zdGFuY2UiLCAiaGlkZVRvYXN0IiwgInF1ZXJ5SW1hZ2VzIiwgIl9yZWYiLCAiX2FzeW5jVG9HZW5lcmF0b3IiLCAidGl0bGVzIiwgInBhcmFtcyIsICJhY3Rpb24iLCAiZm9ybWF0IiwgImZvcm1hdHZlcnNpb24iLCAicHJvcCIsICJpbWxpbWl0IiwgInJlc3BvbnNlIiwgImFwaSIsICJwb3N0IiwgIl94IiwgImFwcGx5IiwgImFyZ3VtZW50cyIsICJnZXRFbGVtZW50cyIsICJkb2N1bWVudCIsICJxdWVyeVNlbGVjdG9yQWxsIiwgImdldEltYWdlc0Zyb21FbGVtZW50cyIsICJmaWxlTGlua0VsZW1lbnRzIiwgImZpbGVOYW1lcyIsICJ1bmlxdWVBcnJheSIsICJ3Z0FydGljbGVQYXRoIiwgIndnU2NyaXB0IiwgIm13IiwgImNvbmZpZyIsICJnZXQiLCAiYXJ0aWNsZVJlZ2V4IiwgIlJlZ0V4cCIsICJjb25jYXQiLCAicmVwbGFjZSIsICJzY3JpcHRSZWdleCIsICJfaXRlcmF0b3IiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAiX3N0ZXAiLCAicyIsICJuIiwgImRvbmUiLCAiZWxlbWVudCIsICJ2YWx1ZSIsICJocmVmIiwgImNsYXNzTGlzdCIsICJpbmNsdWRlcyIsICJjb250YWlucyIsICJmaWxlTmFtZSIsICJ0ZXN0IiwgIm1hdGNoIiwgImV4ZWMiLCAiZGVjb2RlVVJJQ29tcG9uZW50IiwgImxlbmd0aCIsICJlcnIiLCAiZSIsICJmIiwgImdldEltYWdlcyIsICJfcmVmMiIsICJnZW5lcmF0ZUFycmF5IiwgInF1ZXJ5SW1hZ2VSZXNwb25zZSIsICJwYWdlcyIsICJpbWFnZXMiLCAiX2l0ZXJhdG9yMiIsICJfc3RlcDIiLCAiaW1hZ2VJbmZvIiwgInRpdGxlIiwgIl94MiIsICJnZXRBbGxJbWFnZXMiLCAiX3JlZjMiLCAidG9hc3RpZnkiLCAidGV4dCIsICJkdXJhdGlvbiIsICJ3Z05hbWVzcGFjZU51bWJlciIsICJ3Z1BhZ2VOYW1lIiwgIl94MyIsICJ3aW5kb3ciLCAiZGV0ZWN0SWZGaWxlUmVkaXJlY3QiLCAicXVpY2tJbXBvcnRBbGxNZWRpYSIsICJ3Z0Nhbm9uaWNhbFNwZWNpYWxQYWdlTmFtZSIsICJ3Z0N1clJldmlzaW9uSWQiLCAicG9ydGxldElkIiwgInF1ZXJ5U2VsZWN0b3IiLCAidXRpbCIsICJhZGRQb3J0bGV0TGluayIsICJhZGRFdmVudExpc3RlbmVyIiwgInRoZW4iLCAicmVmcmVzaFBhZ2UiXQp9Cg==

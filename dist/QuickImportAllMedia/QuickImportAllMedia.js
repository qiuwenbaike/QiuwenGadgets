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
function _createForOfIteratorHelper(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it)
        o = it;
      var i = 0;
      var F = function() {
      };
      return { s: F, n: function() {
        if (i >= o.length)
          return { done: true };
        return { done: false, value: o[i++] };
      }, e: function(e) {
        throw e;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var normalCompletion = true, didErr = false, err;
  return { s: function() {
    it = it.call(o);
  }, n: function() {
    var step = it.next();
    normalCompletion = step.done;
    return step;
  }, e: function(e) {
    didErr = true;
    err = e;
  }, f: function() {
    try {
      if (!normalCompletion && it.return != null)
        it.return();
    } finally {
      if (didErr)
        throw err;
    }
  } };
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function() {
    var self = this, args = arguments;
    return new Promise(function(resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(void 0);
    });
  };
}
//! src/QuickImportAllMedia/QuickImportAllMedia.ts
var import_ext_gadget3 = require("ext.gadget.QuickImport");
//! src/QuickImportAllMedia/modules/api.ts
var import_ext_gadget = require("ext.gadget.QuickImport");
//! src/QuickImportAllMedia/modules/core.ts
var import_ext_gadget2 = require("ext.gadget.Toastify");
var toastifyInstance = {
  hideToast: () => {
  }
};
var getAllImages = /* @__PURE__ */ function() {
  var _ref = _asyncToGenerator(function* () {
    toastifyInstance.hideToast();
    (0, import_ext_gadget2.toastify)({
      text: "正在获取迁移目标",
      duration: -1
    }, "info");
    const fileNames = [];
    const {
      wgArticlePath,
      wgNamespaceNumber,
      wgPageName,
      wgScript
    } = mw.config.get();
    if (!(wgNamespaceNumber < 0)) {
      try {
        var _queryImageResponse$q, _queryImageResponse$q2;
        const queryImageParams = {
          action: "query",
          format: "json",
          formatversion: "2",
          prop: "images",
          titles: wgPageName,
          imlimit: 5e3
        };
        const queryImageResponse = yield import_ext_gadget.api.get(queryImageParams);
        if (queryImageResponse["query"] && (_queryImageResponse$q = queryImageResponse["query"]) !== null && _queryImageResponse$q !== void 0 && _queryImageResponse$q.pages[0] && (_queryImageResponse$q2 = queryImageResponse["query"]) !== null && _queryImageResponse$q2 !== void 0 && _queryImageResponse$q2.pages[0].images) {
          var _queryImageResponse$q3;
          var _iterator = _createForOfIteratorHelper((_queryImageResponse$q3 = queryImageResponse["query"]) === null || _queryImageResponse$q3 === void 0 ? void 0 : _queryImageResponse$q3.pages[0].images), _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done; ) {
              const imageInfo = _step.value;
              if (!imageInfo || !imageInfo.title) {
                continue;
              }
              fileNames[fileNames.length] = imageInfo.title;
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        }
      } catch {
      }
    }
    let fileLinkElements = [];
    if (!(wgNamespaceNumber < 0) || wgNamespaceNumber === 6) {
      try {
        var _parseResponse$parse;
        const parseParams = {
          action: "parse",
          format: "json",
          formatversion: "2",
          prop: "text",
          page: wgPageName
        };
        const parseResponse = yield import_ext_gadget.api.get(parseParams);
        if (parseResponse["parse"] && (_parseResponse$parse = parseResponse["parse"]) !== null && _parseResponse$parse !== void 0 && _parseResponse$parse.text) {
          var _parseResponse$parse2;
          const pageContent = document.createElement("span");
          pageContent.innerHTML = (_parseResponse$parse2 = parseResponse["parse"]) === null || _parseResponse$parse2 === void 0 ? void 0 : _parseResponse$parse2.text;
          fileLinkElements = [...pageContent.querySelectorAll("a[href^='/wiki/File:']"), ...pageContent.querySelectorAll("a[href*='title=File:']")];
        }
      } catch {
      }
    }
    fileLinkElements = [...fileLinkElements, ...document.querySelectorAll("a[href^='/wiki/File:']"), ...document.querySelectorAll("a[href*='title=File:']")];
    const articleRegex = new RegExp("".concat(wgArticlePath.replace("$1", ""), "(File:[^#]+)"));
    const scriptRegex = new RegExp("".concat(wgScript, "\\?title=(File:[^#&]+)"));
    for (var _i = 0, _fileLinkElements = fileLinkElements; _i < _fileLinkElements.length; _i++) {
      const element = _fileLinkElements[_i];
      const {
        href
      } = element;
      if (!href) {
        continue;
      }
      let fileName;
      if (articleRegex.test(href)) {
        const match = articleRegex.exec(href);
        fileName = match[1];
      } else if (scriptRegex.test(href)) {
        const match = scriptRegex.exec(href);
        fileName = match[1];
      } else {
        continue;
      }
      fileName = fileName.replace(/File:(File:|Image:)?/i, "File:");
      fileNames[fileNames.length] = fileName;
    }
    toastifyInstance.hideToast();
    toastifyInstance = (0, import_ext_gadget2.toastify)({
      text: "获取迁移目标完成",
      duration: -1
    }, "success");
    return [...new Set(fileNames)];
  });
  return function getAllImages2() {
    return _ref.apply(this, arguments);
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
      yield (0, import_ext_gadget3.detectIfFileRedirect)(fileNames, true);
    })().then(() => {
      const {
        wgPageName
      } = mw.config.get();
      (0, import_ext_gadget3.refreshPage)(wgPageName);
    });
  });
})();

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1F1aWNrSW1wb3J0QWxsTWVkaWEvUXVpY2tJbXBvcnRBbGxNZWRpYS50cyIsICJzcmMvUXVpY2tJbXBvcnRBbGxNZWRpYS9tb2R1bGVzL2FwaS50cyIsICJzcmMvUXVpY2tJbXBvcnRBbGxNZWRpYS9tb2R1bGVzL2NvcmUudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7ZGV0ZWN0SWZGaWxlUmVkaXJlY3QsIHJlZnJlc2hQYWdlfSBmcm9tICdleHQuZ2FkZ2V0LlF1aWNrSW1wb3J0JztcbmltcG9ydCB7Z2V0QWxsSW1hZ2VzfSBmcm9tICcuL21vZHVsZXMvY29yZSc7XG5cbihmdW5jdGlvbiBxdWlja0ltcG9ydEFsbE1lZGlhKCk6IHZvaWQge1xuXHRjb25zdCB7d2dDYW5vbmljYWxTcGVjaWFsUGFnZU5hbWUsIHdnQ3VyUmV2aXNpb25JZH0gPSBtdy5jb25maWcuZ2V0KCk7XG5cdGlmIChcblx0XHQhKFxuXHRcdFx0d2dDdXJSZXZpc2lvbklkIHx8XG5cdFx0XHRbJ1ByZWZpeGluZGV4JywgJ0Jyb2tlblJlZGlyZWN0cycsICdXYW50ZWRmaWxlcyddLmluY2x1ZGVzKHdnQ2Fub25pY2FsU3BlY2lhbFBhZ2VOYW1lIHx8ICcnKVxuXHRcdClcblx0KSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgcG9ydGxldElkOiAncC1jYWN0aW9ucycgfCAncC10YicgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcC1jYWN0aW9ucycpID8gJ3AtY2FjdGlvbnMnIDogJ3AtdGInO1xuXHRjb25zdCBlbGVtZW50OiBIVE1MTElFbGVtZW50IHwgbnVsbCA9IG13LnV0aWwuYWRkUG9ydGxldExpbmsocG9ydGxldElkLCAnIycsICflr7zlhaXmraTpobXpnaLmiYDmnInmlofku7YnLCAndC1pbXBvcnQnKTtcblx0aWYgKCFlbGVtZW50KSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpOiB2b2lkID0+IHtcblx0XHR2b2lkIChhc3luYyAoKSA9PiB7XG5cdFx0XHRjb25zdCBmaWxlTmFtZXMgPSBhd2FpdCBnZXRBbGxJbWFnZXMoKTtcblx0XHRcdGlmICghZmlsZU5hbWVzLmxlbmd0aCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRhd2FpdCBkZXRlY3RJZkZpbGVSZWRpcmVjdChmaWxlTmFtZXMsIHRydWUpO1xuXHRcdH0pKCkudGhlbigoKSA9PiB7XG5cdFx0XHRjb25zdCB7d2dQYWdlTmFtZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cdFx0XHRyZWZyZXNoUGFnZSh3Z1BhZ2VOYW1lKTtcblx0XHR9KTtcblx0fSk7XG59KSgpO1xuIiwgImV4cG9ydCB7YXBpfSBmcm9tICdleHQuZ2FkZ2V0LlF1aWNrSW1wb3J0JztcbiIsICJpbXBvcnQge2FwaX0gZnJvbSAnLi9hcGknO1xuaW1wb3J0IHt0b2FzdGlmeX0gZnJvbSAnZXh0LmdhZGdldC5Ub2FzdGlmeSc7XG5cbmxldCB0b2FzdGlmeUluc3RhbmNlOiBUb2FzdGlmeUluc3RhbmNlID0ge1xuXHRoaWRlVG9hc3Q6ICgpID0+IHt9LFxufTtcblxuY29uc3QgZ2V0QWxsSW1hZ2VzID0gYXN5bmMgKCk6IFByb21pc2U8c3RyaW5nW10+ID0+IHtcblx0dG9hc3RpZnlJbnN0YW5jZS5oaWRlVG9hc3QoKTtcblx0dG9hc3RpZnkoXG5cdFx0e1xuXHRcdFx0dGV4dDogJ+ato+WcqOiOt+WPlui/geenu+ebruaghycsXG5cdFx0XHRkdXJhdGlvbjogLTEsXG5cdFx0fSxcblx0XHQnaW5mbydcblx0KTtcblxuXHRjb25zdCBmaWxlTmFtZXM6IHN0cmluZ1tdID0gW107XG5cdGNvbnN0IHt3Z0FydGljbGVQYXRoLCB3Z05hbWVzcGFjZU51bWJlciwgd2dQYWdlTmFtZSwgd2dTY3JpcHR9ID0gbXcuY29uZmlnLmdldCgpO1xuXG5cdC8vIEFuYWx5emUgc3RlcCAxOiBRdWVyeVxuXHRpZiAoISh3Z05hbWVzcGFjZU51bWJlciA8IDApKSB7XG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IHF1ZXJ5SW1hZ2VQYXJhbXM6IEFwaVF1ZXJ5SW1hZ2VzUGFyYW1zID0ge1xuXHRcdFx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0XHRcdHByb3A6ICdpbWFnZXMnLFxuXHRcdFx0XHR0aXRsZXM6IHdnUGFnZU5hbWUsXG5cdFx0XHRcdGltbGltaXQ6IDUwMDAsXG5cdFx0XHR9O1xuXG5cdFx0XHRjb25zdCBxdWVyeUltYWdlUmVzcG9uc2UgPSBhd2FpdCBhcGkuZ2V0KHF1ZXJ5SW1hZ2VQYXJhbXMpO1xuXHRcdFx0aWYgKFxuXHRcdFx0XHRxdWVyeUltYWdlUmVzcG9uc2VbJ3F1ZXJ5J10gJiZcblx0XHRcdFx0cXVlcnlJbWFnZVJlc3BvbnNlWydxdWVyeSddPy5wYWdlc1swXSAmJlxuXHRcdFx0XHRxdWVyeUltYWdlUmVzcG9uc2VbJ3F1ZXJ5J10/LnBhZ2VzWzBdLmltYWdlc1xuXHRcdFx0KSB7XG5cdFx0XHRcdGZvciAoY29uc3QgaW1hZ2VJbmZvIG9mIHF1ZXJ5SW1hZ2VSZXNwb25zZVsncXVlcnknXT8ucGFnZXNbMF0uaW1hZ2VzIGFzIHtuczogbnVtYmVyOyB0aXRsZTogc3RyaW5nfVtdKSB7XG5cdFx0XHRcdFx0aWYgKCFpbWFnZUluZm8gfHwgIWltYWdlSW5mby50aXRsZSkge1xuXHRcdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGZpbGVOYW1lc1tmaWxlTmFtZXMubGVuZ3RoXSA9IGltYWdlSW5mby50aXRsZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0gY2F0Y2gge31cblx0fVxuXG5cdC8vIEFuYWx5emUgc3RlcCAyOiBGaW5kIGZyb20gcGFnZXNcblx0bGV0IGZpbGVMaW5rRWxlbWVudHM6IEhUTUxBbmNob3JFbGVtZW50W10gPSBbXTtcblxuXHRpZiAoISh3Z05hbWVzcGFjZU51bWJlciA8IDApIHx8IHdnTmFtZXNwYWNlTnVtYmVyID09PSA2KSB7XG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IHBhcnNlUGFyYW1zOiBBcGlQYXJzZVBhcmFtcyA9IHtcblx0XHRcdFx0YWN0aW9uOiAncGFyc2UnLFxuXHRcdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdFx0XHRwcm9wOiAndGV4dCcsXG5cdFx0XHRcdHBhZ2U6IHdnUGFnZU5hbWUsXG5cdFx0XHR9O1xuXG5cdFx0XHRjb25zdCBwYXJzZVJlc3BvbnNlID0gYXdhaXQgYXBpLmdldChwYXJzZVBhcmFtcyk7XG5cdFx0XHRpZiAocGFyc2VSZXNwb25zZVsncGFyc2UnXSAmJiBwYXJzZVJlc3BvbnNlWydwYXJzZSddPy50ZXh0KSB7XG5cdFx0XHRcdGNvbnN0IHBhZ2VDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuXHRcdFx0XHRwYWdlQ29udGVudC5pbm5lckhUTUwgPSBwYXJzZVJlc3BvbnNlWydwYXJzZSddPy50ZXh0IGFzIHN0cmluZztcblxuXHRcdFx0XHRmaWxlTGlua0VsZW1lbnRzID0gW1xuXHRcdFx0XHRcdC4uLnBhZ2VDb250ZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEFuY2hvckVsZW1lbnQ+KFwiYVtocmVmXj0nL3dpa2kvRmlsZTonXVwiKSxcblx0XHRcdFx0XHQuLi5wYWdlQ29udGVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxBbmNob3JFbGVtZW50PihcImFbaHJlZio9J3RpdGxlPUZpbGU6J11cIiksXG5cdFx0XHRcdF07XG5cdFx0XHR9XG5cdFx0fSBjYXRjaCB7fVxuXHR9XG5cblx0ZmlsZUxpbmtFbGVtZW50cyA9IFtcblx0XHQuLi5maWxlTGlua0VsZW1lbnRzLFxuXHRcdC4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEFuY2hvckVsZW1lbnQ+KFwiYVtocmVmXj0nL3dpa2kvRmlsZTonXVwiKSxcblx0XHQuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxBbmNob3JFbGVtZW50PihcImFbaHJlZio9J3RpdGxlPUZpbGU6J11cIiksXG5cdF07XG5cblx0Y29uc3QgYXJ0aWNsZVJlZ2V4OiBSZWdFeHAgPSBuZXcgUmVnRXhwKGAke3dnQXJ0aWNsZVBhdGgucmVwbGFjZSgnJDEnLCAnJyl9KEZpbGU6W14jXSspYCk7XG5cdGNvbnN0IHNjcmlwdFJlZ2V4OiBSZWdFeHAgPSBuZXcgUmVnRXhwKGAke3dnU2NyaXB0fVxcXFw/dGl0bGU9KEZpbGU6W14jJl0rKWApO1xuXG5cdGZvciAoY29uc3QgZWxlbWVudCBvZiBmaWxlTGlua0VsZW1lbnRzKSB7XG5cdFx0Y29uc3Qge2hyZWZ9ID0gZWxlbWVudDtcblxuXHRcdGlmICghaHJlZikge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0bGV0IGZpbGVOYW1lOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cdFx0aWYgKGFydGljbGVSZWdleC50ZXN0KGhyZWYpKSB7XG5cdFx0XHRjb25zdCBtYXRjaDogUmVnRXhwRXhlY0FycmF5ID0gYXJ0aWNsZVJlZ2V4LmV4ZWMoaHJlZikgYXMgUmVnRXhwRXhlY0FycmF5O1xuXHRcdFx0ZmlsZU5hbWUgPSBtYXRjaFsxXSBhcyBzdHJpbmc7XG5cdFx0fSBlbHNlIGlmIChzY3JpcHRSZWdleC50ZXN0KGhyZWYpKSB7XG5cdFx0XHRjb25zdCBtYXRjaDogUmVnRXhwRXhlY0FycmF5ID0gc2NyaXB0UmVnZXguZXhlYyhocmVmKSBhcyBSZWdFeHBFeGVjQXJyYXk7XG5cdFx0XHRmaWxlTmFtZSA9IG1hdGNoWzFdIGFzIHN0cmluZztcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0ZmlsZU5hbWUgPSBmaWxlTmFtZS5yZXBsYWNlKC9GaWxlOihGaWxlOnxJbWFnZTopPy9pLCAnRmlsZTonKTtcblx0XHRmaWxlTmFtZXNbZmlsZU5hbWVzLmxlbmd0aF0gPSBmaWxlTmFtZTtcblx0fVxuXG5cdHRvYXN0aWZ5SW5zdGFuY2UuaGlkZVRvYXN0KCk7XG5cdHRvYXN0aWZ5SW5zdGFuY2UgPSB0b2FzdGlmeShcblx0XHR7XG5cdFx0XHR0ZXh0OiAn6I635Y+W6L+B56e755uu5qCH5a6M5oiQJyxcblx0XHRcdGR1cmF0aW9uOiAtMSxcblx0XHR9LFxuXHRcdCdzdWNjZXNzJ1xuXHQpO1xuXG5cdHJldHVybiBbLi4ubmV3IFNldChmaWxlTmFtZXMpXTtcbn07XG5cbmV4cG9ydCB7Z2V0QWxsSW1hZ2VzfTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxxQkFBZ0RDLFFBQUEsd0JBQUE7O0FDQWhELElBQUFDLG9CQUFrQkQsUUFBQSx3QkFBQTs7QUNDbEIsSUFBQUUscUJBQXVCRixRQUFBLHFCQUFBO0FBRXZCLElBQUlHLG1CQUFxQztFQUN4Q0MsV0FBV0EsTUFBTTtFQUFDO0FBQ25CO0FBRUEsSUFBTUMsZUFBQSwyQkFBQTtBQUFBLE1BQUFDLE9BQUFDLGtCQUFlLGFBQStCO0FBQ25ESixxQkFBaUJDLFVBQVU7QUFDM0IsS0FBQSxHQUFBRixtQkFBQU0sVUFDQztNQUNDQyxNQUFNO01BQ05DLFVBQVU7SUFDWCxHQUNBLE1BQ0Q7QUFFQSxVQUFNQyxZQUFzQixDQUFBO0FBQzVCLFVBQU07TUFBQ0M7TUFBZUM7TUFBbUJDO01BQVlDO0lBQVEsSUFBSUMsR0FBR0MsT0FBT0MsSUFBSTtBQUcvRSxRQUFJLEVBQUVMLG9CQUFvQixJQUFJO0FBQzdCLFVBQUk7QUFBQSxZQUFBTSx1QkFBQUM7QUFDSCxjQUFNQyxtQkFBeUM7VUFDOUNDLFFBQVE7VUFDUkMsUUFBUTtVQUNSQyxlQUFlO1VBQ2ZDLE1BQU07VUFDTkMsUUFBUVo7VUFDUmEsU0FBUztRQUNWO0FBRUEsY0FBTUMscUJBQUEsTUFBMkIzQixr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IiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgImltcG9ydF9leHRfZ2FkZ2V0MiIsICJ0b2FzdGlmeUluc3RhbmNlIiwgImhpZGVUb2FzdCIsICJnZXRBbGxJbWFnZXMiLCAiX3JlZiIsICJfYXN5bmNUb0dlbmVyYXRvciIsICJ0b2FzdGlmeSIsICJ0ZXh0IiwgImR1cmF0aW9uIiwgImZpbGVOYW1lcyIsICJ3Z0FydGljbGVQYXRoIiwgIndnTmFtZXNwYWNlTnVtYmVyIiwgIndnUGFnZU5hbWUiLCAid2dTY3JpcHQiLCAibXciLCAiY29uZmlnIiwgImdldCIsICJfcXVlcnlJbWFnZVJlc3BvbnNlJHEiLCAiX3F1ZXJ5SW1hZ2VSZXNwb25zZSRxMiIsICJxdWVyeUltYWdlUGFyYW1zIiwgImFjdGlvbiIsICJmb3JtYXQiLCAiZm9ybWF0dmVyc2lvbiIsICJwcm9wIiwgInRpdGxlcyIsICJpbWxpbWl0IiwgInF1ZXJ5SW1hZ2VSZXNwb25zZSIsICJhcGkiLCAicGFnZXMiLCAiaW1hZ2VzIiwgIl9xdWVyeUltYWdlUmVzcG9uc2UkcTMiLCAiX2l0ZXJhdG9yIiwgIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwgIl9zdGVwIiwgInMiLCAibiIsICJkb25lIiwgImltYWdlSW5mbyIsICJ2YWx1ZSIsICJ0aXRsZSIsICJsZW5ndGgiLCAiZXJyIiwgImUiLCAiZiIsICJmaWxlTGlua0VsZW1lbnRzIiwgIl9wYXJzZVJlc3BvbnNlJHBhcnNlIiwgInBhcnNlUGFyYW1zIiwgInBhZ2UiLCAicGFyc2VSZXNwb25zZSIsICJfcGFyc2VSZXNwb25zZSRwYXJzZTIiLCAicGFnZUNvbnRlbnQiLCAiZG9jdW1lbnQiLCAiY3JlYXRlRWxlbWVudCIsICJpbm5lckhUTUwiLCAicXVlcnlTZWxlY3RvckFsbCIsICJhcnRpY2xlUmVnZXgiLCAiUmVnRXhwIiwgImNvbmNhdCIsICJyZXBsYWNlIiwgInNjcmlwdFJlZ2V4IiwgIl9pIiwgIl9maWxlTGlua0VsZW1lbnRzIiwgImVsZW1lbnQiLCAiaHJlZiIsICJmaWxlTmFtZSIsICJ0ZXN0IiwgIm1hdGNoIiwgImV4ZWMiLCAiU2V0IiwgImFwcGx5IiwgImFyZ3VtZW50cyIsICJxdWlja0ltcG9ydEFsbE1lZGlhIiwgIndnQ2Fub25pY2FsU3BlY2lhbFBhZ2VOYW1lIiwgIndnQ3VyUmV2aXNpb25JZCIsICJpbmNsdWRlcyIsICJwb3J0bGV0SWQiLCAicXVlcnlTZWxlY3RvciIsICJ1dGlsIiwgImFkZFBvcnRsZXRMaW5rIiwgImFkZEV2ZW50TGlzdGVuZXIiLCAiZGV0ZWN0SWZGaWxlUmVkaXJlY3QiLCAidGhlbiIsICJyZWZyZXNoUGFnZSJdCn0K

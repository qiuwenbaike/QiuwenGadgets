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
var import_ext_gadget4 = require("ext.gadget.QuickImport");
//! src/QuickImportAllMedia/modules/api.ts
var import_ext_gadget = require("ext.gadget.QuickImport");
//! src/QuickImportAllMedia/modules/core.ts
var import_ext_gadget2 = require("ext.gadget.Toastify");
var import_ext_gadget3 = require("ext.gadget.Util");
var toastifyInstance = {
  hideToast: () => {
  }
};
var queryImages = /* @__PURE__ */ function() {
  var _ref = _asyncToGenerator(function* (titles) {
    const params = {
      action: "query",
      format: "json",
      formatversion: "2",
      prop: "images",
      titles,
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
      action: "parse",
      format: "json",
      formatversion: "2",
      prop: "text",
      page
    };
    const response = yield import_ext_gadget.api.post(params);
    return response;
  });
  return function parse2(_x2) {
    return _ref2.apply(this, arguments);
  };
}();
var getAllImages = /* @__PURE__ */ function() {
  var _ref3 = _asyncToGenerator(function* () {
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
        const queryImageResponse = yield queryImages(wgPageName);
        if (queryImageResponse["query"] && queryImageResponse["query"].pages[0] && queryImageResponse["query"].pages[0].images) {
          var _iterator = _createForOfIteratorHelper(queryImageResponse["query"].pages[0].images), _step;
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
    if (!(wgNamespaceNumber < 0)) {
      try {
        const parseResponse = yield parse(wgPageName);
        if (parseResponse["parse"] && parseResponse["parse"].text) {
          const pageContent = document.createElement("span");
          pageContent.innerHTML = parseResponse["parse"].text;
          fileLinkElements = [...pageContent.querySelectorAll("a[href^='/wiki/File:']"), ...pageContent.querySelectorAll("a[href*='title=File:']")];
        }
      } catch {
      }
    }
    fileLinkElements = [...fileLinkElements, ...document.querySelectorAll("a[href^='/wiki/File:']"), ...document.querySelectorAll("a[href*='title=File:']")];
    const articleRegex = new RegExp("".concat(wgArticlePath.replace("$1", ""), "(File:[^#]+)"));
    const scriptRegex = new RegExp("".concat(wgScript, "\\?title=(File:[^#&]+)"));
    var _iterator2 = _createForOfIteratorHelper((0, import_ext_gadget3.uniqueArray)(fileLinkElements)), _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
        const element = _step2.value;
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
    toastifyInstance.hideToast();
    toastifyInstance = (0, import_ext_gadget2.toastify)({
      text: "获取迁移目标完成",
      duration: -1
    }, "success");
    return [...(0, import_ext_gadget3.uniqueArray)(fileNames)];
  });
  return function getAllImages2() {
    return _ref3.apply(this, arguments);
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

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1F1aWNrSW1wb3J0QWxsTWVkaWEvUXVpY2tJbXBvcnRBbGxNZWRpYS50cyIsICJzcmMvUXVpY2tJbXBvcnRBbGxNZWRpYS9tb2R1bGVzL2FwaS50cyIsICJzcmMvUXVpY2tJbXBvcnRBbGxNZWRpYS9tb2R1bGVzL2NvcmUudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7ZGV0ZWN0SWZGaWxlUmVkaXJlY3QsIHJlZnJlc2hQYWdlfSBmcm9tICdleHQuZ2FkZ2V0LlF1aWNrSW1wb3J0JztcbmltcG9ydCB7Z2V0QWxsSW1hZ2VzfSBmcm9tICcuL21vZHVsZXMvY29yZSc7XG5cbihmdW5jdGlvbiBxdWlja0ltcG9ydEFsbE1lZGlhKCk6IHZvaWQge1xuXHRjb25zdCB7d2dDYW5vbmljYWxTcGVjaWFsUGFnZU5hbWUsIHdnQ3VyUmV2aXNpb25JZH0gPSBtdy5jb25maWcuZ2V0KCk7XG5cdGlmIChcblx0XHQhKFxuXHRcdFx0d2dDdXJSZXZpc2lvbklkIHx8XG5cdFx0XHRbJ1ByZWZpeGluZGV4JywgJ0Jyb2tlblJlZGlyZWN0cycsICdXYW50ZWRmaWxlcyddLmluY2x1ZGVzKHdnQ2Fub25pY2FsU3BlY2lhbFBhZ2VOYW1lIHx8ICcnKVxuXHRcdClcblx0KSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgcG9ydGxldElkOiAncC1jYWN0aW9ucycgfCAncC10YicgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcC1jYWN0aW9ucycpID8gJ3AtY2FjdGlvbnMnIDogJ3AtdGInO1xuXHRjb25zdCBlbGVtZW50OiBIVE1MTElFbGVtZW50IHwgbnVsbCA9IG13LnV0aWwuYWRkUG9ydGxldExpbmsocG9ydGxldElkLCAnIycsICflr7zlhaXmraTpobXpnaLmiYDmnInmlofku7YnLCAndC1pbXBvcnQnKTtcblx0aWYgKCFlbGVtZW50KSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpOiB2b2lkID0+IHtcblx0XHR2b2lkIChhc3luYyAoKSA9PiB7XG5cdFx0XHRjb25zdCBmaWxlTmFtZXMgPSBhd2FpdCBnZXRBbGxJbWFnZXMoKTtcblx0XHRcdGlmICghZmlsZU5hbWVzLmxlbmd0aCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRhd2FpdCBkZXRlY3RJZkZpbGVSZWRpcmVjdChmaWxlTmFtZXMsIHRydWUpO1xuXHRcdH0pKCkudGhlbigoKSA9PiB7XG5cdFx0XHRyZWZyZXNoUGFnZSgpO1xuXHRcdH0pO1xuXHR9KTtcbn0pKCk7XG4iLCAiZXhwb3J0IHthcGl9IGZyb20gJ2V4dC5nYWRnZXQuUXVpY2tJbXBvcnQnO1xuIiwgImltcG9ydCB7YXBpfSBmcm9tICcuL2FwaSc7XG5pbXBvcnQge3RvYXN0aWZ5fSBmcm9tICdleHQuZ2FkZ2V0LlRvYXN0aWZ5JztcbmltcG9ydCB7dW5pcXVlQXJyYXl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmxldCB0b2FzdGlmeUluc3RhbmNlOiBUb2FzdGlmeUluc3RhbmNlID0ge1xuXHRoaWRlVG9hc3Q6ICgpID0+IHt9LFxufTtcblxuY29uc3QgcXVlcnlJbWFnZXMgPSBhc3luYyAodGl0bGVzOiBzdHJpbmcgfCBzdHJpbmdbXSkgPT4ge1xuXHRjb25zdCBwYXJhbXMgPSB7XG5cdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRwcm9wOiAnaW1hZ2VzJyxcblx0XHR0aXRsZXMsXG5cdFx0aW1saW1pdDogNTAwMCxcblx0fSBhcyBjb25zdCBzYXRpc2ZpZXMgQXBpUXVlcnlJbWFnZXNQYXJhbXM7XG5cdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXBpLnBvc3QocGFyYW1zKTtcblxuXHRyZXR1cm4gcmVzcG9uc2U7XG59O1xuXG5jb25zdCBwYXJzZSA9IGFzeW5jIChwYWdlOiBzdHJpbmcpID0+IHtcblx0Y29uc3QgcGFyYW1zID0ge1xuXHRcdGFjdGlvbjogJ3BhcnNlJyxcblx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0cHJvcDogJ3RleHQnLFxuXHRcdHBhZ2UsXG5cdH0gYXMgY29uc3Qgc2F0aXNmaWVzIEFwaVBhcnNlUGFyYW1zO1xuXHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGFwaS5wb3N0KHBhcmFtcyk7XG5cblx0cmV0dXJuIHJlc3BvbnNlO1xufTtcblxuY29uc3QgZ2V0QWxsSW1hZ2VzID0gYXN5bmMgKCk6IFByb21pc2U8c3RyaW5nW10+ID0+IHtcblx0dG9hc3RpZnlJbnN0YW5jZS5oaWRlVG9hc3QoKTtcblx0dG9hc3RpZnkoXG5cdFx0e1xuXHRcdFx0dGV4dDogJ+ato+WcqOiOt+WPlui/geenu+ebruaghycsXG5cdFx0XHRkdXJhdGlvbjogLTEsXG5cdFx0fSxcblx0XHQnaW5mbydcblx0KTtcblxuXHRjb25zdCBmaWxlTmFtZXM6IHN0cmluZ1tdID0gW107XG5cdGNvbnN0IHt3Z0FydGljbGVQYXRoLCB3Z05hbWVzcGFjZU51bWJlciwgd2dQYWdlTmFtZSwgd2dTY3JpcHR9ID0gbXcuY29uZmlnLmdldCgpO1xuXG5cdC8vIEFuYWx5emUgc3RlcCAxOiBRdWVyeVxuXHRpZiAoISh3Z05hbWVzcGFjZU51bWJlciA8IDApKSB7XG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IHF1ZXJ5SW1hZ2VSZXNwb25zZSA9IGF3YWl0IHF1ZXJ5SW1hZ2VzKHdnUGFnZU5hbWUpO1xuXHRcdFx0aWYgKFxuXHRcdFx0XHRxdWVyeUltYWdlUmVzcG9uc2VbJ3F1ZXJ5J10gJiZcblx0XHRcdFx0cXVlcnlJbWFnZVJlc3BvbnNlWydxdWVyeSddLnBhZ2VzWzBdICYmXG5cdFx0XHRcdHF1ZXJ5SW1hZ2VSZXNwb25zZVsncXVlcnknXS5wYWdlc1swXS5pbWFnZXNcblx0XHRcdCkge1xuXHRcdFx0XHRmb3IgKGNvbnN0IGltYWdlSW5mbyBvZiBxdWVyeUltYWdlUmVzcG9uc2VbJ3F1ZXJ5J10ucGFnZXNbMF0uaW1hZ2VzIGFzIHtuczogbnVtYmVyOyB0aXRsZTogc3RyaW5nfVtdKSB7XG5cdFx0XHRcdFx0aWYgKCFpbWFnZUluZm8gfHwgIWltYWdlSW5mby50aXRsZSkge1xuXHRcdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGZpbGVOYW1lc1tmaWxlTmFtZXMubGVuZ3RoXSA9IGltYWdlSW5mby50aXRsZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0gY2F0Y2gge31cblx0fVxuXG5cdC8vIEFuYWx5emUgc3RlcCAyOiBGaW5kIGZyb20gcGFnZXNcblx0bGV0IGZpbGVMaW5rRWxlbWVudHM6IEhUTUxBbmNob3JFbGVtZW50W10gPSBbXTtcblxuXHRpZiAoISh3Z05hbWVzcGFjZU51bWJlciA8IDApKSB7XG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IHBhcnNlUmVzcG9uc2UgPSBhd2FpdCBwYXJzZSh3Z1BhZ2VOYW1lKTtcblx0XHRcdGlmIChwYXJzZVJlc3BvbnNlWydwYXJzZSddICYmIHBhcnNlUmVzcG9uc2VbJ3BhcnNlJ10udGV4dCkge1xuXHRcdFx0XHRjb25zdCBwYWdlQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcblx0XHRcdFx0cGFnZUNvbnRlbnQuaW5uZXJIVE1MID0gcGFyc2VSZXNwb25zZVsncGFyc2UnXS50ZXh0IGFzIHN0cmluZztcblxuXHRcdFx0XHRmaWxlTGlua0VsZW1lbnRzID0gW1xuXHRcdFx0XHRcdC4uLnBhZ2VDb250ZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEFuY2hvckVsZW1lbnQ+KFwiYVtocmVmXj0nL3dpa2kvRmlsZTonXVwiKSxcblx0XHRcdFx0XHQuLi5wYWdlQ29udGVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxBbmNob3JFbGVtZW50PihcImFbaHJlZio9J3RpdGxlPUZpbGU6J11cIiksXG5cdFx0XHRcdF07XG5cdFx0XHR9XG5cdFx0fSBjYXRjaCB7fVxuXHR9XG5cblx0ZmlsZUxpbmtFbGVtZW50cyA9IFtcblx0XHQuLi5maWxlTGlua0VsZW1lbnRzLFxuXHRcdC4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEFuY2hvckVsZW1lbnQ+KFwiYVtocmVmXj0nL3dpa2kvRmlsZTonXVwiKSxcblx0XHQuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxBbmNob3JFbGVtZW50PihcImFbaHJlZio9J3RpdGxlPUZpbGU6J11cIiksXG5cdF07XG5cblx0Y29uc3QgYXJ0aWNsZVJlZ2V4OiBSZWdFeHAgPSBuZXcgUmVnRXhwKGAke3dnQXJ0aWNsZVBhdGgucmVwbGFjZSgnJDEnLCAnJyl9KEZpbGU6W14jXSspYCk7XG5cdGNvbnN0IHNjcmlwdFJlZ2V4OiBSZWdFeHAgPSBuZXcgUmVnRXhwKGAke3dnU2NyaXB0fVxcXFw/dGl0bGU9KEZpbGU6W14jJl0rKWApO1xuXG5cdGZvciAoY29uc3QgZWxlbWVudCBvZiB1bmlxdWVBcnJheShmaWxlTGlua0VsZW1lbnRzKSkge1xuXHRcdC8vIFJlcGxhY2UgYG5ldyBTZXQoKWAgdG8gYXZvaWQgcG9seWZpbGxpbmcgY29yZS1qc1xuXHRcdGNvbnN0IHtocmVmfSA9IGVsZW1lbnQ7XG5cblx0XHRpZiAoIWhyZWYpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGxldCBmaWxlTmFtZTogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXHRcdGlmIChhcnRpY2xlUmVnZXgudGVzdChocmVmKSkge1xuXHRcdFx0Y29uc3QgbWF0Y2g6IFJlZ0V4cEV4ZWNBcnJheSA9IGFydGljbGVSZWdleC5leGVjKGhyZWYpIGFzIFJlZ0V4cEV4ZWNBcnJheTtcblx0XHRcdGZpbGVOYW1lID0gbWF0Y2hbMV0gYXMgc3RyaW5nO1xuXHRcdFx0ZmlsZU5hbWUgPSBmaWxlTmFtZS5yZXBsYWNlKC9GaWxlOihGaWxlOnxJbWFnZTopPy9pLCAnRmlsZTonKTtcblx0XHRcdGZpbGVOYW1lID0gZGVjb2RlVVJJQ29tcG9uZW50KGZpbGVOYW1lKTtcblx0XHRcdGZpbGVOYW1lc1tmaWxlTmFtZXMubGVuZ3RoXSA9IGZpbGVOYW1lO1xuXHRcdH1cblxuXHRcdGlmIChzY3JpcHRSZWdleC50ZXN0KGhyZWYpKSB7XG5cdFx0XHRjb25zdCBtYXRjaDogUmVnRXhwRXhlY0FycmF5ID0gc2NyaXB0UmVnZXguZXhlYyhocmVmKSBhcyBSZWdFeHBFeGVjQXJyYXk7XG5cdFx0XHRmaWxlTmFtZSA9IG1hdGNoWzFdIGFzIHN0cmluZztcblx0XHRcdGZpbGVOYW1lID0gZmlsZU5hbWUucmVwbGFjZSgvRmlsZTooRmlsZTp8SW1hZ2U6KT8vaSwgJ0ZpbGU6Jyk7XG5cdFx0XHRmaWxlTmFtZSA9IGRlY29kZVVSSUNvbXBvbmVudChmaWxlTmFtZSk7XG5cdFx0XHRmaWxlTmFtZXNbZmlsZU5hbWVzLmxlbmd0aF0gPSBmaWxlTmFtZTtcblx0XHR9XG5cdH1cblxuXHR0b2FzdGlmeUluc3RhbmNlLmhpZGVUb2FzdCgpO1xuXHR0b2FzdGlmeUluc3RhbmNlID0gdG9hc3RpZnkoXG5cdFx0e1xuXHRcdFx0dGV4dDogJ+iOt+WPlui/geenu+ebruagh+WujOaIkCcsXG5cdFx0XHRkdXJhdGlvbjogLTEsXG5cdFx0fSxcblx0XHQnc3VjY2Vzcydcblx0KTtcblxuXHRyZXR1cm4gWy4uLnVuaXF1ZUFycmF5KGZpbGVOYW1lcyldOyAvLyBSZXBsYWNlIGBuZXcgU2V0KClgIHRvIGF2b2lkIHBvbHlmaWxsaW5nIGNvcmUtanNcbn07XG5cbmV4cG9ydCB7Z2V0QWxsSW1hZ2VzfTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxxQkFBZ0RDLFFBQUEsd0JBQUE7O0FDQWhELElBQUFDLG9CQUFrQkQsUUFBQSx3QkFBQTs7QUNDbEIsSUFBQUUscUJBQXVCRixRQUFBLHFCQUFBO0FB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VUFBVTtBQUMzQkQsd0JBQUEsR0FBbUJGLG1CQUFBMEIsVUFDbEI7TUFDQ0MsTUFBTTtNQUNOQyxVQUFVO0lBQ1gsR0FDQSxTQUNEO0FBRUEsV0FBTyxDQUFDLElBQUEsR0FBRzNCLG1CQUFBaUUsYUFBWXJDLFNBQVMsQ0FBQztFQUNsQyxDQUFBO0FBQUEsU0FBQSxTQS9GTUwsZ0JBQUE7QUFBQSxXQUFBQyxNQUFBUCxNQUFBLE1BQUFDLFNBQUE7RUFBQTtBQUFBLEVBQUE7O0NGaENMLFNBQVN3RCxzQkFBNEI7QUFDckMsUUFBTTtJQUFDQztJQUE0QkM7RUFBZSxJQUFJM0MsR0FBR0MsT0FBT0MsSUFBSTtBQUNwRSxNQUNDLEVBQ0N5QyxtQkFDQSxDQUFDLGVBQWUsbUJBQW1CLGFBQWEsRUFBRUMsU0FBU0YsOEJBQThCLEVBQUUsSUFFM0Y7QUFDRDtFQUNEO0FBRUEsUUFBTUcsWUFBbUN2QixTQUFTd0IsY0FBYyxhQUFhLElBQUksZUFBZTtBQUNoRyxRQUFNWixVQUFnQ2xDLEdBQUcrQyxLQUFLQyxlQUFlSCxXQUFXLEtBQUssYUFBYSxVQUFVO0FBQ3BHLE1BQUksQ0FBQ1gsU0FBUztBQUNiO0VBQ0Q7QUFFQUEsVUFBUWUsaUJBQWlCLFNBQVMsTUFBWTtBQUM3QyxTQUFBN0Usa0JBQU0sYUFBWTtBQUNqQixZQUFNdUIsWUFBQSxNQUFrQkwsYUFBYTtBQUNyQyxVQUFJLENBQUNLLFVBQVVvQixRQUFRO0FBQ3RCO01BQ0Q7QUFDQSxhQUFBLEdBQU1wRCxtQkFBQXVGLHNCQUFxQnZELFdBQVcsSUFBSTtJQUMzQyxDQUFBLEVBQUcsRUFBRXdELEtBQUssTUFBTTtBQUNmLE9BQUEsR0FBQXhGLG1CQUFBeUYsYUFBWTtJQUNiLENBQUM7RUFDRixDQUFDO0FBQ0YsR0FBRzsiLAogICJuYW1lcyI6IFsiaW1wb3J0X2V4dF9nYWRnZXQ0IiwgInJlcXVpcmUiLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAiaW1wb3J0X2V4dF9nYWRnZXQyIiwgImltcG9ydF9leHRfZ2FkZ2V0MyIsICJ0b2FzdGlmeUluc3RhbmNlIiwgImhpZGVUb2FzdCIsICJxdWVyeUltYWdlcyIsICJfcmVmIiwgIl9hc3luY1RvR2VuZXJhdG9yIiwgInRpdGxlcyIsICJwYXJhbXMiLCAiYWN0aW9uIiwgImZvcm1hdCIsICJmb3JtYXR2ZXJzaW9uIiwgInByb3AiLCAiaW1saW1pdCIsICJyZXNwb25zZSIsICJhcGkiLCAicG9zdCIsICJfeCIsICJhcHBseSIsICJhcmd1bWVudHMiLCAicGFyc2UiLCAiX3JlZjIiLCAicGFnZSIsICJfeDIiLCAiZ2V0QWxsSW1hZ2VzIiwgIl9yZWYzIiwgInRvYXN0aWZ5IiwgInRleHQiLCAiZHVyYXRpb24iLCAiZmlsZU5hbWVzIiwgIndnQXJ0aWNsZVBhdGgiLCAid2dOYW1lc3BhY2VOdW1iZXIiLCAid2dQYWdlTmFtZSIsICJ3Z1NjcmlwdCIsICJtdyIsICJjb25maWciLCAiZ2V0IiwgInF1ZXJ5SW1hZ2VSZXNwb25zZSIsICJwYWdlcyIsICJpbWFnZXMiLCAiX2l0ZXJhdG9yIiwgIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwgIl9zdGVwIiwgInMiLCAibiIsICJkb25lIiwgImltYWdlSW5mbyIsICJ2YWx1ZSIsICJ0aXRsZSIsICJsZW5ndGgiLCAiZXJyIiwgImUiLCAiZiIsICJmaWxlTGlua0VsZW1lbnRzIiwgInBhcnNlUmVzcG9uc2UiLCAicGFnZUNvbnRlbnQiLCAiZG9jdW1lbnQiLCAiY3JlYXRlRWxlbWVudCIsICJpbm5lckhUTUwiLCAicXVlcnlTZWxlY3RvckFsbCIsICJhcnRpY2xlUmVnZXgiLCAiUmVnRXhwIiwgImNvbmNhdCIsICJyZXBsYWNlIiwgInNjcmlwdFJlZ2V4IiwgIl9pdGVyYXRvcjIiLCAidW5pcXVlQXJyYXkiLCAiX3N0ZXAyIiwgImVsZW1lbnQiLCAiaHJlZiIsICJmaWxlTmFtZSIsICJ0ZXN0IiwgIm1hdGNoIiwgImV4ZWMiLCAiZGVjb2RlVVJJQ29tcG9uZW50IiwgInF1aWNrSW1wb3J0QWxsTWVkaWEiLCAid2dDYW5vbmljYWxTcGVjaWFsUGFnZU5hbWUiLCAid2dDdXJSZXZpc2lvbklkIiwgImluY2x1ZGVzIiwgInBvcnRsZXRJZCIsICJxdWVyeVNlbGVjdG9yIiwgInV0aWwiLCAiYWRkUG9ydGxldExpbmsiLCAiYWRkRXZlbnRMaXN0ZW5lciIsICJkZXRlY3RJZkZpbGVSZWRpcmVjdCIsICJ0aGVuIiwgInJlZnJlc2hQYWdlIl0KfQo=

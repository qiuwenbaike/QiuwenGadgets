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
      if (it) o = it;
      var i = 0;
      var F = function() {
      };
      return { s: F, n: function() {
        if (i >= o.length) return { done: true };
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
      if (!normalCompletion && it.return != null) it.return();
    } finally {
      if (didErr) throw err;
    }
  } };
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
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
      prop: "text"
    };
    const response = yield import_ext_gadget.api.post(params);
    return response;
  });
  return function parse2(_x2) {
    return _ref2.apply(this, arguments);
  };
}();
var getAllImages = /* @__PURE__ */ function() {
  var _ref3 = _asyncToGenerator(function* (titles) {
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
    if (!titles || !titles.length) {
      titles = [wgPageName];
    }
    if (!(wgNamespaceNumber < 0)) {
      try {
        var _iterator = _createForOfIteratorHelper(titles), _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done; ) {
            const title = _step.value;
            const queryImageResponse = yield queryImages(title);
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
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      } catch {
      }
    }
    let fileLinkElements = [];
    if (!(wgNamespaceNumber < 0)) {
      try {
        var _iterator3 = _createForOfIteratorHelper(titles), _step3;
        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
            const title = _step3.value;
            const parseResponse = yield parse(title);
            if (parseResponse["parse"] && parseResponse["parse"].text) {
              const pageContent = document.createElement("span");
              pageContent.innerHTML = parseResponse["parse"].text;
              fileLinkElements = [...pageContent.querySelectorAll("a[href^='/wiki/File:']"), ...pageContent.querySelectorAll("a[href*='title=File:']")];
            }
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
      } catch {
      }
    }
    fileLinkElements = [...fileLinkElements, ...document.querySelectorAll("a[href^='/wiki/File:']"), ...document.querySelectorAll("a[href*='title=File:']")];
    const articleRegex = new RegExp("".concat(wgArticlePath.replace("$1", ""), "(File:[^#]+)"));
    const scriptRegex = new RegExp("".concat(wgScript, "\\?title=(File:[^#&]+)"));
    var _iterator4 = _createForOfIteratorHelper((0, import_ext_gadget3.uniqueArray)(fileLinkElements)), _step4;
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
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }
    toastifyInstance.hideToast();
    toastifyInstance = (0, import_ext_gadget2.toastify)({
      text: "获取迁移目标完成",
      duration: -1
    }, "success");
    return (0, import_ext_gadget3.uniqueArray)(fileNames);
  });
  return function getAllImages2(_x3) {
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
  window.detectIfFileRedirect = import_ext_gadget4.detectIfFileRedirect;
  window.getAllImages = getAllImages;
})();

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1F1aWNrSW1wb3J0QWxsTWVkaWEvUXVpY2tJbXBvcnRBbGxNZWRpYS50cyIsICJzcmMvUXVpY2tJbXBvcnRBbGxNZWRpYS9tb2R1bGVzL2FwaS50cyIsICJzcmMvUXVpY2tJbXBvcnRBbGxNZWRpYS9tb2R1bGVzL2NvcmUudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7ZGV0ZWN0SWZGaWxlUmVkaXJlY3QsIHJlZnJlc2hQYWdlfSBmcm9tICdleHQuZ2FkZ2V0LlF1aWNrSW1wb3J0JztcbmltcG9ydCB7Z2V0QWxsSW1hZ2VzfSBmcm9tICcuL21vZHVsZXMvY29yZSc7XG5cbmRlY2xhcmUgZ2xvYmFsIHtcblx0aW50ZXJmYWNlIFdpbmRvdyB7XG5cdFx0ZGV0ZWN0SWZGaWxlUmVkaXJlY3Q6IERldGVjdElmRmlsZVJlZGlyZWN0O1xuXHRcdGdldEFsbEltYWdlczogdHlwZW9mIGdldEFsbEltYWdlcztcblx0fVxufVxuXG4oZnVuY3Rpb24gcXVpY2tJbXBvcnRBbGxNZWRpYSgpOiB2b2lkIHtcblx0Y29uc3Qge3dnQ2Fub25pY2FsU3BlY2lhbFBhZ2VOYW1lLCB3Z0N1clJldmlzaW9uSWR9ID0gbXcuY29uZmlnLmdldCgpO1xuXHRpZiAoXG5cdFx0IShcblx0XHRcdHdnQ3VyUmV2aXNpb25JZCB8fFxuXHRcdFx0WydQcmVmaXhpbmRleCcsICdCcm9rZW5SZWRpcmVjdHMnLCAnV2FudGVkZmlsZXMnXS5pbmNsdWRlcyh3Z0Nhbm9uaWNhbFNwZWNpYWxQYWdlTmFtZSB8fCAnJylcblx0XHQpXG5cdCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IHBvcnRsZXRJZDogJ3AtY2FjdGlvbnMnIHwgJ3AtdGInID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3AtY2FjdGlvbnMnKSA/ICdwLWNhY3Rpb25zJyA6ICdwLXRiJztcblx0Y29uc3QgZWxlbWVudDogSFRNTExJRWxlbWVudCB8IG51bGwgPSBtdy51dGlsLmFkZFBvcnRsZXRMaW5rKHBvcnRsZXRJZCwgJyMnLCAn5a+85YWl5q2k6aG16Z2i5omA5pyJ5paH5Lu2JywgJ3QtaW1wb3J0Jyk7XG5cdGlmICghZWxlbWVudCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKTogdm9pZCA9PiB7XG5cdFx0dm9pZCAoYXN5bmMgKCkgPT4ge1xuXHRcdFx0Y29uc3QgZmlsZU5hbWVzID0gYXdhaXQgZ2V0QWxsSW1hZ2VzKCk7XG5cdFx0XHRpZiAoIWZpbGVOYW1lcy5sZW5ndGgpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0YXdhaXQgZGV0ZWN0SWZGaWxlUmVkaXJlY3QoZmlsZU5hbWVzLCB0cnVlKTtcblx0XHR9KSgpLnRoZW4oKCkgPT4ge1xuXHRcdFx0cmVmcmVzaFBhZ2UoKTtcblx0XHR9KTtcblx0fSk7XG5cblx0d2luZG93LmRldGVjdElmRmlsZVJlZGlyZWN0ID0gZGV0ZWN0SWZGaWxlUmVkaXJlY3Q7XG5cdHdpbmRvdy5nZXRBbGxJbWFnZXMgPSBnZXRBbGxJbWFnZXM7XG59KSgpO1xuIiwgImV4cG9ydCB7YXBpfSBmcm9tICdleHQuZ2FkZ2V0LlF1aWNrSW1wb3J0JztcbiIsICJpbXBvcnQge2FwaX0gZnJvbSAnLi9hcGknO1xuaW1wb3J0IHt0b2FzdGlmeX0gZnJvbSAnZXh0LmdhZGdldC5Ub2FzdGlmeSc7XG5pbXBvcnQge3VuaXF1ZUFycmF5fSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG5sZXQgdG9hc3RpZnlJbnN0YW5jZTogVG9hc3RpZnlJbnN0YW5jZSA9IHtcblx0aGlkZVRvYXN0OiAoKSA9PiB7fSxcbn07XG5cbmNvbnN0IHF1ZXJ5SW1hZ2VzID0gYXN5bmMgKHRpdGxlczogc3RyaW5nIHwgc3RyaW5nW10pID0+IHtcblx0Y29uc3QgcGFyYW1zOiBBcGlRdWVyeUltYWdlc1BhcmFtcyA9IHtcblx0XHR0aXRsZXMsXG5cdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRwcm9wOiAnaW1hZ2VzJyxcblx0XHRpbWxpbWl0OiA1MDAwLFxuXHR9O1xuXHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGFwaS5wb3N0KHBhcmFtcyk7XG5cblx0cmV0dXJuIHJlc3BvbnNlO1xufTtcblxuY29uc3QgcGFyc2UgPSBhc3luYyAocGFnZTogc3RyaW5nKSA9PiB7XG5cdGNvbnN0IHBhcmFtczogQXBpUGFyc2VQYXJhbXMgPSB7XG5cdFx0cGFnZSxcblx0XHRhY3Rpb246ICdwYXJzZScsXG5cdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdHByb3A6ICd0ZXh0Jyxcblx0fTtcblx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGkucG9zdChwYXJhbXMpO1xuXG5cdHJldHVybiByZXNwb25zZTtcbn07XG5cbmNvbnN0IGdldEFsbEltYWdlcyA9IGFzeW5jICh0aXRsZXM/OiBzdHJpbmcgfCBzdHJpbmdbXSk6IFByb21pc2U8c3RyaW5nW10+ID0+IHtcblx0dG9hc3RpZnlJbnN0YW5jZS5oaWRlVG9hc3QoKTtcblx0dG9hc3RpZnkoXG5cdFx0e1xuXHRcdFx0dGV4dDogJ+ato+WcqOiOt+WPlui/geenu+ebruaghycsXG5cdFx0XHRkdXJhdGlvbjogLTEsXG5cdFx0fSxcblx0XHQnaW5mbydcblx0KTtcblxuXHRjb25zdCBmaWxlTmFtZXM6IHN0cmluZ1tdID0gW107XG5cdGNvbnN0IHt3Z0FydGljbGVQYXRoLCB3Z05hbWVzcGFjZU51bWJlciwgd2dQYWdlTmFtZSwgd2dTY3JpcHR9ID0gbXcuY29uZmlnLmdldCgpO1xuXG5cdGlmICghdGl0bGVzIHx8ICF0aXRsZXMubGVuZ3RoKSB7XG5cdFx0dGl0bGVzID0gW3dnUGFnZU5hbWVdO1xuXHR9XG5cblx0Ly8gQW5hbHl6ZSBzdGVwIDE6IFF1ZXJ5XG5cdGlmICghKHdnTmFtZXNwYWNlTnVtYmVyIDwgMCkpIHtcblx0XHR0cnkge1xuXHRcdFx0Zm9yIChjb25zdCB0aXRsZSBvZiB0aXRsZXMpIHtcblx0XHRcdFx0Y29uc3QgcXVlcnlJbWFnZVJlc3BvbnNlID0gYXdhaXQgcXVlcnlJbWFnZXModGl0bGUpO1xuXHRcdFx0XHRpZiAoXG5cdFx0XHRcdFx0cXVlcnlJbWFnZVJlc3BvbnNlWydxdWVyeSddICYmXG5cdFx0XHRcdFx0cXVlcnlJbWFnZVJlc3BvbnNlWydxdWVyeSddLnBhZ2VzWzBdICYmXG5cdFx0XHRcdFx0cXVlcnlJbWFnZVJlc3BvbnNlWydxdWVyeSddLnBhZ2VzWzBdLmltYWdlc1xuXHRcdFx0XHQpIHtcblx0XHRcdFx0XHRmb3IgKGNvbnN0IGltYWdlSW5mbyBvZiBxdWVyeUltYWdlUmVzcG9uc2VbJ3F1ZXJ5J10ucGFnZXNbMF0uaW1hZ2VzIGFzIHtcblx0XHRcdFx0XHRcdG5zOiBudW1iZXI7XG5cdFx0XHRcdFx0XHR0aXRsZTogc3RyaW5nO1xuXHRcdFx0XHRcdH1bXSkge1xuXHRcdFx0XHRcdFx0aWYgKCFpbWFnZUluZm8gfHwgIWltYWdlSW5mby50aXRsZSkge1xuXHRcdFx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGZpbGVOYW1lc1tmaWxlTmFtZXMubGVuZ3RoXSA9IGltYWdlSW5mby50aXRsZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9IGNhdGNoIHt9XG5cdH1cblxuXHQvLyBBbmFseXplIHN0ZXAgMjogRmluZCBmcm9tIHBhZ2VzXG5cdGxldCBmaWxlTGlua0VsZW1lbnRzOiBIVE1MQW5jaG9yRWxlbWVudFtdID0gW107XG5cblx0aWYgKCEod2dOYW1lc3BhY2VOdW1iZXIgPCAwKSkge1xuXHRcdHRyeSB7XG5cdFx0XHRmb3IgKGNvbnN0IHRpdGxlIG9mIHRpdGxlcykge1xuXHRcdFx0XHRjb25zdCBwYXJzZVJlc3BvbnNlID0gYXdhaXQgcGFyc2UodGl0bGUpO1xuXHRcdFx0XHRpZiAocGFyc2VSZXNwb25zZVsncGFyc2UnXSAmJiBwYXJzZVJlc3BvbnNlWydwYXJzZSddLnRleHQpIHtcblx0XHRcdFx0XHRjb25zdCBwYWdlQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcblx0XHRcdFx0XHRwYWdlQ29udGVudC5pbm5lckhUTUwgPSBwYXJzZVJlc3BvbnNlWydwYXJzZSddLnRleHQgYXMgc3RyaW5nO1xuXG5cdFx0XHRcdFx0ZmlsZUxpbmtFbGVtZW50cyA9IFtcblx0XHRcdFx0XHRcdC4uLnBhZ2VDb250ZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEFuY2hvckVsZW1lbnQ+KFwiYVtocmVmXj0nL3dpa2kvRmlsZTonXVwiKSxcblx0XHRcdFx0XHRcdC4uLnBhZ2VDb250ZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEFuY2hvckVsZW1lbnQ+KFwiYVtocmVmKj0ndGl0bGU9RmlsZTonXVwiKSxcblx0XHRcdFx0XHRdO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSBjYXRjaCB7fVxuXHR9XG5cblx0ZmlsZUxpbmtFbGVtZW50cyA9IFtcblx0XHQuLi5maWxlTGlua0VsZW1lbnRzLFxuXHRcdC4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEFuY2hvckVsZW1lbnQ+KFwiYVtocmVmXj0nL3dpa2kvRmlsZTonXVwiKSxcblx0XHQuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxBbmNob3JFbGVtZW50PihcImFbaHJlZio9J3RpdGxlPUZpbGU6J11cIiksXG5cdF07XG5cblx0Y29uc3QgYXJ0aWNsZVJlZ2V4OiBSZWdFeHAgPSBuZXcgUmVnRXhwKGAke3dnQXJ0aWNsZVBhdGgucmVwbGFjZSgnJDEnLCAnJyl9KEZpbGU6W14jXSspYCk7XG5cdGNvbnN0IHNjcmlwdFJlZ2V4OiBSZWdFeHAgPSBuZXcgUmVnRXhwKGAke3dnU2NyaXB0fVxcXFw/dGl0bGU9KEZpbGU6W14jJl0rKWApO1xuXG5cdGZvciAoY29uc3QgZWxlbWVudCBvZiB1bmlxdWVBcnJheShmaWxlTGlua0VsZW1lbnRzKSkge1xuXHRcdC8vIFJlcGxhY2UgYG5ldyBTZXQoKWAgdG8gYXZvaWQgcG9seWZpbGxpbmcgY29yZS1qc1xuXHRcdGNvbnN0IHtocmVmLCBjbGFzc0xpc3R9ID0gZWxlbWVudDtcblxuXHRcdGlmICghaHJlZiB8fCBocmVmLmluY2x1ZGVzKCdyZWRsaW5rPTEnKSkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0aWYgKGNsYXNzTGlzdC5jb250YWlucygnbmV3JykpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGxldCBmaWxlTmFtZTogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXHRcdGlmIChhcnRpY2xlUmVnZXgudGVzdChocmVmKSkge1xuXHRcdFx0Y29uc3QgbWF0Y2g6IFJlZ0V4cEV4ZWNBcnJheSA9IGFydGljbGVSZWdleC5leGVjKGhyZWYpIGFzIFJlZ0V4cEV4ZWNBcnJheTtcblx0XHRcdGZpbGVOYW1lID0gbWF0Y2hbMV0gYXMgc3RyaW5nO1xuXHRcdFx0ZmlsZU5hbWUgPSBmaWxlTmFtZS5yZXBsYWNlKC9GaWxlOihGaWxlOnxJbWFnZTopPy9pLCAnRmlsZTonKTtcblx0XHRcdGZpbGVOYW1lID0gZGVjb2RlVVJJQ29tcG9uZW50KGZpbGVOYW1lKTtcblx0XHRcdGZpbGVOYW1lc1tmaWxlTmFtZXMubGVuZ3RoXSA9IGZpbGVOYW1lO1xuXHRcdH1cblxuXHRcdGlmIChzY3JpcHRSZWdleC50ZXN0KGhyZWYpKSB7XG5cdFx0XHRjb25zdCBtYXRjaDogUmVnRXhwRXhlY0FycmF5ID0gc2NyaXB0UmVnZXguZXhlYyhocmVmKSBhcyBSZWdFeHBFeGVjQXJyYXk7XG5cdFx0XHRmaWxlTmFtZSA9IG1hdGNoWzFdIGFzIHN0cmluZztcblx0XHRcdGZpbGVOYW1lID0gZmlsZU5hbWUucmVwbGFjZSgvRmlsZTooRmlsZTp8SW1hZ2U6KT8vaSwgJ0ZpbGU6Jyk7XG5cdFx0XHRmaWxlTmFtZSA9IGRlY29kZVVSSUNvbXBvbmVudChmaWxlTmFtZSk7XG5cdFx0XHRmaWxlTmFtZXNbZmlsZU5hbWVzLmxlbmd0aF0gPSBmaWxlTmFtZTtcblx0XHR9XG5cdH1cblxuXHR0b2FzdGlmeUluc3RhbmNlLmhpZGVUb2FzdCgpO1xuXHR0b2FzdGlmeUluc3RhbmNlID0gdG9hc3RpZnkoXG5cdFx0e1xuXHRcdFx0dGV4dDogJ+iOt+WPlui/geenu+ebruagh+WujOaIkCcsXG5cdFx0XHRkdXJhdGlvbjogLTEsXG5cdFx0fSxcblx0XHQnc3VjY2Vzcydcblx0KTtcblxuXHRyZXR1cm4gdW5pcXVlQXJyYXkoZmlsZU5hbWVzKTsgLy8gUmVwbGFjZSBgWy4uLm5ldyBTZXQoKV1gIHRvIGF2b2lkIHBvbHlmaWxsaW5nIGNvcmUtanNcbn07XG5cbmV4cG9ydCB7Z2V0QWxsSW1hZ2VzfTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEscUJBQWdEQyxRQUFBLHdCQUFBOztBQ0FoRCxJQUFBQyxvQkFBa0JELFFBQUEsd0JBQUE7O0FDQ2xCLElBQUFFLHFCQUF1QkYsUUFBQSxxQkFBQTtBQUN2QixJQUFBRyxxQkFBMEJILFFBQUEsaUJBQUE7QUFFMUIsSUFBSUksbUJBQXFDO0VBQ3hDQyxXQUFXQSxNQUFNO0VBQUM7QUFDbkI7QUFFQSxJQUFNQyxjQUFBLDJCQUFBO0FBQUEsTUFBQUMsT0FBQUMsa0JBQWMsV0FBT0MsUUFBOEI7QUFDeEQsVUFBTUMsU0FBK0I7TUFDcENEO01BQ0FFLFFBQVE7TUFDUkMsUUFBUTtNQUNSQyxlQUFlO01BQ2ZDLE1BQU07TUFDTkMsU0FBUztJQUNWO0FBQ0EsVUFBTUMsV0FBQSxNQUFpQmYsa0JBQUFnQixJQUFJQyxLQUFLUixNQUFNO0FBRXRDLFdBQU9NO0VBQ1IsQ0FBQTtBQUFBLFNBQUEsU0FaTVYsYUFBQWEsSUFBQTtBQUFBLFdBQUFaLEtBQUFhLE1BQUEsTUFBQUMs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QjlELFdBQVcsSUFBSTtJQUMzQyxDQUFBLEVBQUcsRUFBRStELEtBQUssTUFBTTtBQUNmLE9BQUEsR0FBQS9GLG1CQUFBZ0csYUFBWTtJQUNiLENBQUM7RUFDRixDQUFDO0FBRURDLFNBQU9ILHVCQUF1QjlGLG1CQUFBOEY7QUFDOUJHLFNBQU90RSxlQUFlQTtBQUN2QixHQUFHOyIsCiAgIm5hbWVzIjogWyJpbXBvcnRfZXh0X2dhZGdldDQiLCAicmVxdWlyZSIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJpbXBvcnRfZXh0X2dhZGdldDIiLCAiaW1wb3J0X2V4dF9nYWRnZXQzIiwgInRvYXN0aWZ5SW5zdGFuY2UiLCAiaGlkZVRvYXN0IiwgInF1ZXJ5SW1hZ2VzIiwgIl9yZWYiLCAiX2FzeW5jVG9HZW5lcmF0b3IiLCAidGl0bGVzIiwgInBhcmFtcyIsICJhY3Rpb24iLCAiZm9ybWF0IiwgImZvcm1hdHZlcnNpb24iLCAicHJvcCIsICJpbWxpbWl0IiwgInJlc3BvbnNlIiwgImFwaSIsICJwb3N0IiwgIl94IiwgImFwcGx5IiwgImFyZ3VtZW50cyIsICJwYXJzZSIsICJfcmVmMiIsICJwYWdlIiwgIl94MiIsICJnZXRBbGxJbWFnZXMiLCAiX3JlZjMiLCAidG9hc3RpZnkiLCAidGV4dCIsICJkdXJhdGlvbiIsICJmaWxlTmFtZXMiLCAid2dBcnRpY2xlUGF0aCIsICJ3Z05hbWVzcGFjZU51bWJlciIsICJ3Z1BhZ2VOYW1lIiwgIndnU2NyaXB0IiwgIm13IiwgImNvbmZpZyIsICJnZXQiLCAibGVuZ3RoIiwgIl9pdGVyYXRvciIsICJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsICJfc3RlcCIsICJzIiwgIm4iLCAiZG9uZSIsICJ0aXRsZSIsICJ2YWx1ZSIsICJxdWVyeUltYWdlUmVzcG9uc2UiLCAicGFnZXMiLCAiaW1hZ2VzIiwgIl9pdGVyYXRvcjIiLCAiX3N0ZXAyIiwgImltYWdlSW5mbyIsICJlcnIiLCAiZSIsICJmIiwgImZpbGVMaW5rRWxlbWVudHMiLCAiX2l0ZXJhdG9yMyIsICJfc3RlcDMiLCAicGFyc2VSZXNwb25zZSIsICJwYWdlQ29udGVudCIsICJkb2N1bWVudCIsICJjcmVhdGVFbGVtZW50IiwgImlubmVySFRNTCIsICJxdWVyeVNlbGVjdG9yQWxsIiwgImFydGljbGVSZWdleCIsICJSZWdFeHAiLCAiY29uY2F0IiwgInJlcGxhY2UiLCAic2NyaXB0UmVnZXgiLCAiX2l0ZXJhdG9yNCIsICJ1bmlxdWVBcnJheSIsICJfc3RlcDQiLCAiZWxlbWVudCIsICJocmVmIiwgImNsYXNzTGlzdCIsICJpbmNsdWRlcyIsICJjb250YWlucyIsICJmaWxlTmFtZSIsICJ0ZXN0IiwgIm1hdGNoIiwgImV4ZWMiLCAiZGVjb2RlVVJJQ29tcG9uZW50IiwgIl94MyIsICJxdWlja0ltcG9ydEFsbE1lZGlhIiwgIndnQ2Fub25pY2FsU3BlY2lhbFBhZ2VOYW1lIiwgIndnQ3VyUmV2aXNpb25JZCIsICJwb3J0bGV0SWQiLCAicXVlcnlTZWxlY3RvciIsICJ1dGlsIiwgImFkZFBvcnRsZXRMaW5rIiwgImFkZEV2ZW50TGlzdGVuZXIiLCAiZGV0ZWN0SWZGaWxlUmVkaXJlY3QiLCAidGhlbiIsICJyZWZyZXNoUGFnZSIsICJ3aW5kb3ciXQp9Cg==

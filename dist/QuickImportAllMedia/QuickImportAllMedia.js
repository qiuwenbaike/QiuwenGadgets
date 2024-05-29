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
      if (wgNamespaceNumber < 0) {
        titles = [];
      } else {
        titles = [wgPageName];
      }
    }
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
    let fileLinkElements = [];
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1F1aWNrSW1wb3J0QWxsTWVkaWEvUXVpY2tJbXBvcnRBbGxNZWRpYS50cyIsICJzcmMvUXVpY2tJbXBvcnRBbGxNZWRpYS9tb2R1bGVzL2FwaS50cyIsICJzcmMvUXVpY2tJbXBvcnRBbGxNZWRpYS9tb2R1bGVzL2NvcmUudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7ZGV0ZWN0SWZGaWxlUmVkaXJlY3QsIHJlZnJlc2hQYWdlfSBmcm9tICdleHQuZ2FkZ2V0LlF1aWNrSW1wb3J0JztcbmltcG9ydCB7Z2V0QWxsSW1hZ2VzfSBmcm9tICcuL21vZHVsZXMvY29yZSc7XG5cbmRlY2xhcmUgZ2xvYmFsIHtcblx0aW50ZXJmYWNlIFdpbmRvdyB7XG5cdFx0ZGV0ZWN0SWZGaWxlUmVkaXJlY3Q6IERldGVjdElmRmlsZVJlZGlyZWN0O1xuXHRcdGdldEFsbEltYWdlczogdHlwZW9mIGdldEFsbEltYWdlcztcblx0fVxufVxuXG4oZnVuY3Rpb24gcXVpY2tJbXBvcnRBbGxNZWRpYSgpOiB2b2lkIHtcblx0Y29uc3Qge3dnQ2Fub25pY2FsU3BlY2lhbFBhZ2VOYW1lLCB3Z0N1clJldmlzaW9uSWR9ID0gbXcuY29uZmlnLmdldCgpO1xuXHRpZiAoXG5cdFx0IShcblx0XHRcdHdnQ3VyUmV2aXNpb25JZCB8fFxuXHRcdFx0WydQcmVmaXhpbmRleCcsICdCcm9rZW5SZWRpcmVjdHMnLCAnV2FudGVkZmlsZXMnXS5pbmNsdWRlcyh3Z0Nhbm9uaWNhbFNwZWNpYWxQYWdlTmFtZSB8fCAnJylcblx0XHQpXG5cdCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IHBvcnRsZXRJZDogJ3AtY2FjdGlvbnMnIHwgJ3AtdGInID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3AtY2FjdGlvbnMnKSA/ICdwLWNhY3Rpb25zJyA6ICdwLXRiJztcblx0Y29uc3QgZWxlbWVudDogSFRNTExJRWxlbWVudCB8IG51bGwgPSBtdy51dGlsLmFkZFBvcnRsZXRMaW5rKHBvcnRsZXRJZCwgJyMnLCAn5a+85YWl5q2k6aG16Z2i5omA5pyJ5paH5Lu2JywgJ3QtaW1wb3J0Jyk7XG5cdGlmICghZWxlbWVudCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKTogdm9pZCA9PiB7XG5cdFx0dm9pZCAoYXN5bmMgKCkgPT4ge1xuXHRcdFx0Y29uc3QgZmlsZU5hbWVzID0gYXdhaXQgZ2V0QWxsSW1hZ2VzKCk7XG5cdFx0XHRpZiAoIWZpbGVOYW1lcy5sZW5ndGgpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0YXdhaXQgZGV0ZWN0SWZGaWxlUmVkaXJlY3QoZmlsZU5hbWVzLCB0cnVlKTtcblx0XHR9KSgpLnRoZW4oKCkgPT4ge1xuXHRcdFx0cmVmcmVzaFBhZ2UoKTtcblx0XHR9KTtcblx0fSk7XG5cblx0d2luZG93LmRldGVjdElmRmlsZVJlZGlyZWN0ID0gZGV0ZWN0SWZGaWxlUmVkaXJlY3Q7XG5cdHdpbmRvdy5nZXRBbGxJbWFnZXMgPSBnZXRBbGxJbWFnZXM7XG59KSgpO1xuIiwgImV4cG9ydCB7YXBpfSBmcm9tICdleHQuZ2FkZ2V0LlF1aWNrSW1wb3J0JztcbiIsICJpbXBvcnQge2FwaX0gZnJvbSAnLi9hcGknO1xuaW1wb3J0IHt0b2FzdGlmeX0gZnJvbSAnZXh0LmdhZGdldC5Ub2FzdGlmeSc7XG5pbXBvcnQge3VuaXF1ZUFycmF5fSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG5sZXQgdG9hc3RpZnlJbnN0YW5jZTogVG9hc3RpZnlJbnN0YW5jZSA9IHtcblx0aGlkZVRvYXN0OiAoKSA9PiB7fSxcbn07XG5cbmNvbnN0IHF1ZXJ5SW1hZ2VzID0gYXN5bmMgKHRpdGxlczogc3RyaW5nIHwgc3RyaW5nW10pID0+IHtcblx0Y29uc3QgcGFyYW1zOiBBcGlRdWVyeUltYWdlc1BhcmFtcyA9IHtcblx0XHR0aXRsZXMsXG5cdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRwcm9wOiAnaW1hZ2VzJyxcblx0XHRpbWxpbWl0OiA1MDAwLFxuXHR9O1xuXHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGFwaS5wb3N0KHBhcmFtcyk7XG5cblx0cmV0dXJuIHJlc3BvbnNlO1xufTtcblxuY29uc3QgcGFyc2UgPSBhc3luYyAocGFnZTogc3RyaW5nKSA9PiB7XG5cdGNvbnN0IHBhcmFtczogQXBpUGFyc2VQYXJhbXMgPSB7XG5cdFx0cGFnZSxcblx0XHRhY3Rpb246ICdwYXJzZScsXG5cdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdHByb3A6ICd0ZXh0Jyxcblx0fTtcblx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGkucG9zdChwYXJhbXMpO1xuXG5cdHJldHVybiByZXNwb25zZTtcbn07XG5cbmNvbnN0IGdldEFsbEltYWdlcyA9IGFzeW5jICh0aXRsZXM/OiBzdHJpbmcgfCBzdHJpbmdbXSk6IFByb21pc2U8c3RyaW5nW10+ID0+IHtcblx0dG9hc3RpZnlJbnN0YW5jZS5oaWRlVG9hc3QoKTtcblx0dG9hc3RpZnkoXG5cdFx0e1xuXHRcdFx0dGV4dDogJ+ato+WcqOiOt+WPlui/geenu+ebruaghycsXG5cdFx0XHRkdXJhdGlvbjogLTEsXG5cdFx0fSxcblx0XHQnaW5mbydcblx0KTtcblxuXHRjb25zdCBmaWxlTmFtZXM6IHN0cmluZ1tdID0gW107XG5cdGNvbnN0IHt3Z0FydGljbGVQYXRoLCB3Z05hbWVzcGFjZU51bWJlciwgd2dQYWdlTmFtZSwgd2dTY3JpcHR9ID0gbXcuY29uZmlnLmdldCgpO1xuXG5cdGlmICghdGl0bGVzIHx8ICF0aXRsZXMubGVuZ3RoKSB7XG5cdFx0aWYgKHdnTmFtZXNwYWNlTnVtYmVyIDwgMCkge1xuXHRcdFx0dGl0bGVzID0gW107XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRpdGxlcyA9IFt3Z1BhZ2VOYW1lXTtcblx0XHR9XG5cdH1cblxuXHQvLyBBbmFseXplIHN0ZXAgMTogUXVlcnlcblx0dHJ5IHtcblx0XHRmb3IgKGNvbnN0IHRpdGxlIG9mIHRpdGxlcykge1xuXHRcdFx0Y29uc3QgcXVlcnlJbWFnZVJlc3BvbnNlID0gYXdhaXQgcXVlcnlJbWFnZXModGl0bGUpO1xuXHRcdFx0aWYgKFxuXHRcdFx0XHRxdWVyeUltYWdlUmVzcG9uc2VbJ3F1ZXJ5J10gJiZcblx0XHRcdFx0cXVlcnlJbWFnZVJlc3BvbnNlWydxdWVyeSddLnBhZ2VzWzBdICYmXG5cdFx0XHRcdHF1ZXJ5SW1hZ2VSZXNwb25zZVsncXVlcnknXS5wYWdlc1swXS5pbWFnZXNcblx0XHRcdCkge1xuXHRcdFx0XHRmb3IgKGNvbnN0IGltYWdlSW5mbyBvZiBxdWVyeUltYWdlUmVzcG9uc2VbJ3F1ZXJ5J10ucGFnZXNbMF0uaW1hZ2VzIGFzIHtcblx0XHRcdFx0XHRuczogbnVtYmVyO1xuXHRcdFx0XHRcdHRpdGxlOiBzdHJpbmc7XG5cdFx0XHRcdH1bXSkge1xuXHRcdFx0XHRcdGlmICghaW1hZ2VJbmZvIHx8ICFpbWFnZUluZm8udGl0bGUpIHtcblx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRmaWxlTmFtZXNbZmlsZU5hbWVzLmxlbmd0aF0gPSBpbWFnZUluZm8udGl0bGU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH0gY2F0Y2gge31cblxuXHQvLyBBbmFseXplIHN0ZXAgMjogRmluZCBmcm9tIHBhZ2VzXG5cdGxldCBmaWxlTGlua0VsZW1lbnRzOiBIVE1MQW5jaG9yRWxlbWVudFtdID0gW107XG5cblx0dHJ5IHtcblx0XHRmb3IgKGNvbnN0IHRpdGxlIG9mIHRpdGxlcykge1xuXHRcdFx0Y29uc3QgcGFyc2VSZXNwb25zZSA9IGF3YWl0IHBhcnNlKHRpdGxlKTtcblx0XHRcdGlmIChwYXJzZVJlc3BvbnNlWydwYXJzZSddICYmIHBhcnNlUmVzcG9uc2VbJ3BhcnNlJ10udGV4dCkge1xuXHRcdFx0XHRjb25zdCBwYWdlQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcblx0XHRcdFx0cGFnZUNvbnRlbnQuaW5uZXJIVE1MID0gcGFyc2VSZXNwb25zZVsncGFyc2UnXS50ZXh0IGFzIHN0cmluZztcblxuXHRcdFx0XHRmaWxlTGlua0VsZW1lbnRzID0gW1xuXHRcdFx0XHRcdC4uLnBhZ2VDb250ZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEFuY2hvckVsZW1lbnQ+KFwiYVtocmVmXj0nL3dpa2kvRmlsZTonXVwiKSxcblx0XHRcdFx0XHQuLi5wYWdlQ29udGVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxBbmNob3JFbGVtZW50PihcImFbaHJlZio9J3RpdGxlPUZpbGU6J11cIiksXG5cdFx0XHRcdF07XG5cdFx0XHR9XG5cdFx0fVxuXHR9IGNhdGNoIHt9XG5cblx0ZmlsZUxpbmtFbGVtZW50cyA9IFtcblx0XHQuLi5maWxlTGlua0VsZW1lbnRzLFxuXHRcdC4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEFuY2hvckVsZW1lbnQ+KFwiYVtocmVmXj0nL3dpa2kvRmlsZTonXVwiKSxcblx0XHQuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxBbmNob3JFbGVtZW50PihcImFbaHJlZio9J3RpdGxlPUZpbGU6J11cIiksXG5cdF07XG5cblx0Y29uc3QgYXJ0aWNsZVJlZ2V4OiBSZWdFeHAgPSBuZXcgUmVnRXhwKGAke3dnQXJ0aWNsZVBhdGgucmVwbGFjZSgnJDEnLCAnJyl9KEZpbGU6W14jXSspYCk7XG5cdGNvbnN0IHNjcmlwdFJlZ2V4OiBSZWdFeHAgPSBuZXcgUmVnRXhwKGAke3dnU2NyaXB0fVxcXFw/dGl0bGU9KEZpbGU6W14jJl0rKWApO1xuXG5cdGZvciAoY29uc3QgZWxlbWVudCBvZiB1bmlxdWVBcnJheShmaWxlTGlua0VsZW1lbnRzKSkge1xuXHRcdC8vIFJlcGxhY2UgYG5ldyBTZXQoKWAgdG8gYXZvaWQgcG9seWZpbGxpbmcgY29yZS1qc1xuXHRcdGNvbnN0IHtocmVmLCBjbGFzc0xpc3R9ID0gZWxlbWVudDtcblxuXHRcdGlmICghaHJlZiB8fCBocmVmLmluY2x1ZGVzKCdyZWRsaW5rPTEnKSkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0aWYgKGNsYXNzTGlzdC5jb250YWlucygnbmV3JykpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGxldCBmaWxlTmFtZTogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXHRcdGlmIChhcnRpY2xlUmVnZXgudGVzdChocmVmKSkge1xuXHRcdFx0Y29uc3QgbWF0Y2g6IFJlZ0V4cEV4ZWNBcnJheSA9IGFydGljbGVSZWdleC5leGVjKGhyZWYpIGFzIFJlZ0V4cEV4ZWNBcnJheTtcblx0XHRcdGZpbGVOYW1lID0gbWF0Y2hbMV0gYXMgc3RyaW5nO1xuXHRcdFx0ZmlsZU5hbWUgPSBmaWxlTmFtZS5yZXBsYWNlKC9GaWxlOihGaWxlOnxJbWFnZTopPy9pLCAnRmlsZTonKTtcblx0XHRcdGZpbGVOYW1lID0gZGVjb2RlVVJJQ29tcG9uZW50KGZpbGVOYW1lKTtcblx0XHRcdGZpbGVOYW1lc1tmaWxlTmFtZXMubGVuZ3RoXSA9IGZpbGVOYW1lO1xuXHRcdH1cblxuXHRcdGlmIChzY3JpcHRSZWdleC50ZXN0KGhyZWYpKSB7XG5cdFx0XHRjb25zdCBtYXRjaDogUmVnRXhwRXhlY0FycmF5ID0gc2NyaXB0UmVnZXguZXhlYyhocmVmKSBhcyBSZWdFeHBFeGVjQXJyYXk7XG5cdFx0XHRmaWxlTmFtZSA9IG1hdGNoWzFdIGFzIHN0cmluZztcblx0XHRcdGZpbGVOYW1lID0gZmlsZU5hbWUucmVwbGFjZSgvRmlsZTooRmlsZTp8SW1hZ2U6KT8vaSwgJ0ZpbGU6Jyk7XG5cdFx0XHRmaWxlTmFtZSA9IGRlY29kZVVSSUNvbXBvbmVudChmaWxlTmFtZSk7XG5cdFx0XHRmaWxlTmFtZXNbZmlsZU5hbWVzLmxlbmd0aF0gPSBmaWxlTmFtZTtcblx0XHR9XG5cdH1cblxuXHR0b2FzdGlmeUluc3RhbmNlLmhpZGVUb2FzdCgpO1xuXHR0b2FzdGlmeUluc3RhbmNlID0gdG9hc3RpZnkoXG5cdFx0e1xuXHRcdFx0dGV4dDogJ+iOt+WPlui/geenu+ebruagh+WujOaIkCcsXG5cdFx0XHRkdXJhdGlvbjogLTEsXG5cdFx0fSxcblx0XHQnc3VjY2Vzcydcblx0KTtcblxuXHRyZXR1cm4gdW5pcXVlQXJyYXkoZmlsZU5hbWVzKTsgLy8gUmVwbGFjZSBgWy4uLm5ldyBTZXQoKV1gIHRvIGF2b2lkIHBvbHlmaWxsaW5nIGNvcmUtanNcbn07XG5cbmV4cG9ydCB7Z2V0QWxsSW1hZ2VzfTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEscUJBQWdEQyxRQUFBLHdCQUFBOztBQ0FoRCxJQUFBQyxvQkFBa0JELFFBQUEsd0JBQUE7O0FDQ2xCLElBQUFFLHFCQUF1QkYsUUFBQSxxQkFBQTtBQUN2QixJQUFBRyxxQkFBMEJILFFBQUEsaUJBQUE7QUFFMUIsSUFBSUksbUJBQXFDO0VBQ3hDQyxXQUFXQSxNQUFNO0VBQUM7QUFDbkI7QUFFQSxJQUFNQyxjQUFBLDJCQUFBO0FBQUEsTUFBQUMsT0FBQUMsa0JBQWMsV0FBT0MsUUFBOEI7QUFDeEQsVUFBTUMsU0FBK0I7TUFDcENEO01BQ0FFLFFBQVE7TUFDUkMsUUFBUTtNQUNSQyxlQUFlO01BQ2ZDLE1BQU07TUFDTkMsU0FBUztJQUNWO0FBQ0EsVUFBTUMsV0FBQSxNQUFpQmYsa0JBQUFnQixJQUFJQyxLQUFLUixNQUFNO0FBRXRDLFdBQU9NO0VBQ1IsQ0FBQTtBQUFBLFNBQUEsU0FaTVYsYUFBQWEsSUFBQTtBQUFBLFdBQUFaLEtBQUFhLE1BQUEsTUFBQUMsU0FBQTtFQUFBO0FBQUEsRUFBQTtBQWNOLElBQU1DLFFBQUEsMkJBQUE7QUFBQSxNQUFBQyxRQUFBZixrQkFBUSxXQUFP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QztFQUNGLENBQUM7QUFFREMsU0FBT0gsdUJBQXVCOUYsbUJBQUE4RjtBQUM5QkcsU0FBT3RFLGVBQWVBO0FBQ3ZCLEdBQUc7IiwKICAibmFtZXMiOiBbImltcG9ydF9leHRfZ2FkZ2V0NCIsICJyZXF1aXJlIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgImltcG9ydF9leHRfZ2FkZ2V0MiIsICJpbXBvcnRfZXh0X2dhZGdldDMiLCAidG9hc3RpZnlJbnN0YW5jZSIsICJoaWRlVG9hc3QiLCAicXVlcnlJbWFnZXMiLCAiX3JlZiIsICJfYXN5bmNUb0dlbmVyYXRvciIsICJ0aXRsZXMiLCAicGFyYW1zIiwgImFjdGlvbiIsICJmb3JtYXQiLCAiZm9ybWF0dmVyc2lvbiIsICJwcm9wIiwgImltbGltaXQiLCAicmVzcG9uc2UiLCAiYXBpIiwgInBvc3QiLCAiX3giLCAiYXBwbHkiLCAiYXJndW1lbnRzIiwgInBhcnNlIiwgIl9yZWYyIiwgInBhZ2UiLCAiX3gyIiwgImdldEFsbEltYWdlcyIsICJfcmVmMyIsICJ0b2FzdGlmeSIsICJ0ZXh0IiwgImR1cmF0aW9uIiwgImZpbGVOYW1lcyIsICJ3Z0FydGljbGVQYXRoIiwgIndnTmFtZXNwYWNlTnVtYmVyIiwgIndnUGFnZU5hbWUiLCAid2dTY3JpcHQiLCAibXciLCAiY29uZmlnIiwgImdldCIsICJsZW5ndGgiLCAiX2l0ZXJhdG9yIiwgIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwgIl9zdGVwIiwgInMiLCAibiIsICJkb25lIiwgInRpdGxlIiwgInZhbHVlIiwgInF1ZXJ5SW1hZ2VSZXNwb25zZSIsICJwYWdlcyIsICJpbWFnZXMiLCAiX2l0ZXJhdG9yMiIsICJfc3RlcDIiLCAiaW1hZ2VJbmZvIiwgImVyciIsICJlIiwgImYiLCAiZmlsZUxpbmtFbGVtZW50cyIsICJfaXRlcmF0b3IzIiwgIl9zdGVwMyIsICJwYXJzZVJlc3BvbnNlIiwgInBhZ2VDb250ZW50IiwgImRvY3VtZW50IiwgImNyZWF0ZUVsZW1lbnQiLCAiaW5uZXJIVE1MIiwgInF1ZXJ5U2VsZWN0b3JBbGwiLCAiYXJ0aWNsZVJlZ2V4IiwgIlJlZ0V4cCIsICJjb25jYXQiLCAicmVwbGFjZSIsICJzY3JpcHRSZWdleCIsICJfaXRlcmF0b3I0IiwgInVuaXF1ZUFycmF5IiwgIl9zdGVwNCIsICJlbGVtZW50IiwgImhyZWYiLCAiY2xhc3NMaXN0IiwgImluY2x1ZGVzIiwgImNvbnRhaW5zIiwgImZpbGVOYW1lIiwgInRlc3QiLCAibWF0Y2giLCAiZXhlYyIsICJkZWNvZGVVUklDb21wb25lbnQiLCAiX3gzIiwgInF1aWNrSW1wb3J0QWxsTWVkaWEiLCAid2dDYW5vbmljYWxTcGVjaWFsUGFnZU5hbWUiLCAid2dDdXJSZXZpc2lvbklkIiwgInBvcnRsZXRJZCIsICJxdWVyeVNlbGVjdG9yIiwgInV0aWwiLCAiYWRkUG9ydGxldExpbmsiLCAiYWRkRXZlbnRMaXN0ZW5lciIsICJkZXRlY3RJZkZpbGVSZWRpcmVjdCIsICJ0aGVuIiwgInJlZnJlc2hQYWdlIiwgIndpbmRvdyJdCn0K

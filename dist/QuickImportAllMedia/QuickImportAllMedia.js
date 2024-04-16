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
        var _queryImageResponse$q, _queryImageResponse$q2, _queryImageResponse$q3;
        const queryImageParams = {
          action: "query",
          format: "json",
          formatversion: "2",
          prop: "images",
          titles: wgPageName,
          imlimit: 5e3
        };
        const queryImageResponse = yield import_ext_gadget.api.get(queryImageParams);
        if (!queryImageResponse["query"] || !((_queryImageResponse$q = queryImageResponse["query"]) !== null && _queryImageResponse$q !== void 0 && _queryImageResponse$q.pages[0]) || !((_queryImageResponse$q2 = queryImageResponse["query"]) !== null && _queryImageResponse$q2 !== void 0 && _queryImageResponse$q2.pages[0].images)) {
          return;
        }
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
      } catch {
      }
    }
    let fileLinkElements = [];
    if (!(wgNamespaceNumber < 0) || wgNamespaceNumber === 6) {
      try {
        var _parseResponse$parse, _parseResponse$parse2;
        const parseParams = {
          action: "parse",
          format: "json",
          formatversion: "2",
          prop: "text",
          page: wgPageName
        };
        const parseResponse = yield import_ext_gadget.api.get(parseParams);
        if (!parseResponse["parse"] || !((_parseResponse$parse = parseResponse["parse"]) !== null && _parseResponse$parse !== void 0 && _parseResponse$parse.text)) {
          return;
        }
        const pageContent = document.createElement("span");
        pageContent.innerHTML = (_parseResponse$parse2 = parseResponse["parse"]) === null || _parseResponse$parse2 === void 0 ? void 0 : _parseResponse$parse2.text;
        fileLinkElements = [...pageContent.querySelectorAll("a[href^='/wiki/File:']"), ...pageContent.querySelectorAll("a[href*='title=File:']")];
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
      var _yield$getAllImages;
      const fileNames = (_yield$getAllImages = yield getAllImages()) !== null && _yield$getAllImages !== void 0 ? _yield$getAllImages : [];
      if (!fileNames.length) {
        return;
      }
      yield (0, import_ext_gadget3.detectIfFileRedirect)([...new Set(fileNames)], true);
    })().then(() => {
      const {
        wgPageName
      } = mw.config.get();
      void (0, import_ext_gadget3.refreshPage)(wgPageName);
    });
  });
})();

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1F1aWNrSW1wb3J0QWxsTWVkaWEvUXVpY2tJbXBvcnRBbGxNZWRpYS50cyIsICJzcmMvUXVpY2tJbXBvcnRBbGxNZWRpYS9tb2R1bGVzL2FwaS50cyIsICJzcmMvUXVpY2tJbXBvcnRBbGxNZWRpYS9tb2R1bGVzL2NvcmUudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7ZGV0ZWN0SWZGaWxlUmVkaXJlY3QsIHJlZnJlc2hQYWdlfSBmcm9tICdleHQuZ2FkZ2V0LlF1aWNrSW1wb3J0JztcbmltcG9ydCB7Z2V0QWxsSW1hZ2VzfSBmcm9tICcuL21vZHVsZXMvY29yZSc7XG5cbihmdW5jdGlvbiBxdWlja0ltcG9ydEFsbE1lZGlhKCk6IHZvaWQge1xuXHRjb25zdCB7d2dDYW5vbmljYWxTcGVjaWFsUGFnZU5hbWUsIHdnQ3VyUmV2aXNpb25JZH0gPSBtdy5jb25maWcuZ2V0KCk7XG5cdGlmIChcblx0XHQhKFxuXHRcdFx0d2dDdXJSZXZpc2lvbklkIHx8XG5cdFx0XHRbJ1ByZWZpeGluZGV4JywgJ0Jyb2tlblJlZGlyZWN0cycsICdXYW50ZWRmaWxlcyddLmluY2x1ZGVzKHdnQ2Fub25pY2FsU3BlY2lhbFBhZ2VOYW1lIHx8ICcnKVxuXHRcdClcblx0KSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgcG9ydGxldElkOiAncC1jYWN0aW9ucycgfCAncC10YicgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcC1jYWN0aW9ucycpID8gJ3AtY2FjdGlvbnMnIDogJ3AtdGInO1xuXHRjb25zdCBlbGVtZW50OiBIVE1MTElFbGVtZW50IHwgbnVsbCA9IG13LnV0aWwuYWRkUG9ydGxldExpbmsocG9ydGxldElkLCAnIycsICflr7zlhaXmraTpobXpnaLmiYDmnInmlofku7YnLCAndC1pbXBvcnQnKTtcblx0aWYgKCFlbGVtZW50KSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpOiB2b2lkID0+IHtcblx0XHR2b2lkIChhc3luYyAoKSA9PiB7XG5cdFx0XHRjb25zdCBmaWxlTmFtZXM6IHN0cmluZ1tdID0gKGF3YWl0IGdldEFsbEltYWdlcygpKSA/PyBbXTtcblx0XHRcdGlmICghZmlsZU5hbWVzLmxlbmd0aCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRhd2FpdCBkZXRlY3RJZkZpbGVSZWRpcmVjdChbLi4ubmV3IFNldChmaWxlTmFtZXMpXSwgdHJ1ZSk7XG5cdFx0fSkoKS50aGVuKCgpID0+IHtcblx0XHRcdGNvbnN0IHt3Z1BhZ2VOYW1lfSA9IG13LmNvbmZpZy5nZXQoKTtcblx0XHRcdHZvaWQgcmVmcmVzaFBhZ2Uod2dQYWdlTmFtZSk7XG5cdFx0fSk7XG5cdH0pO1xufSkoKTtcbiIsICJleHBvcnQge2FwaX0gZnJvbSAnZXh0LmdhZGdldC5RdWlja0ltcG9ydCc7XG4iLCAiaW1wb3J0IHthcGl9IGZyb20gJy4vYXBpJztcbmltcG9ydCB7dG9hc3RpZnl9IGZyb20gJ2V4dC5nYWRnZXQuVG9hc3RpZnknO1xuXG5sZXQgdG9hc3RpZnlJbnN0YW5jZTogVG9hc3RpZnlJbnN0YW5jZSA9IHtcblx0aGlkZVRvYXN0OiAoKSA9PiB7fSxcbn07XG5cbmNvbnN0IGdldEFsbEltYWdlcyA9IGFzeW5jICgpID0+IHtcblx0dG9hc3RpZnlJbnN0YW5jZS5oaWRlVG9hc3QoKTtcblx0dG9hc3RpZnkoXG5cdFx0e1xuXHRcdFx0dGV4dDogJ+ato+WcqOiOt+WPlui/geenu+ebruaghycsXG5cdFx0XHRkdXJhdGlvbjogLTEsXG5cdFx0fSxcblx0XHQnaW5mbydcblx0KTtcblxuXHRjb25zdCBmaWxlTmFtZXM6IHN0cmluZ1tdID0gW107XG5cdGNvbnN0IHt3Z0FydGljbGVQYXRoLCB3Z05hbWVzcGFjZU51bWJlciwgd2dQYWdlTmFtZSwgd2dTY3JpcHR9ID0gbXcuY29uZmlnLmdldCgpO1xuXG5cdC8vIEFuYWx5emUgc3RlcCAxOiBRdWVyeVxuXHRpZiAoISh3Z05hbWVzcGFjZU51bWJlciA8IDApKSB7XG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IHF1ZXJ5SW1hZ2VQYXJhbXM6IEFwaVF1ZXJ5SW1hZ2VzUGFyYW1zID0ge1xuXHRcdFx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0XHRcdHByb3A6ICdpbWFnZXMnLFxuXHRcdFx0XHR0aXRsZXM6IHdnUGFnZU5hbWUsXG5cdFx0XHRcdGltbGltaXQ6IDUwMDAsXG5cdFx0XHR9O1xuXG5cdFx0XHRjb25zdCBxdWVyeUltYWdlUmVzcG9uc2UgPSBhd2FpdCBhcGkuZ2V0KHF1ZXJ5SW1hZ2VQYXJhbXMpO1xuXHRcdFx0aWYgKFxuXHRcdFx0XHQhcXVlcnlJbWFnZVJlc3BvbnNlWydxdWVyeSddIHx8XG5cdFx0XHRcdCFxdWVyeUltYWdlUmVzcG9uc2VbJ3F1ZXJ5J10/LnBhZ2VzWzBdIHx8XG5cdFx0XHRcdCFxdWVyeUltYWdlUmVzcG9uc2VbJ3F1ZXJ5J10/LnBhZ2VzWzBdLmltYWdlc1xuXHRcdFx0KSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0Zm9yIChjb25zdCBpbWFnZUluZm8gb2YgcXVlcnlJbWFnZVJlc3BvbnNlWydxdWVyeSddPy5wYWdlc1swXS5pbWFnZXMgYXMge25zOiBudW1iZXI7IHRpdGxlOiBzdHJpbmd9W10pIHtcblx0XHRcdFx0aWYgKCFpbWFnZUluZm8gfHwgIWltYWdlSW5mby50aXRsZSkge1xuXHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGZpbGVOYW1lc1tmaWxlTmFtZXMubGVuZ3RoXSA9IGltYWdlSW5mby50aXRsZTtcblx0XHRcdH1cblx0XHR9IGNhdGNoIHt9XG5cdH1cblxuXHQvLyBBbmFseXplIHN0ZXAgMjogRmluZCBmcm9tIHBhZ2VzXG5cdGxldCBmaWxlTGlua0VsZW1lbnRzOiBIVE1MQW5jaG9yRWxlbWVudFtdID0gW107XG5cblx0aWYgKCEod2dOYW1lc3BhY2VOdW1iZXIgPCAwKSB8fCB3Z05hbWVzcGFjZU51bWJlciA9PT0gNikge1xuXHRcdHRyeSB7XG5cdFx0XHRjb25zdCBwYXJzZVBhcmFtczogQXBpUGFyc2VQYXJhbXMgPSB7XG5cdFx0XHRcdGFjdGlvbjogJ3BhcnNlJyxcblx0XHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRcdFx0cHJvcDogJ3RleHQnLFxuXHRcdFx0XHRwYWdlOiB3Z1BhZ2VOYW1lLFxuXHRcdFx0fTtcblxuXHRcdFx0Y29uc3QgcGFyc2VSZXNwb25zZSA9IGF3YWl0IGFwaS5nZXQocGFyc2VQYXJhbXMpO1xuXHRcdFx0aWYgKCFwYXJzZVJlc3BvbnNlWydwYXJzZSddIHx8ICFwYXJzZVJlc3BvbnNlWydwYXJzZSddPy50ZXh0KSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0Y29uc3QgcGFnZUNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5cdFx0XHRwYWdlQ29udGVudC5pbm5lckhUTUwgPSBwYXJzZVJlc3BvbnNlWydwYXJzZSddPy50ZXh0IGFzIHN0cmluZztcblxuXHRcdFx0ZmlsZUxpbmtFbGVtZW50cyA9IFtcblx0XHRcdFx0Li4ucGFnZUNvbnRlbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MQW5jaG9yRWxlbWVudD4oXCJhW2hyZWZePScvd2lraS9GaWxlOiddXCIpLFxuXHRcdFx0XHQuLi5wYWdlQ29udGVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxBbmNob3JFbGVtZW50PihcImFbaHJlZio9J3RpdGxlPUZpbGU6J11cIiksXG5cdFx0XHRdO1xuXHRcdH0gY2F0Y2gge31cblx0fVxuXG5cdGZpbGVMaW5rRWxlbWVudHMgPSBbXG5cdFx0Li4uZmlsZUxpbmtFbGVtZW50cyxcblx0XHQuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxBbmNob3JFbGVtZW50PihcImFbaHJlZl49Jy93aWtpL0ZpbGU6J11cIiksXG5cdFx0Li4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MQW5jaG9yRWxlbWVudD4oXCJhW2hyZWYqPSd0aXRsZT1GaWxlOiddXCIpLFxuXHRdO1xuXG5cdGNvbnN0IGFydGljbGVSZWdleDogUmVnRXhwID0gbmV3IFJlZ0V4cChgJHt3Z0FydGljbGVQYXRoLnJlcGxhY2UoJyQxJywgJycpfShGaWxlOlteI10rKWApO1xuXHRjb25zdCBzY3JpcHRSZWdleDogUmVnRXhwID0gbmV3IFJlZ0V4cChgJHt3Z1NjcmlwdH1cXFxcP3RpdGxlPShGaWxlOlteIyZdKylgKTtcblxuXHRmb3IgKGNvbnN0IGVsZW1lbnQgb2YgZmlsZUxpbmtFbGVtZW50cykge1xuXHRcdGNvbnN0IHtocmVmfSA9IGVsZW1lbnQ7XG5cblx0XHRpZiAoIWhyZWYpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGxldCBmaWxlTmFtZTogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXHRcdGlmIChhcnRpY2xlUmVnZXgudGVzdChocmVmKSkge1xuXHRcdFx0Y29uc3QgbWF0Y2g6IFJlZ0V4cEV4ZWNBcnJheSA9IGFydGljbGVSZWdleC5leGVjKGhyZWYpIGFzIFJlZ0V4cEV4ZWNBcnJheTtcblx0XHRcdGZpbGVOYW1lID0gbWF0Y2hbMV0gYXMgc3RyaW5nO1xuXHRcdH0gZWxzZSBpZiAoc2NyaXB0UmVnZXgudGVzdChocmVmKSkge1xuXHRcdFx0Y29uc3QgbWF0Y2g6IFJlZ0V4cEV4ZWNBcnJheSA9IHNjcmlwdFJlZ2V4LmV4ZWMoaHJlZikgYXMgUmVnRXhwRXhlY0FycmF5O1xuXHRcdFx0ZmlsZU5hbWUgPSBtYXRjaFsxXSBhcyBzdHJpbmc7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGZpbGVOYW1lID0gZmlsZU5hbWUucmVwbGFjZSgvRmlsZTooRmlsZTp8SW1hZ2U6KT8vaSwgJ0ZpbGU6Jyk7XG5cdFx0ZmlsZU5hbWVzW2ZpbGVOYW1lcy5sZW5ndGhdID0gZmlsZU5hbWU7XG5cdH1cblxuXHR0b2FzdGlmeUluc3RhbmNlLmhpZGVUb2FzdCgpO1xuXHR0b2FzdGlmeUluc3RhbmNlID0gdG9hc3RpZnkoXG5cdFx0e1xuXHRcdFx0dGV4dDogJ+iOt+WPlui/geenu+ebruagh+WujOaIkCcsXG5cdFx0XHRkdXJhdGlvbjogLTEsXG5cdFx0fSxcblx0XHQnc3VjY2Vzcydcblx0KTtcblxuXHRyZXR1cm4gWy4uLm5ldyBTZXQoZmlsZU5hbWVzKV07XG59O1xuXG5leHBvcnQge2dldEFsbEltYWdlc307XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEscUJBQWdEQyxRQUFBLHdCQUFBOztBQ0FoRCxJQUFBQyxvQkFBa0JELFFBQUEsd0JBQUE7O0FDQ2xCLElBQUFFLHFCQUF1QkYsUUFBQSxxQkFBQTtBQUV2QixJQUFJRyxtQkFBcUM7RUFDeENDLFdBQVdBLE1BQU07RUFBQztBQUNuQjtBQUVBLElBQU1DLGVBQUEsMkJBQUE7QUFBQSxNQUFBQyxPQUFBQyxrQkFBZSxhQUFZO0FBQ2hDSixxQkFBaUJDLFVBQVU7QUFDM0IsS0FBQSxHQUFBRixtQkFBQU0sVUFDQztNQUNDQyxNQUFNO01BQ05DLFVBQVU7SUFDWCxHQUNBLE1BQ0Q7QUFFQSxVQUFNQyxZQUFzQixDQUFBO0FBQzVCLFVBQU07TUFBQ0M7TUFBZUM7TUFBbUJDO01BQVlDO0lBQVEsSUFBSUMsR0FBR0MsT0FBT0MsSUFBSTtBQUcvRSxRQUFJLEVBQUVMLG9CQUFvQixJQUFJO0FBQzdCLFVBQUk7QUFBQSxZQUFBTSx1QkFBQUMsd0JBQUFDO0FBQ0gsY0FBTUMsbUJBQXlDO1VBQzlDQyxRQUFRO1VBQ1JDLFFBQVE7VUFDUkMsZUFBZTtVQUNmQyxNQUFNO1VBQ05DLFFBQVFi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O1FBQUN0RTtNQUFVLElBQUlFLEdBQUdDLE9BQU9DLElBQUk7QUFDbkMsWUFBQSxHQUFLbkIsbUJBQUFzRixhQUFZdkUsVUFBVTtJQUM1QixDQUFDO0VBQ0YsQ0FBQztBQUNGLEdBQUc7IiwKICAibmFtZXMiOiBbImltcG9ydF9leHRfZ2FkZ2V0MyIsICJyZXF1aXJlIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgImltcG9ydF9leHRfZ2FkZ2V0MiIsICJ0b2FzdGlmeUluc3RhbmNlIiwgImhpZGVUb2FzdCIsICJnZXRBbGxJbWFnZXMiLCAiX3JlZiIsICJfYXN5bmNUb0dlbmVyYXRvciIsICJ0b2FzdGlmeSIsICJ0ZXh0IiwgImR1cmF0aW9uIiwgImZpbGVOYW1lcyIsICJ3Z0FydGljbGVQYXRoIiwgIndnTmFtZXNwYWNlTnVtYmVyIiwgIndnUGFnZU5hbWUiLCAid2dTY3JpcHQiLCAibXciLCAiY29uZmlnIiwgImdldCIsICJfcXVlcnlJbWFnZVJlc3BvbnNlJHEiLCAiX3F1ZXJ5SW1hZ2VSZXNwb25zZSRxMiIsICJfcXVlcnlJbWFnZVJlc3BvbnNlJHEzIiwgInF1ZXJ5SW1hZ2VQYXJhbXMiLCAiYWN0aW9uIiwgImZvcm1hdCIsICJmb3JtYXR2ZXJzaW9uIiwgInByb3AiLCAidGl0bGVzIiwgImltbGltaXQiLCAicXVlcnlJbWFnZVJlc3BvbnNlIiwgImFwaSIsICJwYWdlcyIsICJpbWFnZXMiLCAiX2l0ZXJhdG9yIiwgIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwgIl9zdGVwIiwgInMiLCAibiIsICJkb25lIiwgImltYWdlSW5mbyIsICJ2YWx1ZSIsICJ0aXRsZSIsICJsZW5ndGgiLCAiZXJyIiwgImUiLCAiZiIsICJmaWxlTGlua0VsZW1lbnRzIiwgIl9wYXJzZVJlc3BvbnNlJHBhcnNlIiwgIl9wYXJzZVJlc3BvbnNlJHBhcnNlMiIsICJwYXJzZVBhcmFtcyIsICJwYWdlIiwgInBhcnNlUmVzcG9uc2UiLCAicGFnZUNvbnRlbnQiLCAiZG9jdW1lbnQiLCAiY3JlYXRlRWxlbWVudCIsICJpbm5lckhUTUwiLCAicXVlcnlTZWxlY3RvckFsbCIsICJhcnRpY2xlUmVnZXgiLCAiUmVnRXhwIiwgImNvbmNhdCIsICJyZXBsYWNlIiwgInNjcmlwdFJlZ2V4IiwgIl9pIiwgIl9maWxlTGlua0VsZW1lbnRzIiwgImVsZW1lbnQiLCAiaHJlZiIsICJmaWxlTmFtZSIsICJ0ZXN0IiwgIm1hdGNoIiwgImV4ZWMiLCAiU2V0IiwgImFwcGx5IiwgImFyZ3VtZW50cyIsICJxdWlja0ltcG9ydEFsbE1lZGlhIiwgIndnQ2Fub25pY2FsU3BlY2lhbFBhZ2VOYW1lIiwgIndnQ3VyUmV2aXNpb25JZCIsICJpbmNsdWRlcyIsICJwb3J0bGV0SWQiLCAicXVlcnlTZWxlY3RvciIsICJ1dGlsIiwgImFkZFBvcnRsZXRMaW5rIiwgImFkZEV2ZW50TGlzdGVuZXIiLCAiX3lpZWxkJGdldEFsbEltYWdlcyIsICJkZXRlY3RJZkZpbGVSZWRpcmVjdCIsICJ0aGVuIiwgInJlZnJlc2hQYWdlIl0KfQo=

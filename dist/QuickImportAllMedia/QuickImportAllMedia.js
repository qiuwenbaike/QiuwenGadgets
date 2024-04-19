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
        var _queryImageResponse$q, _queryImageResponse$q2;
        const queryImageResponse = yield queryImages(wgPageName);
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
        const parseResponse = yield parse(wgPageName);
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
      yield (0, import_ext_gadget3.detectIfFileRedirect)(fileNames, true);
    })().then(() => {
      (0, import_ext_gadget3.refreshPage)();
    });
  });
})();

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1F1aWNrSW1wb3J0QWxsTWVkaWEvUXVpY2tJbXBvcnRBbGxNZWRpYS50cyIsICJzcmMvUXVpY2tJbXBvcnRBbGxNZWRpYS9tb2R1bGVzL2FwaS50cyIsICJzcmMvUXVpY2tJbXBvcnRBbGxNZWRpYS9tb2R1bGVzL2NvcmUudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7ZGV0ZWN0SWZGaWxlUmVkaXJlY3QsIHJlZnJlc2hQYWdlfSBmcm9tICdleHQuZ2FkZ2V0LlF1aWNrSW1wb3J0JztcbmltcG9ydCB7Z2V0QWxsSW1hZ2VzfSBmcm9tICcuL21vZHVsZXMvY29yZSc7XG5cbihmdW5jdGlvbiBxdWlja0ltcG9ydEFsbE1lZGlhKCk6IHZvaWQge1xuXHRjb25zdCB7d2dDYW5vbmljYWxTcGVjaWFsUGFnZU5hbWUsIHdnQ3VyUmV2aXNpb25JZH0gPSBtdy5jb25maWcuZ2V0KCk7XG5cdGlmIChcblx0XHQhKFxuXHRcdFx0d2dDdXJSZXZpc2lvbklkIHx8XG5cdFx0XHRbJ1ByZWZpeGluZGV4JywgJ0Jyb2tlblJlZGlyZWN0cycsICdXYW50ZWRmaWxlcyddLmluY2x1ZGVzKHdnQ2Fub25pY2FsU3BlY2lhbFBhZ2VOYW1lIHx8ICcnKVxuXHRcdClcblx0KSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgcG9ydGxldElkOiAncC1jYWN0aW9ucycgfCAncC10YicgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcC1jYWN0aW9ucycpID8gJ3AtY2FjdGlvbnMnIDogJ3AtdGInO1xuXHRjb25zdCBlbGVtZW50OiBIVE1MTElFbGVtZW50IHwgbnVsbCA9IG13LnV0aWwuYWRkUG9ydGxldExpbmsocG9ydGxldElkLCAnIycsICflr7zlhaXmraTpobXpnaLmiYDmnInmlofku7YnLCAndC1pbXBvcnQnKTtcblx0aWYgKCFlbGVtZW50KSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpOiB2b2lkID0+IHtcblx0XHR2b2lkIChhc3luYyAoKSA9PiB7XG5cdFx0XHRjb25zdCBmaWxlTmFtZXMgPSBhd2FpdCBnZXRBbGxJbWFnZXMoKTtcblx0XHRcdGlmICghZmlsZU5hbWVzLmxlbmd0aCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRhd2FpdCBkZXRlY3RJZkZpbGVSZWRpcmVjdChmaWxlTmFtZXMsIHRydWUpO1xuXHRcdH0pKCkudGhlbigoKSA9PiB7XG5cdFx0XHRyZWZyZXNoUGFnZSgpO1xuXHRcdH0pO1xuXHR9KTtcbn0pKCk7XG4iLCAiZXhwb3J0IHthcGl9IGZyb20gJ2V4dC5nYWRnZXQuUXVpY2tJbXBvcnQnO1xuIiwgImltcG9ydCB7YXBpfSBmcm9tICcuL2FwaSc7XG5pbXBvcnQge3RvYXN0aWZ5fSBmcm9tICdleHQuZ2FkZ2V0LlRvYXN0aWZ5JztcblxubGV0IHRvYXN0aWZ5SW5zdGFuY2U6IFRvYXN0aWZ5SW5zdGFuY2UgPSB7XG5cdGhpZGVUb2FzdDogKCkgPT4ge30sXG59O1xuXG5jb25zdCBxdWVyeUltYWdlcyA9IGFzeW5jICh0aXRsZXM6IHN0cmluZyB8IHN0cmluZ1tdKSA9PiB7XG5cdGNvbnN0IHBhcmFtczogQXBpUXVlcnlJbWFnZXNQYXJhbXMgPSB7XG5cdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRwcm9wOiAnaW1hZ2VzJyxcblx0XHR0aXRsZXMsXG5cdFx0aW1saW1pdDogNTAwMCxcblx0fTtcblx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGkucG9zdChwYXJhbXMpO1xuXG5cdHJldHVybiByZXNwb25zZTtcbn07XG5cbmNvbnN0IHBhcnNlID0gYXN5bmMgKHBhZ2U6IHN0cmluZykgPT4ge1xuXHRjb25zdCBwYXJhbXM6IEFwaVBhcnNlUGFyYW1zID0ge1xuXHRcdGFjdGlvbjogJ3BhcnNlJyxcblx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0cHJvcDogJ3RleHQnLFxuXHRcdHBhZ2UsXG5cdH07XG5cdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXBpLnBvc3QocGFyYW1zKTtcblxuXHRyZXR1cm4gcmVzcG9uc2U7XG59O1xuXG5jb25zdCBnZXRBbGxJbWFnZXMgPSBhc3luYyAoKTogUHJvbWlzZTxzdHJpbmdbXT4gPT4ge1xuXHR0b2FzdGlmeUluc3RhbmNlLmhpZGVUb2FzdCgpO1xuXHR0b2FzdGlmeShcblx0XHR7XG5cdFx0XHR0ZXh0OiAn5q2j5Zyo6I635Y+W6L+B56e755uu5qCHJyxcblx0XHRcdGR1cmF0aW9uOiAtMSxcblx0XHR9LFxuXHRcdCdpbmZvJ1xuXHQpO1xuXG5cdGNvbnN0IGZpbGVOYW1lczogc3RyaW5nW10gPSBbXTtcblx0Y29uc3Qge3dnQXJ0aWNsZVBhdGgsIHdnTmFtZXNwYWNlTnVtYmVyLCB3Z1BhZ2VOYW1lLCB3Z1NjcmlwdH0gPSBtdy5jb25maWcuZ2V0KCk7XG5cblx0Ly8gQW5hbHl6ZSBzdGVwIDE6IFF1ZXJ5XG5cdGlmICghKHdnTmFtZXNwYWNlTnVtYmVyIDwgMCkpIHtcblx0XHR0cnkge1xuXHRcdFx0Y29uc3QgcXVlcnlJbWFnZVJlc3BvbnNlID0gYXdhaXQgcXVlcnlJbWFnZXMod2dQYWdlTmFtZSk7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdHF1ZXJ5SW1hZ2VSZXNwb25zZVsncXVlcnknXSAmJlxuXHRcdFx0XHRxdWVyeUltYWdlUmVzcG9uc2VbJ3F1ZXJ5J10/LnBhZ2VzWzBdICYmXG5cdFx0XHRcdHF1ZXJ5SW1hZ2VSZXNwb25zZVsncXVlcnknXT8ucGFnZXNbMF0uaW1hZ2VzXG5cdFx0XHQpIHtcblx0XHRcdFx0Zm9yIChjb25zdCBpbWFnZUluZm8gb2YgcXVlcnlJbWFnZVJlc3BvbnNlWydxdWVyeSddPy5wYWdlc1swXS5pbWFnZXMgYXMge25zOiBudW1iZXI7IHRpdGxlOiBzdHJpbmd9W10pIHtcblx0XHRcdFx0XHRpZiAoIWltYWdlSW5mbyB8fCAhaW1hZ2VJbmZvLnRpdGxlKSB7XG5cdFx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0ZmlsZU5hbWVzW2ZpbGVOYW1lcy5sZW5ndGhdID0gaW1hZ2VJbmZvLnRpdGxlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSBjYXRjaCB7fVxuXHR9XG5cblx0Ly8gQW5hbHl6ZSBzdGVwIDI6IEZpbmQgZnJvbSBwYWdlc1xuXHRsZXQgZmlsZUxpbmtFbGVtZW50czogSFRNTEFuY2hvckVsZW1lbnRbXSA9IFtdO1xuXG5cdGlmICghKHdnTmFtZXNwYWNlTnVtYmVyIDwgMCkgfHwgd2dOYW1lc3BhY2VOdW1iZXIgPT09IDYpIHtcblx0XHR0cnkge1xuXHRcdFx0Y29uc3QgcGFyc2VSZXNwb25zZSA9IGF3YWl0IHBhcnNlKHdnUGFnZU5hbWUpO1xuXHRcdFx0aWYgKHBhcnNlUmVzcG9uc2VbJ3BhcnNlJ10gJiYgcGFyc2VSZXNwb25zZVsncGFyc2UnXT8udGV4dCkge1xuXHRcdFx0XHRjb25zdCBwYWdlQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcblx0XHRcdFx0cGFnZUNvbnRlbnQuaW5uZXJIVE1MID0gcGFyc2VSZXNwb25zZVsncGFyc2UnXT8udGV4dCBhcyBzdHJpbmc7XG5cblx0XHRcdFx0ZmlsZUxpbmtFbGVtZW50cyA9IFtcblx0XHRcdFx0XHQuLi5wYWdlQ29udGVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxBbmNob3JFbGVtZW50PihcImFbaHJlZl49Jy93aWtpL0ZpbGU6J11cIiksXG5cdFx0XHRcdFx0Li4ucGFnZUNvbnRlbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MQW5jaG9yRWxlbWVudD4oXCJhW2hyZWYqPSd0aXRsZT1GaWxlOiddXCIpLFxuXHRcdFx0XHRdO1xuXHRcdFx0fVxuXHRcdH0gY2F0Y2gge31cblx0fVxuXG5cdGZpbGVMaW5rRWxlbWVudHMgPSBbXG5cdFx0Li4uZmlsZUxpbmtFbGVtZW50cyxcblx0XHQuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxBbmNob3JFbGVtZW50PihcImFbaHJlZl49Jy93aWtpL0ZpbGU6J11cIiksXG5cdFx0Li4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MQW5jaG9yRWxlbWVudD4oXCJhW2hyZWYqPSd0aXRsZT1GaWxlOiddXCIpLFxuXHRdO1xuXG5cdGNvbnN0IGFydGljbGVSZWdleDogUmVnRXhwID0gbmV3IFJlZ0V4cChgJHt3Z0FydGljbGVQYXRoLnJlcGxhY2UoJyQxJywgJycpfShGaWxlOlteI10rKWApO1xuXHRjb25zdCBzY3JpcHRSZWdleDogUmVnRXhwID0gbmV3IFJlZ0V4cChgJHt3Z1NjcmlwdH1cXFxcP3RpdGxlPShGaWxlOlteIyZdKylgKTtcblxuXHRmb3IgKGNvbnN0IGVsZW1lbnQgb2YgZmlsZUxpbmtFbGVtZW50cykge1xuXHRcdGNvbnN0IHtocmVmfSA9IGVsZW1lbnQ7XG5cblx0XHRpZiAoIWhyZWYpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGxldCBmaWxlTmFtZTogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXHRcdGlmIChhcnRpY2xlUmVnZXgudGVzdChocmVmKSkge1xuXHRcdFx0Y29uc3QgbWF0Y2g6IFJlZ0V4cEV4ZWNBcnJheSA9IGFydGljbGVSZWdleC5leGVjKGhyZWYpIGFzIFJlZ0V4cEV4ZWNBcnJheTtcblx0XHRcdGZpbGVOYW1lID0gbWF0Y2hbMV0gYXMgc3RyaW5nO1xuXHRcdH0gZWxzZSBpZiAoc2NyaXB0UmVnZXgudGVzdChocmVmKSkge1xuXHRcdFx0Y29uc3QgbWF0Y2g6IFJlZ0V4cEV4ZWNBcnJheSA9IHNjcmlwdFJlZ2V4LmV4ZWMoaHJlZikgYXMgUmVnRXhwRXhlY0FycmF5O1xuXHRcdFx0ZmlsZU5hbWUgPSBtYXRjaFsxXSBhcyBzdHJpbmc7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGZpbGVOYW1lID0gZmlsZU5hbWUucmVwbGFjZSgvRmlsZTooRmlsZTp8SW1hZ2U6KT8vaSwgJ0ZpbGU6Jyk7XG5cdFx0ZmlsZU5hbWVzW2ZpbGVOYW1lcy5sZW5ndGhdID0gZmlsZU5hbWU7XG5cdH1cblxuXHR0b2FzdGlmeUluc3RhbmNlLmhpZGVUb2FzdCgpO1xuXHR0b2FzdGlmeUluc3RhbmNlID0gdG9hc3RpZnkoXG5cdFx0e1xuXHRcdFx0dGV4dDogJ+iOt+WPlui/geenu+ebruagh+WujOaIkCcsXG5cdFx0XHRkdXJhdGlvbjogLTEsXG5cdFx0fSxcblx0XHQnc3VjY2Vzcydcblx0KTtcblxuXHRyZXR1cm4gWy4uLm5ldyBTZXQoZmlsZU5hbWVzKV07XG59O1xuXG5leHBvcnQge2dldEFsbEltYWdlc307XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEscUJBQWdEQyxRQUFBLHdCQUFBOztBQ0FoRCxJQUFBQyxvQkFBa0JELFFBQUEsd0JBQUE7O0FDQ2xCLElBQUFFLHFCQUF1QkYsUUFBQSxxQkFBQTtBQUV2QixJQUFJRyxtQkFBcUM7RUFDeENDLFdBQVdBLE1BQU07RUFBQztBQUNuQjtBQUVBLElBQU1DLGNBQUEsMkJBQUE7QUFBQSxNQUFBQyxPQUFBQyxrQkFBYyxXQUFPQyxRQUE4QjtBQUN4RCxVQUFNQyxTQUErQjtNQUNwQ0MsUUFBUTtNQUNSQyxRQUFRO01BQ1JDLGVBQWU7TUFDZkMsTUFBTTtNQUNOTDtNQUNBTSxTQUFTO0lBQ1Y7QUFDQSxVQUFNQyxXQUFBLE1BQWlCZCxrQkFBQWUsSUFBSUMsS0FBS1IsTUFBTTtBQUV0QyxXQUFPTTtFQUNSLENBQUE7QUFBQSxTQUFBLFNBWk1WLGFBQUFhLElBQUE7QUFBQSxXQUFBWixLQUFBYSxNQUFBLE1BQUFDLFNBQUE7RUFBQTtBQUFBLEVBQUE7QUFjTixJQUFNQyxRQUFBLDJCQUFBO0FBQUEsTUFB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QUFNWixVQUFnQ3RDLEdBQUdtRCxLQUFLQyxlQUFlSCxXQUFXLEtBQUssYUFBYSxVQUFVO0FBQ3BHLE1BQUksQ0FBQ1gsU0FBUztBQUNiO0VBQ0Q7QUFFQUEsVUFBUWUsaUJBQWlCLFNBQVMsTUFBWTtBQUM3QyxTQUFBakYsa0JBQU0sYUFBWTtBQUNqQixZQUFNdUIsWUFBQSxNQUFrQkwsYUFBYTtBQUNyQyxVQUFJLENBQUNLLFVBQVV1QixRQUFRO0FBQ3RCO01BQ0Q7QUFDQSxhQUFBLEdBQU10RCxtQkFBQTBGLHNCQUFxQjNELFdBQVcsSUFBSTtJQUMzQyxDQUFBLEVBQUcsRUFBRTRELEtBQUssTUFBTTtBQUNmLE9BQUEsR0FBQTNGLG1CQUFBNEYsYUFBWTtJQUNiLENBQUM7RUFDRixDQUFDO0FBQ0YsR0FBRzsiLAogICJuYW1lcyI6IFsiaW1wb3J0X2V4dF9nYWRnZXQzIiwgInJlcXVpcmUiLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAiaW1wb3J0X2V4dF9nYWRnZXQyIiwgInRvYXN0aWZ5SW5zdGFuY2UiLCAiaGlkZVRvYXN0IiwgInF1ZXJ5SW1hZ2VzIiwgIl9yZWYiLCAiX2FzeW5jVG9HZW5lcmF0b3IiLCAidGl0bGVzIiwgInBhcmFtcyIsICJhY3Rpb24iLCAiZm9ybWF0IiwgImZvcm1hdHZlcnNpb24iLCAicHJvcCIsICJpbWxpbWl0IiwgInJlc3BvbnNlIiwgImFwaSIsICJwb3N0IiwgIl94IiwgImFwcGx5IiwgImFyZ3VtZW50cyIsICJwYXJzZSIsICJfcmVmMiIsICJwYWdlIiwgIl94MiIsICJnZXRBbGxJbWFnZXMiLCAiX3JlZjMiLCAidG9hc3RpZnkiLCAidGV4dCIsICJkdXJhdGlvbiIsICJmaWxlTmFtZXMiLCAid2dBcnRpY2xlUGF0aCIsICJ3Z05hbWVzcGFjZU51bWJlciIsICJ3Z1BhZ2VOYW1lIiwgIndnU2NyaXB0IiwgIm13IiwgImNvbmZpZyIsICJnZXQiLCAiX3F1ZXJ5SW1hZ2VSZXNwb25zZSRxIiwgIl9xdWVyeUltYWdlUmVzcG9uc2UkcTIiLCAicXVlcnlJbWFnZVJlc3BvbnNlIiwgInBhZ2VzIiwgImltYWdlcyIsICJfcXVlcnlJbWFnZVJlc3BvbnNlJHEzIiwgIl9pdGVyYXRvciIsICJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsICJfc3RlcCIsICJzIiwgIm4iLCAiZG9uZSIsICJpbWFnZUluZm8iLCAidmFsdWUiLCAidGl0bGUiLCAibGVuZ3RoIiwgImVyciIsICJlIiwgImYiLCAiZmlsZUxpbmtFbGVtZW50cyIsICJfcGFyc2VSZXNwb25zZSRwYXJzZSIsICJwYXJzZVJlc3BvbnNlIiwgIl9wYXJzZVJlc3BvbnNlJHBhcnNlMiIsICJwYWdlQ29udGVudCIsICJkb2N1bWVudCIsICJjcmVhdGVFbGVtZW50IiwgImlubmVySFRNTCIsICJxdWVyeVNlbGVjdG9yQWxsIiwgImFydGljbGVSZWdleCIsICJSZWdFeHAiLCAiY29uY2F0IiwgInJlcGxhY2UiLCAic2NyaXB0UmVnZXgiLCAiX2kiLCAiX2ZpbGVMaW5rRWxlbWVudHMiLCAiZWxlbWVudCIsICJocmVmIiwgImZpbGVOYW1lIiwgInRlc3QiLCAibWF0Y2giLCAiZXhlYyIsICJTZXQiLCAicXVpY2tJbXBvcnRBbGxNZWRpYSIsICJ3Z0Nhbm9uaWNhbFNwZWNpYWxQYWdlTmFtZSIsICJ3Z0N1clJldmlzaW9uSWQiLCAiaW5jbHVkZXMiLCAicG9ydGxldElkIiwgInF1ZXJ5U2VsZWN0b3IiLCAidXRpbCIsICJhZGRQb3J0bGV0TGluayIsICJhZGRFdmVudExpc3RlbmVyIiwgImRldGVjdElmRmlsZVJlZGlyZWN0IiwgInRoZW4iLCAicmVmcmVzaFBhZ2UiXQp9Cg==

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
        fileName = fileName.replace(/File:(File:|Image:)?/i, "File:");
        fileNames[fileNames.length] = fileName;
      }
      if (scriptRegex.test(href)) {
        const match = scriptRegex.exec(href);
        fileName = match[1];
        fileName = fileName.replace(/File:(File:|Image:)?/i, "File:");
        fileNames[fileNames.length] = fileName;
      }
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1F1aWNrSW1wb3J0QWxsTWVkaWEvUXVpY2tJbXBvcnRBbGxNZWRpYS50cyIsICJzcmMvUXVpY2tJbXBvcnRBbGxNZWRpYS9tb2R1bGVzL2FwaS50cyIsICJzcmMvUXVpY2tJbXBvcnRBbGxNZWRpYS9tb2R1bGVzL2NvcmUudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7ZGV0ZWN0SWZGaWxlUmVkaXJlY3QsIHJlZnJlc2hQYWdlfSBmcm9tICdleHQuZ2FkZ2V0LlF1aWNrSW1wb3J0JztcbmltcG9ydCB7Z2V0QWxsSW1hZ2VzfSBmcm9tICcuL21vZHVsZXMvY29yZSc7XG5cbihmdW5jdGlvbiBxdWlja0ltcG9ydEFsbE1lZGlhKCk6IHZvaWQge1xuXHRjb25zdCB7d2dDYW5vbmljYWxTcGVjaWFsUGFnZU5hbWUsIHdnQ3VyUmV2aXNpb25JZH0gPSBtdy5jb25maWcuZ2V0KCk7XG5cdGlmIChcblx0XHQhKFxuXHRcdFx0d2dDdXJSZXZpc2lvbklkIHx8XG5cdFx0XHRbJ1ByZWZpeGluZGV4JywgJ0Jyb2tlblJlZGlyZWN0cycsICdXYW50ZWRmaWxlcyddLmluY2x1ZGVzKHdnQ2Fub25pY2FsU3BlY2lhbFBhZ2VOYW1lIHx8ICcnKVxuXHRcdClcblx0KSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgcG9ydGxldElkOiAncC1jYWN0aW9ucycgfCAncC10YicgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcC1jYWN0aW9ucycpID8gJ3AtY2FjdGlvbnMnIDogJ3AtdGInO1xuXHRjb25zdCBlbGVtZW50OiBIVE1MTElFbGVtZW50IHwgbnVsbCA9IG13LnV0aWwuYWRkUG9ydGxldExpbmsocG9ydGxldElkLCAnIycsICflr7zlhaXmraTpobXpnaLmiYDmnInmlofku7YnLCAndC1pbXBvcnQnKTtcblx0aWYgKCFlbGVtZW50KSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpOiB2b2lkID0+IHtcblx0XHR2b2lkIChhc3luYyAoKSA9PiB7XG5cdFx0XHRjb25zdCBmaWxlTmFtZXMgPSBhd2FpdCBnZXRBbGxJbWFnZXMoKTtcblx0XHRcdGlmICghZmlsZU5hbWVzLmxlbmd0aCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRhd2FpdCBkZXRlY3RJZkZpbGVSZWRpcmVjdChmaWxlTmFtZXMsIHRydWUpO1xuXHRcdH0pKCkudGhlbigoKSA9PiB7XG5cdFx0XHRyZWZyZXNoUGFnZSgpO1xuXHRcdH0pO1xuXHR9KTtcbn0pKCk7XG4iLCAiZXhwb3J0IHthcGl9IGZyb20gJ2V4dC5nYWRnZXQuUXVpY2tJbXBvcnQnO1xuIiwgImltcG9ydCB7YXBpfSBmcm9tICcuL2FwaSc7XG5pbXBvcnQge3RvYXN0aWZ5fSBmcm9tICdleHQuZ2FkZ2V0LlRvYXN0aWZ5JztcblxubGV0IHRvYXN0aWZ5SW5zdGFuY2U6IFRvYXN0aWZ5SW5zdGFuY2UgPSB7XG5cdGhpZGVUb2FzdDogKCkgPT4ge30sXG59O1xuXG5jb25zdCBxdWVyeUltYWdlcyA9IGFzeW5jICh0aXRsZXM6IHN0cmluZyB8IHN0cmluZ1tdKSA9PiB7XG5cdGNvbnN0IHBhcmFtczogQXBpUXVlcnlJbWFnZXNQYXJhbXMgPSB7XG5cdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRwcm9wOiAnaW1hZ2VzJyxcblx0XHR0aXRsZXMsXG5cdFx0aW1saW1pdDogNTAwMCxcblx0fTtcblx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGkucG9zdChwYXJhbXMpO1xuXG5cdHJldHVybiByZXNwb25zZTtcbn07XG5cbmNvbnN0IHBhcnNlID0gYXN5bmMgKHBhZ2U6IHN0cmluZykgPT4ge1xuXHRjb25zdCBwYXJhbXM6IEFwaVBhcnNlUGFyYW1zID0ge1xuXHRcdGFjdGlvbjogJ3BhcnNlJyxcblx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0cHJvcDogJ3RleHQnLFxuXHRcdHBhZ2UsXG5cdH07XG5cdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXBpLnBvc3QocGFyYW1zKTtcblxuXHRyZXR1cm4gcmVzcG9uc2U7XG59O1xuXG5jb25zdCBnZXRBbGxJbWFnZXMgPSBhc3luYyAoKTogUHJvbWlzZTxzdHJpbmdbXT4gPT4ge1xuXHR0b2FzdGlmeUluc3RhbmNlLmhpZGVUb2FzdCgpO1xuXHR0b2FzdGlmeShcblx0XHR7XG5cdFx0XHR0ZXh0OiAn5q2j5Zyo6I635Y+W6L+B56e755uu5qCHJyxcblx0XHRcdGR1cmF0aW9uOiAtMSxcblx0XHR9LFxuXHRcdCdpbmZvJ1xuXHQpO1xuXG5cdGNvbnN0IGZpbGVOYW1lczogc3RyaW5nW10gPSBbXTtcblx0Y29uc3Qge3dnQXJ0aWNsZVBhdGgsIHdnTmFtZXNwYWNlTnVtYmVyLCB3Z1BhZ2VOYW1lLCB3Z1NjcmlwdH0gPSBtdy5jb25maWcuZ2V0KCk7XG5cblx0Ly8gQW5hbHl6ZSBzdGVwIDE6IFF1ZXJ5XG5cdGlmICghKHdnTmFtZXNwYWNlTnVtYmVyIDwgMCkpIHtcblx0XHR0cnkge1xuXHRcdFx0Y29uc3QgcXVlcnlJbWFnZVJlc3BvbnNlID0gYXdhaXQgcXVlcnlJbWFnZXMod2dQYWdlTmFtZSk7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdHF1ZXJ5SW1hZ2VSZXNwb25zZVsncXVlcnknXSAmJlxuXHRcdFx0XHRxdWVyeUltYWdlUmVzcG9uc2VbJ3F1ZXJ5J10ucGFnZXNbMF0gJiZcblx0XHRcdFx0cXVlcnlJbWFnZVJlc3BvbnNlWydxdWVyeSddLnBhZ2VzWzBdLmltYWdlc1xuXHRcdFx0KSB7XG5cdFx0XHRcdGZvciAoY29uc3QgaW1hZ2VJbmZvIG9mIHF1ZXJ5SW1hZ2VSZXNwb25zZVsncXVlcnknXS5wYWdlc1swXS5pbWFnZXMgYXMge25zOiBudW1iZXI7IHRpdGxlOiBzdHJpbmd9W10pIHtcblx0XHRcdFx0XHRpZiAoIWltYWdlSW5mbyB8fCAhaW1hZ2VJbmZvLnRpdGxlKSB7XG5cdFx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0ZmlsZU5hbWVzW2ZpbGVOYW1lcy5sZW5ndGhdID0gaW1hZ2VJbmZvLnRpdGxlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSBjYXRjaCB7fVxuXHR9XG5cblx0Ly8gQW5hbHl6ZSBzdGVwIDI6IEZpbmQgZnJvbSBwYWdlc1xuXHRsZXQgZmlsZUxpbmtFbGVtZW50czogSFRNTEFuY2hvckVsZW1lbnRbXSA9IFtdO1xuXG5cdGlmICghKHdnTmFtZXNwYWNlTnVtYmVyIDwgMCkpIHtcblx0XHR0cnkge1xuXHRcdFx0Y29uc3QgcGFyc2VSZXNwb25zZSA9IGF3YWl0IHBhcnNlKHdnUGFnZU5hbWUpO1xuXHRcdFx0aWYgKHBhcnNlUmVzcG9uc2VbJ3BhcnNlJ10gJiYgcGFyc2VSZXNwb25zZVsncGFyc2UnXS50ZXh0KSB7XG5cdFx0XHRcdGNvbnN0IHBhZ2VDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuXHRcdFx0XHRwYWdlQ29udGVudC5pbm5lckhUTUwgPSBwYXJzZVJlc3BvbnNlWydwYXJzZSddLnRleHQgYXMgc3RyaW5nO1xuXG5cdFx0XHRcdGZpbGVMaW5rRWxlbWVudHMgPSBbXG5cdFx0XHRcdFx0Li4ucGFnZUNvbnRlbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MQW5jaG9yRWxlbWVudD4oXCJhW2hyZWZePScvd2lraS9GaWxlOiddXCIpLFxuXHRcdFx0XHRcdC4uLnBhZ2VDb250ZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEFuY2hvckVsZW1lbnQ+KFwiYVtocmVmKj0ndGl0bGU9RmlsZTonXVwiKSxcblx0XHRcdFx0XTtcblx0XHRcdH1cblx0XHR9IGNhdGNoIHt9XG5cdH1cblxuXHRmaWxlTGlua0VsZW1lbnRzID0gW1xuXHRcdC4uLmZpbGVMaW5rRWxlbWVudHMsXG5cdFx0Li4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MQW5jaG9yRWxlbWVudD4oXCJhW2hyZWZePScvd2lraS9GaWxlOiddXCIpLFxuXHRcdC4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEFuY2hvckVsZW1lbnQ+KFwiYVtocmVmKj0ndGl0bGU9RmlsZTonXVwiKSxcblx0XTtcblxuXHRjb25zdCBhcnRpY2xlUmVnZXg6IFJlZ0V4cCA9IG5ldyBSZWdFeHAoYCR7d2dBcnRpY2xlUGF0aC5yZXBsYWNlKCckMScsICcnKX0oRmlsZTpbXiNdKylgKTtcblx0Y29uc3Qgc2NyaXB0UmVnZXg6IFJlZ0V4cCA9IG5ldyBSZWdFeHAoYCR7d2dTY3JpcHR9XFxcXD90aXRsZT0oRmlsZTpbXiMmXSspYCk7XG5cblx0Zm9yIChjb25zdCBlbGVtZW50IG9mIGZpbGVMaW5rRWxlbWVudHMpIHtcblx0XHRjb25zdCB7aHJlZn0gPSBlbGVtZW50O1xuXG5cdFx0aWYgKCFocmVmKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRsZXQgZmlsZU5hbWU6IHN0cmluZyB8IHVuZGVmaW5lZDtcblx0XHRpZiAoYXJ0aWNsZVJlZ2V4LnRlc3QoaHJlZikpIHtcblx0XHRcdGNvbnN0IG1hdGNoOiBSZWdFeHBFeGVjQXJyYXkgPSBhcnRpY2xlUmVnZXguZXhlYyhocmVmKSBhcyBSZWdFeHBFeGVjQXJyYXk7XG5cdFx0XHRmaWxlTmFtZSA9IG1hdGNoWzFdIGFzIHN0cmluZztcblx0XHRcdGZpbGVOYW1lID0gZmlsZU5hbWUucmVwbGFjZSgvRmlsZTooRmlsZTp8SW1hZ2U6KT8vaSwgJ0ZpbGU6Jyk7XG5cdFx0XHRmaWxlTmFtZXNbZmlsZU5hbWVzLmxlbmd0aF0gPSBmaWxlTmFtZTtcblx0XHR9XG5cblx0XHRpZiAoc2NyaXB0UmVnZXgudGVzdChocmVmKSkge1xuXHRcdFx0Y29uc3QgbWF0Y2g6IFJlZ0V4cEV4ZWNBcnJheSA9IHNjcmlwdFJlZ2V4LmV4ZWMoaHJlZikgYXMgUmVnRXhwRXhlY0FycmF5O1xuXHRcdFx0ZmlsZU5hbWUgPSBtYXRjaFsxXSBhcyBzdHJpbmc7XG5cdFx0XHRmaWxlTmFtZSA9IGZpbGVOYW1lLnJlcGxhY2UoL0ZpbGU6KEZpbGU6fEltYWdlOik/L2ksICdGaWxlOicpO1xuXHRcdFx0ZmlsZU5hbWVzW2ZpbGVOYW1lcy5sZW5ndGhdID0gZmlsZU5hbWU7XG5cdFx0fVxuXHR9XG5cblx0dG9hc3RpZnlJbnN0YW5jZS5oaWRlVG9hc3QoKTtcblx0dG9hc3RpZnlJbnN0YW5jZSA9IHRvYXN0aWZ5KFxuXHRcdHtcblx0XHRcdHRleHQ6ICfojrflj5bov4Hnp7vnm67moIflrozmiJAnLFxuXHRcdFx0ZHVyYXRpb246IC0xLFxuXHRcdH0sXG5cdFx0J3N1Y2Nlc3MnXG5cdCk7XG5cblx0cmV0dXJuIFsuLi5uZXcgU2V0KGZpbGVOYW1lcyldO1xufTtcblxuZXhwb3J0IHtnZXRBbGxJbWFnZXN9O1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLHFCQUFnREMsUUFBQSx3QkFBQTs7QUNBaEQsSUFBQUMsb0JBQWtCRCxRQUFBLHdCQUFBOztBQ0NsQixJQUFBRSxxQkFBdUJGLFFBQUEscUJBQUE7QUFFdkIsSUFBSUcsbUJBQXFDO0VBQ3hDQyxXQUFXQSxNQUFNO0VBQUM7QUFDbkI7QUFFQSxJQUFNQyxjQUFBLDJCQUFBO0FBQUEsTUFBQUMsT0FBQUMsa0JBQWMsV0FBT0MsUUFBOEI7QUFDeEQsVUFBTUMsU0FBK0I7TUFDcENDLFFBQVE7TUFDUkMsUUFBUTtNQUNSQyxlQUFlO01BQ2ZDLE1BQU07TUFDTkw7TUFDQU0sU0FBUztJQUNWO0FBQ0EsVUFBTUMsV0FBQSxNQUFpQmQsa0JBQUFlLElBQUlDLEtBQUtSLE1BQU07QUFFdEMsV0FBT007RUFDUixDQUFBO0FBQUEsU0FBQSxTQVpNVixhQUFBYSxJQUFBO0FBQUEsV0FBQVosS0FBQWEsTUFB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QUFBNUUsa0JBQU0sYUFBWTtBQUNqQixZQUFNdUIsWUFBQSxNQUFrQkwsYUFBYTtBQUNyQyxVQUFJLENBQUNLLFVBQVVvQixRQUFRO0FBQ3RCO01BQ0Q7QUFDQSxhQUFBLEdBQU1uRCxtQkFBQXFGLHNCQUFxQnRELFdBQVcsSUFBSTtJQUMzQyxDQUFBLEVBQUcsRUFBRXVELEtBQUssTUFBTTtBQUNmLE9BQUEsR0FBQXRGLG1CQUFBdUYsYUFBWTtJQUNiLENBQUM7RUFDRixDQUFDO0FBQ0YsR0FBRzsiLAogICJuYW1lcyI6IFsiaW1wb3J0X2V4dF9nYWRnZXQzIiwgInJlcXVpcmUiLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAiaW1wb3J0X2V4dF9nYWRnZXQyIiwgInRvYXN0aWZ5SW5zdGFuY2UiLCAiaGlkZVRvYXN0IiwgInF1ZXJ5SW1hZ2VzIiwgIl9yZWYiLCAiX2FzeW5jVG9HZW5lcmF0b3IiLCAidGl0bGVzIiwgInBhcmFtcyIsICJhY3Rpb24iLCAiZm9ybWF0IiwgImZvcm1hdHZlcnNpb24iLCAicHJvcCIsICJpbWxpbWl0IiwgInJlc3BvbnNlIiwgImFwaSIsICJwb3N0IiwgIl94IiwgImFwcGx5IiwgImFyZ3VtZW50cyIsICJwYXJzZSIsICJfcmVmMiIsICJwYWdlIiwgIl94MiIsICJnZXRBbGxJbWFnZXMiLCAiX3JlZjMiLCAidG9hc3RpZnkiLCAidGV4dCIsICJkdXJhdGlvbiIsICJmaWxlTmFtZXMiLCAid2dBcnRpY2xlUGF0aCIsICJ3Z05hbWVzcGFjZU51bWJlciIsICJ3Z1BhZ2VOYW1lIiwgIndnU2NyaXB0IiwgIm13IiwgImNvbmZpZyIsICJnZXQiLCAicXVlcnlJbWFnZVJlc3BvbnNlIiwgInBhZ2VzIiwgImltYWdlcyIsICJfaXRlcmF0b3IiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAiX3N0ZXAiLCAicyIsICJuIiwgImRvbmUiLCAiaW1hZ2VJbmZvIiwgInZhbHVlIiwgInRpdGxlIiwgImxlbmd0aCIsICJlcnIiLCAiZSIsICJmIiwgImZpbGVMaW5rRWxlbWVudHMiLCAicGFyc2VSZXNwb25zZSIsICJwYWdlQ29udGVudCIsICJkb2N1bWVudCIsICJjcmVhdGVFbGVtZW50IiwgImlubmVySFRNTCIsICJxdWVyeVNlbGVjdG9yQWxsIiwgImFydGljbGVSZWdleCIsICJSZWdFeHAiLCAiY29uY2F0IiwgInJlcGxhY2UiLCAic2NyaXB0UmVnZXgiLCAiX2kiLCAiX2ZpbGVMaW5rRWxlbWVudHMiLCAiZWxlbWVudCIsICJocmVmIiwgImZpbGVOYW1lIiwgInRlc3QiLCAibWF0Y2giLCAiZXhlYyIsICJTZXQiLCAicXVpY2tJbXBvcnRBbGxNZWRpYSIsICJ3Z0Nhbm9uaWNhbFNwZWNpYWxQYWdlTmFtZSIsICJ3Z0N1clJldmlzaW9uSWQiLCAiaW5jbHVkZXMiLCAicG9ydGxldElkIiwgInF1ZXJ5U2VsZWN0b3IiLCAidXRpbCIsICJhZGRQb3J0bGV0TGluayIsICJhZGRFdmVudExpc3RlbmVyIiwgImRldGVjdElmRmlsZVJlZGlyZWN0IiwgInRoZW4iLCAicmVmcmVzaFBhZ2UiXQp9Cg==

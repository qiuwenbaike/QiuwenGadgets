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
      const {
        wgPageName
      } = mw.config.get();
      (0, import_ext_gadget3.refreshPage)(wgPageName);
    });
  });
})();

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1F1aWNrSW1wb3J0QWxsTWVkaWEvUXVpY2tJbXBvcnRBbGxNZWRpYS50cyIsICJzcmMvUXVpY2tJbXBvcnRBbGxNZWRpYS9tb2R1bGVzL2FwaS50cyIsICJzcmMvUXVpY2tJbXBvcnRBbGxNZWRpYS9tb2R1bGVzL2NvcmUudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7ZGV0ZWN0SWZGaWxlUmVkaXJlY3QsIHJlZnJlc2hQYWdlfSBmcm9tICdleHQuZ2FkZ2V0LlF1aWNrSW1wb3J0JztcbmltcG9ydCB7Z2V0QWxsSW1hZ2VzfSBmcm9tICcuL21vZHVsZXMvY29yZSc7XG5cbihmdW5jdGlvbiBxdWlja0ltcG9ydEFsbE1lZGlhKCk6IHZvaWQge1xuXHRjb25zdCB7d2dDYW5vbmljYWxTcGVjaWFsUGFnZU5hbWUsIHdnQ3VyUmV2aXNpb25JZH0gPSBtdy5jb25maWcuZ2V0KCk7XG5cdGlmIChcblx0XHQhKFxuXHRcdFx0d2dDdXJSZXZpc2lvbklkIHx8XG5cdFx0XHRbJ1ByZWZpeGluZGV4JywgJ0Jyb2tlblJlZGlyZWN0cycsICdXYW50ZWRmaWxlcyddLmluY2x1ZGVzKHdnQ2Fub25pY2FsU3BlY2lhbFBhZ2VOYW1lIHx8ICcnKVxuXHRcdClcblx0KSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgcG9ydGxldElkOiAncC1jYWN0aW9ucycgfCAncC10YicgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcC1jYWN0aW9ucycpID8gJ3AtY2FjdGlvbnMnIDogJ3AtdGInO1xuXHRjb25zdCBlbGVtZW50OiBIVE1MTElFbGVtZW50IHwgbnVsbCA9IG13LnV0aWwuYWRkUG9ydGxldExpbmsocG9ydGxldElkLCAnIycsICflr7zlhaXmraTpobXpnaLmiYDmnInmlofku7YnLCAndC1pbXBvcnQnKTtcblx0aWYgKCFlbGVtZW50KSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpOiB2b2lkID0+IHtcblx0XHR2b2lkIChhc3luYyAoKSA9PiB7XG5cdFx0XHRjb25zdCBmaWxlTmFtZXMgPSBhd2FpdCBnZXRBbGxJbWFnZXMoKTtcblx0XHRcdGlmICghZmlsZU5hbWVzLmxlbmd0aCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRhd2FpdCBkZXRlY3RJZkZpbGVSZWRpcmVjdChmaWxlTmFtZXMsIHRydWUpO1xuXHRcdH0pKCkudGhlbigoKSA9PiB7XG5cdFx0XHRjb25zdCB7d2dQYWdlTmFtZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cdFx0XHRyZWZyZXNoUGFnZSh3Z1BhZ2VOYW1lKTtcblx0XHR9KTtcblx0fSk7XG59KSgpO1xuIiwgImV4cG9ydCB7YXBpfSBmcm9tICdleHQuZ2FkZ2V0LlF1aWNrSW1wb3J0JztcbiIsICJpbXBvcnQge2FwaX0gZnJvbSAnLi9hcGknO1xuaW1wb3J0IHt0b2FzdGlmeX0gZnJvbSAnZXh0LmdhZGdldC5Ub2FzdGlmeSc7XG5cbmxldCB0b2FzdGlmeUluc3RhbmNlOiBUb2FzdGlmeUluc3RhbmNlID0ge1xuXHRoaWRlVG9hc3Q6ICgpID0+IHt9LFxufTtcblxuY29uc3QgcXVlcnlJbWFnZXMgPSBhc3luYyAodGl0bGVzOiBzdHJpbmcgfCBzdHJpbmdbXSkgPT4ge1xuXHRjb25zdCBwYXJhbXM6IEFwaVF1ZXJ5SW1hZ2VzUGFyYW1zID0ge1xuXHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0cHJvcDogJ2ltYWdlcycsXG5cdFx0dGl0bGVzLFxuXHRcdGltbGltaXQ6IDUwMDAsXG5cdH07XG5cdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXBpLnBvc3QocGFyYW1zKTtcblxuXHRyZXR1cm4gcmVzcG9uc2U7XG59O1xuXG5jb25zdCBwYXJzZSA9IGFzeW5jIChwYWdlOiBzdHJpbmcpID0+IHtcblx0Y29uc3QgcGFyYW1zOiBBcGlQYXJzZVBhcmFtcyA9IHtcblx0XHRhY3Rpb246ICdwYXJzZScsXG5cdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdHByb3A6ICd0ZXh0Jyxcblx0XHRwYWdlLFxuXHR9O1xuXHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGFwaS5wb3N0KHBhcmFtcyk7XG5cblx0cmV0dXJuIHJlc3BvbnNlO1xufTtcblxuY29uc3QgZ2V0QWxsSW1hZ2VzID0gYXN5bmMgKCk6IFByb21pc2U8c3RyaW5nW10+ID0+IHtcblx0dG9hc3RpZnlJbnN0YW5jZS5oaWRlVG9hc3QoKTtcblx0dG9hc3RpZnkoXG5cdFx0e1xuXHRcdFx0dGV4dDogJ+ato+WcqOiOt+WPlui/geenu+ebruaghycsXG5cdFx0XHRkdXJhdGlvbjogLTEsXG5cdFx0fSxcblx0XHQnaW5mbydcblx0KTtcblxuXHRjb25zdCBmaWxlTmFtZXM6IHN0cmluZ1tdID0gW107XG5cdGNvbnN0IHt3Z0FydGljbGVQYXRoLCB3Z05hbWVzcGFjZU51bWJlciwgd2dQYWdlTmFtZSwgd2dTY3JpcHR9ID0gbXcuY29uZmlnLmdldCgpO1xuXG5cdC8vIEFuYWx5emUgc3RlcCAxOiBRdWVyeVxuXHRpZiAoISh3Z05hbWVzcGFjZU51bWJlciA8IDApKSB7XG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IHF1ZXJ5SW1hZ2VSZXNwb25zZSA9IGF3YWl0IHF1ZXJ5SW1hZ2VzKHdnUGFnZU5hbWUpO1xuXHRcdFx0aWYgKFxuXHRcdFx0XHRxdWVyeUltYWdlUmVzcG9uc2VbJ3F1ZXJ5J10gJiZcblx0XHRcdFx0cXVlcnlJbWFnZVJlc3BvbnNlWydxdWVyeSddPy5wYWdlc1swXSAmJlxuXHRcdFx0XHRxdWVyeUltYWdlUmVzcG9uc2VbJ3F1ZXJ5J10/LnBhZ2VzWzBdLmltYWdlc1xuXHRcdFx0KSB7XG5cdFx0XHRcdGZvciAoY29uc3QgaW1hZ2VJbmZvIG9mIHF1ZXJ5SW1hZ2VSZXNwb25zZVsncXVlcnknXT8ucGFnZXNbMF0uaW1hZ2VzIGFzIHtuczogbnVtYmVyOyB0aXRsZTogc3RyaW5nfVtdKSB7XG5cdFx0XHRcdFx0aWYgKCFpbWFnZUluZm8gfHwgIWltYWdlSW5mby50aXRsZSkge1xuXHRcdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGZpbGVOYW1lc1tmaWxlTmFtZXMubGVuZ3RoXSA9IGltYWdlSW5mby50aXRsZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0gY2F0Y2gge31cblx0fVxuXG5cdC8vIEFuYWx5emUgc3RlcCAyOiBGaW5kIGZyb20gcGFnZXNcblx0bGV0IGZpbGVMaW5rRWxlbWVudHM6IEhUTUxBbmNob3JFbGVtZW50W10gPSBbXTtcblxuXHRpZiAoISh3Z05hbWVzcGFjZU51bWJlciA8IDApIHx8IHdnTmFtZXNwYWNlTnVtYmVyID09PSA2KSB7XG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IHBhcnNlUmVzcG9uc2UgPSBhd2FpdCBwYXJzZSh3Z1BhZ2VOYW1lKTtcblx0XHRcdGlmIChwYXJzZVJlc3BvbnNlWydwYXJzZSddICYmIHBhcnNlUmVzcG9uc2VbJ3BhcnNlJ10/LnRleHQpIHtcblx0XHRcdFx0Y29uc3QgcGFnZUNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5cdFx0XHRcdHBhZ2VDb250ZW50LmlubmVySFRNTCA9IHBhcnNlUmVzcG9uc2VbJ3BhcnNlJ10/LnRleHQgYXMgc3RyaW5nO1xuXG5cdFx0XHRcdGZpbGVMaW5rRWxlbWVudHMgPSBbXG5cdFx0XHRcdFx0Li4ucGFnZUNvbnRlbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MQW5jaG9yRWxlbWVudD4oXCJhW2hyZWZePScvd2lraS9GaWxlOiddXCIpLFxuXHRcdFx0XHRcdC4uLnBhZ2VDb250ZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEFuY2hvckVsZW1lbnQ+KFwiYVtocmVmKj0ndGl0bGU9RmlsZTonXVwiKSxcblx0XHRcdFx0XTtcblx0XHRcdH1cblx0XHR9IGNhdGNoIHt9XG5cdH1cblxuXHRmaWxlTGlua0VsZW1lbnRzID0gW1xuXHRcdC4uLmZpbGVMaW5rRWxlbWVudHMsXG5cdFx0Li4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MQW5jaG9yRWxlbWVudD4oXCJhW2hyZWZePScvd2lraS9GaWxlOiddXCIpLFxuXHRcdC4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEFuY2hvckVsZW1lbnQ+KFwiYVtocmVmKj0ndGl0bGU9RmlsZTonXVwiKSxcblx0XTtcblxuXHRjb25zdCBhcnRpY2xlUmVnZXg6IFJlZ0V4cCA9IG5ldyBSZWdFeHAoYCR7d2dBcnRpY2xlUGF0aC5yZXBsYWNlKCckMScsICcnKX0oRmlsZTpbXiNdKylgKTtcblx0Y29uc3Qgc2NyaXB0UmVnZXg6IFJlZ0V4cCA9IG5ldyBSZWdFeHAoYCR7d2dTY3JpcHR9XFxcXD90aXRsZT0oRmlsZTpbXiMmXSspYCk7XG5cblx0Zm9yIChjb25zdCBlbGVtZW50IG9mIGZpbGVMaW5rRWxlbWVudHMpIHtcblx0XHRjb25zdCB7aHJlZn0gPSBlbGVtZW50O1xuXG5cdFx0aWYgKCFocmVmKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRsZXQgZmlsZU5hbWU6IHN0cmluZyB8IHVuZGVmaW5lZDtcblx0XHRpZiAoYXJ0aWNsZVJlZ2V4LnRlc3QoaHJlZikpIHtcblx0XHRcdGNvbnN0IG1hdGNoOiBSZWdFeHBFeGVjQXJyYXkgPSBhcnRpY2xlUmVnZXguZXhlYyhocmVmKSBhcyBSZWdFeHBFeGVjQXJyYXk7XG5cdFx0XHRmaWxlTmFtZSA9IG1hdGNoWzFdIGFzIHN0cmluZztcblx0XHR9IGVsc2UgaWYgKHNjcmlwdFJlZ2V4LnRlc3QoaHJlZikpIHtcblx0XHRcdGNvbnN0IG1hdGNoOiBSZWdFeHBFeGVjQXJyYXkgPSBzY3JpcHRSZWdleC5leGVjKGhyZWYpIGFzIFJlZ0V4cEV4ZWNBcnJheTtcblx0XHRcdGZpbGVOYW1lID0gbWF0Y2hbMV0gYXMgc3RyaW5nO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRmaWxlTmFtZSA9IGZpbGVOYW1lLnJlcGxhY2UoL0ZpbGU6KEZpbGU6fEltYWdlOik/L2ksICdGaWxlOicpO1xuXHRcdGZpbGVOYW1lc1tmaWxlTmFtZXMubGVuZ3RoXSA9IGZpbGVOYW1lO1xuXHR9XG5cblx0dG9hc3RpZnlJbnN0YW5jZS5oaWRlVG9hc3QoKTtcblx0dG9hc3RpZnlJbnN0YW5jZSA9IHRvYXN0aWZ5KFxuXHRcdHtcblx0XHRcdHRleHQ6ICfojrflj5bov4Hnp7vnm67moIflrozmiJAnLFxuXHRcdFx0ZHVyYXRpb246IC0xLFxuXHRcdH0sXG5cdFx0J3N1Y2Nlc3MnXG5cdCk7XG5cblx0cmV0dXJuIFsuLi5uZXcgU2V0KGZpbGVOYW1lcyldO1xufTtcblxuZXhwb3J0IHtnZXRBbGxJbWFnZXN9O1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLHFCQUFnREMsUUFBQSx3QkFBQTs7QUNBaEQsSUFBQUMsb0JBQWtCRCxRQUFBLHdCQUFBOztBQ0NsQixJQUFBRSxxQkFBdUJGLFFBQUEscUJBQUE7QUFFdkIsSUFBSUcsbUJBQXFDO0VBQ3hDQyxXQUFXQSxNQUFNO0VBQUM7QUFDbkI7QUFFQSxJQUFNQyxjQUFBLDJCQUFBO0FBQUEsTUFBQUMsT0FBQUMsa0JBQWMsV0FBT0MsUUFBOEI7QUFDeEQsVUFBTUMsU0FBK0I7TUFDcENDLFFBQVE7TUFDUkMsUUFBUTtNQUNSQyxlQUFlO01BQ2ZDLE1BQU07TUFDTkw7TUFDQU0sU0FBUztJQUNWO0FBQ0EsVUFBTUMsV0FBQSxNQUFpQmQsa0JBQUFlLElBQUlDLEtBQUtSLE1BQU07QUFFdEMsV0FBT007RUFDUixDQUFBO0FBQUEsU0FBQSxTQVpNVixhQUFBYSxJQUFBO0FBQUEsV0FBQVosS0FBQWEsTUFBQSxN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RDtBQUVBLFFBQU1HLFlBQW1DdEIsU0FBU3VCLGNBQWMsYUFBYSxJQUFJLGVBQWU7QUFDaEcsUUFBTVosVUFBZ0N0QyxHQUFHbUQsS0FBS0MsZUFBZUgsV0FBVyxLQUFLLGFBQWEsVUFBVTtBQUNwRyxNQUFJLENBQUNYLFNBQVM7QUFDYjtFQUNEO0FBRUFBLFVBQVFlLGlCQUFpQixTQUFTLE1BQVk7QUFDN0MsU0FBQWpGLGtCQUFNLGFBQVk7QUFDakIsWUFBTXVCLFlBQUEsTUFBa0JMLGFBQWE7QUFDckMsVUFBSSxDQUFDSyxVQUFVdUIsUUFBUTtBQUN0QjtNQUNEO0FBQ0EsYUFBQSxHQUFNdEQsbUJBQUEwRixzQkFBcUIzRCxXQUFXLElBQUk7SUFDM0MsQ0FBQSxFQUFHLEVBQUU0RCxLQUFLLE1BQU07QUFDZixZQUFNO1FBQUN6RDtNQUFVLElBQUlFLEdBQUdDLE9BQU9DLElBQUk7QUFDbkMsT0FBQSxHQUFBdEMsbUJBQUE0RixhQUFZMUQsVUFBVTtJQUN2QixDQUFDO0VBQ0YsQ0FBQztBQUNGLEdBQUc7IiwKICAibmFtZXMiOiBbImltcG9ydF9leHRfZ2FkZ2V0MyIsICJyZXF1aXJlIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgImltcG9ydF9leHRfZ2FkZ2V0MiIsICJ0b2FzdGlmeUluc3RhbmNlIiwgImhpZGVUb2FzdCIsICJxdWVyeUltYWdlcyIsICJfcmVmIiwgIl9hc3luY1RvR2VuZXJhdG9yIiwgInRpdGxlcyIsICJwYXJhbXMiLCAiYWN0aW9uIiwgImZvcm1hdCIsICJmb3JtYXR2ZXJzaW9uIiwgInByb3AiLCAiaW1saW1pdCIsICJyZXNwb25zZSIsICJhcGkiLCAicG9zdCIsICJfeCIsICJhcHBseSIsICJhcmd1bWVudHMiLCAicGFyc2UiLCAiX3JlZjIiLCAicGFnZSIsICJfeDIiLCAiZ2V0QWxsSW1hZ2VzIiwgIl9yZWYzIiwgInRvYXN0aWZ5IiwgInRleHQiLCAiZHVyYXRpb24iLCAiZmlsZU5hbWVzIiwgIndnQXJ0aWNsZVBhdGgiLCAid2dOYW1lc3BhY2VOdW1iZXIiLCAid2dQYWdlTmFtZSIsICJ3Z1NjcmlwdCIsICJtdyIsICJjb25maWciLCAiZ2V0IiwgIl9xdWVyeUltYWdlUmVzcG9uc2UkcSIsICJfcXVlcnlJbWFnZVJlc3BvbnNlJHEyIiwgInF1ZXJ5SW1hZ2VSZXNwb25zZSIsICJwYWdlcyIsICJpbWFnZXMiLCAiX3F1ZXJ5SW1hZ2VSZXNwb25zZSRxMyIsICJfaXRlcmF0b3IiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAiX3N0ZXAiLCAicyIsICJuIiwgImRvbmUiLCAiaW1hZ2VJbmZvIiwgInZhbHVlIiwgInRpdGxlIiwgImxlbmd0aCIsICJlcnIiLCAiZSIsICJmIiwgImZpbGVMaW5rRWxlbWVudHMiLCAiX3BhcnNlUmVzcG9uc2UkcGFyc2UiLCAicGFyc2VSZXNwb25zZSIsICJfcGFyc2VSZXNwb25zZSRwYXJzZTIiLCAicGFnZUNvbnRlbnQiLCAiZG9jdW1lbnQiLCAiY3JlYXRlRWxlbWVudCIsICJpbm5lckhUTUwiLCAicXVlcnlTZWxlY3RvckFsbCIsICJhcnRpY2xlUmVnZXgiLCAiUmVnRXhwIiwgImNvbmNhdCIsICJyZXBsYWNlIiwgInNjcmlwdFJlZ2V4IiwgIl9pIiwgIl9maWxlTGlua0VsZW1lbnRzIiwgImVsZW1lbnQiLCAiaHJlZiIsICJmaWxlTmFtZSIsICJ0ZXN0IiwgIm1hdGNoIiwgImV4ZWMiLCAiU2V0IiwgInF1aWNrSW1wb3J0QWxsTWVkaWEiLCAid2dDYW5vbmljYWxTcGVjaWFsUGFnZU5hbWUiLCAid2dDdXJSZXZpc2lvbklkIiwgImluY2x1ZGVzIiwgInBvcnRsZXRJZCIsICJxdWVyeVNlbGVjdG9yIiwgInV0aWwiLCAiYWRkUG9ydGxldExpbmsiLCAiYWRkRXZlbnRMaXN0ZW5lciIsICJkZXRlY3RJZkZpbGVSZWRpcmVjdCIsICJ0aGVuIiwgInJlZnJlc2hQYWdlIl0KfQo=

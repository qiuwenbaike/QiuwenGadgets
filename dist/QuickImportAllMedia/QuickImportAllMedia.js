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
  if (!(wgCurRevisionId || ["Prefixindex", "BrokenRedirects"].includes(wgCanonicalSpecialPageName || ""))) {
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1F1aWNrSW1wb3J0QWxsTWVkaWEvUXVpY2tJbXBvcnRBbGxNZWRpYS50cyIsICJzcmMvUXVpY2tJbXBvcnRBbGxNZWRpYS9tb2R1bGVzL2FwaS50cyIsICJzcmMvUXVpY2tJbXBvcnRBbGxNZWRpYS9tb2R1bGVzL2NvcmUudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7ZGV0ZWN0SWZGaWxlUmVkaXJlY3QsIHJlZnJlc2hQYWdlfSBmcm9tICdleHQuZ2FkZ2V0LlF1aWNrSW1wb3J0JztcbmltcG9ydCB7Z2V0QWxsSW1hZ2VzfSBmcm9tICcuL21vZHVsZXMvY29yZSc7XG5cbihmdW5jdGlvbiBxdWlja0ltcG9ydEFsbE1lZGlhKCk6IHZvaWQge1xuXHRjb25zdCB7d2dDYW5vbmljYWxTcGVjaWFsUGFnZU5hbWUsIHdnQ3VyUmV2aXNpb25JZH0gPSBtdy5jb25maWcuZ2V0KCk7XG5cdGlmICghKHdnQ3VyUmV2aXNpb25JZCB8fCBbJ1ByZWZpeGluZGV4JywgJ0Jyb2tlblJlZGlyZWN0cyddLmluY2x1ZGVzKHdnQ2Fub25pY2FsU3BlY2lhbFBhZ2VOYW1lIHx8ICcnKSkpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBwb3J0bGV0SWQ6ICdwLWNhY3Rpb25zJyB8ICdwLXRiJyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwLWNhY3Rpb25zJykgPyAncC1jYWN0aW9ucycgOiAncC10Yic7XG5cdGNvbnN0IGVsZW1lbnQ6IEhUTUxMSUVsZW1lbnQgfCBudWxsID0gbXcudXRpbC5hZGRQb3J0bGV0TGluayhwb3J0bGV0SWQsICcjJywgJ+WvvOWFpeatpOmhtemdouaJgOacieaWh+S7ticsICd0LWltcG9ydCcpO1xuXHRpZiAoIWVsZW1lbnQpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk6IHZvaWQgPT4ge1xuXHRcdHZvaWQgKGFzeW5jICgpID0+IHtcblx0XHRcdGNvbnN0IGZpbGVOYW1lczogc3RyaW5nW10gPSAoYXdhaXQgZ2V0QWxsSW1hZ2VzKCkpID8/IFtdO1xuXHRcdFx0aWYgKCFmaWxlTmFtZXMubGVuZ3RoKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGF3YWl0IGRldGVjdElmRmlsZVJlZGlyZWN0KFsuLi5uZXcgU2V0KGZpbGVOYW1lcyldLCB0cnVlKTtcblx0XHR9KSgpLnRoZW4oKCkgPT4ge1xuXHRcdFx0Y29uc3Qge3dnUGFnZU5hbWV9ID0gbXcuY29uZmlnLmdldCgpO1xuXHRcdFx0dm9pZCByZWZyZXNoUGFnZSh3Z1BhZ2VOYW1lKTtcblx0XHR9KTtcblx0fSk7XG59KSgpO1xuIiwgImV4cG9ydCB7YXBpfSBmcm9tICdleHQuZ2FkZ2V0LlF1aWNrSW1wb3J0JztcbiIsICJpbXBvcnQge2FwaX0gZnJvbSAnLi9hcGknO1xuaW1wb3J0IHt0b2FzdGlmeX0gZnJvbSAnZXh0LmdhZGdldC5Ub2FzdGlmeSc7XG5cbmxldCB0b2FzdGlmeUluc3RhbmNlOiBUb2FzdGlmeUluc3RhbmNlID0ge1xuXHRoaWRlVG9hc3Q6ICgpID0+IHt9LFxufTtcblxuY29uc3QgZ2V0QWxsSW1hZ2VzID0gYXN5bmMgKCkgPT4ge1xuXHR0b2FzdGlmeUluc3RhbmNlLmhpZGVUb2FzdCgpO1xuXHR0b2FzdGlmeShcblx0XHR7XG5cdFx0XHR0ZXh0OiAn5q2j5Zyo6I635Y+W6L+B56e755uu5qCHJyxcblx0XHRcdGR1cmF0aW9uOiAtMSxcblx0XHR9LFxuXHRcdCdpbmZvJ1xuXHQpO1xuXG5cdGNvbnN0IGZpbGVOYW1lczogc3RyaW5nW10gPSBbXTtcblx0Y29uc3Qge3dnQXJ0aWNsZVBhdGgsIHdnTmFtZXNwYWNlTnVtYmVyLCB3Z1BhZ2VOYW1lLCB3Z1NjcmlwdH0gPSBtdy5jb25maWcuZ2V0KCk7XG5cblx0Ly8gQW5hbHl6ZSBzdGVwIDE6IFF1ZXJ5XG5cdGlmICghKHdnTmFtZXNwYWNlTnVtYmVyIDwgMCkpIHtcblx0XHR0cnkge1xuXHRcdFx0Y29uc3QgcXVlcnlJbWFnZVBhcmFtczogQXBpUXVlcnlJbWFnZXNQYXJhbXMgPSB7XG5cdFx0XHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRcdFx0cHJvcDogJ2ltYWdlcycsXG5cdFx0XHRcdHRpdGxlczogd2dQYWdlTmFtZSxcblx0XHRcdFx0aW1saW1pdDogNTAwMCxcblx0XHRcdH07XG5cblx0XHRcdGNvbnN0IHF1ZXJ5SW1hZ2VSZXNwb25zZSA9IGF3YWl0IGFwaS5nZXQocXVlcnlJbWFnZVBhcmFtcyk7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdCFxdWVyeUltYWdlUmVzcG9uc2VbJ3F1ZXJ5J10gfHxcblx0XHRcdFx0IXF1ZXJ5SW1hZ2VSZXNwb25zZVsncXVlcnknXT8ucGFnZXNbMF0gfHxcblx0XHRcdFx0IXF1ZXJ5SW1hZ2VSZXNwb25zZVsncXVlcnknXT8ucGFnZXNbMF0uaW1hZ2VzXG5cdFx0XHQpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3IgKGNvbnN0IGltYWdlSW5mbyBvZiBxdWVyeUltYWdlUmVzcG9uc2VbJ3F1ZXJ5J10/LnBhZ2VzWzBdLmltYWdlcyBhcyB7bnM6IG51bWJlcjsgdGl0bGU6IHN0cmluZ31bXSkge1xuXHRcdFx0XHRpZiAoIWltYWdlSW5mbyB8fCAhaW1hZ2VJbmZvLnRpdGxlKSB7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0ZmlsZU5hbWVzW2ZpbGVOYW1lcy5sZW5ndGhdID0gaW1hZ2VJbmZvLnRpdGxlO1xuXHRcdFx0fVxuXHRcdH0gY2F0Y2gge31cblx0fVxuXG5cdC8vIEFuYWx5emUgc3RlcCAyOiBGaW5kIGZyb20gcGFnZXNcblx0bGV0IGZpbGVMaW5rRWxlbWVudHM6IEhUTUxBbmNob3JFbGVtZW50W10gPSBbXTtcblxuXHRpZiAoISh3Z05hbWVzcGFjZU51bWJlciA8IDApIHx8IHdnTmFtZXNwYWNlTnVtYmVyID09PSA2KSB7XG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IHBhcnNlUGFyYW1zOiBBcGlQYXJzZVBhcmFtcyA9IHtcblx0XHRcdFx0YWN0aW9uOiAncGFyc2UnLFxuXHRcdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdFx0XHRwcm9wOiAndGV4dCcsXG5cdFx0XHRcdHBhZ2U6IHdnUGFnZU5hbWUsXG5cdFx0XHR9O1xuXG5cdFx0XHRjb25zdCBwYXJzZVJlc3BvbnNlID0gYXdhaXQgYXBpLmdldChwYXJzZVBhcmFtcyk7XG5cdFx0XHRpZiAoIXBhcnNlUmVzcG9uc2VbJ3BhcnNlJ10gfHwgIXBhcnNlUmVzcG9uc2VbJ3BhcnNlJ10/LnRleHQpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBwYWdlQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcblx0XHRcdHBhZ2VDb250ZW50LmlubmVySFRNTCA9IHBhcnNlUmVzcG9uc2VbJ3BhcnNlJ10/LnRleHQgYXMgc3RyaW5nO1xuXG5cdFx0XHRmaWxlTGlua0VsZW1lbnRzID0gW1xuXHRcdFx0XHQuLi5wYWdlQ29udGVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxBbmNob3JFbGVtZW50PihcImFbaHJlZl49Jy93aWtpL0ZpbGU6J11cIiksXG5cdFx0XHRcdC4uLnBhZ2VDb250ZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEFuY2hvckVsZW1lbnQ+KFwiYVtocmVmKj0ndGl0bGU9RmlsZTonXVwiKSxcblx0XHRcdF07XG5cdFx0fSBjYXRjaCB7fVxuXHR9XG5cblx0ZmlsZUxpbmtFbGVtZW50cyA9IFtcblx0XHQuLi5maWxlTGlua0VsZW1lbnRzLFxuXHRcdC4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEFuY2hvckVsZW1lbnQ+KFwiYVtocmVmXj0nL3dpa2kvRmlsZTonXVwiKSxcblx0XHQuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxBbmNob3JFbGVtZW50PihcImFbaHJlZio9J3RpdGxlPUZpbGU6J11cIiksXG5cdF07XG5cblx0Y29uc3QgYXJ0aWNsZVJlZ2V4OiBSZWdFeHAgPSBuZXcgUmVnRXhwKGAke3dnQXJ0aWNsZVBhdGgucmVwbGFjZSgnJDEnLCAnJyl9KEZpbGU6W14jXSspYCk7XG5cdGNvbnN0IHNjcmlwdFJlZ2V4OiBSZWdFeHAgPSBuZXcgUmVnRXhwKGAke3dnU2NyaXB0fVxcXFw/dGl0bGU9KEZpbGU6W14jJl0rKWApO1xuXG5cdGZvciAoY29uc3QgZWxlbWVudCBvZiBmaWxlTGlua0VsZW1lbnRzKSB7XG5cdFx0Y29uc3Qge2hyZWZ9ID0gZWxlbWVudDtcblxuXHRcdGlmICghaHJlZikge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0bGV0IGZpbGVOYW1lOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cdFx0aWYgKGFydGljbGVSZWdleC50ZXN0KGhyZWYpKSB7XG5cdFx0XHRjb25zdCBtYXRjaDogUmVnRXhwRXhlY0FycmF5ID0gYXJ0aWNsZVJlZ2V4LmV4ZWMoaHJlZikgYXMgUmVnRXhwRXhlY0FycmF5O1xuXHRcdFx0ZmlsZU5hbWUgPSBtYXRjaFsxXSBhcyBzdHJpbmc7XG5cdFx0fSBlbHNlIGlmIChzY3JpcHRSZWdleC50ZXN0KGhyZWYpKSB7XG5cdFx0XHRjb25zdCBtYXRjaDogUmVnRXhwRXhlY0FycmF5ID0gc2NyaXB0UmVnZXguZXhlYyhocmVmKSBhcyBSZWdFeHBFeGVjQXJyYXk7XG5cdFx0XHRmaWxlTmFtZSA9IG1hdGNoWzFdIGFzIHN0cmluZztcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0ZmlsZU5hbWUgPSBmaWxlTmFtZS5yZXBsYWNlKC9GaWxlOihGaWxlOnxJbWFnZTopPy9pLCAnRmlsZTonKTtcblx0XHRmaWxlTmFtZXNbZmlsZU5hbWVzLmxlbmd0aF0gPSBmaWxlTmFtZTtcblx0fVxuXG5cdHRvYXN0aWZ5SW5zdGFuY2UuaGlkZVRvYXN0KCk7XG5cdHRvYXN0aWZ5SW5zdGFuY2UgPSB0b2FzdGlmeShcblx0XHR7XG5cdFx0XHR0ZXh0OiAn6I635Y+W6L+B56e755uu5qCH5a6M5oiQJyxcblx0XHRcdGR1cmF0aW9uOiAtMSxcblx0XHR9LFxuXHRcdCdzdWNjZXNzJ1xuXHQpO1xuXG5cdHJldHVybiBbLi4ubmV3IFNldChmaWxlTmFtZXMpXTtcbn07XG5cbmV4cG9ydCB7Z2V0QWxsSW1hZ2VzfTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxxQkFBZ0RDLFFBQUEsd0JBQUE7O0FDQWhELElBQUFDLG9CQUFrQkQsUUFBQSx3QkFBQTs7QUNDbEIsSUFBQUUscUJBQXVCRixRQUFBLHFCQUFBO0FBRXZCLElBQUlHLG1CQUFxQztFQUN4Q0MsV0FBV0EsTUFBTTtFQUFDO0FBQ25CO0FBRUEsSUFBTUMsZUFBQSwyQkFBQTtBQUFBLE1BQUFDLE9BQUFDLGtCQUFlLGFBQVk7QUFDaENKLHFCQUFpQkMsVUFBVTtBQUMzQixLQUFBLEdBQUFGLG1CQUFBTSxVQUNDO01BQ0NDLE1BQU07TUFDTkMsVUFBVTtJQUNYLEdBQ0EsTUFDRDtBQUVBLFVBQU1DLFlBQXNCLENBQUE7QUFDNUIsVUFBTTtNQUFDQztNQUFlQztNQUFtQkM7TUFBWUM7SUFBUSxJQUFJQyxHQUFHQyxPQUFPQyxJQUFJO0FBRy9FLFFBQUksRUFBRUwsb0JBQW9CLElBQUk7QUFDN0IsVUFBSTtBQUFBLFlBQUFNLHVCQUFBQyx3QkFBQUM7QUFDSCxjQUFNQyxtQkFBeUM7VUFDOUNDLFFBQVE7VUFDUkMsUUFBUTtVQUNSQyxlQUFlO1VBQ2ZDLE1BQU07VUFDTkMsUUFBUWI7VUFDUmMsU0FBUztRQUNWO0FBRUEsY0FBTUMscUJBQUEsTUFBMkI1QixrQkFB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S25CLG1CQUFBc0YsYUFBWXZFLFVBQVU7SUFDNUIsQ0FBQztFQUNGLENBQUM7QUFDRixHQUFHOyIsCiAgIm5hbWVzIjogWyJpbXBvcnRfZXh0X2dhZGdldDMiLCAicmVxdWlyZSIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJpbXBvcnRfZXh0X2dhZGdldDIiLCAidG9hc3RpZnlJbnN0YW5jZSIsICJoaWRlVG9hc3QiLCAiZ2V0QWxsSW1hZ2VzIiwgIl9yZWYiLCAiX2FzeW5jVG9HZW5lcmF0b3IiLCAidG9hc3RpZnkiLCAidGV4dCIsICJkdXJhdGlvbiIsICJmaWxlTmFtZXMiLCAid2dBcnRpY2xlUGF0aCIsICJ3Z05hbWVzcGFjZU51bWJlciIsICJ3Z1BhZ2VOYW1lIiwgIndnU2NyaXB0IiwgIm13IiwgImNvbmZpZyIsICJnZXQiLCAiX3F1ZXJ5SW1hZ2VSZXNwb25zZSRxIiwgIl9xdWVyeUltYWdlUmVzcG9uc2UkcTIiLCAiX3F1ZXJ5SW1hZ2VSZXNwb25zZSRxMyIsICJxdWVyeUltYWdlUGFyYW1zIiwgImFjdGlvbiIsICJmb3JtYXQiLCAiZm9ybWF0dmVyc2lvbiIsICJwcm9wIiwgInRpdGxlcyIsICJpbWxpbWl0IiwgInF1ZXJ5SW1hZ2VSZXNwb25zZSIsICJhcGkiLCAicGFnZXMiLCAiaW1hZ2VzIiwgIl9pdGVyYXRvciIsICJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsICJfc3RlcCIsICJzIiwgIm4iLCAiZG9uZSIsICJpbWFnZUluZm8iLCAidmFsdWUiLCAidGl0bGUiLCAibGVuZ3RoIiwgImVyciIsICJlIiwgImYiLCAiZmlsZUxpbmtFbGVtZW50cyIsICJfcGFyc2VSZXNwb25zZSRwYXJzZSIsICJfcGFyc2VSZXNwb25zZSRwYXJzZTIiLCAicGFyc2VQYXJhbXMiLCAicGFnZSIsICJwYXJzZVJlc3BvbnNlIiwgInBhZ2VDb250ZW50IiwgImRvY3VtZW50IiwgImNyZWF0ZUVsZW1lbnQiLCAiaW5uZXJIVE1MIiwgInF1ZXJ5U2VsZWN0b3JBbGwiLCAiYXJ0aWNsZVJlZ2V4IiwgIlJlZ0V4cCIsICJjb25jYXQiLCAicmVwbGFjZSIsICJzY3JpcHRSZWdleCIsICJfaSIsICJfZmlsZUxpbmtFbGVtZW50cyIsICJlbGVtZW50IiwgImhyZWYiLCAiZmlsZU5hbWUiLCAidGVzdCIsICJtYXRjaCIsICJleGVjIiwgIlNldCIsICJhcHBseSIsICJhcmd1bWVudHMiLCAicXVpY2tJbXBvcnRBbGxNZWRpYSIsICJ3Z0Nhbm9uaWNhbFNwZWNpYWxQYWdlTmFtZSIsICJ3Z0N1clJldmlzaW9uSWQiLCAiaW5jbHVkZXMiLCAicG9ydGxldElkIiwgInF1ZXJ5U2VsZWN0b3IiLCAidXRpbCIsICJhZGRQb3J0bGV0TGluayIsICJhZGRFdmVudExpc3RlbmVyIiwgIl95aWVsZCRnZXRBbGxJbWFnZXMiLCAiZGV0ZWN0SWZGaWxlUmVkaXJlY3QiLCAidGhlbiIsICJyZWZyZXNoUGFnZSJdCn0K

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
    const articleRegex = new RegExp("".concat(wgArticlePath.replace("$1", ""), "(File:[^#]+)"));
    const scriptRegex = new RegExp("^".concat(wgScript, "\\?title=(File:[^#&]+)"));
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
    fileLinkElements = [...fileLinkElements, ...document.querySelectorAll("a[href^='/wiki/File:']"), ...document.querySelectorAll("a[href*='title=File:']")];
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1F1aWNrSW1wb3J0QWxsTWVkaWEvUXVpY2tJbXBvcnRBbGxNZWRpYS50cyIsICJzcmMvUXVpY2tJbXBvcnRBbGxNZWRpYS9tb2R1bGVzL2FwaS50cyIsICJzcmMvUXVpY2tJbXBvcnRBbGxNZWRpYS9tb2R1bGVzL2NvcmUudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7ZGV0ZWN0SWZGaWxlUmVkaXJlY3QsIHJlZnJlc2hQYWdlfSBmcm9tICdleHQuZ2FkZ2V0LlF1aWNrSW1wb3J0JztcbmltcG9ydCB7Z2V0QWxsSW1hZ2VzfSBmcm9tICcuL21vZHVsZXMvY29yZSc7XG5cbihmdW5jdGlvbiBxdWlja0ltcG9ydEFsbE1lZGlhKCk6IHZvaWQge1xuXHRjb25zdCB7d2dDYW5vbmljYWxTcGVjaWFsUGFnZU5hbWUsIHdnQ3VyUmV2aXNpb25JZH0gPSBtdy5jb25maWcuZ2V0KCk7XG5cdGlmICghKHdnQ3VyUmV2aXNpb25JZCB8fCBbJ1ByZWZpeGluZGV4JywgJ0Jyb2tlblJlZGlyZWN0cyddLmluY2x1ZGVzKHdnQ2Fub25pY2FsU3BlY2lhbFBhZ2VOYW1lIHx8ICcnKSkpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBwb3J0bGV0SWQ6ICdwLWNhY3Rpb25zJyB8ICdwLXRiJyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwLWNhY3Rpb25zJykgPyAncC1jYWN0aW9ucycgOiAncC10Yic7XG5cdGNvbnN0IGVsZW1lbnQ6IEhUTUxMSUVsZW1lbnQgfCBudWxsID0gbXcudXRpbC5hZGRQb3J0bGV0TGluayhwb3J0bGV0SWQsICcjJywgJ+WvvOWFpeatpOmhtemdouaJgOacieaWh+S7ticsICd0LWltcG9ydCcpO1xuXHRpZiAoIWVsZW1lbnQpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk6IHZvaWQgPT4ge1xuXHRcdHZvaWQgKGFzeW5jICgpID0+IHtcblx0XHRcdGNvbnN0IGZpbGVOYW1lczogc3RyaW5nW10gPSAoYXdhaXQgZ2V0QWxsSW1hZ2VzKCkpID8/IFtdO1xuXHRcdFx0aWYgKCFmaWxlTmFtZXMubGVuZ3RoKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGF3YWl0IGRldGVjdElmRmlsZVJlZGlyZWN0KFsuLi5uZXcgU2V0KGZpbGVOYW1lcyldLCB0cnVlKTtcblx0XHR9KSgpLnRoZW4oKCkgPT4ge1xuXHRcdFx0Y29uc3Qge3dnUGFnZU5hbWV9ID0gbXcuY29uZmlnLmdldCgpO1xuXHRcdFx0dm9pZCByZWZyZXNoUGFnZSh3Z1BhZ2VOYW1lKTtcblx0XHR9KTtcblx0fSk7XG59KSgpO1xuIiwgImV4cG9ydCB7YXBpfSBmcm9tICdleHQuZ2FkZ2V0LlF1aWNrSW1wb3J0JztcbiIsICJpbXBvcnQge2FwaX0gZnJvbSAnLi9hcGknO1xuaW1wb3J0IHt0b2FzdGlmeX0gZnJvbSAnZXh0LmdhZGdldC5Ub2FzdGlmeSc7XG5cbmxldCB0b2FzdGlmeUluc3RhbmNlOiBUb2FzdGlmeUluc3RhbmNlID0ge1xuXHRoaWRlVG9hc3Q6ICgpID0+IHt9LFxufTtcblxuY29uc3QgZ2V0QWxsSW1hZ2VzID0gYXN5bmMgKCkgPT4ge1xuXHR0b2FzdGlmeUluc3RhbmNlLmhpZGVUb2FzdCgpO1xuXHR0b2FzdGlmeShcblx0XHR7XG5cdFx0XHR0ZXh0OiAn5q2j5Zyo6I635Y+W6L+B56e755uu5qCHJyxcblx0XHRcdGR1cmF0aW9uOiAtMSxcblx0XHR9LFxuXHRcdCdpbmZvJ1xuXHQpO1xuXG5cdGNvbnN0IGZpbGVOYW1lczogc3RyaW5nW10gPSBbXTtcblx0Y29uc3Qge3dnQXJ0aWNsZVBhdGgsIHdnTmFtZXNwYWNlTnVtYmVyLCB3Z1BhZ2VOYW1lLCB3Z1NjcmlwdH0gPSBtdy5jb25maWcuZ2V0KCk7XG5cblx0Ly8gQW5hbHl6ZSBzdGVwIDE6IFF1ZXJ5XG5cdGlmICghKHdnTmFtZXNwYWNlTnVtYmVyIDwgMCkpIHtcblx0XHR0cnkge1xuXHRcdFx0Y29uc3QgcXVlcnlJbWFnZVBhcmFtczogQXBpUXVlcnlJbWFnZXNQYXJhbXMgPSB7XG5cdFx0XHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRcdFx0cHJvcDogJ2ltYWdlcycsXG5cdFx0XHRcdHRpdGxlczogd2dQYWdlTmFtZSxcblx0XHRcdFx0aW1saW1pdDogNTAwMCxcblx0XHRcdH07XG5cblx0XHRcdGNvbnN0IHF1ZXJ5SW1hZ2VSZXNwb25zZSA9IGF3YWl0IGFwaS5nZXQocXVlcnlJbWFnZVBhcmFtcyk7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdCFxdWVyeUltYWdlUmVzcG9uc2VbJ3F1ZXJ5J10gfHxcblx0XHRcdFx0IXF1ZXJ5SW1hZ2VSZXNwb25zZVsncXVlcnknXT8ucGFnZXNbMF0gfHxcblx0XHRcdFx0IXF1ZXJ5SW1hZ2VSZXNwb25zZVsncXVlcnknXT8ucGFnZXNbMF0uaW1hZ2VzXG5cdFx0XHQpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3IgKGNvbnN0IGltYWdlSW5mbyBvZiBxdWVyeUltYWdlUmVzcG9uc2VbJ3F1ZXJ5J10/LnBhZ2VzWzBdLmltYWdlcyBhcyB7bnM6IG51bWJlcjsgdGl0bGU6IHN0cmluZ31bXSkge1xuXHRcdFx0XHRpZiAoIWltYWdlSW5mbyB8fCAhaW1hZ2VJbmZvLnRpdGxlKSB7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0ZmlsZU5hbWVzW2ZpbGVOYW1lcy5sZW5ndGhdID0gaW1hZ2VJbmZvLnRpdGxlO1xuXHRcdFx0fVxuXHRcdH0gY2F0Y2gge31cblx0fVxuXG5cdC8vIEFuYWx5emUgc3RlcCAyOiBGaW5kIGZyb20gcGFnZXNcblx0bGV0IGZpbGVMaW5rRWxlbWVudHM6IEhUTUxBbmNob3JFbGVtZW50W10gPSBbXTtcblx0Y29uc3QgYXJ0aWNsZVJlZ2V4OiBSZWdFeHAgPSBuZXcgUmVnRXhwKGAke3dnQXJ0aWNsZVBhdGgucmVwbGFjZSgnJDEnLCAnJyl9KEZpbGU6W14jXSspYCk7XG5cdGNvbnN0IHNjcmlwdFJlZ2V4OiBSZWdFeHAgPSBuZXcgUmVnRXhwKGBeJHt3Z1NjcmlwdH1cXFxcP3RpdGxlPShGaWxlOlteIyZdKylgKTtcblxuXHR0cnkge1xuXHRcdGNvbnN0IHBhcnNlUGFyYW1zOiBBcGlQYXJzZVBhcmFtcyA9IHtcblx0XHRcdGFjdGlvbjogJ3BhcnNlJyxcblx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdFx0cHJvcDogJ3RleHQnLFxuXHRcdFx0cGFnZTogd2dQYWdlTmFtZSxcblx0XHR9O1xuXG5cdFx0Y29uc3QgcGFyc2VSZXNwb25zZSA9IGF3YWl0IGFwaS5nZXQocGFyc2VQYXJhbXMpO1xuXHRcdGlmICghcGFyc2VSZXNwb25zZVsncGFyc2UnXSB8fCAhcGFyc2VSZXNwb25zZVsncGFyc2UnXT8udGV4dCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGNvbnN0IHBhZ2VDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuXHRcdHBhZ2VDb250ZW50LmlubmVySFRNTCA9IHBhcnNlUmVzcG9uc2VbJ3BhcnNlJ10/LnRleHQgYXMgc3RyaW5nO1xuXG5cdFx0ZmlsZUxpbmtFbGVtZW50cyA9IFtcblx0XHRcdC4uLnBhZ2VDb250ZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEFuY2hvckVsZW1lbnQ+KFwiYVtocmVmXj0nL3dpa2kvRmlsZTonXVwiKSxcblx0XHRcdC4uLnBhZ2VDb250ZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEFuY2hvckVsZW1lbnQ+KFwiYVtocmVmKj0ndGl0bGU9RmlsZTonXVwiKSxcblx0XHRdO1xuXHR9IGNhdGNoIHt9XG5cblx0ZmlsZUxpbmtFbGVtZW50cyA9IFtcblx0XHQuLi5maWxlTGlua0VsZW1lbnRzLFxuXHRcdC4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEFuY2hvckVsZW1lbnQ+KFwiYVtocmVmXj0nL3dpa2kvRmlsZTonXVwiKSxcblx0XHQuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxBbmNob3JFbGVtZW50PihcImFbaHJlZio9J3RpdGxlPUZpbGU6J11cIiksXG5cdF07XG5cblx0Zm9yIChjb25zdCBlbGVtZW50IG9mIGZpbGVMaW5rRWxlbWVudHMpIHtcblx0XHRjb25zdCB7aHJlZn0gPSBlbGVtZW50O1xuXG5cdFx0aWYgKCFocmVmKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRsZXQgZmlsZU5hbWU6IHN0cmluZyB8IHVuZGVmaW5lZDtcblx0XHRpZiAoYXJ0aWNsZVJlZ2V4LnRlc3QoaHJlZikpIHtcblx0XHRcdGNvbnN0IG1hdGNoOiBSZWdFeHBFeGVjQXJyYXkgPSBhcnRpY2xlUmVnZXguZXhlYyhocmVmKSBhcyBSZWdFeHBFeGVjQXJyYXk7XG5cdFx0XHRmaWxlTmFtZSA9IG1hdGNoWzFdIGFzIHN0cmluZztcblx0XHR9IGVsc2UgaWYgKHNjcmlwdFJlZ2V4LnRlc3QoaHJlZikpIHtcblx0XHRcdGNvbnN0IG1hdGNoOiBSZWdFeHBFeGVjQXJyYXkgPSBzY3JpcHRSZWdleC5leGVjKGhyZWYpIGFzIFJlZ0V4cEV4ZWNBcnJheTtcblx0XHRcdGZpbGVOYW1lID0gbWF0Y2hbMV0gYXMgc3RyaW5nO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRmaWxlTmFtZSA9IGZpbGVOYW1lLnJlcGxhY2UoL0ZpbGU6KEZpbGU6fEltYWdlOik/L2ksICdGaWxlOicpO1xuXHRcdGZpbGVOYW1lc1tmaWxlTmFtZXMubGVuZ3RoXSA9IGZpbGVOYW1lO1xuXHR9XG5cblx0dG9hc3RpZnlJbnN0YW5jZS5oaWRlVG9hc3QoKTtcblx0dG9hc3RpZnlJbnN0YW5jZSA9IHRvYXN0aWZ5KFxuXHRcdHtcblx0XHRcdHRleHQ6ICfojrflj5bov4Hnp7vnm67moIflrozmiJAnLFxuXHRcdFx0ZHVyYXRpb246IC0xLFxuXHRcdH0sXG5cdFx0J3N1Y2Nlc3MnXG5cdCk7XG5cblx0cmV0dXJuIFsuLi5uZXcgU2V0KGZpbGVOYW1lcyldO1xufTtcblxuZXhwb3J0IHtnZXRBbGxJbWFnZXN9O1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLHFCQUFnREMsUUFBQSx3QkFBQTs7QUNBaEQsSUFBQUMsb0JBQWtCRCxRQUFBLHdCQUFBOztBQ0NsQixJQUFBRSxxQkFBdUJGLFFBQUEscUJBQUE7QUFFdkIsSUFBSUcsbUJBQXFDO0VBQ3hDQyxXQUFXQSxNQUFNO0VBQUM7QUFDbkI7QUFFQSxJQUFNQyxlQUFBLDJCQUFBO0FBQUEsTUFBQUMsT0FBQUMsa0JBQWUsYUFBWTtBQUNoQ0oscUJBQWlCQyxVQUFVO0FBQzNCLEtBQUEsR0FBQUYsbUJBQUFNLFVBQ0M7TUFDQ0MsTUFBTTtNQUNOQyxVQUFVO0lBQ1gsR0FDQSxNQUNEO0FBRUEsVUFBTUMsWUFBc0IsQ0FBQTtBQUM1QixVQUFNO01BQUNDO01BQWVDO01BQW1CQztNQUFZQztJQUFRLElBQUlDLEdBQUdDLE9BQU9DLElBQUk7QUFHL0UsUUFBSSxFQUFFTCxvQkFBb0IsSUFBSTtBQUM3QixVQUFJO0FBQUEsWUFBQU0sdUJBQUFDLHdCQUFBQztBQUNILGNBQU1DLG1CQUF5QztVQUM5Q0MsUUFBUTtVQUNSQyxRQUFRO1VBQ1JDLGVBQWU7VUFDZkMsTUFBTTtVQUNOQyxRQUFRYjtVQUNSYyxTQUFTO1FBQ1Y7QUFFQSxjQUFNQyxxQkFBQSxNQUEyQjVCLGtCQUFBNkIsSUFBSVosSUFBSUksZ0JBQWdCO0FBQ3pELFlBQ0MsQ0FBQ08sbUJBQW1CLE9BQU8sS0FDM0IsR0FBQVYsd0JBQUNVLG1CQUFtQixPQUFPLE9BQUEsUUFBQVYsMEJBQUEsVUFBMUJB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QUMsR0FBRyxJQUFJNEQsSUFBSTNELFNBQVMsQ0FBQztFQUM5QixDQUFBO0FBQUEsU0FBQSxTQTdHTU4sZ0JBQUE7QUFBQSxXQUFBQyxLQUFBaUUsTUFBQSxNQUFBQyxTQUFBO0VBQUE7QUFBQSxFQUFBOztDRkpMLFNBQVNDLHNCQUE0QjtBQUNyQyxRQUFNO0lBQUNDO0lBQTRCQztFQUFlLElBQUkzRCxHQUFHQyxPQUFPQyxJQUFJO0FBQ3BFLE1BQUksRUFBRXlELG1CQUFtQixDQUFDLGVBQWUsaUJBQWlCLEVBQUVDLFNBQVNGLDhCQUE4QixFQUFFLElBQUk7QUFDeEc7RUFDRDtBQUVBLFFBQU1HLFlBQW1DbkIsU0FBU29CLGNBQWMsYUFBYSxJQUFJLGVBQWU7QUFDaEcsUUFBTWQsVUFBZ0NoRCxHQUFHK0QsS0FBS0MsZUFBZUgsV0FBVyxLQUFLLGFBQWEsVUFBVTtBQUNwRyxNQUFJLENBQUNiLFNBQVM7QUFDYjtFQUNEO0FBRUFBLFVBQVFpQixpQkFBaUIsU0FBUyxNQUFZO0FBQzdDLFNBQUExRSxrQkFBTSxhQUFZO0FBQUEsVUFBQTJFO0FBQ2pCLFlBQU12RSxhQUFBdUUsc0JBQUEsTUFBNkI3RSxhQUFhLE9BQUEsUUFBQTZFLHdCQUFBLFNBQUFBLHNCQUFNLENBQUE7QUFDdEQsVUFBSSxDQUFDdkUsVUFBVStCLFFBQVE7QUFDdEI7TUFDRDtBQUNBLGFBQUEsR0FBTTNDLG1CQUFBb0Ysc0JBQXFCLENBQUMsR0FBRyxJQUFJYixJQUFJM0QsU0FBUyxDQUFDLEdBQUcsSUFBSTtJQUN6RCxDQUFBLEVBQUcsRUFBRXlFLEtBQUssTUFBTTtBQUNmLFlBQU07UUFBQ3RFO01BQVUsSUFBSUUsR0FBR0MsT0FBT0MsSUFBSTtBQUNuQyxZQUFBLEdBQUtuQixtQkFBQXNGLGFBQVl2RSxVQUFVO0lBQzVCLENBQUM7RUFDRixDQUFDO0FBQ0YsR0FBRzsiLAogICJuYW1lcyI6IFsiaW1wb3J0X2V4dF9nYWRnZXQzIiwgInJlcXVpcmUiLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAiaW1wb3J0X2V4dF9nYWRnZXQyIiwgInRvYXN0aWZ5SW5zdGFuY2UiLCAiaGlkZVRvYXN0IiwgImdldEFsbEltYWdlcyIsICJfcmVmIiwgIl9hc3luY1RvR2VuZXJhdG9yIiwgInRvYXN0aWZ5IiwgInRleHQiLCAiZHVyYXRpb24iLCAiZmlsZU5hbWVzIiwgIndnQXJ0aWNsZVBhdGgiLCAid2dOYW1lc3BhY2VOdW1iZXIiLCAid2dQYWdlTmFtZSIsICJ3Z1NjcmlwdCIsICJtdyIsICJjb25maWciLCAiZ2V0IiwgIl9xdWVyeUltYWdlUmVzcG9uc2UkcSIsICJfcXVlcnlJbWFnZVJlc3BvbnNlJHEyIiwgIl9xdWVyeUltYWdlUmVzcG9uc2UkcTMiLCAicXVlcnlJbWFnZVBhcmFtcyIsICJhY3Rpb24iLCAiZm9ybWF0IiwgImZvcm1hdHZlcnNpb24iLCAicHJvcCIsICJ0aXRsZXMiLCAiaW1saW1pdCIsICJxdWVyeUltYWdlUmVzcG9uc2UiLCAiYXBpIiwgInBhZ2VzIiwgImltYWdlcyIsICJfaXRlcmF0b3IiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAiX3N0ZXAiLCAicyIsICJuIiwgImRvbmUiLCAiaW1hZ2VJbmZvIiwgInZhbHVlIiwgInRpdGxlIiwgImxlbmd0aCIsICJlcnIiLCAiZSIsICJmIiwgImZpbGVMaW5rRWxlbWVudHMiLCAiYXJ0aWNsZVJlZ2V4IiwgIlJlZ0V4cCIsICJjb25jYXQiLCAicmVwbGFjZSIsICJzY3JpcHRSZWdleCIsICJfcGFyc2VSZXNwb25zZSRwYXJzZSIsICJfcGFyc2VSZXNwb25zZSRwYXJzZTIiLCAicGFyc2VQYXJhbXMiLCAicGFnZSIsICJwYXJzZVJlc3BvbnNlIiwgInBhZ2VDb250ZW50IiwgImRvY3VtZW50IiwgImNyZWF0ZUVsZW1lbnQiLCAiaW5uZXJIVE1MIiwgInF1ZXJ5U2VsZWN0b3JBbGwiLCAiX2kiLCAiX2ZpbGVMaW5rRWxlbWVudHMiLCAiZWxlbWVudCIsICJocmVmIiwgImZpbGVOYW1lIiwgInRlc3QiLCAibWF0Y2giLCAiZXhlYyIsICJTZXQiLCAiYXBwbHkiLCAiYXJndW1lbnRzIiwgInF1aWNrSW1wb3J0QWxsTWVkaWEiLCAid2dDYW5vbmljYWxTcGVjaWFsUGFnZU5hbWUiLCAid2dDdXJSZXZpc2lvbklkIiwgImluY2x1ZGVzIiwgInBvcnRsZXRJZCIsICJxdWVyeVNlbGVjdG9yIiwgInV0aWwiLCAiYWRkUG9ydGxldExpbmsiLCAiYWRkRXZlbnRMaXN0ZW5lciIsICJfeWllbGQkZ2V0QWxsSW1hZ2VzIiwgImRldGVjdElmRmlsZVJlZGlyZWN0IiwgInRoZW4iLCAicmVmcmVzaFBhZ2UiXQp9Cg==

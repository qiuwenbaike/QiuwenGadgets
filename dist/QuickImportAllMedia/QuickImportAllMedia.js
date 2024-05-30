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
//! src/QuickImportAllMedia/modules/core.ts
var import_ext_gadget2 = require("ext.gadget.Util");
//! src/QuickImportAllMedia/modules/api.ts
var import_ext_gadget = require("ext.gadget.QuickImport");
//! src/QuickImportAllMedia/modules/core.ts
var import_ext_gadget3 = require("ext.gadget.Toastify");
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
      prop: "text",
      redirects: true,
      disabletoc: true
    };
    const response = yield import_ext_gadget.api.post(params);
    return response;
  });
  return function parse2(_x2) {
    return _ref2.apply(this, arguments);
  };
}();
var getElements = /* @__PURE__ */ function() {
  var _ref3 = _asyncToGenerator(function* (titles) {
    let fileLinkElements = [];
    var _iterator = _createForOfIteratorHelper(titles), _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done; ) {
        const title = _step.value;
        try {
          const parseResponse = yield parse(title);
          if (!parseResponse["parse"] || !parseResponse["parse"].text) {
            continue;
          }
          const pageContent = document.createElement("span");
          pageContent.innerHTML = parseResponse["parse"].text;
          fileLinkElements = [...pageContent.querySelectorAll("a[href^='/wiki/File:']"), ...pageContent.querySelectorAll("a[href*='title=File:']")];
        } catch {
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    fileLinkElements = [...fileLinkElements, ...document.querySelectorAll("a[href^='/wiki/File:']"), ...document.querySelectorAll("a[href*='title=File:']")];
    return fileLinkElements;
  });
  return function getElements2(_x3) {
    return _ref3.apply(this, arguments);
  };
}();
var getImagesFromElements = (fileLinkElements) => {
  const fileNames = [];
  const {
    wgArticlePath,
    wgScript
  } = mw.config.get();
  const articleRegex = new RegExp("".concat(wgArticlePath.replace("$1", ""), "(File:[^#]+)"));
  const scriptRegex = new RegExp("".concat(wgScript, "\\?title=(File:[^#&]+)"));
  var _iterator2 = _createForOfIteratorHelper((0, import_ext_gadget2.uniqueArray)(fileLinkElements)), _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
      const element = _step2.value;
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
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
  return fileNames;
};
var getImages = /* @__PURE__ */ function() {
  var _ref4 = _asyncToGenerator(function* (titles) {
    let fileNames = [];
    let fileLinkElements = [];
    titles = (0, import_ext_gadget2.generateArray)(titles);
    try {
      const queryImageResponse = yield queryImages(titles);
      if (queryImageResponse["query"] && queryImageResponse["query"].pages[0] && queryImageResponse["query"].pages[0].images) {
        var _iterator3 = _createForOfIteratorHelper(queryImageResponse["query"].pages[0].images), _step3;
        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
            const imageInfo = _step3.value;
            if (!imageInfo || !imageInfo.title) {
              continue;
            }
            fileNames[fileNames.length] = imageInfo.title;
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
      }
    } catch {
    }
    fileLinkElements = yield getElements(titles);
    fileNames = [...fileNames, ...getImagesFromElements(fileLinkElements)];
    return fileNames;
  });
  return function getImages2(_x4) {
    return _ref4.apply(this, arguments);
  };
}();
var getAllImages = /* @__PURE__ */ function() {
  var _ref5 = _asyncToGenerator(function* (titles) {
    toastifyInstance.hideToast();
    (0, import_ext_gadget3.toastify)({
      text: "正在获取迁移目标",
      duration: -1
    }, "info");
    let fileNames = [];
    const {
      wgNamespaceNumber,
      wgPageName
    } = mw.config.get();
    if (!titles || !titles.length) {
      titles = wgNamespaceNumber < 0 ? [] : [wgPageName];
    }
    if (titles.length) {
      fileNames = yield getImages(titles);
    }
    fileNames = [...fileNames, ...getImagesFromElements([...document.querySelectorAll("a[href^='/wiki/File:']"), ...document.querySelectorAll("a[href*='title=File:']")])];
    fileNames = [...fileNames, ...yield getImages(titles), ...yield getImages(fileNames)];
    toastifyInstance.hideToast();
    toastifyInstance = (0, import_ext_gadget3.toastify)({
      text: "获取迁移目标完成",
      duration: -1
    }, "success");
    return (0, import_ext_gadget2.uniqueArray)(fileNames);
  });
  return function getAllImages2(_x5) {
    return _ref5.apply(this, arguments);
  };
}();
//! src/QuickImportAllMedia/QuickImportAllMedia.ts
window.detectIfFileRedirect = import_ext_gadget4.detectIfFileRedirect;
window.getAllImages = getAllImages;
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1F1aWNrSW1wb3J0QWxsTWVkaWEvUXVpY2tJbXBvcnRBbGxNZWRpYS50cyIsICJzcmMvUXVpY2tJbXBvcnRBbGxNZWRpYS9tb2R1bGVzL2NvcmUudHMiLCAic3JjL1F1aWNrSW1wb3J0QWxsTWVkaWEvbW9kdWxlcy9hcGkudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7ZGV0ZWN0SWZGaWxlUmVkaXJlY3QsIHJlZnJlc2hQYWdlfSBmcm9tICdleHQuZ2FkZ2V0LlF1aWNrSW1wb3J0JztcbmltcG9ydCB7Z2V0QWxsSW1hZ2VzfSBmcm9tICcuL21vZHVsZXMvY29yZSc7XG5cbmRlY2xhcmUgZ2xvYmFsIHtcblx0aW50ZXJmYWNlIFdpbmRvdyB7XG5cdFx0ZGV0ZWN0SWZGaWxlUmVkaXJlY3Q6IERldGVjdElmRmlsZVJlZGlyZWN0O1xuXHRcdGdldEFsbEltYWdlczogdHlwZW9mIGdldEFsbEltYWdlcztcblx0fVxufVxuXG53aW5kb3cuZGV0ZWN0SWZGaWxlUmVkaXJlY3QgPSBkZXRlY3RJZkZpbGVSZWRpcmVjdDtcbndpbmRvdy5nZXRBbGxJbWFnZXMgPSBnZXRBbGxJbWFnZXM7XG5cbihmdW5jdGlvbiBxdWlja0ltcG9ydEFsbE1lZGlhKCk6IHZvaWQge1xuXHRjb25zdCB7d2dDYW5vbmljYWxTcGVjaWFsUGFnZU5hbWUsIHdnQ3VyUmV2aXNpb25JZH0gPSBtdy5jb25maWcuZ2V0KCk7XG5cdGlmIChcblx0XHQhKFxuXHRcdFx0d2dDdXJSZXZpc2lvbklkIHx8XG5cdFx0XHRbJ1ByZWZpeGluZGV4JywgJ0Jyb2tlblJlZGlyZWN0cycsICdXYW50ZWRmaWxlcyddLmluY2x1ZGVzKHdnQ2Fub25pY2FsU3BlY2lhbFBhZ2VOYW1lIHx8ICcnKVxuXHRcdClcblx0KSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgcG9ydGxldElkOiAncC1jYWN0aW9ucycgfCAncC10YicgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcC1jYWN0aW9ucycpID8gJ3AtY2FjdGlvbnMnIDogJ3AtdGInO1xuXHRjb25zdCBlbGVtZW50OiBIVE1MTElFbGVtZW50IHwgbnVsbCA9IG13LnV0aWwuYWRkUG9ydGxldExpbmsocG9ydGxldElkLCAnIycsICflr7zlhaXmraTpobXpnaLmiYDmnInmlofku7YnLCAndC1pbXBvcnQnKTtcblx0aWYgKCFlbGVtZW50KSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpOiB2b2lkID0+IHtcblx0XHR2b2lkIChhc3luYyAoKSA9PiB7XG5cdFx0XHRjb25zdCBmaWxlTmFtZXMgPSBhd2FpdCBnZXRBbGxJbWFnZXMoKTtcblx0XHRcdGlmICghZmlsZU5hbWVzLmxlbmd0aCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRhd2FpdCBkZXRlY3RJZkZpbGVSZWRpcmVjdChmaWxlTmFtZXMsIHRydWUpO1xuXHRcdH0pKCkudGhlbigoKSA9PiB7XG5cdFx0XHRyZWZyZXNoUGFnZSgpO1xuXHRcdH0pO1xuXHR9KTtcbn0pKCk7XG4iLCAiaW1wb3J0IHtnZW5lcmF0ZUFycmF5LCB1bmlxdWVBcnJheX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbmltcG9ydCB7YXBpfSBmcm9tICcuL2FwaSc7XG5pbXBvcnQge3RvYXN0aWZ5fSBmcm9tICdleHQuZ2FkZ2V0LlRvYXN0aWZ5JztcblxubGV0IHRvYXN0aWZ5SW5zdGFuY2U6IFRvYXN0aWZ5SW5zdGFuY2UgPSB7XG5cdGhpZGVUb2FzdDogKCkgPT4ge30sXG59O1xuXG5jb25zdCBxdWVyeUltYWdlcyA9IGFzeW5jICh0aXRsZXM6IHN0cmluZyB8IHN0cmluZ1tdKSA9PiB7XG5cdGNvbnN0IHBhcmFtczogQXBpUXVlcnlJbWFnZXNQYXJhbXMgPSB7XG5cdFx0dGl0bGVzLFxuXHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0cHJvcDogJ2ltYWdlcycsXG5cdFx0aW1saW1pdDogNTAwMCxcblx0fTtcblx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGkucG9zdChwYXJhbXMpO1xuXG5cdHJldHVybiByZXNwb25zZTtcbn07XG5cbmNvbnN0IHBhcnNlID0gYXN5bmMgKHBhZ2U6IHN0cmluZykgPT4ge1xuXHRjb25zdCBwYXJhbXM6IEFwaVBhcnNlUGFyYW1zID0ge1xuXHRcdHBhZ2UsXG5cdFx0YWN0aW9uOiAncGFyc2UnLFxuXHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRwcm9wOiAndGV4dCcsXG5cdFx0cmVkaXJlY3RzOiB0cnVlLFxuXHRcdGRpc2FibGV0b2M6IHRydWUsXG5cdH07XG5cdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXBpLnBvc3QocGFyYW1zKTtcblxuXHRyZXR1cm4gcmVzcG9uc2U7XG59O1xuXG5jb25zdCBnZXRFbGVtZW50cyA9IGFzeW5jICh0aXRsZXM6IHN0cmluZ1tdKSA9PiB7XG5cdGxldCBmaWxlTGlua0VsZW1lbnRzOiBIVE1MQW5jaG9yRWxlbWVudFtdID0gW107XG5cblx0Zm9yIChjb25zdCB0aXRsZSBvZiB0aXRsZXMpIHtcblx0XHR0cnkge1xuXHRcdFx0Y29uc3QgcGFyc2VSZXNwb25zZSA9IGF3YWl0IHBhcnNlKHRpdGxlKTtcblx0XHRcdGlmICghcGFyc2VSZXNwb25zZVsncGFyc2UnXSB8fCAhcGFyc2VSZXNwb25zZVsncGFyc2UnXS50ZXh0KSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgcGFnZUNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5cdFx0XHRwYWdlQ29udGVudC5pbm5lckhUTUwgPSBwYXJzZVJlc3BvbnNlWydwYXJzZSddLnRleHQgYXMgc3RyaW5nO1xuXG5cdFx0XHRmaWxlTGlua0VsZW1lbnRzID0gW1xuXHRcdFx0XHQuLi5wYWdlQ29udGVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxBbmNob3JFbGVtZW50PihcImFbaHJlZl49Jy93aWtpL0ZpbGU6J11cIiksXG5cdFx0XHRcdC4uLnBhZ2VDb250ZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEFuY2hvckVsZW1lbnQ+KFwiYVtocmVmKj0ndGl0bGU9RmlsZTonXVwiKSxcblx0XHRcdF07XG5cdFx0fSBjYXRjaCB7fVxuXHR9XG5cblx0ZmlsZUxpbmtFbGVtZW50cyA9IFtcblx0XHQuLi5maWxlTGlua0VsZW1lbnRzLFxuXHRcdC4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEFuY2hvckVsZW1lbnQ+KFwiYVtocmVmXj0nL3dpa2kvRmlsZTonXVwiKSxcblx0XHQuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxBbmNob3JFbGVtZW50PihcImFbaHJlZio9J3RpdGxlPUZpbGU6J11cIiksXG5cdF07XG5cblx0cmV0dXJuIGZpbGVMaW5rRWxlbWVudHM7XG59O1xuXG5jb25zdCBnZXRJbWFnZXNGcm9tRWxlbWVudHMgPSAoZmlsZUxpbmtFbGVtZW50czogSFRNTEFuY2hvckVsZW1lbnRbXSkgPT4ge1xuXHRjb25zdCBmaWxlTmFtZXM6IHN0cmluZ1tdID0gW107XG5cdGNvbnN0IHt3Z0FydGljbGVQYXRoLCB3Z1NjcmlwdH0gPSBtdy5jb25maWcuZ2V0KCk7XG5cdGNvbnN0IGFydGljbGVSZWdleDogUmVnRXhwID0gbmV3IFJlZ0V4cChgJHt3Z0FydGljbGVQYXRoLnJlcGxhY2UoJyQxJywgJycpfShGaWxlOlteI10rKWApO1xuXHRjb25zdCBzY3JpcHRSZWdleDogUmVnRXhwID0gbmV3IFJlZ0V4cChgJHt3Z1NjcmlwdH1cXFxcP3RpdGxlPShGaWxlOlteIyZdKylgKTtcblxuXHRmb3IgKGNvbnN0IGVsZW1lbnQgb2YgdW5pcXVlQXJyYXkoZmlsZUxpbmtFbGVtZW50cykpIHtcblx0XHQvLyBSZXBsYWNlIGBuZXcgU2V0KClgIHRvIGF2b2lkIHBvbHlmaWxsaW5nIGNvcmUtanNcblx0XHRjb25zdCB7aHJlZiwgY2xhc3NMaXN0fSA9IGVsZW1lbnQ7XG5cblx0XHRpZiAoIWhyZWYgfHwgaHJlZi5pbmNsdWRlcygncmVkbGluaz0xJykpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGlmIChjbGFzc0xpc3QuY29udGFpbnMoJ25ldycpKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRsZXQgZmlsZU5hbWU6IHN0cmluZyB8IHVuZGVmaW5lZDtcblx0XHRpZiAoYXJ0aWNsZVJlZ2V4LnRlc3QoaHJlZikpIHtcblx0XHRcdGNvbnN0IG1hdGNoOiBSZWdFeHBFeGVjQXJyYXkgPSBhcnRpY2xlUmVnZXguZXhlYyhocmVmKSBhcyBSZWdFeHBFeGVjQXJyYXk7XG5cdFx0XHRmaWxlTmFtZSA9IG1hdGNoWzFdIGFzIHN0cmluZztcblx0XHRcdGZpbGVOYW1lID0gZmlsZU5hbWUucmVwbGFjZSgvRmlsZTooRmlsZTp8SW1hZ2U6KT8vaSwgJ0ZpbGU6Jyk7XG5cdFx0XHRmaWxlTmFtZSA9IGRlY29kZVVSSUNvbXBvbmVudChmaWxlTmFtZSk7XG5cdFx0XHRmaWxlTmFtZXNbZmlsZU5hbWVzLmxlbmd0aF0gPSBmaWxlTmFtZTtcblx0XHR9XG5cblx0XHRpZiAoc2NyaXB0UmVnZXgudGVzdChocmVmKSkge1xuXHRcdFx0Y29uc3QgbWF0Y2g6IFJlZ0V4cEV4ZWNBcnJheSA9IHNjcmlwdFJlZ2V4LmV4ZWMoaHJlZikgYXMgUmVnRXhwRXhlY0FycmF5O1xuXHRcdFx0ZmlsZU5hbWUgPSBtYXRjaFsxXSBhcyBzdHJpbmc7XG5cdFx0XHRmaWxlTmFtZSA9IGZpbGVOYW1lLnJlcGxhY2UoL0ZpbGU6KEZpbGU6fEltYWdlOik/L2ksICdGaWxlOicpO1xuXHRcdFx0ZmlsZU5hbWUgPSBkZWNvZGVVUklDb21wb25lbnQoZmlsZU5hbWUpO1xuXHRcdFx0ZmlsZU5hbWVzW2ZpbGVOYW1lcy5sZW5ndGhdID0gZmlsZU5hbWU7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIGZpbGVOYW1lcztcbn07XG5cbmNvbnN0IGdldEltYWdlcyA9IGFzeW5jICh0aXRsZXM6IHN0cmluZyB8IHN0cmluZ1tdKSA9PiB7XG5cdGxldCBmaWxlTmFtZXM6IHN0cmluZ1tdID0gW107XG5cdGxldCBmaWxlTGlua0VsZW1lbnRzOiBIVE1MQW5jaG9yRWxlbWVudFtdID0gW107XG5cblx0dGl0bGVzID0gZ2VuZXJhdGVBcnJheSh0aXRsZXMpO1xuXG5cdC8vIEFuYWx5emUgc3RlcCAxOiBRdWVyeVxuXHR0cnkge1xuXHRcdGNvbnN0IHF1ZXJ5SW1hZ2VSZXNwb25zZSA9IGF3YWl0IHF1ZXJ5SW1hZ2VzKHRpdGxlcyk7XG5cdFx0aWYgKFxuXHRcdFx0cXVlcnlJbWFnZVJlc3BvbnNlWydxdWVyeSddICYmXG5cdFx0XHRxdWVyeUltYWdlUmVzcG9uc2VbJ3F1ZXJ5J10ucGFnZXNbMF0gJiZcblx0XHRcdHF1ZXJ5SW1hZ2VSZXNwb25zZVsncXVlcnknXS5wYWdlc1swXS5pbWFnZXNcblx0XHQpIHtcblx0XHRcdGZvciAoY29uc3QgaW1hZ2VJbmZvIG9mIHF1ZXJ5SW1hZ2VSZXNwb25zZVsncXVlcnknXS5wYWdlc1swXS5pbWFnZXMgYXMge1xuXHRcdFx0XHRuczogbnVtYmVyO1xuXHRcdFx0XHR0aXRsZTogc3RyaW5nO1xuXHRcdFx0fVtdKSB7XG5cdFx0XHRcdGlmICghaW1hZ2VJbmZvIHx8ICFpbWFnZUluZm8udGl0bGUpIHtcblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRmaWxlTmFtZXNbZmlsZU5hbWVzLmxlbmd0aF0gPSBpbWFnZUluZm8udGl0bGU7XG5cdFx0XHR9XG5cdFx0fVxuXHR9IGNhdGNoIHt9XG5cblx0ZmlsZUxpbmtFbGVtZW50cyA9IGF3YWl0IGdldEVsZW1lbnRzKHRpdGxlcyk7XG5cblx0Ly8gQW5hbHl6ZSBzdGVwIDI6IEZpbmQgZnJvbSBwYWdlc1xuXHRmaWxlTmFtZXMgPSBbLi4uZmlsZU5hbWVzLCAuLi5nZXRJbWFnZXNGcm9tRWxlbWVudHMoZmlsZUxpbmtFbGVtZW50cyldO1xuXG5cdHJldHVybiBmaWxlTmFtZXM7XG59O1xuXG5jb25zdCBnZXRBbGxJbWFnZXMgPSBhc3luYyAodGl0bGVzPzogc3RyaW5nIHwgc3RyaW5nW10pOiBQcm9taXNlPHN0cmluZ1tdPiA9PiB7XG5cdHRvYXN0aWZ5SW5zdGFuY2UuaGlkZVRvYXN0KCk7XG5cdHRvYXN0aWZ5KFxuXHRcdHtcblx0XHRcdHRleHQ6ICfmraPlnKjojrflj5bov4Hnp7vnm67moIcnLFxuXHRcdFx0ZHVyYXRpb246IC0xLFxuXHRcdH0sXG5cdFx0J2luZm8nXG5cdCk7XG5cblx0bGV0IGZpbGVOYW1lczogc3RyaW5nW10gPSBbXTtcblx0Y29uc3Qge3dnTmFtZXNwYWNlTnVtYmVyLCB3Z1BhZ2VOYW1lfSA9IG13LmNvbmZpZy5nZXQoKTtcblxuXHRpZiAoIXRpdGxlcyB8fCAhdGl0bGVzLmxlbmd0aCkge1xuXHRcdHRpdGxlcyA9IHdnTmFtZXNwYWNlTnVtYmVyIDwgMCA/IFtdIDogW3dnUGFnZU5hbWVdO1xuXHR9XG5cblx0aWYgKHRpdGxlcy5sZW5ndGgpIHtcblx0XHRmaWxlTmFtZXMgPSBhd2FpdCBnZXRJbWFnZXModGl0bGVzKTtcblx0fVxuXG5cdGZpbGVOYW1lcyA9IFtcblx0XHQuLi5maWxlTmFtZXMsXG5cdFx0Li4uZ2V0SW1hZ2VzRnJvbUVsZW1lbnRzKFtcblx0XHRcdC4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEFuY2hvckVsZW1lbnQ+KFwiYVtocmVmXj0nL3dpa2kvRmlsZTonXVwiKSxcblx0XHRcdC4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEFuY2hvckVsZW1lbnQ+KFwiYVtocmVmKj0ndGl0bGU9RmlsZTonXVwiKSxcblx0XHRdKSxcblx0XTtcblx0ZmlsZU5hbWVzID0gWy4uLmZpbGVOYW1lcywgLi4uKGF3YWl0IGdldEltYWdlcyh0aXRsZXMpKSwgLi4uKGF3YWl0IGdldEltYWdlcyhmaWxlTmFtZXMpKV07XG5cblx0dG9hc3RpZnlJbnN0YW5jZS5oaWRlVG9hc3QoKTtcblx0dG9hc3RpZnlJbnN0YW5jZSA9IHRvYXN0aWZ5KFxuXHRcdHtcblx0XHRcdHRleHQ6ICfojrflj5bov4Hnp7vnm67moIflrozmiJAnLFxuXHRcdFx0ZHVyYXRpb246IC0xLFxuXHRcdH0sXG5cdFx0J3N1Y2Nlc3MnXG5cdCk7XG5cblx0cmV0dXJuIHVuaXF1ZUFycmF5KGZpbGVOYW1lcyk7IC8vIFJlcGxhY2UgYFsuLi5uZXcgU2V0KCldYCB0byBhdm9pZCBwb2x5ZmlsbGluZyBjb3JlLWpzXG59O1xuXG5leHBvcnQge2dldEFsbEltYWdlc307XG4iLCAiZXhwb3J0IHthcGl9IGZyb20gJ2V4dC5nYWRnZXQuUXVpY2tJbXBvcnQnO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxxQkFBZ0RDLFFBQUEsd0JBQUE7O0FDQWhELElBQUFDLHFCQUF5Q0QsUUFBQSxpQkFBQTs7QUNBekMsSUFBQUUsb0JBQWtCRixRQUFBLHdCQUFBOztBREVsQixJQUFBRyxxQkFBdUJILFFBQUEscUJBQUE7QUFFdkIsSUFBSUksbUJBQXFDO0VBQ3hDQyxXQUFXQSxNQUFNO0VBQUM7QUFDbkI7QUFFQSxJQUFNQyxjQUFBLDJCQUFBO0FBQUEsTUFBQUMsT0FBQUMsa0JBQWMsV0FBT0MsUUFBOEI7QUFDeEQsVUFBTUMsU0FBK0I7TUFDcENEO01BQ0FFLFFBQVE7TUFDUkMsUUFBUTtNQUNSQyxlQUFlO01BQ2ZDLE1BQU07TUFDTkMsU0FBUztJQUNWO0FBQ0EsVUFBTUMsV0FBQSxNQUFpQmQsa0JBQUFlLElBQUlDLEtBQUtSLE1BQU07QUFFdEMsV0FBT007RUFDUixDQUFBO0FBQUEsU0FBQSxTQVpNVixhQUFBYSxJQUFBO0FBQUEsV0FBQVosS0FBQWEsTUFBQSxNQUFBQyxTQUFBO0VBQUE7QUFBQSxFQUFBO0FBY04sSUFBTUMsUUFBQSwyQkFBQTtBQUFBLE1BQUFDLFFBQUFmLGtCQUFRLFdBQU9nQixNQUFpQjtBQUNyQyxVQUFNZCxTQUF5QjtNQUM5QmM7TUFDQWIsUUFBUTtNQUNSQyxRQUFRO01BQ1JDLGVBQWU7TUFDZkMsTUFBTTtNQUNOVyxXQUFXO01BQ1hDLFlBQVk7SUFDYjtBQUNBLFVBQU1WLFdBQUEsTUFBaUJkLGtCQUFBZSxJQUFJQyxLQUFLUixNQUFNO0FBRXRDLFdBQU9NO0VBQ1IsQ0FBQTtBQUFBLFNBQUEsU0FiTU0sT0FBQUssS0FBQTtBQUFBLFdBQUFKLE1BQUFILE1BQUEsTUFBQUMsU0FBQTtFQUFBO0FBQUEsRUFBQTtBQWVOLElBQU1PLGNBQUEsMkJBQUE7QUFBQSxNQUFBQyxRQUFBckIsa0JBQWMsV0FBT0MsUUFBcUI7QUFDL0MsUUFBSXFCLG1CQUF3QyxDQUFBO0FBQUMsUUFBQUMsWUFBQUMsMkJBRXpCdkIsTUFBQSxHQUFBd0I7QUFBQSxRQUFBO0FBQXBCLFdBQUFGLFVBQUFHLEVBQUEsR0FBQSxFQUFBRCxRQUFBRixVQUFBSSxFQUFBLEdBQUFDLFFBQTRCO0FBQUEsY0FBakJDLFFBQUFKLE1BQUFLO0FBQ1YsWUFBSTtBQUNILGdCQUFNQyxnQkFBQSxNQUFzQmpCLE1BQU1lLEtBQUs7QUFDdkMsY0FBSSxDQUFDRSxjQUFjLE9BQU8sS0FBSyxDQUFDQSxjQUFjLE9BQU8sRUFBRUMsTUFBTTtBQUM1RDtVQUNEO0FBQ0EsZ0JBQU1DLGNBQWNDLFNBQVNDLGNBQWMsTUFBTTtBQUNqREYsc0JBQVlHLFlBQVlMLGNBQWMsT0FBTyxFQUFFQztBQUUvQ1YsNkJBQW1CLENBQ2xCLEdBQUdXLFlBQVlJLGlCQUFvQyx3QkFBd0IsR0FDM0UsR0FBR0osWUFBWUksaUJBQW9DLHdCQUF3QixDQUFBO1FBRTdFLFFBQVE7UUFBQztNQUNWO0lBQUEsU0FBQUMsS0FBQTtBQUFBZixnQkFBQWdCLEVBQUFELEdBQUE7SUFBQSxVQUFBO0FBQUFmLGdCQUFBaUIsRUFBQTtJQUFBO0FBRUFsQix1QkFBbUIsQ0FDbEIsR0FBR0Esa0JBQ0gsR0FBR1ksU0FBU0csaUJBQW9DLHdCQUF3QixHQUN4RSxHQUFHSCxTQUFTRyxpQkFBb0Msd0JBQXdCLENBQUE7QUFHekUsV0FBT2Y7RUFDUixDQUFBO0FBQUEsU0FBQSxTQTFCTUYsYUFBQXFCLEtBQUE7QUFBQSxXQUFBcEIsTUFBQVQsTUFBQSxNQUFBQyxTQUFBO0VBQUE7QUFBQSxFQUFBO0FBNEJOLElBQU02Qix3QkFBeUJwQixzQkFBMEM7QUFDeEUsUUFBTXFCLFlBQXNCLENBQUE7QUFDNUIsUUFBTTtJQUFDQztJQUFlQztFQUFRLElBQUlDLEdBQUdDLE9BQU9DLElBQUk7QUFDaEQsUUFBTUMsZUFBdUIsSUFBSUMsT0FBQSxHQUFBQyxPQUFVUCxjQUFjUSxRQUFRLE1BQU0sRUFBRSxHQUFDLGNBQUEsQ0FBYztBQUN4RixRQUFNQyxjQUFzQixJQUFJSCxPQUFBLEdBQUFDLE9BQVVOLFVBQVEsd0JBQUEsQ0FBd0I7QUFBQSxNQUFBUyxhQUFBOUIsNEJBRS9ELEdBQVcvQixtQkFBQThELGFBQVlqQyxnQkFBZ0IsQ0FBQSxHQUFBa0M7QUFBQSxNQUFBO0FBQWxELFNBQUFGLFdBQUE1QixFQUFBLEdBQUEsRUFBQThCLFNBQUFGLFdBQUEzQixFQUFBLEdBQUFDLFFBQXFEO0FBQUEsWUFBMUM2QixVQUFBRCxPQUFBMUI7QUFFVixZQUFNO1FBQUM0QjtRQUFNQztNQUFTLElBQUlGO0FBRTFCLFVBQUksQ0FBQ0MsUUFBUUEsS0FBS0UsU0FBUyxXQUFXLEdBQUc7QUFDeEM7TUFDRDtBQUVBLFVBQUlELFVBQVVFLFNBQVMsS0FBSyxHQUFHO0FBQzlCO01BQ0Q7QUFFQSxVQUFJQztBQUNKLFVBQUliLGFBQWFjLEtBQUtMLElBQUksR0FBRztBQUM1QixjQUFNTSxRQUF5QmYsYUFBYWdCLEtBQUtQLElBQUk7QUFDckRJLG1CQUFXRSxNQUFNLENBQUM7QUFDbEJGLG1CQUFXQSxTQUFTVixRQUFRLHlCQUF5QixPQUFPO0FBQzVEVSxtQkFBV0ksbUJBQW1CSixRQUFRO0FBQ3RDbkIsa0JBQVVBLFVBQVV3QixNQUFNLElBQUlMO01BQy9CO0FBRUEsVUFBSVQsWUFBWVUsS0FBS0wsSUFBSSxHQUFHO0FBQzNCLGNBQU1NLFFBQXlCWCxZQUFZWSxLQUFLUCxJQUFJO0FBQ3BESSxtQkFBV0UsTUFBTSxDQUFDO0FBQ2xCRixtQkFBV0EsU0FBU1YsUUFBUSx5QkFBeUIsT0FBTztBQUM1RFUsbUJBQVdJLG1CQUFtQkosUUFBUTtBQUN0Q25CLGtCQUFVQSxVQUFVd0IsTUFBTSxJQUFJTDtNQUMvQjtJQUNEO0VBQUEsU0FBQXhCLEtBQUE7QUFBQWdCLGVBQUFmLEVBQUFELEdBQUE7RUFBQSxVQUFBO0FBQUFnQixlQUFBZCxFQUFBO0VBQUE7QUFFQSxTQUFPRztBQUNSO0FBRUEsSUFBTXlCLFlBQUEsMkJBQUE7QUFBQSxNQUFBQyxRQUFBckUsa0JBQVksV0FBT0MsUUFBOEI7QUFDdEQsUUFBSTBDLFlBQXNCLENBQUE7QUFDMUIsUUFBSXJCLG1CQUF3QyxDQUFBO0FBRTVDckIsY0FBQSxHQUFTUixtQkFBQTZFLGVBQWNyRSxNQUFNO0FBRzdCLFFBQUk7QUFDSCxZQUFNc0UscUJBQUEsTUFBMkJ6RSxZQUFZRyxNQUFNO0FBQ25ELFVBQ0NzRSxtQkFBbUIsT0FBTyxLQUMxQkEsbUJBQW1CLE9BQU8sRUFBRUMsTUFBTSxDQUFDLEtBQ25DRCxtQkFBbUIsT0FBTyxFQUFFQyxNQUFNLENBQUMsRUFBRUMsUUFDcEM7QUFBQSxZQUFBQyxhQUFBbEQsMkJBQ3VCK0MsbUJBQW1CLE9BQU8sRUFBRUMsTUFBTSxDQUFDLEVBQUVDLE1BQUEsR0FBQUU7QUFBQSxZQUFBO0FBQTdELGVBQUFELFdBQUFoRCxFQUFBLEdBQUEsRUFBQWlELFNBQUFELFdBQUEvQyxFQUFBLEdBQUFDLFFBR0s7QUFBQSxrQkFITWdELFlBQUFELE9BQUE3QztBQUlWLGdCQUFJLENBQUM4QyxhQUFhLENBQUNBLFVBQVUvQyxPQUFPO0FBQ25DO1lBQ0Q7QUFDQWMsc0JBQVVBLFVBQVV3QixNQUFNLElBQUlTLFVBQVUvQztVQUN6QztRQUFBLFNBQUFTLEtBQUE7QUFBQW9DLHFCQUFBbkMsRUFBQUQsR0FBQTtRQUFBLFVBQUE7QUFBQW9DLHFCQUFBbEMsRUFBQTtRQUFBO01BQ0Q7SUFDRCxRQUFRO0lBQUM7QUFFVGxCLHVCQUFBLE1BQXlCRixZQUFZbkIsTUFBTTtBQUczQzBDLGdCQUFZLENBQUMsR0FBR0EsV0FBVyxHQUFHRCxzQkFBc0JwQixnQkFBZ0IsQ0FBQztBQUVyRSxXQUFPcUI7RUFDUixDQUFBO0FBQUEsU0FBQSxTQWhDTXlCLFdBQUFTLEtBQUE7QUFBQSxXQUFBUixNQUFBekQsTUFBQSxNQUFBQyxTQUFBO0VBQUE7QUFBQSxFQUFBO0FBa0NOLElBQU1pRSxlQUFBLDJCQUFBO0FBQUEsTUFBQUMsUUFBQS9FLGtCQUFlLFdBQU9DLFFBQWtEO0FBQzdFTCxxQkFBaUJDLFVBQVU7QUFDM0IsS0FBQSxHQUFBRixtQkFBQXFGLFVBQ0M7TUFDQ2hELE1BQU07TUFDTmlELFVBQVU7SUFDWCxHQUNBLE1BQ0Q7QUFFQSxRQUFJdEMsWUFBc0IsQ0FBQTtBQUMxQixVQUFNO01BQUN1QztNQUFtQkM7SUFBVSxJQUFJckMsR0FBR0MsT0FBT0MsSUFBSTtBQUV0RCxRQUFJLENBQUMvQyxVQUFVLENBQUNBLE9BQU9rRSxRQUFRO0FBQzlCbEUsZUFBU2lGLG9CQUFvQixJQUFJLENBQUEsSUFBSyxDQUFDQyxVQUFVO0lBQ2xEO0FBRUEsUUFBSWxGLE9BQU9rRSxRQUFRO0FBQ2xCeEIsa0JBQUEsTUFBa0J5QixVQUFVbkUsTUFBTTtJQUNuQztBQUVBMEMsZ0JBQVksQ0FDWCxHQUFHQSxXQUNILEdBQUdELHNCQUFzQixDQUN4QixHQUFHUixTQUFTRyxpQkFBb0Msd0JBQXdCLEdBQ3hFLEdBQUdILFNBQVNHLGlCQUFvQyx3QkFBd0IsQ0FBQSxDQUN4RSxDQUFBO0FBRUZNLGdCQUFZLENBQUMsR0FBR0EsV0FBVyxHQUFBLE1BQVV5QixVQUFVbkUsTUFBTSxHQUFJLEdBQUEsTUFBVW1FLFVBQVV6QixTQUFTLENBQUU7QUFFeEYvQyxxQkFBaUJDLFVBQVU7QUFDM0JELHdCQUFBLEdBQW1CRCxtQkFBQXFGLFVBQ2xCO01BQ0NoRCxNQUFNO01BQ05pRCxVQUFVO0lBQ1gsR0FDQSxTQUNEO0FBRUEsWUFBQSxHQUFPeEYsbUJBQUE4RCxhQUFZWixTQUFTO0VBQzdCLENBQUE7QUFBQSxTQUFBLFNBeENNbUMsY0FBQU0sS0FBQTtBQUFBLFdBQUFMLE1BQUFuRSxNQUFBLE1BQUFDLFNBQUE7RUFBQTtBQUFBLEVBQUE7O0FEaElOd0UsT0FBT0MsdUJBQXVCL0YsbUJBQUErRjtBQUM5QkQsT0FBT1AsZUFBZUE7Q0FFckIsU0FBU1Msc0JBQTRCO0FBQ3JDLFFBQU07SUFBQ0M7SUFBNEJDO0VBQWUsSUFBSTNDLEdBQUdDLE9BQU9DLElBQUk7QUFDcEUsTUFDQyxFQUNDeUMsbUJBQ0EsQ0FBQyxlQUFlLG1CQUFtQixhQUFhLEVBQUU3QixTQUFTNEIsOEJBQThCLEVBQUUsSUFFM0Y7QUFDRDtFQUNEO0FBRUEsUUFBTUUsWUFBbUN4RCxTQUFTeUQsY0FBYyxhQUFhLElBQUksZUFBZTtBQUNoRyxRQUFNbEMsVUFBZ0NYLEdBQUc4QyxLQUFLQyxlQUFlSCxXQUFXLEtBQUssYUFBYSxVQUFVO0FBQ3BHLE1BQUksQ0FBQ2pDLFNBQVM7QUFDYjtFQUNEO0FBRUFBLFVBQVFxQyxpQkFBaUIsU0FBUyxNQUFZO0FBQzdDLFNBQUE5RixrQkFBTSxhQUFZO0FBQ2pCLFlBQU0yQyxZQUFBLE1BQWtCbUMsYUFBYTtBQUNyQyxVQUFJLENBQUNuQyxVQUFVd0IsUUFBUTtBQUN0QjtNQUNEO0FBQ0EsYUFBQSxHQUFNNUUsbUJBQUErRixzQkFBcUIzQyxXQUFXLElBQUk7SUFDM0MsQ0FBQSxFQUFHLEVBQUVvRCxLQUFLLE1BQU07QUFDZixPQUFBLEdBQUF4RyxtQkFBQXlHLGFBQVk7SUFDYixDQUFDO0VBQ0YsQ0FBQztBQUNGLEdBQUc7IiwKICAibmFtZXMiOiBbImltcG9ydF9leHRfZ2FkZ2V0NCIsICJyZXF1aXJlIiwgImltcG9ydF9leHRfZ2FkZ2V0MiIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJpbXBvcnRfZXh0X2dhZGdldDMiLCAidG9hc3RpZnlJbnN0YW5jZSIsICJoaWRlVG9hc3QiLCAicXVlcnlJbWFnZXMiLCAiX3JlZiIsICJfYXN5bmNUb0dlbmVyYXRvciIsICJ0aXRsZXMiLCAicGFyYW1zIiwgImFjdGlvbiIsICJmb3JtYXQiLCAiZm9ybWF0dmVyc2lvbiIsICJwcm9wIiwgImltbGltaXQiLCAicmVzcG9uc2UiLCAiYXBpIiwgInBvc3QiLCAiX3giLCAiYXBwbHkiLCAiYXJndW1lbnRzIiwgInBhcnNlIiwgIl9yZWYyIiwgInBhZ2UiLCAicmVkaXJlY3RzIiwgImRpc2FibGV0b2MiLCAiX3gyIiwgImdldEVsZW1lbnRzIiwgIl9yZWYzIiwgImZpbGVMaW5rRWxlbWVudHMiLCAiX2l0ZXJhdG9yIiwgIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwgIl9zdGVwIiwgInMiLCAibiIsICJkb25lIiwgInRpdGxlIiwgInZhbHVlIiwgInBhcnNlUmVzcG9uc2UiLCAidGV4dCIsICJwYWdlQ29udGVudCIsICJkb2N1bWVudCIsICJjcmVhdGVFbGVtZW50IiwgImlubmVySFRNTCIsICJxdWVyeVNlbGVjdG9yQWxsIiwgImVyciIsICJlIiwgImYiLCAiX3gzIiwgImdldEltYWdlc0Zyb21FbGVtZW50cyIsICJmaWxlTmFtZXMiLCAid2dBcnRpY2xlUGF0aCIsICJ3Z1NjcmlwdCIsICJtdyIsICJjb25maWciLCAiZ2V0IiwgImFydGljbGVSZWdleCIsICJSZWdFeHAiLCAiY29uY2F0IiwgInJlcGxhY2UiLCAic2NyaXB0UmVnZXgiLCAiX2l0ZXJhdG9yMiIsICJ1bmlxdWVBcnJheSIsICJfc3RlcDIiLCAiZWxlbWVudCIsICJocmVmIiwgImNsYXNzTGlzdCIsICJpbmNsdWRlcyIsICJjb250YWlucyIsICJmaWxlTmFtZSIsICJ0ZXN0IiwgIm1hdGNoIiwgImV4ZWMiLCAiZGVjb2RlVVJJQ29tcG9uZW50IiwgImxlbmd0aCIsICJnZXRJbWFnZXMiLCAiX3JlZjQiLCAiZ2VuZXJhdGVBcnJheSIsICJxdWVyeUltYWdlUmVzcG9uc2UiLCAicGFnZXMiLCAiaW1hZ2VzIiwgIl9pdGVyYXRvcjMiLCAiX3N0ZXAzIiwgImltYWdlSW5mbyIsICJfeDQiLCAiZ2V0QWxsSW1hZ2VzIiwgIl9yZWY1IiwgInRvYXN0aWZ5IiwgImR1cmF0aW9uIiwgIndnTmFtZXNwYWNlTnVtYmVyIiwgIndnUGFnZU5hbWUiLCAiX3g1IiwgIndpbmRvdyIsICJkZXRlY3RJZkZpbGVSZWRpcmVjdCIsICJxdWlja0ltcG9ydEFsbE1lZGlhIiwgIndnQ2Fub25pY2FsU3BlY2lhbFBhZ2VOYW1lIiwgIndnQ3VyUmV2aXNpb25JZCIsICJwb3J0bGV0SWQiLCAicXVlcnlTZWxlY3RvciIsICJ1dGlsIiwgImFkZFBvcnRsZXRMaW5rIiwgImFkZEV2ZW50TGlzdGVuZXIiLCAidGhlbiIsICJyZWZyZXNoUGFnZSJdCn0K

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
function _createForOfIteratorHelper(r, e) {
  var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (!t) {
    if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) {
      t && (r = t);
      var n = 0, F = function() {
      };
      return { s: F, n: function() {
        return n >= r.length ? { done: true } : { done: false, value: r[n++] };
      }, e: function(r2) {
        throw r2;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var o, a = true, u = false;
  return { s: function() {
    t = t.call(r);
  }, n: function() {
    var r2 = t.next();
    return a = r2.done, r2;
  }, e: function(r2) {
    u = true, o = r2;
  }, f: function() {
    try {
      a || null == t.return || t.return();
    } finally {
      if (u) throw o;
    }
  } };
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}
function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function asyncGeneratorStep(n, t, e, r, o, a, c) {
  try {
    var i = n[a](c), u = i.value;
  } catch (n2) {
    return void e(n2);
  }
  i.done ? t(u) : Promise.resolve(u).then(r, o);
}
function _asyncToGenerator(n) {
  return function() {
    var t = this, e = arguments;
    return new Promise(function(r, o) {
      var a = n.apply(t, e);
      function _next(n2) {
        asyncGeneratorStep(a, r, o, _next, _throw, "next", n2);
      }
      function _throw(n2) {
        asyncGeneratorStep(a, r, o, _next, _throw, "throw", n2);
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
var parse = /* @__PURE__ */ function() {
  var _ref = _asyncToGenerator(function* (page) {
    const params = {
      page,
      action: "parse",
      format: "json",
      formatversion: "2",
      prop: "text",
      redirects: true,
      disabletoc: true
    };
    const response = yield import_ext_gadget.api.get(params);
    return response;
  });
  return function parse2(_x) {
    return _ref.apply(this, arguments);
  };
}();
var getElements = (element) => {
  return [...element.querySelectorAll("a[href^='/wiki/File:']"), ...element.querySelectorAll("a[href*='title=File:']")];
};
var getElementsFromParse = /* @__PURE__ */ function() {
  var _ref2 = _asyncToGenerator(function* (titles) {
    const fileLinkElements = [];
    titles = (0, import_ext_gadget2.uniqueArray)(titles);
    var _iterator = _createForOfIteratorHelper(titles), _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done; ) {
        const title = _step.value;
        try {
          const response = yield parse(title);
          if (!response["parse"] || !response["parse"].text) {
            continue;
          }
          const pageContent = document.createElement("span");
          pageContent.innerHTML = response["parse"].text;
          var _iterator2 = _createForOfIteratorHelper(getElements(pageContent)), _step2;
          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
              const element = _step2.value;
              fileLinkElements[fileLinkElements.length] = element;
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
        } catch {
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    return fileLinkElements;
  });
  return function getElementsFromParse2(_x2) {
    return _ref2.apply(this, arguments);
  };
}();
var queryImages = /* @__PURE__ */ function() {
  var _ref3 = _asyncToGenerator(function* (titles) {
    const params = {
      titles,
      action: "query",
      format: "json",
      formatversion: "2",
      prop: "images",
      imlimit: 5e3
    };
    const response = yield import_ext_gadget.api.get(params);
    return response;
  });
  return function queryImages2(_x3) {
    return _ref3.apply(this, arguments);
  };
}();
var getImagesFromElements = (fileLinkElements) => {
  const fileNames = [];
  fileLinkElements = (0, import_ext_gadget2.uniqueArray)(fileLinkElements);
  const {
    wgArticlePath,
    wgScript
  } = mw.config.get();
  const articleRegex = new RegExp("".concat(wgArticlePath.replace("$1", ""), "(File:[^#]+)"));
  const scriptRegex = new RegExp("".concat(wgScript, "\\?title=(File:[^#&]+)"));
  var _iterator3 = _createForOfIteratorHelper(fileLinkElements), _step3;
  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
      const element = _step3.value;
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
        fileName = decodeURIComponent(fileName).replace(/((File|Image):)((File|Image):)?/i, "File:").replace("+", "_");
      }
      if (scriptRegex.test(href)) {
        const match = scriptRegex.exec(href);
        fileName = match[1];
        fileName = decodeURIComponent(fileName).replace(/((File|Image):)((File|Image):)?/i, "File:").replace("+", "_");
        fileNames[fileNames.length] = fileName;
      }
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }
  return (0, import_ext_gadget2.uniqueArray)(fileNames);
};
var getImages = /* @__PURE__ */ function() {
  var _ref4 = _asyncToGenerator(function* (titles) {
    const fileNames = [];
    titles = (0, import_ext_gadget2.uniqueArray)((0, import_ext_gadget2.generateArray)(titles));
    for (let i = 0; i < titles.length; i++) {
      const querytitles = titles.splice(0, 50);
      if (!querytitles.length) {
        continue;
      }
      try {
        const response = yield queryImages(querytitles);
        if (!response["query"] || !response["query"].pages) {
          continue;
        }
        var _iterator4 = _createForOfIteratorHelper(response["query"].pages), _step4;
        try {
          for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
            const page = _step4.value;
            if (!page.images) {
              continue;
            }
            var _iterator5 = _createForOfIteratorHelper(page.images), _step5;
            try {
              for (_iterator5.s(); !(_step5 = _iterator5.n()).done; ) {
                const {
                  title
                } = _step5.value;
                if (!title) {
                  continue;
                }
                fileNames[fileNames.length] = title;
              }
            } catch (err) {
              _iterator5.e(err);
            } finally {
              _iterator5.f();
            }
          }
        } catch (err) {
          _iterator4.e(err);
        } finally {
          _iterator4.f();
        }
      } catch {
      }
    }
    return (0, import_ext_gadget2.uniqueArray)(fileNames);
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
    const elementsFromPage = getElements(document);
    const fileNamesFromPage = getImagesFromElements(elementsFromPage);
    const elementsFromParse = yield getElementsFromParse(fileNamesFromPage);
    const fileNamesFromParse = getImagesFromElements(elementsFromParse);
    fileNames = (0, import_ext_gadget2.uniqueArray)([...fileNamesFromPage, ...fileNamesFromParse, ...yield getImages([...titles, ...fileNamesFromPage])]);
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1F1aWNrSW1wb3J0QWxsTWVkaWEvUXVpY2tJbXBvcnRBbGxNZWRpYS50cyIsICJzcmMvUXVpY2tJbXBvcnRBbGxNZWRpYS9tb2R1bGVzL2NvcmUudHMiLCAic3JjL1F1aWNrSW1wb3J0QWxsTWVkaWEvbW9kdWxlcy9hcGkudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7ZGV0ZWN0SWZGaWxlUmVkaXJlY3QsIHJlZnJlc2hQYWdlfSBmcm9tICdleHQuZ2FkZ2V0LlF1aWNrSW1wb3J0JztcbmltcG9ydCB7Z2V0QWxsSW1hZ2VzfSBmcm9tICcuL21vZHVsZXMvY29yZSc7XG5cbmRlY2xhcmUgZ2xvYmFsIHtcblx0aW50ZXJmYWNlIFdpbmRvdyB7XG5cdFx0ZGV0ZWN0SWZGaWxlUmVkaXJlY3Q6IERldGVjdElmRmlsZVJlZGlyZWN0O1xuXHRcdGdldEFsbEltYWdlczogdHlwZW9mIGdldEFsbEltYWdlcztcblx0fVxufVxuXG53aW5kb3cuZGV0ZWN0SWZGaWxlUmVkaXJlY3QgPSBkZXRlY3RJZkZpbGVSZWRpcmVjdDtcbndpbmRvdy5nZXRBbGxJbWFnZXMgPSBnZXRBbGxJbWFnZXM7XG5cbihmdW5jdGlvbiBxdWlja0ltcG9ydEFsbE1lZGlhKCk6IHZvaWQge1xuXHRjb25zdCB7d2dDYW5vbmljYWxTcGVjaWFsUGFnZU5hbWUsIHdnQ3VyUmV2aXNpb25JZH0gPSBtdy5jb25maWcuZ2V0KCk7XG5cdGlmIChcblx0XHQhKFxuXHRcdFx0d2dDdXJSZXZpc2lvbklkIHx8XG5cdFx0XHRbJ1ByZWZpeGluZGV4JywgJ0Jyb2tlblJlZGlyZWN0cycsICdXYW50ZWRmaWxlcyddLmluY2x1ZGVzKHdnQ2Fub25pY2FsU3BlY2lhbFBhZ2VOYW1lIHx8ICcnKVxuXHRcdClcblx0KSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgcG9ydGxldElkOiAncC1jYWN0aW9ucycgfCAncC10YicgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcC1jYWN0aW9ucycpID8gJ3AtY2FjdGlvbnMnIDogJ3AtdGInO1xuXHRjb25zdCBlbGVtZW50OiBIVE1MTElFbGVtZW50IHwgbnVsbCA9IG13LnV0aWwuYWRkUG9ydGxldExpbmsocG9ydGxldElkLCAnIycsICflr7zlhaXmraTpobXpnaLmiYDmnInmlofku7YnLCAndC1pbXBvcnQnKTtcblx0aWYgKCFlbGVtZW50KSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpOiB2b2lkID0+IHtcblx0XHR2b2lkIChhc3luYyAoKSA9PiB7XG5cdFx0XHRjb25zdCBmaWxlTmFtZXMgPSBhd2FpdCBnZXRBbGxJbWFnZXMoKTtcblx0XHRcdGlmICghZmlsZU5hbWVzLmxlbmd0aCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRhd2FpdCBkZXRlY3RJZkZpbGVSZWRpcmVjdChmaWxlTmFtZXMsIHRydWUpO1xuXHRcdH0pKCkudGhlbigoKSA9PiB7XG5cdFx0XHRyZWZyZXNoUGFnZSgpO1xuXHRcdH0pO1xuXHR9KTtcbn0pKCk7XG4iLCAiaW1wb3J0IHtnZW5lcmF0ZUFycmF5LCB1bmlxdWVBcnJheX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbmltcG9ydCB7YXBpfSBmcm9tICcuL2FwaSc7XG5pbXBvcnQge3RvYXN0aWZ5fSBmcm9tICdleHQuZ2FkZ2V0LlRvYXN0aWZ5JztcblxubGV0IHRvYXN0aWZ5SW5zdGFuY2U6IFRvYXN0aWZ5SW5zdGFuY2UgPSB7XG5cdGhpZGVUb2FzdDogKCkgPT4ge30sXG59O1xuXG5jb25zdCBwYXJzZSA9IGFzeW5jIChwYWdlOiBzdHJpbmcpID0+IHtcblx0Y29uc3QgcGFyYW1zOiBBcGlQYXJzZVBhcmFtcyA9IHtcblx0XHRwYWdlLFxuXHRcdGFjdGlvbjogJ3BhcnNlJyxcblx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0cHJvcDogJ3RleHQnLFxuXHRcdHJlZGlyZWN0czogdHJ1ZSxcblx0XHRkaXNhYmxldG9jOiB0cnVlLFxuXHR9O1xuXHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGFwaS5nZXQocGFyYW1zKTtcblxuXHRyZXR1cm4gcmVzcG9uc2U7XG59O1xuXG5jb25zdCBnZXRFbGVtZW50cyA9IChlbGVtZW50OiBEb2N1bWVudCB8IEhUTUxFbGVtZW50KSA9PiB7XG5cdHJldHVybiBbXG5cdFx0Li4uZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxBbmNob3JFbGVtZW50PihcImFbaHJlZl49Jy93aWtpL0ZpbGU6J11cIiksXG5cdFx0Li4uZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxBbmNob3JFbGVtZW50PihcImFbaHJlZio9J3RpdGxlPUZpbGU6J11cIiksXG5cdF07XG59O1xuXG5jb25zdCBnZXRFbGVtZW50c0Zyb21QYXJzZSA9IGFzeW5jICh0aXRsZXM6IHN0cmluZ1tdKSA9PiB7XG5cdGNvbnN0IGZpbGVMaW5rRWxlbWVudHM6IEhUTUxBbmNob3JFbGVtZW50W10gPSBbXTtcblx0dGl0bGVzID0gdW5pcXVlQXJyYXkodGl0bGVzKTtcblxuXHRmb3IgKGNvbnN0IHRpdGxlIG9mIHRpdGxlcykge1xuXHRcdHRyeSB7XG5cdFx0XHRjb25zdCByZXNwb25zZSA9IGF3YWl0IHBhcnNlKHRpdGxlKTtcblx0XHRcdGlmICghcmVzcG9uc2VbJ3BhcnNlJ10gfHwgIXJlc3BvbnNlWydwYXJzZSddLnRleHQpIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IHBhZ2VDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuXHRcdFx0cGFnZUNvbnRlbnQuaW5uZXJIVE1MID0gcmVzcG9uc2VbJ3BhcnNlJ10udGV4dCBhcyBzdHJpbmc7XG5cblx0XHRcdGZvciAoY29uc3QgZWxlbWVudCBvZiBnZXRFbGVtZW50cyhwYWdlQ29udGVudCkpIHtcblx0XHRcdFx0ZmlsZUxpbmtFbGVtZW50c1tmaWxlTGlua0VsZW1lbnRzLmxlbmd0aF0gPSBlbGVtZW50O1xuXHRcdFx0fVxuXHRcdH0gY2F0Y2gge31cblx0fVxuXG5cdHJldHVybiBmaWxlTGlua0VsZW1lbnRzO1xufTtcblxuY29uc3QgcXVlcnlJbWFnZXMgPSBhc3luYyAodGl0bGVzOiBzdHJpbmcgfCBzdHJpbmdbXSkgPT4ge1xuXHRjb25zdCBwYXJhbXM6IEFwaVF1ZXJ5SW1hZ2VzUGFyYW1zID0ge1xuXHRcdHRpdGxlcyxcblx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdHByb3A6ICdpbWFnZXMnLFxuXHRcdGltbGltaXQ6IDUwMDAsXG5cdH07XG5cdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXBpLmdldChwYXJhbXMpO1xuXG5cdHJldHVybiByZXNwb25zZTtcbn07XG5cbmNvbnN0IGdldEltYWdlc0Zyb21FbGVtZW50cyA9IChmaWxlTGlua0VsZW1lbnRzOiBIVE1MQW5jaG9yRWxlbWVudFtdKSA9PiB7XG5cdGNvbnN0IGZpbGVOYW1lczogc3RyaW5nW10gPSBbXTtcblx0ZmlsZUxpbmtFbGVtZW50cyA9IHVuaXF1ZUFycmF5KGZpbGVMaW5rRWxlbWVudHMpO1xuXHRjb25zdCB7d2dBcnRpY2xlUGF0aCwgd2dTY3JpcHR9ID0gbXcuY29uZmlnLmdldCgpO1xuXHRjb25zdCBhcnRpY2xlUmVnZXg6IFJlZ0V4cCA9IG5ldyBSZWdFeHAoYCR7d2dBcnRpY2xlUGF0aC5yZXBsYWNlKCckMScsICcnKX0oRmlsZTpbXiNdKylgKTtcblx0Y29uc3Qgc2NyaXB0UmVnZXg6IFJlZ0V4cCA9IG5ldyBSZWdFeHAoYCR7d2dTY3JpcHR9XFxcXD90aXRsZT0oRmlsZTpbXiMmXSspYCk7XG5cblx0Zm9yIChjb25zdCBlbGVtZW50IG9mIGZpbGVMaW5rRWxlbWVudHMpIHtcblx0XHQvLyBSZXBsYWNlIGBuZXcgU2V0KClgIHRvIGF2b2lkIHBvbHlmaWxsaW5nIGNvcmUtanNcblx0XHRjb25zdCB7aHJlZiwgY2xhc3NMaXN0fSA9IGVsZW1lbnQ7XG5cblx0XHRpZiAoIWhyZWYgfHwgaHJlZi5pbmNsdWRlcygncmVkbGluaz0xJykpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGlmIChjbGFzc0xpc3QuY29udGFpbnMoJ25ldycpKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRsZXQgZmlsZU5hbWU6IHN0cmluZyB8IHVuZGVmaW5lZDtcblx0XHRpZiAoYXJ0aWNsZVJlZ2V4LnRlc3QoaHJlZikpIHtcblx0XHRcdGNvbnN0IG1hdGNoOiBSZWdFeHBFeGVjQXJyYXkgPSBhcnRpY2xlUmVnZXguZXhlYyhocmVmKSBhcyBSZWdFeHBFeGVjQXJyYXk7XG5cdFx0XHRmaWxlTmFtZSA9IG1hdGNoWzFdIGFzIHN0cmluZztcblx0XHRcdGZpbGVOYW1lID0gZGVjb2RlVVJJQ29tcG9uZW50KGZpbGVOYW1lKVxuXHRcdFx0XHQucmVwbGFjZSgvKChGaWxlfEltYWdlKTopKChGaWxlfEltYWdlKTopPy9pLCAnRmlsZTonKVxuXHRcdFx0XHQucmVwbGFjZSgnKycsICdfJyk7XG5cdFx0fVxuXG5cdFx0aWYgKHNjcmlwdFJlZ2V4LnRlc3QoaHJlZikpIHtcblx0XHRcdGNvbnN0IG1hdGNoOiBSZWdFeHBFeGVjQXJyYXkgPSBzY3JpcHRSZWdleC5leGVjKGhyZWYpIGFzIFJlZ0V4cEV4ZWNBcnJheTtcblx0XHRcdGZpbGVOYW1lID0gbWF0Y2hbMV0gYXMgc3RyaW5nO1xuXHRcdFx0ZmlsZU5hbWUgPSBkZWNvZGVVUklDb21wb25lbnQoZmlsZU5hbWUpXG5cdFx0XHRcdC5yZXBsYWNlKC8oKEZpbGV8SW1hZ2UpOikoKEZpbGV8SW1hZ2UpOik/L2ksICdGaWxlOicpXG5cdFx0XHRcdC5yZXBsYWNlKCcrJywgJ18nKTtcblx0XHRcdGZpbGVOYW1lc1tmaWxlTmFtZXMubGVuZ3RoXSA9IGZpbGVOYW1lO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiB1bmlxdWVBcnJheShmaWxlTmFtZXMpO1xufTtcblxuY29uc3QgZ2V0SW1hZ2VzID0gYXN5bmMgKHRpdGxlczogc3RyaW5nIHwgc3RyaW5nW10pID0+IHtcblx0Y29uc3QgZmlsZU5hbWVzOiBzdHJpbmdbXSA9IFtdO1xuXHR0aXRsZXMgPSB1bmlxdWVBcnJheShnZW5lcmF0ZUFycmF5KHRpdGxlcykpO1xuXG5cdGZvciAobGV0IGkgPSAwOyBpIDwgdGl0bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y29uc3QgcXVlcnl0aXRsZXMgPSB0aXRsZXMuc3BsaWNlKDAsIDUwKTtcblx0XHRpZiAoIXF1ZXJ5dGl0bGVzLmxlbmd0aCkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcXVlcnlJbWFnZXMocXVlcnl0aXRsZXMpO1xuXHRcdFx0aWYgKCFyZXNwb25zZVsncXVlcnknXSB8fCAhcmVzcG9uc2VbJ3F1ZXJ5J10ucGFnZXMpIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cblx0XHRcdGZvciAoY29uc3QgcGFnZSBvZiByZXNwb25zZVsncXVlcnknXS5wYWdlcykge1xuXHRcdFx0XHRpZiAoIXBhZ2UuaW1hZ2VzKSB7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRmb3IgKGNvbnN0IHt0aXRsZX0gb2YgcGFnZS5pbWFnZXMgYXMge1xuXHRcdFx0XHRcdG5zOiBudW1iZXI7XG5cdFx0XHRcdFx0dGl0bGU6IHN0cmluZztcblx0XHRcdFx0fVtdKSB7XG5cdFx0XHRcdFx0aWYgKCF0aXRsZSkge1xuXHRcdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0ZmlsZU5hbWVzW2ZpbGVOYW1lcy5sZW5ndGhdID0gdGl0bGU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9IGNhdGNoIHt9XG5cdH1cblxuXHRyZXR1cm4gdW5pcXVlQXJyYXkoZmlsZU5hbWVzKTtcbn07XG5cbmNvbnN0IGdldEFsbEltYWdlcyA9IGFzeW5jICh0aXRsZXM/OiBzdHJpbmcgfCBzdHJpbmdbXSk6IFByb21pc2U8c3RyaW5nW10+ID0+IHtcblx0dG9hc3RpZnlJbnN0YW5jZS5oaWRlVG9hc3QoKTtcblx0dG9hc3RpZnkoXG5cdFx0e1xuXHRcdFx0dGV4dDogJ+ato+WcqOiOt+WPlui/geenu+ebruaghycsXG5cdFx0XHRkdXJhdGlvbjogLTEsXG5cdFx0fSxcblx0XHQnaW5mbydcblx0KTtcblxuXHRsZXQgZmlsZU5hbWVzOiBzdHJpbmdbXSA9IFtdO1xuXHRjb25zdCB7d2dOYW1lc3BhY2VOdW1iZXIsIHdnUGFnZU5hbWV9ID0gbXcuY29uZmlnLmdldCgpO1xuXG5cdGlmICghdGl0bGVzIHx8ICF0aXRsZXMubGVuZ3RoKSB7XG5cdFx0dGl0bGVzID0gd2dOYW1lc3BhY2VOdW1iZXIgPCAwID8gW10gOiBbd2dQYWdlTmFtZV07XG5cdH1cblxuXHRjb25zdCBlbGVtZW50c0Zyb21QYWdlID0gZ2V0RWxlbWVudHMoZG9jdW1lbnQpO1xuXHRjb25zdCBmaWxlTmFtZXNGcm9tUGFnZSA9IGdldEltYWdlc0Zyb21FbGVtZW50cyhlbGVtZW50c0Zyb21QYWdlKTtcblx0Y29uc3QgZWxlbWVudHNGcm9tUGFyc2UgPSBhd2FpdCBnZXRFbGVtZW50c0Zyb21QYXJzZShmaWxlTmFtZXNGcm9tUGFnZSk7XG5cdGNvbnN0IGZpbGVOYW1lc0Zyb21QYXJzZSA9IGdldEltYWdlc0Zyb21FbGVtZW50cyhlbGVtZW50c0Zyb21QYXJzZSk7XG5cblx0ZmlsZU5hbWVzID0gdW5pcXVlQXJyYXkoW1xuXHRcdC4uLmZpbGVOYW1lc0Zyb21QYWdlLFxuXHRcdC4uLmZpbGVOYW1lc0Zyb21QYXJzZSxcblx0XHQuLi4oYXdhaXQgZ2V0SW1hZ2VzKFsuLi50aXRsZXMsIC4uLmZpbGVOYW1lc0Zyb21QYWdlXSkpLFxuXHRdKTtcblxuXHR0b2FzdGlmeUluc3RhbmNlLmhpZGVUb2FzdCgpO1xuXHR0b2FzdGlmeUluc3RhbmNlID0gdG9hc3RpZnkoXG5cdFx0e1xuXHRcdFx0dGV4dDogJ+iOt+WPlui/geenu+ebruagh+WujOaIkCcsXG5cdFx0XHRkdXJhdGlvbjogLTEsXG5cdFx0fSxcblx0XHQnc3VjY2Vzcydcblx0KTtcblxuXHRyZXR1cm4gdW5pcXVlQXJyYXkoZmlsZU5hbWVzKTsgLy8gUmVwbGFjZSBgWy4uLm5ldyBTZXQoKV1gIHRvIGF2b2lkIHBvbHlmaWxsaW5nIGNvcmUtanNcbn07XG5cbmV4cG9ydCB7Z2V0QWxsSW1hZ2VzfTtcbiIsICJleHBvcnQge2FwaX0gZnJvbSAnZXh0LmdhZGdldC5RdWlja0ltcG9ydCc7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxxQkFBZ0RDLFFBQUEsd0JBQUE7O0FDQWhELElBQUFDLHFCQUF5Q0QsUUFBQSxpQkFBQTs7QUNBekMsSUFBQUUsb0JBQWtCRixRQUFBLHdCQUFBOztBREVsQixJQUFBRyxxQkFBdUJILFFBQUEscUJBQUE7QUFFdkIsSUFBSUksbUJBQXFDO0VBQ3hDQyxXQUFXQSxNQUFNO0VBQUM7QUFDbkI7QUFFQSxJQUFNQyxRQUFBLDJCQUFBO0FBQUEsTUFBQUMsT0FBQUMsa0JBQVEsV0FBT0MsTUFBaUI7QUFDckMsVUFBTUMsU0FBeUI7TUFDOUJEO01BQ0FFLFFBQVE7TUFDUkMsUUFBUTtNQUNSQyxlQUFlO01BQ2ZDLE1BQU07TUFDTkMsV0FBVztNQUNYQyxZQUFZO0lBQ2I7QUFDQSxVQUFNQyxXQUFBLE1BQWlCZixrQkFBQWdCLElBQUlDLElBQUlULE1BQU07QUFFckMsV0FBT087RUFDUixDQUFBO0FBQUEsU0FBQSxTQWJNWCxPQUFBYyxJQUFBO0FBQUEsV0FBQWIsS0FBQWMsTUFBQSxNQUFBQyxTQUFBO0VBQUE7QUFBQSxFQUFBO0FBZU4sSUFBTUMsY0FBZUMsYUFBb0M7QUFDeEQsU0FBTyxDQUNOLEdB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QUNEO0VBQ0Q7QUFFQSxRQUFNRSxZQUFtQ2pFLFNBQVNrRSxjQUFjLGFBQWEsSUFBSSxlQUFlO0FBQ2hHLFFBQU1uRixVQUFnQ21DLEdBQUdpRCxLQUFLQyxlQUFlSCxXQUFXLEtBQUssYUFBYSxVQUFVO0FBQ3BHLE1BQUksQ0FBQ2xGLFNBQVM7QUFDYjtFQUNEO0FBRUFBLFVBQVFzRixpQkFBaUIsU0FBUyxNQUFZO0FBQzdDLFNBQUF0RyxrQkFBTSxhQUFZO0FBQ2pCLFlBQU1nRCxZQUFBLE1BQWtCa0MsYUFBYTtBQUNyQyxVQUFJLENBQUNsQyxVQUFVVixRQUFRO0FBQ3RCO01BQ0Q7QUFDQSxhQUFBLEdBQU0vQyxtQkFBQXVHLHNCQUFxQjlDLFdBQVcsSUFBSTtJQUMzQyxDQUFBLEVBQUcsRUFBRXVELEtBQUssTUFBTTtBQUNmLE9BQUEsR0FBQWhILG1CQUFBaUgsYUFBWTtJQUNiLENBQUM7RUFDRixDQUFDO0FBQ0YsR0FBRzsiLAogICJuYW1lcyI6IFsiaW1wb3J0X2V4dF9nYWRnZXQ0IiwgInJlcXVpcmUiLCAiaW1wb3J0X2V4dF9nYWRnZXQyIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgImltcG9ydF9leHRfZ2FkZ2V0MyIsICJ0b2FzdGlmeUluc3RhbmNlIiwgImhpZGVUb2FzdCIsICJwYXJzZSIsICJfcmVmIiwgIl9hc3luY1RvR2VuZXJhdG9yIiwgInBhZ2UiLCAicGFyYW1zIiwgImFjdGlvbiIsICJmb3JtYXQiLCAiZm9ybWF0dmVyc2lvbiIsICJwcm9wIiwgInJlZGlyZWN0cyIsICJkaXNhYmxldG9jIiwgInJlc3BvbnNlIiwgImFwaSIsICJnZXQiLCAiX3giLCAiYXBwbHkiLCAiYXJndW1lbnRzIiwgImdldEVsZW1lbnRzIiwgImVsZW1lbnQiLCAicXVlcnlTZWxlY3RvckFsbCIsICJnZXRFbGVtZW50c0Zyb21QYXJzZSIsICJfcmVmMiIsICJ0aXRsZXMiLCAiZmlsZUxpbmtFbGVtZW50cyIsICJ1bmlxdWVBcnJheSIsICJfaXRlcmF0b3IiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAiX3N0ZXAiLCAicyIsICJuIiwgImRvbmUiLCAidGl0bGUiLCAidmFsdWUiLCAidGV4dCIsICJwYWdlQ29udGVudCIsICJkb2N1bWVudCIsICJjcmVhdGVFbGVtZW50IiwgImlubmVySFRNTCIsICJfaXRlcmF0b3IyIiwgIl9zdGVwMiIsICJsZW5ndGgiLCAiZXJyIiwgImUiLCAiZiIsICJfeDIiLCAicXVlcnlJbWFnZXMiLCAiX3JlZjMiLCAiaW1saW1pdCIsICJfeDMiLCAiZ2V0SW1hZ2VzRnJvbUVsZW1lbnRzIiwgImZpbGVOYW1lcyIsICJ3Z0FydGljbGVQYXRoIiwgIndnU2NyaXB0IiwgIm13IiwgImNvbmZpZyIsICJhcnRpY2xlUmVnZXgiLCAiUmVnRXhwIiwgImNvbmNhdCIsICJyZXBsYWNlIiwgInNjcmlwdFJlZ2V4IiwgIl9pdGVyYXRvcjMiLCAiX3N0ZXAzIiwgImhyZWYiLCAiY2xhc3NMaXN0IiwgImluY2x1ZGVzIiwgImNvbnRhaW5zIiwgImZpbGVOYW1lIiwgInRlc3QiLCAibWF0Y2giLCAiZXhlYyIsICJkZWNvZGVVUklDb21wb25lbnQiLCAiZ2V0SW1hZ2VzIiwgIl9yZWY0IiwgImdlbmVyYXRlQXJyYXkiLCAiaSIsICJxdWVyeXRpdGxlcyIsICJzcGxpY2UiLCAicGFnZXMiLCAiX2l0ZXJhdG9yNCIsICJfc3RlcDQiLCAiaW1hZ2VzIiwgIl9pdGVyYXRvcjUiLCAiX3N0ZXA1IiwgIl94NCIsICJnZXRBbGxJbWFnZXMiLCAiX3JlZjUiLCAidG9hc3RpZnkiLCAiZHVyYXRpb24iLCAid2dOYW1lc3BhY2VOdW1iZXIiLCAid2dQYWdlTmFtZSIsICJlbGVtZW50c0Zyb21QYWdlIiwgImZpbGVOYW1lc0Zyb21QYWdlIiwgImVsZW1lbnRzRnJvbVBhcnNlIiwgImZpbGVOYW1lc0Zyb21QYXJzZSIsICJfeDUiLCAid2luZG93IiwgImRldGVjdElmRmlsZVJlZGlyZWN0IiwgInF1aWNrSW1wb3J0QWxsTWVkaWEiLCAid2dDYW5vbmljYWxTcGVjaWFsUGFnZU5hbWUiLCAid2dDdXJSZXZpc2lvbklkIiwgInBvcnRsZXRJZCIsICJxdWVyeVNlbGVjdG9yIiwgInV0aWwiLCAiYWRkUG9ydGxldExpbmsiLCAiYWRkRXZlbnRMaXN0ZW5lciIsICJ0aGVuIiwgInJlZnJlc2hQYWdlIl0KfQo=

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
    const response = yield import_ext_gadget.api.post(params);
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
    const response = yield import_ext_gadget.api.post(params);
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1F1aWNrSW1wb3J0QWxsTWVkaWEvUXVpY2tJbXBvcnRBbGxNZWRpYS50cyIsICJzcmMvUXVpY2tJbXBvcnRBbGxNZWRpYS9tb2R1bGVzL2NvcmUudHMiLCAic3JjL1F1aWNrSW1wb3J0QWxsTWVkaWEvbW9kdWxlcy9hcGkudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7ZGV0ZWN0SWZGaWxlUmVkaXJlY3QsIHJlZnJlc2hQYWdlfSBmcm9tICdleHQuZ2FkZ2V0LlF1aWNrSW1wb3J0JztcbmltcG9ydCB7Z2V0QWxsSW1hZ2VzfSBmcm9tICcuL21vZHVsZXMvY29yZSc7XG5cbmRlY2xhcmUgZ2xvYmFsIHtcblx0aW50ZXJmYWNlIFdpbmRvdyB7XG5cdFx0ZGV0ZWN0SWZGaWxlUmVkaXJlY3Q6IERldGVjdElmRmlsZVJlZGlyZWN0O1xuXHRcdGdldEFsbEltYWdlczogdHlwZW9mIGdldEFsbEltYWdlcztcblx0fVxufVxuXG53aW5kb3cuZGV0ZWN0SWZGaWxlUmVkaXJlY3QgPSBkZXRlY3RJZkZpbGVSZWRpcmVjdDtcbndpbmRvdy5nZXRBbGxJbWFnZXMgPSBnZXRBbGxJbWFnZXM7XG5cbihmdW5jdGlvbiBxdWlja0ltcG9ydEFsbE1lZGlhKCk6IHZvaWQge1xuXHRjb25zdCB7d2dDYW5vbmljYWxTcGVjaWFsUGFnZU5hbWUsIHdnQ3VyUmV2aXNpb25JZH0gPSBtdy5jb25maWcuZ2V0KCk7XG5cdGlmIChcblx0XHQhKFxuXHRcdFx0d2dDdXJSZXZpc2lvbklkIHx8XG5cdFx0XHRbJ1ByZWZpeGluZGV4JywgJ0Jyb2tlblJlZGlyZWN0cycsICdXYW50ZWRmaWxlcyddLmluY2x1ZGVzKHdnQ2Fub25pY2FsU3BlY2lhbFBhZ2VOYW1lIHx8ICcnKVxuXHRcdClcblx0KSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgcG9ydGxldElkOiAncC1jYWN0aW9ucycgfCAncC10YicgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcC1jYWN0aW9ucycpID8gJ3AtY2FjdGlvbnMnIDogJ3AtdGInO1xuXHRjb25zdCBlbGVtZW50OiBIVE1MTElFbGVtZW50IHwgbnVsbCA9IG13LnV0aWwuYWRkUG9ydGxldExpbmsocG9ydGxldElkLCAnIycsICflr7zlhaXmraTpobXpnaLmiYDmnInmlofku7YnLCAndC1pbXBvcnQnKTtcblx0aWYgKCFlbGVtZW50KSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpOiB2b2lkID0+IHtcblx0XHR2b2lkIChhc3luYyAoKSA9PiB7XG5cdFx0XHRjb25zdCBmaWxlTmFtZXMgPSBhd2FpdCBnZXRBbGxJbWFnZXMoKTtcblx0XHRcdGlmICghZmlsZU5hbWVzLmxlbmd0aCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRhd2FpdCBkZXRlY3RJZkZpbGVSZWRpcmVjdChmaWxlTmFtZXMsIHRydWUpO1xuXHRcdH0pKCkudGhlbigoKSA9PiB7XG5cdFx0XHRyZWZyZXNoUGFnZSgpO1xuXHRcdH0pO1xuXHR9KTtcbn0pKCk7XG4iLCAiaW1wb3J0IHtnZW5lcmF0ZUFycmF5LCB1bmlxdWVBcnJheX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbmltcG9ydCB7YXBpfSBmcm9tICcuL2FwaSc7XG5pbXBvcnQge3RvYXN0aWZ5fSBmcm9tICdleHQuZ2FkZ2V0LlRvYXN0aWZ5JztcblxubGV0IHRvYXN0aWZ5SW5zdGFuY2U6IFRvYXN0aWZ5SW5zdGFuY2UgPSB7XG5cdGhpZGVUb2FzdDogKCkgPT4ge30sXG59O1xuXG5jb25zdCBwYXJzZSA9IGFzeW5jIChwYWdlOiBzdHJpbmcpID0+IHtcblx0Y29uc3QgcGFyYW1zOiBBcGlQYXJzZVBhcmFtcyA9IHtcblx0XHRwYWdlLFxuXHRcdGFjdGlvbjogJ3BhcnNlJyxcblx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0cHJvcDogJ3RleHQnLFxuXHRcdHJlZGlyZWN0czogdHJ1ZSxcblx0XHRkaXNhYmxldG9jOiB0cnVlLFxuXHR9O1xuXHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGFwaS5wb3N0KHBhcmFtcyk7XG5cblx0cmV0dXJuIHJlc3BvbnNlO1xufTtcblxuY29uc3QgZ2V0RWxlbWVudHMgPSAoZWxlbWVudDogRG9jdW1lbnQgfCBIVE1MRWxlbWVudCkgPT4ge1xuXHRyZXR1cm4gW1xuXHRcdC4uLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MQW5jaG9yRWxlbWVudD4oXCJhW2hyZWZePScvd2lraS9GaWxlOiddXCIpLFxuXHRcdC4uLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MQW5jaG9yRWxlbWVudD4oXCJhW2hyZWYqPSd0aXRsZT1GaWxlOiddXCIpLFxuXHRdO1xufTtcblxuY29uc3QgZ2V0RWxlbWVudHNGcm9tUGFyc2UgPSBhc3luYyAodGl0bGVzOiBzdHJpbmdbXSkgPT4ge1xuXHRjb25zdCBmaWxlTGlua0VsZW1lbnRzOiBIVE1MQW5jaG9yRWxlbWVudFtdID0gW107XG5cdHRpdGxlcyA9IHVuaXF1ZUFycmF5KHRpdGxlcyk7XG5cblx0Zm9yIChjb25zdCB0aXRsZSBvZiB0aXRsZXMpIHtcblx0XHR0cnkge1xuXHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBwYXJzZSh0aXRsZSk7XG5cdFx0XHRpZiAoIXJlc3BvbnNlWydwYXJzZSddIHx8ICFyZXNwb25zZVsncGFyc2UnXS50ZXh0KSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBwYWdlQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcblx0XHRcdHBhZ2VDb250ZW50LmlubmVySFRNTCA9IHJlc3BvbnNlWydwYXJzZSddLnRleHQgYXMgc3RyaW5nO1xuXG5cdFx0XHRmb3IgKGNvbnN0IGVsZW1lbnQgb2YgZ2V0RWxlbWVudHMocGFnZUNvbnRlbnQpKSB7XG5cdFx0XHRcdGZpbGVMaW5rRWxlbWVudHNbZmlsZUxpbmtFbGVtZW50cy5sZW5ndGhdID0gZWxlbWVudDtcblx0XHRcdH1cblx0XHR9IGNhdGNoIHt9XG5cdH1cblxuXHRyZXR1cm4gZmlsZUxpbmtFbGVtZW50cztcbn07XG5cbmNvbnN0IHF1ZXJ5SW1hZ2VzID0gYXN5bmMgKHRpdGxlczogc3RyaW5nIHwgc3RyaW5nW10pID0+IHtcblx0Y29uc3QgcGFyYW1zOiBBcGlRdWVyeUltYWdlc1BhcmFtcyA9IHtcblx0XHR0aXRsZXMsXG5cdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRwcm9wOiAnaW1hZ2VzJyxcblx0XHRpbWxpbWl0OiA1MDAwLFxuXHR9O1xuXHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGFwaS5wb3N0KHBhcmFtcyk7XG5cblx0cmV0dXJuIHJlc3BvbnNlO1xufTtcblxuY29uc3QgZ2V0SW1hZ2VzRnJvbUVsZW1lbnRzID0gKGZpbGVMaW5rRWxlbWVudHM6IEhUTUxBbmNob3JFbGVtZW50W10pID0+IHtcblx0Y29uc3QgZmlsZU5hbWVzOiBzdHJpbmdbXSA9IFtdO1xuXHRmaWxlTGlua0VsZW1lbnRzID0gdW5pcXVlQXJyYXkoZmlsZUxpbmtFbGVtZW50cyk7XG5cdGNvbnN0IHt3Z0FydGljbGVQYXRoLCB3Z1NjcmlwdH0gPSBtdy5jb25maWcuZ2V0KCk7XG5cdGNvbnN0IGFydGljbGVSZWdleDogUmVnRXhwID0gbmV3IFJlZ0V4cChgJHt3Z0FydGljbGVQYXRoLnJlcGxhY2UoJyQxJywgJycpfShGaWxlOlteI10rKWApO1xuXHRjb25zdCBzY3JpcHRSZWdleDogUmVnRXhwID0gbmV3IFJlZ0V4cChgJHt3Z1NjcmlwdH1cXFxcP3RpdGxlPShGaWxlOlteIyZdKylgKTtcblxuXHRmb3IgKGNvbnN0IGVsZW1lbnQgb2YgZmlsZUxpbmtFbGVtZW50cykge1xuXHRcdC8vIFJlcGxhY2UgYG5ldyBTZXQoKWAgdG8gYXZvaWQgcG9seWZpbGxpbmcgY29yZS1qc1xuXHRcdGNvbnN0IHtocmVmLCBjbGFzc0xpc3R9ID0gZWxlbWVudDtcblxuXHRcdGlmICghaHJlZiB8fCBocmVmLmluY2x1ZGVzKCdyZWRsaW5rPTEnKSkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0aWYgKGNsYXNzTGlzdC5jb250YWlucygnbmV3JykpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGxldCBmaWxlTmFtZTogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXHRcdGlmIChhcnRpY2xlUmVnZXgudGVzdChocmVmKSkge1xuXHRcdFx0Y29uc3QgbWF0Y2g6IFJlZ0V4cEV4ZWNBcnJheSA9IGFydGljbGVSZWdleC5leGVjKGhyZWYpIGFzIFJlZ0V4cEV4ZWNBcnJheTtcblx0XHRcdGZpbGVOYW1lID0gbWF0Y2hbMV0gYXMgc3RyaW5nO1xuXHRcdFx0ZmlsZU5hbWUgPSBkZWNvZGVVUklDb21wb25lbnQoZmlsZU5hbWUpXG5cdFx0XHRcdC5yZXBsYWNlKC8oKEZpbGV8SW1hZ2UpOikoKEZpbGV8SW1hZ2UpOik/L2ksICdGaWxlOicpXG5cdFx0XHRcdC5yZXBsYWNlKCcrJywgJ18nKTtcblx0XHR9XG5cblx0XHRpZiAoc2NyaXB0UmVnZXgudGVzdChocmVmKSkge1xuXHRcdFx0Y29uc3QgbWF0Y2g6IFJlZ0V4cEV4ZWNBcnJheSA9IHNjcmlwdFJlZ2V4LmV4ZWMoaHJlZikgYXMgUmVnRXhwRXhlY0FycmF5O1xuXHRcdFx0ZmlsZU5hbWUgPSBtYXRjaFsxXSBhcyBzdHJpbmc7XG5cdFx0XHRmaWxlTmFtZSA9IGRlY29kZVVSSUNvbXBvbmVudChmaWxlTmFtZSlcblx0XHRcdFx0LnJlcGxhY2UoLygoRmlsZXxJbWFnZSk6KSgoRmlsZXxJbWFnZSk6KT8vaSwgJ0ZpbGU6Jylcblx0XHRcdFx0LnJlcGxhY2UoJysnLCAnXycpO1xuXHRcdFx0ZmlsZU5hbWVzW2ZpbGVOYW1lcy5sZW5ndGhdID0gZmlsZU5hbWU7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHVuaXF1ZUFycmF5KGZpbGVOYW1lcyk7XG59O1xuXG5jb25zdCBnZXRJbWFnZXMgPSBhc3luYyAodGl0bGVzOiBzdHJpbmcgfCBzdHJpbmdbXSkgPT4ge1xuXHRjb25zdCBmaWxlTmFtZXM6IHN0cmluZ1tdID0gW107XG5cdHRpdGxlcyA9IHVuaXF1ZUFycmF5KGdlbmVyYXRlQXJyYXkodGl0bGVzKSk7XG5cblx0Zm9yIChsZXQgaSA9IDA7IGkgPCB0aXRsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRjb25zdCBxdWVyeXRpdGxlcyA9IHRpdGxlcy5zcGxpY2UoMCwgNTApO1xuXHRcdGlmICghcXVlcnl0aXRsZXMubGVuZ3RoKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHR0cnkge1xuXHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBxdWVyeUltYWdlcyhxdWVyeXRpdGxlcyk7XG5cdFx0XHRpZiAoIXJlc3BvbnNlWydxdWVyeSddIHx8ICFyZXNwb25zZVsncXVlcnknXS5wYWdlcykge1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblxuXHRcdFx0Zm9yIChjb25zdCBwYWdlIG9mIHJlc3BvbnNlWydxdWVyeSddLnBhZ2VzKSB7XG5cdFx0XHRcdGlmICghcGFnZS5pbWFnZXMpIHtcblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGZvciAoY29uc3Qge3RpdGxlfSBvZiBwYWdlLmltYWdlcyBhcyB7XG5cdFx0XHRcdFx0bnM6IG51bWJlcjtcblx0XHRcdFx0XHR0aXRsZTogc3RyaW5nO1xuXHRcdFx0XHR9W10pIHtcblx0XHRcdFx0XHRpZiAoIXRpdGxlKSB7XG5cdFx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRmaWxlTmFtZXNbZmlsZU5hbWVzLmxlbmd0aF0gPSB0aXRsZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0gY2F0Y2gge31cblx0fVxuXG5cdHJldHVybiB1bmlxdWVBcnJheShmaWxlTmFtZXMpO1xufTtcblxuY29uc3QgZ2V0QWxsSW1hZ2VzID0gYXN5bmMgKHRpdGxlcz86IHN0cmluZyB8IHN0cmluZ1tdKTogUHJvbWlzZTxzdHJpbmdbXT4gPT4ge1xuXHR0b2FzdGlmeUluc3RhbmNlLmhpZGVUb2FzdCgpO1xuXHR0b2FzdGlmeShcblx0XHR7XG5cdFx0XHR0ZXh0OiAn5q2j5Zyo6I635Y+W6L+B56e755uu5qCHJyxcblx0XHRcdGR1cmF0aW9uOiAtMSxcblx0XHR9LFxuXHRcdCdpbmZvJ1xuXHQpO1xuXG5cdGxldCBmaWxlTmFtZXM6IHN0cmluZ1tdID0gW107XG5cdGNvbnN0IHt3Z05hbWVzcGFjZU51bWJlciwgd2dQYWdlTmFtZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cblx0aWYgKCF0aXRsZXMgfHwgIXRpdGxlcy5sZW5ndGgpIHtcblx0XHR0aXRsZXMgPSB3Z05hbWVzcGFjZU51bWJlciA8IDAgPyBbXSA6IFt3Z1BhZ2VOYW1lXTtcblx0fVxuXG5cdGNvbnN0IGVsZW1lbnRzRnJvbVBhZ2UgPSBnZXRFbGVtZW50cyhkb2N1bWVudCk7XG5cdGNvbnN0IGZpbGVOYW1lc0Zyb21QYWdlID0gZ2V0SW1hZ2VzRnJvbUVsZW1lbnRzKGVsZW1lbnRzRnJvbVBhZ2UpO1xuXHRjb25zdCBlbGVtZW50c0Zyb21QYXJzZSA9IGF3YWl0IGdldEVsZW1lbnRzRnJvbVBhcnNlKGZpbGVOYW1lc0Zyb21QYWdlKTtcblx0Y29uc3QgZmlsZU5hbWVzRnJvbVBhcnNlID0gZ2V0SW1hZ2VzRnJvbUVsZW1lbnRzKGVsZW1lbnRzRnJvbVBhcnNlKTtcblxuXHRmaWxlTmFtZXMgPSB1bmlxdWVBcnJheShbXG5cdFx0Li4uZmlsZU5hbWVzRnJvbVBhZ2UsXG5cdFx0Li4uZmlsZU5hbWVzRnJvbVBhcnNlLFxuXHRcdC4uLihhd2FpdCBnZXRJbWFnZXMoWy4uLnRpdGxlcywgLi4uZmlsZU5hbWVzRnJvbVBhZ2VdKSksXG5cdF0pO1xuXG5cdHRvYXN0aWZ5SW5zdGFuY2UuaGlkZVRvYXN0KCk7XG5cdHRvYXN0aWZ5SW5zdGFuY2UgPSB0b2FzdGlmeShcblx0XHR7XG5cdFx0XHR0ZXh0OiAn6I635Y+W6L+B56e755uu5qCH5a6M5oiQJyxcblx0XHRcdGR1cmF0aW9uOiAtMSxcblx0XHR9LFxuXHRcdCdzdWNjZXNzJ1xuXHQpO1xuXG5cdHJldHVybiB1bmlxdWVBcnJheShmaWxlTmFtZXMpOyAvLyBSZXBsYWNlIGBbLi4ubmV3IFNldCgpXWAgdG8gYXZvaWQgcG9seWZpbGxpbmcgY29yZS1qc1xufTtcblxuZXhwb3J0IHtnZXRBbGxJbWFnZXN9O1xuIiwgImV4cG9ydCB7YXBpfSBmcm9tICdleHQuZ2FkZ2V0LlF1aWNrSW1wb3J0JztcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLHFCQUFnREMsUUFBQSx3QkFBQTs7QUNBaEQsSUFBQUMscUJBQXlDRCxRQUFBLGlCQUFBOztBQ0F6QyxJQUFBRSxvQkFBa0JGLFFBQUEsd0JBQUE7O0FERWxCLElBQUFHLHFCQUF1QkgsUUFBQSxxQkFBQTtBQUV2QixJQUFJSSxtQkFBcUM7RUFDeENDLFdBQVdBLE1BQU07RUFBQztBQUNuQjtBQUVBLElBQU1DLFFBQUEsMkJBQUE7QUFBQSxNQUFBQyxPQUFBQyxrQkFBUSxXQUFPQyxNQUFpQjtBQUNyQyxVQUFNQyxTQUF5QjtNQUM5QkQ7TUFDQUUsUUFBUTtNQUNSQyxRQUFRO01BQ1JDLGVBQWU7TUFDZkMsTUFBTTtNQUNOQyxXQUFXO01BQ1hDLFlBQVk7SUFDYjtBQUNBLFVBQU1DLFdBQUEsTUFBaUJmLGtCQUFBZ0IsSUFBSUMsS0FBS1QsTUFBTTtBQUV0QyxXQUFPTztFQUNSLENBQUE7QUFBQSxTQUFBLFNBYk1YLE9BQUFjLElBQUE7QUFBQSxXQUFBYixLQUFBYyxNQUFBLE1BQUFDLFNBQUE7RUFBQTtBQUFBLEVBQUE7QUFlTixJQUFNQyxjQUFlQyxhQUFvQztBQUN4RCxTQUFPLENBQ04s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Q0Q7RUFDRDtBQUVBLFFBQU1FLFlBQW1DbEUsU0FBU21FLGNBQWMsYUFBYSxJQUFJLGVBQWU7QUFDaEcsUUFBTXBGLFVBQWdDbUMsR0FBR2tELEtBQUtDLGVBQWVILFdBQVcsS0FBSyxhQUFhLFVBQVU7QUFDcEcsTUFBSSxDQUFDbkYsU0FBUztBQUNiO0VBQ0Q7QUFFQUEsVUFBUXVGLGlCQUFpQixTQUFTLE1BQVk7QUFDN0MsU0FBQXZHLGtCQUFNLGFBQVk7QUFDakIsWUFBTWdELFlBQUEsTUFBa0JtQyxhQUFhO0FBQ3JDLFVBQUksQ0FBQ25DLFVBQVVWLFFBQVE7QUFDdEI7TUFDRDtBQUNBLGFBQUEsR0FBTS9DLG1CQUFBd0csc0JBQXFCL0MsV0FBVyxJQUFJO0lBQzNDLENBQUEsRUFBRyxFQUFFd0QsS0FBSyxNQUFNO0FBQ2YsT0FBQSxHQUFBakgsbUJBQUFrSCxhQUFZO0lBQ2IsQ0FBQztFQUNGLENBQUM7QUFDRixHQUFHOyIsCiAgIm5hbWVzIjogWyJpbXBvcnRfZXh0X2dhZGdldDQiLCAicmVxdWlyZSIsICJpbXBvcnRfZXh0X2dhZGdldDIiLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAiaW1wb3J0X2V4dF9nYWRnZXQzIiwgInRvYXN0aWZ5SW5zdGFuY2UiLCAiaGlkZVRvYXN0IiwgInBhcnNlIiwgIl9yZWYiLCAiX2FzeW5jVG9HZW5lcmF0b3IiLCAicGFnZSIsICJwYXJhbXMiLCAiYWN0aW9uIiwgImZvcm1hdCIsICJmb3JtYXR2ZXJzaW9uIiwgInByb3AiLCAicmVkaXJlY3RzIiwgImRpc2FibGV0b2MiLCAicmVzcG9uc2UiLCAiYXBpIiwgInBvc3QiLCAiX3giLCAiYXBwbHkiLCAiYXJndW1lbnRzIiwgImdldEVsZW1lbnRzIiwgImVsZW1lbnQiLCAicXVlcnlTZWxlY3RvckFsbCIsICJnZXRFbGVtZW50c0Zyb21QYXJzZSIsICJfcmVmMiIsICJ0aXRsZXMiLCAiZmlsZUxpbmtFbGVtZW50cyIsICJ1bmlxdWVBcnJheSIsICJfaXRlcmF0b3IiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAiX3N0ZXAiLCAicyIsICJuIiwgImRvbmUiLCAidGl0bGUiLCAidmFsdWUiLCAidGV4dCIsICJwYWdlQ29udGVudCIsICJkb2N1bWVudCIsICJjcmVhdGVFbGVtZW50IiwgImlubmVySFRNTCIsICJfaXRlcmF0b3IyIiwgIl9zdGVwMiIsICJsZW5ndGgiLCAiZXJyIiwgImUiLCAiZiIsICJfeDIiLCAicXVlcnlJbWFnZXMiLCAiX3JlZjMiLCAiaW1saW1pdCIsICJfeDMiLCAiZ2V0SW1hZ2VzRnJvbUVsZW1lbnRzIiwgImZpbGVOYW1lcyIsICJ3Z0FydGljbGVQYXRoIiwgIndnU2NyaXB0IiwgIm13IiwgImNvbmZpZyIsICJnZXQiLCAiYXJ0aWNsZVJlZ2V4IiwgIlJlZ0V4cCIsICJjb25jYXQiLCAicmVwbGFjZSIsICJzY3JpcHRSZWdleCIsICJfaXRlcmF0b3IzIiwgIl9zdGVwMyIsICJocmVmIiwgImNsYXNzTGlzdCIsICJpbmNsdWRlcyIsICJjb250YWlucyIsICJmaWxlTmFtZSIsICJ0ZXN0IiwgIm1hdGNoIiwgImV4ZWMiLCAiZGVjb2RlVVJJQ29tcG9uZW50IiwgImdldEltYWdlcyIsICJfcmVmNCIsICJnZW5lcmF0ZUFycmF5IiwgImkiLCAicXVlcnl0aXRsZXMiLCAic3BsaWNlIiwgInBhZ2VzIiwgIl9pdGVyYXRvcjQiLCAiX3N0ZXA0IiwgImltYWdlcyIsICJfaXRlcmF0b3I1IiwgIl9zdGVwNSIsICJfeDQiLCAiZ2V0QWxsSW1hZ2VzIiwgIl9yZWY1IiwgInRvYXN0aWZ5IiwgImR1cmF0aW9uIiwgIndnTmFtZXNwYWNlTnVtYmVyIiwgIndnUGFnZU5hbWUiLCAiZWxlbWVudHNGcm9tUGFnZSIsICJmaWxlTmFtZXNGcm9tUGFnZSIsICJlbGVtZW50c0Zyb21QYXJzZSIsICJmaWxlTmFtZXNGcm9tUGFyc2UiLCAiX3g1IiwgIndpbmRvdyIsICJkZXRlY3RJZkZpbGVSZWRpcmVjdCIsICJxdWlja0ltcG9ydEFsbE1lZGlhIiwgIndnQ2Fub25pY2FsU3BlY2lhbFBhZ2VOYW1lIiwgIndnQ3VyUmV2aXNpb25JZCIsICJwb3J0bGV0SWQiLCAicXVlcnlTZWxlY3RvciIsICJ1dGlsIiwgImFkZFBvcnRsZXRMaW5rIiwgImFkZEV2ZW50TGlzdGVuZXIiLCAidGhlbiIsICJyZWZyZXNoUGFnZSJdCn0K

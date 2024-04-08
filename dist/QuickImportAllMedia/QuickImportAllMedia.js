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
//! src/QuickImportAllMedia/options.json
var version = "2.0";
//! src/QuickImportAllMedia/modules/api.ts
var import_ext_gadget = require("ext.gadget.Util");
var api = (0, import_ext_gadget.initMwApi)("QuickImportAllMedia/".concat(version));
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
    const articleRegex = new RegExp("".concat(wgArticlePath.replace("$1", ""), "(File:[^#]+)"));
    const scriptRegex = new RegExp("^".concat(wgScript, "\\?title=(File:[^#&]+)"));
    if (!(wgNamespaceNumber < 0)) {
      var _response$query;
      const queryImageParams = {
        action: "query",
        format: "json",
        formatversion: "2",
        prop: "images",
        titles: wgPageName,
        imlimit: 5e3
      };
      const response = yield api.get(queryImageParams);
      var _iterator = _createForOfIteratorHelper((_response$query = response["query"]) === null || _response$query === void 0 ? void 0 : _response$query.pages[0].images), _step;
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
    const fileLinkElements = document.querySelectorAll("a[href^='/wiki/File:'], a[href*='title=File:']");
    var _iterator2 = _createForOfIteratorHelper(fileLinkElements), _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
        const element = _step2.value;
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
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
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
      const fileNames = yield getAllImages();
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1F1aWNrSW1wb3J0QWxsTWVkaWEvUXVpY2tJbXBvcnRBbGxNZWRpYS50cyIsICJzcmMvUXVpY2tJbXBvcnRBbGxNZWRpYS9vcHRpb25zLmpzb24iLCAic3JjL1F1aWNrSW1wb3J0QWxsTWVkaWEvbW9kdWxlcy9hcGkudHMiLCAic3JjL1F1aWNrSW1wb3J0QWxsTWVkaWEvbW9kdWxlcy9jb3JlLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQge2RldGVjdElmRmlsZVJlZGlyZWN0LCByZWZyZXNoUGFnZX0gZnJvbSAnZXh0LmdhZGdldC5RdWlja0ltcG9ydCc7XG5pbXBvcnQge2dldEFsbEltYWdlc30gZnJvbSAnLi9tb2R1bGVzL2NvcmUnO1xuXG4oZnVuY3Rpb24gcXVpY2tJbXBvcnRBbGxNZWRpYSgpOiB2b2lkIHtcblx0Y29uc3Qge3dnQ2Fub25pY2FsU3BlY2lhbFBhZ2VOYW1lLCB3Z0N1clJldmlzaW9uSWR9ID0gbXcuY29uZmlnLmdldCgpO1xuXHRpZiAoISh3Z0N1clJldmlzaW9uSWQgfHwgWydQcmVmaXhpbmRleCcsICdCcm9rZW5SZWRpcmVjdHMnXS5pbmNsdWRlcyh3Z0Nhbm9uaWNhbFNwZWNpYWxQYWdlTmFtZSB8fCAnJykpKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgcG9ydGxldElkOiAncC1jYWN0aW9ucycgfCAncC10YicgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcC1jYWN0aW9ucycpID8gJ3AtY2FjdGlvbnMnIDogJ3AtdGInO1xuXHRjb25zdCBlbGVtZW50OiBIVE1MTElFbGVtZW50IHwgbnVsbCA9IG13LnV0aWwuYWRkUG9ydGxldExpbmsocG9ydGxldElkLCAnIycsICflr7zlhaXmraTpobXpnaLmiYDmnInmlofku7YnLCAndC1pbXBvcnQnKTtcblx0aWYgKCFlbGVtZW50KSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpOiB2b2lkID0+IHtcblx0XHR2b2lkIChhc3luYyAoKSA9PiB7XG5cdFx0XHRjb25zdCBmaWxlTmFtZXM6IHN0cmluZ1tdID0gYXdhaXQgZ2V0QWxsSW1hZ2VzKCk7XG5cdFx0XHRhd2FpdCBkZXRlY3RJZkZpbGVSZWRpcmVjdChbLi4ubmV3IFNldChmaWxlTmFtZXMpXSwgdHJ1ZSk7XG5cdFx0fSkoKS50aGVuKCgpID0+IHtcblx0XHRcdGNvbnN0IHt3Z1BhZ2VOYW1lfSA9IG13LmNvbmZpZy5nZXQoKTtcblx0XHRcdHZvaWQgcmVmcmVzaFBhZ2Uod2dQYWdlTmFtZSk7XG5cdFx0fSk7XG5cdH0pO1xufSkoKTtcbiIsICJ7XG5cdFwidmVyc2lvblwiOiBcIjIuMFwiXG59XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtpbml0TXdBcGl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmNvbnN0IGFwaTogbXcuQXBpID0gaW5pdE13QXBpKGBRdWlja0ltcG9ydEFsbE1lZGlhLyR7T1BUSU9OUy52ZXJzaW9ufWApO1xuXG5leHBvcnQge2FwaX07XG4iLCAiaW1wb3J0IHthcGl9IGZyb20gJy4vYXBpJztcbmltcG9ydCB7dG9hc3RpZnl9IGZyb20gJ2V4dC5nYWRnZXQuVG9hc3RpZnknO1xuXG5sZXQgdG9hc3RpZnlJbnN0YW5jZTogVG9hc3RpZnlJbnN0YW5jZSA9IHtcblx0aGlkZVRvYXN0OiAoKSA9PiB7fSxcbn07XG5cbmNvbnN0IGdldEFsbEltYWdlcyA9IGFzeW5jICgpID0+IHtcblx0dG9hc3RpZnlJbnN0YW5jZS5oaWRlVG9hc3QoKTtcblx0dG9hc3RpZnkoXG5cdFx0e1xuXHRcdFx0dGV4dDogJ+ato+WcqOiOt+WPlui/geenu+ebruaghycsXG5cdFx0XHRkdXJhdGlvbjogLTEsXG5cdFx0fSxcblx0XHQnaW5mbydcblx0KTtcblxuXHRjb25zdCBmaWxlTmFtZXM6IHN0cmluZ1tdID0gW107XG5cdGNvbnN0IHt3Z0FydGljbGVQYXRoLCB3Z05hbWVzcGFjZU51bWJlciwgd2dQYWdlTmFtZSwgd2dTY3JpcHR9ID0gbXcuY29uZmlnLmdldCgpO1xuXHRjb25zdCBhcnRpY2xlUmVnZXg6IFJlZ0V4cCA9IG5ldyBSZWdFeHAoYCR7d2dBcnRpY2xlUGF0aC5yZXBsYWNlKCckMScsICcnKX0oRmlsZTpbXiNdKylgKTtcblx0Y29uc3Qgc2NyaXB0UmVnZXg6IFJlZ0V4cCA9IG5ldyBSZWdFeHAoYF4ke3dnU2NyaXB0fVxcXFw/dGl0bGU9KEZpbGU6W14jJl0rKWApO1xuXG5cdGlmICghKHdnTmFtZXNwYWNlTnVtYmVyIDwgMCkpIHtcblx0XHRjb25zdCBxdWVyeUltYWdlUGFyYW1zOiBBcGlRdWVyeUltYWdlc1BhcmFtcyA9IHtcblx0XHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdFx0cHJvcDogJ2ltYWdlcycsXG5cdFx0XHR0aXRsZXM6IHdnUGFnZU5hbWUsXG5cdFx0XHRpbWxpbWl0OiA1MDAwLFxuXHRcdH07XG5cblx0XHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGFwaS5nZXQocXVlcnlJbWFnZVBhcmFtcyk7XG5cblx0XHRmb3IgKGNvbnN0IGltYWdlSW5mbyBvZiByZXNwb25zZVsncXVlcnknXT8ucGFnZXNbMF0uaW1hZ2VzIGFzIHtuczogbnVtYmVyOyB0aXRsZTogc3RyaW5nfVtdKSB7XG5cdFx0XHRpZiAoIWltYWdlSW5mbyB8fCAhaW1hZ2VJbmZvLnRpdGxlKSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXHRcdFx0ZmlsZU5hbWVzW2ZpbGVOYW1lcy5sZW5ndGhdID0gaW1hZ2VJbmZvLnRpdGxlO1xuXHRcdH1cblx0fVxuXG5cdGNvbnN0IGZpbGVMaW5rRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiYVtocmVmXj0nL3dpa2kvRmlsZTonXSwgYVtocmVmKj0ndGl0bGU9RmlsZTonXVwiKTtcblxuXHRmb3IgKGNvbnN0IGVsZW1lbnQgb2YgZmlsZUxpbmtFbGVtZW50cyBhcyB1bmtub3duIGFzIEhUTUxBbmNob3JFbGVtZW50W10pIHtcblx0XHRjb25zdCB7aHJlZn0gPSBlbGVtZW50O1xuXG5cdFx0aWYgKCFocmVmKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRsZXQgZmlsZU5hbWU6IHN0cmluZyB8IHVuZGVmaW5lZDtcblx0XHRpZiAoYXJ0aWNsZVJlZ2V4LnRlc3QoaHJlZikpIHtcblx0XHRcdGNvbnN0IG1hdGNoOiBSZWdFeHBFeGVjQXJyYXkgPSBhcnRpY2xlUmVnZXguZXhlYyhocmVmKSBhcyBSZWdFeHBFeGVjQXJyYXk7XG5cdFx0XHRmaWxlTmFtZSA9IG1hdGNoWzFdIGFzIHN0cmluZztcblx0XHR9IGVsc2UgaWYgKHNjcmlwdFJlZ2V4LnRlc3QoaHJlZikpIHtcblx0XHRcdGNvbnN0IG1hdGNoOiBSZWdFeHBFeGVjQXJyYXkgPSBzY3JpcHRSZWdleC5leGVjKGhyZWYpIGFzIFJlZ0V4cEV4ZWNBcnJheTtcblx0XHRcdGZpbGVOYW1lID0gbWF0Y2hbMV0gYXMgc3RyaW5nO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRmaWxlTmFtZSA9IGZpbGVOYW1lLnJlcGxhY2UoL0ZpbGU6KEZpbGU6fEltYWdlOik/L2ksICdGaWxlOicpO1xuXHRcdGZpbGVOYW1lc1tmaWxlTmFtZXMubGVuZ3RoXSA9IGZpbGVOYW1lO1xuXHR9XG5cblx0dG9hc3RpZnlJbnN0YW5jZS5oaWRlVG9hc3QoKTtcblx0dG9hc3RpZnlJbnN0YW5jZSA9IHRvYXN0aWZ5KFxuXHRcdHtcblx0XHRcdHRleHQ6ICfojrflj5bov4Hnp7vnm67moIflrozmiJAnLFxuXHRcdFx0ZHVyYXRpb246IC0xLFxuXHRcdH0sXG5cdFx0J3N1Y2Nlc3MnXG5cdCk7XG5cblx0cmV0dXJuIFsuLi5uZXcgU2V0KGZpbGVOYW1lcyldO1xufTtcblxuZXhwb3J0IHtnZXRBbGxJbWFnZXN9O1xu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OiBbImltcG9ydF9leHRfZ2FkZ2V0MyIsICJyZXF1aXJlIiwgInZlcnNpb24iLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAiYXBpIiwgImluaXRNd0FwaSIsICJjb25jYXQiLCAiaW1wb3J0X2V4dF9nYWRnZXQyIiwgInRvYXN0aWZ5SW5zdGFuY2UiLCAiaGlkZVRvYXN0IiwgImdldEFsbEltYWdlcyIsICJfcmVmIiwgIl9hc3luY1RvR2VuZXJhdG9yIiwgInRvYXN0aWZ5IiwgInRleHQiLCAiZHVyYXRpb24iLCAiZmlsZU5hbWVzIiwgIndnQXJ0aWNsZVBhdGgiLCAid2dOYW1lc3BhY2VOdW1iZXIiLCAid2dQYWdlTmFtZSIsICJ3Z1NjcmlwdCIsICJtdyIsICJjb25maWciLCAiZ2V0IiwgImFydGljbGVSZWdleCIsICJSZWdFeHAiLCAicmVwbGFjZSIsICJzY3JpcHRSZWdleCIsICJfcmVzcG9uc2UkcXVlcnkiLCAicXVlcnlJbWFnZVBhcmFtcyIsICJhY3Rpb24iLCAiZm9ybWF0IiwgImZvcm1hdHZlcnNpb24iLCAicHJvcCIsICJ0aXRsZXMiLCAiaW1saW1pdCIsICJyZXNwb25zZSIsICJfaXRlcmF0b3IiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAicGFnZXMiLCAiaW1hZ2VzIiwgIl9zdGVwIiwgInMiLCAibiIsICJkb25lIiwgImltYWdlSW5mbyIsICJ2YWx1ZSIsICJ0aXRsZSIsICJsZW5ndGgiLCAiZXJyIiwgImUiLCAiZiIsICJmaWxlTGlua0VsZW1lbnRzIiwgImRvY3VtZW50IiwgInF1ZXJ5U2VsZWN0b3JBbGwiLCAiX2l0ZXJhdG9yMiIsICJfc3RlcDIiLCAiZWxlbWVudCIsICJocmVmIiwgImZpbGVOYW1lIiwgInRlc3QiLCAibWF0Y2giLCAiZXhlYyIsICJTZXQiLCAiYXBwbHkiLCAiYXJndW1lbnRzIiwgInF1aWNrSW1wb3J0QWxsTWVkaWEiLCAid2dDYW5vbmljYWxTcGVjaWFsUGFnZU5hbWUiLCAid2dDdXJSZXZpc2lvbklkIiwgImluY2x1ZGVzIiwgInBvcnRsZXRJZCIsICJxdWVyeVNlbGVjdG9yIiwgInV0aWwiLCAiYWRkUG9ydGxldExpbmsiLCAiYWRkRXZlbnRMaXN0ZW5lciIsICJkZXRlY3RJZkZpbGVSZWRpcmVjdCIsICJ0aGVuIiwgInJlZnJlc2hQYWdlIl0KfQo=

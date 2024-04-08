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
      const response = yield import_ext_gadget.api.get(queryImageParams);
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1F1aWNrSW1wb3J0QWxsTWVkaWEvUXVpY2tJbXBvcnRBbGxNZWRpYS50cyIsICJzcmMvUXVpY2tJbXBvcnRBbGxNZWRpYS9tb2R1bGVzL2FwaS50cyIsICJzcmMvUXVpY2tJbXBvcnRBbGxNZWRpYS9tb2R1bGVzL2NvcmUudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7ZGV0ZWN0SWZGaWxlUmVkaXJlY3QsIHJlZnJlc2hQYWdlfSBmcm9tICdleHQuZ2FkZ2V0LlF1aWNrSW1wb3J0JztcbmltcG9ydCB7Z2V0QWxsSW1hZ2VzfSBmcm9tICcuL21vZHVsZXMvY29yZSc7XG5cbihmdW5jdGlvbiBxdWlja0ltcG9ydEFsbE1lZGlhKCk6IHZvaWQge1xuXHRjb25zdCB7d2dDYW5vbmljYWxTcGVjaWFsUGFnZU5hbWUsIHdnQ3VyUmV2aXNpb25JZH0gPSBtdy5jb25maWcuZ2V0KCk7XG5cdGlmICghKHdnQ3VyUmV2aXNpb25JZCB8fCBbJ1ByZWZpeGluZGV4JywgJ0Jyb2tlblJlZGlyZWN0cyddLmluY2x1ZGVzKHdnQ2Fub25pY2FsU3BlY2lhbFBhZ2VOYW1lIHx8ICcnKSkpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBwb3J0bGV0SWQ6ICdwLWNhY3Rpb25zJyB8ICdwLXRiJyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwLWNhY3Rpb25zJykgPyAncC1jYWN0aW9ucycgOiAncC10Yic7XG5cdGNvbnN0IGVsZW1lbnQ6IEhUTUxMSUVsZW1lbnQgfCBudWxsID0gbXcudXRpbC5hZGRQb3J0bGV0TGluayhwb3J0bGV0SWQsICcjJywgJ+WvvOWFpeatpOmhtemdouaJgOacieaWh+S7ticsICd0LWltcG9ydCcpO1xuXHRpZiAoIWVsZW1lbnQpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk6IHZvaWQgPT4ge1xuXHRcdHZvaWQgKGFzeW5jICgpID0+IHtcblx0XHRcdGNvbnN0IGZpbGVOYW1lczogc3RyaW5nW10gPSBhd2FpdCBnZXRBbGxJbWFnZXMoKTtcblx0XHRcdGF3YWl0IGRldGVjdElmRmlsZVJlZGlyZWN0KFsuLi5uZXcgU2V0KGZpbGVOYW1lcyldLCB0cnVlKTtcblx0XHR9KSgpLnRoZW4oKCkgPT4ge1xuXHRcdFx0Y29uc3Qge3dnUGFnZU5hbWV9ID0gbXcuY29uZmlnLmdldCgpO1xuXHRcdFx0dm9pZCByZWZyZXNoUGFnZSh3Z1BhZ2VOYW1lKTtcblx0XHR9KTtcblx0fSk7XG59KSgpO1xuIiwgImV4cG9ydCB7YXBpfSBmcm9tICdleHQuZ2FkZ2V0LlF1aWNrSW1wb3J0JztcbiIsICJpbXBvcnQge2FwaX0gZnJvbSAnLi9hcGknO1xuaW1wb3J0IHt0b2FzdGlmeX0gZnJvbSAnZXh0LmdhZGdldC5Ub2FzdGlmeSc7XG5cbmxldCB0b2FzdGlmeUluc3RhbmNlOiBUb2FzdGlmeUluc3RhbmNlID0ge1xuXHRoaWRlVG9hc3Q6ICgpID0+IHt9LFxufTtcblxuY29uc3QgZ2V0QWxsSW1hZ2VzID0gYXN5bmMgKCkgPT4ge1xuXHR0b2FzdGlmeUluc3RhbmNlLmhpZGVUb2FzdCgpO1xuXHR0b2FzdGlmeShcblx0XHR7XG5cdFx0XHR0ZXh0OiAn5q2j5Zyo6I635Y+W6L+B56e755uu5qCHJyxcblx0XHRcdGR1cmF0aW9uOiAtMSxcblx0XHR9LFxuXHRcdCdpbmZvJ1xuXHQpO1xuXG5cdGNvbnN0IGZpbGVOYW1lczogc3RyaW5nW10gPSBbXTtcblx0Y29uc3Qge3dnQXJ0aWNsZVBhdGgsIHdnTmFtZXNwYWNlTnVtYmVyLCB3Z1BhZ2VOYW1lLCB3Z1NjcmlwdH0gPSBtdy5jb25maWcuZ2V0KCk7XG5cdGNvbnN0IGFydGljbGVSZWdleDogUmVnRXhwID0gbmV3IFJlZ0V4cChgJHt3Z0FydGljbGVQYXRoLnJlcGxhY2UoJyQxJywgJycpfShGaWxlOlteI10rKWApO1xuXHRjb25zdCBzY3JpcHRSZWdleDogUmVnRXhwID0gbmV3IFJlZ0V4cChgXiR7d2dTY3JpcHR9XFxcXD90aXRsZT0oRmlsZTpbXiMmXSspYCk7XG5cblx0aWYgKCEod2dOYW1lc3BhY2VOdW1iZXIgPCAwKSkge1xuXHRcdGNvbnN0IHF1ZXJ5SW1hZ2VQYXJhbXM6IEFwaVF1ZXJ5SW1hZ2VzUGFyYW1zID0ge1xuXHRcdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0XHRwcm9wOiAnaW1hZ2VzJyxcblx0XHRcdHRpdGxlczogd2dQYWdlTmFtZSxcblx0XHRcdGltbGltaXQ6IDUwMDAsXG5cdFx0fTtcblxuXHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXBpLmdldChxdWVyeUltYWdlUGFyYW1zKTtcblxuXHRcdGZvciAoY29uc3QgaW1hZ2VJbmZvIG9mIHJlc3BvbnNlWydxdWVyeSddPy5wYWdlc1swXS5pbWFnZXMgYXMge25zOiBudW1iZXI7IHRpdGxlOiBzdHJpbmd9W10pIHtcblx0XHRcdGlmICghaW1hZ2VJbmZvIHx8ICFpbWFnZUluZm8udGl0bGUpIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cdFx0XHRmaWxlTmFtZXNbZmlsZU5hbWVzLmxlbmd0aF0gPSBpbWFnZUluZm8udGl0bGU7XG5cdFx0fVxuXHR9XG5cblx0Y29uc3QgZmlsZUxpbmtFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEFuY2hvckVsZW1lbnQ+KFxuXHRcdFwiYVtocmVmXj0nL3dpa2kvRmlsZTonXSwgYVtocmVmKj0ndGl0bGU9RmlsZTonXVwiXG5cdCk7XG5cblx0Zm9yIChjb25zdCBlbGVtZW50IG9mIGZpbGVMaW5rRWxlbWVudHMpIHtcblx0XHRjb25zdCB7aHJlZn0gPSBlbGVtZW50O1xuXG5cdFx0aWYgKCFocmVmKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRsZXQgZmlsZU5hbWU6IHN0cmluZyB8IHVuZGVmaW5lZDtcblx0XHRpZiAoYXJ0aWNsZVJlZ2V4LnRlc3QoaHJlZikpIHtcblx0XHRcdGNvbnN0IG1hdGNoOiBSZWdFeHBFeGVjQXJyYXkgPSBhcnRpY2xlUmVnZXguZXhlYyhocmVmKSBhcyBSZWdFeHBFeGVjQXJyYXk7XG5cdFx0XHRmaWxlTmFtZSA9IG1hdGNoWzFdIGFzIHN0cmluZztcblx0XHR9IGVsc2UgaWYgKHNjcmlwdFJlZ2V4LnRlc3QoaHJlZikpIHtcblx0XHRcdGNvbnN0IG1hdGNoOiBSZWdFeHBFeGVjQXJyYXkgPSBzY3JpcHRSZWdleC5leGVjKGhyZWYpIGFzIFJlZ0V4cEV4ZWNBcnJheTtcblx0XHRcdGZpbGVOYW1lID0gbWF0Y2hbMV0gYXMgc3RyaW5nO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRmaWxlTmFtZSA9IGZpbGVOYW1lLnJlcGxhY2UoL0ZpbGU6KEZpbGU6fEltYWdlOik/L2ksICdGaWxlOicpO1xuXHRcdGZpbGVOYW1lc1tmaWxlTmFtZXMubGVuZ3RoXSA9IGZpbGVOYW1lO1xuXHR9XG5cblx0dG9hc3RpZnlJbnN0YW5jZS5oaWRlVG9hc3QoKTtcblx0dG9hc3RpZnlJbnN0YW5jZSA9IHRvYXN0aWZ5KFxuXHRcdHtcblx0XHRcdHRleHQ6ICfojrflj5bov4Hnp7vnm67moIflrozmiJAnLFxuXHRcdFx0ZHVyYXRpb246IC0xLFxuXHRcdH0sXG5cdFx0J3N1Y2Nlc3MnXG5cdCk7XG5cblx0cmV0dXJuIFsuLi5uZXcgU2V0KGZpbGVOYW1lcyldO1xufTtcblxuZXhwb3J0IHtnZXRBbGxJbWFnZXN9O1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLHFCQUFnREMsUUFBQSx3QkFBQTs7QUNBaEQsSUFBQUMsb0JBQWtCRCxRQUFBLHdCQUFBOztBQ0NsQixJQUFBRSxxQkFB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RUFBQTs7Q0ZKTCxTQUFTQyxzQkFBNEI7QUFDckMsUUFBTTtJQUFDQztJQUE0QkM7RUFBZSxJQUFJakQsR0FBR0MsT0FBT0MsSUFBSTtBQUNwRSxNQUFJLEVBQUUrQyxtQkFBbUIsQ0FBQyxlQUFlLGlCQUFpQixFQUFFQyxTQUFTRiw4QkFBOEIsRUFBRSxJQUFJO0FBQ3hHO0VBQ0Q7QUFFQSxRQUFNRyxZQUFtQ2pCLFNBQVNrQixjQUFjLGFBQWEsSUFBSSxlQUFlO0FBQ2hHLFFBQU1kLFVBQWdDdEMsR0FBR3FELEtBQUtDLGVBQWVILFdBQVcsS0FBSyxhQUFhLFVBQVU7QUFDcEcsTUFBSSxDQUFDYixTQUFTO0FBQ2I7RUFDRDtBQUVBQSxVQUFRaUIsaUJBQWlCLFNBQVMsTUFBWTtBQUM3QyxTQUFBaEUsa0JBQU0sYUFBWTtBQUNqQixZQUFNSSxZQUFBLE1BQTRCTixhQUFhO0FBQy9DLGFBQUEsR0FBTU4sbUJBQUF5RSxzQkFBcUIsQ0FBQyxHQUFHLElBQUlaLElBQUlqRCxTQUFTLENBQUMsR0FBRyxJQUFJO0lBQ3pELENBQUEsRUFBRyxFQUFFOEQsS0FBSyxNQUFNO0FBQ2YsWUFBTTtRQUFDM0Q7TUFBVSxJQUFJRSxHQUFHQyxPQUFPQyxJQUFJO0FBQ25DLFlBQUEsR0FBS25CLG1CQUFBMkUsYUFBWTVELFVBQVU7SUFDNUIsQ0FBQztFQUNGLENBQUM7QUFDRixHQUFHOyIsCiAgIm5hbWVzIjogWyJpbXBvcnRfZXh0X2dhZGdldDMiLCAicmVxdWlyZSIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJpbXBvcnRfZXh0X2dhZGdldDIiLCAidG9hc3RpZnlJbnN0YW5jZSIsICJoaWRlVG9hc3QiLCAiZ2V0QWxsSW1hZ2VzIiwgIl9yZWYiLCAiX2FzeW5jVG9HZW5lcmF0b3IiLCAidG9hc3RpZnkiLCAidGV4dCIsICJkdXJhdGlvbiIsICJmaWxlTmFtZXMiLCAid2dBcnRpY2xlUGF0aCIsICJ3Z05hbWVzcGFjZU51bWJlciIsICJ3Z1BhZ2VOYW1lIiwgIndnU2NyaXB0IiwgIm13IiwgImNvbmZpZyIsICJnZXQiLCAiYXJ0aWNsZVJlZ2V4IiwgIlJlZ0V4cCIsICJjb25jYXQiLCAicmVwbGFjZSIsICJzY3JpcHRSZWdleCIsICJfcmVzcG9uc2UkcXVlcnkiLCAicXVlcnlJbWFnZVBhcmFtcyIsICJhY3Rpb24iLCAiZm9ybWF0IiwgImZvcm1hdHZlcnNpb24iLCAicHJvcCIsICJ0aXRsZXMiLCAiaW1saW1pdCIsICJyZXNwb25zZSIsICJhcGkiLCAiX2l0ZXJhdG9yIiwgIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwgInBhZ2VzIiwgImltYWdlcyIsICJfc3RlcCIsICJzIiwgIm4iLCAiZG9uZSIsICJpbWFnZUluZm8iLCAidmFsdWUiLCAidGl0bGUiLCAibGVuZ3RoIiwgImVyciIsICJlIiwgImYiLCAiZmlsZUxpbmtFbGVtZW50cyIsICJkb2N1bWVudCIsICJxdWVyeVNlbGVjdG9yQWxsIiwgIl9pdGVyYXRvcjIiLCAiX3N0ZXAyIiwgImVsZW1lbnQiLCAiaHJlZiIsICJmaWxlTmFtZSIsICJ0ZXN0IiwgIm1hdGNoIiwgImV4ZWMiLCAiU2V0IiwgImFwcGx5IiwgImFyZ3VtZW50cyIsICJxdWlja0ltcG9ydEFsbE1lZGlhIiwgIndnQ2Fub25pY2FsU3BlY2lhbFBhZ2VOYW1lIiwgIndnQ3VyUmV2aXNpb25JZCIsICJpbmNsdWRlcyIsICJwb3J0bGV0SWQiLCAicXVlcnlTZWxlY3RvciIsICJ1dGlsIiwgImFkZFBvcnRsZXRMaW5rIiwgImFkZEV2ZW50TGlzdGVuZXIiLCAiZGV0ZWN0SWZGaWxlUmVkaXJlY3QiLCAidGhlbiIsICJyZWZyZXNoUGFnZSJdCn0K

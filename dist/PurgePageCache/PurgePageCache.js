/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/PurgePageCache}
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

// dist/PurgePageCache/PurgePageCache.js
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
//! src/PurgePageCache/modules/constant.ts
var WG_WIKI_ID = mw.config.get("wgWikiID");
//! src/PurgePageCache/modules/i18n.ts
var import_ext_gadget = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    Failed: (0, import_ext_gadget.localize)({
      en: "Failed to purge cache. Please try again later",
      "zh-hans": "清除失败，请稍后重试",
      "zh-hant": "清除失敗，請稍后重試"
    }),
    Purge: (0, import_ext_gadget.localize)({
      en: "Purge cache",
      "zh-hans": "清除缓存",
      "zh-hant": "清除快取"
    }),
    PurgeFromServer: (0, import_ext_gadget.localize)({
      en: "Purge cache from the server",
      "zh-hans": "更新服务器缓存",
      "zh-hant": "更新伺服器快取"
    }),
    Purging: (0, import_ext_gadget.localize)({
      en: "Purging cache...",
      "zh-hans": "正在清除……",
      "zh-hant": "正在清除……"
    })
  };
};
var i18nMessages = getI18nMessages();
var getMessage = (key) => {
  return i18nMessages[key] || key;
};
//! src/PurgePageCache/modules/core.ts
var import_ext_gadget2 = require("ext.gadget.Util");
var import_ext_gadget3 = require("ext.gadget.Toastify");
var purgePageCache = () => {
  var _portletElement$query;
  const purgePageCacheMain = /* @__PURE__ */ function() {
    var _ref = _asyncToGenerator(function* (event, title) {
      event.preventDefault();
      const toastifyInstance = (0, import_ext_gadget3.toastify)({
        text: getMessage("Purging"),
        duration: -1
      }, "info");
      const api = (0, import_ext_gadget2.initMwApi)("PurgePageCache/1.1");
      try {
        const params = {
          action: "purge",
          format: "json",
          formatversion: "2",
          titles: title,
          forcelinkupdate: true
        };
        yield api.post(params);
        localStorage.removeItem("MediaWikiModuleStore:".concat(WG_WIKI_ID));
        location.reload();
      } catch (error) {
        console.error("[PurgePageCache] Ajax error:", error);
        toastifyInstance.hideToast();
        (0, import_ext_gadget3.toastify)({
          text: getMessage("Failed"),
          close: true,
          duration: -1
        }, "error");
      }
    });
    return function purgePageCacheMain2(_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }();
  const portletId = document.querySelector("#p-cactions") ? "p-cactions" : "p-tb";
  const portletElement = mw.util.addPortletLink(portletId, "#", getMessage("Purge"), "ca-purge", getMessage("PurgeFromServer"));
  portletElement === null || portletElement === void 0 || (_portletElement$query = portletElement.querySelector("a")) === null || _portletElement$query === void 0 || _portletElement$query.addEventListener("click", (event) => {
    void purgePageCacheMain(event, mw.config.get("wgPageName"));
  });
  var _iterator = _createForOfIteratorHelper(document.querySelectorAll('a[href*="action=purge"]')), _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done; ) {
      var _mw$util$getParamValu;
      const element = _step.value;
      const title = (_mw$util$getParamValu = mw.util.getParamValue("title", element.href)) !== null && _mw$util$getParamValu !== void 0 ? _mw$util$getParamValu : mw.config.get("wgPageName");
      element.addEventListener("click", (event) => {
        void purgePageCacheMain(event, title);
      });
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
};
//! src/PurgePageCache/PurgePageCache.ts
if (mw.config.get("wgAction") === "view" && mw.config.get("wgIsArticle") && mw.config.get("wgCurRevisionId") !== 0 && mw.config.get("wgRevisionId") !== 0 && mw.config.get("wgCurRevisionId") === mw.config.get("wgRevisionId")) {
  $(purgePageCache);
}

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1B1cmdlUGFnZUNhY2hlL21vZHVsZXMvY29uc3RhbnQudHMiLCAic3JjL1B1cmdlUGFnZUNhY2hlL21vZHVsZXMvaTE4bi50cyIsICJzcmMvUHVyZ2VQYWdlQ2FjaGUvbW9kdWxlcy9jb3JlLnRzIiwgInNyYy9QdXJnZVBhZ2VDYWNoZS9QdXJnZVBhZ2VDYWNoZS50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgV0dfV0lLSV9JRCA9IG13LmNvbmZpZy5nZXQoJ3dnV2lraUlEJyk7XG5cbmV4cG9ydCB7V0dfV0lLSV9JRH07XG4iLCAiaW1wb3J0IHtsb2NhbGl6ZX0gZnJvbSAnZXh0LmdhZGdldC5pMThuJztcblxuY29uc3QgZ2V0STE4bk1lc3NhZ2VzID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdEZhaWxlZDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdGYWlsZWQgdG8gcHVyZ2UgY2FjaGUuIFBsZWFzZSB0cnkgYWdhaW4gbGF0ZXInLFxuXHRcdFx0J3poLWhhbnMnOiAn5riF6Zmk5aSx6LSl77yM6K+356iN5ZCO6YeN6K+VJyxcblx0XHRcdCd6aC1oYW50JzogJ+a4hemZpOWkseaVl++8jOiri+eojeWQjumHjeippicsXG5cdFx0fSksXG5cdFx0UHVyZ2U6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnUHVyZ2UgY2FjaGUnLFxuXHRcdFx0J3poLWhhbnMnOiAn5riF6Zmk57yT5a2YJyxcblx0XHRcdCd6aC1oYW50JzogJ+a4hemZpOW/q+WPlicsXG5cdFx0fSksXG5cdFx0UHVyZ2VGcm9tU2VydmVyOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1B1cmdlIGNhY2hlIGZyb20gdGhlIHNlcnZlcicsXG5cdFx0XHQnemgtaGFucyc6ICfmm7TmlrDmnI3liqHlmajnvJPlrZgnLFxuXHRcdFx0J3poLWhhbnQnOiAn5pu05paw5Ly65pyN5Zmo5b+r5Y+WJyxcblx0XHR9KSxcblx0XHRQdXJnaW5nOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1B1cmdpbmcgY2FjaGUuLi4nLFxuXHRcdFx0J3poLWhhbnMnOiAn5q2j5Zyo5riF6Zmk4oCm4oCmJyxcblx0XHRcdCd6aC1oYW50JzogJ+ato+WcqOa4hemZpOKApuKApicsXG5cdFx0fSksXG5cdH07XG59O1xuXG5jb25zdCBpMThuTWVzc2FnZXMgPSBnZXRJMThuTWVzc2FnZXMoKTtcblxuY29uc3QgZ2V0TWVzc2FnZTogR2V0TWVzc2FnZXM8dHlwZW9mIGkxOG5NZXNzYWdlcz4gPSAoa2V5KSA9PiB7XG5cdHJldHVybiBpMThuTWVzc2FnZXNba2V5XSB8fCBrZXk7XG59O1xuXG5leHBvcnQge2dldE1lc3NhZ2V9O1xuIiwgImltcG9ydCB7V0dfV0lLSV9JRH0gZnJvbSAnLi9jb25zdGFudCc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vaTE4bic7XG5pbXBvcnQge2luaXRNd0FwaX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbmltcG9ydCB7dG9hc3RpZnl9IGZyb20gJ2V4dC5nYWRnZXQuVG9hc3RpZnknO1xuXG5leHBvcnQgY29uc3QgcHVyZ2VQYWdlQ2FjaGUgPSAoKTogdm9pZCA9PiB7XG5cdGNvbnN0IHB1cmdlUGFnZUNhY2hlTWFpbiA9IGFzeW5jIChldmVudDogRXZlbnQsIHRpdGxlOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdGNvbnN0IHRvYXN0aWZ5SW5zdGFuY2U6IFRvYXN0aWZ5SW5zdGFuY2UgPSB0b2FzdGlmeShcblx0XHRcdHtcblx0XHRcdFx0dGV4dDogZ2V0TWVzc2FnZSgnUHVyZ2luZycpLFxuXHRcdFx0XHRkdXJhdGlvbjogLTEsXG5cdFx0XHR9LFxuXHRcdFx0J2luZm8nXG5cdFx0KTtcblx0XHRjb25zdCBhcGk6IG13LkFwaSA9IGluaXRNd0FwaSgnUHVyZ2VQYWdlQ2FjaGUvMS4xJyk7XG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IHBhcmFtczogQXBpUHVyZ2VQYXJhbXMgPSB7XG5cdFx0XHRcdGFjdGlvbjogJ3B1cmdlJyxcblx0XHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRcdFx0dGl0bGVzOiB0aXRsZSxcblx0XHRcdFx0Zm9yY2VsaW5rdXBkYXRlOiB0cnVlLFxuXHRcdFx0fTtcblx0XHRcdGF3YWl0IGFwaS5wb3N0KHBhcmFtcyk7XG5cdFx0XHRsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShgTWVkaWFXaWtpTW9kdWxlU3RvcmU6JHtXR19XSUtJX0lEfWApO1xuXHRcdFx0bG9jYXRpb24ucmVsb2FkKCk7XG5cdFx0fSBjYXRjaCAoZXJyb3I6IHVua25vd24pIHtcblx0XHRcdGNvbnNvbGUuZXJyb3IoJ1tQdXJnZVBhZ2VDYWNoZV0gQWpheCBlcnJvcjonLCBlcnJvcik7XG5cdFx0XHR0b2FzdGlmeUluc3RhbmNlLmhpZGVUb2FzdCgpO1xuXHRcdFx0dG9hc3RpZnkoXG5cdFx0XHRcdHtcblx0XHRcdFx0XHR0ZXh0OiBnZXRNZXNzYWdlKCdGYWlsZWQnKSxcblx0XHRcdFx0XHRjbG9zZTogdHJ1ZSxcblx0XHRcdFx0XHRkdXJhdGlvbjogLTEsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdCdlcnJvcidcblx0XHRcdCk7XG5cdFx0fVxuXHR9O1xuXG5cdGNvbnN0IHBvcnRsZXRJZDogJ3AtY2FjdGlvbnMnIHwgJ3AtdGInID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3AtY2FjdGlvbnMnKSA/ICdwLWNhY3Rpb25zJyA6ICdwLXRiJztcblx0Y29uc3QgcG9ydGxldEVsZW1lbnQ6IEhUTUxMSUVsZW1lbnQgfCBudWxsID0gbXcudXRpbC5hZGRQb3J0bGV0TGluayhcblx0XHRwb3J0bGV0SWQsXG5cdFx0JyMnLFxuXHRcdGdldE1lc3NhZ2UoJ1B1cmdlJyksXG5cdFx0J2NhLXB1cmdlJyxcblx0XHRnZXRNZXNzYWdlKCdQdXJnZUZyb21TZXJ2ZXInKVxuXHQpO1xuXHRwb3J0bGV0RWxlbWVudD8ucXVlcnlTZWxlY3RvcignYScpPy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudDogTW91c2VFdmVudCk6IHZvaWQgPT4ge1xuXHRcdHZvaWQgcHVyZ2VQYWdlQ2FjaGVNYWluKGV2ZW50LCBtdy5jb25maWcuZ2V0KCd3Z1BhZ2VOYW1lJykpO1xuXHR9KTtcblxuXHRmb3IgKGNvbnN0IGVsZW1lbnQgb2YgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MQW5jaG9yRWxlbWVudD4oJ2FbaHJlZio9XCJhY3Rpb249cHVyZ2VcIl0nKSkge1xuXHRcdGNvbnN0IHRpdGxlOiBzdHJpbmcgPSBtdy51dGlsLmdldFBhcmFtVmFsdWUoJ3RpdGxlJywgZWxlbWVudC5ocmVmKSA/PyBtdy5jb25maWcuZ2V0KCd3Z1BhZ2VOYW1lJyk7XG5cdFx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudDogTW91c2VFdmVudCk6IHZvaWQgPT4ge1xuXHRcdFx0dm9pZCBwdXJnZVBhZ2VDYWNoZU1haW4oZXZlbnQsIHRpdGxlKTtcblx0XHR9KTtcblx0fVxufTtcbiIsICJpbXBvcnQge3B1cmdlUGFnZUNhY2hlfSBmcm9tICcuL21vZHVsZXMvY29yZSc7XG5cbmlmIChcblx0bXcuY29uZmlnLmdldCgnd2dBY3Rpb24nKSA9PT0gJ3ZpZXcnICYmXG5cdG13LmNvbmZpZy5nZXQoJ3dnSXNBcnRpY2xlJykgJiZcblx0bXcuY29uZmlnLmdldCgnd2dDdXJSZXZpc2lvbklkJykgIT09IDAgJiZcblx0bXcuY29uZmlnLmdldCgnd2dSZXZpc2lvbklkJykgIT09IDAgJiZcblx0bXcuY29uZmlnLmdldCgnd2dDdXJSZXZpc2lvbklkJykgPT09IG13LmNvbmZpZy5nZXQoJ3dnUmV2aXNpb25JZCcpXG4pIHtcblx0JChwdXJnZVBhZ2VDYWNoZSk7XG59XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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YSxjQUFjLFNBQVNGLFFBQVFHLElBQUksT0FBQSxRQUFBSiwwQkFBQSxTQUFBQSx3QkFBS2pFLEdBQUdDLE9BQU9DLElBQUksWUFBWTtBQUNoR2dFLGNBQVFULGlCQUFpQixTQUFVbkMsV0FBNEI7QUFDOUQsYUFBS0gsbUJBQW1CRyxPQUFPQyxLQUFLO01BQ3JDLENBQUM7SUFDRjtFQUFBLFNBQUErQyxLQUFBO0FBQUFaLGNBQUFhLEVBQUFELEdBQUE7RUFBQSxVQUFBO0FBQUFaLGNBQUFjLEVBQUE7RUFBQTtBQUNEOztBQ3pEQSxJQUNDeEUsR0FBR0MsT0FBT0MsSUFBSSxVQUFVLE1BQU0sVUFDOUJGLEdBQUdDLE9BQU9DLElBQUksYUFBYSxLQUMzQkYsR0FBR0MsT0FBT0MsSUFBSSxpQkFBaUIsTUFBTSxLQUNyQ0YsR0FBR0MsT0FBT0MsSUFBSSxjQUFjLE1BQU0sS0FDbENGLEdBQUdDLE9BQU9DLElBQUksaUJBQWlCLE1BQU1GLEdBQUdDLE9BQU9DLElBQUksY0FBYyxHQUNoRTtBQUNEdUUsSUFBRXhELGNBQWM7QUFDakI7IiwKICAibmFtZXMiOiBbIldHX1dJS0lfSUQiLCAibXciLCAiY29uZmlnIiwgImdldCIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJyZXF1aXJlIiwgImdldEkxOG5NZXNzYWdlcyIsICJGYWlsZWQiLCAibG9jYWxpemUiLCAiZW4iLCAiUHVyZ2UiLCAiUHVyZ2VGcm9tU2VydmVyIiwgIlB1cmdpbmciLCAiaTE4bk1lc3NhZ2VzIiwgImdldE1lc3NhZ2UiLCAia2V5IiwgImltcG9ydF9leHRfZ2FkZ2V0MiIsICJpbXBvcnRfZXh0X2dhZGdldDMiLCAicHVyZ2VQYWdlQ2FjaGUiLCAiX3BvcnRsZXRFbGVtZW50JHF1ZXJ5IiwgInB1cmdlUGFnZUNhY2hlTWFpbiIsICJfcmVmIiwgIl9hc3luY1RvR2VuZXJhdG9yIiwgImV2ZW50IiwgInRpdGxlIiwgInByZXZlbnREZWZhdWx0IiwgInRvYXN0aWZ5SW5zdGFuY2UiLCAidG9hc3RpZnkiLCAidGV4dCIsICJkdXJhdGlvbiIsICJhcGkiLCAiaW5pdE13QXBpIiwgInBhcmFtcyIsICJhY3Rpb24iLCAiZm9ybWF0IiwgImZvcm1hdHZlcnNpb24iLCAidGl0bGVzIiwgImZvcmNlbGlua3VwZGF0ZSIsICJwb3N0IiwgImxvY2FsU3RvcmFnZSIsICJyZW1vdmVJdGVtIiwgImNvbmNhdCIsICJsb2NhdGlvbiIsICJyZWxvYWQiLCAiZXJyb3IiLCAiY29uc29sZSIsICJoaWRlVG9hc3QiLCAiY2xvc2UiLCAiX3giLCAiX3gyIiwgImFwcGx5IiwgImFyZ3VtZW50cyIsICJwb3J0bGV0SWQiLCAiZG9jdW1lbnQiLCAicXVlcnlTZWxlY3RvciIsICJwb3J0bGV0RWxlbWVudCIsICJ1dGlsIiwgImFkZFBvcnRsZXRMaW5rIiwgImFkZEV2ZW50TGlzdGVuZXIiLCAiX2l0ZXJhdG9yIiwgIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwgInF1ZXJ5U2VsZWN0b3JBbGwiLCAiX3N0ZXAiLCAicyIsICJuIiwgImRvbmUiLCAiX213JHV0aWwkZ2V0UGFyYW1WYWx1IiwgImVsZW1lbnQiLCAidmFsdWUiLCAiZ2V0UGFyYW1WYWx1ZSIsICJocmVmIiwgImVyciIsICJlIiwgImYiLCAiJCJdCn0K

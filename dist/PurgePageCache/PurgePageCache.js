/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/PurgePageCache}
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
//! src/PurgePageCache/modules/i18n.ts
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
  var _element$querySelecto;
  const purgePageCacheMain = /* @__PURE__ */ function() {
    var _ref = _asyncToGenerator(function* (event, title) {
      event.preventDefault();
      const toastifyInstance = (0, import_ext_gadget3.toastify)({
        text: getMessage("Purging"),
        duration: -1
      }, "info");
      const api = (0, import_ext_gadget2.initMwApi)("Qiuwen/1.1 (PurgePageCache/1.1; ".concat(mw.config.get("wgWikiID"), ")"));
      try {
        const params = {
          action: "purge",
          format: "json",
          formatversion: "2",
          titles: title,
          forcelinkupdate: true
        };
        yield api.post(params);
        localStorage.removeItem("MediaWikiModuleStore:".concat(mw.config.get("wgWikiID")));
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
  const element = mw.util.addPortletLink(portletId, "#", getMessage("Purge"), "ca-purge", getMessage("PurgeFromServer"));
  element === null || element === void 0 || (_element$querySelecto = element.querySelector("a")) === null || _element$querySelecto === void 0 || _element$querySelecto.addEventListener("click", (event) => {
    void purgePageCacheMain(event, mw.config.get("wgPageName"));
  });
  Array.prototype.forEach.call(document.querySelectorAll('a[href*="action=purge"]'), (_element) => {
    var _mw$util$getParamValu;
    const title = (_mw$util$getParamValu = mw.util.getParamValue("title", _element.href)) !== null && _mw$util$getParamValu !== void 0 ? _mw$util$getParamValu : mw.config.get("wgPageName");
    _element.addEventListener("click", (event) => {
      void purgePageCacheMain(event, title);
    });
  });
};
//! src/PurgePageCache/PurgePageCache.ts
if (mw.config.get("wgAction") === "view" && mw.config.get("wgIsArticle") && mw.config.get("wgCurRevisionId") !== 0 && mw.config.get("wgRevisionId") !== 0 && mw.config.get("wgCurRevisionId") === mw.config.get("wgRevisionId")) {
  $(purgePageCache);
}
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1B1cmdlUGFnZUNhY2hlL21vZHVsZXMvaTE4bi50cyIsICJzcmMvUHVyZ2VQYWdlQ2FjaGUvbW9kdWxlcy9jb3JlLnRzIiwgInNyYy9QdXJnZVBhZ2VDYWNoZS9QdXJnZVBhZ2VDYWNoZS50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHtsb2NhbGl6ZX0gZnJvbSAnZXh0LmdhZGdldC5pMThuJztcblxuY29uc3QgZ2V0STE4bk1lc3NhZ2VzID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdEZhaWxlZDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdGYWlsZWQgdG8gcHVyZ2UgY2FjaGUuIFBsZWFzZSB0cnkgYWdhaW4gbGF0ZXInLFxuXHRcdFx0J3poLWhhbnMnOiAn5riF6Zmk5aSx6LSl77yM6K+356iN5ZCO6YeN6K+VJyxcblx0XHRcdCd6aC1oYW50JzogJ+a4hemZpOWkseaVl++8jOiri+eojeWQjumHjeippicsXG5cdFx0fSksXG5cdFx0UHVyZ2U6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnUHVyZ2UgY2FjaGUnLFxuXHRcdFx0J3poLWhhbnMnOiAn5riF6Zmk57yT5a2YJyxcblx0XHRcdCd6aC1oYW50JzogJ+a4hemZpOW/q+WPlicsXG5cdFx0fSksXG5cdFx0UHVyZ2VGcm9tU2VydmVyOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1B1cmdlIGNhY2hlIGZyb20gdGhlIHNlcnZlcicsXG5cdFx0XHQnemgtaGFucyc6ICfmm7TmlrDmnI3liqHlmajnvJPlrZgnLFxuXHRcdFx0J3poLWhhbnQnOiAn5pu05paw5Ly65pyN5Zmo5b+r5Y+WJyxcblx0XHR9KSxcblx0XHRQdXJnaW5nOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1B1cmdpbmcgY2FjaGUuLi4nLFxuXHRcdFx0J3poLWhhbnMnOiAn5q2j5Zyo5riF6Zmk4oCm4oCmJyxcblx0XHRcdCd6aC1oYW50JzogJ+ato+WcqOa4hemZpOKApuKApicsXG5cdFx0fSksXG5cdH07XG59O1xuXG5jb25zdCBpMThuTWVzc2FnZXMgPSBnZXRJMThuTWVzc2FnZXMoKTtcblxuY29uc3QgZ2V0TWVzc2FnZTogR2V0TWVzc2FnZXM8dHlwZW9mIGkxOG5NZXNzYWdlcz4gPSAoa2V5KSA9PiB7XG5cdHJldHVybiBpMThuTWVzc2FnZXNba2V5XSB8fCBrZXk7XG59O1xuXG5leHBvcnQge2dldE1lc3NhZ2V9O1xuIiwgImltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9pMThuJztcbmltcG9ydCB7aW5pdE13QXBpfSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuaW1wb3J0IHt0b2FzdGlmeX0gZnJvbSAnZXh0LmdhZGdldC5Ub2FzdGlmeSc7XG5cbmV4cG9ydCBjb25zdCBwdXJnZVBhZ2VDYWNoZSA9ICgpOiB2b2lkID0+IHtcblx0Y29uc3QgcHVyZ2VQYWdlQ2FjaGVNYWluID0gYXN5bmMgKGV2ZW50OiBFdmVudCwgdGl0bGU6IHN0cmluZyk6IFByb21pc2U8dm9pZD4gPT4ge1xuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0Y29uc3QgdG9hc3RpZnlJbnN0YW5jZTogVG9hc3RpZnlJbnN0YW5jZSA9IHRvYXN0aWZ5KFxuXHRcdFx0e1xuXHRcdFx0XHR0ZXh0OiBnZXRNZXNzYWdlKCdQdXJnaW5nJyksXG5cdFx0XHRcdGR1cmF0aW9uOiAtMSxcblx0XHRcdH0sXG5cdFx0XHQnaW5mbydcblx0XHQpO1xuXHRcdGNvbnN0IGFwaTogbXcuQXBpID0gaW5pdE13QXBpKGBRaXV3ZW4vMS4xIChQdXJnZVBhZ2VDYWNoZS8xLjE7ICR7bXcuY29uZmlnLmdldCgnd2dXaWtpSUQnKX0pYCk7XG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IHBhcmFtczogQXBpUHVyZ2VQYXJhbXMgPSB7XG5cdFx0XHRcdGFjdGlvbjogJ3B1cmdlJyxcblx0XHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRcdFx0dGl0bGVzOiB0aXRsZSxcblx0XHRcdFx0Zm9yY2VsaW5rdXBkYXRlOiB0cnVlLFxuXHRcdFx0fTtcblx0XHRcdGF3YWl0IGFwaS5wb3N0KHBhcmFtcyk7XG5cdFx0XHRsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShgTWVkaWFXaWtpTW9kdWxlU3RvcmU6JHttdy5jb25maWcuZ2V0KCd3Z1dpa2lJRCcpfWApO1xuXHRcdFx0bG9jYXRpb24ucmVsb2FkKCk7XG5cdFx0fSBjYXRjaCAoZXJyb3I6IHVua25vd24pIHtcblx0XHRcdGNvbnNvbGUuZXJyb3IoJ1tQdXJnZVBhZ2VDYWNoZV0gQWpheCBlcnJvcjonLCBlcnJvcik7XG5cdFx0XHR0b2FzdGlmeUluc3RhbmNlLmhpZGVUb2FzdCgpO1xuXHRcdFx0dG9hc3RpZnkoXG5cdFx0XHRcdHtcblx0XHRcdFx0XHR0ZXh0OiBnZXRNZXNzYWdlKCdGYWlsZWQnKSxcblx0XHRcdFx0XHRjbG9zZTogdHJ1ZSxcblx0XHRcdFx0XHRkdXJhdGlvbjogLTEsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdCdlcnJvcidcblx0XHRcdCk7XG5cdFx0fVxuXHR9O1xuXG5cdGNvbnN0IHBvcnRsZXRJZDogJ3AtY2FjdGlvbnMnIHwgJ3AtdGInID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3AtY2FjdGlvbnMnKSA/ICdwLWNhY3Rpb25zJyA6ICdwLXRiJztcblx0Y29uc3QgZWxlbWVudDogSFRNTExJRWxlbWVudCB8IG51bGwgPSBtdy51dGlsLmFkZFBvcnRsZXRMaW5rKFxuXHRcdHBvcnRsZXRJZCxcblx0XHQnIycsXG5cdFx0Z2V0TWVzc2FnZSgnUHVyZ2UnKSxcblx0XHQnY2EtcHVyZ2UnLFxuXHRcdGdldE1lc3NhZ2UoJ1B1cmdlRnJvbVNlcnZlcicpXG5cdCk7XG5cdGVsZW1lbnQ/LnF1ZXJ5U2VsZWN0b3IoJ2EnKT8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkID0+IHtcblx0XHR2b2lkIHB1cmdlUGFnZUNhY2hlTWFpbihldmVudCwgbXcuY29uZmlnLmdldCgnd2dQYWdlTmFtZScpKTtcblx0fSk7XG5cblx0QXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChcblx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdhW2hyZWYqPVwiYWN0aW9uPXB1cmdlXCJdJyksXG5cdFx0KF9lbGVtZW50OiBIVE1MQW5jaG9yRWxlbWVudCk6IHZvaWQgPT4ge1xuXHRcdFx0Y29uc3QgdGl0bGU6IHN0cmluZyA9IG13LnV0aWwuZ2V0UGFyYW1WYWx1ZSgndGl0bGUnLCBfZWxlbWVudC5ocmVmKSA/PyBtdy5jb25maWcuZ2V0KCd3Z1BhZ2VOYW1lJyk7XG5cdFx0XHRfZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudDogTW91c2VFdmVudCk6IHZvaWQgPT4ge1xuXHRcdFx0XHR2b2lkIHB1cmdlUGFnZUNhY2hlTWFpbihldmVudCwgdGl0bGUpO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHQpO1xufTtcbiIsICJpbXBvcnQge3B1cmdlUGFnZUNhY2hlfSBmcm9tICcuL21vZHVsZXMvY29yZSc7XG5cbmlmIChcblx0bXcuY29uZmlnLmdldCgnd2dBY3Rpb24nKSA9PT0gJ3ZpZXcnICYmXG5cdG13LmNvbmZpZy5nZXQoJ3dnSXNBcnRpY2xlJykgJiZcblx0bXcuY29uZmlnLmdldCgnd2dDdXJSZXZpc2lvbklkJykgIT09IDAgJiZcblx0bXcuY29uZmlnLmdldCgnd2dSZXZpc2lvbklkJykgIT09IDAgJiZcblx0bXcuY29uZmlnLmdldCgnd2dDdXJSZXZpc2lvbklkJykgPT09IG13LmNvbmZpZy5nZXQoJ3dnUmV2aXNpb25JZCcpXG4pIHtcblx0JChwdXJnZVBhZ2VDYWNoZSk7XG59XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxvQkFBdUJDLFFBQUEsaUJBQUE7QUFFdkIsSUFBTUMsa0JBQWtCQSxNQUFNO0FBQzdCLFNBQU87SUFDTkMsU0FBQSxHQUFRSCxrQkFBQUksVUFBUztNQUNoQkMsSUFB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QUM5QkYsR0FBR0MsT0FBT0MsSUFBSSxhQUFhLEtBQzNCRixHQUFHQyxPQUFPQyxJQUFJLGlCQUFpQixNQUFNLEtBQ3JDRixHQUFHQyxPQUFPQyxJQUFJLGNBQWMsTUFBTSxLQUNsQ0YsR0FBR0MsT0FBT0MsSUFBSSxpQkFBaUIsTUFBTUYsR0FBR0MsT0FBT0MsSUFBSSxjQUFjLEdBQ2hFO0FBQ0RvQyxJQUFFckQsY0FBYztBQUNqQjsiLAogICJuYW1lcyI6IFsiaW1wb3J0X2V4dF9nYWRnZXQiLCAicmVxdWlyZSIsICJnZXRJMThuTWVzc2FnZXMiLCAiRmFpbGVkIiwgImxvY2FsaXplIiwgImVuIiwgIlB1cmdlIiwgIlB1cmdlRnJvbVNlcnZlciIsICJQdXJnaW5nIiwgImkxOG5NZXNzYWdlcyIsICJnZXRNZXNzYWdlIiwgImtleSIsICJpbXBvcnRfZXh0X2dhZGdldDIiLCAiaW1wb3J0X2V4dF9nYWRnZXQzIiwgInB1cmdlUGFnZUNhY2hlIiwgIl9lbGVtZW50JHF1ZXJ5U2VsZWN0byIsICJwdXJnZVBhZ2VDYWNoZU1haW4iLCAiX3JlZiIsICJfYXN5bmNUb0dlbmVyYXRvciIsICJldmVudCIsICJ0aXRsZSIsICJwcmV2ZW50RGVmYXVsdCIsICJ0b2FzdGlmeUluc3RhbmNlIiwgInRvYXN0aWZ5IiwgInRleHQiLCAiZHVyYXRpb24iLCAiYXBpIiwgImluaXRNd0FwaSIsICJjb25jYXQiLCAibXciLCAiY29uZmlnIiwgImdldCIsICJwYXJhbXMiLCAiYWN0aW9uIiwgImZvcm1hdCIsICJmb3JtYXR2ZXJzaW9uIiwgInRpdGxlcyIsICJmb3JjZWxpbmt1cGRhdGUiLCAicG9zdCIsICJsb2NhbFN0b3JhZ2UiLCAicmVtb3ZlSXRlbSIsICJsb2NhdGlvbiIsICJyZWxvYWQiLCAiZXJyb3IiLCAiY29uc29sZSIsICJoaWRlVG9hc3QiLCAiY2xvc2UiLCAiX3giLCAiX3gyIiwgImFwcGx5IiwgImFyZ3VtZW50cyIsICJwb3J0bGV0SWQiLCAiZG9jdW1lbnQiLCAicXVlcnlTZWxlY3RvciIsICJlbGVtZW50IiwgInV0aWwiLCAiYWRkUG9ydGxldExpbmsiLCAiYWRkRXZlbnRMaXN0ZW5lciIsICJBcnJheSIsICJwcm90b3R5cGUiLCAiZm9yRWFjaCIsICJjYWxsIiwgInF1ZXJ5U2VsZWN0b3JBbGwiLCAiX2VsZW1lbnQiLCAiX213JHV0aWwkZ2V0UGFyYW1WYWx1IiwgImdldFBhcmFtVmFsdWUiLCAiaHJlZiIsICIkIl0KfQo=

})();

/* </nowiki> */

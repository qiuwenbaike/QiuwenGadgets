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
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all) __defProp(target, name, {
    get: all[name],
    enumerable: true
  });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    var _iterator = _createForOfIteratorHelper(__getOwnPropNames(from)), _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done; ) {
        let key = _step.value;
        if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
          get: () => from[key],
          enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
        });
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", {
  value: true
}), mod);
//! src/PurgePageCache/PurgePageCache.ts
var PurgePageCache_exports = {};
__export(PurgePageCache_exports, {
  purge: () => purge
});
module.exports = __toCommonJS(PurgePageCache_exports);
var import_ext_gadget4 = require("ext.gadget.Util");
//! src/PurgePageCache/modules/i18n.ts
var import_ext_gadget = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
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
    }),
    Success: (0, import_ext_gadget.localize)({
      en: "Cache cleared!",
      "zh-hans": "缓存清除成功",
      "zh-hant": "快取清除成功"
    }),
    Failed: (0, import_ext_gadget.localize)({
      en: "Failed to purge cache. Please try again later",
      "zh-hans": "清除失败，请稍后重试",
      "zh-hant": "清除失敗，請稍后重試"
    })
  };
};
var i18nMessages = getI18nMessages();
var getMessage = (key) => {
  return i18nMessages[key] || key;
};
//! src/PurgePageCache/options.json
var version = "2.0";
//! src/PurgePageCache/modules/api.ts
var import_ext_gadget2 = require("ext.gadget.Util");
var api = (0, import_ext_gadget2.initMwApi)("PurgePageCache/".concat(version));
//! src/PurgePageCache/modules/purge.ts
var import_ext_gadget3 = require("ext.gadget.Toastify");
var purge = /* @__PURE__ */ function() {
  var _ref = _asyncToGenerator(function* (title) {
    const toastifyInstance = (0, import_ext_gadget3.toastify)({
      text: getMessage("Purging"),
      duration: -1
    }, "info");
    const {
      wgWikiID
    } = mw.config.get();
    try {
      const params = {
        action: "purge",
        format: "json",
        formatversion: "2",
        titles: title,
        forcelinkupdate: true
      };
      yield api.post(params);
      localStorage.removeItem("MediaWikiModuleStore:".concat(wgWikiID));
      toastifyInstance.hideToast();
      (0, import_ext_gadget3.toastify)({
        text: getMessage("Success"),
        close: true,
        duration: -1
      }, "success");
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
  return function purge2(_x) {
    return _ref.apply(this, arguments);
  };
}();
//! src/PurgePageCache/PurgePageCache.ts
void (0, import_ext_gadget4.getBody)().then(function purgePageCache($body) {
  const {
    wgAction,
    wgPageName,
    wgNamespaceNumber
  } = mw.config.get();
  if (wgAction !== "view" || wgNamespaceNumber < 0) {
    return;
  }
  const portletId = $body.find("#p-cactions").length ? "p-cactions" : "p-tb";
  const portletElement = mw.util.addPortletLink(portletId, "#", getMessage("Purge"), "ca-purge", getMessage("PurgeFromServer"));
  if (!portletElement) {
    return;
  }
  portletElement.querySelector("a").addEventListener("click", (event) => {
    event.preventDefault();
    void purge(wgPageName);
  });
  var _iterator2 = _createForOfIteratorHelper($body.find('a[href*="action=purge"]')), _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
      const element = _step2.value;
      const title = mw.util.getParamValue("title", element.href) || wgPageName;
      element.addEventListener("click", (event) => {
        event.preventDefault();
        void purge(title);
      });
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
});

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1B1cmdlUGFnZUNhY2hlL1B1cmdlUGFnZUNhY2hlLnRzIiwgInNyYy9QdXJnZVBhZ2VDYWNoZS9tb2R1bGVzL2kxOG4udHMiLCAic3JjL1B1cmdlUGFnZUNhY2hlL29wdGlvbnMuanNvbiIsICJzcmMvUHVyZ2VQYWdlQ2FjaGUvbW9kdWxlcy9hcGkudHMiLCAic3JjL1B1cmdlUGFnZUNhY2hlL21vZHVsZXMvcHVyZ2UudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7Z2V0Qm9keX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9tb2R1bGVzL2kxOG4nO1xuaW1wb3J0IHtwdXJnZX0gZnJvbSAnLi9tb2R1bGVzL3B1cmdlJztcblxudm9pZCBnZXRCb2R5KCkudGhlbihmdW5jdGlvbiBwdXJnZVBhZ2VDYWNoZSgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkIHtcblx0Y29uc3Qge3dnQWN0aW9uLCB3Z1BhZ2VOYW1lLCB3Z05hbWVzcGFjZU51bWJlcn0gPSBtdy5jb25maWcuZ2V0KCk7XG5cblx0aWYgKHdnQWN0aW9uICE9PSAndmlldycgfHwgd2dOYW1lc3BhY2VOdW1iZXIgPCAwKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgcG9ydGxldElkOiAncC1jYWN0aW9ucycgfCAncC10YicgPSAkYm9keS5maW5kKCcjcC1jYWN0aW9ucycpLmxlbmd0aCA/ICdwLWNhY3Rpb25zJyA6ICdwLXRiJztcblx0Y29uc3QgcG9ydGxldEVsZW1lbnQ6IEhUTUxMSUVsZW1lbnQgfCBudWxsID0gbXcudXRpbC5hZGRQb3J0bGV0TGluayhcblx0XHRwb3J0bGV0SWQsXG5cdFx0JyMnLFxuXHRcdGdldE1lc3NhZ2UoJ1B1cmdlJyksXG5cdFx0J2NhLXB1cmdlJyxcblx0XHRnZXRNZXNzYWdlKCdQdXJnZUZyb21TZXJ2ZXInKVxuXHQpO1xuXHRpZiAoIXBvcnRsZXRFbGVtZW50KSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0KHBvcnRsZXRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2EnKSBhcyBIVE1MQW5jaG9yRWxlbWVudCkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkID0+IHtcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdHZvaWQgcHVyZ2Uod2dQYWdlTmFtZSk7XG5cdH0pO1xuXG5cdGZvciAoY29uc3QgZWxlbWVudCBvZiAkYm9keS5maW5kPEhUTUxBbmNob3JFbGVtZW50PignYVtocmVmKj1cImFjdGlvbj1wdXJnZVwiXScpKSB7XG5cdFx0Y29uc3QgdGl0bGU6IHN0cmluZyA9IG13LnV0aWwuZ2V0UGFyYW1WYWx1ZSgndGl0bGUnLCBlbGVtZW50LmhyZWYpIHx8IHdnUGFnZU5hbWU7XG5cdFx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudDogTW91c2VFdmVudCk6IHZvaWQgPT4ge1xuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdHZvaWQgcHVyZ2UodGl0bGUpO1xuXHRcdH0pO1xuXHR9XG59KTtcblxuZXhwb3J0IHtwdXJnZX0gZnJvbSAnLi9tb2R1bGVzL3B1cmdlJztcbiIsICJpbXBvcnQge2xvY2FsaXplfSBmcm9tICdleHQuZ2FkZ2V0LmkxOG4nO1xuXG5jb25zdCBnZXRJMThuTWVzc2FnZXMgPSAoKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0UHVyZ2U6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnUHVyZ2UgY2FjaGUnLFxuXHRcdFx0J3poLWhhbnMnOiAn5riF6Zmk57yT5a2YJyxcblx0XHRcdCd6aC1oYW50JzogJ+a4hemZpOW/q+WPlicsXG5cdFx0fSksXG5cdFx0UHVyZ2VGcm9tU2VydmVyOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1B1cmdlIGNhY2hlIGZyb20gdGhlIHNlcnZlcicsXG5cdFx0XHQnemgtaGFucyc6ICfmm7TmlrDmnI3liqHlmajnvJPlrZgnLFxuXHRcdFx0J3poLWhhbnQnOiAn5pu05paw5Ly65pyN5Zmo5b+r5Y+WJyxcblx0XHR9KSxcblx0XHRQdXJnaW5nOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1B1cmdpbmcgY2FjaGUuLi4nLFxuXHRcdFx0J3poLWhhbnMnOiAn5q2j5Zyo5riF6Zmk4oCm4oCmJyxcblx0XHRcdCd6aC1oYW50JzogJ+ato+WcqOa4hemZpOKApuKApicsXG5cdFx0fSksXG5cdFx0U3VjY2VzczogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdDYWNoZSBjbGVhcmVkIScsXG5cdFx0XHQnemgtaGFucyc6ICfnvJPlrZjmuIXpmaTmiJDlip8nLFxuXHRcdFx0J3poLWhhbnQnOiAn5b+r5Y+W5riF6Zmk5oiQ5YqfJyxcblx0XHR9KSxcblx0XHRGYWlsZWQ6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnRmFpbGVkIHRvIHB1cmdlIGNhY2hlLiBQbGVhc2UgdHJ5IGFnYWluIGxhdGVyJyxcblx0XHRcdCd6aC1oYW5zJzogJ+a4hemZpOWksei0pe+8jOivt+eojeWQjumHjeivlScsXG5cdFx0XHQnemgtaGFudCc6ICfmuIXpmaTlpLHmlZfvvIzoq4vnqI3lkI7ph43oqaYnLFxuXHRcdH0pLFxuXHR9O1xufTtcblxuY29uc3QgaTE4bk1lc3NhZ2VzID0gZ2V0STE4bk1lc3NhZ2VzKCk7XG5cbmNvbnN0IGdldE1lc3NhZ2U6IEdldE1lc3NhZ2VzPHR5cGVvZiBpMThuTWVzc2FnZXM+ID0gKGtleSkgPT4ge1xuXHRyZXR1cm4gaTE4bk1lc3NhZ2VzW2tleV0gfHwga2V5O1xufTtcblxuZXhwb3J0IHtnZXRNZXNzYWdlfTtcbiIsICJ7XG5cdFwidmVyc2lvblwiOiBcIjIuMFwiXG59XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtpbml0TXdBcGl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmNvbnN0IGFwaTogbXcuQXBpID0gaW5pdE13QXBpKGBQdXJnZVBhZ2VDYWNoZS8ke09QVElPTlMudmVyc2lvbn1gKTtcblxuZXhwb3J0IHthcGl9O1xuIiwgImltcG9ydCB7YXBpfSBmcm9tICcuL2FwaSc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vaTE4bic7XG5pbXBvcnQge3RvYXN0aWZ5fSBmcm9tICdleHQuZ2FkZ2V0LlRvYXN0aWZ5JztcblxudHlwZSBQdXJnZSA9ICh0aXRsZTogc3RyaW5nKSA9PiBQcm9taXNlPHZvaWQ+O1xuXG5jb25zdCBwdXJnZTogUHVyZ2UgPSBhc3luYyAodGl0bGUpID0+IHtcblx0Y29uc3QgdG9hc3RpZnlJbnN0YW5jZTogVG9hc3RpZnlJbnN0YW5jZSA9IHRvYXN0aWZ5KFxuXHRcdHtcblx0XHRcdHRleHQ6IGdldE1lc3NhZ2UoJ1B1cmdpbmcnKSxcblx0XHRcdGR1cmF0aW9uOiAtMSxcblx0XHR9LFxuXHRcdCdpbmZvJ1xuXHQpO1xuXHRjb25zdCB7d2dXaWtpSUR9ID0gbXcuY29uZmlnLmdldCgpO1xuXG5cdHRyeSB7XG5cdFx0Y29uc3QgcGFyYW1zOiBBcGlQdXJnZVBhcmFtcyA9IHtcblx0XHRcdGFjdGlvbjogJ3B1cmdlJyxcblx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdFx0dGl0bGVzOiB0aXRsZSxcblx0XHRcdGZvcmNlbGlua3VwZGF0ZTogdHJ1ZSxcblx0XHR9O1xuXG5cdFx0YXdhaXQgYXBpLnBvc3QocGFyYW1zKTtcblx0XHRsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShgTWVkaWFXaWtpTW9kdWxlU3RvcmU6JHt3Z1dpa2lJRH1gKTtcblxuXHRcdHRvYXN0aWZ5SW5zdGFuY2UuaGlkZVRvYXN0KCk7XG5cdFx0dG9hc3RpZnkoXG5cdFx0XHR7XG5cdFx0XHRcdHRleHQ6IGdldE1lc3NhZ2UoJ1N1Y2Nlc3MnKSxcblx0XHRcdFx0Y2xvc2U6IHRydWUsXG5cdFx0XHRcdGR1cmF0aW9uOiAtMSxcblx0XHRcdH0sXG5cdFx0XHQnc3VjY2Vzcydcblx0XHQpO1xuXG5cdFx0bG9jYXRpb24ucmVsb2FkKCk7XG5cdH0gY2F0Y2ggKGVycm9yOiB1bmtub3duKSB7XG5cdFx0Y29uc29sZS5lcnJvcignW1B1cmdlUGFnZUNhY2hlXSBBamF4IGVycm9yOicsIGVycm9yKTtcblxuXHRcdHRvYXN0aWZ5SW5zdGFuY2UuaGlkZVRvYXN0KCk7XG5cdFx0dG9hc3RpZnkoXG5cdFx0XHR7XG5cdFx0XHRcdHRleHQ6IGdldE1lc3NhZ2UoJ0ZhaWxlZCcpLFxuXHRcdFx0XHRjbG9zZTogdHJ1ZSxcblx0XHRcdFx0ZHVyYXRpb246IC0xLFxuXHRcdFx0fSxcblx0XHRcdCdlcnJvcidcblx0XHQpO1xuXHR9XG59O1xuXG5leHBvcnQge3R5cGUgUHVyZ2UsIHB1cmdlfTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLHlCQUFBLENBQUE7QUFBQUMsU0FBQUQsd0JBQUE7RUFBQUUsT0FBQUEsTUFBQUE7QUFBQSxDQUFBO0FBQUFDLE9BQUFDLFVBQUFDLGFBQUFMLHNCQUFBO0FBQUEsSUFBQU0scUJBQXNCQyxRQUFBLGlCQUFBOztBQ0F0QixJQUFBQyxvQkFBdUJELFFBQUEsaUJBQUE7QUFFdkIsSUFBTUUsa0JBQWtCQSxNQUFNO0FBQzdCLFNBQU87SUFDTkMsUUFBQSxHQUFPRixrQkFBQUcsVUFBUztNQUNmQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0RDLGtCQUFBLEdBQWlCTCxrQkFBQUcsVUFBUztNQUN6QkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNERSxVQUFBLEdBQVNOLGtCQUFBRyxVQUFTO01BQ2pCQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixD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QWlCLFNBQVVDLFdBQTRCO0FBQzlEQSxjQUFNQyxlQUFlO0FBQ3JCLGFBQUtyRSxNQUFNMEIsS0FBSztNQUNqQixDQUFDO0lBQ0Y7RUFBQSxTQUFBc0QsS0FBQTtBQUFBVixlQUFBVyxFQUFBRCxHQUFBO0VBQUEsVUFBQTtBQUFBVixlQUFBWSxFQUFBO0VBQUE7QUFDRCxDQUFDOyIsCiAgIm5hbWVzIjogWyJQdXJnZVBhZ2VDYWNoZV9leHBvcnRzIiwgIl9fZXhwb3J0IiwgInB1cmdlIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIl9fdG9Db21tb25KUyIsICJpbXBvcnRfZXh0X2dhZGdldDQiLCAicmVxdWlyZSIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJnZXRJMThuTWVzc2FnZXMiLCAiUHVyZ2UiLCAibG9jYWxpemUiLCAiZW4iLCAiUHVyZ2VGcm9tU2VydmVyIiwgIlB1cmdpbmciLCAiU3VjY2VzcyIsICJGYWlsZWQiLCAiaTE4bk1lc3NhZ2VzIiwgImdldE1lc3NhZ2UiLCAia2V5IiwgInZlcnNpb24iLCAiaW1wb3J0X2V4dF9nYWRnZXQyIiwgImFwaSIsICJpbml0TXdBcGkiLCAiY29uY2F0IiwgImltcG9ydF9leHRfZ2FkZ2V0MyIsICJfcmVmIiwgIl9hc3luY1RvR2VuZXJhdG9yIiwgInRpdGxlIiwgInRvYXN0aWZ5SW5zdGFuY2UiLCAidG9hc3RpZnkiLCAidGV4dCIsICJkdXJhdGlvbiIsICJ3Z1dpa2lJRCIsICJtdyIsICJjb25maWciLCAiZ2V0IiwgInBhcmFtcyIsICJhY3Rpb24iLCAiZm9ybWF0IiwgImZvcm1hdHZlcnNpb24iLCAidGl0bGVzIiwgImZvcmNlbGlua3VwZGF0ZSIsICJwb3N0IiwgImxvY2FsU3RvcmFnZSIsICJyZW1vdmVJdGVtIiwgImhpZGVUb2FzdCIsICJjbG9zZSIsICJsb2NhdGlvbiIsICJyZWxvYWQiLCAiZXJyb3IiLCAiY29uc29sZSIsICJfeCIsICJhcHBseSIsICJhcmd1bWVudHMiLCAiZ2V0Qm9keSIsICJ0aGVuIiwgInB1cmdlUGFnZUNhY2hlIiwgIiRib2R5IiwgIndnQWN0aW9uIiwgIndnUGFnZU5hbWUiLCAid2dOYW1lc3BhY2VOdW1iZXIiLCAicG9ydGxldElkIiwgImZpbmQiLCAibGVuZ3RoIiwgInBvcnRsZXRFbGVtZW50IiwgInV0aWwiLCAiYWRkUG9ydGxldExpbmsiLCAicXVlcnlTZWxlY3RvciIsICJhZGRFdmVudExpc3RlbmVyIiwgImV2ZW50IiwgInByZXZlbnREZWZhdWx0IiwgIl9pdGVyYXRvcjIiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAiX3N0ZXAyIiwgInMiLCAibiIsICJkb25lIiwgImVsZW1lbnQiLCAidmFsdWUiLCAiZ2V0UGFyYW1WYWx1ZSIsICJocmVmIiwgImVyciIsICJlIiwgImYiXQp9Cg==

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
//! src/PurgePageCache/PurgePageCache.ts
var import_ext_gadget4 = require("ext.gadget.Util");
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
      mw.storage.remove("MediaWikiModuleStore:".concat(wgWikiID));
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
  var _iterator = _createForOfIteratorHelper($body.find('a[href*="action=purge"]')), _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done; ) {
      const element = _step.value;
      const title = mw.util.getParamValue("title", element.href) || wgPageName;
      element.addEventListener("click", (event) => {
        event.preventDefault();
        void purge(title);
      });
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
});

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1B1cmdlUGFnZUNhY2hlL1B1cmdlUGFnZUNhY2hlLnRzIiwgInNyYy9QdXJnZVBhZ2VDYWNoZS9tb2R1bGVzL2kxOG4udHMiLCAic3JjL1B1cmdlUGFnZUNhY2hlL29wdGlvbnMuanNvbiIsICJzcmMvUHVyZ2VQYWdlQ2FjaGUvbW9kdWxlcy9hcGkudHMiLCAic3JjL1B1cmdlUGFnZUNhY2hlL21vZHVsZXMvcHVyZ2UudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7Z2V0Qm9keX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9tb2R1bGVzL2kxOG4nO1xuaW1wb3J0IHtwdXJnZX0gZnJvbSAnLi9tb2R1bGVzL3B1cmdlJztcblxudm9pZCBnZXRCb2R5KCkudGhlbihmdW5jdGlvbiBwdXJnZVBhZ2VDYWNoZSgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkIHtcblx0Y29uc3Qge3dnQWN0aW9uLCB3Z1BhZ2VOYW1lLCB3Z05hbWVzcGFjZU51bWJlcn0gPSBtdy5jb25maWcuZ2V0KCk7XG5cblx0aWYgKHdnQWN0aW9uICE9PSAndmlldycgfHwgd2dOYW1lc3BhY2VOdW1iZXIgPCAwKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgcG9ydGxldElkOiAncC1jYWN0aW9ucycgfCAncC10YicgPSAkYm9keS5maW5kKCcjcC1jYWN0aW9ucycpLmxlbmd0aCA/ICdwLWNhY3Rpb25zJyA6ICdwLXRiJztcblx0Y29uc3QgcG9ydGxldEVsZW1lbnQ6IEhUTUxMSUVsZW1lbnQgfCBudWxsID0gbXcudXRpbC5hZGRQb3J0bGV0TGluayhcblx0XHRwb3J0bGV0SWQsXG5cdFx0JyMnLFxuXHRcdGdldE1lc3NhZ2UoJ1B1cmdlJyksXG5cdFx0J2NhLXB1cmdlJyxcblx0XHRnZXRNZXNzYWdlKCdQdXJnZUZyb21TZXJ2ZXInKVxuXHQpO1xuXHRpZiAoIXBvcnRsZXRFbGVtZW50KSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0KHBvcnRsZXRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2EnKSBhcyBIVE1MQW5jaG9yRWxlbWVudCkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkID0+IHtcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdHZvaWQgcHVyZ2Uod2dQYWdlTmFtZSk7XG5cdH0pO1xuXG5cdGZvciAoY29uc3QgZWxlbWVudCBvZiAkYm9keS5maW5kPEhUTUxBbmNob3JFbGVtZW50PignYVtocmVmKj1cImFjdGlvbj1wdXJnZVwiXScpKSB7XG5cdFx0Y29uc3QgdGl0bGU6IHN0cmluZyA9IG13LnV0aWwuZ2V0UGFyYW1WYWx1ZSgndGl0bGUnLCBlbGVtZW50LmhyZWYpIHx8IHdnUGFnZU5hbWU7XG5cdFx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudDogTW91c2VFdmVudCk6IHZvaWQgPT4ge1xuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdHZvaWQgcHVyZ2UodGl0bGUpO1xuXHRcdH0pO1xuXHR9XG59KTtcbiIsICJpbXBvcnQge2xvY2FsaXplfSBmcm9tICdleHQuZ2FkZ2V0LmkxOG4nO1xuXG5jb25zdCBnZXRJMThuTWVzc2FnZXMgPSAoKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0RmFpbGVkOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0ZhaWxlZCB0byBwdXJnZSBjYWNoZS4gUGxlYXNlIHRyeSBhZ2FpbiBsYXRlcicsXG5cdFx0XHQnemgtaGFucyc6ICfmuIXpmaTlpLHotKXvvIzor7fnqI3lkI7ph43or5UnLFxuXHRcdFx0J3poLWhhbnQnOiAn5riF6Zmk5aSx5pWX77yM6KuL56iN5ZCO6YeN6KmmJyxcblx0XHR9KSxcblx0XHRQdXJnZTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdQdXJnZSBjYWNoZScsXG5cdFx0XHQnemgtaGFucyc6ICfmuIXpmaTnvJPlrZgnLFxuXHRcdFx0J3poLWhhbnQnOiAn5riF6Zmk5b+r5Y+WJyxcblx0XHR9KSxcblx0XHRQdXJnZUZyb21TZXJ2ZXI6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnUHVyZ2UgY2FjaGUgZnJvbSB0aGUgc2VydmVyJyxcblx0XHRcdCd6aC1oYW5zJzogJ+abtOaWsOacjeWKoeWZqOe8k+WtmCcsXG5cdFx0XHQnemgtaGFudCc6ICfmm7TmlrDkvLrmnI3lmajlv6vlj5YnLFxuXHRcdH0pLFxuXHRcdFB1cmdpbmc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnUHVyZ2luZyBjYWNoZS4uLicsXG5cdFx0XHQnemgtaGFucyc6ICfmraPlnKjmuIXpmaTigKbigKYnLFxuXHRcdFx0J3poLWhhbnQnOiAn5q2j5Zyo5riF6Zmk4oCm4oCmJyxcblx0XHR9KSxcblx0fTtcbn07XG5cbmNvbnN0IGkxOG5NZXNzYWdlcyA9IGdldEkxOG5NZXNzYWdlcygpO1xuXG5jb25zdCBnZXRNZXNzYWdlOiBHZXRNZXNzYWdlczx0eXBlb2YgaTE4bk1lc3NhZ2VzPiA9IChrZXkpID0+IHtcblx0cmV0dXJuIGkxOG5NZXNzYWdlc1trZXldIHx8IGtleTtcbn07XG5cbmV4cG9ydCB7Z2V0TWVzc2FnZX07XG4iLCAie1xuXHRcInZlcnNpb25cIjogXCIyLjBcIlxufVxuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7aW5pdE13QXBpfSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG5jb25zdCBhcGk6IG13LkFwaSA9IGluaXRNd0FwaShgUHVyZ2VQYWdlQ2FjaGUvJHtPUFRJT05TLnZlcnNpb259YCk7XG5cbmV4cG9ydCB7YXBpfTtcbiIsICJpbXBvcnQge2FwaX0gZnJvbSAnLi9hcGknO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL2kxOG4nO1xuaW1wb3J0IHt0b2FzdGlmeX0gZnJvbSAnZXh0LmdhZGdldC5Ub2FzdGlmeSc7XG5cbmNvbnN0IHB1cmdlID0gYXN5bmMgKHRpdGxlOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0Y29uc3QgdG9hc3RpZnlJbnN0YW5jZTogVG9hc3RpZnlJbnN0YW5jZSA9IHRvYXN0aWZ5KFxuXHRcdHtcblx0XHRcdHRleHQ6IGdldE1lc3NhZ2UoJ1B1cmdpbmcnKSxcblx0XHRcdGR1cmF0aW9uOiAtMSxcblx0XHR9LFxuXHRcdCdpbmZvJ1xuXHQpO1xuXHRjb25zdCB7d2dXaWtpSUR9ID0gbXcuY29uZmlnLmdldCgpO1xuXG5cdHRyeSB7XG5cdFx0Y29uc3QgcGFyYW1zOiBBcGlQdXJnZVBhcmFtcyA9IHtcblx0XHRcdGFjdGlvbjogJ3B1cmdlJyxcblx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdFx0dGl0bGVzOiB0aXRsZSxcblx0XHRcdGZvcmNlbGlua3VwZGF0ZTogdHJ1ZSxcblx0XHR9O1xuXG5cdFx0YXdhaXQgYXBpLnBvc3QocGFyYW1zKTtcblx0XHRtdy5zdG9yYWdlLnJlbW92ZShgTWVkaWFXaWtpTW9kdWxlU3RvcmU6JHt3Z1dpa2lJRH1gKTtcblxuXHRcdGxvY2F0aW9uLnJlbG9hZCgpO1xuXHR9IGNhdGNoIChlcnJvcjogdW5rbm93bikge1xuXHRcdGNvbnNvbGUuZXJyb3IoJ1tQdXJnZVBhZ2VDYWNoZV0gQWpheCBlcnJvcjonLCBlcnJvcik7XG5cblx0XHR0b2FzdGlmeUluc3RhbmNlLmhpZGVUb2FzdCgpO1xuXHRcdHRvYXN0aWZ5KFxuXHRcdFx0e1xuXHRcdFx0XHR0ZXh0OiBnZXRNZXNzYWdlKCdGYWlsZWQnKSxcblx0XHRcdFx0Y2xvc2U6IHRydWUsXG5cdFx0XHRcdGR1cmF0aW9uOiAtMSxcblx0XHRcdH0sXG5cdFx0XHQnZXJyb3InXG5cdFx0KTtcblx0fVxufTtcblxuZXhwb3J0IHtwdXJnZX07XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxxQkFBc0JDLFFBQUEsaUJBQUE7O0FDQXRCLElBQUFDLG9CQUF1QkQsUUFBQSxpQkFBQTtBQUV2QixJQUFNRSxrQkFBa0JBLE1BQU07QUFDN0IsU0FBTztJQUNOQyxTQUFBLEdBQVFGLGtCQUFBRyxVQUFTO01BQ2hCQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0RDLFFBQUEsR0FBT0wsa0JBQUFHLFVBQVM7TUFDZkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNERSxrQkFBQSxHQUFpQk4sa0JBQUFHLFVBQVM7TUFDekJDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDREcsVUFBQSxHQUFTUCxrQkFBQUcsVUFBUztNQUNqQkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztFQUNGO0FBQ0Q7QUFFQSxJQUFNSSxlQUFlUCxnQkFBZ0I7QUFFckMsSUFBTVEsYUFBZ0RDLFNBQVE7QUFDN0QsU0FBT0YsYUFBYUUsR0FBRyxLQUFLQTtBQUM3Qjs7QUM5QkMsSUFBQUMsVUFBVzs7QUNBWixJQUFBQyxxQkFBd0JiLFFBQUEsaUJBQUE7QUFFeEIsSUFBTWMsT0FBQSxHQUFjRCxtQkFBQUUsV0FBQSxrQkFBQUMsT0FBb0NKLE9BQU8sQ0FBRTs7QUNEakUsSUFBQUsscUJBQXVCakIsUUFBQSxxQkFBQTtBQUV2QixJQUFNa0IsUUFBQSwyQkFBQTtBQUFBLE1BQUFDLE9BQUFDLGtCQUFRLFdBQU9DLE9BQWlDO0FBQ3JELFVBQU1DLG9CQUFBLEdBQXFDTCxtQkFBQU0sVUFDMUM7TUFDQ0MsTUFBTWQsV0FBVyxTQUFTO01BQzFCZSxVQUFVO0lBQ1gsR0FDQSxNQUNEO0FBQ0EsVUFBTTtNQUFDQztJQUFRLElBQUlDLEdBQUdDLE9BQU9DLElBQUk7QUFFakMsUUFBSTtBQUNILFlBQU1DLFNBQXlCO1FBQzlCQyxRQUFRO1FBQ1JDLFFBQVE7UUFDUkMsZUFBZTtRQUNmQyxRQUFRYjtRQUNSYyxpQkFBaUI7TUFDbEI7QUFFQSxZQUFNckIsSUFBSXNCLEtBQUtOLE1BQU07QUFDckJILFNBQUdVLFFBQVFDLE9BQUEsd0JBQUF0QixPQUErQlUsUUFBUSxDQUFFO0FBRXBEYSxlQUFTQyxPQUFPO0lBQ2pCLFNBQVNDLE9BQWdCO0FBQ3hCQyxjQUFRRCxNQUFNLGdDQUFnQ0EsS0FBSztBQUVuRG5CLHVCQUFpQnFCLFVBQVU7QUFDM0IsT0FBQSxHQUFBMUIsbUJBQUFNLFVBQ0M7UUFDQ0MsTUFBTWQsV0FBVyxRQUFRO1FBQ3pCa0MsT0FBTztRQUNQbkIsVUFBVTtNQUNYLEdBQ0EsT0FDRDtJQUNEO0VBQ0QsQ0FBQTtBQUFBLFNBQUEsU0FwQ01QLE9BQUEyQixJQUFBO0FBQUEsV0FBQTFCLEtBQUEyQixNQUFBLE1BQUFDLFNBQUE7RUFBQTtBQUFBLEVBQUE7O0FKQU4sTUFBQSxHQUFLaEQsbUJBQUFpRCxTQUFRLEVBQUVDLEtBQUssU0FBU0MsZUFBZUMsT0FBc0M7QUFDakYsUUFBTTtJQUFDQztJQUFVQztJQUFZQztFQUFpQixJQUFJM0IsR0FBR0MsT0FBT0MsSUFBSTtBQUVoRSxNQUFJdUIsYUFBYSxVQUFVRSxvQkFBb0IsR0FBRztBQUNqRDtFQUNEO0FBRUEsUUFBTUMsWUFBbUNKLE1BQU1LLEtBQUssYUFBYSxFQUFFQyxTQUFTLGVBQWU7QUFDM0YsUUFBTUMsaUJBQXVDL0IsR0FBR2dDLEtBQUtDLGVBQ3BETCxXQUNBLEtBQ0E3QyxXQUFXLE9BQU8sR0FDbEIsWUFDQUEsV0FBVyxpQkFBaUIsQ0FDN0I7QUFDQSxNQUFJLENBQUNnRCxnQkFBZ0I7QUFDcEI7RUFDRDtBQUVDQSxpQkFBZUcsY0FBYyxHQUFHLEVBQXdCQyxpQkFBaUIsU0FBVUMsV0FBNEI7QUFDL0dBLFVBQU1DLGVBQWU7QUFDckIsU0FBSzlDLE1BQU1tQyxVQUFVO0VBQ3RCLENBQUM7QUFBQSxNQUFBWSxZQUFBQywyQkFFcUJmLE1BQU1LLEtBQXdCLHlCQUF5QixDQUFBLEdBQUFXO0FBQUEsTUFBQTtBQUE3RSxTQUFBRixVQUFBRyxFQUFBLEdBQUEsRUFBQUQsUUFBQUYsVUFBQUksRUFBQSxHQUFBQyxRQUFnRjtBQUFBLFlBQXJFQyxVQUFBSixNQUFBSztBQUNWLFlBQU1uRCxRQUFnQk0sR0FBR2dDLEtBQUtjLGNBQWMsU0FBU0YsUUFBUUcsSUFBSSxLQUFLckI7QUFDdEVrQixjQUFRVCxpQkFBaUIsU0FBVUMsV0FBNEI7QUFDOURBLGNBQU1DLGVBQWU7QUFDckIsYUFBSzlDLE1BQU1HLEtBQUs7TUFDakIsQ0FBQztJQUNGO0VBQUEsU0FBQXNELEtBQUE7QUFBQVYsY0FBQVcsRUFBQUQsR0FBQTtFQUFBLFVBQUE7QUFBQVYsY0FBQVksRUFBQTtFQUFBO0FBQ0QsQ0FBQzsiLAogICJuYW1lcyI6IFsiaW1wb3J0X2V4dF9nYWRnZXQ0IiwgInJlcXVpcmUiLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAiZ2V0STE4bk1lc3NhZ2VzIiwgIkZhaWxlZCIsICJsb2NhbGl6ZSIsICJlbiIsICJQdXJnZSIsICJQdXJnZUZyb21TZXJ2ZXIiLCAiUHVyZ2luZyIsICJpMThuTWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAidmVyc2lvbiIsICJpbXBvcnRfZXh0X2dhZGdldDIiLCAiYXBpIiwgImluaXRNd0FwaSIsICJjb25jYXQiLCAiaW1wb3J0X2V4dF9nYWRnZXQzIiwgInB1cmdlIiwgIl9yZWYiLCAiX2FzeW5jVG9HZW5lcmF0b3IiLCAidGl0bGUiLCAidG9hc3RpZnlJbnN0YW5jZSIsICJ0b2FzdGlmeSIsICJ0ZXh0IiwgImR1cmF0aW9uIiwgIndnV2lraUlEIiwgIm13IiwgImNvbmZpZyIsICJnZXQiLCAicGFyYW1zIiwgImFjdGlvbiIsICJmb3JtYXQiLCAiZm9ybWF0dmVyc2lvbiIsICJ0aXRsZXMiLCAiZm9yY2VsaW5rdXBkYXRlIiwgInBvc3QiLCAic3RvcmFnZSIsICJyZW1vdmUiLCAibG9jYXRpb24iLCAicmVsb2FkIiwgImVycm9yIiwgImNvbnNvbGUiLCAiaGlkZVRvYXN0IiwgImNsb3NlIiwgIl94IiwgImFwcGx5IiwgImFyZ3VtZW50cyIsICJnZXRCb2R5IiwgInRoZW4iLCAicHVyZ2VQYWdlQ2FjaGUiLCAiJGJvZHkiLCAid2dBY3Rpb24iLCAid2dQYWdlTmFtZSIsICJ3Z05hbWVzcGFjZU51bWJlciIsICJwb3J0bGV0SWQiLCAiZmluZCIsICJsZW5ndGgiLCAicG9ydGxldEVsZW1lbnQiLCAidXRpbCIsICJhZGRQb3J0bGV0TGluayIsICJxdWVyeVNlbGVjdG9yIiwgImFkZEV2ZW50TGlzdGVuZXIiLCAiZXZlbnQiLCAicHJldmVudERlZmF1bHQiLCAiX2l0ZXJhdG9yIiwgIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwgIl9zdGVwIiwgInMiLCAibiIsICJkb25lIiwgImVsZW1lbnQiLCAidmFsdWUiLCAiZ2V0UGFyYW1WYWx1ZSIsICJocmVmIiwgImVyciIsICJlIiwgImYiXQp9Cg==

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
  return function purge2(_x) {
    return _ref.apply(this, arguments);
  };
}();
//! src/PurgePageCache/PurgePageCache.ts
void (0, import_ext_gadget4.getBody)().then(function purgePageCache($body) {
  const {
    wgAction,
    wgCurRevisionId,
    wgIsArticle,
    wgPageName,
    wgRevisionId
  } = mw.config.get();
  if (wgAction === "view" && wgIsArticle && wgCurRevisionId !== 0 && wgRevisionId !== 0 && wgCurRevisionId === wgRevisionId) {
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1B1cmdlUGFnZUNhY2hlL1B1cmdlUGFnZUNhY2hlLnRzIiwgInNyYy9QdXJnZVBhZ2VDYWNoZS9tb2R1bGVzL2kxOG4udHMiLCAic3JjL1B1cmdlUGFnZUNhY2hlL29wdGlvbnMuanNvbiIsICJzcmMvUHVyZ2VQYWdlQ2FjaGUvbW9kdWxlcy9hcGkudHMiLCAic3JjL1B1cmdlUGFnZUNhY2hlL21vZHVsZXMvcHVyZ2UudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7Z2V0Qm9keX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9tb2R1bGVzL2kxOG4nO1xuaW1wb3J0IHtwdXJnZX0gZnJvbSAnLi9tb2R1bGVzL3B1cmdlJztcblxudm9pZCBnZXRCb2R5KCkudGhlbihmdW5jdGlvbiBwdXJnZVBhZ2VDYWNoZSgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkIHtcblx0Y29uc3Qge3dnQWN0aW9uLCB3Z0N1clJldmlzaW9uSWQsIHdnSXNBcnRpY2xlLCB3Z1BhZ2VOYW1lLCB3Z1JldmlzaW9uSWR9ID0gbXcuY29uZmlnLmdldCgpO1xuXG5cdGlmIChcblx0XHR3Z0FjdGlvbiA9PT0gJ3ZpZXcnICYmXG5cdFx0d2dJc0FydGljbGUgJiZcblx0XHR3Z0N1clJldmlzaW9uSWQgIT09IDAgJiZcblx0XHR3Z1JldmlzaW9uSWQgIT09IDAgJiZcblx0XHR3Z0N1clJldmlzaW9uSWQgPT09IHdnUmV2aXNpb25JZFxuXHQpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBwb3J0bGV0SWQ6ICdwLWNhY3Rpb25zJyB8ICdwLXRiJyA9ICRib2R5LmZpbmQoJyNwLWNhY3Rpb25zJykubGVuZ3RoID8gJ3AtY2FjdGlvbnMnIDogJ3AtdGInO1xuXHRjb25zdCBwb3J0bGV0RWxlbWVudDogSFRNTExJRWxlbWVudCB8IG51bGwgPSBtdy51dGlsLmFkZFBvcnRsZXRMaW5rKFxuXHRcdHBvcnRsZXRJZCxcblx0XHQnIycsXG5cdFx0Z2V0TWVzc2FnZSgnUHVyZ2UnKSxcblx0XHQnY2EtcHVyZ2UnLFxuXHRcdGdldE1lc3NhZ2UoJ1B1cmdlRnJvbVNlcnZlcicpXG5cdCk7XG5cdGlmICghcG9ydGxldEVsZW1lbnQpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHQocG9ydGxldEVsZW1lbnQucXVlcnlTZWxlY3RvcignYScpIGFzIEhUTUxBbmNob3JFbGVtZW50KS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudDogTW91c2VFdmVudCk6IHZvaWQgPT4ge1xuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0dm9pZCBwdXJnZSh3Z1BhZ2VOYW1lKTtcblx0fSk7XG5cblx0Zm9yIChjb25zdCBlbGVtZW50IG9mICRib2R5LmZpbmQ8SFRNTEFuY2hvckVsZW1lbnQ+KCdhW2hyZWYqPVwiYWN0aW9uPXB1cmdlXCJdJykpIHtcblx0XHRjb25zdCB0aXRsZTogc3RyaW5nID0gbXcudXRpbC5nZXRQYXJhbVZhbHVlKCd0aXRsZScsIGVsZW1lbnQuaHJlZikgfHwgd2dQYWdlTmFtZTtcblx0XHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCA9PiB7XG5cdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0dm9pZCBwdXJnZSh0aXRsZSk7XG5cdFx0fSk7XG5cdH1cbn0pO1xuIiwgImltcG9ydCB7bG9jYWxpemV9IGZyb20gJ2V4dC5nYWRnZXQuaTE4bic7XG5cbmNvbnN0IGdldEkxOG5NZXNzYWdlcyA9ICgpID0+IHtcblx0cmV0dXJuIHtcblx0XHRGYWlsZWQ6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnRmFpbGVkIHRvIHB1cmdlIGNhY2hlLiBQbGVhc2UgdHJ5IGFnYWluIGxhdGVyJyxcblx0XHRcdCd6aC1oYW5zJzogJ+a4hemZpOWksei0pe+8jOivt+eojeWQjumHjeivlScsXG5cdFx0XHQnemgtaGFudCc6ICfmuIXpmaTlpLHmlZfvvIzoq4vnqI3lkI7ph43oqaYnLFxuXHRcdH0pLFxuXHRcdFB1cmdlOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1B1cmdlIGNhY2hlJyxcblx0XHRcdCd6aC1oYW5zJzogJ+a4hemZpOe8k+WtmCcsXG5cdFx0XHQnemgtaGFudCc6ICfmuIXpmaTlv6vlj5YnLFxuXHRcdH0pLFxuXHRcdFB1cmdlRnJvbVNlcnZlcjogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdQdXJnZSBjYWNoZSBmcm9tIHRoZSBzZXJ2ZXInLFxuXHRcdFx0J3poLWhhbnMnOiAn5pu05paw5pyN5Yqh5Zmo57yT5a2YJyxcblx0XHRcdCd6aC1oYW50JzogJ+abtOaWsOS8uuacjeWZqOW/q+WPlicsXG5cdFx0fSksXG5cdFx0UHVyZ2luZzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdQdXJnaW5nIGNhY2hlLi4uJyxcblx0XHRcdCd6aC1oYW5zJzogJ+ato+WcqOa4hemZpOKApuKApicsXG5cdFx0XHQnemgtaGFudCc6ICfmraPlnKjmuIXpmaTigKbigKYnLFxuXHRcdH0pLFxuXHR9O1xufTtcblxuY29uc3QgaTE4bk1lc3NhZ2VzID0gZ2V0STE4bk1lc3NhZ2VzKCk7XG5cbmNvbnN0IGdldE1lc3NhZ2U6IEdldE1lc3NhZ2VzPHR5cGVvZiBpMThuTWVzc2FnZXM+ID0gKGtleSkgPT4ge1xuXHRyZXR1cm4gaTE4bk1lc3NhZ2VzW2tleV0gfHwga2V5O1xufTtcblxuZXhwb3J0IHtnZXRNZXNzYWdlfTtcbiIsICJ7XG5cdFwidmVyc2lvblwiOiBcIjIuMFwiXG59XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtpbml0TXdBcGl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmNvbnN0IGFwaTogbXcuQXBpID0gaW5pdE13QXBpKGBQdXJnZVBhZ2VDYWNoZS8ke09QVElPTlMudmVyc2lvbn1gKTtcblxuZXhwb3J0IHthcGl9O1xuIiwgImltcG9ydCB7YXBpfSBmcm9tICcuL2FwaSc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vaTE4bic7XG5pbXBvcnQge3RvYXN0aWZ5fSBmcm9tICdleHQuZ2FkZ2V0LlRvYXN0aWZ5JztcblxuY29uc3QgcHVyZ2UgPSBhc3luYyAodGl0bGU6IHN0cmluZyk6IFByb21pc2U8dm9pZD4gPT4ge1xuXHRjb25zdCB0b2FzdGlmeUluc3RhbmNlOiBUb2FzdGlmeUluc3RhbmNlID0gdG9hc3RpZnkoXG5cdFx0e1xuXHRcdFx0dGV4dDogZ2V0TWVzc2FnZSgnUHVyZ2luZycpLFxuXHRcdFx0ZHVyYXRpb246IC0xLFxuXHRcdH0sXG5cdFx0J2luZm8nXG5cdCk7XG5cblx0dHJ5IHtcblx0XHRjb25zdCBwYXJhbXM6IEFwaVB1cmdlUGFyYW1zID0ge1xuXHRcdFx0YWN0aW9uOiAncHVyZ2UnLFxuXHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0XHR0aXRsZXM6IHRpdGxlLFxuXHRcdFx0Zm9yY2VsaW5rdXBkYXRlOiB0cnVlLFxuXHRcdH07XG5cblx0XHRhd2FpdCBhcGkucG9zdChwYXJhbXMpO1xuXHRcdGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGBNZWRpYVdpa2lNb2R1bGVTdG9yZToke213LmNvbmZpZy5nZXQoJ3dnV2lraUlEJyl9YCk7XG5cblx0XHRsb2NhdGlvbi5yZWxvYWQoKTtcblx0fSBjYXRjaCAoZXJyb3I6IHVua25vd24pIHtcblx0XHRjb25zb2xlLmVycm9yKCdbUHVyZ2VQYWdlQ2FjaGVdIEFqYXggZXJyb3I6JywgZXJyb3IpO1xuXG5cdFx0dG9hc3RpZnlJbnN0YW5jZS5oaWRlVG9hc3QoKTtcblx0XHR0b2FzdGlmeShcblx0XHRcdHtcblx0XHRcdFx0dGV4dDogZ2V0TWVzc2FnZSgnRmFpbGVkJyksXG5cdFx0XHRcdGNsb3NlOiB0cnVlLFxuXHRcdFx0XHRkdXJhdGlvbjogLTEsXG5cdFx0XHR9LFxuXHRcdFx0J2Vycm9yJ1xuXHRc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QUFjLEdBQUcsRUFBd0JDLGlCQUFpQixTQUFVQyxXQUE0QjtBQUMvR0EsVUFBTUMsZUFBZTtBQUNyQixTQUFLL0MsTUFBTW9DLFVBQVU7RUFDdEIsQ0FBQztBQUFBLE1BQUFZLFlBQUFDLDJCQUVxQmpCLE1BQU1PLEtBQXdCLHlCQUF5QixDQUFBLEdBQUFXO0FBQUEsTUFBQTtBQUE3RSxTQUFBRixVQUFBRyxFQUFBLEdBQUEsRUFBQUQsUUFBQUYsVUFBQUksRUFBQSxHQUFBQyxRQUFnRjtBQUFBLFlBQXJFQyxVQUFBSixNQUFBSztBQUNWLFlBQU1wRCxRQUFnQmMsR0FBR3lCLEtBQUtjLGNBQWMsU0FBU0YsUUFBUUcsSUFBSSxLQUFLckI7QUFDdEVrQixjQUFRVCxpQkFBaUIsU0FBVUMsV0FBNEI7QUFDOURBLGNBQU1DLGVBQWU7QUFDckIsYUFBSy9DLE1BQU1HLEtBQUs7TUFDakIsQ0FBQztJQUNGO0VBQUEsU0FBQXVELEtBQUE7QUFBQVYsY0FBQVcsRUFBQUQsR0FBQTtFQUFBLFVBQUE7QUFBQVYsY0FBQVksRUFBQTtFQUFBO0FBQ0QsQ0FBQzsiLAogICJuYW1lcyI6IFsiaW1wb3J0X2V4dF9nYWRnZXQ0IiwgInJlcXVpcmUiLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAiZ2V0STE4bk1lc3NhZ2VzIiwgIkZhaWxlZCIsICJsb2NhbGl6ZSIsICJlbiIsICJQdXJnZSIsICJQdXJnZUZyb21TZXJ2ZXIiLCAiUHVyZ2luZyIsICJpMThuTWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAidmVyc2lvbiIsICJpbXBvcnRfZXh0X2dhZGdldDIiLCAiYXBpIiwgImluaXRNd0FwaSIsICJjb25jYXQiLCAiaW1wb3J0X2V4dF9nYWRnZXQzIiwgInB1cmdlIiwgIl9yZWYiLCAiX2FzeW5jVG9HZW5lcmF0b3IiLCAidGl0bGUiLCAidG9hc3RpZnlJbnN0YW5jZSIsICJ0b2FzdGlmeSIsICJ0ZXh0IiwgImR1cmF0aW9uIiwgInBhcmFtcyIsICJhY3Rpb24iLCAiZm9ybWF0IiwgImZvcm1hdHZlcnNpb24iLCAidGl0bGVzIiwgImZvcmNlbGlua3VwZGF0ZSIsICJwb3N0IiwgImxvY2FsU3RvcmFnZSIsICJyZW1vdmVJdGVtIiwgIm13IiwgImNvbmZpZyIsICJnZXQiLCAibG9jYXRpb24iLCAicmVsb2FkIiwgImVycm9yIiwgImNvbnNvbGUiLCAiaGlkZVRvYXN0IiwgImNsb3NlIiwgIl94IiwgImFwcGx5IiwgImFyZ3VtZW50cyIsICJnZXRCb2R5IiwgInRoZW4iLCAicHVyZ2VQYWdlQ2FjaGUiLCAiJGJvZHkiLCAid2dBY3Rpb24iLCAid2dDdXJSZXZpc2lvbklkIiwgIndnSXNBcnRpY2xlIiwgIndnUGFnZU5hbWUiLCAid2dSZXZpc2lvbklkIiwgInBvcnRsZXRJZCIsICJmaW5kIiwgImxlbmd0aCIsICJwb3J0bGV0RWxlbWVudCIsICJ1dGlsIiwgImFkZFBvcnRsZXRMaW5rIiwgInF1ZXJ5U2VsZWN0b3IiLCAiYWRkRXZlbnRMaXN0ZW5lciIsICJldmVudCIsICJwcmV2ZW50RGVmYXVsdCIsICJfaXRlcmF0b3IiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAiX3N0ZXAiLCAicyIsICJuIiwgImRvbmUiLCAiZWxlbWVudCIsICJ2YWx1ZSIsICJnZXRQYXJhbVZhbHVlIiwgImhyZWYiLCAiZXJyIiwgImUiLCAiZiJdCn0K

/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @source {@link https://meta.wikimedia.org/wiki/User:Xiplus/js/quick-patrol.js}
 * @base {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/QuickPatrol}
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

// dist/QuickPatrol/QuickPatrol.js
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
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    var _iterator = _createForOfIteratorHelper(__getOwnPropNames(from)), _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done; ) {
        let key = _step.value;
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, {
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
    value: mod,
    enumerable: true
  }) : target,
  mod
));
//! src/QuickPatrol/modules/PatrolPage.tsx
var import_ext_gadget3 = __toESM(require("ext.gadget.React"), 1);
//! src/QuickPatrol/options.json
var version = "2.0";
//! src/QuickPatrol/modules/api.ts
var import_ext_gadget = require("ext.gadget.Util");
var api = (0, import_ext_gadget.initMwApi)("QuickPatrol/".concat(version));
//! src/QuickPatrol/modules/i18n.ts
var import_ext_gadget2 = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    Patrol: (0, import_ext_gadget2.localize)({
      en: "Patrol",
      "zh-hans": "巡查",
      "zh-hant": "巡查"
    }),
    "Patrol all pages": (0, import_ext_gadget2.localize)({
      en: "Patrol all pages",
      "zh-hans": "巡查所有页面？",
      "zh-hant": "巡查全部頁面？"
    }),
    "Patrol all pages?": (0, import_ext_gadget2.localize)({
      en: "Patrol all pages?",
      "zh-hans": "确定巡查所有页面？",
      "zh-hant": "確定巡查全部頁面？"
    }),
    Patrolled: (0, import_ext_gadget2.localize)({
      en: "Patrolled",
      "zh-hans": "已巡查",
      "zh-hant": "已巡查"
    }),
    AJAX: (0, import_ext_gadget2.localize)({
      en: "AJAX failure",
      "zh-hans": "AJAX失败",
      "zh-hant": "AJAX失敗"
    }),
    API: (0, import_ext_gadget2.localize)({
      en: "API failure: ",
      "zh-hans": "API失败：",
      "zh-hant": "API失敗："
    })
  };
};
var i18nMessages = getI18nMessages();
var getMessage = (key) => {
  return i18nMessages[key] || key;
};
//! src/QuickPatrol/modules/PatrolPage.tsx
var PatrolSinglePage = (index, revId) => /* @__PURE__ */ import_ext_gadget3.default.createElement("a", {
  className: "gadget-quick_patrol__patrolbtn",
  id: "gadget-quick_patrol__".concat(index),
  dataset: {
    btnid: index.toString(),
    revid: revId
  },
  onClick: (event) => {
    const {
      btnid,
      revid
    } = event.currentTarget.dataset;
    const params = {
      action: "patrol",
      format: "json",
      revid: Number(revid)
    };
    void api.postWithToken("patrol", params).done(({
      error
    }) => {
      if (error) {
        void mw.notify(getMessage("API") + error["info"], {
          tag: "QuickPatrol",
          type: "error"
        });
        $("#gadget-quick_patrol__".concat(btnid)).css("color", "#f00");
      } else {
        $("#gadget-quick_patrol__".concat(btnid)).css({
          pointerEvents: "none",
          color: "#888"
        }).text(getMessage("Patrolled"));
      }
    }).fail((error) => {
      void mw.notify(getMessage("AJAX"), {
        tag: "QuickPatrol",
        type: "error"
      });
      $("#gadget-quick_patrol__".concat(btnid)).css("color", "#f00");
      console.error("[QuickPatrol] Ajax error:", error);
    });
  }
}, "[".concat(getMessage("Patrol"), "]"));
var PatrolAllPages = ($body) => /* @__PURE__ */ import_ext_gadget3.default.createElement("li", null, /* @__PURE__ */ import_ext_gadget3.default.createElement("a", {
  id: "gadget-quick_patrol__all",
  onClick: () => {
    if (!confirm(getMessage("Patrol all pages?"))) {
      return;
    }
    $body.find(".not-patrolled").each((index) => {
      const $element = $("#gadget-quick_patrol__".concat(index));
      if ($element.css("pointer-events") !== "none") {
        $element.trigger("click");
      }
    });
  }
}, "[".concat(getMessage("Patrol all pages"), "]")));
//! src/QuickPatrol/QuickPatrol.ts
var import_ext_gadget4 = require("ext.gadget.Util");
void (0, import_ext_gadget4.getBody)().then(function quickPatrol($body) {
  if (mw.config.get("wgCanonicalSpecialPageName") !== "Newpages") {
    return;
  }
  for (var _i = 0, _Object$entries = Object.entries(document.querySelectorAll(".not-patrolled")); _i < _Object$entries.length; _i++) {
    const [index, element] = _Object$entries[_i];
    const $element = $(element);
    const $time = $element.find("a");
    if (!$time.length) {
      continue;
    }
    const timeHref = $time.attr("href");
    if (!timeHref) {
      continue;
    }
    const revIds = timeHref === null || timeHref === void 0 ? void 0 : timeHref.match(/oldid=([0-9]+)/);
    if (!revIds || !revIds[1]) {
      continue;
    }
    element.append(PatrolSinglePage(index, revIds[1]));
  }
  $body.find("#mw-content-text ul").append(PatrolAllPages($body));
});

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1F1aWNrUGF0cm9sL21vZHVsZXMvUGF0cm9sUGFnZS50c3giLCAic3JjL1F1aWNrUGF0cm9sL29wdGlvbnMuanNvbiIsICJzcmMvUXVpY2tQYXRyb2wvbW9kdWxlcy9hcGkudHMiLCAic3JjL1F1aWNrUGF0cm9sL21vZHVsZXMvaTE4bi50cyIsICJzcmMvUXVpY2tQYXRyb2wvUXVpY2tQYXRyb2wudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCBSZWFjdCBmcm9tICdleHQuZ2FkZ2V0LlJlYWN0JztcbmltcG9ydCB7YXBpfSBmcm9tICcuL2FwaSc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vaTE4bic7XG5cbmNvbnN0IFBhdHJvbFNpbmdsZVBhZ2UgPSAoaW5kZXg6IG51bWJlciB8IHN0cmluZywgcmV2SWQ6IHN0cmluZykgPT4gKFxuXHQ8YVxuXHRcdGNsYXNzTmFtZT1cImdhZGdldC1xdWlja19wYXRyb2xfX3BhdHJvbGJ0blwiXG5cdFx0aWQ9e2BnYWRnZXQtcXVpY2tfcGF0cm9sX18ke2luZGV4fWB9XG5cdFx0ZGF0YXNldD17e1xuXHRcdFx0YnRuaWQ6IGluZGV4LnRvU3RyaW5nKCksXG5cdFx0XHRyZXZpZDogcmV2SWQsXG5cdFx0fX1cblx0XHRvbkNsaWNrPXsoZXZlbnQpOiB2b2lkID0+IHtcblx0XHRcdGNvbnN0IHtidG5pZCwgcmV2aWR9ID0gZXZlbnQuY3VycmVudFRhcmdldC5kYXRhc2V0O1xuXHRcdFx0Y29uc3QgcGFyYW1zOiBBcGlQYXRyb2xQYXJhbXMgPSB7XG5cdFx0XHRcdGFjdGlvbjogJ3BhdHJvbCcsXG5cdFx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0XHRyZXZpZDogTnVtYmVyKHJldmlkKSxcblx0XHRcdH07XG5cdFx0XHR2b2lkIGFwaVxuXHRcdFx0XHQucG9zdFdpdGhUb2tlbigncGF0cm9sJywgcGFyYW1zKVxuXHRcdFx0XHQuZG9uZSgoe2Vycm9yfSk6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdGlmIChlcnJvcikge1xuXHRcdFx0XHRcdFx0dm9pZCBtdy5ub3RpZnkoZ2V0TWVzc2FnZSgnQVBJJykgKyBlcnJvclsnaW5mbyddLCB7XG5cdFx0XHRcdFx0XHRcdHRhZzogJ1F1aWNrUGF0cm9sJyxcblx0XHRcdFx0XHRcdFx0dHlwZTogJ2Vycm9yJyxcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0JChgI2dhZGdldC1xdWlja19wYXRyb2xfXyR7YnRuaWR9YCkuY3NzKCdjb2xvcicsICcjZjAwJyk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdCQoYCNnYWRnZXQtcXVpY2tfcGF0cm9sX18ke2J0bmlkfWApXG5cdFx0XHRcdFx0XHRcdC5jc3Moe1xuXHRcdFx0XHRcdFx0XHRcdHBvaW50ZXJFdmVudHM6ICdub25lJyxcblx0XHRcdFx0XHRcdFx0XHRjb2xvcjogJyM4ODgnLFxuXHRcdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdFx0XHQudGV4dChnZXRNZXNzYWdlKCdQYXRyb2xsZWQnKSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KVxuXHRcdFx0XHQuZmFpbCgoZXJyb3IpOiB2b2lkID0+IHtcblx0XHRcdFx0XHR2b2lkIG13Lm5vdGlmeShnZXRNZXNzYWdlKCdBSkFYJyksIHtcblx0XHRcdFx0XHRcdHRhZzogJ1F1aWNrUGF0cm9sJyxcblx0XHRcdFx0XHRcdHR5cGU6ICdlcnJvcicsXG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0JChgI2dhZGdldC1xdWlja19wYXRyb2xfXyR7YnRuaWR9YCkuY3NzKCdjb2xvcicsICcjZjAwJyk7XG5cdFx0XHRcdFx0Y29uc29sZS5lcnJvcignW1F1aWNrUGF0cm9sXSBBamF4IGVycm9yOicsIGVycm9yKTtcblx0XHRcdFx0fSk7XG5cdFx0fX1cblx0PlxuXHRcdHtgWyR7Z2V0TWVzc2FnZSgnUGF0cm9sJyl9XWB9XG5cdDwvYT5cbik7XG5cbmNvbnN0IFBhdHJvbEFsbFBhZ2VzID0gKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50PikgPT4gKFxuXHQ8bGk+XG5cdFx0PGFcblx0XHRcdGlkPVwiZ2FkZ2V0LXF1aWNrX3BhdHJvbF9fYWxsXCJcblx0XHRcdG9uQ2xpY2s9eygpOiB2b2lkID0+IHtcblx0XHRcdFx0aWYgKCFjb25maXJtKGdldE1lc3NhZ2UoJ1BhdHJvbCBhbGwgcGFnZXM/JykpKSB7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdCRib2R5LmZpbmQoJy5ub3QtcGF0cm9sbGVkJykuZWFjaCgoaW5kZXgpOiB2b2lkID0+IHtcblx0XHRcdFx0XHRjb25zdCAkZWxlbWVudDogSlF1ZXJ5ID0gJChgI2dhZGdldC1xdWlja19wYXRyb2xfXyR7aW5kZXh9YCk7XG5cdFx0XHRcdFx0aWYgKCRlbGVtZW50LmNzcygncG9pbnRlci1ldmVudHMnKSAhPT0gJ25vbmUnKSB7XG5cdFx0XHRcdFx0XHQkZWxlbWVudC50cmlnZ2VyKCdjbGljaycpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHR9fVxuXHRcdD5cblx0XHRcdHtgWyR7Z2V0TWVzc2FnZSgnUGF0cm9sIGFsbCBwYWdlcycpfV1gfVxuXHRcdDwvYT5cblx0PC9saT5cbik7XG5cbmV4cG9ydCB7UGF0cm9sQWxsUGFnZXMsIFBhdHJvbFNpbmdsZVBhZ2V9O1xuIiwgIntcblx0XCJ2ZXJzaW9uXCI6IFwiMi4wXCJcbn1cbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge2luaXRNd0FwaX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxuY29uc3QgYXBpOiBtdy5BcGkgPSBpbml0TXdBcGkoYFF1aWNrUGF0cm9sLyR7T1BUSU9OUy52ZXJzaW9ufWApO1xuXG5leHBvcnQge2FwaX07XG4iLCAiaW1wb3J0IHtsb2NhbGl6ZX0gZnJvbSAnZXh0LmdhZGdldC5pMThuJztcblxuY29uc3QgZ2V0STE4bk1lc3NhZ2VzID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdFBhdHJvbDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdQYXRyb2wnLFxuXHRcdFx0J3poLWhhbnMnOiAn5beh5p+lJyxcblx0XHRcdCd6aC1oYW50JzogJ+W3oeafpScsXG5cdFx0fSksXG5cdFx0J1BhdHJvbCBhbGwgcGFnZXMnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1BhdHJvbCBhbGwgcGFnZXMnLFxuXHRcdFx0J3poLWhhbnMnOiAn5beh5p+l5omA5pyJ6aG16Z2i77yfJyxcblx0XHRcdCd6aC1oYW50JzogJ+W3oeafpeWFqOmDqOmggemdou+8nycsXG5cdFx0fSksXG5cdFx0J1BhdHJvbCBhbGwgcGFnZXM/JzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdQYXRyb2wgYWxsIHBhZ2VzPycsXG5cdFx0XHQnemgtaGFucyc6ICfnoa7lrprlt6Hmn6XmiYDmnInpobXpnaLvvJ8nLFxuXHRcdFx0J3poLWhhbnQnOiAn56K65a6a5beh5p+l5YWo6YOo6aCB6Z2i77yfJyxcblx0XHR9KSxcblx0XHRQYXRyb2xsZWQ6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnUGF0cm9sbGVkJyxcblx0XHRcdCd6aC1oYW5zJzogJ+W3suW3oeafpScsXG5cdFx0XHQnemgtaGFudCc6ICflt7Llt6Hmn6UnLFxuXHRcdH0pLFxuXHRcdEFKQVg6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQUpBWCBmYWlsdXJlJyxcblx0XHRcdCd6aC1oYW5zJzogJ0FKQVjlpLHotKUnLFxuXHRcdFx0J3poLWhhbnQnOiAnQUpBWOWkseaVlycsXG5cdFx0fSksXG5cdFx0QVBJOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0FQSSBmYWlsdXJlOiAnLFxuXHRcdFx0J3poLWhhbnMnOiAnQVBJ5aSx6LSl77yaJyxcblx0XHRcdCd6aC1oYW50JzogJ0FQSeWkseaVl++8micsXG5cdFx0fSksXG5cdH07XG59O1xuXG5jb25zdCBpMThuTWVzc2FnZXMgPSBnZXRJMThuTWVzc2FnZXMoKTtcblxuY29uc3QgZ2V0TWVzc2FnZTogR2V0TWVzc2FnZXM8dHlwZW9mIGkxOG5NZXNzYWdlcz4gPSAoa2V5KSA9PiB7XG5cdHJldHVybiBpMThuTWVzc2FnZXNba2V5XSB8fCBrZXk7XG59O1xuXG5leHBvcnQge2dldE1lc3NhZ2V9O1xuIiwgImltcG9ydCB7UGF0cm9sQWxsUGFnZXMsIFBhdHJvbFNpbmdsZVBhZ2V9IGZyb20gJy4vbW9kdWxlcy9QYXRyb2xQYWdlJztcbmltcG9ydCB7Z2V0Qm9keX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxudm9pZCBnZXRCb2R5KCkudGhlbihmdW5jdGlvbiBxdWlja1BhdHJvbCgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkIHtcblx0aWYgKG13LmNvbmZpZy5nZXQoJ3dnQ2Fub25pY2FsU3BlY2lhbFBhZ2VOYW1lJykgIT09ICdOZXdwYWdlcycpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHQvKiBQYXRyb2wgc2luZ2xlIHBhZ2UgKi9cblx0Zm9yIChjb25zdCBbaW5kZXgsIGVsZW1lbnRdIG9mIE9iamVjdC5lbnRyaWVzKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ub3QtcGF0cm9sbGVkJykpKSB7XG5cdFx0Y29uc3QgJGVsZW1lbnQ6IEpRdWVyeSA9ICQoZWxlbWVudCBhcyBIVE1MRWxlbWVudCk7XG5cblx0XHRjb25zdCAkdGltZTogSlF1ZXJ5ID0gJGVsZW1lbnQuZmluZCgnYScpO1xuXHRcdGlmICghJHRpbWUubGVuZ3RoKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cdFx0Y29uc3QgdGltZUhyZWY6IHN0cmluZyB8IHVuZGVmaW5lZCA9ICR0aW1lLmF0dHIoJ2hyZWYnKTtcblx0XHRpZiAoIXRpbWVIcmVmKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cdFx0Y29uc3QgcmV2SWRzOiBSZWdFeHBNYXRjaEFycmF5IHwgbnVsbCA9IHRpbWVIcmVmPy5tYXRjaCgvb2xkaWQ9KFswLTldKykvKTtcblx0XHRpZiAoIXJldklkcyB8fCAhcmV2SWRzWzFdKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRlbGVtZW50LmFwcGVuZChQYXRyb2xTaW5nbGVQYWdlKGluZGV4LCByZXZJZHNbMV0pKTtcblx0fVxuXG5cdC8qIFBhdHJvbCBhbGwgcGFnZXMgKi9cblx0JGJvZHkuZmluZCgnI213LWNvbnRlbnQtdGV4dCB1bCcpLmFwcGVuZChQYXRyb2xBbGxQYWdlcygkYm9keSkpO1xufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxxQkFBa0JDLFFBQUFDLFFBQUEsa0JBQUEsR0FBQSxDQUFBOztBQ0NqQixJQUFBQyxVQUFXOztBQ0FaLElBQUFDLG9CQUF3QkYsUUFBQSxpQkFBQTtBQUV4QixJQUFNRyxPQUFBLEdBQWNELGtCQUFBRSxXQUFBLGVBQUFDLE9BQWlDSixPQUFPLENBQUU7O0FDSDlELElBQUFLLHFCQUF1Qk4sUUFBQSxpQkFBQTtBQUV2QixJQUFNTyxrQkFBa0JBLE1BQU07QUFDN0IsU0FBTztJQUNOQyxTQUFBLEdBQVFGLG1CQUFBRyxVQUFTO01BQ2hCQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0QscUJBQUEsR0FBb0JKLG1CQUFBRyxVQUFTO01BQzVCQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0Qsc0JBQUEsR0FBcUJKLG1CQUFBRyxVQUFTO01BQzdCQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0RDLFlBQUEsR0FBV0wsbUJBQUFHLFVBQVM7TUFDbkJDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDREUsT0FBQSxHQUFNTixtQkFBQUcsVUFBUztNQUNkQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0RHLE1BQUEsR0FBS1AsbUJBQUFHLFVBQVM7TUFDYkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztFQUNGO0FBQ0Q7QUFFQSxJQUFNSSxlQUFlUCxnQkFBZ0I7QUFFckMsSUFBTVEsYUFBZ0RDLFNBQVE7QUFDN0QsU0FBT0YsYUFBYUUsR0FBRyxLQUFLQTtBQUM3Qjs7QUhyQ0EsSUFBTUMsbUJBQW1CQSxDQUFDQyxPQUF3QkMsVUFDakRyQixtQ0FBQXNCLFFBQUFDLGNBQUMsS0FBQTtFQUNBQyxXQUFVO0VBQ1ZDLElBQUEsd0JBQUFsQixPQUE0QmEsS0FBSztFQUNqQ00sU0FBUztJQUNSQyxPQUFPUCxNQUFNUSxTQUFTO0lBQ3RCQyxPQUFPUjtFQUNSO0VBQ0FTLFNBQVVDLFdBQWdCO0FBQ3pCLFVBQU07TUFBQ0o7TUFBT0U7SUFBSyxJQUFJRSxNQUFNQyxjQUFjTjtBQUMzQyxVQUFNTyxTQUEwQjtNQUMvQkMsUUFBUTtNQUNSQyxRQUFRO01BQ1JOLE9BQU9PLE9BQU9QLEtBQUs7SUFDcEI7QUFDQSxTQUFLeEIsSUFDSGdDLGNBQWMsVUFBVUosTUFBTSxFQUM5QkssS0FBSyxDQUFDO01BQUNDO0lBQUssTUFBWTtBQUN4QixVQUFJQSxPQUFPO0FBQ1YsYUFBS0MsR0FBR0MsT0FBT3hCLFdBQVcsS0FBSyxJQUFJc0IsTUFBTSxNQUFNLEdBQUc7VUFDakRHLEtBQUs7VUFDTEMsTUFBTTtRQUNQLENBQUM7QUFDREMsVUFBQSx5QkFBQXJDLE9BQTJCb0IsS0FBSyxDQUFFLEVBQUVrQixJQUFJLFNBQVMsTUFBTTtNQUN4RCxPQUFPO0FBQ05ELFVBQUEseUJBQUFyQyxPQUEyQm9CLEtBQUssQ0FBRSxFQUNoQ2tCLElBQUk7VUFDSkMsZUFBZTtVQUNmQyxPQUFPO1FBQ1IsQ0FBQyxFQUNBQyxLQUFLL0IsV0FBVyxXQUFXLENBQUM7TUFDL0I7SUFDRCxDQUFDLEVBQ0FnQyxLQUFNVixXQUFnQjtBQUN0QixXQUFLQyxHQUFHQyxPQUFPeEIsV0FBVyxNQUFNLEdBQUc7UUFDbEN5QixLQUFLO1FBQ0xDLE1BQU07TUFDUCxDQUFDO0FBQ0RDLFFBQUEseUJBQUFyQyxPQUEyQm9CLEtBQUssQ0FBRSxFQUFFa0IsSUFBSSxTQUFTLE1BQU07QUFDdkRLLGNBQVFYLE1BQU0sNkJBQTZCQSxLQUFLO0lBQ2pELENBQUM7RUFDSDtBQUFBLEdBQUEsSUFBQWhDLE9BRUtVLFdBQVcsUUFBUSxHQUFDLEdBQUEsQ0FDMUI7QUFHRCxJQUFNa0MsaUJBQWtCQyxXQUN2QnBELG1DQUFBc0IsUUFBQUMsY0FBQyxNQUFBLE1BQ0F2QixtQ0FBQXNCLFFBQUFDLGNBQUMsS0FBQTtFQUNBRSxJQUFHO0VBQ0hLLFNBQVNBLE1BQVk7QUFDcEIsUUFBSSxDQUFDdUIsUUFBUXBDLFdBQVcsbUJBQW1CLENBQUMsR0FBRztBQUM5QztJQUNEO0FBQ0FtQyxVQUFNRSxLQUFLLGdCQUFnQixFQUFFQyxLQUFNbkMsV0FBZ0I7QUFDbEQsWUFBTW9DLFdBQW1CWixFQUFBLHlCQUFBckMsT0FBMkJhLEtBQUssQ0FBRTtBQUMzRCxVQUFJb0MsU0FBU1gsSUFBSSxnQkFBZ0IsTUFBTSxRQUFRO0FBQzlDVyxpQkFBU0MsUUFBUSxPQUFPO01BQ3pCO0lBQ0QsQ0FBQztFQUNGO0FBQUEsR0FBQSxJQUFBbEQsT0FFS1UsV0FBVyxrQkFBa0IsR0FBQyxHQUFBLENBQ3BDLENBQ0Q7O0FJcEVELElBQUF5QyxxQkFBc0J4RCxRQUFBLGlCQUFBO0FBRXRCLE1BQUEsR0FBS3dELG1CQUFBQyxTQUFRLEVBQUVDLEtBQUssU0FBU0MsWUFBWVQsT0FBc0M7QUFDOUUsTUFBSVosR0FBR3NCLE9BQU9DLElBQUksNEJBQTRCLE1BQU0sWUFBWTtBQUMvRDtFQUNEO0FBR0EsV0FBQUMsS0FBQSxHQUFBQyxrQkFBK0JDLE9BQU9DLFFBQVFDLFNBQVNDLGlCQUFpQixnQkFBZ0IsQ0FBQyxHQUFBTCxLQUFBQyxnQkFBQUssUUFBQU4sTUFBRztBQUE1RixVQUFXLENBQUM1QyxPQUFPbUQsT0FBTyxJQUFBTixnQkFBQUQsRUFBQTtBQUN6QixVQUFNUixXQUFtQlosRUFBRTJCLE9BQXNCO0FBRWpELFVBQU1DLFFBQWdCaEIsU0FBU0YsS0FBSyxHQUFHO0FBQ3ZDLFFBQUksQ0FBQ2tCLE1BQU1GLFFBQVE7QUFDbEI7SUFDRDtBQUNBLFVBQU1HLFdBQStCRCxNQUFNRSxLQUFLLE1BQU07QUFDdEQsUUFBSSxDQUFDRCxVQUFVO0FBQ2Q7SUFDRDtBQUNBLFVBQU1FLFNBQWtDRixhQUFBLFFBQUFBLGFBQUEsU0FBQSxTQUFBQSxTQUFVRyxNQUFNLGdCQUFnQjtBQUN4RSxRQUFJLENBQUNELFVBQVUsQ0FBQ0EsT0FBTyxDQUFDLEdBQUc7QUFDMUI7SUFDRDtBQUVBSixZQUFRTSxPQUFPMUQsaUJBQWlCQyxPQUFPdUQsT0FBTyxDQUFDLENBQUMsQ0FBQztFQUNsRDtBQUdBdkIsUUFBTUUsS0FBSyxxQkFBcUIsRUFBRXVCLE9BQU8xQixlQUFlQyxLQUFLLENBQUM7QUFDL0QsQ0FBQzsiLAogICJuYW1lcyI6IFsiaW1wb3J0X2V4dF9nYWRnZXQzIiwgIl9fdG9FU00iLCAicmVxdWlyZSIsICJ2ZXJzaW9uIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgImFwaSIsICJpbml0TXdBcGkiLCAiY29uY2F0IiwgImltcG9ydF9leHRfZ2FkZ2V0MiIsICJnZXRJMThuTWVzc2FnZXMiLCAiUGF0cm9sIiwgImxvY2FsaXplIiwgImVuIiwgIlBhdHJvbGxlZCIsICJBSkFYIiwgIkFQSSIsICJpMThuTWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAiUGF0cm9sU2luZ2xlUGFnZSIsICJpbmRleCIsICJyZXZJZCIsICJkZWZhdWx0IiwgImNyZWF0ZUVsZW1lbnQiLCAiY2xhc3NOYW1lIiwgImlkIiwgImRhdGFzZXQiLCAiYnRuaWQiLCAidG9TdHJpbmciLCAicmV2aWQiLCAib25DbGljayIsICJldmVudCIsICJjdXJyZW50VGFyZ2V0IiwgInBhcmFtcyIsICJhY3Rpb24iLCAiZm9ybWF0IiwgIk51bWJlciIsICJwb3N0V2l0aFRva2VuIiwgImRvbmUiLCAiZXJyb3IiLCAibXciLCAibm90aWZ5IiwgInRhZyIsICJ0eXBlIiwgIiQiLCAiY3NzIiwgInBvaW50ZXJFdmVudHMiLCAiY29sb3IiLCAidGV4dCIsICJmYWlsIiwgImNvbnNvbGUiLCAiUGF0cm9sQWxsUGFnZXMiLCAiJGJvZHkiLCAiY29uZmlybSIsICJmaW5kIiwgImVhY2giLCAiJGVsZW1lbnQiLCAidHJpZ2dlciIsICJpbXBvcnRfZXh0X2dhZGdldDQiLCAiZ2V0Qm9keSIsICJ0aGVuIiwgInF1aWNrUGF0cm9sIiwgImNvbmZpZyIsICJnZXQiLCAiX2kiLCAiX09iamVjdCRlbnRyaWVzIiwgIk9iamVjdCIsICJlbnRyaWVzIiwgImRvY3VtZW50IiwgInF1ZXJ5U2VsZWN0b3JBbGwiLCAibGVuZ3RoIiwgImVsZW1lbnQiLCAiJHRpbWUiLCAidGltZUhyZWYiLCAiYXR0ciIsICJyZXZJZHMiLCAibWF0Y2giLCAiYXBwZW5kIl0KfQo=

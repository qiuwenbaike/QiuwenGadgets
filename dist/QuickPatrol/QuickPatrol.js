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
//! src/QuickPatrol/modules/patrolPages.tsx
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
//! src/QuickPatrol/modules/patrolPages.tsx
var patrolAllPages = ($body) => /* @__PURE__ */ import_ext_gadget3.default.createElement("div", null, /* @__PURE__ */ import_ext_gadget3.default.createElement("a", {
  id: "gadget-quick_patrol__all",
  onClick: () => {
    if (!confirm(getMessage("Patrol all pages?"))) {
      return;
    }
    $body.find(".not-patrolled .gadget-quick_patrol__patrolbtn").each((_index, element) => {
      if ($(element).css("pointer-events") !== "none") {
        element.click();
      }
    });
  }
}, "[".concat(getMessage("Patrol all pages"), "]")));
var patrolSinglePage = (index, revId) => /* @__PURE__ */ import_ext_gadget3.default.createElement("a", {
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
//! src/QuickPatrol/QuickPatrol.ts
var import_ext_gadget4 = require("ext.gadget.Util");
void (0, import_ext_gadget4.getBody)().then(function quickPatrol($body) {
  if (mw.config.get("wgCanonicalSpecialPageName") !== "Newpages") {
    return;
  }
  for (var _i = 0, _Object$entries = Object.entries($body.find(".not-patrolled")); _i < _Object$entries.length; _i++) {
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
    element.append(patrolSinglePage(index, revIds[1]));
  }
  $body.find("#mw-content-text .mw-pager-body").append(patrolAllPages($body));
});

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1F1aWNrUGF0cm9sL21vZHVsZXMvcGF0cm9sUGFnZXMudHN4IiwgInNyYy9RdWlja1BhdHJvbC9vcHRpb25zLmpzb24iLCAic3JjL1F1aWNrUGF0cm9sL21vZHVsZXMvYXBpLnRzIiwgInNyYy9RdWlja1BhdHJvbC9tb2R1bGVzL2kxOG4udHMiLCAic3JjL1F1aWNrUGF0cm9sL1F1aWNrUGF0cm9sLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgUmVhY3QgZnJvbSAnZXh0LmdhZGdldC5SZWFjdCc7XG5pbXBvcnQge2FwaX0gZnJvbSAnLi9hcGknO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL2kxOG4nO1xuXG5jb25zdCBwYXRyb2xBbGxQYWdlcyA9ICgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pID0+IChcblx0PGRpdj5cblx0XHQ8YVxuXHRcdFx0aWQ9XCJnYWRnZXQtcXVpY2tfcGF0cm9sX19hbGxcIlxuXHRcdFx0b25DbGljaz17KCk6IHZvaWQgPT4ge1xuXHRcdFx0XHRpZiAoIWNvbmZpcm0oZ2V0TWVzc2FnZSgnUGF0cm9sIGFsbCBwYWdlcz8nKSkpIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdFx0JGJvZHkuZmluZCgnLm5vdC1wYXRyb2xsZWQgLmdhZGdldC1xdWlja19wYXRyb2xfX3BhdHJvbGJ0bicpLmVhY2goKF9pbmRleCwgZWxlbWVudCk6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdGlmICgkKGVsZW1lbnQpLmNzcygncG9pbnRlci1ldmVudHMnKSAhPT0gJ25vbmUnKSB7XG5cdFx0XHRcdFx0XHRlbGVtZW50LmNsaWNrKCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdH19XG5cdFx0PlxuXHRcdFx0e2BbJHtnZXRNZXNzYWdlKCdQYXRyb2wgYWxsIHBhZ2VzJyl9XWB9XG5cdFx0PC9hPlxuXHQ8L2Rpdj5cbik7XG5cbmNvbnN0IHBhdHJvbFNpbmdsZVBhZ2UgPSAoaW5kZXg6IHN0cmluZywgcmV2SWQ6IHN0cmluZykgPT4gKFxuXHQ8YVxuXHRcdGNsYXNzTmFtZT1cImdhZGdldC1xdWlja19wYXRyb2xfX3BhdHJvbGJ0blwiXG5cdFx0aWQ9e2BnYWRnZXQtcXVpY2tfcGF0cm9sX18ke2luZGV4fWB9XG5cdFx0ZGF0YXNldD17e1xuXHRcdFx0YnRuaWQ6IGluZGV4LnRvU3RyaW5nKCksXG5cdFx0XHRyZXZpZDogcmV2SWQsXG5cdFx0fX1cblx0XHRvbkNsaWNrPXsoZXZlbnQpOiB2b2lkID0+IHtcblx0XHRcdGNvbnN0IHtidG5pZCwgcmV2aWR9ID0gZXZlbnQuY3VycmVudFRhcmdldC5kYXRhc2V0O1xuXHRcdFx0Y29uc3QgcGFyYW1zOiBBcGlQYXRyb2xQYXJhbXMgPSB7XG5cdFx0XHRcdGFjdGlvbjogJ3BhdHJvbCcsXG5cdFx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0XHRyZXZpZDogTnVtYmVyKHJldmlkKSxcblx0XHRcdH07XG5cdFx0XHR2b2lkIGFwaVxuXHRcdFx0XHQucG9zdFdpdGhUb2tlbigncGF0cm9sJywgcGFyYW1zKVxuXHRcdFx0XHQuZG9uZSgoe2Vycm9yfSk6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdGlmIChlcnJvcikge1xuXHRcdFx0XHRcdFx0dm9pZCBtdy5ub3RpZnkoZ2V0TWVzc2FnZSgnQVBJJykgKyBlcnJvclsnaW5mbyddLCB7XG5cdFx0XHRcdFx0XHRcdHRhZzogJ1F1aWNrUGF0cm9sJyxcblx0XHRcdFx0XHRcdFx0dHlwZTogJ2Vycm9yJyxcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0JChgI2dhZGdldC1xdWlja19wYXRyb2xfXyR7YnRuaWR9YCkuY3NzKCdjb2xvcicsICcjZjAwJyk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdCQoYCNnYWRnZXQtcXVpY2tfcGF0cm9sX18ke2J0bmlkfWApXG5cdFx0XHRcdFx0XHRcdC5jc3Moe1xuXHRcdFx0XHRcdFx0XHRcdHBvaW50ZXJFdmVudHM6ICdub25lJyxcblx0XHRcdFx0XHRcdFx0XHRjb2xvcjogJyM4ODgnLFxuXHRcdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdFx0XHQudGV4dChnZXRNZXNzYWdlKCdQYXRyb2xsZWQnKSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KVxuXHRcdFx0XHQuZmFpbCgoZXJyb3IpOiB2b2lkID0+IHtcblx0XHRcdFx0XHR2b2lkIG13Lm5vdGlmeShnZXRNZXNzYWdlKCdBSkFYJyksIHtcblx0XHRcdFx0XHRcdHRhZzogJ1F1aWNrUGF0cm9sJyxcblx0XHRcdFx0XHRcdHR5cGU6ICdlcnJvcicsXG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0JChgI2dhZGdldC1xdWlja19wYXRyb2xfXyR7YnRuaWR9YCkuY3NzKCdjb2xvcicsICcjZjAwJyk7XG5cdFx0XHRcdFx0Y29uc29sZS5lcnJvcignW1F1aWNrUGF0cm9sXSBBamF4IGVycm9yOicsIGVycm9yKTtcblx0XHRcdFx0fSk7XG5cdFx0fX1cblx0PlxuXHRcdHtgWyR7Z2V0TWVzc2FnZSgnUGF0cm9sJyl9XWB9XG5cdDwvYT5cbik7XG5cbmV4cG9ydCB7cGF0cm9sQWxsUGFnZXMsIHBhdHJvbFNpbmdsZVBhZ2V9O1xuIiwgIntcblx0XCJ2ZXJzaW9uXCI6IFwiMi4wXCJcbn1cbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge2luaXRNd0FwaX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxuY29uc3QgYXBpOiBtdy5BcGkgPSBpbml0TXdBcGkoYFF1aWNrUGF0cm9sLyR7T1BUSU9OUy52ZXJzaW9ufWApO1xuXG5leHBvcnQge2FwaX07XG4iLCAiaW1wb3J0IHtsb2NhbGl6ZX0gZnJvbSAnZXh0LmdhZGdldC5pMThuJztcblxuY29uc3QgZ2V0STE4bk1lc3NhZ2VzID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdFBhdHJvbDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdQYXRyb2wnLFxuXHRcdFx0J3poLWhhbnMnOiAn5beh5p+lJyxcblx0XHRcdCd6aC1oYW50JzogJ+W3oeafpScsXG5cdFx0fSksXG5cdFx0J1BhdHJvbCBhbGwgcGFnZXMnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1BhdHJvbCBhbGwgcGFnZXMnLFxuXHRcdFx0J3poLWhhbnMnOiAn5beh5p+l5omA5pyJ6aG16Z2i77yfJyxcblx0XHRcdCd6aC1oYW50JzogJ+W3oeafpeWFqOmDqOmggemdou+8nycsXG5cdFx0fSksXG5cdFx0J1BhdHJvbCBhbGwgcGFnZXM/JzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdQYXRyb2wgYWxsIHBhZ2VzPycsXG5cdFx0XHQnemgtaGFucyc6ICfnoa7lrprlt6Hmn6XmiYDmnInpobXpnaLvvJ8nLFxuXHRcdFx0J3poLWhhbnQnOiAn56K65a6a5beh5p+l5YWo6YOo6aCB6Z2i77yfJyxcblx0XHR9KSxcblx0XHRQYXRyb2xsZWQ6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnUGF0cm9sbGVkJyxcblx0XHRcdCd6aC1oYW5zJzogJ+W3suW3oeafpScsXG5cdFx0XHQnemgtaGFudCc6ICflt7Llt6Hmn6UnLFxuXHRcdH0pLFxuXHRcdEFKQVg6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQUpBWCBmYWlsdXJlJyxcblx0XHRcdCd6aC1oYW5zJzogJ0FKQVjlpLHotKUnLFxuXHRcdFx0J3poLWhhbnQnOiAnQUpBWOWkseaVlycsXG5cdFx0fSksXG5cdFx0QVBJOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0FQSSBmYWlsdXJlOiAnLFxuXHRcdFx0J3poLWhhbnMnOiAnQVBJ5aSx6LSl77yaJyxcblx0XHRcdCd6aC1oYW50JzogJ0FQSeWkseaVl++8micsXG5cdFx0fSksXG5cdH07XG59O1xuXG5jb25zdCBpMThuTWVzc2FnZXMgPSBnZXRJMThuTWVzc2FnZXMoKTtcblxuY29uc3QgZ2V0TWVzc2FnZTogR2V0TWVzc2FnZXM8dHlwZW9mIGkxOG5NZXNzYWdlcz4gPSAoa2V5KSA9PiB7XG5cdHJldHVybiBpMThuTWVzc2FnZXNba2V5XSB8fCBrZXk7XG59O1xuXG5leHBvcnQge2dldE1lc3NhZ2V9O1xuIiwgImltcG9ydCB7cGF0cm9sQWxsUGFnZXMsIHBhdHJvbFNpbmdsZVBhZ2V9IGZyb20gJy4vbW9kdWxlcy9wYXRyb2xQYWdlcyc7XG5pbXBvcnQge2dldEJvZHl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbnZvaWQgZ2V0Qm9keSgpLnRoZW4oZnVuY3Rpb24gcXVpY2tQYXRyb2woJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KTogdm9pZCB7XG5cdGlmIChtdy5jb25maWcuZ2V0KCd3Z0Nhbm9uaWNhbFNwZWNpYWxQYWdlTmFtZScpICE9PSAnTmV3cGFnZXMnKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0LyogUGF0cm9sIHNpbmdsZSBwYWdlICovXG5cdGZvciAoY29uc3QgW2luZGV4LCBlbGVtZW50XSBvZiBPYmplY3QuZW50cmllcygkYm9keS5maW5kKCcubm90LXBhdHJvbGxlZCcpKSkge1xuXHRcdGNvbnN0ICRlbGVtZW50OiBKUXVlcnkgPSAkKGVsZW1lbnQpO1xuXG5cdFx0Y29uc3QgJHRpbWU6IEpRdWVyeSA9ICRlbGVtZW50LmZpbmQoJ2EnKTtcblx0XHRpZiAoISR0aW1lLmxlbmd0aCkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0Y29uc3QgdGltZUhyZWY6IHN0cmluZyB8IHVuZGVmaW5lZCA9ICR0aW1lLmF0dHIoJ2hyZWYnKTtcblx0XHRpZiAoIXRpbWVIcmVmKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRjb25zdCByZXZJZHM6IFJlZ0V4cE1hdGNoQXJyYXkgfCBudWxsID0gdGltZUhyZWY/Lm1hdGNoKC9vbGRpZD0oWzAtOV0rKS8pO1xuXHRcdGlmICghcmV2SWRzIHx8ICFyZXZJZHNbMV0pIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGVsZW1lbnQuYXBwZW5kKHBhdHJvbFNpbmdsZVBhZ2UoaW5kZXgsIHJldklkc1sxXSkpO1xuXHR9XG5cblx0LyogUGF0cm9sIGFsbCBwYWdlcyAqL1xuXHQkYm9keS5maW5kKCcjbXctY29udGVudC10ZXh0IC5tdy1wYWdlci1ib2R5JykuYXBwZW5kKHBhdHJvbEFsbFBhZ2VzKCRib2R5KSk7XG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxxQkFBa0JDLFFBQUFDLFFBQUEsa0JBQUEsR0FBQSxDQUFBOztBQ0NqQixJQUFBQyxVQUFXOztBQ0FaLElBQUFDLG9CQUF3QkYsUUFBQSxpQkFBQTtBQUV4QixJQUFNRyxPQUFBLEdBQWNELGtCQUFBRSxXQUFBLGVBQUFDLE9BQWlDSixPQUFPLENBQUU7O0FDSDlELElBQUFLLHFCQUF1Qk4sUUFBQSxpQkFBQTtBQUV2QixJQUFNTyxrQkFBa0JBLE1BQU07QUFDN0IsU0FBTztJQUNOQyxTQUFBLEdBQVFGLG1CQUFBRyxVQUFTO01BQ2hCQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0QscUJBQUEsR0FBb0JKLG1CQUFBRyxVQUFTO01BQzVCQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0Qsc0JBQUEsR0FBcUJKLG1CQUFBRyxVQUFTO01BQzdCQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0RDLFlBQUEsR0FBV0wsbUJBQUFHLFVBQVM7TUFDbkJDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDREUsT0FBQSxHQUFNTixtQkFBQUcsVUFBUztNQUNkQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0RHLE1BQUEsR0FBS1AsbUJBQUFHLFVBQVM7TUFDYkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztF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RSxLQUFLLE1BQU07QUFDdEQsUUFBSSxDQUFDRCxVQUFVO0FBQ2Q7SUFDRDtBQUVBLFVBQU1FLFNBQWtDRixhQUFBLFFBQUFBLGFBQUEsU0FBQSxTQUFBQSxTQUFVRyxNQUFNLGdCQUFnQjtBQUN4RSxRQUFJLENBQUNELFVBQVUsQ0FBQ0EsT0FBTyxDQUFDLEdBQUc7QUFDMUI7SUFDRDtBQUVBN0MsWUFBUStDLE9BQU8zQyxpQkFBaUJDLE9BQU93QyxPQUFPLENBQUMsQ0FBQyxDQUFDO0VBQ2xEO0FBR0F0RCxRQUFNTSxLQUFLLGlDQUFpQyxFQUFFa0QsT0FBT3pELGVBQWVDLEtBQUssQ0FBQztBQUMzRSxDQUFDOyIsCiAgIm5hbWVzIjogWyJpbXBvcnRfZXh0X2dhZGdldDMiLCAiX190b0VTTSIsICJyZXF1aXJlIiwgInZlcnNpb24iLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAiYXBpIiwgImluaXRNd0FwaSIsICJjb25jYXQiLCAiaW1wb3J0X2V4dF9nYWRnZXQyIiwgImdldEkxOG5NZXNzYWdlcyIsICJQYXRyb2wiLCAibG9jYWxpemUiLCAiZW4iLCAiUGF0cm9sbGVkIiwgIkFKQVgiLCAiQVBJIiwgImkxOG5NZXNzYWdlcyIsICJnZXRNZXNzYWdlIiwgImtleSIsICJwYXRyb2xBbGxQYWdlcyIsICIkYm9keSIsICJkZWZhdWx0IiwgImNyZWF0ZUVsZW1lbnQiLCAiaWQiLCAib25DbGljayIsICJjb25maXJtIiwgImZpbmQiLCAiZWFjaCIsICJfaW5kZXgiLCAiZWxlbWVudCIsICIkIiwgImNzcyIsICJjbGljayIsICJwYXRyb2xTaW5nbGVQYWdlIiwgImluZGV4IiwgInJldklkIiwgImNsYXNzTmFtZSIsICJkYXRhc2V0IiwgImJ0bmlkIiwgInRvU3RyaW5nIiwgInJldmlkIiwgImV2ZW50IiwgImN1cnJlbnRUYXJnZXQiLCAicGFyYW1zIiwgImFjdGlvbiIsICJmb3JtYXQiLCAiTnVtYmVyIiwgInBvc3RXaXRoVG9rZW4iLCAiZG9uZSIsICJlcnJvciIsICJtdyIsICJub3RpZnkiLCAidGFnIiwgInR5cGUiLCAicG9pbnRlckV2ZW50cyIsICJjb2xvciIsICJ0ZXh0IiwgImZhaWwiLCAiY29uc29sZSIsICJpbXBvcnRfZXh0X2dhZGdldDQiLCAiZ2V0Qm9keSIsICJ0aGVuIiwgInF1aWNrUGF0cm9sIiwgImNvbmZpZyIsICJnZXQiLCAiX2kiLCAiX09iamVjdCRlbnRyaWVzIiwgIk9iamVjdCIsICJlbnRyaWVzIiwgImxlbmd0aCIsICIkZWxlbWVudCIsICIkdGltZSIsICJ0aW1lSHJlZiIsICJhdHRyIiwgInJldklkcyIsICJtYXRjaCIsICJhcHBlbmQiXQp9Cg==

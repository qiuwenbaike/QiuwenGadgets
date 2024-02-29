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
//! src/QuickPatrol/QuickPatrol.tsx
var import_ext_gadget3 = __toESM(require("ext.gadget.React"));
//! src/QuickPatrol/options.json
var version = "2.0";
//! src/QuickPatrol/modules/api.ts
var import_ext_gadget = require("ext.gadget.Util");
var api = (0, import_ext_gadget.initMwApi)("QuickPatrol/".concat(version));
//! src/QuickPatrol/QuickPatrol.tsx
var import_ext_gadget4 = require("ext.gadget.Util");
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
//! src/QuickPatrol/QuickPatrol.tsx
void (0, import_ext_gadget4.getBody)().then(function quickPatrol($body) {
  if (mw.config.get("wgCanonicalSpecialPageName") !== "Newpages") {
    return;
  }
  $body.find(".not-patrolled").each((index, element) => {
    const $element = $(element);
    const $time = $element.find("a");
    if (!$time.length) {
      return;
    }
    const timeHref = $time.attr("href");
    if (!timeHref) {
      return;
    }
    const revIds = timeHref === null || timeHref === void 0 ? void 0 : timeHref.match(/oldid=([0-9]+)/);
    if (!revIds || !revIds[1]) {
      return;
    }
    $element.append(/* @__PURE__ */ import_ext_gadget3.default.createElement("a", {
      className: "gadget-quick_patrol__patrolbtn",
      id: "gadget-quick_patrol__".concat(index),
      dataset: {
        btnid: index.toString(),
        revid: revIds[1]
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
    }, "[".concat(getMessage("Patrol"), "]")));
  });
  $body.find("#mw-content-text ul").append(/* @__PURE__ */ import_ext_gadget3.default.createElement("li", null, /* @__PURE__ */ import_ext_gadget3.default.createElement("a", {
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
  }, "[".concat(getMessage("Patrol all pages"), "]"))));
});

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1F1aWNrUGF0cm9sL1F1aWNrUGF0cm9sLnRzeCIsICJzcmMvUXVpY2tQYXRyb2wvb3B0aW9ucy5qc29uIiwgInNyYy9RdWlja1BhdHJvbC9tb2R1bGVzL2FwaS50cyIsICJzcmMvUXVpY2tQYXRyb2wvbW9kdWxlcy9pMThuLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgUmVhY3QgZnJvbSAnZXh0LmdhZGdldC5SZWFjdCc7XG5pbXBvcnQge2FwaX0gZnJvbSAnLi9tb2R1bGVzL2FwaSc7XG5pbXBvcnQge2dldEJvZHl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vbW9kdWxlcy9pMThuJztcblxudm9pZCBnZXRCb2R5KCkudGhlbihmdW5jdGlvbiBxdWlja1BhdHJvbCgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkIHtcblx0aWYgKG13LmNvbmZpZy5nZXQoJ3dnQ2Fub25pY2FsU3BlY2lhbFBhZ2VOYW1lJykgIT09ICdOZXdwYWdlcycpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHQvKiBQYXRyb2wgc2luZ2xlIHBhZ2UgKi9cblx0JGJvZHkuZmluZCgnLm5vdC1wYXRyb2xsZWQnKS5lYWNoKChpbmRleCwgZWxlbWVudCk6IHZvaWQgPT4ge1xuXHRcdGNvbnN0ICRlbGVtZW50OiBKUXVlcnkgPSAkKGVsZW1lbnQpO1xuXG5cdFx0Y29uc3QgJHRpbWU6IEpRdWVyeSA9ICRlbGVtZW50LmZpbmQoJ2EnKTtcblx0XHRpZiAoISR0aW1lLmxlbmd0aCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRjb25zdCB0aW1lSHJlZjogc3RyaW5nIHwgdW5kZWZpbmVkID0gJHRpbWUuYXR0cignaHJlZicpO1xuXHRcdGlmICghdGltZUhyZWYpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0Y29uc3QgcmV2SWRzOiBSZWdFeHBNYXRjaEFycmF5IHwgbnVsbCA9IHRpbWVIcmVmPy5tYXRjaCgvb2xkaWQ9KFswLTldKykvKTtcblx0XHRpZiAoIXJldklkcyB8fCAhcmV2SWRzWzFdKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0JGVsZW1lbnQuYXBwZW5kKFxuXHRcdFx0PGFcblx0XHRcdFx0Y2xhc3NOYW1lPVwiZ2FkZ2V0LXF1aWNrX3BhdHJvbF9fcGF0cm9sYnRuXCJcblx0XHRcdFx0aWQ9e2BnYWRnZXQtcXVpY2tfcGF0cm9sX18ke2luZGV4fWB9XG5cdFx0XHRcdGRhdGFzZXQ9e3tcblx0XHRcdFx0XHRidG5pZDogaW5kZXgudG9TdHJpbmcoKSxcblx0XHRcdFx0XHRyZXZpZDogcmV2SWRzWzFdLFxuXHRcdFx0XHR9fVxuXHRcdFx0XHRvbkNsaWNrPXsoZXZlbnQpOiB2b2lkID0+IHtcblx0XHRcdFx0XHRjb25zdCB7YnRuaWQsIHJldmlkfSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQuZGF0YXNldDtcblx0XHRcdFx0XHRjb25zdCBwYXJhbXM6IEFwaVBhdHJvbFBhcmFtcyA9IHtcblx0XHRcdFx0XHRcdGFjdGlvbjogJ3BhdHJvbCcsXG5cdFx0XHRcdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdFx0XHRcdHJldmlkOiBOdW1iZXIocmV2aWQpLFxuXHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0dm9pZCBhcGlcblx0XHRcdFx0XHRcdC5wb3N0V2l0aFRva2VuKCdwYXRyb2wnLCBwYXJhbXMpXG5cdFx0XHRcdFx0XHQuZG9uZSgoe2Vycm9yfSk6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdFx0XHRpZiAoZXJyb3IpIHtcblx0XHRcdFx0XHRcdFx0XHR2b2lkIG13Lm5vdGlmeShnZXRNZXNzYWdlKCdBUEknKSArIGVycm9yWydpbmZvJ10sIHtcblx0XHRcdFx0XHRcdFx0XHRcdHRhZzogJ1F1aWNrUGF0cm9sJyxcblx0XHRcdFx0XHRcdFx0XHRcdHR5cGU6ICdlcnJvcicsXG5cdFx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdFx0JChgI2dhZGdldC1xdWlja19wYXRyb2xfXyR7YnRuaWR9YCkuY3NzKCdjb2xvcicsICcjZjAwJyk7XG5cdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0JChgI2dhZGdldC1xdWlja19wYXRyb2xfXyR7YnRuaWR9YClcblx0XHRcdFx0XHRcdFx0XHRcdC5jc3Moe1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRwb2ludGVyRXZlbnRzOiAnbm9uZScsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbG9yOiAnIzg4OCcsXG5cdFx0XHRcdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdFx0XHRcdFx0LnRleHQoZ2V0TWVzc2FnZSgnUGF0cm9sbGVkJykpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdFx0LmZhaWwoKGVycm9yKTogdm9pZCA9PiB7XG5cdFx0XHRcdFx0XHRcdHZvaWQgbXcubm90aWZ5KGdldE1lc3NhZ2UoJ0FKQVgnKSwge1xuXHRcdFx0XHRcdFx0XHRcdHRhZzogJ1F1aWNrUGF0cm9sJyxcblx0XHRcdFx0XHRcdFx0XHR0eXBlOiAnZXJyb3InLFxuXHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdFx0JChgI2dhZGdldC1xdWlja19wYXRyb2xfXyR7YnRuaWR9YCkuY3NzKCdjb2xvcicsICcjZjAwJyk7XG5cdFx0XHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoJ1tRdWlja1BhdHJvbF0gQWpheCBlcnJvcjonLCBlcnJvcik7XG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fX1cblx0XHRcdD5cblx0XHRcdFx0e2BbJHtnZXRNZXNzYWdlKCdQYXRyb2wnKX1dYH1cblx0XHRcdDwvYT5cblx0XHQpO1xuXHR9KTtcblxuXHQvKiBQYXRyb2wgYWxsIHBhZ2VzICovXG5cdCRib2R5LmZpbmQoJyNtdy1jb250ZW50LXRleHQgdWwnKS5hcHBlbmQoXG5cdFx0PGxpPlxuXHRcdFx0PGFcblx0XHRcdFx0aWQ9XCJnYWRnZXQtcXVpY2tfcGF0cm9sX19hbGxcIlxuXHRcdFx0XHRvbkNsaWNrPXsoKTogdm9pZCA9PiB7XG5cdFx0XHRcdFx0aWYgKCFjb25maXJtKGdldE1lc3NhZ2UoJ1BhdHJvbCBhbGwgcGFnZXM/JykpKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdCRib2R5LmZpbmQoJy5ub3QtcGF0cm9sbGVkJykuZWFjaCgoaW5kZXgpOiB2b2lkID0+IHtcblx0XHRcdFx0XHRcdGNvbnN0ICRlbGVtZW50OiBKUXVlcnkgPSAkKGAjZ2FkZ2V0LXF1aWNrX3BhdHJvbF9fJHtpbmRleH1gKTtcblx0XHRcdFx0XHRcdGlmICgkZWxlbWVudC5jc3MoJ3BvaW50ZXItZXZlbnRzJykgIT09ICdub25lJykge1xuXHRcdFx0XHRcdFx0XHQkZWxlbWVudC50cmlnZ2VyKCdjbGljaycpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9fVxuXHRcdFx0PlxuXHRcdFx0XHR7YFske2dldE1lc3NhZ2UoJ1BhdHJvbCBhbGwgcGFnZXMnKX1dYH1cblx0XHRcdDwvYT5cblx0XHQ8L2xpPlxuXHQpO1xufSk7XG4iLCAie1xuXHRcInZlcnNpb25cIjogXCIyLjBcIlxufVxuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7aW5pdE13QXBpfSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG5jb25zdCBhcGk6IG13LkFwaSA9IGluaXRNd0FwaShgUXVpY2tQYXRyb2wvJHtPUFRJT05TLnZlcnNpb259YCk7XG5cbmV4cG9ydCB7YXBpfTtcbiIsICJpbXBvcnQge2xvY2FsaXplfSBmcm9tICdleHQuZ2FkZ2V0LmkxOG4nO1xuXG5jb25zdCBnZXRJMThuTWVzc2FnZXMgPSAoKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0UGF0cm9sOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1BhdHJvbCcsXG5cdFx0XHQnemgtaGFucyc6ICflt6Hmn6UnLFxuXHRcdFx0J3poLWhhbnQnOiAn5beh5p+lJyxcblx0XHR9KSxcblx0XHQnUGF0cm9sIGFsbCBwYWdlcyc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnUGF0cm9sIGFsbCBwYWdlcycsXG5cdFx0XHQnemgtaGFucyc6ICflt6Hmn6XmiYDmnInpobXpnaLvvJ8nLFxuXHRcdFx0J3poLWhhbnQnOiAn5beh5p+l5YWo6YOo6aCB6Z2i77yfJyxcblx0XHR9KSxcblx0XHQnUGF0cm9sIGFsbCBwYWdlcz8nOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1BhdHJvbCBhbGwgcGFnZXM/Jyxcblx0XHRcdCd6aC1oYW5zJzogJ+ehruWumuW3oeafpeaJgOaciemhtemdou+8nycsXG5cdFx0XHQnemgtaGFudCc6ICfnorrlrprlt6Hmn6Xlhajpg6jpoIHpnaLvvJ8nLFxuXHRcdH0pLFxuXHRcdFBhdHJvbGxlZDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdQYXRyb2xsZWQnLFxuXHRcdFx0J3poLWhhbnMnOiAn5bey5beh5p+lJyxcblx0XHRcdCd6aC1oYW50JzogJ+W3suW3oeafpScsXG5cdFx0fSksXG5cdFx0QUpBWDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdBSkFYIGZhaWx1cmUnLFxuXHRcdFx0J3poLWhhbnMnOiAnQUpBWOWksei0pScsXG5cdFx0XHQnemgtaGFudCc6ICdBSkFY5aSx5pWXJyxcblx0XHR9KSxcblx0XHRBUEk6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQVBJIGZhaWx1cmU6ICcsXG5cdFx0XHQnemgtaGFucyc6ICdBUEnlpLHotKXvvJonLFxuXHRcdFx0J3poLWhhbnQnOiAnQVBJ5aSx5pWX77yaJyxcblx0XHR9KSxcblx0fTtcbn07XG5cbmNvbnN0IGkxOG5NZXNzYWdlcyA9IGdldEkxOG5NZXNzYWdlcygpO1xuXG5jb25zdCBnZXRNZXNzYWdlOiBHZXRNZXNzYWdlczx0eXBlb2YgaTE4bk1lc3NhZ2VzPiA9IChrZXkpID0+IHtcblx0cmV0dXJuIGkxOG5NZXNzYWdlc1trZXldIHx8IGtleTtcbn07XG5cbmV4cG9ydCB7Z2V0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LEdBQUMsR0FBQSxDQUNwQyxDQUNELENBQ0Q7QUFDRCxDQUFDOyIsCiAgIm5hbWVzIjogWyJpbXBvcnRfZXh0X2dhZGdldDMiLCAiX190b0VTTSIsICJyZXF1aXJlIiwgInZlcnNpb24iLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAiYXBpIiwgImluaXRNd0FwaSIsICJjb25jYXQiLCAiaW1wb3J0X2V4dF9nYWRnZXQ0IiwgImltcG9ydF9leHRfZ2FkZ2V0MiIsICJnZXRJMThuTWVzc2FnZXMiLCAiUGF0cm9sIiwgImxvY2FsaXplIiwgImVuIiwgIlBhdHJvbGxlZCIsICJBSkFYIiwgIkFQSSIsICJpMThuTWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAiZ2V0Qm9keSIsICJ0aGVuIiwgInF1aWNrUGF0cm9sIiwgIiRib2R5IiwgIm13IiwgImNvbmZpZyIsICJnZXQiLCAiZmluZCIsICJlYWNoIiwgImluZGV4IiwgImVsZW1lbnQiLCAiJGVsZW1lbnQiLCAiJCIsICIkdGltZSIsICJsZW5ndGgiLCAidGltZUhyZWYiLCAiYXR0ciIsICJyZXZJZHMiLCAibWF0Y2giLCAiYXBwZW5kIiwgImRlZmF1bHQiLCAiY3JlYXRlRWxlbWVudCIsICJjbGFzc05hbWUiLCAiaWQiLCAiZGF0YXNldCIsICJidG5pZCIsICJ0b1N0cmluZyIsICJyZXZpZCIsICJvbkNsaWNrIiwgImV2ZW50IiwgImN1cnJlbnRUYXJnZXQiLCAicGFyYW1zIiwgImFjdGlvbiIsICJmb3JtYXQiLCAiTnVtYmVyIiwgInBvc3RXaXRoVG9rZW4iLCAiZG9uZSIsICJlcnJvciIsICJub3RpZnkiLCAidGFnIiwgInR5cGUiLCAiY3NzIiwgInBvaW50ZXJFdmVudHMiLCAiY29sb3IiLCAidGV4dCIsICJmYWlsIiwgImNvbnNvbGUiLCAiY29uZmlybSIsICJ0cmlnZ2VyIl0KfQo=

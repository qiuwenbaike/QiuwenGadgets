/**
 * SPDX-License-Identifier: GPL-3.0-or-later
 * _addText: '{{Gadget Header|license=GPL-3.0-or-later}}'
 *
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/EditConflict}
 * @author 安忆 <i@anyi.in>
 * @license GPL-3.0-or-later {@link https://www.qiuwenbaike.cn/wiki/H:GPL-3.0}
 */

/**
 * Copyright (C)  安忆
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
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

// dist/EditConflict/EditConflict.js
function asyncGeneratorStep(n, t, e, r, o, a, c) {
  try {
    var i = n[a](c), u = i.value;
  } catch (n2) {
    return void e(n2);
  }
  i.done ? t(u) : Promise.resolve(u).then(r, o);
}
function _asyncToGenerator(n) {
  return function() {
    var t = this, e = arguments;
    return new Promise(function(r, o) {
      var a = n.apply(t, e);
      function _next(n2) {
        asyncGeneratorStep(a, r, o, _next, _throw, "next", n2);
      }
      function _throw(n2) {
        asyncGeneratorStep(a, r, o, _next, _throw, "throw", n2);
      }
      _next(void 0);
    });
  };
}
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
//! src/EditConflict/modules/core.ts
var import_ext_gadget4 = require("ext.gadget.Util");
//! src/EditConflict/modules/noticeMessage.tsx
var import_ext_gadget2 = __toESM(require("ext.gadget.JSX"), 1);
//! src/EditConflict/modules/i18n.ts
var import_ext_gadget = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    Notice: (0, import_ext_gadget.localize)({
      en: "This page has been changed by someone else after you started editing. Copy your changes, refresh and start over to avoid edit conflicts.",
      ja: "このページは他の人によって変更されています。編集衝突を避けるため、編集内容をコピーしてページを再読み込みし、編集を続けてください。",
      "zh-hans": "此页面已被他人更改。请复制您的编辑，然后刷新页面，重新开始编辑，以避免编辑冲突。",
      "zh-hant": "本頁已被他人更改。請將您的編輯複製，並重新載入頁面，然後繼續編輯，來避免編輯衝突。"
    }),
    Refresh: (0, import_ext_gadget.localize)({
      en: "Refresh",
      ja: "再読み込み",
      "zh-hans": "刷新页面",
      "zh-hant": "重新載入"
    })
  };
};
var i18nMessages = getI18nMessages();
var getMessage = (key) => {
  return i18nMessages[key] || key;
};
//! src/EditConflict/modules/noticeMessage.tsx
var locationReload = () => {
  location.reload();
  return false;
};
var NoticeMessage = () => /* @__PURE__ */ import_ext_gadget2.default.createElement("span", null, getMessage("Notice"), /* @__PURE__ */ import_ext_gadget2.default.createElement("a", {
  onClick: locationReload
}, getMessage("Refresh")));
//! src/EditConflict/options.json
var version = "2.0";
//! src/EditConflict/modules/api.ts
var import_ext_gadget3 = require("ext.gadget.Util");
var api = (0, import_ext_gadget3.initMwApi)("EditConflict/".concat(version));
//! src/EditConflict/modules/util/queryPageInfo.ts
var params = {
  action: "query",
  format: "json",
  formatversion: "2",
  prop: "revisions",
  rvprop: "ids"
};
var queryPageInfo = /* @__PURE__ */ function() {
  var _ref = _asyncToGenerator(function* (title) {
    try {
      return yield api.get({
        ...params,
        titles: title
      });
    } catch (error) {
      console.error("[EditConflict] Ajax error:", error);
      return {};
    }
  });
  return function queryPageInfo2(_x) {
    return _ref.apply(this, arguments);
  };
}();
//! src/EditConflict/modules/getCurrentRevisionId.ts
var getCurrentRevisionId = /* @__PURE__ */ function() {
  var _ref2 = _asyncToGenerator(function* (title) {
    const pageInfo = yield queryPageInfo(title);
    const {
      query
    } = pageInfo;
    if (!query) {
      return 0;
    }
    const [page] = query.pages;
    if (!page || page.missing) {
      return 0;
    }
    return page.revisions[0].revid;
  });
  return function getCurrentRevisionId2(_x2) {
    return _ref2.apply(this, arguments);
  };
}();
//! src/EditConflict/modules/core.ts
var import_ext_gadget5 = require("ext.gadget.Toastify");
var editConflict = /* @__PURE__ */ function() {
  var _ref3 = _asyncToGenerator(function* () {
    let isContinue = true;
    void (0, import_ext_gadget4.getBody)().then(($body) => {
      $body.find('input[name="wpSave"]').on("click", () => {
        isContinue = false;
      });
    });
    const checkEditConflict = /* @__PURE__ */ function() {
      var _ref4 = _asyncToGenerator(function* () {
        const {
          wgCurRevisionId: wgCurRevisionId2,
          wgPageName
        } = mw.config.get();
        const pageRevisionId = yield getCurrentRevisionId(wgPageName);
        if (!pageRevisionId) {
          isContinue = false;
        } else if (pageRevisionId > wgCurRevisionId2) {
          isContinue = false;
          (0, import_ext_gadget5.toastify)({
            node: NoticeMessage(),
            close: true,
            duration: -1
          }, "info");
        }
      });
      return function checkEditConflict2() {
        return _ref4.apply(this, arguments);
      };
    }();
    while (true) {
      if (!isContinue) {
        break;
      }
      yield checkEditConflict();
      if (!isContinue) {
        break;
      }
      yield (0, import_ext_gadget4.delay)(3 * 1e3);
    }
  });
  return function editConflict2() {
    return _ref3.apply(this, arguments);
  };
}();
//! src/EditConflict/EditConflict.ts
var {
  wgAction,
  wgCurRevisionId
} = mw.config.get();
if (["edit", "submit"].includes(wgAction) && wgCurRevisionId) {
  void editConflict();
}

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0VkaXRDb25mbGljdC9tb2R1bGVzL2NvcmUudHMiLCAic3JjL0VkaXRDb25mbGljdC9tb2R1bGVzL25vdGljZU1lc3NhZ2UudHN4IiwgInNyYy9FZGl0Q29uZmxpY3QvbW9kdWxlcy9pMThuLnRzIiwgInNyYy9FZGl0Q29uZmxpY3Qvb3B0aW9ucy5qc29uIiwgInNyYy9FZGl0Q29uZmxpY3QvbW9kdWxlcy9hcGkudHMiLCAic3JjL0VkaXRDb25mbGljdC9tb2R1bGVzL3V0aWwvcXVlcnlQYWdlSW5mby50cyIsICJzcmMvRWRpdENvbmZsaWN0L21vZHVsZXMvZ2V0Q3VycmVudFJldmlzaW9uSWQudHMiLCAic3JjL0VkaXRDb25mbGljdC9FZGl0Q29uZmxpY3QudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7ZGVsYXksIGdldEJvZHl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5pbXBvcnQge05vdGljZU1lc3NhZ2V9IGZyb20gJy4vbm90aWNlTWVzc2FnZSc7XG5pbXBvcnQge2dldEN1cnJlbnRSZXZpc2lvbklkfSBmcm9tICcuL2dldEN1cnJlbnRSZXZpc2lvbklkJztcbmltcG9ydCB7dG9hc3RpZnl9IGZyb20gJ2V4dC5nYWRnZXQuVG9hc3RpZnknO1xuXG5jb25zdCBlZGl0Q29uZmxpY3QgPSBhc3luYyAoKTogUHJvbWlzZTx2b2lkPiA9PiB7XG5cdGxldCBpc0NvbnRpbnVlOiBib29sZWFuID0gdHJ1ZTtcblxuXHR2b2lkIGdldEJvZHkoKS50aGVuKCgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkID0+IHtcblx0XHQkYm9keS5maW5kKCdpbnB1dFtuYW1lPVwid3BTYXZlXCJdJykub24oJ2NsaWNrJywgKCk6IHZvaWQgPT4ge1xuXHRcdFx0aXNDb250aW51ZSA9IGZhbHNlO1xuXHRcdH0pO1xuXHR9KTtcblxuXHRjb25zdCBjaGVja0VkaXRDb25mbGljdCA9IGFzeW5jICgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0XHRjb25zdCB7d2dDdXJSZXZpc2lvbklkLCB3Z1BhZ2VOYW1lfSA9IG13LmNvbmZpZy5nZXQoKTtcblx0XHRjb25zdCBwYWdlUmV2aXNpb25JZDogbnVtYmVyID0gYXdhaXQgZ2V0Q3VycmVudFJldmlzaW9uSWQod2dQYWdlTmFtZSk7XG5cdFx0aWYgKCFwYWdlUmV2aXNpb25JZCkge1xuXHRcdFx0aXNDb250aW51ZSA9IGZhbHNlO1xuXHRcdH0gZWxzZSBpZiAocGFnZVJldmlzaW9uSWQgPiB3Z0N1clJldmlzaW9uSWQpIHtcblx0XHRcdGlzQ29udGludWUgPSBmYWxzZTtcblx0XHRcdHRvYXN0aWZ5KFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0bm9kZTogTm90aWNlTWVzc2FnZSgpLFxuXHRcdFx0XHRcdGNsb3NlOiB0cnVlLFxuXHRcdFx0XHRcdGR1cmF0aW9uOiAtMSxcblx0XHRcdFx0fSxcblx0XHRcdFx0J2luZm8nXG5cdFx0XHQpO1xuXHRcdH1cblx0fTtcblxuXHR3aGlsZSAodHJ1ZSkge1xuXHRcdC8vIElmICFpc0NvbnRpbnVlIHRyaWdnZXJlZCAoYnkgb25DbGljaykgdGhlbiBicmVha1xuXHRcdGlmICghaXNDb250aW51ZSkge1xuXHRcdFx0YnJlYWs7XG5cdFx0fVxuXG5cdFx0YXdhaXQgY2hlY2tFZGl0Q29uZmxpY3QoKTtcblxuXHRcdC8vIElmICFpc0NvbnRpbnVlIHRyaWdnZXJlZCAoYnkgY2hlY2tFZGl0Q29uZmxpY3QpIHRoZW4gYnJlYWtcblx0XHRpZiAoIWlzQ29udGludWUpIHtcblx0XHRcdGJyZWFrO1xuXHRcdH1cblxuXHRcdGF3YWl0IGRlbGF5KDMgKiAxMDAwKTtcblx0fVxufTtcblxuZXhwb3J0IHtlZGl0Q29uZmxpY3R9O1xuIiwgImltcG9ydCBSZWFjdCBmcm9tICdleHQuZ2FkZ2V0LkpTWCc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vaTE4bic7XG5cbmNvbnN0IGxvY2F0aW9uUmVsb2FkID0gKCkgPT4ge1xuXHRsb2NhdGlvbi5yZWxvYWQoKTtcblx0cmV0dXJuIGZhbHNlO1xufTtcblxuY29uc3QgTm90aWNlTWVzc2FnZSA9ICgpID0+IChcblx0PHNwYW4+XG5cdFx0e2dldE1lc3NhZ2UoJ05vdGljZScpfVxuXHRcdDxhIG9uQ2xpY2s9e2xvY2F0aW9uUmVsb2FkfT57Z2V0TWVzc2FnZSgnUmVmcmVzaCcpfTwvYT5cblx0PC9zcGFuPlxuKTtcblxuZXhwb3J0IHtOb3RpY2VNZXNzYWdlfTtcbiIsICJpbXBvcnQge2xvY2FsaXplfSBmcm9tICdleHQuZ2FkZ2V0LmkxOG4nO1xuXG5jb25zdCBnZXRJMThuTWVzc2FnZXMgPSAoKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0Tm90aWNlOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1RoaXMgcGFnZSBoYXMgYmVlbiBjaGFuZ2VkIGJ5IHNvbWVvbmUgZWxzZSBhZnRlciB5b3Ugc3RhcnRlZCBlZGl0aW5nLiBDb3B5IHlvdXIgY2hhbmdlcywgcmVmcmVzaCBhbmQgc3RhcnQgb3ZlciB0byBhdm9pZCBlZGl0IGNvbmZsaWN0cy4nLFxuXHRcdFx0amE6ICfjgZPjga7jg5rjg7zjgrjjga/ku5bjga7kurrjgavjgojjgaPjgablpInmm7TjgZXjgozjgabjgYTjgb7jgZnjgILnt6jpm4booZ3nqoHjgpLpgb/jgZHjgovjgZ/jgoHjgIHnt6jpm4blhoXlrrnjgpLjgrPjg5Tjg7zjgZfjgabjg5rjg7zjgrjjgpLlho3oqq3jgb/ovrzjgb/jgZfjgIHnt6jpm4bjgpLntprjgZHjgabjgY/jgaDjgZXjgYTjgIInLFxuXHRcdFx0J3poLWhhbnMnOiAn5q2k6aG16Z2i5bey6KKr5LuW5Lq65pu05pS544CC6K+35aSN5Yi25oKo55qE57yW6L6R77yM54S25ZCO5Yi35paw6aG16Z2i77yM6YeN5paw5byA5aeL57yW6L6R77yM5Lul6YG/5YWN57yW6L6R5Yay56qB44CCJyxcblx0XHRcdCd6aC1oYW50JzogJ+acrOmggeW3suiiq+S7luS6uuabtOaUueOAguiri+Wwh+aCqOeahOe3qOi8r+ikh+ijve+8jOS4pumHjeaWsOi8ieWFpemggemdou+8jOeEtuW+jOe5vOe6jOe3qOi8r++8jOS+humBv+WFjee3qOi8r+ihneeqgeOAgicsXG5cdFx0fSksXG5cdFx0UmVmcmVzaDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdSZWZyZXNoJyxcblx0XHRcdGphOiAn5YaN6Kqt44G/6L6844G/Jyxcblx0XHRcdCd6aC1oYW5zJzogJ+WIt+aWsOmhtemdoicsXG5cdFx0XHQnemgtaGFudCc6ICfph43mlrDovInlhaUnLFxuXHRcdH0pLFxuXHR9O1xufTtcblxuY29uc3QgaTE4bk1lc3NhZ2VzID0gZ2V0STE4bk1lc3NhZ2VzKCk7XG5cbmNvbnN0IGdldE1lc3NhZ2U6IEdldE1lc3NhZ2VzPHR5cGVvZiBpMThuTWVzc2FnZXM+ID0gKGtleSkgPT4ge1xuXHRyZXR1cm4gaTE4bk1lc3NhZ2VzW2tleV0gfHwga2V5O1xufTtcblxuZXhwb3J0IHtnZXRNZXNzYWdlfTtcbiIsICJ7XG5cdFwidmVyc2lvblwiOiBcIjIuMFwiXG59XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtpbml0TXdBcGl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmNvbnN0IGFwaTogbXcuQXBpID0gaW5pdE13QXBpKGBFZGl0Q29uZmxpY3QvJHtPUFRJT05TLnZlcnNpb259YCk7XG5cbmV4cG9ydCB7YXBpfTtcbiIsICJpbXBvcnQge2FwaX0gZnJvbSAnLi4vYXBpJztcblxuaW50ZXJmYWNlIFBhZ2VJbmZvIHtcblx0cXVlcnk/OiB7XG5cdFx0cGFnZXM6IEFycmF5PHtcblx0XHRcdG1pc3Npbmc/OiBib29sZWFuO1xuXHRcdFx0cmV2aXNpb25zOiBBcnJheTx7XG5cdFx0XHRcdHJldmlkOiBudW1iZXI7XG5cdFx0XHR9Pjtcblx0XHR9Pjtcblx0fTtcbn1cblxuY29uc3QgcGFyYW1zOiBBcGlRdWVyeVJldmlzaW9uc1BhcmFtcyA9IHtcblx0YWN0aW9uOiAncXVlcnknLFxuXHRmb3JtYXQ6ICdqc29uJyxcblx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRwcm9wOiAncmV2aXNpb25zJyxcblx0cnZwcm9wOiAnaWRzJyxcbn07XG5cbmNvbnN0IHF1ZXJ5UGFnZUluZm8gPSBhc3luYyAodGl0bGU6IHN0cmluZyk6IFByb21pc2U8UGFnZUluZm8+ID0+IHtcblx0dHJ5IHtcblx0XHRyZXR1cm4gYXdhaXQgYXBpLmdldCh7XG5cdFx0XHQuLi5wYXJhbXMsXG5cdFx0XHR0aXRsZXM6IHRpdGxlLFxuXHRcdH0gYXMgdHlwZW9mIHBhcmFtcyk7XG5cdH0gY2F0Y2ggKGVycm9yOiB1bmtub3duKSB7XG5cdFx0Y29uc29sZS5lcnJvcignW0VkaXRDb25mbGljdF0gQWpheCBlcnJvcjonLCBlcnJvcik7XG5cdFx0cmV0dXJuIHt9O1xuXHR9XG59O1xuXG5leHBvcnQge3F1ZXJ5UGFnZUluZm99O1xuIiwgImltcG9ydCB7cXVlcnlQYWdlSW5mb30gZnJvbSAnLi91dGlsL3F1ZXJ5UGFnZUluZm8nO1xuXG5jb25zdCBnZXRDdXJyZW50UmV2aXNpb25JZCA9IGFzeW5jICh0aXRsZTogc3RyaW5nKTogUHJvbWlzZTxudW1iZXI+ID0+IHtcblx0Y29uc3QgcGFnZUluZm86IEF3YWl0ZWQ8UmV0dXJuVHlwZTx0eXBlb2YgcXVlcnlQYWdlSW5mbz4+ID0gYXdhaXQgcXVlcnlQYWdlSW5mbyh0aXRsZSk7XG5cblx0Y29uc3Qge3F1ZXJ5fSA9IHBhZ2VJbmZvO1xuXHRpZiAoIXF1ZXJ5KSB7XG5cdFx0cmV0dXJuIDA7XG5cdH1cblxuXHRjb25zdCBbcGFnZV0gPSBxdWVyeS5wYWdlcztcblx0aWYgKCFwYWdlIHx8IHBhZ2UubWlzc2luZykge1xuXHRcdHJldHVybiAwO1xuXHR9XG5cblx0cmV0dXJuIHBhZ2UucmV2aXNpb25zWzBdIS5yZXZpZDtcbn07XG5cbmV4cG9ydCB7Z2V0Q3VycmVudFJldmlzaW9uSWR9O1xuIiwgImltcG9ydCB7ZWRpdENvbmZsaWN0fSBmcm9tICcuL21vZHVsZXMvY29yZSc7XG5cbmNvbnN0IHt3Z0FjdGlvbiwgd2dDdXJSZXZpc2lvbklkfSA9IG13LmNvbmZpZy5nZXQoKTtcblxuaWYgKFsnZWRpdCcsICdzdWJtaXQnXS5pbmNsdWRlcyh3Z0FjdGlvbikgJiYgd2dDdXJSZXZpc2lvbklkKSB7XG5cdHZvaWQgZWRpdENvbmZsaWN0KCk7XG59XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLHFCQUE2QkMsUUFBQSxpQkFBQTs7QUNBN0IsSUFBQUMscUJBQWtCQyxRQUFBRixRQUFBLGdCQUFBLEdBQUEsQ0FBQTs7QUNBbEIsSUFBQUcsb0JBQXVCSCxRQUFBLGlCQUFBO0FBRXZCLElBQU1JLGtCQUFrQkEsTUFBTTtBQUM3QixTQUFPO0lBQ05DLFNBQUEsR0FBUUYsa0JBQUFHLFVBQVM7TUFDaEJDLElBQUk7TUFDSkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNEQyxVQUFBLEdBQVNOLGtCQUFBRyxVQUFTO01BQ2pCQyxJQUFJO01BQ0pDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7RUFDRjtBQUNEO0FBRUEsSUFBTUUsZUFBZU4sZ0JBQWdCO0FBRXJDLElBQU1PLGFBQWdEQyxTQUFRO0FBQzdELFNBQU9GLGFBQWFFLEdBQUcsS0FBS0E7QUFDN0I7O0FEcEJBLElBQU1DLGlCQUFpQkEsTUFBTTtBQUM1QkMsV0FBU0MsT0FBTztBQUNoQixTQUFPO0FBQ1I7QUFFQSxJQUFNQyxnQkFBZ0JBLE1BQ3JCZixtQ0FBQWdCLFFBQUFDLGNBQUMsUUFBQSxNQUNDUCxXQUFXLFFBQVEsR0FDcEJWLG1DQUFBZ0IsUUFBQUMsY0FBQyxLQUFBO0VBQUVDLFNBQVNOO0FBQUEsR0FBaUJGLFdB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QVEsRUFBRXdDLFNBQVNELFFBQVEsS0FBS1gsaUJBQWlCO0FBQzdELE9BQUtWLGFBQWE7QUFDbkI7IiwKICAibmFtZXMiOiBbImltcG9ydF9leHRfZ2FkZ2V0NCIsICJyZXF1aXJlIiwgImltcG9ydF9leHRfZ2FkZ2V0MiIsICJfX3RvRVNNIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgImdldEkxOG5NZXNzYWdlcyIsICJOb3RpY2UiLCAibG9jYWxpemUiLCAiZW4iLCAiamEiLCAiUmVmcmVzaCIsICJpMThuTWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAibG9jYXRpb25SZWxvYWQiLCAibG9jYXRpb24iLCAicmVsb2FkIiwgIk5vdGljZU1lc3NhZ2UiLCAiZGVmYXVsdCIsICJjcmVhdGVFbGVtZW50IiwgIm9uQ2xpY2siLCAidmVyc2lvbiIsICJpbXBvcnRfZXh0X2dhZGdldDMiLCAiYXBpIiwgImluaXRNd0FwaSIsICJjb25jYXQiLCAicGFyYW1zIiwgImFjdGlvbiIsICJmb3JtYXQiLCAiZm9ybWF0dmVyc2lvbiIsICJwcm9wIiwgInJ2cHJvcCIsICJxdWVyeVBhZ2VJbmZvIiwgIl9yZWYiLCAiX2FzeW5jVG9HZW5lcmF0b3IiLCAidGl0bGUiLCAiZ2V0IiwgInRpdGxlcyIsICJlcnJvciIsICJjb25zb2xlIiwgIl94IiwgImFwcGx5IiwgImFyZ3VtZW50cyIsICJnZXRDdXJyZW50UmV2aXNpb25JZCIsICJfcmVmMiIsICJwYWdlSW5mbyIsICJxdWVyeSIsICJwYWdlIiwgInBhZ2VzIiwgIm1pc3NpbmciLCAicmV2aXNpb25zIiwgInJldmlkIiwgIl94MiIsICJpbXBvcnRfZXh0X2dhZGdldDUiLCAiZWRpdENvbmZsaWN0IiwgIl9yZWYzIiwgImlzQ29udGludWUiLCAiZ2V0Qm9keSIsICJ0aGVuIiwgIiRib2R5IiwgImZpbmQiLCAib24iLCAiY2hlY2tFZGl0Q29uZmxpY3QiLCAiX3JlZjQiLCAid2dDdXJSZXZpc2lvbklkIiwgIndnQ3VyUmV2aXNpb25JZDIiLCAid2dQYWdlTmFtZSIsICJtdyIsICJjb25maWciLCAicGFnZVJldmlzaW9uSWQiLCAidG9hc3RpZnkiLCAibm9kZSIsICJjbG9zZSIsICJkdXJhdGlvbiIsICJkZWxheSIsICJ3Z0FjdGlvbiIsICJpbmNsdWRlcyJdCn0K

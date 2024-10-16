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
var import_ext_gadget2 = __toESM(require("ext.gadget.React"), 1);
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0VkaXRDb25mbGljdC9tb2R1bGVzL2NvcmUudHMiLCAic3JjL0VkaXRDb25mbGljdC9tb2R1bGVzL25vdGljZU1lc3NhZ2UudHN4IiwgInNyYy9FZGl0Q29uZmxpY3QvbW9kdWxlcy9pMThuLnRzIiwgInNyYy9FZGl0Q29uZmxpY3Qvb3B0aW9ucy5qc29uIiwgInNyYy9FZGl0Q29uZmxpY3QvbW9kdWxlcy9hcGkudHMiLCAic3JjL0VkaXRDb25mbGljdC9tb2R1bGVzL3V0aWwvcXVlcnlQYWdlSW5mby50cyIsICJzcmMvRWRpdENvbmZsaWN0L21vZHVsZXMvZ2V0Q3VycmVudFJldmlzaW9uSWQudHMiLCAic3JjL0VkaXRDb25mbGljdC9FZGl0Q29uZmxpY3QudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7ZGVsYXksIGdldEJvZHl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5pbXBvcnQge05vdGljZU1lc3NhZ2V9IGZyb20gJy4vbm90aWNlTWVzc2FnZSc7XG5pbXBvcnQge2dldEN1cnJlbnRSZXZpc2lvbklkfSBmcm9tICcuL2dldEN1cnJlbnRSZXZpc2lvbklkJztcbmltcG9ydCB7dG9hc3RpZnl9IGZyb20gJ2V4dC5nYWRnZXQuVG9hc3RpZnknO1xuXG5jb25zdCBlZGl0Q29uZmxpY3QgPSBhc3luYyAoKTogUHJvbWlzZTx2b2lkPiA9PiB7XG5cdGxldCBpc0NvbnRpbnVlOiBib29sZWFuID0gdHJ1ZTtcblxuXHR2b2lkIGdldEJvZHkoKS50aGVuKCgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkID0+IHtcblx0XHQkYm9keS5maW5kKCdpbnB1dFtuYW1lPVwid3BTYXZlXCJdJykub24oJ2NsaWNrJywgKCk6IHZvaWQgPT4ge1xuXHRcdFx0aXNDb250aW51ZSA9IGZhbHNlO1xuXHRcdH0pO1xuXHR9KTtcblxuXHRjb25zdCBjaGVja0VkaXRDb25mbGljdCA9IGFzeW5jICgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0XHRjb25zdCB7d2dDdXJSZXZpc2lvbklkLCB3Z1BhZ2VOYW1lfSA9IG13LmNvbmZpZy5nZXQoKTtcblx0XHRjb25zdCBwYWdlUmV2aXNpb25JZDogbnVtYmVyID0gYXdhaXQgZ2V0Q3VycmVudFJldmlzaW9uSWQod2dQYWdlTmFtZSk7XG5cdFx0aWYgKCFwYWdlUmV2aXNpb25JZCkge1xuXHRcdFx0aXNDb250aW51ZSA9IGZhbHNlO1xuXHRcdH0gZWxzZSBpZiAocGFnZVJldmlzaW9uSWQgPiB3Z0N1clJldmlzaW9uSWQpIHtcblx0XHRcdGlzQ29udGludWUgPSBmYWxzZTtcblx0XHRcdHRvYXN0aWZ5KFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0bm9kZTogTm90aWNlTWVzc2FnZSgpLFxuXHRcdFx0XHRcdGNsb3NlOiB0cnVlLFxuXHRcdFx0XHRcdGR1cmF0aW9uOiAtMSxcblx0XHRcdFx0fSxcblx0XHRcdFx0J2luZm8nXG5cdFx0XHQpO1xuXHRcdH1cblx0fTtcblxuXHR3aGlsZSAodHJ1ZSkge1xuXHRcdC8vIElmICFpc0NvbnRpbnVlIHRyaWdnZXJlZCAoYnkgb25DbGljaykgdGhlbiBicmVha1xuXHRcdGlmICghaXNDb250aW51ZSkge1xuXHRcdFx0YnJlYWs7XG5cdFx0fVxuXG5cdFx0YXdhaXQgY2hlY2tFZGl0Q29uZmxpY3QoKTtcblxuXHRcdC8vIElmICFpc0NvbnRpbnVlIHRyaWdnZXJlZCAoYnkgY2hlY2tFZGl0Q29uZmxpY3QpIHRoZW4gYnJlYWtcblx0XHRpZiAoIWlzQ29udGludWUpIHtcblx0XHRcdGJyZWFrO1xuXHRcdH1cblxuXHRcdGF3YWl0IGRlbGF5KDMgKiAxMDAwKTtcblx0fVxufTtcblxuZXhwb3J0IHtlZGl0Q29uZmxpY3R9O1xuIiwgImltcG9ydCBSZWFjdCBmcm9tICdleHQuZ2FkZ2V0LlJlYWN0JztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9pMThuJztcblxuY29uc3QgbG9jYXRpb25SZWxvYWQgPSAoKSA9PiB7XG5cdGxvY2F0aW9uLnJlbG9hZCgpO1xuXHRyZXR1cm4gZmFsc2U7XG59O1xuXG5jb25zdCBOb3RpY2VNZXNzYWdlID0gKCkgPT4gKFxuXHQ8c3Bhbj5cblx0XHR7Z2V0TWVzc2FnZSgnTm90aWNlJyl9XG5cdFx0PGEgb25DbGljaz17bG9jYXRpb25SZWxvYWR9PntnZXRNZXNzYWdlKCdSZWZyZXNoJyl9PC9hPlxuXHQ8L3NwYW4+XG4pO1xuXG5leHBvcnQge05vdGljZU1lc3NhZ2V9O1xuIiwgImltcG9ydCB7bG9jYWxpemV9IGZyb20gJ2V4dC5nYWRnZXQuaTE4bic7XG5cbmNvbnN0IGdldEkxOG5NZXNzYWdlcyA9ICgpID0+IHtcblx0cmV0dXJuIHtcblx0XHROb3RpY2U6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnVGhpcyBwYWdlIGhhcyBiZWVuIGNoYW5nZWQgYnkgc29tZW9uZSBlbHNlIGFmdGVyIHlvdSBzdGFydGVkIGVkaXRpbmcuIENvcHkgeW91ciBjaGFuZ2VzLCByZWZyZXNoIGFuZCBzdGFydCBvdmVyIHRvIGF2b2lkIGVkaXQgY29uZmxpY3RzLicsXG5cdFx0XHRqYTogJ+OBk+OBruODmuODvOOCuOOBr+S7luOBruS6uuOBq+OCiOOBo+OBpuWkieabtOOBleOCjOOBpuOBhOOBvuOBmeOAgue3qOmbhuihneeqgeOCkumBv+OBkeOCi+OBn+OCgeOAgee3qOmbhuWGheWuueOCkuOCs+ODlOODvOOBl+OBpuODmuODvOOCuOOCkuWGjeiqreOBv+i+vOOBv+OBl+OAgee3qOmbhuOCkue2muOBkeOBpuOBj+OBoOOBleOBhOOAgicsXG5cdFx0XHQnemgtaGFucyc6ICfmraTpobXpnaLlt7Looqvku5bkurrmm7TmlLnjgILor7flpI3liLbmgqjnmoTnvJbovpHvvIznhLblkI7liLfmlrDpobXpnaLvvIzph43mlrDlvIDlp4vnvJbovpHvvIzku6Xpgb/lhY3nvJbovpHlhrLnqoHjgIInLFxuXHRcdFx0J3poLWhhbnQnOiAn5pys6aCB5bey6KKr5LuW5Lq65pu05pS544CC6KuL5bCH5oKo55qE57eo6Lyv6KSH6KO977yM5Lim6YeN5paw6LyJ5YWl6aCB6Z2i77yM54S25b6M57m857qM57eo6Lyv77yM5L6G6YG/5YWN57eo6Lyv6KGd56qB44CCJyxcblx0XHR9KSxcblx0XHRSZWZyZXNoOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1JlZnJlc2gnLFxuXHRcdFx0amE6ICflho3oqq3jgb/ovrzjgb8nLFxuXHRcdFx0J3poLWhhbnMnOiAn5Yi35paw6aG16Z2iJyxcblx0XHRcdCd6aC1oYW50JzogJ+mHjeaWsOi8ieWFpScsXG5cdFx0fSksXG5cdH07XG59O1xuXG5jb25zdCBpMThuTWVzc2FnZXMgPSBnZXRJMThuTWVzc2FnZXMoKTtcblxuY29uc3QgZ2V0TWVzc2FnZTogR2V0TWVzc2FnZXM8dHlwZW9mIGkxOG5NZXNzYWdlcz4gPSAoa2V5KSA9PiB7XG5cdHJldHVybiBpMThuTWVzc2FnZXNba2V5XSB8fCBrZXk7XG59O1xuXG5leHBvcnQge2dldE1lc3NhZ2V9O1xuIiwgIntcblx0XCJ2ZXJzaW9uXCI6IFwiMi4wXCJcbn1cbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge2luaXRNd0FwaX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxuY29uc3QgYXBpOiBtdy5BcGkgPSBpbml0TXdBcGkoYEVkaXRDb25mbGljdC8ke09QVElPTlMudmVyc2lvbn1gKTtcblxuZXhwb3J0IHthcGl9O1xuIiwgImltcG9ydCB7YXBpfSBmcm9tICcuLi9hcGknO1xuXG5pbnRlcmZhY2UgUGFnZUluZm8ge1xuXHRxdWVyeT86IHtcblx0XHRwYWdlczogQXJyYXk8e1xuXHRcdFx0bWlzc2luZz86IGJvb2xlYW47XG5cdFx0XHRyZXZpc2lvbnM6IEFycmF5PHtcblx0XHRcdFx0cmV2aWQ6IG51bWJlcjtcblx0XHRcdH0+O1xuXHRcdH0+O1xuXHR9O1xufVxuXG5jb25zdCBwYXJhbXM6IEFwaVF1ZXJ5UmV2aXNpb25zUGFyYW1zID0ge1xuXHRhY3Rpb246ICdxdWVyeScsXG5cdGZvcm1hdDogJ2pzb24nLFxuXHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdHByb3A6ICdyZXZpc2lvbnMnLFxuXHRydnByb3A6ICdpZHMnLFxufTtcblxuY29uc3QgcXVlcnlQYWdlSW5mbyA9IGFzeW5jICh0aXRsZTogc3RyaW5nKTogUHJvbWlzZTxQYWdlSW5mbz4gPT4ge1xuXHR0cnkge1xuXHRcdHJldHVybiAoYXdhaXQgYXBpLmdldCh7XG5cdFx0XHQuLi5wYXJhbXMsXG5cdFx0XHR0aXRsZXM6IHRpdGxlLFxuXHRcdH0gYXMgdHlwZW9mIHBhcmFtcykpIGFzIFBhZ2VJbmZvO1xuXHR9IGNhdGNoIChlcnJvcjogdW5rbm93bikge1xuXHRcdGNvbnNvbGUuZXJyb3IoJ1tFZGl0Q29uZmxpY3RdIEFqYXggZXJyb3I6JywgZXJyb3IpO1xuXHRcdHJldHVybiB7fTtcblx0fVxufTtcblxuZXhwb3J0IHtxdWVyeVBhZ2VJbmZvfTtcbiIsICJpbXBvcnQge3F1ZXJ5UGFnZUluZm99IGZyb20gJy4vdXRpbC9xdWVyeVBhZ2VJbmZvJztcblxuY29uc3QgZ2V0Q3VycmVudFJldmlzaW9uSWQgPSBhc3luYyAodGl0bGU6IHN0cmluZyk6IFByb21pc2U8bnVtYmVyPiA9PiB7XG5cdGNvbnN0IHBhZ2VJbmZvOiBBd2FpdGVkPFJldHVyblR5cGU8dHlwZW9mIHF1ZXJ5UGFnZUluZm8+PiA9IGF3YWl0IHF1ZXJ5UGFnZUluZm8odGl0bGUpO1xuXG5cdGNvbnN0IHtxdWVyeX0gPSBwYWdlSW5mbztcblx0aWYgKCFxdWVyeSkge1xuXHRcdHJldHVybiAwO1xuXHR9XG5cblx0Y29uc3QgW3BhZ2VdID0gcXVlcnkucGFnZXM7XG5cdGlmICghcGFnZSB8fCBwYWdlLm1pc3NpbmcpIHtcblx0XHRyZXR1cm4gMDtcblx0fVxuXG5cdHJldHVybiBwYWdlLnJldmlzaW9uc1swXSEucmV2aWQ7XG59O1xuXG5leHBvcnQge2dldEN1cnJlbnRSZXZpc2lvbklkfTtcbiIsICJpbXBvcnQge2VkaXRDb25mbGljdH0gZnJvbSAnLi9tb2R1bGVzL2NvcmUnO1xuXG5jb25zdCB7d2dBY3Rpb24sIHdnQ3VyUmV2aXNpb25JZH0gPSBtdy5jb25maWcuZ2V0KCk7XG5cbmlmIChbJ2VkaXQnLCAnc3VibWl0J10uaW5jbHVkZXMod2dBY3Rpb24pICYmIHdnQ3VyUmV2aXNpb25JZCkge1xuXHR2b2lkIGVkaXRDb25mbGljdCgpO1xufVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxxQkFBNkJDLFFBQUEsaUJBQUE7O0FDQTdCLElBQUFDLHFCQUFrQkMsUUFBQUYsUUFBQSxrQkFBQSxHQUFBLENBQUE7O0FDQWxCLElBQUFHLG9CQUF1QkgsUUFBQSxpQkFBQTtBQUV2QixJQUFNSSxrQkFBa0JBLE1BQU07QUFDN0IsU0FBTztJQUNOQyxTQUFBLEdBQVFGLGtCQUFBRyxVQUFTO01BQ2hCQyxJQUFJO01BQ0pDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDREMsVUFBQSxHQUFTTixrQkFBQUcsVUFBUztNQUNqQkMsSUFBSTtNQUNKQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0VBQ0Y7QUFDRDtBQUVBLElBQU1FLGVBQWVOLGdCQUFnQjtBQUVyQyxJQUFNTyxhQUFnREMsU0FBUTtBQUM3RCxTQUFPRixhQUFhRSxHQUFHLEtBQUtBO0FBQzdCOztBRHBCQSxJQUFNQyxpQkFBaUJBLE1BQU07QUFDNUJDLFdBQVNDLE9BQU87QUFDaEIsU0FBTztBQUNSO0FBRUEsSUFBTUMsZ0JBQWdCQSxNQUNyQmYsbUNBQUFnQixRQUFBQyxjQUFDLFFBQUEsTUFDQ1AsV0FBVyxRQUFRLEdBQ3BCVixtQ0FBQWdCLFFBQUFDLGNBQUMsS0FBQTtFQUFFQyxTQUFT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QUFJLENBQUMsUUFBUSxRQUFRLEVBQUV3QyxTQUFTRCxRQUFRLEtBQUtYLGlCQUFpQjtBQUM3RCxPQUFLVixhQUFhO0FBQ25COyIsCiAgIm5hbWVzIjogWyJpbXBvcnRfZXh0X2dhZGdldDQiLCAicmVxdWlyZSIsICJpbXBvcnRfZXh0X2dhZGdldDIiLCAiX190b0VTTSIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJnZXRJMThuTWVzc2FnZXMiLCAiTm90aWNlIiwgImxvY2FsaXplIiwgImVuIiwgImphIiwgIlJlZnJlc2giLCAiaTE4bk1lc3NhZ2VzIiwgImdldE1lc3NhZ2UiLCAia2V5IiwgImxvY2F0aW9uUmVsb2FkIiwgImxvY2F0aW9uIiwgInJlbG9hZCIsICJOb3RpY2VNZXNzYWdlIiwgImRlZmF1bHQiLCAiY3JlYXRlRWxlbWVudCIsICJvbkNsaWNrIiwgInZlcnNpb24iLCAiaW1wb3J0X2V4dF9nYWRnZXQzIiwgImFwaSIsICJpbml0TXdBcGkiLCAiY29uY2F0IiwgInBhcmFtcyIsICJhY3Rpb24iLCAiZm9ybWF0IiwgImZvcm1hdHZlcnNpb24iLCAicHJvcCIsICJydnByb3AiLCAicXVlcnlQYWdlSW5mbyIsICJfcmVmIiwgIl9hc3luY1RvR2VuZXJhdG9yIiwgInRpdGxlIiwgImdldCIsICJ0aXRsZXMiLCAiZXJyb3IiLCAiY29uc29sZSIsICJfeCIsICJhcHBseSIsICJhcmd1bWVudHMiLCAiZ2V0Q3VycmVudFJldmlzaW9uSWQiLCAiX3JlZjIiLCAicGFnZUluZm8iLCAicXVlcnkiLCAicGFnZSIsICJwYWdlcyIsICJtaXNzaW5nIiwgInJldmlzaW9ucyIsICJyZXZpZCIsICJfeDIiLCAiaW1wb3J0X2V4dF9nYWRnZXQ1IiwgImVkaXRDb25mbGljdCIsICJfcmVmMyIsICJpc0NvbnRpbnVlIiwgImdldEJvZHkiLCAidGhlbiIsICIkYm9keSIsICJmaW5kIiwgIm9uIiwgImNoZWNrRWRpdENvbmZsaWN0IiwgIl9yZWY0IiwgIndnQ3VyUmV2aXNpb25JZCIsICJ3Z0N1clJldmlzaW9uSWQyIiwgIndnUGFnZU5hbWUiLCAibXciLCAiY29uZmlnIiwgInBhZ2VSZXZpc2lvbklkIiwgInRvYXN0aWZ5IiwgIm5vZGUiLCAiY2xvc2UiLCAiZHVyYXRpb24iLCAiZGVsYXkiLCAid2dBY3Rpb24iLCAiaW5jbHVkZXMiXQp9Cg==

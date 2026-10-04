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
//! src/EditConflict/modules/core.ts
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
var import_ext_gadget3 = require("ext.gadget.Util");
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
//! src/EditConflict/modules/noticeMessage.ts
var locationReload = () => {
  location.reload();
  return false;
};
var $noticeMessage = $("<span>").append(getMessage("Notice"), $("<a>").on("click", locationReload).text(getMessage("Refresh")));
//! src/EditConflict/options.json
var version = "2.0";
//! src/EditConflict/modules/api.ts
var import_ext_gadget2 = require("ext.gadget.Util");
var api = (0, import_ext_gadget2.initMwApi)("EditConflict/".concat(version));
//! src/EditConflict/modules/util/queryPageInfo.ts
var params = {
  action: "query",
  format: "json",
  formatversion: "2",
  prop: "revisions",
  rvprop: "ids"
};
var queryPageInfo = /* @__PURE__ */ (function() {
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
})();
//! src/EditConflict/modules/getCurrentRevisionId.ts
var getCurrentRevisionId = /* @__PURE__ */ (function() {
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
})();
//! src/EditConflict/modules/core.ts
var import_ext_gadget4 = require("ext.gadget.Toastify");
var editConflict = /* @__PURE__ */ (function() {
  var _ref3 = _asyncToGenerator(function* () {
    let isContinue = true;
    void (0, import_ext_gadget3.getBody)().then(($body) => {
      $body.find('input[name="wpSave"]').on("click", () => {
        isContinue = false;
      });
    });
    const checkEditConflict = /* @__PURE__ */ (function() {
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
          (0, import_ext_gadget4.toastify)({
            node: $noticeMessage.get(0),
            close: true,
            duration: -1
          }, "info");
        }
      });
      return function checkEditConflict2() {
        return _ref4.apply(this, arguments);
      };
    })();
    while (true) {
      if (!isContinue) {
        break;
      }
      yield checkEditConflict();
      if (!isContinue) {
        break;
      }
      yield (0, import_ext_gadget3.delay)(3 * 1e3);
    }
  });
  return function editConflict2() {
    return _ref3.apply(this, arguments);
  };
})();
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0VkaXRDb25mbGljdC9tb2R1bGVzL2NvcmUudHMiLCAic3JjL0VkaXRDb25mbGljdC9tb2R1bGVzL2kxOG4udHMiLCAic3JjL0VkaXRDb25mbGljdC9tb2R1bGVzL25vdGljZU1lc3NhZ2UudHMiLCAic3JjL0VkaXRDb25mbGljdC9vcHRpb25zLmpzb24iLCAic3JjL0VkaXRDb25mbGljdC9tb2R1bGVzL2FwaS50cyIsICJzcmMvRWRpdENvbmZsaWN0L21vZHVsZXMvdXRpbC9xdWVyeVBhZ2VJbmZvLnRzIiwgInNyYy9FZGl0Q29uZmxpY3QvbW9kdWxlcy9nZXRDdXJyZW50UmV2aXNpb25JZC50cyIsICJzcmMvRWRpdENvbmZsaWN0L0VkaXRDb25mbGljdC50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHtkZWxheSwgZ2V0Qm9keX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbmltcG9ydCB7JG5vdGljZU1lc3NhZ2V9IGZyb20gJy4vbm90aWNlTWVzc2FnZSc7XG5pbXBvcnQge2dldEN1cnJlbnRSZXZpc2lvbklkfSBmcm9tICcuL2dldEN1cnJlbnRSZXZpc2lvbklkJztcbmltcG9ydCB7dG9hc3RpZnl9IGZyb20gJ2V4dC5nYWRnZXQuVG9hc3RpZnknO1xuXG5jb25zdCBlZGl0Q29uZmxpY3QgPSBhc3luYyAoKTogUHJvbWlzZTx2b2lkPiA9PiB7XG5cdGxldCBpc0NvbnRpbnVlOiBib29sZWFuID0gdHJ1ZTtcblxuXHR2b2lkIGdldEJvZHkoKS50aGVuKCgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkID0+IHtcblx0XHQkYm9keS5maW5kKCdpbnB1dFtuYW1lPVwid3BTYXZlXCJdJykub24oJ2NsaWNrJywgKCk6IHZvaWQgPT4ge1xuXHRcdFx0aXNDb250aW51ZSA9IGZhbHNlO1xuXHRcdH0pO1xuXHR9KTtcblxuXHRjb25zdCBjaGVja0VkaXRDb25mbGljdCA9IGFzeW5jICgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0XHRjb25zdCB7d2dDdXJSZXZpc2lvbklkLCB3Z1BhZ2VOYW1lfSA9IG13LmNvbmZpZy5nZXQoKTtcblx0XHRjb25zdCBwYWdlUmV2aXNpb25JZDogbnVtYmVyID0gYXdhaXQgZ2V0Q3VycmVudFJldmlzaW9uSWQod2dQYWdlTmFtZSk7XG5cdFx0aWYgKCFwYWdlUmV2aXNpb25JZCkge1xuXHRcdFx0aXNDb250aW51ZSA9IGZhbHNlO1xuXHRcdH0gZWxzZSBpZiAocGFnZVJldmlzaW9uSWQgPiB3Z0N1clJldmlzaW9uSWQpIHtcblx0XHRcdGlzQ29udGludWUgPSBmYWxzZTtcblx0XHRcdHRvYXN0aWZ5KFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0bm9kZTogJG5vdGljZU1lc3NhZ2UuZ2V0KDApLFxuXHRcdFx0XHRcdGNsb3NlOiB0cnVlLFxuXHRcdFx0XHRcdGR1cmF0aW9uOiAtMSxcblx0XHRcdFx0fSxcblx0XHRcdFx0J2luZm8nXG5cdFx0XHQpO1xuXHRcdH1cblx0fTtcblxuXHR3aGlsZSAodHJ1ZSkge1xuXHRcdC8vIElmICFpc0NvbnRpbnVlIHRyaWdnZXJlZCAoYnkgb25DbGljaykgdGhlbiBicmVha1xuXHRcdGlmICghaXNDb250aW51ZSkge1xuXHRcdFx0YnJlYWs7XG5cdFx0fVxuXG5cdFx0YXdhaXQgY2hlY2tFZGl0Q29uZmxpY3QoKTtcblxuXHRcdC8vIElmICFpc0NvbnRpbnVlIHRyaWdnZXJlZCAoYnkgY2hlY2tFZGl0Q29uZmxpY3QpIHRoZW4gYnJlYWtcblx0XHRpZiAoIWlzQ29udGludWUpIHtcblx0XHRcdGJyZWFrO1xuXHRcdH1cblxuXHRcdGF3YWl0IGRlbGF5KDMgKiAxMDAwKTtcblx0fVxufTtcblxuZXhwb3J0IHtlZGl0Q29uZmxpY3R9O1xuIiwgImltcG9ydCB7bG9jYWxpemV9IGZyb20gJ2V4dC5nYWRnZXQuaTE4bic7XG5cbmNvbnN0IGdldEkxOG5NZXNzYWdlcyA9ICgpID0+IHtcblx0cmV0dXJuIHtcblx0XHROb3RpY2U6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnVGhpcyBwYWdlIGhhcyBiZWVuIGNoYW5nZWQgYnkgc29tZW9uZSBlbHNlIGFmdGVyIHlvdSBzdGFydGVkIGVkaXRpbmcuIENvcHkgeW91ciBjaGFuZ2VzLCByZWZyZXNoIGFuZCBzdGFydCBvdmVyIHRvIGF2b2lkIGVkaXQgY29uZmxpY3RzLicsXG5cdFx0XHRqYTogJ+OBk+OBruODmuODvOOCuOOBr+S7luOBruS6uuOBq+OCiOOBo+OBpuWkieabtOOBleOCjOOBpuOBhOOBvuOBmeOAgue3qOmbhuihneeqgeOCkumBv+OBkeOCi+OBn+OCgeOAgee3qOmbhuWGheWuueOCkuOCs+ODlOODvOOBl+OBpuODmuODvOOCuOOCkuWGjeiqreOBv+i+vOOBv+OBl+OAgee3qOmbhuOCkue2muOBkeOBpuOBj+OBoOOBleOBhOOAgicsXG5cdFx0XHQnemgtaGFucyc6ICfmraTpobXpnaLlt7Looqvku5bkurrmm7TmlLnjgILor7flpI3liLbmgqjnmoTnvJbovpHvvIznhLblkI7liLfmlrDpobXpnaLvvIzph43mlrDlvIDlp4vnvJbovpHvvIzku6Xpgb/lhY3nvJbovpHlhrLnqoHjgIInLFxuXHRcdFx0J3poLWhhbnQnOiAn5pys6aCB5bey6KKr5LuW5Lq65pu05pS544CC6KuL5bCH5oKo55qE57eo6Lyv6KSH6KO977yM5Lim6YeN5paw6LyJ5YWl6aCB6Z2i77yM54S25b6M57m857qM57eo6Lyv77yM5L6G6YG/5YWN57eo6Lyv6KGd56qB44CCJyxcblx0XHR9KSxcblx0XHRSZWZyZXNoOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1JlZnJlc2gnLFxuXHRcdFx0amE6ICflho3oqq3jgb/ovrzjgb8nLFxuXHRcdFx0J3poLWhhbnMnOiAn5Yi35paw6aG16Z2iJyxcblx0XHRcdCd6aC1oYW50JzogJ+mHjeaWsOi8ieWFpScsXG5cdFx0fSksXG5cdH07XG59O1xuXG5jb25zdCBpMThuTWVzc2FnZXMgPSBnZXRJMThuTWVzc2FnZXMoKTtcblxuY29uc3QgZ2V0TWVzc2FnZTogR2V0TWVzc2FnZXM8dHlwZW9mIGkxOG5NZXNzYWdlcz4gPSAoa2V5KSA9PiB7XG5cdHJldHVybiBpMThuTWVzc2FnZXNba2V5XSB8fCBrZXk7XG59O1xuXG5leHBvcnQge2dldE1lc3NhZ2V9O1xuIiwgImltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9pMThuJztcblxuY29uc3QgbG9jYXRpb25SZWxvYWQgPSAoKSA9PiB7XG5cdGxvY2F0aW9uLnJlbG9hZCgpO1xuXHRyZXR1cm4gZmFsc2U7XG59O1xuXG5jb25zdCAkbm90aWNlTWVzc2FnZSA9ICQoJzxzcGFuPicpLmFwcGVuZChcblx0Z2V0TWVzc2FnZSgnTm90aWNlJyksXG5cdCQoJzxhPicpLm9uKCdjbGljaycsIGxvY2F0aW9uUmVsb2FkKS50ZXh0KGdldE1lc3NhZ2UoJ1JlZnJlc2gnKSlcbik7XG5cbmV4cG9ydCB7JG5vdGljZU1lc3NhZ2V9O1xuIiwgIntcblx0XCJ2ZXJzaW9uXCI6IFwiMi4wXCJcbn1cbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge2luaXRNd0FwaX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxuY29uc3QgYXBpOiBtdy5BcGkgPSBpbml0TXdBcGkoYEVkaXRDb25mbGljdC8ke09QVElPTlMudmVyc2lvbn1gKTtcblxuZXhwb3J0IHthcGl9O1xuIiwgImltcG9ydCB7YXBpfSBmcm9tICcuLi9hcGknO1xuXG5pbnRlcmZhY2UgUGFnZUluZm8ge1xuXHRxdWVyeT86IHtcblx0XHRwYWdlczoge1xuXHRcdFx0bWlzc2luZz86IGJvb2xlYW47XG5cdFx0XHRyZXZpc2lvbnM6IHtcblx0XHRcdFx0cmV2aWQ6IG51bWJlcjtcblx0XHRcdH1bXTtcblx0XHR9W107XG5cdH07XG59XG5cbmNvbnN0IHBhcmFtczogQXBpUXVlcnlSZXZpc2lvbnNQYXJhbXMgPSB7XG5cdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0Zm9ybWF0OiAnanNvbicsXG5cdGZvcm1hdHZlcnNpb246ICcyJyxcblx0cHJvcDogJ3JldmlzaW9ucycsXG5cdHJ2cHJvcDogJ2lkcycsXG59O1xuXG5jb25zdCBxdWVyeVBhZ2VJbmZvID0gYXN5bmMgKHRpdGxlOiBzdHJpbmcpOiBQcm9taXNlPFBhZ2VJbmZvPiA9PiB7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIGF3YWl0IGFwaS5nZXQoe1xuXHRcdFx0Li4ucGFyYW1zLFxuXHRcdFx0dGl0bGVzOiB0aXRsZSxcblx0XHR9IGFzIHR5cGVvZiBwYXJhbXMpO1xuXHR9IGNhdGNoIChlcnJvcjogdW5rbm93bikge1xuXHRcdGNvbnNvbGUuZXJyb3IoJ1tFZGl0Q29uZmxpY3RdIEFqYXggZXJyb3I6JywgZXJyb3IpO1xuXHRcdHJldHVybiB7fTtcblx0fVxufTtcblxuZXhwb3J0IHtxdWVyeVBhZ2VJbmZvfTtcbiIsICJpbXBvcnQge3F1ZXJ5UGFnZUluZm99IGZyb20gJy4vdXRpbC9xdWVyeVBhZ2VJbmZvJztcblxuY29uc3QgZ2V0Q3VycmVudFJldmlzaW9uSWQgPSBhc3luYyAodGl0bGU6IHN0cmluZyk6IFByb21pc2U8bnVtYmVyPiA9PiB7XG5cdGNvbnN0IHBhZ2VJbmZvOiBBd2FpdGVkPFJldHVyblR5cGU8dHlwZW9mIHF1ZXJ5UGFnZUluZm8+PiA9IGF3YWl0IHF1ZXJ5UGFnZUluZm8odGl0bGUpO1xuXG5cdGNvbnN0IHtxdWVyeX0gPSBwYWdlSW5mbztcblx0aWYgKCFxdWVyeSkge1xuXHRcdHJldHVybiAwO1xuXHR9XG5cblx0Y29uc3QgW3BhZ2VdID0gcXVlcnkucGFnZXM7XG5cdGlmICghcGFnZSB8fCBwYWdlLm1pc3NpbmcpIHtcblx0XHRyZXR1cm4gMDtcblx0fVxuXG5cdHJldHVybiBwYWdlLnJldmlzaW9uc1swXSEucmV2aWQ7XG59O1xuXG5leHBvcnQge2dldEN1cnJlbnRSZXZpc2lvbklkfTtcbiIsICJpbXBvcnQge2VkaXRDb25mbGljdH0gZnJvbSAnLi9tb2R1bGVzL2NvcmUnO1xuXG5jb25zdCB7d2dBY3Rpb24sIHdnQ3VyUmV2aXNpb25JZH0gPSBtdy5jb25maWcuZ2V0KCk7XG5cbmlmIChbJ2VkaXQnLCAnc3VibWl0J10uaW5jbHVkZXMod2dBY3Rpb24pICYmIHdnQ3VyUmV2aXNpb25JZCkge1xuXHR2b2lkIGVkaXRDb25mbGljdCgpO1xufVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLHFCQUE2QkMsUUFBQSxpQkFBQTs7QUNBN0IsSUFBQUMsb0JBQXVCRCxRQUFBLGlCQUFBO0FBRXZCLElBQU1FLGtCQUFrQkEsTUFBTTtBQUM3QixTQUFPO0lBQ05DLFNBQUEsR0FBUUYsa0JBQUFHLFVBQVM7TUFDaEJDLElBQUk7TUFDSkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNEQyxVQUFBLEdBQVNOLGtCQUFBRyxVQUFTO01BQ2pCQyxJQUFJO01BQ0pDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7RUFDRjtBQUNEO0FBRUEsSUFBTUUsZUFBZU4sZ0JBQWdCO0FBRXJDLElBQU1PLGFBQWdEQyxTQUFRO0FBQzdELFNBQU9GLGFBQWFFLEdBQUcsS0FBS0E7QUFDN0I7O0FDckJBLElBQU1DLGlCQUFpQkEsTUFBTTtBQUM1QkMsV0FBU0MsT0FBTztBQUNoQixTQUFPO0FBQ1I7QUFFQSxJQUFNQyxpQkFBaUJDLEVBQUUsUUFBUSxFQUFFQyxPQUNsQ1AsV0FBVyxRQUFRLEdBQ25CTSxFQUFFLEtBQUssRUFBRUUsR0FBRyxTQUFTTixjQUFjLEVBQUVPLEtBQUtULFdBQVcsU0FBUyxDQUFDLENBQ2hFOztBQ1RDLElBQUFVLFVBQVc7O0FDQVosSUFBQUMscUJBQXdCcEIsUUFBQSxpQkFBQTtBQUV4QixJQUFNcUIsT0FBQSxHQUFjRCxtQkFBQUUsV0FBQSxnQkFBQUMsT0FBa0NKLE9BQU8sQ0FBRTs7QUNVL0QsSUFBTUssU0FBa0M7RUFDdkNDLFFBQVE7RUFDUkMsUUFBUTtFQUNSQyxlQUFlO0VBQ2ZDLE1BQU07RUFDTkMsUUFBUTtBQUNUO0FBRUEsSUFBTUMsZ0JBQUEsNEJBQUE7QUFBQSxNQUFBQyxPQUFBQyxrQkFBZ0IsV0FBT0MsT0FBcUM7QUFDakUsUUFBSTtBQUNILGFBQUEsTUFBYVosSUFBSWEsSUFBSTtRQUNwQixHQUFHVjtRQUNIVyxRQUFRRjtNQUNULENBQWtCO0lBQ25CLFNBQVNHLE9BQWdCO0FBQ3hCQyxjQUFRRCxNQUFNLDhCQUE4QkEsS0FBSztBQUNqRCxhQUFPLENBQUM7SUFDVDtFQUNELENBQUE7QUFBQSxTQUFBLFNBVk1OLGVBQUFRLElBQUE7QUFBQSxXQUFBUCxLQUFBUSxNQUFBLE1BQUFDLFNBQUE7RUFBQTtBQUFBLEdBQUE7O0FDbkJOLElBQU1DLHVCQUFBLDRCQUFBO0FBQUEsTUFBQUMsUUFBQVYsa0JBQXVCLFdBQU9DLE9BQW1DO0FBQ3RFLFVBQU1VLFdBQUEsTUFBNERiLGNBQWNHLEtBQUs7QUFFckYsVUFBTTtNQUFDVztJQUFLLElBQUlEO0FBQ2hCLFFBQUksQ0FBQ0MsT0FBTztBQUNYLGFBQU87SUFDUjtBQUVBLFVBQU0sQ0FBQ0MsSUFBSSxJQUFJRCxNQUFNRTtBQUNyQixRQUFJLENBQUNELFFBQVFBLEtBQUtFLFNBQVM7QUFDMUIsYUFBTztJQUNSO0FBRUEsV0FBT0YsS0FBS0csVUFBVSxDQUFDLEVBQUdDO0VBQzNCLENBQUE7QUFBQSxTQUFBLFNBZE1SLHNCQUFBUyxLQUFBO0FBQUEsV0FBQVIsTUFBQUgsTUFBQSxNQUFBQyxTQUFBO0VBQUE7QUFBQSxHQUFBOztBTkNOLElBQUFXLHFCQUF1Qm5ELFFBQUEscUJBQUE7QUFFdkIsSUFBTW9ELGVBQUEsNEJBQUE7QUFBQSxNQUFBQyxRQUFBckIsa0JBQWUsYUFBMkI7QUFDL0MsUUFBSXNCLGFBQXNCO0FBRTFCLFVBQUEsR0FBS3ZELG1CQUFBd0QsU0FBUSxFQUFFQyxLQUFNQyxXQUF5QztBQUM3REEsWUFBTUMsS0FBSyxzQkFBc0IsRUFBRXpDLEdBQUcsU0FBUyxNQUFZO0FBQzFEcUMscUJBQWE7TUFDZCxDQUFDO0lBQ0YsQ0FBQztBQUVELFVBQU1LLG9CQUFBLDRCQUFBO0FBQUEsVUFBQUMsUUFBQTVCLGtCQUFvQixhQUEyQjtBQUNwRCxjQUFNO1VBQUM2QixpQkFBQUM7VUFBaUJDO1FBQVUsSUFBSUMsR0FBR0MsT0FBTy9CLElBQUk7QUFDcEQsY0FBTWdDLGlCQUFBLE1BQStCekIscUJBQXFCc0IsVUFBVTtBQUNwRSxZQUFJLENBQUNHLGdCQUFnQjtBQUNwQlosdUJBQWE7UUFDZCxXQUFXWSxpQkFBaUJKLGtCQUFpQjtBQUM1Q1IsdUJBQWE7QUFDYixXQUFBLEdBQUFILG1CQUFBZ0IsVUFDQztZQUNDQyxNQUFNdEQsZUFBZW9CLElBQUksQ0FBQztZQUMxQm1DLE9BQU87WUFDUEMsVUFBVTtVQUNYLEdBQ0EsTUFDRDtRQUNEO01BQ0QsQ0FBQTtBQUFBLGFBQUEsU0FoQk1YLHFCQUFBO0FBQUEsZUFBQUMsTUFBQXJCLE1BQUEsTUFBQUMsU0FBQTtNQUFBO0lBQUEsR0FBQTtBQWtCTixXQUFPLE1BQU07QUFFWixVQUFJLENBQUNjLFlBQVk7QUFDaEI7TUFDRDtBQUVBLFlBQU1LLGtCQUFrQjtBQUd4QixVQUFJLENBQUNMLFlBQVk7QUFDaEI7TUFDRDtBQUVBLGFBQUEsR0FBTXZELG1CQUFBd0UsT0FBTSxJQUFJLEdBQUk7SUFDckI7RUFDRCxDQUFBO0FBQUEsU0FBQSxTQTFDTW5CLGdCQUFBO0FBQUEsV0FBQUMsTUFBQWQsTUFBQSxNQUFBQyxTQUFBO0VBQUE7QUFBQSxHQUFBOztBT0hOLElBQU07RUFBQ2dDO0VBQVVYO0FBQWUsSUFBSUcsR0FBR0MsT0FBTy9CLElBQUk7QUFFbEQsSUFBSSxDQUFDLFFBQVEsUUFBUSxFQUFFdUMsU0FBU0QsUUFBUSxLQUFLWCxpQkFBaUI7QUFDN0QsT0FBS1QsYUFBYTtBQUNuQjsiLAogICJuYW1lcyI6IFsiaW1wb3J0X2V4dF9nYWRnZXQzIiwgInJlcXVpcmUiLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAiZ2V0STE4bk1lc3NhZ2VzIiwgIk5vdGljZSIsICJsb2NhbGl6ZSIsICJlbiIsICJqYSIsICJSZWZyZXNoIiwgImkxOG5NZXNzYWdlcyIsICJnZXRNZXNzYWdlIiwgImtleSIsICJsb2NhdGlvblJlbG9hZCIsICJsb2NhdGlvbiIsICJyZWxvYWQiLCAiJG5vdGljZU1lc3NhZ2UiLCAiJCIsICJhcHBlbmQiLCAib24iLCAidGV4dCIsICJ2ZXJzaW9uIiwgImltcG9ydF9leHRfZ2FkZ2V0MiIsICJhcGkiLCAiaW5pdE13QXBpIiwgImNvbmNhdCIsICJwYXJhbXMiLCAiYWN0aW9uIiwgImZvcm1hdCIsICJmb3JtYXR2ZXJzaW9uIiwgInByb3AiLCAicnZwcm9wIiwgInF1ZXJ5UGFnZUluZm8iLCAiX3JlZiIsICJfYXN5bmNUb0dlbmVyYXRvciIsICJ0aXRsZSIsICJnZXQiLCAidGl0bGVzIiwgImVycm9yIiwgImNvbnNvbGUiLCAiX3giLCAiYXBwbHkiLCAiYXJndW1lbnRzIiwgImdldEN1cnJlbnRSZXZpc2lvbklkIiwgIl9yZWYyIiwgInBhZ2VJbmZvIiwgInF1ZXJ5IiwgInBhZ2UiLCAicGFnZXMiLCAibWlzc2luZyIsICJyZXZpc2lvbnMiLCAicmV2aWQiLCAiX3gyIiwgImltcG9ydF9leHRfZ2FkZ2V0NCIsICJlZGl0Q29uZmxpY3QiLCAiX3JlZjMiLCAiaXNDb250aW51ZSIsICJnZXRCb2R5IiwgInRoZW4iLCAiJGJvZHkiLCAiZmluZCIsICJjaGVja0VkaXRDb25mbGljdCIsICJfcmVmNCIsICJ3Z0N1clJldmlzaW9uSWQiLCAid2dDdXJSZXZpc2lvbklkMiIsICJ3Z1BhZ2VOYW1lIiwgIm13IiwgImNvbmZpZyIsICJwYWdlUmV2aXNpb25JZCIsICJ0b2FzdGlmeSIsICJub2RlIiwgImNsb3NlIiwgImR1cmF0aW9uIiwgImRlbGF5IiwgIndnQWN0aW9uIiwgImluY2x1ZGVzIl0KfQo=

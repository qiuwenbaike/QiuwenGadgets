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
//! src/EditConflict/modules/i18n.ts
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
//! src/EditConflict/modules/core.ts
var import_ext_gadget3 = require("ext.gadget.Util");
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
  var _ref3 = _asyncToGenerator(function* ($body) {
    let isContinue = true;
    $body.find('input[name="wpSave"]').on("click", () => {
      isContinue = false;
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
  return function editConflict2(_x3) {
    return _ref3.apply(this, arguments);
  };
})();
//! src/EditConflict/EditConflict.ts
var import_ext_gadget5 = require("ext.gadget.Util");
var {
  wgAction,
  wgCurRevisionId
} = mw.config.get();
void (0, import_ext_gadget5.getBody)().then(($body) => {
  if (["edit", "submit"].includes(wgAction) && wgCurRevisionId) {
    void editConflict($body);
  }
});

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0VkaXRDb25mbGljdC9tb2R1bGVzL2kxOG4udHMiLCAic3JjL0VkaXRDb25mbGljdC9tb2R1bGVzL25vdGljZU1lc3NhZ2UudHMiLCAic3JjL0VkaXRDb25mbGljdC9tb2R1bGVzL2NvcmUudHMiLCAic3JjL0VkaXRDb25mbGljdC9vcHRpb25zLmpzb24iLCAic3JjL0VkaXRDb25mbGljdC9tb2R1bGVzL2FwaS50cyIsICJzcmMvRWRpdENvbmZsaWN0L21vZHVsZXMvdXRpbC9xdWVyeVBhZ2VJbmZvLnRzIiwgInNyYy9FZGl0Q29uZmxpY3QvbW9kdWxlcy9nZXRDdXJyZW50UmV2aXNpb25JZC50cyIsICJzcmMvRWRpdENvbmZsaWN0L0VkaXRDb25mbGljdC50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHtsb2NhbGl6ZX0gZnJvbSAnZXh0LmdhZGdldC5pMThuJztcblxuY29uc3QgZ2V0STE4bk1lc3NhZ2VzID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdE5vdGljZTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdUaGlzIHBhZ2UgaGFzIGJlZW4gY2hhbmdlZCBieSBzb21lb25lIGVsc2UgYWZ0ZXIgeW91IHN0YXJ0ZWQgZWRpdGluZy4gQ29weSB5b3VyIGNoYW5nZXMsIHJlZnJlc2ggYW5kIHN0YXJ0IG92ZXIgdG8gYXZvaWQgZWRpdCBjb25mbGljdHMuJyxcblx0XHRcdGphOiAn44GT44Gu44Oa44O844K444Gv5LuW44Gu5Lq644Gr44KI44Gj44Gm5aSJ5pu044GV44KM44Gm44GE44G+44GZ44CC57eo6ZuG6KGd56qB44KS6YG/44GR44KL44Gf44KB44CB57eo6ZuG5YaF5a6544KS44Kz44OU44O844GX44Gm44Oa44O844K444KS5YaN6Kqt44G/6L6844G/44GX44CB57eo6ZuG44KS57aa44GR44Gm44GP44Gg44GV44GE44CCJyxcblx0XHRcdCd6aC1oYW5zJzogJ+atpOmhtemdouW3suiiq+S7luS6uuabtOaUueOAguivt+WkjeWItuaCqOeahOe8lui+ke+8jOeEtuWQjuWIt+aWsOmhtemdou+8jOmHjeaWsOW8gOWni+e8lui+ke+8jOS7pemBv+WFjee8lui+keWGsueqgeOAgicsXG5cdFx0XHQnemgtaGFudCc6ICfmnKzpoIHlt7Looqvku5bkurrmm7TmlLnjgILoq4vlsIfmgqjnmoTnt6jovK/opIfoo73vvIzkuKbph43mlrDovInlhaXpoIHpnaLvvIznhLblvoznubznuoznt6jovK/vvIzkvobpgb/lhY3nt6jovK/ooZ3nqoHjgIInLFxuXHRcdH0pLFxuXHRcdFJlZnJlc2g6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnUmVmcmVzaCcsXG5cdFx0XHRqYTogJ+WGjeiqreOBv+i+vOOBvycsXG5cdFx0XHQnemgtaGFucyc6ICfliLfmlrDpobXpnaInLFxuXHRcdFx0J3poLWhhbnQnOiAn6YeN5paw6LyJ5YWlJyxcblx0XHR9KSxcblx0fTtcbn07XG5cbmNvbnN0IGkxOG5NZXNzYWdlcyA9IGdldEkxOG5NZXNzYWdlcygpO1xuXG5jb25zdCBnZXRNZXNzYWdlOiBHZXRNZXNzYWdlczx0eXBlb2YgaTE4bk1lc3NhZ2VzPiA9IChrZXkpID0+IHtcblx0cmV0dXJuIGkxOG5NZXNzYWdlc1trZXldIHx8IGtleTtcbn07XG5cbmV4cG9ydCB7Z2V0TWVzc2FnZX07XG4iLCAiaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL2kxOG4nO1xuXG5jb25zdCBsb2NhdGlvblJlbG9hZCA9ICgpID0+IHtcblx0bG9jYXRpb24ucmVsb2FkKCk7XG5cdHJldHVybiBmYWxzZTtcbn07XG5cbmNvbnN0ICRub3RpY2VNZXNzYWdlID0gJCgnPHNwYW4+JykuYXBwZW5kKFxuXHRnZXRNZXNzYWdlKCdOb3RpY2UnKSxcblx0JCgnPGE+Jykub24oJ2NsaWNrJywgbG9jYXRpb25SZWxvYWQpLnRleHQoZ2V0TWVzc2FnZSgnUmVmcmVzaCcpKVxuKTtcblxuZXhwb3J0IHskbm90aWNlTWVzc2FnZX07XG4iLCAiaW1wb3J0IHskbm90aWNlTWVzc2FnZX0gZnJvbSAnLi9ub3RpY2VNZXNzYWdlJztcbmltcG9ydCB7ZGVsYXl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5pbXBvcnQge2dldEN1cnJlbnRSZXZpc2lvbklkfSBmcm9tICcuL2dldEN1cnJlbnRSZXZpc2lvbklkJztcbmltcG9ydCB7dG9hc3RpZnl9IGZyb20gJ2V4dC5nYWRnZXQuVG9hc3RpZnknO1xuXG5jb25zdCBlZGl0Q29uZmxpY3QgPSBhc3luYyAoJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KTogUHJvbWlzZTx2b2lkPiA9PiB7XG5cdGxldCBpc0NvbnRpbnVlOiBib29sZWFuID0gdHJ1ZTtcblxuXHQkYm9keS5maW5kKCdpbnB1dFtuYW1lPVwid3BTYXZlXCJdJykub24oJ2NsaWNrJywgKCk6IHZvaWQgPT4ge1xuXHRcdGlzQ29udGludWUgPSBmYWxzZTtcblx0fSk7XG5cblx0Y29uc3QgY2hlY2tFZGl0Q29uZmxpY3QgPSBhc3luYyAoKTogUHJvbWlzZTx2b2lkPiA9PiB7XG5cdFx0Y29uc3Qge3dnQ3VyUmV2aXNpb25JZCwgd2dQYWdlTmFtZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cdFx0Y29uc3QgcGFnZVJldmlzaW9uSWQ6IG51bWJlciA9IGF3YWl0IGdldEN1cnJlbnRSZXZpc2lvbklkKHdnUGFnZU5hbWUpO1xuXHRcdGlmICghcGFnZVJldmlzaW9uSWQpIHtcblx0XHRcdGlzQ29udGludWUgPSBmYWxzZTtcblx0XHR9IGVsc2UgaWYgKHBhZ2VSZXZpc2lvbklkID4gd2dDdXJSZXZpc2lvbklkKSB7XG5cdFx0XHRpc0NvbnRpbnVlID0gZmFsc2U7XG5cdFx0XHR0b2FzdGlmeShcblx0XHRcdFx0e1xuXHRcdFx0XHRcdG5vZGU6ICRub3RpY2VNZXNzYWdlLmdldCgwKSxcblx0XHRcdFx0XHRjbG9zZTogdHJ1ZSxcblx0XHRcdFx0XHRkdXJhdGlvbjogLTEsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdCdpbmZvJ1xuXHRcdFx0KTtcblx0XHR9XG5cdH07XG5cblx0d2hpbGUgKHRydWUpIHtcblx0XHQvLyBJZiAhaXNDb250aW51ZSB0cmlnZ2VyZWQgKGJ5IG9uQ2xpY2spIHRoZW4gYnJlYWtcblx0XHRpZiAoIWlzQ29udGludWUpIHtcblx0XHRcdGJyZWFrO1xuXHRcdH1cblxuXHRcdGF3YWl0IGNoZWNrRWRpdENvbmZsaWN0KCk7XG5cblx0XHQvLyBJZiAhaXNDb250aW51ZSB0cmlnZ2VyZWQgKGJ5IGNoZWNrRWRpdENvbmZsaWN0KSB0aGVuIGJyZWFrXG5cdFx0aWYgKCFpc0NvbnRpbnVlKSB7XG5cdFx0XHRicmVhaztcblx0XHR9XG5cblx0XHRhd2FpdCBkZWxheSgzICogMTAwMCk7XG5cdH1cbn07XG5cbmV4cG9ydCB7ZWRpdENvbmZsaWN0fTtcbiIsICJ7XG5cdFwidmVyc2lvblwiOiBcIjIuMFwiXG59XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtpbml0TXdBcGl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmNvbnN0IGFwaTogbXcuQXBpID0gaW5pdE13QXBpKGBFZGl0Q29uZmxpY3QvJHtPUFRJT05TLnZlcnNpb259YCk7XG5cbmV4cG9ydCB7YXBpfTtcbiIsICJpbXBvcnQge2FwaX0gZnJvbSAnLi4vYXBpJztcblxuaW50ZXJmYWNlIFBhZ2VJbmZvIHtcblx0cXVlcnk/OiB7XG5cdFx0cGFnZXM6IHtcblx0XHRcdG1pc3Npbmc/OiBib29sZWFuO1xuXHRcdFx0cmV2aXNpb25zOiB7XG5cdFx0XHRcdHJldmlkOiBudW1iZXI7XG5cdFx0XHR9W107XG5cdFx0fVtdO1xuXHR9O1xufVxuXG5jb25zdCBwYXJhbXM6IEFwaVF1ZXJ5UmV2aXNpb25zUGFyYW1zID0ge1xuXHRhY3Rpb246ICdxdWVyeScsXG5cdGZvcm1hdDogJ2pzb24nLFxuXHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdHByb3A6ICdyZXZpc2lvbnMnLFxuXHRydnByb3A6ICdpZHMnLFxufTtcblxuY29uc3QgcXVlcnlQYWdlSW5mbyA9IGFzeW5jICh0aXRsZTogc3RyaW5nKTogUHJvbWlzZTxQYWdlSW5mbz4gPT4ge1xuXHR0cnkge1xuXHRcdHJldHVybiBhd2FpdCBhcGkuZ2V0KHtcblx0XHRcdC4uLnBhcmFtcyxcblx0XHRcdHRpdGxlczogdGl0bGUsXG5cdFx0fSBhcyB0eXBlb2YgcGFyYW1zKTtcblx0fSBjYXRjaCAoZXJyb3I6IHVua25vd24pIHtcblx0XHRjb25zb2xlLmVycm9yKCdbRWRpdENvbmZsaWN0XSBBamF4IGVycm9yOicsIGVycm9yKTtcblx0XHRyZXR1cm4ge307XG5cdH1cbn07XG5cbmV4cG9ydCB7cXVlcnlQYWdlSW5mb307XG4iLCAiaW1wb3J0IHtxdWVyeVBhZ2VJbmZvfSBmcm9tICcuL3V0aWwvcXVlcnlQYWdlSW5mbyc7XG5cbmNvbnN0IGdldEN1cnJlbnRSZXZpc2lvbklkID0gYXN5bmMgKHRpdGxlOiBzdHJpbmcpOiBQcm9taXNlPG51bWJlcj4gPT4ge1xuXHRjb25zdCBwYWdlSW5mbzogQXdhaXRlZDxSZXR1cm5UeXBlPHR5cGVvZiBxdWVyeVBhZ2VJbmZvPj4gPSBhd2FpdCBxdWVyeVBhZ2VJbmZvKHRpdGxlKTtcblxuXHRjb25zdCB7cXVlcnl9ID0gcGFnZUluZm87XG5cdGlmICghcXVlcnkpIHtcblx0XHRyZXR1cm4gMDtcblx0fVxuXG5cdGNvbnN0IFtwYWdlXSA9IHF1ZXJ5LnBhZ2VzO1xuXHRpZiAoIXBhZ2UgfHwgcGFnZS5taXNzaW5nKSB7XG5cdFx0cmV0dXJuIDA7XG5cdH1cblxuXHRyZXR1cm4gcGFnZS5yZXZpc2lvbnNbMF0hLnJldmlkO1xufTtcblxuZXhwb3J0IHtnZXRDdXJyZW50UmV2aXNpb25JZH07XG4iLCAiaW1wb3J0IHtlZGl0Q29uZmxpY3R9IGZyb20gJy4vbW9kdWxlcy9jb3JlJztcbmltcG9ydCB7Z2V0Qm9keX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxuY29uc3Qge3dnQWN0aW9uLCB3Z0N1clJldmlzaW9uSWR9ID0gbXcuY29uZmlnLmdldCgpO1xuXG52b2lkIGdldEJvZHkoKS50aGVuKCgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkID0+IHtcblx0aWYgKFsnZWRpdCcsICdzdWJtaXQnXS5pbmNsdWRlcyh3Z0FjdGlvbikgJiYgd2dDdXJSZXZpc2lvbklkKSB7XG5cdFx0dm9pZCBlZGl0Q29uZmxpY3QoJGJvZHkpO1xuXHR9XG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxvQkFBdUJDLFFBQUEsaUJBQUE7QUFFdkIsSUFBTUMsa0JBQWtCQSxNQUFNO0FBQzdCLFNBQU87SUFDTkMsU0FBQSxHQUFRSCxrQkFBQUksVUFBUztNQUNoQkMsSUFBSTtNQUNKQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0RDLFVBQUEsR0FBU1Asa0JBQUFJLFVBQVM7TUFDakJDLElBQUk7TUFDSkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztFQUNGO0FBQ0Q7QUFFQSxJQUFNRSxlQUFlTixnQkFBZ0I7QUFFckMsSUFBTU8sYUFBZ0RDLFNBQVE7QUFDN0QsU0FBT0YsYUFBYUUsR0FBRyxLQUFLQTtBQUM3Qjs7QUNyQkEsSUFBTUMsaUJBQWlCQSxNQUFNO0FBQzVCQyxXQUFTQyxPQUFPO0FBQ2hCLFNBQU87QUFDUjtBQUVBLElBQU1DLGlCQUFpQkMsRUFBRSxRQUFRLEVBQUVDLE9BQ2xDUCxXQUFXLFFBQVEsR0FDbkJNLEVBQUUsS0FBSyxFQUFFRSxHQUFHLFNBQVNOLGNBQWMsRUFBRU8sS0FBS1QsV0FBVyxTQUFTLENBQUMsQ0FDaEU7O0FDVEEsSUFBQVUscUJBQW9CbEIsUUFBQSxpQkFBQTs7QUNBbkIsSUFBQW1CLFVBQVc7O0FDQVosSUFBQUMscUJBQXdCcEIsUUFBQSxpQkFBQTtBQUV4QixJQUFNcUIsT0FBQSxHQUFjRCxtQkFBQUUsV0FBQSxnQkFBQUMsT0FBa0NKLE9BQU8s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LAogICJuYW1lcyI6IFsiaW1wb3J0X2V4dF9nYWRnZXQiLCAicmVxdWlyZSIsICJnZXRJMThuTWVzc2FnZXMiLCAiTm90aWNlIiwgImxvY2FsaXplIiwgImVuIiwgImphIiwgIlJlZnJlc2giLCAiaTE4bk1lc3NhZ2VzIiwgImdldE1lc3NhZ2UiLCAia2V5IiwgImxvY2F0aW9uUmVsb2FkIiwgImxvY2F0aW9uIiwgInJlbG9hZCIsICIkbm90aWNlTWVzc2FnZSIsICIkIiwgImFwcGVuZCIsICJvbiIsICJ0ZXh0IiwgImltcG9ydF9leHRfZ2FkZ2V0MyIsICJ2ZXJzaW9uIiwgImltcG9ydF9leHRfZ2FkZ2V0MiIsICJhcGkiLCAiaW5pdE13QXBpIiwgImNvbmNhdCIsICJwYXJhbXMiLCAiYWN0aW9uIiwgImZvcm1hdCIsICJmb3JtYXR2ZXJzaW9uIiwgInByb3AiLCAicnZwcm9wIiwgInF1ZXJ5UGFnZUluZm8iLCAiX3JlZiIsICJfYXN5bmNUb0dlbmVyYXRvciIsICJ0aXRsZSIsICJnZXQiLCAidGl0bGVzIiwgImVycm9yIiwgImNvbnNvbGUiLCAiX3giLCAiYXBwbHkiLCAiYXJndW1lbnRzIiwgImdldEN1cnJlbnRSZXZpc2lvbklkIiwgIl9yZWYyIiwgInBhZ2VJbmZvIiwgInF1ZXJ5IiwgInBhZ2UiLCAicGFnZXMiLCAibWlzc2luZyIsICJyZXZpc2lvbnMiLCAicmV2aWQiLCAiX3gyIiwgImltcG9ydF9leHRfZ2FkZ2V0NCIsICJlZGl0Q29uZmxpY3QiLCAiX3JlZjMiLCAiJGJvZHkiLCAiaXNDb250aW51ZSIsICJmaW5kIiwgImNoZWNrRWRpdENvbmZsaWN0IiwgIl9yZWY0IiwgIndnQ3VyUmV2aXNpb25JZCIsICJ3Z0N1clJldmlzaW9uSWQyIiwgIndnUGFnZU5hbWUiLCAibXciLCAiY29uZmlnIiwgInBhZ2VSZXZpc2lvbklkIiwgInRvYXN0aWZ5IiwgIm5vZGUiLCAiY2xvc2UiLCAiZHVyYXRpb24iLCAiZGVsYXkiLCAiX3gzIiwgImltcG9ydF9leHRfZ2FkZ2V0NSIsICJ3Z0FjdGlvbiIsICJnZXRCb2R5IiwgInRoZW4iLCAiaW5jbHVkZXMiXQp9Cg==

/**
 * SPDX-License-Identifier: GPL-3.0-or-later
 * _addText: '{{Gadget Header|license=GPL-3.0-or-later}}'
 *
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/ConfirmLogout}
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

// dist/ConfirmLogout/ConfirmLogout.js
//! src/ConfirmLogout/options.json
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
var logoutElementSelector = '#ca-cb-logout>a,#topbar>a[href*="UserLogout"],#pt-logout>a';
var logoutElementSelectorOfVector2022StickyHeader = "#pt-logout-sticky-header>a";
var version = "3.0";
//! src/ConfirmLogout/ConfirmLogout.ts
var import_ext_gadget6 = require("ext.gadget.Util");
//! src/ConfirmLogout/modules/util/refreshEventListener.ts
var import_ext_gadget = require("ext.gadget.FilterAlteredClicks");
var refreshEventListener = ($element, clickListener2) => {
  const hoverListener = () => {
    $element.off("click");
    $element.on("click", (0, import_ext_gadget.filterAlteredClicks)(clickListener2));
  };
  const hoverListenerWithDebounce = mw.util.debounce(hoverListener, 200, true);
  $element.on("mouseover touchstart", {
    passive: true
  }, hoverListenerWithDebounce);
};
//! src/ConfirmLogout/modules/addListener.ts
var {
  skin
} = mw.config.get();
var clickListener = (openConfirmDialog, event) => {
  event.preventDefault();
  openConfirmDialog();
};
var addListener = ($element, openConfirmDialog) => {
  var _$body$get;
  refreshEventListener($element, (event) => {
    clickListener(openConfirmDialog, event);
  });
  if (skin !== "vector-2022") {
    return;
  }
  const $body = $element.parents("body");
  const observerCallback = (_mutations, observer) => {
    if (!$body.hasClass("vector-sticky-header-visible")) {
      return;
    }
    const SELECTOR = logoutElementSelectorOfVector2022StickyHeader;
    const element = document.querySelector(SELECTOR);
    if (!element) {
      return;
    }
    const elementClone = element.cloneNode(true);
    element.replaceWith(elementClone);
    refreshEventListener($body.find(SELECTOR), (event) => {
      clickListener(openConfirmDialog, event);
    });
    observer.disconnect();
  };
  const mutationObserver = new MutationObserver(observerCallback);
  mutationObserver.observe((_$body$get = $body.get(0)) !== null && _$body$get !== void 0 ? _$body$get : document.documentElement, {
    attributes: true,
    attributeFilter: ["class"]
  });
};
//! src/ConfirmLogout/modules/i18n.ts
var import_ext_gadget2 = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    "Network error": (0, import_ext_gadget2.localize)({
      en: "Network error",
      ja: "ネットワークエラー",
      "zh-hans": "网络异常",
      "zh-hant": "網路異常"
    }),
    Confirm: (0, import_ext_gadget2.localize)({
      en: "Confirm logout?",
      ja: "ログアウトしますか？",
      "zh-hans": "您确定要退出吗？",
      "zh-hant": "您確定要登出嗎？"
    }),
    ConfirmAction: (0, import_ext_gadget2.localize)({
      en: "Confirm",
      ja: "確認",
      "zh-hans": "确认",
      "zh-hant": "確認"
    }),
    Cancel: (0, import_ext_gadget2.localize)({
      en: "Cancel",
      ja: "キャンセル",
      "zh-hans": "取消",
      "zh-hant": "取消"
    }),
    Succeed: (0, import_ext_gadget2.localize)({
      en: "Logout succeed. Refreshing...",
      ja: "ログアウトに成功しました。再読み込みします...",
      "zh-hans": "退出成功，即将刷新页面……",
      "zh-hant": "登出成功，即將重新載入……"
    })
  };
};
var i18nMessages = getI18nMessages();
var getMessage = (key) => {
  return i18nMessages[key] || key;
};
//! src/ConfirmLogout/ConfirmLogout.ts
var import_ext_gadget7 = require("ext.gadget.Toastify");
//! src/ConfirmLogout/modules/api.ts
var import_ext_gadget3 = require("ext.gadget.Util");
var api = (0, import_ext_gadget3.initMwApi)("ConfirmLogout/".concat(version));
//! src/ConfirmLogout/modules/util/logout.ts
var import_ext_gadget4 = require("ext.gadget.Toastify");
var logout = /* @__PURE__ */ (function() {
  var _ref = _asyncToGenerator(function* (toastifyInstance) {
    yield api.postWithEditToken({
      action: "logout"
    });
    toastifyInstance.hideToast();
    (0, import_ext_gadget4.toastify)({
      text: getMessage("Succeed")
    }, "success");
    location.reload();
  });
  return function logout2(_x) {
    return _ref.apply(this, arguments);
  };
})();
//! src/ConfirmLogout/modules/util/showError.ts
var import_ext_gadget5 = require("ext.gadget.Toastify");
var showError = (error, toastifyInstance) => {
  console.error("[ConfirmLogout] Ajax error:", error);
  toastifyInstance.hideToast();
  (0, import_ext_gadget5.toastify)({
    text: getMessage("Network error")
  }, "error");
};
//! src/ConfirmLogout/modules/tryLogout.ts
var tryLogout = /* @__PURE__ */ (function() {
  var _ref2 = _asyncToGenerator(function* (toastifyInstance) {
    try {
      yield logout(toastifyInstance);
    } catch (error) {
      showError(error, toastifyInstance);
    }
  });
  return function tryLogout2(_x2) {
    return _ref2.apply(this, arguments);
  };
})();
//! src/ConfirmLogout/ConfirmLogout.ts
var {
  wgUserName
} = mw.config.get();
void (0, import_ext_gadget6.getBody)().then(function confirmLogout($body) {
  if (!wgUserName) {
    return;
  }
  const $element = $body.find(logoutElementSelector);
  if (!$element.length) {
    return;
  }
  const openConfirmDialog = /* @__PURE__ */ (function() {
    var _ref3 = _asyncToGenerator(function* () {
      const isConfirm = yield (0, import_ext_gadget6.oouiConfirmWithStyle)(getMessage("Confirm"));
      if (!isConfirm) {
        return;
      }
      const toastifyInstance = (0, import_ext_gadget7.toastify)({
        text: mw.message("logging-out-notify").parse(),
        duration: -1
      }, "info");
      void tryLogout(toastifyInstance);
    });
    return function openConfirmDialog2() {
      return _ref3.apply(this, arguments);
    };
  })();
  addListener($element, openConfirmDialog);
});

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0NvbmZpcm1Mb2dvdXQvb3B0aW9ucy5qc29uIiwgInNyYy9Db25maXJtTG9nb3V0L0NvbmZpcm1Mb2dvdXQudHMiLCAic3JjL0NvbmZpcm1Mb2dvdXQvbW9kdWxlcy91dGlsL3JlZnJlc2hFdmVudExpc3RlbmVyLnRzIiwgInNyYy9Db25maXJtTG9nb3V0L21vZHVsZXMvYWRkTGlzdGVuZXIudHMiLCAic3JjL0NvbmZpcm1Mb2dvdXQvbW9kdWxlcy9pMThuLnRzIiwgInNyYy9Db25maXJtTG9nb3V0L21vZHVsZXMvYXBpLnRzIiwgInNyYy9Db25maXJtTG9nb3V0L21vZHVsZXMvdXRpbC9sb2dvdXQudHMiLCAic3JjL0NvbmZpcm1Mb2dvdXQvbW9kdWxlcy91dGlsL3Nob3dFcnJvci50cyIsICJzcmMvQ29uZmlybUxvZ291dC9tb2R1bGVzL3RyeUxvZ291dC50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsie1xuXHRcImxvZ291dEVsZW1lbnRTZWxlY3RvclwiOiBcIiNjYS1jYi1sb2dvdXQ+YSwjdG9wYmFyPmFbaHJlZio9XFxcIlVzZXJMb2dvdXRcXFwiXSwjcHQtbG9nb3V0PmFcIixcblx0XCJsb2dvdXRFbGVtZW50U2VsZWN0b3JPZlZlY3RvcjIwMjJTdGlja3lIZWFkZXJcIjogXCIjcHQtbG9nb3V0LXN0aWNreS1oZWFkZXI+YVwiLFxuXHRcInZlcnNpb25cIjogXCIzLjBcIlxufVxuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtnZXRCb2R5LCBvb3VpQ29uZmlybVdpdGhTdHlsZX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbmltcG9ydCB7YWRkTGlzdGVuZXJ9IGZyb20gJy4vbW9kdWxlcy9hZGRMaXN0ZW5lcic7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vbW9kdWxlcy9pMThuJztcbmltcG9ydCB7dG9hc3RpZnl9IGZyb20gJ2V4dC5nYWRnZXQuVG9hc3RpZnknO1xuaW1wb3J0IHt0cnlMb2dvdXR9IGZyb20gJy4vbW9kdWxlcy90cnlMb2dvdXQnO1xuXG5jb25zdCB7d2dVc2VyTmFtZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cbnZvaWQgZ2V0Qm9keSgpLnRoZW4oZnVuY3Rpb24gY29uZmlybUxvZ291dCgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkIHtcblx0aWYgKCF3Z1VzZXJOYW1lKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgJGVsZW1lbnQ6IEpRdWVyeSA9ICRib2R5LmZpbmQoT1BUSU9OUy5sb2dvdXRFbGVtZW50U2VsZWN0b3IpO1xuXHRpZiAoISRlbGVtZW50Lmxlbmd0aCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IG9wZW5Db25maXJtRGlhbG9nID0gYXN5bmMgKCkgPT4ge1xuXHRcdGNvbnN0IGlzQ29uZmlybTogYm9vbGVhbiA9IGF3YWl0IG9vdWlDb25maXJtV2l0aFN0eWxlKGdldE1lc3NhZ2UoJ0NvbmZpcm0nKSk7XG5cdFx0aWYgKCFpc0NvbmZpcm0pIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRjb25zdCB0b2FzdGlmeUluc3RhbmNlOiBUb2FzdGlmeUluc3RhbmNlID0gdG9hc3RpZnkoXG5cdFx0XHR7XG5cdFx0XHRcdHRleHQ6IG13Lm1lc3NhZ2UoJ2xvZ2dpbmctb3V0LW5vdGlmeScpLnBhcnNlKCksXG5cdFx0XHRcdGR1cmF0aW9uOiAtMSxcblx0XHRcdH0sXG5cdFx0XHQnaW5mbydcblx0XHQpO1xuXHRcdHZvaWQgdHJ5TG9nb3V0KHRvYXN0aWZ5SW5zdGFuY2UpO1xuXHR9O1xuXG5cdGFkZExpc3RlbmVyKCRlbGVtZW50LCBvcGVuQ29uZmlybURpYWxvZyk7XG59KTtcbiIsICJpbXBvcnQge2ZpbHRlckFsdGVyZWRDbGlja3N9IGZyb20gJ2V4dC5nYWRnZXQuRmlsdGVyQWx0ZXJlZENsaWNrcyc7XG5cbmNvbnN0IHJlZnJlc2hFdmVudExpc3RlbmVyID0gKCRlbGVtZW50OiBKUXVlcnksIGNsaWNrTGlzdGVuZXI6IChldmVudDogSlF1ZXJ5LkNsaWNrRXZlbnQpID0+IHZvaWQpOiB2b2lkID0+IHtcblx0Y29uc3QgaG92ZXJMaXN0ZW5lciA9ICgpOiB2b2lkID0+IHtcblx0XHQkZWxlbWVudC5vZmYoJ2NsaWNrJyk7XG5cdFx0JGVsZW1lbnQub24oJ2NsaWNrJywgZmlsdGVyQWx0ZXJlZENsaWNrcyhjbGlja0xpc3RlbmVyKSk7XG5cdH07XG5cdGNvbnN0IGhvdmVyTGlzdGVuZXJXaXRoRGVib3VuY2U6IHR5cGVvZiBob3Zlckxpc3RlbmVyID0gbXcudXRpbC5kZWJvdW5jZShob3Zlckxpc3RlbmVyLCAyMDAsIHRydWUpO1xuXG5cdCRlbGVtZW50Lm9uKCdtb3VzZW92ZXIgdG91Y2hzdGFydCcsIHtwYXNzaXZlOiB0cnVlfSwgaG92ZXJMaXN0ZW5lcldpdGhEZWJvdW5jZSk7XG59O1xuXG5leHBvcnQge3JlZnJlc2hFdmVudExpc3RlbmVyfTtcbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge3JlZnJlc2hFdmVudExpc3RlbmVyfSBmcm9tICcuL3V0aWwvcmVmcmVzaEV2ZW50TGlzdGVuZXInO1xuXG5jb25zdCB7c2tpbn0gPSBtdy5jb25maWcuZ2V0KCk7XG5cbmNvbnN0IGNsaWNrTGlzdGVuZXIgPSAob3BlbkNvbmZpcm1EaWFsb2c6ICgpID0+IHZvaWQsIGV2ZW50OiBKUXVlcnkuQ2xpY2tFdmVudCk6IHZvaWQgPT4ge1xuXHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRvcGVuQ29uZmlybURpYWxvZygpO1xufTtcblxuY29uc3QgYWRkTGlzdGVuZXIgPSAoJGVsZW1lbnQ6IEpRdWVyeSwgb3BlbkNvbmZpcm1EaWFsb2c6ICgpID0+IHZvaWQpOiB2b2lkID0+IHtcblx0cmVmcmVzaEV2ZW50TGlzdGVuZXIoJGVsZW1lbnQsIChldmVudDogSlF1ZXJ5LkNsaWNrRXZlbnQpOiB2b2lkID0+IHtcblx0XHRjbGlja0xpc3RlbmVyKG9wZW5Db25maXJtRGlhbG9nLCBldmVudCk7XG5cdH0pO1xuXG5cdGlmIChza2luICE9PSAndmVjdG9yLTIwMjInKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+ID0gJGVsZW1lbnQucGFyZW50cygnYm9keScpO1xuXG5cdGNvbnN0IG9ic2VydmVyQ2FsbGJhY2sgPSAoX211dGF0aW9uczogTXV0YXRpb25SZWNvcmRbXSwgb2JzZXJ2ZXI6IE11dGF0aW9uT2JzZXJ2ZXIpOiB2b2lkID0+IHtcblx0XHRpZiAoISRib2R5Lmhhc0NsYXNzKCd2ZWN0b3Itc3RpY2t5LWhlYWRlci12aXNpYmxlJykpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRjb25zdCBTRUxFQ1RPUjogc3RyaW5nID0gT1BUSU9OUy5sb2dvdXRFbGVtZW50U2VsZWN0b3JPZlZlY3RvcjIwMjJTdGlja3lIZWFkZXI7XG5cdFx0Y29uc3QgZWxlbWVudDogSFRNTEFuY2hvckVsZW1lbnQgfCBudWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihTRUxFQ1RPUik7XG5cdFx0aWYgKCFlbGVtZW50KSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Y29uc3QgZWxlbWVudENsb25lOiBOb2RlID0gZWxlbWVudC5jbG9uZU5vZGUodHJ1ZSk7XG5cdFx0ZWxlbWVudC5yZXBsYWNlV2l0aChlbGVtZW50Q2xvbmUpO1xuXG5cdFx0cmVmcmVzaEV2ZW50TGlzdGVuZXIoJGJvZHkuZmluZChTRUxFQ1RPUiksIChldmVudDogSlF1ZXJ5LkNsaWNrRXZlbnQpOiB2b2lkID0+IHtcblx0XHRcdGNsaWNrTGlzdGVuZXIob3BlbkNvbmZpcm1EaWFsb2csIGV2ZW50KTtcblx0XHR9KTtcblx0XHRvYnNlcnZlci5kaXNjb25uZWN0KCk7XG5cdH07XG5cdGNvbnN0IG11dGF0aW9uT2JzZXJ2ZXI6IE11dGF0aW9uT2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihvYnNlcnZlckNhbGxiYWNrKTtcblx0bXV0YXRpb25PYnNlcnZlci5vYnNlcnZlKCRib2R5LmdldCgwKSA/PyBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsIHtcblx0XHRhdHRyaWJ1dGVzOiB0cnVlLFxuXHRcdGF0dHJpYnV0ZUZpbHRlcjogWydjbGFzcyddLFxuXHR9KTtcbn07XG5cbmV4cG9ydCB7YWRkTGlzdGVuZXJ9O1xuIiwgImltcG9ydCB7bG9jYWxpemV9IGZyb20gJ2V4dC5nYWRnZXQuaTE4bic7XG5cbmNvbnN0IGdldEkxOG5NZXNzYWdlcyA9ICgpID0+IHtcblx0cmV0dXJuIHtcblx0XHQnTmV0d29yayBlcnJvcic6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnTmV0d29yayBlcnJvcicsXG5cdFx0XHRqYTogJ+ODjeODg+ODiOODr+ODvOOCr+OCqOODqeODvCcsXG5cdFx0XHQnemgtaGFucyc6ICfnvZHnu5zlvILluLgnLFxuXHRcdFx0J3poLWhhbnQnOiAn57ay6Lev55Ww5bi4Jyxcblx0XHR9KSxcblx0XHRDb25maXJtOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0NvbmZpcm0gbG9nb3V0PycsXG5cdFx0XHRqYTogJ+ODreOCsOOCouOCpuODiOOBl+OBvuOBmeOBi++8nycsXG5cdFx0XHQnemgtaGFucyc6ICfmgqjnoa7lrpropoHpgIDlh7rlkJfvvJ8nLFxuXHRcdFx0J3poLWhhbnQnOiAn5oKo56K65a6a6KaB55m75Ye65ZeO77yfJyxcblx0XHR9KSxcblx0XHRDb25maXJtQWN0aW9uOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0NvbmZpcm0nLFxuXHRcdFx0amE6ICfnorroqo0nLFxuXHRcdFx0J3poLWhhbnMnOiAn56Gu6K6kJyxcblx0XHRcdCd6aC1oYW50JzogJ+eiuuiqjScsXG5cdFx0fSksXG5cdFx0Q2FuY2VsOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0NhbmNlbCcsXG5cdFx0XHRqYTogJ+OCreODo+ODs+OCu+ODqycsXG5cdFx0XHQnemgtaGFucyc6ICflj5bmtognLFxuXHRcdFx0J3poLWhhbnQnOiAn5Y+W5raIJyxcblx0XHR9KSxcblx0XHRTdWNjZWVkOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0xvZ291dCBzdWNjZWVkLiBSZWZyZXNoaW5nLi4uJyxcblx0XHRcdGphOiAn44Ot44Kw44Ki44Km44OI44Gr5oiQ5Yqf44GX44G+44GX44Gf44CC5YaN6Kqt44G/6L6844G/44GX44G+44GZLi4uJyxcblx0XHRcdCd6aC1oYW5zJzogJ+mAgOWHuuaIkOWKn++8jOWNs+WwhuWIt+aWsOmhtemdouKApuKApicsXG5cdFx0XHQnemgtaGFudCc6ICfnmbvlh7rmiJDlip/vvIzljbPlsIfph43mlrDovInlhaXigKbigKYnLFxuXHRcdH0pLFxuXHR9O1xufTtcblxuY29uc3QgaTE4bk1lc3NhZ2VzID0gZ2V0STE4bk1lc3NhZ2VzKCk7XG5cbmNvbnN0IGdldE1lc3NhZ2U6IEdldE1lc3NhZ2VzPHR5cGVvZiBpMThuTWVzc2FnZXM+ID0gKGtleSkgPT4ge1xuXHRyZXR1cm4gaTE4bk1lc3NhZ2VzW2tleV0gfHwga2V5O1xufTtcblxuZXhwb3J0IHtnZXRNZXNzYWdlfTtcbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge2luaXRNd0FwaX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxuY29uc3QgYXBpOiBtdy5BcGkgPSBpbml0TXdBcGkoYENvbmZpcm1Mb2dvdXQvJHtPUFRJT05TLnZlcnNpb259YCk7XG5cbmV4cG9ydCB7YXBpfTtcbiIsICJpbXBvcnQge2FwaX0gZnJvbSAnLi4vYXBpJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi4vaTE4bic7XG5pbXBvcnQge3RvYXN0aWZ5fSBmcm9tICdleHQuZ2FkZ2V0LlRvYXN0aWZ5JztcblxuY29uc3QgbG9nb3V0ID0gYXN5bmMgKHRvYXN0aWZ5SW5zdGFuY2U6IFRvYXN0aWZ5SW5zdGFuY2UpOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0YXdhaXQgYXBpLnBvc3RXaXRoRWRpdFRva2VuKHtcblx0XHRhY3Rpb246ICdsb2dvdXQnLFxuXHR9KTtcblxuXHR0b2FzdGlmeUluc3RhbmNlLmhpZGVUb2FzdCgpO1xuXHR0b2FzdGlmeShcblx0XHR7XG5cdFx0XHR0ZXh0OiBnZXRNZXNzYWdlKCdTdWNjZWVkJyksXG5cdFx0fSxcblx0XHQnc3VjY2Vzcydcblx0KTtcblxuXHRsb2NhdGlvbi5yZWxvYWQoKTtcbn07XG5cbmV4cG9ydCB7bG9nb3V0fTtcbiIsICJpbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4uL2kxOG4nO1xuaW1wb3J0IHt0b2FzdGlmeX0gZnJvbSAnZXh0LmdhZGdldC5Ub2FzdGlmeSc7XG5cbmNvbnN0IHNob3dFcnJvciA9IChlcnJvcjogdW5rbm93biwgdG9hc3RpZnlJbnN0YW5jZTogVG9hc3RpZnlJbnN0YW5jZSk6IHZvaWQgPT4ge1xuXHRjb25zb2xlLmVycm9yKCdbQ29uZmlybUxvZ291dF0gQWpheCBlcnJvcjonLCBlcnJvcik7XG5cdHRvYXN0aWZ5SW5zdGFuY2UuaGlkZVRvYXN0KCk7XG5cdHRvYXN0aWZ5KFxuXHRcdHtcblx0XHRcdHRleHQ6IGdldE1lc3NhZ2UoJ05ldHdvcmsgZXJyb3InKSxcblx0XHR9LFxuXHRcdCdlcnJvcidcblx0KTtcbn07XG5cbmV4cG9ydCB7c2hvd0Vycm9yfTtcbiIsICJpbXBvcnQge2xvZ291dH0gZnJvbSAnLi91dGlsL2xvZ291dCc7XG5pbXBvcnQge3Nob3dFcnJvcn0gZnJvbSAnLi91dGlsL3Nob3dFcnJvcic7XG5cbmNvbnN0IHRyeUxvZ291dCA9IGFzeW5jICh0b2FzdGlmeUluc3RhbmNlOiBUb2FzdGlmeUluc3RhbmNlKTogUHJvbWlzZTx2b2lkPiA9PiB7XG5cdHRyeSB7XG5cdFx0YXdhaXQgbG9nb3V0KHRvYXN0aWZ5SW5zdGFuY2UpO1xuXHR9IGNhdGNoIChlcnJvcjogdW5rbm93bikge1xuXHRcdHNob3dFcnJvcihlcnJvciwgdG9hc3RpZnlJbnN0YW5jZSk7XG5cdH1cbn07XG5cbmV4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QSxTQUFBLFNBTk1lLFdBQUFFLEtBQUE7QUFBQSxXQUFBRCxNQUFBUCxNQUFBLE1BQUFDLFNBQUE7RUFBQTtBQUFBLEdBQUE7O0FQSU4sSUFBTTtFQUFDUTtBQUFVLElBQUl6RSxHQUFHSyxPQUFPQyxJQUFJO0FBRW5DLE1BQUEsR0FBS2pCLG1CQUFBcUYsU0FBUSxFQUFFQyxLQUFLLFNBQVNDLGNBQWMvRCxPQUFzQztBQUNoRixNQUFJLENBQUM0RCxZQUFZO0FBQ2hCO0VBQ0Q7QUFFQSxRQUFNaEYsV0FBbUJvQixNQUFNYSxLQUFheEMscUJBQXFCO0FBQ2pFLE1BQUksQ0FBQ08sU0FBU29GLFFBQVE7QUFDckI7RUFDRDtBQUVBLFFBQU1yRSxvQkFBQSw0QkFBQTtBQUFBLFFBQUFzRSxRQUFBeEIsa0JBQW9CLGFBQVk7QUFDckMsWUFBTXlCLFlBQUEsT0FBcUIsR0FBTTFGLG1CQUFBMkYsc0JBQXFCcEMsV0FBVyxTQUFTLENBQUM7QUFDM0UsVUFBSSxDQUFDbUMsV0FBVztBQUNmO01BQ0Q7QUFFQSxZQUFNeEIsb0JBQUEsR0FBcUNULG1CQUFBYSxVQUMxQztRQUNDQyxNQUFNNUQsR0FBR2lGLFFBQVEsb0JBQW9CLEVBQUVDLE1BQU07UUFDN0NDLFVBQVU7TUFDWCxHQUNBLE1BQ0Q7QUFDQSxXQUFLYixVQUFVZixnQkFBZ0I7SUFDaEMsQ0FBQTtBQUFBLFdBQUEsU0FkTS9DLHFCQUFBO0FBQUEsYUFBQXNFLE1BQUFkLE1BQUEsTUFBQUMsU0FBQTtJQUFBO0VBQUEsR0FBQTtBQWdCTnRELGNBQVlsQixVQUFVZSxpQkFBaUI7QUFDeEMsQ0FBQzsiLAogICJuYW1lcyI6IFsibG9nb3V0RWxlbWVudFNlbGVjdG9yIiwgImxvZ291dEVsZW1lbnRTZWxlY3Rvck9mVmVjdG9yMjAyMlN0aWNreUhlYWRlciIsICJ2ZXJzaW9uIiwgImltcG9ydF9leHRfZ2FkZ2V0NiIsICJyZXF1aXJlIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgInJlZnJlc2hFdmVudExpc3RlbmVyIiwgIiRlbGVtZW50IiwgImNsaWNrTGlzdGVuZXIyIiwgImhvdmVyTGlzdGVuZXIiLCAib2ZmIiwgIm9uIiwgImZpbHRlckFsdGVyZWRDbGlja3MiLCAiaG92ZXJMaXN0ZW5lcldpdGhEZWJvdW5jZSIsICJtdyIsICJ1dGlsIiwgImRlYm91bmNlIiwgInBhc3NpdmUiLCAic2tpbiIsICJjb25maWciLCAiZ2V0IiwgImNsaWNrTGlzdGVuZXIiLCAib3BlbkNvbmZpcm1EaWFsb2ciLCAiZXZlbnQiLCAicHJldmVudERlZmF1bHQiLCAiYWRkTGlzdGVuZXIiLCAiXyRib2R5JGdldCIsICIkYm9keSIsICJwYXJlbnRzIiwgIm9ic2VydmVyQ2FsbGJhY2siLCAiX211dGF0aW9ucyIsICJvYnNlcnZlciIsICJoYXNDbGFzcyIsICJTRUxFQ1RPUiIsICJlbGVtZW50IiwgImRvY3VtZW50IiwgInF1ZXJ5U2VsZWN0b3IiLCAiZWxlbWVudENsb25lIiwgImNsb25lTm9kZSIsICJyZXBsYWNlV2l0aCIsICJmaW5kIiwgImRpc2Nvbm5lY3QiLCAibXV0YXRpb25PYnNlcnZlciIsICJNdXRhdGlvbk9ic2VydmVyIiwgIm9ic2VydmUiLCAiZG9jdW1lbnRFbGVtZW50IiwgImF0dHJpYnV0ZXMiLCAiYXR0cmlidXRlRmlsdGVyIiwgImltcG9ydF9leHRfZ2FkZ2V0MiIsICJnZXRJMThuTWVzc2FnZXMiLCAibG9jYWxpemUiLCAiZW4iLCAiamEiLCAiQ29uZmlybSIsICJDb25maXJtQWN0aW9uIiwgIkNhbmNlbCIsICJTdWNjZWVkIiwgImkxOG5NZXNzYWdlcyIsICJnZXRNZXNzYWdlIiwgImtleSIsICJpbXBvcnRfZXh0X2dhZGdldDciLCAiaW1wb3J0X2V4dF9nYWRnZXQzIiwgImFwaSIsICJpbml0TXdBcGkiLCAiY29uY2F0IiwgImltcG9ydF9leHRfZ2FkZ2V0NCIsICJsb2dvdXQiLCAiX3JlZiIsICJfYXN5bmNUb0dlbmVyYXRvciIsICJ0b2FzdGlmeUluc3RhbmNlIiwgInBvc3RXaXRoRWRpdFRva2VuIiwgImFjdGlvbiIsICJoaWRlVG9hc3QiLCAidG9hc3RpZnkiLCAidGV4dCIsICJsb2NhdGlvbiIsICJyZWxvYWQiLCAiX3giLCAiYXBwbHkiLCAiYXJndW1lbnRzIiwgImltcG9ydF9leHRfZ2FkZ2V0NSIsICJzaG93RXJyb3IiLCAiZXJyb3IiLCAiY29uc29sZSIsICJ0cnlMb2dvdXQiLCAiX3JlZjIiLCAiX3gyIiwgIndnVXNlck5hbWUiLCAiZ2V0Qm9keSIsICJ0aGVuIiwgImNvbmZpcm1Mb2dvdXQiLCAibGVuZ3RoIiwgIl9yZWYzIiwgImlzQ29uZmlybSIsICJvb3VpQ29uZmlybVdpdGhTdHlsZSIsICJtZXNzYWdlIiwgInBhcnNlIiwgImR1cmF0aW9uIl0KfQo=

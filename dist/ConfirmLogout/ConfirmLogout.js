/**
 * SPDX-License-Identifier: GPL-3.0
 * _addText: '{{Gadget Header|license=GPL-3.0}}'
 *
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/ConfirmLogout}
 * @author 安忆 <i@anyi.in>
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
var logoutElementSelector = '#ca-cb-logout>a,#topbar>a[href*="UserLogout"],#pt-logout>a';
var logoutElementSelectorOfVector2022StickyHeader = "#pt-logout-sticky-header>a";
var version = "3.0";
//! src/ConfirmLogout/modules/constant.ts
var WG_SKIN = mw.config.get("skin");
var WG_USER_NAME = mw.config.get("wgUserName");
var WG_WIKI_ID = mw.config.get("wgWikiID");
//! src/ConfirmLogout/modules/i18n.ts
var import_ext_gadget = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    "Network error": (0, import_ext_gadget.localize)({
      en: "Network error",
      ja: "ネットワークエラー",
      "zh-hans": "网络异常",
      "zh-hant": "網路異常"
    }),
    Confirm: (0, import_ext_gadget.localize)({
      en: "Confirm logout?",
      ja: "ログアウトしますか？",
      "zh-hans": "您确定要退出吗？",
      "zh-hant": "您確定要登出嗎？"
    }),
    Succeed: (0, import_ext_gadget.localize)({
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
//! src/ConfirmLogout/modules/addListener.ts
var import_ext_gadget6 = require("ext.gadget.Util");
//! src/ConfirmLogout/modules/util/refreshEventListener.ts
var import_ext_gadget2 = require("ext.gadget.FilterAlteredClicks");
var refreshEventListener = ($element, clickListener2) => {
  const hoverListener = () => {
    $element.off("click");
    $element.on("click", (0, import_ext_gadget2.filterAlteredClicks)((event) => {
      clickListener2(event);
    }));
  };
  const hoverListenerWithDebounce = mw.util.debounce(hoverListener, 200, true);
  $element.on("mouseover touchstart", hoverListenerWithDebounce);
};
//! src/ConfirmLogout/modules/addListener.ts
var import_ext_gadget7 = require("ext.gadget.Toastify");
//! src/ConfirmLogout/modules/api.ts
var import_ext_gadget3 = require("ext.gadget.Util");
var api = (0, import_ext_gadget3.initMwApi)("Qiuwen/1.1 (ConfirmLogout/".concat(version, "; ").concat(WG_WIKI_ID, ")"));
//! src/ConfirmLogout/modules/util/logout.ts
var import_ext_gadget4 = require("ext.gadget.Toastify");
var logout = /* @__PURE__ */ function() {
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
}();
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
var tryLogout = /* @__PURE__ */ function() {
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
}();
//! src/ConfirmLogout/modules/addListener.ts
var clickListener = /* @__PURE__ */ function() {
  var _ref3 = _asyncToGenerator(function* (event) {
    event.preventDefault();
    const isConfirm = yield (0, import_ext_gadget6.oouiConfirmWithStyle)(getMessage("Confirm"));
    if (!isConfirm) {
      return;
    }
    const toastifyInstance = (0, import_ext_gadget7.toastify)({
      text: mw.message("logging-out-notify").toString(),
      duration: -1
    }, "info");
    void tryLogout(toastifyInstance);
  });
  return function clickListener2(_x3) {
    return _ref3.apply(this, arguments);
  };
}();
var addListener = ($element) => {
  var _$body$get;
  refreshEventListener($element, (event) => {
    void clickListener(event);
  });
  if (WG_SKIN !== "vector-2022") {
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
      void clickListener(event);
    });
    observer.disconnect();
  };
  const mutationObserver = new MutationObserver(observerCallback);
  mutationObserver.observe((_$body$get = $body.get(0)) !== null && _$body$get !== void 0 ? _$body$get : document.documentElement, {
    attributes: true,
    attributeFilter: ["class"]
  });
};
//! src/ConfirmLogout/ConfirmLogout.ts
var import_ext_gadget8 = require("ext.gadget.Util");
void (0, import_ext_gadget8.getBody)().then(function confirmLogout($body) {
  if (!WG_USER_NAME) {
    return;
  }
  const $element = $body.find(logoutElementSelector);
  if (!$element.length) {
    return;
  }
  addListener($element);
});
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0NvbmZpcm1Mb2dvdXQvb3B0aW9ucy5qc29uIiwgInNyYy9Db25maXJtTG9nb3V0L21vZHVsZXMvY29uc3RhbnQudHMiLCAic3JjL0NvbmZpcm1Mb2dvdXQvbW9kdWxlcy9pMThuLnRzIiwgInNyYy9Db25maXJtTG9nb3V0L21vZHVsZXMvYWRkTGlzdGVuZXIudHMiLCAic3JjL0NvbmZpcm1Mb2dvdXQvbW9kdWxlcy91dGlsL3JlZnJlc2hFdmVudExpc3RlbmVyLnRzIiwgInNyYy9Db25maXJtTG9nb3V0L21vZHVsZXMvYXBpLnRzIiwgInNyYy9Db25maXJtTG9nb3V0L21vZHVsZXMvdXRpbC9sb2dvdXQudHMiLCAic3JjL0NvbmZpcm1Mb2dvdXQvbW9kdWxlcy91dGlsL3Nob3dFcnJvci50cyIsICJzcmMvQ29uZmlybUxvZ291dC9tb2R1bGVzL3RyeUxvZ291dC50cyIsICJzcmMvQ29uZmlybUxvZ291dC9Db25maXJtTG9nb3V0LnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJ7XG5cdFwibG9nb3V0RWxlbWVudFNlbGVjdG9yXCI6IFwiI2NhLWNiLWxvZ291dD5hLCN0b3BiYXI+YVtocmVmKj1cXFwiVXNlckxvZ291dFxcXCJdLCNwdC1sb2dvdXQ+YVwiLFxuXHRcImxvZ291dEVsZW1lbnRTZWxlY3Rvck9mVmVjdG9yMjAyMlN0aWNreUhlYWRlclwiOiBcIiNwdC1sb2dvdXQtc3RpY2t5LWhlYWRlcj5hXCIsXG5cdFwidmVyc2lvblwiOiBcIjMuMFwiXG59XG4iLCAiY29uc3QgV0dfU0tJTjogc3RyaW5nID0gbXcuY29uZmlnLmdldCgnc2tpbicpO1xuY29uc3QgV0dfVVNFUl9OQU1FOiBzdHJpbmcgfCBudWxsID0gbXcuY29uZmlnLmdldCgnd2dVc2VyTmFtZScpO1xuY29uc3QgV0dfV0lLSV9JRDogc3RyaW5nID0gbXcuY29uZmlnLmdldCgnd2dXaWtpSUQnKTtcblxuZXhwb3J0IHtXR19TS0lOLCBXR19VU0VSX05BTUUsIFdHX1dJS0lfSUR9O1xuIiwgImltcG9ydCB7bG9jYWxpemV9IGZyb20gJ2V4dC5nYWRnZXQuaTE4bic7XG5cbmNvbnN0IGdldEkxOG5NZXNzYWdlcyA9ICgpID0+IHtcblx0cmV0dXJuIHtcblx0XHQnTmV0d29yayBlcnJvcic6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnTmV0d29yayBlcnJvcicsXG5cdFx0XHRqYTogJ+ODjeODg+ODiOODr+ODvOOCr+OCqOODqeODvCcsXG5cdFx0XHQnemgtaGFucyc6ICfnvZHnu5zlvILluLgnLFxuXHRcdFx0J3poLWhhbnQnOiAn57ay6Lev55Ww5bi4Jyxcblx0XHR9KSxcblx0XHRDb25maXJtOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0NvbmZpcm0gbG9nb3V0PycsXG5cdFx0XHRqYTogJ+ODreOCsOOCouOCpuODiOOBl+OBvuOBmeOBi++8nycsXG5cdFx0XHQnemgtaGFucyc6ICfmgqjnoa7lrpropoHpgIDlh7rlkJfvvJ8nLFxuXHRcdFx0J3poLWhhbnQnOiAn5oKo56K65a6a6KaB55m75Ye65ZeO77yfJyxcblx0XHR9KSxcblx0XHRTdWNjZWVkOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0xvZ291dCBzdWNjZWVkLiBSZWZyZXNoaW5nLi4uJyxcblx0XHRcdGphOiAn44Ot44Kw44Ki44Km44OI44Gr5oiQ5Yqf44GX44G+44GX44Gf44CC5YaN6Kqt44G/6L6844G/44GX44G+44GZLi4uJyxcblx0XHRcdCd6aC1oYW5zJzogJ+mAgOWHuuaIkOWKn++8jOWNs+WwhuWIt+aWsOmhtemdouKApuKApicsXG5cdFx0XHQnemgtaGFudCc6ICfnmbvlh7rmiJDlip/vvIzljbPlsIfph43mlrDovInlhaXigKbigKYnLFxuXHRcdH0pLFxuXHR9O1xufTtcblxuY29uc3QgaTE4bk1lc3NhZ2VzID0gZ2V0STE4bk1lc3NhZ2VzKCk7XG5cbmNvbnN0IGdldE1lc3NhZ2U6IEdldE1lc3NhZ2VzPHR5cGVvZiBpMThuTWVzc2FnZXM+ID0gKGtleSkgPT4ge1xuXHRyZXR1cm4gaTE4bk1lc3NhZ2VzW2tleV0gfHwga2V5O1xufTtcblxuZXhwb3J0IHtnZXRNZXNzYWdlfTtcbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge1dHX1NLSU59IGZyb20gJy4vY29uc3RhbnQnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL2kxOG4nO1xuaW1wb3J0IHtvb3VpQ29uZmlybVdpdGhTdHlsZX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbmltcG9ydCB7cmVmcmVzaEV2ZW50TGlzdGVuZXJ9IGZyb20gJy4vdXRpbC9yZWZyZXNoRXZlbnRMaXN0ZW5lcic7XG5pbXBvcnQge3RvYXN0aWZ5fSBmcm9tICdleHQuZ2FkZ2V0LlRvYXN0aWZ5JztcbmltcG9ydCB7dHJ5TG9nb3V0fSBmcm9tICcuL3RyeUxvZ291dCc7XG5cbmNvbnN0IGNsaWNrTGlzdGVuZXIgPSBhc3luYyAoZXZlbnQ6IEpRdWVyeS5DbGlja0V2ZW50KTogUHJvbWlzZTx2b2lkPiA9PiB7XG5cdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cblx0Y29uc3QgaXNDb25maXJtOiBib29sZWFuID0gYXdhaXQgb291aUNvbmZpcm1XaXRoU3R5bGUoZ2V0TWVzc2FnZSgnQ29uZmlybScpKTtcblx0aWYgKCFpc0NvbmZpcm0pIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCB0b2FzdGlmeUluc3RhbmNlOiBUb2FzdGlmeUluc3RhbmNlID0gdG9hc3RpZnkoXG5cdFx0e1xuXHRcdFx0dGV4dDogbXcubWVzc2FnZSgnbG9nZ2luZy1vdXQtbm90aWZ5JykudG9TdHJpbmcoKSxcblx0XHRcdGR1cmF0aW9uOiAtMSxcblx0XHR9LFxuXHRcdCdpbmZvJ1xuXHQpO1xuXHR2b2lkIHRyeUxvZ291dCh0b2FzdGlmeUluc3RhbmNlKTtcbn07XG5cbmNvbnN0IGFkZExpc3RlbmVyID0gKCRlbGVtZW50OiBKUXVlcnkpOiB2b2lkID0+IHtcblx0cmVmcmVzaEV2ZW50TGlzdGVuZXIoJGVsZW1lbnQsIChldmVudDogSlF1ZXJ5LkNsaWNrRXZlbnQpOiB2b2lkID0+IHtcblx0XHR2b2lkIGNsaWNrTGlzdGVuZXIoZXZlbnQpO1xuXHR9KTtcblxuXHRpZiAoV0dfU0tJTiAhPT0gJ3ZlY3Rvci0yMDIyJykge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0ICRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50PiA9ICRlbGVtZW50LnBhcmVudHMoJ2JvZHknKTtcblxuXHRjb25zdCBvYnNlcnZlckNhbGxiYWNrID0gKF9tdXRhdGlvbnM6IE11dGF0aW9uUmVjb3JkW10sIG9ic2VydmVyOiBNdXRhdGlvbk9ic2VydmVyKTogdm9pZCA9PiB7XG5cdFx0aWYgKCEkYm9keS5oYXNDbGFzcygndmVjdG9yLXN0aWNreS1oZWFkZXItdmlzaWJsZScpKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Y29uc3QgU0VMRUNUT1I6IHN0cmluZyA9IE9QVElPTlMubG9nb3V0RWxlbWVudFNlbGVjdG9yT2ZWZWN0b3IyMDIyU3RpY2t5SGVhZGVyO1xuXHRcdGNvbnN0IGVsZW1lbnQ6IEhUTUxBbmNob3JFbGVtZW50IHwgbnVsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoU0VMRUNUT1IpO1xuXHRcdGlmICghZWxlbWVudCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGNvbnN0IGVsZW1lbnRDbG9uZTogTm9kZSA9IGVsZW1lbnQuY2xvbmVOb2RlKHRydWUpO1xuXHRcdGVsZW1lbnQucmVwbGFjZVdpdGgoZWxlbWVudENsb25lKTtcblxuXHRcdHJlZnJlc2hFdmVudExpc3RlbmVyKCRib2R5LmZpbmQoU0VMRUNUT1IpLCAoZXZlbnQ6IEpRdWVyeS5DbGlja0V2ZW50KTogdm9pZCA9PiB7XG5cdFx0XHR2b2lkIGNsaWNrTGlzdGVuZXIoZXZlbnQpO1xuXHRcdH0pO1xuXHRcdG9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcblx0fTtcblx0Y29uc3QgbXV0YXRpb25PYnNlcnZlcjogTXV0YXRpb25PYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKG9ic2VydmVyQ2FsbGJhY2spO1xuXHRtdXRhdGlvbk9ic2VydmVyLm9ic2VydmUoJGJvZHkuZ2V0KDApID8/IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCwge1xuXHRcdGF0dHJpYnV0ZXM6IHRydWUsXG5cdFx0YXR0cmlidXRlRmlsdGVyOiBbJ2NsYXNzJ10sXG5cdH0pO1xufTtcblxuZXhwb3J0IHthZGRMaXN0ZW5lcn07XG4iLCAiaW1wb3J0IHtmaWx0ZXJBbHRlcmVkQ2xpY2tzfSBmcm9tICdleHQuZ2FkZ2V0LkZpbHRlckFsdGVyZWRDbGlja3MnO1xuXG5jb25zdCByZWZyZXNoRXZlbnRMaXN0ZW5lciA9ICgkZWxlbWVudDogSlF1ZXJ5LCBjbGlja0xpc3RlbmVyOiAoZXZlbnQ6IEpRdWVyeS5DbGlja0V2ZW50KSA9PiB2b2lkKTogdm9pZCA9PiB7XG5cdGNvbnN0IGhvdmVyTGlzdGVuZXIgPSAoKTogdm9pZCA9PiB7XG5cdFx0JGVsZW1lbnQub2ZmKCdjbGljaycpO1xuXHRcdCRlbGVtZW50Lm9uKFxuXHRcdFx0J2NsaWNrJyxcblx0XHRcdGZpbHRlckFsdGVyZWRDbGlja3MoKGV2ZW50OiBKUXVlcnkuQ2xpY2tFdmVudCk6IHZvaWQgPT4ge1xuXHRcdFx0XHRjbGlja0xpc3RlbmVyKGV2ZW50KTtcblx0XHRcdH0pXG5cdFx0KTtcblx0fTtcblx0Y29uc3QgaG92ZXJMaXN0ZW5lcldpdGhEZWJvdW5jZTogdHlwZW9mIGhvdmVyTGlzdGVuZXIgPSBtdy51dGlsLmRlYm91bmNlKGhvdmVyTGlzdGVuZXIsIDIwMCwgdHJ1ZSk7XG5cblx0JGVsZW1lbnQub24oJ21vdXNlb3ZlciB0b3VjaHN0YXJ0JywgaG92ZXJMaXN0ZW5lcldpdGhEZWJvdW5jZSk7XG59O1xuXG5leHBvcnQge3JlZnJlc2hFdmVudExpc3RlbmVyfTtcbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge1dHX1dJS0lfSUR9IGZyb20gJy4vY29uc3RhbnQnO1xuaW1wb3J0IHtpbml0TXdBcGl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmNvbnN0IGFwaTogbXcuQXBpID0gaW5pdE13QXBpKGBRaXV3ZW4vMS4xIChDb25maXJtTG9nb3V0LyR7T1BUSU9OUy52ZXJzaW9ufTsgJHtXR19XSUtJX0lEfSlgKTtcblxuZXhwb3J0IHthcGl9O1xuIiwgImltcG9ydCB7YXBpfSBmcm9tICcuLi9hcGknO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuLi9pMThuJztcbmltcG9ydCB7dG9hc3RpZnl9IGZyb20gJ2V4dC5nYWRnZXQuVG9hc3RpZnknO1xuXG5jb25zdCBsb2dvdXQgPSBhc3luYyAodG9hc3RpZnlJbnN0YW5jZTogVG9hc3RpZnlJbnN0YW5jZSk6IFByb21pc2U8dm9pZD4gPT4ge1xuXHRhd2FpdCBhcGkucG9zdFdpdGhFZGl0VG9rZW4oe1xuXHRcdGFjdGlvbjogJ2xvZ291dCcsXG5cdH0pO1xuXG5cdHRvYXN0aWZ5SW5zdGFuY2UuaGlkZVRvYXN0KCk7XG5cdHRvYXN0aWZ5KFxuXHRcdHtcblx0XHRcdHRleHQ6IGdldE1lc3NhZ2UoJ1N1Y2NlZWQnKSxcblx0XHR9LFxuXHRcdCdzdWNjZXNzJ1xuXHQpO1xuXG5cdGxvY2F0aW9uLnJlbG9hZCgpO1xufTtcblxuZXhwb3J0IHtsb2dvdXR9O1xuIiwgImltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi4vaTE4bic7XG5pbXBvcnQge3RvYXN0aWZ5fSBmcm9tICdleHQuZ2FkZ2V0LlRvYXN0aWZ5JztcblxuY29uc3Qgc2hvd0Vycm9yID0gKGVycm9yOiB1bmtub3duLCB0b2FzdGlmeUluc3RhbmNlOiBUb2FzdGlmeUluc3RhbmNlKTogdm9pZCA9PiB7XG5cdGNvbnNvbGUuZXJyb3IoJ1tDb25maXJtTG9nb3V0XSBBamF4IGVycm9yOicsIGVycm9yKTtcblx0dG9hc3RpZnlJbnN0YW5jZS5oaWRlVG9hc3QoKTtcblx0dG9hc3RpZnkoXG5cdFx0e1xuXHRcdFx0dGV4dDogZ2V0TWVzc2FnZSgnTmV0d29yayBlcnJvcicpLFxuXHRcdH0sXG5cdFx0J2Vycm9yJ1xuXHQpO1xufTtcblxuZXhwb3J0IHtzaG93RXJyb3J9O1xuIiwgImltcG9ydCB7bG9nb3V0fSBmcm9tICcuL3V0aWwvbG9nb3V0JztcbmltcG9ydCB7c2hvd0Vycm9yfSBmcm9tICcuL3V0aWwvc2hvd0Vycm9yJztcblxuY29uc3QgdHJ5TG9nb3V0ID0gYXN5bmMgKHRvYXN0aWZ5SW5zdGFuY2U6IFRvYXN0aWZ5SW5zdGFuY2UpOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0dHJ5IHtcblx0XHRhd2FpdCBsb2dvdXQodG9hc3RpZnlJbnN0YW5jZSk7XG5cdH0gY2F0Y2ggKGVycm9yOiB1bmtub3duKSB7XG5cdFx0c2hvd0Vycm9yKGVycm9yLCB0b2FzdGlmeUluc3RhbmNlKTtcblx0fVxufTtcblxuZXhwb3J0IHt0cnlMb2dvdXR9O1xuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtXR19VU0VSX05BTUV9IGZyb20gJy4vbW9kdWxlcy9jb25zdGFudCc7XG5pbXBvcnQge2FkZExpc3RlbmVyfSBmcm9tICcuL21vZHVsZXMvYWRkTGlzdGVuZXInO1xuaW1wb3J0IHtnZXRCb2R5fSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG52b2lkIGdldEJvZHkoKS50aGVuKGZ1bmN0aW9uIGNvbmZpcm1Mb2dvdXQoJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KTogdm9pZCB7XG5cdGlmICghV0dfVVNFUl9OQU1FKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgJGVsZW1lbnQ6IEpRdWVyeSA9ICRib2R5LmZpbmQoT1BUSU9OUy5sb2dvdXRFbGVtZW50U2VsZWN0b3IpO1xuXHRpZiAoISRlbGVtZW50Lmxlbmd0aCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGFkZExpc3RlbmVyKCRlbGVtZW50KTtcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0MsSUFBQUEsd0JBQXlCO0FBQ3pCLElBQUFDLGdEQUFpRDtBQUNqRCxJQUFBQyxVQUFXOztBQ0haLElBQU1DLFVBQWtCQyxHQUFHQyxPQUFPQyxJQUFJLE1BQU07QUFDNUMsSUFBTUMsZUFBOEJILEdBQUdDLE9BQU9DLElBQUksWUFBWTtBQUM5RCxJQUFNRSxhQUFxQkosR0FBR0MsT0FBT0MsSUFBSSxVQUFVOztBQ0ZuRCxJQUFBRyxvQkFBdUJDLFFBQUEsaUJBQUE7QUFFdkIsSUFBTUMsa0JBQWtCQSxNQUFNO0FBQzdCLFNBQU87SUFDTixrQkFBQSxHQUFpQkYsa0JBQUFHLFVBQVM7TUFDekJDLElBQUk7TUFDSkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNEQyxVQUFBLEdBQVNOLGtCQUFBRyxVQUFTO01BQ2pCQyxJQUFJO01BQ0pDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDREUsVUFBQSxHQUFTUCxrQkFBQUcsVUFBUztNQUNqQkMsSUFBSTtNQUNKQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0VBQ0Y7QUFDRDtBQUVBLElBQU1HLGVBQWVOLGdCQUFnQjtBQUVyQyxJQUFNTyxhQUFnREMsU0FBUTtBQUM3RCxTQUFPRixhQUFhRSxHQUFHLEtBQUtBO0FBQzdCOztBQzFCQSxJQUFBQyxxQkFBbUNWLFFBQUEsaUJBQUE7O0FDSG5DLElBQUFXLHFCQUFrQ1gsUUFBQSxnQ0FBQTtBQUVsQyxJQUFNWSx1QkFBdUJBLENBQUNDLFVBQWtCQyxtQkFBNEQ7QUFDM0csUUFBTUMsZ0JBQWdCQSxNQUFZO0FBQ2pDRixhQUFTRyxJQUFJLE9BQU87QUFDcEJILGFBQVNJLEdBQ1IsVUFBQSxHQUNBTixtQkFBQU8scUJBQXFCQyxXQUFtQztBQUN2REwscUJBQWNLLEtBQUs7SUFDcEIsQ0FBQyxDQUNGO0VBQ0Q7QUFDQSxRQUFNQyw0QkFBa0QxQixHQUFHMkIsS0FBS0MsU0FBU1AsZUFBZSxLQUFLLElBQUk7QUFFakdGLFdBQVNJLEdBQUcsd0JBQXdCRyx5QkFBeUI7QUFDOUQ7O0FEVkEsSUFBQUcscUJBQXVCdkIsUUFBQSxxQkFBQTs7QUVIdkIsSUFBQXdCLHFCQUF3QnhCLFFBQUEsaUJBQUE7QUFFeEIsSUFBTXlCLE9BQUEsR0FBY0QsbUJBQUFFLFdBQUEsNkJBQUFDLE9BQStDbkMsU0FBTyxJQUFBLEVBQUFtQyxPQUFLN0IsWUFBVSxHQUFBLENBQUc7O0FDRjVGLElBQUE4QixxQkFBdUI1QixRQUFBLHFCQUFBO0FBRXZCLElBQU02QixTQUFBLDJCQUFBO0FBQUEsTUFBQUMsT0FBQUMsa0JBQVMsV0FBT0Msa0JBQXNEO0FBQzNFLFVBQU1QLElBQUlRLGtCQUFrQjtNQUMzQkMsUUFBUTtJQUNULENBQUM7QUFFREYscUJBQWlCRyxVQUFVO0FBQzNCLEtBQUEsR0FBQVAsbUJBQUFRLFVBQ0M7TUFDQ0MsTUFBTTdCLFdBQVcsU0FBUztJQUMzQixHQUNBLFNBQ0Q7QUFFQThCLGFBQVNDLE9BQU87RUFDakIsQ0FBQTtBQUFBLFNBQUEsU0FkTVYsUUFBQVcsSUFBQTtBQUFBLFdBQUFWLEtBQUFXLE1BQUEsTUFBQUMsU0FBQTtFQUFBO0FBQUEsRUFBQTs7QUNITixJQUFBQyxxQkFBdUIzQyxRQUFBLHFCQUFBO0FBRXZCLElBQU00QyxZQUFZQSxDQUFDQyxPQUFnQmIscUJBQTZDO0FBQy9FYyxVQUFRRCxNQUFNLCtCQUErQkEsS0FBSztBQUNsRGIsbUJBQWlCRyxVQUFVO0FBQzNCLEdBQUEsR0FBQVEsbUJBQUFQLFVBQ0M7SUFDQ0MsTUFBTTdCLFdBQVcsZUFBZTtFQUNqQyxHQUNBLE9BQ0Q7QUFDRDs7QUNUQSxJQUFNdUMsWUFBQSwyQkFBQTtBQUFBLE1BQUFDLFFBQUFqQixrQkFBWSxXQUFPQyxrQkFBc0Q7QUFDOUUsUUFBSTtBQUNILFlBQU1ILE9BQU9HLGdCQUFnQjtJQUM5QixTQUFTYSxPQUFnQjtBQUN4QkQsZ0JBQVVDLE9BQU9iLGdCQUFnQjtJQUNsQztFQUNELENBQUE7QUFBQSxTQUFBLFNBTk1lLFdBQUFFLEtBQUE7QUFBQSxXQUFBRCxNQUFBUCxNQUFBLE1BQUFDLFNBQUE7RUFBQTtBQUFBLEVBQUE7O0FMS04sSUFBTVEsZ0JBQUEsMkJBQUE7QUFBQSxNQUFBQyxRQUFBcEIsa0JBQWdCLFdBQU9aLE9BQTRDO0FBQ3hFQSxVQUFNaUMsZUFBZTtBQUVyQixVQUFNQyxZQUFBLE9BQXFCLEdBQU0zQyxtQkFBQTRDLHNCQUFxQjlDLFdBQVcsU0FBUyxDQUFDO0FBQzNFLFFBQUksQ0FBQzZDLFdBQVc7QUFDZjtJQUNEO0FBRUEsVUFBTXJCLG9CQUFBLEdBQXFDVCxtQkFBQWEsVUFDMUM7TUFDQ0MsTUFBTTNDLEdBQUc2RCxRQUFRLG9CQUFvQixFQUFFQyxTQUFTO01BQ2hEQyxVQUFVO0lBQ1gsR0FDQSxNQUNEO0FBQ0EsU0FBS1YsVUFBVWYsZ0JBQWdCO0VBQ2hDLENBQUE7QUFBQSxTQUFBLFNBaEJNa0IsZUFBQVEsS0FBQTtBQUFBLFdBQUFQLE1BQUFWLE1BQUEsTUFBQUMsU0FBQTtFQUFBO0FBQUEsRUFBQTtBQWtCTixJQUFNaUIsY0FBZTlDLGNBQTJCO0FBQUEsTUFBQStDO0FBQy9DaEQsdUJBQXFCQyxVQUFXTSxXQUFtQztBQUNsRSxTQUFLK0IsY0FBYy9CLEtBQUs7RUFDekIsQ0FBQztBQUVELE1BQUkxQixZQUFZLGVBQWU7QUFDOUI7RUFDRDtBQUVBLFFBQU1vRSxRQUFpQ2hELFNBQVNpRCxRQUFRLE1BQU07QUFFOUQsUUFBTUMsbUJBQW1CQSxDQUFDQyxZQUE4QkMsYUFBcUM7QUFDNUYsUUFBSSxDQUFDSixNQUFNSyxTQUFTLDhCQUE4QixHQUFHO0FBQ3BEO0lBQ0Q7QUFFQSxVQUFNQyxXQUEyQjVFO0FBQ2pDLFVBQU02RSxVQUFvQ0MsU0FBU0MsY0FBY0gsUUFBUTtBQUN6RSxRQUFJLENBQUNDLFNBQVM7QUFDYjtJQUNEO0FBRUEsVUFBTUcsZUFBcUJILFFBQVFJLFVBQVUsSUFBSTtBQUNqREosWUFBUUssWUFBWUYsWUFBWTtBQUVoQzNELHlCQUFxQmlELE1BQU1hLEtBQUtQLFFBQVEsR0FBSWhELFdBQW1DO0FBQzlFLFdBQUsrQixjQUFjL0IsS0FBSztJQUN6QixDQUFDO0FBQ0Q4QyxhQUFTVSxXQUFXO0VBQ3JCO0FBQ0EsUUFBTUMsbUJBQXFDLElBQUlDLGlCQUFpQmQsZ0JBQWdCO0FBQ2hGYSxtQkFBaUJFLFNBQUFsQixhQUFRQyxNQUFNakUsSUFBSSxDQUFDLE9BQUEsUUFBQWdFLGVBQUEsU0FBQUEsYUFBS1MsU0FBU1UsaUJBQWlCO0lBQ2xFQyxZQUFZO0lBQ1pDLGlCQUFpQixDQUFDLE9BQU87RUFDMUIsQ0FBQztBQUNGOztBTTFEQSxJQUFBQyxxQkFBc0JsRixRQUFBLGlCQUFBO0FBRXRCLE1BQUEsR0FBS2tGLG1CQUFBQyxTQUFRLEVBQUVDLEtBQUssU0FBU0MsY0FBY3hCLE9BQXNDO0FBQ2hGLE1BQUksQ0FBQ2hFLGNBQWM7QUFDbEI7RUFDRDtBQUVBLFFBQU1nQixXQUFtQmdELE1BQU1hLEtBQWFwRixxQkFBcUI7QUFDakUsTUFBSSxDQUFDdUIsU0FBU3lFLFFBQVE7QUFDckI7RUFDRDtBQUVBM0IsY0FBWTlDLFFBQVE7QUFDckIsQ0FBQzsiLAogICJuYW1lcyI6IFsibG9nb3V0RWxlbWVudFNlbGVjdG9yIiwgImxvZ291dEVsZW1lbnRTZWxlY3Rvck9mVmVjdG9yMjAyMlN0aWNreUhlYWRlciIsICJ2ZXJzaW9uIiwgIldHX1NLSU4iLCAibXciLCAiY29uZmlnIiwgImdldCIsICJXR19VU0VSX05BTUUiLCAiV0dfV0lLSV9JRCIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJyZXF1aXJlIiwgImdldEkxOG5NZXNzYWdlcyIsICJsb2NhbGl6ZSIsICJlbiIsICJqYSIsICJDb25maXJtIiwgIlN1Y2NlZWQiLCAiaTE4bk1lc3NhZ2VzIiwgImdldE1lc3NhZ2UiLCAia2V5IiwgImltcG9ydF9leHRfZ2FkZ2V0NiIsICJpbXBvcnRfZXh0X2dhZGdldDIiLCAicmVmcmVzaEV2ZW50TGlzdGVuZXIiLCAiJGVsZW1lbnQiLCAiY2xpY2tMaXN0ZW5lcjIiLCAiaG92ZXJMaXN0ZW5lciIsICJvZmYiLCAib24iLCAiZmlsdGVyQWx0ZXJlZENsaWNrcyIsICJldmVudCIsICJob3Zlckxpc3RlbmVyV2l0aERlYm91bmNlIiwgInV0aWwiLCAiZGVib3VuY2UiLCAiaW1wb3J0X2V4dF9nYWRnZXQ3IiwgImltcG9ydF9leHRfZ2FkZ2V0MyIsICJhcGkiLCAiaW5pdE13QXBpIiwgImNvbmNhdCIsICJpbXBvcnRfZXh0X2dhZGdldDQiLCAibG9nb3V0IiwgIl9yZWYiLCAiX2FzeW5jVG9HZW5lcmF0b3IiLCAidG9hc3RpZnlJbnN0YW5jZSIsICJwb3N0V2l0aEVkaXRUb2tlbiIsICJhY3Rpb24iLCAiaGlkZVRvYXN0IiwgInRvYXN0aWZ5IiwgInRleHQiLCAibG9jYXRpb24iLCAicmVsb2FkIiwgIl94IiwgImFwcGx5IiwgImFyZ3VtZW50cyIsICJpbXBvcnRfZXh0X2dhZGdldDUiLCAic2hvd0Vycm9yIiwgImVycm9yIiwgImNvbnNvbGUiLCAidHJ5TG9nb3V0IiwgIl9yZWYyIiwgIl94MiIsICJjbGlja0xpc3RlbmVyIiwgIl9yZWYzIiwgInByZXZlbnREZWZhdWx0IiwgImlzQ29uZmlybSIsICJvb3VpQ29uZmlybVdpdGhTdHlsZSIsICJtZXNzYWdlIiwgInRvU3RyaW5nIiwgImR1cmF0aW9uIiwgIl94MyIsICJhZGRMaXN0ZW5lciIsICJfJGJvZHkkZ2V0IiwgIiRib2R5IiwgInBhcmVudHMiLCAib2JzZXJ2ZXJDYWxsYmFjayIsICJfbXV0YXRpb25zIiwgIm9ic2VydmVyIiwgImhhc0NsYXNzIiwgIlNFTEVDVE9SIiwgImVsZW1lbnQiLCAiZG9jdW1lbnQiLCAicXVlcnlTZWxlY3RvciIsICJlbGVtZW50Q2xvbmUiLCAiY2xvbmVOb2RlIiwgInJlcGxhY2VXaXRoIiwgImZpbmQiLCAiZGlzY29ubmVjdCIsICJtdXRhdGlvbk9ic2VydmVyIiwgIk11dGF0aW9uT2JzZXJ2ZXIiLCAib2JzZXJ2ZSIsICJkb2N1bWVudEVsZW1lbnQiLCAiYXR0cmlidXRlcyIsICJhdHRyaWJ1dGVGaWx0ZXIiLCAiaW1wb3J0X2V4dF9nYWRnZXQ4IiwgImdldEJvZHkiLCAidGhlbiIsICJjb25maXJtTG9nb3V0IiwgImxlbmd0aCJdCn0K

})();

/* </nowiki> */

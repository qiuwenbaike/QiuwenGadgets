/**
 * SPDX-License-Identifier: GPL-3.0-or-later
 * _addText: '{{Gadget Header|license=GPL-3.0-or-later}}'
 *
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/ConfirmLogout}
 * @author 安忆 <i@anyi.in>
 * @license GPL-3.0-or-later {@link https://www.qiuwenbaike.cn/wiki/H:GPL-3.0}
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
//! src/ConfirmLogout/options.json
var logoutElementSelector = '#ca-cb-logout>a,#topbar>a[href*="UserLogout"],#pt-logout>a';
var logoutElementSelectorOfVector2022StickyHeader = "#pt-logout-sticky-header>a";
var version = "3.0";
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
var api = (0, import_ext_gadget3.initMwApi)("ConfirmLogout/".concat(version));
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
var {
  skin
} = mw.config.get();
var clickListener = /* @__PURE__ */ function() {
  var _ref3 = _asyncToGenerator(function* (event) {
    event.preventDefault();
    const isConfirm = yield (0, import_ext_gadget6.oouiConfirmWithStyle)(getMessage("Confirm"));
    if (!isConfirm) {
      return;
    }
    const toastifyInstance = (0, import_ext_gadget7.toastify)({
      text: mw.msg("logging-out-notify"),
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
var {
  wgUserName
} = mw.config.get();
void (0, import_ext_gadget8.getBody)().then(function confirmLogout($body) {
  if (!wgUserName) {
    return;
  }
  const $element = $body.find(logoutElementSelector);
  if (!$element.length) {
    return;
  }
  addListener($element);
});

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0NvbmZpcm1Mb2dvdXQvb3B0aW9ucy5qc29uIiwgInNyYy9Db25maXJtTG9nb3V0L21vZHVsZXMvaTE4bi50cyIsICJzcmMvQ29uZmlybUxvZ291dC9tb2R1bGVzL2FkZExpc3RlbmVyLnRzIiwgInNyYy9Db25maXJtTG9nb3V0L21vZHVsZXMvdXRpbC9yZWZyZXNoRXZlbnRMaXN0ZW5lci50cyIsICJzcmMvQ29uZmlybUxvZ291dC9tb2R1bGVzL2FwaS50cyIsICJzcmMvQ29uZmlybUxvZ291dC9tb2R1bGVzL3V0aWwvbG9nb3V0LnRzIiwgInNyYy9Db25maXJtTG9nb3V0L21vZHVsZXMvdXRpbC9zaG93RXJyb3IudHMiLCAic3JjL0NvbmZpcm1Mb2dvdXQvbW9kdWxlcy90cnlMb2dvdXQudHMiLCAic3JjL0NvbmZpcm1Mb2dvdXQvQ29uZmlybUxvZ291dC50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsie1xuXHRcImxvZ291dEVsZW1lbnRTZWxlY3RvclwiOiBcIiNjYS1jYi1sb2dvdXQ+YSwjdG9wYmFyPmFbaHJlZio9XFxcIlVzZXJMb2dvdXRcXFwiXSwjcHQtbG9nb3V0PmFcIixcblx0XCJsb2dvdXRFbGVtZW50U2VsZWN0b3JPZlZlY3RvcjIwMjJTdGlja3lIZWFkZXJcIjogXCIjcHQtbG9nb3V0LXN0aWNreS1oZWFkZXI+YVwiLFxuXHRcInZlcnNpb25cIjogXCIzLjBcIlxufVxuIiwgImltcG9ydCB7bG9jYWxpemV9IGZyb20gJ2V4dC5nYWRnZXQuaTE4bic7XG5cbmNvbnN0IGdldEkxOG5NZXNzYWdlcyA9ICgpID0+IHtcblx0cmV0dXJuIHtcblx0XHQnTmV0d29yayBlcnJvcic6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnTmV0d29yayBlcnJvcicsXG5cdFx0XHRqYTogJ+ODjeODg+ODiOODr+ODvOOCr+OCqOODqeODvCcsXG5cdFx0XHQnemgtaGFucyc6ICfnvZHnu5zlvILluLgnLFxuXHRcdFx0J3poLWhhbnQnOiAn57ay6Lev55Ww5bi4Jyxcblx0XHR9KSxcblx0XHRDb25maXJtOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0NvbmZpcm0gbG9nb3V0PycsXG5cdFx0XHRqYTogJ+ODreOCsOOCouOCpuODiOOBl+OBvuOBmeOBi++8nycsXG5cdFx0XHQnemgtaGFucyc6ICfmgqjnoa7lrpropoHpgIDlh7rlkJfvvJ8nLFxuXHRcdFx0J3poLWhhbnQnOiAn5oKo56K65a6a6KaB55m75Ye65ZeO77yfJyxcblx0XHR9KSxcblx0XHRTdWNjZWVkOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0xvZ291dCBzdWNjZWVkLiBSZWZyZXNoaW5nLi4uJyxcblx0XHRcdGphOiAn44Ot44Kw44Ki44Km44OI44Gr5oiQ5Yqf44GX44G+44GX44Gf44CC5YaN6Kqt44G/6L6844G/44GX44G+44GZLi4uJyxcblx0XHRcdCd6aC1oYW5zJzogJ+mAgOWHuuaIkOWKn++8jOWNs+WwhuWIt+aWsOmhtemdouKApuKApicsXG5cdFx0XHQnemgtaGFudCc6ICfnmbvlh7rmiJDlip/vvIzljbPlsIfph43mlrDovInlhaXigKbigKYnLFxuXHRcdH0pLFxuXHR9O1xufTtcblxuY29uc3QgaTE4bk1lc3NhZ2VzID0gZ2V0STE4bk1lc3NhZ2VzKCk7XG5cbmNvbnN0IGdldE1lc3NhZ2U6IEdldE1lc3NhZ2VzPHR5cGVvZiBpMThuTWVzc2FnZXM+ID0gKGtleSkgPT4ge1xuXHRyZXR1cm4gaTE4bk1lc3NhZ2VzW2tleV0gfHwga2V5O1xufTtcblxuZXhwb3J0IHtnZXRNZXNzYWdlfTtcbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vaTE4bic7XG5pbXBvcnQge29vdWlDb25maXJtV2l0aFN0eWxlfSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuaW1wb3J0IHtyZWZyZXNoRXZlbnRMaXN0ZW5lcn0gZnJvbSAnLi91dGlsL3JlZnJlc2hFdmVudExpc3RlbmVyJztcbmltcG9ydCB7dG9hc3RpZnl9IGZyb20gJ2V4dC5nYWRnZXQuVG9hc3RpZnknO1xuaW1wb3J0IHt0cnlMb2dvdXR9IGZyb20gJy4vdHJ5TG9nb3V0JztcblxuY29uc3Qge3NraW59ID0gbXcuY29uZmlnLmdldCgpO1xuXG5jb25zdCBjbGlja0xpc3RlbmVyID0gYXN5bmMgKGV2ZW50OiBKUXVlcnkuQ2xpY2tFdmVudCk6IFByb21pc2U8dm9pZD4gPT4ge1xuXHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cdGNvbnN0IGlzQ29uZmlybTogYm9vbGVhbiA9IGF3YWl0IG9vdWlDb25maXJtV2l0aFN0eWxlKGdldE1lc3NhZ2UoJ0NvbmZpcm0nKSk7XG5cdGlmICghaXNDb25maXJtKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgdG9hc3RpZnlJbnN0YW5jZTogVG9hc3RpZnlJbnN0YW5jZSA9IHRvYXN0aWZ5KFxuXHRcdHtcblx0XHRcdHRleHQ6IG13Lm1zZygnbG9nZ2luZy1vdXQtbm90aWZ5JyksXG5cdFx0XHRkdXJhdGlvbjogLTEsXG5cdFx0fSxcblx0XHQnaW5mbydcblx0KTtcblx0dm9pZCB0cnlMb2dvdXQodG9hc3RpZnlJbnN0YW5jZSk7XG59O1xuXG5jb25zdCBhZGRMaXN0ZW5lciA9ICgkZWxlbWVudDogSlF1ZXJ5KTogdm9pZCA9PiB7XG5cdHJlZnJlc2hFdmVudExpc3RlbmVyKCRlbGVtZW50LCAoZXZlbnQ6IEpRdWVyeS5DbGlja0V2ZW50KTogdm9pZCA9PiB7XG5cdFx0dm9pZCBjbGlja0xpc3RlbmVyKGV2ZW50KTtcblx0fSk7XG5cblx0aWYgKHNraW4gIT09ICd2ZWN0b3ItMjAyMicpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCAkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4gPSAkZWxlbWVudC5wYXJlbnRzKCdib2R5Jyk7XG5cblx0Y29uc3Qgb2JzZXJ2ZXJDYWxsYmFjayA9IChfbXV0YXRpb25zOiBNdXRhdGlvblJlY29yZFtdLCBvYnNlcnZlcjogTXV0YXRpb25PYnNlcnZlcik6IHZvaWQgPT4ge1xuXHRcdGlmICghJGJvZHkuaGFzQ2xhc3MoJ3ZlY3Rvci1zdGlja3ktaGVhZGVyLXZpc2libGUnKSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGNvbnN0IFNFTEVDVE9SOiBzdHJpbmcgPSBPUFRJT05TLmxvZ291dEVsZW1lbnRTZWxlY3Rvck9mVmVjdG9yMjAyMlN0aWNreUhlYWRlcjtcblx0XHRjb25zdCBlbGVtZW50OiBIVE1MQW5jaG9yRWxlbWVudCB8IG51bGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFNFTEVDVE9SKTtcblx0XHRpZiAoIWVsZW1lbnQpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRjb25zdCBlbGVtZW50Q2xvbmU6IE5vZGUgPSBlbGVtZW50LmNsb25lTm9kZSh0cnVlKTtcblx0XHRlbGVtZW50LnJlcGxhY2VXaXRoKGVsZW1lbnRDbG9uZSk7XG5cblx0XHRyZWZyZXNoRXZlbnRMaXN0ZW5lcigkYm9keS5maW5kKFNFTEVDVE9SKSwgKGV2ZW50OiBKUXVlcnkuQ2xpY2tFdmVudCk6IHZvaWQgPT4ge1xuXHRcdFx0dm9pZCBjbGlja0xpc3RlbmVyKGV2ZW50KTtcblx0XHR9KTtcblx0XHRvYnNlcnZlci5kaXNjb25uZWN0KCk7XG5cdH07XG5cdGNvbnN0IG11dGF0aW9uT2JzZXJ2ZXI6IE11dGF0aW9uT2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihvYnNlcnZlckNhbGxiYWNrKTtcblx0bXV0YXRpb25PYnNlcnZlci5vYnNlcnZlKCRib2R5LmdldCgwKSA/PyBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsIHtcblx0XHRhdHRyaWJ1dGVzOiB0cnVlLFxuXHRcdGF0dHJpYnV0ZUZpbHRlcjogWydjbGFzcyddLFxuXHR9KTtcbn07XG5cbmV4cG9ydCB7YWRkTGlzdGVuZXJ9O1xuIiwgImltcG9ydCB7ZmlsdGVyQWx0ZXJlZENsaWNrc30gZnJvbSAnZXh0LmdhZGdldC5GaWx0ZXJBbHRlcmVkQ2xpY2tzJztcblxuY29uc3QgcmVmcmVzaEV2ZW50TGlzdGVuZXIgPSAoJGVsZW1lbnQ6IEpRdWVyeSwgY2xpY2tMaXN0ZW5lcjogKGV2ZW50OiBKUXVlcnkuQ2xpY2tFdmVudCkgPT4gdm9pZCk6IHZvaWQgPT4ge1xuXHRjb25zdCBob3Zlckxpc3RlbmVyID0gKCk6IHZvaWQgPT4ge1xuXHRcdCRlbGVtZW50Lm9mZignY2xpY2snKTtcblx0XHQkZWxlbWVudC5vbihcblx0XHRcdCdjbGljaycsXG5cdFx0XHRmaWx0ZXJBbHRlcmVkQ2xpY2tzKChldmVudDogSlF1ZXJ5LkNsaWNrRXZlbnQpOiB2b2lkID0+IHtcblx0XHRcdFx0Y2xpY2tMaXN0ZW5lcihldmVudCk7XG5cdFx0XHR9KVxuXHRcdCk7XG5cdH07XG5cdGNvbnN0IGhvdmVyTGlzdGVuZXJXaXRoRGVib3VuY2U6IHR5cGVvZiBob3Zlckxpc3RlbmVyID0gbXcudXRpbC5kZWJvdW5jZShob3Zlckxpc3RlbmVyLCAyMDAsIHRydWUpO1xuXG5cdCRlbGVtZW50Lm9uKCdtb3VzZW92ZXIgdG91Y2hzdGFydCcsIGhvdmVyTGlzdGVuZXJXaXRoRGVib3VuY2UpO1xufTtcblxuZXhwb3J0IHtyZWZyZXNoRXZlbnRMaXN0ZW5lcn07XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtpbml0TXdBcGl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmNvbnN0IGFwaTogbXcuQXBpID0gaW5pdE13QXBpKGBDb25maXJtTG9nb3V0LyR7T1BUSU9OUy52ZXJzaW9ufWApO1xuXG5leHBvcnQge2FwaX07XG4iLCAiaW1wb3J0IHthcGl9IGZyb20gJy4uL2FwaSc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4uL2kxOG4nO1xuaW1wb3J0IHt0b2FzdGlmeX0gZnJvbSAnZXh0LmdhZGdldC5Ub2FzdGlmeSc7XG5cbmNvbnN0IGxvZ291dCA9IGFzeW5jICh0b2FzdGlmeUluc3RhbmNlOiBUb2FzdGlmeUluc3RhbmNlKTogUHJvbWlzZTx2b2lkPiA9PiB7XG5cdGF3YWl0IGFwaS5wb3N0V2l0aEVkaXRUb2tlbih7XG5cdFx0YWN0aW9uOiAnbG9nb3V0Jyxcblx0fSk7XG5cblx0dG9hc3RpZnlJbnN0YW5jZS5oaWRlVG9hc3QoKTtcblx0dG9hc3RpZnkoXG5cdFx0e1xuXHRcdFx0dGV4dDogZ2V0TWVzc2FnZSgnU3VjY2VlZCcpLFxuXHRcdH0sXG5cdFx0J3N1Y2Nlc3MnXG5cdCk7XG5cblx0bG9jYXRpb24ucmVsb2FkKCk7XG59O1xuXG5leHBvcnQge2xvZ291dH07XG4iLCAiaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuLi9pMThuJztcbmltcG9ydCB7dG9hc3RpZnl9IGZyb20gJ2V4dC5nYWRnZXQuVG9hc3RpZnknO1xuXG5jb25zdCBzaG93RXJyb3IgPSAoZXJyb3I6IHVua25vd24sIHRvYXN0aWZ5SW5zdGFuY2U6IFRvYXN0aWZ5SW5zdGFuY2UpOiB2b2lkID0+IHtcblx0Y29uc29sZS5lcnJvcignW0NvbmZpcm1Mb2dvdXRdIEFqYXggZXJyb3I6JywgZXJyb3IpO1xuXHR0b2FzdGlmeUluc3RhbmNlLmhpZGVUb2FzdCgpO1xuXHR0b2FzdGlmeShcblx0XHR7XG5cdFx0XHR0ZXh0OiBnZXRNZXNzYWdlKCdOZXR3b3JrIGVycm9yJyksXG5cdFx0fSxcblx0XHQnZXJyb3InXG5cdCk7XG59O1xuXG5leHBvcnQge3Nob3dFcnJvcn07XG4iLCAiaW1wb3J0IHtsb2dvdXR9IGZyb20gJy4vdXRpbC9sb2dvdXQnO1xuaW1wb3J0IHtzaG93RXJyb3J9IGZyb20gJy4vdXRpbC9zaG93RXJyb3InO1xuXG5jb25zdCB0cnlMb2dvdXQgPSBhc3luYyAodG9hc3RpZnlJbnN0YW5jZTogVG9hc3RpZnlJbnN0YW5jZSk6IFByb21pc2U8dm9pZD4gPT4ge1xuXHR0cnkge1xuXHRcdGF3YWl0IGxvZ291dCh0b2FzdGlmeUluc3RhbmNlKTtcblx0fSBjYXRjaCAoZXJyb3I6IHVua25vd24pIHtcblx0XHRzaG93RXJyb3IoZXJyb3IsIHRvYXN0aWZ5SW5zdGFuY2UpO1xuXHR9XG59O1xuXG5leHBvcnQge3RyeUxvZ291dH07XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuL29wdGlvbnMuanNvbic7XG5pbXBvcnQge2FkZExpc3RlbmVyfSBmcm9tICcuL21vZHVsZXMvYWRkTGlzdGVuZXInO1xuaW1wb3J0IHtnZXRCb2R5fSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG5jb25zdCB7d2dVc2VyTmFtZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cbnZvaWQgZ2V0Qm9keSgpLnRoZW4oZnVuY3Rpb24gY29uZmlybUxvZ291dCgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkIHtcblx0aWYgKCF3Z1VzZXJOYW1lKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgJGVsZW1lbnQ6IEpRdWVyeSA9ICRib2R5LmZpbmQoT1BUSU9OUy5sb2dvdXRFbGVtZW50U2VsZWN0b3IpO1xuXHRpZiAoISRlbGVtZW50Lmxlbmd0aCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGFkZExpc3RlbmVyKCRlbGVtZW50KTtcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQyxJQUFBQSx3QkFBeUI7QUFDekIsSUFBQUMsZ0RBQWlEO0FBQ2pELElBQUFDLFVBQVc7O0FDSFosSUFBQUMsb0JBQXVCQyxRQUFBLGlCQUFBO0FBRXZCLElBQU1DLGtCQUFrQkEsTUFBTTtBQUM3QixTQUFPO0lBQ04sa0JBQUEsR0FBaUJGLGtCQUFBRyxVQUFTO01BQ3pCQyxJQUFJO01BQ0pDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDREMsVUFBQSxHQUFTTixrQkFBQUcsVUFBUztNQUNqQkMsSUFBSTtNQUNKQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0RFLFVBQUEsR0FB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LEtBQWFqRixxQkFBcUI7QUFDakUsTUFBSSxDQUFDaUIsU0FBUzZFLFFBQVE7QUFDckI7RUFDRDtBQUVBNUIsY0FBWWpELFFBQVE7QUFDckIsQ0FBQzsiLAogICJuYW1lcyI6IFsibG9nb3V0RWxlbWVudFNlbGVjdG9yIiwgImxvZ291dEVsZW1lbnRTZWxlY3Rvck9mVmVjdG9yMjAyMlN0aWNreUhlYWRlciIsICJ2ZXJzaW9uIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgInJlcXVpcmUiLCAiZ2V0STE4bk1lc3NhZ2VzIiwgImxvY2FsaXplIiwgImVuIiwgImphIiwgIkNvbmZpcm0iLCAiU3VjY2VlZCIsICJpMThuTWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAiaW1wb3J0X2V4dF9nYWRnZXQ2IiwgImltcG9ydF9leHRfZ2FkZ2V0MiIsICJyZWZyZXNoRXZlbnRMaXN0ZW5lciIsICIkZWxlbWVudCIsICJjbGlja0xpc3RlbmVyMiIsICJob3Zlckxpc3RlbmVyIiwgIm9mZiIsICJvbiIsICJmaWx0ZXJBbHRlcmVkQ2xpY2tzIiwgImV2ZW50IiwgImhvdmVyTGlzdGVuZXJXaXRoRGVib3VuY2UiLCAibXciLCAidXRpbCIsICJkZWJvdW5jZSIsICJpbXBvcnRfZXh0X2dhZGdldDciLCAiaW1wb3J0X2V4dF9nYWRnZXQzIiwgImFwaSIsICJpbml0TXdBcGkiLCAiY29uY2F0IiwgImltcG9ydF9leHRfZ2FkZ2V0NCIsICJsb2dvdXQiLCAiX3JlZiIsICJfYXN5bmNUb0dlbmVyYXRvciIsICJ0b2FzdGlmeUluc3RhbmNlIiwgInBvc3RXaXRoRWRpdFRva2VuIiwgImFjdGlvbiIsICJoaWRlVG9hc3QiLCAidG9hc3RpZnkiLCAidGV4dCIsICJsb2NhdGlvbiIsICJyZWxvYWQiLCAiX3giLCAiYXBwbHkiLCAiYXJndW1lbnRzIiwgImltcG9ydF9leHRfZ2FkZ2V0NSIsICJzaG93RXJyb3IiLCAiZXJyb3IiLCAiY29uc29sZSIsICJ0cnlMb2dvdXQiLCAiX3JlZjIiLCAiX3gyIiwgInNraW4iLCAiY29uZmlnIiwgImdldCIsICJjbGlja0xpc3RlbmVyIiwgIl9yZWYzIiwgInByZXZlbnREZWZhdWx0IiwgImlzQ29uZmlybSIsICJvb3VpQ29uZmlybVdpdGhTdHlsZSIsICJtc2ciLCAiZHVyYXRpb24iLCAiX3gzIiwgImFkZExpc3RlbmVyIiwgIl8kYm9keSRnZXQiLCAiJGJvZHkiLCAicGFyZW50cyIsICJvYnNlcnZlckNhbGxiYWNrIiwgIl9tdXRhdGlvbnMiLCAib2JzZXJ2ZXIiLCAiaGFzQ2xhc3MiLCAiU0VMRUNUT1IiLCAiZWxlbWVudCIsICJkb2N1bWVudCIsICJxdWVyeVNlbGVjdG9yIiwgImVsZW1lbnRDbG9uZSIsICJjbG9uZU5vZGUiLCAicmVwbGFjZVdpdGgiLCAiZmluZCIsICJkaXNjb25uZWN0IiwgIm11dGF0aW9uT2JzZXJ2ZXIiLCAiTXV0YXRpb25PYnNlcnZlciIsICJvYnNlcnZlIiwgImRvY3VtZW50RWxlbWVudCIsICJhdHRyaWJ1dGVzIiwgImF0dHJpYnV0ZUZpbHRlciIsICJpbXBvcnRfZXh0X2dhZGdldDgiLCAid2dVc2VyTmFtZSIsICJnZXRCb2R5IiwgInRoZW4iLCAiY29uZmlybUxvZ291dCIsICJsZW5ndGgiXQp9Cg==

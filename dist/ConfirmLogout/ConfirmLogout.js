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
    $element.on("click", (0, import_ext_gadget2.filterAlteredClicks)(clickListener2));
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0NvbmZpcm1Mb2dvdXQvb3B0aW9ucy5qc29uIiwgInNyYy9Db25maXJtTG9nb3V0L21vZHVsZXMvaTE4bi50cyIsICJzcmMvQ29uZmlybUxvZ291dC9tb2R1bGVzL2FkZExpc3RlbmVyLnRzIiwgInNyYy9Db25maXJtTG9nb3V0L21vZHVsZXMvdXRpbC9yZWZyZXNoRXZlbnRMaXN0ZW5lci50cyIsICJzcmMvQ29uZmlybUxvZ291dC9tb2R1bGVzL2FwaS50cyIsICJzcmMvQ29uZmlybUxvZ291dC9tb2R1bGVzL3V0aWwvbG9nb3V0LnRzIiwgInNyYy9Db25maXJtTG9nb3V0L21vZHVsZXMvdXRpbC9zaG93RXJyb3IudHMiLCAic3JjL0NvbmZpcm1Mb2dvdXQvbW9kdWxlcy90cnlMb2dvdXQudHMiLCAic3JjL0NvbmZpcm1Mb2dvdXQvQ29uZmlybUxvZ291dC50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsie1xuXHRcImxvZ291dEVsZW1lbnRTZWxlY3RvclwiOiBcIiNjYS1jYi1sb2dvdXQ+YSwjdG9wYmFyPmFbaHJlZio9XFxcIlVzZXJMb2dvdXRcXFwiXSwjcHQtbG9nb3V0PmFcIixcblx0XCJsb2dvdXRFbGVtZW50U2VsZWN0b3JPZlZlY3RvcjIwMjJTdGlja3lIZWFkZXJcIjogXCIjcHQtbG9nb3V0LXN0aWNreS1oZWFkZXI+YVwiLFxuXHRcInZlcnNpb25cIjogXCIzLjBcIlxufVxuIiwgImltcG9ydCB7bG9jYWxpemV9IGZyb20gJ2V4dC5nYWRnZXQuaTE4bic7XG5cbmNvbnN0IGdldEkxOG5NZXNzYWdlcyA9ICgpID0+IHtcblx0cmV0dXJuIHtcblx0XHQnTmV0d29yayBlcnJvcic6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnTmV0d29yayBlcnJvcicsXG5cdFx0XHRqYTogJ+ODjeODg+ODiOODr+ODvOOCr+OCqOODqeODvCcsXG5cdFx0XHQnemgtaGFucyc6ICfnvZHnu5zlvILluLgnLFxuXHRcdFx0J3poLWhhbnQnOiAn57ay6Lev55Ww5bi4Jyxcblx0XHR9KSxcblx0XHRDb25maXJtOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0NvbmZpcm0gbG9nb3V0PycsXG5cdFx0XHRqYTogJ+ODreOCsOOCouOCpuODiOOBl+OBvuOBmeOBi++8nycsXG5cdFx0XHQnemgtaGFucyc6ICfmgqjnoa7lrpropoHpgIDlh7rlkJfvvJ8nLFxuXHRcdFx0J3poLWhhbnQnOiAn5oKo56K65a6a6KaB55m75Ye65ZeO77yfJyxcblx0XHR9KSxcblx0XHRTdWNjZWVkOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0xvZ291dCBzdWNjZWVkLiBSZWZyZXNoaW5nLi4uJyxcblx0XHRcdGphOiAn44Ot44Kw44Ki44Km44OI44Gr5oiQ5Yqf44GX44G+44GX44Gf44CC5YaN6Kqt44G/6L6844G/44GX44G+44GZLi4uJyxcblx0XHRcdCd6aC1oYW5zJzogJ+mAgOWHuuaIkOWKn++8jOWNs+WwhuWIt+aWsOmhtemdouKApuKApicsXG5cdFx0XHQnemgtaGFudCc6ICfnmbvlh7rmiJDlip/vvIzljbPlsIfph43mlrDovInlhaXigKbigKYnLFxuXHRcdH0pLFxuXHR9O1xufTtcblxuY29uc3QgaTE4bk1lc3NhZ2VzID0gZ2V0STE4bk1lc3NhZ2VzKCk7XG5cbmNvbnN0IGdldE1lc3NhZ2U6IEdldE1lc3NhZ2VzPHR5cGVvZiBpMThuTWVzc2FnZXM+ID0gKGtleSkgPT4ge1xuXHRyZXR1cm4gaTE4bk1lc3NhZ2VzW2tleV0gfHwga2V5O1xufTtcblxuZXhwb3J0IHtnZXRNZXNzYWdlfTtcbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vaTE4bic7XG5pbXBvcnQge29vdWlDb25maXJtV2l0aFN0eWxlfSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuaW1wb3J0IHtyZWZyZXNoRXZlbnRMaXN0ZW5lcn0gZnJvbSAnLi91dGlsL3JlZnJlc2hFdmVudExpc3RlbmVyJztcbmltcG9ydCB7dG9hc3RpZnl9IGZyb20gJ2V4dC5nYWRnZXQuVG9hc3RpZnknO1xuaW1wb3J0IHt0cnlMb2dvdXR9IGZyb20gJy4vdHJ5TG9nb3V0JztcblxuY29uc3Qge3NraW59ID0gbXcuY29uZmlnLmdldCgpO1xuXG5jb25zdCBjbGlja0xpc3RlbmVyID0gYXN5bmMgKGV2ZW50OiBKUXVlcnkuQ2xpY2tFdmVudCk6IFByb21pc2U8dm9pZD4gPT4ge1xuXHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cdGNvbnN0IGlzQ29uZmlybTogYm9vbGVhbiA9IGF3YWl0IG9vdWlDb25maXJtV2l0aFN0eWxlKGdldE1lc3NhZ2UoJ0NvbmZpcm0nKSk7XG5cdGlmICghaXNDb25maXJtKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgdG9hc3RpZnlJbnN0YW5jZTogVG9hc3RpZnlJbnN0YW5jZSA9IHRvYXN0aWZ5KFxuXHRcdHtcblx0XHRcdHRleHQ6IG13Lm1zZygnbG9nZ2luZy1vdXQtbm90aWZ5JyksXG5cdFx0XHRkdXJhdGlvbjogLTEsXG5cdFx0fSxcblx0XHQnaW5mbydcblx0KTtcblx0dm9pZCB0cnlMb2dvdXQodG9hc3RpZnlJbnN0YW5jZSk7XG59O1xuXG5jb25zdCBhZGRMaXN0ZW5lciA9ICgkZWxlbWVudDogSlF1ZXJ5KTogdm9pZCA9PiB7XG5cdHJlZnJlc2hFdmVudExpc3RlbmVyKCRlbGVtZW50LCAoZXZlbnQ6IEpRdWVyeS5DbGlja0V2ZW50KTogdm9pZCA9PiB7XG5cdFx0dm9pZCBjbGlja0xpc3RlbmVyKGV2ZW50KTtcblx0fSk7XG5cblx0aWYgKHNraW4gIT09ICd2ZWN0b3ItMjAyMicpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCAkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4gPSAkZWxlbWVudC5wYXJlbnRzKCdib2R5Jyk7XG5cblx0Y29uc3Qgb2JzZXJ2ZXJDYWxsYmFjayA9IChfbXV0YXRpb25zOiBNdXRhdGlvblJlY29yZFtdLCBvYnNlcnZlcjogTXV0YXRpb25PYnNlcnZlcik6IHZvaWQgPT4ge1xuXHRcdGlmICghJGJvZHkuaGFzQ2xhc3MoJ3ZlY3Rvci1zdGlja3ktaGVhZGVyLXZpc2libGUnKSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGNvbnN0IFNFTEVDVE9SOiBzdHJpbmcgPSBPUFRJT05TLmxvZ291dEVsZW1lbnRTZWxlY3Rvck9mVmVjdG9yMjAyMlN0aWNreUhlYWRlcjtcblx0XHRjb25zdCBlbGVtZW50OiBIVE1MQW5jaG9yRWxlbWVudCB8IG51bGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFNFTEVDVE9SKTtcblx0XHRpZiAoIWVsZW1lbnQpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRjb25zdCBlbGVtZW50Q2xvbmU6IE5vZGUgPSBlbGVtZW50LmNsb25lTm9kZSh0cnVlKTtcblx0XHRlbGVtZW50LnJlcGxhY2VXaXRoKGVsZW1lbnRDbG9uZSk7XG5cblx0XHRyZWZyZXNoRXZlbnRMaXN0ZW5lcigkYm9keS5maW5kKFNFTEVDVE9SKSwgKGV2ZW50OiBKUXVlcnkuQ2xpY2tFdmVudCk6IHZvaWQgPT4ge1xuXHRcdFx0dm9pZCBjbGlja0xpc3RlbmVyKGV2ZW50KTtcblx0XHR9KTtcblx0XHRvYnNlcnZlci5kaXNjb25uZWN0KCk7XG5cdH07XG5cdGNvbnN0IG11dGF0aW9uT2JzZXJ2ZXI6IE11dGF0aW9uT2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihvYnNlcnZlckNhbGxiYWNrKTtcblx0bXV0YXRpb25PYnNlcnZlci5vYnNlcnZlKCRib2R5LmdldCgwKSA/PyBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsIHtcblx0XHRhdHRyaWJ1dGVzOiB0cnVlLFxuXHRcdGF0dHJpYnV0ZUZpbHRlcjogWydjbGFzcyddLFxuXHR9KTtcbn07XG5cbmV4cG9ydCB7YWRkTGlzdGVuZXJ9O1xuIiwgImltcG9ydCB7ZmlsdGVyQWx0ZXJlZENsaWNrc30gZnJvbSAnZXh0LmdhZGdldC5GaWx0ZXJBbHRlcmVkQ2xpY2tzJztcblxuY29uc3QgcmVmcmVzaEV2ZW50TGlzdGVuZXIgPSAoJGVsZW1lbnQ6IEpRdWVyeSwgY2xpY2tMaXN0ZW5lcjogKGV2ZW50OiBKUXVlcnkuQ2xpY2tFdmVudCkgPT4gdm9pZCk6IHZvaWQgPT4ge1xuXHRjb25zdCBob3Zlckxpc3RlbmVyID0gKCk6IHZvaWQgPT4ge1xuXHRcdCRlbGVtZW50Lm9mZignY2xpY2snKTtcblx0XHQkZWxlbWVudC5vbignY2xpY2snLCBmaWx0ZXJBbHRlcmVkQ2xpY2tzKGNsaWNrTGlzdGVuZXIpKTtcblx0fTtcblx0Y29uc3QgaG92ZXJMaXN0ZW5lcldpdGhEZWJvdW5jZTogdHlwZW9mIGhvdmVyTGlzdGVuZXIgPSBtdy51dGlsLmRlYm91bmNlKGhvdmVyTGlzdGVuZXIsIDIwMCwgdHJ1ZSk7XG5cblx0JGVsZW1lbnQub24oJ21vdXNlb3ZlciB0b3VjaHN0YXJ0JywgaG92ZXJMaXN0ZW5lcldpdGhEZWJvdW5jZSk7XG59O1xuXG5leHBvcnQge3JlZnJlc2hFdmVudExpc3RlbmVyfTtcbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge2luaXRNd0FwaX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxuY29uc3QgYXBpOiBtdy5BcGkgPSBpbml0TXdBcGkoYENvbmZpcm1Mb2dvdXQvJHtPUFRJT05TLnZlcnNpb259YCk7XG5cbmV4cG9ydCB7YXBpfTtcbiIsICJpbXBvcnQge2FwaX0gZnJvbSAnLi4vYXBpJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi4vaTE4bic7XG5pbXBvcnQge3RvYXN0aWZ5fSBmcm9tICdleHQuZ2FkZ2V0LlRvYXN0aWZ5JztcblxuY29uc3QgbG9nb3V0ID0gYXN5bmMgKHRvYXN0aWZ5SW5zdGFuY2U6IFRvYXN0aWZ5SW5zdGFuY2UpOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0YXdhaXQgYXBpLnBvc3RXaXRoRWRpdFRva2VuKHtcblx0XHRhY3Rpb246ICdsb2dvdXQnLFxuXHR9KTtcblxuXHR0b2FzdGlmeUluc3RhbmNlLmhpZGVUb2FzdCgpO1xuXHR0b2FzdGlmeShcblx0XHR7XG5cdFx0XHR0ZXh0OiBnZXRNZXNzYWdlKCdTdWNjZWVkJyksXG5cdFx0fSxcblx0XHQnc3VjY2Vzcydcblx0KTtcblxuXHRsb2NhdGlvbi5yZWxvYWQoKTtcbn07XG5cbmV4cG9ydCB7bG9nb3V0fTtcbiIsICJpbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4uL2kxOG4nO1xuaW1wb3J0IHt0b2FzdGlmeX0gZnJvbSAnZXh0LmdhZGdldC5Ub2FzdGlmeSc7XG5cbmNvbnN0IHNob3dFcnJvciA9IChlcnJvcjogdW5rbm93biwgdG9hc3RpZnlJbnN0YW5jZTogVG9hc3RpZnlJbnN0YW5jZSk6IHZvaWQgPT4ge1xuXHRjb25zb2xlLmVycm9yKCdbQ29uZmlybUxvZ291dF0gQWpheCBlcnJvcjonLCBlcnJvcik7XG5cdHRvYXN0aWZ5SW5zdGFuY2UuaGlkZVRvYXN0KCk7XG5cdHRvYXN0aWZ5KFxuXHRcdHtcblx0XHRcdHRleHQ6IGdldE1lc3NhZ2UoJ05ldHdvcmsgZXJyb3InKSxcblx0XHR9LFxuXHRcdCdlcnJvcidcblx0KTtcbn07XG5cbmV4cG9ydCB7c2hvd0Vycm9yfTtcbiIsICJpbXBvcnQge2xvZ291dH0gZnJvbSAnLi91dGlsL2xvZ291dCc7XG5pbXBvcnQge3Nob3dFcnJvcn0gZnJvbSAnLi91dGlsL3Nob3dFcnJvcic7XG5cbmNvbnN0IHRyeUxvZ291dCA9IGFzeW5jICh0b2FzdGlmeUluc3RhbmNlOiBUb2FzdGlmeUluc3RhbmNlKTogUHJvbWlzZTx2b2lkPiA9PiB7XG5cdHRyeSB7XG5cdFx0YXdhaXQgbG9nb3V0KHRvYXN0aWZ5SW5zdGFuY2UpO1xuXHR9IGNhdGNoIChlcnJvcjogdW5rbm93bikge1xuXHRcdHNob3dFcnJvcihlcnJvciwgdG9hc3RpZnlJbnN0YW5jZSk7XG5cdH1cbn07XG5cbmV4cG9ydCB7dHJ5TG9nb3V0fTtcbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7YWRkTGlzdGVuZXJ9IGZyb20gJy4vbW9kdWxlcy9hZGRMaXN0ZW5lcic7XG5pbXBvcnQge2dldEJvZHl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmNvbnN0IHt3Z1VzZXJOYW1lfSA9IG13LmNvbmZpZy5nZXQoKTtcblxudm9pZCBnZXRCb2R5KCkudGhlbihmdW5jdGlvbiBjb25maXJtTG9nb3V0KCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQge1xuXHRpZiAoIXdnVXNlck5hbWUpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCAkZWxlbWVudDogSlF1ZXJ5ID0gJGJvZHkuZmluZChPUFRJT05TLmxvZ291dEVsZW1lbnRTZWxlY3Rvcik7XG5cdGlmICghJGVsZW1lbnQubGVuZ3RoKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0YWRkTGlzdGVuZXIoJGVsZW1lbnQpO1xufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNDLElBQUFBLHdCQUF5QjtBQUN6QixJQUFBQyxnREFBaUQ7QUFDakQsSUFBQUMsVUFBVzs7QUNIWixJQUFBQyxvQkFBdUJDLFFBQUEsaUJBQUE7QUFFdkIsSUFBTUMsa0JBQWtCQSxNQUFNO0FBQzdCLFNBQU87SUFDTixrQkFBQSxHQUFpQkYsa0JBQUFHLFVBQVM7TUFDekJDLElBQUk7TUFDSkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNEQyxVQUFBLEdBQVNOLGtCQUFBRyxVQUFTO01BQ2pCQyxJQUFJO01BQ0pDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDREUsVUFBQSxHQUFTUCxrQkFBQUcsVUFBUztNQUNqQkMsSUFBSTtNQUNKQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0VBQ0Y7QUFDRDtBQUVBLElB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b3IiLCAibG9nb3V0RWxlbWVudFNlbGVjdG9yT2ZWZWN0b3IyMDIyU3RpY2t5SGVhZGVyIiwgInZlcnNpb24iLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAicmVxdWlyZSIsICJnZXRJMThuTWVzc2FnZXMiLCAibG9jYWxpemUiLCAiZW4iLCAiamEiLCAiQ29uZmlybSIsICJTdWNjZWVkIiwgImkxOG5NZXNzYWdlcyIsICJnZXRNZXNzYWdlIiwgImtleSIsICJpbXBvcnRfZXh0X2dhZGdldDYiLCAiaW1wb3J0X2V4dF9nYWRnZXQyIiwgInJlZnJlc2hFdmVudExpc3RlbmVyIiwgIiRlbGVtZW50IiwgImNsaWNrTGlzdGVuZXIyIiwgImhvdmVyTGlzdGVuZXIiLCAib2ZmIiwgIm9uIiwgImZpbHRlckFsdGVyZWRDbGlja3MiLCAiaG92ZXJMaXN0ZW5lcldpdGhEZWJvdW5jZSIsICJtdyIsICJ1dGlsIiwgImRlYm91bmNlIiwgImltcG9ydF9leHRfZ2FkZ2V0NyIsICJpbXBvcnRfZXh0X2dhZGdldDMiLCAiYXBpIiwgImluaXRNd0FwaSIsICJjb25jYXQiLCAiaW1wb3J0X2V4dF9nYWRnZXQ0IiwgImxvZ291dCIsICJfcmVmIiwgIl9hc3luY1RvR2VuZXJhdG9yIiwgInRvYXN0aWZ5SW5zdGFuY2UiLCAicG9zdFdpdGhFZGl0VG9rZW4iLCAiYWN0aW9uIiwgImhpZGVUb2FzdCIsICJ0b2FzdGlmeSIsICJ0ZXh0IiwgImxvY2F0aW9uIiwgInJlbG9hZCIsICJfeCIsICJhcHBseSIsICJhcmd1bWVudHMiLCAiaW1wb3J0X2V4dF9nYWRnZXQ1IiwgInNob3dFcnJvciIsICJlcnJvciIsICJjb25zb2xlIiwgInRyeUxvZ291dCIsICJfcmVmMiIsICJfeDIiLCAic2tpbiIsICJjb25maWciLCAiZ2V0IiwgImNsaWNrTGlzdGVuZXIiLCAiX3JlZjMiLCAiZXZlbnQiLCAicHJldmVudERlZmF1bHQiLCAiaXNDb25maXJtIiwgIm9vdWlDb25maXJtV2l0aFN0eWxlIiwgIm1zZyIsICJkdXJhdGlvbiIsICJfeDMiLCAiYWRkTGlzdGVuZXIiLCAiXyRib2R5JGdldCIsICIkYm9keSIsICJwYXJlbnRzIiwgIm9ic2VydmVyQ2FsbGJhY2siLCAiX211dGF0aW9ucyIsICJvYnNlcnZlciIsICJoYXNDbGFzcyIsICJTRUxFQ1RPUiIsICJlbGVtZW50IiwgImRvY3VtZW50IiwgInF1ZXJ5U2VsZWN0b3IiLCAiZWxlbWVudENsb25lIiwgImNsb25lTm9kZSIsICJyZXBsYWNlV2l0aCIsICJmaW5kIiwgImRpc2Nvbm5lY3QiLCAibXV0YXRpb25PYnNlcnZlciIsICJNdXRhdGlvbk9ic2VydmVyIiwgIm9ic2VydmUiLCAiZG9jdW1lbnRFbGVtZW50IiwgImF0dHJpYnV0ZXMiLCAiYXR0cmlidXRlRmlsdGVyIiwgImltcG9ydF9leHRfZ2FkZ2V0OCIsICJ3Z1VzZXJOYW1lIiwgImdldEJvZHkiLCAidGhlbiIsICJjb25maXJtTG9nb3V0IiwgImxlbmd0aCJdCn0K

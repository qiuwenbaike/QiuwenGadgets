/**
 * SPDX-License-Identifier: GPL-3.0-or-later
 * _addText: '{{Gadget Header|license=GPL-3.0}}'
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0NvbmZpcm1Mb2dvdXQvb3B0aW9ucy5qc29uIiwgInNyYy9Db25maXJtTG9nb3V0L21vZHVsZXMvY29uc3RhbnQudHMiLCAic3JjL0NvbmZpcm1Mb2dvdXQvbW9kdWxlcy9pMThuLnRzIiwgInNyYy9Db25maXJtTG9nb3V0L21vZHVsZXMvYWRkTGlzdGVuZXIudHMiLCAic3JjL0NvbmZpcm1Mb2dvdXQvbW9kdWxlcy91dGlsL3JlZnJlc2hFdmVudExpc3RlbmVyLnRzIiwgInNyYy9Db25maXJtTG9nb3V0L21vZHVsZXMvYXBpLnRzIiwgInNyYy9Db25maXJtTG9nb3V0L21vZHVsZXMvdXRpbC9sb2dvdXQudHMiLCAic3JjL0NvbmZpcm1Mb2dvdXQvbW9kdWxlcy91dGlsL3Nob3dFcnJvci50cyIsICJzcmMvQ29uZmlybUxvZ291dC9tb2R1bGVzL3RyeUxvZ291dC50cyIsICJzcmMvQ29uZmlybUxvZ291dC9Db25maXJtTG9nb3V0LnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJ7XG5cdFwibG9nb3V0RWxlbWVudFNlbGVjdG9yXCI6IFwiI2NhLWNiLWxvZ291dD5hLCN0b3BiYXI+YVtocmVmKj1cXFwiVXNlckxvZ291dFxcXCJdLCNwdC1sb2dvdXQ+YVwiLFxuXHRcImxvZ291dEVsZW1lbnRTZWxlY3Rvck9mVmVjdG9yMjAyMlN0aWNreUhlYWRlclwiOiBcIiNwdC1sb2dvdXQtc3RpY2t5LWhlYWRlcj5hXCIsXG5cdFwidmVyc2lvblwiOiBcIjMuMFwiXG59XG4iLCAiY29uc3QgV0dfU0tJTjogc3RyaW5nID0gbXcuY29uZmlnLmdldCgnc2tpbicpO1xuY29uc3QgV0dfVVNFUl9OQU1FOiBzdHJpbmcgfCBudWxsID0gbXcuY29uZmlnLmdldCgnd2dVc2VyTmFtZScpO1xuXG5leHBvcnQge1dHX1NLSU4sIFdHX1VTRVJfTkFNRX07XG4iLCAiaW1wb3J0IHtsb2NhbGl6ZX0gZnJvbSAnZXh0LmdhZGdldC5pMThuJztcblxuY29uc3QgZ2V0STE4bk1lc3NhZ2VzID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdCdOZXR3b3JrIGVycm9yJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdOZXR3b3JrIGVycm9yJyxcblx0XHRcdGphOiAn44ON44OD44OI44Ov44O844Kv44Ko44Op44O8Jyxcblx0XHRcdCd6aC1oYW5zJzogJ+e9kee7nOW8guW4uCcsXG5cdFx0XHQnemgtaGFudCc6ICfntrLot6/nlbDluLgnLFxuXHRcdH0pLFxuXHRcdENvbmZpcm06IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQ29uZmlybSBsb2dvdXQ/Jyxcblx0XHRcdGphOiAn44Ot44Kw44Ki44Km44OI44GX44G+44GZ44GL77yfJyxcblx0XHRcdCd6aC1oYW5zJzogJ+aCqOehruWumuimgemAgOWHuuWQl++8nycsXG5cdFx0XHQnemgtaGFudCc6ICfmgqjnorrlrpropoHnmbvlh7rll47vvJ8nLFxuXHRcdH0pLFxuXHRcdFN1Y2NlZWQ6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnTG9nb3V0IHN1Y2NlZWQuIFJlZnJlc2hpbmcuLi4nLFxuXHRcdFx0amE6ICfjg63jgrDjgqLjgqbjg4jjgavmiJDlip/jgZfjgb7jgZfjgZ/jgILlho3oqq3jgb/ovrzjgb/jgZfjgb7jgZkuLi4nLFxuXHRcdFx0J3poLWhhbnMnOiAn6YCA5Ye65oiQ5Yqf77yM5Y2z5bCG5Yi35paw6aG16Z2i4oCm4oCmJyxcblx0XHRcdCd6aC1oYW50JzogJ+eZu+WHuuaIkOWKn++8jOWNs+Wwh+mHjeaWsOi8ieWFpeKApuKApicsXG5cdFx0fSksXG5cdH07XG59O1xuXG5jb25zdCBpMThuTWVzc2FnZXMgPSBnZXRJMThuTWVzc2FnZXMoKTtcblxuY29uc3QgZ2V0TWVzc2FnZTogR2V0TWVzc2FnZXM8dHlwZW9mIGkxOG5NZXNzYWdlcz4gPSAoa2V5KSA9PiB7XG5cdHJldHVybiBpMThuTWVzc2FnZXNba2V5XSB8fCBrZXk7XG59O1xuXG5leHBvcnQge2dldE1lc3NhZ2V9O1xuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7V0dfU0tJTn0gZnJvbSAnLi9jb25zdGFudCc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vaTE4bic7XG5pbXBvcnQge29vdWlDb25maXJtV2l0aFN0eWxlfSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuaW1wb3J0IHtyZWZyZXNoRXZlbnRMaXN0ZW5lcn0gZnJvbSAnLi91dGlsL3JlZnJlc2hFdmVudExpc3RlbmVyJztcbmltcG9ydCB7dG9hc3RpZnl9IGZyb20gJ2V4dC5nYWRnZXQuVG9hc3RpZnknO1xuaW1wb3J0IHt0cnlMb2dvdXR9IGZyb20gJy4vdHJ5TG9nb3V0JztcblxuY29uc3QgY2xpY2tMaXN0ZW5lciA9IGFzeW5jIChldmVudDogSlF1ZXJ5LkNsaWNrRXZlbnQpOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuXHRjb25zdCBpc0NvbmZpcm06IGJvb2xlYW4gPSBhd2FpdCBvb3VpQ29uZmlybVdpdGhTdHlsZShnZXRNZXNzYWdlKCdDb25maXJtJykpO1xuXHRpZiAoIWlzQ29uZmlybSkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IHRvYXN0aWZ5SW5zdGFuY2U6IFRvYXN0aWZ5SW5zdGFuY2UgPSB0b2FzdGlmeShcblx0XHR7XG5cdFx0XHR0ZXh0OiBtdy5tc2coJ2xvZ2dpbmctb3V0LW5vdGlmeScpLFxuXHRcdFx0ZHVyYXRpb246IC0xLFxuXHRcdH0sXG5cdFx0J2luZm8nXG5cdCk7XG5cdHZvaWQgdHJ5TG9nb3V0KHRvYXN0aWZ5SW5zdGFuY2UpO1xufTtcblxuY29uc3QgYWRkTGlzdGVuZXIgPSAoJGVsZW1lbnQ6IEpRdWVyeSk6IHZvaWQgPT4ge1xuXHRyZWZyZXNoRXZlbnRMaXN0ZW5lcigkZWxlbWVudCwgKGV2ZW50OiBKUXVlcnkuQ2xpY2tFdmVudCk6IHZvaWQgPT4ge1xuXHRcdHZvaWQgY2xpY2tMaXN0ZW5lcihldmVudCk7XG5cdH0pO1xuXG5cdGlmIChXR19TS0lOICE9PSAndmVjdG9yLTIwMjInKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+ID0gJGVsZW1lbnQucGFyZW50cygnYm9keScpO1xuXG5cdGNvbnN0IG9ic2VydmVyQ2FsbGJhY2sgPSAoX211dGF0aW9uczogTXV0YXRpb25SZWNvcmRbXSwgb2JzZXJ2ZXI6IE11dGF0aW9uT2JzZXJ2ZXIpOiB2b2lkID0+IHtcblx0XHRpZiAoISRib2R5Lmhhc0NsYXNzKCd2ZWN0b3Itc3RpY2t5LWhlYWRlci12aXNpYmxlJykpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRjb25zdCBTRUxFQ1RPUjogc3RyaW5nID0gT1BUSU9OUy5sb2dvdXRFbGVtZW50U2VsZWN0b3JPZlZlY3RvcjIwMjJTdGlja3lIZWFkZXI7XG5cdFx0Y29uc3QgZWxlbWVudDogSFRNTEFuY2hvckVsZW1lbnQgfCBudWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihTRUxFQ1RPUik7XG5cdFx0aWYgKCFlbGVtZW50KSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Y29uc3QgZWxlbWVudENsb25lOiBOb2RlID0gZWxlbWVudC5jbG9uZU5vZGUodHJ1ZSk7XG5cdFx0ZWxlbWVudC5yZXBsYWNlV2l0aChlbGVtZW50Q2xvbmUpO1xuXG5cdFx0cmVmcmVzaEV2ZW50TGlzdGVuZXIoJGJvZHkuZmluZChTRUxFQ1RPUiksIChldmVudDogSlF1ZXJ5LkNsaWNrRXZlbnQpOiB2b2lkID0+IHtcblx0XHRcdHZvaWQgY2xpY2tMaXN0ZW5lcihldmVudCk7XG5cdFx0fSk7XG5cdFx0b2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuXHR9O1xuXHRjb25zdCBtdXRhdGlvbk9ic2VydmVyOiBNdXRhdGlvbk9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIob2JzZXJ2ZXJDYWxsYmFjayk7XG5cdG11dGF0aW9uT2JzZXJ2ZXIub2JzZXJ2ZSgkYm9keS5nZXQoMCkgPz8gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LCB7XG5cdFx0YXR0cmlidXRlczogdHJ1ZSxcblx0XHRhdHRyaWJ1dGVGaWx0ZXI6IFsnY2xhc3MnXSxcblx0fSk7XG59O1xuXG5leHBvcnQge2FkZExpc3RlbmVyfTtcbiIsICJpbXBvcnQge2ZpbHRlckFsdGVyZWRDbGlja3N9IGZyb20gJ2V4dC5nYWRnZXQuRmlsdGVyQWx0ZXJlZENsaWNrcyc7XG5cbmNvbnN0IHJlZnJlc2hFdmVudExpc3RlbmVyID0gKCRlbGVtZW50OiBKUXVlcnksIGNsaWNrTGlzdGVuZXI6IChldmVudDogSlF1ZXJ5LkNsaWNrRXZlbnQpID0+IHZvaWQpOiB2b2lkID0+IHtcblx0Y29uc3QgaG92ZXJMaXN0ZW5lciA9ICgpOiB2b2lkID0+IHtcblx0XHQkZWxlbWVudC5vZmYoJ2NsaWNrJyk7XG5cdFx0JGVsZW1lbnQub24oXG5cdFx0XHQnY2xpY2snLFxuXHRcdFx0ZmlsdGVyQWx0ZXJlZENsaWNrcygoZXZlbnQ6IEpRdWVyeS5DbGlja0V2ZW50KTogdm9pZCA9PiB7XG5cdFx0XHRcdGNsaWNrTGlzdGVuZXIoZXZlbnQpO1xuXHRcdFx0fSlcblx0XHQpO1xuXHR9O1xuXHRjb25zdCBob3Zlckxpc3RlbmVyV2l0aERlYm91bmNlOiB0eXBlb2YgaG92ZXJMaXN0ZW5lciA9IG13LnV0aWwuZGVib3VuY2UoaG92ZXJMaXN0ZW5lciwgMjAwLCB0cnVlKTtcblxuXHQkZWxlbWVudC5vbignbW91c2VvdmVyIHRvdWNoc3RhcnQnLCBob3Zlckxpc3RlbmVyV2l0aERlYm91bmNlKTtcbn07XG5cbmV4cG9ydCB7cmVmcmVzaEV2ZW50TGlzdGVuZXJ9O1xuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7aW5pdE13QXBpfSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG5jb25zdCBhcGk6IG13LkFwaSA9IGluaXRNd0FwaShgQ29uZmlybUxvZ291dC8ke09QVElPTlMudmVyc2lvbn1gKTtcblxuZXhwb3J0IHthcGl9O1xuIiwgImltcG9ydCB7YXBpfSBmcm9tICcuLi9hcGknO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuLi9pMThuJztcbmltcG9ydCB7dG9hc3RpZnl9IGZyb20gJ2V4dC5nYWRnZXQuVG9hc3RpZnknO1xuXG5jb25zdCBsb2dvdXQgPSBhc3luYyAodG9hc3RpZnlJbnN0YW5jZTogVG9hc3RpZnlJbnN0YW5jZSk6IFByb21pc2U8dm9pZD4gPT4ge1xuXHRhd2FpdCBhcGkucG9zdFdpdGhFZGl0VG9rZW4oe1xuXHRcdGFjdGlvbjogJ2xvZ291dCcsXG5cdH0pO1xuXG5cdHRvYXN0aWZ5SW5zdGFuY2UuaGlkZVRvYXN0KCk7XG5cdHRvYXN0aWZ5KFxuXHRcdHtcblx0XHRcdHRleHQ6IGdldE1lc3NhZ2UoJ1N1Y2NlZWQnKSxcblx0XHR9LFxuXHRcdCdzdWNjZXNzJ1xuXHQpO1xuXG5cdGxvY2F0aW9uLnJlbG9hZCgpO1xufTtcblxuZXhwb3J0IHtsb2dvdXR9O1xuIiwgImltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi4vaTE4bic7XG5pbXBvcnQge3RvYXN0aWZ5fSBmcm9tICdleHQuZ2FkZ2V0LlRvYXN0aWZ5JztcblxuY29uc3Qgc2hvd0Vycm9yID0gKGVycm9yOiB1bmtub3duLCB0b2FzdGlmeUluc3RhbmNlOiBUb2FzdGlmeUluc3RhbmNlKTogdm9pZCA9PiB7XG5cdGNvbnNvbGUuZXJyb3IoJ1tDb25maXJtTG9nb3V0XSBBamF4IGVycm9yOicsIGVycm9yKTtcblx0dG9hc3RpZnlJbnN0YW5jZS5oaWRlVG9hc3QoKTtcblx0dG9hc3RpZnkoXG5cdFx0e1xuXHRcdFx0dGV4dDogZ2V0TWVzc2FnZSgnTmV0d29yayBlcnJvcicpLFxuXHRcdH0sXG5cdFx0J2Vycm9yJ1xuXHQpO1xufTtcblxuZXhwb3J0IHtzaG93RXJyb3J9O1xuIiwgImltcG9ydCB7bG9nb3V0fSBmcm9tICcuL3V0aWwvbG9nb3V0JztcbmltcG9ydCB7c2hvd0Vycm9yfSBmcm9tICcuL3V0aWwvc2hvd0Vycm9yJztcblxuY29uc3QgdHJ5TG9nb3V0ID0gYXN5bmMgKHRvYXN0aWZ5SW5zdGFuY2U6IFRvYXN0aWZ5SW5zdGFuY2UpOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0dHJ5IHtcblx0XHRhd2FpdCBsb2dvdXQodG9hc3RpZnlJbnN0YW5jZSk7XG5cdH0gY2F0Y2ggKGVycm9yOiB1bmtub3duKSB7XG5cdFx0c2hvd0Vycm9yKGVycm9yLCB0b2FzdGlmeUluc3RhbmNlKTtcblx0fVxufTtcblxuZXhwb3J0IHt0cnlMb2dvdXR9O1xuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtXR19VU0VSX05BTUV9IGZyb20gJy4vbW9kdWxlcy9jb25zdGFudCc7XG5pbXBvcnQge2FkZExpc3RlbmVyfSBmcm9tICcuL21vZHVsZXMvYWRkTGlzdGVuZXInO1xuaW1wb3J0IHtnZXRCb2R5fSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG52b2lkIGdldEJvZHkoKS50aGVuKGZ1bmN0aW9uIGNvbmZpcm1Mb2dvdXQoJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KTogdm9pZCB7XG5cdGlmICghV0dfVVNFUl9OQU1FKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgJGVsZW1lbnQ6IEpRdWVyeSA9ICRib2R5LmZpbmQoT1BUSU9OUy5sb2dvdXRFbGVtZW50U2VsZWN0b3IpO1xuXHRpZiAoISRlbGVtZW50Lmxlbmd0aCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGFkZExpc3RlbmVyKCRlbGVtZW50KTtcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0MsSUFBQUEsd0JBQXlCO0FBQ3pCLElBQUFDLGdEQUFpRDtBQUNqRCxJQUFBQyxVQUFXOztBQ0haLElBQU1DLFVBQWtCQyxHQUFHQyxPQUFPQyxJQUFJLE1BQU07QUFDNUMsSUFBTUMsZUFBOEJILEdB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QUFDLE9BQU87RUFDMUIsQ0FBQztBQUNGOztBTTFEQSxJQUFBQyxxQkFBc0JqRixRQUFBLGlCQUFBO0FBRXRCLE1BQUEsR0FBS2lGLG1CQUFBQyxTQUFRLEVBQUVDLEtBQUssU0FBU0MsY0FBY3hCLE9BQXNDO0FBQ2hGLE1BQUksQ0FBQzlELGNBQWM7QUFDbEI7RUFDRDtBQUVBLFFBQU1lLFdBQW1CK0MsTUFBTWEsS0FBYWxGLHFCQUFxQjtBQUNqRSxNQUFJLENBQUNzQixTQUFTd0UsUUFBUTtBQUNyQjtFQUNEO0FBRUEzQixjQUFZN0MsUUFBUTtBQUNyQixDQUFDOyIsCiAgIm5hbWVzIjogWyJsb2dvdXRFbGVtZW50U2VsZWN0b3IiLCAibG9nb3V0RWxlbWVudFNlbGVjdG9yT2ZWZWN0b3IyMDIyU3RpY2t5SGVhZGVyIiwgInZlcnNpb24iLCAiV0dfU0tJTiIsICJtdyIsICJjb25maWciLCAiZ2V0IiwgIldHX1VTRVJfTkFNRSIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJyZXF1aXJlIiwgImdldEkxOG5NZXNzYWdlcyIsICJsb2NhbGl6ZSIsICJlbiIsICJqYSIsICJDb25maXJtIiwgIlN1Y2NlZWQiLCAiaTE4bk1lc3NhZ2VzIiwgImdldE1lc3NhZ2UiLCAia2V5IiwgImltcG9ydF9leHRfZ2FkZ2V0NiIsICJpbXBvcnRfZXh0X2dhZGdldDIiLCAicmVmcmVzaEV2ZW50TGlzdGVuZXIiLCAiJGVsZW1lbnQiLCAiY2xpY2tMaXN0ZW5lcjIiLCAiaG92ZXJMaXN0ZW5lciIsICJvZmYiLCAib24iLCAiZmlsdGVyQWx0ZXJlZENsaWNrcyIsICJldmVudCIsICJob3Zlckxpc3RlbmVyV2l0aERlYm91bmNlIiwgInV0aWwiLCAiZGVib3VuY2UiLCAiaW1wb3J0X2V4dF9nYWRnZXQ3IiwgImltcG9ydF9leHRfZ2FkZ2V0MyIsICJhcGkiLCAiaW5pdE13QXBpIiwgImNvbmNhdCIsICJpbXBvcnRfZXh0X2dhZGdldDQiLCAibG9nb3V0IiwgIl9yZWYiLCAiX2FzeW5jVG9HZW5lcmF0b3IiLCAidG9hc3RpZnlJbnN0YW5jZSIsICJwb3N0V2l0aEVkaXRUb2tlbiIsICJhY3Rpb24iLCAiaGlkZVRvYXN0IiwgInRvYXN0aWZ5IiwgInRleHQiLCAibG9jYXRpb24iLCAicmVsb2FkIiwgIl94IiwgImFwcGx5IiwgImFyZ3VtZW50cyIsICJpbXBvcnRfZXh0X2dhZGdldDUiLCAic2hvd0Vycm9yIiwgImVycm9yIiwgImNvbnNvbGUiLCAidHJ5TG9nb3V0IiwgIl9yZWYyIiwgIl94MiIsICJjbGlja0xpc3RlbmVyIiwgIl9yZWYzIiwgInByZXZlbnREZWZhdWx0IiwgImlzQ29uZmlybSIsICJvb3VpQ29uZmlybVdpdGhTdHlsZSIsICJtc2ciLCAiZHVyYXRpb24iLCAiX3gzIiwgImFkZExpc3RlbmVyIiwgIl8kYm9keSRnZXQiLCAiJGJvZHkiLCAicGFyZW50cyIsICJvYnNlcnZlckNhbGxiYWNrIiwgIl9tdXRhdGlvbnMiLCAib2JzZXJ2ZXIiLCAiaGFzQ2xhc3MiLCAiU0VMRUNUT1IiLCAiZWxlbWVudCIsICJkb2N1bWVudCIsICJxdWVyeVNlbGVjdG9yIiwgImVsZW1lbnRDbG9uZSIsICJjbG9uZU5vZGUiLCAicmVwbGFjZVdpdGgiLCAiZmluZCIsICJkaXNjb25uZWN0IiwgIm11dGF0aW9uT2JzZXJ2ZXIiLCAiTXV0YXRpb25PYnNlcnZlciIsICJvYnNlcnZlIiwgImRvY3VtZW50RWxlbWVudCIsICJhdHRyaWJ1dGVzIiwgImF0dHJpYnV0ZUZpbHRlciIsICJpbXBvcnRfZXh0X2dhZGdldDgiLCAiZ2V0Qm9keSIsICJ0aGVuIiwgImNvbmZpcm1Mb2dvdXQiLCAibGVuZ3RoIl0KfQo=

})();

/* </nowiki> */

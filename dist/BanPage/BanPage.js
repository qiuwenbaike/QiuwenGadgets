/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/ConfirmLogout}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/BanPage}
 * @author 安忆 <i@anyi.in>, WaitSpring <me@waispring.com>
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

// dist/BanPage/BanPage.js
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
//! src/BanPage/modules/constant.ts
var WG_NAMESPACE_NUMBER = mw.config.get("wgNamespaceNumber");
var WG_PAGE_NAME = mw.config.get("wgPageName");
var WG_SCRIPT = mw.config.get("wgScript");
//! src/BanPage/modules/i18n.ts
var import_ext_gadget = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    Ban: (0, import_ext_gadget.localize)({
      en: "Ban this page",
      ja: "現在のページを無効に",
      "zh-hans": "禁用此页面",
      "zh-hant": "禁用此頁"
    }),
    Confirm: (0, import_ext_gadget.localize)({
      en: "Confirm to enforce ban on this page?",
      "zh-hans": "您确定要禁用此页面吗？",
      "zh-hant": "您確定要禁用此頁面嗎？"
    }),
    "Network error": (0, import_ext_gadget.localize)({
      en: "Network error",
      ja: "ネットワークエラー",
      "zh-hans": "网络异常",
      "zh-hant": "網路異常"
    }),
    Refreshing: (0, import_ext_gadget.localize)({
      en: "Page banned successfully, refreshing...",
      ja: "現在のページを無効になりました。再読み込みします...",
      "zh-hans": "禁用成功，即将刷新当前页面……",
      "zh-hant": "禁用成功，即將重新載入當前頁……"
    }),
    "Ban the $1": (0, import_ext_gadget.localize)({
      en: "Ban the $1",
      ja: "現在の$1を無効に",
      "zh-hans": "禁用此$1",
      "zh-hant": "禁用此$1"
    }),
    Image: (0, import_ext_gadget.localize)({
      en: "image",
      ja: "画像",
      "zh-hans": "图片",
      "zh-hant": "圖片"
    }),
    Page: (0, import_ext_gadget.localize)({
      en: "page",
      ja: "ページ",
      "zh-hans": "页面",
      "zh-hant": "頁"
    }),
    Template: (0, import_ext_gadget.localize)({
      en: "template",
      ja: "テンプレート",
      zh: "模板"
    })
  };
};
var i18nMessages = getI18nMessages();
var getMessage = (key) => {
  return i18nMessages[key] || key;
};
//! src/BanPage/modules/util/generateEditParams.ts
var generateEditParams = () => {
  let targetPage = "Qiuwen:首页";
  let redirectTemplate = "";
  let summary = getMessage("Ban the $1");
  switch (WG_NAMESPACE_NUMBER) {
    case 6:
      targetPage = "File:Banned Images.svg";
      redirectTemplate = "{{文件重定向}}";
      summary = summary.replace("$1", getMessage("Image"));
      break;
    case 10:
      targetPage = "Template:Void";
      redirectTemplate = "{{模板重定向}}";
      summary = summary.replace("$1", getMessage("Template"));
      break;
    default:
      summary = summary.replace("$1", getMessage("Page"));
      break;
  }
  const text = "#REDIRECT [[".concat(targetPage, "]]\n").concat(redirectTemplate);
  return {
    targetPage,
    text,
    summary
  };
};
//! src/BanPage/options.json
var version = "3.0";
//! src/BanPage/modules/api.ts
var import_ext_gadget2 = require("ext.gadget.Util");
var api = (0, import_ext_gadget2.initMwApi)("BanPage/".concat(version));
//! src/BanPage/modules/util/refreshPage.ts
var import_ext_gadget3 = require("ext.gadget.Toastify");
var refresh = (targetPage) => {
  (0, import_ext_gadget3.toastify)({
    text: getMessage("Refreshing"),
    duration: -1
  }, "success");
  location.replace(mw.util.getUrl(WG_SCRIPT, {
    title: targetPage
  }));
};
//! src/BanPage/modules/util/create.ts
var create = /* @__PURE__ */ function() {
  var _ref = _asyncToGenerator(function* (editParams) {
    const {
      targetPage,
      text,
      summary
    } = editParams;
    yield api.create(WG_PAGE_NAME, {
      summary
    }, text);
    refresh(targetPage);
  });
  return function create2(_x) {
    return _ref.apply(this, arguments);
  };
}();
//! src/BanPage/modules/util/edit.ts
var edit = /* @__PURE__ */ function() {
  var _ref2 = _asyncToGenerator(function* (editParams) {
    const {
      targetPage,
      text,
      summary
    } = editParams;
    yield api.edit(WG_PAGE_NAME, () => {
      return {
        text,
        summary,
        minor: true
      };
    });
    refresh(targetPage);
  });
  return function edit2(_x2) {
    return _ref2.apply(this, arguments);
  };
}();
//! src/BanPage/modules/util/showError.ts
var import_ext_gadget4 = require("ext.gadget.Toastify");
var showError = (error) => {
  console.error("[BanPage] Ajax error:", error);
  (0, import_ext_gadget4.toastify)({
    text: getMessage("Network error"),
    close: true,
    duration: -1
  }, "error");
};
//! src/BanPage/modules/editPage.ts
var editPage = /* @__PURE__ */ function() {
  var _ref3 = _asyncToGenerator(function* () {
    const editParams = generateEditParams();
    try {
      yield edit(editParams);
    } catch {
      try {
        yield create(editParams);
      } catch (error) {
        showError(error);
      }
    }
  });
  return function editPage2() {
    return _ref3.apply(this, arguments);
  };
}();
//! src/BanPage/modules/addListener.ts
var import_ext_gadget5 = require("ext.gadget.Util");
var addListener = ($element) => {
  const clickListener = /* @__PURE__ */ function() {
    var _ref4 = _asyncToGenerator(function* (event) {
      event.preventDefault();
      const isConfirm = yield (0, import_ext_gadget5.oouiConfirmWithStyle)(getMessage("Confirm"));
      if (!isConfirm) {
        return;
      }
      void editPage();
    });
    return function clickListener2(_x3) {
      return _ref4.apply(this, arguments);
    };
  }();
  $element.on("click", (event) => {
    void clickListener(event);
  });
};
//! src/BanPage/modules/addPortletLink.ts
var addPortletLink = ($body) => {
  const portletId = $body.find("#p-cactions").length ? "p-cactions" : "p-tb";
  const element = mw.util.addPortletLink(portletId, "#", getMessage("Ban"), "t-banpage");
  if (!element) {
    return;
  }
  const $element = $(element);
  let $target = $element.find("a");
  if (!$target.length) {
    $target = $element;
  }
  addListener($target);
};
//! src/BanPage/BanPage.ts
var import_ext_gadget6 = require("ext.gadget.Util");
if (WG_NAMESPACE_NUMBER >= 0) {
  void (0, import_ext_gadget6.getBody)().then(addPortletLink);
}

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0JhblBhZ2UvbW9kdWxlcy9jb25zdGFudC50cyIsICJzcmMvQmFuUGFnZS9tb2R1bGVzL2kxOG4udHMiLCAic3JjL0JhblBhZ2UvbW9kdWxlcy91dGlsL2dlbmVyYXRlRWRpdFBhcmFtcy50cyIsICJzcmMvQmFuUGFnZS9vcHRpb25zLmpzb24iLCAic3JjL0JhblBhZ2UvbW9kdWxlcy9hcGkudHMiLCAic3JjL0JhblBhZ2UvbW9kdWxlcy91dGlsL3JlZnJlc2hQYWdlLnRzIiwgInNyYy9CYW5QYWdlL21vZHVsZXMvdXRpbC9jcmVhdGUudHMiLCAic3JjL0JhblBhZ2UvbW9kdWxlcy91dGlsL2VkaXQudHMiLCAic3JjL0JhblBhZ2UvbW9kdWxlcy91dGlsL3Nob3dFcnJvci50cyIsICJzcmMvQmFuUGFnZS9tb2R1bGVzL2VkaXRQYWdlLnRzIiwgInNyYy9CYW5QYWdlL21vZHVsZXMvYWRkTGlzdGVuZXIudHMiLCAic3JjL0JhblBhZ2UvbW9kdWxlcy9hZGRQb3J0bGV0TGluay50cyIsICJzcmMvQmFuUGFnZS9CYW5QYWdlLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBXR19OQU1FU1BBQ0VfTlVNQkVSOiBudW1iZXIgPSBtdy5jb25maWcuZ2V0KCd3Z05hbWVzcGFjZU51bWJlcicpO1xuY29uc3QgV0dfUEFHRV9OQU1FOiBzdHJpbmcgPSBtdy5jb25maWcuZ2V0KCd3Z1BhZ2VOYW1lJyk7XG5jb25zdCBXR19TQ1JJUFQ6IHN0cmluZyA9IG13LmNvbmZpZy5nZXQoJ3dnU2NyaXB0Jyk7XG5cbmV4cG9ydCB7V0dfTkFNRVNQQUNFX05VTUJFUiwgV0dfUEFHRV9OQU1FLCBXR19TQ1JJUFR9O1xuIiwgImltcG9ydCB7bG9jYWxpemV9IGZyb20gJ2V4dC5nYWRnZXQuaTE4bic7XG5cbmNvbnN0IGdldEkxOG5NZXNzYWdlcyA9ICgpID0+IHtcblx0cmV0dXJuIHtcblx0XHRCYW46IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQmFuIHRoaXMgcGFnZScsXG5cdFx0XHRqYTogJ+ePvuWcqOOBruODmuODvOOCuOOCkueEoeWKueOBqycsXG5cdFx0XHQnemgtaGFucyc6ICfnpoHnlKjmraTpobXpnaInLFxuXHRcdFx0J3poLWhhbnQnOiAn56aB55So5q2k6aCBJyxcblx0XHR9KSxcblx0XHRDb25maXJtOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0NvbmZpcm0gdG8gZW5mb3JjZSBiYW4gb24gdGhpcyBwYWdlPycsXG5cdFx0XHQnemgtaGFucyc6ICfmgqjnoa7lrpropoHnpoHnlKjmraTpobXpnaLlkJfvvJ8nLFxuXHRcdFx0J3poLWhhbnQnOiAn5oKo56K65a6a6KaB56aB55So5q2k6aCB6Z2i5ZeO77yfJyxcblx0XHR9KSxcblx0XHQnTmV0d29yayBlcnJvcic6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnTmV0d29yayBlcnJvcicsXG5cdFx0XHRqYTogJ+ODjeODg+ODiOODr+ODvOOCr+OCqOODqeODvCcsXG5cdFx0XHQnemgtaGFucyc6ICfnvZHnu5zlvILluLgnLFxuXHRcdFx0J3poLWhhbnQnOiAn57ay6Lev55Ww5bi4Jyxcblx0XHR9KSxcblx0XHRSZWZyZXNoaW5nOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1BhZ2UgYmFubmVkIHN1Y2Nlc3NmdWxseSwgcmVmcmVzaGluZy4uLicsXG5cdFx0XHRqYTogJ+ePvuWcqOOBruODmuODvOOCuOOCkueEoeWKueOBq+OBquOCiuOBvuOBl+OBn+OAguWGjeiqreOBv+i+vOOBv+OBl+OBvuOBmS4uLicsXG5cdFx0XHQnemgtaGFucyc6ICfnpoHnlKjmiJDlip/vvIzljbPlsIbliLfmlrDlvZPliY3pobXpnaLigKbigKYnLFxuXHRcdFx0J3poLWhhbnQnOiAn56aB55So5oiQ5Yqf77yM5Y2z5bCH6YeN5paw6LyJ5YWl55W25YmN6aCB4oCm4oCmJyxcblx0XHR9KSxcblx0XHQnQmFuIHRoZSAkMSc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQmFuIHRoZSAkMScsXG5cdFx0XHRqYTogJ+ePvuWcqOOBriQx44KS54Sh5Yq544GrJyxcblx0XHRcdCd6aC1oYW5zJzogJ+emgeeUqOatpCQxJyxcblx0XHRcdCd6aC1oYW50JzogJ+emgeeUqOatpCQxJyxcblx0XHR9KSxcblx0XHRJbWFnZTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdpbWFnZScsXG5cdFx0XHRqYTogJ+eUu+WDjycsXG5cdFx0XHQnemgtaGFucyc6ICflm77niYcnLFxuXHRcdFx0J3poLWhhbnQnOiAn5ZyW54mHJyxcblx0XHR9KSxcblx0XHRQYWdlOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ3BhZ2UnLFxuXHRcdFx0amE6ICfjg5rjg7zjgrgnLFxuXHRcdFx0J3poLWhhbnMnOiAn6aG16Z2iJyxcblx0XHRcdCd6aC1oYW50JzogJ+mggScsXG5cdFx0fSksXG5cdFx0VGVtcGxhdGU6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAndGVtcGxhdGUnLFxuXHRcdFx0amE6ICfjg4bjg7Pjg5fjg6zjg7zjg4gnLFxuXHRcdFx0emg6ICfmqKHmnb8nLFxuXHRcdH0pLFxuXHR9O1xufTtcbmNvbnN0IGkxOG5NZXNzYWdlcyA9IGdldEkxOG5NZXNzYWdlcygpO1xuXG5jb25zdCBnZXRNZXNzYWdlOiBHZXRNZXNzYWdlczx0eXBlb2YgaTE4bk1lc3NhZ2VzPiA9IChrZXkpID0+IHtcblx0cmV0dXJuIGkxOG5NZXNzYWdlc1trZXldIHx8IGtleTtcbn07XG5cbmV4cG9ydCB7Z2V0TWVzc2FnZX07XG4iLCAiaW1wb3J0IHtXR19OQU1FU1BBQ0VfTlVNQkVSfSBmcm9tICcuLi9jb25zdGFudCc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4uL2kxOG4nO1xuXG50eXBlIEVkaXRQYXJhbXMgPSB7XG5cdHRhcmdldFBhZ2U6IHN0cmluZztcblx0dGV4dDogc3RyaW5nO1xuXHRzdW1tYXJ5OiBzdHJpbmc7XG59O1xuXG5jb25zdCBnZW5lcmF0ZUVkaXRQYXJhbXMgPSAoKTogRWRpdFBhcmFtcyA9PiB7XG5cdGxldCB0YXJnZXRQYWdlOiBzdHJpbmcgPSAnUWl1d2VuOummlumhtSc7XG5cdGxldCByZWRpcmVjdFRlbXBsYXRlOiBzdHJpbmcgPSAnJztcblx0bGV0IHN1bW1hcnk6IHN0cmluZyA9IGdldE1lc3NhZ2UoJ0JhbiB0aGUgJDEnKTtcblxuXHRzd2l0Y2ggKFdHX05BTUVTUEFDRV9OVU1CRVIpIHtcblx0XHRjYXNlIDY6XG5cdFx0XHR0YXJnZXRQYWdlID0gJ0ZpbGU6QmFubmVkIEltYWdlcy5zdmcnO1xuXHRcdFx0cmVkaXJlY3RUZW1wbGF0ZSA9ICd7e+aWh+S7tumHjeWumuWQkX19Jztcblx0XHRcdHN1bW1hcnkgPSBzdW1tYXJ5LnJlcGxhY2UoJyQxJywgZ2V0TWVzc2FnZSgnSW1hZ2UnKSk7XG5cdFx0XHRicmVhaztcblx0XHRjYXNlIDEwOlxuXHRcdFx0dGFyZ2V0UGFnZSA9ICdUZW1wbGF0ZTpWb2lkJztcblx0XHRcdHJlZGlyZWN0VGVtcGxhdGUgPSAne3vmqKHmnb/ph43lrprlkJF9fSc7XG5cdFx0XHRzdW1tYXJ5ID0gc3VtbWFyeS5yZXBsYWNlKCckMScsIGdldE1lc3NhZ2UoJ1RlbXBsYXRlJykpO1xuXHRcdFx0YnJlYWs7XG5cdFx0ZGVmYXVsdDpcblx0XHRcdHN1bW1hcnkgPSBzdW1tYXJ5LnJlcGxhY2UoJyQxJywgZ2V0TWVzc2FnZSgnUGFnZScpKTtcblx0XHRcdGJyZWFrO1xuXHR9XG5cblx0Y29uc3QgdGV4dDogc3RyaW5nID0gYCNSRURJUkVDVCBbWyR7dGFyZ2V0UGFnZX1dXVxcbiR7cmVkaXJlY3RUZW1wbGF0ZX1gO1xuXG5cdHJldHVybiB7XG5cdFx0dGFyZ2V0UGFnZSxcblx0XHR0ZXh0LFxuXHRcdHN1bW1hcnksXG5cdH07XG59O1xuXG5leHBvcnQge3R5cGUgRWRpdFBhcmFtcywgZ2VuZXJhdGVFZGl0UGFyYW1zfTtcbiIsICJ7XG5cdFwidmVyc2lvblwiOiBcIjMuMFwiXG59XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtpbml0TXdBcGl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmNvbnN0IGFwaTogbXcuQXBpID0gaW5pdE13QXBpKGBCYW5QYWdlLyR7T1BUSU9OUy52ZXJzaW9ufWApO1xuXG5leHBvcnQge2FwaX07XG4iLCAiaW1wb3J0IHtXR19TQ1JJUFR9IGZyb20gJy4uL2NvbnN0YW50JztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi4vaTE4bic7XG5pbXBvcnQge3RvYXN0aWZ5fSBmcm9tICdleHQuZ2FkZ2V0LlRvYXN0aWZ5JztcblxuY29uc3QgcmVmcmVzaCA9ICh0YXJnZXRQYWdlOiBzdHJpbmcpOiB2b2lkID0+IHtcblx0dG9hc3RpZnkoXG5cdFx0e1xuXHRcdFx0dGV4dDogZ2V0TWVzc2FnZSgnUmVmcmVzaGluZycpLFxuXHRcdFx0ZHVyYXRpb246IC0xLFxuXHRcdH0sXG5cdFx0J3N1Y2Nlc3MnXG5cdCk7XG5cblx0bG9jYXRpb24ucmVwbGFjZShcblx0XHRtdy51dGlsLmdldFVybChXR19TQ1JJUFQsIHtcblx0XHRcdHRpdGxlOiB0YXJnZXRQYWdlLFxuXHRcdH0pXG5cdCk7XG59O1xuXG5leHBvcnQge3JlZnJlc2h9O1xuIiwgImltcG9ydCB7dHlwZSBFZGl0UGFyYW1zfSBmcm9tICcuL2dlbmVyYXRlRWRpdFBhcmFtcyc7XG5pbXBvcnQge1dHX1BBR0VfTkFNRX0gZnJvbSAnLi4vY29uc3RhbnQnO1xuaW1wb3J0IHthcGl9IGZyb20gJy4uL2FwaSc7XG5pbXBvcnQge3JlZnJlc2h9IGZyb20gJy4vcmVmcmVzaFBhZ2UnO1xuXG5jb25zdCBjcmVhdGUgPSBhc3luYyAoZWRpdFBhcmFtczogRWRpdFBhcmFtcyk6IFByb21pc2U8dm9pZD4gPT4ge1xuXHRjb25zdCB7dGFyZ2V0UGFnZSwgdGV4dCwgc3VtbWFyeX0gPSBlZGl0UGFyYW1zO1xuXG5cdGF3YWl0IGFwaS5jcmVhdGUoXG5cdFx0V0dfUEFHRV9OQU1FLFxuXHRcdHtcblx0XHRcdHN1bW1hcnksXG5cdFx0fSxcblx0XHR0ZXh0XG5cdCk7XG5cblx0cmVmcmVzaCh0YXJnZXRQYWdlKTtcbn07XG5cbmV4cG9ydCB7Y3JlYXRlfTtcbiIsICJpbXBvcnQge3R5cGUgRWRpdFBhcmFtc30gZnJvbSAnLi9nZW5lcmF0ZUVkaXRQYXJhbXMnO1xuaW1wb3J0IHtXR19QQUdFX05BTUV9IGZyb20gJy4uL2NvbnN0YW50JztcbmltcG9ydCB7YXBpfSBmcm9tICcuLi9hcGknO1xuaW1wb3J0IHtyZWZyZXNofSBmcm9tICcuL3JlZnJlc2hQYWdlJztcblxuY29uc3QgZWRpdCA9IGFzeW5jIChlZGl0UGFyYW1zOiBFZGl0UGFyYW1zKTogUHJvbWlzZTx2b2lkPiA9PiB7XG5cdGNvbnN0IHt0YXJnZXRQYWdlLCB0ZXh0LCBzdW1tYXJ5fSA9IGVkaXRQYXJhbXM7XG5cblx0YXdhaXQgYXBpLmVkaXQoV0dfUEFHRV9OQU1FLCAoKTogQXBpRWRpdFBhZ2VQYXJhbXMgPT4ge1xuXHRcdHJldHVybiB7XG5cdFx0XHR0ZXh0LFxuXHRcdFx0c3VtbWFyeSxcblx0XHRcdG1pbm9yOiB0cnVlLFxuXHRcdH07XG5cdH0pO1xuXG5cdHJlZnJlc2godGFyZ2V0UGFnZSk7XG59O1xuXG5leHBvcnQge2VkaXR9O1xuIiwgImltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi4vaTE4bic7XG5pbXBvcnQge3RvYXN0aWZ5fSBmcm9tICdleHQuZ2FkZ2V0LlRvYXN0aWZ5JztcblxuY29uc3Qgc2hvd0Vycm9yID0gKGVycm9yOiB1bmtub3duKTogdm9pZCA9PiB7XG5cdGNvbnNvbGUuZXJyb3IoJ1tCYW5QYWdlXSBBamF4IGVycm9yOicsIGVycm9yKTtcblx0dG9hc3RpZnkoXG5cdFx0e1xuXHRcdFx0dGV4dDogZ2V0TWVzc2FnZSgnTmV0d29yayBlcnJvcicpLFxuXHRcdFx0Y2xvc2U6IHRydWUsXG5cdFx0XHRkdXJhdGlvbjogLTEsXG5cdFx0fSxcblx0XHQnZXJyb3InXG5cdCk7XG59O1xuXG5leHBvcnQge3Nob3dFcnJvcn07XG4iLCAiaW1wb3J0IHt0eXBlIEVkaXRQYXJhbXMsIGdlbmVyYXRlRWRpdFBhcmFtc30gZnJvbSAnLi91dGlsL2dlbmVyYXRlRWRpdFBhcmFtcyc7XG5pbXBvcnQge2NyZWF0ZX0gZnJvbSAnLi91dGlsL2NyZWF0ZSc7XG5pbXBvcnQge2VkaXR9IGZyb20gJy4vdXRpbC9lZGl0JztcbmltcG9ydCB7c2hvd0Vycm9yfSBmcm9tICcuL3V0aWwvc2hvd0Vycm9yJztcblxuY29uc3QgZWRpdFBhZ2UgPSBhc3luYyAoKTogUHJvbWlzZTx2b2lkPiA9PiB7XG5cdGNvbnN0IGVkaXRQYXJhbXM6IEVkaXRQYXJhbXMgPSBnZW5lcmF0ZUVkaXRQYXJhbXMoKTtcblxuXHR0cnkge1xuXHRcdGF3YWl0IGVkaXQoZWRpdFBhcmFtcyk7XG5cdH0gY2F0Y2gge1xuXHRcdHRyeSB7XG5cdFx0XHRhd2FpdCBjcmVhdGUoZWRpdFBhcmFtcyk7XG5cdFx0fSBjYXRjaCAoZXJyb3I6IHVua25vd24pIHtcblx0XHRcdHNob3dFcnJvcihlcnJvcik7XG5cdFx0fVxuXHR9XG59O1xuXG5leHBvcnQge2VkaXRQYWdlfTtcbiIsICJpbXBvcnQge2VkaXRQYWdlfSBmcm9tICcuL2VkaXRQYWdlJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9pMThuJztcbmltcG9ydCB7b291aUNvbmZpcm1XaXRoU3R5bGV9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmNvbnN0IGFkZExpc3RlbmVyID0gKCRlbGVtZW50OiBKUXVlcnkpOiB2b2lkID0+IHtcblx0Y29uc3QgY2xpY2tMaXN0ZW5lciA9IGFzeW5jIChldmVudDogSlF1ZXJ5LkNsaWNrRXZlbnQpOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cdFx0Y29uc3QgaXNDb25maXJtOiBib29sZWFuID0gYXdhaXQgb291aUNvbmZpcm1XaXRoU3R5bGUoZ2V0TWVzc2FnZSgnQ29uZmlybScpKTtcblx0XHRpZiAoIWlzQ29uZmlybSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHZvaWQgZWRpdFBhZ2UoKTtcblx0fTtcblxuXHQkZWxlbWVudC5vbignY2xpY2snLCAoZXZlbnQ6IEpRdWVyeS5DbGlja0V2ZW50KTogdm9pZCA9PiB7XG5cdFx0dm9pZCBjbGlja0xpc3RlbmVyKGV2ZW50KTtcblx0fSk7XG59O1xuXG5leHBvcnQge2FkZExpc3RlbmVyfTtcbiIsICJpbXBvcnQge2FkZExpc3RlbmVyfSBmcm9tICcuL2FkZExpc3RlbmVyJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9pMThuJztcblxuY29uc3QgYWRkUG9ydGxldExpbmsgPSAoJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KTogdm9pZCA9PiB7XG5cdGNvbnN0IHBvcnRsZXRJZDogJ3AtY2FjdGlvbnMnIHwgJ3AtdGInID0gJGJvZHkuZmluZCgnI3AtY2FjdGlvbnMnKS5sZW5ndGggPyAncC1jYWN0aW9ucycgOiAncC10Yic7XG5cdGNvbnN0IGVsZW1lbnQ6IEhUTUxMSUVsZW1lbnQgfCBudWxsID0gbXcudXRpbC5hZGRQb3J0bGV0TGluayhwb3J0bGV0SWQsICcjJywgZ2V0TWVzc2FnZSgnQmFuJyksICd0LWJhbnBhZ2UnKTtcblx0aWYgKCFlbGVtZW50KSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgJGVsZW1lbnQ6IEpRdWVyeSA9ICQoZWxlbWVudCk7XG5cdGxldCAkdGFyZ2V0OiBKUXVlcnkgPSAkZWxlbWVudC5maW5kKCdhJyk7XG5cdGlmICghJHRhcmdldC5sZW5ndGgpIHtcblx0XHQkdGFyZ2V0ID0gJGVsZW1lbnQ7XG5cdH1cblxuXHRhZGRMaXN0ZW5lcigkdGFyZ2V0KTtcbn07XG5cbmV4cG9ydCB7YWRkUG9ydGxldExpbmt9O1xuIiwgImltcG9ydCB7V0dfTkFNRVNQQUNFX05VTUJFUn0gZnJvbSAnLi9tb2R1bGVzL2NvbnN0YW50JztcbmltcG9ydCB7YWRkUG9ydGxldExpbmt9IGZyb20gJy4vbW9kdWxlcy9hZGRQb3J0bGV0TGluayc7XG5pbXBvcnQge2dldEJvZHl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmlmIChXR19OQU1FU1BBQ0VfTlVNQkVSID49IDApIHtcblx0dm9pZCBnZXRCb2R5KCkudGhlbihhZGRQb3J0bGV0TGluayk7XG59XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFNQSxzQkFBOEJDLEdBQUdDLE9BQU9DLElBQUksbUJBQW1CO0FBQ3JFLElBQU1DLGVBQXVCSCxHQUFHQyxPQUFPQyxJQUFJLFlBQVk7QUFDdkQsSUFBTUUsWUFBb0JKLEdBQUdDLE9BQU9DLElBQUksVUFBVTs7QUNGbEQsSUFBQUcsb0JBQXVCQyxRQUFBLGlCQUFBO0FBRXZCLElBQU1DLGtCQUFrQkEsTUFBTTtBQUM3QixTQUFPO0lBQ05DLE1BQUEsR0FBS0gsa0JBQUFJLFVBQVM7TUFDYkMsSUFBSTtNQUNKQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0RDLFVBQUEsR0FBU1Asa0JBQUFJLFVBQVM7TUFDakJDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDRCxrQkFBQSxHQUFpQkwsa0JBQUFJLFVBQVM7TUFDekJDLElBQUk7TUFDSkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNERSxhQUFBLEdBQVlSLGtCQUFBSSxVQUFTO01BQ3BCQyxJQUFJO01BQ0pDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDRCxlQUFBLEdBQWNOLGtCQUFBSSxVQUFTO01BQ3RCQyxJQUFJO01BQ0pDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDREcsUUFBQSxHQUFPVCxrQkFBQUksVUFBUztNQUNmQyxJQUFJO01BQ0pDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDREksT0FBQSxHQUFNVixrQkFBQUksVUFBUztNQUNkQyxJQUFJO01BQ0pDLElBQUk7TUFD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cEI7O0FDZkEsSUFBQUMscUJBQXNCdkUsUUFBQSxpQkFBQTtBQUV0QixJQUFJUCx1QkFBdUIsR0FBRztBQUM3QixRQUFBLEdBQUs4RSxtQkFBQUMsU0FBUSxFQUFFQyxLQUFLVixjQUFjO0FBQ25DOyIsCiAgIm5hbWVzIjogWyJXR19OQU1FU1BBQ0VfTlVNQkVSIiwgIm13IiwgImNvbmZpZyIsICJnZXQiLCAiV0dfUEFHRV9OQU1FIiwgIldHX1NDUklQVCIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJyZXF1aXJlIiwgImdldEkxOG5NZXNzYWdlcyIsICJCYW4iLCAibG9jYWxpemUiLCAiZW4iLCAiamEiLCAiQ29uZmlybSIsICJSZWZyZXNoaW5nIiwgIkltYWdlIiwgIlBhZ2UiLCAiVGVtcGxhdGUiLCAiemgiLCAiaTE4bk1lc3NhZ2VzIiwgImdldE1lc3NhZ2UiLCAia2V5IiwgImdlbmVyYXRlRWRpdFBhcmFtcyIsICJ0YXJnZXRQYWdlIiwgInJlZGlyZWN0VGVtcGxhdGUiLCAic3VtbWFyeSIsICJyZXBsYWNlIiwgInRleHQiLCAiY29uY2F0IiwgInZlcnNpb24iLCAiaW1wb3J0X2V4dF9nYWRnZXQyIiwgImFwaSIsICJpbml0TXdBcGkiLCAiaW1wb3J0X2V4dF9nYWRnZXQzIiwgInJlZnJlc2giLCAidG9hc3RpZnkiLCAiZHVyYXRpb24iLCAibG9jYXRpb24iLCAidXRpbCIsICJnZXRVcmwiLCAidGl0bGUiLCAiY3JlYXRlIiwgIl9yZWYiLCAiX2FzeW5jVG9HZW5lcmF0b3IiLCAiZWRpdFBhcmFtcyIsICJfeCIsICJhcHBseSIsICJhcmd1bWVudHMiLCAiZWRpdCIsICJfcmVmMiIsICJtaW5vciIsICJfeDIiLCAiaW1wb3J0X2V4dF9nYWRnZXQ0IiwgInNob3dFcnJvciIsICJlcnJvciIsICJjb25zb2xlIiwgImNsb3NlIiwgImVkaXRQYWdlIiwgIl9yZWYzIiwgImltcG9ydF9leHRfZ2FkZ2V0NSIsICJhZGRMaXN0ZW5lciIsICIkZWxlbWVudCIsICJjbGlja0xpc3RlbmVyIiwgIl9yZWY0IiwgImV2ZW50IiwgInByZXZlbnREZWZhdWx0IiwgImlzQ29uZmlybSIsICJvb3VpQ29uZmlybVdpdGhTdHlsZSIsICJfeDMiLCAib24iLCAiYWRkUG9ydGxldExpbmsiLCAiJGJvZHkiLCAicG9ydGxldElkIiwgImZpbmQiLCAibGVuZ3RoIiwgImVsZW1lbnQiLCAiJCIsICIkdGFyZ2V0IiwgImltcG9ydF9leHRfZ2FkZ2V0NiIsICJnZXRCb2R5IiwgInRoZW4iXQp9Cg==

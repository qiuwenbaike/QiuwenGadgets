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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0JhblBhZ2UvbW9kdWxlcy9jb25zdGFudC50cyIsICJzcmMvQmFuUGFnZS9tb2R1bGVzL2kxOG4udHMiLCAic3JjL0JhblBhZ2UvbW9kdWxlcy91dGlsL2dlbmVyYXRlRWRpdFBhcmFtcy50cyIsICJzcmMvQmFuUGFnZS9vcHRpb25zLmpzb24iLCAic3JjL0JhblBhZ2UvbW9kdWxlcy9hcGkudHMiLCAic3JjL0JhblBhZ2UvbW9kdWxlcy91dGlsL3JlZnJlc2hQYWdlLnRzIiwgInNyYy9CYW5QYWdlL21vZHVsZXMvdXRpbC9jcmVhdGUudHMiLCAic3JjL0JhblBhZ2UvbW9kdWxlcy91dGlsL2VkaXQudHMiLCAic3JjL0JhblBhZ2UvbW9kdWxlcy91dGlsL3Nob3dFcnJvci50cyIsICJzcmMvQmFuUGFnZS9tb2R1bGVzL2VkaXRQYWdlLnRzIiwgInNyYy9CYW5QYWdlL21vZHVsZXMvYWRkTGlzdGVuZXIudHMiLCAic3JjL0JhblBhZ2UvbW9kdWxlcy9hZGRQb3J0bGV0TGluay50cyIsICJzcmMvQmFuUGFnZS9CYW5QYWdlLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBXR19OQU1FU1BBQ0VfTlVNQkVSOiBudW1iZXIgPSBtdy5jb25maWcuZ2V0KCd3Z05hbWVzcGFjZU51bWJlcicpO1xuY29uc3QgV0dfUEFHRV9OQU1FOiBzdHJpbmcgPSBtdy5jb25maWcuZ2V0KCd3Z1BhZ2VOYW1lJyk7XG5jb25zdCBXR19TQ1JJUFQ6IHN0cmluZyA9IG13LmNvbmZpZy5nZXQoJ3dnU2NyaXB0Jyk7XG5cbmV4cG9ydCB7V0dfTkFNRVNQQUNFX05VTUJFUiwgV0dfUEFHRV9OQU1FLCBXR19TQ1JJUFR9O1xuIiwgImltcG9ydCB7bG9jYWxpemV9IGZyb20gJ2V4dC5nYWRnZXQuaTE4bic7XG5cbmNvbnN0IGdldEkxOG5NZXNzYWdlcyA9ICgpID0+IHtcblx0cmV0dXJuIHtcblx0XHRCYW46IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQmFuIHRoaXMgcGFnZScsXG5cdFx0XHRqYTogJ+ePvuWcqOOBruODmuODvOOCuOOCkueEoeWKueOBqycsXG5cdFx0XHQnemgtaGFucyc6ICfnpoHnlKjmraTpobXpnaInLFxuXHRcdFx0J3poLWhhbnQnOiAn56aB55So5q2k6aCBJyxcblx0XHR9KSxcblx0XHRDb25maXJtOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0NvbmZpcm0gdG8gZW5mb3JjZSBiYW4gb24gdGhpcyBwYWdlPycsXG5cdFx0XHQnemgtaGFucyc6ICfmgqjnoa7lrpropoHnpoHnlKjmraTpobXpnaLlkJfvvJ8nLFxuXHRcdFx0J3poLWhhbnQnOiAn5oKo56K65a6a6KaB56aB55So5q2k6aCB6Z2i5ZeO77yfJyxcblx0XHR9KSxcblx0XHQnTmV0d29yayBlcnJvcic6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnTmV0d29yayBlcnJvcicsXG5cdFx0XHRqYTogJ+ODjeODg+ODiOODr+ODvOOCr+OCqOODqeODvCcsXG5cdFx0XHQnemgtaGFucyc6ICfnvZHnu5zlvILluLgnLFxuXHRcdFx0J3poLWhhbnQnOiAn57ay6Lev55Ww5bi4Jyxcblx0XHR9KSxcblx0XHRSZWZyZXNoaW5nOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1BhZ2UgYmFubmVkIHN1Y2Nlc3NmdWxseSwgcmVmcmVzaGluZy4uLicsXG5cdFx0XHRqYTogJ+ePvuWcqOOBruODmuODvOOCuOOCkueEoeWKueOBq+OBquOCiuOBvuOBl+OBn+OAguWGjeiqreOBv+i+vOOBv+OBl+OBvuOBmS4uLicsXG5cdFx0XHQnemgtaGFucyc6ICfnpoHnlKjmiJDlip/vvIzljbPlsIbliLfmlrDlvZPliY3pobXpnaLigKbigKYnLFxuXHRcdFx0J3poLWhhbnQnOiAn56aB55So5oiQ5Yqf77yM5Y2z5bCH6YeN5paw6LyJ5YWl55W25YmN6aCB4oCm4oCmJyxcblx0XHR9KSxcblx0XHQnQmFuIHRoZSAkMSc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQmFuIHRoZSAkMScsXG5cdFx0XHRqYTogJ+ePvuWcqOOBriQx44KS54Sh5Yq544GrJyxcblx0XHRcdCd6aC1oYW5zJzogJ+emgeeUqOatpCQxJyxcblx0XHRcdCd6aC1oYW50JzogJ+emgeeUqOatpCQxJyxcblx0XHR9KSxcblx0XHRJbWFnZTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdpbWFnZScsXG5cdFx0XHRqYTogJ+eUu+WDjycsXG5cdFx0XHQnemgtaGFucyc6ICflm77niYcnLFxuXHRcdFx0J3poLWhhbnQnOiAn5ZyW54mHJyxcblx0XHR9KSxcblx0XHRQYWdlOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ3BhZ2UnLFxuXHRcdFx0amE6ICfjg5rjg7zjgrgnLFxuXHRcdFx0J3poLWhhbnMnOiAn6aG16Z2iJyxcblx0XHRcdCd6aC1oYW50JzogJ+mggScsXG5cdFx0fSksXG5cdFx0VGVtcGxhdGU6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAndGVtcGxhdGUnLFxuXHRcdFx0amE6ICfjg4bjg7Pjg5fjg6zjg7zjg4gnLFxuXHRcdFx0emg6ICfmqKHmnb8nLFxuXHRcdH0pLFxuXHR9O1xufTtcbmNvbnN0IGkxOG5NZXNzYWdlcyA9IGdldEkxOG5NZXNzYWdlcygpO1xuXG5jb25zdCBnZXRNZXNzYWdlOiBHZXRNZXNzYWdlczx0eXBlb2YgaTE4bk1lc3NhZ2VzPiA9IChrZXkpID0+IHtcblx0cmV0dXJuIGkxOG5NZXNzYWdlc1trZXldIHx8IGtleTtcbn07XG5cbmV4cG9ydCB7Z2V0TWVzc2FnZX07XG4iLCAiaW1wb3J0IHtXR19OQU1FU1BBQ0VfTlVNQkVSfSBmcm9tICcuLi9jb25zdGFudCc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4uL2kxOG4nO1xuXG50eXBlIEVkaXRQYXJhbXMgPSB7XG5cdHRhcmdldFBhZ2U6IHN0cmluZztcblx0dGV4dDogc3RyaW5nO1xuXHRzdW1tYXJ5OiBzdHJpbmc7XG59O1xuXG5jb25zdCBnZW5lcmF0ZUVkaXRQYXJhbXMgPSAoKTogRWRpdFBhcmFtcyA9PiB7XG5cdGxldCB0YXJnZXRQYWdlOiBzdHJpbmcgPSAnUWl1d2VuOummlumhtSc7XG5cdGxldCByZWRpcmVjdFRlbXBsYXRlOiBzdHJpbmcgPSAnJztcblx0bGV0IHN1bW1hcnk6IHN0cmluZyA9IGdldE1lc3NhZ2UoJ0JhbiB0aGUgJDEnKTtcblxuXHRzd2l0Y2ggKFdHX05BTUVTUEFDRV9OVU1CRVIpIHtcblx0XHRjYXNlIDY6XG5cdFx0XHR0YXJnZXRQYWdlID0gJ0ZpbGU6QmFubmVkIEltYWdlcy5zdmcnO1xuXHRcdFx0cmVkaXJlY3RUZW1wbGF0ZSA9ICd7e+aWh+S7tumHjeWumuWQkX19Jztcblx0XHRcdHN1bW1hcnkgPSBzdW1tYXJ5LnJlcGxhY2UoJyQxJywgZ2V0TWVzc2FnZSgnSW1hZ2UnKSk7XG5cdFx0XHRicmVhaztcblx0XHRjYXNlIDEwOlxuXHRcdFx0dGFyZ2V0UGFnZSA9ICdUZW1wbGF0ZTpWb2lkJztcblx0XHRcdHJlZGlyZWN0VGVtcGxhdGUgPSAne3vmqKHmnb/ph43lrprlkJF9fSc7XG5cdFx0XHRzdW1tYXJ5ID0gc3VtbWFyeS5yZXBsYWNlKCckMScsIGdldE1lc3NhZ2UoJ1RlbXBsYXRlJykpO1xuXHRcdFx0YnJlYWs7XG5cdFx0ZGVmYXVsdDpcblx0XHRcdHN1bW1hcnkgPSBzdW1tYXJ5LnJlcGxhY2UoJyQxJywgZ2V0TWVzc2FnZSgnUGFnZScpKTtcblx0XHRcdGJyZWFrO1xuXHR9XG5cblx0Y29uc3QgdGV4dDogc3RyaW5nID0gYCNSRURJUkVDVCBbWyR7dGFyZ2V0UGFnZX1dXVxcbiR7cmVkaXJlY3RUZW1wbGF0ZX1gO1xuXG5cdHJldHVybiB7XG5cdFx0dGFyZ2V0UGFnZSxcblx0XHR0ZXh0LFxuXHRcdHN1bW1hcnksXG5cdH07XG59O1xuXG5leHBvcnQge3R5cGUgRWRpdFBhcmFtcywgZ2VuZXJhdGVFZGl0UGFyYW1zfTtcbiIsICJ7XG5cdFwidmVyc2lvblwiOiBcIjMuMFwiXG59XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtpbml0TXdBcGl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmNvbnN0IGFwaTogbXcuQXBpID0gaW5pdE13QXBpKGBCYW5QYWdlLyR7T1BUSU9OUy52ZXJzaW9ufWApO1xuXG5leHBvcnQge2FwaX07XG4iLCAiaW1wb3J0IHtXR19TQ1JJUFR9IGZyb20gJy4uL2NvbnN0YW50JztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi4vaTE4bic7XG5pbXBvcnQge3RvYXN0aWZ5fSBmcm9tICdleHQuZ2FkZ2V0LlRvYXN0aWZ5JztcblxuY29uc3QgcmVmcmVzaCA9ICh0YXJnZXRQYWdlOiBzdHJpbmcpOiB2b2lkID0+IHtcblx0dG9hc3RpZnkoXG5cdFx0e1xuXHRcdFx0dGV4dDogZ2V0TWVzc2FnZSgnUmVmcmVzaGluZycpLFxuXHRcdFx0ZHVyYXRpb246IC0xLFxuXHRcdH0sXG5cdFx0J3N1Y2Nlc3MnXG5cdCk7XG5cblx0bG9jYXRpb24ucmVwbGFjZShcblx0XHRtdy51dGlsLmdldFVybChXR19TQ1JJUFQsIHtcblx0XHRcdHRpdGxlOiB0YXJnZXRQYWdlLFxuXHRcdH0pXG5cdCk7XG59O1xuXG5leHBvcnQge3JlZnJlc2h9O1xuIiwgImltcG9ydCB7dHlwZSBFZGl0UGFyYW1zfSBmcm9tICcuL2dlbmVyYXRlRWRpdFBhcmFtcyc7XG5pbXBvcnQge1dHX1BBR0VfTkFNRX0gZnJvbSAnLi4vY29uc3RhbnQnO1xuaW1wb3J0IHthcGl9IGZyb20gJy4uL2FwaSc7XG5pbXBvcnQge3JlZnJlc2h9IGZyb20gJy4vcmVmcmVzaFBhZ2UnO1xuXG5jb25zdCBjcmVhdGUgPSBhc3luYyAoZWRpdFBhcmFtczogRWRpdFBhcmFtcyk6IFByb21pc2U8dm9pZD4gPT4ge1xuXHRjb25zdCB7dGFyZ2V0UGFnZSwgdGV4dCwgc3VtbWFyeX0gPSBlZGl0UGFyYW1zO1xuXG5cdGF3YWl0IGFwaS5jcmVhdGUoXG5cdFx0V0dfUEFHRV9OQU1FLFxuXHRcdHtcblx0XHRcdHN1bW1hcnksXG5cdFx0fSxcblx0XHR0ZXh0XG5cdCk7XG5cblx0cmVmcmVzaCh0YXJnZXRQYWdlKTtcbn07XG5cbmV4cG9ydCB7Y3JlYXRlfTtcbiIsICJpbXBvcnQge3R5cGUgRWRpdFBhcmFtc30gZnJvbSAnLi9nZW5lcmF0ZUVkaXRQYXJhbXMnO1xuaW1wb3J0IHtXR19QQUdFX05BTUV9IGZyb20gJy4uL2NvbnN0YW50JztcbmltcG9ydCB7YXBpfSBmcm9tICcuLi9hcGknO1xuaW1wb3J0IHtyZWZyZXNofSBmcm9tICcuL3JlZnJlc2hQYWdlJztcblxuY29uc3QgZWRpdCA9IGFzeW5jIChlZGl0UGFyYW1zOiBFZGl0UGFyYW1zKTogUHJvbWlzZTx2b2lkPiA9PiB7XG5cdGNvbnN0IHt0YXJnZXRQYWdlLCB0ZXh0LCBzdW1tYXJ5fSA9IGVkaXRQYXJhbXM7XG5cblx0YXdhaXQgYXBpLmVkaXQoV0dfUEFHRV9OQU1FLCAoKSA9PiB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHRleHQsXG5cdFx0XHRzdW1tYXJ5LFxuXHRcdFx0bWlub3I6IHRydWUsXG5cdFx0fTtcblx0fSk7XG5cblx0cmVmcmVzaCh0YXJnZXRQYWdlKTtcbn07XG5cbmV4cG9ydCB7ZWRpdH07XG4iLCAiaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuLi9pMThuJztcbmltcG9ydCB7dG9hc3RpZnl9IGZyb20gJ2V4dC5nYWRnZXQuVG9hc3RpZnknO1xuXG5jb25zdCBzaG93RXJyb3IgPSAoZXJyb3I6IHVua25vd24pOiB2b2lkID0+IHtcblx0Y29uc29sZS5lcnJvcignW0JhblBhZ2VdIEFqYXggZXJyb3I6JywgZXJyb3IpO1xuXHR0b2FzdGlmeShcblx0XHR7XG5cdFx0XHR0ZXh0OiBnZXRNZXNzYWdlKCdOZXR3b3JrIGVycm9yJyksXG5cdFx0XHRjbG9zZTogdHJ1ZSxcblx0XHRcdGR1cmF0aW9uOiAtMSxcblx0XHR9LFxuXHRcdCdlcnJvcidcblx0KTtcbn07XG5cbmV4cG9ydCB7c2hvd0Vycm9yfTtcbiIsICJpbXBvcnQge3R5cGUgRWRpdFBhcmFtcywgZ2VuZXJhdGVFZGl0UGFyYW1zfSBmcm9tICcuL3V0aWwvZ2VuZXJhdGVFZGl0UGFyYW1zJztcbmltcG9ydCB7Y3JlYXRlfSBmcm9tICcuL3V0aWwvY3JlYXRlJztcbmltcG9ydCB7ZWRpdH0gZnJvbSAnLi91dGlsL2VkaXQnO1xuaW1wb3J0IHtzaG93RXJyb3J9IGZyb20gJy4vdXRpbC9zaG93RXJyb3InO1xuXG5jb25zdCBlZGl0UGFnZSA9IGFzeW5jICgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0Y29uc3QgZWRpdFBhcmFtczogRWRpdFBhcmFtcyA9IGdlbmVyYXRlRWRpdFBhcmFtcygpO1xuXG5cdHRyeSB7XG5cdFx0YXdhaXQgZWRpdChlZGl0UGFyYW1zKTtcblx0fSBjYXRjaCB7XG5cdFx0dHJ5IHtcblx0XHRcdGF3YWl0IGNyZWF0ZShlZGl0UGFyYW1zKTtcblx0XHR9IGNhdGNoIChlcnJvcjogdW5rbm93bikge1xuXHRcdFx0c2hvd0Vycm9yKGVycm9yKTtcblx0XHR9XG5cdH1cbn07XG5cbmV4cG9ydCB7ZWRpdFBhZ2V9O1xuIiwgImltcG9ydCB7ZWRpdFBhZ2V9IGZyb20gJy4vZWRpdFBhZ2UnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL2kxOG4nO1xuaW1wb3J0IHtvb3VpQ29uZmlybVdpdGhTdHlsZX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxuY29uc3QgYWRkTGlzdGVuZXIgPSAoJGVsZW1lbnQ6IEpRdWVyeSk6IHZvaWQgPT4ge1xuXHRjb25zdCBjbGlja0xpc3RlbmVyID0gYXN5bmMgKGV2ZW50OiBKUXVlcnkuQ2xpY2tFdmVudCk6IFByb21pc2U8dm9pZD4gPT4ge1xuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cblx0XHRjb25zdCBpc0NvbmZpcm06IGJvb2xlYW4gPSBhd2FpdCBvb3VpQ29uZmlybVdpdGhTdHlsZShnZXRNZXNzYWdlKCdDb25maXJtJykpO1xuXHRcdGlmICghaXNDb25maXJtKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dm9pZCBlZGl0UGFnZSgpO1xuXHR9O1xuXG5cdCRlbGVtZW50Lm9uKCdjbGljaycsIChldmVudDogSlF1ZXJ5LkNsaWNrRXZlbnQpOiB2b2lkID0+IHtcblx0XHR2b2lkIGNsaWNrTGlzdGVuZXIoZXZlbnQpO1xuXHR9KTtcbn07XG5cbmV4cG9ydCB7YWRkTGlzdGVuZXJ9O1xuIiwgImltcG9ydCB7YWRkTGlzdGVuZXJ9IGZyb20gJy4vYWRkTGlzdGVuZXInO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL2kxOG4nO1xuXG5jb25zdCBhZGRQb3J0bGV0TGluayA9ICgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkID0+IHtcblx0Y29uc3QgcG9ydGxldElkOiAncC1jYWN0aW9ucycgfCAncC10YicgPSAkYm9keS5maW5kKCcjcC1jYWN0aW9ucycpLmxlbmd0aCA/ICdwLWNhY3Rpb25zJyA6ICdwLXRiJztcblx0Y29uc3QgZWxlbWVudDogSFRNTExJRWxlbWVudCB8IG51bGwgPSBtdy51dGlsLmFkZFBvcnRsZXRMaW5rKHBvcnRsZXRJZCwgJyMnLCBnZXRNZXNzYWdlKCdCYW4nKSwgJ3QtYmFucGFnZScpO1xuXHRpZiAoIWVsZW1lbnQpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCAkZWxlbWVudDogSlF1ZXJ5ID0gJChlbGVtZW50KTtcblx0bGV0ICR0YXJnZXQ6IEpRdWVyeSA9ICRlbGVtZW50LmZpbmQoJ2EnKTtcblx0aWYgKCEkdGFyZ2V0Lmxlbmd0aCkge1xuXHRcdCR0YXJnZXQgPSAkZWxlbWVudDtcblx0fVxuXG5cdGFkZExpc3RlbmVyKCR0YXJnZXQpO1xufTtcblxuZXhwb3J0IHthZGRQb3J0bGV0TGlua307XG4iLCAiaW1wb3J0IHtXR19OQU1FU1BBQ0VfTlVNQkVSfSBmcm9tICcuL21vZHVsZXMvY29uc3RhbnQnO1xuaW1wb3J0IHthZGRQb3J0bGV0TGlua30gZnJvbSAnLi9tb2R1bGVzL2FkZFBvcnRsZXRMaW5rJztcbmltcG9ydCB7Z2V0Qm9keX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxuaWYgKFdHX05BTUVTUEFDRV9OVU1CRVIgPj0gMCkge1xuXHR2b2lkIGdldEJvZHkoKS50aGVuKGFkZFBvcnRsZXRMaW5rKTtcbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLHNCQUE4QkMsR0FBR0MsT0FBT0MsSUFBSSxtQkFBbUI7QUFDckUsSUFBTUMsZUFBdUJILEdBQUdDLE9BQU9DLElBQUksWUFBWTtBQUN2RCxJQUFNRSxZQUFvQkosR0FBR0MsT0FBT0MsSUFBSSxVQUFVOztBQ0ZsRCxJQUFBRyxvQkFBdUJDLFFBQUEsaUJBQUE7QUFFdkIsSUFBTUMsa0JBQWtCQSxNQUFNO0FBQzdCLFNBQU87SUFDTkMsTUFBQSxHQUFLSCxrQkFBQUksVUFBUztNQUNiQyxJQUFJO01BQ0pDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDREMsVUFBQSxHQUFTUCxrQkFBQUksVUFBUztNQUNqQkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNELGtCQUFBLEdBQWlCTCxrQkFBQUksVUFBUztNQUN6QkMsSUFBSTtNQUNKQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0RFLGFBQUEsR0FBWVIsa0JBQUFJLFVBQVM7TUFDcEJDLElBQUk7TUFDSkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNELGVBQUEsR0FBY04sa0JBQUFJLFVBQVM7TUFDdEJDLElBQUk7TUFDSkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNERyxRQUFBLEdBQU9ULGtCQUFBSSxVQUFTO01BQ2ZDLElBQUk7TUFDSkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNESSxPQUFBLEdBQU1WLGtCQUFBSSxVQUFTO01BQ2RDLElBQUk7TUFDSkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lB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QnZFLFFBQUEsaUJBQUE7QUFFdEIsSUFBSVAsdUJBQXVCLEdBQUc7QUFDN0IsUUFBQSxHQUFLOEUsbUJBQUFDLFNBQVEsRUFBRUMsS0FBS1YsY0FBYztBQUNuQzsiLAogICJuYW1lcyI6IFsiV0dfTkFNRVNQQUNFX05VTUJFUiIsICJtdyIsICJjb25maWciLCAiZ2V0IiwgIldHX1BBR0VfTkFNRSIsICJXR19TQ1JJUFQiLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAicmVxdWlyZSIsICJnZXRJMThuTWVzc2FnZXMiLCAiQmFuIiwgImxvY2FsaXplIiwgImVuIiwgImphIiwgIkNvbmZpcm0iLCAiUmVmcmVzaGluZyIsICJJbWFnZSIsICJQYWdlIiwgIlRlbXBsYXRlIiwgInpoIiwgImkxOG5NZXNzYWdlcyIsICJnZXRNZXNzYWdlIiwgImtleSIsICJnZW5lcmF0ZUVkaXRQYXJhbXMiLCAidGFyZ2V0UGFnZSIsICJyZWRpcmVjdFRlbXBsYXRlIiwgInN1bW1hcnkiLCAicmVwbGFjZSIsICJ0ZXh0IiwgImNvbmNhdCIsICJ2ZXJzaW9uIiwgImltcG9ydF9leHRfZ2FkZ2V0MiIsICJhcGkiLCAiaW5pdE13QXBpIiwgImltcG9ydF9leHRfZ2FkZ2V0MyIsICJyZWZyZXNoIiwgInRvYXN0aWZ5IiwgImR1cmF0aW9uIiwgImxvY2F0aW9uIiwgInV0aWwiLCAiZ2V0VXJsIiwgInRpdGxlIiwgImNyZWF0ZSIsICJfcmVmIiwgIl9hc3luY1RvR2VuZXJhdG9yIiwgImVkaXRQYXJhbXMiLCAiX3giLCAiYXBwbHkiLCAiYXJndW1lbnRzIiwgImVkaXQiLCAiX3JlZjIiLCAibWlub3IiLCAiX3gyIiwgImltcG9ydF9leHRfZ2FkZ2V0NCIsICJzaG93RXJyb3IiLCAiZXJyb3IiLCAiY29uc29sZSIsICJjbG9zZSIsICJlZGl0UGFnZSIsICJfcmVmMyIsICJpbXBvcnRfZXh0X2dhZGdldDUiLCAiYWRkTGlzdGVuZXIiLCAiJGVsZW1lbnQiLCAiY2xpY2tMaXN0ZW5lciIsICJfcmVmNCIsICJldmVudCIsICJwcmV2ZW50RGVmYXVsdCIsICJpc0NvbmZpcm0iLCAib291aUNvbmZpcm1XaXRoU3R5bGUiLCAiX3gzIiwgIm9uIiwgImFkZFBvcnRsZXRMaW5rIiwgIiRib2R5IiwgInBvcnRsZXRJZCIsICJmaW5kIiwgImxlbmd0aCIsICJlbGVtZW50IiwgIiQiLCAiJHRhcmdldCIsICJpbXBvcnRfZXh0X2dhZGdldDYiLCAiZ2V0Qm9keSIsICJ0aGVuIl0KfQo=

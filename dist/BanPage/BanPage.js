/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/ConfirmLogout}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/BanPage}
 * @author 安忆 <i@anyi.in>, WaitSpring <me@waispring.com>
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
//! src/BanPage/modules/constant.ts
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
var WG_NAMESPACE_NUMBER = mw.config.get("wgNamespaceNumber");
var WG_PAGE_NAME = mw.config.get("wgPageName");
var WG_SCRIPT = mw.config.get("wgScript");
var WG_WIKI_ID = mw.config.get("wgWikiID");
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
var api = (0, import_ext_gadget2.initMwApi)("Qiuwen/1.1 (BanPage/".concat(version, "; ").concat(WG_WIKI_ID, ")"));
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0JhblBhZ2UvbW9kdWxlcy9jb25zdGFudC50cyIsICJzcmMvQmFuUGFnZS9tb2R1bGVzL2kxOG4udHMiLCAic3JjL0JhblBhZ2UvbW9kdWxlcy91dGlsL2dlbmVyYXRlRWRpdFBhcmFtcy50cyIsICJzcmMvQmFuUGFnZS9vcHRpb25zLmpzb24iLCAic3JjL0JhblBhZ2UvbW9kdWxlcy9hcGkudHMiLCAic3JjL0JhblBhZ2UvbW9kdWxlcy91dGlsL3JlZnJlc2hQYWdlLnRzIiwgInNyYy9CYW5QYWdlL21vZHVsZXMvdXRpbC9jcmVhdGUudHMiLCAic3JjL0JhblBhZ2UvbW9kdWxlcy91dGlsL2VkaXQudHMiLCAic3JjL0JhblBhZ2UvbW9kdWxlcy91dGlsL3Nob3dFcnJvci50cyIsICJzcmMvQmFuUGFnZS9tb2R1bGVzL2VkaXRQYWdlLnRzIiwgInNyYy9CYW5QYWdlL21vZHVsZXMvYWRkTGlzdGVuZXIudHMiLCAic3JjL0JhblBhZ2UvbW9kdWxlcy9hZGRQb3J0bGV0TGluay50cyIsICJzcmMvQmFuUGFnZS9CYW5QYWdlLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBXR19OQU1FU1BBQ0VfTlVNQkVSOiBudW1iZXIgPSBtdy5jb25maWcuZ2V0KCd3Z05hbWVzcGFjZU51bWJlcicpO1xuY29uc3QgV0dfUEFHRV9OQU1FOiBzdHJpbmcgPSBtdy5jb25maWcuZ2V0KCd3Z1BhZ2VOYW1lJyk7XG5jb25zdCBXR19TQ1JJUFQ6IHN0cmluZyA9IG13LmNvbmZpZy5nZXQoJ3dnU2NyaXB0Jyk7XG5jb25zdCBXR19XSUtJX0lEOiBzdHJpbmcgPSBtdy5jb25maWcuZ2V0KCd3Z1dpa2lJRCcpO1xuXG5leHBvcnQge1dHX05BTUVTUEFDRV9OVU1CRVIsIFdHX1BBR0VfTkFNRSwgV0dfU0NSSVBULCBXR19XSUtJX0lEfTtcbiIsICJpbXBvcnQge2xvY2FsaXplfSBmcm9tICdleHQuZ2FkZ2V0LmkxOG4nO1xuXG5jb25zdCBnZXRJMThuTWVzc2FnZXMgPSAoKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0QmFuOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0JhbiB0aGlzIHBhZ2UnLFxuXHRcdFx0amE6ICfnj77lnKjjga7jg5rjg7zjgrjjgpLnhKHlirnjgasnLFxuXHRcdFx0J3poLWhhbnMnOiAn56aB55So5q2k6aG16Z2iJyxcblx0XHRcdCd6aC1oYW50JzogJ+emgeeUqOatpOmggScsXG5cdFx0fSksXG5cdFx0Q29uZmlybTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdDb25maXJtIHRvIGVuZm9yY2UgYmFuIG9uIHRoaXMgcGFnZT8nLFxuXHRcdFx0J3poLWhhbnMnOiAn5oKo56Gu5a6a6KaB56aB55So5q2k6aG16Z2i5ZCX77yfJyxcblx0XHRcdCd6aC1oYW50JzogJ+aCqOeiuuWumuimgeemgeeUqOatpOmggemdouWXju+8nycsXG5cdFx0fSksXG5cdFx0J05ldHdvcmsgZXJyb3InOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ05ldHdvcmsgZXJyb3InLFxuXHRcdFx0amE6ICfjg43jg4Pjg4jjg6/jg7zjgq/jgqjjg6njg7wnLFxuXHRcdFx0J3poLWhhbnMnOiAn572R57uc5byC5bi4Jyxcblx0XHRcdCd6aC1oYW50JzogJ+e2sui3r+eVsOW4uCcsXG5cdFx0fSksXG5cdFx0UmVmcmVzaGluZzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdQYWdlIGJhbm5lZCBzdWNjZXNzZnVsbHksIHJlZnJlc2hpbmcuLi4nLFxuXHRcdFx0amE6ICfnj77lnKjjga7jg5rjg7zjgrjjgpLnhKHlirnjgavjgarjgorjgb7jgZfjgZ/jgILlho3oqq3jgb/ovrzjgb/jgZfjgb7jgZkuLi4nLFxuXHRcdFx0J3poLWhhbnMnOiAn56aB55So5oiQ5Yqf77yM5Y2z5bCG5Yi35paw5b2T5YmN6aG16Z2i4oCm4oCmJyxcblx0XHRcdCd6aC1oYW50JzogJ+emgeeUqOaIkOWKn++8jOWNs+Wwh+mHjeaWsOi8ieWFpeeVtuWJjemggeKApuKApicsXG5cdFx0fSksXG5cdFx0J0JhbiB0aGUgJDEnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0JhbiB0aGUgJDEnLFxuXHRcdFx0amE6ICfnj77lnKjjga4kMeOCkueEoeWKueOBqycsXG5cdFx0XHQnemgtaGFucyc6ICfnpoHnlKjmraQkMScsXG5cdFx0XHQnemgtaGFudCc6ICfnpoHnlKjmraQkMScsXG5cdFx0fSksXG5cdFx0SW1hZ2U6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnaW1hZ2UnLFxuXHRcdFx0amE6ICfnlLvlg48nLFxuXHRcdFx0J3poLWhhbnMnOiAn5Zu+54mHJyxcblx0XHRcdCd6aC1oYW50JzogJ+WclueJhycsXG5cdFx0fSksXG5cdFx0UGFnZTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdwYWdlJyxcblx0XHRcdGphOiAn44Oa44O844K4Jyxcblx0XHRcdCd6aC1oYW5zJzogJ+mhtemdoicsXG5cdFx0XHQnemgtaGFudCc6ICfpoIEnLFxuXHRcdH0pLFxuXHRcdFRlbXBsYXRlOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ3RlbXBsYXRlJyxcblx0XHRcdGphOiAn44OG44Oz44OX44Os44O844OIJyxcblx0XHRcdHpoOiAn5qih5p2/Jyxcblx0XHR9KSxcblx0fTtcbn07XG5jb25zdCBpMThuTWVzc2FnZXMgPSBnZXRJMThuTWVzc2FnZXMoKTtcblxuY29uc3QgZ2V0TWVzc2FnZTogR2V0TWVzc2FnZXM8dHlwZW9mIGkxOG5NZXNzYWdlcz4gPSAoa2V5KSA9PiB7XG5cdHJldHVybiBpMThuTWVzc2FnZXNba2V5XSB8fCBrZXk7XG59O1xuXG5leHBvcnQge2dldE1lc3NhZ2V9O1xuIiwgImltcG9ydCB7V0dfTkFNRVNQQUNFX05VTUJFUn0gZnJvbSAnLi4vY29uc3RhbnQnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuLi9pMThuJztcblxudHlwZSBFZGl0UGFyYW1zID0ge1xuXHR0YXJnZXRQYWdlOiBzdHJpbmc7XG5cdHRleHQ6IHN0cmluZztcblx0c3VtbWFyeTogc3RyaW5nO1xufTtcblxuY29uc3QgZ2VuZXJhdGVFZGl0UGFyYW1zID0gKCk6IEVkaXRQYXJhbXMgPT4ge1xuXHRsZXQgdGFyZ2V0UGFnZTogc3RyaW5nID0gJ1FpdXdlbjrpppbpobUnO1xuXHRsZXQgcmVkaXJlY3RUZW1wbGF0ZTogc3RyaW5nID0gJyc7XG5cdGxldCBzdW1tYXJ5OiBzdHJpbmcgPSBnZXRNZXNzYWdlKCdCYW4gdGhlICQxJyk7XG5cblx0c3dpdGNoIChXR19OQU1FU1BBQ0VfTlVNQkVSKSB7XG5cdFx0Y2FzZSA2OlxuXHRcdFx0dGFyZ2V0UGFnZSA9ICdGaWxlOkJhbm5lZCBJbWFnZXMuc3ZnJztcblx0XHRcdHJlZGlyZWN0VGVtcGxhdGUgPSAne3vmlofku7bph43lrprlkJF9fSc7XG5cdFx0XHRzdW1tYXJ5ID0gc3VtbWFyeS5yZXBsYWNlKCckMScsIGdldE1lc3NhZ2UoJ0ltYWdlJykpO1xuXHRcdFx0YnJlYWs7XG5cdFx0Y2FzZSAxMDpcblx0XHRcdHRhcmdldFBhZ2UgPSAnVGVtcGxhdGU6Vm9pZCc7XG5cdFx0XHRyZWRpcmVjdFRlbXBsYXRlID0gJ3t75qih5p2/6YeN5a6a5ZCRfX0nO1xuXHRcdFx0c3VtbWFyeSA9IHN1bW1hcnkucmVwbGFjZSgnJDEnLCBnZXRNZXNzYWdlKCdUZW1wbGF0ZScpKTtcblx0XHRcdGJyZWFrO1xuXHRcdGRlZmF1bHQ6XG5cdFx0XHRzdW1tYXJ5ID0gc3VtbWFyeS5yZXBsYWNlKCckMScsIGdldE1lc3NhZ2UoJ1BhZ2UnKSk7XG5cdFx0XHRicmVhaztcblx0fVxuXG5cdGNvbnN0IHRleHQ6IHN0cmluZyA9IGAjUkVESVJFQ1QgW1ske3RhcmdldFBhZ2V9XV1cXG4ke3JlZGlyZWN0VGVtcGxhdGV9YDtcblxuXHRyZXR1cm4ge1xuXHRcdHRhcmdldFBhZ2UsXG5cdFx0dGV4dCxcblx0XHRzdW1tYXJ5LFxuXHR9O1xufTtcblxuZXhwb3J0IHt0eXBlIEVkaXRQYXJhbXMsIGdlbmVyYXRlRWRpdFBhcmFtc307XG4iLCAie1xuXHRcInZlcnNpb25cIjogXCIzLjBcIlxufVxuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7V0dfV0lLSV9JRH0gZnJvbSAnLi9jb25zdGFudCc7XG5pbXBvcnQge2luaXRNd0FwaX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxuY29uc3QgYXBpOiBtdy5BcGkgPSBpbml0TXdBcGkoYFFpdXdlbi8xLjEgKEJhblBhZ2UvJHtPUFRJT05TLnZlcnNpb259OyAke1dHX1dJS0lfSUR9KWApO1xuXG5leHBvcnQge2FwaX07XG4iLCAiaW1wb3J0IHtXR19TQ1JJUFR9IGZyb20gJy4uL2NvbnN0YW50JztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi4vaTE4bic7XG5pbXBvcnQge3RvYXN0aWZ5fSBmcm9tICdleHQuZ2FkZ2V0LlRvYXN0aWZ5JztcblxuY29uc3QgcmVmcmVzaCA9ICh0YXJnZXRQYWdlOiBzdHJpbmcpOiB2b2lkID0+IHtcblx0dG9hc3RpZnkoXG5cdFx0e1xuXHRcdFx0dGV4dDogZ2V0TWVzc2FnZSgnUmVmcmVzaGluZycpLFxuXHRcdFx0ZHVyYXRpb246IC0xLFxuXHRcdH0sXG5cdFx0J3N1Y2Nlc3MnXG5cdCk7XG5cblx0bG9jYXRpb24ucmVwbGFjZShcblx0XHRtdy51dGlsLmdldFVybChXR19TQ1JJUFQsIHtcblx0XHRcdHRpdGxlOiB0YXJnZXRQYWdlLFxuXHRcdH0pXG5cdCk7XG59O1xuXG5leHBvcnQge3JlZnJlc2h9O1xuIiwgImltcG9ydCB7dHlwZSBFZGl0UGFyYW1zfSBmcm9tICcuL2dlbmVyYXRlRWRpdFBhcmFtcyc7XG5pbXBvcnQge1dHX1BBR0VfTkFNRX0gZnJvbSAnLi4vY29uc3RhbnQnO1xuaW1wb3J0IHthcGl9IGZyb20gJy4uL2FwaSc7XG5pbXBvcnQge3JlZnJlc2h9IGZyb20gJy4vcmVmcmVzaFBhZ2UnO1xuXG5jb25zdCBjcmVhdGUgPSBhc3luYyAoZWRpdFBhcmFtczogRWRpdFBhcmFtcyk6IFByb21pc2U8dm9pZD4gPT4ge1xuXHRjb25zdCB7dGFyZ2V0UGFnZSwgdGV4dCwgc3VtbWFyeX0gPSBlZGl0UGFyYW1zO1xuXG5cdGF3YWl0IGFwaS5jcmVhdGUoXG5cdFx0V0dfUEFHRV9OQU1FLFxuXHRcdHtcblx0XHRcdHN1bW1hcnksXG5cdFx0fSxcblx0XHR0ZXh0XG5cdCk7XG5cblx0cmVmcmVzaCh0YXJnZXRQYWdlKTtcbn07XG5cbmV4cG9ydCB7Y3JlYXRlfTtcbiIsICJpbXBvcnQge3R5cGUgRWRpdFBhcmFtc30gZnJvbSAnLi9nZW5lcmF0ZUVkaXRQYXJhbXMnO1xuaW1wb3J0IHtXR19QQUdFX05BTUV9IGZyb20gJy4uL2NvbnN0YW50JztcbmltcG9ydCB7YXBpfSBmcm9tICcuLi9hcGknO1xuaW1wb3J0IHtyZWZyZXNofSBmcm9tICcuL3JlZnJlc2hQYWdlJztcblxuY29uc3QgZWRpdCA9IGFzeW5jIChlZGl0UGFyYW1zOiBFZGl0UGFyYW1zKTogUHJvbWlzZTx2b2lkPiA9PiB7XG5cdGNvbnN0IHt0YXJnZXRQYWdlLCB0ZXh0LCBzdW1tYXJ5fSA9IGVkaXRQYXJhbXM7XG5cblx0YXdhaXQgYXBpLmVkaXQoV0dfUEFHRV9OQU1FLCAoKTogQXBpRWRpdFBhZ2VQYXJhbXMgPT4ge1xuXHRcdHJldHVybiB7XG5cdFx0XHR0ZXh0LFxuXHRcdFx0c3VtbWFyeSxcblx0XHRcdG1pbm9yOiB0cnVlLFxuXHRcdH07XG5cdH0pO1xuXG5cdHJlZnJlc2godGFyZ2V0UGFnZSk7XG59O1xuXG5leHBvcnQge2VkaXR9O1xuIiwgImltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi4vaTE4bic7XG5pbXBvcnQge3RvYXN0aWZ5fSBmcm9tICdleHQuZ2FkZ2V0LlRvYXN0aWZ5JztcblxuY29uc3Qgc2hvd0Vycm9yID0gKGVycm9yOiB1bmtub3duKTogdm9pZCA9PiB7XG5cdGNvbnNvbGUuZXJyb3IoJ1tCYW5QYWdlXSBBamF4IGVycm9yOicsIGVycm9yKTtcblx0dG9hc3RpZnkoXG5cdFx0e1xuXHRcdFx0dGV4dDogZ2V0TWVzc2FnZSgnTmV0d29yayBlcnJvcicpLFxuXHRcdFx0Y2xvc2U6IHRydWUsXG5cdFx0XHRkdXJhdGlvbjogLTEsXG5cdFx0fSxcblx0XHQnZXJyb3InXG5cdCk7XG59O1xuXG5leHBvcnQge3Nob3dFcnJvcn07XG4iLCAiaW1wb3J0IHt0eXBlIEVkaXRQYXJhbXMsIGdlbmVyYXRlRWRpdFBhcmFtc30gZnJvbSAnLi91dGlsL2dlbmVyYXRlRWRpdFBhcmFtcyc7XG5pbXBvcnQge2NyZWF0ZX0gZnJvbSAnLi91dGlsL2NyZWF0ZSc7XG5pbXBvcnQge2VkaXR9IGZyb20gJy4vdXRpbC9lZGl0JztcbmltcG9ydCB7c2hvd0Vycm9yfSBmcm9tICcuL3V0aWwvc2hvd0Vycm9yJztcblxuY29uc3QgZWRpdFBhZ2UgPSBhc3luYyAoKTogUHJvbWlzZTx2b2lkPiA9PiB7XG5cdGNvbnN0IGVkaXRQYXJhbXM6IEVkaXRQYXJhbXMgPSBnZW5lcmF0ZUVkaXRQYXJhbXMoKTtcblxuXHR0cnkge1xuXHRcdGF3YWl0IGVkaXQoZWRpdFBhcmFtcyk7XG5cdH0gY2F0Y2gge1xuXHRcdHRyeSB7XG5cdFx0XHRhd2FpdCBjcmVhdGUoZWRpdFBhcmFtcyk7XG5cdFx0fSBjYXRjaCAoZXJyb3I6IHVua25vd24pIHtcblx0XHRcdHNob3dFcnJvcihlcnJvcik7XG5cdFx0fVxuXHR9XG59O1xuXG5leHBvcnQge2VkaXRQYWdlfTtcbiIsICJpbXBvcnQge2VkaXRQYWdlfSBmcm9tICcuL2VkaXRQYWdlJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9pMThuJztcbmltcG9ydCB7b291aUNvbmZpcm1XaXRoU3R5bGV9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmNvbnN0IGFkZExpc3RlbmVyID0gKCRlbGVtZW50OiBKUXVlcnkpOiB2b2lkID0+IHtcblx0Y29uc3QgY2xpY2tMaXN0ZW5lciA9IGFzeW5jIChldmVudDogSlF1ZXJ5LkNsaWNrRXZlbnQpOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cdFx0Y29uc3QgaXNDb25maXJtOiBib29sZWFuID0gYXdhaXQgb291aUNvbmZpcm1XaXRoU3R5bGUoZ2V0TWVzc2FnZSgnQ29uZmlybScpKTtcblx0XHRpZiAoIWlzQ29uZmlybSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHZvaWQgZWRpdFBhZ2UoKTtcblx0fTtcblxuXHQkZWxlbWVudC5vbignY2xpY2snLCAoZXZlbnQ6IEpRdWVyeS5DbGlja0V2ZW50KTogdm9pZCA9PiB7XG5cdFx0dm9pZCBjbGlja0xpc3RlbmVyKGV2ZW50KTtcblx0fSk7XG59O1xuXG5leHBvcnQge2FkZExpc3RlbmVyfTtcbiIsICJpbXBvcnQge2FkZExpc3RlbmVyfSBmcm9tICcuL2FkZExpc3RlbmVyJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9pMThuJztcblxuY29uc3QgYWRkUG9ydGxldExpbmsgPSAoJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KTogdm9pZCA9PiB7XG5cdGNvbnN0IHBvcnRsZXRJZDogJ3AtY2FjdGlvbnMnIHwgJ3AtdGInID0gJGJvZHkuZmluZCgnI3AtY2FjdGlvbnMnKS5sZW5ndGggPyAncC1jYWN0aW9ucycgOiAncC10Yic7XG5cdGNvbnN0IGVsZW1lbnQ6IEhUTUxMSUVsZW1lbnQgfCBudWxsID0gbXcudXRpbC5hZGRQb3J0bGV0TGluayhwb3J0bGV0SWQsICcjJywgZ2V0TWVzc2FnZSgnQmFuJyksICd0LWJhbnBhZ2UnKTtcblx0aWYgKCFlbGVtZW50KSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgJGVsZW1lbnQ6IEpRdWVyeSA9ICQoZWxlbWVudCk7XG5cdGxldCAkdGFyZ2V0OiBKUXVlcnkgPSAkZWxlbWVudC5maW5kKCdhJyk7XG5cdGlmICghJHRhcmdldC5sZW5ndGgpIHtcblx0XHQkdGFyZ2V0ID0gJGVsZW1lbnQ7XG5cdH1cblxuXHRhZGRMaXN0ZW5lcigkdGFyZ2V0KTtcbn07XG5cbmV4cG9ydCB7YWRkUG9ydGxldExpbmt9O1xuIiwgImltcG9ydCB7V0dfTkFNRVNQQUNFX05VTUJFUn0gZnJvbSAnLi9tb2R1bGVzL2NvbnN0YW50JztcbmltcG9ydCB7YWRkUG9ydGxldExpbmt9IGZyb20gJy4vbW9kdWxlcy9hZGRQb3J0bGV0TGluayc7XG5pbXBvcnQge2dldEJvZHl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmlmIChXR19OQU1FU1BBQ0VfTlVNQkVSID49IDApIHtcblx0dm9pZCBnZXRCb2R5KCkudGhlbihhZGRQb3J0bGV0TGluayk7XG59XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFNQSxzQkFBOEJDLEdBQUdDLE9BQU9DLElBQUksbUJBQW1CO0FBQ3JFLElBQU1DLGVBQXVCSCxHQUFHQyxPQUFPQyxJQUFJLFlBQVk7QUFDdkQsSUFBTUUsWUFBb0JKLEdBQUdDLE9BQU9DLElBQUksVUFBVTtBQUNsRCxJQUFNRyxhQUFxQkwsR0FBR0MsT0FBT0MsSUFBSSxVQUFVOztBQ0huRCxJQUFBSSxvQkFBdUJDLFFBQUEsaUJBQUE7QUFFdkIsSUFBTUMsa0JBQWtCQSxNQUFNO0FBQzdCLFNBQU87SUFDTkMsTUFBQSxHQUFLSCxrQkFBQUksVUFBUztNQUNiQyxJQUFJO01BQ0pDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDREMsVUFBQSxHQUFTUCxrQkFBQUksVUFBUztNQUNqQkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNELGtCQUFBLEdBQWlCTCxrQkFBQUksVUFBUztNQUN6QkMsSUFBSTtNQUNKQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0RFLGFBQUEsR0FBWVIsa0JBQUFJLFVBQVM7TUFDcEJDLElBQUk7TUFDSkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNELGVBQUEsR0FBY04sa0JBQUFJLFVBQVM7TUFDdEJDLElBQUk7TUFDSkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxX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QUssR0FBRyxXQUFXO0FBQzNHLE1BQUksQ0FBQ3VELFNBQVM7QUFDYjtFQUNEO0FBRUEsUUFBTWQsV0FBbUJlLEVBQUVELE9BQU87QUFDbEMsTUFBSUUsVUFBa0JoQixTQUFTWSxLQUFLLEdBQUc7QUFDdkMsTUFBSSxDQUFDSSxRQUFRSCxRQUFRO0FBQ3BCRyxjQUFVaEI7RUFDWDtBQUVBRCxjQUFZaUIsT0FBTztBQUNwQjs7QUNmQSxJQUFBQyxxQkFBc0J2RSxRQUFBLGlCQUFBO0FBRXRCLElBQUlSLHVCQUF1QixHQUFHO0FBQzdCLFFBQUEsR0FBSytFLG1CQUFBQyxTQUFRLEVBQUVDLEtBQUtWLGNBQWM7QUFDbkM7IiwKICAibmFtZXMiOiBbIldHX05BTUVTUEFDRV9OVU1CRVIiLCAibXciLCAiY29uZmlnIiwgImdldCIsICJXR19QQUdFX05BTUUiLCAiV0dfU0NSSVBUIiwgIldHX1dJS0lfSUQiLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAicmVxdWlyZSIsICJnZXRJMThuTWVzc2FnZXMiLCAiQmFuIiwgImxvY2FsaXplIiwgImVuIiwgImphIiwgIkNvbmZpcm0iLCAiUmVmcmVzaGluZyIsICJJbWFnZSIsICJQYWdlIiwgIlRlbXBsYXRlIiwgInpoIiwgImkxOG5NZXNzYWdlcyIsICJnZXRNZXNzYWdlIiwgImtleSIsICJnZW5lcmF0ZUVkaXRQYXJhbXMiLCAidGFyZ2V0UGFnZSIsICJyZWRpcmVjdFRlbXBsYXRlIiwgInN1bW1hcnkiLCAicmVwbGFjZSIsICJ0ZXh0IiwgImNvbmNhdCIsICJ2ZXJzaW9uIiwgImltcG9ydF9leHRfZ2FkZ2V0MiIsICJhcGkiLCAiaW5pdE13QXBpIiwgImltcG9ydF9leHRfZ2FkZ2V0MyIsICJyZWZyZXNoIiwgInRvYXN0aWZ5IiwgImR1cmF0aW9uIiwgImxvY2F0aW9uIiwgInV0aWwiLCAiZ2V0VXJsIiwgInRpdGxlIiwgImNyZWF0ZSIsICJfcmVmIiwgIl9hc3luY1RvR2VuZXJhdG9yIiwgImVkaXRQYXJhbXMiLCAiX3giLCAiYXBwbHkiLCAiYXJndW1lbnRzIiwgImVkaXQiLCAiX3JlZjIiLCAibWlub3IiLCAiX3gyIiwgImltcG9ydF9leHRfZ2FkZ2V0NCIsICJzaG93RXJyb3IiLCAiZXJyb3IiLCAiY29uc29sZSIsICJjbG9zZSIsICJlZGl0UGFnZSIsICJfcmVmMyIsICJpbXBvcnRfZXh0X2dhZGdldDUiLCAiYWRkTGlzdGVuZXIiLCAiJGVsZW1lbnQiLCAiY2xpY2tMaXN0ZW5lciIsICJfcmVmNCIsICJldmVudCIsICJwcmV2ZW50RGVmYXVsdCIsICJpc0NvbmZpcm0iLCAib291aUNvbmZpcm1XaXRoU3R5bGUiLCAiX3gzIiwgIm9uIiwgImFkZFBvcnRsZXRMaW5rIiwgIiRib2R5IiwgInBvcnRsZXRJZCIsICJmaW5kIiwgImxlbmd0aCIsICJlbGVtZW50IiwgIiQiLCAiJHRhcmdldCIsICJpbXBvcnRfZXh0X2dhZGdldDYiLCAiZ2V0Qm9keSIsICJ0aGVuIl0KfQo=

})();

/* </nowiki> */

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
//! src/BanPage/modules/i18n.ts
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
var {
  wgNamespaceNumber,
  wgPageName
} = mw.config.get();
var generateEditParams = () => {
  let targetPage;
  let redirectTemplate;
  let summary = getMessage("Ban the $1");
  switch (wgNamespaceNumber) {
    case 6:
      if (wgPageName.startsWith("File:BSicon_")) {
        targetPage = "File:BSicon .svg";
      } else {
        targetPage = "File:Banned Images.svg";
      }
      redirectTemplate = "{{文件重定向}}";
      summary = summary.replace("$1", getMessage("Image"));
      break;
    case 10:
      targetPage = "Template:Void";
      redirectTemplate = "{{模板重定向}}";
      summary = summary.replace("$1", getMessage("Template"));
      break;
    default:
      targetPage = "Qiuwen:首页";
      redirectTemplate = "";
      summary = summary.replace("$1", getMessage("Page"));
      break;
  }
  const text = "#REDIRECT [[".concat(targetPage, "]]\n").concat(redirectTemplate);
  return {
    targetPage,
    text,
    summary,
    wgPageName
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
  if (targetPage) {
    location.replace(mw.util.getUrl(targetPage));
  } else {
    location.reload();
  }
};
//! src/BanPage/modules/util/create.ts
var create = /* @__PURE__ */ (function() {
  var _ref = _asyncToGenerator(function* (editParams) {
    const {
      targetPage,
      text,
      summary,
      wgPageName: wgPageName2
    } = editParams;
    yield api.create(wgPageName2, {
      summary
    }, text);
    refresh(targetPage);
  });
  return function create2(_x) {
    return _ref.apply(this, arguments);
  };
})();
//! src/BanPage/modules/util/edit.ts
var edit = /* @__PURE__ */ (function() {
  var _ref2 = _asyncToGenerator(function* (editParams) {
    const {
      targetPage,
      text,
      summary,
      wgPageName: wgPageName2
    } = editParams;
    yield api.edit(wgPageName2, () => {
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
})();
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
var editPage = /* @__PURE__ */ (function() {
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
})();
//! src/BanPage/modules/addListener.ts
var import_ext_gadget5 = require("ext.gadget.Util");
var addListener = ($element) => {
  const clickListener = /* @__PURE__ */ (function() {
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
  })();
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
(function banPage() {
  const {
    wgNamespaceNumber: wgNamespaceNumber2,
    wgPageName: wgPageName2
  } = mw.config.get();
  if (wgNamespaceNumber2 < 0 || wgNamespaceNumber2 === 14) {
    return;
  }
  if (["File:Banned_Images.svg", "File:BSicon_.svg", "Template:Void", "Qiuwen:首页", "Project:首页"].includes(wgPageName2)) {
    return;
  }
  void (0, import_ext_gadget6.getBody)().then(addPortletLink);
})();

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0JhblBhZ2UvbW9kdWxlcy9pMThuLnRzIiwgInNyYy9CYW5QYWdlL21vZHVsZXMvdXRpbC9nZW5lcmF0ZUVkaXRQYXJhbXMudHMiLCAic3JjL0JhblBhZ2Uvb3B0aW9ucy5qc29uIiwgInNyYy9CYW5QYWdlL21vZHVsZXMvYXBpLnRzIiwgInNyYy9CYW5QYWdlL21vZHVsZXMvdXRpbC9yZWZyZXNoUGFnZS50cyIsICJzcmMvQmFuUGFnZS9tb2R1bGVzL3V0aWwvY3JlYXRlLnRzIiwgInNyYy9CYW5QYWdlL21vZHVsZXMvdXRpbC9lZGl0LnRzIiwgInNyYy9CYW5QYWdlL21vZHVsZXMvdXRpbC9zaG93RXJyb3IudHMiLCAic3JjL0JhblBhZ2UvbW9kdWxlcy9lZGl0UGFnZS50cyIsICJzcmMvQmFuUGFnZS9tb2R1bGVzL2FkZExpc3RlbmVyLnRzIiwgInNyYy9CYW5QYWdlL21vZHVsZXMvYWRkUG9ydGxldExpbmsudHMiLCAic3JjL0JhblBhZ2UvQmFuUGFnZS50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHtsb2NhbGl6ZX0gZnJvbSAnZXh0LmdhZGdldC5pMThuJztcblxuY29uc3QgZ2V0STE4bk1lc3NhZ2VzID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdEJhbjogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdCYW4gdGhpcyBwYWdlJyxcblx0XHRcdGphOiAn54++5Zyo44Gu44Oa44O844K444KS54Sh5Yq544GrJyxcblx0XHRcdCd6aC1oYW5zJzogJ+emgeeUqOatpOmhtemdoicsXG5cdFx0XHQnemgtaGFudCc6ICfnpoHnlKjmraTpoIEnLFxuXHRcdH0pLFxuXHRcdENvbmZpcm06IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQ29uZmlybSB0byBlbmZvcmNlIGJhbiBvbiB0aGlzIHBhZ2U/Jyxcblx0XHRcdCd6aC1oYW5zJzogJ+aCqOehruWumuimgeemgeeUqOatpOmhtemdouWQl++8nycsXG5cdFx0XHQnemgtaGFudCc6ICfmgqjnorrlrpropoHnpoHnlKjmraTpoIHpnaLll47vvJ8nLFxuXHRcdH0pLFxuXHRcdCdOZXR3b3JrIGVycm9yJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdOZXR3b3JrIGVycm9yJyxcblx0XHRcdGphOiAn44ON44OD44OI44Ov44O844Kv44Ko44Op44O8Jyxcblx0XHRcdCd6aC1oYW5zJzogJ+e9kee7nOW8guW4uCcsXG5cdFx0XHQnemgtaGFudCc6ICfntrLot6/nlbDluLgnLFxuXHRcdH0pLFxuXHRcdFJlZnJlc2hpbmc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnUGFnZSBiYW5uZWQgc3VjY2Vzc2Z1bGx5LCByZWZyZXNoaW5nLi4uJyxcblx0XHRcdGphOiAn54++5Zyo44Gu44Oa44O844K444KS54Sh5Yq544Gr44Gq44KK44G+44GX44Gf44CC5YaN6Kqt44G/6L6844G/44GX44G+44GZLi4uJyxcblx0XHRcdCd6aC1oYW5zJzogJ+emgeeUqOaIkOWKn++8jOWNs+WwhuWIt+aWsOW9k+WJjemhtemdouKApuKApicsXG5cdFx0XHQnemgtaGFudCc6ICfnpoHnlKjmiJDlip/vvIzljbPlsIfph43mlrDovInlhaXnlbbliY3poIHigKbigKYnLFxuXHRcdH0pLFxuXHRcdCdCYW4gdGhlICQxJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdCYW4gdGhlICQxJyxcblx0XHRcdGphOiAn54++5Zyo44GuJDHjgpLnhKHlirnjgasnLFxuXHRcdFx0J3poLWhhbnMnOiAn56aB55So5q2kJDEnLFxuXHRcdFx0J3poLWhhbnQnOiAn56aB55So5q2kJDEnLFxuXHRcdH0pLFxuXHRcdEltYWdlOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ2ltYWdlJyxcblx0XHRcdGphOiAn55S75YOPJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WbvueJhycsXG5cdFx0XHQnemgtaGFudCc6ICflnJbniYcnLFxuXHRcdH0pLFxuXHRcdFBhZ2U6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAncGFnZScsXG5cdFx0XHRqYTogJ+ODmuODvOOCuCcsXG5cdFx0XHQnemgtaGFucyc6ICfpobXpnaInLFxuXHRcdFx0J3poLWhhbnQnOiAn6aCBJyxcblx0XHR9KSxcblx0XHRUZW1wbGF0ZTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICd0ZW1wbGF0ZScsXG5cdFx0XHRqYTogJ+ODhuODs+ODl+ODrOODvOODiCcsXG5cdFx0XHR6aDogJ+aooeadvycsXG5cdFx0fSksXG5cdH07XG59O1xuY29uc3QgaTE4bk1lc3NhZ2VzID0gZ2V0STE4bk1lc3NhZ2VzKCk7XG5cbmNvbnN0IGdldE1lc3NhZ2U6IEdldE1lc3NhZ2VzPHR5cGVvZiBpMThuTWVzc2FnZXM+ID0gKGtleSkgPT4ge1xuXHRyZXR1cm4gaTE4bk1lc3NhZ2VzW2tleV0gfHwga2V5O1xufTtcblxuZXhwb3J0IHtnZXRNZXNzYWdlfTtcbiIsICJpbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4uL2kxOG4nO1xuXG50eXBlIEVkaXRQYXJhbXMgPSB7XG5cdHRhcmdldFBhZ2U6IHN0cmluZztcblx0dGV4dDogc3RyaW5nO1xuXHRzdW1tYXJ5OiBzdHJpbmc7XG5cdHdnUGFnZU5hbWU6IHN0cmluZztcbn07XG5cbmNvbnN0IHt3Z05hbWVzcGFjZU51bWJlciwgd2dQYWdlTmFtZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cbmNvbnN0IGdlbmVyYXRlRWRpdFBhcmFtcyA9ICgpOiBFZGl0UGFyYW1zID0+IHtcblx0bGV0IHRhcmdldFBhZ2U7XG5cdGxldCByZWRpcmVjdFRlbXBsYXRlO1xuXHRsZXQgc3VtbWFyeTogc3RyaW5nID0gZ2V0TWVzc2FnZSgnQmFuIHRoZSAkMScpO1xuXG5cdHN3aXRjaCAod2dOYW1lc3BhY2VOdW1iZXIpIHtcblx0XHRjYXNlIDY6XG5cdFx0XHRpZiAod2dQYWdlTmFtZS5zdGFydHNXaXRoKCdGaWxlOkJTaWNvbl8nKSkge1xuXHRcdFx0XHR0YXJnZXRQYWdlID0gJ0ZpbGU6QlNpY29uIC5zdmcnO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGFyZ2V0UGFnZSA9ICdGaWxlOkJhbm5lZCBJbWFnZXMuc3ZnJztcblx0XHRcdH1cblx0XHRcdHJlZGlyZWN0VGVtcGxhdGUgPSAne3vmlofku7bph43lrprlkJF9fSc7XG5cdFx0XHRzdW1tYXJ5ID0gc3VtbWFyeS5yZXBsYWNlKCckMScsIGdldE1lc3NhZ2UoJ0ltYWdlJykpO1xuXHRcdFx0YnJlYWs7XG5cdFx0Y2FzZSAxMDpcblx0XHRcdHRhcmdldFBhZ2UgPSAnVGVtcGxhdGU6Vm9pZCc7XG5cdFx0XHRyZWRpcmVjdFRlbXBsYXRlID0gJ3t75qih5p2/6YeN5a6a5ZCRfX0nO1xuXHRcdFx0c3VtbWFyeSA9IHN1bW1hcnkucmVwbGFjZSgnJDEnLCBnZXRNZXNzYWdlKCdUZW1wbGF0ZScpKTtcblx0XHRcdGJyZWFrO1xuXHRcdGRlZmF1bHQ6XG5cdFx0XHR0YXJnZXRQYWdlID0gJ1FpdXdlbjrpppbpobUnO1xuXHRcdFx0cmVkaXJlY3RUZW1wbGF0ZSA9ICcnO1xuXHRcdFx0c3VtbWFyeSA9IHN1bW1hcnkucmVwbGFjZSgnJDEnLCBnZXRNZXNzYWdlKCdQYWdlJykpO1xuXHRcdFx0YnJlYWs7XG5cdH1cblxuXHRjb25zdCB0ZXh0OiBzdHJpbmcgPSBgI1JFRElSRUNUIFtbJHt0YXJnZXRQYWdlfV1dXFxuJHtyZWRpcmVjdFRlbXBsYXRlfWA7XG5cblx0cmV0dXJuIHtcblx0XHR0YXJnZXRQYWdlLFxuXHRcdHRleHQsXG5cdFx0c3VtbWFyeSxcblx0XHR3Z1BhZ2VOYW1lLFxuXHR9O1xufTtcblxuZXhwb3J0IHt0eXBlIEVkaXRQYXJhbXMsIGdlbmVyYXRlRWRpdFBhcmFtc307XG4iLCAie1xuXHRcInZlcnNpb25cIjogXCIzLjBcIlxufVxuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7aW5pdE13QXBpfSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG5jb25zdCBhcGk6IG13LkFwaSA9IGluaXRNd0FwaShgQmFuUGFnZS8ke09QVElPTlMudmVyc2lvbn1gKTtcblxuZXhwb3J0IHthcGl9O1xuIiwgImltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi4vaTE4bic7XG5pbXBvcnQge3RvYXN0aWZ5fSBmcm9tICdleHQuZ2FkZ2V0LlRvYXN0aWZ5JztcblxuY29uc3QgcmVmcmVzaCA9ICh0YXJnZXRQYWdlPzogc3RyaW5nKTogdm9pZCA9PiB7XG5cdHRvYXN0aWZ5KFxuXHRcdHtcblx0XHRcdHRleHQ6IGdldE1lc3NhZ2UoJ1JlZnJlc2hpbmcnKSxcblx0XHRcdGR1cmF0aW9uOiAtMSxcblx0XHR9LFxuXHRcdCdzdWNjZXNzJ1xuXHQpO1xuXG5cdGlmICh0YXJnZXRQYWdlKSB7XG5cdFx0bG9jYXRpb24ucmVwbGFjZShtdy51dGlsLmdldFVybCh0YXJnZXRQYWdlKSk7XG5cdH0gZWxzZSB7XG5cdFx0bG9jYXRpb24ucmVsb2FkKCk7XG5cdH1cbn07XG5cbmV4cG9ydCB7cmVmcmVzaH07XG4iLCAiaW1wb3J0IHt0eXBlIEVkaXRQYXJhbXN9IGZyb20gJy4vZ2VuZXJhdGVFZGl0UGFyYW1zJztcbmltcG9ydCB7YXBpfSBmcm9tICcuLi9hcGknO1xuaW1wb3J0IHtyZWZyZXNofSBmcm9tICcuL3JlZnJlc2hQYWdlJztcblxuY29uc3QgY3JlYXRlID0gYXN5bmMgKGVkaXRQYXJhbXM6IEVkaXRQYXJhbXMpOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0Y29uc3Qge3RhcmdldFBhZ2UsIHRleHQsIHN1bW1hcnksIHdnUGFnZU5hbWV9ID0gZWRpdFBhcmFtcztcblxuXHRhd2FpdCBhcGkuY3JlYXRlKFxuXHRcdHdnUGFnZU5hbWUsXG5cdFx0e1xuXHRcdFx0c3VtbWFyeSxcblx0XHR9LFxuXHRcdHRleHRcblx0KTtcblxuXHRyZWZyZXNoKHRhcmdldFBhZ2UpO1xufTtcblxuZXhwb3J0IHtjcmVhdGV9O1xuIiwgImltcG9ydCB7dHlwZSBFZGl0UGFyYW1zfSBmcm9tICcuL2dlbmVyYXRlRWRpdFBhcmFtcyc7XG5pbXBvcnQge2FwaX0gZnJvbSAnLi4vYXBpJztcbmltcG9ydCB7cmVmcmVzaH0gZnJvbSAnLi9yZWZyZXNoUGFnZSc7XG5cbmNvbnN0IGVkaXQgPSBhc3luYyAoZWRpdFBhcmFtczogRWRpdFBhcmFtcyk6IFByb21pc2U8dm9pZD4gPT4ge1xuXHRjb25zdCB7dGFyZ2V0UGFnZSwgdGV4dCwgc3VtbWFyeSwgd2dQYWdlTmFtZX0gPSBlZGl0UGFyYW1zO1xuXG5cdGF3YWl0IGFwaS5lZGl0KHdnUGFnZU5hbWUsICgpID0+IHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0dGV4dCxcblx0XHRcdHN1bW1hcnksXG5cdFx0XHRtaW5vcjogdHJ1ZSxcblx0XHR9O1xuXHR9KTtcblxuXHRyZWZyZXNoKHRhcmdldFBhZ2UpO1xufTtcblxuZXhwb3J0IHtlZGl0fTtcbiIsICJpbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4uL2kxOG4nO1xuaW1wb3J0IHt0b2FzdGlmeX0gZnJvbSAnZXh0LmdhZGdldC5Ub2FzdGlmeSc7XG5cbmNvbnN0IHNob3dFcnJvciA9IChlcnJvcjogdW5rbm93bik6IHZvaWQgPT4ge1xuXHRjb25zb2xlLmVycm9yKCdbQmFuUGFnZV0gQWpheCBlcnJvcjonLCBlcnJvcik7XG5cdHRvYXN0aWZ5KFxuXHRcdHtcblx0XHRcdHRleHQ6IGdldE1lc3NhZ2UoJ05ldHdvcmsgZXJyb3InKSxcblx0XHRcdGNsb3NlOiB0cnVlLFxuXHRcdFx0ZHVyYXRpb246IC0xLFxuXHRcdH0sXG5cdFx0J2Vycm9yJ1xuXHQpO1xufTtcblxuZXhwb3J0IHtzaG93RXJyb3J9O1xuIiwgImltcG9ydCB7dHlwZSBFZGl0UGFyYW1zLCBnZW5lcmF0ZUVkaXRQYXJhbXN9IGZyb20gJy4vdXRpbC9nZW5lcmF0ZUVkaXRQYXJhbXMnO1xuaW1wb3J0IHtjcmVhdGV9IGZyb20gJy4vdXRpbC9jcmVhdGUnO1xuaW1wb3J0IHtlZGl0fSBmcm9tICcuL3V0aWwvZWRpdCc7XG5pbXBvcnQge3Nob3dFcnJvcn0gZnJvbSAnLi91dGlsL3Nob3dFcnJvcic7XG5cbmNvbnN0IGVkaXRQYWdlID0gYXN5bmMgKCk6IFByb21pc2U8dm9pZD4gPT4ge1xuXHRjb25zdCBlZGl0UGFyYW1zOiBFZGl0UGFyYW1zID0gZ2VuZXJhdGVFZGl0UGFyYW1zKCk7XG5cblx0dHJ5IHtcblx0XHRhd2FpdCBlZGl0KGVkaXRQYXJhbXMpO1xuXHR9IGNhdGNoIHtcblx0XHR0cnkge1xuXHRcdFx0YXdhaXQgY3JlYXRlKGVkaXRQYXJhbXMpO1xuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRzaG93RXJyb3IoZXJyb3IpO1xuXHRcdH1cblx0fVxufTtcblxuZXhwb3J0IHtlZGl0UGFnZX07XG4iLCAiaW1wb3J0IHtlZGl0UGFnZX0gZnJvbSAnLi9lZGl0UGFnZSc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vaTE4bic7XG5pbXBvcnQge29vdWlDb25maXJtV2l0aFN0eWxlfSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG5jb25zdCBhZGRMaXN0ZW5lciA9ICgkZWxlbWVudDogSlF1ZXJ5KTogdm9pZCA9PiB7XG5cdGNvbnN0IGNsaWNrTGlzdGVuZXIgPSBhc3luYyAoZXZlbnQ6IEpRdWVyeS5DbGlja0V2ZW50KTogUHJvbWlzZTx2b2lkPiA9PiB7XG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuXHRcdGNvbnN0IGlzQ29uZmlybTogYm9vbGVhbiA9IGF3YWl0IG9vdWlDb25maXJtV2l0aFN0eWxlKGdldE1lc3NhZ2UoJ0NvbmZpcm0nKSk7XG5cdFx0aWYgKCFpc0NvbmZpcm0pIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR2b2lkIGVkaXRQYWdlKCk7XG5cdH07XG5cblx0JGVsZW1lbnQub24oJ2NsaWNrJywgKGV2ZW50KTogdm9pZCA9PiB7XG5cdFx0dm9pZCBjbGlja0xpc3RlbmVyKGV2ZW50KTtcblx0fSk7XG59O1xuXG5leHBvcnQge2FkZExpc3RlbmVyfTtcbiIsICJpbXBvcnQge2FkZExpc3RlbmVyfSBmcm9tICcuL2FkZExpc3RlbmVyJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9pMThuJztcblxuY29uc3QgYWRkUG9ydGxldExpbmsgPSAoJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KTogdm9pZCA9PiB7XG5cdGNvbnN0IHBvcnRsZXRJZDogJ3AtY2FjdGlvbnMnIHwgJ3AtdGInID0gJGJvZHkuZmluZCgnI3AtY2FjdGlvbnMnKS5sZW5ndGggPyAncC1jYWN0aW9ucycgOiAncC10Yic7XG5cdGNvbnN0IGVsZW1lbnQ6IEhUTUxMSUVsZW1lbnQgfCBudWxsID0gbXcudXRpbC5hZGRQb3J0bGV0TGluayhwb3J0bGV0SWQsICcjJywgZ2V0TWVzc2FnZSgnQmFuJyksICd0LWJhbnBhZ2UnKTtcblx0aWYgKCFlbGVtZW50KSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgJGVsZW1lbnQ6IEpRdWVyeSA9ICQoZWxlbWVudCk7XG5cdGxldCAkdGFyZ2V0OiBKUXVlcnkgPSAkZWxlbWVudC5maW5kKCdhJyk7XG5cdGlmICghJHRhcmdldC5sZW5ndGgpIHtcblx0XHQkdGFyZ2V0ID0gJGVsZW1lbnQ7XG5cdH1cblxuXHRhZGRMaXN0ZW5lcigkdGFyZ2V0KTtcbn07XG5cbmV4cG9ydCB7YWRkUG9ydGxldExpbmt9O1xuIiwgImltcG9ydCB7YWRkUG9ydGxldExpbmt9IGZyb20gJy4vbW9kdWxlcy9hZGRQb3J0bGV0TGluayc7XG5pbXBvcnQge2dldEJvZHl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbihmdW5jdGlvbiBiYW5QYWdlKCkge1xuXHRjb25zdCB7d2dOYW1lc3BhY2VOdW1iZXIsIHdnUGFnZU5hbWV9ID0gbXcuY29uZmlnLmdldCgpO1xuXG5cdGlmICh3Z05hbWVzcGFjZU51bWJlciA8IDAgfHwgd2dOYW1lc3BhY2VOdW1iZXIgPT09IDE0KSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0aWYgKFxuXHRcdFsnRmlsZTpCYW5uZWRfSW1hZ2VzLnN2ZycsICdGaWxlOkJTaWNvbl8uc3ZnJywgJ1RlbXBsYXRlOlZvaWQnLCAnUWl1d2VuOummlumhtScsICdQcm9qZWN0OummlumhtSddLmluY2x1ZGVzKFxuXHRcdFx0d2dQYWdlTmFtZVxuXHRcdClcblx0KSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0dm9pZCBnZXRCb2R5KCkudGhlbihhZGRQb3J0bGV0TGluayk7XG59KSgpO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsb0JBQXVCQyxRQUFBLGlCQUFBO0FBRXZCLElBQU1DLGtCQUFrQkEsTUFBTTtBQUM3QixTQUFPO0lBQ05DLE1BQUEsR0FBS0gsa0JBQUFJLFVBQVM7TUFDYkMsSUFBSTtNQUNKQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0RDLFVBQUEsR0FBU1Asa0JBQUFJLFVBQVM7TUFDakJDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDRCxrQkFBQSxHQUFpQkwsa0JBQUFJLFVBQVM7TUFDekJDLElBQUk7TUFDSkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNERSxhQUFBLEdBQVlSLGtCQUFBSSxVQUFTO01BQ3BCQyxJQUFJO01BQ0pDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDRCxlQUFBLEdBQWNOLGtCQUFBSSxVQUFTO01BQ3RCQyxJQUFJO01BQ0pDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDREcsUUFBQSxHQUFPVCxrQkFBQUksVUFBUztNQUNmQyxJQUFJO01BQ0pDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDREksT0FBQSxHQUFNVixrQkFBQUksVUFBUztNQUNkQyxJQUFJO01BQ0pDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDREssV0FBQSxHQUFVWCxrQkFBQUksVUFBUztNQUNsQkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pNLElBQUk7SUFDTCxDQUFD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QUc7QUFDdkMsTUFBSSxDQUFDSSxRQUFRSCxRQUFRO0FBQ3BCRyxjQUFVaEI7RUFDWDtBQUVBRCxjQUFZaUIsT0FBTztBQUNwQjs7QUNoQkEsSUFBQUMscUJBQXNCOUUsUUFBQSxpQkFBQTtDQUVyQixTQUFTK0UsVUFBVTtBQUNuQixRQUFNO0lBQUNoRSxtQkFBQWlFO0lBQW1CaEUsWUFBQTRCO0VBQVUsSUFBSTNCLEdBQUdDLE9BQU9DLElBQUk7QUFFdEQsTUFBSTZELHFCQUFvQixLQUFLQSx1QkFBc0IsSUFBSTtBQUN0RDtFQUNEO0FBRUEsTUFDQyxDQUFDLDBCQUEwQixvQkFBb0IsaUJBQWlCLGFBQWEsWUFBWSxFQUFFQyxTQUMxRnJDLFdBQ0QsR0FDQztBQUNEO0VBQ0Q7QUFFQSxRQUFBLEdBQUtrQyxtQkFBQUksU0FBUSxFQUFFQyxLQUFLYixjQUFjO0FBQ25DLEdBQUc7IiwKICAibmFtZXMiOiBbImltcG9ydF9leHRfZ2FkZ2V0IiwgInJlcXVpcmUiLCAiZ2V0STE4bk1lc3NhZ2VzIiwgIkJhbiIsICJsb2NhbGl6ZSIsICJlbiIsICJqYSIsICJDb25maXJtIiwgIlJlZnJlc2hpbmciLCAiSW1hZ2UiLCAiUGFnZSIsICJUZW1wbGF0ZSIsICJ6aCIsICJpMThuTWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAid2dOYW1lc3BhY2VOdW1iZXIiLCAid2dQYWdlTmFtZSIsICJtdyIsICJjb25maWciLCAiZ2V0IiwgImdlbmVyYXRlRWRpdFBhcmFtcyIsICJ0YXJnZXRQYWdlIiwgInJlZGlyZWN0VGVtcGxhdGUiLCAic3VtbWFyeSIsICJzdGFydHNXaXRoIiwgInJlcGxhY2UiLCAidGV4dCIsICJjb25jYXQiLCAidmVyc2lvbiIsICJpbXBvcnRfZXh0X2dhZGdldDIiLCAiYXBpIiwgImluaXRNd0FwaSIsICJpbXBvcnRfZXh0X2dhZGdldDMiLCAicmVmcmVzaCIsICJ0b2FzdGlmeSIsICJkdXJhdGlvbiIsICJsb2NhdGlvbiIsICJ1dGlsIiwgImdldFVybCIsICJyZWxvYWQiLCAiY3JlYXRlIiwgIl9yZWYiLCAiX2FzeW5jVG9HZW5lcmF0b3IiLCAiZWRpdFBhcmFtcyIsICJ3Z1BhZ2VOYW1lMiIsICJfeCIsICJhcHBseSIsICJhcmd1bWVudHMiLCAiZWRpdCIsICJfcmVmMiIsICJtaW5vciIsICJfeDIiLCAiaW1wb3J0X2V4dF9nYWRnZXQ0IiwgInNob3dFcnJvciIsICJlcnJvciIsICJjb25zb2xlIiwgImNsb3NlIiwgImVkaXRQYWdlIiwgIl9yZWYzIiwgImltcG9ydF9leHRfZ2FkZ2V0NSIsICJhZGRMaXN0ZW5lciIsICIkZWxlbWVudCIsICJjbGlja0xpc3RlbmVyIiwgIl9yZWY0IiwgImV2ZW50IiwgInByZXZlbnREZWZhdWx0IiwgImlzQ29uZmlybSIsICJvb3VpQ29uZmlybVdpdGhTdHlsZSIsICJfeDMiLCAib24iLCAiYWRkUG9ydGxldExpbmsiLCAiJGJvZHkiLCAicG9ydGxldElkIiwgImZpbmQiLCAibGVuZ3RoIiwgImVsZW1lbnQiLCAiJCIsICIkdGFyZ2V0IiwgImltcG9ydF9leHRfZ2FkZ2V0NiIsICJiYW5QYWdlIiwgIndnTmFtZXNwYWNlTnVtYmVyMiIsICJpbmNsdWRlcyIsICJnZXRCb2R5IiwgInRoZW4iXQp9Cg==

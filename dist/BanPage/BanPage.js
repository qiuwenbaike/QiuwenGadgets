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
var {
  wgNamespaceNumber,
  wgPageName
} = mw.config.get();
var generateEditParams = () => {
  let targetPage = "Qiuwen:首页";
  let redirectTemplate = "";
  let summary = getMessage("Ban the $1");
  switch (wgNamespaceNumber) {
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
var {
  wgScript
} = mw.config.get();
var refresh = (targetPage) => {
  (0, import_ext_gadget3.toastify)({
    text: getMessage("Refreshing"),
    duration: -1
  }, "success");
  location.replace(mw.util.getUrl(wgScript, {
    title: targetPage
  }));
};
//! src/BanPage/modules/util/create.ts
var create = /* @__PURE__ */ function() {
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
}();
//! src/BanPage/modules/util/edit.ts
var edit = /* @__PURE__ */ function() {
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
var {
  wgNamespaceNumber: wgNamespaceNumber2
} = mw.config.get();
if (wgNamespaceNumber2 >= 0) {
  void (0, import_ext_gadget6.getBody)().then(addPortletLink);
}

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0JhblBhZ2UvbW9kdWxlcy9pMThuLnRzIiwgInNyYy9CYW5QYWdlL21vZHVsZXMvdXRpbC9nZW5lcmF0ZUVkaXRQYXJhbXMudHMiLCAic3JjL0JhblBhZ2Uvb3B0aW9ucy5qc29uIiwgInNyYy9CYW5QYWdlL21vZHVsZXMvYXBpLnRzIiwgInNyYy9CYW5QYWdlL21vZHVsZXMvdXRpbC9yZWZyZXNoUGFnZS50cyIsICJzcmMvQmFuUGFnZS9tb2R1bGVzL3V0aWwvY3JlYXRlLnRzIiwgInNyYy9CYW5QYWdlL21vZHVsZXMvdXRpbC9lZGl0LnRzIiwgInNyYy9CYW5QYWdlL21vZHVsZXMvdXRpbC9zaG93RXJyb3IudHMiLCAic3JjL0JhblBhZ2UvbW9kdWxlcy9lZGl0UGFnZS50cyIsICJzcmMvQmFuUGFnZS9tb2R1bGVzL2FkZExpc3RlbmVyLnRzIiwgInNyYy9CYW5QYWdlL21vZHVsZXMvYWRkUG9ydGxldExpbmsudHMiLCAic3JjL0JhblBhZ2UvQmFuUGFnZS50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHtsb2NhbGl6ZX0gZnJvbSAnZXh0LmdhZGdldC5pMThuJztcblxuY29uc3QgZ2V0STE4bk1lc3NhZ2VzID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdEJhbjogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdCYW4gdGhpcyBwYWdlJyxcblx0XHRcdGphOiAn54++5Zyo44Gu44Oa44O844K444KS54Sh5Yq544GrJyxcblx0XHRcdCd6aC1oYW5zJzogJ+emgeeUqOatpOmhtemdoicsXG5cdFx0XHQnemgtaGFudCc6ICfnpoHnlKjmraTpoIEnLFxuXHRcdH0pLFxuXHRcdENvbmZpcm06IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQ29uZmlybSB0byBlbmZvcmNlIGJhbiBvbiB0aGlzIHBhZ2U/Jyxcblx0XHRcdCd6aC1oYW5zJzogJ+aCqOehruWumuimgeemgeeUqOatpOmhtemdouWQl++8nycsXG5cdFx0XHQnemgtaGFudCc6ICfmgqjnorrlrpropoHnpoHnlKjmraTpoIHpnaLll47vvJ8nLFxuXHRcdH0pLFxuXHRcdCdOZXR3b3JrIGVycm9yJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdOZXR3b3JrIGVycm9yJyxcblx0XHRcdGphOiAn44ON44OD44OI44Ov44O844Kv44Ko44Op44O8Jyxcblx0XHRcdCd6aC1oYW5zJzogJ+e9kee7nOW8guW4uCcsXG5cdFx0XHQnemgtaGFudCc6ICfntrLot6/nlbDluLgnLFxuXHRcdH0pLFxuXHRcdFJlZnJlc2hpbmc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnUGFnZSBiYW5uZWQgc3VjY2Vzc2Z1bGx5LCByZWZyZXNoaW5nLi4uJyxcblx0XHRcdGphOiAn54++5Zyo44Gu44Oa44O844K444KS54Sh5Yq544Gr44Gq44KK44G+44GX44Gf44CC5YaN6Kqt44G/6L6844G/44GX44G+44GZLi4uJyxcblx0XHRcdCd6aC1oYW5zJzogJ+emgeeUqOaIkOWKn++8jOWNs+WwhuWIt+aWsOW9k+WJjemhtemdouKApuKApicsXG5cdFx0XHQnemgtaGFudCc6ICfnpoHnlKjmiJDlip/vvIzljbPlsIfph43mlrDovInlhaXnlbbliY3poIHigKbigKYnLFxuXHRcdH0pLFxuXHRcdCdCYW4gdGhlICQxJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdCYW4gdGhlICQxJyxcblx0XHRcdGphOiAn54++5Zyo44GuJDHjgpLnhKHlirnjgasnLFxuXHRcdFx0J3poLWhhbnMnOiAn56aB55So5q2kJDEnLFxuXHRcdFx0J3poLWhhbnQnOiAn56aB55So5q2kJDEnLFxuXHRcdH0pLFxuXHRcdEltYWdlOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ2ltYWdlJyxcblx0XHRcdGphOiAn55S75YOPJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WbvueJhycsXG5cdFx0XHQnemgtaGFudCc6ICflnJbniYcnLFxuXHRcdH0pLFxuXHRcdFBhZ2U6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAncGFnZScsXG5cdFx0XHRqYTogJ+ODmuODvOOCuCcsXG5cdFx0XHQnemgtaGFucyc6ICfpobXpnaInLFxuXHRcdFx0J3poLWhhbnQnOiAn6aCBJyxcblx0XHR9KSxcblx0XHRUZW1wbGF0ZTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICd0ZW1wbGF0ZScsXG5cdFx0XHRqYTogJ+ODhuODs+ODl+ODrOODvOODiCcsXG5cdFx0XHR6aDogJ+aooeadvycsXG5cdFx0fSksXG5cdH07XG59O1xuY29uc3QgaTE4bk1lc3NhZ2VzID0gZ2V0STE4bk1lc3NhZ2VzKCk7XG5cbmNvbnN0IGdldE1lc3NhZ2U6IEdldE1lc3NhZ2VzPHR5cGVvZiBpMThuTWVzc2FnZXM+ID0gKGtleSkgPT4ge1xuXHRyZXR1cm4gaTE4bk1lc3NhZ2VzW2tleV0gfHwga2V5O1xufTtcblxuZXhwb3J0IHtnZXRNZXNzYWdlfTtcbiIsICJpbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4uL2kxOG4nO1xuXG50eXBlIEVkaXRQYXJhbXMgPSB7XG5cdHRhcmdldFBhZ2U6IHN0cmluZztcblx0dGV4dDogc3RyaW5nO1xuXHRzdW1tYXJ5OiBzdHJpbmc7XG5cdHdnUGFnZU5hbWU6IE1lZGlhV2lraUNvbmZpZ01hcFsnd2dQYWdlTmFtZSddO1xufTtcblxuY29uc3Qge3dnTmFtZXNwYWNlTnVtYmVyLCB3Z1BhZ2VOYW1lfSA9IG13LmNvbmZpZy5nZXQoKTtcblxuY29uc3QgZ2VuZXJhdGVFZGl0UGFyYW1zID0gKCk6IEVkaXRQYXJhbXMgPT4ge1xuXHRsZXQgdGFyZ2V0UGFnZTogc3RyaW5nID0gJ1FpdXdlbjrpppbpobUnO1xuXHRsZXQgcmVkaXJlY3RUZW1wbGF0ZTogc3RyaW5nID0gJyc7XG5cdGxldCBzdW1tYXJ5OiBzdHJpbmcgPSBnZXRNZXNzYWdlKCdCYW4gdGhlICQxJyk7XG5cblx0c3dpdGNoICh3Z05hbWVzcGFjZU51bWJlcikge1xuXHRcdGNhc2UgNjpcblx0XHRcdHRhcmdldFBhZ2UgPSAnRmlsZTpCYW5uZWQgSW1hZ2VzLnN2Zyc7XG5cdFx0XHRyZWRpcmVjdFRlbXBsYXRlID0gJ3t75paH5Lu26YeN5a6a5ZCRfX0nO1xuXHRcdFx0c3VtbWFyeSA9IHN1bW1hcnkucmVwbGFjZSgnJDEnLCBnZXRNZXNzYWdlKCdJbWFnZScpKTtcblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgMTA6XG5cdFx0XHR0YXJnZXRQYWdlID0gJ1RlbXBsYXRlOlZvaWQnO1xuXHRcdFx0cmVkaXJlY3RUZW1wbGF0ZSA9ICd7e+aooeadv+mHjeWumuWQkX19Jztcblx0XHRcdHN1bW1hcnkgPSBzdW1tYXJ5LnJlcGxhY2UoJyQxJywgZ2V0TWVzc2FnZSgnVGVtcGxhdGUnKSk7XG5cdFx0XHRicmVhaztcblx0XHRkZWZhdWx0OlxuXHRcdFx0c3VtbWFyeSA9IHN1bW1hcnkucmVwbGFjZSgnJDEnLCBnZXRNZXNzYWdlKCdQYWdlJykpO1xuXHRcdFx0YnJlYWs7XG5cdH1cblxuXHRjb25zdCB0ZXh0OiBzdHJpbmcgPSBgI1JFRElSRUNUIFtbJHt0YXJnZXRQYWdlfV1dXFxuJHtyZWRpcmVjdFRlbXBsYXRlfWA7XG5cblx0cmV0dXJuIHtcblx0XHR0YXJnZXRQYWdlLFxuXHRcdHRleHQsXG5cdFx0c3VtbWFyeSxcblx0XHR3Z1BhZ2VOYW1lLFxuXHR9O1xufTtcblxuZXhwb3J0IHt0eXBlIEVkaXRQYXJhbXMsIGdlbmVyYXRlRWRpdFBhcmFtc307XG4iLCAie1xuXHRcInZlcnNpb25cIjogXCIzLjBcIlxufVxuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7aW5pdE13QXBpfSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG5jb25zdCBhcGk6IG13LkFwaSA9IGluaXRNd0FwaShgQmFuUGFnZS8ke09QVElPTlMudmVyc2lvbn1gKTtcblxuZXhwb3J0IHthcGl9O1xuIiwgImltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi4vaTE4bic7XG5pbXBvcnQge3RvYXN0aWZ5fSBmcm9tICdleHQuZ2FkZ2V0LlRvYXN0aWZ5JztcblxuY29uc3Qge3dnU2NyaXB0fSA9IG13LmNvbmZpZy5nZXQoKTtcblxuY29uc3QgcmVmcmVzaCA9ICh0YXJnZXRQYWdlOiBzdHJpbmcpOiB2b2lkID0+IHtcblx0dG9hc3RpZnkoXG5cdFx0e1xuXHRcdFx0dGV4dDogZ2V0TWVzc2FnZSgnUmVmcmVzaGluZycpLFxuXHRcdFx0ZHVyYXRpb246IC0xLFxuXHRcdH0sXG5cdFx0J3N1Y2Nlc3MnXG5cdCk7XG5cblx0bG9jYXRpb24ucmVwbGFjZShcblx0XHRtdy51dGlsLmdldFVybCh3Z1NjcmlwdCwge1xuXHRcdFx0dGl0bGU6IHRhcmdldFBhZ2UsXG5cdFx0fSlcblx0KTtcbn07XG5cbmV4cG9ydCB7cmVmcmVzaH07XG4iLCAiaW1wb3J0IHt0eXBlIEVkaXRQYXJhbXN9IGZyb20gJy4vZ2VuZXJhdGVFZGl0UGFyYW1zJztcbmltcG9ydCB7YXBpfSBmcm9tICcuLi9hcGknO1xuaW1wb3J0IHtyZWZyZXNofSBmcm9tICcuL3JlZnJlc2hQYWdlJztcblxuY29uc3QgY3JlYXRlID0gYXN5bmMgKGVkaXRQYXJhbXM6IEVkaXRQYXJhbXMpOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0Y29uc3Qge3RhcmdldFBhZ2UsIHRleHQsIHN1bW1hcnksIHdnUGFnZU5hbWV9ID0gZWRpdFBhcmFtcztcblxuXHRhd2FpdCBhcGkuY3JlYXRlKFxuXHRcdHdnUGFnZU5hbWUsXG5cdFx0e1xuXHRcdFx0c3VtbWFyeSxcblx0XHR9LFxuXHRcdHRleHRcblx0KTtcblxuXHRyZWZyZXNoKHRhcmdldFBhZ2UpO1xufTtcblxuZXhwb3J0IHtjcmVhdGV9O1xuIiwgImltcG9ydCB7dHlwZSBFZGl0UGFyYW1zfSBmcm9tICcuL2dlbmVyYXRlRWRpdFBhcmFtcyc7XG5pbXBvcnQge2FwaX0gZnJvbSAnLi4vYXBpJztcbmltcG9ydCB7cmVmcmVzaH0gZnJvbSAnLi9yZWZyZXNoUGFnZSc7XG5cbmNvbnN0IGVkaXQgPSBhc3luYyAoZWRpdFBhcmFtczogRWRpdFBhcmFtcyk6IFByb21pc2U8dm9pZD4gPT4ge1xuXHRjb25zdCB7dGFyZ2V0UGFnZSwgdGV4dCwgc3VtbWFyeSwgd2dQYWdlTmFtZX0gPSBlZGl0UGFyYW1zO1xuXG5cdGF3YWl0IGFwaS5lZGl0KHdnUGFnZU5hbWUsICgpID0+IHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0dGV4dCxcblx0XHRcdHN1bW1hcnksXG5cdFx0XHRtaW5vcjogdHJ1ZSxcblx0XHR9O1xuXHR9KTtcblxuXHRyZWZyZXNoKHRhcmdldFBhZ2UpO1xufTtcblxuZXhwb3J0IHtlZGl0fTtcbiIsICJpbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4uL2kxOG4nO1xuaW1wb3J0IHt0b2FzdGlmeX0gZnJvbSAnZXh0LmdhZGdldC5Ub2FzdGlmeSc7XG5cbmNvbnN0IHNob3dFcnJvciA9IChlcnJvcjogdW5rbm93bik6IHZvaWQgPT4ge1xuXHRjb25zb2xlLmVycm9yKCdbQmFuUGFnZV0gQWpheCBlcnJvcjonLCBlcnJvcik7XG5cdHRvYXN0aWZ5KFxuXHRcdHtcblx0XHRcdHRleHQ6IGdldE1lc3NhZ2UoJ05ldHdvcmsgZXJyb3InKSxcblx0XHRcdGNsb3NlOiB0cnVlLFxuXHRcdFx0ZHVyYXRpb246IC0xLFxuXHRcdH0sXG5cdFx0J2Vycm9yJ1xuXHQpO1xufTtcblxuZXhwb3J0IHtzaG93RXJyb3J9O1xuIiwgImltcG9ydCB7dHlwZSBFZGl0UGFyYW1zLCBnZW5lcmF0ZUVkaXRQYXJhbXN9IGZyb20gJy4vdXRpbC9nZW5lcmF0ZUVkaXRQYXJhbXMnO1xuaW1wb3J0IHtjcmVhdGV9IGZyb20gJy4vdXRpbC9jcmVhdGUnO1xuaW1wb3J0IHtlZGl0fSBmcm9tICcuL3V0aWwvZWRpdCc7XG5pbXBvcnQge3Nob3dFcnJvcn0gZnJvbSAnLi91dGlsL3Nob3dFcnJvcic7XG5cbmNvbnN0IGVkaXRQYWdlID0gYXN5bmMgKCk6IFByb21pc2U8dm9pZD4gPT4ge1xuXHRjb25zdCBlZGl0UGFyYW1zOiBFZGl0UGFyYW1zID0gZ2VuZXJhdGVFZGl0UGFyYW1zKCk7XG5cblx0dHJ5IHtcblx0XHRhd2FpdCBlZGl0KGVkaXRQYXJhbXMpO1xuXHR9IGNhdGNoIHtcblx0XHR0cnkge1xuXHRcdFx0YXdhaXQgY3JlYXRlKGVkaXRQYXJhbXMpO1xuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRzaG93RXJyb3IoZXJyb3IpO1xuXHRcdH1cblx0fVxufTtcblxuZXhwb3J0IHtlZGl0UGFnZX07XG4iLCAiaW1wb3J0IHtlZGl0UGFnZX0gZnJvbSAnLi9lZGl0UGFnZSc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vaTE4bic7XG5pbXBvcnQge29vdWlDb25maXJtV2l0aFN0eWxlfSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG5jb25zdCBhZGRMaXN0ZW5lciA9ICgkZWxlbWVudDogSlF1ZXJ5KTogdm9pZCA9PiB7XG5cdGNvbnN0IGNsaWNrTGlzdGVuZXIgPSBhc3luYyAoZXZlbnQ6IEpRdWVyeS5DbGlja0V2ZW50KTogUHJvbWlzZTx2b2lkPiA9PiB7XG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuXHRcdGNvbnN0IGlzQ29uZmlybTogYm9vbGVhbiA9IGF3YWl0IG9vdWlDb25maXJtV2l0aFN0eWxlKGdldE1lc3NhZ2UoJ0NvbmZpcm0nKSk7XG5cdFx0aWYgKCFpc0NvbmZpcm0pIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR2b2lkIGVkaXRQYWdlKCk7XG5cdH07XG5cblx0JGVsZW1lbnQub24oJ2NsaWNrJywgKGV2ZW50KTogdm9pZCA9PiB7XG5cdFx0dm9pZCBjbGlja0xpc3RlbmVyKGV2ZW50KTtcblx0fSk7XG59O1xuXG5leHBvcnQge2FkZExpc3RlbmVyfTtcbiIsICJpbXBvcnQge2FkZExpc3RlbmVyfSBmcm9tICcuL2FkZExpc3RlbmVyJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9pMThuJztcblxuY29uc3QgYWRkUG9ydGxldExpbmsgPSAoJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KTogdm9pZCA9PiB7XG5cdGNvbnN0IHBvcnRsZXRJZDogJ3AtY2FjdGlvbnMnIHwgJ3AtdGInID0gJGJvZHkuZmluZCgnI3AtY2FjdGlvbnMnKS5sZW5ndGggPyAncC1jYWN0aW9ucycgOiAncC10Yic7XG5cdGNvbnN0IGVsZW1lbnQ6IEhUTUxMSUVsZW1lbnQgfCBudWxsID0gbXcudXRpbC5hZGRQb3J0bGV0TGluayhwb3J0bGV0SWQsICcjJywgZ2V0TWVzc2FnZSgnQmFuJyksICd0LWJhbnBhZ2UnKTtcblx0aWYgKCFlbGVtZW50KSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgJGVsZW1lbnQ6IEpRdWVyeSA9ICQoZWxlbWVudCk7XG5cdGxldCAkdGFyZ2V0OiBKUXVlcnkgPSAkZWxlbWVudC5maW5kKCdhJyk7XG5cdGlmICghJHRhcmdldC5sZW5ndGgpIHtcblx0XHQkdGFyZ2V0ID0gJGVsZW1lbnQ7XG5cdH1cblxuXHRhZGRMaXN0ZW5lcigkdGFyZ2V0KTtcbn07XG5cbmV4cG9ydCB7YWRkUG9ydGxldExpbmt9O1xuIiwgImltcG9ydCB7YWRkUG9ydGxldExpbmt9IGZyb20gJy4vbW9kdWxlcy9hZGRQb3J0bGV0TGluayc7XG5pbXBvcnQge2dldEJvZHl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmNvbnN0IHt3Z05hbWVzcGFjZU51bWJlcn0gPSBtdy5jb25maWcuZ2V0KCk7XG5cbmlmICh3Z05hbWVzcGFjZU51bWJlciA+PSAwKSB7XG5cdHZvaWQgZ2V0Qm9keSgpLnRoZW4oYWRkUG9ydGxldExpbmspO1xufVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsb0JBQXVCQyxRQUFBLGlCQUFBO0FBRXZCLElBQU1DLGtCQUFrQkEsTUFBTTtBQUM3QixTQUFPO0lBQ05DLE1BQUEsR0FBS0gsa0JBQUFJLFVBQVM7TUFDYkMsSUFBSTtNQUNKQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0RDLFVBQUEsR0FBU1Asa0JB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bUJBQUFRLHNCQUFxQnRELFdBQVcsU0FBUyxDQUFDO0FBQzNFLFVBQUksQ0FBQ3FELFdBQVc7QUFDZjtNQUNEO0FBRUEsV0FBS1QsU0FBUztJQUNmLENBQUE7QUFBQSxXQUFBLFNBVE1LLGVBQUFNLEtBQUE7QUFBQSxhQUFBTCxNQUFBakIsTUFBQSxNQUFBQyxTQUFBO0lBQUE7RUFBQSxFQUFBO0FBV05jLFdBQVNRLEdBQUcsU0FBVUwsV0FBZ0I7QUFDckMsU0FBS0YsY0FBY0UsS0FBSztFQUN6QixDQUFDO0FBQ0Y7O0FDaEJBLElBQU1NLGlCQUFrQkMsV0FBeUM7QUFDaEUsUUFBTUMsWUFBbUNELE1BQU1FLEtBQUssYUFBYSxFQUFFQyxTQUFTLGVBQWU7QUFDM0YsUUFBTUMsVUFBZ0MxRCxHQUFHb0IsS0FBS2lDLGVBQWVFLFdBQVcsS0FBSzNELFdBQVcsS0FBSyxHQUFHLFdBQVc7QUFDM0csTUFBSSxDQUFDOEQsU0FBUztBQUNiO0VBQ0Q7QUFFQSxRQUFNZCxXQUFtQmUsRUFBRUQsT0FBTztBQUNsQyxNQUFJRSxVQUFrQmhCLFNBQVNZLEtBQUssR0FBRztBQUN2QyxNQUFJLENBQUNJLFFBQVFILFFBQVE7QUFDcEJHLGNBQVVoQjtFQUNYO0FBRUFELGNBQVlpQixPQUFPO0FBQ3BCOztBQ2hCQSxJQUFBQyxxQkFBc0I5RSxRQUFBLGlCQUFBO0FBRXRCLElBQU07RUFBQ2UsbUJBQUFnRTtBQUFpQixJQUFJOUQsR0FBR0MsT0FBT0MsSUFBSTtBQUUxQyxJQUFJNEQsc0JBQXFCLEdBQUc7QUFDM0IsUUFBQSxHQUFLRCxtQkFBQUUsU0FBUSxFQUFFQyxLQUFLWCxjQUFjO0FBQ25DOyIsCiAgIm5hbWVzIjogWyJpbXBvcnRfZXh0X2dhZGdldCIsICJyZXF1aXJlIiwgImdldEkxOG5NZXNzYWdlcyIsICJCYW4iLCAibG9jYWxpemUiLCAiZW4iLCAiamEiLCAiQ29uZmlybSIsICJSZWZyZXNoaW5nIiwgIkltYWdlIiwgIlBhZ2UiLCAiVGVtcGxhdGUiLCAiemgiLCAiaTE4bk1lc3NhZ2VzIiwgImdldE1lc3NhZ2UiLCAia2V5IiwgIndnTmFtZXNwYWNlTnVtYmVyIiwgIndnUGFnZU5hbWUiLCAibXciLCAiY29uZmlnIiwgImdldCIsICJnZW5lcmF0ZUVkaXRQYXJhbXMiLCAidGFyZ2V0UGFnZSIsICJyZWRpcmVjdFRlbXBsYXRlIiwgInN1bW1hcnkiLCAicmVwbGFjZSIsICJ0ZXh0IiwgImNvbmNhdCIsICJ2ZXJzaW9uIiwgImltcG9ydF9leHRfZ2FkZ2V0MiIsICJhcGkiLCAiaW5pdE13QXBpIiwgImltcG9ydF9leHRfZ2FkZ2V0MyIsICJ3Z1NjcmlwdCIsICJyZWZyZXNoIiwgInRvYXN0aWZ5IiwgImR1cmF0aW9uIiwgImxvY2F0aW9uIiwgInV0aWwiLCAiZ2V0VXJsIiwgInRpdGxlIiwgImNyZWF0ZSIsICJfcmVmIiwgIl9hc3luY1RvR2VuZXJhdG9yIiwgImVkaXRQYXJhbXMiLCAid2dQYWdlTmFtZTIiLCAiX3giLCAiYXBwbHkiLCAiYXJndW1lbnRzIiwgImVkaXQiLCAiX3JlZjIiLCAibWlub3IiLCAiX3gyIiwgImltcG9ydF9leHRfZ2FkZ2V0NCIsICJzaG93RXJyb3IiLCAiZXJyb3IiLCAiY29uc29sZSIsICJjbG9zZSIsICJlZGl0UGFnZSIsICJfcmVmMyIsICJpbXBvcnRfZXh0X2dhZGdldDUiLCAiYWRkTGlzdGVuZXIiLCAiJGVsZW1lbnQiLCAiY2xpY2tMaXN0ZW5lciIsICJfcmVmNCIsICJldmVudCIsICJwcmV2ZW50RGVmYXVsdCIsICJpc0NvbmZpcm0iLCAib291aUNvbmZpcm1XaXRoU3R5bGUiLCAiX3gzIiwgIm9uIiwgImFkZFBvcnRsZXRMaW5rIiwgIiRib2R5IiwgInBvcnRsZXRJZCIsICJmaW5kIiwgImxlbmd0aCIsICJlbGVtZW50IiwgIiQiLCAiJHRhcmdldCIsICJpbXBvcnRfZXh0X2dhZGdldDYiLCAid2dOYW1lc3BhY2VOdW1iZXIyIiwgImdldEJvZHkiLCAidGhlbiJdCn0K

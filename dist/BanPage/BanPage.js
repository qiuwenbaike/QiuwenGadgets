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
        action: "edit",
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0JhblBhZ2UvbW9kdWxlcy9pMThuLnRzIiwgInNyYy9CYW5QYWdlL21vZHVsZXMvdXRpbC9nZW5lcmF0ZUVkaXRQYXJhbXMudHMiLCAic3JjL0JhblBhZ2Uvb3B0aW9ucy5qc29uIiwgInNyYy9CYW5QYWdlL21vZHVsZXMvYXBpLnRzIiwgInNyYy9CYW5QYWdlL21vZHVsZXMvdXRpbC9yZWZyZXNoUGFnZS50cyIsICJzcmMvQmFuUGFnZS9tb2R1bGVzL3V0aWwvY3JlYXRlLnRzIiwgInNyYy9CYW5QYWdlL21vZHVsZXMvdXRpbC9lZGl0LnRzIiwgInNyYy9CYW5QYWdlL21vZHVsZXMvdXRpbC9zaG93RXJyb3IudHMiLCAic3JjL0JhblBhZ2UvbW9kdWxlcy9lZGl0UGFnZS50cyIsICJzcmMvQmFuUGFnZS9tb2R1bGVzL2FkZExpc3RlbmVyLnRzIiwgInNyYy9CYW5QYWdlL21vZHVsZXMvYWRkUG9ydGxldExpbmsudHMiLCAic3JjL0JhblBhZ2UvQmFuUGFnZS50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHtsb2NhbGl6ZX0gZnJvbSAnZXh0LmdhZGdldC5pMThuJztcblxuY29uc3QgZ2V0STE4bk1lc3NhZ2VzID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdEJhbjogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdCYW4gdGhpcyBwYWdlJyxcblx0XHRcdGphOiAn54++5Zyo44Gu44Oa44O844K444KS54Sh5Yq544GrJyxcblx0XHRcdCd6aC1oYW5zJzogJ+emgeeUqOatpOmhtemdoicsXG5cdFx0XHQnemgtaGFudCc6ICfnpoHnlKjmraTpoIEnLFxuXHRcdH0pLFxuXHRcdENvbmZpcm06IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQ29uZmlybSB0byBlbmZvcmNlIGJhbiBvbiB0aGlzIHBhZ2U/Jyxcblx0XHRcdCd6aC1oYW5zJzogJ+aCqOehruWumuimgeemgeeUqOatpOmhtemdouWQl++8nycsXG5cdFx0XHQnemgtaGFudCc6ICfmgqjnorrlrpropoHnpoHnlKjmraTpoIHpnaLll47vvJ8nLFxuXHRcdH0pLFxuXHRcdCdOZXR3b3JrIGVycm9yJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdOZXR3b3JrIGVycm9yJyxcblx0XHRcdGphOiAn44ON44OD44OI44Ov44O844Kv44Ko44Op44O8Jyxcblx0XHRcdCd6aC1oYW5zJzogJ+e9kee7nOW8guW4uCcsXG5cdFx0XHQnemgtaGFudCc6ICfntrLot6/nlbDluLgnLFxuXHRcdH0pLFxuXHRcdFJlZnJlc2hpbmc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnUGFnZSBiYW5uZWQgc3VjY2Vzc2Z1bGx5LCByZWZyZXNoaW5nLi4uJyxcblx0XHRcdGphOiAn54++5Zyo44Gu44Oa44O844K444KS54Sh5Yq544Gr44Gq44KK44G+44GX44Gf44CC5YaN6Kqt44G/6L6844G/44GX44G+44GZLi4uJyxcblx0XHRcdCd6aC1oYW5zJzogJ+emgeeUqOaIkOWKn++8jOWNs+WwhuWIt+aWsOW9k+WJjemhtemdouKApuKApicsXG5cdFx0XHQnemgtaGFudCc6ICfnpoHnlKjmiJDlip/vvIzljbPlsIfph43mlrDovInlhaXnlbbliY3poIHigKbigKYnLFxuXHRcdH0pLFxuXHRcdCdCYW4gdGhlICQxJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdCYW4gdGhlICQxJyxcblx0XHRcdGphOiAn54++5Zyo44GuJDHjgpLnhKHlirnjgasnLFxuXHRcdFx0J3poLWhhbnMnOiAn56aB55So5q2kJDEnLFxuXHRcdFx0J3poLWhhbnQnOiAn56aB55So5q2kJDEnLFxuXHRcdH0pLFxuXHRcdEltYWdlOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ2ltYWdlJyxcblx0XHRcdGphOiAn55S75YOPJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WbvueJhycsXG5cdFx0XHQnemgtaGFudCc6ICflnJbniYcnLFxuXHRcdH0pLFxuXHRcdFBhZ2U6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAncGFnZScsXG5cdFx0XHRqYTogJ+ODmuODvOOCuCcsXG5cdFx0XHQnemgtaGFucyc6ICfpobXpnaInLFxuXHRcdFx0J3poLWhhbnQnOiAn6aCBJyxcblx0XHR9KSxcblx0XHRUZW1wbGF0ZTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICd0ZW1wbGF0ZScsXG5cdFx0XHRqYTogJ+ODhuODs+ODl+ODrOODvOODiCcsXG5cdFx0XHR6aDogJ+aooeadvycsXG5cdFx0fSksXG5cdH07XG59O1xuY29uc3QgaTE4bk1lc3NhZ2VzID0gZ2V0STE4bk1lc3NhZ2VzKCk7XG5cbmNvbnN0IGdldE1lc3NhZ2U6IEdldE1lc3NhZ2VzPHR5cGVvZiBpMThuTWVzc2FnZXM+ID0gKGtleSkgPT4ge1xuXHRyZXR1cm4gaTE4bk1lc3NhZ2VzW2tleV0gfHwga2V5O1xufTtcblxuZXhwb3J0IHtnZXRNZXNzYWdlfTtcbiIsICJpbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4uL2kxOG4nO1xuXG50eXBlIEVkaXRQYXJhbXMgPSB7XG5cdHRhcmdldFBhZ2U6IHN0cmluZztcblx0dGV4dDogc3RyaW5nO1xuXHRzdW1tYXJ5OiBzdHJpbmc7XG5cdHdnUGFnZU5hbWU6IE1lZGlhV2lraUNvbmZpZ01hcFsnd2dQYWdlTmFtZSddO1xufTtcblxuY29uc3Qge3dnTmFtZXNwYWNlTnVtYmVyLCB3Z1BhZ2VOYW1lfSA9IG13LmNvbmZpZy5nZXQoKTtcblxuY29uc3QgZ2VuZXJhdGVFZGl0UGFyYW1zID0gKCk6IEVkaXRQYXJhbXMgPT4ge1xuXHRsZXQgdGFyZ2V0UGFnZTogc3RyaW5nID0gJ1FpdXdlbjrpppbpobUnO1xuXHRsZXQgcmVkaXJlY3RUZW1wbGF0ZTogc3RyaW5nID0gJyc7XG5cdGxldCBzdW1tYXJ5OiBzdHJpbmcgPSBnZXRNZXNzYWdlKCdCYW4gdGhlICQxJyk7XG5cblx0c3dpdGNoICh3Z05hbWVzcGFjZU51bWJlcikge1xuXHRcdGNhc2UgNjpcblx0XHRcdHRhcmdldFBhZ2UgPSAnRmlsZTpCYW5uZWQgSW1hZ2VzLnN2Zyc7XG5cdFx0XHRyZWRpcmVjdFRlbXBsYXRlID0gJ3t75paH5Lu26YeN5a6a5ZCRfX0nO1xuXHRcdFx0c3VtbWFyeSA9IHN1bW1hcnkucmVwbGFjZSgnJDEnLCBnZXRNZXNzYWdlKCdJbWFnZScpKTtcblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgMTA6XG5cdFx0XHR0YXJnZXRQYWdlID0gJ1RlbXBsYXRlOlZvaWQnO1xuXHRcdFx0cmVkaXJlY3RUZW1wbGF0ZSA9ICd7e+aooeadv+mHjeWumuWQkX19Jztcblx0XHRcdHN1bW1hcnkgPSBzdW1tYXJ5LnJlcGxhY2UoJyQxJywgZ2V0TWVzc2FnZSgnVGVtcGxhdGUnKSk7XG5cdFx0XHRicmVhaztcblx0XHRkZWZhdWx0OlxuXHRcdFx0c3VtbWFyeSA9IHN1bW1hcnkucmVwbGFjZSgnJDEnLCBnZXRNZXNzYWdlKCdQYWdlJykpO1xuXHRcdFx0YnJlYWs7XG5cdH1cblxuXHRjb25zdCB0ZXh0OiBzdHJpbmcgPSBgI1JFRElSRUNUIFtbJHt0YXJnZXRQYWdlfV1dXFxuJHtyZWRpcmVjdFRlbXBsYXRlfWA7XG5cblx0cmV0dXJuIHtcblx0XHR0YXJnZXRQYWdlLFxuXHRcdHRleHQsXG5cdFx0c3VtbWFyeSxcblx0XHR3Z1BhZ2VOYW1lLFxuXHR9O1xufTtcblxuZXhwb3J0IHt0eXBlIEVkaXRQYXJhbXMsIGdlbmVyYXRlRWRpdFBhcmFtc307XG4iLCAie1xuXHRcInZlcnNpb25cIjogXCIzLjBcIlxufVxuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7aW5pdE13QXBpfSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG5jb25zdCBhcGk6IG13LkFwaSA9IGluaXRNd0FwaShgQmFuUGFnZS8ke09QVElPTlMudmVyc2lvbn1gKTtcblxuZXhwb3J0IHthcGl9O1xuIiwgImltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi4vaTE4bic7XG5pbXBvcnQge3RvYXN0aWZ5fSBmcm9tICdleHQuZ2FkZ2V0LlRvYXN0aWZ5JztcblxuY29uc3Qge3dnU2NyaXB0fSA9IG13LmNvbmZpZy5nZXQoKTtcblxuY29uc3QgcmVmcmVzaCA9ICh0YXJnZXRQYWdlOiBzdHJpbmcpOiB2b2lkID0+IHtcblx0dG9hc3RpZnkoXG5cdFx0e1xuXHRcdFx0dGV4dDogZ2V0TWVzc2FnZSgnUmVmcmVzaGluZycpLFxuXHRcdFx0ZHVyYXRpb246IC0xLFxuXHRcdH0sXG5cdFx0J3N1Y2Nlc3MnXG5cdCk7XG5cblx0bG9jYXRpb24ucmVwbGFjZShcblx0XHRtdy51dGlsLmdldFVybCh3Z1NjcmlwdCwge1xuXHRcdFx0dGl0bGU6IHRhcmdldFBhZ2UsXG5cdFx0fSlcblx0KTtcbn07XG5cbmV4cG9ydCB7cmVmcmVzaH07XG4iLCAiaW1wb3J0IHt0eXBlIEVkaXRQYXJhbXN9IGZyb20gJy4vZ2VuZXJhdGVFZGl0UGFyYW1zJztcbmltcG9ydCB7YXBpfSBmcm9tICcuLi9hcGknO1xuaW1wb3J0IHtyZWZyZXNofSBmcm9tICcuL3JlZnJlc2hQYWdlJztcblxuY29uc3QgY3JlYXRlID0gYXN5bmMgKGVkaXRQYXJhbXM6IEVkaXRQYXJhbXMpOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0Y29uc3Qge3RhcmdldFBhZ2UsIHRleHQsIHN1bW1hcnksIHdnUGFnZU5hbWV9ID0gZWRpdFBhcmFtcztcblxuXHRhd2FpdCBhcGkuY3JlYXRlKFxuXHRcdHdnUGFnZU5hbWUsXG5cdFx0e1xuXHRcdFx0c3VtbWFyeSxcblx0XHR9IGFzIEFwaUVkaXRQYWdlUGFyYW1zLFxuXHRcdHRleHRcblx0KTtcblxuXHRyZWZyZXNoKHRhcmdldFBhZ2UpO1xufTtcblxuZXhwb3J0IHtjcmVhdGV9O1xuIiwgImltcG9ydCB7dHlwZSBFZGl0UGFyYW1zfSBmcm9tICcuL2dlbmVyYXRlRWRpdFBhcmFtcyc7XG5pbXBvcnQge2FwaX0gZnJvbSAnLi4vYXBpJztcbmltcG9ydCB7cmVmcmVzaH0gZnJvbSAnLi9yZWZyZXNoUGFnZSc7XG5cbmNvbnN0IGVkaXQgPSBhc3luYyAoZWRpdFBhcmFtczogRWRpdFBhcmFtcyk6IFByb21pc2U8dm9pZD4gPT4ge1xuXHRjb25zdCB7dGFyZ2V0UGFnZSwgdGV4dCwgc3VtbWFyeSwgd2dQYWdlTmFtZX0gPSBlZGl0UGFyYW1zO1xuXG5cdGF3YWl0IGFwaS5lZGl0KHdnUGFnZU5hbWUsICgpID0+IHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0dGV4dCxcblx0XHRcdHN1bW1hcnksXG5cdFx0XHRhY3Rpb246ICdlZGl0Jyxcblx0XHRcdG1pbm9yOiB0cnVlLFxuXHRcdH07XG5cdH0pO1xuXG5cdHJlZnJlc2godGFyZ2V0UGFnZSk7XG59O1xuXG5leHBvcnQge2VkaXR9O1xuIiwgImltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi4vaTE4bic7XG5pbXBvcnQge3RvYXN0aWZ5fSBmcm9tICdleHQuZ2FkZ2V0LlRvYXN0aWZ5JztcblxuY29uc3Qgc2hvd0Vycm9yID0gKGVycm9yOiB1bmtub3duKTogdm9pZCA9PiB7XG5cdGNvbnNvbGUuZXJyb3IoJ1tCYW5QYWdlXSBBamF4IGVycm9yOicsIGVycm9yKTtcblx0dG9hc3RpZnkoXG5cdFx0e1xuXHRcdFx0dGV4dDogZ2V0TWVzc2FnZSgnTmV0d29yayBlcnJvcicpLFxuXHRcdFx0Y2xvc2U6IHRydWUsXG5cdFx0XHRkdXJhdGlvbjogLTEsXG5cdFx0fSxcblx0XHQnZXJyb3InXG5cdCk7XG59O1xuXG5leHBvcnQge3Nob3dFcnJvcn07XG4iLCAiaW1wb3J0IHt0eXBlIEVkaXRQYXJhbXMsIGdlbmVyYXRlRWRpdFBhcmFtc30gZnJvbSAnLi91dGlsL2dlbmVyYXRlRWRpdFBhcmFtcyc7XG5pbXBvcnQge2NyZWF0ZX0gZnJvbSAnLi91dGlsL2NyZWF0ZSc7XG5pbXBvcnQge2VkaXR9IGZyb20gJy4vdXRpbC9lZGl0JztcbmltcG9ydCB7c2hvd0Vycm9yfSBmcm9tICcuL3V0aWwvc2hvd0Vycm9yJztcblxuY29uc3QgZWRpdFBhZ2UgPSBhc3luYyAoKTogUHJvbWlzZTx2b2lkPiA9PiB7XG5cdGNvbnN0IGVkaXRQYXJhbXM6IEVkaXRQYXJhbXMgPSBnZW5lcmF0ZUVkaXRQYXJhbXMoKTtcblxuXHR0cnkge1xuXHRcdGF3YWl0IGVkaXQoZWRpdFBhcmFtcyk7XG5cdH0gY2F0Y2gge1xuXHRcdHRyeSB7XG5cdFx0XHRhd2FpdCBjcmVhdGUoZWRpdFBhcmFtcyk7XG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdHNob3dFcnJvcihlcnJvcik7XG5cdFx0fVxuXHR9XG59O1xuXG5leHBvcnQge2VkaXRQYWdlfTtcbiIsICJpbXBvcnQge2VkaXRQYWdlfSBmcm9tICcuL2VkaXRQYWdlJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9pMThuJztcbmltcG9ydCB7b291aUNvbmZpcm1XaXRoU3R5bGV9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmNvbnN0IGFkZExpc3RlbmVyID0gKCRlbGVtZW50OiBKUXVlcnkpOiB2b2lkID0+IHtcblx0Y29uc3QgY2xpY2tMaXN0ZW5lciA9IGFzeW5jIChldmVudDogSlF1ZXJ5LkNsaWNrRXZlbnQpOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cdFx0Y29uc3QgaXNDb25maXJtOiBib29sZWFuID0gYXdhaXQgb291aUNvbmZpcm1XaXRoU3R5bGUoZ2V0TWVzc2FnZSgnQ29uZmlybScpKTtcblx0XHRpZiAoIWlzQ29uZmlybSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHZvaWQgZWRpdFBhZ2UoKTtcblx0fTtcblxuXHQkZWxlbWVudC5vbignY2xpY2snLCAoZXZlbnQpOiB2b2lkID0+IHtcblx0XHR2b2lkIGNsaWNrTGlzdGVuZXIoZXZlbnQpO1xuXHR9KTtcbn07XG5cbmV4cG9ydCB7YWRkTGlzdGVuZXJ9O1xuIiwgImltcG9ydCB7YWRkTGlzdGVuZXJ9IGZyb20gJy4vYWRkTGlzdGVuZXInO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL2kxOG4nO1xuXG5jb25zdCBhZGRQb3J0bGV0TGluayA9ICgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkID0+IHtcblx0Y29uc3QgcG9ydGxldElkOiAncC1jYWN0aW9ucycgfCAncC10YicgPSAkYm9keS5maW5kKCcjcC1jYWN0aW9ucycpLmxlbmd0aCA/ICdwLWNhY3Rpb25zJyA6ICdwLXRiJztcblx0Y29uc3QgZWxlbWVudDogSFRNTExJRWxlbWVudCB8IG51bGwgPSBtdy51dGlsLmFkZFBvcnRsZXRMaW5rKHBvcnRsZXRJZCwgJyMnLCBnZXRNZXNzYWdlKCdCYW4nKSwgJ3QtYmFucGFnZScpO1xuXHRpZiAoIWVsZW1lbnQpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCAkZWxlbWVudDogSlF1ZXJ5ID0gJChlbGVtZW50KTtcblx0bGV0ICR0YXJnZXQ6IEpRdWVyeSA9ICRlbGVtZW50LmZpbmQoJ2EnKTtcblx0aWYgKCEkdGFyZ2V0Lmxlbmd0aCkge1xuXHRcdCR0YXJnZXQgPSAkZWxlbWVudDtcblx0fVxuXG5cdGFkZExpc3RlbmVyKCR0YXJnZXQpO1xufTtcblxuZXhwb3J0IHthZGRQb3J0bGV0TGlua307XG4iLCAiaW1wb3J0IHthZGRQb3J0bGV0TGlua30gZnJvbSAnLi9tb2R1bGVzL2FkZFBvcnRsZXRMaW5rJztcbmltcG9ydCB7Z2V0Qm9keX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxuY29uc3Qge3dnTmFtZXNwYWNlTnVtYmVyfSA9IG13LmNvbmZpZy5nZXQoKTtcblxuaWYgKHdnTmFtZXNwYWNlTnVtYmVyID49IDApIHtcblx0dm9pZCBnZXRCb2R5KCkudGhlbihhZGRQb3J0bGV0TGluayk7XG59XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxvQkFBdUJDLFFBQUEsaUJBQUE7QUFFdkIsSUFBTUMsa0JBQWtCQSxNQUFNO0FBQzdCLFNBQU87SUFDTkMsTUFBQSxHQUFLSCxrQkFBQUksVUFBUztNQUNiQyxJQUFJO01BQ0pDLElBQUk7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LFdBQU91QixPQUE0QztBQUN4RUEsWUFBTUMsZUFBZTtBQUVyQixZQUFNQyxZQUFBLE9BQXFCLEdBQU1QLG1CQUFBUSxzQkFBcUJ2RCxXQUFXLFNBQVMsQ0FBQztBQUMzRSxVQUFJLENBQUNzRCxXQUFXO0FBQ2Y7TUFDRDtBQUVBLFdBQUtULFNBQVM7SUFDZixDQUFBO0FBQUEsV0FBQSxTQVRNSyxlQUFBTSxLQUFBO0FBQUEsYUFBQUwsTUFBQWxCLE1BQUEsTUFBQUMsU0FBQTtJQUFBO0VBQUEsRUFBQTtBQVdOZSxXQUFTUSxHQUFHLFNBQVVMLFdBQWdCO0FBQ3JDLFNBQUtGLGNBQWNFLEtBQUs7RUFDekIsQ0FBQztBQUNGOztBQ2hCQSxJQUFNTSxpQkFBa0JDLFdBQXlDO0FBQ2hFLFFBQU1DLFlBQW1DRCxNQUFNRSxLQUFLLGFBQWEsRUFBRUMsU0FBUyxlQUFlO0FBQzNGLFFBQU1DLFVBQWdDM0QsR0FBR29CLEtBQUtrQyxlQUFlRSxXQUFXLEtBQUs1RCxXQUFXLEtBQUssR0FBRyxXQUFXO0FBQzNHLE1BQUksQ0FBQytELFNBQVM7QUFDYjtFQUNEO0FBRUEsUUFBTWQsV0FBbUJlLEVBQUVELE9BQU87QUFDbEMsTUFBSUUsVUFBa0JoQixTQUFTWSxLQUFLLEdBQUc7QUFDdkMsTUFBSSxDQUFDSSxRQUFRSCxRQUFRO0FBQ3BCRyxjQUFVaEI7RUFDWDtBQUVBRCxjQUFZaUIsT0FBTztBQUNwQjs7QUNoQkEsSUFBQUMscUJBQXNCL0UsUUFBQSxpQkFBQTtBQUV0QixJQUFNO0VBQUNlLG1CQUFBaUU7QUFBaUIsSUFBSS9ELEdBQUdDLE9BQU9DLElBQUk7QUFFMUMsSUFBSTZELHNCQUFxQixHQUFHO0FBQzNCLFFBQUEsR0FBS0QsbUJBQUFFLFNBQVEsRUFBRUMsS0FBS1gsY0FBYztBQUNuQzsiLAogICJuYW1lcyI6IFsiaW1wb3J0X2V4dF9nYWRnZXQiLCAicmVxdWlyZSIsICJnZXRJMThuTWVzc2FnZXMiLCAiQmFuIiwgImxvY2FsaXplIiwgImVuIiwgImphIiwgIkNvbmZpcm0iLCAiUmVmcmVzaGluZyIsICJJbWFnZSIsICJQYWdlIiwgIlRlbXBsYXRlIiwgInpoIiwgImkxOG5NZXNzYWdlcyIsICJnZXRNZXNzYWdlIiwgImtleSIsICJ3Z05hbWVzcGFjZU51bWJlciIsICJ3Z1BhZ2VOYW1lIiwgIm13IiwgImNvbmZpZyIsICJnZXQiLCAiZ2VuZXJhdGVFZGl0UGFyYW1zIiwgInRhcmdldFBhZ2UiLCAicmVkaXJlY3RUZW1wbGF0ZSIsICJzdW1tYXJ5IiwgInJlcGxhY2UiLCAidGV4dCIsICJjb25jYXQiLCAidmVyc2lvbiIsICJpbXBvcnRfZXh0X2dhZGdldDIiLCAiYXBpIiwgImluaXRNd0FwaSIsICJpbXBvcnRfZXh0X2dhZGdldDMiLCAid2dTY3JpcHQiLCAicmVmcmVzaCIsICJ0b2FzdGlmeSIsICJkdXJhdGlvbiIsICJsb2NhdGlvbiIsICJ1dGlsIiwgImdldFVybCIsICJ0aXRsZSIsICJjcmVhdGUiLCAiX3JlZiIsICJfYXN5bmNUb0dlbmVyYXRvciIsICJlZGl0UGFyYW1zIiwgIndnUGFnZU5hbWUyIiwgIl94IiwgImFwcGx5IiwgImFyZ3VtZW50cyIsICJlZGl0IiwgIl9yZWYyIiwgImFjdGlvbiIsICJtaW5vciIsICJfeDIiLCAiaW1wb3J0X2V4dF9nYWRnZXQ0IiwgInNob3dFcnJvciIsICJlcnJvciIsICJjb25zb2xlIiwgImNsb3NlIiwgImVkaXRQYWdlIiwgIl9yZWYzIiwgImltcG9ydF9leHRfZ2FkZ2V0NSIsICJhZGRMaXN0ZW5lciIsICIkZWxlbWVudCIsICJjbGlja0xpc3RlbmVyIiwgIl9yZWY0IiwgImV2ZW50IiwgInByZXZlbnREZWZhdWx0IiwgImlzQ29uZmlybSIsICJvb3VpQ29uZmlybVdpdGhTdHlsZSIsICJfeDMiLCAib24iLCAiYWRkUG9ydGxldExpbmsiLCAiJGJvZHkiLCAicG9ydGxldElkIiwgImZpbmQiLCAibGVuZ3RoIiwgImVsZW1lbnQiLCAiJCIsICIkdGFyZ2V0IiwgImltcG9ydF9leHRfZ2FkZ2V0NiIsICJ3Z05hbWVzcGFjZU51bWJlcjIiLCAiZ2V0Qm9keSIsICJ0aGVuIl0KfQo=

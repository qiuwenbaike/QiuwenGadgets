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
  location.replace(mw.util.getUrl(targetPage));
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
if (wgNamespaceNumber2 >= 0 && wgNamespaceNumber2 !== 14) {
  void (0, import_ext_gadget6.getBody)().then(addPortletLink);
}

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0JhblBhZ2UvbW9kdWxlcy9pMThuLnRzIiwgInNyYy9CYW5QYWdlL21vZHVsZXMvdXRpbC9nZW5lcmF0ZUVkaXRQYXJhbXMudHMiLCAic3JjL0JhblBhZ2Uvb3B0aW9ucy5qc29uIiwgInNyYy9CYW5QYWdlL21vZHVsZXMvYXBpLnRzIiwgInNyYy9CYW5QYWdlL21vZHVsZXMvdXRpbC9yZWZyZXNoUGFnZS50cyIsICJzcmMvQmFuUGFnZS9tb2R1bGVzL3V0aWwvY3JlYXRlLnRzIiwgInNyYy9CYW5QYWdlL21vZHVsZXMvdXRpbC9lZGl0LnRzIiwgInNyYy9CYW5QYWdlL21vZHVsZXMvdXRpbC9zaG93RXJyb3IudHMiLCAic3JjL0JhblBhZ2UvbW9kdWxlcy9lZGl0UGFnZS50cyIsICJzcmMvQmFuUGFnZS9tb2R1bGVzL2FkZExpc3RlbmVyLnRzIiwgInNyYy9CYW5QYWdlL21vZHVsZXMvYWRkUG9ydGxldExpbmsudHMiLCAic3JjL0JhblBhZ2UvQmFuUGFnZS50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHtsb2NhbGl6ZX0gZnJvbSAnZXh0LmdhZGdldC5pMThuJztcblxuY29uc3QgZ2V0STE4bk1lc3NhZ2VzID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdEJhbjogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdCYW4gdGhpcyBwYWdlJyxcblx0XHRcdGphOiAn54++5Zyo44Gu44Oa44O844K444KS54Sh5Yq544GrJyxcblx0XHRcdCd6aC1oYW5zJzogJ+emgeeUqOatpOmhtemdoicsXG5cdFx0XHQnemgtaGFudCc6ICfnpoHnlKjmraTpoIEnLFxuXHRcdH0pLFxuXHRcdENvbmZpcm06IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQ29uZmlybSB0byBlbmZvcmNlIGJhbiBvbiB0aGlzIHBhZ2U/Jyxcblx0XHRcdCd6aC1oYW5zJzogJ+aCqOehruWumuimgeemgeeUqOatpOmhtemdouWQl++8nycsXG5cdFx0XHQnemgtaGFudCc6ICfmgqjnorrlrpropoHnpoHnlKjmraTpoIHpnaLll47vvJ8nLFxuXHRcdH0pLFxuXHRcdCdOZXR3b3JrIGVycm9yJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdOZXR3b3JrIGVycm9yJyxcblx0XHRcdGphOiAn44ON44OD44OI44Ov44O844Kv44Ko44Op44O8Jyxcblx0XHRcdCd6aC1oYW5zJzogJ+e9kee7nOW8guW4uCcsXG5cdFx0XHQnemgtaGFudCc6ICfntrLot6/nlbDluLgnLFxuXHRcdH0pLFxuXHRcdFJlZnJlc2hpbmc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnUGFnZSBiYW5uZWQgc3VjY2Vzc2Z1bGx5LCByZWZyZXNoaW5nLi4uJyxcblx0XHRcdGphOiAn54++5Zyo44Gu44Oa44O844K444KS54Sh5Yq544Gr44Gq44KK44G+44GX44Gf44CC5YaN6Kqt44G/6L6844G/44GX44G+44GZLi4uJyxcblx0XHRcdCd6aC1oYW5zJzogJ+emgeeUqOaIkOWKn++8jOWNs+WwhuWIt+aWsOW9k+WJjemhtemdouKApuKApicsXG5cdFx0XHQnemgtaGFudCc6ICfnpoHnlKjmiJDlip/vvIzljbPlsIfph43mlrDovInlhaXnlbbliY3poIHigKbigKYnLFxuXHRcdH0pLFxuXHRcdCdCYW4gdGhlICQxJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdCYW4gdGhlICQxJyxcblx0XHRcdGphOiAn54++5Zyo44GuJDHjgpLnhKHlirnjgasnLFxuXHRcdFx0J3poLWhhbnMnOiAn56aB55So5q2kJDEnLFxuXHRcdFx0J3poLWhhbnQnOiAn56aB55So5q2kJDEnLFxuXHRcdH0pLFxuXHRcdEltYWdlOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ2ltYWdlJyxcblx0XHRcdGphOiAn55S75YOPJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WbvueJhycsXG5cdFx0XHQnemgtaGFudCc6ICflnJbniYcnLFxuXHRcdH0pLFxuXHRcdFBhZ2U6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAncGFnZScsXG5cdFx0XHRqYTogJ+ODmuODvOOCuCcsXG5cdFx0XHQnemgtaGFucyc6ICfpobXpnaInLFxuXHRcdFx0J3poLWhhbnQnOiAn6aCBJyxcblx0XHR9KSxcblx0XHRUZW1wbGF0ZTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICd0ZW1wbGF0ZScsXG5cdFx0XHRqYTogJ+ODhuODs+ODl+ODrOODvOODiCcsXG5cdFx0XHR6aDogJ+aooeadvycsXG5cdFx0fSksXG5cdH07XG59O1xuY29uc3QgaTE4bk1lc3NhZ2VzID0gZ2V0STE4bk1lc3NhZ2VzKCk7XG5cbmNvbnN0IGdldE1lc3NhZ2U6IEdldE1lc3NhZ2VzPHR5cGVvZiBpMThuTWVzc2FnZXM+ID0gKGtleSkgPT4ge1xuXHRyZXR1cm4gaTE4bk1lc3NhZ2VzW2tleV0gfHwga2V5O1xufTtcblxuZXhwb3J0IHtnZXRNZXNzYWdlfTtcbiIsICJpbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4uL2kxOG4nO1xuXG50eXBlIEVkaXRQYXJhbXMgPSB7XG5cdHRhcmdldFBhZ2U6IHN0cmluZztcblx0dGV4dDogc3RyaW5nO1xuXHRzdW1tYXJ5OiBzdHJpbmc7XG5cdHdnUGFnZU5hbWU6IHN0cmluZztcbn07XG5cbmNvbnN0IHt3Z05hbWVzcGFjZU51bWJlciwgd2dQYWdlTmFtZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cbmNvbnN0IGdlbmVyYXRlRWRpdFBhcmFtcyA9ICgpOiBFZGl0UGFyYW1zID0+IHtcblx0bGV0IHRhcmdldFBhZ2U6IHN0cmluZyA9ICdRaXV3ZW466aaW6aG1Jztcblx0bGV0IHJlZGlyZWN0VGVtcGxhdGU6IHN0cmluZyA9ICcnO1xuXHRsZXQgc3VtbWFyeTogc3RyaW5nID0gZ2V0TWVzc2FnZSgnQmFuIHRoZSAkMScpO1xuXG5cdHN3aXRjaCAod2dOYW1lc3BhY2VOdW1iZXIpIHtcblx0XHRjYXNlIDY6XG5cdFx0XHRpZiAod2dQYWdlTmFtZS5zdGFydHNXaXRoKCdGaWxlOkJTaWNvbl8nKSkge1xuXHRcdFx0XHR0YXJnZXRQYWdlID0gJ0ZpbGU6QlNpY29uIC5zdmcnO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGFyZ2V0UGFnZSA9ICdGaWxlOkJhbm5lZCBJbWFnZXMuc3ZnJztcblx0XHRcdH1cblx0XHRcdHJlZGlyZWN0VGVtcGxhdGUgPSAne3vmlofku7bph43lrprlkJF9fSc7XG5cdFx0XHRzdW1tYXJ5ID0gc3VtbWFyeS5yZXBsYWNlKCckMScsIGdldE1lc3NhZ2UoJ0ltYWdlJykpO1xuXHRcdFx0YnJlYWs7XG5cdFx0Y2FzZSAxMDpcblx0XHRcdHRhcmdldFBhZ2UgPSAnVGVtcGxhdGU6Vm9pZCc7XG5cdFx0XHRyZWRpcmVjdFRlbXBsYXRlID0gJ3t75qih5p2/6YeN5a6a5ZCRfX0nO1xuXHRcdFx0c3VtbWFyeSA9IHN1bW1hcnkucmVwbGFjZSgnJDEnLCBnZXRNZXNzYWdlKCdUZW1wbGF0ZScpKTtcblx0XHRcdGJyZWFrO1xuXHRcdGRlZmF1bHQ6XG5cdFx0XHRzdW1tYXJ5ID0gc3VtbWFyeS5yZXBsYWNlKCckMScsIGdldE1lc3NhZ2UoJ1BhZ2UnKSk7XG5cdFx0XHRicmVhaztcblx0fVxuXG5cdGNvbnN0IHRleHQ6IHN0cmluZyA9IGAjUkVESVJFQ1QgW1ske3RhcmdldFBhZ2V9XV1cXG4ke3JlZGlyZWN0VGVtcGxhdGV9YDtcblxuXHRyZXR1cm4ge1xuXHRcdHRhcmdldFBhZ2UsXG5cdFx0dGV4dCxcblx0XHRzdW1tYXJ5LFxuXHRcdHdnUGFnZU5hbWUsXG5cdH07XG59O1xuXG5leHBvcnQge3R5cGUgRWRpdFBhcmFtcywgZ2VuZXJhdGVFZGl0UGFyYW1zfTtcbiIsICJ7XG5cdFwidmVyc2lvblwiOiBcIjMuMFwiXG59XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtpbml0TXdBcGl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmNvbnN0IGFwaTogbXcuQXBpID0gaW5pdE13QXBpKGBCYW5QYWdlLyR7T1BUSU9OUy52ZXJzaW9ufWApO1xuXG5leHBvcnQge2FwaX07XG4iLCAiaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuLi9pMThuJztcbmltcG9ydCB7dG9hc3RpZnl9IGZyb20gJ2V4dC5nYWRnZXQuVG9hc3RpZnknO1xuXG5jb25zdCByZWZyZXNoID0gKHRhcmdldFBhZ2U/OiBzdHJpbmcpOiB2b2lkID0+IHtcblx0dG9hc3RpZnkoXG5cdFx0e1xuXHRcdFx0dGV4dDogZ2V0TWVzc2FnZSgnUmVmcmVzaGluZycpLFxuXHRcdFx0ZHVyYXRpb246IC0xLFxuXHRcdH0sXG5cdFx0J3N1Y2Nlc3MnXG5cdCk7XG5cblx0bG9jYXRpb24ucmVwbGFjZShtdy51dGlsLmdldFVybCh0YXJnZXRQYWdlKSk7XG59O1xuXG5leHBvcnQge3JlZnJlc2h9O1xuIiwgImltcG9ydCB7dHlwZSBFZGl0UGFyYW1zfSBmcm9tICcuL2dlbmVyYXRlRWRpdFBhcmFtcyc7XG5pbXBvcnQge2FwaX0gZnJvbSAnLi4vYXBpJztcbmltcG9ydCB7cmVmcmVzaH0gZnJvbSAnLi9yZWZyZXNoUGFnZSc7XG5cbmNvbnN0IGNyZWF0ZSA9IGFzeW5jIChlZGl0UGFyYW1zOiBFZGl0UGFyYW1zKTogUHJvbWlzZTx2b2lkPiA9PiB7XG5cdGNvbnN0IHt0YXJnZXRQYWdlLCB0ZXh0LCBzdW1tYXJ5LCB3Z1BhZ2VOYW1lfSA9IGVkaXRQYXJhbXM7XG5cblx0YXdhaXQgYXBpLmNyZWF0ZShcblx0XHR3Z1BhZ2VOYW1lLFxuXHRcdHtcblx0XHRcdHN1bW1hcnksXG5cdFx0fSxcblx0XHR0ZXh0XG5cdCk7XG5cblx0cmVmcmVzaCh0YXJnZXRQYWdlKTtcbn07XG5cbmV4cG9ydCB7Y3JlYXRlfTtcbiIsICJpbXBvcnQge3R5cGUgRWRpdFBhcmFtc30gZnJvbSAnLi9nZW5lcmF0ZUVkaXRQYXJhbXMnO1xuaW1wb3J0IHthcGl9IGZyb20gJy4uL2FwaSc7XG5pbXBvcnQge3JlZnJlc2h9IGZyb20gJy4vcmVmcmVzaFBhZ2UnO1xuXG5jb25zdCBlZGl0ID0gYXN5bmMgKGVkaXRQYXJhbXM6IEVkaXRQYXJhbXMpOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0Y29uc3Qge3RhcmdldFBhZ2UsIHRleHQsIHN1bW1hcnksIHdnUGFnZU5hbWV9ID0gZWRpdFBhcmFtcztcblxuXHRhd2FpdCBhcGkuZWRpdCh3Z1BhZ2VOYW1lLCAoKSA9PiB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHRleHQsXG5cdFx0XHRzdW1tYXJ5LFxuXHRcdFx0bWlub3I6IHRydWUsXG5cdFx0fTtcblx0fSk7XG5cblx0cmVmcmVzaCh0YXJnZXRQYWdlKTtcbn07XG5cbmV4cG9ydCB7ZWRpdH07XG4iLCAiaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuLi9pMThuJztcbmltcG9ydCB7dG9hc3RpZnl9IGZyb20gJ2V4dC5nYWRnZXQuVG9hc3RpZnknO1xuXG5jb25zdCBzaG93RXJyb3IgPSAoZXJyb3I6IHVua25vd24pOiB2b2lkID0+IHtcblx0Y29uc29sZS5lcnJvcignW0JhblBhZ2VdIEFqYXggZXJyb3I6JywgZXJyb3IpO1xuXHR0b2FzdGlmeShcblx0XHR7XG5cdFx0XHR0ZXh0OiBnZXRNZXNzYWdlKCdOZXR3b3JrIGVycm9yJyksXG5cdFx0XHRjbG9zZTogdHJ1ZSxcblx0XHRcdGR1cmF0aW9uOiAtMSxcblx0XHR9LFxuXHRcdCdlcnJvcidcblx0KTtcbn07XG5cbmV4cG9ydCB7c2hvd0Vycm9yfTtcbiIsICJpbXBvcnQge3R5cGUgRWRpdFBhcmFtcywgZ2VuZXJhdGVFZGl0UGFyYW1zfSBmcm9tICcuL3V0aWwvZ2VuZXJhdGVFZGl0UGFyYW1zJztcbmltcG9ydCB7Y3JlYXRlfSBmcm9tICcuL3V0aWwvY3JlYXRlJztcbmltcG9ydCB7ZWRpdH0gZnJvbSAnLi91dGlsL2VkaXQnO1xuaW1wb3J0IHtzaG93RXJyb3J9IGZyb20gJy4vdXRpbC9zaG93RXJyb3InO1xuXG5jb25zdCBlZGl0UGFnZSA9IGFzeW5jICgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0Y29uc3QgZWRpdFBhcmFtczogRWRpdFBhcmFtcyA9IGdlbmVyYXRlRWRpdFBhcmFtcygpO1xuXG5cdHRyeSB7XG5cdFx0YXdhaXQgZWRpdChlZGl0UGFyYW1zKTtcblx0fSBjYXRjaCB7XG5cdFx0dHJ5IHtcblx0XHRcdGF3YWl0IGNyZWF0ZShlZGl0UGFyYW1zKTtcblx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0c2hvd0Vycm9yKGVycm9yKTtcblx0XHR9XG5cdH1cbn07XG5cbmV4cG9ydCB7ZWRpdFBhZ2V9O1xuIiwgImltcG9ydCB7ZWRpdFBhZ2V9IGZyb20gJy4vZWRpdFBhZ2UnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL2kxOG4nO1xuaW1wb3J0IHtvb3VpQ29uZmlybVdpdGhTdHlsZX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxuY29uc3QgYWRkTGlzdGVuZXIgPSAoJGVsZW1lbnQ6IEpRdWVyeSk6IHZvaWQgPT4ge1xuXHRjb25zdCBjbGlja0xpc3RlbmVyID0gYXN5bmMgKGV2ZW50OiBKUXVlcnkuQ2xpY2tFdmVudCk6IFByb21pc2U8dm9pZD4gPT4ge1xuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cblx0XHRjb25zdCBpc0NvbmZpcm06IGJvb2xlYW4gPSBhd2FpdCBvb3VpQ29uZmlybVdpdGhTdHlsZShnZXRNZXNzYWdlKCdDb25maXJtJykpO1xuXHRcdGlmICghaXNDb25maXJtKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dm9pZCBlZGl0UGFnZSgpO1xuXHR9O1xuXG5cdCRlbGVtZW50Lm9uKCdjbGljaycsIChldmVudCk6IHZvaWQgPT4ge1xuXHRcdHZvaWQgY2xpY2tMaXN0ZW5lcihldmVudCk7XG5cdH0pO1xufTtcblxuZXhwb3J0IHthZGRMaXN0ZW5lcn07XG4iLCAiaW1wb3J0IHthZGRMaXN0ZW5lcn0gZnJvbSAnLi9hZGRMaXN0ZW5lcic7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vaTE4bic7XG5cbmNvbnN0IGFkZFBvcnRsZXRMaW5rID0gKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQgPT4ge1xuXHRjb25zdCBwb3J0bGV0SWQ6ICdwLWNhY3Rpb25zJyB8ICdwLXRiJyA9ICRib2R5LmZpbmQoJyNwLWNhY3Rpb25zJykubGVuZ3RoID8gJ3AtY2FjdGlvbnMnIDogJ3AtdGInO1xuXHRjb25zdCBlbGVtZW50OiBIVE1MTElFbGVtZW50IHwgbnVsbCA9IG13LnV0aWwuYWRkUG9ydGxldExpbmsocG9ydGxldElkLCAnIycsIGdldE1lc3NhZ2UoJ0JhbicpLCAndC1iYW5wYWdlJyk7XG5cdGlmICghZWxlbWVudCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0ICRlbGVtZW50OiBKUXVlcnkgPSAkKGVsZW1lbnQpO1xuXHRsZXQgJHRhcmdldDogSlF1ZXJ5ID0gJGVsZW1lbnQuZmluZCgnYScpO1xuXHRpZiAoISR0YXJnZXQubGVuZ3RoKSB7XG5cdFx0JHRhcmdldCA9ICRlbGVtZW50O1xuXHR9XG5cblx0YWRkTGlzdGVuZXIoJHRhcmdldCk7XG59O1xuXG5leHBvcnQge2FkZFBvcnRsZXRMaW5rfTtcbiIsICJpbXBvcnQge2FkZFBvcnRsZXRMaW5rfSBmcm9tICcuL21vZHVsZXMvYWRkUG9ydGxldExpbmsnO1xuaW1wb3J0IHtnZXRCb2R5fSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG5jb25zdCB7d2dOYW1lc3BhY2VOdW1iZXJ9ID0gbXcuY29uZmlnLmdldCgpO1xuXG5pZiAod2dOYW1lc3BhY2VOdW1iZXIgPj0gMCAmJiB3Z05hbWVzcGFjZU51bWJlciAhPT0gMTQpIHtcblx0dm9pZCBnZXRCb2R5KCkudGhlbihhZGRQb3J0bGV0TGluayk7XG59XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxvQkFBdUJDLFFBQUEsaUJBQUE7QUFFdkIsSUFBTUMsa0JBQWtCQSxNQUFNO0FBQzdCLFNBQU87SUFDTkMsTUFBQSxHQUFLSCxrQkFBQUksVUFBUztNQUNiQyxJQUFJO01BQ0pDLElBQUk7TUFDSixXQUFX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ZUFBZTtBQUVyQixZQUFNQyxZQUFBLE9BQXFCLEdBQU1QLG1CQUFBUSxzQkFBcUJyRCxXQUFXLFNBQVMsQ0FBQztBQUMzRSxVQUFJLENBQUNvRCxXQUFXO0FBQ2Y7TUFDRDtBQUVBLFdBQUtULFNBQVM7SUFDZixDQUFBO0FBQUEsV0FBQSxTQVRNSyxlQUFBTSxLQUFBO0FBQUEsYUFBQUwsTUFBQWpCLE1BQUEsTUFBQUMsU0FBQTtJQUFBO0VBQUEsRUFBQTtBQVdOYyxXQUFTUSxHQUFHLFNBQVVMLFdBQWdCO0FBQ3JDLFNBQUtGLGNBQWNFLEtBQUs7RUFDekIsQ0FBQztBQUNGOztBQ2hCQSxJQUFNTSxpQkFBa0JDLFdBQXlDO0FBQ2hFLFFBQU1DLFlBQW1DRCxNQUFNRSxLQUFLLGFBQWEsRUFBRUMsU0FBUyxlQUFlO0FBQzNGLFFBQU1DLFVBQWdDekQsR0FBR29CLEtBQUtnQyxlQUFlRSxXQUFXLEtBQUsxRCxXQUFXLEtBQUssR0FBRyxXQUFXO0FBQzNHLE1BQUksQ0FBQzZELFNBQVM7QUFDYjtFQUNEO0FBRUEsUUFBTWQsV0FBbUJlLEVBQUVELE9BQU87QUFDbEMsTUFBSUUsVUFBa0JoQixTQUFTWSxLQUFLLEdBQUc7QUFDdkMsTUFBSSxDQUFDSSxRQUFRSCxRQUFRO0FBQ3BCRyxjQUFVaEI7RUFDWDtBQUVBRCxjQUFZaUIsT0FBTztBQUNwQjs7QUNoQkEsSUFBQUMscUJBQXNCN0UsUUFBQSxpQkFBQTtBQUV0QixJQUFNO0VBQUNlLG1CQUFBK0Q7QUFBaUIsSUFBSTdELEdBQUdDLE9BQU9DLElBQUk7QUFFMUMsSUFBSTJELHNCQUFxQixLQUFLQSx1QkFBc0IsSUFBSTtBQUN2RCxRQUFBLEdBQUtELG1CQUFBRSxTQUFRLEVBQUVDLEtBQUtYLGNBQWM7QUFDbkM7IiwKICAibmFtZXMiOiBbImltcG9ydF9leHRfZ2FkZ2V0IiwgInJlcXVpcmUiLCAiZ2V0STE4bk1lc3NhZ2VzIiwgIkJhbiIsICJsb2NhbGl6ZSIsICJlbiIsICJqYSIsICJDb25maXJtIiwgIlJlZnJlc2hpbmciLCAiSW1hZ2UiLCAiUGFnZSIsICJUZW1wbGF0ZSIsICJ6aCIsICJpMThuTWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAid2dOYW1lc3BhY2VOdW1iZXIiLCAid2dQYWdlTmFtZSIsICJtdyIsICJjb25maWciLCAiZ2V0IiwgImdlbmVyYXRlRWRpdFBhcmFtcyIsICJ0YXJnZXRQYWdlIiwgInJlZGlyZWN0VGVtcGxhdGUiLCAic3VtbWFyeSIsICJzdGFydHNXaXRoIiwgInJlcGxhY2UiLCAidGV4dCIsICJjb25jYXQiLCAidmVyc2lvbiIsICJpbXBvcnRfZXh0X2dhZGdldDIiLCAiYXBpIiwgImluaXRNd0FwaSIsICJpbXBvcnRfZXh0X2dhZGdldDMiLCAicmVmcmVzaCIsICJ0b2FzdGlmeSIsICJkdXJhdGlvbiIsICJsb2NhdGlvbiIsICJ1dGlsIiwgImdldFVybCIsICJjcmVhdGUiLCAiX3JlZiIsICJfYXN5bmNUb0dlbmVyYXRvciIsICJlZGl0UGFyYW1zIiwgIndnUGFnZU5hbWUyIiwgIl94IiwgImFwcGx5IiwgImFyZ3VtZW50cyIsICJlZGl0IiwgIl9yZWYyIiwgIm1pbm9yIiwgIl94MiIsICJpbXBvcnRfZXh0X2dhZGdldDQiLCAic2hvd0Vycm9yIiwgImVycm9yIiwgImNvbnNvbGUiLCAiY2xvc2UiLCAiZWRpdFBhZ2UiLCAiX3JlZjMiLCAiaW1wb3J0X2V4dF9nYWRnZXQ1IiwgImFkZExpc3RlbmVyIiwgIiRlbGVtZW50IiwgImNsaWNrTGlzdGVuZXIiLCAiX3JlZjQiLCAiZXZlbnQiLCAicHJldmVudERlZmF1bHQiLCAiaXNDb25maXJtIiwgIm9vdWlDb25maXJtV2l0aFN0eWxlIiwgIl94MyIsICJvbiIsICJhZGRQb3J0bGV0TGluayIsICIkYm9keSIsICJwb3J0bGV0SWQiLCAiZmluZCIsICJsZW5ndGgiLCAiZWxlbWVudCIsICIkIiwgIiR0YXJnZXQiLCAiaW1wb3J0X2V4dF9nYWRnZXQ2IiwgIndnTmFtZXNwYWNlTnVtYmVyMiIsICJnZXRCb2R5IiwgInRoZW4iXQp9Cg==

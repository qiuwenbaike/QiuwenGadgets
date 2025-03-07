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
if (wgNamespaceNumber2 >= 0 && wgNamespaceNumber2 !== 14) {
  void (0, import_ext_gadget6.getBody)().then(addPortletLink);
}

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL0JhblBhZ2UvbW9kdWxlcy9pMThuLnRzIiwgIi4uLy4uL3NyYy9CYW5QYWdlL21vZHVsZXMvdXRpbC9nZW5lcmF0ZUVkaXRQYXJhbXMudHMiLCAiLi4vLi4vc3JjL0JhblBhZ2Uvb3B0aW9ucy5qc29uIiwgIi4uLy4uL3NyYy9CYW5QYWdlL21vZHVsZXMvYXBpLnRzIiwgIi4uLy4uL3NyYy9CYW5QYWdlL21vZHVsZXMvdXRpbC9yZWZyZXNoUGFnZS50cyIsICIuLi8uLi9zcmMvQmFuUGFnZS9tb2R1bGVzL3V0aWwvY3JlYXRlLnRzIiwgIi4uLy4uL3NyYy9CYW5QYWdlL21vZHVsZXMvdXRpbC9lZGl0LnRzIiwgIi4uLy4uL3NyYy9CYW5QYWdlL21vZHVsZXMvdXRpbC9zaG93RXJyb3IudHMiLCAiLi4vLi4vc3JjL0JhblBhZ2UvbW9kdWxlcy9lZGl0UGFnZS50cyIsICIuLi8uLi9zcmMvQmFuUGFnZS9tb2R1bGVzL2FkZExpc3RlbmVyLnRzIiwgIi4uLy4uL3NyYy9CYW5QYWdlL21vZHVsZXMvYWRkUG9ydGxldExpbmsudHMiLCAiLi4vLi4vc3JjL0JhblBhZ2UvQmFuUGFnZS50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHtsb2NhbGl6ZX0gZnJvbSAnZXh0LmdhZGdldC5pMThuJztcblxuY29uc3QgZ2V0STE4bk1lc3NhZ2VzID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdEJhbjogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdCYW4gdGhpcyBwYWdlJyxcblx0XHRcdGphOiAn54++5Zyo44Gu44Oa44O844K444KS54Sh5Yq544GrJyxcblx0XHRcdCd6aC1oYW5zJzogJ+emgeeUqOatpOmhtemdoicsXG5cdFx0XHQnemgtaGFudCc6ICfnpoHnlKjmraTpoIEnLFxuXHRcdH0pLFxuXHRcdENvbmZpcm06IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQ29uZmlybSB0byBlbmZvcmNlIGJhbiBvbiB0aGlzIHBhZ2U/Jyxcblx0XHRcdCd6aC1oYW5zJzogJ+aCqOehruWumuimgeemgeeUqOatpOmhtemdouWQl++8nycsXG5cdFx0XHQnemgtaGFudCc6ICfmgqjnorrlrpropoHnpoHnlKjmraTpoIHpnaLll47vvJ8nLFxuXHRcdH0pLFxuXHRcdCdOZXR3b3JrIGVycm9yJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdOZXR3b3JrIGVycm9yJyxcblx0XHRcdGphOiAn44ON44OD44OI44Ov44O844Kv44Ko44Op44O8Jyxcblx0XHRcdCd6aC1oYW5zJzogJ+e9kee7nOW8guW4uCcsXG5cdFx0XHQnemgtaGFudCc6ICfntrLot6/nlbDluLgnLFxuXHRcdH0pLFxuXHRcdFJlZnJlc2hpbmc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnUGFnZSBiYW5uZWQgc3VjY2Vzc2Z1bGx5LCByZWZyZXNoaW5nLi4uJyxcblx0XHRcdGphOiAn54++5Zyo44Gu44Oa44O844K444KS54Sh5Yq544Gr44Gq44KK44G+44GX44Gf44CC5YaN6Kqt44G/6L6844G/44GX44G+44GZLi4uJyxcblx0XHRcdCd6aC1oYW5zJzogJ+emgeeUqOaIkOWKn++8jOWNs+WwhuWIt+aWsOW9k+WJjemhtemdouKApuKApicsXG5cdFx0XHQnemgtaGFudCc6ICfnpoHnlKjmiJDlip/vvIzljbPlsIfph43mlrDovInlhaXnlbbliY3poIHigKbigKYnLFxuXHRcdH0pLFxuXHRcdCdCYW4gdGhlICQxJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdCYW4gdGhlICQxJyxcblx0XHRcdGphOiAn54++5Zyo44GuJDHjgpLnhKHlirnjgasnLFxuXHRcdFx0J3poLWhhbnMnOiAn56aB55So5q2kJDEnLFxuXHRcdFx0J3poLWhhbnQnOiAn56aB55So5q2kJDEnLFxuXHRcdH0pLFxuXHRcdEltYWdlOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ2ltYWdlJyxcblx0XHRcdGphOiAn55S75YOPJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WbvueJhycsXG5cdFx0XHQnemgtaGFudCc6ICflnJbniYcnLFxuXHRcdH0pLFxuXHRcdFBhZ2U6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAncGFnZScsXG5cdFx0XHRqYTogJ+ODmuODvOOCuCcsXG5cdFx0XHQnemgtaGFucyc6ICfpobXpnaInLFxuXHRcdFx0J3poLWhhbnQnOiAn6aCBJyxcblx0XHR9KSxcblx0XHRUZW1wbGF0ZTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICd0ZW1wbGF0ZScsXG5cdFx0XHRqYTogJ+ODhuODs+ODl+ODrOODvOODiCcsXG5cdFx0XHR6aDogJ+aooeadvycsXG5cdFx0fSksXG5cdH07XG59O1xuY29uc3QgaTE4bk1lc3NhZ2VzID0gZ2V0STE4bk1lc3NhZ2VzKCk7XG5cbmNvbnN0IGdldE1lc3NhZ2U6IEdldE1lc3NhZ2VzPHR5cGVvZiBpMThuTWVzc2FnZXM+ID0gKGtleSkgPT4ge1xuXHRyZXR1cm4gaTE4bk1lc3NhZ2VzW2tleV0gfHwga2V5O1xufTtcblxuZXhwb3J0IHtnZXRNZXNzYWdlfTtcbiIsICJpbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4uL2kxOG4nO1xuXG50eXBlIEVkaXRQYXJhbXMgPSB7XG5cdHRhcmdldFBhZ2U6IHN0cmluZztcblx0dGV4dDogc3RyaW5nO1xuXHRzdW1tYXJ5OiBzdHJpbmc7XG5cdHdnUGFnZU5hbWU6IHN0cmluZztcbn07XG5cbmNvbnN0IHt3Z05hbWVzcGFjZU51bWJlciwgd2dQYWdlTmFtZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cbmNvbnN0IGdlbmVyYXRlRWRpdFBhcmFtcyA9ICgpOiBFZGl0UGFyYW1zID0+IHtcblx0bGV0IHRhcmdldFBhZ2U6IHN0cmluZyA9ICdRaXV3ZW466aaW6aG1Jztcblx0bGV0IHJlZGlyZWN0VGVtcGxhdGU6IHN0cmluZyA9ICcnO1xuXHRsZXQgc3VtbWFyeTogc3RyaW5nID0gZ2V0TWVzc2FnZSgnQmFuIHRoZSAkMScpO1xuXG5cdHN3aXRjaCAod2dOYW1lc3BhY2VOdW1iZXIpIHtcblx0XHRjYXNlIDY6XG5cdFx0XHRpZiAod2dQYWdlTmFtZS5zdGFydHNXaXRoKCdGaWxlOkJTaWNvbl8nKSkge1xuXHRcdFx0XHR0YXJnZXRQYWdlID0gJ0ZpbGU6QlNpY29uIC5zdmcnO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGFyZ2V0UGFnZSA9ICdGaWxlOkJhbm5lZCBJbWFnZXMuc3ZnJztcblx0XHRcdH1cblx0XHRcdHJlZGlyZWN0VGVtcGxhdGUgPSAne3vmlofku7bph43lrprlkJF9fSc7XG5cdFx0XHRzdW1tYXJ5ID0gc3VtbWFyeS5yZXBsYWNlKCckMScsIGdldE1lc3NhZ2UoJ0ltYWdlJykpO1xuXHRcdFx0YnJlYWs7XG5cdFx0Y2FzZSAxMDpcblx0XHRcdHRhcmdldFBhZ2UgPSAnVGVtcGxhdGU6Vm9pZCc7XG5cdFx0XHRyZWRpcmVjdFRlbXBsYXRlID0gJ3t75qih5p2/6YeN5a6a5ZCRfX0nO1xuXHRcdFx0c3VtbWFyeSA9IHN1bW1hcnkucmVwbGFjZSgnJDEnLCBnZXRNZXNzYWdlKCdUZW1wbGF0ZScpKTtcblx0XHRcdGJyZWFrO1xuXHRcdGRlZmF1bHQ6XG5cdFx0XHRzdW1tYXJ5ID0gc3VtbWFyeS5yZXBsYWNlKCckMScsIGdldE1lc3NhZ2UoJ1BhZ2UnKSk7XG5cdFx0XHRicmVhaztcblx0fVxuXG5cdGNvbnN0IHRleHQ6IHN0cmluZyA9IGAjUkVESVJFQ1QgW1ske3RhcmdldFBhZ2V9XV1cXG4ke3JlZGlyZWN0VGVtcGxhdGV9YDtcblxuXHRyZXR1cm4ge1xuXHRcdHRhcmdldFBhZ2UsXG5cdFx0dGV4dCxcblx0XHRzdW1tYXJ5LFxuXHRcdHdnUGFnZU5hbWUsXG5cdH07XG59O1xuXG5leHBvcnQge3R5cGUgRWRpdFBhcmFtcywgZ2VuZXJhdGVFZGl0UGFyYW1zfTtcbiIsICJ7XG5cdFwidmVyc2lvblwiOiBcIjMuMFwiXG59XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtpbml0TXdBcGl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmNvbnN0IGFwaTogbXcuQXBpID0gaW5pdE13QXBpKGBCYW5QYWdlLyR7T1BUSU9OUy52ZXJzaW9ufWApO1xuXG5leHBvcnQge2FwaX07XG4iLCAiaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuLi9pMThuJztcbmltcG9ydCB7dG9hc3RpZnl9IGZyb20gJ2V4dC5nYWRnZXQuVG9hc3RpZnknO1xuXG5jb25zdCB7d2dTY3JpcHR9ID0gbXcuY29uZmlnLmdldCgpO1xuXG5jb25zdCByZWZyZXNoID0gKHRhcmdldFBhZ2U6IHN0cmluZyk6IHZvaWQgPT4ge1xuXHR0b2FzdGlmeShcblx0XHR7XG5cdFx0XHR0ZXh0OiBnZXRNZXNzYWdlKCdSZWZyZXNoaW5nJyksXG5cdFx0XHRkdXJhdGlvbjogLTEsXG5cdFx0fSxcblx0XHQnc3VjY2Vzcydcblx0KTtcblxuXHRsb2NhdGlvbi5yZXBsYWNlKFxuXHRcdG13LnV0aWwuZ2V0VXJsKHdnU2NyaXB0LCB7XG5cdFx0XHR0aXRsZTogdGFyZ2V0UGFnZSxcblx0XHR9KVxuXHQpO1xufTtcblxuZXhwb3J0IHtyZWZyZXNofTtcbiIsICJpbXBvcnQge3R5cGUgRWRpdFBhcmFtc30gZnJvbSAnLi9nZW5lcmF0ZUVkaXRQYXJhbXMnO1xuaW1wb3J0IHthcGl9IGZyb20gJy4uL2FwaSc7XG5pbXBvcnQge3JlZnJlc2h9IGZyb20gJy4vcmVmcmVzaFBhZ2UnO1xuXG5jb25zdCBjcmVhdGUgPSBhc3luYyAoZWRpdFBhcmFtczogRWRpdFBhcmFtcyk6IFByb21pc2U8dm9pZD4gPT4ge1xuXHRjb25zdCB7dGFyZ2V0UGFnZSwgdGV4dCwgc3VtbWFyeSwgd2dQYWdlTmFtZX0gPSBlZGl0UGFyYW1zO1xuXG5cdGF3YWl0IGFwaS5jcmVhdGUoXG5cdFx0d2dQYWdlTmFtZSxcblx0XHR7XG5cdFx0XHRzdW1tYXJ5LFxuXHRcdH0sXG5cdFx0dGV4dFxuXHQpO1xuXG5cdHJlZnJlc2godGFyZ2V0UGFnZSk7XG59O1xuXG5leHBvcnQge2NyZWF0ZX07XG4iLCAiaW1wb3J0IHt0eXBlIEVkaXRQYXJhbXN9IGZyb20gJy4vZ2VuZXJhdGVFZGl0UGFyYW1zJztcbmltcG9ydCB7YXBpfSBmcm9tICcuLi9hcGknO1xuaW1wb3J0IHtyZWZyZXNofSBmcm9tICcuL3JlZnJlc2hQYWdlJztcblxuY29uc3QgZWRpdCA9IGFzeW5jIChlZGl0UGFyYW1zOiBFZGl0UGFyYW1zKTogUHJvbWlzZTx2b2lkPiA9PiB7XG5cdGNvbnN0IHt0YXJnZXRQYWdlLCB0ZXh0LCBzdW1tYXJ5LCB3Z1BhZ2VOYW1lfSA9IGVkaXRQYXJhbXM7XG5cblx0YXdhaXQgYXBpLmVkaXQod2dQYWdlTmFtZSwgKCkgPT4ge1xuXHRcdHJldHVybiB7XG5cdFx0XHR0ZXh0LFxuXHRcdFx0c3VtbWFyeSxcblx0XHRcdG1pbm9yOiB0cnVlLFxuXHRcdH07XG5cdH0pO1xuXG5cdHJlZnJlc2godGFyZ2V0UGFnZSk7XG59O1xuXG5leHBvcnQge2VkaXR9O1xuIiwgImltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi4vaTE4bic7XG5pbXBvcnQge3RvYXN0aWZ5fSBmcm9tICdleHQuZ2FkZ2V0LlRvYXN0aWZ5JztcblxuY29uc3Qgc2hvd0Vycm9yID0gKGVycm9yOiB1bmtub3duKTogdm9pZCA9PiB7XG5cdGNvbnNvbGUuZXJyb3IoJ1tCYW5QYWdlXSBBamF4IGVycm9yOicsIGVycm9yKTtcblx0dG9hc3RpZnkoXG5cdFx0e1xuXHRcdFx0dGV4dDogZ2V0TWVzc2FnZSgnTmV0d29yayBlcnJvcicpLFxuXHRcdFx0Y2xvc2U6IHRydWUsXG5cdFx0XHRkdXJhdGlvbjogLTEsXG5cdFx0fSxcblx0XHQnZXJyb3InXG5cdCk7XG59O1xuXG5leHBvcnQge3Nob3dFcnJvcn07XG4iLCAiaW1wb3J0IHt0eXBlIEVkaXRQYXJhbXMsIGdlbmVyYXRlRWRpdFBhcmFtc30gZnJvbSAnLi91dGlsL2dlbmVyYXRlRWRpdFBhcmFtcyc7XG5pbXBvcnQge2NyZWF0ZX0gZnJvbSAnLi91dGlsL2NyZWF0ZSc7XG5pbXBvcnQge2VkaXR9IGZyb20gJy4vdXRpbC9lZGl0JztcbmltcG9ydCB7c2hvd0Vycm9yfSBmcm9tICcuL3V0aWwvc2hvd0Vycm9yJztcblxuY29uc3QgZWRpdFBhZ2UgPSBhc3luYyAoKTogUHJvbWlzZTx2b2lkPiA9PiB7XG5cdGNvbnN0IGVkaXRQYXJhbXM6IEVkaXRQYXJhbXMgPSBnZW5lcmF0ZUVkaXRQYXJhbXMoKTtcblxuXHR0cnkge1xuXHRcdGF3YWl0IGVkaXQoZWRpdFBhcmFtcyk7XG5cdH0gY2F0Y2gge1xuXHRcdHRyeSB7XG5cdFx0XHRhd2FpdCBjcmVhdGUoZWRpdFBhcmFtcyk7XG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdHNob3dFcnJvcihlcnJvcik7XG5cdFx0fVxuXHR9XG59O1xuXG5leHBvcnQge2VkaXRQYWdlfTtcbiIsICJpbXBvcnQge2VkaXRQYWdlfSBmcm9tICcuL2VkaXRQYWdlJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9pMThuJztcbmltcG9ydCB7b291aUNvbmZpcm1XaXRoU3R5bGV9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmNvbnN0IGFkZExpc3RlbmVyID0gKCRlbGVtZW50OiBKUXVlcnkpOiB2b2lkID0+IHtcblx0Y29uc3QgY2xpY2tMaXN0ZW5lciA9IGFzeW5jIChldmVudDogSlF1ZXJ5LkNsaWNrRXZlbnQpOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cdFx0Y29uc3QgaXNDb25maXJtOiBib29sZWFuID0gYXdhaXQgb291aUNvbmZpcm1XaXRoU3R5bGUoZ2V0TWVzc2FnZSgnQ29uZmlybScpKTtcblx0XHRpZiAoIWlzQ29uZmlybSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHZvaWQgZWRpdFBhZ2UoKTtcblx0fTtcblxuXHQkZWxlbWVudC5vbignY2xpY2snLCAoZXZlbnQpOiB2b2lkID0+IHtcblx0XHR2b2lkIGNsaWNrTGlzdGVuZXIoZXZlbnQpO1xuXHR9KTtcbn07XG5cbmV4cG9ydCB7YWRkTGlzdGVuZXJ9O1xuIiwgImltcG9ydCB7YWRkTGlzdGVuZXJ9IGZyb20gJy4vYWRkTGlzdGVuZXInO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL2kxOG4nO1xuXG5jb25zdCBhZGRQb3J0bGV0TGluayA9ICgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkID0+IHtcblx0Y29uc3QgcG9ydGxldElkOiAncC1jYWN0aW9ucycgfCAncC10YicgPSAkYm9keS5maW5kKCcjcC1jYWN0aW9ucycpLmxlbmd0aCA/ICdwLWNhY3Rpb25zJyA6ICdwLXRiJztcblx0Y29uc3QgZWxlbWVudDogSFRNTExJRWxlbWVudCB8IG51bGwgPSBtdy51dGlsLmFkZFBvcnRsZXRMaW5rKHBvcnRsZXRJZCwgJyMnLCBnZXRNZXNzYWdlKCdCYW4nKSwgJ3QtYmFucGFnZScpO1xuXHRpZiAoIWVsZW1lbnQpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCAkZWxlbWVudDogSlF1ZXJ5ID0gJChlbGVtZW50KTtcblx0bGV0ICR0YXJnZXQ6IEpRdWVyeSA9ICRlbGVtZW50LmZpbmQoJ2EnKTtcblx0aWYgKCEkdGFyZ2V0Lmxlbmd0aCkge1xuXHRcdCR0YXJnZXQgPSAkZWxlbWVudDtcblx0fVxuXG5cdGFkZExpc3RlbmVyKCR0YXJnZXQpO1xufTtcblxuZXhwb3J0IHthZGRQb3J0bGV0TGlua307XG4iLCAiaW1wb3J0IHthZGRQb3J0bGV0TGlua30gZnJvbSAnLi9tb2R1bGVzL2FkZFBvcnRsZXRMaW5rJztcbmltcG9ydCB7Z2V0Qm9keX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxuY29uc3Qge3dnTmFtZXNwYWNlTnVtYmVyfSA9IG13LmNvbmZpZy5nZXQoKTtcblxuaWYgKHdnTmFtZXNwYWNlTnVtYmVyID49IDAgJiYgd2dOYW1lc3BhY2VOdW1iZXIgIT09IDE0KSB7XG5cdHZvaWQgZ2V0Qm9keSgpLnRoZW4oYWRkUG9ydGxldExpbmspO1xufVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsb0JBQXVCQyxRQUFBLGlCQUFBO0FBRXZCLElBQU1DLGtCQUFrQkEsTUFBTTtBQUM3QixTQUFPO0lBQ05DLE1BQUEsR0FBS0gsa0JBQUFJLFVBQVM7TUFDYkMsSUFBSTtNQUNKQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0RDLFVBQUEsR0FBU1Asa0JBQUFJLFVBQVM7TUFDakJDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDRCxrQkFBQSxHQUFpQkwsa0JBQUFJLFVBQVM7TUFDekJDLElBQUk7TUFDSkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNERSxhQUFBLEdBQVlSLGtCQUFBSSxVQUFTO01BQ3BCQyxJQUFJO01BQ0pDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDRCxlQUFBLEdBQWNOLGtCQUFBSSxVQUFTO01BQ3RCQyxJQUFJO01BQ0pDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDREcsUUFBQSxHQUFPVCxrQkFBQUksVUFBUztNQUNmQyxJQUFJO01BQ0pDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDREksT0FBQSxHQUFNVixrQkFBQUksVUFBUztNQUNkQyxJQUFJO01BQ0pDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDREssV0FBQSxHQUFVWCxrQkFBQUksVUFBUztNQUNsQkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pNLElBQUk7SUFDTCxDQUFDO0VBQ0Y7QUFDRDtBQUNBLElBQU1DLGVBQWVYLGdCQUFnQjtBQUVyQyxJQUFNWSxhQUFnREMsU0FBUTtBQUM3RCxTQUFPRixhQUFhRSxHQUFHLEtBQUtBO0FBQzdCOztBQy9DQSxJQUFNO0VBQUNDO0VBQW1CQztBQUFVLElBQUlDLEdBQUdDLE9BQU9DLElBQUk7QUFFdEQsSUFBTUMscUJBQXFCQSxNQUFrQjtBQUM1QyxNQUFJQyxhQUFxQjtBQUN6QixNQUFJQyxtQkFBMkI7QUFDL0IsTUFBSUMsVUFBa0JWLFdBQVcsWUFBWTtBQUU3QyxVQUFRRSxtQkFBQTtJQUNQLEtBQUs7QUFDSixVQUFJQyxXQUFXUSxXQUFXLGNBQWMsR0FBRztBQUMxQ0gscUJBQWE7TUFDZCxPQUFPO0FBQ05BLHFCQUFhO01BQ2Q7QUFDQUMseUJBQW1CO0FBQ25CQyxnQkFBVUEsUUFBUUUsUUFBUSxNQUFNWixXQUFXLE9BQU8sQ0FBQztBQUNuRDtJQUNELEtBQUs7QUFDSlEsbUJBQWE7QUFDYkMseUJBQW1CO0FBQ25CQyxnQkFBVUEsUUFBUUUsUUFBUSxNQUFNWixXQUFXLFVBQVUsQ0FBQztBQUN0RDtJQUNEO0FBQ0NVLGdCQUFVQSxRQUFRRSxRQUFRLE1BQU1aLFdBQVcsTUFBTSxDQUFDO0FBQ2xEO0VBQ0Y7QUFFQSxRQUFNYSxPQUFBLGVBQUFDLE9BQThCTixZQUFVLE1BQUEsRUFBQU0sT0FBT0wsZ0JBQWdCO0FBRXJFLFNBQU87SUFDTkQ7SUFDQUs7SUFDQUg7SUFDQVA7RUFDRDtBQUNEOztBQzNDQyxJQUFBWSxVQUFXOztBQ0FaLElBQUFDLHFCQUF3QjdCLFFBQUEsaUJBQUE7QUFFeEIsSUFBTThCLE9BQUEsR0FBY0QsbUJBQUFFLFdBQUEsV0FBQUosT0FBNkJDLE9BQU8sQ0FBRTs7QUNGMUQsSUFBQUkscUJBQXVCaEMsUUFBQSxxQkFBQTtBQUV2QixJQUFNO0VBQUNpQztBQUFRLElBQUloQixHQUFHQyxPQUFPQyxJQUFJO0FBRWpDLElBQU1lLFVBQVdiLGdCQUE2QjtBQUM3QyxHQUFBLEdBQUFXLG1CQUFBRyxVQUNDO0lBQ0NULE1BQU1iLFdBQVcsWUFBWTtJQUM3QnVCLFVBQVU7RUFDWCxHQUNBLFNBQ0Q7QUFFQUMsV0FBU1osUUFDUlIsR0FBR3FCLEtBQUtDLE9BQU9OLFVBQVU7SUFDeEJPLE9BQU9uQjtFQUNSLENBQUMsQ0FDRjtBQUNEOztBQ2ZBLElBQU1vQixTQUFBLDJCQUFBO0FBQUEsTUFBQUMsT0FBQUMsa0JBQVMsV0FBT0MsWUFBMEM7QUFDL0QsVUFBTTtNQUFDdkI7TUFBWUs7TUFBTUg7TUFBU1AsWUFBQTZCO0lBQVUsSUFBSUQ7QUFFaEQsVUFBTWQsSUFBSVcsT0FDVEksYUFDQTtNQUNDdEI7SUFDRCxHQUNBRyxJQUNEO0FBRUFRLFlBQVFiLFVBQVU7RUFDbkIsQ0FBQTtBQUFBLFNBQUEsU0FaTW9CLFFBQUFLLElBQUE7QUFBQSxXQUFBSixLQUFBSyxNQUFBLE1BQUFDLFNBQUE7RUFBQTtBQUFBLEVBQUE7O0FDQU4sSUFBTUMsT0FBQSwyQkFBQTtBQUFBLE1BQUFDLFFBQUFQLGtCQUFPLFdBQU9DLFlBQTBDO0FBQzdELFVBQU07TUFBQ3ZCO01BQVlLO01BQU1IO01BQVNQLFlBQUE2QjtJQUFVLElBQUlEO0FBRWhELFVBQU1kLElBQUltQixLQUFLSixhQUFZLE1BQU07QUFDaEMsYUFBTztRQUNObkI7UUFDQUg7UUFDQTRCLE9BQU87TUFDUjtJQUNELENBQUM7QUFFRGpCLFlBQVFiLFVBQVU7RUFDbkIsQ0FBQTtBQUFBLFNBQUEsU0FaTTRCLE1BQUFHLEtBQUE7QUFBQSxXQUFBRixNQUFBSCxNQUFBLE1BQUFDLFNBQUE7RUFBQTtBQUFBLEVBQUE7O0FDSE4sSUFBQUsscUJBQXVCckQsUUFBQSxxQkFBQTtBQUV2QixJQUFNc0QsWUFBYUMsV0FBeUI7QUFDM0NDLFVBQVFELE1BQU0seUJBQXlCQSxLQUFLO0FBQzVDLEdBQUEsR0FBQUYsbUJBQUFsQixVQUNDO0lBQ0NULE1BQU1iLFdBQVcsZUFBZTtJQUNoQzRDLE9BQU87SUFDUHJCLFVBQVU7RUFDWCxHQUNBLE9BQ0Q7QUFDRDs7QUNSQSxJQUFNc0IsV0FBQSwyQkFBQTtBQUFBLE1BQUFDLFFBQUFoQixrQkFBVyxhQUEyQjtBQUMzQyxVQUFNQyxhQUF5QnhCLG1CQUFtQjtBQUVsRCxRQUFJO0FBQ0gsWUFBTTZCLEtBQUtMLFVBQVU7SUFDdEIsUUFBUTtBQUNQLFVBQUk7QUFDSCxjQUFNSCxPQUFPRyxVQUFVO01BQ3hCLFNBQVNXLE9BQU87QUFDZkQsa0JBQVVDLEtBQUs7TUFDaEI7SUFDRDtFQUNELENBQUE7QUFBQSxTQUFBLFNBWk1HLFlBQUE7QUFBQSxXQUFBQyxNQUFBWixNQUFBLE1BQUFDLFNBQUE7RUFBQTtBQUFBLEVBQUE7O0FDSE4sSUFBQVkscUJBQW1DNUQsUUFBQSxpQkFBQTtBQUVuQyxJQUFNNkQsY0FBZUMsY0FBMkI7QUFDL0MsUUFBTUMsZ0JBQUEsMkJBQUE7QUFBQSxRQUFBQyxRQUFBckIsa0JBQWdCLFdBQU9zQixPQUE0QztBQUN4RUEsWUFBTUMsZUFBZTtBQUVyQixZQUFNQyxZQUFBLE9BQXFCLEdBQU1QLG1CQUFBUSxzQkFBcUJ2RCxXQUFXLFNBQVMsQ0FBQztBQUMzRSxVQUFJLENBQUNzRCxXQUFXO0FBQ2Y7TUFDRDtBQUVBLFdBQUtULFNBQVM7SUFDZixDQUFBO0FBQUEsV0FBQSxTQVRNSyxlQUFBTSxLQUFBO0FBQUEsYUFBQUwsTUFBQWpCLE1BQUEsTUFBQUMsU0FBQTtJQUFBO0VBQUEsRUFBQTtBQVdOYyxXQUFTUSxHQUFHLFNBQVVMLFdBQWdCO0FBQ3JDLFNBQUtGLGNBQWNFLEtBQUs7RUFDekIsQ0FBQztBQUNGOztBQ2hCQSxJQUFNTSxpQkFBa0JDLFdBQXlDO0FBQ2hFLFFBQU1DLFlBQW1DRCxNQUFNRSxLQUFLLGFBQWEsRUFBRUMsU0FBUyxlQUFlO0FBQzNGLFFBQU1DLFVBQWdDM0QsR0FBR3FCLEtBQUtpQyxlQUFlRSxXQUFXLEtBQUs1RCxXQUFXLEtBQUssR0FBRyxXQUFXO0FBQzNHLE1BQUksQ0FBQytELFNBQVM7QUFDYjtFQUNEO0FBRUEsUUFBTWQsV0FBbUJlLEVBQUVELE9BQU87QUFDbEMsTUFBSUUsVUFBa0JoQixTQUFTWSxLQUFLLEdBQUc7QUFDdkMsTUFBSSxDQUFDSSxRQUFRSCxRQUFRO0FBQ3BCRyxjQUFVaEI7RUFDWDtBQUVBRCxjQUFZaUIsT0FBTztBQUNwQjs7QUNoQkEsSUFBQUMscUJBQXNCL0UsUUFBQSxpQkFBQTtBQUV0QixJQUFNO0VBQUNlLG1CQUFBaUU7QUFBaUIsSUFBSS9ELEdBQUdDLE9BQU9DLElBQUk7QUFFMUMsSUFBSTZELHNCQUFxQixLQUFLQSx1QkFBc0IsSUFBSTtBQUN2RCxRQUFBLEdBQUtELG1CQUFBRSxTQUFRLEVBQUVDLEtBQUtYLGNBQWM7QUFDbkM7IiwKICAibmFtZXMiOiBbImltcG9ydF9leHRfZ2FkZ2V0IiwgInJlcXVpcmUiLCAiZ2V0STE4bk1lc3NhZ2VzIiwgIkJhbiIsICJsb2NhbGl6ZSIsICJlbiIsICJqYSIsICJDb25maXJtIiwgIlJlZnJlc2hpbmciLCAiSW1hZ2UiLCAiUGFnZSIsICJUZW1wbGF0ZSIsICJ6aCIsICJpMThuTWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAid2dOYW1lc3BhY2VOdW1iZXIiLCAid2dQYWdlTmFtZSIsICJtdyIsICJjb25maWciLCAiZ2V0IiwgImdlbmVyYXRlRWRpdFBhcmFtcyIsICJ0YXJnZXRQYWdlIiwgInJlZGlyZWN0VGVtcGxhdGUiLCAic3VtbWFyeSIsICJzdGFydHNXaXRoIiwgInJlcGxhY2UiLCAidGV4dCIsICJjb25jYXQiLCAidmVyc2lvbiIsICJpbXBvcnRfZXh0X2dhZGdldDIiLCAiYXBpIiwgImluaXRNd0FwaSIsICJpbXBvcnRfZXh0X2dhZGdldDMiLCAid2dTY3JpcHQiLCAicmVmcmVzaCIsICJ0b2FzdGlmeSIsICJkdXJhdGlvbiIsICJsb2NhdGlvbiIsICJ1dGlsIiwgImdldFVybCIsICJ0aXRsZSIsICJjcmVhdGUiLCAiX3JlZiIsICJfYXN5bmNUb0dlbmVyYXRvciIsICJlZGl0UGFyYW1zIiwgIndnUGFnZU5hbWUyIiwgIl94IiwgImFwcGx5IiwgImFyZ3VtZW50cyIsICJlZGl0IiwgIl9yZWYyIiwgIm1pbm9yIiwgIl94MiIsICJpbXBvcnRfZXh0X2dhZGdldDQiLCAic2hvd0Vycm9yIiwgImVycm9yIiwgImNvbnNvbGUiLCAiY2xvc2UiLCAiZWRpdFBhZ2UiLCAiX3JlZjMiLCAiaW1wb3J0X2V4dF9nYWRnZXQ1IiwgImFkZExpc3RlbmVyIiwgIiRlbGVtZW50IiwgImNsaWNrTGlzdGVuZXIiLCAiX3JlZjQiLCAiZXZlbnQiLCAicHJldmVudERlZmF1bHQiLCAiaXNDb25maXJtIiwgIm9vdWlDb25maXJtV2l0aFN0eWxlIiwgIl94MyIsICJvbiIsICJhZGRQb3J0bGV0TGluayIsICIkYm9keSIsICJwb3J0bGV0SWQiLCAiZmluZCIsICJsZW5ndGgiLCAiZWxlbWVudCIsICIkIiwgIiR0YXJnZXQiLCAiaW1wb3J0X2V4dF9nYWRnZXQ2IiwgIndnTmFtZXNwYWNlTnVtYmVyMiIsICJnZXRCb2R5IiwgInRoZW4iXQp9Cg==

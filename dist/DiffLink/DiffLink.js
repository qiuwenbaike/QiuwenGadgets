/**
 * SPDX-License-Identifier: GPL-3.0-or-later
 * _addText: '{{Gadget Header|license=GPL-3.0-or-later}}'
 *
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/DiffLink}
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

// dist/DiffLink/DiffLink.js
//! src/DiffLink/modules/util/checkDiffPage.ts
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
var checkDiffPage = ($content) => {
  return $content.find("table").hasClass("diff") && !!mw.config.get("wgCurRevisionId");
};
//! src/DiffLink/modules/util/checkRevisionPage.ts
var checkRevisionPage = ($content) => {
  return ($content.find("#contentSub #mw-revision-nav").length || $content.find("main#content>.pre-content #mw-revision-nav").length) > 0;
};
//! src/DiffLink/modules/addPortletLink.ts
var import_ext_gadget2 = require("ext.gadget.Util");
//! src/DiffLink/modules/i18n.ts
var import_ext_gadget = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    "Network error": (0, import_ext_gadget.localize)({
      ja: "ネットワークエラー",
      "zh-hans": "网络异常",
      "zh-hant": "網路異常"
    }),
    CopyDiff: (0, import_ext_gadget.localize)({
      en: "Copy the link to the diff version (wiki syntax)",
      ja: "現在の版間の差分リンクをコピーします（ウィキ記法）",
      "zh-hans": "复制链接到当前差异版本的维基语法",
      "zh-hant": "複製連結到當前差異版本的維基語法"
    }),
    CopyPermanent: (0, import_ext_gadget.localize)({
      en: "Copy the permanent link to the current version (wiki syntax)",
      ja: "このページのこの版への固定リンクをコピーします（ウィキ記法）",
      "zh-hans": "复制链接到当前修订版本的维基语法",
      "zh-hant": "複製連結到當前修訂版本的維基語法"
    }),
    Diff: (0, import_ext_gadget.localize)({
      en: "Diff link",
      ja: "現在の版間の差分リンク",
      "zh-hans": "当前差异链接",
      "zh-hant": "當前差異連結"
    }),
    DiffVersion: (0, import_ext_gadget.localize)({
      en: "diff version",
      ja: "版間の差分",
      "zh-hans": "差异版本",
      "zh-hant": "差異版本"
    }),
    Permanent: (0, import_ext_gadget.localize)({
      en: "Permanent link",
      ja: "この版への固定リンク",
      "zh-hans": "当前修订链接",
      "zh-hant": "當前修訂連結"
    }),
    PermanentVersion: (0, import_ext_gadget.localize)({
      en: "permanent version",
      ja: "版への固定リンク",
      "zh-hans": "固定版本链接",
      "zh-hant": "固定版本連結"
    })
  };
};
var i18nMessages = getI18nMessages();
var getMessage = (key) => {
  return i18nMessages[key] || key;
};
//! src/DiffLink/modules/addPortletLink.ts
/*!
 * 若想自定义复制结果中的文本可通过向自己的common.js中加入以下内容：
 *   window.DiffLink = ['版本差异', '固定版本'];
 * 若想使用默认值1，但自定值2，请将值1留空，如下例：
 *   window.DiffLink = ['', '固定版本'];
 */
var defaultTextArray = [getMessage("DiffVersion"), getMessage("PermanentVersion")];
if (window.DiffLink && Object.prototype.toString.call(window.DiffLink) === "[object Array]") {
  const textArray = window.DiffLink;
  if (textArray[0] && Object.prototype.toString.call(textArray[0]) === "[object String]") {
    [defaultTextArray[0]] = textArray;
  }
  if (textArray[1] && Object.prototype.toString.call(textArray[1]) === "[object String]") {
    [defaultTextArray[1]] = textArray;
  }
}
var eventListener = {
  remove: () => {
  }
};
var addPortletLink = ({
  text,
  tooltip,
  link,
  defaultTextArrayIndex,
  isPermaLink
}) => {
  var _element$firstElement;
  let element = document.querySelector("#t-difflink");
  if (!element) {
    const portletId = document.querySelector("#p-cactions") ? "p-cactions" : "p-tb";
    element = mw.util.addPortletLink(portletId, "#", text, "t-difflink", tooltip);
  }
  if (!element) {
    return;
  }
  const clickListener = (event) => {
    event.preventDefault();
    const $element = $("<div>");
    const hash = isPermaLink ? decodeURIComponent(location.hash) : "";
    for (var _i = 0, _arr = [link, "[[".concat(link).concat(hash, "]]"), "[[".concat(link).concat(hash, "|").concat(defaultTextArray[defaultTextArrayIndex], "]]")]; _i < _arr.length; _i++) {
      const value = _arr[_i];
      $element.append(
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call
        new mw.widgets.CopyTextLayout({
          align: "top",
          copyText: value
        }).$element
      );
    }
    void OO.ui.alert($element, {
      size: "medium"
    });
  };
  eventListener.remove();
  eventListener = (0, import_ext_gadget2.addEventListenerWithRemover)({
    target: (_element$firstElement = element.firstElementChild) !== null && _element$firstElement !== void 0 ? _element$firstElement : element,
    type: "click",
    listener: clickListener
  });
};
//! src/DiffLink/modules/buildLink.ts
var buildLink = (oldId, diffId) => {
  let link = "Special:Diff/";
  if (oldId) {
    link += "".concat(oldId, "/");
  }
  link += diffId;
  addPortletLink({
    link,
    text: getMessage("Diff"),
    tooltip: getMessage("CopyDiff"),
    defaultTextArrayIndex: 0
  });
};
//! src/DiffLink/options.json
var version = "2.0";
//! src/DiffLink/modules/api.ts
var import_ext_gadget3 = require("ext.gadget.Util");
var api = (0, import_ext_gadget3.initMwApi)("DiffLink/".concat(version));
//! src/DiffLink/modules/util/queryApi.ts
var import_ext_gadget4 = require("ext.gadget.Toastify");
var parameters = {
  action: "compare",
  format: "json",
  formatversion: "2",
  prop: "ids",
  torelative: "prev"
};
var queryApi = /* @__PURE__ */ function() {
  var _ref = _asyncToGenerator(function* (diffId) {
    try {
      return yield api.get({
        ...parameters,
        fromrev: diffId
      });
    } catch (error) {
      console.error("[DiffLink] Ajax error:", error);
      (0, import_ext_gadget4.toastify)({
        text: getMessage("Network error"),
        close: true,
        duration: -1
      }, "error");
      return {};
    }
  });
  return function queryApi2(_x) {
    return _ref.apply(this, arguments);
  };
}();
//! src/DiffLink/modules/compareWithRemoteDiffId.ts
var compareWithRemoteDiffId = /* @__PURE__ */ function() {
  var _ref2 = _asyncToGenerator(function* (diffId) {
    var _response$compare;
    const response = yield queryApi(diffId);
    if (diffId === mw.config.get("wgDiffNewId") && ((_response$compare = response["compare"]) === null || _response$compare === void 0 ? void 0 : _response$compare.fromrevid) === mw.config.get("wgDiffOldId")) {
      buildLink(0, diffId);
    }
  });
  return function compareWithRemoteDiffId2(_x2) {
    return _ref2.apply(this, arguments);
  };
}();
//! src/DiffLink/modules/processId.ts
var processId = (isRevisionPage, {
  diffId,
  oldId,
  revisionId
}) => {
  if (diffId) {
    buildLink(oldId, diffId);
    if (oldId) {
      void compareWithRemoteDiffId(diffId);
    }
  } else if (revisionId && isRevisionPage) {
    addPortletLink({
      text: getMessage("Permanent"),
      tooltip: getMessage("CopyPermanent"),
      link: "Special:PermaLink/".concat(revisionId),
      defaultTextArrayIndex: 1,
      isPermaLink: true
    });
  }
};
//! src/DiffLink/DiffLink.ts
mw.hook("wikipage.content").add(($content) => {
  if ($content.attr("id") !== "mw-content-text") {
    return;
  }
  const isDiffPage = checkDiffPage($content);
  const isRevisionPage = checkRevisionPage($content);
  if (!isDiffPage && !isRevisionPage) {
    return;
  }
  processId(isRevisionPage, {
    diffId: mw.config.get("wgDiffNewId"),
    oldId: mw.config.get("wgDiffOldId"),
    revisionId: mw.config.get("wgRevisionId")
  });
});

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0RpZmZMaW5rL21vZHVsZXMvdXRpbC9jaGVja0RpZmZQYWdlLnRzIiwgInNyYy9EaWZmTGluay9tb2R1bGVzL3V0aWwvY2hlY2tSZXZpc2lvblBhZ2UudHMiLCAic3JjL0RpZmZMaW5rL21vZHVsZXMvYWRkUG9ydGxldExpbmsudHMiLCAic3JjL0RpZmZMaW5rL21vZHVsZXMvaTE4bi50cyIsICJzcmMvRGlmZkxpbmsvbW9kdWxlcy9idWlsZExpbmsudHMiLCAic3JjL0RpZmZMaW5rL29wdGlvbnMuanNvbiIsICJzcmMvRGlmZkxpbmsvbW9kdWxlcy9hcGkudHMiLCAic3JjL0RpZmZMaW5rL21vZHVsZXMvdXRpbC9xdWVyeUFwaS50cyIsICJzcmMvRGlmZkxpbmsvbW9kdWxlcy9jb21wYXJlV2l0aFJlbW90ZURpZmZJZC50cyIsICJzcmMvRGlmZkxpbmsvbW9kdWxlcy9wcm9jZXNzSWQudHMiLCAic3JjL0RpZmZMaW5rL0RpZmZMaW5rLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBjaGVja0RpZmZQYWdlID0gKCRjb250ZW50OiBKUXVlcnkpOiBib29sZWFuID0+IHtcblx0cmV0dXJuICRjb250ZW50LmZpbmQoJ3RhYmxlJykuaGFzQ2xhc3MoJ2RpZmYnKSAmJiAhIW13LmNvbmZpZy5nZXQoJ3dnQ3VyUmV2aXNpb25JZCcpO1xufTtcblxuZXhwb3J0IHtjaGVja0RpZmZQYWdlfTtcbiIsICJjb25zdCBjaGVja1JldmlzaW9uUGFnZSA9ICgkY29udGVudDogSlF1ZXJ5KTogYm9vbGVhbiA9PiB7XG5cdHJldHVybiAoXG5cdFx0KCRjb250ZW50LmZpbmQoJyNjb250ZW50U3ViICNtdy1yZXZpc2lvbi1uYXYnKS5sZW5ndGggfHxcblx0XHRcdCRjb250ZW50LmZpbmQoJ21haW4jY29udGVudD4ucHJlLWNvbnRlbnQgI213LXJldmlzaW9uLW5hdicpLmxlbmd0aCkgPiAwXG5cdCk7XG59O1xuXG5leHBvcnQge2NoZWNrUmV2aXNpb25QYWdlfTtcbiIsICJpbXBvcnQge2FkZEV2ZW50TGlzdGVuZXJXaXRoUmVtb3Zlcn0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9pMThuJztcblxuLyohXG4gKiDoi6Xmg7Poh6rlrprkuYnlpI3liLbnu5PmnpzkuK3nmoTmlofmnKzlj6/pgJrov4flkJHoh6rlt7HnmoRjb21tb24uanPkuK3liqDlhaXku6XkuIvlhoXlrrnvvJpcbiAqICAgd2luZG93LkRpZmZMaW5rID0gWyfniYjmnKzlt67lvIInLCAn5Zu65a6a54mI5pysJ107XG4gKiDoi6Xmg7Pkvb/nlKjpu5jorqTlgLwx77yM5L2G6Ieq5a6a5YC8Mu+8jOivt+WwhuWAvDHnlZnnqbrvvIzlpoLkuIvkvovvvJpcbiAqICAgd2luZG93LkRpZmZMaW5rID0gWycnLCAn5Zu65a6a54mI5pysJ107XG4gKi9cbmNvbnN0IGRlZmF1bHRUZXh0QXJyYXk6IFtzdHJpbmcsIHN0cmluZ10gPSBbZ2V0TWVzc2FnZSgnRGlmZlZlcnNpb24nKSwgZ2V0TWVzc2FnZSgnUGVybWFuZW50VmVyc2lvbicpXTtcbmlmICh3aW5kb3cuRGlmZkxpbmsgJiYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHdpbmRvdy5EaWZmTGluaykgPT09ICdbb2JqZWN0IEFycmF5XScpIHtcblx0Y29uc3QgdGV4dEFycmF5ID0gd2luZG93LkRpZmZMaW5rIGFzIHVua25vd25bXTtcblx0aWYgKHRleHRBcnJheVswXSAmJiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodGV4dEFycmF5WzBdKSA9PT0gJ1tvYmplY3QgU3RyaW5nXScpIHtcblx0XHRbZGVmYXVsdFRleHRBcnJheVswXV0gPSB0ZXh0QXJyYXkgYXMgW3N0cmluZ107XG5cdH1cblx0aWYgKHRleHRBcnJheVsxXSAmJiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodGV4dEFycmF5WzFdKSA9PT0gJ1tvYmplY3QgU3RyaW5nXScpIHtcblx0XHRbZGVmYXVsdFRleHRBcnJheVsxXV0gPSB0ZXh0QXJyYXkgYXMgW3N0cmluZywgc3RyaW5nXTtcblx0fVxufVxuXG5sZXQgZXZlbnRMaXN0ZW5lcjogUmV0dXJuVHlwZTx0eXBlb2YgYWRkRXZlbnRMaXN0ZW5lcldpdGhSZW1vdmVyPiA9IHtcblx0cmVtb3ZlOiAoKTogdm9pZCA9PiB7fSxcbn07XG5cbmNvbnN0IGFkZFBvcnRsZXRMaW5rID0gKHtcblx0dGV4dCxcblx0dG9vbHRpcCxcblx0bGluayxcblx0ZGVmYXVsdFRleHRBcnJheUluZGV4LFxuXHRpc1Blcm1hTGluayxcbn06IHtcblx0dGV4dDogc3RyaW5nO1xuXHR0b29sdGlwOiBzdHJpbmc7XG5cdGxpbms6IHN0cmluZztcblx0ZGVmYXVsdFRleHRBcnJheUluZGV4OiBudW1iZXI7XG5cdGlzUGVybWFMaW5rPzogYm9vbGVhbjtcbn0pOiB2b2lkID0+IHtcblx0bGV0IGVsZW1lbnQ6IEhUTUxMSUVsZW1lbnQgfCBudWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3QtZGlmZmxpbmsnKTtcblx0aWYgKCFlbGVtZW50KSB7XG5cdFx0Y29uc3QgcG9ydGxldElkOiAncC1jYWN0aW9ucycgfCAncC10YicgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcC1jYWN0aW9ucycpID8gJ3AtY2FjdGlvbnMnIDogJ3AtdGInO1xuXHRcdGVsZW1lbnQgPSBtdy51dGlsLmFkZFBvcnRsZXRMaW5rKHBvcnRsZXRJZCwgJyMnLCB0ZXh0LCAndC1kaWZmbGluaycsIHRvb2x0aXApO1xuXHR9XG5cdGlmICghZWxlbWVudCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IGNsaWNrTGlzdGVuZXIgPSAoZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkID0+IHtcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdGNvbnN0ICRlbGVtZW50OiBKUXVlcnkgPSAkKCc8ZGl2PicpO1xuXHRcdGNvbnN0IGhhc2g6IHN0cmluZyA9IGlzUGVybWFMaW5rID8gZGVjb2RlVVJJQ29tcG9uZW50KGxvY2F0aW9uLmhhc2gpIDogJyc7XG5cdFx0Zm9yIChjb25zdCB2YWx1ZSBvZiBbXG5cdFx0XHRsaW5rLFxuXHRcdFx0YFtbJHtsaW5rfSR7aGFzaH1dXWAsXG5cdFx0XHRgW1ske2xpbmt9JHtoYXNofXwke2RlZmF1bHRUZXh0QXJyYXlbZGVmYXVsdFRleHRBcnJheUluZGV4XX1dXWAsXG5cdFx0XSkge1xuXHRcdFx0JGVsZW1lbnQuYXBwZW5kKFxuXHRcdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVuc2FmZS1jYWxsXG5cdFx0XHRcdG5ldyBtdy53aWRnZXRzLkNvcHlUZXh0TGF5b3V0KHtcblx0XHRcdFx0XHRhbGlnbjogJ3RvcCcsXG5cdFx0XHRcdFx0Y29weVRleHQ6IHZhbHVlLFxuXHRcdFx0XHR9KS4kZWxlbWVudCBhcyBKUXVlcnlcblx0XHRcdCk7XG5cdFx0fVxuXHRcdHZvaWQgT08udWkuYWxlcnQoJGVsZW1lbnQsIHtcblx0XHRcdHNpemU6ICdtZWRpdW0nLFxuXHRcdH0pO1xuXHR9O1xuXG5cdGV2ZW50TGlzdGVuZXIucmVtb3ZlKCk7XG5cdGV2ZW50TGlzdGVuZXIgPSBhZGRFdmVudExpc3RlbmVyV2l0aFJlbW92ZXIoe1xuXHRcdHRhcmdldDogKGVsZW1lbnQuZmlyc3RFbGVtZW50Q2hpbGQgPz8gZWxlbWVudCkgYXMgSFRNTEVsZW1lbnQsXG5cdFx0dHlwZTogJ2NsaWNrJyxcblx0XHRsaXN0ZW5lcjogY2xpY2tMaXN0ZW5lcixcblx0fSk7XG59O1xuXG5leHBvcnQge2FkZFBvcnRsZXRMaW5rfTtcbiIsICJpbXBvcnQge2xvY2FsaXplfSBmcm9tICdleHQuZ2FkZ2V0LmkxOG4nO1xuXG5jb25zdCBnZXRJMThuTWVzc2FnZXMgPSAoKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0J05ldHdvcmsgZXJyb3InOiBsb2NhbGl6ZSh7XG5cdFx0XHRqYTogJ+ODjeODg+ODiOODr+ODvOOCr+OCqOODqeODvCcsXG5cdFx0XHQnemgtaGFucyc6ICfnvZHnu5zlvILluLgnLFxuXHRcdFx0J3poLWhhbnQnOiAn57ay6Lev55Ww5bi4Jyxcblx0XHR9KSxcblx0XHRDb3B5RGlmZjogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdDb3B5IHRoZSBsaW5rIHRvIHRoZSBkaWZmIHZlcnNpb24gKHdpa2kgc3ludGF4KScsXG5cdFx0XHRqYTogJ+ePvuWcqOOBrueJiOmWk+OBruW3ruWIhuODquODs+OCr+OCkuOCs+ODlOODvOOBl+OBvuOBme+8iOOCpuOCo+OCreiomOazle+8iScsXG5cdFx0XHQnemgtaGFucyc6ICflpI3liLbpk77mjqXliLDlvZPliY3lt67lvILniYjmnKznmoTnu7Tln7ror63ms5UnLFxuXHRcdFx0J3poLWhhbnQnOiAn6KSH6KO96YCj57WQ5Yiw55W25YmN5beu55Ww54mI5pys55qE57at5Z+66Kqe5rOVJyxcblx0XHR9KSxcblx0XHRDb3B5UGVybWFuZW50OiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0NvcHkgdGhlIHBlcm1hbmVudCBsaW5rIHRvIHRoZSBjdXJyZW50IHZlcnNpb24gKHdpa2kgc3ludGF4KScsXG5cdFx0XHRqYTogJ+OBk+OBruODmuODvOOCuOOBruOBk+OBrueJiOOBuOOBruWbuuWumuODquODs+OCr+OCkuOCs+ODlOODvOOBl+OBvuOBme+8iOOCpuOCo+OCreiomOazle+8iScsXG5cdFx0XHQnemgtaGFucyc6ICflpI3liLbpk77mjqXliLDlvZPliY3kv67orqLniYjmnKznmoTnu7Tln7ror63ms5UnLFxuXHRcdFx0J3poLWhhbnQnOiAn6KSH6KO96YCj57WQ5Yiw55W25YmN5L+u6KiC54mI5pys55qE57at5Z+66Kqe5rOVJyxcblx0XHR9KSxcblx0XHREaWZmOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0RpZmYgbGluaycsXG5cdFx0XHRqYTogJ+ePvuWcqOOBrueJiOmWk+OBruW3ruWIhuODquODs+OCrycsXG5cdFx0XHQnemgtaGFucyc6ICflvZPliY3lt67lvILpk77mjqUnLFxuXHRcdFx0J3poLWhhbnQnOiAn55W25YmN5beu55Ww6YCj57WQJyxcblx0XHR9KSxcblx0XHREaWZmVmVyc2lvbjogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdkaWZmIHZlcnNpb24nLFxuXHRcdFx0amE6ICfniYjplpPjga7lt67liIYnLFxuXHRcdFx0J3poLWhhbnMnOiAn5beu5byC54mI5pysJyxcblx0XHRcdCd6aC1oYW50JzogJ+W3rueVsOeJiOacrCcsXG5cdFx0fSksXG5cdFx0UGVybWFuZW50OiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1Blcm1hbmVudCBsaW5rJyxcblx0XHRcdGphOiAn44GT44Gu54mI44G444Gu5Zu65a6a44Oq44Oz44KvJyxcblx0XHRcdCd6aC1oYW5zJzogJ+W9k+WJjeS/ruiuoumTvuaOpScsXG5cdFx0XHQnemgtaGFudCc6ICfnlbbliY3kv67oqILpgKPntZAnLFxuXHRcdH0pLFxuXHRcdFBlcm1hbmVudFZlcnNpb246IGxvY2FsaXplKHtcblx0XHRcdGVuOiAncGVybWFuZW50IHZlcnNpb24nLFxuXHRcdFx0amE6ICfniYjjgbjjga7lm7rlrprjg6rjg7Pjgq8nLFxuXHRcdFx0J3poLWhhbnMnOiAn5Zu65a6a54mI5pys6ZO+5o6lJyxcblx0XHRcdCd6aC1oYW50JzogJ+WbuuWumueJiOacrOmAo+e1kCcsXG5cdFx0fSksXG5cdH07XG59O1xuXG5jb25zdCBpMThuTWVzc2FnZXMgPSBnZXRJMThuTWVzc2FnZXMoKTtcblxuY29uc3QgZ2V0TWVzc2FnZTogR2V0TWVzc2FnZXM8dHlwZW9mIGkxOG5NZXNzYWdlcz4gPSAoa2V5KSA9PiB7XG5cdHJldHVybiBpMThuTWVzc2FnZXNba2V5XSB8fCBrZXk7XG59O1xuXG5leHBvcnQge2dldE1lc3NhZ2V9O1xuIiwgImltcG9ydCB7YWRkUG9ydGxldExpbmt9IGZyb20gJy4vYWRkUG9ydGxldExpbmsnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL2kxOG4nO1xuXG5jb25zdCBidWlsZExpbmsgPSAob2xkSWQ6IG51bWJlciB8IG51bGwsIGRpZmZJZDogbnVtYmVyKTogdm9pZCA9PiB7XG5cdGxldCBsaW5rOiBzdHJpbmcgPSAnU3BlY2lhbDpEaWZmLyc7XG5cdGlmIChvbGRJZCkge1xuXHRcdGxpbmsgKz0gYCR7b2xkSWR9L2A7XG5cdH1cblx0bGluayArPSBkaWZmSWQ7XG5cblx0YWRkUG9ydGxldExpbmsoe1xuXHRcdGxpbmssXG5cdFx0dGV4dDogZ2V0TWVzc2FnZSgnRGlmZicpLFxuXHRcdHRvb2x0aXA6IGdldE1lc3NhZ2UoJ0NvcHlEaWZmJyksXG5cdFx0ZGVmYXVsdFRleHRBcnJheUluZGV4OiAwLFxuXHR9KTtcbn07XG5cbmV4cG9ydCB7YnVpbGRMaW5rfTtcbiIsICJ7XG5cdFwidmVyc2lvblwiOiBcIjIuMFwiXG59XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtpbml0TXdBcGl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmNvbnN0IGFwaTogbXcuQXBpID0gaW5pdE13QXBpKGBEaWZmTGluay8ke09QVElPTlMudmVyc2lvbn1gKTtcblxuZXhwb3J0IHthcGl9O1xuIiwgImltcG9ydCB7YXBpfSBmcm9tICcuLi9hcGknO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuLi9pMThuJztcbmltcG9ydCB7dG9hc3RpZnl9IGZyb20gJ2V4dC5nYWRnZXQuVG9hc3RpZnknO1xuXG50eXBlIENvbXBhcmVSZXNwb25zZSA9IHtcblx0Y29tcGFyZT86IHtcblx0XHRmcm9tcmV2aWQ6IG51bWJlcjtcblx0fTtcbn07XG5cbmNvbnN0IHBhcmFtZXRlcnM6IEFwaUNvbXBhcmVQYWdlc1BhcmFtcyA9IHtcblx0YWN0aW9uOiAnY29tcGFyZScsXG5cdGZvcm1hdDogJ2pzb24nLFxuXHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdHByb3A6ICdpZHMnLFxuXHR0b3JlbGF0aXZlOiAncHJldicsXG59O1xuXG5jb25zdCBxdWVyeUFwaSA9IGFzeW5jIChkaWZmSWQ6IG51bWJlcik6IFByb21pc2U8Q29tcGFyZVJlc3BvbnNlPiA9PiB7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIGF3YWl0IGFwaS5nZXQoe1xuXHRcdFx0Li4ucGFyYW1ldGVycyxcblx0XHRcdGZyb21yZXY6IGRpZmZJZCxcblx0XHR9KTtcblx0fSBjYXRjaCAoZXJyb3I6IHVua25vd24pIHtcblx0XHRjb25zb2xlLmVycm9yKCdbRGlmZkxpbmtdIEFqYXggZXJyb3I6JywgZXJyb3IpO1xuXHRcdHRvYXN0aWZ5KFxuXHRcdFx0e1xuXHRcdFx0XHR0ZXh0OiBnZXRNZXNzYWdlKCdOZXR3b3JrIGVycm9yJyksXG5cdFx0XHRcdGNsb3NlOiB0cnVlLFxuXHRcdFx0XHRkdXJhdGlvbjogLTEsXG5cdFx0XHR9LFxuXHRcdFx0J2Vycm9yJ1xuXHRcdCk7XG5cblx0XHRyZXR1cm4ge307XG5cdH1cbn07XG5cbmV4cG9ydCB7cXVlcnlBcGl9O1xuIiwgImltcG9ydCB7YnVpbGRMaW5rfSBmcm9tICcuL2J1aWxkTGluayc7XG5pbXBvcnQge3F1ZXJ5QXBpfSBmcm9tICcuL3V0aWwvcXVlcnlBcGknO1xuXG5jb25zdCBjb21wYXJlV2l0aFJlbW90ZURpZmZJZCA9IGFzeW5jIChkaWZmSWQ6IG51bWJlcik6IFByb21pc2U8dm9pZD4gPT4ge1xuXHRjb25zdCByZXNwb25zZTogQXdhaXRlZDxSZXR1cm5UeXBlPHR5cGVvZiBxdWVyeUFwaT4+ID0gYXdhaXQgcXVlcnlBcGkoZGlmZklkKTtcblx0aWYgKGRpZmZJZCA9PT0gbXcuY29uZmlnLmdldCgnd2dEaWZmTmV3SWQnKSAmJiByZXNwb25zZVsnY29tcGFyZSddPy5mcm9tcmV2aWQgPT09IG13LmNvbmZpZy5nZXQoJ3dnRGlmZk9sZElkJykpIHtcblx0XHRidWlsZExpbmsoMCwgZGlmZklkKTtcblx0fVxufTtcblxuZXhwb3J0IHtjb21wYXJlV2l0aFJlbW90ZURpZmZJZH07XG4iLCAiaW1wb3J0IHthZGRQb3J0bGV0TGlua30gZnJvbSAnLi9hZGRQb3J0bGV0TGluayc7XG5pbXBvcnQge2J1aWxkTGlua30gZnJvbSAnLi9idWlsZExpbmsnO1xuaW1wb3J0IHtjb21wYXJlV2l0aFJlbW90ZURpZmZJZH0gZnJvbSAnLi9jb21wYXJlV2l0aFJlbW90ZURpZmZJZCc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vaTE4bic7XG5cbmNvbnN0IHByb2Nlc3NJZCA9IChcblx0aXNSZXZpc2lvblBhZ2U6IGJvb2xlYW4sXG5cdHtkaWZmSWQsIG9sZElkLCByZXZpc2lvbklkfToge2RpZmZJZDogbnVtYmVyIHwgbnVsbDsgb2xkSWQ6IG51bWJlciB8IG51bGw7IHJldmlzaW9uSWQ6IG51bWJlciB8IG51bGx9XG4pOiB2b2lkID0+IHtcblx0aWYgKGRpZmZJZCkge1xuXHRcdGJ1aWxkTGluayhvbGRJZCwgZGlmZklkKTtcblx0XHRpZiAob2xkSWQpIHtcblx0XHRcdHZvaWQgY29tcGFyZVdpdGhSZW1vdGVEaWZmSWQoZGlmZklkKTtcblx0XHR9XG5cdH0gZWxzZSBpZiAocmV2aXNpb25JZCAmJiBpc1JldmlzaW9uUGFnZSkge1xuXHRcdGFkZFBvcnRsZXRMaW5rKHtcblx0XHRcdHRleHQ6IGdldE1lc3NhZ2UoJ1Blcm1hbmVudCcpLFxuXHRcdFx0dG9vbHRpcDogZ2V0TWVzc2FnZSgnQ29weVBlcm1hbmVudCcpLFxuXHRcdFx0bGluazogYFNwZWNpYWw6UGVybWFMaW5rLyR7cmV2aXNpb25JZH1gLFxuXHRcdFx0ZGVmYXVsdFRleHRBcnJheUluZGV4OiAxLFxuXHRcdFx0aXNQZXJtYUxpbms6IHRydWUsXG5cdFx0fSk7XG5cdH1cbn07XG5cbmV4cG9ydCB7cHJvY2Vzc0lkfTtcbiIsICJpbXBvcnQge2NoZWNrRGlmZlBhZ2V9IGZyb20gJy4vbW9kdWxlcy91dGlsL2NoZWNrRGlmZlBhZ2UnO1xuaW1wb3J0IHtjaGVja1JldmlzaW9uUGFnZX0gZnJvbSAnLi9tb2R1bGVzL3V0aWwvY2hlY2tSZXZpc2lvblBhZ2UnO1xuaW1wb3J0IHtwcm9jZXNzSWR9IGZyb20gJy4vbW9kdWxlcy9wcm9jZXNzSWQnO1xuXG5tdy5ob29rKCd3aWtpcGFnZS5jb250ZW50JykuYWRkKCgkY29udGVudCk6IHZvaWQgPT4ge1xuXHRpZiAoJGNvbnRlbnQuYXR0cignaWQnKSAhPT0gJ213LWNvbnRlbnQtdGV4dCcpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBpc0RpZmZQYWdlOiBib29sZWFuID0gY2hlY2tEaWZmUGFnZSgkY29udGVudCk7XG5cdGNvbnN0IGlzUmV2aXNpb25QYWdlOiBib29sZWFuID0gY2hlY2tSZXZpc2lvblBhZ2UoJGNvbnRlbnQpO1xuXHRpZiAoIWlzRGlmZlBhZ2UgJiYgIWlzUmV2aXNpb25QYWdlKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0cHJvY2Vzc0lkKGlzUmV2aXNpb25QYWdlLCB7XG5cdFx0ZGlmZklkOiBtdy5jb25maWcuZ2V0KCd3Z0RpZmZOZXdJZCcpLFxuXHRcdG9sZElkOiBtdy5jb25maWcuZ2V0KCd3Z0RpZmZPbGRJZCcpLFxuXHRcdHJldmlzaW9uSWQ6IG13LmNvbmZpZy5nZXQoJ3dnUmV2aXNpb25JZCcpLFxuXHR9KTtcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFNQSxnQkFBaUJDLGNBQThCO0FBQ3BELFNBQU9BLFNBQVNDLEtBQUssT0FBTyxFQUFFQyxTQUFTLE1BQU0sS0FBSyxDQUFDLENBQUNDLEdBQUdDLE9BQU9DLElBQUksaUJBQWlCO0FBQ3BGOztBQ0ZBLElBQU1DLG9CQUFxQk4sY0FBOEI7QUFDeEQsVUFDRUEsU0FBU0MsS0FBSyw4QkFBOEIsRUFBRU0sVUFDOUNQLFNBQVNDLEtBQUssNENBQTRDLEVBQUVNLFVBQVU7QUFFekU7O0FDTEEsSUFBQUMscUJBQTBDQyxRQUFBLGlCQUFBOztBQ0ExQyxJQUFBQyxvQkFBdUJELFFBQUEsaUJBQUE7QUFFdkIsSUFBTUUsa0JBQWtCQSxNQUFN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RUMsSUFBSzVHLGNBQW1CO0FBQ25ELE1BQUlBLFNBQVM2RyxLQUFLLElBQUksTUFBTSxtQkFBbUI7QUFDOUM7RUFDRDtBQUVBLFFBQU1DLGFBQXNCL0csY0FBY0MsUUFBUTtBQUNsRCxRQUFNeUcsaUJBQTBCbkcsa0JBQWtCTixRQUFRO0FBQzFELE1BQUksQ0FBQzhHLGNBQWMsQ0FBQ0wsZ0JBQWdCO0FBQ25DO0VBQ0Q7QUFFQUQsWUFBVUMsZ0JBQWdCO0lBQ3pCL0IsUUFBUXZFLEdBQUdDLE9BQU9DLElBQUksYUFBYTtJQUNuQ29FLE9BQU90RSxHQUFHQyxPQUFPQyxJQUFJLGFBQWE7SUFDbENxRyxZQUFZdkcsR0FBR0MsT0FBT0MsSUFBSSxjQUFjO0VBQ3pDLENBQUM7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogWyJjaGVja0RpZmZQYWdlIiwgIiRjb250ZW50IiwgImZpbmQiLCAiaGFzQ2xhc3MiLCAibXciLCAiY29uZmlnIiwgImdldCIsICJjaGVja1JldmlzaW9uUGFnZSIsICJsZW5ndGgiLCAiaW1wb3J0X2V4dF9nYWRnZXQyIiwgInJlcXVpcmUiLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAiZ2V0STE4bk1lc3NhZ2VzIiwgImxvY2FsaXplIiwgImphIiwgIkNvcHlEaWZmIiwgImVuIiwgIkNvcHlQZXJtYW5lbnQiLCAiRGlmZiIsICJEaWZmVmVyc2lvbiIsICJQZXJtYW5lbnQiLCAiUGVybWFuZW50VmVyc2lvbiIsICJpMThuTWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAiZGVmYXVsdFRleHRBcnJheSIsICJ3aW5kb3ciLCAiRGlmZkxpbmsiLCAiT2JqZWN0IiwgInByb3RvdHlwZSIsICJ0b1N0cmluZyIsICJjYWxsIiwgInRleHRBcnJheSIsICJldmVudExpc3RlbmVyIiwgInJlbW92ZSIsICJhZGRQb3J0bGV0TGluayIsICJ0ZXh0IiwgInRvb2x0aXAiLCAibGluayIsICJkZWZhdWx0VGV4dEFycmF5SW5kZXgiLCAiaXNQZXJtYUxpbmsiLCAiX2VsZW1lbnQkZmlyc3RFbGVtZW50IiwgImVsZW1lbnQiLCAiZG9jdW1lbnQiLCAicXVlcnlTZWxlY3RvciIsICJwb3J0bGV0SWQiLCAidXRpbCIsICJjbGlja0xpc3RlbmVyIiwgImV2ZW50IiwgInByZXZlbnREZWZhdWx0IiwgIiRlbGVtZW50IiwgIiQiLCAiaGFzaCIsICJkZWNvZGVVUklDb21wb25lbnQiLCAibG9jYXRpb24iLCAiX2kiLCAiX2FyciIsICJjb25jYXQiLCAidmFsdWUiLCAiYXBwZW5kIiwgIndpZGdldHMiLCAiQ29weVRleHRMYXlvdXQiLCAiYWxpZ24iLCAiY29weVRleHQiLCAiT08iLCAidWkiLCAiYWxlcnQiLCAic2l6ZSIsICJhZGRFdmVudExpc3RlbmVyV2l0aFJlbW92ZXIiLCAidGFyZ2V0IiwgImZpcnN0RWxlbWVudENoaWxkIiwgInR5cGUiLCAibGlzdGVuZXIiLCAiYnVpbGRMaW5rIiwgIm9sZElkIiwgImRpZmZJZCIsICJ2ZXJzaW9uIiwgImltcG9ydF9leHRfZ2FkZ2V0MyIsICJhcGkiLCAiaW5pdE13QXBpIiwgImltcG9ydF9leHRfZ2FkZ2V0NCIsICJwYXJhbWV0ZXJzIiwgImFjdGlvbiIsICJmb3JtYXQiLCAiZm9ybWF0dmVyc2lvbiIsICJwcm9wIiwgInRvcmVsYXRpdmUiLCAicXVlcnlBcGkiLCAiX3JlZiIsICJfYXN5bmNUb0dlbmVyYXRvciIsICJmcm9tcmV2IiwgImVycm9yIiwgImNvbnNvbGUiLCAidG9hc3RpZnkiLCAiY2xvc2UiLCAiZHVyYXRpb24iLCAiX3giLCAiYXBwbHkiLCAiYXJndW1lbnRzIiwgImNvbXBhcmVXaXRoUmVtb3RlRGlmZklkIiwgIl9yZWYyIiwgIl9yZXNwb25zZSRjb21wYXJlIiwgInJlc3BvbnNlIiwgImZyb21yZXZpZCIsICJfeDIiLCAicHJvY2Vzc0lkIiwgImlzUmV2aXNpb25QYWdlIiwgInJldmlzaW9uSWQiLCAiaG9vayIsICJhZGQiLCAiYXR0ciIsICJpc0RpZmZQYWdlIl0KfQo=

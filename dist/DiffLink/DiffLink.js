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
//! src/DiffLink/modules/util/checkDiffPage.ts
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
mw.hook("wikipage.content").add(function diffLink($content) {
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0RpZmZMaW5rL21vZHVsZXMvdXRpbC9jaGVja0RpZmZQYWdlLnRzIiwgInNyYy9EaWZmTGluay9tb2R1bGVzL3V0aWwvY2hlY2tSZXZpc2lvblBhZ2UudHMiLCAic3JjL0RpZmZMaW5rL21vZHVsZXMvYWRkUG9ydGxldExpbmsudHMiLCAic3JjL0RpZmZMaW5rL21vZHVsZXMvaTE4bi50cyIsICJzcmMvRGlmZkxpbmsvbW9kdWxlcy9idWlsZExpbmsudHMiLCAic3JjL0RpZmZMaW5rL29wdGlvbnMuanNvbiIsICJzcmMvRGlmZkxpbmsvbW9kdWxlcy9hcGkudHMiLCAic3JjL0RpZmZMaW5rL21vZHVsZXMvdXRpbC9xdWVyeUFwaS50cyIsICJzcmMvRGlmZkxpbmsvbW9kdWxlcy9jb21wYXJlV2l0aFJlbW90ZURpZmZJZC50cyIsICJzcmMvRGlmZkxpbmsvbW9kdWxlcy9wcm9jZXNzSWQudHMiLCAic3JjL0RpZmZMaW5rL0RpZmZMaW5rLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBjaGVja0RpZmZQYWdlID0gKCRjb250ZW50OiBKUXVlcnkpOiBib29sZWFuID0+IHtcblx0cmV0dXJuICRjb250ZW50LmZpbmQoJ3RhYmxlJykuaGFzQ2xhc3MoJ2RpZmYnKSAmJiAhIW13LmNvbmZpZy5nZXQoJ3dnQ3VyUmV2aXNpb25JZCcpO1xufTtcblxuZXhwb3J0IHtjaGVja0RpZmZQYWdlfTtcbiIsICJjb25zdCBjaGVja1JldmlzaW9uUGFnZSA9ICgkY29udGVudDogSlF1ZXJ5KTogYm9vbGVhbiA9PiB7XG5cdHJldHVybiAoXG5cdFx0KCRjb250ZW50LmZpbmQoJyNjb250ZW50U3ViICNtdy1yZXZpc2lvbi1uYXYnKS5sZW5ndGggfHxcblx0XHRcdCRjb250ZW50LmZpbmQoJ21haW4jY29udGVudD4ucHJlLWNvbnRlbnQgI213LXJldmlzaW9uLW5hdicpLmxlbmd0aCkgPiAwXG5cdCk7XG59O1xuXG5leHBvcnQge2NoZWNrUmV2aXNpb25QYWdlfTtcbiIsICJpbXBvcnQge2FkZEV2ZW50TGlzdGVuZXJXaXRoUmVtb3Zlcn0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9pMThuJztcblxuLyohXG4gKiDoi6Xmg7Poh6rlrprkuYnlpI3liLbnu5PmnpzkuK3nmoTmlofmnKzlj6/pgJrov4flkJHoh6rlt7HnmoRjb21tb24uanPkuK3liqDlhaXku6XkuIvlhoXlrrnvvJpcbiAqICAgd2luZG93LkRpZmZMaW5rID0gWyfniYjmnKzlt67lvIInLCAn5Zu65a6a54mI5pysJ107XG4gKiDoi6Xmg7Pkvb/nlKjpu5jorqTlgLwx77yM5L2G6Ieq5a6a5YC8Mu+8jOivt+WwhuWAvDHnlZnnqbrvvIzlpoLkuIvkvovvvJpcbiAqICAgd2luZG93LkRpZmZMaW5rID0gWycnLCAn5Zu65a6a54mI5pysJ107XG4gKi9cbmNvbnN0IGRlZmF1bHRUZXh0QXJyYXk6IFtzdHJpbmcsIHN0cmluZ10gPSBbZ2V0TWVzc2FnZSgnRGlmZlZlcnNpb24nKSwgZ2V0TWVzc2FnZSgnUGVybWFuZW50VmVyc2lvbicpXTtcbmlmICh3aW5kb3cuRGlmZkxpbmsgJiYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHdpbmRvdy5EaWZmTGluaykgPT09ICdbb2JqZWN0IEFycmF5XScpIHtcblx0Y29uc3QgdGV4dEFycmF5ID0gd2luZG93LkRpZmZMaW5rIGFzIHVua25vd25bXTtcblx0aWYgKHRleHRBcnJheVswXSAmJiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodGV4dEFycmF5WzBdKSA9PT0gJ1tvYmplY3QgU3RyaW5nXScpIHtcblx0XHRbZGVmYXVsdFRleHRBcnJheVswXV0gPSB0ZXh0QXJyYXkgYXMgW3N0cmluZ107XG5cdH1cblx0aWYgKHRleHRBcnJheVsxXSAmJiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodGV4dEFycmF5WzFdKSA9PT0gJ1tvYmplY3QgU3RyaW5nXScpIHtcblx0XHRbZGVmYXVsdFRleHRBcnJheVsxXV0gPSB0ZXh0QXJyYXkgYXMgW3N0cmluZywgc3RyaW5nXTtcblx0fVxufVxuXG5sZXQgZXZlbnRMaXN0ZW5lcjogUmV0dXJuVHlwZTx0eXBlb2YgYWRkRXZlbnRMaXN0ZW5lcldpdGhSZW1vdmVyPiA9IHtcblx0cmVtb3ZlOiAoKTogdm9pZCA9PiB7fSxcbn07XG5cbmNvbnN0IGFkZFBvcnRsZXRMaW5rID0gKHtcblx0dGV4dCxcblx0dG9vbHRpcCxcblx0bGluayxcblx0ZGVmYXVsdFRleHRBcnJheUluZGV4LFxuXHRpc1Blcm1hTGluayxcbn06IHtcblx0dGV4dDogc3RyaW5nO1xuXHR0b29sdGlwOiBzdHJpbmc7XG5cdGxpbms6IHN0cmluZztcblx0ZGVmYXVsdFRleHRBcnJheUluZGV4OiBudW1iZXI7XG5cdGlzUGVybWFMaW5rPzogYm9vbGVhbjtcbn0pOiB2b2lkID0+IHtcblx0bGV0IGVsZW1lbnQ6IEhUTUxMSUVsZW1lbnQgfCBudWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3QtZGlmZmxpbmsnKTtcblx0aWYgKCFlbGVtZW50KSB7XG5cdFx0Y29uc3QgcG9ydGxldElkOiAncC1jYWN0aW9ucycgfCAncC10YicgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcC1jYWN0aW9ucycpID8gJ3AtY2FjdGlvbnMnIDogJ3AtdGInO1xuXHRcdGVsZW1lbnQgPSBtdy51dGlsLmFkZFBvcnRsZXRMaW5rKHBvcnRsZXRJZCwgJyMnLCB0ZXh0LCAndC1kaWZmbGluaycsIHRvb2x0aXApO1xuXHR9XG5cdGlmICghZWxlbWVudCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IGNsaWNrTGlzdGVuZXIgPSAoZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkID0+IHtcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdGNvbnN0ICRlbGVtZW50OiBKUXVlcnkgPSAkKCc8ZGl2PicpO1xuXHRcdGNvbnN0IGhhc2g6IHN0cmluZyA9IGlzUGVybWFMaW5rID8gZGVjb2RlVVJJQ29tcG9uZW50KGxvY2F0aW9uLmhhc2gpIDogJyc7XG5cdFx0Zm9yIChjb25zdCB2YWx1ZSBvZiBbXG5cdFx0XHRsaW5rLFxuXHRcdFx0YFtbJHtsaW5rfSR7aGFzaH1dXWAsXG5cdFx0XHRgW1ske2xpbmt9JHtoYXNofXwke2RlZmF1bHRUZXh0QXJyYXlbZGVmYXVsdFRleHRBcnJheUluZGV4XX1dXWAsXG5cdFx0XSkge1xuXHRcdFx0JGVsZW1lbnQuYXBwZW5kKFxuXHRcdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVuc2FmZS1jYWxsXG5cdFx0XHRcdG5ldyBtdy53aWRnZXRzLkNvcHlUZXh0TGF5b3V0KHtcblx0XHRcdFx0XHRhbGlnbjogJ3RvcCcsXG5cdFx0XHRcdFx0Y29weVRleHQ6IHZhbHVlLFxuXHRcdFx0XHR9KS4kZWxlbWVudCBhcyBKUXVlcnlcblx0XHRcdCk7XG5cdFx0fVxuXHRcdHZvaWQgT08udWkuYWxlcnQoJGVsZW1lbnQsIHtcblx0XHRcdHNpemU6ICdtZWRpdW0nLFxuXHRcdH0pO1xuXHR9O1xuXG5cdGV2ZW50TGlzdGVuZXIucmVtb3ZlKCk7XG5cdGV2ZW50TGlzdGVuZXIgPSBhZGRFdmVudExpc3RlbmVyV2l0aFJlbW92ZXIoe1xuXHRcdHRhcmdldDogKGVsZW1lbnQuZmlyc3RFbGVtZW50Q2hpbGQgPz8gZWxlbWVudCkgYXMgSFRNTEVsZW1lbnQsXG5cdFx0dHlwZTogJ2NsaWNrJyxcblx0XHRsaXN0ZW5lcjogY2xpY2tMaXN0ZW5lcixcblx0fSk7XG59O1xuXG5leHBvcnQge2FkZFBvcnRsZXRMaW5rfTtcbiIsICJpbXBvcnQge2xvY2FsaXplfSBmcm9tICdleHQuZ2FkZ2V0LmkxOG4nO1xuXG5jb25zdCBnZXRJMThuTWVzc2FnZXMgPSAoKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0J05ldHdvcmsgZXJyb3InOiBsb2NhbGl6ZSh7XG5cdFx0XHRqYTogJ+ODjeODg+ODiOODr+ODvOOCr+OCqOODqeODvCcsXG5cdFx0XHQnemgtaGFucyc6ICfnvZHnu5zlvILluLgnLFxuXHRcdFx0J3poLWhhbnQnOiAn57ay6Lev55Ww5bi4Jyxcblx0XHR9KSxcblx0XHRDb3B5RGlmZjogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdDb3B5IHRoZSBsaW5rIHRvIHRoZSBkaWZmIHZlcnNpb24gKHdpa2kgc3ludGF4KScsXG5cdFx0XHRqYTogJ+ePvuWcqOOBrueJiOmWk+OBruW3ruWIhuODquODs+OCr+OCkuOCs+ODlOODvOOBl+OBvuOBme+8iOOCpuOCo+OCreiomOazle+8iScsXG5cdFx0XHQnemgtaGFucyc6ICflpI3liLbpk77mjqXliLDlvZPliY3lt67lvILniYjmnKznmoTnu7Tln7ror63ms5UnLFxuXHRcdFx0J3poLWhhbnQnOiAn6KSH6KO96YCj57WQ5Yiw55W25YmN5beu55Ww54mI5pys55qE57at5Z+66Kqe5rOVJyxcblx0XHR9KSxcblx0XHRDb3B5UGVybWFuZW50OiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0NvcHkgdGhlIHBlcm1hbmVudCBsaW5rIHRvIHRoZSBjdXJyZW50IHZlcnNpb24gKHdpa2kgc3ludGF4KScsXG5cdFx0XHRqYTogJ+OBk+OBruODmuODvOOCuOOBruOBk+OBrueJiOOBuOOBruWbuuWumuODquODs+OCr+OCkuOCs+ODlOODvOOBl+OBvuOBme+8iOOCpuOCo+OCreiomOazle+8iScsXG5cdFx0XHQnemgtaGFucyc6ICflpI3liLbpk77mjqXliLDlvZPliY3kv67orqLniYjmnKznmoTnu7Tln7ror63ms5UnLFxuXHRcdFx0J3poLWhhbnQnOiAn6KSH6KO96YCj57WQ5Yiw55W25YmN5L+u6KiC54mI5pys55qE57at5Z+66Kqe5rOVJyxcblx0XHR9KSxcblx0XHREaWZmOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0RpZmYgbGluaycsXG5cdFx0XHRqYTogJ+ePvuWcqOOBrueJiOmWk+OBruW3ruWIhuODquODs+OCrycsXG5cdFx0XHQnemgtaGFucyc6ICflvZPliY3lt67lvILpk77mjqUnLFxuXHRcdFx0J3poLWhhbnQnOiAn55W25YmN5beu55Ww6YCj57WQJyxcblx0XHR9KSxcblx0XHREaWZmVmVyc2lvbjogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdkaWZmIHZlcnNpb24nLFxuXHRcdFx0amE6ICfniYjplpPjga7lt67liIYnLFxuXHRcdFx0J3poLWhhbnMnOiAn5beu5byC54mI5pysJyxcblx0XHRcdCd6aC1oYW50JzogJ+W3rueVsOeJiOacrCcsXG5cdFx0fSksXG5cdFx0UGVybWFuZW50OiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1Blcm1hbmVudCBsaW5rJyxcblx0XHRcdGphOiAn44GT44Gu54mI44G444Gu5Zu65a6a44Oq44Oz44KvJyxcblx0XHRcdCd6aC1oYW5zJzogJ+W9k+WJjeS/ruiuoumTvuaOpScsXG5cdFx0XHQnemgtaGFudCc6ICfnlbbliY3kv67oqILpgKPntZAnLFxuXHRcdH0pLFxuXHRcdFBlcm1hbmVudFZlcnNpb246IGxvY2FsaXplKHtcblx0XHRcdGVuOiAncGVybWFuZW50IHZlcnNpb24nLFxuXHRcdFx0amE6ICfniYjjgbjjga7lm7rlrprjg6rjg7Pjgq8nLFxuXHRcdFx0J3poLWhhbnMnOiAn5Zu65a6a54mI5pys6ZO+5o6lJyxcblx0XHRcdCd6aC1oYW50JzogJ+WbuuWumueJiOacrOmAo+e1kCcsXG5cdFx0fSksXG5cdH07XG59O1xuXG5jb25zdCBpMThuTWVzc2FnZXMgPSBnZXRJMThuTWVzc2FnZXMoKTtcblxuY29uc3QgZ2V0TWVzc2FnZTogR2V0TWVzc2FnZXM8dHlwZW9mIGkxOG5NZXNzYWdlcz4gPSAoa2V5KSA9PiB7XG5cdHJldHVybiBpMThuTWVzc2FnZXNba2V5XSB8fCBrZXk7XG59O1xuXG5leHBvcnQge2dldE1lc3NhZ2V9O1xuIiwgImltcG9ydCB7YWRkUG9ydGxldExpbmt9IGZyb20gJy4vYWRkUG9ydGxldExpbmsnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL2kxOG4nO1xuXG5jb25zdCBidWlsZExpbmsgPSAob2xkSWQ6IG51bWJlciB8IG51bGwsIGRpZmZJZDogbnVtYmVyKTogdm9pZCA9PiB7XG5cdGxldCBsaW5rOiBzdHJpbmcgPSAnU3BlY2lhbDpEaWZmLyc7XG5cdGlmIChvbGRJZCkge1xuXHRcdGxpbmsgKz0gYCR7b2xkSWR9L2A7XG5cdH1cblx0bGluayArPSBkaWZmSWQ7XG5cblx0YWRkUG9ydGxldExpbmsoe1xuXHRcdGxpbmssXG5cdFx0dGV4dDogZ2V0TWVzc2FnZSgnRGlmZicpLFxuXHRcdHRvb2x0aXA6IGdldE1lc3NhZ2UoJ0NvcHlEaWZmJyksXG5cdFx0ZGVmYXVsdFRleHRBcnJheUluZGV4OiAwLFxuXHR9KTtcbn07XG5cbmV4cG9ydCB7YnVpbGRMaW5rfTtcbiIsICJ7XG5cdFwidmVyc2lvblwiOiBcIjIuMFwiXG59XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtpbml0TXdBcGl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmNvbnN0IGFwaTogbXcuQXBpID0gaW5pdE13QXBpKGBEaWZmTGluay8ke09QVElPTlMudmVyc2lvbn1gKTtcblxuZXhwb3J0IHthcGl9O1xuIiwgImltcG9ydCB7YXBpfSBmcm9tICcuLi9hcGknO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuLi9pMThuJztcbmltcG9ydCB7dG9hc3RpZnl9IGZyb20gJ2V4dC5nYWRnZXQuVG9hc3RpZnknO1xuXG50eXBlIENvbXBhcmVSZXNwb25zZSA9IHtcblx0Y29tcGFyZT86IHtcblx0XHRmcm9tcmV2aWQ6IG51bWJlcjtcblx0fTtcbn07XG5cbmNvbnN0IHBhcmFtZXRlcnM6IEFwaUNvbXBhcmVQYWdlc1BhcmFtcyA9IHtcblx0YWN0aW9uOiAnY29tcGFyZScsXG5cdGZvcm1hdDogJ2pzb24nLFxuXHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdHByb3A6ICdpZHMnLFxuXHR0b3JlbGF0aXZlOiAncHJldicsXG59O1xuXG5jb25zdCBxdWVyeUFwaSA9IGFzeW5jIChkaWZmSWQ6IG51bWJlcik6IFByb21pc2U8Q29tcGFyZVJlc3BvbnNlPiA9PiB7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIGF3YWl0IGFwaS5nZXQoe1xuXHRcdFx0Li4ucGFyYW1ldGVycyxcblx0XHRcdGZyb21yZXY6IGRpZmZJZCxcblx0XHR9KTtcblx0fSBjYXRjaCAoZXJyb3I6IHVua25vd24pIHtcblx0XHRjb25zb2xlLmVycm9yKCdbRGlmZkxpbmtdIEFqYXggZXJyb3I6JywgZXJyb3IpO1xuXHRcdHRvYXN0aWZ5KFxuXHRcdFx0e1xuXHRcdFx0XHR0ZXh0OiBnZXRNZXNzYWdlKCdOZXR3b3JrIGVycm9yJyksXG5cdFx0XHRcdGNsb3NlOiB0cnVlLFxuXHRcdFx0XHRkdXJhdGlvbjogLTEsXG5cdFx0XHR9LFxuXHRcdFx0J2Vycm9yJ1xuXHRcdCk7XG5cblx0XHRyZXR1cm4ge307XG5cdH1cbn07XG5cbmV4cG9ydCB7cXVlcnlBcGl9O1xuIiwgImltcG9ydCB7YnVpbGRMaW5rfSBmcm9tICcuL2J1aWxkTGluayc7XG5pbXBvcnQge3F1ZXJ5QXBpfSBmcm9tICcuL3V0aWwvcXVlcnlBcGknO1xuXG5jb25zdCBjb21wYXJlV2l0aFJlbW90ZURpZmZJZCA9IGFzeW5jIChkaWZmSWQ6IG51bWJlcik6IFByb21pc2U8dm9pZD4gPT4ge1xuXHRjb25zdCByZXNwb25zZTogQXdhaXRlZDxSZXR1cm5UeXBlPHR5cGVvZiBxdWVyeUFwaT4+ID0gYXdhaXQgcXVlcnlBcGkoZGlmZklkKTtcblx0aWYgKGRpZmZJZCA9PT0gbXcuY29uZmlnLmdldCgnd2dEaWZmTmV3SWQnKSAmJiByZXNwb25zZVsnY29tcGFyZSddPy5mcm9tcmV2aWQgPT09IG13LmNvbmZpZy5nZXQoJ3dnRGlmZk9sZElkJykpIHtcblx0XHRidWlsZExpbmsoMCwgZGlmZklkKTtcblx0fVxufTtcblxuZXhwb3J0IHtjb21wYXJlV2l0aFJlbW90ZURpZmZJZH07XG4iLCAiaW1wb3J0IHthZGRQb3J0bGV0TGlua30gZnJvbSAnLi9hZGRQb3J0bGV0TGluayc7XG5pbXBvcnQge2J1aWxkTGlua30gZnJvbSAnLi9idWlsZExpbmsnO1xuaW1wb3J0IHtjb21wYXJlV2l0aFJlbW90ZURpZmZJZH0gZnJvbSAnLi9jb21wYXJlV2l0aFJlbW90ZURpZmZJZCc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vaTE4bic7XG5cbmNvbnN0IHByb2Nlc3NJZCA9IChcblx0aXNSZXZpc2lvblBhZ2U6IGJvb2xlYW4sXG5cdHtkaWZmSWQsIG9sZElkLCByZXZpc2lvbklkfToge2RpZmZJZDogbnVtYmVyIHwgbnVsbDsgb2xkSWQ6IG51bWJlciB8IG51bGw7IHJldmlzaW9uSWQ6IG51bWJlciB8IG51bGx9XG4pOiB2b2lkID0+IHtcblx0aWYgKGRpZmZJZCkge1xuXHRcdGJ1aWxkTGluayhvbGRJZCwgZGlmZklkKTtcblx0XHRpZiAob2xkSWQpIHtcblx0XHRcdHZvaWQgY29tcGFyZVdpdGhSZW1vdGVEaWZmSWQoZGlmZklkKTtcblx0XHR9XG5cdH0gZWxzZSBpZiAocmV2aXNpb25JZCAmJiBpc1JldmlzaW9uUGFnZSkge1xuXHRcdGFkZFBvcnRsZXRMaW5rKHtcblx0XHRcdHRleHQ6IGdldE1lc3NhZ2UoJ1Blcm1hbmVudCcpLFxuXHRcdFx0dG9vbHRpcDogZ2V0TWVzc2FnZSgnQ29weVBlcm1hbmVudCcpLFxuXHRcdFx0bGluazogYFNwZWNpYWw6UGVybWFMaW5rLyR7cmV2aXNpb25JZH1gLFxuXHRcdFx0ZGVmYXVsdFRleHRBcnJheUluZGV4OiAxLFxuXHRcdFx0aXNQZXJtYUxpbms6IHRydWUsXG5cdFx0fSk7XG5cdH1cbn07XG5cbmV4cG9ydCB7cHJvY2Vzc0lkfTtcbiIsICJpbXBvcnQge2NoZWNrRGlmZlBhZ2V9IGZyb20gJy4vbW9kdWxlcy91dGlsL2NoZWNrRGlmZlBhZ2UnO1xuaW1wb3J0IHtjaGVja1JldmlzaW9uUGFnZX0gZnJvbSAnLi9tb2R1bGVzL3V0aWwvY2hlY2tSZXZpc2lvblBhZ2UnO1xuaW1wb3J0IHtwcm9jZXNzSWR9IGZyb20gJy4vbW9kdWxlcy9wcm9jZXNzSWQnO1xuXG5tdy5ob29rKCd3aWtpcGFnZS5jb250ZW50JykuYWRkKGZ1bmN0aW9uIGRpZmZMaW5rKCRjb250ZW50KTogdm9pZCB7XG5cdGlmICgkY29udGVudC5hdHRyKCdpZCcpICE9PSAnbXctY29udGVudC10ZXh0Jykge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IGlzRGlmZlBhZ2U6IGJvb2xlYW4gPSBjaGVja0RpZmZQYWdlKCRjb250ZW50KTtcblx0Y29uc3QgaXNSZXZpc2lvblBhZ2U6IGJvb2xlYW4gPSBjaGVja1JldmlzaW9uUGFnZSgkY29udGVudCk7XG5cdGlmICghaXNEaWZmUGFnZSAmJiAhaXNSZXZpc2lvblBhZ2UpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRwcm9jZXNzSWQoaXNSZXZpc2lvblBhZ2UsIHtcblx0XHRkaWZmSWQ6IG13LmNvbmZpZy5nZXQoJ3dnRGlmZk5ld0lkJyksXG5cdFx0b2xkSWQ6IG13LmNvbmZpZy5nZXQoJ3dnRGlmZk9sZElkJyksXG5cdFx0cmV2aXNpb25JZDogbXcuY29uZmlnLmdldCgnd2dSZXZpc2lvbklkJyksXG5cdH0pO1xufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLGdCQUFpQkMsY0FBOEI7QUFDcEQsU0FBT0EsU0FBU0MsS0FBSyxPQUFPLEVBQUVDLFNBQVMsTUFBTSxLQUFLLENBQUMsQ0FBQ0MsR0FBR0MsT0FBT0MsSUFBSSxpQkFBaUI7QUFDcEY7O0FDRkEsSUFBTUMsb0JBQXFCTixjQUE4QjtBQUN4RCxVQUNFQSxTQUFTQyxLQUFLLDhCQUE4QixFQUFFTSxVQUM5Q1AsU0FBU0MsS0FBSyw0Q0FBNEMsRUFBRU0sVUFBVTtBQUV6RTs7QUNMQSxJQUFBQyxxQkFBMENDLFFBQUEsaUJBQUE7O0FDQTFDLElBQUFDLG9CQUF1QkQsUUFBQSxpQkFBQTtBQUV2QixJQUFN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QUFLLGtCQUFrQixFQUFFQyxJQUFJLFNBQVNDLFNBQVM3RyxVQUFnQjtBQUNqRSxNQUFJQSxTQUFTOEcsS0FBSyxJQUFJLE1BQU0sbUJBQW1CO0FBQzlDO0VBQ0Q7QUFFQSxRQUFNQyxhQUFzQmhILGNBQWNDLFFBQVE7QUFDbEQsUUFBTXlHLGlCQUEwQm5HLGtCQUFrQk4sUUFBUTtBQUMxRCxNQUFJLENBQUMrRyxjQUFjLENBQUNOLGdCQUFnQjtBQUNuQztFQUNEO0FBRUFELFlBQVVDLGdCQUFnQjtJQUN6Qi9CLFFBQVF2RSxHQUFHQyxPQUFPQyxJQUFJLGFBQWE7SUFDbkNvRSxPQUFPdEUsR0FBR0MsT0FBT0MsSUFBSSxhQUFhO0lBQ2xDcUcsWUFBWXZHLEdBQUdDLE9BQU9DLElBQUksY0FBYztFQUN6QyxDQUFDO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFsiY2hlY2tEaWZmUGFnZSIsICIkY29udGVudCIsICJmaW5kIiwgImhhc0NsYXNzIiwgIm13IiwgImNvbmZpZyIsICJnZXQiLCAiY2hlY2tSZXZpc2lvblBhZ2UiLCAibGVuZ3RoIiwgImltcG9ydF9leHRfZ2FkZ2V0MiIsICJyZXF1aXJlIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgImdldEkxOG5NZXNzYWdlcyIsICJsb2NhbGl6ZSIsICJqYSIsICJDb3B5RGlmZiIsICJlbiIsICJDb3B5UGVybWFuZW50IiwgIkRpZmYiLCAiRGlmZlZlcnNpb24iLCAiUGVybWFuZW50IiwgIlBlcm1hbmVudFZlcnNpb24iLCAiaTE4bk1lc3NhZ2VzIiwgImdldE1lc3NhZ2UiLCAia2V5IiwgImRlZmF1bHRUZXh0QXJyYXkiLCAid2luZG93IiwgIkRpZmZMaW5rIiwgIk9iamVjdCIsICJwcm90b3R5cGUiLCAidG9TdHJpbmciLCAiY2FsbCIsICJ0ZXh0QXJyYXkiLCAiZXZlbnRMaXN0ZW5lciIsICJyZW1vdmUiLCAiYWRkUG9ydGxldExpbmsiLCAidGV4dCIsICJ0b29sdGlwIiwgImxpbmsiLCAiZGVmYXVsdFRleHRBcnJheUluZGV4IiwgImlzUGVybWFMaW5rIiwgIl9lbGVtZW50JGZpcnN0RWxlbWVudCIsICJlbGVtZW50IiwgImRvY3VtZW50IiwgInF1ZXJ5U2VsZWN0b3IiLCAicG9ydGxldElkIiwgInV0aWwiLCAiY2xpY2tMaXN0ZW5lciIsICJldmVudCIsICJwcmV2ZW50RGVmYXVsdCIsICIkZWxlbWVudCIsICIkIiwgImhhc2giLCAiZGVjb2RlVVJJQ29tcG9uZW50IiwgImxvY2F0aW9uIiwgIl9pIiwgIl9hcnIiLCAiY29uY2F0IiwgInZhbHVlIiwgImFwcGVuZCIsICJ3aWRnZXRzIiwgIkNvcHlUZXh0TGF5b3V0IiwgImFsaWduIiwgImNvcHlUZXh0IiwgIk9PIiwgInVpIiwgImFsZXJ0IiwgInNpemUiLCAiYWRkRXZlbnRMaXN0ZW5lcldpdGhSZW1vdmVyIiwgInRhcmdldCIsICJmaXJzdEVsZW1lbnRDaGlsZCIsICJ0eXBlIiwgImxpc3RlbmVyIiwgImJ1aWxkTGluayIsICJvbGRJZCIsICJkaWZmSWQiLCAidmVyc2lvbiIsICJpbXBvcnRfZXh0X2dhZGdldDMiLCAiYXBpIiwgImluaXRNd0FwaSIsICJpbXBvcnRfZXh0X2dhZGdldDQiLCAicGFyYW1ldGVycyIsICJhY3Rpb24iLCAiZm9ybWF0IiwgImZvcm1hdHZlcnNpb24iLCAicHJvcCIsICJ0b3JlbGF0aXZlIiwgInF1ZXJ5QXBpIiwgIl9yZWYiLCAiX2FzeW5jVG9HZW5lcmF0b3IiLCAiZnJvbXJldiIsICJlcnJvciIsICJjb25zb2xlIiwgInRvYXN0aWZ5IiwgImNsb3NlIiwgImR1cmF0aW9uIiwgIl94IiwgImFwcGx5IiwgImFyZ3VtZW50cyIsICJjb21wYXJlV2l0aFJlbW90ZURpZmZJZCIsICJfcmVmMiIsICJfcmVzcG9uc2UkY29tcGFyZSIsICJyZXNwb25zZSIsICJmcm9tcmV2aWQiLCAiX3gyIiwgInByb2Nlc3NJZCIsICJpc1JldmlzaW9uUGFnZSIsICJyZXZpc2lvbklkIiwgImhvb2siLCAiYWRkIiwgImRpZmZMaW5rIiwgImF0dHIiLCAiaXNEaWZmUGFnZSJdCn0K

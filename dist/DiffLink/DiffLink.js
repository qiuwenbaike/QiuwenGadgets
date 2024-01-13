/**
 * SPDX-License-Identifier: GPL-3.0
 * _addText: '{{Gadget Header|license=GPL-3.0}}'
 *
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/DiffLink}
 * @author 安忆 <i@anyi.in>
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
var defaultTextArray = [getMessage("DiffVersion"), getMessage("PermanentVersion")];
if (window.DiffLink !== void 0 && Object.prototype.toString.call(window.DiffLink) === "[object Array]") {
  if (window.DiffLink[0] !== "" && Object.prototype.toString.call(window.DiffLink[0]) === "[object String]") {
    [defaultTextArray[0]] = window.DiffLink;
  }
  if (window.DiffLink[1] !== "" && Object.prototype.toString.call(window.DiffLink[1]) === "[object String]") {
    [defaultTextArray[1]] = window.DiffLink;
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
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
        new mw.widgets.CopyTextLayout({
          align: "top",
          copyText: value
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
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
//! src/DiffLink/modules/constant.ts
var WG_WIKI_ID = mw.config.get("wgWikiID");
//! src/DiffLink/modules/api.ts
var import_ext_gadget3 = require("ext.gadget.Util");
var api = (0, import_ext_gadget3.initMwApi)("Qiuwen/1.1 (DiffLink/".concat(version, "; ").concat(WG_WIKI_ID, ")"));
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0RpZmZMaW5rL21vZHVsZXMvdXRpbC9jaGVja0RpZmZQYWdlLnRzIiwgInNyYy9EaWZmTGluay9tb2R1bGVzL3V0aWwvY2hlY2tSZXZpc2lvblBhZ2UudHMiLCAic3JjL0RpZmZMaW5rL21vZHVsZXMvYWRkUG9ydGxldExpbmsudHMiLCAic3JjL0RpZmZMaW5rL21vZHVsZXMvaTE4bi50cyIsICJzcmMvRGlmZkxpbmsvbW9kdWxlcy9idWlsZExpbmsudHMiLCAic3JjL0RpZmZMaW5rL29wdGlvbnMuanNvbiIsICJzcmMvRGlmZkxpbmsvbW9kdWxlcy9jb25zdGFudC50cyIsICJzcmMvRGlmZkxpbmsvbW9kdWxlcy9hcGkudHMiLCAic3JjL0RpZmZMaW5rL21vZHVsZXMvdXRpbC9xdWVyeUFwaS50cyIsICJzcmMvRGlmZkxpbmsvbW9kdWxlcy9jb21wYXJlV2l0aFJlbW90ZURpZmZJZC50cyIsICJzcmMvRGlmZkxpbmsvbW9kdWxlcy9wcm9jZXNzSWQudHMiLCAic3JjL0RpZmZMaW5rL0RpZmZMaW5rLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBjaGVja0RpZmZQYWdlID0gKCRjb250ZW50OiBKUXVlcnkpOiBib29sZWFuID0+IHtcblx0cmV0dXJuICRjb250ZW50LmZpbmQoJ3RhYmxlJykuaGFzQ2xhc3MoJ2RpZmYnKSAmJiAhIW13LmNvbmZpZy5nZXQoJ3dnQ3VyUmV2aXNpb25JZCcpO1xufTtcblxuZXhwb3J0IHtjaGVja0RpZmZQYWdlfTtcbiIsICJjb25zdCBjaGVja1JldmlzaW9uUGFnZSA9ICgkY29udGVudDogSlF1ZXJ5KTogYm9vbGVhbiA9PiB7XG5cdHJldHVybiAoXG5cdFx0KCRjb250ZW50LmZpbmQoJyNjb250ZW50U3ViICNtdy1yZXZpc2lvbi1uYXYnKS5sZW5ndGggfHxcblx0XHRcdCRjb250ZW50LmZpbmQoJ21haW4jY29udGVudD4ucHJlLWNvbnRlbnQgI213LXJldmlzaW9uLW5hdicpLmxlbmd0aCkgPiAwXG5cdCk7XG59O1xuXG5leHBvcnQge2NoZWNrUmV2aXNpb25QYWdlfTtcbiIsICJpbXBvcnQge2FkZEV2ZW50TGlzdGVuZXJXaXRoUmVtb3Zlcn0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9pMThuJztcblxuLyoqXG4gKiDoi6Xmg7Poh6rlrprkuYnlpI3liLbnu5PmnpzkuK3nmoTmlofmnKzlj6/pgJrov4flkJHoh6rlt7HnmoRjb21tb24uanPkuK3liqDlhaXku6XkuIvlhoXlrrnvvJpcbiAqICAgd2luZG93LkRpZmZMaW5rID0gWyfniYjmnKzlt67lvIInLCAn5Zu65a6a54mI5pysJ107XG4gKiDoi6Xmg7Pkvb/nlKjpu5jorqTlgLwx77yM5L2G6Ieq5a6a5YC8Mu+8jOivt+WwhuWAvDHnlZnnqbrvvIzlpoLkuIvkvovvvJpcbiAqICAgd2luZG93LkRpZmZMaW5rID0gWycnLCAn5Zu65a6a54mI5pysJ107XG4gKi9cbmNvbnN0IGRlZmF1bHRUZXh0QXJyYXk6IFtzdHJpbmcsIHN0cmluZ10gPSBbZ2V0TWVzc2FnZSgnRGlmZlZlcnNpb24nKSwgZ2V0TWVzc2FnZSgnUGVybWFuZW50VmVyc2lvbicpXTtcbmlmICh3aW5kb3cuRGlmZkxpbmsgIT09IHVuZGVmaW5lZCAmJiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwod2luZG93LkRpZmZMaW5rKSA9PT0gJ1tvYmplY3QgQXJyYXldJykge1xuXHRpZiAod2luZG93LkRpZmZMaW5rWzBdICE9PSAnJyAmJiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwod2luZG93LkRpZmZMaW5rWzBdKSA9PT0gJ1tvYmplY3QgU3RyaW5nXScpIHtcblx0XHRbZGVmYXVsdFRleHRBcnJheVswXV0gPSB3aW5kb3cuRGlmZkxpbmsgYXMgW3N0cmluZ107XG5cdH1cblx0aWYgKHdpbmRvdy5EaWZmTGlua1sxXSAhPT0gJycgJiYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHdpbmRvdy5EaWZmTGlua1sxXSkgPT09ICdbb2JqZWN0IFN0cmluZ10nKSB7XG5cdFx0W2RlZmF1bHRUZXh0QXJyYXlbMV1dID0gd2luZG93LkRpZmZMaW5rIGFzIFtzdHJpbmcsIHN0cmluZ107XG5cdH1cbn1cblxubGV0IGV2ZW50TGlzdGVuZXI6IFJldHVyblR5cGU8dHlwZW9mIGFkZEV2ZW50TGlzdGVuZXJXaXRoUmVtb3Zlcj4gPSB7XG5cdHJlbW92ZTogKCk6IHZvaWQgPT4ge30sXG59O1xuXG5jb25zdCBhZGRQb3J0bGV0TGluayA9ICh7XG5cdHRleHQsXG5cdHRvb2x0aXAsXG5cdGxpbmssXG5cdGRlZmF1bHRUZXh0QXJyYXlJbmRleCxcblx0aXNQZXJtYUxpbmssXG59OiB7XG5cdHRleHQ6IHN0cmluZztcblx0dG9vbHRpcDogc3RyaW5nO1xuXHRsaW5rOiBzdHJpbmc7XG5cdGRlZmF1bHRUZXh0QXJyYXlJbmRleDogbnVtYmVyO1xuXHRpc1Blcm1hTGluaz86IGJvb2xlYW47XG59KTogdm9pZCA9PiB7XG5cdGxldCBlbGVtZW50OiBIVE1MTElFbGVtZW50IHwgbnVsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0LWRpZmZsaW5rJyk7XG5cdGlmICghZWxlbWVudCkge1xuXHRcdGNvbnN0IHBvcnRsZXRJZDogJ3AtY2FjdGlvbnMnIHwgJ3AtdGInID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3AtY2FjdGlvbnMnKSA/ICdwLWNhY3Rpb25zJyA6ICdwLXRiJztcblx0XHRlbGVtZW50ID0gbXcudXRpbC5hZGRQb3J0bGV0TGluayhwb3J0bGV0SWQsICcjJywgdGV4dCwgJ3QtZGlmZmxpbmsnLCB0b29sdGlwKTtcblx0fVxuXHRpZiAoIWVsZW1lbnQpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBjbGlja0xpc3RlbmVyID0gKGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCA9PiB7XG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRjb25zdCAkZWxlbWVudDogSlF1ZXJ5ID0gJCgnPGRpdj4nKTtcblx0XHRjb25zdCBoYXNoOiBzdHJpbmcgPSBpc1Blcm1hTGluayA/IGRlY29kZVVSSUNvbXBvbmVudChsb2NhdGlvbi5oYXNoKSA6ICcnO1xuXHRcdGZvciAoY29uc3QgdmFsdWUgb2YgW1xuXHRcdFx0bGluayxcblx0XHRcdGBbWyR7bGlua30ke2hhc2h9XV1gLFxuXHRcdFx0YFtbJHtsaW5rfSR7aGFzaH18JHtkZWZhdWx0VGV4dEFycmF5W2RlZmF1bHRUZXh0QXJyYXlJbmRleF19XV1gLFxuXHRcdF0pIHtcblx0XHRcdCRlbGVtZW50LmFwcGVuZChcblx0XHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnNhZmUtY2FsbCwgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVuc2FmZS1tZW1iZXItYWNjZXNzXG5cdFx0XHRcdG5ldyBtdy53aWRnZXRzLkNvcHlUZXh0TGF5b3V0KHtcblx0XHRcdFx0XHRhbGlnbjogJ3RvcCcsXG5cdFx0XHRcdFx0Y29weVRleHQ6IHZhbHVlLFxuXHRcdFx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW5zYWZlLW1lbWJlci1hY2Nlc3Ncblx0XHRcdFx0fSkuJGVsZW1lbnQgYXMgSlF1ZXJ5XG5cdFx0XHQpO1xuXHRcdH1cblx0XHR2b2lkIE9PLnVpLmFsZXJ0KCRlbGVtZW50LCB7XG5cdFx0XHRzaXplOiAnbWVkaXVtJyxcblx0XHR9KTtcblx0fTtcblxuXHRldmVudExpc3RlbmVyLnJlbW92ZSgpO1xuXHRldmVudExpc3RlbmVyID0gYWRkRXZlbnRMaXN0ZW5lcldpdGhSZW1vdmVyKHtcblx0XHR0YXJnZXQ6IChlbGVtZW50LmZpcnN0RWxlbWVudENoaWxkID8/IGVsZW1lbnQpIGFzIEhUTUxFbGVtZW50LFxuXHRcdHR5cGU6ICdjbGljaycsXG5cdFx0bGlzdGVuZXI6IGNsaWNrTGlzdGVuZXIsXG5cdH0pO1xufTtcblxuZXhwb3J0IHthZGRQb3J0bGV0TGlua307XG4iLCAiaW1wb3J0IHtsb2NhbGl6ZX0gZnJvbSAnZXh0LmdhZGdldC5pMThuJztcblxuY29uc3QgZ2V0STE4bk1lc3NhZ2VzID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdCdOZXR3b3JrIGVycm9yJzogbG9jYWxpemUoe1xuXHRcdFx0amE6ICfjg43jg4Pjg4jjg6/jg7zjgq/jgqjjg6njg7wnLFxuXHRcdFx0J3poLWhhbnMnOiAn572R57uc5byC5bi4Jyxcblx0XHRcdCd6aC1oYW50JzogJ+e2sui3r+eVsOW4uCcsXG5cdFx0fSksXG5cdFx0Q29weURpZmY6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQ29weSB0aGUgbGluayB0byB0aGUgZGlmZiB2ZXJzaW9uICh3aWtpIHN5bnRheCknLFxuXHRcdFx0amE6ICfnj77lnKjjga7niYjplpPjga7lt67liIbjg6rjg7Pjgq/jgpLjgrPjg5Tjg7zjgZfjgb7jgZnvvIjjgqbjgqPjgq3oqJjms5XvvIknLFxuXHRcdFx0J3poLWhhbnMnOiAn5aSN5Yi26ZO+5o6l5Yiw5b2T5YmN5beu5byC54mI5pys55qE57u05Z+66K+t5rOVJyxcblx0XHRcdCd6aC1oYW50JzogJ+ikh+ijvemAo+e1kOWIsOeVtuWJjeW3rueVsOeJiOacrOeahOe2reWfuuiqnuazlScsXG5cdFx0fSksXG5cdFx0Q29weVBlcm1hbmVudDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdDb3B5IHRoZSBwZXJtYW5lbnQgbGluayB0byB0aGUgY3VycmVudCB2ZXJzaW9uICh3aWtpIHN5bnRheCknLFxuXHRcdFx0amE6ICfjgZPjga7jg5rjg7zjgrjjga7jgZPjga7niYjjgbjjga7lm7rlrprjg6rjg7Pjgq/jgpLjgrPjg5Tjg7zjgZfjgb7jgZnvvIjjgqbjgqPjgq3oqJjms5XvvIknLFxuXHRcdFx0J3poLWhhbnMnOiAn5aSN5Yi26ZO+5o6l5Yiw5b2T5YmN5L+u6K6i54mI5pys55qE57u05Z+66K+t5rOVJyxcblx0XHRcdCd6aC1oYW50JzogJ+ikh+ijvemAo+e1kOWIsOeVtuWJjeS/ruiogueJiOacrOeahOe2reWfuuiqnuazlScsXG5cdFx0fSksXG5cdFx0RGlmZjogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdEaWZmIGxpbmsnLFxuXHRcdFx0amE6ICfnj77lnKjjga7niYjplpPjga7lt67liIbjg6rjg7Pjgq8nLFxuXHRcdFx0J3poLWhhbnMnOiAn5b2T5YmN5beu5byC6ZO+5o6lJyxcblx0XHRcdCd6aC1oYW50JzogJ+eVtuWJjeW3rueVsOmAo+e1kCcsXG5cdFx0fSksXG5cdFx0RGlmZlZlcnNpb246IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnZGlmZiB2ZXJzaW9uJyxcblx0XHRcdGphOiAn54mI6ZaT44Gu5beu5YiGJyxcblx0XHRcdCd6aC1oYW5zJzogJ+W3ruW8gueJiOacrCcsXG5cdFx0XHQnemgtaGFudCc6ICflt67nlbDniYjmnKwnLFxuXHRcdH0pLFxuXHRcdFBlcm1hbmVudDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdQZXJtYW5lbnQgbGluaycsXG5cdFx0XHRqYTogJ+OBk+OBrueJiOOBuOOBruWbuuWumuODquODs+OCrycsXG5cdFx0XHQnemgtaGFucyc6ICflvZPliY3kv67orqLpk77mjqUnLFxuXHRcdFx0J3poLWhhbnQnOiAn55W25YmN5L+u6KiC6YCj57WQJyxcblx0XHR9KSxcblx0XHRQZXJtYW5lbnRWZXJzaW9uOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ3Blcm1hbmVudCB2ZXJzaW9uJyxcblx0XHRcdGphOiAn54mI44G444Gu5Zu65a6a44Oq44Oz44KvJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WbuuWumueJiOacrOmTvuaOpScsXG5cdFx0XHQnemgtaGFudCc6ICflm7rlrprniYjmnKzpgKPntZAnLFxuXHRcdH0pLFxuXHR9O1xufTtcblxuY29uc3QgaTE4bk1lc3NhZ2VzID0gZ2V0STE4bk1lc3NhZ2VzKCk7XG5cbmNvbnN0IGdldE1lc3NhZ2U6IEdldE1lc3NhZ2VzPHR5cGVvZiBpMThuTWVzc2FnZXM+ID0gKGtleSkgPT4ge1xuXHRyZXR1cm4gaTE4bk1lc3NhZ2VzW2tleV0gfHwga2V5O1xufTtcblxuZXhwb3J0IHtnZXRNZXNzYWdlfTtcbiIsICJpbXBvcnQge2FkZFBvcnRsZXRMaW5rfSBmcm9tICcuL2FkZFBvcnRsZXRMaW5rJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9pMThuJztcblxuY29uc3QgYnVpbGRMaW5rID0gKG9sZElkOiBudW1iZXIsIGRpZmZJZDogbnVtYmVyKTogdm9pZCA9PiB7XG5cdGxldCBsaW5rOiBzdHJpbmcgPSAnU3BlY2lhbDpEaWZmLyc7XG5cdGlmIChvbGRJZCkge1xuXHRcdGxpbmsgKz0gYCR7b2xkSWR9L2A7XG5cdH1cblx0bGluayArPSBkaWZmSWQ7XG5cblx0YWRkUG9ydGxldExpbmsoe1xuXHRcdGxpbmssXG5cdFx0dGV4dDogZ2V0TWVzc2FnZSgnRGlmZicpLFxuXHRcdHRvb2x0aXA6IGdldE1lc3NhZ2UoJ0NvcHlEaWZmJyksXG5cdFx0ZGVmYXVsdFRleHRBcnJheUluZGV4OiAwLFxuXHR9KTtcbn07XG5cbmV4cG9ydCB7YnVpbGRMaW5rfTtcbiIsICJ7XG5cdFwidmVyc2lvblwiOiBcIjIuMFwiXG59XG4iLCAiY29uc3QgV0dfV0lLSV9JRDogc3RyaW5nID0gbXcuY29uZmlnLmdldCgnd2dXaWtpSUQnKTtcblxuZXhwb3J0IHtXR19XSUtJX0lEfTtcbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge1dHX1dJS0lfSUR9IGZyb20gJy4vY29uc3RhbnQnO1xuaW1wb3J0IHtpbml0TXdBcGl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmNvbnN0IGFwaTogbXcuQXBpID0gaW5pdE13QXBpKGBRaXV3ZW4vMS4xIChEaWZmTGluay8ke09QVElPTlMudmVyc2lvbn07ICR7V0dfV0lLSV9JRH0pYCk7XG5cbmV4cG9ydCB7YXBpfTtcbiIsICJpbXBvcnQge2FwaX0gZnJvbSAnLi4vYXBpJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi4vaTE4bic7XG5pbXBvcnQge3RvYXN0aWZ5fSBmcm9tICdleHQuZ2FkZ2V0LlRvYXN0aWZ5JztcblxudHlwZSBDb21wYXJlUmVzcG9uc2UgPSB7XG5cdGNvbXBhcmU/OiB7XG5cdFx0ZnJvbXJldmlkOiBudW1iZXI7XG5cdH07XG59O1xuXG5jb25zdCBwYXJhbWV0ZXJzOiBBcGlDb21wYXJlUGFnZXNQYXJhbXMgPSB7XG5cdGFjdGlvbjogJ2NvbXBhcmUnLFxuXHRmb3JtYXQ6ICdqc29uJyxcblx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRwcm9wOiAnaWRzJyxcblx0dG9yZWxhdGl2ZTogJ3ByZXYnLFxufTtcblxuY29uc3QgcXVlcnlBcGkgPSBhc3luYyAoZGlmZklkOiBudW1iZXIpOiBQcm9taXNlPENvbXBhcmVSZXNwb25zZT4gPT4ge1xuXHR0cnkge1xuXHRcdHJldHVybiBhd2FpdCBhcGkuZ2V0KHtcblx0XHRcdC4uLnBhcmFtZXRlcnMsXG5cdFx0XHRmcm9tcmV2OiBkaWZmSWQsXG5cdFx0fSk7XG5cdH0gY2F0Y2ggKGVycm9yOiB1bmtub3duKSB7XG5cdFx0Y29uc29sZS5lcnJvcignW0RpZmZMaW5rXSBBamF4IGVycm9yOicsIGVycm9yKTtcblx0XHR0b2FzdGlmeShcblx0XHRcdHtcblx0XHRcdFx0dGV4dDogZ2V0TWVzc2FnZSgnTmV0d29yayBlcnJvcicpLFxuXHRcdFx0XHRjbG9zZTogdHJ1ZSxcblx0XHRcdFx0ZHVyYXRpb246IC0xLFxuXHRcdFx0fSxcblx0XHRcdCdlcnJvcidcblx0XHQpO1xuXG5cdFx0cmV0dXJuIHt9O1xuXHR9XG59O1xuXG5leHBvcnQge3F1ZXJ5QXBpfTtcbiIsICJpbXBvcnQge2J1aWxkTGlua30gZnJvbSAnLi9idWlsZExpbmsnO1xuaW1wb3J0IHtxdWVyeUFwaX0gZnJvbSAnLi91dGlsL3F1ZXJ5QXBpJztcblxuY29uc3QgY29tcGFyZVdpdGhSZW1vdGVEaWZmSWQgPSBhc3luYyAoZGlmZklkOiBudW1iZXIpOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0Y29uc3QgcmVzcG9uc2U6IEF3YWl0ZWQ8UmV0dXJuVHlwZTx0eXBlb2YgcXVlcnlBcGk+PiA9IGF3YWl0IHF1ZXJ5QXBpKGRpZmZJZCk7XG5cdGlmIChkaWZmSWQgPT09IG13LmNvbmZpZy5nZXQoJ3dnRGlmZk5ld0lkJykgJiYgcmVzcG9uc2VbJ2NvbXBhcmUnXT8uZnJvbXJldmlkID09PSBtdy5jb25maWcuZ2V0KCd3Z0RpZmZPbGRJZCcpKSB7XG5cdFx0YnVpbGRMaW5rKDAsIGRpZmZJZCk7XG5cdH1cbn07XG5cbmV4cG9ydCB7Y29tcGFyZVdpdGhSZW1vdGVEaWZmSWR9O1xuIiwgImltcG9ydCB7YWRkUG9ydGxldExpbmt9IGZyb20gJy4vYWRkUG9ydGxldExpbmsnO1xuaW1wb3J0IHtidWlsZExpbmt9IGZyb20gJy4vYnVpbGRMaW5rJztcbmltcG9ydCB7Y29tcGFyZVdpdGhSZW1vdGVEaWZmSWR9IGZyb20gJy4vY29tcGFyZVdpdGhSZW1vdGVEaWZmSWQnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL2kxOG4nO1xuXG5jb25zdCBwcm9jZXNzSWQgPSAoXG5cdGlzUmV2aXNpb25QYWdlOiBib29sZWFuLFxuXHR7ZGlmZklkLCBvbGRJZCwgcmV2aXNpb25JZH06IHtkaWZmSWQ6IG51bWJlcjsgb2xkSWQ6IG51bWJlcjsgcmV2aXNpb25JZDogbnVtYmVyfVxuKTogdm9pZCA9PiB7XG5cdGlmIChkaWZmSWQpIHtcblx0XHRidWlsZExpbmsob2xkSWQsIGRpZmZJZCk7XG5cdFx0aWYgKG9sZElkKSB7XG5cdFx0XHR2b2lkIGNvbXBhcmVXaXRoUmVtb3RlRGlmZklkKGRpZmZJZCk7XG5cdFx0fVxuXHR9IGVsc2UgaWYgKHJldmlzaW9uSWQgJiYgaXNSZXZpc2lvblBhZ2UpIHtcblx0XHRhZGRQb3J0bGV0TGluayh7XG5cdFx0XHR0ZXh0OiBnZXRNZXNzYWdlKCdQZXJtYW5lbnQnKSxcblx0XHRcdHRvb2x0aXA6IGdldE1lc3NhZ2UoJ0NvcHlQZXJtYW5lbnQnKSxcblx0XHRcdGxpbms6IGBTcGVjaWFsOlBlcm1hTGluay8ke3JldmlzaW9uSWR9YCxcblx0XHRcdGRlZmF1bHRUZXh0QXJyYXlJbmRleDogMSxcblx0XHRcdGlzUGVybWFMaW5rOiB0cnVlLFxuXHRcdH0pO1xuXHR9XG59O1xuXG5leHBvcnQge3Byb2Nlc3NJZH07XG4iLCAiaW1wb3J0IHtjaGVja0RpZmZQYWdlfSBmcm9tICcuL21vZHVsZXMvdXRpbC9jaGVja0RpZmZQYWdlJztcbmltcG9ydCB7Y2hlY2tSZXZpc2lvblBhZ2V9IGZyb20gJy4vbW9kdWxlcy91dGlsL2NoZWNrUmV2aXNpb25QYWdlJztcbmltcG9ydCB7cHJvY2Vzc0lkfSBmcm9tICcuL21vZHVsZXMvcHJvY2Vzc0lkJztcblxubXcuaG9vazxKUXVlcnlbXT4oJ3dpa2lwYWdlLmNvbnRlbnQnKS5hZGQoKCRjb250ZW50KTogdm9pZCA9PiB7XG5cdGlmICgkY29udGVudC5hdHRyKCdpZCcpICE9PSAnbXctY29udGVudC10ZXh0Jykge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IGlzRGlmZlBhZ2U6IGJvb2xlYW4gPSBjaGVja0RpZmZQYWdlKCRjb250ZW50KTtcblx0Y29uc3QgaXNSZXZpc2lvblBhZ2U6IGJvb2xlYW4gPSBjaGVja1JldmlzaW9uUGFnZSgkY29udGVudCk7XG5cdGlmICghaXNEaWZmUGFnZSAmJiAhaXNSZXZpc2lvblBhZ2UpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRwcm9jZXNzSWQoaXNSZXZpc2lvblBhZ2UsIHtcblx0XHRkaWZmSWQ6IG13LmNvbmZpZy5nZXQoJ3dnRGlmZk5ld0lkJyksXG5cdFx0b2xkSWQ6IG13LmNvbmZpZy5nZXQoJ3dnRGlmZk9sZElkJyksXG5cdFx0cmV2aXNpb25JZDogbXcuY29uZmlnLmdldCgnd2dSZXZpc2lvbklkJyksXG5cdH0pO1xufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFNQSxnQkFBaUJDLGNBQThC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LE1BQUFDLFNBQUE7RUFBQTtBQUFBLEVBQUE7O0FDRU4sSUFBTU8sWUFBWUEsQ0FDakJDLGdCQUNBO0VBQUNoQztFQUFRRDtFQUFPa0M7QUFBVSxNQUNoQjtBQUNWLE1BQUlqQyxRQUFRO0FBQ1hGLGNBQVVDLE9BQU9DLE1BQU07QUFDdkIsUUFBSUQsT0FBTztBQUNWLFdBQUswQix3QkFBd0J6QixNQUFNO0lBQ3BDO0VBQ0QsV0FBV2lDLGNBQWNELGdCQUFnQjtBQUN4Q3hFLG1CQUFlO01BQ2RDLE1BQU1aLFdBQVcsV0FBVztNQUM1QmEsU0FBU2IsV0FBVyxlQUFlO01BQ25DYyxNQUFBLHFCQUFBbUIsT0FBMkJtRCxVQUFVO01BQ3JDckUsdUJBQXVCO01BQ3ZCQyxhQUFhO0lBQ2QsQ0FBQztFQUNGO0FBQ0Q7O0FDbkJBbkMsR0FBR3dHLEtBQWUsa0JBQWtCLEVBQUVDLElBQUs1RyxjQUFtQjtBQUM3RCxNQUFJQSxTQUFTNkcsS0FBSyxJQUFJLE1BQU0sbUJBQW1CO0FBQzlDO0VBQ0Q7QUFFQSxRQUFNQyxhQUFzQi9HLGNBQWNDLFFBQVE7QUFDbEQsUUFBTXlHLGlCQUEwQm5HLGtCQUFrQk4sUUFBUTtBQUMxRCxNQUFJLENBQUM4RyxjQUFjLENBQUNMLGdCQUFnQjtBQUNuQztFQUNEO0FBRUFELFlBQVVDLGdCQUFnQjtJQUN6QmhDLFFBQVF0RSxHQUFHQyxPQUFPQyxJQUFJLGFBQWE7SUFDbkNtRSxPQUFPckUsR0FBR0MsT0FBT0MsSUFBSSxhQUFhO0lBQ2xDcUcsWUFBWXZHLEdBQUdDLE9BQU9DLElBQUksY0FBYztFQUN6QyxDQUFDO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFsiY2hlY2tEaWZmUGFnZSIsICIkY29udGVudCIsICJmaW5kIiwgImhhc0NsYXNzIiwgIm13IiwgImNvbmZpZyIsICJnZXQiLCAiY2hlY2tSZXZpc2lvblBhZ2UiLCAibGVuZ3RoIiwgImltcG9ydF9leHRfZ2FkZ2V0MiIsICJyZXF1aXJlIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgImdldEkxOG5NZXNzYWdlcyIsICJsb2NhbGl6ZSIsICJqYSIsICJDb3B5RGlmZiIsICJlbiIsICJDb3B5UGVybWFuZW50IiwgIkRpZmYiLCAiRGlmZlZlcnNpb24iLCAiUGVybWFuZW50IiwgIlBlcm1hbmVudFZlcnNpb24iLCAiaTE4bk1lc3NhZ2VzIiwgImdldE1lc3NhZ2UiLCAia2V5IiwgImRlZmF1bHRUZXh0QXJyYXkiLCAid2luZG93IiwgIkRpZmZMaW5rIiwgIk9iamVjdCIsICJwcm90b3R5cGUiLCAidG9TdHJpbmciLCAiY2FsbCIsICJldmVudExpc3RlbmVyIiwgInJlbW92ZSIsICJhZGRQb3J0bGV0TGluayIsICJ0ZXh0IiwgInRvb2x0aXAiLCAibGluayIsICJkZWZhdWx0VGV4dEFycmF5SW5kZXgiLCAiaXNQZXJtYUxpbmsiLCAiX2VsZW1lbnQkZmlyc3RFbGVtZW50IiwgImVsZW1lbnQiLCAiZG9jdW1lbnQiLCAicXVlcnlTZWxlY3RvciIsICJwb3J0bGV0SWQiLCAidXRpbCIsICJjbGlja0xpc3RlbmVyIiwgImV2ZW50IiwgInByZXZlbnREZWZhdWx0IiwgIiRlbGVtZW50IiwgIiQiLCAiaGFzaCIsICJkZWNvZGVVUklDb21wb25lbnQiLCAibG9jYXRpb24iLCAiX2kiLCAiX2FyciIsICJjb25jYXQiLCAidmFsdWUiLCAiYXBwZW5kIiwgIndpZGdldHMiLCAiQ29weVRleHRMYXlvdXQiLCAiYWxpZ24iLCAiY29weVRleHQiLCAiT08iLCAidWkiLCAiYWxlcnQiLCAic2l6ZSIsICJhZGRFdmVudExpc3RlbmVyV2l0aFJlbW92ZXIiLCAidGFyZ2V0IiwgImZpcnN0RWxlbWVudENoaWxkIiwgInR5cGUiLCAibGlzdGVuZXIiLCAiYnVpbGRMaW5rIiwgIm9sZElkIiwgImRpZmZJZCIsICJ2ZXJzaW9uIiwgIldHX1dJS0lfSUQiLCAiaW1wb3J0X2V4dF9nYWRnZXQzIiwgImFwaSIsICJpbml0TXdBcGkiLCAiaW1wb3J0X2V4dF9nYWRnZXQ0IiwgInBhcmFtZXRlcnMiLCAiYWN0aW9uIiwgImZvcm1hdCIsICJmb3JtYXR2ZXJzaW9uIiwgInByb3AiLCAidG9yZWxhdGl2ZSIsICJxdWVyeUFwaSIsICJfcmVmIiwgIl9hc3luY1RvR2VuZXJhdG9yIiwgImZyb21yZXYiLCAiZXJyb3IiLCAiY29uc29sZSIsICJ0b2FzdGlmeSIsICJjbG9zZSIsICJkdXJhdGlvbiIsICJfeCIsICJhcHBseSIsICJhcmd1bWVudHMiLCAiY29tcGFyZVdpdGhSZW1vdGVEaWZmSWQiLCAiX3JlZjIiLCAiX3Jlc3BvbnNlJGNvbXBhcmUiLCAicmVzcG9uc2UiLCAiZnJvbXJldmlkIiwgIl94MiIsICJwcm9jZXNzSWQiLCAiaXNSZXZpc2lvblBhZ2UiLCAicmV2aXNpb25JZCIsICJob29rIiwgImFkZCIsICJhdHRyIiwgImlzRGlmZlBhZ2UiXQp9Cg==

})();

/* </nowiki> */

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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0RpZmZMaW5rL21vZHVsZXMvdXRpbC9jaGVja0RpZmZQYWdlLnRzIiwgInNyYy9EaWZmTGluay9tb2R1bGVzL3V0aWwvY2hlY2tSZXZpc2lvblBhZ2UudHMiLCAic3JjL0RpZmZMaW5rL21vZHVsZXMvYWRkUG9ydGxldExpbmsudHMiLCAic3JjL0RpZmZMaW5rL21vZHVsZXMvaTE4bi50cyIsICJzcmMvRGlmZkxpbmsvbW9kdWxlcy9idWlsZExpbmsudHMiLCAic3JjL0RpZmZMaW5rL29wdGlvbnMuanNvbiIsICJzcmMvRGlmZkxpbmsvbW9kdWxlcy9hcGkudHMiLCAic3JjL0RpZmZMaW5rL21vZHVsZXMvdXRpbC9xdWVyeUFwaS50cyIsICJzcmMvRGlmZkxpbmsvbW9kdWxlcy9jb21wYXJlV2l0aFJlbW90ZURpZmZJZC50cyIsICJzcmMvRGlmZkxpbmsvbW9kdWxlcy9wcm9jZXNzSWQudHMiLCAic3JjL0RpZmZMaW5rL0RpZmZMaW5rLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBjaGVja0RpZmZQYWdlID0gKCRjb250ZW50OiBKUXVlcnkpOiBib29sZWFuID0+IHtcblx0cmV0dXJuICRjb250ZW50LmZpbmQoJ3RhYmxlJykuaGFzQ2xhc3MoJ2RpZmYnKSAmJiAhIW13LmNvbmZpZy5nZXQoJ3dnQ3VyUmV2aXNpb25JZCcpO1xufTtcblxuZXhwb3J0IHtjaGVja0RpZmZQYWdlfTtcbiIsICJjb25zdCBjaGVja1JldmlzaW9uUGFnZSA9ICgkY29udGVudDogSlF1ZXJ5KTogYm9vbGVhbiA9PiB7XG5cdHJldHVybiAoXG5cdFx0KCRjb250ZW50LmZpbmQoJyNjb250ZW50U3ViICNtdy1yZXZpc2lvbi1uYXYnKS5sZW5ndGggfHxcblx0XHRcdCRjb250ZW50LmZpbmQoJ21haW4jY29udGVudD4ucHJlLWNvbnRlbnQgI213LXJldmlzaW9uLW5hdicpLmxlbmd0aCkgPiAwXG5cdCk7XG59O1xuXG5leHBvcnQge2NoZWNrUmV2aXNpb25QYWdlfTtcbiIsICJpbXBvcnQge2FkZEV2ZW50TGlzdGVuZXJXaXRoUmVtb3Zlcn0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9pMThuJztcblxuLyoqXG4gKiDoi6Xmg7Poh6rlrprkuYnlpI3liLbnu5PmnpzkuK3nmoTmlofmnKzlj6/pgJrov4flkJHoh6rlt7HnmoRjb21tb24uanPkuK3liqDlhaXku6XkuIvlhoXlrrnvvJpcbiAqICAgd2luZG93LkRpZmZMaW5rID0gWyfniYjmnKzlt67lvIInLCAn5Zu65a6a54mI5pysJ107XG4gKiDoi6Xmg7Pkvb/nlKjpu5jorqTlgLwx77yM5L2G6Ieq5a6a5YC8Mu+8jOivt+WwhuWAvDHnlZnnqbrvvIzlpoLkuIvkvovvvJpcbiAqICAgd2luZG93LkRpZmZMaW5rID0gWycnLCAn5Zu65a6a54mI5pysJ107XG4gKi9cbmNvbnN0IGRlZmF1bHRUZXh0QXJyYXk6IFtzdHJpbmcsIHN0cmluZ10gPSBbZ2V0TWVzc2FnZSgnRGlmZlZlcnNpb24nKSwgZ2V0TWVzc2FnZSgnUGVybWFuZW50VmVyc2lvbicpXTtcbmlmICh3aW5kb3cuRGlmZkxpbmsgIT09IHVuZGVmaW5lZCAmJiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwod2luZG93LkRpZmZMaW5rKSA9PT0gJ1tvYmplY3QgQXJyYXldJykge1xuXHRpZiAod2luZG93LkRpZmZMaW5rWzBdICE9PSAnJyAmJiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwod2luZG93LkRpZmZMaW5rWzBdKSA9PT0gJ1tvYmplY3QgU3RyaW5nXScpIHtcblx0XHRbZGVmYXVsdFRleHRBcnJheVswXV0gPSB3aW5kb3cuRGlmZkxpbmsgYXMgW3N0cmluZ107XG5cdH1cblx0aWYgKHdpbmRvdy5EaWZmTGlua1sxXSAhPT0gJycgJiYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHdpbmRvdy5EaWZmTGlua1sxXSkgPT09ICdbb2JqZWN0IFN0cmluZ10nKSB7XG5cdFx0W2RlZmF1bHRUZXh0QXJyYXlbMV1dID0gd2luZG93LkRpZmZMaW5rIGFzIFtzdHJpbmcsIHN0cmluZ107XG5cdH1cbn1cblxubGV0IGV2ZW50TGlzdGVuZXI6IFJldHVyblR5cGU8dHlwZW9mIGFkZEV2ZW50TGlzdGVuZXJXaXRoUmVtb3Zlcj4gPSB7XG5cdHJlbW92ZTogKCk6IHZvaWQgPT4ge30sXG59O1xuXG5jb25zdCBhZGRQb3J0bGV0TGluayA9ICh7XG5cdHRleHQsXG5cdHRvb2x0aXAsXG5cdGxpbmssXG5cdGRlZmF1bHRUZXh0QXJyYXlJbmRleCxcblx0aXNQZXJtYUxpbmssXG59OiB7XG5cdHRleHQ6IHN0cmluZztcblx0dG9vbHRpcDogc3RyaW5nO1xuXHRsaW5rOiBzdHJpbmc7XG5cdGRlZmF1bHRUZXh0QXJyYXlJbmRleDogbnVtYmVyO1xuXHRpc1Blcm1hTGluaz86IGJvb2xlYW47XG59KTogdm9pZCA9PiB7XG5cdGxldCBlbGVtZW50OiBIVE1MTElFbGVtZW50IHwgbnVsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0LWRpZmZsaW5rJyk7XG5cdGlmICghZWxlbWVudCkge1xuXHRcdGNvbnN0IHBvcnRsZXRJZDogJ3AtY2FjdGlvbnMnIHwgJ3AtdGInID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3AtY2FjdGlvbnMnKSA/ICdwLWNhY3Rpb25zJyA6ICdwLXRiJztcblx0XHRlbGVtZW50ID0gbXcudXRpbC5hZGRQb3J0bGV0TGluayhwb3J0bGV0SWQsICcjJywgdGV4dCwgJ3QtZGlmZmxpbmsnLCB0b29sdGlwKTtcblx0fVxuXHRpZiAoIWVsZW1lbnQpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBjbGlja0xpc3RlbmVyID0gKGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCA9PiB7XG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRjb25zdCAkZWxlbWVudDogSlF1ZXJ5ID0gJCgnPGRpdj4nKTtcblx0XHRjb25zdCBoYXNoOiBzdHJpbmcgPSBpc1Blcm1hTGluayA/IGRlY29kZVVSSUNvbXBvbmVudChsb2NhdGlvbi5oYXNoKSA6ICcnO1xuXHRcdGZvciAoY29uc3QgdmFsdWUgb2YgW1xuXHRcdFx0bGluayxcblx0XHRcdGBbWyR7bGlua30ke2hhc2h9XV1gLFxuXHRcdFx0YFtbJHtsaW5rfSR7aGFzaH18JHtkZWZhdWx0VGV4dEFycmF5W2RlZmF1bHRUZXh0QXJyYXlJbmRleF19XV1gLFxuXHRcdF0pIHtcblx0XHRcdCRlbGVtZW50LmFwcGVuZChcblx0XHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnNhZmUtY2FsbCwgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVuc2FmZS1tZW1iZXItYWNjZXNzXG5cdFx0XHRcdG5ldyBtdy53aWRnZXRzLkNvcHlUZXh0TGF5b3V0KHtcblx0XHRcdFx0XHRhbGlnbjogJ3RvcCcsXG5cdFx0XHRcdFx0Y29weVRleHQ6IHZhbHVlLFxuXHRcdFx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW5zYWZlLW1lbWJlci1hY2Nlc3Ncblx0XHRcdFx0fSkuJGVsZW1lbnQgYXMgSlF1ZXJ5XG5cdFx0XHQpO1xuXHRcdH1cblx0XHR2b2lkIE9PLnVpLmFsZXJ0KCRlbGVtZW50LCB7XG5cdFx0XHRzaXplOiAnbWVkaXVtJyxcblx0XHR9KTtcblx0fTtcblxuXHRldmVudExpc3RlbmVyLnJlbW92ZSgpO1xuXHRldmVudExpc3RlbmVyID0gYWRkRXZlbnRMaXN0ZW5lcldpdGhSZW1vdmVyKHtcblx0XHR0YXJnZXQ6IChlbGVtZW50LmZpcnN0RWxlbWVudENoaWxkID8/IGVsZW1lbnQpIGFzIEhUTUxFbGVtZW50LFxuXHRcdHR5cGU6ICdjbGljaycsXG5cdFx0bGlzdGVuZXI6IGNsaWNrTGlzdGVuZXIsXG5cdH0pO1xufTtcblxuZXhwb3J0IHthZGRQb3J0bGV0TGlua307XG4iLCAiaW1wb3J0IHtsb2NhbGl6ZX0gZnJvbSAnZXh0LmdhZGdldC5pMThuJztcblxuY29uc3QgZ2V0STE4bk1lc3NhZ2VzID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdCdOZXR3b3JrIGVycm9yJzogbG9jYWxpemUoe1xuXHRcdFx0amE6ICfjg43jg4Pjg4jjg6/jg7zjgq/jgqjjg6njg7wnLFxuXHRcdFx0J3poLWhhbnMnOiAn572R57uc5byC5bi4Jyxcblx0XHRcdCd6aC1oYW50JzogJ+e2sui3r+eVsOW4uCcsXG5cdFx0fSksXG5cdFx0Q29weURpZmY6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQ29weSB0aGUgbGluayB0byB0aGUgZGlmZiB2ZXJzaW9uICh3aWtpIHN5bnRheCknLFxuXHRcdFx0amE6ICfnj77lnKjjga7niYjplpPjga7lt67liIbjg6rjg7Pjgq/jgpLjgrPjg5Tjg7zjgZfjgb7jgZnvvIjjgqbjgqPjgq3oqJjms5XvvIknLFxuXHRcdFx0J3poLWhhbnMnOiAn5aSN5Yi26ZO+5o6l5Yiw5b2T5YmN5beu5byC54mI5pys55qE57u05Z+66K+t5rOVJyxcblx0XHRcdCd6aC1oYW50JzogJ+ikh+ijvemAo+e1kOWIsOeVtuWJjeW3rueVsOeJiOacrOeahOe2reWfuuiqnuazlScsXG5cdFx0fSksXG5cdFx0Q29weVBlcm1hbmVudDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdDb3B5IHRoZSBwZXJtYW5lbnQgbGluayB0byB0aGUgY3VycmVudCB2ZXJzaW9uICh3aWtpIHN5bnRheCknLFxuXHRcdFx0amE6ICfjgZPjga7jg5rjg7zjgrjjga7jgZPjga7niYjjgbjjga7lm7rlrprjg6rjg7Pjgq/jgpLjgrPjg5Tjg7zjgZfjgb7jgZnvvIjjgqbjgqPjgq3oqJjms5XvvIknLFxuXHRcdFx0J3poLWhhbnMnOiAn5aSN5Yi26ZO+5o6l5Yiw5b2T5YmN5L+u6K6i54mI5pys55qE57u05Z+66K+t5rOVJyxcblx0XHRcdCd6aC1oYW50JzogJ+ikh+ijvemAo+e1kOWIsOeVtuWJjeS/ruiogueJiOacrOeahOe2reWfuuiqnuazlScsXG5cdFx0fSksXG5cdFx0RGlmZjogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdEaWZmIGxpbmsnLFxuXHRcdFx0amE6ICfnj77lnKjjga7niYjplpPjga7lt67liIbjg6rjg7Pjgq8nLFxuXHRcdFx0J3poLWhhbnMnOiAn5b2T5YmN5beu5byC6ZO+5o6lJyxcblx0XHRcdCd6aC1oYW50JzogJ+eVtuWJjeW3rueVsOmAo+e1kCcsXG5cdFx0fSksXG5cdFx0RGlmZlZlcnNpb246IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnZGlmZiB2ZXJzaW9uJyxcblx0XHRcdGphOiAn54mI6ZaT44Gu5beu5YiGJyxcblx0XHRcdCd6aC1oYW5zJzogJ+W3ruW8gueJiOacrCcsXG5cdFx0XHQnemgtaGFudCc6ICflt67nlbDniYjmnKwnLFxuXHRcdH0pLFxuXHRcdFBlcm1hbmVudDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdQZXJtYW5lbnQgbGluaycsXG5cdFx0XHRqYTogJ+OBk+OBrueJiOOBuOOBruWbuuWumuODquODs+OCrycsXG5cdFx0XHQnemgtaGFucyc6ICflvZPliY3kv67orqLpk77mjqUnLFxuXHRcdFx0J3poLWhhbnQnOiAn55W25YmN5L+u6KiC6YCj57WQJyxcblx0XHR9KSxcblx0XHRQZXJtYW5lbnRWZXJzaW9uOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ3Blcm1hbmVudCB2ZXJzaW9uJyxcblx0XHRcdGphOiAn54mI44G444Gu5Zu65a6a44Oq44Oz44KvJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WbuuWumueJiOacrOmTvuaOpScsXG5cdFx0XHQnemgtaGFudCc6ICflm7rlrprniYjmnKzpgKPntZAnLFxuXHRcdH0pLFxuXHR9O1xufTtcblxuY29uc3QgaTE4bk1lc3NhZ2VzID0gZ2V0STE4bk1lc3NhZ2VzKCk7XG5cbmNvbnN0IGdldE1lc3NhZ2U6IEdldE1lc3NhZ2VzPHR5cGVvZiBpMThuTWVzc2FnZXM+ID0gKGtleSkgPT4ge1xuXHRyZXR1cm4gaTE4bk1lc3NhZ2VzW2tleV0gfHwga2V5O1xufTtcblxuZXhwb3J0IHtnZXRNZXNzYWdlfTtcbiIsICJpbXBvcnQge2FkZFBvcnRsZXRMaW5rfSBmcm9tICcuL2FkZFBvcnRsZXRMaW5rJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9pMThuJztcblxuY29uc3QgYnVpbGRMaW5rID0gKG9sZElkOiBudW1iZXIsIGRpZmZJZDogbnVtYmVyKTogdm9pZCA9PiB7XG5cdGxldCBsaW5rOiBzdHJpbmcgPSAnU3BlY2lhbDpEaWZmLyc7XG5cdGlmIChvbGRJZCkge1xuXHRcdGxpbmsgKz0gYCR7b2xkSWR9L2A7XG5cdH1cblx0bGluayArPSBkaWZmSWQ7XG5cblx0YWRkUG9ydGxldExpbmsoe1xuXHRcdGxpbmssXG5cdFx0dGV4dDogZ2V0TWVzc2FnZSgnRGlmZicpLFxuXHRcdHRvb2x0aXA6IGdldE1lc3NhZ2UoJ0NvcHlEaWZmJyksXG5cdFx0ZGVmYXVsdFRleHRBcnJheUluZGV4OiAwLFxuXHR9KTtcbn07XG5cbmV4cG9ydCB7YnVpbGRMaW5rfTtcbiIsICJ7XG5cdFwidmVyc2lvblwiOiBcIjIuMFwiXG59XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtpbml0TXdBcGl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmNvbnN0IGFwaTogbXcuQXBpID0gaW5pdE13QXBpKGBEaWZmTGluay8ke09QVElPTlMudmVyc2lvbn1gKTtcblxuZXhwb3J0IHthcGl9O1xuIiwgImltcG9ydCB7YXBpfSBmcm9tICcuLi9hcGknO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuLi9pMThuJztcbmltcG9ydCB7dG9hc3RpZnl9IGZyb20gJ2V4dC5nYWRnZXQuVG9hc3RpZnknO1xuXG50eXBlIENvbXBhcmVSZXNwb25zZSA9IHtcblx0Y29tcGFyZT86IHtcblx0XHRmcm9tcmV2aWQ6IG51bWJlcjtcblx0fTtcbn07XG5cbmNvbnN0IHBhcmFtZXRlcnM6IEFwaUNvbXBhcmVQYWdlc1BhcmFtcyA9IHtcblx0YWN0aW9uOiAnY29tcGFyZScsXG5cdGZvcm1hdDogJ2pzb24nLFxuXHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdHByb3A6ICdpZHMnLFxuXHR0b3JlbGF0aXZlOiAncHJldicsXG59O1xuXG5jb25zdCBxdWVyeUFwaSA9IGFzeW5jIChkaWZmSWQ6IG51bWJlcik6IFByb21pc2U8Q29tcGFyZVJlc3BvbnNlPiA9PiB7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIGF3YWl0IGFwaS5nZXQoe1xuXHRcdFx0Li4ucGFyYW1ldGVycyxcblx0XHRcdGZyb21yZXY6IGRpZmZJZCxcblx0XHR9KTtcblx0fSBjYXRjaCAoZXJyb3I6IHVua25vd24pIHtcblx0XHRjb25zb2xlLmVycm9yKCdbRGlmZkxpbmtdIEFqYXggZXJyb3I6JywgZXJyb3IpO1xuXHRcdHRvYXN0aWZ5KFxuXHRcdFx0e1xuXHRcdFx0XHR0ZXh0OiBnZXRNZXNzYWdlKCdOZXR3b3JrIGVycm9yJyksXG5cdFx0XHRcdGNsb3NlOiB0cnVlLFxuXHRcdFx0XHRkdXJhdGlvbjogLTEsXG5cdFx0XHR9LFxuXHRcdFx0J2Vycm9yJ1xuXHRcdCk7XG5cblx0XHRyZXR1cm4ge307XG5cdH1cbn07XG5cbmV4cG9ydCB7cXVlcnlBcGl9O1xuIiwgImltcG9ydCB7YnVpbGRMaW5rfSBmcm9tICcuL2J1aWxkTGluayc7XG5pbXBvcnQge3F1ZXJ5QXBpfSBmcm9tICcuL3V0aWwvcXVlcnlBcGknO1xuXG5jb25zdCBjb21wYXJlV2l0aFJlbW90ZURpZmZJZCA9IGFzeW5jIChkaWZmSWQ6IG51bWJlcik6IFByb21pc2U8dm9pZD4gPT4ge1xuXHRjb25zdCByZXNwb25zZTogQXdhaXRlZDxSZXR1cm5UeXBlPHR5cGVvZiBxdWVyeUFwaT4+ID0gYXdhaXQgcXVlcnlBcGkoZGlmZklkKTtcblx0aWYgKGRpZmZJZCA9PT0gbXcuY29uZmlnLmdldCgnd2dEaWZmTmV3SWQnKSAmJiByZXNwb25zZVsnY29tcGFyZSddPy5mcm9tcmV2aWQgPT09IG13LmNvbmZpZy5nZXQoJ3dnRGlmZk9sZElkJykpIHtcblx0XHRidWlsZExpbmsoMCwgZGlmZklkKTtcblx0fVxufTtcblxuZXhwb3J0IHtjb21wYXJlV2l0aFJlbW90ZURpZmZJZH07XG4iLCAiaW1wb3J0IHthZGRQb3J0bGV0TGlua30gZnJvbSAnLi9hZGRQb3J0bGV0TGluayc7XG5pbXBvcnQge2J1aWxkTGlua30gZnJvbSAnLi9idWlsZExpbmsnO1xuaW1wb3J0IHtjb21wYXJlV2l0aFJlbW90ZURpZmZJZH0gZnJvbSAnLi9jb21wYXJlV2l0aFJlbW90ZURpZmZJZCc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vaTE4bic7XG5cbmNvbnN0IHByb2Nlc3NJZCA9IChcblx0aXNSZXZpc2lvblBhZ2U6IGJvb2xlYW4sXG5cdHtkaWZmSWQsIG9sZElkLCByZXZpc2lvbklkfToge2RpZmZJZDogbnVtYmVyOyBvbGRJZDogbnVtYmVyOyByZXZpc2lvbklkOiBudW1iZXJ9XG4pOiB2b2lkID0+IHtcblx0aWYgKGRpZmZJZCkge1xuXHRcdGJ1aWxkTGluayhvbGRJZCwgZGlmZklkKTtcblx0XHRpZiAob2xkSWQpIHtcblx0XHRcdHZvaWQgY29tcGFyZVdpdGhSZW1vdGVEaWZmSWQoZGlmZklkKTtcblx0XHR9XG5cdH0gZWxzZSBpZiAocmV2aXNpb25JZCAmJiBpc1JldmlzaW9uUGFnZSkge1xuXHRcdGFkZFBvcnRsZXRMaW5rKHtcblx0XHRcdHRleHQ6IGdldE1lc3NhZ2UoJ1Blcm1hbmVudCcpLFxuXHRcdFx0dG9vbHRpcDogZ2V0TWVzc2FnZSgnQ29weVBlcm1hbmVudCcpLFxuXHRcdFx0bGluazogYFNwZWNpYWw6UGVybWFMaW5rLyR7cmV2aXNpb25JZH1gLFxuXHRcdFx0ZGVmYXVsdFRleHRBcnJheUluZGV4OiAxLFxuXHRcdFx0aXNQZXJtYUxpbms6IHRydWUsXG5cdFx0fSk7XG5cdH1cbn07XG5cbmV4cG9ydCB7cHJvY2Vzc0lkfTtcbiIsICJpbXBvcnQge2NoZWNrRGlmZlBhZ2V9IGZyb20gJy4vbW9kdWxlcy91dGlsL2NoZWNrRGlmZlBhZ2UnO1xuaW1wb3J0IHtjaGVja1JldmlzaW9uUGFnZX0gZnJvbSAnLi9tb2R1bGVzL3V0aWwvY2hlY2tSZXZpc2lvblBhZ2UnO1xuaW1wb3J0IHtwcm9jZXNzSWR9IGZyb20gJy4vbW9kdWxlcy9wcm9jZXNzSWQnO1xuXG5tdy5ob29rKCd3aWtpcGFnZS5jb250ZW50JykuYWRkKCgkY29udGVudCk6IHZvaWQgPT4ge1xuXHRpZiAoJGNvbnRlbnQuYXR0cignaWQnKSAhPT0gJ213LWNvbnRlbnQtdGV4dCcpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBpc0RpZmZQYWdlOiBib29sZWFuID0gY2hlY2tEaWZmUGFnZSgkY29udGVudCk7XG5cdGNvbnN0IGlzUmV2aXNpb25QYWdlOiBib29sZWFuID0gY2hlY2tSZXZpc2lvblBhZ2UoJGNvbnRlbnQpO1xuXHRpZiAoIWlzRGlmZlBhZ2UgJiYgIWlzUmV2aXNpb25QYWdlKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0cHJvY2Vzc0lkKGlzUmV2aXNpb25QYWdlLCB7XG5cdFx0ZGlmZklkOiBtdy5jb25maWcuZ2V0KCd3Z0RpZmZOZXdJZCcpLFxuXHRcdG9sZElkOiBtdy5jb25maWcuZ2V0KCd3Z0RpZmZPbGRJZCcpLFxuXHRcdHJldmlzaW9uSWQ6IG13LmNvbmZpZy5nZXQoJ3dnUmV2aXNpb25JZCcpLFxuXHR9KTtcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsZ0JBQWlCQyxjQUE4QjtBQUNwRCxTQUFPQSxTQUFTQyxLQUFLLE9BQU8sRUFBRUMsU0FBUyxNQUFNLEtBQUssQ0FBQyxDQUFDQyxHQUFHQyxPQUFPQyxJQUFJLGlCQUFpQjtBQUNwRjs7QUNGQSxJQUFNQyxvQkFBcUJOLGNBQThCO0FBQ3hELFVBQ0VBLFNBQVNDLEtBQUssOEJBQThCLEVBQUVNLFVBQzlDUCxTQUFTQyxLQUFLLDRDQUE0QyxFQUFFTSxVQUFVO0FBRXpFOztB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QSxxQkFBQW1CLE9BQTJCa0QsVUFBVTtNQUNyQ3BFLHVCQUF1QjtNQUN2QkMsYUFBYTtJQUNkLENBQUM7RUFDRjtBQUNEOztBQ25CQW5DLEdBQUd1RyxLQUFLLGtCQUFrQixFQUFFQyxJQUFLM0csY0FBbUI7QUFDbkQsTUFBSUEsU0FBUzRHLEtBQUssSUFBSSxNQUFNLG1CQUFtQjtBQUM5QztFQUNEO0FBRUEsUUFBTUMsYUFBc0I5RyxjQUFjQyxRQUFRO0FBQ2xELFFBQU13RyxpQkFBMEJsRyxrQkFBa0JOLFFBQVE7QUFDMUQsTUFBSSxDQUFDNkcsY0FBYyxDQUFDTCxnQkFBZ0I7QUFDbkM7RUFDRDtBQUVBRCxZQUFVQyxnQkFBZ0I7SUFDekIvQixRQUFRdEUsR0FBR0MsT0FBT0MsSUFBSSxhQUFhO0lBQ25DbUUsT0FBT3JFLEdBQUdDLE9BQU9DLElBQUksYUFBYTtJQUNsQ29HLFlBQVl0RyxHQUFHQyxPQUFPQyxJQUFJLGNBQWM7RUFDekMsQ0FBQztBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbImNoZWNrRGlmZlBhZ2UiLCAiJGNvbnRlbnQiLCAiZmluZCIsICJoYXNDbGFzcyIsICJtdyIsICJjb25maWciLCAiZ2V0IiwgImNoZWNrUmV2aXNpb25QYWdlIiwgImxlbmd0aCIsICJpbXBvcnRfZXh0X2dhZGdldDIiLCAicmVxdWlyZSIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJnZXRJMThuTWVzc2FnZXMiLCAibG9jYWxpemUiLCAiamEiLCAiQ29weURpZmYiLCAiZW4iLCAiQ29weVBlcm1hbmVudCIsICJEaWZmIiwgIkRpZmZWZXJzaW9uIiwgIlBlcm1hbmVudCIsICJQZXJtYW5lbnRWZXJzaW9uIiwgImkxOG5NZXNzYWdlcyIsICJnZXRNZXNzYWdlIiwgImtleSIsICJkZWZhdWx0VGV4dEFycmF5IiwgIndpbmRvdyIsICJEaWZmTGluayIsICJPYmplY3QiLCAicHJvdG90eXBlIiwgInRvU3RyaW5nIiwgImNhbGwiLCAiZXZlbnRMaXN0ZW5lciIsICJyZW1vdmUiLCAiYWRkUG9ydGxldExpbmsiLCAidGV4dCIsICJ0b29sdGlwIiwgImxpbmsiLCAiZGVmYXVsdFRleHRBcnJheUluZGV4IiwgImlzUGVybWFMaW5rIiwgIl9lbGVtZW50JGZpcnN0RWxlbWVudCIsICJlbGVtZW50IiwgImRvY3VtZW50IiwgInF1ZXJ5U2VsZWN0b3IiLCAicG9ydGxldElkIiwgInV0aWwiLCAiY2xpY2tMaXN0ZW5lciIsICJldmVudCIsICJwcmV2ZW50RGVmYXVsdCIsICIkZWxlbWVudCIsICIkIiwgImhhc2giLCAiZGVjb2RlVVJJQ29tcG9uZW50IiwgImxvY2F0aW9uIiwgIl9pIiwgIl9hcnIiLCAiY29uY2F0IiwgInZhbHVlIiwgImFwcGVuZCIsICJ3aWRnZXRzIiwgIkNvcHlUZXh0TGF5b3V0IiwgImFsaWduIiwgImNvcHlUZXh0IiwgIk9PIiwgInVpIiwgImFsZXJ0IiwgInNpemUiLCAiYWRkRXZlbnRMaXN0ZW5lcldpdGhSZW1vdmVyIiwgInRhcmdldCIsICJmaXJzdEVsZW1lbnRDaGlsZCIsICJ0eXBlIiwgImxpc3RlbmVyIiwgImJ1aWxkTGluayIsICJvbGRJZCIsICJkaWZmSWQiLCAidmVyc2lvbiIsICJpbXBvcnRfZXh0X2dhZGdldDMiLCAiYXBpIiwgImluaXRNd0FwaSIsICJpbXBvcnRfZXh0X2dhZGdldDQiLCAicGFyYW1ldGVycyIsICJhY3Rpb24iLCAiZm9ybWF0IiwgImZvcm1hdHZlcnNpb24iLCAicHJvcCIsICJ0b3JlbGF0aXZlIiwgInF1ZXJ5QXBpIiwgIl9yZWYiLCAiX2FzeW5jVG9HZW5lcmF0b3IiLCAiZnJvbXJldiIsICJlcnJvciIsICJjb25zb2xlIiwgInRvYXN0aWZ5IiwgImNsb3NlIiwgImR1cmF0aW9uIiwgIl94IiwgImFwcGx5IiwgImFyZ3VtZW50cyIsICJjb21wYXJlV2l0aFJlbW90ZURpZmZJZCIsICJfcmVmMiIsICJfcmVzcG9uc2UkY29tcGFyZSIsICJyZXNwb25zZSIsICJmcm9tcmV2aWQiLCAiX3gyIiwgInByb2Nlc3NJZCIsICJpc1JldmlzaW9uUGFnZSIsICJyZXZpc2lvbklkIiwgImhvb2siLCAiYWRkIiwgImF0dHIiLCAiaXNEaWZmUGFnZSJdCn0K

})();

/* </nowiki> */

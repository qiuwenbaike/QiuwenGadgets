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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0RpZmZMaW5rL21vZHVsZXMvdXRpbC9jaGVja0RpZmZQYWdlLnRzIiwgInNyYy9EaWZmTGluay9tb2R1bGVzL3V0aWwvY2hlY2tSZXZpc2lvblBhZ2UudHMiLCAic3JjL0RpZmZMaW5rL21vZHVsZXMvYWRkUG9ydGxldExpbmsudHMiLCAic3JjL0RpZmZMaW5rL21vZHVsZXMvaTE4bi50cyIsICJzcmMvRGlmZkxpbmsvbW9kdWxlcy9idWlsZExpbmsudHMiLCAic3JjL0RpZmZMaW5rL29wdGlvbnMuanNvbiIsICJzcmMvRGlmZkxpbmsvbW9kdWxlcy9hcGkudHMiLCAic3JjL0RpZmZMaW5rL21vZHVsZXMvdXRpbC9xdWVyeUFwaS50cyIsICJzcmMvRGlmZkxpbmsvbW9kdWxlcy9jb21wYXJlV2l0aFJlbW90ZURpZmZJZC50cyIsICJzcmMvRGlmZkxpbmsvbW9kdWxlcy9wcm9jZXNzSWQudHMiLCAic3JjL0RpZmZMaW5rL0RpZmZMaW5rLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBjaGVja0RpZmZQYWdlID0gKCRjb250ZW50OiBKUXVlcnkpOiBib29sZWFuID0+IHtcblx0cmV0dXJuICRjb250ZW50LmZpbmQoJ3RhYmxlJykuaGFzQ2xhc3MoJ2RpZmYnKSAmJiAhIW13LmNvbmZpZy5nZXQoJ3dnQ3VyUmV2aXNpb25JZCcpO1xufTtcblxuZXhwb3J0IHtjaGVja0RpZmZQYWdlfTtcbiIsICJjb25zdCBjaGVja1JldmlzaW9uUGFnZSA9ICgkY29udGVudDogSlF1ZXJ5KTogYm9vbGVhbiA9PiB7XG5cdHJldHVybiAoXG5cdFx0KCRjb250ZW50LmZpbmQoJyNjb250ZW50U3ViICNtdy1yZXZpc2lvbi1uYXYnKS5sZW5ndGggfHxcblx0XHRcdCRjb250ZW50LmZpbmQoJ21haW4jY29udGVudD4ucHJlLWNvbnRlbnQgI213LXJldmlzaW9uLW5hdicpLmxlbmd0aCkgPiAwXG5cdCk7XG59O1xuXG5leHBvcnQge2NoZWNrUmV2aXNpb25QYWdlfTtcbiIsICJpbXBvcnQge2FkZEV2ZW50TGlzdGVuZXJXaXRoUmVtb3Zlcn0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9pMThuJztcblxuLyoqXG4gKiDoi6Xmg7Poh6rlrprkuYnlpI3liLbnu5PmnpzkuK3nmoTmlofmnKzlj6/pgJrov4flkJHoh6rlt7HnmoRjb21tb24uanPkuK3liqDlhaXku6XkuIvlhoXlrrnvvJpcbiAqICAgd2luZG93LkRpZmZMaW5rID0gWyfniYjmnKzlt67lvIInLCAn5Zu65a6a54mI5pysJ107XG4gKiDoi6Xmg7Pkvb/nlKjpu5jorqTlgLwx77yM5L2G6Ieq5a6a5YC8Mu+8jOivt+WwhuWAvDHnlZnnqbrvvIzlpoLkuIvkvovvvJpcbiAqICAgd2luZG93LkRpZmZMaW5rID0gWycnLCAn5Zu65a6a54mI5pysJ107XG4gKi9cbmNvbnN0IGRlZmF1bHRUZXh0QXJyYXk6IFtzdHJpbmcsIHN0cmluZ10gPSBbZ2V0TWVzc2FnZSgnRGlmZlZlcnNpb24nKSwgZ2V0TWVzc2FnZSgnUGVybWFuZW50VmVyc2lvbicpXTtcbmlmICh3aW5kb3cuRGlmZkxpbmsgIT09IHVuZGVmaW5lZCAmJiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwod2luZG93LkRpZmZMaW5rKSA9PT0gJ1tvYmplY3QgQXJyYXldJykge1xuXHRpZiAod2luZG93LkRpZmZMaW5rWzBdICE9PSAnJyAmJiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwod2luZG93LkRpZmZMaW5rWzBdKSA9PT0gJ1tvYmplY3QgU3RyaW5nXScpIHtcblx0XHRbZGVmYXVsdFRleHRBcnJheVswXV0gPSB3aW5kb3cuRGlmZkxpbmsgYXMgW3N0cmluZ107XG5cdH1cblx0aWYgKHdpbmRvdy5EaWZmTGlua1sxXSAhPT0gJycgJiYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHdpbmRvdy5EaWZmTGlua1sxXSkgPT09ICdbb2JqZWN0IFN0cmluZ10nKSB7XG5cdFx0W2RlZmF1bHRUZXh0QXJyYXlbMV1dID0gd2luZG93LkRpZmZMaW5rIGFzIFtzdHJpbmcsIHN0cmluZ107XG5cdH1cbn1cblxubGV0IGV2ZW50TGlzdGVuZXI6IFJldHVyblR5cGU8dHlwZW9mIGFkZEV2ZW50TGlzdGVuZXJXaXRoUmVtb3Zlcj4gPSB7XG5cdHJlbW92ZTogKCk6IHZvaWQgPT4ge30sXG59O1xuXG5jb25zdCBhZGRQb3J0bGV0TGluayA9ICh7XG5cdHRleHQsXG5cdHRvb2x0aXAsXG5cdGxpbmssXG5cdGRlZmF1bHRUZXh0QXJyYXlJbmRleCxcblx0aXNQZXJtYUxpbmssXG59OiB7XG5cdHRleHQ6IHN0cmluZztcblx0dG9vbHRpcDogc3RyaW5nO1xuXHRsaW5rOiBzdHJpbmc7XG5cdGRlZmF1bHRUZXh0QXJyYXlJbmRleDogbnVtYmVyO1xuXHRpc1Blcm1hTGluaz86IGJvb2xlYW47XG59KTogdm9pZCA9PiB7XG5cdGxldCBlbGVtZW50OiBIVE1MTElFbGVtZW50IHwgbnVsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0LWRpZmZsaW5rJyk7XG5cdGlmICghZWxlbWVudCkge1xuXHRcdGNvbnN0IHBvcnRsZXRJZDogJ3AtY2FjdGlvbnMnIHwgJ3AtdGInID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3AtY2FjdGlvbnMnKSA/ICdwLWNhY3Rpb25zJyA6ICdwLXRiJztcblx0XHRlbGVtZW50ID0gbXcudXRpbC5hZGRQb3J0bGV0TGluayhwb3J0bGV0SWQsICcjJywgdGV4dCwgJ3QtZGlmZmxpbmsnLCB0b29sdGlwKTtcblx0fVxuXHRpZiAoIWVsZW1lbnQpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBjbGlja0xpc3RlbmVyID0gKGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCA9PiB7XG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRjb25zdCAkZWxlbWVudDogSlF1ZXJ5ID0gJCgnPGRpdj4nKTtcblx0XHRjb25zdCBoYXNoOiBzdHJpbmcgPSBpc1Blcm1hTGluayA/IGRlY29kZVVSSUNvbXBvbmVudChsb2NhdGlvbi5oYXNoKSA6ICcnO1xuXHRcdGZvciAoY29uc3QgdmFsdWUgb2YgW1xuXHRcdFx0bGluayxcblx0XHRcdGBbWyR7bGlua30ke2hhc2h9XV1gLFxuXHRcdFx0YFtbJHtsaW5rfSR7aGFzaH18JHtkZWZhdWx0VGV4dEFycmF5W2RlZmF1bHRUZXh0QXJyYXlJbmRleF19XV1gLFxuXHRcdF0pIHtcblx0XHRcdCRlbGVtZW50LmFwcGVuZChcblx0XHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnNhZmUtY2FsbCwgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVuc2FmZS1tZW1iZXItYWNjZXNzXG5cdFx0XHRcdG5ldyBtdy53aWRnZXRzLkNvcHlUZXh0TGF5b3V0KHtcblx0XHRcdFx0XHRhbGlnbjogJ3RvcCcsXG5cdFx0XHRcdFx0Y29weVRleHQ6IHZhbHVlLFxuXHRcdFx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW5zYWZlLW1lbWJlci1hY2Nlc3Ncblx0XHRcdFx0fSkuJGVsZW1lbnQgYXMgSlF1ZXJ5XG5cdFx0XHQpO1xuXHRcdH1cblx0XHR2b2lkIE9PLnVpLmFsZXJ0KCRlbGVtZW50LCB7XG5cdFx0XHRzaXplOiAnbWVkaXVtJyxcblx0XHR9KTtcblx0fTtcblxuXHRldmVudExpc3RlbmVyLnJlbW92ZSgpO1xuXHRldmVudExpc3RlbmVyID0gYWRkRXZlbnRMaXN0ZW5lcldpdGhSZW1vdmVyKHtcblx0XHR0YXJnZXQ6IChlbGVtZW50LmZpcnN0RWxlbWVudENoaWxkID8/IGVsZW1lbnQpIGFzIEhUTUxFbGVtZW50LFxuXHRcdHR5cGU6ICdjbGljaycsXG5cdFx0bGlzdGVuZXI6IGNsaWNrTGlzdGVuZXIsXG5cdH0pO1xufTtcblxuZXhwb3J0IHthZGRQb3J0bGV0TGlua307XG4iLCAiaW1wb3J0IHtsb2NhbGl6ZX0gZnJvbSAnZXh0LmdhZGdldC5pMThuJztcblxuY29uc3QgZ2V0STE4bk1lc3NhZ2VzID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdCdOZXR3b3JrIGVycm9yJzogbG9jYWxpemUoe1xuXHRcdFx0amE6ICfjg43jg4Pjg4jjg6/jg7zjgq/jgqjjg6njg7wnLFxuXHRcdFx0J3poLWhhbnMnOiAn572R57uc5byC5bi4Jyxcblx0XHRcdCd6aC1oYW50JzogJ+e2sui3r+eVsOW4uCcsXG5cdFx0fSksXG5cdFx0Q29weURpZmY6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQ29weSB0aGUgbGluayB0byB0aGUgZGlmZiB2ZXJzaW9uICh3aWtpIHN5bnRheCknLFxuXHRcdFx0amE6ICfnj77lnKjjga7niYjplpPjga7lt67liIbjg6rjg7Pjgq/jgpLjgrPjg5Tjg7zjgZfjgb7jgZnvvIjjgqbjgqPjgq3oqJjms5XvvIknLFxuXHRcdFx0J3poLWhhbnMnOiAn5aSN5Yi26ZO+5o6l5Yiw5b2T5YmN5beu5byC54mI5pys55qE57u05Z+66K+t5rOVJyxcblx0XHRcdCd6aC1oYW50JzogJ+ikh+ijvemAo+e1kOWIsOeVtuWJjeW3rueVsOeJiOacrOeahOe2reWfuuiqnuazlScsXG5cdFx0fSksXG5cdFx0Q29weVBlcm1hbmVudDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdDb3B5IHRoZSBwZXJtYW5lbnQgbGluayB0byB0aGUgY3VycmVudCB2ZXJzaW9uICh3aWtpIHN5bnRheCknLFxuXHRcdFx0amE6ICfjgZPjga7jg5rjg7zjgrjjga7jgZPjga7niYjjgbjjga7lm7rlrprjg6rjg7Pjgq/jgpLjgrPjg5Tjg7zjgZfjgb7jgZnvvIjjgqbjgqPjgq3oqJjms5XvvIknLFxuXHRcdFx0J3poLWhhbnMnOiAn5aSN5Yi26ZO+5o6l5Yiw5b2T5YmN5L+u6K6i54mI5pys55qE57u05Z+66K+t5rOVJyxcblx0XHRcdCd6aC1oYW50JzogJ+ikh+ijvemAo+e1kOWIsOeVtuWJjeS/ruiogueJiOacrOeahOe2reWfuuiqnuazlScsXG5cdFx0fSksXG5cdFx0RGlmZjogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdEaWZmIGxpbmsnLFxuXHRcdFx0amE6ICfnj77lnKjjga7niYjplpPjga7lt67liIbjg6rjg7Pjgq8nLFxuXHRcdFx0J3poLWhhbnMnOiAn5b2T5YmN5beu5byC6ZO+5o6lJyxcblx0XHRcdCd6aC1oYW50JzogJ+eVtuWJjeW3rueVsOmAo+e1kCcsXG5cdFx0fSksXG5cdFx0RGlmZlZlcnNpb246IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnZGlmZiB2ZXJzaW9uJyxcblx0XHRcdGphOiAn54mI6ZaT44Gu5beu5YiGJyxcblx0XHRcdCd6aC1oYW5zJzogJ+W3ruW8gueJiOacrCcsXG5cdFx0XHQnemgtaGFudCc6ICflt67nlbDniYjmnKwnLFxuXHRcdH0pLFxuXHRcdFBlcm1hbmVudDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdQZXJtYW5lbnQgbGluaycsXG5cdFx0XHRqYTogJ+OBk+OBrueJiOOBuOOBruWbuuWumuODquODs+OCrycsXG5cdFx0XHQnemgtaGFucyc6ICflvZPliY3kv67orqLpk77mjqUnLFxuXHRcdFx0J3poLWhhbnQnOiAn55W25YmN5L+u6KiC6YCj57WQJyxcblx0XHR9KSxcblx0XHRQZXJtYW5lbnRWZXJzaW9uOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ3Blcm1hbmVudCB2ZXJzaW9uJyxcblx0XHRcdGphOiAn54mI44G444Gu5Zu65a6a44Oq44Oz44KvJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WbuuWumueJiOacrOmTvuaOpScsXG5cdFx0XHQnemgtaGFudCc6ICflm7rlrprniYjmnKzpgKPntZAnLFxuXHRcdH0pLFxuXHR9O1xufTtcblxuY29uc3QgaTE4bk1lc3NhZ2VzID0gZ2V0STE4bk1lc3NhZ2VzKCk7XG5cbmNvbnN0IGdldE1lc3NhZ2U6IEdldE1lc3NhZ2VzPHR5cGVvZiBpMThuTWVzc2FnZXM+ID0gKGtleSkgPT4ge1xuXHRyZXR1cm4gaTE4bk1lc3NhZ2VzW2tleV0gfHwga2V5O1xufTtcblxuZXhwb3J0IHtnZXRNZXNzYWdlfTtcbiIsICJpbXBvcnQge2FkZFBvcnRsZXRMaW5rfSBmcm9tICcuL2FkZFBvcnRsZXRMaW5rJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9pMThuJztcblxuY29uc3QgYnVpbGRMaW5rID0gKG9sZElkOiBudW1iZXIsIGRpZmZJZDogbnVtYmVyKTogdm9pZCA9PiB7XG5cdGxldCBsaW5rOiBzdHJpbmcgPSAnU3BlY2lhbDpEaWZmLyc7XG5cdGlmIChvbGRJZCkge1xuXHRcdGxpbmsgKz0gYCR7b2xkSWR9L2A7XG5cdH1cblx0bGluayArPSBkaWZmSWQ7XG5cblx0YWRkUG9ydGxldExpbmsoe1xuXHRcdGxpbmssXG5cdFx0dGV4dDogZ2V0TWVzc2FnZSgnRGlmZicpLFxuXHRcdHRvb2x0aXA6IGdldE1lc3NhZ2UoJ0NvcHlEaWZmJyksXG5cdFx0ZGVmYXVsdFRleHRBcnJheUluZGV4OiAwLFxuXHR9KTtcbn07XG5cbmV4cG9ydCB7YnVpbGRMaW5rfTtcbiIsICJ7XG5cdFwidmVyc2lvblwiOiBcIjIuMFwiXG59XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtpbml0TXdBcGl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmNvbnN0IGFwaTogbXcuQXBpID0gaW5pdE13QXBpKGBEaWZmTGluay8ke09QVElPTlMudmVyc2lvbn1gKTtcblxuZXhwb3J0IHthcGl9O1xuIiwgImltcG9ydCB7YXBpfSBmcm9tICcuLi9hcGknO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuLi9pMThuJztcbmltcG9ydCB7dG9hc3RpZnl9IGZyb20gJ2V4dC5nYWRnZXQuVG9hc3RpZnknO1xuXG50eXBlIENvbXBhcmVSZXNwb25zZSA9IHtcblx0Y29tcGFyZT86IHtcblx0XHRmcm9tcmV2aWQ6IG51bWJlcjtcblx0fTtcbn07XG5cbmNvbnN0IHBhcmFtZXRlcnM6IEFwaUNvbXBhcmVQYWdlc1BhcmFtcyA9IHtcblx0YWN0aW9uOiAnY29tcGFyZScsXG5cdGZvcm1hdDogJ2pzb24nLFxuXHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdHByb3A6ICdpZHMnLFxuXHR0b3JlbGF0aXZlOiAncHJldicsXG59O1xuXG5jb25zdCBxdWVyeUFwaSA9IGFzeW5jIChkaWZmSWQ6IG51bWJlcik6IFByb21pc2U8Q29tcGFyZVJlc3BvbnNlPiA9PiB7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIGF3YWl0IGFwaS5nZXQoe1xuXHRcdFx0Li4ucGFyYW1ldGVycyxcblx0XHRcdGZyb21yZXY6IGRpZmZJZCxcblx0XHR9KTtcblx0fSBjYXRjaCAoZXJyb3I6IHVua25vd24pIHtcblx0XHRjb25zb2xlLmVycm9yKCdbRGlmZkxpbmtdIEFqYXggZXJyb3I6JywgZXJyb3IpO1xuXHRcdHRvYXN0aWZ5KFxuXHRcdFx0e1xuXHRcdFx0XHR0ZXh0OiBnZXRNZXNzYWdlKCdOZXR3b3JrIGVycm9yJyksXG5cdFx0XHRcdGNsb3NlOiB0cnVlLFxuXHRcdFx0XHRkdXJhdGlvbjogLTEsXG5cdFx0XHR9LFxuXHRcdFx0J2Vycm9yJ1xuXHRcdCk7XG5cblx0XHRyZXR1cm4ge307XG5cdH1cbn07XG5cbmV4cG9ydCB7cXVlcnlBcGl9O1xuIiwgImltcG9ydCB7YnVpbGRMaW5rfSBmcm9tICcuL2J1aWxkTGluayc7XG5pbXBvcnQge3F1ZXJ5QXBpfSBmcm9tICcuL3V0aWwvcXVlcnlBcGknO1xuXG5jb25zdCBjb21wYXJlV2l0aFJlbW90ZURpZmZJZCA9IGFzeW5jIChkaWZmSWQ6IG51bWJlcik6IFByb21pc2U8dm9pZD4gPT4ge1xuXHRjb25zdCByZXNwb25zZTogQXdhaXRlZDxSZXR1cm5UeXBlPHR5cGVvZiBxdWVyeUFwaT4+ID0gYXdhaXQgcXVlcnlBcGkoZGlmZklkKTtcblx0aWYgKGRpZmZJZCA9PT0gbXcuY29uZmlnLmdldCgnd2dEaWZmTmV3SWQnKSAmJiByZXNwb25zZVsnY29tcGFyZSddPy5mcm9tcmV2aWQgPT09IG13LmNvbmZpZy5nZXQoJ3dnRGlmZk9sZElkJykpIHtcblx0XHRidWlsZExpbmsoMCwgZGlmZklkKTtcblx0fVxufTtcblxuZXhwb3J0IHtjb21wYXJlV2l0aFJlbW90ZURpZmZJZH07XG4iLCAiaW1wb3J0IHthZGRQb3J0bGV0TGlua30gZnJvbSAnLi9hZGRQb3J0bGV0TGluayc7XG5pbXBvcnQge2J1aWxkTGlua30gZnJvbSAnLi9idWlsZExpbmsnO1xuaW1wb3J0IHtjb21wYXJlV2l0aFJlbW90ZURpZmZJZH0gZnJvbSAnLi9jb21wYXJlV2l0aFJlbW90ZURpZmZJZCc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vaTE4bic7XG5cbmNvbnN0IHByb2Nlc3NJZCA9IChcblx0aXNSZXZpc2lvblBhZ2U6IGJvb2xlYW4sXG5cdHtkaWZmSWQsIG9sZElkLCByZXZpc2lvbklkfToge2RpZmZJZDogbnVtYmVyOyBvbGRJZDogbnVtYmVyOyByZXZpc2lvbklkOiBudW1iZXJ9XG4pOiB2b2lkID0+IHtcblx0aWYgKGRpZmZJZCkge1xuXHRcdGJ1aWxkTGluayhvbGRJZCwgZGlmZklkKTtcblx0XHRpZiAob2xkSWQpIHtcblx0XHRcdHZvaWQgY29tcGFyZVdpdGhSZW1vdGVEaWZmSWQoZGlmZklkKTtcblx0XHR9XG5cdH0gZWxzZSBpZiAocmV2aXNpb25JZCAmJiBpc1JldmlzaW9uUGFnZSkge1xuXHRcdGFkZFBvcnRsZXRMaW5rKHtcblx0XHRcdHRleHQ6IGdldE1lc3NhZ2UoJ1Blcm1hbmVudCcpLFxuXHRcdFx0dG9vbHRpcDogZ2V0TWVzc2FnZSgnQ29weVBlcm1hbmVudCcpLFxuXHRcdFx0bGluazogYFNwZWNpYWw6UGVybWFMaW5rLyR7cmV2aXNpb25JZH1gLFxuXHRcdFx0ZGVmYXVsdFRleHRBcnJheUluZGV4OiAxLFxuXHRcdFx0aXNQZXJtYUxpbms6IHRydWUsXG5cdFx0fSk7XG5cdH1cbn07XG5cbmV4cG9ydCB7cHJvY2Vzc0lkfTtcbiIsICJpbXBvcnQge2NoZWNrRGlmZlBhZ2V9IGZyb20gJy4vbW9kdWxlcy91dGlsL2NoZWNrRGlmZlBhZ2UnO1xuaW1wb3J0IHtjaGVja1JldmlzaW9uUGFnZX0gZnJvbSAnLi9tb2R1bGVzL3V0aWwvY2hlY2tSZXZpc2lvblBhZ2UnO1xuaW1wb3J0IHtwcm9jZXNzSWR9IGZyb20gJy4vbW9kdWxlcy9wcm9jZXNzSWQnO1xuXG5tdy5ob29rPEpRdWVyeVtdPignd2lraXBhZ2UuY29udGVudCcpLmFkZCgoJGNvbnRlbnQpOiB2b2lkID0+IHtcblx0aWYgKCRjb250ZW50LmF0dHIoJ2lkJykgIT09ICdtdy1jb250ZW50LXRleHQnKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgaXNEaWZmUGFnZTogYm9vbGVhbiA9IGNoZWNrRGlmZlBhZ2UoJGNvbnRlbnQpO1xuXHRjb25zdCBpc1JldmlzaW9uUGFnZTogYm9vbGVhbiA9IGNoZWNrUmV2aXNpb25QYWdlKCRjb250ZW50KTtcblx0aWYgKCFpc0RpZmZQYWdlICYmICFpc1JldmlzaW9uUGFnZSkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdHByb2Nlc3NJZChpc1JldmlzaW9uUGFnZSwge1xuXHRcdGRpZmZJZDogbXcuY29uZmlnLmdldCgnd2dEaWZmTmV3SWQnKSxcblx0XHRvbGRJZDogbXcuY29uZmlnLmdldCgnd2dEaWZmT2xkSWQnKSxcblx0XHRyZXZpc2lvbklkOiBtdy5jb25maWcuZ2V0KCd3Z1JldmlzaW9uSWQnKSxcblx0fSk7XG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLGdCQUFpQkMsY0FBOEI7QUFDcEQsU0FBT0EsU0FBU0MsS0FBSyxPQUFPLEVBQUVDLFNBQVMsTUFBTSxLQUFLLENBQUMsQ0FBQ0MsR0FBR0MsT0FBT0MsSUFBSSxpQkFBaUI7QUFDcEY7O0FDRkEsSUFBTUMsb0JBQXFCTixjQUE4QjtBQUN4RCxVQUNFQSxTQUFTQyxLQUFLLDhCQUE4QixFQUFFTSxVQUM5Q1AsU0FBU0MsS0FBSyw0Q0FBNEMsRUFBRU0sVUFB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TUFDbkNjLE1BQUEscUJBQUFtQixPQUEyQmtELFVBQVU7TUFDckNwRSx1QkFBdUI7TUFDdkJDLGFBQWE7SUFDZCxDQUFDO0VBQ0Y7QUFDRDs7QUNuQkFuQyxHQUFHdUcsS0FBZSxrQkFBa0IsRUFBRUMsSUFBSzNHLGNBQW1CO0FBQzdELE1BQUlBLFNBQVM0RyxLQUFLLElBQUksTUFBTSxtQkFBbUI7QUFDOUM7RUFDRDtBQUVBLFFBQU1DLGFBQXNCOUcsY0FBY0MsUUFBUTtBQUNsRCxRQUFNd0csaUJBQTBCbEcsa0JBQWtCTixRQUFRO0FBQzFELE1BQUksQ0FBQzZHLGNBQWMsQ0FBQ0wsZ0JBQWdCO0FBQ25DO0VBQ0Q7QUFFQUQsWUFBVUMsZ0JBQWdCO0lBQ3pCL0IsUUFBUXRFLEdBQUdDLE9BQU9DLElBQUksYUFBYTtJQUNuQ21FLE9BQU9yRSxHQUFHQyxPQUFPQyxJQUFJLGFBQWE7SUFDbENvRyxZQUFZdEcsR0FBR0MsT0FBT0MsSUFBSSxjQUFjO0VBQ3pDLENBQUM7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogWyJjaGVja0RpZmZQYWdlIiwgIiRjb250ZW50IiwgImZpbmQiLCAiaGFzQ2xhc3MiLCAibXciLCAiY29uZmlnIiwgImdldCIsICJjaGVja1JldmlzaW9uUGFnZSIsICJsZW5ndGgiLCAiaW1wb3J0X2V4dF9nYWRnZXQyIiwgInJlcXVpcmUiLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAiZ2V0STE4bk1lc3NhZ2VzIiwgImxvY2FsaXplIiwgImphIiwgIkNvcHlEaWZmIiwgImVuIiwgIkNvcHlQZXJtYW5lbnQiLCAiRGlmZiIsICJEaWZmVmVyc2lvbiIsICJQZXJtYW5lbnQiLCAiUGVybWFuZW50VmVyc2lvbiIsICJpMThuTWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAiZGVmYXVsdFRleHRBcnJheSIsICJ3aW5kb3ciLCAiRGlmZkxpbmsiLCAiT2JqZWN0IiwgInByb3RvdHlwZSIsICJ0b1N0cmluZyIsICJjYWxsIiwgImV2ZW50TGlzdGVuZXIiLCAicmVtb3ZlIiwgImFkZFBvcnRsZXRMaW5rIiwgInRleHQiLCAidG9vbHRpcCIsICJsaW5rIiwgImRlZmF1bHRUZXh0QXJyYXlJbmRleCIsICJpc1Blcm1hTGluayIsICJfZWxlbWVudCRmaXJzdEVsZW1lbnQiLCAiZWxlbWVudCIsICJkb2N1bWVudCIsICJxdWVyeVNlbGVjdG9yIiwgInBvcnRsZXRJZCIsICJ1dGlsIiwgImNsaWNrTGlzdGVuZXIiLCAiZXZlbnQiLCAicHJldmVudERlZmF1bHQiLCAiJGVsZW1lbnQiLCAiJCIsICJoYXNoIiwgImRlY29kZVVSSUNvbXBvbmVudCIsICJsb2NhdGlvbiIsICJfaSIsICJfYXJyIiwgImNvbmNhdCIsICJ2YWx1ZSIsICJhcHBlbmQiLCAid2lkZ2V0cyIsICJDb3B5VGV4dExheW91dCIsICJhbGlnbiIsICJjb3B5VGV4dCIsICJPTyIsICJ1aSIsICJhbGVydCIsICJzaXplIiwgImFkZEV2ZW50TGlzdGVuZXJXaXRoUmVtb3ZlciIsICJ0YXJnZXQiLCAiZmlyc3RFbGVtZW50Q2hpbGQiLCAidHlwZSIsICJsaXN0ZW5lciIsICJidWlsZExpbmsiLCAib2xkSWQiLCAiZGlmZklkIiwgInZlcnNpb24iLCAiaW1wb3J0X2V4dF9nYWRnZXQzIiwgImFwaSIsICJpbml0TXdBcGkiLCAiaW1wb3J0X2V4dF9nYWRnZXQ0IiwgInBhcmFtZXRlcnMiLCAiYWN0aW9uIiwgImZvcm1hdCIsICJmb3JtYXR2ZXJzaW9uIiwgInByb3AiLCAidG9yZWxhdGl2ZSIsICJxdWVyeUFwaSIsICJfcmVmIiwgIl9hc3luY1RvR2VuZXJhdG9yIiwgImZyb21yZXYiLCAiZXJyb3IiLCAiY29uc29sZSIsICJ0b2FzdGlmeSIsICJjbG9zZSIsICJkdXJhdGlvbiIsICJfeCIsICJhcHBseSIsICJhcmd1bWVudHMiLCAiY29tcGFyZVdpdGhSZW1vdGVEaWZmSWQiLCAiX3JlZjIiLCAiX3Jlc3BvbnNlJGNvbXBhcmUiLCAicmVzcG9uc2UiLCAiZnJvbXJldmlkIiwgIl94MiIsICJwcm9jZXNzSWQiLCAiaXNSZXZpc2lvblBhZ2UiLCAicmV2aXNpb25JZCIsICJob29rIiwgImFkZCIsICJhdHRyIiwgImlzRGlmZlBhZ2UiXQp9Cg==

})();

/* </nowiki> */

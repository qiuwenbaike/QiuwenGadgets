/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://en.wikipedia.org/wiki/MediaWiki:Gadget-defaultsummaries.js}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/DefaultSummaries}
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

// dist/DefaultSummaries/DefaultSummaries.js
//! src/DefaultSummaries/modules/constant.ts
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
function _createForOfIteratorHelper(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it)
        o = it;
      var i = 0;
      var F = function() {
      };
      return { s: F, n: function() {
        if (i >= o.length)
          return { done: true };
        return { done: false, value: o[i++] };
      }, e: function(e) {
        throw e;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var normalCompletion = true, didErr = false, err;
  return { s: function() {
    it = it.call(o);
  }, n: function() {
    var step = it.next();
    normalCompletion = step.done;
    return step;
  }, e: function(e) {
    didErr = true;
    err = e;
  }, f: function() {
    try {
      if (!normalCompletion && it.return != null)
        it.return();
    } finally {
      if (didErr)
        throw err;
    }
  } };
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
var WG_ACTION = mw.config.get("wgAction");
var WG_NAMESPACE_NUMBER = mw.config.get("wgNamespaceNumber");
var IS_WG_EDIT_OR_SUBMIT_ACTION = ["edit", "submit"].includes(WG_ACTION);
//! src/DefaultSummaries/modules/messages.ts
var {
  wgULS
} = window;
var COMMON_SUMMARIES_LABEL = wgULS("常用编辑摘要", "常用編輯摘要");
var COMMON_SUMMARIES = [wgULS("新页面", "新頁面"), wgULS("修正语法错误", "修正語法錯誤"), wgULS("修正错别字", "修正錯別字"), wgULS("修正格式", "修正格式"), wgULS("移除破坏", "移除破壞"), wgULS("移除测试编辑", "移除測試編輯"), wgULS("移除未经解释的内容移除", "移除未經解釋的內容移除")];
var ARTICLE_SUMMARIES = [wgULS("扩写条目", "擴寫條目"), wgULS("调整来源", "調整來源"), wgULS("调整内部链接", "调整內部連結"), wgULS("调整外部链接", "調整外部連結"), wgULS("调整格式", "調整格式"), wgULS("调整分类", "調整分類"), wgULS("删除无来源内容", "刪除無來源內容")];
var TALKPAGE_SUMMARIES = [wgULS("回复", "回覆"), wgULS("评论", "評論"), wgULS("意见", "意見"), wgULS("请求", "請求")];
//! src/DefaultSummaries/modules/util/generateSummaryDropdown.ts
var generateMenuOptionWidget = (label) => {
  return new OO.ui.MenuOptionWidget({
    label
  });
};
var addOptionsToDropdown = (dropdownWidget, summaries) => {
  const menuOptionWidgets = [];
  var _iterator = _createForOfIteratorHelper(summaries), _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done; ) {
      const summary = _step.value;
      menuOptionWidgets[menuOptionWidgets.length] = generateMenuOptionWidget(summary);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  dropdownWidget.getMenu().addItems(menuOptionWidgets);
};
var onSelectCallback = (optionWidget, $wpSummary) => {
  var _$wpSummary$val;
  const originSummary = (_$wpSummary$val = $wpSummary.val()) !== null && _$wpSummary$val !== void 0 ? _$wpSummary$val : "";
  const customSummary = optionWidget.getLabel();
  $wpSummary.val(originSummary.trim() ? "".concat(originSummary, " ").concat(customSummary) : customSummary).trigger("change");
};
var generateSummaryDropdown = ($wpSummary) => {
  const dropdownWidget = new OO.ui.DropdownWidget({
    label: COMMON_SUMMARIES_LABEL
  });
  dropdownWidget.getMenu().on("select", (optionWidget) => {
    onSelectCallback(optionWidget, $wpSummary);
  });
  addOptionsToDropdown(dropdownWidget, COMMON_SUMMARIES);
  if (WG_NAMESPACE_NUMBER === 0) {
    addOptionsToDropdown(dropdownWidget, ARTICLE_SUMMARIES);
  } else if (WG_NAMESPACE_NUMBER % 2 !== 0 && WG_NAMESPACE_NUMBER !== 3) {
    addOptionsToDropdown(dropdownWidget, TALKPAGE_SUMMARIES);
  } else if (WG_NAMESPACE_NUMBER === 118) {
    addOptionsToDropdown(dropdownWidget, ARTICLE_SUMMARIES);
  }
  return dropdownWidget.$element;
};
//! src/DefaultSummaries/modules/processVisualEditor.ts
var isInit = false;
var processVisualEditor = () => {
  if (isInit) {
    return;
  }
  isInit = true;
  const {
    target
  } = ve.init;
  const {
    $saveOptions
  } = target.saveDialog;
  if (!$saveOptions.length) {
    return;
  }
  const $dropdown = generateSummaryDropdown(target.saveDialog.editSummaryInput.$input);
  $saveOptions.before($dropdown);
};
//! src/DefaultSummaries/modules/processWikiEditor.ts
var import_ext_gadget = require("ext.gadget.Util");
var processWikiEditor = /* @__PURE__ */ function() {
  var _ref = _asyncToGenerator(function* () {
    const $body = yield (0, import_ext_gadget.getBody)();
    const $editCheckboxes = $body.find(".editCheckboxes");
    if (!$editCheckboxes.length) {
      return;
    }
    const $dropdown = generateSummaryDropdown($body.find("#wpSummary"));
    $dropdown.css({
      "padding-bottom": "1em",
      width: "48%"
    });
    $editCheckboxes.before($dropdown);
  });
  return function processWikiEditor2() {
    return _ref.apply(this, arguments);
  };
}();
//! src/DefaultSummaries/DefaultSummaries.ts
(function() {
  var _defaultSummaries = _asyncToGenerator(function* () {
    if (IS_WG_EDIT_OR_SUBMIT_ACTION) {
      yield processWikiEditor();
    } else {
      yield mw.loader.using("ext.visualEditor.desktopArticleTarget.init");
      mw.libs["ve"].addPlugin(() => {
        mw.hook("ve.saveDialog.stateChanged").add(processVisualEditor);
      });
    }
  });
  function defaultSummaries() {
    return _defaultSummaries.apply(this, arguments);
  }
  return defaultSummaries;
})()();

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0RlZmF1bHRTdW1tYXJpZXMvbW9kdWxlcy9jb25zdGFudC50cyIsICJzcmMvRGVmYXVsdFN1bW1hcmllcy9tb2R1bGVzL21lc3NhZ2VzLnRzIiwgInNyYy9EZWZhdWx0U3VtbWFyaWVzL21vZHVsZXMvdXRpbC9nZW5lcmF0ZVN1bW1hcnlEcm9wZG93bi50cyIsICJzcmMvRGVmYXVsdFN1bW1hcmllcy9tb2R1bGVzL3Byb2Nlc3NWaXN1YWxFZGl0b3IudHMiLCAic3JjL0RlZmF1bHRTdW1tYXJpZXMvbW9kdWxlcy9wcm9jZXNzV2lraUVkaXRvci50cyIsICJzcmMvRGVmYXVsdFN1bW1hcmllcy9EZWZhdWx0U3VtbWFyaWVzLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBXR19BQ1RJT046IE1lZGlhV2lraUNvbmZpZ01hcFdnQWN0aW9uID0gbXcuY29uZmlnLmdldCgnd2dBY3Rpb24nKTtcbmNvbnN0IFdHX05BTUVTUEFDRV9OVU1CRVI6IG51bWJlciA9IG13LmNvbmZpZy5nZXQoJ3dnTmFtZXNwYWNlTnVtYmVyJyk7XG5cbmNvbnN0IElTX1dHX0VESVRfT1JfU1VCTUlUX0FDVElPTjogYm9vbGVhbiA9IFsnZWRpdCcsICdzdWJtaXQnXS5pbmNsdWRlcyhXR19BQ1RJT04pO1xuXG5leHBvcnQge1dHX05BTUVTUEFDRV9OVU1CRVIsIElTX1dHX0VESVRfT1JfU1VCTUlUX0FDVElPTn07XG4iLCAiY29uc3Qge3dnVUxTfSA9IHdpbmRvdztcblxuY29uc3QgQ09NTU9OX1NVTU1BUklFU19MQUJFTDogc3RyaW5nID0gd2dVTFMoJ+W4uOeUqOe8lui+keaRmOimgScsICfluLjnlKjnt6jovK/mkZjopoEnKTtcblxuY29uc3QgQ09NTU9OX1NVTU1BUklFUzogc3RyaW5nW10gPSBbXG5cdHdnVUxTKCfmlrDpobXpnaInLCAn5paw6aCB6Z2iJyksXG5cdHdnVUxTKCfkv67mraPor63ms5XplJnor68nLCAn5L+u5q2j6Kqe5rOV6Yyv6KqkJyksXG5cdHdnVUxTKCfkv67mraPplJnliKvlrZcnLCAn5L+u5q2j6Yyv5Yil5a2XJyksXG5cdHdnVUxTKCfkv67mraPmoLzlvI8nLCAn5L+u5q2j5qC85byPJyksXG5cdHdnVUxTKCfnp7vpmaTnoLTlnY8nLCAn56e76Zmk56C05aOeJyksXG5cdHdnVUxTKCfnp7vpmaTmtYvor5XnvJbovpEnLCAn56e76Zmk5ris6Kmm57eo6LyvJyksXG5cdHdnVUxTKCfnp7vpmaTmnKrnu4/op6Pph4rnmoTlhoXlrrnnp7vpmaQnLCAn56e76Zmk5pyq57aT6Kej6YeL55qE5YWn5a6556e76ZmkJyksXG5dO1xuY29uc3QgQVJUSUNMRV9TVU1NQVJJRVM6IHN0cmluZ1tdID0gW1xuXHR3Z1VMUygn5omp5YaZ5p2h55uuJywgJ+aTtOWvq+aineebricpLFxuXHR3Z1VMUygn6LCD5pW05p2l5rqQJywgJ+iqv+aVtOS+hua6kCcpLFxuXHR3Z1VMUygn6LCD5pW05YaF6YOo6ZO+5o6lJywgJ+iwg+aVtOWFp+mDqOmAo+e1kCcpLFxuXHR3Z1VMUygn6LCD5pW05aSW6YOo6ZO+5o6lJywgJ+iqv+aVtOWklumDqOmAo+e1kCcpLFxuXHR3Z1VMUygn6LCD5pW05qC85byPJywgJ+iqv+aVtOagvOW8jycpLFxuXHR3Z1VMUygn6LCD5pW05YiG57G7JywgJ+iqv+aVtOWIhumhnicpLFxuXHR3Z1VMUygn5Yig6Zmk5peg5p2l5rqQ5YaF5a65JywgJ+WIqumZpOeEoeS+hua6kOWFp+WuuScpLFxuXTtcbmNvbnN0IFRBTEtQQUdFX1NVTU1BUklFUzogc3RyaW5nW10gPSBbXG5cdHdnVUxTKCflm57lpI0nLCAn5Zue6KaGJyksXG5cdHdnVUxTKCfor4TorronLCAn6KmV6KuWJyksXG5cdHdnVUxTKCfmhI/op4EnLCAn5oSP6KaLJyksXG5cdHdnVUxTKCfor7fmsYInLCAn6KuL5rGCJyksXG5dO1xuXG5leHBvcnQge0NPTU1PTl9TVU1NQVJJRVNfTEFCRUwsIENPTU1PTl9TVU1NQVJJRVMsIEFSVElDTEVfU1VNTUFSSUVTLCBUQUxLUEFHRV9TVU1NQVJJRVN9O1xuIiwgImltcG9ydCB7QVJUSUNMRV9TVU1NQVJJRVMsIENPTU1PTl9TVU1NQVJJRVMsIENPTU1PTl9TVU1NQVJJRVNfTEFCRUwsIFRBTEtQQUdFX1NVTU1BUklFU30gZnJvbSAnLi4vbWVzc2FnZXMnO1xuaW1wb3J0IHtXR19OQU1FU1BBQ0VfTlVNQkVSfSBmcm9tICcuLi9jb25zdGFudCc7XG5cbmNvbnN0IGdlbmVyYXRlTWVudU9wdGlvbldpZGdldCA9IChsYWJlbDogc3RyaW5nKTogT08udWkuTWVudU9wdGlvbldpZGdldCA9PiB7XG5cdHJldHVybiBuZXcgT08udWkuTWVudU9wdGlvbldpZGdldCh7XG5cdFx0bGFiZWwsXG5cdH0pO1xufTtcblxuY29uc3QgYWRkT3B0aW9uc1RvRHJvcGRvd24gPSAoZHJvcGRvd25XaWRnZXQ6IE9PLnVpLkRyb3Bkb3duV2lkZ2V0LCBzdW1tYXJpZXM6IHN0cmluZ1tdKTogdm9pZCA9PiB7XG5cdGNvbnN0IG1lbnVPcHRpb25XaWRnZXRzOiBPTy51aS5NZW51T3B0aW9uV2lkZ2V0W10gPSBbXTtcblxuXHRmb3IgKGNvbnN0IHN1bW1hcnkgb2Ygc3VtbWFyaWVzKSB7XG5cdFx0bWVudU9wdGlvbldpZGdldHNbbWVudU9wdGlvbldpZGdldHMubGVuZ3RoXSA9IGdlbmVyYXRlTWVudU9wdGlvbldpZGdldChzdW1tYXJ5KTsgLy8gUmVwbGFjZSBgbWVudU9wdGlvbldpZGdldHMucHVzaCgpYCB0byBhdm9pZCBwb2x5ZmlsbGluZyBjb3JlLWpzXG5cdH1cblxuXHRkcm9wZG93bldpZGdldC5nZXRNZW51KCkuYWRkSXRlbXMobWVudU9wdGlvbldpZGdldHMpO1xufTtcblxuY29uc3Qgb25TZWxlY3RDYWxsYmFjayA9IChvcHRpb25XaWRnZXQ6IE9PLnVpLk9wdGlvbldpZGdldCwgJHdwU3VtbWFyeTogSlF1ZXJ5KTogdm9pZCA9PiB7XG5cdGNvbnN0IG9yaWdpblN1bW1hcnk6IHN0cmluZyA9ICgkd3BTdW1tYXJ5LnZhbCgpIGFzIHN0cmluZyB8IHVuZGVmaW5lZCkgPz8gJyc7XG5cdGNvbnN0IGN1c3RvbVN1bW1hcnk6IHN0cmluZyA9IG9wdGlvbldpZGdldC5nZXRMYWJlbCgpIGFzIHN0cmluZztcblxuXHQkd3BTdW1tYXJ5LnZhbChvcmlnaW5TdW1tYXJ5LnRyaW0oKSA/IGAke29yaWdpblN1bW1hcnl9ICR7Y3VzdG9tU3VtbWFyeX1gIDogY3VzdG9tU3VtbWFyeSkudHJpZ2dlcignY2hhbmdlJyk7XG59O1xuXG5jb25zdCBnZW5lcmF0ZVN1bW1hcnlEcm9wZG93biA9ICgkd3BTdW1tYXJ5OiBKUXVlcnkpOiBKUXVlcnkgPT4ge1xuXHRjb25zdCBkcm9wZG93bldpZGdldDogT08udWkuRHJvcGRvd25XaWRnZXQgPSBuZXcgT08udWkuRHJvcGRvd25XaWRnZXQoe1xuXHRcdGxhYmVsOiBDT01NT05fU1VNTUFSSUVTX0xBQkVMLFxuXHR9KTtcblxuXHRkcm9wZG93bldpZGdldC5nZXRNZW51KCkub24oJ3NlbGVjdCcsIChvcHRpb25XaWRnZXQ6IE9PLnVpLk9wdGlvbldpZGdldCB8IE9PLnVpLk9wdGlvbldpZGdldFtdIHwgbnVsbCk6IHZvaWQgPT4ge1xuXHRcdG9uU2VsZWN0Q2FsbGJhY2sob3B0aW9uV2lkZ2V0IGFzIE9PLnVpLk9wdGlvbldpZGdldCwgJHdwU3VtbWFyeSk7XG5cdH0pO1xuXG5cdGFkZE9wdGlvbnNUb0Ryb3Bkb3duKGRyb3Bkb3duV2lkZ2V0LCBDT01NT05fU1VNTUFSSUVTKTtcblx0aWYgKFdHX05BTUVTUEFDRV9OVU1CRVIgPT09IDApIHtcblx0XHRhZGRPcHRpb25zVG9Ecm9wZG93bihkcm9wZG93bldpZGdldCwgQVJUSUNMRV9TVU1NQVJJRVMpO1xuXHR9IGVsc2UgaWYgKFdHX05BTUVTUEFDRV9OVU1CRVIgJSAyICE9PSAwICYmIFdHX05BTUVTUEFDRV9OVU1CRVIgIT09IDMpIHtcblx0XHRhZGRPcHRpb25zVG9Ecm9wZG93bihkcm9wZG93bldpZGdldCwgVEFMS1BBR0VfU1VNTUFSSUVTKTtcblx0fSBlbHNlIGlmIChXR19OQU1FU1BBQ0VfTlVNQkVSID09PSAxMTgpIHtcblx0XHRhZGRPcHRpb25zVG9Ecm9wZG93bihkcm9wZG93bldpZGdldCwgQVJUSUNMRV9TVU1NQVJJRVMpO1xuXHR9XG5cblx0cmV0dXJuIGRyb3Bkb3duV2lkZ2V0LiRlbGVtZW50O1xufTtcblxuZXhwb3J0IHtnZW5lcmF0ZVN1bW1hcnlEcm9wZG93bn07XG4iLCAiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVuc2FmZS1hc3NpZ25tZW50LCBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW5zYWZlLW1lbWJlci1hY2Nlc3MgKi9cbmltcG9ydCB7Z2VuZXJhdGVTdW1tYXJ5RHJvcGRvd259IGZyb20gJy4vdXRpbC9nZW5lcmF0ZVN1bW1hcnlEcm9wZG93bic7XG5cbmxldCBpc0luaXQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuY29uc3QgcHJvY2Vzc1Zpc3VhbEVkaXRvciA9ICgpOiB2b2lkID0+IHtcblx0aWYgKGlzSW5pdCkge1xuXHRcdHJldHVybjtcblx0fVxuXHRpc0luaXQgPSB0cnVlO1xuXG5cdC8vIEB0cy1leHBlY3QtZXJyb3IgVFMyMzA0XG5cdGNvbnN0IHt0YXJnZXR9ID0gdmUuaW5pdDtcblx0Ly8gQHRzLWV4cGVjdC1lcnJvciBUUzIzMzlcblx0Y29uc3QgeyRzYXZlT3B0aW9uc30gPSB0YXJnZXQuc2F2ZURpYWxvZyBhcyBKUXVlcnk7XG5cdGlmICghJHNhdmVPcHRpb25zLmxlbmd0aCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0ICRkcm9wZG93bjogSlF1ZXJ5ID0gZ2VuZXJhdGVTdW1tYXJ5RHJvcGRvd24odGFyZ2V0LnNhdmVEaWFsb2cuZWRpdFN1bW1hcnlJbnB1dC4kaW5wdXQgYXMgSlF1ZXJ5KTtcblxuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVuc2FmZS1jYWxsXG5cdCRzYXZlT3B0aW9ucy5iZWZvcmUoJGRyb3Bkb3duKTtcbn07XG5cbmV4cG9ydCB7cHJvY2Vzc1Zpc3VhbEVkaXRvcn07XG4iLCAiaW1wb3J0IHtnZW5lcmF0ZVN1bW1hcnlEcm9wZG93bn0gZnJvbSAnLi91dGlsL2dlbmVyYXRlU3VtbWFyeURyb3Bkb3duJztcbmltcG9ydCB7Z2V0Qm9keX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxuY29uc3QgcHJvY2Vzc1dpa2lFZGl0b3IgPSBhc3luYyAoKTogUHJvbWlzZTx2b2lkPiA9PiB7XG5cdGNvbnN0ICRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50PiA9IGF3YWl0IGdldEJvZHkoKTtcblxuXHRjb25zdCAkZWRpdENoZWNrYm94ZXM6IEpRdWVyeSA9ICRib2R5LmZpbmQoJy5lZGl0Q2hlY2tib3hlcycpO1xuXHRpZiAoISRlZGl0Q2hlY2tib3hlcy5sZW5ndGgpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCAkZHJvcGRvd246IEpRdWVyeSA9IGdlbmVyYXRlU3VtbWFyeURyb3Bkb3duKCRib2R5LmZpbmQoJyN3cFN1bW1hcnknKSk7XG5cblx0JGRyb3Bkb3duLmNzcyh7XG5cdFx0J3BhZGRpbmctYm90dG9tJzogJzFlbScsXG5cdFx0d2lkdGg6ICc0OCUnLFxuXHR9KTtcblx0JGVkaXRDaGVja2JveGVzLmJlZm9yZSgkZHJvcGRvd24pO1xufTtcblxuZXhwb3J0IHtwcm9jZXNzV2lraUVkaXRvcn07XG4iLCAiaW1wb3J0IHtJU19XR19FRElUX09SX1NVQk1JVF9BQ1RJT059IGZyb20gJy4vbW9kdWxlcy9jb25zdGFudCc7XG5pbXBvcnQge3Byb2Nlc3NWaXN1YWxFZGl0b3J9IGZyb20gJy4vbW9kdWxlcy9wcm9jZXNzVmlzdWFsRWRpdG9yJztcbmltcG9ydCB7cHJvY2Vzc1dpa2lFZGl0b3J9IGZyb20gJy4vbW9kdWxlcy9wcm9jZXNzV2lraUVkaXRvcic7XG5cbihhc3luYyBmdW5jdGlvbiBkZWZhdWx0U3VtbWFyaWVzKCk6IFByb21pc2U8dm9pZD4ge1xuXHRpZiAoSVNfV0dfRURJVF9PUl9TVUJNSVRfQUNUSU9OKSB7XG5cdFx0YXdhaXQgcHJvY2Vzc1dpa2lFZGl0b3IoKTtcblx0fSBlbHNlIHtcblx0XHRhd2FpdCBtdy5sb2FkZXIudXNpbmcoJ2V4dC52aXN1YWxFZGl0b3IuZGVza3RvcEFydGljbGVUYXJnZXQuaW5pdCcpO1xuXHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW5zYWZlLWNhbGwsIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnNhZmUtbWVtYmVyLWFjY2Vzc1xuXHRcdG13LmxpYnNbJ3ZlJ10uYWRkUGx1Z2luKCgpOiB2b2lkID0+IHtcblx0XHRcdG13Lmhvb2soJ3ZlLnNhdmVEaWFsb2cuc3RhdGVDaGFuZ2VkJykuYWRkKHByb2Nlc3NWaXN1YWxFZGl0b3IpO1xuXHRcdH0pO1xuXHR9XG59KSgpO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLFlBQXdDQyxHQUFHQyxPQUFPQyxJQUFJLFVBQVU7QUFDdEUsSUFBTUMsc0JBQThCSCxHQUFHQyxPQUFPQyxJQUFJLG1CQUFtQjtBQUVyRSxJQUFNRSw4QkFBdUMsQ0FBQyxRQUFRLFFBQVEsRUFBRUMsU0FBU04sU0FBUzs7QUNIbEYsSUFBTTtFQUFDTztBQUFLLElBQUlDO0FBRWhCLElBQU1DLHlCQUFpQ0YsTUFBTSxVQUFVLFFBQVE7QUFFL0QsSUFBTUcsbUJBQTZCLENBQ2xDSCxNQUFNLE9BQU8sS0FBSyxHQUNsQkEsTUFBTSxVQUFVLFFBQVEsR0FDeEJBLE1BQU0sU0FBUyxPQUFPLEdBQ3RCQSxNQUFNLFFBQVEsTUFBTSxHQUNwQkEsTUFBTSxRQUFRLE1BQU0sR0FDcEJBLE1BQU0sVUFBVSxRQUFRLEdBQ3hCQSxNQUFNLGVBQWUsYUFBYSxDQUFBO0FB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U0FBUTtBQUVyRCxVQUFNQyxrQkFBMEJGLE1BQU1HLEtBQUssaUJBQWlCO0FBQzVELFFBQUksQ0FBQ0QsZ0JBQWdCdkMsUUFBUTtBQUM1QjtJQUNEO0FBRUEsVUFBTTRCLFlBQW9CWCx3QkFBd0JvQixNQUFNRyxLQUFLLFlBQVksQ0FBQztBQUUxRVosY0FBVWEsSUFBSTtNQUNiLGtCQUFrQjtNQUNsQkMsT0FBTztJQUNSLENBQUM7QUFDREgsb0JBQWdCUixPQUFPSCxTQUFTO0VBQ2pDLENBQUE7QUFBQSxTQUFBLFNBZk1NLHFCQUFBO0FBQUEsV0FBQUMsS0FBQVEsTUFBQSxNQUFBQyxTQUFBO0VBQUE7QUFBQSxFQUFBOzs7NENDQ0wsYUFBaUQ7QUFDakQsUUFBSXJFLDZCQUE2QjtBQUNoQyxZQUFNMkQsa0JBQWtCO0lBQ3pCLE9BQU87QUFDTixZQUFNL0QsR0FBRzBFLE9BQU9DLE1BQU0sNENBQTRDO0FBRWxFM0UsU0FBRzRFLEtBQUssSUFBSSxFQUFFQyxVQUFVLE1BQVk7QUFDbkM3RSxXQUFHOEUsS0FBSyw0QkFBNEIsRUFBRUMsSUFBSTVCLG1CQUFtQjtNQUM5RCxDQUFDO0lBQ0Y7RUFDRCxDQUFBO0FBQUEsV0FWZ0I2QixtQkFBQTtBQUFBLFdBQUFDLGtCQUFBVCxNQUFBLE1BQUFDLFNBQUE7RUFBQTtBQUFBLFNBQUFPO0FBQUEsR0FBQSxFQVViOyIsCiAgIm5hbWVzIjogWyJXR19BQ1RJT04iLCAibXciLCAiY29uZmlnIiwgImdldCIsICJXR19OQU1FU1BBQ0VfTlVNQkVSIiwgIklTX1dHX0VESVRfT1JfU1VCTUlUX0FDVElPTiIsICJpbmNsdWRlcyIsICJ3Z1VMUyIsICJ3aW5kb3ciLCAiQ09NTU9OX1NVTU1BUklFU19MQUJFTCIsICJDT01NT05fU1VNTUFSSUVTIiwgIkFSVElDTEVfU1VNTUFSSUVTIiwgIlRBTEtQQUdFX1NVTU1BUklFUyIsICJnZW5lcmF0ZU1lbnVPcHRpb25XaWRnZXQiLCAibGFiZWwiLCAiT08iLCAidWkiLCAiTWVudU9wdGlvbldpZGdldCIsICJhZGRPcHRpb25zVG9Ecm9wZG93biIsICJkcm9wZG93bldpZGdldCIsICJzdW1tYXJpZXMiLCAibWVudU9wdGlvbldpZGdldHMiLCAiX2l0ZXJhdG9yIiwgIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwgIl9zdGVwIiwgInMiLCAibiIsICJkb25lIiwgInN1bW1hcnkiLCAidmFsdWUiLCAibGVuZ3RoIiwgImVyciIsICJlIiwgImYiLCAiZ2V0TWVudSIsICJhZGRJdGVtcyIsICJvblNlbGVjdENhbGxiYWNrIiwgIm9wdGlvbldpZGdldCIsICIkd3BTdW1tYXJ5IiwgIl8kd3BTdW1tYXJ5JHZhbCIsICJvcmlnaW5TdW1tYXJ5IiwgInZhbCIsICJjdXN0b21TdW1tYXJ5IiwgImdldExhYmVsIiwgInRyaW0iLCAiY29uY2F0IiwgInRyaWdnZXIiLCAiZ2VuZXJhdGVTdW1tYXJ5RHJvcGRvd24iLCAiRHJvcGRvd25XaWRnZXQiLCAib24iLCAiJGVsZW1lbnQiLCAiaXNJbml0IiwgInByb2Nlc3NWaXN1YWxFZGl0b3IiLCAidGFyZ2V0IiwgInZlIiwgImluaXQiLCAiJHNhdmVPcHRpb25zIiwgInNhdmVEaWFsb2ciLCAiJGRyb3Bkb3duIiwgImVkaXRTdW1tYXJ5SW5wdXQiLCAiJGlucHV0IiwgImJlZm9yZSIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJyZXF1aXJlIiwgInByb2Nlc3NXaWtpRWRpdG9yIiwgIl9yZWYiLCAiX2FzeW5jVG9HZW5lcmF0b3IiLCAiJGJvZHkiLCAiZ2V0Qm9keSIsICIkZWRpdENoZWNrYm94ZXMiLCAiZmluZCIsICJjc3MiLCAid2lkdGgiLCAiYXBwbHkiLCAiYXJndW1lbnRzIiwgImxvYWRlciIsICJ1c2luZyIsICJsaWJzIiwgImFkZFBsdWdpbiIsICJob29rIiwgImFkZCIsICJkZWZhdWx0U3VtbWFyaWVzIiwgIl9kZWZhdWx0U3VtbWFyaWVzIl0KfQo=

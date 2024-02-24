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
//! src/DefaultSummaries/DefaultSummaries.ts
var import_ext_gadget = require("ext.gadget.Util");
//! src/DefaultSummaries/modules/constant.ts
var DROPDOWN_ID = "editform_default_summary";
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
  dropdownWidget.setElementId(DROPDOWN_ID);
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
var processVisualEditor = ($body) => {
  if (mw.config.get("wgDefaultSummariesInstalled")) {
    return;
  }
  mw.config.set("wgDefaultSummariesInstalled", true);
  const {
    target
  } = ve.init;
  const {
    $saveOptions
  } = target.saveDialog;
  if (!$saveOptions.length) {
    return;
  }
  const $dropdowns = generateSummaryDropdown(target.saveDialog.editSummaryInput.$input);
  if ($body.find("#".concat(DROPDOWN_ID)).length) {
    mw.config.set("wgDefaultSummariesInstalled", true);
  } else {
    $saveOptions.before($dropdowns);
  }
};
//! src/DefaultSummaries/modules/processWikiEditor.ts
var processWikiEditor = ($body) => {
  if (mw.config.get("wgDefaultSummariesInstalled")) {
    return;
  }
  mw.config.set("wgDefaultSummariesInstalled", true);
  const $editCheckboxes = $body.find(".editCheckboxes");
  if (!$editCheckboxes.length) {
    return;
  }
  const $dropdowns = generateSummaryDropdown($body.find("input[name=wpSummary]"));
  $dropdowns.css({
    "padding-bottom": "1em",
    width: "48%"
  });
  if (!$body.find("#".concat(DROPDOWN_ID)).length) {
    $editCheckboxes.before($dropdowns);
  }
};
//! src/DefaultSummaries/DefaultSummaries.ts
void (0, import_ext_gadget.getBody)().then(function defaultSummaries($body) {
  mw.hook("wikipage.editform").add(() => {
    processWikiEditor($body);
  });
  mw.hook("ve.saveDialog.stateChanged").add(() => {
    processVisualEditor($body);
    mw.hook("ve.activationComplete").add(() => {
      if (mw.config.get("wgDefaultSummariesInstalled")) {
        mw.config.set("wgDefaultSummariesInstalled", false);
      }
    });
  });
});

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0RlZmF1bHRTdW1tYXJpZXMvRGVmYXVsdFN1bW1hcmllcy50cyIsICJzcmMvRGVmYXVsdFN1bW1hcmllcy9tb2R1bGVzL2NvbnN0YW50LnRzIiwgInNyYy9EZWZhdWx0U3VtbWFyaWVzL21vZHVsZXMvbWVzc2FnZXMudHMiLCAic3JjL0RlZmF1bHRTdW1tYXJpZXMvbW9kdWxlcy91dGlsL2dlbmVyYXRlU3VtbWFyeURyb3Bkb3duLnRzIiwgInNyYy9EZWZhdWx0U3VtbWFyaWVzL21vZHVsZXMvcHJvY2Vzc1Zpc3VhbEVkaXRvci50cyIsICJzcmMvRGVmYXVsdFN1bW1hcmllcy9tb2R1bGVzL3Byb2Nlc3NXaWtpRWRpdG9yLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQge2dldEJvZHl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5pbXBvcnQge3Byb2Nlc3NWaXN1YWxFZGl0b3J9IGZyb20gJy4vbW9kdWxlcy9wcm9jZXNzVmlzdWFsRWRpdG9yJztcbmltcG9ydCB7cHJvY2Vzc1dpa2lFZGl0b3J9IGZyb20gJy4vbW9kdWxlcy9wcm9jZXNzV2lraUVkaXRvcic7XG5cbnZvaWQgZ2V0Qm9keSgpLnRoZW4oZnVuY3Rpb24gZGVmYXVsdFN1bW1hcmllcygkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkIHtcblx0bXcuaG9vaygnd2lraXBhZ2UuZWRpdGZvcm0nKS5hZGQoKCk6IHZvaWQgPT4ge1xuXHRcdHByb2Nlc3NXaWtpRWRpdG9yKCRib2R5KTtcblx0fSk7XG5cblx0bXcuaG9vaygndmUuc2F2ZURpYWxvZy5zdGF0ZUNoYW5nZWQnKS5hZGQoKCk6IHZvaWQgPT4ge1xuXHRcdHByb2Nlc3NWaXN1YWxFZGl0b3IoJGJvZHkpO1xuXG5cdFx0Ly8gU3dpdGNoaW5nIGJldHdlZW4gVkUgYW5kIE5XRSwgcmVxdWlyZXMgdG8gYmUgcmVpbml0aWFsaXplZFxuXHRcdG13Lmhvb2soJ3ZlLmFjdGl2YXRpb25Db21wbGV0ZScpLmFkZCgoKSA9PiB7XG5cdFx0XHRpZiAobXcuY29uZmlnLmdldCgnd2dEZWZhdWx0U3VtbWFyaWVzSW5zdGFsbGVkJykpIHtcblx0XHRcdFx0bXcuY29uZmlnLnNldCgnd2dEZWZhdWx0U3VtbWFyaWVzSW5zdGFsbGVkJywgZmFsc2UpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9KTtcbn0pO1xuIiwgImNvbnN0IERST1BET1dOX0lEID0gJ2VkaXRmb3JtX2RlZmF1bHRfc3VtbWFyeSc7XG5cbmNvbnN0IFdHX0FDVElPTjogTWVkaWFXaWtpQ29uZmlnTWFwV2dBY3Rpb24gPSBtdy5jb25maWcuZ2V0KCd3Z0FjdGlvbicpO1xuY29uc3QgV0dfTkFNRVNQQUNFX05VTUJFUjogbnVtYmVyID0gbXcuY29uZmlnLmdldCgnd2dOYW1lc3BhY2VOdW1iZXInKTtcblxuY29uc3QgSVNfV0dfRURJVF9PUl9TVUJNSVRfQUNUSU9OOiBib29sZWFuID0gWydlZGl0JywgJ3N1Ym1pdCddLmluY2x1ZGVzKFdHX0FDVElPTik7XG5cbmV4cG9ydCB7RFJPUERPV05fSUQsIFdHX05BTUVTUEFDRV9OVU1CRVIsIElTX1dHX0VESVRfT1JfU1VCTUlUX0FDVElPTn07XG4iLCAiY29uc3Qge3dnVUxTfSA9IHdpbmRvdztcblxuY29uc3QgQ09NTU9OX1NVTU1BUklFU19MQUJFTDogc3RyaW5nID0gd2dVTFMoJ+W4uOeUqOe8lui+keaRmOimgScsICfluLjnlKjnt6jovK/mkZjopoEnKTtcblxuY29uc3QgQ09NTU9OX1NVTU1BUklFUzogc3RyaW5nW10gPSBbXG5cdHdnVUxTKCfmlrDpobXpnaInLCAn5paw6aCB6Z2iJyksXG5cdHdnVUxTKCfkv67mraPor63ms5XplJnor68nLCAn5L+u5q2j6Kqe5rOV6Yyv6KqkJyksXG5cdHdnVUxTKCfkv67mraPplJnliKvlrZcnLCAn5L+u5q2j6Yyv5Yil5a2XJyksXG5cdHdnVUxTKCfkv67mraPmoLzlvI8nLCAn5L+u5q2j5qC85byPJyksXG5cdHdnVUxTKCfnp7vpmaTnoLTlnY8nLCAn56e76Zmk56C05aOeJyksXG5cdHdnVUxTKCfnp7vpmaTmtYvor5XnvJbovpEnLCAn56e76Zmk5ris6Kmm57eo6LyvJyksXG5cdHdnVUxTKCfnp7vpmaTmnKrnu4/op6Pph4rnmoTlhoXlrrnnp7vpmaQnLCAn56e76Zmk5pyq57aT6Kej6YeL55qE5YWn5a6556e76ZmkJyksXG5dO1xuY29uc3QgQVJUSUNMRV9TVU1NQVJJRVM6IHN0cmluZ1tdID0gW1xuXHR3Z1VMUygn5omp5YaZ5p2h55uuJywgJ+aTtOWvq+aineebricpLFxuXHR3Z1VMUygn6LCD5pW05p2l5rqQJywgJ+iqv+aVtOS+hua6kCcpLFxuXHR3Z1VMUygn6LCD5pW05YaF6YOo6ZO+5o6lJywgJ+iwg+aVtOWFp+mDqOmAo+e1kCcpLFxuXHR3Z1VMUygn6LCD5pW05aSW6YOo6ZO+5o6lJywgJ+iqv+aVtOWklumDqOmAo+e1kCcpLFxuXHR3Z1VMUygn6LCD5pW05qC85byPJywgJ+iqv+aVtOagvOW8jycpLFxuXHR3Z1VMUygn6LCD5pW05YiG57G7JywgJ+iqv+aVtOWIhumhnicpLFxuXHR3Z1VMUygn5Yig6Zmk5peg5p2l5rqQ5YaF5a65JywgJ+WIqumZpOeEoeS+hua6kOWFp+WuuScpLFxuXTtcbmNvbnN0IFRBTEtQQUdFX1NVTU1BUklFUzogc3RyaW5nW10gPSBbXG5cdHdnVUxTKCflm57lpI0nLCAn5Zue6KaGJyksXG5cdHdnVUxTKCfor4TorronLCAn6KmV6KuWJyksXG5cdHdnVUxTKCfmhI/op4EnLCAn5oSP6KaLJyksXG5cdHdnVUxTKCfor7fmsYInLCAn6KuL5rGCJyksXG5dO1xuXG5leHBvcnQge0NPTU1PTl9TVU1NQVJJRVNfTEFCRUwsIENPTU1PTl9TVU1NQVJJRVMsIEFSVElDTEVfU1VNTUFSSUVTLCBUQUxLUEFHRV9TVU1NQVJJRVN9O1xuIiwgImltcG9ydCB7QVJUSUNMRV9TVU1NQVJJRVMsIENPTU1PTl9TVU1NQVJJRVMsIENPTU1PTl9TVU1NQVJJRVNfTEFCRUwsIFRBTEtQQUdFX1NVTU1BUklFU30gZnJvbSAnLi4vbWVzc2FnZXMnO1xuaW1wb3J0IHtEUk9QRE9XTl9JRCwgV0dfTkFNRVNQQUNFX05VTUJFUn0gZnJvbSAnLi4vY29uc3RhbnQnO1xuXG5jb25zdCBnZW5lcmF0ZU1lbnVPcHRpb25XaWRnZXQgPSAobGFiZWw6IHN0cmluZyk6IE9PLnVpLk1lbnVPcHRpb25XaWRnZXQgPT4ge1xuXHRyZXR1cm4gbmV3IE9PLnVpLk1lbnVPcHRpb25XaWRnZXQoe1xuXHRcdGxhYmVsLFxuXHR9KTtcbn07XG5cbmNvbnN0IGFkZE9wdGlvbnNUb0Ryb3Bkb3duID0gKGRyb3Bkb3duV2lkZ2V0OiBPTy51aS5Ecm9wZG93bldpZGdldCwgc3VtbWFyaWVzOiBzdHJpbmdbXSk6IHZvaWQgPT4ge1xuXHRjb25zdCBtZW51T3B0aW9uV2lkZ2V0czogT08udWkuTWVudU9wdGlvbldpZGdldFtdID0gW107XG5cblx0Zm9yIChjb25zdCBzdW1tYXJ5IG9mIHN1bW1hcmllcykge1xuXHRcdG1lbnVPcHRpb25XaWRnZXRzW21lbnVPcHRpb25XaWRnZXRzLmxlbmd0aF0gPSBnZW5lcmF0ZU1lbnVPcHRpb25XaWRnZXQoc3VtbWFyeSk7IC8vIFJlcGxhY2UgYG1lbnVPcHRpb25XaWRnZXRzLnB1c2goKWAgdG8gYXZvaWQgcG9seWZpbGxpbmcgY29yZS1qc1xuXHR9XG5cblx0ZHJvcGRvd25XaWRnZXQuZ2V0TWVudSgpLmFkZEl0ZW1zKG1lbnVPcHRpb25XaWRnZXRzKTtcbn07XG5cbmNvbnN0IG9uU2VsZWN0Q2FsbGJhY2sgPSAob3B0aW9uV2lkZ2V0OiBPTy51aS5PcHRpb25XaWRnZXQsICR3cFN1bW1hcnk6IEpRdWVyeSk6IHZvaWQgPT4ge1xuXHRjb25zdCBvcmlnaW5TdW1tYXJ5OiBzdHJpbmcgPSAoJHdwU3VtbWFyeS52YWwoKSBhcyBzdHJpbmcgfCB1bmRlZmluZWQpID8/ICcnO1xuXHRjb25zdCBjdXN0b21TdW1tYXJ5OiBzdHJpbmcgPSBvcHRpb25XaWRnZXQuZ2V0TGFiZWwoKSBhcyBzdHJpbmc7XG5cblx0JHdwU3VtbWFyeS52YWwob3JpZ2luU3VtbWFyeS50cmltKCkgPyBgJHtvcmlnaW5TdW1tYXJ5fSAke2N1c3RvbVN1bW1hcnl9YCA6IGN1c3RvbVN1bW1hcnkpLnRyaWdnZXIoJ2NoYW5nZScpO1xufTtcblxuY29uc3QgZ2VuZXJhdGVTdW1tYXJ5RHJvcGRvd24gPSAoJHdwU3VtbWFyeTogSlF1ZXJ5KTogSlF1ZXJ5ID0+IHtcblx0Y29uc3QgZHJvcGRvd25XaWRnZXQ6IE9PLnVpLkRyb3Bkb3duV2lkZ2V0ID0gbmV3IE9PLnVpLkRyb3Bkb3duV2lkZ2V0KHtcblx0XHRsYWJlbDogQ09NTU9OX1NVTU1BUklFU19MQUJFTCxcblx0fSk7XG5cblx0ZHJvcGRvd25XaWRnZXQuc2V0RWxlbWVudElkKERST1BET1dOX0lEKTtcblxuXHRkcm9wZG93bldpZGdldC5nZXRNZW51KCkub24oJ3NlbGVjdCcsIChvcHRpb25XaWRnZXQ6IE9PLnVpLk9wdGlvbldpZGdldCB8IE9PLnVpLk9wdGlvbldpZGdldFtdIHwgbnVsbCk6IHZvaWQgPT4ge1xuXHRcdG9uU2VsZWN0Q2FsbGJhY2sob3B0aW9uV2lkZ2V0IGFzIE9PLnVpLk9wdGlvbldpZGdldCwgJHdwU3VtbWFyeSk7XG5cdH0pO1xuXG5cdGFkZE9wdGlvbnNUb0Ryb3Bkb3duKGRyb3Bkb3duV2lkZ2V0LCBDT01NT05fU1VNTUFSSUVTKTtcblx0aWYgKFdHX05BTUVTUEFDRV9OVU1CRVIgPT09IDApIHtcblx0XHRhZGRPcHRpb25zVG9Ecm9wZG93bihkcm9wZG93bldpZGdldCwgQVJUSUNMRV9TVU1NQVJJRVMpO1xuXHR9IGVsc2UgaWYgKFdHX05BTUVTUEFDRV9OVU1CRVIgJSAyICE9PSAwICYmIFdHX05BTUVTUEFDRV9OVU1CRVIgIT09IDMpIHtcblx0XHRhZGRPcHRpb25zVG9Ecm9wZG93bihkcm9wZG93bldpZGdldCwgVEFMS1BBR0VfU1VNTUFSSUVTKTtcblx0fSBlbHNlIGlmIChXR19OQU1FU1BBQ0VfTlVNQkVSID09PSAxMTgpIHtcblx0XHRhZGRPcHRpb25zVG9Ecm9wZG93bihkcm9wZG93bldpZGdldCwgQVJUSUNMRV9TVU1NQVJJRVMpO1xuXHR9XG5cblx0cmV0dXJuIGRyb3Bkb3duV2lkZ2V0LiRlbGVtZW50O1xufTtcblxuZXhwb3J0IHtnZW5lcmF0ZVN1bW1hcnlEcm9wZG93bn07XG4iLCAiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVuc2FmZS1jYWxsLCBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW5zYWZlLWFzc2lnbm1lbnQgKi9cbmltcG9ydCB7RFJPUERPV05fSUR9IGZyb20gJy4vY29uc3RhbnQnO1xuaW1wb3J0IHtnZW5lcmF0ZVN1bW1hcnlEcm9wZG93bn0gZnJvbSAnLi91dGlsL2dlbmVyYXRlU3VtbWFyeURyb3Bkb3duJztcblxuY29uc3QgcHJvY2Vzc1Zpc3VhbEVkaXRvciA9ICgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkID0+IHtcblx0Ly8gR3VhcmQgYWdhaW5zdCBkb3VibGUgaW5jbHVzaW9uc1xuXHRpZiAobXcuY29uZmlnLmdldCgnd2dEZWZhdWx0U3VtbWFyaWVzSW5zdGFsbGVkJykpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHQvLyBTZXQgZ3VhcmRcblx0bXcuY29uZmlnLnNldCgnd2dEZWZhdWx0U3VtbWFyaWVzSW5zdGFsbGVkJywgdHJ1ZSk7XG5cblx0Ly8gQHRzLWV4cGVjdC1lcnJvciBUUzIzMDRcblx0Y29uc3Qge3RhcmdldH0gPSB2ZS5pbml0O1xuXHQvLyBAdHMtZXhwZWN0LWVycm9yIFRTMjMzOVxuXHRjb25zdCB7JHNhdmVPcHRpb25zfSA9IHRhcmdldC5zYXZlRGlhbG9nIGFzIEpRdWVyeTtcblx0aWYgKCEkc2F2ZU9wdGlvbnMubGVuZ3RoKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgJGRyb3Bkb3duczogSlF1ZXJ5ID0gZ2VuZXJhdGVTdW1tYXJ5RHJvcGRvd24odGFyZ2V0LnNhdmVEaWFsb2cuZWRpdFN1bW1hcnlJbnB1dC4kaW5wdXQgYXMgSlF1ZXJ5KTtcblxuXHRpZiAoJGJvZHkuZmluZChgIyR7RFJPUERPV05fSUR9YCkubGVuZ3RoKSB7XG5cdFx0bXcuY29uZmlnLnNldCgnd2dEZWZhdWx0U3VtbWFyaWVzSW5zdGFsbGVkJywgdHJ1ZSk7XG5cdH0gZWxzZSB7XG5cdFx0JHNhdmVPcHRpb25zLmJlZm9yZSgkZHJvcGRvd25zKTtcblx0fVxufTtcblxuZXhwb3J0IHtwcm9jZXNzVmlzdWFsRWRpdG9yfTtcbiIsICJpbXBvcnQge0RST1BET1dOX0lEfSBmcm9tICcuL2NvbnN0YW50JztcbmltcG9ydCB7Z2VuZXJhdGVTdW1tYXJ5RHJvcGRvd259IGZyb20gJy4vdXRpbC9nZW5lcmF0ZVN1bW1hcnlEcm9wZG93bic7XG5cbmNvbnN0IHByb2Nlc3NXaWtpRWRpdG9yID0gKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQgPT4ge1xuXHQvLyBHdWFyZCBhZ2FpbnN0IGRvdWJsZSBpbmNsdXNpb25zXG5cdGlmIChtdy5jb25maWcuZ2V0KCd3Z0RlZmF1bHRTdW1tYXJpZXNJbnN0YWxsZWQnKSkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdC8vIFNldCBndWFyZFxuXHRtdy5jb25maWcuc2V0KCd3Z0RlZmF1bHRTdW1tYXJpZXNJbnN0YWxsZWQnLCB0cnVlKTtcblxuXHRjb25zdCAkZWRpdENoZWNrYm94ZXM6IEpRdWVyeSA9ICRib2R5LmZpbmQoJy5lZGl0Q2hlY2tib3hlcycpO1xuXHRpZiAoISRlZGl0Q2hlY2tib3hlcy5sZW5ndGgpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCAkZHJvcGRvd25zOiBKUXVlcnkgPSBnZW5lcmF0ZVN1bW1hcnlEcm9wZG93bigkYm9keS5maW5kKCdpbnB1dFtuYW1lPXdwU3VtbWFyeV0nKSk7XG5cblx0JGRyb3Bkb3ducy5jc3Moe1xuXHRcdCdwYWRkaW5nLWJvdHRvbSc6ICcxZW0nLFxuXHRcdHdpZHRoOiAnNDglJyxcblx0fSk7XG5cblx0aWYgKCEkYm9keS5maW5kKGAjJHtEUk9QRE9XTl9JRH1gKS5sZW5ndGgpIHtcblx0XHQkZWRpdENoZWNrYm94ZXMuYmVmb3JlKCRkcm9wZG93bnMpO1xuXHR9XG59O1xuXG5leHBvcnQge3Byb2Nlc3NXaWtpRWRpdG9yfTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsb0JBQXNCQyxRQUFBLGlCQUFBOztBQ0F0QixJQUFNQyxjQUFjO0FBRXBCLElBQU1DLFlBQXdDQyxHQUFHQyxPQUFPQyxJQUFJLFVBQVU7QUFDdEUsSUFBTUMsc0JBQThCSCxHQUFHQyxPQUFPQyxJQUFJLG1CQUFtQjtBQUVyRSxJQUFNRSw4QkFBdUMsQ0FBQyxRQUFRLFFBQVEsRUFBRUMsU0FBU04sU0FBUzs7QUNMbEYsSUFBTTtFQUFDTztBQUFLLElBQUlDO0FBRWhCLElBQU1DLHlCQUFpQ0YsTUFBTSxVQUFVLFFBQVE7QUFFL0QsSUFBTUcsbUJBQTZCLENBQ2xDSCxNQUFNLE9BQU8sS0FBSyxHQUNsQkEsTUFBTSxVQUFVLFFBQVEsR0FDeEJBLE1BQU0sU0FBUyxPQUFPLEdBQ3RCQSxNQUFNLFFBQVEsTUFBTSxHQUNwQkEsTUFBTSxRQUFRLE1BQU0sR0FDcEJBLE1BQU0sVUFBVSxRQUFRLEdBQ3hCQSxNQUFNLGVBQWUsYUFBYSxDQUFBO0FBRW5DLElBQU1JLG9CQUE4QixDQUNuQ0osTUFBTSxRQUFRLE1BQU0sR0FDcEJBLE1BQU0sUUFBUSxNQUFNLEdBQ3BCQSxNQUFNLFVBQVUsUUFBUSxHQUN4QkEsTUFBTSxVQUFVLFFBQVEsR0FDeEJBLE1BQU0sUUFBUSxNQUFNLEdBQ3BCQSxNQUFNLFFBQVEsTUFBTSxHQUNwQkEsTUFBTSxXQUFXLFNBQVMsQ0FBQTtBQUUzQixJQUFNSyxxQkFBK0IsQ0FDcENMLE1BQU0sTUFBTSxJQUFJLEdBQ2hCQSxNQUFNLE1BQU0sSUFBSSxHQUNoQkEsTUFBTSxNQUFNLElBQUksR0FD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QUFxQmIsd0JBQXdCTSxNQUFNVSxLQUFLLHVCQUF1QixDQUFDO0FBRXRGSCxhQUFXTyxJQUFJO0lBQ2Qsa0JBQWtCO0lBQ2xCQyxPQUFPO0VBQ1IsQ0FBQztBQUVELE1BQUksQ0FBQ2YsTUFBTVUsS0FBQSxJQUFBbEIsT0FBUzlDLFdBQVcsQ0FBRSxFQUFFK0IsUUFBUTtBQUMxQ29DLG9CQUFnQkYsT0FBT0osVUFBVTtFQUNsQztBQUNEOztBTHZCQSxNQUFBLEdBQUsvRCxrQkFBQXdFLFNBQVEsRUFBRUMsS0FBSyxTQUFTQyxpQkFBaUJsQixPQUFzQztBQUNuRnBELEtBQUd1RSxLQUFLLG1CQUFtQixFQUFFQyxJQUFJLE1BQVk7QUFDNUNSLHNCQUFrQlosS0FBSztFQUN4QixDQUFDO0FBRURwRCxLQUFHdUUsS0FBSyw0QkFBNEIsRUFBRUMsSUFBSSxNQUFZO0FBQ3JEckIsd0JBQW9CQyxLQUFLO0FBR3pCcEQsT0FBR3VFLEtBQUssdUJBQXVCLEVBQUVDLElBQUksTUFBTTtBQUMxQyxVQUFJeEUsR0FBR0MsT0FBT0MsSUFBSSw2QkFBNkIsR0FBRztBQUNqREYsV0FBR0MsT0FBT29ELElBQUksK0JBQStCLEtBQUs7TUFDbkQ7SUFDRCxDQUFDO0VBQ0YsQ0FBQztBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbImltcG9ydF9leHRfZ2FkZ2V0IiwgInJlcXVpcmUiLCAiRFJPUERPV05fSUQiLCAiV0dfQUNUSU9OIiwgIm13IiwgImNvbmZpZyIsICJnZXQiLCAiV0dfTkFNRVNQQUNFX05VTUJFUiIsICJJU19XR19FRElUX09SX1NVQk1JVF9BQ1RJT04iLCAiaW5jbHVkZXMiLCAid2dVTFMiLCAid2luZG93IiwgIkNPTU1PTl9TVU1NQVJJRVNfTEFCRUwiLCAiQ09NTU9OX1NVTU1BUklFUyIsICJBUlRJQ0xFX1NVTU1BUklFUyIsICJUQUxLUEFHRV9TVU1NQVJJRVMiLCAiZ2VuZXJhdGVNZW51T3B0aW9uV2lkZ2V0IiwgImxhYmVsIiwgIk9PIiwgInVpIiwgIk1lbnVPcHRpb25XaWRnZXQiLCAiYWRkT3B0aW9uc1RvRHJvcGRvd24iLCAiZHJvcGRvd25XaWRnZXQiLCAic3VtbWFyaWVzIiwgIm1lbnVPcHRpb25XaWRnZXRzIiwgIl9pdGVyYXRvciIsICJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsICJfc3RlcCIsICJzIiwgIm4iLCAiZG9uZSIsICJzdW1tYXJ5IiwgInZhbHVlIiwgImxlbmd0aCIsICJlcnIiLCAiZSIsICJmIiwgImdldE1lbnUiLCAiYWRkSXRlbXMiLCAib25TZWxlY3RDYWxsYmFjayIsICJvcHRpb25XaWRnZXQiLCAiJHdwU3VtbWFyeSIsICJfJHdwU3VtbWFyeSR2YWwiLCAib3JpZ2luU3VtbWFyeSIsICJ2YWwiLCAiY3VzdG9tU3VtbWFyeSIsICJnZXRMYWJlbCIsICJ0cmltIiwgImNvbmNhdCIsICJ0cmlnZ2VyIiwgImdlbmVyYXRlU3VtbWFyeURyb3Bkb3duIiwgIkRyb3Bkb3duV2lkZ2V0IiwgInNldEVsZW1lbnRJZCIsICJvbiIsICIkZWxlbWVudCIsICJwcm9jZXNzVmlzdWFsRWRpdG9yIiwgIiRib2R5IiwgInNldCIsICJ0YXJnZXQiLCAidmUiLCAiaW5pdCIsICIkc2F2ZU9wdGlvbnMiLCAic2F2ZURpYWxvZyIsICIkZHJvcGRvd25zIiwgImVkaXRTdW1tYXJ5SW5wdXQiLCAiJGlucHV0IiwgImZpbmQiLCAiYmVmb3JlIiwgInByb2Nlc3NXaWtpRWRpdG9yIiwgIiRlZGl0Q2hlY2tib3hlcyIsICJjc3MiLCAid2lkdGgiLCAiZ2V0Qm9keSIsICJ0aGVuIiwgImRlZmF1bHRTdW1tYXJpZXMiLCAiaG9vayIsICJhZGQiXQp9Cg==

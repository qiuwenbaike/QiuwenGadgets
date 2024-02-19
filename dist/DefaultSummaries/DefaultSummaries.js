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
//! src/DefaultSummaries/DefaultSummaries.ts
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
var import_ext_gadget = require("ext.gadget.Util");
//! src/DefaultSummaries/modules/messages.ts
var {
  wgULS
} = window;
var COMMON_SUMMARIES_LABEL = wgULS("常用编辑摘要", "常用編輯摘要");
var COMMON_SUMMARIES = [wgULS("新页面", "新頁面"), wgULS("修正语法错误", "修正語法錯誤"), wgULS("修正错别字", "修正錯別字"), wgULS("修正格式", "修正格式"), wgULS("移除破坏", "移除破壞"), wgULS("移除测试编辑", "移除測試編輯"), wgULS("移除未经解释的内容移除", "移除未經解釋的內容移除")];
var ARTICLE_SUMMARIES = [wgULS("扩写条目", "擴寫條目"), wgULS("调整来源", "調整來源"), wgULS("调整内部链接", "调整內部連結"), wgULS("调整外部链接", "調整外部連結"), wgULS("调整格式", "調整格式"), wgULS("调整分类", "調整分類"), wgULS("删除无来源内容", "刪除無來源內容")];
var TALKPAGE_SUMMARIES = [wgULS("回复", "回覆"), wgULS("评论", "評論"), wgULS("意见", "意見"), wgULS("请求", "請求")];
//! src/DefaultSummaries/modules/constant.ts
var WG_ACTION = mw.config.get("wgAction");
var WG_NAMESPACE_NUMBER = mw.config.get("wgNamespaceNumber");
var IS_WG_EDIT_OR_SUBMIT_ACTION = ["edit", "submit"].includes(WG_ACTION);
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
var processVisualEditor = () => {
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
  $saveOptions.before($dropdowns);
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
  const $dropdowns = generateSummaryDropdown($body.find("#wpSummary"));
  $dropdowns.css({
    "padding-bottom": "1em",
    width: "48%"
  });
  $editCheckboxes.before($dropdowns);
};
//! src/DefaultSummaries/DefaultSummaries.ts
void (0, import_ext_gadget.getBody)().then(function defaultSummaries($body) {
  mw.hook("wikipage.editform").add(() => {
    processWikiEditor($body);
  });
  mw.hook("ve.saveDialog.stateChanged").add(() => {
    processVisualEditor();
  });
});

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0RlZmF1bHRTdW1tYXJpZXMvRGVmYXVsdFN1bW1hcmllcy50cyIsICJzcmMvRGVmYXVsdFN1bW1hcmllcy9tb2R1bGVzL21lc3NhZ2VzLnRzIiwgInNyYy9EZWZhdWx0U3VtbWFyaWVzL21vZHVsZXMvY29uc3RhbnQudHMiLCAic3JjL0RlZmF1bHRTdW1tYXJpZXMvbW9kdWxlcy91dGlsL2dlbmVyYXRlU3VtbWFyeURyb3Bkb3duLnRzIiwgInNyYy9EZWZhdWx0U3VtbWFyaWVzL21vZHVsZXMvcHJvY2Vzc1Zpc3VhbEVkaXRvci50cyIsICJzcmMvRGVmYXVsdFN1bW1hcmllcy9tb2R1bGVzL3Byb2Nlc3NXaWtpRWRpdG9yLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQge2dldEJvZHl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5pbXBvcnQge3Byb2Nlc3NWaXN1YWxFZGl0b3J9IGZyb20gJy4vbW9kdWxlcy9wcm9jZXNzVmlzdWFsRWRpdG9yJztcbmltcG9ydCB7cHJvY2Vzc1dpa2lFZGl0b3J9IGZyb20gJy4vbW9kdWxlcy9wcm9jZXNzV2lraUVkaXRvcic7XG5cbnZvaWQgZ2V0Qm9keSgpLnRoZW4oZnVuY3Rpb24gZGVmYXVsdFN1bW1hcmllcygkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkIHtcblx0bXcuaG9vaygnd2lraXBhZ2UuZWRpdGZvcm0nKS5hZGQoKCk6IHZvaWQgPT4ge1xuXHRcdHByb2Nlc3NXaWtpRWRpdG9yKCRib2R5KTtcblx0fSk7XG5cblx0bXcuaG9vaygndmUuc2F2ZURpYWxvZy5zdGF0ZUNoYW5nZWQnKS5hZGQoKCk6IHZvaWQgPT4ge1xuXHRcdHByb2Nlc3NWaXN1YWxFZGl0b3IoKTtcblx0fSk7XG59KTtcbiIsICJjb25zdCB7d2dVTFN9ID0gd2luZG93O1xuXG5jb25zdCBDT01NT05fU1VNTUFSSUVTX0xBQkVMOiBzdHJpbmcgPSB3Z1VMUygn5bi455So57yW6L6R5pGY6KaBJywgJ+W4uOeUqOe3qOi8r+aRmOimgScpO1xuXG5jb25zdCBDT01NT05fU1VNTUFSSUVTOiBzdHJpbmdbXSA9IFtcblx0d2dVTFMoJ+aWsOmhtemdoicsICfmlrDpoIHpnaInKSxcblx0d2dVTFMoJ+S/ruato+ivreazlemUmeivrycsICfkv67mraPoqp7ms5XpjK/oqqQnKSxcblx0d2dVTFMoJ+S/ruato+mUmeWIq+WtlycsICfkv67mraPpjK/liKXlrZcnKSxcblx0d2dVTFMoJ+S/ruato+agvOW8jycsICfkv67mraPmoLzlvI8nKSxcblx0d2dVTFMoJ+enu+mZpOegtOWdjycsICfnp7vpmaTnoLTlo54nKSxcblx0d2dVTFMoJ+enu+mZpOa1i+ivlee8lui+kScsICfnp7vpmaTmuKzoqabnt6jovK8nKSxcblx0d2dVTFMoJ+enu+mZpOacque7j+ino+mHiueahOWGheWuueenu+mZpCcsICfnp7vpmaTmnKrntpPop6Pph4vnmoTlhaflrrnnp7vpmaQnKSxcbl07XG5jb25zdCBBUlRJQ0xFX1NVTU1BUklFUzogc3RyaW5nW10gPSBbXG5cdHdnVUxTKCfmianlhpnmnaHnm64nLCAn5pO05a+r5qKd55uuJyksXG5cdHdnVUxTKCfosIPmlbTmnaXmupAnLCAn6Kq/5pW05L6G5rqQJyksXG5cdHdnVUxTKCfosIPmlbTlhoXpg6jpk77mjqUnLCAn6LCD5pW05YWn6YOo6YCj57WQJyksXG5cdHdnVUxTKCfosIPmlbTlpJbpg6jpk77mjqUnLCAn6Kq/5pW05aSW6YOo6YCj57WQJyksXG5cdHdnVUxTKCfosIPmlbTmoLzlvI8nLCAn6Kq/5pW05qC85byPJyksXG5cdHdnVUxTKCfosIPmlbTliIbnsbsnLCAn6Kq/5pW05YiG6aGeJyksXG5cdHdnVUxTKCfliKDpmaTml6DmnaXmupDlhoXlrrknLCAn5Yiq6Zmk54Sh5L6G5rqQ5YWn5a65JyksXG5dO1xuY29uc3QgVEFMS1BBR0VfU1VNTUFSSUVTOiBzdHJpbmdbXSA9IFtcblx0d2dVTFMoJ+WbnuWkjScsICflm57opoYnKSxcblx0d2dVTFMoJ+ivhOiuuicsICfoqZXoq5YnKSxcblx0d2dVTFMoJ+aEj+ingScsICfmhI/oposnKSxcblx0d2dVTFMoJ+ivt+axgicsICfoq4vmsYInKSxcbl07XG5cbmV4cG9ydCB7Q09NTU9OX1NVTU1BUklFU19MQUJFTCwgQ09NTU9OX1NVTU1BUklFUywgQVJUSUNMRV9TVU1NQVJJRVMsIFRBTEtQQUdFX1NVTU1BUklFU307XG4iLCAiY29uc3QgV0dfQUNUSU9OOiBNZWRpYVdpa2lDb25maWdNYXBXZ0FjdGlvbiA9IG13LmNvbmZpZy5nZXQoJ3dnQWN0aW9uJyk7XG5jb25zdCBXR19OQU1FU1BBQ0VfTlVNQkVSOiBudW1iZXIgPSBtdy5jb25maWcuZ2V0KCd3Z05hbWVzcGFjZU51bWJlcicpO1xuXG5jb25zdCBJU19XR19FRElUX09SX1NVQk1JVF9BQ1RJT046IGJvb2xlYW4gPSBbJ2VkaXQnLCAnc3VibWl0J10uaW5jbHVkZXMoV0dfQUNUSU9OKTtcblxuZXhwb3J0IHtXR19OQU1FU1BBQ0VfTlVNQkVSLCBJU19XR19FRElUX09SX1NVQk1JVF9BQ1RJT059O1xuIiwgImltcG9ydCB7QVJUSUNMRV9TVU1NQVJJRVMsIENPTU1PTl9TVU1NQVJJRVMsIENPTU1PTl9TVU1NQVJJRVNfTEFCRUwsIFRBTEtQQUdFX1NVTU1BUklFU30gZnJvbSAnLi4vbWVzc2FnZXMnO1xuaW1wb3J0IHtXR19OQU1FU1BBQ0VfTlVNQkVSfSBmcm9tICcuLi9jb25zdGFudCc7XG5cbmNvbnN0IGdlbmVyYXRlTWVudU9wdGlvbldpZGdldCA9IChsYWJlbDogc3RyaW5nKTogT08udWkuTWVudU9wdGlvbldpZGdldCA9PiB7XG5cdHJldHVybiBuZXcgT08udWkuTWVudU9wdGlvbldpZGdldCh7XG5cdFx0bGFiZWwsXG5cdH0pO1xufTtcblxuY29uc3QgYWRkT3B0aW9uc1RvRHJvcGRvd24gPSAoZHJvcGRvd25XaWRnZXQ6IE9PLnVpLkRyb3Bkb3duV2lkZ2V0LCBzdW1tYXJpZXM6IHN0cmluZ1tdKTogdm9pZCA9PiB7XG5cdGNvbnN0IG1lbnVPcHRpb25XaWRnZXRzOiBPTy51aS5NZW51T3B0aW9uV2lkZ2V0W10gPSBbXTtcblxuXHRmb3IgKGNvbnN0IHN1bW1hcnkgb2Ygc3VtbWFyaWVzKSB7XG5cdFx0bWVudU9wdGlvbldpZGdldHNbbWVudU9wdGlvbldpZGdldHMubGVuZ3RoXSA9IGdlbmVyYXRlTWVudU9wdGlvbldpZGdldChzdW1tYXJ5KTsgLy8gUmVwbGFjZSBgbWVudU9wdGlvbldpZGdldHMucHVzaCgpYCB0byBhdm9pZCBwb2x5ZmlsbGluZyBjb3JlLWpzXG5cdH1cblxuXHRkcm9wZG93bldpZGdldC5nZXRNZW51KCkuYWRkSXRlbXMobWVudU9wdGlvbldpZGdldHMpO1xufTtcblxuY29uc3Qgb25TZWxlY3RDYWxsYmFjayA9IChvcHRpb25XaWRnZXQ6IE9PLnVpLk9wdGlvbldpZGdldCwgJHdwU3VtbWFyeTogSlF1ZXJ5KTogdm9pZCA9PiB7XG5cdGNvbnN0IG9yaWdpblN1bW1hcnk6IHN0cmluZyA9ICgkd3BTdW1tYXJ5LnZhbCgpIGFzIHN0cmluZyB8IHVuZGVmaW5lZCkgPz8gJyc7XG5cdGNvbnN0IGN1c3RvbVN1bW1hcnk6IHN0cmluZyA9IG9wdGlvbldpZGdldC5nZXRMYWJlbCgpIGFzIHN0cmluZztcblxuXHQkd3BTdW1tYXJ5LnZhbChvcmlnaW5TdW1tYXJ5LnRyaW0oKSA/IGAke29yaWdpblN1bW1hcnl9ICR7Y3VzdG9tU3VtbWFyeX1gIDogY3VzdG9tU3VtbWFyeSkudHJpZ2dlcignY2hhbmdlJyk7XG59O1xuXG5jb25zdCBnZW5lcmF0ZVN1bW1hcnlEcm9wZG93biA9ICgkd3BTdW1tYXJ5OiBKUXVlcnkpOiBKUXVlcnkgPT4ge1xuXHRjb25zdCBkcm9wZG93bldpZGdldDogT08udWkuRHJvcGRvd25XaWRnZXQgPSBuZXcgT08udWkuRHJvcGRvd25XaWRnZXQoe1xuXHRcdGxhYmVsOiBDT01NT05fU1VNTUFSSUVTX0xBQkVMLFxuXHR9KTtcblxuXHRkcm9wZG93bldpZGdldC5nZXRNZW51KCkub24oJ3NlbGVjdCcsIChvcHRpb25XaWRnZXQ6IE9PLnVpLk9wdGlvbldpZGdldCB8IE9PLnVpLk9wdGlvbldpZGdldFtdIHwgbnVsbCk6IHZvaWQgPT4ge1xuXHRcdG9uU2VsZWN0Q2FsbGJhY2sob3B0aW9uV2lkZ2V0IGFzIE9PLnVpLk9wdGlvbldpZGdldCwgJHdwU3VtbWFyeSk7XG5cdH0pO1xuXG5cdGFkZE9wdGlvbnNUb0Ryb3Bkb3duKGRyb3Bkb3duV2lkZ2V0LCBDT01NT05fU1VNTUFSSUVTKTtcblx0aWYgKFdHX05BTUVTUEFDRV9OVU1CRVIgPT09IDApIHtcblx0XHRhZGRPcHRpb25zVG9Ecm9wZG93bihkcm9wZG93bldpZGdldCwgQVJUSUNMRV9TVU1NQVJJRVMpO1xuXHR9IGVsc2UgaWYgKFdHX05BTUVTUEFDRV9OVU1CRVIgJSAyICE9PSAwICYmIFdHX05BTUVTUEFDRV9OVU1CRVIgIT09IDMpIHtcblx0XHRhZGRPcHRpb25zVG9Ecm9wZG93bihkcm9wZG93bldpZGdldCwgVEFMS1BBR0VfU1VNTUFSSUVTKTtcblx0fSBlbHNlIGlmIChXR19OQU1FU1BBQ0VfTlVNQkVSID09PSAxMTgpIHtcblx0XHRhZGRPcHRpb25zVG9Ecm9wZG93bihkcm9wZG93bldpZGdldCwgQVJUSUNMRV9TVU1NQVJJRVMpO1xuXHR9XG5cblx0cmV0dXJuIGRyb3Bkb3duV2lkZ2V0LiRlbGVtZW50O1xufTtcblxuZXhwb3J0IHtnZW5lcmF0ZVN1bW1hcnlEcm9wZG93bn07XG4iLCAiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVuc2FmZS1jYWxsLCBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW5zYWZlLWFzc2lnbm1lbnQgKi9cbmltcG9ydCB7Z2VuZXJhdGVTdW1tYXJ5RHJvcGRvd259IGZyb20gJy4vdXRpbC9nZW5lcmF0ZVN1bW1hcnlEcm9wZG93bic7XG5cbmNvbnN0IHByb2Nlc3NWaXN1YWxFZGl0b3IgPSAoKTogdm9pZCA9PiB7XG5cdC8vIEd1YXJkIGFnYWluc3QgZG91YmxlIGluY2x1c2lvbnNcblx0aWYgKG13LmNvbmZpZy5nZXQoJ3dnRGVmYXVsdFN1bW1hcmllc0luc3RhbGxlZCcpKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Ly8gU2V0IGd1YXJkXG5cdG13LmNvbmZpZy5zZXQoJ3dnRGVmYXVsdFN1bW1hcmllc0luc3RhbGxlZCcsIHRydWUpO1xuXG5cdC8vIEB0cy1leHBlY3QtZXJyb3IgVFMyMzA0XG5cdGNvbnN0IHt0YXJnZXR9ID0gdmUuaW5pdDtcblx0Ly8gQHRzLWV4cGVjdC1lcnJvciBUUzIzMzlcblx0Y29uc3QgeyRzYXZlT3B0aW9uc30gPSB0YXJnZXQuc2F2ZURpYWxvZyBhcyBKUXVlcnk7XG5cdGlmICghJHNhdmVPcHRpb25zLmxlbmd0aCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0ICRkcm9wZG93bnM6IEpRdWVyeSA9IGdlbmVyYXRlU3VtbWFyeURyb3Bkb3duKHRhcmdldC5zYXZlRGlhbG9nLmVkaXRTdW1tYXJ5SW5wdXQuJGlucHV0IGFzIEpRdWVyeSk7XG5cblx0JHNhdmVPcHRpb25zLmJlZm9yZSgkZHJvcGRvd25zKTtcbn07XG5cbmV4cG9ydCB7cHJvY2Vzc1Zpc3VhbEVkaXRvcn07XG4iLCAiaW1wb3J0IHtnZW5lcmF0ZVN1bW1hcnlEcm9wZG93bn0gZnJvbSAnLi91dGlsL2dlbmVyYXRlU3VtbWFyeURyb3Bkb3duJztcblxuY29uc3QgcHJvY2Vzc1dpa2lFZGl0b3IgPSAoJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KTogdm9pZCA9PiB7XG5cdC8vIEd1YXJkIGFnYWluc3QgZG91YmxlIGluY2x1c2lvbnNcblx0aWYgKG13LmNvbmZpZy5nZXQoJ3dnRGVmYXVsdFN1bW1hcmllc0luc3RhbGxlZCcpKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Ly8gU2V0IGd1YXJkXG5cdG13LmNvbmZpZy5zZXQoJ3dnRGVmYXVsdFN1bW1hcmllc0luc3RhbGxlZCcsIHRydWUpO1xuXG5cdGNvbnN0ICRlZGl0Q2hlY2tib3hlczogSlF1ZXJ5ID0gJGJvZHkuZmluZCgnLmVkaXRDaGVja2JveGVzJyk7XG5cdGlmICghJGVkaXRDaGVja2JveGVzLmxlbmd0aCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0ICRkcm9wZG93bnM6IEpRdWVyeSA9IGdlbmVyYXRlU3VtbWFyeURyb3Bkb3duKCRib2R5LmZpbmQoJyN3cFN1bW1hcnknKSk7XG5cblx0JGRyb3Bkb3ducy5jc3Moe1xuXHRcdCdwYWRkaW5nLWJvdHRvbSc6ICcxZW0nLFxuXHRcdHdpZHRoOiAnNDglJyxcblx0fSk7XG5cdCRlZGl0Q2hlY2tib3hlcy5iZWZvcmUoJGRyb3Bkb3ducyk7XG59O1xuXG5leHBvcnQge3Byb2Nlc3NXaWtpRWRpdG9yfTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsb0JBQXNCQyxRQUFBLGlCQUFBOztBQ0F0QixJQUFNO0VBQUNDO0FBQUssSUFBSUM7QUFFaEIsSUFBTUMseUJBQWlDRixNQUFNLFVBQVUsUUFBUTtBQUUvRCxJQUFNRyxtQkFBNkIsQ0FDbENILE1BQU0sT0FBTyxLQUFLLEdBQ2xCQSxNQUFNLFVBQVUsUUFBUSxHQUN4QkEsTUFBTSxTQUFTLE9BQU8sR0FDdEJBLE1BQU0sUUFBUSxNQUFNLEdBQ3BCQSxNQUFNLFFBQVEsTUFBTSxHQUNwQkEsTUFBTSxVQUFVLFFBQVEsR0FDeEJBLE1BQU0sZUFBZSxhQUFhLENBQUE7QUFFbkMsSUFBTUksb0JBQThCLENBQ25DSixNQUFNLFFBQVEsTUFBTSxHQUNwQkEsTUFBTSxRQUFRLE1BQU0sR0FDcEJBLE1BQU0sVUFBVSxRQUFRLEdBQ3hCQSxNQUFNLFVBQVUsUUFBUSxHQUN4QkEsTUFBTSxRQUFRLE1BQU0sR0FDcEJBLE1BQU0sUUFBUSxNQUFNLEdBQ3BCQSxNQUFNLFdBQVcsU0FBUyxDQUFBO0FBRTNCLElBQU1LLHFCQUErQixDQUNwQ0wsTUFBTSxN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NUQsTUFBSSxDQUFDRCxnQkFBZ0JsQyxRQUFRO0FBQzVCO0VBQ0Q7QUFFQSxRQUFNNEIsYUFBcUJYLHdCQUF3QmdCLE1BQU1FLEtBQUssWUFBWSxDQUFDO0FBRTNFUCxhQUFXUSxJQUFJO0lBQ2Qsa0JBQWtCO0lBQ2xCQyxPQUFPO0VBQ1IsQ0FBQztBQUNESCxrQkFBZ0JILE9BQU9ILFVBQVU7QUFDbEM7O0FMbkJBLE1BQUEsR0FBSzVELGtCQUFBc0UsU0FBUSxFQUFFQyxLQUFLLFNBQVNDLGlCQUFpQlAsT0FBc0M7QUFDbkZ4RCxLQUFHZ0UsS0FBSyxtQkFBbUIsRUFBRUMsSUFBSSxNQUFZO0FBQzVDVixzQkFBa0JDLEtBQUs7RUFDeEIsQ0FBQztBQUVEeEQsS0FBR2dFLEtBQUssNEJBQTRCLEVBQUVDLElBQUksTUFBWTtBQUNyRHJCLHdCQUFvQjtFQUNyQixDQUFDO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFsiaW1wb3J0X2V4dF9nYWRnZXQiLCAicmVxdWlyZSIsICJ3Z1VMUyIsICJ3aW5kb3ciLCAiQ09NTU9OX1NVTU1BUklFU19MQUJFTCIsICJDT01NT05fU1VNTUFSSUVTIiwgIkFSVElDTEVfU1VNTUFSSUVTIiwgIlRBTEtQQUdFX1NVTU1BUklFUyIsICJXR19BQ1RJT04iLCAibXciLCAiY29uZmlnIiwgImdldCIsICJXR19OQU1FU1BBQ0VfTlVNQkVSIiwgIklTX1dHX0VESVRfT1JfU1VCTUlUX0FDVElPTiIsICJpbmNsdWRlcyIsICJnZW5lcmF0ZU1lbnVPcHRpb25XaWRnZXQiLCAibGFiZWwiLCAiT08iLCAidWkiLCAiTWVudU9wdGlvbldpZGdldCIsICJhZGRPcHRpb25zVG9Ecm9wZG93biIsICJkcm9wZG93bldpZGdldCIsICJzdW1tYXJpZXMiLCAibWVudU9wdGlvbldpZGdldHMiLCAiX2l0ZXJhdG9yIiwgIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwgIl9zdGVwIiwgInMiLCAibiIsICJkb25lIiwgInN1bW1hcnkiLCAidmFsdWUiLCAibGVuZ3RoIiwgImVyciIsICJlIiwgImYiLCAiZ2V0TWVudSIsICJhZGRJdGVtcyIsICJvblNlbGVjdENhbGxiYWNrIiwgIm9wdGlvbldpZGdldCIsICIkd3BTdW1tYXJ5IiwgIl8kd3BTdW1tYXJ5JHZhbCIsICJvcmlnaW5TdW1tYXJ5IiwgInZhbCIsICJjdXN0b21TdW1tYXJ5IiwgImdldExhYmVsIiwgInRyaW0iLCAiY29uY2F0IiwgInRyaWdnZXIiLCAiZ2VuZXJhdGVTdW1tYXJ5RHJvcGRvd24iLCAiRHJvcGRvd25XaWRnZXQiLCAib24iLCAiJGVsZW1lbnQiLCAicHJvY2Vzc1Zpc3VhbEVkaXRvciIsICJzZXQiLCAidGFyZ2V0IiwgInZlIiwgImluaXQiLCAiJHNhdmVPcHRpb25zIiwgInNhdmVEaWFsb2ciLCAiJGRyb3Bkb3ducyIsICJlZGl0U3VtbWFyeUlucHV0IiwgIiRpbnB1dCIsICJiZWZvcmUiLCAicHJvY2Vzc1dpa2lFZGl0b3IiLCAiJGJvZHkiLCAiJGVkaXRDaGVja2JveGVzIiwgImZpbmQiLCAiY3NzIiwgIndpZHRoIiwgImdldEJvZHkiLCAidGhlbiIsICJkZWZhdWx0U3VtbWFyaWVzIiwgImhvb2siLCAiYWRkIl0KfQo=

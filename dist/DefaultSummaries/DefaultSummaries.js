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
function _createForOfIteratorHelper(r, e) {
  var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (!t) {
    if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) {
      t && (r = t);
      var n = 0, F = function() {
      };
      return { s: F, n: function() {
        return n >= r.length ? { done: true } : { done: false, value: r[n++] };
      }, e: function(r2) {
        throw r2;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var o, a = true, u = false;
  return { s: function() {
    t = t.call(r);
  }, n: function() {
    var r2 = t.next();
    return a = r2.done, r2;
  }, e: function(r2) {
    u = true, o = r2;
  }, f: function() {
    try {
      a || null == t.return || t.return();
    } finally {
      if (u) throw o;
    }
  } };
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}
function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
//! src/DefaultSummaries/options.json
var configKey = "gadget-DefaultSummaries__Initialized";
var dropdownId = "editform_default_summary";
//! src/DefaultSummaries/DefaultSummaries.ts
var import_ext_gadget = require("ext.gadget.Util");
//! src/DefaultSummaries/modules/messages.ts
var {
  wgULS
} = window;
var {
  wgCurRevisionId
} = mw.config.get();
var COMMON_SUMMARIES_LABEL = wgULS("常用编辑摘要", "常用編輯摘要");
var COMMON_SUMMARIES = [wgULS("修正语法", "修正語法"), wgULS("修正错字", "修正錯字"), wgULS("调整格式", "調整格式"), wgULS("移除破坏", "移除破壞"), wgULS("移除测试", "移除測試")];
if (!wgCurRevisionId) {
  COMMON_SUMMARIES = [wgULS("新页面", "新頁面"), ...COMMON_SUMMARIES];
}
var ARTICLE_SUMMARIES = [wgULS("扩写条目", "擴寫條目"), wgULS("调整来源", "調整來源"), wgULS("调整分类", "調整分類"), wgULS("调整链接", "调整連結"), wgULS("删除无来源内容", "刪除無來源內容"), wgULS("恢复移除的内容", "恢復移除的內容")];
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
  const {
    wgNamespaceNumber
  } = mw.config.get();
  const dropdownWidget = new OO.ui.DropdownWidget({
    label: COMMON_SUMMARIES_LABEL
  });
  dropdownWidget.setElementId(dropdownId);
  dropdownWidget.getMenu().on("select", (optionWidget) => {
    onSelectCallback(optionWidget, $wpSummary);
  });
  addOptionsToDropdown(dropdownWidget, COMMON_SUMMARIES);
  if (wgNamespaceNumber === 0) {
    addOptionsToDropdown(dropdownWidget, ARTICLE_SUMMARIES);
  } else if (wgNamespaceNumber % 2 !== 0 && wgNamespaceNumber !== 3) {
    addOptionsToDropdown(dropdownWidget, TALKPAGE_SUMMARIES);
  } else if (wgNamespaceNumber === 118) {
    addOptionsToDropdown(dropdownWidget, ARTICLE_SUMMARIES);
  }
  return dropdownWidget.$element;
};
//! src/DefaultSummaries/modules/processVisualEditor.ts
var processVisualEditor = ($body) => {
  if (mw.config.get(configKey)) {
    return;
  }
  mw.config.set(configKey, true);
  const {
    target
  } = window.ve.init;
  const {
    $saveOptions
  } = target.saveDialog;
  if (!$saveOptions.length) {
    return;
  }
  const $dropdowns = generateSummaryDropdown(target.saveDialog.editSummaryInput.$input);
  if ($body.find("#".concat(dropdownId)).length) {
    mw.config.set(configKey, true);
  } else {
    $saveOptions.before($dropdowns);
  }
};
//! src/DefaultSummaries/modules/processWikiEditor.ts
var processWikiEditor = ($editForm) => {
  if (mw.config.get(configKey)) {
    return;
  }
  mw.config.set(configKey, true);
  const $editCheckboxes = $editForm.find(".editCheckboxes");
  if (!$editCheckboxes.length) {
    return;
  }
  const $dropdowns = generateSummaryDropdown($editForm.find("input[name=wpSummary]"));
  $dropdowns.css({
    "padding-bottom": "1em",
    width: "48%"
  });
  if (!$editForm.find("#".concat(dropdownId)).length) {
    $editCheckboxes.before($dropdowns);
  }
};
//! src/DefaultSummaries/DefaultSummaries.ts
void (0, import_ext_gadget.getBody)().then(function defaultSummaries($body) {
  mw.hook("wikipage.editform").add(($editForm) => {
    processWikiEditor($editForm);
  });
  mw.hook("ve.saveDialog.stateChanged").add(() => {
    processVisualEditor($body);
    mw.hook("ve.activationComplete").add(() => {
      if (mw.config.get(configKey)) {
        mw.config.set(configKey, false);
      }
    });
  });
});

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0RlZmF1bHRTdW1tYXJpZXMvb3B0aW9ucy5qc29uIiwgInNyYy9EZWZhdWx0U3VtbWFyaWVzL0RlZmF1bHRTdW1tYXJpZXMudHMiLCAic3JjL0RlZmF1bHRTdW1tYXJpZXMvbW9kdWxlcy9tZXNzYWdlcy50cyIsICJzcmMvRGVmYXVsdFN1bW1hcmllcy9tb2R1bGVzL3V0aWwvZ2VuZXJhdGVTdW1tYXJ5RHJvcGRvd24udHMiLCAic3JjL0RlZmF1bHRTdW1tYXJpZXMvbW9kdWxlcy9wcm9jZXNzVmlzdWFsRWRpdG9yLnRzIiwgInNyYy9EZWZhdWx0U3VtbWFyaWVzL21vZHVsZXMvcHJvY2Vzc1dpa2lFZGl0b3IudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIntcblx0XCJjb25maWdLZXlcIjogXCJnYWRnZXQtRGVmYXVsdFN1bW1hcmllc19fSW5pdGlhbGl6ZWRcIixcblx0XCJkcm9wZG93bklkXCI6IFwiZWRpdGZvcm1fZGVmYXVsdF9zdW1tYXJ5XCJcbn1cbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7Z2V0Qm9keX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbmltcG9ydCB7cHJvY2Vzc1Zpc3VhbEVkaXRvcn0gZnJvbSAnLi9tb2R1bGVzL3Byb2Nlc3NWaXN1YWxFZGl0b3InO1xuaW1wb3J0IHtwcm9jZXNzV2lraUVkaXRvcn0gZnJvbSAnLi9tb2R1bGVzL3Byb2Nlc3NXaWtpRWRpdG9yJztcblxudm9pZCBnZXRCb2R5KCkudGhlbihmdW5jdGlvbiBkZWZhdWx0U3VtbWFyaWVzKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQge1xuXHRtdy5ob29rKCd3aWtpcGFnZS5lZGl0Zm9ybScpLmFkZCgoJGVkaXRGb3JtKTogdm9pZCA9PiB7XG5cdFx0cHJvY2Vzc1dpa2lFZGl0b3IoJGVkaXRGb3JtKTtcblx0fSk7XG5cblx0bXcuaG9vaygndmUuc2F2ZURpYWxvZy5zdGF0ZUNoYW5nZWQnKS5hZGQoKCk6IHZvaWQgPT4ge1xuXHRcdHByb2Nlc3NWaXN1YWxFZGl0b3IoJGJvZHkpO1xuXG5cdFx0Ly8gU3dpdGNoaW5nIGJldHdlZW4gVkUgYW5kIE5XRSwgcmVxdWlyZXMgdG8gYmUgcmVpbml0aWFsaXplZFxuXHRcdG13Lmhvb2soJ3ZlLmFjdGl2YXRpb25Db21wbGV0ZScpLmFkZCgoKSA9PiB7XG5cdFx0XHRpZiAobXcuY29uZmlnLmdldChPUFRJT05TLmNvbmZpZ0tleSkpIHtcblx0XHRcdFx0bXcuY29uZmlnLnNldChPUFRJT05TLmNvbmZpZ0tleSwgZmFsc2UpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9KTtcbn0pO1xuIiwgImNvbnN0IHt3Z1VMU30gPSB3aW5kb3c7XG5jb25zdCB7d2dDdXJSZXZpc2lvbklkfSA9IG13LmNvbmZpZy5nZXQoKTtcblxuY29uc3QgQ09NTU9OX1NVTU1BUklFU19MQUJFTDogc3RyaW5nID0gd2dVTFMoJ+W4uOeUqOe8lui+keaRmOimgScsICfluLjnlKjnt6jovK/mkZjopoEnKTtcblxubGV0IENPTU1PTl9TVU1NQVJJRVM6IHN0cmluZ1tdID0gW1xuXHR3Z1VMUygn5L+u5q2j6K+t5rOVJywgJ+S/ruato+iqnuazlScpLFxuXHR3Z1VMUygn5L+u5q2j6ZSZ5a2XJywgJ+S/ruato+mMr+WtlycpLFxuXHR3Z1VMUygn6LCD5pW05qC85byPJywgJ+iqv+aVtOagvOW8jycpLFxuXHR3Z1VMUygn56e76Zmk56C05Z2PJywgJ+enu+mZpOegtOWjnicpLFxuXHR3Z1VMUygn56e76Zmk5rWL6K+VJywgJ+enu+mZpOa4rOippicpLFxuXTtcblxuaWYgKCF3Z0N1clJldmlzaW9uSWQpIHtcblx0Q09NTU9OX1NVTU1BUklFUyA9IFt3Z1VMUygn5paw6aG16Z2iJywgJ+aWsOmggemdoicpLCAuLi5DT01NT05fU1VNTUFSSUVTXTtcbn1cblxuY29uc3QgQVJUSUNMRV9TVU1NQVJJRVM6IHN0cmluZ1tdID0gW1xuXHR3Z1VMUygn5omp5YaZ5p2h55uuJywgJ+aTtOWvq+aineebricpLFxuXHR3Z1VMUygn6LCD5pW05p2l5rqQJywgJ+iqv+aVtOS+hua6kCcpLFxuXHR3Z1VMUygn6LCD5pW05YiG57G7JywgJ+iqv+aVtOWIhumhnicpLFxuXHR3Z1VMUygn6LCD5pW06ZO+5o6lJywgJ+iwg+aVtOmAo+e1kCcpLFxuXHR3Z1VMUygn5Yig6Zmk5peg5p2l5rqQ5YaF5a65JywgJ+WIqumZpOeEoeS+hua6kOWFp+WuuScpLFxuXHR3Z1VMUygn5oGi5aSN56e76Zmk55qE5YaF5a65JywgJ+aBouW+qeenu+mZpOeahOWFp+WuuScpLFxuXTtcblxuY29uc3QgVEFMS1BBR0VfU1VNTUFSSUVTOiBzdHJpbmdbXSA9IFtcblx0d2dVTFMoJ+WbnuWkjScsICflm57opoYnKSxcblx0d2dVTFMoJ+ivhOiuuicsICfoqZXoq5YnKSxcblx0d2dVTFMoJ+aEj+ingScsICfmhI/oposnKSxcblx0d2dVTFMoJ+ivt+axgicsICfoq4vmsYInKSxcbl07XG5cbmV4cG9ydCB7Q09NTU9OX1NVTU1BUklFU19MQUJFTCwgQ09NTU9OX1NVTU1BUklFUywgQVJUSUNMRV9TVU1NQVJJRVMsIFRBTEtQQUdFX1NVTU1BUklFU307XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi8uLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtBUlRJQ0xFX1NVTU1BUklFUywgQ09NTU9OX1NVTU1BUklFUywgQ09NTU9OX1NVTU1BUklFU19MQUJFTCwgVEFMS1BBR0VfU1VNTUFSSUVTfSBmcm9tICcuLi9tZXNzYWdlcyc7XG5cbmNvbnN0IGdlbmVyYXRlTWVudU9wdGlvbldpZGdldCA9IChsYWJlbDogc3RyaW5nKTogT08udWkuTWVudU9wdGlvbldpZGdldCA9PiB7XG5cdHJldHVybiBuZXcgT08udWkuTWVudU9wdGlvbldpZGdldCh7XG5cdFx0bGFiZWwsXG5cdH0pO1xufTtcblxuY29uc3QgYWRkT3B0aW9uc1RvRHJvcGRvd24gPSAoZHJvcGRvd25XaWRnZXQ6IE9PLnVpLkRyb3Bkb3duV2lkZ2V0LCBzdW1tYXJpZXM6IHN0cmluZ1tdKTogdm9pZCA9PiB7XG5cdGNvbnN0IG1lbnVPcHRpb25XaWRnZXRzOiBPTy51aS5NZW51T3B0aW9uV2lkZ2V0W10gPSBbXTtcblxuXHRmb3IgKGNvbnN0IHN1bW1hcnkgb2Ygc3VtbWFyaWVzKSB7XG5cdFx0bWVudU9wdGlvbldpZGdldHNbbWVudU9wdGlvbldpZGdldHMubGVuZ3RoXSA9IGdlbmVyYXRlTWVudU9wdGlvbldpZGdldChzdW1tYXJ5KTsgLy8gUmVwbGFjZSBgW10ucHVzaCgpYCB0byBhdm9pZCBwb2x5ZmlsbGluZyBjb3JlLWpzXG5cdH1cblxuXHRkcm9wZG93bldpZGdldC5nZXRNZW51KCkuYWRkSXRlbXMobWVudU9wdGlvbldpZGdldHMpO1xufTtcblxuY29uc3Qgb25TZWxlY3RDYWxsYmFjayA9IChvcHRpb25XaWRnZXQ6IE9PLnVpLk9wdGlvbldpZGdldCwgJHdwU3VtbWFyeTogSlF1ZXJ5KTogdm9pZCA9PiB7XG5cdGNvbnN0IG9yaWdpblN1bW1hcnk6IHN0cmluZyA9ICgkd3BTdW1tYXJ5LnZhbCgpIGFzIHN0cmluZyB8IHVuZGVmaW5lZCkgPz8gJyc7XG5cdGNvbnN0IGN1c3RvbVN1bW1hcnk6IHN0cmluZyA9IG9wdGlvbldpZGdldC5nZXRMYWJlbCgpIGFzIHN0cmluZztcblxuXHQkd3BTdW1tYXJ5LnZhbChvcmlnaW5TdW1tYXJ5LnRyaW0oKSA/IGAke29yaWdpblN1bW1hcnl9ICR7Y3VzdG9tU3VtbWFyeX1gIDogY3VzdG9tU3VtbWFyeSkudHJpZ2dlcignY2hhbmdlJyk7XG59O1xuXG5jb25zdCBnZW5lcmF0ZVN1bW1hcnlEcm9wZG93biA9ICgkd3BTdW1tYXJ5OiBKUXVlcnkpOiBKUXVlcnkgPT4ge1xuXHRjb25zdCB7d2dOYW1lc3BhY2VOdW1iZXJ9ID0gbXcuY29uZmlnLmdldCgpO1xuXG5cdGNvbnN0IGRyb3Bkb3duV2lkZ2V0OiBPTy51aS5Ecm9wZG93bldpZGdldCA9IG5ldyBPTy51aS5Ecm9wZG93bldpZGdldCh7XG5cdFx0bGFiZWw6IENPTU1PTl9TVU1NQVJJRVNfTEFCRUwsXG5cdH0pO1xuXG5cdGRyb3Bkb3duV2lkZ2V0LnNldEVsZW1lbnRJZChPUFRJT05TLmRyb3Bkb3duSWQpO1xuXG5cdGRyb3Bkb3duV2lkZ2V0LmdldE1lbnUoKS5vbignc2VsZWN0JywgKG9wdGlvbldpZGdldDogT08udWkuT3B0aW9uV2lkZ2V0IHwgT08udWkuT3B0aW9uV2lkZ2V0W10gfCBudWxsKTogdm9pZCA9PiB7XG5cdFx0b25TZWxlY3RDYWxsYmFjayhvcHRpb25XaWRnZXQgYXMgT08udWkuT3B0aW9uV2lkZ2V0LCAkd3BTdW1tYXJ5KTtcblx0fSk7XG5cblx0YWRkT3B0aW9uc1RvRHJvcGRvd24oZHJvcGRvd25XaWRnZXQsIENPTU1PTl9TVU1NQVJJRVMpO1xuXHRpZiAod2dOYW1lc3BhY2VOdW1iZXIgPT09IDApIHtcblx0XHRhZGRPcHRpb25zVG9Ecm9wZG93bihkcm9wZG93bldpZGdldCwgQVJUSUNMRV9TVU1NQVJJRVMpO1xuXHR9IGVsc2UgaWYgKHdnTmFtZXNwYWNlTnVtYmVyICUgMiAhPT0gMCAmJiB3Z05hbWVzcGFjZU51bWJlciAhPT0gMykge1xuXHRcdGFkZE9wdGlvbnNUb0Ryb3Bkb3duKGRyb3Bkb3duV2lkZ2V0LCBUQUxLUEFHRV9TVU1NQVJJRVMpO1xuXHR9IGVsc2UgaWYgKHdnTmFtZXNwYWNlTnVtYmVyID09PSAxMTgpIHtcblx0XHRhZGRPcHRpb25zVG9Ecm9wZG93bihkcm9wZG93bldpZGdldCwgQVJUSUNMRV9TVU1NQVJJRVMpO1xuXHR9XG5cblx0cmV0dXJuIGRyb3Bkb3duV2lkZ2V0LiRlbGVtZW50O1xufTtcblxuZXhwb3J0IHtnZW5lcmF0ZVN1bW1hcnlEcm9wZG93bn07XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICd+L0RlZmF1bHRTdW1tYXJpZXMvb3B0aW9ucy5qc29uJztcbmltcG9ydCB7Z2VuZXJhdGVTdW1tYXJ5RHJvcGRvd259IGZyb20gJy4vdXRpbC9nZW5lcmF0ZVN1bW1hcnlEcm9wZG93bic7XG5cbmNvbnN0IHByb2Nlc3NWaXN1YWxFZGl0b3IgPSAoJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KTogdm9pZCA9PiB7XG5cdC8vIEd1YXJkIGFnYWluc3QgZG91YmxlIGluY2x1c2lvbnNcblx0aWYgKG13LmNvbmZpZy5nZXQoT1BUSU9OUy5jb25maWdLZXkpKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdC8vIFNldCBndWFyZFxuXHRtdy5jb25maWcuc2V0KE9QVElPTlMuY29uZmlnS2V5LCB0cnVlKTtcblxuXHRjb25zdCB7dGFyZ2V0fSA9IHdpbmRvdy52ZS5pbml0O1xuXHRjb25zdCB7JHNhdmVPcHRpb25zfSA9IHRhcmdldC5zYXZlRGlhbG9nO1xuXHRpZiAoISRzYXZlT3B0aW9ucy5sZW5ndGgpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCAkZHJvcGRvd25zOiBKUXVlcnkgPSBnZW5lcmF0ZVN1bW1hcnlEcm9wZG93bih0YXJnZXQuc2F2ZURpYWxvZy5lZGl0U3VtbWFyeUlucHV0LiRpbnB1dCk7XG5cblx0aWYgKCRib2R5LmZpbmQoYCMke09QVElPTlMuZHJvcGRvd25JZH1gKS5sZW5ndGgpIHtcblx0XHRtdy5jb25maWcuc2V0KE9QVElPTlMuY29uZmlnS2V5LCB0cnVlKTtcblx0fSBlbHNlIHtcblx0XHQkc2F2ZU9wdGlvbnMuYmVmb3JlKCRkcm9wZG93bnMpO1xuXHR9XG59O1xuXG5leHBvcnQge3Byb2Nlc3NWaXN1YWxFZGl0b3J9O1xuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnfi9EZWZhdWx0U3VtbWFyaWVzL29wdGlvbnMuanNvbic7XG5pbXBvcnQge2dlbmVyYXRlU3VtbWFyeURyb3Bkb3dufSBmcm9tICcuL3V0aWwvZ2VuZXJhdGVTdW1tYXJ5RHJvcGRvd24nO1xuXG5jb25zdCBwcm9jZXNzV2lraUVkaXRvciA9ICgkZWRpdEZvcm06IEpRdWVyeTxIVE1MRWxlbWVudD4pOiB2b2lkID0+IHtcblx0Ly8gR3VhcmQgYWdhaW5zdCBkb3VibGUgaW5jbHVzaW9uc1xuXHRpZiAobXcuY29uZmlnLmdldChPUFRJT05TLmNvbmZpZ0tleSkpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHQvLyBTZXQgZ3VhcmRcblx0bXcuY29uZmlnLnNldChPUFRJT05TLmNvbmZpZ0tleSwgdHJ1ZSk7XG5cblx0Y29uc3QgJGVkaXRDaGVja2JveGVzOiBKUXVlcnkgPSAkZWRpdEZvcm0uZmluZCgnLmVkaXRDaGVja2JveGVzJyk7XG5cdGlmICghJGVkaXRDaGVja2JveGVzLmxlbmd0aCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0ICRkcm9wZG93bnM6IEpRdWVyeSA9IGdlbmVyYXRlU3VtbWFyeURyb3Bkb3duKCRlZGl0Rm9ybS5maW5kKCdpbnB1dFtuYW1lPXdwU3VtbWFyeV0nKSk7XG5cblx0JGRyb3Bkb3ducy5jc3Moe1xuXHRcdCdwYWRkaW5nLWJvdHRvbSc6ICcxZW0nLFxuXHRcdHdpZHRoOiAnNDglJyxcblx0fSk7XG5cblx0aWYgKCEkZWRpdEZvcm0uZmluZChgIyR7T1BUSU9OUy5kcm9wZG93bklkfWApLmxlbmd0aCkge1xuXHRcdCRlZGl0Q2hlY2tib3hlcy5iZWZvcmUoJGRyb3Bkb3ducyk7XG5cdH1cbn07XG5cbmV4cG9ydCB7cHJvY2Vzc1dpa2lFZGl0b3J9O1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNDLElBQUFBLFlBQWE7QUFDYixJQUFBQyxhQUFjOztBQ0RmLElBQUFDLG9CQUFzQkMsUUFBQSxpQkFBQTs7QUNEdEIsSUFBTTtFQUFDQztBQUFLLElBQUlDO0FBQ2hCLElBQU07RUFBQ0M7QUFBZSxJQUFJQyxHQUFHQyxPQUFPQyxJQUFJO0FBRXhDLElBQU1DLHlCQUFpQ04sTUFBTSxVQUFVLFFBQVE7QUFFL0QsSUFBSU8sbUJBQTZCLENBQ2hDUCxNQUFNLFFBQVEsTUFBTSxHQUNwQkEs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QyxJQUFJLE1BQU07QUFDMUMsVUFBSXJFLEdBQUdDLE9BQU9DLElBQVlULFNBQVMsR0FBRztBQUNyQ08sV0FBR0MsT0FBT2dELElBQVl4RCxXQUFXLEtBQUs7TUFDdkM7SUFDRCxDQUFDO0VBQ0YsQ0FBQztBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbImNvbmZpZ0tleSIsICJkcm9wZG93bklkIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgInJlcXVpcmUiLCAid2dVTFMiLCAid2luZG93IiwgIndnQ3VyUmV2aXNpb25JZCIsICJtdyIsICJjb25maWciLCAiZ2V0IiwgIkNPTU1PTl9TVU1NQVJJRVNfTEFCRUwiLCAiQ09NTU9OX1NVTU1BUklFUyIsICJBUlRJQ0xFX1NVTU1BUklFUyIsICJUQUxLUEFHRV9TVU1NQVJJRVMiLCAiZ2VuZXJhdGVNZW51T3B0aW9uV2lkZ2V0IiwgImxhYmVsIiwgIk9PIiwgInVpIiwgIk1lbnVPcHRpb25XaWRnZXQiLCAiYWRkT3B0aW9uc1RvRHJvcGRvd24iLCAiZHJvcGRvd25XaWRnZXQiLCAic3VtbWFyaWVzIiwgIm1lbnVPcHRpb25XaWRnZXRzIiwgIl9pdGVyYXRvciIsICJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsICJfc3RlcCIsICJzIiwgIm4iLCAiZG9uZSIsICJzdW1tYXJ5IiwgInZhbHVlIiwgImxlbmd0aCIsICJlcnIiLCAiZSIsICJmIiwgImdldE1lbnUiLCAiYWRkSXRlbXMiLCAib25TZWxlY3RDYWxsYmFjayIsICJvcHRpb25XaWRnZXQiLCAiJHdwU3VtbWFyeSIsICJfJHdwU3VtbWFyeSR2YWwiLCAib3JpZ2luU3VtbWFyeSIsICJ2YWwiLCAiY3VzdG9tU3VtbWFyeSIsICJnZXRMYWJlbCIsICJ0cmltIiwgImNvbmNhdCIsICJ0cmlnZ2VyIiwgImdlbmVyYXRlU3VtbWFyeURyb3Bkb3duIiwgIndnTmFtZXNwYWNlTnVtYmVyIiwgIkRyb3Bkb3duV2lkZ2V0IiwgInNldEVsZW1lbnRJZCIsICJvbiIsICIkZWxlbWVudCIsICJwcm9jZXNzVmlzdWFsRWRpdG9yIiwgIiRib2R5IiwgInNldCIsICJ0YXJnZXQiLCAidmUiLCAiaW5pdCIsICIkc2F2ZU9wdGlvbnMiLCAic2F2ZURpYWxvZyIsICIkZHJvcGRvd25zIiwgImVkaXRTdW1tYXJ5SW5wdXQiLCAiJGlucHV0IiwgImZpbmQiLCAiYmVmb3JlIiwgInByb2Nlc3NXaWtpRWRpdG9yIiwgIiRlZGl0Rm9ybSIsICIkZWRpdENoZWNrYm94ZXMiLCAiY3NzIiwgIndpZHRoIiwgImdldEJvZHkiLCAidGhlbiIsICJkZWZhdWx0U3VtbWFyaWVzIiwgImhvb2siLCAiYWRkIl0KfQo=

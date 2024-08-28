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
  wgPageName
} = mw.config.get();
var COMMON_SUMMARIES_LABEL = wgULS("常用编辑摘要", "常用編輯摘要");
var COMMON_SUMMARIES = [wgULS("修正语法", "修正語法"), wgULS("修正错字", "修正錯字"), wgULS("调整格式", "調整格式"), wgULS("移除破坏", "移除破壞"), wgULS("移除测试", "移除測試")];
if (!wgPageName) {
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
  } = ve.init;
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0RlZmF1bHRTdW1tYXJpZXMvb3B0aW9ucy5qc29uIiwgInNyYy9EZWZhdWx0U3VtbWFyaWVzL0RlZmF1bHRTdW1tYXJpZXMudHMiLCAic3JjL0RlZmF1bHRTdW1tYXJpZXMvbW9kdWxlcy9tZXNzYWdlcy50cyIsICJzcmMvRGVmYXVsdFN1bW1hcmllcy9tb2R1bGVzL3V0aWwvZ2VuZXJhdGVTdW1tYXJ5RHJvcGRvd24udHMiLCAic3JjL0RlZmF1bHRTdW1tYXJpZXMvbW9kdWxlcy9wcm9jZXNzVmlzdWFsRWRpdG9yLnRzIiwgInNyYy9EZWZhdWx0U3VtbWFyaWVzL21vZHVsZXMvcHJvY2Vzc1dpa2lFZGl0b3IudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIntcblx0XCJjb25maWdLZXlcIjogXCJnYWRnZXQtRGVmYXVsdFN1bW1hcmllc19fSW5pdGlhbGl6ZWRcIixcblx0XCJkcm9wZG93bklkXCI6IFwiZWRpdGZvcm1fZGVmYXVsdF9zdW1tYXJ5XCJcbn1cbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7Z2V0Qm9keX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbmltcG9ydCB7cHJvY2Vzc1Zpc3VhbEVkaXRvcn0gZnJvbSAnLi9tb2R1bGVzL3Byb2Nlc3NWaXN1YWxFZGl0b3InO1xuaW1wb3J0IHtwcm9jZXNzV2lraUVkaXRvcn0gZnJvbSAnLi9tb2R1bGVzL3Byb2Nlc3NXaWtpRWRpdG9yJztcblxudm9pZCBnZXRCb2R5KCkudGhlbihmdW5jdGlvbiBkZWZhdWx0U3VtbWFyaWVzKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQge1xuXHRtdy5ob29rKCd3aWtpcGFnZS5lZGl0Zm9ybScpLmFkZCgoJGVkaXRGb3JtKTogdm9pZCA9PiB7XG5cdFx0cHJvY2Vzc1dpa2lFZGl0b3IoJGVkaXRGb3JtKTtcblx0fSk7XG5cblx0bXcuaG9vaygndmUuc2F2ZURpYWxvZy5zdGF0ZUNoYW5nZWQnKS5hZGQoKCk6IHZvaWQgPT4ge1xuXHRcdHByb2Nlc3NWaXN1YWxFZGl0b3IoJGJvZHkpO1xuXG5cdFx0Ly8gU3dpdGNoaW5nIGJldHdlZW4gVkUgYW5kIE5XRSwgcmVxdWlyZXMgdG8gYmUgcmVpbml0aWFsaXplZFxuXHRcdG13Lmhvb2soJ3ZlLmFjdGl2YXRpb25Db21wbGV0ZScpLmFkZCgoKSA9PiB7XG5cdFx0XHRpZiAobXcuY29uZmlnLmdldChPUFRJT05TLmNvbmZpZ0tleSkpIHtcblx0XHRcdFx0bXcuY29uZmlnLnNldChPUFRJT05TLmNvbmZpZ0tleSwgZmFsc2UpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9KTtcbn0pO1xuIiwgImNvbnN0IHt3Z1VMU30gPSB3aW5kb3c7XG5jb25zdCB7d2dQYWdlTmFtZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cbmNvbnN0IENPTU1PTl9TVU1NQVJJRVNfTEFCRUw6IHN0cmluZyA9IHdnVUxTKCfluLjnlKjnvJbovpHmkZjopoEnLCAn5bi455So57eo6Lyv5pGY6KaBJyk7XG5cbmxldCBDT01NT05fU1VNTUFSSUVTOiBzdHJpbmdbXSA9IFtcblx0d2dVTFMoJ+S/ruato+ivreazlScsICfkv67mraPoqp7ms5UnKSxcblx0d2dVTFMoJ+S/ruato+mUmeWtlycsICfkv67mraPpjK/lrZcnKSxcblx0d2dVTFMoJ+iwg+aVtOagvOW8jycsICfoqr/mlbTmoLzlvI8nKSxcblx0d2dVTFMoJ+enu+mZpOegtOWdjycsICfnp7vpmaTnoLTlo54nKSxcblx0d2dVTFMoJ+enu+mZpOa1i+ivlScsICfnp7vpmaTmuKzoqaYnKSxcbl07XG5cbmlmICghd2dQYWdlTmFtZSkge1xuXHRDT01NT05fU1VNTUFSSUVTID0gW3dnVUxTKCfmlrDpobXpnaInLCAn5paw6aCB6Z2iJyksIC4uLkNPTU1PTl9TVU1NQVJJRVNdO1xufVxuXG5jb25zdCBBUlRJQ0xFX1NVTU1BUklFUzogc3RyaW5nW10gPSBbXG5cdHdnVUxTKCfmianlhpnmnaHnm64nLCAn5pO05a+r5qKd55uuJyksXG5cdHdnVUxTKCfosIPmlbTmnaXmupAnLCAn6Kq/5pW05L6G5rqQJyksXG5cdHdnVUxTKCfosIPmlbTliIbnsbsnLCAn6Kq/5pW05YiG6aGeJyksXG5cdHdnVUxTKCfosIPmlbTpk77mjqUnLCAn6LCD5pW06YCj57WQJyksXG5cdHdnVUxTKCfliKDpmaTml6DmnaXmupDlhoXlrrknLCAn5Yiq6Zmk54Sh5L6G5rqQ5YWn5a65JyksXG5cdHdnVUxTKCfmgaLlpI3np7vpmaTnmoTlhoXlrrknLCAn5oGi5b6p56e76Zmk55qE5YWn5a65JyksXG5dO1xuXG5jb25zdCBUQUxLUEFHRV9TVU1NQVJJRVM6IHN0cmluZ1tdID0gW1xuXHR3Z1VMUygn5Zue5aSNJywgJ+WbnuimhicpLFxuXHR3Z1VMUygn6K+E6K66JywgJ+ipleirlicpLFxuXHR3Z1VMUygn5oSP6KeBJywgJ+aEj+imiycpLFxuXHR3Z1VMUygn6K+35rGCJywgJ+iri+axgicpLFxuXTtcblxuZXhwb3J0IHtDT01NT05fU1VNTUFSSUVTX0xBQkVMLCBDT01NT05fU1VNTUFSSUVTLCBBUlRJQ0xFX1NVTU1BUklFUywgVEFMS1BBR0VfU1VNTUFSSUVTfTtcbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uLy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge0FSVElDTEVfU1VNTUFSSUVTLCBDT01NT05fU1VNTUFSSUVTLCBDT01NT05fU1VNTUFSSUVTX0xBQkVMLCBUQUxLUEFHRV9TVU1NQVJJRVN9IGZyb20gJy4uL21lc3NhZ2VzJztcblxuY29uc3QgZ2VuZXJhdGVNZW51T3B0aW9uV2lkZ2V0ID0gKGxhYmVsOiBzdHJpbmcpOiBPTy51aS5NZW51T3B0aW9uV2lkZ2V0ID0+IHtcblx0cmV0dXJuIG5ldyBPTy51aS5NZW51T3B0aW9uV2lkZ2V0KHtcblx0XHRsYWJlbCxcblx0fSk7XG59O1xuXG5jb25zdCBhZGRPcHRpb25zVG9Ecm9wZG93biA9IChkcm9wZG93bldpZGdldDogT08udWkuRHJvcGRvd25XaWRnZXQsIHN1bW1hcmllczogc3RyaW5nW10pOiB2b2lkID0+IHtcblx0Y29uc3QgbWVudU9wdGlvbldpZGdldHM6IE9PLnVpLk1lbnVPcHRpb25XaWRnZXRbXSA9IFtdO1xuXG5cdGZvciAoY29uc3Qgc3VtbWFyeSBvZiBzdW1tYXJpZXMpIHtcblx0XHRtZW51T3B0aW9uV2lkZ2V0c1ttZW51T3B0aW9uV2lkZ2V0cy5sZW5ndGhdID0gZ2VuZXJhdGVNZW51T3B0aW9uV2lkZ2V0KHN1bW1hcnkpOyAvLyBSZXBsYWNlIGBbXS5wdXNoKClgIHRvIGF2b2lkIHBvbHlmaWxsaW5nIGNvcmUtanNcblx0fVxuXG5cdGRyb3Bkb3duV2lkZ2V0LmdldE1lbnUoKS5hZGRJdGVtcyhtZW51T3B0aW9uV2lkZ2V0cyk7XG59O1xuXG5jb25zdCBvblNlbGVjdENhbGxiYWNrID0gKG9wdGlvbldpZGdldDogT08udWkuT3B0aW9uV2lkZ2V0LCAkd3BTdW1tYXJ5OiBKUXVlcnkpOiB2b2lkID0+IHtcblx0Y29uc3Qgb3JpZ2luU3VtbWFyeTogc3RyaW5nID0gKCR3cFN1bW1hcnkudmFsKCkgYXMgc3RyaW5nIHwgdW5kZWZpbmVkKSA/PyAnJztcblx0Y29uc3QgY3VzdG9tU3VtbWFyeTogc3RyaW5nID0gb3B0aW9uV2lkZ2V0LmdldExhYmVsKCkgYXMgc3RyaW5nO1xuXG5cdCR3cFN1bW1hcnkudmFsKG9yaWdpblN1bW1hcnkudHJpbSgpID8gYCR7b3JpZ2luU3VtbWFyeX0gJHtjdXN0b21TdW1tYXJ5fWAgOiBjdXN0b21TdW1tYXJ5KS50cmlnZ2VyKCdjaGFuZ2UnKTtcbn07XG5cbmNvbnN0IGdlbmVyYXRlU3VtbWFyeURyb3Bkb3duID0gKCR3cFN1bW1hcnk6IEpRdWVyeSk6IEpRdWVyeSA9PiB7XG5cdGNvbnN0IHt3Z05hbWVzcGFjZU51bWJlcn0gPSBtdy5jb25maWcuZ2V0KCk7XG5cblx0Y29uc3QgZHJvcGRvd25XaWRnZXQ6IE9PLnVpLkRyb3Bkb3duV2lkZ2V0ID0gbmV3IE9PLnVpLkRyb3Bkb3duV2lkZ2V0KHtcblx0XHRsYWJlbDogQ09NTU9OX1NVTU1BUklFU19MQUJFTCxcblx0fSk7XG5cblx0ZHJvcGRvd25XaWRnZXQuc2V0RWxlbWVudElkKE9QVElPTlMuZHJvcGRvd25JZCk7XG5cblx0ZHJvcGRvd25XaWRnZXQuZ2V0TWVudSgpLm9uKCdzZWxlY3QnLCAob3B0aW9uV2lkZ2V0OiBPTy51aS5PcHRpb25XaWRnZXQgfCBPTy51aS5PcHRpb25XaWRnZXRbXSB8IG51bGwpOiB2b2lkID0+IHtcblx0XHRvblNlbGVjdENhbGxiYWNrKG9wdGlvbldpZGdldCBhcyBPTy51aS5PcHRpb25XaWRnZXQsICR3cFN1bW1hcnkpO1xuXHR9KTtcblxuXHRhZGRPcHRpb25zVG9Ecm9wZG93bihkcm9wZG93bldpZGdldCwgQ09NTU9OX1NVTU1BUklFUyk7XG5cdGlmICh3Z05hbWVzcGFjZU51bWJlciA9PT0gMCkge1xuXHRcdGFkZE9wdGlvbnNUb0Ryb3Bkb3duKGRyb3Bkb3duV2lkZ2V0LCBBUlRJQ0xFX1NVTU1BUklFUyk7XG5cdH0gZWxzZSBpZiAod2dOYW1lc3BhY2VOdW1iZXIgJSAyICE9PSAwICYmIHdnTmFtZXNwYWNlTnVtYmVyICE9PSAzKSB7XG5cdFx0YWRkT3B0aW9uc1RvRHJvcGRvd24oZHJvcGRvd25XaWRnZXQsIFRBTEtQQUdFX1NVTU1BUklFUyk7XG5cdH0gZWxzZSBpZiAod2dOYW1lc3BhY2VOdW1iZXIgPT09IDExOCkge1xuXHRcdGFkZE9wdGlvbnNUb0Ryb3Bkb3duKGRyb3Bkb3duV2lkZ2V0LCBBUlRJQ0xFX1NVTU1BUklFUyk7XG5cdH1cblxuXHRyZXR1cm4gZHJvcGRvd25XaWRnZXQuJGVsZW1lbnQ7XG59O1xuXG5leHBvcnQge2dlbmVyYXRlU3VtbWFyeURyb3Bkb3dufTtcbiIsICIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW5zYWZlLWNhbGwsIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnNhZmUtYXNzaWdubWVudCAqL1xuaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICd+L0RlZmF1bHRTdW1tYXJpZXMvb3B0aW9ucy5qc29uJztcbmltcG9ydCB7Z2VuZXJhdGVTdW1tYXJ5RHJvcGRvd259IGZyb20gJy4vdXRpbC9nZW5lcmF0ZVN1bW1hcnlEcm9wZG93bic7XG5cbmNvbnN0IHByb2Nlc3NWaXN1YWxFZGl0b3IgPSAoJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KTogdm9pZCA9PiB7XG5cdC8vIEd1YXJkIGFnYWluc3QgZG91YmxlIGluY2x1c2lvbnNcblx0aWYgKG13LmNvbmZpZy5nZXQoT1BUSU9OUy5jb25maWdLZXkpKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdC8vIFNldCBndWFyZFxuXHRtdy5jb25maWcuc2V0KE9QVElPTlMuY29uZmlnS2V5LCB0cnVlKTtcblxuXHQvLyBAdHMtZXhwZWN0LWVycm9yIFRTMjMwNFxuXHRjb25zdCB7dGFyZ2V0fSA9IHZlLmluaXQ7XG5cdC8vIEB0cy1leHBlY3QtZXJyb3IgVFMyMzM5XG5cdGNvbnN0IHskc2F2ZU9wdGlvbnN9ID0gdGFyZ2V0LnNhdmVEaWFsb2cgYXMgSlF1ZXJ5O1xuXHRpZiAoISRzYXZlT3B0aW9ucy5sZW5ndGgpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCAkZHJvcGRvd25zOiBKUXVlcnkgPSBnZW5lcmF0ZVN1bW1hcnlEcm9wZG93bih0YXJnZXQuc2F2ZURpYWxvZy5lZGl0U3VtbWFyeUlucHV0LiRpbnB1dCBhcyBKUXVlcnkpO1xuXG5cdGlmICgkYm9keS5maW5kKGAjJHtPUFRJT05TLmRyb3Bkb3duSWR9YCkubGVuZ3RoKSB7XG5cdFx0bXcuY29uZmlnLnNldChPUFRJT05TLmNvbmZpZ0tleSwgdHJ1ZSk7XG5cdH0gZWxzZSB7XG5cdFx0JHNhdmVPcHRpb25zLmJlZm9yZSgkZHJvcGRvd25zKTtcblx0fVxufTtcblxuZXhwb3J0IHtwcm9jZXNzVmlzdWFsRWRpdG9yfTtcbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJ34vRGVmYXVsdFN1bW1hcmllcy9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtnZW5lcmF0ZVN1bW1hcnlEcm9wZG93bn0gZnJvbSAnLi91dGlsL2dlbmVyYXRlU3VtbWFyeURyb3Bkb3duJztcblxuY29uc3QgcHJvY2Vzc1dpa2lFZGl0b3IgPSAoJGVkaXRGb3JtOiBKUXVlcnk8SFRNTEVsZW1lbnQ+KTogdm9pZCA9PiB7XG5cdC8vIEd1YXJkIGFnYWluc3QgZG91YmxlIGluY2x1c2lvbnNcblx0aWYgKG13LmNvbmZpZy5nZXQoT1BUSU9OUy5jb25maWdLZXkpKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Ly8gU2V0IGd1YXJkXG5cdG13LmNvbmZpZy5zZXQoT1BUSU9OUy5jb25maWdLZXksIHRydWUpO1xuXG5cdGNvbnN0ICRlZGl0Q2hlY2tib3hlczogSlF1ZXJ5ID0gJGVkaXRGb3JtLmZpbmQoJy5lZGl0Q2hlY2tib3hlcycpO1xuXHRpZiAoISRlZGl0Q2hlY2tib3hlcy5sZW5ndGgpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCAkZHJvcGRvd25zOiBKUXVlcnkgPSBnZW5lcmF0ZVN1bW1hcnlEcm9wZG93bigkZWRpdEZvcm0uZmluZCgnaW5wdXRbbmFtZT13cFN1bW1hcnldJykpO1xuXG5cdCRkcm9wZG93bnMuY3NzKHtcblx0XHQncGFkZGluZy1ib3R0b20nOiAnMWVtJyxcblx0XHR3aWR0aDogJzQ4JScsXG5cdH0pO1xuXG5cdGlmICghJGVkaXRGb3JtLmZpbmQoYCMke09QVElPTlMuZHJvcGRvd25JZH1gKS5sZW5ndGgpIHtcblx0XHQkZWRpdENoZWNrYm94ZXMuYmVmb3JlKCRkcm9wZG93bnMpO1xuXHR9XG59O1xuXG5leHBvcnQge3Byb2Nlc3NXaWtpRWRpdG9yfTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQyxJQUFBQSxZQUFhO0FBQ2IsSUFBQUMsYUFBYzs7QUNEZixJQUFBQyxvQkFBc0JDLFFBQUEsaUJB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LG1CQUFtQixFQUFFQyxJQUFLUixlQUFvQjtBQUNyREQsc0JBQWtCQyxTQUFTO0VBQzVCLENBQUM7QUFFRDdELEtBQUdvRSxLQUFLLDRCQUE0QixFQUFFQyxJQUFJLE1BQVk7QUFDckR0Qix3QkFBb0JDLEtBQUs7QUFHekJoRCxPQUFHb0UsS0FBSyx1QkFBdUIsRUFBRUMsSUFBSSxNQUFNO0FBQzFDLFVBQUlyRSxHQUFHQyxPQUFPQyxJQUFZVCxTQUFTLEdBQUc7QUFDckNPLFdBQUdDLE9BQU9nRCxJQUFZeEQsV0FBVyxLQUFLO01BQ3ZDO0lBQ0QsQ0FBQztFQUNGLENBQUM7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogWyJjb25maWdLZXkiLCAiZHJvcGRvd25JZCIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJyZXF1aXJlIiwgIndnVUxTIiwgIndpbmRvdyIsICJ3Z1BhZ2VOYW1lIiwgIm13IiwgImNvbmZpZyIsICJnZXQiLCAiQ09NTU9OX1NVTU1BUklFU19MQUJFTCIsICJDT01NT05fU1VNTUFSSUVTIiwgIkFSVElDTEVfU1VNTUFSSUVTIiwgIlRBTEtQQUdFX1NVTU1BUklFUyIsICJnZW5lcmF0ZU1lbnVPcHRpb25XaWRnZXQiLCAibGFiZWwiLCAiT08iLCAidWkiLCAiTWVudU9wdGlvbldpZGdldCIsICJhZGRPcHRpb25zVG9Ecm9wZG93biIsICJkcm9wZG93bldpZGdldCIsICJzdW1tYXJpZXMiLCAibWVudU9wdGlvbldpZGdldHMiLCAiX2l0ZXJhdG9yIiwgIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwgIl9zdGVwIiwgInMiLCAibiIsICJkb25lIiwgInN1bW1hcnkiLCAidmFsdWUiLCAibGVuZ3RoIiwgImVyciIsICJlIiwgImYiLCAiZ2V0TWVudSIsICJhZGRJdGVtcyIsICJvblNlbGVjdENhbGxiYWNrIiwgIm9wdGlvbldpZGdldCIsICIkd3BTdW1tYXJ5IiwgIl8kd3BTdW1tYXJ5JHZhbCIsICJvcmlnaW5TdW1tYXJ5IiwgInZhbCIsICJjdXN0b21TdW1tYXJ5IiwgImdldExhYmVsIiwgInRyaW0iLCAiY29uY2F0IiwgInRyaWdnZXIiLCAiZ2VuZXJhdGVTdW1tYXJ5RHJvcGRvd24iLCAid2dOYW1lc3BhY2VOdW1iZXIiLCAiRHJvcGRvd25XaWRnZXQiLCAic2V0RWxlbWVudElkIiwgIm9uIiwgIiRlbGVtZW50IiwgInByb2Nlc3NWaXN1YWxFZGl0b3IiLCAiJGJvZHkiLCAic2V0IiwgInRhcmdldCIsICJ2ZSIsICJpbml0IiwgIiRzYXZlT3B0aW9ucyIsICJzYXZlRGlhbG9nIiwgIiRkcm9wZG93bnMiLCAiZWRpdFN1bW1hcnlJbnB1dCIsICIkaW5wdXQiLCAiZmluZCIsICJiZWZvcmUiLCAicHJvY2Vzc1dpa2lFZGl0b3IiLCAiJGVkaXRGb3JtIiwgIiRlZGl0Q2hlY2tib3hlcyIsICJjc3MiLCAid2lkdGgiLCAiZ2V0Qm9keSIsICJ0aGVuIiwgImRlZmF1bHRTdW1tYXJpZXMiLCAiaG9vayIsICJhZGQiXQp9Cg==

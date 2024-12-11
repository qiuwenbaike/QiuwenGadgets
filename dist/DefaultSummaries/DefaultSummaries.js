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
//! src/DefaultSummaries/DefaultSummaries.ts
var import_ext_gadget = require("ext.gadget.Util");
//! src/DefaultSummaries/options.json
var configKey = "gadget-DefaultSummaries__Initialized";
var configKeyVe = "gadget-DefaultSummaries__Initialized__VE";
var dropdownId = "editform_default_summary";
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
var processVisualEditor = () => {
  if (mw.config.get(configKeyVe)) {
    return;
  }
  const {
    target
  } = window.ve.init;
  const {
    saveDialog
  } = target;
  const {
    $saveOptions
  } = saveDialog;
  if (!$saveOptions.length) {
    return;
  }
  mw.config.set(configKeyVe, true);
  const $dropdowns = generateSummaryDropdown(target.saveDialog.editSummaryInput.$input);
  if (!saveDialog.$element.find("#".concat(dropdownId)).length) {
    $saveOptions.before($dropdowns);
  }
  mw.hook("ve.activationComplete").add(() => {
    if (mw.config.get(configKeyVe)) {
      mw.config.set(configKeyVe, false);
    }
  });
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
void (0, import_ext_gadget.getBody)().then(function defaultSummaries() {
  mw.hook("wikipage.editform").add(($editForm) => {
    processWikiEditor($editForm);
  });
  mw.hook("ve.saveDialog.stateChanged").add(() => {
    processVisualEditor();
  });
});

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0RlZmF1bHRTdW1tYXJpZXMvRGVmYXVsdFN1bW1hcmllcy50cyIsICJzcmMvRGVmYXVsdFN1bW1hcmllcy9vcHRpb25zLmpzb24iLCAic3JjL0RlZmF1bHRTdW1tYXJpZXMvbW9kdWxlcy9tZXNzYWdlcy50cyIsICJzcmMvRGVmYXVsdFN1bW1hcmllcy9tb2R1bGVzL3V0aWwvZ2VuZXJhdGVTdW1tYXJ5RHJvcGRvd24udHMiLCAic3JjL0RlZmF1bHRTdW1tYXJpZXMvbW9kdWxlcy9wcm9jZXNzVmlzdWFsRWRpdG9yLnRzIiwgInNyYy9EZWZhdWx0U3VtbWFyaWVzL21vZHVsZXMvcHJvY2Vzc1dpa2lFZGl0b3IudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7Z2V0Qm9keX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbmltcG9ydCB7cHJvY2Vzc1Zpc3VhbEVkaXRvcn0gZnJvbSAnLi9tb2R1bGVzL3Byb2Nlc3NWaXN1YWxFZGl0b3InO1xuaW1wb3J0IHtwcm9jZXNzV2lraUVkaXRvcn0gZnJvbSAnLi9tb2R1bGVzL3Byb2Nlc3NXaWtpRWRpdG9yJztcblxudm9pZCBnZXRCb2R5KCkudGhlbihmdW5jdGlvbiBkZWZhdWx0U3VtbWFyaWVzKCk6IHZvaWQge1xuXHRtdy5ob29rKCd3aWtpcGFnZS5lZGl0Zm9ybScpLmFkZCgoJGVkaXRGb3JtKTogdm9pZCA9PiB7XG5cdFx0cHJvY2Vzc1dpa2lFZGl0b3IoJGVkaXRGb3JtKTtcblx0fSk7XG5cblx0bXcuaG9vaygndmUuc2F2ZURpYWxvZy5zdGF0ZUNoYW5nZWQnKS5hZGQoKCk6IHZvaWQgPT4ge1xuXHRcdHByb2Nlc3NWaXN1YWxFZGl0b3IoKTtcblx0fSk7XG59KTtcbiIsICJ7XG5cdFwiY29uZmlnS2V5XCI6IFwiZ2FkZ2V0LURlZmF1bHRTdW1tYXJpZXNfX0luaXRpYWxpemVkXCIsXG5cdFwiY29uZmlnS2V5VmVcIjogXCJnYWRnZXQtRGVmYXVsdFN1bW1hcmllc19fSW5pdGlhbGl6ZWRfX1ZFXCIsXG5cdFwiZHJvcGRvd25JZFwiOiBcImVkaXRmb3JtX2RlZmF1bHRfc3VtbWFyeVwiXG59XG4iLCAiY29uc3Qge3dnVUxTfSA9IHdpbmRvdztcbmNvbnN0IHt3Z0N1clJldmlzaW9uSWR9ID0gbXcuY29uZmlnLmdldCgpO1xuXG5jb25zdCBDT01NT05fU1VNTUFSSUVTX0xBQkVMOiBzdHJpbmcgPSB3Z1VMUygn5bi455So57yW6L6R5pGY6KaBJywgJ+W4uOeUqOe3qOi8r+aRmOimgScpO1xuXG5sZXQgQ09NTU9OX1NVTU1BUklFUzogc3RyaW5nW10gPSBbXG5cdHdnVUxTKCfkv67mraPor63ms5UnLCAn5L+u5q2j6Kqe5rOVJyksXG5cdHdnVUxTKCfkv67mraPplJnlrZcnLCAn5L+u5q2j6Yyv5a2XJyksXG5cdHdnVUxTKCfosIPmlbTmoLzlvI8nLCAn6Kq/5pW05qC85byPJyksXG5cdHdnVUxTKCfnp7vpmaTnoLTlnY8nLCAn56e76Zmk56C05aOeJyksXG5cdHdnVUxTKCfnp7vpmaTmtYvor5UnLCAn56e76Zmk5ris6KmmJyksXG5dO1xuXG5pZiAoIXdnQ3VyUmV2aXNpb25JZCkge1xuXHRDT01NT05fU1VNTUFSSUVTID0gW3dnVUxTKCfmlrDpobXpnaInLCAn5paw6aCB6Z2iJyksIC4uLkNPTU1PTl9TVU1NQVJJRVNdO1xufVxuXG5jb25zdCBBUlRJQ0xFX1NVTU1BUklFUzogc3RyaW5nW10gPSBbXG5cdHdnVUxTKCfmianlhpnmnaHnm64nLCAn5pO05a+r5qKd55uuJyksXG5cdHdnVUxTKCfosIPmlbTmnaXmupAnLCAn6Kq/5pW05L6G5rqQJyksXG5cdHdnVUxTKCfosIPmlbTliIbnsbsnLCAn6Kq/5pW05YiG6aGeJyksXG5cdHdnVUxTKCfosIPmlbTpk77mjqUnLCAn6LCD5pW06YCj57WQJyksXG5cdHdnVUxTKCfliKDpmaTml6DmnaXmupDlhoXlrrknLCAn5Yiq6Zmk54Sh5L6G5rqQ5YWn5a65JyksXG5cdHdnVUxTKCfmgaLlpI3np7vpmaTnmoTlhoXlrrknLCAn5oGi5b6p56e76Zmk55qE5YWn5a65JyksXG5dO1xuXG5jb25zdCBUQUxLUEFHRV9TVU1NQVJJRVM6IHN0cmluZ1tdID0gW1xuXHR3Z1VMUygn5Zue5aSNJywgJ+WbnuimhicpLFxuXHR3Z1VMUygn6K+E6K66JywgJ+ipleirlicpLFxuXHR3Z1VMUygn5oSP6KeBJywgJ+aEj+imiycpLFxuXHR3Z1VMUygn6K+35rGCJywgJ+iri+axgicpLFxuXTtcblxuZXhwb3J0IHtDT01NT05fU1VNTUFSSUVTX0xBQkVMLCBDT01NT05fU1VNTUFSSUVTLCBBUlRJQ0xFX1NVTU1BUklFUywgVEFMS1BBR0VfU1VNTUFSSUVTfTtcbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uLy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge0FSVElDTEVfU1VNTUFSSUVTLCBDT01NT05fU1VNTUFSSUVTLCBDT01NT05fU1VNTUFSSUVTX0xBQkVMLCBUQUxLUEFHRV9TVU1NQVJJRVN9IGZyb20gJy4uL21lc3NhZ2VzJztcblxuY29uc3QgZ2VuZXJhdGVNZW51T3B0aW9uV2lkZ2V0ID0gKGxhYmVsOiBzdHJpbmcpOiBPTy51aS5NZW51T3B0aW9uV2lkZ2V0ID0+IHtcblx0cmV0dXJuIG5ldyBPTy51aS5NZW51T3B0aW9uV2lkZ2V0KHtcblx0XHRsYWJlbCxcblx0fSk7XG59O1xuXG5jb25zdCBhZGRPcHRpb25zVG9Ecm9wZG93biA9IChkcm9wZG93bldpZGdldDogT08udWkuRHJvcGRvd25XaWRnZXQsIHN1bW1hcmllczogc3RyaW5nW10pOiB2b2lkID0+IHtcblx0Y29uc3QgbWVudU9wdGlvbldpZGdldHM6IE9PLnVpLk1lbnVPcHRpb25XaWRnZXRbXSA9IFtdO1xuXG5cdGZvciAoY29uc3Qgc3VtbWFyeSBvZiBzdW1tYXJpZXMpIHtcblx0XHRtZW51T3B0aW9uV2lkZ2V0c1ttZW51T3B0aW9uV2lkZ2V0cy5sZW5ndGhdID0gZ2VuZXJhdGVNZW51T3B0aW9uV2lkZ2V0KHN1bW1hcnkpOyAvLyBSZXBsYWNlIGBbXS5wdXNoKClgIHRvIGF2b2lkIHBvbHlmaWxsaW5nIGNvcmUtanNcblx0fVxuXG5cdGRyb3Bkb3duV2lkZ2V0LmdldE1lbnUoKS5hZGRJdGVtcyhtZW51T3B0aW9uV2lkZ2V0cyk7XG59O1xuXG5jb25zdCBvblNlbGVjdENhbGxiYWNrID0gKG9wdGlvbldpZGdldDogT08udWkuT3B0aW9uV2lkZ2V0LCAkd3BTdW1tYXJ5OiBKUXVlcnkpOiB2b2lkID0+IHtcblx0Y29uc3Qgb3JpZ2luU3VtbWFyeTogc3RyaW5nID0gKCR3cFN1bW1hcnkudmFsKCkgYXMgc3RyaW5nIHwgdW5kZWZpbmVkKSA/PyAnJztcblx0Y29uc3QgY3VzdG9tU3VtbWFyeTogc3RyaW5nID0gb3B0aW9uV2lkZ2V0LmdldExhYmVsKCkgYXMgc3RyaW5nO1xuXG5cdCR3cFN1bW1hcnkudmFsKG9yaWdpblN1bW1hcnkudHJpbSgpID8gYCR7b3JpZ2luU3VtbWFyeX0gJHtjdXN0b21TdW1tYXJ5fWAgOiBjdXN0b21TdW1tYXJ5KS50cmlnZ2VyKCdjaGFuZ2UnKTtcbn07XG5cbmNvbnN0IGdlbmVyYXRlU3VtbWFyeURyb3Bkb3duID0gKCR3cFN1bW1hcnk6IEpRdWVyeSk6IEpRdWVyeSA9PiB7XG5cdGNvbnN0IHt3Z05hbWVzcGFjZU51bWJlcn0gPSBtdy5jb25maWcuZ2V0KCk7XG5cblx0Y29uc3QgZHJvcGRvd25XaWRnZXQ6IE9PLnVpLkRyb3Bkb3duV2lkZ2V0ID0gbmV3IE9PLnVpLkRyb3Bkb3duV2lkZ2V0KHtcblx0XHRsYWJlbDogQ09NTU9OX1NVTU1BUklFU19MQUJFTCxcblx0fSk7XG5cblx0ZHJvcGRvd25XaWRnZXQuc2V0RWxlbWVudElkKE9QVElPTlMuZHJvcGRvd25JZCk7XG5cblx0ZHJvcGRvd25XaWRnZXQuZ2V0TWVudSgpLm9uKCdzZWxlY3QnLCAob3B0aW9uV2lkZ2V0OiBPTy51aS5PcHRpb25XaWRnZXQgfCBPTy51aS5PcHRpb25XaWRnZXRbXSB8IG51bGwpOiB2b2lkID0+IHtcblx0XHRvblNlbGVjdENhbGxiYWNrKG9wdGlvbldpZGdldCBhcyBPTy51aS5PcHRpb25XaWRnZXQsICR3cFN1bW1hcnkpO1xuXHR9KTtcblxuXHRhZGRPcHRpb25zVG9Ecm9wZG93bihkcm9wZG93bldpZGdldCwgQ09NTU9OX1NVTU1BUklFUyk7XG5cdGlmICh3Z05hbWVzcGFjZU51bWJlciA9PT0gMCkge1xuXHRcdGFkZE9wdGlvbnNUb0Ryb3Bkb3duKGRyb3Bkb3duV2lkZ2V0LCBBUlRJQ0xFX1NVTU1BUklFUyk7XG5cdH0gZWxzZSBpZiAod2dOYW1lc3BhY2VOdW1iZXIgJSAyICE9PSAwICYmIHdnTmFtZXNwYWNlTnVtYmVyICE9PSAzKSB7XG5cdFx0YWRkT3B0aW9uc1RvRHJvcGRvd24oZHJvcGRvd25XaWRnZXQsIFRBTEtQQUdFX1NVTU1BUklFUyk7XG5cdH0gZWxzZSBpZiAod2dOYW1lc3BhY2VOdW1iZXIgPT09IDExOCkge1xuXHRcdGFkZE9wdGlvbnNUb0Ryb3Bkb3duKGRyb3Bkb3duV2lkZ2V0LCBBUlRJQ0xFX1NVTU1BUklFUyk7XG5cdH1cblxuXHRyZXR1cm4gZHJvcGRvd25XaWRnZXQuJGVsZW1lbnQ7XG59O1xuXG5leHBvcnQge2dlbmVyYXRlU3VtbWFyeURyb3Bkb3dufTtcbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJ34vRGVmYXVsdFN1bW1hcmllcy9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtnZW5lcmF0ZVN1bW1hcnlEcm9wZG93bn0gZnJvbSAnLi91dGlsL2dlbmVyYXRlU3VtbWFyeURyb3Bkb3duJztcblxuY29uc3QgcHJvY2Vzc1Zpc3VhbEVkaXRvciA9ICgpOiB2b2lkID0+IHtcblx0Ly8gR3VhcmQgYWdhaW5zdCBkb3VibGUgaW5jbHVzaW9uc1xuXHRpZiAobXcuY29uZmlnLmdldChPUFRJT05TLmNvbmZpZ0tleVZlKSkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IHt0YXJnZXR9ID0gd2luZG93LnZlLmluaXQ7XG5cdGNvbnN0IHtzYXZlRGlhbG9nfSA9IHRhcmdldDtcblx0Y29uc3QgeyRzYXZlT3B0aW9uc30gPSBzYXZlRGlhbG9nO1xuXHRpZiAoISRzYXZlT3B0aW9ucy5sZW5ndGgpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHQvLyBTZXQgZ3VhcmRcblx0bXcuY29uZmlnLnNldChPUFRJT05TLmNvbmZpZ0tleVZlLCB0cnVlKTtcblxuXHRjb25zdCAkZHJvcGRvd25zOiBKUXVlcnkgPSBnZW5lcmF0ZVN1bW1hcnlEcm9wZG93bih0YXJnZXQuc2F2ZURpYWxvZy5lZGl0U3VtbWFyeUlucHV0LiRpbnB1dCk7XG5cblx0aWYgKCFzYXZlRGlhbG9nLiRlbGVtZW50LmZpbmQoYCMke09QVElPTlMuZHJvcGRvd25JZH1gKS5sZW5ndGgpIHtcblx0XHQkc2F2ZU9wdGlvbnMuYmVmb3JlKCRkcm9wZG93bnMpO1xuXHR9XG5cblx0Ly8gUmVpbml0aWFsaXphdGlvbiBpcyByZXF1aXJlZCBmb3Igc3dpdGNoaW5nIGJldHdlZW4gVmlzdWFsRWRpdG9yIGFuZCBOZXcgV2lraXRleHQgRWRpdG9yICgyMDE3KVxuXHRtdy5ob29rKCd2ZS5hY3RpdmF0aW9uQ29tcGxldGUnKS5hZGQoKCkgPT4ge1xuXHRcdGlmIChtdy5jb25maWcuZ2V0KE9QVElPTlMuY29uZmlnS2V5VmUpKSB7XG5cdFx0XHRtdy5jb25maWcuc2V0KE9QVElPTlMuY29uZmlnS2V5VmUsIGZhbHNlKTtcblx0XHR9XG5cdH0pO1xufTtcblxuZXhwb3J0IHtwcm9jZXNzVmlzdWFsRWRpdG9yfTtcbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJ34vRGVmYXVsdFN1bW1hcmllcy9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtnZW5lcmF0ZVN1bW1hcnlEcm9wZG93bn0gZnJvbSAnLi91dGlsL2dlbmVyYXRlU3VtbWFyeURyb3Bkb3duJztcblxuY29uc3QgcHJvY2Vzc1dpa2lFZGl0b3IgPSAoJGVkaXRGb3JtOiBKUXVlcnk8SFRNTEVsZW1lbnQ+KTogdm9pZCA9PiB7XG5cdC8vIEd1YXJkIGFnYWluc3QgZG91YmxlIGluY2x1c2lvbnNcblx0aWYgKG13LmNvbmZpZy5nZXQoT1BUSU9OUy5jb25maWdLZXkpKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Ly8gU2V0IGd1YXJkXG5cdG13LmNvbmZpZy5zZXQoT1BUSU9OUy5jb25maWdLZXksIHRydWUpO1xuXG5cdGNvbnN0ICRlZGl0Q2hlY2tib3hlczogSlF1ZXJ5ID0gJGVkaXRGb3JtLmZpbmQoJy5lZGl0Q2hlY2tib3hlcycpO1xuXHRpZiAoISRlZGl0Q2hlY2tib3hlcy5sZW5ndGgpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCAkZHJvcGRvd25zOiBKUXVlcnkgPSBnZW5lcmF0ZVN1bW1hcnlEcm9wZG93bigkZWRpdEZvcm0uZmluZCgnaW5wdXRbbmFtZT13cFN1bW1hcnldJykpO1xuXG5cdCRkcm9wZG93bnMuY3NzKHtcblx0XHQncGFkZGluZy1ib3R0b20nOiAnMWVtJyxcblx0XHR3aWR0aDogJzQ4JScsXG5cdH0pO1xuXG5cdGlmICghJGVkaXRGb3JtLmZpbmQoYCMke09QVElPTlMuZHJvcGRvd25JZH1gKS5sZW5ndGgpIHtcblx0XHQkZWRpdENoZWNrYm94ZXMuYmVmb3JlKCRkcm9wZG93bnMpO1xuXHR9XG59O1xuXG5leHBvcnQge3Byb2Nlc3NXaWtpRWRpdG9yfTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxvQkFBc0JDLFFBQUEsaUJBQUE7O0FDQ3JCLElBQUFDLFlBQWE7QUFDYixJQUFBQyxjQUFlO0FBQ2YsSUFBQUMsYUFBYzs7QUNIZixJQUFNO0VBQUNDO0FBQUssSUFBSUM7QUFDaEIsSUFBTTtFQUFDQztBQUFlLElBQUlDLEdBQUdDLE9BQU9DLElBQUk7QUFFeEMsSUFBTUMseUJBQWlDTixNQUFNLFVBQVUsUUFBUTtBQUUvRCxJQUFJTyxtQkFBNkIsQ0FDaENQLE1BQU0sUUFBUSxNQUFNLEdBQ3BCQSxNQUFNLFFBQVEs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QUM1QixDQUFDO0FBRUQ5RCxLQUFHMkQsS0FBSyw0QkFBNEIsRUFBRUMsSUFBSSxNQUFZO0FBQ3JEYix3QkFBb0I7RUFDckIsQ0FBQztBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbImltcG9ydF9leHRfZ2FkZ2V0IiwgInJlcXVpcmUiLCAiY29uZmlnS2V5IiwgImNvbmZpZ0tleVZlIiwgImRyb3Bkb3duSWQiLCAid2dVTFMiLCAid2luZG93IiwgIndnQ3VyUmV2aXNpb25JZCIsICJtdyIsICJjb25maWciLCAiZ2V0IiwgIkNPTU1PTl9TVU1NQVJJRVNfTEFCRUwiLCAiQ09NTU9OX1NVTU1BUklFUyIsICJBUlRJQ0xFX1NVTU1BUklFUyIsICJUQUxLUEFHRV9TVU1NQVJJRVMiLCAiZ2VuZXJhdGVNZW51T3B0aW9uV2lkZ2V0IiwgImxhYmVsIiwgIk9PIiwgInVpIiwgIk1lbnVPcHRpb25XaWRnZXQiLCAiYWRkT3B0aW9uc1RvRHJvcGRvd24iLCAiZHJvcGRvd25XaWRnZXQiLCAic3VtbWFyaWVzIiwgIm1lbnVPcHRpb25XaWRnZXRzIiwgIl9pdGVyYXRvciIsICJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsICJfc3RlcCIsICJzIiwgIm4iLCAiZG9uZSIsICJzdW1tYXJ5IiwgInZhbHVlIiwgImxlbmd0aCIsICJlcnIiLCAiZSIsICJmIiwgImdldE1lbnUiLCAiYWRkSXRlbXMiLCAib25TZWxlY3RDYWxsYmFjayIsICJvcHRpb25XaWRnZXQiLCAiJHdwU3VtbWFyeSIsICJfJHdwU3VtbWFyeSR2YWwiLCAib3JpZ2luU3VtbWFyeSIsICJ2YWwiLCAiY3VzdG9tU3VtbWFyeSIsICJnZXRMYWJlbCIsICJ0cmltIiwgImNvbmNhdCIsICJ0cmlnZ2VyIiwgImdlbmVyYXRlU3VtbWFyeURyb3Bkb3duIiwgIndnTmFtZXNwYWNlTnVtYmVyIiwgIkRyb3Bkb3duV2lkZ2V0IiwgInNldEVsZW1lbnRJZCIsICJvbiIsICIkZWxlbWVudCIsICJwcm9jZXNzVmlzdWFsRWRpdG9yIiwgInRhcmdldCIsICJ2ZSIsICJpbml0IiwgInNhdmVEaWFsb2ciLCAiJHNhdmVPcHRpb25zIiwgInNldCIsICIkZHJvcGRvd25zIiwgImVkaXRTdW1tYXJ5SW5wdXQiLCAiJGlucHV0IiwgImZpbmQiLCAiYmVmb3JlIiwgImhvb2siLCAiYWRkIiwgInByb2Nlc3NXaWtpRWRpdG9yIiwgIiRlZGl0Rm9ybSIsICIkZWRpdENoZWNrYm94ZXMiLCAiY3NzIiwgIndpZHRoIiwgImdldEJvZHkiLCAidGhlbiIsICJkZWZhdWx0U3VtbWFyaWVzIl0KfQo=

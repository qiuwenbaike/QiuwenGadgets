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
var COMMON_SUMMARIES = [window.wgULS("新页面", "新頁面"), window.wgULS("修正语法错误", "修正語法錯誤"), window.wgULS("修正错别字", "修正錯別字"), window.wgULS("修正格式", "修正格式"), window.wgULS("移除破坏", "移除破壞"), window.wgULS("移除测试编辑", "移除測試編輯"), window.wgULS("移除未经解释的内容移除", "移除未經解釋的內容移除")];
var ARTICLE_SUMMARIES = [window.wgULS("扩写条目", "擴寫條目"), window.wgULS("调整来源", "調整來源"), window.wgULS("调整内部链接", "调整內部連結"), window.wgULS("调整外部链接", "調整外部連結"), window.wgULS("调整格式", "調整格式"), window.wgULS("调整分类", "調整分類"), window.wgULS("删除无来源内容", "刪除無來源內容")];
var TALKPAGE_SUMMARIES = [window.wgULS("回复", "回覆"), window.wgULS("评论", "評論"), window.wgULS("意见", "意見"), window.wgULS("请求", "請求")];
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
    label: window.wgULS("常用编辑摘要", "常用編輯摘要")
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0RlZmF1bHRTdW1tYXJpZXMvbW9kdWxlcy9jb25zdGFudC50cyIsICJzcmMvRGVmYXVsdFN1bW1hcmllcy9tb2R1bGVzL21lc3NhZ2VzLnRzIiwgInNyYy9EZWZhdWx0U3VtbWFyaWVzL21vZHVsZXMvdXRpbC9nZW5lcmF0ZVN1bW1hcnlEcm9wZG93bi50cyIsICJzcmMvRGVmYXVsdFN1bW1hcmllcy9tb2R1bGVzL3Byb2Nlc3NWaXN1YWxFZGl0b3IudHMiLCAic3JjL0RlZmF1bHRTdW1tYXJpZXMvbW9kdWxlcy9wcm9jZXNzV2lraUVkaXRvci50cyIsICJzcmMvRGVmYXVsdFN1bW1hcmllcy9EZWZhdWx0U3VtbWFyaWVzLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBXR19BQ1RJT046IE1lZGlhV2lraUNvbmZpZ01hcFdnQWN0aW9uID0gbXcuY29uZmlnLmdldCgnd2dBY3Rpb24nKTtcbmNvbnN0IFdHX05BTUVTUEFDRV9OVU1CRVI6IG51bWJlciA9IG13LmNvbmZpZy5nZXQoJ3dnTmFtZXNwYWNlTnVtYmVyJyk7XG5cbmNvbnN0IElTX1dHX0VESVRfT1JfU1VCTUlUX0FDVElPTjogYm9vbGVhbiA9IFsnZWRpdCcsICdzdWJtaXQnXS5pbmNsdWRlcyhXR19BQ1RJT04pO1xuXG5leHBvcnQge1dHX05BTUVTUEFDRV9OVU1CRVIsIElTX1dHX0VESVRfT1JfU1VCTUlUX0FDVElPTn07XG4iLCAiY29uc3QgQ09NTU9OX1NVTU1BUklFUzogc3RyaW5nW10gPSBbXG5cdHdpbmRvdy53Z1VMUygn5paw6aG16Z2iJywgJ+aWsOmggemdoicpLFxuXHR3aW5kb3cud2dVTFMoJ+S/ruato+ivreazlemUmeivrycsICfkv67mraPoqp7ms5XpjK/oqqQnKSxcblx0d2luZG93LndnVUxTKCfkv67mraPplJnliKvlrZcnLCAn5L+u5q2j6Yyv5Yil5a2XJyksXG5cdHdpbmRvdy53Z1VMUygn5L+u5q2j5qC85byPJywgJ+S/ruato+agvOW8jycpLFxuXHR3aW5kb3cud2dVTFMoJ+enu+mZpOegtOWdjycsICfnp7vpmaTnoLTlo54nKSxcblx0d2luZG93LndnVUxTKCfnp7vpmaTmtYvor5XnvJbovpEnLCAn56e76Zmk5ris6Kmm57eo6LyvJyksXG5cdHdpbmRvdy53Z1VMUygn56e76Zmk5pyq57uP6Kej6YeK55qE5YaF5a6556e76ZmkJywgJ+enu+mZpOacque2k+ino+mHi+eahOWFp+Wuueenu+mZpCcpLFxuXTtcbmNvbnN0IEFSVElDTEVfU1VNTUFSSUVTOiBzdHJpbmdbXSA9IFtcblx0d2luZG93LndnVUxTKCfmianlhpnmnaHnm64nLCAn5pO05a+r5qKd55uuJyksXG5cdHdpbmRvdy53Z1VMUygn6LCD5pW05p2l5rqQJywgJ+iqv+aVtOS+hua6kCcpLFxuXHR3aW5kb3cud2dVTFMoJ+iwg+aVtOWGhemDqOmTvuaOpScsICfosIPmlbTlhafpg6jpgKPntZAnKSxcblx0d2luZG93LndnVUxTKCfosIPmlbTlpJbpg6jpk77mjqUnLCAn6Kq/5pW05aSW6YOo6YCj57WQJyksXG5cdHdpbmRvdy53Z1VMUygn6LCD5pW05qC85byPJywgJ+iqv+aVtOagvOW8jycpLFxuXHR3aW5kb3cud2dVTFMoJ+iwg+aVtOWIhuexuycsICfoqr/mlbTliIbpoZ4nKSxcblx0d2luZG93LndnVUxTKCfliKDpmaTml6DmnaXmupDlhoXlrrknLCAn5Yiq6Zmk54Sh5L6G5rqQ5YWn5a65JyksXG5dO1xuY29uc3QgVEFMS1BBR0VfU1VNTUFSSUVTOiBzdHJpbmdbXSA9IFtcblx0d2luZG93LndnVUxTKCflm57lpI0nLCAn5Zue6KaGJyksXG5cdHdpbmRvdy53Z1VMUygn6K+E6K66JywgJ+ipleirlicpLFxuXHR3aW5kb3cud2dVTFMoJ+aEj+ingScsICfmhI/oposnKSxcblx0d2luZG93LndnVUxTKCfor7fmsYInLCAn6KuL5rGCJyksXG5dO1xuXG5leHBvcnQge0NPTU1PTl9TVU1NQVJJRVMsIEFSVElDTEVfU1VNTUFSSUVTLCBUQUxLUEFHRV9TVU1NQVJJRVN9O1xuIiwgImltcG9ydCB7QVJUSUNMRV9TVU1NQVJJRVMsIENPTU1PTl9TVU1NQVJJRVMsIFRBTEtQQUdFX1NVTU1BUklFU30gZnJvbSAnLi4vbWVzc2FnZXMnO1xuaW1wb3J0IHtXR19OQU1FU1BBQ0VfTlVNQkVSfSBmcm9tICcuLi9jb25zdGFudCc7XG5cbmNvbnN0IGdlbmVyYXRlTWVudU9wdGlvbldpZGdldCA9IChsYWJlbDogc3RyaW5nKTogT08udWkuTWVudU9wdGlvbldpZGdldCA9PiB7XG5cdHJldHVybiBuZXcgT08udWkuTWVudU9wdGlvbldpZGdldCh7XG5cdFx0bGFiZWwsXG5cdH0pO1xufTtcblxuY29uc3QgYWRkT3B0aW9uc1RvRHJvcGRvd24gPSAoZHJvcGRvd25XaWRnZXQ6IE9PLnVpLkRyb3Bkb3duV2lkZ2V0LCBzdW1tYXJpZXM6IHN0cmluZ1tdKTogdm9pZCA9PiB7XG5cdGNvbnN0IG1lbnVPcHRpb25XaWRnZXRzOiBPTy51aS5NZW51T3B0aW9uV2lkZ2V0W10gPSBbXTtcblxuXHRmb3IgKGNvbnN0IHN1bW1hcnkgb2Ygc3VtbWFyaWVzKSB7XG5cdFx0bWVudU9wdGlvbldpZGdldHNbbWVudU9wdGlvbldpZGdldHMubGVuZ3RoXSA9IGdlbmVyYXRlTWVudU9wdGlvbldpZGdldChzdW1tYXJ5KTsgLy8gUmVwbGFjZSBgbWVudU9wdGlvbldpZGdldHMucHVzaCgpYCB0byBhdm9pZCBwb2x5ZmlsbGluZyBjb3JlLWpzXG5cdH1cblxuXHRkcm9wZG93bldpZGdldC5nZXRNZW51KCkuYWRkSXRlbXMobWVudU9wdGlvbldpZGdldHMpO1xufTtcblxuY29uc3Qgb25TZWxlY3RDYWxsYmFjayA9IChvcHRpb25XaWRnZXQ6IE9PLnVpLk9wdGlvbldpZGdldCwgJHdwU3VtbWFyeTogSlF1ZXJ5KTogdm9pZCA9PiB7XG5cdGNvbnN0IG9yaWdpblN1bW1hcnk6IHN0cmluZyA9ICgkd3BTdW1tYXJ5LnZhbCgpIGFzIHN0cmluZyB8IHVuZGVmaW5lZCkgPz8gJyc7XG5cdGNvbnN0IGN1c3RvbVN1bW1hcnk6IHN0cmluZyA9IG9wdGlvbldpZGdldC5nZXRMYWJlbCgpIGFzIHN0cmluZztcblxuXHQkd3BTdW1tYXJ5LnZhbChvcmlnaW5TdW1tYXJ5LnRyaW0oKSA/IGAke29yaWdpblN1bW1hcnl9ICR7Y3VzdG9tU3VtbWFyeX1gIDogY3VzdG9tU3VtbWFyeSkudHJpZ2dlcignY2hhbmdlJyk7XG59O1xuXG5jb25zdCBnZW5lcmF0ZVN1bW1hcnlEcm9wZG93biA9ICgkd3BTdW1tYXJ5OiBKUXVlcnkpOiBKUXVlcnkgPT4ge1xuXHRjb25zdCBkcm9wZG93bldpZGdldDogT08udWkuRHJvcGRvd25XaWRnZXQgPSBuZXcgT08udWkuRHJvcGRvd25XaWRnZXQoe1xuXHRcdGxhYmVsOiB3aW5kb3cud2dVTFMoJ+W4uOeUqOe8lui+keaRmOimgScsICfluLjnlKjnt6jovK/mkZjopoEnKSxcblx0fSk7XG5cblx0ZHJvcGRvd25XaWRnZXQuZ2V0TWVudSgpLm9uKCdzZWxlY3QnLCAob3B0aW9uV2lkZ2V0OiBPTy51aS5PcHRpb25XaWRnZXQgfCBPTy51aS5PcHRpb25XaWRnZXRbXSB8IG51bGwpOiB2b2lkID0+IHtcblx0XHRvblNlbGVjdENhbGxiYWNrKG9wdGlvbldpZGdldCBhcyBPTy51aS5PcHRpb25XaWRnZXQsICR3cFN1bW1hcnkpO1xuXHR9KTtcblxuXHRhZGRPcHRpb25zVG9Ecm9wZG93bihkcm9wZG93bldpZGdldCwgQ09NTU9OX1NVTU1BUklFUyk7XG5cdGlmIChXR19OQU1FU1BBQ0VfTlVNQkVSID09PSAwKSB7XG5cdFx0YWRkT3B0aW9uc1RvRHJvcGRvd24oZHJvcGRvd25XaWRnZXQsIEFSVElDTEVfU1VNTUFSSUVTKTtcblx0fSBlbHNlIGlmIChXR19OQU1FU1BBQ0VfTlVNQkVSICUgMiAhPT0gMCAmJiBXR19OQU1FU1BBQ0VfTlVNQkVSICE9PSAzKSB7XG5cdFx0YWRkT3B0aW9uc1RvRHJvcGRvd24oZHJvcGRvd25XaWRnZXQsIFRBTEtQQUdFX1NVTU1BUklFUyk7XG5cdH0gZWxzZSBpZiAoV0dfTkFNRVNQQUNFX05VTUJFUiA9PT0gMTE4KSB7XG5cdFx0YWRkT3B0aW9uc1RvRHJvcGRvd24oZHJvcGRvd25XaWRnZXQsIEFSVElDTEVfU1VNTUFSSUVTKTtcblx0fVxuXG5cdHJldHVybiBkcm9wZG93bldpZGdldC4kZWxlbWVudDtcbn07XG5cbmV4cG9ydCB7Z2VuZXJhdGVTdW1tYXJ5RHJvcGRvd259O1xuIiwgIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnNhZmUtYXNzaWdubWVudCwgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVuc2FmZS1tZW1iZXItYWNjZXNzICovXG5pbXBvcnQge2dlbmVyYXRlU3VtbWFyeURyb3Bkb3dufSBmcm9tICcuL3V0aWwvZ2VuZXJhdGVTdW1tYXJ5RHJvcGRvd24nO1xuXG5sZXQgaXNJbml0OiBib29sZWFuID0gZmFsc2U7XG5cbmNvbnN0IHByb2Nlc3NWaXN1YWxFZGl0b3IgPSAoKTogdm9pZCA9PiB7XG5cdGlmIChpc0luaXQpIHtcblx0XHRyZXR1cm47XG5cdH1cblx0aXNJbml0ID0gdHJ1ZTtcblxuXHQvLyBAdHMtZXhwZWN0LWVycm9yIFRTMjMwNFxuXHRjb25zdCB7dGFyZ2V0fSA9IHZlLmluaXQ7XG5cdC8vIEB0cy1leHBlY3QtZXJyb3IgVFMyMzM5XG5cdGNvbnN0IHskc2F2ZU9wdGlvbnN9ID0gdGFyZ2V0LnNhdmVEaWFsb2cgYXMgSlF1ZXJ5O1xuXHRpZiAoISRzYXZlT3B0aW9ucy5sZW5ndGgpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCAkZHJvcGRvd246IEpRdWVyeSA9IGdlbmVyYXRlU3VtbWFyeURyb3Bkb3duKHRhcmdldC5zYXZlRGlhbG9nLmVkaXRTdW1tYXJ5SW5wdXQuJGlucHV0IGFzIEpRdWVyeSk7XG5cblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnNhZmUtY2FsbFxuXHQkc2F2ZU9wdGlvbnMuYmVmb3JlKCRkcm9wZG93bik7XG59O1xuXG5leHBvcnQge3Byb2Nlc3NWaXN1YWxFZGl0b3J9O1xuIiwgImltcG9ydCB7Z2VuZXJhdGVTdW1tYXJ5RHJvcGRvd259IGZyb20gJy4vdXRpbC9nZW5lcmF0ZVN1bW1hcnlEcm9wZG93bic7XG5pbXBvcnQge2dldEJvZHl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmNvbnN0IHByb2Nlc3NXaWtpRWRpdG9yID0gYXN5bmMgKCk6IFByb21pc2U8dm9pZD4gPT4ge1xuXHRjb25zdCAkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4gPSBhd2FpdCBnZXRCb2R5KCk7XG5cblx0Y29uc3QgJGVkaXRDaGVja2JveGVzOiBKUXVlcnkgPSAkYm9keS5maW5kKCcuZWRpdENoZWNrYm94ZXMnKTtcblx0aWYgKCEkZWRpdENoZWNrYm94ZXMubGVuZ3RoKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgJGRyb3Bkb3duOiBKUXVlcnkgPSBnZW5lcmF0ZVN1bW1hcnlEcm9wZG93bigkYm9keS5maW5kKCcjd3BTdW1tYXJ5JykpO1xuXG5cdCRkcm9wZG93bi5jc3Moe1xuXHRcdCdwYWRkaW5nLWJvdHRvbSc6ICcxZW0nLFxuXHRcdHdpZHRoOiAnNDglJyxcblx0fSk7XG5cdCRlZGl0Q2hlY2tib3hlcy5iZWZvcmUoJGRyb3Bkb3duKTtcbn07XG5cbmV4cG9ydCB7cHJvY2Vzc1dpa2lFZGl0b3J9O1xuIiwgImltcG9ydCB7SVNfV0dfRURJVF9PUl9TVUJNSVRfQUNUSU9OfSBmcm9tICcuL21vZHVsZXMvY29uc3RhbnQnO1xuaW1wb3J0IHtwcm9jZXNzVmlzdWFsRWRpdG9yfSBmcm9tICcuL21vZHVsZXMvcHJvY2Vzc1Zpc3VhbEVkaXRvcic7XG5pbXBvcnQge3Byb2Nlc3NXaWtpRWRpdG9yfSBmcm9tICcuL21vZHVsZXMvcHJvY2Vzc1dpa2lFZGl0b3InO1xuXG4oYXN5bmMgZnVuY3Rpb24gZGVmYXVsdFN1bW1hcmllcygpOiBQcm9taXNlPHZvaWQ+IHtcblx0aWYgKElTX1dHX0VESVRfT1JfU1VCTUlUX0FDVElPTikge1xuXHRcdGF3YWl0IHByb2Nlc3NXaWtpRWRpdG9yKCk7XG5cdH0gZWxzZSB7XG5cdFx0YXdhaXQgbXcubG9hZGVyLnVzaW5nKCdleHQudmlzdWFsRWRpdG9yLmRlc2t0b3BBcnRpY2xlVGFyZ2V0LmluaXQnKTtcblx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVuc2FmZS1jYWxsLCBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW5zYWZlLW1lbWJlci1hY2Nlc3Ncblx0XHRtdy5saWJzWyd2ZSddLmFkZFBsdWdpbigoKTogdm9pZCA9PiB7XG5cdFx0XHRtdy5ob29rKCd2ZS5zYXZlRGlhbG9nLnN0YXRlQ2hhbmdlZCcpLmFkZChwcm9jZXNzVmlzdWFsRWRpdG9yKTtcblx0XHR9KTtcblx0fVxufSkoKTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsWUFBd0NDLEdBQUdDLE9BQU9DLElBQUksVUFBVTtBQUN0RSxJQUFNQyxzQkFBOEJILEdBQUdDLE9BQU9DLElBQUksbUJBQW1CO0FBRXJFLElBQU1FLDhCQUF1QyxDQUFDLFFBQVEsUUFBUSxFQUFFQyxTQUFTTixTQUFTOztBQ0hsRixJQUFNTyxtQkFBNkIsQ0FDbENDLE9BQU9DLE1BQU0sT0FBTyxLQUFLLEdBQ3pCRCxPQUFPQyxNQUFNLFVBQVUsUUFBUSxHQUMvQkQsT0FBT0MsTUFBTSxTQUFTLE9BQU8sR0FDN0JELE9BQU9DLE1BQU0sUUFBUSxNQUFNLEdBQzNCRCxPQUFPQyxNQUFNLFFBQVEsTUFBTSxHQUMzQkQsT0FBT0MsTUFBTSxVQUFVLFFBQVEsR0FDL0JELE9BQU9DLE1BQU0sZUFBZSxhQUFhLENBQUE7QUFFMUMsSUFBTUMsb0JBQThCLENBQ25DRixPQUFPQyxNQUFNLFFBQVEsTUFBTSxHQUMzQkQsT0FB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cEQsVUFBTUMsUUFBQSxPQUFpQyxHQUFNTCxrQkFBQU0sU0FBUTtBQUVyRCxVQUFNQyxrQkFBMEJGLE1BQU1HLEtBQUssaUJBQWlCO0FBQzVELFFBQUksQ0FBQ0QsZ0JBQWdCdkMsUUFBUTtBQUM1QjtJQUNEO0FBRUEsVUFBTTRCLFlBQW9CWCx3QkFBd0JvQixNQUFNRyxLQUFLLFlBQVksQ0FBQztBQUUxRVosY0FBVWEsSUFBSTtNQUNiLGtCQUFrQjtNQUNsQkMsT0FBTztJQUNSLENBQUM7QUFDREgsb0JBQWdCUixPQUFPSCxTQUFTO0VBQ2pDLENBQUE7QUFBQSxTQUFBLFNBZk1NLHFCQUFBO0FBQUEsV0FBQUMsS0FBQVEsTUFBQSxNQUFBQyxTQUFBO0VBQUE7QUFBQSxFQUFBOzs7NENDQ0wsYUFBaUQ7QUFDakQsUUFBSXBFLDZCQUE2QjtBQUNoQyxZQUFNMEQsa0JBQWtCO0lBQ3pCLE9BQU87QUFDTixZQUFNOUQsR0FBR3lFLE9BQU9DLE1BQU0sNENBQTRDO0FBRWxFMUUsU0FBRzJFLEtBQUssSUFBSSxFQUFFQyxVQUFVLE1BQVk7QUFDbkM1RSxXQUFHNkUsS0FBSyw0QkFBNEIsRUFBRUMsSUFBSTVCLG1CQUFtQjtNQUM5RCxDQUFDO0lBQ0Y7RUFDRCxDQUFBO0FBQUEsV0FWZ0I2QixtQkFBQTtBQUFBLFdBQUFDLGtCQUFBVCxNQUFBLE1BQUFDLFNBQUE7RUFBQTtBQUFBLFNBQUFPO0FBQUEsR0FBQSxFQVViOyIsCiAgIm5hbWVzIjogWyJXR19BQ1RJT04iLCAibXciLCAiY29uZmlnIiwgImdldCIsICJXR19OQU1FU1BBQ0VfTlVNQkVSIiwgIklTX1dHX0VESVRfT1JfU1VCTUlUX0FDVElPTiIsICJpbmNsdWRlcyIsICJDT01NT05fU1VNTUFSSUVTIiwgIndpbmRvdyIsICJ3Z1VMUyIsICJBUlRJQ0xFX1NVTU1BUklFUyIsICJUQUxLUEFHRV9TVU1NQVJJRVMiLCAiZ2VuZXJhdGVNZW51T3B0aW9uV2lkZ2V0IiwgImxhYmVsIiwgIk9PIiwgInVpIiwgIk1lbnVPcHRpb25XaWRnZXQiLCAiYWRkT3B0aW9uc1RvRHJvcGRvd24iLCAiZHJvcGRvd25XaWRnZXQiLCAic3VtbWFyaWVzIiwgIm1lbnVPcHRpb25XaWRnZXRzIiwgIl9pdGVyYXRvciIsICJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsICJfc3RlcCIsICJzIiwgIm4iLCAiZG9uZSIsICJzdW1tYXJ5IiwgInZhbHVlIiwgImxlbmd0aCIsICJlcnIiLCAiZSIsICJmIiwgImdldE1lbnUiLCAiYWRkSXRlbXMiLCAib25TZWxlY3RDYWxsYmFjayIsICJvcHRpb25XaWRnZXQiLCAiJHdwU3VtbWFyeSIsICJfJHdwU3VtbWFyeSR2YWwiLCAib3JpZ2luU3VtbWFyeSIsICJ2YWwiLCAiY3VzdG9tU3VtbWFyeSIsICJnZXRMYWJlbCIsICJ0cmltIiwgImNvbmNhdCIsICJ0cmlnZ2VyIiwgImdlbmVyYXRlU3VtbWFyeURyb3Bkb3duIiwgIkRyb3Bkb3duV2lkZ2V0IiwgIm9uIiwgIiRlbGVtZW50IiwgImlzSW5pdCIsICJwcm9jZXNzVmlzdWFsRWRpdG9yIiwgInRhcmdldCIsICJ2ZSIsICJpbml0IiwgIiRzYXZlT3B0aW9ucyIsICJzYXZlRGlhbG9nIiwgIiRkcm9wZG93biIsICJlZGl0U3VtbWFyeUlucHV0IiwgIiRpbnB1dCIsICJiZWZvcmUiLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAicmVxdWlyZSIsICJwcm9jZXNzV2lraUVkaXRvciIsICJfcmVmIiwgIl9hc3luY1RvR2VuZXJhdG9yIiwgIiRib2R5IiwgImdldEJvZHkiLCAiJGVkaXRDaGVja2JveGVzIiwgImZpbmQiLCAiY3NzIiwgIndpZHRoIiwgImFwcGx5IiwgImFyZ3VtZW50cyIsICJsb2FkZXIiLCAidXNpbmciLCAibGlicyIsICJhZGRQbHVnaW4iLCAiaG9vayIsICJhZGQiLCAiZGVmYXVsdFN1bW1hcmllcyIsICJfZGVmYXVsdFN1bW1hcmllcyJdCn0K

})();

/* </nowiki> */

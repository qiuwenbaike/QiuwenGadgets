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
var import_ext_gadget = require("ext.gadget.i18n");
var COMMON_SUMMARIES_LABEL = (0, import_ext_gadget.localize)({
  "zh-hans": "常用编辑摘要",
  "zh-hant": "常用編輯摘要"
});
var COMMON_SUMMARIES = [(0, import_ext_gadget.localize)({
  "zh-hans": "新页面",
  "zh-hant": "新頁面"
}), (0, import_ext_gadget.localize)({
  "zh-hans": "修正语法错误",
  "zh-hant": "修正語法錯誤"
}), (0, import_ext_gadget.localize)({
  "zh-hans": "修正错别字",
  "zh-hant": "修正錯別字"
}), (0, import_ext_gadget.localize)({
  "zh-hans": "修正格式",
  "zh-hant": "修正格式"
}), (0, import_ext_gadget.localize)({
  "zh-hans": "移除破坏",
  "zh-hant": "移除破壞"
}), (0, import_ext_gadget.localize)({
  "zh-hans": "移除测试编辑",
  "zh-hant": "移除測試編輯"
}), (0, import_ext_gadget.localize)({
  "zh-hans": "移除未经解释的内容移除",
  "zh-hant": "移除未經解釋的內容移除"
})];
var ARTICLE_SUMMARIES = [(0, import_ext_gadget.localize)({
  "zh-hans": "扩写条目",
  "zh-hant": "擴寫條目"
}), (0, import_ext_gadget.localize)({
  "zh-hans": "调整来源",
  "zh-hant": "調整來源"
}), (0, import_ext_gadget.localize)({
  "zh-hans": "调整内部链接",
  "zh-hant": "调整內部連結"
}), (0, import_ext_gadget.localize)({
  "zh-hans": "调整外部链接",
  "zh-hant": "調整外部連結"
}), (0, import_ext_gadget.localize)({
  "zh-hans": "调整格式",
  "zh-hant": "調整格式"
}), (0, import_ext_gadget.localize)({
  "zh-hans": "调整分类",
  "zh-hant": "調整分類"
}), (0, import_ext_gadget.localize)({
  "zh-hans": "删除无来源内容",
  "zh-hant": "刪除無來源內容"
})];
var TALKPAGE_SUMMARIES = [(0, import_ext_gadget.localize)({
  "zh-hans": "回复",
  "zh-hant": "回覆"
}), (0, import_ext_gadget.localize)({
  "zh-hans": "评论",
  "zh-hant": "評論"
}), (0, import_ext_gadget.localize)({
  "zh-hans": "意见",
  "zh-hant": "意見"
}), (0, import_ext_gadget.localize)({
  "zh-hans": "请求",
  "zh-hant": "請求"
})];
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
var import_ext_gadget2 = require("ext.gadget.Util");
var processWikiEditor = /* @__PURE__ */ function() {
  var _ref = _asyncToGenerator(function* () {
    const $body = yield (0, import_ext_gadget2.getBody)();
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0RlZmF1bHRTdW1tYXJpZXMvbW9kdWxlcy9jb25zdGFudC50cyIsICJzcmMvRGVmYXVsdFN1bW1hcmllcy9tb2R1bGVzL21lc3NhZ2VzLnRzIiwgInNyYy9EZWZhdWx0U3VtbWFyaWVzL21vZHVsZXMvdXRpbC9nZW5lcmF0ZVN1bW1hcnlEcm9wZG93bi50cyIsICJzcmMvRGVmYXVsdFN1bW1hcmllcy9tb2R1bGVzL3Byb2Nlc3NWaXN1YWxFZGl0b3IudHMiLCAic3JjL0RlZmF1bHRTdW1tYXJpZXMvbW9kdWxlcy9wcm9jZXNzV2lraUVkaXRvci50cyIsICJzcmMvRGVmYXVsdFN1bW1hcmllcy9EZWZhdWx0U3VtbWFyaWVzLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBXR19BQ1RJT046IE1lZGlhV2lraUNvbmZpZ01hcFdnQWN0aW9uID0gbXcuY29uZmlnLmdldCgnd2dBY3Rpb24nKTtcbmNvbnN0IFdHX05BTUVTUEFDRV9OVU1CRVI6IG51bWJlciA9IG13LmNvbmZpZy5nZXQoJ3dnTmFtZXNwYWNlTnVtYmVyJyk7XG5cbmNvbnN0IElTX1dHX0VESVRfT1JfU1VCTUlUX0FDVElPTjogYm9vbGVhbiA9IFsnZWRpdCcsICdzdWJtaXQnXS5pbmNsdWRlcyhXR19BQ1RJT04pO1xuXG5leHBvcnQge1dHX05BTUVTUEFDRV9OVU1CRVIsIElTX1dHX0VESVRfT1JfU1VCTUlUX0FDVElPTn07XG4iLCAiaW1wb3J0IHtsb2NhbGl6ZX0gZnJvbSAnZXh0LmdhZGdldC5pMThuJztcblxuY29uc3QgQ09NTU9OX1NVTU1BUklFU19MQUJFTDogc3RyaW5nID0gbG9jYWxpemUoe1xuXHQnemgtaGFucyc6ICfluLjnlKjnvJbovpHmkZjopoEnLFxuXHQnemgtaGFudCc6ICfluLjnlKjnt6jovK/mkZjopoEnLFxufSk7XG5jb25zdCBDT01NT05fU1VNTUFSSUVTOiBzdHJpbmdbXSA9IFtcblx0bG9jYWxpemUoe1xuXHRcdCd6aC1oYW5zJzogJ+aWsOmhtemdoicsXG5cdFx0J3poLWhhbnQnOiAn5paw6aCB6Z2iJyxcblx0fSksXG5cdGxvY2FsaXplKHtcblx0XHQnemgtaGFucyc6ICfkv67mraPor63ms5XplJnor68nLFxuXHRcdCd6aC1oYW50JzogJ+S/ruato+iqnuazlemMr+iqpCcsXG5cdH0pLFxuXHRsb2NhbGl6ZSh7XG5cdFx0J3poLWhhbnMnOiAn5L+u5q2j6ZSZ5Yir5a2XJyxcblx0XHQnemgtaGFudCc6ICfkv67mraPpjK/liKXlrZcnLFxuXHR9KSxcblx0bG9jYWxpemUoe1xuXHRcdCd6aC1oYW5zJzogJ+S/ruato+agvOW8jycsXG5cdFx0J3poLWhhbnQnOiAn5L+u5q2j5qC85byPJyxcblx0fSksXG5cdGxvY2FsaXplKHtcblx0XHQnemgtaGFucyc6ICfnp7vpmaTnoLTlnY8nLFxuXHRcdCd6aC1oYW50JzogJ+enu+mZpOegtOWjnicsXG5cdH0pLFxuXHRsb2NhbGl6ZSh7XG5cdFx0J3poLWhhbnMnOiAn56e76Zmk5rWL6K+V57yW6L6RJyxcblx0XHQnemgtaGFudCc6ICfnp7vpmaTmuKzoqabnt6jovK8nLFxuXHR9KSxcblx0bG9jYWxpemUoe1xuXHRcdCd6aC1oYW5zJzogJ+enu+mZpOacque7j+ino+mHiueahOWGheWuueenu+mZpCcsXG5cdFx0J3poLWhhbnQnOiAn56e76Zmk5pyq57aT6Kej6YeL55qE5YWn5a6556e76ZmkJyxcblx0fSksXG5dO1xuY29uc3QgQVJUSUNMRV9TVU1NQVJJRVM6IHN0cmluZ1tdID0gW1xuXHRsb2NhbGl6ZSh7XG5cdFx0J3poLWhhbnMnOiAn5omp5YaZ5p2h55uuJyxcblx0XHQnemgtaGFudCc6ICfmk7Tlr6vmop3nm64nLFxuXHR9KSxcblx0bG9jYWxpemUoe1xuXHRcdCd6aC1oYW5zJzogJ+iwg+aVtOadpea6kCcsXG5cdFx0J3poLWhhbnQnOiAn6Kq/5pW05L6G5rqQJyxcblx0fSksXG5cdGxvY2FsaXplKHtcblx0XHQnemgtaGFucyc6ICfosIPmlbTlhoXpg6jpk77mjqUnLFxuXHRcdCd6aC1oYW50JzogJ+iwg+aVtOWFp+mDqOmAo+e1kCcsXG5cdH0pLFxuXHRsb2NhbGl6ZSh7XG5cdFx0J3poLWhhbnMnOiAn6LCD5pW05aSW6YOo6ZO+5o6lJyxcblx0XHQnemgtaGFudCc6ICfoqr/mlbTlpJbpg6jpgKPntZAnLFxuXHR9KSxcblx0bG9jYWxpemUoe1xuXHRcdCd6aC1oYW5zJzogJ+iwg+aVtOagvOW8jycsXG5cdFx0J3poLWhhbnQnOiAn6Kq/5pW05qC85byPJyxcblx0fSksXG5cdGxvY2FsaXplKHtcblx0XHQnemgtaGFucyc6ICfosIPmlbTliIbnsbsnLFxuXHRcdCd6aC1oYW50JzogJ+iqv+aVtOWIhumhnicsXG5cdH0pLFxuXHRsb2NhbGl6ZSh7XG5cdFx0J3poLWhhbnMnOiAn5Yig6Zmk5peg5p2l5rqQ5YaF5a65Jyxcblx0XHQnemgtaGFudCc6ICfliKrpmaTnhKHkvobmupDlhaflrrknLFxuXHR9KSxcbl07XG5jb25zdCBUQUxLUEFHRV9TVU1NQVJJRVM6IHN0cmluZ1tdID0gW1xuXHRsb2NhbGl6ZSh7XG5cdFx0J3poLWhhbnMnOiAn5Zue5aSNJyxcblx0XHQnemgtaGFudCc6ICflm57opoYnLFxuXHR9KSxcblx0bG9jYWxpemUoe1xuXHRcdCd6aC1oYW5zJzogJ+ivhOiuuicsXG5cdFx0J3poLWhhbnQnOiAn6KmV6KuWJyxcblx0fSksXG5cdGxvY2FsaXplKHtcblx0XHQnemgtaGFucyc6ICfmhI/op4EnLFxuXHRcdCd6aC1oYW50JzogJ+aEj+imiycsXG5cdH0pLFxuXHRsb2NhbGl6ZSh7XG5cdFx0J3poLWhhbnMnOiAn6K+35rGCJyxcblx0XHQnemgtaGFudCc6ICfoq4vmsYInLFxuXHR9KSxcbl07XG5cbmV4cG9ydCB7Q09NTU9OX1NVTU1BUklFU19MQUJFTCwgQ09NTU9OX1NVTU1BUklFUywgQVJUSUNMRV9TVU1NQVJJRVMsIFRBTEtQQUdFX1NVTU1BUklFU307XG4iLCAiaW1wb3J0IHtBUlRJQ0xFX1NVTU1BUklFUywgQ09NTU9OX1NVTU1BUklFUywgQ09NTU9OX1NVTU1BUklFU19MQUJFTCwgVEFMS1BBR0VfU1VNTUFSSUVTfSBmcm9tICcuLi9tZXNzYWdlcyc7XG5pbXBvcnQge1dHX05BTUVTUEFDRV9OVU1CRVJ9IGZyb20gJy4uL2NvbnN0YW50JztcblxuY29uc3QgZ2VuZXJhdGVNZW51T3B0aW9uV2lkZ2V0ID0gKGxhYmVsOiBzdHJpbmcpOiBPTy51aS5NZW51T3B0aW9uV2lkZ2V0ID0+IHtcblx0cmV0dXJuIG5ldyBPTy51aS5NZW51T3B0aW9uV2lkZ2V0KHtcblx0XHRsYWJlbCxcblx0fSk7XG59O1xuXG5jb25zdCBhZGRPcHRpb25zVG9Ecm9wZG93biA9IChkcm9wZG93bldpZGdldDogT08udWkuRHJvcGRvd25XaWRnZXQsIHN1bW1hcmllczogc3RyaW5nW10pOiB2b2lkID0+IHtcblx0Y29uc3QgbWVudU9wdGlvbldpZGdldHM6IE9PLnVpLk1lbnVPcHRpb25XaWRnZXRbXSA9IFtdO1xuXG5cdGZvciAoY29uc3Qgc3VtbWFyeSBvZiBzdW1tYXJpZXMpIHtcblx0XHRtZW51T3B0aW9uV2lkZ2V0c1ttZW51T3B0aW9uV2lkZ2V0cy5sZW5ndGhdID0gZ2VuZXJhdGVNZW51T3B0aW9uV2lkZ2V0KHN1bW1hcnkpOyAvLyBSZXBsYWNlIGBtZW51T3B0aW9uV2lkZ2V0cy5wdXNoKClgIHRvIGF2b2lkIHBvbHlmaWxsaW5nIGNvcmUtanNcblx0fVxuXG5cdGRyb3Bkb3duV2lkZ2V0LmdldE1lbnUoKS5hZGRJdGVtcyhtZW51T3B0aW9uV2lkZ2V0cyk7XG59O1xuXG5jb25zdCBvblNlbGVjdENhbGxiYWNrID0gKG9wdGlvbldpZGdldDogT08udWkuT3B0aW9uV2lkZ2V0LCAkd3BTdW1tYXJ5OiBKUXVlcnkpOiB2b2lkID0+IHtcblx0Y29uc3Qgb3JpZ2luU3VtbWFyeTogc3RyaW5nID0gKCR3cFN1bW1hcnkudmFsKCkgYXMgc3RyaW5nIHwgdW5kZWZpbmVkKSA/PyAnJztcblx0Y29uc3QgY3VzdG9tU3VtbWFyeTogc3RyaW5nID0gb3B0aW9uV2lkZ2V0LmdldExhYmVsKCkgYXMgc3RyaW5nO1xuXG5cdCR3cFN1bW1hcnkudmFsKG9yaWdpblN1bW1hcnkudHJpbSgpID8gYCR7b3JpZ2luU3VtbWFyeX0gJHtjdXN0b21TdW1tYXJ5fWAgOiBjdXN0b21TdW1tYXJ5KS50cmlnZ2VyKCdjaGFuZ2UnKTtcbn07XG5cbmNvbnN0IGdlbmVyYXRlU3VtbWFyeURyb3Bkb3duID0gKCR3cFN1bW1hcnk6IEpRdWVyeSk6IEpRdWVyeSA9PiB7XG5cdGNvbnN0IGRyb3Bkb3duV2lkZ2V0OiBPTy51aS5Ecm9wZG93bldpZGdldCA9IG5ldyBPTy51aS5Ecm9wZG93bldpZGdldCh7XG5cdFx0bGFiZWw6IENPTU1PTl9TVU1NQVJJRVNfTEFCRUwsXG5cdH0pO1xuXG5cdGRyb3Bkb3duV2lkZ2V0LmdldE1lbnUoKS5vbignc2VsZWN0JywgKG9wdGlvbldpZGdldDogT08udWkuT3B0aW9uV2lkZ2V0IHwgT08udWkuT3B0aW9uV2lkZ2V0W10gfCBudWxsKTogdm9pZCA9PiB7XG5cdFx0b25TZWxlY3RDYWxsYmFjayhvcHRpb25XaWRnZXQgYXMgT08udWkuT3B0aW9uV2lkZ2V0LCAkd3BTdW1tYXJ5KTtcblx0fSk7XG5cblx0YWRkT3B0aW9uc1RvRHJvcGRvd24oZHJvcGRvd25XaWRnZXQsIENPTU1PTl9TVU1NQVJJRVMpO1xuXHRpZiAoV0dfTkFNRVNQQUNFX05VTUJFUiA9PT0gMCkge1xuXHRcdGFkZE9wdGlvbnNUb0Ryb3Bkb3duKGRyb3Bkb3duV2lkZ2V0LCBBUlRJQ0xFX1NVTU1BUklFUyk7XG5cdH0gZWxzZSBpZiAoV0dfTkFNRVNQQUNFX05VTUJFUiAlIDIgIT09IDAgJiYgV0dfTkFNRVNQQUNFX05VTUJFUiAhPT0gMykge1xuXHRcdGFkZE9wdGlvbnNUb0Ryb3Bkb3duKGRyb3Bkb3duV2lkZ2V0LCBUQUxLUEFHRV9TVU1NQVJJRVMpO1xuXHR9IGVsc2UgaWYgKFdHX05BTUVTUEFDRV9OVU1CRVIgPT09IDExOCkge1xuXHRcdGFkZE9wdGlvbnNUb0Ryb3Bkb3duKGRyb3Bkb3duV2lkZ2V0LCBBUlRJQ0xFX1NVTU1BUklFUyk7XG5cdH1cblxuXHRyZXR1cm4gZHJvcGRvd25XaWRnZXQuJGVsZW1lbnQ7XG59O1xuXG5leHBvcnQge2dlbmVyYXRlU3VtbWFyeURyb3Bkb3dufTtcbiIsICIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW5zYWZlLWFzc2lnbm1lbnQsIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnNhZmUtbWVtYmVyLWFjY2VzcyAqL1xuaW1wb3J0IHtnZW5lcmF0ZVN1bW1hcnlEcm9wZG93bn0gZnJvbSAnLi91dGlsL2dlbmVyYXRlU3VtbWFyeURyb3Bkb3duJztcblxubGV0IGlzSW5pdDogYm9vbGVhbiA9IGZhbHNlO1xuXG5jb25zdCBwcm9jZXNzVmlzdWFsRWRpdG9yID0gKCk6IHZvaWQgPT4ge1xuXHRpZiAoaXNJbml0KSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdGlzSW5pdCA9IHRydWU7XG5cblx0Ly8gQHRzLWV4cGVjdC1lcnJvciBUUzIzMDRcblx0Y29uc3Qge3RhcmdldH0gPSB2ZS5pbml0O1xuXHQvLyBAdHMtZXhwZWN0LWVycm9yIFRTMjMzOVxuXHRjb25zdCB7JHNhdmVPcHRpb25zfSA9IHRhcmdldC5zYXZlRGlhbG9nIGFzIEpRdWVyeTtcblx0aWYgKCEkc2F2ZU9wdGlvbnMubGVuZ3RoKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgJGRyb3Bkb3duOiBKUXVlcnkgPSBnZW5lcmF0ZVN1bW1hcnlEcm9wZG93bih0YXJnZXQuc2F2ZURpYWxvZy5lZGl0U3VtbWFyeUlucHV0LiRpbnB1dCBhcyBKUXVlcnkpO1xuXG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW5zYWZlLWNhbGxcblx0JHNhdmVPcHRpb25zLmJlZm9yZSgkZHJvcGRvd24pO1xufTtcblxuZXhwb3J0IHtwcm9jZXNzVmlzdWFsRWRpdG9yfTtcbiIsICJpbXBvcnQge2dlbmVyYXRlU3VtbWFyeURyb3Bkb3dufSBmcm9tICcuL3V0aWwvZ2VuZXJhdGVTdW1tYXJ5RHJvcGRvd24nO1xuaW1wb3J0IHtnZXRCb2R5fSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG5jb25zdCBwcm9jZXNzV2lraUVkaXRvciA9IGFzeW5jICgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0Y29uc3QgJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+ID0gYXdhaXQgZ2V0Qm9keSgpO1xuXG5cdGNvbnN0ICRlZGl0Q2hlY2tib3hlczogSlF1ZXJ5ID0gJGJvZHkuZmluZCgnLmVkaXRDaGVja2JveGVzJyk7XG5cdGlmICghJGVkaXRDaGVja2JveGVzLmxlbmd0aCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0ICRkcm9wZG93bjogSlF1ZXJ5ID0gZ2VuZXJhdGVTdW1tYXJ5RHJvcGRvd24oJGJvZHkuZmluZCgnI3dwU3VtbWFyeScpKTtcblxuXHQkZHJvcGRvd24uY3NzKHtcblx0XHQncGFkZGluZy1ib3R0b20nOiAnMWVtJyxcblx0XHR3aWR0aDogJzQ4JScsXG5cdH0pO1xuXHQkZWRpdENoZWNrYm94ZXMuYmVmb3JlKCRkcm9wZG93bik7XG59O1xuXG5leHBvcnQge3Byb2Nlc3NXaWtpRWRpdG9yfTtcbiIsICJpbXBvcnQge0lTX1dHX0VESVRfT1JfU1VCTUlUX0FDVElPTn0gZnJvbSAnLi9tb2R1bGVzL2NvbnN0YW50JztcbmltcG9ydCB7cHJvY2Vzc1Zpc3VhbEVkaXRvcn0gZnJvbSAnLi9tb2R1bGVzL3Byb2Nlc3NWaXN1YWxFZGl0b3InO1xuaW1wb3J0IHtwcm9jZXNzV2lraUVkaXRvcn0gZnJvbSAnLi9tb2R1bGVzL3Byb2Nlc3NXaWtpRWRpdG9yJztcblxuKGFzeW5jIGZ1bmN0aW9uIGRlZmF1bHRTdW1tYXJpZXMoKTogUHJvbWlzZTx2b2lkPiB7XG5cdGlmIChJU19XR19FRElUX09SX1NVQk1JVF9BQ1RJT04pIHtcblx0XHRhd2FpdCBwcm9jZXNzV2lraUVkaXRvcigpO1xuXHR9IGVsc2Uge1xuXHRcdGF3YWl0IG13LmxvYWRlci51c2luZygnZXh0LnZpc3VhbEVkaXRvci5kZXNrdG9wQXJ0aWNsZVRhcmdldC5pbml0Jyk7XG5cdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnNhZmUtY2FsbCwgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVuc2FmZS1tZW1iZXItYWNjZXNzXG5cdFx0bXcubGlic1sndmUnXS5hZGRQbHVnaW4oKCk6IHZvaWQgPT4ge1xuXHRcdFx0bXcuaG9vaygndmUuc2F2ZURpYWxvZy5zdGF0ZUNoYW5nZWQnKS5hZGQocHJvY2Vzc1Zpc3VhbEVkaXRvcik7XG5cdFx0fSk7XG5cdH1cbn0pKCk7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsWUFBd0NDLEdBQUdDLE9BQU9DLElBQUksVUFBVTtBQUN0RSxJQUFNQyxzQkFBOEJILEdBQUdDLE9BQU9DLElBQUksbUJBQW1CO0FBRXJFLElBQU1FLDhCQUF1QyxDQUFDLFFBQVEsUUFBUSxFQUFFQyxTQUFTTixTQUFTOztBQ0hsRixJQUFBTyxvQkFBdUJDLFFBQUEsaUJBQUE7QUFFdkIsSUFBTUMsMEJBQUEsR0FBaUNGLGtCQUFBRyxVQUFTO0VBQy9DLFdBQVc7RUFDWCxXQUFXO0FBQ1osQ0FBQztBQUNELElBQU1DLG1CQUE2QixFQUFBLEdBQ2xDSixrQkFBQUcsVUFBUztFQUNSLFdBQVc7RUFDWCxXQUFXO0FBQ1osQ0FBQyxJQUFBLEdBQ0RILGtCQUFBRyxVQUFTO0VBQ1IsV0FBVztFQUNYLFdBQVc7QUFDWixDQUFDLElBQUEsR0FDREgsa0JBQUFHLFVBQVM7RUFDUixXQUFXO0VBQ1gsV0FBVztBQUNaLENBQUMsSUFBQSxHQUNESCxrQkFBQUcsVUFBUztFQUNSLFdBQVc7RUFDWCxX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QU9DLE1BQU0sNENBQTRDO0FBRWxFM0UsU0FBRzRFLEtBQUssSUFBSSxFQUFFQyxVQUFVLE1BQVk7QUFDbkM3RSxXQUFHOEUsS0FBSyw0QkFBNEIsRUFBRUMsSUFBSTNCLG1CQUFtQjtNQUM5RCxDQUFDO0lBQ0Y7RUFDRCxDQUFBO0FBQUEsV0FWZ0I0QixtQkFBQTtBQUFBLFdBQUFDLGtCQUFBVCxNQUFBLE1BQUFDLFNBQUE7RUFBQTtBQUFBLFNBQUFPO0FBQUEsR0FBQSxFQVViOyIsCiAgIm5hbWVzIjogWyJXR19BQ1RJT04iLCAibXciLCAiY29uZmlnIiwgImdldCIsICJXR19OQU1FU1BBQ0VfTlVNQkVSIiwgIklTX1dHX0VESVRfT1JfU1VCTUlUX0FDVElPTiIsICJpbmNsdWRlcyIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJyZXF1aXJlIiwgIkNPTU1PTl9TVU1NQVJJRVNfTEFCRUwiLCAibG9jYWxpemUiLCAiQ09NTU9OX1NVTU1BUklFUyIsICJBUlRJQ0xFX1NVTU1BUklFUyIsICJUQUxLUEFHRV9TVU1NQVJJRVMiLCAiZ2VuZXJhdGVNZW51T3B0aW9uV2lkZ2V0IiwgImxhYmVsIiwgIk9PIiwgInVpIiwgIk1lbnVPcHRpb25XaWRnZXQiLCAiYWRkT3B0aW9uc1RvRHJvcGRvd24iLCAiZHJvcGRvd25XaWRnZXQiLCAic3VtbWFyaWVzIiwgIm1lbnVPcHRpb25XaWRnZXRzIiwgIl9pdGVyYXRvciIsICJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsICJfc3RlcCIsICJzIiwgIm4iLCAiZG9uZSIsICJzdW1tYXJ5IiwgInZhbHVlIiwgImxlbmd0aCIsICJlcnIiLCAiZSIsICJmIiwgImdldE1lbnUiLCAiYWRkSXRlbXMiLCAib25TZWxlY3RDYWxsYmFjayIsICJvcHRpb25XaWRnZXQiLCAiJHdwU3VtbWFyeSIsICJfJHdwU3VtbWFyeSR2YWwiLCAib3JpZ2luU3VtbWFyeSIsICJ2YWwiLCAiY3VzdG9tU3VtbWFyeSIsICJnZXRMYWJlbCIsICJ0cmltIiwgImNvbmNhdCIsICJ0cmlnZ2VyIiwgImdlbmVyYXRlU3VtbWFyeURyb3Bkb3duIiwgIkRyb3Bkb3duV2lkZ2V0IiwgIm9uIiwgIiRlbGVtZW50IiwgImlzSW5pdCIsICJwcm9jZXNzVmlzdWFsRWRpdG9yIiwgInRhcmdldCIsICJ2ZSIsICJpbml0IiwgIiRzYXZlT3B0aW9ucyIsICJzYXZlRGlhbG9nIiwgIiRkcm9wZG93biIsICJlZGl0U3VtbWFyeUlucHV0IiwgIiRpbnB1dCIsICJiZWZvcmUiLCAiaW1wb3J0X2V4dF9nYWRnZXQyIiwgInByb2Nlc3NXaWtpRWRpdG9yIiwgIl9yZWYiLCAiX2FzeW5jVG9HZW5lcmF0b3IiLCAiJGJvZHkiLCAiZ2V0Qm9keSIsICIkZWRpdENoZWNrYm94ZXMiLCAiZmluZCIsICJjc3MiLCAid2lkdGgiLCAiYXBwbHkiLCAiYXJndW1lbnRzIiwgImxvYWRlciIsICJ1c2luZyIsICJsaWJzIiwgImFkZFBsdWdpbiIsICJob29rIiwgImFkZCIsICJkZWZhdWx0U3VtbWFyaWVzIiwgIl9kZWZhdWx0U3VtbWFyaWVzIl0KfQo=

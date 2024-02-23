/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://zh.wikipedia.org/wiki/User:WhitePhosphorus/js/rrd.js}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/RRD}
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

// dist/RRD/RRD.js
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
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    var _iterator = _createForOfIteratorHelper(__getOwnPropNames(from)), _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done; ) {
        let key = _step.value;
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, {
            get: () => from[key],
            enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
          });
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
    value: mod,
    enumerable: true
  }) : target,
  mod
));
//! src/RRD/modules/constant.ts
var WG_ACTION = mw.config.get("wgAction");
var IS_WG_HISTORY_ACTION = WG_ACTION === "history";
var IS_LOG = mw.config.get("wgCanonicalSpecialPageName") === "Log";
var RRD_PAGE = "Qiuwen_talk:版本删除提报";
//! src/RRD/components/DialogInner.tsx
var import_ext_gadget = __toESM(require("ext.gadget.React"), 1);
//! src/RRD/modules/i18n.ts
var getI18nMessages = () => {
  const {
    wgULS
  } = window;
  return {
    editSummary: wgULS("[[MediaWiki:Gadget-RRD.js|半自动提报]]修订版本删除", "[[MediaWiki:Gadget-RRD.js|半自動提報]]修訂版本刪除"),
    errNoRevisionProvided: wgULS("您没有选择需隐藏的版本！", "您沒有選擇需隱藏的版本！"),
    errNoItemProvided: wgULS("您没有选择需隐藏的项目！", "您沒有選擇需隱藏的項目！"),
    warnNoReasonProvided: wgULS("您没有输入任何理由！确定要继续吗？", "您沒有輸入任何理由！確定要繼續嗎？"),
    hideItems: wgULS("需隐藏的项目：", "需隱藏的項目："),
    hideContent: wgULS("编辑内容", "編輯內容"),
    hideLog: wgULS("日志目标与参数", "日誌目標與參數"),
    hideUsername: wgULS("编辑者用户名/IP地址", "編輯者用戶名/IP位址"),
    hideSummary: wgULS("编辑摘要", "編輯摘要"),
    hideReason: wgULS("理据：", "理據："),
    hideReasonRD1: wgULS("RD1：条目中明显侵犯著作权的内容", "RD1：條目中明顯侵犯著作權的內容"),
    hideReasonRD2: wgULS("RD2：严重侮辱、贬低或攻击性文本", "RD2：嚴重侮辱、貶低或攻擊性文本"),
    hideReasonRD3: wgULS("RD3：纯粹扰乱性内容", "純粹擾亂性內容"),
    hideReasonRD4: wgULS("RD4：明显违反法律法规或违背公序良俗的内容", "RD4：明顯違反法律法規或違背公序良俗的內容"),
    hideReasonRD5: wgULS("RD5：其他不宜公开的版本内容", "RD5：其他不宜公開的版本內容"),
    hideReasonOther: wgULS("仅使用下方的附加理由", "僅使用下方的附加理由"),
    otherReasons: wgULS("附加理由（可选，不用签名）", "附加理由（可選，不用簽名）"),
    dialogTitle: wgULS("提报修订版本删除", "提報修訂版本刪除"),
    dialogButtonSubmit: wgULS("提报", "提報"),
    dialogButtonCancel: wgULS("取消", "取消"),
    reportButtonTitle: wgULS("将选中的版本提报到", "將選中的版本提報到"),
    reportButtonText: wgULS("请求删除被选版本", "請求刪除被選版本"),
    reportButtonLogText: wgULS("请求删除被选日志", "請求刪除被選日誌")
  };
};
var i18nMessages = getI18nMessages();
var getMessage = (key) => {
  return i18nMessages[key] || key;
};
//! src/RRD/components/DialogInner.tsx
var DialogInner = () => /* @__PURE__ */ import_ext_gadget.default.createElement("div", {
  id: "rrd__config"
}, /* @__PURE__ */ import_ext_gadget.default.createElement(import_ext_gadget.default.Fragment, null, getMessage("hideItems")), /* @__PURE__ */ import_ext_gadget.default.createElement("br", null), /* @__PURE__ */ import_ext_gadget.default.createElement("div", {
  className: "rrd__content-wrapper"
}, /* @__PURE__ */ import_ext_gadget.default.createElement("input", {
  name: "content",
  id: "rrd__hide-content",
  type: "checkbox",
  value: "content",
  checked: true
}), /* @__PURE__ */ import_ext_gadget.default.createElement("label", {
  htmlFor: "rrd__hide-content",
  id: "rrd-content"
}, IS_LOG ? getMessage("hideLog") : getMessage("hideContent"))), /* @__PURE__ */ import_ext_gadget.default.createElement("div", {
  className: "rrd__content-wrapper"
}, /* @__PURE__ */ import_ext_gadget.default.createElement("input", {
  name: "username",
  id: "rrd__hide-username",
  type: "checkbox",
  value: "username"
}), /* @__PURE__ */ import_ext_gadget.default.createElement("label", {
  htmlFor: "rrd__hide-username",
  id: "rrd-username"
}, getMessage("hideUsername"))), /* @__PURE__ */ import_ext_gadget.default.createElement("div", {
  className: "rrd__content-wrapper"
}, /* @__PURE__ */ import_ext_gadget.default.createElement("input", {
  name: "summary",
  id: "rrd__hide-summary",
  type: "checkbox",
  value: "summary"
}), /* @__PURE__ */ import_ext_gadget.default.createElement("label", {
  htmlFor: "rrd__hide-summary",
  id: "rrd-summary"
}, getMessage("hideSummary"))), /* @__PURE__ */ import_ext_gadget.default.createElement("br", null), /* @__PURE__ */ import_ext_gadget.default.createElement("br", null), /* @__PURE__ */ import_ext_gadget.default.createElement(import_ext_gadget.default.Fragment, null, getMessage("hideReason")), /* @__PURE__ */ import_ext_gadget.default.createElement("br", null), /* @__PURE__ */ import_ext_gadget.default.createElement("select", {
  name: "rrd__reason",
  id: "rrd__reason"
}, /* @__PURE__ */ import_ext_gadget.default.createElement("option", {
  value: getMessage("hideReasonRD1")
}, getMessage("hideReasonRD1")), /* @__PURE__ */ import_ext_gadget.default.createElement("option", {
  value: getMessage("hideReasonRD2")
}, getMessage("hideReasonRD2")), /* @__PURE__ */ import_ext_gadget.default.createElement("option", {
  value: getMessage("hideReasonRD3")
}, getMessage("hideReasonRD3")), /* @__PURE__ */ import_ext_gadget.default.createElement("option", {
  value: getMessage("hideReasonRD4")
}, getMessage("hideReasonRD4")), /* @__PURE__ */ import_ext_gadget.default.createElement("option", {
  value: getMessage("hideReasonRD5")
}, getMessage("hideReasonRD5")), /* @__PURE__ */ import_ext_gadget.default.createElement("option", {
  value: ""
}, getMessage("hideReasonOther"))), /* @__PURE__ */ import_ext_gadget.default.createElement("br", null), /* @__PURE__ */ import_ext_gadget.default.createElement("br", null), /* @__PURE__ */ import_ext_gadget.default.createElement(import_ext_gadget.default.Fragment, null, getMessage("otherReasons")), /* @__PURE__ */ import_ext_gadget.default.createElement("br", null), /* @__PURE__ */ import_ext_gadget.default.createElement("textarea", {
  name: "otherReasons",
  id: "rrd__other-reasons",
  rows: 4
}));
var DialogInner_default = DialogInner;
//! src/RRD/modules/core.tsx
var import_ext_gadget3 = __toESM(require("ext.gadget.React"), 1);
//! src/RRD/components/ReportButton.tsx
var import_ext_gadget2 = __toESM(require("ext.gadget.React"), 1);
var ReportButton = ({
  onClick
}) => /* @__PURE__ */ import_ext_gadget2.default.createElement("button", {
  className: ["historysubmit", "mw-".concat(IS_LOG ? "log" : "history", "-rrd"), "mw-ui-button", "cdx-button"],
  name: "reportRRD",
  type: "button",
  title: getMessage("reportButtonTitle") + RRD_PAGE,
  onClick
}, IS_LOG ? getMessage("reportButtonLogText") : getMessage("reportButtonText"));
var ReportButton_default = ReportButton;
//! src/RRD/modules/core.tsx
var import_ext_gadget4 = require("ext.gadget.Util");
var config = {
  checkboxes: {},
  others: {}
};
var ids = [];
var $dialog;
var loadIDs = () => {
  const boxes = document.querySelectorAll("input");
  var _iterator2 = _createForOfIteratorHelper(boxes), _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
      const box = _step2.value;
      if (box.type === "checkbox" && box.checked) {
        const idRegex = /ids\[(\d+)]/;
        const idArray = idRegex.exec(box.name);
        if (idArray && idArray[1] !== void 0) {
          [, ids[ids.length]] = idArray;
        }
      }
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
};
var submit = /* @__PURE__ */ function() {
  var _ref = _asyncToGenerator(function* (toHide, reason, otherReasons) {
    ids = [...new Set(ids)];
    const rrdArr = ["{{Revdel", "|status = ", "|article = ".concat(mw.config.get("wgPageName")), "|set = ".concat(toHide), "|reason = ".concat(reason).concat(otherReasons)];
    var _iterator3 = _createForOfIteratorHelper(ids.entries()), _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
        const [index, id] = _step3.value;
        rrdArr[rrdArr.length] = "|id".concat(index + 1, " = ").concat(id);
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
    rrdArr[rrdArr.length] = "}}\n--~~".concat("~~");
    const api = (0, import_ext_gadget4.initMwApi)("RRD/2.0");
    try {
      const params = {
        action: "query",
        format: "json",
        formatversion: "2",
        prop: "revisions",
        titles: RRD_PAGE,
        rvprop: "content"
      };
      const {
        query
      } = yield api.get(params);
      let content;
      if (query.pages) {
        [{
          content
        }] = query.pages[0].revisions;
      }
      if (content === void 0) {
        void mw.notify("Error when loading page ".concat(RRD_PAGE, ": missing"), {
          tag: "RRD",
          type: "error"
        });
        return;
      }
      try {
        var _result$edit, _result$error;
        const _params = {
          action: "edit",
          format: "json",
          formatversion: "2",
          title: RRD_PAGE,
          text: "".concat(content, "\n\n").concat(rrdArr.join("\n")),
          summary: getMessage("editSummary")
        };
        const result = yield api.postWithEditToken(_params);
        if (((_result$edit = result["edit"]) === null || _result$edit === void 0 ? void 0 : _result$edit.result) === "Success") {
          location.replace(mw.util.getUrl(RRD_PAGE));
        } else if ((_result$error = result["error"]) !== null && _result$error !== void 0 && _result$error.code) {
          void mw.notify("Some errors occured while saving page: ".concat(result["error"].code), {
            tag: "RRD",
            type: "error"
          });
        } else {
          void mw.notify("Some errors occured while saving page: unknown", {
            tag: "RRD",
            type: "error"
          });
        }
      } catch {
        void mw.notify("Error when editing page ".concat(RRD_PAGE), {
          tag: "RRD",
          type: "error"
        });
      }
    } catch {
      void mw.notify("Error when loading page ".concat(RRD_PAGE), {
        tag: "RRD",
        type: "error"
      });
    }
  });
  return function submit2(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();
var updateConfig = () => {
  var _document$querySelect, _document$querySelect2, _document$querySelect3, _document$querySelect4, _document$querySelect5;
  const checkBoxes = {};
  if ((_document$querySelect = document.querySelector("#rrd__hide-content")) !== null && _document$querySelect !== void 0 && _document$querySelect.checked) {
    checkBoxes.rrdHideContent = true;
  }
  if ((_document$querySelect2 = document.querySelector("#rrd__hide-username")) !== null && _document$querySelect2 !== void 0 && _document$querySelect2.checked) {
    checkBoxes.rrdHideUsername = true;
  }
  if ((_document$querySelect3 = document.querySelector("#rrd__hide-summary")) !== null && _document$querySelect3 !== void 0 && _document$querySelect3.checked) {
    checkBoxes.rrdHideSummary = true;
  }
  config.checkboxes = checkBoxes;
  const others = {
    rrdReason: (_document$querySelect4 = document.querySelector("#rrd__reason")) === null || _document$querySelect4 === void 0 ? void 0 : _document$querySelect4.value,
    rrdOtherReasons: (_document$querySelect5 = document.querySelector("#rrd__other-reasons")) === null || _document$querySelect5 === void 0 ? void 0 : _document$querySelect5.value
  };
  config.others = others;
};
var loadConfig = () => {
  for (var _i = 0, _Object$entries = Object.entries(config.others); _i < _Object$entries.length; _i++) {
    const [id, value] = _Object$entries[_i];
    if (document.querySelector("#".concat(id)) !== null) {
      document.querySelector("#".concat(id)).value = value;
    }
  }
  for (var _i2 = 0, _Object$entries2 = Object.entries(config.checkboxes); _i2 < _Object$entries2.length; _i2++) {
    const [id, value] = _Object$entries2[_i2];
    if (value === true && document.querySelector("#".concat(id)) !== null) {
      document.querySelector("#".concat(id)).checked = true;
    }
  }
};
var showDialog = () => {
  loadIDs();
  if (!ids.length) {
    void mw.notify(getMessage("errNoRevisionProvided"), {
      tag: "RRD",
      type: "error"
    });
    return;
  }
  const html = /* @__PURE__ */ import_ext_gadget3.default.createElement(DialogInner_default, null);
  if ($dialog) {
    $dialog.html(html).dialog("open");
    loadConfig();
    return;
  }
  $dialog = $(html).dialog({
    title: getMessage("dialogTitle"),
    minWidth: 515,
    minHeight: 150,
    close: updateConfig,
    buttons: [{
      text: getMessage("dialogButtonSubmit"),
      click() {
        $(this).dialog("close");
        const reason = config.others.rrdReason;
        let otherReasons = config.others.rrdOtherReasons;
        if (otherReasons && reason) {
          otherReasons = "，".concat(otherReasons);
        }
        const toHide = [];
        if (config.checkboxes.rrdHideContent) {
          toHide[toHide.length] = IS_LOG ? getMessage("hideLog") : getMessage("hideContent");
        }
        if (config.checkboxes.rrdHideUsername) {
          toHide[toHide.length] = getMessage("hideUsername");
        }
        if (config.checkboxes.rrdHideSummary) {
          toHide[toHide.length] = getMessage("hideSummary");
        }
        let cont = true;
        if (!toHide.length) {
          void mw.notify(getMessage("errNoItemProvided"), {
            tag: "RRD",
            type: "error"
          });
          return;
        }
        if (!reason && !otherReasons) {
          cont = confirm(getMessage("warnNoReasonProvided"));
        }
        if (cont) {
          var _otherReasons;
          void submit(toHide.join("、"), reason !== null && reason !== void 0 ? reason : "", (_otherReasons = otherReasons) !== null && _otherReasons !== void 0 ? _otherReasons : "");
        }
      }
    }, {
      text: getMessage("dialogButtonCancel"),
      click() {
        $(this).dialog("close");
      }
    }]
  });
};
var main = () => {
  var _iterator4 = _createForOfIteratorHelper(document.querySelectorAll(".historysubmit.mw-history-compareselectedversions-button, .editchangetags-log-submit.mw-log-editchangetags-button")), _step4;
  try {
    for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
      const element = _step4.value;
      const reportButton = /* @__PURE__ */ import_ext_gadget3.default.createElement(ReportButton_default, {
        onClick: showDialog
      });
      element.after(reportButton);
    }
  } catch (err) {
    _iterator4.e(err);
  } finally {
    _iterator4.f();
  }
};
//! src/RRD/RRD.ts
if (IS_WG_HISTORY_ACTION || IS_LOG) {
  $(main);
}

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1JSRC9tb2R1bGVzL2NvbnN0YW50LnRzIiwgInNyYy9SUkQvY29tcG9uZW50cy9EaWFsb2dJbm5lci50c3giLCAic3JjL1JSRC9tb2R1bGVzL2kxOG4udHMiLCAic3JjL1JSRC9tb2R1bGVzL2NvcmUudHN4IiwgInNyYy9SUkQvY29tcG9uZW50cy9SZXBvcnRCdXR0b24udHN4IiwgInNyYy9SUkQvUlJELnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBXR19BQ1RJT046IE1lZGlhV2lraUNvbmZpZ01hcFdnQWN0aW9uID0gbXcuY29uZmlnLmdldCgnd2dBY3Rpb24nKTtcbmNvbnN0IElTX1dHX0hJU1RPUllfQUNUSU9OOiBib29sZWFuID0gV0dfQUNUSU9OID09PSAnaGlzdG9yeSc7XG5jb25zdCBJU19MT0c6IGJvb2xlYW4gPSBtdy5jb25maWcuZ2V0KCd3Z0Nhbm9uaWNhbFNwZWNpYWxQYWdlTmFtZScpID09PSAnTG9nJztcbmNvbnN0IFJSRF9QQUdFOiBzdHJpbmcgPSAnUWl1d2VuX3RhbGs654mI5pys5Yig6Zmk5o+Q5oqlJztcblxuZXhwb3J0IHtJU19MT0csIElTX1dHX0hJU1RPUllfQUNUSU9OLCBSUkRfUEFHRX07XG4iLCAiaW1wb3J0IHtJU19MT0d9IGZyb20gJy4uL21vZHVsZXMvY29uc3RhbnQnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ2V4dC5nYWRnZXQuUmVhY3QnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuLi9tb2R1bGVzL2kxOG4nO1xuXG5jb25zdCBEaWFsb2dJbm5lciA9ICgpID0+IChcblx0PGRpdiBpZD1cInJyZF9fY29uZmlnXCI+XG5cdFx0PD57Z2V0TWVzc2FnZSgnaGlkZUl0ZW1zJyl9PC8+XG5cdFx0PGJyIC8+XG5cdFx0PGRpdiBjbGFzc05hbWU9eydycmRfX2NvbnRlbnQtd3JhcHBlcid9PlxuXHRcdFx0PGlucHV0IG5hbWU9XCJjb250ZW50XCIgaWQ9XCJycmRfX2hpZGUtY29udGVudFwiIHR5cGU9XCJjaGVja2JveFwiIHZhbHVlPVwiY29udGVudFwiIGNoZWNrZWQgLz5cblx0XHRcdDxsYWJlbCBodG1sRm9yPVwicnJkX19oaWRlLWNvbnRlbnRcIiBpZD1cInJyZC1jb250ZW50XCI+XG5cdFx0XHRcdHtJU19MT0cgPyBnZXRNZXNzYWdlKCdoaWRlTG9nJykgOiBnZXRNZXNzYWdlKCdoaWRlQ29udGVudCcpfVxuXHRcdFx0PC9sYWJlbD5cblx0XHQ8L2Rpdj5cblx0XHQ8ZGl2IGNsYXNzTmFtZT17J3JyZF9fY29udGVudC13cmFwcGVyJ30+XG5cdFx0XHQ8aW5wdXQgbmFtZT1cInVzZXJuYW1lXCIgaWQ9XCJycmRfX2hpZGUtdXNlcm5hbWVcIiB0eXBlPVwiY2hlY2tib3hcIiB2YWx1ZT1cInVzZXJuYW1lXCIgLz5cblx0XHRcdDxsYWJlbCBodG1sRm9yPVwicnJkX19oaWRlLXVzZXJuYW1lXCIgaWQ9XCJycmQtdXNlcm5hbWVcIj5cblx0XHRcdFx0e2dldE1lc3NhZ2UoJ2hpZGVVc2VybmFtZScpfVxuXHRcdFx0PC9sYWJlbD5cblx0XHQ8L2Rpdj5cblx0XHQ8ZGl2IGNsYXNzTmFtZT17J3JyZF9fY29udGVudC13cmFwcGVyJ30+XG5cdFx0XHQ8aW5wdXQgbmFtZT1cInN1bW1hcnlcIiBpZD1cInJyZF9faGlkZS1zdW1tYXJ5XCIgdHlwZT1cImNoZWNrYm94XCIgdmFsdWU9XCJzdW1tYXJ5XCIgLz5cblx0XHRcdDxsYWJlbCBodG1sRm9yPVwicnJkX19oaWRlLXN1bW1hcnlcIiBpZD1cInJyZC1zdW1tYXJ5XCI+XG5cdFx0XHRcdHtnZXRNZXNzYWdlKCdoaWRlU3VtbWFyeScpfVxuXHRcdFx0PC9sYWJlbD5cblx0XHQ8L2Rpdj5cblx0XHQ8YnIgLz5cblx0XHQ8YnIgLz5cblx0XHQ8PntnZXRNZXNzYWdlKCdoaWRlUmVhc29uJyl9PC8+XG5cdFx0PGJyIC8+XG5cdFx0PHNlbGVjdCBuYW1lPVwicnJkX19yZWFzb25cIiBpZD1cInJyZF9fcmVhc29uXCI+XG5cdFx0XHQ8b3B0aW9uIHZhbHVlPXtnZXRNZXNzYWdlKCdoaWRlUmVhc29uUkQxJyl9PntnZXRNZXNzYWdlKCdoaWRlUmVhc29uUkQxJyl9PC9vcHRpb24+XG5cdFx0XHQ8b3B0aW9uIHZhbHVlPXtnZXRNZXNzYWdlKCdoaWRlUmVhc29uUkQyJyl9PntnZXRNZXNzYWdlKCdoaWRlUmVhc29uUkQyJyl9PC9vcHRpb24+XG5cdFx0XHQ8b3B0aW9uIHZhbHVlPXtnZXRNZXNzYWdlKCdoaWRlUmVhc29uUkQzJyl9PntnZXRNZXNzYWdlKCdoaWRlUmVhc29uUkQzJyl9PC9vcHRpb24+XG5cdFx0XHQ8b3B0aW9uIHZhbHVlPXtnZXRNZXNzYWdlKCdoaWRlUmVhc29uUkQ0Jyl9PntnZXRNZXNzYWdlKCdoaWRlUmVhc29uUkQ0Jyl9PC9vcHRpb24+XG5cdFx0XHQ8b3B0aW9uIHZhbHVlPXtnZXRNZXNzYWdlKCdoaWRlUmVhc29uUkQ1Jyl9PntnZXRNZXNzYWdlKCdoaWRlUmVhc29uUkQ1Jyl9PC9vcHRpb24+XG5cdFx0XHQ8b3B0aW9uIHZhbHVlPVwiXCI+e2dldE1lc3NhZ2UoJ2hpZGVSZWFzb25PdGhlcicpfTwvb3B0aW9uPlxuXHRcdDwvc2VsZWN0PlxuXHRcdDxiciAvPlxuXHRcdDxiciAvPlxuXHRcdDw+e2dldE1lc3NhZ2UoJ290aGVyUmVhc29ucycpfTwvPlxuXHRcdDxiciAvPlxuXHRcdDx0ZXh0YXJlYSBuYW1lPVwib3RoZXJSZWFzb25zXCIgaWQ9XCJycmRfX290aGVyLXJlYXNvbnNcIiByb3dzPXs0fT48L3RleHRhcmVhPlxuXHQ8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IERpYWxvZ0lubmVyO1xuIiwgImNvbnN0IGdldEkxOG5NZXNzYWdlcyA9ICgpID0+IHtcblx0Y29uc3Qge3dnVUxTfSA9IHdpbmRvdztcblx0cmV0dXJuIHtcblx0XHRlZGl0U3VtbWFyeTogd2dVTFMoXG5cdFx0XHQnW1tNZWRpYVdpa2k6R2FkZ2V0LVJSRC5qc3zljYroh6rliqjmj5DmiqVdXeS/ruiuoueJiOacrOWIoOmZpCcsXG5cdFx0XHQnW1tNZWRpYVdpa2k6R2FkZ2V0LVJSRC5qc3zljYroh6rli5Xmj5DloLFdXeS/ruiogueJiOacrOWIqumZpCdcblx0XHQpLFxuXHRcdGVyck5vUmV2aXNpb25Qcm92aWRlZDogd2dVTFMoJ+aCqOayoeaciemAieaLqemcgOmakOiXj+eahOeJiOacrO+8gScsICfmgqjmspLmnInpgbjmk4fpnIDpmrHol4/nmoTniYjmnKzvvIEnKSxcblx0XHRlcnJOb0l0ZW1Qcm92aWRlZDogd2dVTFMoJ+aCqOayoeaciemAieaLqemcgOmakOiXj+eahOmhueebru+8gScsICfmgqjmspLmnInpgbjmk4fpnIDpmrHol4/nmoTpoIXnm67vvIEnKSxcblx0XHR3YXJuTm9SZWFzb25Qcm92aWRlZDogd2dVTFMoJ+aCqOayoeaciei+k+WFpeS7u+S9leeQhueUse+8geehruWumuimgee7p+e7reWQl++8nycsICfmgqjmspLmnInovLjlhaXku7vkvZXnkIbnlLHvvIHnorrlrpropoHnubznuozll47vvJ8nKSxcblx0XHRoaWRlSXRlbXM6IHdnVUxTKCfpnIDpmpDol4/nmoTpobnnm67vvJonLCAn6ZyA6Zqx6JeP55qE6aCF55uu77yaJyksXG5cdFx0aGlkZUNvbnRlbnQ6IHdnVUxTKCfnvJbovpHlhoXlrrknLCAn57eo6Lyv5YWn5a65JyksXG5cdFx0aGlkZUxvZzogd2dVTFMoJ+aXpeW/l+ebruagh+S4juWPguaVsCcsICfml6Xoqoznm67mqJnoiIflj4PmlbgnKSxcblx0XHRoaWRlVXNlcm5hbWU6IHdnVUxTKCfnvJbovpHogIXnlKjmiLflkI0vSVDlnLDlnYAnLCAn57eo6Lyv6ICF55So5oi25ZCNL0lQ5L2N5Z2AJyksXG5cdFx0aGlkZVN1bW1hcnk6IHdnVUxTKCfnvJbovpHmkZjopoEnLCAn57eo6Lyv5pGY6KaBJyksXG5cdFx0aGlkZVJlYXNvbjogd2dVTFMoJ+eQhuaNru+8micsICfnkIbmk5rvvJonKSxcblx0XHRoaWRlUmVhc29uUkQxOiB3Z1VMUygnUkQx77ya5p2h55uu5Lit5piO5pi+5L6154qv6JGX5L2c5p2D55qE5YaF5a65JywgJ1JEMe+8muaineebruS4reaYjumhr+S+teeKr+iRl+S9nOasiueahOWFp+WuuScpLFxuXHRcdGhpZGVSZWFzb25SRDI6IHdnVUxTKCdSRDLvvJrkuKXph43kvq7ovrHjgIHotKzkvY7miJbmlLvlh7vmgKfmlofmnKwnLCAnUkQy77ya5Zq06YeN5L6u6L6x44CB6LK25L2O5oiW5pS75pOK5oCn5paH5pysJyksXG5cdFx0aGlkZVJlYXNvblJEMzogd2dVTFMoJ1JEM++8mue6r+eyueaJsOS5seaAp+WGheWuuScsICfntJTnsrnmk77kuoLmgKflhaflrrknKSxcblx0XHRoaWRlUmVhc29uUkQ0OiB3Z1VMUygnUkQ077ya5piO5pi+6L+d5Y+N5rOV5b6L5rOV6KeE5oiW6L+d6IOM5YWs5bqP6Imv5L+X55qE5YaF5a65JywgJ1JENO+8muaYjumhr+mBleWPjeazleW+i+azleimj+aIlumBleiDjOWFrOW6j+iJr+S/l+eahOWFp+WuuScpLFxuXHRcdGhpZGVSZWFzb25SRDU6IHdnVUxTKCdSRDXvvJrlhbbku5bkuI3lrpzlhazlvIDnmoTniYjmnKzlhoXlrrknLCAnUkQ177ya5YW25LuW5LiN5a6c5YWs6ZaL55qE54mI5pys5YWn5a65JyksXG5cdFx0aGlkZVJlYXNvbk90aGVyOiB3Z1VMUygn5LuF5L2/55So5LiL5pa555qE6ZmE5Yqg55CG55SxJywgJ+WDheS9v+eUqOS4i+aWueeahOmZhOWKoOeQhueUsScpLFxuXHRcdG90aGVyUmVhc29uczogd2dVTFMoJ+mZhOWKoOeQhueUse+8iOWPr+mAie+8jOS4jeeUqOetvuWQje+8iScsICfpmYTliqDnkIbnlLHvvIjlj6/pgbjvvIzkuI3nlKjnsL3lkI3vvIknKSxcblx0XHRkaWFsb2dUaXRsZTogd2dVTFMoJ+aPkOaKpeS/ruiuoueJiOacrOWIoOmZpCcsICfmj5DloLHkv67oqILniYjmnKzliKrpmaQnKSxcblx0XHRkaWFsb2dCdXR0b25TdWJtaXQ6IHdnVUxTKCfmj5DmiqUnLCAn5o+Q5aCxJyksXG5cdFx0ZGlhbG9nQnV0dG9uQ2FuY2VsOiB3Z1VMUygn5Y+W5raIJywgJ+WPlua2iCcpLFxuXHRcdHJlcG9ydEJ1dHRvblRpdGxlOiB3Z1VMUygn5bCG6YCJ5Lit55qE54mI5pys5o+Q5oql5YiwJywgJ+Wwh+mBuOS4reeahOeJiOacrOaPkOWgseWIsCcpLFxuXHRcdHJlcG9ydEJ1dHRvblRleHQ6IHdnVUxTKCfor7fmsYLliKDpmaTooqvpgInniYjmnKwnLCAn6KuL5rGC5Yiq6Zmk6KKr6YG454mI5pysJyksXG5cdFx0cmVwb3J0QnV0dG9uTG9nVGV4dDogd2dVTFMoJ+ivt+axguWIoOmZpOiiq+mAieaXpeW/lycsICfoq4vmsYLliKrpmaTooqvpgbjml6XoqownKSxcblx0fTtcbn07XG5cbmNvbnN0IGkxOG5NZXNzYWdlcyA9IGdldEkxOG5NZXNzYWdlcygpO1xuXG5jb25zdCBnZXRNZXNzYWdlOiBHZXRNZXNzYWdlczx0eXBlb2YgaTE4bk1lc3NhZ2VzPiA9IChrZXkpID0+IHtcblx0cmV0dXJuIGkxOG5NZXNzYWdlc1trZXldIHx8IGtleTtcbn07XG5cbmV4cG9ydCB7Z2V0TWVzc2FnZX07XG4iLCAiaW1wb3J0IHtJU19MT0csIFJSRF9QQUdFfSBmcm9tICcuL2NvbnN0YW50JztcbmltcG9ydCB7dHlwZSBycmRDb25maWcsIHR5cGUgcnJkQ29uZmlnQ2hlY2tCb3hlcywgdHlwZSBycmRDb25maWdPdGhlcnN9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IERpYWxvZ0lubmVyIGZyb20gJy4uL2NvbXBvbmVudHMvRGlhbG9nSW5uZXInO1xuaW1wb3J0IFJlYWN0IGZyb20gJ2V4dC5nYWRnZXQuUmVhY3QnO1xuaW1wb3J0IFJlcG9ydEJ1dHRvbiBmcm9tICcuLi9jb21wb25lbnRzL1JlcG9ydEJ1dHRvbic7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vaTE4bic7XG5pbXBvcnQge2luaXRNd0FwaX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxuY29uc3QgY29uZmlnOiBycmRDb25maWcgPSB7XG5cdGNoZWNrYm94ZXM6IHt9LFxuXHRvdGhlcnM6IHt9LFxufTtcbmxldCBpZHM6IHN0cmluZ1tdID0gW107XG5sZXQgJGRpYWxvZzogSlF1ZXJ5O1xuXG5jb25zdCBsb2FkSURzID0gKCk6IHZvaWQgPT4ge1xuXHRjb25zdCBib3hlczogTm9kZUxpc3RPZjxIVE1MSW5wdXRFbGVtZW50PiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0Jyk7XG5cdGZvciAoY29uc3QgYm94IG9mIGJveGVzKSB7XG5cdFx0aWYgKGJveC50eXBlID09PSAnY2hlY2tib3gnICYmIGJveC5jaGVja2VkKSB7XG5cdFx0XHRjb25zdCBpZFJlZ2V4OiBSZWdFeHAgPSAvaWRzXFxbKFxcZCspXS87XG5cdFx0XHRjb25zdCBpZEFycmF5OiBSZWdFeHBFeGVjQXJyYXkgfCBudWxsID0gaWRSZWdleC5leGVjKGJveC5uYW1lKTtcblx0XHRcdGlmIChpZEFycmF5ICYmIGlkQXJyYXlbMV0gIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRbLCBpZHNbaWRzLmxlbmd0aF1dID0gaWRBcnJheTtcblx0XHRcdH1cblx0XHR9XG5cdH1cbn07XG5cbmNvbnN0IHN1Ym1pdCA9IGFzeW5jICh0b0hpZGU6IHN0cmluZywgcmVhc29uOiBzdHJpbmcsIG90aGVyUmVhc29uczogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiA9PiB7XG5cdGlkcyA9IFsuLi5uZXcgU2V0KGlkcyldO1xuXHRjb25zdCBycmRBcnI6IHN0cmluZ1tdID0gW1xuXHRcdCd7e1JldmRlbCcsXG5cdFx0J3xzdGF0dXMgPSAnLFxuXHRcdGB8YXJ0aWNsZSA9ICR7bXcuY29uZmlnLmdldCgnd2dQYWdlTmFtZScpfWAsXG5cdFx0YHxzZXQgPSAke3RvSGlkZX1gLFxuXHRcdGB8cmVhc29uID0gJHtyZWFzb259JHtvdGhlclJlYXNvbnN9YCxcblx0XTtcblx0Zm9yIChjb25zdCBbaW5kZXgsIGlkXSBvZiBpZHMuZW50cmllcygpKSB7XG5cdFx0cnJkQXJyW3JyZEFyci5sZW5ndGhdID0gYHxpZCR7aW5kZXggKyAxfSA9ICR7aWR9YDtcblx0fVxuXHRycmRBcnJbcnJkQXJyLmxlbmd0aF0gPSAnfX1cXG4tLX5+Jy5jb25jYXQoJ35+Jyk7XG5cdGNvbnN0IGFwaTogbXcuQXBpID0gaW5pdE13QXBpKCdSUkQvMi4wJyk7XG5cdHRyeSB7XG5cdFx0Y29uc3QgcGFyYW1zOiBBcGlRdWVyeVJldmlzaW9uc1BhcmFtcyA9IHtcblx0XHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdFx0cHJvcDogJ3JldmlzaW9ucycsXG5cdFx0XHR0aXRsZXM6IFJSRF9QQUdFLFxuXHRcdFx0cnZwcm9wOiAnY29udGVudCcsXG5cdFx0fTtcblx0XHRjb25zdCB7cXVlcnl9ID0gYXdhaXQgYXBpLmdldChwYXJhbXMpO1xuXHRcdGxldCBjb250ZW50OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cdFx0aWYgKHF1ZXJ5LnBhZ2VzKSB7XG5cdFx0XHRbe2NvbnRlbnR9XSA9IHF1ZXJ5LnBhZ2VzWzBdLnJldmlzaW9ucztcblx0XHR9XG5cdFx0aWYgKGNvbnRlbnQgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dm9pZCBtdy5ub3RpZnkoYEVycm9yIHdoZW4gbG9hZGluZyBwYWdlICR7UlJEX1BBR0V9OiBtaXNzaW5nYCwge3RhZzogJ1JSRCcsIHR5cGU6ICdlcnJvcid9KTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IF9wYXJhbXM6IEFwaUVkaXRQYWdlUGFyYW1zID0ge1xuXHRcdFx0XHRhY3Rpb246ICdlZGl0Jyxcblx0XHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRcdFx0dGl0bGU6IFJSRF9QQUdFLFxuXHRcdFx0XHR0ZXh0OiBgJHtjb250ZW50fVxcblxcbiR7cnJkQXJyLmpvaW4oJ1xcbicpfWAsXG5cdFx0XHRcdHN1bW1hcnk6IGdldE1lc3NhZ2UoJ2VkaXRTdW1tYXJ5JyksXG5cdFx0XHR9O1xuXHRcdFx0Y29uc3QgcmVzdWx0ID0gYXdhaXQgYXBpLnBvc3RXaXRoRWRpdFRva2VuKF9wYXJhbXMpO1xuXHRcdFx0aWYgKHJlc3VsdFsnZWRpdCddPy5yZXN1bHQgPT09ICdTdWNjZXNzJykge1xuXHRcdFx0XHRsb2NhdGlvbi5yZXBsYWNlKG13LnV0aWwuZ2V0VXJsKFJSRF9QQUdFKSk7XG5cdFx0XHR9IGVsc2UgaWYgKHJlc3VsdFsnZXJyb3InXT8uY29kZSkge1xuXHRcdFx0XHR2b2lkIG13Lm5vdGlmeShgU29tZSBlcnJvcnMgb2NjdXJlZCB3aGlsZSBzYXZpbmcgcGFnZTogJHtyZXN1bHRbJ2Vycm9yJ10uY29kZX1gLCB7XG5cdFx0XHRcdFx0dGFnOiAnUlJEJyxcblx0XHRcdFx0XHR0eXBlOiAnZXJyb3InLFxuXHRcdFx0XHR9KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHZvaWQgbXcubm90aWZ5KCdTb21lIGVycm9ycyBvY2N1cmVkIHdoaWxlIHNhdmluZyBwYWdlOiB1bmtub3duJywge1xuXHRcdFx0XHRcdHRhZzogJ1JSRCcsXG5cdFx0XHRcdFx0dHlwZTogJ2Vycm9yJyxcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fSBjYXRjaCB7XG5cdFx0XHR2b2lkIG13Lm5vdGlmeShgRXJyb3Igd2hlbiBlZGl0aW5nIHBhZ2UgJHtSUkRfUEFHRX1gLCB7dGFnOiAnUlJEJywgdHlwZTogJ2Vycm9yJ30pO1xuXHRcdH1cblx0fSBjYXRjaCB7XG5cdFx0dm9pZCBtdy5ub3RpZnkoYEVycm9yIHdoZW4gbG9hZGluZyBwYWdlICR7UlJEX1BBR0V9YCwge3RhZzogJ1JSRCcsIHR5cGU6ICdlcnJvcid9KTtcblx0fVxufTtcblxuY29uc3QgdXBkYXRlQ29uZmlnID0gKCk6IHZvaWQgPT4ge1xuXHRjb25zdCBjaGVja0JveGVzOiBycmRDb25maWdDaGVja0JveGVzID0ge307XG5cdGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxJbnB1dEVsZW1lbnQ+KCcjcnJkX19oaWRlLWNvbnRlbnQnKT8uY2hlY2tlZCkge1xuXHRcdGNoZWNrQm94ZXMucnJkSGlkZUNvbnRlbnQgPSB0cnVlO1xuXHR9XG5cdGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxJbnB1dEVsZW1lbnQ+KCcjcnJkX19oaWRlLXVzZXJuYW1lJyk/LmNoZWNrZWQpIHtcblx0XHRjaGVja0JveGVzLnJyZEhpZGVVc2VybmFtZSA9IHRydWU7XG5cdH1cblx0aWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTElucHV0RWxlbWVudD4oJyNycmRfX2hpZGUtc3VtbWFyeScpPy5jaGVja2VkKSB7XG5cdFx0Y2hlY2tCb3hlcy5ycmRIaWRlU3VtbWFyeSA9IHRydWU7XG5cdH1cblx0Y29uZmlnLmNoZWNrYm94ZXMgPSBjaGVja0JveGVzO1xuXHRjb25zdCBvdGhlcnM6IHJyZENvbmZpZ090aGVycyA9IHtcblx0XHRycmRSZWFzb246IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTElucHV0RWxlbWVudD4oJyNycmRfX3JlYXNvbicpPy52YWx1ZSxcblx0XHRycmRPdGhlclJlYXNvbnM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTElucHV0RWxlbWVudD4oJyNycmRfX290aGVyLXJlYXNvbnMnKT8udmFsdWUsXG5cdH07XG5cdGNvbmZpZy5vdGhlcnMgPSBvdGhlcnM7XG59O1xuXG5jb25zdCBsb2FkQ29uZmlnID0gKCk6IHZvaWQgPT4ge1xuXHRmb3IgKGNvbnN0IFtpZCwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKGNvbmZpZy5vdGhlcnMpKSB7XG5cdFx0aWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2lkfWApICE9PSBudWxsKSB7XG5cdFx0XHQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7aWR9YCkgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWUgPSB2YWx1ZTtcblx0XHR9XG5cdH1cblx0Zm9yIChjb25zdCBbaWQsIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhjb25maWcuY2hlY2tib3hlcykpIHtcblx0XHRpZiAodmFsdWUgPT09IHRydWUgJiYgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7aWR9YCkgIT09IG51bGwpIHtcblx0XHRcdChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtpZH1gKSBhcyBIVE1MSW5wdXRFbGVtZW50KS5jaGVja2VkID0gdHJ1ZTtcblx0XHR9XG5cdH1cbn07XG5cbmNvbnN0IHNob3dEaWFsb2cgPSAoKTogdm9pZCA9PiB7XG5cdGxvYWRJRHMoKTtcblx0aWYgKCFpZHMubGVuZ3RoKSB7XG5cdFx0dm9pZCBtdy5ub3RpZnkoZ2V0TWVzc2FnZSgnZXJyTm9SZXZpc2lvblByb3ZpZGVkJyksIHt0YWc6ICdSUkQnLCB0eXBlOiAnZXJyb3InfSk7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdGNvbnN0IGh0bWwgPSA8RGlhbG9nSW5uZXIgLz47XG5cdGlmICgkZGlhbG9nKSB7XG5cdFx0JGRpYWxvZy5odG1sKGh0bWwpLmRpYWxvZygnb3BlbicpO1xuXHRcdGxvYWRDb25maWcoKTtcblx0XHRyZXR1cm47XG5cdH1cblx0JGRpYWxvZyA9ICQoaHRtbCkuZGlhbG9nKHtcblx0XHR0aXRsZTogZ2V0TWVzc2FnZSgnZGlhbG9nVGl0bGUnKSxcblx0XHRtaW5XaWR0aDogNTE1LFxuXHRcdG1pbkhlaWdodDogMTUwLFxuXHRcdGNsb3NlOiB1cGRhdGVDb25maWcsXG5cdFx0YnV0dG9uczogW1xuXHRcdFx0e1xuXHRcdFx0XHR0ZXh0OiBnZXRNZXNzYWdlKCdkaWFsb2dCdXR0b25TdWJtaXQnKSxcblx0XHRcdFx0Y2xpY2soKTogdm9pZCB7XG5cdFx0XHRcdFx0JCh0aGlzKS5kaWFsb2coJ2Nsb3NlJyk7XG5cdFx0XHRcdFx0Y29uc3QgcmVhc29uOiBzdHJpbmcgfCB1bmRlZmluZWQgPSBjb25maWcub3RoZXJzLnJyZFJlYXNvbjtcblx0XHRcdFx0XHRsZXQgb3RoZXJSZWFzb25zOiBzdHJpbmcgfCB1bmRlZmluZWQgPSBjb25maWcub3RoZXJzLnJyZE90aGVyUmVhc29ucztcblx0XHRcdFx0XHRpZiAob3RoZXJSZWFzb25zICYmIHJlYXNvbikge1xuXHRcdFx0XHRcdFx0b3RoZXJSZWFzb25zID0gYO+8jCR7b3RoZXJSZWFzb25zfWA7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGNvbnN0IHRvSGlkZTogc3RyaW5nW10gPSBbXTtcblx0XHRcdFx0XHRpZiAoY29uZmlnLmNoZWNrYm94ZXMucnJkSGlkZUNvbnRlbnQpIHtcblx0XHRcdFx0XHRcdHRvSGlkZVt0b0hpZGUubGVuZ3RoXSA9IElTX0xPRyA/IGdldE1lc3NhZ2UoJ2hpZGVMb2cnKSA6IGdldE1lc3NhZ2UoJ2hpZGVDb250ZW50Jyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmIChjb25maWcuY2hlY2tib3hlcy5ycmRIaWRlVXNlcm5hbWUpIHtcblx0XHRcdFx0XHRcdHRvSGlkZVt0b0hpZGUubGVuZ3RoXSA9IGdldE1lc3NhZ2UoJ2hpZGVVc2VybmFtZScpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAoY29uZmlnLmNoZWNrYm94ZXMucnJkSGlkZVN1bW1hcnkpIHtcblx0XHRcdFx0XHRcdHRvSGlkZVt0b0hpZGUubGVuZ3RoXSA9IGdldE1lc3NhZ2UoJ2hpZGVTdW1tYXJ5Jyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGxldCBjb250OiBib29sZWFuID0gdHJ1ZTtcblx0XHRcdFx0XHRpZiAoIXRvSGlkZS5sZW5ndGgpIHtcblx0XHRcdFx0XHRcdHZvaWQgbXcubm90aWZ5KGdldE1lc3NhZ2UoJ2Vyck5vSXRlbVByb3ZpZGVkJyksIHt0YWc6ICdSUkQnLCB0eXBlOiAnZXJyb3InfSk7XG5cdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmICghcmVhc29uICYmICFvdGhlclJlYXNvbnMpIHtcblx0XHRcdFx0XHRcdGNvbnQgPSBjb25maXJtKGdldE1lc3NhZ2UoJ3dhcm5Ob1JlYXNvblByb3ZpZGVkJykpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAoY29udCkge1xuXHRcdFx0XHRcdFx0dm9pZCBzdWJtaXQodG9IaWRlLmpvaW4oJ+OAgScpLCByZWFzb24gPz8gJycsIG90aGVyUmVhc29ucyA/PyAnJyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9LFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0dGV4dDogZ2V0TWVzc2FnZSgnZGlhbG9nQnV0dG9uQ2FuY2VsJyksXG5cdFx0XHRcdGNsaWNrKCk6IHZvaWQge1xuXHRcdFx0XHRcdCQodGhpcykuZGlhbG9nKCdjbG9zZScpO1xuXHRcdFx0XHR9LFxuXHRcdFx0fSxcblx0XHRdLFxuXHR9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBtYWluID0gKCk6IHZvaWQgPT4ge1xuXHQvLyBGb3IgYWN0aW9uPWhpc3RvcnkgYW5kIFNwZWNpYWw6TG9nXG5cdGZvciAoY29uc3QgZWxlbWVudCBvZiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxuXHRcdCcuaGlzdG9yeXN1Ym1pdC5tdy1oaXN0b3J5LWNvbXBhcmVzZWxlY3RlZHZlcnNpb25zLWJ1dHRvbiwgLmVkaXRjaGFuZ2V0YWdzLWxvZy1zdWJtaXQubXctbG9nLWVkaXRjaGFuZ2V0YWdzLWJ1dHRvbidcblx0KSkge1xuXHRcdGNvbnN0IHJlcG9ydEJ1dHRvbiA9IDxSZXBvcnRCdXR0b24gb25DbGljaz17c2hvd0RpYWxvZ30gLz47XG5cdFx0ZWxlbWVudC5hZnRlcihyZXBvcnRCdXR0b24pO1xuXHR9XG59O1xuIiwgImltcG9ydCB7SVNfTE9HLCBSUkRfUEFHRX0gZnJvbSAnLi4vbW9kdWxlcy9jb25zdGFudCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAnZXh0LmdhZGdldC5SZWFjdCc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4uL21vZHVsZXMvaTE4bic7XG5cbmludGVyZmFjZSBQcm9wcyB7XG5cdG9uQ2xpY2soKTogdm9pZDtcbn1cblxuY29uc3QgUmVwb3J0QnV0dG9uID0gKHtvbkNsaWNrfTogUHJvcHMpID0+IChcblx0PGJ1dHRvblxuXHRcdGNsYXNzTmFtZT17WydoaXN0b3J5c3VibWl0JywgYG13LSR7SVNfTE9HID8gJ2xvZycgOiAnaGlzdG9yeSd9LXJyZGAsICdtdy11aS1idXR0b24nLCAnY2R4LWJ1dHRvbiddfVxuXHRcdG5hbWU9eydyZXBvcnRSUkQnfVxuXHRcdHR5cGU9eydidXR0b24nfVxuXHRcdHRpdGxlPXtnZXRNZXNzYWdlKCdyZXBvcnRCdXR0b25UaXRsZScpICsgUlJEX1BBR0V9XG5cdFx0b25DbGljaz17b25DbGlja31cblx0PlxuXHRcdHtJU19MT0cgPyBnZXRNZXNzYWdlKCdyZXBvcnRCdXR0b25Mb2dUZXh0JykgOiBnZXRNZXNzYWdlKCdyZXBvcnRCdXR0b25UZXh0Jyl9XG5cdDwvYnV0dG9uPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgUmVwb3J0QnV0dG9uO1xuIiwgImltcG9ydCAnLi9SUkQubGVzcyc7XG5pbXBvcnQge0lTX0xPRywgSVNfV0dfSElTVE9SWV9BQ1RJT059IGZyb20gJy4vbW9kdWxlcy9jb25zdGFudCc7XG5pbXBvcnQge21haW59IGZyb20gJy4vbW9kdWxlcy9jb3JlJztcblxuaWYgKElTX1dHX0hJU1RPUllfQUNUSU9OIHx8IElTX0xPRykge1xuXHQkKG1haW4pO1xufVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFNQSxZQUF3Q0MsR0FBR0MsT0FBT0MsSUFBSSxVQUFVO0FBQ3RFLElBQU1DLHVCQUFnQ0osY0FBYztBQUNwRCxJQUFNSyxTQUFrQkosR0FBR0MsT0FBT0MsSUFBSSw0QkFBNEIsTUFBTTtBQUN4RSxJQUFNRyxXQUFtQjs7QUNGekIsSUFBQUMsb0JBQWtCQyxRQUFB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RSxnQkFBSS9ILGtCQUFBLFFBQUErSCxrQkFBQSxTQUFBQSxnQkFBZ0IsRUFBRTtRQUMvRDtNQUNEO0lBQ0QsR0FDQTtNQUNDN0MsTUFBTTFFLFdBQVcsb0JBQW9CO01BQ3JDb0gsUUFBYztBQUNiTCxVQUFFLElBQUksRUFBRUQsT0FBTyxPQUFPO01BQ3ZCO0lBQ0QsQ0FBQTtFQUVGLENBQUM7QUFDRjtBQUVPLElBQU1VLE9BQU9BLE1BQVk7QUFBQSxNQUFBQyxhQUFBekYsMkJBRVRILFNBQVNDLGlCQUM5QixtSEFDRCxDQUFBLEdBQUE0RjtBQUFBLE1BQUE7QUFGQSxTQUFBRCxXQUFBdkYsRUFBQSxHQUFBLEVBQUF3RixTQUFBRCxXQUFBdEYsRUFBQSxHQUFBQyxRQUVHO0FBQUEsWUFGUXVGLFVBQUFELE9BQUFoSDtBQUdWLFlBQU1rSCxlQUFlN0csbUNBQUFaLFFBQUFDLGNBQUNpQixzQkFBQTtRQUFhSCxTQUFTMEY7TUFBQSxDQUFZO0FBQ3hEZSxjQUFRRSxNQUFNRCxZQUFZO0lBQzNCO0VBQUEsU0FBQWxGLEtBQUE7QUFBQStFLGVBQUE5RSxFQUFBRCxHQUFBO0VBQUEsVUFBQTtBQUFBK0UsZUFBQTdFLEVBQUE7RUFBQTtBQUNEOztBRTNMQSxJQUFJN0Usd0JBQXdCQyxRQUFRO0FBQ25DK0ksSUFBRVMsSUFBSTtBQUNQOyIsCiAgIm5hbWVzIjogWyJXR19BQ1RJT04iLCAibXciLCAiY29uZmlnIiwgImdldCIsICJJU19XR19ISVNUT1JZX0FDVElPTiIsICJJU19MT0ciLCAiUlJEX1BBR0UiLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAiX190b0VTTSIsICJyZXF1aXJlIiwgImdldEkxOG5NZXNzYWdlcyIsICJ3Z1VMUyIsICJ3aW5kb3ciLCAiZWRpdFN1bW1hcnkiLCAiZXJyTm9SZXZpc2lvblByb3ZpZGVkIiwgImVyck5vSXRlbVByb3ZpZGVkIiwgIndhcm5Ob1JlYXNvblByb3ZpZGVkIiwgImhpZGVJdGVtcyIsICJoaWRlQ29udGVudCIsICJoaWRlTG9nIiwgImhpZGVVc2VybmFtZSIsICJoaWRlU3VtbWFyeSIsICJoaWRlUmVhc29uIiwgImhpZGVSZWFzb25SRDEiLCAiaGlkZVJlYXNvblJEMiIsICJoaWRlUmVhc29uUkQzIiwgImhpZGVSZWFzb25SRDQiLCAiaGlkZVJlYXNvblJENSIsICJoaWRlUmVhc29uT3RoZXIiLCAib3RoZXJSZWFzb25zIiwgImRpYWxvZ1RpdGxlIiwgImRpYWxvZ0J1dHRvblN1Ym1pdCIsICJkaWFsb2dCdXR0b25DYW5jZWwiLCAicmVwb3J0QnV0dG9uVGl0bGUiLCAicmVwb3J0QnV0dG9uVGV4dCIsICJyZXBvcnRCdXR0b25Mb2dUZXh0IiwgImkxOG5NZXNzYWdlcyIsICJnZXRNZXNzYWdlIiwgImtleSIsICJEaWFsb2dJbm5lciIsICJkZWZhdWx0IiwgImNyZWF0ZUVsZW1lbnQiLCAiaWQiLCAiRnJhZ21lbnQiLCAiY2xhc3NOYW1lIiwgIm5hbWUiLCAidHlwZSIsICJ2YWx1ZSIsICJjaGVja2VkIiwgImh0bWxGb3IiLCAicm93cyIsICJEaWFsb2dJbm5lcl9kZWZhdWx0IiwgImltcG9ydF9leHRfZ2FkZ2V0MyIsICJpbXBvcnRfZXh0X2dhZGdldDIiLCAiUmVwb3J0QnV0dG9uIiwgIm9uQ2xpY2siLCAiY29uY2F0IiwgInRpdGxlIiwgIlJlcG9ydEJ1dHRvbl9kZWZhdWx0IiwgImltcG9ydF9leHRfZ2FkZ2V0NCIsICJjaGVja2JveGVzIiwgIm90aGVycyIsICJpZHMiLCAiJGRpYWxvZyIsICJsb2FkSURzIiwgImJveGVzIiwgImRvY3VtZW50IiwgInF1ZXJ5U2VsZWN0b3JBbGwiLCAiX2l0ZXJhdG9yMiIsICJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsICJfc3RlcDIiLCAicyIsICJuIiwgImRvbmUiLCAiYm94IiwgImlkUmVnZXgiLCAiaWRBcnJheSIsICJleGVjIiwgImxlbmd0aCIsICJlcnIiLCAiZSIsICJmIiwgInN1Ym1pdCIsICJfcmVmIiwgIl9hc3luY1RvR2VuZXJhdG9yIiwgInRvSGlkZSIsICJyZWFzb24iLCAiU2V0IiwgInJyZEFyciIsICJfaXRlcmF0b3IzIiwgImVudHJpZXMiLCAiX3N0ZXAzIiwgImluZGV4IiwgImFwaSIsICJpbml0TXdBcGkiLCAicGFyYW1zIiwgImFjdGlvbiIsICJmb3JtYXQiLCAiZm9ybWF0dmVyc2lvbiIsICJwcm9wIiwgInRpdGxlcyIsICJydnByb3AiLCAicXVlcnkiLCAiY29udGVudCIsICJwYWdlcyIsICJyZXZpc2lvbnMiLCAibm90aWZ5IiwgInRhZyIsICJfcmVzdWx0JGVkaXQiLCAiX3Jlc3VsdCRlcnJvciIsICJfcGFyYW1zIiwgInRleHQiLCAiam9pbiIsICJzdW1tYXJ5IiwgInJlc3VsdCIsICJwb3N0V2l0aEVkaXRUb2tlbiIsICJsb2NhdGlvbiIsICJyZXBsYWNlIiwgInV0aWwiLCAiZ2V0VXJsIiwgImNvZGUiLCAiX3giLCAiX3gyIiwgIl94MyIsICJhcHBseSIsICJhcmd1bWVudHMiLCAidXBkYXRlQ29uZmlnIiwgIl9kb2N1bWVudCRxdWVyeVNlbGVjdCIsICJfZG9jdW1lbnQkcXVlcnlTZWxlY3QyIiwgIl9kb2N1bWVudCRxdWVyeVNlbGVjdDMiLCAiX2RvY3VtZW50JHF1ZXJ5U2VsZWN0NCIsICJfZG9jdW1lbnQkcXVlcnlTZWxlY3Q1IiwgImNoZWNrQm94ZXMiLCAicXVlcnlTZWxlY3RvciIsICJycmRIaWRlQ29udGVudCIsICJycmRIaWRlVXNlcm5hbWUiLCAicnJkSGlkZVN1bW1hcnkiLCAicnJkUmVhc29uIiwgInJyZE90aGVyUmVhc29ucyIsICJsb2FkQ29uZmlnIiwgIl9pIiwgIl9PYmplY3QkZW50cmllcyIsICJPYmplY3QiLCAiX2kyIiwgIl9PYmplY3QkZW50cmllczIiLCAic2hvd0RpYWxvZyIsICJodG1sIiwgImRpYWxvZyIsICIkIiwgIm1pbldpZHRoIiwgIm1pbkhlaWdodCIsICJjbG9zZSIsICJidXR0b25zIiwgImNsaWNrIiwgImNvbnQiLCAiY29uZmlybSIsICJfb3RoZXJSZWFzb25zIiwgIm1haW4iLCAiX2l0ZXJhdG9yNCIsICJfc3RlcDQiLCAiZWxlbWVudCIsICJyZXBvcnRCdXR0b24iLCAiYWZ0ZXIiXQp9Cg==

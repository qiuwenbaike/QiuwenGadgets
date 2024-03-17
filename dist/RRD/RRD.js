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
var WG_PAGE_NAME = mw.config.get("wgPageName");
var IS_WG_HISTORY_ACTION = mw.config.get("wgAction") === "history";
var IS_WG_LOG_NS = mw.config.get("wgCanonicalSpecialPageName") === "Log";
//! src/RRD/options.json
var rrdPage = "Qiuwen_talk:版本删除提报";
var version = "2.0";
//! src/RRD/components/ReportButton.tsx
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
//! src/RRD/components/ReportButton.tsx
var ReportButton = ({
  onClick
}) => /* @__PURE__ */ import_ext_gadget.default.createElement("button", {
  className: ["historysubmit", "cdx-button", "cdx-button--action-progressive", "cdx-button--weight-primary"],
  name: "reportRRD",
  title: getMessage("reportButtonTitle") + rrdPage,
  onClick
}, IS_WG_LOG_NS ? getMessage("reportButtonLogText") : getMessage("reportButtonText"));
var ReportButton_default = ReportButton;
//! src/RRD/RRD.ts
var import_ext_gadget4 = require("ext.gadget.Util");
//! src/RRD/modules/rrdConfig.ts
var config = {
  checkboxes: {},
  others: {}
};
var updateConfig = () => {
  var _document$querySelect, _document$querySelect2, _document$querySelect3;
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
  const others = {};
  const reasonInput = document.querySelector("#rrd__reason");
  const otherReasonsInput = document.querySelector("#rrd__other-reasons");
  if (reasonInput) {
    others.rrdReason = reasonInput.value;
  }
  if (otherReasonsInput) {
    others.rrdOtherReasons = otherReasonsInput.value;
  }
  config.others = others;
};
//! src/RRD/components/DialogInner.tsx
var import_ext_gadget2 = __toESM(require("ext.gadget.React"), 1);
var DialogInner = () => /* @__PURE__ */ import_ext_gadget2.default.createElement("div", {
  id: "rrd__config"
}, getMessage("hideItems"), /* @__PURE__ */ import_ext_gadget2.default.createElement("br", null), /* @__PURE__ */ import_ext_gadget2.default.createElement("div", {
  className: "rrd__content-wrapper"
}, /* @__PURE__ */ import_ext_gadget2.default.createElement("input", {
  name: "content",
  id: "rrd__hide-content",
  type: "checkbox",
  value: "content",
  checked: true
}), /* @__PURE__ */ import_ext_gadget2.default.createElement("label", {
  htmlFor: "rrd__hide-content",
  id: "rrd-content"
}, IS_WG_LOG_NS ? getMessage("hideLog") : getMessage("hideContent"))), /* @__PURE__ */ import_ext_gadget2.default.createElement("div", {
  className: "rrd__content-wrapper"
}, /* @__PURE__ */ import_ext_gadget2.default.createElement("input", {
  name: "username",
  id: "rrd__hide-username",
  type: "checkbox",
  value: "username"
}), /* @__PURE__ */ import_ext_gadget2.default.createElement("label", {
  htmlFor: "rrd__hide-username",
  id: "rrd-username"
}, getMessage("hideUsername"))), /* @__PURE__ */ import_ext_gadget2.default.createElement("div", {
  className: "rrd__content-wrapper"
}, /* @__PURE__ */ import_ext_gadget2.default.createElement("input", {
  name: "summary",
  id: "rrd__hide-summary",
  type: "checkbox",
  value: "summary"
}), /* @__PURE__ */ import_ext_gadget2.default.createElement("label", {
  htmlFor: "rrd__hide-summary",
  id: "rrd-summary"
}, getMessage("hideSummary"))), /* @__PURE__ */ import_ext_gadget2.default.createElement("br", null), /* @__PURE__ */ import_ext_gadget2.default.createElement("br", null), getMessage("hideReason"), /* @__PURE__ */ import_ext_gadget2.default.createElement("br", null), /* @__PURE__ */ import_ext_gadget2.default.createElement("select", {
  name: "rrd__reason",
  id: "rrd__reason"
}, /* @__PURE__ */ import_ext_gadget2.default.createElement("option", {
  value: getMessage("hideReasonRD1")
}, getMessage("hideReasonRD1")), /* @__PURE__ */ import_ext_gadget2.default.createElement("option", {
  value: getMessage("hideReasonRD2")
}, getMessage("hideReasonRD2")), /* @__PURE__ */ import_ext_gadget2.default.createElement("option", {
  value: getMessage("hideReasonRD3")
}, getMessage("hideReasonRD3")), /* @__PURE__ */ import_ext_gadget2.default.createElement("option", {
  value: getMessage("hideReasonRD4")
}, getMessage("hideReasonRD4")), /* @__PURE__ */ import_ext_gadget2.default.createElement("option", {
  value: getMessage("hideReasonRD5")
}, getMessage("hideReasonRD5")), /* @__PURE__ */ import_ext_gadget2.default.createElement("option", {
  value: ""
}, getMessage("hideReasonOther"))), /* @__PURE__ */ import_ext_gadget2.default.createElement("br", null), /* @__PURE__ */ import_ext_gadget2.default.createElement("br", null), getMessage("otherReasons"), /* @__PURE__ */ import_ext_gadget2.default.createElement("br", null), /* @__PURE__ */ import_ext_gadget2.default.createElement("textarea", {
  name: "otherReasons",
  id: "rrd__other-reasons",
  rows: 4
}));
var DialogInner_default = DialogInner;
//! src/RRD/modules/loadIds.ts
var loadIds = ($body) => {
  const ids = [];
  const boxes = $body.find("input");
  var _iterator2 = _createForOfIteratorHelper(boxes), _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
      const box = _step2.value;
      const {
        checked,
        name,
        type
      } = box;
      if (type !== "checkbox" || !checked) {
        continue;
      }
      const idRegex = /ids\[(\d+)]/;
      const idArray = idRegex.exec(name);
      if ((idArray === null || idArray === void 0 ? void 0 : idArray[1]) === void 0) {
        continue;
      }
      [, ids[ids.length]] = idArray;
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
  return ids;
};
//! src/RRD/modules/api.ts
var import_ext_gadget3 = require("ext.gadget.Util");
var api = (0, import_ext_gadget3.initMwApi)("RRD/".concat(version));
//! src/RRD/modules/submit.ts
var submit = /* @__PURE__ */ function() {
  var _ref = _asyncToGenerator(function* (_ids, toHide, reason, otherReasons) {
    const ids = [...new Set(_ids)];
    const rrdArr = ["{{Revdel", "|status = ", "|article = ".concat(WG_PAGE_NAME), "|set = ".concat(toHide), "|reason = ".concat(reason).concat(otherReasons)];
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
    try {
      var _response$query;
      const queryParams = {
        action: "query",
        format: "json",
        formatversion: "2",
        titles: rrdPage,
        prop: "revisions",
        rvprop: "content"
      };
      const response = yield api.get(queryParams);
      let content;
      if ((_response$query = response["query"]) !== null && _response$query !== void 0 && _response$query.pages) {
        content = response["query"].pages[0].revisions[0].content;
      }
      if (content === void 0) {
        void mw.notify("Error when loading page ".concat(rrdPage, ": missing"), {
          tag: "RRD",
          type: "error"
        });
        return;
      }
      try {
        var _result$edit, _result$error;
        const editParams = {
          action: "edit",
          format: "json",
          formatversion: "2",
          title: rrdPage,
          text: "".concat(content, "\n\n").concat(rrdArr.join("\n")),
          summary: getMessage("editSummary")
        };
        const result = yield api.postWithEditToken(editParams);
        if (((_result$edit = result["edit"]) === null || _result$edit === void 0 ? void 0 : _result$edit.result) === "Success") {
          location.replace(mw.util.getUrl(rrdPage));
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
        void mw.notify("Error when editing page ".concat(rrdPage), {
          tag: "RRD",
          type: "error"
        });
      }
    } catch {
      void mw.notify("Error when loading page ".concat(rrdPage), {
        tag: "RRD",
        type: "error"
      });
    }
  });
  return function submit2(_x, _x2, _x3, _x4) {
    return _ref.apply(this, arguments);
  };
}();
//! src/RRD/modules/showDialog.ts
var $dialog;
var showDialog = ($body) => {
  const ids = loadIds($body);
  if (!ids.length) {
    void mw.notify(getMessage("errNoRevisionProvided"), {
      tag: "RRD",
      type: "error"
    });
    return;
  }
  const dialog = DialogInner_default();
  if ($dialog) {
    $dialog.html(dialog).dialog("open");
    for (var _i = 0, _Object$entries = Object.entries(config.others); _i < _Object$entries.length; _i++) {
      const [id, value] = _Object$entries[_i];
      $body.find("#".concat(id)).val(value);
    }
    for (var _i2 = 0, _Object$entries2 = Object.entries(config.checkboxes); _i2 < _Object$entries2.length; _i2++) {
      const [id, value] = _Object$entries2[_i2];
      if (value === true) {
        $body.find("#".concat(id)).prop("checked", true);
      }
    }
    return;
  }
  $dialog = $(dialog).dialog({
    title: getMessage("dialogTitle"),
    minWidth: 515,
    minHeight: 150,
    close: updateConfig,
    buttons: [{
      text: getMessage("dialogButtonSubmit"),
      click() {
        $(this).dialog("close");
        const {
          checkboxes: {
            rrdHideContent,
            rrdHideUsername,
            rrdHideSummary
          },
          others: {
            rrdReason
          }
        } = config;
        let {
          rrdOtherReasons
        } = config.others;
        if (rrdOtherReasons && rrdReason) {
          rrdOtherReasons = "，".concat(rrdOtherReasons);
        }
        const toHide = [];
        if (rrdHideContent) {
          toHide[toHide.length] = IS_WG_LOG_NS ? getMessage("hideLog") : getMessage("hideContent");
        }
        if (rrdHideUsername) {
          toHide[toHide.length] = getMessage("hideUsername");
        }
        if (rrdHideSummary) {
          toHide[toHide.length] = getMessage("hideSummary");
        }
        if (!toHide.length) {
          void mw.notify(getMessage("errNoItemProvided"), {
            tag: "RRD",
            type: "error"
          });
          return;
        }
        let cont = true;
        if (!rrdReason && !rrdOtherReasons) {
          cont = confirm(getMessage("warnNoReasonProvided"));
        }
        if (cont) {
          var _rrdOtherReasons;
          void submit(ids, toHide.join("、"), rrdReason !== null && rrdReason !== void 0 ? rrdReason : "", (_rrdOtherReasons = rrdOtherReasons) !== null && _rrdOtherReasons !== void 0 ? _rrdOtherReasons : "");
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
//! src/RRD/RRD.ts
if (IS_WG_HISTORY_ACTION || IS_WG_LOG_NS) {
  void (0, import_ext_gadget4.getBody)().then(function rrd($body) {
    var _iterator4 = _createForOfIteratorHelper($body.find([".historysubmit.mw-history-compareselectedversions-button", ".editchangetags-log-submit.mw-log-editchangetags-button"].join(","))), _step4;
    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
        const element = _step4.value;
        element.after(ReportButton_default({
          onClick: () => {
            showDialog($body);
          }
        }));
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }
  });
}

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1JSRC9tb2R1bGVzL2NvbnN0YW50LnRzIiwgInNyYy9SUkQvb3B0aW9ucy5qc29uIiwgInNyYy9SUkQvY29tcG9uZW50cy9SZXBvcnRCdXR0b24udHN4IiwgInNyYy9SUkQvbW9kdWxlcy9pMThuLnRzIiwgInNyYy9SUkQvUlJELnRzIiwgInNyYy9SUkQvbW9kdWxlcy9ycmRDb25maWcudHMiLCAic3JjL1JSRC9jb21wb25lbnRzL0RpYWxvZ0lubmVyLnRzeCIsICJzcmMvUlJEL21vZHVsZXMvbG9hZElkcy50cyIsICJzcmMvUlJEL21vZHVsZXMvYXBpLnRzIiwgInNyYy9SUkQvbW9kdWxlcy9zdWJtaXQudHMiLCAic3JjL1JSRC9tb2R1bGVzL3Nob3dEaWFsb2cudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IFdHX1BBR0VfTkFNRTogc3RyaW5nID0gbXcuY29uZmlnLmdldCgnd2dQYWdlTmFtZScpO1xuXG5jb25zdCBJU19XR19ISVNUT1JZX0FDVElPTjogYm9vbGVhbiA9IG13LmNvbmZpZy5nZXQoJ3dnQWN0aW9uJykgPT09ICdoaXN0b3J5JztcbmNvbnN0IElTX1dHX0xPR19OUzogYm9vbGVhbiA9IG13LmNvbmZpZy5nZXQoJ3dnQ2Fub25pY2FsU3BlY2lhbFBhZ2VOYW1lJykgPT09ICdMb2cnO1xuXG5leHBvcnQge0lTX1dHX0hJU1RPUllfQUNUSU9OLCBJU19XR19MT0dfTlMsIFdHX1BBR0VfTkFNRX07XG4iLCAie1xuXHRcInJyZFBhZ2VcIjogXCJRaXV3ZW5fdGFsazrniYjmnKzliKDpmaTmj5DmiqVcIixcblx0XCJ2ZXJzaW9uXCI6IFwiMi4wXCJcbn1cbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge0lTX1dHX0xPR19OU30gZnJvbSAnLi4vbW9kdWxlcy9jb25zdGFudCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAnZXh0LmdhZGdldC5SZWFjdCc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4uL21vZHVsZXMvaTE4bic7XG5cbmludGVyZmFjZSBQcm9wcyB7XG5cdG9uQ2xpY2soKTogdm9pZDtcbn1cblxuY29uc3QgUmVwb3J0QnV0dG9uID0gKHtvbkNsaWNrfTogUHJvcHMpID0+IChcblx0PGJ1dHRvblxuXHRcdGNsYXNzTmFtZT17WydoaXN0b3J5c3VibWl0JywgJ2NkeC1idXR0b24nLCAnY2R4LWJ1dHRvbi0tYWN0aW9uLXByb2dyZXNzaXZlJywgJ2NkeC1idXR0b24tLXdlaWdodC1wcmltYXJ5J119XG5cdFx0bmFtZT17J3JlcG9ydFJSRCd9XG5cdFx0dGl0bGU9e2dldE1lc3NhZ2UoJ3JlcG9ydEJ1dHRvblRpdGxlJykgKyBPUFRJT05TLnJyZFBhZ2V9XG5cdFx0b25DbGljaz17b25DbGlja31cblx0PlxuXHRcdHtJU19XR19MT0dfTlMgPyBnZXRNZXNzYWdlKCdyZXBvcnRCdXR0b25Mb2dUZXh0JykgOiBnZXRNZXNzYWdlKCdyZXBvcnRCdXR0b25UZXh0Jyl9XG5cdDwvYnV0dG9uPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgUmVwb3J0QnV0dG9uO1xuIiwgImNvbnN0IGdldEkxOG5NZXNzYWdlcyA9ICgpID0+IHtcblx0Y29uc3Qge3dnVUxTfSA9IHdpbmRvdztcblx0cmV0dXJuIHtcblx0XHRlZGl0U3VtbWFyeTogd2dVTFMoXG5cdFx0XHQnW1tNZWRpYVdpa2k6R2FkZ2V0LVJSRC5qc3zljYroh6rliqjmj5DmiqVdXeS/ruiuoueJiOacrOWIoOmZpCcsXG5cdFx0XHQnW1tNZWRpYVdpa2k6R2FkZ2V0LVJSRC5qc3zljYroh6rli5Xmj5DloLFdXeS/ruiogueJiOacrOWIqumZpCdcblx0XHQpLFxuXHRcdGVyck5vUmV2aXNpb25Qcm92aWRlZDogd2dVTFMoJ+aCqOayoeaciemAieaLqemcgOmakOiXj+eahOeJiOacrO+8gScsICfmgqjmspLmnInpgbjmk4fpnIDpmrHol4/nmoTniYjmnKzvvIEnKSxcblx0XHRlcnJOb0l0ZW1Qcm92aWRlZDogd2dVTFMoJ+aCqOayoeaciemAieaLqemcgOmakOiXj+eahOmhueebru+8gScsICfmgqjmspLmnInpgbjmk4fpnIDpmrHol4/nmoTpoIXnm67vvIEnKSxcblx0XHR3YXJuTm9SZWFzb25Qcm92aWRlZDogd2dVTFMoJ+aCqOayoeaciei+k+WFpeS7u+S9leeQhueUse+8geehruWumuimgee7p+e7reWQl++8nycsICfmgqjmspLmnInovLjlhaXku7vkvZXnkIbnlLHvvIHnorrlrpropoHnubznuozll47vvJ8nKSxcblx0XHRoaWRlSXRlbXM6IHdnVUxTKCfpnIDpmpDol4/nmoTpobnnm67vvJonLCAn6ZyA6Zqx6JeP55qE6aCF55uu77yaJyksXG5cdFx0aGlkZUNvbnRlbnQ6IHdnVUxTKCfnvJbovpHlhoXlrrknLCAn57eo6Lyv5YWn5a65JyksXG5cdFx0aGlkZUxvZzogd2dVTFMoJ+aXpeW/l+ebruagh+S4juWPguaVsCcsICfml6Xoqoznm67mqJnoiIflj4PmlbgnKSxcblx0XHRoaWRlVXNlcm5hbWU6IHdnVUxTKCfnvJbovpHogIXnlKjmiLflkI0vSVDlnLDlnYAnLCAn57eo6Lyv6ICF55So5oi25ZCNL0lQ5L2N5Z2AJyksXG5cdFx0aGlkZVN1bW1hcnk6IHdnVUxTKCfnvJbovpHmkZjopoEnLCAn57eo6Lyv5pGY6KaBJyksXG5cdFx0aGlkZVJlYXNvbjogd2dVTFMoJ+eQhuaNru+8micsICfnkIbmk5rvvJonKSxcblx0XHRoaWRlUmVhc29uUkQxOiB3Z1VMUygnUkQx77ya5p2h55uu5Lit5piO5pi+5L6154qv6JGX5L2c5p2D55qE5YaF5a65JywgJ1JEMe+8muaineebruS4reaYjumhr+S+teeKr+iRl+S9nOasiueahOWFp+WuuScpLFxuXHRcdGhpZGVSZWFzb25SRDI6IHdnVUxTKCdSRDLvvJrkuKXph43kvq7ovrHjgIHotKzkvY7miJbmlLvlh7vmgKfmlofmnKwnLCAnUkQy77ya5Zq06YeN5L6u6L6x44CB6LK25L2O5oiW5pS75pOK5oCn5paH5pysJyksXG5cdFx0aGlkZVJlYXNvblJEMzogd2dVTFMoJ1JEM++8mue6r+eyueaJsOS5seaAp+WGheWuuScsICfntJTnsrnmk77kuoLmgKflhaflrrknKSxcblx0XHRoaWRlUmVhc29uUkQ0OiB3Z1VMUygnUkQ077ya5piO5pi+6L+d5Y+N5rOV5b6L5rOV6KeE5oiW6L+d6IOM5YWs5bqP6Imv5L+X55qE5YaF5a65JywgJ1JENO+8muaYjumhr+mBleWPjeazleW+i+azleimj+aIlumBleiDjOWFrOW6j+iJr+S/l+eahOWFp+WuuScpLFxuXHRcdGhpZGVSZWFzb25SRDU6IHdnVUxTKCdSRDXvvJrlhbbku5bkuI3lrpzlhazlvIDnmoTniYjmnKzlhoXlrrknLCAnUkQ177ya5YW25LuW5LiN5a6c5YWs6ZaL55qE54mI5pys5YWn5a65JyksXG5cdFx0aGlkZVJlYXNvbk90aGVyOiB3Z1VMUygn5LuF5L2/55So5LiL5pa555qE6ZmE5Yqg55CG55SxJywgJ+WDheS9v+eUqOS4i+aWueeahOmZhOWKoOeQhueUsScpLFxuXHRcdG90aGVyUmVhc29uczogd2dVTFMoJ+mZhOWKoOeQhueUse+8iOWPr+mAie+8jOS4jeeUqOetvuWQje+8iScsICfpmYTliqDnkIbnlLHvvIjlj6/pgbjvvIzkuI3nlKjnsL3lkI3vvIknKSxcblx0XHRkaWFsb2dUaXRsZTogd2dVTFMoJ+aPkOaKpeS/ruiuoueJiOacrOWIoOmZpCcsICfmj5DloLHkv67oqILniYjmnKzliKrpmaQnKSxcblx0XHRkaWFsb2dCdXR0b25TdWJtaXQ6IHdnVUxTKCfmj5DmiqUnLCAn5o+Q5aCxJyksXG5cdFx0ZGlhbG9nQnV0dG9uQ2FuY2VsOiB3Z1VMUygn5Y+W5raIJywgJ+WPlua2iCcpLFxuXHRcdHJlcG9ydEJ1dHRvblRpdGxlOiB3Z1VMUygn5bCG6YCJ5Lit55qE54mI5pys5o+Q5oql5YiwJywgJ+Wwh+mBuOS4reeahOeJiOacrOaPkOWgseWIsCcpLFxuXHRcdHJlcG9ydEJ1dHRvblRleHQ6IHdnVUxTKCfor7fmsYLliKDpmaTooqvpgInniYjmnKwnLCAn6KuL5rGC5Yiq6Zmk6KKr6YG454mI5pysJyksXG5cdFx0cmVwb3J0QnV0dG9uTG9nVGV4dDogd2dVTFMoJ+ivt+axguWIoOmZpOiiq+mAieaXpeW/lycsICfoq4vmsYLliKrpmaTooqvpgbjml6XoqownKSxcblx0fTtcbn07XG5cbmNvbnN0IGkxOG5NZXNzYWdlcyA9IGdldEkxOG5NZXNzYWdlcygpO1xuXG5jb25zdCBnZXRNZXNzYWdlOiBHZXRNZXNzYWdlczx0eXBlb2YgaTE4bk1lc3NhZ2VzPiA9IChrZXkpID0+IHtcblx0cmV0dXJuIGkxOG5NZXNzYWdlc1trZXldIHx8IGtleTtcbn07XG5cbmV4cG9ydCB7Z2V0TWVzc2FnZX07XG4iLCAiaW1wb3J0IHtJU19XR19ISVNUT1JZX0FDVElPTiwgSVNfV0dfTE9HX05TfSBmcm9tICcuL21vZHVsZXMvY29uc3RhbnQnO1xuaW1wb3J0IFJlcG9ydEJ1dHRvbiBmcm9tICcuL2NvbXBvbmVudHMvUmVwb3J0QnV0dG9uJztcbmltcG9ydCB7Z2V0Qm9keX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbmltcG9ydCB7c2hvd0RpYWxvZ30gZnJvbSAnLi9tb2R1bGVzL3Nob3dEaWFsb2cnO1xuXG5pZiAoSVNfV0dfSElTVE9SWV9BQ1RJT04gfHwgSVNfV0dfTE9HX05TKSB7XG5cdHZvaWQgZ2V0Qm9keSgpLnRoZW4oZnVuY3Rpb24gcnJkKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQge1xuXHRcdC8vIEZvciBhY3Rpb249aGlzdG9yeSBhbmQgU3BlY2lhbDpMb2dcblx0XHRmb3IgKGNvbnN0IGVsZW1lbnQgb2YgJGJvZHkuZmluZChcblx0XHRcdFtcblx0XHRcdFx0Jy5oaXN0b3J5c3VibWl0Lm13LWhpc3RvcnktY29tcGFyZXNlbGVjdGVkdmVyc2lvbnMtYnV0dG9uJyxcblx0XHRcdFx0Jy5lZGl0Y2hhbmdldGFncy1sb2ctc3VibWl0Lm13LWxvZy1lZGl0Y2hhbmdldGFncy1idXR0b24nLFxuXHRcdFx0XS5qb2luKCcsJylcblx0XHQpKSB7XG5cdFx0XHRlbGVtZW50LmFmdGVyKFxuXHRcdFx0XHRSZXBvcnRCdXR0b24oe1xuXHRcdFx0XHRcdG9uQ2xpY2s6ICgpOiB2b2lkID0+IHtcblx0XHRcdFx0XHRcdHNob3dEaWFsb2coJGJvZHkpO1xuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdH0pXG5cdFx0XHQpO1xuXHRcdH1cblx0fSk7XG59XG4iLCAiaW1wb3J0IHR5cGUge1JyZENvbmZpZ30gZnJvbSAnLi90eXBlcyc7XG5cbmNvbnN0IGNvbmZpZzogUnJkQ29uZmlnID0ge1xuXHRjaGVja2JveGVzOiB7fSxcblx0b3RoZXJzOiB7fSxcbn07XG5cbmNvbnN0IHVwZGF0ZUNvbmZpZyA9ICgpOiB2b2lkID0+IHtcblx0Y29uc3QgY2hlY2tCb3hlczogUnJkQ29uZmlnWydjaGVja2JveGVzJ10gPSB7fTtcblxuXHRpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MSW5wdXRFbGVtZW50PignI3JyZF9faGlkZS1jb250ZW50Jyk/LmNoZWNrZWQpIHtcblx0XHRjaGVja0JveGVzLnJyZEhpZGVDb250ZW50ID0gdHJ1ZTtcblx0fVxuXHRpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MSW5wdXRFbGVtZW50PignI3JyZF9faGlkZS11c2VybmFtZScpPy5jaGVja2VkKSB7XG5cdFx0Y2hlY2tCb3hlcy5ycmRIaWRlVXNlcm5hbWUgPSB0cnVlO1xuXHR9XG5cdGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxJbnB1dEVsZW1lbnQ+KCcjcnJkX19oaWRlLXN1bW1hcnknKT8uY2hlY2tlZCkge1xuXHRcdGNoZWNrQm94ZXMucnJkSGlkZVN1bW1hcnkgPSB0cnVlO1xuXHR9XG5cblx0Y29uZmlnLmNoZWNrYm94ZXMgPSBjaGVja0JveGVzO1xuXG5cdGNvbnN0IG90aGVyczogUnJkQ29uZmlnWydvdGhlcnMnXSA9IHt9O1xuXG5cdGNvbnN0IHJlYXNvbklucHV0OiBIVE1MSW5wdXRFbGVtZW50IHwgbnVsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTElucHV0RWxlbWVudD4oJyNycmRfX3JlYXNvbicpO1xuXHRjb25zdCBvdGhlclJlYXNvbnNJbnB1dDogSFRNTElucHV0RWxlbWVudCB8IG51bGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxJbnB1dEVsZW1lbnQ+KCcjcnJkX19vdGhlci1yZWFzb25zJyk7XG5cdGlmIChyZWFzb25JbnB1dCkge1xuXHRcdG90aGVycy5ycmRSZWFzb24gPSByZWFzb25JbnB1dC52YWx1ZTtcblx0fVxuXHRpZiAob3RoZXJSZWFzb25zSW5wdXQpIHtcblx0XHRvdGhlcnMucnJkT3RoZXJSZWFzb25zID0gb3RoZXJSZWFzb25zSW5wdXQudmFsdWU7XG5cdH1cblxuXHRjb25maWcub3RoZXJzID0gb3RoZXJzO1xufTtcblxuZXhwb3J0IHtjb25maWcsIHVwZGF0ZUNvbmZpZ307XG4iLCAiaW1wb3J0ICcuL0RpYWxvZ0lubmVyLmxlc3MnO1xuaW1wb3J0IHtJU19XR19MT0dfTlN9IGZyb20gJy4uL21vZHVsZXMvY29uc3RhbnQnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ2V4dC5nYWRnZXQuUmVhY3QnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuLi9tb2R1bGVzL2kxOG4nO1xuXG5jb25zdCBEaWFsb2dJbm5lciA9ICgpID0+IChcblx0PGRpdiBpZD1cInJyZF9fY29uZmlnXCI+XG5cdFx0e2dldE1lc3NhZ2UoJ2hpZGVJdGVtcycpfVxuXHRcdDxiciAvPlxuXHRcdDxkaXYgY2xhc3NOYW1lPVwicnJkX19jb250ZW50LXdyYXBwZXJcIj5cblx0XHRcdDxpbnB1dCBuYW1lPVwiY29udGVudFwiIGlkPVwicnJkX19oaWRlLWNvbnRlbnRcIiB0eXBlPVwiY2hlY2tib3hcIiB2YWx1ZT1cImNvbnRlbnRcIiBjaGVja2VkIC8+XG5cdFx0XHQ8bGFiZWwgaHRtbEZvcj1cInJyZF9faGlkZS1jb250ZW50XCIgaWQ9XCJycmQtY29udGVudFwiPlxuXHRcdFx0XHR7SVNfV0dfTE9HX05TID8gZ2V0TWVzc2FnZSgnaGlkZUxvZycpIDogZ2V0TWVzc2FnZSgnaGlkZUNvbnRlbnQnKX1cblx0XHRcdDwvbGFiZWw+XG5cdFx0PC9kaXY+XG5cdFx0PGRpdiBjbGFzc05hbWU9XCJycmRfX2NvbnRlbnQtd3JhcHBlclwiPlxuXHRcdFx0PGlucHV0IG5hbWU9XCJ1c2VybmFtZVwiIGlkPVwicnJkX19oaWRlLXVzZXJuYW1lXCIgdHlwZT1cImNoZWNrYm94XCIgdmFsdWU9XCJ1c2VybmFtZVwiIC8+XG5cdFx0XHQ8bGFiZWwgaHRtbEZvcj1cInJyZF9faGlkZS11c2VybmFtZVwiIGlkPVwicnJkLXVzZXJuYW1lXCI+XG5cdFx0XHRcdHtnZXRNZXNzYWdlKCdoaWRlVXNlcm5hbWUnKX1cblx0XHRcdDwvbGFiZWw+XG5cdFx0PC9kaXY+XG5cdFx0PGRpdiBjbGFzc05hbWU9XCJycmRfX2NvbnRlbnQtd3JhcHBlclwiPlxuXHRcdFx0PGlucHV0IG5hbWU9XCJzdW1tYXJ5XCIgaWQ9XCJycmRfX2hpZGUtc3VtbWFyeVwiIHR5cGU9XCJjaGVja2JveFwiIHZhbHVlPVwic3VtbWFyeVwiIC8+XG5cdFx0XHQ8bGFiZWwgaHRtbEZvcj1cInJyZF9faGlkZS1zdW1tYXJ5XCIgaWQ9XCJycmQtc3VtbWFyeVwiPlxuXHRcdFx0XHR7Z2V0TWVzc2FnZSgnaGlkZVN1bW1hcnknKX1cblx0XHRcdDwvbGFiZWw+XG5cdFx0PC9kaXY+XG5cdFx0PGJyIC8+XG5cdFx0PGJyIC8+XG5cdFx0e2dldE1lc3NhZ2UoJ2hpZGVSZWFzb24nKX1cblx0XHQ8YnIgLz5cblx0XHQ8c2VsZWN0IG5hbWU9XCJycmRfX3JlYXNvblwiIGlkPVwicnJkX19yZWFzb25cIj5cblx0XHRcdDxvcHRpb24gdmFsdWU9e2dldE1lc3NhZ2UoJ2hpZGVSZWFzb25SRDEnKX0+e2dldE1lc3NhZ2UoJ2hpZGVSZWFzb25SRDEnKX08L29wdGlvbj5cblx0XHRcdDxvcHRpb24gdmFsdWU9e2dldE1lc3NhZ2UoJ2hpZGVSZWFzb25SRDInKX0+e2dldE1lc3NhZ2UoJ2hpZGVSZWFzb25SRDInKX08L29wdGlvbj5cblx0XHRcdDxvcHRpb24gdmFsdWU9e2dldE1lc3NhZ2UoJ2hpZGVSZWFzb25SRDMnKX0+e2dldE1lc3NhZ2UoJ2hpZGVSZWFzb25SRDMnKX08L29wdGlvbj5cblx0XHRcdDxvcHRpb24gdmFsdWU9e2dldE1lc3NhZ2UoJ2hpZGVSZWFzb25SRDQnKX0+e2dldE1lc3NhZ2UoJ2hpZGVSZWFzb25SRDQnKX08L29wdGlvbj5cblx0XHRcdDxvcHRpb24gdmFsdWU9e2dldE1lc3NhZ2UoJ2hpZGVSZWFzb25SRDUnKX0+e2dldE1lc3NhZ2UoJ2hpZGVSZWFzb25SRDUnKX08L29wdGlvbj5cblx0XHRcdDxvcHRpb24gdmFsdWU9XCJcIj57Z2V0TWVzc2FnZSgnaGlkZVJlYXNvbk90aGVyJyl9PC9vcHRpb24+XG5cdFx0PC9zZWxlY3Q+XG5cdFx0PGJyIC8+XG5cdFx0PGJyIC8+XG5cdFx0e2dldE1lc3NhZ2UoJ290aGVyUmVhc29ucycpfVxuXHRcdDxiciAvPlxuXHRcdDx0ZXh0YXJlYSBuYW1lPVwib3RoZXJSZWFzb25zXCIgaWQ9XCJycmRfX290aGVyLXJlYXNvbnNcIiByb3dzPXs0fT48L3RleHRhcmVhPlxuXHQ8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IERpYWxvZ0lubmVyO1xuIiwgImNvbnN0IGxvYWRJZHMgPSAoJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KTogc3RyaW5nW10gPT4ge1xuXHRjb25zdCBpZHM6IHN0cmluZ1tdID0gW107XG5cblx0Y29uc3QgYm94ZXM6IEpRdWVyeTxIVE1MSW5wdXRFbGVtZW50PiA9ICRib2R5LmZpbmQoJ2lucHV0Jyk7XG5cdGZvciAoY29uc3QgYm94IG9mIGJveGVzKSB7XG5cdFx0Y29uc3Qge2NoZWNrZWQsIG5hbWUsIHR5cGV9ID0gYm94O1xuXG5cdFx0aWYgKHR5cGUgIT09ICdjaGVja2JveCcgfHwgIWNoZWNrZWQpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGNvbnN0IGlkUmVnZXg6IFJlZ0V4cCA9IC9pZHNcXFsoXFxkKyldLztcblx0XHRjb25zdCBpZEFycmF5OiBSZWdFeHBFeGVjQXJyYXkgfCBudWxsID0gaWRSZWdleC5leGVjKG5hbWUpO1xuXHRcdGlmIChpZEFycmF5Py5bMV0gPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0WywgaWRzW2lkcy5sZW5ndGhdXSA9IGlkQXJyYXk7XG5cdH1cblxuXHRyZXR1cm4gaWRzO1xufTtcblxuZXhwb3J0IHtsb2FkSWRzfTtcbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge2luaXRNd0FwaX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxuY29uc3QgYXBpOiBtdy5BcGkgPSBpbml0TXdBcGkoYFJSRC8ke09QVElPTlMudmVyc2lvbn1gKTtcblxuZXhwb3J0IHthcGl9O1xuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7V0dfUEFHRV9OQU1FfSBmcm9tICcuL2NvbnN0YW50JztcbmltcG9ydCB7YXBpfSBmcm9tICcuL2FwaSc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vaTE4bic7XG5cbmNvbnN0IHN1Ym1pdCA9IGFzeW5jIChfaWRzOiBzdHJpbmdbXSwgdG9IaWRlOiBzdHJpbmcsIHJlYXNvbjogc3RyaW5nLCBvdGhlclJlYXNvbnM6IHN0cmluZyk6IFByb21pc2U8dm9pZD4gPT4ge1xuXHRjb25zdCBpZHM6IHN0cmluZ1tdID0gWy4uLm5ldyBTZXQoX2lkcyldO1xuXG5cdGNvbnN0IHJyZEFycjogc3RyaW5nW10gPSBbXG5cdFx0J3t7UmV2ZGVsJyxcblx0XHQnfHN0YXR1cyA9ICcsXG5cdFx0YHxhcnRpY2xlID0gJHtXR19QQUdFX05BTUV9YCxcblx0XHRgfHNldCA9ICR7dG9IaWRlfWAsXG5cdFx0YHxyZWFzb24gPSAke3JlYXNvbn0ke290aGVyUmVhc29uc31gLFxuXHRdO1xuXG5cdGZvciAoY29uc3QgW2luZGV4LCBpZF0gb2YgaWRzLmVudHJpZXMoKSkge1xuXHRcdHJyZEFycltycmRBcnIubGVuZ3RoXSA9IGB8aWQke2luZGV4ICsgMX0gPSAke2lkfWA7XG5cdH1cblx0cnJkQXJyW3JyZEFyci5sZW5ndGhdID0gJ319XFxuLS1+ficuY29uY2F0KCd+ficpO1xuXG5cdHRyeSB7XG5cdFx0Y29uc3QgcXVlcnlQYXJhbXM6IEFwaVF1ZXJ5UmV2aXNpb25zUGFyYW1zID0ge1xuXHRcdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0XHR0aXRsZXM6IE9QVElPTlMucnJkUGFnZSxcblx0XHRcdHByb3A6ICdyZXZpc2lvbnMnLFxuXHRcdFx0cnZwcm9wOiAnY29udGVudCcsXG5cdFx0fTtcblxuXHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXBpLmdldChxdWVyeVBhcmFtcyk7XG5cblx0XHRsZXQgY29udGVudDogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXHRcdGlmIChyZXNwb25zZVsncXVlcnknXT8ucGFnZXMpIHtcblx0XHRcdGNvbnRlbnQgPSByZXNwb25zZVsncXVlcnknXS5wYWdlc1swXS5yZXZpc2lvbnNbMF0uY29udGVudCBhcyBzdHJpbmc7XG5cdFx0fVxuXG5cdFx0aWYgKGNvbnRlbnQgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dm9pZCBtdy5ub3RpZnkoYEVycm9yIHdoZW4gbG9hZGluZyBwYWdlICR7T1BUSU9OUy5ycmRQYWdlfTogbWlzc2luZ2AsIHtcblx0XHRcdFx0dGFnOiAnUlJEJyxcblx0XHRcdFx0dHlwZTogJ2Vycm9yJyxcblx0XHRcdH0pO1xuXG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IGVkaXRQYXJhbXM6IEFwaUVkaXRQYWdlUGFyYW1zID0ge1xuXHRcdFx0XHRhY3Rpb246ICdlZGl0Jyxcblx0XHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRcdFx0dGl0bGU6IE9QVElPTlMucnJkUGFnZSxcblx0XHRcdFx0dGV4dDogYCR7Y29udGVudH1cXG5cXG4ke3JyZEFyci5qb2luKCdcXG4nKX1gLFxuXHRcdFx0XHRzdW1tYXJ5OiBnZXRNZXNzYWdlKCdlZGl0U3VtbWFyeScpLFxuXHRcdFx0fTtcblxuXHRcdFx0Y29uc3QgcmVzdWx0ID0gYXdhaXQgYXBpLnBvc3RXaXRoRWRpdFRva2VuKGVkaXRQYXJhbXMpO1xuXG5cdFx0XHRpZiAocmVzdWx0WydlZGl0J10/LnJlc3VsdCA9PT0gJ1N1Y2Nlc3MnKSB7XG5cdFx0XHRcdGxvY2F0aW9uLnJlcGxhY2UobXcudXRpbC5nZXRVcmwoT1BUSU9OUy5ycmRQYWdlKSk7XG5cdFx0XHR9IGVsc2UgaWYgKHJlc3VsdFsnZXJyb3InXT8uY29kZSkge1xuXHRcdFx0XHR2b2lkIG13Lm5vdGlmeShgU29tZSBlcnJvcnMgb2NjdXJlZCB3aGlsZSBzYXZpbmcgcGFnZTogJHtyZXN1bHRbJ2Vycm9yJ10uY29kZX1gLCB7XG5cdFx0XHRcdFx0dGFnOiAnUlJEJyxcblx0XHRcdFx0XHR0eXBlOiAnZXJyb3InLFxuXHRcdFx0XHR9KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHZvaWQgbXcubm90aWZ5KCdTb21lIGVycm9ycyBvY2N1cmVkIHdoaWxlIHNhdmluZyBwYWdlOiB1bmtub3duJywge1xuXHRcdFx0XHRcdHRhZzogJ1JSRCcsXG5cdFx0XHRcdFx0dHlwZTogJ2Vycm9yJyxcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fSBjYXRjaCB7XG5cdFx0XHR2b2lkIG13Lm5vdGlmeShgRXJyb3Igd2hlbiBlZGl0aW5nIHBhZ2UgJHtPUFRJT05TLnJyZFBhZ2V9YCwge3RhZzogJ1JSRCcsIHR5cGU6ICdlcnJvcid9KTtcblx0XHR9XG5cdH0gY2F0Y2gge1xuXHRcdHZvaWQgbXcubm90aWZ5KGBFcnJvciB3aGVuIGxvYWRpbmcgcGFnZSAke09QVElPTlMucnJkUGFnZX1gLCB7dGFnOiAnUlJEJywgdHlwZTogJ2Vycm9yJ30pO1xuXHR9XG59O1xuXG5leHBvcnQge3N1Ym1pdH07XG4iLCAiaW1wb3J0IHtjb25maWcsIHVwZGF0ZUNvbmZpZ30gZnJvbSAnLi9ycmRDb25maWcnO1xuaW1wb3J0IERpYWxvZ0lubmVyIGZyb20gJy4uL2NvbXBvbmVudHMvRGlhbG9nSW5uZXInO1xuaW1wb3J0IHtJU19XR19MT0dfTlN9IGZyb20gJy4vY29uc3RhbnQnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ2V4dC5nYWRnZXQuUmVhY3QnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL2kxOG4nO1xuaW1wb3J0IHtsb2FkSWRzfSBmcm9tICcuL2xvYWRJZHMnO1xuaW1wb3J0IHtzdWJtaXR9IGZyb20gJy4vc3VibWl0JztcblxubGV0ICRkaWFsb2c6IEpRdWVyeSB8IHVuZGVmaW5lZDtcblxuY29uc3Qgc2hvd0RpYWxvZyA9ICgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkID0+IHtcblx0Y29uc3QgaWRzOiBzdHJpbmdbXSA9IGxvYWRJZHMoJGJvZHkpO1xuXHRpZiAoIWlkcy5sZW5ndGgpIHtcblx0XHR2b2lkIG13Lm5vdGlmeShnZXRNZXNzYWdlKCdlcnJOb1JldmlzaW9uUHJvdmlkZWQnKSwge1xuXHRcdFx0dGFnOiAnUlJEJyxcblx0XHRcdHR5cGU6ICdlcnJvcicsXG5cdFx0fSk7XG5cblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBkaWFsb2c6IFJlYWN0LlJlYWN0RWxlbWVudCA9IERpYWxvZ0lubmVyKCk7XG5cdGlmICgkZGlhbG9nKSB7XG5cdFx0JGRpYWxvZy5odG1sKGRpYWxvZykuZGlhbG9nKCdvcGVuJyk7XG5cblx0XHRmb3IgKGNvbnN0IFtpZCwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKGNvbmZpZy5vdGhlcnMpKSB7XG5cdFx0XHQkYm9keS5maW5kKGAjJHtpZH1gKS52YWwodmFsdWUgYXMgc3RyaW5nKTtcblx0XHR9XG5cdFx0Zm9yIChjb25zdCBbaWQsIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhjb25maWcuY2hlY2tib3hlcykpIHtcblx0XHRcdGlmICh2YWx1ZSA9PT0gdHJ1ZSkge1xuXHRcdFx0XHQkYm9keS5maW5kKGAjJHtpZH1gKS5wcm9wKCdjaGVja2VkJywgdHJ1ZSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0JGRpYWxvZyA9ICQoZGlhbG9nKS5kaWFsb2coe1xuXHRcdHRpdGxlOiBnZXRNZXNzYWdlKCdkaWFsb2dUaXRsZScpLFxuXHRcdG1pbldpZHRoOiA1MTUsXG5cdFx0bWluSGVpZ2h0OiAxNTAsXG5cdFx0Y2xvc2U6IHVwZGF0ZUNvbmZpZyxcblx0XHRidXR0b25zOiBbXG5cdFx0XHR7XG5cdFx0XHRcdHRleHQ6IGdldE1lc3NhZ2UoJ2RpYWxvZ0J1dHRvblN1Ym1pdCcpLFxuXHRcdFx0XHRjbGljaygpOiB2b2lkIHtcblx0XHRcdFx0XHQkKHRoaXMpLmRpYWxvZygnY2xvc2UnKTtcblxuXHRcdFx0XHRcdGNvbnN0IHtcblx0XHRcdFx0XHRcdGNoZWNrYm94ZXM6IHtycmRIaWRlQ29udGVudCwgcnJkSGlkZVVzZXJuYW1lLCBycmRIaWRlU3VtbWFyeX0sXG5cdFx0XHRcdFx0XHRvdGhlcnM6IHtycmRSZWFzb259LFxuXHRcdFx0XHRcdH0gPSBjb25maWc7XG5cblx0XHRcdFx0XHRsZXQge3JyZE90aGVyUmVhc29uc30gPSBjb25maWcub3RoZXJzO1xuXHRcdFx0XHRcdGlmIChycmRPdGhlclJlYXNvbnMgJiYgcnJkUmVhc29uKSB7XG5cdFx0XHRcdFx0XHRycmRPdGhlclJlYXNvbnMgPSBg77yMJHtycmRPdGhlclJlYXNvbnN9YDtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRjb25zdCB0b0hpZGU6IHN0cmluZ1tdID0gW107XG5cdFx0XHRcdFx0aWYgKHJyZEhpZGVDb250ZW50KSB7XG5cdFx0XHRcdFx0XHR0b0hpZGVbdG9IaWRlLmxlbmd0aF0gPSBJU19XR19MT0dfTlMgPyBnZXRNZXNzYWdlKCdoaWRlTG9nJykgOiBnZXRNZXNzYWdlKCdoaWRlQ29udGVudCcpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAocnJkSGlkZVVzZXJuYW1lKSB7XG5cdFx0XHRcdFx0XHR0b0hpZGVbdG9IaWRlLmxlbmd0aF0gPSBnZXRNZXNzYWdlKCdoaWRlVXNlcm5hbWUnKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKHJyZEhpZGVTdW1tYXJ5KSB7XG5cdFx0XHRcdFx0XHR0b0hpZGVbdG9IaWRlLmxlbmd0aF0gPSBnZXRNZXNzYWdlKCdoaWRlU3VtbWFyeScpO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGlmICghdG9IaWRlLmxlbmd0aCkge1xuXHRcdFx0XHRcdFx0dm9pZCBtdy5ub3RpZnkoZ2V0TWVzc2FnZSgnZXJyTm9JdGVtUHJvdmlkZWQnKSwge1xuXHRcdFx0XHRcdFx0XHR0YWc6ICdSUkQnLFxuXHRcdFx0XHRcdFx0XHR0eXBlOiAnZXJyb3InLFxuXHRcdFx0XHRcdFx0fSk7XG5cblx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRsZXQgY29udDogYm9vbGVhbiA9IHRydWU7XG5cdFx0XHRcdFx0aWYgKCFycmRSZWFzb24gJiYgIXJyZE90aGVyUmVhc29ucykge1xuXHRcdFx0XHRcdFx0Y29udCA9IGNvbmZpcm0oZ2V0TWVzc2FnZSgnd2Fybk5vUmVhc29uUHJvdmlkZWQnKSk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0aWYgKGNvbnQpIHtcblx0XHRcdFx0XHRcdHZvaWQgc3VibWl0KGlkcywgdG9IaWRlLmpvaW4oJ+OAgScpLCBycmRSZWFzb24gPz8gJycsIHJyZE90aGVyUmVhc29ucyA/PyAnJyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9LFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0dGV4dDogZ2V0TWVzc2FnZSgnZGlhbG9nQnV0dG9uQ2FuY2VsJyksXG5cdFx0XHRcdGNsaWNrKCk6IHZvaWQge1xuXHRcdFx0XHRcdCQodGhpcykuZGlhbG9nKCdjbG9zZScpO1xuXHRcdFx0XHR9LFxuXHRcdFx0fSxcblx0XHRdLFxuXHR9KTtcbn07XG5cbmV4cG9ydCB7c2hvd0RpYWxvZ307XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLGVBQXVCQyxHQUFHQyxPQUFPQyxJQUFJLFlBQVk7QUFFdkQsSUFBTUMsdUJBQWdDSCxHQUFHQyxPQUFPQyxJQUFJLFVBQVUsTUFBTTtBQUNwRSxJQUFNRSxlQUF3QkosR0FBR0MsT0FBT0MsSUFBSSw0QkFBNEIsTUFBTTs7QUNGN0UsSUFBQUcsVUFBVztBQUNYLElBQUFDLFVBQVc7O0FDQVosSUFBQUMsb0JBQWtCQyxRQUFBQyxRQUFBLGtCQUFBLEdBQUEsQ0FBQTs7QUNGbEIsSUFBTUMsa0JBQWtCQSxNQUFNO0FBQzdCLFFBQU07SUFBQ0M7RUFBSyxJQUFJQztBQUNoQixTQUFPO0lBQ05DLGFBQWFGLE1BQ1osMkNBQ0EseUNBQ0Q7SUFDQUcsdUJBQXVCSCxNQUFNLGdCQUFnQixjQUFjO0lBQzNESSxtQkFBbUJKLE1BQU0sZ0JBQWdCLGNBQWM7SUFDdkRLLHNCQUFzQkwsTUFBTSxxQkFBcUIsbUJBQW1CO0lBQ3BFTSxXQUFXTixNQUFNLFdBQVcsU0FBUztJQUNyQ08sYUFBYVAsTUFBTSxRQUFRLE1BQU07SUFDakNRLFNBQVNSLE1BQU0sV0FBVyxTQUFTO0lBQ25DUyxjQUFjVCxNQUFNLGVBQWUsYUFBYTtJQUNoRFUsYUFBYVYsTUFBTSxRQUFRLE1BQU07SUFDakNXLFlBQVlYLE1BQU0sT0FBTyxLQUFLO0lBQzlCWSxlQUFlWixNQUFNLHFCQUFxQixtQkFBbUI7SUFDN0RhLGVBQWViLE1BQU0scUJBQXFCLG1CQUFtQjtJ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QU1FIiwgIm13IiwgImNvbmZpZyIsICJnZXQiLCAiSVNfV0dfSElTVE9SWV9BQ1RJT04iLCAiSVNfV0dfTE9HX05TIiwgInJyZFBhZ2UiLCAidmVyc2lvbiIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJfX3RvRVNNIiwgInJlcXVpcmUiLCAiZ2V0STE4bk1lc3NhZ2VzIiwgIndnVUxTIiwgIndpbmRvdyIsICJlZGl0U3VtbWFyeSIsICJlcnJOb1JldmlzaW9uUHJvdmlkZWQiLCAiZXJyTm9JdGVtUHJvdmlkZWQiLCAid2Fybk5vUmVhc29uUHJvdmlkZWQiLCAiaGlkZUl0ZW1zIiwgImhpZGVDb250ZW50IiwgImhpZGVMb2ciLCAiaGlkZVVzZXJuYW1lIiwgImhpZGVTdW1tYXJ5IiwgImhpZGVSZWFzb24iLCAiaGlkZVJlYXNvblJEMSIsICJoaWRlUmVhc29uUkQyIiwgImhpZGVSZWFzb25SRDMiLCAiaGlkZVJlYXNvblJENCIsICJoaWRlUmVhc29uUkQ1IiwgImhpZGVSZWFzb25PdGhlciIsICJvdGhlclJlYXNvbnMiLCAiZGlhbG9nVGl0bGUiLCAiZGlhbG9nQnV0dG9uU3VibWl0IiwgImRpYWxvZ0J1dHRvbkNhbmNlbCIsICJyZXBvcnRCdXR0b25UaXRsZSIsICJyZXBvcnRCdXR0b25UZXh0IiwgInJlcG9ydEJ1dHRvbkxvZ1RleHQiLCAiaTE4bk1lc3NhZ2VzIiwgImdldE1lc3NhZ2UiLCAia2V5IiwgIlJlcG9ydEJ1dHRvbiIsICJvbkNsaWNrIiwgImRlZmF1bHQiLCAiY3JlYXRlRWxlbWVudCIsICJjbGFzc05hbWUiLCAibmFtZSIsICJ0aXRsZSIsICJSZXBvcnRCdXR0b25fZGVmYXVsdCIsICJpbXBvcnRfZXh0X2dhZGdldDQiLCAiY2hlY2tib3hlcyIsICJvdGhlcnMiLCAidXBkYXRlQ29uZmlnIiwgIl9kb2N1bWVudCRxdWVyeVNlbGVjdCIsICJfZG9jdW1lbnQkcXVlcnlTZWxlY3QyIiwgIl9kb2N1bWVudCRxdWVyeVNlbGVjdDMiLCAiY2hlY2tCb3hlcyIsICJkb2N1bWVudCIsICJxdWVyeVNlbGVjdG9yIiwgImNoZWNrZWQiLCAicnJkSGlkZUNvbnRlbnQiLCAicnJkSGlkZVVzZXJuYW1lIiwgInJyZEhpZGVTdW1tYXJ5IiwgInJlYXNvbklucHV0IiwgIm90aGVyUmVhc29uc0lucHV0IiwgInJyZFJlYXNvbiIsICJ2YWx1ZSIsICJycmRPdGhlclJlYXNvbnMiLCAiaW1wb3J0X2V4dF9nYWRnZXQyIiwgIkRpYWxvZ0lubmVyIiwgImlkIiwgInR5cGUiLCAiaHRtbEZvciIsICJyb3dzIiwgIkRpYWxvZ0lubmVyX2RlZmF1bHQiLCAibG9hZElkcyIsICIkYm9keSIsICJpZHMiLCAiYm94ZXMiLCAiZmluZCIsICJfaXRlcmF0b3IyIiwgIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwgIl9zdGVwMiIsICJzIiwgIm4iLCAiZG9uZSIsICJib3giLCAiaWRSZWdleCIsICJpZEFycmF5IiwgImV4ZWMiLCAibGVuZ3RoIiwgImVyciIsICJlIiwgImYiLCAiaW1wb3J0X2V4dF9nYWRnZXQzIiwgImFwaSIsICJpbml0TXdBcGkiLCAiY29uY2F0IiwgInN1Ym1pdCIsICJfcmVmIiwgIl9hc3luY1RvR2VuZXJhdG9yIiwgIl9pZHMiLCAidG9IaWRlIiwgInJlYXNvbiIsICJTZXQiLCAicnJkQXJyIiwgIl9pdGVyYXRvcjMiLCAiZW50cmllcyIsICJfc3RlcDMiLCAiaW5kZXgiLCAiX3Jlc3BvbnNlJHF1ZXJ5IiwgInF1ZXJ5UGFyYW1zIiwgImFjdGlvbiIsICJmb3JtYXQiLCAiZm9ybWF0dmVyc2lvbiIsICJ0aXRsZXMiLCAicHJvcCIsICJydnByb3AiLCAicmVzcG9uc2UiLCAiY29udGVudCIsICJwYWdlcyIsICJyZXZpc2lvbnMiLCAibm90aWZ5IiwgInRhZyIsICJfcmVzdWx0JGVkaXQiLCAiX3Jlc3VsdCRlcnJvciIsICJlZGl0UGFyYW1zIiwgInRleHQiLCAiam9pbiIsICJzdW1tYXJ5IiwgInJlc3VsdCIsICJwb3N0V2l0aEVkaXRUb2tlbiIsICJsb2NhdGlvbiIsICJyZXBsYWNlIiwgInV0aWwiLCAiZ2V0VXJsIiwgImNvZGUiLCAiX3giLCAiX3gyIiwgIl94MyIsICJfeDQiLCAiYXBwbHkiLCAiYXJndW1lbnRzIiwgIiRkaWFsb2ciLCAic2hvd0RpYWxvZyIsICJkaWFsb2ciLCAiaHRtbCIsICJfaSIsICJfT2JqZWN0JGVudHJpZXMiLCAiT2JqZWN0IiwgInZhbCIsICJfaTIiLCAiX09iamVjdCRlbnRyaWVzMiIsICIkIiwgIm1pbldpZHRoIiwgIm1pbkhlaWdodCIsICJjbG9zZSIsICJidXR0b25zIiwgImNsaWNrIiwgImNvbnQiLCAiY29uZmlybSIsICJfcnJkT3RoZXJSZWFzb25zIiwgImdldEJvZHkiLCAidGhlbiIsICJycmQiLCAiX2l0ZXJhdG9yNCIsICJfc3RlcDQiLCAiZWxlbWVudCIsICJhZnRlciJdCn0K

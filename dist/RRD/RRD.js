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
  className: ["reportrrd", "cdx-button", "cdx-button--weight-primary"],
  name: "reportrrd",
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1JSRC9tb2R1bGVzL2NvbnN0YW50LnRzIiwgInNyYy9SUkQvb3B0aW9ucy5qc29uIiwgInNyYy9SUkQvY29tcG9uZW50cy9SZXBvcnRCdXR0b24udHN4IiwgInNyYy9SUkQvbW9kdWxlcy9pMThuLnRzIiwgInNyYy9SUkQvUlJELnRzIiwgInNyYy9SUkQvbW9kdWxlcy9ycmRDb25maWcudHMiLCAic3JjL1JSRC9jb21wb25lbnRzL0RpYWxvZ0lubmVyLnRzeCIsICJzcmMvUlJEL21vZHVsZXMvbG9hZElkcy50cyIsICJzcmMvUlJEL21vZHVsZXMvYXBpLnRzIiwgInNyYy9SUkQvbW9kdWxlcy9zdWJtaXQudHMiLCAic3JjL1JSRC9tb2R1bGVzL3Nob3dEaWFsb2cudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IFdHX1BBR0VfTkFNRTogc3RyaW5nID0gbXcuY29uZmlnLmdldCgnd2dQYWdlTmFtZScpO1xuXG5jb25zdCBJU19XR19ISVNUT1JZX0FDVElPTjogYm9vbGVhbiA9IG13LmNvbmZpZy5nZXQoJ3dnQWN0aW9uJykgPT09ICdoaXN0b3J5JztcbmNvbnN0IElTX1dHX0xPR19OUzogYm9vbGVhbiA9IG13LmNvbmZpZy5nZXQoJ3dnQ2Fub25pY2FsU3BlY2lhbFBhZ2VOYW1lJykgPT09ICdMb2cnO1xuXG5leHBvcnQge0lTX1dHX0hJU1RPUllfQUNUSU9OLCBJU19XR19MT0dfTlMsIFdHX1BBR0VfTkFNRX07XG4iLCAie1xuXHRcInJyZFBhZ2VcIjogXCJRaXV3ZW5fdGFsazrniYjmnKzliKDpmaTmj5DmiqVcIixcblx0XCJ2ZXJzaW9uXCI6IFwiMi4wXCJcbn1cbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge0lTX1dHX0xPR19OU30gZnJvbSAnLi4vbW9kdWxlcy9jb25zdGFudCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAnZXh0LmdhZGdldC5SZWFjdCc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4uL21vZHVsZXMvaTE4bic7XG5cbmludGVyZmFjZSBQcm9wcyB7XG5cdG9uQ2xpY2soKTogdm9pZDtcbn1cblxuY29uc3QgUmVwb3J0QnV0dG9uID0gKHtvbkNsaWNrfTogUHJvcHMpID0+IChcblx0PGJ1dHRvblxuXHRcdGNsYXNzTmFtZT17WydyZXBvcnRycmQnLCAnY2R4LWJ1dHRvbicsICdjZHgtYnV0dG9uLS13ZWlnaHQtcHJpbWFyeSddfVxuXHRcdG5hbWU9eydyZXBvcnRycmQnfVxuXHRcdHRpdGxlPXtnZXRNZXNzYWdlKCdyZXBvcnRCdXR0b25UaXRsZScpICsgT1BUSU9OUy5ycmRQYWdlfVxuXHRcdG9uQ2xpY2s9e29uQ2xpY2t9XG5cdD5cblx0XHR7SVNfV0dfTE9HX05TID8gZ2V0TWVzc2FnZSgncmVwb3J0QnV0dG9uTG9nVGV4dCcpIDogZ2V0TWVzc2FnZSgncmVwb3J0QnV0dG9uVGV4dCcpfVxuXHQ8L2J1dHRvbj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IFJlcG9ydEJ1dHRvbjtcbiIsICJjb25zdCBnZXRJMThuTWVzc2FnZXMgPSAoKSA9PiB7XG5cdGNvbnN0IHt3Z1VMU30gPSB3aW5kb3c7XG5cdHJldHVybiB7XG5cdFx0ZWRpdFN1bW1hcnk6IHdnVUxTKFxuXHRcdFx0J1tbTWVkaWFXaWtpOkdhZGdldC1SUkQuanN85Y2K6Ieq5Yqo5o+Q5oqlXV3kv67orqLniYjmnKzliKDpmaQnLFxuXHRcdFx0J1tbTWVkaWFXaWtpOkdhZGdldC1SUkQuanN85Y2K6Ieq5YuV5o+Q5aCxXV3kv67oqILniYjmnKzliKrpmaQnXG5cdFx0KSxcblx0XHRlcnJOb1JldmlzaW9uUHJvdmlkZWQ6IHdnVUxTKCfmgqjmsqHmnInpgInmi6npnIDpmpDol4/nmoTniYjmnKzvvIEnLCAn5oKo5rKS5pyJ6YG45pOH6ZyA6Zqx6JeP55qE54mI5pys77yBJyksXG5cdFx0ZXJyTm9JdGVtUHJvdmlkZWQ6IHdnVUxTKCfmgqjmsqHmnInpgInmi6npnIDpmpDol4/nmoTpobnnm67vvIEnLCAn5oKo5rKS5pyJ6YG45pOH6ZyA6Zqx6JeP55qE6aCF55uu77yBJyksXG5cdFx0d2Fybk5vUmVhc29uUHJvdmlkZWQ6IHdnVUxTKCfmgqjmsqHmnInovpPlhaXku7vkvZXnkIbnlLHvvIHnoa7lrpropoHnu6fnu63lkJfvvJ8nLCAn5oKo5rKS5pyJ6Ly45YWl5Lu75L2V55CG55Sx77yB56K65a6a6KaB57m857qM5ZeO77yfJyksXG5cdFx0aGlkZUl0ZW1zOiB3Z1VMUygn6ZyA6ZqQ6JeP55qE6aG555uu77yaJywgJ+mcgOmaseiXj+eahOmgheebru+8micpLFxuXHRcdGhpZGVDb250ZW50OiB3Z1VMUygn57yW6L6R5YaF5a65JywgJ+e3qOi8r+WFp+WuuScpLFxuXHRcdGhpZGVMb2c6IHdnVUxTKCfml6Xlv5fnm67moIfkuI7lj4LmlbAnLCAn5pel6KqM55uu5qiZ6IiH5Y+D5pW4JyksXG5cdFx0aGlkZVVzZXJuYW1lOiB3Z1VMUygn57yW6L6R6ICF55So5oi35ZCNL0lQ5Zyw5Z2AJywgJ+e3qOi8r+iAheeUqOaItuWQjS9JUOS9jeWdgCcpLFxuXHRcdGhpZGVTdW1tYXJ5OiB3Z1VMUygn57yW6L6R5pGY6KaBJywgJ+e3qOi8r+aRmOimgScpLFxuXHRcdGhpZGVSZWFzb246IHdnVUxTKCfnkIbmja7vvJonLCAn55CG5pOa77yaJyksXG5cdFx0aGlkZVJlYXNvblJEMTogd2dVTFMoJ1JEMe+8muadoeebruS4reaYjuaYvuS+teeKr+iRl+S9nOadg+eahOWGheWuuScsICdSRDHvvJrmop3nm67kuK3mmI7poa/kvrXniq/okZfkvZzmrIrnmoTlhaflrrknKSxcblx0XHRoaWRlUmVhc29uUkQyOiB3Z1VMUygnUkQy77ya5Lil6YeN5L6u6L6x44CB6LSs5L2O5oiW5pS75Ye75oCn5paH5pysJywgJ1JEMu+8muWatOmHjeS+rui+seOAgeiytuS9juaIluaUu+aTiuaAp+aWh+acrCcpLFxuXHRcdGhpZGVSZWFzb25SRDM6IHdnVUxTKCdSRDPvvJrnuq/nsrnmibDkubHmgKflhoXlrrknLCAn57SU57K55pO+5LqC5oCn5YWn5a65JyksXG5cdFx0aGlkZVJlYXNvblJENDogd2dVTFMoJ1JENO+8muaYjuaYvui/neWPjeazleW+i+azleinhOaIlui/neiDjOWFrOW6j+iJr+S/l+eahOWGheWuuScsICdSRDTvvJrmmI7poa/pgZXlj43ms5Xlvovms5Xopo/miJbpgZXog4zlhazluo/oia/kv5fnmoTlhaflrrknKSxcblx0XHRoaWRlUmVhc29uUkQ1OiB3Z1VMUygnUkQ177ya5YW25LuW5LiN5a6c5YWs5byA55qE54mI5pys5YaF5a65JywgJ1JENe+8muWFtuS7luS4jeWunOWFrOmWi+eahOeJiOacrOWFp+WuuScpLFxuXHRcdGhpZGVSZWFzb25PdGhlcjogd2dVTFMoJ+S7heS9v+eUqOS4i+aWueeahOmZhOWKoOeQhueUsScsICflg4Xkvb/nlKjkuIvmlrnnmoTpmYTliqDnkIbnlLEnKSxcblx0XHRvdGhlclJlYXNvbnM6IHdnVUxTKCfpmYTliqDnkIbnlLHvvIjlj6/pgInvvIzkuI3nlKjnrb7lkI3vvIknLCAn6ZmE5Yqg55CG55Sx77yI5Y+v6YG477yM5LiN55So57C95ZCN77yJJyksXG5cdFx0ZGlhbG9nVGl0bGU6IHdnVUxTKCfmj5DmiqXkv67orqLniYjmnKzliKDpmaQnLCAn5o+Q5aCx5L+u6KiC54mI5pys5Yiq6ZmkJyksXG5cdFx0ZGlhbG9nQnV0dG9uU3VibWl0OiB3Z1VMUygn5o+Q5oqlJywgJ+aPkOWgsScpLFxuXHRcdGRpYWxvZ0J1dHRvbkNhbmNlbDogd2dVTFMoJ+WPlua2iCcsICflj5bmtognKSxcblx0XHRyZXBvcnRCdXR0b25UaXRsZTogd2dVTFMoJ+WwhumAieS4reeahOeJiOacrOaPkOaKpeWIsCcsICflsIfpgbjkuK3nmoTniYjmnKzmj5DloLHliLAnKSxcblx0XHRyZXBvcnRCdXR0b25UZXh0OiB3Z1VMUygn6K+35rGC5Yig6Zmk6KKr6YCJ54mI5pysJywgJ+iri+axguWIqumZpOiiq+mBuOeJiOacrCcpLFxuXHRcdHJlcG9ydEJ1dHRvbkxvZ1RleHQ6IHdnVUxTKCfor7fmsYLliKDpmaTooqvpgInml6Xlv5cnLCAn6KuL5rGC5Yiq6Zmk6KKr6YG45pel6KqMJyksXG5cdH07XG59O1xuXG5jb25zdCBpMThuTWVzc2FnZXMgPSBnZXRJMThuTWVzc2FnZXMoKTtcblxuY29uc3QgZ2V0TWVzc2FnZTogR2V0TWVzc2FnZXM8dHlwZW9mIGkxOG5NZXNzYWdlcz4gPSAoa2V5KSA9PiB7XG5cdHJldHVybiBpMThuTWVzc2FnZXNba2V5XSB8fCBrZXk7XG59O1xuXG5leHBvcnQge2dldE1lc3NhZ2V9O1xuIiwgImltcG9ydCB7SVNfV0dfSElTVE9SWV9BQ1RJT04sIElTX1dHX0xPR19OU30gZnJvbSAnLi9tb2R1bGVzL2NvbnN0YW50JztcbmltcG9ydCBSZXBvcnRCdXR0b24gZnJvbSAnLi9jb21wb25lbnRzL1JlcG9ydEJ1dHRvbic7XG5pbXBvcnQge2dldEJvZHl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5pbXBvcnQge3Nob3dEaWFsb2d9IGZyb20gJy4vbW9kdWxlcy9zaG93RGlhbG9nJztcblxuaWYgKElTX1dHX0hJU1RPUllfQUNUSU9OIHx8IElTX1dHX0xPR19OUykge1xuXHR2b2lkIGdldEJvZHkoKS50aGVuKGZ1bmN0aW9uIHJyZCgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkIHtcblx0XHQvLyBGb3IgYWN0aW9uPWhpc3RvcnkgYW5kIFNwZWNpYWw6TG9nXG5cdFx0Zm9yIChjb25zdCBlbGVtZW50IG9mICRib2R5LmZpbmQoXG5cdFx0XHRbXG5cdFx0XHRcdCcuaGlzdG9yeXN1Ym1pdC5tdy1oaXN0b3J5LWNvbXBhcmVzZWxlY3RlZHZlcnNpb25zLWJ1dHRvbicsXG5cdFx0XHRcdCcuZWRpdGNoYW5nZXRhZ3MtbG9nLXN1Ym1pdC5tdy1sb2ctZWRpdGNoYW5nZXRhZ3MtYnV0dG9uJyxcblx0XHRcdF0uam9pbignLCcpXG5cdFx0KSkge1xuXHRcdFx0ZWxlbWVudC5hZnRlcihcblx0XHRcdFx0UmVwb3J0QnV0dG9uKHtcblx0XHRcdFx0XHRvbkNsaWNrOiAoKTogdm9pZCA9PiB7XG5cdFx0XHRcdFx0XHRzaG93RGlhbG9nKCRib2R5KTtcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHR9KVxuXHRcdFx0KTtcblx0XHR9XG5cdH0pO1xufVxuIiwgImltcG9ydCB0eXBlIHtScmRDb25maWd9IGZyb20gJy4vdHlwZXMnO1xuXG5jb25zdCBjb25maWc6IFJyZENvbmZpZyA9IHtcblx0Y2hlY2tib3hlczoge30sXG5cdG90aGVyczoge30sXG59O1xuXG5jb25zdCB1cGRhdGVDb25maWcgPSAoKTogdm9pZCA9PiB7XG5cdGNvbnN0IGNoZWNrQm94ZXM6IFJyZENvbmZpZ1snY2hlY2tib3hlcyddID0ge307XG5cblx0aWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTElucHV0RWxlbWVudD4oJyNycmRfX2hpZGUtY29udGVudCcpPy5jaGVja2VkKSB7XG5cdFx0Y2hlY2tCb3hlcy5ycmRIaWRlQ29udGVudCA9IHRydWU7XG5cdH1cblx0aWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTElucHV0RWxlbWVudD4oJyNycmRfX2hpZGUtdXNlcm5hbWUnKT8uY2hlY2tlZCkge1xuXHRcdGNoZWNrQm94ZXMucnJkSGlkZVVzZXJuYW1lID0gdHJ1ZTtcblx0fVxuXHRpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MSW5wdXRFbGVtZW50PignI3JyZF9faGlkZS1zdW1tYXJ5Jyk/LmNoZWNrZWQpIHtcblx0XHRjaGVja0JveGVzLnJyZEhpZGVTdW1tYXJ5ID0gdHJ1ZTtcblx0fVxuXG5cdGNvbmZpZy5jaGVja2JveGVzID0gY2hlY2tCb3hlcztcblxuXHRjb25zdCBvdGhlcnM6IFJyZENvbmZpZ1snb3RoZXJzJ10gPSB7fTtcblxuXHRjb25zdCByZWFzb25JbnB1dDogSFRNTElucHV0RWxlbWVudCB8IG51bGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxJbnB1dEVsZW1lbnQ+KCcjcnJkX19yZWFzb24nKTtcblx0Y29uc3Qgb3RoZXJSZWFzb25zSW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQgfCBudWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MSW5wdXRFbGVtZW50PignI3JyZF9fb3RoZXItcmVhc29ucycpO1xuXHRpZiAocmVhc29uSW5wdXQpIHtcblx0XHRvdGhlcnMucnJkUmVhc29uID0gcmVhc29uSW5wdXQudmFsdWU7XG5cdH1cblx0aWYgKG90aGVyUmVhc29uc0lucHV0KSB7XG5cdFx0b3RoZXJzLnJyZE90aGVyUmVhc29ucyA9IG90aGVyUmVhc29uc0lucHV0LnZhbHVlO1xuXHR9XG5cblx0Y29uZmlnLm90aGVycyA9IG90aGVycztcbn07XG5cbmV4cG9ydCB7Y29uZmlnLCB1cGRhdGVDb25maWd9O1xuIiwgImltcG9ydCAnLi9EaWFsb2dJbm5lci5sZXNzJztcbmltcG9ydCB7SVNfV0dfTE9HX05TfSBmcm9tICcuLi9tb2R1bGVzL2NvbnN0YW50JztcbmltcG9ydCBSZWFjdCBmcm9tICdleHQuZ2FkZ2V0LlJlYWN0JztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi4vbW9kdWxlcy9pMThuJztcblxuY29uc3QgRGlhbG9nSW5uZXIgPSAoKSA9PiAoXG5cdDxkaXYgaWQ9XCJycmRfX2NvbmZpZ1wiPlxuXHRcdHtnZXRNZXNzYWdlKCdoaWRlSXRlbXMnKX1cblx0XHQ8YnIgLz5cblx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJyZF9fY29udGVudC13cmFwcGVyXCI+XG5cdFx0XHQ8aW5wdXQgbmFtZT1cImNvbnRlbnRcIiBpZD1cInJyZF9faGlkZS1jb250ZW50XCIgdHlwZT1cImNoZWNrYm94XCIgdmFsdWU9XCJjb250ZW50XCIgY2hlY2tlZCAvPlxuXHRcdFx0PGxhYmVsIGh0bWxGb3I9XCJycmRfX2hpZGUtY29udGVudFwiIGlkPVwicnJkLWNvbnRlbnRcIj5cblx0XHRcdFx0e0lTX1dHX0xPR19OUyA/IGdldE1lc3NhZ2UoJ2hpZGVMb2cnKSA6IGdldE1lc3NhZ2UoJ2hpZGVDb250ZW50Jyl9XG5cdFx0XHQ8L2xhYmVsPlxuXHRcdDwvZGl2PlxuXHRcdDxkaXYgY2xhc3NOYW1lPVwicnJkX19jb250ZW50LXdyYXBwZXJcIj5cblx0XHRcdDxpbnB1dCBuYW1lPVwidXNlcm5hbWVcIiBpZD1cInJyZF9faGlkZS11c2VybmFtZVwiIHR5cGU9XCJjaGVja2JveFwiIHZhbHVlPVwidXNlcm5hbWVcIiAvPlxuXHRcdFx0PGxhYmVsIGh0bWxGb3I9XCJycmRfX2hpZGUtdXNlcm5hbWVcIiBpZD1cInJyZC11c2VybmFtZVwiPlxuXHRcdFx0XHR7Z2V0TWVzc2FnZSgnaGlkZVVzZXJuYW1lJyl9XG5cdFx0XHQ8L2xhYmVsPlxuXHRcdDwvZGl2PlxuXHRcdDxkaXYgY2xhc3NOYW1lPVwicnJkX19jb250ZW50LXdyYXBwZXJcIj5cblx0XHRcdDxpbnB1dCBuYW1lPVwic3VtbWFyeVwiIGlkPVwicnJkX19oaWRlLXN1bW1hcnlcIiB0eXBlPVwiY2hlY2tib3hcIiB2YWx1ZT1cInN1bW1hcnlcIiAvPlxuXHRcdFx0PGxhYmVsIGh0bWxGb3I9XCJycmRfX2hpZGUtc3VtbWFyeVwiIGlkPVwicnJkLXN1bW1hcnlcIj5cblx0XHRcdFx0e2dldE1lc3NhZ2UoJ2hpZGVTdW1tYXJ5Jyl9XG5cdFx0XHQ8L2xhYmVsPlxuXHRcdDwvZGl2PlxuXHRcdDxiciAvPlxuXHRcdDxiciAvPlxuXHRcdHtnZXRNZXNzYWdlKCdoaWRlUmVhc29uJyl9XG5cdFx0PGJyIC8+XG5cdFx0PHNlbGVjdCBuYW1lPVwicnJkX19yZWFzb25cIiBpZD1cInJyZF9fcmVhc29uXCI+XG5cdFx0XHQ8b3B0aW9uIHZhbHVlPXtnZXRNZXNzYWdlKCdoaWRlUmVhc29uUkQxJyl9PntnZXRNZXNzYWdlKCdoaWRlUmVhc29uUkQxJyl9PC9vcHRpb24+XG5cdFx0XHQ8b3B0aW9uIHZhbHVlPXtnZXRNZXNzYWdlKCdoaWRlUmVhc29uUkQyJyl9PntnZXRNZXNzYWdlKCdoaWRlUmVhc29uUkQyJyl9PC9vcHRpb24+XG5cdFx0XHQ8b3B0aW9uIHZhbHVlPXtnZXRNZXNzYWdlKCdoaWRlUmVhc29uUkQzJyl9PntnZXRNZXNzYWdlKCdoaWRlUmVhc29uUkQzJyl9PC9vcHRpb24+XG5cdFx0XHQ8b3B0aW9uIHZhbHVlPXtnZXRNZXNzYWdlKCdoaWRlUmVhc29uUkQ0Jyl9PntnZXRNZXNzYWdlKCdoaWRlUmVhc29uUkQ0Jyl9PC9vcHRpb24+XG5cdFx0XHQ8b3B0aW9uIHZhbHVlPXtnZXRNZXNzYWdlKCdoaWRlUmVhc29uUkQ1Jyl9PntnZXRNZXNzYWdlKCdoaWRlUmVhc29uUkQ1Jyl9PC9vcHRpb24+XG5cdFx0XHQ8b3B0aW9uIHZhbHVlPVwiXCI+e2dldE1lc3NhZ2UoJ2hpZGVSZWFzb25PdGhlcicpfTwvb3B0aW9uPlxuXHRcdDwvc2VsZWN0PlxuXHRcdDxiciAvPlxuXHRcdDxiciAvPlxuXHRcdHtnZXRNZXNzYWdlKCdvdGhlclJlYXNvbnMnKX1cblx0XHQ8YnIgLz5cblx0XHQ8dGV4dGFyZWEgbmFtZT1cIm90aGVyUmVhc29uc1wiIGlkPVwicnJkX19vdGhlci1yZWFzb25zXCIgcm93cz17NH0+PC90ZXh0YXJlYT5cblx0PC9kaXY+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBEaWFsb2dJbm5lcjtcbiIsICJjb25zdCBsb2FkSWRzID0gKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHN0cmluZ1tdID0+IHtcblx0Y29uc3QgaWRzOiBzdHJpbmdbXSA9IFtdO1xuXG5cdGNvbnN0IGJveGVzOiBKUXVlcnk8SFRNTElucHV0RWxlbWVudD4gPSAkYm9keS5maW5kKCdpbnB1dCcpO1xuXHRmb3IgKGNvbnN0IGJveCBvZiBib3hlcykge1xuXHRcdGNvbnN0IHtjaGVja2VkLCBuYW1lLCB0eXBlfSA9IGJveDtcblxuXHRcdGlmICh0eXBlICE9PSAnY2hlY2tib3gnIHx8ICFjaGVja2VkKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRjb25zdCBpZFJlZ2V4OiBSZWdFeHAgPSAvaWRzXFxbKFxcZCspXS87XG5cdFx0Y29uc3QgaWRBcnJheTogUmVnRXhwRXhlY0FycmF5IHwgbnVsbCA9IGlkUmVnZXguZXhlYyhuYW1lKTtcblx0XHRpZiAoaWRBcnJheT8uWzFdID09PSB1bmRlZmluZWQpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdFssIGlkc1tpZHMubGVuZ3RoXV0gPSBpZEFycmF5O1xuXHR9XG5cblx0cmV0dXJuIGlkcztcbn07XG5cbmV4cG9ydCB7bG9hZElkc307XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtpbml0TXdBcGl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmNvbnN0IGFwaTogbXcuQXBpID0gaW5pdE13QXBpKGBSUkQvJHtPUFRJT05TLnZlcnNpb259YCk7XG5cbmV4cG9ydCB7YXBpfTtcbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge1dHX1BBR0VfTkFNRX0gZnJvbSAnLi9jb25zdGFudCc7XG5pbXBvcnQge2FwaX0gZnJvbSAnLi9hcGknO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL2kxOG4nO1xuXG5jb25zdCBzdWJtaXQgPSBhc3luYyAoX2lkczogc3RyaW5nW10sIHRvSGlkZTogc3RyaW5nLCByZWFzb246IHN0cmluZywgb3RoZXJSZWFzb25zOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0Y29uc3QgaWRzOiBzdHJpbmdbXSA9IFsuLi5uZXcgU2V0KF9pZHMpXTtcblxuXHRjb25zdCBycmRBcnI6IHN0cmluZ1tdID0gW1xuXHRcdCd7e1JldmRlbCcsXG5cdFx0J3xzdGF0dXMgPSAnLFxuXHRcdGB8YXJ0aWNsZSA9ICR7V0dfUEFHRV9OQU1FfWAsXG5cdFx0YHxzZXQgPSAke3RvSGlkZX1gLFxuXHRcdGB8cmVhc29uID0gJHtyZWFzb259JHtvdGhlclJlYXNvbnN9YCxcblx0XTtcblxuXHRmb3IgKGNvbnN0IFtpbmRleCwgaWRdIG9mIGlkcy5lbnRyaWVzKCkpIHtcblx0XHRycmRBcnJbcnJkQXJyLmxlbmd0aF0gPSBgfGlkJHtpbmRleCArIDF9ID0gJHtpZH1gO1xuXHR9XG5cdHJyZEFycltycmRBcnIubGVuZ3RoXSA9ICd9fVxcbi0tfn4nLmNvbmNhdCgnfn4nKTtcblxuXHR0cnkge1xuXHRcdGNvbnN0IHF1ZXJ5UGFyYW1zOiBBcGlRdWVyeVJldmlzaW9uc1BhcmFtcyA9IHtcblx0XHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdFx0dGl0bGVzOiBPUFRJT05TLnJyZFBhZ2UsXG5cdFx0XHRwcm9wOiAncmV2aXNpb25zJyxcblx0XHRcdHJ2cHJvcDogJ2NvbnRlbnQnLFxuXHRcdH07XG5cblx0XHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGFwaS5nZXQocXVlcnlQYXJhbXMpO1xuXG5cdFx0bGV0IGNvbnRlbnQ6IHN0cmluZyB8IHVuZGVmaW5lZDtcblx0XHRpZiAocmVzcG9uc2VbJ3F1ZXJ5J10/LnBhZ2VzKSB7XG5cdFx0XHRjb250ZW50ID0gcmVzcG9uc2VbJ3F1ZXJ5J10ucGFnZXNbMF0ucmV2aXNpb25zWzBdLmNvbnRlbnQgYXMgc3RyaW5nO1xuXHRcdH1cblxuXHRcdGlmIChjb250ZW50ID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHZvaWQgbXcubm90aWZ5KGBFcnJvciB3aGVuIGxvYWRpbmcgcGFnZSAke09QVElPTlMucnJkUGFnZX06IG1pc3NpbmdgLCB7XG5cdFx0XHRcdHRhZzogJ1JSRCcsXG5cdFx0XHRcdHR5cGU6ICdlcnJvcicsXG5cdFx0XHR9KTtcblxuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHRyeSB7XG5cdFx0XHRjb25zdCBlZGl0UGFyYW1zOiBBcGlFZGl0UGFnZVBhcmFtcyA9IHtcblx0XHRcdFx0YWN0aW9uOiAnZWRpdCcsXG5cdFx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0XHRcdHRpdGxlOiBPUFRJT05TLnJyZFBhZ2UsXG5cdFx0XHRcdHRleHQ6IGAke2NvbnRlbnR9XFxuXFxuJHtycmRBcnIuam9pbignXFxuJyl9YCxcblx0XHRcdFx0c3VtbWFyeTogZ2V0TWVzc2FnZSgnZWRpdFN1bW1hcnknKSxcblx0XHRcdH07XG5cblx0XHRcdGNvbnN0IHJlc3VsdCA9IGF3YWl0IGFwaS5wb3N0V2l0aEVkaXRUb2tlbihlZGl0UGFyYW1zKTtcblxuXHRcdFx0aWYgKHJlc3VsdFsnZWRpdCddPy5yZXN1bHQgPT09ICdTdWNjZXNzJykge1xuXHRcdFx0XHRsb2NhdGlvbi5yZXBsYWNlKG13LnV0aWwuZ2V0VXJsKE9QVElPTlMucnJkUGFnZSkpO1xuXHRcdFx0fSBlbHNlIGlmIChyZXN1bHRbJ2Vycm9yJ10/LmNvZGUpIHtcblx0XHRcdFx0dm9pZCBtdy5ub3RpZnkoYFNvbWUgZXJyb3JzIG9jY3VyZWQgd2hpbGUgc2F2aW5nIHBhZ2U6ICR7cmVzdWx0WydlcnJvciddLmNvZGV9YCwge1xuXHRcdFx0XHRcdHRhZzogJ1JSRCcsXG5cdFx0XHRcdFx0dHlwZTogJ2Vycm9yJyxcblx0XHRcdFx0fSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR2b2lkIG13Lm5vdGlmeSgnU29tZSBlcnJvcnMgb2NjdXJlZCB3aGlsZSBzYXZpbmcgcGFnZTogdW5rbm93bicsIHtcblx0XHRcdFx0XHR0YWc6ICdSUkQnLFxuXHRcdFx0XHRcdHR5cGU6ICdlcnJvcicsXG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdH0gY2F0Y2gge1xuXHRcdFx0dm9pZCBtdy5ub3RpZnkoYEVycm9yIHdoZW4gZWRpdGluZyBwYWdlICR7T1BUSU9OUy5ycmRQYWdlfWAsIHt0YWc6ICdSUkQnLCB0eXBlOiAnZXJyb3InfSk7XG5cdFx0fVxuXHR9IGNhdGNoIHtcblx0XHR2b2lkIG13Lm5vdGlmeShgRXJyb3Igd2hlbiBsb2FkaW5nIHBhZ2UgJHtPUFRJT05TLnJyZFBhZ2V9YCwge3RhZzogJ1JSRCcsIHR5cGU6ICdlcnJvcid9KTtcblx0fVxufTtcblxuZXhwb3J0IHtzdWJtaXR9O1xuIiwgImltcG9ydCB7Y29uZmlnLCB1cGRhdGVDb25maWd9IGZyb20gJy4vcnJkQ29uZmlnJztcbmltcG9ydCBEaWFsb2dJbm5lciBmcm9tICcuLi9jb21wb25lbnRzL0RpYWxvZ0lubmVyJztcbmltcG9ydCB7SVNfV0dfTE9HX05TfSBmcm9tICcuL2NvbnN0YW50JztcbmltcG9ydCBSZWFjdCBmcm9tICdleHQuZ2FkZ2V0LlJlYWN0JztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9pMThuJztcbmltcG9ydCB7bG9hZElkc30gZnJvbSAnLi9sb2FkSWRzJztcbmltcG9ydCB7c3VibWl0fSBmcm9tICcuL3N1Ym1pdCc7XG5cbmxldCAkZGlhbG9nOiBKUXVlcnkgfCB1bmRlZmluZWQ7XG5cbmNvbnN0IHNob3dEaWFsb2cgPSAoJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KTogdm9pZCA9PiB7XG5cdGNvbnN0IGlkczogc3RyaW5nW10gPSBsb2FkSWRzKCRib2R5KTtcblx0aWYgKCFpZHMubGVuZ3RoKSB7XG5cdFx0dm9pZCBtdy5ub3RpZnkoZ2V0TWVzc2FnZSgnZXJyTm9SZXZpc2lvblByb3ZpZGVkJyksIHtcblx0XHRcdHRhZzogJ1JSRCcsXG5cdFx0XHR0eXBlOiAnZXJyb3InLFxuXHRcdH0pO1xuXG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgZGlhbG9nOiBSZWFjdC5SZWFjdEVsZW1lbnQgPSBEaWFsb2dJbm5lcigpO1xuXHRpZiAoJGRpYWxvZykge1xuXHRcdCRkaWFsb2cuaHRtbChkaWFsb2cpLmRpYWxvZygnb3BlbicpO1xuXG5cdFx0Zm9yIChjb25zdCBbaWQsIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhjb25maWcub3RoZXJzKSkge1xuXHRcdFx0JGJvZHkuZmluZChgIyR7aWR9YCkudmFsKHZhbHVlIGFzIHN0cmluZyk7XG5cdFx0fVxuXHRcdGZvciAoY29uc3QgW2lkLCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMoY29uZmlnLmNoZWNrYm94ZXMpKSB7XG5cdFx0XHRpZiAodmFsdWUgPT09IHRydWUpIHtcblx0XHRcdFx0JGJvZHkuZmluZChgIyR7aWR9YCkucHJvcCgnY2hlY2tlZCcsIHRydWUpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybjtcblx0fVxuXG5cdCRkaWFsb2cgPSAkKGRpYWxvZykuZGlhbG9nKHtcblx0XHR0aXRsZTogZ2V0TWVzc2FnZSgnZGlhbG9nVGl0bGUnKSxcblx0XHRtaW5XaWR0aDogNTE1LFxuXHRcdG1pbkhlaWdodDogMTUwLFxuXHRcdGNsb3NlOiB1cGRhdGVDb25maWcsXG5cdFx0YnV0dG9uczogW1xuXHRcdFx0e1xuXHRcdFx0XHR0ZXh0OiBnZXRNZXNzYWdlKCdkaWFsb2dCdXR0b25TdWJtaXQnKSxcblx0XHRcdFx0Y2xpY2soKTogdm9pZCB7XG5cdFx0XHRcdFx0JCh0aGlzKS5kaWFsb2coJ2Nsb3NlJyk7XG5cblx0XHRcdFx0XHRjb25zdCB7XG5cdFx0XHRcdFx0XHRjaGVja2JveGVzOiB7cnJkSGlkZUNvbnRlbnQsIHJyZEhpZGVVc2VybmFtZSwgcnJkSGlkZVN1bW1hcnl9LFxuXHRcdFx0XHRcdFx0b3RoZXJzOiB7cnJkUmVhc29ufSxcblx0XHRcdFx0XHR9ID0gY29uZmlnO1xuXG5cdFx0XHRcdFx0bGV0IHtycmRPdGhlclJlYXNvbnN9ID0gY29uZmlnLm90aGVycztcblx0XHRcdFx0XHRpZiAocnJkT3RoZXJSZWFzb25zICYmIHJyZFJlYXNvbikge1xuXHRcdFx0XHRcdFx0cnJkT3RoZXJSZWFzb25zID0gYO+8jCR7cnJkT3RoZXJSZWFzb25zfWA7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Y29uc3QgdG9IaWRlOiBzdHJpbmdbXSA9IFtdO1xuXHRcdFx0XHRcdGlmIChycmRIaWRlQ29udGVudCkge1xuXHRcdFx0XHRcdFx0dG9IaWRlW3RvSGlkZS5sZW5ndGhdID0gSVNfV0dfTE9HX05TID8gZ2V0TWVzc2FnZSgnaGlkZUxvZycpIDogZ2V0TWVzc2FnZSgnaGlkZUNvbnRlbnQnKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKHJyZEhpZGVVc2VybmFtZSkge1xuXHRcdFx0XHRcdFx0dG9IaWRlW3RvSGlkZS5sZW5ndGhdID0gZ2V0TWVzc2FnZSgnaGlkZVVzZXJuYW1lJyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmIChycmRIaWRlU3VtbWFyeSkge1xuXHRcdFx0XHRcdFx0dG9IaWRlW3RvSGlkZS5sZW5ndGhdID0gZ2V0TWVzc2FnZSgnaGlkZVN1bW1hcnknKTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRpZiAoIXRvSGlkZS5sZW5ndGgpIHtcblx0XHRcdFx0XHRcdHZvaWQgbXcubm90aWZ5KGdldE1lc3NhZ2UoJ2Vyck5vSXRlbVByb3ZpZGVkJyksIHtcblx0XHRcdFx0XHRcdFx0dGFnOiAnUlJEJyxcblx0XHRcdFx0XHRcdFx0dHlwZTogJ2Vycm9yJyxcblx0XHRcdFx0XHRcdH0pO1xuXG5cdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0bGV0IGNvbnQ6IGJvb2xlYW4gPSB0cnVlO1xuXHRcdFx0XHRcdGlmICghcnJkUmVhc29uICYmICFycmRPdGhlclJlYXNvbnMpIHtcblx0XHRcdFx0XHRcdGNvbnQgPSBjb25maXJtKGdldE1lc3NhZ2UoJ3dhcm5Ob1JlYXNvblByb3ZpZGVkJykpO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGlmIChjb250KSB7XG5cdFx0XHRcdFx0XHR2b2lkIHN1Ym1pdChpZHMsIHRvSGlkZS5qb2luKCfjgIEnKSwgcnJkUmVhc29uID8/ICcnLCBycmRPdGhlclJlYXNvbnMgPz8gJycpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdHRleHQ6IGdldE1lc3NhZ2UoJ2RpYWxvZ0J1dHRvbkNhbmNlbCcpLFxuXHRcdFx0XHRjbGljaygpOiB2b2lkIHtcblx0XHRcdFx0XHQkKHRoaXMpLmRpYWxvZygnY2xvc2UnKTtcblx0XHRcdFx0fSxcblx0XHRc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SU9OIiwgIklTX1dHX0xPR19OUyIsICJycmRQYWdlIiwgInZlcnNpb24iLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAiX190b0VTTSIsICJyZXF1aXJlIiwgImdldEkxOG5NZXNzYWdlcyIsICJ3Z1VMUyIsICJ3aW5kb3ciLCAiZWRpdFN1bW1hcnkiLCAiZXJyTm9SZXZpc2lvblByb3ZpZGVkIiwgImVyck5vSXRlbVByb3ZpZGVkIiwgIndhcm5Ob1JlYXNvblByb3ZpZGVkIiwgImhpZGVJdGVtcyIsICJoaWRlQ29udGVudCIsICJoaWRlTG9nIiwgImhpZGVVc2VybmFtZSIsICJoaWRlU3VtbWFyeSIsICJoaWRlUmVhc29uIiwgImhpZGVSZWFzb25SRDEiLCAiaGlkZVJlYXNvblJEMiIsICJoaWRlUmVhc29uUkQzIiwgImhpZGVSZWFzb25SRDQiLCAiaGlkZVJlYXNvblJENSIsICJoaWRlUmVhc29uT3RoZXIiLCAib3RoZXJSZWFzb25zIiwgImRpYWxvZ1RpdGxlIiwgImRpYWxvZ0J1dHRvblN1Ym1pdCIsICJkaWFsb2dCdXR0b25DYW5jZWwiLCAicmVwb3J0QnV0dG9uVGl0bGUiLCAicmVwb3J0QnV0dG9uVGV4dCIsICJyZXBvcnRCdXR0b25Mb2dUZXh0IiwgImkxOG5NZXNzYWdlcyIsICJnZXRNZXNzYWdlIiwgImtleSIsICJSZXBvcnRCdXR0b24iLCAib25DbGljayIsICJkZWZhdWx0IiwgImNyZWF0ZUVsZW1lbnQiLCAiY2xhc3NOYW1lIiwgIm5hbWUiLCAidGl0bGUiLCAiUmVwb3J0QnV0dG9uX2RlZmF1bHQiLCAiaW1wb3J0X2V4dF9nYWRnZXQ0IiwgImNoZWNrYm94ZXMiLCAib3RoZXJzIiwgInVwZGF0ZUNvbmZpZyIsICJfZG9jdW1lbnQkcXVlcnlTZWxlY3QiLCAiX2RvY3VtZW50JHF1ZXJ5U2VsZWN0MiIsICJfZG9jdW1lbnQkcXVlcnlTZWxlY3QzIiwgImNoZWNrQm94ZXMiLCAiZG9jdW1lbnQiLCAicXVlcnlTZWxlY3RvciIsICJjaGVja2VkIiwgInJyZEhpZGVDb250ZW50IiwgInJyZEhpZGVVc2VybmFtZSIsICJycmRIaWRlU3VtbWFyeSIsICJyZWFzb25JbnB1dCIsICJvdGhlclJlYXNvbnNJbnB1dCIsICJycmRSZWFzb24iLCAidmFsdWUiLCAicnJkT3RoZXJSZWFzb25zIiwgImltcG9ydF9leHRfZ2FkZ2V0MiIsICJEaWFsb2dJbm5lciIsICJpZCIsICJ0eXBlIiwgImh0bWxGb3IiLCAicm93cyIsICJEaWFsb2dJbm5lcl9kZWZhdWx0IiwgImxvYWRJZHMiLCAiJGJvZHkiLCAiaWRzIiwgImJveGVzIiwgImZpbmQiLCAiX2l0ZXJhdG9yMiIsICJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsICJfc3RlcDIiLCAicyIsICJuIiwgImRvbmUiLCAiYm94IiwgImlkUmVnZXgiLCAiaWRBcnJheSIsICJleGVjIiwgImxlbmd0aCIsICJlcnIiLCAiZSIsICJmIiwgImltcG9ydF9leHRfZ2FkZ2V0MyIsICJhcGkiLCAiaW5pdE13QXBpIiwgImNvbmNhdCIsICJzdWJtaXQiLCAiX3JlZiIsICJfYXN5bmNUb0dlbmVyYXRvciIsICJfaWRzIiwgInRvSGlkZSIsICJyZWFzb24iLCAiU2V0IiwgInJyZEFyciIsICJfaXRlcmF0b3IzIiwgImVudHJpZXMiLCAiX3N0ZXAzIiwgImluZGV4IiwgIl9yZXNwb25zZSRxdWVyeSIsICJxdWVyeVBhcmFtcyIsICJhY3Rpb24iLCAiZm9ybWF0IiwgImZvcm1hdHZlcnNpb24iLCAidGl0bGVzIiwgInByb3AiLCAicnZwcm9wIiwgInJlc3BvbnNlIiwgImNvbnRlbnQiLCAicGFnZXMiLCAicmV2aXNpb25zIiwgIm5vdGlmeSIsICJ0YWciLCAiX3Jlc3VsdCRlZGl0IiwgIl9yZXN1bHQkZXJyb3IiLCAiZWRpdFBhcmFtcyIsICJ0ZXh0IiwgImpvaW4iLCAic3VtbWFyeSIsICJyZXN1bHQiLCAicG9zdFdpdGhFZGl0VG9rZW4iLCAibG9jYXRpb24iLCAicmVwbGFjZSIsICJ1dGlsIiwgImdldFVybCIsICJjb2RlIiwgIl94IiwgIl94MiIsICJfeDMiLCAiX3g0IiwgImFwcGx5IiwgImFyZ3VtZW50cyIsICIkZGlhbG9nIiwgInNob3dEaWFsb2ciLCAiZGlhbG9nIiwgImh0bWwiLCAiX2kiLCAiX09iamVjdCRlbnRyaWVzIiwgIk9iamVjdCIsICJ2YWwiLCAiX2kyIiwgIl9PYmplY3QkZW50cmllczIiLCAiJCIsICJtaW5XaWR0aCIsICJtaW5IZWlnaHQiLCAiY2xvc2UiLCAiYnV0dG9ucyIsICJjbGljayIsICJjb250IiwgImNvbmZpcm0iLCAiX3JyZE90aGVyUmVhc29ucyIsICJnZXRCb2R5IiwgInRoZW4iLCAicnJkIiwgIl9pdGVyYXRvcjQiLCAiX3N0ZXA0IiwgImVsZW1lbnQiLCAiYWZ0ZXIiXQp9Cg==

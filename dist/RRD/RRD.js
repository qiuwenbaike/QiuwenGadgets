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
  className: ["historysubmit", "cdx-button"],
  name: "reportRRD",
  type: "button",
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1JSRC9tb2R1bGVzL2NvbnN0YW50LnRzIiwgInNyYy9SUkQvb3B0aW9ucy5qc29uIiwgInNyYy9SUkQvY29tcG9uZW50cy9SZXBvcnRCdXR0b24udHN4IiwgInNyYy9SUkQvbW9kdWxlcy9pMThuLnRzIiwgInNyYy9SUkQvUlJELnRzIiwgInNyYy9SUkQvbW9kdWxlcy9ycmRDb25maWcudHMiLCAic3JjL1JSRC9jb21wb25lbnRzL0RpYWxvZ0lubmVyLnRzeCIsICJzcmMvUlJEL21vZHVsZXMvbG9hZElkcy50cyIsICJzcmMvUlJEL21vZHVsZXMvYXBpLnRzIiwgInNyYy9SUkQvbW9kdWxlcy9zdWJtaXQudHMiLCAic3JjL1JSRC9tb2R1bGVzL3Nob3dEaWFsb2cudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IFdHX1BBR0VfTkFNRTogc3RyaW5nID0gbXcuY29uZmlnLmdldCgnd2dQYWdlTmFtZScpO1xuXG5jb25zdCBJU19XR19ISVNUT1JZX0FDVElPTjogYm9vbGVhbiA9IG13LmNvbmZpZy5nZXQoJ3dnQWN0aW9uJykgPT09ICdoaXN0b3J5JztcbmNvbnN0IElTX1dHX0xPR19OUzogYm9vbGVhbiA9IG13LmNvbmZpZy5nZXQoJ3dnQ2Fub25pY2FsU3BlY2lhbFBhZ2VOYW1lJykgPT09ICdMb2cnO1xuXG5leHBvcnQge0lTX1dHX0hJU1RPUllfQUNUSU9OLCBJU19XR19MT0dfTlMsIFdHX1BBR0VfTkFNRX07XG4iLCAie1xuXHRcInJyZFBhZ2VcIjogXCJRaXV3ZW5fdGFsazrniYjmnKzliKDpmaTmj5DmiqVcIixcblx0XCJ2ZXJzaW9uXCI6IFwiMi4wXCJcbn1cbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge0lTX1dHX0xPR19OU30gZnJvbSAnLi4vbW9kdWxlcy9jb25zdGFudCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAnZXh0LmdhZGdldC5SZWFjdCc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4uL21vZHVsZXMvaTE4bic7XG5cbmludGVyZmFjZSBQcm9wcyB7XG5cdG9uQ2xpY2soKTogdm9pZDtcbn1cblxuY29uc3QgUmVwb3J0QnV0dG9uID0gKHtvbkNsaWNrfTogUHJvcHMpID0+IChcblx0PGJ1dHRvblxuXHRcdGNsYXNzTmFtZT17WydoaXN0b3J5c3VibWl0JywgJ2NkeC1idXR0b24nXX1cblx0XHRuYW1lPXsncmVwb3J0UlJEJ31cblx0XHR0eXBlPXsnYnV0dG9uJ31cblx0XHR0aXRsZT17Z2V0TWVzc2FnZSgncmVwb3J0QnV0dG9uVGl0bGUnKSArIE9QVElPTlMucnJkUGFnZX1cblx0XHRvbkNsaWNrPXtvbkNsaWNrfVxuXHQ+XG5cdFx0e0lTX1dHX0xPR19OUyA/IGdldE1lc3NhZ2UoJ3JlcG9ydEJ1dHRvbkxvZ1RleHQnKSA6IGdldE1lc3NhZ2UoJ3JlcG9ydEJ1dHRvblRleHQnKX1cblx0PC9idXR0b24+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBSZXBvcnRCdXR0b247XG4iLCAiY29uc3QgZ2V0STE4bk1lc3NhZ2VzID0gKCkgPT4ge1xuXHRjb25zdCB7d2dVTFN9ID0gd2luZG93O1xuXHRyZXR1cm4ge1xuXHRcdGVkaXRTdW1tYXJ5OiB3Z1VMUyhcblx0XHRcdCdbW01lZGlhV2lraTpHYWRnZXQtUlJELmpzfOWNiuiHquWKqOaPkOaKpV1d5L+u6K6i54mI5pys5Yig6ZmkJyxcblx0XHRcdCdbW01lZGlhV2lraTpHYWRnZXQtUlJELmpzfOWNiuiHquWLleaPkOWgsV1d5L+u6KiC54mI5pys5Yiq6ZmkJ1xuXHRcdCksXG5cdFx0ZXJyTm9SZXZpc2lvblByb3ZpZGVkOiB3Z1VMUygn5oKo5rKh5pyJ6YCJ5oup6ZyA6ZqQ6JeP55qE54mI5pys77yBJywgJ+aCqOaykuaciemBuOaTh+mcgOmaseiXj+eahOeJiOacrO+8gScpLFxuXHRcdGVyck5vSXRlbVByb3ZpZGVkOiB3Z1VMUygn5oKo5rKh5pyJ6YCJ5oup6ZyA6ZqQ6JeP55qE6aG555uu77yBJywgJ+aCqOaykuaciemBuOaTh+mcgOmaseiXj+eahOmgheebru+8gScpLFxuXHRcdHdhcm5Ob1JlYXNvblByb3ZpZGVkOiB3Z1VMUygn5oKo5rKh5pyJ6L6T5YWl5Lu75L2V55CG55Sx77yB56Gu5a6a6KaB57un57ut5ZCX77yfJywgJ+aCqOaykuaciei8uOWFpeS7u+S9leeQhueUse+8geeiuuWumuimgee5vOe6jOWXju+8nycpLFxuXHRcdGhpZGVJdGVtczogd2dVTFMoJ+mcgOmakOiXj+eahOmhueebru+8micsICfpnIDpmrHol4/nmoTpoIXnm67vvJonKSxcblx0XHRoaWRlQ29udGVudDogd2dVTFMoJ+e8lui+keWGheWuuScsICfnt6jovK/lhaflrrknKSxcblx0XHRoaWRlTG9nOiB3Z1VMUygn5pel5b+X55uu5qCH5LiO5Y+C5pWwJywgJ+aXpeiqjOebruaomeiIh+WPg+aVuCcpLFxuXHRcdGhpZGVVc2VybmFtZTogd2dVTFMoJ+e8lui+keiAheeUqOaIt+WQjS9JUOWcsOWdgCcsICfnt6jovK/ogIXnlKjmiLblkI0vSVDkvY3lnYAnKSxcblx0XHRoaWRlU3VtbWFyeTogd2dVTFMoJ+e8lui+keaRmOimgScsICfnt6jovK/mkZjopoEnKSxcblx0XHRoaWRlUmVhc29uOiB3Z1VMUygn55CG5o2u77yaJywgJ+eQhuaTmu+8micpLFxuXHRcdGhpZGVSZWFzb25SRDE6IHdnVUxTKCdSRDHvvJrmnaHnm67kuK3mmI7mmL7kvrXniq/okZfkvZzmnYPnmoTlhoXlrrknLCAnUkQx77ya5qKd55uu5Lit5piO6aGv5L6154qv6JGX5L2c5qyK55qE5YWn5a65JyksXG5cdFx0aGlkZVJlYXNvblJEMjogd2dVTFMoJ1JEMu+8muS4pemHjeS+rui+seOAgei0rOS9juaIluaUu+WHu+aAp+aWh+acrCcsICdSRDLvvJrlmrTph43kvq7ovrHjgIHosrbkvY7miJbmlLvmk4rmgKfmlofmnKwnKSxcblx0XHRoaWRlUmVhc29uUkQzOiB3Z1VMUygnUkQz77ya57qv57K55omw5Lmx5oCn5YaF5a65JywgJ+e0lOeyueaTvuS6guaAp+WFp+WuuScpLFxuXHRcdGhpZGVSZWFzb25SRDQ6IHdnVUxTKCdSRDTvvJrmmI7mmL7ov53lj43ms5Xlvovms5Xop4TmiJbov53og4zlhazluo/oia/kv5fnmoTlhoXlrrknLCAnUkQ077ya5piO6aGv6YGV5Y+N5rOV5b6L5rOV6KaP5oiW6YGV6IOM5YWs5bqP6Imv5L+X55qE5YWn5a65JyksXG5cdFx0aGlkZVJlYXNvblJENTogd2dVTFMoJ1JENe+8muWFtuS7luS4jeWunOWFrOW8gOeahOeJiOacrOWGheWuuScsICdSRDXvvJrlhbbku5bkuI3lrpzlhazplovnmoTniYjmnKzlhaflrrknKSxcblx0XHRoaWRlUmVhc29uT3RoZXI6IHdnVUxTKCfku4Xkvb/nlKjkuIvmlrnnmoTpmYTliqDnkIbnlLEnLCAn5YOF5L2/55So5LiL5pa555qE6ZmE5Yqg55CG55SxJyksXG5cdFx0b3RoZXJSZWFzb25zOiB3Z1VMUygn6ZmE5Yqg55CG55Sx77yI5Y+v6YCJ77yM5LiN55So562+5ZCN77yJJywgJ+mZhOWKoOeQhueUse+8iOWPr+mBuO+8jOS4jeeUqOewveWQje+8iScpLFxuXHRcdGRpYWxvZ1RpdGxlOiB3Z1VMUygn5o+Q5oql5L+u6K6i54mI5pys5Yig6ZmkJywgJ+aPkOWgseS/ruiogueJiOacrOWIqumZpCcpLFxuXHRcdGRpYWxvZ0J1dHRvblN1Ym1pdDogd2dVTFMoJ+aPkOaKpScsICfmj5DloLEnKSxcblx0XHRkaWFsb2dCdXR0b25DYW5jZWw6IHdnVUxTKCflj5bmtognLCAn5Y+W5raIJyksXG5cdFx0cmVwb3J0QnV0dG9uVGl0bGU6IHdnVUxTKCflsIbpgInkuK3nmoTniYjmnKzmj5DmiqXliLAnLCAn5bCH6YG45Lit55qE54mI5pys5o+Q5aCx5YiwJyksXG5cdFx0cmVwb3J0QnV0dG9uVGV4dDogd2dVTFMoJ+ivt+axguWIoOmZpOiiq+mAieeJiOacrCcsICfoq4vmsYLliKrpmaTooqvpgbjniYjmnKwnKSxcblx0XHRyZXBvcnRCdXR0b25Mb2dUZXh0OiB3Z1VMUygn6K+35rGC5Yig6Zmk6KKr6YCJ5pel5b+XJywgJ+iri+axguWIqumZpOiiq+mBuOaXpeiqjCcpLFxuXHR9O1xufTtcblxuY29uc3QgaTE4bk1lc3NhZ2VzID0gZ2V0STE4bk1lc3NhZ2VzKCk7XG5cbmNvbnN0IGdldE1lc3NhZ2U6IEdldE1lc3NhZ2VzPHR5cGVvZiBpMThuTWVzc2FnZXM+ID0gKGtleSkgPT4ge1xuXHRyZXR1cm4gaTE4bk1lc3NhZ2VzW2tleV0gfHwga2V5O1xufTtcblxuZXhwb3J0IHtnZXRNZXNzYWdlfTtcbiIsICJpbXBvcnQge0lTX1dHX0hJU1RPUllfQUNUSU9OLCBJU19XR19MT0dfTlN9IGZyb20gJy4vbW9kdWxlcy9jb25zdGFudCc7XG5pbXBvcnQgUmVwb3J0QnV0dG9uIGZyb20gJy4vY29tcG9uZW50cy9SZXBvcnRCdXR0b24nO1xuaW1wb3J0IHtnZXRCb2R5fSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuaW1wb3J0IHtzaG93RGlhbG9nfSBmcm9tICcuL21vZHVsZXMvc2hvd0RpYWxvZyc7XG5cbmlmIChJU19XR19ISVNUT1JZX0FDVElPTiB8fCBJU19XR19MT0dfTlMpIHtcblx0dm9pZCBnZXRCb2R5KCkudGhlbihmdW5jdGlvbiBycmQoJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KTogdm9pZCB7XG5cdFx0Ly8gRm9yIGFjdGlvbj1oaXN0b3J5IGFuZCBTcGVjaWFsOkxvZ1xuXHRcdGZvciAoY29uc3QgZWxlbWVudCBvZiAkYm9keS5maW5kKFxuXHRcdFx0W1xuXHRcdFx0XHQnLmhpc3RvcnlzdWJtaXQubXctaGlzdG9yeS1jb21wYXJlc2VsZWN0ZWR2ZXJzaW9ucy1idXR0b24nLFxuXHRcdFx0XHQnLmVkaXRjaGFuZ2V0YWdzLWxvZy1zdWJtaXQubXctbG9nLWVkaXRjaGFuZ2V0YWdzLWJ1dHRvbicsXG5cdFx0XHRdLmpvaW4oJywnKVxuXHRcdCkpIHtcblx0XHRcdGVsZW1lbnQuYWZ0ZXIoXG5cdFx0XHRcdFJlcG9ydEJ1dHRvbih7XG5cdFx0XHRcdFx0b25DbGljazogKCk6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdFx0c2hvd0RpYWxvZygkYm9keSk7XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0fSlcblx0XHRcdCk7XG5cdFx0fVxuXHR9KTtcbn1cbiIsICJpbXBvcnQgdHlwZSB7UnJkQ29uZmlnfSBmcm9tICcuL3R5cGVzJztcblxuY29uc3QgY29uZmlnOiBScmRDb25maWcgPSB7XG5cdGNoZWNrYm94ZXM6IHt9LFxuXHRvdGhlcnM6IHt9LFxufTtcblxuY29uc3QgdXBkYXRlQ29uZmlnID0gKCk6IHZvaWQgPT4ge1xuXHRjb25zdCBjaGVja0JveGVzOiBScmRDb25maWdbJ2NoZWNrYm94ZXMnXSA9IHt9O1xuXG5cdGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxJbnB1dEVsZW1lbnQ+KCcjcnJkX19oaWRlLWNvbnRlbnQnKT8uY2hlY2tlZCkge1xuXHRcdGNoZWNrQm94ZXMucnJkSGlkZUNvbnRlbnQgPSB0cnVlO1xuXHR9XG5cdGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxJbnB1dEVsZW1lbnQ+KCcjcnJkX19oaWRlLXVzZXJuYW1lJyk/LmNoZWNrZWQpIHtcblx0XHRjaGVja0JveGVzLnJyZEhpZGVVc2VybmFtZSA9IHRydWU7XG5cdH1cblx0aWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTElucHV0RWxlbWVudD4oJyNycmRfX2hpZGUtc3VtbWFyeScpPy5jaGVja2VkKSB7XG5cdFx0Y2hlY2tCb3hlcy5ycmRIaWRlU3VtbWFyeSA9IHRydWU7XG5cdH1cblxuXHRjb25maWcuY2hlY2tib3hlcyA9IGNoZWNrQm94ZXM7XG5cblx0Y29uc3Qgb3RoZXJzOiBScmRDb25maWdbJ290aGVycyddID0ge307XG5cblx0Y29uc3QgcmVhc29uSW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQgfCBudWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MSW5wdXRFbGVtZW50PignI3JyZF9fcmVhc29uJyk7XG5cdGNvbnN0IG90aGVyUmVhc29uc0lucHV0OiBIVE1MSW5wdXRFbGVtZW50IHwgbnVsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTElucHV0RWxlbWVudD4oJyNycmRfX290aGVyLXJlYXNvbnMnKTtcblx0aWYgKHJlYXNvbklucHV0KSB7XG5cdFx0b3RoZXJzLnJyZFJlYXNvbiA9IHJlYXNvbklucHV0LnZhbHVlO1xuXHR9XG5cdGlmIChvdGhlclJlYXNvbnNJbnB1dCkge1xuXHRcdG90aGVycy5ycmRPdGhlclJlYXNvbnMgPSBvdGhlclJlYXNvbnNJbnB1dC52YWx1ZTtcblx0fVxuXG5cdGNvbmZpZy5vdGhlcnMgPSBvdGhlcnM7XG59O1xuXG5leHBvcnQge2NvbmZpZywgdXBkYXRlQ29uZmlnfTtcbiIsICJpbXBvcnQgJy4vRGlhbG9nSW5uZXIubGVzcyc7XG5pbXBvcnQge0lTX1dHX0xPR19OU30gZnJvbSAnLi4vbW9kdWxlcy9jb25zdGFudCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAnZXh0LmdhZGdldC5SZWFjdCc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4uL21vZHVsZXMvaTE4bic7XG5cbmNvbnN0IERpYWxvZ0lubmVyID0gKCkgPT4gKFxuXHQ8ZGl2IGlkPVwicnJkX19jb25maWdcIj5cblx0XHR7Z2V0TWVzc2FnZSgnaGlkZUl0ZW1zJyl9XG5cdFx0PGJyIC8+XG5cdFx0PGRpdiBjbGFzc05hbWU9XCJycmRfX2NvbnRlbnQtd3JhcHBlclwiPlxuXHRcdFx0PGlucHV0IG5hbWU9XCJjb250ZW50XCIgaWQ9XCJycmRfX2hpZGUtY29udGVudFwiIHR5cGU9XCJjaGVja2JveFwiIHZhbHVlPVwiY29udGVudFwiIGNoZWNrZWQgLz5cblx0XHRcdDxsYWJlbCBodG1sRm9yPVwicnJkX19oaWRlLWNvbnRlbnRcIiBpZD1cInJyZC1jb250ZW50XCI+XG5cdFx0XHRcdHtJU19XR19MT0dfTlMgPyBnZXRNZXNzYWdlKCdoaWRlTG9nJykgOiBnZXRNZXNzYWdlKCdoaWRlQ29udGVudCcpfVxuXHRcdFx0PC9sYWJlbD5cblx0XHQ8L2Rpdj5cblx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJyZF9fY29udGVudC13cmFwcGVyXCI+XG5cdFx0XHQ8aW5wdXQgbmFtZT1cInVzZXJuYW1lXCIgaWQ9XCJycmRfX2hpZGUtdXNlcm5hbWVcIiB0eXBlPVwiY2hlY2tib3hcIiB2YWx1ZT1cInVzZXJuYW1lXCIgLz5cblx0XHRcdDxsYWJlbCBodG1sRm9yPVwicnJkX19oaWRlLXVzZXJuYW1lXCIgaWQ9XCJycmQtdXNlcm5hbWVcIj5cblx0XHRcdFx0e2dldE1lc3NhZ2UoJ2hpZGVVc2VybmFtZScpfVxuXHRcdFx0PC9sYWJlbD5cblx0XHQ8L2Rpdj5cblx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJyZF9fY29udGVudC13cmFwcGVyXCI+XG5cdFx0XHQ8aW5wdXQgbmFtZT1cInN1bW1hcnlcIiBpZD1cInJyZF9faGlkZS1zdW1tYXJ5XCIgdHlwZT1cImNoZWNrYm94XCIgdmFsdWU9XCJzdW1tYXJ5XCIgLz5cblx0XHRcdDxsYWJlbCBodG1sRm9yPVwicnJkX19oaWRlLXN1bW1hcnlcIiBpZD1cInJyZC1zdW1tYXJ5XCI+XG5cdFx0XHRcdHtnZXRNZXNzYWdlKCdoaWRlU3VtbWFyeScpfVxuXHRcdFx0PC9sYWJlbD5cblx0XHQ8L2Rpdj5cblx0XHQ8YnIgLz5cblx0XHQ8YnIgLz5cblx0XHR7Z2V0TWVzc2FnZSgnaGlkZVJlYXNvbicpfVxuXHRcdDxiciAvPlxuXHRcdDxzZWxlY3QgbmFtZT1cInJyZF9fcmVhc29uXCIgaWQ9XCJycmRfX3JlYXNvblwiPlxuXHRcdFx0PG9wdGlvbiB2YWx1ZT17Z2V0TWVzc2FnZSgnaGlkZVJlYXNvblJEMScpfT57Z2V0TWVzc2FnZSgnaGlkZVJlYXNvblJEMScpfTwvb3B0aW9uPlxuXHRcdFx0PG9wdGlvbiB2YWx1ZT17Z2V0TWVzc2FnZSgnaGlkZVJlYXNvblJEMicpfT57Z2V0TWVzc2FnZSgnaGlkZVJlYXNvblJEMicpfTwvb3B0aW9uPlxuXHRcdFx0PG9wdGlvbiB2YWx1ZT17Z2V0TWVzc2FnZSgnaGlkZVJlYXNvblJEMycpfT57Z2V0TWVzc2FnZSgnaGlkZVJlYXNvblJEMycpfTwvb3B0aW9uPlxuXHRcdFx0PG9wdGlvbiB2YWx1ZT17Z2V0TWVzc2FnZSgnaGlkZVJlYXNvblJENCcpfT57Z2V0TWVzc2FnZSgnaGlkZVJlYXNvblJENCcpfTwvb3B0aW9uPlxuXHRcdFx0PG9wdGlvbiB2YWx1ZT17Z2V0TWVzc2FnZSgnaGlkZVJlYXNvblJENScpfT57Z2V0TWVzc2FnZSgnaGlkZVJlYXNvblJENScpfTwvb3B0aW9uPlxuXHRcdFx0PG9wdGlvbiB2YWx1ZT1cIlwiPntnZXRNZXNzYWdlKCdoaWRlUmVhc29uT3RoZXInKX08L29wdGlvbj5cblx0XHQ8L3NlbGVjdD5cblx0XHQ8YnIgLz5cblx0XHQ8YnIgLz5cblx0XHR7Z2V0TWVzc2FnZSgnb3RoZXJSZWFzb25zJyl9XG5cdFx0PGJyIC8+XG5cdFx0PHRleHRhcmVhIG5hbWU9XCJvdGhlclJlYXNvbnNcIiBpZD1cInJyZF9fb3RoZXItcmVhc29uc1wiIHJvd3M9ezR9PjwvdGV4dGFyZWE+XG5cdDwvZGl2PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgRGlhbG9nSW5uZXI7XG4iLCAiY29uc3QgbG9hZElkcyA9ICgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiBzdHJpbmdbXSA9PiB7XG5cdGNvbnN0IGlkczogc3RyaW5nW10gPSBbXTtcblxuXHRjb25zdCBib3hlczogSlF1ZXJ5PEhUTUxJbnB1dEVsZW1lbnQ+ID0gJGJvZHkuZmluZCgnaW5wdXQnKTtcblx0Zm9yIChjb25zdCBib3ggb2YgYm94ZXMpIHtcblx0XHRjb25zdCB7Y2hlY2tlZCwgbmFtZSwgdHlwZX0gPSBib3g7XG5cblx0XHRpZiAodHlwZSAhPT0gJ2NoZWNrYm94JyB8fCAhY2hlY2tlZCkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0Y29uc3QgaWRSZWdleDogUmVnRXhwID0gL2lkc1xcWyhcXGQrKV0vO1xuXHRcdGNvbnN0IGlkQXJyYXk6IFJlZ0V4cEV4ZWNBcnJheSB8IG51bGwgPSBpZFJlZ2V4LmV4ZWMobmFtZSk7XG5cdFx0aWYgKGlkQXJyYXk/LlsxXSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRbLCBpZHNbaWRzLmxlbmd0aF1dID0gaWRBcnJheTtcblx0fVxuXG5cdHJldHVybiBpZHM7XG59O1xuXG5leHBvcnQge2xvYWRJZHN9O1xuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7aW5pdE13QXBpfSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG5jb25zdCBhcGk6IG13LkFwaSA9IGluaXRNd0FwaShgUlJELyR7T1BUSU9OUy52ZXJzaW9ufWApO1xuXG5leHBvcnQge2FwaX07XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtXR19QQUdFX05BTUV9IGZyb20gJy4vY29uc3RhbnQnO1xuaW1wb3J0IHthcGl9IGZyb20gJy4vYXBpJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9pMThuJztcblxuY29uc3Qgc3VibWl0ID0gYXN5bmMgKF9pZHM6IHN0cmluZ1tdLCB0b0hpZGU6IHN0cmluZywgcmVhc29uOiBzdHJpbmcsIG90aGVyUmVhc29uczogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiA9PiB7XG5cdGNvbnN0IGlkczogc3RyaW5nW10gPSBbLi4ubmV3IFNldChfaWRzKV07XG5cblx0Y29uc3QgcnJkQXJyOiBzdHJpbmdbXSA9IFtcblx0XHQne3tSZXZkZWwnLFxuXHRcdCd8c3RhdHVzID0gJyxcblx0XHRgfGFydGljbGUgPSAke1dHX1BBR0VfTkFNRX1gLFxuXHRcdGB8c2V0ID0gJHt0b0hpZGV9YCxcblx0XHRgfHJlYXNvbiA9ICR7cmVhc29ufSR7b3RoZXJSZWFzb25zfWAsXG5cdF07XG5cblx0Zm9yIChjb25zdCBbaW5kZXgsIGlkXSBvZiBpZHMuZW50cmllcygpKSB7XG5cdFx0cnJkQXJyW3JyZEFyci5sZW5ndGhdID0gYHxpZCR7aW5kZXggKyAxfSA9ICR7aWR9YDtcblx0fVxuXHRycmRBcnJbcnJkQXJyLmxlbmd0aF0gPSAnfX1cXG4tLX5+Jy5jb25jYXQoJ35+Jyk7XG5cblx0dHJ5IHtcblx0XHRjb25zdCBxdWVyeVBhcmFtczogQXBpUXVlcnlSZXZpc2lvbnNQYXJhbXMgPSB7XG5cdFx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRcdHRpdGxlczogT1BUSU9OUy5ycmRQYWdlLFxuXHRcdFx0cHJvcDogJ3JldmlzaW9ucycsXG5cdFx0XHRydnByb3A6ICdjb250ZW50Jyxcblx0XHR9O1xuXG5cdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGkuZ2V0KHF1ZXJ5UGFyYW1zKTtcblxuXHRcdGxldCBjb250ZW50OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cdFx0aWYgKHJlc3BvbnNlWydxdWVyeSddPy5wYWdlcykge1xuXHRcdFx0Y29udGVudCA9IHJlc3BvbnNlWydxdWVyeSddLnBhZ2VzWzBdLnJldmlzaW9uc1swXS5jb250ZW50IGFzIHN0cmluZztcblx0XHR9XG5cblx0XHRpZiAoY29udGVudCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR2b2lkIG13Lm5vdGlmeShgRXJyb3Igd2hlbiBsb2FkaW5nIHBhZ2UgJHtPUFRJT05TLnJyZFBhZ2V9OiBtaXNzaW5nYCwge1xuXHRcdFx0XHR0YWc6ICdSUkQnLFxuXHRcdFx0XHR0eXBlOiAnZXJyb3InLFxuXHRcdFx0fSk7XG5cblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR0cnkge1xuXHRcdFx0Y29uc3QgZWRpdFBhcmFtczogQXBpRWRpdFBhZ2VQYXJhbXMgPSB7XG5cdFx0XHRcdGFjdGlvbjogJ2VkaXQnLFxuXHRcdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdFx0XHR0aXRsZTogT1BUSU9OUy5ycmRQYWdlLFxuXHRcdFx0XHR0ZXh0OiBgJHtjb250ZW50fVxcblxcbiR7cnJkQXJyLmpvaW4oJ1xcbicpfWAsXG5cdFx0XHRcdHN1bW1hcnk6IGdldE1lc3NhZ2UoJ2VkaXRTdW1tYXJ5JyksXG5cdFx0XHR9O1xuXG5cdFx0XHRjb25zdCByZXN1bHQgPSBhd2FpdCBhcGkucG9zdFdpdGhFZGl0VG9rZW4oZWRpdFBhcmFtcyk7XG5cblx0XHRcdGlmIChyZXN1bHRbJ2VkaXQnXT8ucmVzdWx0ID09PSAnU3VjY2VzcycpIHtcblx0XHRcdFx0bG9jYXRpb24ucmVwbGFjZShtdy51dGlsLmdldFVybChPUFRJT05TLnJyZFBhZ2UpKTtcblx0XHRcdH0gZWxzZSBpZiAocmVzdWx0WydlcnJvciddPy5jb2RlKSB7XG5cdFx0XHRcdHZvaWQgbXcubm90aWZ5KGBTb21lIGVycm9ycyBvY2N1cmVkIHdoaWxlIHNhdmluZyBwYWdlOiAke3Jlc3VsdFsnZXJyb3InXS5jb2RlfWAsIHtcblx0XHRcdFx0XHR0YWc6ICdSUkQnLFxuXHRcdFx0XHRcdHR5cGU6ICdlcnJvcicsXG5cdFx0XHRcdH0pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dm9pZCBtdy5ub3RpZnkoJ1NvbWUgZXJyb3JzIG9jY3VyZWQgd2hpbGUgc2F2aW5nIHBhZ2U6IHVua25vd24nLCB7XG5cdFx0XHRcdFx0dGFnOiAnUlJEJyxcblx0XHRcdFx0XHR0eXBlOiAnZXJyb3InLFxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9IGNhdGNoIHtcblx0XHRcdHZvaWQgbXcubm90aWZ5KGBFcnJvciB3aGVuIGVkaXRpbmcgcGFnZSAke09QVElPTlMucnJkUGFnZX1gLCB7dGFnOiAnUlJEJywgdHlwZTogJ2Vycm9yJ30pO1xuXHRcdH1cblx0fSBjYXRjaCB7XG5cdFx0dm9pZCBtdy5ub3RpZnkoYEVycm9yIHdoZW4gbG9hZGluZyBwYWdlICR7T1BUSU9OUy5ycmRQYWdlfWAsIHt0YWc6ICdSUkQnLCB0eXBlOiAnZXJyb3InfSk7XG5cdH1cbn07XG5cbmV4cG9ydCB7c3VibWl0fTtcbiIsICJpbXBvcnQge2NvbmZpZywgdXBkYXRlQ29uZmlnfSBmcm9tICcuL3JyZENvbmZpZyc7XG5pbXBvcnQgRGlhbG9nSW5uZXIgZnJvbSAnLi4vY29tcG9uZW50cy9EaWFsb2dJbm5lcic7XG5pbXBvcnQge0lTX1dHX0xPR19OU30gZnJvbSAnLi9jb25zdGFudCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAnZXh0LmdhZGdldC5SZWFjdCc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vaTE4bic7XG5pbXBvcnQge2xvYWRJZHN9IGZyb20gJy4vbG9hZElkcyc7XG5pbXBvcnQge3N1Ym1pdH0gZnJvbSAnLi9zdWJtaXQnO1xuXG5sZXQgJGRpYWxvZzogSlF1ZXJ5IHwgdW5kZWZpbmVkO1xuXG5jb25zdCBzaG93RGlhbG9nID0gKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQgPT4ge1xuXHRjb25zdCBpZHM6IHN0cmluZ1tdID0gbG9hZElkcygkYm9keSk7XG5cdGlmICghaWRzLmxlbmd0aCkge1xuXHRcdHZvaWQgbXcubm90aWZ5KGdldE1lc3NhZ2UoJ2Vyck5vUmV2aXNpb25Qcm92aWRlZCcpLCB7XG5cdFx0XHR0YWc6ICdSUkQnLFxuXHRcdFx0dHlwZTogJ2Vycm9yJyxcblx0XHR9KTtcblxuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IGRpYWxvZzogUmVhY3QuUmVhY3RFbGVtZW50ID0gRGlhbG9nSW5uZXIoKTtcblx0aWYgKCRkaWFsb2cpIHtcblx0XHQkZGlhbG9nLmh0bWwoZGlhbG9nKS5kaWFsb2coJ29wZW4nKTtcblxuXHRcdGZvciAoY29uc3QgW2lkLCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMoY29uZmlnLm90aGVycykpIHtcblx0XHRcdCRib2R5LmZpbmQoYCMke2lkfWApLnZhbCh2YWx1ZSBhcyBzdHJpbmcpO1xuXHRcdH1cblx0XHRmb3IgKGNvbnN0IFtpZCwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKGNvbmZpZy5jaGVja2JveGVzKSkge1xuXHRcdFx0aWYgKHZhbHVlID09PSB0cnVlKSB7XG5cdFx0XHRcdCRib2R5LmZpbmQoYCMke2lkfWApLnByb3AoJ2NoZWNrZWQnLCB0cnVlKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm47XG5cdH1cblxuXHQkZGlhbG9nID0gJChkaWFsb2cpLmRpYWxvZyh7XG5cdFx0dGl0bGU6IGdldE1lc3NhZ2UoJ2RpYWxvZ1RpdGxlJyksXG5cdFx0bWluV2lkdGg6IDUxNSxcblx0XHRtaW5IZWlnaHQ6IDE1MCxcblx0XHRjbG9zZTogdXBkYXRlQ29uZmlnLFxuXHRcdGJ1dHRvbnM6IFtcblx0XHRcdHtcblx0XHRcdFx0dGV4dDogZ2V0TWVzc2FnZSgnZGlhbG9nQnV0dG9uU3VibWl0JyksXG5cdFx0XHRcdGNsaWNrKCk6IHZvaWQge1xuXHRcdFx0XHRcdCQodGhpcykuZGlhbG9nKCdjbG9zZScpO1xuXG5cdFx0XHRcdFx0Y29uc3Qge1xuXHRcdFx0XHRcdFx0Y2hlY2tib3hlczoge3JyZEhpZGVDb250ZW50LCBycmRIaWRlVXNlcm5hbWUsIHJyZEhpZGVTdW1tYXJ5fSxcblx0XHRcdFx0XHRcdG90aGVyczoge3JyZFJlYXNvbn0sXG5cdFx0XHRcdFx0fSA9IGNvbmZpZztcblxuXHRcdFx0XHRcdGxldCB7cnJkT3RoZXJSZWFzb25zfSA9IGNvbmZpZy5vdGhlcnM7XG5cdFx0XHRcdFx0aWYgKHJyZE90aGVyUmVhc29ucyAmJiBycmRSZWFzb24pIHtcblx0XHRcdFx0XHRcdHJyZE90aGVyUmVhc29ucyA9IGDvvIwke3JyZE90aGVyUmVhc29uc31gO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGNvbnN0IHRvSGlkZTogc3RyaW5nW10gPSBbXTtcblx0XHRcdFx0XHRpZiAocnJkSGlkZUNvbnRlbnQpIHtcblx0XHRcdFx0XHRcdHRvSGlkZVt0b0hpZGUubGVuZ3RoXSA9IElTX1dHX0xPR19OUyA/IGdldE1lc3NhZ2UoJ2hpZGVMb2cnKSA6IGdldE1lc3NhZ2UoJ2hpZGVDb250ZW50Jyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmIChycmRIaWRlVXNlcm5hbWUpIHtcblx0XHRcdFx0XHRcdHRvSGlkZVt0b0hpZGUubGVuZ3RoXSA9IGdldE1lc3NhZ2UoJ2hpZGVVc2VybmFtZScpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAocnJkSGlkZVN1bW1hcnkpIHtcblx0XHRcdFx0XHRcdHRvSGlkZVt0b0hpZGUubGVuZ3RoXSA9IGdldE1lc3NhZ2UoJ2hpZGVTdW1tYXJ5Jyk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0aWYgKCF0b0hpZGUubGVuZ3RoKSB7XG5cdFx0XHRcdFx0XHR2b2lkIG13Lm5vdGlmeShnZXRNZXNzYWdlKCdlcnJOb0l0ZW1Qcm92aWRlZCcpLCB7XG5cdFx0XHRcdFx0XHRcdHRhZzogJ1JSRCcsXG5cdFx0XHRcdFx0XHRcdHR5cGU6ICdlcnJvcicsXG5cdFx0XHRcdFx0XHR9KTtcblxuXHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGxldCBjb250OiBib29sZWFuID0gdHJ1ZTtcblx0XHRcdFx0XHRpZiAoIXJyZFJlYXNvbiAmJiAhcnJkT3RoZXJSZWFzb25zKSB7XG5cdFx0XHRcdFx0XHRjb250ID0gY29uZmlybShnZXRNZXNzYWdlKCd3YXJuTm9SZWFzb25Qcm92aWRlZCcpKTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRpZiAoY29udCkge1xuXHRcdFx0XHRcdFx0dm9pZCBzdWJtaXQoaWRzLCB0b0hpZGUuam9pbign44CBJyksIHJyZFJlYXNvbiA/PyAnJywgcnJkT3RoZXJSZWFzb25zID8/ICcnKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0sXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHR0ZXh0OiBnZXRNZXNzYWdlKCdkaWFsb2dCdXR0b25DYW5jZWwnKSxcblx0XHRcdFx0Y2xpY2soKTogdm9pZCB7XG5cdFx0XHRcdFx0JCh0aGlzKS5kaWFsb2coJ2Nsb3NlJyk7XG5cdFx0XHRcdH0sXG5cdFx0XHR9LFxu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T1JZX0FDVElPTiIsICJJU19XR19MT0dfTlMiLCAicnJkUGFnZSIsICJ2ZXJzaW9uIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgIl9fdG9FU00iLCAicmVxdWlyZSIsICJnZXRJMThuTWVzc2FnZXMiLCAid2dVTFMiLCAid2luZG93IiwgImVkaXRTdW1tYXJ5IiwgImVyck5vUmV2aXNpb25Qcm92aWRlZCIsICJlcnJOb0l0ZW1Qcm92aWRlZCIsICJ3YXJuTm9SZWFzb25Qcm92aWRlZCIsICJoaWRlSXRlbXMiLCAiaGlkZUNvbnRlbnQiLCAiaGlkZUxvZyIsICJoaWRlVXNlcm5hbWUiLCAiaGlkZVN1bW1hcnkiLCAiaGlkZVJlYXNvbiIsICJoaWRlUmVhc29uUkQxIiwgImhpZGVSZWFzb25SRDIiLCAiaGlkZVJlYXNvblJEMyIsICJoaWRlUmVhc29uUkQ0IiwgImhpZGVSZWFzb25SRDUiLCAiaGlkZVJlYXNvbk90aGVyIiwgIm90aGVyUmVhc29ucyIsICJkaWFsb2dUaXRsZSIsICJkaWFsb2dCdXR0b25TdWJtaXQiLCAiZGlhbG9nQnV0dG9uQ2FuY2VsIiwgInJlcG9ydEJ1dHRvblRpdGxlIiwgInJlcG9ydEJ1dHRvblRleHQiLCAicmVwb3J0QnV0dG9uTG9nVGV4dCIsICJpMThuTWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAiUmVwb3J0QnV0dG9uIiwgIm9uQ2xpY2siLCAiZGVmYXVsdCIsICJjcmVhdGVFbGVtZW50IiwgImNsYXNzTmFtZSIsICJuYW1lIiwgInR5cGUiLCAidGl0bGUiLCAiUmVwb3J0QnV0dG9uX2RlZmF1bHQiLCAiaW1wb3J0X2V4dF9nYWRnZXQ0IiwgImNoZWNrYm94ZXMiLCAib3RoZXJzIiwgInVwZGF0ZUNvbmZpZyIsICJfZG9jdW1lbnQkcXVlcnlTZWxlY3QiLCAiX2RvY3VtZW50JHF1ZXJ5U2VsZWN0MiIsICJfZG9jdW1lbnQkcXVlcnlTZWxlY3QzIiwgImNoZWNrQm94ZXMiLCAiZG9jdW1lbnQiLCAicXVlcnlTZWxlY3RvciIsICJjaGVja2VkIiwgInJyZEhpZGVDb250ZW50IiwgInJyZEhpZGVVc2VybmFtZSIsICJycmRIaWRlU3VtbWFyeSIsICJyZWFzb25JbnB1dCIsICJvdGhlclJlYXNvbnNJbnB1dCIsICJycmRSZWFzb24iLCAidmFsdWUiLCAicnJkT3RoZXJSZWFzb25zIiwgImltcG9ydF9leHRfZ2FkZ2V0MiIsICJEaWFsb2dJbm5lciIsICJpZCIsICJodG1sRm9yIiwgInJvd3MiLCAiRGlhbG9nSW5uZXJfZGVmYXVsdCIsICJsb2FkSWRzIiwgIiRib2R5IiwgImlkcyIsICJib3hlcyIsICJmaW5kIiwgIl9pdGVyYXRvcjIiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAiX3N0ZXAyIiwgInMiLCAibiIsICJkb25lIiwgImJveCIsICJpZFJlZ2V4IiwgImlkQXJyYXkiLCAiZXhlYyIsICJsZW5ndGgiLCAiZXJyIiwgImUiLCAiZiIsICJpbXBvcnRfZXh0X2dhZGdldDMiLCAiYXBpIiwgImluaXRNd0FwaSIsICJjb25jYXQiLCAic3VibWl0IiwgIl9yZWYiLCAiX2FzeW5jVG9HZW5lcmF0b3IiLCAiX2lkcyIsICJ0b0hpZGUiLCAicmVhc29uIiwgIlNldCIsICJycmRBcnIiLCAiX2l0ZXJhdG9yMyIsICJlbnRyaWVzIiwgIl9zdGVwMyIsICJpbmRleCIsICJfcmVzcG9uc2UkcXVlcnkiLCAicXVlcnlQYXJhbXMiLCAiYWN0aW9uIiwgImZvcm1hdCIsICJmb3JtYXR2ZXJzaW9uIiwgInRpdGxlcyIsICJwcm9wIiwgInJ2cHJvcCIsICJyZXNwb25zZSIsICJjb250ZW50IiwgInBhZ2VzIiwgInJldmlzaW9ucyIsICJub3RpZnkiLCAidGFnIiwgIl9yZXN1bHQkZWRpdCIsICJfcmVzdWx0JGVycm9yIiwgImVkaXRQYXJhbXMiLCAidGV4dCIsICJqb2luIiwgInN1bW1hcnkiLCAicmVzdWx0IiwgInBvc3RXaXRoRWRpdFRva2VuIiwgImxvY2F0aW9uIiwgInJlcGxhY2UiLCAidXRpbCIsICJnZXRVcmwiLCAiY29kZSIsICJfeCIsICJfeDIiLCAiX3gzIiwgIl94NCIsICJhcHBseSIsICJhcmd1bWVudHMiLCAiJGRpYWxvZyIsICJzaG93RGlhbG9nIiwgImRpYWxvZyIsICJodG1sIiwgIl9pIiwgIl9PYmplY3QkZW50cmllcyIsICJPYmplY3QiLCAidmFsIiwgIl9pMiIsICJfT2JqZWN0JGVudHJpZXMyIiwgIiQiLCAibWluV2lkdGgiLCAibWluSGVpZ2h0IiwgImNsb3NlIiwgImJ1dHRvbnMiLCAiY2xpY2siLCAiY29udCIsICJjb25maXJtIiwgIl9ycmRPdGhlclJlYXNvbnMiLCAiZ2V0Qm9keSIsICJ0aGVuIiwgInJyZCIsICJfaXRlcmF0b3I0IiwgIl9zdGVwNCIsICJlbGVtZW50IiwgImFmdGVyIl0KfQo=

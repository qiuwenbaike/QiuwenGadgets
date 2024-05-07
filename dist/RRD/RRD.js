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
//! src/RRD/modules/isSpecialLog.ts
var isSpecialLog = () => {
  const {
    wgCanonicalSpecialPageName
  } = mw.config.get();
  return wgCanonicalSpecialPageName === "Log";
};
//! src/RRD/components/ReportButton.tsx
var ReportButton = ({
  onClick
}) => /* @__PURE__ */ import_ext_gadget.default.createElement("button", {
  type: "button",
  className: ["reportrrd", "cdx-button", "cdx-button--weight-primary"],
  title: getMessage("reportButtonTitle") + rrdPage,
  onClick
}, isSpecialLog() ? getMessage("reportButtonLogText") : getMessage("reportButtonText"));
var ReportButton_default = ReportButton;
//! src/RRD/RRD.ts
var import_ext_gadget5 = require("ext.gadget.Util");
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
}, isSpecialLog() ? getMessage("hideLog") : getMessage("hideContent"))), /* @__PURE__ */ import_ext_gadget2.default.createElement("div", {
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
var import_ext_gadget4 = require("ext.gadget.Util");
var queryRevisions = /* @__PURE__ */ function() {
  var _ref = _asyncToGenerator(function* (titles) {
    const params = {
      action: "query",
      format: "json",
      formatversion: "2",
      titles,
      prop: "revisions",
      rvprop: "content"
    };
    const response = yield api.post(params);
    return response;
  });
  return function queryRevisions2(_x) {
    return _ref.apply(this, arguments);
  };
}();
var edit = /* @__PURE__ */ function() {
  var _ref2 = _asyncToGenerator(function* (title, text, summary) {
    const params = {
      action: "edit",
      format: "json",
      formatversion: "2",
      title,
      text
    };
    if (summary) {
      params.summary = summary;
    }
    const response = yield api.postWithEditToken(params);
    return response;
  });
  return function edit2(_x2, _x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
var submit = /* @__PURE__ */ function() {
  var _ref3 = _asyncToGenerator(function* (_ids, toHide, reason, otherReasons) {
    const ids = [...(0, import_ext_gadget4.uniqueArray)(_ids)];
    const {
      wgPageName
    } = mw.config.get();
    const rrdArr = ["{{Revdel", "|status = ", "|article = ".concat(wgPageName), "|set = ".concat(toHide), "|reason = ".concat(reason).concat(otherReasons)];
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
      const response = yield queryRevisions(rrdPage);
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
        const result = yield edit(rrdPage, "".concat(content, "\n\n").concat(rrdArr.join("\n")), getMessage("editSummary"));
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
  return function submit2(_x5, _x6, _x7, _x8) {
    return _ref3.apply(this, arguments);
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
          toHide[toHide.length] = isSpecialLog() ? getMessage("hideLog") : getMessage("hideContent");
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
void (0, import_ext_gadget5.getBody)().then(function rrd($body) {
  const {
    wgAction,
    wgCanonicalSpecialPageName
  } = mw.config.get();
  if (wgAction === "history" || wgCanonicalSpecialPageName === "Log") {
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
  }
});

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1JSRC9vcHRpb25zLmpzb24iLCAic3JjL1JSRC9jb21wb25lbnRzL1JlcG9ydEJ1dHRvbi50c3giLCAic3JjL1JSRC9tb2R1bGVzL2kxOG4udHMiLCAic3JjL1JSRC9tb2R1bGVzL2lzU3BlY2lhbExvZy50cyIsICJzcmMvUlJEL1JSRC50cyIsICJzcmMvUlJEL21vZHVsZXMvcnJkQ29uZmlnLnRzIiwgInNyYy9SUkQvY29tcG9uZW50cy9EaWFsb2dJbm5lci50c3giLCAic3JjL1JSRC9tb2R1bGVzL2xvYWRJZHMudHMiLCAic3JjL1JSRC9tb2R1bGVzL2FwaS50cyIsICJzcmMvUlJEL21vZHVsZXMvc3VibWl0LnRzIiwgInNyYy9SUkQvbW9kdWxlcy9zaG93RGlhbG9nLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJ7XG5cdFwicnJkUGFnZVwiOiBcIlFpdXdlbl90YWxrOueJiOacrOWIoOmZpOaPkOaKpVwiLFxuXHRcInZlcnNpb25cIjogXCIyLjBcIlxufVxuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCBSZWFjdCBmcm9tICdleHQuZ2FkZ2V0LlJlYWN0JztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi4vbW9kdWxlcy9pMThuJztcbmltcG9ydCB7aXNTcGVjaWFsTG9nfSBmcm9tICcuLi9tb2R1bGVzL2lzU3BlY2lhbExvZyc7XG5cbmludGVyZmFjZSBQcm9wcyB7XG5cdG9uQ2xpY2soKTogdm9pZDtcbn1cblxuY29uc3QgUmVwb3J0QnV0dG9uID0gKHtvbkNsaWNrfTogUHJvcHMpID0+IChcblx0PGJ1dHRvblxuXHRcdHR5cGU9eydidXR0b24nfVxuXHRcdGNsYXNzTmFtZT17WydyZXBvcnRycmQnLCAnY2R4LWJ1dHRvbicsICdjZHgtYnV0dG9uLS13ZWlnaHQtcHJpbWFyeSddfVxuXHRcdHRpdGxlPXtnZXRNZXNzYWdlKCdyZXBvcnRCdXR0b25UaXRsZScpICsgT1BUSU9OUy5ycmRQYWdlfVxuXHRcdG9uQ2xpY2s9e29uQ2xpY2t9XG5cdD5cblx0XHR7aXNTcGVjaWFsTG9nKCkgPyBnZXRNZXNzYWdlKCdyZXBvcnRCdXR0b25Mb2dUZXh0JykgOiBnZXRNZXNzYWdlKCdyZXBvcnRCdXR0b25UZXh0Jyl9XG5cdDwvYnV0dG9uPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgUmVwb3J0QnV0dG9uO1xuIiwgImNvbnN0IGdldEkxOG5NZXNzYWdlcyA9ICgpID0+IHtcblx0Y29uc3Qge3dnVUxTfSA9IHdpbmRvdztcblx0cmV0dXJuIHtcblx0XHRlZGl0U3VtbWFyeTogd2dVTFMoXG5cdFx0XHQnW1tNZWRpYVdpa2k6R2FkZ2V0LVJSRC5qc3zljYroh6rliqjmj5DmiqVdXeS/ruiuoueJiOacrOWIoOmZpCcsXG5cdFx0XHQnW1tNZWRpYVdpa2k6R2FkZ2V0LVJSRC5qc3zljYroh6rli5Xmj5DloLFdXeS/ruiogueJiOacrOWIqumZpCdcblx0XHQpLFxuXHRcdGVyck5vUmV2aXNpb25Qcm92aWRlZDogd2dVTFMoJ+aCqOayoeaciemAieaLqemcgOmakOiXj+eahOeJiOacrO+8gScsICfmgqjmspLmnInpgbjmk4fpnIDpmrHol4/nmoTniYjmnKzvvIEnKSxcblx0XHRlcnJOb0l0ZW1Qcm92aWRlZDogd2dVTFMoJ+aCqOayoeaciemAieaLqemcgOmakOiXj+eahOmhueebru+8gScsICfmgqjmspLmnInpgbjmk4fpnIDpmrHol4/nmoTpoIXnm67vvIEnKSxcblx0XHR3YXJuTm9SZWFzb25Qcm92aWRlZDogd2dVTFMoJ+aCqOayoeaciei+k+WFpeS7u+S9leeQhueUse+8geehruWumuimgee7p+e7reWQl++8nycsICfmgqjmspLmnInovLjlhaXku7vkvZXnkIbnlLHvvIHnorrlrpropoHnubznuozll47vvJ8nKSxcblx0XHRoaWRlSXRlbXM6IHdnVUxTKCfpnIDpmpDol4/nmoTpobnnm67vvJonLCAn6ZyA6Zqx6JeP55qE6aCF55uu77yaJyksXG5cdFx0aGlkZUNvbnRlbnQ6IHdnVUxTKCfnvJbovpHlhoXlrrknLCAn57eo6Lyv5YWn5a65JyksXG5cdFx0aGlkZUxvZzogd2dVTFMoJ+aXpeW/l+ebruagh+S4juWPguaVsCcsICfml6Xoqoznm67mqJnoiIflj4PmlbgnKSxcblx0XHRoaWRlVXNlcm5hbWU6IHdnVUxTKCfnvJbovpHogIXnlKjmiLflkI0vSVDlnLDlnYAnLCAn57eo6Lyv6ICF55So5oi25ZCNL0lQ5L2N5Z2AJyksXG5cdFx0aGlkZVN1bW1hcnk6IHdnVUxTKCfnvJbovpHmkZjopoEnLCAn57eo6Lyv5pGY6KaBJyksXG5cdFx0aGlkZVJlYXNvbjogd2dVTFMoJ+eQhuaNru+8micsICfnkIbmk5rvvJonKSxcblx0XHRoaWRlUmVhc29uUkQxOiB3Z1VMUygnUkQx77ya5p2h55uu5Lit5piO5pi+5L6154qv6JGX5L2c5p2D55qE5YaF5a65JywgJ1JEMe+8muaineebruS4reaYjumhr+S+teeKr+iRl+S9nOasiueahOWFp+WuuScpLFxuXHRcdGhpZGVSZWFzb25SRDI6IHdnVUxTKCdSRDLvvJrkuKXph43kvq7ovrHjgIHotKzkvY7miJbmlLvlh7vmgKfmlofmnKwnLCAnUkQy77ya5Zq06YeN5L6u6L6x44CB6LK25L2O5oiW5pS75pOK5oCn5paH5pysJyksXG5cdFx0aGlkZVJlYXNvblJEMzogd2dVTFMoJ1JEM++8mue6r+eyueaJsOS5seaAp+WGheWuuScsICfntJTnsrnmk77kuoLmgKflhaflrrknKSxcblx0XHRoaWRlUmVhc29uUkQ0OiB3Z1VMUygnUkQ077ya5piO5pi+6L+d5Y+N5rOV5b6L5rOV6KeE5oiW6L+d6IOM5YWs5bqP6Imv5L+X55qE5YaF5a65JywgJ1JENO+8muaYjumhr+mBleWPjeazleW+i+azleimj+aIlumBleiDjOWFrOW6j+iJr+S/l+eahOWFp+WuuScpLFxuXHRcdGhpZGVSZWFzb25SRDU6IHdnVUxTKCdSRDXvvJrlhbbku5bkuI3lrpzlhazlvIDnmoTniYjmnKzlhoXlrrknLCAnUkQ177ya5YW25LuW5LiN5a6c5YWs6ZaL55qE54mI5pys5YWn5a65JyksXG5cdFx0aGlkZVJlYXNvbk90aGVyOiB3Z1VMUygn5LuF5L2/55So5LiL5pa555qE6ZmE5Yqg55CG55SxJywgJ+WDheS9v+eUqOS4i+aWueeahOmZhOWKoOeQhueUsScpLFxuXHRcdG90aGVyUmVhc29uczogd2dVTFMoJ+mZhOWKoOeQhueUse+8iOWPr+mAie+8jOS4jeeUqOetvuWQje+8iScsICfpmYTliqDnkIbnlLHvvIjlj6/pgbjvvIzkuI3nlKjnsL3lkI3vvIknKSxcblx0XHRkaWFsb2dUaXRsZTogd2dVTFMoJ+aPkOaKpeS/ruiuoueJiOacrOWIoOmZpCcsICfmj5DloLHkv67oqILniYjmnKzliKrpmaQnKSxcblx0XHRkaWFsb2dCdXR0b25TdWJtaXQ6IHdnVUxTKCfmj5DmiqUnLCAn5o+Q5aCxJyksXG5cdFx0ZGlhbG9nQnV0dG9uQ2FuY2VsOiB3Z1VMUygn5Y+W5raIJywgJ+WPlua2iCcpLFxuXHRcdHJlcG9ydEJ1dHRvblRpdGxlOiB3Z1VMUygn5bCG6YCJ5Lit55qE54mI5pys5o+Q5oql5YiwJywgJ+Wwh+mBuOS4reeahOeJiOacrOaPkOWgseWIsCcpLFxuXHRcdHJlcG9ydEJ1dHRvblRleHQ6IHdnVUxTKCfor7fmsYLliKDpmaTooqvpgInniYjmnKwnLCAn6KuL5rGC5Yiq6Zmk6KKr6YG454mI5pysJyksXG5cdFx0cmVwb3J0QnV0dG9uTG9nVGV4dDogd2dVTFMoJ+ivt+axguWIoOmZpOiiq+mAieaXpeW/lycsICfoq4vmsYLliKrpmaTooqvpgbjml6XoqownKSxcblx0fTtcbn07XG5cbmNvbnN0IGkxOG5NZXNzYWdlcyA9IGdldEkxOG5NZXNzYWdlcygpO1xuXG5jb25zdCBnZXRNZXNzYWdlOiBHZXRNZXNzYWdlczx0eXBlb2YgaTE4bk1lc3NhZ2VzPiA9IChrZXkpID0+IHtcblx0cmV0dXJuIGkxOG5NZXNzYWdlc1trZXldIHx8IGtleTtcbn07XG5cbmV4cG9ydCB7Z2V0TWVzc2FnZX07XG4iLCAiY29uc3QgaXNTcGVjaWFsTG9nID0gKCkgPT4ge1xuXHRjb25zdCB7d2dDYW5vbmljYWxTcGVjaWFsUGFnZU5hbWV9ID0gbXcuY29uZmlnLmdldCgpO1xuXHRyZXR1cm4gd2dDYW5vbmljYWxTcGVjaWFsUGFnZU5hbWUgPT09ICdMb2cnO1xufTtcblxuZXhwb3J0IHtpc1NwZWNpYWxMb2d9O1xuIiwgImltcG9ydCBSZXBvcnRCdXR0b24gZnJvbSAnLi9jb21wb25lbnRzL1JlcG9ydEJ1dHRvbic7XG5pbXBvcnQge2dldEJvZHl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5pbXBvcnQge3Nob3dEaWFsb2d9IGZyb20gJy4vbW9kdWxlcy9zaG93RGlhbG9nJztcblxudm9pZCBnZXRCb2R5KCkudGhlbihmdW5jdGlvbiBycmQoJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KTogdm9pZCB7XG5cdGNvbnN0IHt3Z0FjdGlvbiwgd2dDYW5vbmljYWxTcGVjaWFsUGFnZU5hbWV9ID0gbXcuY29uZmlnLmdldCgpO1xuXG5cdGlmICh3Z0FjdGlvbiA9PT0gJ2hpc3RvcnknIHx8IHdnQ2Fub25pY2FsU3BlY2lhbFBhZ2VOYW1lID09PSAnTG9nJykge1xuXHRcdGZvciAoY29uc3QgZWxlbWVudCBvZiAkYm9keS5maW5kKFxuXHRcdFx0W1xuXHRcdFx0XHQnLmhpc3RvcnlzdWJtaXQubXctaGlzdG9yeS1jb21wYXJlc2VsZWN0ZWR2ZXJzaW9ucy1idXR0b24nLFxuXHRcdFx0XHQnLmVkaXRjaGFuZ2V0YWdzLWxvZy1zdWJtaXQubXctbG9nLWVkaXRjaGFuZ2V0YWdzLWJ1dHRvbicsXG5cdFx0XHRdLmpvaW4oJywnKVxuXHRcdCkpIHtcblx0XHRcdGVsZW1lbnQuYWZ0ZXIoXG5cdFx0XHRcdFJlcG9ydEJ1dHRvbih7XG5cdFx0XHRcdFx0b25DbGljazogKCk6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdFx0c2hvd0RpYWxvZygkYm9keSk7XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0fSlcblx0XHRcdCk7XG5cdFx0fVxuXHR9XG59KTtcbiIsICJpbXBvcnQgdHlwZSB7UnJkQ29uZmlnfSBmcm9tICcuL3R5cGVzJztcblxuY29uc3QgY29uZmlnOiBScmRDb25maWcgPSB7XG5cdGNoZWNrYm94ZXM6IHt9LFxuXHRvdGhlcnM6IHt9LFxufTtcblxuY29uc3QgdXBkYXRlQ29uZmlnID0gKCk6IHZvaWQgPT4ge1xuXHRjb25zdCBjaGVja0JveGVzOiBScmRDb25maWdbJ2NoZWNrYm94ZXMnXSA9IHt9O1xuXG5cdGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxJbnB1dEVsZW1lbnQ+KCcjcnJkX19oaWRlLWNvbnRlbnQnKT8uY2hlY2tlZCkge1xuXHRcdGNoZWNrQm94ZXMucnJkSGlkZUNvbnRlbnQgPSB0cnVlO1xuXHR9XG5cdGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxJbnB1dEVsZW1lbnQ+KCcjcnJkX19oaWRlLXVzZXJuYW1lJyk/LmNoZWNrZWQpIHtcblx0XHRjaGVja0JveGVzLnJyZEhpZGVVc2VybmFtZSA9IHRydWU7XG5cdH1cblx0aWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTElucHV0RWxlbWVudD4oJyNycmRfX2hpZGUtc3VtbWFyeScpPy5jaGVja2VkKSB7XG5cdFx0Y2hlY2tCb3hlcy5ycmRIaWRlU3VtbWFyeSA9IHRydWU7XG5cdH1cblxuXHRjb25maWcuY2hlY2tib3hlcyA9IGNoZWNrQm94ZXM7XG5cblx0Y29uc3Qgb3RoZXJzOiBScmRDb25maWdbJ290aGVycyddID0ge307XG5cblx0Y29uc3QgcmVhc29uSW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQgfCBudWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MSW5wdXRFbGVtZW50PignI3JyZF9fcmVhc29uJyk7XG5cdGNvbnN0IG90aGVyUmVhc29uc0lucHV0OiBIVE1MSW5wdXRFbGVtZW50IHwgbnVsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTElucHV0RWxlbWVudD4oJyNycmRfX290aGVyLXJlYXNvbnMnKTtcblx0aWYgKHJlYXNvbklucHV0KSB7XG5cdFx0b3RoZXJzLnJyZFJlYXNvbiA9IHJlYXNvbklucHV0LnZhbHVlO1xuXHR9XG5cdGlmIChvdGhlclJlYXNvbnNJbnB1dCkge1xuXHRcdG90aGVycy5ycmRPdGhlclJlYXNvbnMgPSBvdGhlclJlYXNvbnNJbnB1dC52YWx1ZTtcblx0fVxuXG5cdGNvbmZpZy5vdGhlcnMgPSBvdGhlcnM7XG59O1xuXG5leHBvcnQge2NvbmZpZywgdXBkYXRlQ29uZmlnfTtcbiIsICJpbXBvcnQgJy4vRGlhbG9nSW5uZXIubGVzcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAnZXh0LmdhZGdldC5SZWFjdCc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4uL21vZHVsZXMvaTE4bic7XG5pbXBvcnQge2lzU3BlY2lhbExvZ30gZnJvbSAnLi4vbW9kdWxlcy9pc1NwZWNpYWxMb2cnO1xuXG5jb25zdCBEaWFsb2dJbm5lciA9ICgpID0+IChcblx0PGRpdiBpZD1cInJyZF9fY29uZmlnXCI+XG5cdFx0e2dldE1lc3NhZ2UoJ2hpZGVJdGVtcycpfVxuXHRcdDxiciAvPlxuXHRcdDxkaXYgY2xhc3NOYW1lPVwicnJkX19jb250ZW50LXdyYXBwZXJcIj5cblx0XHRcdDxpbnB1dCBuYW1lPVwiY29udGVudFwiIGlkPVwicnJkX19oaWRlLWNvbnRlbnRcIiB0eXBlPVwiY2hlY2tib3hcIiB2YWx1ZT1cImNvbnRlbnRcIiBjaGVja2VkIC8+XG5cdFx0XHQ8bGFiZWwgaHRtbEZvcj1cInJyZF9faGlkZS1jb250ZW50XCIgaWQ9XCJycmQtY29udGVudFwiPlxuXHRcdFx0XHR7aXNTcGVjaWFsTG9nKCkgPyBnZXRNZXNzYWdlKCdoaWRlTG9nJykgOiBnZXRNZXNzYWdlKCdoaWRlQ29udGVudCcpfVxuXHRcdFx0PC9sYWJlbD5cblx0XHQ8L2Rpdj5cblx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJyZF9fY29udGVudC13cmFwcGVyXCI+XG5cdFx0XHQ8aW5wdXQgbmFtZT1cInVzZXJuYW1lXCIgaWQ9XCJycmRfX2hpZGUtdXNlcm5hbWVcIiB0eXBlPVwiY2hlY2tib3hcIiB2YWx1ZT1cInVzZXJuYW1lXCIgLz5cblx0XHRcdDxsYWJlbCBodG1sRm9yPVwicnJkX19oaWRlLXVzZXJuYW1lXCIgaWQ9XCJycmQtdXNlcm5hbWVcIj5cblx0XHRcdFx0e2dldE1lc3NhZ2UoJ2hpZGVVc2VybmFtZScpfVxuXHRcdFx0PC9sYWJlbD5cblx0XHQ8L2Rpdj5cblx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJyZF9fY29udGVudC13cmFwcGVyXCI+XG5cdFx0XHQ8aW5wdXQgbmFtZT1cInN1bW1hcnlcIiBpZD1cInJyZF9faGlkZS1zdW1tYXJ5XCIgdHlwZT1cImNoZWNrYm94XCIgdmFsdWU9XCJzdW1tYXJ5XCIgLz5cblx0XHRcdDxsYWJlbCBodG1sRm9yPVwicnJkX19oaWRlLXN1bW1hcnlcIiBpZD1cInJyZC1zdW1tYXJ5XCI+XG5cdFx0XHRcdHtnZXRNZXNzYWdlKCdoaWRlU3VtbWFyeScpfVxuXHRcdFx0PC9sYWJlbD5cblx0XHQ8L2Rpdj5cblx0XHQ8YnIgLz5cblx0XHQ8YnIgLz5cblx0XHR7Z2V0TWVzc2FnZSgnaGlkZVJlYXNvbicpfVxuXHRcdDxiciAvPlxuXHRcdDxzZWxlY3QgbmFtZT1cInJyZF9fcmVhc29uXCIgaWQ9XCJycmRfX3JlYXNvblwiPlxuXHRcdFx0PG9wdGlvbiB2YWx1ZT17Z2V0TWVzc2FnZSgnaGlkZVJlYXNvblJEMScpfT57Z2V0TWVzc2FnZSgnaGlkZVJlYXNvblJEMScpfTwvb3B0aW9uPlxuXHRcdFx0PG9wdGlvbiB2YWx1ZT17Z2V0TWVzc2FnZSgnaGlkZVJlYXNvblJEMicpfT57Z2V0TWVzc2FnZSgnaGlkZVJlYXNvblJEMicpfTwvb3B0aW9uPlxuXHRcdFx0PG9wdGlvbiB2YWx1ZT17Z2V0TWVzc2FnZSgnaGlkZVJlYXNvblJEMycpfT57Z2V0TWVzc2FnZSgnaGlkZVJlYXNvblJEMycpfTwvb3B0aW9uPlxuXHRcdFx0PG9wdGlvbiB2YWx1ZT17Z2V0TWVzc2FnZSgnaGlkZVJlYXNvblJENCcpfT57Z2V0TWVzc2FnZSgnaGlkZVJlYXNvblJENCcpfTwvb3B0aW9uPlxuXHRcdFx0PG9wdGlvbiB2YWx1ZT17Z2V0TWVzc2FnZSgnaGlkZVJlYXNvblJENScpfT57Z2V0TWVzc2FnZSgnaGlkZVJlYXNvblJENScpfTwvb3B0aW9uPlxuXHRcdFx0PG9wdGlvbiB2YWx1ZT1cIlwiPntnZXRNZXNzYWdlKCdoaWRlUmVhc29uT3RoZXInKX08L29wdGlvbj5cblx0XHQ8L3NlbGVjdD5cblx0XHQ8YnIgLz5cblx0XHQ8YnIgLz5cblx0XHR7Z2V0TWVzc2FnZSgnb3RoZXJSZWFzb25zJyl9XG5cdFx0PGJyIC8+XG5cdFx0PHRleHRhcmVhIG5hbWU9XCJvdGhlclJlYXNvbnNcIiBpZD1cInJyZF9fb3RoZXItcmVhc29uc1wiIHJvd3M9ezR9PjwvdGV4dGFyZWE+XG5cdDwvZGl2PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgRGlhbG9nSW5uZXI7XG4iLCAiY29uc3QgbG9hZElkcyA9ICgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiBzdHJpbmdbXSA9PiB7XG5cdGNvbnN0IGlkczogc3RyaW5nW10gPSBbXTtcblxuXHRjb25zdCBib3hlczogSlF1ZXJ5PEhUTUxJbnB1dEVsZW1lbnQ+ID0gJGJvZHkuZmluZCgnaW5wdXQnKTtcblx0Zm9yIChjb25zdCBib3ggb2YgYm94ZXMpIHtcblx0XHRjb25zdCB7Y2hlY2tlZCwgbmFtZSwgdHlwZX0gPSBib3g7XG5cblx0XHRpZiAodHlwZSAhPT0gJ2NoZWNrYm94JyB8fCAhY2hlY2tlZCkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0Y29uc3QgaWRSZWdleDogUmVnRXhwID0gL2lkc1xcWyhcXGQrKV0vO1xuXHRcdGNvbnN0IGlkQXJyYXk6IFJlZ0V4cEV4ZWNBcnJheSB8IG51bGwgPSBpZFJlZ2V4LmV4ZWMobmFtZSk7XG5cdFx0aWYgKGlkQXJyYXk/LlsxXSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRbLCBpZHNbaWRzLmxlbmd0aF1dID0gaWRBcnJheTtcblx0fVxuXG5cdHJldHVybiBpZHM7XG59O1xuXG5leHBvcnQge2xvYWRJZHN9O1xuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7aW5pdE13QXBpfSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG5jb25zdCBhcGk6IG13LkFwaSA9IGluaXRNd0FwaShgUlJELyR7T1BUSU9OUy52ZXJzaW9ufWApO1xuXG5leHBvcnQge2FwaX07XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHthcGl9IGZyb20gJy4vYXBpJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9pMThuJztcbmltcG9ydCB7dW5pcXVlQXJyYXl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmNvbnN0IHF1ZXJ5UmV2aXNpb25zID0gYXN5bmMgKHRpdGxlczogc3RyaW5nIHwgc3RyaW5nW10pID0+IHtcblx0Y29uc3QgcGFyYW1zID0ge1xuXHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0dGl0bGVzLFxuXHRcdHByb3A6ICdyZXZpc2lvbnMnLFxuXHRcdHJ2cHJvcDogJ2NvbnRlbnQnLFxuXHR9IGFzIGNvbnN0IHNhdGlzZmllcyBBcGlRdWVyeVJldmlzaW9uc1BhcmFtcztcblx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGkucG9zdChwYXJhbXMpO1xuXG5cdHJldHVybiByZXNwb25zZTtcbn07XG5cbmNvbnN0IGVkaXQgPSBhc3luYyAodGl0bGU6IHN0cmluZywgdGV4dDogc3RyaW5nLCBzdW1tYXJ5Pzogc3RyaW5nKSA9PiB7XG5cdGNvbnN0IHBhcmFtczogQXBpRWRpdFBhZ2VQYXJhbXMgPSB7XG5cdFx0YWN0aW9uOiAnZWRpdCcsXG5cdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdHRpdGxlLFxuXHRcdHRleHQsXG5cdH07XG5cdGlmIChzdW1tYXJ5KSB7XG5cdFx0cGFyYW1zLnN1bW1hcnkgPSBzdW1tYXJ5O1xuXHR9XG5cdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXBpLnBvc3RXaXRoRWRpdFRva2VuKHBhcmFtcyBhcyBuZXZlcik7XG5cblx0cmV0dXJuIHJlc3BvbnNlO1xufTtcblxuY29uc3Qgc3VibWl0ID0gYXN5bmMgKF9pZHM6IHN0cmluZ1tdLCB0b0hpZGU6IHN0cmluZywgcmVhc29uOiBzdHJpbmcsIG90aGVyUmVhc29uczogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiA9PiB7XG5cdC8vIGNvbnN0IGlkczogc3RyaW5nW10gPSBbLi4ubmV3IFNldChfaWRzKV07XG5cdGNvbnN0IGlkczogc3RyaW5nW10gPSBbLi4udW5pcXVlQXJyYXkoX2lkcyldO1xuXHRjb25zdCB7d2dQYWdlTmFtZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cblx0Y29uc3QgcnJkQXJyOiBzdHJpbmdbXSA9IFtcblx0XHQne3tSZXZkZWwnLFxuXHRcdCd8c3RhdHVzID0gJyxcblx0XHRgfGFydGljbGUgPSAke3dnUGFnZU5hbWV9YCxcblx0XHRgfHNldCA9ICR7dG9IaWRlfWAsXG5cdFx0YHxyZWFzb24gPSAke3JlYXNvbn0ke290aGVyUmVhc29uc31gLFxuXHRdO1xuXG5cdGZvciAoY29uc3QgW2luZGV4LCBpZF0gb2YgaWRzLmVudHJpZXMoKSkge1xuXHRcdHJyZEFycltycmRBcnIubGVuZ3RoXSA9IGB8aWQke2luZGV4ICsgMX0gPSAke2lkfWA7XG5cdH1cblx0cnJkQXJyW3JyZEFyci5sZW5ndGhdID0gJ319XFxuLS1+ficuY29uY2F0KCd+ficpO1xuXG5cdHRyeSB7XG5cdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBxdWVyeVJldmlzaW9ucyhPUFRJT05TLnJyZFBhZ2UpO1xuXG5cdFx0bGV0IGNvbnRlbnQ6IHN0cmluZyB8IHVuZGVmaW5lZDtcblx0XHRpZiAocmVzcG9uc2VbJ3F1ZXJ5J10/LnBhZ2VzKSB7XG5cdFx0XHRjb250ZW50ID0gcmVzcG9uc2VbJ3F1ZXJ5J10ucGFnZXNbMF0ucmV2aXNpb25zWzBdLmNvbnRlbnQgYXMgc3RyaW5nO1xuXHRcdH1cblxuXHRcdGlmIChjb250ZW50ID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHZvaWQgbXcubm90aWZ5KGBFcnJvciB3aGVuIGxvYWRpbmcgcGFnZSAke09QVElPTlMucnJkUGFnZX06IG1pc3NpbmdgLCB7XG5cdFx0XHRcdHRhZzogJ1JSRCcsXG5cdFx0XHRcdHR5cGU6ICdlcnJvcicsXG5cdFx0XHR9KTtcblxuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHRyeSB7XG5cdFx0XHRjb25zdCByZXN1bHQgPSBhd2FpdCBlZGl0KE9QVElPTlMucnJkUGFnZSwgYCR7Y29udGVudH1cXG5cXG4ke3JyZEFyci5qb2luKCdcXG4nKX1gLCBnZXRNZXNzYWdlKCdlZGl0U3VtbWFyeScpKTtcblxuXHRcdFx0aWYgKHJlc3VsdFsnZWRpdCddPy5yZXN1bHQgPT09ICdTdWNjZXNzJykge1xuXHRcdFx0XHRsb2NhdGlvbi5yZXBsYWNlKG13LnV0aWwuZ2V0VXJsKE9QVElPTlMucnJkUGFnZSkpO1xuXHRcdFx0fSBlbHNlIGlmIChyZXN1bHRbJ2Vycm9yJ10/LmNvZGUpIHtcblx0XHRcdFx0dm9pZCBtdy5ub3RpZnkoYFNvbWUgZXJyb3JzIG9jY3VyZWQgd2hpbGUgc2F2aW5nIHBhZ2U6ICR7cmVzdWx0WydlcnJvciddLmNvZGV9YCwge1xuXHRcdFx0XHRcdHRhZzogJ1JSRCcsXG5cdFx0XHRcdFx0dHlwZTogJ2Vycm9yJyxcblx0XHRcdFx0fSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR2b2lkIG13Lm5vdGlmeSgnU29tZSBlcnJvcnMgb2NjdXJlZCB3aGlsZSBzYXZpbmcgcGFnZTogdW5rbm93bicsIHtcblx0XHRcdFx0XHR0YWc6ICdSUkQnLFxuXHRcdFx0XHRcdHR5cGU6ICdlcnJvcicsXG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdH0gY2F0Y2gge1xuXHRcdFx0dm9pZCBtdy5ub3RpZnkoYEVycm9yIHdoZW4gZWRpdGluZyBwYWdlICR7T1BUSU9OUy5ycmRQYWdlfWAsIHt0YWc6ICdSUkQnLCB0eXBlOiAnZXJyb3InfSk7XG5cdFx0fVxuXHR9IGNhdGNoIHtcblx0XHR2b2lkIG13Lm5vdGlmeShgRXJyb3Igd2hlbiBsb2FkaW5nIHBhZ2UgJHtPUFRJT05TLnJyZFBhZ2V9YCwge3RhZzogJ1JSRCcsIHR5cGU6ICdlcnJvcid9KTtcblx0fVxufTtcblxuZXhwb3J0IHtzdWJtaXR9O1xuIiwgImltcG9ydCB7Y29uZmlnLCB1cGRhdGVDb25maWd9IGZyb20gJy4vcnJkQ29uZmlnJztcbmltcG9ydCBEaWFsb2dJbm5lciBmcm9tICcuLi9jb21wb25lbnRzL0RpYWxvZ0lubmVyJztcbmltcG9ydCBSZWFjdCBmcm9tICdleHQuZ2FkZ2V0LlJlYWN0JztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9pMThuJztcbmltcG9ydCB7aXNTcGVjaWFsTG9nfSBmcm9tICcuL2lzU3BlY2lhbExvZyc7XG5pbXBvcnQge2xvYWRJZHN9IGZyb20gJy4vbG9hZElkcyc7XG5pbXBvcnQge3N1Ym1pdH0gZnJvbSAnLi9zdWJtaXQnO1xuXG5sZXQgJGRpYWxvZzogSlF1ZXJ5IHwgdW5kZWZpbmVkO1xuXG5jb25zdCBzaG93RGlhbG9nID0gKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQgPT4ge1xuXHRjb25zdCBpZHM6IHN0cmluZ1tdID0gbG9hZElkcygkYm9keSk7XG5cdGlmICghaWRzLmxlbmd0aCkge1xuXHRcdHZvaWQgbXcubm90aWZ5KGdldE1lc3NhZ2UoJ2Vyck5vUmV2aXNpb25Qcm92aWRlZCcpLCB7XG5cdFx0XHR0YWc6ICdSUkQnLFxuXHRcdFx0dHlwZTogJ2Vycm9yJyxcblx0XHR9KTtcblxuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IGRpYWxvZzogUmVhY3QuUmVhY3RFbGVtZW50ID0gRGlhbG9nSW5uZXIoKTtcblx0aWYgKCRkaWFsb2cpIHtcblx0XHQkZGlhbG9nLmh0bWwoZGlhbG9nKS5kaWFsb2coJ29wZW4nKTtcblxuXHRcdGZvciAoY29uc3QgW2lkLCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMoY29uZmlnLm90aGVycykpIHtcblx0XHRcdCRib2R5LmZpbmQoYCMke2lkfWApLnZhbCh2YWx1ZSBhcyBzdHJpbmcpO1xuXHRcdH1cblx0XHRmb3IgKGNvbnN0IFtpZCwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKGNvbmZpZy5jaGVja2JveGVzKSkge1xuXHRcdFx0aWYgKHZhbHVlID09PSB0cnVlKSB7XG5cdFx0XHRcdCRib2R5LmZpbmQoYCMke2lkfWApLnByb3AoJ2NoZWNrZWQnLCB0cnVlKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm47XG5cdH1cblxuXHQkZGlhbG9nID0gJChkaWFsb2cpLmRpYWxvZyh7XG5cdFx0dGl0bGU6IGdldE1lc3NhZ2UoJ2RpYWxvZ1RpdGxlJyksXG5cdFx0bWluV2lkdGg6IDUxNSxcblx0XHRtaW5IZWlnaHQ6IDE1MCxcblx0XHRjbG9zZTogdXBkYXRlQ29uZmlnLFxuXHRcdGJ1dHRvbnM6IFtcblx0XHRcdHtcblx0XHRcdFx0dGV4dDogZ2V0TWVzc2FnZSgnZGlhbG9nQnV0dG9uU3VibWl0JyksXG5cdFx0XHRcdGNsaWNrKCk6IHZvaWQge1xuXHRcdFx0XHRcdCQodGhpcykuZGlhbG9nKCdjbG9zZScpO1xuXG5cdFx0XHRcdFx0Y29uc3Qge1xuXHRcdFx0XHRcdFx0Y2hlY2tib3hlczoge3JyZEhpZGVDb250ZW50LCBycmRIaWRlVXNlcm5hbWUsIHJyZEhpZGVTdW1tYXJ5fSxcblx0XHRcdFx0XHRcdG90aGVyczoge3JyZFJlYXNvbn0sXG5cdFx0XHRcdFx0fSA9IGNvbmZpZztcblxuXHRcdFx0XHRcdGxldCB7cnJkT3RoZXJSZWFzb25zfSA9IGNvbmZpZy5vdGhlcnM7XG5cdFx0XHRcdFx0aWYgKHJyZE90aGVyUmVhc29ucyAmJiBycmRSZWFzb24pIHtcblx0XHRcdFx0XHRcdHJyZE90aGVyUmVhc29ucyA9IGDvvIwke3JyZE90aGVyUmVhc29uc31gO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGNvbnN0IHRvSGlkZTogc3RyaW5nW10gPSBbXTtcblx0XHRcdFx0XHRpZiAocnJkSGlkZUNvbnRlbnQpIHtcblx0XHRcdFx0XHRcdHRvSGlkZVt0b0hpZGUubGVuZ3RoXSA9IGlzU3BlY2lhbExvZygpID8gZ2V0TWVzc2FnZSgnaGlkZUxvZycpIDogZ2V0TWVzc2FnZSgnaGlkZUNvbnRlbnQnKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKHJyZEhpZGVVc2VybmFtZSkge1xuXHRcdFx0XHRcdFx0dG9IaWRlW3RvSGlkZS5sZW5ndGhdID0gZ2V0TWVzc2FnZSgnaGlkZVVzZXJuYW1lJyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmIChycmRIaWRlU3VtbWFyeSkge1xuXHRcdFx0XHRcdFx0dG9IaWRlW3RvSGlkZS5sZW5ndGhdID0gZ2V0TWVzc2FnZSgnaGlkZVN1bW1hcnknKTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRpZiAoIXRvSGlkZS5sZW5ndGgpIHtcblx0XHRcdFx0XHRcdHZvaWQgbXcubm90aWZ5KGdldE1lc3NhZ2UoJ2Vyck5vSXRlbVByb3ZpZGVkJyksIHtcblx0XHRcdFx0XHRcdFx0dGFnOiAnUlJEJyxcblx0XHRcdFx0XHRcdFx0dHlwZTogJ2Vycm9yJyxcblx0XHRcdFx0XHRcdH0pO1xuXG5cdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0bGV0IGNvbnQ6IGJvb2xlYW4gPSB0cnVlO1xuXHRcdFx0XHRcdGlmICghcnJkUmVhc29uICYmICFycmRPdGhlclJlYXNvbnMpIHtcblx0XHRcdFx0XHRcdGNvbnQgPSBjb25maXJtKGdldE1lc3NhZ2UoJ3dhcm5Ob1JlYXNvblByb3ZpZGVkJykpO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGlmIChjb250KSB7XG5cdFx0XHRcdFx0XHR2b2lkIHN1Ym1pdChpZHMsIHRvSGlkZS5qb2luKCfjgIEnKSwgcnJkUmVhc29uID8/ICcnLCBycmRPdGhlclJlYXNvbnMgPz8gJycpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdHRleHQ6IGdldE1lc3NhZ2UoJ2RpYWxvZ0J1dHRvbkNhbmNlbCcpLFxuXHRcdFx0XHRjbGljaygpOiB2b2lkIHtcblx0XHRcdFx0XHQkKHRoaXMpLmRpYWxvZygnY2xvc2UnKTtcblx0XHRcdFx0fSxcblx0XHRcdH0sXG5cdFx0XSxcblx0fSk7XG59O1xuXG5leHBvcnQge3Nob3dEaWFsb2d9O1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQyxJQUFBQSxVQUFXO0FBQ1gsSUFBQUMsVUFBVzs7QUNEWixJQUFBQyxvQkFBa0JDLFFBQUFDLFFBQUEsa0JBQUEsR0FBQSxDQUFBOztBQ0RsQixJQUFNQyxrQkFBa0JBLE1BQU07QUFDN0IsUUFBTTtJQUFDQztFQUFLLElBQUlDO0FBQ2hCLFNBQU87SUFDTkMsYUFBYUYsTUFDWiwyQ0FDQSx5Q0FDRDtJQUNBRyx1QkFBdUJILE1BQU0sZ0JBQWdCLGNBQWM7SUFDM0RJLG1CQUFtQkosTUFBTSxnQkFBZ0IsY0FBYztJQUN2REssc0JBQXNCTCxNQUFNLHFCQUFxQixtQkFBbUI7SUFDcEVNLFdBQVdOLE1BQU0sV0FBVyxTQUFTO0lBQ3JDTyxhQUFhUCxNQUFNLFFBQVEsTUFBTTtJQUNqQ1EsU0FBU1IsTUFBTSxXQUFXLFNBQVM7SUFDbkNTLGNBQWNULE1BQU0sZUFBZSxhQUFhO0lBQ2hEVSxhQUFhVixNQUFNLFFBQVEsTUFBTTtJQUNqQ1csWUFBWVgsTUFBTSxPQUFPLEtBQUs7SUFDOUJZ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RzlFLGNBQUEsUUFBQUEsY0FBQSxTQUFBQSxZQUFhLEtBQUEwRyxtQkFBSXhHLHFCQUFBLFFBQUF3RyxxQkFBQSxTQUFBQSxtQkFBbUIsRUFBRTtRQUMxRTtNQUNEO0lBQ0QsR0FDQTtNQUNDdkQsTUFBTWxGLFdBQVcsb0JBQW9CO01BQ3JDc0ksUUFBYztBQUNiTCxVQUFFLElBQUksRUFBRVIsT0FBTyxPQUFPO01BQ3ZCO0lBQ0QsQ0FBQTtFQUVGLENBQUM7QUFDRjs7QU41RkEsTUFBQSxHQUFLMUcsbUJBQUEySCxTQUFRLEVBQUVDLEtBQUssU0FBU0MsSUFBSWxHLE9BQXNDO0FBQ3RFLFFBQU07SUFBQ21HO0lBQVUxSTtFQUEwQixJQUFJQyxHQUFHQyxPQUFPQyxJQUFJO0FBRTdELE1BQUl1SSxhQUFhLGFBQWExSSwrQkFBK0IsT0FBTztBQUFBLFFBQUEySSxhQUFBL0YsMkJBQzdDTCxNQUFNRyxLQUMzQixDQUNDLDREQUNBLHlEQUFBLEVBQ0NnRSxLQUFLLEdBQUcsQ0FDWCxDQUFBLEdBQUFrQztBQUFBLFFBQUE7QUFMQSxXQUFBRCxXQUFBN0YsRUFBQSxHQUFBLEVBQUE4RixTQUFBRCxXQUFBNUYsRUFBQSxHQUFBQyxRQUtHO0FBQUEsY0FMUTZGLFVBQUFELE9BQUEvRztBQU1WZ0gsZ0JBQVFDLE1BQ1BuSSxxQkFBYTtVQUNaTixTQUFTQSxNQUFZO0FBQ3BCZ0gsdUJBQVc5RSxLQUFLO1VBQ2pCO1FBQ0QsQ0FBQyxDQUNGO01BQ0Q7SUFBQSxTQUFBZSxLQUFBO0FBQUFxRixpQkFBQXBGLEVBQUFELEdBQUE7SUFBQSxVQUFBO0FBQUFxRixpQkFBQW5GLEVBQUE7SUFBQTtFQUNEO0FBQ0QsQ0FBQzsiLAogICJuYW1lcyI6IFsicnJkUGFnZSIsICJ2ZXJzaW9uIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgIl9fdG9FU00iLCAicmVxdWlyZSIsICJnZXRJMThuTWVzc2FnZXMiLCAid2dVTFMiLCAid2luZG93IiwgImVkaXRTdW1tYXJ5IiwgImVyck5vUmV2aXNpb25Qcm92aWRlZCIsICJlcnJOb0l0ZW1Qcm92aWRlZCIsICJ3YXJuTm9SZWFzb25Qcm92aWRlZCIsICJoaWRlSXRlbXMiLCAiaGlkZUNvbnRlbnQiLCAiaGlkZUxvZyIsICJoaWRlVXNlcm5hbWUiLCAiaGlkZVN1bW1hcnkiLCAiaGlkZVJlYXNvbiIsICJoaWRlUmVhc29uUkQxIiwgImhpZGVSZWFzb25SRDIiLCAiaGlkZVJlYXNvblJEMyIsICJoaWRlUmVhc29uUkQ0IiwgImhpZGVSZWFzb25SRDUiLCAiaGlkZVJlYXNvbk90aGVyIiwgIm90aGVyUmVhc29ucyIsICJkaWFsb2dUaXRsZSIsICJkaWFsb2dCdXR0b25TdWJtaXQiLCAiZGlhbG9nQnV0dG9uQ2FuY2VsIiwgInJlcG9ydEJ1dHRvblRpdGxlIiwgInJlcG9ydEJ1dHRvblRleHQiLCAicmVwb3J0QnV0dG9uTG9nVGV4dCIsICJpMThuTWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAiaXNTcGVjaWFsTG9nIiwgIndnQ2Fub25pY2FsU3BlY2lhbFBhZ2VOYW1lIiwgIm13IiwgImNvbmZpZyIsICJnZXQiLCAiUmVwb3J0QnV0dG9uIiwgIm9uQ2xpY2siLCAiZGVmYXVsdCIsICJjcmVhdGVFbGVtZW50IiwgInR5cGUiLCAiY2xhc3NOYW1lIiwgInRpdGxlIiwgIlJlcG9ydEJ1dHRvbl9kZWZhdWx0IiwgImltcG9ydF9leHRfZ2FkZ2V0NSIsICJjaGVja2JveGVzIiwgIm90aGVycyIsICJ1cGRhdGVDb25maWciLCAiX2RvY3VtZW50JHF1ZXJ5U2VsZWN0IiwgIl9kb2N1bWVudCRxdWVyeVNlbGVjdDIiLCAiX2RvY3VtZW50JHF1ZXJ5U2VsZWN0MyIsICJjaGVja0JveGVzIiwgImRvY3VtZW50IiwgInF1ZXJ5U2VsZWN0b3IiLCAiY2hlY2tlZCIsICJycmRIaWRlQ29udGVudCIsICJycmRIaWRlVXNlcm5hbWUiLCAicnJkSGlkZVN1bW1hcnkiLCAicmVhc29uSW5wdXQiLCAib3RoZXJSZWFzb25zSW5wdXQiLCAicnJkUmVhc29uIiwgInZhbHVlIiwgInJyZE90aGVyUmVhc29ucyIsICJpbXBvcnRfZXh0X2dhZGdldDIiLCAiRGlhbG9nSW5uZXIiLCAiaWQiLCAibmFtZSIsICJodG1sRm9yIiwgInJvd3MiLCAiRGlhbG9nSW5uZXJfZGVmYXVsdCIsICJsb2FkSWRzIiwgIiRib2R5IiwgImlkcyIsICJib3hlcyIsICJmaW5kIiwgIl9pdGVyYXRvcjIiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAiX3N0ZXAyIiwgInMiLCAibiIsICJkb25lIiwgImJveCIsICJpZFJlZ2V4IiwgImlkQXJyYXkiLCAiZXhlYyIsICJsZW5ndGgiLCAiZXJyIiwgImUiLCAiZiIsICJpbXBvcnRfZXh0X2dhZGdldDMiLCAiYXBpIiwgImluaXRNd0FwaSIsICJjb25jYXQiLCAiaW1wb3J0X2V4dF9nYWRnZXQ0IiwgInF1ZXJ5UmV2aXNpb25zIiwgIl9yZWYiLCAiX2FzeW5jVG9HZW5lcmF0b3IiLCAidGl0bGVzIiwgInBhcmFtcyIsICJhY3Rpb24iLCAiZm9ybWF0IiwgImZvcm1hdHZlcnNpb24iLCAicHJvcCIsICJydnByb3AiLCAicmVzcG9uc2UiLCAicG9zdCIsICJfeCIsICJhcHBseSIsICJhcmd1bWVudHMiLCAiZWRpdCIsICJfcmVmMiIsICJ0ZXh0IiwgInN1bW1hcnkiLCAicG9zdFdpdGhFZGl0VG9rZW4iLCAiX3gyIiwgIl94MyIsICJfeDQiLCAic3VibWl0IiwgIl9yZWYzIiwgIl9pZHMiLCAidG9IaWRlIiwgInJlYXNvbiIsICJ1bmlxdWVBcnJheSIsICJ3Z1BhZ2VOYW1lIiwgInJyZEFyciIsICJfaXRlcmF0b3IzIiwgImVudHJpZXMiLCAiX3N0ZXAzIiwgImluZGV4IiwgIl9yZXNwb25zZSRxdWVyeSIsICJjb250ZW50IiwgInBhZ2VzIiwgInJldmlzaW9ucyIsICJub3RpZnkiLCAidGFnIiwgIl9yZXN1bHQkZWRpdCIsICJfcmVzdWx0JGVycm9yIiwgInJlc3VsdCIsICJqb2luIiwgImxvY2F0aW9uIiwgInJlcGxhY2UiLCAidXRpbCIsICJnZXRVcmwiLCAiY29kZSIsICJfeDUiLCAiX3g2IiwgIl94NyIsICJfeDgiLCAiJGRpYWxvZyIsICJzaG93RGlhbG9nIiwgImRpYWxvZyIsICJodG1sIiwgIl9pIiwgIl9PYmplY3QkZW50cmllcyIsICJPYmplY3QiLCAidmFsIiwgIl9pMiIsICJfT2JqZWN0JGVudHJpZXMyIiwgIiQiLCAibWluV2lkdGgiLCAibWluSGVpZ2h0IiwgImNsb3NlIiwgImJ1dHRvbnMiLCAiY2xpY2siLCAiY29udCIsICJjb25maXJtIiwgIl9ycmRPdGhlclJlYXNvbnMiLCAiZ2V0Qm9keSIsICJ0aGVuIiwgInJyZCIsICJ3Z0FjdGlvbiIsICJfaXRlcmF0b3I0IiwgIl9zdGVwNCIsICJlbGVtZW50IiwgImFmdGVyIl0KfQo=

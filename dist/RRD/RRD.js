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
function asyncGeneratorStep(n, t, e, r, o, a, c) {
  try {
    var i = n[a](c), u = i.value;
  } catch (n2) {
    return void e(n2);
  }
  i.done ? t(u) : Promise.resolve(u).then(r, o);
}
function _asyncToGenerator(n) {
  return function() {
    var t = this, e = arguments;
    return new Promise(function(r, o) {
      var a = n.apply(t, e);
      function _next(n2) {
        asyncGeneratorStep(a, r, o, _next, _throw, "next", n2);
      }
      function _throw(n2) {
        asyncGeneratorStep(a, r, o, _next, _throw, "throw", n2);
      }
      _next(void 0);
    });
  };
}
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
        if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
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
      titles,
      action: "query",
      format: "json",
      formatversion: "2",
      prop: "revisions",
      rvprop: "content"
    };
    const response = yield api.get(params);
    return response;
  });
  return function queryRevisions2(_x) {
    return _ref.apply(this, arguments);
  };
}();
var edit = /* @__PURE__ */ function() {
  var _ref2 = _asyncToGenerator(function* (title, text, summary) {
    const params = {
      title,
      text,
      action: "edit",
      format: "json",
      formatversion: "2"
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
  var _ref3 = _asyncToGenerator(function* (ids, toHide, reason, otherReasons) {
    const {
      wgPageName
    } = mw.config.get();
    const rrdArr = ["{{Revdel", "|status = ", "|article = ".concat(wgPageName), "|set = ".concat(toHide), "|reason = ".concat(reason).concat(otherReasons)];
    var _iterator3 = _createForOfIteratorHelper((0, import_ext_gadget4.uniqueArray)(ids).entries()), _step3;
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1JSRC9vcHRpb25zLmpzb24iLCAic3JjL1JSRC9jb21wb25lbnRzL1JlcG9ydEJ1dHRvbi50c3giLCAic3JjL1JSRC9tb2R1bGVzL2kxOG4udHMiLCAic3JjL1JSRC9tb2R1bGVzL2lzU3BlY2lhbExvZy50cyIsICJzcmMvUlJEL1JSRC50cyIsICJzcmMvUlJEL21vZHVsZXMvcnJkQ29uZmlnLnRzIiwgInNyYy9SUkQvY29tcG9uZW50cy9EaWFsb2dJbm5lci50c3giLCAic3JjL1JSRC9tb2R1bGVzL2xvYWRJZHMudHMiLCAic3JjL1JSRC9tb2R1bGVzL2FwaS50cyIsICJzcmMvUlJEL21vZHVsZXMvc3VibWl0LnRzIiwgInNyYy9SUkQvbW9kdWxlcy9zaG93RGlhbG9nLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJ7XG5cdFwicnJkUGFnZVwiOiBcIlFpdXdlbl90YWxrOueJiOacrOWIoOmZpOaPkOaKpVwiLFxuXHRcInZlcnNpb25cIjogXCIyLjBcIlxufVxuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCBSZWFjdCBmcm9tICdleHQuZ2FkZ2V0LlJlYWN0JztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi4vbW9kdWxlcy9pMThuJztcbmltcG9ydCB7aXNTcGVjaWFsTG9nfSBmcm9tICcuLi9tb2R1bGVzL2lzU3BlY2lhbExvZyc7XG5cbmludGVyZmFjZSBQcm9wcyB7XG5cdG9uQ2xpY2soKTogdm9pZDtcbn1cblxuY29uc3QgUmVwb3J0QnV0dG9uID0gKHtvbkNsaWNrfTogUHJvcHMpID0+IChcblx0PGJ1dHRvblxuXHRcdHR5cGU9eydidXR0b24nfVxuXHRcdGNsYXNzTmFtZT17WydyZXBvcnRycmQnLCAnY2R4LWJ1dHRvbicsICdjZHgtYnV0dG9uLS13ZWlnaHQtcHJpbWFyeSddfVxuXHRcdHRpdGxlPXtnZXRNZXNzYWdlKCdyZXBvcnRCdXR0b25UaXRsZScpICsgT1BUSU9OUy5ycmRQYWdlfVxuXHRcdG9uQ2xpY2s9e29uQ2xpY2t9XG5cdD5cblx0XHR7aXNTcGVjaWFsTG9nKCkgPyBnZXRNZXNzYWdlKCdyZXBvcnRCdXR0b25Mb2dUZXh0JykgOiBnZXRNZXNzYWdlKCdyZXBvcnRCdXR0b25UZXh0Jyl9XG5cdDwvYnV0dG9uPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgUmVwb3J0QnV0dG9uO1xuIiwgImNvbnN0IGdldEkxOG5NZXNzYWdlcyA9ICgpID0+IHtcblx0Y29uc3Qge3dnVUxTfSA9IHdpbmRvdztcblx0cmV0dXJuIHtcblx0XHRlZGl0U3VtbWFyeTogd2dVTFMoXG5cdFx0XHQnW1tNZWRpYVdpa2k6R2FkZ2V0LVJSRC5qc3zljYroh6rliqjmj5DmiqVdXeS/ruiuoueJiOacrOWIoOmZpCcsXG5cdFx0XHQnW1tNZWRpYVdpa2k6R2FkZ2V0LVJSRC5qc3zljYroh6rli5Xmj5DloLFdXeS/ruiogueJiOacrOWIqumZpCdcblx0XHQpLFxuXHRcdGVyck5vUmV2aXNpb25Qcm92aWRlZDogd2dVTFMoJ+aCqOayoeaciemAieaLqemcgOmakOiXj+eahOeJiOacrO+8gScsICfmgqjmspLmnInpgbjmk4fpnIDpmrHol4/nmoTniYjmnKzvvIEnKSxcblx0XHRlcnJOb0l0ZW1Qcm92aWRlZDogd2dVTFMoJ+aCqOayoeaciemAieaLqemcgOmakOiXj+eahOmhueebru+8gScsICfmgqjmspLmnInpgbjmk4fpnIDpmrHol4/nmoTpoIXnm67vvIEnKSxcblx0XHR3YXJuTm9SZWFzb25Qcm92aWRlZDogd2dVTFMoJ+aCqOayoeaciei+k+WFpeS7u+S9leeQhueUse+8geehruWumuimgee7p+e7reWQl++8nycsICfmgqjmspLmnInovLjlhaXku7vkvZXnkIbnlLHvvIHnorrlrpropoHnubznuozll47vvJ8nKSxcblx0XHRoaWRlSXRlbXM6IHdnVUxTKCfpnIDpmpDol4/nmoTpobnnm67vvJonLCAn6ZyA6Zqx6JeP55qE6aCF55uu77yaJyksXG5cdFx0aGlkZUNvbnRlbnQ6IHdnVUxTKCfnvJbovpHlhoXlrrknLCAn57eo6Lyv5YWn5a65JyksXG5cdFx0aGlkZUxvZzogd2dVTFMoJ+aXpeW/l+ebruagh+S4juWPguaVsCcsICfml6Xoqoznm67mqJnoiIflj4PmlbgnKSxcblx0XHRoaWRlVXNlcm5hbWU6IHdnVUxTKCfnvJbovpHogIXnlKjmiLflkI0vSVDlnLDlnYAnLCAn57eo6Lyv6ICF55So5oi25ZCNL0lQ5L2N5Z2AJyksXG5cdFx0aGlkZVN1bW1hcnk6IHdnVUxTKCfnvJbovpHmkZjopoEnLCAn57eo6Lyv5pGY6KaBJyksXG5cdFx0aGlkZVJlYXNvbjogd2dVTFMoJ+eQhuaNru+8micsICfnkIbmk5rvvJonKSxcblx0XHRoaWRlUmVhc29uUkQxOiB3Z1VMUygnUkQx77ya5p2h55uu5Lit5piO5pi+5L6154qv6JGX5L2c5p2D55qE5YaF5a65JywgJ1JEMe+8muaineebruS4reaYjumhr+S+teeKr+iRl+S9nOasiueahOWFp+WuuScpLFxuXHRcdGhpZGVSZWFzb25SRDI6IHdnVUxTKCdSRDLvvJrkuKXph43kvq7ovrHjgIHotKzkvY7miJbmlLvlh7vmgKfmlofmnKwnLCAnUkQy77ya5Zq06YeN5L6u6L6x44CB6LK25L2O5oiW5pS75pOK5oCn5paH5pysJyksXG5cdFx0aGlkZVJlYXNvblJEMzogd2dVTFMoJ1JEM++8mue6r+eyueaJsOS5seaAp+WGheWuuScsICfntJTnsrnmk77kuoLmgKflhaflrrknKSxcblx0XHRoaWRlUmVhc29uUkQ0OiB3Z1VMUygnUkQ077ya5piO5pi+6L+d5Y+N5rOV5b6L5rOV6KeE5oiW6L+d6IOM5YWs5bqP6Imv5L+X55qE5YaF5a65JywgJ1JENO+8muaYjumhr+mBleWPjeazleW+i+azleimj+aIlumBleiDjOWFrOW6j+iJr+S/l+eahOWFp+WuuScpLFxuXHRcdGhpZGVSZWFzb25SRDU6IHdnVUxTKCdSRDXvvJrlhbbku5bkuI3lrpzlhazlvIDnmoTniYjmnKzlhoXlrrknLCAnUkQ177ya5YW25LuW5LiN5a6c5YWs6ZaL55qE54mI5pys5YWn5a65JyksXG5cdFx0aGlkZVJlYXNvbk90aGVyOiB3Z1VMUygn5LuF5L2/55So5LiL5pa555qE6ZmE5Yqg55CG55SxJywgJ+WDheS9v+eUqOS4i+aWueeahOmZhOWKoOeQhueUsScpLFxuXHRcdG90aGVyUmVhc29uczogd2dVTFMoJ+mZhOWKoOeQhueUse+8iOWPr+mAie+8jOS4jeeUqOetvuWQje+8iScsICfpmYTliqDnkIbnlLHvvIjlj6/pgbjvvIzkuI3nlKjnsL3lkI3vvIknKSxcblx0XHRkaWFsb2dUaXRsZTogd2dVTFMoJ+aPkOaKpeS/ruiuoueJiOacrOWIoOmZpCcsICfmj5DloLHkv67oqILniYjmnKzliKrpmaQnKSxcblx0XHRkaWFsb2dCdXR0b25TdWJtaXQ6IHdnVUxTKCfmj5DmiqUnLCAn5o+Q5aCxJyksXG5cdFx0ZGlhbG9nQnV0dG9uQ2FuY2VsOiB3Z1VMUygn5Y+W5raIJywgJ+WPlua2iCcpLFxuXHRcdHJlcG9ydEJ1dHRvblRpdGxlOiB3Z1VMUygn5bCG6YCJ5Lit55qE54mI5pys5o+Q5oql5YiwJywgJ+Wwh+mBuOS4reeahOeJiOacrOaPkOWgseWIsCcpLFxuXHRcdHJlcG9ydEJ1dHRvblRleHQ6IHdnVUxTKCfor7fmsYLliKDpmaTooqvpgInniYjmnKwnLCAn6KuL5rGC5Yiq6Zmk6KKr6YG454mI5pysJyksXG5cdFx0cmVwb3J0QnV0dG9uTG9nVGV4dDogd2dVTFMoJ+ivt+axguWIoOmZpOiiq+mAieaXpeW/lycsICfoq4vmsYLliKrpmaTooqvpgbjml6XoqownKSxcblx0fTtcbn07XG5cbmNvbnN0IGkxOG5NZXNzYWdlcyA9IGdldEkxOG5NZXNzYWdlcygpO1xuXG5jb25zdCBnZXRNZXNzYWdlOiBHZXRNZXNzYWdlczx0eXBlb2YgaTE4bk1lc3NhZ2VzPiA9IChrZXkpID0+IHtcblx0cmV0dXJuIGkxOG5NZXNzYWdlc1trZXldIHx8IGtleTtcbn07XG5cbmV4cG9ydCB7Z2V0TWVzc2FnZX07XG4iLCAiY29uc3QgaXNTcGVjaWFsTG9nID0gKCkgPT4ge1xuXHRjb25zdCB7d2dDYW5vbmljYWxTcGVjaWFsUGFnZU5hbWV9ID0gbXcuY29uZmlnLmdldCgpO1xuXHRyZXR1cm4gd2dDYW5vbmljYWxTcGVjaWFsUGFnZU5hbWUgPT09ICdMb2cnO1xufTtcblxuZXhwb3J0IHtpc1NwZWNpYWxMb2d9O1xuIiwgImltcG9ydCBSZXBvcnRCdXR0b24gZnJvbSAnLi9jb21wb25lbnRzL1JlcG9ydEJ1dHRvbic7XG5pbXBvcnQge2dldEJvZHl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5pbXBvcnQge3Nob3dEaWFsb2d9IGZyb20gJy4vbW9kdWxlcy9zaG93RGlhbG9nJztcblxudm9pZCBnZXRCb2R5KCkudGhlbihmdW5jdGlvbiBycmQoJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KTogdm9pZCB7XG5cdGNvbnN0IHt3Z0FjdGlvbiwgd2dDYW5vbmljYWxTcGVjaWFsUGFnZU5hbWV9ID0gbXcuY29uZmlnLmdldCgpO1xuXG5cdGlmICh3Z0FjdGlvbiA9PT0gJ2hpc3RvcnknIHx8IHdnQ2Fub25pY2FsU3BlY2lhbFBhZ2VOYW1lID09PSAnTG9nJykge1xuXHRcdGZvciAoY29uc3QgZWxlbWVudCBvZiAkYm9keS5maW5kKFxuXHRcdFx0W1xuXHRcdFx0XHQnLmhpc3RvcnlzdWJtaXQubXctaGlzdG9yeS1jb21wYXJlc2VsZWN0ZWR2ZXJzaW9ucy1idXR0b24nLFxuXHRcdFx0XHQnLmVkaXRjaGFuZ2V0YWdzLWxvZy1zdWJtaXQubXctbG9nLWVkaXRjaGFuZ2V0YWdzLWJ1dHRvbicsXG5cdFx0XHRdLmpvaW4oJywnKVxuXHRcdCkpIHtcblx0XHRcdGVsZW1lbnQuYWZ0ZXIoXG5cdFx0XHRcdFJlcG9ydEJ1dHRvbih7XG5cdFx0XHRcdFx0b25DbGljazogKCk6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdFx0c2hvd0RpYWxvZygkYm9keSk7XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0fSlcblx0XHRcdCk7XG5cdFx0fVxuXHR9XG59KTtcbiIsICJpbXBvcnQgdHlwZSB7UnJkQ29uZmlnfSBmcm9tICcuL3R5cGVzJztcblxuY29uc3QgY29uZmlnOiBScmRDb25maWcgPSB7XG5cdGNoZWNrYm94ZXM6IHt9LFxuXHRvdGhlcnM6IHt9LFxufTtcblxuY29uc3QgdXBkYXRlQ29uZmlnID0gKCk6IHZvaWQgPT4ge1xuXHRjb25zdCBjaGVja0JveGVzOiBScmRDb25maWdbJ2NoZWNrYm94ZXMnXSA9IHt9O1xuXG5cdGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxJbnB1dEVsZW1lbnQ+KCcjcnJkX19oaWRlLWNvbnRlbnQnKT8uY2hlY2tlZCkge1xuXHRcdGNoZWNrQm94ZXMucnJkSGlkZUNvbnRlbnQgPSB0cnVlO1xuXHR9XG5cdGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxJbnB1dEVsZW1lbnQ+KCcjcnJkX19oaWRlLXVzZXJuYW1lJyk/LmNoZWNrZWQpIHtcblx0XHRjaGVja0JveGVzLnJyZEhpZGVVc2VybmFtZSA9IHRydWU7XG5cdH1cblx0aWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTElucHV0RWxlbWVudD4oJyNycmRfX2hpZGUtc3VtbWFyeScpPy5jaGVja2VkKSB7XG5cdFx0Y2hlY2tCb3hlcy5ycmRIaWRlU3VtbWFyeSA9IHRydWU7XG5cdH1cblxuXHRjb25maWcuY2hlY2tib3hlcyA9IGNoZWNrQm94ZXM7XG5cblx0Y29uc3Qgb3RoZXJzOiBScmRDb25maWdbJ290aGVycyddID0ge307XG5cblx0Y29uc3QgcmVhc29uSW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQgfCBudWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MSW5wdXRFbGVtZW50PignI3JyZF9fcmVhc29uJyk7XG5cdGNvbnN0IG90aGVyUmVhc29uc0lucHV0OiBIVE1MSW5wdXRFbGVtZW50IHwgbnVsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTElucHV0RWxlbWVudD4oJyNycmRfX290aGVyLXJlYXNvbnMnKTtcblx0aWYgKHJlYXNvbklucHV0KSB7XG5cdFx0b3RoZXJzLnJyZFJlYXNvbiA9IHJlYXNvbklucHV0LnZhbHVlO1xuXHR9XG5cdGlmIChvdGhlclJlYXNvbnNJbnB1dCkge1xuXHRcdG90aGVycy5ycmRPdGhlclJlYXNvbnMgPSBvdGhlclJlYXNvbnNJbnB1dC52YWx1ZTtcblx0fVxuXG5cdGNvbmZpZy5vdGhlcnMgPSBvdGhlcnM7XG59O1xuXG5leHBvcnQge2NvbmZpZywgdXBkYXRlQ29uZmlnfTtcbiIsICJpbXBvcnQgJy4vRGlhbG9nSW5uZXIubGVzcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAnZXh0LmdhZGdldC5SZWFjdCc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4uL21vZHVsZXMvaTE4bic7XG5pbXBvcnQge2lzU3BlY2lhbExvZ30gZnJvbSAnLi4vbW9kdWxlcy9pc1NwZWNpYWxMb2cnO1xuXG5jb25zdCBEaWFsb2dJbm5lciA9ICgpID0+IChcblx0PGRpdiBpZD1cInJyZF9fY29uZmlnXCI+XG5cdFx0e2dldE1lc3NhZ2UoJ2hpZGVJdGVtcycpfVxuXHRcdDxiciAvPlxuXHRcdDxkaXYgY2xhc3NOYW1lPVwicnJkX19jb250ZW50LXdyYXBwZXJcIj5cblx0XHRcdDxpbnB1dCBuYW1lPVwiY29udGVudFwiIGlkPVwicnJkX19oaWRlLWNvbnRlbnRcIiB0eXBlPVwiY2hlY2tib3hcIiB2YWx1ZT1cImNvbnRlbnRcIiBjaGVja2VkIC8+XG5cdFx0XHQ8bGFiZWwgaHRtbEZvcj1cInJyZF9faGlkZS1jb250ZW50XCIgaWQ9XCJycmQtY29udGVudFwiPlxuXHRcdFx0XHR7aXNTcGVjaWFsTG9nKCkgPyBnZXRNZXNzYWdlKCdoaWRlTG9nJykgOiBnZXRNZXNzYWdlKCdoaWRlQ29udGVudCcpfVxuXHRcdFx0PC9sYWJlbD5cblx0XHQ8L2Rpdj5cblx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJyZF9fY29udGVudC13cmFwcGVyXCI+XG5cdFx0XHQ8aW5wdXQgbmFtZT1cInVzZXJuYW1lXCIgaWQ9XCJycmRfX2hpZGUtdXNlcm5hbWVcIiB0eXBlPVwiY2hlY2tib3hcIiB2YWx1ZT1cInVzZXJuYW1lXCIgLz5cblx0XHRcdDxsYWJlbCBodG1sRm9yPVwicnJkX19oaWRlLXVzZXJuYW1lXCIgaWQ9XCJycmQtdXNlcm5hbWVcIj5cblx0XHRcdFx0e2dldE1lc3NhZ2UoJ2hpZGVVc2VybmFtZScpfVxuXHRcdFx0PC9sYWJlbD5cblx0XHQ8L2Rpdj5cblx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJyZF9fY29udGVudC13cmFwcGVyXCI+XG5cdFx0XHQ8aW5wdXQgbmFtZT1cInN1bW1hcnlcIiBpZD1cInJyZF9faGlkZS1zdW1tYXJ5XCIgdHlwZT1cImNoZWNrYm94XCIgdmFsdWU9XCJzdW1tYXJ5XCIgLz5cblx0XHRcdDxsYWJlbCBodG1sRm9yPVwicnJkX19oaWRlLXN1bW1hcnlcIiBpZD1cInJyZC1zdW1tYXJ5XCI+XG5cdFx0XHRcdHtnZXRNZXNzYWdlKCdoaWRlU3VtbWFyeScpfVxuXHRcdFx0PC9sYWJlbD5cblx0XHQ8L2Rpdj5cblx0XHQ8YnIgLz5cblx0XHQ8YnIgLz5cblx0XHR7Z2V0TWVzc2FnZSgnaGlkZVJlYXNvbicpfVxuXHRcdDxiciAvPlxuXHRcdDxzZWxlY3QgbmFtZT1cInJyZF9fcmVhc29uXCIgaWQ9XCJycmRfX3JlYXNvblwiPlxuXHRcdFx0PG9wdGlvbiB2YWx1ZT17Z2V0TWVzc2FnZSgnaGlkZVJlYXNvblJEMScpfT57Z2V0TWVzc2FnZSgnaGlkZVJlYXNvblJEMScpfTwvb3B0aW9uPlxuXHRcdFx0PG9wdGlvbiB2YWx1ZT17Z2V0TWVzc2FnZSgnaGlkZVJlYXNvblJEMicpfT57Z2V0TWVzc2FnZSgnaGlkZVJlYXNvblJEMicpfTwvb3B0aW9uPlxuXHRcdFx0PG9wdGlvbiB2YWx1ZT17Z2V0TWVzc2FnZSgnaGlkZVJlYXNvblJEMycpfT57Z2V0TWVzc2FnZSgnaGlkZVJlYXNvblJEMycpfTwvb3B0aW9uPlxuXHRcdFx0PG9wdGlvbiB2YWx1ZT17Z2V0TWVzc2FnZSgnaGlkZVJlYXNvblJENCcpfT57Z2V0TWVzc2FnZSgnaGlkZVJlYXNvblJENCcpfTwvb3B0aW9uPlxuXHRcdFx0PG9wdGlvbiB2YWx1ZT17Z2V0TWVzc2FnZSgnaGlkZVJlYXNvblJENScpfT57Z2V0TWVzc2FnZSgnaGlkZVJlYXNvblJENScpfTwvb3B0aW9uPlxuXHRcdFx0PG9wdGlvbiB2YWx1ZT1cIlwiPntnZXRNZXNzYWdlKCdoaWRlUmVhc29uT3RoZXInKX08L29wdGlvbj5cblx0XHQ8L3NlbGVjdD5cblx0XHQ8YnIgLz5cblx0XHQ8YnIgLz5cblx0XHR7Z2V0TWVzc2FnZSgnb3RoZXJSZWFzb25zJyl9XG5cdFx0PGJyIC8+XG5cdFx0PHRleHRhcmVhIG5hbWU9XCJvdGhlclJlYXNvbnNcIiBpZD1cInJyZF9fb3RoZXItcmVhc29uc1wiIHJvd3M9ezR9PjwvdGV4dGFyZWE+XG5cdDwvZGl2PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgRGlhbG9nSW5uZXI7XG4iLCAiY29uc3QgbG9hZElkcyA9ICgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiBzdHJpbmdbXSA9PiB7XG5cdGNvbnN0IGlkczogc3RyaW5nW10gPSBbXTtcblxuXHRjb25zdCBib3hlczogSlF1ZXJ5PEhUTUxJbnB1dEVsZW1lbnQ+ID0gJGJvZHkuZmluZCgnaW5wdXQnKTtcblx0Zm9yIChjb25zdCBib3ggb2YgYm94ZXMpIHtcblx0XHRjb25zdCB7Y2hlY2tlZCwgbmFtZSwgdHlwZX0gPSBib3g7XG5cblx0XHRpZiAodHlwZSAhPT0gJ2NoZWNrYm94JyB8fCAhY2hlY2tlZCkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0Y29uc3QgaWRSZWdleDogUmVnRXhwID0gL2lkc1xcWyhcXGQrKV0vO1xuXHRcdGNvbnN0IGlkQXJyYXk6IFJlZ0V4cEV4ZWNBcnJheSB8IG51bGwgPSBpZFJlZ2V4LmV4ZWMobmFtZSk7XG5cdFx0aWYgKGlkQXJyYXk/LlsxXSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRbLCBpZHNbaWRzLmxlbmd0aF1dID0gaWRBcnJheTtcblx0fVxuXG5cdHJldHVybiBpZHM7XG59O1xuXG5leHBvcnQge2xvYWRJZHN9O1xuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7aW5pdE13QXBpfSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG5jb25zdCBhcGk6IG13LkFwaSA9IGluaXRNd0FwaShgUlJELyR7T1BUSU9OUy52ZXJzaW9ufWApO1xuXG5leHBvcnQge2FwaX07XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHthcGl9IGZyb20gJy4vYXBpJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9pMThuJztcbmltcG9ydCB7dW5pcXVlQXJyYXl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmNvbnN0IHF1ZXJ5UmV2aXNpb25zID0gYXN5bmMgKHRpdGxlczogc3RyaW5nIHwgc3RyaW5nW10pID0+IHtcblx0Y29uc3QgcGFyYW1zOiBBcGlRdWVyeVJldmlzaW9uc1BhcmFtcyA9IHtcblx0XHR0aXRsZXMsXG5cdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRwcm9wOiAncmV2aXNpb25zJyxcblx0XHRydnByb3A6ICdjb250ZW50Jyxcblx0fTtcblx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGkuZ2V0KHBhcmFtcyk7XG5cblx0cmV0dXJuIHJlc3BvbnNlO1xufTtcblxuY29uc3QgZWRpdCA9IGFzeW5jICh0aXRsZTogc3RyaW5nLCB0ZXh0OiBzdHJpbmcsIHN1bW1hcnk/OiBzdHJpbmcpID0+IHtcblx0Y29uc3QgcGFyYW1zOiBBcGlFZGl0UGFnZVBhcmFtcyA9IHtcblx0XHR0aXRsZSxcblx0XHR0ZXh0LFxuXHRcdGFjdGlvbjogJ2VkaXQnLFxuXHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0fTtcblx0aWYgKHN1bW1hcnkpIHtcblx0XHRwYXJhbXMuc3VtbWFyeSA9IHN1bW1hcnk7XG5cdH1cblx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGkucG9zdFdpdGhFZGl0VG9rZW4ocGFyYW1zKTtcblxuXHRyZXR1cm4gcmVzcG9uc2U7XG59O1xuXG5jb25zdCBzdWJtaXQgPSBhc3luYyAoaWRzOiBzdHJpbmdbXSwgdG9IaWRlOiBzdHJpbmcsIHJlYXNvbjogc3RyaW5nLCBvdGhlclJlYXNvbnM6IHN0cmluZyk6IFByb21pc2U8dm9pZD4gPT4ge1xuXHRjb25zdCB7d2dQYWdlTmFtZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cblx0Y29uc3QgcnJkQXJyOiBzdHJpbmdbXSA9IFtcblx0XHQne3tSZXZkZWwnLFxuXHRcdCd8c3RhdHVzID0gJyxcblx0XHRgfGFydGljbGUgPSAke3dnUGFnZU5hbWV9YCxcblx0XHRgfHNldCA9ICR7dG9IaWRlfWAsXG5cdFx0YHxyZWFzb24gPSAke3JlYXNvbn0ke290aGVyUmVhc29uc31gLFxuXHRdO1xuXG5cdGZvciAoY29uc3QgW2luZGV4LCBpZF0gb2YgdW5pcXVlQXJyYXkoaWRzKS5lbnRyaWVzKCkpIHtcblx0XHQvLyBSZXBsYWNlIGBbLi4ubmV3IFNldCgpXWAgdG8gYXZvaWQgcG9seWZpbGxpbmcgY29yZS1qc1xuXHRcdHJyZEFycltycmRBcnIubGVuZ3RoXSA9IGB8aWQke2luZGV4ICsgMX0gPSAke2lkfWA7XG5cdH1cblx0cnJkQXJyW3JyZEFyci5sZW5ndGhdID0gJ319XFxuLS1+ficuY29uY2F0KCd+ficpO1xuXG5cdHRyeSB7XG5cdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBxdWVyeVJldmlzaW9ucyhPUFRJT05TLnJyZFBhZ2UpO1xuXG5cdFx0bGV0IGNvbnRlbnQ6IHN0cmluZyB8IHVuZGVmaW5lZDtcblx0XHRpZiAocmVzcG9uc2VbJ3F1ZXJ5J10/LnBhZ2VzKSB7XG5cdFx0XHRjb250ZW50ID0gcmVzcG9uc2VbJ3F1ZXJ5J10ucGFnZXNbMF0ucmV2aXNpb25zWzBdLmNvbnRlbnQgYXMgc3RyaW5nO1xuXHRcdH1cblxuXHRcdGlmIChjb250ZW50ID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHZvaWQgbXcubm90aWZ5KGBFcnJvciB3aGVuIGxvYWRpbmcgcGFnZSAke09QVElPTlMucnJkUGFnZX06IG1pc3NpbmdgLCB7XG5cdFx0XHRcdHRhZzogJ1JSRCcsXG5cdFx0XHRcdHR5cGU6ICdlcnJvcicsXG5cdFx0XHR9KTtcblxuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHRyeSB7XG5cdFx0XHRjb25zdCByZXN1bHQgPSBhd2FpdCBlZGl0KE9QVElPTlMucnJkUGFnZSwgYCR7Y29udGVudH1cXG5cXG4ke3JyZEFyci5qb2luKCdcXG4nKX1gLCBnZXRNZXNzYWdlKCdlZGl0U3VtbWFyeScpKTtcblxuXHRcdFx0aWYgKHJlc3VsdFsnZWRpdCddPy5yZXN1bHQgPT09ICdTdWNjZXNzJykge1xuXHRcdFx0XHRsb2NhdGlvbi5yZXBsYWNlKG13LnV0aWwuZ2V0VXJsKE9QVElPTlMucnJkUGFnZSkpO1xuXHRcdFx0fSBlbHNlIGlmIChyZXN1bHRbJ2Vycm9yJ10/LmNvZGUpIHtcblx0XHRcdFx0dm9pZCBtdy5ub3RpZnkoYFNvbWUgZXJyb3JzIG9jY3VyZWQgd2hpbGUgc2F2aW5nIHBhZ2U6ICR7cmVzdWx0WydlcnJvciddLmNvZGV9YCwge1xuXHRcdFx0XHRcdHRhZzogJ1JSRCcsXG5cdFx0XHRcdFx0dHlwZTogJ2Vycm9yJyxcblx0XHRcdFx0fSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR2b2lkIG13Lm5vdGlmeSgnU29tZSBlcnJvcnMgb2NjdXJlZCB3aGlsZSBzYXZpbmcgcGFnZTogdW5rbm93bicsIHtcblx0XHRcdFx0XHR0YWc6ICdSUkQnLFxuXHRcdFx0XHRcdHR5cGU6ICdlcnJvcicsXG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdH0gY2F0Y2gge1xuXHRcdFx0dm9pZCBtdy5ub3RpZnkoYEVycm9yIHdoZW4gZWRpdGluZyBwYWdlICR7T1BUSU9OUy5ycmRQYWdlfWAsIHt0YWc6ICdSUkQnLCB0eXBlOiAnZXJyb3InfSk7XG5cdFx0fVxuXHR9IGNhdGNoIHtcblx0XHR2b2lkIG13Lm5vdGlmeShgRXJyb3Igd2hlbiBsb2FkaW5nIHBhZ2UgJHtPUFRJT05TLnJyZFBhZ2V9YCwge3RhZzogJ1JSRCcsIHR5cGU6ICdlcnJvcid9KTtcblx0fVxufTtcblxuZXhwb3J0IHtzdWJtaXR9O1xuIiwgImltcG9ydCB7Y29uZmlnLCB1cGRhdGVDb25maWd9IGZyb20gJy4vcnJkQ29uZmlnJztcbmltcG9ydCBEaWFsb2dJbm5lciBmcm9tICcuLi9jb21wb25lbnRzL0RpYWxvZ0lubmVyJztcbmltcG9ydCBSZWFjdCBmcm9tICdleHQuZ2FkZ2V0LlJlYWN0JztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9pMThuJztcbmltcG9ydCB7aXNTcGVjaWFsTG9nfSBmcm9tICcuL2lzU3BlY2lhbExvZyc7XG5pbXBvcnQge2xvYWRJZHN9IGZyb20gJy4vbG9hZElkcyc7XG5pbXBvcnQge3N1Ym1pdH0gZnJvbSAnLi9zdWJtaXQnO1xuXG5sZXQgJGRpYWxvZzogSlF1ZXJ5IHwgdW5kZWZpbmVkO1xuXG5jb25zdCBzaG93RGlhbG9nID0gKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQgPT4ge1xuXHRjb25zdCBpZHM6IHN0cmluZ1tdID0gbG9hZElkcygkYm9keSk7XG5cdGlmICghaWRzLmxlbmd0aCkge1xuXHRcdHZvaWQgbXcubm90aWZ5KGdldE1lc3NhZ2UoJ2Vyck5vUmV2aXNpb25Qcm92aWRlZCcpLCB7XG5cdFx0XHR0YWc6ICdSUkQnLFxuXHRcdFx0dHlwZTogJ2Vycm9yJyxcblx0XHR9KTtcblxuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IGRpYWxvZzogUmVhY3QuUmVhY3RFbGVtZW50ID0gRGlhbG9nSW5uZXIoKTtcblx0aWYgKCRkaWFsb2cpIHtcblx0XHQkZGlhbG9nLmh0bWwoZGlhbG9nKS5kaWFsb2coJ29wZW4nKTtcblxuXHRcdGZvciAoY29uc3QgW2lkLCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMoY29uZmlnLm90aGVycykpIHtcblx0XHRcdCRib2R5LmZpbmQoYCMke2lkfWApLnZhbCh2YWx1ZSBhcyBzdHJpbmcpO1xuXHRcdH1cblx0XHRmb3IgKGNvbnN0IFtpZCwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKGNvbmZpZy5jaGVja2JveGVzKSkge1xuXHRcdFx0aWYgKHZhbHVlID09PSB0cnVlKSB7XG5cdFx0XHRcdCRib2R5LmZpbmQoYCMke2lkfWApLnByb3AoJ2NoZWNrZWQnLCB0cnVlKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm47XG5cdH1cblxuXHQkZGlhbG9nID0gJChkaWFsb2cpLmRpYWxvZyh7XG5cdFx0dGl0bGU6IGdldE1lc3NhZ2UoJ2RpYWxvZ1RpdGxlJyksXG5cdFx0bWluV2lkdGg6IDUxNSxcblx0XHRtaW5IZWlnaHQ6IDE1MCxcblx0XHRjbG9zZTogdXBkYXRlQ29uZmlnLFxuXHRcdGJ1dHRvbnM6IFtcblx0XHRcdHtcblx0XHRcdFx0dGV4dDogZ2V0TWVzc2FnZSgnZGlhbG9nQnV0dG9uU3VibWl0JyksXG5cdFx0XHRcdGNsaWNrKCk6IHZvaWQge1xuXHRcdFx0XHRcdCQodGhpcykuZGlhbG9nKCdjbG9zZScpO1xuXG5cdFx0XHRcdFx0Y29uc3Qge1xuXHRcdFx0XHRcdFx0Y2hlY2tib3hlczoge3JyZEhpZGVDb250ZW50LCBycmRIaWRlVXNlcm5hbWUsIHJyZEhpZGVTdW1tYXJ5fSxcblx0XHRcdFx0XHRcdG90aGVyczoge3JyZFJlYXNvbn0sXG5cdFx0XHRcdFx0fSA9IGNvbmZpZztcblxuXHRcdFx0XHRcdGxldCB7cnJkT3RoZXJSZWFzb25zfSA9IGNvbmZpZy5vdGhlcnM7XG5cdFx0XHRcdFx0aWYgKHJyZE90aGVyUmVhc29ucyAmJiBycmRSZWFzb24pIHtcblx0XHRcdFx0XHRcdHJyZE90aGVyUmVhc29ucyA9IGDvvIwke3JyZE90aGVyUmVhc29uc31gO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGNvbnN0IHRvSGlkZTogc3RyaW5nW10gPSBbXTtcblx0XHRcdFx0XHRpZiAocnJkSGlkZUNvbnRlbnQpIHtcblx0XHRcdFx0XHRcdHRvSGlkZVt0b0hpZGUubGVuZ3RoXSA9IGlzU3BlY2lhbExvZygpID8gZ2V0TWVzc2FnZSgnaGlkZUxvZycpIDogZ2V0TWVzc2FnZSgnaGlkZUNvbnRlbnQnKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKHJyZEhpZGVVc2VybmFtZSkge1xuXHRcdFx0XHRcdFx0dG9IaWRlW3RvSGlkZS5sZW5ndGhdID0gZ2V0TWVzc2FnZSgnaGlkZVVzZXJuYW1lJyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmIChycmRIaWRlU3VtbWFyeSkge1xuXHRcdFx0XHRcdFx0dG9IaWRlW3RvSGlkZS5sZW5ndGhdID0gZ2V0TWVzc2FnZSgnaGlkZVN1bW1hcnknKTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRpZiAoIXRvSGlkZS5sZW5ndGgpIHtcblx0XHRcdFx0XHRcdHZvaWQgbXcubm90aWZ5KGdldE1lc3NhZ2UoJ2Vyck5vSXRlbVByb3ZpZGVkJyksIHtcblx0XHRcdFx0XHRcdFx0dGFnOiAnUlJEJyxcblx0XHRcdFx0XHRcdFx0dHlwZTogJ2Vycm9yJyxcblx0XHRcdFx0XHRcdH0pO1xuXG5cdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0bGV0IGNvbnQ6IGJvb2xlYW4gPSB0cnVlO1xuXHRcdFx0XHRcdGlmICghcnJkUmVhc29uICYmICFycmRPdGhlclJlYXNvbnMpIHtcblx0XHRcdFx0XHRcdGNvbnQgPSBjb25maXJtKGdldE1lc3NhZ2UoJ3dhcm5Ob1JlYXNvblByb3ZpZGVkJykpO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGlmIChjb250KSB7XG5cdFx0XHRcdFx0XHR2b2lkIHN1Ym1pdChpZHMsIHRvSGlkZS5qb2luKCfjgIEnKSwgcnJkUmVhc29uID8/ICcnLCBycmRPdGhlclJlYXNvbnMgPz8gJycpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdHRleHQ6IGdldE1lc3NhZ2UoJ2RpYWxvZ0J1dHRvbkNhbmNlbCcpLFxuXHRcdFx0XHRjbGljaygpOiB2b2lkIHtcblx0XHRcdFx0XHQkKHRoaXMpLmRpYWxvZygnY2xvc2UnKTtcblx0XHRcdFx0fSxcblx0XHRcdH0sXG5cdFx0XSxcblx0fSk7XG59O1xuXG5leHBvcnQge3Nob3dEaWFsb2d9O1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0MsSUFBQUEsVUFBVztBQUNYLElBQUFDLFVBQVc7O0FDRFosSUFBQUMsb0JBQWtCQyxRQUFBQyxRQUFBLGtCQUFBLEdBQUEsQ0FBQTs7QUNEbEIsSUFBTUMsa0JBQWtCQSxNQUFNO0FBQzdCLFFBQU07SUFBQ0M7RUFBSyxJQUFJQztBQUNoQixTQUFPO0lBQ05DLGFBQWFGLE1BQ1osMkNBQ0EseUNBQ0Q7SUFDQUcsdUJBQXVCSCxNQUFNLGdCQUFnQixjQUFjO0lBQzNESSxtQkFBbUJKLE1BQU0sZ0JBQWdCLGNBQWM7SUFDdkRLLHNCQUFzQkwsTUFBTSxxQkFBcUIsbUJBQW1CO0lBQ3BFTSxXQUFXTixNQUFNLFdBQVcsU0FBUztJQUNyQ08sYUFBYVAsTUFBTSxRQUFRLE1BQU07SUFDakNRLFNBQVNSLE1BQU0sV0FBVyxTQUFTO0lBQ25DUyxjQUFjVCxNQUFNLGVBQWUsYUFBYTtJQUNoRFUsYUFBYVYsTUFBTSxRQUFRLE1BQU07SUFDakNXLFlBQVlYLE1BQU0sT0FBTyxLQUFLO0lBQzlCWSxlQUFlWixNQUFNLHFCQUFxQixtQkFBbUI7SUFDN0RhLGVBQWViLE1BQU0scUJBQXFCLG1CQUFtQjtJQUM3RGMsZUFBZWQsTUFB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QTtNQUNDdEQsTUFBTWpGLFdBQVcsb0JBQW9CO01BQ3JDb0ksUUFBYztBQUNiTCxVQUFFLElBQUksRUFBRVIsT0FBTyxPQUFPO01BQ3ZCO0lBQ0QsQ0FBQTtFQUVGLENBQUM7QUFDRjs7QU41RkEsTUFBQSxHQUFLeEcsbUJBQUF5SCxTQUFRLEVBQUVDLEtBQUssU0FBU0MsSUFBSWhHLE9BQXNDO0FBQ3RFLFFBQU07SUFBQ2lHO0lBQVV4STtFQUEwQixJQUFJQyxHQUFHQyxPQUFPQyxJQUFJO0FBRTdELE1BQUlxSSxhQUFhLGFBQWF4SSwrQkFBK0IsT0FBTztBQUFBLFFBQUF5SSxhQUFBN0YsMkJBQzdDTCxNQUFNRyxLQUMzQixDQUNDLDREQUNBLHlEQUFBLEVBQ0M4RCxLQUFLLEdBQUcsQ0FDWCxDQUFBLEdBQUFrQztBQUFBLFFBQUE7QUFMQSxXQUFBRCxXQUFBM0YsRUFBQSxHQUFBLEVBQUE0RixTQUFBRCxXQUFBMUYsRUFBQSxHQUFBQyxRQUtHO0FBQUEsY0FMUTJGLFVBQUFELE9BQUE3RztBQU1WOEcsZ0JBQVFDLE1BQ1BqSSxxQkFBYTtVQUNaTixTQUFTQSxNQUFZO0FBQ3BCOEcsdUJBQVc1RSxLQUFLO1VBQ2pCO1FBQ0QsQ0FBQyxDQUNGO01BQ0Q7SUFBQSxTQUFBZSxLQUFBO0FBQUFtRixpQkFBQWxGLEVBQUFELEdBQUE7SUFBQSxVQUFBO0FBQUFtRixpQkFBQWpGLEVBQUE7SUFBQTtFQUNEO0FBQ0QsQ0FBQzsiLAogICJuYW1lcyI6IFsicnJkUGFnZSIsICJ2ZXJzaW9uIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgIl9fdG9FU00iLCAicmVxdWlyZSIsICJnZXRJMThuTWVzc2FnZXMiLCAid2dVTFMiLCAid2luZG93IiwgImVkaXRTdW1tYXJ5IiwgImVyck5vUmV2aXNpb25Qcm92aWRlZCIsICJlcnJOb0l0ZW1Qcm92aWRlZCIsICJ3YXJuTm9SZWFzb25Qcm92aWRlZCIsICJoaWRlSXRlbXMiLCAiaGlkZUNvbnRlbnQiLCAiaGlkZUxvZyIsICJoaWRlVXNlcm5hbWUiLCAiaGlkZVN1bW1hcnkiLCAiaGlkZVJlYXNvbiIsICJoaWRlUmVhc29uUkQxIiwgImhpZGVSZWFzb25SRDIiLCAiaGlkZVJlYXNvblJEMyIsICJoaWRlUmVhc29uUkQ0IiwgImhpZGVSZWFzb25SRDUiLCAiaGlkZVJlYXNvbk90aGVyIiwgIm90aGVyUmVhc29ucyIsICJkaWFsb2dUaXRsZSIsICJkaWFsb2dCdXR0b25TdWJtaXQiLCAiZGlhbG9nQnV0dG9uQ2FuY2VsIiwgInJlcG9ydEJ1dHRvblRpdGxlIiwgInJlcG9ydEJ1dHRvblRleHQiLCAicmVwb3J0QnV0dG9uTG9nVGV4dCIsICJpMThuTWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAiaXNTcGVjaWFsTG9nIiwgIndnQ2Fub25pY2FsU3BlY2lhbFBhZ2VOYW1lIiwgIm13IiwgImNvbmZpZyIsICJnZXQiLCAiUmVwb3J0QnV0dG9uIiwgIm9uQ2xpY2siLCAiZGVmYXVsdCIsICJjcmVhdGVFbGVtZW50IiwgInR5cGUiLCAiY2xhc3NOYW1lIiwgInRpdGxlIiwgIlJlcG9ydEJ1dHRvbl9kZWZhdWx0IiwgImltcG9ydF9leHRfZ2FkZ2V0NSIsICJjaGVja2JveGVzIiwgIm90aGVycyIsICJ1cGRhdGVDb25maWciLCAiX2RvY3VtZW50JHF1ZXJ5U2VsZWN0IiwgIl9kb2N1bWVudCRxdWVyeVNlbGVjdDIiLCAiX2RvY3VtZW50JHF1ZXJ5U2VsZWN0MyIsICJjaGVja0JveGVzIiwgImRvY3VtZW50IiwgInF1ZXJ5U2VsZWN0b3IiLCAiY2hlY2tlZCIsICJycmRIaWRlQ29udGVudCIsICJycmRIaWRlVXNlcm5hbWUiLCAicnJkSGlkZVN1bW1hcnkiLCAicmVhc29uSW5wdXQiLCAib3RoZXJSZWFzb25zSW5wdXQiLCAicnJkUmVhc29uIiwgInZhbHVlIiwgInJyZE90aGVyUmVhc29ucyIsICJpbXBvcnRfZXh0X2dhZGdldDIiLCAiRGlhbG9nSW5uZXIiLCAiaWQiLCAibmFtZSIsICJodG1sRm9yIiwgInJvd3MiLCAiRGlhbG9nSW5uZXJfZGVmYXVsdCIsICJsb2FkSWRzIiwgIiRib2R5IiwgImlkcyIsICJib3hlcyIsICJmaW5kIiwgIl9pdGVyYXRvcjIiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAiX3N0ZXAyIiwgInMiLCAibiIsICJkb25lIiwgImJveCIsICJpZFJlZ2V4IiwgImlkQXJyYXkiLCAiZXhlYyIsICJsZW5ndGgiLCAiZXJyIiwgImUiLCAiZiIsICJpbXBvcnRfZXh0X2dhZGdldDMiLCAiYXBpIiwgImluaXRNd0FwaSIsICJjb25jYXQiLCAiaW1wb3J0X2V4dF9nYWRnZXQ0IiwgInF1ZXJ5UmV2aXNpb25zIiwgIl9yZWYiLCAiX2FzeW5jVG9HZW5lcmF0b3IiLCAidGl0bGVzIiwgInBhcmFtcyIsICJhY3Rpb24iLCAiZm9ybWF0IiwgImZvcm1hdHZlcnNpb24iLCAicHJvcCIsICJydnByb3AiLCAicmVzcG9uc2UiLCAiX3giLCAiYXBwbHkiLCAiYXJndW1lbnRzIiwgImVkaXQiLCAiX3JlZjIiLCAidGV4dCIsICJzdW1tYXJ5IiwgInBvc3RXaXRoRWRpdFRva2VuIiwgIl94MiIsICJfeDMiLCAiX3g0IiwgInN1Ym1pdCIsICJfcmVmMyIsICJ0b0hpZGUiLCAicmVhc29uIiwgIndnUGFnZU5hbWUiLCAicnJkQXJyIiwgIl9pdGVyYXRvcjMiLCAidW5pcXVlQXJyYXkiLCAiZW50cmllcyIsICJfc3RlcDMiLCAiaW5kZXgiLCAiX3Jlc3BvbnNlJHF1ZXJ5IiwgImNvbnRlbnQiLCAicGFnZXMiLCAicmV2aXNpb25zIiwgIm5vdGlmeSIsICJ0YWciLCAiX3Jlc3VsdCRlZGl0IiwgIl9yZXN1bHQkZXJyb3IiLCAicmVzdWx0IiwgImpvaW4iLCAibG9jYXRpb24iLCAicmVwbGFjZSIsICJ1dGlsIiwgImdldFVybCIsICJjb2RlIiwgIl94NSIsICJfeDYiLCAiX3g3IiwgIl94OCIsICIkZGlhbG9nIiwgInNob3dEaWFsb2ciLCAiZGlhbG9nIiwgImh0bWwiLCAiX2kiLCAiX09iamVjdCRlbnRyaWVzIiwgIk9iamVjdCIsICJ2YWwiLCAiX2kyIiwgIl9PYmplY3QkZW50cmllczIiLCAiJCIsICJtaW5XaWR0aCIsICJtaW5IZWlnaHQiLCAiY2xvc2UiLCAiYnV0dG9ucyIsICJjbGljayIsICJjb250IiwgImNvbmZpcm0iLCAiX3JyZE90aGVyUmVhc29ucyIsICJnZXRCb2R5IiwgInRoZW4iLCAicnJkIiwgIndnQWN0aW9uIiwgIl9pdGVyYXRvcjQiLCAiX3N0ZXA0IiwgImVsZW1lbnQiLCAiYWZ0ZXIiXQp9Cg==

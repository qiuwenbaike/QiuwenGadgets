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
var import_ext_gadget = __toESM(require("ext.gadget.JSX"), 1);
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
  className: ["rrd__report", "cdx-button", "cdx-button--weight-primary"],
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
var import_ext_gadget2 = __toESM(require("ext.gadget.JSX"), 1);
//! src/RRD/components/DialogInner.module.less
var contentWrapper = "DialogInner-module__contentWrapper_6TdTVG__491";
//! src/RRD/components/DialogInner.tsx
var DialogInner = () => /* @__PURE__ */ import_ext_gadget2.default.createElement("div", {
  id: "rrd__config"
}, getMessage("hideItems"), /* @__PURE__ */ import_ext_gadget2.default.createElement("br", null), /* @__PURE__ */ import_ext_gadget2.default.createElement("div", {
  className: contentWrapper
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
  className: contentWrapper
}, /* @__PURE__ */ import_ext_gadget2.default.createElement("input", {
  name: "username",
  id: "rrd__hide-username",
  type: "checkbox",
  value: "username"
}), /* @__PURE__ */ import_ext_gadget2.default.createElement("label", {
  htmlFor: "rrd__hide-username",
  id: "rrd-username"
}, getMessage("hideUsername"))), /* @__PURE__ */ import_ext_gadget2.default.createElement("div", {
  className: contentWrapper
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
      rvprop: "content",
      rvslots: "main"
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
        content = response["query"].pages[0].revisions[0].slots.main.content;
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
          void submit(ids, toHide.join("、"), rrdReason !== null && rrdReason !== void 0 ? rrdReason : "", rrdOtherReasons !== null && rrdOtherReasons !== void 0 ? rrdOtherReasons : "");
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL1JSRC9vcHRpb25zLmpzb24iLCAiLi4vLi4vc3JjL1JSRC9jb21wb25lbnRzL1JlcG9ydEJ1dHRvbi50c3giLCAiLi4vLi4vc3JjL1JSRC9tb2R1bGVzL2kxOG4udHMiLCAiLi4vLi4vc3JjL1JSRC9tb2R1bGVzL2lzU3BlY2lhbExvZy50cyIsICIuLi8uLi9zcmMvUlJEL1JSRC50cyIsICIuLi8uLi9zcmMvUlJEL21vZHVsZXMvcnJkQ29uZmlnLnRzIiwgIi4uLy4uL3NyYy9SUkQvY29tcG9uZW50cy9EaWFsb2dJbm5lci50c3giLCAiLi4vLi4vc3JjL1JSRC9jb21wb25lbnRzL0RpYWxvZ0lubmVyLm1vZHVsZS5sZXNzIiwgIi4uLy4uL3NyYy9SUkQvbW9kdWxlcy9sb2FkSWRzLnRzIiwgIi4uLy4uL3NyYy9SUkQvbW9kdWxlcy9hcGkudHMiLCAiLi4vLi4vc3JjL1JSRC9tb2R1bGVzL3N1Ym1pdC50cyIsICIuLi8uLi9zcmMvUlJEL21vZHVsZXMvc2hvd0RpYWxvZy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsie1xuXHRcInJyZFBhZ2VcIjogXCJRaXV3ZW5fdGFsazrniYjmnKzliKDpmaTmj5DmiqVcIixcblx0XCJ2ZXJzaW9uXCI6IFwiMi4wXCJcbn1cbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQgUmVhY3QgZnJvbSAnZXh0LmdhZGdldC5KU1gnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuLi9tb2R1bGVzL2kxOG4nO1xuaW1wb3J0IHtpc1NwZWNpYWxMb2d9IGZyb20gJy4uL21vZHVsZXMvaXNTcGVjaWFsTG9nJztcblxuaW50ZXJmYWNlIFByb3BzIHtcblx0b25DbGljazogKCkgPT4gdm9pZDtcbn1cblxuY29uc3QgUmVwb3J0QnV0dG9uID0gKHtvbkNsaWNrfTogUHJvcHMpID0+IChcblx0PGJ1dHRvblxuXHRcdHR5cGU9eydidXR0b24nfVxuXHRcdGNsYXNzTmFtZT17WydycmRfX3JlcG9ydCcsICdjZHgtYnV0dG9uJywgJ2NkeC1idXR0b24tLXdlaWdodC1wcmltYXJ5J119XG5cdFx0dGl0bGU9e2dldE1lc3NhZ2UoJ3JlcG9ydEJ1dHRvblRpdGxlJykgKyBPUFRJT05TLnJyZFBhZ2V9XG5cdFx0b25DbGljaz17b25DbGlja31cblx0PlxuXHRcdHtpc1NwZWNpYWxMb2coKSA/IGdldE1lc3NhZ2UoJ3JlcG9ydEJ1dHRvbkxvZ1RleHQnKSA6IGdldE1lc3NhZ2UoJ3JlcG9ydEJ1dHRvblRleHQnKX1cblx0PC9idXR0b24+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBSZXBvcnRCdXR0b247XG4iLCAiY29uc3QgZ2V0STE4bk1lc3NhZ2VzID0gKCkgPT4ge1xuXHRjb25zdCB7d2dVTFN9ID0gd2luZG93O1xuXHRyZXR1cm4ge1xuXHRcdGVkaXRTdW1tYXJ5OiB3Z1VMUyhcblx0XHRcdCdbW01lZGlhV2lraTpHYWRnZXQtUlJELmpzfOWNiuiHquWKqOaPkOaKpV1d5L+u6K6i54mI5pys5Yig6ZmkJyxcblx0XHRcdCdbW01lZGlhV2lraTpHYWRnZXQtUlJELmpzfOWNiuiHquWLleaPkOWgsV1d5L+u6KiC54mI5pys5Yiq6ZmkJ1xuXHRcdCksXG5cdFx0ZXJyTm9SZXZpc2lvblByb3ZpZGVkOiB3Z1VMUygn5oKo5rKh5pyJ6YCJ5oup6ZyA6ZqQ6JeP55qE54mI5pys77yBJywgJ+aCqOaykuaciemBuOaTh+mcgOmaseiXj+eahOeJiOacrO+8gScpLFxuXHRcdGVyck5vSXRlbVByb3ZpZGVkOiB3Z1VMUygn5oKo5rKh5pyJ6YCJ5oup6ZyA6ZqQ6JeP55qE6aG555uu77yBJywgJ+aCqOaykuaciemBuOaTh+mcgOmaseiXj+eahOmgheebru+8gScpLFxuXHRcdHdhcm5Ob1JlYXNvblByb3ZpZGVkOiB3Z1VMUygn5oKo5rKh5pyJ6L6T5YWl5Lu75L2V55CG55Sx77yB56Gu5a6a6KaB57un57ut5ZCX77yfJywgJ+aCqOaykuaciei8uOWFpeS7u+S9leeQhueUse+8geeiuuWumuimgee5vOe6jOWXju+8nycpLFxuXHRcdGhpZGVJdGVtczogd2dVTFMoJ+mcgOmakOiXj+eahOmhueebru+8micsICfpnIDpmrHol4/nmoTpoIXnm67vvJonKSxcblx0XHRoaWRlQ29udGVudDogd2dVTFMoJ+e8lui+keWGheWuuScsICfnt6jovK/lhaflrrknKSxcblx0XHRoaWRlTG9nOiB3Z1VMUygn5pel5b+X55uu5qCH5LiO5Y+C5pWwJywgJ+aXpeiqjOebruaomeiIh+WPg+aVuCcpLFxuXHRcdGhpZGVVc2VybmFtZTogd2dVTFMoJ+e8lui+keiAheeUqOaIt+WQjS9JUOWcsOWdgCcsICfnt6jovK/ogIXnlKjmiLblkI0vSVDkvY3lnYAnKSxcblx0XHRoaWRlU3VtbWFyeTogd2dVTFMoJ+e8lui+keaRmOimgScsICfnt6jovK/mkZjopoEnKSxcblx0XHRoaWRlUmVhc29uOiB3Z1VMUygn55CG5o2u77yaJywgJ+eQhuaTmu+8micpLFxuXHRcdGhpZGVSZWFzb25SRDE6IHdnVUxTKCdSRDHvvJrmnaHnm67kuK3mmI7mmL7kvrXniq/okZfkvZzmnYPnmoTlhoXlrrknLCAnUkQx77ya5qKd55uu5Lit5piO6aGv5L6154qv6JGX5L2c5qyK55qE5YWn5a65JyksXG5cdFx0aGlkZVJlYXNvblJEMjogd2dVTFMoJ1JEMu+8muS4pemHjeS+rui+seOAgei0rOS9juaIluaUu+WHu+aAp+aWh+acrCcsICdSRDLvvJrlmrTph43kvq7ovrHjgIHosrbkvY7miJbmlLvmk4rmgKfmlofmnKwnKSxcblx0XHRoaWRlUmVhc29uUkQzOiB3Z1VMUygnUkQz77ya57qv57K55omw5Lmx5oCn5YaF5a65JywgJ+e0lOeyueaTvuS6guaAp+WFp+WuuScpLFxuXHRcdGhpZGVSZWFzb25SRDQ6IHdnVUxTKCdSRDTvvJrmmI7mmL7ov53lj43ms5Xlvovms5Xop4TmiJbov53og4zlhazluo/oia/kv5fnmoTlhoXlrrknLCAnUkQ077ya5piO6aGv6YGV5Y+N5rOV5b6L5rOV6KaP5oiW6YGV6IOM5YWs5bqP6Imv5L+X55qE5YWn5a65JyksXG5cdFx0aGlkZVJlYXNvblJENTogd2dVTFMoJ1JENe+8muWFtuS7luS4jeWunOWFrOW8gOeahOeJiOacrOWGheWuuScsICdSRDXvvJrlhbbku5bkuI3lrpzlhazplovnmoTniYjmnKzlhaflrrknKSxcblx0XHRoaWRlUmVhc29uT3RoZXI6IHdnVUxTKCfku4Xkvb/nlKjkuIvmlrnnmoTpmYTliqDnkIbnlLEnLCAn5YOF5L2/55So5LiL5pa555qE6ZmE5Yqg55CG55SxJyksXG5cdFx0b3RoZXJSZWFzb25zOiB3Z1VMUygn6ZmE5Yqg55CG55Sx77yI5Y+v6YCJ77yM5LiN55So562+5ZCN77yJJywgJ+mZhOWKoOeQhueUse+8iOWPr+mBuO+8jOS4jeeUqOewveWQje+8iScpLFxuXHRcdGRpYWxvZ1RpdGxlOiB3Z1VMUygn5o+Q5oql5L+u6K6i54mI5pys5Yig6ZmkJywgJ+aPkOWgseS/ruiogueJiOacrOWIqumZpCcpLFxuXHRcdGRpYWxvZ0J1dHRvblN1Ym1pdDogd2dVTFMoJ+aPkOaKpScsICfmj5DloLEnKSxcblx0XHRkaWFsb2dCdXR0b25DYW5jZWw6IHdnVUxTKCflj5bmtognLCAn5Y+W5raIJyksXG5cdFx0cmVwb3J0QnV0dG9uVGl0bGU6IHdnVUxTKCflsIbpgInkuK3nmoTniYjmnKzmj5DmiqXliLAnLCAn5bCH6YG45Lit55qE54mI5pys5o+Q5aCx5YiwJyksXG5cdFx0cmVwb3J0QnV0dG9uVGV4dDogd2dVTFMoJ+ivt+axguWIoOmZpOiiq+mAieeJiOacrCcsICfoq4vmsYLliKrpmaTooqvpgbjniYjmnKwnKSxcblx0XHRyZXBvcnRCdXR0b25Mb2dUZXh0OiB3Z1VMUygn6K+35rGC5Yig6Zmk6KKr6YCJ5pel5b+XJywgJ+iri+axguWIqumZpOiiq+mBuOaXpeiqjCcpLFxuXHR9O1xufTtcblxuY29uc3QgaTE4bk1lc3NhZ2VzID0gZ2V0STE4bk1lc3NhZ2VzKCk7XG5cbmNvbnN0IGdldE1lc3NhZ2U6IEdldE1lc3NhZ2VzPHR5cGVvZiBpMThuTWVzc2FnZXM+ID0gKGtleSkgPT4ge1xuXHRyZXR1cm4gaTE4bk1lc3NhZ2VzW2tleV0gfHwga2V5O1xufTtcblxuZXhwb3J0IHtnZXRNZXNzYWdlfTtcbiIsICJjb25zdCBpc1NwZWNpYWxMb2cgPSAoKSA9PiB7XG5cdGNvbnN0IHt3Z0Nhbm9uaWNhbFNwZWNpYWxQYWdlTmFtZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cdHJldHVybiB3Z0Nhbm9uaWNhbFNwZWNpYWxQYWdlTmFtZSA9PT0gJ0xvZyc7XG59O1xuXG5leHBvcnQge2lzU3BlY2lhbExvZ307XG4iLCAiaW1wb3J0IFJlcG9ydEJ1dHRvbiBmcm9tICcuL2NvbXBvbmVudHMvUmVwb3J0QnV0dG9uJztcbmltcG9ydCB7Z2V0Qm9keX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbmltcG9ydCB7c2hvd0RpYWxvZ30gZnJvbSAnLi9tb2R1bGVzL3Nob3dEaWFsb2cnO1xuXG52b2lkIGdldEJvZHkoKS50aGVuKGZ1bmN0aW9uIHJyZCgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkIHtcblx0Y29uc3Qge3dnQWN0aW9uLCB3Z0Nhbm9uaWNhbFNwZWNpYWxQYWdlTmFtZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cblx0aWYgKHdnQWN0aW9uID09PSAnaGlzdG9yeScgfHwgd2dDYW5vbmljYWxTcGVjaWFsUGFnZU5hbWUgPT09ICdMb2cnKSB7XG5cdFx0Zm9yIChjb25zdCBlbGVtZW50IG9mICRib2R5LmZpbmQoXG5cdFx0XHRbXG5cdFx0XHRcdCcuaGlzdG9yeXN1Ym1pdC5tdy1oaXN0b3J5LWNvbXBhcmVzZWxlY3RlZHZlcnNpb25zLWJ1dHRvbicsXG5cdFx0XHRcdCcuZWRpdGNoYW5nZXRhZ3MtbG9nLXN1Ym1pdC5tdy1sb2ctZWRpdGNoYW5nZXRhZ3MtYnV0dG9uJyxcblx0XHRcdF0uam9pbignLCcpXG5cdFx0KSkge1xuXHRcdFx0ZWxlbWVudC5hZnRlcihcblx0XHRcdFx0UmVwb3J0QnV0dG9uKHtcblx0XHRcdFx0XHRvbkNsaWNrOiAoKTogdm9pZCA9PiB7XG5cdFx0XHRcdFx0XHRzaG93RGlhbG9nKCRib2R5KTtcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHR9KVxuXHRcdFx0KTtcblx0XHR9XG5cdH1cbn0pO1xuIiwgImltcG9ydCB0eXBlIHtScmRDb25maWd9IGZyb20gJy4vdHlwZXMnO1xuXG5jb25zdCBjb25maWc6IFJyZENvbmZpZyA9IHtcblx0Y2hlY2tib3hlczoge30sXG5cdG90aGVyczoge30sXG59O1xuXG5jb25zdCB1cGRhdGVDb25maWcgPSAoKTogdm9pZCA9PiB7XG5cdGNvbnN0IGNoZWNrQm94ZXM6IFJyZENvbmZpZ1snY2hlY2tib3hlcyddID0ge307XG5cblx0aWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTElucHV0RWxlbWVudD4oJyNycmRfX2hpZGUtY29udGVudCcpPy5jaGVja2VkKSB7XG5cdFx0Y2hlY2tCb3hlcy5ycmRIaWRlQ29udGVudCA9IHRydWU7XG5cdH1cblx0aWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTElucHV0RWxlbWVudD4oJyNycmRfX2hpZGUtdXNlcm5hbWUnKT8uY2hlY2tlZCkge1xuXHRcdGNoZWNrQm94ZXMucnJkSGlkZVVzZXJuYW1lID0gdHJ1ZTtcblx0fVxuXHRpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MSW5wdXRFbGVtZW50PignI3JyZF9faGlkZS1zdW1tYXJ5Jyk/LmNoZWNrZWQpIHtcblx0XHRjaGVja0JveGVzLnJyZEhpZGVTdW1tYXJ5ID0gdHJ1ZTtcblx0fVxuXG5cdGNvbmZpZy5jaGVja2JveGVzID0gY2hlY2tCb3hlcztcblxuXHRjb25zdCBvdGhlcnM6IFJyZENvbmZpZ1snb3RoZXJzJ10gPSB7fTtcblxuXHRjb25zdCByZWFzb25JbnB1dDogSFRNTElucHV0RWxlbWVudCB8IG51bGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxJbnB1dEVsZW1lbnQ+KCcjcnJkX19yZWFzb24nKTtcblx0Y29uc3Qgb3RoZXJSZWFzb25zSW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQgfCBudWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MSW5wdXRFbGVtZW50PignI3JyZF9fb3RoZXItcmVhc29ucycpO1xuXHRpZiAocmVhc29uSW5wdXQpIHtcblx0XHRvdGhlcnMucnJkUmVhc29uID0gcmVhc29uSW5wdXQudmFsdWU7XG5cdH1cblx0aWYgKG90aGVyUmVhc29uc0lucHV0KSB7XG5cdFx0b3RoZXJzLnJyZE90aGVyUmVhc29ucyA9IG90aGVyUmVhc29uc0lucHV0LnZhbHVlO1xuXHR9XG5cblx0Y29uZmlnLm90aGVycyA9IG90aGVycztcbn07XG5cbmV4cG9ydCB7Y29uZmlnLCB1cGRhdGVDb25maWd9O1xuIiwgImltcG9ydCBSZWFjdCBmcm9tICdleHQuZ2FkZ2V0LkpTWCc7XG5pbXBvcnQge2NvbnRlbnRXcmFwcGVyfSBmcm9tICcuL0RpYWxvZ0lubmVyLm1vZHVsZS5sZXNzJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi4vbW9kdWxlcy9pMThuJztcbmltcG9ydCB7aXNTcGVjaWFsTG9nfSBmcm9tICcuLi9tb2R1bGVzL2lzU3BlY2lhbExvZyc7XG5cbmNvbnN0IERpYWxvZ0lubmVyID0gKCkgPT4gKFxuXHQ8ZGl2IGlkPVwicnJkX19jb25maWdcIj5cblx0XHR7Z2V0TWVzc2FnZSgnaGlkZUl0ZW1zJyl9XG5cdFx0PGJyIC8+XG5cdFx0PGRpdiBjbGFzc05hbWU9e2NvbnRlbnRXcmFwcGVyfT5cblx0XHRcdDxpbnB1dCBuYW1lPVwiY29udGVudFwiIGlkPVwicnJkX19oaWRlLWNvbnRlbnRcIiB0eXBlPVwiY2hlY2tib3hcIiB2YWx1ZT1cImNvbnRlbnRcIiBjaGVja2VkIC8+XG5cdFx0XHQ8bGFiZWwgaHRtbEZvcj1cInJyZF9faGlkZS1jb250ZW50XCIgaWQ9XCJycmQtY29udGVudFwiPlxuXHRcdFx0XHR7aXNTcGVjaWFsTG9nKCkgPyBnZXRNZXNzYWdlKCdoaWRlTG9nJykgOiBnZXRNZXNzYWdlKCdoaWRlQ29udGVudCcpfVxuXHRcdFx0PC9sYWJlbD5cblx0XHQ8L2Rpdj5cblx0XHQ8ZGl2IGNsYXNzTmFtZT17Y29udGVudFdyYXBwZXJ9PlxuXHRcdFx0PGlucHV0IG5hbWU9XCJ1c2VybmFtZVwiIGlkPVwicnJkX19oaWRlLXVzZXJuYW1lXCIgdHlwZT1cImNoZWNrYm94XCIgdmFsdWU9XCJ1c2VybmFtZVwiIC8+XG5cdFx0XHQ8bGFiZWwgaHRtbEZvcj1cInJyZF9faGlkZS11c2VybmFtZVwiIGlkPVwicnJkLXVzZXJuYW1lXCI+XG5cdFx0XHRcdHtnZXRNZXNzYWdlKCdoaWRlVXNlcm5hbWUnKX1cblx0XHRcdDwvbGFiZWw+XG5cdFx0PC9kaXY+XG5cdFx0PGRpdiBjbGFzc05hbWU9e2NvbnRlbnRXcmFwcGVyfT5cblx0XHRcdDxpbnB1dCBuYW1lPVwic3VtbWFyeVwiIGlkPVwicnJkX19oaWRlLXN1bW1hcnlcIiB0eXBlPVwiY2hlY2tib3hcIiB2YWx1ZT1cInN1bW1hcnlcIiAvPlxuXHRcdFx0PGxhYmVsIGh0bWxGb3I9XCJycmRfX2hpZGUtc3VtbWFyeVwiIGlkPVwicnJkLXN1bW1hcnlcIj5cblx0XHRcdFx0e2dldE1lc3NhZ2UoJ2hpZGVTdW1tYXJ5Jyl9XG5cdFx0XHQ8L2xhYmVsPlxuXHRcdDwvZGl2PlxuXHRcdDxiciAvPlxuXHRcdDxiciAvPlxuXHRcdHtnZXRNZXNzYWdlKCdoaWRlUmVhc29uJyl9XG5cdFx0PGJyIC8+XG5cdFx0PHNlbGVjdCBuYW1lPVwicnJkX19yZWFzb25cIiBpZD1cInJyZF9fcmVhc29uXCI+XG5cdFx0XHQ8b3B0aW9uIHZhbHVlPXtnZXRNZXNzYWdlKCdoaWRlUmVhc29uUkQxJyl9PntnZXRNZXNzYWdlKCdoaWRlUmVhc29uUkQxJyl9PC9vcHRpb24+XG5cdFx0XHQ8b3B0aW9uIHZhbHVlPXtnZXRNZXNzYWdlKCdoaWRlUmVhc29uUkQyJyl9PntnZXRNZXNzYWdlKCdoaWRlUmVhc29uUkQyJyl9PC9vcHRpb24+XG5cdFx0XHQ8b3B0aW9uIHZhbHVlPXtnZXRNZXNzYWdlKCdoaWRlUmVhc29uUkQzJyl9PntnZXRNZXNzYWdlKCdoaWRlUmVhc29uUkQzJyl9PC9vcHRpb24+XG5cdFx0XHQ8b3B0aW9uIHZhbHVlPXtnZXRNZXNzYWdlKCdoaWRlUmVhc29uUkQ0Jyl9PntnZXRNZXNzYWdlKCdoaWRlUmVhc29uUkQ0Jyl9PC9vcHRpb24+XG5cdFx0XHQ8b3B0aW9uIHZhbHVlPXtnZXRNZXNzYWdlKCdoaWRlUmVhc29uUkQ1Jyl9PntnZXRNZXNzYWdlKCdoaWRlUmVhc29uUkQ1Jyl9PC9vcHRpb24+XG5cdFx0XHQ8b3B0aW9uIHZhbHVlPVwiXCI+e2dldE1lc3NhZ2UoJ2hpZGVSZWFzb25PdGhlcicpfTwvb3B0aW9uPlxuXHRcdDwvc2VsZWN0PlxuXHRcdDxiciAvPlxuXHRcdDxiciAvPlxuXHRcdHtnZXRNZXNzYWdlKCdvdGhlclJlYXNvbnMnKX1cblx0XHQ8YnIgLz5cblx0XHQ8dGV4dGFyZWEgbmFtZT1cIm90aGVyUmVhc29uc1wiIGlkPVwicnJkX19vdGhlci1yZWFzb25zXCIgcm93cz17NH0+PC90ZXh0YXJlYT5cblx0PC9kaXY+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBEaWFsb2dJbm5lcjtcbiIsICJpbXBvcnQgXCJlc2J1aWxkLWNzcy1tb2R1bGVzLXBsdWdpbi1ucy1jc3M6c3JjL1JSRC9jb21wb25lbnRzL0RpYWxvZ0lubmVyLm1vZHVsZS5sZXNzXCI7XG5leHBvcnQgY29uc3QgY29udGVudFdyYXBwZXIgPSBcIkRpYWxvZ0lubmVyLW1vZHVsZV9fY29udGVudFdyYXBwZXJfNlRkVFZHX180OTFcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBcImNvbnRlbnRXcmFwcGVyXCI6IGNvbnRlbnRXcmFwcGVyXG59O1xuICAgICAgIiwgImNvbnN0IGxvYWRJZHMgPSAoJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KTogc3RyaW5nW10gPT4ge1xuXHRjb25zdCBpZHM6IHN0cmluZ1tdID0gW107XG5cblx0Y29uc3QgYm94ZXM6IEpRdWVyeTxIVE1MSW5wdXRFbGVtZW50PiA9ICRib2R5LmZpbmQoJ2lucHV0Jyk7XG5cdGZvciAoY29uc3QgYm94IG9mIGJveGVzKSB7XG5cdFx0Y29uc3Qge2NoZWNrZWQsIG5hbWUsIHR5cGV9ID0gYm94O1xuXG5cdFx0aWYgKHR5cGUgIT09ICdjaGVja2JveCcgfHwgIWNoZWNrZWQpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGNvbnN0IGlkUmVnZXg6IFJlZ0V4cCA9IC9pZHNcXFsoXFxkKyldLztcblx0XHRjb25zdCBpZEFycmF5OiBSZWdFeHBFeGVjQXJyYXkgfCBudWxsID0gaWRSZWdleC5leGVjKG5hbWUpO1xuXHRcdGlmIChpZEFycmF5Py5bMV0gPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0WywgaWRzW2lkcy5sZW5ndGhdXSA9IGlkQXJyYXk7XG5cdH1cblxuXHRyZXR1cm4gaWRzO1xufTtcblxuZXhwb3J0IHtsb2FkSWRzfTtcbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge2luaXRNd0FwaX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxuY29uc3QgYXBpOiBtdy5BcGkgPSBpbml0TXdBcGkoYFJSRC8ke09QVElPTlMudmVyc2lvbn1gKTtcblxuZXhwb3J0IHthcGl9O1xuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7YXBpfSBmcm9tICcuL2FwaSc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vaTE4bic7XG5pbXBvcnQge3VuaXF1ZUFycmF5fSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG5jb25zdCBxdWVyeVJldmlzaW9ucyA9IGFzeW5jICh0aXRsZXM6IHN0cmluZyB8IHN0cmluZ1tdKSA9PiB7XG5cdGNvbnN0IHBhcmFtczogQXBpUXVlcnlSZXZpc2lvbnNQYXJhbXMgPSB7XG5cdFx0dGl0bGVzLFxuXHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0cHJvcDogJ3JldmlzaW9ucycsXG5cdFx0cnZwcm9wOiAnY29udGVudCcsXG5cdFx0cnZzbG90czogJ21haW4nLFxuXHR9O1xuXHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGFwaS5nZXQocGFyYW1zKTtcblxuXHRyZXR1cm4gcmVzcG9uc2U7XG59O1xuXG5jb25zdCBlZGl0ID0gYXN5bmMgKHRpdGxlOiBzdHJpbmcsIHRleHQ6IHN0cmluZywgc3VtbWFyeT86IHN0cmluZykgPT4ge1xuXHRjb25zdCBwYXJhbXM6IEFwaUVkaXRQYWdlUGFyYW1zID0ge1xuXHRcdHRpdGxlLFxuXHRcdHRleHQsXG5cdFx0YWN0aW9uOiAnZWRpdCcsXG5cdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHR9O1xuXHRpZiAoc3VtbWFyeSkge1xuXHRcdHBhcmFtcy5zdW1tYXJ5ID0gc3VtbWFyeTtcblx0fVxuXHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGFwaS5wb3N0V2l0aEVkaXRUb2tlbihwYXJhbXMpO1xuXG5cdHJldHVybiByZXNwb25zZTtcbn07XG5cbmNvbnN0IHN1Ym1pdCA9IGFzeW5jIChpZHM6IHN0cmluZ1tdLCB0b0hpZGU6IHN0cmluZywgcmVhc29uOiBzdHJpbmcsIG90aGVyUmVhc29uczogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiA9PiB7XG5cdGNvbnN0IHt3Z1BhZ2VOYW1lfSA9IG13LmNvbmZpZy5nZXQoKTtcblxuXHRjb25zdCBycmRBcnI6IHN0cmluZ1tdID0gW1xuXHRcdCd7e1JldmRlbCcsXG5cdFx0J3xzdGF0dXMgPSAnLFxuXHRcdGB8YXJ0aWNsZSA9ICR7d2dQYWdlTmFtZX1gLFxuXHRcdGB8c2V0ID0gJHt0b0hpZGV9YCxcblx0XHRgfHJlYXNvbiA9ICR7cmVhc29ufSR7b3RoZXJSZWFzb25zfWAsXG5cdF07XG5cblx0Zm9yIChjb25zdCBbaW5kZXgsIGlkXSBvZiB1bmlxdWVBcnJheShpZHMpLmVudHJpZXMoKSkge1xuXHRcdC8vIFJlcGxhY2UgU2V0IHdpdGggdW5pcXVlQXJyYXksIGF2b2lkaW5nIGNvcmUtanMgcG9seWZpbGxpbmdcblx0XHRycmRBcnJbcnJkQXJyLmxlbmd0aF0gPSBgfGlkJHtpbmRleCArIDF9ID0gJHtpZH1gO1xuXHR9XG5cdHJyZEFycltycmRBcnIubGVuZ3RoXSA9ICd9fVxcbi0tfn4nLmNvbmNhdCgnfn4nKTtcblxuXHR0cnkge1xuXHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcXVlcnlSZXZpc2lvbnMoT1BUSU9OUy5ycmRQYWdlKTtcblxuXHRcdGxldCBjb250ZW50OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cdFx0aWYgKHJlc3BvbnNlWydxdWVyeSddPy5wYWdlcykge1xuXHRcdFx0Y29udGVudCA9IHJlc3BvbnNlWydxdWVyeSddLnBhZ2VzWzBdLnJldmlzaW9uc1swXS5zbG90cy5tYWluLmNvbnRlbnQgYXMgc3RyaW5nO1xuXHRcdH1cblxuXHRcdGlmIChjb250ZW50ID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHZvaWQgbXcubm90aWZ5KGBFcnJvciB3aGVuIGxvYWRpbmcgcGFnZSAke09QVElPTlMucnJkUGFnZX06IG1pc3NpbmdgLCB7XG5cdFx0XHRcdHRhZzogJ1JSRCcsXG5cdFx0XHRcdHR5cGU6ICdlcnJvcicsXG5cdFx0XHR9KTtcblxuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHRyeSB7XG5cdFx0XHRjb25zdCByZXN1bHQgPSBhd2FpdCBlZGl0KE9QVElPTlMucnJkUGFnZSwgYCR7Y29udGVudH1cXG5cXG4ke3JyZEFyci5qb2luKCdcXG4nKX1gLCBnZXRNZXNzYWdlKCdlZGl0U3VtbWFyeScpKTtcblxuXHRcdFx0aWYgKHJlc3VsdFsnZWRpdCddPy5yZXN1bHQgPT09ICdTdWNjZXNzJykge1xuXHRcdFx0XHRsb2NhdGlvbi5yZXBsYWNlKG13LnV0aWwuZ2V0VXJsKE9QVElPTlMucnJkUGFnZSkpO1xuXHRcdFx0fSBlbHNlIGlmIChyZXN1bHRbJ2Vycm9yJ10/LmNvZGUpIHtcblx0XHRcdFx0dm9pZCBtdy5ub3RpZnkoYFNvbWUgZXJyb3JzIG9jY3VyZWQgd2hpbGUgc2F2aW5nIHBhZ2U6ICR7cmVzdWx0WydlcnJvciddLmNvZGV9YCwge1xuXHRcdFx0XHRcdHRhZzogJ1JSRCcsXG5cdFx0XHRcdFx0dHlwZTogJ2Vycm9yJyxcblx0XHRcdFx0fSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR2b2lkIG13Lm5vdGlmeSgnU29tZSBlcnJvcnMgb2NjdXJlZCB3aGlsZSBzYXZpbmcgcGFnZTogdW5rbm93bicsIHtcblx0XHRcdFx0XHR0YWc6ICdSUkQnLFxuXHRcdFx0XHRcdHR5cGU6ICdlcnJvcicsXG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdH0gY2F0Y2gge1xuXHRcdFx0dm9pZCBtdy5ub3RpZnkoYEVycm9yIHdoZW4gZWRpdGluZyBwYWdlICR7T1BUSU9OUy5ycmRQYWdlfWAsIHt0YWc6ICdSUkQnLCB0eXBlOiAnZXJyb3InfSk7XG5cdFx0fVxuXHR9IGNhdGNoIHtcblx0XHR2b2lkIG13Lm5vdGlmeShgRXJyb3Igd2hlbiBsb2FkaW5nIHBhZ2UgJHtPUFRJT05TLnJyZFBhZ2V9YCwge3RhZzogJ1JSRCcsIHR5cGU6ICdlcnJvcid9KTtcblx0fVxufTtcblxuZXhwb3J0IHtzdWJtaXR9O1xuIiwgImltcG9ydCB7Y29uZmlnLCB1cGRhdGVDb25maWd9IGZyb20gJy4vcnJkQ29uZmlnJztcbmltcG9ydCBEaWFsb2dJbm5lciBmcm9tICcuLi9jb21wb25lbnRzL0RpYWxvZ0lubmVyJztcbmltcG9ydCBSZWFjdCBmcm9tICdleHQuZ2FkZ2V0LkpTWCc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vaTE4bic7XG5pbXBvcnQge2lzU3BlY2lhbExvZ30gZnJvbSAnLi9pc1NwZWNpYWxMb2cnO1xuaW1wb3J0IHtsb2FkSWRzfSBmcm9tICcuL2xvYWRJZHMnO1xuaW1wb3J0IHtzdWJtaXR9IGZyb20gJy4vc3VibWl0JztcblxubGV0ICRkaWFsb2c6IEpRdWVyeSB8IHVuZGVmaW5lZDtcblxuY29uc3Qgc2hvd0RpYWxvZyA9ICgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkID0+IHtcblx0Y29uc3QgaWRzOiBzdHJpbmdbXSA9IGxvYWRJZHMoJGJvZHkpO1xuXHRpZiAoIWlkcy5sZW5ndGgpIHtcblx0XHR2b2lkIG13Lm5vdGlmeShnZXRNZXNzYWdlKCdlcnJOb1JldmlzaW9uUHJvdmlkZWQnKSwge1xuXHRcdFx0dGFnOiAnUlJEJyxcblx0XHRcdHR5cGU6ICdlcnJvcicsXG5cdFx0fSk7XG5cblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBkaWFsb2c6IFJlYWN0LlJlYWN0RWxlbWVudCA9IERpYWxvZ0lubmVyKCk7XG5cdGlmICgkZGlhbG9nKSB7XG5cdFx0JGRpYWxvZy5odG1sKGRpYWxvZykuZGlhbG9nKCdvcGVuJyk7XG5cblx0XHRmb3IgKGNvbnN0IFtpZCwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKGNvbmZpZy5vdGhlcnMpKSB7XG5cdFx0XHQkYm9keS5maW5kKGAjJHtpZH1gKS52YWwodmFsdWUgYXMgc3RyaW5nKTtcblx0XHR9XG5cdFx0Zm9yIChjb25zdCBbaWQsIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhjb25maWcuY2hlY2tib3hlcykpIHtcblx0XHRcdGlmICh2YWx1ZSA9PT0gdHJ1ZSkge1xuXHRcdFx0XHQkYm9keS5maW5kKGAjJHtpZH1gKS5wcm9wKCdjaGVja2VkJywgdHJ1ZSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0JGRpYWxvZyA9ICQoZGlhbG9nKS5kaWFsb2coe1xuXHRcdHRpdGxlOiBnZXRNZXNzYWdlKCdkaWFsb2dUaXRsZScpLFxuXHRcdG1pbldpZHRoOiA1MTUsXG5cdFx0bWluSGVpZ2h0OiAxNTAsXG5cdFx0Y2xvc2U6IHVwZGF0ZUNvbmZpZyxcblx0XHRidXR0b25zOiBbXG5cdFx0XHR7XG5cdFx0XHRcdHRleHQ6IGdldE1lc3NhZ2UoJ2RpYWxvZ0J1dHRvblN1Ym1pdCcpLFxuXHRcdFx0XHRjbGljaygpOiB2b2lkIHtcblx0XHRcdFx0XHQkKHRoaXMpLmRpYWxvZygnY2xvc2UnKTtcblxuXHRcdFx0XHRcdGNvbnN0IHtcblx0XHRcdFx0XHRcdGNoZWNrYm94ZXM6IHtycmRIaWRlQ29udGVudCwgcnJkSGlkZVVzZXJuYW1lLCBycmRIaWRlU3VtbWFyeX0sXG5cdFx0XHRcdFx0XHRvdGhlcnM6IHtycmRSZWFzb259LFxuXHRcdFx0XHRcdH0gPSBjb25maWc7XG5cblx0XHRcdFx0XHRsZXQge3JyZE90aGVyUmVhc29uc30gPSBjb25maWcub3RoZXJzO1xuXHRcdFx0XHRcdGlmIChycmRPdGhlclJlYXNvbnMgJiYgcnJkUmVhc29uKSB7XG5cdFx0XHRcdFx0XHRycmRPdGhlclJlYXNvbnMgPSBg77yMJHtycmRPdGhlclJlYXNvbnN9YDtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRjb25zdCB0b0hpZGU6IHN0cmluZ1tdID0gW107XG5cdFx0XHRcdFx0aWYgKHJyZEhpZGVDb250ZW50KSB7XG5cdFx0XHRcdFx0XHR0b0hpZGVbdG9IaWRlLmxlbmd0aF0gPSBpc1NwZWNpYWxMb2coKSA/IGdldE1lc3NhZ2UoJ2hpZGVMb2cnKSA6IGdldE1lc3NhZ2UoJ2hpZGVDb250ZW50Jyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmIChycmRIaWRlVXNlcm5hbWUpIHtcblx0XHRcdFx0XHRcdHRvSGlkZVt0b0hpZGUubGVuZ3RoXSA9IGdldE1lc3NhZ2UoJ2hpZGVVc2VybmFtZScpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAocnJkSGlkZVN1bW1hcnkpIHtcblx0XHRcdFx0XHRcdHRvSGlkZVt0b0hpZGUubGVuZ3RoXSA9IGdldE1lc3NhZ2UoJ2hpZGVTdW1tYXJ5Jyk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0aWYgKCF0b0hpZGUubGVuZ3RoKSB7XG5cdFx0XHRcdFx0XHR2b2lkIG13Lm5vdGlmeShnZXRNZXNzYWdlKCdlcnJOb0l0ZW1Qcm92aWRlZCcpLCB7XG5cdFx0XHRcdFx0XHRcdHRhZzogJ1JSRCcsXG5cdFx0XHRcdFx0XHRcdHR5cGU6ICdlcnJvcicsXG5cdFx0XHRcdFx0XHR9KTtcblxuXHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGxldCBjb250OiBib29sZWFuID0gdHJ1ZTtcblx0XHRcdFx0XHRpZiAoIXJyZFJlYXNvbiAmJiAhcnJkT3RoZXJSZWFzb25zKSB7XG5cdFx0XHRcdFx0XHRjb250ID0gY29uZmlybShnZXRNZXNzYWdlKCd3YXJuTm9SZWFzb25Qcm92aWRlZCcpKTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRpZiAoY29udCkge1xuXHRcdFx0XHRcdFx0dm9pZCBzdWJtaXQoaWRzLCB0b0hpZGUuam9pbign44CBJyksIHJyZFJlYXNvbiA/PyAnJywgcnJkT3RoZXJSZWFzb25zID8/ICcnKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0sXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHR0ZXh0OiBnZXRNZXNzYWdlKCdkaWFsb2dCdXR0b25DYW5jZWwnKSxcblx0XHRcdFx0Y2xpY2soKTogdm9pZCB7XG5cdFx0XHRcdFx0JCh0aGlzKS5kaWFsb2coJ2Nsb3NlJyk7XG5cdFx0XHRcdH0sXG5cdFx0XHR9LFxuXHRcdF0sXG5cdH0pO1xufTtcblxuZXhwb3J0IHtzaG93RGlhbG9nfTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNDLElBQUFBLFVBQVc7QUFDWCxJQUFBQyxVQUFXOztBQ0RaLElBQUFDLG9CQUFrQkMsUUFBQUMsUUFBQSxnQkFBQSxHQUFBLENBQUE7O0FDRGxCLElBQU1DLGtCQUFrQkEsTUFBTTtBQUM3QixR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QkFBYTtVQUNaTixTQUFTQSxNQUFZO0FBQ3BCa0gsdUJBQVcvRSxLQUFLO1VBQ2pCO1FBQ0QsQ0FBQyxDQUNGO01BQ0Q7SUFBQSxTQUFBZSxLQUFBO0FBQUFxRixpQkFBQXBGLEVBQUFELEdBQUE7SUFBQSxVQUFBO0FBQUFxRixpQkFBQW5GLEVBQUE7SUFBQTtFQUNEO0FBQ0QsQ0FBQzsiLAogICJuYW1lcyI6IFsicnJkUGFnZSIsICJ2ZXJzaW9uIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgIl9fdG9FU00iLCAicmVxdWlyZSIsICJnZXRJMThuTWVzc2FnZXMiLCAid2dVTFMiLCAid2luZG93IiwgImVkaXRTdW1tYXJ5IiwgImVyck5vUmV2aXNpb25Qcm92aWRlZCIsICJlcnJOb0l0ZW1Qcm92aWRlZCIsICJ3YXJuTm9SZWFzb25Qcm92aWRlZCIsICJoaWRlSXRlbXMiLCAiaGlkZUNvbnRlbnQiLCAiaGlkZUxvZyIsICJoaWRlVXNlcm5hbWUiLCAiaGlkZVN1bW1hcnkiLCAiaGlkZVJlYXNvbiIsICJoaWRlUmVhc29uUkQxIiwgImhpZGVSZWFzb25SRDIiLCAiaGlkZVJlYXNvblJEMyIsICJoaWRlUmVhc29uUkQ0IiwgImhpZGVSZWFzb25SRDUiLCAiaGlkZVJlYXNvbk90aGVyIiwgIm90aGVyUmVhc29ucyIsICJkaWFsb2dUaXRsZSIsICJkaWFsb2dCdXR0b25TdWJtaXQiLCAiZGlhbG9nQnV0dG9uQ2FuY2VsIiwgInJlcG9ydEJ1dHRvblRpdGxlIiwgInJlcG9ydEJ1dHRvblRleHQiLCAicmVwb3J0QnV0dG9uTG9nVGV4dCIsICJpMThuTWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAiaXNTcGVjaWFsTG9nIiwgIndnQ2Fub25pY2FsU3BlY2lhbFBhZ2VOYW1lIiwgIm13IiwgImNvbmZpZyIsICJnZXQiLCAiUmVwb3J0QnV0dG9uIiwgIm9uQ2xpY2siLCAiZGVmYXVsdCIsICJjcmVhdGVFbGVtZW50IiwgInR5cGUiLCAiY2xhc3NOYW1lIiwgInRpdGxlIiwgIlJlcG9ydEJ1dHRvbl9kZWZhdWx0IiwgImltcG9ydF9leHRfZ2FkZ2V0NSIsICJjaGVja2JveGVzIiwgIm90aGVycyIsICJ1cGRhdGVDb25maWciLCAiX2RvY3VtZW50JHF1ZXJ5U2VsZWN0IiwgIl9kb2N1bWVudCRxdWVyeVNlbGVjdDIiLCAiX2RvY3VtZW50JHF1ZXJ5U2VsZWN0MyIsICJjaGVja0JveGVzIiwgImRvY3VtZW50IiwgInF1ZXJ5U2VsZWN0b3IiLCAiY2hlY2tlZCIsICJycmRIaWRlQ29udGVudCIsICJycmRIaWRlVXNlcm5hbWUiLCAicnJkSGlkZVN1bW1hcnkiLCAicmVhc29uSW5wdXQiLCAib3RoZXJSZWFzb25zSW5wdXQiLCAicnJkUmVhc29uIiwgInZhbHVlIiwgInJyZE90aGVyUmVhc29ucyIsICJpbXBvcnRfZXh0X2dhZGdldDIiLCAiY29udGVudFdyYXBwZXIiLCAiRGlhbG9nSW5uZXIiLCAiaWQiLCAibmFtZSIsICJodG1sRm9yIiwgInJvd3MiLCAiRGlhbG9nSW5uZXJfZGVmYXVsdCIsICJsb2FkSWRzIiwgIiRib2R5IiwgImlkcyIsICJib3hlcyIsICJmaW5kIiwgIl9pdGVyYXRvcjIiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAiX3N0ZXAyIiwgInMiLCAibiIsICJkb25lIiwgImJveCIsICJpZFJlZ2V4IiwgImlkQXJyYXkiLCAiZXhlYyIsICJsZW5ndGgiLCAiZXJyIiwgImUiLCAiZiIsICJpbXBvcnRfZXh0X2dhZGdldDMiLCAiYXBpIiwgImluaXRNd0FwaSIsICJjb25jYXQiLCAiaW1wb3J0X2V4dF9nYWRnZXQ0IiwgInF1ZXJ5UmV2aXNpb25zIiwgIl9yZWYiLCAiX2FzeW5jVG9HZW5lcmF0b3IiLCAidGl0bGVzIiwgInBhcmFtcyIsICJhY3Rpb24iLCAiZm9ybWF0IiwgImZvcm1hdHZlcnNpb24iLCAicHJvcCIsICJydnByb3AiLCAicnZzbG90cyIsICJyZXNwb25zZSIsICJfeCIsICJhcHBseSIsICJhcmd1bWVudHMiLCAiZWRpdCIsICJfcmVmMiIsICJ0ZXh0IiwgInN1bW1hcnkiLCAicG9zdFdpdGhFZGl0VG9rZW4iLCAiX3gyIiwgIl94MyIsICJfeDQiLCAic3VibWl0IiwgIl9yZWYzIiwgInRvSGlkZSIsICJyZWFzb24iLCAid2dQYWdlTmFtZSIsICJycmRBcnIiLCAiX2l0ZXJhdG9yMyIsICJ1bmlxdWVBcnJheSIsICJlbnRyaWVzIiwgIl9zdGVwMyIsICJpbmRleCIsICJfcmVzcG9uc2UkcXVlcnkiLCAiY29udGVudCIsICJwYWdlcyIsICJyZXZpc2lvbnMiLCAic2xvdHMiLCAibWFpbiIsICJub3RpZnkiLCAidGFnIiwgIl9yZXN1bHQkZWRpdCIsICJfcmVzdWx0JGVycm9yIiwgInJlc3VsdCIsICJqb2luIiwgImxvY2F0aW9uIiwgInJlcGxhY2UiLCAidXRpbCIsICJnZXRVcmwiLCAiY29kZSIsICJfeDUiLCAiX3g2IiwgIl94NyIsICJfeDgiLCAiJGRpYWxvZyIsICJzaG93RGlhbG9nIiwgImRpYWxvZyIsICJodG1sIiwgIl9pIiwgIl9PYmplY3QkZW50cmllcyIsICJPYmplY3QiLCAidmFsIiwgIl9pMiIsICJfT2JqZWN0JGVudHJpZXMyIiwgIiQiLCAibWluV2lkdGgiLCAibWluSGVpZ2h0IiwgImNsb3NlIiwgImJ1dHRvbnMiLCAiY2xpY2siLCAiY29udCIsICJjb25maXJtIiwgImdldEJvZHkiLCAidGhlbiIsICJycmQiLCAid2dBY3Rpb24iLCAiX2l0ZXJhdG9yNCIsICJfc3RlcDQiLCAiZWxlbWVudCIsICJhZnRlciJdCn0K

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
var contentWrapper = "DialogInner-module__contentWrapper_6TdTVG__4100";
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
var queryRevisions = /* @__PURE__ */ (function() {
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
})();
var edit = /* @__PURE__ */ (function() {
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
})();
var submit = /* @__PURE__ */ (function() {
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
    rrdArr[rrdArr.length] = "}}\n——~~".concat("~~");
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
})();
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1JSRC9vcHRpb25zLmpzb24iLCAic3JjL1JSRC9jb21wb25lbnRzL1JlcG9ydEJ1dHRvbi50c3giLCAic3JjL1JSRC9tb2R1bGVzL2kxOG4udHMiLCAic3JjL1JSRC9tb2R1bGVzL2lzU3BlY2lhbExvZy50cyIsICJzcmMvUlJEL1JSRC50cyIsICJzcmMvUlJEL21vZHVsZXMvcnJkQ29uZmlnLnRzIiwgInNyYy9SUkQvY29tcG9uZW50cy9EaWFsb2dJbm5lci50c3giLCAic3JjL1JSRC9jb21wb25lbnRzL0RpYWxvZ0lubmVyLm1vZHVsZS5sZXNzIiwgInNyYy9SUkQvbW9kdWxlcy9sb2FkSWRzLnRzIiwgInNyYy9SUkQvbW9kdWxlcy9hcGkudHMiLCAic3JjL1JSRC9tb2R1bGVzL3N1Ym1pdC50cyIsICJzcmMvUlJEL21vZHVsZXMvc2hvd0RpYWxvZy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsie1xuXHRcInJyZFBhZ2VcIjogXCJRaXV3ZW5fdGFsazrniYjmnKzliKDpmaTmj5DmiqVcIixcblx0XCJ2ZXJzaW9uXCI6IFwiMi4wXCJcbn1cbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQgUmVhY3QgZnJvbSAnZXh0LmdhZGdldC5KU1gnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuLi9tb2R1bGVzL2kxOG4nO1xuaW1wb3J0IHtpc1NwZWNpYWxMb2d9IGZyb20gJy4uL21vZHVsZXMvaXNTcGVjaWFsTG9nJztcblxuaW50ZXJmYWNlIFByb3BzIHtcblx0b25DbGljazogKCkgPT4gdm9pZDtcbn1cblxuY29uc3QgUmVwb3J0QnV0dG9uID0gKHtvbkNsaWNrfTogUHJvcHMpID0+IChcblx0PGJ1dHRvblxuXHRcdHR5cGU9eydidXR0b24nfVxuXHRcdGNsYXNzTmFtZT17WydycmRfX3JlcG9ydCcsICdjZHgtYnV0dG9uJywgJ2NkeC1idXR0b24tLXdlaWdodC1wcmltYXJ5J119XG5cdFx0dGl0bGU9e2dldE1lc3NhZ2UoJ3JlcG9ydEJ1dHRvblRpdGxlJykgKyBPUFRJT05TLnJyZFBhZ2V9XG5cdFx0b25DbGljaz17b25DbGlja31cblx0PlxuXHRcdHtpc1NwZWNpYWxMb2coKSA/IGdldE1lc3NhZ2UoJ3JlcG9ydEJ1dHRvbkxvZ1RleHQnKSA6IGdldE1lc3NhZ2UoJ3JlcG9ydEJ1dHRvblRleHQnKX1cblx0PC9idXR0b24+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBSZXBvcnRCdXR0b247XG4iLCAiY29uc3QgZ2V0STE4bk1lc3NhZ2VzID0gKCkgPT4ge1xuXHRjb25zdCB7d2dVTFN9ID0gd2luZG93O1xuXHRyZXR1cm4ge1xuXHRcdGVkaXRTdW1tYXJ5OiB3Z1VMUyhcblx0XHRcdCdbW01lZGlhV2lraTpHYWRnZXQtUlJELmpzfOWNiuiHquWKqOaPkOaKpV1d5L+u6K6i54mI5pys5Yig6ZmkJyxcblx0XHRcdCdbW01lZGlhV2lraTpHYWRnZXQtUlJELmpzfOWNiuiHquWLleaPkOWgsV1d5L+u6KiC54mI5pys5Yiq6ZmkJ1xuXHRcdCksXG5cdFx0ZXJyTm9SZXZpc2lvblByb3ZpZGVkOiB3Z1VMUygn5oKo5rKh5pyJ6YCJ5oup6ZyA6ZqQ6JeP55qE54mI5pys77yBJywgJ+aCqOaykuaciemBuOaTh+mcgOmaseiXj+eahOeJiOacrO+8gScpLFxuXHRcdGVyck5vSXRlbVByb3ZpZGVkOiB3Z1VMUygn5oKo5rKh5pyJ6YCJ5oup6ZyA6ZqQ6JeP55qE6aG555uu77yBJywgJ+aCqOaykuaciemBuOaTh+mcgOmaseiXj+eahOmgheebru+8gScpLFxuXHRcdHdhcm5Ob1JlYXNvblByb3ZpZGVkOiB3Z1VMUygn5oKo5rKh5pyJ6L6T5YWl5Lu75L2V55CG55Sx77yB56Gu5a6a6KaB57un57ut5ZCX77yfJywgJ+aCqOaykuaciei8uOWFpeS7u+S9leeQhueUse+8geeiuuWumuimgee5vOe6jOWXju+8nycpLFxuXHRcdGhpZGVJdGVtczogd2dVTFMoJ+mcgOmakOiXj+eahOmhueebru+8micsICfpnIDpmrHol4/nmoTpoIXnm67vvJonKSxcblx0XHRoaWRlQ29udGVudDogd2dVTFMoJ+e8lui+keWGheWuuScsICfnt6jovK/lhaflrrknKSxcblx0XHRoaWRlTG9nOiB3Z1VMUygn5pel5b+X55uu5qCH5LiO5Y+C5pWwJywgJ+aXpeiqjOebruaomeiIh+WPg+aVuCcpLFxuXHRcdGhpZGVVc2VybmFtZTogd2dVTFMoJ+e8lui+keiAheeUqOaIt+WQjS9JUOWcsOWdgCcsICfnt6jovK/ogIXnlKjmiLblkI0vSVDkvY3lnYAnKSxcblx0XHRoaWRlU3VtbWFyeTogd2dVTFMoJ+e8lui+keaRmOimgScsICfnt6jovK/mkZjopoEnKSxcblx0XHRoaWRlUmVhc29uOiB3Z1VMUygn55CG5o2u77yaJywgJ+eQhuaTmu+8micpLFxuXHRcdGhpZGVSZWFzb25SRDE6IHdnVUxTKCdSRDHvvJrmnaHnm67kuK3mmI7mmL7kvrXniq/okZfkvZzmnYPnmoTlhoXlrrknLCAnUkQx77ya5qKd55uu5Lit5piO6aGv5L6154qv6JGX5L2c5qyK55qE5YWn5a65JyksXG5cdFx0aGlkZVJlYXNvblJEMjogd2dVTFMoJ1JEMu+8muS4pemHjeS+rui+seOAgei0rOS9juaIluaUu+WHu+aAp+aWh+acrCcsICdSRDLvvJrlmrTph43kvq7ovrHjgIHosrbkvY7miJbmlLvmk4rmgKfmlofmnKwnKSxcblx0XHRoaWRlUmVhc29uUkQzOiB3Z1VMUygnUkQz77ya57qv57K55omw5Lmx5oCn5YaF5a65JywgJ+e0lOeyueaTvuS6guaAp+WFp+WuuScpLFxuXHRcdGhpZGVSZWFzb25SRDQ6IHdnVUxTKCdSRDTvvJrmmI7mmL7ov53lj43ms5Xlvovms5Xop4TmiJbov53og4zlhazluo/oia/kv5fnmoTlhoXlrrknLCAnUkQ077ya5piO6aGv6YGV5Y+N5rOV5b6L5rOV6KaP5oiW6YGV6IOM5YWs5bqP6Imv5L+X55qE5YWn5a65JyksXG5cdFx0aGlkZVJlYXNvblJENTogd2dVTFMoJ1JENe+8muWFtuS7luS4jeWunOWFrOW8gOeahOeJiOacrOWGheWuuScsICdSRDXvvJrlhbbku5bkuI3lrpzlhazplovnmoTniYjmnKzlhaflrrknKSxcblx0XHRoaWRlUmVhc29uT3RoZXI6IHdnVUxTKCfku4Xkvb/nlKjkuIvmlrnnmoTpmYTliqDnkIbnlLEnLCAn5YOF5L2/55So5LiL5pa555qE6ZmE5Yqg55CG55SxJyksXG5cdFx0b3RoZXJSZWFzb25zOiB3Z1VMUygn6ZmE5Yqg55CG55Sx77yI5Y+v6YCJ77yM5LiN55So562+5ZCN77yJJywgJ+mZhOWKoOeQhueUse+8iOWPr+mBuO+8jOS4jeeUqOewveWQje+8iScpLFxuXHRcdGRpYWxvZ1RpdGxlOiB3Z1VMUygn5o+Q5oql5L+u6K6i54mI5pys5Yig6ZmkJywgJ+aPkOWgseS/ruiogueJiOacrOWIqumZpCcpLFxuXHRcdGRpYWxvZ0J1dHRvblN1Ym1pdDogd2dVTFMoJ+aPkOaKpScsICfmj5DloLEnKSxcblx0XHRkaWFsb2dCdXR0b25DYW5jZWw6IHdnVUxTKCflj5bmtognLCAn5Y+W5raIJyksXG5cdFx0cmVwb3J0QnV0dG9uVGl0bGU6IHdnVUxTKCflsIbpgInkuK3nmoTniYjmnKzmj5DmiqXliLAnLCAn5bCH6YG45Lit55qE54mI5pys5o+Q5aCx5YiwJyksXG5cdFx0cmVwb3J0QnV0dG9uVGV4dDogd2dVTFMoJ+ivt+axguWIoOmZpOiiq+mAieeJiOacrCcsICfoq4vmsYLliKrpmaTooqvpgbjniYjmnKwnKSxcblx0XHRyZXBvcnRCdXR0b25Mb2dUZXh0OiB3Z1VMUygn6K+35rGC5Yig6Zmk6KKr6YCJ5pel5b+XJywgJ+iri+axguWIqumZpOiiq+mBuOaXpeiqjCcpLFxuXHR9O1xufTtcblxuY29uc3QgaTE4bk1lc3NhZ2VzID0gZ2V0STE4bk1lc3NhZ2VzKCk7XG5cbmNvbnN0IGdldE1lc3NhZ2U6IEdldE1lc3NhZ2VzPHR5cGVvZiBpMThuTWVzc2FnZXM+ID0gKGtleSkgPT4ge1xuXHRyZXR1cm4gaTE4bk1lc3NhZ2VzW2tleV0gfHwga2V5O1xufTtcblxuZXhwb3J0IHtnZXRNZXNzYWdlfTtcbiIsICJjb25zdCBpc1NwZWNpYWxMb2cgPSAoKSA9PiB7XG5cdGNvbnN0IHt3Z0Nhbm9uaWNhbFNwZWNpYWxQYWdlTmFtZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cdHJldHVybiB3Z0Nhbm9uaWNhbFNwZWNpYWxQYWdlTmFtZSA9PT0gJ0xvZyc7XG59O1xuXG5leHBvcnQge2lzU3BlY2lhbExvZ307XG4iLCAiaW1wb3J0IFJlcG9ydEJ1dHRvbiBmcm9tICcuL2NvbXBvbmVudHMvUmVwb3J0QnV0dG9uJztcbmltcG9ydCB7Z2V0Qm9keX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbmltcG9ydCB7c2hvd0RpYWxvZ30gZnJvbSAnLi9tb2R1bGVzL3Nob3dEaWFsb2cnO1xuXG52b2lkIGdldEJvZHkoKS50aGVuKGZ1bmN0aW9uIHJyZCgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkIHtcblx0Y29uc3Qge3dnQWN0aW9uLCB3Z0Nhbm9uaWNhbFNwZWNpYWxQYWdlTmFtZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cblx0aWYgKHdnQWN0aW9uID09PSAnaGlzdG9yeScgfHwgd2dDYW5vbmljYWxTcGVjaWFsUGFnZU5hbWUgPT09ICdMb2cnKSB7XG5cdFx0Zm9yIChjb25zdCBlbGVtZW50IG9mICRib2R5LmZpbmQoXG5cdFx0XHRbXG5cdFx0XHRcdCcuaGlzdG9yeXN1Ym1pdC5tdy1oaXN0b3J5LWNvbXBhcmVzZWxlY3RlZHZlcnNpb25zLWJ1dHRvbicsXG5cdFx0XHRcdCcuZWRpdGNoYW5nZXRhZ3MtbG9nLXN1Ym1pdC5tdy1sb2ctZWRpdGNoYW5nZXRhZ3MtYnV0dG9uJyxcblx0XHRcdF0uam9pbignLCcpXG5cdFx0KSkge1xuXHRcdFx0ZWxlbWVudC5hZnRlcihcblx0XHRcdFx0UmVwb3J0QnV0dG9uKHtcblx0XHRcdFx0XHRvbkNsaWNrOiAoKTogdm9pZCA9PiB7XG5cdFx0XHRcdFx0XHRzaG93RGlhbG9nKCRib2R5KTtcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHR9KVxuXHRcdFx0KTtcblx0XHR9XG5cdH1cbn0pO1xuIiwgImltcG9ydCB0eXBlIHtScmRDb25maWd9IGZyb20gJy4vdHlwZXMnO1xuXG5jb25zdCBjb25maWc6IFJyZENvbmZpZyA9IHtcblx0Y2hlY2tib3hlczoge30sXG5cdG90aGVyczoge30sXG59O1xuXG5jb25zdCB1cGRhdGVDb25maWcgPSAoKTogdm9pZCA9PiB7XG5cdGNvbnN0IGNoZWNrQm94ZXM6IFJyZENvbmZpZ1snY2hlY2tib3hlcyddID0ge307XG5cblx0aWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTElucHV0RWxlbWVudD4oJyNycmRfX2hpZGUtY29udGVudCcpPy5jaGVja2VkKSB7XG5cdFx0Y2hlY2tCb3hlcy5ycmRIaWRlQ29udGVudCA9IHRydWU7XG5cdH1cblx0aWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTElucHV0RWxlbWVudD4oJyNycmRfX2hpZGUtdXNlcm5hbWUnKT8uY2hlY2tlZCkge1xuXHRcdGNoZWNrQm94ZXMucnJkSGlkZVVzZXJuYW1lID0gdHJ1ZTtcblx0fVxuXHRpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MSW5wdXRFbGVtZW50PignI3JyZF9faGlkZS1zdW1tYXJ5Jyk/LmNoZWNrZWQpIHtcblx0XHRjaGVja0JveGVzLnJyZEhpZGVTdW1tYXJ5ID0gdHJ1ZTtcblx0fVxuXG5cdGNvbmZpZy5jaGVja2JveGVzID0gY2hlY2tCb3hlcztcblxuXHRjb25zdCBvdGhlcnM6IFJyZENvbmZpZ1snb3RoZXJzJ10gPSB7fTtcblxuXHRjb25zdCByZWFzb25JbnB1dDogSFRNTElucHV0RWxlbWVudCB8IG51bGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxJbnB1dEVsZW1lbnQ+KCcjcnJkX19yZWFzb24nKTtcblx0Y29uc3Qgb3RoZXJSZWFzb25zSW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQgfCBudWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MSW5wdXRFbGVtZW50PignI3JyZF9fb3RoZXItcmVhc29ucycpO1xuXHRpZiAocmVhc29uSW5wdXQpIHtcblx0XHRvdGhlcnMucnJkUmVhc29uID0gcmVhc29uSW5wdXQudmFsdWU7XG5cdH1cblx0aWYgKG90aGVyUmVhc29uc0lucHV0KSB7XG5cdFx0b3RoZXJzLnJyZE90aGVyUmVhc29ucyA9IG90aGVyUmVhc29uc0lucHV0LnZhbHVlO1xuXHR9XG5cblx0Y29uZmlnLm90aGVycyA9IG90aGVycztcbn07XG5cbmV4cG9ydCB7Y29uZmlnLCB1cGRhdGVDb25maWd9O1xuIiwgImltcG9ydCBSZWFjdCBmcm9tICdleHQuZ2FkZ2V0LkpTWCc7XG5pbXBvcnQge2NvbnRlbnRXcmFwcGVyfSBmcm9tICcuL0RpYWxvZ0lubmVyLm1vZHVsZS5sZXNzJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi4vbW9kdWxlcy9pMThuJztcbmltcG9ydCB7aXNTcGVjaWFsTG9nfSBmcm9tICcuLi9tb2R1bGVzL2lzU3BlY2lhbExvZyc7XG5cbmNvbnN0IERpYWxvZ0lubmVyID0gKCkgPT4gKFxuXHQ8ZGl2IGlkPVwicnJkX19jb25maWdcIj5cblx0XHR7Z2V0TWVzc2FnZSgnaGlkZUl0ZW1zJyl9XG5cdFx0PGJyIC8+XG5cdFx0PGRpdiBjbGFzc05hbWU9e2NvbnRlbnRXcmFwcGVyfT5cblx0XHRcdDxpbnB1dCBuYW1lPVwiY29udGVudFwiIGlkPVwicnJkX19oaWRlLWNvbnRlbnRcIiB0eXBlPVwiY2hlY2tib3hcIiB2YWx1ZT1cImNvbnRlbnRcIiBjaGVja2VkIC8+XG5cdFx0XHQ8bGFiZWwgaHRtbEZvcj1cInJyZF9faGlkZS1jb250ZW50XCIgaWQ9XCJycmQtY29udGVudFwiPlxuXHRcdFx0XHR7aXNTcGVjaWFsTG9nKCkgPyBnZXRNZXNzYWdlKCdoaWRlTG9nJykgOiBnZXRNZXNzYWdlKCdoaWRlQ29udGVudCcpfVxuXHRcdFx0PC9sYWJlbD5cblx0XHQ8L2Rpdj5cblx0XHQ8ZGl2IGNsYXNzTmFtZT17Y29udGVudFdyYXBwZXJ9PlxuXHRcdFx0PGlucHV0IG5hbWU9XCJ1c2VybmFtZVwiIGlkPVwicnJkX19oaWRlLXVzZXJuYW1lXCIgdHlwZT1cImNoZWNrYm94XCIgdmFsdWU9XCJ1c2VybmFtZVwiIC8+XG5cdFx0XHQ8bGFiZWwgaHRtbEZvcj1cInJyZF9faGlkZS11c2VybmFtZVwiIGlkPVwicnJkLXVzZXJuYW1lXCI+XG5cdFx0XHRcdHtnZXRNZXNzYWdlKCdoaWRlVXNlcm5hbWUnKX1cblx0XHRcdDwvbGFiZWw+XG5cdFx0PC9kaXY+XG5cdFx0PGRpdiBjbGFzc05hbWU9e2NvbnRlbnRXcmFwcGVyfT5cblx0XHRcdDxpbnB1dCBuYW1lPVwic3VtbWFyeVwiIGlkPVwicnJkX19oaWRlLXN1bW1hcnlcIiB0eXBlPVwiY2hlY2tib3hcIiB2YWx1ZT1cInN1bW1hcnlcIiAvPlxuXHRcdFx0PGxhYmVsIGh0bWxGb3I9XCJycmRfX2hpZGUtc3VtbWFyeVwiIGlkPVwicnJkLXN1bW1hcnlcIj5cblx0XHRcdFx0e2dldE1lc3NhZ2UoJ2hpZGVTdW1tYXJ5Jyl9XG5cdFx0XHQ8L2xhYmVsPlxuXHRcdDwvZGl2PlxuXHRcdDxiciAvPlxuXHRcdDxiciAvPlxuXHRcdHtnZXRNZXNzYWdlKCdoaWRlUmVhc29uJyl9XG5cdFx0PGJyIC8+XG5cdFx0PHNlbGVjdCBuYW1lPVwicnJkX19yZWFzb25cIiBpZD1cInJyZF9fcmVhc29uXCI+XG5cdFx0XHQ8b3B0aW9uIHZhbHVlPXtnZXRNZXNzYWdlKCdoaWRlUmVhc29uUkQxJyl9PntnZXRNZXNzYWdlKCdoaWRlUmVhc29uUkQxJyl9PC9vcHRpb24+XG5cdFx0XHQ8b3B0aW9uIHZhbHVlPXtnZXRNZXNzYWdlKCdoaWRlUmVhc29uUkQyJyl9PntnZXRNZXNzYWdlKCdoaWRlUmVhc29uUkQyJyl9PC9vcHRpb24+XG5cdFx0XHQ8b3B0aW9uIHZhbHVlPXtnZXRNZXNzYWdlKCdoaWRlUmVhc29uUkQzJyl9PntnZXRNZXNzYWdlKCdoaWRlUmVhc29uUkQzJyl9PC9vcHRpb24+XG5cdFx0XHQ8b3B0aW9uIHZhbHVlPXtnZXRNZXNzYWdlKCdoaWRlUmVhc29uUkQ0Jyl9PntnZXRNZXNzYWdlKCdoaWRlUmVhc29uUkQ0Jyl9PC9vcHRpb24+XG5cdFx0XHQ8b3B0aW9uIHZhbHVlPXtnZXRNZXNzYWdlKCdoaWRlUmVhc29uUkQ1Jyl9PntnZXRNZXNzYWdlKCdoaWRlUmVhc29uUkQ1Jyl9PC9vcHRpb24+XG5cdFx0XHQ8b3B0aW9uIHZhbHVlPVwiXCI+e2dldE1lc3NhZ2UoJ2hpZGVSZWFzb25PdGhlcicpfTwvb3B0aW9uPlxuXHRcdDwvc2VsZWN0PlxuXHRcdDxiciAvPlxuXHRcdDxiciAvPlxuXHRcdHtnZXRNZXNzYWdlKCdvdGhlclJlYXNvbnMnKX1cblx0XHQ8YnIgLz5cblx0XHQ8dGV4dGFyZWEgbmFtZT1cIm90aGVyUmVhc29uc1wiIGlkPVwicnJkX19vdGhlci1yZWFzb25zXCIgcm93cz17NH0+PC90ZXh0YXJlYT5cblx0PC9kaXY+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBEaWFsb2dJbm5lcjtcbiIsICJpbXBvcnQgXCJlc2J1aWxkLWNzcy1tb2R1bGVzLXBsdWdpbi1ucy1jc3M6c3JjL1JSRC9jb21wb25lbnRzL0RpYWxvZ0lubmVyLm1vZHVsZS5sZXNzXCI7XG5leHBvcnQgY29uc3QgY29udGVudFdyYXBwZXIgPSBcIkRpYWxvZ0lubmVyLW1vZHVsZV9fY29udGVudFdyYXBwZXJfNlRkVFZHX180MTAwXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgXCJjb250ZW50V3JhcHBlclwiOiBjb250ZW50V3JhcHBlclxufTtcbiAgICAgICIsICJjb25zdCBsb2FkSWRzID0gKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHN0cmluZ1tdID0+IHtcblx0Y29uc3QgaWRzOiBzdHJpbmdbXSA9IFtdO1xuXG5cdGNvbnN0IGJveGVzOiBKUXVlcnk8SFRNTElucHV0RWxlbWVudD4gPSAkYm9keS5maW5kKCdpbnB1dCcpO1xuXHRmb3IgKGNvbnN0IGJveCBvZiBib3hlcykge1xuXHRcdGNvbnN0IHtjaGVja2VkLCBuYW1lLCB0eXBlfSA9IGJveDtcblxuXHRcdGlmICh0eXBlICE9PSAnY2hlY2tib3gnIHx8ICFjaGVja2VkKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRjb25zdCBpZFJlZ2V4OiBSZWdFeHAgPSAvaWRzXFxbKFxcZCspXS87XG5cdFx0Y29uc3QgaWRBcnJheTogUmVnRXhwRXhlY0FycmF5IHwgbnVsbCA9IGlkUmVnZXguZXhlYyhuYW1lKTtcblx0XHRpZiAoaWRBcnJheT8uWzFdID09PSB1bmRlZmluZWQpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdFssIGlkc1tpZHMubGVuZ3RoXV0gPSBpZEFycmF5O1xuXHR9XG5cblx0cmV0dXJuIGlkcztcbn07XG5cbmV4cG9ydCB7bG9hZElkc307XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtpbml0TXdBcGl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmNvbnN0IGFwaTogbXcuQXBpID0gaW5pdE13QXBpKGBSUkQvJHtPUFRJT05TLnZlcnNpb259YCk7XG5cbmV4cG9ydCB7YXBpfTtcbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge2FwaX0gZnJvbSAnLi9hcGknO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL2kxOG4nO1xuaW1wb3J0IHt1bmlxdWVBcnJheX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxuY29uc3QgcXVlcnlSZXZpc2lvbnMgPSBhc3luYyAodGl0bGVzOiBzdHJpbmcgfCBzdHJpbmdbXSkgPT4ge1xuXHRjb25zdCBwYXJhbXM6IEFwaVF1ZXJ5UmV2aXNpb25zUGFyYW1zID0ge1xuXHRcdHRpdGxlcyxcblx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdHByb3A6ICdyZXZpc2lvbnMnLFxuXHRcdHJ2cHJvcDogJ2NvbnRlbnQnLFxuXHRcdHJ2c2xvdHM6ICdtYWluJyxcblx0fTtcblx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGkuZ2V0KHBhcmFtcyk7XG5cblx0cmV0dXJuIHJlc3BvbnNlO1xufTtcblxuY29uc3QgZWRpdCA9IGFzeW5jICh0aXRsZTogc3RyaW5nLCB0ZXh0OiBzdHJpbmcsIHN1bW1hcnk/OiBzdHJpbmcpID0+IHtcblx0Y29uc3QgcGFyYW1zOiBBcGlFZGl0UGFnZVBhcmFtcyA9IHtcblx0XHR0aXRsZSxcblx0XHR0ZXh0LFxuXHRcdGFjdGlvbjogJ2VkaXQnLFxuXHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0fTtcblx0aWYgKHN1bW1hcnkpIHtcblx0XHRwYXJhbXMuc3VtbWFyeSA9IHN1bW1hcnk7XG5cdH1cblx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGkucG9zdFdpdGhFZGl0VG9rZW4ocGFyYW1zKTtcblxuXHRyZXR1cm4gcmVzcG9uc2U7XG59O1xuXG5jb25zdCBzdWJtaXQgPSBhc3luYyAoaWRzOiBzdHJpbmdbXSwgdG9IaWRlOiBzdHJpbmcsIHJlYXNvbjogc3RyaW5nLCBvdGhlclJlYXNvbnM6IHN0cmluZyk6IFByb21pc2U8dm9pZD4gPT4ge1xuXHRjb25zdCB7d2dQYWdlTmFtZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cblx0Y29uc3QgcnJkQXJyOiBzdHJpbmdbXSA9IFtcblx0XHQne3tSZXZkZWwnLFxuXHRcdCd8c3RhdHVzID0gJyxcblx0XHRgfGFydGljbGUgPSAke3dnUGFnZU5hbWV9YCxcblx0XHRgfHNldCA9ICR7dG9IaWRlfWAsXG5cdFx0YHxyZWFzb24gPSAke3JlYXNvbn0ke290aGVyUmVhc29uc31gLFxuXHRdO1xuXG5cdGZvciAoY29uc3QgW2luZGV4LCBpZF0gb2YgdW5pcXVlQXJyYXkoaWRzKS5lbnRyaWVzKCkpIHtcblx0XHQvLyBSZXBsYWNlIFNldCB3aXRoIHVuaXF1ZUFycmF5LCBhdm9pZGluZyBjb3JlLWpzIHBvbHlmaWxsaW5nXG5cdFx0cnJkQXJyW3JyZEFyci5sZW5ndGhdID0gYHxpZCR7aW5kZXggKyAxfSA9ICR7aWR9YDtcblx0fVxuXHRycmRBcnJbcnJkQXJyLmxlbmd0aF0gPSAnfX1cXG7igJTigJR+ficuY29uY2F0KCd+ficpO1xuXG5cdHRyeSB7XG5cdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBxdWVyeVJldmlzaW9ucyhPUFRJT05TLnJyZFBhZ2UpO1xuXG5cdFx0bGV0IGNvbnRlbnQ6IHN0cmluZyB8IHVuZGVmaW5lZDtcblx0XHRpZiAocmVzcG9uc2VbJ3F1ZXJ5J10/LnBhZ2VzKSB7XG5cdFx0XHRjb250ZW50ID0gcmVzcG9uc2VbJ3F1ZXJ5J10ucGFnZXNbMF0ucmV2aXNpb25zWzBdLnNsb3RzLm1haW4uY29udGVudCBhcyBzdHJpbmc7XG5cdFx0fVxuXG5cdFx0aWYgKGNvbnRlbnQgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dm9pZCBtdy5ub3RpZnkoYEVycm9yIHdoZW4gbG9hZGluZyBwYWdlICR7T1BUSU9OUy5ycmRQYWdlfTogbWlzc2luZ2AsIHtcblx0XHRcdFx0dGFnOiAnUlJEJyxcblx0XHRcdFx0dHlwZTogJ2Vycm9yJyxcblx0XHRcdH0pO1xuXG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IHJlc3VsdCA9IGF3YWl0IGVkaXQoT1BUSU9OUy5ycmRQYWdlLCBgJHtjb250ZW50fVxcblxcbiR7cnJkQXJyLmpvaW4oJ1xcbicpfWAsIGdldE1lc3NhZ2UoJ2VkaXRTdW1tYXJ5JykpO1xuXG5cdFx0XHRpZiAocmVzdWx0WydlZGl0J10/LnJlc3VsdCA9PT0gJ1N1Y2Nlc3MnKSB7XG5cdFx0XHRcdGxvY2F0aW9uLnJlcGxhY2UobXcudXRpbC5nZXRVcmwoT1BUSU9OUy5ycmRQYWdlKSk7XG5cdFx0XHR9IGVsc2UgaWYgKHJlc3VsdFsnZXJyb3InXT8uY29kZSkge1xuXHRcdFx0XHR2b2lkIG13Lm5vdGlmeShgU29tZSBlcnJvcnMgb2NjdXJlZCB3aGlsZSBzYXZpbmcgcGFnZTogJHtyZXN1bHRbJ2Vycm9yJ10uY29kZX1gLCB7XG5cdFx0XHRcdFx0dGFnOiAnUlJEJyxcblx0XHRcdFx0XHR0eXBlOiAnZXJyb3InLFxuXHRcdFx0XHR9KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHZvaWQgbXcubm90aWZ5KCdTb21lIGVycm9ycyBvY2N1cmVkIHdoaWxlIHNhdmluZyBwYWdlOiB1bmtub3duJywge1xuXHRcdFx0XHRcdHRhZzogJ1JSRCcsXG5cdFx0XHRcdFx0dHlwZTogJ2Vycm9yJyxcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fSBjYXRjaCB7XG5cdFx0XHR2b2lkIG13Lm5vdGlmeShgRXJyb3Igd2hlbiBlZGl0aW5nIHBhZ2UgJHtPUFRJT05TLnJyZFBhZ2V9YCwge3RhZzogJ1JSRCcsIHR5cGU6ICdlcnJvcid9KTtcblx0XHR9XG5cdH0gY2F0Y2gge1xuXHRcdHZvaWQgbXcubm90aWZ5KGBFcnJvciB3aGVuIGxvYWRpbmcgcGFnZSAke09QVElPTlMucnJkUGFnZX1gLCB7dGFnOiAnUlJEJywgdHlwZTogJ2Vycm9yJ30pO1xuXHR9XG59O1xuXG5leHBvcnQge3N1Ym1pdH07XG4iLCAiaW1wb3J0IHtjb25maWcsIHVwZGF0ZUNvbmZpZ30gZnJvbSAnLi9ycmRDb25maWcnO1xuaW1wb3J0IERpYWxvZ0lubmVyIGZyb20gJy4uL2NvbXBvbmVudHMvRGlhbG9nSW5uZXInO1xuaW1wb3J0IFJlYWN0IGZyb20gJ2V4dC5nYWRnZXQuSlNYJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9pMThuJztcbmltcG9ydCB7aXNTcGVjaWFsTG9nfSBmcm9tICcuL2lzU3BlY2lhbExvZyc7XG5pbXBvcnQge2xvYWRJZHN9IGZyb20gJy4vbG9hZElkcyc7XG5pbXBvcnQge3N1Ym1pdH0gZnJvbSAnLi9zdWJtaXQnO1xuXG5sZXQgJGRpYWxvZzogSlF1ZXJ5IHwgdW5kZWZpbmVkO1xuXG5jb25zdCBzaG93RGlhbG9nID0gKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQgPT4ge1xuXHRjb25zdCBpZHM6IHN0cmluZ1tdID0gbG9hZElkcygkYm9keSk7XG5cdGlmICghaWRzLmxlbmd0aCkge1xuXHRcdHZvaWQgbXcubm90aWZ5KGdldE1lc3NhZ2UoJ2Vyck5vUmV2aXNpb25Qcm92aWRlZCcpLCB7XG5cdFx0XHR0YWc6ICdSUkQnLFxuXHRcdFx0dHlwZTogJ2Vycm9yJyxcblx0XHR9KTtcblxuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IGRpYWxvZzogUmVhY3QuUmVhY3RFbGVtZW50ID0gRGlhbG9nSW5uZXIoKTtcblx0aWYgKCRkaWFsb2cpIHtcblx0XHQkZGlhbG9nLmh0bWwoZGlhbG9nKS5kaWFsb2coJ29wZW4nKTtcblxuXHRcdGZvciAoY29uc3QgW2lkLCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMoY29uZmlnLm90aGVycykpIHtcblx0XHRcdCRib2R5LmZpbmQoYCMke2lkfWApLnZhbCh2YWx1ZSBhcyBzdHJpbmcpO1xuXHRcdH1cblx0XHRmb3IgKGNvbnN0IFtpZCwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKGNvbmZpZy5jaGVja2JveGVzKSkge1xuXHRcdFx0aWYgKHZhbHVlID09PSB0cnVlKSB7XG5cdFx0XHRcdCRib2R5LmZpbmQoYCMke2lkfWApLnByb3AoJ2NoZWNrZWQnLCB0cnVlKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm47XG5cdH1cblxuXHQkZGlhbG9nID0gJChkaWFsb2cpLmRpYWxvZyh7XG5cdFx0dGl0bGU6IGdldE1lc3NhZ2UoJ2RpYWxvZ1RpdGxlJyksXG5cdFx0bWluV2lkdGg6IDUxNSxcblx0XHRtaW5IZWlnaHQ6IDE1MCxcblx0XHRjbG9zZTogdXBkYXRlQ29uZmlnLFxuXHRcdGJ1dHRvbnM6IFtcblx0XHRcdHtcblx0XHRcdFx0dGV4dDogZ2V0TWVzc2FnZSgnZGlhbG9nQnV0dG9uU3VibWl0JyksXG5cdFx0XHRcdGNsaWNrKCk6IHZvaWQge1xuXHRcdFx0XHRcdCQodGhpcykuZGlhbG9nKCdjbG9zZScpO1xuXG5cdFx0XHRcdFx0Y29uc3Qge1xuXHRcdFx0XHRcdFx0Y2hlY2tib3hlczoge3JyZEhpZGVDb250ZW50LCBycmRIaWRlVXNlcm5hbWUsIHJyZEhpZGVTdW1tYXJ5fSxcblx0XHRcdFx0XHRcdG90aGVyczoge3JyZFJlYXNvbn0sXG5cdFx0XHRcdFx0fSA9IGNvbmZpZztcblxuXHRcdFx0XHRcdGxldCB7cnJkT3RoZXJSZWFzb25zfSA9IGNvbmZpZy5vdGhlcnM7XG5cdFx0XHRcdFx0aWYgKHJyZE90aGVyUmVhc29ucyAmJiBycmRSZWFzb24pIHtcblx0XHRcdFx0XHRcdHJyZE90aGVyUmVhc29ucyA9IGDvvIwke3JyZE90aGVyUmVhc29uc31gO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGNvbnN0IHRvSGlkZTogc3RyaW5nW10gPSBbXTtcblx0XHRcdFx0XHRpZiAocnJkSGlkZUNvbnRlbnQpIHtcblx0XHRcdFx0XHRcdHRvSGlkZVt0b0hpZGUubGVuZ3RoXSA9IGlzU3BlY2lhbExvZygpID8gZ2V0TWVzc2FnZSgnaGlkZUxvZycpIDogZ2V0TWVzc2FnZSgnaGlkZUNvbnRlbnQnKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKHJyZEhpZGVVc2VybmFtZSkge1xuXHRcdFx0XHRcdFx0dG9IaWRlW3RvSGlkZS5sZW5ndGhdID0gZ2V0TWVzc2FnZSgnaGlkZVVzZXJuYW1lJyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmIChycmRIaWRlU3VtbWFyeSkge1xuXHRcdFx0XHRcdFx0dG9IaWRlW3RvSGlkZS5sZW5ndGhdID0gZ2V0TWVzc2FnZSgnaGlkZVN1bW1hcnknKTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRpZiAoIXRvSGlkZS5sZW5ndGgpIHtcblx0XHRcdFx0XHRcdHZvaWQgbXcubm90aWZ5KGdldE1lc3NhZ2UoJ2Vyck5vSXRlbVByb3ZpZGVkJyksIHtcblx0XHRcdFx0XHRcdFx0dGFnOiAnUlJEJyxcblx0XHRcdFx0XHRcdFx0dHlwZTogJ2Vycm9yJyxcblx0XHRcdFx0XHRcdH0pO1xuXG5cdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0bGV0IGNvbnQ6IGJvb2xlYW4gPSB0cnVlO1xuXHRcdFx0XHRcdGlmICghcnJkUmVhc29uICYmICFycmRPdGhlclJlYXNvbnMpIHtcblx0XHRcdFx0XHRcdGNvbnQgPSBjb25maXJtKGdldE1lc3NhZ2UoJ3dhcm5Ob1JlYXNvblByb3ZpZGVkJykpO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGlmIChjb250KSB7XG5cdFx0XHRcdFx0XHR2b2lkIHN1Ym1pdChpZHMsIHRvSGlkZS5qb2luKCfjgIEnKSwgcnJkUmVhc29uID8/ICcnLCBycmRPdGhlclJlYXNvbnMgPz8gJycpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdHRleHQ6IGdldE1lc3NhZ2UoJ2RpYWxvZ0J1dHRvbkNhbmNlbCcpLFxuXHRcdFx0XHRjbGljaygpOiB2b2lkIHtcblx0XHRcdFx0XHQkKHRoaXMpLmRpYWxvZygnY2xvc2UnKTtcblx0XHRcdFx0fSxcblx0XHRcdH0sXG5cdFx0XSxcblx0fSk7XG59O1xuXG5leHBvcnQge3Nob3dEaWFsb2d9O1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0MsSUFBQUEsVUFBVztBQUNYLElBQUFDLFVBQVc7O0FDRFosSUFBQUMsb0JBQWtCQyxRQUFBQyxRQUFBLGdCQUFBLEdBQUEsQ0FBQTs7QUNEbEIsSUFBTUMsa0JBQWtCQSxNQUFNO0FBQzdCLFFBQU07SUFBQ0M7RUFBSyxJQUFJQztBQUNoQixTQUFPO0lBQ05DLGFBQWFGLE1BQ1osMkNBQ0EseUNBQ0Q7SUFDQUcs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RDtJQUFBLFNBQUFlLEtBQUE7QUFBQXFGLGlCQUFBcEYsRUFBQUQsR0FBQTtJQUFBLFVBQUE7QUFBQXFGLGlCQUFBbkYsRUFBQTtJQUFBO0VBQ0Q7QUFDRCxDQUFDOyIsCiAgIm5hbWVzIjogWyJycmRQYWdlIiwgInZlcnNpb24iLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAiX190b0VTTSIsICJyZXF1aXJlIiwgImdldEkxOG5NZXNzYWdlcyIsICJ3Z1VMUyIsICJ3aW5kb3ciLCAiZWRpdFN1bW1hcnkiLCAiZXJyTm9SZXZpc2lvblByb3ZpZGVkIiwgImVyck5vSXRlbVByb3ZpZGVkIiwgIndhcm5Ob1JlYXNvblByb3ZpZGVkIiwgImhpZGVJdGVtcyIsICJoaWRlQ29udGVudCIsICJoaWRlTG9nIiwgImhpZGVVc2VybmFtZSIsICJoaWRlU3VtbWFyeSIsICJoaWRlUmVhc29uIiwgImhpZGVSZWFzb25SRDEiLCAiaGlkZVJlYXNvblJEMiIsICJoaWRlUmVhc29uUkQzIiwgImhpZGVSZWFzb25SRDQiLCAiaGlkZVJlYXNvblJENSIsICJoaWRlUmVhc29uT3RoZXIiLCAib3RoZXJSZWFzb25zIiwgImRpYWxvZ1RpdGxlIiwgImRpYWxvZ0J1dHRvblN1Ym1pdCIsICJkaWFsb2dCdXR0b25DYW5jZWwiLCAicmVwb3J0QnV0dG9uVGl0bGUiLCAicmVwb3J0QnV0dG9uVGV4dCIsICJyZXBvcnRCdXR0b25Mb2dUZXh0IiwgImkxOG5NZXNzYWdlcyIsICJnZXRNZXNzYWdlIiwgImtleSIsICJpc1NwZWNpYWxMb2ciLCAid2dDYW5vbmljYWxTcGVjaWFsUGFnZU5hbWUiLCAibXciLCAiY29uZmlnIiwgImdldCIsICJSZXBvcnRCdXR0b24iLCAib25DbGljayIsICJkZWZhdWx0IiwgImNyZWF0ZUVsZW1lbnQiLCAidHlwZSIsICJjbGFzc05hbWUiLCAidGl0bGUiLCAiUmVwb3J0QnV0dG9uX2RlZmF1bHQiLCAiaW1wb3J0X2V4dF9nYWRnZXQ1IiwgImNoZWNrYm94ZXMiLCAib3RoZXJzIiwgInVwZGF0ZUNvbmZpZyIsICJfZG9jdW1lbnQkcXVlcnlTZWxlY3QiLCAiX2RvY3VtZW50JHF1ZXJ5U2VsZWN0MiIsICJfZG9jdW1lbnQkcXVlcnlTZWxlY3QzIiwgImNoZWNrQm94ZXMiLCAiZG9jdW1lbnQiLCAicXVlcnlTZWxlY3RvciIsICJjaGVja2VkIiwgInJyZEhpZGVDb250ZW50IiwgInJyZEhpZGVVc2VybmFtZSIsICJycmRIaWRlU3VtbWFyeSIsICJyZWFzb25JbnB1dCIsICJvdGhlclJlYXNvbnNJbnB1dCIsICJycmRSZWFzb24iLCAidmFsdWUiLCAicnJkT3RoZXJSZWFzb25zIiwgImltcG9ydF9leHRfZ2FkZ2V0MiIsICJjb250ZW50V3JhcHBlciIsICJEaWFsb2dJbm5lciIsICJpZCIsICJuYW1lIiwgImh0bWxGb3IiLCAicm93cyIsICJEaWFsb2dJbm5lcl9kZWZhdWx0IiwgImxvYWRJZHMiLCAiJGJvZHkiLCAiaWRzIiwgImJveGVzIiwgImZpbmQiLCAiX2l0ZXJhdG9yMiIsICJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsICJfc3RlcDIiLCAicyIsICJuIiwgImRvbmUiLCAiYm94IiwgImlkUmVnZXgiLCAiaWRBcnJheSIsICJleGVjIiwgImxlbmd0aCIsICJlcnIiLCAiZSIsICJmIiwgImltcG9ydF9leHRfZ2FkZ2V0MyIsICJhcGkiLCAiaW5pdE13QXBpIiwgImNvbmNhdCIsICJpbXBvcnRfZXh0X2dhZGdldDQiLCAicXVlcnlSZXZpc2lvbnMiLCAiX3JlZiIsICJfYXN5bmNUb0dlbmVyYXRvciIsICJ0aXRsZXMiLCAicGFyYW1zIiwgImFjdGlvbiIsICJmb3JtYXQiLCAiZm9ybWF0dmVyc2lvbiIsICJwcm9wIiwgInJ2cHJvcCIsICJydnNsb3RzIiwgInJlc3BvbnNlIiwgIl94IiwgImFwcGx5IiwgImFyZ3VtZW50cyIsICJlZGl0IiwgIl9yZWYyIiwgInRleHQiLCAic3VtbWFyeSIsICJwb3N0V2l0aEVkaXRUb2tlbiIsICJfeDIiLCAiX3gzIiwgIl94NCIsICJzdWJtaXQiLCAiX3JlZjMiLCAidG9IaWRlIiwgInJlYXNvbiIsICJ3Z1BhZ2VOYW1lIiwgInJyZEFyciIsICJfaXRlcmF0b3IzIiwgInVuaXF1ZUFycmF5IiwgImVudHJpZXMiLCAiX3N0ZXAzIiwgImluZGV4IiwgIl9yZXNwb25zZSRxdWVyeSIsICJjb250ZW50IiwgInBhZ2VzIiwgInJldmlzaW9ucyIsICJzbG90cyIsICJtYWluIiwgIm5vdGlmeSIsICJ0YWciLCAiX3Jlc3VsdCRlZGl0IiwgIl9yZXN1bHQkZXJyb3IiLCAicmVzdWx0IiwgImpvaW4iLCAibG9jYXRpb24iLCAicmVwbGFjZSIsICJ1dGlsIiwgImdldFVybCIsICJjb2RlIiwgIl94NSIsICJfeDYiLCAiX3g3IiwgIl94OCIsICIkZGlhbG9nIiwgInNob3dEaWFsb2ciLCAiZGlhbG9nIiwgImh0bWwiLCAiX2kiLCAiX09iamVjdCRlbnRyaWVzIiwgIk9iamVjdCIsICJ2YWwiLCAiX2kyIiwgIl9PYmplY3QkZW50cmllczIiLCAiJCIsICJtaW5XaWR0aCIsICJtaW5IZWlnaHQiLCAiY2xvc2UiLCAiYnV0dG9ucyIsICJjbGljayIsICJjb250IiwgImNvbmZpcm0iLCAiZ2V0Qm9keSIsICJ0aGVuIiwgInJyZCIsICJ3Z0FjdGlvbiIsICJfaXRlcmF0b3I0IiwgIl9zdGVwNCIsICJlbGVtZW50IiwgImFmdGVyIl0KfQo=

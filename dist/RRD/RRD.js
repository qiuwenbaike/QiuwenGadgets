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
var import_vue = require("vue");
//! src/RRD/options.json
var rrdPage = "Qiuwen_talk:版本删除提报";
var version = "2.0";
var import_codex = require("@wikimedia/codex");
var import_vue2 = require("vue");
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
    hideUsername: wgULS("编辑者用户名", "編輯者用戶名"),
    hideSummary: wgULS("编辑摘要", "編輯摘要"),
    hideReason: wgULS("理据：", "理據："),
    hideReasonRD1: wgULS("RD1：条目中明显侵犯著作权的内容", "RD1：條目中明顯侵犯著作權的內容"),
    hideReasonRD2: wgULS("RD2：严重侮辱、贬低或攻击性文本", "RD2：嚴重侮辱、貶低或攻擊性文本"),
    hideReasonRD3: wgULS("RD3：纯粹扰乱性内容", "純粹擾亂性內容"),
    hideReasonRD4: wgULS("RD4：明显违反法律法规或违背公序良俗的内容", "RD4：明顯違反法律法規或違背公序良俗的內容"),
    hideReasonRD5: wgULS("RD5：其他不宜公开的版本内容", "RD5：其他不宜公開的版本內容"),
    hideReasonOS1: wgULS("OS1：未公开的个人资料", "OS1：未公開的個人資料"),
    hideReasonOS2: wgULS("OS2：可能影响百科运作的内容", "OS2：可能影響百科運作的內容"),
    hideReasonOS3: wgULS("OS3：破坏性、扰乱性用户名", "OS3：破壞性、擾亂性用戶名"),
    hideReasonOS4: wgULS("OS4：原页面内容来自外部来源、不符合求闻百科方针，但经过改写后，已符合求闻百科方针的页面", "OS4：原頁面內容來自外部來源、不符合求聞百科方針，但經過覆寫後，已符合求聞百科方針的頁面"),
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
var ReportButton_default = /* @__PURE__ */ (0, import_vue.defineComponent)({
  __name: "ReportButton",
  props: {
    onClick: {
      type: Function,
      required: true
    }
  },
  setup(__props, {
    expose: __expose
  }) {
    __expose();
    const props = __props;
    const buttonLabel = (0, import_vue2.computed)(() => isSpecialLog() ? getMessage("reportButtonLogText") : getMessage("reportButtonText"));
    const buttonTitle = (0, import_vue2.computed)(() => getMessage("reportButtonTitle") + rrdPage);
    const __returned__ = {
      props,
      buttonLabel,
      buttonTitle,
      get CdxButton() {
        return import_codex.CdxButton;
      }
    };
    Object.defineProperty(__returned__, "__isScriptSetup", {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});
var import_vue3 = require("vue");
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0, import_vue3.openBlock)(), (0, import_vue3.createBlock)($setup["CdxButton"], {
    class: "rrd__report",
    weight: "primary",
    type: "button",
    "aria-label": $setup.buttonTitle,
    title: $setup.buttonTitle,
    onClick: $setup.props.onClick
  }, {
    default: (0, import_vue3.withCtx)(() => [(0, import_vue3.createTextVNode)(
      (0, import_vue3.toDisplayString)($setup.buttonLabel),
      1
      /* TEXT */
    )]),
    _: 1
    /* STABLE */
  }, 8, ["aria-label", "title", "onClick"]);
}
//! src/RRD/modules/ReportButton.vue
ReportButton_default.render = render;
ReportButton_default.__file = "src\\RRD\\modules\\ReportButton.vue";
var ReportButton_default2 = ReportButton_default;
//! src/RRD/RRD.ts
var import_vue8 = require("vue");
var import_ext_gadget3 = require("ext.gadget.Util");
//! src/RRD/modules/showDialog.ts
var import_vue7 = require("vue");
var import_vue4 = require("vue");
var import_codex2 = require("@wikimedia/codex");
//! src/RRD/modules/rrdConfig.ts
var config = {
  checkboxes: {},
  others: {}
};
var applyConfig = (checkboxes = {}, others = {}) => {
  config.checkboxes = checkboxes;
  config.others = others;
};
var import_vue5 = require("vue");
//! src/RRD/modules/api.ts
var import_ext_gadget = require("ext.gadget.Util");
var api = (0, import_ext_gadget.initMwApi)("RRD/".concat(version));
//! src/RRD/modules/submit.ts
var import_ext_gadget2 = require("ext.gadget.Util");
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
    for (var _i = 0, _arr = [1, 2, 3, 4, 5]; _i < _arr.length; _i++) {
      const RDid = _arr[_i];
      if (reason.includes("RD".concat(RDid))) {
        reason = "RD".concat(RDid);
        break;
      }
    }
    for (var _i2 = 0, _arr2 = [1, 2, 3, 4]; _i2 < _arr2.length; _i2++) {
      const OSid = _arr2[_i2];
      if (reason.includes("OS".concat(OSid))) {
        reason = "OS".concat(OSid);
        break;
      }
    }
    const rrdArr = ["{{Revdel", "|status = ", "|article = ".concat(wgPageName), "|set = ".concat(toHide), "|reason = ".concat(reason).concat(otherReasons)];
    var _iterator = _createForOfIteratorHelper((0, import_ext_gadget2.uniqueArray)(ids).entries()), _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done; ) {
        const [index, id] = _step.value;
        rrdArr[rrdArr.length] = "|id".concat(index + 1, " = ").concat(id);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
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
var App_default = /* @__PURE__ */ (0, import_vue4.defineComponent)({
  __name: "App",
  props: {
    ids: {
      type: Array,
      required: true
    },
    onClose: {
      type: Function,
      required: true
    }
  },
  setup(__props, {
    expose: __expose
  }) {
    var _config$others$rrdRea, _config$others$rrdOth;
    __expose();
    const props = __props;
    const open = (0, import_vue5.ref)(true);
    const hideContent = (0, import_vue5.ref)(Boolean(config.checkboxes.rrdHideContent));
    const hideUsername = (0, import_vue5.ref)(Boolean(config.checkboxes.rrdHideUsername));
    const hideSummary = (0, import_vue5.ref)(Boolean(config.checkboxes.rrdHideSummary));
    const reason = (0, import_vue5.ref)((_config$others$rrdRea = config.others.rrdReason) !== null && _config$others$rrdRea !== void 0 ? _config$others$rrdRea : "");
    const otherReasons = (0, import_vue5.ref)((_config$others$rrdOth = config.others.rrdOtherReasons) !== null && _config$others$rrdOth !== void 0 ? _config$others$rrdOth : "");
    const reasonItems = (0, import_vue5.computed)(() => [{
      value: getMessage("hideReasonRD1"),
      label: getMessage("hideReasonRD1")
    }, {
      value: getMessage("hideReasonRD2"),
      label: getMessage("hideReasonRD2")
    }, {
      value: getMessage("hideReasonRD3"),
      label: getMessage("hideReasonRD3")
    }, {
      value: getMessage("hideReasonRD4"),
      label: getMessage("hideReasonRD4")
    }, {
      value: getMessage("hideReasonRD5"),
      label: getMessage("hideReasonRD5")
    }, {
      value: getMessage("hideReasonOS1"),
      label: getMessage("hideReasonOS1")
    }, {
      value: getMessage("hideReasonOS2"),
      label: getMessage("hideReasonOS2")
    }, {
      value: getMessage("hideReasonOS3"),
      label: getMessage("hideReasonOS3")
    }, {
      value: getMessage("hideReasonOS4"),
      label: getMessage("hideReasonOS4")
    }, {
      value: "",
      label: getMessage("hideReasonOther")
    }]);
    const primaryAction = (0, import_vue5.computed)(() => ({
      label: getMessage("dialogButtonSubmit"),
      actionType: "progressive"
    }));
    const defaultAction = (0, import_vue5.computed)(() => ({
      label: getMessage("dialogButtonCancel")
    }));
    (0, import_vue5.watch)(() => [hideContent.value, hideUsername.value, hideSummary.value, reason.value, otherReasons.value], () => {
      var _hideContent$value, _hideUsername$value, _hideSummary$value, _reason$value, _otherReasons$value;
      applyConfig({
        rrdHideContent: (_hideContent$value = hideContent.value) !== null && _hideContent$value !== void 0 ? _hideContent$value : false,
        rrdHideUsername: (_hideUsername$value = hideUsername.value) !== null && _hideUsername$value !== void 0 ? _hideUsername$value : false,
        rrdHideSummary: (_hideSummary$value = hideSummary.value) !== null && _hideSummary$value !== void 0 ? _hideSummary$value : false
      }, {
        rrdReason: (_reason$value = reason.value) !== null && _reason$value !== void 0 ? _reason$value : "",
        rrdOtherReasons: (_otherReasons$value = otherReasons.value) !== null && _otherReasons$value !== void 0 ? _otherReasons$value : ""
      });
    }, {
      deep: true
    });
    const submitDialog = () => {
      const shouldHideContent = hideContent.value;
      const shouldHideUsername = hideUsername.value;
      const shouldHideSummary = hideSummary.value;
      const rrdReason = reason.value || void 0;
      let rrdOtherReasons = otherReasons.value || void 0;
      if (rrdOtherReasons && rrdReason) {
        rrdOtherReasons = "，".concat(rrdOtherReasons);
      }
      const toHide = [];
      if (shouldHideContent) {
        toHide.push(isSpecialLog() ? getMessage("hideLog") : getMessage("hideContent"));
      }
      if (shouldHideUsername) {
        toHide.push(getMessage("hideUsername"));
      }
      if (shouldHideSummary) {
        toHide.push(getMessage("hideSummary"));
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
        open.value = false;
        void submit(props.ids, toHide.join("、"), rrdReason !== null && rrdReason !== void 0 ? rrdReason : "", rrdOtherReasons !== null && rrdOtherReasons !== void 0 ? rrdOtherReasons : "");
        props.onClose();
      }
    };
    const closeDialog = () => {
      var _hideContent$value2, _hideUsername$value2, _hideSummary$value2;
      open.value = false;
      applyConfig({
        rrdHideContent: (_hideContent$value2 = hideContent.value) !== null && _hideContent$value2 !== void 0 ? _hideContent$value2 : false,
        rrdHideUsername: (_hideUsername$value2 = hideUsername.value) !== null && _hideUsername$value2 !== void 0 ? _hideUsername$value2 : false,
        rrdHideSummary: (_hideSummary$value2 = hideSummary.value) !== null && _hideSummary$value2 !== void 0 ? _hideSummary$value2 : false
      }, {
        rrdReason: reason.value || "",
        rrdOtherReasons: otherReasons.value || ""
      });
      props.onClose();
    };
    const __returned__ = {
      props,
      open,
      hideContent,
      hideUsername,
      hideSummary,
      reason,
      otherReasons,
      reasonItems,
      primaryAction,
      defaultAction,
      submitDialog,
      closeDialog,
      get CdxCheckbox() {
        return import_codex2.CdxCheckbox;
      },
      get CdxDialog() {
        return import_codex2.CdxDialog;
      },
      get CdxField() {
        return import_codex2.CdxField;
      },
      get CdxSelect() {
        return import_codex2.CdxSelect;
      },
      get CdxTextArea() {
        return import_codex2.CdxTextArea;
      },
      get getMessage() {
        return getMessage;
      },
      get isSpecialLog() {
        return isSpecialLog;
      }
    };
    Object.defineProperty(__returned__, "__isScriptSetup", {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});
var import_vue6 = require("vue");
var _hoisted_1 = {
  class: "rrd-dialog__body"
};
var _hoisted_2 = {
  class: "rrd-dialog__section"
};
var _hoisted_3 = {
  class: "rrd-dialog__section"
};
var _hoisted_4 = {
  class: "rrd-dialog__section"
};
function render2(_ctx, _cache, $props, $setup, $data, $options) {
  return (0, import_vue6.openBlock)(), (0, import_vue6.createBlock)($setup["CdxDialog"], {
    open: $setup.open,
    "onUpdate:open": [_cache[5] || (_cache[5] = ($event) => $setup.open = $event), _cache[6] || (_cache[6] = ($event) => $event === false && $setup.closeDialog())],
    title: $setup.getMessage("dialogTitle"),
    "use-close-button": true,
    "primary-action": $setup.primaryAction,
    "default-action": $setup.defaultAction,
    onPrimary: $setup.submitDialog,
    onDefault: $setup.closeDialog
  }, {
    default: (0, import_vue6.withCtx)(() => [(0, import_vue6.createElementVNode)("div", _hoisted_1, [(0, import_vue6.createElementVNode)("div", _hoisted_2, [(0, import_vue6.createElementVNode)(
      "p",
      null,
      (0, import_vue6.toDisplayString)($setup.getMessage("hideItems")),
      1
      /* TEXT */
    ), (0, import_vue6.createVNode)($setup["CdxField"], null, {
      default: (0, import_vue6.withCtx)(() => [(0, import_vue6.createVNode)($setup["CdxCheckbox"], {
        modelValue: $setup.hideContent,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.hideContent = $event)
      }, {
        default: (0, import_vue6.withCtx)(() => [(0, import_vue6.createTextVNode)(
          (0, import_vue6.toDisplayString)($setup.isSpecialLog() ? $setup.getMessage("hideLog") : $setup.getMessage("hideContent")),
          1
          /* TEXT */
        )]),
        _: 1
        /* STABLE */
      }, 8, ["modelValue"])]),
      _: 1
      /* STABLE */
    }), (0, import_vue6.createVNode)($setup["CdxField"], null, {
      default: (0, import_vue6.withCtx)(() => [(0, import_vue6.createVNode)($setup["CdxCheckbox"], {
        modelValue: $setup.hideUsername,
        "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.hideUsername = $event)
      }, {
        default: (0, import_vue6.withCtx)(() => [(0, import_vue6.createTextVNode)(
          (0, import_vue6.toDisplayString)($setup.getMessage("hideUsername")),
          1
          /* TEXT */
        )]),
        _: 1
        /* STABLE */
      }, 8, ["modelValue"])]),
      _: 1
      /* STABLE */
    }), (0, import_vue6.createVNode)($setup["CdxField"], null, {
      default: (0, import_vue6.withCtx)(() => [(0, import_vue6.createVNode)($setup["CdxCheckbox"], {
        modelValue: $setup.hideSummary,
        "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $setup.hideSummary = $event)
      }, {
        default: (0, import_vue6.withCtx)(() => [(0, import_vue6.createTextVNode)(
          (0, import_vue6.toDisplayString)($setup.getMessage("hideSummary")),
          1
          /* TEXT */
        )]),
        _: 1
        /* STABLE */
      }, 8, ["modelValue"])]),
      _: 1
      /* STABLE */
    })]), (0, import_vue6.createElementVNode)("div", _hoisted_3, [(0, import_vue6.createElementVNode)(
      "p",
      null,
      (0, import_vue6.toDisplayString)($setup.getMessage("hideReason")),
      1
      /* TEXT */
    ), (0, import_vue6.createVNode)($setup["CdxField"], null, {
      default: (0, import_vue6.withCtx)(() => [(0, import_vue6.createVNode)($setup["CdxSelect"], {
        selected: $setup.reason,
        "onUpdate:selected": _cache[3] || (_cache[3] = ($event) => $setup.reason = $event),
        "menu-items": $setup.reasonItems
      }, null, 8, ["selected", "menu-items"])]),
      _: 1
      /* STABLE */
    })]), (0, import_vue6.createElementVNode)("div", _hoisted_4, [(0, import_vue6.createElementVNode)(
      "p",
      null,
      (0, import_vue6.toDisplayString)($setup.getMessage("otherReasons")),
      1
      /* TEXT */
    ), (0, import_vue6.createVNode)($setup["CdxTextArea"], {
      modelValue: $setup.otherReasons,
      "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $setup.otherReasons = $event),
      rows: "4"
    }, null, 8, ["modelValue"])])])]),
    _: 1
    /* STABLE */
  }, 8, ["open", "title", "primary-action", "default-action"]);
}
//! src/RRD/App.vue
App_default.render = render2;
App_default.__file = "src\\RRD\\App.vue";
var App_default2 = App_default;
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
//! src/RRD/modules/showDialog.ts
var app;
var root;
var disposeDialog = () => {
  if (app) {
    app.unmount();
    app = void 0;
  }
  if (root) {
    root.remove();
    root = void 0;
  }
};
var showDialog = ($body) => {
  const ids = loadIds($body);
  if (!ids.length) {
    void mw.notify(getMessage("errNoRevisionProvided"), {
      tag: "RRD",
      type: "error"
    });
    return;
  }
  disposeDialog();
  root = document.createElement("div");
  document.body.append(root);
  app = (0, import_vue7.createApp)(App_default2, {
    ids,
    onClose: disposeDialog
  });
  app.mount(root);
};
//! src/RRD/RRD.ts
void (0, import_ext_gadget3.getBody)().then(function rrd($body) {
  const {
    wgAction,
    wgCanonicalSpecialPageName
  } = mw.config.get();
  if (wgAction === "history" || wgCanonicalSpecialPageName === "Log") {
    const CLASS_NAMES = [".historysubmit.mw-history-compareselectedversions-button", ".editchangetags-log-submit.mw-log-editchangetags-button"];
    const button = (onClick) => {
      const root2 = document.createElement("span");
      (0, import_vue8.createApp)(ReportButton_default2, {
        onClick
      }).mount(root2);
      return root2;
    };
    var _iterator3 = _createForOfIteratorHelper($body.find(CLASS_NAMES.join(","))), _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
        const element = _step3.value;
        const appendElement = button(() => showDialog($body));
        element.after(appendElement);
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
  }
});

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1JSRC9vcHRpb25zLmpzb24iLCAiZGlzdC9SUkQvc3JjL1JSRC9tb2R1bGVzL1JlcG9ydEJ1dHRvbi52dWUiLCAic3JjL1JSRC9tb2R1bGVzL2kxOG4udHMiLCAic3JjL1JSRC9tb2R1bGVzL2lzU3BlY2lhbExvZy50cyIsICJzZmMtdGVtcGxhdGU6RDpcXEdpdFJlcG9zaXRvcnlcXFFpdXdlbkdhZGdldHNcXHNyY1xcUlJEXFxtb2R1bGVzXFxSZXBvcnRCdXR0b24udnVlP3R5cGU9dGVtcGxhdGUiLCAic3JjL1JSRC9tb2R1bGVzL1JlcG9ydEJ1dHRvbi52dWUiLCAic3JjL1JSRC9SUkQudHMiLCAic3JjL1JSRC9tb2R1bGVzL3Nob3dEaWFsb2cudHMiLCAiZGlzdC9SUkQvc3JjL1JSRC9BcHAudnVlIiwgInNyYy9SUkQvbW9kdWxlcy9ycmRDb25maWcudHMiLCAic3JjL1JSRC9tb2R1bGVzL2FwaS50cyIsICJzcmMvUlJEL21vZHVsZXMvc3VibWl0LnRzIiwgInNmYy10ZW1wbGF0ZTpEOlxcR2l0UmVwb3NpdG9yeVxcUWl1d2VuR2FkZ2V0c1xcc3JjXFxSUkRcXEFwcC52dWU/dHlwZT10ZW1wbGF0ZSIsICJzcmMvUlJEL0FwcC52dWUiLCAic3JjL1JSRC9tb2R1bGVzL2xvYWRJZHMudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIntcblx0XCJycmRQYWdlXCI6IFwiUWl1d2VuX3RhbGs654mI5pys5Yig6Zmk5o+Q5oqlXCIsXG5cdFwidmVyc2lvblwiOiBcIjIuMFwiXG59XG4iLCAiPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cbmltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7Q2R4QnV0dG9ufSBmcm9tICdAd2lraW1lZGlhL2NvZGV4JztcbmltcG9ydCB7Y29tcHV0ZWR9IGZyb20gJ3Z1ZSc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vaTE4bic7XG5pbXBvcnQge2lzU3BlY2lhbExvZ30gZnJvbSAnLi9pc1NwZWNpYWxMb2cnO1xuXG5jb25zdCBwcm9wcyA9IGRlZmluZVByb3BzPHtcblx0b25DbGljazogKCkgPT4gdm9pZDtcbn0+KCk7XG5cbmNvbnN0IGJ1dHRvbkxhYmVsID0gY29tcHV0ZWQoKCkgPT5cblx0aXNTcGVjaWFsTG9nKCkgPyBnZXRNZXNzYWdlKCdyZXBvcnRCdXR0b25Mb2dUZXh0JykgOiBnZXRNZXNzYWdlKCdyZXBvcnRCdXR0b25UZXh0Jylcbik7XG5jb25zdCBidXR0b25UaXRsZSA9IGNvbXB1dGVkKCgpID0+IGdldE1lc3NhZ2UoJ3JlcG9ydEJ1dHRvblRpdGxlJykgKyBPUFRJT05TLnJyZFBhZ2UpO1xuPC9zY3JpcHQ+XG5cbjx0ZW1wbGF0ZT5cblx0PGNkeC1idXR0b25cblx0XHRjbGFzcz1cInJyZF9fcmVwb3J0XCJcblx0XHR3ZWlnaHQ9XCJwcmltYXJ5XCJcblx0XHQ6dHlwZT1cIididXR0b24nXCJcblx0XHQ6YXJpYS1sYWJlbD1cImJ1dHRvblRpdGxlXCJcblx0XHQ6dGl0bGU9XCJidXR0b25UaXRsZVwiXG5cdFx0QGNsaWNrPVwicHJvcHMub25DbGlja1wiXG5cdD5cblx0XHR7eyBidXR0b25MYWJlbCB9fVxuXHQ8L2NkeC1idXR0b24+XG48L3RlbXBsYXRlPlxuIiwgImNvbnN0IGdldEkxOG5NZXNzYWdlcyA9ICgpID0+IHtcblx0Y29uc3Qge3dnVUxTfSA9IHdpbmRvdztcblx0cmV0dXJuIHtcblx0XHRlZGl0U3VtbWFyeTogd2dVTFMoXG5cdFx0XHQnW1tNZWRpYVdpa2k6R2FkZ2V0LVJSRC5qc3zljYroh6rliqjmj5DmiqVdXeS/ruiuoueJiOacrOWIoOmZpCcsXG5cdFx0XHQnW1tNZWRpYVdpa2k6R2FkZ2V0LVJSRC5qc3zljYroh6rli5Xmj5DloLFdXeS/ruiogueJiOacrOWIqumZpCdcblx0XHQpLFxuXHRcdGVyck5vUmV2aXNpb25Qcm92aWRlZDogd2dVTFMoJ+aCqOayoeaciemAieaLqemcgOmakOiXj+eahOeJiOacrO+8gScsICfmgqjmspLmnInpgbjmk4fpnIDpmrHol4/nmoTniYjmnKzvvIEnKSxcblx0XHRlcnJOb0l0ZW1Qcm92aWRlZDogd2dVTFMoJ+aCqOayoeaciemAieaLqemcgOmakOiXj+eahOmhueebru+8gScsICfmgqjmspLmnInpgbjmk4fpnIDpmrHol4/nmoTpoIXnm67vvIEnKSxcblx0XHR3YXJuTm9SZWFzb25Qcm92aWRlZDogd2dVTFMoJ+aCqOayoeaciei+k+WFpeS7u+S9leeQhueUse+8geehruWumuimgee7p+e7reWQl++8nycsICfmgqjmspLmnInovLjlhaXku7vkvZXnkIbnlLHvvIHnorrlrpropoHnubznuozll47vvJ8nKSxcblx0XHRoaWRlSXRlbXM6IHdnVUxTKCfpnIDpmpDol4/nmoTpobnnm67vvJonLCAn6ZyA6Zqx6JeP55qE6aCF55uu77yaJyksXG5cdFx0aGlkZUNvbnRlbnQ6IHdnVUxTKCfnvJbovpHlhoXlrrknLCAn57eo6Lyv5YWn5a65JyksXG5cdFx0aGlkZUxvZzogd2dVTFMoJ+aXpeW/l+ebruagh+S4juWPguaVsCcsICfml6Xoqoznm67mqJnoiIflj4PmlbgnKSxcblx0XHRoaWRlVXNlcm5hbWU6IHdnVUxTKCfnvJbovpHogIXnlKjmiLflkI0nLCAn57eo6Lyv6ICF55So5oi25ZCNJyksXG5cdFx0aGlkZVN1bW1hcnk6IHdnVUxTKCfnvJbovpHmkZjopoEnLCAn57eo6Lyv5pGY6KaBJyksXG5cdFx0aGlkZVJlYXNvbjogd2dVTFMoJ+eQhuaNru+8micsICfnkIbmk5rvvJonKSxcblx0XHRoaWRlUmVhc29uUkQxOiB3Z1VMUygnUkQx77ya5p2h55uu5Lit5piO5pi+5L6154qv6JGX5L2c5p2D55qE5YaF5a65JywgJ1JEMe+8muaineebruS4reaYjumhr+S+teeKr+iRl+S9nOasiueahOWFp+WuuScpLFxuXHRcdGhpZGVSZWFzb25SRDI6IHdnVUxTKCdSRDLvvJrkuKXph43kvq7ovrHjgIHotKzkvY7miJbmlLvlh7vmgKfmlofmnKwnLCAnUkQy77ya5Zq06YeN5L6u6L6x44CB6LK25L2O5oiW5pS75pOK5oCn5paH5pysJyksXG5cdFx0aGlkZVJlYXNvblJEMzogd2dVTFMoJ1JEM++8mue6r+eyueaJsOS5seaAp+WGheWuuScsICfntJTnsrnmk77kuoLmgKflhaflrrknKSxcblx0XHRoaWRlUmVhc29uUkQ0OiB3Z1VMUygnUkQ077ya5piO5pi+6L+d5Y+N5rOV5b6L5rOV6KeE5oiW6L+d6IOM5YWs5bqP6Imv5L+X55qE5YaF5a65JywgJ1JENO+8muaYjumhr+mBleWPjeazleW+i+azleimj+aIlumBleiDjOWFrOW6j+iJr+S/l+eahOWFp+WuuScpLFxuXHRcdGhpZGVSZWFzb25SRDU6IHdnVUxTKCdSRDXvvJrlhbbku5bkuI3lrpzlhazlvIDnmoTniYjmnKzlhoXlrrknLCAnUkQ177ya5YW25LuW5LiN5a6c5YWs6ZaL55qE54mI5pys5YWn5a65JyksXG5cdFx0aGlkZVJlYXNvbk9TMTogd2dVTFMoJ09TMe+8muacquWFrOW8gOeahOS4quS6uui1hOaWmScsICdPUzHvvJrmnKrlhazplovnmoTlgIvkurros4fmlpknKSxcblx0XHRoaWRlUmVhc29uT1MyOiB3Z1VMUygnT1My77ya5Y+v6IO95b2x5ZON55m+56eR6L+Q5L2c55qE5YaF5a65JywgJ09TMu+8muWPr+iDveW9semfv+eZvuenkemBi+S9nOeahOWFp+WuuScpLFxuXHRcdGhpZGVSZWFzb25PUzM6IHdnVUxTKCdPUzPvvJrnoLTlnY/mgKfjgIHmibDkubHmgKfnlKjmiLflkI0nLCAnT1Mz77ya56C05aOe5oCn44CB5pO+5LqC5oCn55So5oi25ZCNJyksXG5cdFx0aGlkZVJlYXNvbk9TNDogd2dVTFMoXG5cdFx0XHQnT1M077ya5Y6f6aG16Z2i5YaF5a655p2l6Ieq5aSW6YOo5p2l5rqQ44CB5LiN56ym5ZCI5rGC6Ze755m+56eR5pa56ZKI77yM5L2G57uP6L+H5pS55YaZ5ZCO77yM5bey56ym5ZCI5rGC6Ze755m+56eR5pa56ZKI55qE6aG16Z2iJyxcblx0XHRcdCdPUzTvvJrljp/poIHpnaLlhaflrrnkvoboh6rlpJbpg6jkvobmupDjgIHkuI3nrKblkIjmsYLogZ7nmb7np5Hmlrnph53vvIzkvYbntpPpgY7opoblr6vlvozvvIzlt7LnrKblkIjmsYLogZ7nmb7np5Hmlrnph53nmoTpoIHpnaInXG5cdFx0KSxcblx0XHRoaWRlUmVhc29uT3RoZXI6IHdnVUxTKCfku4Xkvb/nlKjkuIvmlrnnmoTpmYTliqDnkIbnlLEnLCAn5YOF5L2/55So5LiL5pa555qE6ZmE5Yqg55CG55SxJyksXG5cdFx0b3RoZXJSZWFzb25zOiB3Z1VMUygn6ZmE5Yqg55CG55Sx77yI5Y+v6YCJ77yM5LiN55So562+5ZCN77yJJywgJ+mZhOWKoOeQhueUse+8iOWPr+mBuO+8jOS4jeeUqOewveWQje+8iScpLFxuXHRcdGRpYWxvZ1RpdGxlOiB3Z1VMUygn5o+Q5oql5L+u6K6i54mI5pys5Yig6ZmkJywgJ+aPkOWgseS/ruiogueJiOacrOWIqumZpCcpLFxuXHRcdGRpYWxvZ0J1dHRvblN1Ym1pdDogd2dVTFMoJ+aPkOaKpScsICfmj5DloLEnKSxcblx0XHRkaWFsb2dCdXR0b25DYW5jZWw6IHdnVUxTKCflj5bmtognLCAn5Y+W5raIJyksXG5cdFx0cmVwb3J0QnV0dG9uVGl0bGU6IHdnVUxTKCflsIbpgInkuK3nmoTniYjmnKzmj5DmiqXliLAnLCAn5bCH6YG45Lit55qE54mI5pys5o+Q5aCx5YiwJyksXG5cdFx0cmVwb3J0QnV0dG9uVGV4dDogd2dVTFMoJ+ivt+axguWIoOmZpOiiq+mAieeJiOacrCcsICfoq4vmsYLliKrpmaTooqvpgbjniYjmnKwnKSxcblx0XHRyZXBvcnRCdXR0b25Mb2dUZXh0OiB3Z1VMUygn6K+35rGC5Yig6Zmk6KKr6YCJ5pel5b+XJywgJ+iri+axguWIqumZpOiiq+mBuOaXpeiqjCcpLFxuXHR9O1xufTtcblxuY29uc3QgaTE4bk1lc3NhZ2VzID0gZ2V0STE4bk1lc3NhZ2VzKCk7XG5cbmNvbnN0IGdldE1lc3NhZ2U6IEdldE1lc3NhZ2VzPHR5cGVvZiBpMThuTWVzc2FnZXM+ID0gKGtleSkgPT4ge1xuXHRyZXR1cm4gaTE4bk1lc3NhZ2VzW2tleV0gfHwga2V5O1xufTtcblxuZXhwb3J0IHtnZXRNZXNzYWdlfTtcbiIsICJjb25zdCBpc1NwZWNpYWxMb2cgPSAoKSA9PiB7XG5cdGNvbnN0IHt3Z0Nhbm9uaWNhbFNwZWNpYWxQYWdlTmFtZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cdHJldHVybiB3Z0Nhbm9uaWNhbFNwZWNpYWxQYWdlTmFtZSA9PT0gJ0xvZyc7XG59O1xuXG5leHBvcnQge2lzU3BlY2lhbExvZ307XG4iLCAiaW1wb3J0IHsgdG9EaXNwbGF5U3RyaW5nIGFzIF90b0Rpc3BsYXlTdHJpbmcsIGNyZWF0ZVRleHRWTm9kZSBhcyBfY3JlYXRlVGV4dFZOb2RlLCB3aXRoQ3R4IGFzIF93aXRoQ3R4LCBvcGVuQmxvY2sgYXMgX29wZW5CbG9jaywgY3JlYXRlQmxvY2sgYXMgX2NyZWF0ZUJsb2NrIH0gZnJvbSBcInZ1ZVwiXG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXIoX2N0eCwgX2NhY2hlLCAkcHJvcHMsICRzZXR1cCwgJGRhdGEsICRvcHRpb25zKSB7XG4gIHJldHVybiAoX29wZW5CbG9jaygpLCBfY3JlYXRlQmxvY2soJHNldHVwW1wiQ2R4QnV0dG9uXCJdLCB7XG4gICAgY2xhc3M6IFwicnJkX19yZXBvcnRcIixcbiAgICB3ZWlnaHQ6IFwicHJpbWFyeVwiLFxuICAgIHR5cGU6ICdidXR0b24nLFxuICAgIFwiYXJpYS1sYWJlbFwiOiAkc2V0dXAuYnV0dG9uVGl0bGUsXG4gICAgdGl0bGU6ICRzZXR1cC5idXR0b25UaXRsZSxcbiAgICBvbkNsaWNrOiAkc2V0dXAucHJvcHMub25DbGlja1xuICB9LCB7XG4gICAgZGVmYXVsdDogX3dpdGhDdHgoKCkgPT4gW1xuICAgICAgX2NyZWF0ZVRleHRWTm9kZShfdG9EaXNwbGF5U3RyaW5nKCRzZXR1cC5idXR0b25MYWJlbCksIDEgLyogVEVYVCAqLylcbiAgICBdKSxcbiAgICBfOiAxIC8qIFNUQUJMRSAqL1xuICB9LCA4IC8qIFBST1BTICovLCBbXCJhcmlhLWxhYmVsXCIsIFwidGl0bGVcIiwgXCJvbkNsaWNrXCJdKSlcbn0iLCAiaW1wb3J0IHNjcmlwdCBmcm9tIFwiRDpcXFxcR2l0UmVwb3NpdG9yeVxcXFxRaXV3ZW5HYWRnZXRzXFxcXHNyY1xcXFxSUkRcXFxcbW9kdWxlc1xcXFxSZXBvcnRCdXR0b24udnVlP3R5cGU9c2NyaXB0XCI7aW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcIkQ6XFxcXEdpdFJlcG9zaXRvcnlcXFxcUWl1d2VuR2FkZ2V0c1xcXFxzcmNcXFxcUlJEXFxcXG1vZHVsZXNcXFxcUmVwb3J0QnV0dG9uLnZ1ZT90eXBlPXRlbXBsYXRlXCI7IHNjcmlwdC5yZW5kZXIgPSByZW5kZXI7c2NyaXB0Ll9fZmlsZSA9IFwic3JjXFxcXFJSRFxcXFxtb2R1bGVzXFxcXFJlcG9ydEJ1dHRvbi52dWVcIjtleHBvcnQgZGVmYXVsdCBzY3JpcHQ7IiwgImltcG9ydCBSZXBvcnRCdXR0b24gZnJvbSAnLi9tb2R1bGVzL1JlcG9ydEJ1dHRvbi52dWUnO1xuaW1wb3J0IHtjcmVhdGVBcHB9IGZyb20gJ3Z1ZSc7XG5pbXBvcnQge2dldEJvZHl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5pbXBvcnQge3Nob3dEaWFsb2d9IGZyb20gJy4vbW9kdWxlcy9zaG93RGlhbG9nJztcblxudm9pZCBnZXRCb2R5KCkudGhlbihmdW5jdGlvbiBycmQoJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KTogdm9pZCB7XG5cdGNvbnN0IHt3Z0FjdGlvbiwgd2dDYW5vbmljYWxTcGVjaWFsUGFnZU5hbWV9ID0gbXcuY29uZmlnLmdldCgpO1xuXG5cdGlmICh3Z0FjdGlvbiA9PT0gJ2hpc3RvcnknIHx8IHdnQ2Fub25pY2FsU3BlY2lhbFBhZ2VOYW1lID09PSAnTG9nJykge1xuXHRcdGNvbnN0IENMQVNTX05BTUVTID0gW1xuXHRcdFx0Jy5oaXN0b3J5c3VibWl0Lm13LWhpc3RvcnktY29tcGFyZXNlbGVjdGVkdmVyc2lvbnMtYnV0dG9uJyxcblx0XHRcdCcuZWRpdGNoYW5nZXRhZ3MtbG9nLXN1Ym1pdC5tdy1sb2ctZWRpdGNoYW5nZXRhZ3MtYnV0dG9uJyxcblx0XHRdO1xuXHRcdGNvbnN0IGJ1dHRvbiA9IChvbkNsaWNrOiAoKSA9PiB2b2lkKTogSFRNTFNwYW5FbGVtZW50ID0+IHtcblx0XHRcdGNvbnN0IHJvb3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5cdFx0XHRjcmVhdGVBcHAoUmVwb3J0QnV0dG9uLCB7b25DbGlja30pLm1vdW50KHJvb3QpO1xuXHRcdFx0cmV0dXJuIHJvb3Q7XG5cdFx0fTtcblxuXHRcdGZvciAoY29uc3QgZWxlbWVudCBvZiAkYm9keS5maW5kKENMQVNTX05BTUVTLmpvaW4oJywnKSkpIHtcblx0XHRcdGNvbnN0IGFwcGVuZEVsZW1lbnQgPSBidXR0b24oKCkgPT4gc2hvd0RpYWxvZygkYm9keSkpO1xuXHRcdFx0ZWxlbWVudC5hZnRlcihhcHBlbmRFbGVtZW50KTtcblx0XHR9XG5cdH1cbn0pO1xuIiwgImltcG9ydCB7dHlwZSBBcHAgYXMgVnVlQXBwLCBjcmVhdGVBcHB9IGZyb20gJ3Z1ZSc7XG5pbXBvcnQgQXBwIGZyb20gJy4uL0FwcC52dWUnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL2kxOG4nO1xuaW1wb3J0IHtsb2FkSWRzfSBmcm9tICcuL2xvYWRJZHMnO1xuXG5sZXQgYXBwOiBWdWVBcHA8RWxlbWVudD4gfCB1bmRlZmluZWQ7XG5sZXQgcm9vdDogSFRNTERpdkVsZW1lbnQgfCB1bmRlZmluZWQ7XG5cbmNvbnN0IGRpc3Bvc2VEaWFsb2cgPSAoKTogdm9pZCA9PiB7XG5cdGlmIChhcHApIHtcblx0XHRhcHAudW5tb3VudCgpO1xuXHRcdGFwcCA9IHVuZGVmaW5lZDtcblx0fVxuXHRpZiAocm9vdCkge1xuXHRcdHJvb3QucmVtb3ZlKCk7XG5cdFx0cm9vdCA9IHVuZGVmaW5lZDtcblx0fVxufTtcblxuY29uc3Qgc2hvd0RpYWxvZyA9ICgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkID0+IHtcblx0Y29uc3QgaWRzOiBzdHJpbmdbXSA9IGxvYWRJZHMoJGJvZHkpO1xuXHRpZiAoIWlkcy5sZW5ndGgpIHtcblx0XHR2b2lkIG13Lm5vdGlmeShnZXRNZXNzYWdlKCdlcnJOb1JldmlzaW9uUHJvdmlkZWQnKSwge1xuXHRcdFx0dGFnOiAnUlJEJyxcblx0XHRcdHR5cGU6ICdlcnJvcicsXG5cdFx0fSk7XG5cblx0XHRyZXR1cm47XG5cdH1cblxuXHRkaXNwb3NlRGlhbG9nKCk7XG5cdHJvb3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0ZG9jdW1lbnQuYm9keS5hcHBlbmQocm9vdCk7XG5cdGFwcCA9IGNyZWF0ZUFwcChBcHAsIHtcblx0XHRpZHMsXG5cdFx0b25DbG9zZTogZGlzcG9zZURpYWxvZyxcblx0fSk7XG5cdGFwcC5tb3VudChyb290KTtcbn07XG5cbmV4cG9ydCB7c2hvd0RpYWxvZ307XG4iLCAiPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cbmltcG9ydCB7Q2R4Q2hlY2tib3gsIENkeERpYWxvZywgQ2R4RmllbGQsIENkeFNlbGVjdCwgQ2R4VGV4dEFyZWF9IGZyb20gJ0B3aWtpbWVkaWEvY29kZXgnO1xuaW1wb3J0IHthcHBseUNvbmZpZywgY29uZmlnfSBmcm9tICcuL21vZHVsZXMvcnJkQ29uZmlnJztcbmltcG9ydCB7Y29tcHV0ZWQsIHJlZiwgd2F0Y2h9IGZyb20gJ3Z1ZSc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vbW9kdWxlcy9pMThuJztcbmltcG9ydCB7aXNTcGVjaWFsTG9nfSBmcm9tICcuL21vZHVsZXMvaXNTcGVjaWFsTG9nJztcbmltcG9ydCB7c3VibWl0fSBmcm9tICcuL21vZHVsZXMvc3VibWl0JztcblxuY29uc3QgcHJvcHMgPSBkZWZpbmVQcm9wczx7XG5cdGlkczogc3RyaW5nW107XG5cdG9uQ2xvc2U6ICgpID0+IHZvaWQ7XG59PigpO1xuXG5jb25zdCBvcGVuID0gcmVmKHRydWUpO1xuY29uc3QgaGlkZUNvbnRlbnQgPSByZWYoQm9vbGVhbihjb25maWcuY2hlY2tib3hlcy5ycmRIaWRlQ29udGVudCkpO1xuY29uc3QgaGlkZVVzZXJuYW1lID0gcmVmKEJvb2xlYW4oY29uZmlnLmNoZWNrYm94ZXMucnJkSGlkZVVzZXJuYW1lKSk7XG5jb25zdCBoaWRlU3VtbWFyeSA9IHJlZihCb29sZWFuKGNvbmZpZy5jaGVja2JveGVzLnJyZEhpZGVTdW1tYXJ5KSk7XG5jb25zdCByZWFzb24gPSByZWYoY29uZmlnLm90aGVycy5ycmRSZWFzb24gPz8gJycpO1xuY29uc3Qgb3RoZXJSZWFzb25zID0gcmVmKGNvbmZpZy5vdGhlcnMucnJkT3RoZXJSZWFzb25zID8/ICcnKTtcblxuY29uc3QgcmVhc29uSXRlbXMgPSBjb21wdXRlZCgoKSA9PiBbXG5cdHt2YWx1ZTogZ2V0TWVzc2FnZSgnaGlkZVJlYXNvblJEMScpLCBsYWJlbDogZ2V0TWVzc2FnZSgnaGlkZVJlYXNvblJEMScpfSxcblx0e3ZhbHVlOiBnZXRNZXNzYWdlKCdoaWRlUmVhc29uUkQyJyksIGxhYmVsOiBnZXRNZXNzYWdlKCdoaWRlUmVhc29uUkQyJyl9LFxuXHR7dmFsdWU6IGdldE1lc3NhZ2UoJ2hpZGVSZWFzb25SRDMnKSwgbGFiZWw6IGdldE1lc3NhZ2UoJ2hpZGVSZWFzb25SRDMnKX0sXG5cdHt2YWx1ZTogZ2V0TWVzc2FnZSgnaGlkZVJlYXNvblJENCcpLCBsYWJlbDogZ2V0TWVzc2FnZSgnaGlkZVJlYXNvblJENCcpfSxcblx0e3ZhbHVlOiBnZXRNZXNzYWdlKCdoaWRlUmVhc29uUkQ1JyksIGxhYmVsOiBnZXRNZXNzYWdlKCdoaWRlUmVhc29uUkQ1Jyl9LFxuXHR7dmFsdWU6IGdldE1lc3NhZ2UoJ2hpZGVSZWFzb25PUzEnKSwgbGFiZWw6IGdldE1lc3NhZ2UoJ2hpZGVSZWFzb25PUzEnKX0sXG5cdHt2YWx1ZTogZ2V0TWVzc2FnZSgnaGlkZVJlYXNvbk9TMicpLCBsYWJlbDogZ2V0TWVzc2FnZSgnaGlkZVJlYXNvbk9TMicpfSxcblx0e3ZhbHVlOiBnZXRNZXNzYWdlKCdoaWRlUmVhc29uT1MzJyksIGxhYmVsOiBnZXRNZXNzYWdlKCdoaWRlUmVhc29uT1MzJyl9LFxuXHR7dmFsdWU6IGdldE1lc3NhZ2UoJ2hpZGVSZWFzb25PUzQnKSwgbGFiZWw6IGdldE1lc3NhZ2UoJ2hpZGVSZWFzb25PUzQnKX0sXG5cdHt2YWx1ZTogJycsIGxhYmVsOiBnZXRNZXNzYWdlKCdoaWRlUmVhc29uT3RoZXInKX0sXG5dKTtcblxuY29uc3QgcHJpbWFyeUFjdGlvbiA9IGNvbXB1dGVkKCgpID0+ICh7XG5cdGxhYmVsOiBnZXRNZXNzYWdlKCdkaWFsb2dCdXR0b25TdWJtaXQnKSxcblx0YWN0aW9uVHlwZTogJ3Byb2dyZXNzaXZlJyBhcyBjb25zdCxcbn0pKTtcblxuY29uc3QgZGVmYXVsdEFjdGlvbiA9IGNvbXB1dGVkKCgpID0+ICh7XG5cdGxhYmVsOiBnZXRNZXNzYWdlKCdkaWFsb2dCdXR0b25DYW5jZWwnKSxcbn0pKTtcblxud2F0Y2goXG5cdCgpID0+IFtoaWRlQ29udGVudC52YWx1ZSwgaGlkZVVzZXJuYW1lLnZhbHVlLCBoaWRlU3VtbWFyeS52YWx1ZSwgcmVhc29uLnZhbHVlLCBvdGhlclJlYXNvbnMudmFsdWVdLFxuXHQoKSA9PiB7XG5cdFx0YXBwbHlDb25maWcoXG5cdFx0XHR7XG5cdFx0XHRcdHJyZEhpZGVDb250ZW50OiBoaWRlQ29udGVudC52YWx1ZSA/PyBmYWxzZSxcblx0XHRcdFx0cnJkSGlkZVVzZXJuYW1lOiBoaWRlVXNlcm5hbWUudmFsdWUgPz8gZmFsc2UsXG5cdFx0XHRcdHJyZEhpZGVTdW1tYXJ5OiBoaWRlU3VtbWFyeS52YWx1ZSA/PyBmYWxzZSxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdHJyZFJlYXNvbjogcmVhc29uLnZhbHVlID8/ICcnLFxuXHRcdFx0XHRycmRPdGhlclJlYXNvbnM6IG90aGVyUmVhc29ucy52YWx1ZSA/PyAnJyxcblx0XHRcdH1cblx0XHQpO1xuXHR9LFxuXHR7ZGVlcDogdHJ1ZX1cbik7XG5cbmNvbnN0IHN1Ym1pdERpYWxvZyA9ICgpOiB2b2lkID0+IHtcblx0Y29uc3Qgc2hvdWxkSGlkZUNvbnRlbnQgPSBoaWRlQ29udGVudC52YWx1ZTtcblx0Y29uc3Qgc2hvdWxkSGlkZVVzZXJuYW1lID0gaGlkZVVzZXJuYW1lLnZhbHVlO1xuXHRjb25zdCBzaG91bGRIaWRlU3VtbWFyeSA9IGhpZGVTdW1tYXJ5LnZhbHVlO1xuXHRjb25zdCBycmRSZWFzb24gPSByZWFzb24udmFsdWUgfHwgdW5kZWZpbmVkO1xuXHRsZXQgcnJkT3RoZXJSZWFzb25zID0gb3RoZXJSZWFzb25zLnZhbHVlIHx8IHVuZGVmaW5lZDtcblxuXHRpZiAocnJkT3RoZXJSZWFzb25zICYmIHJyZFJlYXNvbikge1xuXHRcdHJyZE90aGVyUmVhc29ucyA9IGDvvIwke3JyZE90aGVyUmVhc29uc31gO1xuXHR9XG5cblx0Y29uc3QgdG9IaWRlOiBzdHJpbmdbXSA9IFtdO1xuXHRpZiAoc2hvdWxkSGlkZUNvbnRlbnQpIHtcblx0XHR0b0hpZGUucHVzaChpc1NwZWNpYWxMb2coKSA/IGdldE1lc3NhZ2UoJ2hpZGVMb2cnKSA6IGdldE1lc3NhZ2UoJ2hpZGVDb250ZW50JykpO1xuXHR9XG5cdGlmIChzaG91bGRIaWRlVXNlcm5hbWUpIHtcblx0XHR0b0hpZGUucHVzaChnZXRNZXNzYWdlKCdoaWRlVXNlcm5hbWUnKSk7XG5cdH1cblx0aWYgKHNob3VsZEhpZGVTdW1tYXJ5KSB7XG5cdFx0dG9IaWRlLnB1c2goZ2V0TWVzc2FnZSgnaGlkZVN1bW1hcnknKSk7XG5cdH1cblxuXHRpZiAoIXRvSGlkZS5sZW5ndGgpIHtcblx0XHR2b2lkIG13Lm5vdGlmeShnZXRNZXNzYWdlKCdlcnJOb0l0ZW1Qcm92aWRlZCcpLCB7XG5cdFx0XHR0YWc6ICdSUkQnLFxuXHRcdFx0dHlwZTogJ2Vycm9yJyxcblx0XHR9KTtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRsZXQgY29udCA9IHRydWU7XG5cdGlmICghcnJkUmVhc29uICYmICFycmRPdGhlclJlYXNvbnMpIHtcblx0XHRjb250ID0gY29uZmlybShnZXRNZXNzYWdlKCd3YXJuTm9SZWFzb25Qcm92aWRlZCcpKTtcblx0fVxuXG5cdGlmIChjb250KSB7XG5cdFx0b3Blbi52YWx1ZSA9IGZhbHNlO1xuXHRcdHZvaWQgc3VibWl0KHByb3BzLmlkcywgdG9IaWRlLmpvaW4oJ+OAgScpLCBycmRSZWFzb24gPz8gJycsIHJyZE90aGVyUmVhc29ucyA/PyAnJyk7XG5cdFx0cHJvcHMub25DbG9zZSgpO1xuXHR9XG59O1xuXG5jb25zdCBjbG9zZURpYWxvZyA9ICgpOiB2b2lkID0+IHtcblx0b3Blbi52YWx1ZSA9IGZhbHNlO1xuXHRhcHBseUNvbmZpZyhcblx0XHR7XG5cdFx0XHRycmRIaWRlQ29udGVudDogaGlkZUNvbnRlbnQudmFsdWUgPz8gZmFsc2UsXG5cdFx0XHRycmRIaWRlVXNlcm5hbWU6IGhpZGVVc2VybmFtZS52YWx1ZSA/PyBmYWxzZSxcblx0XHRcdHJyZEhpZGVTdW1tYXJ5OiBoaWRlU3VtbWFyeS52YWx1ZSA/PyBmYWxzZSxcblx0XHR9LFxuXHRcdHtcblx0XHRcdHJyZFJlYXNvbjogcmVhc29uLnZhbHVlIHx8ICcnLFxuXHRcdFx0cnJkT3RoZXJSZWFzb25zOiBvdGhlclJlYXNvbnMudmFsdWUgfHwgJycsXG5cdFx0fVxuXHQpO1xuXHRwcm9wcy5vbkNsb3NlKCk7XG59O1xuPC9zY3JpcHQ+XG5cbjx0ZW1wbGF0ZT5cblx0PGNkeC1kaWFsb2dcblx0XHR2LW1vZGVsOm9wZW49XCJvcGVuXCJcblx0XHQ6dGl0bGU9XCJnZXRNZXNzYWdlKCdkaWFsb2dUaXRsZScpXCJcblx0XHQ6dXNlLWNsb3NlLWJ1dHRvbj1cInRydWVcIlxuXHRcdDpwcmltYXJ5LWFjdGlvbj1cInByaW1hcnlBY3Rpb25cIlxuXHRcdDpkZWZhdWx0LWFjdGlvbj1cImRlZmF1bHRBY3Rpb25cIlxuXHRcdEB1cGRhdGU6b3Blbj1cIiRldmVudCA9PT0gZmFsc2UgJiYgY2xvc2VEaWFsb2coKVwiXG5cdFx0QHByaW1hcnk9XCJzdWJtaXREaWFsb2dcIlxuXHRcdEBkZWZhdWx0PVwiY2xvc2VEaWFsb2dcIlxuXHQ+XG5cdFx0PGRpdiBjbGFzcz1cInJyZC1kaWFsb2dfX2JvZHlcIj5cblx0XHRcdDxkaXYgY2xhc3M9XCJycmQtZGlhbG9nX19zZWN0aW9uXCI+XG5cdFx0XHRcdDxwPnt7IGdldE1lc3NhZ2UoJ2hpZGVJdGVtcycpIH19PC9wPlxuXHRcdFx0XHQ8Y2R4LWZpZWxkPlxuXHRcdFx0XHRcdDxjZHgtY2hlY2tib3ggdi1tb2RlbD1cImhpZGVDb250ZW50XCI+XG5cdFx0XHRcdFx0XHR7eyBpc1NwZWNpYWxMb2coKSA/IGdldE1lc3NhZ2UoJ2hpZGVMb2cnKSA6IGdldE1lc3NhZ2UoJ2hpZGVDb250ZW50JykgfX1cblx0XHRcdFx0XHQ8L2NkeC1jaGVja2JveD5cblx0XHRcdFx0PC9jZHgtZmllbGQ+XG5cdFx0XHRcdDxjZHgtZmllbGQ+XG5cdFx0XHRcdFx0PGNkeC1jaGVja2JveCB2LW1vZGVsPVwiaGlkZVVzZXJuYW1lXCI+e3sgZ2V0TWVzc2FnZSgnaGlkZVVzZXJuYW1lJykgfX08L2NkeC1jaGVja2JveD5cblx0XHRcdFx0PC9jZHgtZmllbGQ+XG5cdFx0XHRcdDxjZHgtZmllbGQ+XG5cdFx0XHRcdFx0PGNkeC1jaGVja2JveCB2LW1vZGVsPVwiaGlkZVN1bW1hcnlcIj57eyBnZXRNZXNzYWdlKCdoaWRlU3VtbWFyeScpIH19PC9jZHgtY2hlY2tib3g+XG5cdFx0XHRcdDwvY2R4LWZpZWxkPlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwicnJkLWRpYWxvZ19fc2VjdGlvblwiPlxuXHRcdFx0XHQ8cD57eyBnZXRNZXNzYWdlKCdoaWRlUmVhc29uJykgfX08L3A+XG5cdFx0XHRcdDxjZHgtZmllbGQ+XG5cdFx0XHRcdFx0PGNkeC1zZWxlY3Qgdi1tb2RlbDpzZWxlY3RlZD1cInJlYXNvblwiIDptZW51LWl0ZW1zPVwicmVhc29uSXRlbXNcIiAvPlxuXHRcdFx0XHQ8L2NkeC1maWVsZD5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzcz1cInJyZC1kaWFsb2dfX3NlY3Rpb25cIj5cblx0XHRcdFx0PHA+e3sgZ2V0TWVzc2FnZSgnb3RoZXJSZWFzb25zJykgfX08L3A+XG5cdFx0XHRcdDxjZHgtdGV4dC1hcmVhIHYtbW9kZWw9XCJvdGhlclJlYXNvbnNcIiByb3dzPVwiNFwiIC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0PC9jZHgtZGlhbG9nPlxuPC90ZW1wbGF0ZT5cblxuPHN0eWxlIGxhbmc9XCJsZXNzXCI+XG4ucnJkLWRpYWxvZ19fYm9keSB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGdhcDogMC43NXJlbTtcblx0bWluLXdpZHRoOiBtaW4oODV2dywgMjVyZW0pO1xufVxuXG4ucnJkLWRpYWxvZ19fc2VjdGlvbiB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGdhcDogMC41cmVtO1xufVxuXG4ucnJkLWRpYWxvZ19fc2VjdGlvbiBwIHtcblx0bWFyZ2luOiAwO1xufVxuPC9zdHlsZT5cbiIsICJpbXBvcnQgdHlwZSB7UnJkQ29uZmlnfSBmcm9tICcuL3R5cGVzJztcblxuY29uc3QgY29uZmlnOiBScmRDb25maWcgPSB7XG5cdGNoZWNrYm94ZXM6IHt9LFxuXHRvdGhlcnM6IHt9LFxufTtcblxuY29uc3QgYXBwbHlDb25maWcgPSAoY2hlY2tib3hlczogUnJkQ29uZmlnWydjaGVja2JveGVzJ10gPSB7fSwgb3RoZXJzOiBScmRDb25maWdbJ290aGVycyddID0ge30pOiB2b2lkID0+IHtcblx0Y29uZmlnLmNoZWNrYm94ZXMgPSBjaGVja2JveGVzO1xuXHRjb25maWcub3RoZXJzID0gb3RoZXJzO1xufTtcblxuZXhwb3J0IHthcHBseUNvbmZpZywgY29uZmlnfTtcbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge2luaXRNd0FwaX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxuY29uc3QgYXBpOiBtdy5BcGkgPSBpbml0TXdBcGkoYFJSRC8ke09QVElPTlMudmVyc2lvbn1gKTtcblxuZXhwb3J0IHthcGl9O1xuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7YXBpfSBmcm9tICcuL2FwaSc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vaTE4bic7XG5pbXBvcnQge3VuaXF1ZUFycmF5fSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG5jb25zdCBxdWVyeVJldmlzaW9ucyA9IGFzeW5jICh0aXRsZXM6IHN0cmluZyB8IHN0cmluZ1tdKSA9PiB7XG5cdGNvbnN0IHBhcmFtczogQXBpUXVlcnlSZXZpc2lvbnNQYXJhbXMgPSB7XG5cdFx0dGl0bGVzLFxuXHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0cHJvcDogJ3JldmlzaW9ucycsXG5cdFx0cnZwcm9wOiAnY29udGVudCcsXG5cdFx0cnZzbG90czogJ21haW4nLFxuXHR9O1xuXHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGFwaS5nZXQocGFyYW1zKTtcblxuXHRyZXR1cm4gcmVzcG9uc2U7XG59O1xuXG5jb25zdCBlZGl0ID0gYXN5bmMgKHRpdGxlOiBzdHJpbmcsIHRleHQ6IHN0cmluZywgc3VtbWFyeT86IHN0cmluZykgPT4ge1xuXHRjb25zdCBwYXJhbXM6IEFwaUVkaXRQYWdlUGFyYW1zID0ge1xuXHRcdHRpdGxlLFxuXHRcdHRleHQsXG5cdFx0YWN0aW9uOiAnZWRpdCcsXG5cdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHR9O1xuXHRpZiAoc3VtbWFyeSkge1xuXHRcdHBhcmFtcy5zdW1tYXJ5ID0gc3VtbWFyeTtcblx0fVxuXHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGFwaS5wb3N0V2l0aEVkaXRUb2tlbihwYXJhbXMpO1xuXG5cdHJldHVybiByZXNwb25zZTtcbn07XG5cbmNvbnN0IHN1Ym1pdCA9IGFzeW5jIChpZHM6IHN0cmluZ1tdLCB0b0hpZGU6IHN0cmluZywgcmVhc29uOiBzdHJpbmcsIG90aGVyUmVhc29uczogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiA9PiB7XG5cdGNvbnN0IHt3Z1BhZ2VOYW1lfSA9IG13LmNvbmZpZy5nZXQoKTtcblxuXHRmb3IgKGNvbnN0IFJEaWQgb2YgWzEsIDIsIDMsIDQsIDVdKSB7XG5cdFx0aWYgKHJlYXNvbi5pbmNsdWRlcyhgUkQke1JEaWR9YCkpIHtcblx0XHRcdHJlYXNvbiA9IGBSRCR7UkRpZH1gO1xuXHRcdFx0YnJlYWs7XG5cdFx0fVxuXHR9XG5cblx0Zm9yIChjb25zdCBPU2lkIG9mIFsxLCAyLCAzLCA0XSkge1xuXHRcdGlmIChyZWFzb24uaW5jbHVkZXMoYE9TJHtPU2lkfWApKSB7XG5cdFx0XHRyZWFzb24gPSBgT1Mke09TaWR9YDtcblx0XHRcdGJyZWFrO1xuXHRcdH1cblx0fVxuXG5cdGNvbnN0IHJyZEFycjogc3RyaW5nW10gPSBbXG5cdFx0J3t7UmV2ZGVsJyxcblx0XHQnfHN0YXR1cyA9ICcsXG5cdFx0YHxhcnRpY2xlID0gJHt3Z1BhZ2VOYW1lfWAsXG5cdFx0YHxzZXQgPSAke3RvSGlkZX1gLFxuXHRcdGB8cmVhc29uID0gJHtyZWFzb259JHtvdGhlclJlYXNvbnN9YCxcblx0XTtcblxuXHRmb3IgKGNvbnN0IFtpbmRleCwgaWRdIG9mIHVuaXF1ZUFycmF5KGlkcykuZW50cmllcygpKSB7XG5cdFx0Ly8gUmVwbGFjZSBTZXQgd2l0aCB1bmlxdWVBcnJheSwgYXZvaWRpbmcgY29yZS1qcyBwb2x5ZmlsbGluZ1xuXHRcdHJyZEFycltycmRBcnIubGVuZ3RoXSA9IGB8aWQke2luZGV4ICsgMX0gPSAke2lkfWA7XG5cdH1cblx0cnJkQXJyW3JyZEFyci5sZW5ndGhdID0gJ319XFxu4oCU4oCUfn4nLmNvbmNhdCgnfn4nKTtcblxuXHR0cnkge1xuXHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcXVlcnlSZXZpc2lvbnMoT1BUSU9OUy5ycmRQYWdlKTtcblxuXHRcdGxldCBjb250ZW50OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cdFx0aWYgKHJlc3BvbnNlWydxdWVyeSddPy5wYWdlcykge1xuXHRcdFx0Y29udGVudCA9IHJlc3BvbnNlWydxdWVyeSddLnBhZ2VzWzBdLnJldmlzaW9uc1swXS5zbG90cy5tYWluLmNvbnRlbnQgYXMgc3RyaW5nO1xuXHRcdH1cblxuXHRcdGlmIChjb250ZW50ID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHZvaWQgbXcubm90aWZ5KGBFcnJvciB3aGVuIGxvYWRpbmcgcGFnZSAke09QVElPTlMucnJkUGFnZX06IG1pc3NpbmdgLCB7XG5cdFx0XHRcdHRhZzogJ1JSRCcsXG5cdFx0XHRcdHR5cGU6ICdlcnJvcicsXG5cdFx0XHR9KTtcblxuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHRyeSB7XG5cdFx0XHRjb25zdCByZXN1bHQgPSBhd2FpdCBlZGl0KE9QVElPTlMucnJkUGFnZSwgYCR7Y29udGVudH1cXG5cXG4ke3JyZEFyci5qb2luKCdcXG4nKX1gLCBnZXRNZXNzYWdlKCdlZGl0U3VtbWFyeScpKTtcblxuXHRcdFx0aWYgKHJlc3VsdFsnZWRpdCddPy5yZXN1bHQgPT09ICdTdWNjZXNzJykge1xuXHRcdFx0XHRsb2NhdGlvbi5yZXBsYWNlKG13LnV0aWwuZ2V0VXJsKE9QVElPTlMucnJkUGFnZSkpO1xuXHRcdFx0fSBlbHNlIGlmIChyZXN1bHRbJ2Vycm9yJ10/LmNvZGUpIHtcblx0XHRcdFx0dm9pZCBtdy5ub3RpZnkoYFNvbWUgZXJyb3JzIG9jY3VyZWQgd2hpbGUgc2F2aW5nIHBhZ2U6ICR7cmVzdWx0WydlcnJvciddLmNvZGV9YCwge1xuXHRcdFx0XHRcdHRhZzogJ1JSRCcsXG5cdFx0XHRcdFx0dHlwZTogJ2Vycm9yJyxcblx0XHRcdFx0fSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR2b2lkIG13Lm5vdGlmeSgnU29tZSBlcnJvcnMgb2NjdXJlZCB3aGlsZSBzYXZpbmcgcGFnZTogdW5rbm93bicsIHtcblx0XHRcdFx0XHR0YWc6ICdSUkQnLFxuXHRcdFx0XHRcdHR5cGU6ICdlcnJvcicsXG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdH0gY2F0Y2gge1xuXHRcdFx0dm9pZCBtdy5ub3RpZnkoYEVycm9yIHdoZW4gZWRpdGluZyBwYWdlICR7T1BUSU9OUy5ycmRQYWdlfWAsIHt0YWc6ICdSUkQnLCB0eXBlOiAnZXJyb3InfSk7XG5cdFx0fVxuXHR9IGNhdGNoIHtcblx0XHR2b2lkIG13Lm5vdGlmeShgRXJyb3Igd2hlbiBsb2FkaW5nIHBhZ2UgJHtPUFRJT05TLnJyZFBhZ2V9YCwge3RhZzogJ1JSRCcsIHR5cGU6ICdlcnJvcid9KTtcblx0fVxufTtcblxuZXhwb3J0IHtzdWJtaXR9O1xuIiwgImltcG9ydCB7IHRvRGlzcGxheVN0cmluZyBhcyBfdG9EaXNwbGF5U3RyaW5nLCBjcmVhdGVFbGVtZW50Vk5vZGUgYXMgX2NyZWF0ZUVsZW1lbnRWTm9kZSwgY3JlYXRlVGV4dFZOb2RlIGFzIF9jcmVhdGVUZXh0Vk5vZGUsIHdpdGhDdHggYXMgX3dpdGhDdHgsIGNyZWF0ZVZOb2RlIGFzIF9jcmVhdGVWTm9kZSwgb3BlbkJsb2NrIGFzIF9vcGVuQmxvY2ssIGNyZWF0ZUJsb2NrIGFzIF9jcmVhdGVCbG9jayB9IGZyb20gXCJ2dWVcIlxuXG5jb25zdCBfaG9pc3RlZF8xID0geyBjbGFzczogXCJycmQtZGlhbG9nX19ib2R5XCIgfVxuY29uc3QgX2hvaXN0ZWRfMiA9IHsgY2xhc3M6IFwicnJkLWRpYWxvZ19fc2VjdGlvblwiIH1cbmNvbnN0IF9ob2lzdGVkXzMgPSB7IGNsYXNzOiBcInJyZC1kaWFsb2dfX3NlY3Rpb25cIiB9XG5jb25zdCBfaG9pc3RlZF80ID0geyBjbGFzczogXCJycmQtZGlhbG9nX19zZWN0aW9uXCIgfVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyKF9jdHgsIF9jYWNoZSwgJHByb3BzLCAkc2V0dXAsICRkYXRhLCAkb3B0aW9ucykge1xuICByZXR1cm4gKF9vcGVuQmxvY2soKSwgX2NyZWF0ZUJsb2NrKCRzZXR1cFtcIkNkeERpYWxvZ1wiXSwge1xuICAgIG9wZW46ICRzZXR1cC5vcGVuLFxuICAgIFwib25VcGRhdGU6b3BlblwiOiBbXG4gICAgICBfY2FjaGVbNV0gfHwgKF9jYWNoZVs1XSA9ICRldmVudCA9PiAoKCRzZXR1cC5vcGVuKSA9ICRldmVudCkpLFxuICAgICAgX2NhY2hlWzZdIHx8IChfY2FjaGVbNl0gPSAkZXZlbnQgPT4gKCRldmVudCA9PT0gZmFsc2UgJiYgJHNldHVwLmNsb3NlRGlhbG9nKCkpKVxuICAgIF0sXG4gICAgdGl0bGU6ICRzZXR1cC5nZXRNZXNzYWdlKCdkaWFsb2dUaXRsZScpLFxuICAgIFwidXNlLWNsb3NlLWJ1dHRvblwiOiB0cnVlLFxuICAgIFwicHJpbWFyeS1hY3Rpb25cIjogJHNldHVwLnByaW1hcnlBY3Rpb24sXG4gICAgXCJkZWZhdWx0LWFjdGlvblwiOiAkc2V0dXAuZGVmYXVsdEFjdGlvbixcbiAgICBvblByaW1hcnk6ICRzZXR1cC5zdWJtaXREaWFsb2csXG4gICAgb25EZWZhdWx0OiAkc2V0dXAuY2xvc2VEaWFsb2dcbiAgfSwge1xuICAgIGRlZmF1bHQ6IF93aXRoQ3R4KCgpID0+IFtcbiAgICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJkaXZcIiwgX2hvaXN0ZWRfMSwgW1xuICAgICAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwiZGl2XCIsIF9ob2lzdGVkXzIsIFtcbiAgICAgICAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwicFwiLCBudWxsLCBfdG9EaXNwbGF5U3RyaW5nKCRzZXR1cC5nZXRNZXNzYWdlKCdoaWRlSXRlbXMnKSksIDEgLyogVEVYVCAqLyksXG4gICAgICAgICAgX2NyZWF0ZVZOb2RlKCRzZXR1cFtcIkNkeEZpZWxkXCJdLCBudWxsLCB7XG4gICAgICAgICAgICBkZWZhdWx0OiBfd2l0aEN0eCgoKSA9PiBbXG4gICAgICAgICAgICAgIF9jcmVhdGVWTm9kZSgkc2V0dXBbXCJDZHhDaGVja2JveFwiXSwge1xuICAgICAgICAgICAgICAgIG1vZGVsVmFsdWU6ICRzZXR1cC5oaWRlQ29udGVudCxcbiAgICAgICAgICAgICAgICBcIm9uVXBkYXRlOm1vZGVsVmFsdWVcIjogX2NhY2hlWzBdIHx8IChfY2FjaGVbMF0gPSAkZXZlbnQgPT4gKCgkc2V0dXAuaGlkZUNvbnRlbnQpID0gJGV2ZW50KSlcbiAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IF93aXRoQ3R4KCgpID0+IFtcbiAgICAgICAgICAgICAgICAgIF9jcmVhdGVUZXh0Vk5vZGUoX3RvRGlzcGxheVN0cmluZygkc2V0dXAuaXNTcGVjaWFsTG9nKCkgPyAkc2V0dXAuZ2V0TWVzc2FnZSgnaGlkZUxvZycpIDogJHNldHVwLmdldE1lc3NhZ2UoJ2hpZGVDb250ZW50JykpLCAxIC8qIFRFWFQgKi8pXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgXzogMSAvKiBTVEFCTEUgKi9cbiAgICAgICAgICAgICAgfSwgOCAvKiBQUk9QUyAqLywgW1wibW9kZWxWYWx1ZVwiXSlcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgXzogMSAvKiBTVEFCTEUgKi9cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfY3JlYXRlVk5vZGUoJHNldHVwW1wiQ2R4RmllbGRcIl0sIG51bGwsIHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IF93aXRoQ3R4KCgpID0+IFtcbiAgICAgICAgICAgICAgX2NyZWF0ZVZOb2RlKCRzZXR1cFtcIkNkeENoZWNrYm94XCJdLCB7XG4gICAgICAgICAgICAgICAgbW9kZWxWYWx1ZTogJHNldHVwLmhpZGVVc2VybmFtZSxcbiAgICAgICAgICAgICAgICBcIm9uVXBkYXRlOm1vZGVsVmFsdWVcIjogX2NhY2hlWzFdIHx8IChfY2FjaGVbMV0gPSAkZXZlbnQgPT4gKCgkc2V0dXAuaGlkZVVzZXJuYW1lKSA9ICRldmVudCkpXG4gICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiBfd2l0aEN0eCgoKSA9PiBbXG4gICAgICAgICAgICAgICAgICBfY3JlYXRlVGV4dFZOb2RlKF90b0Rpc3BsYXlTdHJpbmcoJHNldHVwLmdldE1lc3NhZ2UoJ2hpZGVVc2VybmFtZScpKSwgMSAvKiBURVhUICovKVxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF86IDEgLyogU1RBQkxFICovXG4gICAgICAgICAgICAgIH0sIDggLyogUFJPUFMgKi8sIFtcIm1vZGVsVmFsdWVcIl0pXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF86IDEgLyogU1RBQkxFICovXG4gICAgICAgICAgfSksXG4gICAgICAgICAgX2NyZWF0ZVZOb2RlKCRzZXR1cFtcIkNkeEZpZWxkXCJdLCBudWxsLCB7XG4gICAgICAgICAgICBkZWZhdWx0OiBfd2l0aEN0eCgoKSA9PiBbXG4gICAgICAgICAgICAgIF9jcmVhdGVWTm9kZSgkc2V0dXBbXCJDZHhDaGVja2JveFwiXSwge1xuICAgICAgICAgICAgICAgIG1vZGVsVmFsdWU6ICRzZXR1cC5oaWRlU3VtbWFyeSxcbiAgICAgICAgICAgICAgICBcIm9uVXBkYXRlOm1vZGVsVmFsdWVcIjogX2NhY2hlWzJdIHx8IChfY2FjaGVbMl0gPSAkZXZlbnQgPT4gKCgkc2V0dXAuaGlkZVN1bW1hcnkpID0gJGV2ZW50KSlcbiAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IF93aXRoQ3R4KCgpID0+IFtcbiAgICAgICAgICAgICAgICAgIF9jcmVhdGVUZXh0Vk5vZGUoX3RvRGlzcGxheVN0cmluZygkc2V0dXAuZ2V0TWVzc2FnZSgnaGlkZVN1bW1hcnknKSksIDEgLyogVEVYVCAqLylcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBfOiAxIC8qIFNUQUJMRSAqL1xuICAgICAgICAgICAgICB9LCA4IC8qIFBST1BTICovLCBbXCJtb2RlbFZhbHVlXCJdKVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfOiAxIC8qIFNUQUJMRSAqL1xuICAgICAgICAgIH0pXG4gICAgICAgIF0pLFxuICAgICAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwiZGl2XCIsIF9ob2lzdGVkXzMsIFtcbiAgICAgICAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwicFwiLCBudWxsLCBfdG9EaXNwbGF5U3RyaW5nKCRzZXR1cC5nZXRNZXNzYWdlKCdoaWRlUmVhc29uJykpLCAxIC8qIFRFWFQgKi8pLFxuICAgICAgICAgIF9jcmVhdGVWTm9kZSgkc2V0dXBbXCJDZHhGaWVsZFwiXSwgbnVsbCwge1xuICAgICAgICAgICAgZGVmYXVsdDogX3dpdGhDdHgoKCkgPT4gW1xuICAgICAgICAgICAgICBfY3JlYXRlVk5vZGUoJHNldHVwW1wiQ2R4U2VsZWN0XCJdLCB7XG4gICAgICAgICAgICAgICAgc2VsZWN0ZWQ6ICRzZXR1cC5yZWFzb24sXG4gICAgICAgICAgICAgICAgXCJvblVwZGF0ZTpzZWxlY3RlZFwiOiBfY2FjaGVbM10gfHwgKF9jYWNoZVszXSA9ICRldmVudCA9PiAoKCRzZXR1cC5yZWFzb24pID0gJGV2ZW50KSksXG4gICAgICAgICAgICAgICAgXCJtZW51LWl0ZW1zXCI6ICRzZXR1cC5yZWFzb25JdGVtc1xuICAgICAgICAgICAgICB9LCBudWxsLCA4IC8qIFBST1BTICovLCBbXCJzZWxlY3RlZFwiLCBcIm1lbnUtaXRlbXNcIl0pXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF86IDEgLyogU1RBQkxFICovXG4gICAgICAgICAgfSlcbiAgICAgICAgXSksXG4gICAgICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJkaXZcIiwgX2hvaXN0ZWRfNCwgW1xuICAgICAgICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJwXCIsIG51bGwsIF90b0Rpc3BsYXlTdHJpbmcoJHNldHVwLmdldE1lc3NhZ2UoJ290aGVyUmVhc29ucycpKSwgMSAvKiBURVhUICovKSxcbiAgICAgICAgICBfY3JlYXRlVk5vZGUoJHNldHVwW1wiQ2R4VGV4dEFyZWFcIl0sIHtcbiAgICAgICAgICAgIG1vZGVsVmFsdWU6ICRzZXR1cC5vdGhlclJlYXNvbnMsXG4gICAgICAgICAgICBcIm9uVXBkYXRlOm1vZGVsVmFsdWVcIjogX2NhY2hlWzRdIHx8IChfY2FjaGVbNF0gPSAkZXZlbnQgPT4gKCgkc2V0dXAub3RoZXJSZWFzb25zKSA9ICRldmVudCkpLFxuICAgICAgICAgICAgcm93czogXCI0XCJcbiAgICAgICAgICB9LCBudWxsLCA4IC8qIFBST1BTICovLCBbXCJtb2RlbFZhbHVlXCJdKVxuICAgICAgICBdKVxuICAgICAgXSlcbiAgICBdKSxcbiAgICBfOiAxIC8qIFNUQUJMRSAqL1xuICB9LCA4IC8qIFBST1BTICovLCBbXCJvcGVuXCIsIFwidGl0bGVcIiwgXCJwcmltYXJ5LWFjdGlvblwiLCBcImRlZmF1bHQtYWN0aW9uXCJdKSlcbn0iLCAiaW1wb3J0IHNjcmlwdCBmcm9tIFwiRDpcXFxcR2l0UmVwb3NpdG9yeVxcXFxRaXV3ZW5HYWRnZXRzXFxcXHNyY1xcXFxSUkRcXFxcQXBwLnZ1ZT90eXBlPXNjcmlwdFwiO2ltcG9ydCBcIkQ6XFxcXEdpdFJlcG9zaXRvcnlcXFxcUWl1d2VuR2FkZ2V0c1xcXFxzcmNcXFxcUlJEXFxcXEFwcC52dWU/dHlwZT1zdHlsZSZpbmRleD0wXCI7aW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcIkQ6XFxcXEdpdFJlcG9zaXRvcnlcXFxcUWl1d2VuR2FkZ2V0c1xcXFxzcmNcXFxcUlJEXFxcXEFwcC52dWU/dHlwZT10ZW1wbGF0ZVwiOyBzY3JpcHQucmVuZGVyID0gcmVuZGVyO3NjcmlwdC5fX2ZpbGUgPSBcInNyY1xcXFxSUkRcXFxcQXBwLnZ1ZVwiO2V4cG9ydCBkZWZhdWx0IHNjcmlwdDsiLCAiY29uc3QgbG9hZElkcyA9ICgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiBzdHJpbmdbXSA9PiB7XG5cdGNvbnN0IGlkczogc3RyaW5nW10gPSBbXTtcblxuXHRjb25zdCBib3hlczogSlF1ZXJ5PEhUTUxJbnB1dEVsZW1lbnQ+ID0gJGJvZHkuZmluZCgnaW5wdXQnKTtcblx0Zm9yIChjb25zdCBib3ggb2YgYm94ZXMpIHtcblx0XHRjb25zdCB7Y2hlY2tlZCwgbmFtZSwgdHlwZX0gPSBib3g7XG5cblx0XHRpZiAodHlwZSAhPT0gJ2NoZWNrYm94JyB8fCAhY2hlY2tlZCkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0Y29uc3QgaWRSZWdleDogUmVnRXhwID0gL2lkc1xcWyhcXGQrKV0vO1xuXHRcdGNvbnN0IGlkQXJyYXk6IFJlZ0V4cEV4ZWNBcnJheSB8IG51bGwgPSBpZFJlZ2V4LmV4ZWMobmFtZSk7XG5cdFx0aWYgKGlkQXJyYXk/LlsxXSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRbLCBpZHNbaWRzLmxlbmd0aF1dID0gaWRBcnJheTtcblx0fVxuXG5cdHJldHVybiBpZHM7XG59O1xuXG5leHBvcnQge2xvYWRJZHN9O1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNDLElBQUFBLFVBQVc7QUFDWCxJQUFBQyxVQUFXO0FDQVosSUFBQUMsZUFBd0JDLFFBQUEsa0JBQUE7QUFDeEIsSUFBQUMsY0FBdUJELFFBQUEsS0FBQTs7QUNIdkIsSUFBTUUsa0JBQWtCQSxNQUFNO0FBQzdCLFFBQU07SUFBQ0M7RUFBSyxJQUFJQztBQUNoQixTQUFPO0lBQ05DLGFBQWFGLE1BQ1osMkNBQ0EseUNBQ0Q7SUFDQUcsdUJBQXVCSCxNQUFNLGdCQUFnQixjQUFjO0lBQzNESSxtQkFBbUJKLE1BQU0sZ0JBQWdCLGNBQWM7SUFDdkRLLHNCQUFzQkwsTUFBTSxxQkFBcUIsbUJBQW1CO0lBQ3BFTSxX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QUFDLFFBQXlEO0FBQUEsY0FBOUMrRyxVQUFBRCxPQUFBM0c7QUFDVixjQUFNNkcsZ0JBQWdCTCxPQUFPLE1BQU1aLFdBQVdoQixLQUFLLENBQUM7QUFDcERnQyxnQkFBUUUsTUFBTUQsYUFBYTtNQUM1QjtJQUFBLFNBQUE1RyxLQUFBO0FBQUF5RyxpQkFBQXhHLEVBQUFELEdBQUE7SUFBQSxVQUFBO0FBQUF5RyxpQkFBQXZHLEVBQUE7SUFBQTtFQUNEO0FBQ0QsQ0FBQzsiLAogICJuYW1lcyI6IFsicnJkUGFnZSIsICJ2ZXJzaW9uIiwgImltcG9ydF9jb2RleCIsICJyZXF1aXJlIiwgImltcG9ydF92dWUyIiwgImdldEkxOG5NZXNzYWdlcyIsICJ3Z1VMUyIsICJ3aW5kb3ciLCAiZWRpdFN1bW1hcnkiLCAiZXJyTm9SZXZpc2lvblByb3ZpZGVkIiwgImVyck5vSXRlbVByb3ZpZGVkIiwgIndhcm5Ob1JlYXNvblByb3ZpZGVkIiwgImhpZGVJdGVtcyIsICJoaWRlQ29udGVudCIsICJoaWRlTG9nIiwgImhpZGVVc2VybmFtZSIsICJoaWRlU3VtbWFyeSIsICJoaWRlUmVhc29uIiwgImhpZGVSZWFzb25SRDEiLCAiaGlkZVJlYXNvblJEMiIsICJoaWRlUmVhc29uUkQzIiwgImhpZGVSZWFzb25SRDQiLCAiaGlkZVJlYXNvblJENSIsICJoaWRlUmVhc29uT1MxIiwgImhpZGVSZWFzb25PUzIiLCAiaGlkZVJlYXNvbk9TMyIsICJoaWRlUmVhc29uT1M0IiwgImhpZGVSZWFzb25PdGhlciIsICJvdGhlclJlYXNvbnMiLCAiZGlhbG9nVGl0bGUiLCAiZGlhbG9nQnV0dG9uU3VibWl0IiwgImRpYWxvZ0J1dHRvbkNhbmNlbCIsICJyZXBvcnRCdXR0b25UaXRsZSIsICJyZXBvcnRCdXR0b25UZXh0IiwgInJlcG9ydEJ1dHRvbkxvZ1RleHQiLCAiaTE4bk1lc3NhZ2VzIiwgImdldE1lc3NhZ2UiLCAia2V5IiwgImlzU3BlY2lhbExvZyIsICJ3Z0Nhbm9uaWNhbFNwZWNpYWxQYWdlTmFtZSIsICJtdyIsICJjb25maWciLCAiZ2V0IiwgInByb3BzIiwgIl9fcHJvcHMiLCAiYnV0dG9uTGFiZWwiLCAiY29tcHV0ZWQiLCAiYnV0dG9uVGl0bGUiLCAiaW1wb3J0X3Z1ZTMiLCAicmVuZGVyIiwgIl9jdHgiLCAiX2NhY2hlIiwgIiRwcm9wcyIsICIkc2V0dXAiLCAiJGRhdGEiLCAiJG9wdGlvbnMiLCAib3BlbkJsb2NrIiwgImNyZWF0ZUJsb2NrIiwgImNsYXNzIiwgIndlaWdodCIsICJ0eXBlIiwgInRpdGxlIiwgIm9uQ2xpY2siLCAiZGVmYXVsdCIsICJ3aXRoQ3R4IiwgImNyZWF0ZVRleHRWTm9kZSIsICJ0b0Rpc3BsYXlTdHJpbmciLCAiXyIsICJSZXBvcnRCdXR0b25fZGVmYXVsdCIsICJfX2ZpbGUiLCAiUmVwb3J0QnV0dG9uX2RlZmF1bHQyIiwgImltcG9ydF92dWU4IiwgImltcG9ydF9leHRfZ2FkZ2V0MyIsICJpbXBvcnRfdnVlNyIsICJpbXBvcnRfY29kZXgyIiwgImNoZWNrYm94ZXMiLCAib3RoZXJzIiwgImFwcGx5Q29uZmlnIiwgImltcG9ydF92dWU1IiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgImFwaSIsICJpbml0TXdBcGkiLCAiY29uY2F0IiwgImltcG9ydF9leHRfZ2FkZ2V0MiIsICJxdWVyeVJldmlzaW9ucyIsICJfcmVmIiwgIl9hc3luY1RvR2VuZXJhdG9yIiwgInRpdGxlcyIsICJwYXJhbXMiLCAiYWN0aW9uIiwgImZvcm1hdCIsICJmb3JtYXR2ZXJzaW9uIiwgInByb3AiLCAicnZwcm9wIiwgInJ2c2xvdHMiLCAicmVzcG9uc2UiLCAiX3giLCAiYXBwbHkiLCAiYXJndW1lbnRzIiwgImVkaXQiLCAiX3JlZjIiLCAidGV4dCIsICJzdW1tYXJ5IiwgInBvc3RXaXRoRWRpdFRva2VuIiwgIl94MiIsICJfeDMiLCAiX3g0IiwgInN1Ym1pdCIsICJfcmVmMyIsICJpZHMiLCAidG9IaWRlIiwgInJlYXNvbiIsICJ3Z1BhZ2VOYW1lIiwgIl9pIiwgIl9hcnIiLCAibGVuZ3RoIiwgIlJEaWQiLCAiaW5jbHVkZXMiLCAiX2kyIiwgIl9hcnIyIiwgIk9TaWQiLCAicnJkQXJyIiwgIl9pdGVyYXRvciIsICJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsICJ1bmlxdWVBcnJheSIsICJlbnRyaWVzIiwgIl9zdGVwIiwgInMiLCAibiIsICJkb25lIiwgImluZGV4IiwgImlkIiwgInZhbHVlIiwgImVyciIsICJlIiwgImYiLCAiX3Jlc3BvbnNlJHF1ZXJ5IiwgImNvbnRlbnQiLCAicGFnZXMiLCAicmV2aXNpb25zIiwgInNsb3RzIiwgIm1haW4iLCAibm90aWZ5IiwgInRhZyIsICJfcmVzdWx0JGVkaXQiLCAiX3Jlc3VsdCRlcnJvciIsICJyZXN1bHQiLCAiam9pbiIsICJsb2NhdGlvbiIsICJyZXBsYWNlIiwgInV0aWwiLCAiZ2V0VXJsIiwgImNvZGUiLCAiX3g1IiwgIl94NiIsICJfeDciLCAiX3g4IiwgIm9wZW4iLCAicmVmIiwgIkJvb2xlYW4iLCAicnJkSGlkZUNvbnRlbnQiLCAicnJkSGlkZVVzZXJuYW1lIiwgInJyZEhpZGVTdW1tYXJ5IiwgIl9jb25maWckb3RoZXJzJHJyZFJlYSIsICJycmRSZWFzb24iLCAiX2NvbmZpZyRvdGhlcnMkcnJkT3RoIiwgInJyZE90aGVyUmVhc29ucyIsICJyZWFzb25JdGVtcyIsICJsYWJlbCIsICJwcmltYXJ5QWN0aW9uIiwgImFjdGlvblR5cGUiLCAiZGVmYXVsdEFjdGlvbiIsICJ3YXRjaCIsICJfaGlkZUNvbnRlbnQkdmFsdWUiLCAiX2hpZGVVc2VybmFtZSR2YWx1ZSIsICJfaGlkZVN1bW1hcnkkdmFsdWUiLCAiX3JlYXNvbiR2YWx1ZSIsICJfb3RoZXJSZWFzb25zJHZhbHVlIiwgImRlZXAiLCAic3VibWl0RGlhbG9nIiwgInNob3VsZEhpZGVDb250ZW50IiwgInNob3VsZEhpZGVVc2VybmFtZSIsICJzaG91bGRIaWRlU3VtbWFyeSIsICJwdXNoIiwgImNvbnQiLCAiY29uZmlybSIsICJvbkNsb3NlIiwgImNsb3NlRGlhbG9nIiwgIl9oaWRlQ29udGVudCR2YWx1ZTIiLCAiX2hpZGVVc2VybmFtZSR2YWx1ZTIiLCAiX2hpZGVTdW1tYXJ5JHZhbHVlMiIsICJpbXBvcnRfdnVlNiIsICJfaG9pc3RlZF8xIiwgIl9ob2lzdGVkXzIiLCAiX2hvaXN0ZWRfMyIsICJfaG9pc3RlZF80IiwgInJlbmRlcjIiLCAiJGV2ZW50IiwgIm9uUHJpbWFyeSIsICJvbkRlZmF1bHQiLCAiY3JlYXRlRWxlbWVudFZOb2RlIiwgImNyZWF0ZVZOb2RlIiwgIm1vZGVsVmFsdWUiLCAic2VsZWN0ZWQiLCAicm93cyIsICJBcHBfZGVmYXVsdCIsICJBcHBfZGVmYXVsdDIiLCAibG9hZElkcyIsICIkYm9keSIsICJib3hlcyIsICJmaW5kIiwgIl9pdGVyYXRvcjIiLCAiX3N0ZXAyIiwgImJveCIsICJjaGVja2VkIiwgIm5hbWUiLCAiaWRSZWdleCIsICJpZEFycmF5IiwgImV4ZWMiLCAiYXBwIiwgInJvb3QiLCAiZGlzcG9zZURpYWxvZyIsICJ1bm1vdW50IiwgInJlbW92ZSIsICJzaG93RGlhbG9nIiwgImRvY3VtZW50IiwgImNyZWF0ZUVsZW1lbnQiLCAiYm9keSIsICJhcHBlbmQiLCAiY3JlYXRlQXBwIiwgIm1vdW50IiwgImdldEJvZHkiLCAidGhlbiIsICJycmQiLCAid2dBY3Rpb24iLCAiQ0xBU1NfTkFNRVMiLCAiYnV0dG9uIiwgInJvb3QyIiwgIl9pdGVyYXRvcjMiLCAiX3N0ZXAzIiwgImVsZW1lbnQiLCAiYXBwZW5kRWxlbWVudCIsICJhZnRlciJdCn0K

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
var import_ext_gadget = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    editSummary: (0, import_ext_gadget.wgULS)("[[MediaWiki:Gadget-RRD.js|半自动提报]]修订版本删除", "[[MediaWiki:Gadget-RRD.js|半自動提報]]修訂版本刪除"),
    errNoRevisionProvided: (0, import_ext_gadget.wgULS)("您没有选择需隐藏的版本！", "您沒有選擇需隱藏的版本！"),
    errNoItemProvided: (0, import_ext_gadget.wgULS)("您没有选择需隐藏的项目！", "您沒有選擇需隱藏的項目！"),
    warnNoReasonProvided: (0, import_ext_gadget.wgULS)("您没有输入任何理由！确定要继续吗？", "您沒有輸入任何理由！確定要繼續嗎？"),
    hideItems: (0, import_ext_gadget.wgULS)("需隐藏的项目：", "需隱藏的項目："),
    hideContent: (0, import_ext_gadget.wgULS)("编辑内容", "編輯內容"),
    hideLog: (0, import_ext_gadget.wgULS)("日志目标与参数", "日誌目標與參數"),
    hideUsername: (0, import_ext_gadget.wgULS)("编辑者用户名", "編輯者用戶名"),
    hideSummary: (0, import_ext_gadget.wgULS)("编辑摘要", "編輯摘要"),
    hideReason: (0, import_ext_gadget.wgULS)("理据：", "理據："),
    hideReasonRD1: (0, import_ext_gadget.wgULS)("RD1：条目中明显侵犯著作权的内容", "RD1：條目中明顯侵犯著作權的內容"),
    hideReasonRD2: (0, import_ext_gadget.wgULS)("RD2：严重侮辱、贬低或攻击性文本", "RD2：嚴重侮辱、貶低或攻擊性文本"),
    hideReasonRD3: (0, import_ext_gadget.wgULS)("RD3：纯粹扰乱性内容", "純粹擾亂性內容"),
    hideReasonRD4: (0, import_ext_gadget.wgULS)("RD4：明显违反法律法规或违背公序良俗的内容", "RD4：明顯違反法律法規或違背公序良俗的內容"),
    hideReasonRD5: (0, import_ext_gadget.wgULS)("RD5：其他不宜公开的版本内容", "RD5：其他不宜公開的版本內容"),
    hideReasonOS1: (0, import_ext_gadget.wgULS)("OS1：未公开的个人资料", "OS1：未公開的個人資料"),
    hideReasonOS2: (0, import_ext_gadget.wgULS)("OS2：可能影响百科运作的内容", "OS2：可能影響百科運作的內容"),
    hideReasonOS3: (0, import_ext_gadget.wgULS)("OS3：破坏性、扰乱性用户名", "OS3：破壞性、擾亂性用戶名"),
    hideReasonOS4: (0, import_ext_gadget.wgULS)("OS4：原页面内容来自外部来源、不符合求闻百科方针，但经过改写后，已符合求闻百科方针的页面", "OS4：原頁面內容來自外部來源、不符合求聞百科方針，但經過覆寫後，已符合求聞百科方針的頁面"),
    hideReasonOther: (0, import_ext_gadget.wgULS)("仅使用下方的附加理由", "僅使用下方的附加理由"),
    otherReasons: (0, import_ext_gadget.wgULS)("附加理由（可选，不用签名）", "附加理由（可選，不用簽名）"),
    dialogTitle: (0, import_ext_gadget.wgULS)("提报修订版本删除", "提報修訂版本刪除"),
    dialogButtonSubmit: (0, import_ext_gadget.wgULS)("提报", "提報"),
    dialogButtonCancel: (0, import_ext_gadget.wgULS)("取消", "取消"),
    reportButtonTitle: (0, import_ext_gadget.wgULS)("将选中的版本提报到", "將選中的版本提報到"),
    reportButtonText: (0, import_ext_gadget.wgULS)("请求删除被选版本", "請求刪除被選版本"),
    reportButtonLogText: (0, import_ext_gadget.wgULS)("请求删除被选日志", "請求刪除被選日誌")
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
//! src/RRD/components/ReportButton.vue
ReportButton_default.render = render;
ReportButton_default.__file = "src\\RRD\\components\\ReportButton.vue";
var ReportButton_default2 = ReportButton_default;
//! src/RRD/RRD.ts
var import_vue8 = require("vue");
var import_ext_gadget4 = require("ext.gadget.Util");
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
var import_ext_gadget2 = require("ext.gadget.Util");
var api = (0, import_ext_gadget2.initMwApi)("RRD/".concat(version));
//! src/RRD/modules/submit.ts
var import_ext_gadget3 = require("ext.gadget.Util");
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
    var _iterator = _createForOfIteratorHelper((0, import_ext_gadget3.uniqueArray)(ids).entries()), _step;
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
App_default.__scopeId = "data-v-02fa7c9f";
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
void (0, import_ext_gadget4.getBody)().then(function rrd($body) {
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1JSRC9vcHRpb25zLmpzb24iLCAiZGlzdC9SUkQvc3JjL1JSRC9jb21wb25lbnRzL1JlcG9ydEJ1dHRvbi52dWUiLCAic3JjL1JSRC9tb2R1bGVzL2kxOG4udHMiLCAic3JjL1JSRC9tb2R1bGVzL2lzU3BlY2lhbExvZy50cyIsICJzZmMtdGVtcGxhdGU6RDpcXEdpdFJlcG9zaXRvcnlcXFFpdXdlbkdhZGdldHNcXHNyY1xcUlJEXFxjb21wb25lbnRzXFxSZXBvcnRCdXR0b24udnVlP3R5cGU9dGVtcGxhdGUiLCAic3JjL1JSRC9jb21wb25lbnRzL1JlcG9ydEJ1dHRvbi52dWUiLCAic3JjL1JSRC9SUkQudHMiLCAic3JjL1JSRC9tb2R1bGVzL3Nob3dEaWFsb2cudHMiLCAiZGlzdC9SUkQvc3JjL1JSRC9BcHAudnVlIiwgInNyYy9SUkQvbW9kdWxlcy9ycmRDb25maWcudHMiLCAic3JjL1JSRC9tb2R1bGVzL2FwaS50cyIsICJzcmMvUlJEL21vZHVsZXMvc3VibWl0LnRzIiwgInNmYy10ZW1wbGF0ZTpEOlxcR2l0UmVwb3NpdG9yeVxcUWl1d2VuR2FkZ2V0c1xcc3JjXFxSUkRcXEFwcC52dWU/dHlwZT10ZW1wbGF0ZSIsICJzcmMvUlJEL0FwcC52dWUiLCAic3JjL1JSRC9tb2R1bGVzL2xvYWRJZHMudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIntcblx0XCJycmRQYWdlXCI6IFwiUWl1d2VuX3RhbGs654mI5pys5Yig6Zmk5o+Q5oqlXCIsXG5cdFwidmVyc2lvblwiOiBcIjIuMFwiXG59XG4iLCAiPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cbmltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7Q2R4QnV0dG9ufSBmcm9tICdAd2lraW1lZGlhL2NvZGV4JztcbmltcG9ydCB7Y29tcHV0ZWR9IGZyb20gJ3Z1ZSc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4uL21vZHVsZXMvaTE4bic7XG5pbXBvcnQge2lzU3BlY2lhbExvZ30gZnJvbSAnLi4vbW9kdWxlcy9pc1NwZWNpYWxMb2cnO1xuXG5jb25zdCBwcm9wcyA9IGRlZmluZVByb3BzPHtcblx0b25DbGljazogKCkgPT4gdm9pZDtcbn0+KCk7XG5cbmNvbnN0IGJ1dHRvbkxhYmVsID0gY29tcHV0ZWQoKCkgPT5cblx0aXNTcGVjaWFsTG9nKCkgPyBnZXRNZXNzYWdlKCdyZXBvcnRCdXR0b25Mb2dUZXh0JykgOiBnZXRNZXNzYWdlKCdyZXBvcnRCdXR0b25UZXh0Jylcbik7XG5jb25zdCBidXR0b25UaXRsZSA9IGNvbXB1dGVkKCgpID0+IGdldE1lc3NhZ2UoJ3JlcG9ydEJ1dHRvblRpdGxlJykgKyBPUFRJT05TLnJyZFBhZ2UpO1xuPC9zY3JpcHQ+XG5cbjx0ZW1wbGF0ZT5cblx0PGNkeC1idXR0b25cblx0XHRjbGFzcz1cInJyZF9fcmVwb3J0XCJcblx0XHR3ZWlnaHQ9XCJwcmltYXJ5XCJcblx0XHR0eXBlPVwiYnV0dG9uXCJcblx0XHQ6YXJpYS1sYWJlbD1cImJ1dHRvblRpdGxlXCJcblx0XHQ6dGl0bGU9XCJidXR0b25UaXRsZVwiXG5cdFx0QGNsaWNrPVwicHJvcHMub25DbGlja1wiXG5cdD5cblx0XHR7eyBidXR0b25MYWJlbCB9fVxuXHQ8L2NkeC1idXR0b24+XG48L3RlbXBsYXRlPlxuIiwgImltcG9ydCB7d2dVTFN9IGZyb20gJ2V4dC5nYWRnZXQuaTE4bic7XG5cbmNvbnN0IGdldEkxOG5NZXNzYWdlcyA9ICgpID0+IHtcblx0cmV0dXJuIHtcblx0XHRlZGl0U3VtbWFyeTogd2dVTFMoXG5cdFx0XHQnW1tNZWRpYVdpa2k6R2FkZ2V0LVJSRC5qc3zljYroh6rliqjmj5DmiqVdXeS/ruiuoueJiOacrOWIoOmZpCcsXG5cdFx0XHQnW1tNZWRpYVdpa2k6R2FkZ2V0LVJSRC5qc3zljYroh6rli5Xmj5DloLFdXeS/ruiogueJiOacrOWIqumZpCdcblx0XHQpLFxuXHRcdGVyck5vUmV2aXNpb25Qcm92aWRlZDogd2dVTFMoJ+aCqOayoeaciemAieaLqemcgOmakOiXj+eahOeJiOacrO+8gScsICfmgqjmspLmnInpgbjmk4fpnIDpmrHol4/nmoTniYjmnKzvvIEnKSxcblx0XHRlcnJOb0l0ZW1Qcm92aWRlZDogd2dVTFMoJ+aCqOayoeaciemAieaLqemcgOmakOiXj+eahOmhueebru+8gScsICfmgqjmspLmnInpgbjmk4fpnIDpmrHol4/nmoTpoIXnm67vvIEnKSxcblx0XHR3YXJuTm9SZWFzb25Qcm92aWRlZDogd2dVTFMoJ+aCqOayoeaciei+k+WFpeS7u+S9leeQhueUse+8geehruWumuimgee7p+e7reWQl++8nycsICfmgqjmspLmnInovLjlhaXku7vkvZXnkIbnlLHvvIHnorrlrpropoHnubznuozll47vvJ8nKSxcblx0XHRoaWRlSXRlbXM6IHdnVUxTKCfpnIDpmpDol4/nmoTpobnnm67vvJonLCAn6ZyA6Zqx6JeP55qE6aCF55uu77yaJyksXG5cdFx0aGlkZUNvbnRlbnQ6IHdnVUxTKCfnvJbovpHlhoXlrrknLCAn57eo6Lyv5YWn5a65JyksXG5cdFx0aGlkZUxvZzogd2dVTFMoJ+aXpeW/l+ebruagh+S4juWPguaVsCcsICfml6Xoqoznm67mqJnoiIflj4PmlbgnKSxcblx0XHRoaWRlVXNlcm5hbWU6IHdnVUxTKCfnvJbovpHogIXnlKjmiLflkI0nLCAn57eo6Lyv6ICF55So5oi25ZCNJyksXG5cdFx0aGlkZVN1bW1hcnk6IHdnVUxTKCfnvJbovpHmkZjopoEnLCAn57eo6Lyv5pGY6KaBJyksXG5cdFx0aGlkZVJlYXNvbjogd2dVTFMoJ+eQhuaNru+8micsICfnkIbmk5rvvJonKSxcblx0XHRoaWRlUmVhc29uUkQxOiB3Z1VMUygnUkQx77ya5p2h55uu5Lit5piO5pi+5L6154qv6JGX5L2c5p2D55qE5YaF5a65JywgJ1JEMe+8muaineebruS4reaYjumhr+S+teeKr+iRl+S9nOasiueahOWFp+WuuScpLFxuXHRcdGhpZGVSZWFzb25SRDI6IHdnVUxTKCdSRDLvvJrkuKXph43kvq7ovrHjgIHotKzkvY7miJbmlLvlh7vmgKfmlofmnKwnLCAnUkQy77ya5Zq06YeN5L6u6L6x44CB6LK25L2O5oiW5pS75pOK5oCn5paH5pysJyksXG5cdFx0aGlkZVJlYXNvblJEMzogd2dVTFMoJ1JEM++8mue6r+eyueaJsOS5seaAp+WGheWuuScsICfntJTnsrnmk77kuoLmgKflhaflrrknKSxcblx0XHRoaWRlUmVhc29uUkQ0OiB3Z1VMUygnUkQ077ya5piO5pi+6L+d5Y+N5rOV5b6L5rOV6KeE5oiW6L+d6IOM5YWs5bqP6Imv5L+X55qE5YaF5a65JywgJ1JENO+8muaYjumhr+mBleWPjeazleW+i+azleimj+aIlumBleiDjOWFrOW6j+iJr+S/l+eahOWFp+WuuScpLFxuXHRcdGhpZGVSZWFzb25SRDU6IHdnVUxTKCdSRDXvvJrlhbbku5bkuI3lrpzlhazlvIDnmoTniYjmnKzlhoXlrrknLCAnUkQ177ya5YW25LuW5LiN5a6c5YWs6ZaL55qE54mI5pys5YWn5a65JyksXG5cdFx0aGlkZVJlYXNvbk9TMTogd2dVTFMoJ09TMe+8muacquWFrOW8gOeahOS4quS6uui1hOaWmScsICdPUzHvvJrmnKrlhazplovnmoTlgIvkurros4fmlpknKSxcblx0XHRoaWRlUmVhc29uT1MyOiB3Z1VMUygnT1My77ya5Y+v6IO95b2x5ZON55m+56eR6L+Q5L2c55qE5YaF5a65JywgJ09TMu+8muWPr+iDveW9semfv+eZvuenkemBi+S9nOeahOWFp+WuuScpLFxuXHRcdGhpZGVSZWFzb25PUzM6IHdnVUxTKCdPUzPvvJrnoLTlnY/mgKfjgIHmibDkubHmgKfnlKjmiLflkI0nLCAnT1Mz77ya56C05aOe5oCn44CB5pO+5LqC5oCn55So5oi25ZCNJyksXG5cdFx0aGlkZVJlYXNvbk9TNDogd2dVTFMoXG5cdFx0XHQnT1M077ya5Y6f6aG16Z2i5YaF5a655p2l6Ieq5aSW6YOo5p2l5rqQ44CB5LiN56ym5ZCI5rGC6Ze755m+56eR5pa56ZKI77yM5L2G57uP6L+H5pS55YaZ5ZCO77yM5bey56ym5ZCI5rGC6Ze755m+56eR5pa56ZKI55qE6aG16Z2iJyxcblx0XHRcdCdPUzTvvJrljp/poIHpnaLlhaflrrnkvoboh6rlpJbpg6jkvobmupDjgIHkuI3nrKblkIjmsYLogZ7nmb7np5Hmlrnph53vvIzkvYbntpPpgY7opoblr6vlvozvvIzlt7LnrKblkIjmsYLogZ7nmb7np5Hmlrnph53nmoTpoIHpnaInXG5cdFx0KSxcblx0XHRoaWRlUmVhc29uT3RoZXI6IHdnVUxTKCfku4Xkvb/nlKjkuIvmlrnnmoTpmYTliqDnkIbnlLEnLCAn5YOF5L2/55So5LiL5pa555qE6ZmE5Yqg55CG55SxJyksXG5cdFx0b3RoZXJSZWFzb25zOiB3Z1VMUygn6ZmE5Yqg55CG55Sx77yI5Y+v6YCJ77yM5LiN55So562+5ZCN77yJJywgJ+mZhOWKoOeQhueUse+8iOWPr+mBuO+8jOS4jeeUqOewveWQje+8iScpLFxuXHRcdGRpYWxvZ1RpdGxlOiB3Z1VMUygn5o+Q5oql5L+u6K6i54mI5pys5Yig6ZmkJywgJ+aPkOWgseS/ruiogueJiOacrOWIqumZpCcpLFxuXHRcdGRpYWxvZ0J1dHRvblN1Ym1pdDogd2dVTFMoJ+aPkOaKpScsICfmj5DloLEnKSxcblx0XHRkaWFsb2dCdXR0b25DYW5jZWw6IHdnVUxTKCflj5bmtognLCAn5Y+W5raIJyksXG5cdFx0cmVwb3J0QnV0dG9uVGl0bGU6IHdnVUxTKCflsIbpgInkuK3nmoTniYjmnKzmj5DmiqXliLAnLCAn5bCH6YG45Lit55qE54mI5pys5o+Q5aCx5YiwJyksXG5cdFx0cmVwb3J0QnV0dG9uVGV4dDogd2dVTFMoJ+ivt+axguWIoOmZpOiiq+mAieeJiOacrCcsICfoq4vmsYLliKrpmaTooqvpgbjniYjmnKwnKSxcblx0XHRyZXBvcnRCdXR0b25Mb2dUZXh0OiB3Z1VMUygn6K+35rGC5Yig6Zmk6KKr6YCJ5pel5b+XJywgJ+iri+axguWIqumZpOiiq+mBuOaXpeiqjCcpLFxuXHR9O1xufTtcblxuY29uc3QgaTE4bk1lc3NhZ2VzID0gZ2V0STE4bk1lc3NhZ2VzKCk7XG5cbmNvbnN0IGdldE1lc3NhZ2U6IEdldE1lc3NhZ2VzPHR5cGVvZiBpMThuTWVzc2FnZXM+ID0gKGtleSkgPT4ge1xuXHRyZXR1cm4gaTE4bk1lc3NhZ2VzW2tleV0gfHwga2V5O1xufTtcblxuZXhwb3J0IHtnZXRNZXNzYWdlfTtcbiIsICJjb25zdCBpc1NwZWNpYWxMb2cgPSAoKSA9PiB7XG5cdGNvbnN0IHt3Z0Nhbm9uaWNhbFNwZWNpYWxQYWdlTmFtZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cdHJldHVybiB3Z0Nhbm9uaWNhbFNwZWNpYWxQYWdlTmFtZSA9PT0gJ0xvZyc7XG59O1xuXG5leHBvcnQge2lzU3BlY2lhbExvZ307XG4iLCAiaW1wb3J0IHsgdG9EaXNwbGF5U3RyaW5nIGFzIF90b0Rpc3BsYXlTdHJpbmcsIGNyZWF0ZVRleHRWTm9kZSBhcyBfY3JlYXRlVGV4dFZOb2RlLCB3aXRoQ3R4IGFzIF93aXRoQ3R4LCBvcGVuQmxvY2sgYXMgX29wZW5CbG9jaywgY3JlYXRlQmxvY2sgYXMgX2NyZWF0ZUJsb2NrIH0gZnJvbSBcInZ1ZVwiXG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXIoX2N0eCwgX2NhY2hlLCAkcHJvcHMsICRzZXR1cCwgJGRhdGEsICRvcHRpb25zKSB7XG4gIHJldHVybiAoX29wZW5CbG9jaygpLCBfY3JlYXRlQmxvY2soJHNldHVwW1wiQ2R4QnV0dG9uXCJdLCB7XG4gICAgY2xhc3M6IFwicnJkX19yZXBvcnRcIixcbiAgICB3ZWlnaHQ6IFwicHJpbWFyeVwiLFxuICAgIHR5cGU6IFwiYnV0dG9uXCIsXG4gICAgXCJhcmlhLWxhYmVsXCI6ICRzZXR1cC5idXR0b25UaXRsZSxcbiAgICB0aXRsZTogJHNldHVwLmJ1dHRvblRpdGxlLFxuICAgIG9uQ2xpY2s6ICRzZXR1cC5wcm9wcy5vbkNsaWNrXG4gIH0sIHtcbiAgICBkZWZhdWx0OiBfd2l0aEN0eCgoKSA9PiBbXG4gICAgICBfY3JlYXRlVGV4dFZOb2RlKF90b0Rpc3BsYXlTdHJpbmcoJHNldHVwLmJ1dHRvbkxhYmVsKSwgMSAvKiBURVhUICovKVxuICAgIF0pLFxuICAgIF86IDEgLyogU1RBQkxFICovXG4gIH0sIDggLyogUFJPUFMgKi8sIFtcImFyaWEtbGFiZWxcIiwgXCJ0aXRsZVwiLCBcIm9uQ2xpY2tcIl0pKVxufSIsICJpbXBvcnQgc2NyaXB0IGZyb20gXCJEOlxcXFxHaXRSZXBvc2l0b3J5XFxcXFFpdXdlbkdhZGdldHNcXFxcc3JjXFxcXFJSRFxcXFxjb21wb25lbnRzXFxcXFJlcG9ydEJ1dHRvbi52dWU/dHlwZT1zY3JpcHRcIjtpbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwiRDpcXFxcR2l0UmVwb3NpdG9yeVxcXFxRaXV3ZW5HYWRnZXRzXFxcXHNyY1xcXFxSUkRcXFxcY29tcG9uZW50c1xcXFxSZXBvcnRCdXR0b24udnVlP3R5cGU9dGVtcGxhdGVcIjsgc2NyaXB0LnJlbmRlciA9IHJlbmRlcjtzY3JpcHQuX19maWxlID0gXCJzcmNcXFxcUlJEXFxcXGNvbXBvbmVudHNcXFxcUmVwb3J0QnV0dG9uLnZ1ZVwiO2V4cG9ydCBkZWZhdWx0IHNjcmlwdDsiLCAiaW1wb3J0IFJlcG9ydEJ1dHRvbiBmcm9tICcuL2NvbXBvbmVudHMvUmVwb3J0QnV0dG9uLnZ1ZSc7XG5pbXBvcnQge2NyZWF0ZUFwcH0gZnJvbSAndnVlJztcbmltcG9ydCB7Z2V0Qm9keX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbmltcG9ydCB7c2hvd0RpYWxvZ30gZnJvbSAnLi9tb2R1bGVzL3Nob3dEaWFsb2cnO1xuXG52b2lkIGdldEJvZHkoKS50aGVuKGZ1bmN0aW9uIHJyZCgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkIHtcblx0Y29uc3Qge3dnQWN0aW9uLCB3Z0Nhbm9uaWNhbFNwZWNpYWxQYWdlTmFtZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cblx0aWYgKHdnQWN0aW9uID09PSAnaGlzdG9yeScgfHwgd2dDYW5vbmljYWxTcGVjaWFsUGFnZU5hbWUgPT09ICdMb2cnKSB7XG5cdFx0Y29uc3QgQ0xBU1NfTkFNRVMgPSBbXG5cdFx0XHQnLmhpc3RvcnlzdWJtaXQubXctaGlzdG9yeS1jb21wYXJlc2VsZWN0ZWR2ZXJzaW9ucy1idXR0b24nLFxuXHRcdFx0Jy5lZGl0Y2hhbmdldGFncy1sb2ctc3VibWl0Lm13LWxvZy1lZGl0Y2hhbmdldGFncy1idXR0b24nLFxuXHRcdF07XG5cdFx0Y29uc3QgYnV0dG9uID0gKG9uQ2xpY2s6ICgpID0+IHZvaWQpOiBIVE1MU3BhbkVsZW1lbnQgPT4ge1xuXHRcdFx0Y29uc3Qgcm9vdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcblx0XHRcdGNyZWF0ZUFwcChSZXBvcnRCdXR0b24sIHtvbkNsaWNrfSkubW91bnQocm9vdCk7XG5cdFx0XHRyZXR1cm4gcm9vdDtcblx0XHR9O1xuXG5cdFx0Zm9yIChjb25zdCBlbGVtZW50IG9mICRib2R5LmZpbmQoQ0xBU1NfTkFNRVMuam9pbignLCcpKSkge1xuXHRcdFx0Y29uc3QgYXBwZW5kRWxlbWVudCA9IGJ1dHRvbigoKSA9PiBzaG93RGlhbG9nKCRib2R5KSk7XG5cdFx0XHRlbGVtZW50LmFmdGVyKGFwcGVuZEVsZW1lbnQpO1xuXHRcdH1cblx0fVxufSk7XG4iLCAiaW1wb3J0IHt0eXBlIEFwcCBhcyBWdWVBcHAsIGNyZWF0ZUFwcH0gZnJvbSAndnVlJztcbmltcG9ydCBBcHAgZnJvbSAnLi4vQXBwLnZ1ZSc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vaTE4bic7XG5pbXBvcnQge2xvYWRJZHN9IGZyb20gJy4vbG9hZElkcyc7XG5cbmxldCBhcHA6IFZ1ZUFwcDxFbGVtZW50PiB8IHVuZGVmaW5lZDtcbmxldCByb290OiBIVE1MRGl2RWxlbWVudCB8IHVuZGVmaW5lZDtcblxuY29uc3QgZGlzcG9zZURpYWxvZyA9ICgpOiB2b2lkID0+IHtcblx0aWYgKGFwcCkge1xuXHRcdGFwcC51bm1vdW50KCk7XG5cdFx0YXBwID0gdW5kZWZpbmVkO1xuXHR9XG5cdGlmIChyb290KSB7XG5cdFx0cm9vdC5yZW1vdmUoKTtcblx0XHRyb290ID0gdW5kZWZpbmVkO1xuXHR9XG59O1xuXG5jb25zdCBzaG93RGlhbG9nID0gKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQgPT4ge1xuXHRjb25zdCBpZHM6IHN0cmluZ1tdID0gbG9hZElkcygkYm9keSk7XG5cdGlmICghaWRzLmxlbmd0aCkge1xuXHRcdHZvaWQgbXcubm90aWZ5KGdldE1lc3NhZ2UoJ2Vyck5vUmV2aXNpb25Qcm92aWRlZCcpLCB7XG5cdFx0XHR0YWc6ICdSUkQnLFxuXHRcdFx0dHlwZTogJ2Vycm9yJyxcblx0XHR9KTtcblxuXHRcdHJldHVybjtcblx0fVxuXG5cdGRpc3Bvc2VEaWFsb2coKTtcblx0cm9vdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRkb2N1bWVudC5ib2R5LmFwcGVuZChyb290KTtcblx0YXBwID0gY3JlYXRlQXBwKEFwcCwge1xuXHRcdGlkcyxcblx0XHRvbkNsb3NlOiBkaXNwb3NlRGlhbG9nLFxuXHR9KTtcblx0YXBwLm1vdW50KHJvb3QpO1xufTtcblxuZXhwb3J0IHtzaG93RGlhbG9nfTtcbiIsICI8c2NyaXB0IHNldHVwIGxhbmc9XCJ0c1wiPlxuaW1wb3J0IHtDZHhDaGVja2JveCwgQ2R4RGlhbG9nLCBDZHhGaWVsZCwgQ2R4U2VsZWN0LCBDZHhUZXh0QXJlYX0gZnJvbSAnQHdpa2ltZWRpYS9jb2RleCc7XG5pbXBvcnQge2FwcGx5Q29uZmlnLCBjb25maWd9IGZyb20gJy4vbW9kdWxlcy9ycmRDb25maWcnO1xuaW1wb3J0IHtjb21wdXRlZCwgcmVmLCB3YXRjaH0gZnJvbSAndnVlJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9tb2R1bGVzL2kxOG4nO1xuaW1wb3J0IHtpc1NwZWNpYWxMb2d9IGZyb20gJy4vbW9kdWxlcy9pc1NwZWNpYWxMb2cnO1xuaW1wb3J0IHtzdWJtaXR9IGZyb20gJy4vbW9kdWxlcy9zdWJtaXQnO1xuXG5jb25zdCBwcm9wcyA9IGRlZmluZVByb3BzPHtcblx0aWRzOiBzdHJpbmdbXTtcblx0b25DbG9zZTogKCkgPT4gdm9pZDtcbn0+KCk7XG5cbmNvbnN0IG9wZW4gPSByZWYodHJ1ZSk7XG5jb25zdCBoaWRlQ29udGVudCA9IHJlZihCb29sZWFuKGNvbmZpZy5jaGVja2JveGVzLnJyZEhpZGVDb250ZW50KSk7XG5jb25zdCBoaWRlVXNlcm5hbWUgPSByZWYoQm9vbGVhbihjb25maWcuY2hlY2tib3hlcy5ycmRIaWRlVXNlcm5hbWUpKTtcbmNvbnN0IGhpZGVTdW1tYXJ5ID0gcmVmKEJvb2xlYW4oY29uZmlnLmNoZWNrYm94ZXMucnJkSGlkZVN1bW1hcnkpKTtcbmNvbnN0IHJlYXNvbiA9IHJlZihjb25maWcub3RoZXJzLnJyZFJlYXNvbiA/PyAnJyk7XG5jb25zdCBvdGhlclJlYXNvbnMgPSByZWYoY29uZmlnLm90aGVycy5ycmRPdGhlclJlYXNvbnMgPz8gJycpO1xuXG5jb25zdCByZWFzb25JdGVtcyA9IGNvbXB1dGVkKCgpID0+IFtcblx0e3ZhbHVlOiBnZXRNZXNzYWdlKCdoaWRlUmVhc29uUkQxJyksIGxhYmVsOiBnZXRNZXNzYWdlKCdoaWRlUmVhc29uUkQxJyl9LFxuXHR7dmFsdWU6IGdldE1lc3NhZ2UoJ2hpZGVSZWFzb25SRDInKSwgbGFiZWw6IGdldE1lc3NhZ2UoJ2hpZGVSZWFzb25SRDInKX0sXG5cdHt2YWx1ZTogZ2V0TWVzc2FnZSgnaGlkZVJlYXNvblJEMycpLCBsYWJlbDogZ2V0TWVzc2FnZSgnaGlkZVJlYXNvblJEMycpfSxcblx0e3ZhbHVlOiBnZXRNZXNzYWdlKCdoaWRlUmVhc29uUkQ0JyksIGxhYmVsOiBnZXRNZXNzYWdlKCdoaWRlUmVhc29uUkQ0Jyl9LFxuXHR7dmFsdWU6IGdldE1lc3NhZ2UoJ2hpZGVSZWFzb25SRDUnKSwgbGFiZWw6IGdldE1lc3NhZ2UoJ2hpZGVSZWFzb25SRDUnKX0sXG5cdHt2YWx1ZTogZ2V0TWVzc2FnZSgnaGlkZVJlYXNvbk9TMScpLCBsYWJlbDogZ2V0TWVzc2FnZSgnaGlkZVJlYXNvbk9TMScpfSxcblx0e3ZhbHVlOiBnZXRNZXNzYWdlKCdoaWRlUmVhc29uT1MyJyksIGxhYmVsOiBnZXRNZXNzYWdlKCdoaWRlUmVhc29uT1MyJyl9LFxuXHR7dmFsdWU6IGdldE1lc3NhZ2UoJ2hpZGVSZWFzb25PUzMnKSwgbGFiZWw6IGdldE1lc3NhZ2UoJ2hpZGVSZWFzb25PUzMnKX0sXG5cdHt2YWx1ZTogZ2V0TWVzc2FnZSgnaGlkZVJlYXNvbk9TNCcpLCBsYWJlbDogZ2V0TWVzc2FnZSgnaGlkZVJlYXNvbk9TNCcpfSxcblx0e3ZhbHVlOiAnJywgbGFiZWw6IGdldE1lc3NhZ2UoJ2hpZGVSZWFzb25PdGhlcicpfSxcbl0pO1xuXG5jb25zdCBwcmltYXJ5QWN0aW9uID0gY29tcHV0ZWQoKCkgPT4gKHtcblx0bGFiZWw6IGdldE1lc3NhZ2UoJ2RpYWxvZ0J1dHRvblN1Ym1pdCcpLFxuXHRhY3Rpb25UeXBlOiAncHJvZ3Jlc3NpdmUnIGFzIGNvbnN0LFxufSkpO1xuXG5jb25zdCBkZWZhdWx0QWN0aW9uID0gY29tcHV0ZWQoKCkgPT4gKHtcblx0bGFiZWw6IGdldE1lc3NhZ2UoJ2RpYWxvZ0J1dHRvbkNhbmNlbCcpLFxufSkpO1xuXG53YXRjaChcblx0KCkgPT4gW2hpZGVDb250ZW50LnZhbHVlLCBoaWRlVXNlcm5hbWUudmFsdWUsIGhpZGVTdW1tYXJ5LnZhbHVlLCByZWFzb24udmFsdWUsIG90aGVyUmVhc29ucy52YWx1ZV0sXG5cdCgpID0+IHtcblx0XHRhcHBseUNvbmZpZyhcblx0XHRcdHtcblx0XHRcdFx0cnJkSGlkZUNvbnRlbnQ6IGhpZGVDb250ZW50LnZhbHVlID8/IGZhbHNlLFxuXHRcdFx0XHRycmRIaWRlVXNlcm5hbWU6IGhpZGVVc2VybmFtZS52YWx1ZSA/PyBmYWxzZSxcblx0XHRcdFx0cnJkSGlkZVN1bW1hcnk6IGhpZGVTdW1tYXJ5LnZhbHVlID8/IGZhbHNlLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0cnJkUmVhc29uOiByZWFzb24udmFsdWUgPz8gJycsXG5cdFx0XHRcdHJyZE90aGVyUmVhc29uczogb3RoZXJSZWFzb25zLnZhbHVlID8/ICcnLFxuXHRcdFx0fVxuXHRcdCk7XG5cdH0sXG5cdHtkZWVwOiB0cnVlfVxuKTtcblxuY29uc3Qgc3VibWl0RGlhbG9nID0gKCk6IHZvaWQgPT4ge1xuXHRjb25zdCBzaG91bGRIaWRlQ29udGVudCA9IGhpZGVDb250ZW50LnZhbHVlO1xuXHRjb25zdCBzaG91bGRIaWRlVXNlcm5hbWUgPSBoaWRlVXNlcm5hbWUudmFsdWU7XG5cdGNvbnN0IHNob3VsZEhpZGVTdW1tYXJ5ID0gaGlkZVN1bW1hcnkudmFsdWU7XG5cdGNvbnN0IHJyZFJlYXNvbiA9IHJlYXNvbi52YWx1ZSB8fCB1bmRlZmluZWQ7XG5cdGxldCBycmRPdGhlclJlYXNvbnMgPSBvdGhlclJlYXNvbnMudmFsdWUgfHwgdW5kZWZpbmVkO1xuXG5cdGlmIChycmRPdGhlclJlYXNvbnMgJiYgcnJkUmVhc29uKSB7XG5cdFx0cnJkT3RoZXJSZWFzb25zID0gYO+8jCR7cnJkT3RoZXJSZWFzb25zfWA7XG5cdH1cblxuXHRjb25zdCB0b0hpZGU6IHN0cmluZ1tdID0gW107XG5cdGlmIChzaG91bGRIaWRlQ29udGVudCkge1xuXHRcdHRvSGlkZS5wdXNoKGlzU3BlY2lhbExvZygpID8gZ2V0TWVzc2FnZSgnaGlkZUxvZycpIDogZ2V0TWVzc2FnZSgnaGlkZUNvbnRlbnQnKSk7XG5cdH1cblx0aWYgKHNob3VsZEhpZGVVc2VybmFtZSkge1xuXHRcdHRvSGlkZS5wdXNoKGdldE1lc3NhZ2UoJ2hpZGVVc2VybmFtZScpKTtcblx0fVxuXHRpZiAoc2hvdWxkSGlkZVN1bW1hcnkpIHtcblx0XHR0b0hpZGUucHVzaChnZXRNZXNzYWdlKCdoaWRlU3VtbWFyeScpKTtcblx0fVxuXG5cdGlmICghdG9IaWRlLmxlbmd0aCkge1xuXHRcdHZvaWQgbXcubm90aWZ5KGdldE1lc3NhZ2UoJ2Vyck5vSXRlbVByb3ZpZGVkJyksIHtcblx0XHRcdHRhZzogJ1JSRCcsXG5cdFx0XHR0eXBlOiAnZXJyb3InLFxuXHRcdH0pO1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGxldCBjb250ID0gdHJ1ZTtcblx0aWYgKCFycmRSZWFzb24gJiYgIXJyZE90aGVyUmVhc29ucykge1xuXHRcdGNvbnQgPSBjb25maXJtKGdldE1lc3NhZ2UoJ3dhcm5Ob1JlYXNvblByb3ZpZGVkJykpO1xuXHR9XG5cblx0aWYgKGNvbnQpIHtcblx0XHRvcGVuLnZhbHVlID0gZmFsc2U7XG5cdFx0dm9pZCBzdWJtaXQocHJvcHMuaWRzLCB0b0hpZGUuam9pbign44CBJyksIHJyZFJlYXNvbiA/PyAnJywgcnJkT3RoZXJSZWFzb25zID8/ICcnKTtcblx0XHRwcm9wcy5vbkNsb3NlKCk7XG5cdH1cbn07XG5cbmNvbnN0IGNsb3NlRGlhbG9nID0gKCk6IHZvaWQgPT4ge1xuXHRvcGVuLnZhbHVlID0gZmFsc2U7XG5cdGFwcGx5Q29uZmlnKFxuXHRcdHtcblx0XHRcdHJyZEhpZGVDb250ZW50OiBoaWRlQ29udGVudC52YWx1ZSA/PyBmYWxzZSxcblx0XHRcdHJyZEhpZGVVc2VybmFtZTogaGlkZVVzZXJuYW1lLnZhbHVlID8/IGZhbHNlLFxuXHRcdFx0cnJkSGlkZVN1bW1hcnk6IGhpZGVTdW1tYXJ5LnZhbHVlID8/IGZhbHNlLFxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0cnJkUmVhc29uOiByZWFzb24udmFsdWUgfHwgJycsXG5cdFx0XHRycmRPdGhlclJlYXNvbnM6IG90aGVyUmVhc29ucy52YWx1ZSB8fCAnJyxcblx0XHR9XG5cdCk7XG5cdHByb3BzLm9uQ2xvc2UoKTtcbn07XG48L3NjcmlwdD5cblxuPHRlbXBsYXRlPlxuXHQ8Y2R4LWRpYWxvZ1xuXHRcdHYtbW9kZWw6b3Blbj1cIm9wZW5cIlxuXHRcdDp0aXRsZT1cImdldE1lc3NhZ2UoJ2RpYWxvZ1RpdGxlJylcIlxuXHRcdDp1c2UtY2xvc2UtYnV0dG9uPVwidHJ1ZVwiXG5cdFx0OnByaW1hcnktYWN0aW9uPVwicHJpbWFyeUFjdGlvblwiXG5cdFx0OmRlZmF1bHQtYWN0aW9uPVwiZGVmYXVsdEFjdGlvblwiXG5cdFx0QHVwZGF0ZTpvcGVuPVwiJGV2ZW50ID09PSBmYWxzZSAmJiBjbG9zZURpYWxvZygpXCJcblx0XHRAcHJpbWFyeT1cInN1Ym1pdERpYWxvZ1wiXG5cdFx0QGRlZmF1bHQ9XCJjbG9zZURpYWxvZ1wiXG5cdD5cblx0XHQ8ZGl2IGNsYXNzPVwicnJkLWRpYWxvZ19fYm9keVwiPlxuXHRcdFx0PGRpdiBjbGFzcz1cInJyZC1kaWFsb2dfX3NlY3Rpb25cIj5cblx0XHRcdFx0PHA+e3sgZ2V0TWVzc2FnZSgnaGlkZUl0ZW1zJykgfX08L3A+XG5cdFx0XHRcdDxjZHgtZmllbGQ+XG5cdFx0XHRcdFx0PGNkeC1jaGVja2JveCB2LW1vZGVsPVwiaGlkZUNvbnRlbnRcIj5cblx0XHRcdFx0XHRcdHt7IGlzU3BlY2lhbExvZygpID8gZ2V0TWVzc2FnZSgnaGlkZUxvZycpIDogZ2V0TWVzc2FnZSgnaGlkZUNvbnRlbnQnKSB9fVxuXHRcdFx0XHRcdDwvY2R4LWNoZWNrYm94PlxuXHRcdFx0XHQ8L2NkeC1maWVsZD5cblx0XHRcdFx0PGNkeC1maWVsZD5cblx0XHRcdFx0XHQ8Y2R4LWNoZWNrYm94IHYtbW9kZWw9XCJoaWRlVXNlcm5hbWVcIj57eyBnZXRNZXNzYWdlKCdoaWRlVXNlcm5hbWUnKSB9fTwvY2R4LWNoZWNrYm94PlxuXHRcdFx0XHQ8L2NkeC1maWVsZD5cblx0XHRcdFx0PGNkeC1maWVsZD5cblx0XHRcdFx0XHQ8Y2R4LWNoZWNrYm94IHYtbW9kZWw9XCJoaWRlU3VtbWFyeVwiPnt7IGdldE1lc3NhZ2UoJ2hpZGVTdW1tYXJ5JykgfX08L2NkeC1jaGVja2JveD5cblx0XHRcdFx0PC9jZHgtZmllbGQ+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3M9XCJycmQtZGlhbG9nX19zZWN0aW9uXCI+XG5cdFx0XHRcdDxwPnt7IGdldE1lc3NhZ2UoJ2hpZGVSZWFzb24nKSB9fTwvcD5cblx0XHRcdFx0PGNkeC1maWVsZD5cblx0XHRcdFx0XHQ8Y2R4LXNlbGVjdCB2LW1vZGVsOnNlbGVjdGVkPVwicmVhc29uXCIgOm1lbnUtaXRlbXM9XCJyZWFzb25JdGVtc1wiIC8+XG5cdFx0XHRcdDwvY2R4LWZpZWxkPlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwicnJkLWRpYWxvZ19fc2VjdGlvblwiPlxuXHRcdFx0XHQ8cD57eyBnZXRNZXNzYWdlKCdvdGhlclJlYXNvbnMnKSB9fTwvcD5cblx0XHRcdFx0PGNkeC10ZXh0LWFyZWEgdi1tb2RlbD1cIm90aGVyUmVhc29uc1wiIHJvd3M9XCI0XCIgLz5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHQ8L2NkeC1kaWFsb2c+XG48L3RlbXBsYXRlPlxuXG48c3R5bGUgc2NvcGVkIGxhbmc9XCJsZXNzXCI+XG4ucnJkLWRpYWxvZ19fYm9keSB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGdhcDogMC43NXJlbTtcblx0bWluLXdpZHRoOiBtaW4oODV2dywgMjVyZW0pO1xufVxuXG4ucnJkLWRpYWxvZ19fc2VjdGlvbiB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGdhcDogMC41cmVtO1xufVxuXG4ucnJkLWRpYWxvZ19fc2VjdGlvbiBwIHtcblx0bWFyZ2luOiAwO1xufVxuPC9zdHlsZT5cbiIsICJpbXBvcnQgdHlwZSB7UnJkQ29uZmlnfSBmcm9tICcuL3R5cGVzJztcblxuY29uc3QgY29uZmlnOiBScmRDb25maWcgPSB7XG5cdGNoZWNrYm94ZXM6IHt9LFxuXHRvdGhlcnM6IHt9LFxufTtcblxuY29uc3QgYXBwbHlDb25maWcgPSAoY2hlY2tib3hlczogUnJkQ29uZmlnWydjaGVja2JveGVzJ10gPSB7fSwgb3RoZXJzOiBScmRDb25maWdbJ290aGVycyddID0ge30pOiB2b2lkID0+IHtcblx0Y29uZmlnLmNoZWNrYm94ZXMgPSBjaGVja2JveGVzO1xuXHRjb25maWcub3RoZXJzID0gb3RoZXJzO1xufTtcblxuZXhwb3J0IHthcHBseUNvbmZpZywgY29uZmlnfTtcbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge2luaXRNd0FwaX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxuY29uc3QgYXBpOiBtdy5BcGkgPSBpbml0TXdBcGkoYFJSRC8ke09QVElPTlMudmVyc2lvbn1gKTtcblxuZXhwb3J0IHthcGl9O1xuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7YXBpfSBmcm9tICcuL2FwaSc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vaTE4bic7XG5pbXBvcnQge3VuaXF1ZUFycmF5fSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG5jb25zdCBxdWVyeVJldmlzaW9ucyA9IGFzeW5jICh0aXRsZXM6IHN0cmluZyB8IHN0cmluZ1tdKSA9PiB7XG5cdGNvbnN0IHBhcmFtczogQXBpUXVlcnlSZXZpc2lvbnNQYXJhbXMgPSB7XG5cdFx0dGl0bGVzLFxuXHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0cHJvcDogJ3JldmlzaW9ucycsXG5cdFx0cnZwcm9wOiAnY29udGVudCcsXG5cdFx0cnZzbG90czogJ21haW4nLFxuXHR9O1xuXHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGFwaS5nZXQocGFyYW1zKTtcblxuXHRyZXR1cm4gcmVzcG9uc2U7XG59O1xuXG5jb25zdCBlZGl0ID0gYXN5bmMgKHRpdGxlOiBzdHJpbmcsIHRleHQ6IHN0cmluZywgc3VtbWFyeT86IHN0cmluZykgPT4ge1xuXHRjb25zdCBwYXJhbXM6IEFwaUVkaXRQYWdlUGFyYW1zID0ge1xuXHRcdHRpdGxlLFxuXHRcdHRleHQsXG5cdFx0YWN0aW9uOiAnZWRpdCcsXG5cdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHR9O1xuXHRpZiAoc3VtbWFyeSkge1xuXHRcdHBhcmFtcy5zdW1tYXJ5ID0gc3VtbWFyeTtcblx0fVxuXHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGFwaS5wb3N0V2l0aEVkaXRUb2tlbihwYXJhbXMpO1xuXG5cdHJldHVybiByZXNwb25zZTtcbn07XG5cbmNvbnN0IHN1Ym1pdCA9IGFzeW5jIChpZHM6IHN0cmluZ1tdLCB0b0hpZGU6IHN0cmluZywgcmVhc29uOiBzdHJpbmcsIG90aGVyUmVhc29uczogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiA9PiB7XG5cdGNvbnN0IHt3Z1BhZ2VOYW1lfSA9IG13LmNvbmZpZy5nZXQoKTtcblxuXHRmb3IgKGNvbnN0IFJEaWQgb2YgWzEsIDIsIDMsIDQsIDVdKSB7XG5cdFx0aWYgKHJlYXNvbi5pbmNsdWRlcyhgUkQke1JEaWR9YCkpIHtcblx0XHRcdHJlYXNvbiA9IGBSRCR7UkRpZH1gO1xuXHRcdFx0YnJlYWs7XG5cdFx0fVxuXHR9XG5cblx0Zm9yIChjb25zdCBPU2lkIG9mIFsxLCAyLCAzLCA0XSkge1xuXHRcdGlmIChyZWFzb24uaW5jbHVkZXMoYE9TJHtPU2lkfWApKSB7XG5cdFx0XHRyZWFzb24gPSBgT1Mke09TaWR9YDtcblx0XHRcdGJyZWFrO1xuXHRcdH1cblx0fVxuXG5cdGNvbnN0IHJyZEFycjogc3RyaW5nW10gPSBbXG5cdFx0J3t7UmV2ZGVsJyxcblx0XHQnfHN0YXR1cyA9ICcsXG5cdFx0YHxhcnRpY2xlID0gJHt3Z1BhZ2VOYW1lfWAsXG5cdFx0YHxzZXQgPSAke3RvSGlkZX1gLFxuXHRcdGB8cmVhc29uID0gJHtyZWFzb259JHtvdGhlclJlYXNvbnN9YCxcblx0XTtcblxuXHRmb3IgKGNvbnN0IFtpbmRleCwgaWRdIG9mIHVuaXF1ZUFycmF5KGlkcykuZW50cmllcygpKSB7XG5cdFx0Ly8gUmVwbGFjZSBTZXQgd2l0aCB1bmlxdWVBcnJheSwgYXZvaWRpbmcgY29yZS1qcyBwb2x5ZmlsbGluZ1xuXHRcdHJyZEFycltycmRBcnIubGVuZ3RoXSA9IGB8aWQke2luZGV4ICsgMX0gPSAke2lkfWA7XG5cdH1cblx0cnJkQXJyW3JyZEFyci5sZW5ndGhdID0gJ319XFxu4oCU4oCUfn4nLmNvbmNhdCgnfn4nKTtcblxuXHR0cnkge1xuXHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcXVlcnlSZXZpc2lvbnMoT1BUSU9OUy5ycmRQYWdlKTtcblxuXHRcdGxldCBjb250ZW50OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cdFx0aWYgKHJlc3BvbnNlWydxdWVyeSddPy5wYWdlcykge1xuXHRcdFx0Y29udGVudCA9IHJlc3BvbnNlWydxdWVyeSddLnBhZ2VzWzBdLnJldmlzaW9uc1swXS5zbG90cy5tYWluLmNvbnRlbnQgYXMgc3RyaW5nO1xuXHRcdH1cblxuXHRcdGlmIChjb250ZW50ID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHZvaWQgbXcubm90aWZ5KGBFcnJvciB3aGVuIGxvYWRpbmcgcGFnZSAke09QVElPTlMucnJkUGFnZX06IG1pc3NpbmdgLCB7XG5cdFx0XHRcdHRhZzogJ1JSRCcsXG5cdFx0XHRcdHR5cGU6ICdlcnJvcicsXG5cdFx0XHR9KTtcblxuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHRyeSB7XG5cdFx0XHRjb25zdCByZXN1bHQgPSBhd2FpdCBlZGl0KE9QVElPTlMucnJkUGFnZSwgYCR7Y29udGVudH1cXG5cXG4ke3JyZEFyci5qb2luKCdcXG4nKX1gLCBnZXRNZXNzYWdlKCdlZGl0U3VtbWFyeScpKTtcblxuXHRcdFx0aWYgKHJlc3VsdFsnZWRpdCddPy5yZXN1bHQgPT09ICdTdWNjZXNzJykge1xuXHRcdFx0XHRsb2NhdGlvbi5yZXBsYWNlKG13LnV0aWwuZ2V0VXJsKE9QVElPTlMucnJkUGFnZSkpO1xuXHRcdFx0fSBlbHNlIGlmIChyZXN1bHRbJ2Vycm9yJ10/LmNvZGUpIHtcblx0XHRcdFx0dm9pZCBtdy5ub3RpZnkoYFNvbWUgZXJyb3JzIG9jY3VyZWQgd2hpbGUgc2F2aW5nIHBhZ2U6ICR7cmVzdWx0WydlcnJvciddLmNvZGV9YCwge1xuXHRcdFx0XHRcdHRhZzogJ1JSRCcsXG5cdFx0XHRcdFx0dHlwZTogJ2Vycm9yJyxcblx0XHRcdFx0fSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR2b2lkIG13Lm5vdGlmeSgnU29tZSBlcnJvcnMgb2NjdXJlZCB3aGlsZSBzYXZpbmcgcGFnZTogdW5rbm93bicsIHtcblx0XHRcdFx0XHR0YWc6ICdSUkQnLFxuXHRcdFx0XHRcdHR5cGU6ICdlcnJvcicsXG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdH0gY2F0Y2gge1xuXHRcdFx0dm9pZCBtdy5ub3RpZnkoYEVycm9yIHdoZW4gZWRpdGluZyBwYWdlICR7T1BUSU9OUy5ycmRQYWdlfWAsIHt0YWc6ICdSUkQnLCB0eXBlOiAnZXJyb3InfSk7XG5cdFx0fVxuXHR9IGNhdGNoIHtcblx0XHR2b2lkIG13Lm5vdGlmeShgRXJyb3Igd2hlbiBsb2FkaW5nIHBhZ2UgJHtPUFRJT05TLnJyZFBhZ2V9YCwge3RhZzogJ1JSRCcsIHR5cGU6ICdlcnJvcid9KTtcblx0fVxufTtcblxuZXhwb3J0IHtzdWJtaXR9O1xuIiwgImltcG9ydCB7IHRvRGlzcGxheVN0cmluZyBhcyBfdG9EaXNwbGF5U3RyaW5nLCBjcmVhdGVFbGVtZW50Vk5vZGUgYXMgX2NyZWF0ZUVsZW1lbnRWTm9kZSwgY3JlYXRlVGV4dFZOb2RlIGFzIF9jcmVhdGVUZXh0Vk5vZGUsIHdpdGhDdHggYXMgX3dpdGhDdHgsIGNyZWF0ZVZOb2RlIGFzIF9jcmVhdGVWTm9kZSwgb3BlbkJsb2NrIGFzIF9vcGVuQmxvY2ssIGNyZWF0ZUJsb2NrIGFzIF9jcmVhdGVCbG9jayB9IGZyb20gXCJ2dWVcIlxuXG5jb25zdCBfaG9pc3RlZF8xID0geyBjbGFzczogXCJycmQtZGlhbG9nX19ib2R5XCIgfVxuY29uc3QgX2hvaXN0ZWRfMiA9IHsgY2xhc3M6IFwicnJkLWRpYWxvZ19fc2VjdGlvblwiIH1cbmNvbnN0IF9ob2lzdGVkXzMgPSB7IGNsYXNzOiBcInJyZC1kaWFsb2dfX3NlY3Rpb25cIiB9XG5jb25zdCBfaG9pc3RlZF80ID0geyBjbGFzczogXCJycmQtZGlhbG9nX19zZWN0aW9uXCIgfVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyKF9jdHgsIF9jYWNoZSwgJHByb3BzLCAkc2V0dXAsICRkYXRhLCAkb3B0aW9ucykge1xuICByZXR1cm4gKF9vcGVuQmxvY2soKSwgX2NyZWF0ZUJsb2NrKCRzZXR1cFtcIkNkeERpYWxvZ1wiXSwge1xuICAgIG9wZW46ICRzZXR1cC5vcGVuLFxuICAgIFwib25VcGRhdGU6b3BlblwiOiBbXG4gICAgICBfY2FjaGVbNV0gfHwgKF9jYWNoZVs1XSA9ICRldmVudCA9PiAoKCRzZXR1cC5vcGVuKSA9ICRldmVudCkpLFxuICAgICAgX2NhY2hlWzZdIHx8IChfY2FjaGVbNl0gPSAkZXZlbnQgPT4gKCRldmVudCA9PT0gZmFsc2UgJiYgJHNldHVwLmNsb3NlRGlhbG9nKCkpKVxuICAgIF0sXG4gICAgdGl0bGU6ICRzZXR1cC5nZXRNZXNzYWdlKCdkaWFsb2dUaXRsZScpLFxuICAgIFwidXNlLWNsb3NlLWJ1dHRvblwiOiB0cnVlLFxuICAgIFwicHJpbWFyeS1hY3Rpb25cIjogJHNldHVwLnByaW1hcnlBY3Rpb24sXG4gICAgXCJkZWZhdWx0LWFjdGlvblwiOiAkc2V0dXAuZGVmYXVsdEFjdGlvbixcbiAgICBvblByaW1hcnk6ICRzZXR1cC5zdWJtaXREaWFsb2csXG4gICAgb25EZWZhdWx0OiAkc2V0dXAuY2xvc2VEaWFsb2dcbiAgfSwge1xuICAgIGRlZmF1bHQ6IF93aXRoQ3R4KCgpID0+IFtcbiAgICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJkaXZcIiwgX2hvaXN0ZWRfMSwgW1xuICAgICAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwiZGl2XCIsIF9ob2lzdGVkXzIsIFtcbiAgICAgICAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwicFwiLCBudWxsLCBfdG9EaXNwbGF5U3RyaW5nKCRzZXR1cC5nZXRNZXNzYWdlKCdoaWRlSXRlbXMnKSksIDEgLyogVEVYVCAqLyksXG4gICAgICAgICAgX2NyZWF0ZVZOb2RlKCRzZXR1cFtcIkNkeEZpZWxkXCJdLCBudWxsLCB7XG4gICAgICAgICAgICBkZWZhdWx0OiBfd2l0aEN0eCgoKSA9PiBbXG4gICAgICAgICAgICAgIF9jcmVhdGVWTm9kZSgkc2V0dXBbXCJDZHhDaGVja2JveFwiXSwge1xuICAgICAgICAgICAgICAgIG1vZGVsVmFsdWU6ICRzZXR1cC5oaWRlQ29udGVudCxcbiAgICAgICAgICAgICAgICBcIm9uVXBkYXRlOm1vZGVsVmFsdWVcIjogX2NhY2hlWzBdIHx8IChfY2FjaGVbMF0gPSAkZXZlbnQgPT4gKCgkc2V0dXAuaGlkZUNvbnRlbnQpID0gJGV2ZW50KSlcbiAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IF93aXRoQ3R4KCgpID0+IFtcbiAgICAgICAgICAgICAgICAgIF9jcmVhdGVUZXh0Vk5vZGUoX3RvRGlzcGxheVN0cmluZygkc2V0dXAuaXNTcGVjaWFsTG9nKCkgPyAkc2V0dXAuZ2V0TWVzc2FnZSgnaGlkZUxvZycpIDogJHNldHVwLmdldE1lc3NhZ2UoJ2hpZGVDb250ZW50JykpLCAxIC8qIFRFWFQgKi8pXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgXzogMSAvKiBTVEFCTEUgKi9cbiAgICAgICAgICAgICAgfSwgOCAvKiBQUk9QUyAqLywgW1wibW9kZWxWYWx1ZVwiXSlcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgXzogMSAvKiBTVEFCTEUgKi9cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfY3JlYXRlVk5vZGUoJHNldHVwW1wiQ2R4RmllbGRcIl0sIG51bGwsIHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IF93aXRoQ3R4KCgpID0+IFtcbiAgICAgICAgICAgICAgX2NyZWF0ZVZOb2RlKCRzZXR1cFtcIkNkeENoZWNrYm94XCJdLCB7XG4gICAgICAgICAgICAgICAgbW9kZWxWYWx1ZTogJHNldHVwLmhpZGVVc2VybmFtZSxcbiAgICAgICAgICAgICAgICBcIm9uVXBkYXRlOm1vZGVsVmFsdWVcIjogX2NhY2hlWzFdIHx8IChfY2FjaGVbMV0gPSAkZXZlbnQgPT4gKCgkc2V0dXAuaGlkZVVzZXJuYW1lKSA9ICRldmVudCkpXG4gICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiBfd2l0aEN0eCgoKSA9PiBbXG4gICAgICAgICAgICAgICAgICBfY3JlYXRlVGV4dFZOb2RlKF90b0Rpc3BsYXlTdHJpbmcoJHNldHVwLmdldE1lc3NhZ2UoJ2hpZGVVc2VybmFtZScpKSwgMSAvKiBURVhUICovKVxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF86IDEgLyogU1RBQkxFICovXG4gICAgICAgICAgICAgIH0sIDggLyogUFJPUFMgKi8sIFtcIm1vZGVsVmFsdWVcIl0pXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF86IDEgLyogU1RBQkxFICovXG4gICAgICAgICAgfSksXG4gICAgICAgICAgX2NyZWF0ZVZOb2RlKCRzZXR1cFtcIkNkeEZpZWxkXCJdLCBudWxsLCB7XG4gICAgICAgICAgICBkZWZhdWx0OiBfd2l0aEN0eCgoKSA9PiBbXG4gICAgICAgICAgICAgIF9jcmVhdGVWTm9kZSgkc2V0dXBbXCJDZHhDaGVja2JveFwiXSwge1xuICAgICAgICAgICAgICAgIG1vZGVsVmFsdWU6ICRzZXR1cC5oaWRlU3VtbWFyeSxcbiAgICAgICAgICAgICAgICBcIm9uVXBkYXRlOm1vZGVsVmFsdWVcIjogX2NhY2hlWzJdIHx8IChfY2FjaGVbMl0gPSAkZXZlbnQgPT4gKCgkc2V0dXAuaGlkZVN1bW1hcnkpID0gJGV2ZW50KSlcbiAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IF93aXRoQ3R4KCgpID0+IFtcbiAgICAgICAgICAgICAgICAgIF9jcmVhdGVUZXh0Vk5vZGUoX3RvRGlzcGxheVN0cmluZygkc2V0dXAuZ2V0TWVzc2FnZSgnaGlkZVN1bW1hcnknKSksIDEgLyogVEVYVCAqLylcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBfOiAxIC8qIFNUQUJMRSAqL1xuICAgICAgICAgICAgICB9LCA4IC8qIFBST1BTICovLCBbXCJtb2RlbFZhbHVlXCJdKVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfOiAxIC8qIFNUQUJMRSAqL1xuICAgICAgICAgIH0pXG4gICAgICAgIF0pLFxuICAgICAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwiZGl2XCIsIF9ob2lzdGVkXzMsIFtcbiAgICAgICAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwicFwiLCBudWxsLCBfdG9EaXNwbGF5U3RyaW5nKCRzZXR1cC5nZXRNZXNzYWdlKCdoaWRlUmVhc29uJykpLCAxIC8qIFRFWFQgKi8pLFxuICAgICAgICAgIF9jcmVhdGVWTm9kZSgkc2V0dXBbXCJDZHhGaWVsZFwiXSwgbnVsbCwge1xuICAgICAgICAgICAgZGVmYXVsdDogX3dpdGhDdHgoKCkgPT4gW1xuICAgICAgICAgICAgICBfY3JlYXRlVk5vZGUoJHNldHVwW1wiQ2R4U2VsZWN0XCJdLCB7XG4gICAgICAgICAgICAgICAgc2VsZWN0ZWQ6ICRzZXR1cC5yZWFzb24sXG4gICAgICAgICAgICAgICAgXCJvblVwZGF0ZTpzZWxlY3RlZFwiOiBfY2FjaGVbM10gfHwgKF9jYWNoZVszXSA9ICRldmVudCA9PiAoKCRzZXR1cC5yZWFzb24pID0gJGV2ZW50KSksXG4gICAgICAgICAgICAgICAgXCJtZW51LWl0ZW1zXCI6ICRzZXR1cC5yZWFzb25JdGVtc1xuICAgICAgICAgICAgICB9LCBudWxsLCA4IC8qIFBST1BTICovLCBbXCJzZWxlY3RlZFwiLCBcIm1lbnUtaXRlbXNcIl0pXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF86IDEgLyogU1RBQkxFICovXG4gICAgICAgICAgfSlcbiAgICAgICAgXSksXG4gICAgICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJkaXZcIiwgX2hvaXN0ZWRfNCwgW1xuICAgICAgICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJwXCIsIG51bGwsIF90b0Rpc3BsYXlTdHJpbmcoJHNldHVwLmdldE1lc3NhZ2UoJ290aGVyUmVhc29ucycpKSwgMSAvKiBURVhUICovKSxcbiAgICAgICAgICBfY3JlYXRlVk5vZGUoJHNldHVwW1wiQ2R4VGV4dEFyZWFcIl0sIHtcbiAgICAgICAgICAgIG1vZGVsVmFsdWU6ICRzZXR1cC5vdGhlclJlYXNvbnMsXG4gICAgICAgICAgICBcIm9uVXBkYXRlOm1vZGVsVmFsdWVcIjogX2NhY2hlWzRdIHx8IChfY2FjaGVbNF0gPSAkZXZlbnQgPT4gKCgkc2V0dXAub3RoZXJSZWFzb25zKSA9ICRldmVudCkpLFxuICAgICAgICAgICAgcm93czogXCI0XCJcbiAgICAgICAgICB9LCBudWxsLCA4IC8qIFBST1BTICovLCBbXCJtb2RlbFZhbHVlXCJdKVxuICAgICAgICBdKVxuICAgICAgXSlcbiAgICBdKSxcbiAgICBfOiAxIC8qIFNUQUJMRSAqL1xuICB9LCA4IC8qIFBST1BTICovLCBbXCJvcGVuXCIsIFwidGl0bGVcIiwgXCJwcmltYXJ5LWFjdGlvblwiLCBcImRlZmF1bHQtYWN0aW9uXCJdKSlcbn0iLCAiaW1wb3J0IHNjcmlwdCBmcm9tIFwiRDpcXFxcR2l0UmVwb3NpdG9yeVxcXFxRaXV3ZW5HYWRnZXRzXFxcXHNyY1xcXFxSUkRcXFxcQXBwLnZ1ZT90eXBlPXNjcmlwdFwiO2ltcG9ydCBcIkQ6XFxcXEdpdFJlcG9zaXRvcnlcXFxcUWl1d2VuR2FkZ2V0c1xcXFxzcmNcXFxcUlJEXFxcXEFwcC52dWU/dHlwZT1zdHlsZSZpbmRleD0wXCI7aW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcIkQ6XFxcXEdpdFJlcG9zaXRvcnlcXFxcUWl1d2VuR2FkZ2V0c1xcXFxzcmNcXFxcUlJEXFxcXEFwcC52dWU/dHlwZT10ZW1wbGF0ZVwiOyBzY3JpcHQucmVuZGVyID0gcmVuZGVyO3NjcmlwdC5fX2ZpbGUgPSBcInNyY1xcXFxSUkRcXFxcQXBwLnZ1ZVwiO3NjcmlwdC5fX3Njb3BlSWQgPSBcImRhdGEtdi0wMmZhN2M5ZlwiO2V4cG9ydCBkZWZhdWx0IHNjcmlwdDsiLCAiY29uc3QgbG9hZElkcyA9ICgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiBzdHJpbmdbXSA9PiB7XG5cdGNvbnN0IGlkczogc3RyaW5nW10gPSBbXTtcblxuXHRjb25zdCBib3hlczogSlF1ZXJ5PEhUTUxJbnB1dEVsZW1lbnQ+ID0gJGJvZHkuZmluZCgnaW5wdXQnKTtcblx0Zm9yIChjb25zdCBib3ggb2YgYm94ZXMpIHtcblx0XHRjb25zdCB7Y2hlY2tlZCwgbmFtZSwgdHlwZX0gPSBib3g7XG5cblx0XHRpZiAodHlwZSAhPT0gJ2NoZWNrYm94JyB8fCAhY2hlY2tlZCkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0Y29uc3QgaWRSZWdleDogUmVnRXhwID0gL2lkc1xcWyhcXGQrKV0vO1xuXHRcdGNvbnN0IGlkQXJyYXk6IFJlZ0V4cEV4ZWNBcnJheSB8IG51bGwgPSBpZFJlZ2V4LmV4ZWMobmFtZSk7XG5cdFx0aWYgKGlkQXJyYXk/LlsxXSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRbLCBpZHNbaWRzLmxlbmd0aF1dID0gaWRBcnJheTtcblx0fVxuXG5cdHJldHVybiBpZHM7XG59O1xuXG5leHBvcnQge2xvYWRJZHN9O1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNDLElBQUFBLFVBQVc7QUFDWCxJQUFBQyxVQUFXO0FDQVosSUFBQUMsZUFBd0JDLFFBQUEsa0JBQUE7QUFDeEIsSUFBQUMsY0FBdUJELFFBQUEsS0FBQTs7QUNIdkIsSUFBQUUsb0JBQW9CRixRQUFBLGlCQUFBO0FBRXBCLElBQU1HLGtCQUFrQkEsTUFBTTtBQUM3QixTQUFPO0lBQ05DLGNBQUEsR0FBYUYsa0JBQUFHLE9BQ1osMkNB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SyxTQUFRLEVBQUVDLEtBQUssU0FBU0MsSUFBSXpCLE9BQXNDO0FBQ3RFLFFBQU07SUFBQzBCO0lBQVVwTTtFQUEwQixJQUFJQyxHQUFHQyxPQUFPQyxJQUFJO0FBRTdELE1BQUlpTSxhQUFhLGFBQWFwTSwrQkFBK0IsT0FBTztBQUNuRSxVQUFNcU0sY0FBYyxDQUNuQiw0REFDQSx5REFBQTtBQUVELFVBQU1DLFNBQVUvSyxhQUF5QztBQUN4RCxZQUFNZ0wsUUFBT1osU0FBU0MsY0FBYyxNQUFNO0FBQzFDLE9BQUEsR0FBQTVKLFlBQUErSixXQUFVaEssdUJBQWM7UUFBQ1I7TUFBTyxDQUFDLEVBQUV5SyxNQUFNTyxLQUFJO0FBQzdDLGFBQU9BO0lBQ1I7QUFBQSxRQUFBQyxhQUFBcEgsMkJBRXNCc0YsTUFBTUUsS0FBS3lCLFlBQVl6RixLQUFLLEdBQUcsQ0FBQyxDQUFBLEdBQUE2RjtBQUFBLFFBQUE7QUFBdEQsV0FBQUQsV0FBQWhILEVBQUEsR0FBQSxFQUFBaUgsU0FBQUQsV0FBQS9HLEVBQUEsR0FBQUMsUUFBeUQ7QUFBQSxjQUE5Q2dILFVBQUFELE9BQUE1RztBQUNWLGNBQU04RyxnQkFBZ0JMLE9BQU8sTUFBTVosV0FBV2hCLEtBQUssQ0FBQztBQUNwRGdDLGdCQUFRRSxNQUFNRCxhQUFhO01BQzVCO0lBQUEsU0FBQTdHLEtBQUE7QUFBQTBHLGlCQUFBekcsRUFBQUQsR0FBQTtJQUFBLFVBQUE7QUFBQTBHLGlCQUFBeEcsRUFBQTtJQUFBO0VBQ0Q7QUFDRCxDQUFDOyIsCiAgIm5hbWVzIjogWyJycmRQYWdlIiwgInZlcnNpb24iLCAiaW1wb3J0X2NvZGV4IiwgInJlcXVpcmUiLCAiaW1wb3J0X3Z1ZTIiLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAiZ2V0STE4bk1lc3NhZ2VzIiwgImVkaXRTdW1tYXJ5IiwgIndnVUxTIiwgImVyck5vUmV2aXNpb25Qcm92aWRlZCIsICJlcnJOb0l0ZW1Qcm92aWRlZCIsICJ3YXJuTm9SZWFzb25Qcm92aWRlZCIsICJoaWRlSXRlbXMiLCAiaGlkZUNvbnRlbnQiLCAiaGlkZUxvZyIsICJoaWRlVXNlcm5hbWUiLCAiaGlkZVN1bW1hcnkiLCAiaGlkZVJlYXNvbiIsICJoaWRlUmVhc29uUkQxIiwgImhpZGVSZWFzb25SRDIiLCAiaGlkZVJlYXNvblJEMyIsICJoaWRlUmVhc29uUkQ0IiwgImhpZGVSZWFzb25SRDUiLCAiaGlkZVJlYXNvbk9TMSIsICJoaWRlUmVhc29uT1MyIiwgImhpZGVSZWFzb25PUzMiLCAiaGlkZVJlYXNvbk9TNCIsICJoaWRlUmVhc29uT3RoZXIiLCAib3RoZXJSZWFzb25zIiwgImRpYWxvZ1RpdGxlIiwgImRpYWxvZ0J1dHRvblN1Ym1pdCIsICJkaWFsb2dCdXR0b25DYW5jZWwiLCAicmVwb3J0QnV0dG9uVGl0bGUiLCAicmVwb3J0QnV0dG9uVGV4dCIsICJyZXBvcnRCdXR0b25Mb2dUZXh0IiwgImkxOG5NZXNzYWdlcyIsICJnZXRNZXNzYWdlIiwgImtleSIsICJpc1NwZWNpYWxMb2ciLCAid2dDYW5vbmljYWxTcGVjaWFsUGFnZU5hbWUiLCAibXciLCAiY29uZmlnIiwgImdldCIsICJwcm9wcyIsICJfX3Byb3BzIiwgImJ1dHRvbkxhYmVsIiwgImNvbXB1dGVkIiwgImJ1dHRvblRpdGxlIiwgImltcG9ydF92dWUzIiwgInJlbmRlciIsICJfY3R4IiwgIl9jYWNoZSIsICIkcHJvcHMiLCAiJHNldHVwIiwgIiRkYXRhIiwgIiRvcHRpb25zIiwgIm9wZW5CbG9jayIsICJjcmVhdGVCbG9jayIsICJjbGFzcyIsICJ3ZWlnaHQiLCAidHlwZSIsICJ0aXRsZSIsICJvbkNsaWNrIiwgImRlZmF1bHQiLCAid2l0aEN0eCIsICJjcmVhdGVUZXh0Vk5vZGUiLCAidG9EaXNwbGF5U3RyaW5nIiwgIl8iLCAiUmVwb3J0QnV0dG9uX2RlZmF1bHQiLCAiX19maWxlIiwgIlJlcG9ydEJ1dHRvbl9kZWZhdWx0MiIsICJpbXBvcnRfdnVlOCIsICJpbXBvcnRfZXh0X2dhZGdldDQiLCAiaW1wb3J0X3Z1ZTciLCAiaW1wb3J0X2NvZGV4MiIsICJjaGVja2JveGVzIiwgIm90aGVycyIsICJhcHBseUNvbmZpZyIsICJpbXBvcnRfdnVlNSIsICJpbXBvcnRfZXh0X2dhZGdldDIiLCAiYXBpIiwgImluaXRNd0FwaSIsICJjb25jYXQiLCAiaW1wb3J0X2V4dF9nYWRnZXQzIiwgInF1ZXJ5UmV2aXNpb25zIiwgIl9yZWYiLCAiX2FzeW5jVG9HZW5lcmF0b3IiLCAidGl0bGVzIiwgInBhcmFtcyIsICJhY3Rpb24iLCAiZm9ybWF0IiwgImZvcm1hdHZlcnNpb24iLCAicHJvcCIsICJydnByb3AiLCAicnZzbG90cyIsICJyZXNwb25zZSIsICJfeCIsICJhcHBseSIsICJhcmd1bWVudHMiLCAiZWRpdCIsICJfcmVmMiIsICJ0ZXh0IiwgInN1bW1hcnkiLCAicG9zdFdpdGhFZGl0VG9rZW4iLCAiX3gyIiwgIl94MyIsICJfeDQiLCAic3VibWl0IiwgIl9yZWYzIiwgImlkcyIsICJ0b0hpZGUiLCAicmVhc29uIiwgIndnUGFnZU5hbWUiLCAiX2kiLCAiX2FyciIsICJsZW5ndGgiLCAiUkRpZCIsICJpbmNsdWRlcyIsICJfaTIiLCAiX2FycjIiLCAiT1NpZCIsICJycmRBcnIiLCAiX2l0ZXJhdG9yIiwgIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwgInVuaXF1ZUFycmF5IiwgImVudHJpZXMiLCAiX3N0ZXAiLCAicyIsICJuIiwgImRvbmUiLCAiaW5kZXgiLCAiaWQiLCAidmFsdWUiLCAiZXJyIiwgImUiLCAiZiIsICJfcmVzcG9uc2UkcXVlcnkiLCAiY29udGVudCIsICJwYWdlcyIsICJyZXZpc2lvbnMiLCAic2xvdHMiLCAibWFpbiIsICJub3RpZnkiLCAidGFnIiwgIl9yZXN1bHQkZWRpdCIsICJfcmVzdWx0JGVycm9yIiwgInJlc3VsdCIsICJqb2luIiwgImxvY2F0aW9uIiwgInJlcGxhY2UiLCAidXRpbCIsICJnZXRVcmwiLCAiY29kZSIsICJfeDUiLCAiX3g2IiwgIl94NyIsICJfeDgiLCAib3BlbiIsICJyZWYiLCAiQm9vbGVhbiIsICJycmRIaWRlQ29udGVudCIsICJycmRIaWRlVXNlcm5hbWUiLCAicnJkSGlkZVN1bW1hcnkiLCAiX2NvbmZpZyRvdGhlcnMkcnJkUmVhIiwgInJyZFJlYXNvbiIsICJfY29uZmlnJG90aGVycyRycmRPdGgiLCAicnJkT3RoZXJSZWFzb25zIiwgInJlYXNvbkl0ZW1zIiwgImxhYmVsIiwgInByaW1hcnlBY3Rpb24iLCAiYWN0aW9uVHlwZSIsICJkZWZhdWx0QWN0aW9uIiwgIndhdGNoIiwgIl9oaWRlQ29udGVudCR2YWx1ZSIsICJfaGlkZVVzZXJuYW1lJHZhbHVlIiwgIl9oaWRlU3VtbWFyeSR2YWx1ZSIsICJfcmVhc29uJHZhbHVlIiwgIl9vdGhlclJlYXNvbnMkdmFsdWUiLCAiZGVlcCIsICJzdWJtaXREaWFsb2ciLCAic2hvdWxkSGlkZUNvbnRlbnQiLCAic2hvdWxkSGlkZVVzZXJuYW1lIiwgInNob3VsZEhpZGVTdW1tYXJ5IiwgInB1c2giLCAiY29udCIsICJjb25maXJtIiwgIm9uQ2xvc2UiLCAiY2xvc2VEaWFsb2ciLCAiX2hpZGVDb250ZW50JHZhbHVlMiIsICJfaGlkZVVzZXJuYW1lJHZhbHVlMiIsICJfaGlkZVN1bW1hcnkkdmFsdWUyIiwgImltcG9ydF92dWU2IiwgIl9ob2lzdGVkXzEiLCAiX2hvaXN0ZWRfMiIsICJfaG9pc3RlZF8zIiwgIl9ob2lzdGVkXzQiLCAicmVuZGVyMiIsICIkZXZlbnQiLCAib25QcmltYXJ5IiwgIm9uRGVmYXVsdCIsICJjcmVhdGVFbGVtZW50Vk5vZGUiLCAiY3JlYXRlVk5vZGUiLCAibW9kZWxWYWx1ZSIsICJzZWxlY3RlZCIsICJyb3dzIiwgIkFwcF9kZWZhdWx0IiwgIl9fc2NvcGVJZCIsICJBcHBfZGVmYXVsdDIiLCAibG9hZElkcyIsICIkYm9keSIsICJib3hlcyIsICJmaW5kIiwgIl9pdGVyYXRvcjIiLCAiX3N0ZXAyIiwgImJveCIsICJjaGVja2VkIiwgIm5hbWUiLCAiaWRSZWdleCIsICJpZEFycmF5IiwgImV4ZWMiLCAiYXBwIiwgInJvb3QiLCAiZGlzcG9zZURpYWxvZyIsICJ1bm1vdW50IiwgInJlbW92ZSIsICJzaG93RGlhbG9nIiwgImRvY3VtZW50IiwgImNyZWF0ZUVsZW1lbnQiLCAiYm9keSIsICJhcHBlbmQiLCAiY3JlYXRlQXBwIiwgIm1vdW50IiwgImdldEJvZHkiLCAidGhlbiIsICJycmQiLCAid2dBY3Rpb24iLCAiQ0xBU1NfTkFNRVMiLCAiYnV0dG9uIiwgInJvb3QyIiwgIl9pdGVyYXRvcjMiLCAiX3N0ZXAzIiwgImVsZW1lbnQiLCAiYXBwZW5kRWxlbWVudCIsICJhZnRlciJdCn0K

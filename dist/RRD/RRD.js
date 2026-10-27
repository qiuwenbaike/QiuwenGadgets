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
//! src/RRD/components/ReportButton.vue
ReportButton_default.render = render;
ReportButton_default.__file = "src\\RRD\\components\\ReportButton.vue";
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1JSRC9vcHRpb25zLmpzb24iLCAiZGlzdC9SUkQvc3JjL1JSRC9jb21wb25lbnRzL1JlcG9ydEJ1dHRvbi52dWUiLCAic3JjL1JSRC9tb2R1bGVzL2kxOG4udHMiLCAic3JjL1JSRC9tb2R1bGVzL2lzU3BlY2lhbExvZy50cyIsICJzZmMtdGVtcGxhdGU6RDpcXEdpdFJlcG9zaXRvcnlcXFFpdXdlbkdhZGdldHNcXHNyY1xcUlJEXFxjb21wb25lbnRzXFxSZXBvcnRCdXR0b24udnVlP3R5cGU9dGVtcGxhdGUiLCAic3JjL1JSRC9jb21wb25lbnRzL1JlcG9ydEJ1dHRvbi52dWUiLCAic3JjL1JSRC9SUkQudHMiLCAic3JjL1JSRC9tb2R1bGVzL3Nob3dEaWFsb2cudHMiLCAiZGlzdC9SUkQvc3JjL1JSRC9BcHAudnVlIiwgInNyYy9SUkQvbW9kdWxlcy9ycmRDb25maWcudHMiLCAic3JjL1JSRC9tb2R1bGVzL2FwaS50cyIsICJzcmMvUlJEL21vZHVsZXMvc3VibWl0LnRzIiwgInNmYy10ZW1wbGF0ZTpEOlxcR2l0UmVwb3NpdG9yeVxcUWl1d2VuR2FkZ2V0c1xcc3JjXFxSUkRcXEFwcC52dWU/dHlwZT10ZW1wbGF0ZSIsICJzcmMvUlJEL0FwcC52dWUiLCAic3JjL1JSRC9tb2R1bGVzL2xvYWRJZHMudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIntcblx0XCJycmRQYWdlXCI6IFwiUWl1d2VuX3RhbGs654mI5pys5Yig6Zmk5o+Q5oqlXCIsXG5cdFwidmVyc2lvblwiOiBcIjIuMFwiXG59XG4iLCAiPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cbmltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7Q2R4QnV0dG9ufSBmcm9tICdAd2lraW1lZGlhL2NvZGV4JztcbmltcG9ydCB7Y29tcHV0ZWR9IGZyb20gJ3Z1ZSc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4uL21vZHVsZXMvaTE4bic7XG5pbXBvcnQge2lzU3BlY2lhbExvZ30gZnJvbSAnLi4vbW9kdWxlcy9pc1NwZWNpYWxMb2cnO1xuXG5jb25zdCBwcm9wcyA9IGRlZmluZVByb3BzPHtcblx0b25DbGljazogKCkgPT4gdm9pZDtcbn0+KCk7XG5cbmNvbnN0IGJ1dHRvbkxhYmVsID0gY29tcHV0ZWQoKCkgPT5cblx0aXNTcGVjaWFsTG9nKCkgPyBnZXRNZXNzYWdlKCdyZXBvcnRCdXR0b25Mb2dUZXh0JykgOiBnZXRNZXNzYWdlKCdyZXBvcnRCdXR0b25UZXh0Jylcbik7XG5jb25zdCBidXR0b25UaXRsZSA9IGNvbXB1dGVkKCgpID0+IGdldE1lc3NhZ2UoJ3JlcG9ydEJ1dHRvblRpdGxlJykgKyBPUFRJT05TLnJyZFBhZ2UpO1xuPC9zY3JpcHQ+XG5cbjx0ZW1wbGF0ZT5cblx0PGNkeC1idXR0b25cblx0XHRjbGFzcz1cInJyZF9fcmVwb3J0XCJcblx0XHR3ZWlnaHQ9XCJwcmltYXJ5XCJcblx0XHR0eXBlPVwiYnV0dG9uXCJcblx0XHQ6YXJpYS1sYWJlbD1cImJ1dHRvblRpdGxlXCJcblx0XHQ6dGl0bGU9XCJidXR0b25UaXRsZVwiXG5cdFx0QGNsaWNrPVwicHJvcHMub25DbGlja1wiXG5cdD5cblx0XHR7eyBidXR0b25MYWJlbCB9fVxuXHQ8L2NkeC1idXR0b24+XG48L3RlbXBsYXRlPlxuIiwgImNvbnN0IGdldEkxOG5NZXNzYWdlcyA9ICgpID0+IHtcblx0Y29uc3Qge3dnVUxTfSA9IHdpbmRvdztcblx0cmV0dXJuIHtcblx0XHRlZGl0U3VtbWFyeTogd2dVTFMoXG5cdFx0XHQnW1tNZWRpYVdpa2k6R2FkZ2V0LVJSRC5qc3zljYroh6rliqjmj5DmiqVdXeS/ruiuoueJiOacrOWIoOmZpCcsXG5cdFx0XHQnW1tNZWRpYVdpa2k6R2FkZ2V0LVJSRC5qc3zljYroh6rli5Xmj5DloLFdXeS/ruiogueJiOacrOWIqumZpCdcblx0XHQpLFxuXHRcdGVyck5vUmV2aXNpb25Qcm92aWRlZDogd2dVTFMoJ+aCqOayoeaciemAieaLqemcgOmakOiXj+eahOeJiOacrO+8gScsICfmgqjmspLmnInpgbjmk4fpnIDpmrHol4/nmoTniYjmnKzvvIEnKSxcblx0XHRlcnJOb0l0ZW1Qcm92aWRlZDogd2dVTFMoJ+aCqOayoeaciemAieaLqemcgOmakOiXj+eahOmhueebru+8gScsICfmgqjmspLmnInpgbjmk4fpnIDpmrHol4/nmoTpoIXnm67vvIEnKSxcblx0XHR3YXJuTm9SZWFzb25Qcm92aWRlZDogd2dVTFMoJ+aCqOayoeaciei+k+WFpeS7u+S9leeQhueUse+8geehruWumuimgee7p+e7reWQl++8nycsICfmgqjmspLmnInovLjlhaXku7vkvZXnkIbnlLHvvIHnorrlrpropoHnubznuozll47vvJ8nKSxcblx0XHRoaWRlSXRlbXM6IHdnVUxTKCfpnIDpmpDol4/nmoTpobnnm67vvJonLCAn6ZyA6Zqx6JeP55qE6aCF55uu77yaJyksXG5cdFx0aGlkZUNvbnRlbnQ6IHdnVUxTKCfnvJbovpHlhoXlrrknLCAn57eo6Lyv5YWn5a65JyksXG5cdFx0aGlkZUxvZzogd2dVTFMoJ+aXpeW/l+ebruagh+S4juWPguaVsCcsICfml6Xoqoznm67mqJnoiIflj4PmlbgnKSxcblx0XHRoaWRlVXNlcm5hbWU6IHdnVUxTKCfnvJbovpHogIXnlKjmiLflkI0nLCAn57eo6Lyv6ICF55So5oi25ZCNJyksXG5cdFx0aGlkZVN1bW1hcnk6IHdnVUxTKCfnvJbovpHmkZjopoEnLCAn57eo6Lyv5pGY6KaBJyksXG5cdFx0aGlkZVJlYXNvbjogd2dVTFMoJ+eQhuaNru+8micsICfnkIbmk5rvvJonKSxcblx0XHRoaWRlUmVhc29uUkQxOiB3Z1VMUygnUkQx77ya5p2h55uu5Lit5piO5pi+5L6154qv6JGX5L2c5p2D55qE5YaF5a65JywgJ1JEMe+8muaineebruS4reaYjumhr+S+teeKr+iRl+S9nOasiueahOWFp+WuuScpLFxuXHRcdGhpZGVSZWFzb25SRDI6IHdnVUxTKCdSRDLvvJrkuKXph43kvq7ovrHjgIHotKzkvY7miJbmlLvlh7vmgKfmlofmnKwnLCAnUkQy77ya5Zq06YeN5L6u6L6x44CB6LK25L2O5oiW5pS75pOK5oCn5paH5pysJyksXG5cdFx0aGlkZVJlYXNvblJEMzogd2dVTFMoJ1JEM++8mue6r+eyueaJsOS5seaAp+WGheWuuScsICfntJTnsrnmk77kuoLmgKflhaflrrknKSxcblx0XHRoaWRlUmVhc29uUkQ0OiB3Z1VMUygnUkQ077ya5piO5pi+6L+d5Y+N5rOV5b6L5rOV6KeE5oiW6L+d6IOM5YWs5bqP6Imv5L+X55qE5YaF5a65JywgJ1JENO+8muaYjumhr+mBleWPjeazleW+i+azleimj+aIlumBleiDjOWFrOW6j+iJr+S/l+eahOWFp+WuuScpLFxuXHRcdGhpZGVSZWFzb25SRDU6IHdnVUxTKCdSRDXvvJrlhbbku5bkuI3lrpzlhazlvIDnmoTniYjmnKzlhoXlrrknLCAnUkQ177ya5YW25LuW5LiN5a6c5YWs6ZaL55qE54mI5pys5YWn5a65JyksXG5cdFx0aGlkZVJlYXNvbk9TMTogd2dVTFMoJ09TMe+8muacquWFrOW8gOeahOS4quS6uui1hOaWmScsICdPUzHvvJrmnKrlhazplovnmoTlgIvkurros4fmlpknKSxcblx0XHRoaWRlUmVhc29uT1MyOiB3Z1VMUygnT1My77ya5Y+v6IO95b2x5ZON55m+56eR6L+Q5L2c55qE5YaF5a65JywgJ09TMu+8muWPr+iDveW9semfv+eZvuenkemBi+S9nOeahOWFp+WuuScpLFxuXHRcdGhpZGVSZWFzb25PUzM6IHdnVUxTKCdPUzPvvJrnoLTlnY/mgKfjgIHmibDkubHmgKfnlKjmiLflkI0nLCAnT1Mz77ya56C05aOe5oCn44CB5pO+5LqC5oCn55So5oi25ZCNJyksXG5cdFx0aGlkZVJlYXNvbk9TNDogd2dVTFMoXG5cdFx0XHQnT1M077ya5Y6f6aG16Z2i5YaF5a655p2l6Ieq5aSW6YOo5p2l5rqQ44CB5LiN56ym5ZCI5rGC6Ze755m+56eR5pa56ZKI77yM5L2G57uP6L+H5pS55YaZ5ZCO77yM5bey56ym5ZCI5rGC6Ze755m+56eR5pa56ZKI55qE6aG16Z2iJyxcblx0XHRcdCdPUzTvvJrljp/poIHpnaLlhaflrrnkvoboh6rlpJbpg6jkvobmupDjgIHkuI3nrKblkIjmsYLogZ7nmb7np5Hmlrnph53vvIzkvYbntpPpgY7opoblr6vlvozvvIzlt7LnrKblkIjmsYLogZ7nmb7np5Hmlrnph53nmoTpoIHpnaInXG5cdFx0KSxcblx0XHRoaWRlUmVhc29uT3RoZXI6IHdnVUxTKCfku4Xkvb/nlKjkuIvmlrnnmoTpmYTliqDnkIbnlLEnLCAn5YOF5L2/55So5LiL5pa555qE6ZmE5Yqg55CG55SxJyksXG5cdFx0b3RoZXJSZWFzb25zOiB3Z1VMUygn6ZmE5Yqg55CG55Sx77yI5Y+v6YCJ77yM5LiN55So562+5ZCN77yJJywgJ+mZhOWKoOeQhueUse+8iOWPr+mBuO+8jOS4jeeUqOewveWQje+8iScpLFxuXHRcdGRpYWxvZ1RpdGxlOiB3Z1VMUygn5o+Q5oql5L+u6K6i54mI5pys5Yig6ZmkJywgJ+aPkOWgseS/ruiogueJiOacrOWIqumZpCcpLFxuXHRcdGRpYWxvZ0J1dHRvblN1Ym1pdDogd2dVTFMoJ+aPkOaKpScsICfmj5DloLEnKSxcblx0XHRkaWFsb2dCdXR0b25DYW5jZWw6IHdnVUxTKCflj5bmtognLCAn5Y+W5raIJyksXG5cdFx0cmVwb3J0QnV0dG9uVGl0bGU6IHdnVUxTKCflsIbpgInkuK3nmoTniYjmnKzmj5DmiqXliLAnLCAn5bCH6YG45Lit55qE54mI5pys5o+Q5aCx5YiwJyksXG5cdFx0cmVwb3J0QnV0dG9uVGV4dDogd2dVTFMoJ+ivt+axguWIoOmZpOiiq+mAieeJiOacrCcsICfoq4vmsYLliKrpmaTooqvpgbjniYjmnKwnKSxcblx0XHRyZXBvcnRCdXR0b25Mb2dUZXh0OiB3Z1VMUygn6K+35rGC5Yig6Zmk6KKr6YCJ5pel5b+XJywgJ+iri+axguWIqumZpOiiq+mBuOaXpeiqjCcpLFxuXHR9O1xufTtcblxuY29uc3QgaTE4bk1lc3NhZ2VzID0gZ2V0STE4bk1lc3NhZ2VzKCk7XG5cbmNvbnN0IGdldE1lc3NhZ2U6IEdldE1lc3NhZ2VzPHR5cGVvZiBpMThuTWVzc2FnZXM+ID0gKGtleSkgPT4ge1xuXHRyZXR1cm4gaTE4bk1lc3NhZ2VzW2tleV0gfHwga2V5O1xufTtcblxuZXhwb3J0IHtnZXRNZXNzYWdlfTtcbiIsICJjb25zdCBpc1NwZWNpYWxMb2cgPSAoKSA9PiB7XG5cdGNvbnN0IHt3Z0Nhbm9uaWNhbFNwZWNpYWxQYWdlTmFtZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cdHJldHVybiB3Z0Nhbm9uaWNhbFNwZWNpYWxQYWdlTmFtZSA9PT0gJ0xvZyc7XG59O1xuXG5leHBvcnQge2lzU3BlY2lhbExvZ307XG4iLCAiaW1wb3J0IHsgdG9EaXNwbGF5U3RyaW5nIGFzIF90b0Rpc3BsYXlTdHJpbmcsIGNyZWF0ZVRleHRWTm9kZSBhcyBfY3JlYXRlVGV4dFZOb2RlLCB3aXRoQ3R4IGFzIF93aXRoQ3R4LCBvcGVuQmxvY2sgYXMgX29wZW5CbG9jaywgY3JlYXRlQmxvY2sgYXMgX2NyZWF0ZUJsb2NrIH0gZnJvbSBcInZ1ZVwiXG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXIoX2N0eCwgX2NhY2hlLCAkcHJvcHMsICRzZXR1cCwgJGRhdGEsICRvcHRpb25zKSB7XG4gIHJldHVybiAoX29wZW5CbG9jaygpLCBfY3JlYXRlQmxvY2soJHNldHVwW1wiQ2R4QnV0dG9uXCJdLCB7XG4gICAgY2xhc3M6IFwicnJkX19yZXBvcnRcIixcbiAgICB3ZWlnaHQ6IFwicHJpbWFyeVwiLFxuICAgIHR5cGU6IFwiYnV0dG9uXCIsXG4gICAgXCJhcmlhLWxhYmVsXCI6ICRzZXR1cC5idXR0b25UaXRsZSxcbiAgICB0aXRsZTogJHNldHVwLmJ1dHRvblRpdGxlLFxuICAgIG9uQ2xpY2s6ICRzZXR1cC5wcm9wcy5vbkNsaWNrXG4gIH0sIHtcbiAgICBkZWZhdWx0OiBfd2l0aEN0eCgoKSA9PiBbXG4gICAgICBfY3JlYXRlVGV4dFZOb2RlKF90b0Rpc3BsYXlTdHJpbmcoJHNldHVwLmJ1dHRvbkxhYmVsKSwgMSAvKiBURVhUICovKVxuICAgIF0pLFxuICAgIF86IDEgLyogU1RBQkxFICovXG4gIH0sIDggLyogUFJPUFMgKi8sIFtcImFyaWEtbGFiZWxcIiwgXCJ0aXRsZVwiLCBcIm9uQ2xpY2tcIl0pKVxufSIsICJpbXBvcnQgc2NyaXB0IGZyb20gXCJEOlxcXFxHaXRSZXBvc2l0b3J5XFxcXFFpdXdlbkdhZGdldHNcXFxcc3JjXFxcXFJSRFxcXFxjb21wb25lbnRzXFxcXFJlcG9ydEJ1dHRvbi52dWU/dHlwZT1zY3JpcHRcIjtpbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwiRDpcXFxcR2l0UmVwb3NpdG9yeVxcXFxRaXV3ZW5HYWRnZXRzXFxcXHNyY1xcXFxSUkRcXFxcY29tcG9uZW50c1xcXFxSZXBvcnRCdXR0b24udnVlP3R5cGU9dGVtcGxhdGVcIjsgc2NyaXB0LnJlbmRlciA9IHJlbmRlcjtzY3JpcHQuX19maWxlID0gXCJzcmNcXFxcUlJEXFxcXGNvbXBvbmVudHNcXFxcUmVwb3J0QnV0dG9uLnZ1ZVwiO2V4cG9ydCBkZWZhdWx0IHNjcmlwdDsiLCAiaW1wb3J0IFJlcG9ydEJ1dHRvbiBmcm9tICcuL2NvbXBvbmVudHMvUmVwb3J0QnV0dG9uLnZ1ZSc7XG5pbXBvcnQge2NyZWF0ZUFwcH0gZnJvbSAndnVlJztcbmltcG9ydCB7Z2V0Qm9keX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbmltcG9ydCB7c2hvd0RpYWxvZ30gZnJvbSAnLi9tb2R1bGVzL3Nob3dEaWFsb2cnO1xuXG52b2lkIGdldEJvZHkoKS50aGVuKGZ1bmN0aW9uIHJyZCgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkIHtcblx0Y29uc3Qge3dnQWN0aW9uLCB3Z0Nhbm9uaWNhbFNwZWNpYWxQYWdlTmFtZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cblx0aWYgKHdnQWN0aW9uID09PSAnaGlzdG9yeScgfHwgd2dDYW5vbmljYWxTcGVjaWFsUGFnZU5hbWUgPT09ICdMb2cnKSB7XG5cdFx0Y29uc3QgQ0xBU1NfTkFNRVMgPSBbXG5cdFx0XHQnLmhpc3RvcnlzdWJtaXQubXctaGlzdG9yeS1jb21wYXJlc2VsZWN0ZWR2ZXJzaW9ucy1idXR0b24nLFxuXHRcdFx0Jy5lZGl0Y2hhbmdldGFncy1sb2ctc3VibWl0Lm13LWxvZy1lZGl0Y2hhbmdldGFncy1idXR0b24nLFxuXHRcdF07XG5cdFx0Y29uc3QgYnV0dG9uID0gKG9uQ2xpY2s6ICgpID0+IHZvaWQpOiBIVE1MU3BhbkVsZW1lbnQgPT4ge1xuXHRcdFx0Y29uc3Qgcm9vdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcblx0XHRcdGNyZWF0ZUFwcChSZXBvcnRCdXR0b24sIHtvbkNsaWNrfSkubW91bnQocm9vdCk7XG5cdFx0XHRyZXR1cm4gcm9vdDtcblx0XHR9O1xuXG5cdFx0Zm9yIChjb25zdCBlbGVtZW50IG9mICRib2R5LmZpbmQoQ0xBU1NfTkFNRVMuam9pbignLCcpKSkge1xuXHRcdFx0Y29uc3QgYXBwZW5kRWxlbWVudCA9IGJ1dHRvbigoKSA9PiBzaG93RGlhbG9nKCRib2R5KSk7XG5cdFx0XHRlbGVtZW50LmFmdGVyKGFwcGVuZEVsZW1lbnQpO1xuXHRcdH1cblx0fVxufSk7XG4iLCAiaW1wb3J0IHt0eXBlIEFwcCBhcyBWdWVBcHAsIGNyZWF0ZUFwcH0gZnJvbSAndnVlJztcbmltcG9ydCBBcHAgZnJvbSAnLi4vQXBwLnZ1ZSc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vaTE4bic7XG5pbXBvcnQge2xvYWRJZHN9IGZyb20gJy4vbG9hZElkcyc7XG5cbmxldCBhcHA6IFZ1ZUFwcDxFbGVtZW50PiB8IHVuZGVmaW5lZDtcbmxldCByb290OiBIVE1MRGl2RWxlbWVudCB8IHVuZGVmaW5lZDtcblxuY29uc3QgZGlzcG9zZURpYWxvZyA9ICgpOiB2b2lkID0+IHtcblx0aWYgKGFwcCkge1xuXHRcdGFwcC51bm1vdW50KCk7XG5cdFx0YXBwID0gdW5kZWZpbmVkO1xuXHR9XG5cdGlmIChyb290KSB7XG5cdFx0cm9vdC5yZW1vdmUoKTtcblx0XHRyb290ID0gdW5kZWZpbmVkO1xuXHR9XG59O1xuXG5jb25zdCBzaG93RGlhbG9nID0gKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQgPT4ge1xuXHRjb25zdCBpZHM6IHN0cmluZ1tdID0gbG9hZElkcygkYm9keSk7XG5cdGlmICghaWRzLmxlbmd0aCkge1xuXHRcdHZvaWQgbXcubm90aWZ5KGdldE1lc3NhZ2UoJ2Vyck5vUmV2aXNpb25Qcm92aWRlZCcpLCB7XG5cdFx0XHR0YWc6ICdSUkQnLFxuXHRcdFx0dHlwZTogJ2Vycm9yJyxcblx0XHR9KTtcblxuXHRcdHJldHVybjtcblx0fVxuXG5cdGRpc3Bvc2VEaWFsb2coKTtcblx0cm9vdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRkb2N1bWVudC5ib2R5LmFwcGVuZChyb290KTtcblx0YXBwID0gY3JlYXRlQXBwKEFwcCwge1xuXHRcdGlkcyxcblx0XHRvbkNsb3NlOiBkaXNwb3NlRGlhbG9nLFxuXHR9KTtcblx0YXBwLm1vdW50KHJvb3QpO1xufTtcblxuZXhwb3J0IHtzaG93RGlhbG9nfTtcbiIsICI8c2NyaXB0IHNldHVwIGxhbmc9XCJ0c1wiPlxuaW1wb3J0IHtDZHhDaGVja2JveCwgQ2R4RGlhbG9nLCBDZHhGaWVsZCwgQ2R4U2VsZWN0LCBDZHhUZXh0QXJlYX0gZnJvbSAnQHdpa2ltZWRpYS9jb2RleCc7XG5pbXBvcnQge2FwcGx5Q29uZmlnLCBjb25maWd9IGZyb20gJy4vbW9kdWxlcy9ycmRDb25maWcnO1xuaW1wb3J0IHtjb21wdXRlZCwgcmVmLCB3YXRjaH0gZnJvbSAndnVlJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9tb2R1bGVzL2kxOG4nO1xuaW1wb3J0IHtpc1NwZWNpYWxMb2d9IGZyb20gJy4vbW9kdWxlcy9pc1NwZWNpYWxMb2cnO1xuaW1wb3J0IHtzdWJtaXR9IGZyb20gJy4vbW9kdWxlcy9zdWJtaXQnO1xuXG5jb25zdCBwcm9wcyA9IGRlZmluZVByb3BzPHtcblx0aWRzOiBzdHJpbmdbXTtcblx0b25DbG9zZTogKCkgPT4gdm9pZDtcbn0+KCk7XG5cbmNvbnN0IG9wZW4gPSByZWYodHJ1ZSk7XG5jb25zdCBoaWRlQ29udGVudCA9IHJlZihCb29sZWFuKGNvbmZpZy5jaGVja2JveGVzLnJyZEhpZGVDb250ZW50KSk7XG5jb25zdCBoaWRlVXNlcm5hbWUgPSByZWYoQm9vbGVhbihjb25maWcuY2hlY2tib3hlcy5ycmRIaWRlVXNlcm5hbWUpKTtcbmNvbnN0IGhpZGVTdW1tYXJ5ID0gcmVmKEJvb2xlYW4oY29uZmlnLmNoZWNrYm94ZXMucnJkSGlkZVN1bW1hcnkpKTtcbmNvbnN0IHJlYXNvbiA9IHJlZihjb25maWcub3RoZXJzLnJyZFJlYXNvbiA/PyAnJyk7XG5jb25zdCBvdGhlclJlYXNvbnMgPSByZWYoY29uZmlnLm90aGVycy5ycmRPdGhlclJlYXNvbnMgPz8gJycpO1xuXG5jb25zdCByZWFzb25JdGVtcyA9IGNvbXB1dGVkKCgpID0+IFtcblx0e3ZhbHVlOiBnZXRNZXNzYWdlKCdoaWRlUmVhc29uUkQxJyksIGxhYmVsOiBnZXRNZXNzYWdlKCdoaWRlUmVhc29uUkQxJyl9LFxuXHR7dmFsdWU6IGdldE1lc3NhZ2UoJ2hpZGVSZWFzb25SRDInKSwgbGFiZWw6IGdldE1lc3NhZ2UoJ2hpZGVSZWFzb25SRDInKX0sXG5cdHt2YWx1ZTogZ2V0TWVzc2FnZSgnaGlkZVJlYXNvblJEMycpLCBsYWJlbDogZ2V0TWVzc2FnZSgnaGlkZVJlYXNvblJEMycpfSxcblx0e3ZhbHVlOiBnZXRNZXNzYWdlKCdoaWRlUmVhc29uUkQ0JyksIGxhYmVsOiBnZXRNZXNzYWdlKCdoaWRlUmVhc29uUkQ0Jyl9LFxuXHR7dmFsdWU6IGdldE1lc3NhZ2UoJ2hpZGVSZWFzb25SRDUnKSwgbGFiZWw6IGdldE1lc3NhZ2UoJ2hpZGVSZWFzb25SRDUnKX0sXG5cdHt2YWx1ZTogZ2V0TWVzc2FnZSgnaGlkZVJlYXNvbk9TMScpLCBsYWJlbDogZ2V0TWVzc2FnZSgnaGlkZVJlYXNvbk9TMScpfSxcblx0e3ZhbHVlOiBnZXRNZXNzYWdlKCdoaWRlUmVhc29uT1MyJyksIGxhYmVsOiBnZXRNZXNzYWdlKCdoaWRlUmVhc29uT1MyJyl9LFxuXHR7dmFsdWU6IGdldE1lc3NhZ2UoJ2hpZGVSZWFzb25PUzMnKSwgbGFiZWw6IGdldE1lc3NhZ2UoJ2hpZGVSZWFzb25PUzMnKX0sXG5cdHt2YWx1ZTogZ2V0TWVzc2FnZSgnaGlkZVJlYXNvbk9TNCcpLCBsYWJlbDogZ2V0TWVzc2FnZSgnaGlkZVJlYXNvbk9TNCcpfSxcblx0e3ZhbHVlOiAnJywgbGFiZWw6IGdldE1lc3NhZ2UoJ2hpZGVSZWFzb25PdGhlcicpfSxcbl0pO1xuXG5jb25zdCBwcmltYXJ5QWN0aW9uID0gY29tcHV0ZWQoKCkgPT4gKHtcblx0bGFiZWw6IGdldE1lc3NhZ2UoJ2RpYWxvZ0J1dHRvblN1Ym1pdCcpLFxuXHRhY3Rpb25UeXBlOiAncHJvZ3Jlc3NpdmUnIGFzIGNvbnN0LFxufSkpO1xuXG5jb25zdCBkZWZhdWx0QWN0aW9uID0gY29tcHV0ZWQoKCkgPT4gKHtcblx0bGFiZWw6IGdldE1lc3NhZ2UoJ2RpYWxvZ0J1dHRvbkNhbmNlbCcpLFxufSkpO1xuXG53YXRjaChcblx0KCkgPT4gW2hpZGVDb250ZW50LnZhbHVlLCBoaWRlVXNlcm5hbWUudmFsdWUsIGhpZGVTdW1tYXJ5LnZhbHVlLCByZWFzb24udmFsdWUsIG90aGVyUmVhc29ucy52YWx1ZV0sXG5cdCgpID0+IHtcblx0XHRhcHBseUNvbmZpZyhcblx0XHRcdHtcblx0XHRcdFx0cnJkSGlkZUNvbnRlbnQ6IGhpZGVDb250ZW50LnZhbHVlID8/IGZhbHNlLFxuXHRcdFx0XHRycmRIaWRlVXNlcm5hbWU6IGhpZGVVc2VybmFtZS52YWx1ZSA/PyBmYWxzZSxcblx0XHRcdFx0cnJkSGlkZVN1bW1hcnk6IGhpZGVTdW1tYXJ5LnZhbHVlID8/IGZhbHNlLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0cnJkUmVhc29uOiByZWFzb24udmFsdWUgPz8gJycsXG5cdFx0XHRcdHJyZE90aGVyUmVhc29uczogb3RoZXJSZWFzb25zLnZhbHVlID8/ICcnLFxuXHRcdFx0fVxuXHRcdCk7XG5cdH0sXG5cdHtkZWVwOiB0cnVlfVxuKTtcblxuY29uc3Qgc3VibWl0RGlhbG9nID0gKCk6IHZvaWQgPT4ge1xuXHRjb25zdCBzaG91bGRIaWRlQ29udGVudCA9IGhpZGVDb250ZW50LnZhbHVlO1xuXHRjb25zdCBzaG91bGRIaWRlVXNlcm5hbWUgPSBoaWRlVXNlcm5hbWUudmFsdWU7XG5cdGNvbnN0IHNob3VsZEhpZGVTdW1tYXJ5ID0gaGlkZVN1bW1hcnkudmFsdWU7XG5cdGNvbnN0IHJyZFJlYXNvbiA9IHJlYXNvbi52YWx1ZSB8fCB1bmRlZmluZWQ7XG5cdGxldCBycmRPdGhlclJlYXNvbnMgPSBvdGhlclJlYXNvbnMudmFsdWUgfHwgdW5kZWZpbmVkO1xuXG5cdGlmIChycmRPdGhlclJlYXNvbnMgJiYgcnJkUmVhc29uKSB7XG5cdFx0cnJkT3RoZXJSZWFzb25zID0gYO+8jCR7cnJkT3RoZXJSZWFzb25zfWA7XG5cdH1cblxuXHRjb25zdCB0b0hpZGU6IHN0cmluZ1tdID0gW107XG5cdGlmIChzaG91bGRIaWRlQ29udGVudCkge1xuXHRcdHRvSGlkZS5wdXNoKGlzU3BlY2lhbExvZygpID8gZ2V0TWVzc2FnZSgnaGlkZUxvZycpIDogZ2V0TWVzc2FnZSgnaGlkZUNvbnRlbnQnKSk7XG5cdH1cblx0aWYgKHNob3VsZEhpZGVVc2VybmFtZSkge1xuXHRcdHRvSGlkZS5wdXNoKGdldE1lc3NhZ2UoJ2hpZGVVc2VybmFtZScpKTtcblx0fVxuXHRpZiAoc2hvdWxkSGlkZVN1bW1hcnkpIHtcblx0XHR0b0hpZGUucHVzaChnZXRNZXNzYWdlKCdoaWRlU3VtbWFyeScpKTtcblx0fVxuXG5cdGlmICghdG9IaWRlLmxlbmd0aCkge1xuXHRcdHZvaWQgbXcubm90aWZ5KGdldE1lc3NhZ2UoJ2Vyck5vSXRlbVByb3ZpZGVkJyksIHtcblx0XHRcdHRhZzogJ1JSRCcsXG5cdFx0XHR0eXBlOiAnZXJyb3InLFxuXHRcdH0pO1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGxldCBjb250ID0gdHJ1ZTtcblx0aWYgKCFycmRSZWFzb24gJiYgIXJyZE90aGVyUmVhc29ucykge1xuXHRcdGNvbnQgPSBjb25maXJtKGdldE1lc3NhZ2UoJ3dhcm5Ob1JlYXNvblByb3ZpZGVkJykpO1xuXHR9XG5cblx0aWYgKGNvbnQpIHtcblx0XHRvcGVuLnZhbHVlID0gZmFsc2U7XG5cdFx0dm9pZCBzdWJtaXQocHJvcHMuaWRzLCB0b0hpZGUuam9pbign44CBJyksIHJyZFJlYXNvbiA/PyAnJywgcnJkT3RoZXJSZWFzb25zID8/ICcnKTtcblx0XHRwcm9wcy5vbkNsb3NlKCk7XG5cdH1cbn07XG5cbmNvbnN0IGNsb3NlRGlhbG9nID0gKCk6IHZvaWQgPT4ge1xuXHRvcGVuLnZhbHVlID0gZmFsc2U7XG5cdGFwcGx5Q29uZmlnKFxuXHRcdHtcblx0XHRcdHJyZEhpZGVDb250ZW50OiBoaWRlQ29udGVudC52YWx1ZSA/PyBmYWxzZSxcblx0XHRcdHJyZEhpZGVVc2VybmFtZTogaGlkZVVzZXJuYW1lLnZhbHVlID8/IGZhbHNlLFxuXHRcdFx0cnJkSGlkZVN1bW1hcnk6IGhpZGVTdW1tYXJ5LnZhbHVlID8/IGZhbHNlLFxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0cnJkUmVhc29uOiByZWFzb24udmFsdWUgfHwgJycsXG5cdFx0XHRycmRPdGhlclJlYXNvbnM6IG90aGVyUmVhc29ucy52YWx1ZSB8fCAnJyxcblx0XHR9XG5cdCk7XG5cdHByb3BzLm9uQ2xvc2UoKTtcbn07XG48L3NjcmlwdD5cblxuPHRlbXBsYXRlPlxuXHQ8Y2R4LWRpYWxvZ1xuXHRcdHYtbW9kZWw6b3Blbj1cIm9wZW5cIlxuXHRcdDp0aXRsZT1cImdldE1lc3NhZ2UoJ2RpYWxvZ1RpdGxlJylcIlxuXHRcdDp1c2UtY2xvc2UtYnV0dG9uPVwidHJ1ZVwiXG5cdFx0OnByaW1hcnktYWN0aW9uPVwicHJpbWFyeUFjdGlvblwiXG5cdFx0OmRlZmF1bHQtYWN0aW9uPVwiZGVmYXVsdEFjdGlvblwiXG5cdFx0QHVwZGF0ZTpvcGVuPVwiJGV2ZW50ID09PSBmYWxzZSAmJiBjbG9zZURpYWxvZygpXCJcblx0XHRAcHJpbWFyeT1cInN1Ym1pdERpYWxvZ1wiXG5cdFx0QGRlZmF1bHQ9XCJjbG9zZURpYWxvZ1wiXG5cdD5cblx0XHQ8ZGl2IGNsYXNzPVwicnJkLWRpYWxvZ19fYm9keVwiPlxuXHRcdFx0PGRpdiBjbGFzcz1cInJyZC1kaWFsb2dfX3NlY3Rpb25cIj5cblx0XHRcdFx0PHA+e3sgZ2V0TWVzc2FnZSgnaGlkZUl0ZW1zJykgfX08L3A+XG5cdFx0XHRcdDxjZHgtZmllbGQ+XG5cdFx0XHRcdFx0PGNkeC1jaGVja2JveCB2LW1vZGVsPVwiaGlkZUNvbnRlbnRcIj5cblx0XHRcdFx0XHRcdHt7IGlzU3BlY2lhbExvZygpID8gZ2V0TWVzc2FnZSgnaGlkZUxvZycpIDogZ2V0TWVzc2FnZSgnaGlkZUNvbnRlbnQnKSB9fVxuXHRcdFx0XHRcdDwvY2R4LWNoZWNrYm94PlxuXHRcdFx0XHQ8L2NkeC1maWVsZD5cblx0XHRcdFx0PGNkeC1maWVsZD5cblx0XHRcdFx0XHQ8Y2R4LWNoZWNrYm94IHYtbW9kZWw9XCJoaWRlVXNlcm5hbWVcIj57eyBnZXRNZXNzYWdlKCdoaWRlVXNlcm5hbWUnKSB9fTwvY2R4LWNoZWNrYm94PlxuXHRcdFx0XHQ8L2NkeC1maWVsZD5cblx0XHRcdFx0PGNkeC1maWVsZD5cblx0XHRcdFx0XHQ8Y2R4LWNoZWNrYm94IHYtbW9kZWw9XCJoaWRlU3VtbWFyeVwiPnt7IGdldE1lc3NhZ2UoJ2hpZGVTdW1tYXJ5JykgfX08L2NkeC1jaGVja2JveD5cblx0XHRcdFx0PC9jZHgtZmllbGQ+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3M9XCJycmQtZGlhbG9nX19zZWN0aW9uXCI+XG5cdFx0XHRcdDxwPnt7IGdldE1lc3NhZ2UoJ2hpZGVSZWFzb24nKSB9fTwvcD5cblx0XHRcdFx0PGNkeC1maWVsZD5cblx0XHRcdFx0XHQ8Y2R4LXNlbGVjdCB2LW1vZGVsOnNlbGVjdGVkPVwicmVhc29uXCIgOm1lbnUtaXRlbXM9XCJyZWFzb25JdGVtc1wiIC8+XG5cdFx0XHRcdDwvY2R4LWZpZWxkPlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwicnJkLWRpYWxvZ19fc2VjdGlvblwiPlxuXHRcdFx0XHQ8cD57eyBnZXRNZXNzYWdlKCdvdGhlclJlYXNvbnMnKSB9fTwvcD5cblx0XHRcdFx0PGNkeC10ZXh0LWFyZWEgdi1tb2RlbD1cIm90aGVyUmVhc29uc1wiIHJvd3M9XCI0XCIgLz5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHQ8L2NkeC1kaWFsb2c+XG48L3RlbXBsYXRlPlxuXG48c3R5bGUgbGFuZz1cImxlc3NcIj5cbi5ycmQtZGlhbG9nX19ib2R5IHtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0Z2FwOiAwLjc1cmVtO1xuXHRtaW4td2lkdGg6IG1pbig4NXZ3LCAyNXJlbSk7XG59XG5cbi5ycmQtZGlhbG9nX19zZWN0aW9uIHtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0Z2FwOiAwLjVyZW07XG59XG5cbi5ycmQtZGlhbG9nX19zZWN0aW9uIHAge1xuXHRtYXJnaW46IDA7XG59XG48L3N0eWxlPlxuIiwgImltcG9ydCB0eXBlIHtScmRDb25maWd9IGZyb20gJy4vdHlwZXMnO1xuXG5jb25zdCBjb25maWc6IFJyZENvbmZpZyA9IHtcblx0Y2hlY2tib3hlczoge30sXG5cdG90aGVyczoge30sXG59O1xuXG5jb25zdCBhcHBseUNvbmZpZyA9IChjaGVja2JveGVzOiBScmRDb25maWdbJ2NoZWNrYm94ZXMnXSA9IHt9LCBvdGhlcnM6IFJyZENvbmZpZ1snb3RoZXJzJ10gPSB7fSk6IHZvaWQgPT4ge1xuXHRjb25maWcuY2hlY2tib3hlcyA9IGNoZWNrYm94ZXM7XG5cdGNvbmZpZy5vdGhlcnMgPSBvdGhlcnM7XG59O1xuXG5leHBvcnQge2FwcGx5Q29uZmlnLCBjb25maWd9O1xuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7aW5pdE13QXBpfSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG5jb25zdCBhcGk6IG13LkFwaSA9IGluaXRNd0FwaShgUlJELyR7T1BUSU9OUy52ZXJzaW9ufWApO1xuXG5leHBvcnQge2FwaX07XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHthcGl9IGZyb20gJy4vYXBpJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9pMThuJztcbmltcG9ydCB7dW5pcXVlQXJyYXl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmNvbnN0IHF1ZXJ5UmV2aXNpb25zID0gYXN5bmMgKHRpdGxlczogc3RyaW5nIHwgc3RyaW5nW10pID0+IHtcblx0Y29uc3QgcGFyYW1zOiBBcGlRdWVyeVJldmlzaW9uc1BhcmFtcyA9IHtcblx0XHR0aXRsZXMsXG5cdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRwcm9wOiAncmV2aXNpb25zJyxcblx0XHRydnByb3A6ICdjb250ZW50Jyxcblx0XHRydnNsb3RzOiAnbWFpbicsXG5cdH07XG5cdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXBpLmdldChwYXJhbXMpO1xuXG5cdHJldHVybiByZXNwb25zZTtcbn07XG5cbmNvbnN0IGVkaXQgPSBhc3luYyAodGl0bGU6IHN0cmluZywgdGV4dDogc3RyaW5nLCBzdW1tYXJ5Pzogc3RyaW5nKSA9PiB7XG5cdGNvbnN0IHBhcmFtczogQXBpRWRpdFBhZ2VQYXJhbXMgPSB7XG5cdFx0dGl0bGUsXG5cdFx0dGV4dCxcblx0XHRhY3Rpb246ICdlZGl0Jyxcblx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdH07XG5cdGlmIChzdW1tYXJ5KSB7XG5cdFx0cGFyYW1zLnN1bW1hcnkgPSBzdW1tYXJ5O1xuXHR9XG5cdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXBpLnBvc3RXaXRoRWRpdFRva2VuKHBhcmFtcyk7XG5cblx0cmV0dXJuIHJlc3BvbnNlO1xufTtcblxuY29uc3Qgc3VibWl0ID0gYXN5bmMgKGlkczogc3RyaW5nW10sIHRvSGlkZTogc3RyaW5nLCByZWFzb246IHN0cmluZywgb3RoZXJSZWFzb25zOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0Y29uc3Qge3dnUGFnZU5hbWV9ID0gbXcuY29uZmlnLmdldCgpO1xuXG5cdGZvciAoY29uc3QgUkRpZCBvZiBbMSwgMiwgMywgNCwgNV0pIHtcblx0XHRpZiAocmVhc29uLmluY2x1ZGVzKGBSRCR7UkRpZH1gKSkge1xuXHRcdFx0cmVhc29uID0gYFJEJHtSRGlkfWA7XG5cdFx0XHRicmVhaztcblx0XHR9XG5cdH1cblxuXHRmb3IgKGNvbnN0IE9TaWQgb2YgWzEsIDIsIDMsIDRdKSB7XG5cdFx0aWYgKHJlYXNvbi5pbmNsdWRlcyhgT1Mke09TaWR9YCkpIHtcblx0XHRcdHJlYXNvbiA9IGBPUyR7T1NpZH1gO1xuXHRcdFx0YnJlYWs7XG5cdFx0fVxuXHR9XG5cblx0Y29uc3QgcnJkQXJyOiBzdHJpbmdbXSA9IFtcblx0XHQne3tSZXZkZWwnLFxuXHRcdCd8c3RhdHVzID0gJyxcblx0XHRgfGFydGljbGUgPSAke3dnUGFnZU5hbWV9YCxcblx0XHRgfHNldCA9ICR7dG9IaWRlfWAsXG5cdFx0YHxyZWFzb24gPSAke3JlYXNvbn0ke290aGVyUmVhc29uc31gLFxuXHRdO1xuXG5cdGZvciAoY29uc3QgW2luZGV4LCBpZF0gb2YgdW5pcXVlQXJyYXkoaWRzKS5lbnRyaWVzKCkpIHtcblx0XHQvLyBSZXBsYWNlIFNldCB3aXRoIHVuaXF1ZUFycmF5LCBhdm9pZGluZyBjb3JlLWpzIHBvbHlmaWxsaW5nXG5cdFx0cnJkQXJyW3JyZEFyci5sZW5ndGhdID0gYHxpZCR7aW5kZXggKyAxfSA9ICR7aWR9YDtcblx0fVxuXHRycmRBcnJbcnJkQXJyLmxlbmd0aF0gPSAnfX1cXG7igJTigJR+ficuY29uY2F0KCd+ficpO1xuXG5cdHRyeSB7XG5cdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBxdWVyeVJldmlzaW9ucyhPUFRJT05TLnJyZFBhZ2UpO1xuXG5cdFx0bGV0IGNvbnRlbnQ6IHN0cmluZyB8IHVuZGVmaW5lZDtcblx0XHRpZiAocmVzcG9uc2VbJ3F1ZXJ5J10/LnBhZ2VzKSB7XG5cdFx0XHRjb250ZW50ID0gcmVzcG9uc2VbJ3F1ZXJ5J10ucGFnZXNbMF0ucmV2aXNpb25zWzBdLnNsb3RzLm1haW4uY29udGVudCBhcyBzdHJpbmc7XG5cdFx0fVxuXG5cdFx0aWYgKGNvbnRlbnQgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dm9pZCBtdy5ub3RpZnkoYEVycm9yIHdoZW4gbG9hZGluZyBwYWdlICR7T1BUSU9OUy5ycmRQYWdlfTogbWlzc2luZ2AsIHtcblx0XHRcdFx0dGFnOiAnUlJEJyxcblx0XHRcdFx0dHlwZTogJ2Vycm9yJyxcblx0XHRcdH0pO1xuXG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IHJlc3VsdCA9IGF3YWl0IGVkaXQoT1BUSU9OUy5ycmRQYWdlLCBgJHtjb250ZW50fVxcblxcbiR7cnJkQXJyLmpvaW4oJ1xcbicpfWAsIGdldE1lc3NhZ2UoJ2VkaXRTdW1tYXJ5JykpO1xuXG5cdFx0XHRpZiAocmVzdWx0WydlZGl0J10/LnJlc3VsdCA9PT0gJ1N1Y2Nlc3MnKSB7XG5cdFx0XHRcdGxvY2F0aW9uLnJlcGxhY2UobXcudXRpbC5nZXRVcmwoT1BUSU9OUy5ycmRQYWdlKSk7XG5cdFx0XHR9IGVsc2UgaWYgKHJlc3VsdFsnZXJyb3InXT8uY29kZSkge1xuXHRcdFx0XHR2b2lkIG13Lm5vdGlmeShgU29tZSBlcnJvcnMgb2NjdXJlZCB3aGlsZSBzYXZpbmcgcGFnZTogJHtyZXN1bHRbJ2Vycm9yJ10uY29kZX1gLCB7XG5cdFx0XHRcdFx0dGFnOiAnUlJEJyxcblx0XHRcdFx0XHR0eXBlOiAnZXJyb3InLFxuXHRcdFx0XHR9KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHZvaWQgbXcubm90aWZ5KCdTb21lIGVycm9ycyBvY2N1cmVkIHdoaWxlIHNhdmluZyBwYWdlOiB1bmtub3duJywge1xuXHRcdFx0XHRcdHRhZzogJ1JSRCcsXG5cdFx0XHRcdFx0dHlwZTogJ2Vycm9yJyxcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fSBjYXRjaCB7XG5cdFx0XHR2b2lkIG13Lm5vdGlmeShgRXJyb3Igd2hlbiBlZGl0aW5nIHBhZ2UgJHtPUFRJT05TLnJyZFBhZ2V9YCwge3RhZzogJ1JSRCcsIHR5cGU6ICdlcnJvcid9KTtcblx0XHR9XG5cdH0gY2F0Y2gge1xuXHRcdHZvaWQgbXcubm90aWZ5KGBFcnJvciB3aGVuIGxvYWRpbmcgcGFnZSAke09QVElPTlMucnJkUGFnZX1gLCB7dGFnOiAnUlJEJywgdHlwZTogJ2Vycm9yJ30pO1xuXHR9XG59O1xuXG5leHBvcnQge3N1Ym1pdH07XG4iLCAiaW1wb3J0IHsgdG9EaXNwbGF5U3RyaW5nIGFzIF90b0Rpc3BsYXlTdHJpbmcsIGNyZWF0ZUVsZW1lbnRWTm9kZSBhcyBfY3JlYXRlRWxlbWVudFZOb2RlLCBjcmVhdGVUZXh0Vk5vZGUgYXMgX2NyZWF0ZVRleHRWTm9kZSwgd2l0aEN0eCBhcyBfd2l0aEN0eCwgY3JlYXRlVk5vZGUgYXMgX2NyZWF0ZVZOb2RlLCBvcGVuQmxvY2sgYXMgX29wZW5CbG9jaywgY3JlYXRlQmxvY2sgYXMgX2NyZWF0ZUJsb2NrIH0gZnJvbSBcInZ1ZVwiXG5cbmNvbnN0IF9ob2lzdGVkXzEgPSB7IGNsYXNzOiBcInJyZC1kaWFsb2dfX2JvZHlcIiB9XG5jb25zdCBfaG9pc3RlZF8yID0geyBjbGFzczogXCJycmQtZGlhbG9nX19zZWN0aW9uXCIgfVxuY29uc3QgX2hvaXN0ZWRfMyA9IHsgY2xhc3M6IFwicnJkLWRpYWxvZ19fc2VjdGlvblwiIH1cbmNvbnN0IF9ob2lzdGVkXzQgPSB7IGNsYXNzOiBcInJyZC1kaWFsb2dfX3NlY3Rpb25cIiB9XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXIoX2N0eCwgX2NhY2hlLCAkcHJvcHMsICRzZXR1cCwgJGRhdGEsICRvcHRpb25zKSB7XG4gIHJldHVybiAoX29wZW5CbG9jaygpLCBfY3JlYXRlQmxvY2soJHNldHVwW1wiQ2R4RGlhbG9nXCJdLCB7XG4gICAgb3BlbjogJHNldHVwLm9wZW4sXG4gICAgXCJvblVwZGF0ZTpvcGVuXCI6IFtcbiAgICAgIF9jYWNoZVs1XSB8fCAoX2NhY2hlWzVdID0gJGV2ZW50ID0+ICgoJHNldHVwLm9wZW4pID0gJGV2ZW50KSksXG4gICAgICBfY2FjaGVbNl0gfHwgKF9jYWNoZVs2XSA9ICRldmVudCA9PiAoJGV2ZW50ID09PSBmYWxzZSAmJiAkc2V0dXAuY2xvc2VEaWFsb2coKSkpXG4gICAgXSxcbiAgICB0aXRsZTogJHNldHVwLmdldE1lc3NhZ2UoJ2RpYWxvZ1RpdGxlJyksXG4gICAgXCJ1c2UtY2xvc2UtYnV0dG9uXCI6IHRydWUsXG4gICAgXCJwcmltYXJ5LWFjdGlvblwiOiAkc2V0dXAucHJpbWFyeUFjdGlvbixcbiAgICBcImRlZmF1bHQtYWN0aW9uXCI6ICRzZXR1cC5kZWZhdWx0QWN0aW9uLFxuICAgIG9uUHJpbWFyeTogJHNldHVwLnN1Ym1pdERpYWxvZyxcbiAgICBvbkRlZmF1bHQ6ICRzZXR1cC5jbG9zZURpYWxvZ1xuICB9LCB7XG4gICAgZGVmYXVsdDogX3dpdGhDdHgoKCkgPT4gW1xuICAgICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcImRpdlwiLCBfaG9pc3RlZF8xLCBbXG4gICAgICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJkaXZcIiwgX2hvaXN0ZWRfMiwgW1xuICAgICAgICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJwXCIsIG51bGwsIF90b0Rpc3BsYXlTdHJpbmcoJHNldHVwLmdldE1lc3NhZ2UoJ2hpZGVJdGVtcycpKSwgMSAvKiBURVhUICovKSxcbiAgICAgICAgICBfY3JlYXRlVk5vZGUoJHNldHVwW1wiQ2R4RmllbGRcIl0sIG51bGwsIHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IF93aXRoQ3R4KCgpID0+IFtcbiAgICAgICAgICAgICAgX2NyZWF0ZVZOb2RlKCRzZXR1cFtcIkNkeENoZWNrYm94XCJdLCB7XG4gICAgICAgICAgICAgICAgbW9kZWxWYWx1ZTogJHNldHVwLmhpZGVDb250ZW50LFxuICAgICAgICAgICAgICAgIFwib25VcGRhdGU6bW9kZWxWYWx1ZVwiOiBfY2FjaGVbMF0gfHwgKF9jYWNoZVswXSA9ICRldmVudCA9PiAoKCRzZXR1cC5oaWRlQ29udGVudCkgPSAkZXZlbnQpKVxuICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDogX3dpdGhDdHgoKCkgPT4gW1xuICAgICAgICAgICAgICAgICAgX2NyZWF0ZVRleHRWTm9kZShfdG9EaXNwbGF5U3RyaW5nKCRzZXR1cC5pc1NwZWNpYWxMb2coKSA/ICRzZXR1cC5nZXRNZXNzYWdlKCdoaWRlTG9nJykgOiAkc2V0dXAuZ2V0TWVzc2FnZSgnaGlkZUNvbnRlbnQnKSksIDEgLyogVEVYVCAqLylcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBfOiAxIC8qIFNUQUJMRSAqL1xuICAgICAgICAgICAgICB9LCA4IC8qIFBST1BTICovLCBbXCJtb2RlbFZhbHVlXCJdKVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfOiAxIC8qIFNUQUJMRSAqL1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIF9jcmVhdGVWTm9kZSgkc2V0dXBbXCJDZHhGaWVsZFwiXSwgbnVsbCwge1xuICAgICAgICAgICAgZGVmYXVsdDogX3dpdGhDdHgoKCkgPT4gW1xuICAgICAgICAgICAgICBfY3JlYXRlVk5vZGUoJHNldHVwW1wiQ2R4Q2hlY2tib3hcIl0sIHtcbiAgICAgICAgICAgICAgICBtb2RlbFZhbHVlOiAkc2V0dXAuaGlkZVVzZXJuYW1lLFxuICAgICAgICAgICAgICAgIFwib25VcGRhdGU6bW9kZWxWYWx1ZVwiOiBfY2FjaGVbMV0gfHwgKF9jYWNoZVsxXSA9ICRldmVudCA9PiAoKCRzZXR1cC5oaWRlVXNlcm5hbWUpID0gJGV2ZW50KSlcbiAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IF93aXRoQ3R4KCgpID0+IFtcbiAgICAgICAgICAgICAgICAgIF9jcmVhdGVUZXh0Vk5vZGUoX3RvRGlzcGxheVN0cmluZygkc2V0dXAuZ2V0TWVzc2FnZSgnaGlkZVVzZXJuYW1lJykpLCAxIC8qIFRFWFQgKi8pXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgXzogMSAvKiBTVEFCTEUgKi9cbiAgICAgICAgICAgICAgfSwgOCAvKiBQUk9QUyAqLywgW1wibW9kZWxWYWx1ZVwiXSlcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgXzogMSAvKiBTVEFCTEUgKi9cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfY3JlYXRlVk5vZGUoJHNldHVwW1wiQ2R4RmllbGRcIl0sIG51bGwsIHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IF93aXRoQ3R4KCgpID0+IFtcbiAgICAgICAgICAgICAgX2NyZWF0ZVZOb2RlKCRzZXR1cFtcIkNkeENoZWNrYm94XCJdLCB7XG4gICAgICAgICAgICAgICAgbW9kZWxWYWx1ZTogJHNldHVwLmhpZGVTdW1tYXJ5LFxuICAgICAgICAgICAgICAgIFwib25VcGRhdGU6bW9kZWxWYWx1ZVwiOiBfY2FjaGVbMl0gfHwgKF9jYWNoZVsyXSA9ICRldmVudCA9PiAoKCRzZXR1cC5oaWRlU3VtbWFyeSkgPSAkZXZlbnQpKVxuICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDogX3dpdGhDdHgoKCkgPT4gW1xuICAgICAgICAgICAgICAgICAgX2NyZWF0ZVRleHRWTm9kZShfdG9EaXNwbGF5U3RyaW5nKCRzZXR1cC5nZXRNZXNzYWdlKCdoaWRlU3VtbWFyeScpKSwgMSAvKiBURVhUICovKVxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF86IDEgLyogU1RBQkxFICovXG4gICAgICAgICAgICAgIH0sIDggLyogUFJPUFMgKi8sIFtcIm1vZGVsVmFsdWVcIl0pXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF86IDEgLyogU1RBQkxFICovXG4gICAgICAgICAgfSlcbiAgICAgICAgXSksXG4gICAgICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJkaXZcIiwgX2hvaXN0ZWRfMywgW1xuICAgICAgICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJwXCIsIG51bGwsIF90b0Rpc3BsYXlTdHJpbmcoJHNldHVwLmdldE1lc3NhZ2UoJ2hpZGVSZWFzb24nKSksIDEgLyogVEVYVCAqLyksXG4gICAgICAgICAgX2NyZWF0ZVZOb2RlKCRzZXR1cFtcIkNkeEZpZWxkXCJdLCBudWxsLCB7XG4gICAgICAgICAgICBkZWZhdWx0OiBfd2l0aEN0eCgoKSA9PiBbXG4gICAgICAgICAgICAgIF9jcmVhdGVWTm9kZSgkc2V0dXBbXCJDZHhTZWxlY3RcIl0sIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RlZDogJHNldHVwLnJlYXNvbixcbiAgICAgICAgICAgICAgICBcIm9uVXBkYXRlOnNlbGVjdGVkXCI6IF9jYWNoZVszXSB8fCAoX2NhY2hlWzNdID0gJGV2ZW50ID0+ICgoJHNldHVwLnJlYXNvbikgPSAkZXZlbnQpKSxcbiAgICAgICAgICAgICAgICBcIm1lbnUtaXRlbXNcIjogJHNldHVwLnJlYXNvbkl0ZW1zXG4gICAgICAgICAgICAgIH0sIG51bGwsIDggLyogUFJPUFMgKi8sIFtcInNlbGVjdGVkXCIsIFwibWVudS1pdGVtc1wiXSlcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgXzogMSAvKiBTVEFCTEUgKi9cbiAgICAgICAgICB9KVxuICAgICAgICBdKSxcbiAgICAgICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcImRpdlwiLCBfaG9pc3RlZF80LCBbXG4gICAgICAgICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcInBcIiwgbnVsbCwgX3RvRGlzcGxheVN0cmluZygkc2V0dXAuZ2V0TWVzc2FnZSgnb3RoZXJSZWFzb25zJykpLCAxIC8qIFRFWFQgKi8pLFxuICAgICAgICAgIF9jcmVhdGVWTm9kZSgkc2V0dXBbXCJDZHhUZXh0QXJlYVwiXSwge1xuICAgICAgICAgICAgbW9kZWxWYWx1ZTogJHNldHVwLm90aGVyUmVhc29ucyxcbiAgICAgICAgICAgIFwib25VcGRhdGU6bW9kZWxWYWx1ZVwiOiBfY2FjaGVbNF0gfHwgKF9jYWNoZVs0XSA9ICRldmVudCA9PiAoKCRzZXR1cC5vdGhlclJlYXNvbnMpID0gJGV2ZW50KSksXG4gICAgICAgICAgICByb3dzOiBcIjRcIlxuICAgICAgICAgIH0sIG51bGwsIDggLyogUFJPUFMgKi8sIFtcIm1vZGVsVmFsdWVcIl0pXG4gICAgICAgIF0pXG4gICAgICBdKVxuICAgIF0pLFxuICAgIF86IDEgLyogU1RBQkxFICovXG4gIH0sIDggLyogUFJPUFMgKi8sIFtcIm9wZW5cIiwgXCJ0aXRsZVwiLCBcInByaW1hcnktYWN0aW9uXCIsIFwiZGVmYXVsdC1hY3Rpb25cIl0pKVxufSIsICJpbXBvcnQgc2NyaXB0IGZyb20gXCJEOlxcXFxHaXRSZXBvc2l0b3J5XFxcXFFpdXdlbkdhZGdldHNcXFxcc3JjXFxcXFJSRFxcXFxBcHAudnVlP3R5cGU9c2NyaXB0XCI7aW1wb3J0IFwiRDpcXFxcR2l0UmVwb3NpdG9yeVxcXFxRaXV3ZW5HYWRnZXRzXFxcXHNyY1xcXFxSUkRcXFxcQXBwLnZ1ZT90eXBlPXN0eWxlJmluZGV4PTBcIjtpbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwiRDpcXFxcR2l0UmVwb3NpdG9yeVxcXFxRaXV3ZW5HYWRnZXRzXFxcXHNyY1xcXFxSUkRcXFxcQXBwLnZ1ZT90eXBlPXRlbXBsYXRlXCI7IHNjcmlwdC5yZW5kZXIgPSByZW5kZXI7c2NyaXB0Ll9fZmlsZSA9IFwic3JjXFxcXFJSRFxcXFxBcHAudnVlXCI7ZXhwb3J0IGRlZmF1bHQgc2NyaXB0OyIsICJjb25zdCBsb2FkSWRzID0gKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHN0cmluZ1tdID0+IHtcblx0Y29uc3QgaWRzOiBzdHJpbmdbXSA9IFtdO1xuXG5cdGNvbnN0IGJveGVzOiBKUXVlcnk8SFRNTElucHV0RWxlbWVudD4gPSAkYm9keS5maW5kKCdpbnB1dCcpO1xuXHRmb3IgKGNvbnN0IGJveCBvZiBib3hlcykge1xuXHRcdGNvbnN0IHtjaGVja2VkLCBuYW1lLCB0eXBlfSA9IGJveDtcblxuXHRcdGlmICh0eXBlICE9PSAnY2hlY2tib3gnIHx8ICFjaGVja2VkKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRjb25zdCBpZFJlZ2V4OiBSZWdFeHAgPSAvaWRzXFxbKFxcZCspXS87XG5cdFx0Y29uc3QgaWRBcnJheTogUmVnRXhwRXhlY0FycmF5IHwgbnVsbCA9IGlkUmVnZXguZXhlYyhuYW1lKTtcblx0XHRpZiAoaWRBcnJheT8uWzFdID09PSB1bmRlZmluZWQpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdFssIGlkc1tpZHMubGVuZ3RoXV0gPSBpZEFycmF5O1xuXHR9XG5cblx0cmV0dXJuIGlkcztcbn07XG5cbmV4cG9ydCB7bG9hZElkc307XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0MsSUFBQUEsVUFBVztBQUNYLElBQUFDLFVBQVc7QUNBWixJQUFBQyxlQUF3QkMsUUFBQSxrQkFBQTtBQUN4QixJQUFBQyxjQUF1QkQsUUFBQSxLQUFBOztBQ0h2QixJQUFNRSxrQkFBa0JBLE1BQU07QUFDN0IsUUFBTTtJQUFDQztFQUFLLElBQUlDO0FBQ2hCLFNBQU87SUFDTkMsYUFBYUYsTUFDWiwyQ0FDQSx5Q0FDRDtJQUNBRyx1QkFBdUJILE1BQU0sZ0JBQWdCLGNBQWM7SUFDM0RJLG1CQUFtQkosTUFBTSxnQkFBZ0IsY0FBYztJQUN2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LEVBQUEsR0FBQSxFQUFBZ0gsU0FBQUQsV0FBQTlHLEVBQUEsR0FBQUMsUUFBeUQ7QUFBQSxjQUE5QytHLFVBQUFELE9BQUEzRztBQUNWLGNBQU02RyxnQkFBZ0JMLE9BQU8sTUFBTVosV0FBV2hCLEtBQUssQ0FBQztBQUNwRGdDLGdCQUFRRSxNQUFNRCxhQUFhO01BQzVCO0lBQUEsU0FBQTVHLEtBQUE7QUFBQXlHLGlCQUFBeEcsRUFBQUQsR0FBQTtJQUFBLFVBQUE7QUFBQXlHLGlCQUFBdkcsRUFBQTtJQUFBO0VBQ0Q7QUFDRCxDQUFDOyIsCiAgIm5hbWVzIjogWyJycmRQYWdlIiwgInZlcnNpb24iLCAiaW1wb3J0X2NvZGV4IiwgInJlcXVpcmUiLCAiaW1wb3J0X3Z1ZTIiLCAiZ2V0STE4bk1lc3NhZ2VzIiwgIndnVUxTIiwgIndpbmRvdyIsICJlZGl0U3VtbWFyeSIsICJlcnJOb1JldmlzaW9uUHJvdmlkZWQiLCAiZXJyTm9JdGVtUHJvdmlkZWQiLCAid2Fybk5vUmVhc29uUHJvdmlkZWQiLCAiaGlkZUl0ZW1zIiwgImhpZGVDb250ZW50IiwgImhpZGVMb2ciLCAiaGlkZVVzZXJuYW1lIiwgImhpZGVTdW1tYXJ5IiwgImhpZGVSZWFzb24iLCAiaGlkZVJlYXNvblJEMSIsICJoaWRlUmVhc29uUkQyIiwgImhpZGVSZWFzb25SRDMiLCAiaGlkZVJlYXNvblJENCIsICJoaWRlUmVhc29uUkQ1IiwgImhpZGVSZWFzb25PUzEiLCAiaGlkZVJlYXNvbk9TMiIsICJoaWRlUmVhc29uT1MzIiwgImhpZGVSZWFzb25PUzQiLCAiaGlkZVJlYXNvbk90aGVyIiwgIm90aGVyUmVhc29ucyIsICJkaWFsb2dUaXRsZSIsICJkaWFsb2dCdXR0b25TdWJtaXQiLCAiZGlhbG9nQnV0dG9uQ2FuY2VsIiwgInJlcG9ydEJ1dHRvblRpdGxlIiwgInJlcG9ydEJ1dHRvblRleHQiLCAicmVwb3J0QnV0dG9uTG9nVGV4dCIsICJpMThuTWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAiaXNTcGVjaWFsTG9nIiwgIndnQ2Fub25pY2FsU3BlY2lhbFBhZ2VOYW1lIiwgIm13IiwgImNvbmZpZyIsICJnZXQiLCAicHJvcHMiLCAiX19wcm9wcyIsICJidXR0b25MYWJlbCIsICJjb21wdXRlZCIsICJidXR0b25UaXRsZSIsICJpbXBvcnRfdnVlMyIsICJyZW5kZXIiLCAiX2N0eCIsICJfY2FjaGUiLCAiJHByb3BzIiwgIiRzZXR1cCIsICIkZGF0YSIsICIkb3B0aW9ucyIsICJvcGVuQmxvY2siLCAiY3JlYXRlQmxvY2siLCAiY2xhc3MiLCAid2VpZ2h0IiwgInR5cGUiLCAidGl0bGUiLCAib25DbGljayIsICJkZWZhdWx0IiwgIndpdGhDdHgiLCAiY3JlYXRlVGV4dFZOb2RlIiwgInRvRGlzcGxheVN0cmluZyIsICJfIiwgIlJlcG9ydEJ1dHRvbl9kZWZhdWx0IiwgIl9fZmlsZSIsICJSZXBvcnRCdXR0b25fZGVmYXVsdDIiLCAiaW1wb3J0X3Z1ZTgiLCAiaW1wb3J0X2V4dF9nYWRnZXQzIiwgImltcG9ydF92dWU3IiwgImltcG9ydF9jb2RleDIiLCAiY2hlY2tib3hlcyIsICJvdGhlcnMiLCAiYXBwbHlDb25maWciLCAiaW1wb3J0X3Z1ZTUiLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAiYXBpIiwgImluaXRNd0FwaSIsICJjb25jYXQiLCAiaW1wb3J0X2V4dF9nYWRnZXQyIiwgInF1ZXJ5UmV2aXNpb25zIiwgIl9yZWYiLCAiX2FzeW5jVG9HZW5lcmF0b3IiLCAidGl0bGVzIiwgInBhcmFtcyIsICJhY3Rpb24iLCAiZm9ybWF0IiwgImZvcm1hdHZlcnNpb24iLCAicHJvcCIsICJydnByb3AiLCAicnZzbG90cyIsICJyZXNwb25zZSIsICJfeCIsICJhcHBseSIsICJhcmd1bWVudHMiLCAiZWRpdCIsICJfcmVmMiIsICJ0ZXh0IiwgInN1bW1hcnkiLCAicG9zdFdpdGhFZGl0VG9rZW4iLCAiX3gyIiwgIl94MyIsICJfeDQiLCAic3VibWl0IiwgIl9yZWYzIiwgImlkcyIsICJ0b0hpZGUiLCAicmVhc29uIiwgIndnUGFnZU5hbWUiLCAiX2kiLCAiX2FyciIsICJsZW5ndGgiLCAiUkRpZCIsICJpbmNsdWRlcyIsICJfaTIiLCAiX2FycjIiLCAiT1NpZCIsICJycmRBcnIiLCAiX2l0ZXJhdG9yIiwgIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwgInVuaXF1ZUFycmF5IiwgImVudHJpZXMiLCAiX3N0ZXAiLCAicyIsICJuIiwgImRvbmUiLCAiaW5kZXgiLCAiaWQiLCAidmFsdWUiLCAiZXJyIiwgImUiLCAiZiIsICJfcmVzcG9uc2UkcXVlcnkiLCAiY29udGVudCIsICJwYWdlcyIsICJyZXZpc2lvbnMiLCAic2xvdHMiLCAibWFpbiIsICJub3RpZnkiLCAidGFnIiwgIl9yZXN1bHQkZWRpdCIsICJfcmVzdWx0JGVycm9yIiwgInJlc3VsdCIsICJqb2luIiwgImxvY2F0aW9uIiwgInJlcGxhY2UiLCAidXRpbCIsICJnZXRVcmwiLCAiY29kZSIsICJfeDUiLCAiX3g2IiwgIl94NyIsICJfeDgiLCAib3BlbiIsICJyZWYiLCAiQm9vbGVhbiIsICJycmRIaWRlQ29udGVudCIsICJycmRIaWRlVXNlcm5hbWUiLCAicnJkSGlkZVN1bW1hcnkiLCAiX2NvbmZpZyRvdGhlcnMkcnJkUmVhIiwgInJyZFJlYXNvbiIsICJfY29uZmlnJG90aGVycyRycmRPdGgiLCAicnJkT3RoZXJSZWFzb25zIiwgInJlYXNvbkl0ZW1zIiwgImxhYmVsIiwgInByaW1hcnlBY3Rpb24iLCAiYWN0aW9uVHlwZSIsICJkZWZhdWx0QWN0aW9uIiwgIndhdGNoIiwgIl9oaWRlQ29udGVudCR2YWx1ZSIsICJfaGlkZVVzZXJuYW1lJHZhbHVlIiwgIl9oaWRlU3VtbWFyeSR2YWx1ZSIsICJfcmVhc29uJHZhbHVlIiwgIl9vdGhlclJlYXNvbnMkdmFsdWUiLCAiZGVlcCIsICJzdWJtaXREaWFsb2ciLCAic2hvdWxkSGlkZUNvbnRlbnQiLCAic2hvdWxkSGlkZVVzZXJuYW1lIiwgInNob3VsZEhpZGVTdW1tYXJ5IiwgInB1c2giLCAiY29udCIsICJjb25maXJtIiwgIm9uQ2xvc2UiLCAiY2xvc2VEaWFsb2ciLCAiX2hpZGVDb250ZW50JHZhbHVlMiIsICJfaGlkZVVzZXJuYW1lJHZhbHVlMiIsICJfaGlkZVN1bW1hcnkkdmFsdWUyIiwgImltcG9ydF92dWU2IiwgIl9ob2lzdGVkXzEiLCAiX2hvaXN0ZWRfMiIsICJfaG9pc3RlZF8zIiwgIl9ob2lzdGVkXzQiLCAicmVuZGVyMiIsICIkZXZlbnQiLCAib25QcmltYXJ5IiwgIm9uRGVmYXVsdCIsICJjcmVhdGVFbGVtZW50Vk5vZGUiLCAiY3JlYXRlVk5vZGUiLCAibW9kZWxWYWx1ZSIsICJzZWxlY3RlZCIsICJyb3dzIiwgIkFwcF9kZWZhdWx0IiwgIkFwcF9kZWZhdWx0MiIsICJsb2FkSWRzIiwgIiRib2R5IiwgImJveGVzIiwgImZpbmQiLCAiX2l0ZXJhdG9yMiIsICJfc3RlcDIiLCAiYm94IiwgImNoZWNrZWQiLCAibmFtZSIsICJpZFJlZ2V4IiwgImlkQXJyYXkiLCAiZXhlYyIsICJhcHAiLCAicm9vdCIsICJkaXNwb3NlRGlhbG9nIiwgInVubW91bnQiLCAicmVtb3ZlIiwgInNob3dEaWFsb2ciLCAiZG9jdW1lbnQiLCAiY3JlYXRlRWxlbWVudCIsICJib2R5IiwgImFwcGVuZCIsICJjcmVhdGVBcHAiLCAibW91bnQiLCAiZ2V0Qm9keSIsICJ0aGVuIiwgInJyZCIsICJ3Z0FjdGlvbiIsICJDTEFTU19OQU1FUyIsICJidXR0b24iLCAicm9vdDIiLCAiX2l0ZXJhdG9yMyIsICJfc3RlcDMiLCAiZWxlbWVudCIsICJhcHBlbmRFbGVtZW50IiwgImFmdGVyIl0KfQo=

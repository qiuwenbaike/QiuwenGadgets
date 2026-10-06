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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1JSRC9vcHRpb25zLmpzb24iLCAiZGlzdC9SUkQvc3JjL1JSRC9tb2R1bGVzL1JlcG9ydEJ1dHRvbi52dWUiLCAic3JjL1JSRC9tb2R1bGVzL2kxOG4udHMiLCAic3JjL1JSRC9tb2R1bGVzL2lzU3BlY2lhbExvZy50cyIsICJzZmMtdGVtcGxhdGU6RTpcXENvZGVzXFxRaXV3ZW5cXFFpdXdlbkdhZGdldHNcXHNyY1xcUlJEXFxtb2R1bGVzXFxSZXBvcnRCdXR0b24udnVlP3R5cGU9dGVtcGxhdGUiLCAic3JjL1JSRC9tb2R1bGVzL1JlcG9ydEJ1dHRvbi52dWUiLCAic3JjL1JSRC9SUkQudHMiLCAic3JjL1JSRC9tb2R1bGVzL3Nob3dEaWFsb2cudHMiLCAiZGlzdC9SUkQvc3JjL1JSRC9BcHAudnVlIiwgInNyYy9SUkQvbW9kdWxlcy9ycmRDb25maWcudHMiLCAic3JjL1JSRC9tb2R1bGVzL2FwaS50cyIsICJzcmMvUlJEL21vZHVsZXMvc3VibWl0LnRzIiwgInNmYy10ZW1wbGF0ZTpFOlxcQ29kZXNcXFFpdXdlblxcUWl1d2VuR2FkZ2V0c1xcc3JjXFxSUkRcXEFwcC52dWU/dHlwZT10ZW1wbGF0ZSIsICJzcmMvUlJEL0FwcC52dWUiLCAic3JjL1JSRC9tb2R1bGVzL2xvYWRJZHMudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIntcblx0XCJycmRQYWdlXCI6IFwiUWl1d2VuX3RhbGs654mI5pys5Yig6Zmk5o+Q5oqlXCIsXG5cdFwidmVyc2lvblwiOiBcIjIuMFwiXG59XG4iLCAiPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cbmltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7Q2R4QnV0dG9ufSBmcm9tICdAd2lraW1lZGlhL2NvZGV4JztcbmltcG9ydCB7Y29tcHV0ZWR9IGZyb20gJ3Z1ZSc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vaTE4bic7XG5pbXBvcnQge2lzU3BlY2lhbExvZ30gZnJvbSAnLi9pc1NwZWNpYWxMb2cnO1xuXG5jb25zdCBwcm9wcyA9IGRlZmluZVByb3BzPHtcblx0b25DbGljazogKCkgPT4gdm9pZDtcbn0+KCk7XG5cbmNvbnN0IGJ1dHRvbkxhYmVsID0gY29tcHV0ZWQoKCkgPT5cblx0aXNTcGVjaWFsTG9nKCkgPyBnZXRNZXNzYWdlKCdyZXBvcnRCdXR0b25Mb2dUZXh0JykgOiBnZXRNZXNzYWdlKCdyZXBvcnRCdXR0b25UZXh0Jylcbik7XG5jb25zdCBidXR0b25UaXRsZSA9IGNvbXB1dGVkKCgpID0+IGdldE1lc3NhZ2UoJ3JlcG9ydEJ1dHRvblRpdGxlJykgKyBPUFRJT05TLnJyZFBhZ2UpO1xuPC9zY3JpcHQ+XG5cbjx0ZW1wbGF0ZT5cblx0PGNkeC1idXR0b25cblx0XHRjbGFzcz1cInJyZF9fcmVwb3J0XCJcblx0XHR3ZWlnaHQ9XCJwcmltYXJ5XCJcblx0XHQ6dHlwZT1cIididXR0b24nXCJcblx0XHQ6YXJpYS1sYWJlbD1cImJ1dHRvblRpdGxlXCJcblx0XHQ6dGl0bGU9XCJidXR0b25UaXRsZVwiXG5cdFx0QGNsaWNrPVwicHJvcHMub25DbGlja1wiXG5cdD5cblx0XHR7eyBidXR0b25MYWJlbCB9fVxuXHQ8L2NkeC1idXR0b24+XG48L3RlbXBsYXRlPlxuIiwgImNvbnN0IGdldEkxOG5NZXNzYWdlcyA9ICgpID0+IHtcblx0Y29uc3Qge3dnVUxTfSA9IHdpbmRvdztcblx0cmV0dXJuIHtcblx0XHRlZGl0U3VtbWFyeTogd2dVTFMoXG5cdFx0XHQnW1tNZWRpYVdpa2k6R2FkZ2V0LVJSRC5qc3zljYroh6rliqjmj5DmiqVdXeS/ruiuoueJiOacrOWIoOmZpCcsXG5cdFx0XHQnW1tNZWRpYVdpa2k6R2FkZ2V0LVJSRC5qc3zljYroh6rli5Xmj5DloLFdXeS/ruiogueJiOacrOWIqumZpCdcblx0XHQpLFxuXHRcdGVyck5vUmV2aXNpb25Qcm92aWRlZDogd2dVTFMoJ+aCqOayoeaciemAieaLqemcgOmakOiXj+eahOeJiOacrO+8gScsICfmgqjmspLmnInpgbjmk4fpnIDpmrHol4/nmoTniYjmnKzvvIEnKSxcblx0XHRlcnJOb0l0ZW1Qcm92aWRlZDogd2dVTFMoJ+aCqOayoeaciemAieaLqemcgOmakOiXj+eahOmhueebru+8gScsICfmgqjmspLmnInpgbjmk4fpnIDpmrHol4/nmoTpoIXnm67vvIEnKSxcblx0XHR3YXJuTm9SZWFzb25Qcm92aWRlZDogd2dVTFMoJ+aCqOayoeaciei+k+WFpeS7u+S9leeQhueUse+8geehruWumuimgee7p+e7reWQl++8nycsICfmgqjmspLmnInovLjlhaXku7vkvZXnkIbnlLHvvIHnorrlrpropoHnubznuozll47vvJ8nKSxcblx0XHRoaWRlSXRlbXM6IHdnVUxTKCfpnIDpmpDol4/nmoTpobnnm67vvJonLCAn6ZyA6Zqx6JeP55qE6aCF55uu77yaJyksXG5cdFx0aGlkZUNvbnRlbnQ6IHdnVUxTKCfnvJbovpHlhoXlrrknLCAn57eo6Lyv5YWn5a65JyksXG5cdFx0aGlkZUxvZzogd2dVTFMoJ+aXpeW/l+ebruagh+S4juWPguaVsCcsICfml6Xoqoznm67mqJnoiIflj4PmlbgnKSxcblx0XHRoaWRlVXNlcm5hbWU6IHdnVUxTKCfnvJbovpHogIXnlKjmiLflkI0nLCAn57eo6Lyv6ICF55So5oi25ZCNJyksXG5cdFx0aGlkZVN1bW1hcnk6IHdnVUxTKCfnvJbovpHmkZjopoEnLCAn57eo6Lyv5pGY6KaBJyksXG5cdFx0aGlkZVJlYXNvbjogd2dVTFMoJ+eQhuaNru+8micsICfnkIbmk5rvvJonKSxcblx0XHRoaWRlUmVhc29uUkQxOiB3Z1VMUygnUkQx77ya5p2h55uu5Lit5piO5pi+5L6154qv6JGX5L2c5p2D55qE5YaF5a65JywgJ1JEMe+8muaineebruS4reaYjumhr+S+teeKr+iRl+S9nOasiueahOWFp+WuuScpLFxuXHRcdGhpZGVSZWFzb25SRDI6IHdnVUxTKCdSRDLvvJrkuKXph43kvq7ovrHjgIHotKzkvY7miJbmlLvlh7vmgKfmlofmnKwnLCAnUkQy77ya5Zq06YeN5L6u6L6x44CB6LK25L2O5oiW5pS75pOK5oCn5paH5pysJyksXG5cdFx0aGlkZVJlYXNvblJEMzogd2dVTFMoJ1JEM++8mue6r+eyueaJsOS5seaAp+WGheWuuScsICfntJTnsrnmk77kuoLmgKflhaflrrknKSxcblx0XHRoaWRlUmVhc29uUkQ0OiB3Z1VMUygnUkQ077ya5piO5pi+6L+d5Y+N5rOV5b6L5rOV6KeE5oiW6L+d6IOM5YWs5bqP6Imv5L+X55qE5YaF5a65JywgJ1JENO+8muaYjumhr+mBleWPjeazleW+i+azleimj+aIlumBleiDjOWFrOW6j+iJr+S/l+eahOWFp+WuuScpLFxuXHRcdGhpZGVSZWFzb25SRDU6IHdnVUxTKCdSRDXvvJrlhbbku5bkuI3lrpzlhazlvIDnmoTniYjmnKzlhoXlrrknLCAnUkQ177ya5YW25LuW5LiN5a6c5YWs6ZaL55qE54mI5pys5YWn5a65JyksXG5cdFx0aGlkZVJlYXNvbk9TMTogd2dVTFMoJ09TMe+8muacquWFrOW8gOeahOS4quS6uui1hOaWmScsICdPUzHvvJrmnKrlhazplovnmoTlgIvkurros4fmlpknKSxcblx0XHRoaWRlUmVhc29uT1MyOiB3Z1VMUygnT1My77ya5Y+v6IO95b2x5ZON55m+56eR6L+Q5L2c55qE5YaF5a65JywgJ09TMu+8muWPr+iDveW9semfv+eZvuenkemBi+S9nOeahOWFp+WuuScpLFxuXHRcdGhpZGVSZWFzb25PUzM6IHdnVUxTKCdPUzPvvJrnoLTlnY/mgKfjgIHmibDkubHmgKfnlKjmiLflkI0nLCAnT1Mz77ya56C05aOe5oCn44CB5pO+5LqC5oCn55So5oi25ZCNJyksXG5cdFx0aGlkZVJlYXNvbk9TNDogd2dVTFMoXG5cdFx0XHQnT1M077ya5Y6f6aG16Z2i5YaF5a655p2l6Ieq5aSW6YOo5p2l5rqQ44CB5LiN56ym5ZCI5rGC6Ze755m+56eR5pa56ZKI77yM5L2G57uP6L+H5pS55YaZ5ZCO77yM5bey56ym5ZCI5rGC6Ze755m+56eR5pa56ZKI55qE6aG16Z2iJyxcblx0XHRcdCdPUzTvvJrljp/poIHpnaLlhaflrrnkvoboh6rlpJbpg6jkvobmupDjgIHkuI3nrKblkIjmsYLogZ7nmb7np5Hmlrnph53vvIzkvYbntpPpgY7opoblr6vlvozvvIzlt7LnrKblkIjmsYLogZ7nmb7np5Hmlrnph53nmoTpoIHpnaInXG5cdFx0KSxcblx0XHRoaWRlUmVhc29uT3RoZXI6IHdnVUxTKCfku4Xkvb/nlKjkuIvmlrnnmoTpmYTliqDnkIbnlLEnLCAn5YOF5L2/55So5LiL5pa555qE6ZmE5Yqg55CG55SxJyksXG5cdFx0b3RoZXJSZWFzb25zOiB3Z1VMUygn6ZmE5Yqg55CG55Sx77yI5Y+v6YCJ77yM5LiN55So562+5ZCN77yJJywgJ+mZhOWKoOeQhueUse+8iOWPr+mBuO+8jOS4jeeUqOewveWQje+8iScpLFxuXHRcdGRpYWxvZ1RpdGxlOiB3Z1VMUygn5o+Q5oql5L+u6K6i54mI5pys5Yig6ZmkJywgJ+aPkOWgseS/ruiogueJiOacrOWIqumZpCcpLFxuXHRcdGRpYWxvZ0J1dHRvblN1Ym1pdDogd2dVTFMoJ+aPkOaKpScsICfmj5DloLEnKSxcblx0XHRkaWFsb2dCdXR0b25DYW5jZWw6IHdnVUxTKCflj5bmtognLCAn5Y+W5raIJyksXG5cdFx0cmVwb3J0QnV0dG9uVGl0bGU6IHdnVUxTKCflsIbpgInkuK3nmoTniYjmnKzmj5DmiqXliLAnLCAn5bCH6YG45Lit55qE54mI5pys5o+Q5aCx5YiwJyksXG5cdFx0cmVwb3J0QnV0dG9uVGV4dDogd2dVTFMoJ+ivt+axguWIoOmZpOiiq+mAieeJiOacrCcsICfoq4vmsYLliKrpmaTooqvpgbjniYjmnKwnKSxcblx0XHRyZXBvcnRCdXR0b25Mb2dUZXh0OiB3Z1VMUygn6K+35rGC5Yig6Zmk6KKr6YCJ5pel5b+XJywgJ+iri+axguWIqumZpOiiq+mBuOaXpeiqjCcpLFxuXHR9O1xufTtcblxuY29uc3QgaTE4bk1lc3NhZ2VzID0gZ2V0STE4bk1lc3NhZ2VzKCk7XG5cbmNvbnN0IGdldE1lc3NhZ2U6IEdldE1lc3NhZ2VzPHR5cGVvZiBpMThuTWVzc2FnZXM+ID0gKGtleSkgPT4ge1xuXHRyZXR1cm4gaTE4bk1lc3NhZ2VzW2tleV0gfHwga2V5O1xufTtcblxuZXhwb3J0IHtnZXRNZXNzYWdlfTtcbiIsICJjb25zdCBpc1NwZWNpYWxMb2cgPSAoKSA9PiB7XG5cdGNvbnN0IHt3Z0Nhbm9uaWNhbFNwZWNpYWxQYWdlTmFtZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cdHJldHVybiB3Z0Nhbm9uaWNhbFNwZWNpYWxQYWdlTmFtZSA9PT0gJ0xvZyc7XG59O1xuXG5leHBvcnQge2lzU3BlY2lhbExvZ307XG4iLCAiaW1wb3J0IHsgdG9EaXNwbGF5U3RyaW5nIGFzIF90b0Rpc3BsYXlTdHJpbmcsIGNyZWF0ZVRleHRWTm9kZSBhcyBfY3JlYXRlVGV4dFZOb2RlLCB3aXRoQ3R4IGFzIF93aXRoQ3R4LCBvcGVuQmxvY2sgYXMgX29wZW5CbG9jaywgY3JlYXRlQmxvY2sgYXMgX2NyZWF0ZUJsb2NrIH0gZnJvbSBcInZ1ZVwiXG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXIoX2N0eCwgX2NhY2hlLCAkcHJvcHMsICRzZXR1cCwgJGRhdGEsICRvcHRpb25zKSB7XG4gIHJldHVybiAoX29wZW5CbG9jaygpLCBfY3JlYXRlQmxvY2soJHNldHVwW1wiQ2R4QnV0dG9uXCJdLCB7XG4gICAgY2xhc3M6IFwicnJkX19yZXBvcnRcIixcbiAgICB3ZWlnaHQ6IFwicHJpbWFyeVwiLFxuICAgIHR5cGU6ICdidXR0b24nLFxuICAgIFwiYXJpYS1sYWJlbFwiOiAkc2V0dXAuYnV0dG9uVGl0bGUsXG4gICAgdGl0bGU6ICRzZXR1cC5idXR0b25UaXRsZSxcbiAgICBvbkNsaWNrOiAkc2V0dXAucHJvcHMub25DbGlja1xuICB9LCB7XG4gICAgZGVmYXVsdDogX3dpdGhDdHgoKCkgPT4gW1xuICAgICAgX2NyZWF0ZVRleHRWTm9kZShfdG9EaXNwbGF5U3RyaW5nKCRzZXR1cC5idXR0b25MYWJlbCksIDEgLyogVEVYVCAqLylcbiAgICBdKSxcbiAgICBfOiAxIC8qIFNUQUJMRSAqL1xuICB9LCA4IC8qIFBST1BTICovLCBbXCJhcmlhLWxhYmVsXCIsIFwidGl0bGVcIiwgXCJvbkNsaWNrXCJdKSlcbn0iLCAiaW1wb3J0IHNjcmlwdCBmcm9tIFwiRTpcXFxcQ29kZXNcXFxcUWl1d2VuXFxcXFFpdXdlbkdhZGdldHNcXFxcc3JjXFxcXFJSRFxcXFxtb2R1bGVzXFxcXFJlcG9ydEJ1dHRvbi52dWU/dHlwZT1zY3JpcHRcIjtpbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwiRTpcXFxcQ29kZXNcXFxcUWl1d2VuXFxcXFFpdXdlbkdhZGdldHNcXFxcc3JjXFxcXFJSRFxcXFxtb2R1bGVzXFxcXFJlcG9ydEJ1dHRvbi52dWU/dHlwZT10ZW1wbGF0ZVwiOyBzY3JpcHQucmVuZGVyID0gcmVuZGVyO3NjcmlwdC5fX2ZpbGUgPSBcInNyY1xcXFxSUkRcXFxcbW9kdWxlc1xcXFxSZXBvcnRCdXR0b24udnVlXCI7ZXhwb3J0IGRlZmF1bHQgc2NyaXB0OyIsICJpbXBvcnQgUmVwb3J0QnV0dG9uIGZyb20gJy4vbW9kdWxlcy9SZXBvcnRCdXR0b24udnVlJztcbmltcG9ydCB7Y3JlYXRlQXBwfSBmcm9tICd2dWUnO1xuaW1wb3J0IHtnZXRCb2R5fSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuaW1wb3J0IHtzaG93RGlhbG9nfSBmcm9tICcuL21vZHVsZXMvc2hvd0RpYWxvZyc7XG5cbnZvaWQgZ2V0Qm9keSgpLnRoZW4oZnVuY3Rpb24gcnJkKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQge1xuXHRjb25zdCB7d2dBY3Rpb24sIHdnQ2Fub25pY2FsU3BlY2lhbFBhZ2VOYW1lfSA9IG13LmNvbmZpZy5nZXQoKTtcblxuXHRpZiAod2dBY3Rpb24gPT09ICdoaXN0b3J5JyB8fCB3Z0Nhbm9uaWNhbFNwZWNpYWxQYWdlTmFtZSA9PT0gJ0xvZycpIHtcblx0XHRjb25zdCBDTEFTU19OQU1FUyA9IFtcblx0XHRcdCcuaGlzdG9yeXN1Ym1pdC5tdy1oaXN0b3J5LWNvbXBhcmVzZWxlY3RlZHZlcnNpb25zLWJ1dHRvbicsXG5cdFx0XHQnLmVkaXRjaGFuZ2V0YWdzLWxvZy1zdWJtaXQubXctbG9nLWVkaXRjaGFuZ2V0YWdzLWJ1dHRvbicsXG5cdFx0XTtcblx0XHRjb25zdCBidXR0b24gPSAob25DbGljazogKCkgPT4gdm9pZCk6IEhUTUxTcGFuRWxlbWVudCA9PiB7XG5cdFx0XHRjb25zdCByb290ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuXHRcdFx0Y3JlYXRlQXBwKFJlcG9ydEJ1dHRvbiwge29uQ2xpY2t9KS5tb3VudChyb290KTtcblx0XHRcdHJldHVybiByb290O1xuXHRcdH07XG5cblx0XHRmb3IgKGNvbnN0IGVsZW1lbnQgb2YgJGJvZHkuZmluZChDTEFTU19OQU1FUy5qb2luKCcsJykpKSB7XG5cdFx0XHRjb25zdCBhcHBlbmRFbGVtZW50ID0gYnV0dG9uKCgpID0+IHNob3dEaWFsb2coJGJvZHkpKTtcblx0XHRcdGVsZW1lbnQuYWZ0ZXIoYXBwZW5kRWxlbWVudCk7XG5cdFx0fVxuXHR9XG59KTtcbiIsICJpbXBvcnQge3R5cGUgQXBwIGFzIFZ1ZUFwcCwgY3JlYXRlQXBwfSBmcm9tICd2dWUnO1xuaW1wb3J0IEFwcCBmcm9tICcuLi9BcHAudnVlJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9pMThuJztcbmltcG9ydCB7bG9hZElkc30gZnJvbSAnLi9sb2FkSWRzJztcblxubGV0IGFwcDogVnVlQXBwPEVsZW1lbnQ+IHwgdW5kZWZpbmVkO1xubGV0IHJvb3Q6IEhUTUxEaXZFbGVtZW50IHwgdW5kZWZpbmVkO1xuXG5jb25zdCBkaXNwb3NlRGlhbG9nID0gKCk6IHZvaWQgPT4ge1xuXHRpZiAoYXBwKSB7XG5cdFx0YXBwLnVubW91bnQoKTtcblx0XHRhcHAgPSB1bmRlZmluZWQ7XG5cdH1cblx0aWYgKHJvb3QpIHtcblx0XHRyb290LnJlbW92ZSgpO1xuXHRcdHJvb3QgPSB1bmRlZmluZWQ7XG5cdH1cbn07XG5cbmNvbnN0IHNob3dEaWFsb2cgPSAoJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KTogdm9pZCA9PiB7XG5cdGNvbnN0IGlkczogc3RyaW5nW10gPSBsb2FkSWRzKCRib2R5KTtcblx0aWYgKCFpZHMubGVuZ3RoKSB7XG5cdFx0dm9pZCBtdy5ub3RpZnkoZ2V0TWVzc2FnZSgnZXJyTm9SZXZpc2lvblByb3ZpZGVkJyksIHtcblx0XHRcdHRhZzogJ1JSRCcsXG5cdFx0XHR0eXBlOiAnZXJyb3InLFxuXHRcdH0pO1xuXG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0ZGlzcG9zZURpYWxvZygpO1xuXHRyb290ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdGRvY3VtZW50LmJvZHkuYXBwZW5kKHJvb3QpO1xuXHRhcHAgPSBjcmVhdGVBcHAoQXBwLCB7XG5cdFx0aWRzLFxuXHRcdG9uQ2xvc2U6IGRpc3Bvc2VEaWFsb2csXG5cdH0pO1xuXHRhcHAubW91bnQocm9vdCk7XG59O1xuXG5leHBvcnQge3Nob3dEaWFsb2d9O1xuIiwgIjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG5pbXBvcnQge0NkeENoZWNrYm94LCBDZHhEaWFsb2csIENkeEZpZWxkLCBDZHhTZWxlY3QsIENkeFRleHRBcmVhfSBmcm9tICdAd2lraW1lZGlhL2NvZGV4JztcbmltcG9ydCB7YXBwbHlDb25maWcsIGNvbmZpZ30gZnJvbSAnLi9tb2R1bGVzL3JyZENvbmZpZyc7XG5pbXBvcnQge2NvbXB1dGVkLCByZWYsIHdhdGNofSBmcm9tICd2dWUnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL21vZHVsZXMvaTE4bic7XG5pbXBvcnQge2lzU3BlY2lhbExvZ30gZnJvbSAnLi9tb2R1bGVzL2lzU3BlY2lhbExvZyc7XG5pbXBvcnQge3N1Ym1pdH0gZnJvbSAnLi9tb2R1bGVzL3N1Ym1pdCc7XG5cbmNvbnN0IHByb3BzID0gZGVmaW5lUHJvcHM8e1xuXHRpZHM6IHN0cmluZ1tdO1xuXHRvbkNsb3NlOiAoKSA9PiB2b2lkO1xufT4oKTtcblxuY29uc3Qgb3BlbiA9IHJlZih0cnVlKTtcbmNvbnN0IGhpZGVDb250ZW50ID0gcmVmKEJvb2xlYW4oY29uZmlnLmNoZWNrYm94ZXMucnJkSGlkZUNvbnRlbnQpKTtcbmNvbnN0IGhpZGVVc2VybmFtZSA9IHJlZihCb29sZWFuKGNvbmZpZy5jaGVja2JveGVzLnJyZEhpZGVVc2VybmFtZSkpO1xuY29uc3QgaGlkZVN1bW1hcnkgPSByZWYoQm9vbGVhbihjb25maWcuY2hlY2tib3hlcy5ycmRIaWRlU3VtbWFyeSkpO1xuY29uc3QgcmVhc29uID0gcmVmKGNvbmZpZy5vdGhlcnMucnJkUmVhc29uID8/ICcnKTtcbmNvbnN0IG90aGVyUmVhc29ucyA9IHJlZihjb25maWcub3RoZXJzLnJyZE90aGVyUmVhc29ucyA/PyAnJyk7XG5cbmNvbnN0IHJlYXNvbkl0ZW1zID0gY29tcHV0ZWQoKCkgPT4gW1xuXHR7dmFsdWU6IGdldE1lc3NhZ2UoJ2hpZGVSZWFzb25SRDEnKSwgbGFiZWw6IGdldE1lc3NhZ2UoJ2hpZGVSZWFzb25SRDEnKX0sXG5cdHt2YWx1ZTogZ2V0TWVzc2FnZSgnaGlkZVJlYXNvblJEMicpLCBsYWJlbDogZ2V0TWVzc2FnZSgnaGlkZVJlYXNvblJEMicpfSxcblx0e3ZhbHVlOiBnZXRNZXNzYWdlKCdoaWRlUmVhc29uUkQzJyksIGxhYmVsOiBnZXRNZXNzYWdlKCdoaWRlUmVhc29uUkQzJyl9LFxuXHR7dmFsdWU6IGdldE1lc3NhZ2UoJ2hpZGVSZWFzb25SRDQnKSwgbGFiZWw6IGdldE1lc3NhZ2UoJ2hpZGVSZWFzb25SRDQnKX0sXG5cdHt2YWx1ZTogZ2V0TWVzc2FnZSgnaGlkZVJlYXNvblJENScpLCBsYWJlbDogZ2V0TWVzc2FnZSgnaGlkZVJlYXNvblJENScpfSxcblx0e3ZhbHVlOiBnZXRNZXNzYWdlKCdoaWRlUmVhc29uT1MxJyksIGxhYmVsOiBnZXRNZXNzYWdlKCdoaWRlUmVhc29uT1MxJyl9LFxuXHR7dmFsdWU6IGdldE1lc3NhZ2UoJ2hpZGVSZWFzb25PUzInKSwgbGFiZWw6IGdldE1lc3NhZ2UoJ2hpZGVSZWFzb25PUzInKX0sXG5cdHt2YWx1ZTogZ2V0TWVzc2FnZSgnaGlkZVJlYXNvbk9TMycpLCBsYWJlbDogZ2V0TWVzc2FnZSgnaGlkZVJlYXNvbk9TMycpfSxcblx0e3ZhbHVlOiBnZXRNZXNzYWdlKCdoaWRlUmVhc29uT1M0JyksIGxhYmVsOiBnZXRNZXNzYWdlKCdoaWRlUmVhc29uT1M0Jyl9LFxuXHR7dmFsdWU6ICcnLCBsYWJlbDogZ2V0TWVzc2FnZSgnaGlkZVJlYXNvbk90aGVyJyl9LFxuXSk7XG5cbmNvbnN0IHByaW1hcnlBY3Rpb24gPSBjb21wdXRlZCgoKSA9PiAoe1xuXHRsYWJlbDogZ2V0TWVzc2FnZSgnZGlhbG9nQnV0dG9uU3VibWl0JyksXG5cdGFjdGlvblR5cGU6ICdwcm9ncmVzc2l2ZScgYXMgY29uc3QsXG59KSk7XG5cbmNvbnN0IGRlZmF1bHRBY3Rpb24gPSBjb21wdXRlZCgoKSA9PiAoe1xuXHRsYWJlbDogZ2V0TWVzc2FnZSgnZGlhbG9nQnV0dG9uQ2FuY2VsJyksXG59KSk7XG5cbndhdGNoKFxuXHQoKSA9PiBbaGlkZUNvbnRlbnQudmFsdWUsIGhpZGVVc2VybmFtZS52YWx1ZSwgaGlkZVN1bW1hcnkudmFsdWUsIHJlYXNvbi52YWx1ZSwgb3RoZXJSZWFzb25zLnZhbHVlXSxcblx0KCkgPT4ge1xuXHRcdGFwcGx5Q29uZmlnKFxuXHRcdFx0e1xuXHRcdFx0XHRycmRIaWRlQ29udGVudDogaGlkZUNvbnRlbnQudmFsdWUgPz8gZmFsc2UsXG5cdFx0XHRcdHJyZEhpZGVVc2VybmFtZTogaGlkZVVzZXJuYW1lLnZhbHVlID8/IGZhbHNlLFxuXHRcdFx0XHRycmRIaWRlU3VtbWFyeTogaGlkZVN1bW1hcnkudmFsdWUgPz8gZmFsc2UsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRycmRSZWFzb246IHJlYXNvbi52YWx1ZSA/PyAnJyxcblx0XHRcdFx0cnJkT3RoZXJSZWFzb25zOiBvdGhlclJlYXNvbnMudmFsdWUgPz8gJycsXG5cdFx0XHR9XG5cdFx0KTtcblx0fSxcblx0e2RlZXA6IHRydWV9XG4pO1xuXG5jb25zdCBzdWJtaXREaWFsb2cgPSAoKTogdm9pZCA9PiB7XG5cdGNvbnN0IHNob3VsZEhpZGVDb250ZW50ID0gaGlkZUNvbnRlbnQudmFsdWU7XG5cdGNvbnN0IHNob3VsZEhpZGVVc2VybmFtZSA9IGhpZGVVc2VybmFtZS52YWx1ZTtcblx0Y29uc3Qgc2hvdWxkSGlkZVN1bW1hcnkgPSBoaWRlU3VtbWFyeS52YWx1ZTtcblx0Y29uc3QgcnJkUmVhc29uID0gcmVhc29uLnZhbHVlIHx8IHVuZGVmaW5lZDtcblx0bGV0IHJyZE90aGVyUmVhc29ucyA9IG90aGVyUmVhc29ucy52YWx1ZSB8fCB1bmRlZmluZWQ7XG5cblx0aWYgKHJyZE90aGVyUmVhc29ucyAmJiBycmRSZWFzb24pIHtcblx0XHRycmRPdGhlclJlYXNvbnMgPSBg77yMJHtycmRPdGhlclJlYXNvbnN9YDtcblx0fVxuXG5cdGNvbnN0IHRvSGlkZTogc3RyaW5nW10gPSBbXTtcblx0aWYgKHNob3VsZEhpZGVDb250ZW50KSB7XG5cdFx0dG9IaWRlLnB1c2goaXNTcGVjaWFsTG9nKCkgPyBnZXRNZXNzYWdlKCdoaWRlTG9nJykgOiBnZXRNZXNzYWdlKCdoaWRlQ29udGVudCcpKTtcblx0fVxuXHRpZiAoc2hvdWxkSGlkZVVzZXJuYW1lKSB7XG5cdFx0dG9IaWRlLnB1c2goZ2V0TWVzc2FnZSgnaGlkZVVzZXJuYW1lJykpO1xuXHR9XG5cdGlmIChzaG91bGRIaWRlU3VtbWFyeSkge1xuXHRcdHRvSGlkZS5wdXNoKGdldE1lc3NhZ2UoJ2hpZGVTdW1tYXJ5JykpO1xuXHR9XG5cblx0aWYgKCF0b0hpZGUubGVuZ3RoKSB7XG5cdFx0dm9pZCBtdy5ub3RpZnkoZ2V0TWVzc2FnZSgnZXJyTm9JdGVtUHJvdmlkZWQnKSwge1xuXHRcdFx0dGFnOiAnUlJEJyxcblx0XHRcdHR5cGU6ICdlcnJvcicsXG5cdFx0fSk7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0bGV0IGNvbnQgPSB0cnVlO1xuXHRpZiAoIXJyZFJlYXNvbiAmJiAhcnJkT3RoZXJSZWFzb25zKSB7XG5cdFx0Y29udCA9IGNvbmZpcm0oZ2V0TWVzc2FnZSgnd2Fybk5vUmVhc29uUHJvdmlkZWQnKSk7XG5cdH1cblxuXHRpZiAoY29udCkge1xuXHRcdG9wZW4udmFsdWUgPSBmYWxzZTtcblx0XHR2b2lkIHN1Ym1pdChwcm9wcy5pZHMsIHRvSGlkZS5qb2luKCfjgIEnKSwgcnJkUmVhc29uID8/ICcnLCBycmRPdGhlclJlYXNvbnMgPz8gJycpO1xuXHRcdHByb3BzLm9uQ2xvc2UoKTtcblx0fVxufTtcblxuY29uc3QgY2xvc2VEaWFsb2cgPSAoKTogdm9pZCA9PiB7XG5cdG9wZW4udmFsdWUgPSBmYWxzZTtcblx0YXBwbHlDb25maWcoXG5cdFx0e1xuXHRcdFx0cnJkSGlkZUNvbnRlbnQ6IGhpZGVDb250ZW50LnZhbHVlID8/IGZhbHNlLFxuXHRcdFx0cnJkSGlkZVVzZXJuYW1lOiBoaWRlVXNlcm5hbWUudmFsdWUgPz8gZmFsc2UsXG5cdFx0XHRycmRIaWRlU3VtbWFyeTogaGlkZVN1bW1hcnkudmFsdWUgPz8gZmFsc2UsXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRycmRSZWFzb246IHJlYXNvbi52YWx1ZSB8fCAnJyxcblx0XHRcdHJyZE90aGVyUmVhc29uczogb3RoZXJSZWFzb25zLnZhbHVlIHx8ICcnLFxuXHRcdH1cblx0KTtcblx0cHJvcHMub25DbG9zZSgpO1xufTtcbjwvc2NyaXB0PlxuXG48dGVtcGxhdGU+XG5cdDxjZHgtZGlhbG9nXG5cdFx0di1tb2RlbDpvcGVuPVwib3BlblwiXG5cdFx0OnRpdGxlPVwiZ2V0TWVzc2FnZSgnZGlhbG9nVGl0bGUnKVwiXG5cdFx0OnVzZS1jbG9zZS1idXR0b249XCJ0cnVlXCJcblx0XHQ6cHJpbWFyeS1hY3Rpb249XCJwcmltYXJ5QWN0aW9uXCJcblx0XHQ6ZGVmYXVsdC1hY3Rpb249XCJkZWZhdWx0QWN0aW9uXCJcblx0XHRAdXBkYXRlOm9wZW49XCIkZXZlbnQgPT09IGZhbHNlICYmIGNsb3NlRGlhbG9nKClcIlxuXHRcdEBwcmltYXJ5PVwic3VibWl0RGlhbG9nXCJcblx0XHRAZGVmYXVsdD1cImNsb3NlRGlhbG9nXCJcblx0PlxuXHRcdDxkaXYgY2xhc3M9XCJycmQtZGlhbG9nX19ib2R5XCI+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwicnJkLWRpYWxvZ19fc2VjdGlvblwiPlxuXHRcdFx0XHQ8cD57eyBnZXRNZXNzYWdlKCdoaWRlSXRlbXMnKSB9fTwvcD5cblx0XHRcdFx0PGNkeC1maWVsZD5cblx0XHRcdFx0XHQ8Y2R4LWNoZWNrYm94IHYtbW9kZWw9XCJoaWRlQ29udGVudFwiPlxuXHRcdFx0XHRcdFx0e3sgaXNTcGVjaWFsTG9nKCkgPyBnZXRNZXNzYWdlKCdoaWRlTG9nJykgOiBnZXRNZXNzYWdlKCdoaWRlQ29udGVudCcpIH19XG5cdFx0XHRcdFx0PC9jZHgtY2hlY2tib3g+XG5cdFx0XHRcdDwvY2R4LWZpZWxkPlxuXHRcdFx0XHQ8Y2R4LWZpZWxkPlxuXHRcdFx0XHRcdDxjZHgtY2hlY2tib3ggdi1tb2RlbD1cImhpZGVVc2VybmFtZVwiPnt7IGdldE1lc3NhZ2UoJ2hpZGVVc2VybmFtZScpIH19PC9jZHgtY2hlY2tib3g+XG5cdFx0XHRcdDwvY2R4LWZpZWxkPlxuXHRcdFx0XHQ8Y2R4LWZpZWxkPlxuXHRcdFx0XHRcdDxjZHgtY2hlY2tib3ggdi1tb2RlbD1cImhpZGVTdW1tYXJ5XCI+e3sgZ2V0TWVzc2FnZSgnaGlkZVN1bW1hcnknKSB9fTwvY2R4LWNoZWNrYm94PlxuXHRcdFx0XHQ8L2NkeC1maWVsZD5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzcz1cInJyZC1kaWFsb2dfX3NlY3Rpb25cIj5cblx0XHRcdFx0PHA+e3sgZ2V0TWVzc2FnZSgnaGlkZVJlYXNvbicpIH19PC9wPlxuXHRcdFx0XHQ8Y2R4LWZpZWxkPlxuXHRcdFx0XHRcdDxjZHgtc2VsZWN0IHYtbW9kZWw6c2VsZWN0ZWQ9XCJyZWFzb25cIiA6bWVudS1pdGVtcz1cInJlYXNvbkl0ZW1zXCIgLz5cblx0XHRcdFx0PC9jZHgtZmllbGQ+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3M9XCJycmQtZGlhbG9nX19zZWN0aW9uXCI+XG5cdFx0XHRcdDxwPnt7IGdldE1lc3NhZ2UoJ290aGVyUmVhc29ucycpIH19PC9wPlxuXHRcdFx0XHQ8Y2R4LXRleHQtYXJlYSB2LW1vZGVsPVwib3RoZXJSZWFzb25zXCIgcm93cz1cIjRcIiAvPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdDwvY2R4LWRpYWxvZz5cbjwvdGVtcGxhdGU+XG5cbjxzdHlsZSBsYW5nPVwibGVzc1wiPlxuLnJyZC1kaWFsb2dfX2JvZHkge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRnYXA6IDAuNzVyZW07XG5cdG1pbi13aWR0aDogbWluKDg1dncsIDI1cmVtKTtcbn1cblxuLnJyZC1kaWFsb2dfX3NlY3Rpb24ge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRnYXA6IDAuNXJlbTtcbn1cblxuLnJyZC1kaWFsb2dfX3NlY3Rpb24gcCB7XG5cdG1hcmdpbjogMDtcbn1cbjwvc3R5bGU+XG4iLCAiaW1wb3J0IHR5cGUge1JyZENvbmZpZ30gZnJvbSAnLi90eXBlcyc7XG5cbmNvbnN0IGNvbmZpZzogUnJkQ29uZmlnID0ge1xuXHRjaGVja2JveGVzOiB7fSxcblx0b3RoZXJzOiB7fSxcbn07XG5cbmNvbnN0IGFwcGx5Q29uZmlnID0gKGNoZWNrYm94ZXM6IFJyZENvbmZpZ1snY2hlY2tib3hlcyddID0ge30sIG90aGVyczogUnJkQ29uZmlnWydvdGhlcnMnXSA9IHt9KTogdm9pZCA9PiB7XG5cdGNvbmZpZy5jaGVja2JveGVzID0gY2hlY2tib3hlcztcblx0Y29uZmlnLm90aGVycyA9IG90aGVycztcbn07XG5cbmV4cG9ydCB7YXBwbHlDb25maWcsIGNvbmZpZ307XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtpbml0TXdBcGl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmNvbnN0IGFwaTogbXcuQXBpID0gaW5pdE13QXBpKGBSUkQvJHtPUFRJT05TLnZlcnNpb259YCk7XG5cbmV4cG9ydCB7YXBpfTtcbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge2FwaX0gZnJvbSAnLi9hcGknO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL2kxOG4nO1xuaW1wb3J0IHt1bmlxdWVBcnJheX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxuY29uc3QgcXVlcnlSZXZpc2lvbnMgPSBhc3luYyAodGl0bGVzOiBzdHJpbmcgfCBzdHJpbmdbXSkgPT4ge1xuXHRjb25zdCBwYXJhbXM6IEFwaVF1ZXJ5UmV2aXNpb25zUGFyYW1zID0ge1xuXHRcdHRpdGxlcyxcblx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdHByb3A6ICdyZXZpc2lvbnMnLFxuXHRcdHJ2cHJvcDogJ2NvbnRlbnQnLFxuXHRcdHJ2c2xvdHM6ICdtYWluJyxcblx0fTtcblx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGkuZ2V0KHBhcmFtcyk7XG5cblx0cmV0dXJuIHJlc3BvbnNlO1xufTtcblxuY29uc3QgZWRpdCA9IGFzeW5jICh0aXRsZTogc3RyaW5nLCB0ZXh0OiBzdHJpbmcsIHN1bW1hcnk/OiBzdHJpbmcpID0+IHtcblx0Y29uc3QgcGFyYW1zOiBBcGlFZGl0UGFnZVBhcmFtcyA9IHtcblx0XHR0aXRsZSxcblx0XHR0ZXh0LFxuXHRcdGFjdGlvbjogJ2VkaXQnLFxuXHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0fTtcblx0aWYgKHN1bW1hcnkpIHtcblx0XHRwYXJhbXMuc3VtbWFyeSA9IHN1bW1hcnk7XG5cdH1cblx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGkucG9zdFdpdGhFZGl0VG9rZW4ocGFyYW1zKTtcblxuXHRyZXR1cm4gcmVzcG9uc2U7XG59O1xuXG5jb25zdCBzdWJtaXQgPSBhc3luYyAoaWRzOiBzdHJpbmdbXSwgdG9IaWRlOiBzdHJpbmcsIHJlYXNvbjogc3RyaW5nLCBvdGhlclJlYXNvbnM6IHN0cmluZyk6IFByb21pc2U8dm9pZD4gPT4ge1xuXHRjb25zdCB7d2dQYWdlTmFtZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cblx0Zm9yIChjb25zdCBSRGlkIG9mIFsxLCAyLCAzLCA0LCA1XSkge1xuXHRcdGlmIChyZWFzb24uaW5jbHVkZXMoYFJEJHtSRGlkfWApKSB7XG5cdFx0XHRyZWFzb24gPSBgUkQke1JEaWR9YDtcblx0XHRcdGJyZWFrO1xuXHRcdH1cblx0fVxuXG5cdGZvciAoY29uc3QgT1NpZCBvZiBbMSwgMiwgMywgNF0pIHtcblx0XHRpZiAocmVhc29uLmluY2x1ZGVzKGBPUyR7T1NpZH1gKSkge1xuXHRcdFx0cmVhc29uID0gYE9TJHtPU2lkfWA7XG5cdFx0XHRicmVhaztcblx0XHR9XG5cdH1cblxuXHRjb25zdCBycmRBcnI6IHN0cmluZ1tdID0gW1xuXHRcdCd7e1JldmRlbCcsXG5cdFx0J3xzdGF0dXMgPSAnLFxuXHRcdGB8YXJ0aWNsZSA9ICR7d2dQYWdlTmFtZX1gLFxuXHRcdGB8c2V0ID0gJHt0b0hpZGV9YCxcblx0XHRgfHJlYXNvbiA9ICR7cmVhc29ufSR7b3RoZXJSZWFzb25zfWAsXG5cdF07XG5cblx0Zm9yIChjb25zdCBbaW5kZXgsIGlkXSBvZiB1bmlxdWVBcnJheShpZHMpLmVudHJpZXMoKSkge1xuXHRcdC8vIFJlcGxhY2UgU2V0IHdpdGggdW5pcXVlQXJyYXksIGF2b2lkaW5nIGNvcmUtanMgcG9seWZpbGxpbmdcblx0XHRycmRBcnJbcnJkQXJyLmxlbmd0aF0gPSBgfGlkJHtpbmRleCArIDF9ID0gJHtpZH1gO1xuXHR9XG5cdHJyZEFycltycmRBcnIubGVuZ3RoXSA9ICd9fVxcbuKAlOKAlH5+Jy5jb25jYXQoJ35+Jyk7XG5cblx0dHJ5IHtcblx0XHRjb25zdCByZXNwb25zZSA9IGF3YWl0IHF1ZXJ5UmV2aXNpb25zKE9QVElPTlMucnJkUGFnZSk7XG5cblx0XHRsZXQgY29udGVudDogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXHRcdGlmIChyZXNwb25zZVsncXVlcnknXT8ucGFnZXMpIHtcblx0XHRcdGNvbnRlbnQgPSByZXNwb25zZVsncXVlcnknXS5wYWdlc1swXS5yZXZpc2lvbnNbMF0uc2xvdHMubWFpbi5jb250ZW50IGFzIHN0cmluZztcblx0XHR9XG5cblx0XHRpZiAoY29udGVudCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR2b2lkIG13Lm5vdGlmeShgRXJyb3Igd2hlbiBsb2FkaW5nIHBhZ2UgJHtPUFRJT05TLnJyZFBhZ2V9OiBtaXNzaW5nYCwge1xuXHRcdFx0XHR0YWc6ICdSUkQnLFxuXHRcdFx0XHR0eXBlOiAnZXJyb3InLFxuXHRcdFx0fSk7XG5cblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR0cnkge1xuXHRcdFx0Y29uc3QgcmVzdWx0ID0gYXdhaXQgZWRpdChPUFRJT05TLnJyZFBhZ2UsIGAke2NvbnRlbnR9XFxuXFxuJHtycmRBcnIuam9pbignXFxuJyl9YCwgZ2V0TWVzc2FnZSgnZWRpdFN1bW1hcnknKSk7XG5cblx0XHRcdGlmIChyZXN1bHRbJ2VkaXQnXT8ucmVzdWx0ID09PSAnU3VjY2VzcycpIHtcblx0XHRcdFx0bG9jYXRpb24ucmVwbGFjZShtdy51dGlsLmdldFVybChPUFRJT05TLnJyZFBhZ2UpKTtcblx0XHRcdH0gZWxzZSBpZiAocmVzdWx0WydlcnJvciddPy5jb2RlKSB7XG5cdFx0XHRcdHZvaWQgbXcubm90aWZ5KGBTb21lIGVycm9ycyBvY2N1cmVkIHdoaWxlIHNhdmluZyBwYWdlOiAke3Jlc3VsdFsnZXJyb3InXS5jb2RlfWAsIHtcblx0XHRcdFx0XHR0YWc6ICdSUkQnLFxuXHRcdFx0XHRcdHR5cGU6ICdlcnJvcicsXG5cdFx0XHRcdH0pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dm9pZCBtdy5ub3RpZnkoJ1NvbWUgZXJyb3JzIG9jY3VyZWQgd2hpbGUgc2F2aW5nIHBhZ2U6IHVua25vd24nLCB7XG5cdFx0XHRcdFx0dGFnOiAnUlJEJyxcblx0XHRcdFx0XHR0eXBlOiAnZXJyb3InLFxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9IGNhdGNoIHtcblx0XHRcdHZvaWQgbXcubm90aWZ5KGBFcnJvciB3aGVuIGVkaXRpbmcgcGFnZSAke09QVElPTlMucnJkUGFnZX1gLCB7dGFnOiAnUlJEJywgdHlwZTogJ2Vycm9yJ30pO1xuXHRcdH1cblx0fSBjYXRjaCB7XG5cdFx0dm9pZCBtdy5ub3RpZnkoYEVycm9yIHdoZW4gbG9hZGluZyBwYWdlICR7T1BUSU9OUy5ycmRQYWdlfWAsIHt0YWc6ICdSUkQnLCB0eXBlOiAnZXJyb3InfSk7XG5cdH1cbn07XG5cbmV4cG9ydCB7c3VibWl0fTtcbiIsICJpbXBvcnQgeyB0b0Rpc3BsYXlTdHJpbmcgYXMgX3RvRGlzcGxheVN0cmluZywgY3JlYXRlRWxlbWVudFZOb2RlIGFzIF9jcmVhdGVFbGVtZW50Vk5vZGUsIGNyZWF0ZVRleHRWTm9kZSBhcyBfY3JlYXRlVGV4dFZOb2RlLCB3aXRoQ3R4IGFzIF93aXRoQ3R4LCBjcmVhdGVWTm9kZSBhcyBfY3JlYXRlVk5vZGUsIG9wZW5CbG9jayBhcyBfb3BlbkJsb2NrLCBjcmVhdGVCbG9jayBhcyBfY3JlYXRlQmxvY2sgfSBmcm9tIFwidnVlXCJcblxuY29uc3QgX2hvaXN0ZWRfMSA9IHsgY2xhc3M6IFwicnJkLWRpYWxvZ19fYm9keVwiIH1cbmNvbnN0IF9ob2lzdGVkXzIgPSB7IGNsYXNzOiBcInJyZC1kaWFsb2dfX3NlY3Rpb25cIiB9XG5jb25zdCBfaG9pc3RlZF8zID0geyBjbGFzczogXCJycmQtZGlhbG9nX19zZWN0aW9uXCIgfVxuY29uc3QgX2hvaXN0ZWRfNCA9IHsgY2xhc3M6IFwicnJkLWRpYWxvZ19fc2VjdGlvblwiIH1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlcihfY3R4LCBfY2FjaGUsICRwcm9wcywgJHNldHVwLCAkZGF0YSwgJG9wdGlvbnMpIHtcbiAgcmV0dXJuIChfb3BlbkJsb2NrKCksIF9jcmVhdGVCbG9jaygkc2V0dXBbXCJDZHhEaWFsb2dcIl0sIHtcbiAgICBvcGVuOiAkc2V0dXAub3BlbixcbiAgICBcIm9uVXBkYXRlOm9wZW5cIjogW1xuICAgICAgX2NhY2hlWzVdIHx8IChfY2FjaGVbNV0gPSAkZXZlbnQgPT4gKCgkc2V0dXAub3BlbikgPSAkZXZlbnQpKSxcbiAgICAgIF9jYWNoZVs2XSB8fCAoX2NhY2hlWzZdID0gJGV2ZW50ID0+ICgkZXZlbnQgPT09IGZhbHNlICYmICRzZXR1cC5jbG9zZURpYWxvZygpKSlcbiAgICBdLFxuICAgIHRpdGxlOiAkc2V0dXAuZ2V0TWVzc2FnZSgnZGlhbG9nVGl0bGUnKSxcbiAgICBcInVzZS1jbG9zZS1idXR0b25cIjogdHJ1ZSxcbiAgICBcInByaW1hcnktYWN0aW9uXCI6ICRzZXR1cC5wcmltYXJ5QWN0aW9uLFxuICAgIFwiZGVmYXVsdC1hY3Rpb25cIjogJHNldHVwLmRlZmF1bHRBY3Rpb24sXG4gICAgb25QcmltYXJ5OiAkc2V0dXAuc3VibWl0RGlhbG9nLFxuICAgIG9uRGVmYXVsdDogJHNldHVwLmNsb3NlRGlhbG9nXG4gIH0sIHtcbiAgICBkZWZhdWx0OiBfd2l0aEN0eCgoKSA9PiBbXG4gICAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwiZGl2XCIsIF9ob2lzdGVkXzEsIFtcbiAgICAgICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcImRpdlwiLCBfaG9pc3RlZF8yLCBbXG4gICAgICAgICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcInBcIiwgbnVsbCwgX3RvRGlzcGxheVN0cmluZygkc2V0dXAuZ2V0TWVzc2FnZSgnaGlkZUl0ZW1zJykpLCAxIC8qIFRFWFQgKi8pLFxuICAgICAgICAgIF9jcmVhdGVWTm9kZSgkc2V0dXBbXCJDZHhGaWVsZFwiXSwgbnVsbCwge1xuICAgICAgICAgICAgZGVmYXVsdDogX3dpdGhDdHgoKCkgPT4gW1xuICAgICAgICAgICAgICBfY3JlYXRlVk5vZGUoJHNldHVwW1wiQ2R4Q2hlY2tib3hcIl0sIHtcbiAgICAgICAgICAgICAgICBtb2RlbFZhbHVlOiAkc2V0dXAuaGlkZUNvbnRlbnQsXG4gICAgICAgICAgICAgICAgXCJvblVwZGF0ZTptb2RlbFZhbHVlXCI6IF9jYWNoZVswXSB8fCAoX2NhY2hlWzBdID0gJGV2ZW50ID0+ICgoJHNldHVwLmhpZGVDb250ZW50KSA9ICRldmVudCkpXG4gICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiBfd2l0aEN0eCgoKSA9PiBbXG4gICAgICAgICAgICAgICAgICBfY3JlYXRlVGV4dFZOb2RlKF90b0Rpc3BsYXlTdHJpbmcoJHNldHVwLmlzU3BlY2lhbExvZygpID8gJHNldHVwLmdldE1lc3NhZ2UoJ2hpZGVMb2cnKSA6ICRzZXR1cC5nZXRNZXNzYWdlKCdoaWRlQ29udGVudCcpKSwgMSAvKiBURVhUICovKVxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF86IDEgLyogU1RBQkxFICovXG4gICAgICAgICAgICAgIH0sIDggLyogUFJPUFMgKi8sIFtcIm1vZGVsVmFsdWVcIl0pXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF86IDEgLyogU1RBQkxFICovXG4gICAgICAgICAgfSksXG4gICAgICAgICAgX2NyZWF0ZVZOb2RlKCRzZXR1cFtcIkNkeEZpZWxkXCJdLCBudWxsLCB7XG4gICAgICAgICAgICBkZWZhdWx0OiBfd2l0aEN0eCgoKSA9PiBbXG4gICAgICAgICAgICAgIF9jcmVhdGVWTm9kZSgkc2V0dXBbXCJDZHhDaGVja2JveFwiXSwge1xuICAgICAgICAgICAgICAgIG1vZGVsVmFsdWU6ICRzZXR1cC5oaWRlVXNlcm5hbWUsXG4gICAgICAgICAgICAgICAgXCJvblVwZGF0ZTptb2RlbFZhbHVlXCI6IF9jYWNoZVsxXSB8fCAoX2NhY2hlWzFdID0gJGV2ZW50ID0+ICgoJHNldHVwLmhpZGVVc2VybmFtZSkgPSAkZXZlbnQpKVxuICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDogX3dpdGhDdHgoKCkgPT4gW1xuICAgICAgICAgICAgICAgICAgX2NyZWF0ZVRleHRWTm9kZShfdG9EaXNwbGF5U3RyaW5nKCRzZXR1cC5nZXRNZXNzYWdlKCdoaWRlVXNlcm5hbWUnKSksIDEgLyogVEVYVCAqLylcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBfOiAxIC8qIFNUQUJMRSAqL1xuICAgICAgICAgICAgICB9LCA4IC8qIFBST1BTICovLCBbXCJtb2RlbFZhbHVlXCJdKVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfOiAxIC8qIFNUQUJMRSAqL1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIF9jcmVhdGVWTm9kZSgkc2V0dXBbXCJDZHhGaWVsZFwiXSwgbnVsbCwge1xuICAgICAgICAgICAgZGVmYXVsdDogX3dpdGhDdHgoKCkgPT4gW1xuICAgICAgICAgICAgICBfY3JlYXRlVk5vZGUoJHNldHVwW1wiQ2R4Q2hlY2tib3hcIl0sIHtcbiAgICAgICAgICAgICAgICBtb2RlbFZhbHVlOiAkc2V0dXAuaGlkZVN1bW1hcnksXG4gICAgICAgICAgICAgICAgXCJvblVwZGF0ZTptb2RlbFZhbHVlXCI6IF9jYWNoZVsyXSB8fCAoX2NhY2hlWzJdID0gJGV2ZW50ID0+ICgoJHNldHVwLmhpZGVTdW1tYXJ5KSA9ICRldmVudCkpXG4gICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiBfd2l0aEN0eCgoKSA9PiBbXG4gICAgICAgICAgICAgICAgICBfY3JlYXRlVGV4dFZOb2RlKF90b0Rpc3BsYXlTdHJpbmcoJHNldHVwLmdldE1lc3NhZ2UoJ2hpZGVTdW1tYXJ5JykpLCAxIC8qIFRFWFQgKi8pXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgXzogMSAvKiBTVEFCTEUgKi9cbiAgICAgICAgICAgICAgfSwgOCAvKiBQUk9QUyAqLywgW1wibW9kZWxWYWx1ZVwiXSlcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgXzogMSAvKiBTVEFCTEUgKi9cbiAgICAgICAgICB9KVxuICAgICAgICBdKSxcbiAgICAgICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcImRpdlwiLCBfaG9pc3RlZF8zLCBbXG4gICAgICAgICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcInBcIiwgbnVsbCwgX3RvRGlzcGxheVN0cmluZygkc2V0dXAuZ2V0TWVzc2FnZSgnaGlkZVJlYXNvbicpKSwgMSAvKiBURVhUICovKSxcbiAgICAgICAgICBfY3JlYXRlVk5vZGUoJHNldHVwW1wiQ2R4RmllbGRcIl0sIG51bGwsIHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IF93aXRoQ3R4KCgpID0+IFtcbiAgICAgICAgICAgICAgX2NyZWF0ZVZOb2RlKCRzZXR1cFtcIkNkeFNlbGVjdFwiXSwge1xuICAgICAgICAgICAgICAgIHNlbGVjdGVkOiAkc2V0dXAucmVhc29uLFxuICAgICAgICAgICAgICAgIFwib25VcGRhdGU6c2VsZWN0ZWRcIjogX2NhY2hlWzNdIHx8IChfY2FjaGVbM10gPSAkZXZlbnQgPT4gKCgkc2V0dXAucmVhc29uKSA9ICRldmVudCkpLFxuICAgICAgICAgICAgICAgIFwibWVudS1pdGVtc1wiOiAkc2V0dXAucmVhc29uSXRlbXNcbiAgICAgICAgICAgICAgfSwgbnVsbCwgOCAvKiBQUk9QUyAqLywgW1wic2VsZWN0ZWRcIiwgXCJtZW51LWl0ZW1zXCJdKVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfOiAxIC8qIFNUQUJMRSAqL1xuICAgICAgICAgIH0pXG4gICAgICAgIF0pLFxuICAgICAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwiZGl2XCIsIF9ob2lzdGVkXzQsIFtcbiAgICAgICAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwicFwiLCBudWxsLCBfdG9EaXNwbGF5U3RyaW5nKCRzZXR1cC5nZXRNZXNzYWdlKCdvdGhlclJlYXNvbnMnKSksIDEgLyogVEVYVCAqLyksXG4gICAgICAgICAgX2NyZWF0ZVZOb2RlKCRzZXR1cFtcIkNkeFRleHRBcmVhXCJdLCB7XG4gICAgICAgICAgICBtb2RlbFZhbHVlOiAkc2V0dXAub3RoZXJSZWFzb25zLFxuICAgICAgICAgICAgXCJvblVwZGF0ZTptb2RlbFZhbHVlXCI6IF9jYWNoZVs0XSB8fCAoX2NhY2hlWzRdID0gJGV2ZW50ID0+ICgoJHNldHVwLm90aGVyUmVhc29ucykgPSAkZXZlbnQpKSxcbiAgICAgICAgICAgIHJvd3M6IFwiNFwiXG4gICAgICAgICAgfSwgbnVsbCwgOCAvKiBQUk9QUyAqLywgW1wibW9kZWxWYWx1ZVwiXSlcbiAgICAgICAgXSlcbiAgICAgIF0pXG4gICAgXSksXG4gICAgXzogMSAvKiBTVEFCTEUgKi9cbiAgfSwgOCAvKiBQUk9QUyAqLywgW1wib3BlblwiLCBcInRpdGxlXCIsIFwicHJpbWFyeS1hY3Rpb25cIiwgXCJkZWZhdWx0LWFjdGlvblwiXSkpXG59IiwgImltcG9ydCBzY3JpcHQgZnJvbSBcIkU6XFxcXENvZGVzXFxcXFFpdXdlblxcXFxRaXV3ZW5HYWRnZXRzXFxcXHNyY1xcXFxSUkRcXFxcQXBwLnZ1ZT90eXBlPXNjcmlwdFwiO2ltcG9ydCBcIkU6XFxcXENvZGVzXFxcXFFpdXdlblxcXFxRaXV3ZW5HYWRnZXRzXFxcXHNyY1xcXFxSUkRcXFxcQXBwLnZ1ZT90eXBlPXN0eWxlJmluZGV4PTBcIjtpbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwiRTpcXFxcQ29kZXNcXFxcUWl1d2VuXFxcXFFpdXdlbkdhZGdldHNcXFxcc3JjXFxcXFJSRFxcXFxBcHAudnVlP3R5cGU9dGVtcGxhdGVcIjsgc2NyaXB0LnJlbmRlciA9IHJlbmRlcjtzY3JpcHQuX19maWxlID0gXCJzcmNcXFxcUlJEXFxcXEFwcC52dWVcIjtleHBvcnQgZGVmYXVsdCBzY3JpcHQ7IiwgImNvbnN0IGxvYWRJZHMgPSAoJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KTogc3RyaW5nW10gPT4ge1xuXHRjb25zdCBpZHM6IHN0cmluZ1tdID0gW107XG5cblx0Y29uc3QgYm94ZXM6IEpRdWVyeTxIVE1MSW5wdXRFbGVtZW50PiA9ICRib2R5LmZpbmQoJ2lucHV0Jyk7XG5cdGZvciAoY29uc3QgYm94IG9mIGJveGVzKSB7XG5cdFx0Y29uc3Qge2NoZWNrZWQsIG5hbWUsIHR5cGV9ID0gYm94O1xuXG5cdFx0aWYgKHR5cGUgIT09ICdjaGVja2JveCcgfHwgIWNoZWNrZWQpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGNvbnN0IGlkUmVnZXg6IFJlZ0V4cCA9IC9pZHNcXFsoXFxkKyldLztcblx0XHRjb25zdCBpZEFycmF5OiBSZWdFeHBFeGVjQXJyYXkgfCBudWxsID0gaWRSZWdleC5leGVjKG5hbWUpO1xuXHRcdGlmIChpZEFycmF5Py5bMV0gPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0WywgaWRzW2lkcy5sZW5ndGhdXSA9IGlkQXJyYXk7XG5cdH1cblxuXHRyZXR1cm4gaWRzO1xufTtcblxuZXhwb3J0IHtsb2FkSWRzfTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQyxJQUFBQSxVQUFXO0FBQ1gsSUFBQUMsVUFBVztBQ0FaLElBQUFDLGVBQXdCQyxRQUFBLGtCQUFBO0FBQ3hCLElBQUFDLGNBQXVCRCxRQUFBLEtBQUE7O0FDSHZCLElBQU1FLGtCQUFrQkEsTUFBTTtBQUM3QixRQUFNO0lBQUNDO0VBQUssSUFBSUM7QUFDaEIsU0FBTztJQUNOQyxhQUFhRixNQUNaLDJDQUNBLHlDQUNEO0lBQ0FHLHVCQUF1QkgsTUFBTSxnQkFBZ0IsY0FBYztJQUMzREksbUJBQW1CSixNQUFNLGdCQUFnQixjQUFjO0lBQ3ZESyxzQkFBc0JMLE1BQU0scUJBQXFCLG1CQUFt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OUcsRUFBQSxHQUFBQyxRQUF5RDtBQUFBLGNBQTlDK0csVUFBQUQsT0FBQTNHO0FBQ1YsY0FBTTZHLGdCQUFnQkwsT0FBTyxNQUFNWixXQUFXaEIsS0FBSyxDQUFDO0FBQ3BEZ0MsZ0JBQVFFLE1BQU1ELGFBQWE7TUFDNUI7SUFBQSxTQUFBNUcsS0FBQTtBQUFBeUcsaUJBQUF4RyxFQUFBRCxHQUFBO0lBQUEsVUFBQTtBQUFBeUcsaUJBQUF2RyxFQUFBO0lBQUE7RUFDRDtBQUNELENBQUM7IiwKICAibmFtZXMiOiBbInJyZFBhZ2UiLCAidmVyc2lvbiIsICJpbXBvcnRfY29kZXgiLCAicmVxdWlyZSIsICJpbXBvcnRfdnVlMiIsICJnZXRJMThuTWVzc2FnZXMiLCAid2dVTFMiLCAid2luZG93IiwgImVkaXRTdW1tYXJ5IiwgImVyck5vUmV2aXNpb25Qcm92aWRlZCIsICJlcnJOb0l0ZW1Qcm92aWRlZCIsICJ3YXJuTm9SZWFzb25Qcm92aWRlZCIsICJoaWRlSXRlbXMiLCAiaGlkZUNvbnRlbnQiLCAiaGlkZUxvZyIsICJoaWRlVXNlcm5hbWUiLCAiaGlkZVN1bW1hcnkiLCAiaGlkZVJlYXNvbiIsICJoaWRlUmVhc29uUkQxIiwgImhpZGVSZWFzb25SRDIiLCAiaGlkZVJlYXNvblJEMyIsICJoaWRlUmVhc29uUkQ0IiwgImhpZGVSZWFzb25SRDUiLCAiaGlkZVJlYXNvbk9TMSIsICJoaWRlUmVhc29uT1MyIiwgImhpZGVSZWFzb25PUzMiLCAiaGlkZVJlYXNvbk9TNCIsICJoaWRlUmVhc29uT3RoZXIiLCAib3RoZXJSZWFzb25zIiwgImRpYWxvZ1RpdGxlIiwgImRpYWxvZ0J1dHRvblN1Ym1pdCIsICJkaWFsb2dCdXR0b25DYW5jZWwiLCAicmVwb3J0QnV0dG9uVGl0bGUiLCAicmVwb3J0QnV0dG9uVGV4dCIsICJyZXBvcnRCdXR0b25Mb2dUZXh0IiwgImkxOG5NZXNzYWdlcyIsICJnZXRNZXNzYWdlIiwgImtleSIsICJpc1NwZWNpYWxMb2ciLCAid2dDYW5vbmljYWxTcGVjaWFsUGFnZU5hbWUiLCAibXciLCAiY29uZmlnIiwgImdldCIsICJwcm9wcyIsICJfX3Byb3BzIiwgImJ1dHRvbkxhYmVsIiwgImNvbXB1dGVkIiwgImJ1dHRvblRpdGxlIiwgImltcG9ydF92dWUzIiwgInJlbmRlciIsICJfY3R4IiwgIl9jYWNoZSIsICIkcHJvcHMiLCAiJHNldHVwIiwgIiRkYXRhIiwgIiRvcHRpb25zIiwgIm9wZW5CbG9jayIsICJjcmVhdGVCbG9jayIsICJjbGFzcyIsICJ3ZWlnaHQiLCAidHlwZSIsICJ0aXRsZSIsICJvbkNsaWNrIiwgImRlZmF1bHQiLCAid2l0aEN0eCIsICJjcmVhdGVUZXh0Vk5vZGUiLCAidG9EaXNwbGF5U3RyaW5nIiwgIl8iLCAiUmVwb3J0QnV0dG9uX2RlZmF1bHQiLCAiX19maWxlIiwgIlJlcG9ydEJ1dHRvbl9kZWZhdWx0MiIsICJpbXBvcnRfdnVlOCIsICJpbXBvcnRfZXh0X2dhZGdldDMiLCAiaW1wb3J0X3Z1ZTciLCAiaW1wb3J0X2NvZGV4MiIsICJjaGVja2JveGVzIiwgIm90aGVycyIsICJhcHBseUNvbmZpZyIsICJpbXBvcnRfdnVlNSIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJhcGkiLCAiaW5pdE13QXBpIiwgImNvbmNhdCIsICJpbXBvcnRfZXh0X2dhZGdldDIiLCAicXVlcnlSZXZpc2lvbnMiLCAiX3JlZiIsICJfYXN5bmNUb0dlbmVyYXRvciIsICJ0aXRsZXMiLCAicGFyYW1zIiwgImFjdGlvbiIsICJmb3JtYXQiLCAiZm9ybWF0dmVyc2lvbiIsICJwcm9wIiwgInJ2cHJvcCIsICJydnNsb3RzIiwgInJlc3BvbnNlIiwgIl94IiwgImFwcGx5IiwgImFyZ3VtZW50cyIsICJlZGl0IiwgIl9yZWYyIiwgInRleHQiLCAic3VtbWFyeSIsICJwb3N0V2l0aEVkaXRUb2tlbiIsICJfeDIiLCAiX3gzIiwgIl94NCIsICJzdWJtaXQiLCAiX3JlZjMiLCAiaWRzIiwgInRvSGlkZSIsICJyZWFzb24iLCAid2dQYWdlTmFtZSIsICJfaSIsICJfYXJyIiwgImxlbmd0aCIsICJSRGlkIiwgImluY2x1ZGVzIiwgIl9pMiIsICJfYXJyMiIsICJPU2lkIiwgInJyZEFyciIsICJfaXRlcmF0b3IiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAidW5pcXVlQXJyYXkiLCAiZW50cmllcyIsICJfc3RlcCIsICJzIiwgIm4iLCAiZG9uZSIsICJpbmRleCIsICJpZCIsICJ2YWx1ZSIsICJlcnIiLCAiZSIsICJmIiwgIl9yZXNwb25zZSRxdWVyeSIsICJjb250ZW50IiwgInBhZ2VzIiwgInJldmlzaW9ucyIsICJzbG90cyIsICJtYWluIiwgIm5vdGlmeSIsICJ0YWciLCAiX3Jlc3VsdCRlZGl0IiwgIl9yZXN1bHQkZXJyb3IiLCAicmVzdWx0IiwgImpvaW4iLCAibG9jYXRpb24iLCAicmVwbGFjZSIsICJ1dGlsIiwgImdldFVybCIsICJjb2RlIiwgIl94NSIsICJfeDYiLCAiX3g3IiwgIl94OCIsICJvcGVuIiwgInJlZiIsICJCb29sZWFuIiwgInJyZEhpZGVDb250ZW50IiwgInJyZEhpZGVVc2VybmFtZSIsICJycmRIaWRlU3VtbWFyeSIsICJfY29uZmlnJG90aGVycyRycmRSZWEiLCAicnJkUmVhc29uIiwgIl9jb25maWckb3RoZXJzJHJyZE90aCIsICJycmRPdGhlclJlYXNvbnMiLCAicmVhc29uSXRlbXMiLCAibGFiZWwiLCAicHJpbWFyeUFjdGlvbiIsICJhY3Rpb25UeXBlIiwgImRlZmF1bHRBY3Rpb24iLCAid2F0Y2giLCAiX2hpZGVDb250ZW50JHZhbHVlIiwgIl9oaWRlVXNlcm5hbWUkdmFsdWUiLCAiX2hpZGVTdW1tYXJ5JHZhbHVlIiwgIl9yZWFzb24kdmFsdWUiLCAiX290aGVyUmVhc29ucyR2YWx1ZSIsICJkZWVwIiwgInN1Ym1pdERpYWxvZyIsICJzaG91bGRIaWRlQ29udGVudCIsICJzaG91bGRIaWRlVXNlcm5hbWUiLCAic2hvdWxkSGlkZVN1bW1hcnkiLCAicHVzaCIsICJjb250IiwgImNvbmZpcm0iLCAib25DbG9zZSIsICJjbG9zZURpYWxvZyIsICJfaGlkZUNvbnRlbnQkdmFsdWUyIiwgIl9oaWRlVXNlcm5hbWUkdmFsdWUyIiwgIl9oaWRlU3VtbWFyeSR2YWx1ZTIiLCAiaW1wb3J0X3Z1ZTYiLCAiX2hvaXN0ZWRfMSIsICJfaG9pc3RlZF8yIiwgIl9ob2lzdGVkXzMiLCAiX2hvaXN0ZWRfNCIsICJyZW5kZXIyIiwgIiRldmVudCIsICJvblByaW1hcnkiLCAib25EZWZhdWx0IiwgImNyZWF0ZUVsZW1lbnRWTm9kZSIsICJjcmVhdGVWTm9kZSIsICJtb2RlbFZhbHVlIiwgInNlbGVjdGVkIiwgInJvd3MiLCAiQXBwX2RlZmF1bHQiLCAiQXBwX2RlZmF1bHQyIiwgImxvYWRJZHMiLCAiJGJvZHkiLCAiYm94ZXMiLCAiZmluZCIsICJfaXRlcmF0b3IyIiwgIl9zdGVwMiIsICJib3giLCAiY2hlY2tlZCIsICJuYW1lIiwgImlkUmVnZXgiLCAiaWRBcnJheSIsICJleGVjIiwgImFwcCIsICJyb290IiwgImRpc3Bvc2VEaWFsb2ciLCAidW5tb3VudCIsICJyZW1vdmUiLCAic2hvd0RpYWxvZyIsICJkb2N1bWVudCIsICJjcmVhdGVFbGVtZW50IiwgImJvZHkiLCAiYXBwZW5kIiwgImNyZWF0ZUFwcCIsICJtb3VudCIsICJnZXRCb2R5IiwgInRoZW4iLCAicnJkIiwgIndnQWN0aW9uIiwgIkNMQVNTX05BTUVTIiwgImJ1dHRvbiIsICJyb290MiIsICJfaXRlcmF0b3IzIiwgIl9zdGVwMyIsICJlbGVtZW50IiwgImFwcGVuZEVsZW1lbnQiLCAiYWZ0ZXIiXQp9Cg==

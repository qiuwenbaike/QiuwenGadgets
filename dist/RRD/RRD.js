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
//! src/RRD/RRD.ts
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
var import_ext_gadget3 = require("ext.gadget.Util");
//! src/RRD/options.json
var rrdPage = "Qiuwen_talk:版本删除提报";
var version = "2.0";
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
//! src/RRD/modules/reportButton.ts
var reportButton = document.createElement("button");
reportButton.type = "button";
reportButton.className = ["rrd__report", "cdx-button", "cdx-button--weight-primary"].join(" ");
reportButton.title = getMessage("reportButtonTitle") + rrdPage;
reportButton.innerText = isSpecialLog() ? getMessage("reportButtonLogText") : getMessage("reportButtonText");
//! src/RRD/modules/showDialog.ts
var import_vue4 = require("vue");
var import_vue = require("vue");
var import_codex = require("@wikimedia/codex");
//! src/RRD/modules/rrdConfig.ts
var config = {
  checkboxes: {},
  others: {}
};
var applyConfig = (checkboxes = {}, others = {}) => {
  config.checkboxes = checkboxes;
  config.others = others;
};
var import_vue2 = require("vue");
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
var App_default = /* @__PURE__ */ (0, import_vue.defineComponent)({
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
    const open = (0, import_vue2.ref)(true);
    const hideContent = (0, import_vue2.ref)(Boolean(config.checkboxes.rrdHideContent));
    const hideUsername = (0, import_vue2.ref)(Boolean(config.checkboxes.rrdHideUsername));
    const hideSummary = (0, import_vue2.ref)(Boolean(config.checkboxes.rrdHideSummary));
    const reason = (0, import_vue2.ref)((_config$others$rrdRea = config.others.rrdReason) !== null && _config$others$rrdRea !== void 0 ? _config$others$rrdRea : "");
    const otherReasons = (0, import_vue2.ref)((_config$others$rrdOth = config.others.rrdOtherReasons) !== null && _config$others$rrdOth !== void 0 ? _config$others$rrdOth : "");
    const reasonItems = (0, import_vue2.computed)(() => [{
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
    const primaryAction = (0, import_vue2.computed)(() => ({
      label: getMessage("dialogButtonSubmit"),
      actionType: "progressive"
    }));
    const defaultAction = (0, import_vue2.computed)(() => ({
      label: getMessage("dialogButtonCancel")
    }));
    (0, import_vue2.watch)(() => [hideContent.value, hideUsername.value, hideSummary.value, reason.value, otherReasons.value], () => {
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
        return import_codex.CdxCheckbox;
      },
      get CdxDialog() {
        return import_codex.CdxDialog;
      },
      get CdxField() {
        return import_codex.CdxField;
      },
      get CdxSelect() {
        return import_codex.CdxSelect;
      },
      get CdxTextArea() {
        return import_codex.CdxTextArea;
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
var import_vue3 = require("vue");
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
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0, import_vue3.openBlock)(), (0, import_vue3.createBlock)($setup["CdxDialog"], {
    open: $setup.open,
    "onUpdate:open": [_cache[5] || (_cache[5] = ($event) => $setup.open = $event), _cache[6] || (_cache[6] = ($event) => $event === false && $setup.closeDialog())],
    title: $setup.getMessage("dialogTitle"),
    "use-close-button": true,
    "primary-action": $setup.primaryAction,
    "default-action": $setup.defaultAction,
    onPrimary: $setup.submitDialog,
    onDefault: $setup.closeDialog
  }, {
    default: (0, import_vue3.withCtx)(() => [(0, import_vue3.createElementVNode)("div", _hoisted_1, [(0, import_vue3.createElementVNode)("div", _hoisted_2, [(0, import_vue3.createElementVNode)(
      "p",
      null,
      (0, import_vue3.toDisplayString)($setup.getMessage("hideItems")),
      1
      /* TEXT */
    ), (0, import_vue3.createVNode)($setup["CdxField"], null, {
      default: (0, import_vue3.withCtx)(() => [(0, import_vue3.createVNode)($setup["CdxCheckbox"], {
        modelValue: $setup.hideContent,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.hideContent = $event)
      }, {
        default: (0, import_vue3.withCtx)(() => [(0, import_vue3.createTextVNode)(
          (0, import_vue3.toDisplayString)($setup.isSpecialLog() ? $setup.getMessage("hideLog") : $setup.getMessage("hideContent")),
          1
          /* TEXT */
        )]),
        _: 1
        /* STABLE */
      }, 8, ["modelValue"])]),
      _: 1
      /* STABLE */
    }), (0, import_vue3.createVNode)($setup["CdxField"], null, {
      default: (0, import_vue3.withCtx)(() => [(0, import_vue3.createVNode)($setup["CdxCheckbox"], {
        modelValue: $setup.hideUsername,
        "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.hideUsername = $event)
      }, {
        default: (0, import_vue3.withCtx)(() => [(0, import_vue3.createTextVNode)(
          (0, import_vue3.toDisplayString)($setup.getMessage("hideUsername")),
          1
          /* TEXT */
        )]),
        _: 1
        /* STABLE */
      }, 8, ["modelValue"])]),
      _: 1
      /* STABLE */
    }), (0, import_vue3.createVNode)($setup["CdxField"], null, {
      default: (0, import_vue3.withCtx)(() => [(0, import_vue3.createVNode)($setup["CdxCheckbox"], {
        modelValue: $setup.hideSummary,
        "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $setup.hideSummary = $event)
      }, {
        default: (0, import_vue3.withCtx)(() => [(0, import_vue3.createTextVNode)(
          (0, import_vue3.toDisplayString)($setup.getMessage("hideSummary")),
          1
          /* TEXT */
        )]),
        _: 1
        /* STABLE */
      }, 8, ["modelValue"])]),
      _: 1
      /* STABLE */
    })]), (0, import_vue3.createElementVNode)("div", _hoisted_3, [(0, import_vue3.createElementVNode)(
      "p",
      null,
      (0, import_vue3.toDisplayString)($setup.getMessage("hideReason")),
      1
      /* TEXT */
    ), (0, import_vue3.createVNode)($setup["CdxField"], null, {
      default: (0, import_vue3.withCtx)(() => [(0, import_vue3.createVNode)($setup["CdxSelect"], {
        selected: $setup.reason,
        "onUpdate:selected": _cache[3] || (_cache[3] = ($event) => $setup.reason = $event),
        "menu-items": $setup.reasonItems
      }, null, 8, ["selected", "menu-items"])]),
      _: 1
      /* STABLE */
    })]), (0, import_vue3.createElementVNode)("div", _hoisted_4, [(0, import_vue3.createElementVNode)(
      "p",
      null,
      (0, import_vue3.toDisplayString)($setup.getMessage("otherReasons")),
      1
      /* TEXT */
    ), (0, import_vue3.createVNode)($setup["CdxTextArea"], {
      modelValue: $setup.otherReasons,
      "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $setup.otherReasons = $event),
      rows: "4"
    }, null, 8, ["modelValue"])])])]),
    _: 1
    /* STABLE */
  }, 8, ["open", "title", "primary-action", "default-action"]);
}
//! src/RRD/App.vue
App_default.render = render;
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
  app = (0, import_vue4.createApp)(App_default2, {
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
    var _iterator3 = _createForOfIteratorHelper($body.find([".historysubmit.mw-history-compareselectedversions-button", ".editchangetags-log-submit.mw-log-editchangetags-button"].join(","))), _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
        const element = _step3.value;
        const appendElement = reportButton.cloneNode(true);
        element.after(appendElement);
        appendElement.addEventListener("click", () => {
          showDialog($body);
        });
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1JSRC9SUkQudHMiLCAic3JjL1JSRC9vcHRpb25zLmpzb24iLCAic3JjL1JSRC9tb2R1bGVzL2kxOG4udHMiLCAic3JjL1JSRC9tb2R1bGVzL2lzU3BlY2lhbExvZy50cyIsICJzcmMvUlJEL21vZHVsZXMvcmVwb3J0QnV0dG9uLnRzIiwgInNyYy9SUkQvbW9kdWxlcy9zaG93RGlhbG9nLnRzIiwgImRpc3QvUlJEL3NyYy9SUkQvQXBwLnZ1ZSIsICJzcmMvUlJEL21vZHVsZXMvcnJkQ29uZmlnLnRzIiwgInNyYy9SUkQvbW9kdWxlcy9hcGkudHMiLCAic3JjL1JSRC9tb2R1bGVzL3N1Ym1pdC50cyIsICJzZmMtdGVtcGxhdGU6RDpcXEdpdFJlcG9zaXRvcnlcXFFpdXdlbkdhZGdldHNcXHNyY1xcUlJEXFxBcHAudnVlP3R5cGU9dGVtcGxhdGUiLCAic3JjL1JSRC9BcHAudnVlIiwgInNyYy9SUkQvbW9kdWxlcy9sb2FkSWRzLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQge2dldEJvZHl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5pbXBvcnQge3JlcG9ydEJ1dHRvbn0gZnJvbSAnLi9tb2R1bGVzL3JlcG9ydEJ1dHRvbic7XG5pbXBvcnQge3Nob3dEaWFsb2d9IGZyb20gJy4vbW9kdWxlcy9zaG93RGlhbG9nJztcblxudm9pZCBnZXRCb2R5KCkudGhlbihmdW5jdGlvbiBycmQoJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KTogdm9pZCB7XG5cdGNvbnN0IHt3Z0FjdGlvbiwgd2dDYW5vbmljYWxTcGVjaWFsUGFnZU5hbWV9ID0gbXcuY29uZmlnLmdldCgpO1xuXG5cdGlmICh3Z0FjdGlvbiA9PT0gJ2hpc3RvcnknIHx8IHdnQ2Fub25pY2FsU3BlY2lhbFBhZ2VOYW1lID09PSAnTG9nJykge1xuXHRcdGZvciAoY29uc3QgZWxlbWVudCBvZiAkYm9keS5maW5kKFxuXHRcdFx0W1xuXHRcdFx0XHQnLmhpc3RvcnlzdWJtaXQubXctaGlzdG9yeS1jb21wYXJlc2VsZWN0ZWR2ZXJzaW9ucy1idXR0b24nLFxuXHRcdFx0XHQnLmVkaXRjaGFuZ2V0YWdzLWxvZy1zdWJtaXQubXctbG9nLWVkaXRjaGFuZ2V0YWdzLWJ1dHRvbicsXG5cdFx0XHRdLmpvaW4oJywnKVxuXHRcdCkpIHtcblx0XHRcdGNvbnN0IGFwcGVuZEVsZW1lbnQgPSByZXBvcnRCdXR0b24uY2xvbmVOb2RlKHRydWUpIGFzIEhUTUxCdXR0b25FbGVtZW50O1xuXHRcdFx0ZWxlbWVudC5hZnRlcihhcHBlbmRFbGVtZW50KTtcblx0XHRcdGFwcGVuZEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cdFx0XHRcdHNob3dEaWFsb2coJGJvZHkpO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHR9XG59KTtcbiIsICJ7XG5cdFwicnJkUGFnZVwiOiBcIlFpdXdlbl90YWxrOueJiOacrOWIoOmZpOaPkOaKpVwiLFxuXHRcInZlcnNpb25cIjogXCIyLjBcIlxufVxuIiwgImNvbnN0IGdldEkxOG5NZXNzYWdlcyA9ICgpID0+IHtcblx0Y29uc3Qge3dnVUxTfSA9IHdpbmRvdztcblx0cmV0dXJuIHtcblx0XHRlZGl0U3VtbWFyeTogd2dVTFMoXG5cdFx0XHQnW1tNZWRpYVdpa2k6R2FkZ2V0LVJSRC5qc3zljYroh6rliqjmj5DmiqVdXeS/ruiuoueJiOacrOWIoOmZpCcsXG5cdFx0XHQnW1tNZWRpYVdpa2k6R2FkZ2V0LVJSRC5qc3zljYroh6rli5Xmj5DloLFdXeS/ruiogueJiOacrOWIqumZpCdcblx0XHQpLFxuXHRcdGVyck5vUmV2aXNpb25Qcm92aWRlZDogd2dVTFMoJ+aCqOayoeaciemAieaLqemcgOmakOiXj+eahOeJiOacrO+8gScsICfmgqjmspLmnInpgbjmk4fpnIDpmrHol4/nmoTniYjmnKzvvIEnKSxcblx0XHRlcnJOb0l0ZW1Qcm92aWRlZDogd2dVTFMoJ+aCqOayoeaciemAieaLqemcgOmakOiXj+eahOmhueebru+8gScsICfmgqjmspLmnInpgbjmk4fpnIDpmrHol4/nmoTpoIXnm67vvIEnKSxcblx0XHR3YXJuTm9SZWFzb25Qcm92aWRlZDogd2dVTFMoJ+aCqOayoeaciei+k+WFpeS7u+S9leeQhueUse+8geehruWumuimgee7p+e7reWQl++8nycsICfmgqjmspLmnInovLjlhaXku7vkvZXnkIbnlLHvvIHnorrlrpropoHnubznuozll47vvJ8nKSxcblx0XHRoaWRlSXRlbXM6IHdnVUxTKCfpnIDpmpDol4/nmoTpobnnm67vvJonLCAn6ZyA6Zqx6JeP55qE6aCF55uu77yaJyksXG5cdFx0aGlkZUNvbnRlbnQ6IHdnVUxTKCfnvJbovpHlhoXlrrknLCAn57eo6Lyv5YWn5a65JyksXG5cdFx0aGlkZUxvZzogd2dVTFMoJ+aXpeW/l+ebruagh+S4juWPguaVsCcsICfml6Xoqoznm67mqJnoiIflj4PmlbgnKSxcblx0XHRoaWRlVXNlcm5hbWU6IHdnVUxTKCfnvJbovpHogIXnlKjmiLflkI0nLCAn57eo6Lyv6ICF55So5oi25ZCNJyksXG5cdFx0aGlkZVN1bW1hcnk6IHdnVUxTKCfnvJbovpHmkZjopoEnLCAn57eo6Lyv5pGY6KaBJyksXG5cdFx0aGlkZVJlYXNvbjogd2dVTFMoJ+eQhuaNru+8micsICfnkIbmk5rvvJonKSxcblx0XHRoaWRlUmVhc29uUkQxOiB3Z1VMUygnUkQx77ya5p2h55uu5Lit5piO5pi+5L6154qv6JGX5L2c5p2D55qE5YaF5a65JywgJ1JEMe+8muaineebruS4reaYjumhr+S+teeKr+iRl+S9nOasiueahOWFp+WuuScpLFxuXHRcdGhpZGVSZWFzb25SRDI6IHdnVUxTKCdSRDLvvJrkuKXph43kvq7ovrHjgIHotKzkvY7miJbmlLvlh7vmgKfmlofmnKwnLCAnUkQy77ya5Zq06YeN5L6u6L6x44CB6LK25L2O5oiW5pS75pOK5oCn5paH5pysJyksXG5cdFx0aGlkZVJlYXNvblJEMzogd2dVTFMoJ1JEM++8mue6r+eyueaJsOS5seaAp+WGheWuuScsICfntJTnsrnmk77kuoLmgKflhaflrrknKSxcblx0XHRoaWRlUmVhc29uUkQ0OiB3Z1VMUygnUkQ077ya5piO5pi+6L+d5Y+N5rOV5b6L5rOV6KeE5oiW6L+d6IOM5YWs5bqP6Imv5L+X55qE5YaF5a65JywgJ1JENO+8muaYjumhr+mBleWPjeazleW+i+azleimj+aIlumBleiDjOWFrOW6j+iJr+S/l+eahOWFp+WuuScpLFxuXHRcdGhpZGVSZWFzb25SRDU6IHdnVUxTKCdSRDXvvJrlhbbku5bkuI3lrpzlhazlvIDnmoTniYjmnKzlhoXlrrknLCAnUkQ177ya5YW25LuW5LiN5a6c5YWs6ZaL55qE54mI5pys5YWn5a65JyksXG5cdFx0aGlkZVJlYXNvbk9TMTogd2dVTFMoJ09TMe+8muacquWFrOW8gOeahOS4quS6uui1hOaWmScsICdPUzHvvJrmnKrlhazplovnmoTlgIvkurros4fmlpknKSxcblx0XHRoaWRlUmVhc29uT1MyOiB3Z1VMUygnT1My77ya5Y+v6IO95b2x5ZON55m+56eR6L+Q5L2c55qE5YaF5a65JywgJ09TMu+8muWPr+iDveW9semfv+eZvuenkemBi+S9nOeahOWFp+WuuScpLFxuXHRcdGhpZGVSZWFzb25PUzM6IHdnVUxTKCdPUzPvvJrnoLTlnY/mgKfjgIHmibDkubHmgKfnlKjmiLflkI0nLCAnT1Mz77ya56C05aOe5oCn44CB5pO+5LqC5oCn55So5oi25ZCNJyksXG5cdFx0aGlkZVJlYXNvbk9TNDogd2dVTFMoXG5cdFx0XHQnT1M077ya5Y6f6aG16Z2i5YaF5a655p2l6Ieq5aSW6YOo5p2l5rqQ44CB5LiN56ym5ZCI5rGC6Ze755m+56eR5pa56ZKI77yM5L2G57uP6L+H5pS55YaZ5ZCO77yM5bey56ym5ZCI5rGC6Ze755m+56eR5pa56ZKI55qE6aG16Z2iJyxcblx0XHRcdCdPUzTvvJrljp/poIHpnaLlhaflrrnkvoboh6rlpJbpg6jkvobmupDjgIHkuI3nrKblkIjmsYLogZ7nmb7np5Hmlrnph53vvIzkvYbntpPpgY7opoblr6vlvozvvIzlt7LnrKblkIjmsYLogZ7nmb7np5Hmlrnph53nmoTpoIHpnaInXG5cdFx0KSxcblx0XHRoaWRlUmVhc29uT3RoZXI6IHdnVUxTKCfku4Xkvb/nlKjkuIvmlrnnmoTpmYTliqDnkIbnlLEnLCAn5YOF5L2/55So5LiL5pa555qE6ZmE5Yqg55CG55SxJyksXG5cdFx0b3RoZXJSZWFzb25zOiB3Z1VMUygn6ZmE5Yqg55CG55Sx77yI5Y+v6YCJ77yM5LiN55So562+5ZCN77yJJywgJ+mZhOWKoOeQhueUse+8iOWPr+mBuO+8jOS4jeeUqOewveWQje+8iScpLFxuXHRcdGRpYWxvZ1RpdGxlOiB3Z1VMUygn5o+Q5oql5L+u6K6i54mI5pys5Yig6ZmkJywgJ+aPkOWgseS/ruiogueJiOacrOWIqumZpCcpLFxuXHRcdGRpYWxvZ0J1dHRvblN1Ym1pdDogd2dVTFMoJ+aPkOaKpScsICfmj5DloLEnKSxcblx0XHRkaWFsb2dCdXR0b25DYW5jZWw6IHdnVUxTKCflj5bmtognLCAn5Y+W5raIJyksXG5cdFx0cmVwb3J0QnV0dG9uVGl0bGU6IHdnVUxTKCflsIbpgInkuK3nmoTniYjmnKzmj5DmiqXliLAnLCAn5bCH6YG45Lit55qE54mI5pys5o+Q5aCx5YiwJyksXG5cdFx0cmVwb3J0QnV0dG9uVGV4dDogd2dVTFMoJ+ivt+axguWIoOmZpOiiq+mAieeJiOacrCcsICfoq4vmsYLliKrpmaTooqvpgbjniYjmnKwnKSxcblx0XHRyZXBvcnRCdXR0b25Mb2dUZXh0OiB3Z1VMUygn6K+35rGC5Yig6Zmk6KKr6YCJ5pel5b+XJywgJ+iri+axguWIqumZpOiiq+mBuOaXpeiqjCcpLFxuXHR9O1xufTtcblxuY29uc3QgaTE4bk1lc3NhZ2VzID0gZ2V0STE4bk1lc3NhZ2VzKCk7XG5cbmNvbnN0IGdldE1lc3NhZ2U6IEdldE1lc3NhZ2VzPHR5cGVvZiBpMThuTWVzc2FnZXM+ID0gKGtleSkgPT4ge1xuXHRyZXR1cm4gaTE4bk1lc3NhZ2VzW2tleV0gfHwga2V5O1xufTtcblxuZXhwb3J0IHtnZXRNZXNzYWdlfTtcbiIsICJjb25zdCBpc1NwZWNpYWxMb2cgPSAoKSA9PiB7XG5cdGNvbnN0IHt3Z0Nhbm9uaWNhbFNwZWNpYWxQYWdlTmFtZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cdHJldHVybiB3Z0Nhbm9uaWNhbFNwZWNpYWxQYWdlTmFtZSA9PT0gJ0xvZyc7XG59O1xuXG5leHBvcnQge2lzU3BlY2lhbExvZ307XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL2kxOG4nO1xuaW1wb3J0IHtpc1NwZWNpYWxMb2d9IGZyb20gJy4vaXNTcGVjaWFsTG9nJztcblxuY29uc3QgcmVwb3J0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5yZXBvcnRCdXR0b24udHlwZSA9ICdidXR0b24nO1xucmVwb3J0QnV0dG9uLmNsYXNzTmFtZSA9IFsncnJkX19yZXBvcnQnLCAnY2R4LWJ1dHRvbicsICdjZHgtYnV0dG9uLS13ZWlnaHQtcHJpbWFyeSddLmpvaW4oJyAnKTtcbnJlcG9ydEJ1dHRvbi50aXRsZSA9IGdldE1lc3NhZ2UoJ3JlcG9ydEJ1dHRvblRpdGxlJykgKyBPUFRJT05TLnJyZFBhZ2U7XG5yZXBvcnRCdXR0b24uaW5uZXJUZXh0ID0gaXNTcGVjaWFsTG9nKCkgPyBnZXRNZXNzYWdlKCdyZXBvcnRCdXR0b25Mb2dUZXh0JykgOiBnZXRNZXNzYWdlKCdyZXBvcnRCdXR0b25UZXh0Jyk7XG5leHBvcnQge3JlcG9ydEJ1dHRvbn07XG4iLCAiaW1wb3J0IHt0eXBlIEFwcCBhcyBWdWVBcHAsIGNyZWF0ZUFwcH0gZnJvbSAndnVlJztcbmltcG9ydCBBcHAgZnJvbSAnLi4vQXBwLnZ1ZSc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vaTE4bic7XG5pbXBvcnQge2xvYWRJZHN9IGZyb20gJy4vbG9hZElkcyc7XG5cbmxldCBhcHA6IFZ1ZUFwcDxFbGVtZW50PiB8IHVuZGVmaW5lZDtcbmxldCByb290OiBIVE1MRGl2RWxlbWVudCB8IHVuZGVmaW5lZDtcblxuY29uc3QgZGlzcG9zZURpYWxvZyA9ICgpOiB2b2lkID0+IHtcblx0aWYgKGFwcCkge1xuXHRcdGFwcC51bm1vdW50KCk7XG5cdFx0YXBwID0gdW5kZWZpbmVkO1xuXHR9XG5cdGlmIChyb290KSB7XG5cdFx0cm9vdC5yZW1vdmUoKTtcblx0XHRyb290ID0gdW5kZWZpbmVkO1xuXHR9XG59O1xuXG5jb25zdCBzaG93RGlhbG9nID0gKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQgPT4ge1xuXHRjb25zdCBpZHM6IHN0cmluZ1tdID0gbG9hZElkcygkYm9keSk7XG5cdGlmICghaWRzLmxlbmd0aCkge1xuXHRcdHZvaWQgbXcubm90aWZ5KGdldE1lc3NhZ2UoJ2Vyck5vUmV2aXNpb25Qcm92aWRlZCcpLCB7XG5cdFx0XHR0YWc6ICdSUkQnLFxuXHRcdFx0dHlwZTogJ2Vycm9yJyxcblx0XHR9KTtcblxuXHRcdHJldHVybjtcblx0fVxuXG5cdGRpc3Bvc2VEaWFsb2coKTtcblx0cm9vdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRkb2N1bWVudC5ib2R5LmFwcGVuZChyb290KTtcblx0YXBwID0gY3JlYXRlQXBwKEFwcCwge1xuXHRcdGlkcyxcblx0XHRvbkNsb3NlOiBkaXNwb3NlRGlhbG9nLFxuXHR9KTtcblx0YXBwLm1vdW50KHJvb3QpO1xufTtcblxuZXhwb3J0IHtzaG93RGlhbG9nfTtcbiIsICI8c2NyaXB0IHNldHVwIGxhbmc9XCJ0c1wiPlxuaW1wb3J0IHtDZHhDaGVja2JveCwgQ2R4RGlhbG9nLCBDZHhGaWVsZCwgQ2R4U2VsZWN0LCBDZHhUZXh0QXJlYX0gZnJvbSAnQHdpa2ltZWRpYS9jb2RleCc7XG5pbXBvcnQge2FwcGx5Q29uZmlnLCBjb25maWd9IGZyb20gJy4vbW9kdWxlcy9ycmRDb25maWcnO1xuaW1wb3J0IHtjb21wdXRlZCwgcmVmLCB3YXRjaH0gZnJvbSAndnVlJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9tb2R1bGVzL2kxOG4nO1xuaW1wb3J0IHtpc1NwZWNpYWxMb2d9IGZyb20gJy4vbW9kdWxlcy9pc1NwZWNpYWxMb2cnO1xuaW1wb3J0IHtzdWJtaXR9IGZyb20gJy4vbW9kdWxlcy9zdWJtaXQnO1xuXG5jb25zdCBwcm9wcyA9IGRlZmluZVByb3BzPHtcblx0aWRzOiBzdHJpbmdbXTtcblx0b25DbG9zZTogKCkgPT4gdm9pZDtcbn0+KCk7XG5cbmNvbnN0IG9wZW4gPSByZWYodHJ1ZSk7XG5jb25zdCBoaWRlQ29udGVudCA9IHJlZihCb29sZWFuKGNvbmZpZy5jaGVja2JveGVzLnJyZEhpZGVDb250ZW50KSk7XG5jb25zdCBoaWRlVXNlcm5hbWUgPSByZWYoQm9vbGVhbihjb25maWcuY2hlY2tib3hlcy5ycmRIaWRlVXNlcm5hbWUpKTtcbmNvbnN0IGhpZGVTdW1tYXJ5ID0gcmVmKEJvb2xlYW4oY29uZmlnLmNoZWNrYm94ZXMucnJkSGlkZVN1bW1hcnkpKTtcbmNvbnN0IHJlYXNvbiA9IHJlZihjb25maWcub3RoZXJzLnJyZFJlYXNvbiA/PyAnJyk7XG5jb25zdCBvdGhlclJlYXNvbnMgPSByZWYoY29uZmlnLm90aGVycy5ycmRPdGhlclJlYXNvbnMgPz8gJycpO1xuXG5jb25zdCByZWFzb25JdGVtcyA9IGNvbXB1dGVkKCgpID0+IFtcblx0e3ZhbHVlOiBnZXRNZXNzYWdlKCdoaWRlUmVhc29uUkQxJyksIGxhYmVsOiBnZXRNZXNzYWdlKCdoaWRlUmVhc29uUkQxJyl9LFxuXHR7dmFsdWU6IGdldE1lc3NhZ2UoJ2hpZGVSZWFzb25SRDInKSwgbGFiZWw6IGdldE1lc3NhZ2UoJ2hpZGVSZWFzb25SRDInKX0sXG5cdHt2YWx1ZTogZ2V0TWVzc2FnZSgnaGlkZVJlYXNvblJEMycpLCBsYWJlbDogZ2V0TWVzc2FnZSgnaGlkZVJlYXNvblJEMycpfSxcblx0e3ZhbHVlOiBnZXRNZXNzYWdlKCdoaWRlUmVhc29uUkQ0JyksIGxhYmVsOiBnZXRNZXNzYWdlKCdoaWRlUmVhc29uUkQ0Jyl9LFxuXHR7dmFsdWU6IGdldE1lc3NhZ2UoJ2hpZGVSZWFzb25SRDUnKSwgbGFiZWw6IGdldE1lc3NhZ2UoJ2hpZGVSZWFzb25SRDUnKX0sXG5cdHt2YWx1ZTogZ2V0TWVzc2FnZSgnaGlkZVJlYXNvbk9TMScpLCBsYWJlbDogZ2V0TWVzc2FnZSgnaGlkZVJlYXNvbk9TMScpfSxcblx0e3ZhbHVlOiBnZXRNZXNzYWdlKCdoaWRlUmVhc29uT1MyJyksIGxhYmVsOiBnZXRNZXNzYWdlKCdoaWRlUmVhc29uT1MyJyl9LFxuXHR7dmFsdWU6IGdldE1lc3NhZ2UoJ2hpZGVSZWFzb25PUzMnKSwgbGFiZWw6IGdldE1lc3NhZ2UoJ2hpZGVSZWFzb25PUzMnKX0sXG5cdHt2YWx1ZTogZ2V0TWVzc2FnZSgnaGlkZVJlYXNvbk9TNCcpLCBsYWJlbDogZ2V0TWVzc2FnZSgnaGlkZVJlYXNvbk9TNCcpfSxcblx0e3ZhbHVlOiAnJywgbGFiZWw6IGdldE1lc3NhZ2UoJ2hpZGVSZWFzb25PdGhlcicpfSxcbl0pO1xuXG5jb25zdCBwcmltYXJ5QWN0aW9uID0gY29tcHV0ZWQoKCkgPT4gKHtcblx0bGFiZWw6IGdldE1lc3NhZ2UoJ2RpYWxvZ0J1dHRvblN1Ym1pdCcpLFxuXHRhY3Rpb25UeXBlOiAncHJvZ3Jlc3NpdmUnIGFzIGNvbnN0LFxufSkpO1xuXG5jb25zdCBkZWZhdWx0QWN0aW9uID0gY29tcHV0ZWQoKCkgPT4gKHtcblx0bGFiZWw6IGdldE1lc3NhZ2UoJ2RpYWxvZ0J1dHRvbkNhbmNlbCcpLFxufSkpO1xuXG53YXRjaChcblx0KCkgPT4gW2hpZGVDb250ZW50LnZhbHVlLCBoaWRlVXNlcm5hbWUudmFsdWUsIGhpZGVTdW1tYXJ5LnZhbHVlLCByZWFzb24udmFsdWUsIG90aGVyUmVhc29ucy52YWx1ZV0sXG5cdCgpID0+IHtcblx0XHRhcHBseUNvbmZpZyhcblx0XHRcdHtcblx0XHRcdFx0cnJkSGlkZUNvbnRlbnQ6IGhpZGVDb250ZW50LnZhbHVlID8/IGZhbHNlLFxuXHRcdFx0XHRycmRIaWRlVXNlcm5hbWU6IGhpZGVVc2VybmFtZS52YWx1ZSA/PyBmYWxzZSxcblx0XHRcdFx0cnJkSGlkZVN1bW1hcnk6IGhpZGVTdW1tYXJ5LnZhbHVlID8/IGZhbHNlLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0cnJkUmVhc29uOiByZWFzb24udmFsdWUgPz8gJycsXG5cdFx0XHRcdHJyZE90aGVyUmVhc29uczogb3RoZXJSZWFzb25zLnZhbHVlID8/ICcnLFxuXHRcdFx0fVxuXHRcdCk7XG5cdH0sXG5cdHtkZWVwOiB0cnVlfVxuKTtcblxuY29uc3Qgc3VibWl0RGlhbG9nID0gKCk6IHZvaWQgPT4ge1xuXHRjb25zdCBzaG91bGRIaWRlQ29udGVudCA9IGhpZGVDb250ZW50LnZhbHVlO1xuXHRjb25zdCBzaG91bGRIaWRlVXNlcm5hbWUgPSBoaWRlVXNlcm5hbWUudmFsdWU7XG5cdGNvbnN0IHNob3VsZEhpZGVTdW1tYXJ5ID0gaGlkZVN1bW1hcnkudmFsdWU7XG5cdGNvbnN0IHJyZFJlYXNvbiA9IHJlYXNvbi52YWx1ZSB8fCB1bmRlZmluZWQ7XG5cdGxldCBycmRPdGhlclJlYXNvbnMgPSBvdGhlclJlYXNvbnMudmFsdWUgfHwgdW5kZWZpbmVkO1xuXG5cdGlmIChycmRPdGhlclJlYXNvbnMgJiYgcnJkUmVhc29uKSB7XG5cdFx0cnJkT3RoZXJSZWFzb25zID0gYO+8jCR7cnJkT3RoZXJSZWFzb25zfWA7XG5cdH1cblxuXHRjb25zdCB0b0hpZGU6IHN0cmluZ1tdID0gW107XG5cdGlmIChzaG91bGRIaWRlQ29udGVudCkge1xuXHRcdHRvSGlkZS5wdXNoKGlzU3BlY2lhbExvZygpID8gZ2V0TWVzc2FnZSgnaGlkZUxvZycpIDogZ2V0TWVzc2FnZSgnaGlkZUNvbnRlbnQnKSk7XG5cdH1cblx0aWYgKHNob3VsZEhpZGVVc2VybmFtZSkge1xuXHRcdHRvSGlkZS5wdXNoKGdldE1lc3NhZ2UoJ2hpZGVVc2VybmFtZScpKTtcblx0fVxuXHRpZiAoc2hvdWxkSGlkZVN1bW1hcnkpIHtcblx0XHR0b0hpZGUucHVzaChnZXRNZXNzYWdlKCdoaWRlU3VtbWFyeScpKTtcblx0fVxuXG5cdGlmICghdG9IaWRlLmxlbmd0aCkge1xuXHRcdHZvaWQgbXcubm90aWZ5KGdldE1lc3NhZ2UoJ2Vyck5vSXRlbVByb3ZpZGVkJyksIHtcblx0XHRcdHRhZzogJ1JSRCcsXG5cdFx0XHR0eXBlOiAnZXJyb3InLFxuXHRcdH0pO1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGxldCBjb250ID0gdHJ1ZTtcblx0aWYgKCFycmRSZWFzb24gJiYgIXJyZE90aGVyUmVhc29ucykge1xuXHRcdGNvbnQgPSBjb25maXJtKGdldE1lc3NhZ2UoJ3dhcm5Ob1JlYXNvblByb3ZpZGVkJykpO1xuXHR9XG5cblx0aWYgKGNvbnQpIHtcblx0XHRvcGVuLnZhbHVlID0gZmFsc2U7XG5cdFx0dm9pZCBzdWJtaXQocHJvcHMuaWRzLCB0b0hpZGUuam9pbign44CBJyksIHJyZFJlYXNvbiA/PyAnJywgcnJkT3RoZXJSZWFzb25zID8/ICcnKTtcblx0XHRwcm9wcy5vbkNsb3NlKCk7XG5cdH1cbn07XG5cbmNvbnN0IGNsb3NlRGlhbG9nID0gKCk6IHZvaWQgPT4ge1xuXHRvcGVuLnZhbHVlID0gZmFsc2U7XG5cdGFwcGx5Q29uZmlnKFxuXHRcdHtcblx0XHRcdHJyZEhpZGVDb250ZW50OiBoaWRlQ29udGVudC52YWx1ZSA/PyBmYWxzZSxcblx0XHRcdHJyZEhpZGVVc2VybmFtZTogaGlkZVVzZXJuYW1lLnZhbHVlID8/IGZhbHNlLFxuXHRcdFx0cnJkSGlkZVN1bW1hcnk6IGhpZGVTdW1tYXJ5LnZhbHVlID8/IGZhbHNlLFxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0cnJkUmVhc29uOiByZWFzb24udmFsdWUgfHwgJycsXG5cdFx0XHRycmRPdGhlclJlYXNvbnM6IG90aGVyUmVhc29ucy52YWx1ZSB8fCAnJyxcblx0XHR9XG5cdCk7XG5cdHByb3BzLm9uQ2xvc2UoKTtcbn07XG48L3NjcmlwdD5cblxuPHRlbXBsYXRlPlxuXHQ8Y2R4LWRpYWxvZ1xuXHRcdHYtbW9kZWw6b3Blbj1cIm9wZW5cIlxuXHRcdDp0aXRsZT1cImdldE1lc3NhZ2UoJ2RpYWxvZ1RpdGxlJylcIlxuXHRcdDp1c2UtY2xvc2UtYnV0dG9uPVwidHJ1ZVwiXG5cdFx0OnByaW1hcnktYWN0aW9uPVwicHJpbWFyeUFjdGlvblwiXG5cdFx0OmRlZmF1bHQtYWN0aW9uPVwiZGVmYXVsdEFjdGlvblwiXG5cdFx0QHVwZGF0ZTpvcGVuPVwiJGV2ZW50ID09PSBmYWxzZSAmJiBjbG9zZURpYWxvZygpXCJcblx0XHRAcHJpbWFyeT1cInN1Ym1pdERpYWxvZ1wiXG5cdFx0QGRlZmF1bHQ9XCJjbG9zZURpYWxvZ1wiXG5cdD5cblx0XHQ8ZGl2IGNsYXNzPVwicnJkLWRpYWxvZ19fYm9keVwiPlxuXHRcdFx0PGRpdiBjbGFzcz1cInJyZC1kaWFsb2dfX3NlY3Rpb25cIj5cblx0XHRcdFx0PHA+e3sgZ2V0TWVzc2FnZSgnaGlkZUl0ZW1zJykgfX08L3A+XG5cdFx0XHRcdDxjZHgtZmllbGQ+XG5cdFx0XHRcdFx0PGNkeC1jaGVja2JveCB2LW1vZGVsPVwiaGlkZUNvbnRlbnRcIj5cblx0XHRcdFx0XHRcdHt7IGlzU3BlY2lhbExvZygpID8gZ2V0TWVzc2FnZSgnaGlkZUxvZycpIDogZ2V0TWVzc2FnZSgnaGlkZUNvbnRlbnQnKSB9fVxuXHRcdFx0XHRcdDwvY2R4LWNoZWNrYm94PlxuXHRcdFx0XHQ8L2NkeC1maWVsZD5cblx0XHRcdFx0PGNkeC1maWVsZD5cblx0XHRcdFx0XHQ8Y2R4LWNoZWNrYm94IHYtbW9kZWw9XCJoaWRlVXNlcm5hbWVcIj57eyBnZXRNZXNzYWdlKCdoaWRlVXNlcm5hbWUnKSB9fTwvY2R4LWNoZWNrYm94PlxuXHRcdFx0XHQ8L2NkeC1maWVsZD5cblx0XHRcdFx0PGNkeC1maWVsZD5cblx0XHRcdFx0XHQ8Y2R4LWNoZWNrYm94IHYtbW9kZWw9XCJoaWRlU3VtbWFyeVwiPnt7IGdldE1lc3NhZ2UoJ2hpZGVTdW1tYXJ5JykgfX08L2NkeC1jaGVja2JveD5cblx0XHRcdFx0PC9jZHgtZmllbGQ+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3M9XCJycmQtZGlhbG9nX19zZWN0aW9uXCI+XG5cdFx0XHRcdDxwPnt7IGdldE1lc3NhZ2UoJ2hpZGVSZWFzb24nKSB9fTwvcD5cblx0XHRcdFx0PGNkeC1maWVsZD5cblx0XHRcdFx0XHQ8Y2R4LXNlbGVjdCB2LW1vZGVsOnNlbGVjdGVkPVwicmVhc29uXCIgOm1lbnUtaXRlbXM9XCJyZWFzb25JdGVtc1wiIC8+XG5cdFx0XHRcdDwvY2R4LWZpZWxkPlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwicnJkLWRpYWxvZ19fc2VjdGlvblwiPlxuXHRcdFx0XHQ8cD57eyBnZXRNZXNzYWdlKCdvdGhlclJlYXNvbnMnKSB9fTwvcD5cblx0XHRcdFx0PGNkeC10ZXh0LWFyZWEgdi1tb2RlbD1cIm90aGVyUmVhc29uc1wiIHJvd3M9XCI0XCIgLz5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHQ8L2NkeC1kaWFsb2c+XG48L3RlbXBsYXRlPlxuXG48c3R5bGUgbGFuZz1cImxlc3NcIj5cbi5ycmQtZGlhbG9nX19ib2R5IHtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0Z2FwOiAwLjc1cmVtO1xuXHRtaW4td2lkdGg6IG1pbig5MHZ3LCAzMnJlbSk7XG59XG5cbi5ycmQtZGlhbG9nX19zZWN0aW9uIHtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0Z2FwOiAwLjVyZW07XG59XG5cbi5ycmQtZGlhbG9nX19zZWN0aW9uIHAge1xuXHRtYXJnaW46IDA7XG59XG48L3N0eWxlPlxuIiwgImltcG9ydCB0eXBlIHtScmRDb25maWd9IGZyb20gJy4vdHlwZXMnO1xuXG5jb25zdCBjb25maWc6IFJyZENvbmZpZyA9IHtcblx0Y2hlY2tib3hlczoge30sXG5cdG90aGVyczoge30sXG59O1xuXG5jb25zdCBhcHBseUNvbmZpZyA9IChjaGVja2JveGVzOiBScmRDb25maWdbJ2NoZWNrYm94ZXMnXSA9IHt9LCBvdGhlcnM6IFJyZENvbmZpZ1snb3RoZXJzJ10gPSB7fSk6IHZvaWQgPT4ge1xuXHRjb25maWcuY2hlY2tib3hlcyA9IGNoZWNrYm94ZXM7XG5cdGNvbmZpZy5vdGhlcnMgPSBvdGhlcnM7XG59O1xuXG5leHBvcnQge2FwcGx5Q29uZmlnLCBjb25maWd9O1xuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7aW5pdE13QXBpfSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG5jb25zdCBhcGk6IG13LkFwaSA9IGluaXRNd0FwaShgUlJELyR7T1BUSU9OUy52ZXJzaW9ufWApO1xuXG5leHBvcnQge2FwaX07XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHthcGl9IGZyb20gJy4vYXBpJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9pMThuJztcbmltcG9ydCB7dW5pcXVlQXJyYXl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmNvbnN0IHF1ZXJ5UmV2aXNpb25zID0gYXN5bmMgKHRpdGxlczogc3RyaW5nIHwgc3RyaW5nW10pID0+IHtcblx0Y29uc3QgcGFyYW1zOiBBcGlRdWVyeVJldmlzaW9uc1BhcmFtcyA9IHtcblx0XHR0aXRsZXMsXG5cdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRwcm9wOiAncmV2aXNpb25zJyxcblx0XHRydnByb3A6ICdjb250ZW50Jyxcblx0XHRydnNsb3RzOiAnbWFpbicsXG5cdH07XG5cdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXBpLmdldChwYXJhbXMpO1xuXG5cdHJldHVybiByZXNwb25zZTtcbn07XG5cbmNvbnN0IGVkaXQgPSBhc3luYyAodGl0bGU6IHN0cmluZywgdGV4dDogc3RyaW5nLCBzdW1tYXJ5Pzogc3RyaW5nKSA9PiB7XG5cdGNvbnN0IHBhcmFtczogQXBpRWRpdFBhZ2VQYXJhbXMgPSB7XG5cdFx0dGl0bGUsXG5cdFx0dGV4dCxcblx0XHRhY3Rpb246ICdlZGl0Jyxcblx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdH07XG5cdGlmIChzdW1tYXJ5KSB7XG5cdFx0cGFyYW1zLnN1bW1hcnkgPSBzdW1tYXJ5O1xuXHR9XG5cdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXBpLnBvc3RXaXRoRWRpdFRva2VuKHBhcmFtcyk7XG5cblx0cmV0dXJuIHJlc3BvbnNlO1xufTtcblxuY29uc3Qgc3VibWl0ID0gYXN5bmMgKGlkczogc3RyaW5nW10sIHRvSGlkZTogc3RyaW5nLCByZWFzb246IHN0cmluZywgb3RoZXJSZWFzb25zOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0Y29uc3Qge3dnUGFnZU5hbWV9ID0gbXcuY29uZmlnLmdldCgpO1xuXG5cdGZvciAoY29uc3QgUkRpZCBvZiBbMSwgMiwgMywgNCwgNV0pIHtcblx0XHRpZiAocmVhc29uLmluY2x1ZGVzKGBSRCR7UkRpZH1gKSkge1xuXHRcdFx0cmVhc29uID0gYFJEJHtSRGlkfWA7XG5cdFx0XHRicmVhaztcblx0XHR9XG5cdH1cblxuXHRmb3IgKGNvbnN0IE9TaWQgb2YgWzEsIDIsIDMsIDRdKSB7XG5cdFx0aWYgKHJlYXNvbi5pbmNsdWRlcyhgT1Mke09TaWR9YCkpIHtcblx0XHRcdHJlYXNvbiA9IGBPUyR7T1NpZH1gO1xuXHRcdFx0YnJlYWs7XG5cdFx0fVxuXHR9XG5cblx0Y29uc3QgcnJkQXJyOiBzdHJpbmdbXSA9IFtcblx0XHQne3tSZXZkZWwnLFxuXHRcdCd8c3RhdHVzID0gJyxcblx0XHRgfGFydGljbGUgPSAke3dnUGFnZU5hbWV9YCxcblx0XHRgfHNldCA9ICR7dG9IaWRlfWAsXG5cdFx0YHxyZWFzb24gPSAke3JlYXNvbn0ke290aGVyUmVhc29uc31gLFxuXHRdO1xuXG5cdGZvciAoY29uc3QgW2luZGV4LCBpZF0gb2YgdW5pcXVlQXJyYXkoaWRzKS5lbnRyaWVzKCkpIHtcblx0XHQvLyBSZXBsYWNlIFNldCB3aXRoIHVuaXF1ZUFycmF5LCBhdm9pZGluZyBjb3JlLWpzIHBvbHlmaWxsaW5nXG5cdFx0cnJkQXJyW3JyZEFyci5sZW5ndGhdID0gYHxpZCR7aW5kZXggKyAxfSA9ICR7aWR9YDtcblx0fVxuXHRycmRBcnJbcnJkQXJyLmxlbmd0aF0gPSAnfX1cXG7igJTigJR+ficuY29uY2F0KCd+ficpO1xuXG5cdHRyeSB7XG5cdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBxdWVyeVJldmlzaW9ucyhPUFRJT05TLnJyZFBhZ2UpO1xuXG5cdFx0bGV0IGNvbnRlbnQ6IHN0cmluZyB8IHVuZGVmaW5lZDtcblx0XHRpZiAocmVzcG9uc2VbJ3F1ZXJ5J10/LnBhZ2VzKSB7XG5cdFx0XHRjb250ZW50ID0gcmVzcG9uc2VbJ3F1ZXJ5J10ucGFnZXNbMF0ucmV2aXNpb25zWzBdLnNsb3RzLm1haW4uY29udGVudCBhcyBzdHJpbmc7XG5cdFx0fVxuXG5cdFx0aWYgKGNvbnRlbnQgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dm9pZCBtdy5ub3RpZnkoYEVycm9yIHdoZW4gbG9hZGluZyBwYWdlICR7T1BUSU9OUy5ycmRQYWdlfTogbWlzc2luZ2AsIHtcblx0XHRcdFx0dGFnOiAnUlJEJyxcblx0XHRcdFx0dHlwZTogJ2Vycm9yJyxcblx0XHRcdH0pO1xuXG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IHJlc3VsdCA9IGF3YWl0IGVkaXQoT1BUSU9OUy5ycmRQYWdlLCBgJHtjb250ZW50fVxcblxcbiR7cnJkQXJyLmpvaW4oJ1xcbicpfWAsIGdldE1lc3NhZ2UoJ2VkaXRTdW1tYXJ5JykpO1xuXG5cdFx0XHRpZiAocmVzdWx0WydlZGl0J10/LnJlc3VsdCA9PT0gJ1N1Y2Nlc3MnKSB7XG5cdFx0XHRcdGxvY2F0aW9uLnJlcGxhY2UobXcudXRpbC5nZXRVcmwoT1BUSU9OUy5ycmRQYWdlKSk7XG5cdFx0XHR9IGVsc2UgaWYgKHJlc3VsdFsnZXJyb3InXT8uY29kZSkge1xuXHRcdFx0XHR2b2lkIG13Lm5vdGlmeShgU29tZSBlcnJvcnMgb2NjdXJlZCB3aGlsZSBzYXZpbmcgcGFnZTogJHtyZXN1bHRbJ2Vycm9yJ10uY29kZX1gLCB7XG5cdFx0XHRcdFx0dGFnOiAnUlJEJyxcblx0XHRcdFx0XHR0eXBlOiAnZXJyb3InLFxuXHRcdFx0XHR9KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHZvaWQgbXcubm90aWZ5KCdTb21lIGVycm9ycyBvY2N1cmVkIHdoaWxlIHNhdmluZyBwYWdlOiB1bmtub3duJywge1xuXHRcdFx0XHRcdHRhZzogJ1JSRCcsXG5cdFx0XHRcdFx0dHlwZTogJ2Vycm9yJyxcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fSBjYXRjaCB7XG5cdFx0XHR2b2lkIG13Lm5vdGlmeShgRXJyb3Igd2hlbiBlZGl0aW5nIHBhZ2UgJHtPUFRJT05TLnJyZFBhZ2V9YCwge3RhZzogJ1JSRCcsIHR5cGU6ICdlcnJvcid9KTtcblx0XHR9XG5cdH0gY2F0Y2gge1xuXHRcdHZvaWQgbXcubm90aWZ5KGBFcnJvciB3aGVuIGxvYWRpbmcgcGFnZSAke09QVElPTlMucnJkUGFnZX1gLCB7dGFnOiAnUlJEJywgdHlwZTogJ2Vycm9yJ30pO1xuXHR9XG59O1xuXG5leHBvcnQge3N1Ym1pdH07XG4iLCAiaW1wb3J0IHsgdG9EaXNwbGF5U3RyaW5nIGFzIF90b0Rpc3BsYXlTdHJpbmcsIGNyZWF0ZUVsZW1lbnRWTm9kZSBhcyBfY3JlYXRlRWxlbWVudFZOb2RlLCBjcmVhdGVUZXh0Vk5vZGUgYXMgX2NyZWF0ZVRleHRWTm9kZSwgd2l0aEN0eCBhcyBfd2l0aEN0eCwgY3JlYXRlVk5vZGUgYXMgX2NyZWF0ZVZOb2RlLCBvcGVuQmxvY2sgYXMgX29wZW5CbG9jaywgY3JlYXRlQmxvY2sgYXMgX2NyZWF0ZUJsb2NrIH0gZnJvbSBcInZ1ZVwiXG5cbmNvbnN0IF9ob2lzdGVkXzEgPSB7IGNsYXNzOiBcInJyZC1kaWFsb2dfX2JvZHlcIiB9XG5jb25zdCBfaG9pc3RlZF8yID0geyBjbGFzczogXCJycmQtZGlhbG9nX19zZWN0aW9uXCIgfVxuY29uc3QgX2hvaXN0ZWRfMyA9IHsgY2xhc3M6IFwicnJkLWRpYWxvZ19fc2VjdGlvblwiIH1cbmNvbnN0IF9ob2lzdGVkXzQgPSB7IGNsYXNzOiBcInJyZC1kaWFsb2dfX3NlY3Rpb25cIiB9XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXIoX2N0eCwgX2NhY2hlLCAkcHJvcHMsICRzZXR1cCwgJGRhdGEsICRvcHRpb25zKSB7XG4gIHJldHVybiAoX29wZW5CbG9jaygpLCBfY3JlYXRlQmxvY2soJHNldHVwW1wiQ2R4RGlhbG9nXCJdLCB7XG4gICAgb3BlbjogJHNldHVwLm9wZW4sXG4gICAgXCJvblVwZGF0ZTpvcGVuXCI6IFtcbiAgICAgIF9jYWNoZVs1XSB8fCAoX2NhY2hlWzVdID0gJGV2ZW50ID0+ICgoJHNldHVwLm9wZW4pID0gJGV2ZW50KSksXG4gICAgICBfY2FjaGVbNl0gfHwgKF9jYWNoZVs2XSA9ICRldmVudCA9PiAoJGV2ZW50ID09PSBmYWxzZSAmJiAkc2V0dXAuY2xvc2VEaWFsb2coKSkpXG4gICAgXSxcbiAgICB0aXRsZTogJHNldHVwLmdldE1lc3NhZ2UoJ2RpYWxvZ1RpdGxlJyksXG4gICAgXCJ1c2UtY2xvc2UtYnV0dG9uXCI6IHRydWUsXG4gICAgXCJwcmltYXJ5LWFjdGlvblwiOiAkc2V0dXAucHJpbWFyeUFjdGlvbixcbiAgICBcImRlZmF1bHQtYWN0aW9uXCI6ICRzZXR1cC5kZWZhdWx0QWN0aW9uLFxuICAgIG9uUHJpbWFyeTogJHNldHVwLnN1Ym1pdERpYWxvZyxcbiAgICBvbkRlZmF1bHQ6ICRzZXR1cC5jbG9zZURpYWxvZ1xuICB9LCB7XG4gICAgZGVmYXVsdDogX3dpdGhDdHgoKCkgPT4gW1xuICAgICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcImRpdlwiLCBfaG9pc3RlZF8xLCBbXG4gICAgICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJkaXZcIiwgX2hvaXN0ZWRfMiwgW1xuICAgICAgICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJwXCIsIG51bGwsIF90b0Rpc3BsYXlTdHJpbmcoJHNldHVwLmdldE1lc3NhZ2UoJ2hpZGVJdGVtcycpKSwgMSAvKiBURVhUICovKSxcbiAgICAgICAgICBfY3JlYXRlVk5vZGUoJHNldHVwW1wiQ2R4RmllbGRcIl0sIG51bGwsIHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IF93aXRoQ3R4KCgpID0+IFtcbiAgICAgICAgICAgICAgX2NyZWF0ZVZOb2RlKCRzZXR1cFtcIkNkeENoZWNrYm94XCJdLCB7XG4gICAgICAgICAgICAgICAgbW9kZWxWYWx1ZTogJHNldHVwLmhpZGVDb250ZW50LFxuICAgICAgICAgICAgICAgIFwib25VcGRhdGU6bW9kZWxWYWx1ZVwiOiBfY2FjaGVbMF0gfHwgKF9jYWNoZVswXSA9ICRldmVudCA9PiAoKCRzZXR1cC5oaWRlQ29udGVudCkgPSAkZXZlbnQpKVxuICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDogX3dpdGhDdHgoKCkgPT4gW1xuICAgICAgICAgICAgICAgICAgX2NyZWF0ZVRleHRWTm9kZShfdG9EaXNwbGF5U3RyaW5nKCRzZXR1cC5pc1NwZWNpYWxMb2coKSA/ICRzZXR1cC5nZXRNZXNzYWdlKCdoaWRlTG9nJykgOiAkc2V0dXAuZ2V0TWVzc2FnZSgnaGlkZUNvbnRlbnQnKSksIDEgLyogVEVYVCAqLylcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBfOiAxIC8qIFNUQUJMRSAqL1xuICAgICAgICAgICAgICB9LCA4IC8qIFBST1BTICovLCBbXCJtb2RlbFZhbHVlXCJdKVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfOiAxIC8qIFNUQUJMRSAqL1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIF9jcmVhdGVWTm9kZSgkc2V0dXBbXCJDZHhGaWVsZFwiXSwgbnVsbCwge1xuICAgICAgICAgICAgZGVmYXVsdDogX3dpdGhDdHgoKCkgPT4gW1xuICAgICAgICAgICAgICBfY3JlYXRlVk5vZGUoJHNldHVwW1wiQ2R4Q2hlY2tib3hcIl0sIHtcbiAgICAgICAgICAgICAgICBtb2RlbFZhbHVlOiAkc2V0dXAuaGlkZVVzZXJuYW1lLFxuICAgICAgICAgICAgICAgIFwib25VcGRhdGU6bW9kZWxWYWx1ZVwiOiBfY2FjaGVbMV0gfHwgKF9jYWNoZVsxXSA9ICRldmVudCA9PiAoKCRzZXR1cC5oaWRlVXNlcm5hbWUpID0gJGV2ZW50KSlcbiAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IF93aXRoQ3R4KCgpID0+IFtcbiAgICAgICAgICAgICAgICAgIF9jcmVhdGVUZXh0Vk5vZGUoX3RvRGlzcGxheVN0cmluZygkc2V0dXAuZ2V0TWVzc2FnZSgnaGlkZVVzZXJuYW1lJykpLCAxIC8qIFRFWFQgKi8pXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgXzogMSAvKiBTVEFCTEUgKi9cbiAgICAgICAgICAgICAgfSwgOCAvKiBQUk9QUyAqLywgW1wibW9kZWxWYWx1ZVwiXSlcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgXzogMSAvKiBTVEFCTEUgKi9cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfY3JlYXRlVk5vZGUoJHNldHVwW1wiQ2R4RmllbGRcIl0sIG51bGwsIHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IF93aXRoQ3R4KCgpID0+IFtcbiAgICAgICAgICAgICAgX2NyZWF0ZVZOb2RlKCRzZXR1cFtcIkNkeENoZWNrYm94XCJdLCB7XG4gICAgICAgICAgICAgICAgbW9kZWxWYWx1ZTogJHNldHVwLmhpZGVTdW1tYXJ5LFxuICAgICAgICAgICAgICAgIFwib25VcGRhdGU6bW9kZWxWYWx1ZVwiOiBfY2FjaGVbMl0gfHwgKF9jYWNoZVsyXSA9ICRldmVudCA9PiAoKCRzZXR1cC5oaWRlU3VtbWFyeSkgPSAkZXZlbnQpKVxuICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDogX3dpdGhDdHgoKCkgPT4gW1xuICAgICAgICAgICAgICAgICAgX2NyZWF0ZVRleHRWTm9kZShfdG9EaXNwbGF5U3RyaW5nKCRzZXR1cC5nZXRNZXNzYWdlKCdoaWRlU3VtbWFyeScpKSwgMSAvKiBURVhUICovKVxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF86IDEgLyogU1RBQkxFICovXG4gICAgICAgICAgICAgIH0sIDggLyogUFJPUFMgKi8sIFtcIm1vZGVsVmFsdWVcIl0pXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF86IDEgLyogU1RBQkxFICovXG4gICAgICAgICAgfSlcbiAgICAgICAgXSksXG4gICAgICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJkaXZcIiwgX2hvaXN0ZWRfMywgW1xuICAgICAgICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJwXCIsIG51bGwsIF90b0Rpc3BsYXlTdHJpbmcoJHNldHVwLmdldE1lc3NhZ2UoJ2hpZGVSZWFzb24nKSksIDEgLyogVEVYVCAqLyksXG4gICAgICAgICAgX2NyZWF0ZVZOb2RlKCRzZXR1cFtcIkNkeEZpZWxkXCJdLCBudWxsLCB7XG4gICAgICAgICAgICBkZWZhdWx0OiBfd2l0aEN0eCgoKSA9PiBbXG4gICAgICAgICAgICAgIF9jcmVhdGVWTm9kZSgkc2V0dXBbXCJDZHhTZWxlY3RcIl0sIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RlZDogJHNldHVwLnJlYXNvbixcbiAgICAgICAgICAgICAgICBcIm9uVXBkYXRlOnNlbGVjdGVkXCI6IF9jYWNoZVszXSB8fCAoX2NhY2hlWzNdID0gJGV2ZW50ID0+ICgoJHNldHVwLnJlYXNvbikgPSAkZXZlbnQpKSxcbiAgICAgICAgICAgICAgICBcIm1lbnUtaXRlbXNcIjogJHNldHVwLnJlYXNvbkl0ZW1zXG4gICAgICAgICAgICAgIH0sIG51bGwsIDggLyogUFJPUFMgKi8sIFtcInNlbGVjdGVkXCIsIFwibWVudS1pdGVtc1wiXSlcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgXzogMSAvKiBTVEFCTEUgKi9cbiAgICAgICAgICB9KVxuICAgICAgICBdKSxcbiAgICAgICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcImRpdlwiLCBfaG9pc3RlZF80LCBbXG4gICAgICAgICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcInBcIiwgbnVsbCwgX3RvRGlzcGxheVN0cmluZygkc2V0dXAuZ2V0TWVzc2FnZSgnb3RoZXJSZWFzb25zJykpLCAxIC8qIFRFWFQgKi8pLFxuICAgICAgICAgIF9jcmVhdGVWTm9kZSgkc2V0dXBbXCJDZHhUZXh0QXJlYVwiXSwge1xuICAgICAgICAgICAgbW9kZWxWYWx1ZTogJHNldHVwLm90aGVyUmVhc29ucyxcbiAgICAgICAgICAgIFwib25VcGRhdGU6bW9kZWxWYWx1ZVwiOiBfY2FjaGVbNF0gfHwgKF9jYWNoZVs0XSA9ICRldmVudCA9PiAoKCRzZXR1cC5vdGhlclJlYXNvbnMpID0gJGV2ZW50KSksXG4gICAgICAgICAgICByb3dzOiBcIjRcIlxuICAgICAgICAgIH0sIG51bGwsIDggLyogUFJPUFMgKi8sIFtcIm1vZGVsVmFsdWVcIl0pXG4gICAgICAgIF0pXG4gICAgICBdKVxuICAgIF0pLFxuICAgIF86IDEgLyogU1RBQkxFICovXG4gIH0sIDggLyogUFJPUFMgKi8sIFtcIm9wZW5cIiwgXCJ0aXRsZVwiLCBcInByaW1hcnktYWN0aW9uXCIsIFwiZGVmYXVsdC1hY3Rpb25cIl0pKVxufSIsICJpbXBvcnQgc2NyaXB0IGZyb20gXCJEOlxcXFxHaXRSZXBvc2l0b3J5XFxcXFFpdXdlbkdhZGdldHNcXFxcc3JjXFxcXFJSRFxcXFxBcHAudnVlP3R5cGU9c2NyaXB0XCI7aW1wb3J0IFwiRDpcXFxcR2l0UmVwb3NpdG9yeVxcXFxRaXV3ZW5HYWRnZXRzXFxcXHNyY1xcXFxSUkRcXFxcQXBwLnZ1ZT90eXBlPXN0eWxlJmluZGV4PTBcIjtpbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwiRDpcXFxcR2l0UmVwb3NpdG9yeVxcXFxRaXV3ZW5HYWRnZXRzXFxcXHNyY1xcXFxSUkRcXFxcQXBwLnZ1ZT90eXBlPXRlbXBsYXRlXCI7IHNjcmlwdC5yZW5kZXIgPSByZW5kZXI7c2NyaXB0Ll9fZmlsZSA9IFwic3JjXFxcXFJSRFxcXFxBcHAudnVlXCI7ZXhwb3J0IGRlZmF1bHQgc2NyaXB0OyIsICJjb25zdCBsb2FkSWRzID0gKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHN0cmluZ1tdID0+IHtcblx0Y29uc3QgaWRzOiBzdHJpbmdbXSA9IFtdO1xuXG5cdGNvbnN0IGJveGVzOiBKUXVlcnk8SFRNTElucHV0RWxlbWVudD4gPSAkYm9keS5maW5kKCdpbnB1dCcpO1xuXHRmb3IgKGNvbnN0IGJveCBvZiBib3hlcykge1xuXHRcdGNvbnN0IHtjaGVja2VkLCBuYW1lLCB0eXBlfSA9IGJveDtcblxuXHRcdGlmICh0eXBlICE9PSAnY2hlY2tib3gnIHx8ICFjaGVja2VkKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRjb25zdCBpZFJlZ2V4OiBSZWdFeHAgPSAvaWRzXFxbKFxcZCspXS87XG5cdFx0Y29uc3QgaWRBcnJheTogUmVnRXhwRXhlY0FycmF5IHwgbnVsbCA9IGlkUmVnZXguZXhlYyhuYW1lKTtcblx0XHRpZiAoaWRBcnJheT8uWzFdID09PSB1bmRlZmluZWQpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdFssIGlkc1tpZHMubGVuZ3RoXV0gPSBpZEFycmF5O1xuXHR9XG5cblx0cmV0dXJuIGlkcztcbn07XG5cbmV4cG9ydCB7bG9hZElkc307XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxxQkFBc0JDLFFBQUEsaUJBQUE7O0FDQ3JCLElBQUFDLFVBQVc7QUFDWCxJQUFBQyxVQUFXOztBQ0ZaLElBQU1DLGtCQUFrQkEsTUFBTTtBQUM3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LE1BQUEsR0FBS3ROLG1CQUFBK04sU0FBUSxFQUFFQyxLQUFLLFNBQVNDLElBQUl2QixPQUFzQztBQUN0RSxRQUFNO0lBQUN3QjtJQUFVNUw7RUFBMEIsSUFBSUMsR0FBR0MsT0FBT0MsSUFBSTtBQUU3RCxNQUFJeUwsYUFBYSxhQUFhNUwsK0JBQStCLE9BQU87QUFBQSxRQUFBNkwsYUFBQS9ILDJCQUM3Q3NHLE1BQU1FLEtBQzNCLENBQ0MsNERBQ0EseURBQUEsRUFDQzdKLEtBQUssR0FBRyxDQUNYLENBQUEsR0FBQXFMO0FBQUEsUUFBQTtBQUxBLFdBQUFELFdBQUEzSCxFQUFBLEdBQUEsRUFBQTRILFNBQUFELFdBQUExSCxFQUFBLEdBQUFDLFFBS0c7QUFBQSxjQUxRMkgsVUFBQUQsT0FBQXZIO0FBTVYsY0FBTXlILGdCQUFnQjVMLGFBQWE2TCxVQUFVLElBQUk7QUFDakRGLGdCQUFRRyxNQUFNRixhQUFhO0FBQzNCQSxzQkFBY0csaUJBQWlCLFNBQVMsTUFBTTtBQUM3Q2YscUJBQVdoQixLQUFLO1FBQ2pCLENBQUM7TUFDRjtJQUFBLFNBQUE1RixLQUFBO0FBQUFxSCxpQkFBQXBILEVBQUFELEdBQUE7SUFBQSxVQUFBO0FBQUFxSCxpQkFBQW5ILEVBQUE7SUFBQTtFQUNEO0FBQ0QsQ0FBQzsiLAogICJuYW1lcyI6IFsiaW1wb3J0X2V4dF9nYWRnZXQzIiwgInJlcXVpcmUiLCAicnJkUGFnZSIsICJ2ZXJzaW9uIiwgImdldEkxOG5NZXNzYWdlcyIsICJ3Z1VMUyIsICJ3aW5kb3ciLCAiZWRpdFN1bW1hcnkiLCAiZXJyTm9SZXZpc2lvblByb3ZpZGVkIiwgImVyck5vSXRlbVByb3ZpZGVkIiwgIndhcm5Ob1JlYXNvblByb3ZpZGVkIiwgImhpZGVJdGVtcyIsICJoaWRlQ29udGVudCIsICJoaWRlTG9nIiwgImhpZGVVc2VybmFtZSIsICJoaWRlU3VtbWFyeSIsICJoaWRlUmVhc29uIiwgImhpZGVSZWFzb25SRDEiLCAiaGlkZVJlYXNvblJEMiIsICJoaWRlUmVhc29uUkQzIiwgImhpZGVSZWFzb25SRDQiLCAiaGlkZVJlYXNvblJENSIsICJoaWRlUmVhc29uT1MxIiwgImhpZGVSZWFzb25PUzIiLCAiaGlkZVJlYXNvbk9TMyIsICJoaWRlUmVhc29uT1M0IiwgImhpZGVSZWFzb25PdGhlciIsICJvdGhlclJlYXNvbnMiLCAiZGlhbG9nVGl0bGUiLCAiZGlhbG9nQnV0dG9uU3VibWl0IiwgImRpYWxvZ0J1dHRvbkNhbmNlbCIsICJyZXBvcnRCdXR0b25UaXRsZSIsICJyZXBvcnRCdXR0b25UZXh0IiwgInJlcG9ydEJ1dHRvbkxvZ1RleHQiLCAiaTE4bk1lc3NhZ2VzIiwgImdldE1lc3NhZ2UiLCAia2V5IiwgImlzU3BlY2lhbExvZyIsICJ3Z0Nhbm9uaWNhbFNwZWNpYWxQYWdlTmFtZSIsICJtdyIsICJjb25maWciLCAiZ2V0IiwgInJlcG9ydEJ1dHRvbiIsICJkb2N1bWVudCIsICJjcmVhdGVFbGVtZW50IiwgInR5cGUiLCAiY2xhc3NOYW1lIiwgImpvaW4iLCAidGl0bGUiLCAiaW5uZXJUZXh0IiwgImltcG9ydF92dWU0IiwgImltcG9ydF9jb2RleCIsICJjaGVja2JveGVzIiwgIm90aGVycyIsICJhcHBseUNvbmZpZyIsICJpbXBvcnRfdnVlMiIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJhcGkiLCAiaW5pdE13QXBpIiwgImNvbmNhdCIsICJpbXBvcnRfZXh0X2dhZGdldDIiLCAicXVlcnlSZXZpc2lvbnMiLCAiX3JlZiIsICJfYXN5bmNUb0dlbmVyYXRvciIsICJ0aXRsZXMiLCAicGFyYW1zIiwgImFjdGlvbiIsICJmb3JtYXQiLCAiZm9ybWF0dmVyc2lvbiIsICJwcm9wIiwgInJ2cHJvcCIsICJydnNsb3RzIiwgInJlc3BvbnNlIiwgIl94IiwgImFwcGx5IiwgImFyZ3VtZW50cyIsICJlZGl0IiwgIl9yZWYyIiwgInRleHQiLCAic3VtbWFyeSIsICJwb3N0V2l0aEVkaXRUb2tlbiIsICJfeDIiLCAiX3gzIiwgIl94NCIsICJzdWJtaXQiLCAiX3JlZjMiLCAiaWRzIiwgInRvSGlkZSIsICJyZWFzb24iLCAid2dQYWdlTmFtZSIsICJfaSIsICJfYXJyIiwgImxlbmd0aCIsICJSRGlkIiwgImluY2x1ZGVzIiwgIl9pMiIsICJfYXJyMiIsICJPU2lkIiwgInJyZEFyciIsICJfaXRlcmF0b3IiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAidW5pcXVlQXJyYXkiLCAiZW50cmllcyIsICJfc3RlcCIsICJzIiwgIm4iLCAiZG9uZSIsICJpbmRleCIsICJpZCIsICJ2YWx1ZSIsICJlcnIiLCAiZSIsICJmIiwgIl9yZXNwb25zZSRxdWVyeSIsICJjb250ZW50IiwgInBhZ2VzIiwgInJldmlzaW9ucyIsICJzbG90cyIsICJtYWluIiwgIm5vdGlmeSIsICJ0YWciLCAiX3Jlc3VsdCRlZGl0IiwgIl9yZXN1bHQkZXJyb3IiLCAicmVzdWx0IiwgImxvY2F0aW9uIiwgInJlcGxhY2UiLCAidXRpbCIsICJnZXRVcmwiLCAiY29kZSIsICJfeDUiLCAiX3g2IiwgIl94NyIsICJfeDgiLCAicHJvcHMiLCAiX19wcm9wcyIsICJvcGVuIiwgInJlZiIsICJCb29sZWFuIiwgInJyZEhpZGVDb250ZW50IiwgInJyZEhpZGVVc2VybmFtZSIsICJycmRIaWRlU3VtbWFyeSIsICJfY29uZmlnJG90aGVycyRycmRSZWEiLCAicnJkUmVhc29uIiwgIl9jb25maWckb3RoZXJzJHJyZE90aCIsICJycmRPdGhlclJlYXNvbnMiLCAicmVhc29uSXRlbXMiLCAiY29tcHV0ZWQiLCAibGFiZWwiLCAicHJpbWFyeUFjdGlvbiIsICJhY3Rpb25UeXBlIiwgImRlZmF1bHRBY3Rpb24iLCAid2F0Y2giLCAiX2hpZGVDb250ZW50JHZhbHVlIiwgIl9oaWRlVXNlcm5hbWUkdmFsdWUiLCAiX2hpZGVTdW1tYXJ5JHZhbHVlIiwgIl9yZWFzb24kdmFsdWUiLCAiX290aGVyUmVhc29ucyR2YWx1ZSIsICJkZWVwIiwgInN1Ym1pdERpYWxvZyIsICJzaG91bGRIaWRlQ29udGVudCIsICJzaG91bGRIaWRlVXNlcm5hbWUiLCAic2hvdWxkSGlkZVN1bW1hcnkiLCAicHVzaCIsICJjb250IiwgImNvbmZpcm0iLCAib25DbG9zZSIsICJjbG9zZURpYWxvZyIsICJfaGlkZUNvbnRlbnQkdmFsdWUyIiwgIl9oaWRlVXNlcm5hbWUkdmFsdWUyIiwgIl9oaWRlU3VtbWFyeSR2YWx1ZTIiLCAiaW1wb3J0X3Z1ZTMiLCAiX2hvaXN0ZWRfMSIsICJjbGFzcyIsICJfaG9pc3RlZF8yIiwgIl9ob2lzdGVkXzMiLCAiX2hvaXN0ZWRfNCIsICJyZW5kZXIiLCAiX2N0eCIsICJfY2FjaGUiLCAiJHByb3BzIiwgIiRzZXR1cCIsICIkZGF0YSIsICIkb3B0aW9ucyIsICJvcGVuQmxvY2siLCAiY3JlYXRlQmxvY2siLCAiJGV2ZW50IiwgIm9uUHJpbWFyeSIsICJvbkRlZmF1bHQiLCAiZGVmYXVsdCIsICJ3aXRoQ3R4IiwgImNyZWF0ZUVsZW1lbnRWTm9kZSIsICJ0b0Rpc3BsYXlTdHJpbmciLCAiY3JlYXRlVk5vZGUiLCAibW9kZWxWYWx1ZSIsICJjcmVhdGVUZXh0Vk5vZGUiLCAiXyIsICJzZWxlY3RlZCIsICJyb3dzIiwgIkFwcF9kZWZhdWx0IiwgIl9fZmlsZSIsICJBcHBfZGVmYXVsdDIiLCAibG9hZElkcyIsICIkYm9keSIsICJib3hlcyIsICJmaW5kIiwgIl9pdGVyYXRvcjIiLCAiX3N0ZXAyIiwgImJveCIsICJjaGVja2VkIiwgIm5hbWUiLCAiaWRSZWdleCIsICJpZEFycmF5IiwgImV4ZWMiLCAiYXBwIiwgInJvb3QiLCAiZGlzcG9zZURpYWxvZyIsICJ1bm1vdW50IiwgInJlbW92ZSIsICJzaG93RGlhbG9nIiwgImJvZHkiLCAiYXBwZW5kIiwgImNyZWF0ZUFwcCIsICJtb3VudCIsICJnZXRCb2R5IiwgInRoZW4iLCAicnJkIiwgIndnQWN0aW9uIiwgIl9pdGVyYXRvcjMiLCAiX3N0ZXAzIiwgImVsZW1lbnQiLCAiYXBwZW5kRWxlbWVudCIsICJjbG9uZU5vZGUiLCAiYWZ0ZXIiLCAiYWRkRXZlbnRMaXN0ZW5lciJdCn0K

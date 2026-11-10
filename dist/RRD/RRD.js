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
var api = (0, import_ext_gadget.initMwApi)(`RRD/${version}`);
//! src/RRD/modules/submit.ts
var import_ext_gadget2 = require("ext.gadget.Util");
var queryRevisions = async (titles) => {
  const params = {
    titles,
    action: "query",
    format: "json",
    formatversion: "2",
    prop: "revisions",
    rvprop: "content",
    rvslots: "main"
  };
  const response = await api.get(params);
  return response;
};
var edit = async (title, text, summary) => {
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
  const response = await api.postWithEditToken(params);
  return response;
};
var submit = async (ids, toHide, reason, otherReasons) => {
  const {
    wgPageName
  } = mw.config.get();
  for (const RDid of [1, 2, 3, 4, 5]) {
    if (reason.includes(`RD${RDid}`)) {
      reason = `RD${RDid}`;
      break;
    }
  }
  for (const OSid of [1, 2, 3, 4]) {
    if (reason.includes(`OS${OSid}`)) {
      reason = `OS${OSid}`;
      break;
    }
  }
  const rrdArr = ["{{Revdel", "|status = ", `|article = ${wgPageName}`, `|set = ${toHide}`, `|reason = ${reason}${otherReasons}`];
  for (const [index, id] of (0, import_ext_gadget2.uniqueArray)(ids).entries()) {
    rrdArr[rrdArr.length] = `|id${index + 1} = ${id}`;
  }
  rrdArr[rrdArr.length] = "}}\n——~~".concat("~~");
  try {
    var _response$query;
    const response = await queryRevisions(rrdPage);
    let content;
    if ((_response$query = response["query"]) !== null && _response$query !== void 0 && _response$query.pages) {
      content = response["query"].pages[0].revisions[0].slots.main.content;
    }
    if (content === void 0) {
      void mw.notify(`Error when loading page ${rrdPage}: missing`, {
        tag: "RRD",
        type: "error"
      });
      return;
    }
    try {
      var _result$edit, _result$error;
      const result = await edit(rrdPage, `${content}

${rrdArr.join("\n")}`, getMessage("editSummary"));
      if (((_result$edit = result["edit"]) === null || _result$edit === void 0 ? void 0 : _result$edit.result) === "Success") {
        location.replace(mw.util.getUrl(rrdPage));
      } else if ((_result$error = result["error"]) !== null && _result$error !== void 0 && _result$error.code) {
        void mw.notify(`Some errors occured while saving page: ${result["error"].code}`, {
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
      void mw.notify(`Error when editing page ${rrdPage}`, {
        tag: "RRD",
        type: "error"
      });
    }
  } catch {
    void mw.notify(`Error when loading page ${rrdPage}`, {
      tag: "RRD",
      type: "error"
    });
  }
};
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
    __expose();
    const props = __props;
    const open = (0, import_vue5.ref)(true);
    const hideContent = (0, import_vue5.ref)(Boolean(config.checkboxes.rrdHideContent));
    const hideUsername = (0, import_vue5.ref)(Boolean(config.checkboxes.rrdHideUsername));
    const hideSummary = (0, import_vue5.ref)(Boolean(config.checkboxes.rrdHideSummary));
    const reason = (0, import_vue5.ref)(config.others.rrdReason ?? "");
    const otherReasons = (0, import_vue5.ref)(config.others.rrdOtherReasons ?? "");
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
      applyConfig({
        rrdHideContent: hideContent.value ?? false,
        rrdHideUsername: hideUsername.value ?? false,
        rrdHideSummary: hideSummary.value ?? false
      }, {
        rrdReason: reason.value ?? "",
        rrdOtherReasons: otherReasons.value ?? ""
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
        rrdOtherReasons = `，${rrdOtherReasons}`;
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
        void submit(props.ids, toHide.join("、"), rrdReason ?? "", rrdOtherReasons ?? "");
        props.onClose();
      }
    };
    const closeDialog = () => {
      open.value = false;
      applyConfig({
        rrdHideContent: hideContent.value ?? false,
        rrdHideUsername: hideUsername.value ?? false,
        rrdHideSummary: hideSummary.value ?? false
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
  for (const box of boxes) {
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
    for (const element of $body.find(CLASS_NAMES.join(","))) {
      const appendElement = button(() => showDialog($body));
      element.after(appendElement);
    }
  }
});

})();

/* </nowiki> */


/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://git.qiuwen.net.cn/Mirror/xiplus-twinkle}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/Twinkle}
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

// dist/TwinkleDialogs/TwinkleDialogs.js
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from)) if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
      get: () => from[key],
      enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
    });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", {
  value: true
}), mod);
//! src/TwinkleDialogs/TwinkleDialogs.ts
var TwinkleDialogs_exports = {};
module.exports = __toCommonJS(TwinkleDialogs_exports);
var import_vue7 = require("vue");
var import_codex3 = require("@wikimedia/codex");
var import_vue8 = require("vue");
//! src/Twinkle/modules/ui/morebits.ts
/*! Twinkle - shared typed access to the Morebits global (provided by `ext.gadget.morebits`). */
var Morebits = window.Morebits;
var newParamsApi = (statusText, query, onSuccess, onError) => {
  return new Morebits.wiki.api(statusText, query, onSuccess, void 0, onError);
};
var import_vue = require("vue");
var import_codex = require("@wikimedia/codex");
var import_vue2 = require("vue");
var TwDialog_default = /* @__PURE__ */ (0, import_vue.defineComponent)({
  __name: "TwDialog",
  props: {
    open: {
      type: Boolean,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    scriptName: {
      type: String,
      required: false
    },
    subtitle: {
      type: String,
      required: false
    },
    footerLinks: {
      type: Array,
      required: false
    },
    primaryAction: {
      type: null,
      required: false
    },
    defaultAction: {
      type: Object,
      required: false
    }
  },
  emits: ["update:open", "primary", "default"],
  setup(__props, {
    expose: __expose,
    emit: __emit
  }) {
    __expose();
    const props = __props;
    const emit = __emit;
    const resolvedTitle = (0, import_vue2.computed)(() => props.scriptName ? `${props.scriptName} · ${props.title}` : props.title);
    const __returned__ = {
      props,
      emit,
      resolvedTitle,
      get CdxDialog() {
        return import_codex.CdxDialog;
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
  key: 0
};
var _hoisted_2 = ["href"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0, import_vue3.openBlock)(), (0, import_vue3.createBlock)($setup["CdxDialog"], {
    open: $props.open,
    title: $setup.resolvedTitle,
    subtitle: $props.subtitle,
    "primary-action": $props.primaryAction,
    "default-action": $props.defaultAction,
    "use-close-button": true,
    "onUpdate:open": _cache[0] || (_cache[0] = ($event) => $setup.emit("update:open", $event)),
    onPrimary: _cache[1] || (_cache[1] = ($event) => $setup.emit("primary")),
    onDefault: _cache[2] || (_cache[2] = ($event) => $setup.emit("default"))
  }, (0, import_vue3.createSlots)({
    default: (0, import_vue3.withCtx)(() => [(0, import_vue3.renderSlot)(_ctx.$slots, "default")]),
    _: 2
    /* DYNAMIC */
  }, [$props.footerLinks && $props.footerLinks.length > 0 ? {
    name: "footer-text",
    fn: (0, import_vue3.withCtx)(() => [((0, import_vue3.openBlock)(true), (0, import_vue3.createElementBlock)(
      import_vue3.Fragment,
      null,
      (0, import_vue3.renderList)($props.footerLinks, (link, index) => {
        return (0, import_vue3.openBlock)(), (0, import_vue3.createElementBlock)("span", {
          key: link.href
        }, [index > 0 ? ((0, import_vue3.openBlock)(), (0, import_vue3.createElementBlock)("span", _hoisted_1, " • ")) : (0, import_vue3.createCommentVNode)("v-if", true), (0, import_vue3.createElementVNode)("a", {
          href: link.href,
          target: "_blank",
          rel: "noopener noreferrer"
        }, (0, import_vue3.toDisplayString)(link.text), 9, _hoisted_2)]);
      }),
      128
      /* KEYED_FRAGMENT */
    ))]),
    key: "0"
  } : void 0]), 1032, ["open", "title", "subtitle", "primary-action", "default-action"]);
}
//! src/Twinkle/modules/ui/TwDialog.vue
TwDialog_default.render = render;
TwDialog_default.__file = "src\\Twinkle\\modules\\ui\\TwDialog.vue";
var TwDialog_default2 = TwDialog_default;
var import_vue4 = require("vue");
var import_vue5 = require("vue");
var import_codex2 = require("@wikimedia/codex");
var TwStatus_default = /* @__PURE__ */ (0, import_vue4.defineComponent)({
  __name: "TwStatus",
  setup(__props, {
    expose: __expose
  }) {
    const raw = (0, import_vue5.ref)(null);
    const messagesRoot = (0, import_vue5.ref)(null);
    const messages = (0, import_vue5.ref)([]);
    let observer = null;
    const sync = () => {
      if (!raw.value) {
        return;
      }
      const items = [];
      for (const node of raw.value.children) {
        const element = node;
        const type = element.className.includes("morebits_status_warn") ? "warning" : element.className.includes("morebits_status_error") ? "error" : element.className.includes("morebits_status_info") ? "success" : "notice";
        items.push({
          type,
          html: element.innerHTML
        });
      }
      messages.value = items;
    };
    const hasClickHandler = (element) => {
      var _$2$_data;
      if (typeof element.onclick === "function") {
        return true;
      }
      const $2 = window.$;
      const events = $2 === null || $2 === void 0 || (_$2$_data = $2._data) === null || _$2$_data === void 0 ? void 0 : _$2$_data.call($2, element, "events");
      return Array.isArray(events === null || events === void 0 ? void 0 : events.click) && events.click.length > 0;
    };
    const forwardActionLinks = () => {
      if (!raw.value || !messagesRoot.value) {
        return;
      }
      const originals = raw.value.children;
      const rendered = messagesRoot.value.children;
      for (const [index, messageElement] of Array.from(rendered).entries()) {
        var _originals$index;
        const originalLinks = ((_originals$index = originals[index]) === null || _originals$index === void 0 ? void 0 : _originals$index.querySelectorAll("a")) ?? [];
        const renderedLinks = messageElement.querySelectorAll("a");
        for (const [linkIndex, link] of Array.from(renderedLinks).entries()) {
          const original = originalLinks[linkIndex];
          if (!original || link.dataset["twForwarded"] === "1") {
            continue;
          }
          if (!hasClickHandler(original)) {
            continue;
          }
          link.dataset["twForwarded"] = "1";
          if (link.getAttribute("href") === "#") {
            link.addEventListener("click", (event) => {
              event.preventDefault();
              original.click();
            });
          }
        }
      }
    };
    (0, import_vue5.watch)(messages, async () => {
      await (0, import_vue5.nextTick)();
      forwardActionLinks();
      if (messages.value.length > 0) {
        var _messagesRoot$value;
        (_messagesRoot$value = messagesRoot.value) === null || _messagesRoot$value === void 0 || _messagesRoot$value.scrollIntoView({
          block: "start"
        });
      }
    });
    (0, import_vue5.onMounted)(() => {
      if (raw.value) {
        observer = new MutationObserver(sync);
        observer.observe(raw.value, {
          childList: true,
          subtree: true
        });
      }
    });
    (0, import_vue5.onBeforeUnmount)(() => {
      var _observer;
      (_observer = observer) === null || _observer === void 0 || _observer.disconnect();
    });
    const exposed = {
      getStatusRoot: () => raw.value,
      // Remove all status lines (e.g. transient "loading" messages once the
      // queries they describe have finished); the observer syncs the mirror.
      clear: () => {
        messages.value = [];
        if (raw.value) {
          raw.value.replaceChildren();
        }
      }
    };
    __expose(exposed);
    const __returned__ = {
      raw,
      messagesRoot,
      messages,
      get observer() {
        return observer;
      },
      set observer(v) {
        observer = v;
      },
      sync,
      hasClickHandler,
      forwardActionLinks,
      exposed,
      get CdxMessage() {
        return import_codex2.CdxMessage;
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
var _hoisted_12 = {
  ref: "raw",
  hidden: ""
};
var _hoisted_22 = {
  ref: "messagesRoot",
  class: "tw-status-messages"
};
var _hoisted_3 = ["innerHTML"];
function render2(_ctx, _cache, $props, $setup, $data, $options) {
  return (0, import_vue6.openBlock)(), (0, import_vue6.createElementBlock)(
    import_vue6.Fragment,
    null,
    [(0, import_vue6.createElementVNode)(
      "div",
      _hoisted_12,
      null,
      512
      /* NEED_PATCH */
    ), (0, import_vue6.createElementVNode)(
      "div",
      _hoisted_22,
      [((0, import_vue6.openBlock)(true), (0, import_vue6.createElementBlock)(
        import_vue6.Fragment,
        null,
        (0, import_vue6.renderList)($setup.messages, (message, index) => {
          return (0, import_vue6.openBlock)(), (0, import_vue6.createBlock)($setup["CdxMessage"], {
            key: index,
            type: message.type
          }, {
            default: (0, import_vue6.withCtx)(() => [(0, import_vue6.createCommentVNode)(" eslint-disable-next-line vue/no-v-html -- content comes from Morebits.status (already sanitized by Morebits.createHtml or explicitly appended elements) "), (0, import_vue6.createElementVNode)("span", {
              innerHTML: message.html
            }, null, 8, _hoisted_3)]),
            _: 2
            /* DYNAMIC */
          }, 1032, ["type"]);
        }),
        128
        /* KEYED_FRAGMENT */
      ))],
      512
      /* NEED_PATCH */
    )],
    64
    /* STABLE_FRAGMENT */
  );
}
//! src/Twinkle/modules/ui/TwStatus.vue
TwStatus_default.render = render2;
TwStatus_default.__file = "src\\Twinkle\\modules\\ui\\TwStatus.vue";
TwStatus_default.__scopeId = "data-v-dc2c89b3";
var TwStatus_default2 = TwStatus_default;
//! src/Twinkle/modules/utils/useUls.ts
var import_ext_gadget = require("ext.gadget.i18n");
var uls = (simplified, traditional) => {
  return typeof import_ext_gadget.wgULS === "function" ? (0, import_ext_gadget.wgULS)(simplified, traditional) : simplified;
};
var TwArvDialog_default = /* @__PURE__ */ (0, import_vue7.defineComponent)({
  __name: "TwArvDialog",
  props: {
    uid: {
      type: String,
      required: true
    },
    isIP: {
      type: Boolean,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    blockNotice: {
      type: Object,
      required: true
    },
    footerLinks: {
      type: Array,
      required: true
    }
  },
  emits: ["close"],
  setup(__props, {
    expose: __expose,
    emit: __emit
  }) {
    __expose();
    const props = __props;
    const emit = __emit;
    const open = (0, import_vue8.ref)(true);
    const submitting = (0, import_vue8.ref)(false);
    const category = (0, import_vue8.ref)("aiv");
    const pages = (0, import_vue8.ref)([""]);
    const reason = (0, import_vue8.ref)("");
    const hidename = (0, import_vue8.ref)(false);
    const arvtype = (0, import_vue8.ref)([]);
    const sockmaster = (0, import_vue8.ref)(props.uid);
    const sockpuppets = (0, import_vue8.ref)([props.uid, ""]);
    const checkuser = (0, import_vue8.ref)(false);
    const page = (0, import_vue8.ref)(mw.util.getParamValue("vanarticle") || "");
    const badid = (0, import_vue8.ref)(mw.util.getParamValue("vanarticlerevid") || "");
    const goodid = (0, import_vue8.ref)(mw.util.getParamValue("vanarticlegoodrevid") || "");
    const statusRef = (0, import_vue8.ref)(null);
    const previewBox = (0, import_vue8.ref)(null);
    let previewer = null;
    const categoryItems = [{
      value: "aiv",
      label: uls("破坏（QW:VIP）", "破壞（QW:VIP）")
    }, {
      value: "ewip",
      label: uls("编辑争议（QW:EWIP）", "編輯爭議（QW:EWIP）")
    }, {
      value: "username",
      label: uls("用户名（QW:UAA）", "使用者名稱（QW:UAA）"),
      disabled: props.isIP
    }, {
      value: "spi",
      label: uls("傀儡调查（QW:SPI）", "傀儡調查（QW:SPI）"),
      disabled: props.isIP
    }];
    const usernameTypes = [{
      value: uls("误导性", "誤導性"),
      label: uls("误导性用户名", "誤導性使用者名稱"),
      tooltip: uls("误导性用户名隐含着与贡献者相关或误导他人的事情。例如︰不实观点、暗示账号拥有特定权限或暗示该账号并非由一人拥有而是由一个组群、一个项目或一个集体运作。", "誤導性使用者名稱隱含著與貢獻者相關或誤導他人的事情。例如︰不實觀點、暗示賬號擁有特定權限或暗示該賬號並非由一人擁有而是由一個群組、一個計畫或一個集體運作。")
    }, {
      value: uls("宣传性", "宣傳性"),
      label: uls("宣传性用户名", "宣傳性使用者名稱"),
      tooltip: uls("宣传性用户名会于求闻百科上起推销一个组群或一间公司的作用。", "宣傳性使用者名稱會於有獸檔案館上起推銷一個群組或一間公司的作用。")
    }, {
      value: "shared",
      label: uls("暗示并非由一人拥有", "暗示並非由一人擁有"),
      tooltip: uls("每个账号只可以代表个人（容许一些例外情况），所有与他人分享账号的行为（包括分享账号密码）均被禁止。", "每個賬號只可以代表個人（容許一些例外情況），所有與他人分享賬號的行為（包括分享賬號密碼）均被禁止。")
    }, {
      value: "侮辱性",
      label: uls("侮辱性用户名", "侮辱性使用者名稱"),
      tooltip: uls("侮辱性用户名令协调编辑变得困难，甚至无可能。", "侮辱性使用者名稱令協調編輯變得困難，甚至無可能。")
    }, {
      value: uls("破坏性", "破壞性"),
      label: uls("破坏性用户名", "破壞性使用者名稱"),
      tooltip: uls("破坏性用户名包括人身攻击、伪冒他人或其他一切有着清晰可见的破坏求闻百科意图的用户名。", "破壞性使用者名稱包括人身攻擊、偽冒他人或其他一切有著清晰可見的破壞有獸檔案館意圖的使用者名稱。")
    }];
    const aivTypes = [{
      value: "final",
      label: uls("已发出最后警告", "已發出最後警告")
    }, {
      value: "postblock",
      label: uls("封禁过期后随即破坏", "封鎖過期後隨即破壞")
    }, {
      value: "vandalonly",
      label: uls("显而易见的纯破坏用户", "顯而易見的純破壞使用者"),
      disabled: props.isIP
    }, {
      value: "spambot",
      label: uls("显而易见的spambot或失窃账号", "顯而易見的spambot或失竊賬號")
    }, {
      value: "promoonly",
      label: uls("仅用来散发广告宣传的用户", "僅用來散發廣告宣傳的使用者"),
      disabled: props.isIP
    }];
    const badidDisabled = (0, import_vue8.computed)(() => page.value === "");
    const goodidDisabled = (0, import_vue8.computed)(() => badidDisabled.value || badid.value === "");
    const addPage = () => {
      if (pages.value.length < 10) {
        pages.value.push("");
      }
    };
    const removePage = (index) => {
      if (pages.value.length > 1) {
        pages.value.splice(index, 1);
      }
    };
    const addSockpuppet = () => {
      if (sockpuppets.value.length < 9) {
        sockpuppets.value.push("");
      }
    };
    const sockmasterNotice = (0, import_vue8.computed)(() => "{{".concat("subst:", `Socksuspectnotice|1=${sockmaster.value}}}`));
    const removeSockpuppet = (index) => {
      if (sockpuppets.value.length > 2) {
        sockpuppets.value.splice(index, 1);
      }
    };
    const onTypeToggle = (value, modelValue) => {
      if (Array.isArray(modelValue)) {
        arvtype.value = modelValue.filter((item) => typeof item === "string");
      } else if (modelValue) {
        arvtype.value = [...arvtype.value, value];
      } else {
        arvtype.value = arvtype.value.filter((item) => item !== value);
      }
    };
    const updatePage = (index, value) => {
      pages.value[index] = String(value);
    };
    const updateSockpuppet = (index, value) => {
      sockpuppets.value[index] = String(value);
    };
    const buildParams = () => ({
      category: category.value,
      uid: props.uid,
      pages: [...pages.value],
      arvtype: [...arvtype.value],
      hidename: hidename.value,
      reason: reason.value,
      sockmaster: sockmaster.value,
      sockpuppets: [...sockpuppets.value],
      checkuser: checkuser.value,
      page: page.value,
      badid: badid.value,
      goodid: goodid.value
    });
    const primaryAction = (0, import_vue8.computed)(() => ({
      label: uls("提交", "提交"),
      actionType: "progressive",
      disabled: submitting.value
    }));
    const onPreview = () => {
      const params = buildParams();
      const reason2 = getReportWikitext(params);
      if (reason2 === void 0 || !previewBox.value) {
        return;
      }
      if (previewer) {
        previewer.closePreview();
      }
      previewer = new Morebits.wiki.preview(previewBox.value);
      let title;
      switch (params.category) {
        case "aiv":
          title = "Qiuwen_talk:报告当前破坏";
          break;
        case "ewip":
        case "username":
        case "spi":
          title = "Qiuwen_talk:管理员告示板";
          break;
        default:
          title = mw.config.get("wgPageName");
          break;
      }
      previewer.beginRender(`__NOTOC__${reason2[0]}`, title);
    };
    const submit = () => {
      var _statusRef$value;
      if (submitting.value) {
        return;
      }
      submitting.value = true;
      evaluate(buildParams(), ((_statusRef$value = statusRef.value) === null || _statusRef$value === void 0 ? void 0 : _statusRef$value.getStatusRoot()) ?? null, () => {
        submitting.value = false;
      });
    };
    (0, import_vue8.watch)(open, (value) => {
      if (!value) {
        emit("close");
      }
    });
    const getReportWikitext = (input) => {
      let reason2 = "";
      let comment = "";
      const {
        uid
      } = input;
      const checkTitle = (title, revid) => {
        if (/https?:\/\//.test(title)) {
          void mw.notify(uls("页面名称不能使用网址。", "頁面名稱不能使用網址。"), {
            type: "warn",
            tag: "twinklearv"
          });
          return false;
        }
        let page3;
        try {
          page3 = new mw.Title(title);
        } catch {
          void mw.notify(`${uls("“", "「") + title + uls("”不是一个有效的页面名称，如要使用差异链接请放在“评论”", "」不是一個有效的頁面名稱，如要使用差異連結請放在「評論」") + (revid ? uls("，或正确输入“修订版本”", "，或正確輸入「修訂版本」") : "")}。`, {
            type: "warn",
            tag: "twinklearv"
          });
          return false;
        }
        if (page3.getNamespaceId() === -1) {
          void mw.notify(`${uls("“", "「") + title + uls("”属于特殊页面，如要使用差异链接请放在“评论”", "」屬於特殊頁面，如要使用差異連結請放在「評論」") + (revid ? uls("，或正确输入“修订版本”", "，或正確輸入「修訂版本」") : "")}。`, {
            type: "warn",
            tag: "twinklearv"
          });
          return false;
        }
        return page3;
      };
      let page2;
      switch (input.category) {
        // Report 3RR
        case "ewip": {
          if (input.reason === "") {
            void mw.notify(uls("您必须指定理由", "您必須指定理由"), {
              type: "warn",
              tag: "twinklearv"
            });
            return;
          }
          reason2 += `== 编辑战举报（${uid}） ==
`;
          reason2 += `* '''{{vandal|${/[=]/.test(uid) ? "1=" : ""}${uid}}}'''
`;
          const pages2 = input.pages.map((value) => {
            return value || null;
          });
          for (const pageTitle of pages2) {
            page2 = checkTitle(pageTitle, false);
            if (!page2) {
              return;
            }
            comment += `* {{pagelinks|${page2.getPrefixedText().includes("=") ? "1=" : ""}${page2.getPrefixedText()}}}
`;
          }
          input.reason = input.reason.replace(/\n\n+/g, "\n");
          input.reason = input.reason.replace(/\r?\n/g, "\n*:");
          comment += `* ${input.reason}
`;
          comment = comment.trim();
          comment = Morebits.string.appendPunctuation(comment);
          reason2 += `${comment}
* 提报人：~~`.concat("~~\n* 处理：");
          break;
        }
        // Report inappropriate username
        case "username": {
          const types = input.arvtype.map(Morebits.string.toLowerCaseFirstChar);
          const hasShared = types.includes("shared");
          if (hasShared) {
            types.splice(types.indexOf("shared"), 1);
          }
          if (types.includes("侮辱性") && !confirm(uls("警告：严重的侮辱性用户名和针对特定个人的侮辱性用户名不应在公开页面报告，而是应当私下联系监督员处理。是否继续？", "警告：嚴重的侮辱性使用者名稱和針對特定個人的侮辱性使用者名稱不應在公開頁面報告，而是應當私下聯絡監督員處理。是否繼續？"))) {
            return;
          }
          let typeText;
          if (types.length <= 2) {
            typeText = types.join("和");
          } else {
            typeText = [types.slice(0, -1).join("、"), types.slice(-1)].join("和");
          }
          comment += `*{{user-uaa|1=${uid}`;
          if (input.hidename) {
            comment += "|hidename=1";
          }
          comment += "}} &ndash; ";
          if (typeText.length) {
            comment += typeText + uls("用户名", "使用者名稱");
          }
          if (typeText.length && hasShared) {
            comment += "，";
          }
          if (hasShared) {
            comment += uls("暗示该账号并非由一人拥有", "暗示該賬號並非由一人擁有");
          }
          if (types.length || hasShared) {
            comment += "。";
          }
          if (input.reason) {
            comment += Morebits.string.toUpperCaseFirstChar(input.reason);
          }
          comment = Morebits.string.appendPunctuation(comment);
          comment += "——~~".concat("~~");
          comment = comment.replace(/\r?\n/g, "\n*:");
          reason2 = `== 不当用户名报告（${input.hidename ? uls("已隐藏用户名", "已隱藏使用者名稱") : uid}） ==
`;
          reason2 += comment;
          break;
        }
        // QW:SPI
        case "spi": {
          if (!input.reason) {
            void mw.notify(uls("请输入证据。", "請輸入證據。"), {
              type: "warn",
              tag: "twinklearv"
            });
            return;
          }
          const sockpuppets2 = Morebits.array.uniq(input.sockpuppets.map((o) => {
            return o.trim() || null;
          }));
          if (!sockpuppets2[0]) {
            void mw.notify(uls("您没有指定任何傀儡。", "您沒有指定任何傀儡。"), {
              type: "warn",
              tag: "twinklearv"
            });
            return;
          }
          comment += "{{".concat("subst:", "SPI report|");
          if (!sockpuppets2.includes(input.sockmaster)) {
            comment += "1={{".concat("subst:", "#ifexist:{{", "subst:", `FULLPAGENAME}}||${input.sockmaster}}}|`);
          }
          comment += `${sockpuppets2.map((sock, index) => {
            return `${index + 2}=${sock}`;
          }).join("|")}
|evidence=${Morebits.string.appendPunctuation(input.reason)}
`;
          if (input.checkuser) {
            comment += "|checkuser=yes";
          }
          comment += "}}";
          reason2 = comment;
          break;
        }
        // Report user for vandalism
        /* case 'aiv': */
        /* falls through */
        default: {
          if (!input.arvtype.length && input.reason === "") {
            void mw.notify(uls("您必须指定理由", "您必須指定理由"), {
              type: "warn",
              tag: "twinklearv"
            });
            return;
          }
          reason2 += `== ${input.hidename ? uls("已隐藏用户名", "已隱藏使用者名稱") : uid} ==
`;
          reason2 += `* '''{{vandal|${/[=]/.test(uid) ? "1=" : ""}${uid}`;
          if (input.hidename) {
            reason2 += "|hidename=1";
          }
          reason2 += "}}'''\n";
          const types = input.arvtype.map((v) => {
            switch (v) {
              case "final":
                return "已发出最后警告";
              case "postblock":
                return "封禁过期后随即破坏";
              case "spambot":
                return "显而易见的spambot或失窃账号";
              case "vandalonly":
                return "显而易见的纯破坏用户";
              case "promoonly":
                return "仅用来散发广告宣传的用户";
              default:
                return "未知理由";
            }
          }).join("，");
          if (input.page !== "") {
            page2 = checkTitle(input.page, true);
            if (!page2) {
              return;
            }
            comment += `* {{pagelinks|${page2.getPrefixedText().includes("=") ? "1=" : ""}${page2.getPrefixedText()}}}`;
            if (input.badid) {
              comment += `（{{diff|${page2.getPrefixedText()}|${input.badid}|${input.goodid ?? ""}|diff}}）`;
            }
            comment += "\n";
          }
          if (types) {
            comment += `* ${types}`;
          }
          if (input.reason !== "") {
            input.reason = input.reason.replace(/\n\n+/g, "\n");
            input.reason = input.reason.replace(/\r?\n/g, "\n*:");
            comment += (types ? "。" : "* ") + input.reason;
          }
          comment = comment.trim();
          comment = Morebits.string.appendPunctuation(comment);
          reason2 += `${comment}
* 发现人：~~`.concat("~~\n* 处理：");
          break;
        }
      }
      return [reason2, comment];
    };
    const evaluate = (input, statusContainer, restore) => {
      const {
        uid
      } = input;
      let summary = "";
      switch (input.category) {
        // Report 3RR
        case "ewip": {
          const report = getReportWikitext(input);
          if (report === void 0) {
            if (restore) {
              restore();
            }
            return;
          }
          summary = `${uls("报告", "報告")}[[Special:Contribs/${uid}|${uid}]]`;
          Morebits.status.init(statusContainer);
          Morebits.wiki.actionCompleted.redirect = "Qiuwen_talk:管理员告示板";
          Morebits.wiki.actionCompleted.notice = uls("报告完成", "報告完成");
          const ewipPage = new Morebits.wiki.page("Qiuwen_talk:管理员告示板", uls("处理EWIP请求", "處理EWIP請求"));
          ewipPage.setFollowRedirect(true);
          ewipPage.load(() => {
            const text = ewipPage.getPageText();
            const $ewipLink = '<a rel="noopener" target="_blank" href="/wiki/QW:EWIP">QW:EWIP</a>';
            if (new RegExp(`===\\s*\\{\\{\\s*(?:[Vv]andal)\\s*\\|\\s*(?:1=)?\\s*${Morebits.string.escapeRegExp(uid)}\\s*\\}\\}\\s*===`).test(text ?? "")) {
              ewipPage.getStatusElement().error(uls("报告已存在，将不会加入新的", "報告已存在，將不會加入新的"));
              Morebits.status.printUserText(report[1], uls("您输入的评论已在下方提供，您可以将其加入到", "您輸入的評論已在下方提供，您可以將其加入到") + $ewipLink + uls("已存在的小节中：", "已存在的小節中："));
              return;
            }
            ewipPage.setPageSection(0);
            ewipPage.getStatusElement().status(uls("加入新报告…", "加入新報告…"));
            ewipPage.setEditSummary(summary);
            ewipPage.setChangeTags(Twinkle.changeTags);
            ewipPage.setAppendText(`
${report[0]}`);
            ewipPage.append();
          });
          break;
        }
        // Report inappropriate username
        case "username": {
          const report = getReportWikitext(input);
          if (report === void 0) {
            if (restore) {
              restore();
            }
            return;
          }
          Morebits.status.init(statusContainer);
          Morebits.wiki.actionCompleted.redirect = "Qiuwen_talk:管理员告示板";
          Morebits.wiki.actionCompleted.notice = uls("报告完成", "報告完成");
          const uaaPage = new Morebits.wiki.page("Qiuwen_talk:管理员告示板", uls("处理UAA请求", "處理UAA請求"));
          uaaPage.setFollowRedirect(true);
          uaaPage.load(() => {
            const text = uaaPage.getPageText();
            if (new RegExp(`\\{\\{\\s*user-uaa\\s*\\|\\s*(1\\s*=\\s*)?${Morebits.string.escapeRegExp(uid)}\\s*(\\||\\})`).test(text ?? "")) {
              uaaPage.getStatusElement().error(uls("用户已被列入。", "使用者已被列入。"));
              const $uaaLink = '<a rel="noopener" target="_blank" href="/wiki/QW:UAA">QW:UAA</a>';
              Morebits.status.printUserText(report[1], uls("您输入的评论已在下方提供，您可以将其手工加入", "您輸入的評論已在下方提供，您可以將其手工加入") + $uaaLink + uls("上该用户的报告中：", "上該使用者的報告中："));
              return;
            }
            uaaPage.getStatusElement().status(uls("加入新报告…", "加入新報告…"));
            uaaPage.setEditSummary(uls("新提报", "新提報"));
            uaaPage.setChangeTags(Twinkle.changeTags);
            uaaPage.setAppendText(`

${report[0]}`);
            uaaPage.append();
          });
          break;
        }
        // QW:SPI
        case "spi": {
          const report = getReportWikitext(input);
          if (report === void 0) {
            if (restore) {
              restore();
            }
            return;
          }
          Morebits.status.init(statusContainer);
          const reportpage = "Qiuwen_talk:管理员告示板";
          Morebits.wiki.actionCompleted.redirect = reportpage;
          Morebits.wiki.actionCompleted.notice = uls("报告完成", "報告完成");
          const spiPage = new Morebits.wiki.page(reportpage, uls("抓取讨论页面", "抓取討論頁面"));
          spiPage.setFollowRedirect(true);
          spiPage.setEditSummary(uls("加入新提报", "加入新提報"));
          spiPage.setChangeTags(Twinkle.changeTags);
          spiPage.setAppendText(report[0]);
          spiPage.setWatchlist(Twinkle.getPref("spiWatchReport"));
          spiPage.append();
          break;
        }
        // Report user for vandalism
        /* case 'aiv': */
        /* falls through */
        default: {
          const report = getReportWikitext(input);
          if (report === void 0) {
            if (restore) {
              restore();
            }
            return;
          }
          summary = `${uls("报告", "報告")}[[Special:Contribs/${uid}|${uid}]]`;
          if (input.hidename) {
            summary = uls("报告一名用户", "報告一名使用者");
          }
          Morebits.status.init(statusContainer);
          Morebits.wiki.actionCompleted.redirect = "Qiuwen_talk:报告当前破坏";
          Morebits.wiki.actionCompleted.notice = uls("报告完成", "報告完成");
          const aivPage = new Morebits.wiki.page("Qiuwen_talk:报告当前破坏", uls("处理VIP请求", "處理VIP請求"));
          aivPage.setFollowRedirect(true);
          aivPage.load(() => {
            const text = aivPage.getPageText();
            const $aivLink = '<a rel="noopener" target="_blank" href="/wiki/QW:VIP">QW:VIP</a>';
            if (new RegExp(`===\\s*\\{\\{\\s*(?:[Vv]andal)\\s*\\|\\s*(?:1=)?\\s*${Morebits.string.escapeRegExp(uid)}\\s*\\}\\}\\s*===`).test(text ?? "")) {
              aivPage.getStatusElement().error(uls("报告已存在，将不会加入新的", "報告已存在，將不會加入新的"));
              Morebits.status.printUserText(report[1], uls("您输入的评论已在下方提供，您可以将其加入到", "您輸入的評論已在下方提供，您可以將其加入到") + $aivLink + uls("已存在的小节中：", "已存在的小節中："));
              return;
            }
            aivPage.setPageSection(0);
            aivPage.getStatusElement().status(uls("加入新报告…", "加入新報告…"));
            aivPage.setEditSummary(summary);
            aivPage.setChangeTags(Twinkle.changeTags);
            aivPage.setAppendText(`
${report[0]}`);
            aivPage.append();
          });
          break;
        }
      }
    };
    const __returned__ = {
      props,
      emit,
      open,
      submitting,
      category,
      pages,
      reason,
      hidename,
      arvtype,
      sockmaster,
      sockpuppets,
      checkuser,
      page,
      badid,
      goodid,
      statusRef,
      previewBox,
      get previewer() {
        return previewer;
      },
      set previewer(v) {
        previewer = v;
      },
      categoryItems,
      usernameTypes,
      aivTypes,
      badidDisabled,
      goodidDisabled,
      addPage,
      removePage,
      addSockpuppet,
      sockmasterNotice,
      removeSockpuppet,
      onTypeToggle,
      updatePage,
      updateSockpuppet,
      buildParams,
      primaryAction,
      onPreview,
      submit,
      getReportWikitext,
      evaluate,
      get CdxButton() {
        return import_codex3.CdxButton;
      },
      get CdxCheckbox() {
        return import_codex3.CdxCheckbox;
      },
      get CdxField() {
        return import_codex3.CdxField;
      },
      get CdxSelect() {
        return import_codex3.CdxSelect;
      },
      get CdxTextArea() {
        return import_codex3.CdxTextArea;
      },
      get CdxTextInput() {
        return import_codex3.CdxTextInput;
      },
      TwDialog: TwDialog_default2,
      TwStatus: TwStatus_default2,
      get uls() {
        return uls;
      }
    };
    Object.defineProperty(__returned__, "__isScriptSetup", {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});
var import_vue9 = require("vue");
var _hoisted_13 = ["title"];
var _hoisted_23 = {
  class: "tw-arv-spinotice"
};
var _hoisted_32 = {
  class: "tw-arv-aiv-notice"
};
var _hoisted_4 = {
  ref: "previewBox",
  hidden: ""
};
function render3(_ctx, _cache, $props, $setup, $data, $options) {
  return (0, import_vue9.openBlock)(), (0, import_vue9.createBlock)($setup["TwDialog"], {
    open: $setup.open,
    title: $props.title,
    "script-name": "Twinkle",
    "footer-links": $props.footerLinks,
    "primary-action": $setup.primaryAction,
    "onUpdate:open": _cache[12] || (_cache[12] = ($event) => $setup.open = $event),
    onPrimary: $setup.submit
  }, {
    default: (0, import_vue9.withCtx)(() => [(0, import_vue9.createVNode)($setup["CdxField"], null, {
      label: (0, import_vue9.withCtx)(() => [(0, import_vue9.createTextVNode)(
        (0, import_vue9.toDisplayString)($setup.uls("选择报告类型：", "選擇報告類別：")),
        1
        /* TEXT */
      )]),
      default: (0, import_vue9.withCtx)(() => [(0, import_vue9.createVNode)($setup["CdxSelect"], {
        selected: $setup.category,
        "onUpdate:selected": _cache[0] || (_cache[0] = ($event) => $setup.category = $event),
        "menu-items": $setup.categoryItems,
        disabled: $setup.submitting
      }, null, 8, ["selected", "disabled"])]),
      _: 1
      /* STABLE */
    }), $props.blockNotice.text ? ((0, import_vue9.openBlock)(), (0, import_vue9.createElementBlock)(
      "div",
      {
        key: 0,
        style: (0, import_vue9.normalizeStyle)({
          color: $props.blockNotice.severe ? "#f00" : "black"
        }),
        class: "tw-arv-blockwarning"
      },
      (0, import_vue9.toDisplayString)($props.blockNotice.text),
      5
      /* TEXT, STYLE */
    )) : (0, import_vue9.createCommentVNode)("v-if", true), (0, import_vue9.createCommentVNode)(" 编辑争议 "), $setup.category === "ewip" ? ((0, import_vue9.openBlock)(), (0, import_vue9.createElementBlock)(
      import_vue9.Fragment,
      {
        key: 1
      },
      [(0, import_vue9.createVNode)($setup["CdxField"], null, {
        label: (0, import_vue9.withCtx)(() => [(0, import_vue9.createTextVNode)(
          (0, import_vue9.toDisplayString)($setup.uls("相关页面：", "相關頁面：")),
          1
          /* TEXT */
        )]),
        description: (0, import_vue9.withCtx)(() => [(0, import_vue9.createTextVNode)(
          (0, import_vue9.toDisplayString)($setup.uls("如不希望让报告链接到页面，请留空", "如不希望讓報告連結到頁面，請留空")),
          1
          /* TEXT */
        )]),
        default: (0, import_vue9.withCtx)(() => [((0, import_vue9.openBlock)(true), (0, import_vue9.createElementBlock)(
          import_vue9.Fragment,
          null,
          (0, import_vue9.renderList)($setup.pages, (_, index) => {
            return (0, import_vue9.openBlock)(), (0, import_vue9.createElementBlock)("div", {
              key: index,
              class: "tw-arv-dyninput"
            }, [(0, import_vue9.createVNode)($setup["CdxTextInput"], {
              "model-value": $setup.pages[index] ?? "",
              "aria-label": `${$setup.uls("页面：", "頁面：")} ${index + 1}`,
              disabled: $setup.submitting,
              "onUpdate:modelValue": ($event) => $setup.updatePage(index, $event)
            }, null, 8, ["model-value", "aria-label", "disabled", "onUpdate:modelValue"]), $setup.pages.length > 1 ? ((0, import_vue9.openBlock)(), (0, import_vue9.createBlock)($setup["CdxButton"], {
              key: 0,
              weight: "quiet",
              disabled: $setup.submitting,
              onClick: ($event) => $setup.removePage(index)
            }, {
              default: (0, import_vue9.withCtx)(() => [(0, import_vue9.createTextVNode)(
                (0, import_vue9.toDisplayString)($setup.uls("移除", "移除")),
                1
                /* TEXT */
              )]),
              _: 1
              /* STABLE */
            }, 8, ["disabled", "onClick"])) : (0, import_vue9.createCommentVNode)("v-if", true)]);
          }),
          128
          /* KEYED_FRAGMENT */
        )), $setup.pages.length < 10 ? ((0, import_vue9.openBlock)(), (0, import_vue9.createBlock)($setup["CdxButton"], {
          key: 0,
          weight: "quiet",
          disabled: $setup.submitting,
          onClick: $setup.addPage
        }, {
          default: (0, import_vue9.withCtx)(() => [(0, import_vue9.createTextVNode)(
            (0, import_vue9.toDisplayString)($setup.uls("添加页面", "新增頁面")),
            1
            /* TEXT */
          )]),
          _: 1
          /* STABLE */
        }, 8, ["disabled"])) : (0, import_vue9.createCommentVNode)("v-if", true)]),
        _: 1
        /* STABLE */
      }), (0, import_vue9.createVNode)($setup["CdxField"], null, {
        label: (0, import_vue9.withCtx)(() => [(0, import_vue9.createTextVNode)(
          (0, import_vue9.toDisplayString)($setup.uls("评论：", "評論：")),
          1
          /* TEXT */
        )]),
        default: (0, import_vue9.withCtx)(() => [(0, import_vue9.createVNode)($setup["CdxTextArea"], {
          modelValue: $setup.reason,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.reason = $event),
          disabled: $setup.submitting
        }, null, 8, ["modelValue", "disabled"])]),
        _: 1
        /* STABLE */
      })],
      64
      /* STABLE_FRAGMENT */
    )) : $setup.category === "username" ? ((0, import_vue9.openBlock)(), (0, import_vue9.createElementBlock)(
      import_vue9.Fragment,
      {
        key: 2
      },
      [(0, import_vue9.createCommentVNode)(" 不当用户名 "), (0, import_vue9.createVNode)($setup["CdxField"], null, {
        label: (0, import_vue9.withCtx)(() => [(0, import_vue9.createTextVNode)(
          (0, import_vue9.toDisplayString)($setup.uls("不当用户名类型", "不當使用者名稱類別")),
          1
          /* TEXT */
        )]),
        description: (0, import_vue9.withCtx)(() => [(0, import_vue9.createTextVNode)(
          (0, import_vue9.toDisplayString)($setup.uls("求闻百科不允许使用带有误导性、宣传性、侮辱性或破坏性的用户名。此外，使用域名及邮箱地址的用户名亦被禁止。这些准则俱应应用至用户名及签名。在其他语言中不当的用户名或通过错拼、替代、暗示、拆字或任何间接方法达成的非妥当用户名同样视为违规。", "有獸檔案館不允許使用帶有誤導性、宣傳性、侮辱性或破壞性的使用者名稱。此外，使用域名及電子信箱位址的使用者名稱亦被禁止。這些準則俱應應用至使用者名稱及簽名。在其他語言中不當的使用者名稱或通過錯拼、替代、暗示、拆字或任何間接方法達成的非妥當使用者名稱同樣視為違規。")),
          1
          /* TEXT */
        )]),
        default: (0, import_vue9.withCtx)(() => [((0, import_vue9.openBlock)(), (0, import_vue9.createElementBlock)(
          import_vue9.Fragment,
          null,
          (0, import_vue9.renderList)($setup.usernameTypes, (item) => {
            return (0, import_vue9.createVNode)($setup["CdxCheckbox"], {
              key: item.value,
              "model-value": $setup.arvtype,
              "input-value": item.value,
              name: "twinklearv-username-types",
              disabled: $setup.submitting,
              "onUpdate:modelValue": ($event) => $setup.onTypeToggle(item.value, $event)
            }, {
              default: (0, import_vue9.withCtx)(() => [(0, import_vue9.createElementVNode)("span", {
                title: item.tooltip
              }, (0, import_vue9.toDisplayString)(item.label), 9, _hoisted_13)]),
              _: 2
              /* DYNAMIC */
            }, 1032, ["model-value", "input-value", "disabled", "onUpdate:modelValue"]);
          }),
          64
          /* STABLE_FRAGMENT */
        ))]),
        _: 1
        /* STABLE */
      }), (0, import_vue9.createVNode)($setup["CdxCheckbox"], {
        modelValue: $setup.hidename,
        "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $setup.hidename = $event),
        disabled: $setup.submitting,
        title: $setup.uls("若用户名不当请勾选此项，注意：请考虑私下联系管理员处理。", "若使用者名稱不當請勾選此項，注意：請考慮私下聯絡管理員處理。")
      }, {
        default: (0, import_vue9.withCtx)(() => [(0, import_vue9.createTextVNode)(
          (0, import_vue9.toDisplayString)($setup.uls("在页面上隐藏用户名（需监督的用户名请勿于站内报告，勾选此项并不构成能在站内报告的理由）", "在頁面上隱藏使用者名稱（需監督的使用者名稱請勿於站內報告，勾選此項並不構成能在站內報告的理由）")),
          1
          /* TEXT */
        )]),
        _: 1
        /* STABLE */
      }, 8, ["modelValue", "disabled", "title"]), (0, import_vue9.createVNode)($setup["CdxField"], null, {
        label: (0, import_vue9.withCtx)(() => [(0, import_vue9.createTextVNode)(
          (0, import_vue9.toDisplayString)($setup.uls("评论：", "評論：")),
          1
          /* TEXT */
        )]),
        default: (0, import_vue9.withCtx)(() => [(0, import_vue9.createVNode)($setup["CdxTextArea"], {
          modelValue: $setup.reason,
          "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $setup.reason = $event),
          disabled: $setup.submitting
        }, null, 8, ["modelValue", "disabled"])]),
        _: 1
        /* STABLE */
      })],
      64
      /* STABLE_FRAGMENT */
    )) : $setup.category === "spi" ? ((0, import_vue9.openBlock)(), (0, import_vue9.createElementBlock)(
      import_vue9.Fragment,
      {
        key: 3
      },
      [(0, import_vue9.createCommentVNode)(" 傀儡调查 "), (0, import_vue9.createVNode)($setup["CdxField"], null, {
        label: (0, import_vue9.withCtx)(() => [(0, import_vue9.createTextVNode)(
          (0, import_vue9.toDisplayString)($setup.uls("主账号：", "主賬號：")),
          1
          /* TEXT */
        )]),
        description: (0, import_vue9.withCtx)(() => [(0, import_vue9.createTextVNode)(
          (0, import_vue9.toDisplayString)($setup.uls("主账号的用户名（不含User:前缀）", "主賬號的使用者名稱（不含User:字首）")),
          1
          /* TEXT */
        )]),
        default: (0, import_vue9.withCtx)(() => [(0, import_vue9.createVNode)($setup["CdxTextInput"], {
          modelValue: $setup.sockmaster,
          "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $setup.sockmaster = $event),
          disabled: $setup.submitting
        }, null, 8, ["modelValue", "disabled"])]),
        _: 1
        /* STABLE */
      }), (0, import_vue9.createVNode)($setup["CdxField"], null, {
        label: (0, import_vue9.withCtx)(() => [(0, import_vue9.createTextVNode)(
          (0, import_vue9.toDisplayString)($setup.uls("傀儡：", "傀儡：")),
          1
          /* TEXT */
        )]),
        description: (0, import_vue9.withCtx)(() => [(0, import_vue9.createTextVNode)(
          (0, import_vue9.toDisplayString)($setup.uls("傀儡的用户名（不含User:前缀）", "傀儡的使用者名稱（不含User:字首）")),
          1
          /* TEXT */
        )]),
        default: (0, import_vue9.withCtx)(() => [((0, import_vue9.openBlock)(true), (0, import_vue9.createElementBlock)(
          import_vue9.Fragment,
          null,
          (0, import_vue9.renderList)($setup.sockpuppets, (_, index) => {
            return (0, import_vue9.openBlock)(), (0, import_vue9.createElementBlock)("div", {
              key: index,
              class: "tw-arv-dyninput"
            }, [(0, import_vue9.createVNode)($setup["CdxTextInput"], {
              "model-value": $setup.sockpuppets[index] ?? "",
              "aria-label": `${$setup.uls("傀儡：", "傀儡：")} ${index + 1}`,
              disabled: $setup.submitting,
              "onUpdate:modelValue": ($event) => $setup.updateSockpuppet(index, $event)
            }, null, 8, ["model-value", "aria-label", "disabled", "onUpdate:modelValue"]), $setup.sockpuppets.length > 2 ? ((0, import_vue9.openBlock)(), (0, import_vue9.createBlock)($setup["CdxButton"], {
              key: 0,
              weight: "quiet",
              disabled: $setup.submitting,
              onClick: ($event) => $setup.removeSockpuppet(index)
            }, {
              default: (0, import_vue9.withCtx)(() => [(0, import_vue9.createTextVNode)(
                (0, import_vue9.toDisplayString)($setup.uls("移除", "移除")),
                1
                /* TEXT */
              )]),
              _: 1
              /* STABLE */
            }, 8, ["disabled", "onClick"])) : (0, import_vue9.createCommentVNode)("v-if", true)]);
          }),
          128
          /* KEYED_FRAGMENT */
        )), $setup.sockpuppets.length < 9 ? ((0, import_vue9.openBlock)(), (0, import_vue9.createBlock)($setup["CdxButton"], {
          key: 0,
          weight: "quiet",
          disabled: $setup.submitting,
          onClick: $setup.addSockpuppet
        }, {
          default: (0, import_vue9.withCtx)(() => [(0, import_vue9.createTextVNode)(
            (0, import_vue9.toDisplayString)($setup.uls("添加傀儡", "新增傀儡")),
            1
            /* TEXT */
          )]),
          _: 1
          /* STABLE */
        }, 8, ["disabled"])) : (0, import_vue9.createCommentVNode)("v-if", true)]),
        _: 1
        /* STABLE */
      }), (0, import_vue9.createVNode)($setup["CdxField"], null, {
        label: (0, import_vue9.withCtx)(() => [(0, import_vue9.createTextVNode)(
          (0, import_vue9.toDisplayString)($setup.uls("证据：", "證據：")),
          1
          /* TEXT */
        )]),
        description: (0, import_vue9.withCtx)(() => [(0, import_vue9.createTextVNode)(
          (0, import_vue9.toDisplayString)($setup.uls("输入能够用来体现这些用户可能滥用多重账号的证据，这通常包括茶馆发言、页面历史或其他有关的信息。请避免在此处提供非与傀儡或滥用多重账号相关的其他讨论。", "輸入能夠用來體現這些使用者可能濫用多重賬號的證據，這通常包括茶館發言、頁面歷史或其他有關的資訊。請避免在此處提供非與傀儡或濫用多重賬號相關的其他討論。")),
          1
          /* TEXT */
        )]),
        default: (0, import_vue9.withCtx)(() => [(0, import_vue9.createVNode)($setup["CdxTextArea"], {
          modelValue: $setup.reason,
          "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => $setup.reason = $event),
          disabled: $setup.submitting
        }, null, 8, ["modelValue", "disabled"])]),
        _: 1
        /* STABLE */
      }), (0, import_vue9.createVNode)($setup["CdxCheckbox"], {
        modelValue: $setup.checkuser,
        "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => $setup.checkuser = $event),
        disabled: $setup.submitting,
        title: $setup.uls("用户查核是一种用于获取傀儡指控相关技术证据的工具，若没有正当理由则不会使用，您必须在证据字段充分解释为什么需要使用该工具。用户查核不会用于公开连接用户账号使用的IP地址。", "使用者查核是一種用於獲取傀儡指控相關技術證據的工具，若沒有正當理由則不會使用，您必須在證據欄位充分解釋為什麼需要使用該工具。使用者查核不會用於公開連接使用者賬號使用的IP位址。")
      }, {
        default: (0, import_vue9.withCtx)(() => [(0, import_vue9.createTextVNode)(
          (0, import_vue9.toDisplayString)($setup.uls("请求用户查核", "請求使用者查核")),
          1
          /* TEXT */
        )]),
        _: 1
        /* STABLE */
      }, 8, ["modelValue", "disabled", "title"]), (0, import_vue9.createElementVNode)("div", _hoisted_23, [(0, import_vue9.createTextVNode)(
        (0, import_vue9.toDisplayString)($setup.uls("请使用常识决定是否以", "請使用常識決定是否以")) + " ",
        1
        /* TEXT */
      ), (0, import_vue9.createElementVNode)(
        "code",
        null,
        (0, import_vue9.toDisplayString)($setup.sockmasterNotice),
        1
        /* TEXT */
      ), (0, import_vue9.createTextVNode)(
        " " + (0, import_vue9.toDisplayString)($setup.uls("通知用户。这不是必须的，对于涉及新用户的报告而言，通知他们能让报告显得更公平，但是许多情况下（如长期破坏者）通知更可能适得其反。", "通知使用者。這不是必須的，對於涉及新使用者的報告而言，通知他們能讓報告顯得更公平，但是許多情況下（如長期破壞者）通知更可能適得其反。")),
        1
        /* TEXT */
      )])],
      64
      /* STABLE_FRAGMENT */
    )) : ((0, import_vue9.openBlock)(), (0, import_vue9.createElementBlock)(
      import_vue9.Fragment,
      {
        key: 4
      },
      [(0, import_vue9.createCommentVNode)(" 破坏 "), (0, import_vue9.createElementVNode)(
        "div",
        _hoisted_32,
        (0, import_vue9.toDisplayString)($setup.uls("提报傀儡应优先发送至傀儡调查，除非相关的账号有高频率、涉及多个页面等紧急严重的破坏行为。", "提報傀儡應優先發送至傀儡調查，除非相關的賬號有高頻率、涉及多個頁面等緊急嚴重的破壞行為。")),
        1
        /* TEXT */
      ), (0, import_vue9.createVNode)($setup["CdxField"], null, {
        label: (0, import_vue9.withCtx)(() => [(0, import_vue9.createTextVNode)(
          (0, import_vue9.toDisplayString)($setup.uls("相关页面：", "相關頁面：")),
          1
          /* TEXT */
        )]),
        description: (0, import_vue9.withCtx)(() => [(0, import_vue9.createTextVNode)(
          (0, import_vue9.toDisplayString)($setup.uls("如不希望让报告链接到页面，请留空", "如不希望讓報告連結到頁面，請留空")),
          1
          /* TEXT */
        )]),
        default: (0, import_vue9.withCtx)(() => [(0, import_vue9.createVNode)($setup["CdxTextInput"], {
          modelValue: $setup.page,
          "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => $setup.page = $event),
          disabled: $setup.submitting
        }, null, 8, ["modelValue", "disabled"])]),
        _: 1
        /* STABLE */
      }), (0, import_vue9.createVNode)($setup["CdxField"], null, {
        label: (0, import_vue9.withCtx)(() => [(0, import_vue9.createTextVNode)(
          (0, import_vue9.toDisplayString)($setup.uls("受到破坏的修订版本：", "受到破壞的修訂版本：")),
          1
          /* TEXT */
        )]),
        description: (0, import_vue9.withCtx)(() => [(0, import_vue9.createTextVNode)(
          (0, import_vue9.toDisplayString)($setup.uls("留空以略过差异", "留空以略過差異")),
          1
          /* TEXT */
        )]),
        default: (0, import_vue9.withCtx)(() => [(0, import_vue9.createVNode)($setup["CdxTextInput"], {
          modelValue: $setup.badid,
          "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => $setup.badid = $event),
          disabled: $setup.submitting || $setup.badidDisabled
        }, null, 8, ["modelValue", "disabled"])]),
        _: 1
        /* STABLE */
      }), (0, import_vue9.createVNode)($setup["CdxField"], null, {
        label: (0, import_vue9.withCtx)(() => [(0, import_vue9.createTextVNode)(
          (0, import_vue9.toDisplayString)($setup.uls("破坏前的修订版本：", "破壞前的修訂版本：")),
          1
          /* TEXT */
        )]),
        description: (0, import_vue9.withCtx)(() => [(0, import_vue9.createTextVNode)(
          (0, import_vue9.toDisplayString)($setup.uls("留空以略过差异的较早版本", "留空以略過差異的較早版本")),
          1
          /* TEXT */
        )]),
        default: (0, import_vue9.withCtx)(() => [(0, import_vue9.createVNode)($setup["CdxTextInput"], {
          modelValue: $setup.goodid,
          "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => $setup.goodid = $event),
          disabled: $setup.submitting || $setup.goodidDisabled
        }, null, 8, ["modelValue", "disabled"])]),
        _: 1
        /* STABLE */
      }), (0, import_vue9.createVNode)($setup["CdxField"], null, {
        label: (0, import_vue9.withCtx)(() => [(0, import_vue9.createTextVNode)(
          (0, import_vue9.toDisplayString)($setup.uls("破坏类型：", "破壞類型：")),
          1
          /* TEXT */
        )]),
        default: (0, import_vue9.withCtx)(() => [((0, import_vue9.openBlock)(), (0, import_vue9.createElementBlock)(
          import_vue9.Fragment,
          null,
          (0, import_vue9.renderList)($setup.aivTypes, (item) => {
            return (0, import_vue9.createVNode)($setup["CdxCheckbox"], {
              key: item.value,
              "model-value": $setup.arvtype,
              "input-value": item.value,
              name: "twinklearv-aiv-types",
              disabled: $setup.submitting || item.disabled,
              "onUpdate:modelValue": ($event) => $setup.onTypeToggle(item.value, $event)
            }, {
              default: (0, import_vue9.withCtx)(() => [(0, import_vue9.createTextVNode)(
                (0, import_vue9.toDisplayString)(item.label),
                1
                /* TEXT */
              )]),
              _: 2
              /* DYNAMIC */
            }, 1032, ["model-value", "input-value", "disabled", "onUpdate:modelValue"]);
          }),
          64
          /* STABLE_FRAGMENT */
        ))]),
        _: 1
        /* STABLE */
      }), !$props.isIP ? ((0, import_vue9.openBlock)(), (0, import_vue9.createBlock)($setup["CdxCheckbox"], {
        key: 0,
        modelValue: $setup.hidename,
        "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => $setup.hidename = $event),
        disabled: $setup.submitting,
        title: $setup.uls("若用户名不当请勾选此项，注意：请考虑私下联系管理员处理。", "若使用者名稱不當請勾選此項，注意：請考慮私下聯絡管理員處理。")
      }, {
        default: (0, import_vue9.withCtx)(() => [(0, import_vue9.createTextVNode)(
          (0, import_vue9.toDisplayString)($setup.uls("在页面上及编辑摘要隐藏用户名", "在頁面上及編輯摘要隱藏使用者名稱")),
          1
          /* TEXT */
        )]),
        _: 1
        /* STABLE */
      }, 8, ["modelValue", "disabled", "title"])) : (0, import_vue9.createCommentVNode)("v-if", true), (0, import_vue9.createVNode)($setup["CdxField"], null, {
        label: (0, import_vue9.withCtx)(() => [(0, import_vue9.createTextVNode)(
          (0, import_vue9.toDisplayString)($setup.uls("评论：", "評論：")),
          1
          /* TEXT */
        )]),
        default: (0, import_vue9.withCtx)(() => [(0, import_vue9.createVNode)($setup["CdxTextArea"], {
          modelValue: $setup.reason,
          "onUpdate:modelValue": _cache[11] || (_cache[11] = ($event) => $setup.reason = $event),
          disabled: $setup.submitting
        }, null, 8, ["modelValue", "disabled"])]),
        _: 1
        /* STABLE */
      })],
      64
      /* STABLE_FRAGMENT */
    )), (0, import_vue9.createVNode)($setup["CdxButton"], {
      disabled: $setup.submitting,
      weight: "quiet",
      onClick: $setup.onPreview
    }, {
      default: (0, import_vue9.withCtx)(() => [(0, import_vue9.createTextVNode)(
        (0, import_vue9.toDisplayString)($setup.uls("预览", "預覽")),
        1
        /* TEXT */
      )]),
      _: 1
      /* STABLE */
    }, 8, ["disabled"]), (0, import_vue9.createElementVNode)(
      "div",
      _hoisted_4,
      null,
      512
      /* NEED_PATCH */
    ), (0, import_vue9.createVNode)(
      $setup["TwStatus"],
      {
        ref: "statusRef"
      },
      null,
      512
      /* NEED_PATCH */
    )]),
    _: 1
    /* STABLE */
  }, 8, ["open", "title", "footer-links", "primary-action"]);
}
//! src/Twinkle/modules/ui/TwArvDialog.vue
TwArvDialog_default.render = render3;
TwArvDialog_default.__file = "src\\Twinkle\\modules\\ui\\TwArvDialog.vue";
TwArvDialog_default.__scopeId = "data-v-90e99a11";
var TwArvDialog_default2 = TwArvDialog_default;
var import_vue10 = require("vue");
var import_codex4 = require("@wikimedia/codex");
var import_vue11 = require("vue");
//! src/Twinkle/modules/utils/useShiftClick.ts
var useShiftClick = () => {
  let lastCheckbox = null;
  const onShiftClick = (event) => {
    const target = event.target;
    const thisCb = target.closest('input[type="checkbox"]');
    if (!thisCb) {
      return;
    }
    if (event.shiftKey && lastCheckbox !== null) {
      const container = event.currentTarget;
      const cbs = [...container.querySelectorAll('input[type="checkbox"]')];
      const index = cbs.indexOf(thisCb);
      const lastIndex = cbs.indexOf(lastCheckbox);
      if (index !== -1 && lastIndex !== -1) {
        const endState = thisCb.checked;
        let start;
        let finish;
        if (index < lastIndex) {
          start = index + 1;
          finish = lastIndex;
        } else {
          start = lastIndex;
          finish = index - 1;
        }
        for (let i = start; i <= finish; i++) {
          const checkbox = cbs[i];
          if (checkbox && checkbox.checked !== endState) {
            checkbox.click();
          }
        }
      }
    }
    lastCheckbox = thisCb;
  };
  return {
    onShiftClick
  };
};
var TwBatchDeleteDialog_default = /* @__PURE__ */ (0, import_vue10.defineComponent)({
  __name: "TwBatchDeleteDialog",
  props: {
    title: {
      type: String,
      required: true
    },
    reasonList: {
      type: Array,
      required: true
    },
    appendPunctuation: {
      type: Function,
      required: true
    },
    list: {
      type: Object,
      required: true
    },
    footerLinks: {
      type: Array,
      required: true
    }
  },
  emits: ["loadSubpages", "close"],
  setup(__props, {
    expose: __expose,
    emit: __emit
  }) {
    const props = __props;
    const emit = __emit;
    const open = (0, import_vue11.ref)(true);
    const deletePage = (0, import_vue11.ref)(true);
    const deleteTalk = (0, import_vue11.ref)(true);
    const deleteRedirects = (0, import_vue11.ref)(true);
    const deleteSubpages = (0, import_vue11.ref)(false);
    const deleteSubpageTalks = (0, import_vue11.ref)(false);
    const deleteSubpageRedirects = (0, import_vue11.ref)(false);
    const unlinkSubpages = (0, import_vue11.ref)(false);
    const unlinkPage = (0, import_vue11.ref)(false);
    const unlinkFile = (0, import_vue11.ref)(true);
    const commonReason = (0, import_vue11.ref)("");
    const reason = (0, import_vue11.ref)("");
    const selectedPages = (0, import_vue11.ref)([]);
    const selectedSubpages = (0, import_vue11.ref)([]);
    const submitting = (0, import_vue11.ref)(false);
    const statusRef = (0, import_vue11.ref)(null);
    __expose({
      getStatusRoot: () => {
        var _statusRef$value2;
        return ((_statusRef$value2 = statusRef.value) === null || _statusRef$value2 === void 0 ? void 0 : _statusRef$value2.getStatusRoot()) ?? null;
      },
      clear: () => {
        var _statusRef$value3;
        (_statusRef$value3 = statusRef.value) === null || _statusRef$value3 === void 0 || _statusRef$value3.clear();
      }
    });
    const {
      onShiftClick: onMainShiftClick
    } = useShiftClick();
    const subpageShiftClickers = /* @__PURE__ */ new Map();
    const getSubpageShiftClick = (pageTitle) => {
      if (!subpageShiftClickers.has(pageTitle)) {
        subpageShiftClickers.set(pageTitle, useShiftClick());
      }
      return subpageShiftClickers.get(pageTitle).onShiftClick;
    };
    const reasonItems = (0, import_vue11.computed)(() => props.reasonList.map((item) => ({
      value: item.value,
      label: item.label
    })));
    (0, import_vue11.watch)(() => props.list.pages, (list) => {
      selectedPages.value = list.map((item) => item.title);
    });
    (0, import_vue11.watch)(() => props.list.pages.map((item) => item.subpages), () => {
      for (const page of props.list.pages) {
        if (page.subpages) {
          for (const subpage of page.subpages) {
            if (!selectedSubpages.value.includes(subpage.title)) {
              selectedSubpages.value = [...selectedSubpages.value, subpage.title];
            }
          }
        }
      }
    }, {
      deep: true
    });
    (0, import_vue11.watch)(deleteSubpages, (checked) => {
      if (checked) {
        deleteSubpageRedirects.value = deleteRedirects.value;
        deleteSubpageTalks.value = deleteTalk.value;
        unlinkSubpages.value = unlinkPage.value;
        const titlesToLoad = props.list.pages.filter((item) => selectedPages.value.includes(item.title) && !item.subpages).map((item) => item.title);
        if (titlesToLoad.length > 0) {
          emit("loadSubpages", titlesToLoad);
        }
      }
    });
    (0, import_vue11.watch)(commonReason, (value) => {
      if (!value) {
        return;
      }
      if (reason.value !== "") {
        reason.value = props.appendPunctuation(reason.value);
      }
      reason.value += value;
      commonReason.value = "";
    });
    const protectedCount = (0, import_vue11.computed)(() => props.list.pages.filter((item) => item.isProtected && selectedPages.value.includes(item.title)).length);
    const onToggle = (kind, value, modelValue) => {
      const target = kind === "pages" ? selectedPages : selectedSubpages;
      if (Array.isArray(modelValue)) {
        target.value = modelValue.filter((item) => typeof item === "string");
      } else if (modelValue) {
        target.value = [...target.value, value];
      } else {
        target.value = target.value.filter((item) => item !== value);
      }
    };
    const selectAll = () => {
      selectedPages.value = props.list.pages.map((item) => item.title);
      if (deleteSubpages.value) {
        for (const page of props.list.pages) {
          if (page.subpages) {
            for (const subpage of page.subpages) {
              if (!selectedSubpages.value.includes(subpage.title)) {
                selectedSubpages.value = [...selectedSubpages.value, subpage.title];
              }
            }
          }
        }
        const titlesToLoad = props.list.pages.filter((item) => !item.subpages).map((item) => item.title);
        if (titlesToLoad.length > 0) {
          emit("loadSubpages", titlesToLoad);
        }
      }
    };
    const selectNone = () => {
      selectedPages.value = [];
      selectedSubpages.value = [];
    };
    const primaryAction = (0, import_vue11.computed)(() => ({
      label: uls("提交", "提交"),
      actionType: "progressive",
      disabled: submitting.value
    }));
    const submit = () => {
      var _statusRef$value4;
      if (submitting.value) {
        return;
      }
      if (!reason.value.trim()) {
        void mw.notify(uls("您需要给出一个理由", "您需要給出一個理由"), {
          type: "warn",
          tag: "twinklebatchdelete"
        });
        return;
      }
      if (selectedPages.value.length === 0) {
        void mw.notify(uls("请至少选择一个页面。", "請至少選擇一個頁面。"), {
          type: "warn",
          tag: "twinklebatchdelete"
        });
        return;
      }
      submitting.value = true;
      evaluate({
        reason: reason.value.trim(),
        pages: [...selectedPages.value],
        subpages: [...selectedSubpages.value],
        protectedCount: protectedCount.value,
        delete_page: deletePage.value,
        delete_talk: deleteTalk.value,
        delete_redirects: deleteRedirects.value,
        delete_subpages: deleteSubpages.value,
        delete_subpage_redirects: deleteSubpageRedirects.value,
        delete_subpage_talks: deleteSubpageTalks.value,
        unlink_subpages: unlinkSubpages.value,
        unlink_page: unlinkPage.value,
        unlink_file: unlinkFile.value
      }, ((_statusRef$value4 = statusRef.value) === null || _statusRef$value4 === void 0 ? void 0 : _statusRef$value4.getStatusRoot()) ?? null, () => {
        submitting.value = false;
      });
    };
    (0, import_vue11.watch)(open, (value) => {
      if (!value) {
        emit("close");
      }
    });
    let unlinkCache = {};
    const callbacks = {
      doExtras: (thingWithParameters) => {
        const pageobj = thingWithParameters instanceof Morebits.wiki.api ? thingWithParameters.parent : thingWithParameters;
        const params = pageobj.getCallbackParameters();
        params.pageDeleter.workerSuccess(pageobj);
        let query;
        if (params.unlink_page) {
          unlinkCache = {};
          query = {
            action: "query",
            list: "backlinks",
            blfilterredir: "nonredirects",
            blnamespace: [0],
            bltitle: params.page,
            bllimit: "max"
            // 500 is max for normal users, 5000 for bots and sysops
          };
          const api2 = newParamsApi(uls("正在获取链入", "正在取得連入"), query, callbacks.unlinkBacklinksMain);
          api2.params = params;
          api2.post();
        }
        if (params.unlink_file) {
          query = {
            action: "query",
            list: "imageusage",
            iutitle: params.page,
            iulimit: "max"
            // 500 is max for normal users, 5000 for bots and sysops
          };
          const api2 = newParamsApi(uls("正在获取文件链入", "正在取得檔案連入"), query, callbacks.unlinkImageInstancesMain);
          api2.params = params;
          api2.post();
        }
        if (params.delete_page) {
          if (params.delete_redirects) {
            query = {
              action: "query",
              titles: params.page,
              prop: "redirects",
              rdlimit: "max"
              // 500 is max for normal users, 5000 for bots and sysops
            };
            const api2 = newParamsApi(uls("正在获取重定向", "正在取得重新導向"), query, callbacks.deleteRedirectsMain);
            api2.params = params;
            api2.post();
          }
          if (params.delete_talk) {
            const pageTitle = mw.Title.newFromText(params.page);
            if (pageTitle && pageTitle.namespace % 2 === 0 && pageTitle.namespace !== 2) {
              pageTitle.namespace++;
              query = {
                action: "query",
                titles: pageTitle.toText()
              };
              const api2 = newParamsApi(uls("正在检查讨论页面是否存在", "正在檢查討論頁面是否存在"), query, callbacks.deleteTalk);
              api2.params = params;
              api2.params.talkPage = pageTitle.toText();
              api2.post();
            }
          }
        }
      },
      deleteRedirectsMain: (apiobj) => {
        const xml = apiobj.getResponse();
        const pages = $(xml).find("rd").map((_index, element) => {
          return $(element).attr("title");
        }).get().filter((title) => !!title);
        if (!pages.length) {
          return;
        }
        const redirectDeleter = new Morebits.batchOperation(uls("正在删除到 ", "正在刪除到 ") + apiobj.params.page + uls(" 的重定向", " 的重新導向"));
        redirectDeleter.setOption("chunkSize", Number(Twinkle.getPref("batchChunks")));
        redirectDeleter.setPageList(pages);
        redirectDeleter.run((pageName) => {
          const qiuwen_page = new Morebits.wiki.page(pageName, uls("正在删除 ", "正在刪除 ") + pageName);
          qiuwen_page.setEditSummary(`[[QW:CSD#G9|G9]]: ${uls("指向已删页面“", "指向已刪頁面「")}${apiobj.params.page}${uls("”的重定向", "」的重新導向")}`);
          qiuwen_page.setChangeTags(Twinkle.changeTags);
          qiuwen_page.deletePage(redirectDeleter.workerSuccess, redirectDeleter.workerFailure);
        });
      },
      deleteTalk: (apiobj) => {
        const xml = apiobj.getResponse();
        const exists = $(xml).find("page:not([missing])").length > 0;
        if (!exists) {
          return;
        }
        const page = new Morebits.wiki.page(apiobj.params.talkPage ?? "", uls("正在删除页面 ", "正在刪除頁面 ") + apiobj.params.page + uls(" 的讨论页", " 的討論頁"));
        page.setEditSummary(`[[QW:CSD#G9|G9]]: ${uls("已删页面“", "已刪頁面「")}${apiobj.params.page}${uls("”的[[Help:讨论页|讨论页]]", "」的[[Help:討論頁|討論頁]]")}`);
        page.setChangeTags(Twinkle.changeTags);
        page.deletePage();
      },
      unlinkBacklinksMain: (apiobj) => {
        const xml = apiobj.getResponse();
        const pages = $(xml).find("bl").map((_index, element) => {
          return $(element).attr("title");
        }).get().filter((title) => !!title);
        if (!pages.length) {
          return;
        }
        const unlinker = new Morebits.batchOperation(`正在取消到 ${apiobj.params.page}${uls(" 的链入", " 的連入")}`);
        unlinker.setOption("chunkSize", Number(Twinkle.getPref("batchChunks")));
        unlinker.setPageList(pages);
        unlinker.run((pageName) => {
          const qiuwen_page = new Morebits.wiki.page(pageName, `正在取消 ${pageName}${uls(" 上的链入", " 上的連入")}`);
          const params = {
            ...apiobj.params
          };
          params.title = pageName;
          params.unlinker = unlinker;
          qiuwen_page.setCallbackParameters(params);
          qiuwen_page.load(callbacks.unlinkBacklinks);
        });
      },
      unlinkBacklinks: (pageobj) => {
        const params = pageobj.getCallbackParameters();
        const unlinker = params.unlinker;
        if (!unlinker) {
          return;
        }
        if (!pageobj.exists()) {
          unlinker.workerSuccess(pageobj);
          return;
        }
        let text;
        if (params.title !== void 0 && params.title in unlinkCache) {
          text = unlinkCache[params.title] ?? "";
        } else {
          text = pageobj.getPageText() ?? "";
        }
        const old_text = text;
        const wikitextPage = new Morebits.wikitext.page(text);
        text = wikitextPage.removeLink(params.page).getText();
        if (params.title !== void 0) {
          unlinkCache[params.title] = text;
        }
        if (text === old_text) {
          unlinker.workerSuccess(pageobj);
          return;
        }
        pageobj.setEditSummary(uls("取消到已删页面", "取消到已刪頁面") + params.page + uls("的链入", "的連入"));
        pageobj.setChangeTags(Twinkle.changeTags);
        pageobj.setPageText(text);
        pageobj.setCreateOption("nocreate");
        pageobj.setMaxConflictRetries(10);
        pageobj.save(unlinker.workerSuccess, unlinker.workerFailure);
      },
      unlinkImageInstancesMain: (apiobj) => {
        const xml = apiobj.getResponse();
        const pages = $(xml).find("iu").map((_index, element) => {
          return $(element).attr("title");
        }).get().filter((title) => !!title);
        if (!pages.length) {
          return;
        }
        const unlinker = new Morebits.batchOperation(`正在取消到 ${apiobj.params.page}${uls(" 的链入", " 的連入")}`);
        unlinker.setOption("chunkSize", Number(Twinkle.getPref("batchChunks")));
        unlinker.setPageList(pages);
        unlinker.run((pageName) => {
          const qiuwen_page = new Morebits.wiki.page(pageName, `取消 ${pageName}${uls(" 的文件使用", " 的檔案使用")}`);
          const params = {
            ...apiobj.params
          };
          params.title = pageName;
          params.unlinker = unlinker;
          qiuwen_page.setCallbackParameters(params);
          qiuwen_page.load(callbacks.unlinkImageInstances);
        });
      },
      unlinkImageInstances: (pageobj) => {
        const params = pageobj.getCallbackParameters();
        const unlinker = params.unlinker;
        if (!unlinker) {
          return;
        }
        if (!pageobj.exists()) {
          unlinker.workerSuccess(pageobj);
          return;
        }
        const image = params.page.replace(new RegExp(`^${Morebits.namespaceRegex(6)}:`), "");
        let text;
        if (params.title !== void 0 && params.title in unlinkCache) {
          text = unlinkCache[params.title] ?? "";
        } else {
          text = pageobj.getPageText() ?? "";
        }
        const old_text = text;
        const wikitextPage = new Morebits.wikitext.page(text);
        text = wikitextPage.commentOutImage(image, uls("因文件已删，故注解", "因檔案已刪，故註解")).getText();
        if (params.title !== void 0) {
          unlinkCache[params.title] = text;
        }
        if (text === old_text) {
          pageobj.getStatusElement().error(`在 ${pageobj.getPageName()} 上取消 ${image}${uls(" 的文件使用失败", " 的檔案使用失敗")}`);
          unlinker.workerFailure();
          return;
        }
        pageobj.setEditSummary(uls("取消使用已被删除文件", "取消使用已被刪除檔案") + image + uls("，因为：", "，因為：") + params.reason);
        pageobj.setChangeTags(Twinkle.changeTags);
        pageobj.setPageText(text);
        pageobj.setCreateOption("nocreate");
        pageobj.setMaxConflictRetries(10);
        pageobj.save(unlinker.workerSuccess, unlinker.workerFailure);
      }
    };
    const evaluate = (params, statusContainer, restore) => {
      Morebits.wiki.actionCompleted.notice = uls("批量删除已完成", "批次刪除已完成");
      if (params.protectedCount > 0 && !confirm(uls("您正要删除 ", "您正要刪除 ") + mw.language.convertNumber(params.protectedCount) + uls(" 个全保护页面，您确定吗？", " 個全保護頁面，您確定嗎？"))) {
        if (restore) {
          restore();
        }
        return;
      }
      const {
        pages
      } = params;
      const {
        subpages
      } = params;
      const {
        reason: reason2
      } = params;
      const delete_page = params.delete_page;
      let delete_talk = false;
      let delete_redirects = false;
      let delete_subpages = false;
      let delete_subpage_redirects = false;
      let delete_subpage_talks = false;
      let unlink_subpages = false;
      if (delete_page) {
        delete_talk = params.delete_talk;
        delete_redirects = params.delete_redirects;
        delete_subpages = params.delete_subpages;
        if (delete_subpages) {
          delete_subpage_redirects = params.delete_subpage_redirects;
          delete_subpage_talks = params.delete_subpage_talks;
          unlink_subpages = params.unlink_subpages;
        }
      }
      const unlink_page = params.unlink_page;
      const unlink_file = params.unlink_file;
      if (!reason2) {
        void mw.notify(uls("您需要给出一个理由", "您需要給出一個理由"), {
          type: "warn",
          tag: "twinklebatchdelete"
        });
        if (restore) {
          restore();
        }
        return;
      }
      Morebits.status.init(statusContainer);
      if (pages.length === 0) {
        Morebits.status.error(uls("错误", "錯誤"), uls("没有要删除的内容，中止", "沒有要刪除的內容，中止"));
        if (restore) {
          restore();
        }
        return;
      }
      const pageDeleter = new Morebits.batchOperation(delete_page ? uls("正在删除页面", "正在刪除頁面") : uls("正在启动要求的任务", "正在啟動要求的任務"));
      pageDeleter.setOption("chunkSize", Number(Twinkle.getPref("batchChunks")));
      pageDeleter.setOption("preserveIndividualStatusLines", delete_page);
      pageDeleter.setPageList(pages);
      pageDeleter.run((pageName) => {
        const workerParams = {
          page: pageName,
          delete_page,
          delete_talk,
          delete_redirects,
          unlink_page,
          unlink_file: unlink_file && new RegExp(`^${Morebits.namespaceRegex(6)}:`, "i").test(pageName),
          reason: reason2,
          pageDeleter
        };
        const qiuwen_page = new Morebits.wiki.page(pageName, uls("正在删除页面 ", "正在刪除頁面 ") + pageName);
        qiuwen_page.setCallbackParameters(workerParams);
        if (delete_page) {
          qiuwen_page.setEditSummary(`${reason2}（批量）`);
          qiuwen_page.setChangeTags(Twinkle.changeTags);
          qiuwen_page.suppressProtectWarning();
          qiuwen_page.deletePage(callbacks.doExtras, pageDeleter.workerFailure);
        } else {
          callbacks.doExtras(qiuwen_page);
        }
      }, () => {
        if (delete_subpages) {
          const subpageDeleter = new Morebits.batchOperation(uls("正在删除子页面", "正在刪除子頁面"));
          subpageDeleter.setOption("chunkSize", Number(Twinkle.getPref("batchChunks")));
          subpageDeleter.setOption("preserveIndividualStatusLines", true);
          subpageDeleter.setPageList(subpages);
          subpageDeleter.run((pageName) => {
            const workerParams = {
              page: pageName,
              delete_page: true,
              delete_talk: delete_subpage_talks,
              delete_redirects: delete_subpage_redirects,
              unlink_page: unlink_subpages,
              unlink_file: false,
              reason: reason2,
              pageDeleter: subpageDeleter
            };
            const qiuwen_page = new Morebits.wiki.page(pageName, uls("正在删除子页面 ", "正在刪除子頁面 ") + pageName);
            qiuwen_page.setCallbackParameters(workerParams);
            qiuwen_page.setEditSummary(`${reason2}（批量）`);
            qiuwen_page.setChangeTags(Twinkle.changeTags);
            qiuwen_page.suppressProtectWarning();
            qiuwen_page.deletePage(callbacks.doExtras, pageDeleter.workerFailure);
          });
        }
      });
    };
    const __returned__ = {
      props,
      emit,
      open,
      deletePage,
      deleteTalk,
      deleteRedirects,
      deleteSubpages,
      deleteSubpageTalks,
      deleteSubpageRedirects,
      unlinkSubpages,
      unlinkPage,
      unlinkFile,
      commonReason,
      reason,
      selectedPages,
      selectedSubpages,
      submitting,
      statusRef,
      onMainShiftClick,
      subpageShiftClickers,
      getSubpageShiftClick,
      reasonItems,
      protectedCount,
      onToggle,
      selectAll,
      selectNone,
      primaryAction,
      submit,
      get unlinkCache() {
        return unlinkCache;
      },
      set unlinkCache(v) {
        unlinkCache = v;
      },
      callbacks,
      evaluate,
      get CdxButton() {
        return import_codex4.CdxButton;
      },
      get CdxCheckbox() {
        return import_codex4.CdxCheckbox;
      },
      get CdxField() {
        return import_codex4.CdxField;
      },
      get CdxSelect() {
        return import_codex4.CdxSelect;
      },
      get CdxTextInput() {
        return import_codex4.CdxTextInput;
      },
      TwDialog: TwDialog_default2,
      TwStatus: TwStatus_default2,
      get uls() {
        return uls;
      }
    };
    Object.defineProperty(__returned__, "__isScriptSetup", {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});
var import_vue12 = require("vue");
var _hoisted_14 = {
  key: 0,
  class: "tw-dbatch-subgroup"
};
var _hoisted_24 = {
  key: 0,
  class: "tw-dbatch-subgroup"
};
var _hoisted_33 = {
  key: 1,
  class: "tw-loading"
};
var _hoisted_42 = {
  class: "tw-batch-actions"
};
var _hoisted_5 = {
  key: 0
};
var _hoisted_6 = ["onClick"];
function render4(_ctx, _cache, $props, $setup, $data, $options) {
  return (0, import_vue12.openBlock)(), (0, import_vue12.createBlock)($setup["TwDialog"], {
    open: $setup.open,
    title: $props.title,
    "script-name": "Twinkle",
    "footer-links": $props.footerLinks,
    "primary-action": $setup.primaryAction,
    "onUpdate:open": _cache[12] || (_cache[12] = ($event) => $setup.open = $event),
    onPrimary: $setup.submit
  }, {
    default: (0, import_vue12.withCtx)(() => [(0, import_vue12.createVNode)($setup["CdxCheckbox"], {
      modelValue: $setup.deletePage,
      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.deletePage = $event),
      disabled: $setup.submitting
    }, {
      default: (0, import_vue12.withCtx)(() => [(0, import_vue12.createTextVNode)(
        (0, import_vue12.toDisplayString)($setup.uls("删除页面", "刪除頁面")),
        1
        /* TEXT */
      )]),
      _: 1
      /* STABLE */
    }, 8, ["modelValue", "disabled"]), $setup.deletePage ? ((0, import_vue12.openBlock)(), (0, import_vue12.createElementBlock)("div", _hoisted_14, [(0, import_vue12.createVNode)($setup["CdxCheckbox"], {
      modelValue: $setup.deleteTalk,
      "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.deleteTalk = $event),
      disabled: $setup.submitting
    }, {
      default: (0, import_vue12.withCtx)(() => [(0, import_vue12.createTextVNode)(
        (0, import_vue12.toDisplayString)($setup.uls("删除关联的讨论页（用户讨论页除外）", "刪除關聯的討論頁（使用者討論頁除外）")),
        1
        /* TEXT */
      )]),
      _: 1
      /* STABLE */
    }, 8, ["modelValue", "disabled"]), (0, import_vue12.createVNode)($setup["CdxCheckbox"], {
      modelValue: $setup.deleteRedirects,
      "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $setup.deleteRedirects = $event),
      disabled: $setup.submitting
    }, {
      default: (0, import_vue12.withCtx)(() => [(0, import_vue12.createTextVNode)(
        (0, import_vue12.toDisplayString)($setup.uls("删除到已删页面的重定向页", "刪除到已刪頁面的重新導向頁面")),
        1
        /* TEXT */
      )]),
      _: 1
      /* STABLE */
    }, 8, ["modelValue", "disabled"]), (0, import_vue12.createVNode)($setup["CdxCheckbox"], {
      modelValue: $setup.deleteSubpages,
      "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $setup.deleteSubpages = $event),
      disabled: $setup.submitting
    }, {
      default: (0, import_vue12.withCtx)(() => [(0, import_vue12.createTextVNode)(
        (0, import_vue12.toDisplayString)($setup.uls("删除已删页面的子页面", "刪除已刪頁面的子頁面")),
        1
        /* TEXT */
      )]),
      _: 1
      /* STABLE */
    }, 8, ["modelValue", "disabled"]), $setup.deleteSubpages ? ((0, import_vue12.openBlock)(), (0, import_vue12.createElementBlock)("div", _hoisted_24, [(0, import_vue12.createVNode)($setup["CdxCheckbox"], {
      modelValue: $setup.deleteSubpageTalks,
      "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $setup.deleteSubpageTalks = $event),
      disabled: $setup.submitting
    }, {
      default: (0, import_vue12.withCtx)(() => [(0, import_vue12.createTextVNode)(
        (0, import_vue12.toDisplayString)($setup.uls("删除已删子页面的讨论页", "刪除已刪子頁面的討論頁")),
        1
        /* TEXT */
      )]),
      _: 1
      /* STABLE */
    }, 8, ["modelValue", "disabled"]), (0, import_vue12.createVNode)($setup["CdxCheckbox"], {
      modelValue: $setup.deleteSubpageRedirects,
      "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => $setup.deleteSubpageRedirects = $event),
      disabled: $setup.submitting
    }, {
      default: (0, import_vue12.withCtx)(() => [(0, import_vue12.createTextVNode)(
        (0, import_vue12.toDisplayString)($setup.uls("删除到已删子页面的重定向页", "刪除到已刪子頁面的重新導向頁面")),
        1
        /* TEXT */
      )]),
      _: 1
      /* STABLE */
    }, 8, ["modelValue", "disabled"]), (0, import_vue12.createVNode)($setup["CdxCheckbox"], {
      modelValue: $setup.unlinkSubpages,
      "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => $setup.unlinkSubpages = $event),
      disabled: $setup.submitting
    }, {
      default: (0, import_vue12.withCtx)(() => [(0, import_vue12.createTextVNode)(
        (0, import_vue12.toDisplayString)($setup.uls("取消所有已删页面的链入（仅处理条目命名空间）", "取消所有已刪頁面的連入（僅處理條目命名空間）")),
        1
        /* TEXT */
      )]),
      _: 1
      /* STABLE */
    }, 8, ["modelValue", "disabled"])])) : (0, import_vue12.createCommentVNode)("v-if", true)])) : (0, import_vue12.createCommentVNode)("v-if", true), (0, import_vue12.createVNode)($setup["CdxCheckbox"], {
      modelValue: $setup.unlinkPage,
      "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => $setup.unlinkPage = $event),
      disabled: $setup.submitting
    }, {
      default: (0, import_vue12.withCtx)(() => [(0, import_vue12.createTextVNode)(
        (0, import_vue12.toDisplayString)($setup.uls("取消链入（仅处理条目命名空间）", "取消連入（僅處理條目命名空間）")),
        1
        /* TEXT */
      )]),
      _: 1
      /* STABLE */
    }, 8, ["modelValue", "disabled"]), (0, import_vue12.createVNode)($setup["CdxCheckbox"], {
      modelValue: $setup.unlinkFile,
      "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => $setup.unlinkFile = $event),
      disabled: $setup.submitting
    }, {
      default: (0, import_vue12.withCtx)(() => [(0, import_vue12.createTextVNode)(
        (0, import_vue12.toDisplayString)($setup.uls("移除文件使用（所有命名空间）", "移除檔案使用（所有命名空間）")),
        1
        /* TEXT */
      )]),
      _: 1
      /* STABLE */
    }, 8, ["modelValue", "disabled"]), (0, import_vue12.createVNode)($setup["CdxField"], null, {
      label: (0, import_vue12.withCtx)(() => [..._cache[13] || (_cache[13] = [(0, import_vue12.createTextVNode)(
        "常用理由：",
        -1
        /* CACHED */
      )])]),
      default: (0, import_vue12.withCtx)(() => [(0, import_vue12.createVNode)($setup["CdxSelect"], {
        selected: $setup.commonReason,
        "onUpdate:selected": _cache[9] || (_cache[9] = ($event) => $setup.commonReason = $event),
        "menu-items": $setup.reasonItems,
        disabled: $setup.submitting
      }, null, 8, ["selected", "menu-items", "disabled"])]),
      _: 1
      /* STABLE */
    }), (0, import_vue12.createVNode)($setup["CdxField"], null, {
      label: (0, import_vue12.withCtx)(() => [..._cache[14] || (_cache[14] = [(0, import_vue12.createTextVNode)(
        "理由：",
        -1
        /* CACHED */
      )])]),
      default: (0, import_vue12.withCtx)(() => [(0, import_vue12.createVNode)($setup["CdxTextInput"], {
        modelValue: $setup.reason,
        "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => $setup.reason = $event),
        disabled: $setup.submitting
      }, null, 8, ["modelValue", "disabled"])]),
      _: 1
      /* STABLE */
    }), !$props.list.loaded ? ((0, import_vue12.openBlock)(), (0, import_vue12.createElementBlock)(
      "div",
      _hoisted_33,
      (0, import_vue12.toDisplayString)($setup.uls("加载中……", "載入中……")),
      1
      /* TEXT */
    )) : ((0, import_vue12.openBlock)(), (0, import_vue12.createElementBlock)(
      import_vue12.Fragment,
      {
        key: 2
      },
      [(0, import_vue12.createElementVNode)(
        "h5",
        null,
        (0, import_vue12.toDisplayString)($setup.uls("待删除页面", "待刪除頁面")),
        1
        /* TEXT */
      ), (0, import_vue12.createElementVNode)("div", _hoisted_42, [(0, import_vue12.createVNode)($setup["CdxButton"], {
        disabled: $setup.submitting,
        weight: "quiet",
        onClick: $setup.selectAll
      }, {
        default: (0, import_vue12.withCtx)(() => [(0, import_vue12.createTextVNode)(
          (0, import_vue12.toDisplayString)($setup.uls("全选", "全選")),
          1
          /* TEXT */
        )]),
        _: 1
        /* STABLE */
      }, 8, ["disabled"]), (0, import_vue12.createVNode)($setup["CdxButton"], {
        disabled: $setup.submitting,
        weight: "quiet",
        onClick: $setup.selectNone
      }, {
        default: (0, import_vue12.withCtx)(() => [(0, import_vue12.createTextVNode)(
          (0, import_vue12.toDisplayString)($setup.uls("全不选", "全不選")),
          1
          /* TEXT */
        )]),
        _: 1
        /* STABLE */
      }, 8, ["disabled"])]), $props.list.subpagesLoading ? ((0, import_vue12.openBlock)(), (0, import_vue12.createElementBlock)(
        "div",
        _hoisted_5,
        (0, import_vue12.toDisplayString)($setup.uls("加载中...", "載入中...")),
        1
        /* TEXT */
      )) : (0, import_vue12.createCommentVNode)("v-if", true), (0, import_vue12.createElementVNode)("div", {
        onClick: _cache[11] || (_cache[11] = (...args) => $setup.onMainShiftClick && $setup.onMainShiftClick(...args))
      }, [((0, import_vue12.openBlock)(true), (0, import_vue12.createElementBlock)(
        import_vue12.Fragment,
        null,
        (0, import_vue12.renderList)($props.list.pages, (item) => {
          return (0, import_vue12.openBlock)(), (0, import_vue12.createBlock)($setup["CdxCheckbox"], {
            key: item.title,
            "model-value": $setup.selectedPages,
            "input-value": item.title,
            name: "twinkle-batchdelete-pages",
            disabled: $setup.submitting,
            "onUpdate:modelValue": ($event) => $setup.onToggle("pages", item.title, $event)
          }, {
            default: (0, import_vue12.withCtx)(() => [(0, import_vue12.createElementVNode)(
              "span",
              {
                class: (0, import_vue12.normalizeClass)({
                  "tw-batch-protected": item.isProtected
                })
              },
              (0, import_vue12.toDisplayString)(item.label),
              3
              /* TEXT, CLASS */
            )]),
            _: 2
            /* DYNAMIC */
          }, 1032, ["model-value", "input-value", "disabled", "onUpdate:modelValue"]);
        }),
        128
        /* KEYED_FRAGMENT */
      ))]), $setup.deleteSubpages ? ((0, import_vue12.openBlock)(true), (0, import_vue12.createElementBlock)(
        import_vue12.Fragment,
        {
          key: 1
        },
        (0, import_vue12.renderList)($props.list.pages, (item) => {
          return (0, import_vue12.openBlock)(), (0, import_vue12.createElementBlock)(
            import_vue12.Fragment,
            {
              key: `${item.title}-sub`
            },
            [item.subpages && item.subpages.length > 0 ? ((0, import_vue12.openBlock)(), (0, import_vue12.createElementBlock)("div", {
              key: 0,
              class: "tw-dbatch-subgroup",
              onClick: ($event) => $setup.getSubpageShiftClick(item.title)
            }, [((0, import_vue12.openBlock)(true), (0, import_vue12.createElementBlock)(
              import_vue12.Fragment,
              null,
              (0, import_vue12.renderList)(item.subpages, (subpage) => {
                return (0, import_vue12.openBlock)(), (0, import_vue12.createBlock)($setup["CdxCheckbox"], {
                  key: subpage.title,
                  "model-value": $setup.selectedSubpages,
                  "input-value": subpage.title,
                  name: "twinkle-batchdelete-subpages",
                  disabled: $setup.submitting,
                  "onUpdate:modelValue": ($event) => $setup.onToggle("subpages", subpage.title, $event)
                }, {
                  default: (0, import_vue12.withCtx)(() => [(0, import_vue12.createElementVNode)(
                    "span",
                    {
                      class: (0, import_vue12.normalizeClass)({
                        "tw-batch-protected": subpage.isProtected
                      })
                    },
                    (0, import_vue12.toDisplayString)(subpage.label),
                    3
                    /* TEXT, CLASS */
                  )]),
                  _: 2
                  /* DYNAMIC */
                }, 1032, ["model-value", "input-value", "disabled", "onUpdate:modelValue"]);
              }),
              128
              /* KEYED_FRAGMENT */
            ))], 8, _hoisted_6)) : (0, import_vue12.createCommentVNode)("v-if", true)],
            64
            /* STABLE_FRAGMENT */
          );
        }),
        128
        /* KEYED_FRAGMENT */
      )) : (0, import_vue12.createCommentVNode)("v-if", true)],
      64
      /* STABLE_FRAGMENT */
    )), (0, import_vue12.createVNode)(
      $setup["TwStatus"],
      {
        ref: "statusRef"
      },
      null,
      512
      /* NEED_PATCH */
    )]),
    _: 1
    /* STABLE */
  }, 8, ["open", "title", "footer-links", "primary-action"]);
}
//! src/Twinkle/modules/ui/TwBatchDeleteDialog.vue
TwBatchDeleteDialog_default.render = render4;
TwBatchDeleteDialog_default.__file = "src\\Twinkle\\modules\\ui\\TwBatchDeleteDialog.vue";
TwBatchDeleteDialog_default.__scopeId = "data-v-f1b435c4";
var TwBatchDeleteDialog_default2 = TwBatchDeleteDialog_default;
var import_vue13 = require("vue");
var import_codex5 = require("@wikimedia/codex");
var import_vue14 = require("vue");
//! src/Twinkle/modules/utils/utc8.ts
var UTC8_OFFSET_MINUTES = 8 * 60;
var beijingCompactToISO = (input) => {
  const match = /^(\d{4})(\d{2})(\d{2})(\d{2})(\d{2})$/.exec(input.trim());
  if (!match) {
    return input;
  }
  const year = Number(match[1]);
  const month = Number(match[2]);
  const day = Number(match[3]);
  const hour = Number(match[4]);
  const minute = Number(match[5]);
  const utcMillis = Date.UTC(year, month - 1, day, hour, minute) - UTC8_OFFSET_MINUTES * 6e4;
  const date = new Date(utcMillis);
  if (date.getUTCFullYear() !== year || date.getUTCMonth() !== month - 1 || date.getUTCDate() !== day) {
    return input;
  }
  return date.toISOString();
};
var beijingDateToISO = (input) => {
  const match = /^(\d{4})-(\d{1,2})-(\d{1,2})$/.exec(input.trim());
  if (!match) {
    return input;
  }
  const year = Number(match[1]);
  const month = Number(match[2]);
  const day = Number(match[3]);
  const utcMillis = Date.UTC(year, month - 1, day) - UTC8_OFFSET_MINUTES * 6e4;
  return new Date(utcMillis).toISOString();
};
var normalizeExpiry = (value) => {
  const trimmed = value.trim();
  return /^\d{12}$/.test(trimmed) ? beijingCompactToISO(trimmed) : value;
};
var TwBatchProtectDialog_default = /* @__PURE__ */ (0, import_vue13.defineComponent)({
  __name: "TwBatchProtectDialog",
  props: {
    title: {
      type: String,
      required: true
    },
    levels: {
      type: Array,
      required: true
    },
    moveLevels: {
      type: Array,
      required: true
    },
    lengths: {
      type: Array,
      required: true
    },
    list: {
      type: Object,
      required: true
    },
    footerLinks: {
      type: Array,
      required: true
    }
  },
  emits: ["close"],
  setup(__props, {
    expose: __expose,
    emit: __emit
  }) {
    var _props$levels$find;
    const props = __props;
    const emit = __emit;
    const open = (0, import_vue14.ref)(true);
    const editmodify = (0, import_vue14.ref)(true);
    const editlevel = (0, import_vue14.ref)(((_props$levels$find = props.levels.find((level) => level.value === "sysop")) === null || _props$levels$find === void 0 ? void 0 : _props$levels$find.value) ?? "sysop");
    const editexpiry = (0, import_vue14.ref)("2 days");
    const movemodify = (0, import_vue14.ref)(true);
    const movelevel = (0, import_vue14.ref)("sysop");
    const moveexpiry = (0, import_vue14.ref)("2 days");
    const createmodify = (0, import_vue14.ref)(true);
    const createlevel = (0, import_vue14.ref)("sysop");
    const createexpiry = (0, import_vue14.ref)("infinity");
    const reason = (0, import_vue14.ref)("");
    const selectedPages = (0, import_vue14.ref)([]);
    const submitting = (0, import_vue14.ref)(false);
    const statusRef = (0, import_vue14.ref)(null);
    const {
      onShiftClick
    } = useShiftClick();
    __expose({
      getStatusRoot: () => {
        var _statusRef$value5;
        return ((_statusRef$value5 = statusRef.value) === null || _statusRef$value5 === void 0 ? void 0 : _statusRef$value5.getStatusRoot()) ?? null;
      },
      clear: () => {
        var _statusRef$value6;
        (_statusRef$value6 = statusRef.value) === null || _statusRef$value6 === void 0 || _statusRef$value6.clear();
      }
    });
    const customExpiries = (0, import_vue14.reactive)({
      edit: [],
      move: [],
      create: []
    });
    const levelsItems = (0, import_vue14.computed)(() => props.levels.map((level) => ({
      value: level.value,
      label: level.label
    })));
    const moveLevelsItems = (0, import_vue14.computed)(() => props.moveLevels.map((level) => ({
      value: level.value,
      label: level.label
    })));
    const expiryItems = (kind) => [...props.lengths.map((length) => ({
      value: length.value,
      label: length.label
    })), ...customExpiries[kind]];
    const editlevelDisabled = (0, import_vue14.computed)(() => !editmodify.value);
    const editexpiryDisabled = (0, import_vue14.computed)(() => !editmodify.value || editlevel.value === "all");
    const movelevelDisabled = (0, import_vue14.computed)(() => !movemodify.value);
    const moveexpiryDisabled = (0, import_vue14.computed)(() => !movemodify.value || movelevel.value === "all");
    const createlevelDisabled = (0, import_vue14.computed)(() => !createmodify.value);
    const createexpiryDisabled = (0, import_vue14.computed)(() => !createmodify.value || createlevel.value === "all");
    (0, import_vue14.watch)(movemodify, (checked) => {
      if (checked) {
        if (editlevelDisabled.value) {
          movelevel.value = "sysop";
          moveexpiry.value = "infinity";
        } else {
          movelevel.value = editlevel.value;
          moveexpiry.value = editexpiry.value;
        }
      }
    });
    const onExpiryChange = (kind, value) => {
      if (value !== "custom") {
        return;
      }
      const custom = prompt(uls("输入自定义终止时间。\n您可以使用相对时间，如“1 minute”或“19 days”，或绝对时间“yyyymmddhhmm”（如“200602011405”是2006年02月01日14：05（北京时间，UTC+8））", "輸入自訂終止時間。\n您可以使用相對時間，如「1 minute」或「19 days」，或絕對時間「yyyymmddhhmm」（如「200602011405」是2006年02月01日14：05（北京時間，UTC+8））"), "");
      const target = kind === "edit" ? editexpiry : kind === "move" ? moveexpiry : createexpiry;
      if (custom) {
        customExpiries[kind].push({
          value: custom,
          label: custom
        });
        target.value = custom;
      } else {
        target.value = "1 day";
      }
    };
    (0, import_vue14.watch)(() => props.list.pages, (list) => {
      selectedPages.value = list.map((item) => item.title);
    });
    const protectedCount = (0, import_vue14.computed)(() => props.list.pages.filter((item) => item.isProtected && selectedPages.value.includes(item.title)).length);
    const selectAll = () => {
      selectedPages.value = props.list.pages.map((item) => item.title);
    };
    const selectNone = () => {
      selectedPages.value = [];
    };
    const onToggle = (value, modelValue) => {
      if (Array.isArray(modelValue)) {
        selectedPages.value = modelValue.filter((item) => typeof item === "string");
      } else if (modelValue) {
        selectedPages.value = [...selectedPages.value, value];
      } else {
        selectedPages.value = selectedPages.value.filter((item) => item !== value);
      }
    };
    const primaryAction = (0, import_vue14.computed)(() => ({
      label: uls("提交", "提交"),
      actionType: "progressive",
      disabled: submitting.value
    }));
    const submit = () => {
      var _statusRef$value7;
      if (submitting.value) {
        return;
      }
      if (!reason.value.trim()) {
        void mw.notify("您必须给出一个理由。", {
          type: "warn",
          tag: "twinklebatchprotect"
        });
        return;
      }
      if (selectedPages.value.length === 0) {
        void mw.notify(uls("请至少选择一个页面。", "請至少選擇一個頁面。"), {
          type: "warn",
          tag: "twinklebatchprotect"
        });
        return;
      }
      submitting.value = true;
      evaluate({
        reason: reason.value.trim(),
        pages: [...selectedPages.value],
        protectedCount: protectedCount.value,
        editmodify: editmodify.value,
        editlevel: editlevel.value,
        editexpiry: editexpiry.value,
        movemodify: movemodify.value,
        movelevel: movelevel.value,
        moveexpiry: moveexpiry.value,
        createmodify: createmodify.value,
        createlevel: createlevel.value,
        createexpiry: createexpiry.value
      }, ((_statusRef$value7 = statusRef.value) === null || _statusRef$value7 === void 0 ? void 0 : _statusRef$value7.getStatusRoot()) ?? null, () => {
        submitting.value = false;
      });
    };
    (0, import_vue14.watch)(open, (value) => {
      if (!value) {
        emit("close");
      }
    });
    const callbacks = {
      main: (apiobj) => {
        var _queryResult$pages$;
        const query = apiobj.getResponse();
        const queryResult = query.query ?? {
          pages: []
        };
        if (queryResult.normalized) {
          var _queryResult$normaliz;
          apiobj.params.page = ((_queryResult$normaliz = queryResult.normalized[0]) === null || _queryResult$normaliz === void 0 ? void 0 : _queryResult$normaliz.to) ?? apiobj.params.page;
        }
        const exists = !((_queryResult$pages$ = queryResult.pages[0]) !== null && _queryResult$pages$ !== void 0 && _queryResult$pages$.missing);
        const page = new Morebits.wiki.page(apiobj.params.page, `正在保护${apiobj.params.page}`);
        let takenAction = false;
        if (exists && apiobj.params.editmodify) {
          page.setEditProtection(apiobj.params.editlevel, apiobj.params.editexpiry);
          takenAction = true;
        }
        if (exists && apiobj.params.movemodify) {
          page.setMoveProtection(apiobj.params.movelevel, apiobj.params.moveexpiry);
          takenAction = true;
        }
        if (!exists && apiobj.params.createmodify) {
          page.setCreateProtection(apiobj.params.createlevel, apiobj.params.createexpiry);
          takenAction = true;
        }
        if (!takenAction) {
          Morebits.status.warn(`正在保护“${apiobj.params.page}`, `”页面${exists ? "存在" : "不存在"}；无事可做，跳过`);
          apiobj.params.batchOperation.workerFailure();
          return;
        }
        page.setEditSummary(apiobj.params.reason);
        page.setChangeTags(Twinkle.changeTags);
        page.protect(apiobj.params.batchOperation.workerSuccess, apiobj.params.batchOperation.workerFailure);
      }
    };
    const evaluate = (params, statusContainer, restore) => {
      Morebits.wiki.actionCompleted.notice = "批量保护完成";
      params.editexpiry = normalizeExpiry(params.editexpiry);
      params.moveexpiry = normalizeExpiry(params.moveexpiry);
      params.createexpiry = normalizeExpiry(params.createexpiry);
      if (params.protectedCount > 0 && !confirm(`您即将对${mw.language.convertNumber(params.protectedCount)}个全保护页面进行操作。您确定吗？`)) {
        if (restore) {
          restore();
        }
        return;
      }
      if (!params.reason) {
        void mw.notify("您必须给出一个理由。", {
          type: "warn",
          tag: "twinklebatchprotect"
        });
        if (restore) {
          restore();
        }
        return;
      }
      Morebits.status.init(statusContainer);
      if (params.pages.length === 0) {
        Morebits.status.error("Error", "待保护页面不存在，程序终止");
        if (restore) {
          restore();
        }
        return;
      }
      const batchOperation = new Morebits.batchOperation("应用保护设置");
      batchOperation.setOption("chunkSize", Number(Twinkle.getPref("batchChunks")));
      batchOperation.setOption("preserveIndividualStatusLines", true);
      batchOperation.setPageList(params.pages);
      batchOperation.run((pageName) => {
        const query = {
          action: "query",
          titles: pageName,
          format: "json"
        };
        const api2 = newParamsApi(`正在检查页面“${pageName}”是否存在`, query, callbacks.main, batchOperation.workerFailure);
        api2.params = {
          page: pageName,
          batchOperation,
          ...params
        };
        api2.post();
      });
    };
    const __returned__ = {
      props,
      emit,
      open,
      editmodify,
      editlevel,
      editexpiry,
      movemodify,
      movelevel,
      moveexpiry,
      createmodify,
      createlevel,
      createexpiry,
      reason,
      selectedPages,
      submitting,
      statusRef,
      onShiftClick,
      customExpiries,
      levelsItems,
      moveLevelsItems,
      expiryItems,
      editlevelDisabled,
      editexpiryDisabled,
      movelevelDisabled,
      moveexpiryDisabled,
      createlevelDisabled,
      createexpiryDisabled,
      onExpiryChange,
      protectedCount,
      selectAll,
      selectNone,
      onToggle,
      primaryAction,
      submit,
      callbacks,
      evaluate,
      get CdxButton() {
        return import_codex5.CdxButton;
      },
      get CdxCheckbox() {
        return import_codex5.CdxCheckbox;
      },
      get CdxField() {
        return import_codex5.CdxField;
      },
      get CdxSelect() {
        return import_codex5.CdxSelect;
      },
      get CdxTextInput() {
        return import_codex5.CdxTextInput;
      },
      TwDialog: TwDialog_default2,
      TwStatus: TwStatus_default2,
      get uls() {
        return uls;
      }
    };
    Object.defineProperty(__returned__, "__isScriptSetup", {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});
var import_vue15 = require("vue");
var _hoisted_15 = {
  key: 0,
  class: "tw-loading"
};
var _hoisted_25 = {
  class: "tw-batch-actions"
};
function render5(_ctx, _cache, $props, $setup, $data, $options) {
  return (0, import_vue15.openBlock)(), (0, import_vue15.createBlock)($setup["TwDialog"], {
    open: $setup.open,
    title: $props.title,
    "script-name": "Twinkle",
    "footer-links": $props.footerLinks,
    "primary-action": $setup.primaryAction,
    "onUpdate:open": _cache[14] || (_cache[14] = ($event) => $setup.open = $event),
    onPrimary: $setup.submit
  }, {
    default: (0, import_vue15.withCtx)(() => [(0, import_vue15.createVNode)($setup["CdxCheckbox"], {
      modelValue: $setup.editmodify,
      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.editmodify = $event),
      disabled: $setup.submitting
    }, {
      default: (0, import_vue15.withCtx)(() => [(0, import_vue15.createTextVNode)(
        (0, import_vue15.toDisplayString)($setup.uls("修改编辑保护", "修改編輯保護")),
        1
        /* TEXT */
      )]),
      _: 1
      /* STABLE */
    }, 8, ["modelValue", "disabled"]), (0, import_vue15.createVNode)($setup["CdxField"], null, {
      label: (0, import_vue15.withCtx)(() => [..._cache[15] || (_cache[15] = [(0, import_vue15.createTextVNode)(
        "编辑权限：",
        -1
        /* CACHED */
      )])]),
      default: (0, import_vue15.withCtx)(() => [(0, import_vue15.createVNode)($setup["CdxSelect"], {
        selected: $setup.editlevel,
        "onUpdate:selected": _cache[1] || (_cache[1] = ($event) => $setup.editlevel = $event),
        "menu-items": $setup.levelsItems,
        disabled: $setup.submitting || $setup.editlevelDisabled
      }, null, 8, ["selected", "menu-items", "disabled"])]),
      _: 1
      /* STABLE */
    }), (0, import_vue15.createVNode)($setup["CdxField"], null, {
      label: (0, import_vue15.withCtx)(() => [..._cache[16] || (_cache[16] = [(0, import_vue15.createTextVNode)(
        "终止时间：",
        -1
        /* CACHED */
      )])]),
      default: (0, import_vue15.withCtx)(() => [(0, import_vue15.createVNode)($setup["CdxSelect"], {
        selected: $setup.editexpiry,
        "onUpdate:selected": [_cache[2] || (_cache[2] = ($event) => $setup.editexpiry = $event), _cache[3] || (_cache[3] = ($event) => $setup.onExpiryChange("edit", $event))],
        "menu-items": $setup.expiryItems("edit"),
        disabled: $setup.submitting || $setup.editexpiryDisabled
      }, null, 8, ["selected", "menu-items", "disabled"])]),
      _: 1
      /* STABLE */
    }), (0, import_vue15.createVNode)($setup["CdxCheckbox"], {
      modelValue: $setup.movemodify,
      "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $setup.movemodify = $event),
      disabled: $setup.submitting
    }, {
      default: (0, import_vue15.withCtx)(() => [(0, import_vue15.createTextVNode)(
        (0, import_vue15.toDisplayString)($setup.uls("修改移动保护", "修改移動保護")),
        1
        /* TEXT */
      )]),
      _: 1
      /* STABLE */
    }, 8, ["modelValue", "disabled"]), (0, import_vue15.createVNode)($setup["CdxField"], null, {
      label: (0, import_vue15.withCtx)(() => [..._cache[17] || (_cache[17] = [(0, import_vue15.createTextVNode)(
        "移动权限：",
        -1
        /* CACHED */
      )])]),
      default: (0, import_vue15.withCtx)(() => [(0, import_vue15.createVNode)($setup["CdxSelect"], {
        selected: $setup.movelevel,
        "onUpdate:selected": _cache[5] || (_cache[5] = ($event) => $setup.movelevel = $event),
        "menu-items": $setup.moveLevelsItems,
        disabled: $setup.submitting || $setup.movelevelDisabled
      }, null, 8, ["selected", "menu-items", "disabled"])]),
      _: 1
      /* STABLE */
    }), (0, import_vue15.createVNode)($setup["CdxField"], null, {
      label: (0, import_vue15.withCtx)(() => [..._cache[18] || (_cache[18] = [(0, import_vue15.createTextVNode)(
        "终止时间：",
        -1
        /* CACHED */
      )])]),
      default: (0, import_vue15.withCtx)(() => [(0, import_vue15.createVNode)($setup["CdxSelect"], {
        selected: $setup.moveexpiry,
        "onUpdate:selected": [_cache[6] || (_cache[6] = ($event) => $setup.moveexpiry = $event), _cache[7] || (_cache[7] = ($event) => $setup.onExpiryChange("move", $event))],
        "menu-items": $setup.expiryItems("move"),
        disabled: $setup.submitting || $setup.moveexpiryDisabled
      }, null, 8, ["selected", "menu-items", "disabled"])]),
      _: 1
      /* STABLE */
    }), (0, import_vue15.createVNode)($setup["CdxCheckbox"], {
      modelValue: $setup.createmodify,
      "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => $setup.createmodify = $event),
      disabled: $setup.submitting
    }, {
      default: (0, import_vue15.withCtx)(() => [(0, import_vue15.createTextVNode)(
        (0, import_vue15.toDisplayString)($setup.uls("修改创建保护", "修改建立保護")),
        1
        /* TEXT */
      )]),
      _: 1
      /* STABLE */
    }, 8, ["modelValue", "disabled"]), (0, import_vue15.createVNode)($setup["CdxField"], null, {
      label: (0, import_vue15.withCtx)(() => [..._cache[19] || (_cache[19] = [(0, import_vue15.createTextVNode)(
        "创建权限：",
        -1
        /* CACHED */
      )])]),
      default: (0, import_vue15.withCtx)(() => [(0, import_vue15.createVNode)($setup["CdxSelect"], {
        selected: $setup.createlevel,
        "onUpdate:selected": _cache[9] || (_cache[9] = ($event) => $setup.createlevel = $event),
        "menu-items": $setup.levelsItems,
        disabled: $setup.submitting || $setup.createlevelDisabled
      }, null, 8, ["selected", "menu-items", "disabled"])]),
      _: 1
      /* STABLE */
    }), (0, import_vue15.createVNode)($setup["CdxField"], null, {
      label: (0, import_vue15.withCtx)(() => [..._cache[20] || (_cache[20] = [(0, import_vue15.createTextVNode)(
        "终止时间：",
        -1
        /* CACHED */
      )])]),
      default: (0, import_vue15.withCtx)(() => [(0, import_vue15.createVNode)($setup["CdxSelect"], {
        selected: $setup.createexpiry,
        "onUpdate:selected": [_cache[10] || (_cache[10] = ($event) => $setup.createexpiry = $event), _cache[11] || (_cache[11] = ($event) => $setup.onExpiryChange("create", $event))],
        "menu-items": $setup.expiryItems("create"),
        disabled: $setup.submitting || $setup.createexpiryDisabled
      }, null, 8, ["selected", "menu-items", "disabled"])]),
      _: 1
      /* STABLE */
    }), (0, import_vue15.createVNode)($setup["CdxField"], null, {
      label: (0, import_vue15.withCtx)(() => [..._cache[21] || (_cache[21] = [(0, import_vue15.createTextVNode)(
        "理由（保护日志）",
        -1
        /* CACHED */
      )])]),
      default: (0, import_vue15.withCtx)(() => [(0, import_vue15.createVNode)($setup["CdxTextInput"], {
        modelValue: $setup.reason,
        "onUpdate:modelValue": _cache[12] || (_cache[12] = ($event) => $setup.reason = $event),
        disabled: $setup.submitting
      }, null, 8, ["modelValue", "disabled"])]),
      _: 1
      /* STABLE */
    }), !$props.list.loaded ? ((0, import_vue15.openBlock)(), (0, import_vue15.createElementBlock)(
      "div",
      _hoisted_15,
      (0, import_vue15.toDisplayString)($setup.uls("加载中……", "載入中……")),
      1
      /* TEXT */
    )) : ((0, import_vue15.openBlock)(), (0, import_vue15.createElementBlock)(
      import_vue15.Fragment,
      {
        key: 1
      },
      [_cache[24] || (_cache[24] = (0, import_vue15.createElementVNode)(
        "h5",
        null,
        "待保护页面",
        -1
        /* CACHED */
      )), (0, import_vue15.createElementVNode)("div", _hoisted_25, [(0, import_vue15.createVNode)($setup["CdxButton"], {
        disabled: $setup.submitting,
        weight: "quiet",
        onClick: $setup.selectAll
      }, {
        default: (0, import_vue15.withCtx)(() => [..._cache[22] || (_cache[22] = [(0, import_vue15.createTextVNode)(
          "全选",
          -1
          /* CACHED */
        )])]),
        _: 1
        /* STABLE */
      }, 8, ["disabled"]), (0, import_vue15.createVNode)($setup["CdxButton"], {
        disabled: $setup.submitting,
        weight: "quiet",
        onClick: $setup.selectNone
      }, {
        default: (0, import_vue15.withCtx)(() => [..._cache[23] || (_cache[23] = [(0, import_vue15.createTextVNode)(
          "全不选",
          -1
          /* CACHED */
        )])]),
        _: 1
        /* STABLE */
      }, 8, ["disabled"])]), (0, import_vue15.createElementVNode)("div", {
        onClick: _cache[13] || (_cache[13] = (...args) => $setup.onShiftClick && $setup.onShiftClick(...args))
      }, [((0, import_vue15.openBlock)(true), (0, import_vue15.createElementBlock)(
        import_vue15.Fragment,
        null,
        (0, import_vue15.renderList)($props.list.pages, (item) => {
          return (0, import_vue15.openBlock)(), (0, import_vue15.createBlock)($setup["CdxCheckbox"], {
            key: item.title,
            "model-value": $setup.selectedPages,
            "input-value": item.title,
            name: "twinkle-batchprotect-pages",
            disabled: $setup.submitting,
            "onUpdate:modelValue": ($event) => $setup.onToggle(item.title, $event)
          }, {
            default: (0, import_vue15.withCtx)(() => [(0, import_vue15.createElementVNode)(
              "span",
              {
                class: (0, import_vue15.normalizeClass)({
                  "tw-batch-protected": item.isProtected
                })
              },
              (0, import_vue15.toDisplayString)(item.label),
              3
              /* TEXT, CLASS */
            )]),
            _: 2
            /* DYNAMIC */
          }, 1032, ["model-value", "input-value", "disabled", "onUpdate:modelValue"]);
        }),
        128
        /* KEYED_FRAGMENT */
      ))])],
      64
      /* STABLE_FRAGMENT */
    )), (0, import_vue15.createVNode)(
      $setup["TwStatus"],
      {
        ref: "statusRef"
      },
      null,
      512
      /* NEED_PATCH */
    )]),
    _: 1
    /* STABLE */
  }, 8, ["open", "title", "footer-links", "primary-action"]);
}
//! src/Twinkle/modules/ui/TwBatchProtectDialog.vue
TwBatchProtectDialog_default.render = render5;
TwBatchProtectDialog_default.__file = "src\\Twinkle\\modules\\ui\\TwBatchProtectDialog.vue";
TwBatchProtectDialog_default.__scopeId = "data-v-2046f0ba";
var TwBatchProtectDialog_default2 = TwBatchProtectDialog_default;
var import_vue16 = require("vue");
var import_codex6 = require("@wikimedia/codex");
var import_vue17 = require("vue");
var TwBatchUndeleteDialog_default = /* @__PURE__ */ (0, import_vue16.defineComponent)({
  __name: "TwBatchUndeleteDialog",
  props: {
    title: {
      type: String,
      required: true
    },
    list: {
      type: Array,
      required: true
    },
    footerLinks: {
      type: Array,
      required: true
    }
  },
  emits: ["close"],
  setup(__props, {
    expose: __expose,
    emit: __emit
  }) {
    const props = __props;
    const emit = __emit;
    const open = (0, import_vue17.ref)(true);
    const undelTalk = (0, import_vue17.ref)(true);
    const reason = (0, import_vue17.ref)("");
    const selectedPages = (0, import_vue17.ref)([]);
    const submitting = (0, import_vue17.ref)(false);
    const statusRef = (0, import_vue17.ref)(null);
    const {
      onShiftClick
    } = useShiftClick();
    __expose({
      getStatusRoot: () => {
        var _statusRef$value8;
        return ((_statusRef$value8 = statusRef.value) === null || _statusRef$value8 === void 0 ? void 0 : _statusRef$value8.getStatusRoot()) ?? null;
      },
      clear: () => {
        var _statusRef$value9;
        (_statusRef$value9 = statusRef.value) === null || _statusRef$value9 === void 0 || _statusRef$value9.clear();
      }
    });
    (0, import_vue17.watch)(() => props.list, (list) => {
      selectedPages.value = list.map((item) => item.title);
    });
    const protectedCount = (0, import_vue17.computed)(() => props.list.filter((item) => item.isProtected && selectedPages.value.includes(item.title)).length);
    const selectAll = () => {
      selectedPages.value = props.list.map((item) => item.title);
    };
    const selectNone = () => {
      selectedPages.value = [];
    };
    const onToggle = (value, modelValue) => {
      if (Array.isArray(modelValue)) {
        selectedPages.value = modelValue.filter((item) => typeof item === "string");
      } else if (modelValue) {
        selectedPages.value = [...selectedPages.value, value];
      } else {
        selectedPages.value = selectedPages.value.filter((item) => item !== value);
      }
    };
    const primaryAction = (0, import_vue17.computed)(() => ({
      label: uls("提交", "提交"),
      actionType: "progressive",
      disabled: submitting.value
    }));
    const submit = () => {
      var _statusRef$value0;
      if (submitting.value) {
        return;
      }
      if (!reason.value.trim()) {
        void mw.notify("您需要指定理由。", {
          type: "warn",
          tag: "twinklebatchundelete"
        });
        return;
      }
      if (selectedPages.value.length === 0) {
        void mw.notify(uls("请至少选择一个页面。", "請至少選擇一個頁面。"), {
          type: "warn",
          tag: "twinklebatchundelete"
        });
        return;
      }
      submitting.value = true;
      evaluate({
        undel_talk: undelTalk.value,
        reason: reason.value.trim(),
        pages: [...selectedPages.value],
        protectedCount: protectedCount.value
      }, ((_statusRef$value0 = statusRef.value) === null || _statusRef$value0 === void 0 ? void 0 : _statusRef$value0.getStatusRoot()) ?? null, () => {
        submitting.value = false;
      });
    };
    (0, import_vue17.watch)(open, (value) => {
      if (!value) {
        emit("close");
      }
    });
    const callbacks = {
      doExtras: (thingWithParameters) => {
        const pageobj = thingWithParameters instanceof Morebits.wiki.api ? thingWithParameters.parent : thingWithParameters;
        const params = pageobj.getCallbackParameters();
        params.pageUndeleter.workerSuccess(pageobj);
        if (params.undel_talk) {
          const talkTitle = new mw.Title(params.page).getTalkPage();
          const talkpagename = talkTitle === null || talkTitle === void 0 ? void 0 : talkTitle.getPrefixedText();
          if (talkpagename && talkpagename !== params.page) {
            const query = {
              action: "query",
              prop: "deletedrevisions",
              drvprop: "ids",
              drvlimit: 1,
              titles: talkpagename
            };
            const api2 = newParamsApi(uls("检查讨论页的已删版本", "檢查討論頁的已刪版本"), query, callbacks.undeleteTalk);
            api2.params = params;
            api2.params.talkPage = talkpagename;
            api2.post();
          }
        }
      },
      undeleteTalk: (apiobj) => {
        const xml = apiobj.getResponse();
        const exists = $(xml).find("page:not([missing])").length > 0;
        const delrevs = $(xml).find("rev").attr("revid");
        if (exists || !delrevs) {
          return;
        }
        const page = new Morebits.wiki.page(apiobj.params.talkPage ?? "", uls("正在反删除", "正在反刪除") + apiobj.params.page + uls("的讨论页", "的討論頁"));
        page.setEditSummary(uls("反删除“", "反刪除「") + apiobj.params.page + uls("”的[[Help:讨论页|讨论页]]", "」的[[Help:討論頁|討論頁]]"));
        page.setChangeTags(Twinkle.changeTags);
        page.undeletePage();
      }
    };
    const evaluate = (params, statusContainer, restore) => {
      Morebits.wiki.actionCompleted.notice = uls("反删除已完成", "反刪除已完成");
      if (params.protectedCount > 0 && !confirm(uls("您正要反删除 ", "您正要反刪除 ") + params.protectedCount + uls(" 个全保护页面，您确定吗？", " 個全保護頁面，您確定嗎？"))) {
        if (restore) {
          restore();
        }
        return;
      }
      const {
        pages
      } = params;
      const {
        reason: reason2
      } = params;
      const {
        undel_talk
      } = params;
      if (!reason2) {
        void mw.notify("您需要指定理由。", {
          type: "warn",
          tag: "twinklebatchundelete"
        });
        if (restore) {
          restore();
        }
        return;
      }
      Morebits.status.init(statusContainer);
      if (pages.length === 0) {
        Morebits.status.error(uls("错误", "錯誤"), uls("没什么要反删除的，取消操作", "沒什麼要反刪除的，取消操作"));
        if (restore) {
          restore();
        }
        return;
      }
      const pageUndeleter = new Morebits.batchOperation(uls("反删除页面", "反刪除頁面"));
      pageUndeleter.setOption("chunkSize", Number(Twinkle.getPref("batchChunks")));
      pageUndeleter.setOption("preserveIndividualStatusLines", true);
      pageUndeleter.setPageList(pages);
      pageUndeleter.run((pageName) => {
        const pageParams = {
          page: pageName,
          undel_talk,
          reason: reason2,
          pageUndeleter
        };
        const qiuwen_page = new Morebits.wiki.page(pageName, uls("反删除页面", "反刪除頁面") + pageName);
        qiuwen_page.setCallbackParameters(pageParams);
        qiuwen_page.setEditSummary(`${reason2} (批量)`);
        qiuwen_page.setChangeTags(Twinkle.changeTags);
        qiuwen_page.suppressProtectWarning();
        qiuwen_page.setMaxRetries(3);
        qiuwen_page.undeletePage(callbacks.doExtras, pageUndeleter.workerFailure);
      });
    };
    const __returned__ = {
      props,
      emit,
      open,
      undelTalk,
      reason,
      selectedPages,
      submitting,
      statusRef,
      onShiftClick,
      protectedCount,
      selectAll,
      selectNone,
      onToggle,
      primaryAction,
      submit,
      callbacks,
      evaluate,
      get CdxButton() {
        return import_codex6.CdxButton;
      },
      get CdxCheckbox() {
        return import_codex6.CdxCheckbox;
      },
      get CdxField() {
        return import_codex6.CdxField;
      },
      get CdxTextInput() {
        return import_codex6.CdxTextInput;
      },
      TwDialog: TwDialog_default2,
      TwStatus: TwStatus_default2,
      get uls() {
        return uls;
      }
    };
    Object.defineProperty(__returned__, "__isScriptSetup", {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});
var import_vue18 = require("vue");
var _hoisted_16 = {
  key: 0,
  class: "tw-loading"
};
var _hoisted_26 = {
  class: "tw-batch-actions"
};
function render6(_ctx, _cache, $props, $setup, $data, $options) {
  return (0, import_vue18.openBlock)(), (0, import_vue18.createBlock)($setup["TwDialog"], {
    open: $setup.open,
    title: $props.title,
    "script-name": "Twinkle",
    "footer-links": $props.footerLinks,
    "primary-action": $setup.primaryAction,
    "onUpdate:open": _cache[3] || (_cache[3] = ($event) => $setup.open = $event),
    onPrimary: $setup.submit
  }, {
    default: (0, import_vue18.withCtx)(() => [(0, import_vue18.createVNode)($setup["CdxCheckbox"], {
      modelValue: $setup.undelTalk,
      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.undelTalk = $event),
      disabled: $setup.submitting
    }, {
      default: (0, import_vue18.withCtx)(() => [(0, import_vue18.createTextVNode)(
        (0, import_vue18.toDisplayString)($setup.uls("若存在已删除的讨论页，也恢复", "若存在已刪除的討論頁，也恢復")),
        1
        /* TEXT */
      )]),
      _: 1
      /* STABLE */
    }, 8, ["modelValue", "disabled"]), (0, import_vue18.createVNode)($setup["CdxField"], null, {
      label: (0, import_vue18.withCtx)(() => [..._cache[4] || (_cache[4] = [(0, import_vue18.createTextVNode)(
        "理由：",
        -1
        /* CACHED */
      )])]),
      default: (0, import_vue18.withCtx)(() => [(0, import_vue18.createVNode)($setup["CdxTextInput"], {
        modelValue: $setup.reason,
        "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.reason = $event),
        disabled: $setup.submitting
      }, null, 8, ["modelValue", "disabled"])]),
      _: 1
      /* STABLE */
    }), $props.list.length === 0 ? ((0, import_vue18.openBlock)(), (0, import_vue18.createElementBlock)(
      "div",
      _hoisted_16,
      (0, import_vue18.toDisplayString)($setup.uls("加载中……", "載入中……")),
      1
      /* TEXT */
    )) : ((0, import_vue18.openBlock)(), (0, import_vue18.createElementBlock)(
      import_vue18.Fragment,
      {
        key: 1
      },
      [(0, import_vue18.createElementVNode)(
        "h5",
        null,
        (0, import_vue18.toDisplayString)($setup.uls("待恢复页面", "待恢復頁面")),
        1
        /* TEXT */
      ), (0, import_vue18.createElementVNode)("div", _hoisted_26, [(0, import_vue18.createVNode)($setup["CdxButton"], {
        disabled: $setup.submitting,
        weight: "quiet",
        onClick: $setup.selectAll
      }, {
        default: (0, import_vue18.withCtx)(() => [(0, import_vue18.createTextVNode)(
          (0, import_vue18.toDisplayString)($setup.uls("全选", "全選")),
          1
          /* TEXT */
        )]),
        _: 1
        /* STABLE */
      }, 8, ["disabled"]), (0, import_vue18.createVNode)($setup["CdxButton"], {
        disabled: $setup.submitting,
        weight: "quiet",
        onClick: $setup.selectNone
      }, {
        default: (0, import_vue18.withCtx)(() => [(0, import_vue18.createTextVNode)(
          (0, import_vue18.toDisplayString)($setup.uls("全不选", "全不選")),
          1
          /* TEXT */
        )]),
        _: 1
        /* STABLE */
      }, 8, ["disabled"])]), (0, import_vue18.createElementVNode)("div", {
        onClick: _cache[2] || (_cache[2] = (...args) => $setup.onShiftClick && $setup.onShiftClick(...args))
      }, [((0, import_vue18.openBlock)(true), (0, import_vue18.createElementBlock)(
        import_vue18.Fragment,
        null,
        (0, import_vue18.renderList)($props.list, (item) => {
          return (0, import_vue18.openBlock)(), (0, import_vue18.createBlock)($setup["CdxCheckbox"], {
            key: item.title,
            "model-value": $setup.selectedPages,
            "input-value": item.title,
            name: "twinkle-batchundelete-pages",
            disabled: $setup.submitting,
            "onUpdate:modelValue": ($event) => $setup.onToggle(item.title, $event)
          }, {
            default: (0, import_vue18.withCtx)(() => [(0, import_vue18.createElementVNode)(
              "span",
              {
                class: (0, import_vue18.normalizeClass)({
                  "tw-batch-protected": item.isProtected
                })
              },
              (0, import_vue18.toDisplayString)(item.label),
              3
              /* TEXT, CLASS */
            )]),
            _: 2
            /* DYNAMIC */
          }, 1032, ["model-value", "input-value", "disabled", "onUpdate:modelValue"]);
        }),
        128
        /* KEYED_FRAGMENT */
      ))])],
      64
      /* STABLE_FRAGMENT */
    )), (0, import_vue18.createVNode)(
      $setup["TwStatus"],
      {
        ref: "statusRef"
      },
      null,
      512
      /* NEED_PATCH */
    )]),
    _: 1
    /* STABLE */
  }, 8, ["open", "title", "footer-links", "primary-action"]);
}
//! src/Twinkle/modules/ui/TwBatchUndeleteDialog.vue
TwBatchUndeleteDialog_default.render = render6;
TwBatchUndeleteDialog_default.__file = "src\\Twinkle\\modules\\ui\\TwBatchUndeleteDialog.vue";
TwBatchUndeleteDialog_default.__scopeId = "data-v-e53e84a1";
var TwBatchUndeleteDialog_default2 = TwBatchUndeleteDialog_default;
var import_vue19 = require("vue");
var import_codex7 = require("@wikimedia/codex");
var import_vue20 = require("vue");
//! src/Twinkle/modules/utils/api.ts
var import_ext_gadget2 = require("ext.gadget.Util");
var api = (0, import_ext_gadget2.initMwApi)("morebits.js; Twinkle/1.1");
var TwBlockDialog_default = /* @__PURE__ */ (0, import_vue19.defineComponent)({
  __name: "TwBlockDialog",
  props: {
    title: {
      type: String,
      required: true
    },
    showBlock: {
      type: Boolean,
      required: true
    },
    showTemplate: {
      type: Boolean,
      required: true
    },
    showTag: {
      type: Boolean,
      required: true
    },
    showProtect: {
      type: Boolean,
      required: true
    },
    showUnblock: {
      type: Boolean,
      required: true
    },
    initialBlock: {
      type: Boolean,
      required: true
    },
    initialTemplate: {
      type: Boolean,
      required: true
    },
    initialPartial: {
      type: Boolean,
      required: true
    },
    initialUnblock: {
      type: Boolean,
      required: true
    },
    sixtyFourAvailable: {
      type: Boolean,
      required: true
    },
    initialBlock64: {
      type: Boolean,
      required: true
    },
    presetGroups: {
      type: Array,
      required: true
    },
    templateGroups: {
      type: Array,
      required: true
    },
    presetsInfo: {
      type: Object,
      required: true
    },
    expiryPresetOptions: {
      type: Array,
      required: true
    },
    namespaces: {
      type: Array,
      required: true
    },
    isRegistered: {
      type: Boolean,
      required: true
    },
    userIsBot: {
      type: Boolean,
      required: true
    },
    notices: {
      type: Object,
      required: true
    },
    relevantUserName: {
      type: String,
      required: true
    },
    blockLogId: {
      type: [Number, Boolean],
      required: true
    },
    currentBlockInfo: {
      type: null,
      required: true
    },
    footerLinks: {
      type: Array,
      required: true
    }
  },
  emits: ["block64Changed", "close"],
  setup(__props, {
    expose: __expose,
    emit: __emit
  }) {
    __expose();
    const props = __props;
    const emit = __emit;
    const open = (0, import_vue20.ref)(true);
    const submitting = (0, import_vue20.ref)(false);
    const actionRestrictionOptions = [{
      value: "upload",
      label: uls("上传文件（包括覆盖文件）", "上傳檔案（包括覆蓋檔案）")
    }, {
      value: "move",
      label: uls("移动页面及文件", "移動頁面及檔案")
    }, {
      value: "create",
      label: uls("创建新页面及上传新文件", "建立新頁面及上傳新檔案")
    }, {
      value: "thanks",
      label: uls("发送感谢", "發送感謝")
    }];
    const actiontype = (0, import_vue20.ref)([]);
    const block64 = (0, import_vue20.ref)(props.initialBlock64);
    const preset = (0, import_vue20.ref)("");
    const expiryPreset = (0, import_vue20.ref)("custom");
    const expiry = (0, import_vue20.ref)("");
    const pagerestrictionsInput = (0, import_vue20.ref)("");
    const namespacerestrictions = (0, import_vue20.ref)([]);
    const actionrestrictions = (0, import_vue20.ref)([]);
    const nocreate = (0, import_vue20.ref)(false);
    const noemail = (0, import_vue20.ref)(false);
    const disabletalk = (0, import_vue20.ref)(false);
    const autoblock = (0, import_vue20.ref)(false);
    const hardblock = (0, import_vue20.ref)(false);
    const watchuser = (0, import_vue20.ref)(false);
    const closevip = (0, import_vue20.ref)(true);
    const reason = (0, import_vue20.ref)("");
    const template = (0, import_vue20.ref)("");
    const article = (0, import_vue20.ref)("");
    const area = (0, import_vue20.ref)("");
    const templateExpiry = (0, import_vue20.ref)("");
    const blockReason = (0, import_vue20.ref)("");
    const blankDuration = (0, import_vue20.ref)(false);
    const notalk = (0, import_vue20.ref)(false);
    const noemailTemplate = (0, import_vue20.ref)(false);
    const nocreateTemplate = (0, import_vue20.ref)(false);
    const tag = (0, import_vue20.ref)([]);
    const sppUsername = (0, import_vue20.ref)("");
    const sppType = (0, import_vue20.ref)("blocked");
    const sppEvidence = (0, import_vue20.ref)("");
    const spmChecked = (0, import_vue20.ref)(false);
    const spmEvidence = (0, import_vue20.ref)("");
    const unblockReason = (0, import_vue20.ref)("");
    const previewBox = (0, import_vue20.ref)(null);
    const statusRef = (0, import_vue20.ref)(null);
    actiontype.value = [...props.initialBlock ? ["block"] : [], ...props.initialTemplate ? ["template"] : [], ...props.initialPartial ? ["partial"] : [], ...props.initialUnblock ? ["unblock"] : []];
    const toBlock = (0, import_vue20.computed)(() => actiontype.value.includes("block"));
    const toTemplate = (0, import_vue20.computed)(() => actiontype.value.includes("template"));
    const toPartial = (0, import_vue20.computed)(() => actiontype.value.includes("partial"));
    const toTag = (0, import_vue20.computed)(() => actiontype.value.includes("tag"));
    const toUnblock = (0, import_vue20.computed)(() => actiontype.value.includes("unblock"));
    const partialDisabled = (0, import_vue20.computed)(() => !toBlock.value && !toTemplate.value);
    const toggleAction = (value, modelValue) => {
      let next;
      if (Array.isArray(modelValue)) {
        next = modelValue.filter((item) => typeof item === "string");
      } else if (modelValue) {
        next = [...actiontype.value, value];
      } else {
        next = actiontype.value.filter((item) => item !== value);
      }
      if (value === "unblock" && next.includes("unblock")) {
        next = ["unblock"];
      } else if (value !== "unblock" && next.includes("unblock")) {
        next = next.filter((item) => item !== "unblock");
      }
      actiontype.value = next;
    };
    const presetItems = (0, import_vue20.computed)(() => {
      const items = [];
      for (const [groupIndex, group] of props.presetGroups.entries()) {
        if (group.list.length === 0) {
          continue;
        }
        if (group.list.length > 0 && props.presetGroups.length > 1) {
          items.push({
            value: `__group_${groupIndex}`,
            label: group.label,
            disabled: true
          });
        }
        for (const item of group.list) {
          items.push({
            value: item.value,
            label: item.label,
            disabled: item.disabled
          });
        }
      }
      return items;
    });
    const templateItems = (0, import_vue20.computed)(() => {
      const items = [];
      for (const [groupIndex, group] of props.templateGroups.entries()) {
        if (group.list.length === 0) {
          continue;
        }
        if (props.templateGroups.length > 1) {
          items.push({
            value: `__group_${groupIndex}`,
            label: group.label,
            disabled: true
          });
        }
        for (const item of group.list) {
          items.push({
            value: item.value,
            label: item.label,
            disabled: item.disabled
          });
        }
      }
      return items;
    });
    const expiryPresetItems = (0, import_vue20.computed)(() => props.expiryPresetOptions.map((option) => ({
      value: option.value,
      label: option.label
    })));
    const seeAlsoOptions = [{
      value: uls("过滤器日志", "過濾器日誌"),
      label: uls("过滤器日志", "過濾器日誌")
    }, {
      value: uls("用户讨论页", "使用者討論頁"),
      label: uls("用户讨论页", "使用者討論頁")
    }, {
      value: uls("过去的封禁记录", "過去的封鎖記錄"),
      label: uls("过去的封禁记录", "過去的封鎖記錄")
    }];
    const seeAlsoValues = (0, import_vue20.ref)([]);
    const updateNamespaces = (value) => {
      namespacerestrictions.value = Array.isArray(value) ? value.filter((item) => typeof item === "string") : [];
    };
    const updateActionRestrictions = (value) => {
      actionrestrictions.value = Array.isArray(value) ? value.filter((item) => typeof item === "string") : [];
    };
    const updateTag = (value) => {
      tag.value = Array.isArray(value) ? value.filter((item) => typeof item === "string") : [];
    };
    const toggleSeeAlso = (value, modelValue) => {
      let next;
      if (Array.isArray(modelValue)) {
        next = modelValue.filter((item) => typeof item === "string");
      } else if (modelValue) {
        next = [...seeAlsoValues.value, value];
      } else {
        next = seeAlsoValues.value.filter((item) => item !== value);
      }
      reason.value = reason.value.replace(new RegExp(`(<!-- )(参见|參見)${seeAlsoValues.value.join("、")}( -->)`), "");
      seeAlsoValues.value = next;
      if (seeAlsoValues.value.length) {
        reason.value = `${reason.value}<!-- ${uls("参见", "參見")}${seeAlsoValues.value.join("、")} -->`;
      }
    };
    const applyPreset = (key) => {
      if (!key) {
        return;
      }
      const data = props.presetsInfo[key];
      if (!data) {
        return;
      }
      if (!data["useInitialOptions"]) {
        let presetExpiry = String(data["expiry"] ?? "");
        if (Date.parse(presetExpiry)) {
          presetExpiry = new Date(presetExpiry).toUTCString();
          expiryPreset.value = "custom";
        } else {
          expiryPreset.value = presetExpiry || "custom";
        }
        expiry.value = presetExpiry;
      }
      const checkValue = (name) => {
        const value = data[name];
        return value === "" || !!value;
      };
      nocreate.value = checkValue("nocreate");
      noemail.value = checkValue("noemail");
      disabletalk.value = checkValue("disabletalk");
      hardblock.value = checkValue("hardblock");
      watchuser.value = checkValue("watchuser");
      if (props.userIsBot || /bot\b/i.test(mw.config.get("wgRelevantUserName") || "")) {
        autoblock.value = false;
      } else {
        autoblock.value = checkValue("autoblock");
      }
      if (data["prependReason"] && data["reason"]) {
        reason.value = `${String(data["reason"])}；${reason.value}`;
      } else {
        reason.value = String(data["reason"] ?? "");
      }
      if (!data["useInitialOptions"]) {
        pagerestrictionsInput.value = "";
        namespacerestrictions.value = [];
        actionrestrictions.value = [];
      }
      const restrictions = data["restrictions"];
      if (restrictions !== null && restrictions !== void 0 && restrictions.pages && pagerestrictionsInput.value === "") {
        pagerestrictionsInput.value = restrictions.pages.map((pr) => pr.title).join("、");
      }
      if (restrictions !== null && restrictions !== void 0 && restrictions.namespaces) {
        namespacerestrictions.value = restrictions.namespaces.map(String);
      }
      const templateName = String(data["templateName"] || key);
      if (templateItems.value.some((item) => item.value === templateName)) {
        template.value = templateName;
      } else {
        template.value = key;
      }
      applyTemplate();
    };
    const applyTemplate = () => {
      const settings = props.presetsInfo[template.value] ?? {};
      if (!toBlock.value) {
        if (settings["indefinite"] || settings["nonstandard"]) {
          templateExpiry.value = "infinity";
        } else if (templateExpiry.value === "infinity") {
          templateExpiry.value = "";
        }
      }
      if (settings["reasonParam"]) {
        var _props$presetsInfo$pr;
        blockReason.value = String(((_props$presetsInfo$pr = props.presetsInfo[preset.value]) === null || _props$presetsInfo$pr === void 0 ? void 0 : _props$presetsInfo$pr["reason"]) ?? "");
      } else {
        blockReason.value = "";
      }
    };
    const templateExpiryHidden = (0, import_vue20.computed)(() => {
      const settings = props.presetsInfo[template.value] ?? {};
      return !toBlock.value && (settings["indefinite"] || settings["nonstandard"]);
    });
    const blankDurationVisible = (0, import_vue20.computed)(() => {
      const settings = props.presetsInfo[template.value] ?? {};
      return !settings["indefinite"] && !settings["nonstandard"];
    });
    const notalkVisible = (0, import_vue20.computed)(() => {
      const settings = props.presetsInfo[template.value] ?? {};
      return !settings["nonstandard"];
    });
    const articleVisible = (0, import_vue20.computed)(() => {
      const settings = props.presetsInfo[template.value] ?? {};
      return !!settings["pageParam"];
    });
    const blockReasonVisible = (0, import_vue20.computed)(() => {
      const settings = props.presetsInfo[template.value] ?? {};
      return !!settings["reasonParam"];
    });
    const areaVisible = (0, import_vue20.computed)(() => toPartial.value && !toBlock.value);
    const expiryInputVisible = (0, import_vue20.computed)(() => expiryPreset.value === "custom");
    (0, import_vue20.watch)(expiryPreset, (value) => {
      if (value !== "custom") {
        expiry.value = value;
      }
    });
    (0, import_vue20.watch)(preset, (value) => {
      if (value && !value.startsWith("__group_")) {
        applyPreset(value);
      }
    });
    (0, import_vue20.watch)(template, (value) => {
      if (value && !value.startsWith("__group_")) {
        applyTemplate();
      }
    });
    (0, import_vue20.watch)(block64, (checked) => {
      emit("block64Changed", checked);
    });
    const primaryAction = (0, import_vue20.computed)(() => ({
      label: uls("提交", "提交"),
      actionType: "progressive",
      disabled: submitting.value
    }));
    const buildParams = () => ({
      actiontype: [...actiontype.value],
      preset: preset.value,
      expiry_preset: expiryPreset.value,
      expiry: expiry.value,
      pagerestrictions: pagerestrictionsInput.value,
      namespacerestrictions: [...namespacerestrictions.value],
      actionrestrictions: [...actionrestrictions.value],
      nocreate: nocreate.value,
      noemail: noemail.value,
      disabletalk: disabletalk.value,
      autoblock: autoblock.value,
      hardblock: hardblock.value,
      watchuser: watchuser.value,
      closevip: closevip.value,
      reason: reason.value,
      template: template.value,
      article: article.value,
      area: area.value,
      template_expiry: templateExpiry.value,
      block_reason: blockReason.value,
      blank_duration: blankDuration.value,
      notalk: notalk.value,
      noemail_template: noemailTemplate.value,
      nocreate_template: nocreateTemplate.value,
      tag: [...tag.value],
      sppUsername: sppUsername.value,
      sppType: sppType.value,
      sppEvidence: sppEvidence.value,
      spmChecked: spmChecked.value,
      spmEvidence: spmEvidence.value,
      unblock_reason: unblockReason.value,
      block64: block64.value
    });
    let previewer = null;
    const onPreview = () => {
      if (previewer) {
        previewer.closePreview();
      }
      if (!previewBox.value) {
        return;
      }
      const params = buildParams();
      previewer = new Morebits.wiki.preview(previewBox.value);
      previewer.beginRender(
        getBlockNoticeWikitext(buildTemplateParams(params)),
        `User_talk:${props.relevantUserName}/Wikitext`
        // Force wikitext/correct username
      );
    };
    const submit = () => {
      var _statusRef$value1;
      if (submitting.value) {
        return;
      }
      submitting.value = true;
      evaluate(buildParams(), ((_statusRef$value1 = statusRef.value) === null || _statusRef$value1 === void 0 ? void 0 : _statusRef$value1.getStatusRoot()) ?? null, () => {
        submitting.value = false;
      });
    };
    (0, import_vue20.watch)(open, (value) => {
      if (!value) {
        emit("close");
      }
    });
    const tagLabels = {
      "Blocked user": `{{Blocked user}}：${uls("一般永久封禁", "一般永久封鎖")}`,
      Sockpuppet: `{{Sockpuppet}}：${uls("傀儡账号", "傀儡賬號")}`,
      Sockpuppeteer: `{{Sockpuppeteer|blocked}}：${uls("傀儡主账号", "傀儡主賬號")}`
    };
    const menuFormattedNamespaces = {};
    for (const [number, name] of Object.entries(mw.config.get("wgFormattedNamespaces"))) {
      menuFormattedNamespaces[Number(number)] = String(name);
    }
    menuFormattedNamespaces[0] = uls("（条目）", "（條目）");
    const blockActionText = {
      block: uls("封禁", "封鎖"),
      reblock: uls("重新封禁", "重新封鎖"),
      unblock: uls("解除封禁", "解除封鎖")
    };
    const actionOptions = [{
      label: uls("上传文件（包括覆盖文件）", "上傳檔案（包括覆蓋檔案）"),
      value: "upload"
    }, {
      label: uls("移动页面及文件", "移動頁面及檔案"),
      value: "move"
    }, {
      label: uls("创建新页面及上传新文件", "建立新頁面及上傳新檔案"),
      value: "create"
    }, {
      label: uls("发送感谢", "發送感謝"),
      value: "thanks"
    }];
    const namespaceLabels = {};
    for (const ns of props.namespaces) {
      namespaceLabels[ns.value] = ns.label;
    }
    const getRelevantUserName = (block642) => {
      const userName = mw.config.get("wgRelevantUserName") ?? "";
      return block642 ? Morebits.ip.get64(userName) || userName : userName;
    };
    const buildTemplateParams = (params) => {
      const pageRestrictions = params.pagerestrictions.split(/[、,，\n]/).map((item) => {
        return item.trim();
      }).filter(Boolean);
      return {
        article: params.article,
        blank_duration: params.blank_duration,
        disabletalk: params.disabletalk || params.notalk,
        expiry: params.template_expiry || params.expiry,
        hardblock: props.isRegistered ? params.autoblock : params.hardblock,
        indefinite: Morebits.string.isInfinity(params.template_expiry || params.expiry),
        reason: params.block_reason,
        template: params.template,
        partial: params.actiontype.includes("partial"),
        pagerestrictions: pageRestrictions,
        namespacerestrictions: params.namespacerestrictions,
        noemail: params.noemail || params.noemail_template,
        nocreate: params.nocreate || params.nocreate_template,
        area: params.area
      };
    };
    const getBlockNoticeWikitext = (params) => {
      let text = "{{";
      const settings = props.presetsInfo[params.template] ?? {};
      if (settings["nonstandard"]) {
        text += params.template;
      } else {
        text += "subst:".concat(params.template);
        if (params.article && settings["pageParam"]) {
          text += `|page=${params.article}`;
        }
        if (!/te?mp|^\s*$|min/.exec(params.expiry)) {
          if (params.indefinite) {
            text += "|indef=yes";
          } else if (!params.blank_duration) {
            text += `|time=${Morebits.string.formatTime(params.expiry)}`;
          }
        }
        if (!props.isRegistered && !params.hardblock) {
          text += "|anon=yes";
        }
        if (params.reason) {
          text += `|reason=${params.reason}`;
        }
        if (params.disabletalk) {
          text += "|notalk=yes";
        }
        if (params.partial) {
          if (params.pagerestrictions.length || params.namespacerestrictions.length) {
            var _params$actionrestric;
            const makeSentence = (array) => {
              if (array.length < 3) {
                return array.join("和");
              }
              const last = array.pop();
              return `${array.join("、")}和${last}`;
            };
            text += "|area=某些";
            if (params.pagerestrictions.length) {
              text += `頁面（${makeSentence(params.pagerestrictions.map((p) => {
                return `[[:${p}]]`;
              }))}`;
              text += params.namespacerestrictions.length ? "）和某些" : "）";
            }
            if (params.namespacerestrictions.length) {
              const namespaceNames = params.namespacerestrictions.map((id) => {
                return namespaceLabels[Number(id)] ?? String(id);
              });
              text += `${uls("[[Help:命名空间|命名空间]]（", "[[Help:命名空間|命名空間]]（") + makeSentence(namespaceNames)}）`;
            }
            if ((_params$actionrestric = params.actionrestrictions) !== null && _params$actionrestric !== void 0 && _params$actionrestric.length) {
              const actionNames = params.actionrestrictions.map((action) => {
                const actionOption = actionOptions.find((opt) => {
                  return opt.value === action;
                });
                return actionOption ? actionOption.label : action;
              });
              text += `操作（${makeSentence(actionNames)}）`;
            }
          } else if (params.area) {
            text += `|area=${params.area}`;
          } else {
            if (params.noemail) {
              text += "|email=yes";
            }
            if (params.nocreate) {
              text += "|accountcreate=yes";
            }
          }
        }
      }
      if (settings["sig"]) {
        text += `|sig=${String(settings["sig"])}`;
      }
      return `${text}}}`;
    };
    const issue_template = (formData) => {
      var _props$presetsInfo;
      const userTalkPage = `User_talk:${mw.config.get("wgRelevantUserName")}`;
      const params = {
        ...formData,
        messageData: props.presetsInfo[formData.template] ?? {},
        usertalk_summary: String(((_props$presetsInfo = props.presetsInfo[formData.preset || formData.template]) === null || _props$presetsInfo === void 0 ? void 0 : _props$presetsInfo["summary"]) ?? ""),
        reason: formData.block_reason,
        disabletalk: formData.notalk,
        noemail: formData.noemail_template,
        nocreate: formData.nocreate_template
      };
      Morebits.wiki.actionCompleted.redirect = userTalkPage;
      Morebits.wiki.actionCompleted.notice = uls("完成，将在几秒后加载用户讨论页", "完成，將在幾秒後載入使用者討論頁");
      const qiuwen_page = new Morebits.wiki.page(userTalkPage, uls("用户讨论页修改", "使用者討論頁修改"));
      qiuwen_page.setCallbackParameters(params);
      qiuwen_page.load(main);
    };
    const main = (pageobj) => {
      const params = pageobj.getCallbackParameters();
      const date = new Morebits.date(pageobj.getLoadTime() ?? "");
      const messageData = params.messageData;
      let text;
      params.indefinite = Morebits.string.isInfinity(params.expiry);
      if (Twinkle.getPref("blankTalkpageOnIndefBlock") && params.template !== "uw-lblock" && params.indefinite) {
        Morebits.status.info(uls("信息", "資訊"), uls("根据参数设置清空讨论页并为日期创建新2级标题", "根據偏好設定清空討論頁並為日期建立新2級標題"));
        text = `${date.monthHeader()}
`;
      } else {
        text = pageobj.getPageText() ?? "";
        const dateHeaderRegex = date.monthHeaderRegex();
        let dateHeaderRegexLast;
        let dateHeaderRegexResult = null;
        while ((dateHeaderRegexLast = dateHeaderRegex.exec(text)) !== null) {
          dateHeaderRegexResult = dateHeaderRegexLast;
        }
        const lastHeaderIndex = text.lastIndexOf("\n==") + 1;
        if (text.length > 0) {
          text += "\n\n";
        }
        if (!dateHeaderRegexResult || dateHeaderRegexResult.index !== lastHeaderIndex) {
          Morebits.status.info(uls("信息", "資訊"), uls("未找到当月的二级标题，将创建新的", "未找到當月的二級標題，將建立新的"));
          text += `${date.monthHeader()}
`;
        }
      }
      params.expiry = params.template_expiry === void 0 ? params.expiry : params.template_expiry;
      text += getBlockNoticeWikitext(params);
      let summary = params.usertalk_summary;
      if (messageData["suppressArticleInSummary"] !== true && params.article) {
        summary += `${uls("，于", "，於")}[[:${params.article}]]`;
      }
      pageobj.setPageText(text);
      pageobj.setEditSummary(summary);
      pageobj.setChangeTags(Twinkle.changeTags);
      pageobj.setWatchlist(Twinkle.getPref("watchBlockNotices"));
      pageobj.save();
    };
    const taguserpage = (pageobj) => {
      const params = pageobj.getCallbackParameters();
      const statelem = pageobj.getStatusElement();
      if (params.actiontype.includes("tag")) {
        const tags = [];
        for (const tag2 of params.tag) {
          let tagtext = `{{${tag2}`;
          switch (tag2) {
            case "Blocked user":
              break;
            case "Sockpuppet":
              tagtext += `
| 1 = ${params.sppUsername.trim()}`;
              tagtext += `
| 2 = ${params.sppType.trim()}`;
              if (params.sppEvidence.trim()) {
                tagtext += `
| evidence = ${params.sppEvidence.trim()}`;
              }
              tagtext += "\n| locked = no";
              tagtext += "\n| notblocked = no";
              tagtext += "\n";
              break;
            case "Sockpuppeteer":
              tagtext += "\n| 1 = blocked";
              tagtext += `
| checked = ${params.spmChecked ? "yes" : ""}`;
              if (params.spmEvidence.trim()) {
                tagtext += `
| evidence = ${params.spmEvidence.trim()}`;
              }
              tagtext += "\n";
              break;
            default:
              void mw.notify(uls("未知的用户页模板！", "未知的使用者頁面模板！"), {
                type: "warn",
                tag: "twinkleblock"
              });
              continue;
          }
          tagtext += "}}";
          tags[tags.length] = tagtext;
        }
        const text = tags.join("\n");
        pageobj.setPageText(text);
        pageobj.setEditSummary(uls("标记被永久封禁的用户页", "標記被永久封鎖的使用者頁面"));
        pageobj.setChangeTags(Twinkle.changeTags);
        pageobj.save(() => {
          Morebits.status.info(uls("标记用户页", "標記使用者頁面"), "完成");
          statelem.status(uls("正在保护页面", "正在保護頁面"));
          pageobj.load(protectuserpage);
        });
      } else {
        protectuserpage(pageobj);
      }
    };
    const protectuserpage = (pageobj) => {
      const params = pageobj.getCallbackParameters();
      const statelem = pageobj.getStatusElement();
      if (params.actiontype.includes("protect")) {
        if (pageobj.exists()) {
          pageobj.setEditProtection("sysop", "indefinite");
          pageobj.setMoveProtection("sysop", "indefinite");
        } else {
          pageobj.setCreateProtection("sysop", "indefinite");
        }
        pageobj.setEditSummary(uls("被永久封禁的用户页", "被永久封鎖的使用者頁面"));
        pageobj.setChangeTags(Twinkle.changeTags);
        pageobj.protect(() => {
          Morebits.status.info(uls("保护用户页", "保護使用者頁面"), pageobj.exists() ? uls("已全保护", "已全保護") : uls("已白纸保护", "已白紙保護"));
          statelem.info("全部完成");
        });
      } else {
        statelem.info("全部完成");
      }
    };
    const closeRequest = (vipPage) => {
      const params = vipPage.getCallbackParameters();
      let text = vipPage.getPageText() ?? "";
      const statusElement = vipPage.getStatusElement();
      const userName = mw.config.get("wgRelevantUserName") ?? "";
      const expiryText = Morebits.string.formatTime(params.expiry);
      const comment = `{{Blocked|${Morebits.string.isInfinity(params.expiry) ? "indef" : expiryText}}}。`;
      const requestList = text.split(/(?=\n===.+===\s*\n)/);
      let found = false;
      let hidename = false;
      const vipRe = new RegExp(`{{\\s*[Vv]andal\\s*\\|\\s*(1\\s*=\\s*)?${Morebits.pageNameRegex(userName)}\\s*(\\|\\s*hidename\\s*=[^|]+)?}}`, "m");
      for (let request of requestList) {
        if (vipRe.exec(request)) {
          hidename = /\|\s*hidename\s*=[^|]+/.test(request);
          request = request.trimEnd();
          let newText = request.replace(/^(\*\s*处理：)[ \t]*(<!-- 非管理員僅可標記已執行的封禁，針對提報的意見請放在下一行 -->)?[ \t]*$/m, `$1${comment}——~~`.concat("~~"));
          if (request === newText) {
            newText = `${request}
* 处理：${comment}——~~`.concat("~~");
          }
          request = `${newText}
`;
          found = true;
          break;
        }
      }
      if (!found) {
        statusElement.warn(uls("没有找到相关的请求", "沒有找到相關的請求"));
        return;
      }
      text = requestList.join("");
      let summary;
      if (hidename) {
        summary = uls("标记为已处理", "標記為已處理");
      } else {
        summary = `/* ${userName} */ `;
        if (Morebits.string.isInfinity(params.expiry)) {
          summary += uls("不限期封禁", "不限期封鎖");
        } else {
          summary += uls("封禁", "封鎖") + expiryText;
        }
      }
      vipPage.setEditSummary(summary);
      vipPage.setChangeTags(Twinkle.changeTags);
      vipPage.setPageText(text);
      vipPage.save();
    };
    const evaluate = (params, statusContainer, restore) => {
      const relevantUser = getRelevantUserName(params.block64);
      const toBlock2 = params.actiontype.includes("block");
      const toWarn = params.actiontype.includes("template");
      const toPartial2 = params.actiontype.includes("partial");
      const toTag2 = params.actiontype.includes("tag");
      const toProtect = params.actiontype.includes("protect");
      const toUnblock2 = params.actiontype.includes("unblock");
      const pageRestrictions = params.pagerestrictions.split(/[、,，\n]/).map((item) => {
        return item.trim();
      }).filter(Boolean);
      const blockoptions = {
        partial: toPartial2,
        nocreate: params.nocreate,
        noemail: params.noemail,
        disabletalk: params.disabletalk,
        autoblock: params.autoblock,
        hardblock: params.hardblock,
        watchuser: params.watchuser,
        // Interpret a 12-digit absolute expiry (yyyymmddhhmm) as Beijing time
        expiry: normalizeExpiry(params.expiry),
        reason: params.reason,
        pagerestrictions: "",
        namespacerestrictions: ""
      };
      const templateoptions = {
        template: params.template,
        article: params.article,
        area: params.area,
        template_expiry: params.template_expiry,
        block_reason: params.block_reason,
        blank_duration: params.blank_duration,
        notalk: params.notalk,
        noemail_template: params.noemail_template,
        nocreate_template: params.nocreate_template,
        partial: toPartial2,
        disabletalk: !!(params.notalk || params.disabletalk),
        hardblock: !!params.hardblock,
        pagerestrictions: pageRestrictions,
        namespacerestrictions: params.namespacerestrictions,
        // use block settings as warn options where not supplied
        summary: params.reason,
        expiry: params.template_expiry || normalizeExpiry(params.expiry),
        preset: toBlock2 ? params.preset : null
      };
      const unblockoptions = {
        reason: params.unblock_reason
      };
      const toClosevip = !!params.closevip;
      blockoptions.pagerestrictions = pageRestrictions.join("|");
      blockoptions.namespacerestrictions = params.namespacerestrictions.join("|");
      const checkIncompatible = (conflicts, extra) => {
        const count = conflicts.reduce((sum, tag2) => {
          return sum + (params.tag.includes(tag2) ? 1 : 0);
        }, 0);
        if (count > 1) {
          let message = `${uls("请在以下标签中择一使用", "請在以下標籤中擇一使用")}：{{${conflicts.join("}}、{{")}}}。`;
          message += extra || "";
          void mw.notify(message, {
            type: "warn",
            tag: "twinkleblock"
          });
          return true;
        }
        return false;
      };
      if (toTag2) {
        if (params.tag.length === 0) {
          void mw.notify(uls("请至少选择一个用户页标记！", "請至少選擇一個使用者頁面標記！"), {
            type: "warn",
            tag: "twinkleblock"
          });
          restore();
          return;
        }
        if (checkIncompatible(["Blocked user", "Sockpuppet"], uls("{{Sockpuppet}}已涵盖{{Blocked user}}的功能。", "{{Sockpuppet}}已涵蓋{{Blocked user}}的功能。"))) {
          restore();
          return;
        }
        if (checkIncompatible(["Blocked user", "Sockpuppeteer"], uls("{{Sockpuppeteer}}已涵盖{{Blocked user}}的功能。", "{{Sockpuppeteer}}已涵蓋{{Blocked user}}的功能。"))) {
          restore();
          return;
        }
        if (checkIncompatible(["Sockpuppet", "Sockpuppeteer"], uls("请从主账号和分身账号中选择一个。", "請從主賬號和分身賬號中選擇一個。"))) {
          restore();
          return;
        }
        if (params.tag.includes("Sockpuppet") && params.sppUsername.trim() === "") {
          void mw.notify(uls("请提供傀儡账号的主账号用户名！", "請提供傀儡賬號的主賬號使用者名稱！"), {
            type: "warn",
            tag: "twinkleblock"
          });
          restore();
          return;
        }
      }
      if (toBlock2) {
        if (blockoptions.partial) {
          if (blockoptions.disabletalk && !blockoptions.namespacerestrictions.includes("3")) {
            void mw.notify(uls("部分封禁无法阻止编辑自己的讨论页，除非也封禁了User talk命名空间！", "部分封鎖無法阻止編輯自己的討論頁，除非也封鎖了User talk命名空間！"), {
              type: "warn",
              tag: "twinkleblock"
            });
            restore();
            return;
          }
          if (!blockoptions.namespacerestrictions && !blockoptions.pagerestrictions) {
            if (!blockoptions.noemail && !blockoptions.nocreate) {
              void mw.notify(uls("没有选择页面或命名空间，也没有停用电子邮件或禁止创建账号；请选择至少一个选项以应用部分封禁！", "沒有選擇頁面或命名空間，也沒有停用電子郵件或禁止建立賬號；請選擇至少一個選項以應用部分封鎖！"), {
                type: "warn",
                tag: "twinkleblock"
              });
              restore();
              return;
            } else if (!confirm(uls("您将要进行封禁，但没有阻止任何页面或命名空间的编辑，确定要继续？", "您將要進行封鎖，但沒有阻止任何頁面或命名空間的編輯，確定要繼續？"))) {
              return;
            }
          }
        }
        if (!blockoptions.expiry) {
          void mw.notify(uls("请提供过期时间！", "請提供過期時間！"), {
            type: "warn",
            tag: "twinkleblock"
          });
          restore();
          return;
        } else if (Morebits.string.isInfinity(blockoptions.expiry) && !props.isRegistered) {
          void mw.notify(uls("禁止无限期封禁IP地址！", "禁止無限期封鎖IP位址！"), {
            type: "warn",
            tag: "twinkleblock"
          });
          restore();
          return;
        }
        if (!blockoptions.reason) {
          void mw.notify(uls("请提供封禁理由！", "請提供封鎖理由！"), {
            type: "warn",
            tag: "twinkleblock"
          });
          restore();
          return;
        }
        Morebits.status.init(statusContainer);
        const statusElement = new Morebits.status(uls("执行封禁", "執行封鎖"));
        blockoptions.action = "block";
        blockoptions.user = relevantUser;
        blockoptions.anononly = blockoptions.hardblock ? void 0 : true;
        blockoptions.allowusertalk = blockoptions.disabletalk ? void 0 : true;
        const query = {
          format: "json",
          action: "query",
          list: "blocks|logevents",
          letype: "block",
          lelimit: 1,
          letitle: `User:${blockoptions.user}`
        };
        if (mw.util.isIPAddress(blockoptions.user, true)) {
          query["bkip"] = blockoptions.user;
        } else {
          query["bkusers"] = blockoptions.user;
          query["list"] += "|users";
          query["usprop"] = "groups";
          query["ususers"] = blockoptions.user;
          query["meta"] = "tokens";
          query["type"] = "userrights";
        }
        void api.get(query).then((response) => {
          var _block;
          const data = response;
          let block = data.query.blocks[0];
          if (data.query.blocks.length > 1 && ((_block = block) === null || _block === void 0 ? void 0 : _block["user"]) !== relevantUser) {
            block = data.query.blocks[1];
          }
          const logevents = data.query.logevents[0];
          const user = data.query.users ? data.query.users[0] : null;
          const logid = data.query.logevents.length && logevents ? logevents.logid : false;
          if (logid !== props.blockLogId || !!block !== !!props.currentBlockInfo) {
            let message = blockoptions.user + uls("的封禁状态已被修改。", "的封鎖狀態已被修改。");
            if (block) {
              message += uls("新状态：", "新狀態：");
            } else {
              message += uls("最新日志：", "最新日誌：");
            }
            let logExpiry = "";
            if (logevents !== null && logevents !== void 0 && logevents.params.duration) {
              if (logevents.params.duration === "infinity") {
                logExpiry = uls("无限期", "無限期");
              } else {
                const expiryDate = new Morebits.date(logevents.params.expiry ?? "");
                logExpiry += (expiryDate.isBefore(/* @__PURE__ */ new Date()) ? uls("过期于", "過期於") : "直到") + expiryDate.calendar(UTC8_OFFSET_MINUTES);
              }
            } else {
              logExpiry = `於${new Morebits.date((logevents === null || logevents === void 0 ? void 0 : logevents.timestamp) ?? "").calendar(UTC8_OFFSET_MINUTES)}`;
            }
            message += `由${logevents === null || logevents === void 0 ? void 0 : logevents.user}${uls("以“", "以「")}${logevents === null || logevents === void 0 ? void 0 : logevents.comment}${uls("”", "」")}${blockActionText[(logevents === null || logevents === void 0 ? void 0 : logevents.action) ?? ""] ?? ""}${logExpiry}${uls("，你想要以你的设置更改封禁吗？", "，你想要以你的設定變更封鎖嗎？")}`;
            if (!confirm(message)) {
              Morebits.status.info(uls("执行封禁", "執行封鎖"), uls("用户取消操作", "使用者取消操作"));
              return;
            }
            blockoptions.reblock = 1;
          }
          const groupsCanBeRemoved = ["autoreviewer", "confirmed", "rnrsverify-exempt", "massmessage-sender", "patroller", "templateeditor", "transwiki"];
          let groupsToBeRemoved = [];
          if (user && Morebits.string.isInfinity(blockoptions.expiry)) {
            groupsToBeRemoved = user.groups.filter((group) => {
              return groupsCanBeRemoved.includes(group);
            });
          }
          blockoptions.tags = Twinkle.changeTags.split("|");
          blockoptions.token = mw.user.tokens.get("csrfToken");
          const mbApi = new Morebits.wiki.api(uls("执行封禁", "執行封鎖"), blockoptions, () => {
            statusElement.info("完成");
            if (toWarn) {
              issue_template(templateoptions);
            }
            if (toClosevip) {
              const vipPage = new Morebits.wiki.page("Qiuwen_talk:报告当前破坏", uls("关闭请求", "關閉請求"));
              vipPage.setFollowRedirect(true);
              vipPage.setCallbackParameters(blockoptions);
              vipPage.load(closeRequest);
            }
            if (groupsToBeRemoved.length > 0) {
              const rightStatusElement = new Morebits.status(uls("移除权限", "移除權限"));
              if (confirm(uls("该用户有以下权限：", "該使用者有以下權限：") + groupsToBeRemoved.join("、") + uls("，您是否想要同时移除这些权限？", "，您是否想要同時移除這些權限？"))) {
                var _data$query$tokens;
                const revokeOptions = {
                  action: "userrights",
                  user: blockoptions.user ?? "",
                  remove: groupsToBeRemoved.join("|"),
                  reason: uls("用户已被无限期封禁", "使用者已被無限期封鎖"),
                  token: ((_data$query$tokens = data.query.tokens) === null || _data$query$tokens === void 0 ? void 0 : _data$query$tokens.userrightstoken) ?? "",
                  tags: Twinkle.changeTags
                };
                const mrApi = new Morebits.wiki.api(uls("移除权限", "移除權限"), revokeOptions, () => {
                  rightStatusElement.info(`已移除${groupsToBeRemoved.join("、")}`);
                });
                mrApi.post();
              } else {
                rightStatusElement.error(uls("用户取消操作。", "使用者取消操作。"));
              }
            }
          });
          mbApi.post();
        });
      } else if (toWarn) {
        Morebits.status.init(statusContainer);
        issue_template(templateoptions);
      }
      if (toTag2 || toProtect) {
        Morebits.status.init(statusContainer);
        const userPage = `User:${mw.config.get("wgRelevantUserName")}`;
        const qiuwen_page = new Morebits.wiki.page(userPage, uls("标记或保护用户页", "標記或保護使用者頁面"));
        qiuwen_page.setCallbackParameters(params);
        qiuwen_page.load(taguserpage);
      }
      if (toUnblock2) {
        if (!unblockoptions["reason"]) {
          void mw.notify(uls("请提供解除封禁理由！", "請提供解除封鎖理由！"), {
            type: "warn",
            tag: "twinkleblock"
          });
          restore();
          return;
        }
        Morebits.status.init(statusContainer);
        const unblockStatusElement = new Morebits.status(uls("执行解除封禁", "執行解除封鎖"));
        unblockoptions["action"] = "unblock";
        unblockoptions["user"] = mw.config.get("wgRelevantUserName") ?? "";
        unblockoptions["tags"] = Twinkle.changeTags;
        unblockoptions["token"] = mw.user.tokens.get("csrfToken");
        const unblockMbApi = new Morebits.wiki.api(uls("执行解除封禁", "執行解除封鎖"), unblockoptions, () => {
          unblockStatusElement.info("完成");
        });
        unblockMbApi.post();
      }
      if (!toBlock2 && !toWarn && !toTag2 && !toProtect && !toUnblock2) {
        void mw.notify(uls("请给Twinkle点事做！", "請給Twinkle點事做！"), {
          type: "warn",
          tag: "twinkleblock"
        });
      }
    };
    const __returned__ = {
      props,
      emit,
      open,
      submitting,
      actionRestrictionOptions,
      actiontype,
      block64,
      preset,
      expiryPreset,
      expiry,
      pagerestrictionsInput,
      namespacerestrictions,
      actionrestrictions,
      nocreate,
      noemail,
      disabletalk,
      autoblock,
      hardblock,
      watchuser,
      closevip,
      reason,
      template,
      article,
      area,
      templateExpiry,
      blockReason,
      blankDuration,
      notalk,
      noemailTemplate,
      nocreateTemplate,
      tag,
      sppUsername,
      sppType,
      sppEvidence,
      spmChecked,
      spmEvidence,
      unblockReason,
      previewBox,
      statusRef,
      toBlock,
      toTemplate,
      toPartial,
      toTag,
      toUnblock,
      partialDisabled,
      toggleAction,
      presetItems,
      templateItems,
      expiryPresetItems,
      seeAlsoOptions,
      seeAlsoValues,
      updateNamespaces,
      updateActionRestrictions,
      updateTag,
      toggleSeeAlso,
      applyPreset,
      applyTemplate,
      templateExpiryHidden,
      blankDurationVisible,
      notalkVisible,
      articleVisible,
      blockReasonVisible,
      areaVisible,
      expiryInputVisible,
      primaryAction,
      buildParams,
      get previewer() {
        return previewer;
      },
      set previewer(v) {
        previewer = v;
      },
      onPreview,
      submit,
      tagLabels,
      menuFormattedNamespaces,
      blockActionText,
      actionOptions,
      namespaceLabels,
      getRelevantUserName,
      buildTemplateParams,
      getBlockNoticeWikitext,
      issue_template,
      main,
      taguserpage,
      protectuserpage,
      closeRequest,
      evaluate,
      get CdxButton() {
        return import_codex7.CdxButton;
      },
      get CdxCheckbox() {
        return import_codex7.CdxCheckbox;
      },
      get CdxField() {
        return import_codex7.CdxField;
      },
      get CdxSelect() {
        return import_codex7.CdxSelect;
      },
      get CdxTextArea() {
        return import_codex7.CdxTextArea;
      },
      get CdxTextInput() {
        return import_codex7.CdxTextInput;
      },
      TwDialog: TwDialog_default2,
      TwStatus: TwStatus_default2,
      get uls() {
        return uls;
      }
    };
    Object.defineProperty(__returned__, "__isScriptSetup", {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});
var import_vue21 = require("vue");
var _hoisted_17 = {
  class: "tw-block-64-note"
};
var _hoisted_27 = {
  key: 0,
  class: "tw-block-notice"
};
var _hoisted_34 = {
  key: 0
};
var _hoisted_43 = {
  key: 1,
  class: "tw-block-notice"
};
var _hoisted_52 = ["href"];
var _hoisted_62 = {
  ref: "previewBox",
  hidden: ""
};
function render7(_ctx, _cache, $props, $setup, $data, $options) {
  return (0, import_vue21.openBlock)(), (0, import_vue21.createBlock)($setup["TwDialog"], {
    open: $setup.open,
    title: $props.title,
    "script-name": "Twinkle",
    "footer-links": $props.footerLinks,
    "primary-action": $setup.primaryAction,
    "onUpdate:open": _cache[34] || (_cache[34] = ($event) => $setup.open = $event),
    onPrimary: $setup.submit
  }, {
    default: (0, import_vue21.withCtx)(() => [(0, import_vue21.createVNode)($setup["CdxField"], {
      "is-fieldset": ""
    }, {
      label: (0, import_vue21.withCtx)(() => [(0, import_vue21.createTextVNode)(
        (0, import_vue21.toDisplayString)($setup.uls("操作类型", "操作類別")),
        1
        /* TEXT */
      )]),
      default: (0, import_vue21.withCtx)(() => [$props.showBlock ? ((0, import_vue21.openBlock)(), (0, import_vue21.createBlock)($setup["CdxCheckbox"], {
        key: 0,
        "model-value": $setup.actiontype,
        "input-value": "block",
        name: "twinkleblock-actiontype",
        disabled: $setup.submitting,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.toggleAction("block", $event))
      }, {
        default: (0, import_vue21.withCtx)(() => [(0, import_vue21.createTextVNode)(
          (0, import_vue21.toDisplayString)($setup.uls("封禁用户", "封鎖使用者")),
          1
          /* TEXT */
        )]),
        _: 1
        /* STABLE */
      }, 8, ["model-value", "disabled"])) : (0, import_vue21.createCommentVNode)("v-if", true), $props.showBlock ? ((0, import_vue21.openBlock)(), (0, import_vue21.createBlock)($setup["CdxCheckbox"], {
        key: 1,
        "model-value": $setup.actiontype,
        "input-value": "partial",
        name: "twinkleblock-actiontype",
        disabled: $setup.submitting || $setup.partialDisabled,
        "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.toggleAction("partial", $event))
      }, {
        default: (0, import_vue21.withCtx)(() => [(0, import_vue21.createTextVNode)(
          (0, import_vue21.toDisplayString)($setup.uls("部分封禁", "部分封鎖")),
          1
          /* TEXT */
        )]),
        _: 1
        /* STABLE */
      }, 8, ["model-value", "disabled"])) : (0, import_vue21.createCommentVNode)("v-if", true), $props.showTemplate ? ((0, import_vue21.openBlock)(), (0, import_vue21.createBlock)($setup["CdxCheckbox"], {
        key: 2,
        "model-value": $setup.actiontype,
        "input-value": "template",
        name: "twinkleblock-actiontype",
        disabled: $setup.submitting,
        "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $setup.toggleAction("template", $event))
      }, {
        default: (0, import_vue21.withCtx)(() => [(0, import_vue21.createTextVNode)(
          (0, import_vue21.toDisplayString)($setup.uls("加入封禁模板到用户讨论页", "加入封鎖模板到使用者討論頁")),
          1
          /* TEXT */
        )]),
        _: 1
        /* STABLE */
      }, 8, ["model-value", "disabled"])) : (0, import_vue21.createCommentVNode)("v-if", true), $props.showTag ? ((0, import_vue21.openBlock)(), (0, import_vue21.createBlock)($setup["CdxCheckbox"], {
        key: 3,
        "model-value": $setup.actiontype,
        "input-value": "tag",
        name: "twinkleblock-actiontype",
        disabled: $setup.submitting,
        "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $setup.toggleAction("tag", $event))
      }, {
        default: (0, import_vue21.withCtx)(() => [(0, import_vue21.createTextVNode)(
          (0, import_vue21.toDisplayString)($setup.uls("标记用户页", "標記使用者頁面")),
          1
          /* TEXT */
        )]),
        _: 1
        /* STABLE */
      }, 8, ["model-value", "disabled"])) : (0, import_vue21.createCommentVNode)("v-if", true), $props.showProtect ? ((0, import_vue21.openBlock)(), (0, import_vue21.createBlock)($setup["CdxCheckbox"], {
        key: 4,
        "model-value": $setup.actiontype,
        "input-value": "protect",
        name: "twinkleblock-actiontype",
        disabled: $setup.submitting,
        "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $setup.toggleAction("protect", $event))
      }, {
        default: (0, import_vue21.withCtx)(() => [(0, import_vue21.createTextVNode)(
          (0, import_vue21.toDisplayString)($setup.uls("保护用户页", "保護使用者頁面")),
          1
          /* TEXT */
        )]),
        _: 1
        /* STABLE */
      }, 8, ["model-value", "disabled"])) : (0, import_vue21.createCommentVNode)("v-if", true), $props.showUnblock ? ((0, import_vue21.openBlock)(), (0, import_vue21.createBlock)($setup["CdxCheckbox"], {
        key: 5,
        "model-value": $setup.actiontype,
        "input-value": "unblock",
        name: "twinkleblock-actiontype",
        disabled: $setup.submitting,
        "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => $setup.toggleAction("unblock", $event))
      }, {
        default: (0, import_vue21.withCtx)(() => [(0, import_vue21.createTextVNode)(
          (0, import_vue21.toDisplayString)($setup.uls("解除封禁用户", "解除封鎖使用者")),
          1
          /* TEXT */
        )]),
        _: 1
        /* STABLE */
      }, 8, ["model-value", "disabled"])) : (0, import_vue21.createCommentVNode)("v-if", true)]),
      _: 1
      /* STABLE */
    }), $props.sixtyFourAvailable ? ((0, import_vue21.openBlock)(), (0, import_vue21.createElementBlock)(
      import_vue21.Fragment,
      {
        key: 0
      },
      [(0, import_vue21.createVNode)($setup["CdxCheckbox"], {
        modelValue: $setup.block64,
        "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => $setup.block64 = $event),
        disabled: $setup.submitting
      }, {
        default: (0, import_vue21.withCtx)(() => [(0, import_vue21.createTextVNode)(
          (0, import_vue21.toDisplayString)($setup.uls("改成封禁/64", "改成封鎖/64")),
          1
          /* TEXT */
        )]),
        _: 1
        /* STABLE */
      }, 8, ["modelValue", "disabled"]), (0, import_vue21.createElementVNode)(
        "div",
        _hoisted_17,
        (0, import_vue21.toDisplayString)($setup.uls("直接封禁/64段有益无害。", "直接封鎖/64段有益無害。")),
        1
        /* TEXT */
      )],
      64
      /* STABLE_FRAGMENT */
    )) : (0, import_vue21.createCommentVNode)("v-if", true), $setup.toBlock ? ((0, import_vue21.openBlock)(), (0, import_vue21.createElementBlock)(
      import_vue21.Fragment,
      {
        key: 1
      },
      [(0, import_vue21.createVNode)($setup["CdxField"], null, {
        label: (0, import_vue21.withCtx)(() => [(0, import_vue21.createTextVNode)(
          (0, import_vue21.toDisplayString)($setup.uls("选择默认：", "選擇預設：")),
          1
          /* TEXT */
        )]),
        default: (0, import_vue21.withCtx)(() => [(0, import_vue21.createVNode)($setup["CdxSelect"], {
          selected: $setup.preset,
          "onUpdate:selected": _cache[7] || (_cache[7] = ($event) => $setup.preset = $event),
          "menu-items": $setup.presetItems,
          disabled: $setup.submitting
        }, null, 8, ["selected", "menu-items", "disabled"])]),
        _: 1
        /* STABLE */
      }), $props.notices.currentBlock ? ((0, import_vue21.openBlock)(), (0, import_vue21.createElementBlock)("div", _hoisted_27, [(0, import_vue21.createElementVNode)(
        "b",
        null,
        (0, import_vue21.toDisplayString)($props.notices.currentBlock),
        1
        /* TEXT */
      ), $props.notices.currentInfo ? ((0, import_vue21.openBlock)(), (0, import_vue21.createElementBlock)(
        "span",
        _hoisted_34,
        (0, import_vue21.toDisplayString)($props.notices.currentInfo),
        1
        /* TEXT */
      )) : (0, import_vue21.createCommentVNode)("v-if", true)])) : (0, import_vue21.createCommentVNode)("v-if", true), $props.notices.blockLog ? ((0, import_vue21.openBlock)(), (0, import_vue21.createElementBlock)("div", _hoisted_43, [(0, import_vue21.createTextVNode)(
        (0, import_vue21.toDisplayString)($props.notices.blockLog) + " ",
        1
        /* TEXT */
      ), (0, import_vue21.createElementVNode)("a", {
        href: $props.notices.blockLogLink,
        target: "_blank",
        rel: "noopener noreferrer"
      }, (0, import_vue21.toDisplayString)($setup.uls("封禁日志", "封鎖日誌")), 9, _hoisted_52)])) : (0, import_vue21.createCommentVNode)("v-if", true), (0, import_vue21.createVNode)($setup["CdxField"], null, {
        label: (0, import_vue21.withCtx)(() => [(0, import_vue21.createTextVNode)(
          (0, import_vue21.toDisplayString)($setup.uls("过期时间：", "過期時間：")),
          1
          /* TEXT */
        )]),
        default: (0, import_vue21.withCtx)(() => [(0, import_vue21.createVNode)($setup["CdxSelect"], {
          selected: $setup.expiryPreset,
          "onUpdate:selected": _cache[8] || (_cache[8] = ($event) => $setup.expiryPreset = $event),
          "menu-items": $setup.expiryPresetItems,
          disabled: $setup.submitting
        }, null, 8, ["selected", "menu-items", "disabled"])]),
        _: 1
        /* STABLE */
      }), $setup.expiryInputVisible ? ((0, import_vue21.openBlock)(), (0, import_vue21.createBlock)($setup["CdxField"], {
        key: 2
      }, {
        label: (0, import_vue21.withCtx)(() => [(0, import_vue21.createTextVNode)(
          (0, import_vue21.toDisplayString)($setup.uls("自定义过期时间", "自訂過期時間")),
          1
          /* TEXT */
        )]),
        default: (0, import_vue21.withCtx)(() => [(0, import_vue21.createVNode)($setup["CdxTextInput"], {
          modelValue: $setup.expiry,
          "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => $setup.expiry = $event),
          disabled: $setup.submitting
        }, null, 8, ["modelValue", "disabled"])]),
        _: 1
        /* STABLE */
      })) : (0, import_vue21.createCommentVNode)("v-if", true), $setup.toPartial ? ((0, import_vue21.openBlock)(), (0, import_vue21.createElementBlock)(
        import_vue21.Fragment,
        {
          key: 3
        },
        [(0, import_vue21.createVNode)($setup["CdxField"], null, {
          label: (0, import_vue21.withCtx)(() => [(0, import_vue21.createTextVNode)(
            (0, import_vue21.toDisplayString)($setup.uls("页面封禁", "頁面封鎖")),
            1
            /* TEXT */
          )]),
          description: (0, import_vue21.withCtx)(() => [(0, import_vue21.createTextVNode)(
            (0, import_vue21.toDisplayString)($setup.uls("最多10个页面，用顿号或逗号分隔。", "最多10個頁面，用頓號或逗號分隔。")),
            1
            /* TEXT */
          )]),
          default: (0, import_vue21.withCtx)(() => [(0, import_vue21.createVNode)($setup["CdxTextInput"], {
            modelValue: $setup.pagerestrictionsInput,
            "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => $setup.pagerestrictionsInput = $event),
            placeholder: $setup.uls("输入要阻止用户编辑的页面", "輸入要阻止使用者編輯的頁面"),
            disabled: $setup.submitting
          }, null, 8, ["modelValue", "placeholder", "disabled"])]),
          _: 1
          /* STABLE */
        }), (0, import_vue21.createVNode)($setup["CdxField"], null, {
          label: (0, import_vue21.withCtx)(() => [(0, import_vue21.createTextVNode)(
            (0, import_vue21.toDisplayString)($setup.uls("命名空间封禁", "命名空間封鎖")),
            1
            /* TEXT */
          )]),
          default: (0, import_vue21.withCtx)(() => [((0, import_vue21.openBlock)(true), (0, import_vue21.createElementBlock)(
            import_vue21.Fragment,
            null,
            (0, import_vue21.renderList)($props.namespaces, (ns) => {
              return (0, import_vue21.openBlock)(), (0, import_vue21.createBlock)($setup["CdxCheckbox"], {
                key: ns.value,
                "model-value": $setup.namespacerestrictions,
                "input-value": String(ns.value),
                name: "twinkleblock-namespaces",
                disabled: $setup.submitting,
                "onUpdate:modelValue": $setup.updateNamespaces
              }, {
                default: (0, import_vue21.withCtx)(() => [(0, import_vue21.createTextVNode)(
                  (0, import_vue21.toDisplayString)(ns.label),
                  1
                  /* TEXT */
                )]),
                _: 2
                /* DYNAMIC */
              }, 1032, ["model-value", "input-value", "disabled"]);
            }),
            128
            /* KEYED_FRAGMENT */
          ))]),
          _: 1
          /* STABLE */
        }), (0, import_vue21.createVNode)($setup["CdxField"], null, {
          label: (0, import_vue21.withCtx)(() => [(0, import_vue21.createTextVNode)(
            (0, import_vue21.toDisplayString)($setup.uls("操作封禁", "操作封鎖")),
            1
            /* TEXT */
          )]),
          description: (0, import_vue21.withCtx)(() => [(0, import_vue21.createTextVNode)(
            (0, import_vue21.toDisplayString)($setup.uls("指定封禁的操作类型。", "指定封鎖的操作類型。")),
            1
            /* TEXT */
          )]),
          default: (0, import_vue21.withCtx)(() => [((0, import_vue21.openBlock)(), (0, import_vue21.createElementBlock)(
            import_vue21.Fragment,
            null,
            (0, import_vue21.renderList)($setup.actionRestrictionOptions, (action) => {
              return (0, import_vue21.createVNode)($setup["CdxCheckbox"], {
                key: action.value,
                "model-value": $setup.actionrestrictions,
                "input-value": action.value,
                name: "twinkleblock-actionrestrictions",
                disabled: $setup.submitting,
                "onUpdate:modelValue": $setup.updateActionRestrictions
              }, {
                default: (0, import_vue21.withCtx)(() => [(0, import_vue21.createTextVNode)(
                  (0, import_vue21.toDisplayString)(action.label),
                  1
                  /* TEXT */
                )]),
                _: 2
                /* DYNAMIC */
              }, 1032, ["model-value", "input-value", "disabled"]);
            }),
            64
            /* STABLE_FRAGMENT */
          ))]),
          _: 1
          /* STABLE */
        })],
        64
        /* STABLE_FRAGMENT */
      )) : (0, import_vue21.createCommentVNode)("v-if", true), (0, import_vue21.createVNode)($setup["CdxField"], {
        "is-fieldset": ""
      }, {
        label: (0, import_vue21.withCtx)(() => [(0, import_vue21.createTextVNode)(
          (0, import_vue21.toDisplayString)($setup.uls("封禁选项", "封鎖選項")),
          1
          /* TEXT */
        )]),
        default: (0, import_vue21.withCtx)(() => [(0, import_vue21.createVNode)($setup["CdxCheckbox"], {
          modelValue: $setup.nocreate,
          "onUpdate:modelValue": _cache[11] || (_cache[11] = ($event) => $setup.nocreate = $event),
          disabled: $setup.submitting
        }, {
          default: (0, import_vue21.withCtx)(() => [(0, import_vue21.createTextVNode)(
            (0, import_vue21.toDisplayString)($setup.uls("禁止创建账号", "禁止建立賬號")),
            1
            /* TEXT */
          )]),
          _: 1
          /* STABLE */
        }, 8, ["modelValue", "disabled"]), (0, import_vue21.createVNode)($setup["CdxCheckbox"], {
          modelValue: $setup.noemail,
          "onUpdate:modelValue": _cache[12] || (_cache[12] = ($event) => $setup.noemail = $event),
          disabled: $setup.submitting
        }, {
          default: (0, import_vue21.withCtx)(() => [(0, import_vue21.createTextVNode)(
            (0, import_vue21.toDisplayString)($setup.uls("电子邮件停用", "電子郵件停用")),
            1
            /* TEXT */
          )]),
          _: 1
          /* STABLE */
        }, 8, ["modelValue", "disabled"]), (0, import_vue21.createVNode)($setup["CdxCheckbox"], {
          modelValue: $setup.disabletalk,
          "onUpdate:modelValue": _cache[13] || (_cache[13] = ($event) => $setup.disabletalk = $event),
          disabled: $setup.submitting
        }, {
          default: (0, import_vue21.withCtx)(() => [(0, import_vue21.createTextVNode)(
            (0, import_vue21.toDisplayString)($setup.uls("不能编辑自己的讨论页", "不能編輯自己的討論頁")),
            1
            /* TEXT */
          )]),
          _: 1
          /* STABLE */
        }, 8, ["modelValue", "disabled"]), $props.isRegistered ? ((0, import_vue21.openBlock)(), (0, import_vue21.createBlock)($setup["CdxCheckbox"], {
          key: 0,
          modelValue: $setup.autoblock,
          "onUpdate:modelValue": _cache[14] || (_cache[14] = ($event) => $setup.autoblock = $event),
          disabled: $setup.submitting
        }, {
          default: (0, import_vue21.withCtx)(() => [(0, import_vue21.createTextVNode)(
            (0, import_vue21.toDisplayString)($setup.uls("自动封禁", "自動封鎖")),
            1
            /* TEXT */
          )]),
          _: 1
          /* STABLE */
        }, 8, ["modelValue", "disabled"])) : ((0, import_vue21.openBlock)(), (0, import_vue21.createBlock)($setup["CdxCheckbox"], {
          key: 1,
          modelValue: $setup.hardblock,
          "onUpdate:modelValue": _cache[15] || (_cache[15] = ($event) => $setup.hardblock = $event),
          disabled: $setup.submitting
        }, {
          default: (0, import_vue21.withCtx)(() => [(0, import_vue21.createTextVNode)(
            (0, import_vue21.toDisplayString)($setup.uls("阻止登录用户使用该IP地址编辑", "阻止登入使用者使用該IP位址編輯")),
            1
            /* TEXT */
          )]),
          _: 1
          /* STABLE */
        }, 8, ["modelValue", "disabled"])), (0, import_vue21.createVNode)($setup["CdxCheckbox"], {
          modelValue: $setup.watchuser,
          "onUpdate:modelValue": _cache[16] || (_cache[16] = ($event) => $setup.watchuser = $event),
          disabled: $setup.submitting
        }, {
          default: (0, import_vue21.withCtx)(() => [(0, import_vue21.createTextVNode)(
            (0, import_vue21.toDisplayString)($setup.uls("监视该用户的用户页和讨论页", "監視該使用者的使用者頁面和討論頁")),
            1
            /* TEXT */
          )]),
          _: 1
          /* STABLE */
        }, 8, ["modelValue", "disabled"]), (0, import_vue21.createVNode)($setup["CdxCheckbox"], {
          modelValue: $setup.closevip,
          "onUpdate:modelValue": _cache[17] || (_cache[17] = ($event) => $setup.closevip = $event),
          disabled: $setup.submitting
        }, {
          default: (0, import_vue21.withCtx)(() => [(0, import_vue21.createTextVNode)(
            (0, import_vue21.toDisplayString)($setup.uls("标记当前的破坏中的请求", "標記當前的破壞中的請求")),
            1
            /* TEXT */
          )]),
          _: 1
          /* STABLE */
        }, 8, ["modelValue", "disabled"])]),
        _: 1
        /* STABLE */
      }), (0, import_vue21.createVNode)($setup["CdxField"], null, {
        label: (0, import_vue21.withCtx)(() => [(0, import_vue21.createTextVNode)(
          (0, import_vue21.toDisplayString)($setup.uls("理由（用于封禁日志）：", "理由（用於封鎖日誌）：")),
          1
          /* TEXT */
        )]),
        default: (0, import_vue21.withCtx)(() => [(0, import_vue21.createVNode)($setup["CdxTextArea"], {
          modelValue: $setup.reason,
          "onUpdate:modelValue": _cache[18] || (_cache[18] = ($event) => $setup.reason = $event),
          disabled: $setup.submitting
        }, null, 8, ["modelValue", "disabled"])]),
        _: 1
        /* STABLE */
      }), (0, import_vue21.createVNode)($setup["CdxField"], {
        "is-fieldset": ""
      }, {
        label: (0, import_vue21.withCtx)(() => [(0, import_vue21.createTextVNode)(
          (0, import_vue21.toDisplayString)($setup.uls("参见：", "參見：")),
          1
          /* TEXT */
        )]),
        default: (0, import_vue21.withCtx)(() => [((0, import_vue21.openBlock)(), (0, import_vue21.createElementBlock)(
          import_vue21.Fragment,
          null,
          (0, import_vue21.renderList)($setup.seeAlsoOptions, (option) => {
            return (0, import_vue21.createVNode)($setup["CdxCheckbox"], {
              key: option.value,
              "model-value": $setup.seeAlsoValues,
              "input-value": option.value,
              name: "twinkleblock-seealso",
              disabled: $setup.submitting,
              "onUpdate:modelValue": ($event) => $setup.toggleSeeAlso(option.value, $event)
            }, {
              default: (0, import_vue21.withCtx)(() => [(0, import_vue21.createTextVNode)(
                (0, import_vue21.toDisplayString)(option.label),
                1
                /* TEXT */
              )]),
              _: 2
              /* DYNAMIC */
            }, 1032, ["model-value", "input-value", "disabled", "onUpdate:modelValue"]);
          }),
          64
          /* STABLE_FRAGMENT */
        ))]),
        _: 1
        /* STABLE */
      })],
      64
      /* STABLE_FRAGMENT */
    )) : (0, import_vue21.createCommentVNode)("v-if", true), $setup.toTemplate ? ((0, import_vue21.openBlock)(), (0, import_vue21.createElementBlock)(
      import_vue21.Fragment,
      {
        key: 2
      },
      [(0, import_vue21.createVNode)($setup["CdxField"], null, {
        label: (0, import_vue21.withCtx)(() => [(0, import_vue21.createTextVNode)(
          (0, import_vue21.toDisplayString)($setup.uls("选择讨论页模板：", "選擇討論頁模板：")),
          1
          /* TEXT */
        )]),
        default: (0, import_vue21.withCtx)(() => [(0, import_vue21.createVNode)($setup["CdxSelect"], {
          selected: $setup.template,
          "onUpdate:selected": _cache[19] || (_cache[19] = ($event) => $setup.template = $event),
          "menu-items": $setup.templateItems,
          disabled: $setup.submitting
        }, null, 8, ["selected", "menu-items", "disabled"])]),
        _: 1
        /* STABLE */
      }), $setup.articleVisible ? ((0, import_vue21.openBlock)(), (0, import_vue21.createBlock)($setup["CdxField"], {
        key: 0
      }, {
        label: (0, import_vue21.withCtx)(() => [(0, import_vue21.createTextVNode)(
          (0, import_vue21.toDisplayString)($setup.uls("链接页面", "連結頁面")),
          1
          /* TEXT */
        )]),
        default: (0, import_vue21.withCtx)(() => [(0, import_vue21.createVNode)($setup["CdxTextInput"], {
          modelValue: $setup.article,
          "onUpdate:modelValue": _cache[20] || (_cache[20] = ($event) => $setup.article = $event),
          disabled: $setup.submitting
        }, null, 8, ["modelValue", "disabled"])]),
        _: 1
        /* STABLE */
      })) : (0, import_vue21.createCommentVNode)("v-if", true), $setup.areaVisible ? ((0, import_vue21.openBlock)(), (0, import_vue21.createBlock)($setup["CdxField"], {
        key: 1
      }, {
        label: (0, import_vue21.withCtx)(() => [(0, import_vue21.createTextVNode)(
          (0, import_vue21.toDisplayString)($setup.uls("封禁范围", "封鎖範圍")),
          1
          /* TEXT */
        )]),
        default: (0, import_vue21.withCtx)(() => [(0, import_vue21.createVNode)($setup["CdxTextInput"], {
          modelValue: $setup.area,
          "onUpdate:modelValue": _cache[21] || (_cache[21] = ($event) => $setup.area = $event),
          disabled: $setup.submitting
        }, null, 8, ["modelValue", "disabled"])]),
        _: 1
        /* STABLE */
      })) : (0, import_vue21.createCommentVNode)("v-if", true), !$setup.toBlock && !$setup.templateExpiryHidden ? ((0, import_vue21.openBlock)(), (0, import_vue21.createBlock)($setup["CdxField"], {
        key: 2
      }, {
        label: (0, import_vue21.withCtx)(() => [..._cache[35] || (_cache[35] = [(0, import_vue21.createTextVNode)(
          "封禁期限：",
          -1
          /* CACHED */
        )])]),
        default: (0, import_vue21.withCtx)(() => [(0, import_vue21.createVNode)($setup["CdxTextInput"], {
          modelValue: $setup.templateExpiry,
          "onUpdate:modelValue": _cache[22] || (_cache[22] = ($event) => $setup.templateExpiry = $event),
          disabled: $setup.submitting
        }, null, 8, ["modelValue", "disabled"])]),
        _: 1
        /* STABLE */
      })) : (0, import_vue21.createCommentVNode)("v-if", true), $setup.blockReasonVisible ? ((0, import_vue21.openBlock)(), (0, import_vue21.createBlock)($setup["CdxField"], {
        key: 3
      }, {
        label: (0, import_vue21.withCtx)(() => [(0, import_vue21.createTextVNode)(
          (0, import_vue21.toDisplayString)($setup.uls("“由于……您已被封禁”", "「由於……您已被封鎖」")),
          1
          /* TEXT */
        )]),
        default: (0, import_vue21.withCtx)(() => [(0, import_vue21.createVNode)($setup["CdxTextInput"], {
          modelValue: $setup.blockReason,
          "onUpdate:modelValue": _cache[23] || (_cache[23] = ($event) => $setup.blockReason = $event),
          disabled: $setup.submitting
        }, null, 8, ["modelValue", "disabled"])]),
        _: 1
        /* STABLE */
      })) : (0, import_vue21.createCommentVNode)("v-if", true), $setup.toBlock && $setup.blankDurationVisible ? ((0, import_vue21.openBlock)(), (0, import_vue21.createBlock)($setup["CdxCheckbox"], {
        key: 4,
        modelValue: $setup.blankDuration,
        "onUpdate:modelValue": _cache[24] || (_cache[24] = ($event) => $setup.blankDuration = $event),
        disabled: $setup.submitting
      }, {
        default: (0, import_vue21.withCtx)(() => [(0, import_vue21.createTextVNode)(
          (0, import_vue21.toDisplayString)($setup.uls("不在模板中包含封禁期限", "不在模板中包含封鎖期限")),
          1
          /* TEXT */
        )]),
        _: 1
        /* STABLE */
      }, 8, ["modelValue", "disabled"])) : (0, import_vue21.createCommentVNode)("v-if", true), !$setup.toBlock ? ((0, import_vue21.openBlock)(), (0, import_vue21.createElementBlock)(
        import_vue21.Fragment,
        {
          key: 5
        },
        [$setup.notalkVisible ? ((0, import_vue21.openBlock)(), (0, import_vue21.createBlock)($setup["CdxCheckbox"], {
          key: 0,
          modelValue: $setup.notalk,
          "onUpdate:modelValue": _cache[25] || (_cache[25] = ($event) => $setup.notalk = $event),
          disabled: $setup.submitting
        }, {
          default: (0, import_vue21.withCtx)(() => [(0, import_vue21.createTextVNode)(
            (0, import_vue21.toDisplayString)($setup.uls("不能编辑自己的讨论页", "不能編輯自己的討論頁")),
            1
            /* TEXT */
          )]),
          _: 1
          /* STABLE */
        }, 8, ["modelValue", "disabled"])) : (0, import_vue21.createCommentVNode)("v-if", true), $setup.toPartial ? ((0, import_vue21.openBlock)(), (0, import_vue21.createBlock)($setup["CdxCheckbox"], {
          key: 1,
          modelValue: $setup.noemailTemplate,
          "onUpdate:modelValue": _cache[26] || (_cache[26] = ($event) => $setup.noemailTemplate = $event),
          disabled: $setup.submitting
        }, {
          default: (0, import_vue21.withCtx)(() => [(0, import_vue21.createTextVNode)(
            (0, import_vue21.toDisplayString)($setup.uls("不能发送电子邮件", "不能傳送電子郵件")),
            1
            /* TEXT */
          )]),
          _: 1
          /* STABLE */
        }, 8, ["modelValue", "disabled"])) : (0, import_vue21.createCommentVNode)("v-if", true), $setup.toPartial ? ((0, import_vue21.openBlock)(), (0, import_vue21.createBlock)($setup["CdxCheckbox"], {
          key: 2,
          modelValue: $setup.nocreateTemplate,
          "onUpdate:modelValue": _cache[27] || (_cache[27] = ($event) => $setup.nocreateTemplate = $event),
          disabled: $setup.submitting
        }, {
          default: (0, import_vue21.withCtx)(() => [(0, import_vue21.createTextVNode)(
            (0, import_vue21.toDisplayString)($setup.uls("不能创建账号", "不能建立賬號")),
            1
            /* TEXT */
          )]),
          _: 1
          /* STABLE */
        }, 8, ["modelValue", "disabled"])) : (0, import_vue21.createCommentVNode)("v-if", true)],
        64
        /* STABLE_FRAGMENT */
      )) : (0, import_vue21.createCommentVNode)("v-if", true), (0, import_vue21.createVNode)($setup["CdxButton"], {
        disabled: $setup.submitting,
        weight: "quiet",
        onClick: $setup.onPreview
      }, {
        default: (0, import_vue21.withCtx)(() => [(0, import_vue21.createTextVNode)(
          (0, import_vue21.toDisplayString)($setup.uls("预览", "預覽")),
          1
          /* TEXT */
        )]),
        _: 1
        /* STABLE */
      }, 8, ["disabled"]), (0, import_vue21.createElementVNode)(
        "div",
        _hoisted_62,
        null,
        512
        /* NEED_PATCH */
      )],
      64
      /* STABLE_FRAGMENT */
    )) : (0, import_vue21.createCommentVNode)("v-if", true), $setup.toTag ? ((0, import_vue21.openBlock)(), (0, import_vue21.createBlock)($setup["CdxField"], {
      key: 3,
      "is-fieldset": ""
    }, {
      label: (0, import_vue21.withCtx)(() => [(0, import_vue21.createTextVNode)(
        (0, import_vue21.toDisplayString)($setup.uls("选择用户页模板：", "選擇使用者頁面模板：")),
        1
        /* TEXT */
      )]),
      default: (0, import_vue21.withCtx)(() => [(0, import_vue21.createVNode)($setup["CdxCheckbox"], {
        "model-value": $setup.tag,
        "input-value": "Blocked user",
        name: "twinkleblock-tag",
        disabled: $setup.submitting,
        "onUpdate:modelValue": $setup.updateTag
      }, {
        default: (0, import_vue21.withCtx)(() => [(0, import_vue21.createTextVNode)(
          (0, import_vue21.toDisplayString)($setup.tagLabels["Blocked user"]),
          1
          /* TEXT */
        )]),
        _: 1
        /* STABLE */
      }, 8, ["model-value", "disabled"]), (0, import_vue21.createVNode)($setup["CdxCheckbox"], {
        "model-value": $setup.tag,
        "input-value": "Sockpuppet",
        name: "twinkleblock-tag",
        disabled: $setup.submitting,
        "onUpdate:modelValue": $setup.updateTag
      }, {
        default: (0, import_vue21.withCtx)(() => [(0, import_vue21.createTextVNode)(
          (0, import_vue21.toDisplayString)($setup.tagLabels.Sockpuppet),
          1
          /* TEXT */
        )]),
        _: 1
        /* STABLE */
      }, 8, ["model-value", "disabled"]), $setup.tag.includes("Sockpuppet") ? ((0, import_vue21.openBlock)(), (0, import_vue21.createElementBlock)(
        import_vue21.Fragment,
        {
          key: 0
        },
        [(0, import_vue21.createVNode)($setup["CdxField"], null, {
          label: (0, import_vue21.withCtx)(() => [(0, import_vue21.createTextVNode)(
            (0, import_vue21.toDisplayString)($setup.uls("主账号用户名：", "主賬號使用者名稱：")),
            1
            /* TEXT */
          )]),
          default: (0, import_vue21.withCtx)(() => [(0, import_vue21.createVNode)($setup["CdxTextInput"], {
            modelValue: $setup.sppUsername,
            "onUpdate:modelValue": _cache[28] || (_cache[28] = ($event) => $setup.sppUsername = $event),
            disabled: $setup.submitting
          }, null, 8, ["modelValue", "disabled"])]),
          _: 1
          /* STABLE */
        }), (0, import_vue21.createVNode)($setup["CdxField"], null, {
          label: (0, import_vue21.withCtx)(() => [(0, import_vue21.createTextVNode)(
            (0, import_vue21.toDisplayString)($setup.uls("状态：", "狀態：")),
            1
            /* TEXT */
          )]),
          default: (0, import_vue21.withCtx)(() => [(0, import_vue21.createVNode)($setup["CdxSelect"], {
            selected: $setup.sppType,
            "onUpdate:selected": _cache[29] || (_cache[29] = ($event) => $setup.sppType = $event),
            "menu-items": [{
              value: "blocked",
              label: `blocked - ${$setup.uls("仅依行为证据认定", "僅依行為證據認定")}`
            }, {
              value: "proven",
              label: `proven - ${$setup.uls("经傀儡调查确认", "經傀儡調查確認")}`
            }, {
              value: "confirmed",
              label: `confirmed - ${$setup.uls("经查核确认", "經查核確認")}`
            }],
            disabled: $setup.submitting
          }, null, 8, ["selected", "menu-items", "disabled"])]),
          _: 1
          /* STABLE */
        }), (0, import_vue21.createVNode)($setup["CdxField"], null, {
          label: (0, import_vue21.withCtx)(() => [(0, import_vue21.createTextVNode)(
            (0, import_vue21.toDisplayString)($setup.uls("根据……确定：", "根據……確定：")),
            1
            /* TEXT */
          )]),
          default: (0, import_vue21.withCtx)(() => [(0, import_vue21.createVNode)($setup["CdxTextInput"], {
            modelValue: $setup.sppEvidence,
            "onUpdate:modelValue": _cache[30] || (_cache[30] = ($event) => $setup.sppEvidence = $event),
            disabled: $setup.submitting
          }, null, 8, ["modelValue", "disabled"])]),
          _: 1
          /* STABLE */
        })],
        64
        /* STABLE_FRAGMENT */
      )) : (0, import_vue21.createCommentVNode)("v-if", true), (0, import_vue21.createVNode)($setup["CdxCheckbox"], {
        "model-value": $setup.tag,
        "input-value": "Sockpuppeteer",
        name: "twinkleblock-tag",
        disabled: $setup.submitting,
        "onUpdate:modelValue": $setup.updateTag
      }, {
        default: (0, import_vue21.withCtx)(() => [(0, import_vue21.createTextVNode)(
          (0, import_vue21.toDisplayString)($setup.tagLabels.Sockpuppeteer),
          1
          /* TEXT */
        )]),
        _: 1
        /* STABLE */
      }, 8, ["model-value", "disabled"]), $setup.tag.includes("Sockpuppeteer") ? ((0, import_vue21.openBlock)(), (0, import_vue21.createElementBlock)(
        import_vue21.Fragment,
        {
          key: 1
        },
        [(0, import_vue21.createVNode)($setup["CdxCheckbox"], {
          modelValue: $setup.spmChecked,
          "onUpdate:modelValue": _cache[31] || (_cache[31] = ($event) => $setup.spmChecked = $event),
          disabled: $setup.submitting
        }, {
          default: (0, import_vue21.withCtx)(() => [(0, import_vue21.createTextVNode)(
            (0, import_vue21.toDisplayString)($setup.uls("经用户查核确认", "經使用者查核確認")),
            1
            /* TEXT */
          )]),
          _: 1
          /* STABLE */
        }, 8, ["modelValue", "disabled"]), (0, import_vue21.createVNode)($setup["CdxField"], null, {
          label: (0, import_vue21.withCtx)(() => [(0, import_vue21.createTextVNode)(
            (0, import_vue21.toDisplayString)($setup.uls("额外理由：", "額外理由：")),
            1
            /* TEXT */
          )]),
          default: (0, import_vue21.withCtx)(() => [(0, import_vue21.createVNode)($setup["CdxTextInput"], {
            modelValue: $setup.spmEvidence,
            "onUpdate:modelValue": _cache[32] || (_cache[32] = ($event) => $setup.spmEvidence = $event),
            disabled: $setup.submitting
          }, null, 8, ["modelValue", "disabled"])]),
          _: 1
          /* STABLE */
        })],
        64
        /* STABLE_FRAGMENT */
      )) : (0, import_vue21.createCommentVNode)("v-if", true)]),
      _: 1
      /* STABLE */
    })) : (0, import_vue21.createCommentVNode)("v-if", true), $setup.toUnblock ? ((0, import_vue21.openBlock)(), (0, import_vue21.createBlock)($setup["CdxField"], {
      key: 4
    }, {
      label: (0, import_vue21.withCtx)(() => [(0, import_vue21.createTextVNode)(
        (0, import_vue21.toDisplayString)($setup.uls("理由（用于封禁日志）：", "理由（用於封鎖日誌）：")),
        1
        /* TEXT */
      )]),
      default: (0, import_vue21.withCtx)(() => [(0, import_vue21.createVNode)($setup["CdxTextArea"], {
        modelValue: $setup.unblockReason,
        "onUpdate:modelValue": _cache[33] || (_cache[33] = ($event) => $setup.unblockReason = $event),
        disabled: $setup.submitting
      }, null, 8, ["modelValue", "disabled"])]),
      _: 1
      /* STABLE */
    })) : (0, import_vue21.createCommentVNode)("v-if", true), (0, import_vue21.createVNode)(
      $setup["TwStatus"],
      {
        ref: "statusRef"
      },
      null,
      512
      /* NEED_PATCH */
    )]),
    _: 1
    /* STABLE */
  }, 8, ["open", "title", "footer-links", "primary-action"]);
}
//! src/Twinkle/modules/ui/TwBlockDialog.vue
TwBlockDialog_default.render = render7;
TwBlockDialog_default.__file = "src\\Twinkle\\modules\\ui\\TwBlockDialog.vue";
TwBlockDialog_default.__scopeId = "data-v-8d257111";
var TwBlockDialog_default2 = TwBlockDialog_default;
var import_vue22 = require("vue");
var import_codex8 = require("@wikimedia/codex");
var import_vue23 = require("vue");
var TwCloseDialog_default = /* @__PURE__ */ (0, import_vue22.defineComponent)({
  __name: "TwCloseDialog",
  props: {
    title: {
      type: String,
      required: true
    },
    section: {
      type: String,
      required: true
    },
    initialNoop: {
      type: Boolean,
      required: true
    },
    footerLinks: {
      type: Array,
      required: true
    }
  },
  emits: ["close"],
  setup(__props, {
    expose: __expose,
    emit: __emit
  }) {
    var _groups$flatMap$find, _groups$flatMap$find2;
    __expose();
    const props = __props;
    const emit = __emit;
    const codes = [{
      key: uls("请求无效", "請求無效"),
      value: {
        ir: {
          label: uls("请求无效", "請求無效"),
          action: "keep"
        },
        rep: {
          label: uls("重复提出，无效", "重複提出，無效"),
          action: "keep"
        },
        ne: {
          label: uls("目标页面或文件不存在，无效", "目標頁面或檔案不存在，無效"),
          action: "keep"
        },
        nq: {
          label: uls("提删者未获取提删资格，无效", "提刪者未取得提刪資格，無效"),
          action: "keep"
        }
      }
    }, {
      key: "保留",
      value: {
        k: {
          label: "保留",
          action: "keep",
          adminonly: true
        },
        sk: {
          label: "快速保留",
          action: "keep"
        },
        tk: {
          label: uls("暂时保留，改挂维护模板（关注度等）", "暫時保留，改掛維護模板（關注度等）"),
          value: uls("暂时保留", "暫時保留"),
          action: "keep"
        },
        rr: {
          label: uls("请求理由消失", "請求理由消失"),
          action: "keep",
          selected: Twinkle.getPref("XfdClose") === "nonadminonly"
        },
        dan: {
          label: uls("删后重建", "刪後重建"),
          action: "keep",
          adminonly: true
        }
      }
    }, {
      key: uls("删除", "刪除"),
      value: {
        d: {
          label: uls("删除", "刪除"),
          action: "del",
          adminonly: true,
          selected: Twinkle.getPref("XfdClose") === "all"
        },
        ic: {
          label: uls("图像因侵权被删", "圖像因侵權被刪"),
          action: "del",
          adminonly: true
        }
      }
    }, {
      key: uls("快速删除", "快速刪除"),
      value: {
        sd: {
          label: uls("快速删除", "快速刪除"),
          action: "del"
        },
        lssd: {
          label: uls("无来源或著作权信息，快速删除", "無來源或版權資訊，快速刪除"),
          action: "del"
        },
        svg: {
          label: uls("已改用SVG图形，快速删除", "已改用SVG圖形，快速刪除"),
          action: "del"
        },
        drep: {
          label: uls("多次被删除，条目锁定", "多次被刪除，條目鎖定"),
          action: "del",
          adminonly: true
        }
      }
    }, {
      key: uls("其他处理方法", "其他處理方法"),
      value: {
        c: {
          label: uls("转交侵权", "轉交侵權"),
          action: "noop"
        },
        r: {
          label: "重定向",
          action: "keep",
          adminonly: true
        },
        cr: {
          label: uls("分类重定向", "分類重定向"),
          action: "keep",
          adminonly: true
        },
        m: {
          label: uls("移动", "移動"),
          action: "keep",
          adminonly: true
        },
        merge: {
          label: uls("并入", "併入"),
          action: "keep",
          adminonly: true
        },
        mergeapproved: {
          label: uls("允许并入", "允許併入"),
          action: "keep",
          adminonly: true
        },
        nc: {
          label: uls("无共识暂时保留", "無共識暫時保留"),
          value: uls("无共识", "無共識"),
          action: "keep"
        }
      }
    }];
    const groups = codes.map((group) => ({
      label: group.key,
      items: Object.entries(group.value).map(([key, itemProperties]) => ({
        value: key,
        label: `${key}：${itemProperties.label}`,
        action: itemProperties.action,
        disabled: Twinkle.getPref("XfdClose") !== "all" && itemProperties.adminonly === true || itemProperties.disabled === true,
        selected: itemProperties.selected === true
      }))
    }));
    const open = (0, import_vue23.ref)(true);
    const defaultCode = ((_groups$flatMap$find = groups.flatMap((group) => group.items).find((item) => {
      return item.selected && !item.disabled;
    })) === null || _groups$flatMap$find === void 0 ? void 0 : _groups$flatMap$find.value) ?? ((_groups$flatMap$find2 = groups.flatMap((group) => group.items).find((item) => {
      return !item.disabled;
    })) === null || _groups$flatMap$find2 === void 0 ? void 0 : _groups$flatMap$find2.value);
    const selectedCode = (0, import_vue23.ref)(defaultCode ?? null);
    const sdreason = (0, import_vue23.ref)("");
    const remark = (0, import_vue23.ref)("");
    const noop = (0, import_vue23.ref)(props.initialNoop);
    const talkpage = (0, import_vue23.ref)(true);
    const redirects = (0, import_vue23.ref)(true);
    const submitting = (0, import_vue23.ref)(false);
    const statusRef = (0, import_vue23.ref)(null);
    const talkpageTitle = new mw.Title(props.title);
    const talkpageNamespace = talkpageTitle.getNamespaceId();
    const showTalkpage = talkpageNamespace % 2 === 0 && talkpageNamespace !== 2;
    const options = (0, import_vue23.computed)(() => groups.flatMap((group) => group.items));
    const currentOption = (0, import_vue23.computed)(() => options.value.find((item) => item.value === selectedCode.value) ?? null);
    const currentAction = (0, import_vue23.computed)(() => {
      var _currentOption$value;
      return (_currentOption$value = currentOption.value) === null || _currentOption$value === void 0 ? void 0 : _currentOption$value.action;
    });
    const noopDisabled = (0, import_vue23.computed)(() => props.initialNoop || currentAction.value === "noop");
    const talkpageDisabled = (0, import_vue23.computed)(() => noop.value || props.initialNoop || currentAction.value === "noop" || currentAction.value === "keep");
    const redirectsDisabled = (0, import_vue23.computed)(() => noop.value || props.initialNoop || currentAction.value === "noop" || currentAction.value === "keep");
    const showSdreason = (0, import_vue23.computed)(() => selectedCode.value === "sd" && currentAction.value !== "noop" && !noop.value);
    const menuItems = (0, import_vue23.computed)(() => {
      const items = [];
      for (const [groupIndex, group] of groups.entries()) {
        items.push({
          value: `__group_${groupIndex}`,
          label: group.label,
          disabled: true
        });
        for (const item of group.items) {
          const menuItem = {
            value: item.value,
            label: item.label
          };
          if (item.disabled) {
            menuItem.disabled = item.disabled;
          }
          items.push(menuItem);
        }
      }
      return items;
    });
    const applyOperationState = () => {
      if (noop.value || currentAction.value === "keep") {
        talkpage.value = false;
        redirects.value = false;
      } else {
        talkpage.value = true;
        redirects.value = true;
      }
    };
    (0, import_vue23.watch)(selectedCode, () => {
      if (props.initialNoop || currentAction.value === "noop") {
        noop.value = true;
      } else {
        noop.value = false;
      }
      applyOperationState();
    }, {
      immediate: true
    });
    (0, import_vue23.watch)(noop, applyOperationState);
    const primaryAction = (0, import_vue23.computed)(() => ({
      label: uls("提交", "提交"),
      actionType: "progressive",
      disabled: submitting.value || currentOption.value === null
    }));
    const submit = () => {
      var _statusRef$value10;
      if (submitting.value || currentOption.value === null) {
        return;
      }
      submitting.value = true;
      evaluate({
        title: props.title,
        code: typeof selectedCode.value === "string" ? selectedCode.value : null,
        remark: remark.value,
        sdreason: sdreason.value,
        section: Number.parseInt(props.section, 10),
        parentSection: void 0,
        messageData: currentOption.value,
        talkpage: showTalkpage && talkpage.value,
        redirects: redirects.value,
        noop: noop.value
      }, ((_statusRef$value10 = statusRef.value) === null || _statusRef$value10 === void 0 ? void 0 : _statusRef$value10.getStatusRoot()) ?? null);
    };
    (0, import_vue23.watch)(open, (value) => {
      if (!value) {
        emit("close");
      }
    });
    const evaluate = (params, statusContainer) => {
      const {
        noop: noop2,
        messageData,
        code
      } = params;
      Morebits.status.init(statusContainer);
      Morebits.wiki.actionCompleted.notice = "操作完成";
      if (noop2 || messageData.action === "noop") {
        callbacks.talkend(params);
      } else {
        switch (messageData.action) {
          case "del":
            callbacks.del(params);
            break;
          case "keep": {
            const qiuwen_page = new Morebits.wiki.page(params.title, "移除存废讨论模板");
            qiuwen_page.setCallbackParameters(params);
            qiuwen_page.load(callbacks.keep);
            break;
          }
          default:
            void mw.notify(`关闭存废讨论：未定义 ${code}`, {
              type: "warn",
              tag: "twinkleclose"
            });
        }
      }
    };
    const callbacks = {
      del: (params) => {
        Morebits.wiki.addCheckpoint();
        const page = new Morebits.wiki.page(params.title, "删除页面");
        if (params.code === "sd") {
          var _Twinkle$speedy;
          (_Twinkle$speedy = Twinkle.speedy) === null || _Twinkle$speedy === void 0 || _Twinkle$speedy.callbacks.parseWikitext(params.title, `{{delete|${params.sdreason}}}`, (reason) => {
            const prompted = prompt("输入删除理由，或点击确定以接受自动生成的：", reason);
            if (prompted === null) {
              page.getStatusElement().warn("没有执行删除");
              callbacks.talkend(params);
            } else {
              page.setEditSummary(prompted);
              page.setChangeTags(Twinkle.changeTags);
              page.deletePage(() => {
                page.getStatusElement().info("完成");
                callbacks.talkend(params);
              });
            }
          });
        } else {
          page.setEditSummary(`存废讨论通过：[[${mw.config.get("wgPageName")}#${params.title}]]`);
          page.setChangeTags(Twinkle.changeTags);
          page.deletePage(() => {
            page.getStatusElement().info("完成");
            callbacks.talkend(params);
          });
        }
        if (params.redirects) {
          const query = {
            action: "query",
            titles: params.title,
            prop: "redirects",
            rdlimit: "max"
            // 500 is max for normal users, 5000 for bots and sysops
          };
          const api2 = new Morebits.wiki.api("正在获取重定向", query, callbacks.deleteRedirectsMain);
          api2.params = params;
          api2.post();
        }
        if (params.talkpage) {
          const pageTitle = mw.Title.newFromText(params.title);
          if (pageTitle && pageTitle.getNamespaceId() % 2 === 0 && pageTitle.getNamespaceId() !== 2) {
            const talkTitle = new mw.Title(pageTitle.getMainText(), pageTitle.getNamespaceId() + 1);
            const query = {
              action: "query",
              titles: talkTitle.toText()
            };
            const api2 = new Morebits.wiki.api("正在检查讨论页面是否存在", query, callbacks.deleteTalk);
            api2.params = {
              ...params,
              talkPage: talkTitle.toText()
            };
            api2.post();
          }
        }
        Morebits.wiki.removeCheckpoint();
      },
      deleteRedirectsMain: (apiobj) => {
        const pages = $(apiobj.responseXML).find("rd").map((_index, element) => {
          return $(element).attr("title");
        }).get();
        if (pages.length === 0) {
          return;
        }
        const redirectDeleter = new Morebits.batchOperation(uls("正在删除到 ", "正在刪除到 ") + apiobj.params.title + uls(" 的重定向", " 的重新導向"));
        redirectDeleter.setOption("chunkSize", Twinkle.getPref("batchdeleteChunks"));
        redirectDeleter.setPageList(pages);
        redirectDeleter.run((pageName) => {
          const qiuwen_page = new Morebits.wiki.page(pageName, uls("正在删除 ", "正在刪除 ") + pageName);
          qiuwen_page.setEditSummary(`[[QW:CSD#G5|G5]]：${uls("指向已删页面“", "指向已刪頁面「")}${apiobj.params.title}${uls("”的重定向", "」的重新導向")}`);
          qiuwen_page.setChangeTags(Twinkle.changeTags);
          qiuwen_page.deletePage(redirectDeleter.workerSuccess, redirectDeleter.workerFailure);
        });
      },
      deleteTalk: (apiobj) => {
        const exists = $(apiobj.responseXML).find("page:not([missing])").length > 0;
        if (!exists) {
          return;
        }
        const page = new Morebits.wiki.page(apiobj.params.talkPage, uls("正在删除页面 ", "正在刪除頁面 ") + apiobj.params.title + uls(" 的讨论页", " 的討論頁"));
        page.setEditSummary(`[[QW:CSD#G5|G5]]：${uls("已删页面“", "已刪頁面「")}${apiobj.params.title}${uls("”的[[Help:讨论页|讨论页]]", "」的[[Help:討論頁|討論頁]]")}`);
        page.setChangeTags(Twinkle.changeTags);
        page.deletePage();
      },
      keep: (pageobj) => {
        const statelem = pageobj.getStatusElement();
        if (!pageobj.exists()) {
          statelem.error("页面不存在，可能已被删除");
          return;
        }
        const text = pageobj.getPageText() ?? "";
        const params = pageobj.getCallbackParameters();
        const pagetitle = mw.Title.newFromText(params.title);
        if (pagetitle && pagetitle.getNamespaceId() % 2 === 0) {
          const talkpagetitle = new mw.Title(pagetitle.getMainText(), pagetitle.getNamespaceId() + 1);
          const talkpage2 = new Morebits.wiki.page(talkpagetitle.toString(), uls("标记讨论页", "標記討論頁"));
          const reason = params.messageData.value || params.messageData.label;
          const vfdkept = `{{Old vfd multi|${mw.config.get("wgPageName").split("/").slice(2).join("/")}|${reason}}}
`;
          talkpage2.setPrependText(vfdkept);
          talkpage2.setEditSummary(`[[${mw.config.get("wgPageName")}#${params.title}]]：${reason}`);
          talkpage2.setChangeTags(Twinkle.changeTags);
          talkpage2.setCreateOption("recreate");
          talkpage2.prepend();
        }
        let newtext = text.replace(/<noinclude>\s*\{\{([rsaiftcmv]fd)(\|(?:\{\{[^{}]*\}\}|[^{}])*)?\}\}\s*<\/noinclude>\s*/gi, "");
        newtext = newtext.replace(/\{\{([rsaiftcmv]fd)(\|(?:\{\{[^{}]*\}\}|[^{}])*)?\}\}\s*/gi, "");
        if (params.code !== "tk") {
          newtext = newtext.replace(/{{(notability|fame|mair|知名度|重要性|显著性|顯著性|知名度不足|人物重要性|重要性不足|notable|关注度|关注度不足|關注度|關注度不足|重要|重要度)(\|(?:{{[^{}]*}}|[^{}])*)?}}\n*/gi, "");
          newtext = newtext.replace(/{{(substub|小小作品|cod|小小條目|小小条目)(\|(?:{{[^{}]*}}|[^{}])*)?}}\n*/gi, "");
        }
        if (params.code === "mergeapproved") {
          const tag = "{{".concat("subst:").concat(`Merge approved/auto|discuss=${mw.config.get("wgPageName")}#${params.title}}}
`);
          const qiuwen_page = new Morebits.wikitext.page(newtext);
          newtext = qiuwen_page.insertAfterTemplates(tag, Twinkle.hatnoteRegex).getText();
        }
        if (newtext === text) {
          statelem.warn("未找到存废讨论模板，可能已被移除");
          callbacks.talkend(params);
          return;
        }
        const editsummary = `存废讨论关闭：[[${mw.config.get("wgPageName")}#${params.title}]]`;
        pageobj.setPageText(newtext);
        pageobj.setEditSummary(editsummary);
        pageobj.setChangeTags(Twinkle.changeTags);
        pageobj.setCreateOption("nocreate");
        pageobj.save(callbacks.keepComplete);
      },
      keepComplete: (pageobj) => {
        const params = pageobj.getCallbackParameters();
        callbacks.talkend(params);
      },
      talkend: (params) => {
        const qiuwen_page = new Morebits.wiki.page(mw.config.get("wgPageName"), "关闭讨论");
        qiuwen_page.setCallbackParameters(params);
        qiuwen_page.setPageSection(params.section);
        qiuwen_page.load(callbacks.saveTalk);
      },
      saveTalk: (pageobj) => {
        const statelem = pageobj.getStatusElement();
        let text = pageobj.getPageText() ?? "";
        const params = pageobj.getCallbackParameters();
        if (text.includes("{{delh")) {
          statelem.error("讨论已被关闭");
          return;
        }
        const sbegin = text.includes("<section begin=backlog />");
        const send = text.includes("<section end=backlog />");
        text = text.replace("\n<section begin=backlog />", "");
        text = text.replace("\n<section end=backlog />", "");
        const bar = text.split("\n----\n");
        const split = (bar[0] ?? "").split("\n");
        text = `${split[0] ?? ""}
{{delh|${params.code}}}
`;
        text += split.slice(1).join("\n");
        const reason = params.messageData.value || params.messageData.label;
        text += `
<hr>
: ${reason}`;
        if (params.remark) {
          text += `：${Morebits.string.appendPunctuation(params.remark)}`;
        } else {
          text += "。";
        }
        if (!Morebits.userIsSysop) {
          text += "{{".concat("subst:").concat("NAC}}");
        }
        text += "——~~".concat("~~", "\n{{delf}}");
        const restBar = bar.slice(1);
        if (restBar.length > 0) {
          text += `
----
${restBar.join("\n----\n")}`;
        }
        if (send) {
          text += "\n<section end=backlog />";
        }
        if (sbegin) {
          text += "\n<section begin=backlog />";
        }
        pageobj.setPageText(text);
        pageobj.setEditSummary(`/* ${params.title} */ ${reason}`);
        pageobj.setChangeTags(Twinkle.changeTags);
        pageobj.setCreateOption("nocreate");
        pageobj.save(callbacks.disableLink);
      },
      disableLink: (pageobj) => {
        const params = pageobj.getCallbackParameters();
        $(`strong a[href=#${params.section}] span`).css("color", "#808080");
      }
    };
    const __returned__ = {
      props,
      emit,
      codes,
      groups,
      open,
      defaultCode,
      selectedCode,
      sdreason,
      remark,
      noop,
      talkpage,
      redirects,
      submitting,
      statusRef,
      talkpageTitle,
      talkpageNamespace,
      showTalkpage,
      options,
      currentOption,
      currentAction,
      noopDisabled,
      talkpageDisabled,
      redirectsDisabled,
      showSdreason,
      menuItems,
      applyOperationState,
      primaryAction,
      submit,
      evaluate,
      callbacks,
      get CdxCheckbox() {
        return import_codex8.CdxCheckbox;
      },
      get CdxField() {
        return import_codex8.CdxField;
      },
      get CdxSelect() {
        return import_codex8.CdxSelect;
      },
      get CdxTextInput() {
        return import_codex8.CdxTextInput;
      },
      TwDialog: TwDialog_default2,
      TwStatus: TwStatus_default2,
      get uls() {
        return uls;
      }
    };
    Object.defineProperty(__returned__, "__isScriptSetup", {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});
var import_vue24 = require("vue");
function render8(_ctx, _cache, $props, $setup, $data, $options) {
  return (0, import_vue24.openBlock)(), (0, import_vue24.createBlock)($setup["TwDialog"], {
    open: $setup.open,
    title: `关闭存废讨论 · ${$props.title}`,
    "script-name": "Twinkle",
    "footer-links": $props.footerLinks,
    "primary-action": $setup.primaryAction,
    "onUpdate:open": _cache[6] || (_cache[6] = ($event) => $setup.open = $event),
    onPrimary: $setup.submit
  }, {
    default: (0, import_vue24.withCtx)(() => [(0, import_vue24.createVNode)($setup["CdxField"], null, {
      label: (0, import_vue24.withCtx)(() => [..._cache[7] || (_cache[7] = [(0, import_vue24.createTextVNode)(
        "处理结果：",
        -1
        /* CACHED */
      )])]),
      default: (0, import_vue24.withCtx)(() => [(0, import_vue24.createVNode)($setup["CdxSelect"], {
        selected: $setup.selectedCode,
        "onUpdate:selected": _cache[0] || (_cache[0] = ($event) => $setup.selectedCode = $event),
        "menu-items": $setup.menuItems,
        disabled: $setup.submitting
      }, null, 8, ["selected", "menu-items", "disabled"])]),
      _: 1
      /* STABLE */
    }), $setup.showSdreason ? ((0, import_vue24.openBlock)(), (0, import_vue24.createBlock)($setup["CdxField"], {
      key: 0
    }, {
      label: (0, import_vue24.withCtx)(() => [..._cache[8] || (_cache[8] = [(0, import_vue24.createTextVNode)(
        "速删理由：",
        -1
        /* CACHED */
      )])]),
      default: (0, import_vue24.withCtx)(() => [(0, import_vue24.createVNode)($setup["CdxTextInput"], {
        modelValue: $setup.sdreason,
        "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.sdreason = $event),
        disabled: $setup.submitting,
        placeholder: "用于删除日志，使用{{delete}}的参数格式，例如 A1 或 A1|G1"
      }, null, 8, ["modelValue", "disabled"])]),
      _: 1
      /* STABLE */
    })) : (0, import_vue24.createCommentVNode)("v-if", true), (0, import_vue24.createVNode)($setup["CdxField"], null, {
      label: (0, import_vue24.withCtx)(() => [..._cache[9] || (_cache[9] = [(0, import_vue24.createTextVNode)(
        "补充说明：",
        -1
        /* CACHED */
      )])]),
      default: (0, import_vue24.withCtx)(() => [(0, import_vue24.createVNode)($setup["CdxTextInput"], {
        modelValue: $setup.remark,
        "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $setup.remark = $event),
        disabled: $setup.submitting
      }, null, 8, ["modelValue", "disabled"])]),
      _: 1
      /* STABLE */
    }), (0, import_vue24.createVNode)($setup["CdxCheckbox"], {
      modelValue: $setup.noop,
      "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $setup.noop = $event),
      disabled: $setup.noopDisabled || $setup.submitting
    }, {
      default: (0, import_vue24.withCtx)(() => [(0, import_vue24.createTextVNode)(
        (0, import_vue24.toDisplayString)($setup.uls("只关闭讨论，不进行其他操作", "只關閉討論，不進行其他操作")),
        1
        /* TEXT */
      )]),
      _: 1
      /* STABLE */
    }, 8, ["modelValue", "disabled"]), $setup.showTalkpage ? ((0, import_vue24.openBlock)(), (0, import_vue24.createBlock)($setup["CdxCheckbox"], {
      key: 1,
      modelValue: $setup.talkpage,
      "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $setup.talkpage = $event),
      disabled: $setup.talkpageDisabled || $setup.submitting
    }, {
      default: (0, import_vue24.withCtx)(() => [(0, import_vue24.createTextVNode)(
        (0, import_vue24.toDisplayString)($setup.uls("删除关联的讨论页", "刪除關聯的討論頁")),
        1
        /* TEXT */
      )]),
      _: 1
      /* STABLE */
    }, 8, ["modelValue", "disabled"])) : (0, import_vue24.createCommentVNode)("v-if", true), (0, import_vue24.createVNode)($setup["CdxCheckbox"], {
      modelValue: $setup.redirects,
      "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => $setup.redirects = $event),
      disabled: $setup.redirectsDisabled || $setup.submitting
    }, {
      default: (0, import_vue24.withCtx)(() => [(0, import_vue24.createTextVNode)(
        (0, import_vue24.toDisplayString)($setup.uls("删除重定向页", "刪除重定向頁")),
        1
        /* TEXT */
      )]),
      _: 1
      /* STABLE */
    }, 8, ["modelValue", "disabled"]), (0, import_vue24.createVNode)(
      $setup["TwStatus"],
      {
        ref: "statusRef"
      },
      null,
      512
      /* NEED_PATCH */
    )]),
    _: 1
    /* STABLE */
  }, 8, ["open", "title", "footer-links", "primary-action"]);
}
//! src/Twinkle/modules/ui/TwCloseDialog.vue
TwCloseDialog_default.render = render8;
TwCloseDialog_default.__file = "src\\Twinkle\\modules\\ui\\TwCloseDialog.vue";
var TwCloseDialog_default2 = TwCloseDialog_default;
var import_vue28 = require("vue");
var import_codex10 = require("@wikimedia/codex");
var import_vue29 = require("vue");
var import_vue25 = require("vue");
var import_codex9 = require("@wikimedia/codex");
var import_vue26 = require("vue");
var TwConfigListDialog_default = /* @__PURE__ */ (0, import_vue25.defineComponent)({
  __name: "TwConfigListDialog",
  props: {
    open: {
      type: Boolean,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    valueTitle: {
      type: String,
      required: true
    },
    labelTitle: {
      type: String,
      required: true
    },
    initialRows: {
      type: Array,
      required: true
    },
    defaultRows: {
      type: Array,
      required: true
    }
  },
  emits: ["update:open", "save"],
  setup(__props, {
    expose: __expose,
    emit: __emit
  }) {
    __expose();
    const props = __props;
    const emit = __emit;
    const panelOpen = (0, import_vue26.ref)(props.open);
    const rows = (0, import_vue26.ref)([]);
    (0, import_vue26.watch)(() => props.open, (value) => {
      panelOpen.value = value;
      if (value) {
        rows.value = props.initialRows.map((row) => ({
          ...row
        }));
      }
    });
    (0, import_vue26.watch)(panelOpen, (value) => {
      emit("update:open", value);
    });
    const addRow = () => {
      rows.value.push({
        value: "",
        label: ""
      });
    };
    const removeRow = (index) => {
      rows.value.splice(index, 1);
    };
    const reset = () => {
      rows.value = props.defaultRows.map((row) => ({
        ...row
      }));
    };
    const save = () => {
      const result = rows.value.filter((row) => row.value.trim() !== "" || row.label.trim() !== "").map((row) => ({
        value: row.value,
        label: row.label
      }));
      emit("save", result);
      panelOpen.value = false;
    };
    const primaryAction = (0, import_vue26.computed)(() => ({
      label: uls("保存修改", "儲存修改"),
      actionType: "progressive"
    }));
    const defaultAction = (0, import_vue26.computed)(() => ({
      label: uls("复位", "復位")
    }));
    const __returned__ = {
      props,
      emit,
      panelOpen,
      rows,
      addRow,
      removeRow,
      reset,
      save,
      primaryAction,
      defaultAction,
      get CdxButton() {
        return import_codex9.CdxButton;
      },
      get CdxDialog() {
        return import_codex9.CdxDialog;
      },
      get CdxTextInput() {
        return import_codex9.CdxTextInput;
      },
      get uls() {
        return uls;
      }
    };
    Object.defineProperty(__returned__, "__isScriptSetup", {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});
var import_vue27 = require("vue");
var _hoisted_18 = {
  class: "wikitable tw-config-list-table"
};
function render9(_ctx, _cache, $props, $setup, $data, $options) {
  return (0, import_vue27.openBlock)(), (0, import_vue27.createBlock)($setup["CdxDialog"], {
    open: $setup.panelOpen,
    "onUpdate:open": _cache[0] || (_cache[0] = ($event) => $setup.panelOpen = $event),
    title: $props.title,
    "use-close-button": true,
    "primary-action": $setup.primaryAction,
    "default-action": $setup.defaultAction,
    onPrimary: $setup.save,
    onDefault: $setup.reset
  }, {
    default: (0, import_vue27.withCtx)(() => [(0, import_vue27.createElementVNode)("table", _hoisted_18, [(0, import_vue27.createElementVNode)("thead", null, [(0, import_vue27.createElementVNode)("tr", null, [_cache[1] || (_cache[1] = (0, import_vue27.createElementVNode)(
      "th",
      {
        class: "tw-config-list-remove-col"
      },
      null,
      -1
      /* CACHED */
    )), (0, import_vue27.createElementVNode)(
      "th",
      null,
      (0, import_vue27.toDisplayString)($props.valueTitle),
      1
      /* TEXT */
    ), (0, import_vue27.createElementVNode)(
      "th",
      null,
      (0, import_vue27.toDisplayString)($props.labelTitle),
      1
      /* TEXT */
    )])]), (0, import_vue27.createElementVNode)("tbody", null, [((0, import_vue27.openBlock)(true), (0, import_vue27.createElementBlock)(
      import_vue27.Fragment,
      null,
      (0, import_vue27.renderList)($setup.rows, (row, index) => {
        return (0, import_vue27.openBlock)(), (0, import_vue27.createElementBlock)("tr", {
          key: index
        }, [(0, import_vue27.createElementVNode)("td", null, [(0, import_vue27.createVNode)($setup["CdxButton"], {
          weight: "quiet",
          disabled: false,
          onClick: ($event) => $setup.removeRow(index)
        }, {
          default: (0, import_vue27.withCtx)(() => [(0, import_vue27.createTextVNode)(
            (0, import_vue27.toDisplayString)($setup.uls("移除", "移除")),
            1
            /* TEXT */
          )]),
          _: 1
          /* STABLE */
        }, 8, ["onClick"])]), (0, import_vue27.createElementVNode)("td", null, [(0, import_vue27.createVNode)($setup["CdxTextInput"], {
          modelValue: row.value,
          "onUpdate:modelValue": ($event) => row.value = $event
        }, null, 8, ["modelValue", "onUpdate:modelValue"])]), (0, import_vue27.createElementVNode)("td", null, [(0, import_vue27.createVNode)($setup["CdxTextInput"], {
          modelValue: row.label,
          "onUpdate:modelValue": ($event) => row.label = $event
        }, null, 8, ["modelValue", "onUpdate:modelValue"])])]);
      }),
      128
      /* KEYED_FRAGMENT */
    ))])]), (0, import_vue27.createVNode)($setup["CdxButton"], {
      class: "tw-config-list-add",
      onClick: $setup.addRow
    }, {
      default: (0, import_vue27.withCtx)(() => [(0, import_vue27.createTextVNode)(
        (0, import_vue27.toDisplayString)($setup.uls("添加", "添加")),
        1
        /* TEXT */
      )]),
      _: 1
      /* STABLE */
    })]),
    _: 1
    /* STABLE */
  }, 8, ["open", "title", "primary-action", "default-action"]);
}
//! src/Twinkle/modules/ui/TwConfigListDialog.vue
TwConfigListDialog_default.render = render9;
TwConfigListDialog_default.__file = "src\\Twinkle\\modules\\ui\\TwConfigListDialog.vue";
TwConfigListDialog_default.__scopeId = "data-v-0d7248c9";
var TwConfigListDialog_default2 = TwConfigListDialog_default;
var TwConfigPanel_default = /* @__PURE__ */ (0, import_vue28.defineComponent)({
  __name: "TwConfigPanel",
  props: {
    sections: {
      type: Array,
      required: true
    },
    allSections: {
      type: Array,
      required: true
    },
    defaults: {
      type: Object,
      required: true
    },
    initialValues: {
      type: Object,
      required: true
    }
  },
  setup(__props, {
    expose: __expose
  }) {
    __expose();
    const props = __props;
    const values = (0, import_vue29.reactive)({});
    for (const [key, value] of Object.entries(props.initialValues)) {
      values[key] = value;
    }
    const submitting = (0, import_vue29.ref)(false);
    const statusRef = (0, import_vue29.ref)(null);
    const tocVisible = (0, import_vue29.ref)(true);
    const listDialogOpen = (0, import_vue29.ref)(false);
    const listPref = (0, import_vue29.ref)(null);
    const getString = (name) => {
      const value = values[name];
      return typeof value === "string" || typeof value === "number" ? String(value) : "";
    };
    const getBoolean = (name) => values[name] === true;
    const getSet = (name) => {
      const value = values[name];
      return Array.isArray(value) ? value.filter((item) => typeof item === "string") : [];
    };
    const getCustom = (name) => {
      const value = values[name];
      if (!Array.isArray(value)) {
        return [];
      }
      return value.filter((row) => typeof row === "object" && row !== null && typeof row.value === "string" && typeof row.label === "string");
    };
    const setString = (name, value) => {
      values[name] = value === null || value === void 0 ? "" : String(value);
    };
    const setBoolean = (name, value) => {
      values[name] = value === true;
    };
    const setOrder = (pref) => {
      if (pref.setDisplayOrder) {
        return [...pref.setDisplayOrder];
      }
      return Object.keys(pref.setValues ?? {});
    };
    const updateSet = (name, value, modelValue) => {
      if (Array.isArray(modelValue)) {
        values[name] = modelValue.filter((item) => typeof item === "string");
      } else if (modelValue) {
        values[name] = [...getSet(name), value];
      } else {
        values[name] = getSet(name).filter((item) => item !== value);
      }
    };
    const enumItems = (pref) => {
      const items = Object.entries(pref.enumValues ?? {}).map(([value, label]) => ({
        value,
        label
      }));
      const current = getString(pref.name);
      if (current && !items.some((item) => item.value === current)) {
        items.push({
          value: current,
          label: current
        });
      }
      return items;
    };
    const helptipHtml = (tip) => tip.replace(/{{(.+?)}}/g, `<a href="${mw.util.getUrl("Template:")}$1" rel="noopener" target="_blank">$1</a>`).replace(/\[\[(.+?)]]/g, `<a href="${mw.util.getUrl("")}$1" rel="noopener" target="_blank">$1</a>`);
    const resetPref = (pref) => {
      const defaultValue = props.defaults[pref.name];
      switch (pref.type) {
        case "boolean":
          values[pref.name] = defaultValue === true;
          break;
        case "string":
        case "integer":
        case "enum":
          values[pref.name] = defaultValue === void 0 || defaultValue === null ? "" : String(defaultValue);
          break;
        case "set":
          values[pref.name] = Array.isArray(defaultValue) ? defaultValue.filter((item) => typeof item === "string") : [];
          break;
        case "customList":
          values[pref.name] = Array.isArray(defaultValue) ? defaultValue.map((row) => ({
            ...row
          })) : [];
          break;
        default:
          break;
      }
    };
    const resetAll = () => {
      for (const section of props.sections) {
        for (const pref of section.preferences) {
          resetPref(pref);
        }
      }
    };
    const openListDialog = (pref) => {
      listPref.value = pref;
      listDialogOpen.value = true;
    };
    const onListSave = (rows) => {
      if (listPref.value) {
        values[listPref.value.name] = rows;
      }
    };
    const submit = () => {
      var _statusRef$value11;
      if (submitting.value) {
        return;
      }
      submitting.value = true;
      saveConfig(values, ((_statusRef$value11 = statusRef.value) === null || _statusRef$value11 === void 0 ? void 0 : _statusRef$value11.getStatusRoot()) ?? null, () => {
        submitting.value = false;
      });
    };
    const resetLabel = uls("复位", "復位");
    const restoreDefaultsLabel = uls("恢复默认", "恢復預設");
    const saveLabel = uls("保存修改", "儲存修改");
    const editItemsLabel = uls("编辑项目", "編輯項目");
    const saveConfig = (values2, statusContainer, restore) => {
      Morebits.status.init(statusContainer);
      const userjs = `${mw.config.get("wgFormattedNamespaces")[mw.config.get("wgNamespaceIds")["user"]]}:${mw.config.get("wgUserName")}/twinkleoptions.js`;
      const qiuwen_page = new Morebits.wiki.page(userjs, uls("保存参数设置到 ", "儲存偏好設定到 ") + userjs);
      qiuwen_page.setCallbackParameters({
        values: values2,
        restore
      });
      qiuwen_page.load(writePrefs);
    };
    const writePrefs = (pageobj) => {
      const {
        values: savedValues,
        restore
      } = pageobj.getCallbackParameters();
      const newConfig = {
        optionsVersion: 2.1
      };
      const compare = (a, b) => {
        if (Array.isArray(a)) {
          const arrB = Array.isArray(b) ? b : [];
          if (a.length !== arrB.length) {
            return false;
          }
          a.sort();
          arrB.sort();
          for (const [i, element] of a.entries()) {
            const other = arrB[i];
            if (other === void 0) {
              return false;
            }
            if (element !== null && typeof element === "object") {
              if (element.label !== other.label || element.value !== other.value) {
                return false;
              }
            } else if (String(element) !== String(other)) {
              return false;
            }
          }
          return true;
        }
        return a === b;
      };
      for (const section of props.allSections) {
        if (section.adminOnly && !Morebits.userIsSysop) {
          continue;
        }
        for (const pref of section.preferences) {
          let userValue;
          if (!pref.adminOnly || Morebits.userIsSysop) {
            if (!section.hidden) {
              switch (pref.type) {
                case "boolean":
                  userValue = savedValues[pref.name] === true;
                  break;
                case "string":
                // read from the input box or combo box
                case "enum":
                  userValue = String(savedValues[pref.name] ?? "");
                  break;
                case "integer": {
                  const parsed = Number.parseInt(String(savedValues[pref.name] ?? ""), 10);
                  if (Number.isNaN(parsed)) {
                    Morebits.status.warn(uls("保存", "儲存"), `${uls("您为 ", "您為 ") + pref.name} 指定的值（${String(savedValues[pref.name] ?? "")}${uls("）不合法，会继续保存操作，但此值将会跳过。", "）不合法，會繼續儲存操作，但此值將會跳過。")}`);
                    userValue = null;
                  } else {
                    userValue = parsed;
                  }
                  break;
                }
                case "set":
                  userValue = Array.isArray(savedValues[pref.name]) ? [...savedValues[pref.name]] : [];
                  break;
                case "customList":
                  userValue = savedValues[pref.name];
                  break;
                default:
                  void mw.notify(`twinkleconfig: 未知数据类型，属性 ${pref.name}`, {
                    type: "warn",
                    tag: "twinkleconfig"
                  });
                  break;
              }
            } else if (Twinkle.prefs) {
              userValue = Twinkle.prefs[pref.name];
            }
          }
          if (userValue !== void 0 && !compare(userValue, Twinkle.defaultConfig[pref.name])) {
            newConfig[pref.name] = userValue;
          }
        }
      }
      const nowiki = "nowiki";
      let text = `// <${nowiki}>
${uls(`// twinkleoptions.js：用户Twinkle参数设置文件
//
// 注：修改您的参数设置最简单的办法是使用
// Twinkle参数设置面板，在[[${Morebits.pageNameNorm}]]。
//
// 这个文件是自动生成的，您所做的任何修改（除了
// 以一种合法的JavaScript的方式来修改这些属性值）会
// 在下一次您点击“保存”时被覆盖。
// 修改此文件时，请记得使用合法的JavaScript。
`, `// twinkleoptions.js：使用者Twinkle參數設定檔案
//
// 註：修改您的參數設定最簡單的辦法是使用
// Twinkle參數設定面板，在[[${Morebits.pageNameNorm}]]。
//
// 這個檔案是自動產生的，您所做的任何修改（除了
// 以一種合法的JavaScript的方式來修改這些屬性值）會
// 在下一次您點擊「儲存」時被覆蓋。
// 修改此檔案時，請記得使用合法的JavaScript。
`)}`;
      text += "\nwindow.Twinkle = window.Twinkle || {};\nwindow.Twinkle.prefs = window.Twinkle.prefs || {};\nwindow.Twinkle.prefs = ";
      text += JSON.stringify(newConfig, null, 2);
      text += `;

${uls("// twinkleoptions.js到此为止\n", "// twinkleoptions.js到此為止\n")}// </${nowiki}>`;
      pageobj.setPageText(text);
      pageobj.setEditSummary(uls("保存Twinkle参数设置：来自[[", "儲存Twinkle偏好設定：來自[[") + Morebits.pageNameNorm + uls("]]的自动编辑", "]]的自動編輯"));
      pageobj.setChangeTags(Twinkle.changeTags);
      pageobj.setCreateOption("recreate");
      pageobj.save(() => {
        saveSuccess(pageobj);
        restore();
      }, () => {
        restore();
      });
    };
    const saveSuccess = (pageobj) => {
      pageobj.getStatusElement().info("成功");
      const noticebox = document.createElement("div");
      noticebox.className = "mw-message-box mw-message-box-success";
      noticebox.style.fontSize = "100%";
      noticebox.style.marginTop = "2em";
      noticebox.innerHTML = `<p><b>${uls("您的Twinkle参数设置已被保存。", "您的Twinkle偏好設定已被儲存。")}</b></p><p>${uls("要看到这些更改，您可能需要", "要看到這些更改，您可能需要")}<a href="${mw.util.getUrl("QW:BYPASS")}" title="QW:BYPASS"><b>${uls("绕过浏览器缓存", "繞過瀏覽器快取")}</b></a>。</p>`;
      if (Morebits.status.root) {
        Morebits.status.root.appendChild(noticebox);
        const noticeclear = document.createElement("br");
        noticeclear.style.clear = "both";
        Morebits.status.root.appendChild(noticeclear);
      }
    };
    const __returned__ = {
      props,
      values,
      submitting,
      statusRef,
      tocVisible,
      listDialogOpen,
      listPref,
      getString,
      getBoolean,
      getSet,
      getCustom,
      setString,
      setBoolean,
      setOrder,
      updateSet,
      enumItems,
      helptipHtml,
      resetPref,
      resetAll,
      openListDialog,
      onListSave,
      submit,
      resetLabel,
      restoreDefaultsLabel,
      saveLabel,
      editItemsLabel,
      saveConfig,
      writePrefs,
      saveSuccess,
      get CdxButton() {
        return import_codex10.CdxButton;
      },
      get CdxCheckbox() {
        return import_codex10.CdxCheckbox;
      },
      get CdxSelect() {
        return import_codex10.CdxSelect;
      },
      get CdxTextInput() {
        return import_codex10.CdxTextInput;
      },
      TwConfigListDialog: TwConfigListDialog_default2,
      TwStatus: TwStatus_default2,
      get uls() {
        return uls;
      }
    };
    Object.defineProperty(__returned__, "__isScriptSetup", {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});
var import_vue30 = require("vue");
var _hoisted_19 = {
  class: "tw-config-toc toc"
};
var _hoisted_28 = {
  class: "toctitle"
};
var _hoisted_35 = {
  class: "toctoggle"
};
var _hoisted_44 = {
  key: 0
};
var _hoisted_53 = ["href"];
var _hoisted_63 = {
  class: "tw-config-panel"
};
var _hoisted_7 = ["id"];
var _hoisted_8 = ["for"];
var _hoisted_9 = ["for"];
var _hoisted_10 = {
  class: "tw-config-label"
};
var _hoisted_11 = {
  class: "tw-config-control tw-config-set"
};
var _hoisted_122 = ["for"];
var _hoisted_132 = {
  class: "tw-config-side"
};
var _hoisted_142 = ["innerHTML"];
var _hoisted_152 = {
  class: "tw-config-reset"
};
var _hoisted_162 = ["onClick"];
var _hoisted_172 = {
  class: "tw-config-buttonpane"
};
var _hoisted_182 = {
  class: "plainlinks"
};
function render10(_ctx, _cache, $props, $setup, $data, $options) {
  return (0, import_vue30.openBlock)(), (0, import_vue30.createElementBlock)(
    import_vue30.Fragment,
    null,
    [(0, import_vue30.createElementVNode)("div", _hoisted_19, [(0, import_vue30.createElementVNode)("div", _hoisted_28, [(0, import_vue30.createElementVNode)(
      "h2",
      null,
      (0, import_vue30.toDisplayString)($setup.uls("目录 ", "目錄 ")),
      1
      /* TEXT */
    ), (0, import_vue30.createElementVNode)("span", _hoisted_35, [_cache[2] || (_cache[2] = (0, import_vue30.createTextVNode)(
      " [",
      -1
      /* CACHED */
    )), (0, import_vue30.createElementVNode)(
      "a",
      {
        class: "internal",
        href: "#tw-tocshowhide",
        onClick: _cache[0] || (_cache[0] = (0, import_vue30.withModifiers)(($event) => $setup.tocVisible = !$setup.tocVisible, ["prevent"]))
      },
      (0, import_vue30.toDisplayString)($setup.tocVisible ? $setup.uls("隐藏", "隱藏") : $setup.uls("显示", "顯示")),
      1
      /* TEXT */
    ), _cache[3] || (_cache[3] = (0, import_vue30.createTextVNode)(
      "] ",
      -1
      /* CACHED */
    ))])]), $setup.tocVisible ? ((0, import_vue30.openBlock)(), (0, import_vue30.createElementBlock)("ul", _hoisted_44, [((0, import_vue30.openBlock)(true), (0, import_vue30.createElementBlock)(
      import_vue30.Fragment,
      null,
      (0, import_vue30.renderList)($props.sections, (section) => {
        return (0, import_vue30.openBlock)(), (0, import_vue30.createElementBlock)("li", {
          key: section.module,
          class: "toclevel-1"
        }, [(0, import_vue30.createElementVNode)("a", {
          href: `#${section.module}`
        }, (0, import_vue30.toDisplayString)(section.title), 9, _hoisted_53)]);
      }),
      128
      /* KEYED_FRAGMENT */
    ))])) : (0, import_vue30.createCommentVNode)("v-if", true)]), (0, import_vue30.createElementVNode)("div", _hoisted_63, [((0, import_vue30.openBlock)(true), (0, import_vue30.createElementBlock)(
      import_vue30.Fragment,
      null,
      (0, import_vue30.renderList)($props.sections, (section) => {
        return (0, import_vue30.openBlock)(), (0, import_vue30.createElementBlock)("div", {
          key: section.module,
          class: "tw-config-section"
        }, [(0, import_vue30.createElementVNode)("h4", {
          id: section.module
        }, (0, import_vue30.toDisplayString)(section.title), 9, _hoisted_7), ((0, import_vue30.openBlock)(true), (0, import_vue30.createElementBlock)(
          import_vue30.Fragment,
          null,
          (0, import_vue30.renderList)(section.preferences, (pref) => {
            return (0, import_vue30.openBlock)(), (0, import_vue30.createElementBlock)("div", {
              key: pref.name,
              class: "tw-config-pref"
            }, [pref.type === "boolean" ? ((0, import_vue30.openBlock)(), (0, import_vue30.createBlock)($setup["CdxCheckbox"], {
              key: 0,
              class: "tw-config-control tw-config-boolean",
              "model-value": $setup.getBoolean(pref.name),
              "onUpdate:modelValue": ($event) => $setup.setBoolean(pref.name, $event)
            }, {
              default: (0, import_vue30.withCtx)(() => [(0, import_vue30.createTextVNode)(
                (0, import_vue30.toDisplayString)(pref.label),
                1
                /* TEXT */
              )]),
              _: 2
              /* DYNAMIC */
            }, 1032, ["model-value", "onUpdate:modelValue"])) : pref.type === "string" || pref.type === "integer" ? ((0, import_vue30.openBlock)(), (0, import_vue30.createElementBlock)(
              import_vue30.Fragment,
              {
                key: 1
              },
              [(0, import_vue30.createElementVNode)("label", {
                class: "tw-config-label",
                for: `tw-config-${pref.name}`
              }, (0, import_vue30.toDisplayString)(pref.label) + "：", 9, _hoisted_8), (0, import_vue30.createVNode)($setup["CdxTextInput"], {
                id: `tw-config-${pref.name}`,
                class: "tw-config-control",
                "model-value": $setup.getString(pref.name),
                "input-type": pref.type === "integer" ? "number" : "text",
                "onUpdate:modelValue": ($event) => $setup.setString(pref.name, $event)
              }, null, 8, ["id", "model-value", "input-type", "onUpdate:modelValue"])],
              64
              /* STABLE_FRAGMENT */
            )) : pref.type === "enum" ? ((0, import_vue30.openBlock)(), (0, import_vue30.createElementBlock)(
              import_vue30.Fragment,
              {
                key: 2
              },
              [(0, import_vue30.createElementVNode)("label", {
                class: "tw-config-label",
                for: `tw-config-${pref.name}`
              }, (0, import_vue30.toDisplayString)(pref.label) + "：", 9, _hoisted_9), (0, import_vue30.createVNode)($setup["CdxSelect"], {
                id: `tw-config-${pref.name}`,
                class: "tw-config-control",
                selected: $setup.getString(pref.name),
                "menu-items": $setup.enumItems(pref),
                "onUpdate:selected": ($event) => $setup.setString(pref.name, $event)
              }, null, 8, ["id", "selected", "menu-items", "onUpdate:selected"])],
              64
              /* STABLE_FRAGMENT */
            )) : pref.type === "set" ? ((0, import_vue30.openBlock)(), (0, import_vue30.createElementBlock)(
              import_vue30.Fragment,
              {
                key: 3
              },
              [(0, import_vue30.createElementVNode)(
                "span",
                _hoisted_10,
                (0, import_vue30.toDisplayString)(pref.label) + "：",
                1
                /* TEXT */
              ), (0, import_vue30.createElementVNode)("span", _hoisted_11, [((0, import_vue30.openBlock)(true), (0, import_vue30.createElementBlock)(
                import_vue30.Fragment,
                null,
                (0, import_vue30.renderList)($setup.setOrder(pref), (item) => {
                  return (0, import_vue30.openBlock)(), (0, import_vue30.createBlock)($setup["CdxCheckbox"], {
                    key: item,
                    "model-value": $setup.getSet(pref.name),
                    "input-value": item,
                    name: `twinkle-config-${pref.name}`,
                    "onUpdate:modelValue": ($event) => $setup.updateSet(pref.name, item, $event)
                  }, {
                    default: (0, import_vue30.withCtx)(() => {
                      var _pref$setValues;
                      return [(0, import_vue30.createTextVNode)(
                        (0, import_vue30.toDisplayString)(((_pref$setValues = pref.setValues) === null || _pref$setValues === void 0 ? void 0 : _pref$setValues[item]) ?? item),
                        1
                        /* TEXT */
                      )];
                    }),
                    _: 2
                    /* DYNAMIC */
                  }, 1032, ["model-value", "input-value", "name", "onUpdate:modelValue"]);
                }),
                128
                /* KEYED_FRAGMENT */
              ))])],
              64
              /* STABLE_FRAGMENT */
            )) : pref.type === "customList" ? ((0, import_vue30.openBlock)(), (0, import_vue30.createElementBlock)(
              import_vue30.Fragment,
              {
                key: 4
              },
              [(0, import_vue30.createElementVNode)("label", {
                class: "tw-config-label",
                for: `tw-config-${pref.name}`
              }, (0, import_vue30.toDisplayString)(pref.label) + "：", 9, _hoisted_122), (0, import_vue30.createVNode)($setup["CdxButton"], {
                id: `tw-config-${pref.name}`,
                class: "tw-config-control",
                onClick: ($event) => $setup.openListDialog(pref)
              }, {
                default: (0, import_vue30.withCtx)(() => [(0, import_vue30.createTextVNode)(
                  (0, import_vue30.toDisplayString)($setup.editItemsLabel),
                  1
                  /* TEXT */
                )]),
                _: 1
                /* STABLE */
              }, 8, ["id", "onClick"])],
              64
              /* STABLE_FRAGMENT */
            )) : (0, import_vue30.createCommentVNode)("v-if", true), (0, import_vue30.createElementVNode)("div", _hoisted_132, [(0, import_vue30.createCommentVNode)(" eslint-disable-next-line vue/no-v-html -- content comes from helptipHtml (already sanitized by helptipHtml or explicitly appended elements) "), pref.helptip ? ((0, import_vue30.openBlock)(), (0, import_vue30.createElementBlock)("div", {
              key: 0,
              class: "tw-config-helptip",
              innerHTML: $setup.helptipHtml(pref.helptip)
            }, null, 8, _hoisted_142)) : (0, import_vue30.createCommentVNode)("v-if", true), (0, import_vue30.createElementVNode)("span", _hoisted_152, [(0, import_vue30.createElementVNode)("a", {
              href: "#tw-reset",
              onClick: (0, import_vue30.withModifiers)(($event) => $setup.resetPref(pref), ["prevent"])
            }, (0, import_vue30.toDisplayString)($setup.resetLabel), 9, _hoisted_162)])])]);
          }),
          128
          /* KEYED_FRAGMENT */
        ))]);
      }),
      128
      /* KEYED_FRAGMENT */
    ))]), (0, import_vue30.createElementVNode)("div", _hoisted_172, [(0, import_vue30.createVNode)($setup["CdxButton"], {
      action: "progressive",
      weight: "primary",
      disabled: $setup.submitting,
      onClick: $setup.submit
    }, {
      default: (0, import_vue30.withCtx)(() => [(0, import_vue30.createTextVNode)(
        (0, import_vue30.toDisplayString)($setup.saveLabel),
        1
        /* TEXT */
      )]),
      _: 1
      /* STABLE */
    }, 8, ["disabled"]), (0, import_vue30.createElementVNode)("span", _hoisted_182, [(0, import_vue30.createElementVNode)(
      "a",
      {
        href: "#tw-reset-all",
        onClick: (0, import_vue30.withModifiers)($setup.resetAll, ["prevent"])
      },
      (0, import_vue30.toDisplayString)($setup.restoreDefaultsLabel),
      1
      /* TEXT */
    )])]), (0, import_vue30.createVNode)(
      $setup["TwStatus"],
      {
        ref: "statusRef"
      },
      null,
      512
      /* NEED_PATCH */
    ), $setup.listPref ? ((0, import_vue30.openBlock)(), (0, import_vue30.createBlock)($setup["TwConfigListDialog"], {
      key: 0,
      open: $setup.listDialogOpen,
      "onUpdate:open": _cache[1] || (_cache[1] = ($event) => $setup.listDialogOpen = $event),
      title: $setup.listPref.label ?? "",
      "value-title": $setup.listPref.customListValueTitle ?? $setup.uls("数值", "數值"),
      "label-title": $setup.listPref.customListLabelTitle ?? $setup.uls("标签", "標籤"),
      "initial-rows": $setup.getCustom($setup.listPref.name),
      "default-rows": Array.isArray($props.defaults[$setup.listPref.name]) ? $props.defaults[$setup.listPref.name] : [],
      onSave: $setup.onListSave
    }, null, 8, ["open", "title", "value-title", "label-title", "initial-rows", "default-rows"])) : (0, import_vue30.createCommentVNode)("v-if", true)],
    64
    /* STABLE_FRAGMENT */
  );
}
//! src/Twinkle/modules/ui/TwConfigPanel.vue
TwConfigPanel_default.render = render10;
TwConfigPanel_default.__file = "src\\Twinkle\\modules\\ui\\TwConfigPanel.vue";
TwConfigPanel_default.__scopeId = "data-v-b5e8a01f";
var TwConfigPanel_default2 = TwConfigPanel_default;
var import_vue31 = require("vue");
var import_codex11 = require("@wikimedia/codex");
var import_vue32 = require("vue");
var TwCopyvioDialog_default = /* @__PURE__ */ (0, import_vue31.defineComponent)({
  __name: "TwCopyvioDialog",
  props: {
    title: {
      type: String,
      required: true
    },
    footerLinks: {
      type: Array,
      required: true
    }
  },
  emits: ["close"],
  setup(__props, {
    expose: __expose,
    emit: __emit
  }) {
    __expose();
    const emit = __emit;
    const open = (0, import_vue32.ref)(true);
    const source = (0, import_vue32.ref)("");
    const g4 = (0, import_vue32.ref)(false);
    const g4Pagename = (0, import_vue32.ref)("");
    const notify = (0, import_vue32.ref)(true);
    const submitting = (0, import_vue32.ref)(false);
    const statusRef = (0, import_vue32.ref)(null);
    const primaryAction = (0, import_vue32.computed)(() => ({
      label: uls("提交", "提交"),
      actionType: "progressive",
      disabled: submitting.value
    }));
    const submit = () => {
      var _statusRef$value12;
      if (submitting.value) {
        return;
      }
      if (!source.value.trim()) {
        void mw.notify(uls("请指定侵权来源", "請指定侵權來源"), {
          type: "warn",
          tag: "twinklecopyvio"
        });
        return;
      }
      submitting.value = true;
      evaluate({
        source: source.value.trim(),
        g4: g4.value,
        g4_pagename: g4Pagename.value.trim(),
        notify: notify.value,
        logpage: "Qiuwen_talk:侵权提报"
      }, ((_statusRef$value12 = statusRef.value) === null || _statusRef$value12 === void 0 ? void 0 : _statusRef$value12.getStatusRoot()) ?? null);
    };
    (0, import_vue32.watch)(open, (value) => {
      if (!value) {
        emit("close");
      }
    });
    const evaluate = (params, statusContainer) => {
      Morebits.status.init(statusContainer);
      Morebits.wiki.addCheckpoint();
      Morebits.wiki.actionCompleted.redirect = mw.config.get("wgPageName");
      Morebits.wiki.actionCompleted.notice = uls("提报完成，将在几秒内刷新页面", "提報完成，將在幾秒內重新整理頁面");
      const qiuwen_page = new Morebits.wiki.page(mw.config.get("wgPageName"), uls("加入侵权模板到页面", "加入侵權模板到頁面"));
      qiuwen_page.setCallbackParameters(params);
      qiuwen_page.load(callbacks.tryTagging);
      Morebits.wiki.removeCheckpoint();
    };
    const callbacks = {
      tryTagging: (pageobj) => {
        const text = pageobj.getPageText() ?? "";
        if (text.includes("{{Copyvio|")) {
          Morebits.status.error(uls("错误", "錯誤"), uls("页面已经标记侵权，请人工确认是否已经提报。", "頁面已經標記侵權，請人工確認是否已經提報。"));
        } else {
          callbacks.taggingArticle(pageobj);
          const qiuwen_page = new Morebits.wiki.page(mw.config.get("wgPageName"));
          qiuwen_page.setCallbackParameters(pageobj.getCallbackParameters());
          qiuwen_page.lookupCreation(callbacks.main);
        }
      },
      main: (pageobj) => {
        const params = pageobj.getCallbackParameters();
        const initialContrib = pageobj.getCreator();
        const qiuwen_page = new Morebits.wiki.page(params.logpage, uls("加入侵权记录项", "加入侵權記錄項"));
        qiuwen_page.setFollowRedirect(true);
        qiuwen_page.setCallbackParameters(params);
        qiuwen_page.load(callbacks.copyvioList);
        if (params.notify) {
          const usertalkpage = new Morebits.wiki.page(`User talk:${initialContrib}`, `${uls("通知页面创建者（", "通知頁面建立者（") + initialContrib}）`);
          const notifytext = "\n{{".concat("subst:", `CopyvioNotice|${mw.config.get("wgPageName")}}}`);
          usertalkpage.setAppendText(notifytext);
          usertalkpage.setEditSummary(uls("通知：页面[[", "通知：頁面[[") + mw.config.get("wgPageName") + uls("]]疑似侵犯著作权", "]]疑似侵犯版權"));
          usertalkpage.setChangeTags(Twinkle.changeTags);
          usertalkpage.setCreateOption("recreate");
          usertalkpage.setWatchlist(Twinkle.getPref("copyvioWatchUser"));
          usertalkpage.setFollowRedirect(true, false);
          usertalkpage.append();
        }
      },
      taggingArticle: (pageobj) => {
        const params = pageobj.getCallbackParameters();
        const revisionId = mw.config.get("wgRevisionId") || mw.config.get("wgDiffNewId") || mw.config.get("wgCurRevisionId");
        let tag = "{{".concat("subst:", `Copyvio/auto|url=${params.source.replace(/http/g, "&#104;ttp").replace(/\n+/g, "\n").replace(/^\s*([^*])/gm, "* $1").replace(/^\* $/m, "")}|OldRevision=${revisionId}}}`);
        const text = pageobj.getPageText() ?? "";
        const oldcsd = text.match(/\{\{\s*(db(-\w*)?|d|delete)\s*(\|(?:\{\{[^{}]*\}\}|[^{}])*)?\}\}/i);
        if (oldcsd && confirm(uls("在页面上找到快速删除模板，要保留吗？\n\n当页面同时侵犯著作权又符合快速删除标准时，应该优先走快速删除程序。\n单击“确认”以保留快速删除模板，若您认为快速删除理由不合，单击“取消”以移除快速删除模板。", "在頁面上找到快速刪除模板，要保留嗎？\n\n當頁面同時侵犯版權又符合快速刪除標準時，應該優先走快速刪除程序。\n點擊「確認」以保留快速刪除模板，若您認為快速刪除理由不合，點擊「取消」以移除快速刪除模板。"))) {
          tag = `${oldcsd[0]}
${tag}`;
        }
        if (params.g4) {
          let speedyTag = "{{delete";
          speedyTag += "|g4";
          if (params.g4_pagename) {
            speedyTag += `|${params.g4_pagename}|c1=[[Special:Undelete/${params.g4_pagename}]]`;
          } else {
            speedyTag += `|c1=[[Special:Undelete/${mw.config.get("wgPageName")}]]`;
          }
          speedyTag += "}}";
          tag = `${speedyTag}
${tag}`;
        }
        pageobj.setPageText(tag);
        pageobj.setEditSummary(uls("此页面疑似侵犯著作权", "此頁面疑似侵犯版權"));
        pageobj.setChangeTags(Twinkle.changeTags);
        pageobj.setWatchlist(Twinkle.getPref("copyvioWatchPage"));
        pageobj.save();
        if (Twinkle.getPref("markCopyvioPagesAsPatrolled")) {
          pageobj.patrol();
        }
      },
      copyvioList: (pageobj) => {
        const text = pageobj.getPageText() ?? "";
        let output = "";
        const date = /* @__PURE__ */ new Date();
        const dateHeaderRegex = new RegExp(`^==+\\s*${date.getUTCMonth() + 1}月${date.getUTCDate()}日\\s*==+`, "mg");
        if (!dateHeaderRegex.exec(text)) {
          output = `

==${date.getUTCMonth() + 1}月${date.getUTCDate()}日==`;
        }
        output += "\n{{".concat("subst:", `CopyvioVFDRecord|${mw.config.get("wgPageName")}}}`);
        pageobj.setAppendText(output);
        pageobj.setEditSummary(`加入[[${mw.config.get("wgPageName")}]]`);
        pageobj.setChangeTags(Twinkle.changeTags);
        pageobj.setCreateOption("recreate");
        pageobj.append();
      }
    };
    const __returned__ = {
      emit,
      open,
      source,
      g4,
      g4Pagename,
      notify,
      submitting,
      statusRef,
      primaryAction,
      submit,
      evaluate,
      callbacks,
      get CdxCheckbox() {
        return import_codex11.CdxCheckbox;
      },
      get CdxField() {
        return import_codex11.CdxField;
      },
      get CdxTextArea() {
        return import_codex11.CdxTextArea;
      },
      get CdxTextInput() {
        return import_codex11.CdxTextInput;
      },
      TwDialog: TwDialog_default2,
      TwStatus: TwStatus_default2,
      get uls() {
        return uls;
      }
    };
    Object.defineProperty(__returned__, "__isScriptSetup", {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});
var import_vue33 = require("vue");
function render11(_ctx, _cache, $props, $setup, $data, $options) {
  return (0, import_vue33.openBlock)(), (0, import_vue33.createBlock)($setup["TwDialog"], {
    open: $setup.open,
    title: $props.title,
    "script-name": "Twinkle",
    "footer-links": $props.footerLinks,
    "primary-action": $setup.primaryAction,
    "onUpdate:open": _cache[4] || (_cache[4] = ($event) => $setup.open = $event),
    onPrimary: $setup.submit
  }, {
    default: (0, import_vue33.withCtx)(() => [(0, import_vue33.createVNode)($setup["CdxField"], null, {
      label: (0, import_vue33.withCtx)(() => [(0, import_vue33.createTextVNode)(
        (0, import_vue33.toDisplayString)($setup.uls("侵权来源：", "侵權來源：")),
        1
        /* TEXT */
      )]),
      default: (0, import_vue33.withCtx)(() => [(0, import_vue33.createVNode)($setup["CdxTextArea"], {
        modelValue: $setup.source,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.source = $event),
        disabled: $setup.submitting
      }, null, 8, ["modelValue", "disabled"])]),
      _: 1
      /* STABLE */
    }), (0, import_vue33.createVNode)($setup["CdxCheckbox"], {
      modelValue: $setup.g4,
      "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.g4 = $event),
      disabled: $setup.submitting
    }, {
      default: (0, import_vue33.withCtx)(() => [(0, import_vue33.createTextVNode)(
        (0, import_vue33.toDisplayString)($setup.uls("CSD G4: 曾经根据侵权审核删除后又重新创建的内容", "CSD G4: 曾經根據侵權審核刪除後又重新建立的內容")),
        1
        /* TEXT */
      )]),
      _: 1
      /* STABLE */
    }, 8, ["modelValue", "disabled"]), $setup.g4 ? ((0, import_vue33.openBlock)(), (0, import_vue33.createBlock)($setup["CdxField"], {
      key: 0
    }, {
      label: (0, import_vue33.withCtx)(() => [(0, import_vue33.createTextVNode)(
        (0, import_vue33.toDisplayString)($setup.uls("前次删除的页面名称", "前次刪除的頁面名稱")),
        1
        /* TEXT */
      )]),
      default: (0, import_vue33.withCtx)(() => [(0, import_vue33.createVNode)($setup["CdxTextInput"], {
        modelValue: $setup.g4Pagename,
        "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $setup.g4Pagename = $event),
        disabled: $setup.submitting
      }, null, 8, ["modelValue", "disabled"])]),
      _: 1
      /* STABLE */
    })) : (0, import_vue33.createCommentVNode)("v-if", true), (0, import_vue33.createVNode)($setup["CdxCheckbox"], {
      modelValue: $setup.notify,
      "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $setup.notify = $event),
      disabled: $setup.submitting
    }, {
      default: (0, import_vue33.withCtx)(() => [(0, import_vue33.createTextVNode)(
        (0, import_vue33.toDisplayString)($setup.uls("通知页面创建者", "通知頁面建立者")),
        1
        /* TEXT */
      )]),
      _: 1
      /* STABLE */
    }, 8, ["modelValue", "disabled"]), (0, import_vue33.createVNode)(
      $setup["TwStatus"],
      {
        ref: "statusRef"
      },
      null,
      512
      /* NEED_PATCH */
    )]),
    _: 1
    /* STABLE */
  }, 8, ["open", "title", "footer-links", "primary-action"]);
}
//! src/Twinkle/modules/ui/TwCopyvioDialog.vue
TwCopyvioDialog_default.render = render11;
TwCopyvioDialog_default.__file = "src\\Twinkle\\modules\\ui\\TwCopyvioDialog.vue";
var TwCopyvioDialog_default2 = TwCopyvioDialog_default;
var import_vue34 = require("vue");
var import_codex12 = require("@wikimedia/codex");
var import_vue35 = require("vue");
var TwImageDialog_default = /* @__PURE__ */ (0, import_vue34.defineComponent)({
  __name: "TwImageDialog",
  props: {
    title: {
      type: String,
      required: true
    },
    initialNotify: {
      type: Boolean,
      required: true
    },
    footerLinks: {
      type: Array,
      required: true
    }
  },
  emits: ["close"],
  setup(__props, {
    expose: __expose,
    emit: __emit
  }) {
    __expose();
    const props = __props;
    const emit = __emit;
    const open = (0, import_vue35.ref)(true);
    const notify = (0, import_vue35.ref)(props.initialNotify);
    const selectedType = (0, import_vue35.ref)("no source");
    const f1Source = (0, import_vue35.ref)("");
    const f4Type = (0, import_vue35.ref)("");
    const submitting = (0, import_vue35.ref)(false);
    const statusRef = (0, import_vue35.ref)(null);
    const typeOptions = [{
      value: "no permission",
      label: uls("明显侵权之文件（CSD F1）", "明顯侵權之檔案（CSD F1）")
    }, {
      value: "no source",
      label: uls("来源不明（CSD F3）", "來源不明（CSD F3）")
    }, {
      value: "no license",
      label: uls("未知著作权信息（CSD F3）", "未知著作權資訊（CSD F3）")
    }, {
      value: "no license",
      label: uls("著作权无法被查证（CSD F3）", "著作權無法被查證（CSD F3）")
    }, {
      value: "replaceable fair use",
      label: uls("可被替代的非自由著作权文件（CSD F4）", "可被替代的非自由著作權檔案（CSD F4）")
    }, {
      value: "orphaned fair use",
      label: uls("没有被条目使用的非自由著作权文件（CSD F5）", "沒有被條目使用的非自由著作權檔案（CSD F5）")
    }, {
      value: "no fair use rationale",
      label: uls("没有填写任何合理使用依据的非自由著作权文件（CSD F5）", "沒有填寫任何合理使用依據的非自由著作權檔案（CSD F5）")
    }];
    const f4TypeOptions = (0, import_vue35.computed)(() => [{
      value: "",
      label: uls("请选择", "請選擇")
    }, {
      value: "1",
      label: uls("有其他自由著作权文件展示相同的事物", "有其他自由著作權檔案展示相同的事物")
    }, {
      value: "2",
      label: uls("文件描述的是在世或假定在世人物、仍然存在的建筑、室外雕塑或仍然在售的商品，且预计自行拍摄的照片不受他人著作权保护", "檔案描述的是在世或假定在世人物、仍然存在的建築、室外雕塑或仍然在售的商品，且預計自行拍攝的相片不受他人著作權保護")
    }, {
      value: "3",
      label: uls("文件为可自行绘制的地图或图表", "檔案為可自行繪製的地圖或圖表")
    }, {
      value: "4",
      label: uls("文件来自商业图片机构（如Getty）", "檔案來自商業圖片機構（如Getty）")
    }]);
    const showF1Source = (0, import_vue35.computed)(() => selectedType.value === "no permission");
    const showF4Type = (0, import_vue35.computed)(() => selectedType.value === "replaceable fair use");
    const primaryAction = (0, import_vue35.computed)(() => ({
      label: uls("提交", "提交"),
      actionType: "progressive",
      disabled: submitting.value
    }));
    const submit = () => {
      var _statusRef$value13;
      if (submitting.value) {
        return;
      }
      submitting.value = true;
      evaluate({
        type: selectedType.value,
        notify: notify.value,
        f1_source: f1Source.value,
        f4_type: f4Type.value
      }, ((_statusRef$value13 = statusRef.value) === null || _statusRef$value13 === void 0 ? void 0 : _statusRef$value13.getStatusRoot()) ?? null, () => {
        submitting.value = false;
      });
    };
    (0, import_vue35.watch)(open, (value) => {
      if (!value) {
        emit("close");
      }
    });
    const callbacks = {
      taggingImage: (pageobj) => {
        const params = pageobj.getCallbackParameters();
        let text = pageobj.getPageText() ?? "";
        text = text.replace(/\{\{(mtc|(copy |move )?to ?(share|commons)|move to (qiuwen share|wikimedia commons)|copy to (qiuwen share|wikimedia commons))[^}]*\}\}/gi, "");
        if (params.type !== "orphaned fair use") {
          const qiuwen_page = new Morebits.wiki.page("Qiuwen_talk:存废讨论/文件快速删除提报", uls("加入快速删除记录项", "加入快速刪除記錄項"));
          qiuwen_page.setFollowRedirect(true);
          qiuwen_page.setCallbackParameters(params);
          qiuwen_page.load(callbacks.imageList);
        }
        let tag;
        switch (params.type) {
          case "orphaned fair use":
            tag = "{{".concat("subst:", "orphaned fair use}}\n");
            break;
          case "no permission":
            tag = "{{".concat("subst:", `${params.templatename}/auto|1=${params.f1_source.replace(/http/g, "&#104;ttp").replace(/\n+/g, "\n").replace(/^\s*([^*])/gm, "* $1").replace(/^\* $/m, "")}}}
`);
            break;
          case "replaceable fair use":
            tag = "{{".concat("subst:", `${params.templatename}/auto|1=${params.f4_type}}}
`);
            break;
          default:
            tag = "{{".concat("subst:", `${params.templatename}/auto}}
`);
            break;
        }
        const textNoSd = text.replace(/\{\{\s*(db(-\w*)?|d|delete|(?:hang|hold)[- ]?on)\s*(\|(?:\{\{[^{}]*\}\}|[^{}])*)?\}\}\s*/gi, "");
        if (text !== textNoSd && confirm(uls("在页面上找到快速删除模板，要移除吗？", "在頁面上找到快速刪除模板，要移除嗎？"))) {
          text = textNoSd;
        }
        pageobj.setPageText(tag + text);
        let editSummary = uls("请求快速删除（", "請求快速刪除（");
        editSummary += `[[QW:CSD#${(params.normalized ?? "").toUpperCase()}|CSD ${(params.normalized ?? "").toUpperCase()}]]`;
        editSummary += "）";
        pageobj.setEditSummary(editSummary);
        pageobj.setChangeTags(Twinkle.changeTags);
        pageobj.setWatchlist(Twinkle.getPref("deliWatchPage"));
        pageobj.setCreateOption("nocreate");
        pageobj.save();
      },
      userNotification: (pageobj) => {
        const params = pageobj.getCallbackParameters();
        const initialContrib = pageobj.getCreator() ?? "";
        if (initialContrib === mw.config.get("wgUserName")) {
          pageobj.getStatusElement().warn(`您（${initialContrib}）${uls("创建了该页，跳过通知", "建立了該頁，跳過通知")}`);
        } else {
          const talkPageName = `User talk:${initialContrib}`;
          const usertalkpage = new Morebits.wiki.page(talkPageName, `${uls("通知上传者", "通知上傳者")}（${initialContrib}）`);
          const notifytext = "\n{{".concat("subst:", `Di-${params.templatename}-notice|1=${Morebits.pageNameNorm}}}——~~`, "~~");
          usertalkpage.setAppendText(notifytext);
          usertalkpage.setEditSummary(uls("通知：文件[[", "通知：檔案[[") + Morebits.pageNameNorm + uls("]]快速删除提名", "]]快速刪除提名"));
          usertalkpage.setChangeTags(Twinkle.changeTags);
          usertalkpage.setCreateOption("recreate");
          usertalkpage.setWatchlist(Twinkle.getPref("deliWatchUser"));
          usertalkpage.setFollowRedirect(true, false);
          usertalkpage.append();
        }
        if (params.lognomination) {
          var _Twinkle$speedy2;
          params.fromDI = true;
          (_Twinkle$speedy2 = Twinkle.speedy) === null || _Twinkle$speedy2 === void 0 || _Twinkle$speedy2.callbacks.user.addToLog(params, initialContrib);
        }
      },
      imageList: (pageobj) => {
        const text = pageobj.getPageText() ?? "";
        pageobj.setPageText(`${text}
* [[:${Morebits.pageNameNorm}]]——~~`.concat("~~"));
        pageobj.setEditSummary(`加入[[${Morebits.pageNameNorm}]]`);
        pageobj.setChangeTags(Twinkle.changeTags);
        pageobj.setCreateOption("recreate");
        pageobj.save();
      }
    };
    const evaluate = (params, statusContainer, restore) => {
      let {
        notify: notify2
      } = params;
      const {
        type
      } = params;
      let csdcrit;
      switch (type) {
        case "no source":
          csdcrit = "f3";
          break;
        case "no license":
          csdcrit = "f3";
          break;
        case "orphaned fair use":
          csdcrit = "f5";
          notify2 = false;
          break;
        case "no permission":
          csdcrit = "f1";
          break;
        case "no fair use rationale":
          csdcrit = "f5";
          break;
        case "replaceable fair use":
          csdcrit = "f4";
          break;
        default:
          throw new Error("Twinkle.image.callback.evaluate：未知条款");
      }
      const lognomination = Twinkle.getPref("logSpeedyNominations") === true && !Twinkle.getPref("noLogOnSpeedyNomination").includes(csdcrit.toLowerCase());
      const templatename = type;
      params.templatename = templatename;
      params.normalized = csdcrit;
      params.lognomination = lognomination;
      if (csdcrit === "f4" && !params.f4_type) {
        void mw.notify(uls("CSD F4：请选择适用类型。", "CSD F4：請選擇適用類別。"), {
          type: "warn",
          tag: "twinkleimage"
        });
        if (restore) {
          restore();
        }
        return;
      }
      Morebits.status.init(statusContainer);
      Morebits.wiki.actionCompleted.redirect = mw.config.get("wgPageName");
      Morebits.wiki.actionCompleted.notice = uls("标记完成", "標記完成");
      const qiuwen_page = new Morebits.wiki.page(mw.config.get("wgPageName"), uls("加入删除标记", "加入刪除標記"));
      qiuwen_page.setCallbackParameters(params);
      qiuwen_page.load(callbacks.taggingImage);
      if (notify2) {
        qiuwen_page.lookupCreation(callbacks.userNotification);
      } else {
        if (lognomination) {
          var _Twinkle$speedy3;
          params.fromDI = true;
          (_Twinkle$speedy3 = Twinkle.speedy) === null || _Twinkle$speedy3 === void 0 || _Twinkle$speedy3.callbacks.user.addToLog(params, null);
        }
        if (type !== "orphaned fair use") {
          const noteData = document.createElement("pre");
          noteData.appendChild(document.createTextNode("{{".concat("subst:", `Uploadvionotice|${Morebits.pageNameNorm}}}——~~`, "~~")));
          Morebits.status.info("提示", [uls("这些内容应贴进上传者对话页：", "這些內容應貼進上傳者討論頁："), noteData]);
        }
      }
    };
    const __returned__ = {
      props,
      emit,
      open,
      notify,
      selectedType,
      f1Source,
      f4Type,
      submitting,
      statusRef,
      typeOptions,
      f4TypeOptions,
      showF1Source,
      showF4Type,
      primaryAction,
      submit,
      callbacks,
      evaluate,
      get CdxCheckbox() {
        return import_codex12.CdxCheckbox;
      },
      get CdxField() {
        return import_codex12.CdxField;
      },
      get CdxRadio() {
        return import_codex12.CdxRadio;
      },
      get CdxSelect() {
        return import_codex12.CdxSelect;
      },
      get CdxTextArea() {
        return import_codex12.CdxTextArea;
      },
      TwDialog: TwDialog_default2,
      TwStatus: TwStatus_default2,
      get uls() {
        return uls;
      }
    };
    Object.defineProperty(__returned__, "__isScriptSetup", {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});
var import_vue36 = require("vue");
function render12(_ctx, _cache, $props, $setup, $data, $options) {
  return (0, import_vue36.openBlock)(), (0, import_vue36.createBlock)($setup["TwDialog"], {
    open: $setup.open,
    title: $props.title,
    "script-name": "Twinkle",
    "footer-links": $props.footerLinks,
    "primary-action": $setup.primaryAction,
    "onUpdate:open": _cache[4] || (_cache[4] = ($event) => $setup.open = $event),
    onPrimary: $setup.submit
  }, {
    default: (0, import_vue36.withCtx)(() => [(0, import_vue36.createVNode)($setup["CdxCheckbox"], {
      modelValue: $setup.notify,
      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.notify = $event),
      disabled: $setup.submitting
    }, {
      default: (0, import_vue36.withCtx)(() => [(0, import_vue36.createTextVNode)(
        (0, import_vue36.toDisplayString)($setup.uls("通知上传者", "通知上傳者")),
        1
        /* TEXT */
      )]),
      _: 1
      /* STABLE */
    }, 8, ["modelValue", "disabled"]), (0, import_vue36.createVNode)($setup["CdxField"], {
      "is-fieldset": ""
    }, {
      label: (0, import_vue36.withCtx)(() => [(0, import_vue36.createTextVNode)(
        (0, import_vue36.toDisplayString)($setup.uls("需要的动作", "需要的動作")),
        1
        /* TEXT */
      )]),
      default: (0, import_vue36.withCtx)(() => [((0, import_vue36.openBlock)(), (0, import_vue36.createElementBlock)(
        import_vue36.Fragment,
        null,
        (0, import_vue36.renderList)($setup.typeOptions, (option) => {
          return (0, import_vue36.createVNode)($setup["CdxRadio"], {
            key: `${option.value}-${option.label}`,
            modelValue: $setup.selectedType,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.selectedType = $event),
            name: "twinkle-image-type",
            "input-value": option.value,
            disabled: $setup.submitting
          }, {
            default: (0, import_vue36.withCtx)(() => [(0, import_vue36.createTextVNode)(
              (0, import_vue36.toDisplayString)(option.label),
              1
              /* TEXT */
            )]),
            _: 2
            /* DYNAMIC */
          }, 1032, ["modelValue", "input-value", "disabled"]);
        }),
        64
        /* STABLE_FRAGMENT */
      ))]),
      _: 1
      /* STABLE */
    }), $setup.showF1Source ? ((0, import_vue36.openBlock)(), (0, import_vue36.createBlock)($setup["CdxField"], {
      key: 0
    }, {
      label: (0, import_vue36.withCtx)(() => [(0, import_vue36.createTextVNode)(
        (0, import_vue36.toDisplayString)($setup.uls("侵权来源：", "侵權來源：")),
        1
        /* TEXT */
      )]),
      default: (0, import_vue36.withCtx)(() => [(0, import_vue36.createVNode)($setup["CdxTextArea"], {
        modelValue: $setup.f1Source,
        "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $setup.f1Source = $event),
        disabled: $setup.submitting
      }, null, 8, ["modelValue", "disabled"])]),
      _: 1
      /* STABLE */
    })) : (0, import_vue36.createCommentVNode)("v-if", true), $setup.showF4Type ? ((0, import_vue36.openBlock)(), (0, import_vue36.createBlock)($setup["CdxField"], {
      key: 1
    }, {
      label: (0, import_vue36.withCtx)(() => [(0, import_vue36.createTextVNode)(
        (0, import_vue36.toDisplayString)($setup.uls("适用类型：", "適用類別：")),
        1
        /* TEXT */
      )]),
      default: (0, import_vue36.withCtx)(() => [(0, import_vue36.createVNode)($setup["CdxSelect"], {
        selected: $setup.f4Type,
        "onUpdate:selected": _cache[3] || (_cache[3] = ($event) => $setup.f4Type = $event),
        "menu-items": $setup.f4TypeOptions,
        disabled: $setup.submitting
      }, null, 8, ["selected", "menu-items", "disabled"])]),
      _: 1
      /* STABLE */
    })) : (0, import_vue36.createCommentVNode)("v-if", true), (0, import_vue36.createVNode)(
      $setup["TwStatus"],
      {
        ref: "statusRef"
      },
      null,
      512
      /* NEED_PATCH */
    )]),
    _: 1
    /* STABLE */
  }, 8, ["open", "title", "footer-links", "primary-action"]);
}
//! src/Twinkle/modules/ui/TwImageDialog.vue
TwImageDialog_default.render = render12;
TwImageDialog_default.__file = "src\\Twinkle\\modules\\ui\\TwImageDialog.vue";
var TwImageDialog_default2 = TwImageDialog_default;
var import_vue37 = require("vue");
var import_codex13 = require("@wikimedia/codex");
var import_vue38 = require("vue");
var TwProtectDialog_default = /* @__PURE__ */ (0, import_vue37.defineComponent)({
  __name: "TwProtectDialog",
  props: {
    isSysop: {
      type: Boolean,
      required: true
    },
    pageExists: {
      type: Boolean,
      required: true
    },
    isScribunto: {
      type: Boolean,
      required: true
    },
    isTemplate: {
      type: Boolean,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    protectionInfo: {
      type: Object,
      required: true
    },
    footerLinks: {
      type: Array,
      required: true
    },
    protectionLevels: {
      type: Array,
      required: true
    },
    protectionLengths: {
      type: Array,
      required: true
    },
    protectionTypesAdmin: {
      type: Array,
      required: true
    },
    protectionTypesCreateOnly: {
      type: Array,
      required: true
    },
    protectionTypesCreate: {
      type: Array,
      required: true
    },
    protectionTags: {
      type: Array,
      required: true
    },
    protectionPresetsInfo: {
      type: Object,
      required: true
    }
  },
  emits: ["close"],
  setup(__props, {
    expose: __expose,
    emit: __emit
  }) {
    __expose();
    const props = __props;
    const emit = __emit;
    const open = (0, import_vue38.ref)(true);
    const submitting = (0, import_vue38.ref)(false);
    const actiontype = (0, import_vue38.ref)(props.isSysop ? "protect" : "request");
    const category = (0, import_vue38.ref)("");
    const editmodify = (0, import_vue38.ref)(true);
    const movemodify = (0, import_vue38.ref)(true);
    const editlevel = (0, import_vue38.ref)("sysop");
    const movelevel = (0, import_vue38.ref)("sysop");
    const createlevel = (0, import_vue38.ref)("sysop");
    const editexpiry = (0, import_vue38.ref)("1 week");
    const moveexpiry = (0, import_vue38.ref)("1 week");
    const createexpiry = (0, import_vue38.ref)("1 week");
    const protectReason = (0, import_vue38.ref)("");
    const close = (0, import_vue38.ref)(true);
    const tagtype = (0, import_vue38.ref)("pp-vandalism");
    const small = (0, import_vue38.ref)(false);
    const noinclude = (0, import_vue38.ref)(props.isTemplate);
    const showexpiry = (0, import_vue38.ref)(true);
    const expiry = (0, import_vue38.ref)("");
    const reason = (0, import_vue38.ref)("");
    const statusRef = (0, import_vue38.ref)(null);
    const customEditExpiries = (0, import_vue38.ref)([]);
    const customMoveExpiries = (0, import_vue38.ref)([]);
    const customCreateExpiries = (0, import_vue38.ref)([]);
    const customEditDate = (0, import_vue38.ref)("");
    const customMoveDate = (0, import_vue38.ref)("");
    const customCreateDate = (0, import_vue38.ref)("");
    const tagRadioDisabled = (0, import_vue38.computed)(() => !props.pageExists || props.isScribunto);
    const showPresetField = (0, import_vue38.computed)(() => actiontype.value !== "tag");
    const showTagField = (0, import_vue38.computed)(() => actiontype.value === "tag" || actiontype.value === "protect" && props.pageExists && !props.isScribunto);
    const showProtectField = (0, import_vue38.computed)(() => actiontype.value === "protect");
    const showRequestField = (0, import_vue38.computed)(() => actiontype.value === "request");
    const showShowexpiry = (0, import_vue38.computed)(() => actiontype.value !== "tag");
    const flattenGroups = (groups) => {
      const items = [];
      for (const [groupIndex, group] of groups.entries()) {
        if (group.list) {
          items.push({
            value: `__group_${groupIndex}`,
            label: group.label,
            disabled: true
          });
          for (const item of group.list) {
            items.push({
              value: item.value,
              label: item.label
            });
          }
        } else if (group.value !== void 0) {
          items.push({
            value: group.value,
            label: group.label
          });
        }
      }
      return items;
    };
    const categoryOptions = (0, import_vue38.computed)(() => {
      let list;
      if (actiontype.value === "request") {
        list = props.pageExists ? [...props.protectionTypesAdmin, ...props.protectionTypesCreateOnly] : props.protectionTypesCreate;
      } else {
        list = props.pageExists ? props.protectionTypesAdmin : props.protectionTypesCreate;
      }
      return flattenGroups(list);
    });
    const firstCategoryValue = (0, import_vue38.computed)(() => {
      const list = actiontype.value === "request" ? props.pageExists ? [...props.protectionTypesAdmin, ...props.protectionTypesCreateOnly] : props.protectionTypesCreate : props.pageExists ? props.protectionTypesAdmin : props.protectionTypesCreate;
      for (const group of list) {
        if (group.list) {
          const firstItem = group.list[0];
          if (firstItem) {
            return firstItem.value;
          }
        } else if (group.value !== void 0) {
          return group.value;
        }
      }
      return "";
    });
    const editlevelItems = (0, import_vue38.computed)(() => props.protectionLevels.filter((level) => props.isTemplate || level.value !== "templateeditor").map((level) => ({
      value: level.value,
      label: level.label
    })));
    const movelevelItems = (0, import_vue38.computed)(() => props.protectionLevels.filter((level) => level.value !== "autoconfirmed" && (props.isTemplate || level.value !== "templateeditor")).map((level) => ({
      value: level.value,
      label: level.label
    })));
    const createlevelItems = (0, import_vue38.computed)(() => props.protectionLevels.filter((level) => level.value !== "templateeditor").map((level) => ({
      value: level.value,
      label: level.label
    })));
    const tagtypeItems = (0, import_vue38.computed)(() => flattenGroups(props.protectionTags));
    const baseExpiryItems = (0, import_vue38.computed)(() => props.protectionLengths.map((item) => ({
      value: item.value,
      label: item.label
    })));
    const customExpiryLabel = (item) => {
      const match = /^(\d{4}-\d{2}-\d{2})T\d{2}:\d{2}:/.exec(item);
      if (!match) {
        return item;
      }
      const beijing = new Date(new Date(item).getTime() + UTC8_OFFSET_MINUTES * 6e4);
      const pad = (num) => String(num).padStart(2, "0");
      return `${match[1]} ${pad(beijing.getUTCHours())}:${pad(beijing.getUTCMinutes())} (UTC+8)`;
    };
    const editExpiryItems = (0, import_vue38.computed)(() => [...baseExpiryItems.value, ...customEditExpiries.value.map((item) => ({
      value: item,
      label: customExpiryLabel(item)
    }))]);
    const moveExpiryItems = (0, import_vue38.computed)(() => [...baseExpiryItems.value, ...customMoveExpiries.value.map((item) => ({
      value: item,
      label: customExpiryLabel(item)
    }))]);
    const createExpiryItems = (0, import_vue38.computed)(() => [...baseExpiryItems.value, ...customCreateExpiries.value.map((item) => ({
      value: item,
      label: customExpiryLabel(item)
    }))]);
    const editlevelDisabled = (0, import_vue38.computed)(() => !editmodify.value);
    const editexpiryDisabled = (0, import_vue38.computed)(() => !editmodify.value || editlevel.value === "all");
    const movelevelDisabled = (0, import_vue38.computed)(() => !movemodify.value);
    const moveexpiryDisabled = (0, import_vue38.computed)(() => !movemodify.value || movelevel.value === "all");
    const createexpiryDisabled = (0, import_vue38.computed)(() => createlevel.value === "all");
    const tagOptionsDisabled = (0, import_vue38.computed)(() => tagtype.value === "none" || tagtype.value === "noop");
    const requestExpiryDisabled = (0, import_vue38.computed)(() => category.value === "unprotect");
    const firstProtectionLength = (0, import_vue38.computed)(() => {
      var _props$protectionLeng;
      return ((_props$protectionLeng = props.protectionLengths[0]) === null || _props$protectionLeng === void 0 ? void 0 : _props$protectionLeng.value) ?? "1 day";
    });
    const beijingToday = (0, import_vue38.computed)(() => new Date(Date.now() + UTC8_OFFSET_MINUTES * 6e4).toISOString().slice(0, 10));
    const applyCustomDate = (target, value) => {
      const iso = beijingDateToISO(value);
      if (target === "edit") {
        if (iso !== value && !customEditExpiries.value.includes(iso)) {
          customEditExpiries.value.push(iso);
        }
        if (iso === value) {
          editexpiry.value = firstProtectionLength.value;
          small.value = false;
        } else {
          editexpiry.value = iso;
          small.value = true;
        }
      } else if (target === "move") {
        if (iso !== value && !customMoveExpiries.value.includes(iso)) {
          customMoveExpiries.value.push(iso);
        }
        moveexpiry.value = iso === value ? firstProtectionLength.value : iso;
      } else {
        if (iso !== value && !customCreateExpiries.value.includes(iso)) {
          customCreateExpiries.value.push(iso);
        }
        createexpiry.value = iso === value ? firstProtectionLength.value : iso;
      }
    };
    (0, import_vue38.watch)(editexpiry, (value) => {
      if (value === "custom") {
        return;
      }
      customEditDate.value = "";
      const index = props.protectionLengths.findIndex((item) => item.value === value);
      if (index !== -1) {
        small.value = index >= 4;
      }
    });
    (0, import_vue38.watch)(moveexpiry, (value) => {
      if (value !== "custom") {
        customMoveDate.value = "";
      }
    });
    (0, import_vue38.watch)(createexpiry, (value) => {
      if (value !== "custom") {
        customCreateDate.value = "";
      }
    });
    (0, import_vue38.watch)(movemodify, () => {
      if (editmodify.value) {
        movelevel.value = editlevel.value;
        moveexpiry.value = editexpiry.value;
      } else {
        movelevel.value = "sysop";
        moveexpiry.value = "infinity";
      }
    });
    (0, import_vue38.watch)(category, (value) => {
      if (!value) {
        return;
      }
      if (actiontype.value === "protect") {
        const item = props.protectionPresetsInfo[value];
        if (!item) {
          return;
        }
        if (props.pageExists) {
          if (item.edit) {
            editmodify.value = true;
            editlevel.value = item.edit;
          } else {
            editmodify.value = false;
          }
          if (item.move) {
            movemodify.value = true;
            movelevel.value = item.move;
          } else {
            movemodify.value = false;
          }
          editexpiry.value = item.expiry || "1 week";
          moveexpiry.value = item.expiry || "1 week";
        } else {
          if (item.create) {
            createlevel.value = item.create;
          }
          createexpiry.value = item.expiry || "1 week";
        }
        protectReason.value = item.reason ?? "";
        if (props.pageExists && !props.isScribunto) {
          tagtype.value = value === "unprotect" ? "none" : item.template ?? value;
          if (/template/.test(value)) {
            noinclude.value = true;
          } else if (mw.config.get("wgNamespaceNumber") !== 10) {
            noinclude.value = false;
          }
        }
      } else {
        expiry.value = "";
      }
    });
    (0, import_vue38.watch)(actiontype, () => {
      category.value = firstCategoryValue.value;
    });
    category.value = firstCategoryValue.value;
    const buildParams = () => ({
      actiontype: actiontype.value,
      category: category.value,
      editmodify: editmodify.value,
      movemodify: movemodify.value,
      editlevel: editlevel.value,
      movelevel: movelevel.value,
      createlevel: createlevel.value,
      editexpiry: editexpiry.value,
      moveexpiry: moveexpiry.value,
      createexpiry: createexpiry.value,
      protectReason: protectReason.value,
      close: close.value,
      tagtype: tagtype.value,
      small: small.value,
      noinclude: noinclude.value,
      showexpiry: showexpiry.value,
      expiry: expiry.value,
      reason: reason.value
    });
    const primaryAction = (0, import_vue38.computed)(() => ({
      label: uls("提交", "提交"),
      actionType: "progressive",
      disabled: submitting.value
    }));
    const submit = () => {
      var _statusRef$value14;
      if (submitting.value) {
        return;
      }
      submitting.value = true;
      evaluate(buildParams(), ((_statusRef$value14 = statusRef.value) === null || _statusRef$value14 === void 0 ? void 0 : _statusRef$value14.getStatusRoot()) ?? null, () => {
        submitting.value = false;
      });
    };
    (0, import_vue38.watch)(open, (value) => {
      if (!value) {
        emit("close");
      }
    });
    const callbacks = {
      taggingPageInitial: (tagparams) => {
        if (tagparams.tag === "noop") {
          Morebits.status.info(uls("应用保护模板", "應用保護模板"), uls("没什么要做的", "沒什麼要做的"));
          return;
        }
        const pageName = mw.config.get("wgPageName");
        const protectedPage = new Morebits.wiki.page(pageName, uls("标记页面", "標記頁面"));
        protectedPage.setCallbackParameters(tagparams);
        protectedPage.load(callbacks.taggingPage);
      },
      getTaggedPage: (params, text) => {
        let tag;
        let summary;
        const oldtag_re = /(?:<noinclude>)?[ \t]*\{\{\s*(pp-[^{}]*?|protected|(?:t|v|s|p-|usertalk-v|usertalk-s|sb|move)protected(?:2)?|protected template|privacy protection)\s*?\}\}\s*(?:<\/noinclude>)?\s*/gi;
        const re_result = oldtag_re.exec(text);
        const oldtag = re_result === null || re_result === void 0 ? void 0 : re_result[1];
        if (oldtag && (params.tag === "none" || confirm(uls("在页面上找到{{", "在頁面上找到{{") + oldtag + uls("}}\n单击确定以移除，或单击取消以取消操作。", "}}\n點擊確定以移除，或點擊取消以取消操作。")))) {
          text = text.replace(oldtag_re, "");
        }
        if (params.tag === "none") {
          summary = uls("移除保护模板", "移除保護模板");
        } else {
          tag = params.tag;
          if (params.reason) {
            tag += `|reason=${params.reason}`;
          }
          if (params.showexpiry && params.expiry && !Morebits.string.isInfinity(params.expiry)) {
            tag += "|expiry={{".concat("subst:", `#time:c|${params.expiry}}}`);
          }
          if (params.small) {
            tag += "|small=yes";
          }
          if (/^\s*#(?:redirect|重定向|重新導向)/i.test(text)) {
            if (text.match(/{{(?:Redirect[ _]category shell|Rcat[ _]shell|This[ _]is a redirect|多种类型重定向|多種類型重定向|多種類型重新導向|多种类型重新导向|R0|其他重定向|RCS|Redirect[ _]shell)/i)) {
              Morebits.status.info("已存在Redirect category shell", uls("没什么可做的", "沒什麼可做的"));
              return;
            }
            text = text.replace(/#(?:redirect|重定向|重新導向) ?(\[\[.*?\]\])(.*)/i, `#REDIRECT $1$2

{{${tag}}}`);
          } else {
            if (params.noinclude) {
              tag = `<noinclude>{{${tag}}}</noinclude>`;
              if (text.indexOf("{|") === 0) {
                tag += "\n";
              }
            } else {
              tag = `{{${tag}}}
`;
            }
            const qiuwen_page = new Morebits.wikitext.page(text);
            text = qiuwen_page.insertAfterTemplates(tag, Twinkle.hatnoteRegex).getText();
          }
          summary = `加入{{${params.tag}}}`;
        }
        return {
          text,
          summary
        };
      },
      taggingPage: (protectedPage) => {
        const params = protectedPage.getCallbackParameters();
        const text = protectedPage.getPageText() ?? "";
        const newVersion = callbacks.getTaggedPage(params, text);
        if (newVersion === void 0) {
          protectedPage.getStatusElement().info("完成");
          return;
        }
        protectedPage.setEditSummary(newVersion.summary);
        protectedPage.setChangeTags(Twinkle.changeTags);
        protectedPage.setWatchlist(Twinkle.getPref("watchPPTaggedPages"));
        protectedPage.setPageText(newVersion.text);
        protectedPage.setCreateOption("nocreate");
        protectedPage.suppressProtectWarning();
        protectedPage.save();
      },
      fileRequest: (rppPage) => {
        const params = rppPage.getCallbackParameters();
        let text = rppPage.getPageText() ?? "";
        const statusElement = rppPage.getStatusElement();
        const rppRe = new RegExp(`===\\s*(\\[\\[)?\\s*:?\\s*${Morebits.string.escapeRegExp(Morebits.pageNameNorm)}\\s*(\\]\\])?\\s*===`, "m");
        const tag = rppRe.exec(text);
        const rppLink = document.createElement("a");
        rppLink.setAttribute("href", mw.util.getUrl(rppPage.getPageName()));
        rppLink.appendChild(document.createTextNode(rppPage.getPageName()));
        if (tag) {
          statusElement.error([rppLink, uls("已有对此页面的保护提名，取消操作。", "已有對此頁面的保護提名，取消操作。")]);
          return;
        }
        let newtag = `=== [[:${Morebits.pageNameNorm}]] ===
`;
        if (new RegExp(`^${mw.util.escapeRegExp(newtag).replace(/\s+/g, String.raw`\s*`)}`, "m").test(text)) {
          statusElement.error([rppLink, uls("已有对此页面的保护提名，取消操作。", "已有對此頁面的保護提名，取消操作。")]);
          return;
        }
        let words;
        switch (params.expiry) {
          case "temporary":
            words = uls("临时", "臨時");
            break;
          case "infinity":
            words = "永久";
            break;
          default:
            words = "";
            break;
        }
        words += params.typename;
        newtag += `* <span style="font-size: 90%">${uls("当前保护状态", "目前保護狀態")}：{{protection status|${/[=]/.test(Morebits.pageNameNorm) ? "1=" : ""}${Morebits.pageNameNorm}}}</span>
`;
        newtag += `${uls("请求", "請求") + Morebits.string.toUpperCaseFirstChar(words) + (params.reason === "" ? "。" : `：${Morebits.string.formatReasonText(params.reason)}`)}——~~`.concat("~~");
        if (!text.endsWith("\n")) {
          text += "\n";
        }
        text += `${newtag}
`;
        statusElement.status("加入新提名…");
        rppPage.setEditSummary(`/* ${Morebits.pageNameNorm} */ ${uls("请求对", "請求對")}[[${Morebits.pageNameNorm}]]${params.typename}`);
        rppPage.setChangeTags(Twinkle.changeTags);
        rppPage.setPageText(text);
        rppPage.setCreateOption("recreate");
        rppPage.save(() => {
          const watchPref = Twinkle.getPref("watchRequestedPages");
          const watch19 = watchPref !== "no" && (watchPref !== "default" || !!Number.parseInt(mw.user.options.get("watchdefault") ?? "", 10));
          if (watch19) {
            var _Twinkle$protect;
            const watch_query = {
              action: "watch",
              titles: mw.config.get("wgPageName"),
              token: mw.user.tokens.get("watchToken")
            };
            if (((_Twinkle$protect = Twinkle.protect) === null || _Twinkle$protect === void 0 ? void 0 : _Twinkle$protect.watched) !== true && watchPref !== "default" && watchPref !== "yes") {
              watch_query.expiry = watchPref;
            }
            new Morebits.wiki.api(uls("将请求保护的页面加入到监视列表", "將請求保護的頁面加入到監視清單"), watch_query).post();
          }
        });
      },
      closeRequest: (rppPage) => {
        const params = rppPage.getCallbackParameters();
        let text = rppPage.getPageText() ?? "";
        const statusElement = rppPage.getStatusElement();
        let expiryText = "";
        if (params.type !== "unprotect") {
          expiryText = /^\d{4}-\d{2}-\d{2}T/.test(params.expiry ?? "") ? new Morebits.date(params.expiry ?? "").format("YYYY-MM-DD HH:mm", UTC8_OFFSET_MINUTES) : Morebits.string.formatTime(params.expiry ?? "");
        }
        const requestList = text.split(/(?=\n===.+===\s*\n)/);
        let found = false;
        const rppRe = new RegExp(`===\\s*(\\[\\[)?\\s*:?\\s*${Morebits.pageNameRegex(Morebits.pageNameNorm)}\\s*(\\]\\])?\\s*===`, "m");
        for (const [index, item] of requestList.entries()) {
          if (rppRe.exec(item)) {
            let request = item.trimEnd();
            if (params.type === "unprotect") {
              request += "\n: {{RFPP|isun}}。——~~".concat("~~\n");
            } else {
              request += `
: {{RFPP|${params.type}|${Morebits.string.isInfinity(params.expiry ?? "") ? "infinity" : expiryText}}}。——~~`.concat("~~\n");
            }
            requestList[index] = request;
            found = true;
            break;
          }
        }
        if (!found) {
          statusElement.warn(uls("没有找到相关的请求", "沒有找到相關的請求"));
          return;
        }
        text = requestList.join("");
        let summary = "";
        switch (params.type) {
          case "semi":
            summary = uls("半保护", "半保護");
            break;
          case "temp":
            summary = uls("模板保护", "模板保護");
            break;
          case "full":
            summary = uls("全保护", "全保護");
            break;
          case "revisionprotected":
            summary = uls("版本保护", "版本保護");
            break;
          case "officialprotected":
            summary = uls("裁委会保护", "裁委會保護");
            break;
          case "move":
            summary = uls("移动保护", "移動保護");
            break;
          case "salt":
            summary = uls("白纸保护", "白紙保護");
            break;
          case "unprotect":
            summary = uls("解除保护", "解除保護");
            break;
          default:
            statusElement.warn(uls("未知保护类型", "未知保護類別"));
            return;
        }
        if (Morebits.string.isInfinity(params.expiry ?? "")) {
          summary = expiryText + summary;
        } else {
          summary += expiryText;
        }
        rppPage.setEditSummary(`/* ${Morebits.pageNameNorm} */ ${summary}`);
        rppPage.setChangeTags(Twinkle.changeTags);
        rppPage.setPageText(text);
        rppPage.save();
      }
    };
    const evaluate = (input, statusContainer, restore) => {
      input.editexpiry = normalizeExpiry(input.editexpiry ?? "");
      input.moveexpiry = normalizeExpiry(input.moveexpiry ?? "");
      input.createexpiry = normalizeExpiry(input.createexpiry ?? "");
      let tagparams;
      if (input.actiontype === "tag" || input.actiontype === "protect" && mw.config.get("wgArticleId") && mw.config.get("wgPageContentModel") !== "Scribunto") {
        tagparams = {
          tag: input.tagtype,
          reason: (input.tagtype === "pp-protected" || input.tagtype === "pp-semi-protected" || input.tagtype === "pp-move") && input.protectReason ? input.protectReason : null,
          showexpiry: input.actiontype === "protect" ? input.showexpiry : null,
          small: input.small,
          noinclude: input.noinclude
        };
        if (input.actiontype === "protect") {
          if (input.editmodify) {
            tagparams.expiry = input.editexpiry;
          } else if (input.movemodify) {
            tagparams.expiry = input.moveexpiry;
          }
        }
      }
      const closeparams = {};
      if (input.close) {
        if (input.category === "unprotect") {
          closeparams.type = "unprotect";
        } else if (mw.config.get("wgArticleId")) {
          if (input.editmodify) {
            switch (input.editlevel) {
              case "officialprotected":
                closeparams.type = "officialprotected";
                closeparams.expiry = input.editexpiry;
                break;
              case "revisionprotected":
                closeparams.type = "revisionprotected";
                closeparams.expiry = input.editexpiry;
                break;
              case "sysop":
                closeparams.type = "full";
                closeparams.expiry = input.editexpiry;
                break;
              case "templateeditor":
                closeparams.type = "temp";
                closeparams.expiry = input.editexpiry;
                break;
              case "autoconfirmed":
                closeparams.type = "semi";
                closeparams.expiry = input.editexpiry;
                break;
            }
          } else if (input.movemodify && ["officialprotected", "revisionprotected", "sysop", "templateeditor"].includes(input.movelevel)) {
            closeparams.type = "move";
            closeparams.expiry = input.moveexpiry;
          }
        } else if (input.createlevel !== "all") {
          closeparams.type = "salt";
          closeparams.expiry = input.createexpiry;
        }
      }
      switch (input.actiontype) {
        case "protect": {
          Morebits.wiki.actionCompleted.redirect = mw.config.get("wgPageName");
          Morebits.wiki.actionCompleted.notice = uls("保护完成", "保護完成");
          let statusInited = false;
          let thispage;
          const allDone = () => {
            if (thispage) {
              thispage.getStatusElement().info("完成");
            }
            if (tagparams) {
              callbacks.taggingPageInitial(tagparams);
            }
            if (closeparams.type) {
              const rppPage = new Morebits.wiki.page("Qiuwen_talk:页面保护请求", uls("关闭请求", "關閉請求"));
              rppPage.setFollowRedirect(true);
              rppPage.setCallbackParameters(closeparams);
              rppPage.load(callbacks.closeRequest);
            }
          };
          const protectIt = (next) => {
            thispage = new Morebits.wiki.page(mw.config.get("wgPageName"), uls("保护页面", "保護頁面"));
            if (mw.config.get("wgArticleId")) {
              if (input.editmodify) {
                thispage.setEditProtection(input.editlevel, input.editexpiry);
              }
              if (input.movemodify) {
                if (input.movelevel) {
                  thispage.setMoveProtection(input.movelevel, input.moveexpiry);
                } else {
                  void mw.notify(uls("您需要选择保护层级！", "您需要選擇保護層級！"), {
                    type: "warn",
                    tag: "twinkleprotect"
                  });
                  if (restore) {
                    restore();
                  }
                  return;
                }
              }
              thispage.setWatchlist(Twinkle.getPref("watchProtectedPages"));
            } else {
              thispage.setCreateProtection(input.createlevel, input.createexpiry);
              thispage.setWatchlist(false);
            }
            if (input.protectReason) {
              thispage.setEditSummary(input.protectReason);
              thispage.setChangeTags(Twinkle.changeTags);
            } else {
              void mw.notify(uls("您必须输入保护理由，这将被记录在保护日志中。", "您必須輸入保護理由，這將被記錄在保護日誌中。"), {
                type: "warn",
                tag: "twinkleprotect"
              });
              if (restore) {
                restore();
              }
              return;
            }
            if (!statusInited) {
              Morebits.status.init(statusContainer);
              statusInited = true;
            }
            thispage.setChangeTags(Twinkle.changeTags);
            thispage.protect(next);
          };
          if (input.editmodify || input.movemodify || !mw.config.get("wgArticleId")) {
            protectIt(allDone);
          } else {
            void mw.notify(uls("请告诉Twinkle要做什么！\n若您只是想标记该页，请选择上面的“用保护模板标记此页”选项。", "請告訴Twinkle要做什麼！\n若您只是想標記該頁，請選擇上面的「用保護模板標記此頁」選項。"), {
              type: "warn",
              tag: "twinkleprotect"
            });
            if (restore) {
              restore();
            }
          }
          break;
        }
        case "tag":
          Morebits.status.init(statusContainer);
          Morebits.wiki.actionCompleted.redirect = mw.config.get("wgPageName");
          Morebits.wiki.actionCompleted.followRedirect = false;
          Morebits.wiki.actionCompleted.notice = uls("标记完成", "標記完成");
          if (tagparams) {
            callbacks.taggingPageInitial(tagparams);
          }
          break;
        case "request": {
          let typename;
          let typereason;
          switch (input.category) {
            case "pp-dispute":
            case "pp-protected":
              typename = uls("全保护", "全保護");
              break;
            case "pp-template":
              typename = uls("模板保护", "模板保護");
              break;
            case "pp-vandalism":
            case "pp-semi-disruptive":
            case "pp-semi-unsourced":
            case "pp-semi-vandalism":
            case "pp-semi-usertalk":
            case "pp-semi-template":
            // removed for now
            case "pp-semi-sock":
            case "pp-semi-blp":
            case "pp-semi-protected":
              typename = uls("半保护", "半保護");
              break;
            case "pp-move":
            case "pp-move-dispute":
            case "pp-move-indef":
            case "pp-move-vandalism":
              typename = uls("移动保护", "移動保護");
              break;
            case "pp-create":
            case "pp-create-offensive":
            case "pp-create-blp":
            case "pp-create-salt":
            case "pp-create-userpage":
            case "pp-create-repeat":
            case "pp-create-vandalism":
              typename = uls("白纸保护", "白紙保護");
              break;
            /* case 'unprotect': */
            /* falls through */
            default:
              typename = uls("解除保护", "解除保護");
              break;
          }
          switch (input.category) {
            case "pp-dispute":
              typereason = uls("争议、编辑战", "爭議、編輯戰");
              break;
            case "pp-vandalism":
            case "pp-semi-vandalism":
            case "pp-create-vandalism":
              typereason = uls("持续破坏", "持續破壞");
              break;
            case "pp-template":
            case "pp-semi-template":
              typereason = uls("高风险模板", "高風險模板");
              break;
            case "pp-create-userpage":
              typereason = uls("被永久封禁的用户页", "被永久封鎖的使用者頁面");
              break;
            case "pp-semi-usertalk":
              typereason = uls("已封禁用户的讨论页", "已封鎖使用者的討論頁");
              break;
            case "pp-semi-sock":
              typereason = uls("傀儡破坏", "傀儡破壞");
              break;
            case "pp-semi-blp":
              typereason = uls("违反生者传记条例", "違反生者傳記條例");
              break;
            case "pp-move-dispute":
              typereason = uls("争议、移动战", "爭議、移動戰");
              break;
            case "pp-move-vandalism":
              typereason = uls("移动破坏", "移動破壞");
              break;
            case "pp-move-indef":
              typereason = uls("高风险页面", "高風險頁面");
              break;
            case "pp-create-repeat":
              typereason = uls("多次重复创建", "多次重複建立");
              break;
            default:
              typereason = "";
              break;
          }
          let reason2 = typereason;
          if (input.reason !== "") {
            if (typereason !== "") {
              reason2 += "：";
            }
            reason2 += input.reason;
          }
          if (reason2 !== "") {
            reason2 = Morebits.string.appendPunctuation(reason2);
          }
          const rppparams = {
            reason: reason2,
            typename,
            category: input.category,
            expiry: input.expiry
          };
          Morebits.status.init(statusContainer);
          const rppName = "Qiuwen_talk:页面保护请求";
          Morebits.wiki.actionCompleted.redirect = rppName;
          Morebits.wiki.actionCompleted.notice = uls("提名完成，重定向到讨论页", "提名完成，重新導向到討論頁");
          const rppPage = new Morebits.wiki.page(rppName, uls("请求保护页面", "請求保護頁面"));
          rppPage.setFollowRedirect(true);
          rppPage.setCallbackParameters(rppparams);
          rppPage.load(callbacks.fileRequest);
          break;
        }
        default:
          void mw.notify("twinkleprotect: 未知操作类型", {
            type: "warn",
            tag: "twinkleprotect"
          });
          break;
      }
    };
    const __returned__ = {
      props,
      emit,
      open,
      submitting,
      actiontype,
      category,
      editmodify,
      movemodify,
      editlevel,
      movelevel,
      createlevel,
      editexpiry,
      moveexpiry,
      createexpiry,
      protectReason,
      close,
      tagtype,
      small,
      noinclude,
      showexpiry,
      expiry,
      reason,
      statusRef,
      customEditExpiries,
      customMoveExpiries,
      customCreateExpiries,
      customEditDate,
      customMoveDate,
      customCreateDate,
      tagRadioDisabled,
      showPresetField,
      showTagField,
      showProtectField,
      showRequestField,
      showShowexpiry,
      flattenGroups,
      categoryOptions,
      firstCategoryValue,
      editlevelItems,
      movelevelItems,
      createlevelItems,
      tagtypeItems,
      baseExpiryItems,
      customExpiryLabel,
      editExpiryItems,
      moveExpiryItems,
      createExpiryItems,
      editlevelDisabled,
      editexpiryDisabled,
      movelevelDisabled,
      moveexpiryDisabled,
      createexpiryDisabled,
      tagOptionsDisabled,
      requestExpiryDisabled,
      firstProtectionLength,
      beijingToday,
      applyCustomDate,
      buildParams,
      primaryAction,
      submit,
      callbacks,
      evaluate,
      get CdxCheckbox() {
        return import_codex13.CdxCheckbox;
      },
      get CdxField() {
        return import_codex13.CdxField;
      },
      get CdxRadio() {
        return import_codex13.CdxRadio;
      },
      get CdxSelect() {
        return import_codex13.CdxSelect;
      },
      get CdxTextArea() {
        return import_codex13.CdxTextArea;
      },
      TwDialog: TwDialog_default2,
      TwStatus: TwStatus_default2,
      get uls() {
        return uls;
      }
    };
    Object.defineProperty(__returned__, "__isScriptSetup", {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});
var import_vue39 = require("vue");
var _hoisted_110 = {
  key: 0,
  class: "tw-protect-loginfo"
};
var _hoisted_29 = ["href"];
var _hoisted_36 = ["min", "disabled"];
var _hoisted_45 = ["min", "disabled"];
function render13(_ctx, _cache, $props, $setup, $data, $options) {
  return (0, import_vue39.openBlock)(), (0, import_vue39.createBlock)($setup["TwDialog"], {
    open: $setup.open,
    title: $props.title,
    "script-name": "Twinkle",
    "footer-links": $props.footerLinks,
    "primary-action": $setup.primaryAction,
    "onUpdate:open": _cache[24] || (_cache[24] = ($event) => $setup.open = $event),
    onPrimary: $setup.submit
  }, {
    default: (0, import_vue39.withCtx)(() => [(0, import_vue39.createVNode)($setup["CdxField"], {
      "is-fieldset": ""
    }, {
      label: (0, import_vue39.withCtx)(() => [(0, import_vue39.createTextVNode)(
        (0, import_vue39.toDisplayString)($setup.uls("操作类型", "操作類別")),
        1
        /* TEXT */
      )]),
      default: (0, import_vue39.withCtx)(() => [$props.isSysop ? ((0, import_vue39.openBlock)(), (0, import_vue39.createBlock)($setup["CdxRadio"], {
        key: 0,
        modelValue: $setup.actiontype,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.actiontype = $event),
        name: "twinkle-protect-actiontype",
        "input-value": "protect",
        disabled: $setup.submitting
      }, {
        default: (0, import_vue39.withCtx)(() => [(0, import_vue39.createTextVNode)(
          (0, import_vue39.toDisplayString)($setup.uls("保护页面", "保護頁面")),
          1
          /* TEXT */
        )]),
        _: 1
        /* STABLE */
      }, 8, ["modelValue", "disabled"])) : (0, import_vue39.createCommentVNode)("v-if", true), (0, import_vue39.createVNode)($setup["CdxRadio"], {
        modelValue: $setup.actiontype,
        "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.actiontype = $event),
        name: "twinkle-protect-actiontype",
        "input-value": "request",
        disabled: $setup.submitting
      }, {
        default: (0, import_vue39.withCtx)(() => [(0, import_vue39.createTextVNode)(
          (0, import_vue39.toDisplayString)($setup.uls("请求保护页面", "請求保護頁面")),
          1
          /* TEXT */
        )]),
        _: 1
        /* STABLE */
      }, 8, ["modelValue", "disabled"]), (0, import_vue39.createVNode)($setup["CdxRadio"], {
        modelValue: $setup.actiontype,
        "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $setup.actiontype = $event),
        name: "twinkle-protect-actiontype",
        "input-value": "tag",
        disabled: $setup.submitting || $setup.tagRadioDisabled
      }, {
        default: (0, import_vue39.withCtx)(() => [(0, import_vue39.createTextVNode)(
          (0, import_vue39.toDisplayString)($setup.uls("用保护模板标记此页", "用保護模板標記此頁")),
          1
          /* TEXT */
        )]),
        _: 1
        /* STABLE */
      }, 8, ["modelValue", "disabled"])]),
      _: 1
      /* STABLE */
    }), $props.protectionInfo.previousNotice ? ((0, import_vue39.openBlock)(), (0, import_vue39.createElementBlock)("div", _hoisted_110, [(0, import_vue39.createTextVNode)(
      (0, import_vue39.toDisplayString)($props.protectionInfo.previousNotice) + " ",
      1
      /* TEXT */
    ), (0, import_vue39.createElementVNode)("a", {
      href: $props.protectionInfo.logLink,
      target: "_blank",
      rel: "noopener noreferrer"
    }, (0, import_vue39.toDisplayString)($setup.uls("保护日志", "保護日誌")), 9, _hoisted_29)])) : (0, import_vue39.createCommentVNode)("v-if", true), $props.protectionInfo.currentStatus ? ((0, import_vue39.openBlock)(), (0, import_vue39.createElementBlock)(
      "div",
      {
        key: 1,
        class: (0, import_vue39.normalizeClass)(["tw-protect-current", {
          "tw-protect-current-warn": $props.protectionInfo.currentStatus.severe
        }])
      },
      [(0, import_vue39.createElementVNode)(
        "b",
        null,
        (0, import_vue39.toDisplayString)($setup.uls("当前保护等级", "目前保護等級")) + "：",
        1
        /* TEXT */
      ), (0, import_vue39.createTextVNode)(
        " " + (0, import_vue39.toDisplayString)($props.protectionInfo.currentStatus.text),
        1
        /* TEXT */
      )],
      2
      /* CLASS */
    )) : (0, import_vue39.createCommentVNode)("v-if", true), (0, import_vue39.createCommentVNode)(" field_preset "), $setup.showPresetField ? ((0, import_vue39.openBlock)(), (0, import_vue39.createBlock)($setup["CdxField"], {
      key: 2
    }, {
      label: (0, import_vue39.withCtx)(() => [(0, import_vue39.createTextVNode)(
        (0, import_vue39.toDisplayString)($setup.actiontype === "request" ? $setup.uls("类型和理由：", "類別和理由：") : $setup.uls("选择默认：", "選擇預設：")),
        1
        /* TEXT */
      )]),
      default: (0, import_vue39.withCtx)(() => [(0, import_vue39.createVNode)($setup["CdxSelect"], {
        selected: $setup.category,
        "onUpdate:selected": _cache[3] || (_cache[3] = ($event) => $setup.category = $event),
        "menu-items": $setup.categoryOptions,
        disabled: $setup.submitting
      }, null, 8, ["selected", "menu-items", "disabled"])]),
      _: 1
      /* STABLE */
    })) : (0, import_vue39.createCommentVNode)("v-if", true), (0, import_vue39.createCommentVNode)(" field2: protect options "), $setup.showProtectField ? ((0, import_vue39.openBlock)(), (0, import_vue39.createElementBlock)(
      import_vue39.Fragment,
      {
        key: 3
      },
      [$props.pageExists ? ((0, import_vue39.openBlock)(), (0, import_vue39.createElementBlock)(
        import_vue39.Fragment,
        {
          key: 0
        },
        [(0, import_vue39.createVNode)($setup["CdxCheckbox"], {
          modelValue: $setup.editmodify,
          "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $setup.editmodify = $event),
          disabled: $setup.submitting,
          title: $setup.uls("若此项关闭，编辑权限将不会修改。", "若此項關閉，編輯權限將不會修改。")
        }, {
          default: (0, import_vue39.withCtx)(() => [(0, import_vue39.createTextVNode)(
            (0, import_vue39.toDisplayString)($setup.uls("修改编辑权限", "修改編輯權限")),
            1
            /* TEXT */
          )]),
          _: 1
          /* STABLE */
        }, 8, ["modelValue", "disabled", "title"]), (0, import_vue39.createVNode)($setup["CdxField"], null, {
          label: (0, import_vue39.withCtx)(() => [(0, import_vue39.createTextVNode)(
            (0, import_vue39.toDisplayString)($setup.uls("编辑权限：", "編輯權限：")),
            1
            /* TEXT */
          )]),
          default: (0, import_vue39.withCtx)(() => [(0, import_vue39.createVNode)($setup["CdxSelect"], {
            selected: $setup.editlevel,
            "onUpdate:selected": _cache[5] || (_cache[5] = ($event) => $setup.editlevel = $event),
            "menu-items": $setup.editlevelItems,
            disabled: $setup.submitting || $setup.editlevelDisabled
          }, null, 8, ["selected", "menu-items", "disabled"])]),
          _: 1
          /* STABLE */
        }), (0, import_vue39.createVNode)($setup["CdxField"], null, {
          label: (0, import_vue39.withCtx)(() => [(0, import_vue39.createTextVNode)(
            (0, import_vue39.toDisplayString)($setup.uls("终止时间：", "終止時間：")),
            1
            /* TEXT */
          )]),
          default: (0, import_vue39.withCtx)(() => [(0, import_vue39.createVNode)($setup["CdxSelect"], {
            selected: $setup.editexpiry,
            "onUpdate:selected": _cache[6] || (_cache[6] = ($event) => $setup.editexpiry = $event),
            "menu-items": $setup.editExpiryItems,
            disabled: $setup.submitting || $setup.editexpiryDisabled
          }, null, 8, ["selected", "menu-items", "disabled"]), $setup.editexpiry === "custom" ? (0, import_vue39.withDirectives)(((0, import_vue39.openBlock)(), (0, import_vue39.createElementBlock)("input", {
            key: 0,
            "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => $setup.customEditDate = $event),
            type: "date",
            class: "tw-protect-custom-date",
            min: $setup.beijingToday,
            disabled: $setup.submitting,
            onChange: _cache[8] || (_cache[8] = ($event) => $setup.applyCustomDate("edit", $setup.customEditDate))
          }, null, 40, _hoisted_36)), [[import_vue39.vModelText, $setup.customEditDate]]) : (0, import_vue39.createCommentVNode)("v-if", true)]),
          _: 1
          /* STABLE */
        }), (0, import_vue39.createVNode)($setup["CdxCheckbox"], {
          modelValue: $setup.movemodify,
          "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => $setup.movemodify = $event),
          disabled: $setup.submitting,
          title: $setup.uls("若此项被关闭，移动权限将不被修改。", "若此項被關閉，移動權限將不被修改。")
        }, {
          default: (0, import_vue39.withCtx)(() => [(0, import_vue39.createTextVNode)(
            (0, import_vue39.toDisplayString)($setup.uls("修改移动权限", "修改移動權限")),
            1
            /* TEXT */
          )]),
          _: 1
          /* STABLE */
        }, 8, ["modelValue", "disabled", "title"]), (0, import_vue39.createVNode)($setup["CdxField"], null, {
          label: (0, import_vue39.withCtx)(() => [(0, import_vue39.createTextVNode)(
            (0, import_vue39.toDisplayString)($setup.uls("移动权限：", "移動權限：")),
            1
            /* TEXT */
          )]),
          default: (0, import_vue39.withCtx)(() => [(0, import_vue39.createVNode)($setup["CdxSelect"], {
            selected: $setup.movelevel,
            "onUpdate:selected": _cache[10] || (_cache[10] = ($event) => $setup.movelevel = $event),
            "menu-items": $setup.movelevelItems,
            disabled: $setup.submitting || $setup.movelevelDisabled
          }, null, 8, ["selected", "menu-items", "disabled"])]),
          _: 1
          /* STABLE */
        }), (0, import_vue39.createVNode)($setup["CdxField"], null, {
          label: (0, import_vue39.withCtx)(() => [(0, import_vue39.createTextVNode)(
            (0, import_vue39.toDisplayString)($setup.uls("终止时间：", "終止時間：")),
            1
            /* TEXT */
          )]),
          default: (0, import_vue39.withCtx)(() => [(0, import_vue39.createVNode)($setup["CdxSelect"], {
            selected: $setup.moveexpiry,
            "onUpdate:selected": _cache[11] || (_cache[11] = ($event) => $setup.moveexpiry = $event),
            "menu-items": $setup.moveExpiryItems,
            disabled: $setup.submitting || $setup.moveexpiryDisabled
          }, null, 8, ["selected", "menu-items", "disabled"]), $setup.moveexpiry === "custom" ? (0, import_vue39.withDirectives)(((0, import_vue39.openBlock)(), (0, import_vue39.createElementBlock)("input", {
            key: 0,
            "onUpdate:modelValue": _cache[12] || (_cache[12] = ($event) => $setup.customMoveDate = $event),
            type: "date",
            class: "tw-protect-custom-date",
            min: $setup.beijingToday,
            disabled: $setup.submitting,
            onChange: _cache[13] || (_cache[13] = ($event) => $setup.applyCustomDate("move", $setup.customMoveDate))
          }, null, 40, _hoisted_45)), [[import_vue39.vModelText, $setup.customMoveDate]]) : (0, import_vue39.createCommentVNode)("v-if", true)]),
          _: 1
          /* STABLE */
        })],
        64
        /* STABLE_FRAGMENT */
      )) : ((0, import_vue39.openBlock)(), (0, import_vue39.createElementBlock)(
        import_vue39.Fragment,
        {
          key: 1
        },
        [(0, import_vue39.createVNode)($setup["CdxField"], null, {
          label: (0, import_vue39.withCtx)(() => [(0, import_vue39.createTextVNode)(
            (0, import_vue39.toDisplayString)($setup.uls("创建权限：", "建立權限：")),
            1
            /* TEXT */
          )]),
          default: (0, import_vue39.withCtx)(() => [(0, import_vue39.createVNode)($setup["CdxSelect"], {
            selected: $setup.createlevel,
            "onUpdate:selected": _cache[14] || (_cache[14] = ($event) => $setup.createlevel = $event),
            "menu-items": $setup.createlevelItems,
            disabled: $setup.submitting
          }, null, 8, ["selected", "menu-items", "disabled"])]),
          _: 1
          /* STABLE */
        }), (0, import_vue39.createVNode)($setup["CdxField"], null, {
          label: (0, import_vue39.withCtx)(() => [(0, import_vue39.createTextVNode)(
            (0, import_vue39.toDisplayString)($setup.uls("终止时间：", "終止時間：")),
            1
            /* TEXT */
          )]),
          default: (0, import_vue39.withCtx)(() => [(0, import_vue39.createVNode)($setup["CdxSelect"], {
            selected: $setup.createexpiry,
            "onUpdate:selected": _cache[15] || (_cache[15] = ($event) => $setup.createexpiry = $event),
            "menu-items": $setup.createExpiryItems,
            disabled: $setup.submitting || $setup.createexpiryDisabled
          }, null, 8, ["selected", "menu-items", "disabled"])]),
          _: 1
          /* STABLE */
        })],
        64
        /* STABLE_FRAGMENT */
      )), (0, import_vue39.createVNode)($setup["CdxCheckbox"], {
        modelValue: $setup.close,
        "onUpdate:modelValue": _cache[16] || (_cache[16] = ($event) => $setup.close = $event),
        disabled: $setup.submitting
      }, {
        default: (0, import_vue39.withCtx)(() => [(0, import_vue39.createTextVNode)(
          (0, import_vue39.toDisplayString)($setup.uls("标记请求保护页面中的请求", "標記請求保護頁面中的請求")),
          1
          /* TEXT */
        )]),
        _: 1
        /* STABLE */
      }, 8, ["modelValue", "disabled"]), (0, import_vue39.createVNode)($setup["CdxField"], null, {
        label: (0, import_vue39.withCtx)(() => [(0, import_vue39.createTextVNode)(
          (0, import_vue39.toDisplayString)($setup.uls("理由（保护日志）：", "理由（保護日誌）：")),
          1
          /* TEXT */
        )]),
        default: (0, import_vue39.withCtx)(() => [(0, import_vue39.createVNode)($setup["CdxTextArea"], {
          modelValue: $setup.protectReason,
          "onUpdate:modelValue": _cache[17] || (_cache[17] = ($event) => $setup.protectReason = $event),
          disabled: $setup.submitting
        }, null, 8, ["modelValue", "disabled"])]),
        _: 1
        /* STABLE */
      })],
      64
      /* STABLE_FRAGMENT */
    )) : (0, import_vue39.createCommentVNode)("v-if", true), (0, import_vue39.createCommentVNode)(" field1: tag options "), $setup.showTagField ? ((0, import_vue39.openBlock)(), (0, import_vue39.createElementBlock)(
      import_vue39.Fragment,
      {
        key: 4
      },
      [(0, import_vue39.createVNode)($setup["CdxField"], null, {
        label: (0, import_vue39.withCtx)(() => [(0, import_vue39.createTextVNode)(
          (0, import_vue39.toDisplayString)($setup.uls("选择保护模板：", "選擇保護模板：")),
          1
          /* TEXT */
        )]),
        default: (0, import_vue39.withCtx)(() => [(0, import_vue39.createVNode)($setup["CdxSelect"], {
          selected: $setup.tagtype,
          "onUpdate:selected": _cache[18] || (_cache[18] = ($event) => $setup.tagtype = $event),
          "menu-items": $setup.tagtypeItems,
          disabled: $setup.submitting
        }, null, 8, ["selected", "menu-items", "disabled"])]),
        _: 1
        /* STABLE */
      }), (0, import_vue39.createVNode)($setup["CdxCheckbox"], {
        modelValue: $setup.small,
        "onUpdate:modelValue": _cache[19] || (_cache[19] = ($event) => $setup.small = $event),
        disabled: $setup.submitting || $setup.tagOptionsDisabled,
        title: $setup.uls("将给模板加上|small=yes参数，显示成右上角的一把挂锁。", "將給模板加上|small=yes參數，顯示成右上角的一把掛鎖。")
      }, {
        default: (0, import_vue39.withCtx)(() => [(0, import_vue39.createTextVNode)(
          (0, import_vue39.toDisplayString)($setup.uls("使用图标（small=yes）", "使用圖示（small=yes）")),
          1
          /* TEXT */
        )]),
        _: 1
        /* STABLE */
      }, 8, ["modelValue", "disabled", "title"]), (0, import_vue39.createVNode)($setup["CdxCheckbox"], {
        modelValue: $setup.noinclude,
        "onUpdate:modelValue": _cache[20] || (_cache[20] = ($event) => $setup.noinclude = $event),
        disabled: $setup.submitting || $setup.tagOptionsDisabled,
        title: $setup.uls("将保护模板包裹在<noinclude>中", "將保護模板包裹在<noinclude>中")
      }, {
        default: (0, import_vue39.withCtx)(() => [(0, import_vue39.createTextVNode)(
          (0, import_vue39.toDisplayString)($setup.uls("用<noinclude>包裹保护模板", "用<noinclude>包裹保護模板")),
          1
          /* TEXT */
        )]),
        _: 1
        /* STABLE */
      }, 8, ["modelValue", "disabled", "title"]), $setup.showShowexpiry ? ((0, import_vue39.openBlock)(), (0, import_vue39.createBlock)($setup["CdxCheckbox"], {
        key: 0,
        modelValue: $setup.showexpiry,
        "onUpdate:modelValue": _cache[21] || (_cache[21] = ($event) => $setup.showexpiry = $event),
        disabled: $setup.submitting || $setup.tagOptionsDisabled,
        title: $setup.uls("将给模板加上|expiry参数", "將給模板加上|expiry參數")
      }, {
        default: (0, import_vue39.withCtx)(() => [(0, import_vue39.createTextVNode)(
          (0, import_vue39.toDisplayString)($setup.uls("在模板显示到期时间", "在模板顯示到期時間")),
          1
          /* TEXT */
        )]),
        _: 1
        /* STABLE */
      }, 8, ["modelValue", "disabled", "title"])) : (0, import_vue39.createCommentVNode)("v-if", true)],
      64
      /* STABLE_FRAGMENT */
    )) : (0, import_vue39.createCommentVNode)("v-if", true), (0, import_vue39.createCommentVNode)(" field1: request options "), $setup.showRequestField ? ((0, import_vue39.openBlock)(), (0, import_vue39.createElementBlock)(
      import_vue39.Fragment,
      {
        key: 5
      },
      [(0, import_vue39.createVNode)($setup["CdxField"], null, {
        label: (0, import_vue39.withCtx)(() => [(0, import_vue39.createTextVNode)(
          (0, import_vue39.toDisplayString)($setup.uls("时长：", "時長：")),
          1
          /* TEXT */
        )]),
        default: (0, import_vue39.withCtx)(() => [(0, import_vue39.createVNode)($setup["CdxSelect"], {
          selected: $setup.expiry,
          "onUpdate:selected": _cache[22] || (_cache[22] = ($event) => $setup.expiry = $event),
          "menu-items": [{
            value: "",
            label: ""
          }, {
            value: "temporary",
            label: $setup.uls("临时", "臨時")
          }, {
            value: "infinity",
            label: "永久"
          }],
          disabled: $setup.submitting || $setup.requestExpiryDisabled
        }, null, 8, ["selected", "menu-items", "disabled"])]),
        _: 1
        /* STABLE */
      }), (0, import_vue39.createVNode)($setup["CdxField"], null, {
        label: (0, import_vue39.withCtx)(() => [..._cache[25] || (_cache[25] = [(0, import_vue39.createTextVNode)(
          "理由：",
          -1
          /* CACHED */
        )])]),
        default: (0, import_vue39.withCtx)(() => [(0, import_vue39.createVNode)($setup["CdxTextArea"], {
          modelValue: $setup.reason,
          "onUpdate:modelValue": _cache[23] || (_cache[23] = ($event) => $setup.reason = $event),
          disabled: $setup.submitting
        }, null, 8, ["modelValue", "disabled"])]),
        _: 1
        /* STABLE */
      })],
      64
      /* STABLE_FRAGMENT */
    )) : (0, import_vue39.createCommentVNode)("v-if", true), (0, import_vue39.createVNode)(
      $setup["TwStatus"],
      {
        ref: "statusRef"
      },
      null,
      512
      /* NEED_PATCH */
    )]),
    _: 1
    /* STABLE */
  }, 8, ["open", "title", "footer-links", "primary-action"]);
}
//! src/Twinkle/modules/ui/TwProtectDialog.vue
TwProtectDialog_default.render = render13;
TwProtectDialog_default.__file = "src\\Twinkle\\modules\\ui\\TwProtectDialog.vue";
TwProtectDialog_default.__scopeId = "data-v-acd37781";
var TwProtectDialog_default2 = TwProtectDialog_default;
var import_vue40 = require("vue");
var import_codex14 = require("@wikimedia/codex");
var import_vue41 = require("vue");
var TwSpeedyDialog_default = /* @__PURE__ */ (0, import_vue40.defineComponent)({
  __name: "TwSpeedyDialog",
  props: {
    isSysop: {
      type: Boolean,
      required: true
    },
    hasCSD: {
      type: Boolean,
      required: true
    },
    namespace: {
      type: Number,
      required: true
    },
    isRedirect: {
      type: Boolean,
      required: true
    },
    isIPUserTalk: {
      type: Boolean,
      required: true
    },
    pageContentModel: {
      type: String,
      required: true
    },
    radioClick: {
      type: Boolean,
      required: true
    },
    deleteSysopDefaultToDelete: {
      type: Boolean,
      required: true
    },
    deleteTalkPageOnDelete: {
      type: Boolean,
      required: true
    },
    deleteRedirectsOnDelete: {
      type: Boolean,
      required: true
    },
    hasCSDReason: {
      type: String,
      required: true
    },
    enlargeG7: {
      type: Boolean,
      required: true
    },
    priorCountText: {
      type: [String, null],
      required: true
    },
    priorCountColor: {
      type: String,
      required: true
    },
    customList: {
      type: Array,
      required: true
    },
    articleList: {
      type: Array,
      required: true
    },
    userList: {
      type: Array,
      required: true
    },
    usertalkList: {
      type: Array,
      required: true
    },
    fileList: {
      type: Array,
      required: true
    },
    categoryList: {
      type: Array,
      required: true
    },
    draftList: {
      type: Array,
      required: true
    },
    talkList: {
      type: Array,
      required: true
    },
    generalList: {
      type: Array,
      required: true
    },
    redirectList: {
      type: Array,
      required: true
    },
    footerLinks: {
      type: Array,
      required: true
    }
  },
  emits: ["close"],
  setup(__props, {
    expose: __expose,
    emit: __emit
  }) {
    __expose();
    const props = __props;
    const emit = __emit;
    const open = (0, import_vue41.ref)(true);
    const submitting = (0, import_vue41.ref)(false);
    const statusRef = (0, import_vue41.ref)(null);
    const tagOnly = (0, import_vue41.ref)(props.isSysop ? !(props.hasCSD || props.deleteSysopDefaultToDelete) : true);
    const talkpage = (0, import_vue41.ref)(props.deleteTalkPageOnDelete);
    const redirects = (0, import_vue41.ref)(props.deleteRedirectsOnDelete);
    const delmultiple = (0, import_vue41.ref)(false);
    const openusertalk = (0, import_vue41.ref)(false);
    const notify = (0, import_vue41.ref)(props.isSysop ? tagOnly.value : true);
    const blank = (0, import_vue41.ref)(false);
    const salting = (0, import_vue41.ref)(false);
    const multiple = (0, import_vue41.ref)(false);
    const selectedCsd = (0, import_vue41.ref)([]);
    const subgroupValues = (0, import_vue41.reactive)({});
    if (props.hasCSDReason) {
      subgroupValues["reason_1"] = props.hasCSDReason;
      selectedCsd.value = ["reason"];
    }
    const sysopMode = (0, import_vue41.computed)(() => props.isSysop && !tagOnly.value);
    const isMultiple = (0, import_vue41.computed)(() => sysopMode.value ? delmultiple.value : multiple.value);
    const submitText = (0, import_vue41.computed)(() => sysopMode.value ? uls("删除页面", "刪除頁面") : uls("标记页面", "標記頁面"));
    const onTagOnlyChange = (value) => {
      tagOnly.value = value === true;
      if (tagOnly.value) {
        talkpage.value = false;
        redirects.value = false;
        delmultiple.value = false;
        openusertalk.value = false;
        notify.value = true;
        multiple.value = false;
        salting.value = false;
      } else {
        talkpage.value = props.deleteTalkPageOnDelete;
        redirects.value = true;
        notify.value = false;
      }
    };
    const toggleSelection = (value, modelValue) => {
      if (isMultiple.value) {
        if (Array.isArray(modelValue)) {
          selectedCsd.value = modelValue.filter((item) => typeof item === "string");
        } else if (modelValue === true) {
          if (!selectedCsd.value.includes(value)) {
            selectedCsd.value.push(value);
          }
        } else if (modelValue === false) {
          selectedCsd.value = selectedCsd.value.filter((item) => item !== value);
        }
      } else {
        selectedCsd.value = value === null ? [] : [value];
      }
    };
    const filterCriteria = (list) => {
      const multipleMode = isMultiple.value;
      const sysop = sysopMode.value;
      const result = [];
      for (const raw of list ?? []) {
        const criterion = {
          ...raw
        };
        if (multipleMode) {
          if (criterion.hideWhenMultiple) {
            continue;
          }
          if (criterion.hideSubgroupWhenMultiple) {
            criterion.subgroup = null;
          }
        } else {
          if (criterion.hideWhenSingle) {
            continue;
          }
          if (criterion.hideSubgroupWhenSingle) {
            criterion.subgroup = null;
          }
        }
        if (sysop) {
          if (criterion.hideWhenSysop) {
            continue;
          }
          if (criterion.hideSubgroupWhenSysop) {
            criterion.subgroup = null;
          }
        } else {
          if (criterion.hideWhenUser) {
            continue;
          }
          if (criterion.hideSubgroupWhenUser) {
            criterion.subgroup = null;
          }
        }
        if (props.isRedirect && criterion.hideWhenRedirect) {
          continue;
        }
        if (criterion.showInNamespaces && !criterion.showInNamespaces.includes(props.namespace)) {
          continue;
        } else if (criterion.hideInNamespaces && criterion.hideInNamespaces.includes(props.namespace)) {
          continue;
        }
        result.push(criterion);
      }
      return result;
    };
    const criteriaGroups = (0, import_vue41.computed)(() => {
      const groups = [];
      if (sysopMode.value) {
        groups.push({
          title: uls("自定义理由", "自訂理由"),
          items: filterCriteria(props.customList)
        });
      }
      switch (props.namespace) {
        case 0:
          groups.push({
            title: uls("条目", "條目"),
            items: filterCriteria(props.articleList)
          });
          break;
        case 2:
          groups.push({
            title: uls("用户页", "使用者頁面"),
            items: filterCriteria(props.userList)
          });
          break;
        case 3:
          if (props.isIPUserTalk) {
            groups.push({
              title: uls("用户讨论页", "使用者討論頁"),
              items: filterCriteria(props.usertalkList)
            });
          }
          break;
        case 6:
          groups.push({
            title: uls("文件", "檔案"),
            items: filterCriteria(props.fileList)
          });
          break;
        case 14:
          groups.push({
            title: uls("分类", "分類"),
            items: filterCriteria(props.categoryList)
          });
          break;
        case 118:
          groups.push({
            title: "草稿",
            items: filterCriteria(props.draftList)
          });
          break;
        default:
          break;
      }
      if (props.namespace % 2 === 1 && props.namespace !== 3) {
        groups.push({
          title: uls("讨论页", "討論頁"),
          items: filterCriteria(props.talkList)
        });
      }
      let general = props.generalList;
      if (!sysopMode.value) {
        general = [...props.customList, ...general];
      }
      groups.push({
        title: uls("常规", "常規"),
        items: filterCriteria(general)
      });
      if (props.isRedirect || props.isSysop) {
        groups.push({
          title: uls("重定向", "重新導向"),
          items: filterCriteria(props.redirectList)
        });
      }
      return groups.filter((group) => group.items.length > 0);
    });
    const subgroupList = (criterion) => {
      const subgroup = criterion.subgroup;
      if (!subgroup) {
        return [];
      }
      return Array.isArray(subgroup) ? subgroup : [subgroup];
    };
    const hasSubgroup = (criterion) => subgroupList(criterion).length > 0;
    const subgroupVisible = (criterion) => hasSubgroup(criterion) && selectedCsd.value.includes(criterion.value);
    (0, import_vue41.watch)(selectedCsd, () => {
      for (const group of criteriaGroups.value) {
        for (const criterion of group.items) {
          for (const subgroup of subgroupList(criterion)) {
            if (subgroupValues[subgroup.name] === void 0) {
              subgroupValues[subgroup.name] = "";
            }
          }
        }
      }
    }, {
      immediate: true
    });
    const getSubgroupValue = (name) => subgroupValues[name] ?? "";
    const setSubgroupValue = (name, value) => {
      subgroupValues[name] = value === null || value === void 0 ? "" : String(value);
    };
    const radioOpen = (criterion) => props.radioClick && !isMultiple.value && hasSubgroup(criterion) && selectedCsd.value.includes(criterion.value);
    const radioDisabled = (criterion) => {
      if (!props.radioClick || isMultiple.value) {
        return false;
      }
      if (hasSubgroup(criterion)) {
        return false;
      }
      return selectedCsd.value.some((value) => {
        return value !== criterion.value && hasSubgroup(findCriterion(value));
      });
    };
    const findCriterion = (value) => {
      for (const group of criteriaGroups.value) {
        const found = group.items.find((item) => item.value === value);
        if (found) {
          return found;
        }
      }
      return {
        label: value,
        value
      };
    };
    const onSelectionChange = (value, modelValue) => {
      if (modelValue === value) {
        selectedCsd.value = [value];
        if (sysopMode.value && !isMultiple.value) {
          var _Twinkle$speedy4;
          const normalized = ((_Twinkle$speedy4 = Twinkle.speedy) === null || _Twinkle$speedy4 === void 0 ? void 0 : _Twinkle$speedy4.normalizeHash[value]) ?? value;
          const prefs = Twinkle.getPref("openUserTalkPageOnSpeedyDelete");
          openusertalk.value = Array.isArray(prefs) && prefs.includes(normalized);
        }
        if (props.radioClick && !isMultiple.value && !hasSubgroup(findCriterion(value))) {
          submit();
        }
      }
    };
    const fileHintVisible = (0, import_vue41.computed)(() => props.namespace === 6 && !sysopMode.value);
    const nonWikitextNotice = (0, import_vue41.computed)(() => !sysopMode.value && props.pageContentModel !== "wikitext");
    const primaryAction = (0, import_vue41.computed)(() => ({
      label: submitText.value,
      actionType: "progressive",
      disabled: submitting.value || nonWikitextNotice.value
    }));
    const buildParams = () => ({
      tagOnly: tagOnly.value,
      values: [...selectedCsd.value],
      subgroups: {
        ...subgroupValues
      },
      talkpage: talkpage.value,
      redirects: redirects.value,
      delmultiple: delmultiple.value,
      openusertalk: openusertalk.value,
      notify: notify.value,
      blank: blank.value,
      salting: salting.value,
      multiple: multiple.value
    });
    const submit = () => {
      var _statusRef$value15;
      if (submitting.value || nonWikitextNotice.value) {
        return;
      }
      if (selectedCsd.value.length === 0) {
        void mw.notify(uls("请选择一个理据！", "請選擇一個理據！"), {
          type: "warn",
          tag: "twinklespeedy"
        });
        return;
      }
      submitting.value = true;
      evaluate(buildParams(), ((_statusRef$value15 = statusRef.value) === null || _statusRef$value15 === void 0 ? void 0 : _statusRef$value15.getStatusRoot()) ?? null, () => {
        submitting.value = false;
      });
    };
    const usePrimaryAction = (0, import_vue41.computed)(() => !props.radioClick || isMultiple.value);
    const resolvedPrimaryAction = (0, import_vue41.computed)(() => usePrimaryAction.value ? primaryAction.value : void 0);
    const openUserTalkLinkLabel = uls("开启用户讨论页", "開啟使用者討論頁");
    const specialSdUrl = (0, import_vue41.computed)(() => mw.util.getUrl("QW:SPECIALSD"));
    const priorLogUrl = (0, import_vue41.computed)(() => mw.util.getUrl("Special:Log", {
      page: mw.config.get("wgPageName")
    }));
    const saltingTooltip = uls("选取后，快速删除模板后将附带 {{salt}} 标签，以请求执行删除的管理员进行白纸保护，仅在页面创建3次以上才选择此项。", "選取後，快速刪除模板後將附帶 {{salt}} 標籤，以請求執行刪除的管理員進行白紙保護，僅在頁面建立3次以上才選擇此項。");
    (0, import_vue41.watch)(open, (value) => {
      if (!value) {
        emit("close");
      }
    });
    const getUserTalkParameters = (normalized) => {
      const utparams = {};
      switch (normalized) {
        default:
          break;
      }
      return utparams;
    };
    const getParameters = (subgroups, values) => {
      const parameters = [];
      for (const value of values) {
        const currentParams = {};
        let redimage;
        switch (value) {
          case "reason":
            if (subgroups["reason_1"] !== void 0) {
              const dbrationale = subgroups["reason_1"];
              if (!dbrationale || !dbrationale.trim()) {
                void mw.notify(uls("自定义理由：请指定理由。", "自訂理由：請指定理由。"), {
                  type: "warn",
                  tag: "twinklespeedy"
                });
                return null;
              }
              currentParams["1"] = dbrationale;
            }
            break;
          case "a2":
            if (subgroups["a2_pagename"] !== void 0) {
              const otherpage = subgroups["a2_pagename"];
              if (!otherpage || !otherpage.trim()) {
                void mw.notify(uls("CSD A2：请提供现有条目的名称。", "CSD A2：請提供現有條目的名稱。"), {
                  type: "warn",
                  tag: "twinklespeedy"
                });
                return null;
              }
              currentParams["pagename"] = otherpage;
            }
            break;
          case "g4":
            if (subgroups["g4_pagename"] !== void 0) {
              const pagename = subgroups["g4_pagename"];
              if (!pagename || !pagename.trim()) {
                void mw.notify(uls("CSD G4：请提供页面名称。", "CSD G4：請提供頁面名稱。"), {
                  type: "warn",
                  tag: "twinklespeedy"
                });
                return null;
              }
              currentParams["pagename"] = pagename;
            }
            break;
          case "g5":
            if (subgroups["g5_rationale"] !== void 0) {
              const g5rationale = subgroups["g5_rationale"];
              if (g5rationale && g5rationale.trim()) {
                currentParams["1"] = g5rationale;
              }
            }
            break;
          case "g6":
            if (subgroups["g6_rationale"] !== void 0) {
              const g6rationale = subgroups["g6_rationale"];
              if (g6rationale && g6rationale.trim()) {
                currentParams["1"] = g6rationale;
              }
            }
            break;
          case "f2":
            if (subgroups["f2_filename"] !== void 0) {
              redimage = subgroups["f2_filename"];
              if (!redimage || !redimage.trim()) {
                void mw.notify(uls("CSD F2：请提供另一文件的名称。", "CSD F2：請提供另一檔案的名稱。"), {
                  type: "warn",
                  tag: "twinklespeedy"
                });
                return null;
              }
              currentParams["filename"] = redimage.replace(new RegExp(`^\\s*${Morebits.namespaceRegex(6)}:`, "i"), "");
            }
            break;
          case "r1":
            if (subgroups["r1_type"] !== void 0) {
              const redirtype = subgroups["r1_type"];
              if (redirtype && redirtype !== "other") {
                currentParams["1"] = redirtype;
              } else if (!(subgroups["reason_1"] && String(subgroups["reason_1"]).trim()) && redirtype !== "other") {
                void mw.notify(uls("CSD R1：请选择适用类型。", "CSD R1：請選擇適用類別。"), {
                  type: "warn",
                  tag: "twinklespeedy"
                });
                return null;
              }
            }
            break;
          case "r2":
            if (subgroups["r2_type"] !== void 0) {
              const redirtype = subgroups["r2_type"];
              if (redirtype && redirtype !== "other") {
                currentParams["1"] = redirtype;
              } else if (!(subgroups["reason_1"] && String(subgroups["reason_1"]).trim()) && redirtype !== "other") {
                void mw.notify(uls("CSD R2：请选择适用类型。", "CSD R2：請選擇適用類別。"), {
                  type: "warn",
                  tag: "twinklespeedy"
                });
                return null;
              }
            }
            break;
          default:
            break;
        }
        parameters[parameters.length] = currentParams;
      }
      return parameters;
    };
    const getTemplateCodeAndParams = (params) => {
      let code;
      let parameters;
      if (params.normalizeds.length > 1) {
        code = "{{delete";
        params.utparams = {};
        for (const [index, norm] of params.normalizeds.entries()) {
          var _params$templateParam;
          if (norm !== "db") {
            code += `|${norm.toUpperCase()}`;
          }
          parameters = ((_params$templateParam = params.templateParams) === null || _params$templateParam === void 0 ? void 0 : _params$templateParam[index]) ?? {};
          for (const key in parameters) {
            if (typeof parameters[key] === "string") {
              code += `|${parameters[key]}`;
            }
          }
          params.utparams = {
            ...params.utparams,
            ...getUserTalkParameters(norm)
          };
        }
        code += "}}";
      } else {
        var _params$templateParam2;
        parameters = ((_params$templateParam2 = params.templateParams) === null || _params$templateParam2 === void 0 ? void 0 : _params$templateParam2[0]) ?? {};
        code = "{{delete";
        if (params.values[0] !== "reason") {
          code += `|${params.values[0]}`;
        }
        for (const key in parameters) {
          if (typeof parameters[key] === "string") {
            code += `|${parameters[key]}`;
          }
        }
        code += "}}";
        params.utparams = getUserTalkParameters(params.normalizeds[0] ?? "");
      }
      return [code, params.utparams];
    };
    const sysopCallbacks = {
      main: (params) => {
        let reason;
        if (!params.normalizeds.length && params.normalizeds[0] === "db") {
          reason = prompt(uls("输入删除理由：", "輸入刪除理由："), "");
          sysopCallbacks.deletePage(reason, params);
        } else {
          var _Twinkle$speedy5;
          const [code] = getTemplateCodeAndParams(params);
          (_Twinkle$speedy5 = Twinkle.speedy) === null || _Twinkle$speedy5 === void 0 || _Twinkle$speedy5.callbacks.parseWikitext(mw.config.get("wgPageName") ?? "", code, (deleteReason) => {
            let reason2 = deleteReason;
            if (params.promptForSummary) {
              reason2 = prompt(uls("输入删除理由，或单击确定以接受自动生成的：", "輸入刪除理由，或點擊確定以接受自動生成的："), deleteReason) ?? null;
            }
            sysopCallbacks.deletePage(reason2, params);
          });
        }
      },
      deletePage: (reason, params) => {
        const thispage = new Morebits.wiki.page(mw.config.get("wgPageName") ?? "", uls("删除页面", "刪除頁面"));
        if (reason === null) {
          Morebits.status.error(uls("询问理由", "詢問理由"), uls("用户取消操作。", "使用者取消操作。"));
          return;
        } else if (!reason || !reason.trim()) {
          Morebits.status.error(uls("询问理由", "詢問理由"), uls("你不给我理由…我就…不管了…", "你不給我理由…我就…不管了…"));
          return;
        }
        const deleteMain = () => {
          thispage.setEditSummary(reason);
          thispage.setChangeTags(Twinkle.changeTags);
          thispage.setWatchlist(params.watch);
          thispage.deletePage(() => {
            thispage.getStatusElement().info("完成");
            sysopCallbacks.deleteTalk(params);
          });
        };
        if (params.openUserTalk) {
          thispage.setCallbackParameters(params);
          thispage.lookupCreation(() => {
            sysopCallbacks.openUserTalkPage(thispage);
            deleteMain();
          });
        } else {
          deleteMain();
        }
      },
      deleteTalk: (params) => {
        var _document$querySelect;
        if (params.deleteTalkPage && params.normalized !== "o1" && !((_document$querySelect = document.querySelector("#ca-talk")) !== null && _document$querySelect !== void 0 && _document$querySelect.classList.contains("new"))) {
          const talkpage2 = new Morebits.wiki.page(`${mw.config.get("wgFormattedNamespaces")[mw.config.get("wgNamespaceNumber") + 1] ?? ""}:${mw.config.get("wgTitle")}`, uls("删除讨论页", "刪除討論頁"));
          talkpage2.setEditSummary(`[[QW:CSD#G9|G9]]: 孤立页面：已删除页面“${Morebits.pageNameNorm}”的讨论页`);
          talkpage2.setChangeTags(Twinkle.changeTags);
          talkpage2.deletePage();
          setTimeout(() => {
            sysopCallbacks.deleteRedirects(params);
          }, 1800);
        } else {
          sysopCallbacks.deleteRedirects(params);
        }
      },
      deleteRedirects: (params) => {
        if (params.deleteRedirects) {
          const query = {
            action: "query",
            titles: mw.config.get("wgPageName"),
            prop: "redirects",
            rdlimit: 5e3
            // 500 is max for normal users, 5000 for bots and sysops
          };
          const api2 = new Morebits.wiki.api(uls("获取重定向列表…", "取得重新導向列表…"), query, sysopCallbacks.deleteRedirectsMain, new Morebits.status(uls("删除重定向", "刪除重新導向")));
          api2.params = params;
          api2.post();
        }
        let $link;
        let $bigtext;
        if (params.normalized === "g7") {
          $link = $("<a>").attr("href", "#").text(uls("单击这里施行保护", "點擊這裡施行保護")).css({
            "font-size": "125%",
            "font-weight": "bold"
          }).on("click", () => {
            var _Twinkle$protect2;
            Morebits.wiki.actionCompleted.redirect = null;
            open.value = false;
            mw.config.set("wgArticleId", 0);
            (_Twinkle$protect2 = Twinkle.protect) === null || _Twinkle$protect2 === void 0 || _Twinkle$protect2.callback();
          });
          $bigtext = $("<span>").css({
            "font-size": "125%",
            "font-weight": "bold"
          }).text(uls("白纸保护该页", "白紙保護該頁"));
          Morebits.status.info($bigtext[0], $link[0]);
        }
        if (mw.config.get("wgNamespaceNumber") === 6) {
          $link = $("<a>").attr("href", "#").text(uls("单击这里前往取消链入工具", "點擊這裡前往取消連入工具")).css({
            "font-weight": "bold"
          }).on("click", () => {
            var _Twinkle$unlink;
            Morebits.wiki.actionCompleted.redirect = null;
            open.value = false;
            (_Twinkle$unlink = Twinkle.unlink) === null || _Twinkle$unlink === void 0 || _Twinkle$unlink.callback(`${uls("取消对已删除文件 ", "取消對已刪除檔案 ") + Morebits.pageNameNorm} 的使用`);
          });
          $bigtext = $("<span>").css({
            "font-weight": "bold"
          }).text(uls("取消对已删除文件的使用", "取消對已刪除檔案的使用"));
          Morebits.status.info($bigtext[0], $link[0]);
        } else {
          $link = $("<a>").attr("href", "#").text(uls("单击这里前往取消链入工具", "點擊這裡前往取消連入工具")).css({
            "font-weight": "bold"
          }).on("click", () => {
            var _Twinkle$unlink2;
            Morebits.wiki.actionCompleted.redirect = null;
            open.value = false;
            (_Twinkle$unlink2 = Twinkle.unlink) === null || _Twinkle$unlink2 === void 0 || _Twinkle$unlink2.callback(uls("取消对已删除页面 ", "取消對已刪除頁面 ") + Morebits.pageNameNorm + uls(" 的链接", " 的連結"));
          });
          $bigtext = $("<span>").text(uls("取消对已删除页面的链接", "取消對已刪除頁面的連結")).css({
            "font-weight": "bold"
          });
          Morebits.status.info($bigtext[0], $link[0]);
        }
        $link = $("<a>").attr("href", mw.util.getUrl("Special:RandomInCategory/快速删除候选")).text(uls("单击前往下一个快速删除候选", "點擊前往下一個快速刪除候選"));
        Morebits.status.info("工具", $link[0]);
      },
      openUserTalkPage: (pageobj) => {
        pageobj.getStatusElement().unlink();
        const user = pageobj.getCreator();
        const params = pageobj.getCallbackParameters();
        const query = {
          action: "edit",
          preview: "yes",
          vanarticle: Morebits.pageNameNorm
        };
        const title = `User talk:${user}`;
        if (params.normalized === "db" || Twinkle.getPref("promptForSpeedyDeletionSummary").includes(params.normalized ?? "")) {
          const $link = $("<a>").attr({
            href: mw.util.getUrl(title, query),
            target: "_blank",
            rel: "noopener noreferrer"
          }).css({
            "font-size": "125%",
            "font-weight": "bold"
          }).text(uls("点此打开User talk:", "點此打開User talk:") + user);
          const $bigtext = $("<span>").css({
            "font-size": "125%",
            "font-weight": "bold"
          }).text(uls("通知页面创建者", "通知頁面建立者"));
          Morebits.status.info($bigtext[0], $link[0]);
        } else {
          const statusIndicator = new Morebits.status(uls("打开用户", "打開使用者") + user + uls("的讨论页编辑窗口", "的討論頁編輯視窗"), uls("打开中…", "打開中…"));
          switch (Twinkle.getPref("userTalkPageMode")) {
            case "tab":
              window.open(mw.util.getUrl(title, query), "_blank", "noopener,noreferrer");
              break;
            case "blank":
              window.open(mw.util.getUrl(title, query), "_blank", "noopener,noreferrer,location=no,toolbar=no,status=no,directories=no,scrollbars=yes,width=1200,height=800");
              break;
            /* case 'window': */
            /* falls through */
            default:
              window.open(mw.util.getUrl(title, query), window.name === "twinklewarnwindow" ? "_blank" : "twinklewarnwindow", window.name === "twinklewarnwindow" ? "noopener,noreferrer," : "location=no,toolbar=no,status=no,directories=no,scrollbars=yes,width=1200,height=800");
              break;
          }
          statusIndicator.info("完成");
        }
      },
      deleteRedirectsMain: (apiobj) => {
        const xmlDoc = apiobj.getXML();
        const $snapshot = $(xmlDoc).find("redirects rd");
        const total = $snapshot.length;
        const statusIndicator = apiobj.statelem;
        if (!total) {
          statusIndicator.info(uls("未发现重定向", "未發現重新導向"));
          return;
        }
        statusIndicator.status("0%");
        let current = 0;
        const onsuccess = (pageobj) => {
          const now = `${Math.floor(100 * ++current / total)}%`;
          statusIndicator.update(now);
          pageobj.getStatusElement().unlink();
          if (current >= total) {
            statusIndicator.info(`${now}（完成）`);
            Morebits.wiki.removeCheckpoint();
          }
        };
        Morebits.wiki.addCheckpoint();
        $snapshot.each((_key, value) => {
          const title = $(value).attr("title") ?? "";
          const page = new Morebits.wiki.page(title, `${uls('删除重定向 "', '刪除重新導向 "') + title}"`);
          page.setEditSummary(`[[QW:CSD#G9|G9]]: 孤立页面：重定向到已删除页面“${Morebits.pageNameNorm}”`);
          page.setChangeTags(Twinkle.changeTags);
          page.deletePage(onsuccess);
        });
      }
    };
    const userCallbacks = {
      main: (pageobj) => {
        const statelem = pageobj.getStatusElement();
        if (!pageobj.exists()) {
          statelem.error(uls("页面不存在，可能已被删除", "頁面不存在，可能已被刪除"));
          return;
        }
        let text = pageobj.getPageText() ?? "";
        const params = pageobj.getCallbackParameters();
        statelem.status(uls("检查页面已有标记…", "檢查頁面已有標記…"));
        const textNoSd = text.replace(/\{\{\s*(db(-\w*)?|d|delete|deletebecause|speedy|csd|速刪|速删|快删|快刪)\s*(\|(?:\{\{[^{}]*\}\}|[^{}])*)?\}\}\s*/gi, "");
        if (text !== textNoSd && !confirm(uls("在页面上找到快速删除模板，要移除并加入新的吗？", "在頁面上找到快速刪除模板，要移除並加入新的嗎？"))) {
          statelem.error(uls("快速删除模板已被置于页面中。", "快速刪除模板已被置於頁面中。"));
          return;
        }
        text = textNoSd;
        const copyvio = /(?:\{\{\s*(copyvio|侵权|侵權)[^{}]*?\}\})/i.exec(text);
        if (copyvio && !confirm(uls("著作权验证模板已被置于页面中，您是否仍想加入一个快速删除模板？", "著作權驗證模板已被置於頁面中，您是否仍想加入一個快速刪除模板？"))) {
          statelem.error(uls("页面中已有著作权验证模板。", "頁面中已有著作權驗證模板。"));
          return;
        }
        const xfd = /(?:\{\{([rsaiftcmv]fd|md1|proposed deletion)[^{}]*?\}\})/i.exec(text);
        if (xfd && !confirm(uls("删除相关模板{{", "刪除相關模板{{") + (xfd[1] ?? "") + uls("}}已被置于页面中，您是否仍想加入一个快速删除模板？", "}}已被置於頁面中，您是否仍想加入一個快速刪除模板？"))) {
          statelem.error(uls("页面已被提交至存废讨论。", "頁面已被提交至存廢討論。"));
          return;
        }
        const buildData = getTemplateCodeAndParams(params);
        let [code] = buildData;
        [, params.utparams] = buildData;
        const thispage = new Morebits.wiki.page(mw.config.get("wgPageName"));
        if (Twinkle.getPref("markSpeedyPagesAsPatrolled") === true) {
          thispage.patrol();
        }
        if (mw.config.get("wgNamespaceNumber") === 10) {
          code = `<noinclude>${code}</noinclude>`;
        }
        text = text.replace(/\{\{\s*([Nn]ew unreviewed article|[Uu]nreviewed|[Uu]serspace draft)\s*(\|(?:\{\{[^{}]*\}\}|[^{}])*)?\}\}\s*/g, "");
        if (mw.config.get("wgNamespaceNumber") === 6) {
          text = text.replace(/\{\{(mtc|(copy |move )?to ?(share|commons)|move to (qiuwen share|wikimedia commons)|copy to (qiuwen share|wikimedia commons))[^}]*\}\}/gi, "");
        }
        if (params.requestsalt) {
          code = `{{salt}}
${code}`;
        }
        const firstNorm = params.normalizeds[0] ?? "";
        let editsummary;
        if (params.normalizeds.length > 1) {
          editsummary = uls("请求快速删除（", "請求快速刪除（");
          for (const norm of params.normalizeds) {
            if (norm !== "db") {
              editsummary += `[[QW:CSD#${norm.toUpperCase()}|CSD ${norm.toUpperCase()}]]、`;
            }
          }
          editsummary = editsummary.slice(0, Math.max(0, editsummary.length - 1));
          editsummary += "）";
        } else if (firstNorm === "db") {
          var _params$templateParam3;
          editsummary = uls("请求[[QW:CSD|快速删除]]：", "請求[[QW:CSD|快速刪除]]：") + (((_params$templateParam3 = params.templateParams) === null || _params$templateParam3 === void 0 || (_params$templateParam3 = _params$templateParam3[0]) === null || _params$templateParam3 === void 0 ? void 0 : _params$templateParam3["1"]) ?? "");
        } else {
          var _params$templateParam4;
          editsummary = `${uls("请求快速删除", "請求快速刪除")}（[[QW:CSD#${firstNorm.toUpperCase()}|CSD ${firstNorm.toUpperCase()}]]）`;
          if (firstNorm === "g6" && (_params$templateParam4 = params.templateParams) !== null && _params$templateParam4 !== void 0 && (_params$templateParam4 = _params$templateParam4[0]) !== null && _params$templateParam4 !== void 0 && _params$templateParam4["1"]) {
            editsummary += "：".concat(params.templateParams[0]["1"]);
          }
        }
        if (params.blank) {
          text = code;
        } else {
          const qiuwen_page = new Morebits.wikitext.page(text);
          text = qiuwen_page.insertAfterTemplates(`${code}
`, Twinkle.hatnoteRegex).getText();
        }
        pageobj.setPageText(text);
        pageobj.setEditSummary(editsummary);
        pageobj.setChangeTags(Twinkle.changeTags);
        pageobj.setWatchlist(params.watch);
        pageobj.save(userCallbacks.tagComplete);
      },
      tagComplete: (pageobj) => {
        const params = pageobj.getCallbackParameters();
        if (params.usertalk) {
          const callback = (pageObj) => {
            const creator = pageObj.getCreator();
            let initialContrib = creator;
            if (initialContrib === mw.config.get("wgUserName")) {
              Morebits.status.warn(`您（${initialContrib}${uls("）创建了该页，跳过通知", "）建立了該頁，跳過通知")}`);
              initialContrib = null;
            } else if (initialContrib === mw.config.get("wgTitle") && mw.config.get("wgNamespaceNumber") === 3) {
              Morebits.status.warn(uls("通知页面创建者：用户创建了自己的讨论页", "通知頁面建立者：使用者建立了自己的討論頁"));
              initialContrib = null;
            } else if (initialContrib === "A2093064-bot" && params.normalizeds[0] === "g15") {
              Morebits.status.warn(uls("通知页面创建者：由机器人创建，跳过通知", "通知頁面建立者：由機器人建立，跳過通知"));
              initialContrib = null;
            } else {
              initialContrib = creator ?? "";
              const talkPageName = `User talk:${initialContrib}`;
              const usertalkpage = new Morebits.wiki.page(talkPageName, `${uls("通知页面创建者（", "通知頁面建立者（") + initialContrib}）`);
              let notifytext;
              notifytext = "\n{{".concat("subst:", `db-notice|target=${Morebits.pageNameNorm}`);
              notifytext += "|nowelcome=yes'}}——~~".concat("~~");
              let editsummary = "通知：";
              if (params.normalizeds.includes("g3")) {
                editsummary += "一攻击性页面";
              } else {
                editsummary += `页面[[${Morebits.pageNameNorm}]]`;
              }
              editsummary += "快速删除提名";
              usertalkpage.setAppendText(notifytext);
              usertalkpage.setEditSummary(editsummary);
              usertalkpage.setChangeTags(Twinkle.changeTags);
              usertalkpage.setCreateOption("recreate");
              usertalkpage.setFollowRedirect(true, false);
              usertalkpage.append();
            }
            if (params.lognomination) {
              var _Twinkle$speedy6;
              (_Twinkle$speedy6 = Twinkle.speedy) === null || _Twinkle$speedy6 === void 0 || _Twinkle$speedy6.callbacks.user.addToLog(params, initialContrib);
            }
          };
          const thispage = new Morebits.wiki.page(Morebits.pageNameNorm);
          thispage.lookupCreation(callback);
        } else if (params.lognomination) {
          var _Twinkle$speedy7;
          (_Twinkle$speedy7 = Twinkle.speedy) === null || _Twinkle$speedy7 === void 0 || _Twinkle$speedy7.callbacks.user.addToLog(params, null);
        }
      }
    };
    const evaluate = (params, statusContainer, restore) => {
      const values = params.values;
      const normalizeds = values.map((value) => {
        var _Twinkle$speedy8;
        return ((_Twinkle$speedy8 = Twinkle.speedy) === null || _Twinkle$speedy8 === void 0 ? void 0 : _Twinkle$speedy8.normalizeHash[value]) ?? value;
      });
      let watchPage;
      if (params.tagOnly) {
        watchPage = false;
        for (const norm of normalizeds) {
          if (Twinkle.getPref("watchSpeedyPages").includes(norm)) {
            watchPage = Twinkle.getPref("watchSpeedyExpiry");
          }
        }
        let notifyuser = false;
        if (params.notify) {
          for (const norm of normalizeds) {
            if (Twinkle.getPref("notifyUserOnSpeedyDeletionNomination").includes(norm)) {
              notifyuser = true;
            }
          }
        }
        let csdlog = false;
        if (Twinkle.getPref("logSpeedyNominations") === true) {
          for (const norm of normalizeds) {
            if (!Twinkle.getPref("noLogOnSpeedyNomination").includes(norm)) {
              csdlog = true;
            }
          }
        }
        const userParams = {
          values,
          normalizeds,
          watch: watchPage,
          usertalk: notifyuser,
          lognomination: csdlog,
          blank: params.blank,
          requestsalt: params.salting,
          templateParams: getParameters(params.subgroups, values)
        };
        if (!userParams.templateParams) {
          if (restore) {
            restore();
          }
          return;
        }
        Morebits.status.init(statusContainer);
        Morebits.wiki.actionCompleted.redirect = mw.config.get("wgPageName");
        Morebits.wiki.actionCompleted.notice = uls("标记完成", "標記完成");
        const qiuwen_page = new Morebits.wiki.page(mw.config.get("wgPageName"), uls("标记页面", "標記頁面"));
        qiuwen_page.setCallbackParameters(userParams);
        qiuwen_page.load(userCallbacks.main);
        return;
      }
      let promptForSummary;
      for (const norm of normalizeds) {
        if (Twinkle.getPref("watchSpeedyPages").includes(norm)) {
          watchPage = Twinkle.getPref("watchSpeedyExpiry");
        }
        if (Twinkle.getPref("promptForSpeedyDeletionSummary").includes(norm)) {
          promptForSummary = true;
        }
      }
      const sysopParams = {
        values,
        normalizeds,
        watch: watchPage,
        deleteTalkPage: params.talkpage,
        deleteRedirects: params.redirects,
        openUserTalk: params.openusertalk,
        promptForSummary,
        templateParams: getParameters(params.subgroups, values)
      };
      if (!sysopParams.templateParams) {
        if (restore) {
          restore();
        }
        return;
      }
      Morebits.status.init(statusContainer);
      sysopCallbacks.main(sysopParams);
    };
    const __returned__ = {
      props,
      emit,
      open,
      submitting,
      statusRef,
      tagOnly,
      talkpage,
      redirects,
      delmultiple,
      openusertalk,
      notify,
      blank,
      salting,
      multiple,
      selectedCsd,
      subgroupValues,
      sysopMode,
      isMultiple,
      submitText,
      onTagOnlyChange,
      toggleSelection,
      filterCriteria,
      criteriaGroups,
      subgroupList,
      hasSubgroup,
      subgroupVisible,
      getSubgroupValue,
      setSubgroupValue,
      radioOpen,
      radioDisabled,
      findCriterion,
      onSelectionChange,
      fileHintVisible,
      nonWikitextNotice,
      primaryAction,
      buildParams,
      submit,
      usePrimaryAction,
      resolvedPrimaryAction,
      openUserTalkLinkLabel,
      specialSdUrl,
      priorLogUrl,
      saltingTooltip,
      getUserTalkParameters,
      getParameters,
      getTemplateCodeAndParams,
      sysopCallbacks,
      userCallbacks,
      evaluate,
      get CdxButton() {
        return import_codex14.CdxButton;
      },
      get CdxCheckbox() {
        return import_codex14.CdxCheckbox;
      },
      get CdxRadio() {
        return import_codex14.CdxRadio;
      },
      get CdxSelect() {
        return import_codex14.CdxSelect;
      },
      get CdxTextInput() {
        return import_codex14.CdxTextInput;
      },
      TwDialog: TwDialog_default2,
      TwStatus: TwStatus_default2,
      get uls() {
        return uls;
      }
    };
    Object.defineProperty(__returned__, "__isScriptSetup", {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});
var import_vue42 = require("vue");
var _hoisted_111 = {
  class: "tw-speedy-header"
};
var _hoisted_210 = {
  class: "tw-speedy-header"
};
var _hoisted_37 = ["href"];
var _hoisted_46 = {
  class: "tw-speedy-header"
};
var _hoisted_54 = {
  key: 2,
  class: "tw-speedy-tooltip"
};
var _hoisted_64 = {
  key: 3,
  class: "tw-speedy-subgroup"
};
var _hoisted_72 = ["for"];
var _hoisted_82 = ["for"];
var _hoisted_92 = {
  key: 5,
  class: "tw-speedy-hint"
};
var _hoisted_102 = {
  key: 6,
  class: "tw-speedy-hint"
};
var _hoisted_112 = {
  key: 7,
  class: "tw-speedy-hint"
};
var _hoisted_123 = ["href"];
function render14(_ctx, _cache, $props, $setup, $data, $options) {
  return (0, import_vue42.openBlock)(), (0, import_vue42.createBlock)($setup["TwDialog"], {
    open: $setup.open,
    title: $setup.uls("选择快速删除理由", "選擇快速刪除理由"),
    "script-name": "Twinkle",
    "footer-links": $props.footerLinks,
    "primary-action": $setup.resolvedPrimaryAction,
    "onUpdate:open": _cache[8] || (_cache[8] = ($event) => $setup.open = $event),
    onPrimary: $setup.submit
  }, {
    default: (0, import_vue42.withCtx)(() => [$props.isSysop ? ((0, import_vue42.openBlock)(), (0, import_vue42.createBlock)($setup["CdxCheckbox"], {
      key: 0,
      "model-value": $setup.tagOnly,
      title: $setup.uls("若您只想标记此页面而不是将其删除", "若您只想標記此頁面而不是將其刪除"),
      "onUpdate:modelValue": $setup.onTagOnlyChange
    }, {
      default: (0, import_vue42.withCtx)(() => [(0, import_vue42.createTextVNode)(
        (0, import_vue42.toDisplayString)($setup.uls("只标记，不删除", "只標記，不刪除")),
        1
        /* TEXT */
      )]),
      _: 1
      /* STABLE */
    }, 8, ["model-value", "title"])) : (0, import_vue42.createCommentVNode)("v-if", true), $setup.sysopMode ? ((0, import_vue42.openBlock)(), (0, import_vue42.createElementBlock)(
      import_vue42.Fragment,
      {
        key: 1
      },
      [(0, import_vue42.createElementVNode)(
        "h4",
        _hoisted_111,
        (0, import_vue42.toDisplayString)($setup.uls("删除相关选项", "刪除相關選項")),
        1
        /* TEXT */
      ), $props.namespace % 2 === 0 && $props.namespace !== 2 ? ((0, import_vue42.openBlock)(), (0, import_vue42.createBlock)($setup["CdxCheckbox"], {
        key: 0,
        modelValue: $setup.talkpage,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.talkpage = $event),
        title: $setup.uls("删除时附带删除此页面的讨论页。", "刪除時附帶刪除此頁面的討論頁。")
      }, {
        default: (0, import_vue42.withCtx)(() => [(0, import_vue42.createTextVNode)(
          (0, import_vue42.toDisplayString)($setup.uls("删除讨论页", "刪除討論頁")),
          1
          /* TEXT */
        )]),
        _: 1
        /* STABLE */
      }, 8, ["modelValue", "title"])) : (0, import_vue42.createCommentVNode)("v-if", true), (0, import_vue42.createVNode)($setup["CdxCheckbox"], {
        modelValue: $setup.redirects,
        "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.redirects = $event),
        title: $setup.uls("删除到此页的重定向。", "刪除到此頁的重新導向。")
      }, {
        default: (0, import_vue42.withCtx)(() => [(0, import_vue42.createTextVNode)(
          (0, import_vue42.toDisplayString)($setup.uls("删除重定向", "刪除重新導向")),
          1
          /* TEXT */
        )]),
        _: 1
        /* STABLE */
      }, 8, ["modelValue", "title"]), (0, import_vue42.createVNode)($setup["CdxCheckbox"], {
        modelValue: $setup.delmultiple,
        "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $setup.delmultiple = $event),
        title: $setup.uls("您可选择应用于该页的多个理由。", "您可選擇應用於該頁的多個理由。")
      }, {
        default: (0, import_vue42.withCtx)(() => [(0, import_vue42.createTextVNode)(
          (0, import_vue42.toDisplayString)($setup.uls("应用多个理由删除", "應用多個理由刪除")),
          1
          /* TEXT */
        )]),
        _: 1
        /* STABLE */
      }, 8, ["modelValue", "title"]), (0, import_vue42.createVNode)($setup["CdxCheckbox"], {
        modelValue: $setup.openusertalk,
        "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $setup.openusertalk = $event),
        title: $setup.openUserTalkLinkLabel
      }, {
        default: (0, import_vue42.withCtx)(() => [(0, import_vue42.createTextVNode)(
          (0, import_vue42.toDisplayString)($setup.openUserTalkLinkLabel),
          1
          /* TEXT */
        )]),
        _: 1
        /* STABLE */
      }, 8, ["modelValue", "title"])],
      64
      /* STABLE_FRAGMENT */
    )) : ((0, import_vue42.openBlock)(), (0, import_vue42.createElementBlock)(
      import_vue42.Fragment,
      {
        key: 2
      },
      [(0, import_vue42.createElementVNode)(
        "h4",
        _hoisted_210,
        (0, import_vue42.toDisplayString)($setup.uls("标记相关选项", "標記相關選項")),
        1
        /* TEXT */
      ), (0, import_vue42.createVNode)($setup["CdxCheckbox"], {
        modelValue: $setup.notify,
        "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $setup.notify = $event),
        title: $setup.uls("一个通知模板将会被加入创建者的讨论页，若您启用了该理据的通知。", "一個通知模板將會被加入建立者的討論頁，若您啟用了該理據的通知。")
      }, {
        default: (0, import_vue42.withCtx)(() => [(0, import_vue42.createTextVNode)(
          (0, import_vue42.toDisplayString)($setup.uls("如可能，通知创建者", "如可能，通知建立者")),
          1
          /* TEXT */
        )]),
        _: 1
        /* STABLE */
      }, 8, ["modelValue", "title"]), (0, import_vue42.createVNode)($setup["CdxCheckbox"], {
        modelValue: $setup.blank,
        "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => $setup.blank = $event),
        title: $setup.uls("在标记模板前，先清空页面，适用于严重破坏或负面生者传记等。", "在標記模板前，先清空頁面，適用於嚴重破壞或負面生者傳記等。")
      }, {
        default: (0, import_vue42.withCtx)(() => [(0, import_vue42.createTextVNode)(
          (0, import_vue42.toDisplayString)($setup.uls("清空页面", "清空頁面")),
          1
          /* TEXT */
        )]),
        _: 1
        /* STABLE */
      }, 8, ["modelValue", "title"]), (0, import_vue42.createVNode)($setup["CdxCheckbox"], {
        modelValue: $setup.salting,
        "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => $setup.salting = $event),
        title: $setup.saltingTooltip
      }, {
        default: (0, import_vue42.withCtx)(() => [(0, import_vue42.createTextVNode)(
          (0, import_vue42.toDisplayString)($setup.uls("同时标记以请求白纸保护", "同時標記以請求白紙保護")),
          1
          /* TEXT */
        )]),
        _: 1
        /* STABLE */
      }, 8, ["modelValue", "title"]), (0, import_vue42.createVNode)($setup["CdxCheckbox"], {
        modelValue: $setup.multiple,
        "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => $setup.multiple = $event),
        title: $setup.uls("您可选择应用于该页的多个理由。", "您可選擇應用於該頁的多個理由。")
      }, {
        default: (0, import_vue42.withCtx)(() => [(0, import_vue42.createTextVNode)(
          (0, import_vue42.toDisplayString)($setup.uls("应用多个理由", "應用多個理由")),
          1
          /* TEXT */
        )]),
        _: 1
        /* STABLE */
      }, 8, ["modelValue", "title"])],
      64
      /* STABLE_FRAGMENT */
    )), $props.priorCountText ? ((0, import_vue42.openBlock)(), (0, import_vue42.createElementBlock)(
      "div",
      {
        key: 3,
        class: "tw-speedy-prior",
        style: (0, import_vue42.normalizeStyle)({
          color: $props.priorCountColor
        })
      },
      [(0, import_vue42.createTextVNode)(
        (0, import_vue42.toDisplayString)($props.priorCountText) + " ",
        1
        /* TEXT */
      ), (0, import_vue42.createElementVNode)("a", {
        href: $setup.priorLogUrl,
        target: "_blank",
        rel: "noopener noreferrer"
      }, (0, import_vue42.toDisplayString)($setup.uls("（日志）", "（日誌）")), 9, _hoisted_37)],
      4
      /* STYLE */
    )) : (0, import_vue42.createCommentVNode)("v-if", true), $props.radioClick && $setup.isMultiple ? ((0, import_vue42.openBlock)(), (0, import_vue42.createElementBlock)(
      import_vue42.Fragment,
      {
        key: 4
      },
      [(0, import_vue42.createElementVNode)(
        "div",
        null,
        (0, import_vue42.toDisplayString)($setup.uls("当选择完成后，单击：", "當選擇完成後，點擊：")),
        1
        /* TEXT */
      ), (0, import_vue42.createVNode)($setup["CdxButton"], {
        action: "progressive",
        weight: "primary",
        onClick: $setup.submit
      }, {
        default: (0, import_vue42.withCtx)(() => [(0, import_vue42.createTextVNode)(
          (0, import_vue42.toDisplayString)($setup.submitText),
          1
          /* TEXT */
        )]),
        _: 1
        /* STABLE */
      })],
      64
      /* STABLE_FRAGMENT */
    )) : (0, import_vue42.createCommentVNode)("v-if", true), ((0, import_vue42.openBlock)(true), (0, import_vue42.createElementBlock)(
      import_vue42.Fragment,
      null,
      (0, import_vue42.renderList)($setup.criteriaGroups, (group) => {
        return (0, import_vue42.openBlock)(), (0, import_vue42.createElementBlock)(
          import_vue42.Fragment,
          {
            key: group.title
          },
          [(0, import_vue42.createElementVNode)(
            "h4",
            _hoisted_46,
            (0, import_vue42.toDisplayString)(group.title),
            1
            /* TEXT */
          ), ((0, import_vue42.openBlock)(true), (0, import_vue42.createElementBlock)(
            import_vue42.Fragment,
            null,
            (0, import_vue42.renderList)(group.items, (criterion) => {
              return (0, import_vue42.openBlock)(), (0, import_vue42.createElementBlock)(
                import_vue42.Fragment,
                {
                  key: criterion.value
                },
                [!$setup.isMultiple ? ((0, import_vue42.openBlock)(), (0, import_vue42.createBlock)($setup["CdxRadio"], {
                  key: 0,
                  "model-value": $setup.selectedCsd[0] ?? "",
                  "input-value": criterion.value,
                  name: "tw-speedy-csd",
                  disabled: $setup.radioDisabled(criterion),
                  "onUpdate:modelValue": ($event) => $setup.onSelectionChange(criterion.value, $event)
                }, {
                  default: (0, import_vue42.withCtx)(() => [(0, import_vue42.createElementVNode)(
                    "span",
                    {
                      class: (0, import_vue42.normalizeClass)({
                        "tw-speedy-g7": criterion.value === "g7" && $props.enlargeG7
                      })
                    },
                    (0, import_vue42.toDisplayString)(criterion.label),
                    3
                    /* TEXT, CLASS */
                  )]),
                  _: 2
                  /* DYNAMIC */
                }, 1032, ["model-value", "input-value", "disabled", "onUpdate:modelValue"])) : ((0, import_vue42.openBlock)(), (0, import_vue42.createBlock)($setup["CdxCheckbox"], {
                  key: 1,
                  "model-value": $setup.selectedCsd,
                  "input-value": criterion.value,
                  name: "tw-speedy-csd",
                  "onUpdate:modelValue": ($event) => $setup.toggleSelection(criterion.value, $event)
                }, {
                  default: (0, import_vue42.withCtx)(() => [(0, import_vue42.createElementVNode)(
                    "span",
                    {
                      class: (0, import_vue42.normalizeClass)({
                        "tw-speedy-g7": criterion.value === "g7" && $props.enlargeG7
                      })
                    },
                    (0, import_vue42.toDisplayString)(criterion.label),
                    3
                    /* TEXT, CLASS */
                  )]),
                  _: 2
                  /* DYNAMIC */
                }, 1032, ["model-value", "input-value", "onUpdate:modelValue"])), criterion.tooltip ? ((0, import_vue42.openBlock)(), (0, import_vue42.createElementBlock)(
                  "div",
                  _hoisted_54,
                  (0, import_vue42.toDisplayString)(criterion.tooltip),
                  1
                  /* TEXT */
                )) : (0, import_vue42.createCommentVNode)("v-if", true), $setup.subgroupVisible(criterion) ? ((0, import_vue42.openBlock)(), (0, import_vue42.createElementBlock)("div", _hoisted_64, [((0, import_vue42.openBlock)(true), (0, import_vue42.createElementBlock)(
                  import_vue42.Fragment,
                  null,
                  (0, import_vue42.renderList)($setup.subgroupList(criterion), (subgroup) => {
                    return (0, import_vue42.openBlock)(), (0, import_vue42.createElementBlock)(
                      import_vue42.Fragment,
                      {
                        key: subgroup.name
                      },
                      [subgroup.type === "input" ? ((0, import_vue42.openBlock)(), (0, import_vue42.createElementBlock)(
                        import_vue42.Fragment,
                        {
                          key: 0
                        },
                        [(0, import_vue42.createElementVNode)("label", {
                          for: `tw-speedy-${subgroup.name}`
                        }, (0, import_vue42.toDisplayString)(subgroup.label), 9, _hoisted_72), (0, import_vue42.createVNode)($setup["CdxTextInput"], {
                          id: `tw-speedy-${subgroup.name}`,
                          "model-value": $setup.getSubgroupValue(subgroup.name),
                          "onUpdate:modelValue": ($event) => $setup.setSubgroupValue(subgroup.name, $event)
                        }, null, 8, ["id", "model-value", "onUpdate:modelValue"])],
                        64
                        /* STABLE_FRAGMENT */
                      )) : ((0, import_vue42.openBlock)(), (0, import_vue42.createElementBlock)(
                        import_vue42.Fragment,
                        {
                          key: 1
                        },
                        [(0, import_vue42.createElementVNode)("label", {
                          for: `tw-speedy-${subgroup.name}`
                        }, (0, import_vue42.toDisplayString)(subgroup.label), 9, _hoisted_82), (0, import_vue42.createVNode)($setup["CdxSelect"], {
                          id: `tw-speedy-${subgroup.name}`,
                          selected: $setup.getSubgroupValue(subgroup.name),
                          "menu-items": (subgroup.list ?? []).map((item) => ({
                            value: item.value,
                            label: item.label
                          })),
                          "onUpdate:selected": ($event) => $setup.setSubgroupValue(subgroup.name, $event)
                        }, null, 8, ["id", "selected", "menu-items", "onUpdate:selected"])],
                        64
                        /* STABLE_FRAGMENT */
                      ))],
                      64
                      /* STABLE_FRAGMENT */
                    );
                  }),
                  128
                  /* KEYED_FRAGMENT */
                )), $setup.radioOpen(criterion) ? ((0, import_vue42.openBlock)(), (0, import_vue42.createBlock)($setup["CdxButton"], {
                  key: 0,
                  action: "progressive",
                  weight: "primary",
                  onClick: $setup.submit
                }, {
                  default: (0, import_vue42.withCtx)(() => [(0, import_vue42.createTextVNode)(
                    (0, import_vue42.toDisplayString)($setup.submitText),
                    1
                    /* TEXT */
                  )]),
                  _: 1
                  /* STABLE */
                })) : (0, import_vue42.createCommentVNode)("v-if", true)])) : (0, import_vue42.createCommentVNode)("v-if", true)],
                64
                /* STABLE_FRAGMENT */
              );
            }),
            128
            /* KEYED_FRAGMENT */
          ))],
          64
          /* STABLE_FRAGMENT */
        );
      }),
      128
      /* KEYED_FRAGMENT */
    )), $setup.fileHintVisible ? ((0, import_vue42.openBlock)(), (0, import_vue42.createElementBlock)(
      "div",
      _hoisted_92,
      (0, import_vue42.toDisplayString)($setup.uls("标记CSD F1、F3、F5，请使用Twinkle的“图权”功能。", "標記CSD F1、F3、F5，請使用Twinkle的「圖權」功能。")),
      1
      /* TEXT */
    )) : (0, import_vue42.createCommentVNode)("v-if", true), !$setup.sysopMode ? ((0, import_vue42.openBlock)(), (0, import_vue42.createElementBlock)(
      "div",
      _hoisted_102,
      (0, import_vue42.toDisplayString)($setup.uls("提报侵权页面，请使用Twinkle的“侵权”功能。", "提報侵權頁面，請使用Twinkle的「侵權」功能。")),
      1
      /* TEXT */
    )) : (0, import_vue42.createCommentVNode)("v-if", true), $setup.nonWikitextNotice ? ((0, import_vue42.openBlock)(), (0, import_vue42.createElementBlock)("div", _hoisted_112, [(0, import_vue42.createTextVNode)(
      (0, import_vue42.toDisplayString)($setup.uls("Twinkle不支持在页面内容模型为", "Twinkle不支援在頁面內容模型為") + $props.pageContentModel + $setup.uls("的页面上挂上快速删除模板，请参见", "的頁面上掛上快速刪除模板，請參見")) + " ",
      1
      /* TEXT */
    ), (0, import_vue42.createElementVNode)("a", {
      href: $setup.specialSdUrl,
      target: "_blank",
      rel: "noopener noreferrer"
    }, (0, import_vue42.toDisplayString)($setup.uls("手动放置模板时的注意事项", "手動放置模板時的注意事項")), 9, _hoisted_123), _cache[9] || (_cache[9] = (0, import_vue42.createTextVNode)(
      " 。 ",
      -1
      /* CACHED */
    ))])) : (0, import_vue42.createCommentVNode)("v-if", true), (0, import_vue42.createVNode)(
      $setup["TwStatus"],
      {
        ref: "statusRef"
      },
      null,
      512
      /* NEED_PATCH */
    )]),
    _: 1
    /* STABLE */
  }, 8, ["open", "title", "footer-links", "primary-action"]);
}
//! src/Twinkle/modules/ui/TwSpeedyDialog.vue
TwSpeedyDialog_default.render = render14;
TwSpeedyDialog_default.__file = "src\\Twinkle\\modules\\ui\\TwSpeedyDialog.vue";
TwSpeedyDialog_default.__scopeId = "data-v-ffa653d5";
var TwSpeedyDialog_default2 = TwSpeedyDialog_default;
var import_vue43 = require("vue");
var import_codex15 = require("@wikimedia/codex");
var import_vue44 = require("vue");
var TwStubDialog_default = /* @__PURE__ */ (0, import_vue43.defineComponent)({
  __name: "TwStubDialog",
  props: {
    title: {
      type: String,
      required: true
    },
    mode: {
      type: String,
      required: true
    },
    initialSortOrder: {
      type: String,
      required: true
    },
    showPatrol: {
      type: Boolean,
      required: true
    },
    initialPatrol: {
      type: Boolean,
      required: true
    },
    customTags: {
      type: Array,
      required: true
    },
    catGroups: {
      type: Array,
      required: true
    },
    alphaTags: {
      type: Array,
      required: true
    },
    footerLinks: {
      type: Array,
      required: true
    }
  },
  emits: ["close"],
  setup(__props, {
    expose: __expose,
    emit: __emit
  }) {
    __expose();
    const props = __props;
    const emit = __emit;
    const open = (0, import_vue44.ref)(true);
    const sortOrder = (0, import_vue44.ref)(props.initialSortOrder);
    const selectedTags = (0, import_vue44.ref)([]);
    const patrol = (0, import_vue44.ref)(props.initialPatrol);
    const submitting = (0, import_vue44.ref)(false);
    const statusRef = (0, import_vue44.ref)(null);
    const sortOrderItems = [{
      value: "cat",
      label: uls("按类型", "按類別")
    }, {
      value: "alpha",
      label: "按字母"
    }];
    const displayGroups = (0, import_vue44.computed)(() => {
      const groups = [];
      if (props.customTags.length > 0) {
        groups.push({
          header: uls("自定义模板", "自訂模板"),
          subgroups: [{
            items: props.customTags
          }]
        });
      }
      if (sortOrder.value === "cat") {
        groups.push(...props.catGroups);
      } else {
        groups.push({
          header: "",
          subgroups: [{
            items: props.alphaTags
          }]
        });
      }
      return groups;
    });
    const onTagToggle = (value, modelValue) => {
      if (Array.isArray(modelValue)) {
        selectedTags.value = modelValue.filter((item) => typeof item === "string");
      } else if (modelValue) {
        selectedTags.value = [...selectedTags.value, value];
      } else {
        selectedTags.value = selectedTags.value.filter((item) => item !== value);
      }
    };
    const primaryAction = (0, import_vue44.computed)(() => ({
      label: uls("提交", "提交"),
      actionType: "progressive",
      disabled: submitting.value
    }));
    const submit = () => {
      var _statusRef$value16;
      if (submitting.value) {
        return;
      }
      submitting.value = true;
      evaluate({
        patrol: patrol.value,
        tags: [...selectedTags.value],
        group: false
      }, ((_statusRef$value16 = statusRef.value) === null || _statusRef$value16 === void 0 ? void 0 : _statusRef$value16.getStatusRoot()) ?? null, () => {
        submitting.value = false;
      });
    };
    (0, import_vue44.watch)(open, (value) => {
      if (!value) {
        emit("close");
      }
    });
    const callbacks = {
      main: (pageobj) => {
        const params = pageobj.getCallbackParameters();
        let summaryText = "加入";
        let tags = [];
        let pageText = pageobj.getPageText() ?? "";
        for (const tag of params.tags) {
          const tagRe = new RegExp(`(\\{\\{${tag}(\\||\\}\\}))`, "im");
          if (tagRe.exec(pageText)) {
            Morebits.status.info(uls("信息", "資訊"), uls(`在页面上找到{{${tag}}}……跳过`, `在頁面上找到{{${tag}}}……跳過`));
          } else {
            tags = tags.concat(tag);
          }
        }
        tags.sort();
        const totalTags = tags.length;
        const addTag = (tagName, tagIndex) => {
          pageText += `
{{${tagName}}}`;
          if (tagIndex > 0) {
            if (tagIndex === totalTags - 1) {
              summaryText += "和";
            } else if (tagIndex < totalTags - 1) {
              summaryText += "、";
            }
          }
          summaryText += "{{[[";
          summaryText += tagName.includes(":") ? tagName : `Template:${tagName}|${tagName}`;
          summaryText += "]]}}";
        };
        tags.forEach((tag, tagIndex) => {
          addTag(tag, tagIndex);
        });
        summaryText += uls("标记到", "標記到") + props.mode;
        pageobj.setPageText(pageText);
        pageobj.setEditSummary(summaryText);
        pageobj.setChangeTags(Twinkle.changeTags);
        pageobj.setWatchlist(Twinkle.getPref("watchStubbedPages") === true);
        pageobj.setMinorEdit(Twinkle.getPref("markStubbedPagesAsMinor") === true);
        pageobj.setCreateOption("nocreate");
        pageobj.save();
        if (params.patrol) {
          pageobj.patrol();
        }
      }
    };
    const evaluate = (params, statusContainer, restore) => {
      switch (props.mode) {
        case "條目":
        case "条目":
          params.group = false;
          break;
        default:
          void mw.notify(`Twinkle.stub：未知模式 ${props.mode}`, {
            type: "warn",
            tag: "twinklestub"
          });
          if (restore) {
            restore();
          }
          return;
      }
      if (params.tags.length === 0) {
        void mw.notify(uls("必须选择至少一个标记！", "必須選擇至少一個標記！"), {
          type: "warn",
          tag: "twinklestub"
        });
        if (restore) {
          restore();
        }
        return;
      }
      Morebits.status.init(statusContainer);
      Morebits.wiki.actionCompleted.redirect = mw.config.get("wgPageName");
      Morebits.wiki.actionCompleted.notice = uls("标记完成，将在几秒内刷新页面", "標記完成，將在幾秒內重新整理頁面");
      const qiuwen_page = new Morebits.wiki.page(mw.config.get("wgPageName"), uls("正在标记", "正在標記") + props.mode);
      qiuwen_page.setCallbackParameters(params);
      qiuwen_page.load(callbacks.main);
    };
    const __returned__ = {
      props,
      emit,
      open,
      sortOrder,
      selectedTags,
      patrol,
      submitting,
      statusRef,
      sortOrderItems,
      displayGroups,
      onTagToggle,
      primaryAction,
      submit,
      callbacks,
      evaluate,
      get CdxCheckbox() {
        return import_codex15.CdxCheckbox;
      },
      get CdxField() {
        return import_codex15.CdxField;
      },
      get CdxSelect() {
        return import_codex15.CdxSelect;
      },
      TwDialog: TwDialog_default2,
      TwStatus: TwStatus_default2,
      get uls() {
        return uls;
      }
    };
    Object.defineProperty(__returned__, "__isScriptSetup", {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});
var import_vue45 = require("vue");
var _hoisted_113 = {
  key: 0,
  class: "tw-stub-group-header"
};
var _hoisted_211 = {
  key: 0
};
var _hoisted_38 = ["href"];
function render15(_ctx, _cache, $props, $setup, $data, $options) {
  return (0, import_vue45.openBlock)(), (0, import_vue45.createBlock)($setup["TwDialog"], {
    open: $setup.open,
    title: $props.title,
    "script-name": "Twinkle",
    "footer-links": $props.footerLinks,
    "primary-action": $setup.primaryAction,
    "onUpdate:open": _cache[2] || (_cache[2] = ($event) => $setup.open = $event),
    onPrimary: $setup.submit
  }, {
    default: (0, import_vue45.withCtx)(() => [$props.showPatrol ? ((0, import_vue45.openBlock)(), (0, import_vue45.createBlock)($setup["CdxCheckbox"], {
      key: 0,
      modelValue: $setup.patrol,
      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.patrol = $event),
      disabled: $setup.submitting
    }, {
      default: (0, import_vue45.withCtx)(() => [(0, import_vue45.createTextVNode)(
        (0, import_vue45.toDisplayString)($setup.uls("标记页面为已巡查", "標記頁面為已巡查")),
        1
        /* TEXT */
      )]),
      _: 1
      /* STABLE */
    }, 8, ["modelValue", "disabled"])) : (0, import_vue45.createCommentVNode)("v-if", true), (0, import_vue45.createVNode)($setup["CdxField"], null, {
      label: (0, import_vue45.withCtx)(() => [(0, import_vue45.createTextVNode)(
        (0, import_vue45.toDisplayString)($setup.uls("查看列表：", "檢視列表：")),
        1
        /* TEXT */
      )]),
      default: (0, import_vue45.withCtx)(() => [(0, import_vue45.createVNode)($setup["CdxSelect"], {
        selected: $setup.sortOrder,
        "onUpdate:selected": _cache[1] || (_cache[1] = ($event) => $setup.sortOrder = $event),
        "menu-items": $setup.sortOrderItems,
        disabled: $setup.submitting
      }, null, 8, ["selected", "disabled"])]),
      _: 1
      /* STABLE */
    }), ((0, import_vue45.openBlock)(true), (0, import_vue45.createElementBlock)(
      import_vue45.Fragment,
      null,
      (0, import_vue45.renderList)($setup.displayGroups, (group, groupIndex) => {
        return (0, import_vue45.openBlock)(), (0, import_vue45.createElementBlock)("div", {
          key: `${group.header}-${groupIndex}`
        }, [group.header ? ((0, import_vue45.openBlock)(), (0, import_vue45.createElementBlock)(
          "h5",
          _hoisted_113,
          (0, import_vue45.toDisplayString)(group.header),
          1
          /* TEXT */
        )) : (0, import_vue45.createCommentVNode)("v-if", true), ((0, import_vue45.openBlock)(true), (0, import_vue45.createElementBlock)(
          import_vue45.Fragment,
          null,
          (0, import_vue45.renderList)(group.subgroups, (subgroup, subgroupIndex) => {
            return (0, import_vue45.openBlock)(), (0, import_vue45.createElementBlock)("div", {
              key: `${subgroup.title ?? ""}-${subgroupIndex}`
            }, [subgroup.title ? ((0, import_vue45.openBlock)(), (0, import_vue45.createElementBlock)(
              "b",
              _hoisted_211,
              (0, import_vue45.toDisplayString)(subgroup.title),
              1
              /* TEXT */
            )) : (0, import_vue45.createCommentVNode)("v-if", true), ((0, import_vue45.openBlock)(true), (0, import_vue45.createElementBlock)(
              import_vue45.Fragment,
              null,
              (0, import_vue45.renderList)(subgroup.items, (item) => {
                return (0, import_vue45.openBlock)(), (0, import_vue45.createBlock)($setup["CdxCheckbox"], {
                  key: item.value,
                  "model-value": $setup.selectedTags,
                  "input-value": item.value,
                  name: "twinkle-stub-tags",
                  disabled: $setup.submitting,
                  "onUpdate:modelValue": ($event) => $setup.onTagToggle(item.value, $event)
                }, {
                  default: (0, import_vue45.withCtx)(() => [(0, import_vue45.createTextVNode)(
                    (0, import_vue45.toDisplayString)(item.label) + " ",
                    1
                    /* TEXT */
                  ), (0, import_vue45.createElementVNode)("a", {
                    href: item.url,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    class: "tw-stub-template-link"
                  }, " › ", 8, _hoisted_38)]),
                  _: 2
                  /* DYNAMIC */
                }, 1032, ["model-value", "input-value", "disabled", "onUpdate:modelValue"]);
              }),
              128
              /* KEYED_FRAGMENT */
            ))]);
          }),
          128
          /* KEYED_FRAGMENT */
        ))]);
      }),
      128
      /* KEYED_FRAGMENT */
    )), (0, import_vue45.createVNode)(
      $setup["TwStatus"],
      {
        ref: "statusRef"
      },
      null,
      512
      /* NEED_PATCH */
    )]),
    _: 1
    /* STABLE */
  }, 8, ["open", "title", "footer-links", "primary-action"]);
}
//! src/Twinkle/modules/ui/TwStubDialog.vue
TwStubDialog_default.render = render15;
TwStubDialog_default.__file = "src\\Twinkle\\modules\\ui\\TwStubDialog.vue";
TwStubDialog_default.__scopeId = "data-v-ffa9486f";
var TwStubDialog_default2 = TwStubDialog_default;
var import_vue46 = require("vue");
var import_codex16 = require("@wikimedia/codex");
var import_vue47 = require("vue");
var TwTagDialog_default = /* @__PURE__ */ (0, import_vue46.defineComponent)({
  __name: "TwTagDialog",
  props: {
    mode: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    canRemove: {
      type: Boolean,
      required: true
    },
    isMainspace: {
      type: Boolean,
      required: true
    },
    initialSortOrder: {
      type: String,
      required: true
    },
    initialGroup: {
      type: Boolean,
      required: true
    },
    showPatrol: {
      type: Boolean,
      required: true
    },
    initialPatrol: {
      type: Boolean,
      required: true
    },
    articleGroups: {
      type: Array,
      required: true
    },
    alphaTags: {
      type: Array,
      required: true
    },
    alreadyPresentTags: {
      type: Array,
      required: true
    },
    flatDescriptions: {
      type: Object,
      required: true
    },
    flatExcludeMI: {
      type: Object,
      required: true
    },
    fileGroups: {
      type: Array,
      required: true
    },
    redirectGroups: {
      type: Array,
      required: true
    },
    customGroups: {
      type: Array,
      required: true
    },
    footerLinks: {
      type: Array,
      required: true
    }
  },
  emits: ["close"],
  setup(__props, {
    expose: __expose,
    emit: __emit
  }) {
    __expose();
    const props = __props;
    const emit = __emit;
    const open = (0, import_vue47.ref)(true);
    const submitting = (0, import_vue47.ref)(false);
    const filterText = (0, import_vue47.ref)("");
    const sortorder = (0, import_vue47.ref)(props.initialSortOrder);
    const selectedTags = (0, import_vue47.ref)([]);
    const existingChecked = (0, import_vue47.ref)(props.mode === "article" ? [...props.alreadyPresentTags] : []);
    const groupByDefault = (0, import_vue47.ref)(props.initialGroup);
    const reason = (0, import_vue47.ref)("");
    const patrol = (0, import_vue47.ref)(props.initialPatrol);
    const statusRef = (0, import_vue47.ref)(null);
    const subgroupValues = (0, import_vue47.reactive)({});
    const sortItems = [{
      value: "cat",
      label: uls("按类型", "按類別")
    }, {
      value: "alpha",
      label: "按字母"
    }];
    const filterRegex = (0, import_vue47.computed)(() => {
      const trimmed = filterText.value.trim();
      if (!trimmed) {
        return null;
      }
      try {
        return new RegExp(mw.util.escapeRegExp(trimmed), "i");
      } catch {
        return null;
      }
    });
    const filterMatch = (text) => {
      if (!filterRegex.value) {
        return true;
      }
      return filterRegex.value.test(text);
    };
    const filterGroup = (group) => {
      const items = group.items.filter((item) => !props.alreadyPresentTags.includes(item.tag) && filterMatch(item.label));
      if (items.length === 0) {
        return null;
      }
      return {
        ...group,
        items
      };
    };
    const filteredFileGroups = (0, import_vue47.computed)(() => props.fileGroups.map(filterGroup).filter((g) => g !== null));
    const filteredRedirectGroups = (0, import_vue47.computed)(() => props.redirectGroups.map(filterGroup).filter((g) => g !== null));
    const filteredCustomGroups = (0, import_vue47.computed)(() => props.customGroups.map(filterGroup).filter((g) => g !== null));
    const filteredArticleGroups = (0, import_vue47.computed)(() => {
      if (sortorder.value !== "cat") {
        return props.articleGroups;
      }
      return props.articleGroups.map((group) => {
        const subgroups = group.subgroups.map((subgroup) => ({
          ...subgroup,
          items: subgroup.items.filter((item) => !props.alreadyPresentTags.includes(item.tag) && (!filterRegex.value || filterMatch("{{".concat(item.tag, "}}: ").concat(item.description))))
        })).filter((subgroup) => subgroup.items.length > 0);
        return subgroups.length > 0 ? {
          ...group,
          subgroups
        } : null;
      }).filter((g) => g !== null);
    });
    const filteredAlphaTags = (0, import_vue47.computed)(() => props.alphaTags.filter((item) => !props.alreadyPresentTags.includes(item.tag) && (!filterRegex.value || filterMatch("{{".concat(item.tag, "}}: ").concat(item.description)))));
    const filteredAlreadyPresent = (0, import_vue47.computed)(() => {
      if (!filterRegex.value) {
        return props.alreadyPresentTags;
      }
      return props.alreadyPresentTags.filter((tag) => filterMatch(`{{${tag}}}: ${props.flatDescriptions[tag] ?? ""}`));
    });
    const templateLink = (tag) => mw.util.getUrl(`Template:${tag}`);
    (0, import_vue47.watch)(() => props.alreadyPresentTags, (tags) => {
      if (props.mode === "article" && props.canRemove) {
        existingChecked.value = [...tags];
      }
    }, {
      deep: true,
      immediate: true
    });
    const setSubgroupValue = (name, value) => {
      if (typeof value === "number") {
        subgroupValues[name] = String(value);
      } else if (value === null) {
        subgroupValues[name] = false;
      } else if (Array.isArray(value)) {
        subgroupValues[name] = value.length > 0;
      } else {
        subgroupValues[name] = value;
      }
    };
    const getSubgroupText = (name, defaultValue = "") => {
      const value = subgroupValues[name];
      return typeof value === "string" ? value : defaultValue;
    };
    const getSubgroupCheck = (name, defaultValue) => {
      const value = subgroupValues[name];
      return typeof value === "boolean" ? value : defaultValue;
    };
    const addTag = (value, modelValue) => {
      if (Array.isArray(modelValue)) {
        const next = modelValue.filter((item) => typeof item === "string");
        selectedTags.value = !groupByDefault.value && next.length > 1 ? [next.at(-1) ?? value] : next;
      } else if (modelValue) {
        if (groupByDefault.value) {
          selectedTags.value = [...selectedTags.value, value];
        } else {
          selectedTags.value = [value];
        }
      } else {
        selectedTags.value = selectedTags.value.filter((item) => item !== value);
      }
    };
    (0, import_vue47.watch)(groupByDefault, (grouped) => {
      if (!grouped && selectedTags.value.length > 1) {
        selectedTags.value = [selectedTags.value.at(-1) ?? ""].filter(Boolean);
      }
    });
    const addExisting = (value, modelValue) => {
      if (Array.isArray(modelValue)) {
        existingChecked.value = modelValue.filter((item) => typeof item === "string");
      } else if (modelValue) {
        existingChecked.value = [...existingChecked.value, value];
      } else {
        existingChecked.value = existingChecked.value.filter((item) => item !== value);
      }
    };
    const buildParams = () => {
      const tagsToRemove = props.alreadyPresentTags.filter((tag) => !existingChecked.value.includes(tag));
      return {
        tags: [...selectedTags.value],
        existingTags: [...existingChecked.value],
        tagsToRemove,
        group: groupByDefault.value,
        reason: reason.value,
        patrol: patrol.value,
        ...subgroupValues
      };
    };
    const existingLabel = (tag) => `{{${tag}}}`;
    const tagLabel = (tag, description) => description ? `{{${tag}}}: ${description}` : `{{${tag}}}`;
    const mergeTagOtherLabel = (0, import_vue47.computed)(() => {
      const other = selectedTags.value.includes("Merge to") ? "Merge from" : selectedTags.value.includes("Merge from") ? "Merge to" : "Merge";
      return `用{{${other}${uls("}}标记其他条目", "}}標記其他條目")}`;
    });
    const mergeReasonLabel = (0, import_vue47.computed)(() => uls(`合并理由（会被贴上${selectedTags.value.includes("Merge to") ? "其他" : "这"}条目的讨论页）：`, `合併理由（會被貼上${selectedTags.value.includes("Merge to") ? "其他" : "這"}條目的討論頁）：`));
    const groupLabel = uls("如可能，合并入{{multiple issues}}", "如可能，合併入{{multiple issues}}");
    const groupTooltip = uls("若加入{{multiple issues}}支持的三个以上的模板，所有支持的模板都会被合并入{{multiple issues}}模板中。", "若加入{{multiple issues}}支援的三個以上的模板，所有支援的模板都會被合併入{{multiple issues}}模板中。");
    const primaryAction = (0, import_vue47.computed)(() => ({
      label: uls("提交", "提交"),
      actionType: "progressive",
      disabled: submitting.value
    }));
    const submit = () => {
      var _statusRef$value17;
      if (submitting.value) {
        return;
      }
      submitting.value = true;
      evaluate(buildParams(), ((_statusRef$value17 = statusRef.value) === null || _statusRef$value17 === void 0 ? void 0 : _statusRef$value17.getStatusRoot()) ?? null, () => {
        submitting.value = false;
      });
    };
    (0, import_vue47.watch)(open, (value) => {
      if (!value) {
        emit("close");
      }
    });
    const notabilityOptions = [{
      value: "none",
      label: `{{Notability}}：${uls("通用收录标准", "通用收錄標準")}`
    }, {
      value: "Astro",
      label: `{{Notability|Astro}}：${uls("天体", "天體")}`
    }, {
      value: "Biographies",
      label: `{{Notability|Biographies}}：${uls("人物传记", "人物傳記")}`
    }, {
      value: "Book",
      label: `{{Notability|Book}}：${uls("书籍", "書籍")}`
    }, {
      value: "Cyclone",
      label: `{{Notability|Cyclone}}：${uls("气旋", "氣旋")}`
    }, {
      value: "Fiction",
      label: `{{Notability|Fiction}}：${uls("虚构事物", "虛構事物")}`
    }, {
      value: "Geographic",
      label: `{{Notability|Geographic}}：${uls("地理特征", "地理特徵")}`
    }, {
      value: "Geometry",
      label: `{{Notability|Geometry}}：${uls("几何图形", "幾何圖形")}`
    }, {
      value: "Invention",
      label: `{{Notability|Invention}}：${uls("发明、研究", "發明、研究")}`
    }, {
      value: "Music",
      label: `{{Notability|Music}}：${uls("音乐", "音樂")}`
    }, {
      value: "Numbers",
      label: `{{Notability|Numbers}}：${uls("数字", "數字")}`
    }, {
      value: "Organizations",
      label: `{{Notability|Organizations}}：${uls("组织", "組織")}`
    }, {
      value: "Property",
      label: `{{Notability|Property}}：${uls("性质表", "性質表")}`
    }, {
      value: "Traffic",
      label: "{{Notability|Traffic}}：交通"
    }, {
      value: "Web",
      label: `{{Notability|Web}}：${uls("网站、网络内容", "網站、網路內容")}（非正式指引）`
    }];
    const selectItems = (options) => (options ?? []).map((option) => ({
      value: option.value,
      label: option.label
    }));
    const callbacks = {
      article: (pageobj) => {
        let pageText = (pageobj.getPageText() ?? "").replace(/\{\{\s*([Nn]ew unreviewed article|[Uu]nreviewed|[Uu]serspace draft)\s*(\|(?:\{\{[^{}]*\}\}|[^{}])*)?\}\}\s*/g, "");
        const params = pageobj.getCallbackParameters();
        const postRemoval = () => {
          if (params.tagsToRemove.length) {
            pageText = pageText.replace(/\{\{(multiple ?issues|article ?issues|mi|ai|issues|多個問題|多个问题|問題條目|问题条目|數個問題|数个问题)\s*\|\s*\}\}\n?/im, "");
            pageText = pageText.replace(/\{\{(?:multiple ?issues|article ?issues|mi|ai|issues|多個問題|多个问题|問題條目|问题条目|數個問題|数个问题)\s*\|\s*(\{\{(?:\{\{[^{}]*\}\}|[^{}])+\}\})\s*\}\}/im, "$1");
          }
          const makeSentence = (array) => {
            if (array.length < 3) {
              return array.join("和");
            }
            const last = array.pop();
            return `${array.join("、")}和${last}`;
          };
          const makeTemplateLink = (tag) => {
            let text = "{{[[";
            if (tag.includes("|")) {
              tag = tag.slice(0, tag.indexOf("|"));
            }
            text += tag.includes(":") ? tag : `Template:${tag}|${tag}`;
            return `${text}]]}}`;
          };
          let summaryText;
          const addedTags = params.tags.map(makeTemplateLink);
          const removedTags = params.tagsToRemove.map(makeTemplateLink);
          if (addedTags.length) {
            summaryText = `加入${makeSentence(addedTags)}`;
            summaryText += removedTags.length ? `并移除${makeSentence(removedTags)}` : "";
          } else {
            summaryText = `移除${makeSentence(removedTags)}`;
          }
          summaryText += uls("标记", "標記");
          if (params.reason) {
            summaryText += `：${params.reason}`;
          }
          if (summaryText.length > 499) {
            summaryText = summaryText.replace(/\[\[[^|]+\|([^\]]+)\]\]/g, "$1");
          }
          pageobj.setPageText(pageText);
          pageobj.setEditSummary(summaryText);
          pageobj.setChangeTags(Twinkle.changeTags);
          pageobj.setWatchlist(Twinkle.getPref("watchTaggedPages"));
          pageobj.setMinorEdit(Boolean(Twinkle.getPref("markTaggedPagesAsMinor")));
          pageobj.setCreateOption("nocreate");
          pageobj.save(() => {
            if (params.mergeReason) {
              const talkpage = new Morebits.wiki.page(`Talk:${params.discussArticle}`, uls("将理由贴进讨论页", "將理由貼進討論頁"));
              talkpage.setNewSectionText(`${params.mergeReason.trim()} ~~`.concat("~~"));
              talkpage.setNewSectionTitle(`请求与[[${params.nonDiscussArticle}]]合并`);
              talkpage.setChangeTags(Twinkle.changeTags);
              talkpage.setWatchlist(Twinkle.getPref("watchMergeDiscussions"));
              talkpage.setCreateOption("recreate");
              talkpage.newSection();
            }
            if (params.mergeTagOther) {
              let otherTagName = "Merge";
              if (params.mergeTag === "Merge from") {
                otherTagName = "Merge to";
              } else if (params.mergeTag === "Merge to") {
                otherTagName = "Merge from";
              }
              const newParams = {
                tags: [otherTagName],
                tagsToRemove: [],
                tagsToRemain: [],
                mergeTarget: Morebits.pageNameNorm,
                discussArticle: params.discussArticle,
                talkDiscussionTitle: params.talkDiscussionTitle,
                talkDiscussionTitleLinked: params.talkDiscussionTitleLinked
              };
              const otherpage = new Morebits.wiki.page(params.mergeTarget ?? "", `${uls("标记其他页面（", "標記其他頁面（")}${params.mergeTarget ?? ""}）`);
              otherpage.setCallbackParameters(newParams);
              otherpage.load(callbacks.article);
            }
            if (params.moveReason) {
              let moveTalkpageText = "\n\n{{".concat("subst:", `RM|1=${params.moveReason.trim()}`);
              if (params.moveTarget) {
                moveTalkpageText += `|2=${params.moveTarget}`;
              }
              moveTalkpageText += "}}";
              const moveTalkpage = new Morebits.wiki.page(`Talk:${params.discussArticle}`, uls("将理由贴进讨论页", "將理由貼進討論頁"));
              moveTalkpage.setAppendText(moveTalkpageText);
              moveTalkpage.setEditSummary(uls("请求移动", "請求移動") + (params.moveTarget ? `至[[${params.moveTarget}]]` : ""));
              moveTalkpage.setChangeTags(Twinkle.changeTags);
              moveTalkpage.setCreateOption("recreate");
              moveTalkpage.append();
            }
          });
          if (params.patrol) {
            pageobj.patrol();
          }
        };
        const removeTags = () => {
          if (params.tagsToRemove.length === 0) {
            postRemoval();
            return;
          }
          Morebits.status.info(uls("信息", "資訊"), uls("移除取消选择的已存在标记", "移除取消選擇的已存在標記"));
          const getRedirectsFor = [];
          for (const tag of params.tagsToRemove) {
            const tag_re = new RegExp(`\\{\\{${Morebits.pageNameRegex(tag)}\\s*(\\|[^}]+)?\\}\\}\\n?`);
            if (tag_re.test(pageText)) {
              pageText = pageText.replace(tag_re, "");
            } else {
              getRedirectsFor.push(`Template:${tag}`);
            }
          }
          if (!getRedirectsFor.length) {
            postRemoval();
            return;
          }
          const api2 = new Morebits.wiki.api(uls("获取模板重定向", "取得模板重新導向"), {
            action: "query",
            prop: "linkshere",
            titles: getRedirectsFor.join("|"),
            redirects: 1,
            lhnamespace: "10",
            lhshow: "redirect",
            lhlimit: "max"
            // 500 is max for normal users, 5000 for bots and sysops
          }, (apiobj) => {
            $(apiobj.responseXML).find("page").each((_idx, page) => {
              let removed = false;
              for (const element of $(page).find("lh").toArray()) {
                const tag = ($(element).attr("title") ?? "").replace(/^(模板|template):/i, "");
                const tag_re = new RegExp(`\\{\\{${Morebits.pageNameRegex(tag)}\\s*(\\|(?:\\{\\{[^{}]*\\}\\}|[^{}])*)?\\}\\}\\n?`);
                if (tag_re.test(pageText)) {
                  pageText = pageText.replace(tag_re, "");
                  removed = true;
                  break;
                }
              }
              if (!removed) {
                Morebits.status.warn(uls("信息", "資訊"), uls("无法在页面上找到{{", "無法在頁面上找到{{") + ($(page).attr("title") ?? "").replace(/^(模板|template):/i, "") + uls("}}……跳过", "}}……跳過"));
              }
            });
            postRemoval();
          });
          api2.post();
        };
        if (!params.tags.length) {
          removeTags();
          return;
        }
        let tagText = "";
        let tags = [];
        const groupableTags = [];
        const groupableExistingTags = [];
        const addTag2 = (tagName) => {
          let currentTag = "";
          if (tagName === "Uncategorized" || tagName === "Improve categories") {
            pageText += `

{{${tagName}|time={{`.concat("subst:", "#time:c}}}}");
          } else {
            currentTag += `{{${tagName}`;
            switch (tagName) {
              case "Expert needed":
                currentTag += `|subject=${params.expert}`;
                if (params.expert2) {
                  currentTag += `|subject2=${params.expert2}`;
                }
                if (params.expert3) {
                  currentTag += `|subject3=${params.expert3}`;
                }
                break;
              case "Merge":
              case "Merge to":
              case "Merge from":
                params.mergeTag = tagName;
                if (params.mergeTarget) {
                  params.mergeTarget = Morebits.string.toUpperCaseFirstChar(params.mergeTarget.replace(/_/g, " "));
                  currentTag += `|${params.mergeTarget}`;
                  if (mw.config.get("wgNamespaceNumber") === 0 && (params.mergeReason || params.discussArticle)) {
                    if (!params.discussArticle) {
                      params.discussArticle = tagName === "Merge to" ? params.mergeTarget : mw.config.get("wgTitle");
                      params.nonDiscussArticle = tagName === "Merge to" ? mw.config.get("wgTitle") : params.mergeTarget;
                      params.talkDiscussionTitle = uls("请求与", "請求與") + params.nonDiscussArticle + uls("合并", "合併");
                    }
                    currentTag += `|discuss=Talk:${params.discussArticle}#${params.talkDiscussionTitle}`;
                  }
                }
                break;
              case "Missing information":
                currentTag += `|1=${params.missingInformation}`;
                break;
              case "Notability":
                if (params.notability !== "none") {
                  currentTag += `|3=${params.notability}`;
                }
                break;
              case "Requested move":
                if (params.moveTarget) {
                  params.moveTarget = Morebits.string.toUpperCaseFirstChar(params.moveTarget.replace(/_/g, " "));
                  params.discussArticle = mw.config.get("wgTitle");
                  currentTag += `|${params.moveTarget}`;
                }
                break;
              case "Split":
                if (params.target1) {
                  currentTag += `|1=${params.target1}`;
                }
                if (params.target2) {
                  currentTag += `|2=${params.target2}`;
                }
                if (params.target3) {
                  currentTag += `|3=${params.target3}`;
                }
                break;
              case "Cleanup":
                if (params.cleanupReason) {
                  currentTag += `|reason=${params.cleanupReason}`;
                }
                break;
              default:
                break;
            }
            currentTag += "|time={{".concat("subst:", "#time:c}}");
            if (params.reason) {
              currentTag += `|reason=${params.reason}`;
            }
            currentTag += "}}\n";
            tagText += currentTag;
          }
        };
        const addUngroupedTags = () => {
          for (const tag of tags) {
            addTag2(tag);
          }
          const qiuwen_page = new Morebits.wikitext.page(pageText);
          const templatesAfter = (
            // Protection templates
            // CSD
            // AfD
            `${Twinkle.hatnoteRegex}pp|pp-.*?|(?:Delete|Db-reason|D|Deletebecause|Db|速删|速刪|Speedy|SD|快删|快刪|CSD)|[rsaiftcmv]fd|vfd-(?:b|q|s|source|v|wikt)|(?:移动到维基|移動到維基)(?:教科书|教科書|语录|語錄|文库|文庫|导游|導遊|词典|詞典)`
          );
          pageText = qiuwen_page.insertAfterTemplates(tagText, templatesAfter).getText();
          removeTags();
        };
        for (const tag of params.tags) {
          const tagRe = new RegExp(`\\{\\{${tag}(\\||\\}\\})`, "im");
          if (props.canRemove || !tagRe.exec(pageText)) {
            if (tag === "Notability" && (mw.config.get("wgNamespaceNumber") === 0 || confirm(uls("该页面不是条目，您仍要提报到收录标准提报吗？", "該頁面不是條目，您仍要提報到收錄標準提報嗎？")))) {
              const qiuwen_page = new Morebits.wiki.page("Qiuwen_talk:存废讨论/关注度提报", uls("加入收录标准记录项", "加入收錄標準記錄項"));
              qiuwen_page.setFollowRedirect(true);
              qiuwen_page.setCallbackParameters(params);
              qiuwen_page.load(callbacks.notabilityList);
            }
            if (props.flatExcludeMI[tag] === false) {
              groupableTags.push(tag);
            } else {
              tags.push(tag);
            }
          } else if (tag === "Merge from") {
            tags.push(tag);
          } else {
            Morebits.status.warn(uls("信息", "資訊"), uls("在页面上找到{{", "在頁面上找到{{") + tag + uls("}}……跳过", "}}……跳過"));
            if (["Merge", "Merge to"].includes(tag)) {
              params.mergeTarget = null;
              params.mergeReason = null;
              params.mergeTagOther = null;
            }
          }
        }
        for (const tag of params["tagsToRemain"]) {
          if (props.flatExcludeMI[tag] === false) {
            groupableExistingTags.push(tag);
          }
        }
        const miTest = /\{\{(multiple ?issues|article ?issues|mi|ai|issues|多個問題|多个问题|問題條目|问题条目|數個問題|数个问题)\s*\|[^}]+\{/im.exec(pageText);
        if (miTest && groupableTags.length > 0) {
          Morebits.status.info(uls("信息", "資訊"), uls("加入支持的标记入已存在的{{multiple issues}}", "加入支援的標記入已存在的{{multiple issues}}"));
          tagText = "";
          for (const tag of groupableTags) {
            addTag2(tag);
          }
          const miRegex = new RegExp(`(\\{\\{\\s*${miTest[1] ?? ""}\\s*(?:\\|(?:\\{\\{[^{}]*\\}\\}|[^{}])*)?)\\}\\}\\s*`, "im");
          pageText = pageText.replace(miRegex, `$1${tagText}}}
`);
          tagText = "";
          addUngroupedTags();
        } else if (params.group && !miTest && groupableExistingTags.length + groupableTags.length >= 2) {
          Morebits.status.info(uls("信息", "資訊"), uls("加入支持的标记入{{multiple issues}}", "加入支援的標記入{{multiple issues}}"));
          tagText += "{{Multiple issues|\n";
          const addNewTagsToMI = () => {
            for (const tag of groupableTags) {
              addTag2(tag);
            }
            tagText += "}}\n";
            addUngroupedTags();
          };
          const getRedirectsFor = [];
          for (const tag of groupableExistingTags) {
            const tag_re = new RegExp(`(\\{\\{${Morebits.pageNameRegex(tag)}\\s*(\\|[^}]+)?\\}\\}\\n?)`);
            const match = tag_re.exec(pageText);
            if (match) {
              tagText += match[1] ?? "";
              pageText = pageText.replace(tag_re, "");
            } else {
              getRedirectsFor.push(`Template:${tag}`);
            }
          }
          if (!getRedirectsFor.length) {
            addNewTagsToMI();
            return;
          }
          const api2 = new Morebits.wiki.api(uls("获取模板重定向", "取得模板重新導向"), {
            action: "query",
            prop: "linkshere",
            titles: getRedirectsFor.join("|"),
            redirects: 1,
            lhnamespace: "10",
            lhshow: "redirect",
            lhlimit: "max"
            // 500 is max for normal users, 5000 for bots and sysops
          }, (apiobj) => {
            $(apiobj.responseXML).find("page").each((_idx, page) => {
              let found = false;
              for (const element of $(page).find("lh").toArray()) {
                const tag = ($(element).attr("title") ?? "").replace(/^(模板|template):/i, "");
                const tag_re = new RegExp(`(\\{\\{${Morebits.pageNameRegex(tag)}\\s*(\\|[^}]*)?\\}\\}\\n?)`);
                const match = tag_re.exec(pageText);
                if (match) {
                  tagText += match[1] ?? "";
                  pageText = pageText.replace(tag_re, "");
                  found = true;
                  break;
                }
              }
              if (!found) {
                Morebits.status.warn(uls("信息", "資訊"), uls("无法在页面上找到{{", "無法在頁面上找到{{") + ($(page).attr("title") ?? "").replace(/^(模板|template):/i, "") + uls("}}……跳过", "}}……跳過"));
              }
            });
            addNewTagsToMI();
          });
          api2.post();
        } else {
          tags = [...tags, ...groupableTags];
          addUngroupedTags();
        }
      },
      notabilityList: (pageobj) => {
        pageobj.setAppendText("\n{{".concat("subst:", `Fameitem|title=${Morebits.pageNameNorm}}}`));
        pageobj.setEditSummary(`加入[[${Morebits.pageNameNorm}]]`);
        pageobj.setChangeTags(Twinkle.changeTags);
        pageobj.setCreateOption("recreate");
        pageobj.append();
      },
      redirect: (pageobj) => {
        const params = pageobj.getCallbackParameters();
        let pageText = pageobj.getPageText() ?? "";
        let tagText = "";
        let summaryText = "加入";
        const tags = [];
        for (const tagged of params.tags) {
          const tagRe = new RegExp(`(\\{\\{${tagged}(\\||\\}\\}))`, "im");
          if (tagRe.exec(pageText)) {
            Morebits.status.warn(uls("信息", "資訊"), uls("在重定向上找到{{", "在重新導向上找到{{") + tagged + uls("}}……跳过", "}}……跳過"));
          } else {
            tags.push(tagged);
          }
        }
        const addTag2 = (tagName, tagIndex) => {
          tagText += `
{{${tagName}`;
          if (tagName === "非中文重定向") {
            if (params["altLangFrom"]) {
              tagText += `|1=${params["altLangFrom"]}`;
            }
          } else if ((tagName === "条目请求重定向" || tagName === "條目請求重定向") && params["reqArticleLang"] && params["reqArticleTitle"]) {
            tagText += `|1=${params["reqArticleLang"]}`;
            tagText += `|2=${params["reqArticleTitle"]}`;
          }
          tagText += "}}";
          if (tagIndex !== void 0 && tagIndex > 0) {
            if (tagIndex === tags.length - 1) {
              summaryText += "和";
            } else if (tagIndex < tags.length - 1) {
              summaryText += "、";
            }
          }
          summaryText += `{{[[:${tagName.includes(":") ? tagName : `Template:${tagName}|${tagName}`}]]}}`;
        };
        if (!tags.length) {
          Morebits.status.warn(uls("信息", "資訊"), uls("没有标签可供标记", "沒有標籤可供標記"));
        }
        tags.sort();
        for (const tag of tags) {
          addTag2(tag);
        }
        if (pageText.match(/{{(?:redr|this is a redirect|r(?:edirect)?(?:.?cat.*)?[ _]?sh)/i)) {
          const oldTags = pageText.match(/(\s*{{[A-Za-z\s]+\|(?:\s*1=)?)((?:[^|{}]|{{[^}]+}})+)(}})\s*/i);
          if (oldTags) {
            pageText = pageText.replace(oldTags[0], `${oldTags[1] ?? ""}${tagText}${oldTags[2] ?? ""}${oldTags[3] ?? ""}`);
          }
        } else {
          const pageTags = pageText.match(/\s*{{.+?重定向.*?}}/gim);
          let oldPageTags = "";
          if (pageTags) {
            for (let pageTag of pageTags) {
              const pageRe = new RegExp(Morebits.string.escapeRegExp(pageTag), "img");
              pageText = pageText.replace(pageRe, "");
              pageTag = pageTag.trim();
              oldPageTags += `
${pageTag}`;
            }
          }
          pageText += `
{{Redirect category shell|${tagText}${oldPageTags}
}}`;
        }
        summaryText += (tags.length > 0 ? uls("标记", "標記") : "{{Redirect category shell}}") + uls("到重定向", "到重新導向");
        if (summaryText.length > 499) {
          summaryText = summaryText.replace(/\[\[[^|]+\|([^\]]+)\]\]/g, "$1");
        }
        pageobj.setPageText(pageText);
        pageobj.setEditSummary(summaryText);
        pageobj.setChangeTags(Twinkle.changeTags);
        pageobj.setWatchlist(Twinkle.getPref("watchTaggedPages"));
        pageobj.setMinorEdit(Boolean(Twinkle.getPref("markTaggedPagesAsMinor")));
        pageobj.setCreateOption("nocreate");
        pageobj.save();
        if (params.patrol) {
          pageobj.patrol();
        }
      },
      file: (pageobj) => {
        let text = pageobj.getPageText() ?? "";
        const params = pageobj.getCallbackParameters();
        let summary = "加入";
        if (params.tags.length) {
          let tagtext = "";
          for (const tag of params.tags) {
            if (["Keep local", "Now Qiuwen Share", "Do not move to Qiuwen Share"].includes(tag)) {
              text = text.replace(/{{(mtc|(copy |move )?to ?share|move to qiuwen share|copy to qiuwen share)[^}]*}}/gi, "");
            }
            if (tag === "Vector version available") {
              text = text.replace(/\{\{((convert to |convertto|should be |shouldbe|to)?svg|badpng|vectorize)[^}]*\}\}/gi, "");
            }
            let currentTag = tag;
            switch (tag) {
              case "Now Commons":
                currentTag = `subst:${currentTag}`;
                if (params["nowcommonsName"] !== "") {
                  currentTag += `|1=${params["nowcommonsName"]}`;
                }
                break;
              case "Keep local":
                if (params["keeplocalName"] !== "") {
                  currentTag += `|1=${params["keeplocalName"]}`;
                }
                if (params["keeplocalReason"] !== "") {
                  currentTag += `|reason=${params["keeplocalReason"]}`;
                }
                break;
              case "Rename media":
                if (params["renamemediaNewname"] !== "") {
                  currentTag += `|1=${params["renamemediaNewname"]}`;
                }
                if (params["renamemediaReason"] !== "") {
                  currentTag += `|2=${params["renamemediaReason"]}`;
                }
                break;
              case "Vector version available":
              /* falls through */
              case "Obsolete":
                currentTag += `|1=${params[`${tag.replace(/ /g, "_")}File`]}`;
                break;
              case "Do not move to Commons":
                currentTag += `|reason=${params["DoNotMoveToCommons_reason"]}`;
                break;
              case "Copy to Wikimedia Commons":
                currentTag += `|human=${mw.config.get("wgUserName")}`;
                break;
              default:
                break;
            }
            currentTag = `{{${currentTag}}}
`;
            tagtext += currentTag;
            summary += `{{${tag}}}、`;
          }
          if (!tagtext) {
            pageobj.getStatusElement().warn(uls("用户取消操作，没什么要做的", "使用者取消操作，沒什麼要做的"));
            return;
          }
          text = tagtext + text;
        }
        pageobj.setPageText(text);
        pageobj.setEditSummary(summary.slice(0, Math.max(0, summary.length - 1)));
        pageobj.setChangeTags(Twinkle.changeTags);
        pageobj.setWatchlist(Twinkle.getPref("watchTaggedPages"));
        pageobj.setMinorEdit(Boolean(Twinkle.getPref("markTaggedPagesAsMinor")));
        pageobj.setCreateOption("nocreate");
        pageobj.save();
        if (params.patrol) {
          pageobj.patrol();
        }
      }
    };
    const evaluate = (params, statusContainer, restore) => {
      const modeLabel = {
        article: uls("条目", "條目"),
        file: uls("文件", "檔案"),
        redirect: uls("重定向", "重新導向")
      }[props.mode];
      const checkIncompatible = (conflicts, extra) => {
        const count = conflicts.reduce((sum, tag) => {
          return sum + (params.tags.includes(tag) ? 1 : 0);
        }, 0);
        if (count > 1) {
          let message = `${uls("请在以下标签中择一使用", "請在以下標籤中擇一使用")}：{{${conflicts.join("}}、{{")}}}。`;
          message += extra || "";
          void mw.notify(message, {
            type: "warn",
            tag: "friendlytag"
          });
          return true;
        }
        return false;
      };
      const checkParameter = (tag, parameter, description = "理由") => {
        const value = params[parameter];
        if (params.tags.includes(tag) && (typeof value === "string" ? value : "").trim() === "") {
          void mw.notify(`${uls("您必须指定", "您必須指定")}{{${tag}}}的${description}。`, {
            type: "warn",
            tag: "friendlytag"
          });
          return true;
        }
        return false;
      };
      switch (props.mode) {
        case "article": {
          const input = params;
          input.tagsToRemain = input.existingTags || [];
          if (input.tags.includes("Merge") || input.tags.includes("Merge from") || input.tags.includes("Merge to")) {
            if (checkIncompatible(["Merge", "Merge from", "Merge to"], uls("若需要多次合并，请使用{{Merge}}并用管道符分隔条目名（但在这种情形中Twinkle不能自动标记其他条目）。", "若需要多次合併，請使用{{Merge}}並用管道符分隔條目名（但在這種情形中Twinkle不能自動標記其他條目）。"))) {
              if (restore) {
                restore();
              }
              return;
            }
            if (!input.mergeTarget) {
              void mw.notify(uls("请指定使用于merge模板中的另一个页面标题。", "請指定使用於merge模板中的另一個頁面標題。"), {
                type: "warn",
                tag: "friendlytag"
              });
              if (restore) {
                restore();
              }
              return;
            }
            if ((input.mergeTagOther || input.mergeReason) && input.mergeTarget.includes("|")) {
              void mw.notify(uls("当前还不支持在一次合并中标记多个条目，与开启关于多个条目的讨论。请不要勾选“标记其他条目”并清空“理由”框后再提交。", "目前還不支援在一次合併中標記多個條目，與開啟關於多個條目的討論。請不要勾選「標記其他條目」並清空「理由」框後再提交。"), {
                type: "warn",
                tag: "friendlytag"
              });
              if (restore) {
                restore();
              }
              return;
            }
          }
          if (checkParameter("Missing information", "missingInformation", uls("缺少的内容", "缺少的內容"))) {
            if (restore) {
              restore();
            }
            return;
          }
          if (checkParameter("Expert needed", "expert", uls("专家领域", "專家領域"))) {
            if (restore) {
              restore();
            }
            return;
          }
          break;
        }
        case "file":
          if (checkParameter("Obsolete", "ObsoleteFile", uls("替换的文件名称", "替換的檔案名稱")) || checkParameter("Vector version available", "Vector_version_availableFile", uls("替换的文件名称", "替換的檔案名稱"))) {
            if (restore) {
              restore();
            }
            return;
          }
          if (checkParameter("Do not move to Commons", "DoNotMoveToCommons_reason")) {
            if (restore) {
              restore();
            }
            return;
          }
          break;
        case "redirect":
          break;
        default:
          void mw.notify(`Twinkle.tag：未知模式 ${modeLabel}`, {
            type: "warn",
            tag: "friendlytag"
          });
          break;
      }
      if (params.tags.length === 0 && (props.mode !== "article" || params.tagsToRemove.length === 0)) {
        void mw.notify(uls("必须选择至少一个标记！", "必須選擇至少一個標記！"), {
          type: "warn",
          tag: "friendlytag"
        });
        if (restore) {
          restore();
        }
        return;
      }
      Morebits.status.init(statusContainer);
      Morebits.wiki.actionCompleted.redirect = Morebits.pageNameNorm;
      Morebits.wiki.actionCompleted.notice = uls("标记完成，将在几秒内刷新页面", "標記完成，將在幾秒內重新整理頁面");
      if (props.mode === "redirect") {
        Morebits.wiki.actionCompleted.followRedirect = false;
      }
      const qiuwen_page = new Morebits.wiki.page(Morebits.pageNameNorm, uls("正在标记", "正在標記") + modeLabel);
      qiuwen_page.setCallbackParameters(params);
      qiuwen_page.load(callbacks[props.mode]);
    };
    const __returned__ = {
      props,
      emit,
      open,
      submitting,
      filterText,
      sortorder,
      selectedTags,
      existingChecked,
      groupByDefault,
      reason,
      patrol,
      statusRef,
      subgroupValues,
      sortItems,
      filterRegex,
      filterMatch,
      filterGroup,
      filteredFileGroups,
      filteredRedirectGroups,
      filteredCustomGroups,
      filteredArticleGroups,
      filteredAlphaTags,
      filteredAlreadyPresent,
      templateLink,
      setSubgroupValue,
      getSubgroupText,
      getSubgroupCheck,
      addTag,
      addExisting,
      buildParams,
      existingLabel,
      tagLabel,
      mergeTagOtherLabel,
      mergeReasonLabel,
      groupLabel,
      groupTooltip,
      primaryAction,
      submit,
      notabilityOptions,
      selectItems,
      callbacks,
      evaluate,
      get CdxCheckbox() {
        return import_codex16.CdxCheckbox;
      },
      get CdxField() {
        return import_codex16.CdxField;
      },
      get CdxSelect() {
        return import_codex16.CdxSelect;
      },
      get CdxTextArea() {
        return import_codex16.CdxTextArea;
      },
      get CdxTextInput() {
        return import_codex16.CdxTextInput;
      },
      TwDialog: TwDialog_default2,
      TwStatus: TwStatus_default2,
      get uls() {
        return uls;
      }
    };
    Object.defineProperty(__returned__, "__isScriptSetup", {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});
var import_vue48 = require("vue");
var _hoisted_114 = {
  class: "tw-tag-sort-tooltip"
};
var _hoisted_212 = {
  key: 0,
  class: "tw-tag-untagnotice"
};
var _hoisted_39 = {
  class: "tw-tag-workarea"
};
var _hoisted_47 = {
  key: 0
};
var _hoisted_55 = ["href"];
var _hoisted_65 = {
  key: 0
};
var _hoisted_73 = ["href"];
var _hoisted_83 = {
  key: 0
};
var _hoisted_93 = ["href"];
var _hoisted_103 = {
  key: 1,
  class: "tw-tag-workarea"
};
var _hoisted_115 = ["href"];
var _hoisted_124 = {
  key: 2,
  class: "tw-tag-workarea"
};
var _hoisted_133 = ["href"];
function render16(_ctx, _cache, $props, $setup, $data, $options) {
  return (0, import_vue48.openBlock)(), (0, import_vue48.createBlock)($setup["TwDialog"], {
    open: $setup.open,
    title: $props.title,
    "script-name": "Twinkle",
    "footer-links": $props.footerLinks,
    "primary-action": $setup.primaryAction,
    "onUpdate:open": _cache[21] || (_cache[21] = ($event) => $setup.open = $event),
    onPrimary: $setup.submit
  }, {
    default: (0, import_vue48.withCtx)(() => [(0, import_vue48.createVNode)($setup["CdxField"], null, {
      label: (0, import_vue48.withCtx)(() => [(0, import_vue48.createTextVNode)(
        (0, import_vue48.toDisplayString)($setup.uls("筛选标记列表：", "篩選標記列表：")),
        1
        /* TEXT */
      )]),
      default: (0, import_vue48.withCtx)(() => [(0, import_vue48.createVNode)($setup["CdxTextInput"], {
        modelValue: $setup.filterText,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.filterText = $event),
        disabled: $setup.submitting
      }, null, 8, ["modelValue", "disabled"])]),
      _: 1
      /* STABLE */
    }), $props.mode === "article" ? ((0, import_vue48.openBlock)(), (0, import_vue48.createElementBlock)(
      import_vue48.Fragment,
      {
        key: 0
      },
      [(0, import_vue48.createVNode)($setup["CdxField"], null, {
        label: (0, import_vue48.withCtx)(() => [(0, import_vue48.createTextVNode)(
          (0, import_vue48.toDisplayString)($setup.uls("查看列表：", "檢視列表：")) + " ",
          1
          /* TEXT */
        ), (0, import_vue48.createElementVNode)(
          "span",
          _hoisted_114,
          (0, import_vue48.toDisplayString)($setup.uls("您可以在Twinkle参数设置（H:TW/PREF）中更改此项。", "您可以在Twinkle偏好設定（H:TW/PREF）中更改此項。")),
          1
          /* TEXT */
        )]),
        default: (0, import_vue48.withCtx)(() => [(0, import_vue48.createVNode)($setup["CdxSelect"], {
          selected: $setup.sortorder,
          "onUpdate:selected": _cache[1] || (_cache[1] = ($event) => $setup.sortorder = $event),
          "menu-items": $setup.sortItems,
          disabled: $setup.submitting
        }, null, 8, ["selected", "disabled"])]),
        _: 1
        /* STABLE */
      }), !$props.canRemove ? ((0, import_vue48.openBlock)(), (0, import_vue48.createElementBlock)(
        "div",
        _hoisted_212,
        (0, import_vue48.toDisplayString)($setup.uls("要移除现有维护标记，请从当前条目版本中打开“标记”菜单", "要移除現有維護標記，請從目前條目版本中打開「標記」選單")),
        1
        /* TEXT */
      )) : (0, import_vue48.createCommentVNode)("v-if", true), (0, import_vue48.createElementVNode)("div", _hoisted_39, [$props.canRemove && $setup.filteredAlreadyPresent.length > 0 ? ((0, import_vue48.openBlock)(), (0, import_vue48.createElementBlock)(
        import_vue48.Fragment,
        {
          key: 0
        },
        [(0, import_vue48.createElementVNode)(
          "h5",
          null,
          (0, import_vue48.toDisplayString)($setup.uls("已放置的维护标记", "已放置的維護標記")),
          1
          /* TEXT */
        ), ((0, import_vue48.openBlock)(true), (0, import_vue48.createElementBlock)(
          import_vue48.Fragment,
          null,
          (0, import_vue48.renderList)($setup.filteredAlreadyPresent, (tag) => {
            return (0, import_vue48.openBlock)(), (0, import_vue48.createBlock)($setup["CdxCheckbox"], {
              key: `existing-${tag}`,
              "model-value": $setup.existingChecked,
              "input-value": tag,
              name: "twinkle-tag-existing",
              disabled: $setup.submitting,
              "onUpdate:modelValue": ($event) => $setup.addExisting(tag, $event)
            }, {
              default: (0, import_vue48.withCtx)(() => [(0, import_vue48.createTextVNode)(
                (0, import_vue48.toDisplayString)($setup.existingLabel(tag)) + " ",
                1
                /* TEXT */
              ), $props.flatDescriptions[tag] ? ((0, import_vue48.openBlock)(), (0, import_vue48.createElementBlock)(
                "span",
                _hoisted_47,
                "：" + (0, import_vue48.toDisplayString)($props.flatDescriptions[tag]),
                1
                /* TEXT */
              )) : (0, import_vue48.createCommentVNode)("v-if", true), (0, import_vue48.createElementVNode)("a", {
                href: $setup.templateLink(tag),
                target: "_blank",
                rel: "noopener noreferrer",
                class: "tw-tag-template-link",
                onClick: _cache[2] || (_cache[2] = (0, import_vue48.withModifiers)(() => {
                }, ["stop"]))
              }, " > ", 8, _hoisted_55)]),
              _: 2
              /* DYNAMIC */
            }, 1032, ["model-value", "input-value", "disabled", "onUpdate:modelValue"]);
          }),
          128
          /* KEYED_FRAGMENT */
        ))],
        64
        /* STABLE_FRAGMENT */
      )) : (0, import_vue48.createCommentVNode)("v-if", true), $setup.sortorder === "cat" ? ((0, import_vue48.openBlock)(true), (0, import_vue48.createElementBlock)(
        import_vue48.Fragment,
        {
          key: 1
        },
        (0, import_vue48.renderList)($setup.filteredArticleGroups, (loopGroup) => {
          return (0, import_vue48.openBlock)(), (0, import_vue48.createElementBlock)(
            import_vue48.Fragment,
            {
              key: loopGroup.key
            },
            [(0, import_vue48.createElementVNode)(
              "h5",
              null,
              (0, import_vue48.toDisplayString)(loopGroup.key),
              1
              /* TEXT */
            ), ((0, import_vue48.openBlock)(true), (0, import_vue48.createElementBlock)(
              import_vue48.Fragment,
              null,
              (0, import_vue48.renderList)(loopGroup.subgroups, (subgroup) => {
                return (0, import_vue48.openBlock)(), (0, import_vue48.createElementBlock)("div", {
                  key: subgroup.key ?? loopGroup.key,
                  class: "tw-tag-subgroup"
                }, [subgroup.key ? ((0, import_vue48.openBlock)(), (0, import_vue48.createElementBlock)(
                  "b",
                  _hoisted_65,
                  (0, import_vue48.toDisplayString)(subgroup.key),
                  1
                  /* TEXT */
                )) : (0, import_vue48.createCommentVNode)("v-if", true), ((0, import_vue48.openBlock)(true), (0, import_vue48.createElementBlock)(
                  import_vue48.Fragment,
                  null,
                  (0, import_vue48.renderList)(subgroup.items, (item) => {
                    return (0, import_vue48.openBlock)(), (0, import_vue48.createBlock)($setup["CdxCheckbox"], {
                      key: item.tag,
                      "model-value": $setup.selectedTags,
                      "input-value": item.tag,
                      name: "twinkle-tag-tags",
                      disabled: $setup.submitting,
                      "onUpdate:modelValue": ($event) => $setup.addTag(item.tag, $event)
                    }, {
                      default: (0, import_vue48.withCtx)(() => [(0, import_vue48.createTextVNode)(
                        (0, import_vue48.toDisplayString)($setup.tagLabel(item.tag, item.description)) + " ",
                        1
                        /* TEXT */
                      ), (0, import_vue48.createElementVNode)("a", {
                        href: $setup.templateLink(item.tag),
                        target: "_blank",
                        rel: "noopener noreferrer",
                        class: "tw-tag-template-link",
                        onClick: _cache[3] || (_cache[3] = (0, import_vue48.withModifiers)(() => {
                        }, ["stop"]))
                      }, " > ", 8, _hoisted_73)]),
                      _: 2
                      /* DYNAMIC */
                    }, 1032, ["model-value", "input-value", "disabled", "onUpdate:modelValue"]);
                  }),
                  128
                  /* KEYED_FRAGMENT */
                ))]);
              }),
              128
              /* KEYED_FRAGMENT */
            ))],
            64
            /* STABLE_FRAGMENT */
          );
        }),
        128
        /* KEYED_FRAGMENT */
      )) : ((0, import_vue48.openBlock)(), (0, import_vue48.createElementBlock)(
        import_vue48.Fragment,
        {
          key: 2
        },
        [$props.canRemove && $setup.filteredAlreadyPresent.length > 0 ? ((0, import_vue48.openBlock)(), (0, import_vue48.createElementBlock)(
          "h5",
          _hoisted_83,
          (0, import_vue48.toDisplayString)($setup.uls("可用的维护标记", "可用的維護標記")),
          1
          /* TEXT */
        )) : (0, import_vue48.createCommentVNode)("v-if", true), ((0, import_vue48.openBlock)(true), (0, import_vue48.createElementBlock)(
          import_vue48.Fragment,
          null,
          (0, import_vue48.renderList)($setup.filteredAlphaTags, (item) => {
            return (0, import_vue48.openBlock)(), (0, import_vue48.createBlock)($setup["CdxCheckbox"], {
              key: item.tag,
              "model-value": $setup.selectedTags,
              "input-value": item.tag,
              name: "twinkle-tag-tags",
              disabled: $setup.submitting,
              "onUpdate:modelValue": ($event) => $setup.addTag(item.tag, $event)
            }, {
              default: (0, import_vue48.withCtx)(() => [(0, import_vue48.createTextVNode)(
                (0, import_vue48.toDisplayString)($setup.tagLabel(item.tag, item.description)) + " ",
                1
                /* TEXT */
              ), (0, import_vue48.createElementVNode)("a", {
                href: $setup.templateLink(item.tag),
                target: "_blank",
                rel: "noopener noreferrer",
                class: "tw-tag-template-link",
                onClick: _cache[4] || (_cache[4] = (0, import_vue48.withModifiers)(() => {
                }, ["stop"]))
              }, " > ", 8, _hoisted_93)]),
              _: 2
              /* DYNAMIC */
            }, 1032, ["model-value", "input-value", "disabled", "onUpdate:modelValue"]);
          }),
          128
          /* KEYED_FRAGMENT */
        ))],
        64
        /* STABLE_FRAGMENT */
      ))]), (0, import_vue48.createCommentVNode)(" Special subgroups for article tags "), $setup.selectedTags.includes("Expert needed") ? ((0, import_vue48.openBlock)(), (0, import_vue48.createElementBlock)(
        import_vue48.Fragment,
        {
          key: 1
        },
        [(0, import_vue48.createVNode)($setup["CdxField"], null, {
          label: (0, import_vue48.withCtx)(() => [(0, import_vue48.createTextVNode)(
            (0, import_vue48.toDisplayString)($setup.uls("哪个领域的专家（必填）：", "哪個領域的專家（必填）：")),
            1
            /* TEXT */
          )]),
          default: (0, import_vue48.withCtx)(() => [(0, import_vue48.createVNode)($setup["CdxTextInput"], {
            "model-value": $setup.getSubgroupText("expert"),
            disabled: $setup.submitting,
            "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => $setup.setSubgroupValue("expert", $event))
          }, null, 8, ["model-value", "disabled"])]),
          _: 1
          /* STABLE */
        }), (0, import_vue48.createVNode)($setup["CdxField"], null, {
          label: (0, import_vue48.withCtx)(() => [(0, import_vue48.createTextVNode)(
            (0, import_vue48.toDisplayString)($setup.uls("哪个领域的专家：", "哪個領域的專家：")),
            1
            /* TEXT */
          )]),
          default: (0, import_vue48.withCtx)(() => [(0, import_vue48.createVNode)($setup["CdxTextInput"], {
            "model-value": $setup.getSubgroupText("expert2"),
            disabled: $setup.submitting,
            "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => $setup.setSubgroupValue("expert2", $event))
          }, null, 8, ["model-value", "disabled"])]),
          _: 1
          /* STABLE */
        }), (0, import_vue48.createVNode)($setup["CdxField"], null, {
          label: (0, import_vue48.withCtx)(() => [(0, import_vue48.createTextVNode)(
            (0, import_vue48.toDisplayString)($setup.uls("哪个领域的专家：", "哪個領域的專家：")),
            1
            /* TEXT */
          )]),
          default: (0, import_vue48.withCtx)(() => [(0, import_vue48.createVNode)($setup["CdxTextInput"], {
            "model-value": $setup.getSubgroupText("expert3"),
            disabled: $setup.submitting,
            "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => $setup.setSubgroupValue("expert3", $event))
          }, null, 8, ["model-value", "disabled"])]),
          _: 1
          /* STABLE */
        })],
        64
        /* STABLE_FRAGMENT */
      )) : (0, import_vue48.createCommentVNode)("v-if", true), $setup.selectedTags.includes("Merge") || $setup.selectedTags.includes("Merge from") || $setup.selectedTags.includes("Merge to") ? ((0, import_vue48.openBlock)(), (0, import_vue48.createElementBlock)(
        import_vue48.Fragment,
        {
          key: 2
        },
        [(0, import_vue48.createVNode)($setup["CdxField"], null, {
          label: (0, import_vue48.withCtx)(() => [(0, import_vue48.createTextVNode)(
            (0, import_vue48.toDisplayString)($setup.uls("其他条目：", "其他條目：")),
            1
            /* TEXT */
          )]),
          description: (0, import_vue48.withCtx)(() => [(0, import_vue48.createTextVNode)(
            (0, import_vue48.toDisplayString)($setup.uls("如指定多个条目，请用管道符分隔：条目甲|条目乙", "如指定多個條目，請用管道符分隔：條目甲|條目乙")),
            1
            /* TEXT */
          )]),
          default: (0, import_vue48.withCtx)(() => [(0, import_vue48.createVNode)($setup["CdxTextInput"], {
            "model-value": $setup.getSubgroupText("mergeTarget"),
            disabled: $setup.submitting,
            "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => $setup.setSubgroupValue("mergeTarget", $event))
          }, null, 8, ["model-value", "disabled"])]),
          _: 1
          /* STABLE */
        }), (0, import_vue48.createVNode)($setup["CdxCheckbox"], {
          "model-value": $setup.getSubgroupCheck("mergeTagOther", true),
          disabled: $setup.submitting,
          title: $setup.uls("仅在只输入了一个条目名时可用", "僅在只輸入了一個條目名時可用"),
          "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => $setup.setSubgroupValue("mergeTagOther", $event))
        }, {
          default: (0, import_vue48.withCtx)(() => [(0, import_vue48.createTextVNode)(
            (0, import_vue48.toDisplayString)($setup.mergeTagOtherLabel),
            1
            /* TEXT */
          )]),
          _: 1
          /* STABLE */
        }, 8, ["model-value", "disabled", "title"]), $props.isMainspace ? ((0, import_vue48.openBlock)(), (0, import_vue48.createBlock)($setup["CdxField"], {
          key: 0
        }, {
          label: (0, import_vue48.withCtx)(() => [(0, import_vue48.createTextVNode)(
            (0, import_vue48.toDisplayString)($setup.mergeReasonLabel),
            1
            /* TEXT */
          )]),
          default: (0, import_vue48.withCtx)(() => [(0, import_vue48.createVNode)($setup["CdxTextArea"], {
            "model-value": $setup.getSubgroupText("mergeReason"),
            disabled: $setup.submitting,
            "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => $setup.setSubgroupValue("mergeReason", $event))
          }, null, 8, ["model-value", "disabled"])]),
          _: 1
          /* STABLE */
        })) : (0, import_vue48.createCommentVNode)("v-if", true)],
        64
        /* STABLE_FRAGMENT */
      )) : (0, import_vue48.createCommentVNode)("v-if", true), $setup.selectedTags.includes("Missing information") ? ((0, import_vue48.openBlock)(), (0, import_vue48.createBlock)($setup["CdxField"], {
        key: 3
      }, {
        label: (0, import_vue48.withCtx)(() => [(0, import_vue48.createTextVNode)(
          (0, import_vue48.toDisplayString)($setup.uls("缺少的内容（必填）：", "缺少的內容（必填）：")),
          1
          /* TEXT */
        )]),
        description: (0, import_vue48.withCtx)(() => [(0, import_vue48.createTextVNode)(
          (0, import_vue48.toDisplayString)($setup.uls("必填，显示为“缺少有关……的信息。”", "必填，顯示為「缺少有關……的資訊。」")),
          1
          /* TEXT */
        )]),
        default: (0, import_vue48.withCtx)(() => [(0, import_vue48.createVNode)($setup["CdxTextInput"], {
          "model-value": $setup.getSubgroupText("missingInformation"),
          disabled: $setup.submitting,
          "onUpdate:modelValue": _cache[11] || (_cache[11] = ($event) => $setup.setSubgroupValue("missingInformation", $event))
        }, null, 8, ["model-value", "disabled"])]),
        _: 1
        /* STABLE */
      })) : (0, import_vue48.createCommentVNode)("v-if", true), $setup.selectedTags.includes("Notability") ? ((0, import_vue48.openBlock)(), (0, import_vue48.createBlock)($setup["CdxField"], {
        key: 4
      }, {
        label: (0, import_vue48.withCtx)(() => [(0, import_vue48.createTextVNode)(
          (0, import_vue48.toDisplayString)($setup.uls("关注度类型：", "關注度類型：")),
          1
          /* TEXT */
        )]),
        default: (0, import_vue48.withCtx)(() => [(0, import_vue48.createVNode)($setup["CdxSelect"], {
          selected: $setup.getSubgroupText("notability", "none"),
          "menu-items": $setup.notabilityOptions,
          disabled: $setup.submitting,
          "onUpdate:selected": _cache[12] || (_cache[12] = ($event) => $setup.setSubgroupValue("notability", $event))
        }, null, 8, ["selected", "disabled"])]),
        _: 1
        /* STABLE */
      })) : (0, import_vue48.createCommentVNode)("v-if", true), $setup.selectedTags.includes("Requested move") ? ((0, import_vue48.openBlock)(), (0, import_vue48.createElementBlock)(
        import_vue48.Fragment,
        {
          key: 5
        },
        [(0, import_vue48.createVNode)($setup["CdxField"], null, {
          label: (0, import_vue48.withCtx)(() => [(0, import_vue48.createTextVNode)(
            (0, import_vue48.toDisplayString)($setup.uls("新名称：", "新名稱：")),
            1
            /* TEXT */
          )]),
          default: (0, import_vue48.withCtx)(() => [(0, import_vue48.createVNode)($setup["CdxTextInput"], {
            "model-value": $setup.getSubgroupText("moveTarget"),
            disabled: $setup.submitting,
            "onUpdate:modelValue": _cache[13] || (_cache[13] = ($event) => $setup.setSubgroupValue("moveTarget", $event))
          }, null, 8, ["model-value", "disabled"])]),
          _: 1
          /* STABLE */
        }), (0, import_vue48.createVNode)($setup["CdxField"], null, {
          label: (0, import_vue48.withCtx)(() => [(0, import_vue48.createTextVNode)(
            (0, import_vue48.toDisplayString)($setup.uls("移动理由（会被粘贴该条目的讨论页）：", "移動理由（會被貼上該條目的討論頁）：")),
            1
            /* TEXT */
          )]),
          default: (0, import_vue48.withCtx)(() => [(0, import_vue48.createVNode)($setup["CdxTextArea"], {
            "model-value": $setup.getSubgroupText("moveReason"),
            disabled: $setup.submitting,
            "onUpdate:modelValue": _cache[14] || (_cache[14] = ($event) => $setup.setSubgroupValue("moveReason", $event))
          }, null, 8, ["model-value", "disabled"])]),
          _: 1
          /* STABLE */
        })],
        64
        /* STABLE_FRAGMENT */
      )) : (0, import_vue48.createCommentVNode)("v-if", true), $setup.selectedTags.includes("Split") ? ((0, import_vue48.openBlock)(), (0, import_vue48.createElementBlock)(
        import_vue48.Fragment,
        {
          key: 6
        },
        (0, import_vue48.renderList)([1, 2, 3], (index) => {
          return (0, import_vue48.createVNode)(
            $setup["CdxField"],
            {
              key: index
            },
            {
              label: (0, import_vue48.withCtx)(() => [(0, import_vue48.createTextVNode)(
                (0, import_vue48.toDisplayString)($setup.uls(`页面名${index}：`, `頁面名${index}：`)),
                1
                /* TEXT */
              )]),
              default: (0, import_vue48.withCtx)(() => [(0, import_vue48.createVNode)($setup["CdxTextInput"], {
                "model-value": $setup.getSubgroupText(`target${index}`),
                disabled: $setup.submitting,
                "onUpdate:modelValue": ($event) => $setup.setSubgroupValue(`target${index}`, $event)
              }, null, 8, ["model-value", "disabled", "onUpdate:modelValue"])]),
              _: 2
              /* DYNAMIC */
            },
            1024
            /* DYNAMIC_SLOTS */
          );
        }),
        64
        /* STABLE_FRAGMENT */
      )) : (0, import_vue48.createCommentVNode)("v-if", true), $setup.selectedTags.includes("Cleanup") ? ((0, import_vue48.openBlock)(), (0, import_vue48.createBlock)($setup["CdxField"], {
        key: 7
      }, {
        label: (0, import_vue48.withCtx)(() => [(0, import_vue48.createTextVNode)(
          (0, import_vue48.toDisplayString)($setup.uls("需要清理的理由", "需要清理的理由")),
          1
          /* TEXT */
        )]),
        default: (0, import_vue48.withCtx)(() => [(0, import_vue48.createVNode)($setup["CdxTextInput"], {
          "model-value": $setup.getSubgroupText("cleanupReason"),
          disabled: $setup.submitting,
          "onUpdate:modelValue": _cache[15] || (_cache[15] = ($event) => $setup.setSubgroupValue("cleanupReason", $event))
        }, null, 8, ["model-value", "disabled"])]),
        _: 1
        /* STABLE */
      })) : (0, import_vue48.createCommentVNode)("v-if", true), (0, import_vue48.createVNode)($setup["CdxCheckbox"], {
        modelValue: $setup.groupByDefault,
        "onUpdate:modelValue": _cache[16] || (_cache[16] = ($event) => $setup.groupByDefault = $event),
        disabled: $setup.submitting,
        title: $setup.groupTooltip
      }, {
        default: (0, import_vue48.withCtx)(() => [(0, import_vue48.createTextVNode)(
          (0, import_vue48.toDisplayString)($setup.groupLabel),
          1
          /* TEXT */
        )]),
        _: 1
        /* STABLE */
      }, 8, ["modelValue", "disabled", "title"])],
      64
      /* STABLE_FRAGMENT */
    )) : $props.mode === "file" ? ((0, import_vue48.openBlock)(), (0, import_vue48.createElementBlock)("div", _hoisted_103, [((0, import_vue48.openBlock)(true), (0, import_vue48.createElementBlock)(
      import_vue48.Fragment,
      null,
      (0, import_vue48.renderList)($setup.filteredFileGroups, (loopGroup) => {
        return (0, import_vue48.openBlock)(), (0, import_vue48.createElementBlock)(
          import_vue48.Fragment,
          {
            key: loopGroup.key
          },
          [(0, import_vue48.createElementVNode)(
            "h5",
            null,
            (0, import_vue48.toDisplayString)(loopGroup.key),
            1
            /* TEXT */
          ), ((0, import_vue48.openBlock)(true), (0, import_vue48.createElementBlock)(
            import_vue48.Fragment,
            null,
            (0, import_vue48.renderList)(loopGroup.items, (item) => {
              return (0, import_vue48.openBlock)(), (0, import_vue48.createElementBlock)(
                import_vue48.Fragment,
                {
                  key: item.tag
                },
                [(0, import_vue48.createVNode)($setup["CdxCheckbox"], {
                  "model-value": $setup.selectedTags,
                  "input-value": item.tag,
                  name: "twinkle-tag-tags",
                  disabled: $setup.submitting,
                  "onUpdate:modelValue": ($event) => $setup.addTag(item.tag, $event)
                }, {
                  default: (0, import_vue48.withCtx)(() => [(0, import_vue48.createTextVNode)(
                    (0, import_vue48.toDisplayString)(item.label) + " ",
                    1
                    /* TEXT */
                  ), (0, import_vue48.createElementVNode)("a", {
                    href: $setup.templateLink(item.tag),
                    target: "_blank",
                    rel: "noopener noreferrer",
                    class: "tw-tag-template-link",
                    onClick: _cache[17] || (_cache[17] = (0, import_vue48.withModifiers)(() => {
                    }, ["stop"]))
                  }, " > ", 8, _hoisted_115)]),
                  _: 2
                  /* DYNAMIC */
                }, 1032, ["model-value", "input-value", "disabled", "onUpdate:modelValue"]), item.buildFilename && $setup.selectedTags.includes(item.tag) ? ((0, import_vue48.openBlock)(), (0, import_vue48.createBlock)(
                  $setup["CdxField"],
                  {
                    key: 0
                  },
                  {
                    label: (0, import_vue48.withCtx)(() => [(0, import_vue48.createTextVNode)(
                      (0, import_vue48.toDisplayString)($setup.uls("替换的文件：", "替換的檔案：")),
                      1
                      /* TEXT */
                    )]),
                    description: (0, import_vue48.withCtx)(() => [(0, import_vue48.createTextVNode)(
                      (0, import_vue48.toDisplayString)($setup.uls("输入替换此文件的文件名称（必填）", "輸入替換此檔案的檔案名稱（必填）")),
                      1
                      /* TEXT */
                    )]),
                    default: (0, import_vue48.withCtx)(() => [(0, import_vue48.createVNode)($setup["CdxTextInput"], {
                      "model-value": $setup.getSubgroupText(`${item.tag.replace(/ /g, "_")}File`),
                      disabled: $setup.submitting,
                      "onUpdate:modelValue": ($event) => $setup.setSubgroupValue(`${item.tag.replace(/ /g, "_")}File`, $event)
                    }, null, 8, ["model-value", "disabled", "onUpdate:modelValue"])]),
                    _: 2
                    /* DYNAMIC */
                  },
                  1024
                  /* DYNAMIC_SLOTS */
                )) : (0, import_vue48.createCommentVNode)("v-if", true), item.subgroup && $setup.selectedTags.includes(item.tag) ? ((0, import_vue48.openBlock)(true), (0, import_vue48.createElementBlock)(
                  import_vue48.Fragment,
                  {
                    key: 1
                  },
                  (0, import_vue48.renderList)(item.subgroup, (subitem) => {
                    return (0, import_vue48.openBlock)(), (0, import_vue48.createElementBlock)(
                      import_vue48.Fragment,
                      {
                        key: subitem.name ?? subitem.label
                      },
                      [subitem.type !== "checkbox" ? ((0, import_vue48.openBlock)(), (0, import_vue48.createBlock)(
                        $setup["CdxField"],
                        {
                          key: 0
                        },
                        (0, import_vue48.createSlots)({
                          label: (0, import_vue48.withCtx)(() => [(0, import_vue48.createTextVNode)(
                            (0, import_vue48.toDisplayString)(subitem.label),
                            1
                            /* TEXT */
                          )]),
                          default: (0, import_vue48.withCtx)(() => {
                            var _subitem$options;
                            return [subitem.type === "textarea" ? ((0, import_vue48.openBlock)(), (0, import_vue48.createBlock)($setup["CdxTextArea"], {
                              key: 0,
                              "model-value": $setup.getSubgroupText(subitem.name ?? ""),
                              disabled: $setup.submitting,
                              "onUpdate:modelValue": ($event) => $setup.setSubgroupValue(subitem.name ?? "", $event)
                            }, null, 8, ["model-value", "disabled", "onUpdate:modelValue"])) : subitem.type === "select" ? ((0, import_vue48.openBlock)(), (0, import_vue48.createBlock)($setup["CdxSelect"], {
                              key: 1,
                              selected: $setup.getSubgroupText(subitem.name ?? "", ((_subitem$options = subitem.options) === null || _subitem$options === void 0 || (_subitem$options = _subitem$options[0]) === null || _subitem$options === void 0 ? void 0 : _subitem$options.value) ?? ""),
                              "menu-items": $setup.selectItems(subitem.options),
                              disabled: $setup.submitting,
                              "onUpdate:selected": ($event) => $setup.setSubgroupValue(subitem.name ?? "", $event)
                            }, null, 8, ["selected", "menu-items", "disabled", "onUpdate:selected"])) : ((0, import_vue48.openBlock)(), (0, import_vue48.createBlock)($setup["CdxTextInput"], {
                              key: 2,
                              "model-value": $setup.getSubgroupText(subitem.name ?? ""),
                              disabled: $setup.submitting,
                              "onUpdate:modelValue": ($event) => $setup.setSubgroupValue(subitem.name ?? "", $event)
                            }, null, 8, ["model-value", "disabled", "onUpdate:modelValue"]))];
                          }),
                          _: 2
                          /* DYNAMIC */
                        }, [subitem.tooltip ? {
                          name: "description",
                          fn: (0, import_vue48.withCtx)(() => [(0, import_vue48.createTextVNode)(
                            (0, import_vue48.toDisplayString)(subitem.tooltip),
                            1
                            /* TEXT */
                          )]),
                          key: "0"
                        } : void 0]),
                        1024
                        /* DYNAMIC_SLOTS */
                      )) : ((0, import_vue48.openBlock)(true), (0, import_vue48.createElementBlock)(
                        import_vue48.Fragment,
                        {
                          key: 1
                        },
                        (0, import_vue48.renderList)(subitem.list ?? [], (checkboxItem) => {
                          return (0, import_vue48.openBlock)(), (0, import_vue48.createBlock)($setup["CdxCheckbox"], {
                            key: checkboxItem.name,
                            "model-value": $setup.getSubgroupCheck(checkboxItem.name, !!checkboxItem.checked),
                            disabled: $setup.submitting,
                            title: checkboxItem.tooltip,
                            "onUpdate:modelValue": ($event) => $setup.setSubgroupValue(checkboxItem.name, $event)
                          }, {
                            default: (0, import_vue48.withCtx)(() => [(0, import_vue48.createTextVNode)(
                              (0, import_vue48.toDisplayString)(checkboxItem.label),
                              1
                              /* TEXT */
                            )]),
                            _: 2
                            /* DYNAMIC */
                          }, 1032, ["model-value", "disabled", "title", "onUpdate:modelValue"]);
                        }),
                        128
                        /* KEYED_FRAGMENT */
                      ))],
                      64
                      /* STABLE_FRAGMENT */
                    );
                  }),
                  128
                  /* KEYED_FRAGMENT */
                )) : (0, import_vue48.createCommentVNode)("v-if", true)],
                64
                /* STABLE_FRAGMENT */
              );
            }),
            128
            /* KEYED_FRAGMENT */
          ))],
          64
          /* STABLE_FRAGMENT */
        );
      }),
      128
      /* KEYED_FRAGMENT */
    )), ((0, import_vue48.openBlock)(true), (0, import_vue48.createElementBlock)(
      import_vue48.Fragment,
      null,
      (0, import_vue48.renderList)($setup.filteredCustomGroups, (loopGroup) => {
        return (0, import_vue48.openBlock)(), (0, import_vue48.createElementBlock)(
          import_vue48.Fragment,
          {
            key: `custom-${loopGroup.key}`
          },
          [(0, import_vue48.createElementVNode)(
            "h5",
            null,
            (0, import_vue48.toDisplayString)(loopGroup.key),
            1
            /* TEXT */
          ), ((0, import_vue48.openBlock)(true), (0, import_vue48.createElementBlock)(
            import_vue48.Fragment,
            null,
            (0, import_vue48.renderList)(loopGroup.items, (item) => {
              return (0, import_vue48.openBlock)(), (0, import_vue48.createElementBlock)(
                import_vue48.Fragment,
                {
                  key: item.tag
                },
                [(0, import_vue48.createVNode)($setup["CdxCheckbox"], {
                  "model-value": $setup.selectedTags,
                  "input-value": item.tag,
                  name: "twinkle-tag-tags",
                  disabled: $setup.submitting,
                  "onUpdate:modelValue": ($event) => $setup.addTag(item.tag, $event)
                }, {
                  default: (0, import_vue48.withCtx)(() => [(0, import_vue48.createTextVNode)(
                    (0, import_vue48.toDisplayString)(item.label),
                    1
                    /* TEXT */
                  )]),
                  _: 2
                  /* DYNAMIC */
                }, 1032, ["model-value", "input-value", "disabled", "onUpdate:modelValue"]), item.subgroup && $setup.selectedTags.includes(item.tag) ? ((0, import_vue48.openBlock)(true), (0, import_vue48.createElementBlock)(
                  import_vue48.Fragment,
                  {
                    key: 0
                  },
                  (0, import_vue48.renderList)(item.subgroup, (subitem) => {
                    return (0, import_vue48.openBlock)(), (0, import_vue48.createElementBlock)(
                      import_vue48.Fragment,
                      {
                        key: subitem.name ?? subitem.label
                      },
                      [subitem.type !== "checkbox" ? ((0, import_vue48.openBlock)(), (0, import_vue48.createBlock)(
                        $setup["CdxField"],
                        {
                          key: 0
                        },
                        (0, import_vue48.createSlots)({
                          label: (0, import_vue48.withCtx)(() => [(0, import_vue48.createTextVNode)(
                            (0, import_vue48.toDisplayString)(subitem.label),
                            1
                            /* TEXT */
                          )]),
                          default: (0, import_vue48.withCtx)(() => {
                            var _subitem$options2;
                            return [subitem.type === "textarea" ? ((0, import_vue48.openBlock)(), (0, import_vue48.createBlock)($setup["CdxTextArea"], {
                              key: 0,
                              "model-value": $setup.getSubgroupText(subitem.name ?? ""),
                              disabled: $setup.submitting,
                              "onUpdate:modelValue": ($event) => $setup.setSubgroupValue(subitem.name ?? "", $event)
                            }, null, 8, ["model-value", "disabled", "onUpdate:modelValue"])) : subitem.type === "select" ? ((0, import_vue48.openBlock)(), (0, import_vue48.createBlock)($setup["CdxSelect"], {
                              key: 1,
                              selected: $setup.getSubgroupText(subitem.name ?? "", ((_subitem$options2 = subitem.options) === null || _subitem$options2 === void 0 || (_subitem$options2 = _subitem$options2[0]) === null || _subitem$options2 === void 0 ? void 0 : _subitem$options2.value) ?? ""),
                              "menu-items": $setup.selectItems(subitem.options),
                              disabled: $setup.submitting,
                              "onUpdate:selected": ($event) => $setup.setSubgroupValue(subitem.name ?? "", $event)
                            }, null, 8, ["selected", "menu-items", "disabled", "onUpdate:selected"])) : ((0, import_vue48.openBlock)(), (0, import_vue48.createBlock)($setup["CdxTextInput"], {
                              key: 2,
                              "model-value": $setup.getSubgroupText(subitem.name ?? ""),
                              disabled: $setup.submitting,
                              "onUpdate:modelValue": ($event) => $setup.setSubgroupValue(subitem.name ?? "", $event)
                            }, null, 8, ["model-value", "disabled", "onUpdate:modelValue"]))];
                          }),
                          _: 2
                          /* DYNAMIC */
                        }, [subitem.tooltip ? {
                          name: "description",
                          fn: (0, import_vue48.withCtx)(() => [(0, import_vue48.createTextVNode)(
                            (0, import_vue48.toDisplayString)(subitem.tooltip),
                            1
                            /* TEXT */
                          )]),
                          key: "0"
                        } : void 0]),
                        1024
                        /* DYNAMIC_SLOTS */
                      )) : ((0, import_vue48.openBlock)(true), (0, import_vue48.createElementBlock)(
                        import_vue48.Fragment,
                        {
                          key: 1
                        },
                        (0, import_vue48.renderList)(subitem.list ?? [], (checkboxItem) => {
                          return (0, import_vue48.openBlock)(), (0, import_vue48.createBlock)($setup["CdxCheckbox"], {
                            key: checkboxItem.name,
                            "model-value": $setup.getSubgroupCheck(checkboxItem.name, !!checkboxItem.checked),
                            disabled: $setup.submitting,
                            title: checkboxItem.tooltip,
                            "onUpdate:modelValue": ($event) => $setup.setSubgroupValue(checkboxItem.name, $event)
                          }, {
                            default: (0, import_vue48.withCtx)(() => [(0, import_vue48.createTextVNode)(
                              (0, import_vue48.toDisplayString)(checkboxItem.label),
                              1
                              /* TEXT */
                            )]),
                            _: 2
                            /* DYNAMIC */
                          }, 1032, ["model-value", "disabled", "title", "onUpdate:modelValue"]);
                        }),
                        128
                        /* KEYED_FRAGMENT */
                      ))],
                      64
                      /* STABLE_FRAGMENT */
                    );
                  }),
                  128
                  /* KEYED_FRAGMENT */
                )) : (0, import_vue48.createCommentVNode)("v-if", true)],
                64
                /* STABLE_FRAGMENT */
              );
            }),
            128
            /* KEYED_FRAGMENT */
          ))],
          64
          /* STABLE_FRAGMENT */
        );
      }),
      128
      /* KEYED_FRAGMENT */
    ))])) : ((0, import_vue48.openBlock)(), (0, import_vue48.createElementBlock)("div", _hoisted_124, [((0, import_vue48.openBlock)(true), (0, import_vue48.createElementBlock)(
      import_vue48.Fragment,
      null,
      (0, import_vue48.renderList)($setup.filteredRedirectGroups, (loopGroup) => {
        return (0, import_vue48.openBlock)(), (0, import_vue48.createElementBlock)(
          import_vue48.Fragment,
          {
            key: loopGroup.key
          },
          [(0, import_vue48.createElementVNode)(
            "h5",
            null,
            (0, import_vue48.toDisplayString)(loopGroup.key),
            1
            /* TEXT */
          ), ((0, import_vue48.openBlock)(true), (0, import_vue48.createElementBlock)(
            import_vue48.Fragment,
            null,
            (0, import_vue48.renderList)(loopGroup.items, (item) => {
              return (0, import_vue48.openBlock)(), (0, import_vue48.createElementBlock)(
                import_vue48.Fragment,
                {
                  key: item.tag
                },
                [(0, import_vue48.createVNode)($setup["CdxCheckbox"], {
                  "model-value": $setup.selectedTags,
                  "input-value": item.tag,
                  name: "twinkle-tag-tags",
                  disabled: $setup.submitting,
                  "onUpdate:modelValue": ($event) => $setup.addTag(item.tag, $event)
                }, {
                  default: (0, import_vue48.withCtx)(() => [(0, import_vue48.createTextVNode)(
                    (0, import_vue48.toDisplayString)(item.label) + " ",
                    1
                    /* TEXT */
                  ), (0, import_vue48.createElementVNode)("a", {
                    href: $setup.templateLink(item.tag),
                    target: "_blank",
                    rel: "noopener noreferrer",
                    class: "tw-tag-template-link",
                    onClick: _cache[18] || (_cache[18] = (0, import_vue48.withModifiers)(() => {
                    }, ["stop"]))
                  }, " > ", 8, _hoisted_133)]),
                  _: 2
                  /* DYNAMIC */
                }, 1032, ["model-value", "input-value", "disabled", "onUpdate:modelValue"]), item.subgroup && $setup.selectedTags.includes(item.tag) ? ((0, import_vue48.openBlock)(true), (0, import_vue48.createElementBlock)(
                  import_vue48.Fragment,
                  {
                    key: 0
                  },
                  (0, import_vue48.renderList)(item.subgroup, (subitem) => {
                    return (0, import_vue48.openBlock)(), (0, import_vue48.createElementBlock)(
                      import_vue48.Fragment,
                      {
                        key: subitem.name ?? subitem.label
                      },
                      [subitem.type !== "checkbox" ? ((0, import_vue48.openBlock)(), (0, import_vue48.createBlock)(
                        $setup["CdxField"],
                        {
                          key: 0
                        },
                        (0, import_vue48.createSlots)({
                          label: (0, import_vue48.withCtx)(() => [(0, import_vue48.createTextVNode)(
                            (0, import_vue48.toDisplayString)(subitem.label),
                            1
                            /* TEXT */
                          )]),
                          default: (0, import_vue48.withCtx)(() => {
                            var _subitem$options3;
                            return [subitem.type === "textarea" ? ((0, import_vue48.openBlock)(), (0, import_vue48.createBlock)($setup["CdxTextArea"], {
                              key: 0,
                              "model-value": $setup.getSubgroupText(subitem.name ?? ""),
                              disabled: $setup.submitting,
                              "onUpdate:modelValue": ($event) => $setup.setSubgroupValue(subitem.name ?? "", $event)
                            }, null, 8, ["model-value", "disabled", "onUpdate:modelValue"])) : subitem.type === "select" ? ((0, import_vue48.openBlock)(), (0, import_vue48.createBlock)($setup["CdxSelect"], {
                              key: 1,
                              selected: $setup.getSubgroupText(subitem.name ?? "", ((_subitem$options3 = subitem.options) === null || _subitem$options3 === void 0 || (_subitem$options3 = _subitem$options3[0]) === null || _subitem$options3 === void 0 ? void 0 : _subitem$options3.value) ?? ""),
                              "menu-items": $setup.selectItems(subitem.options),
                              disabled: $setup.submitting,
                              "onUpdate:selected": ($event) => $setup.setSubgroupValue(subitem.name ?? "", $event)
                            }, null, 8, ["selected", "menu-items", "disabled", "onUpdate:selected"])) : ((0, import_vue48.openBlock)(), (0, import_vue48.createBlock)($setup["CdxTextInput"], {
                              key: 2,
                              "model-value": $setup.getSubgroupText(subitem.name ?? ""),
                              disabled: $setup.submitting,
                              "onUpdate:modelValue": ($event) => $setup.setSubgroupValue(subitem.name ?? "", $event)
                            }, null, 8, ["model-value", "disabled", "onUpdate:modelValue"]))];
                          }),
                          _: 2
                          /* DYNAMIC */
                        }, [subitem.tooltip ? {
                          name: "description",
                          fn: (0, import_vue48.withCtx)(() => [(0, import_vue48.createTextVNode)(
                            (0, import_vue48.toDisplayString)(subitem.tooltip),
                            1
                            /* TEXT */
                          )]),
                          key: "0"
                        } : void 0]),
                        1024
                        /* DYNAMIC_SLOTS */
                      )) : ((0, import_vue48.openBlock)(true), (0, import_vue48.createElementBlock)(
                        import_vue48.Fragment,
                        {
                          key: 1
                        },
                        (0, import_vue48.renderList)(subitem.list ?? [], (checkboxItem) => {
                          return (0, import_vue48.openBlock)(), (0, import_vue48.createBlock)($setup["CdxCheckbox"], {
                            key: checkboxItem.name,
                            "model-value": $setup.getSubgroupCheck(checkboxItem.name, !!checkboxItem.checked),
                            disabled: $setup.submitting,
                            title: checkboxItem.tooltip,
                            "onUpdate:modelValue": ($event) => $setup.setSubgroupValue(checkboxItem.name, $event)
                          }, {
                            default: (0, import_vue48.withCtx)(() => [(0, import_vue48.createTextVNode)(
                              (0, import_vue48.toDisplayString)(checkboxItem.label),
                              1
                              /* TEXT */
                            )]),
                            _: 2
                            /* DYNAMIC */
                          }, 1032, ["model-value", "disabled", "title", "onUpdate:modelValue"]);
                        }),
                        128
                        /* KEYED_FRAGMENT */
                      ))],
                      64
                      /* STABLE_FRAGMENT */
                    );
                  }),
                  128
                  /* KEYED_FRAGMENT */
                )) : (0, import_vue48.createCommentVNode)("v-if", true)],
                64
                /* STABLE_FRAGMENT */
              );
            }),
            128
            /* KEYED_FRAGMENT */
          ))],
          64
          /* STABLE_FRAGMENT */
        );
      }),
      128
      /* KEYED_FRAGMENT */
    )), ((0, import_vue48.openBlock)(true), (0, import_vue48.createElementBlock)(
      import_vue48.Fragment,
      null,
      (0, import_vue48.renderList)($setup.filteredCustomGroups, (loopGroup) => {
        return (0, import_vue48.openBlock)(), (0, import_vue48.createElementBlock)(
          import_vue48.Fragment,
          {
            key: `custom-${loopGroup.key}`
          },
          [(0, import_vue48.createElementVNode)(
            "h5",
            null,
            (0, import_vue48.toDisplayString)(loopGroup.key),
            1
            /* TEXT */
          ), ((0, import_vue48.openBlock)(true), (0, import_vue48.createElementBlock)(
            import_vue48.Fragment,
            null,
            (0, import_vue48.renderList)(loopGroup.items, (item) => {
              return (0, import_vue48.openBlock)(), (0, import_vue48.createElementBlock)(
                import_vue48.Fragment,
                {
                  key: item.tag
                },
                [(0, import_vue48.createVNode)($setup["CdxCheckbox"], {
                  "model-value": $setup.selectedTags,
                  "input-value": item.tag,
                  name: "twinkle-tag-tags",
                  disabled: $setup.submitting,
                  "onUpdate:modelValue": ($event) => $setup.addTag(item.tag, $event)
                }, {
                  default: (0, import_vue48.withCtx)(() => [(0, import_vue48.createTextVNode)(
                    (0, import_vue48.toDisplayString)(item.label),
                    1
                    /* TEXT */
                  )]),
                  _: 2
                  /* DYNAMIC */
                }, 1032, ["model-value", "input-value", "disabled", "onUpdate:modelValue"]), item.subgroup && $setup.selectedTags.includes(item.tag) ? ((0, import_vue48.openBlock)(true), (0, import_vue48.createElementBlock)(
                  import_vue48.Fragment,
                  {
                    key: 0
                  },
                  (0, import_vue48.renderList)(item.subgroup, (subitem) => {
                    return (0, import_vue48.openBlock)(), (0, import_vue48.createElementBlock)(
                      import_vue48.Fragment,
                      {
                        key: subitem.name ?? subitem.label
                      },
                      [subitem.type !== "checkbox" ? ((0, import_vue48.openBlock)(), (0, import_vue48.createBlock)(
                        $setup["CdxField"],
                        {
                          key: 0
                        },
                        (0, import_vue48.createSlots)({
                          label: (0, import_vue48.withCtx)(() => [(0, import_vue48.createTextVNode)(
                            (0, import_vue48.toDisplayString)(subitem.label),
                            1
                            /* TEXT */
                          )]),
                          default: (0, import_vue48.withCtx)(() => {
                            var _subitem$options4;
                            return [subitem.type === "textarea" ? ((0, import_vue48.openBlock)(), (0, import_vue48.createBlock)($setup["CdxTextArea"], {
                              key: 0,
                              "model-value": $setup.getSubgroupText(subitem.name ?? ""),
                              disabled: $setup.submitting,
                              "onUpdate:modelValue": ($event) => $setup.setSubgroupValue(subitem.name ?? "", $event)
                            }, null, 8, ["model-value", "disabled", "onUpdate:modelValue"])) : subitem.type === "select" ? ((0, import_vue48.openBlock)(), (0, import_vue48.createBlock)($setup["CdxSelect"], {
                              key: 1,
                              selected: $setup.getSubgroupText(subitem.name ?? "", ((_subitem$options4 = subitem.options) === null || _subitem$options4 === void 0 || (_subitem$options4 = _subitem$options4[0]) === null || _subitem$options4 === void 0 ? void 0 : _subitem$options4.value) ?? ""),
                              "menu-items": $setup.selectItems(subitem.options),
                              disabled: $setup.submitting,
                              "onUpdate:selected": ($event) => $setup.setSubgroupValue(subitem.name ?? "", $event)
                            }, null, 8, ["selected", "menu-items", "disabled", "onUpdate:selected"])) : ((0, import_vue48.openBlock)(), (0, import_vue48.createBlock)($setup["CdxTextInput"], {
                              key: 2,
                              "model-value": $setup.getSubgroupText(subitem.name ?? ""),
                              disabled: $setup.submitting,
                              "onUpdate:modelValue": ($event) => $setup.setSubgroupValue(subitem.name ?? "", $event)
                            }, null, 8, ["model-value", "disabled", "onUpdate:modelValue"]))];
                          }),
                          _: 2
                          /* DYNAMIC */
                        }, [subitem.tooltip ? {
                          name: "description",
                          fn: (0, import_vue48.withCtx)(() => [(0, import_vue48.createTextVNode)(
                            (0, import_vue48.toDisplayString)(subitem.tooltip),
                            1
                            /* TEXT */
                          )]),
                          key: "0"
                        } : void 0]),
                        1024
                        /* DYNAMIC_SLOTS */
                      )) : ((0, import_vue48.openBlock)(true), (0, import_vue48.createElementBlock)(
                        import_vue48.Fragment,
                        {
                          key: 1
                        },
                        (0, import_vue48.renderList)(subitem.list ?? [], (checkboxItem) => {
                          return (0, import_vue48.openBlock)(), (0, import_vue48.createBlock)($setup["CdxCheckbox"], {
                            key: checkboxItem.name,
                            "model-value": $setup.getSubgroupCheck(checkboxItem.name, !!checkboxItem.checked),
                            disabled: $setup.submitting,
                            title: checkboxItem.tooltip,
                            "onUpdate:modelValue": ($event) => $setup.setSubgroupValue(checkboxItem.name, $event)
                          }, {
                            default: (0, import_vue48.withCtx)(() => [(0, import_vue48.createTextVNode)(
                              (0, import_vue48.toDisplayString)(checkboxItem.label),
                              1
                              /* TEXT */
                            )]),
                            _: 2
                            /* DYNAMIC */
                          }, 1032, ["model-value", "disabled", "title", "onUpdate:modelValue"]);
                        }),
                        128
                        /* KEYED_FRAGMENT */
                      ))],
                      64
                      /* STABLE_FRAGMENT */
                    );
                  }),
                  128
                  /* KEYED_FRAGMENT */
                )) : (0, import_vue48.createCommentVNode)("v-if", true)],
                64
                /* STABLE_FRAGMENT */
              );
            }),
            128
            /* KEYED_FRAGMENT */
          ))],
          64
          /* STABLE_FRAGMENT */
        );
      }),
      128
      /* KEYED_FRAGMENT */
    ))])), $props.mode === "article" ? ((0, import_vue48.openBlock)(), (0, import_vue48.createBlock)($setup["CdxField"], {
      key: 3
    }, {
      label: (0, import_vue48.withCtx)(() => [..._cache[22] || (_cache[22] = [(0, import_vue48.createTextVNode)(
        "理由：",
        -1
        /* CACHED */
      )])]),
      description: (0, import_vue48.withCtx)(() => [(0, import_vue48.createTextVNode)(
        (0, import_vue48.toDisplayString)($setup.uls("附加于编辑摘要的可选理由，例如指出条目内容的哪些部分有问题或移除模板的理由，但若理由很长则应该发表在讨论页。", "附加於編輯摘要的可選理由，例如指出條目內容的哪些部分有問題或移除模板的理由，但若理由很長則應該發表在討論頁。")),
        1
        /* TEXT */
      )]),
      default: (0, import_vue48.withCtx)(() => [(0, import_vue48.createVNode)($setup["CdxTextInput"], {
        modelValue: $setup.reason,
        "onUpdate:modelValue": _cache[19] || (_cache[19] = ($event) => $setup.reason = $event),
        disabled: $setup.submitting
      }, null, 8, ["modelValue", "disabled"])]),
      _: 1
      /* STABLE */
    })) : (0, import_vue48.createCommentVNode)("v-if", true), $props.showPatrol ? ((0, import_vue48.openBlock)(), (0, import_vue48.createBlock)($setup["CdxCheckbox"], {
      key: 4,
      modelValue: $setup.patrol,
      "onUpdate:modelValue": _cache[20] || (_cache[20] = ($event) => $setup.patrol = $event),
      disabled: $setup.submitting
    }, {
      default: (0, import_vue48.withCtx)(() => [(0, import_vue48.createTextVNode)(
        (0, import_vue48.toDisplayString)($setup.uls("标记页面为已巡查", "標記頁面為已巡查")),
        1
        /* TEXT */
      )]),
      _: 1
      /* STABLE */
    }, 8, ["modelValue", "disabled"])) : (0, import_vue48.createCommentVNode)("v-if", true), (0, import_vue48.createVNode)(
      $setup["TwStatus"],
      {
        ref: "statusRef"
      },
      null,
      512
      /* NEED_PATCH */
    )]),
    _: 1
    /* STABLE */
  }, 8, ["open", "title", "footer-links", "primary-action"]);
}
//! src/Twinkle/modules/ui/TwTagDialog.vue
TwTagDialog_default.render = render16;
TwTagDialog_default.__file = "src\\Twinkle\\modules\\ui\\TwTagDialog.vue";
TwTagDialog_default.__scopeId = "data-v-e69c50d0";
var TwTagDialog_default2 = TwTagDialog_default;
var import_vue49 = require("vue");
var import_codex17 = require("@wikimedia/codex");
var import_vue50 = require("vue");
var TwTalkbackDialog_default = /* @__PURE__ */ (0, import_vue49.defineComponent)({
  __name: "TwTalkbackDialog",
  props: {
    title: {
      type: String,
      required: true
    },
    footerLinks: {
      type: Array,
      required: true
    }
  },
  emits: ["close"],
  setup(__props, {
    expose: __expose,
    emit: __emit
  }) {
    var _Object$entries$find;
    __expose();
    const emit = __emit;
    const noticeboards = {
      affp: {
        label: `QW:AF/FP（${uls("过滤器处理/报告", "過濾器處理/報告")}）`,
        title: uls("过滤器错误报告有新回应", "過濾器錯誤報告有新回應"),
        content: `${uls("您的[[Qiuwen_talk:过滤器处理/报告|过滤器错误报告]]已有回应，请前往查看。", "您的[[Qiuwen_talk:过滤器处理/报告|過濾器錯誤報告]]已有回應，請前往查看。")}——~~`.concat("~~"),
        editSummary: uls("有关[[Qiuwen_talk:过滤器处理/报告|过滤器错误报告]]的通知", "有關[[Qiuwen_talk:过滤器处理/报告|過濾器錯誤報告]]的通知"),
        defaultSelected: true
      },
      sbl: {
        label: "Spam-blacklist",
        title: uls("垃圾链接黑名单请求有新回应", "垃圾連結黑名單請求有新回應"),
        content: `${uls("您的[[Qiuwen_talk:管理员告示板|垃圾链接黑名单请求]]已有回应，请前往查看。", "您的[[Qiuwen_talk:管理员告示板|垃圾連結黑名單請求]]已有回應，請前往查看。")}——~~`.concat("~~"),
        editSummary: uls("有关[[Qiuwen_talk:管理员告示板|垃圾链接黑名单请求]]的通知", "有關[[Qiuwen_talk:管理员告示板|垃圾連結黑名單請求]]的通知")
      },
      shl: {
        label: "Spam-whitelist",
        title: uls("垃圾链接白名单请求有新回应", "垃圾連結白名單請求有新回應"),
        content: `${uls("您的[[Qiuwen_talk:管理员告示板|垃圾链接白名单请求]]已有回应，请前往查看。", "您的[[Qiuwen_talk:管理员告示板|垃圾連結白名單請求]]已有回應，請前往查看。")}——~~`.concat("~~"),
        editSummary: uls("有关[[Qiuwen_talk:管理员告示板|垃圾链接白名单请求]]的通知", "有關[[Qiuwen_talk:管理员告示板|垃圾連結白名單請求]]的通知")
      }
    };
    const open = (0, import_vue50.ref)(true);
    const target = (0, import_vue50.ref)("mytalk");
    const page = (0, import_vue50.ref)("");
    const section = (0, import_vue50.ref)("");
    const message = (0, import_vue50.ref)("");
    const noticeboard = (0, import_vue50.ref)(((_Object$entries$find = Object.entries(noticeboards).find(([, data]) => {
      return data.defaultSelected;
    })) === null || _Object$entries$find === void 0 ? void 0 : _Object$entries$find[0]) ?? "");
    const submitting = (0, import_vue50.ref)(false);
    const statusRef = (0, import_vue50.ref)(null);
    const previewBox = (0, import_vue50.ref)(null);
    const targetOptions = [{
      value: "mytalk",
      label: uls("回复：我的讨论页", "回覆：我的討論頁")
    }, {
      value: "usertalk",
      label: uls("回复：其他用户的讨论页", "回覆：其他使用者的討論頁")
    }, {
      value: "other",
      label: uls("回复：其它页面", "回覆：其它頁面")
    }, {
      value: "see",
      label: uls("邀请讨论", "邀請討論")
    }, {
      value: "notice",
      label: "通告板通知"
    }, {
      value: "mail",
      label: uls("“有新邮件”", "「有新郵件」")
    }];
    const noticeboardItems = (0, import_vue50.computed)(() => Object.entries(noticeboards).map(([value, data]) => ({
      value,
      label: data.label
    })));
    const showOptout = (0, import_vue50.computed)(() => ["usertalk", "other", "mytalk"].includes(target.value));
    const showNoticeboard = (0, import_vue50.computed)(() => target.value === "notice");
    const showPageInput = (0, import_vue50.computed)(() => ["usertalk", "other", "see"].includes(target.value));
    const showMessage = (0, import_vue50.computed)(() => target.value !== "notice");
    const pageLabel = (0, import_vue50.computed)(() => target.value === "usertalk" ? uls("用户（必填）", "使用者（必填）") : uls("完整页面名", "完整頁面名"));
    const sectionLabel = (0, import_vue50.computed)(() => target.value === "mail" ? uls("电子邮件主题（可选）", "電子郵件主題（可選）") : uls("章节（可选）", "章節（可選）"));
    const buildParams = () => ({
      tbtarget: target.value,
      page: target.value === "notice" ? noticeboard.value : showPageInput.value ? page.value : mw.config.get("wgUserName") ?? "",
      section: section.value,
      message: message.value.trim()
    });
    const primaryAction = (0, import_vue50.computed)(() => ({
      label: uls("提交", "提交"),
      actionType: "progressive",
      disabled: submitting.value
    }));
    const submit = () => {
      var _statusRef$value18;
      if (submitting.value) {
        return;
      }
      if (showPageInput.value && !page.value.trim()) {
        void mw.notify(uls("请填写页面名", "請填寫頁面名"), {
          type: "warn",
          tag: "friendlytalkback"
        });
        return;
      }
      submitting.value = true;
      evaluate(buildParams(), ((_statusRef$value18 = statusRef.value) === null || _statusRef$value18 === void 0 ? void 0 : _statusRef$value18.getStatusRoot()) ?? null);
    };
    let previewer = null;
    const onPreview = () => {
      if (previewer) {
        previewer.closePreview();
      }
      if (!previewBox.value) {
        return;
      }
      previewer = new Morebits.wiki.preview(previewBox.value);
      const params = buildParams();
      const [noticetext] = getNoticeWikitext(params.tbtarget, params.page, params.section, params.message);
      previewer.beginRender(
        noticetext,
        `User_talk:${mw.config.get("wgRelevantUserName")}`
        // Force wikitext/correct username
      );
    };
    (0, import_vue50.watch)(target, () => {
      if (previewer) {
        previewer.closePreview();
      }
    });
    (0, import_vue50.watch)(open, (value) => {
      if (!value) {
        emit("close");
      }
    });
    const evaluate = (params, statusContainer) => {
      var _noticeboards$page;
      const {
        tbtarget,
        page: page2,
        section: section2,
        message: message2
      } = params;
      let editSummary;
      switch (tbtarget) {
        case "notice":
          editSummary = ((_noticeboards$page = noticeboards[page2]) === null || _noticeboards$page === void 0 ? void 0 : _noticeboards$page.editSummary) ?? "";
          break;
        case "mail":
          editSummary = uls("通知：有新邮件", "通知：有新郵件");
          break;
        case "see":
          editSummary = `${uls("请看看", "請看看")}[[:${page2}${section2 ? `#${section2}` : ""}]]${uls("上的讨论", "上的討論")}`;
          break;
        default:
          editSummary = `${uls("回复通告", "回覆通告")}（[[:`;
          if (tbtarget !== "other" && !new RegExp(`^\\s*${Morebits.namespaceRegex(3)}:`, "i").test(page2)) {
            editSummary += "User talk:";
          }
          editSummary += `${page2 + (section2 ? `#${section2}` : "")}]])`;
          break;
      }
      Morebits.status.init(statusContainer);
      const fullUserTalkPageName = `${mw.config.get("wgFormattedNamespaces")[mw.config.get("wgNamespaceIds")["user_talk"]]}:${mw.config.get("wgRelevantUserName")}`;
      Morebits.wiki.actionCompleted.redirect = fullUserTalkPageName;
      Morebits.wiki.actionCompleted.notice = uls("回复通告完成，将在几秒内刷新页面", "回覆通告完成，將在幾秒內重新整理頁面");
      const text = `

${getNoticeWikitext(tbtarget, page2, section2, message2)[0]}`;
      const talkpage = new Morebits.wiki.page(fullUserTalkPageName, uls("加入回复通告", "加入回覆通告"));
      talkpage.setEditSummary(editSummary);
      talkpage.setChangeTags(Twinkle.changeTags);
      talkpage.setAppendText(text);
      talkpage.setCreateOption("recreate");
      talkpage.setMinorEdit(Boolean(Twinkle.getPref("markTalkbackAsMinor")));
      talkpage.setFollowRedirect(true);
      talkpage.append();
    };
    const getNoticeWikitext = (tbtarget, page2, section2, message2) => {
      let text;
      let title;
      let content;
      if (tbtarget === "notice") {
        const board = noticeboards[page2];
        title = board === null || board === void 0 ? void 0 : board.title;
        content = board ? Morebits.string.safeReplace(board.content, "$SECTION", section2) : void 0;
        text = `== ${title} ==
${content}`;
      } else if (tbtarget === "see") {
        title = page2 + uls("的相关讨论", "的相關討論");
        content = "{{".concat("subst:", `Please see|location=${page2}${section2 ? `#${section2}` : ""}|more=${message2.trim()}}}`);
        text = "{{".concat("subst:", `Please see|location=${page2}${section2 ? `#${section2}` : ""}|more=${message2.trim()}}}`);
      } else {
        text = "==";
        if (tbtarget === "mail") {
          title = Twinkle.getPref("mailHeading");
          content = `{{You've got mail|subject=${section2}|ts=~~`.concat("~", "~~}}");
          text += `${title}==
{{You've got mail|subject=${section2}`;
        } else {
          title = Twinkle.getPref("talkbackHeading").replace(/^\s*=+\s*(.*?)\s*=+$\s*/, "$1");
          content = `{{talkback|${page2}${section2 ? `|${section2}` : ""}`;
          text += `${title}==
{{talkback|${page2}${section2 ? `|${section2}` : ""}`;
        }
        content += "|ts=~~".concat("~", "~~}}");
        text += "|ts=~~".concat("~", "~~}}");
        if (message2) {
          content += `
${message2}`;
          text += `
${message2}  ~~`.concat("~~");
        } else if (Twinkle.getPref("insertTalkbackSignature")) {
          text += "\n~~".concat("~~");
        }
      }
      return [text, title, content];
    };
    const __returned__ = {
      emit,
      noticeboards,
      open,
      target,
      page,
      section,
      message,
      noticeboard,
      submitting,
      statusRef,
      previewBox,
      targetOptions,
      noticeboardItems,
      showOptout,
      showNoticeboard,
      showPageInput,
      showMessage,
      pageLabel,
      sectionLabel,
      buildParams,
      primaryAction,
      submit,
      get previewer() {
        return previewer;
      },
      set previewer(v) {
        previewer = v;
      },
      onPreview,
      evaluate,
      getNoticeWikitext,
      get CdxButton() {
        return import_codex17.CdxButton;
      },
      get CdxField() {
        return import_codex17.CdxField;
      },
      get CdxRadio() {
        return import_codex17.CdxRadio;
      },
      get CdxSelect() {
        return import_codex17.CdxSelect;
      },
      get CdxTextArea() {
        return import_codex17.CdxTextArea;
      },
      get CdxTextInput() {
        return import_codex17.CdxTextInput;
      },
      TwDialog: TwDialog_default2,
      TwStatus: TwStatus_default2,
      get uls() {
        return uls;
      }
    };
    Object.defineProperty(__returned__, "__isScriptSetup", {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});
var import_vue51 = require("vue");
var _hoisted_116 = {
  key: 0,
  id: "twinkle-talkback-optout-message",
  class: "tw-talkback-optout"
};
var _hoisted_213 = {
  ref: "previewBox",
  hidden: ""
};
function render17(_ctx, _cache, $props, $setup, $data, $options) {
  return (0, import_vue51.openBlock)(), (0, import_vue51.createBlock)($setup["TwDialog"], {
    open: $setup.open,
    title: $props.title,
    "script-name": "Twinkle",
    "footer-links": $props.footerLinks,
    "primary-action": $setup.primaryAction,
    "onUpdate:open": _cache[5] || (_cache[5] = ($event) => $setup.open = $event),
    onPrimary: $setup.submit
  }, {
    default: (0, import_vue51.withCtx)(() => [(0, import_vue51.createVNode)($setup["CdxField"], {
      "is-fieldset": ""
    }, {
      label: (0, import_vue51.withCtx)(() => [(0, import_vue51.createTextVNode)(
        (0, import_vue51.toDisplayString)($setup.uls("回复类型", "回覆類型")),
        1
        /* TEXT */
      )]),
      default: (0, import_vue51.withCtx)(() => [((0, import_vue51.openBlock)(), (0, import_vue51.createElementBlock)(
        import_vue51.Fragment,
        null,
        (0, import_vue51.renderList)($setup.targetOptions, (option) => {
          return (0, import_vue51.createVNode)($setup["CdxRadio"], {
            key: option.value,
            modelValue: $setup.target,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.target = $event),
            name: "twinkle-talkback-target",
            "input-value": option.value,
            disabled: $setup.submitting
          }, {
            default: (0, import_vue51.withCtx)(() => [(0, import_vue51.createTextVNode)(
              (0, import_vue51.toDisplayString)(option.label),
              1
              /* TEXT */
            )]),
            _: 2
            /* DYNAMIC */
          }, 1032, ["modelValue", "input-value", "disabled"]);
        }),
        64
        /* STABLE_FRAGMENT */
      ))]),
      _: 1
      /* STABLE */
    }), (0, import_vue51.createVNode)($setup["CdxField"], {
      "is-fieldset": ""
    }, {
      label: (0, import_vue51.withCtx)(() => [..._cache[6] || (_cache[6] = [(0, import_vue51.createTextVNode)(
        "工作区",
        -1
        /* CACHED */
      )])]),
      default: (0, import_vue51.withCtx)(() => [$setup.showOptout ? ((0, import_vue51.openBlock)(), (0, import_vue51.createElementBlock)("div", _hoisted_116)) : (0, import_vue51.createCommentVNode)("v-if", true), $setup.showNoticeboard ? ((0, import_vue51.openBlock)(), (0, import_vue51.createBlock)($setup["CdxField"], {
        key: 1
      }, {
        label: (0, import_vue51.withCtx)(() => [..._cache[7] || (_cache[7] = [(0, import_vue51.createTextVNode)(
          "通告板：",
          -1
          /* CACHED */
        )])]),
        default: (0, import_vue51.withCtx)(() => [(0, import_vue51.createVNode)($setup["CdxSelect"], {
          selected: $setup.noticeboard,
          "onUpdate:selected": _cache[1] || (_cache[1] = ($event) => $setup.noticeboard = $event),
          "menu-items": $setup.noticeboardItems,
          disabled: $setup.submitting
        }, null, 8, ["selected", "menu-items", "disabled"])]),
        _: 1
        /* STABLE */
      })) : (0, import_vue51.createCommentVNode)("v-if", true), $setup.showPageInput ? ((0, import_vue51.openBlock)(), (0, import_vue51.createBlock)($setup["CdxField"], {
        key: 2
      }, {
        label: (0, import_vue51.withCtx)(() => [(0, import_vue51.createTextVNode)(
          (0, import_vue51.toDisplayString)($setup.pageLabel),
          1
          /* TEXT */
        )]),
        default: (0, import_vue51.withCtx)(() => [(0, import_vue51.createVNode)($setup["CdxTextInput"], {
          modelValue: $setup.page,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $setup.page = $event),
          disabled: $setup.submitting
        }, null, 8, ["modelValue", "disabled"])]),
        _: 1
        /* STABLE */
      })) : (0, import_vue51.createCommentVNode)("v-if", true), (0, import_vue51.createVNode)($setup["CdxField"], null, {
        label: (0, import_vue51.withCtx)(() => [(0, import_vue51.createTextVNode)(
          (0, import_vue51.toDisplayString)($setup.sectionLabel),
          1
          /* TEXT */
        )]),
        default: (0, import_vue51.withCtx)(() => [(0, import_vue51.createVNode)($setup["CdxTextInput"], {
          modelValue: $setup.section,
          "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $setup.section = $event),
          disabled: $setup.submitting
        }, null, 8, ["modelValue", "disabled"])]),
        _: 1
        /* STABLE */
      }), $setup.showMessage ? ((0, import_vue51.openBlock)(), (0, import_vue51.createBlock)($setup["CdxField"], {
        key: 3
      }, {
        label: (0, import_vue51.withCtx)(() => [(0, import_vue51.createTextVNode)(
          (0, import_vue51.toDisplayString)($setup.uls("附加信息（可选）：", "附加資訊（可選）：")),
          1
          /* TEXT */
        )]),
        default: (0, import_vue51.withCtx)(() => [(0, import_vue51.createVNode)($setup["CdxTextArea"], {
          modelValue: $setup.message,
          "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $setup.message = $event),
          disabled: $setup.submitting
        }, null, 8, ["modelValue", "disabled"])]),
        _: 1
        /* STABLE */
      })) : (0, import_vue51.createCommentVNode)("v-if", true)]),
      _: 1
      /* STABLE */
    }), (0, import_vue51.createVNode)($setup["CdxButton"], {
      disabled: $setup.submitting,
      weight: "quiet",
      onClick: $setup.onPreview
    }, {
      default: (0, import_vue51.withCtx)(() => [(0, import_vue51.createTextVNode)(
        (0, import_vue51.toDisplayString)($setup.uls("预览", "預覽")),
        1
        /* TEXT */
      )]),
      _: 1
      /* STABLE */
    }, 8, ["disabled"]), (0, import_vue51.createElementVNode)(
      "div",
      _hoisted_213,
      null,
      512
      /* NEED_PATCH */
    ), (0, import_vue51.createVNode)(
      $setup["TwStatus"],
      {
        ref: "statusRef"
      },
      null,
      512
      /* NEED_PATCH */
    )]),
    _: 1
    /* STABLE */
  }, 8, ["open", "title", "footer-links", "primary-action"]);
}
//! src/Twinkle/modules/ui/TwTalkbackDialog.vue
TwTalkbackDialog_default.render = render17;
TwTalkbackDialog_default.__file = "src\\Twinkle\\modules\\ui\\TwTalkbackDialog.vue";
TwTalkbackDialog_default.__scopeId = "data-v-cba7caa1";
var TwTalkbackDialog_default2 = TwTalkbackDialog_default;
var import_vue52 = require("vue");
var import_codex18 = require("@wikimedia/codex");
var import_vue53 = require("vue");
var TwUnlinkDialog_default = /* @__PURE__ */ (0, import_vue52.defineComponent)({
  __name: "TwUnlinkDialog",
  props: {
    title: {
      type: String,
      required: true
    },
    fileSpace: {
      type: Boolean,
      required: true
    },
    presetReason: {
      type: String,
      required: true
    },
    docHtml: {
      type: String,
      required: true
    },
    list: {
      type: Object,
      required: true
    },
    footerLinks: {
      type: Array,
      required: true
    }
  },
  emits: ["close"],
  setup(__props, {
    expose: __expose,
    emit: __emit
  }) {
    const props = __props;
    const emit = __emit;
    const open = (0, import_vue53.ref)(true);
    const reason = (0, import_vue53.ref)(props.presetReason);
    const selectedBacklinks = (0, import_vue53.ref)([]);
    const selectedImageusage = (0, import_vue53.ref)([]);
    const submitting = (0, import_vue53.ref)(false);
    const statusRef = (0, import_vue53.ref)(null);
    const {
      onShiftClick
    } = useShiftClick();
    __expose({
      getStatusRoot: () => {
        var _statusRef$value19;
        return ((_statusRef$value19 = statusRef.value) === null || _statusRef$value19 === void 0 ? void 0 : _statusRef$value19.getStatusRoot()) ?? null;
      },
      clear: () => {
        var _statusRef$value20;
        (_statusRef$value20 = statusRef.value) === null || _statusRef$value20 === void 0 || _statusRef$value20.clear();
      }
    });
    (0, import_vue53.watch)(() => props.list.backlinks, (list) => {
      selectedBacklinks.value = [...list];
    });
    (0, import_vue53.watch)(() => props.list.imageusage, (list) => {
      selectedImageusage.value = [...list];
    });
    const pageUrl = (title) => mw.util.getUrl(title);
    const onToggle = (kind, value, modelValue) => {
      const target = kind === "backlinks" ? selectedBacklinks : selectedImageusage;
      if (Array.isArray(modelValue)) {
        target.value = modelValue.filter((item) => typeof item === "string");
      } else if (modelValue) {
        target.value = [...target.value, value];
      } else {
        target.value = target.value.filter((item) => item !== value);
      }
    };
    const selectAll = (kind) => {
      if (kind === "backlinks") {
        selectedBacklinks.value = [...props.list.backlinks];
      } else {
        selectedImageusage.value = [...props.list.imageusage];
      }
    };
    const selectNone = (kind) => {
      if (kind === "backlinks") {
        selectedBacklinks.value = [];
      } else {
        selectedImageusage.value = [];
      }
    };
    const primaryAction = (0, import_vue53.computed)(() => ({
      label: uls("提交", "提交"),
      actionType: "progressive",
      disabled: submitting.value
    }));
    const submit = () => {
      var _statusRef$value21;
      if (submitting.value) {
        return;
      }
      submitting.value = true;
      evaluate({
        reason: reason.value.trim(),
        backlinks: [...selectedBacklinks.value],
        imageusage: [...selectedImageusage.value]
      }, ((_statusRef$value21 = statusRef.value) === null || _statusRef$value21 === void 0 ? void 0 : _statusRef$value21.getStatusRoot()) ?? null, () => {
        submitting.value = false;
      });
    };
    (0, import_vue53.watch)(open, (value) => {
      if (!value) {
        emit("close");
      }
    });
    const callbacks = {
      unlinkBacklinks: (pageobj) => {
        const params = pageobj.getCallbackParameters();
        const unlinker = params.unlinker;
        let oldtext = pageobj.getPageText() ?? "";
        const qiuwen_page = new Morebits.wikitext.page(oldtext);
        let summaryText = "";
        let warningString = false;
        let text;
        if (params.doImageusage) {
          text = qiuwen_page.commentOutImage(mw.config.get("wgTitle") ?? "", uls("注释", "注釋")).getText();
          if (text === oldtext) {
            warningString = uls("文件使用", "檔案使用");
          } else {
            summaryText = uls("注释文件使用", "注釋檔案使用");
            oldtext = text;
          }
        }
        if (params.doBacklinks) {
          text = qiuwen_page.removeLink(Morebits.pageNameNorm).getText();
          text = qiuwen_page.removeTemplate(mw.config.get("wgTitle") ?? "").getText();
          if (text === oldtext) {
            warningString = warningString ? uls("取消链入或文件使用", "取消連入或檔案使用") : uls("取消链入", "取消連入");
          } else {
            summaryText = (summaryText ? `${summaryText} / ` : "") + uls("取消链接到", "取消連結到");
            oldtext = text;
          }
        }
        if (warningString) {
          pageobj.getStatusElement().error(`${uls("未能在页面上找到", "未能在頁面上找到") + warningString}。`);
          unlinker.workerFailure();
          return;
        }
        pageobj.setPageText(text ?? "");
        pageobj.setEditSummary(summaryText + uls("“", "「") + Morebits.pageNameNorm + uls("”：", "」：") + params.reason);
        pageobj.setChangeTags(Twinkle.changeTags);
        pageobj.setCreateOption("nocreate");
        pageobj.save(unlinker.workerSuccess, unlinker.workerFailure);
      }
    };
    const evaluate = (params, statusContainer, restore) => {
      if (!params.reason) {
        void mw.notify(uls("您必须指定取消链入的理由。", "您必須指定取消連入的理由。"), {
          type: "warn",
          tag: "twinkleunlink"
        });
        if (restore) {
          restore();
        }
        return;
      }
      const pages = Morebits.array.uniq([...params.backlinks, ...params.imageusage]);
      if (!pages.length) {
        void mw.notify(uls("您必须至少选择一个要取消链入的页面。", "您必須至少選擇一個要取消連入的頁面。"), {
          type: "warn",
          tag: "twinkleunlink"
        });
        if (restore) {
          restore();
        }
        return;
      }
      Morebits.status.init(statusContainer);
      const unlinker = new Morebits.batchOperation(`取消${params.backlinks.length ? uls("链入", "連入") + (params.imageusage.length ? uls("与文件使用", "與檔案使用") : "") : uls("文件使用", "檔案使用")}`);
      unlinker.setOption("preserveIndividualStatusLines", true);
      unlinker.setPageList(pages);
      const batchParams = {
        reason: params.reason,
        unlinker
      };
      unlinker.run((pageName) => {
        const qiuwen_page = new Morebits.wiki.page(pageName, uls("在页面“", "在頁面「") + pageName + uls("”中取消链入", "」中取消連入"));
        qiuwen_page.setBotEdit(true);
        qiuwen_page.setCallbackParameters({
          doBacklinks: params.backlinks.includes(pageName),
          doImageusage: params.imageusage.includes(pageName),
          ...batchParams
        });
        qiuwen_page.load(callbacks.unlinkBacklinks);
      });
    };
    const __returned__ = {
      props,
      emit,
      open,
      reason,
      selectedBacklinks,
      selectedImageusage,
      submitting,
      statusRef,
      onShiftClick,
      pageUrl,
      onToggle,
      selectAll,
      selectNone,
      primaryAction,
      submit,
      callbacks,
      evaluate,
      get CdxButton() {
        return import_codex18.CdxButton;
      },
      get CdxCheckbox() {
        return import_codex18.CdxCheckbox;
      },
      get CdxField() {
        return import_codex18.CdxField;
      },
      get CdxTextInput() {
        return import_codex18.CdxTextInput;
      },
      TwDialog: TwDialog_default2,
      TwStatus: TwStatus_default2,
      get uls() {
        return uls;
      }
    };
    Object.defineProperty(__returned__, "__isScriptSetup", {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});
var import_vue54 = require("vue");
var _hoisted_117 = ["innerHTML"];
var _hoisted_214 = {
  key: 0,
  class: "tw-loading"
};
var _hoisted_310 = {
  key: 0
};
var _hoisted_48 = {
  class: "tw-batch-actions"
};
var _hoisted_56 = ["href"];
var _hoisted_66 = {
  key: 1
};
var _hoisted_74 = {
  class: "tw-batch-actions"
};
var _hoisted_84 = ["href"];
function render18(_ctx, _cache, $props, $setup, $data, $options) {
  return (0, import_vue54.openBlock)(), (0, import_vue54.createBlock)($setup["TwDialog"], {
    open: $setup.open,
    title: $props.title,
    "script-name": "Twinkle",
    "footer-links": $props.footerLinks,
    "primary-action": $setup.primaryAction,
    "onUpdate:open": _cache[7] || (_cache[7] = ($event) => $setup.open = $event),
    onPrimary: $setup.submit
  }, {
    default: (0, import_vue54.withCtx)(() => [(0, import_vue54.createCommentVNode)(" eslint-disable-next-line vue/no-v-html -- docHtml is assembled from localized strings and escaped page names "), (0, import_vue54.createElementVNode)("div", {
      class: "tw-unlink-doc",
      innerHTML: $props.docHtml
    }, null, 8, _hoisted_117), (0, import_vue54.createVNode)($setup["CdxField"], null, {
      label: (0, import_vue54.withCtx)(() => [..._cache[8] || (_cache[8] = [(0, import_vue54.createTextVNode)(
        "理由：",
        -1
        /* CACHED */
      )])]),
      default: (0, import_vue54.withCtx)(() => [(0, import_vue54.createVNode)($setup["CdxTextInput"], {
        modelValue: $setup.reason,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.reason = $event),
        disabled: $setup.submitting
      }, null, 8, ["modelValue", "disabled"])]),
      _: 1
      /* STABLE */
    }), !$props.list.loaded ? ((0, import_vue54.openBlock)(), (0, import_vue54.createElementBlock)(
      "div",
      _hoisted_214,
      (0, import_vue54.toDisplayString)($setup.uls("加载中……", "載入中……")),
      1
      /* TEXT */
    )) : ((0, import_vue54.openBlock)(), (0, import_vue54.createElementBlock)(
      import_vue54.Fragment,
      {
        key: 1
      },
      [$props.fileSpace ? ((0, import_vue54.openBlock)(), (0, import_vue54.createElementBlock)(
        import_vue54.Fragment,
        {
          key: 0
        },
        [(0, import_vue54.createElementVNode)(
          "h5",
          null,
          (0, import_vue54.toDisplayString)($setup.uls("文件使用", "檔案使用")),
          1
          /* TEXT */
        ), $props.list.imageusage.length === 0 ? ((0, import_vue54.openBlock)(), (0, import_vue54.createElementBlock)(
          "div",
          _hoisted_310,
          (0, import_vue54.toDisplayString)($setup.uls("未找到文件使用。", "未找到檔案使用。")),
          1
          /* TEXT */
        )) : ((0, import_vue54.openBlock)(), (0, import_vue54.createElementBlock)(
          import_vue54.Fragment,
          {
            key: 1
          },
          [(0, import_vue54.createElementVNode)(
            "div",
            null,
            (0, import_vue54.toDisplayString)($props.list.namespacesText),
            1
            /* TEXT */
          ), (0, import_vue54.createElementVNode)("div", _hoisted_48, [(0, import_vue54.createVNode)($setup["CdxButton"], {
            disabled: $setup.submitting,
            weight: "quiet",
            onClick: _cache[1] || (_cache[1] = ($event) => $setup.selectAll("imageusage"))
          }, {
            default: (0, import_vue54.withCtx)(() => [(0, import_vue54.createTextVNode)(
              (0, import_vue54.toDisplayString)($setup.uls("全选", "全選")),
              1
              /* TEXT */
            )]),
            _: 1
            /* STABLE */
          }, 8, ["disabled"]), (0, import_vue54.createVNode)($setup["CdxButton"], {
            disabled: $setup.submitting,
            weight: "quiet",
            onClick: _cache[2] || (_cache[2] = ($event) => $setup.selectNone("imageusage"))
          }, {
            default: (0, import_vue54.withCtx)(() => [(0, import_vue54.createTextVNode)(
              (0, import_vue54.toDisplayString)($setup.uls("全不选", "全不選")),
              1
              /* TEXT */
            )]),
            _: 1
            /* STABLE */
          }, 8, ["disabled"])]), (0, import_vue54.createElementVNode)("div", {
            onClick: _cache[3] || (_cache[3] = (...args) => $setup.onShiftClick && $setup.onShiftClick(...args))
          }, [((0, import_vue54.openBlock)(true), (0, import_vue54.createElementBlock)(
            import_vue54.Fragment,
            null,
            (0, import_vue54.renderList)($props.list.imageusage, (iuTitle) => {
              return (0, import_vue54.openBlock)(), (0, import_vue54.createBlock)($setup["CdxCheckbox"], {
                key: iuTitle,
                "model-value": $setup.selectedImageusage,
                "input-value": iuTitle,
                name: "twinkle-unlink-imageusage",
                disabled: $setup.submitting,
                "onUpdate:modelValue": ($event) => $setup.onToggle("imageusage", iuTitle, $event)
              }, {
                default: (0, import_vue54.withCtx)(() => [(0, import_vue54.createElementVNode)("a", {
                  href: $setup.pageUrl(iuTitle),
                  target: "_blank",
                  rel: "noopener noreferrer"
                }, (0, import_vue54.toDisplayString)(iuTitle), 9, _hoisted_56)]),
                _: 2
                /* DYNAMIC */
              }, 1032, ["model-value", "input-value", "disabled", "onUpdate:modelValue"]);
            }),
            128
            /* KEYED_FRAGMENT */
          ))])],
          64
          /* STABLE_FRAGMENT */
        ))],
        64
        /* STABLE_FRAGMENT */
      )) : (0, import_vue54.createCommentVNode)("v-if", true), (0, import_vue54.createElementVNode)(
        "h5",
        null,
        (0, import_vue54.toDisplayString)($setup.uls("链入", "連入")),
        1
        /* TEXT */
      ), $props.list.backlinks.length === 0 ? ((0, import_vue54.openBlock)(), (0, import_vue54.createElementBlock)(
        "div",
        _hoisted_66,
        (0, import_vue54.toDisplayString)($setup.uls("未找到链入。", "未找到連入。")),
        1
        /* TEXT */
      )) : ((0, import_vue54.openBlock)(), (0, import_vue54.createElementBlock)(
        import_vue54.Fragment,
        {
          key: 2
        },
        [(0, import_vue54.createElementVNode)(
          "div",
          null,
          (0, import_vue54.toDisplayString)($props.list.namespacesText),
          1
          /* TEXT */
        ), (0, import_vue54.createElementVNode)("div", _hoisted_74, [(0, import_vue54.createVNode)($setup["CdxButton"], {
          disabled: $setup.submitting,
          weight: "quiet",
          onClick: _cache[4] || (_cache[4] = ($event) => $setup.selectAll("backlinks"))
        }, {
          default: (0, import_vue54.withCtx)(() => [(0, import_vue54.createTextVNode)(
            (0, import_vue54.toDisplayString)($setup.uls("全选", "全選")),
            1
            /* TEXT */
          )]),
          _: 1
          /* STABLE */
        }, 8, ["disabled"]), (0, import_vue54.createVNode)($setup["CdxButton"], {
          disabled: $setup.submitting,
          weight: "quiet",
          onClick: _cache[5] || (_cache[5] = ($event) => $setup.selectNone("backlinks"))
        }, {
          default: (0, import_vue54.withCtx)(() => [(0, import_vue54.createTextVNode)(
            (0, import_vue54.toDisplayString)($setup.uls("全不选", "全不選")),
            1
            /* TEXT */
          )]),
          _: 1
          /* STABLE */
        }, 8, ["disabled"])]), (0, import_vue54.createElementVNode)("div", {
          onClick: _cache[6] || (_cache[6] = (...args) => $setup.onShiftClick && $setup.onShiftClick(...args))
        }, [((0, import_vue54.openBlock)(true), (0, import_vue54.createElementBlock)(
          import_vue54.Fragment,
          null,
          (0, import_vue54.renderList)($props.list.backlinks, (blTitle) => {
            return (0, import_vue54.openBlock)(), (0, import_vue54.createBlock)($setup["CdxCheckbox"], {
              key: blTitle,
              "model-value": $setup.selectedBacklinks,
              "input-value": blTitle,
              name: "twinkle-unlink-backlinks",
              disabled: $setup.submitting,
              "onUpdate:modelValue": ($event) => $setup.onToggle("backlinks", blTitle, $event)
            }, {
              default: (0, import_vue54.withCtx)(() => [(0, import_vue54.createElementVNode)("a", {
                href: $setup.pageUrl(blTitle),
                target: "_blank",
                rel: "noopener noreferrer"
              }, (0, import_vue54.toDisplayString)(blTitle), 9, _hoisted_84)]),
              _: 2
              /* DYNAMIC */
            }, 1032, ["model-value", "input-value", "disabled", "onUpdate:modelValue"]);
          }),
          128
          /* KEYED_FRAGMENT */
        ))])],
        64
        /* STABLE_FRAGMENT */
      ))],
      64
      /* STABLE_FRAGMENT */
    )), (0, import_vue54.createVNode)(
      $setup["TwStatus"],
      {
        ref: "statusRef"
      },
      null,
      512
      /* NEED_PATCH */
    )]),
    _: 1
    /* STABLE */
  }, 8, ["open", "title", "footer-links", "primary-action"]);
}
//! src/Twinkle/modules/ui/TwUnlinkDialog.vue
TwUnlinkDialog_default.render = render18;
TwUnlinkDialog_default.__file = "src\\Twinkle\\modules\\ui\\TwUnlinkDialog.vue";
TwUnlinkDialog_default.__scopeId = "data-v-37ffaf81";
var TwUnlinkDialog_default2 = TwUnlinkDialog_default;
var import_vue55 = require("vue");
var import_codex19 = require("@wikimedia/codex");
var import_vue56 = require("vue");
var TwWarnDialog_default = /* @__PURE__ */ (0, import_vue55.defineComponent)({
  __name: "TwWarnDialog",
  props: {
    title: {
      type: String,
      required: true
    },
    relevantUserName: {
      type: String,
      required: true
    },
    mainGroupOptions: {
      type: Array,
      required: true
    },
    initialMainGroup: {
      type: String,
      required: true
    },
    initialArticle: {
      type: String,
      required: true
    },
    messages: {
      type: Object,
      required: true
    },
    customWarningList: {
      type: Array,
      required: true
    },
    notice: {
      type: Object,
      required: true
    },
    footerLinks: {
      type: Array,
      required: true
    }
  },
  emits: ["openArv", "close"],
  setup(__props, {
    expose: __expose,
    emit: __emit
  }) {
    __expose();
    const props = __props;
    const emit = __emit;
    const open = (0, import_vue56.ref)(true);
    const submitting = (0, import_vue56.ref)(false);
    const mainGroup = (0, import_vue56.ref)(props.initialMainGroup);
    const subGroup = (0, import_vue56.ref)(null);
    const article = (0, import_vue56.ref)(props.initialArticle);
    const reason = (0, import_vue56.ref)("");
    const previewBox = (0, import_vue56.ref)(null);
    const statusRef = (0, import_vue56.ref)(null);
    const subMessageData = (0, import_vue56.ref)({});
    const autolevelInfo = (0, import_vue56.ref)(null);
    let talkpageObj = null;
    let previewer = null;
    const lookupInput = (0, import_vue56.ref)("");
    const notLinkedArticle = {
      "uw-bite": uls("被“咬到”的用户（不含User:） ", "被「咬到」的使用者（不含User:） "),
      "uw-aiv": uls("可选输入被警告的用户名（不含User:） ", "可選輸入被警告的使用者名稱（不含User:） ")
    };
    const prevArticle = (0, import_vue56.ref)(null);
    const mainGroupItems = (0, import_vue56.computed)(() => props.mainGroupOptions.map((option) => ({
      value: option.value,
      label: option.label
    })));
    const createEntries = (contents, val) => {
      const level = val.replace(/^\D+/g, "");
      const entries = [];
      for (const [itemKey, itemPropertiesRaw] of Object.entries(contents)) {
        const itemProperties = itemPropertiesRaw;
        if (level && !itemProperties[val]) {
          continue;
        }
        const key = typeof itemKey === "string" ? itemKey : String(itemProperties.value);
        const template = key + level;
        const levelData = level ? itemProperties[val] : null;
        entries.push({
          value: template,
          label: `{{${template}}}: ${levelData ? levelData.label : String(itemProperties["label"] ?? "")}`,
          messageData: itemProperties
        });
      }
      return entries;
    };
    const subGroups = (0, import_vue56.computed)(() => {
      var _autolevelInfo$value;
      switch (mainGroup.value) {
        case "singlenotice":
        case "singlewarn":
          return [{
            key: null,
            entries: createEntries(props.messages[mainGroup.value], mainGroup.value)
          }];
        case "singlecombined": {
          const unSortedSinglets = {
            ...props.messages.singlenotice,
            ...props.messages.singlewarn
          };
          const sortedSingletMessages = {};
          for (const key of Object.keys(unSortedSinglets).sort()) {
            sortedSingletMessages[key] = unSortedSinglets[key];
          }
          return [{
            key: null,
            entries: createEntries(sortedSingletMessages, mainGroup.value)
          }];
        }
        case "custom":
          return [{
            key: null,
            entries: props.customWarningList.map((item) => ({
              value: item.value,
              label: item.label,
              messageData: item
            }))
          }];
        case "kitchensink": {
          const groups = [];
          for (const lvl of ["level1", "level2"]) {
            for (const levelGroup of props.messages.levels) {
              groups.push({
                key: levelGroup.category,
                entries: createEntries(levelGroup.list, lvl)
              });
            }
          }
          groups.push({
            key: null,
            entries: createEntries(props.messages.singlenotice, "singlenotice")
          }, {
            key: null,
            entries: createEntries(props.messages.singlewarn, "singlewarn")
          });
          if (props.customWarningList.length) {
            groups.push({
              key: null,
              entries: props.customWarningList.map((item) => ({
                value: item.value,
                label: item.label,
                messageData: item
              }))
            });
          }
          return groups;
        }
        case "level1":
        case "level2":
          return props.messages.levels.map((levelGroup) => ({
            key: levelGroup.category,
            entries: createEntries(levelGroup.list, mainGroup.value)
          }));
        case "autolevel":
          return ((_autolevelInfo$value = autolevelInfo.value) === null || _autolevelInfo$value === void 0 ? void 0 : _autolevelInfo$value.groups) ?? [];
        default:
          return [];
      }
    });
    (0, import_vue56.watch)(subGroups, (groups) => {
      const mapping = {};
      for (const group of groups) {
        for (const entry of group.entries) {
          mapping[entry.value] = entry.messageData;
        }
      }
      subMessageData.value = mapping;
    }, {
      immediate: true,
      deep: true
    });
    const lookupMenuItems = (0, import_vue56.computed)(() => {
      const items = [];
      for (const [groupIndex, group] of subGroups.value.entries()) {
        if (group.key) {
          items.push({
            value: `__group_${groupIndex}`,
            label: group.key,
            disabled: true
          });
        }
        for (const entry of group.entries) {
          items.push({
            value: entry.value,
            label: entry.label
          });
        }
      }
      return items;
    });
    const filteredLookupItems = (0, import_vue56.computed)(() => {
      const query = lookupInput.value.trim().toLowerCase();
      if (!query) {
        return lookupMenuItems.value;
      }
      return lookupMenuItems.value.filter((item) => {
        return !item.disabled && String(item.label).toLowerCase().includes(query);
      });
    });
    (0, import_vue56.watch)(subGroup, (value) => {
      if (!["singlenotice", "singlewarn", "singlecombined", "kitchensink"].includes(mainGroup.value)) {
        return;
      }
      if (value && notLinkedArticle[value]) {
        if (prevArticle.value === null) {
          prevArticle.value = article.value;
        }
        article.value = "";
      } else if (prevArticle.value !== null) {
        article.value = prevArticle.value;
        prevArticle.value = null;
      }
    });
    const articleLabel = (0, import_vue56.computed)(() => {
      if (subGroup.value && ["singlenotice", "singlewarn", "singlecombined", "kitchensink"].includes(mainGroup.value)) {
        return notLinkedArticle[subGroup.value] ?? uls("页面链接", "頁面連結");
      }
      return uls("页面链接", "頁面連結");
    });
    (0, import_vue56.watch)(mainGroup, (value) => {
      const oldSub = subGroup.value ?? "";
      subGroup.value = null;
      lookupInput.value = "";
      if (value === "autolevel") {
        loadTalkPageForAutolevel(oldSub);
      }
    });
    const buildParams = () => ({
      main_group: mainGroup.value,
      sub_group: subGroup.value ?? "",
      article: article.value,
      reason: reason.value,
      messageData: subGroup.value ? subMessageData.value[subGroup.value] : void 0
    });
    const primaryAction = (0, import_vue56.computed)(() => ({
      label: uls("提交", "提交"),
      actionType: "progressive",
      disabled: submitting.value
    }));
    const onPreview = () => {
      preview(buildParams(), previewBox.value);
    };
    const submit = () => {
      var _statusRef$value22;
      if (submitting.value) {
        return;
      }
      submitting.value = true;
      evaluate(buildParams(), ((_statusRef$value22 = statusRef.value) === null || _statusRef$value22 === void 0 ? void 0 : _statusRef$value22.getStatusRoot()) ?? null, () => {
        submitting.value = false;
      });
    };
    (0, import_vue56.watch)(open, (value) => {
      if (!value) {
        emit("close");
      }
    });
    const getWarningWikitext = (templateName, article2, reason2, _isCustom, noSign) => {
      let text = "{{".concat("subst:", templateName);
      if (article2) {
        text += `|1=${article2}`;
      }
      if (reason2) {
        text += `|2=${reason2}`;
      }
      text += "|subst=".concat("subst:");
      if (!noSign) {
        text += "|sig=~~".concat("~~");
      }
      text += "}}";
      return text;
    };
    const showPreview = (params, box, templatename) => {
      templatename || (templatename = params.sub_group);
      const linkedarticle = params.article;
      const templatetext = getWarningWikitext(templatename, linkedarticle, params.reason, params.main_group === "custom");
      if (previewer) {
        previewer.closePreview();
      }
      previewer = new Morebits.wiki.preview(box);
      previewer.beginRender(templatetext, `User_talk:${props.relevantUserName}`);
    };
    const dateProcessing = (wikitext) => {
      const history_re = /<!--\s?Template:([uU]w-.*?)\s?-->.*?(\d{4})年(\d{1,2})月(\d{1,2})日 \([日一二三四五六]\) (\d{1,2}):(\d{1,2}) \(CST\)/g;
      const history = {};
      const latest = {
        date: new Morebits.date(0),
        type: ""
      };
      let current;
      while ((current = history_re.exec(wikitext)) !== null) {
        const template = current[1] ?? "";
        const current_date = new Morebits.date(`${current[2] ?? ""}-${current[3] ?? ""}-${current[4] ?? ""} ${current[5] ?? ""}:${current[6] ?? ""} (CST)`);
        const priorDate = history[template];
        if (priorDate === void 0 || priorDate.isBefore(current_date)) {
          history[template] = current_date;
        }
        if (!latest.date.isAfter(current_date)) {
          latest.date = current_date;
          latest.type = template;
        }
      }
      return [latest, history];
    };
    const autolevelParse = (_wikitext, params, latest, date, statelem) => {
      let noticeData = null;
      let level;
      if (/\d?$/.test(latest.type)) {
        level = Number.parseInt(latest.type.replace(/.*(\d)?$/, "$1"), 10);
      } else if (latest.type) {
        level = 1;
      }
      if (level === void 0 || Number.isNaN(level)) {
        level = 1;
      } else if (level > 2 || level < 1) {
        const message = uls("无法解析上次的警告层级，请手动选择一个警告层级。", "無法解析上次的警告層級，請手動選擇一個警告層級。");
        if (statelem) {
          statelem.error(message);
        } else {
          void mw.notify(message, {
            type: "warn",
            tag: "twinklewarn"
          });
        }
        return;
      } else {
        date || (date = /* @__PURE__ */ new Date());
        const autoTimeout = new Morebits.date(latest.date.getTime()).add(Twinkle.getPref("autolevelStaleDays"), "day");
        if (autoTimeout.isAfter(date)) {
          if (level === 2) {
            level = 2;
            if (statelem) {
            } else {
              noticeData = {
                level,
                latestType: latest.type,
                showArv: true,
                username: props.relevantUserName
              };
            }
          } else {
            level += 1;
          }
        } else {
          level = 1;
        }
      }
      let template = params.sub_group.replace(/(.*)\d$/, "$1");
      if (params.messageData && !params.messageData[`level${level}`]) {
        template = "uw-generic";
      }
      template += level;
      if (!statelem) {
        const groups = props.messages.levels.map((levelGroup) => {
          const entries = [];
          const createLevelEntries = (contents, val) => {
            for (const [itemKey, itemPropertiesRaw] of Object.entries(contents)) {
              const itemProperties = itemPropertiesRaw;
              if (!!val && !itemProperties[val]) {
                continue;
              }
              const key = typeof itemKey === "string" ? itemKey : String(itemProperties["value"] ?? "");
              const subTemplate = key + val;
              const levelData = val ? itemProperties[val] : void 0;
              entries.push({
                value: subTemplate,
                label: `{{${subTemplate}}}: ${val ? (levelData === null || levelData === void 0 ? void 0 : levelData.label) ?? "" : itemProperties.label ?? ""}`,
                messageData: itemProperties
              });
            }
          };
          createLevelEntries(levelGroup.list, `level${level}`);
          return {
            key: levelGroup.category,
            entries
          };
        });
        return {
          level,
          template,
          notice: {
            level,
            latestType: latest.type,
            showArv: noticeData ? noticeData.showArv : false,
            username: props.relevantUserName,
            groups
          }
        };
      }
      return {
        level,
        template,
        notice: null
      };
    };
    const autolevelProc = (oldSub) => {
      var _talkpageObj;
      const wikitext = ((_talkpageObj = talkpageObj) === null || _talkpageObj === void 0 ? void 0 : _talkpageObj.getPageText()) ?? "";
      const [latest] = dateProcessing(wikitext);
      const pseudoParams = {
        sub_group: oldSub,
        article: props.initialArticle,
        reason: "",
        main_group: "autolevel",
        messageData: void 0
      };
      const parsed = autolevelParse(wikitext, pseudoParams, latest);
      autolevelInfo.value = parsed ? parsed.notice : null;
    };
    const loadTalkPageForAutolevel = (oldSub) => {
      if (talkpageObj) {
        autolevelProc(oldSub);
        return;
      }
      const usertalk_page = new Morebits.wiki.page(`User_talk:${props.relevantUserName}`, uls("加载上次警告", "載入上次警告"));
      usertalk_page.setFollowRedirect(true, false);
      usertalk_page.load((pageobj) => {
        talkpageObj = pageobj;
        autolevelProc(oldSub);
      });
    };
    const preview = (params, box) => {
      if (params.main_group === "autolevel") {
        const usertalk_page = new Morebits.wiki.page(`User_talk:${props.relevantUserName}`, uls("加载上次警告", "載入上次警告"));
        usertalk_page.setFollowRedirect(true, false);
        usertalk_page.load((pageobj) => {
          talkpageObj = pageobj;
          const wikitext = pageobj.getPageText() ?? "";
          const [latest] = dateProcessing(wikitext);
          const parsed = autolevelParse(wikitext, params, latest);
          if (parsed) {
            showPreview(params, box, parsed.template);
          }
        });
      } else {
        showPreview(params, box);
      }
    };
    const main = (pageobj) => {
      var _history$params$sub_g, _messageData5;
      const text = pageobj.getPageText() ?? "";
      const statelem = pageobj.getStatusElement();
      const params = pageobj.getCallbackParameters();
      let {
        messageData
      } = params;
      const [latest, history] = dateProcessing(text);
      const now = new Morebits.date(pageobj.getLoadTime() ?? "");
      talkpageObj = pageobj;
      if (params.main_group === "autolevel") {
        var _params$messageData;
        const parsed = autolevelParse(text, params, latest, now, statelem);
        if (!parsed) {
          return;
        }
        if (params.sub_group !== parsed.template && !confirm(uls("将发送给用户{{", "將發送給使用者{{") + parsed.template + uls("}}模板，好吗？", "}}模板，好嗎？"))) {
          statelem.error(uls("用户取消", "使用者取消"));
          return;
        }
        params.sub_group = parsed.template;
        messageData = ((_params$messageData = params.messageData) === null || _params$messageData === void 0 ? void 0 : _params$messageData[`level${parsed.level}`]) ?? {};
      } else if (params.sub_group in history && new Morebits.date(((_history$params$sub_g = history[params.sub_group]) === null || _history$params$sub_g === void 0 ? void 0 : _history$params$sub_g.getTime()) ?? 0).add(1, "day").isAfter(now) && !confirm(uls("近24小时内一个同样的 ", "近24小時內一個同樣的 ") + params.sub_group + uls(" 模板已被发出。\n是否继续？", " 模板已被發出。\n是否繼續？"))) {
        statelem.error(uls("用户取消", "使用者取消"));
        return;
      }
      latest.date.add(1, "minute");
      if (latest.date.isAfter(now) && !confirm(uls("近1分钟内 ", "近1分鐘內 ") + latest.type + uls(" 模板已被发出。\n是否继续？", " 模板已被發出。\n是否繼續？"))) {
        statelem.error(uls("用户取消", "使用者取消"));
        return;
      }
      const customProcess = (template) => {
        var _messageData;
        template = template.split("|")[0] ?? "";
        let prefix;
        switch (template.slice(-1)) {
          case "1":
            prefix = "注意";
            break;
          case "2":
            prefix = "警告";
            break;
          // falls through
          default:
            prefix = "提醒";
            break;
        }
        return `${prefix}：${Morebits.string.toUpperCaseFirstChar(((_messageData = messageData) === null || _messageData === void 0 ? void 0 : _messageData.label) ?? "")}`;
      };
      let summary = "";
      if (params.main_group === "custom") {
        summary = customProcess(params.sub_group);
      } else {
        var _messageData2, _messageData3, _messageData4;
        if (params.main_group === "kitchensink" && !/^D+$/.test(params.sub_group)) {
          let sub = params.sub_group.slice(-1);
          if (sub === "m") {
            sub = params.sub_group.slice(-3);
          }
          if (/\d/.test(sub)) {
            params.main_group = `level${sub}`;
          }
        }
        const levelEntry = (_messageData2 = messageData) === null || _messageData2 === void 0 ? void 0 : _messageData2[params.main_group];
        summary = ((_messageData3 = messageData) === null || _messageData3 === void 0 ? void 0 : _messageData3.summary) || (levelEntry === null || levelEntry === void 0 ? void 0 : levelEntry.summary) || "";
        summary || (summary = customProcess(params.sub_group));
        if (((_messageData4 = messageData) === null || _messageData4 === void 0 ? void 0 : _messageData4.suppressArticleInSummary) !== true && params.article) {
          if (params.sub_group === "uw-aiv") {
            summary += `（${uls("对于", "對於")}[[User:${params.article}]]）`;
          } else if (params.sub_group === "uw-bite") {
            summary += `，${uls("于", "於")}[[User talk:${params.article}]]`;
          } else {
            summary += `${uls("，于[[", "，於[[") + params.article}]]`;
          }
        }
      }
      pageobj.setEditSummary(summary);
      pageobj.setChangeTags(Twinkle.changeTags);
      pageobj.setWatchlist(Twinkle.getPref("watchWarnings"));
      const warningText = getWarningWikitext(params.sub_group, params.article, params.reason, params.main_group === "custom");
      let sectionExists = false;
      let sectionNumber = 0;
      if (!((_messageData5 = messageData) !== null && _messageData5 !== void 0 && _messageData5.heading) && text.length) {
        const sections = text.match(/^(==*).+\1/gm);
        if (sections && sections.length !== 0) {
          const dateHeaderRegex = now.monthHeaderRegex();
          sectionNumber = 0;
          sectionExists = sections.reverse().some((sec, idx) => {
            return /^(==)[^=].+\1/m.test(sec) && dateHeaderRegex.test(sec) && typeof (sectionNumber = sections.length - 1 - idx) === "number";
          });
        }
      }
      if (sectionExists) {
        pageobj.setPageSection(sectionNumber + 1);
        pageobj.setAppendText(`

${warningText}`);
        pageobj.append();
      } else {
        var _messageData6;
        if ((_messageData6 = messageData) !== null && _messageData6 !== void 0 && _messageData6.heading) {
          pageobj.setNewSectionTitle(messageData.heading);
        } else {
          Morebits.status.info(uls("信息", "資訊"), uls("未找到当月的二级标题，将创建新的", "未找到當月的二級標題，將建立新的"));
          pageobj.setNewSectionTitle(now.monthHeader(0));
        }
        pageobj.setNewSectionText(warningText);
        pageobj.newSection();
      }
    };
    const evaluate = (params, statusContainer, restore) => {
      const userTalkPage = `User_talk:${props.relevantUserName}`;
      if (params.article) {
        if (/https?:\/\//.test(params.article)) {
          void mw.notify(uls("“页面链接”不能使用网址。", "「頁面連結」不能使用網址。"), {
            type: "warn",
            tag: "warn"
          });
          if (restore) {
            restore();
          }
          return;
        }
        try {
          const articleTitle = new mw.Title(params.article);
          params.article = articleTitle.getPrefixedText();
          if (articleTitle.getFragment()) {
            params.article += `#${articleTitle.getFragment()}`;
          }
        } catch {
          alert(uls("“页面链接”不合法，仅能输入一个页面名称，勿使用网址、[[ ]]，可使用Special:Diff。", "「頁面連結」不合法，僅能輸入一個頁面名稱，勿使用網址、[[ ]]，可使用Special:Diff。"));
          if (restore) {
            restore();
          }
          return;
        }
      }
      if (params.messageData === void 0) {
        void mw.notify(uls("请选择警告模板。", "請選擇警告模板。"), {
          type: "warn",
          tag: "warn"
        });
        if (restore) {
          restore();
        }
        return;
      }
      Morebits.status.init(statusContainer);
      Morebits.wiki.actionCompleted.redirect = userTalkPage;
      Morebits.wiki.actionCompleted.notice = uls("警告完成，将在几秒后刷新", "警告完成，將在幾秒後重新整理");
      const qiuwen_page = new Morebits.wiki.page(userTalkPage, uls("用户讨论页修改", "使用者討論頁修改"));
      qiuwen_page.setCallbackParameters(params);
      qiuwen_page.setFollowRedirect(true, false);
      qiuwen_page.load(main);
    };
    const __returned__ = {
      props,
      emit,
      open,
      submitting,
      mainGroup,
      subGroup,
      article,
      reason,
      previewBox,
      statusRef,
      subMessageData,
      autolevelInfo,
      get talkpageObj() {
        return talkpageObj;
      },
      set talkpageObj(v) {
        talkpageObj = v;
      },
      get previewer() {
        return previewer;
      },
      set previewer(v) {
        previewer = v;
      },
      lookupInput,
      notLinkedArticle,
      prevArticle,
      mainGroupItems,
      createEntries,
      subGroups,
      lookupMenuItems,
      filteredLookupItems,
      articleLabel,
      buildParams,
      primaryAction,
      onPreview,
      submit,
      getWarningWikitext,
      showPreview,
      dateProcessing,
      autolevelParse,
      autolevelProc,
      loadTalkPageForAutolevel,
      preview,
      main,
      evaluate,
      get CdxButton() {
        return import_codex19.CdxButton;
      },
      get CdxField() {
        return import_codex19.CdxField;
      },
      get CdxLookup() {
        return import_codex19.CdxLookup;
      },
      get CdxSelect() {
        return import_codex19.CdxSelect;
      },
      get CdxTextArea() {
        return import_codex19.CdxTextArea;
      },
      get CdxTextInput() {
        return import_codex19.CdxTextInput;
      },
      TwDialog: TwDialog_default2,
      TwStatus: TwStatus_default2,
      get uls() {
        return uls;
      }
    };
    Object.defineProperty(__returned__, "__isScriptSetup", {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});
var import_vue57 = require("vue");
var _hoisted_118 = {
  key: 0,
  class: "tw-warn-notice"
};
var _hoisted_215 = {
  key: 1,
  class: "tw-warn-autolevel"
};
var _hoisted_311 = {
  key: 0
};
var _hoisted_49 = {
  ref: "previewBox",
  hidden: ""
};
function render19(_ctx, _cache, $props, $setup, $data, $options) {
  return (0, import_vue57.openBlock)(), (0, import_vue57.createBlock)($setup["TwDialog"], {
    open: $setup.open,
    title: $props.title,
    "script-name": "Twinkle",
    "footer-links": $props.footerLinks,
    "primary-action": $setup.primaryAction,
    "onUpdate:open": _cache[6] || (_cache[6] = ($event) => $setup.open = $event),
    onPrimary: $setup.submit
  }, {
    default: (0, import_vue57.withCtx)(() => [(0, import_vue57.createVNode)($setup["CdxField"], null, {
      label: (0, import_vue57.withCtx)(() => [(0, import_vue57.createTextVNode)(
        (0, import_vue57.toDisplayString)($setup.uls("选择要发送的警告或提醒类型", "選擇要傳送的警告或提醒類別")),
        1
        /* TEXT */
      )]),
      description: (0, import_vue57.withCtx)(() => [(0, import_vue57.createTextVNode)(
        (0, import_vue57.toDisplayString)($setup.uls("首先选择一组，再选择具体的警告模板。", "首先選擇一組，再選擇具體的警告模板。")),
        1
        /* TEXT */
      )]),
      default: (0, import_vue57.withCtx)(() => [(0, import_vue57.createVNode)($setup["CdxSelect"], {
        selected: $setup.mainGroup,
        "onUpdate:selected": _cache[0] || (_cache[0] = ($event) => $setup.mainGroup = $event),
        "menu-items": $setup.mainGroupItems,
        disabled: $setup.submitting
      }, null, 8, ["selected", "menu-items", "disabled"])]),
      _: 1
      /* STABLE */
    }), (0, import_vue57.createVNode)($setup["CdxField"], null, {
      label: (0, import_vue57.withCtx)(() => [(0, import_vue57.createTextVNode)(
        (0, import_vue57.toDisplayString)($setup.uls("警告模板：", "警告模板：")),
        1
        /* TEXT */
      )]),
      default: (0, import_vue57.withCtx)(() => [(0, import_vue57.createVNode)($setup["CdxLookup"], {
        selected: $setup.subGroup,
        "onUpdate:selected": _cache[1] || (_cache[1] = ($event) => $setup.subGroup = $event),
        "input-value": $setup.lookupInput,
        "onUpdate:inputValue": _cache[2] || (_cache[2] = ($event) => $setup.lookupInput = $event),
        "menu-items": $setup.filteredLookupItems,
        disabled: $setup.submitting
      }, null, 8, ["selected", "input-value", "menu-items", "disabled"])]),
      _: 1
      /* STABLE */
    }), (0, import_vue57.createVNode)($setup["CdxField"], null, {
      label: (0, import_vue57.withCtx)(() => [(0, import_vue57.createTextVNode)(
        (0, import_vue57.toDisplayString)($setup.articleLabel),
        1
        /* TEXT */
      )]),
      description: (0, import_vue57.withCtx)(() => [(0, import_vue57.createTextVNode)(
        (0, import_vue57.toDisplayString)($setup.uls("仅限一个，勿使用网址、[[ ]]，可使用Special:Diff", "僅限一個，勿使用網址、[[ ]]，可使用Special:Diff")),
        1
        /* TEXT */
      )]),
      default: (0, import_vue57.withCtx)(() => [(0, import_vue57.createVNode)($setup["CdxTextInput"], {
        modelValue: $setup.article,
        "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $setup.article = $event),
        disabled: $setup.submitting
      }, null, 8, ["modelValue", "disabled"])]),
      _: 1
      /* STABLE */
    }), $props.notice.text ? ((0, import_vue57.openBlock)(), (0, import_vue57.createElementBlock)(
      "div",
      _hoisted_118,
      (0, import_vue57.toDisplayString)($props.notice.text),
      1
      /* TEXT */
    )) : (0, import_vue57.createCommentVNode)("v-if", true), $setup.autolevelInfo ? ((0, import_vue57.openBlock)(), (0, import_vue57.createElementBlock)("div", _hoisted_215, [(0, import_vue57.createElementVNode)("div", null, [(0, import_vue57.createTextVNode)(
      (0, import_vue57.toDisplayString)($setup.uls("将发送", "將發送")),
      1
      /* TEXT */
    ), (0, import_vue57.createElementVNode)(
      "b",
      null,
      (0, import_vue57.toDisplayString)($setup.uls("层级", "層級")) + (0, import_vue57.toDisplayString)($setup.autolevelInfo.level),
      1
      /* TEXT */
    ), (0, import_vue57.createTextVNode)(
      (0, import_vue57.toDisplayString)($setup.uls("警告模板。", "警告模板。")),
      1
      /* TEXT */
    )]), $setup.autolevelInfo.showArv ? ((0, import_vue57.openBlock)(), (0, import_vue57.createElementBlock)("div", _hoisted_311, [(0, import_vue57.createTextVNode)(
      (0, import_vue57.toDisplayString)($setup.autolevelInfo.username + $setup.uls("最后收到了一个层级2警告（", "最後收到了一個層級2警告（") + $setup.autolevelInfo.latestType + $setup.uls("），所以将其报告给管理人员会比较好；", "），所以將其報告給管理人員會比較好；")) + " ",
      1
      /* TEXT */
    ), (0, import_vue57.createElementVNode)(
      "a",
      {
        href: "#",
        class: "tw-warn-arv-link",
        onClick: _cache[4] || (_cache[4] = (0, import_vue57.withModifiers)(($event) => $setup.emit("openArv"), ["prevent"]))
      },
      (0, import_vue57.toDisplayString)($setup.uls("单击此处打开告状工具", "點擊此處打開告狀工具")),
      1
      /* TEXT */
    )])) : (0, import_vue57.createCommentVNode)("v-if", true)])) : (0, import_vue57.createCommentVNode)("v-if", true), (0, import_vue57.createVNode)($setup["CdxField"], null, {
      label: (0, import_vue57.withCtx)(() => [(0, import_vue57.createTextVNode)(
        (0, import_vue57.toDisplayString)($setup.uls("可选信息：", "可選資訊：")),
        1
        /* TEXT */
      )]),
      description: (0, import_vue57.withCtx)(() => [(0, import_vue57.createTextVNode)(
        (0, import_vue57.toDisplayString)($setup.uls("理由或是附加信息", "理由或是附加資訊")),
        1
        /* TEXT */
      )]),
      default: (0, import_vue57.withCtx)(() => [(0, import_vue57.createVNode)($setup["CdxTextArea"], {
        modelValue: $setup.reason,
        "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => $setup.reason = $event),
        disabled: $setup.submitting
      }, null, 8, ["modelValue", "disabled"])]),
      _: 1
      /* STABLE */
    }), (0, import_vue57.createVNode)($setup["CdxButton"], {
      disabled: $setup.submitting,
      weight: "quiet",
      onClick: $setup.onPreview
    }, {
      default: (0, import_vue57.withCtx)(() => [(0, import_vue57.createTextVNode)(
        (0, import_vue57.toDisplayString)($setup.uls("预览", "預覽")),
        1
        /* TEXT */
      )]),
      _: 1
      /* STABLE */
    }, 8, ["disabled"]), (0, import_vue57.createElementVNode)(
      "div",
      _hoisted_49,
      null,
      512
      /* NEED_PATCH */
    ), (0, import_vue57.createVNode)(
      $setup["TwStatus"],
      {
        ref: "statusRef"
      },
      null,
      512
      /* NEED_PATCH */
    )]),
    _: 1
    /* STABLE */
  }, 8, ["open", "title", "footer-links", "primary-action"]);
}
//! src/Twinkle/modules/ui/TwWarnDialog.vue
TwWarnDialog_default.render = render19;
TwWarnDialog_default.__file = "src\\Twinkle\\modules\\ui\\TwWarnDialog.vue";
TwWarnDialog_default.__scopeId = "data-v-9fc64c53";
var TwWarnDialog_default2 = TwWarnDialog_default;
var import_vue58 = require("vue");
var import_codex20 = require("@wikimedia/codex");
var import_vue59 = require("vue");
var TwXfdDialog_default = /* @__PURE__ */ (0, import_vue58.defineComponent)({
  __name: "TwXfdDialog",
  props: {
    title: {
      type: String,
      required: true
    },
    defaultCategory: {
      type: String,
      required: true
    },
    showFwdCsd: {
      type: Boolean,
      required: true
    },
    initialXfdCat: {
      type: String,
      required: true
    },
    rememberCategory: {
      type: Boolean,
      required: true
    },
    fameDefaultReason: {
      type: String,
      required: true
    },
    substubDefaultReason: {
      type: String,
      required: true
    },
    fwdcsdReason: {
      type: String,
      required: true
    },
    showNoinclude: {
      type: Boolean,
      required: true
    },
    noincludeDisabled: {
      type: Boolean,
      required: true
    },
    footerLinks: {
      type: Array,
      required: true
    }
  },
  emits: ["close"],
  setup(__props, {
    expose: __expose,
    emit: __emit
  }) {
    __expose();
    const props = __props;
    const emit = __emit;
    const open = (0, import_vue59.ref)(true);
    const category = (0, import_vue59.ref)(props.defaultCategory);
    const notify = (0, import_vue59.ref)(true);
    const noinclude = (0, import_vue59.ref)(props.showNoinclude);
    const xfdcat = (0, import_vue59.ref)(props.initialXfdCat);
    const mergeinto = (0, import_vue59.ref)("");
    const fwdcsdreason = (0, import_vue59.ref)("");
    const submitting = (0, import_vue59.ref)(false);
    const statusRef = (0, import_vue59.ref)(null);
    const initialReason = (() => {
      switch (props.initialXfdCat) {
        case "fwdcsd":
          return props.fwdcsdReason;
        case "fame":
          return props.fameDefaultReason;
        case "substub":
          return props.substubDefaultReason;
        default:
          return "";
      }
    })();
    const xfdreason = (0, import_vue59.ref)(initialReason);
    const categoryItems = [{
      value: "afd",
      label: uls("页面存废讨论", "頁面存廢討論")
    }, {
      value: "ffd",
      label: uls("文件存废讨论", "檔案存廢討論")
    }];
    const xfdcatItems = (0, import_vue59.computed)(() => {
      const items = [{
        value: "delete",
        label: uls("删除", "刪除")
      }, {
        value: "merge",
        label: uls("合并", "合併")
      }];
      if (props.showFwdCsd) {
        items.push({
          value: "fwdcsd",
          label: uls("转交自快速删除候选", "轉交自快速刪除候選")
        });
      }
      items.push({
        value: "fame",
        label: uls("批量关注度提删", "批次關注度提刪")
      }, {
        value: "substub",
        label: uls("批量小小作品提删", "批次小小作品提刪")
      }, {
        value: "batch",
        label: uls("批量其他提删", "批次其他提刪")
      });
      return items;
    });
    const showXfdcat = (0, import_vue59.computed)(() => category.value === "afd");
    const showNoincludeField = (0, import_vue59.computed)(() => category.value === "afd");
    const showMergeinto = (0, import_vue59.computed)(() => category.value === "afd" && ["merge", "fwdcsd"].includes(xfdcat.value));
    const showFwdcsdReason = (0, import_vue59.computed)(() => category.value === "afd" && xfdcat.value === "fwdcsd");
    const mergeintoLabel = (0, import_vue59.computed)(() => xfdcat.value === "fwdcsd" ? "提交人：" : uls("合并到：", "合併到："));
    const noincludeLabel = uls("使用<noinclude>包裹模板", "使用<noinclude>包裹模板");
    (0, import_vue59.watch)(xfdcat, () => {
      switch (xfdcat.value) {
        case "fwdcsd":
          xfdreason.value = props.fwdcsdReason;
          break;
        case "fame":
          xfdreason.value = props.fameDefaultReason;
          break;
        case "substub":
          xfdreason.value = props.substubDefaultReason;
          break;
        default:
          break;
      }
      if (props.rememberCategory) {
        mw.storage.set("Twinkle_afdCategory", xfdcat.value);
      }
    });
    (0, import_vue59.watch)(category, () => {
      notify.value = true;
    });
    const primaryAction = (0, import_vue59.computed)(() => ({
      label: uls("提交", "提交"),
      actionType: "progressive",
      disabled: submitting.value
    }));
    const submit = () => {
      var _statusRef$value23;
      if (submitting.value) {
        return;
      }
      submitting.value = true;
      evaluate({
        category: category.value,
        notify: notify.value,
        noinclude: noinclude.value,
        xfdcat: xfdcat.value,
        mergeinto: mergeinto.value.trim(),
        xfdreason: xfdreason.value,
        fwdcsdreason: fwdcsdreason.value
      }, ((_statusRef$value23 = statusRef.value) === null || _statusRef$value23 === void 0 ? void 0 : _statusRef$value23.getStatusRoot()) ?? null, () => {
        submitting.value = false;
      });
    };
    (0, import_vue59.watch)(open, (value) => {
      if (!value) {
        emit("close");
      }
    });
    const callbacks = {
      afd: {
        main: (taggingPage) => {
          const params = taggingPage.getCallbackParameters();
          callbacks.afd.taggingArticle(taggingPage);
          const discussionPage = new Morebits.wiki.page(params.logpage ?? "", uls("加入讨论到当日列表", "加入討論到當日列表"));
          discussionPage.setFollowRedirect(true);
          discussionPage.setCallbackParameters(params);
          discussionPage.load(callbacks.afd.todaysList);
          if (params.notify) {
            if (params.creator === mw.config.get("wgUserName")) {
              Morebits.status.warn(`${uls("通知页面创建者（", "通知頁面建立者（") + params.creator}）`, uls("您创建了该页，跳过通知", "您建立了該頁，跳過通知"));
              params.creator = null;
            } else {
              const talkPageName = `User talk:${params.creator}`;
              const usertalkpage = new Morebits.wiki.page(talkPageName, `${uls("通知页面创建者（", "通知頁面建立者（") + params.creator}）`);
              const notifytext = "\n{{".concat("subst:").concat(`AFDNote|${Morebits.pageNameNorm}}}——~~`, "~~");
              usertalkpage.setAppendText(notifytext);
              usertalkpage.setEditSummary(`通知：页面[[${Morebits.pageNameNorm}]]存废讨论提名`);
              usertalkpage.setChangeTags(Twinkle.changeTags);
              usertalkpage.setCreateOption("recreate");
              usertalkpage.setWatchlist(Twinkle.getPref("xfdWatchUser"));
              usertalkpage.setFollowRedirect(true, false);
              usertalkpage.append();
            }
            if (params.lognomination) {
              addToLog(params, params.creator ?? null);
            }
          } else if (params.lognomination) {
            addToLog(params, null);
          }
        },
        taggingArticle: (pageobj) => {
          let text = pageobj.getPageText() ?? "";
          const params = pageobj.getCallbackParameters();
          let tag = `{{vfd|${Morebits.string.formatReasonText(params.xfdreason)}`;
          if (Morebits.isPageRedirect()) {
            tag += "|r";
          }
          tag += "|date={{".concat("subst:", "#time:Y/m/d}}}}");
          if (params.noinclude) {
            tag = `<noinclude>${tag}</noinclude>`;
            if (text.indexOf("{|") === 0) {
              tag += "\n";
            }
          } else {
            tag += "\n";
          }
          const textNoSd = text.replace(/\{\{\s*(db(-\w*)?|d|delete|(?:hang|hold)[- ]?on)\s*(\|(?:\{\{[^{}]*\}\}|[^{}])*)?\}\}\s*/gi, "");
          if (text !== textNoSd && confirm(uls("在页面上找到快速删除模板，要移除吗？", "在頁面上找到快速刪除模板，要移除嗎？"))) {
            text = textNoSd;
          }
          const textNoNotMandarin = text.replace(/\{\{\s*(NotMandarin|Notchinese|非中文|非現代漢語|非现代汉语|非現代標準漢語|非现代标准汉语)\s*(\|(?:\{\{[^{}]*\}\}|[^{}])*)?\}\}\s*/gi, "");
          if (text !== textNoNotMandarin && confirm(uls("在页面上找到非现代标准汉语模板，要移除吗？", "在頁面上找到非現代標準漢語模板，要移除嗎？"))) {
            text = textNoNotMandarin;
          }
          const textNoAfc = text.replace(/{{\s*AFC submission\s*\|\s*\|[^}]*?}}\s*/gi, "");
          if (text !== textNoAfc && confirm(uls("在页面上找到AFC提交模板，要移除吗？", "在頁面上找到AFC提交模板，要移除嗎？"))) {
            text = textNoAfc;
          }
          if (Twinkle.getPref("markXfdPagesAsPatrolled")) {
            pageobj.patrol();
          }
          const qiuwen_page = new Morebits.wikitext.page(text);
          text = qiuwen_page.insertAfterTemplates(tag, Twinkle.hatnoteRegex).getText();
          pageobj.setPageText(text);
          pageobj.setEditSummary(`${uls("页面存废讨论：[[", "頁面存廢討論：[[") + params.logpage}#${Morebits.pageNameNorm}]]`);
          pageobj.setChangeTags(Twinkle.changeTags);
          pageobj.setWatchlist(Twinkle.getPref("xfdWatchPage"));
          pageobj.save();
        },
        todaysList: (pageobj) => {
          let text = pageobj.getPageText() ?? "";
          const params = pageobj.getCallbackParameters();
          let type = "";
          let to = "";
          switch (params.xfdcat) {
            case "fwdcsd":
            case "merge":
              to = params.mergeinto;
              break;
            default:
              break;
          }
          type = params.xfdcat;
          let append = true;
          switch (type) {
            case "fame":
            case "substub":
            case "batch": {
              const commentText = `<!-- Twinkle: User:${mw.config.get("wgUserName")} 的 ${type} 提删插入点，请勿更改或移除此行，除非不再于此页面提删 -->`;
              let newText = `===[[:${Morebits.pageNameNorm}]]===`;
              if (type === "fame") {
                newText += `
{{Findsources|${Morebits.pageNameNorm}}}`;
              }
              if (text.includes(commentText)) {
                text = text.replace(commentText, `${newText}

${commentText}`);
                pageobj.setPageText(text);
                append = false;
              } else {
                const headings = {
                  fame: '== 30天后仍挂有{{tl|notability}}模板的条目 ==\n<span style="font-size: smaller;">（已挂[[Template:notability|不符收录标准模板]]30天）</span>',
                  substub: '== 30天后仍挂有{{tl|substub}}模板的条目 ==\n<span style="font-size: smaller;">（已挂[[Template:substub|小小条目模板]]30天）</span>',
                  batch: "== 批量提删 =="
                };
                const subjects = {
                  fame: "<u>不符合收录标准</u>条目",
                  substub: "<u>长度过短</u>条目",
                  batch: "页面"
                };
                const appendText = `
{{safesubst:SafeAfdHead}}
${headings[type]}
${newText}

${commentText}
----
:建议：删除前述页面；理由：${Morebits.string.formatReasonText(params.xfdreason)}
提报以上${subjects[type]}的求闻编者及时间：<br id="no-new-title">~~`.concat("~~");
                pageobj.setAppendText(appendText);
              }
              break;
            }
            default:
              pageobj.setAppendText("\n{{".concat("subst:", `DRItem|Type=${type}|DRarticles=${Morebits.pageNameNorm}|Reason=${Morebits.string.formatReasonText(params.xfdreason)}${params.fwdcsdreason.trim() === "" ? "" : `<br>
转交理由：${params.fwdcsdreason}`}|To=${to}}}~~`.concat("~~")));
              break;
          }
          pageobj.setEditSummary(`加入[[${Morebits.pageNameNorm}]]`);
          pageobj.setChangeTags(Twinkle.changeTags);
          pageobj.setWatchlist(Twinkle.getPref("xfdWatchDiscussion"));
          pageobj.setCreateOption("recreate");
          if (append) {
            pageobj.append();
          } else {
            pageobj.save();
          }
          Twinkle.xfd.currentRationale = null;
        },
        lookupCreation: (targetPage) => {
          targetPage.getStatusElement().info("完成");
          const params = targetPage.getCallbackParameters();
          params.creator = targetPage.getCreator();
          const taggingPage = new Morebits.wiki.page(mw.config.get("wgPageName") ?? "", uls("加入存废讨论模板到页面", "加入存廢討論模板到頁面"));
          taggingPage.setFollowRedirect(false);
          taggingPage.setCallbackParameters(params);
          taggingPage.load(callbacks.afd.tryTagging);
        },
        tryTagging: (taggingPage) => {
          const statelem = taggingPage.getStatusElement();
          if (!taggingPage.exists()) {
            statelem.error(uls("页面不存在，可能已被删除", "頁面不存在，可能已被刪除"));
            return;
          }
          const text = taggingPage.getPageText() ?? "";
          const xfd = /(?:\{\{([rsaiftcmv]fd|md1|proposed deletion)[^{}]*?\}\})/i.exec(text);
          if (xfd && !confirm(uls("删除相关模板{{", "刪除相關模板{{") + (xfd[1] ?? "") + uls("}}已被置于页面中，您是否仍想继续提报？", "}}已被置於頁面中，您是否仍想繼續提報？"))) {
            statelem.error(uls("页面已被提交至存废讨论。", "頁面已被提交至存廢討論。"));
            return;
          }
          const copyvio = /(?:\{\{\s*(copyvio)[^{}]*?\}\})/i.exec(text);
          if (copyvio) {
            statelem.error(uls("页面中已有著作权验证模板。", "頁面中已有著作權驗證模板。"));
            return;
          }
          callbacks.afd.main(taggingPage);
        }
      }
    };
    const ffdCallbacks = {
      main: (taggingPage) => {
        const params = taggingPage.getCallbackParameters();
        ffdCallbacks.taggingImage(taggingPage);
        const qiuwen_page = new Morebits.wiki.page(params.logpage ?? "", uls("加入讨论到当日列表", "加入討論到當日列表"));
        qiuwen_page.setFollowRedirect(true);
        qiuwen_page.setCallbackParameters(params);
        qiuwen_page.load(ffdCallbacks.todaysList);
        if (params.notify) {
          if (params.creator === mw.config.get("wgUserName")) {
            Morebits.status.warn(`${uls("通知页面创建者（", "通知頁面建立者（") + params.creator}）`, uls("您创建了该页，跳过通知", "您建立了該頁，跳過通知"));
            return;
          }
          const talkPageName = `User talk:${params.creator}`;
          const usertalkpage = new Morebits.wiki.page(talkPageName, `${uls("通知页面创建者（", "通知頁面建立者（") + params.creator}）`);
          const notifytext = "\n{{".concat("subst:", `idw|File:${mw.config.get("wgTitle") ?? ""}}}`, "——~~", "~~");
          usertalkpage.setAppendText(notifytext);
          usertalkpage.setEditSummary(`通知：文件[[${Morebits.pageNameNorm}]]存废讨论提名`);
          usertalkpage.setChangeTags(Twinkle.changeTags);
          usertalkpage.setCreateOption("recreate");
          usertalkpage.setWatchlist(Twinkle.getPref("xfdWatchUser"));
          usertalkpage.setFollowRedirect(true, false);
          usertalkpage.append();
          if (params.lognomination) {
            addToLog(params, params.creator ?? null);
          }
        } else if (params.lognomination) {
          addToLog(params, null);
        }
      },
      taggingImage: (pageobj) => {
        const text = pageobj.getPageText() ?? "";
        const params = pageobj.getCallbackParameters();
        pageobj.setPageText(`{{ifd|${Morebits.string.formatReasonText(params.xfdreason)}|date={{`.concat("subst:", `#time:c}}}}
${text}`));
        pageobj.setEditSummary(`${uls("文件存废讨论：[[", "檔案存廢討論：[[") + params.logpage}#${Morebits.pageNameNorm}]]`);
        pageobj.setChangeTags(Twinkle.changeTags);
        pageobj.setWatchlist(Twinkle.getPref("xfdWatchPage"));
        pageobj.setCreateOption("recreate");
        pageobj.save();
      },
      todaysList: (pageobj) => {
        const params = pageobj.getCallbackParameters();
        pageobj.setAppendText("\n{{".concat("subst:", `IfdItem|Filename=${mw.config.get("wgTitle") ?? ""}|Uploader=${params.creator}|Reason=${Morebits.string.formatReasonText(params.xfdreason)}}}——~~`.concat("~~")));
        pageobj.setEditSummary(`加入[[${Morebits.pageNameNorm}]]`);
        pageobj.setChangeTags(Twinkle.changeTags);
        pageobj.setWatchlist(Twinkle.getPref("xfdWatchDiscussion"));
        pageobj.setCreateOption("recreate");
        pageobj.append(() => {
          Twinkle.xfd.currentRationale = null;
        });
      },
      lookupCreation: (targetPage) => {
        targetPage.getStatusElement().info("完成");
        const params = targetPage.getCallbackParameters();
        params.creator = targetPage.getCreator();
        const taggingPage = new Morebits.wiki.page(mw.config.get("wgPageName") ?? "", uls("加入存废讨论模板到文件描述页", "加入存廢討論模板到檔案描述頁"));
        taggingPage.setFollowRedirect(false);
        taggingPage.setCallbackParameters(params);
        taggingPage.load(ffdCallbacks.tryTagging);
      },
      tryTagging: (taggingPage) => {
        const statelem = taggingPage.getStatusElement();
        if (!taggingPage.exists()) {
          statelem.error(uls("页面不存在，可能已被删除", "頁面不存在，可能已被刪除"));
          return;
        }
        const text = taggingPage.getPageText() ?? "";
        const xfd = /(?:\{\{([rsaiftcmv]fd|md1|proposed deletion)[^{}]*?\}\})/i.exec(text);
        if (xfd && !confirm(uls("删除相关模板{{", "刪除相關模板{{") + (xfd[1] ?? "") + uls("}}已被置于页面中，您是否仍想继续提报？", "}}已被置於頁面中，您是否仍想繼續提報？"))) {
          statelem.error(uls("页面已被提交至存废讨论。", "頁面已被提交至存廢討論。"));
          return;
        }
        ffdCallbacks.main(taggingPage);
      }
    };
    const addToLog = (params, initialContrib) => {
      const editsummary = uls("记录对[[", "記錄對[[") + Morebits.pageNameNorm + uls("]]的存废讨论提名", "]]的存廢討論提名");
      const usl = new Morebits.userspaceLogger(Twinkle.getPref("xfdLogPageName"));
      usl.initialText = uls(`这是该用户使用[[H:TW|Twinkle]]的提删模块做出的[[QW:XFD|存废讨论]]提名列表。

若您不再想保留此日志，请在[[${Twinkle.getPref("configPage")}|参数设置]]中关掉，并使用[[QW:CSD#O1|CSD O1]]提交快速删除。`, `這是該使用者使用[[H:TW|Twinkle]]的提刪模塊做出的[[QW:XFD|存廢討論]]提名列表。

若您不再想保留此日誌，請在[[${Twinkle.getPref("configPage")}|偏好設定]]中關掉，並使用[[QW:CSD#O1|CSD O1]]提交快速刪除。`);
      let xfdCatName;
      switch (params.xfdcat) {
        case "delete":
          xfdCatName = uls("删除", "刪除");
          break;
        case "merge":
          xfdCatName = uls("合并到", "合併到");
          break;
        case "fwdcsd":
          xfdCatName = uls("转交自快速删除候选", "轉交自快速刪除候選");
          break;
        case "fame":
          xfdCatName = uls("批量关注度提删", "批次關注度提刪");
          break;
        case "substub":
          xfdCatName = uls("批量小小作品提删", "批次小小作品提刪");
          break;
        case "batch":
          xfdCatName = uls("批量其他提删", "批次其他提刪");
          break;
        default:
          xfdCatName = uls("文件存废讨论", "檔案存廢討論");
          break;
      }
      let appendText = `# [[:${Morebits.pageNameNorm}]]`;
      if (mw.config.get("wgNamespaceNumber") === 6) {
        appendText += `（[{{fullurl:Special:Log|page=${mw.util.wikiUrlencode(mw.config.get("wgPageName") ?? "")}}} ${uls("日志", "日誌")}]）`;
      }
      appendText += `：${xfdCatName}`;
      if (params.xfdcat === "merge") {
        appendText += `[[:${params.mergeinto}]]`;
      }
      appendText += "。";
      if (params.xfdreason) {
        appendText += `'''${params.xfdcat === "fwdcsd" ? uls("原删除理据", "原刪除理據") : uls("理据", "理據")}'''：${Morebits.string.formatReasonForLog(params.xfdreason)}`;
        appendText = Morebits.string.appendPunctuation(appendText);
      }
      if (params.fwdcsdreason) {
        appendText += `'''${params.xfdcat === "fwdcsd" ? uls("转交理据", "轉交理據") : uls("理据", "理據")}'''：${Morebits.string.formatReasonForLog(params.fwdcsdreason)}`;
        appendText = Morebits.string.appendPunctuation(appendText);
      }
      if (initialContrib) {
        appendText += `；通知{{user|${initialContrib}}}`;
      }
      appendText += " ~~".concat("~~", "~\n");
      usl.changeTags = Twinkle.changeTags;
      usl.log(appendText, editsummary);
    };
    const evaluate = (params, statusContainer, restore) => {
      if (params.xfdcat === "merge" && params.mergeinto.trim() === "") {
        void mw.notify(uls("请提供合并目标！", "請提供合併目標！"), {
          type: "warn",
          tag: "twinklexfd"
        });
        if (restore) {
          restore();
        }
        return;
      }
      Morebits.status.init(statusContainer);
      Twinkle.xfd.currentRationale = params.xfdreason;
      Morebits.status.onError(Twinkle.xfd.printRationale);
      if (!params.category) {
        Morebits.status.error("错误", "未定义的动作");
        if (restore) {
          restore();
        }
        return;
      }
      const date = new Morebits.date();
      switch (params.category) {
        case "afd": {
          params.logpage = `Qiuwen_talk:存废讨论/记录/${date.format("YYYY/MM/DD", "utc")}`;
          params.lognomination = Twinkle.getPref("logXfdNominations") === true && !Twinkle.getPref("noLogOnXfdNomination").includes(params.xfdcat);
          Morebits.wiki.addCheckpoint();
          Morebits.wiki.actionCompleted.redirect = params.logpage;
          Morebits.wiki.actionCompleted.notice = uls("提名完成，重定向到讨论页", "提名完成，重新導向到討論頁");
          const targetPage = new Morebits.wiki.page(mw.config.get("wgPageName") ?? "", uls("获取页面创建信息", "取得頁面建立資訊"));
          targetPage.setCallbackParameters(params);
          if (mw.config.get("wgPageContentModel") === "wikitext") {
            targetPage.setLookupNonRedirectCreator(true);
          }
          targetPage.lookupCreation(callbacks.afd.lookupCreation);
          Morebits.wiki.removeCheckpoint();
          break;
        }
        case "ffd": {
          params.logpage = `Qiuwen_talk:存废讨论/记录/${date.format("YYYY/MM/DD", "utc")}`;
          params.lognomination = Twinkle.getPref("logXfdNominations") === true && !Twinkle.getPref("noLogOnXfdNomination").includes("ffd");
          Morebits.wiki.addCheckpoint();
          Morebits.wiki.actionCompleted.redirect = params.logpage;
          Morebits.wiki.actionCompleted.notice = uls("提名完成，重定向到讨论页", "提名完成，重新導向到討論頁");
          const qiuwen_page = new Morebits.wiki.page(mw.config.get("wgPageName") ?? "", uls("获取页面创建信息", "取得頁面建立資訊"));
          qiuwen_page.setCallbackParameters(params);
          qiuwen_page.setLookupNonRedirectCreator(true);
          qiuwen_page.lookupCreation(ffdCallbacks.lookupCreation);
          Morebits.wiki.removeCheckpoint();
          break;
        }
        default:
          void mw.notify("twinklexfd：未定义的类别", {
            type: "warn",
            tag: "twinklexfd"
          });
          break;
      }
    };
    const __returned__ = {
      props,
      emit,
      open,
      category,
      notify,
      noinclude,
      xfdcat,
      mergeinto,
      fwdcsdreason,
      submitting,
      statusRef,
      initialReason,
      xfdreason,
      categoryItems,
      xfdcatItems,
      showXfdcat,
      showNoincludeField,
      showMergeinto,
      showFwdcsdReason,
      mergeintoLabel,
      noincludeLabel,
      primaryAction,
      submit,
      callbacks,
      ffdCallbacks,
      addToLog,
      evaluate,
      get CdxCheckbox() {
        return import_codex20.CdxCheckbox;
      },
      get CdxField() {
        return import_codex20.CdxField;
      },
      get CdxSelect() {
        return import_codex20.CdxSelect;
      },
      get CdxTextArea() {
        return import_codex20.CdxTextArea;
      },
      get CdxTextInput() {
        return import_codex20.CdxTextInput;
      },
      TwDialog: TwDialog_default2,
      TwStatus: TwStatus_default2,
      get uls() {
        return uls;
      }
    };
    Object.defineProperty(__returned__, "__isScriptSetup", {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});
var import_vue60 = require("vue");
function render20(_ctx, _cache, $props, $setup, $data, $options) {
  return (0, import_vue60.openBlock)(), (0, import_vue60.createBlock)($setup["TwDialog"], {
    open: $setup.open,
    title: $props.title,
    "script-name": "Twinkle",
    "footer-links": $props.footerLinks,
    "primary-action": $setup.primaryAction,
    "onUpdate:open": _cache[8] || (_cache[8] = ($event) => $setup.open = $event),
    onPrimary: $setup.submit
  }, {
    default: (0, import_vue60.withCtx)(() => [(0, import_vue60.createVNode)($setup["CdxField"], null, {
      label: (0, import_vue60.withCtx)(() => [(0, import_vue60.createTextVNode)(
        (0, import_vue60.toDisplayString)($setup.uls("提交类型：", "提交類別：")),
        1
        /* TEXT */
      )]),
      default: (0, import_vue60.withCtx)(() => [(0, import_vue60.createVNode)($setup["CdxSelect"], {
        selected: $setup.category,
        "onUpdate:selected": _cache[0] || (_cache[0] = ($event) => $setup.category = $event),
        "menu-items": $setup.categoryItems,
        disabled: $setup.submitting
      }, null, 8, ["selected", "disabled"])]),
      _: 1
      /* STABLE */
    }), (0, import_vue60.createVNode)($setup["CdxCheckbox"], {
      modelValue: $setup.notify,
      "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.notify = $event),
      disabled: $setup.submitting
    }, {
      default: (0, import_vue60.withCtx)(() => [(0, import_vue60.createTextVNode)(
        (0, import_vue60.toDisplayString)($setup.uls("如可能，通知页面创建者", "如可能，通知頁面建立者")),
        1
        /* TEXT */
      )]),
      _: 1
      /* STABLE */
    }, 8, ["modelValue", "disabled"]), $setup.showXfdcat ? ((0, import_vue60.openBlock)(), (0, import_vue60.createBlock)($setup["CdxField"], {
      key: 0,
      "is-fieldset": ""
    }, {
      label: (0, import_vue60.withCtx)(() => [(0, import_vue60.createTextVNode)(
        (0, import_vue60.toDisplayString)($setup.uls("页面存废讨论", "頁面存廢討論")),
        1
        /* TEXT */
      )]),
      default: (0, import_vue60.withCtx)(() => [$setup.showNoincludeField ? ((0, import_vue60.openBlock)(), (0, import_vue60.createBlock)($setup["CdxCheckbox"], {
        key: 0,
        modelValue: $setup.noinclude,
        "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $setup.noinclude = $event),
        disabled: $setup.submitting || $props.noincludeDisabled
      }, {
        default: (0, import_vue60.withCtx)(() => [(0, import_vue60.createTextVNode)(
          (0, import_vue60.toDisplayString)($setup.noincludeLabel),
          1
          /* TEXT */
        )]),
        _: 1
        /* STABLE */
      }, 8, ["modelValue", "disabled"])) : (0, import_vue60.createCommentVNode)("v-if", true), (0, import_vue60.createVNode)($setup["CdxField"], null, {
        label: (0, import_vue60.withCtx)(() => [(0, import_vue60.createTextVNode)(
          (0, import_vue60.toDisplayString)($setup.uls("选择提删类型：", "選擇提刪類別：")),
          1
          /* TEXT */
        )]),
        default: (0, import_vue60.withCtx)(() => [(0, import_vue60.createVNode)($setup["CdxSelect"], {
          selected: $setup.xfdcat,
          "onUpdate:selected": _cache[3] || (_cache[3] = ($event) => $setup.xfdcat = $event),
          "menu-items": $setup.xfdcatItems,
          disabled: $setup.submitting
        }, null, 8, ["selected", "menu-items", "disabled"])]),
        _: 1
        /* STABLE */
      }), $setup.showMergeinto ? ((0, import_vue60.openBlock)(), (0, import_vue60.createBlock)($setup["CdxField"], {
        key: 1
      }, {
        label: (0, import_vue60.withCtx)(() => [(0, import_vue60.createTextVNode)(
          (0, import_vue60.toDisplayString)($setup.mergeintoLabel),
          1
          /* TEXT */
        )]),
        default: (0, import_vue60.withCtx)(() => [(0, import_vue60.createVNode)($setup["CdxTextInput"], {
          modelValue: $setup.mergeinto,
          "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $setup.mergeinto = $event),
          disabled: $setup.submitting
        }, null, 8, ["modelValue", "disabled"])]),
        _: 1
        /* STABLE */
      })) : (0, import_vue60.createCommentVNode)("v-if", true), (0, import_vue60.createVNode)($setup["CdxField"], null, {
        label: (0, import_vue60.withCtx)(() => [(0, import_vue60.createTextVNode)(
          (0, import_vue60.toDisplayString)($setup.uls("提删理由：", "提刪理由：")),
          1
          /* TEXT */
        )]),
        default: (0, import_vue60.withCtx)(() => [(0, import_vue60.createVNode)($setup["CdxTextArea"], {
          modelValue: $setup.xfdreason,
          "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => $setup.xfdreason = $event),
          disabled: $setup.submitting
        }, null, 8, ["modelValue", "disabled"])]),
        _: 1
        /* STABLE */
      }), $setup.showFwdcsdReason ? ((0, import_vue60.openBlock)(), (0, import_vue60.createBlock)($setup["CdxField"], {
        key: 2
      }, {
        label: (0, import_vue60.withCtx)(() => [(0, import_vue60.createTextVNode)(
          (0, import_vue60.toDisplayString)($setup.uls("转交理由：", "轉交理由：")),
          1
          /* TEXT */
        )]),
        default: (0, import_vue60.withCtx)(() => [(0, import_vue60.createVNode)($setup["CdxTextArea"], {
          modelValue: $setup.fwdcsdreason,
          "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => $setup.fwdcsdreason = $event),
          disabled: $setup.submitting
        }, null, 8, ["modelValue", "disabled"])]),
        _: 1
        /* STABLE */
      })) : (0, import_vue60.createCommentVNode)("v-if", true)]),
      _: 1
      /* STABLE */
    })) : ((0, import_vue60.openBlock)(), (0, import_vue60.createBlock)($setup["CdxField"], {
      key: 1,
      "is-fieldset": ""
    }, {
      label: (0, import_vue60.withCtx)(() => [(0, import_vue60.createTextVNode)(
        (0, import_vue60.toDisplayString)($setup.uls("文件存废讨论", "檔案存廢討論")),
        1
        /* TEXT */
      )]),
      default: (0, import_vue60.withCtx)(() => [(0, import_vue60.createVNode)($setup["CdxField"], null, {
        label: (0, import_vue60.withCtx)(() => [(0, import_vue60.createTextVNode)(
          (0, import_vue60.toDisplayString)($setup.uls("提删理由：", "提刪理由：")),
          1
          /* TEXT */
        )]),
        default: (0, import_vue60.withCtx)(() => [(0, import_vue60.createVNode)($setup["CdxTextArea"], {
          modelValue: $setup.xfdreason,
          "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => $setup.xfdreason = $event),
          disabled: $setup.submitting
        }, null, 8, ["modelValue", "disabled"])]),
        _: 1
        /* STABLE */
      })]),
      _: 1
      /* STABLE */
    })), (0, import_vue60.createVNode)(
      $setup["TwStatus"],
      {
        ref: "statusRef"
      },
      null,
      512
      /* NEED_PATCH */
    )]),
    _: 1
    /* STABLE */
  }, 8, ["open", "title", "footer-links", "primary-action"]);
}
//! src/Twinkle/modules/ui/TwXfdDialog.vue
TwXfdDialog_default.render = render20;
TwXfdDialog_default.__file = "src\\Twinkle\\modules\\ui\\TwXfdDialog.vue";
var TwXfdDialog_default2 = TwXfdDialog_default;
//! src/TwinkleDialogs/TwinkleDialogs.ts
/*! TwinkleDialogs - Vue dialog components for Twinkle, loaded on demand by Gadget-Twinkle */
var dialogs = {
  TwArvDialog: TwArvDialog_default2,
  TwBatchDeleteDialog: TwBatchDeleteDialog_default2,
  TwBatchProtectDialog: TwBatchProtectDialog_default2,
  TwBatchUndeleteDialog: TwBatchUndeleteDialog_default2,
  TwBlockDialog: TwBlockDialog_default2,
  TwCloseDialog: TwCloseDialog_default2,
  TwConfigPanel: TwConfigPanel_default2,
  TwCopyvioDialog: TwCopyvioDialog_default2,
  TwImageDialog: TwImageDialog_default2,
  TwProtectDialog: TwProtectDialog_default2,
  TwSpeedyDialog: TwSpeedyDialog_default2,
  TwStubDialog: TwStubDialog_default2,
  TwTagDialog: TwTagDialog_default2,
  TwTalkbackDialog: TwTalkbackDialog_default2,
  TwUnlinkDialog: TwUnlinkDialog_default2,
  TwWarnDialog: TwWarnDialog_default2,
  TwXfdDialog: TwXfdDialog_default2
};
window.TwinkleDialogs = dialogs;

})();

/* </nowiki> */


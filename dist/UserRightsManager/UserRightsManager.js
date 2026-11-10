/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://zh.wikipedia.org/wiki/User:Xiplus/js/userRightsManager.js}
 * @base {@link https://en.wikipedia.org/wiki/User:MusikAnimal/userRightsManager.js}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/UserRightsManager}
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

// dist/UserRightsManager/UserRightsManager.js
//! src/UserRightsManager/UserRightsManager.ts
var import_ext_gadget2 = require("ext.gadget.Util");
//! src/UserRightsManager/modules/getPagePermissions.ts
var getPagePermissions = () => {
  const {
    wgPageName
  } = mw.config.get();
  const pagePermissions = {
    "Qiuwen_talk:权限申请/申请巡查回退权": "patroller",
    "Qiuwen_talk:权限申请/申请巡查豁免权": "autoreviewer",
    "Qiuwen_talk:权限申请/申请确认用户权": "confirmed",
    "Qiuwen_talk:权限申请/申请大量消息发送权": "massmessage-sender",
    "Qiuwen_talk:权限申请/申请活动组织权": "eventsponsor",
    "Qiuwen_talk:权限申请/申请导入权": "transwiki",
    "Qiuwen_talk:权限申请/申请模板编辑权": "templateeditor",
    "Qiuwen_talk:权限申请/申请机器人权限": "bot",
    "Qiuwen_talk:权限申请/申请手机号验证豁免": "rnrsverify-exempt",
    "Qiuwen_talk:权限申请/申请IP封禁豁免权": "ipblock-exempt"
  };
  let permission = null;
  for (const [pageName, pagePermission] of Object.entries(pagePermissions)) {
    if (pageName === wgPageName) {
      permission = pagePermission;
    } else {
      continue;
    }
  }
  return permission;
};
//! src/UserRightsManager/modules/showDialog.ts
var import_vue4 = require("vue");
var import_vue = require("vue");
var import_codex = require("@wikimedia/codex");
var import_vue2 = require("vue");
//! src/UserRightsManager/options.json
var userRightsManagerSummary = "（[[MediaWiki:Gadget-UserRightsManager.js|UserRightsManager]]）";
var version = "2.0";
//! src/UserRightsManager/modules/api.ts
var import_ext_gadget = require("ext.gadget.Util");
var api = (0, import_ext_gadget.initMwApi)(`UserRightsManager/${version}`);
//! src/UserRightsManager/modules/getPermissionNames.ts
var getPermissionNames = (permission) => {
  const permissionNames = {
    patroller: "巡查员",
    autoreviewer: "巡查豁免者",
    confirmed: "确认用户",
    "massmessage-sender": "大量消息发送者",
    eventsponsor: "活动组织者",
    transwiki: "导入者",
    templateeditor: "模板编辑员",
    bot: "机器人",
    "rnrsverify-exempt": "手机号验证豁免",
    "ipblock-exempt": "IP封禁豁免"
  };
  let permissionName = null;
  for (const [right, name] of Object.entries(permissionNames)) {
    if (permission === right) {
      permissionName = name;
    } else {
      continue;
    }
  }
  return permissionName;
};
//! src/UserRightsManager/modules/assignPermission.ts
var assignPermission = ({
  userName,
  permission,
  summary,
  revId,
  expiry
}) => {
  const permaLink = `[[Special:PermaLink/${revId}#User:${userName}|权限申请]]`;
  let fullSummary = `+${getPermissionNames(permission)}；${permaLink}`;
  if (summary !== "") {
    fullSummary += `；${summary}`;
  }
  fullSummary += userRightsManagerSummary;
  const params = {
    action: "userrights",
    user: userName.replace(/ /g, "_"),
    reason: fullSummary,
    add: [permission],
    expiry: expiry === "" ? "infinity" : expiry
  };
  if (permission === "patroller" && expiry === "infinite") {
    params.remove = "autoreviewer";
  }
  return api.postWithToken("userrights", params);
};
//! src/UserRightsManager/modules/getTemplates.ts
var getPermissionTemplate = (permission) => {
  const permissionTemplates = {
    patroller: "Patrol granted",
    autoreviewer: "Autopatrol granted",
    "massmessage-sender": "MMS granted",
    templateeditor: "Template editor granted",
    transwiki: "Transwiki granted"
  };
  let template = null;
  for (const [pagePermission, templateName] of Object.entries(permissionTemplates)) {
    if (permission === pagePermission) {
      template = templateName;
    } else {
      continue;
    }
  }
  return template;
};
//! src/UserRightsManager/modules/issueTemplate.ts
var issueTemplate = ({
  userName,
  permission,
  watch
}) => {
  const permissionTemplate = getPermissionTemplate(permission);
  if (!permissionTemplate) {
    return;
  }
  const permissionName = getPermissionNames(permission);
  const talkPage = `User talk:${userName.replace(/ /g, "_")}`;
  const params = {
    action: "edit",
    format: "json",
    title: talkPage,
    appendtext: "\n\n{{".concat("subst:", permissionTemplate, "}}"),
    summary: `根据共识授予${permissionName}${userRightsManagerSummary}`,
    watchlist: watch ? "watch" : "unwatch"
  };
  return api.postWithEditToken(params);
};
//! src/UserRightsManager/modules/markAsDone.ts
var tagLine = userRightsManagerSummary;
var queryRevisions = async (titles, rvsection) => {
  const params = {
    titles,
    rvsection,
    action: "query",
    format: "json",
    formatversion: "2",
    prop: "revisions",
    curtimestamp: true,
    rvprop: ["content", "timestamp"],
    rvslots: "main"
  };
  return await api.get(params);
};
var markAsDone = ({
  userName,
  index,
  closingRemarks
}) => {
  const {
    wgPageName,
    wgUserName
  } = mw.config.get();
  const sectionNode = document.getElementById(`User:${userName.replace(/"/g, ".22").replace(/ /g, "_")}${index ?? ""}`);
  const sectionNumber = $(sectionNode).siblings(".mw-editsection").find("a:not(.mw-editsection-visualeditor)[href*=edit]").prop("href").match(/section=(\d+)/)[1];
  let basetimestamp;
  let curtimestamp;
  let content;
  let revision;
  return queryRevisions(wgPageName, sectionNumber).then((data) => {
    if (!data["query"] || !data["query"].pages) {
      return $.Deferred().reject("unknown");
    }
    const {
      pages
    } = data["query"];
    const [page] = pages;
    if (!page || page.invalid) {
      return $.Deferred().reject("invalidtitle");
    }
    if (page.missing) {
      return $.Deferred().reject("nocreate-missing");
    }
    [revision] = page.revisions;
    if (revision) {
      ({
        slots: {
          main: {
            content
          }
        },
        timestamp: basetimestamp
      } = revision);
    }
    curtimestamp = data["curtimestamp"];
    return $.Deferred().resolve();
  }).then(() => {
    content = content.trim();
    content = content.replace(/(:\s*{{Status)(\|.*?)?}}/i, "$1|+}}");
    content += closingRemarks;
    const editParams = {
      action: "edit",
      format: "json",
      formatversion: "2",
      title: wgPageName,
      section: sectionNumber,
      text: content,
      summary: `/* User:${userName} */ 完成${tagLine}`,
      basetimestamp,
      starttimestamp: curtimestamp,
      nocreate: true
    };
    if (wgUserName) {
      editParams.assert = "user";
    }
    return api.postWithEditToken(editParams);
  });
};
var App_default = /* @__PURE__ */ (0, import_vue.defineComponent)({
  ...{
    inheritAttrs: false
  },
  __name: "App",
  props: {
    userName: {
      type: String,
      required: true
    },
    permission: {
      type: null,
      required: true
    },
    index: {
      type: String,
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
    const {
      wgULS
    } = window;
    const open = (0, import_vue2.ref)(true);
    const submitting = (0, import_vue2.ref)(false);
    const rightsChangeSummary = (0, import_vue2.ref)("");
    const expiry = (0, import_vue2.ref)("infinite");
    const customExpiry = (0, import_vue2.ref)("");
    const closingRemarks = (0, import_vue2.ref)("{{done}}——~~~~");
    const watchTalkPage = (0, import_vue2.ref)(false);
    const rightLog = (0, import_vue2.ref)(wgULS("获取中", "取得中"));
    const permissionName = getPermissionNames(props.permission) ?? "";
    const permissionTemplate = getPermissionTemplate(props.permission);
    const logUrl = mw.util.getUrl("Special:Log/rights", {
      type: "rights",
      page: `User:${props.userName}`
    });
    const expiryItems = [{
      value: "1 day",
      label: "1天"
    }, {
      value: "1 week",
      label: wgULS("1周", "1週")
    }, {
      value: "1 month",
      label: wgULS("1个月", "1個月")
    }, {
      value: "3 months",
      label: wgULS("3个月", "3個月")
    }, {
      value: "6 months",
      label: wgULS("6个月", "6個月")
    }, {
      value: "1 year",
      label: "1年"
    }, {
      value: "infinite",
      label: wgULS("没有期限", "沒有期限")
    }, {
      value: "other",
      label: wgULS("其他时间", "其他時間")
    }];
    const loadRightLog = () => {
      const params = {
        action: "query",
        format: "json",
        list: "logevents",
        leaction: "rights/rights",
        letitle: `User:${props.userName}`,
        lelimit: 1
      };
      void api.get(params).done((data) => {
        const {
          logevents: logs
        } = data["query"];
        const log = logs[0];
        if (!log) {
          rightLog.value = wgULS("没有任何日志", "沒有任何日誌");
          return;
        }
        const timestamp = new Morebits.date(log.timestamp).calendar();
        const rights = log.params.newgroups.join("、") || wgULS("（无）", "（無）");
        rightLog.value = `${timestamp} ${log.user}${wgULS("将用户组改为", "將使用者群組改為")}${rights}`;
      });
    };
    const close = () => {
      if (!submitting.value) {
        open.value = false;
        props.onClose();
      }
    };
    const submit = async () => {
      if (submitting.value) {
        return;
      }
      submitting.value = true;
      try {
        const doneData = await markAsDone({
          userName: props.userName,
          index: props.index,
          closingRemarks: `
:${closingRemarks.value}`
        });
        await assignPermission({
          userName: props.userName,
          permission: props.permission,
          summary: rightsChangeSummary.value,
          revId: Number.parseInt(doneData["edit"].newrevid, 10),
          expiry: expiry.value === "other" ? customExpiry.value : expiry.value
        });
        if (permissionTemplate) {
          await issueTemplate({
            userName: props.userName,
            permission: props.permission,
            watch: watchTalkPage.value
          });
        }
        setTimeout(() => location.reload(), 1e3);
      } catch (error) {
        submitting.value = false;
        void mw.notify(String(error), {
          tag: "UserRightsManager",
          type: "error"
        });
      }
    };
    (0, import_vue2.onMounted)(loadRightLog);
    const __returned__ = {
      props,
      wgULS,
      open,
      submitting,
      rightsChangeSummary,
      expiry,
      customExpiry,
      closingRemarks,
      watchTalkPage,
      rightLog,
      permissionName,
      permissionTemplate,
      logUrl,
      expiryItems,
      loadRightLog,
      close,
      submit,
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
      get CdxTextInput() {
        return import_codex.CdxTextInput;
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
  class: "user-rights-manager__body"
};
var _hoisted_2 = {
  class: "user-rights-manager__log"
};
var _hoisted_3 = ["href"];
var _hoisted_4 = {
  for: "user-rights-manager-summary"
};
var _hoisted_5 = {
  for: "user-rights-manager-summary"
};
var _hoisted_6 = {
  for: "user-rights-manager-custom-expiry"
};
var _hoisted_7 = {
  for: "user-rights-manager-remarks"
};
var _hoisted_8 = {
  key: 2,
  class: "user-rights-manager__status"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0, import_vue3.openBlock)(), (0, import_vue3.createBlock)($setup["CdxDialog"], {
    open: $setup.open,
    "onUpdate:open": [_cache[5] || (_cache[5] = ($event) => $setup.open = $event), _cache[6] || (_cache[6] = ($event) => $event === false && $setup.close())],
    title: `授予${$setup.permissionName}${$setup.wgULS("给", "給")}${$props.userName}`,
    "use-close-button": true,
    "primary-action": {
      label: $setup.wgULS("授权", "授權"),
      actionType: "progressive",
      disabled: $setup.submitting
    },
    "default-action": {
      label: "取消",
      disabled: $setup.submitting
    },
    onPrimary: $setup.submit,
    onDefault: $setup.close
  }, {
    default: (0, import_vue3.withCtx)(() => [(0, import_vue3.createElementVNode)("div", _hoisted_1, [(0, import_vue3.createElementVNode)("p", _hoisted_2, [(0, import_vue3.createElementVNode)("a", {
      href: $setup.logUrl,
      target: "_blank",
      rel: "noopener noreferrer"
    }, (0, import_vue3.toDisplayString)($setup.wgULS("最近权限日志", "最近權限日誌")), 9, _hoisted_3), (0, import_vue3.createTextVNode)(
      " ：" + (0, import_vue3.toDisplayString)($setup.rightLog),
      1
      /* TEXT */
    )]), (0, import_vue3.createVNode)($setup["CdxField"], null, {
      default: (0, import_vue3.withCtx)(() => [(0, import_vue3.createElementVNode)(
        "label",
        _hoisted_4,
        (0, import_vue3.toDisplayString)($setup.wgULS("授权原因", "授權原因")),
        1
        /* TEXT */
      ), (0, import_vue3.createVNode)($setup["CdxTextInput"], {
        id: "user-rights-manager-summary",
        modelValue: $setup.rightsChangeSummary,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.rightsChangeSummary = $event),
        placeholder: "可留空",
        disabled: $setup.submitting
      }, null, 8, ["modelValue", "disabled"])]),
      _: 1
      /* STABLE */
    }), (0, import_vue3.createVNode)($setup["CdxField"], null, {
      default: (0, import_vue3.withCtx)(() => [(0, import_vue3.createElementVNode)(
        "label",
        _hoisted_5,
        (0, import_vue3.toDisplayString)($setup.wgULS("授权期限", "授權期限")),
        1
        /* TEXT */
      ), (0, import_vue3.createVNode)($setup["CdxSelect"], {
        selected: $setup.expiry,
        "onUpdate:selected": _cache[1] || (_cache[1] = ($event) => $setup.expiry = $event),
        "menu-items": $setup.expiryItems,
        disabled: $setup.submitting
      }, null, 8, ["selected", "disabled"])]),
      _: 1
      /* STABLE */
    }), $setup.expiry === "other" ? ((0, import_vue3.openBlock)(), (0, import_vue3.createBlock)($setup["CdxField"], {
      key: 0
    }, {
      default: (0, import_vue3.withCtx)(() => [(0, import_vue3.createElementVNode)(
        "label",
        _hoisted_6,
        (0, import_vue3.toDisplayString)($setup.wgULS("自定义时间", "自訂時間")),
        1
        /* TEXT */
      ), (0, import_vue3.createVNode)($setup["CdxTextInput"], {
        id: "user-rights-manager-custom-expiry",
        modelValue: $setup.customExpiry,
        "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $setup.customExpiry = $event),
        disabled: $setup.submitting
      }, null, 8, ["modelValue", "disabled"])]),
      _: 1
      /* STABLE */
    })) : (0, import_vue3.createCommentVNode)("v-if", true), (0, import_vue3.createVNode)($setup["CdxField"], null, {
      default: (0, import_vue3.withCtx)(() => [(0, import_vue3.createElementVNode)(
        "label",
        _hoisted_7,
        (0, import_vue3.toDisplayString)($setup.wgULS("关闭请求留言", "關閉請求留言")),
        1
        /* TEXT */
      ), (0, import_vue3.createVNode)($setup["CdxTextInput"], {
        id: "user-rights-manager-remarks",
        modelValue: $setup.closingRemarks,
        "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $setup.closingRemarks = $event),
        disabled: $setup.submitting
      }, null, 8, ["modelValue", "disabled"])]),
      _: 1
      /* STABLE */
    }), $setup.permissionTemplate ? ((0, import_vue3.openBlock)(), (0, import_vue3.createBlock)($setup["CdxField"], {
      key: 1
    }, {
      default: (0, import_vue3.withCtx)(() => [(0, import_vue3.createVNode)($setup["CdxCheckbox"], {
        modelValue: $setup.watchTalkPage,
        "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $setup.watchTalkPage = $event),
        disabled: $setup.submitting
      }, {
        default: (0, import_vue3.withCtx)(() => [(0, import_vue3.createTextVNode)(
          (0, import_vue3.toDisplayString)($setup.wgULS("监视用户讨论页", "監視使用者討論頁")),
          1
          /* TEXT */
        )]),
        _: 1
        /* STABLE */
      }, 8, ["modelValue", "disabled"])]),
      _: 1
      /* STABLE */
    })) : (0, import_vue3.createCommentVNode)("v-if", true), $setup.submitting ? ((0, import_vue3.openBlock)(), (0, import_vue3.createElementBlock)(
      "p",
      _hoisted_8,
      (0, import_vue3.toDisplayString)($setup.wgULS("处理中……", "處理中……")),
      1
      /* TEXT */
    )) : (0, import_vue3.createCommentVNode)("v-if", true)])]),
    _: 1
    /* STABLE */
  }, 8, ["open", "title", "primary-action", "default-action"]);
}
//! src/UserRightsManager/App.vue
App_default.render = render;
App_default.__file = "src\\UserRightsManager\\App.vue";
App_default.__scopeId = "data-v-e1cb351c";
var App_default2 = App_default;
//! src/UserRightsManager/modules/showDialog.ts
var app;
var root;
var showDialog = function showDialog2({
  $body,
  userName,
  permission,
  index
}) {
  var _root;
  if (app) {
    app.unmount();
    app = void 0;
  }
  (_root = root) === null || _root === void 0 || _root.remove();
  root = document.createElement("div");
  $body.append(root);
  app = (0, import_vue4.createApp)(App_default2, {
    userName,
    permission,
    index,
    onClose: () => {
      var _app, _root2;
      (_app = app) === null || _app === void 0 || _app.unmount();
      app = void 0;
      (_root2 = root) === null || _root2 === void 0 || _root2.remove();
      root = void 0;
    }
  });
  app.mount(root);
};
//! src/UserRightsManager/UserRightsManager.ts
void (0, import_ext_gadget2.getBody)().then(($body) => {
  const permission = getPagePermissions();
  if (!permission) {
    return;
  }
  $body.find(".perm-assign-permissions a").on("click", function(event) {
    event.preventDefault();
    const $element = $(this);
    const userName = mw.util.getParamValue("user", $element.attr("href"));
    if (!userName) {
      return;
    }
    const sectionId = $element.parents("dl").prev("h4").find(".mw-headline").attr("id") ?? "";
    const index = sectionId === `User:${userName}` || sectionId === `User:${userName}`.replace(/"/g, ".22").replace(/ /g, "_") ? "" : sectionId.replace("User:", "").replace(userName, "").replace(userName.replace(/"/g, ".22").replace(/ /g, "_"), "");
    showDialog({
      $body,
      userName,
      permission,
      index
    });
  });
});

})();

/* </nowiki> */


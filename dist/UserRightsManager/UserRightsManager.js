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
  for (var _i = 0, _Object$entries = Object.entries(pagePermissions); _i < _Object$entries.length; _i++) {
    const [pageName, pagePermission] = _Object$entries[_i];
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
var api = (0, import_ext_gadget.initMwApi)("UserRightsManager/".concat(version));
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
  for (var _i2 = 0, _Object$entries2 = Object.entries(permissionNames); _i2 < _Object$entries2.length; _i2++) {
    const [right, name] = _Object$entries2[_i2];
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
  const permaLink = "[[Special:PermaLink/".concat(revId, "#User:").concat(userName, "|权限申请]]");
  let fullSummary = "+".concat(getPermissionNames(permission), "；").concat(permaLink);
  if (summary !== "") {
    fullSummary += "；".concat(summary);
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
  for (var _i3 = 0, _Object$entries3 = Object.entries(permissionTemplates); _i3 < _Object$entries3.length; _i3++) {
    const [pagePermission, templateName] = _Object$entries3[_i3];
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
  const talkPage = "User talk:".concat(userName.replace(/ /g, "_"));
  const params = {
    action: "edit",
    format: "json",
    title: talkPage,
    appendtext: "\n\n{{".concat("subst:", permissionTemplate, "}}"),
    summary: "根据共识授予".concat(permissionName).concat(userRightsManagerSummary),
    watchlist: watch ? "watch" : "unwatch"
  };
  return api.postWithEditToken(params);
};
//! src/UserRightsManager/modules/markAsDone.ts
var tagLine = userRightsManagerSummary;
var queryRevisions = /* @__PURE__ */ (function() {
  var _ref = _asyncToGenerator(function* (titles, rvsection) {
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
    return yield api.get(params);
  });
  return function queryRevisions2(_x, _x2) {
    return _ref.apply(this, arguments);
  };
})();
var markAsDone = ({
  userName,
  index,
  closingRemarks
}) => {
  const {
    wgPageName,
    wgUserName
  } = mw.config.get();
  const sectionNode = document.getElementById("User:".concat(userName.replace(/"/g, ".22").replace(/ /g, "_")).concat(index !== null && index !== void 0 ? index : ""));
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
      summary: "/* User:".concat(userName, " */ 完成").concat(tagLine),
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
    var _getPermissionNames;
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
    const permissionName = (_getPermissionNames = getPermissionNames(props.permission)) !== null && _getPermissionNames !== void 0 ? _getPermissionNames : "";
    const permissionTemplate = getPermissionTemplate(props.permission);
    const logUrl = mw.util.getUrl("Special:Log/rights", {
      type: "rights",
      page: "User:".concat(props.userName)
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
        letitle: "User:".concat(props.userName),
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
        rightLog.value = "".concat(timestamp, " ").concat(log.user).concat(wgULS("将用户组改为", "將使用者群組改為")).concat(rights);
      });
    };
    const close = () => {
      if (!submitting.value) {
        open.value = false;
        props.onClose();
      }
    };
    const submit = /* @__PURE__ */ (function() {
      var _ref2 = _asyncToGenerator(function* () {
        if (submitting.value) {
          return;
        }
        submitting.value = true;
        try {
          const doneData = yield markAsDone({
            userName: props.userName,
            index: props.index,
            closingRemarks: "\n:".concat(closingRemarks.value)
          });
          yield assignPermission({
            userName: props.userName,
            permission: props.permission,
            summary: rightsChangeSummary.value,
            revId: Number.parseInt(doneData["edit"].newrevid, 10),
            expiry: expiry.value === "other" ? customExpiry.value : expiry.value
          });
          if (permissionTemplate) {
            yield issueTemplate({
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
      });
      return function submit2() {
        return _ref2.apply(this, arguments);
      };
    })();
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
    title: "授予".concat($setup.permissionName).concat($setup.wgULS("给", "給")).concat($props.userName),
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
    var _$element$parents$pre;
    event.preventDefault();
    const $element = $(this);
    const userName = mw.util.getParamValue("user", $element.attr("href"));
    if (!userName) {
      return;
    }
    const sectionId = (_$element$parents$pre = $element.parents("dl").prev("h4").find(".mw-headline").attr("id")) !== null && _$element$parents$pre !== void 0 ? _$element$parents$pre : "";
    const index = sectionId === "User:".concat(userName) || sectionId === "User:".concat(userName).replace(/"/g, ".22").replace(/ /g, "_") ? "" : sectionId.replace("User:", "").replace(userName, "").replace(userName.replace(/"/g, ".22").replace(/ /g, "_"), "");
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1VzZXJSaWdodHNNYW5hZ2VyL1VzZXJSaWdodHNNYW5hZ2VyLnRzIiwgInNyYy9Vc2VyUmlnaHRzTWFuYWdlci9tb2R1bGVzL2dldFBhZ2VQZXJtaXNzaW9ucy50cyIsICJzcmMvVXNlclJpZ2h0c01hbmFnZXIvbW9kdWxlcy9zaG93RGlhbG9nLnRzIiwgImRpc3QvVXNlclJpZ2h0c01hbmFnZXIvc3JjL1VzZXJSaWdodHNNYW5hZ2VyL0FwcC52dWUiLCAic3JjL1VzZXJSaWdodHNNYW5hZ2VyL29wdGlvbnMuanNvbiIsICJzcmMvVXNlclJpZ2h0c01hbmFnZXIvbW9kdWxlcy9hcGkudHMiLCAic3JjL1VzZXJSaWdodHNNYW5hZ2VyL21vZHVsZXMvZ2V0UGVybWlzc2lvbk5hbWVzLnRzIiwgInNyYy9Vc2VyUmlnaHRzTWFuYWdlci9tb2R1bGVzL2Fzc2lnblBlcm1pc3Npb24udHMiLCAic3JjL1VzZXJSaWdodHNNYW5hZ2VyL21vZHVsZXMvZ2V0VGVtcGxhdGVzLnRzIiwgInNyYy9Vc2VyUmlnaHRzTWFuYWdlci9tb2R1bGVzL2lzc3VlVGVtcGxhdGUudHMiLCAic3JjL1VzZXJSaWdodHNNYW5hZ2VyL21vZHVsZXMvbWFya0FzRG9uZS50cyIsICJzZmMtdGVtcGxhdGU6RDpcXEdpdFJlcG9zaXRvcnlcXFFpdXdlbkdhZGdldHNcXHNyY1xcVXNlclJpZ2h0c01hbmFnZXJcXEFwcC52dWU/dHlwZT10ZW1wbGF0ZSIsICJzcmMvVXNlclJpZ2h0c01hbmFnZXIvQXBwLnZ1ZSJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHtnZXRCb2R5fSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuaW1wb3J0IHtnZXRQYWdlUGVybWlzc2lvbnN9IGZyb20gJy4vbW9kdWxlcy9nZXRQYWdlUGVybWlzc2lvbnMnO1xuaW1wb3J0IHtzaG93RGlhbG9nfSBmcm9tICcuL21vZHVsZXMvc2hvd0RpYWxvZyc7XG5cbnZvaWQgZ2V0Qm9keSgpLnRoZW4oKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQgPT4ge1xuXHRjb25zdCBwZXJtaXNzaW9uID0gZ2V0UGFnZVBlcm1pc3Npb25zKCk7XG5cdGlmICghcGVybWlzc2lvbikge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdCRib2R5LmZpbmQoJy5wZXJtLWFzc2lnbi1wZXJtaXNzaW9ucyBhJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuXHRcdGNvbnN0ICRlbGVtZW50OiBKUXVlcnk8SFRNTEFuY2hvckVsZW1lbnQ+ID0gJCh0aGlzIGFzIEhUTUxBbmNob3JFbGVtZW50KTtcblx0XHRjb25zdCB1c2VyTmFtZSA9IG13LnV0aWwuZ2V0UGFyYW1WYWx1ZSgndXNlcicsICRlbGVtZW50LmF0dHIoJ2hyZWYnKSk7XG5cdFx0aWYgKCF1c2VyTmFtZSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGNvbnN0IHNlY3Rpb25JZDogc3RyaW5nID0gJGVsZW1lbnQucGFyZW50cygnZGwnKS5wcmV2KCdoNCcpLmZpbmQoJy5tdy1oZWFkbGluZScpLmF0dHIoJ2lkJykgPz8gJyc7XG5cdFx0Y29uc3QgaW5kZXg6IHN0cmluZyA9XG5cdFx0XHRzZWN0aW9uSWQgPT09IGBVc2VyOiR7dXNlck5hbWV9YCB8fCBzZWN0aW9uSWQgPT09IGBVc2VyOiR7dXNlck5hbWV9YC5yZXBsYWNlKC9cIi9nLCAnLjIyJykucmVwbGFjZSgvIC9nLCAnXycpXG5cdFx0XHRcdD8gJydcblx0XHRcdFx0OiBzZWN0aW9uSWRcblx0XHRcdFx0XHRcdC5yZXBsYWNlKCdVc2VyOicsICcnKVxuXHRcdFx0XHRcdFx0LnJlcGxhY2UodXNlck5hbWUsICcnKVxuXHRcdFx0XHRcdFx0LnJlcGxhY2UodXNlck5hbWUucmVwbGFjZSgvXCIvZywgJy4yMicpLnJlcGxhY2UoLyAvZywgJ18nKSwgJycpO1xuXG5cdFx0c2hvd0RpYWxvZyh7JGJvZHksIHVzZXJOYW1lLCBwZXJtaXNzaW9uLCBpbmRleH0pO1xuXHR9KTtcbn0pO1xuIiwgImltcG9ydCB0eXBlIHtVc2VyUmlnaHRzfSBmcm9tICd+L01hcmtSaWdodHMvbW9kdWxlcy90eXBlcyc7XG5cbmNvbnN0IGdldFBhZ2VQZXJtaXNzaW9ucyA9ICgpOiBVc2VyUmlnaHRzIHwgbnVsbCA9PiB7XG5cdGNvbnN0IHt3Z1BhZ2VOYW1lfSA9IG13LmNvbmZpZy5nZXQoKTtcblxuXHRjb25zdCBwYWdlUGVybWlzc2lvbnMgPSB7XG5cdFx0J1FpdXdlbl90YWxrOuadg+mZkOeUs+ivty/nlLPor7flt6Hmn6Xlm57pgIDmnYMnOiAncGF0cm9sbGVyJyxcblx0XHQnUWl1d2VuX3RhbGs65p2D6ZmQ55Sz6K+3L+eUs+ivt+W3oeafpeixgeWFjeadgyc6ICdhdXRvcmV2aWV3ZXInLFxuXHRcdCdRaXV3ZW5fdGFsazrmnYPpmZDnlLPor7cv55Sz6K+356Gu6K6k55So5oi35p2DJzogJ2NvbmZpcm1lZCcsXG5cdFx0J1FpdXdlbl90YWxrOuadg+mZkOeUs+ivty/nlLPor7flpKfph4/mtojmga/lj5HpgIHmnYMnOiAnbWFzc21lc3NhZ2Utc2VuZGVyJyxcblx0XHQnUWl1d2VuX3RhbGs65p2D6ZmQ55Sz6K+3L+eUs+ivt+a0u+WKqOe7hOe7h+adgyc6ICdldmVudHNwb25zb3InLFxuXHRcdCdRaXV3ZW5fdGFsazrmnYPpmZDnlLPor7cv55Sz6K+35a+85YWl5p2DJzogJ3RyYW5zd2lraScsXG5cdFx0J1FpdXdlbl90YWxrOuadg+mZkOeUs+ivty/nlLPor7fmqKHmnb/nvJbovpHmnYMnOiAndGVtcGxhdGVlZGl0b3InLFxuXHRcdCdRaXV3ZW5fdGFsazrmnYPpmZDnlLPor7cv55Sz6K+35py65Zmo5Lq65p2D6ZmQJzogJ2JvdCcsXG5cdFx0J1FpdXdlbl90YWxrOuadg+mZkOeUs+ivty/nlLPor7fmiYvmnLrlj7fpqozor4HosYHlhY0nOiAncm5yc3ZlcmlmeS1leGVtcHQnLFxuXHRcdCdRaXV3ZW5fdGFsazrmnYPpmZDnlLPor7cv55Sz6K+3SVDlsIHnpoHosYHlhY3mnYMnOiAnaXBibG9jay1leGVtcHQnLFxuXHR9IGFzIGNvbnN0IHNhdGlzZmllcyBQYXJ0aWFsPFJlY29yZDxzdHJpbmcsIFVzZXJSaWdodHM+PjtcblxuXHRsZXQgcGVybWlzc2lvbjogVXNlclJpZ2h0cyB8IG51bGwgPSBudWxsO1xuXHRmb3IgKGNvbnN0IFtwYWdlTmFtZSwgcGFnZVBlcm1pc3Npb25dIG9mIE9iamVjdC5lbnRyaWVzKHBhZ2VQZXJtaXNzaW9ucykpIHtcblx0XHRpZiAocGFnZU5hbWUgPT09IHdnUGFnZU5hbWUpIHtcblx0XHRcdHBlcm1pc3Npb24gPSBwYWdlUGVybWlzc2lvbjtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHBlcm1pc3Npb247XG59O1xuXG5leHBvcnQge2dldFBhZ2VQZXJtaXNzaW9uc307XG4iLCAiaW1wb3J0IHt0eXBlIEFwcCBhcyBWdWVBcHAsIGNyZWF0ZUFwcH0gZnJvbSAndnVlJztcbmltcG9ydCBBcHAgZnJvbSAnLi4vQXBwLnZ1ZSc7XG5pbXBvcnQge1VzZXJSaWdodHN9IGZyb20gJ34vTWFya1JpZ2h0cy9tb2R1bGVzL3R5cGVzJztcblxubGV0IGFwcDogVnVlQXBwPEVsZW1lbnQ+IHwgdW5kZWZpbmVkO1xubGV0IHJvb3Q6IEhUTUxEaXZFbGVtZW50IHwgdW5kZWZpbmVkO1xuXG5jb25zdCBzaG93RGlhbG9nID0gZnVuY3Rpb24gc2hvd0RpYWxvZyh7XG5cdCRib2R5LFxuXHR1c2VyTmFtZSxcblx0cGVybWlzc2lvbixcblx0aW5kZXgsXG59OiB7XG5cdCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pjtcblx0dXNlck5hbWU6IHN0cmluZztcblx0cGVybWlzc2lvbjogVXNlclJpZ2h0cztcblx0aW5kZXg6IHN0cmluZztcbn0pIHtcblx0aWYgKGFwcCkge1xuXHRcdGFwcC51bm1vdW50KCk7XG5cdFx0YXBwID0gdW5kZWZpbmVkO1xuXHR9XG5cdHJvb3Q/LnJlbW92ZSgpO1xuXHRyb290ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdCRib2R5LmFwcGVuZChyb290KTtcblx0YXBwID0gY3JlYXRlQXBwKEFwcCwge1xuXHRcdHVzZXJOYW1lLFxuXHRcdHBlcm1pc3Npb24sXG5cdFx0aW5kZXgsXG5cdFx0b25DbG9zZTogKCkgPT4ge1xuXHRcdFx0YXBwPy51bm1vdW50KCk7XG5cdFx0XHRhcHAgPSB1bmRlZmluZWQ7XG5cdFx0XHRyb290Py5yZW1vdmUoKTtcblx0XHRcdHJvb3QgPSB1bmRlZmluZWQ7XG5cdFx0fSxcblx0fSk7XG5cdGFwcC5tb3VudChyb290KTtcbn07XG5cbmV4cG9ydCB7c2hvd0RpYWxvZ307XG4iLCAiPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cbmltcG9ydCB7Q2R4Q2hlY2tib3gsIENkeERpYWxvZywgQ2R4RmllbGQsIENkeFNlbGVjdCwgQ2R4VGV4dElucHV0LCB0eXBlIE1lbnVJdGVtRGF0YX0gZnJvbSAnQHdpa2ltZWRpYS9jb2RleCc7XG5pbXBvcnQge29uTW91bnRlZCwgcmVmfSBmcm9tICd2dWUnO1xuaW1wb3J0IHtVc2VyUmlnaHRzfSBmcm9tICd+L01hcmtSaWdodHMvbW9kdWxlcy90eXBlcyc7XG5pbXBvcnQge2FwaX0gZnJvbSAnLi9tb2R1bGVzL2FwaSc7XG5pbXBvcnQge2Fzc2lnblBlcm1pc3Npb259IGZyb20gJy4vbW9kdWxlcy9hc3NpZ25QZXJtaXNzaW9uJztcbmltcG9ydCB7Z2V0UGVybWlzc2lvbk5hbWVzfSBmcm9tICcuL21vZHVsZXMvZ2V0UGVybWlzc2lvbk5hbWVzJztcbmltcG9ydCB7Z2V0UGVybWlzc2lvblRlbXBsYXRlfSBmcm9tICcuL21vZHVsZXMvZ2V0VGVtcGxhdGVzJztcbmltcG9ydCB7aXNzdWVUZW1wbGF0ZX0gZnJvbSAnLi9tb2R1bGVzL2lzc3VlVGVtcGxhdGUnO1xuaW1wb3J0IHttYXJrQXNEb25lfSBmcm9tICcuL21vZHVsZXMvbWFya0FzRG9uZSc7XG5kZWZpbmVPcHRpb25zKHtpbmhlcml0QXR0cnM6IGZhbHNlfSk7XG5cbmNvbnN0IHByb3BzID0gZGVmaW5lUHJvcHM8e1xuXHR1c2VyTmFtZTogc3RyaW5nO1xuXHRwZXJtaXNzaW9uOiBVc2VyUmlnaHRzO1xuXHRpbmRleDogc3RyaW5nO1xuXHRvbkNsb3NlOiAoKSA9PiB2b2lkO1xufT4oKTtcblxuY29uc3Qge3dnVUxTfSA9IHdpbmRvdztcbmNvbnN0IG9wZW4gPSByZWYodHJ1ZSk7XG5jb25zdCBzdWJtaXR0aW5nID0gcmVmKGZhbHNlKTtcbmNvbnN0IHJpZ2h0c0NoYW5nZVN1bW1hcnkgPSByZWYoJycpO1xuY29uc3QgZXhwaXJ5ID0gcmVmKCdpbmZpbml0ZScpO1xuY29uc3QgY3VzdG9tRXhwaXJ5ID0gcmVmKCcnKTtcbmNvbnN0IGNsb3NpbmdSZW1hcmtzID0gcmVmKCd7e2RvbmV9feKAlOKAlH5+fn4nKTtcbmNvbnN0IHdhdGNoVGFsa1BhZ2UgPSByZWYoZmFsc2UpO1xuY29uc3QgcmlnaHRMb2cgPSByZWYod2dVTFMoJ+iOt+WPluS4rScsICflj5blvpfkuK0nKSk7XG5cbmNvbnN0IHBlcm1pc3Npb25OYW1lID0gZ2V0UGVybWlzc2lvbk5hbWVzKHByb3BzLnBlcm1pc3Npb24pID8/ICcnO1xuY29uc3QgcGVybWlzc2lvblRlbXBsYXRlID0gZ2V0UGVybWlzc2lvblRlbXBsYXRlKHByb3BzLnBlcm1pc3Npb24pO1xuY29uc3QgbG9nVXJsID0gbXcudXRpbC5nZXRVcmwoJ1NwZWNpYWw6TG9nL3JpZ2h0cycsIHt0eXBlOiAncmlnaHRzJywgcGFnZTogYFVzZXI6JHtwcm9wcy51c2VyTmFtZX1gfSk7XG5jb25zdCBleHBpcnlJdGVtczogTWVudUl0ZW1EYXRhW10gPSBbXG5cdHt2YWx1ZTogJzEgZGF5JywgbGFiZWw6ICcx5aSpJ30sXG5cdHt2YWx1ZTogJzEgd2VlaycsIGxhYmVsOiB3Z1VMUygnMeWRqCcsICcx6YCxJyl9LFxuXHR7dmFsdWU6ICcxIG1vbnRoJywgbGFiZWw6IHdnVUxTKCcx5Liq5pyIJywgJzHlgIvmnIgnKX0sXG5cdHt2YWx1ZTogJzMgbW9udGhzJywgbGFiZWw6IHdnVUxTKCcz5Liq5pyIJywgJzPlgIvmnIgnKX0sXG5cdHt2YWx1ZTogJzYgbW9udGhzJywgbGFiZWw6IHdnVUxTKCc25Liq5pyIJywgJzblgIvmnIgnKX0sXG5cdHt2YWx1ZTogJzEgeWVhcicsIGxhYmVsOiAnMeW5tCd9LFxuXHR7dmFsdWU6ICdpbmZpbml0ZScsIGxhYmVsOiB3Z1VMUygn5rKh5pyJ5pyf6ZmQJywgJ+aykuacieacn+mZkCcpfSxcblx0e3ZhbHVlOiAnb3RoZXInLCBsYWJlbDogd2dVTFMoJ+WFtuS7luaXtumXtCcsICflhbbku5bmmYLplpMnKX0sXG5dO1xuXG5jb25zdCBsb2FkUmlnaHRMb2cgPSAoKTogdm9pZCA9PiB7XG5cdGNvbnN0IHBhcmFtczogQXBpUXVlcnlMb2dFdmVudHNQYXJhbXMgPSB7XG5cdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdGxpc3Q6ICdsb2dldmVudHMnLFxuXHRcdGxlYWN0aW9uOiAncmlnaHRzL3JpZ2h0cycsXG5cdFx0bGV0aXRsZTogYFVzZXI6JHtwcm9wcy51c2VyTmFtZX1gLFxuXHRcdGxlbGltaXQ6IDEsXG5cdH07XG5cblx0dm9pZCBhcGkuZ2V0KHBhcmFtcykuZG9uZSgoZGF0YSkgPT4ge1xuXHRcdGNvbnN0IHtsb2dldmVudHM6IGxvZ3N9ID0gZGF0YVsncXVlcnknXSBhcyB7XG5cdFx0XHRsb2dldmVudHM6IHtwYXJhbXM6IHtuZXdncm91cHM6IHN0cmluZ1tdfTsgdXNlcjogc3RyaW5nOyB0aW1lc3RhbXA6IHN0cmluZ31bXTtcblx0XHR9O1xuXHRcdGNvbnN0IGxvZyA9IGxvZ3NbMF07XG5cdFx0aWYgKCFsb2cpIHtcblx0XHRcdHJpZ2h0TG9nLnZhbHVlID0gd2dVTFMoJ+ayoeacieS7u+S9leaXpeW/lycsICfmspLmnInku7vkvZXml6XoqownKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHQvLyBAdHMtZXhwZWN0LWVycm9yIE1vcmViaXRzIGlzIHByb3ZpZGVkIGJ5IHRoZSBnYWRnZXQgcnVudGltZS5cblx0XHRjb25zdCB0aW1lc3RhbXAgPSBuZXcgTW9yZWJpdHMuZGF0ZShsb2cudGltZXN0YW1wKS5jYWxlbmRhcigpIGFzIHN0cmluZztcblx0XHRjb25zdCByaWdodHMgPSBsb2cucGFyYW1zLm5ld2dyb3Vwcy5qb2luKCfjgIEnKSB8fCB3Z1VMUygn77yI5peg77yJJywgJ++8iOeEoe+8iScpO1xuXHRcdHJpZ2h0TG9nLnZhbHVlID0gYCR7dGltZXN0YW1wfSAke2xvZy51c2VyfSR7d2dVTFMoJ+WwhueUqOaIt+e7hOaUueS4uicsICflsIfkvb/nlKjogIXnvqTntYTmlLnngronKX0ke3JpZ2h0c31gO1xuXHR9KTtcbn07XG5cbmNvbnN0IGNsb3NlID0gKCk6IHZvaWQgPT4ge1xuXHRpZiAoIXN1Ym1pdHRpbmcudmFsdWUpIHtcblx0XHRvcGVuLnZhbHVlID0gZmFsc2U7XG5cdFx0cHJvcHMub25DbG9zZSgpO1xuXHR9XG59O1xuXG5jb25zdCBzdWJtaXQgPSBhc3luYyAoKTogUHJvbWlzZTx2b2lkPiA9PiB7XG5cdGlmIChzdWJtaXR0aW5nLnZhbHVlKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0c3VibWl0dGluZy52YWx1ZSA9IHRydWU7XG5cdHRyeSB7XG5cdFx0Y29uc3QgZG9uZURhdGEgPSBhd2FpdCBtYXJrQXNEb25lKHtcblx0XHRcdHVzZXJOYW1lOiBwcm9wcy51c2VyTmFtZSxcblx0XHRcdGluZGV4OiBwcm9wcy5pbmRleCxcblx0XHRcdGNsb3NpbmdSZW1hcmtzOiBgXFxuOiR7Y2xvc2luZ1JlbWFya3MudmFsdWV9YCxcblx0XHR9KTtcblx0XHRhd2FpdCBhc3NpZ25QZXJtaXNzaW9uKHtcblx0XHRcdHVzZXJOYW1lOiBwcm9wcy51c2VyTmFtZSxcblx0XHRcdHBlcm1pc3Npb246IHByb3BzLnBlcm1pc3Npb24sXG5cdFx0XHRzdW1tYXJ5OiByaWdodHNDaGFuZ2VTdW1tYXJ5LnZhbHVlLFxuXHRcdFx0cmV2SWQ6IE51bWJlci5wYXJzZUludChkb25lRGF0YVsnZWRpdCddLm5ld3JldmlkIGFzIHN0cmluZywgMTApLFxuXHRcdFx0ZXhwaXJ5OiBleHBpcnkudmFsdWUgPT09ICdvdGhlcicgPyBjdXN0b21FeHBpcnkudmFsdWUgOiBleHBpcnkudmFsdWUsXG5cdFx0fSk7XG5cdFx0aWYgKHBlcm1pc3Npb25UZW1wbGF0ZSkge1xuXHRcdFx0YXdhaXQgaXNzdWVUZW1wbGF0ZSh7dXNlck5hbWU6IHByb3BzLnVzZXJOYW1lLCBwZXJtaXNzaW9uOiBwcm9wcy5wZXJtaXNzaW9uLCB3YXRjaDogd2F0Y2hUYWxrUGFnZS52YWx1ZX0pO1xuXHRcdH1cblx0XHRzZXRUaW1lb3V0KCgpID0+IGxvY2F0aW9uLnJlbG9hZCgpLCAxMDAwKTtcblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRzdWJtaXR0aW5nLnZhbHVlID0gZmFsc2U7XG5cdFx0dm9pZCBtdy5ub3RpZnkoU3RyaW5nKGVycm9yKSwge3RhZzogJ1VzZXJSaWdodHNNYW5hZ2VyJywgdHlwZTogJ2Vycm9yJ30pO1xuXHR9XG59O1xuXG5vbk1vdW50ZWQobG9hZFJpZ2h0TG9nKTtcbjwvc2NyaXB0PlxuXG48dGVtcGxhdGU+XG5cdDxjZHgtZGlhbG9nXG5cdFx0di1tb2RlbDpvcGVuPVwib3BlblwiXG5cdFx0OnRpdGxlPVwiYOaOiOS6iCR7cGVybWlzc2lvbk5hbWV9JHt3Z1VMUygn57uZJywgJ+e1picpfSR7dXNlck5hbWV9YFwiXG5cdFx0OnVzZS1jbG9zZS1idXR0b249XCJ0cnVlXCJcblx0XHQ6cHJpbWFyeS1hY3Rpb249XCJ7bGFiZWw6IHdnVUxTKCfmjojmnYMnLCAn5o6I5qyKJyksIGFjdGlvblR5cGU6ICdwcm9ncmVzc2l2ZScsIGRpc2FibGVkOiBzdWJtaXR0aW5nfVwiXG5cdFx0OmRlZmF1bHQtYWN0aW9uPVwie2xhYmVsOiAn5Y+W5raIJywgZGlzYWJsZWQ6IHN1Ym1pdHRpbmd9XCJcblx0XHRAcHJpbWFyeT1cInN1Ym1pdFwiXG5cdFx0QGRlZmF1bHQ9XCJjbG9zZVwiXG5cdFx0QHVwZGF0ZTpvcGVuPVwiJGV2ZW50ID09PSBmYWxzZSAmJiBjbG9zZSgpXCJcblx0PlxuXHRcdDxkaXYgY2xhc3M9XCJ1c2VyLXJpZ2h0cy1tYW5hZ2VyX19ib2R5XCI+XG5cdFx0XHQ8cCBjbGFzcz1cInVzZXItcmlnaHRzLW1hbmFnZXJfX2xvZ1wiPlxuXHRcdFx0XHQ8YSA6aHJlZj1cImxvZ1VybFwiIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIj5cblx0XHRcdFx0XHR7eyB3Z1VMUygn5pyA6L+R5p2D6ZmQ5pel5b+XJywgJ+acgOi/keasiumZkOaXpeiqjCcpIH19XG5cdFx0XHRcdDwvYT5cblx0XHRcdFx077yae3sgcmlnaHRMb2cgfX1cblx0XHRcdDwvcD5cblx0XHRcdDxjZHgtZmllbGQ+XG5cdFx0XHRcdDxsYWJlbCBmb3I9XCJ1c2VyLXJpZ2h0cy1tYW5hZ2VyLXN1bW1hcnlcIj57eyB3Z1VMUygn5o6I5p2D5Y6f5ZugJywgJ+aOiOasiuWOn+WboCcpIH19PC9sYWJlbD5cblx0XHRcdFx0PGNkeC10ZXh0LWlucHV0XG5cdFx0XHRcdFx0aWQ9XCJ1c2VyLXJpZ2h0cy1tYW5hZ2VyLXN1bW1hcnlcIlxuXHRcdFx0XHRcdHYtbW9kZWw9XCJyaWdodHNDaGFuZ2VTdW1tYXJ5XCJcblx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cIuWPr+eVmeepulwiXG5cdFx0XHRcdFx0OmRpc2FibGVkPVwic3VibWl0dGluZ1wiXG5cdFx0XHRcdC8+XG5cdFx0XHQ8L2NkeC1maWVsZD5cblx0XHRcdDxjZHgtZmllbGQ+XG5cdFx0XHRcdDxsYWJlbCBmb3I9XCJ1c2VyLXJpZ2h0cy1tYW5hZ2VyLXN1bW1hcnlcIj57eyB3Z1VMUygn5o6I5p2D5pyf6ZmQJywgJ+aOiOasiuacn+mZkCcpIH19PC9sYWJlbD5cblx0XHRcdFx0PGNkeC1zZWxlY3Qgdi1tb2RlbDpzZWxlY3RlZD1cImV4cGlyeVwiIDptZW51LWl0ZW1zPVwiZXhwaXJ5SXRlbXNcIiA6ZGlzYWJsZWQ9XCJzdWJtaXR0aW5nXCIgLz5cblx0XHRcdDwvY2R4LWZpZWxkPlxuXHRcdFx0PGNkeC1maWVsZCB2LWlmPVwiZXhwaXJ5ID09PSAnb3RoZXInXCI+XG5cdFx0XHRcdDxsYWJlbCBmb3I9XCJ1c2VyLXJpZ2h0cy1tYW5hZ2VyLWN1c3RvbS1leHBpcnlcIj57eyB3Z1VMUygn6Ieq5a6a5LmJ5pe26Ze0JywgJ+iHquioguaZgumWkycpIH19PC9sYWJlbD5cblx0XHRcdFx0PGNkeC10ZXh0LWlucHV0IGlkPVwidXNlci1yaWdodHMtbWFuYWdlci1jdXN0b20tZXhwaXJ5XCIgdi1tb2RlbD1cImN1c3RvbUV4cGlyeVwiIDpkaXNhYmxlZD1cInN1Ym1pdHRpbmdcIiAvPlxuXHRcdFx0PC9jZHgtZmllbGQ+XG5cdFx0XHQ8Y2R4LWZpZWxkPlxuXHRcdFx0XHQ8bGFiZWwgZm9yPVwidXNlci1yaWdodHMtbWFuYWdlci1yZW1hcmtzXCI+e3sgd2dVTFMoJ+WFs+mXreivt+axgueVmeiogCcsICfpl5zplonoq4vmsYLnlZnoqIAnKSB9fTwvbGFiZWw+XG5cdFx0XHRcdDxjZHgtdGV4dC1pbnB1dCBpZD1cInVzZXItcmlnaHRzLW1hbmFnZXItcmVtYXJrc1wiIHYtbW9kZWw9XCJjbG9zaW5nUmVtYXJrc1wiIDpkaXNhYmxlZD1cInN1Ym1pdHRpbmdcIiAvPlxuXHRcdFx0PC9jZHgtZmllbGQ+XG5cdFx0XHQ8Y2R4LWZpZWxkIHYtaWY9XCJwZXJtaXNzaW9uVGVtcGxhdGVcIj5cblx0XHRcdFx0PGNkeC1jaGVja2JveCB2LW1vZGVsPVwid2F0Y2hUYWxrUGFnZVwiIDpkaXNhYmxlZD1cInN1Ym1pdHRpbmdcIj5cblx0XHRcdFx0XHR7eyB3Z1VMUygn55uR6KeG55So5oi36K6o6K666aG1JywgJ+ebo+imluS9v+eUqOiAheiojuirlumggScpIH19XG5cdFx0XHRcdDwvY2R4LWNoZWNrYm94PlxuXHRcdFx0PC9jZHgtZmllbGQ+XG5cdFx0XHQ8cCB2LWlmPVwic3VibWl0dGluZ1wiIGNsYXNzPVwidXNlci1yaWdodHMtbWFuYWdlcl9fc3RhdHVzXCI+e3sgd2dVTFMoJ+WkhOeQhuS4reKApuKApicsICfomZXnkIbkuK3igKbigKYnKSB9fTwvcD5cblx0XHQ8L2Rpdj5cblx0PC9jZHgtZGlhbG9nPlxuPC90ZW1wbGF0ZT5cblxuPHN0eWxlIHNjb3BlZCBsYW5nPVwibGVzc1wiPlxuLnVzZXItcmlnaHRzLW1hbmFnZXJfX2JvZHkge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRnYXA6IDAuNzVyZW07XG5cdG1pbi13aWR0aDogbWluKDg1dncsIDI1cmVtKTtcbn1cblxuLnVzZXItcmlnaHRzLW1hbmFnZXJfX2xvZyxcbi51c2VyLXJpZ2h0cy1tYW5hZ2VyX19zdGF0dXMge1xuXHRtYXJnaW46IDA7XG59XG48L3N0eWxlPlxuIiwgIntcblx0XCJ1c2VyUmlnaHRzTWFuYWdlclN1bW1hcnlcIjogXCLvvIhbW01lZGlhV2lraTpHYWRnZXQtVXNlclJpZ2h0c01hbmFnZXIuanN8VXNlclJpZ2h0c01hbmFnZXJdXe+8iVwiLFxuXHRcInZlcnNpb25cIjogXCIyLjBcIlxufVxuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7aW5pdE13QXBpfSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG5jb25zdCBhcGk6IG13LkFwaSA9IGluaXRNd0FwaShgVXNlclJpZ2h0c01hbmFnZXIvJHtPUFRJT05TLnZlcnNpb259YCk7XG5cbmV4cG9ydCB7YXBpfTtcbiIsICJpbXBvcnQgdHlwZSB7VXNlclJpZ2h0c30gZnJvbSAnfi9NYXJrUmlnaHRzL21vZHVsZXMvdHlwZXMnO1xuXG5jb25zdCBnZXRQZXJtaXNzaW9uTmFtZXMgPSAocGVybWlzc2lvbjogVXNlclJpZ2h0cyk6IHN0cmluZyB8IG51bGwgPT4ge1xuXHRjb25zdCBwZXJtaXNzaW9uTmFtZXMgPSB7XG5cdFx0cGF0cm9sbGVyOiAn5beh5p+l5ZGYJyxcblx0XHRhdXRvcmV2aWV3ZXI6ICflt6Hmn6XosYHlhY3ogIUnLFxuXHRcdGNvbmZpcm1lZDogJ+ehruiupOeUqOaItycsXG5cdFx0J21hc3NtZXNzYWdlLXNlbmRlcic6ICflpKfph4/mtojmga/lj5HpgIHogIUnLFxuXHRcdGV2ZW50c3BvbnNvcjogJ+a0u+WKqOe7hOe7h+iAhScsXG5cdFx0dHJhbnN3aWtpOiAn5a+85YWl6ICFJyxcblx0XHR0ZW1wbGF0ZWVkaXRvcjogJ+aooeadv+e8lui+keWRmCcsXG5cdFx0Ym90OiAn5py65Zmo5Lq6Jyxcblx0XHQncm5yc3ZlcmlmeS1leGVtcHQnOiAn5omL5py65Y+36aqM6K+B6LGB5YWNJyxcblx0XHQnaXBibG9jay1leGVtcHQnOiAnSVDlsIHnpoHosYHlhY0nLFxuXHR9IGFzIGNvbnN0IHNhdGlzZmllcyBQYXJ0aWFsPFJlY29yZDxVc2VyUmlnaHRzLCBzdHJpbmc+PjtcblxuXHRsZXQgcGVybWlzc2lvbk5hbWU6IHN0cmluZyB8IG51bGwgPSBudWxsO1xuXHRmb3IgKGNvbnN0IFtyaWdodCwgbmFtZV0gb2YgT2JqZWN0LmVudHJpZXMocGVybWlzc2lvbk5hbWVzKSkge1xuXHRcdGlmIChwZXJtaXNzaW9uID09PSByaWdodCkge1xuXHRcdFx0cGVybWlzc2lvbk5hbWUgPSBuYW1lO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gcGVybWlzc2lvbk5hbWU7XG59O1xuXG5leHBvcnQge2dldFBlcm1pc3Npb25OYW1lc307XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtVc2VyUmlnaHRzfSBmcm9tICd+L01hcmtSaWdodHMvbW9kdWxlcy90eXBlcyc7XG5pbXBvcnQge2FwaX0gZnJvbSAnLi9hcGknO1xuaW1wb3J0IHtnZXRQZXJtaXNzaW9uTmFtZXN9IGZyb20gJy4vZ2V0UGVybWlzc2lvbk5hbWVzJztcblxuY29uc3QgYXNzaWduUGVybWlzc2lvbiA9ICh7XG5cdHVzZXJOYW1lLFxuXHRwZXJtaXNzaW9uLFxuXHRzdW1tYXJ5LFxuXHRyZXZJZCxcblx0ZXhwaXJ5LFxufToge1xuXHR1c2VyTmFtZTogc3RyaW5nO1xuXHRwZXJtaXNzaW9uOiBVc2VyUmlnaHRzO1xuXHRzdW1tYXJ5OiBzdHJpbmc7XG5cdHJldklkOiBudW1iZXI7XG5cdGV4cGlyeTogc3RyaW5nO1xufSkgPT4ge1xuXHRjb25zdCBwZXJtYUxpbmsgPSBgW1tTcGVjaWFsOlBlcm1hTGluay8ke3JldklkfSNVc2VyOiR7dXNlck5hbWV9fOadg+mZkOeUs+ivt11dYDtcblx0bGV0IGZ1bGxTdW1tYXJ5ID0gYCske2dldFBlcm1pc3Npb25OYW1lcyhwZXJtaXNzaW9uKX3vvJske3Blcm1hTGlua31gO1xuXHRpZiAoc3VtbWFyeSAhPT0gJycpIHtcblx0XHRmdWxsU3VtbWFyeSArPSBg77ybJHtzdW1tYXJ5fWA7XG5cdH1cblx0ZnVsbFN1bW1hcnkgKz0gT1BUSU9OUy51c2VyUmlnaHRzTWFuYWdlclN1bW1hcnk7XG5cdGNvbnN0IHBhcmFtczogQXBpVXNlcnJpZ2h0c1BhcmFtcyA9IHtcblx0XHRhY3Rpb246ICd1c2VycmlnaHRzJyxcblx0XHR1c2VyOiB1c2VyTmFtZS5yZXBsYWNlKC8gL2csICdfJyksXG5cdFx0cmVhc29uOiBmdWxsU3VtbWFyeSxcblx0XHRhZGQ6IFtwZXJtaXNzaW9uXSxcblx0XHRleHBpcnk6IGV4cGlyeSA9PT0gJycgPyAnaW5maW5pdHknIDogZXhwaXJ5LFxuXHR9O1xuXHRpZiAocGVybWlzc2lvbiA9PT0gJ3BhdHJvbGxlcicgJiYgZXhwaXJ5ID09PSAnaW5maW5pdGUnKSB7XG5cdFx0cGFyYW1zLnJlbW92ZSA9ICdhdXRvcmV2aWV3ZXInO1xuXHR9XG5cdHJldHVybiBhcGkucG9zdFdpdGhUb2tlbigndXNlcnJpZ2h0cycsIHBhcmFtcyk7XG59O1xuXG5leHBvcnQge2Fzc2lnblBlcm1pc3Npb259O1xuIiwgImltcG9ydCB0eXBlIHtVc2VyUmlnaHRzfSBmcm9tICd+L01hcmtSaWdodHMvbW9kdWxlcy90eXBlcyc7XG5cbmNvbnN0IGdldFBlcm1pc3Npb25UZW1wbGF0ZSA9IChwZXJtaXNzaW9uOiBVc2VyUmlnaHRzKTogc3RyaW5nIHwgbnVsbCA9PiB7XG5cdGNvbnN0IHBlcm1pc3Npb25UZW1wbGF0ZXMgPSB7XG5cdFx0cGF0cm9sbGVyOiAnUGF0cm9sIGdyYW50ZWQnLFxuXHRcdGF1dG9yZXZpZXdlcjogJ0F1dG9wYXRyb2wgZ3JhbnRlZCcsXG5cdFx0J21hc3NtZXNzYWdlLXNlbmRlcic6ICdNTVMgZ3JhbnRlZCcsXG5cdFx0dGVtcGxhdGVlZGl0b3I6ICdUZW1wbGF0ZSBlZGl0b3IgZ3JhbnRlZCcsXG5cdFx0dHJhbnN3aWtpOiAnVHJhbnN3aWtpIGdyYW50ZWQnLFxuXHR9IGFzIGNvbnN0IHNhdGlzZmllcyBQYXJ0aWFsPFJlY29yZDxVc2VyUmlnaHRzLCBzdHJpbmc+PjtcblxuXHRsZXQgdGVtcGxhdGU6IHN0cmluZyB8IG51bGwgPSBudWxsO1xuXHRmb3IgKGNvbnN0IFtwYWdlUGVybWlzc2lvbiwgdGVtcGxhdGVOYW1lXSBvZiBPYmplY3QuZW50cmllcyhwZXJtaXNzaW9uVGVtcGxhdGVzKSkge1xuXHRcdGlmIChwZXJtaXNzaW9uID09PSBwYWdlUGVybWlzc2lvbikge1xuXHRcdFx0dGVtcGxhdGUgPSB0ZW1wbGF0ZU5hbWU7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiB0ZW1wbGF0ZTtcbn07XG5cbmV4cG9ydCB7Z2V0UGVybWlzc2lvblRlbXBsYXRlfTtcbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge0FwaVJlc3BvbnNlfSBmcm9tICd0eXBlcy1tZWRpYXdpa2kvbXcvQXBpJztcbmltcG9ydCB7VXNlclJpZ2h0c30gZnJvbSAnfi9NYXJrUmlnaHRzL21vZHVsZXMvdHlwZXMnO1xuaW1wb3J0IHthcGl9IGZyb20gJy4vYXBpJztcbmltcG9ydCB7Z2V0UGVybWlzc2lvbk5hbWVzfSBmcm9tICcuL2dldFBlcm1pc3Npb25OYW1lcyc7XG5pbXBvcnQge2dldFBlcm1pc3Npb25UZW1wbGF0ZX0gZnJvbSAnLi9nZXRUZW1wbGF0ZXMnO1xuXG5jb25zdCBpc3N1ZVRlbXBsYXRlID0gKHtcblx0dXNlck5hbWUsXG5cdHBlcm1pc3Npb24sXG5cdHdhdGNoLFxufToge1xuXHR1c2VyTmFtZTogc3RyaW5nO1xuXHRwZXJtaXNzaW9uOiBVc2VyUmlnaHRzO1xuXHR3YXRjaDogYm9vbGVhbiB8ICd3YXRjaCcgfCAndW53YXRjaCc7XG59KTogSlF1ZXJ5LlByb21pc2U8QXBpUmVzcG9uc2U+IHwgdm9pZCA9PiB7XG5cdGNvbnN0IHBlcm1pc3Npb25UZW1wbGF0ZSA9IGdldFBlcm1pc3Npb25UZW1wbGF0ZShwZXJtaXNzaW9uKTtcblx0aWYgKCFwZXJtaXNzaW9uVGVtcGxhdGUpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBwZXJtaXNzaW9uTmFtZSA9IGdldFBlcm1pc3Npb25OYW1lcyhwZXJtaXNzaW9uKTtcblx0Y29uc3QgdGFsa1BhZ2UgPSBgVXNlciB0YWxrOiR7dXNlck5hbWUucmVwbGFjZSgvIC9nLCAnXycpfWA7XG5cdGNvbnN0IHBhcmFtczogQXBpRWRpdFBhZ2VQYXJhbXMgPSB7XG5cdFx0YWN0aW9uOiAnZWRpdCcsXG5cdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0dGl0bGU6IHRhbGtQYWdlLFxuXHRcdGFwcGVuZHRleHQ6ICdcXG5cXG57eycuY29uY2F0KCdzdWJzdDonLCBwZXJtaXNzaW9uVGVtcGxhdGUsICd9fScpLFxuXHRcdHN1bW1hcnk6IGDmoLnmja7lhbHor4bmjojkuogke3Blcm1pc3Npb25OYW1lfSR7T1BUSU9OUy51c2VyUmlnaHRzTWFuYWdlclN1bW1hcnl9YCxcblx0XHR3YXRjaGxpc3Q6IHdhdGNoID8gJ3dhdGNoJyA6ICd1bndhdGNoJyxcblx0fTtcblx0cmV0dXJuIGFwaS5wb3N0V2l0aEVkaXRUb2tlbihwYXJhbXMpO1xufTtcblxuZXhwb3J0IHtpc3N1ZVRlbXBsYXRlfTtcbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge2FwaX0gZnJvbSAnLi9hcGknO1xuY29uc3QgdGFnTGluZSA9IE9QVElPTlMudXNlclJpZ2h0c01hbmFnZXJTdW1tYXJ5O1xuXG5jb25zdCBxdWVyeVJldmlzaW9ucyA9IGFzeW5jICh0aXRsZXM6IHN0cmluZyB8IHN0cmluZ1tdLCBydnNlY3Rpb246IHN0cmluZykgPT4ge1xuXHRjb25zdCBwYXJhbXM6IEFwaVF1ZXJ5UmV2aXNpb25zUGFyYW1zID0ge1xuXHRcdHRpdGxlcyxcblx0XHRydnNlY3Rpb24sXG5cdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRwcm9wOiAncmV2aXNpb25zJyxcblx0XHRjdXJ0aW1lc3RhbXA6IHRydWUsXG5cdFx0cnZwcm9wOiBbJ2NvbnRlbnQnLCAndGltZXN0YW1wJ10sXG5cdFx0cnZzbG90czogJ21haW4nLFxuXHR9O1xuXG5cdHJldHVybiBhd2FpdCBhcGkuZ2V0KHBhcmFtcyk7XG59O1xuXG5jb25zdCBtYXJrQXNEb25lID0gKHt1c2VyTmFtZSwgaW5kZXgsIGNsb3NpbmdSZW1hcmtzfToge3VzZXJOYW1lOiBzdHJpbmc7IGluZGV4OiBzdHJpbmc7IGNsb3NpbmdSZW1hcmtzOiBzdHJpbmd9KSA9PiB7XG5cdGNvbnN0IHt3Z1BhZ2VOYW1lLCB3Z1VzZXJOYW1lfSA9IG13LmNvbmZpZy5nZXQoKTtcblx0Y29uc3Qgc2VjdGlvbk5vZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcblx0XHRgVXNlcjoke3VzZXJOYW1lLnJlcGxhY2UoL1wiL2csICcuMjInKS5yZXBsYWNlKC8gL2csICdfJyl9JHtpbmRleCA/PyAnJ31gXG5cdCk7XG5cblx0Y29uc3Qgc2VjdGlvbk51bWJlciA9IChcblx0XHQoXG5cdFx0XHQkKHNlY3Rpb25Ob2RlIGFzIEhUTUxFbGVtZW50KVxuXHRcdFx0XHQuc2libGluZ3MoJy5tdy1lZGl0c2VjdGlvbicpXG5cdFx0XHRcdC5maW5kKCdhOm5vdCgubXctZWRpdHNlY3Rpb24tdmlzdWFsZWRpdG9yKVtocmVmKj1lZGl0XScpXG5cdFx0XHRcdC5wcm9wKCdocmVmJykgYXMgc3RyaW5nXG5cdFx0KS5tYXRjaCgvc2VjdGlvbj0oXFxkKykvKSBhcyBSZWdFeHBNYXRjaEFycmF5XG5cdClbMV0gYXMgc3RyaW5nO1xuXG5cdGxldCBiYXNldGltZXN0YW1wOiBzdHJpbmc7XG5cdGxldCBjdXJ0aW1lc3RhbXA6IHN0cmluZztcblx0bGV0IGNvbnRlbnQ6IHN0cmluZztcblx0bGV0IHJldmlzaW9uO1xuXG5cdHJldHVybiBxdWVyeVJldmlzaW9ucyh3Z1BhZ2VOYW1lLCBzZWN0aW9uTnVtYmVyKVxuXHRcdC50aGVuKChkYXRhKSA9PiB7XG5cdFx0XHRpZiAoIWRhdGFbJ3F1ZXJ5J10gfHwgIWRhdGFbJ3F1ZXJ5J10ucGFnZXMpIHtcblx0XHRcdFx0cmV0dXJuICQuRGVmZXJyZWQoKS5yZWplY3QoJ3Vua25vd24nKTtcblx0XHRcdH1cblxuXHRcdFx0Y29uc3Qge3BhZ2VzfSA9IGRhdGFbJ3F1ZXJ5J10gYXMge1xuXHRcdFx0XHRwYWdlczoge1xuXHRcdFx0XHRcdGludmFsaWQ/OiBib29sZWFuO1xuXHRcdFx0XHRcdG1pc3Npbmc/OiBib29sZWFuO1xuXHRcdFx0XHRcdHJldmlzaW9uczoge1xuXHRcdFx0XHRcdFx0dGltZXN0YW1wOiBzdHJpbmc7XG5cdFx0XHRcdFx0XHRzbG90czoge1xuXHRcdFx0XHRcdFx0XHRtYWluOiB7XG5cdFx0XHRcdFx0XHRcdFx0Y29udGVudDogc3RyaW5nO1xuXHRcdFx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdFx0fTtcblx0XHRcdFx0XHR9W107XG5cdFx0XHRcdH1bXTtcblx0XHRcdH07XG5cdFx0XHRjb25zdCBbcGFnZV0gPSBwYWdlcztcblxuXHRcdFx0aWYgKCFwYWdlIHx8IHBhZ2UuaW52YWxpZCkge1xuXHRcdFx0XHRyZXR1cm4gJC5EZWZlcnJlZCgpLnJlamVjdCgnaW52YWxpZHRpdGxlJyk7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChwYWdlLm1pc3NpbmcpIHtcblx0XHRcdFx0cmV0dXJuICQuRGVmZXJyZWQoKS5yZWplY3QoJ25vY3JlYXRlLW1pc3NpbmcnKTtcblx0XHRcdH1cblxuXHRcdFx0W3JldmlzaW9uXSA9IHBhZ2UucmV2aXNpb25zO1xuXHRcdFx0aWYgKHJldmlzaW9uKSB7XG5cdFx0XHRcdCh7XG5cdFx0XHRcdFx0c2xvdHM6IHtcblx0XHRcdFx0XHRcdG1haW46IHtjb250ZW50fSxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHRpbWVzdGFtcDogYmFzZXRpbWVzdGFtcCxcblx0XHRcdFx0fSA9IHJldmlzaW9uKTtcblx0XHRcdH1cblx0XHRcdGN1cnRpbWVzdGFtcCA9IGRhdGFbJ2N1cnRpbWVzdGFtcCddIGFzIHN0cmluZztcblx0XHRcdHJldHVybiAkLkRlZmVycmVkKCkucmVzb2x2ZSgpO1xuXHRcdH0pXG5cdFx0LnRoZW4oKCkgPT4ge1xuXHRcdFx0Y29udGVudCA9IGNvbnRlbnQudHJpbSgpO1xuXHRcdFx0Y29udGVudCA9IGNvbnRlbnQucmVwbGFjZSgvKDpcXHMqe3tTdGF0dXMpKFxcfC4qPyk/fX0vaSwgJyQxfCt9fScpO1xuXHRcdFx0Y29udGVudCArPSBjbG9zaW5nUmVtYXJrcztcblxuXHRcdFx0Y29uc3QgZWRpdFBhcmFtczogQXBpRWRpdFBhZ2VQYXJhbXMgPSB7XG5cdFx0XHRcdGFjdGlvbjogJ2VkaXQnLFxuXHRcdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdFx0XHR0aXRsZTogd2dQYWdlTmFtZSxcblx0XHRcdFx0c2VjdGlvbjogc2VjdGlvbk51bWJlcixcblx0XHRcdFx0dGV4dDogY29udGVudCxcblx0XHRcdFx0c3VtbWFyeTogYC8qIFVzZXI6JHt1c2VyTmFtZX0gKi8g5a6M5oiQJHt0YWdMaW5lfWAsXG5cdFx0XHRcdGJhc2V0aW1lc3RhbXAsXG5cdFx0XHRcdHN0YXJ0dGltZXN0YW1wOiBjdXJ0aW1lc3RhbXAsXG5cdFx0XHRcdG5vY3JlYXRlOiB0cnVlLFxuXHRcdFx0fTtcblx0XHRcdGlmICh3Z1VzZXJOYW1lKSB7XG5cdFx0XHRcdGVkaXRQYXJhbXMuYXNzZXJ0ID0gJ3VzZXInO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gYXBpLnBvc3RXaXRoRWRpdFRva2VuKGVkaXRQYXJhbXMpO1xuXHRcdH0pO1xufTtcblxuZXhwb3J0IHttYXJrQXNEb25lfTtcbiIsICJpbXBvcnQgeyB0b0Rpc3BsYXlTdHJpbmcgYXMgX3RvRGlzcGxheVN0cmluZywgY3JlYXRlRWxlbWVudFZOb2RlIGFzIF9jcmVhdGVFbGVtZW50Vk5vZGUsIGNyZWF0ZVRleHRWTm9kZSBhcyBfY3JlYXRlVGV4dFZOb2RlLCBjcmVhdGVWTm9kZSBhcyBfY3JlYXRlVk5vZGUsIHdpdGhDdHggYXMgX3dpdGhDdHgsIG9wZW5CbG9jayBhcyBfb3BlbkJsb2NrLCBjcmVhdGVCbG9jayBhcyBfY3JlYXRlQmxvY2ssIGNyZWF0ZUNvbW1lbnRWTm9kZSBhcyBfY3JlYXRlQ29tbWVudFZOb2RlLCBjcmVhdGVFbGVtZW50QmxvY2sgYXMgX2NyZWF0ZUVsZW1lbnRCbG9jayB9IGZyb20gXCJ2dWVcIlxuXG5jb25zdCBfaG9pc3RlZF8xID0geyBjbGFzczogXCJ1c2VyLXJpZ2h0cy1tYW5hZ2VyX19ib2R5XCIgfVxuY29uc3QgX2hvaXN0ZWRfMiA9IHsgY2xhc3M6IFwidXNlci1yaWdodHMtbWFuYWdlcl9fbG9nXCIgfVxuY29uc3QgX2hvaXN0ZWRfMyA9IFtcImhyZWZcIl1cbmNvbnN0IF9ob2lzdGVkXzQgPSB7IGZvcjogXCJ1c2VyLXJpZ2h0cy1tYW5hZ2VyLXN1bW1hcnlcIiB9XG5jb25zdCBfaG9pc3RlZF81ID0geyBmb3I6IFwidXNlci1yaWdodHMtbWFuYWdlci1zdW1tYXJ5XCIgfVxuY29uc3QgX2hvaXN0ZWRfNiA9IHsgZm9yOiBcInVzZXItcmlnaHRzLW1hbmFnZXItY3VzdG9tLWV4cGlyeVwiIH1cbmNvbnN0IF9ob2lzdGVkXzcgPSB7IGZvcjogXCJ1c2VyLXJpZ2h0cy1tYW5hZ2VyLXJlbWFya3NcIiB9XG5jb25zdCBfaG9pc3RlZF84ID0ge1xuICBrZXk6IDIsXG4gIGNsYXNzOiBcInVzZXItcmlnaHRzLW1hbmFnZXJfX3N0YXR1c1wiXG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXIoX2N0eCwgX2NhY2hlLCAkcHJvcHMsICRzZXR1cCwgJGRhdGEsICRvcHRpb25zKSB7XG4gIHJldHVybiAoX29wZW5CbG9jaygpLCBfY3JlYXRlQmxvY2soJHNldHVwW1wiQ2R4RGlhbG9nXCJdLCB7XG4gICAgb3BlbjogJHNldHVwLm9wZW4sXG4gICAgXCJvblVwZGF0ZTpvcGVuXCI6IFtcbiAgICAgIF9jYWNoZVs1XSB8fCAoX2NhY2hlWzVdID0gJGV2ZW50ID0+ICgoJHNldHVwLm9wZW4pID0gJGV2ZW50KSksXG4gICAgICBfY2FjaGVbNl0gfHwgKF9jYWNoZVs2XSA9ICRldmVudCA9PiAoJGV2ZW50ID09PSBmYWxzZSAmJiAkc2V0dXAuY2xvc2UoKSkpXG4gICAgXSxcbiAgICB0aXRsZTogYOaOiOS6iCR7JHNldHVwLnBlcm1pc3Npb25OYW1lfSR7JHNldHVwLndnVUxTKCfnu5knLCAn57WmJyl9JHskcHJvcHMudXNlck5hbWV9YCxcbiAgICBcInVzZS1jbG9zZS1idXR0b25cIjogdHJ1ZSxcbiAgICBcInByaW1hcnktYWN0aW9uXCI6IHtsYWJlbDogJHNldHVwLndnVUxTKCfmjojmnYMnLCAn5o6I5qyKJyksIGFjdGlvblR5cGU6ICdwcm9ncmVzc2l2ZScsIGRpc2FibGVkOiAkc2V0dXAuc3VibWl0dGluZ30sXG4gICAgXCJkZWZhdWx0LWFjdGlvblwiOiB7bGFiZWw6ICflj5bmtognLCBkaXNhYmxlZDogJHNldHVwLnN1Ym1pdHRpbmd9LFxuICAgIG9uUHJpbWFyeTogJHNldHVwLnN1Ym1pdCxcbiAgICBvbkRlZmF1bHQ6ICRzZXR1cC5jbG9zZVxuICB9LCB7XG4gICAgZGVmYXVsdDogX3dpdGhDdHgoKCkgPT4gW1xuICAgICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcImRpdlwiLCBfaG9pc3RlZF8xLCBbXG4gICAgICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJwXCIsIF9ob2lzdGVkXzIsIFtcbiAgICAgICAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwiYVwiLCB7XG4gICAgICAgICAgICBocmVmOiAkc2V0dXAubG9nVXJsLFxuICAgICAgICAgICAgdGFyZ2V0OiBcIl9ibGFua1wiLFxuICAgICAgICAgICAgcmVsOiBcIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICAgIH0sIF90b0Rpc3BsYXlTdHJpbmcoJHNldHVwLndnVUxTKCfmnIDov5HmnYPpmZDml6Xlv5cnLCAn5pyA6L+R5qyK6ZmQ5pel6KqMJykpLCA5IC8qIFRFWFQsIFBST1BTICovLCBfaG9pc3RlZF8zKSxcbiAgICAgICAgICBfY3JlYXRlVGV4dFZOb2RlKFwiIO+8mlwiICsgX3RvRGlzcGxheVN0cmluZygkc2V0dXAucmlnaHRMb2cpLCAxIC8qIFRFWFQgKi8pXG4gICAgICAgIF0pLFxuICAgICAgICBfY3JlYXRlVk5vZGUoJHNldHVwW1wiQ2R4RmllbGRcIl0sIG51bGwsIHtcbiAgICAgICAgICBkZWZhdWx0OiBfd2l0aEN0eCgoKSA9PiBbXG4gICAgICAgICAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwibGFiZWxcIiwgX2hvaXN0ZWRfNCwgX3RvRGlzcGxheVN0cmluZygkc2V0dXAud2dVTFMoJ+aOiOadg+WOn+WboCcsICfmjojmrIrljp/lm6AnKSksIDEgLyogVEVYVCAqLyksXG4gICAgICAgICAgICBfY3JlYXRlVk5vZGUoJHNldHVwW1wiQ2R4VGV4dElucHV0XCJdLCB7XG4gICAgICAgICAgICAgIGlkOiBcInVzZXItcmlnaHRzLW1hbmFnZXItc3VtbWFyeVwiLFxuICAgICAgICAgICAgICBtb2RlbFZhbHVlOiAkc2V0dXAucmlnaHRzQ2hhbmdlU3VtbWFyeSxcbiAgICAgICAgICAgICAgXCJvblVwZGF0ZTptb2RlbFZhbHVlXCI6IF9jYWNoZVswXSB8fCAoX2NhY2hlWzBdID0gJGV2ZW50ID0+ICgoJHNldHVwLnJpZ2h0c0NoYW5nZVN1bW1hcnkpID0gJGV2ZW50KSksXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIuWPr+eVmeepulwiLFxuICAgICAgICAgICAgICBkaXNhYmxlZDogJHNldHVwLnN1Ym1pdHRpbmdcbiAgICAgICAgICAgIH0sIG51bGwsIDggLyogUFJPUFMgKi8sIFtcIm1vZGVsVmFsdWVcIiwgXCJkaXNhYmxlZFwiXSlcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfOiAxIC8qIFNUQUJMRSAqL1xuICAgICAgICB9KSxcbiAgICAgICAgX2NyZWF0ZVZOb2RlKCRzZXR1cFtcIkNkeEZpZWxkXCJdLCBudWxsLCB7XG4gICAgICAgICAgZGVmYXVsdDogX3dpdGhDdHgoKCkgPT4gW1xuICAgICAgICAgICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcImxhYmVsXCIsIF9ob2lzdGVkXzUsIF90b0Rpc3BsYXlTdHJpbmcoJHNldHVwLndnVUxTKCfmjojmnYPmnJ/pmZAnLCAn5o6I5qyK5pyf6ZmQJykpLCAxIC8qIFRFWFQgKi8pLFxuICAgICAgICAgICAgX2NyZWF0ZVZOb2RlKCRzZXR1cFtcIkNkeFNlbGVjdFwiXSwge1xuICAgICAgICAgICAgICBzZWxlY3RlZDogJHNldHVwLmV4cGlyeSxcbiAgICAgICAgICAgICAgXCJvblVwZGF0ZTpzZWxlY3RlZFwiOiBfY2FjaGVbMV0gfHwgKF9jYWNoZVsxXSA9ICRldmVudCA9PiAoKCRzZXR1cC5leHBpcnkpID0gJGV2ZW50KSksXG4gICAgICAgICAgICAgIFwibWVudS1pdGVtc1wiOiAkc2V0dXAuZXhwaXJ5SXRlbXMsXG4gICAgICAgICAgICAgIGRpc2FibGVkOiAkc2V0dXAuc3VibWl0dGluZ1xuICAgICAgICAgICAgfSwgbnVsbCwgOCAvKiBQUk9QUyAqLywgW1wic2VsZWN0ZWRcIiwgXCJkaXNhYmxlZFwiXSlcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfOiAxIC8qIFNUQUJMRSAqL1xuICAgICAgICB9KSxcbiAgICAgICAgKCRzZXR1cC5leHBpcnkgPT09ICdvdGhlcicpXG4gICAgICAgICAgPyAoX29wZW5CbG9jaygpLCBfY3JlYXRlQmxvY2soJHNldHVwW1wiQ2R4RmllbGRcIl0sIHsga2V5OiAwIH0sIHtcbiAgICAgICAgICAgICAgZGVmYXVsdDogX3dpdGhDdHgoKCkgPT4gW1xuICAgICAgICAgICAgICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJsYWJlbFwiLCBfaG9pc3RlZF82LCBfdG9EaXNwbGF5U3RyaW5nKCRzZXR1cC53Z1VMUygn6Ieq5a6a5LmJ5pe26Ze0JywgJ+iHquioguaZgumWkycpKSwgMSAvKiBURVhUICovKSxcbiAgICAgICAgICAgICAgICBfY3JlYXRlVk5vZGUoJHNldHVwW1wiQ2R4VGV4dElucHV0XCJdLCB7XG4gICAgICAgICAgICAgICAgICBpZDogXCJ1c2VyLXJpZ2h0cy1tYW5hZ2VyLWN1c3RvbS1leHBpcnlcIixcbiAgICAgICAgICAgICAgICAgIG1vZGVsVmFsdWU6ICRzZXR1cC5jdXN0b21FeHBpcnksXG4gICAgICAgICAgICAgICAgICBcIm9uVXBkYXRlOm1vZGVsVmFsdWVcIjogX2NhY2hlWzJdIHx8IChfY2FjaGVbMl0gPSAkZXZlbnQgPT4gKCgkc2V0dXAuY3VzdG9tRXhwaXJ5KSA9ICRldmVudCkpLFxuICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6ICRzZXR1cC5zdWJtaXR0aW5nXG4gICAgICAgICAgICAgICAgfSwgbnVsbCwgOCAvKiBQUk9QUyAqLywgW1wibW9kZWxWYWx1ZVwiLCBcImRpc2FibGVkXCJdKVxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgXzogMSAvKiBTVEFCTEUgKi9cbiAgICAgICAgICAgIH0pKVxuICAgICAgICAgIDogX2NyZWF0ZUNvbW1lbnRWTm9kZShcInYtaWZcIiwgdHJ1ZSksXG4gICAgICAgIF9jcmVhdGVWTm9kZSgkc2V0dXBbXCJDZHhGaWVsZFwiXSwgbnVsbCwge1xuICAgICAgICAgIGRlZmF1bHQ6IF93aXRoQ3R4KCgpID0+IFtcbiAgICAgICAgICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJsYWJlbFwiLCBfaG9pc3RlZF83LCBfdG9EaXNwbGF5U3RyaW5nKCRzZXR1cC53Z1VMUygn5YWz6Zet6K+35rGC55WZ6KiAJywgJ+mXnOmWieiri+axgueVmeiogCcpKSwgMSAvKiBURVhUICovKSxcbiAgICAgICAgICAgIF9jcmVhdGVWTm9kZSgkc2V0dXBbXCJDZHhUZXh0SW5wdXRcIl0sIHtcbiAgICAgICAgICAgICAgaWQ6IFwidXNlci1yaWdodHMtbWFuYWdlci1yZW1hcmtzXCIsXG4gICAgICAgICAgICAgIG1vZGVsVmFsdWU6ICRzZXR1cC5jbG9zaW5nUmVtYXJrcyxcbiAgICAgICAgICAgICAgXCJvblVwZGF0ZTptb2RlbFZhbHVlXCI6IF9jYWNoZVszXSB8fCAoX2NhY2hlWzNdID0gJGV2ZW50ID0+ICgoJHNldHVwLmNsb3NpbmdSZW1hcmtzKSA9ICRldmVudCkpLFxuICAgICAgICAgICAgICBkaXNhYmxlZDogJHNldHVwLnN1Ym1pdHRpbmdcbiAgICAgICAgICAgIH0sIG51bGwsIDggLyogUFJPUFMgKi8sIFtcIm1vZGVsVmFsdWVcIiwgXCJkaXNhYmxlZFwiXSlcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfOiAxIC8qIFNUQUJMRSAqL1xuICAgICAgICB9KSxcbiAgICAgICAgKCRzZXR1cC5wZXJtaXNzaW9uVGVtcGxhdGUpXG4gICAgICAgICAgPyAoX29wZW5CbG9jaygpLCBfY3JlYXRlQmxvY2soJHNldHVwW1wiQ2R4RmllbGRcIl0sIHsga2V5OiAxIH0sIHtcbiAgICAgICAgICAgICAgZGVmYXVsdDogX3dpdGhDdHgoKCkgPT4gW1xuICAgICAgICAgICAgICAgIF9jcmVhdGVWTm9kZSgkc2V0dXBbXCJDZHhDaGVja2JveFwiXSwge1xuICAgICAgICAgICAgICAgICAgbW9kZWxWYWx1ZTogJHNldHVwLndhdGNoVGFsa1BhZ2UsXG4gICAgICAgICAgICAgICAgICBcIm9uVXBkYXRlOm1vZGVsVmFsdWVcIjogX2NhY2hlWzRdIHx8IChfY2FjaGVbNF0gPSAkZXZlbnQgPT4gKCgkc2V0dXAud2F0Y2hUYWxrUGFnZSkgPSAkZXZlbnQpKSxcbiAgICAgICAgICAgICAgICAgIGRpc2FibGVkOiAkc2V0dXAuc3VibWl0dGluZ1xuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6IF93aXRoQ3R4KCgpID0+IFtcbiAgICAgICAgICAgICAgICAgICAgX2NyZWF0ZVRleHRWTm9kZShfdG9EaXNwbGF5U3RyaW5nKCRzZXR1cC53Z1VMUygn55uR6KeG55So5oi36K6o6K666aG1JywgJ+ebo+imluS9v+eUqOiAheiojuirlumggScpKSwgMSAvKiBURVhUICovKVxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfOiAxIC8qIFNUQUJMRSAqL1xuICAgICAgICAgICAgICAgIH0sIDggLyogUFJPUFMgKi8sIFtcIm1vZGVsVmFsdWVcIiwgXCJkaXNhYmxlZFwiXSlcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF86IDEgLyogU1RBQkxFICovXG4gICAgICAgICAgICB9KSlcbiAgICAgICAgICA6IF9jcmVhdGVDb21tZW50Vk5vZGUoXCJ2LWlmXCIsIHRydWUpLFxuICAgICAgICAoJHNldHVwLnN1Ym1pdHRpbmcpXG4gICAgICAgICAgPyAoX29wZW5CbG9jaygpLCBfY3JlYXRlRWxlbWVudEJsb2NrKFwicFwiLCBfaG9pc3RlZF84LCBfdG9EaXNwbGF5U3RyaW5nKCRzZXR1cC53Z1VMUygn5aSE55CG5Lit4oCm4oCmJywgJ+iZleeQhuS4reKApuKApicpKSwgMSAvKiBURVhUICovKSlcbiAgICAgICAgICA6IF9jcmVhdGVDb21tZW50Vk5vZGUoXCJ2LWlmXCIsIHRydWUpXG4gICAgICBdKVxuICAgIF0pLFxuICAgIF86IDEgLyogU1RBQkxFICovXG4gIH0sIDggLyogUFJPUFMgKi8sIFtcIm9wZW5cIiwgXCJ0aXRsZVwiLCBcInByaW1hcnktYWN0aW9uXCIsIFwiZGVmYXVsdC1hY3Rpb25cIl0pKVxufSIsICJpbXBvcnQgc2NyaXB0IGZyb20gXCJEOlxcXFxHaXRSZXBvc2l0b3J5XFxcXFFpdXdlbkdhZGdldHNcXFxcc3JjXFxcXFVzZXJSaWdodHNNYW5hZ2VyXFxcXEFwcC52dWU/dHlwZT1zY3JpcHRcIjtpbXBvcnQgXCJEOlxcXFxHaXRSZXBvc2l0b3J5XFxcXFFpdXdlbkdhZGdldHNcXFxcc3JjXFxcXFVzZXJSaWdodHNNYW5hZ2VyXFxcXEFwcC52dWU/dHlwZT1zdHlsZSZpbmRleD0wXCI7aW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcIkQ6XFxcXEdpdFJlcG9zaXRvcnlcXFxcUWl1d2VuR2FkZ2V0c1xcXFxzcmNcXFxcVXNlclJpZ2h0c01hbmFnZXJcXFxcQXBwLnZ1ZT90eXBlPXRlbXBsYXRlXCI7IHNjcmlwdC5yZW5kZXIgPSByZW5kZXI7c2NyaXB0Ll9fZmlsZSA9IFwic3JjXFxcXFVzZXJSaWdodHNNYW5hZ2VyXFxcXEFwcC52dWVcIjtzY3JpcHQuX19zY29wZUlkID0gXCJkYXRhLXYtZTFjYjM1MWNcIjtleHBvcnQgZGVmYXVsdCBzY3JpcHQ7Il0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEscUJBQXNCQyxRQUFBLGlCQUFBOztBQ0V0QixJQUFNQyxxQkFBcUJBLE1BQXlCO0FBQ25ELFFBQU07SUFBQ0M7RUFBVSxJQUFJQyxHQUFHQyxPQUFPQyxJQUFJO0FBRW5DLFFBQU1DLGtCQUFrQjtJQUN2Qiw0QkFBNEI7SUFDNUIsNEJBQTRCO0lBQzVCLDRCQUE0QjtJQUM1Qiw4QkFBOEI7SUFDOUIsNEJBQTRCO0lBQzVCLDBCQUEwQjtJQUMx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SUFBSyxDQUFDO0VBQ2hELENBQUM7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogWyJpbXBvcnRfZXh0X2dhZGdldDIiLCAicmVxdWlyZSIsICJnZXRQYWdlUGVybWlzc2lvbnMiLCAid2dQYWdlTmFtZSIsICJtdyIsICJjb25maWciLCAiZ2V0IiwgInBhZ2VQZXJtaXNzaW9ucyIsICJwZXJtaXNzaW9uIiwgIl9pIiwgIl9PYmplY3QkZW50cmllcyIsICJPYmplY3QiLCAiZW50cmllcyIsICJsZW5ndGgiLCAicGFnZU5hbWUiLCAicGFnZVBlcm1pc3Npb24iLCAiaW1wb3J0X3Z1ZTQiLCAiaW1wb3J0X2NvZGV4IiwgImltcG9ydF92dWUyIiwgInVzZXJSaWdodHNNYW5hZ2VyU3VtbWFyeSIsICJ2ZXJzaW9uIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgImFwaSIsICJpbml0TXdBcGkiLCAiY29uY2F0IiwgImdldFBlcm1pc3Npb25OYW1lcyIsICJwZXJtaXNzaW9uTmFtZXMiLCAicGF0cm9sbGVyIiwgImF1dG9yZXZpZXdlciIsICJjb25maXJtZWQiLCAiZXZlbnRzcG9uc29yIiwgInRyYW5zd2lraSIsICJ0ZW1wbGF0ZWVkaXRvciIsICJib3QiLCAicGVybWlzc2lvbk5hbWUiLCAiX2kyIiwgIl9PYmplY3QkZW50cmllczIiLCAicmlnaHQiLCAibmFtZSIsICJhc3NpZ25QZXJtaXNzaW9uIiwgInVzZXJOYW1lIiwgInN1bW1hcnkiLCAicmV2SWQiLCAiZXhwaXJ5IiwgInBlcm1hTGluayIsICJmdWxsU3VtbWFyeSIsICJwYXJhbXMiLCAiYWN0aW9uIiwgInVzZXIiLCAicmVwbGFjZSIsICJyZWFzb24iLCAiYWRkIiwgInJlbW92ZSIsICJwb3N0V2l0aFRva2VuIiwgImdldFBlcm1pc3Npb25UZW1wbGF0ZSIsICJwZXJtaXNzaW9uVGVtcGxhdGVzIiwgInRlbXBsYXRlIiwgIl9pMyIsICJfT2JqZWN0JGVudHJpZXMzIiwgInRlbXBsYXRlTmFtZSIsICJpc3N1ZVRlbXBsYXRlIiwgIndhdGNoIiwgInBlcm1pc3Npb25UZW1wbGF0ZSIsICJ0YWxrUGFnZSIsICJmb3JtYXQiLCAidGl0bGUiLCAiYXBwZW5kdGV4dCIsICJ3YXRjaGxpc3QiLCAicG9zdFdpdGhFZGl0VG9rZW4iLCAidGFnTGluZSIsICJxdWVyeVJldmlzaW9ucyIsICJfcmVmIiwgIl9hc3luY1RvR2VuZXJhdG9yIiwgInRpdGxlcyIsICJydnNlY3Rpb24iLCAiZm9ybWF0dmVyc2lvbiIsICJwcm9wIiwgImN1cnRpbWVzdGFtcCIsICJydnByb3AiLCAicnZzbG90cyIsICJfeCIsICJfeDIiLCAiYXBwbHkiLCAiYXJndW1lbnRzIiwgIm1hcmtBc0RvbmUiLCAiaW5kZXgiLCAiY2xvc2luZ1JlbWFya3MiLCAid2dVc2VyTmFtZSIsICJzZWN0aW9uTm9kZSIsICJkb2N1bWVudCIsICJnZXRFbGVtZW50QnlJZCIsICJzZWN0aW9uTnVtYmVyIiwgIiQiLCAic2libGluZ3MiLCAiZmluZCIsICJtYXRjaCIsICJiYXNldGltZXN0YW1wIiwgImNvbnRlbnQiLCAicmV2aXNpb24iLCAidGhlbiIsICJkYXRhIiwgInBhZ2VzIiwgIkRlZmVycmVkIiwgInJlamVjdCIsICJwYWdlIiwgImludmFsaWQiLCAibWlzc2luZyIsICJyZXZpc2lvbnMiLCAic2xvdHMiLCAibWFpbiIsICJ0aW1lc3RhbXAiLCAicmVzb2x2ZSIsICJ0cmltIiwgImVkaXRQYXJhbXMiLCAic2VjdGlvbiIsICJ0ZXh0IiwgInN0YXJ0dGltZXN0YW1wIiwgIm5vY3JlYXRlIiwgImFzc2VydCIsICJwcm9wcyIsICJfX3Byb3BzIiwgIndnVUxTIiwgIndpbmRvdyIsICJvcGVuIiwgInJlZiIsICJzdWJtaXR0aW5nIiwgInJpZ2h0c0NoYW5nZVN1bW1hcnkiLCAiY3VzdG9tRXhwaXJ5IiwgIndhdGNoVGFsa1BhZ2UiLCAicmlnaHRMb2ciLCAiX2dldFBlcm1pc3Npb25OYW1lcyIsICJsb2dVcmwiLCAidXRpbCIsICJnZXRVcmwiLCAidHlwZSIsICJleHBpcnlJdGVtcyIsICJ2YWx1ZSIsICJsYWJlbCIsICJsb2FkUmlnaHRMb2ciLCAibGlzdCIsICJsZWFjdGlvbiIsICJsZXRpdGxlIiwgImxlbGltaXQiLCAiZG9uZSIsICJsb2dldmVudHMiLCAibG9ncyIsICJsb2ciLCAiTW9yZWJpdHMiLCAiZGF0ZSIsICJjYWxlbmRhciIsICJyaWdodHMiLCAibmV3Z3JvdXBzIiwgImpvaW4iLCAiY2xvc2UiLCAib25DbG9zZSIsICJzdWJtaXQiLCAiX3JlZjIiLCAiZG9uZURhdGEiLCAiTnVtYmVyIiwgInBhcnNlSW50IiwgIm5ld3JldmlkIiwgInNldFRpbWVvdXQiLCAibG9jYXRpb24iLCAicmVsb2FkIiwgImVycm9yIiwgIm5vdGlmeSIsICJTdHJpbmciLCAidGFnIiwgIm9uTW91bnRlZCIsICJpbXBvcnRfdnVlMyIsICJfaG9pc3RlZF8xIiwgImNsYXNzIiwgIl9ob2lzdGVkXzIiLCAiX2hvaXN0ZWRfMyIsICJfaG9pc3RlZF80IiwgImZvciIsICJfaG9pc3RlZF81IiwgIl9ob2lzdGVkXzYiLCAiX2hvaXN0ZWRfNyIsICJfaG9pc3RlZF84IiwgImtleSIsICJyZW5kZXIiLCAiX2N0eCIsICJfY2FjaGUiLCAiJHByb3BzIiwgIiRzZXR1cCIsICIkZGF0YSIsICIkb3B0aW9ucyIsICJvcGVuQmxvY2siLCAiY3JlYXRlQmxvY2siLCAiJGV2ZW50IiwgImFjdGlvblR5cGUiLCAiZGlzYWJsZWQiLCAib25QcmltYXJ5IiwgIm9uRGVmYXVsdCIsICJkZWZhdWx0IiwgIndpdGhDdHgiLCAiY3JlYXRlRWxlbWVudFZOb2RlIiwgImhyZWYiLCAidGFyZ2V0IiwgInJlbCIsICJ0b0Rpc3BsYXlTdHJpbmciLCAiY3JlYXRlVGV4dFZOb2RlIiwgImNyZWF0ZVZOb2RlIiwgImlkIiwgIm1vZGVsVmFsdWUiLCAicGxhY2Vob2xkZXIiLCAiXyIsICJzZWxlY3RlZCIsICJjcmVhdGVDb21tZW50Vk5vZGUiLCAiY3JlYXRlRWxlbWVudEJsb2NrIiwgIkFwcF9kZWZhdWx0IiwgIl9fZmlsZSIsICJfX3Njb3BlSWQiLCAiQXBwX2RlZmF1bHQyIiwgImFwcCIsICJyb290IiwgInNob3dEaWFsb2ciLCAic2hvd0RpYWxvZzIiLCAiJGJvZHkiLCAiX3Jvb3QiLCAidW5tb3VudCIsICJjcmVhdGVFbGVtZW50IiwgImFwcGVuZCIsICJjcmVhdGVBcHAiLCAiX2FwcCIsICJfcm9vdDIiLCAibW91bnQiLCAiZ2V0Qm9keSIsICJvbiIsICJldmVudCIsICJfJGVsZW1lbnQkcGFyZW50cyRwcmUiLCAicHJldmVudERlZmF1bHQiLCAiJGVsZW1lbnQiLCAiZ2V0UGFyYW1WYWx1ZSIsICJhdHRyIiwgInNlY3Rpb25JZCIsICJwYXJlbnRzIiwgInByZXYiXQp9Cg==

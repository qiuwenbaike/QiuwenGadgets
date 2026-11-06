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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1VzZXJSaWdodHNNYW5hZ2VyL1VzZXJSaWdodHNNYW5hZ2VyLnRzIiwgInNyYy9Vc2VyUmlnaHRzTWFuYWdlci9tb2R1bGVzL2dldFBhZ2VQZXJtaXNzaW9ucy50cyIsICJzcmMvVXNlclJpZ2h0c01hbmFnZXIvbW9kdWxlcy9zaG93RGlhbG9nLnRzIiwgImRpc3QvVXNlclJpZ2h0c01hbmFnZXIvc3JjL1VzZXJSaWdodHNNYW5hZ2VyL0FwcC52dWUiLCAic3JjL1VzZXJSaWdodHNNYW5hZ2VyL29wdGlvbnMuanNvbiIsICJzcmMvVXNlclJpZ2h0c01hbmFnZXIvbW9kdWxlcy9hcGkudHMiLCAic3JjL1VzZXJSaWdodHNNYW5hZ2VyL21vZHVsZXMvZ2V0UGVybWlzc2lvbk5hbWVzLnRzIiwgInNyYy9Vc2VyUmlnaHRzTWFuYWdlci9tb2R1bGVzL2Fzc2lnblBlcm1pc3Npb24udHMiLCAic3JjL1VzZXJSaWdodHNNYW5hZ2VyL21vZHVsZXMvZ2V0VGVtcGxhdGVzLnRzIiwgInNyYy9Vc2VyUmlnaHRzTWFuYWdlci9tb2R1bGVzL2lzc3VlVGVtcGxhdGUudHMiLCAic3JjL1VzZXJSaWdodHNNYW5hZ2VyL21vZHVsZXMvbWFya0FzRG9uZS50cyIsICJzZmMtdGVtcGxhdGU6RDpcXEdpdFJlcG9zaXRvcnlcXFFpdXdlbkdhZGdldHNcXHNyY1xcVXNlclJpZ2h0c01hbmFnZXJcXEFwcC52dWU/dHlwZT10ZW1wbGF0ZSIsICJzcmMvVXNlclJpZ2h0c01hbmFnZXIvQXBwLnZ1ZSJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHtnZXRCb2R5fSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuaW1wb3J0IHtnZXRQYWdlUGVybWlzc2lvbnN9IGZyb20gJy4vbW9kdWxlcy9nZXRQYWdlUGVybWlzc2lvbnMnO1xuaW1wb3J0IHtzaG93RGlhbG9nfSBmcm9tICcuL21vZHVsZXMvc2hvd0RpYWxvZyc7XG5cbnZvaWQgZ2V0Qm9keSgpLnRoZW4oKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQgPT4ge1xuXHRjb25zdCBwZXJtaXNzaW9uID0gZ2V0UGFnZVBlcm1pc3Npb25zKCk7XG5cdGlmICghcGVybWlzc2lvbikge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdCRib2R5LmZpbmQoJy5wZXJtLWFzc2lnbi1wZXJtaXNzaW9ucyBhJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuXHRcdGNvbnN0ICRlbGVtZW50OiBKUXVlcnk8SFRNTEFuY2hvckVsZW1lbnQ+ID0gJCh0aGlzIGFzIEhUTUxBbmNob3JFbGVtZW50KTtcblx0XHRjb25zdCB1c2VyTmFtZSA9IG13LnV0aWwuZ2V0UGFyYW1WYWx1ZSgndXNlcicsICRlbGVtZW50LmF0dHIoJ2hyZWYnKSk7XG5cdFx0aWYgKCF1c2VyTmFtZSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGNvbnN0IHNlY3Rpb25JZDogc3RyaW5nID0gJGVsZW1lbnQucGFyZW50cygnZGwnKS5wcmV2KCdoNCcpLmZpbmQoJy5tdy1oZWFkbGluZScpLmF0dHIoJ2lkJykgPz8gJyc7XG5cdFx0Y29uc3QgaW5kZXg6IHN0cmluZyA9XG5cdFx0XHRzZWN0aW9uSWQgPT09IGBVc2VyOiR7dXNlck5hbWV9YCB8fCBzZWN0aW9uSWQgPT09IGBVc2VyOiR7dXNlck5hbWV9YC5yZXBsYWNlKC9cIi9nLCAnLjIyJykucmVwbGFjZSgvIC9nLCAnXycpXG5cdFx0XHRcdD8gJydcblx0XHRcdFx0OiBzZWN0aW9uSWRcblx0XHRcdFx0XHRcdC5yZXBsYWNlKCdVc2VyOicsICcnKVxuXHRcdFx0XHRcdFx0LnJlcGxhY2UodXNlck5hbWUsICcnKVxuXHRcdFx0XHRcdFx0LnJlcGxhY2UodXNlck5hbWUucmVwbGFjZSgvXCIvZywgJy4yMicpLnJlcGxhY2UoLyAvZywgJ18nKSwgJycpO1xuXG5cdFx0c2hvd0RpYWxvZyh7JGJvZHksIHVzZXJOYW1lLCBwZXJtaXNzaW9uLCBpbmRleH0pO1xuXHR9KTtcbn0pO1xuIiwgImltcG9ydCB0eXBlIHtVc2VyUmlnaHRzfSBmcm9tICd+L01hcmtSaWdodHMvbW9kdWxlcy90eXBlcyc7XG5cbmNvbnN0IGdldFBhZ2VQZXJtaXNzaW9ucyA9ICgpOiBVc2VyUmlnaHRzIHwgbnVsbCA9PiB7XG5cdGNvbnN0IHt3Z1BhZ2VOYW1lfSA9IG13LmNvbmZpZy5nZXQoKTtcblxuXHRjb25zdCBwYWdlUGVybWlzc2lvbnMgPSB7XG5cdFx0J1FpdXdlbl90YWxrOuadg+mZkOeUs+ivty/nlLPor7flt6Hmn6Xlm57pgIDmnYMnOiAncGF0cm9sbGVyJyxcblx0XHQnUWl1d2VuX3RhbGs65p2D6ZmQ55Sz6K+3L+eUs+ivt+W3oeafpeixgeWFjeadgyc6ICdhdXRvcmV2aWV3ZXInLFxuXHRcdCdRaXV3ZW5fdGFsazrmnYPpmZDnlLPor7cv55Sz6K+356Gu6K6k55So5oi35p2DJzogJ2NvbmZpcm1lZCcsXG5cdFx0J1FpdXdlbl90YWxrOuadg+mZkOeUs+ivty/nlLPor7flpKfph4/mtojmga/lj5HpgIHmnYMnOiAnbWFzc21lc3NhZ2Utc2VuZGVyJyxcblx0XHQnUWl1d2VuX3RhbGs65p2D6ZmQ55Sz6K+3L+eUs+ivt+a0u+WKqOe7hOe7h+adgyc6ICdldmVudHNwb25zb3InLFxuXHRcdCdRaXV3ZW5fdGFsazrmnYPpmZDnlLPor7cv55Sz6K+35a+85YWl5p2DJzogJ3RyYW5zd2lraScsXG5cdFx0J1FpdXdlbl90YWxrOuadg+mZkOeUs+ivty/nlLPor7fmqKHmnb/nvJbovpHmnYMnOiAndGVtcGxhdGVlZGl0b3InLFxuXHRcdCdRaXV3ZW5fdGFsazrmnYPpmZDnlLPor7cv55Sz6K+35py65Zmo5Lq65p2D6ZmQJzogJ2JvdCcsXG5cdFx0J1FpdXdlbl90YWxrOuadg+mZkOeUs+ivty/nlLPor7fmiYvmnLrlj7fpqozor4HosYHlhY0nOiAncm5yc3ZlcmlmeS1leGVtcHQnLFxuXHRcdCdRaXV3ZW5fdGFsazrmnYPpmZDnlLPor7cv55Sz6K+3SVDlsIHnpoHosYHlhY3mnYMnOiAnaXBibG9jay1leGVtcHQnLFxuXHR9IGFzIGNvbnN0IHNhdGlzZmllcyBQYXJ0aWFsPFJlY29yZDxzdHJpbmcsIFVzZXJSaWdodHM+PjtcblxuXHRsZXQgcGVybWlzc2lvbjogVXNlclJpZ2h0cyB8IG51bGwgPSBudWxsO1xuXHRmb3IgKGNvbnN0IFtwYWdlTmFtZSwgcGFnZVBlcm1pc3Npb25dIG9mIE9iamVjdC5lbnRyaWVzKHBhZ2VQZXJtaXNzaW9ucykpIHtcblx0XHRpZiAocGFnZU5hbWUgPT09IHdnUGFnZU5hbWUpIHtcblx0XHRcdHBlcm1pc3Npb24gPSBwYWdlUGVybWlzc2lvbjtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHBlcm1pc3Npb247XG59O1xuXG5leHBvcnQge2dldFBhZ2VQZXJtaXNzaW9uc307XG4iLCAiaW1wb3J0IHt0eXBlIEFwcCBhcyBWdWVBcHAsIGNyZWF0ZUFwcH0gZnJvbSAndnVlJztcbmltcG9ydCBBcHAgZnJvbSAnLi4vQXBwLnZ1ZSc7XG5pbXBvcnQge1VzZXJSaWdodHN9IGZyb20gJ34vTWFya1JpZ2h0cy9tb2R1bGVzL3R5cGVzJztcblxubGV0IGFwcDogVnVlQXBwPEVsZW1lbnQ+IHwgdW5kZWZpbmVkO1xubGV0IHJvb3Q6IEhUTUxEaXZFbGVtZW50IHwgdW5kZWZpbmVkO1xuXG5jb25zdCBzaG93RGlhbG9nID0gZnVuY3Rpb24gc2hvd0RpYWxvZyh7XG5cdCRib2R5LFxuXHR1c2VyTmFtZSxcblx0cGVybWlzc2lvbixcblx0aW5kZXgsXG59OiB7XG5cdCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pjtcblx0dXNlck5hbWU6IHN0cmluZztcblx0cGVybWlzc2lvbjogVXNlclJpZ2h0cztcblx0aW5kZXg6IHN0cmluZztcbn0pIHtcblx0aWYgKGFwcCkge1xuXHRcdGFwcC51bm1vdW50KCk7XG5cdFx0YXBwID0gdW5kZWZpbmVkO1xuXHR9XG5cdHJvb3Q/LnJlbW92ZSgpO1xuXHRyb290ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdCRib2R5LmFwcGVuZChyb290KTtcblx0YXBwID0gY3JlYXRlQXBwKEFwcCwge1xuXHRcdHVzZXJOYW1lLFxuXHRcdHBlcm1pc3Npb24sXG5cdFx0aW5kZXgsXG5cdFx0b25DbG9zZTogKCkgPT4ge1xuXHRcdFx0YXBwPy51bm1vdW50KCk7XG5cdFx0XHRhcHAgPSB1bmRlZmluZWQ7XG5cdFx0XHRyb290Py5yZW1vdmUoKTtcblx0XHRcdHJvb3QgPSB1bmRlZmluZWQ7XG5cdFx0fSxcblx0fSk7XG5cdGFwcC5tb3VudChyb290KTtcbn07XG5cbmV4cG9ydCB7c2hvd0RpYWxvZ307XG4iLCAiPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cbmltcG9ydCB7Q2R4Q2hlY2tib3gsIENkeERpYWxvZywgQ2R4RmllbGQsIENkeFNlbGVjdCwgQ2R4VGV4dElucHV0LCB0eXBlIE1lbnVJdGVtRGF0YX0gZnJvbSAnQHdpa2ltZWRpYS9jb2RleCc7XG5pbXBvcnQge29uTW91bnRlZCwgcmVmfSBmcm9tICd2dWUnO1xuaW1wb3J0IHtVc2VyUmlnaHRzfSBmcm9tICd+L01hcmtSaWdodHMvbW9kdWxlcy90eXBlcyc7XG5pbXBvcnQge2FwaX0gZnJvbSAnLi9tb2R1bGVzL2FwaSc7XG5pbXBvcnQge2Fzc2lnblBlcm1pc3Npb259IGZyb20gJy4vbW9kdWxlcy9hc3NpZ25QZXJtaXNzaW9uJztcbmltcG9ydCB7Z2V0UGVybWlzc2lvbk5hbWVzfSBmcm9tICcuL21vZHVsZXMvZ2V0UGVybWlzc2lvbk5hbWVzJztcbmltcG9ydCB7Z2V0UGVybWlzc2lvblRlbXBsYXRlfSBmcm9tICcuL21vZHVsZXMvZ2V0VGVtcGxhdGVzJztcbmltcG9ydCB7aXNzdWVUZW1wbGF0ZX0gZnJvbSAnLi9tb2R1bGVzL2lzc3VlVGVtcGxhdGUnO1xuaW1wb3J0IHttYXJrQXNEb25lfSBmcm9tICcuL21vZHVsZXMvbWFya0FzRG9uZSc7XG5kZWZpbmVPcHRpb25zKHtpbmhlcml0QXR0cnM6IGZhbHNlfSk7XG5cbmNvbnN0IHByb3BzID0gZGVmaW5lUHJvcHM8e1xuXHR1c2VyTmFtZTogc3RyaW5nO1xuXHRwZXJtaXNzaW9uOiBVc2VyUmlnaHRzO1xuXHRpbmRleDogc3RyaW5nO1xuXHRvbkNsb3NlOiAoKSA9PiB2b2lkO1xufT4oKTtcblxuY29uc3Qge3dnVUxTfSA9IHdpbmRvdztcbmNvbnN0IG9wZW4gPSByZWYodHJ1ZSk7XG5jb25zdCBzdWJtaXR0aW5nID0gcmVmKGZhbHNlKTtcbmNvbnN0IHJpZ2h0c0NoYW5nZVN1bW1hcnkgPSByZWYoJycpO1xuY29uc3QgZXhwaXJ5ID0gcmVmKCdpbmZpbml0ZScpO1xuY29uc3QgY3VzdG9tRXhwaXJ5ID0gcmVmKCcnKTtcbmNvbnN0IGNsb3NpbmdSZW1hcmtzID0gcmVmKCd7e2RvbmV9feKAlOKAlH5+fn4nKTtcbmNvbnN0IHdhdGNoVGFsa1BhZ2UgPSByZWYoZmFsc2UpO1xuY29uc3QgcmlnaHRMb2cgPSByZWYod2dVTFMoJ+iOt+WPluS4rScsICflj5blvpfkuK0nKSk7XG5cbmNvbnN0IHBlcm1pc3Npb25OYW1lID0gZ2V0UGVybWlzc2lvbk5hbWVzKHByb3BzLnBlcm1pc3Npb24pID8/ICcnO1xuY29uc3QgcGVybWlzc2lvblRlbXBsYXRlID0gZ2V0UGVybWlzc2lvblRlbXBsYXRlKHByb3BzLnBlcm1pc3Npb24pO1xuY29uc3QgbG9nVXJsID0gbXcudXRpbC5nZXRVcmwoJ1NwZWNpYWw6TG9nL3JpZ2h0cycsIHt0eXBlOiAncmlnaHRzJywgcGFnZTogYFVzZXI6JHtwcm9wcy51c2VyTmFtZX1gfSk7XG5jb25zdCBleHBpcnlJdGVtczogTWVudUl0ZW1EYXRhW10gPSBbXG5cdHt2YWx1ZTogJzEgZGF5JywgbGFiZWw6ICcx5aSpJ30sXG5cdHt2YWx1ZTogJzEgd2VlaycsIGxhYmVsOiB3Z1VMUygnMeWRqCcsICcx6YCxJyl9LFxuXHR7dmFsdWU6ICcxIG1vbnRoJywgbGFiZWw6IHdnVUxTKCcx5Liq5pyIJywgJzHlgIvmnIgnKX0sXG5cdHt2YWx1ZTogJzMgbW9udGhzJywgbGFiZWw6IHdnVUxTKCcz5Liq5pyIJywgJzPlgIvmnIgnKX0sXG5cdHt2YWx1ZTogJzYgbW9udGhzJywgbGFiZWw6IHdnVUxTKCc25Liq5pyIJywgJzblgIvmnIgnKX0sXG5cdHt2YWx1ZTogJzEgeWVhcicsIGxhYmVsOiAnMeW5tCd9LFxuXHR7dmFsdWU6ICdpbmZpbml0ZScsIGxhYmVsOiB3Z1VMUygn5rKh5pyJ5pyf6ZmQJywgJ+aykuacieacn+mZkCcpfSxcblx0e3ZhbHVlOiAnb3RoZXInLCBsYWJlbDogd2dVTFMoJ+WFtuS7luaXtumXtCcsICflhbbku5bmmYLplpMnKX0sXG5dO1xuXG5jb25zdCBsb2FkUmlnaHRMb2cgPSAoKTogdm9pZCA9PiB7XG5cdGNvbnN0IHBhcmFtczogQXBpUXVlcnlMb2dFdmVudHNQYXJhbXMgPSB7XG5cdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdGxpc3Q6ICdsb2dldmVudHMnLFxuXHRcdGxlYWN0aW9uOiAncmlnaHRzL3JpZ2h0cycsXG5cdFx0bGV0aXRsZTogYFVzZXI6JHtwcm9wcy51c2VyTmFtZX1gLFxuXHRcdGxlbGltaXQ6IDEsXG5cdH07XG5cblx0dm9pZCBhcGkuZ2V0KHBhcmFtcykuZG9uZSgoZGF0YSkgPT4ge1xuXHRcdGNvbnN0IHtsb2dldmVudHM6IGxvZ3N9ID0gZGF0YVsncXVlcnknXSBhcyB7XG5cdFx0XHRsb2dldmVudHM6IHtwYXJhbXM6IHtuZXdncm91cHM6IHN0cmluZ1tdfTsgdXNlcjogc3RyaW5nOyB0aW1lc3RhbXA6IHN0cmluZ31bXTtcblx0XHR9O1xuXHRcdGNvbnN0IGxvZyA9IGxvZ3NbMF07XG5cdFx0aWYgKCFsb2cpIHtcblx0XHRcdHJpZ2h0TG9nLnZhbHVlID0gd2dVTFMoJ+ayoeacieS7u+S9leaXpeW/lycsICfmspLmnInku7vkvZXml6XoqownKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHQvLyBAdHMtZXhwZWN0LWVycm9yIE1vcmViaXRzIGlzIHByb3ZpZGVkIGJ5IHRoZSBnYWRnZXQgcnVudGltZS5cblx0XHRjb25zdCB0aW1lc3RhbXAgPSBuZXcgTW9yZWJpdHMuZGF0ZShsb2cudGltZXN0YW1wKS5jYWxlbmRhcigpIGFzIHN0cmluZztcblx0XHRjb25zdCByaWdodHMgPSBsb2cucGFyYW1zLm5ld2dyb3Vwcy5qb2luKCfjgIEnKSB8fCB3Z1VMUygn77yI5peg77yJJywgJ++8iOeEoe+8iScpO1xuXHRcdHJpZ2h0TG9nLnZhbHVlID0gYCR7dGltZXN0YW1wfSAke2xvZy51c2VyfSR7d2dVTFMoJ+WwhueUqOaIt+e7hOaUueS4uicsICflsIfkvb/nlKjogIXnvqTntYTmlLnngronKX0ke3JpZ2h0c31gO1xuXHR9KTtcbn07XG5cbmNvbnN0IGNsb3NlID0gKCk6IHZvaWQgPT4ge1xuXHRpZiAoIXN1Ym1pdHRpbmcudmFsdWUpIHtcblx0XHRvcGVuLnZhbHVlID0gZmFsc2U7XG5cdFx0cHJvcHMub25DbG9zZSgpO1xuXHR9XG59O1xuXG5jb25zdCBzdWJtaXQgPSBhc3luYyAoKTogUHJvbWlzZTx2b2lkPiA9PiB7XG5cdGlmIChzdWJtaXR0aW5nLnZhbHVlKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0c3VibWl0dGluZy52YWx1ZSA9IHRydWU7XG5cdHRyeSB7XG5cdFx0Y29uc3QgZG9uZURhdGEgPSBhd2FpdCBtYXJrQXNEb25lKHtcblx0XHRcdHVzZXJOYW1lOiBwcm9wcy51c2VyTmFtZSxcblx0XHRcdGluZGV4OiBwcm9wcy5pbmRleCxcblx0XHRcdGNsb3NpbmdSZW1hcmtzOiBgXFxuOiR7Y2xvc2luZ1JlbWFya3MudmFsdWV9YCxcblx0XHR9KTtcblx0XHRhd2FpdCBhc3NpZ25QZXJtaXNzaW9uKHtcblx0XHRcdHVzZXJOYW1lOiBwcm9wcy51c2VyTmFtZSxcblx0XHRcdHBlcm1pc3Npb246IHByb3BzLnBlcm1pc3Npb24sXG5cdFx0XHRzdW1tYXJ5OiByaWdodHNDaGFuZ2VTdW1tYXJ5LnZhbHVlLFxuXHRcdFx0cmV2SWQ6IE51bWJlci5wYXJzZUludChkb25lRGF0YVsnZWRpdCddLm5ld3JldmlkIGFzIHN0cmluZywgMTApLFxuXHRcdFx0ZXhwaXJ5OiBleHBpcnkudmFsdWUgPT09ICdvdGhlcicgPyBjdXN0b21FeHBpcnkudmFsdWUgOiBleHBpcnkudmFsdWUsXG5cdFx0fSk7XG5cdFx0aWYgKHBlcm1pc3Npb25UZW1wbGF0ZSkge1xuXHRcdFx0YXdhaXQgaXNzdWVUZW1wbGF0ZSh7dXNlck5hbWU6IHByb3BzLnVzZXJOYW1lLCBwZXJtaXNzaW9uOiBwcm9wcy5wZXJtaXNzaW9uLCB3YXRjaDogd2F0Y2hUYWxrUGFnZS52YWx1ZX0pO1xuXHRcdH1cblx0XHRzZXRUaW1lb3V0KCgpID0+IGxvY2F0aW9uLnJlbG9hZCgpLCAxMDAwKTtcblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRzdWJtaXR0aW5nLnZhbHVlID0gZmFsc2U7XG5cdFx0dm9pZCBtdy5ub3RpZnkoU3RyaW5nKGVycm9yKSwge3RhZzogJ1VzZXJSaWdodHNNYW5hZ2VyJywgdHlwZTogJ2Vycm9yJ30pO1xuXHR9XG59O1xuXG5vbk1vdW50ZWQobG9hZFJpZ2h0TG9nKTtcbjwvc2NyaXB0PlxuXG48dGVtcGxhdGU+XG5cdDxjZHgtZGlhbG9nXG5cdFx0di1tb2RlbDpvcGVuPVwib3BlblwiXG5cdFx0OnRpdGxlPVwiYOaOiOS6iCR7cGVybWlzc2lvbk5hbWV9JHt3Z1VMUygn57uZJywgJ+e1picpfSR7dXNlck5hbWV9YFwiXG5cdFx0OnVzZS1jbG9zZS1idXR0b249XCJ0cnVlXCJcblx0XHQ6cHJpbWFyeS1hY3Rpb249XCJ7bGFiZWw6IHdnVUxTKCfmjojmnYMnLCAn5o6I5qyKJyksIGFjdGlvblR5cGU6ICdwcm9ncmVzc2l2ZScsIGRpc2FibGVkOiBzdWJtaXR0aW5nfVwiXG5cdFx0OmRlZmF1bHQtYWN0aW9uPVwie2xhYmVsOiAn5Y+W5raIJywgZGlzYWJsZWQ6IHN1Ym1pdHRpbmd9XCJcblx0XHRAcHJpbWFyeT1cInN1Ym1pdFwiXG5cdFx0QGRlZmF1bHQ9XCJjbG9zZVwiXG5cdFx0QHVwZGF0ZTpvcGVuPVwiJGV2ZW50ID09PSBmYWxzZSAmJiBjbG9zZSgpXCJcblx0PlxuXHRcdDxkaXYgY2xhc3M9XCJ1c2VyLXJpZ2h0cy1tYW5hZ2VyX19ib2R5XCI+XG5cdFx0XHQ8cCBjbGFzcz1cInVzZXItcmlnaHRzLW1hbmFnZXJfX2xvZ1wiPlxuXHRcdFx0XHQ8YSA6aHJlZj1cImxvZ1VybFwiIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIj5cblx0XHRcdFx0XHR7eyB3Z1VMUygn5pyA6L+R5p2D6ZmQ5pel5b+XJywgJ+acgOi/keasiumZkOaXpeiqjCcpIH19XG5cdFx0XHRcdDwvYT5cblx0XHRcdFx077yae3sgcmlnaHRMb2cgfX1cblx0XHRcdDwvcD5cblx0XHRcdDxjZHgtZmllbGQ+XG5cdFx0XHRcdDxsYWJlbCBmb3I9XCJ1c2VyLXJpZ2h0cy1tYW5hZ2VyLXN1bW1hcnlcIj57eyB3Z1VMUygn5o6I5p2D5Y6f5ZugJywgJ+aOiOasiuWOn+WboCcpIH19PC9sYWJlbD5cblx0XHRcdFx0PGNkeC10ZXh0LWlucHV0XG5cdFx0XHRcdFx0aWQ9XCJ1c2VyLXJpZ2h0cy1tYW5hZ2VyLXN1bW1hcnlcIlxuXHRcdFx0XHRcdHYtbW9kZWw9XCJyaWdodHNDaGFuZ2VTdW1tYXJ5XCJcblx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cIuWPr+eVmeepulwiXG5cdFx0XHRcdFx0OmRpc2FibGVkPVwic3VibWl0dGluZ1wiXG5cdFx0XHRcdC8+XG5cdFx0XHQ8L2NkeC1maWVsZD5cblx0XHRcdDxjZHgtZmllbGQ+XG5cdFx0XHRcdDxsYWJlbCBmb3I9XCJ1c2VyLXJpZ2h0cy1tYW5hZ2VyLXN1bW1hcnlcIj57eyB3Z1VMUygn5o6I5p2D5pyf6ZmQJywgJ+aOiOasiuacn+mZkCcpIH19PC9sYWJlbD5cblx0XHRcdFx0PGNkeC1zZWxlY3Qgdi1tb2RlbDpzZWxlY3RlZD1cImV4cGlyeVwiIDptZW51LWl0ZW1zPVwiZXhwaXJ5SXRlbXNcIiA6ZGlzYWJsZWQ9XCJzdWJtaXR0aW5nXCIgLz5cblx0XHRcdDwvY2R4LWZpZWxkPlxuXHRcdFx0PGNkeC1maWVsZCB2LWlmPVwiZXhwaXJ5ID09PSAnb3RoZXInXCI+XG5cdFx0XHRcdDxsYWJlbCBmb3I9XCJ1c2VyLXJpZ2h0cy1tYW5hZ2VyLWN1c3RvbS1leHBpcnlcIj57eyB3Z1VMUygn6Ieq5a6a5LmJ5pe26Ze0JywgJ+iHquioguaZgumWkycpIH19PC9sYWJlbD5cblx0XHRcdFx0PGNkeC10ZXh0LWlucHV0IGlkPVwidXNlci1yaWdodHMtbWFuYWdlci1jdXN0b20tZXhwaXJ5XCIgdi1tb2RlbD1cImN1c3RvbUV4cGlyeVwiIDpkaXNhYmxlZD1cInN1Ym1pdHRpbmdcIiAvPlxuXHRcdFx0PC9jZHgtZmllbGQ+XG5cdFx0XHQ8Y2R4LWZpZWxkPlxuXHRcdFx0XHQ8bGFiZWwgZm9yPVwidXNlci1yaWdodHMtbWFuYWdlci1yZW1hcmtzXCI+e3sgd2dVTFMoJ+WFs+mXreivt+axgueVmeiogCcsICfpl5zplonoq4vmsYLnlZnoqIAnKSB9fTwvbGFiZWw+XG5cdFx0XHRcdDxjZHgtdGV4dC1pbnB1dCBpZD1cInVzZXItcmlnaHRzLW1hbmFnZXItcmVtYXJrc1wiIHYtbW9kZWw9XCJjbG9zaW5nUmVtYXJrc1wiIDpkaXNhYmxlZD1cInN1Ym1pdHRpbmdcIiAvPlxuXHRcdFx0PC9jZHgtZmllbGQ+XG5cdFx0XHQ8Y2R4LWZpZWxkIHYtaWY9XCJwZXJtaXNzaW9uVGVtcGxhdGVcIj5cblx0XHRcdFx0PGNkeC1jaGVja2JveCB2LW1vZGVsPVwid2F0Y2hUYWxrUGFnZVwiIDpkaXNhYmxlZD1cInN1Ym1pdHRpbmdcIj5cblx0XHRcdFx0XHR7eyB3Z1VMUygn55uR6KeG55So5oi36K6o6K666aG1JywgJ+ebo+imluS9v+eUqOiAheiojuirlumggScpIH19XG5cdFx0XHRcdDwvY2R4LWNoZWNrYm94PlxuXHRcdFx0PC9jZHgtZmllbGQ+XG5cdFx0XHQ8cCB2LWlmPVwic3VibWl0dGluZ1wiIGNsYXNzPVwidXNlci1yaWdodHMtbWFuYWdlcl9fc3RhdHVzXCI+e3sgd2dVTFMoJ+WkhOeQhuS4reKApuKApicsICfomZXnkIbkuK3igKbigKYnKSB9fTwvcD5cblx0XHQ8L2Rpdj5cblx0PC9jZHgtZGlhbG9nPlxuPC90ZW1wbGF0ZT5cblxuPHN0eWxlIHNjb3BlZCBsYW5nPVwibGVzc1wiPlxuLnVzZXItcmlnaHRzLW1hbmFnZXJfX2JvZHkge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRnYXA6IDAuNzVyZW07XG5cdG1pbi13aWR0aDogbWluKDg1dncsIDI1cmVtKTtcbn1cblxuLnVzZXItcmlnaHRzLW1hbmFnZXJfX2xvZyxcbi51c2VyLXJpZ2h0cy1tYW5hZ2VyX19zdGF0dXMge1xuXHRtYXJnaW46IDA7XG59XG48L3N0eWxlPlxuIiwgIntcblx0XCJ1c2VyUmlnaHRzTWFuYWdlclN1bW1hcnlcIjogXCLvvIhbW01lZGlhV2lraTpHYWRnZXQtVXNlclJpZ2h0c01hbmFnZXIuanN8VXNlclJpZ2h0c01hbmFnZXJdXe+8iVwiLFxuXHRcInZlcnNpb25cIjogXCIyLjBcIlxufVxuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7aW5pdE13QXBpfSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG5jb25zdCBhcGk6IG13LkFwaSA9IGluaXRNd0FwaShgVXNlclJpZ2h0c01hbmFnZXIvJHtPUFRJT05TLnZlcnNpb259YCk7XG5cbmV4cG9ydCB7YXBpfTtcbiIsICJpbXBvcnQgdHlwZSB7VXNlclJpZ2h0c30gZnJvbSAnfi9NYXJrUmlnaHRzL21vZHVsZXMvdHlwZXMnO1xuXG5jb25zdCBnZXRQZXJtaXNzaW9uTmFtZXMgPSAocGVybWlzc2lvbjogVXNlclJpZ2h0cyk6IHN0cmluZyB8IG51bGwgPT4ge1xuXHRjb25zdCBwZXJtaXNzaW9uTmFtZXMgPSB7XG5cdFx0cGF0cm9sbGVyOiAn5beh5p+l5ZGYJyxcblx0XHRhdXRvcmV2aWV3ZXI6ICflt6Hmn6XosYHlhY3ogIUnLFxuXHRcdGNvbmZpcm1lZDogJ+ehruiupOeUqOaItycsXG5cdFx0J21hc3NtZXNzYWdlLXNlbmRlcic6ICflpKfph4/mtojmga/lj5HpgIHogIUnLFxuXHRcdGV2ZW50c3BvbnNvcjogJ+a0u+WKqOe7hOe7h+iAhScsXG5cdFx0dHJhbnN3aWtpOiAn5a+85YWl6ICFJyxcblx0XHR0ZW1wbGF0ZWVkaXRvcjogJ+aooeadv+e8lui+keWRmCcsXG5cdFx0Ym90OiAn5py65Zmo5Lq6Jyxcblx0XHQncm5yc3ZlcmlmeS1leGVtcHQnOiAn5omL5py65Y+36aqM6K+B6LGB5YWNJyxcblx0XHQnaXBibG9jay1leGVtcHQnOiAnSVDlsIHnpoHosYHlhY0nLFxuXHR9IGFzIGNvbnN0IHNhdGlzZmllcyBQYXJ0aWFsPFJlY29yZDxVc2VyUmlnaHRzLCBzdHJpbmc+PjtcblxuXHRsZXQgcGVybWlzc2lvbk5hbWU6IHN0cmluZyB8IG51bGwgPSBudWxsO1xuXHRmb3IgKGNvbnN0IFtyaWdodCwgbmFtZV0gb2YgT2JqZWN0LmVudHJpZXMocGVybWlzc2lvbk5hbWVzKSkge1xuXHRcdGlmIChwZXJtaXNzaW9uID09PSByaWdodCkge1xuXHRcdFx0cGVybWlzc2lvbk5hbWUgPSBuYW1lO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gcGVybWlzc2lvbk5hbWU7XG59O1xuXG5leHBvcnQge2dldFBlcm1pc3Npb25OYW1lc307XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtVc2VyUmlnaHRzfSBmcm9tICd+L01hcmtSaWdodHMvbW9kdWxlcy90eXBlcyc7XG5pbXBvcnQge2FwaX0gZnJvbSAnLi9hcGknO1xuaW1wb3J0IHtnZXRQZXJtaXNzaW9uTmFtZXN9IGZyb20gJy4vZ2V0UGVybWlzc2lvbk5hbWVzJztcblxuY29uc3QgYXNzaWduUGVybWlzc2lvbiA9ICh7XG5cdHVzZXJOYW1lLFxuXHRwZXJtaXNzaW9uLFxuXHRzdW1tYXJ5LFxuXHRyZXZJZCxcblx0ZXhwaXJ5LFxufToge1xuXHR1c2VyTmFtZTogc3RyaW5nO1xuXHRwZXJtaXNzaW9uOiBVc2VyUmlnaHRzO1xuXHRzdW1tYXJ5OiBzdHJpbmc7XG5cdHJldklkOiBudW1iZXI7XG5cdGV4cGlyeTogc3RyaW5nO1xufSkgPT4ge1xuXHRjb25zdCBwZXJtYUxpbmsgPSBgW1tTcGVjaWFsOlBlcm1hTGluay8ke3JldklkfSNVc2VyOiR7dXNlck5hbWV9fOadg+mZkOeUs+ivt11dYDtcblx0bGV0IGZ1bGxTdW1tYXJ5ID0gYCske2dldFBlcm1pc3Npb25OYW1lcyhwZXJtaXNzaW9uKX3vvJske3Blcm1hTGlua31gO1xuXHRpZiAoc3VtbWFyeSAhPT0gJycpIHtcblx0XHRmdWxsU3VtbWFyeSArPSBg77ybJHtzdW1tYXJ5fWA7XG5cdH1cblx0ZnVsbFN1bW1hcnkgKz0gT1BUSU9OUy51c2VyUmlnaHRzTWFuYWdlclN1bW1hcnk7XG5cdGNvbnN0IHBhcmFtczogQXBpVXNlcnJpZ2h0c1BhcmFtcyA9IHtcblx0XHRhY3Rpb246ICd1c2VycmlnaHRzJyxcblx0XHR1c2VyOiB1c2VyTmFtZS5yZXBsYWNlKC8gL2csICdfJyksXG5cdFx0cmVhc29uOiBmdWxsU3VtbWFyeSxcblx0XHRhZGQ6IFtwZXJtaXNzaW9uXSxcblx0XHRleHBpcnk6IGV4cGlyeSA9PT0gJycgPyAnaW5maW5pdHknIDogZXhwaXJ5LFxuXHR9O1xuXHRpZiAocGVybWlzc2lvbiA9PT0gJ3BhdHJvbGxlcicgJiYgZXhwaXJ5ID09PSAnaW5maW5pdGUnKSB7XG5cdFx0cGFyYW1zLnJlbW92ZSA9ICdhdXRvcmV2aWV3ZXInO1xuXHR9XG5cdHJldHVybiBhcGkucG9zdFdpdGhUb2tlbigndXNlcnJpZ2h0cycsIHBhcmFtcyk7XG59O1xuXG5leHBvcnQge2Fzc2lnblBlcm1pc3Npb259O1xuIiwgImltcG9ydCB0eXBlIHtVc2VyUmlnaHRzfSBmcm9tICd+L01hcmtSaWdodHMvbW9kdWxlcy90eXBlcyc7XG5cbmNvbnN0IGdldFBlcm1pc3Npb25UZW1wbGF0ZSA9IChwZXJtaXNzaW9uOiBVc2VyUmlnaHRzKTogc3RyaW5nIHwgbnVsbCA9PiB7XG5cdGNvbnN0IHBlcm1pc3Npb25UZW1wbGF0ZXMgPSB7XG5cdFx0cGF0cm9sbGVyOiAnUGF0cm9sIGdyYW50ZWQnLFxuXHRcdGF1dG9yZXZpZXdlcjogJ0F1dG9wYXRyb2wgZ3JhbnRlZCcsXG5cdFx0J21hc3NtZXNzYWdlLXNlbmRlcic6ICdNTVMgZ3JhbnRlZCcsXG5cdFx0dGVtcGxhdGVlZGl0b3I6ICdUZW1wbGF0ZSBlZGl0b3IgZ3JhbnRlZCcsXG5cdFx0dHJhbnN3aWtpOiAnVHJhbnN3aWtpIGdyYW50ZWQnLFxuXHR9IGFzIGNvbnN0IHNhdGlzZmllcyBQYXJ0aWFsPFJlY29yZDxVc2VyUmlnaHRzLCBzdHJpbmc+PjtcblxuXHRsZXQgdGVtcGxhdGU6IHN0cmluZyB8IG51bGwgPSBudWxsO1xuXHRmb3IgKGNvbnN0IFtwYWdlUGVybWlzc2lvbiwgdGVtcGxhdGVOYW1lXSBvZiBPYmplY3QuZW50cmllcyhwZXJtaXNzaW9uVGVtcGxhdGVzKSkge1xuXHRcdGlmIChwZXJtaXNzaW9uID09PSBwYWdlUGVybWlzc2lvbikge1xuXHRcdFx0dGVtcGxhdGUgPSB0ZW1wbGF0ZU5hbWU7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiB0ZW1wbGF0ZTtcbn07XG5cbmV4cG9ydCB7Z2V0UGVybWlzc2lvblRlbXBsYXRlfTtcbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge1VzZXJSaWdodHN9IGZyb20gJ34vTWFya1JpZ2h0cy9tb2R1bGVzL3R5cGVzJztcbmltcG9ydCB7YXBpfSBmcm9tICcuL2FwaSc7XG5pbXBvcnQge2dldFBlcm1pc3Npb25OYW1lc30gZnJvbSAnLi9nZXRQZXJtaXNzaW9uTmFtZXMnO1xuaW1wb3J0IHtnZXRQZXJtaXNzaW9uVGVtcGxhdGV9IGZyb20gJy4vZ2V0VGVtcGxhdGVzJztcblxuY29uc3QgaXNzdWVUZW1wbGF0ZSA9ICh7XG5cdHVzZXJOYW1lLFxuXHRwZXJtaXNzaW9uLFxuXHR3YXRjaCxcbn06IHtcblx0dXNlck5hbWU6IHN0cmluZztcblx0cGVybWlzc2lvbjogVXNlclJpZ2h0cztcblx0d2F0Y2g6IGJvb2xlYW4gfCAnd2F0Y2gnIHwgJ3Vud2F0Y2gnO1xufSkgPT4ge1xuXHRjb25zdCBwZXJtaXNzaW9uVGVtcGxhdGUgPSBnZXRQZXJtaXNzaW9uVGVtcGxhdGUocGVybWlzc2lvbik7XG5cdGlmICghcGVybWlzc2lvblRlbXBsYXRlKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgcGVybWlzc2lvbk5hbWUgPSBnZXRQZXJtaXNzaW9uTmFtZXMocGVybWlzc2lvbik7XG5cdGNvbnN0IHRhbGtQYWdlID0gYFVzZXIgdGFsazoke3VzZXJOYW1lLnJlcGxhY2UoLyAvZywgJ18nKX1gO1xuXHRjb25zdCBwYXJhbXM6IEFwaUVkaXRQYWdlUGFyYW1zID0ge1xuXHRcdGFjdGlvbjogJ2VkaXQnLFxuXHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdHRpdGxlOiB0YWxrUGFnZSxcblx0XHRhcHBlbmR0ZXh0OiAnXFxuXFxue3snLmNvbmNhdCgnc3Vic3Q6JywgcGVybWlzc2lvblRlbXBsYXRlLCAnfX0nKSxcblx0XHRzdW1tYXJ5OiBg5qC55o2u5YWx6K+G5o6I5LqIJHtwZXJtaXNzaW9uTmFtZX0ke09QVElPTlMudXNlclJpZ2h0c01hbmFnZXJTdW1tYXJ5fWAsXG5cdFx0d2F0Y2hsaXN0OiB3YXRjaCA/ICd3YXRjaCcgOiAndW53YXRjaCcsXG5cdH07XG5cdHJldHVybiBhcGkucG9zdFdpdGhFZGl0VG9rZW4ocGFyYW1zKTtcbn07XG5cbmV4cG9ydCB7aXNzdWVUZW1wbGF0ZX07XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHthcGl9IGZyb20gJy4vYXBpJztcbmNvbnN0IHRhZ0xpbmUgPSBPUFRJT05TLnVzZXJSaWdodHNNYW5hZ2VyU3VtbWFyeTtcblxuY29uc3QgcXVlcnlSZXZpc2lvbnMgPSBhc3luYyAodGl0bGVzOiBzdHJpbmcgfCBzdHJpbmdbXSwgcnZzZWN0aW9uOiBzdHJpbmcpID0+IHtcblx0Y29uc3QgcGFyYW1zOiBBcGlRdWVyeVJldmlzaW9uc1BhcmFtcyA9IHtcblx0XHR0aXRsZXMsXG5cdFx0cnZzZWN0aW9uLFxuXHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0cHJvcDogJ3JldmlzaW9ucycsXG5cdFx0Y3VydGltZXN0YW1wOiB0cnVlLFxuXHRcdHJ2cHJvcDogWydjb250ZW50JywgJ3RpbWVzdGFtcCddLFxuXHRcdHJ2c2xvdHM6ICdtYWluJyxcblx0fTtcblxuXHRyZXR1cm4gYXdhaXQgYXBpLmdldChwYXJhbXMpO1xufTtcblxuY29uc3QgbWFya0FzRG9uZSA9ICh7dXNlck5hbWUsIGluZGV4LCBjbG9zaW5nUmVtYXJrc306IHt1c2VyTmFtZTogc3RyaW5nOyBpbmRleDogc3RyaW5nOyBjbG9zaW5nUmVtYXJrczogc3RyaW5nfSkgPT4ge1xuXHRjb25zdCB7d2dQYWdlTmFtZSwgd2dVc2VyTmFtZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cdGNvbnN0IHNlY3Rpb25Ob2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG5cdFx0YFVzZXI6JHt1c2VyTmFtZS5yZXBsYWNlKC9cIi9nLCAnLjIyJykucmVwbGFjZSgvIC9nLCAnXycpfSR7aW5kZXggPz8gJyd9YFxuXHQpO1xuXG5cdGNvbnN0IHNlY3Rpb25OdW1iZXIgPSAoXG5cdFx0KFxuXHRcdFx0JChzZWN0aW9uTm9kZSBhcyBIVE1MRWxlbWVudClcblx0XHRcdFx0LnNpYmxpbmdzKCcubXctZWRpdHNlY3Rpb24nKVxuXHRcdFx0XHQuZmluZCgnYTpub3QoLm13LWVkaXRzZWN0aW9uLXZpc3VhbGVkaXRvcilbaHJlZio9ZWRpdF0nKVxuXHRcdFx0XHQucHJvcCgnaHJlZicpIGFzIHN0cmluZ1xuXHRcdCkubWF0Y2goL3NlY3Rpb249KFxcZCspLykgYXMgUmVnRXhwTWF0Y2hBcnJheVxuXHQpWzFdIGFzIHN0cmluZztcblxuXHRsZXQgYmFzZXRpbWVzdGFtcDogc3RyaW5nO1xuXHRsZXQgY3VydGltZXN0YW1wOiBzdHJpbmc7XG5cdGxldCBjb250ZW50OiBzdHJpbmc7XG5cdGxldCByZXZpc2lvbjtcblxuXHRyZXR1cm4gcXVlcnlSZXZpc2lvbnMod2dQYWdlTmFtZSwgc2VjdGlvbk51bWJlcilcblx0XHQudGhlbigoZGF0YSkgPT4ge1xuXHRcdFx0aWYgKCFkYXRhWydxdWVyeSddIHx8ICFkYXRhWydxdWVyeSddLnBhZ2VzKSB7XG5cdFx0XHRcdHJldHVybiAkLkRlZmVycmVkKCkucmVqZWN0KCd1bmtub3duJyk7XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IHtwYWdlc30gPSBkYXRhWydxdWVyeSddIGFzIHtcblx0XHRcdFx0cGFnZXM6IHtcblx0XHRcdFx0XHRpbnZhbGlkPzogYm9vbGVhbjtcblx0XHRcdFx0XHRtaXNzaW5nPzogYm9vbGVhbjtcblx0XHRcdFx0XHRyZXZpc2lvbnM6IHtcblx0XHRcdFx0XHRcdHRpbWVzdGFtcDogc3RyaW5nO1xuXHRcdFx0XHRcdFx0c2xvdHM6IHtcblx0XHRcdFx0XHRcdFx0bWFpbjoge1xuXHRcdFx0XHRcdFx0XHRcdGNvbnRlbnQ6IHN0cmluZztcblx0XHRcdFx0XHRcdFx0fTtcblx0XHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0fVtdO1xuXHRcdFx0XHR9W107XG5cdFx0XHR9O1xuXHRcdFx0Y29uc3QgW3BhZ2VdID0gcGFnZXM7XG5cblx0XHRcdGlmICghcGFnZSB8fCBwYWdlLmludmFsaWQpIHtcblx0XHRcdFx0cmV0dXJuICQuRGVmZXJyZWQoKS5yZWplY3QoJ2ludmFsaWR0aXRsZScpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAocGFnZS5taXNzaW5nKSB7XG5cdFx0XHRcdHJldHVybiAkLkRlZmVycmVkKCkucmVqZWN0KCdub2NyZWF0ZS1taXNzaW5nJyk7XG5cdFx0XHR9XG5cblx0XHRcdFtyZXZpc2lvbl0gPSBwYWdlLnJldmlzaW9ucztcblx0XHRcdGlmIChyZXZpc2lvbikge1xuXHRcdFx0XHQoe1xuXHRcdFx0XHRcdHNsb3RzOiB7XG5cdFx0XHRcdFx0XHRtYWluOiB7Y29udGVudH0sXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR0aW1lc3RhbXA6IGJhc2V0aW1lc3RhbXAsXG5cdFx0XHRcdH0gPSByZXZpc2lvbik7XG5cdFx0XHR9XG5cdFx0XHRjdXJ0aW1lc3RhbXAgPSBkYXRhWydjdXJ0aW1lc3RhbXAnXSBhcyBzdHJpbmc7XG5cdFx0XHRyZXR1cm4gJC5EZWZlcnJlZCgpLnJlc29sdmUoKTtcblx0XHR9KVxuXHRcdC50aGVuKCgpID0+IHtcblx0XHRcdGNvbnRlbnQgPSBjb250ZW50LnRyaW0oKTtcblx0XHRcdGNvbnRlbnQgPSBjb250ZW50LnJlcGxhY2UoLyg6XFxzKnt7U3RhdHVzKShcXHwuKj8pP319L2ksICckMXwrfX0nKTtcblx0XHRcdGNvbnRlbnQgKz0gY2xvc2luZ1JlbWFya3M7XG5cblx0XHRcdGNvbnN0IGVkaXRQYXJhbXM6IEFwaUVkaXRQYWdlUGFyYW1zID0ge1xuXHRcdFx0XHRhY3Rpb246ICdlZGl0Jyxcblx0XHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRcdFx0dGl0bGU6IHdnUGFnZU5hbWUsXG5cdFx0XHRcdHNlY3Rpb246IHNlY3Rpb25OdW1iZXIsXG5cdFx0XHRcdHRleHQ6IGNvbnRlbnQsXG5cdFx0XHRcdHN1bW1hcnk6IGAvKiBVc2VyOiR7dXNlck5hbWV9ICovIOWujOaIkCR7dGFnTGluZX1gLFxuXHRcdFx0XHRiYXNldGltZXN0YW1wLFxuXHRcdFx0XHRzdGFydHRpbWVzdGFtcDogY3VydGltZXN0YW1wLFxuXHRcdFx0XHRub2NyZWF0ZTogdHJ1ZSxcblx0XHRcdH07XG5cdFx0XHRpZiAod2dVc2VyTmFtZSkge1xuXHRcdFx0XHRlZGl0UGFyYW1zLmFzc2VydCA9ICd1c2VyJztcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIGFwaS5wb3N0V2l0aEVkaXRUb2tlbihlZGl0UGFyYW1zKTtcblx0XHR9KTtcbn07XG5cbmV4cG9ydCB7bWFya0FzRG9uZX07XG4iLCAiaW1wb3J0IHsgdG9EaXNwbGF5U3RyaW5nIGFzIF90b0Rpc3BsYXlTdHJpbmcsIGNyZWF0ZUVsZW1lbnRWTm9kZSBhcyBfY3JlYXRlRWxlbWVudFZOb2RlLCBjcmVhdGVUZXh0Vk5vZGUgYXMgX2NyZWF0ZVRleHRWTm9kZSwgY3JlYXRlVk5vZGUgYXMgX2NyZWF0ZVZOb2RlLCB3aXRoQ3R4IGFzIF93aXRoQ3R4LCBvcGVuQmxvY2sgYXMgX29wZW5CbG9jaywgY3JlYXRlQmxvY2sgYXMgX2NyZWF0ZUJsb2NrLCBjcmVhdGVDb21tZW50Vk5vZGUgYXMgX2NyZWF0ZUNvbW1lbnRWTm9kZSwgY3JlYXRlRWxlbWVudEJsb2NrIGFzIF9jcmVhdGVFbGVtZW50QmxvY2sgfSBmcm9tIFwidnVlXCJcblxuY29uc3QgX2hvaXN0ZWRfMSA9IHsgY2xhc3M6IFwidXNlci1yaWdodHMtbWFuYWdlcl9fYm9keVwiIH1cbmNvbnN0IF9ob2lzdGVkXzIgPSB7IGNsYXNzOiBcInVzZXItcmlnaHRzLW1hbmFnZXJfX2xvZ1wiIH1cbmNvbnN0IF9ob2lzdGVkXzMgPSBbXCJocmVmXCJdXG5jb25zdCBfaG9pc3RlZF80ID0geyBmb3I6IFwidXNlci1yaWdodHMtbWFuYWdlci1zdW1tYXJ5XCIgfVxuY29uc3QgX2hvaXN0ZWRfNSA9IHsgZm9yOiBcInVzZXItcmlnaHRzLW1hbmFnZXItc3VtbWFyeVwiIH1cbmNvbnN0IF9ob2lzdGVkXzYgPSB7IGZvcjogXCJ1c2VyLXJpZ2h0cy1tYW5hZ2VyLWN1c3RvbS1leHBpcnlcIiB9XG5jb25zdCBfaG9pc3RlZF83ID0geyBmb3I6IFwidXNlci1yaWdodHMtbWFuYWdlci1yZW1hcmtzXCIgfVxuY29uc3QgX2hvaXN0ZWRfOCA9IHtcbiAga2V5OiAyLFxuICBjbGFzczogXCJ1c2VyLXJpZ2h0cy1tYW5hZ2VyX19zdGF0dXNcIlxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyKF9jdHgsIF9jYWNoZSwgJHByb3BzLCAkc2V0dXAsICRkYXRhLCAkb3B0aW9ucykge1xuICByZXR1cm4gKF9vcGVuQmxvY2soKSwgX2NyZWF0ZUJsb2NrKCRzZXR1cFtcIkNkeERpYWxvZ1wiXSwge1xuICAgIG9wZW46ICRzZXR1cC5vcGVuLFxuICAgIFwib25VcGRhdGU6b3BlblwiOiBbXG4gICAgICBfY2FjaGVbNV0gfHwgKF9jYWNoZVs1XSA9ICRldmVudCA9PiAoKCRzZXR1cC5vcGVuKSA9ICRldmVudCkpLFxuICAgICAgX2NhY2hlWzZdIHx8IChfY2FjaGVbNl0gPSAkZXZlbnQgPT4gKCRldmVudCA9PT0gZmFsc2UgJiYgJHNldHVwLmNsb3NlKCkpKVxuICAgIF0sXG4gICAgdGl0bGU6IGDmjojkuogkeyRzZXR1cC5wZXJtaXNzaW9uTmFtZX0keyRzZXR1cC53Z1VMUygn57uZJywgJ+e1picpfSR7JHByb3BzLnVzZXJOYW1lfWAsXG4gICAgXCJ1c2UtY2xvc2UtYnV0dG9uXCI6IHRydWUsXG4gICAgXCJwcmltYXJ5LWFjdGlvblwiOiB7bGFiZWw6ICRzZXR1cC53Z1VMUygn5o6I5p2DJywgJ+aOiOasiicpLCBhY3Rpb25UeXBlOiAncHJvZ3Jlc3NpdmUnLCBkaXNhYmxlZDogJHNldHVwLnN1Ym1pdHRpbmd9LFxuICAgIFwiZGVmYXVsdC1hY3Rpb25cIjoge2xhYmVsOiAn5Y+W5raIJywgZGlzYWJsZWQ6ICRzZXR1cC5zdWJtaXR0aW5nfSxcbiAgICBvblByaW1hcnk6ICRzZXR1cC5zdWJtaXQsXG4gICAgb25EZWZhdWx0OiAkc2V0dXAuY2xvc2VcbiAgfSwge1xuICAgIGRlZmF1bHQ6IF93aXRoQ3R4KCgpID0+IFtcbiAgICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJkaXZcIiwgX2hvaXN0ZWRfMSwgW1xuICAgICAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwicFwiLCBfaG9pc3RlZF8yLCBbXG4gICAgICAgICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcImFcIiwge1xuICAgICAgICAgICAgaHJlZjogJHNldHVwLmxvZ1VybCxcbiAgICAgICAgICAgIHRhcmdldDogXCJfYmxhbmtcIixcbiAgICAgICAgICAgIHJlbDogXCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgICB9LCBfdG9EaXNwbGF5U3RyaW5nKCRzZXR1cC53Z1VMUygn5pyA6L+R5p2D6ZmQ5pel5b+XJywgJ+acgOi/keasiumZkOaXpeiqjCcpKSwgOSAvKiBURVhULCBQUk9QUyAqLywgX2hvaXN0ZWRfMyksXG4gICAgICAgICAgX2NyZWF0ZVRleHRWTm9kZShcIiDvvJpcIiArIF90b0Rpc3BsYXlTdHJpbmcoJHNldHVwLnJpZ2h0TG9nKSwgMSAvKiBURVhUICovKVxuICAgICAgICBdKSxcbiAgICAgICAgX2NyZWF0ZVZOb2RlKCRzZXR1cFtcIkNkeEZpZWxkXCJdLCBudWxsLCB7XG4gICAgICAgICAgZGVmYXVsdDogX3dpdGhDdHgoKCkgPT4gW1xuICAgICAgICAgICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcImxhYmVsXCIsIF9ob2lzdGVkXzQsIF90b0Rpc3BsYXlTdHJpbmcoJHNldHVwLndnVUxTKCfmjojmnYPljp/lm6AnLCAn5o6I5qyK5Y6f5ZugJykpLCAxIC8qIFRFWFQgKi8pLFxuICAgICAgICAgICAgX2NyZWF0ZVZOb2RlKCRzZXR1cFtcIkNkeFRleHRJbnB1dFwiXSwge1xuICAgICAgICAgICAgICBpZDogXCJ1c2VyLXJpZ2h0cy1tYW5hZ2VyLXN1bW1hcnlcIixcbiAgICAgICAgICAgICAgbW9kZWxWYWx1ZTogJHNldHVwLnJpZ2h0c0NoYW5nZVN1bW1hcnksXG4gICAgICAgICAgICAgIFwib25VcGRhdGU6bW9kZWxWYWx1ZVwiOiBfY2FjaGVbMF0gfHwgKF9jYWNoZVswXSA9ICRldmVudCA9PiAoKCRzZXR1cC5yaWdodHNDaGFuZ2VTdW1tYXJ5KSA9ICRldmVudCkpLFxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCLlj6/nlZnnqbpcIixcbiAgICAgICAgICAgICAgZGlzYWJsZWQ6ICRzZXR1cC5zdWJtaXR0aW5nXG4gICAgICAgICAgICB9LCBudWxsLCA4IC8qIFBST1BTICovLCBbXCJtb2RlbFZhbHVlXCIsIFwiZGlzYWJsZWRcIl0pXG4gICAgICAgICAgXSksXG4gICAgICAgICAgXzogMSAvKiBTVEFCTEUgKi9cbiAgICAgICAgfSksXG4gICAgICAgIF9jcmVhdGVWTm9kZSgkc2V0dXBbXCJDZHhGaWVsZFwiXSwgbnVsbCwge1xuICAgICAgICAgIGRlZmF1bHQ6IF93aXRoQ3R4KCgpID0+IFtcbiAgICAgICAgICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJsYWJlbFwiLCBfaG9pc3RlZF81LCBfdG9EaXNwbGF5U3RyaW5nKCRzZXR1cC53Z1VMUygn5o6I5p2D5pyf6ZmQJywgJ+aOiOasiuacn+mZkCcpKSwgMSAvKiBURVhUICovKSxcbiAgICAgICAgICAgIF9jcmVhdGVWTm9kZSgkc2V0dXBbXCJDZHhTZWxlY3RcIl0sIHtcbiAgICAgICAgICAgICAgc2VsZWN0ZWQ6ICRzZXR1cC5leHBpcnksXG4gICAgICAgICAgICAgIFwib25VcGRhdGU6c2VsZWN0ZWRcIjogX2NhY2hlWzFdIHx8IChfY2FjaGVbMV0gPSAkZXZlbnQgPT4gKCgkc2V0dXAuZXhwaXJ5KSA9ICRldmVudCkpLFxuICAgICAgICAgICAgICBcIm1lbnUtaXRlbXNcIjogJHNldHVwLmV4cGlyeUl0ZW1zLFxuICAgICAgICAgICAgICBkaXNhYmxlZDogJHNldHVwLnN1Ym1pdHRpbmdcbiAgICAgICAgICAgIH0sIG51bGwsIDggLyogUFJPUFMgKi8sIFtcInNlbGVjdGVkXCIsIFwiZGlzYWJsZWRcIl0pXG4gICAgICAgICAgXSksXG4gICAgICAgICAgXzogMSAvKiBTVEFCTEUgKi9cbiAgICAgICAgfSksXG4gICAgICAgICgkc2V0dXAuZXhwaXJ5ID09PSAnb3RoZXInKVxuICAgICAgICAgID8gKF9vcGVuQmxvY2soKSwgX2NyZWF0ZUJsb2NrKCRzZXR1cFtcIkNkeEZpZWxkXCJdLCB7IGtleTogMCB9LCB7XG4gICAgICAgICAgICAgIGRlZmF1bHQ6IF93aXRoQ3R4KCgpID0+IFtcbiAgICAgICAgICAgICAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwibGFiZWxcIiwgX2hvaXN0ZWRfNiwgX3RvRGlzcGxheVN0cmluZygkc2V0dXAud2dVTFMoJ+iHquWumuS5ieaXtumXtCcsICfoh6roqILmmYLplpMnKSksIDEgLyogVEVYVCAqLyksXG4gICAgICAgICAgICAgICAgX2NyZWF0ZVZOb2RlKCRzZXR1cFtcIkNkeFRleHRJbnB1dFwiXSwge1xuICAgICAgICAgICAgICAgICAgaWQ6IFwidXNlci1yaWdodHMtbWFuYWdlci1jdXN0b20tZXhwaXJ5XCIsXG4gICAgICAgICAgICAgICAgICBtb2RlbFZhbHVlOiAkc2V0dXAuY3VzdG9tRXhwaXJ5LFxuICAgICAgICAgICAgICAgICAgXCJvblVwZGF0ZTptb2RlbFZhbHVlXCI6IF9jYWNoZVsyXSB8fCAoX2NhY2hlWzJdID0gJGV2ZW50ID0+ICgoJHNldHVwLmN1c3RvbUV4cGlyeSkgPSAkZXZlbnQpKSxcbiAgICAgICAgICAgICAgICAgIGRpc2FibGVkOiAkc2V0dXAuc3VibWl0dGluZ1xuICAgICAgICAgICAgICAgIH0sIG51bGwsIDggLyogUFJPUFMgKi8sIFtcIm1vZGVsVmFsdWVcIiwgXCJkaXNhYmxlZFwiXSlcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF86IDEgLyogU1RBQkxFICovXG4gICAgICAgICAgICB9KSlcbiAgICAgICAgICA6IF9jcmVhdGVDb21tZW50Vk5vZGUoXCJ2LWlmXCIsIHRydWUpLFxuICAgICAgICBfY3JlYXRlVk5vZGUoJHNldHVwW1wiQ2R4RmllbGRcIl0sIG51bGwsIHtcbiAgICAgICAgICBkZWZhdWx0OiBfd2l0aEN0eCgoKSA9PiBbXG4gICAgICAgICAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwibGFiZWxcIiwgX2hvaXN0ZWRfNywgX3RvRGlzcGxheVN0cmluZygkc2V0dXAud2dVTFMoJ+WFs+mXreivt+axgueVmeiogCcsICfpl5zplonoq4vmsYLnlZnoqIAnKSksIDEgLyogVEVYVCAqLyksXG4gICAgICAgICAgICBfY3JlYXRlVk5vZGUoJHNldHVwW1wiQ2R4VGV4dElucHV0XCJdLCB7XG4gICAgICAgICAgICAgIGlkOiBcInVzZXItcmlnaHRzLW1hbmFnZXItcmVtYXJrc1wiLFxuICAgICAgICAgICAgICBtb2RlbFZhbHVlOiAkc2V0dXAuY2xvc2luZ1JlbWFya3MsXG4gICAgICAgICAgICAgIFwib25VcGRhdGU6bW9kZWxWYWx1ZVwiOiBfY2FjaGVbM10gfHwgKF9jYWNoZVszXSA9ICRldmVudCA9PiAoKCRzZXR1cC5jbG9zaW5nUmVtYXJrcykgPSAkZXZlbnQpKSxcbiAgICAgICAgICAgICAgZGlzYWJsZWQ6ICRzZXR1cC5zdWJtaXR0aW5nXG4gICAgICAgICAgICB9LCBudWxsLCA4IC8qIFBST1BTICovLCBbXCJtb2RlbFZhbHVlXCIsIFwiZGlzYWJsZWRcIl0pXG4gICAgICAgICAgXSksXG4gICAgICAgICAgXzogMSAvKiBTVEFCTEUgKi9cbiAgICAgICAgfSksXG4gICAgICAgICgkc2V0dXAucGVybWlzc2lvblRlbXBsYXRlKVxuICAgICAgICAgID8gKF9vcGVuQmxvY2soKSwgX2NyZWF0ZUJsb2NrKCRzZXR1cFtcIkNkeEZpZWxkXCJdLCB7IGtleTogMSB9LCB7XG4gICAgICAgICAgICAgIGRlZmF1bHQ6IF93aXRoQ3R4KCgpID0+IFtcbiAgICAgICAgICAgICAgICBfY3JlYXRlVk5vZGUoJHNldHVwW1wiQ2R4Q2hlY2tib3hcIl0sIHtcbiAgICAgICAgICAgICAgICAgIG1vZGVsVmFsdWU6ICRzZXR1cC53YXRjaFRhbGtQYWdlLFxuICAgICAgICAgICAgICAgICAgXCJvblVwZGF0ZTptb2RlbFZhbHVlXCI6IF9jYWNoZVs0XSB8fCAoX2NhY2hlWzRdID0gJGV2ZW50ID0+ICgoJHNldHVwLndhdGNoVGFsa1BhZ2UpID0gJGV2ZW50KSksXG4gICAgICAgICAgICAgICAgICBkaXNhYmxlZDogJHNldHVwLnN1Ym1pdHRpbmdcbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICBkZWZhdWx0OiBfd2l0aEN0eCgoKSA9PiBbXG4gICAgICAgICAgICAgICAgICAgIF9jcmVhdGVUZXh0Vk5vZGUoX3RvRGlzcGxheVN0cmluZygkc2V0dXAud2dVTFMoJ+ebkeinhueUqOaIt+iuqOiuuumhtScsICfnm6Poppbkvb/nlKjogIXoqI7oq5bpoIEnKSksIDEgLyogVEVYVCAqLylcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgXzogMSAvKiBTVEFCTEUgKi9cbiAgICAgICAgICAgICAgICB9LCA4IC8qIFBST1BTICovLCBbXCJtb2RlbFZhbHVlXCIsIFwiZGlzYWJsZWRcIl0pXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfOiAxIC8qIFNUQUJMRSAqL1xuICAgICAgICAgICAgfSkpXG4gICAgICAgICAgOiBfY3JlYXRlQ29tbWVudFZOb2RlKFwidi1pZlwiLCB0cnVlKSxcbiAgICAgICAgKCRzZXR1cC5zdWJtaXR0aW5nKVxuICAgICAgICAgID8gKF9vcGVuQmxvY2soKSwgX2NyZWF0ZUVsZW1lbnRCbG9jayhcInBcIiwgX2hvaXN0ZWRfOCwgX3RvRGlzcGxheVN0cmluZygkc2V0dXAud2dVTFMoJ+WkhOeQhuS4reKApuKApicsICfomZXnkIbkuK3igKbigKYnKSksIDEgLyogVEVYVCAqLykpXG4gICAgICAgICAgOiBfY3JlYXRlQ29tbWVudFZOb2RlKFwidi1pZlwiLCB0cnVlKVxuICAgICAgXSlcbiAgICBdKSxcbiAgICBfOiAxIC8qIFNUQUJMRSAqL1xuICB9LCA4IC8qIFBST1BTICovLCBbXCJvcGVuXCIsIFwidGl0bGVcIiwgXCJwcmltYXJ5LWFjdGlvblwiLCBcImRlZmF1bHQtYWN0aW9uXCJdKSlcbn0iLCAiaW1wb3J0IHNjcmlwdCBmcm9tIFwiRDpcXFxcR2l0UmVwb3NpdG9yeVxcXFxRaXV3ZW5HYWRnZXRzXFxcXHNyY1xcXFxVc2VyUmlnaHRzTWFuYWdlclxcXFxBcHAudnVlP3R5cGU9c2NyaXB0XCI7aW1wb3J0IFwiRDpcXFxcR2l0UmVwb3NpdG9yeVxcXFxRaXV3ZW5HYWRnZXRzXFxcXHNyY1xcXFxVc2VyUmlnaHRzTWFuYWdlclxcXFxBcHAudnVlP3R5cGU9c3R5bGUmaW5kZXg9MFwiO2ltcG9ydCB7IHJlbmRlciB9IGZyb20gXCJEOlxcXFxHaXRSZXBvc2l0b3J5XFxcXFFpdXdlbkdhZGdldHNcXFxcc3JjXFxcXFVzZXJSaWdodHNNYW5hZ2VyXFxcXEFwcC52dWU/dHlwZT10ZW1wbGF0ZVwiOyBzY3JpcHQucmVuZGVyID0gcmVuZGVyO3NjcmlwdC5fX2ZpbGUgPSBcInNyY1xcXFxVc2VyUmlnaHRzTWFuYWdlclxcXFxBcHAudnVlXCI7c2NyaXB0Ll9fc2NvcGVJZCA9IFwiZGF0YS12LWUxY2IzNTFjXCI7ZXhwb3J0IGRlZmF1bHQgc2NyaXB0OyJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLHFCQUFzQkMsUUFBQSxpQkFBQTs7QUNFdEIsSUFBTUMscUJBQXFCQSxNQUF5QjtBQUNuRCxRQUFNO0lBQUNDO0VBQVUsSUFBSUMsR0FBR0MsT0FBT0MsSUFBSTtBQUVuQyxRQUFNQyxrQkFBa0I7SUFDdkIsNEJBQTRCO0lBQzVCLDRCQUE0QjtJQUM1Qiw0QkFBNEI7SUFDNUIsOEJBQThCO0lBQzlCLDRCQUE0QjtJQUM1QiwwQkFBMEI7SUFDMUIsNEJBQTRCO0lBQzVCLDRCQUE0QjtJQUM1Qiw4QkFBOEI7SUFDOUIsOEJBQThCO0VBQy9CO0FBRUEsTUFBSUMsYUFBZ0M7QUFDcEMsV0FBQUMsS0FBQSxH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aXNzaW9ucyIsICJ3Z1BhZ2VOYW1lIiwgIm13IiwgImNvbmZpZyIsICJnZXQiLCAicGFnZVBlcm1pc3Npb25zIiwgInBlcm1pc3Npb24iLCAiX2kiLCAiX09iamVjdCRlbnRyaWVzIiwgIk9iamVjdCIsICJlbnRyaWVzIiwgImxlbmd0aCIsICJwYWdlTmFtZSIsICJwYWdlUGVybWlzc2lvbiIsICJpbXBvcnRfdnVlNCIsICJpbXBvcnRfY29kZXgiLCAiaW1wb3J0X3Z1ZTIiLCAidXNlclJpZ2h0c01hbmFnZXJTdW1tYXJ5IiwgInZlcnNpb24iLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAiYXBpIiwgImluaXRNd0FwaSIsICJjb25jYXQiLCAiZ2V0UGVybWlzc2lvbk5hbWVzIiwgInBlcm1pc3Npb25OYW1lcyIsICJwYXRyb2xsZXIiLCAiYXV0b3Jldmlld2VyIiwgImNvbmZpcm1lZCIsICJldmVudHNwb25zb3IiLCAidHJhbnN3aWtpIiwgInRlbXBsYXRlZWRpdG9yIiwgImJvdCIsICJwZXJtaXNzaW9uTmFtZSIsICJfaTIiLCAiX09iamVjdCRlbnRyaWVzMiIsICJyaWdodCIsICJuYW1lIiwgImFzc2lnblBlcm1pc3Npb24iLCAidXNlck5hbWUiLCAic3VtbWFyeSIsICJyZXZJZCIsICJleHBpcnkiLCAicGVybWFMaW5rIiwgImZ1bGxTdW1tYXJ5IiwgInBhcmFtcyIsICJhY3Rpb24iLCAidXNlciIsICJyZXBsYWNlIiwgInJlYXNvbiIsICJhZGQiLCAicmVtb3ZlIiwgInBvc3RXaXRoVG9rZW4iLCAiZ2V0UGVybWlzc2lvblRlbXBsYXRlIiwgInBlcm1pc3Npb25UZW1wbGF0ZXMiLCAidGVtcGxhdGUiLCAiX2kzIiwgIl9PYmplY3QkZW50cmllczMiLCAidGVtcGxhdGVOYW1lIiwgImlzc3VlVGVtcGxhdGUiLCAid2F0Y2giLCAicGVybWlzc2lvblRlbXBsYXRlIiwgInRhbGtQYWdlIiwgImZvcm1hdCIsICJ0aXRsZSIsICJhcHBlbmR0ZXh0IiwgIndhdGNobGlzdCIsICJwb3N0V2l0aEVkaXRUb2tlbiIsICJ0YWdMaW5lIiwgInF1ZXJ5UmV2aXNpb25zIiwgIl9yZWYiLCAiX2FzeW5jVG9HZW5lcmF0b3IiLCAidGl0bGVzIiwgInJ2c2VjdGlvbiIsICJmb3JtYXR2ZXJzaW9uIiwgInByb3AiLCAiY3VydGltZXN0YW1wIiwgInJ2cHJvcCIsICJydnNsb3RzIiwgIl94IiwgIl94MiIsICJhcHBseSIsICJhcmd1bWVudHMiLCAibWFya0FzRG9uZSIsICJpbmRleCIsICJjbG9zaW5nUmVtYXJrcyIsICJ3Z1VzZXJOYW1lIiwgInNlY3Rpb25Ob2RlIiwgImRvY3VtZW50IiwgImdldEVsZW1lbnRCeUlkIiwgInNlY3Rpb25OdW1iZXIiLCAiJCIsICJzaWJsaW5ncyIsICJmaW5kIiwgIm1hdGNoIiwgImJhc2V0aW1lc3RhbXAiLCAiY29udGVudCIsICJyZXZpc2lvbiIsICJ0aGVuIiwgImRhdGEiLCAicGFnZXMiLCAiRGVmZXJyZWQiLCAicmVqZWN0IiwgInBhZ2UiLCAiaW52YWxpZCIsICJtaXNzaW5nIiwgInJldmlzaW9ucyIsICJzbG90cyIsICJtYWluIiwgInRpbWVzdGFtcCIsICJyZXNvbHZlIiwgInRyaW0iLCAiZWRpdFBhcmFtcyIsICJzZWN0aW9uIiwgInRleHQiLCAic3RhcnR0aW1lc3RhbXAiLCAibm9jcmVhdGUiLCAiYXNzZXJ0IiwgInByb3BzIiwgIl9fcHJvcHMiLCAid2dVTFMiLCAid2luZG93IiwgIm9wZW4iLCAicmVmIiwgInN1Ym1pdHRpbmciLCAicmlnaHRzQ2hhbmdlU3VtbWFyeSIsICJjdXN0b21FeHBpcnkiLCAid2F0Y2hUYWxrUGFnZSIsICJyaWdodExvZyIsICJfZ2V0UGVybWlzc2lvbk5hbWVzIiwgImxvZ1VybCIsICJ1dGlsIiwgImdldFVybCIsICJ0eXBlIiwgImV4cGlyeUl0ZW1zIiwgInZhbHVlIiwgImxhYmVsIiwgImxvYWRSaWdodExvZyIsICJsaXN0IiwgImxlYWN0aW9uIiwgImxldGl0bGUiLCAibGVsaW1pdCIsICJkb25lIiwgImxvZ2V2ZW50cyIsICJsb2dzIiwgImxvZyIsICJNb3JlYml0cyIsICJkYXRlIiwgImNhbGVuZGFyIiwgInJpZ2h0cyIsICJuZXdncm91cHMiLCAiam9pbiIsICJjbG9zZSIsICJvbkNsb3NlIiwgInN1Ym1pdCIsICJfcmVmMiIsICJkb25lRGF0YSIsICJOdW1iZXIiLCAicGFyc2VJbnQiLCAibmV3cmV2aWQiLCAic2V0VGltZW91dCIsICJsb2NhdGlvbiIsICJyZWxvYWQiLCAiZXJyb3IiLCAibm90aWZ5IiwgIlN0cmluZyIsICJ0YWciLCAib25Nb3VudGVkIiwgImltcG9ydF92dWUzIiwgIl9ob2lzdGVkXzEiLCAiY2xhc3MiLCAiX2hvaXN0ZWRfMiIsICJfaG9pc3RlZF8zIiwgIl9ob2lzdGVkXzQiLCAiZm9yIiwgIl9ob2lzdGVkXzUiLCAiX2hvaXN0ZWRfNiIsICJfaG9pc3RlZF83IiwgIl9ob2lzdGVkXzgiLCAia2V5IiwgInJlbmRlciIsICJfY3R4IiwgIl9jYWNoZSIsICIkcHJvcHMiLCAiJHNldHVwIiwgIiRkYXRhIiwgIiRvcHRpb25zIiwgIm9wZW5CbG9jayIsICJjcmVhdGVCbG9jayIsICIkZXZlbnQiLCAiYWN0aW9uVHlwZSIsICJkaXNhYmxlZCIsICJvblByaW1hcnkiLCAib25EZWZhdWx0IiwgImRlZmF1bHQiLCAid2l0aEN0eCIsICJjcmVhdGVFbGVtZW50Vk5vZGUiLCAiaHJlZiIsICJ0YXJnZXQiLCAicmVsIiwgInRvRGlzcGxheVN0cmluZyIsICJjcmVhdGVUZXh0Vk5vZGUiLCAiY3JlYXRlVk5vZGUiLCAiaWQiLCAibW9kZWxWYWx1ZSIsICJwbGFjZWhvbGRlciIsICJfIiwgInNlbGVjdGVkIiwgImNyZWF0ZUNvbW1lbnRWTm9kZSIsICJjcmVhdGVFbGVtZW50QmxvY2siLCAiQXBwX2RlZmF1bHQiLCAiX19maWxlIiwgIl9fc2NvcGVJZCIsICJBcHBfZGVmYXVsdDIiLCAiYXBwIiwgInJvb3QiLCAic2hvd0RpYWxvZyIsICJzaG93RGlhbG9nMiIsICIkYm9keSIsICJfcm9vdCIsICJ1bm1vdW50IiwgImNyZWF0ZUVsZW1lbnQiLCAiYXBwZW5kIiwgImNyZWF0ZUFwcCIsICJfYXBwIiwgIl9yb290MiIsICJtb3VudCIsICJnZXRCb2R5IiwgIm9uIiwgImV2ZW50IiwgIl8kZWxlbWVudCRwYXJlbnRzJHByZSIsICJwcmV2ZW50RGVmYXVsdCIsICIkZWxlbWVudCIsICJnZXRQYXJhbVZhbHVlIiwgImF0dHIiLCAic2VjdGlvbklkIiwgInBhcmVudHMiLCAicHJldiJdCn0K

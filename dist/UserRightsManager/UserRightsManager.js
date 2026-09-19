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
    "Qiuwen_talk:权限申请/申请实名制验证豁免": "rnrsverify-exempt",
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
    "rnrsverify-exempt": "实名制验证豁免",
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1VzZXJSaWdodHNNYW5hZ2VyL1VzZXJSaWdodHNNYW5hZ2VyLnRzIiwgInNyYy9Vc2VyUmlnaHRzTWFuYWdlci9tb2R1bGVzL2dldFBhZ2VQZXJtaXNzaW9ucy50cyIsICJzcmMvVXNlclJpZ2h0c01hbmFnZXIvbW9kdWxlcy9zaG93RGlhbG9nLnRzIiwgImRpc3QvVXNlclJpZ2h0c01hbmFnZXIvc3JjL1VzZXJSaWdodHNNYW5hZ2VyL0FwcC52dWUiLCAic3JjL1VzZXJSaWdodHNNYW5hZ2VyL29wdGlvbnMuanNvbiIsICJzcmMvVXNlclJpZ2h0c01hbmFnZXIvbW9kdWxlcy9hcGkudHMiLCAic3JjL1VzZXJSaWdodHNNYW5hZ2VyL21vZHVsZXMvZ2V0UGVybWlzc2lvbk5hbWVzLnRzIiwgInNyYy9Vc2VyUmlnaHRzTWFuYWdlci9tb2R1bGVzL2Fzc2lnblBlcm1pc3Npb24udHMiLCAic3JjL1VzZXJSaWdodHNNYW5hZ2VyL21vZHVsZXMvZ2V0VGVtcGxhdGVzLnRzIiwgInNyYy9Vc2VyUmlnaHRzTWFuYWdlci9tb2R1bGVzL2lzc3VlVGVtcGxhdGUudHMiLCAic3JjL1VzZXJSaWdodHNNYW5hZ2VyL21vZHVsZXMvbWFya0FzRG9uZS50cyIsICJzZmMtdGVtcGxhdGU6RDpcXEdpdFJlcG9zaXRvcnlcXFFpdXdlbkdhZGdldHNcXHNyY1xcVXNlclJpZ2h0c01hbmFnZXJcXEFwcC52dWU/dHlwZT10ZW1wbGF0ZSIsICJzcmMvVXNlclJpZ2h0c01hbmFnZXIvQXBwLnZ1ZSJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHtnZXRCb2R5fSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuaW1wb3J0IHtnZXRQYWdlUGVybWlzc2lvbnN9IGZyb20gJy4vbW9kdWxlcy9nZXRQYWdlUGVybWlzc2lvbnMnO1xuaW1wb3J0IHtzaG93RGlhbG9nfSBmcm9tICcuL21vZHVsZXMvc2hvd0RpYWxvZyc7XG5cbnZvaWQgZ2V0Qm9keSgpLnRoZW4oKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQgPT4ge1xuXHRjb25zdCBwZXJtaXNzaW9uID0gZ2V0UGFnZVBlcm1pc3Npb25zKCk7XG5cdGlmICghcGVybWlzc2lvbikge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdCRib2R5LmZpbmQoJy5wZXJtLWFzc2lnbi1wZXJtaXNzaW9ucyBhJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuXHRcdGNvbnN0ICRlbGVtZW50OiBKUXVlcnk8SFRNTEFuY2hvckVsZW1lbnQ+ID0gJCh0aGlzIGFzIEhUTUxBbmNob3JFbGVtZW50KTtcblx0XHRjb25zdCB1c2VyTmFtZSA9IG13LnV0aWwuZ2V0UGFyYW1WYWx1ZSgndXNlcicsICRlbGVtZW50LmF0dHIoJ2hyZWYnKSk7XG5cdFx0aWYgKCF1c2VyTmFtZSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGNvbnN0IHNlY3Rpb25JZDogc3RyaW5nID0gJGVsZW1lbnQucGFyZW50cygnZGwnKS5wcmV2KCdoNCcpLmZpbmQoJy5tdy1oZWFkbGluZScpLmF0dHIoJ2lkJykgPz8gJyc7XG5cdFx0Y29uc3QgaW5kZXg6IHN0cmluZyA9XG5cdFx0XHRzZWN0aW9uSWQgPT09IGBVc2VyOiR7dXNlck5hbWV9YCB8fCBzZWN0aW9uSWQgPT09IGBVc2VyOiR7dXNlck5hbWV9YC5yZXBsYWNlKC9cIi9nLCAnLjIyJykucmVwbGFjZSgvIC9nLCAnXycpXG5cdFx0XHRcdD8gJydcblx0XHRcdFx0OiBzZWN0aW9uSWRcblx0XHRcdFx0XHRcdC5yZXBsYWNlKCdVc2VyOicsICcnKVxuXHRcdFx0XHRcdFx0LnJlcGxhY2UodXNlck5hbWUsICcnKVxuXHRcdFx0XHRcdFx0LnJlcGxhY2UodXNlck5hbWUucmVwbGFjZSgvXCIvZywgJy4yMicpLnJlcGxhY2UoLyAvZywgJ18nKSwgJycpO1xuXG5cdFx0c2hvd0RpYWxvZyh7JGJvZHksIHVzZXJOYW1lLCBwZXJtaXNzaW9uLCBpbmRleH0pO1xuXHR9KTtcbn0pO1xuIiwgImltcG9ydCB0eXBlIHtVc2VyUmlnaHRzfSBmcm9tICd+L01hcmtSaWdodHMvbW9kdWxlcy90eXBlcyc7XG5cbmNvbnN0IGdldFBhZ2VQZXJtaXNzaW9ucyA9ICgpOiBVc2VyUmlnaHRzIHwgbnVsbCA9PiB7XG5cdGNvbnN0IHt3Z1BhZ2VOYW1lfSA9IG13LmNvbmZpZy5nZXQoKTtcblxuXHRjb25zdCBwYWdlUGVybWlzc2lvbnMgPSB7XG5cdFx0J1FpdXdlbl90YWxrOuadg+mZkOeUs+ivty/nlLPor7flt6Hmn6Xlm57pgIDmnYMnOiAncGF0cm9sbGVyJyxcblx0XHQnUWl1d2VuX3RhbGs65p2D6ZmQ55Sz6K+3L+eUs+ivt+W3oeafpeixgeWFjeadgyc6ICdhdXRvcmV2aWV3ZXInLFxuXHRcdCdRaXV3ZW5fdGFsazrmnYPpmZDnlLPor7cv55Sz6K+356Gu6K6k55So5oi35p2DJzogJ2NvbmZpcm1lZCcsXG5cdFx0J1FpdXdlbl90YWxrOuadg+mZkOeUs+ivty/nlLPor7flpKfph4/mtojmga/lj5HpgIHmnYMnOiAnbWFzc21lc3NhZ2Utc2VuZGVyJyxcblx0XHQnUWl1d2VuX3RhbGs65p2D6ZmQ55Sz6K+3L+eUs+ivt+a0u+WKqOe7hOe7h+adgyc6ICdldmVudHNwb25zb3InLFxuXHRcdCdRaXV3ZW5fdGFsazrmnYPpmZDnlLPor7cv55Sz6K+35a+85YWl5p2DJzogJ3RyYW5zd2lraScsXG5cdFx0J1FpdXdlbl90YWxrOuadg+mZkOeUs+ivty/nlLPor7fmqKHmnb/nvJbovpHmnYMnOiAndGVtcGxhdGVlZGl0b3InLFxuXHRcdCdRaXV3ZW5fdGFsazrmnYPpmZDnlLPor7cv55Sz6K+35py65Zmo5Lq65p2D6ZmQJzogJ2JvdCcsXG5cdFx0J1FpdXdlbl90YWxrOuadg+mZkOeUs+ivty/nlLPor7flrp7lkI3liLbpqozor4HosYHlhY0nOiAncm5yc3ZlcmlmeS1leGVtcHQnLFxuXHRcdCdRaXV3ZW5fdGFsazrmnYPpmZDnlLPor7cv55Sz6K+3SVDlsIHnpoHosYHlhY3mnYMnOiAnaXBibG9jay1leGVtcHQnLFxuXHR9IGFzIGNvbnN0IHNhdGlzZmllcyBQYXJ0aWFsPFJlY29yZDxzdHJpbmcsIFVzZXJSaWdodHM+PjtcblxuXHRsZXQgcGVybWlzc2lvbjogVXNlclJpZ2h0cyB8IG51bGwgPSBudWxsO1xuXHRmb3IgKGNvbnN0IFtwYWdlTmFtZSwgcGFnZVBlcm1pc3Npb25dIG9mIE9iamVjdC5lbnRyaWVzKHBhZ2VQZXJtaXNzaW9ucykpIHtcblx0XHRpZiAocGFnZU5hbWUgPT09IHdnUGFnZU5hbWUpIHtcblx0XHRcdHBlcm1pc3Npb24gPSBwYWdlUGVybWlzc2lvbjtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHBlcm1pc3Npb247XG59O1xuXG5leHBvcnQge2dldFBhZ2VQZXJtaXNzaW9uc307XG4iLCAiaW1wb3J0IHt0eXBlIEFwcCBhcyBWdWVBcHAsIGNyZWF0ZUFwcH0gZnJvbSAndnVlJztcbmltcG9ydCBBcHAgZnJvbSAnLi4vQXBwLnZ1ZSc7XG5pbXBvcnQge1VzZXJSaWdodHN9IGZyb20gJ34vTWFya1JpZ2h0cy9tb2R1bGVzL3R5cGVzJztcblxubGV0IGFwcDogVnVlQXBwPEVsZW1lbnQ+IHwgdW5kZWZpbmVkO1xubGV0IHJvb3Q6IEhUTUxEaXZFbGVtZW50IHwgdW5kZWZpbmVkO1xuXG5jb25zdCBzaG93RGlhbG9nID0gZnVuY3Rpb24gc2hvd0RpYWxvZyh7XG5cdCRib2R5LFxuXHR1c2VyTmFtZSxcblx0cGVybWlzc2lvbixcblx0aW5kZXgsXG59OiB7XG5cdCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pjtcblx0dXNlck5hbWU6IHN0cmluZztcblx0cGVybWlzc2lvbjogVXNlclJpZ2h0cztcblx0aW5kZXg6IHN0cmluZztcbn0pIHtcblx0aWYgKGFwcCkge1xuXHRcdGFwcC51bm1vdW50KCk7XG5cdFx0YXBwID0gdW5kZWZpbmVkO1xuXHR9XG5cdHJvb3Q/LnJlbW92ZSgpO1xuXHRyb290ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdCRib2R5LmFwcGVuZChyb290KTtcblx0YXBwID0gY3JlYXRlQXBwKEFwcCwge1xuXHRcdHVzZXJOYW1lLFxuXHRcdHBlcm1pc3Npb24sXG5cdFx0aW5kZXgsXG5cdFx0b25DbG9zZTogKCkgPT4ge1xuXHRcdFx0YXBwPy51bm1vdW50KCk7XG5cdFx0XHRhcHAgPSB1bmRlZmluZWQ7XG5cdFx0XHRyb290Py5yZW1vdmUoKTtcblx0XHRcdHJvb3QgPSB1bmRlZmluZWQ7XG5cdFx0fSxcblx0fSk7XG5cdGFwcC5tb3VudChyb290KTtcbn07XG5cbmV4cG9ydCB7c2hvd0RpYWxvZ307XG4iLCAiPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cbmltcG9ydCB7Q2R4Q2hlY2tib3gsIENkeERpYWxvZywgQ2R4RmllbGQsIENkeFNlbGVjdCwgQ2R4VGV4dElucHV0LCB0eXBlIE1lbnVJdGVtRGF0YX0gZnJvbSAnQHdpa2ltZWRpYS9jb2RleCc7XG5pbXBvcnQge29uTW91bnRlZCwgcmVmfSBmcm9tICd2dWUnO1xuaW1wb3J0IHtVc2VyUmlnaHRzfSBmcm9tICd+L01hcmtSaWdodHMvbW9kdWxlcy90eXBlcyc7XG5pbXBvcnQge2FwaX0gZnJvbSAnLi9tb2R1bGVzL2FwaSc7XG5pbXBvcnQge2Fzc2lnblBlcm1pc3Npb259IGZyb20gJy4vbW9kdWxlcy9hc3NpZ25QZXJtaXNzaW9uJztcbmltcG9ydCB7Z2V0UGVybWlzc2lvbk5hbWVzfSBmcm9tICcuL21vZHVsZXMvZ2V0UGVybWlzc2lvbk5hbWVzJztcbmltcG9ydCB7Z2V0UGVybWlzc2lvblRlbXBsYXRlfSBmcm9tICcuL21vZHVsZXMvZ2V0VGVtcGxhdGVzJztcbmltcG9ydCB7aXNzdWVUZW1wbGF0ZX0gZnJvbSAnLi9tb2R1bGVzL2lzc3VlVGVtcGxhdGUnO1xuaW1wb3J0IHttYXJrQXNEb25lfSBmcm9tICcuL21vZHVsZXMvbWFya0FzRG9uZSc7XG5kZWZpbmVPcHRpb25zKHtpbmhlcml0QXR0cnM6IGZhbHNlfSk7XG5cbmNvbnN0IHByb3BzID0gZGVmaW5lUHJvcHM8e1xuXHR1c2VyTmFtZTogc3RyaW5nO1xuXHRwZXJtaXNzaW9uOiBVc2VyUmlnaHRzO1xuXHRpbmRleDogc3RyaW5nO1xuXHRvbkNsb3NlOiAoKSA9PiB2b2lkO1xufT4oKTtcblxuY29uc3Qge3dnVUxTfSA9IHdpbmRvdztcbmNvbnN0IG9wZW4gPSByZWYodHJ1ZSk7XG5jb25zdCBzdWJtaXR0aW5nID0gcmVmKGZhbHNlKTtcbmNvbnN0IHJpZ2h0c0NoYW5nZVN1bW1hcnkgPSByZWYoJycpO1xuY29uc3QgZXhwaXJ5ID0gcmVmKCdpbmZpbml0ZScpO1xuY29uc3QgY3VzdG9tRXhwaXJ5ID0gcmVmKCcnKTtcbmNvbnN0IGNsb3NpbmdSZW1hcmtzID0gcmVmKCd7e2RvbmV9feKAlOKAlH5+fn4nKTtcbmNvbnN0IHdhdGNoVGFsa1BhZ2UgPSByZWYoZmFsc2UpO1xuY29uc3QgcmlnaHRMb2cgPSByZWYod2dVTFMoJ+iOt+WPluS4rScsICflj5blvpfkuK0nKSk7XG5cbmNvbnN0IHBlcm1pc3Npb25OYW1lID0gZ2V0UGVybWlzc2lvbk5hbWVzKHByb3BzLnBlcm1pc3Npb24pID8/ICcnO1xuY29uc3QgcGVybWlzc2lvblRlbXBsYXRlID0gZ2V0UGVybWlzc2lvblRlbXBsYXRlKHByb3BzLnBlcm1pc3Npb24pO1xuY29uc3QgbG9nVXJsID0gbXcudXRpbC5nZXRVcmwoJ1NwZWNpYWw6TG9nL3JpZ2h0cycsIHt0eXBlOiAncmlnaHRzJywgcGFnZTogYFVzZXI6JHtwcm9wcy51c2VyTmFtZX1gfSk7XG5jb25zdCBleHBpcnlJdGVtczogTWVudUl0ZW1EYXRhW10gPSBbXG5cdHt2YWx1ZTogJzEgZGF5JywgbGFiZWw6ICcx5aSpJ30sXG5cdHt2YWx1ZTogJzEgd2VlaycsIGxhYmVsOiB3Z1VMUygnMeWRqCcsICcx6YCxJyl9LFxuXHR7dmFsdWU6ICcxIG1vbnRoJywgbGFiZWw6IHdnVUxTKCcx5Liq5pyIJywgJzHlgIvmnIgnKX0sXG5cdHt2YWx1ZTogJzMgbW9udGhzJywgbGFiZWw6IHdnVUxTKCcz5Liq5pyIJywgJzPlgIvmnIgnKX0sXG5cdHt2YWx1ZTogJzYgbW9udGhzJywgbGFiZWw6IHdnVUxTKCc25Liq5pyIJywgJzblgIvmnIgnKX0sXG5cdHt2YWx1ZTogJzEgeWVhcicsIGxhYmVsOiAnMeW5tCd9LFxuXHR7dmFsdWU6ICdpbmZpbml0ZScsIGxhYmVsOiB3Z1VMUygn5rKh5pyJ5pyf6ZmQJywgJ+aykuacieacn+mZkCcpfSxcblx0e3ZhbHVlOiAnb3RoZXInLCBsYWJlbDogd2dVTFMoJ+WFtuS7luaXtumXtCcsICflhbbku5bmmYLplpMnKX0sXG5dO1xuXG5jb25zdCBsb2FkUmlnaHRMb2cgPSAoKTogdm9pZCA9PiB7XG5cdGNvbnN0IHBhcmFtczogQXBpUXVlcnlMb2dFdmVudHNQYXJhbXMgPSB7XG5cdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdGxpc3Q6ICdsb2dldmVudHMnLFxuXHRcdGxlYWN0aW9uOiAncmlnaHRzL3JpZ2h0cycsXG5cdFx0bGV0aXRsZTogYFVzZXI6JHtwcm9wcy51c2VyTmFtZX1gLFxuXHRcdGxlbGltaXQ6IDEsXG5cdH07XG5cblx0dm9pZCBhcGkuZ2V0KHBhcmFtcykuZG9uZSgoZGF0YSkgPT4ge1xuXHRcdGNvbnN0IHtsb2dldmVudHM6IGxvZ3N9ID0gZGF0YVsncXVlcnknXSBhcyB7XG5cdFx0XHRsb2dldmVudHM6IHtwYXJhbXM6IHtuZXdncm91cHM6IHN0cmluZ1tdfTsgdXNlcjogc3RyaW5nOyB0aW1lc3RhbXA6IHN0cmluZ31bXTtcblx0XHR9O1xuXHRcdGNvbnN0IGxvZyA9IGxvZ3NbMF07XG5cdFx0aWYgKCFsb2cpIHtcblx0XHRcdHJpZ2h0TG9nLnZhbHVlID0gd2dVTFMoJ+ayoeacieS7u+S9leaXpeW/lycsICfmspLmnInku7vkvZXml6XoqownKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHQvLyBAdHMtZXhwZWN0LWVycm9yIE1vcmViaXRzIGlzIHByb3ZpZGVkIGJ5IHRoZSBnYWRnZXQgcnVudGltZS5cblx0XHRjb25zdCB0aW1lc3RhbXAgPSBuZXcgTW9yZWJpdHMuZGF0ZShsb2cudGltZXN0YW1wKS5jYWxlbmRhcigpIGFzIHN0cmluZztcblx0XHRjb25zdCByaWdodHMgPSBsb2cucGFyYW1zLm5ld2dyb3Vwcy5qb2luKCfjgIEnKSB8fCB3Z1VMUygn77yI5peg77yJJywgJ++8iOeEoe+8iScpO1xuXHRcdHJpZ2h0TG9nLnZhbHVlID0gYCR7dGltZXN0YW1wfSAke2xvZy51c2VyfSR7d2dVTFMoJ+WwhueUqOaIt+e7hOaUueS4uicsICflsIfkvb/nlKjogIXnvqTntYTmlLnngronKX0ke3JpZ2h0c31gO1xuXHR9KTtcbn07XG5cbmNvbnN0IGNsb3NlID0gKCk6IHZvaWQgPT4ge1xuXHRpZiAoIXN1Ym1pdHRpbmcudmFsdWUpIHtcblx0XHRvcGVuLnZhbHVlID0gZmFsc2U7XG5cdFx0cHJvcHMub25DbG9zZSgpO1xuXHR9XG59O1xuXG5jb25zdCBzdWJtaXQgPSBhc3luYyAoKTogUHJvbWlzZTx2b2lkPiA9PiB7XG5cdGlmIChzdWJtaXR0aW5nLnZhbHVlKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0c3VibWl0dGluZy52YWx1ZSA9IHRydWU7XG5cdHRyeSB7XG5cdFx0Y29uc3QgZG9uZURhdGEgPSBhd2FpdCBtYXJrQXNEb25lKHtcblx0XHRcdHVzZXJOYW1lOiBwcm9wcy51c2VyTmFtZSxcblx0XHRcdGluZGV4OiBwcm9wcy5pbmRleCxcblx0XHRcdGNsb3NpbmdSZW1hcmtzOiBgXFxuOiR7Y2xvc2luZ1JlbWFya3MudmFsdWV9YCxcblx0XHR9KTtcblx0XHRhd2FpdCBhc3NpZ25QZXJtaXNzaW9uKHtcblx0XHRcdHVzZXJOYW1lOiBwcm9wcy51c2VyTmFtZSxcblx0XHRcdHBlcm1pc3Npb246IHByb3BzLnBlcm1pc3Npb24sXG5cdFx0XHRzdW1tYXJ5OiByaWdodHNDaGFuZ2VTdW1tYXJ5LnZhbHVlLFxuXHRcdFx0cmV2SWQ6IE51bWJlci5wYXJzZUludChkb25lRGF0YVsnZWRpdCddLm5ld3JldmlkIGFzIHN0cmluZywgMTApLFxuXHRcdFx0ZXhwaXJ5OiBleHBpcnkudmFsdWUgPT09ICdvdGhlcicgPyBjdXN0b21FeHBpcnkudmFsdWUgOiBleHBpcnkudmFsdWUsXG5cdFx0fSk7XG5cdFx0aWYgKHBlcm1pc3Npb25UZW1wbGF0ZSkge1xuXHRcdFx0YXdhaXQgaXNzdWVUZW1wbGF0ZSh7dXNlck5hbWU6IHByb3BzLnVzZXJOYW1lLCBwZXJtaXNzaW9uOiBwcm9wcy5wZXJtaXNzaW9uLCB3YXRjaDogd2F0Y2hUYWxrUGFnZS52YWx1ZX0pO1xuXHRcdH1cblx0XHRzZXRUaW1lb3V0KCgpID0+IGxvY2F0aW9uLnJlbG9hZCgpLCAxMDAwKTtcblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRzdWJtaXR0aW5nLnZhbHVlID0gZmFsc2U7XG5cdFx0dm9pZCBtdy5ub3RpZnkoU3RyaW5nKGVycm9yKSwge3RhZzogJ1VzZXJSaWdodHNNYW5hZ2VyJywgdHlwZTogJ2Vycm9yJ30pO1xuXHR9XG59O1xuXG5vbk1vdW50ZWQobG9hZFJpZ2h0TG9nKTtcbjwvc2NyaXB0PlxuXG48dGVtcGxhdGU+XG5cdDxjZHgtZGlhbG9nXG5cdFx0di1tb2RlbDpvcGVuPVwib3BlblwiXG5cdFx0OnRpdGxlPVwiYOaOiOS6iCR7cGVybWlzc2lvbk5hbWV9JHt3Z1VMUygn57uZJywgJ+e1picpfSR7dXNlck5hbWV9YFwiXG5cdFx0OnVzZS1jbG9zZS1idXR0b249XCJ0cnVlXCJcblx0XHQ6cHJpbWFyeS1hY3Rpb249XCJ7bGFiZWw6IHdnVUxTKCfmjojmnYMnLCAn5o6I5qyKJyksIGFjdGlvblR5cGU6ICdwcm9ncmVzc2l2ZScsIGRpc2FibGVkOiBzdWJtaXR0aW5nfVwiXG5cdFx0OmRlZmF1bHQtYWN0aW9uPVwie2xhYmVsOiAn5Y+W5raIJywgZGlzYWJsZWQ6IHN1Ym1pdHRpbmd9XCJcblx0XHRAcHJpbWFyeT1cInN1Ym1pdFwiXG5cdFx0QGRlZmF1bHQ9XCJjbG9zZVwiXG5cdFx0QHVwZGF0ZTpvcGVuPVwiJGV2ZW50ID09PSBmYWxzZSAmJiBjbG9zZSgpXCJcblx0PlxuXHRcdDxkaXYgY2xhc3M9XCJ1c2VyLXJpZ2h0cy1tYW5hZ2VyX19ib2R5XCI+XG5cdFx0XHQ8cCBjbGFzcz1cInVzZXItcmlnaHRzLW1hbmFnZXJfX2xvZ1wiPlxuXHRcdFx0XHQ8YSA6aHJlZj1cImxvZ1VybFwiIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIj5cblx0XHRcdFx0XHR7eyB3Z1VMUygn5pyA6L+R5p2D6ZmQ5pel5b+XJywgJ+acgOi/keasiumZkOaXpeiqjCcpIH19XG5cdFx0XHRcdDwvYT5cblx0XHRcdFx077yae3sgcmlnaHRMb2cgfX1cblx0XHRcdDwvcD5cblx0XHRcdDxjZHgtZmllbGQ+XG5cdFx0XHRcdDxsYWJlbCBmb3I9XCJ1c2VyLXJpZ2h0cy1tYW5hZ2VyLXN1bW1hcnlcIj57eyB3Z1VMUygn5o6I5p2D5Y6f5ZugJywgJ+aOiOasiuWOn+WboCcpIH19PC9sYWJlbD5cblx0XHRcdFx0PGNkeC10ZXh0LWlucHV0XG5cdFx0XHRcdFx0aWQ9XCJ1c2VyLXJpZ2h0cy1tYW5hZ2VyLXN1bW1hcnlcIlxuXHRcdFx0XHRcdHYtbW9kZWw9XCJyaWdodHNDaGFuZ2VTdW1tYXJ5XCJcblx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cIuWPr+eVmeepulwiXG5cdFx0XHRcdFx0OmRpc2FibGVkPVwic3VibWl0dGluZ1wiXG5cdFx0XHRcdC8+XG5cdFx0XHQ8L2NkeC1maWVsZD5cblx0XHRcdDxjZHgtZmllbGQ+XG5cdFx0XHRcdDxsYWJlbCBmb3I9XCJ1c2VyLXJpZ2h0cy1tYW5hZ2VyLXN1bW1hcnlcIj57eyB3Z1VMUygn5o6I5p2D5pyf6ZmQJywgJ+aOiOasiuacn+mZkCcpIH19PC9sYWJlbD5cblx0XHRcdFx0PGNkeC1zZWxlY3Qgdi1tb2RlbDpzZWxlY3RlZD1cImV4cGlyeVwiIDptZW51LWl0ZW1zPVwiZXhwaXJ5SXRlbXNcIiA6ZGlzYWJsZWQ9XCJzdWJtaXR0aW5nXCIgLz5cblx0XHRcdDwvY2R4LWZpZWxkPlxuXHRcdFx0PGNkeC1maWVsZCB2LWlmPVwiZXhwaXJ5ID09PSAnb3RoZXInXCI+XG5cdFx0XHRcdDxsYWJlbCBmb3I9XCJ1c2VyLXJpZ2h0cy1tYW5hZ2VyLWN1c3RvbS1leHBpcnlcIj57eyB3Z1VMUygn6Ieq5a6a5LmJ5pe26Ze0JywgJ+iHquioguaZgumWkycpIH19PC9sYWJlbD5cblx0XHRcdFx0PGNkeC10ZXh0LWlucHV0IGlkPVwidXNlci1yaWdodHMtbWFuYWdlci1jdXN0b20tZXhwaXJ5XCIgdi1tb2RlbD1cImN1c3RvbUV4cGlyeVwiIDpkaXNhYmxlZD1cInN1Ym1pdHRpbmdcIiAvPlxuXHRcdFx0PC9jZHgtZmllbGQ+XG5cdFx0XHQ8Y2R4LWZpZWxkPlxuXHRcdFx0XHQ8bGFiZWwgZm9yPVwidXNlci1yaWdodHMtbWFuYWdlci1yZW1hcmtzXCI+e3sgd2dVTFMoJ+WFs+mXreivt+axgueVmeiogCcsICfpl5zplonoq4vmsYLnlZnoqIAnKSB9fTwvbGFiZWw+XG5cdFx0XHRcdDxjZHgtdGV4dC1pbnB1dCBpZD1cInVzZXItcmlnaHRzLW1hbmFnZXItcmVtYXJrc1wiIHYtbW9kZWw9XCJjbG9zaW5nUmVtYXJrc1wiIDpkaXNhYmxlZD1cInN1Ym1pdHRpbmdcIiAvPlxuXHRcdFx0PC9jZHgtZmllbGQ+XG5cdFx0XHQ8Y2R4LWZpZWxkIHYtaWY9XCJwZXJtaXNzaW9uVGVtcGxhdGVcIj5cblx0XHRcdFx0PGNkeC1jaGVja2JveCB2LW1vZGVsPVwid2F0Y2hUYWxrUGFnZVwiIDpkaXNhYmxlZD1cInN1Ym1pdHRpbmdcIj5cblx0XHRcdFx0XHR7eyB3Z1VMUygn55uR6KeG55So5oi36K6o6K666aG1JywgJ+ebo+imluS9v+eUqOiAheiojuirlumggScpIH19XG5cdFx0XHRcdDwvY2R4LWNoZWNrYm94PlxuXHRcdFx0PC9jZHgtZmllbGQ+XG5cdFx0XHQ8cCB2LWlmPVwic3VibWl0dGluZ1wiIGNsYXNzPVwidXNlci1yaWdodHMtbWFuYWdlcl9fc3RhdHVzXCI+e3sgd2dVTFMoJ+WkhOeQhuS4reKApuKApicsICfomZXnkIbkuK3igKbigKYnKSB9fTwvcD5cblx0XHQ8L2Rpdj5cblx0PC9jZHgtZGlhbG9nPlxuPC90ZW1wbGF0ZT5cblxuPHN0eWxlIGxhbmc9XCJsZXNzXCI+XG4udXNlci1yaWdodHMtbWFuYWdlcl9fYm9keSB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGdhcDogMC43NXJlbTtcblx0bWluLXdpZHRoOiBtaW4oOTB2dywgMzJyZW0pO1xufVxuXG4udXNlci1yaWdodHMtbWFuYWdlcl9fbG9nLFxuLnVzZXItcmlnaHRzLW1hbmFnZXJfX3N0YXR1cyB7XG5cdG1hcmdpbjogMDtcbn1cbjwvc3R5bGU+XG4iLCAie1xuXHRcInVzZXJSaWdodHNNYW5hZ2VyU3VtbWFyeVwiOiBcIu+8iFtbTWVkaWFXaWtpOkdhZGdldC1Vc2VyUmlnaHRzTWFuYWdlci5qc3xVc2VyUmlnaHRzTWFuYWdlcl1d77yJXCIsXG5cdFwidmVyc2lvblwiOiBcIjIuMFwiXG59XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtpbml0TXdBcGl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmNvbnN0IGFwaTogbXcuQXBpID0gaW5pdE13QXBpKGBVc2VyUmlnaHRzTWFuYWdlci8ke09QVElPTlMudmVyc2lvbn1gKTtcblxuZXhwb3J0IHthcGl9O1xuIiwgImltcG9ydCB0eXBlIHtVc2VyUmlnaHRzfSBmcm9tICd+L01hcmtSaWdodHMvbW9kdWxlcy90eXBlcyc7XG5cbmNvbnN0IGdldFBlcm1pc3Npb25OYW1lcyA9IChwZXJtaXNzaW9uOiBVc2VyUmlnaHRzKTogc3RyaW5nIHwgbnVsbCA9PiB7XG5cdGNvbnN0IHBlcm1pc3Npb25OYW1lcyA9IHtcblx0XHRwYXRyb2xsZXI6ICflt6Hmn6XlkZgnLFxuXHRcdGF1dG9yZXZpZXdlcjogJ+W3oeafpeixgeWFjeiAhScsXG5cdFx0Y29uZmlybWVkOiAn56Gu6K6k55So5oi3Jyxcblx0XHQnbWFzc21lc3NhZ2Utc2VuZGVyJzogJ+Wkp+mHj+a2iOaBr+WPkemAgeiAhScsXG5cdFx0ZXZlbnRzcG9uc29yOiAn5rS75Yqo57uE57uH6ICFJyxcblx0XHR0cmFuc3dpa2k6ICflr7zlhaXogIUnLFxuXHRcdHRlbXBsYXRlZWRpdG9yOiAn5qih5p2/57yW6L6R5ZGYJyxcblx0XHRib3Q6ICfmnLrlmajkuronLFxuXHRcdCdybnJzdmVyaWZ5LWV4ZW1wdCc6ICflrp7lkI3liLbpqozor4HosYHlhY0nLFxuXHRcdCdpcGJsb2NrLWV4ZW1wdCc6ICdJUOWwgeemgeixgeWFjScsXG5cdH0gYXMgY29uc3Qgc2F0aXNmaWVzIFBhcnRpYWw8UmVjb3JkPFVzZXJSaWdodHMsIHN0cmluZz4+O1xuXG5cdGxldCBwZXJtaXNzaW9uTmFtZTogc3RyaW5nIHwgbnVsbCA9IG51bGw7XG5cdGZvciAoY29uc3QgW3JpZ2h0LCBuYW1lXSBvZiBPYmplY3QuZW50cmllcyhwZXJtaXNzaW9uTmFtZXMpKSB7XG5cdFx0aWYgKHBlcm1pc3Npb24gPT09IHJpZ2h0KSB7XG5cdFx0XHRwZXJtaXNzaW9uTmFtZSA9IG5hbWU7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBwZXJtaXNzaW9uTmFtZTtcbn07XG5cbmV4cG9ydCB7Z2V0UGVybWlzc2lvbk5hbWVzfTtcbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge1VzZXJSaWdodHN9IGZyb20gJ34vTWFya1JpZ2h0cy9tb2R1bGVzL3R5cGVzJztcbmltcG9ydCB7YXBpfSBmcm9tICcuL2FwaSc7XG5pbXBvcnQge2dldFBlcm1pc3Npb25OYW1lc30gZnJvbSAnLi9nZXRQZXJtaXNzaW9uTmFtZXMnO1xuXG5jb25zdCBhc3NpZ25QZXJtaXNzaW9uID0gKHtcblx0dXNlck5hbWUsXG5cdHBlcm1pc3Npb24sXG5cdHN1bW1hcnksXG5cdHJldklkLFxuXHRleHBpcnksXG59OiB7XG5cdHVzZXJOYW1lOiBzdHJpbmc7XG5cdHBlcm1pc3Npb246IFVzZXJSaWdodHM7XG5cdHN1bW1hcnk6IHN0cmluZztcblx0cmV2SWQ6IG51bWJlcjtcblx0ZXhwaXJ5OiBzdHJpbmc7XG59KSA9PiB7XG5cdGNvbnN0IHBlcm1hTGluayA9IGBbW1NwZWNpYWw6UGVybWFMaW5rLyR7cmV2SWR9I1VzZXI6JHt1c2VyTmFtZX185p2D6ZmQ55Sz6K+3XV1gO1xuXHRsZXQgZnVsbFN1bW1hcnkgPSBgKyR7Z2V0UGVybWlzc2lvbk5hbWVzKHBlcm1pc3Npb24pfe+8myR7cGVybWFMaW5rfWA7XG5cdGlmIChzdW1tYXJ5ICE9PSAnJykge1xuXHRcdGZ1bGxTdW1tYXJ5ICs9IGDvvJske3N1bW1hcnl9YDtcblx0fVxuXHRmdWxsU3VtbWFyeSArPSBPUFRJT05TLnVzZXJSaWdodHNNYW5hZ2VyU3VtbWFyeTtcblx0Y29uc3QgcGFyYW1zOiBBcGlVc2VycmlnaHRzUGFyYW1zID0ge1xuXHRcdGFjdGlvbjogJ3VzZXJyaWdodHMnLFxuXHRcdHVzZXI6IHVzZXJOYW1lLnJlcGxhY2UoLyAvZywgJ18nKSxcblx0XHRyZWFzb246IGZ1bGxTdW1tYXJ5LFxuXHRcdGFkZDogW3Blcm1pc3Npb25dLFxuXHRcdGV4cGlyeTogZXhwaXJ5ID09PSAnJyA/ICdpbmZpbml0eScgOiBleHBpcnksXG5cdH07XG5cdGlmIChwZXJtaXNzaW9uID09PSAncGF0cm9sbGVyJyAmJiBleHBpcnkgPT09ICdpbmZpbml0ZScpIHtcblx0XHRwYXJhbXMucmVtb3ZlID0gJ2F1dG9yZXZpZXdlcic7XG5cdH1cblx0cmV0dXJuIGFwaS5wb3N0V2l0aFRva2VuKCd1c2VycmlnaHRzJywgcGFyYW1zKTtcbn07XG5cbmV4cG9ydCB7YXNzaWduUGVybWlzc2lvbn07XG4iLCAiaW1wb3J0IHR5cGUge1VzZXJSaWdodHN9IGZyb20gJ34vTWFya1JpZ2h0cy9tb2R1bGVzL3R5cGVzJztcblxuY29uc3QgZ2V0UGVybWlzc2lvblRlbXBsYXRlID0gKHBlcm1pc3Npb246IFVzZXJSaWdodHMpOiBzdHJpbmcgfCBudWxsID0+IHtcblx0Y29uc3QgcGVybWlzc2lvblRlbXBsYXRlcyA9IHtcblx0XHRwYXRyb2xsZXI6ICdQYXRyb2wgZ3JhbnRlZCcsXG5cdFx0YXV0b3Jldmlld2VyOiAnQXV0b3BhdHJvbCBncmFudGVkJyxcblx0XHQnbWFzc21lc3NhZ2Utc2VuZGVyJzogJ01NUyBncmFudGVkJyxcblx0XHR0ZW1wbGF0ZWVkaXRvcjogJ1RlbXBsYXRlIGVkaXRvciBncmFudGVkJyxcblx0XHR0cmFuc3dpa2k6ICdUcmFuc3dpa2kgZ3JhbnRlZCcsXG5cdH0gYXMgY29uc3Qgc2F0aXNmaWVzIFBhcnRpYWw8UmVjb3JkPFVzZXJSaWdodHMsIHN0cmluZz4+O1xuXG5cdGxldCB0ZW1wbGF0ZTogc3RyaW5nIHwgbnVsbCA9IG51bGw7XG5cdGZvciAoY29uc3QgW3BhZ2VQZXJtaXNzaW9uLCB0ZW1wbGF0ZU5hbWVdIG9mIE9iamVjdC5lbnRyaWVzKHBlcm1pc3Npb25UZW1wbGF0ZXMpKSB7XG5cdFx0aWYgKHBlcm1pc3Npb24gPT09IHBhZ2VQZXJtaXNzaW9uKSB7XG5cdFx0XHR0ZW1wbGF0ZSA9IHRlbXBsYXRlTmFtZTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHRlbXBsYXRlO1xufTtcblxuZXhwb3J0IHtnZXRQZXJtaXNzaW9uVGVtcGxhdGV9O1xuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7QXBpUmVzcG9uc2V9IGZyb20gJ3R5cGVzLW1lZGlhd2lraS9tdy9BcGknO1xuaW1wb3J0IHtVc2VyUmlnaHRzfSBmcm9tICd+L01hcmtSaWdodHMvbW9kdWxlcy90eXBlcyc7XG5pbXBvcnQge2FwaX0gZnJvbSAnLi9hcGknO1xuaW1wb3J0IHtnZXRQZXJtaXNzaW9uTmFtZXN9IGZyb20gJy4vZ2V0UGVybWlzc2lvbk5hbWVzJztcbmltcG9ydCB7Z2V0UGVybWlzc2lvblRlbXBsYXRlfSBmcm9tICcuL2dldFRlbXBsYXRlcyc7XG5cbmNvbnN0IGlzc3VlVGVtcGxhdGUgPSAoe1xuXHR1c2VyTmFtZSxcblx0cGVybWlzc2lvbixcblx0d2F0Y2gsXG59OiB7XG5cdHVzZXJOYW1lOiBzdHJpbmc7XG5cdHBlcm1pc3Npb246IFVzZXJSaWdodHM7XG5cdHdhdGNoOiBib29sZWFuIHwgJ3dhdGNoJyB8ICd1bndhdGNoJztcbn0pOiBKUXVlcnkuUHJvbWlzZTxBcGlSZXNwb25zZT4gfCB2b2lkID0+IHtcblx0Y29uc3QgcGVybWlzc2lvblRlbXBsYXRlID0gZ2V0UGVybWlzc2lvblRlbXBsYXRlKHBlcm1pc3Npb24pO1xuXHRpZiAoIXBlcm1pc3Npb25UZW1wbGF0ZSkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IHBlcm1pc3Npb25OYW1lID0gZ2V0UGVybWlzc2lvbk5hbWVzKHBlcm1pc3Npb24pO1xuXHRjb25zdCB0YWxrUGFnZSA9IGBVc2VyIHRhbGs6JHt1c2VyTmFtZS5yZXBsYWNlKC8gL2csICdfJyl9YDtcblx0Y29uc3QgcGFyYW1zOiBBcGlFZGl0UGFnZVBhcmFtcyA9IHtcblx0XHRhY3Rpb246ICdlZGl0Jyxcblx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHR0aXRsZTogdGFsa1BhZ2UsXG5cdFx0YXBwZW5kdGV4dDogJ1xcblxcbnt7Jy5jb25jYXQoJ3N1YnN0OicsIHBlcm1pc3Npb25UZW1wbGF0ZSwgJ319JyksXG5cdFx0c3VtbWFyeTogYOagueaNruWFseivhuaOiOS6iCR7cGVybWlzc2lvbk5hbWV9JHtPUFRJT05TLnVzZXJSaWdodHNNYW5hZ2VyU3VtbWFyeX1gLFxuXHRcdHdhdGNobGlzdDogd2F0Y2ggPyAnd2F0Y2gnIDogJ3Vud2F0Y2gnLFxuXHR9O1xuXHRyZXR1cm4gYXBpLnBvc3RXaXRoRWRpdFRva2VuKHBhcmFtcyk7XG59O1xuXG5leHBvcnQge2lzc3VlVGVtcGxhdGV9O1xuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7YXBpfSBmcm9tICcuL2FwaSc7XG5jb25zdCB0YWdMaW5lID0gT1BUSU9OUy51c2VyUmlnaHRzTWFuYWdlclN1bW1hcnk7XG5cbmNvbnN0IHF1ZXJ5UmV2aXNpb25zID0gYXN5bmMgKHRpdGxlczogc3RyaW5nIHwgc3RyaW5nW10sIHJ2c2VjdGlvbjogc3RyaW5nKSA9PiB7XG5cdGNvbnN0IHBhcmFtczogQXBpUXVlcnlSZXZpc2lvbnNQYXJhbXMgPSB7XG5cdFx0dGl0bGVzLFxuXHRcdHJ2c2VjdGlvbixcblx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdHByb3A6ICdyZXZpc2lvbnMnLFxuXHRcdGN1cnRpbWVzdGFtcDogdHJ1ZSxcblx0XHRydnByb3A6IFsnY29udGVudCcsICd0aW1lc3RhbXAnXSxcblx0XHRydnNsb3RzOiAnbWFpbicsXG5cdH07XG5cblx0cmV0dXJuIGF3YWl0IGFwaS5nZXQocGFyYW1zKTtcbn07XG5cbmNvbnN0IG1hcmtBc0RvbmUgPSAoe3VzZXJOYW1lLCBpbmRleCwgY2xvc2luZ1JlbWFya3N9OiB7dXNlck5hbWU6IHN0cmluZzsgaW5kZXg6IHN0cmluZzsgY2xvc2luZ1JlbWFya3M6IHN0cmluZ30pID0+IHtcblx0Y29uc3Qge3dnUGFnZU5hbWUsIHdnVXNlck5hbWV9ID0gbXcuY29uZmlnLmdldCgpO1xuXHRjb25zdCBzZWN0aW9uTm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuXHRcdGBVc2VyOiR7dXNlck5hbWUucmVwbGFjZSgvXCIvZywgJy4yMicpLnJlcGxhY2UoLyAvZywgJ18nKX0ke2luZGV4ID8/ICcnfWBcblx0KTtcblxuXHRjb25zdCBzZWN0aW9uTnVtYmVyID0gKFxuXHRcdChcblx0XHRcdCQoc2VjdGlvbk5vZGUgYXMgSFRNTEVsZW1lbnQpXG5cdFx0XHRcdC5zaWJsaW5ncygnLm13LWVkaXRzZWN0aW9uJylcblx0XHRcdFx0LmZpbmQoJ2E6bm90KC5tdy1lZGl0c2VjdGlvbi12aXN1YWxlZGl0b3IpW2hyZWYqPWVkaXRdJylcblx0XHRcdFx0LnByb3AoJ2hyZWYnKSBhcyBzdHJpbmdcblx0XHQpLm1hdGNoKC9zZWN0aW9uPShcXGQrKS8pIGFzIFJlZ0V4cE1hdGNoQXJyYXlcblx0KVsxXSBhcyBzdHJpbmc7XG5cblx0bGV0IGJhc2V0aW1lc3RhbXA6IHN0cmluZztcblx0bGV0IGN1cnRpbWVzdGFtcDogc3RyaW5nO1xuXHRsZXQgY29udGVudDogc3RyaW5nO1xuXHRsZXQgcmV2aXNpb247XG5cblx0cmV0dXJuIHF1ZXJ5UmV2aXNpb25zKHdnUGFnZU5hbWUsIHNlY3Rpb25OdW1iZXIpXG5cdFx0LnRoZW4oKGRhdGEpID0+IHtcblx0XHRcdGlmICghZGF0YVsncXVlcnknXSB8fCAhZGF0YVsncXVlcnknXS5wYWdlcykge1xuXHRcdFx0XHRyZXR1cm4gJC5EZWZlcnJlZCgpLnJlamVjdCgndW5rbm93bicpO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCB7cGFnZXN9ID0gZGF0YVsncXVlcnknXSBhcyB7XG5cdFx0XHRcdHBhZ2VzOiB7XG5cdFx0XHRcdFx0aW52YWxpZD86IGJvb2xlYW47XG5cdFx0XHRcdFx0bWlzc2luZz86IGJvb2xlYW47XG5cdFx0XHRcdFx0cmV2aXNpb25zOiB7XG5cdFx0XHRcdFx0XHR0aW1lc3RhbXA6IHN0cmluZztcblx0XHRcdFx0XHRcdHNsb3RzOiB7XG5cdFx0XHRcdFx0XHRcdG1haW46IHtcblx0XHRcdFx0XHRcdFx0XHRjb250ZW50OiBzdHJpbmc7XG5cdFx0XHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdH1bXTtcblx0XHRcdFx0fVtdO1xuXHRcdFx0fTtcblx0XHRcdGNvbnN0IFtwYWdlXSA9IHBhZ2VzO1xuXG5cdFx0XHRpZiAoIXBhZ2UgfHwgcGFnZS5pbnZhbGlkKSB7XG5cdFx0XHRcdHJldHVybiAkLkRlZmVycmVkKCkucmVqZWN0KCdpbnZhbGlkdGl0bGUnKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKHBhZ2UubWlzc2luZykge1xuXHRcdFx0XHRyZXR1cm4gJC5EZWZlcnJlZCgpLnJlamVjdCgnbm9jcmVhdGUtbWlzc2luZycpO1xuXHRcdFx0fVxuXG5cdFx0XHRbcmV2aXNpb25dID0gcGFnZS5yZXZpc2lvbnM7XG5cdFx0XHRpZiAocmV2aXNpb24pIHtcblx0XHRcdFx0KHtcblx0XHRcdFx0XHRzbG90czoge1xuXHRcdFx0XHRcdFx0bWFpbjoge2NvbnRlbnR9LFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0dGltZXN0YW1wOiBiYXNldGltZXN0YW1wLFxuXHRcdFx0XHR9ID0gcmV2aXNpb24pO1xuXHRcdFx0fVxuXHRcdFx0Y3VydGltZXN0YW1wID0gZGF0YVsnY3VydGltZXN0YW1wJ10gYXMgc3RyaW5nO1xuXHRcdFx0cmV0dXJuICQuRGVmZXJyZWQoKS5yZXNvbHZlKCk7XG5cdFx0fSlcblx0XHQudGhlbigoKSA9PiB7XG5cdFx0XHRjb250ZW50ID0gY29udGVudC50cmltKCk7XG5cdFx0XHRjb250ZW50ID0gY29udGVudC5yZXBsYWNlKC8oOlxccyp7e1N0YXR1cykoXFx8Lio/KT99fS9pLCAnJDF8K319Jyk7XG5cdFx0XHRjb250ZW50ICs9IGNsb3NpbmdSZW1hcmtzO1xuXG5cdFx0XHRjb25zdCBlZGl0UGFyYW1zOiBBcGlFZGl0UGFnZVBhcmFtcyA9IHtcblx0XHRcdFx0YWN0aW9uOiAnZWRpdCcsXG5cdFx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0XHRcdHRpdGxlOiB3Z1BhZ2VOYW1lLFxuXHRcdFx0XHRzZWN0aW9uOiBzZWN0aW9uTnVtYmVyLFxuXHRcdFx0XHR0ZXh0OiBjb250ZW50LFxuXHRcdFx0XHRzdW1tYXJ5OiBgLyogVXNlcjoke3VzZXJOYW1lfSAqLyDlrozmiJAke3RhZ0xpbmV9YCxcblx0XHRcdFx0YmFzZXRpbWVzdGFtcCxcblx0XHRcdFx0c3RhcnR0aW1lc3RhbXA6IGN1cnRpbWVzdGFtcCxcblx0XHRcdFx0bm9jcmVhdGU6IHRydWUsXG5cdFx0XHR9O1xuXHRcdFx0aWYgKHdnVXNlck5hbWUpIHtcblx0XHRcdFx0ZWRpdFBhcmFtcy5hc3NlcnQgPSAndXNlcic7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBhcGkucG9zdFdpdGhFZGl0VG9rZW4oZWRpdFBhcmFtcyk7XG5cdFx0fSk7XG59O1xuXG5leHBvcnQge21hcmtBc0RvbmV9O1xuIiwgImltcG9ydCB7IHRvRGlzcGxheVN0cmluZyBhcyBfdG9EaXNwbGF5U3RyaW5nLCBjcmVhdGVFbGVtZW50Vk5vZGUgYXMgX2NyZWF0ZUVsZW1lbnRWTm9kZSwgY3JlYXRlVGV4dFZOb2RlIGFzIF9jcmVhdGVUZXh0Vk5vZGUsIGNyZWF0ZVZOb2RlIGFzIF9jcmVhdGVWTm9kZSwgd2l0aEN0eCBhcyBfd2l0aEN0eCwgb3BlbkJsb2NrIGFzIF9vcGVuQmxvY2ssIGNyZWF0ZUJsb2NrIGFzIF9jcmVhdGVCbG9jaywgY3JlYXRlQ29tbWVudFZOb2RlIGFzIF9jcmVhdGVDb21tZW50Vk5vZGUsIGNyZWF0ZUVsZW1lbnRCbG9jayBhcyBfY3JlYXRlRWxlbWVudEJsb2NrIH0gZnJvbSBcInZ1ZVwiXG5cbmNvbnN0IF9ob2lzdGVkXzEgPSB7IGNsYXNzOiBcInVzZXItcmlnaHRzLW1hbmFnZXJfX2JvZHlcIiB9XG5jb25zdCBfaG9pc3RlZF8yID0geyBjbGFzczogXCJ1c2VyLXJpZ2h0cy1tYW5hZ2VyX19sb2dcIiB9XG5jb25zdCBfaG9pc3RlZF8zID0gW1wiaHJlZlwiXVxuY29uc3QgX2hvaXN0ZWRfNCA9IHsgZm9yOiBcInVzZXItcmlnaHRzLW1hbmFnZXItc3VtbWFyeVwiIH1cbmNvbnN0IF9ob2lzdGVkXzUgPSB7IGZvcjogXCJ1c2VyLXJpZ2h0cy1tYW5hZ2VyLXN1bW1hcnlcIiB9XG5jb25zdCBfaG9pc3RlZF82ID0geyBmb3I6IFwidXNlci1yaWdodHMtbWFuYWdlci1jdXN0b20tZXhwaXJ5XCIgfVxuY29uc3QgX2hvaXN0ZWRfNyA9IHsgZm9yOiBcInVzZXItcmlnaHRzLW1hbmFnZXItcmVtYXJrc1wiIH1cbmNvbnN0IF9ob2lzdGVkXzggPSB7XG4gIGtleTogMixcbiAgY2xhc3M6IFwidXNlci1yaWdodHMtbWFuYWdlcl9fc3RhdHVzXCJcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlcihfY3R4LCBfY2FjaGUsICRwcm9wcywgJHNldHVwLCAkZGF0YSwgJG9wdGlvbnMpIHtcbiAgcmV0dXJuIChfb3BlbkJsb2NrKCksIF9jcmVhdGVCbG9jaygkc2V0dXBbXCJDZHhEaWFsb2dcIl0sIHtcbiAgICBvcGVuOiAkc2V0dXAub3BlbixcbiAgICBcIm9uVXBkYXRlOm9wZW5cIjogW1xuICAgICAgX2NhY2hlWzVdIHx8IChfY2FjaGVbNV0gPSAkZXZlbnQgPT4gKCgkc2V0dXAub3BlbikgPSAkZXZlbnQpKSxcbiAgICAgIF9jYWNoZVs2XSB8fCAoX2NhY2hlWzZdID0gJGV2ZW50ID0+ICgkZXZlbnQgPT09IGZhbHNlICYmICRzZXR1cC5jbG9zZSgpKSlcbiAgICBdLFxuICAgIHRpdGxlOiBg5o6I5LqIJHskc2V0dXAucGVybWlzc2lvbk5hbWV9JHskc2V0dXAud2dVTFMoJ+e7mScsICfntaYnKX0keyRwcm9wcy51c2VyTmFtZX1gLFxuICAgIFwidXNlLWNsb3NlLWJ1dHRvblwiOiB0cnVlLFxuICAgIFwicHJpbWFyeS1hY3Rpb25cIjoge2xhYmVsOiAkc2V0dXAud2dVTFMoJ+aOiOadgycsICfmjojmrIonKSwgYWN0aW9uVHlwZTogJ3Byb2dyZXNzaXZlJywgZGlzYWJsZWQ6ICRzZXR1cC5zdWJtaXR0aW5nfSxcbiAgICBcImRlZmF1bHQtYWN0aW9uXCI6IHtsYWJlbDogJ+WPlua2iCcsIGRpc2FibGVkOiAkc2V0dXAuc3VibWl0dGluZ30sXG4gICAgb25QcmltYXJ5OiAkc2V0dXAuc3VibWl0LFxuICAgIG9uRGVmYXVsdDogJHNldHVwLmNsb3NlXG4gIH0sIHtcbiAgICBkZWZhdWx0OiBfd2l0aEN0eCgoKSA9PiBbXG4gICAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwiZGl2XCIsIF9ob2lzdGVkXzEsIFtcbiAgICAgICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcInBcIiwgX2hvaXN0ZWRfMiwgW1xuICAgICAgICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJhXCIsIHtcbiAgICAgICAgICAgIGhyZWY6ICRzZXR1cC5sb2dVcmwsXG4gICAgICAgICAgICB0YXJnZXQ6IFwiX2JsYW5rXCIsXG4gICAgICAgICAgICByZWw6IFwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgICAgfSwgX3RvRGlzcGxheVN0cmluZygkc2V0dXAud2dVTFMoJ+acgOi/keadg+mZkOaXpeW/lycsICfmnIDov5HmrIrpmZDml6XoqownKSksIDkgLyogVEVYVCwgUFJPUFMgKi8sIF9ob2lzdGVkXzMpLFxuICAgICAgICAgIF9jcmVhdGVUZXh0Vk5vZGUoXCIg77yaXCIgKyBfdG9EaXNwbGF5U3RyaW5nKCRzZXR1cC5yaWdodExvZyksIDEgLyogVEVYVCAqLylcbiAgICAgICAgXSksXG4gICAgICAgIF9jcmVhdGVWTm9kZSgkc2V0dXBbXCJDZHhGaWVsZFwiXSwgbnVsbCwge1xuICAgICAgICAgIGRlZmF1bHQ6IF93aXRoQ3R4KCgpID0+IFtcbiAgICAgICAgICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJsYWJlbFwiLCBfaG9pc3RlZF80LCBfdG9EaXNwbGF5U3RyaW5nKCRzZXR1cC53Z1VMUygn5o6I5p2D5Y6f5ZugJywgJ+aOiOasiuWOn+WboCcpKSwgMSAvKiBURVhUICovKSxcbiAgICAgICAgICAgIF9jcmVhdGVWTm9kZSgkc2V0dXBbXCJDZHhUZXh0SW5wdXRcIl0sIHtcbiAgICAgICAgICAgICAgaWQ6IFwidXNlci1yaWdodHMtbWFuYWdlci1zdW1tYXJ5XCIsXG4gICAgICAgICAgICAgIG1vZGVsVmFsdWU6ICRzZXR1cC5yaWdodHNDaGFuZ2VTdW1tYXJ5LFxuICAgICAgICAgICAgICBcIm9uVXBkYXRlOm1vZGVsVmFsdWVcIjogX2NhY2hlWzBdIHx8IChfY2FjaGVbMF0gPSAkZXZlbnQgPT4gKCgkc2V0dXAucmlnaHRzQ2hhbmdlU3VtbWFyeSkgPSAkZXZlbnQpKSxcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwi5Y+v55WZ56m6XCIsXG4gICAgICAgICAgICAgIGRpc2FibGVkOiAkc2V0dXAuc3VibWl0dGluZ1xuICAgICAgICAgICAgfSwgbnVsbCwgOCAvKiBQUk9QUyAqLywgW1wibW9kZWxWYWx1ZVwiLCBcImRpc2FibGVkXCJdKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF86IDEgLyogU1RBQkxFICovXG4gICAgICAgIH0pLFxuICAgICAgICBfY3JlYXRlVk5vZGUoJHNldHVwW1wiQ2R4RmllbGRcIl0sIG51bGwsIHtcbiAgICAgICAgICBkZWZhdWx0OiBfd2l0aEN0eCgoKSA9PiBbXG4gICAgICAgICAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwibGFiZWxcIiwgX2hvaXN0ZWRfNSwgX3RvRGlzcGxheVN0cmluZygkc2V0dXAud2dVTFMoJ+aOiOadg+acn+mZkCcsICfmjojmrIrmnJ/pmZAnKSksIDEgLyogVEVYVCAqLyksXG4gICAgICAgICAgICBfY3JlYXRlVk5vZGUoJHNldHVwW1wiQ2R4U2VsZWN0XCJdLCB7XG4gICAgICAgICAgICAgIHNlbGVjdGVkOiAkc2V0dXAuZXhwaXJ5LFxuICAgICAgICAgICAgICBcIm9uVXBkYXRlOnNlbGVjdGVkXCI6IF9jYWNoZVsxXSB8fCAoX2NhY2hlWzFdID0gJGV2ZW50ID0+ICgoJHNldHVwLmV4cGlyeSkgPSAkZXZlbnQpKSxcbiAgICAgICAgICAgICAgXCJtZW51LWl0ZW1zXCI6ICRzZXR1cC5leHBpcnlJdGVtcyxcbiAgICAgICAgICAgICAgZGlzYWJsZWQ6ICRzZXR1cC5zdWJtaXR0aW5nXG4gICAgICAgICAgICB9LCBudWxsLCA4IC8qIFBST1BTICovLCBbXCJzZWxlY3RlZFwiLCBcImRpc2FibGVkXCJdKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF86IDEgLyogU1RBQkxFICovXG4gICAgICAgIH0pLFxuICAgICAgICAoJHNldHVwLmV4cGlyeSA9PT0gJ290aGVyJylcbiAgICAgICAgICA/IChfb3BlbkJsb2NrKCksIF9jcmVhdGVCbG9jaygkc2V0dXBbXCJDZHhGaWVsZFwiXSwgeyBrZXk6IDAgfSwge1xuICAgICAgICAgICAgICBkZWZhdWx0OiBfd2l0aEN0eCgoKSA9PiBbXG4gICAgICAgICAgICAgICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcImxhYmVsXCIsIF9ob2lzdGVkXzYsIF90b0Rpc3BsYXlTdHJpbmcoJHNldHVwLndnVUxTKCfoh6rlrprkuYnml7bpl7QnLCAn6Ieq6KiC5pmC6ZaTJykpLCAxIC8qIFRFWFQgKi8pLFxuICAgICAgICAgICAgICAgIF9jcmVhdGVWTm9kZSgkc2V0dXBbXCJDZHhUZXh0SW5wdXRcIl0sIHtcbiAgICAgICAgICAgICAgICAgIGlkOiBcInVzZXItcmlnaHRzLW1hbmFnZXItY3VzdG9tLWV4cGlyeVwiLFxuICAgICAgICAgICAgICAgICAgbW9kZWxWYWx1ZTogJHNldHVwLmN1c3RvbUV4cGlyeSxcbiAgICAgICAgICAgICAgICAgIFwib25VcGRhdGU6bW9kZWxWYWx1ZVwiOiBfY2FjaGVbMl0gfHwgKF9jYWNoZVsyXSA9ICRldmVudCA9PiAoKCRzZXR1cC5jdXN0b21FeHBpcnkpID0gJGV2ZW50KSksXG4gICAgICAgICAgICAgICAgICBkaXNhYmxlZDogJHNldHVwLnN1Ym1pdHRpbmdcbiAgICAgICAgICAgICAgICB9LCBudWxsLCA4IC8qIFBST1BTICovLCBbXCJtb2RlbFZhbHVlXCIsIFwiZGlzYWJsZWRcIl0pXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfOiAxIC8qIFNUQUJMRSAqL1xuICAgICAgICAgICAgfSkpXG4gICAgICAgICAgOiBfY3JlYXRlQ29tbWVudFZOb2RlKFwidi1pZlwiLCB0cnVlKSxcbiAgICAgICAgX2NyZWF0ZVZOb2RlKCRzZXR1cFtcIkNkeEZpZWxkXCJdLCBudWxsLCB7XG4gICAgICAgICAgZGVmYXVsdDogX3dpdGhDdHgoKCkgPT4gW1xuICAgICAgICAgICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcImxhYmVsXCIsIF9ob2lzdGVkXzcsIF90b0Rpc3BsYXlTdHJpbmcoJHNldHVwLndnVUxTKCflhbPpl63or7fmsYLnlZnoqIAnLCAn6Zec6ZaJ6KuL5rGC55WZ6KiAJykpLCAxIC8qIFRFWFQgKi8pLFxuICAgICAgICAgICAgX2NyZWF0ZVZOb2RlKCRzZXR1cFtcIkNkeFRleHRJbnB1dFwiXSwge1xuICAgICAgICAgICAgICBpZDogXCJ1c2VyLXJpZ2h0cy1tYW5hZ2VyLXJlbWFya3NcIixcbiAgICAgICAgICAgICAgbW9kZWxWYWx1ZTogJHNldHVwLmNsb3NpbmdSZW1hcmtzLFxuICAgICAgICAgICAgICBcIm9uVXBkYXRlOm1vZGVsVmFsdWVcIjogX2NhY2hlWzNdIHx8IChfY2FjaGVbM10gPSAkZXZlbnQgPT4gKCgkc2V0dXAuY2xvc2luZ1JlbWFya3MpID0gJGV2ZW50KSksXG4gICAgICAgICAgICAgIGRpc2FibGVkOiAkc2V0dXAuc3VibWl0dGluZ1xuICAgICAgICAgICAgfSwgbnVsbCwgOCAvKiBQUk9QUyAqLywgW1wibW9kZWxWYWx1ZVwiLCBcImRpc2FibGVkXCJdKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF86IDEgLyogU1RBQkxFICovXG4gICAgICAgIH0pLFxuICAgICAgICAoJHNldHVwLnBlcm1pc3Npb25UZW1wbGF0ZSlcbiAgICAgICAgICA/IChfb3BlbkJsb2NrKCksIF9jcmVhdGVCbG9jaygkc2V0dXBbXCJDZHhGaWVsZFwiXSwgeyBrZXk6IDEgfSwge1xuICAgICAgICAgICAgICBkZWZhdWx0OiBfd2l0aEN0eCgoKSA9PiBbXG4gICAgICAgICAgICAgICAgX2NyZWF0ZVZOb2RlKCRzZXR1cFtcIkNkeENoZWNrYm94XCJdLCB7XG4gICAgICAgICAgICAgICAgICBtb2RlbFZhbHVlOiAkc2V0dXAud2F0Y2hUYWxrUGFnZSxcbiAgICAgICAgICAgICAgICAgIFwib25VcGRhdGU6bW9kZWxWYWx1ZVwiOiBfY2FjaGVbNF0gfHwgKF9jYWNoZVs0XSA9ICRldmVudCA9PiAoKCRzZXR1cC53YXRjaFRhbGtQYWdlKSA9ICRldmVudCkpLFxuICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6ICRzZXR1cC5zdWJtaXR0aW5nXG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgZGVmYXVsdDogX3dpdGhDdHgoKCkgPT4gW1xuICAgICAgICAgICAgICAgICAgICBfY3JlYXRlVGV4dFZOb2RlKF90b0Rpc3BsYXlTdHJpbmcoJHNldHVwLndnVUxTKCfnm5Hop4bnlKjmiLforqjorrrpobUnLCAn55uj6KaW5L2/55So6ICF6KiO6KuW6aCBJykpLCAxIC8qIFRFWFQgKi8pXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF86IDEgLyogU1RBQkxFICovXG4gICAgICAgICAgICAgICAgfSwgOCAvKiBQUk9QUyAqLywgW1wibW9kZWxWYWx1ZVwiLCBcImRpc2FibGVkXCJdKVxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgXzogMSAvKiBTVEFCTEUgKi9cbiAgICAgICAgICAgIH0pKVxuICAgICAgICAgIDogX2NyZWF0ZUNvbW1lbnRWTm9kZShcInYtaWZcIiwgdHJ1ZSksXG4gICAgICAgICgkc2V0dXAuc3VibWl0dGluZylcbiAgICAgICAgICA/IChfb3BlbkJsb2NrKCksIF9jcmVhdGVFbGVtZW50QmxvY2soXCJwXCIsIF9ob2lzdGVkXzgsIF90b0Rpc3BsYXlTdHJpbmcoJHNldHVwLndnVUxTKCflpITnkIbkuK3igKbigKYnLCAn6JmV55CG5Lit4oCm4oCmJykpLCAxIC8qIFRFWFQgKi8pKVxuICAgICAgICAgIDogX2NyZWF0ZUNvbW1lbnRWTm9kZShcInYtaWZcIiwgdHJ1ZSlcbiAgICAgIF0pXG4gICAgXSksXG4gICAgXzogMSAvKiBTVEFCTEUgKi9cbiAgfSwgOCAvKiBQUk9QUyAqLywgW1wib3BlblwiLCBcInRpdGxlXCIsIFwicHJpbWFyeS1hY3Rpb25cIiwgXCJkZWZhdWx0LWFjdGlvblwiXSkpXG59IiwgImltcG9ydCBzY3JpcHQgZnJvbSBcIkQ6XFxcXEdpdFJlcG9zaXRvcnlcXFxcUWl1d2VuR2FkZ2V0c1xcXFxzcmNcXFxcVXNlclJpZ2h0c01hbmFnZXJcXFxcQXBwLnZ1ZT90eXBlPXNjcmlwdFwiO2ltcG9ydCBcIkQ6XFxcXEdpdFJlcG9zaXRvcnlcXFxcUWl1d2VuR2FkZ2V0c1xcXFxzcmNcXFxcVXNlclJpZ2h0c01hbmFnZXJcXFxcQXBwLnZ1ZT90eXBlPXN0eWxlJmluZGV4PTBcIjtpbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwiRDpcXFxcR2l0UmVwb3NpdG9yeVxcXFxRaXV3ZW5HYWRnZXRzXFxcXHNyY1xcXFxVc2VyUmlnaHRzTWFuYWdlclxcXFxBcHAudnVlP3R5cGU9dGVtcGxhdGVcIjsgc2NyaXB0LnJlbmRlciA9IHJlbmRlcjtzY3JpcHQuX19maWxlID0gXCJzcmNcXFxcVXNlclJpZ2h0c01hbmFnZXJcXFxcQXBwLnZ1ZVwiO2V4cG9ydCBkZWZhdWx0IHNjcmlwdDsiXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxxQkFBc0JDLFFBQUEsaUJBQUE7O0FDRXRCLElBQU1DLHFCQUFxQkEsTUFBeUI7QUFDbkQsUUFBTTtJQUFDQztFQUFVLElBQUlDLEdBQUdDLE9BQU9DLElBQUk7QUFFbkMsUUFBTUMsa0JBQWtCO0lBQ3ZCLDRCQUE0QjtJQUM1Qiw0QkFBNEI7SUFDNUIsNEJBQTRCO0lBQzVCLDhCQUE4QjtJQUM5Qiw0QkFBNEI7SUFDNUIsMEJBQTBCO0lBQzFCLDRCQUE0QjtJQUM1Qiw0QkFBNEI7SUFDNUIsOEJBQThCO0lBQzlCLDhCQUE4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MiIsICJyZXF1aXJlIiwgImdldFBhZ2VQZXJtaXNzaW9ucyIsICJ3Z1BhZ2VOYW1lIiwgIm13IiwgImNvbmZpZyIsICJnZXQiLCAicGFnZVBlcm1pc3Npb25zIiwgInBlcm1pc3Npb24iLCAiX2kiLCAiX09iamVjdCRlbnRyaWVzIiwgIk9iamVjdCIsICJlbnRyaWVzIiwgImxlbmd0aCIsICJwYWdlTmFtZSIsICJwYWdlUGVybWlzc2lvbiIsICJpbXBvcnRfdnVlNCIsICJpbXBvcnRfY29kZXgiLCAiaW1wb3J0X3Z1ZTIiLCAidXNlclJpZ2h0c01hbmFnZXJTdW1tYXJ5IiwgInZlcnNpb24iLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAiYXBpIiwgImluaXRNd0FwaSIsICJjb25jYXQiLCAiZ2V0UGVybWlzc2lvbk5hbWVzIiwgInBlcm1pc3Npb25OYW1lcyIsICJwYXRyb2xsZXIiLCAiYXV0b3Jldmlld2VyIiwgImNvbmZpcm1lZCIsICJldmVudHNwb25zb3IiLCAidHJhbnN3aWtpIiwgInRlbXBsYXRlZWRpdG9yIiwgImJvdCIsICJwZXJtaXNzaW9uTmFtZSIsICJfaTIiLCAiX09iamVjdCRlbnRyaWVzMiIsICJyaWdodCIsICJuYW1lIiwgImFzc2lnblBlcm1pc3Npb24iLCAidXNlck5hbWUiLCAic3VtbWFyeSIsICJyZXZJZCIsICJleHBpcnkiLCAicGVybWFMaW5rIiwgImZ1bGxTdW1tYXJ5IiwgInBhcmFtcyIsICJhY3Rpb24iLCAidXNlciIsICJyZXBsYWNlIiwgInJlYXNvbiIsICJhZGQiLCAicmVtb3ZlIiwgInBvc3RXaXRoVG9rZW4iLCAiZ2V0UGVybWlzc2lvblRlbXBsYXRlIiwgInBlcm1pc3Npb25UZW1wbGF0ZXMiLCAidGVtcGxhdGUiLCAiX2kzIiwgIl9PYmplY3QkZW50cmllczMiLCAidGVtcGxhdGVOYW1lIiwgImlzc3VlVGVtcGxhdGUiLCAid2F0Y2giLCAicGVybWlzc2lvblRlbXBsYXRlIiwgInRhbGtQYWdlIiwgImZvcm1hdCIsICJ0aXRsZSIsICJhcHBlbmR0ZXh0IiwgIndhdGNobGlzdCIsICJwb3N0V2l0aEVkaXRUb2tlbiIsICJ0YWdMaW5lIiwgInF1ZXJ5UmV2aXNpb25zIiwgIl9yZWYiLCAiX2FzeW5jVG9HZW5lcmF0b3IiLCAidGl0bGVzIiwgInJ2c2VjdGlvbiIsICJmb3JtYXR2ZXJzaW9uIiwgInByb3AiLCAiY3VydGltZXN0YW1wIiwgInJ2cHJvcCIsICJydnNsb3RzIiwgIl94IiwgIl94MiIsICJhcHBseSIsICJhcmd1bWVudHMiLCAibWFya0FzRG9uZSIsICJpbmRleCIsICJjbG9zaW5nUmVtYXJrcyIsICJ3Z1VzZXJOYW1lIiwgInNlY3Rpb25Ob2RlIiwgImRvY3VtZW50IiwgImdldEVsZW1lbnRCeUlkIiwgInNlY3Rpb25OdW1iZXIiLCAiJCIsICJzaWJsaW5ncyIsICJmaW5kIiwgIm1hdGNoIiwgImJhc2V0aW1lc3RhbXAiLCAiY29udGVudCIsICJyZXZpc2lvbiIsICJ0aGVuIiwgImRhdGEiLCAicGFnZXMiLCAiRGVmZXJyZWQiLCAicmVqZWN0IiwgInBhZ2UiLCAiaW52YWxpZCIsICJtaXNzaW5nIiwgInJldmlzaW9ucyIsICJzbG90cyIsICJtYWluIiwgInRpbWVzdGFtcCIsICJyZXNvbHZlIiwgInRyaW0iLCAiZWRpdFBhcmFtcyIsICJzZWN0aW9uIiwgInRleHQiLCAic3RhcnR0aW1lc3RhbXAiLCAibm9jcmVhdGUiLCAiYXNzZXJ0IiwgInByb3BzIiwgIl9fcHJvcHMiLCAid2dVTFMiLCAid2luZG93IiwgIm9wZW4iLCAicmVmIiwgInN1Ym1pdHRpbmciLCAicmlnaHRzQ2hhbmdlU3VtbWFyeSIsICJjdXN0b21FeHBpcnkiLCAid2F0Y2hUYWxrUGFnZSIsICJyaWdodExvZyIsICJfZ2V0UGVybWlzc2lvbk5hbWVzIiwgImxvZ1VybCIsICJ1dGlsIiwgImdldFVybCIsICJ0eXBlIiwgImV4cGlyeUl0ZW1zIiwgInZhbHVlIiwgImxhYmVsIiwgImxvYWRSaWdodExvZyIsICJsaXN0IiwgImxlYWN0aW9uIiwgImxldGl0bGUiLCAibGVsaW1pdCIsICJkb25lIiwgImxvZ2V2ZW50cyIsICJsb2dzIiwgImxvZyIsICJNb3JlYml0cyIsICJkYXRlIiwgImNhbGVuZGFyIiwgInJpZ2h0cyIsICJuZXdncm91cHMiLCAiam9pbiIsICJjbG9zZSIsICJvbkNsb3NlIiwgInN1Ym1pdCIsICJfcmVmMiIsICJkb25lRGF0YSIsICJOdW1iZXIiLCAicGFyc2VJbnQiLCAibmV3cmV2aWQiLCAic2V0VGltZW91dCIsICJsb2NhdGlvbiIsICJyZWxvYWQiLCAiZXJyb3IiLCAibm90aWZ5IiwgIlN0cmluZyIsICJ0YWciLCAib25Nb3VudGVkIiwgImltcG9ydF92dWUzIiwgIl9ob2lzdGVkXzEiLCAiY2xhc3MiLCAiX2hvaXN0ZWRfMiIsICJfaG9pc3RlZF8zIiwgIl9ob2lzdGVkXzQiLCAiZm9yIiwgIl9ob2lzdGVkXzUiLCAiX2hvaXN0ZWRfNiIsICJfaG9pc3RlZF83IiwgIl9ob2lzdGVkXzgiLCAia2V5IiwgInJlbmRlciIsICJfY3R4IiwgIl9jYWNoZSIsICIkcHJvcHMiLCAiJHNldHVwIiwgIiRkYXRhIiwgIiRvcHRpb25zIiwgIm9wZW5CbG9jayIsICJjcmVhdGVCbG9jayIsICIkZXZlbnQiLCAiYWN0aW9uVHlwZSIsICJkaXNhYmxlZCIsICJvblByaW1hcnkiLCAib25EZWZhdWx0IiwgImRlZmF1bHQiLCAid2l0aEN0eCIsICJjcmVhdGVFbGVtZW50Vk5vZGUiLCAiaHJlZiIsICJ0YXJnZXQiLCAicmVsIiwgInRvRGlzcGxheVN0cmluZyIsICJjcmVhdGVUZXh0Vk5vZGUiLCAiY3JlYXRlVk5vZGUiLCAiaWQiLCAibW9kZWxWYWx1ZSIsICJwbGFjZWhvbGRlciIsICJfIiwgInNlbGVjdGVkIiwgImNyZWF0ZUNvbW1lbnRWTm9kZSIsICJjcmVhdGVFbGVtZW50QmxvY2siLCAiQXBwX2RlZmF1bHQiLCAiX19maWxlIiwgIkFwcF9kZWZhdWx0MiIsICJhcHAiLCAicm9vdCIsICJzaG93RGlhbG9nIiwgInNob3dEaWFsb2cyIiwgIiRib2R5IiwgIl9yb290IiwgInVubW91bnQiLCAiY3JlYXRlRWxlbWVudCIsICJhcHBlbmQiLCAiY3JlYXRlQXBwIiwgIl9hcHAiLCAiX3Jvb3QyIiwgIm1vdW50IiwgImdldEJvZHkiLCAib24iLCAiZXZlbnQiLCAiXyRlbGVtZW50JHBhcmVudHMkcHJlIiwgInByZXZlbnREZWZhdWx0IiwgIiRlbGVtZW50IiwgImdldFBhcmFtVmFsdWUiLCAiYXR0ciIsICJzZWN0aW9uSWQiLCAicGFyZW50cyIsICJwcmV2Il0KfQo=

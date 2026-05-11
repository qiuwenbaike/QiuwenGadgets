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
//! src/UserRightsManager/options.json
var userRightsManagerSummary = "（[[MediaWiki:Gadget-UserRightsManager.js|UserRightsManager]]）";
var version = "2.0";
//! src/UserRightsManager/modules/api.ts
var import_ext_gadget = require("ext.gadget.Util");
var api = (0, import_ext_gadget.initMwApi)("morebits.js; UserRightsManager/".concat(version));
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
var queryRevisions = /* @__PURE__ */ function() {
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
}();
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
//! src/UserRightsManager/modules/showDialog.ts
var showDialog = function showDialog2({
  $body,
  userName,
  permission,
  index
}) {
  const {
    wgULS
  } = window;
  const permissionTemplate = getPermissionTemplate(permission);
  const permissionName = getPermissionNames(permission);
  class Dialog extends OO.ui.ProcessDialog {
    static editPanel;
    static rightLog;
    static editFieldset;
    static rightsChangeSummaryInput;
    static expiryInput;
    static closingRemarksInput;
    static watchTalkPageCheckbox;
    static submitPanel;
    static submitFieldset;
    static stackLayout;
    $body;
    constructor() {
      super({
        size: "medium"
      });
    }
    // eslint-disable-next-line class-methods-use-this
    getBodyHeight() {
      return 255;
    }
    initialize() {
      super.initialize();
      Dialog.editPanel = new OO.ui.PanelLayout({
        expanded: false
      });
      const rightLogWapper = $("<span>");
      const url = mw.util.getUrl("Special:Log/rights", {
        type: "rights",
        page: "User:".concat(userName)
      });
      $("<a>").text(wgULS("最近权限日志", "最近權限日誌")).attr({
        href: url,
        target: "_blank"
      }).appendTo(rightLogWapper);
      rightLogWapper.append("：");
      const rightLogText = $("<span>").text(wgULS("获取中", "取得中")).appendTo(rightLogWapper);
      Dialog.rightLog = new OO.ui.LabelWidget({
        label: rightLogWapper
      });
      Dialog.editPanel.$element.append(Dialog.rightLog.$element);
      const queryLogEventsParams = {
        action: "query",
        format: "json",
        list: "logevents",
        leaction: "rights/rights",
        letitle: "User:".concat(userName),
        lelimit: 1
      };
      void api.get(queryLogEventsParams).done((data) => {
        const {
          logevents: logs
        } = data["query"];
        if (logs.length === 0 || !logs[0]) {
          rightLogText.text(wgULS("没有任何日志", "沒有任何日誌"));
        } else {
          const timestamp = new Morebits.date(logs[0].timestamp).calendar();
          const rights = logs[0].params.newgroups.join("、") || wgULS("（无）", "（無）");
          rightLogText.text("".concat(timestamp, " ").concat(logs[0].user).concat(wgULS("将用户组改为", "將使用者群組改為")).concat(rights));
        }
      });
      Dialog.editFieldset = new OO.ui.FieldsetLayout({
        classes: ["container"]
      });
      Dialog.editPanel.$element.append(Dialog.editFieldset.$element);
      Dialog.rightsChangeSummaryInput = new OO.ui.TextInputWidget({
        value: "",
        placeholder: "可留空"
      });
      Dialog.expiryInput = new mw.widgets.ExpiryWidget({
        $overlay: $body.find(".oo-ui-window"),
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-explicit-any
        RelativeInputClass: mw.widgets.SelectWithInputWidget,
        relativeInput: {
          or: true,
          dropdowninput: {
            options: [{
              data: "1 day",
              label: "1天"
            }, {
              data: "1 week",
              label: wgULS("1周", "1週")
            }, {
              data: "1 month",
              label: wgULS("1个月", "1個月")
            }, {
              data: "3 months",
              label: wgULS("3个月", "3個月")
            }, {
              data: "6 months",
              label: wgULS("6个月", "6個月")
            }, {
              data: "1 year",
              label: "1年"
            }, {
              data: "infinite",
              label: wgULS("没有期限", "沒有期限")
            }, {
              data: "other",
              label: wgULS("其他时间", "其他時間")
            }],
            value: "infinite"
          },
          textinput: {
            required: true
          }
        }
      });
      Dialog.closingRemarksInput = new OO.ui.TextInputWidget({
        value: "{{done}}--~~~~"
      });
      Dialog.watchTalkPageCheckbox = new OO.ui.CheckboxInputWidget({
        selected: false
      });
      const formElements = [new OO.ui.FieldLayout(Dialog.rightsChangeSummaryInput, {
        label: wgULS("授权原因", "授權原因")
      }), new OO.ui.FieldLayout(Dialog.expiryInput, {
        label: wgULS("结束时间", "結束時間")
      }), new OO.ui.FieldLayout(Dialog.closingRemarksInput, {
        label: wgULS("关闭请求留言", "關閉請求留言")
      })];
      if (permissionTemplate) {
        formElements.push(new OO.ui.FieldLayout(Dialog.watchTalkPageCheckbox, {
          label: wgULS("监视用户讨论页", "監視使用者討論頁")
        }));
      }
      Dialog.editFieldset.addItems(formElements);
      Dialog.submitPanel = new OO.ui.PanelLayout({
        expanded: false
      });
      Dialog.submitFieldset = new OO.ui.FieldsetLayout({
        classes: ["container"]
      });
      Dialog.submitPanel.$element.append(Dialog.submitFieldset.$element);
      Dialog.submitPanel.$element.append(Dialog.submitFieldset.$element);
      Dialog.stackLayout = new OO.ui.StackLayout({
        items: [Dialog.editPanel, Dialog.submitPanel],
        padded: true
      });
      this.$body.append(Dialog.stackLayout.$element);
      return this;
    }
    static onSubmit() {
      void markAsDone({
        userName,
        index,
        closingRemarks: "\n:".concat(Dialog.closingRemarksInput.getValue())
      }).then((data) => {
        void assignPermission({
          userName,
          permission,
          summary: Dialog.rightsChangeSummaryInput.getValue(),
          revId: Number.parseInt(data["edit"].newrevid, 10),
          expiry: Dialog.expiryInput.getValue()
        });
      }).then(() => {
        void issueTemplate({
          userName,
          permission,
          watch: Dialog.watchTalkPageCheckbox.isSelected()
        });
      }).then(() => {
        setTimeout(() => {
          location.reload();
        }, 1e3);
      });
      Dialog.stackLayout.setItem(Dialog.submitPanel);
    }
    static pushPending() {
      throw new Error("Method not implemented.");
    }
    static popPending() {
      throw new Error("Method not implemented.");
    }
    getActionProcess(action) {
      return super.getActionProcess(action).next(function() {
        if (action === "submit") {
          return Dialog.onSubmit();
        }
        return Dialog.super.prototype.getActionProcess.call(this, action);
      }, this);
    }
  }
  Dialog.static = {
    ...OO.ui.ProcessDialog.static
  };
  Dialog.static.name = "user-rights-manager";
  Dialog.static.title = "授予".concat(permissionName).concat(wgULS("给", "給")).concat(userName);
  Dialog.static.actions = [{
    action: "submit",
    label: wgULS("授权", "授權"),
    flags: ["primary", "progressive"]
  }, {
    label: "取消",
    flags: "safe"
  }];
  const dialog = new Dialog();
  const windowManager = new OO.ui.WindowManager();
  $("body").append(windowManager.$element);
  windowManager.addWindows([dialog]);
  void windowManager.openWindow(dialog);
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1VzZXJSaWdodHNNYW5hZ2VyL1VzZXJSaWdodHNNYW5hZ2VyLnRzIiwgInNyYy9Vc2VyUmlnaHRzTWFuYWdlci9tb2R1bGVzL2dldFBhZ2VQZXJtaXNzaW9ucy50cyIsICJzcmMvVXNlclJpZ2h0c01hbmFnZXIvb3B0aW9ucy5qc29uIiwgInNyYy9Vc2VyUmlnaHRzTWFuYWdlci9tb2R1bGVzL2FwaS50cyIsICJzcmMvVXNlclJpZ2h0c01hbmFnZXIvbW9kdWxlcy9nZXRQZXJtaXNzaW9uTmFtZXMudHMiLCAic3JjL1VzZXJSaWdodHNNYW5hZ2VyL21vZHVsZXMvYXNzaWduUGVybWlzc2lvbi50cyIsICJzcmMvVXNlclJpZ2h0c01hbmFnZXIvbW9kdWxlcy9nZXRUZW1wbGF0ZXMudHMiLCAic3JjL1VzZXJSaWdodHNNYW5hZ2VyL21vZHVsZXMvaXNzdWVUZW1wbGF0ZS50cyIsICJzcmMvVXNlclJpZ2h0c01hbmFnZXIvbW9kdWxlcy9tYXJrQXNEb25lLnRzIiwgInNyYy9Vc2VyUmlnaHRzTWFuYWdlci9tb2R1bGVzL3Nob3dEaWFsb2cudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7Z2V0Qm9keX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbmltcG9ydCB7Z2V0UGFnZVBlcm1pc3Npb25zfSBmcm9tICcuL21vZHVsZXMvZ2V0UGFnZVBlcm1pc3Npb25zJztcbmltcG9ydCB7c2hvd0RpYWxvZ30gZnJvbSAnLi9tb2R1bGVzL3Nob3dEaWFsb2cnO1xuXG52b2lkIGdldEJvZHkoKS50aGVuKCgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkID0+IHtcblx0Y29uc3QgcGVybWlzc2lvbiA9IGdldFBhZ2VQZXJtaXNzaW9ucygpO1xuXHRpZiAoIXBlcm1pc3Npb24pIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHQkYm9keS5maW5kKCcucGVybS1hc3NpZ24tcGVybWlzc2lvbnMgYScpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCkge1xuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cblx0XHRjb25zdCAkZWxlbWVudDogSlF1ZXJ5PEhUTUxBbmNob3JFbGVtZW50PiA9ICQodGhpcyBhcyBIVE1MQW5jaG9yRWxlbWVudCk7XG5cdFx0Y29uc3QgdXNlck5hbWUgPSBtdy51dGlsLmdldFBhcmFtVmFsdWUoJ3VzZXInLCAkZWxlbWVudC5hdHRyKCdocmVmJykpO1xuXHRcdGlmICghdXNlck5hbWUpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRjb25zdCBzZWN0aW9uSWQ6IHN0cmluZyA9ICRlbGVtZW50LnBhcmVudHMoJ2RsJykucHJldignaDQnKS5maW5kKCcubXctaGVhZGxpbmUnKS5hdHRyKCdpZCcpID8/ICcnO1xuXHRcdGNvbnN0IGluZGV4OiBzdHJpbmcgPVxuXHRcdFx0c2VjdGlvbklkID09PSBgVXNlcjoke3VzZXJOYW1lfWAgfHwgc2VjdGlvbklkID09PSBgVXNlcjoke3VzZXJOYW1lfWAucmVwbGFjZSgvXCIvZywgJy4yMicpLnJlcGxhY2UoLyAvZywgJ18nKVxuXHRcdFx0XHQ/ICcnXG5cdFx0XHRcdDogc2VjdGlvbklkXG5cdFx0XHRcdFx0XHQucmVwbGFjZSgnVXNlcjonLCAnJylcblx0XHRcdFx0XHRcdC5yZXBsYWNlKHVzZXJOYW1lLCAnJylcblx0XHRcdFx0XHRcdC5yZXBsYWNlKHVzZXJOYW1lLnJlcGxhY2UoL1wiL2csICcuMjInKS5yZXBsYWNlKC8gL2csICdfJyksICcnKTtcblxuXHRcdHNob3dEaWFsb2coeyRib2R5LCB1c2VyTmFtZSwgcGVybWlzc2lvbiwgaW5kZXh9KTtcblx0fSk7XG59KTtcbiIsICJpbXBvcnQgdHlwZSB7VXNlclJpZ2h0c30gZnJvbSAnfi9NYXJrUmlnaHRzL21vZHVsZXMvdHlwZXMnO1xuXG5jb25zdCBnZXRQYWdlUGVybWlzc2lvbnMgPSAoKTogVXNlclJpZ2h0cyB8IG51bGwgPT4ge1xuXHRjb25zdCB7d2dQYWdlTmFtZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cblx0Y29uc3QgcGFnZVBlcm1pc3Npb25zID0ge1xuXHRcdCdRaXV3ZW5fdGFsazrmnYPpmZDnlLPor7cv55Sz6K+35beh5p+l5Zue6YCA5p2DJzogJ3BhdHJvbGxlcicsXG5cdFx0J1FpdXdlbl90YWxrOuadg+mZkOeUs+ivty/nlLPor7flt6Hmn6XosYHlhY3mnYMnOiAnYXV0b3Jldmlld2VyJyxcblx0XHQnUWl1d2VuX3RhbGs65p2D6ZmQ55Sz6K+3L+eUs+ivt+ehruiupOeUqOaIt+adgyc6ICdjb25maXJtZWQnLFxuXHRcdCdRaXV3ZW5fdGFsazrmnYPpmZDnlLPor7cv55Sz6K+35aSn6YeP5raI5oGv5Y+R6YCB5p2DJzogJ21hc3NtZXNzYWdlLXNlbmRlcicsXG5cdFx0J1FpdXdlbl90YWxrOuadg+mZkOeUs+ivty/nlLPor7fmtLvliqjnu4Tnu4fmnYMnOiAnZXZlbnRzcG9uc29yJyxcblx0XHQnUWl1d2VuX3RhbGs65p2D6ZmQ55Sz6K+3L+eUs+ivt+WvvOWFpeadgyc6ICd0cmFuc3dpa2knLFxuXHRcdCdRaXV3ZW5fdGFsazrmnYPpmZDnlLPor7cv55Sz6K+35qih5p2/57yW6L6R5p2DJzogJ3RlbXBsYXRlZWRpdG9yJyxcblx0XHQnUWl1d2VuX3RhbGs65p2D6ZmQ55Sz6K+3L+eUs+ivt+acuuWZqOS6uuadg+mZkCc6ICdib3QnLFxuXHRcdCdRaXV3ZW5fdGFsazrmnYPpmZDnlLPor7cv55Sz6K+35a6e5ZCN5Yi26aqM6K+B6LGB5YWNJzogJ3JucnN2ZXJpZnktZXhlbXB0Jyxcblx0XHQnUWl1d2VuX3RhbGs65p2D6ZmQ55Sz6K+3L+eUs+ivt0lQ5bCB56aB6LGB5YWN5p2DJzogJ2lwYmxvY2stZXhlbXB0Jyxcblx0fSBhcyBjb25zdCBzYXRpc2ZpZXMgUGFydGlhbDxSZWNvcmQ8c3RyaW5nLCBVc2VyUmlnaHRzPj47XG5cblx0bGV0IHBlcm1pc3Npb246IFVzZXJSaWdodHMgfCBudWxsID0gbnVsbDtcblx0Zm9yIChjb25zdCBbcGFnZU5hbWUsIHBhZ2VQZXJtaXNzaW9uXSBvZiBPYmplY3QuZW50cmllcyhwYWdlUGVybWlzc2lvbnMpKSB7XG5cdFx0aWYgKHBhZ2VOYW1lID09PSB3Z1BhZ2VOYW1lKSB7XG5cdFx0XHRwZXJtaXNzaW9uID0gcGFnZVBlcm1pc3Npb247XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBwZXJtaXNzaW9uO1xufTtcblxuZXhwb3J0IHtnZXRQYWdlUGVybWlzc2lvbnN9O1xuIiwgIntcblx0XCJ1c2VyUmlnaHRzTWFuYWdlclN1bW1hcnlcIjogXCLvvIhbW01lZGlhV2lraTpHYWRnZXQtVXNlclJpZ2h0c01hbmFnZXIuanN8VXNlclJpZ2h0c01hbmFnZXJdXe+8iVwiLFxuXHRcInZlcnNpb25cIjogXCIyLjBcIlxufVxuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7aW5pdE13QXBpfSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG5jb25zdCBhcGk6IG13LkFwaSA9IGluaXRNd0FwaShgbW9yZWJpdHMuanM7IFVzZXJSaWdodHNNYW5hZ2VyLyR7T1BUSU9OUy52ZXJzaW9ufWApO1xuXG5leHBvcnQge2FwaX07XG4iLCAiaW1wb3J0IHR5cGUge1VzZXJSaWdodHN9IGZyb20gJ34vTWFya1JpZ2h0cy9tb2R1bGVzL3R5cGVzJztcblxuY29uc3QgZ2V0UGVybWlzc2lvbk5hbWVzID0gKHBlcm1pc3Npb246IFVzZXJSaWdodHMpOiBzdHJpbmcgfCBudWxsID0+IHtcblx0Y29uc3QgcGVybWlzc2lvbk5hbWVzID0ge1xuXHRcdHBhdHJvbGxlcjogJ+W3oeafpeWRmCcsXG5cdFx0YXV0b3Jldmlld2VyOiAn5beh5p+l6LGB5YWN6ICFJyxcblx0XHRjb25maXJtZWQ6ICfnoa7orqTnlKjmiLcnLFxuXHRcdCdtYXNzbWVzc2FnZS1zZW5kZXInOiAn5aSn6YeP5raI5oGv5Y+R6YCB6ICFJyxcblx0XHRldmVudHNwb25zb3I6ICfmtLvliqjnu4Tnu4fogIUnLFxuXHRcdHRyYW5zd2lraTogJ+WvvOWFpeiAhScsXG5cdFx0dGVtcGxhdGVlZGl0b3I6ICfmqKHmnb/nvJbovpHlkZgnLFxuXHRcdGJvdDogJ+acuuWZqOS6uicsXG5cdFx0J3JucnN2ZXJpZnktZXhlbXB0JzogJ+WunuWQjeWItumqjOivgeixgeWFjScsXG5cdFx0J2lwYmxvY2stZXhlbXB0JzogJ0lQ5bCB56aB6LGB5YWNJyxcblx0fSBhcyBjb25zdCBzYXRpc2ZpZXMgUGFydGlhbDxSZWNvcmQ8VXNlclJpZ2h0cywgc3RyaW5nPj47XG5cblx0bGV0IHBlcm1pc3Npb25OYW1lOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcblx0Zm9yIChjb25zdCBbcmlnaHQsIG5hbWVdIG9mIE9iamVjdC5lbnRyaWVzKHBlcm1pc3Npb25OYW1lcykpIHtcblx0XHRpZiAocGVybWlzc2lvbiA9PT0gcmlnaHQpIHtcblx0XHRcdHBlcm1pc3Npb25OYW1lID0gbmFtZTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHBlcm1pc3Npb25OYW1lO1xufTtcblxuZXhwb3J0IHtnZXRQZXJtaXNzaW9uTmFtZXN9O1xuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7VXNlclJpZ2h0c30gZnJvbSAnfi9NYXJrUmlnaHRzL21vZHVsZXMvdHlwZXMnO1xuaW1wb3J0IHthcGl9IGZyb20gJy4vYXBpJztcbmltcG9ydCB7Z2V0UGVybWlzc2lvbk5hbWVzfSBmcm9tICcuL2dldFBlcm1pc3Npb25OYW1lcyc7XG5cbmNvbnN0IGFzc2lnblBlcm1pc3Npb24gPSAoe1xuXHR1c2VyTmFtZSxcblx0cGVybWlzc2lvbixcblx0c3VtbWFyeSxcblx0cmV2SWQsXG5cdGV4cGlyeSxcbn06IHtcblx0dXNlck5hbWU6IHN0cmluZztcblx0cGVybWlzc2lvbjogVXNlclJpZ2h0cztcblx0c3VtbWFyeTogc3RyaW5nO1xuXHRyZXZJZDogbnVtYmVyO1xuXHRleHBpcnk6IHN0cmluZztcbn0pID0+IHtcblx0Y29uc3QgcGVybWFMaW5rID0gYFtbU3BlY2lhbDpQZXJtYUxpbmsvJHtyZXZJZH0jVXNlcjoke3VzZXJOYW1lfXzmnYPpmZDnlLPor7ddXWA7XG5cdGxldCBmdWxsU3VtbWFyeSA9IGArJHtnZXRQZXJtaXNzaW9uTmFtZXMocGVybWlzc2lvbil977ybJHtwZXJtYUxpbmt9YDtcblx0aWYgKHN1bW1hcnkgIT09ICcnKSB7XG5cdFx0ZnVsbFN1bW1hcnkgKz0gYO+8myR7c3VtbWFyeX1gO1xuXHR9XG5cdGZ1bGxTdW1tYXJ5ICs9IE9QVElPTlMudXNlclJpZ2h0c01hbmFnZXJTdW1tYXJ5O1xuXHRjb25zdCBwYXJhbXM6IEFwaVVzZXJyaWdodHNQYXJhbXMgPSB7XG5cdFx0YWN0aW9uOiAndXNlcnJpZ2h0cycsXG5cdFx0dXNlcjogdXNlck5hbWUucmVwbGFjZSgvIC9nLCAnXycpLFxuXHRcdHJlYXNvbjogZnVsbFN1bW1hcnksXG5cdFx0YWRkOiBbcGVybWlzc2lvbl0sXG5cdFx0ZXhwaXJ5OiBleHBpcnkgPT09ICcnID8gJ2luZmluaXR5JyA6IGV4cGlyeSxcblx0fTtcblx0aWYgKHBlcm1pc3Npb24gPT09ICdwYXRyb2xsZXInICYmIGV4cGlyeSA9PT0gJ2luZmluaXRlJykge1xuXHRcdHBhcmFtcy5yZW1vdmUgPSAnYXV0b3Jldmlld2VyJztcblx0fVxuXHRyZXR1cm4gYXBpLnBvc3RXaXRoVG9rZW4oJ3VzZXJyaWdodHMnLCBwYXJhbXMpO1xufTtcblxuZXhwb3J0IHthc3NpZ25QZXJtaXNzaW9ufTtcbiIsICJpbXBvcnQgdHlwZSB7VXNlclJpZ2h0c30gZnJvbSAnfi9NYXJrUmlnaHRzL21vZHVsZXMvdHlwZXMnO1xuXG5jb25zdCBnZXRQZXJtaXNzaW9uVGVtcGxhdGUgPSAocGVybWlzc2lvbjogVXNlclJpZ2h0cyk6IHN0cmluZyB8IG51bGwgPT4ge1xuXHRjb25zdCBwZXJtaXNzaW9uVGVtcGxhdGVzID0ge1xuXHRcdHBhdHJvbGxlcjogJ1BhdHJvbCBncmFudGVkJyxcblx0XHRhdXRvcmV2aWV3ZXI6ICdBdXRvcGF0cm9sIGdyYW50ZWQnLFxuXHRcdCdtYXNzbWVzc2FnZS1zZW5kZXInOiAnTU1TIGdyYW50ZWQnLFxuXHRcdHRlbXBsYXRlZWRpdG9yOiAnVGVtcGxhdGUgZWRpdG9yIGdyYW50ZWQnLFxuXHRcdHRyYW5zd2lraTogJ1RyYW5zd2lraSBncmFudGVkJyxcblx0fSBhcyBjb25zdCBzYXRpc2ZpZXMgUGFydGlhbDxSZWNvcmQ8VXNlclJpZ2h0cywgc3RyaW5nPj47XG5cblx0bGV0IHRlbXBsYXRlOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcblx0Zm9yIChjb25zdCBbcGFnZVBlcm1pc3Npb24sIHRlbXBsYXRlTmFtZV0gb2YgT2JqZWN0LmVudHJpZXMocGVybWlzc2lvblRlbXBsYXRlcykpIHtcblx0XHRpZiAocGVybWlzc2lvbiA9PT0gcGFnZVBlcm1pc3Npb24pIHtcblx0XHRcdHRlbXBsYXRlID0gdGVtcGxhdGVOYW1lO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gdGVtcGxhdGU7XG59O1xuXG5leHBvcnQge2dldFBlcm1pc3Npb25UZW1wbGF0ZX07XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtBcGlSZXNwb25zZX0gZnJvbSAndHlwZXMtbWVkaWF3aWtpL213L0FwaSc7XG5pbXBvcnQge1VzZXJSaWdodHN9IGZyb20gJ34vTWFya1JpZ2h0cy9tb2R1bGVzL3R5cGVzJztcbmltcG9ydCB7YXBpfSBmcm9tICcuL2FwaSc7XG5pbXBvcnQge2dldFBlcm1pc3Npb25OYW1lc30gZnJvbSAnLi9nZXRQZXJtaXNzaW9uTmFtZXMnO1xuaW1wb3J0IHtnZXRQZXJtaXNzaW9uVGVtcGxhdGV9IGZyb20gJy4vZ2V0VGVtcGxhdGVzJztcblxuY29uc3QgaXNzdWVUZW1wbGF0ZSA9ICh7XG5cdHVzZXJOYW1lLFxuXHRwZXJtaXNzaW9uLFxuXHR3YXRjaCxcbn06IHtcblx0dXNlck5hbWU6IHN0cmluZztcblx0cGVybWlzc2lvbjogVXNlclJpZ2h0cztcblx0d2F0Y2g6IGJvb2xlYW4gfCAnd2F0Y2gnIHwgJ3Vud2F0Y2gnO1xufSk6IEpRdWVyeS5Qcm9taXNlPEFwaVJlc3BvbnNlPiB8IHZvaWQgPT4ge1xuXHRjb25zdCBwZXJtaXNzaW9uVGVtcGxhdGUgPSBnZXRQZXJtaXNzaW9uVGVtcGxhdGUocGVybWlzc2lvbik7XG5cdGlmICghcGVybWlzc2lvblRlbXBsYXRlKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgcGVybWlzc2lvbk5hbWUgPSBnZXRQZXJtaXNzaW9uTmFtZXMocGVybWlzc2lvbik7XG5cdGNvbnN0IHRhbGtQYWdlID0gYFVzZXIgdGFsazoke3VzZXJOYW1lLnJlcGxhY2UoLyAvZywgJ18nKX1gO1xuXHRjb25zdCBwYXJhbXM6IEFwaUVkaXRQYWdlUGFyYW1zID0ge1xuXHRcdGFjdGlvbjogJ2VkaXQnLFxuXHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdHRpdGxlOiB0YWxrUGFnZSxcblx0XHRhcHBlbmR0ZXh0OiAnXFxuXFxue3snLmNvbmNhdCgnc3Vic3Q6JywgcGVybWlzc2lvblRlbXBsYXRlLCAnfX0nKSxcblx0XHRzdW1tYXJ5OiBg5qC55o2u5YWx6K+G5o6I5LqIJHtwZXJtaXNzaW9uTmFtZX0ke09QVElPTlMudXNlclJpZ2h0c01hbmFnZXJTdW1tYXJ5fWAsXG5cdFx0d2F0Y2hsaXN0OiB3YXRjaCA/ICd3YXRjaCcgOiAndW53YXRjaCcsXG5cdH07XG5cdHJldHVybiBhcGkucG9zdFdpdGhFZGl0VG9rZW4ocGFyYW1zKTtcbn07XG5cbmV4cG9ydCB7aXNzdWVUZW1wbGF0ZX07XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHthcGl9IGZyb20gJy4vYXBpJztcbmNvbnN0IHRhZ0xpbmUgPSBPUFRJT05TLnVzZXJSaWdodHNNYW5hZ2VyU3VtbWFyeTtcblxuY29uc3QgcXVlcnlSZXZpc2lvbnMgPSBhc3luYyAodGl0bGVzOiBzdHJpbmcgfCBzdHJpbmdbXSwgcnZzZWN0aW9uOiBzdHJpbmcpID0+IHtcblx0Y29uc3QgcGFyYW1zOiBBcGlRdWVyeVJldmlzaW9uc1BhcmFtcyA9IHtcblx0XHR0aXRsZXMsXG5cdFx0cnZzZWN0aW9uLFxuXHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0cHJvcDogJ3JldmlzaW9ucycsXG5cdFx0Y3VydGltZXN0YW1wOiB0cnVlLFxuXHRcdHJ2cHJvcDogWydjb250ZW50JywgJ3RpbWVzdGFtcCddLFxuXHRcdHJ2c2xvdHM6ICdtYWluJyxcblx0fTtcblxuXHRyZXR1cm4gYXdhaXQgYXBpLmdldChwYXJhbXMpO1xufTtcblxuY29uc3QgbWFya0FzRG9uZSA9ICh7dXNlck5hbWUsIGluZGV4LCBjbG9zaW5nUmVtYXJrc306IHt1c2VyTmFtZTogc3RyaW5nOyBpbmRleDogc3RyaW5nOyBjbG9zaW5nUmVtYXJrczogc3RyaW5nfSkgPT4ge1xuXHRjb25zdCB7d2dQYWdlTmFtZSwgd2dVc2VyTmFtZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSB1bmljb3JuL3ByZWZlci1xdWVyeS1zZWxlY3RvclxuXHRjb25zdCBzZWN0aW9uTm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuXHRcdGBVc2VyOiR7dXNlck5hbWUucmVwbGFjZSgvXCIvZywgJy4yMicpLnJlcGxhY2UoLyAvZywgJ18nKX0ke2luZGV4ID8/ICcnfWBcblx0KTtcblxuXHRjb25zdCBzZWN0aW9uTnVtYmVyID0gKFxuXHRcdChcblx0XHRcdCQoc2VjdGlvbk5vZGUgYXMgSFRNTEVsZW1lbnQpXG5cdFx0XHRcdC5zaWJsaW5ncygnLm13LWVkaXRzZWN0aW9uJylcblx0XHRcdFx0LmZpbmQoJ2E6bm90KC5tdy1lZGl0c2VjdGlvbi12aXN1YWxlZGl0b3IpW2hyZWYqPWVkaXRdJylcblx0XHRcdFx0LnByb3AoJ2hyZWYnKSBhcyBzdHJpbmdcblx0XHQpLm1hdGNoKC9zZWN0aW9uPShcXGQrKS8pIGFzIFJlZ0V4cE1hdGNoQXJyYXlcblx0KVsxXSBhcyBzdHJpbmc7XG5cblx0bGV0IGJhc2V0aW1lc3RhbXA6IHN0cmluZztcblx0bGV0IGN1cnRpbWVzdGFtcDogc3RyaW5nO1xuXHRsZXQgY29udGVudDogc3RyaW5nO1xuXHRsZXQgcmV2aXNpb247XG5cblx0cmV0dXJuIHF1ZXJ5UmV2aXNpb25zKHdnUGFnZU5hbWUsIHNlY3Rpb25OdW1iZXIpXG5cdFx0LnRoZW4oKGRhdGEpID0+IHtcblx0XHRcdGlmICghZGF0YVsncXVlcnknXSB8fCAhZGF0YVsncXVlcnknXS5wYWdlcykge1xuXHRcdFx0XHRyZXR1cm4gJC5EZWZlcnJlZCgpLnJlamVjdCgndW5rbm93bicpO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCB7cGFnZXN9ID0gZGF0YVsncXVlcnknXSBhcyB7XG5cdFx0XHRcdHBhZ2VzOiB7XG5cdFx0XHRcdFx0aW52YWxpZD86IGJvb2xlYW47XG5cdFx0XHRcdFx0bWlzc2luZz86IGJvb2xlYW47XG5cdFx0XHRcdFx0cmV2aXNpb25zOiB7XG5cdFx0XHRcdFx0XHR0aW1lc3RhbXA6IHN0cmluZztcblx0XHRcdFx0XHRcdHNsb3RzOiB7XG5cdFx0XHRcdFx0XHRcdG1haW46IHtcblx0XHRcdFx0XHRcdFx0XHRjb250ZW50OiBzdHJpbmc7XG5cdFx0XHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdH1bXTtcblx0XHRcdFx0fVtdO1xuXHRcdFx0fTtcblx0XHRcdGNvbnN0IFtwYWdlXSA9IHBhZ2VzO1xuXG5cdFx0XHRpZiAoIXBhZ2UgfHwgcGFnZS5pbnZhbGlkKSB7XG5cdFx0XHRcdHJldHVybiAkLkRlZmVycmVkKCkucmVqZWN0KCdpbnZhbGlkdGl0bGUnKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKHBhZ2UubWlzc2luZykge1xuXHRcdFx0XHRyZXR1cm4gJC5EZWZlcnJlZCgpLnJlamVjdCgnbm9jcmVhdGUtbWlzc2luZycpO1xuXHRcdFx0fVxuXG5cdFx0XHRbcmV2aXNpb25dID0gcGFnZS5yZXZpc2lvbnM7XG5cdFx0XHRpZiAocmV2aXNpb24pIHtcblx0XHRcdFx0KHtcblx0XHRcdFx0XHRzbG90czoge1xuXHRcdFx0XHRcdFx0bWFpbjoge2NvbnRlbnR9LFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0dGltZXN0YW1wOiBiYXNldGltZXN0YW1wLFxuXHRcdFx0XHR9ID0gcmV2aXNpb24pO1xuXHRcdFx0fVxuXHRcdFx0Y3VydGltZXN0YW1wID0gZGF0YVsnY3VydGltZXN0YW1wJ10gYXMgc3RyaW5nO1xuXHRcdFx0cmV0dXJuICQuRGVmZXJyZWQoKS5yZXNvbHZlKCk7XG5cdFx0fSlcblx0XHQudGhlbigoKSA9PiB7XG5cdFx0XHRjb250ZW50ID0gY29udGVudC50cmltKCk7XG5cdFx0XHRjb250ZW50ID0gY29udGVudC5yZXBsYWNlKC8oOlxccyp7e1N0YXR1cykoXFx8Lio/KT99fS9pLCAnJDF8K319Jyk7XG5cdFx0XHRjb250ZW50ICs9IGNsb3NpbmdSZW1hcmtzO1xuXG5cdFx0XHRjb25zdCBlZGl0UGFyYW1zOiBBcGlFZGl0UGFnZVBhcmFtcyA9IHtcblx0XHRcdFx0YWN0aW9uOiAnZWRpdCcsXG5cdFx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0XHRcdHRpdGxlOiB3Z1BhZ2VOYW1lLFxuXHRcdFx0XHRzZWN0aW9uOiBzZWN0aW9uTnVtYmVyLFxuXHRcdFx0XHR0ZXh0OiBjb250ZW50LFxuXHRcdFx0XHRzdW1tYXJ5OiBgLyogVXNlcjoke3VzZXJOYW1lfSAqLyDlrozmiJAke3RhZ0xpbmV9YCxcblx0XHRcdFx0YmFzZXRpbWVzdGFtcCxcblx0XHRcdFx0c3RhcnR0aW1lc3RhbXA6IGN1cnRpbWVzdGFtcCxcblx0XHRcdFx0bm9jcmVhdGU6IHRydWUsXG5cdFx0XHR9O1xuXHRcdFx0aWYgKHdnVXNlck5hbWUpIHtcblx0XHRcdFx0ZWRpdFBhcmFtcy5hc3NlcnQgPSAndXNlcic7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBhcGkucG9zdFdpdGhFZGl0VG9rZW4oZWRpdFBhcmFtcyk7XG5cdFx0fSk7XG59O1xuXG5leHBvcnQge21hcmtBc0RvbmV9O1xuIiwgImltcG9ydCB7VXNlclJpZ2h0c30gZnJvbSAnfi9NYXJrUmlnaHRzL21vZHVsZXMvdHlwZXMnO1xuaW1wb3J0IHthcGl9IGZyb20gJy4vYXBpJztcbmltcG9ydCB7YXNzaWduUGVybWlzc2lvbn0gZnJvbSAnLi9hc3NpZ25QZXJtaXNzaW9uJztcbmltcG9ydCB7Z2V0UGVybWlzc2lvbk5hbWVzfSBmcm9tICcuL2dldFBlcm1pc3Npb25OYW1lcyc7XG5pbXBvcnQge2dldFBlcm1pc3Npb25UZW1wbGF0ZX0gZnJvbSAnLi9nZXRUZW1wbGF0ZXMnO1xuaW1wb3J0IHtpc3N1ZVRlbXBsYXRlfSBmcm9tICcuL2lzc3VlVGVtcGxhdGUnO1xuaW1wb3J0IHttYXJrQXNEb25lfSBmcm9tICcuL21hcmtBc0RvbmUnO1xuXG5jb25zdCBzaG93RGlhbG9nID0gZnVuY3Rpb24gc2hvd0RpYWxvZyh7XG5cdCRib2R5LFxuXHR1c2VyTmFtZSxcblx0cGVybWlzc2lvbixcblx0aW5kZXgsXG59OiB7XG5cdCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pjtcblx0dXNlck5hbWU6IHN0cmluZztcblx0cGVybWlzc2lvbjogVXNlclJpZ2h0cztcblx0aW5kZXg6IHN0cmluZztcbn0pIHtcblx0Y29uc3Qge3dnVUxTfSA9IHdpbmRvdztcblx0Y29uc3QgcGVybWlzc2lvblRlbXBsYXRlID0gZ2V0UGVybWlzc2lvblRlbXBsYXRlKHBlcm1pc3Npb24pO1xuXHRjb25zdCBwZXJtaXNzaW9uTmFtZSA9IGdldFBlcm1pc3Npb25OYW1lcyhwZXJtaXNzaW9uKTtcblxuXHRjbGFzcyBEaWFsb2cgZXh0ZW5kcyBPTy51aS5Qcm9jZXNzRGlhbG9nIHtcblx0XHRwcml2YXRlIHN0YXRpYyBlZGl0UGFuZWw6IE9PLnVpLlBhbmVsTGF5b3V0O1xuXHRcdHByaXZhdGUgc3RhdGljIHJpZ2h0TG9nOiBPTy51aS5MYWJlbFdpZGdldDtcblx0XHRwcml2YXRlIHN0YXRpYyBlZGl0RmllbGRzZXQ6IE9PLnVpLkZpZWxkc2V0TGF5b3V0O1xuXHRcdHByaXZhdGUgc3RhdGljIHJpZ2h0c0NoYW5nZVN1bW1hcnlJbnB1dDogT08udWkuVGV4dElucHV0V2lkZ2V0O1xuXHRcdHByaXZhdGUgc3RhdGljIGV4cGlyeUlucHV0OiBPTy51aS5XaWRnZXQ7XG5cdFx0cHJpdmF0ZSBzdGF0aWMgY2xvc2luZ1JlbWFya3NJbnB1dDogT08udWkuVGV4dElucHV0V2lkZ2V0O1xuXHRcdHByaXZhdGUgc3RhdGljIHdhdGNoVGFsa1BhZ2VDaGVja2JveDogT08udWkuQ2hlY2tib3hJbnB1dFdpZGdldDtcblx0XHRwcml2YXRlIHN0YXRpYyBzdWJtaXRQYW5lbDogT08udWkuUGFuZWxMYXlvdXQ7XG5cdFx0cHJpdmF0ZSBzdGF0aWMgc3VibWl0RmllbGRzZXQ6IE9PLnVpLkZpZWxkc2V0TGF5b3V0O1xuXHRcdHByaXZhdGUgc3RhdGljIHN0YWNrTGF5b3V0OiBPTy51aS5TdGFja0xheW91dDtcblx0XHRwcml2YXRlICRib2R5OiBKUXVlcnkgfCB1bmRlZmluZWQ7XG5cblx0XHRwdWJsaWMgY29uc3RydWN0b3IoKSB7XG5cdFx0XHRzdXBlcih7XG5cdFx0XHRcdHNpemU6ICdtZWRpdW0nLFxuXHRcdFx0fSk7XG5cdFx0fVxuXHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjbGFzcy1tZXRob2RzLXVzZS10aGlzXG5cdFx0cHVibGljIG92ZXJyaWRlIGdldEJvZHlIZWlnaHQoKSB7XG5cdFx0XHRyZXR1cm4gMjU1O1xuXHRcdH1cblx0XHRwdWJsaWMgb3ZlcnJpZGUgaW5pdGlhbGl6ZSgpIHtcblx0XHRcdHN1cGVyLmluaXRpYWxpemUoKTtcblx0XHRcdERpYWxvZy5lZGl0UGFuZWwgPSBuZXcgT08udWkuUGFuZWxMYXlvdXQoe1xuXHRcdFx0XHRleHBhbmRlZDogZmFsc2UsXG5cdFx0XHR9KTtcblx0XHRcdGNvbnN0IHJpZ2h0TG9nV2FwcGVyID0gJCgnPHNwYW4+Jyk7XG5cdFx0XHRjb25zdCB1cmwgPSBtdy51dGlsLmdldFVybCgnU3BlY2lhbDpMb2cvcmlnaHRzJywge3R5cGU6ICdyaWdodHMnLCBwYWdlOiBgVXNlcjoke3VzZXJOYW1lfWB9KTtcblx0XHRcdCQoJzxhPicpXG5cdFx0XHRcdC50ZXh0KHdnVUxTKCfmnIDov5HmnYPpmZDml6Xlv5cnLCAn5pyA6L+R5qyK6ZmQ5pel6KqMJykpXG5cdFx0XHRcdC5hdHRyKHtocmVmOiB1cmwsIHRhcmdldDogJ19ibGFuayd9KVxuXHRcdFx0XHQuYXBwZW5kVG8ocmlnaHRMb2dXYXBwZXIpO1xuXHRcdFx0cmlnaHRMb2dXYXBwZXIuYXBwZW5kKCfvvJonKTtcblx0XHRcdGNvbnN0IHJpZ2h0TG9nVGV4dCA9ICQoJzxzcGFuPicpLnRleHQod2dVTFMoJ+iOt+WPluS4rScsICflj5blvpfkuK0nKSkuYXBwZW5kVG8ocmlnaHRMb2dXYXBwZXIpO1xuXHRcdFx0RGlhbG9nLnJpZ2h0TG9nID0gbmV3IE9PLnVpLkxhYmVsV2lkZ2V0KHtcblx0XHRcdFx0bGFiZWw6IHJpZ2h0TG9nV2FwcGVyLFxuXHRcdFx0fSk7XG5cdFx0XHREaWFsb2cuZWRpdFBhbmVsLiRlbGVtZW50LmFwcGVuZChEaWFsb2cucmlnaHRMb2cuJGVsZW1lbnQpO1xuXG5cdFx0XHRjb25zdCBxdWVyeUxvZ0V2ZW50c1BhcmFtczogQXBpUXVlcnlMb2dFdmVudHNQYXJhbXMgPSB7XG5cdFx0XHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHRcdGxpc3Q6ICdsb2dldmVudHMnLFxuXHRcdFx0XHRsZWFjdGlvbjogJ3JpZ2h0cy9yaWdodHMnLFxuXHRcdFx0XHRsZXRpdGxlOiBgVXNlcjoke3VzZXJOYW1lfWAsXG5cdFx0XHRcdGxlbGltaXQ6IDEsXG5cdFx0XHR9O1xuXG5cdFx0XHR2b2lkIGFwaS5nZXQocXVlcnlMb2dFdmVudHNQYXJhbXMpLmRvbmUoKGRhdGEpID0+IHtcblx0XHRcdFx0Y29uc3Qge2xvZ2V2ZW50czogbG9nc30gPSBkYXRhWydxdWVyeSddIGFzIHtcblx0XHRcdFx0XHRsb2dldmVudHM6IHtcblx0XHRcdFx0XHRcdHBhcmFtczoge1xuXHRcdFx0XHRcdFx0XHRuZXdncm91cHM6IHN0cmluZ1tdO1xuXHRcdFx0XHRcdFx0fTtcblx0XHRcdFx0XHRcdHVzZXI6IHN0cmluZztcblx0XHRcdFx0XHR9W107XG5cdFx0XHRcdH07XG5cdFx0XHRcdGlmIChsb2dzLmxlbmd0aCA9PT0gMCB8fCAhbG9nc1swXSkge1xuXHRcdFx0XHRcdHJpZ2h0TG9nVGV4dC50ZXh0KHdnVUxTKCfmsqHmnInku7vkvZXml6Xlv5cnLCAn5rKS5pyJ5Lu75L2V5pel6KqMJykpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdC8vIEB0cy1leHBlY3QtZXJyb3IgVFMyMzA0XG5cdFx0XHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnNhZmUtY2FsbCwgbmV3LWNhcFxuXHRcdFx0XHRcdGNvbnN0IHRpbWVzdGFtcCA9IG5ldyBNb3JlYml0cy5kYXRlKGxvZ3NbMF0udGltZXN0YW1wKS5jYWxlbmRhcigpIGFzIHN0cmluZztcblx0XHRcdFx0XHRjb25zdCByaWdodHMgPSBsb2dzWzBdLnBhcmFtcy5uZXdncm91cHMuam9pbign44CBJykgfHwgd2dVTFMoJ++8iOaXoO+8iScsICfvvIjnhKHvvIknKTtcblx0XHRcdFx0XHRyaWdodExvZ1RleHQudGV4dChcblx0XHRcdFx0XHRcdGAke3RpbWVzdGFtcH0gJHtsb2dzWzBdLnVzZXJ9JHt3Z1VMUygn5bCG55So5oi357uE5pS55Li6JywgJ+Wwh+S9v+eUqOiAhee+pOe1hOaUueeCuicpfSR7cmlnaHRzfWBcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblxuXHRcdFx0RGlhbG9nLmVkaXRGaWVsZHNldCA9IG5ldyBPTy51aS5GaWVsZHNldExheW91dCh7XG5cdFx0XHRcdGNsYXNzZXM6IFsnY29udGFpbmVyJ10sXG5cdFx0XHR9KTtcblx0XHRcdERpYWxvZy5lZGl0UGFuZWwuJGVsZW1lbnQuYXBwZW5kKERpYWxvZy5lZGl0RmllbGRzZXQuJGVsZW1lbnQpO1xuXG5cdFx0XHREaWFsb2cucmlnaHRzQ2hhbmdlU3VtbWFyeUlucHV0ID0gbmV3IE9PLnVpLlRleHRJbnB1dFdpZGdldCh7XG5cdFx0XHRcdHZhbHVlOiAnJyxcblx0XHRcdFx0cGxhY2Vob2xkZXI6ICflj6/nlZnnqbonLFxuXHRcdFx0fSk7XG5cdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVuc2FmZS1jYWxsLCBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG5cdFx0XHREaWFsb2cuZXhwaXJ5SW5wdXQgPSBuZXcgKG13IGFzIGFueSkud2lkZ2V0cy5FeHBpcnlXaWRnZXQoe1xuXHRcdFx0XHQkb3ZlcmxheTogJGJvZHkuZmluZCgnLm9vLXVpLXdpbmRvdycpLFxuXHRcdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVuc2FmZS1hc3NpZ25tZW50LCBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG5cdFx0XHRcdFJlbGF0aXZlSW5wdXRDbGFzczogKG13IGFzIGFueSkud2lkZ2V0cy5TZWxlY3RXaXRoSW5wdXRXaWRnZXQsXG5cdFx0XHRcdHJlbGF0aXZlSW5wdXQ6IHtcblx0XHRcdFx0XHRvcjogdHJ1ZSxcblx0XHRcdFx0XHRkcm9wZG93bmlucHV0OiB7XG5cdFx0XHRcdFx0XHRvcHRpb25zOiBbXG5cdFx0XHRcdFx0XHRcdHtkYXRhOiAnMSBkYXknLCBsYWJlbDogJzHlpKknfSxcblx0XHRcdFx0XHRcdFx0e2RhdGE6ICcxIHdlZWsnLCBsYWJlbDogd2dVTFMoJzHlkagnLCAnMemAsScpfSxcblx0XHRcdFx0XHRcdFx0e2RhdGE6ICcxIG1vbnRoJywgbGFiZWw6IHdnVUxTKCcx5Liq5pyIJywgJzHlgIvmnIgnKX0sXG5cdFx0XHRcdFx0XHRcdHtkYXRhOiAnMyBtb250aHMnLCBsYWJlbDogd2dVTFMoJzPkuKrmnIgnLCAnM+WAi+aciCcpfSxcblx0XHRcdFx0XHRcdFx0e2RhdGE6ICc2IG1vbnRocycsIGxhYmVsOiB3Z1VMUygnNuS4quaciCcsICc25YCL5pyIJyl9LFxuXHRcdFx0XHRcdFx0XHR7ZGF0YTogJzEgeWVhcicsIGxhYmVsOiAnMeW5tCd9LFxuXHRcdFx0XHRcdFx0XHR7ZGF0YTogJ2luZmluaXRlJywgbGFiZWw6IHdnVUxTKCfmsqHmnInmnJ/pmZAnLCAn5rKS5pyJ5pyf6ZmQJyl9LFxuXHRcdFx0XHRcdFx0XHR7ZGF0YTogJ290aGVyJywgbGFiZWw6IHdnVUxTKCflhbbku5bml7bpl7QnLCAn5YW25LuW5pmC6ZaTJyl9LFxuXHRcdFx0XHRcdFx0XSxcblx0XHRcdFx0XHRcdHZhbHVlOiAnaW5maW5pdGUnLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0dGV4dGlucHV0OiB7XG5cdFx0XHRcdFx0XHRyZXF1aXJlZDogdHJ1ZSxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHR9LFxuXHRcdFx0fSkgYXMgT08udWkuV2lkZ2V0O1xuXHRcdFx0RGlhbG9nLmNsb3NpbmdSZW1hcmtzSW5wdXQgPSBuZXcgT08udWkuVGV4dElucHV0V2lkZ2V0KHtcblx0XHRcdFx0dmFsdWU6ICd7e2RvbmV9fS0tfn5+ficsXG5cdFx0XHR9KTtcblx0XHRcdERpYWxvZy53YXRjaFRhbGtQYWdlQ2hlY2tib3ggPSBuZXcgT08udWkuQ2hlY2tib3hJbnB1dFdpZGdldCh7XG5cdFx0XHRcdHNlbGVjdGVkOiBmYWxzZSxcblx0XHRcdH0pO1xuXHRcdFx0Y29uc3QgZm9ybUVsZW1lbnRzID0gW1xuXHRcdFx0XHRuZXcgT08udWkuRmllbGRMYXlvdXQoRGlhbG9nLnJpZ2h0c0NoYW5nZVN1bW1hcnlJbnB1dCwge1xuXHRcdFx0XHRcdGxhYmVsOiB3Z1VMUygn5o6I5p2D5Y6f5ZugJywgJ+aOiOasiuWOn+WboCcpLFxuXHRcdFx0XHR9KSxcblx0XHRcdFx0bmV3IE9PLnVpLkZpZWxkTGF5b3V0KERpYWxvZy5leHBpcnlJbnB1dCwge1xuXHRcdFx0XHRcdGxhYmVsOiB3Z1VMUygn57uT5p2f5pe26Ze0JywgJ+e1kOadn+aZgumWkycpLFxuXHRcdFx0XHR9KSxcblx0XHRcdFx0bmV3IE9PLnVpLkZpZWxkTGF5b3V0KERpYWxvZy5jbG9zaW5nUmVtYXJrc0lucHV0LCB7XG5cdFx0XHRcdFx0bGFiZWw6IHdnVUxTKCflhbPpl63or7fmsYLnlZnoqIAnLCAn6Zec6ZaJ6KuL5rGC55WZ6KiAJyksXG5cdFx0XHRcdH0pLFxuXHRcdFx0XTtcblx0XHRcdGlmIChwZXJtaXNzaW9uVGVtcGxhdGUpIHtcblx0XHRcdFx0Zm9ybUVsZW1lbnRzLnB1c2goXG5cdFx0XHRcdFx0bmV3IE9PLnVpLkZpZWxkTGF5b3V0KERpYWxvZy53YXRjaFRhbGtQYWdlQ2hlY2tib3gsIHtcblx0XHRcdFx0XHRcdGxhYmVsOiB3Z1VMUygn55uR6KeG55So5oi36K6o6K666aG1JywgJ+ebo+imluS9v+eUqOiAheiojuirlumggScpLFxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0XHREaWFsb2cuZWRpdEZpZWxkc2V0LmFkZEl0ZW1zKGZvcm1FbGVtZW50cyk7XG5cdFx0XHREaWFsb2cuc3VibWl0UGFuZWwgPSBuZXcgT08udWkuUGFuZWxMYXlvdXQoe1xuXHRcdFx0XHRleHBhbmRlZDogZmFsc2UsXG5cdFx0XHR9KTtcblx0XHRcdERpYWxvZy5zdWJtaXRGaWVsZHNldCA9IG5ldyBPTy51aS5GaWVsZHNldExheW91dCh7XG5cdFx0XHRcdGNsYXNzZXM6IFsnY29udGFpbmVyJ10sXG5cdFx0XHR9KTtcblx0XHRcdERpYWxvZy5zdWJtaXRQYW5lbC4kZWxlbWVudC5hcHBlbmQoRGlhbG9nLnN1Ym1pdEZpZWxkc2V0LiRlbGVtZW50KTtcblx0XHRcdERpYWxvZy5zdWJtaXRQYW5lbC4kZWxlbWVudC5hcHBlbmQoRGlhbG9nLnN1Ym1pdEZpZWxkc2V0LiRlbGVtZW50KTtcblx0XHRcdERpYWxvZy5zdGFja0xheW91dCA9IG5ldyBPTy51aS5TdGFja0xheW91dCh7XG5cdFx0XHRcdGl0ZW1zOiBbRGlhbG9nLmVkaXRQYW5lbCwgRGlhbG9nLnN1Ym1pdFBhbmVsXSxcblx0XHRcdFx0cGFkZGVkOiB0cnVlLFxuXHRcdFx0fSk7XG5cdFx0XHQodGhpcy4kYm9keSBhcyBKUXVlcnkpLmFwcGVuZChEaWFsb2cuc3RhY2tMYXlvdXQuJGVsZW1lbnQpO1xuXG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9XG5cdFx0cHVibGljIHN0YXRpYyBvblN1Ym1pdCgpIHtcblx0XHRcdHZvaWQgbWFya0FzRG9uZSh7dXNlck5hbWUsIGluZGV4LCBjbG9zaW5nUmVtYXJrczogYFxcbjoke0RpYWxvZy5jbG9zaW5nUmVtYXJrc0lucHV0LmdldFZhbHVlKCl9YH0pXG5cdFx0XHRcdC50aGVuKChkYXRhKSA9PiB7XG5cdFx0XHRcdFx0dm9pZCBhc3NpZ25QZXJtaXNzaW9uKHtcblx0XHRcdFx0XHRcdHVzZXJOYW1lLFxuXHRcdFx0XHRcdFx0cGVybWlzc2lvbixcblx0XHRcdFx0XHRcdHN1bW1hcnk6IERpYWxvZy5yaWdodHNDaGFuZ2VTdW1tYXJ5SW5wdXQuZ2V0VmFsdWUoKSxcblx0XHRcdFx0XHRcdHJldklkOiBOdW1iZXIucGFyc2VJbnQoZGF0YVsnZWRpdCddLm5ld3JldmlkIGFzIHN0cmluZywgMTApLFxuXHRcdFx0XHRcdFx0ZXhwaXJ5OiAoRGlhbG9nLmV4cGlyeUlucHV0IGFzIE9PLnVpLlRleHRJbnB1dFdpZGdldCkuZ2V0VmFsdWUoKSxcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fSlcblx0XHRcdFx0LnRoZW4oKCkgPT4ge1xuXHRcdFx0XHRcdHZvaWQgaXNzdWVUZW1wbGF0ZSh7dXNlck5hbWUsIHBlcm1pc3Npb24sIHdhdGNoOiBEaWFsb2cud2F0Y2hUYWxrUGFnZUNoZWNrYm94LmlzU2VsZWN0ZWQoKX0pO1xuXHRcdFx0XHR9KVxuXHRcdFx0XHQudGhlbigoKSA9PiB7XG5cdFx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdFx0XHRsb2NhdGlvbi5yZWxvYWQoKTtcblx0XHRcdFx0XHR9LCAxMDAwKTtcblx0XHRcdFx0fSk7XG5cblx0XHRcdERpYWxvZy5zdGFja0xheW91dC5zZXRJdGVtKERpYWxvZy5zdWJtaXRQYW5lbCk7XG5cdFx0fVxuXHRcdHN0YXRpYyBwdXNoUGVuZGluZygpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcignTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC4nKTtcblx0XHR9XG5cdFx0c3RhdGljIHBvcFBlbmRpbmcoKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ01ldGhvZCBub3QgaW1wbGVtZW50ZWQuJyk7XG5cdFx0fVxuXG5cdFx0cHVibGljIG92ZXJyaWRlIGdldEFjdGlvblByb2Nlc3MoYWN0aW9uPzogc3RyaW5nKTogT08udWkuUHJvY2VzcyB7XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRzdXBlclxuXHRcdFx0XHRcdC5nZXRBY3Rpb25Qcm9jZXNzKGFjdGlvbilcblx0XHRcdFx0XHQvLyBAdHMtZXhwZWN0LWVycm9yIFRTNzAzMFxuXHRcdFx0XHRcdC5uZXh0KGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRcdGlmIChhY3Rpb24gPT09ICdzdWJtaXQnKSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBEaWFsb2cub25TdWJtaXQoKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdHJldHVybiBEaWFsb2cuc3VwZXIucHJvdG90eXBlLmdldEFjdGlvblByb2Nlc3MuY2FsbCh0aGlzLCBhY3Rpb24pO1xuXHRcdFx0XHRcdH0sIHRoaXMpXG5cdFx0XHQpO1xuXHRcdH1cblx0fVxuXHREaWFsb2cuc3RhdGljID0ge1xuXHRcdC4uLk9PLnVpLlByb2Nlc3NEaWFsb2cuc3RhdGljLFxuXHR9O1xuXHREaWFsb2cuc3RhdGljLm5hbWUgPSAndXNlci1yaWdodHMtbWFuYWdlcic7XG5cdERpYWxvZy5zdGF0aWMudGl0bGUgPSBg5o6I5LqIJHtwZXJtaXNzaW9uTmFtZX0ke3dnVUxTKCfnu5knLCAn57WmJyl9JHt1c2VyTmFtZX1gO1xuXHREaWFsb2cuc3RhdGljLmFjdGlvbnMgPSBbXG5cdFx0e2FjdGlvbjogJ3N1Ym1pdCcsIGxhYmVsOiB3Z1VMUygn5o6I5p2DJywgJ+aOiOasiicpLCBmbGFnczogWydwcmltYXJ5JywgJ3Byb2dyZXNzaXZlJ119LFxuXHRcdHtsYWJlbDogJ+WPlua2iCcsIGZsYWdzOiAnc2FmZSd9LFxuXHRdO1xuXG5cdGNvbnN0IGRpYWxvZyA9IG5ldyBEaWFsb2coKTtcblxuXHRjb25zdCB3aW5kb3dNYW5hZ2VyID0gbmV3IE9PLnVpLldpbmRvd01hbmFnZXIoKTtcblx0JCgnYm9keScpLmFwcGVuZCh3aW5kb3dNYW5hZ2VyLiRlbGVtZW50KTtcblx0d2luZG93TWFuYWdlci5hZGRXaW5kb3dzKFtkaWFsb2ddKTtcblx0dm9pZCB3aW5kb3dNYW5hZ2VyLm9wZW5XaW5kb3coZGlhbG9nKTtcbn07XG5cbmV4cG9ydCB7c2hvd0RpYWxvZ307XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxxQkFBc0JDLFFBQUEsaUJBQUE7O0FDRXRCLElBQU1DLHFCQUFxQkEsTUFBeUI7QUFDbkQsUUFBTTtJQUFDQztFQUFVLElBQUlDLEdBQUdDLE9BQU9DLElBQUk7QUFFbkMsUUFBTUMsa0JBQWtCO0lBQ3ZCLDRCQUE0QjtJQUM1Qiw0QkFBNEI7SUFDNUIsNEJBQTRCO0lBQzVCLDhCQUE4QjtJQUM5Qiw0QkFBNEI7SUFDNUIs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TGdKLGNBQUEsUUFBQTdNLE9BQXNCZ0IsUUFBUSxLQUFNNkwsY0FBYyxRQUFBN00sT0FBUWdCLFFBQVEsRUFBR1MsUUFBUSxNQUFNLEtBQUssRUFBRUEsUUFBUSxNQUFNLEdBQUcsSUFDeEcsS0FDQW9MLFVBQ0NwTCxRQUFRLFNBQVMsRUFBRSxFQUNuQkEsUUFBUVQsVUFBVSxFQUFFLEVBQ3BCUyxRQUFRVCxTQUFTUyxRQUFRLE1BQU0sS0FBSyxFQUFFQSxRQUFRLE1BQU0sR0FBRyxHQUFHLEVBQUU7QUFFakVzRSxlQUFXO01BQUNFO01BQU9qRjtNQUFVN0I7TUFBWTBFO0lBQUssQ0FBQztFQUNoRCxDQUFDO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFsiaW1wb3J0X2V4dF9nYWRnZXQyIiwgInJlcXVpcmUiLCAiZ2V0UGFnZVBlcm1pc3Npb25zIiwgIndnUGFnZU5hbWUiLCAibXciLCAiY29uZmlnIiwgImdldCIsICJwYWdlUGVybWlzc2lvbnMiLCAicGVybWlzc2lvbiIsICJfaSIsICJfT2JqZWN0JGVudHJpZXMiLCAiT2JqZWN0IiwgImVudHJpZXMiLCAibGVuZ3RoIiwgInBhZ2VOYW1lIiwgInBhZ2VQZXJtaXNzaW9uIiwgInVzZXJSaWdodHNNYW5hZ2VyU3VtbWFyeSIsICJ2ZXJzaW9uIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgImFwaSIsICJpbml0TXdBcGkiLCAiY29uY2F0IiwgImdldFBlcm1pc3Npb25OYW1lcyIsICJwZXJtaXNzaW9uTmFtZXMiLCAicGF0cm9sbGVyIiwgImF1dG9yZXZpZXdlciIsICJjb25maXJtZWQiLCAiZXZlbnRzcG9uc29yIiwgInRyYW5zd2lraSIsICJ0ZW1wbGF0ZWVkaXRvciIsICJib3QiLCAicGVybWlzc2lvbk5hbWUiLCAiX2kyIiwgIl9PYmplY3QkZW50cmllczIiLCAicmlnaHQiLCAibmFtZSIsICJhc3NpZ25QZXJtaXNzaW9uIiwgInVzZXJOYW1lIiwgInN1bW1hcnkiLCAicmV2SWQiLCAiZXhwaXJ5IiwgInBlcm1hTGluayIsICJmdWxsU3VtbWFyeSIsICJwYXJhbXMiLCAiYWN0aW9uIiwgInVzZXIiLCAicmVwbGFjZSIsICJyZWFzb24iLCAiYWRkIiwgInJlbW92ZSIsICJwb3N0V2l0aFRva2VuIiwgImdldFBlcm1pc3Npb25UZW1wbGF0ZSIsICJwZXJtaXNzaW9uVGVtcGxhdGVzIiwgInRlbXBsYXRlIiwgIl9pMyIsICJfT2JqZWN0JGVudHJpZXMzIiwgInRlbXBsYXRlTmFtZSIsICJpc3N1ZVRlbXBsYXRlIiwgIndhdGNoIiwgInBlcm1pc3Npb25UZW1wbGF0ZSIsICJ0YWxrUGFnZSIsICJmb3JtYXQiLCAidGl0bGUiLCAiYXBwZW5kdGV4dCIsICJ3YXRjaGxpc3QiLCAicG9zdFdpdGhFZGl0VG9rZW4iLCAidGFnTGluZSIsICJxdWVyeVJldmlzaW9ucyIsICJfcmVmIiwgIl9hc3luY1RvR2VuZXJhdG9yIiwgInRpdGxlcyIsICJydnNlY3Rpb24iLCAiZm9ybWF0dmVyc2lvbiIsICJwcm9wIiwgImN1cnRpbWVzdGFtcCIsICJydnByb3AiLCAicnZzbG90cyIsICJfeCIsICJfeDIiLCAiYXBwbHkiLCAiYXJndW1lbnRzIiwgIm1hcmtBc0RvbmUiLCAiaW5kZXgiLCAiY2xvc2luZ1JlbWFya3MiLCAid2dVc2VyTmFtZSIsICJzZWN0aW9uTm9kZSIsICJkb2N1bWVudCIsICJnZXRFbGVtZW50QnlJZCIsICJzZWN0aW9uTnVtYmVyIiwgIiQiLCAic2libGluZ3MiLCAiZmluZCIsICJtYXRjaCIsICJiYXNldGltZXN0YW1wIiwgImNvbnRlbnQiLCAicmV2aXNpb24iLCAidGhlbiIsICJkYXRhIiwgInBhZ2VzIiwgIkRlZmVycmVkIiwgInJlamVjdCIsICJwYWdlIiwgImludmFsaWQiLCAibWlzc2luZyIsICJyZXZpc2lvbnMiLCAic2xvdHMiLCAibWFpbiIsICJ0aW1lc3RhbXAiLCAicmVzb2x2ZSIsICJ0cmltIiwgImVkaXRQYXJhbXMiLCAic2VjdGlvbiIsICJ0ZXh0IiwgInN0YXJ0dGltZXN0YW1wIiwgIm5vY3JlYXRlIiwgImFzc2VydCIsICJzaG93RGlhbG9nIiwgInNob3dEaWFsb2cyIiwgIiRib2R5IiwgIndnVUxTIiwgIndpbmRvdyIsICJEaWFsb2ciLCAiT08iLCAidWkiLCAiUHJvY2Vzc0RpYWxvZyIsICJlZGl0UGFuZWwiLCAicmlnaHRMb2ciLCAiZWRpdEZpZWxkc2V0IiwgInJpZ2h0c0NoYW5nZVN1bW1hcnlJbnB1dCIsICJleHBpcnlJbnB1dCIsICJjbG9zaW5nUmVtYXJrc0lucHV0IiwgIndhdGNoVGFsa1BhZ2VDaGVja2JveCIsICJzdWJtaXRQYW5lbCIsICJzdWJtaXRGaWVsZHNldCIsICJzdGFja0xheW91dCIsICJjb25zdHJ1Y3RvciIsICJzaXplIiwgImdldEJvZHlIZWlnaHQiLCAiaW5pdGlhbGl6ZSIsICJQYW5lbExheW91dCIsICJleHBhbmRlZCIsICJyaWdodExvZ1dhcHBlciIsICJ1cmwiLCAidXRpbCIsICJnZXRVcmwiLCAidHlwZSIsICJhdHRyIiwgImhyZWYiLCAidGFyZ2V0IiwgImFwcGVuZFRvIiwgImFwcGVuZCIsICJyaWdodExvZ1RleHQiLCAiTGFiZWxXaWRnZXQiLCAibGFiZWwiLCAiJGVsZW1lbnQiLCAicXVlcnlMb2dFdmVudHNQYXJhbXMiLCAibGlzdCIsICJsZWFjdGlvbiIsICJsZXRpdGxlIiwgImxlbGltaXQiLCAiZG9uZSIsICJsb2dldmVudHMiLCAibG9ncyIsICJNb3JlYml0cyIsICJkYXRlIiwgImNhbGVuZGFyIiwgInJpZ2h0cyIsICJuZXdncm91cHMiLCAiam9pbiIsICJGaWVsZHNldExheW91dCIsICJjbGFzc2VzIiwgIlRleHRJbnB1dFdpZGdldCIsICJ2YWx1ZSIsICJwbGFjZWhvbGRlciIsICJ3aWRnZXRzIiwgIkV4cGlyeVdpZGdldCIsICIkb3ZlcmxheSIsICJSZWxhdGl2ZUlucHV0Q2xhc3MiLCAiU2VsZWN0V2l0aElucHV0V2lkZ2V0IiwgInJlbGF0aXZlSW5wdXQiLCAib3IiLCAiZHJvcGRvd25pbnB1dCIsICJvcHRpb25zIiwgInRleHRpbnB1dCIsICJyZXF1aXJlZCIsICJDaGVja2JveElucHV0V2lkZ2V0IiwgInNlbGVjdGVkIiwgImZvcm1FbGVtZW50cyIsICJGaWVsZExheW91dCIsICJwdXNoIiwgImFkZEl0ZW1zIiwgIlN0YWNrTGF5b3V0IiwgIml0ZW1zIiwgInBhZGRlZCIsICJvblN1Ym1pdCIsICJnZXRWYWx1ZSIsICJOdW1iZXIiLCAicGFyc2VJbnQiLCAibmV3cmV2aWQiLCAiaXNTZWxlY3RlZCIsICJzZXRUaW1lb3V0IiwgImxvY2F0aW9uIiwgInJlbG9hZCIsICJzZXRJdGVtIiwgInB1c2hQZW5kaW5nIiwgIkVycm9yIiwgInBvcFBlbmRpbmciLCAiZ2V0QWN0aW9uUHJvY2VzcyIsICJuZXh0IiwgInN1cGVyIiwgInByb3RvdHlwZSIsICJjYWxsIiwgInN0YXRpYyIsICJhY3Rpb25zIiwgImZsYWdzIiwgImRpYWxvZyIsICJ3aW5kb3dNYW5hZ2VyIiwgIldpbmRvd01hbmFnZXIiLCAiYWRkV2luZG93cyIsICJvcGVuV2luZG93IiwgImdldEJvZHkiLCAib24iLCAiZXZlbnQiLCAiXyRlbGVtZW50JHBhcmVudHMkcHJlIiwgInByZXZlbnREZWZhdWx0IiwgImdldFBhcmFtVmFsdWUiLCAic2VjdGlvbklkIiwgInBhcmVudHMiLCAicHJldiJdCn0K

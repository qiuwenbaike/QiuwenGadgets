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
    "Qiuwen_talk:权限申请/申请实名制验证豁免": "rnrsverify-exempt"
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
    "rnrsverify-exempt": "实名制验证豁免"
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
var assignPermission = (userName, permission, summary, revId, expiry) => {
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
    // @ts-expect-error TS2322
    add: [permission],
    expiry: expiry === "" ? "infinity" : expiry
  };
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
var issueTemplate = (userName, permission, watch) => {
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
    appendtext: "\n\n{{".concat("subst:", permissionTemplate, "}}}"),
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
      rvprop: ["content", "timestamp"]
    };
    return yield api.get(params);
  });
  return function queryRevisions2(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var markAsDone = (userName, index, closingRemarks) => {
  const {
    wgPageName
  } = mw.config.get();
  const sectionNode = document.getElementById("User:".concat(userName.replace(/"/g, ".22").replace(/ /g, "_")).concat(index !== null && index !== void 0 ? index : ""));
  const [, sectionNumber] = $(sectionNode).siblings(".mw-editsection").find("a:not(.mw-editsection-visualeditor)").prop("href").match(/section=(\d+)/);
  let basetimestamp;
  let curtimestamp;
  let content;
  let revision;
  return queryRevisions(wgPageName, "".concat(sectionNumber)).then((data) => {
    if (!data["query"] || !data["query"].pages) {
      return $.Deferred().reject("unknown");
    }
    const [page] = data["query"].pages;
    if (!page || page.invalid) {
      return $.Deferred().reject("invalidtitle");
    }
    if (page.missing) {
      return $.Deferred().reject("nocreate-missing");
    }
    revision = page.revisions[0];
    basetimestamp = revision.timestamp;
    curtimestamp = data["curtimestamp"];
    content = revision.content;
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
    if (mw.config.get("wgUserName")) {
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
    static $body = (() => $("body"))();
    static stackLayout;
    static markAsDoneProgressField;
    static changeRightsProgressField;
    static issueTemplateProgressField;
    static changeRightsProgressLabel;
    static markAsDoneProgressLabel;
    static issueTemplateProgressLabel;
    static actions;
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
        const logs = data["query"].logevents;
        if (logs.length === 0) {
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
        // @ts-expect-error TS2339
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
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
      Dialog.changeRightsProgressLabel = new OO.ui.LabelWidget();
      Dialog.changeRightsProgressField = new OO.ui.FieldLayout(Dialog.changeRightsProgressLabel);
      Dialog.markAsDoneProgressLabel = new OO.ui.LabelWidget();
      Dialog.markAsDoneProgressField = new OO.ui.FieldLayout(Dialog.markAsDoneProgressLabel);
      Dialog.issueTemplateProgressLabel = new OO.ui.LabelWidget();
      Dialog.issueTemplateProgressField = new OO.ui.FieldLayout(Dialog.issueTemplateProgressLabel);
      Dialog.stackLayout = new OO.ui.StackLayout({
        items: [Dialog.editPanel, Dialog.submitPanel],
        padded: true
      });
      Dialog.$body.append(Dialog.stackLayout.$element);
      return this;
    }
    static onSubmit() {
      let promiseCount = permissionTemplate ? 3 : 2;
      Dialog.actions.setAbilities({
        submit: false
      });
      const addPromise = function(field, promise) {
        Dialog.pushPending();
        void promise.done(() => {
          field.$field.append($("<span>").text("完成！").prop("style", "position:relative; top:0.5em; color: #009000; font-weight: bold"));
        }).fail((obj) => {
          if (obj && obj.error && obj.error.info) {
            field.$field.append($("<span>").text(wgULS("错误：", "錯誤：") + obj.error.info).prop("style", "position:relative; top:0.5em; color: #cc0000; font-weight: bold"));
          } else {
            field.$field.append($("<span>").text(wgULS("发生未知错误。", "發生未知錯誤。")).prop("style", "position:relative; top:0.5em; color: #cc0000; font-weight: bold"));
          }
        }).always(() => {
          promiseCount--;
          Dialog.popPending();
          if (promiseCount === 0) {
            setTimeout(() => {
              location.reload();
            }, 1e3);
          }
        });
        return promise;
      };
      Dialog.markAsDoneProgressField.setLabel(wgULS("标记请求为已完成...", "標記請求為已完成..."));
      Dialog.submitFieldset.addItems([Dialog.markAsDoneProgressField]);
      Dialog.changeRightsProgressField.setLabel(wgULS("授予权限...", "授予權限..."));
      Dialog.submitFieldset.addItems([Dialog.changeRightsProgressField]);
      if (permissionTemplate) {
        Dialog.issueTemplateProgressField.setLabel(wgULS("发送通知...", "發送通知..."));
        Dialog.submitFieldset.addItems([Dialog.issueTemplateProgressField]);
      }
      void addPromise(Dialog.markAsDoneProgressField, markAsDone(userName, index, "\n:".concat(Dialog.closingRemarksInput.getValue()))).then((data) => {
        void addPromise(Dialog.changeRightsProgressField, assignPermission(userName, permission, Dialog.rightsChangeSummaryInput.getValue(), Number.parseInt(data["edit"].newrevid, 10), Dialog.expiryInput.getValue())).then(() => {
          if (permissionTemplate) {
            void addPromise(Dialog.issueTemplateProgressField, issueTemplate(userName, permission, Dialog.watchTalkPageCheckbox.isSelected()));
          }
        });
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
    const userName = mw.util.getParamValue("user", $(this).attr("href"));
    if (!userName) {
      return;
    }
    const $element = $(event.target);
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1VzZXJSaWdodHNNYW5hZ2VyL1VzZXJSaWdodHNNYW5hZ2VyLnRzIiwgInNyYy9Vc2VyUmlnaHRzTWFuYWdlci9tb2R1bGVzL2dldFBhZ2VQZXJtaXNzaW9ucy50cyIsICJzcmMvVXNlclJpZ2h0c01hbmFnZXIvb3B0aW9ucy5qc29uIiwgInNyYy9Vc2VyUmlnaHRzTWFuYWdlci9tb2R1bGVzL2FwaS50cyIsICJzcmMvVXNlclJpZ2h0c01hbmFnZXIvbW9kdWxlcy9nZXRQZXJtaXNzaW9uTmFtZXMudHMiLCAic3JjL1VzZXJSaWdodHNNYW5hZ2VyL21vZHVsZXMvYXNzaWduUGVybWlzc2lvbi50cyIsICJzcmMvVXNlclJpZ2h0c01hbmFnZXIvbW9kdWxlcy9nZXRUZW1wbGF0ZXMudHMiLCAic3JjL1VzZXJSaWdodHNNYW5hZ2VyL21vZHVsZXMvaXNzdWVUZW1wbGF0ZS50cyIsICJzcmMvVXNlclJpZ2h0c01hbmFnZXIvbW9kdWxlcy9tYXJrQXNEb25lLnRzIiwgInNyYy9Vc2VyUmlnaHRzTWFuYWdlci9tb2R1bGVzL3Nob3dEaWFsb2cudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7Z2V0Qm9keX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbmltcG9ydCB7Z2V0UGFnZVBlcm1pc3Npb25zfSBmcm9tICcuL21vZHVsZXMvZ2V0UGFnZVBlcm1pc3Npb25zJztcbmltcG9ydCB7c2hvd0RpYWxvZ30gZnJvbSAnLi9tb2R1bGVzL3Nob3dEaWFsb2cnO1xuXG52b2lkIGdldEJvZHkoKS50aGVuKCgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkID0+IHtcblx0Y29uc3QgcGVybWlzc2lvbiA9IGdldFBhZ2VQZXJtaXNzaW9ucygpO1xuXHRpZiAoIXBlcm1pc3Npb24pIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHQkYm9keS5maW5kKCcucGVybS1hc3NpZ24tcGVybWlzc2lvbnMgYScpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCkge1xuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cblx0XHRjb25zdCB1c2VyTmFtZSA9IG13LnV0aWwuZ2V0UGFyYW1WYWx1ZSgndXNlcicsICQodGhpcykuYXR0cignaHJlZicpKTtcblx0XHRpZiAoIXVzZXJOYW1lKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Y29uc3QgJGVsZW1lbnQ6IEpRdWVyeTxIVE1MQW5jaG9yRWxlbWVudD4gPSAkKGV2ZW50LnRhcmdldCBhcyBIVE1MQW5jaG9yRWxlbWVudCk7XG5cdFx0Y29uc3Qgc2VjdGlvbklkOiBzdHJpbmcgPSAkZWxlbWVudC5wYXJlbnRzKCdkbCcpLnByZXYoJ2g0JykuZmluZCgnLm13LWhlYWRsaW5lJykuYXR0cignaWQnKSA/PyAnJztcblx0XHRjb25zdCBpbmRleDogc3RyaW5nID1cblx0XHRcdHNlY3Rpb25JZCA9PT0gYFVzZXI6JHt1c2VyTmFtZX1gIHx8IHNlY3Rpb25JZCA9PT0gYFVzZXI6JHt1c2VyTmFtZX1gLnJlcGxhY2UoL1wiL2csICcuMjInKS5yZXBsYWNlKC8gL2csICdfJylcblx0XHRcdFx0PyAnJ1xuXHRcdFx0XHQ6IHNlY3Rpb25JZFxuXHRcdFx0XHRcdFx0LnJlcGxhY2UoJ1VzZXI6JywgJycpXG5cdFx0XHRcdFx0XHQucmVwbGFjZSh1c2VyTmFtZSwgJycpXG5cdFx0XHRcdFx0XHQucmVwbGFjZSh1c2VyTmFtZS5yZXBsYWNlKC9cIi9nLCAnLjIyJykucmVwbGFjZSgvIC9nLCAnXycpLCAnJyk7XG5cblx0XHRzaG93RGlhbG9nKHskYm9keSwgdXNlck5hbWUsIHBlcm1pc3Npb24sIGluZGV4fSk7XG5cdH0pO1xufSk7XG4iLCAiaW1wb3J0IHR5cGUge1VzZXJSaWdodHN9IGZyb20gJ34vTWFya1JpZ2h0cy9tb2R1bGVzL3R5cGVzJztcblxuY29uc3QgZ2V0UGFnZVBlcm1pc3Npb25zID0gKCk6IFVzZXJSaWdodHMgfCBudWxsID0+IHtcblx0Y29uc3Qge3dnUGFnZU5hbWV9ID0gbXcuY29uZmlnLmdldCgpO1xuXG5cdGNvbnN0IHBhZ2VQZXJtaXNzaW9ucyA9IHtcblx0XHQnUWl1d2VuX3RhbGs65p2D6ZmQ55Sz6K+3L+eUs+ivt+W3oeafpeWbnumAgOadgyc6ICdwYXRyb2xsZXInLFxuXHRcdCdRaXV3ZW5fdGFsazrmnYPpmZDnlLPor7cv55Sz6K+35beh5p+l6LGB5YWN5p2DJzogJ2F1dG9yZXZpZXdlcicsXG5cdFx0J1FpdXdlbl90YWxrOuadg+mZkOeUs+ivty/nlLPor7fnoa7orqTnlKjmiLfmnYMnOiAnY29uZmlybWVkJyxcblx0XHQnUWl1d2VuX3RhbGs65p2D6ZmQ55Sz6K+3L+eUs+ivt+Wkp+mHj+a2iOaBr+WPkemAgeadgyc6ICdtYXNzbWVzc2FnZS1zZW5kZXInLFxuXHRcdCdRaXV3ZW5fdGFsazrmnYPpmZDnlLPor7cv55Sz6K+35rS75Yqo57uE57uH5p2DJzogJ2V2ZW50c3BvbnNvcicsXG5cdFx0J1FpdXdlbl90YWxrOuadg+mZkOeUs+ivty/nlLPor7flr7zlhaXmnYMnOiAndHJhbnN3aWtpJyxcblx0XHQnUWl1d2VuX3RhbGs65p2D6ZmQ55Sz6K+3L+eUs+ivt+aooeadv+e8lui+keadgyc6ICd0ZW1wbGF0ZWVkaXRvcicsXG5cdFx0J1FpdXdlbl90YWxrOuadg+mZkOeUs+ivty/nlLPor7fmnLrlmajkurrmnYPpmZAnOiAnYm90Jyxcblx0XHQnUWl1d2VuX3RhbGs65p2D6ZmQ55Sz6K+3L+eUs+ivt+WunuWQjeWItumqjOivgeixgeWFjSc6ICdybnJzdmVyaWZ5LWV4ZW1wdCcsXG5cdH0gYXMgY29uc3Qgc2F0aXNmaWVzIFBhcnRpYWw8UmVjb3JkPHN0cmluZywgVXNlclJpZ2h0cz4+O1xuXG5cdGxldCBwZXJtaXNzaW9uOiBVc2VyUmlnaHRzIHwgbnVsbCA9IG51bGw7XG5cdGZvciAoY29uc3QgW3BhZ2VOYW1lLCBwYWdlUGVybWlzc2lvbl0gb2YgT2JqZWN0LmVudHJpZXMocGFnZVBlcm1pc3Npb25zKSkge1xuXHRcdGlmIChwYWdlTmFtZSA9PT0gd2dQYWdlTmFtZSkge1xuXHRcdFx0cGVybWlzc2lvbiA9IHBhZ2VQZXJtaXNzaW9uO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gcGVybWlzc2lvbjtcbn07XG5cbmV4cG9ydCB7Z2V0UGFnZVBlcm1pc3Npb25zfTtcbiIsICJ7XG5cdFwidXNlclJpZ2h0c01hbmFnZXJTdW1tYXJ5XCI6IFwi77yIW1tNZWRpYVdpa2k6R2FkZ2V0LVVzZXJSaWdodHNNYW5hZ2VyLmpzfFVzZXJSaWdodHNNYW5hZ2VyXV3vvIlcIixcblx0XCJ2ZXJzaW9uXCI6IFwiMi4wXCJcbn1cbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge2luaXRNd0FwaX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxuY29uc3QgYXBpOiBtdy5BcGkgPSBpbml0TXdBcGkoYG1vcmViaXRzLmpzOyBVc2VyUmlnaHRzTWFuYWdlci8ke09QVElPTlMudmVyc2lvbn1gKTtcblxuZXhwb3J0IHthcGl9O1xuIiwgImltcG9ydCB0eXBlIHtVc2VyUmlnaHRzfSBmcm9tICd+L01hcmtSaWdodHMvbW9kdWxlcy90eXBlcyc7XG5cbmNvbnN0IGdldFBlcm1pc3Npb25OYW1lcyA9IChwZXJtaXNzaW9uOiBVc2VyUmlnaHRzKTogc3RyaW5nIHwgbnVsbCA9PiB7XG5cdGNvbnN0IHBlcm1pc3Npb25OYW1lcyA9IHtcblx0XHRwYXRyb2xsZXI6ICflt6Hmn6XlkZgnLFxuXHRcdGF1dG9yZXZpZXdlcjogJ+W3oeafpeixgeWFjeiAhScsXG5cdFx0Y29uZmlybWVkOiAn56Gu6K6k55So5oi3Jyxcblx0XHQnbWFzc21lc3NhZ2Utc2VuZGVyJzogJ+Wkp+mHj+a2iOaBr+WPkemAgeiAhScsXG5cdFx0ZXZlbnRzcG9uc29yOiAn5rS75Yqo57uE57uH6ICFJyxcblx0XHR0cmFuc3dpa2k6ICflr7zlhaXogIUnLFxuXHRcdHRlbXBsYXRlZWRpdG9yOiAn5qih5p2/57yW6L6R5ZGYJyxcblx0XHRib3Q6ICfmnLrlmajkuronLFxuXHRcdCdybnJzdmVyaWZ5LWV4ZW1wdCc6ICflrp7lkI3liLbpqozor4HosYHlhY0nLFxuXHR9IGFzIGNvbnN0IHNhdGlzZmllcyBQYXJ0aWFsPFJlY29yZDxVc2VyUmlnaHRzLCBzdHJpbmc+PjtcblxuXHRsZXQgcGVybWlzc2lvbk5hbWU6IHN0cmluZyB8IG51bGwgPSBudWxsO1xuXHRmb3IgKGNvbnN0IFtyaWdodCwgbmFtZV0gb2YgT2JqZWN0LmVudHJpZXMocGVybWlzc2lvbk5hbWVzKSkge1xuXHRcdGlmIChwZXJtaXNzaW9uID09PSByaWdodCkge1xuXHRcdFx0cGVybWlzc2lvbk5hbWUgPSBuYW1lO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gcGVybWlzc2lvbk5hbWU7XG59O1xuXG5leHBvcnQge2dldFBlcm1pc3Npb25OYW1lc307XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtVc2VyUmlnaHRzfSBmcm9tICd+L01hcmtSaWdodHMvbW9kdWxlcy90eXBlcyc7XG5pbXBvcnQge2FwaX0gZnJvbSAnLi9hcGknO1xuaW1wb3J0IHtnZXRQZXJtaXNzaW9uTmFtZXN9IGZyb20gJy4vZ2V0UGVybWlzc2lvbk5hbWVzJztcblxuY29uc3QgYXNzaWduUGVybWlzc2lvbiA9ICh1c2VyTmFtZTogc3RyaW5nLCBwZXJtaXNzaW9uOiBVc2VyUmlnaHRzLCBzdW1tYXJ5OiBzdHJpbmcsIHJldklkOiBudW1iZXIsIGV4cGlyeTogc3RyaW5nKSA9PiB7XG5cdGNvbnN0IHBlcm1hTGluayA9IGBbW1NwZWNpYWw6UGVybWFMaW5rLyR7cmV2SWR9I1VzZXI6JHt1c2VyTmFtZX185p2D6ZmQ55Sz6K+3XV1gO1xuXHRsZXQgZnVsbFN1bW1hcnkgPSBgKyR7Z2V0UGVybWlzc2lvbk5hbWVzKHBlcm1pc3Npb24pfe+8myR7cGVybWFMaW5rfWA7XG5cdGlmIChzdW1tYXJ5ICE9PSAnJykge1xuXHRcdGZ1bGxTdW1tYXJ5ICs9IGDvvJske3N1bW1hcnl9YDtcblx0fVxuXHRmdWxsU3VtbWFyeSArPSBPUFRJT05TLnVzZXJSaWdodHNNYW5hZ2VyU3VtbWFyeTtcblx0Y29uc3QgcGFyYW1zOiBBcGlVc2VycmlnaHRzUGFyYW1zID0ge1xuXHRcdGFjdGlvbjogJ3VzZXJyaWdodHMnLFxuXHRcdHVzZXI6IHVzZXJOYW1lLnJlcGxhY2UoLyAvZywgJ18nKSxcblx0XHRyZWFzb246IGZ1bGxTdW1tYXJ5LFxuXHRcdC8vIEB0cy1leHBlY3QtZXJyb3IgVFMyMzIyXG5cdFx0YWRkOiBbcGVybWlzc2lvbl0sXG5cdFx0ZXhwaXJ5OiBleHBpcnkgPT09ICcnID8gJ2luZmluaXR5JyA6IGV4cGlyeSxcblx0fTtcblx0cmV0dXJuIGFwaS5wb3N0V2l0aFRva2VuKCd1c2VycmlnaHRzJywgcGFyYW1zKTtcbn07XG5cbmV4cG9ydCB7YXNzaWduUGVybWlzc2lvbn07XG4iLCAiaW1wb3J0IHR5cGUge1VzZXJSaWdodHN9IGZyb20gJ34vTWFya1JpZ2h0cy9tb2R1bGVzL3R5cGVzJztcblxuY29uc3QgZ2V0UGVybWlzc2lvblRlbXBsYXRlID0gKHBlcm1pc3Npb246IFVzZXJSaWdodHMpOiBzdHJpbmcgfCBudWxsID0+IHtcblx0Y29uc3QgcGVybWlzc2lvblRlbXBsYXRlcyA9IHtcblx0XHRwYXRyb2xsZXI6ICdQYXRyb2wgZ3JhbnRlZCcsXG5cdFx0YXV0b3Jldmlld2VyOiAnQXV0b3BhdHJvbCBncmFudGVkJyxcblx0XHQnbWFzc21lc3NhZ2Utc2VuZGVyJzogJ01NUyBncmFudGVkJyxcblx0XHR0ZW1wbGF0ZWVkaXRvcjogJ1RlbXBsYXRlIGVkaXRvciBncmFudGVkJyxcblx0XHR0cmFuc3dpa2k6ICdUcmFuc3dpa2kgZ3JhbnRlZCcsXG5cdH0gYXMgY29uc3Qgc2F0aXNmaWVzIFBhcnRpYWw8UmVjb3JkPFVzZXJSaWdodHMsIHN0cmluZz4+O1xuXG5cdGxldCB0ZW1wbGF0ZTogc3RyaW5nIHwgbnVsbCA9IG51bGw7XG5cdGZvciAoY29uc3QgW3BhZ2VQZXJtaXNzaW9uLCB0ZW1wbGF0ZU5hbWVdIG9mIE9iamVjdC5lbnRyaWVzKHBlcm1pc3Npb25UZW1wbGF0ZXMpKSB7XG5cdFx0aWYgKHBlcm1pc3Npb24gPT09IHBhZ2VQZXJtaXNzaW9uKSB7XG5cdFx0XHR0ZW1wbGF0ZSA9IHRlbXBsYXRlTmFtZTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHRlbXBsYXRlO1xufTtcblxuZXhwb3J0IHtnZXRQZXJtaXNzaW9uVGVtcGxhdGV9O1xuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7QXBpUmVzcG9uc2V9IGZyb20gJ3R5cGVzLW1lZGlhd2lraS1yZW5vdmF0ZS9tdy9BcGknO1xuaW1wb3J0IHtVc2VyUmlnaHRzfSBmcm9tICd+L01hcmtSaWdodHMvbW9kdWxlcy90eXBlcyc7XG5pbXBvcnQge2FwaX0gZnJvbSAnLi9hcGknO1xuaW1wb3J0IHtnZXRQZXJtaXNzaW9uTmFtZXN9IGZyb20gJy4vZ2V0UGVybWlzc2lvbk5hbWVzJztcbmltcG9ydCB7Z2V0UGVybWlzc2lvblRlbXBsYXRlfSBmcm9tICcuL2dldFRlbXBsYXRlcyc7XG5cbmNvbnN0IGlzc3VlVGVtcGxhdGUgPSAoXG5cdHVzZXJOYW1lOiBzdHJpbmcsXG5cdHBlcm1pc3Npb246IFVzZXJSaWdodHMsXG5cdHdhdGNoOiBib29sZWFuIHwgJ3dhdGNoJyB8ICd1bndhdGNoJ1xuKTogSlF1ZXJ5LlByb21pc2U8QXBpUmVzcG9uc2U+IHwgdm9pZCA9PiB7XG5cdGNvbnN0IHBlcm1pc3Npb25UZW1wbGF0ZSA9IGdldFBlcm1pc3Npb25UZW1wbGF0ZShwZXJtaXNzaW9uKTtcblx0aWYgKCFwZXJtaXNzaW9uVGVtcGxhdGUpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBwZXJtaXNzaW9uTmFtZSA9IGdldFBlcm1pc3Npb25OYW1lcyhwZXJtaXNzaW9uKTtcblx0Y29uc3QgdGFsa1BhZ2UgPSBgVXNlciB0YWxrOiR7dXNlck5hbWUucmVwbGFjZSgvIC9nLCAnXycpfWA7XG5cdGNvbnN0IHBhcmFtczogQXBpRWRpdFBhZ2VQYXJhbXMgPSB7XG5cdFx0YWN0aW9uOiAnZWRpdCcsXG5cdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0dGl0bGU6IHRhbGtQYWdlLFxuXHRcdGFwcGVuZHRleHQ6ICdcXG5cXG57eycuY29uY2F0KCdzdWJzdDonLCBwZXJtaXNzaW9uVGVtcGxhdGUsICd9fX0nKSxcblx0XHRzdW1tYXJ5OiBg5qC55o2u5YWx6K+G5o6I5LqIJHtwZXJtaXNzaW9uTmFtZX0ke09QVElPTlMudXNlclJpZ2h0c01hbmFnZXJTdW1tYXJ5fWAsXG5cdFx0d2F0Y2hsaXN0OiB3YXRjaCA/ICd3YXRjaCcgOiAndW53YXRjaCcsXG5cdH07XG5cdHJldHVybiBhcGkucG9zdFdpdGhFZGl0VG9rZW4ocGFyYW1zKTtcbn07XG5cbmV4cG9ydCB7aXNzdWVUZW1wbGF0ZX07XG4iLCAiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVuc2FmZS1hc3NpZ25tZW50ICovXG5pbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge2FwaX0gZnJvbSAnLi9hcGknO1xuY29uc3QgdGFnTGluZSA9IE9QVElPTlMudXNlclJpZ2h0c01hbmFnZXJTdW1tYXJ5O1xuXG5jb25zdCBxdWVyeVJldmlzaW9ucyA9IGFzeW5jICh0aXRsZXM6IHN0cmluZyB8IHN0cmluZ1tdLCBydnNlY3Rpb246IHN0cmluZykgPT4ge1xuXHRjb25zdCBwYXJhbXM6IEFwaVF1ZXJ5UmV2aXNpb25zUGFyYW1zID0ge1xuXHRcdHRpdGxlcyxcblx0XHRydnNlY3Rpb24sXG5cdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRwcm9wOiAncmV2aXNpb25zJyxcblx0XHRjdXJ0aW1lc3RhbXA6IHRydWUsXG5cdFx0cnZwcm9wOiBbJ2NvbnRlbnQnLCAndGltZXN0YW1wJ10sXG5cdH07XG5cblx0cmV0dXJuIGF3YWl0IGFwaS5nZXQocGFyYW1zKTtcbn07XG5cbmNvbnN0IG1hcmtBc0RvbmUgPSAodXNlck5hbWU6IHN0cmluZywgaW5kZXg6IHN0cmluZywgY2xvc2luZ1JlbWFya3M6IHN0cmluZykgPT4ge1xuXHRjb25zdCB7d2dQYWdlTmFtZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSB1bmljb3JuL3ByZWZlci1xdWVyeS1zZWxlY3RvclxuXHRjb25zdCBzZWN0aW9uTm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuXHRcdGBVc2VyOiR7dXNlck5hbWUucmVwbGFjZSgvXCIvZywgJy4yMicpLnJlcGxhY2UoLyAvZywgJ18nKX0ke2luZGV4ID8/ICcnfWBcblx0KTtcblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnNhZmUtY2FsbFxuXHRjb25zdCBbLCBzZWN0aW9uTnVtYmVyXSA9ICQoc2VjdGlvbk5vZGUgYXMgSFRNTEVsZW1lbnQpXG5cdFx0LnNpYmxpbmdzKCcubXctZWRpdHNlY3Rpb24nKVxuXHRcdC5maW5kKCdhOm5vdCgubXctZWRpdHNlY3Rpb24tdmlzdWFsZWRpdG9yKScpXG5cdFx0LnByb3AoJ2hyZWYnKVxuXHRcdC5tYXRjaCgvc2VjdGlvbj0oXFxkKykvKTtcblx0bGV0IGJhc2V0aW1lc3RhbXA6IHN0cmluZztcblx0bGV0IGN1cnRpbWVzdGFtcDogc3RyaW5nO1xuXHRsZXQgY29udGVudDogc3RyaW5nO1xuXHRsZXQgcmV2aXNpb247XG5cblx0cmV0dXJuIChcblx0XHRxdWVyeVJldmlzaW9ucyh3Z1BhZ2VOYW1lLCBgJHtzZWN0aW9uTnVtYmVyfWApXG5cdFx0XHQvLyBAdHMtZXhwZWN0LWVycm9yIFRTNzAzMFxuXHRcdFx0LnRoZW4oKGRhdGEpID0+IHtcblx0XHRcdFx0aWYgKCFkYXRhWydxdWVyeSddIHx8ICFkYXRhWydxdWVyeSddLnBhZ2VzKSB7XG5cdFx0XHRcdFx0cmV0dXJuICQuRGVmZXJyZWQoKS5yZWplY3QoJ3Vua25vd24nKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGNvbnN0IFtwYWdlXSA9IGRhdGFbJ3F1ZXJ5J10ucGFnZXM7XG5cblx0XHRcdFx0aWYgKCFwYWdlIHx8IHBhZ2UuaW52YWxpZCkge1xuXHRcdFx0XHRcdHJldHVybiAkLkRlZmVycmVkKCkucmVqZWN0KCdpbnZhbGlkdGl0bGUnKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChwYWdlLm1pc3NpbmcpIHtcblx0XHRcdFx0XHRyZXR1cm4gJC5EZWZlcnJlZCgpLnJlamVjdCgnbm9jcmVhdGUtbWlzc2luZycpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0cmV2aXNpb24gPSBwYWdlLnJldmlzaW9uc1swXTtcblx0XHRcdFx0YmFzZXRpbWVzdGFtcCA9IHJldmlzaW9uLnRpbWVzdGFtcDtcblx0XHRcdFx0Y3VydGltZXN0YW1wID0gZGF0YVsnY3VydGltZXN0YW1wJ107XG5cdFx0XHRcdGNvbnRlbnQgPSByZXZpc2lvbi5jb250ZW50O1xuXHRcdFx0fSlcblx0XHRcdC50aGVuKCgpID0+IHtcblx0XHRcdFx0Y29udGVudCA9IGNvbnRlbnQudHJpbSgpO1xuXHRcdFx0XHRjb250ZW50ID0gY29udGVudC5yZXBsYWNlKC8oOlxccyp7e1N0YXR1cykoXFx8Lio/KT99fS9pLCAnJDF8K319Jyk7XG5cdFx0XHRcdGNvbnRlbnQgKz0gY2xvc2luZ1JlbWFya3M7XG5cblx0XHRcdFx0Y29uc3QgZWRpdFBhcmFtczogQXBpRWRpdFBhZ2VQYXJhbXMgPSB7XG5cdFx0XHRcdFx0YWN0aW9uOiAnZWRpdCcsXG5cdFx0XHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHRcdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdFx0XHRcdHRpdGxlOiB3Z1BhZ2VOYW1lLFxuXHRcdFx0XHRcdHNlY3Rpb246IHNlY3Rpb25OdW1iZXIsXG5cdFx0XHRcdFx0dGV4dDogY29udGVudCxcblx0XHRcdFx0XHRzdW1tYXJ5OiBgLyogVXNlcjoke3VzZXJOYW1lfSAqLyDlrozmiJAke3RhZ0xpbmV9YCxcblx0XHRcdFx0XHRiYXNldGltZXN0YW1wLFxuXHRcdFx0XHRcdHN0YXJ0dGltZXN0YW1wOiBjdXJ0aW1lc3RhbXAsXG5cdFx0XHRcdFx0bm9jcmVhdGU6IHRydWUsXG5cdFx0XHRcdH07XG5cdFx0XHRcdGlmIChtdy5jb25maWcuZ2V0KCd3Z1VzZXJOYW1lJykpIHtcblx0XHRcdFx0XHRlZGl0UGFyYW1zLmFzc2VydCA9ICd1c2VyJztcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHJldHVybiBhcGkucG9zdFdpdGhFZGl0VG9rZW4oZWRpdFBhcmFtcyk7XG5cdFx0XHR9KVxuXHQpO1xufTtcblxuZXhwb3J0IHttYXJrQXNEb25lfTtcbiIsICJpbXBvcnQge0FwaVJlc3BvbnNlfSBmcm9tICd0eXBlcy1tZWRpYXdpa2ktcmVub3ZhdGUvbXcvQXBpJztcbmltcG9ydCB7VXNlclJpZ2h0c30gZnJvbSAnfi9NYXJrUmlnaHRzL21vZHVsZXMvdHlwZXMnO1xuaW1wb3J0IHthcGl9IGZyb20gJy4vYXBpJztcbmltcG9ydCB7YXNzaWduUGVybWlzc2lvbn0gZnJvbSAnLi9hc3NpZ25QZXJtaXNzaW9uJztcbmltcG9ydCB7Z2V0UGVybWlzc2lvbk5hbWVzfSBmcm9tICcuL2dldFBlcm1pc3Npb25OYW1lcyc7XG5pbXBvcnQge2dldFBlcm1pc3Npb25UZW1wbGF0ZX0gZnJvbSAnLi9nZXRUZW1wbGF0ZXMnO1xuaW1wb3J0IHtpc3N1ZVRlbXBsYXRlfSBmcm9tICcuL2lzc3VlVGVtcGxhdGUnO1xuaW1wb3J0IHttYXJrQXNEb25lfSBmcm9tICcuL21hcmtBc0RvbmUnO1xuXG5jb25zdCBzaG93RGlhbG9nID0gZnVuY3Rpb24gc2hvd0RpYWxvZyh7XG5cdCRib2R5LFxuXHR1c2VyTmFtZSxcblx0cGVybWlzc2lvbixcblx0aW5kZXgsXG59OiB7XG5cdCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pjtcblx0dXNlck5hbWU6IHN0cmluZztcblx0cGVybWlzc2lvbjogVXNlclJpZ2h0cztcblx0aW5kZXg6IHN0cmluZztcbn0pIHtcblx0Y29uc3Qge3dnVUxTfSA9IHdpbmRvdztcblx0Y29uc3QgcGVybWlzc2lvblRlbXBsYXRlID0gZ2V0UGVybWlzc2lvblRlbXBsYXRlKHBlcm1pc3Npb24pO1xuXHRjb25zdCBwZXJtaXNzaW9uTmFtZSA9IGdldFBlcm1pc3Npb25OYW1lcyhwZXJtaXNzaW9uKTtcblxuXHRjbGFzcyBEaWFsb2cgZXh0ZW5kcyBPTy51aS5Qcm9jZXNzRGlhbG9nIHtcblx0XHRwcml2YXRlIHN0YXRpYyBlZGl0UGFuZWw6IE9PLnVpLlBhbmVsTGF5b3V0O1xuXHRcdHByaXZhdGUgc3RhdGljIHJpZ2h0TG9nOiBPTy51aS5MYWJlbFdpZGdldDtcblx0XHRwcml2YXRlIHN0YXRpYyBlZGl0RmllbGRzZXQ6IE9PLnVpLkZpZWxkc2V0TGF5b3V0O1xuXHRcdHByaXZhdGUgc3RhdGljIHJpZ2h0c0NoYW5nZVN1bW1hcnlJbnB1dDogT08udWkuVGV4dElucHV0V2lkZ2V0O1xuXHRcdHByaXZhdGUgc3RhdGljIGV4cGlyeUlucHV0OiBPTy51aS5XaWRnZXQ7XG5cdFx0cHJpdmF0ZSBzdGF0aWMgY2xvc2luZ1JlbWFya3NJbnB1dDogT08udWkuVGV4dElucHV0V2lkZ2V0O1xuXHRcdHByaXZhdGUgc3RhdGljIHdhdGNoVGFsa1BhZ2VDaGVja2JveDogT08udWkuQ2hlY2tib3hJbnB1dFdpZGdldDtcblx0XHRwcml2YXRlIHN0YXRpYyBzdWJtaXRQYW5lbDogT08udWkuUGFuZWxMYXlvdXQ7XG5cdFx0cHJpdmF0ZSBzdGF0aWMgc3VibWl0RmllbGRzZXQ6IE9PLnVpLkZpZWxkc2V0TGF5b3V0O1xuXHRcdHByaXZhdGUgc3RhdGljICRib2R5OiBKUXVlcnkgPSAkKCdib2R5Jyk7XG5cdFx0cHJpdmF0ZSBzdGF0aWMgc3RhY2tMYXlvdXQ6IE9PLnVpLlN0YWNrTGF5b3V0O1xuXHRcdHByaXZhdGUgc3RhdGljIG1hcmtBc0RvbmVQcm9ncmVzc0ZpZWxkOiBPTy51aS5GaWVsZExheW91dDtcblx0XHRwcml2YXRlIHN0YXRpYyBjaGFuZ2VSaWdodHNQcm9ncmVzc0ZpZWxkOiBPTy51aS5GaWVsZExheW91dDtcblx0XHRwcml2YXRlIHN0YXRpYyBpc3N1ZVRlbXBsYXRlUHJvZ3Jlc3NGaWVsZDogT08udWkuRmllbGRMYXlvdXQ7XG5cdFx0cHJpdmF0ZSBzdGF0aWMgY2hhbmdlUmlnaHRzUHJvZ3Jlc3NMYWJlbDogT08udWkuTGFiZWxXaWRnZXQ7XG5cdFx0cHJpdmF0ZSBzdGF0aWMgbWFya0FzRG9uZVByb2dyZXNzTGFiZWw6IE9PLnVpLkxhYmVsV2lkZ2V0O1xuXHRcdHByaXZhdGUgc3RhdGljIGlzc3VlVGVtcGxhdGVQcm9ncmVzc0xhYmVsOiBPTy51aS5MYWJlbFdpZGdldDtcblx0XHRzdGF0aWMgYWN0aW9uczogdW5rbm93bjtcblxuXHRcdHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcblx0XHRcdHN1cGVyKHtcblx0XHRcdFx0c2l6ZTogJ21lZGl1bScsXG5cdFx0XHR9KTtcblx0XHR9XG5cdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNsYXNzLW1ldGhvZHMtdXNlLXRoaXNcblx0XHRwdWJsaWMgb3ZlcnJpZGUgZ2V0Qm9keUhlaWdodCgpIHtcblx0XHRcdHJldHVybiAyNTU7XG5cdFx0fVxuXHRcdHB1YmxpYyBvdmVycmlkZSBpbml0aWFsaXplKCkge1xuXHRcdFx0c3VwZXIuaW5pdGlhbGl6ZSgpO1xuXHRcdFx0RGlhbG9nLmVkaXRQYW5lbCA9IG5ldyBPTy51aS5QYW5lbExheW91dCh7XG5cdFx0XHRcdGV4cGFuZGVkOiBmYWxzZSxcblx0XHRcdH0pO1xuXHRcdFx0Y29uc3QgcmlnaHRMb2dXYXBwZXIgPSAkKCc8c3Bhbj4nKTtcblx0XHRcdGNvbnN0IHVybCA9IG13LnV0aWwuZ2V0VXJsKCdTcGVjaWFsOkxvZy9yaWdodHMnLCB7dHlwZTogJ3JpZ2h0cycsIHBhZ2U6IGBVc2VyOiR7dXNlck5hbWV9YH0pO1xuXHRcdFx0JCgnPGE+Jylcblx0XHRcdFx0LnRleHQod2dVTFMoJ+acgOi/keadg+mZkOaXpeW/lycsICfmnIDov5HmrIrpmZDml6XoqownKSlcblx0XHRcdFx0LmF0dHIoe2hyZWY6IHVybCwgdGFyZ2V0OiAnX2JsYW5rJ30pXG5cdFx0XHRcdC5hcHBlbmRUbyhyaWdodExvZ1dhcHBlcik7XG5cdFx0XHRyaWdodExvZ1dhcHBlci5hcHBlbmQoJ++8micpO1xuXHRcdFx0Y29uc3QgcmlnaHRMb2dUZXh0ID0gJCgnPHNwYW4+JykudGV4dCh3Z1VMUygn6I635Y+W5LitJywgJ+WPluW+l+S4rScpKS5hcHBlbmRUbyhyaWdodExvZ1dhcHBlcik7XG5cdFx0XHREaWFsb2cucmlnaHRMb2cgPSBuZXcgT08udWkuTGFiZWxXaWRnZXQoe1xuXHRcdFx0XHRsYWJlbDogcmlnaHRMb2dXYXBwZXIsXG5cdFx0XHR9KTtcblx0XHRcdERpYWxvZy5lZGl0UGFuZWwuJGVsZW1lbnQuYXBwZW5kKERpYWxvZy5yaWdodExvZy4kZWxlbWVudCk7XG5cblx0XHRcdGNvbnN0IHF1ZXJ5TG9nRXZlbnRzUGFyYW1zOiBBcGlRdWVyeUxvZ0V2ZW50c1BhcmFtcyA9IHtcblx0XHRcdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdFx0bGlzdDogJ2xvZ2V2ZW50cycsXG5cdFx0XHRcdGxlYWN0aW9uOiAncmlnaHRzL3JpZ2h0cycsXG5cdFx0XHRcdGxldGl0bGU6IGBVc2VyOiR7dXNlck5hbWV9YCxcblx0XHRcdFx0bGVsaW1pdDogMSxcblx0XHRcdH07XG5cblx0XHRcdHZvaWQgYXBpLmdldChxdWVyeUxvZ0V2ZW50c1BhcmFtcykuZG9uZSgoZGF0YSkgPT4ge1xuXHRcdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVuc2FmZS1hc3NpZ25tZW50XG5cdFx0XHRcdGNvbnN0IGxvZ3MgPSBkYXRhWydxdWVyeSddLmxvZ2V2ZW50cztcblx0XHRcdFx0aWYgKGxvZ3MubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRcdFx0cmlnaHRMb2dUZXh0LnRleHQod2dVTFMoJ+ayoeacieS7u+S9leaXpeW/lycsICfmspLmnInku7vkvZXml6XoqownKSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Ly8gQHRzLWV4cGVjdC1lcnJvciBUUzIzMDRcblx0XHRcdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVuc2FmZS1hc3NpZ25tZW50LCBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW5zYWZlLWNhbGwsIG5ldy1jYXBcblx0XHRcdFx0XHRjb25zdCB0aW1lc3RhbXAgPSBuZXcgTW9yZWJpdHMuZGF0ZShsb2dzWzBdLnRpbWVzdGFtcCkuY2FsZW5kYXIoKTtcblx0XHRcdFx0XHRjb25zdCByaWdodHMgPSAobG9nc1swXS5wYXJhbXMubmV3Z3JvdXBzIGFzIHN0cmluZ1tdKS5qb2luKCfjgIEnKSB8fCB3Z1VMUygn77yI5peg77yJJywgJ++8iOeEoe+8iScpO1xuXHRcdFx0XHRcdHJpZ2h0TG9nVGV4dC50ZXh0KFxuXHRcdFx0XHRcdFx0YCR7dGltZXN0YW1wfSAke2xvZ3NbMF0udXNlcn0ke3dnVUxTKCflsIbnlKjmiLfnu4TmlLnkuLonLCAn5bCH5L2/55So6ICF576k57WE5pS554K6Jyl9JHtyaWdodHN9YFxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXG5cdFx0XHREaWFsb2cuZWRpdEZpZWxkc2V0ID0gbmV3IE9PLnVpLkZpZWxkc2V0TGF5b3V0KHtcblx0XHRcdFx0Y2xhc3NlczogWydjb250YWluZXInXSxcblx0XHRcdH0pO1xuXHRcdFx0RGlhbG9nLmVkaXRQYW5lbC4kZWxlbWVudC5hcHBlbmQoRGlhbG9nLmVkaXRGaWVsZHNldC4kZWxlbWVudCk7XG5cblx0XHRcdERpYWxvZy5yaWdodHNDaGFuZ2VTdW1tYXJ5SW5wdXQgPSBuZXcgT08udWkuVGV4dElucHV0V2lkZ2V0KHtcblx0XHRcdFx0dmFsdWU6ICcnLFxuXHRcdFx0XHRwbGFjZWhvbGRlcjogJ+WPr+eVmeepuicsXG5cdFx0XHR9KTtcblx0XHRcdC8vIEB0cy1leHBlY3QtZXJyb3IgVFMyMzM5XG5cdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVuc2FmZS1jYWxsXG5cdFx0XHREaWFsb2cuZXhwaXJ5SW5wdXQgPSBuZXcgbXcud2lkZ2V0cy5FeHBpcnlXaWRnZXQoe1xuXHRcdFx0XHQkb3ZlcmxheTogJGJvZHkuZmluZCgnLm9vLXVpLXdpbmRvdycpLFxuXHRcdFx0XHQvLyBAdHMtZXhwZWN0LWVycm9yIFRTMjMzOVxuXHRcdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVuc2FmZS1hc3NpZ25tZW50XG5cdFx0XHRcdFJlbGF0aXZlSW5wdXRDbGFzczogbXcud2lkZ2V0cy5TZWxlY3RXaXRoSW5wdXRXaWRnZXQsXG5cdFx0XHRcdHJlbGF0aXZlSW5wdXQ6IHtcblx0XHRcdFx0XHRvcjogdHJ1ZSxcblx0XHRcdFx0XHRkcm9wZG93bmlucHV0OiB7XG5cdFx0XHRcdFx0XHRvcHRpb25zOiBbXG5cdFx0XHRcdFx0XHRcdHtkYXRhOiAnMSBkYXknLCBsYWJlbDogJzHlpKknfSxcblx0XHRcdFx0XHRcdFx0e2RhdGE6ICcxIHdlZWsnLCBsYWJlbDogd2dVTFMoJzHlkagnLCAnMemAsScpfSxcblx0XHRcdFx0XHRcdFx0e2RhdGE6ICcxIG1vbnRoJywgbGFiZWw6IHdnVUxTKCcx5Liq5pyIJywgJzHlgIvmnIgnKX0sXG5cdFx0XHRcdFx0XHRcdHtkYXRhOiAnMyBtb250aHMnLCBsYWJlbDogd2dVTFMoJzPkuKrmnIgnLCAnM+WAi+aciCcpfSxcblx0XHRcdFx0XHRcdFx0e2RhdGE6ICc2IG1vbnRocycsIGxhYmVsOiB3Z1VMUygnNuS4quaciCcsICc25YCL5pyIJyl9LFxuXHRcdFx0XHRcdFx0XHR7ZGF0YTogJzEgeWVhcicsIGxhYmVsOiAnMeW5tCd9LFxuXHRcdFx0XHRcdFx0XHR7ZGF0YTogJ2luZmluaXRlJywgbGFiZWw6IHdnVUxTKCfmsqHmnInmnJ/pmZAnLCAn5rKS5pyJ5pyf6ZmQJyl9LFxuXHRcdFx0XHRcdFx0XHR7ZGF0YTogJ290aGVyJywgbGFiZWw6IHdnVUxTKCflhbbku5bml7bpl7QnLCAn5YW25LuW5pmC6ZaTJyl9LFxuXHRcdFx0XHRcdFx0XSxcblx0XHRcdFx0XHRcdHZhbHVlOiAnaW5maW5pdGUnLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0dGV4dGlucHV0OiB7XG5cdFx0XHRcdFx0XHRyZXF1aXJlZDogdHJ1ZSxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHR9LFxuXHRcdFx0fSkgYXMgT08udWkuV2lkZ2V0O1xuXHRcdFx0RGlhbG9nLmNsb3NpbmdSZW1hcmtzSW5wdXQgPSBuZXcgT08udWkuVGV4dElucHV0V2lkZ2V0KHtcblx0XHRcdFx0dmFsdWU6ICd7e2RvbmV9fS0tfn5+ficsXG5cdFx0XHR9KTtcblx0XHRcdERpYWxvZy53YXRjaFRhbGtQYWdlQ2hlY2tib3ggPSBuZXcgT08udWkuQ2hlY2tib3hJbnB1dFdpZGdldCh7XG5cdFx0XHRcdHNlbGVjdGVkOiBmYWxzZSxcblx0XHRcdH0pO1xuXHRcdFx0Y29uc3QgZm9ybUVsZW1lbnRzID0gW1xuXHRcdFx0XHRuZXcgT08udWkuRmllbGRMYXlvdXQoRGlhbG9nLnJpZ2h0c0NoYW5nZVN1bW1hcnlJbnB1dCwge1xuXHRcdFx0XHRcdGxhYmVsOiB3Z1VMUygn5o6I5p2D5Y6f5ZugJywgJ+aOiOasiuWOn+WboCcpLFxuXHRcdFx0XHR9KSxcblx0XHRcdFx0bmV3IE9PLnVpLkZpZWxkTGF5b3V0KERpYWxvZy5leHBpcnlJbnB1dCwge1xuXHRcdFx0XHRcdGxhYmVsOiB3Z1VMUygn57uT5p2f5pe26Ze0JywgJ+e1kOadn+aZgumWkycpLFxuXHRcdFx0XHR9KSxcblx0XHRcdFx0bmV3IE9PLnVpLkZpZWxkTGF5b3V0KERpYWxvZy5jbG9zaW5nUmVtYXJrc0lucHV0LCB7XG5cdFx0XHRcdFx0bGFiZWw6IHdnVUxTKCflhbPpl63or7fmsYLnlZnoqIAnLCAn6Zec6ZaJ6KuL5rGC55WZ6KiAJyksXG5cdFx0XHRcdH0pLFxuXHRcdFx0XTtcblx0XHRcdGlmIChwZXJtaXNzaW9uVGVtcGxhdGUpIHtcblx0XHRcdFx0Zm9ybUVsZW1lbnRzLnB1c2goXG5cdFx0XHRcdFx0bmV3IE9PLnVpLkZpZWxkTGF5b3V0KERpYWxvZy53YXRjaFRhbGtQYWdlQ2hlY2tib3gsIHtcblx0XHRcdFx0XHRcdGxhYmVsOiB3Z1VMUygn55uR6KeG55So5oi36K6o6K666aG1JywgJ+ebo+imluS9v+eUqOiAheiojuirlumggScpLFxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0XHREaWFsb2cuZWRpdEZpZWxkc2V0LmFkZEl0ZW1zKGZvcm1FbGVtZW50cyk7XG5cdFx0XHREaWFsb2cuc3VibWl0UGFuZWwgPSBuZXcgT08udWkuUGFuZWxMYXlvdXQoe1xuXHRcdFx0XHRleHBhbmRlZDogZmFsc2UsXG5cdFx0XHR9KTtcblx0XHRcdERpYWxvZy5zdWJtaXRGaWVsZHNldCA9IG5ldyBPTy51aS5GaWVsZHNldExheW91dCh7XG5cdFx0XHRcdGNsYXNzZXM6IFsnY29udGFpbmVyJ10sXG5cdFx0XHR9KTtcblx0XHRcdERpYWxvZy5zdWJtaXRQYW5lbC4kZWxlbWVudC5hcHBlbmQoRGlhbG9nLnN1Ym1pdEZpZWxkc2V0LiRlbGVtZW50KTtcblx0XHRcdERpYWxvZy5zdWJtaXRQYW5lbC4kZWxlbWVudC5hcHBlbmQoRGlhbG9nLnN1Ym1pdEZpZWxkc2V0LiRlbGVtZW50KTtcblx0XHRcdERpYWxvZy5jaGFuZ2VSaWdodHNQcm9ncmVzc0xhYmVsID0gbmV3IE9PLnVpLkxhYmVsV2lkZ2V0KCk7XG5cdFx0XHREaWFsb2cuY2hhbmdlUmlnaHRzUHJvZ3Jlc3NGaWVsZCA9IG5ldyBPTy51aS5GaWVsZExheW91dChEaWFsb2cuY2hhbmdlUmlnaHRzUHJvZ3Jlc3NMYWJlbCk7XG5cdFx0XHREaWFsb2cubWFya0FzRG9uZVByb2dyZXNzTGFiZWwgPSBuZXcgT08udWkuTGFiZWxXaWRnZXQoKTtcblx0XHRcdERpYWxvZy5tYXJrQXNEb25lUHJvZ3Jlc3NGaWVsZCA9IG5ldyBPTy51aS5GaWVsZExheW91dChEaWFsb2cubWFya0FzRG9uZVByb2dyZXNzTGFiZWwpO1xuXHRcdFx0RGlhbG9nLmlzc3VlVGVtcGxhdGVQcm9ncmVzc0xhYmVsID0gbmV3IE9PLnVpLkxhYmVsV2lkZ2V0KCk7XG5cdFx0XHREaWFsb2cuaXNzdWVUZW1wbGF0ZVByb2dyZXNzRmllbGQgPSBuZXcgT08udWkuRmllbGRMYXlvdXQoRGlhbG9nLmlzc3VlVGVtcGxhdGVQcm9ncmVzc0xhYmVsKTtcblx0XHRcdERpYWxvZy5zdGFja0xheW91dCA9IG5ldyBPTy51aS5TdGFja0xheW91dCh7XG5cdFx0XHRcdGl0ZW1zOiBbRGlhbG9nLmVkaXRQYW5lbCwgRGlhbG9nLnN1Ym1pdFBhbmVsXSxcblx0XHRcdFx0cGFkZGVkOiB0cnVlLFxuXHRcdFx0fSk7XG5cdFx0XHREaWFsb2cuJGJvZHkuYXBwZW5kKERpYWxvZy5zdGFja0xheW91dC4kZWxlbWVudCk7XG5cblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH1cblx0XHRwdWJsaWMgc3RhdGljIG9uU3VibWl0KCkge1xuXHRcdFx0bGV0IHByb21pc2VDb3VudCA9IHBlcm1pc3Npb25UZW1wbGF0ZSA/IDMgOiAyO1xuXG5cdFx0XHQvLyBAdHMtZXhwZWN0LWVycm9yIFRTMTgwNDZcblx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW5zYWZlLWNhbGxcblx0XHRcdERpYWxvZy5hY3Rpb25zLnNldEFiaWxpdGllcyh7c3VibWl0OiBmYWxzZX0pO1xuXG5cdFx0XHRjb25zdCBhZGRQcm9taXNlID0gZnVuY3Rpb24gKGZpZWxkOiBPTy51aS5GaWVsZExheW91dCwgcHJvbWlzZTogSlF1ZXJ5LlByb21pc2U8QXBpUmVzcG9uc2U+KSB7XG5cdFx0XHRcdERpYWxvZy5wdXNoUGVuZGluZygpO1xuXHRcdFx0XHR2b2lkIHByb21pc2Vcblx0XHRcdFx0XHQuZG9uZSgoKSA9PiB7XG5cdFx0XHRcdFx0XHRmaWVsZC4kZmllbGQuYXBwZW5kKFxuXHRcdFx0XHRcdFx0XHQkKCc8c3Bhbj4nKVxuXHRcdFx0XHRcdFx0XHRcdC50ZXh0KCflrozmiJDvvIEnKVxuXHRcdFx0XHRcdFx0XHRcdC5wcm9wKCdzdHlsZScsICdwb3NpdGlvbjpyZWxhdGl2ZTsgdG9wOjAuNWVtOyBjb2xvcjogIzAwOTAwMDsgZm9udC13ZWlnaHQ6IGJvbGQnKVxuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdC5mYWlsKChvYmopID0+IHtcblx0XHRcdFx0XHRcdGlmIChvYmogJiYgb2JqLmVycm9yICYmIG9iai5lcnJvci5pbmZvKSB7XG5cdFx0XHRcdFx0XHRcdGZpZWxkLiRmaWVsZC5hcHBlbmQoXG5cdFx0XHRcdFx0XHRcdFx0JCgnPHNwYW4+Jylcblx0XHRcdFx0XHRcdFx0XHRcdC50ZXh0KHdnVUxTKCfplJnor6/vvJonLCAn6Yyv6Kqk77yaJykgKyBvYmouZXJyb3IuaW5mbylcblx0XHRcdFx0XHRcdFx0XHRcdC5wcm9wKCdzdHlsZScsICdwb3NpdGlvbjpyZWxhdGl2ZTsgdG9wOjAuNWVtOyBjb2xvcjogI2NjMDAwMDsgZm9udC13ZWlnaHQ6IGJvbGQnKVxuXHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0ZmllbGQuJGZpZWxkLmFwcGVuZChcblx0XHRcdFx0XHRcdFx0XHQkKCc8c3Bhbj4nKVxuXHRcdFx0XHRcdFx0XHRcdFx0LnRleHQod2dVTFMoJ+WPkeeUn+acquefpemUmeivr+OAgicsICfnmbznlJ/mnKrnn6XpjK/oqqTjgIInKSlcblx0XHRcdFx0XHRcdFx0XHRcdC5wcm9wKCdzdHlsZScsICdwb3NpdGlvbjpyZWxhdGl2ZTsgdG9wOjAuNWVtOyBjb2xvcjogI2NjMDAwMDsgZm9udC13ZWlnaHQ6IGJvbGQnKVxuXHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0LmFsd2F5cygoKSA9PiB7XG5cdFx0XHRcdFx0XHRwcm9taXNlQ291bnQtLTsgLy8gRklYTUU6IG1heWJlIHdlIGNvdWxkIHVzZSBhIERpYWxvZy5pc1BlbmRpbmcoKSBvciBzb21ldGhpbmdcblx0XHRcdFx0XHRcdERpYWxvZy5wb3BQZW5kaW5nKCk7XG5cblx0XHRcdFx0XHRcdGlmIChwcm9taXNlQ291bnQgPT09IDApIHtcblx0XHRcdFx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0bG9jYXRpb24ucmVsb2FkKCk7XG5cdFx0XHRcdFx0XHRcdH0sIDEwMDApO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0pO1xuXG5cdFx0XHRcdHJldHVybiBwcm9taXNlO1xuXHRcdFx0fTtcblxuXHRcdFx0RGlhbG9nLm1hcmtBc0RvbmVQcm9ncmVzc0ZpZWxkLnNldExhYmVsKHdnVUxTKCfmoIforrDor7fmsYLkuLrlt7LlrozmiJAuLi4nLCAn5qiZ6KiY6KuL5rGC54K65bey5a6M5oiQLi4uJykpO1xuXHRcdFx0RGlhbG9nLnN1Ym1pdEZpZWxkc2V0LmFkZEl0ZW1zKFtEaWFsb2cubWFya0FzRG9uZVByb2dyZXNzRmllbGRdKTtcblx0XHRcdERpYWxvZy5jaGFuZ2VSaWdodHNQcm9ncmVzc0ZpZWxkLnNldExhYmVsKHdnVUxTKCfmjojkuojmnYPpmZAuLi4nLCAn5o6I5LqI5qyK6ZmQLi4uJykpO1xuXHRcdFx0RGlhbG9nLnN1Ym1pdEZpZWxkc2V0LmFkZEl0ZW1zKFtEaWFsb2cuY2hhbmdlUmlnaHRzUHJvZ3Jlc3NGaWVsZF0pO1xuXG5cdFx0XHRpZiAocGVybWlzc2lvblRlbXBsYXRlKSB7XG5cdFx0XHRcdERpYWxvZy5pc3N1ZVRlbXBsYXRlUHJvZ3Jlc3NGaWVsZC5zZXRMYWJlbCh3Z1VMUygn5Y+R6YCB6YCa55+lLi4uJywgJ+eZvOmAgemAmuefpS4uLicpKTtcblx0XHRcdFx0RGlhbG9nLnN1Ym1pdEZpZWxkc2V0LmFkZEl0ZW1zKFtEaWFsb2cuaXNzdWVUZW1wbGF0ZVByb2dyZXNzRmllbGRdKTtcblx0XHRcdH1cblxuXHRcdFx0dm9pZCBhZGRQcm9taXNlKFxuXHRcdFx0XHREaWFsb2cubWFya0FzRG9uZVByb2dyZXNzRmllbGQsXG5cdFx0XHRcdG1hcmtBc0RvbmUoXG5cdFx0XHRcdFx0dXNlck5hbWUsXG5cdFx0XHRcdFx0aW5kZXgsXG5cdFx0XHRcdFx0YFxcbjoke0RpYWxvZy5jbG9zaW5nUmVtYXJrc0lucHV0LmdldFZhbHVlKCl9YFxuXHRcdFx0XHQpIGFzIHVua25vd24gYXMgSlF1ZXJ5LlByb21pc2U8QXBpUmVzcG9uc2U+XG5cdFx0XHQpLnRoZW4oKGRhdGEpID0+IHtcblx0XHRcdFx0dm9pZCBhZGRQcm9taXNlKFxuXHRcdFx0XHRcdERpYWxvZy5jaGFuZ2VSaWdodHNQcm9ncmVzc0ZpZWxkLFxuXHRcdFx0XHRcdGFzc2lnblBlcm1pc3Npb24oXG5cdFx0XHRcdFx0XHR1c2VyTmFtZSxcblx0XHRcdFx0XHRcdHBlcm1pc3Npb24sXG5cdFx0XHRcdFx0XHREaWFsb2cucmlnaHRzQ2hhbmdlU3VtbWFyeUlucHV0LmdldFZhbHVlKCksXG5cdFx0XHRcdFx0XHROdW1iZXIucGFyc2VJbnQoZGF0YVsnZWRpdCddLm5ld3JldmlkIGFzIHN0cmluZywgMTApLFxuXHRcdFx0XHRcdFx0KERpYWxvZy5leHBpcnlJbnB1dCBhcyBPTy51aS5UZXh0SW5wdXRXaWRnZXQpLmdldFZhbHVlKClcblx0XHRcdFx0XHQpXG5cdFx0XHRcdCkudGhlbigoKSA9PiB7XG5cdFx0XHRcdFx0aWYgKHBlcm1pc3Npb25UZW1wbGF0ZSkge1xuXHRcdFx0XHRcdFx0dm9pZCBhZGRQcm9taXNlKFxuXHRcdFx0XHRcdFx0XHREaWFsb2cuaXNzdWVUZW1wbGF0ZVByb2dyZXNzRmllbGQsXG5cdFx0XHRcdFx0XHRcdGlzc3VlVGVtcGxhdGUoXG5cdFx0XHRcdFx0XHRcdFx0dXNlck5hbWUsXG5cdFx0XHRcdFx0XHRcdFx0cGVybWlzc2lvbixcblx0XHRcdFx0XHRcdFx0XHREaWFsb2cud2F0Y2hUYWxrUGFnZUNoZWNrYm94LmlzU2VsZWN0ZWQoKVxuXHRcdFx0XHRcdFx0XHQpIGFzIEpRdWVyeS5Qcm9taXNlPEFwaVJlc3BvbnNlPlxuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cblx0XHRcdERpYWxvZy5zdGFja0xheW91dC5zZXRJdGVtKERpYWxvZy5zdWJtaXRQYW5lbCk7XG5cdFx0fVxuXHRcdHN0YXRpYyBwdXNoUGVuZGluZygpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcignTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC4nKTtcblx0XHR9XG5cdFx0c3RhdGljIHBvcFBlbmRpbmcoKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ01ldGhvZCBub3QgaW1wbGVtZW50ZWQuJyk7XG5cdFx0fVxuXG5cdFx0cHVibGljIG92ZXJyaWRlIGdldEFjdGlvblByb2Nlc3MoYWN0aW9uPzogc3RyaW5nKTogT08udWkuUHJvY2VzcyB7XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRzdXBlclxuXHRcdFx0XHRcdC5nZXRBY3Rpb25Qcm9jZXNzKGFjdGlvbilcblx0XHRcdFx0XHQvLyBAdHMtZXhwZWN0LWVycm9yIFRTNzAzMFxuXHRcdFx0XHRcdC5uZXh0KGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRcdGlmIChhY3Rpb24gPT09ICdzdWJtaXQnKSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBEaWFsb2cub25TdWJtaXQoKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdHJldHVybiBEaWFsb2cuc3VwZXIucHJvdG90eXBlLmdldEFjdGlvblByb2Nlc3MuY2FsbCh0aGlzLCBhY3Rpb24pO1xuXHRcdFx0XHRcdH0sIHRoaXMpXG5cdFx0XHQpO1xuXHRcdH1cblx0fVxuXHREaWFsb2cuc3RhdGljID0ge1xuXHRcdC4uLk9PLnVpLlByb2Nlc3NEaWFsb2cuc3RhdGljLFxuXHR9O1xuXHREaWFsb2cuc3RhdGljLm5hbWUgPSAndXNlci1yaWdodHMtbWFuYWdlcic7XG5cdERpYWxvZy5zdGF0aWMudGl0bGUgPSBg5o6I5LqIJHtwZXJtaXNzaW9uTmFtZX0ke3dnVUxTKCfnu5knLCAn57WmJyl9JHt1c2VyTmFtZX1gO1xuXHREaWFsb2cuc3RhdGljLmFjdGlvbnMgPSBbXG5cdFx0e2FjdGlvbjogJ3N1Ym1pdCcsIGxhYmVsOiB3Z1VMUygn5o6I5p2DJywgJ+aOiOasiicpLCBmbGFnczogWydwcmltYXJ5JywgJ3Byb2dyZXNzaXZlJ119LFxuXHRcdHtsYWJlbDogJ+WPlua2iCcsIGZsYWdzOiAnc2FmZSd9LFxuXHRdO1xuXG5cdGNvbnN0IGRpYWxvZyA9IG5ldyBEaWFsb2coKTtcblxuXHRjb25zdCB3aW5kb3dNYW5hZ2VyID0gbmV3IE9PLnVpLldpbmRvd01hbmFnZXIoKTtcblx0JCgnYm9keScpLmFwcGVuZCh3aW5kb3dNYW5hZ2VyLiRlbGVtZW50KTtcblx0d2luZG93TWFuYWdlci5hZGRXaW5kb3dzKFtkaWFsb2ddKTtcblx0dm9pZCB3aW5kb3dNYW5hZ2VyLm9wZW5XaW5kb3coZGlhbG9nKTtcbn07XG5cbmV4cG9ydCB7c2hvd0RpYWxvZ307XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxxQkFBc0JDLFFBQUEsaUJBQUE7O0FDRXRCLElBQU1DLHFCQUFxQkEsTUFBeUI7QUFDbkQsUUFBTTtJQUFDQztFQUFVLElBQUlDLEdBQUdDLE9BQU9DLElBQUk7QUFFbkMsUUFBTUMsa0JBQWtCO0lBQ3ZCLDRCQUE0QjtJQUM1Qiw0QkFBNEI7SUFDNUIsNEJBQTRCO0lBQzVCLDhCQUE4QjtJQUM5Qiw0QkFBNEI7SUFDNUIsMEJBQTBCO0lBQzFCLDRCQUE0QjtJQUM1Qiw0QkFBNEI7SUFDNUIsOEJBQThCO0VBQy9CO0FBRUEsTUFBSUMsYUFBZ0M7QUFDcEMsV0FBQUMsS0FBQSxHQUFBQyxrQkFBeUNDLE9BQU9DLFFBQVFMLGVBQWUsR0FBQUUsS0FBQUMsZ0JBQUFHLFFBQUFKLE1BQUc7QUFBMUUsVUFBVyxDQUFDSyxVQUFVQyxjQUFjLElBQUFMLGdCQUFBRCxFQUFBO0FBQ25DLFFBQUlLLGFBQWFYLFlBQVk7QUFDNUJLLG1CQUFhTztJQUNkLE9BQU87QUFDTjtJQUNEO0VBQ0Q7QUFFQSxTQUFPUDtBQUNSOztBQzFCQyxJQUFBUSwyQkFBNEI7QUFDNUIsSUFBQUMsVUFBVzs7QUNEWixJQUFBQyxvQkFBd0JqQixRQUFBLGlCQUFBO0FBRXhCLElBQU1rQixPQUFBLEdBQWNELGtCQUFBRSxXQUFBLGtDQUFBQyxPQUFvREosT0FBTyxDQUFFOztBQ0RqRixJQUFNSyxxQkFBc0JkLGdCQUEwQztBQUNyRSxRQUFNZSxrQkFBa0I7SUFDdkJDLFdBQVc7SUFDWEMsY0FBYztJQUNkQyxXQUFXO0lBQ1gsc0JBQXNCO0lBQ3RCQyxjQUFjO0lBQ2RDLFdBQVc7SUFDWEMsZ0JBQWdCO0lBQ2hCQyxLQUFLO0lBQ0wscUJBQXFCO0VBQ3RCO0FBRUEsTUFBSUMsaUJBQWdDO0FBQ3BDLFdBQUFDLE1BQUEsR0FBQUMsbUJBQTRCdEIsT0FBT0MsUUFBUVcsZUFBZSxHQUFBUyxNQUFBQyxpQkFBQXBCLFFBQUFtQixPQUFHO0FBQTdELFVBQVcsQ0FBQ0UsT0FBT0MsSUFBSSxJQUFBRixpQkFBQUQsR0FBQTtBQUN0QixRQUFJeEIsZUFBZTBCLE9BQU87QUFDekJILHVCQUFpQkk7SUFDbEIsT0FBTztBQUNOO0lBQ0Q7RUFDRDtBQUVBLFNBQU9KO0FBQ1I7O0FDcEJBLElBQU1LLG1CQUFtQkEsQ0FBQ0MsVUFBa0I3QixZQUF3QjhCLFNBQWlCQyxPQUFlQyxXQUFtQjtBQUN0SCxRQUFNQyxZQUFBLHVCQUFBcEIsT0FBbUNrQixPQUFLLFFBQUEsRUFBQWxCLE9BQVNnQixVQUFRLFNBQUE7QUFDL0QsTUFBSUssY0FBQSxJQUFBckIsT0FBa0JDLG1CQUFtQmQsVUFBVSxHQUFDLEdBQUEsRUFBQWEsT0FBSW9CLFNBQVM7QUFDakUsTUFBSUgsWUFBWSxJQUFJO0FBQ25CSSxtQkFBQSxJQUFBckIsT0FBbUJpQixPQUFPO0VBQzNCO0FBQ0FJLGlCQUF1QjFCO0FBQ3ZCLFFBQU0yQixTQUE4QjtJQUNuQ0MsUUFBUTtJQUNSQyxNQUFNUixTQUFTUyxRQUFRLE1BQU0sR0FBRztJQUNoQ0MsUUFBUUw7O0lBRVJNLEtBQUssQ0FBQ3hDLFVBQVU7SUFDaEJnQyxRQUFRQSxXQUFXLEtBQUssYUFBYUE7RUFDdEM7QUFDQSxTQUFPckIsSUFBSThCLGNBQWMsY0FBY04sTUFBTTtBQUM5Qzs7QUNuQkEsSUFBTU8sd0JBQXlCMUMsZ0JBQTBDO0FBQ3hFLFFBQU0yQyxzQkFBc0I7SUFDM0IzQixXQUFXO0lBQ1hDLGNBQWM7SUFDZCxzQkFBc0I7SUFDdEJJLGdCQUFnQjtJQUNoQkQsV0FBVztFQUNaO0FBRUEsTUFBSXdCLFdBQTBCO0FBQzlCLFdBQUFDLE1BQUEsR0FBQUMsbUJBQTZDM0MsT0FBT0MsUUFBUXVDLG1CQUFtQixHQUFBRSxNQUFBQyxpQkFBQXpDLFFBQUF3QyxPQUFHO0FBQWxGLFVBQVcsQ0FBQ3RDLGdCQUFnQndDLFlBQVksSUFBQUQsaUJBQUFELEdBQUE7QUFDdkMsUUFBSTdDLGVBQWVPLGdCQUFnQjtBQUNsQ3FDLGlCQUFXRztJQUNaLE9BQU87QUFDTjtJQUNEO0VBQ0Q7QUFFQSxTQUFPSDtBQUNSOztBQ2RBLElBQU1JLGdCQUFnQkEsQ0FDckJuQixVQUNBN0IsWUFDQWlELFVBQ3dDO0FBQ3hDLFFBQU1DLHFCQUFxQlIsc0JBQXNCMUMsVUFBVTtBQUMzRCxNQUFJLENBQUNrRCxvQkFBb0I7QUFDeEI7RUFDRDtBQUVBLFFBQU0zQixpQkFBaUJULG1CQUFtQmQsVUFBVTtBQUNwRCxRQUFNbUQsV0FBQSxhQUFBdEMsT0FBd0JnQixTQUFTUyxRQUFRLE1BQU0sR0FBRyxDQUFDO0FBQ3pELFFBQU1ILFNBQTRCO0lBQ2pDQyxRQUFRO0lBQ1JnQixRQUFRO0lBQ1JDLE9BQU9GO0lBQ1BHLFlBQVksU0FBU3pDLE9BQU8sVUFBVXFDLG9CQUFvQixLQUFLO0lBQy9EcEIsU0FBQSxTQUFBakIsT0FBa0JVLGNBQWMsRUFBQVYsT0FBV0wsd0JBQXdCO0lBQ25FK0MsV0FBV04sUUFBUSxVQUFVO0VBQzlCO0FBQ0EsU0FBT3RDLElBQUk2QyxrQkFBa0JyQixNQUFNO0FBQ3BDOztBQ3pCQSxJQUFNc0IsVUFBa0JqRDtBQUV4QixJQUFNa0QsaUJBQUEsMkJBQUE7QUFBQSxNQUFBQyxPQUFBQyxrQkFBaUIsV0FBT0MsUUFBMkJDLFdBQXNCO0FBQzlFLFVBQU0zQixTQUFrQztNQUN2QzBCO01BQ0FDO01BQ0ExQixRQUFRO01BQ1JnQixRQUFRO01BQ1JXLGVBQWU7TUFDZkMsTUFBTTtNQUNOQyxjQUFjO01BQ2RDLFFBQVEsQ0FBQyxXQUFXLFdBQVc7SUFDaEM7QUFFQSxXQUFBLE1BQWF2RCxJQUFJYixJQUFJcUMsTUFBTTtFQUM1QixDQUFBO0FBQUEsU0FBQSxTQWJNdUIsZ0JBQUFTLElBQUFDLEtBQUE7QUFBQSxXQUFBVCxLQUFBVSxNQUFBLE1BQUFDLFNBQUE7RUFBQTtBQUFBLEVBQUE7QUFlTixJQUFNQyxhQUFhQSxDQUFDMUMsVUFBa0IyQyxPQUFlQyxtQkFBMkI7QUFDL0UsUUFBTTtJQUFDOUU7RUFBVSxJQUFJQyxHQUFHQyxPQUFPQyxJQUFJO0FBRW5DLFFBQU00RSxjQUFjQyxTQUFTQyxlQUFBLFFBQUEvRCxPQUNwQmdCLFNBQVNTLFFBQVEsTUFBTSxLQUFLLEVBQUVBLFFBQVEsTUFBTSxHQUFHLENBQUMsRUFBQXpCLE9BQUcyRCxVQUFBLFFBQUFBLFVBQUEsU0FBQUEsUUFBUyxFQUFFLENBQ3ZFO0FBRUEsUUFBTSxDQUFBLEVBQUdLLGFBQWEsSUFBSUMsRUFBRUosV0FBMEIsRUFDcERLLFNBQVMsaUJBQWlCLEVBQzFCQyxLQUFLLHFDQUFxQyxFQUMxQ2hCLEtBQUssTUFBTSxFQUNYaUIsTUFBTSxlQUFlO0FBQ3ZCLE1BQUlDO0FBQ0osTUFBSWpCO0FBQ0osTUFBSWtCO0FBQ0osTUFBSUM7QUFFSixTQUNDMUIsZUFBZS9ELFlBQUEsR0FBQWtCLE9BQWVnRSxhQUFhLENBQUUsRUFFM0NRLEtBQU1DLFVBQVM7QUFDZixRQUFJLENBQUNBLEtBQUssT0FBTyxLQUFLLENBQUNBLEtBQUssT0FBTyxFQUFFQyxPQUFPO0FBQzNDLGFBQU9ULEVBQUVVLFNBQVMsRUFBRUMsT0FBTyxTQUFTO0lBQ3JDO0FBRUEsVUFBTSxDQUFDQyxJQUFJLElBQUlKLEtBQUssT0FBTyxFQUFFQztBQUU3QixRQUFJLENBQUNHLFFBQVFBLEtBQUtDLFNBQVM7QUFDMUIsYUFBT2IsRUFBRVUsU0FBUyxFQUFFQyxPQUFPLGNBQWM7SUFDMUM7QUFFQSxRQUFJQyxLQUFLRSxTQUFTO0FBQ2pCLGFBQU9kLEVBQUVVLFNBQVMsRUFBRUMsT0FBTyxrQkFBa0I7SUFDOUM7QUFFQUwsZUFBV00sS0FBS0csVUFBVSxDQUFDO0FBQzNCWCxvQkFBZ0JFLFNBQVNVO0FBQ3pCN0IsbUJBQWVxQixLQUFLLGNBQWM7QUFDbENILGNBQVVDLFNBQVNEO0VBQ3BCLENBQUMsRUFDQUUsS0FBSyxNQUFNO0FBQ1hGLGNBQVVBLFFBQVFZLEtBQUs7QUFDdkJaLGNBQVVBLFFBQVE3QyxRQUFRLDZCQUE2QixRQUFRO0FBQy9ENkMsZUFBV1Y7QUFFWCxVQUFNdUIsYUFBZ0M7TUFDckM1RCxRQUFRO01BQ1JnQixRQUFRO01BQ1JXLGVBQWU7TUFDZlYsT0FBTzFEO01BQ1BzRyxTQUFTcEI7TUFDVHFCLE1BQU1mO01BQ05yRCxTQUFBLFdBQUFqQixPQUFvQmdCLFVBQVEsUUFBQSxFQUFBaEIsT0FBUzRDLE9BQU87TUFDNUN5QjtNQUNBaUIsZ0JBQWdCbEM7TUFDaEJtQyxVQUFVO0lBQ1g7QUFDQSxRQUFJeEcsR0FBR0MsT0FBT0MsSUFBSSxZQUFZLEdBQUc7QUFDaENrRyxpQkFBV0ssU0FBUztJQUNyQjtBQUVBLFdBQU8xRixJQUFJNkMsa0JBQWtCd0MsVUFBVTtFQUN4QyxDQUFDO0FBRUo7O0FDM0VBLElBQU1NLGFBQWEsU0FBU0MsWUFBVztFQUN0Q0M7RUFDQTNFO0VBQ0E3QjtFQUNBd0U7QUFDRCxHQUtHO0FBQ0YsUUFBTTtJQUFDaUM7RUFBSyxJQUFJQztBQUNoQixRQUFNeEQscUJBQXFCUixzQkFBc0IxQyxVQUFVO0FBQzNELFFBQU11QixpQkFBaUJULG1CQUFtQmQsVUFBVTtFQUVwRCxNQUFNMkcsZUFBZUMsR0FBR0MsR0FBR0MsY0FBYztJQUN4QyxPQUFlQztJQUNmLE9BQWVDO0lBQ2YsT0FBZUM7SUFDZixPQUFlQztJQUNmLE9BQWVDO0lBQ2YsT0FBZUM7SUFDZixPQUFlQztJQUNmLE9BQWVDO0lBQ2YsT0FBZUM7SUFDZixPQUFlZixTQUFBLE1BQWdCMUIsRUFBRSxNQUFNLEdBQUE7SUFDdkMsT0FBZTBDO0lBQ2YsT0FBZUM7SUFDZixPQUFlQztJQUNmLE9BQWVDO0lBQ2YsT0FBZUM7SUFDZixPQUFlQztJQUNmLE9BQWVDO0lBQ2YsT0FBT0M7SUFFQUMsY0FBYztBQUNwQixZQUFNO1FBQ0xDLE1BQU07TUFDUCxDQUFDO0lBQ0Y7O0lBRWdCQyxnQkFBZ0I7QUFDL0IsYUFBTztJQUNSO0lBQ2dCQyxhQUFhO0FBQzVCLFlBQU1BLFdBQVc7QUFDakJ4QixhQUFPSSxZQUFZLElBQUlILEdBQUdDLEdBQUd1QixZQUFZO1FBQ3hDQyxVQUFVO01BQ1gsQ0FBQztBQUNELFlBQU1DLGlCQUFpQnhELEVBQUUsUUFBUTtBQUNqQyxZQUFNeUQsTUFBTTNJLEdBQUc0SSxLQUFLQyxPQUFPLHNCQUFzQjtRQUFDQyxNQUFNO1FBQVVoRCxNQUFBLFFBQUE3RSxPQUFjZ0IsUUFBUTtNQUFFLENBQUM7QUFDM0ZpRCxRQUFFLEtBQUssRUFDTG9CLEtBQUtPLE1BQU0sVUFBVSxRQUFRLENBQUMsRUFDOUJrQyxLQUFLO1FBQUNDLE1BQU1MO1FBQUtNLFFBQVE7TUFBUSxDQUFDLEVBQ2xDQyxTQUFTUixjQUFjO0FBQ3pCQSxxQkFBZVMsT0FBTyxHQUFHO0FBQ3pCLFlBQU1DLGVBQWVsRSxFQUFFLFFBQVEsRUFBRW9CLEtBQUtPLE1BQU0sT0FBTyxLQUFLLENBQUMsRUFBRXFDLFNBQVNSLGNBQWM7QUFDbEYzQixhQUFPSyxXQUFXLElBQUlKLEdBQUdDLEdBQUdvQyxZQUFZO1FBQ3ZDQyxPQUFPWjtNQUNSLENBQUM7QUFDRDNCLGFBQU9JLFVBQVVvQyxTQUFTSixPQUFPcEMsT0FBT0ssU0FBU21DLFFBQVE7QUFFekQsWUFBTUMsdUJBQWdEO1FBQ3JEaEgsUUFBUTtRQUNSZ0IsUUFBUTtRQUNSaUcsTUFBTTtRQUNOQyxVQUFVO1FBQ1ZDLFNBQUEsUUFBQTFJLE9BQWlCZ0IsUUFBUTtRQUN6QjJILFNBQVM7TUFDVjtBQUVBLFdBQUs3SSxJQUFJYixJQUFJc0osb0JBQW9CLEVBQUVLLEtBQU1uRSxVQUFTO0FBRWpELGNBQU1vRSxPQUFPcEUsS0FBSyxPQUFPLEVBQUVxRTtBQUMzQixZQUFJRCxLQUFLckosV0FBVyxHQUFHO0FBQ3RCMkksdUJBQWE5QyxLQUFLTyxNQUFNLFVBQVUsUUFBUSxDQUFDO1FBQzVDLE9BQU87QUFHTixnQkFBTVgsWUFBWSxJQUFJOEQsU0FBU0MsS0FBS0gsS0FBSyxDQUFDLEVBQUU1RCxTQUFTLEVBQUVnRSxTQUFTO0FBQ2hFLGdCQUFNQyxTQUFVTCxLQUFLLENBQUMsRUFBRXZILE9BQU82SCxVQUF1QkMsS0FBSyxHQUFHLEtBQUt4RCxNQUFNLE9BQU8sS0FBSztBQUNyRnVDLHVCQUFhOUMsS0FBQSxHQUFBckYsT0FDVGlGLFdBQVMsR0FBQSxFQUFBakYsT0FBSTZJLEtBQUssQ0FBQyxFQUFFckgsSUFBSSxFQUFBeEIsT0FBRzRGLE1BQU0sVUFBVSxVQUFVLENBQUMsRUFBQTVGLE9BQUdrSixNQUFNLENBQ3BFO1FBQ0Q7TUFDRCxDQUFDO0FBRURwRCxhQUFPTSxlQUFlLElBQUlMLEdBQUdDLEdBQUdxRCxlQUFlO1FBQzlDQyxTQUFTLENBQUMsV0FBVztNQUN0QixDQUFDO0FBQ0R4RCxhQUFPSSxVQUFVb0MsU0FBU0osT0FBT3BDLE9BQU9NLGFBQWFrQyxRQUFRO0FBRTdEeEMsYUFBT08sMkJBQTJCLElBQUlOLEdBQUdDLEdBQUd1RCxnQkFBZ0I7UUFDM0RDLE9BQU87UUFDUEMsYUFBYTtNQUNkLENBQUM7QUFHRDNELGFBQU9RLGNBQWMsSUFBSXZILEdBQUcySyxRQUFRQyxhQUFhO1FBQ2hEQyxVQUFVakUsTUFBTXhCLEtBQUssZUFBZTs7O1FBR3BDMEYsb0JBQW9COUssR0FBRzJLLFFBQVFJO1FBQy9CQyxlQUFlO1VBQ2RDLElBQUk7VUFDSkMsZUFBZTtZQUNkQyxTQUFTLENBQ1I7Y0FBQ3pGLE1BQU07Y0FBUzRELE9BQU87WUFBSSxHQUMzQjtjQUFDNUQsTUFBTTtjQUFVNEQsT0FBT3pDLE1BQU0sTUFBTSxJQUFJO1lBQUMsR0FDekM7Y0FBQ25CLE1BQU07Y0FBVzRELE9BQU96QyxNQUFNLE9BQU8sS0FBSztZQUFDLEdBQzVDO2NBQUNuQixNQUFNO2NBQVk0RCxPQUFPekMsTUFBTSxPQUFPLEtBQUs7WUFBQyxHQUM3QztjQUFDbkIsTUFBTTtjQUFZNEQsT0FBT3pDLE1BQU0sT0FBTyxLQUFLO1lBQUMsR0FDN0M7Y0FBQ25CLE1BQU07Y0FBVTRELE9BQU87WUFBSSxHQUM1QjtjQUFDNUQsTUFBTTtjQUFZNEQsT0FBT3pDLE1BQU0sUUFBUSxNQUFNO1lBQUMsR0FDL0M7Y0FBQ25CLE1BQU07Y0FBUzRELE9BQU96QyxNQUFNLFFBQVEsTUFBTTtZQUFDLENBQUE7WUFFN0M0RCxPQUFPO1VBQ1I7VUFDQVcsV0FBVztZQUNWQyxVQUFVO1VBQ1g7UUFDRDtNQUNELENBQUM7QUFDRHRFLGFBQU9TLHNCQUFzQixJQUFJUixHQUFHQyxHQUFHdUQsZ0JBQWdCO1FBQ3REQyxPQUFPO01BQ1IsQ0FBQztBQUNEMUQsYUFBT1Usd0JBQXdCLElBQUlULEdBQUdDLEdBQUdxRSxvQkFBb0I7UUFDNURDLFVBQVU7TUFDWCxDQUFDO0FBQ0QsWUFBTUMsZUFBZSxDQUNwQixJQUFJeEUsR0FBR0MsR0FBR3dFLFlBQVkxRSxPQUFPTywwQkFBMEI7UUFDdERnQyxPQUFPekMsTUFBTSxRQUFRLE1BQU07TUFDNUIsQ0FBQyxHQUNELElBQUlHLEdBQUdDLEdBQUd3RSxZQUFZMUUsT0FBT1EsYUFBYTtRQUN6QytCLE9BQU96QyxNQUFNLFFBQVEsTUFBTTtNQUM1QixDQUFDLEdBQ0QsSUFBSUcsR0FBR0MsR0FBR3dFLFlBQVkxRSxPQUFPUyxxQkFBcUI7UUFDakQ4QixPQUFPekMsTUFBTSxVQUFVLFFBQVE7TUFDaEMsQ0FBQyxDQUFBO0FBRUYsVUFBSXZELG9CQUFvQjtBQUN2QmtJLHFCQUFhRSxLQUNaLElBQUkxRSxHQUFHQyxHQUFHd0UsWUFBWTFFLE9BQU9VLHVCQUF1QjtVQUNuRDZCLE9BQU96QyxNQUFNLFdBQVcsVUFBVTtRQUNuQyxDQUFDLENBQ0Y7TUFDRDtBQUNBRSxhQUFPTSxhQUFhc0UsU0FBU0gsWUFBWTtBQUN6Q3pFLGFBQU9XLGNBQWMsSUFBSVYsR0FBR0MsR0FBR3VCLFlBQVk7UUFDMUNDLFVBQVU7TUFDWCxDQUFDO0FBQ0QxQixhQUFPWSxpQkFBaUIsSUFBSVgsR0FBR0MsR0FBR3FELGVBQWU7UUFDaERDLFNBQVMsQ0FBQyxXQUFXO01BQ3RCLENBQUM7QUFDRHhELGFBQU9XLFlBQVk2QixTQUFTSixPQUFPcEMsT0FBT1ksZUFBZTRCLFFBQVE7QUFDakV4QyxhQUFPVyxZQUFZNkIsU0FBU0osT0FBT3BDLE9BQU9ZLGVBQWU0QixRQUFRO0FBQ2pFeEMsYUFBT2lCLDRCQUE0QixJQUFJaEIsR0FBR0MsR0FBR29DLFlBQVk7QUFDekR0QyxhQUFPZSw0QkFBNEIsSUFBSWQsR0FBR0MsR0FBR3dFLFlBQVkxRSxPQUFPaUIseUJBQXlCO0FBQ3pGakIsYUFBT2tCLDBCQUEwQixJQUFJakIsR0FBR0MsR0FBR29DLFlBQVk7QUFDdkR0QyxhQUFPYywwQkFBMEIsSUFBSWIsR0FBR0MsR0FBR3dFLFlBQVkxRSxPQUFPa0IsdUJBQXVCO0FBQ3JGbEIsYUFBT21CLDZCQUE2QixJQUFJbEIsR0FBR0MsR0FBR29DLFlBQVk7QUFDMUR0QyxhQUFPZ0IsNkJBQTZCLElBQUlmLEdBQUdDLEdBQUd3RSxZQUFZMUUsT0FBT21CLDBCQUEwQjtBQUMzRm5CLGFBQU9hLGNBQWMsSUFBSVosR0FBR0MsR0FBRzJFLFlBQVk7UUFDMUNDLE9BQU8sQ0FBQzlFLE9BQU9JLFdBQVdKLE9BQU9XLFdBQVc7UUFDNUNvRSxRQUFRO01BQ1QsQ0FBQztBQUNEL0UsYUFBT0gsTUFBTXVDLE9BQU9wQyxPQUFPYSxZQUFZMkIsUUFBUTtBQUUvQyxhQUFPO0lBQ1I7SUFDQSxPQUFjd0MsV0FBVztBQUN4QixVQUFJQyxlQUFlMUkscUJBQXFCLElBQUk7QUFJNUN5RCxhQUFPb0IsUUFBUThELGFBQWE7UUFBQ0MsUUFBUTtNQUFLLENBQUM7QUFFM0MsWUFBTUMsYUFBYSxTQUFVQyxPQUEwQkMsU0FBc0M7QUFDNUZ0RixlQUFPdUYsWUFBWTtBQUNuQixhQUFLRCxRQUNIeEMsS0FBSyxNQUFNO0FBQ1h1QyxnQkFBTUcsT0FBT3BELE9BQ1pqRSxFQUFFLFFBQVEsRUFDUm9CLEtBQUssS0FBSyxFQUNWbEMsS0FBSyxTQUFTLGlFQUFpRSxDQUNsRjtRQUNELENBQUMsRUFDQW9JLEtBQU1DLFNBQVE7QUFDZCxjQUFJQSxPQUFPQSxJQUFJQyxTQUFTRCxJQUFJQyxNQUFNQyxNQUFNO0FBQ3ZDUCxrQkFBTUcsT0FBT3BELE9BQ1pqRSxFQUFFLFFBQVEsRUFDUm9CLEtBQUtPLE1BQU0sT0FBTyxLQUFLLElBQUk0RixJQUFJQyxNQUFNQyxJQUFJLEVBQ3pDdkksS0FBSyxTQUFTLGlFQUFpRSxDQUNsRjtVQUNELE9BQU87QUFDTmdJLGtCQUFNRyxPQUFPcEQsT0FDWmpFLEVBQUUsUUFBUSxFQUNSb0IsS0FBS08sTUFBTSxXQUFXLFNBQVMsQ0FBQyxFQUNoQ3pDLEtBQUssU0FBUyxpRUFBaUUsQ0FDbEY7VUFDRDtRQUNELENBQUMsRUFDQXdJLE9BQU8sTUFBTTtBQUNiWjtBQUNBakYsaUJBQU84RixXQUFXO0FBRWxCLGNBQUliLGlCQUFpQixHQUFHO0FBQ3ZCYyx1QkFBVyxNQUFNO0FBQ2hCQyx1QkFBU0MsT0FBTztZQUNqQixHQUFHLEdBQUk7VUFDUjtRQUNELENBQUM7QUFFRixlQUFPWDtNQUNSO0FBRUF0RixhQUFPYyx3QkFBd0JvRixTQUFTcEcsTUFBTSxlQUFlLGFBQWEsQ0FBQztBQUMzRUUsYUFBT1ksZUFBZWdFLFNBQVMsQ0FBQzVFLE9BQU9jLHVCQUF1QixDQUFDO0FBQy9EZCxhQUFPZSwwQkFBMEJtRixTQUFTcEcsTUFBTSxXQUFXLFNBQVMsQ0FBQztBQUNyRUUsYUFBT1ksZUFBZWdFLFNBQVMsQ0FBQzVFLE9BQU9lLHlCQUF5QixDQUFDO0FBRWpFLFVBQUl4RSxvQkFBb0I7QUFDdkJ5RCxlQUFPZ0IsMkJBQTJCa0YsU0FBU3BHLE1BQU0sV0FBVyxTQUFTLENBQUM7QUFDdEVFLGVBQU9ZLGVBQWVnRSxTQUFTLENBQUM1RSxPQUFPZ0IsMEJBQTBCLENBQUM7TUFDbkU7QUFFQSxXQUFLb0UsV0FDSnBGLE9BQU9jLHlCQUNQbEQsV0FDQzFDLFVBQ0EyQyxPQUFBLE1BQUEzRCxPQUNNOEYsT0FBT1Msb0JBQW9CMEYsU0FBUyxDQUFDLENBQzVDLENBQ0QsRUFBRXpILEtBQU1DLFVBQVM7QUFDaEIsYUFBS3lHLFdBQ0pwRixPQUFPZSwyQkFDUDlGLGlCQUNDQyxVQUNBN0IsWUFDQTJHLE9BQU9PLHlCQUF5QjRGLFNBQVMsR0FDekNDLE9BQU9DLFNBQVMxSCxLQUFLLE1BQU0sRUFBRTJILFVBQW9CLEVBQUUsR0FDbER0RyxPQUFPUSxZQUFzQzJGLFNBQVMsQ0FDeEQsQ0FDRCxFQUFFekgsS0FBSyxNQUFNO0FBQ1osY0FBSW5DLG9CQUFvQjtBQUN2QixpQkFBSzZJLFdBQ0pwRixPQUFPZ0IsNEJBQ1AzRSxjQUNDbkIsVUFDQTdCLFlBQ0EyRyxPQUFPVSxzQkFBc0I2RixXQUFXLENBQ3pDLENBQ0Q7VUFDRDtRQUNELENBQUM7TUFDRixDQUFDO0FBRUR2RyxhQUFPYSxZQUFZMkYsUUFBUXhHLE9BQU9XLFdBQVc7SUFDOUM7SUFDQSxPQUFPNEUsY0FBYztBQUNwQixZQUFNLElBQUlrQixNQUFNLHlCQUF5QjtJQUMxQztJQUNBLE9BQU9YLGFBQWE7QUFDbkIsWUFBTSxJQUFJVyxNQUFNLHlCQUF5QjtJQUMxQztJQUVnQkMsaUJBQWlCakwsUUFBZ0M7QUFDaEUsYUFDQyxNQUNFaUwsaUJBQWlCakwsTUFBTSxFQUV2QmtMLEtBQUssV0FBWTtBQUNqQixZQUFJbEwsV0FBVyxVQUFVO0FBQ3hCLGlCQUFPdUUsT0FBT2dGLFNBQVM7UUFDeEI7QUFDQSxlQUFPaEYsT0FBTzRHLE1BQU1DLFVBQVVILGlCQUFpQkksS0FBSyxNQUFNckwsTUFBTTtNQUNqRSxHQUFHLElBQUk7SUFFVjtFQUNEO0FBQ0F1RSxTQUFPK0csU0FBUztJQUNmLEdBQUc5RyxHQUFHQyxHQUFHQyxjQUFjNEc7RUFDeEI7QUFDQS9HLFNBQU8rRyxPQUFPL0wsT0FBTztBQUNyQmdGLFNBQU8rRyxPQUFPckssUUFBQSxLQUFBeEMsT0FBYVUsY0FBYyxFQUFBVixPQUFHNEYsTUFBTSxLQUFLLEdBQUcsQ0FBQyxFQUFBNUYsT0FBR2dCLFFBQVE7QUFDdEU4RSxTQUFPK0csT0FBTzNGLFVBQVUsQ0FDdkI7SUFBQzNGLFFBQVE7SUFBVThHLE9BQU96QyxNQUFNLE1BQU0sSUFBSTtJQUFHa0gsT0FBTyxDQUFDLFdBQVcsYUFBYTtFQUFDLEdBQzlFO0lBQUN6RSxPQUFPO0lBQU15RSxPQUFPO0VBQU0sQ0FBQTtBQUc1QixRQUFNQyxTQUFTLElBQUlqSCxPQUFPO0FBRTFCLFFBQU1rSCxnQkFBZ0IsSUFBSWpILEdBQUdDLEdBQUdpSCxjQUFjO0FBQzlDaEosSUFBRSxNQUFNLEVBQUVpRSxPQUFPOEUsY0FBYzFFLFFBQVE7QUFDdkMwRSxnQkFBY0UsV0FBVyxDQUFDSCxNQUFNLENBQUM7QUFDakMsT0FBS0MsY0FBY0csV0FBV0osTUFBTTtBQUNyQzs7QVQ3U0EsTUFBQSxHQUFLcE8sbUJBQUF5TyxTQUFRLEVBQUU1SSxLQUFNbUIsV0FBeUM7QUFDN0QsUUFBTXhHLGFBQWFOLG1CQUFtQjtBQUN0QyxNQUFJLENBQUNNLFlBQVk7QUFDaEI7RUFDRDtBQUVBd0csUUFBTXhCLEtBQUssNEJBQTRCLEVBQUVrSixHQUFHLFNBQVMsU0FBVUMsT0FBTztBQUFBLFFBQUFDO0FBQ3JFRCxVQUFNRSxlQUFlO0FBRXJCLFVBQU14TSxXQUFXakMsR0FBRzRJLEtBQUs4RixjQUFjLFFBQVF4SixFQUFFLElBQUksRUFBRTZELEtBQUssTUFBTSxDQUFDO0FBQ25FLFFBQUksQ0FBQzlHLFVBQVU7QUFDZDtJQUNEO0FBRUEsVUFBTXNILFdBQXNDckUsRUFBRXFKLE1BQU10RixNQUEyQjtBQUMvRSxVQUFNMEYsYUFBQUgsd0JBQW9CakYsU0FBU3FGLFFBQVEsSUFBSSxFQUFFQyxLQUFLLElBQUksRUFBRXpKLEtBQUssY0FBYyxFQUFFMkQsS0FBSyxJQUFJLE9BQUEsUUFBQXlGLDBCQUFBLFNBQUFBLHdCQUFLO0FBQy9GLFVBQU01SixRQUNMK0osY0FBQSxRQUFBMU4sT0FBc0JnQixRQUFRLEtBQU0wTSxjQUFjLFFBQUExTixPQUFRZ0IsUUFBUSxFQUFHUyxRQUFRLE1BQU0sS0FBSyxFQUFFQSxRQUFRLE1BQU0sR0FBRyxJQUN4RyxLQUNBaU0sVUFDQ2pNLFFBQVEsU0FBUyxFQUFFLEVBQ25CQSxRQUFRVCxVQUFVLEVBQUUsRUFDcEJTLFFBQVFULFNBQVNTLFFBQVEsTUFBTSxLQUFLLEVBQUVBLFFBQVEsTUFBTSxHQUFHLEdBQUcsRUFBRTtBQUVqRWdFLGVBQVc7TUFBQ0U7TUFBTzNFO01BQVU3QjtNQUFZd0U7SUFBSyxDQUFDO0VBQ2hELENBQUM7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogWyJpbXBvcnRfZXh0X2dhZGdldDIiLCAicmVxdWlyZSIsICJnZXRQYWdlUGVybWlzc2lvbnMiLCAid2dQYWdlTmFtZSIsICJtdyIsICJjb25maWciLCAiZ2V0IiwgInBhZ2VQZXJtaXNzaW9ucyIsICJwZXJtaXNzaW9uIiwgIl9pIiwgIl9PYmplY3QkZW50cmllcyIsICJPYmplY3QiLCAiZW50cmllcyIsICJsZW5ndGgiLCAicGFnZU5hbWUiLCAicGFnZVBlcm1pc3Npb24iLCAidXNlclJpZ2h0c01hbmFnZXJTdW1tYXJ5IiwgInZlcnNpb24iLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAiYXBpIiwgImluaXRNd0FwaSIsICJjb25jYXQiLCAiZ2V0UGVybWlzc2lvbk5hbWVzIiwgInBlcm1pc3Npb25OYW1lcyIsICJwYXRyb2xsZXIiLCAiYXV0b3Jldmlld2VyIiwgImNvbmZpcm1lZCIsICJldmVudHNwb25zb3IiLCAidHJhbnN3aWtpIiwgInRlbXBsYXRlZWRpdG9yIiwgImJvdCIsICJwZXJtaXNzaW9uTmFtZSIsICJfaTIiLCAiX09iamVjdCRlbnRyaWVzMiIsICJyaWdodCIsICJuYW1lIiwgImFzc2lnblBlcm1pc3Npb24iLCAidXNlck5hbWUiLCAic3VtbWFyeSIsICJyZXZJZCIsICJleHBpcnkiLCAicGVybWFMaW5rIiwgImZ1bGxTdW1tYXJ5IiwgInBhcmFtcyIsICJhY3Rpb24iLCAidXNlciIsICJyZXBsYWNlIiwgInJlYXNvbiIsICJhZGQiLCAicG9zdFdpdGhUb2tlbiIsICJnZXRQZXJtaXNzaW9uVGVtcGxhdGUiLCAicGVybWlzc2lvblRlbXBsYXRlcyIsICJ0ZW1wbGF0ZSIsICJfaTMiLCAiX09iamVjdCRlbnRyaWVzMyIsICJ0ZW1wbGF0ZU5hbWUiLCAiaXNzdWVUZW1wbGF0ZSIsICJ3YXRjaCIsICJwZXJtaXNzaW9uVGVtcGxhdGUiLCAidGFsa1BhZ2UiLCAiZm9ybWF0IiwgInRpdGxlIiwgImFwcGVuZHRleHQiLCAid2F0Y2hsaXN0IiwgInBvc3RXaXRoRWRpdFRva2VuIiwgInRhZ0xpbmUiLCAicXVlcnlSZXZpc2lvbnMiLCAiX3JlZiIsICJfYXN5bmNUb0dlbmVyYXRvciIsICJ0aXRsZXMiLCAicnZzZWN0aW9uIiwgImZvcm1hdHZlcnNpb24iLCAicHJvcCIsICJjdXJ0aW1lc3RhbXAiLCAicnZwcm9wIiwgIl94IiwgIl94MiIsICJhcHBseSIsICJhcmd1bWVudHMiLCAibWFya0FzRG9uZSIsICJpbmRleCIsICJjbG9zaW5nUmVtYXJrcyIsICJzZWN0aW9uTm9kZSIsICJkb2N1bWVudCIsICJnZXRFbGVtZW50QnlJZCIsICJzZWN0aW9uTnVtYmVyIiwgIiQiLCAic2libGluZ3MiLCAiZmluZCIsICJtYXRjaCIsICJiYXNldGltZXN0YW1wIiwgImNvbnRlbnQiLCAicmV2aXNpb24iLCAidGhlbiIsICJkYXRhIiwgInBhZ2VzIiwgIkRlZmVycmVkIiwgInJlamVjdCIsICJwYWdlIiwgImludmFsaWQiLCAibWlzc2luZyIsICJyZXZpc2lvbnMiLCAidGltZXN0YW1wIiwgInRyaW0iLCAiZWRpdFBhcmFtcyIsICJzZWN0aW9uIiwgInRleHQiLCAic3RhcnR0aW1lc3RhbXAiLCAibm9jcmVhdGUiLCAiYXNzZXJ0IiwgInNob3dEaWFsb2ciLCAic2hvd0RpYWxvZzIiLCAiJGJvZHkiLCAid2dVTFMiLCAid2luZG93IiwgIkRpYWxvZyIsICJPTyIsICJ1aSIsICJQcm9jZXNzRGlhbG9nIiwgImVkaXRQYW5lbCIsICJyaWdodExvZyIsICJlZGl0RmllbGRzZXQiLCAicmlnaHRzQ2hhbmdlU3VtbWFyeUlucHV0IiwgImV4cGlyeUlucHV0IiwgImNsb3NpbmdSZW1hcmtzSW5wdXQiLCAid2F0Y2hUYWxrUGFnZUNoZWNrYm94IiwgInN1Ym1pdFBhbmVsIiwgInN1Ym1pdEZpZWxkc2V0IiwgInN0YWNrTGF5b3V0IiwgIm1hcmtBc0RvbmVQcm9ncmVzc0ZpZWxkIiwgImNoYW5nZVJpZ2h0c1Byb2dyZXNzRmllbGQiLCAiaXNzdWVUZW1wbGF0ZVByb2dyZXNzRmllbGQiLCAiY2hhbmdlUmlnaHRzUHJvZ3Jlc3NMYWJlbCIsICJtYXJrQXNEb25lUHJvZ3Jlc3NMYWJlbCIsICJpc3N1ZVRlbXBsYXRlUHJvZ3Jlc3NMYWJlbCIsICJhY3Rpb25zIiwgImNvbnN0cnVjdG9yIiwgInNpemUiLCAiZ2V0Qm9keUhlaWdodCIsICJpbml0aWFsaXplIiwgIlBhbmVsTGF5b3V0IiwgImV4cGFuZGVkIiwgInJpZ2h0TG9nV2FwcGVyIiwgInVybCIsICJ1dGlsIiwgImdldFVybCIsICJ0eXBlIiwgImF0dHIiLCAiaHJlZiIsICJ0YXJnZXQiLCAiYXBwZW5kVG8iLCAiYXBwZW5kIiwgInJpZ2h0TG9nVGV4dCIsICJMYWJlbFdpZGdldCIsICJsYWJlbCIsICIkZWxlbWVudCIsICJxdWVyeUxvZ0V2ZW50c1BhcmFtcyIsICJsaXN0IiwgImxlYWN0aW9uIiwgImxldGl0bGUiLCAibGVsaW1pdCIsICJkb25lIiwgImxvZ3MiLCAibG9nZXZlbnRzIiwgIk1vcmViaXRzIiwgImRhdGUiLCAiY2FsZW5kYXIiLCAicmlnaHRzIiwgIm5ld2dyb3VwcyIsICJqb2luIiwgIkZpZWxkc2V0TGF5b3V0IiwgImNsYXNzZXMiLCAiVGV4dElucHV0V2lkZ2V0IiwgInZhbHVlIiwgInBsYWNlaG9sZGVyIiwgIndpZGdldHMiLCAiRXhwaXJ5V2lkZ2V0IiwgIiRvdmVybGF5IiwgIlJlbGF0aXZlSW5wdXRDbGFzcyIsICJTZWxlY3RXaXRoSW5wdXRXaWRnZXQiLCAicmVsYXRpdmVJbnB1dCIsICJvciIsICJkcm9wZG93bmlucHV0IiwgIm9wdGlvbnMiLCAidGV4dGlucHV0IiwgInJlcXVpcmVkIiwgIkNoZWNrYm94SW5wdXRXaWRnZXQiLCAic2VsZWN0ZWQiLCAiZm9ybUVsZW1lbnRzIiwgIkZpZWxkTGF5b3V0IiwgInB1c2giLCAiYWRkSXRlbXMiLCAiU3RhY2tMYXlvdXQiLCAiaXRlbXMiLCAicGFkZGVkIiwgIm9uU3VibWl0IiwgInByb21pc2VDb3VudCIsICJzZXRBYmlsaXRpZXMiLCAic3VibWl0IiwgImFkZFByb21pc2UiLCAiZmllbGQiLCAicHJvbWlzZSIsICJwdXNoUGVuZGluZyIsICIkZmllbGQiLCAiZmFpbCIsICJvYmoiLCAiZXJyb3IiLCAiaW5mbyIsICJhbHdheXMiLCAicG9wUGVuZGluZyIsICJzZXRUaW1lb3V0IiwgImxvY2F0aW9uIiwgInJlbG9hZCIsICJzZXRMYWJlbCIsICJnZXRWYWx1ZSIsICJOdW1iZXIiLCAicGFyc2VJbnQiLCAibmV3cmV2aWQiLCAiaXNTZWxlY3RlZCIsICJzZXRJdGVtIiwgIkVycm9yIiwgImdldEFjdGlvblByb2Nlc3MiLCAibmV4dCIsICJzdXBlciIsICJwcm90b3R5cGUiLCAiY2FsbCIsICJzdGF0aWMiLCAiZmxhZ3MiLCAiZGlhbG9nIiwgIndpbmRvd01hbmFnZXIiLCAiV2luZG93TWFuYWdlciIsICJhZGRXaW5kb3dzIiwgIm9wZW5XaW5kb3ciLCAiZ2V0Qm9keSIsICJvbiIsICJldmVudCIsICJfJGVsZW1lbnQkcGFyZW50cyRwcmUiLCAicHJldmVudERlZmF1bHQiLCAiZ2V0UGFyYW1WYWx1ZSIsICJzZWN0aW9uSWQiLCAicGFyZW50cyIsICJwcmV2Il0KfQo=

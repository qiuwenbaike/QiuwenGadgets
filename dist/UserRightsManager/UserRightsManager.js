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
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function() {
    var self = this, args = arguments;
    return new Promise(function(resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(void 0);
    });
  };
}
//! src/UserRightsManager/UserRightsManager.ts
var import_ext_gadget2 = require("ext.gadget.Util");
//! src/UserRightsManager/modules/i18n.ts
var getPermissionNames = () => {
  return {
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
};
var permissionNames = getPermissionNames();
var getPermissonName = (key) => {
  return permissionNames[key] || key;
};
var getPermissionByPage = () => {
  return {
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
};
var permissionRequested = getPermissionByPage();
var getPermissionRequested = (key) => {
  return permissionRequested[key] || key;
};
var getPermissionTemplates = () => {
  return {
    patroller: "Patrol granted",
    autoreviewer: "Autopatrol granted",
    "massmessage-sender": "MMS granted",
    templateeditor: "Template editor granted",
    transwiki: "Transwiki granted"
  };
};
var permissionTemplate = getPermissionTemplates();
var getpermissionTemplate = (key) => {
  return permissionTemplate[key] || key;
};
//! src/UserRightsManager/options.json
var userRightsManagerSummary = "（[[MediaWiki:Gadget-UserRightsManager.js|UserRightsManager]]）";
var version = "2.0";
//! src/UserRightsManager/modules/api.ts
var import_ext_gadget = require("ext.gadget.Util");
var api = (0, import_ext_gadget.initMwApi)("morebits.js; UserRightsManager/".concat(version));
//! src/UserRightsManager/modules/assignPermission.ts
var assignPermission = (userName, permission, summary, revId, expiry) => {
  const permaLink = "[[Special:PermaLink/".concat(revId, "#User:").concat(userName, "|权限申请]]");
  let fullSummary = "+".concat(getPermissonName(permission), "；").concat(permaLink);
  if (summary !== "") {
    fullSummary += "；".concat(summary);
  }
  fullSummary += userRightsManagerSummary;
  const params = {
    action: "userrights",
    user: userName.replace(/ /g, "_"),
    reason: fullSummary,
    // @ts-expect-error TS2322
    add: permission,
    expiry: expiry === "" ? "infinity" : expiry
  };
  return api.postWithToken("userrights", params);
};
//! src/UserRightsManager/modules/issueTemplate.ts
var issueTemplate = (userName, permission, watch) => {
  const talkPage = "User talk:".concat(userName.replace(/ /g, "_"));
  const params = {
    action: "edit",
    format: "json",
    title: talkPage,
    appendtext: "\n\n{{".concat("subst:", getpermissionTemplate(permission), "}}}"),
    summary: "根据共识授予".concat(getPermissonName(permission)).concat(userRightsManagerSummary),
    watchlist: watch ? "watch" : "unwatch"
  };
  return api.postWithEditToken(params);
};
//! src/UserRightsManager/modules/markAsDone.ts
var markAsDone = (userName, index, closingRemarks) => {
  const {
    wgPageName
  } = mw.config.get();
  const sectionSelector = "#".concat(CSS.escape("User:".concat(userName.replace(/"/g, ".22").replace(/ /g, "_")))).concat(index !== null && index !== void 0 ? index : "");
  const sectionNode = document.querySelector(sectionSelector);
  if (!sectionNode) {
    return;
  }
  const [, sectionNumber] = $(sectionNode).siblings(".mw-editsection").find("a:not(.mw-editsection-visualeditor)").prop("href").match(/section=(\d+)/);
  let basetimestamp;
  let curtimestamp;
  let content;
  const queryParams = {
    action: "query",
    format: "json",
    formatversion: "2",
    prop: "revisions",
    titles: [wgPageName],
    curtimestamp: true,
    rvprop: ["content", "timestamp"],
    rvsection: "".concat(sectionNumber)
  };
  return api.get(queryParams).then((data) => {
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
    curtimestamp = data["curtimestamp"];
    [{
      basetimestamp,
      content
    }] = page.revisions;
    content = content.trim().replace(/:{{status(\|.*?)?}}/i, ":{{Status|+}}");
    content += closingRemarks;
  }).then(() => {
    const editParams = {
      action: "edit",
      format: "json",
      formatversion: "2",
      title: wgPageName,
      nocreate: true,
      section: "".concat(sectionNumber),
      starttimestamp: curtimestamp,
      summary: "/* User:".concat(userName, " */ 完成").concat(userRightsManagerSummary),
      text: content,
      basetimestamp
    };
    if (mw.config.get("wgUserName")) {
      editParams.assert = "user";
    }
    return api.postWithEditToken(editParams);
  });
};
//! src/UserRightsManager/modules/showDialog.js
var showDialog = ({
  userName,
  index,
  permission,
  $body
}) => {
  const Dialog = function(config) {
    Dialog.super.call(this, config);
  };
  OO.inheritClass(Dialog, OO.ui.ProcessDialog);
  Dialog.static.name = "user-rights-manager";
  Dialog.static.title = "授予".concat(getPermissonName(permission)).concat(window.wgULS("给", "給")).concat(userName);
  Dialog.static.actions = [{
    action: "submit",
    label: window.wgULS("授权", "授權"),
    flags: ["primary", "progressive"]
  }, {
    label: "取消",
    flags: ["safe", "close"]
  }];
  Dialog.prototype.getApiManager = function() {
    return this.apiManager;
  };
  Dialog.prototype.getBodyHeight = () => {
    return 255;
  };
  Dialog.prototype.initialize = /* @__PURE__ */ _asyncToGenerator(function* () {
    Dialog.super.prototype.initialize.call(this);
    this.editFieldset = new OO.ui.FieldsetLayout({
      classes: ["container"]
    });
    this.editPanel = new OO.ui.PanelLayout({
      expanded: false
    });
    this.editPanel.$element.append(this.editFieldset.$element);
    const rightLogWapper = $("<span>");
    const url = mw.util.getUrl("Special:Log/rights", {
      type: "rights",
      page: "User:".concat(userName)
    });
    $("<a>").text("最近权限日志").attr({
      href: url,
      target: "_blank"
    }).appendTo(rightLogWapper);
    rightLogWapper.append("：");
    const rightLogText = $("<span>").text("获取中").appendTo(rightLogWapper);
    this.rightLog = new OO.ui.LabelWidget({
      label: rightLogWapper
    });
    const params = {
      action: "query",
      leaction: "rights/rights",
      lelimit: 1,
      letitle: "User:".concat(userName),
      list: "logevents"
    };
    const {
      query
    } = yield api.get(params);
    const logs = query.logevents;
    if (logs.length === 0) {
      rightLogText.text("没有任何日志");
    } else {
      const timestamp = new Morebits.date(logs[0].timestamp).calendar();
      const rights = logs[0].params.newgroups.join("、") || "（无）";
      rightLogText.text("".concat(timestamp, " ").concat(logs[0].user, "将用户组改为").concat(rights));
    }
    this.rightsChangeSummaryInput = new OO.ui.TextInputWidget({
      value: "",
      placeholder: "可留空"
    });
    this.expiryInput = new mw.widgets.ExpiryWidget({
      $overlay: $body.find(".oo-ui-window"),
      RelativeInputClass: mw.widgets.SelectWithInputWidget,
      relativeInput: {
        or: true,
        dropdowninput: {
          options: [{
            data: "1 day",
            label: "1天"
          }, {
            data: "1 week",
            label: "1周"
          }, {
            data: "1 month",
            label: "1个月"
          }, {
            data: "3 months",
            label: "3个月"
          }, {
            data: "6 months",
            label: "6个月"
          }, {
            data: "1 year",
            label: "1年"
          }, {
            data: "infinite",
            label: "无限期"
          }, {
            data: "other",
            label: "其他时间"
          }],
          value: "infinite"
        },
        textinput: {
          required: true
        }
      }
    });
    this.closingRemarksInput = new OO.ui.TextInputWidget({
      value: "{{done}}。--~~".concat("~~")
    });
    this.watchTalkPageCheckbox = new OO.ui.CheckboxInputWidget({
      selected: false
    });
    this.editFieldset.addItems(this.rightLog);
    const formElements = [new OO.ui.FieldLayout(this.rightsChangeSummaryInput, {
      label: window.wgULS("授权原因", "授权原因")
    }), new OO.ui.FieldLayout(this.expiryInput, {
      label: window.wgULS("结束时间", "結束時間")
    }), new OO.ui.FieldLayout(this.closingRemarksInput, {
      label: window.wgULS("关闭请求留言", "關閉請求留言")
    })];
    if (getPermissionRequested(permission)) {
      formElements[formElements.length] = new OO.ui.FieldLayout(this.watchTalkPageCheckbox, {
        label: window.wgULS("监视用户讨论页", "監視用戶討論頁")
      });
    }
    this.editFieldset.addItems(formElements);
    this.submitPanel = new OO.ui.PanelLayout({
      $: this.$,
      expanded: false
    });
    this.submitFieldset = new OO.ui.FieldsetLayout({
      classes: ["container"]
    });
    this.submitPanel.$element.append(this.submitFieldset.$element);
    this.changeRightsProgressLabel = new OO.ui.LabelWidget();
    this.changeRightsProgressField = new OO.ui.FieldLayout(this.changeRightsProgressLabel);
    this.markAsDoneProgressLabel = new OO.ui.LabelWidget();
    this.markAsDoneProgressField = new OO.ui.FieldLayout(this.markAsDoneProgressLabel);
    this.issueTemplateProgressLabel = new OO.ui.LabelWidget();
    this.issueTemplateProgressField = new OO.ui.FieldLayout(this.issueTemplateProgressLabel);
    this.stackLayout = new OO.ui.StackLayout({
      items: [this.editPanel, this.submitPanel],
      padded: true
    });
    this.$body.append(this.stackLayout.$element);
  });
  Dialog.prototype.onSubmit = function() {
    const self = this;
    let promiseCount = getPermissionRequested(permission) ? 3 : 2;
    self.actions.setAbilities({
      submit: false
    });
    const addPromise = ({
      $field
    }, promise) => {
      self.pushPending();
      promise.done(() => {
        $field.append($("<span>").text("完成！").prop("style", "position: relative; top: .5em; color: #009000; font-weight: bold;"));
      }).fail((obj) => {
        if (obj && obj.error && obj.error.info) {
          $field.append($("<span>").text("错误：".concat(obj.error.info)).prop("style", "position: relative; top: .5em; color: #c00; font-weight: bold;"));
        } else {
          $field.append($("<span>").text("发生未知错误。").prop("style", "position: relative; top: .5em; color: #c00; font-weight: bold;"));
        }
      }).always(() => {
        promiseCount--;
        self.popPending();
        if (promiseCount === 0) {
          setTimeout(() => {
            location.reload(true);
          }, 1e3);
        }
      });
      return promise;
    };
    self.markAsDoneProgressField.setLabel("标记请求为已完成...");
    self.submitFieldset.addItems([self.markAsDoneProgressField]);
    self.changeRightsProgressField.setLabel("授予权限...");
    self.submitFieldset.addItems([self.changeRightsProgressField]);
    if (getPermissionRequested(permission)) {
      self.issueTemplateProgressField.setLabel("发送通知...");
      self.submitFieldset.addItems([self.issueTemplateProgressField]);
    }
    addPromise(self.markAsDoneProgressField, markAsDone(userName, index, "\n:".concat(this.closingRemarksInput.getValue()))).then(({
      edit
    }) => {
      addPromise(self.changeRightsProgressField, assignPermission(userName, permission, this.rightsChangeSummaryInput.getValue(), edit.newrevid, this.expiryInput.getValue())).then(() => {
        if (getPermissionRequested(permission)) {
          addPromise(self.issueTemplateProgressField, issueTemplate(userName, permission, this.watchTalkPageCheckbox.isSelected()));
        }
      });
    });
    self.stackLayout.setItem(self.submitPanel);
  };
  Dialog.prototype.getActionProcess = function(action) {
    return Dialog.super.prototype.getActionProcess.call(this, action).next(function() {
      if (action === "submit") {
        return this.onSubmit();
      }
      return Dialog.super.prototype.getActionProcess.call(this, action);
    }, this);
  };
  const dialog = new Dialog({
    size: "medium"
  });
  const windowManager = new OO.ui.WindowManager();
  $body.append(windowManager.$element);
  windowManager.addWindows([dialog]);
  void windowManager.openWindow(dialog);
};
//! src/UserRightsManager/UserRightsManager.ts
void (0, import_ext_gadget2.getBody)().then(($body) => {
  const {
    wgPageName
  } = mw.config.get();
  if (!getPermissionRequested(wgPageName) || getPermissionRequested(wgPageName) === wgPageName) {
    return;
  }
  const permission = getPermissionRequested(wgPageName);
  if (permission === "AutoWikiBrowser") {
    return;
  }
  $body.find(".perm-assign-permissions a").on("click", (event) => {
    var _mw$util$getParamValu, _$element$parents$pre;
    event.preventDefault();
    const $element = $(event.target);
    const userName = (_mw$util$getParamValu = mw.util.getParamValue("user", $element.attr("href"))) !== null && _mw$util$getParamValu !== void 0 ? _mw$util$getParamValu : "";
    const sectionId = (_$element$parents$pre = $element.parents("dl").prev("h4").find(".mw-headline").attr("id")) !== null && _$element$parents$pre !== void 0 ? _$element$parents$pre : "";
    const index = sectionId === "User:".concat(userName) || sectionId === "User:".concat(userName).replace(/"/g, ".22").replace(/ /g, "_") ? "" : sectionId.replace("User:", "").replace(userName, "").replace(userName.replace(/"/g, ".22").replace(/ /g, "_"), "");
    showDialog({
      index,
      userName,
      permission,
      $body
    });
  });
});

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1VzZXJSaWdodHNNYW5hZ2VyL1VzZXJSaWdodHNNYW5hZ2VyLnRzIiwgInNyYy9Vc2VyUmlnaHRzTWFuYWdlci9tb2R1bGVzL2kxOG4udHMiLCAic3JjL1VzZXJSaWdodHNNYW5hZ2VyL29wdGlvbnMuanNvbiIsICJzcmMvVXNlclJpZ2h0c01hbmFnZXIvbW9kdWxlcy9hcGkudHMiLCAic3JjL1VzZXJSaWdodHNNYW5hZ2VyL21vZHVsZXMvYXNzaWduUGVybWlzc2lvbi50cyIsICJzcmMvVXNlclJpZ2h0c01hbmFnZXIvbW9kdWxlcy9pc3N1ZVRlbXBsYXRlLnRzIiwgInNyYy9Vc2VyUmlnaHRzTWFuYWdlci9tb2R1bGVzL21hcmtBc0RvbmUudHMiLCAic3JjL1VzZXJSaWdodHNNYW5hZ2VyL21vZHVsZXMvc2hvd0RpYWxvZy5qcyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHtnZXRCb2R5fSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuaW1wb3J0IHtnZXRQZXJtaXNzaW9uUmVxdWVzdGVkfSBmcm9tICcuL21vZHVsZXMvaTE4bic7XG5pbXBvcnQge3Nob3dEaWFsb2d9IGZyb20gJy4vbW9kdWxlcy9zaG93RGlhbG9nLmpzJztcblxudm9pZCBnZXRCb2R5KCkudGhlbigoJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KTogdm9pZCA9PiB7XG5cdGNvbnN0IHt3Z1BhZ2VOYW1lfSA9IG13LmNvbmZpZy5nZXQoKTtcblxuXHRpZiAoIWdldFBlcm1pc3Npb25SZXF1ZXN0ZWQod2dQYWdlTmFtZSkgfHwgZ2V0UGVybWlzc2lvblJlcXVlc3RlZCh3Z1BhZ2VOYW1lKSA9PT0gd2dQYWdlTmFtZSkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IHBlcm1pc3Npb246IHN0cmluZyB8IHVuZGVmaW5lZCA9IGdldFBlcm1pc3Npb25SZXF1ZXN0ZWQod2dQYWdlTmFtZSk7XG5cblx0aWYgKHBlcm1pc3Npb24gPT09ICdBdXRvV2lraUJyb3dzZXInKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0JGJvZHkuZmluZCgnLnBlcm0tYXNzaWduLXBlcm1pc3Npb25zIGEnKS5vbignY2xpY2snLCAoZXZlbnQ6IEpRdWVyeS5DbGlja0V2ZW50KTogdm9pZCA9PiB7XG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuXHRcdGNvbnN0ICRlbGVtZW50OiBKUXVlcnk8SFRNTEFuY2hvckVsZW1lbnQ+ID0gJChldmVudC50YXJnZXQgYXMgSFRNTEFuY2hvckVsZW1lbnQpO1xuXG5cdFx0Y29uc3QgdXNlck5hbWU6IHN0cmluZyA9IG13LnV0aWwuZ2V0UGFyYW1WYWx1ZSgndXNlcicsICRlbGVtZW50LmF0dHIoJ2hyZWYnKSkgPz8gJyc7XG5cdFx0Y29uc3Qgc2VjdGlvbklkOiBzdHJpbmcgPSAkZWxlbWVudC5wYXJlbnRzKCdkbCcpLnByZXYoJ2g0JykuZmluZCgnLm13LWhlYWRsaW5lJykuYXR0cignaWQnKSA/PyAnJztcblx0XHRjb25zdCBpbmRleDogc3RyaW5nID1cblx0XHRcdHNlY3Rpb25JZCA9PT0gYFVzZXI6JHt1c2VyTmFtZX1gIHx8IHNlY3Rpb25JZCA9PT0gYFVzZXI6JHt1c2VyTmFtZX1gLnJlcGxhY2UoL1wiL2csICcuMjInKS5yZXBsYWNlKC8gL2csICdfJylcblx0XHRcdFx0PyAnJ1xuXHRcdFx0XHQ6IHNlY3Rpb25JZFxuXHRcdFx0XHRcdFx0LnJlcGxhY2UoJ1VzZXI6JywgJycpXG5cdFx0XHRcdFx0XHQucmVwbGFjZSh1c2VyTmFtZSwgJycpXG5cdFx0XHRcdFx0XHQucmVwbGFjZSh1c2VyTmFtZS5yZXBsYWNlKC9cIi9nLCAnLjIyJykucmVwbGFjZSgvIC9nLCAnXycpLCAnJyk7XG5cblx0XHRzaG93RGlhbG9nKHtcblx0XHRcdGluZGV4LFxuXHRcdFx0dXNlck5hbWUsXG5cdFx0XHRwZXJtaXNzaW9uLFxuXHRcdFx0JGJvZHksXG5cdFx0fSk7XG5cdH0pO1xufSk7XG4iLCAiaW1wb3J0IHR5cGUge1VzZXJSaWdodHN9IGZyb20gJ34vTWFya1JpZ2h0cy9tb2R1bGVzL3R5cGVzJztcblxuY29uc3QgZ2V0UGVybWlzc2lvbk5hbWVzID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdHBhdHJvbGxlcjogJ+W3oeafpeWRmCcsXG5cdFx0YXV0b3Jldmlld2VyOiAn5beh5p+l6LGB5YWN6ICFJyxcblx0XHRjb25maXJtZWQ6ICfnoa7orqTnlKjmiLcnLFxuXHRcdCdtYXNzbWVzc2FnZS1zZW5kZXInOiAn5aSn6YeP5raI5oGv5Y+R6YCB6ICFJyxcblx0XHRldmVudHNwb25zb3I6ICfmtLvliqjnu4Tnu4fogIUnLFxuXHRcdHRyYW5zd2lraTogJ+WvvOWFpeiAhScsXG5cdFx0dGVtcGxhdGVlZGl0b3I6ICfmqKHmnb/nvJbovpHlkZgnLFxuXHRcdGJvdDogJ+acuuWZqOS6uicsXG5cdFx0J3JucnN2ZXJpZnktZXhlbXB0JzogJ+WunuWQjeWItumqjOivgeixgeWFjScsXG5cdH0gYXMgY29uc3Qgc2F0aXNmaWVzIFBhcnRpYWw8UmVjb3JkPFVzZXJSaWdodHMsIHN0cmluZz4+O1xufTtcblxuY29uc3QgcGVybWlzc2lvbk5hbWVzID0gZ2V0UGVybWlzc2lvbk5hbWVzKCk7XG5cbmNvbnN0IGdldFBlcm1pc3Nvbk5hbWU6IEdldE1lc3NhZ2VzPHR5cGVvZiBwZXJtaXNzaW9uTmFtZXM+ID0gKGtleSkgPT4ge1xuXHRyZXR1cm4gcGVybWlzc2lvbk5hbWVzW2tleV0gfHwga2V5O1xufTtcblxuY29uc3QgZ2V0UGVybWlzc2lvbkJ5UGFnZSA9ICgpID0+IHtcblx0cmV0dXJuIHtcblx0XHQnUWl1d2VuX3RhbGs65p2D6ZmQ55Sz6K+3L+eUs+ivt+W3oeafpeWbnumAgOadgyc6ICdwYXRyb2xsZXInLFxuXHRcdCdRaXV3ZW5fdGFsazrmnYPpmZDnlLPor7cv55Sz6K+35beh5p+l6LGB5YWN5p2DJzogJ2F1dG9yZXZpZXdlcicsXG5cdFx0J1FpdXdlbl90YWxrOuadg+mZkOeUs+ivty/nlLPor7fnoa7orqTnlKjmiLfmnYMnOiAnY29uZmlybWVkJyxcblx0XHQnUWl1d2VuX3RhbGs65p2D6ZmQ55Sz6K+3L+eUs+ivt+Wkp+mHj+a2iOaBr+WPkemAgeadgyc6ICdtYXNzbWVzc2FnZS1zZW5kZXInLFxuXHRcdCdRaXV3ZW5fdGFsazrmnYPpmZDnlLPor7cv55Sz6K+35rS75Yqo57uE57uH5p2DJzogJ2V2ZW50c3BvbnNvcicsXG5cdFx0J1FpdXdlbl90YWxrOuadg+mZkOeUs+ivty/nlLPor7flr7zlhaXmnYMnOiAndHJhbnN3aWtpJyxcblx0XHQnUWl1d2VuX3RhbGs65p2D6ZmQ55Sz6K+3L+eUs+ivt+aooeadv+e8lui+keadgyc6ICd0ZW1wbGF0ZWVkaXRvcicsXG5cdFx0J1FpdXdlbl90YWxrOuadg+mZkOeUs+ivty/nlLPor7fmnLrlmajkurrmnYPpmZAnOiAnYm90Jyxcblx0XHQnUWl1d2VuX3RhbGs65p2D6ZmQ55Sz6K+3L+eUs+ivt+WunuWQjeWItumqjOivgeixgeWFjSc6ICdybnJzdmVyaWZ5LWV4ZW1wdCcsXG5cdH0gYXMgUmVjb3JkPHN0cmluZywgVXNlclJpZ2h0cz47XG59O1xuXG5jb25zdCBwZXJtaXNzaW9uUmVxdWVzdGVkID0gZ2V0UGVybWlzc2lvbkJ5UGFnZSgpO1xuXG5jb25zdCBnZXRQZXJtaXNzaW9uUmVxdWVzdGVkOiBHZXRNZXNzYWdlczx0eXBlb2YgcGVybWlzc2lvblJlcXVlc3RlZD4gPSAoa2V5KSA9PiB7XG5cdHJldHVybiBwZXJtaXNzaW9uUmVxdWVzdGVkW2tleV0gfHwga2V5O1xufTtcblxuY29uc3QgZ2V0UGVybWlzc2lvblRlbXBsYXRlcyA9ICgpID0+IHtcblx0cmV0dXJuIHtcblx0XHRwYXRyb2xsZXI6ICdQYXRyb2wgZ3JhbnRlZCcsXG5cdFx0YXV0b3Jldmlld2VyOiAnQXV0b3BhdHJvbCBncmFudGVkJyxcblx0XHQnbWFzc21lc3NhZ2Utc2VuZGVyJzogJ01NUyBncmFudGVkJyxcblx0XHR0ZW1wbGF0ZWVkaXRvcjogJ1RlbXBsYXRlIGVkaXRvciBncmFudGVkJyxcblx0XHR0cmFuc3dpa2k6ICdUcmFuc3dpa2kgZ3JhbnRlZCcsXG5cdH0gYXMgY29uc3Qgc2F0aXNmaWVzIFBhcnRpYWw8UmVjb3JkPFVzZXJSaWdodHMsIHN0cmluZz4+O1xufTtcblxuY29uc3QgcGVybWlzc2lvblRlbXBsYXRlID0gZ2V0UGVybWlzc2lvblRlbXBsYXRlcygpO1xuXG5jb25zdCBnZXRwZXJtaXNzaW9uVGVtcGxhdGU6IEdldE1lc3NhZ2VzPHR5cGVvZiBwZXJtaXNzaW9uVGVtcGxhdGU+ID0gKGtleSkgPT4ge1xuXHRyZXR1cm4gcGVybWlzc2lvblRlbXBsYXRlW2tleV0gfHwga2V5O1xufTtcblxuZXhwb3J0IHtnZXRQZXJtaXNzb25OYW1lLCBnZXRQZXJtaXNzaW9uUmVxdWVzdGVkLCBnZXRwZXJtaXNzaW9uVGVtcGxhdGUsIHBlcm1pc3Npb25OYW1lc307XG4iLCAie1xuXHRcInVzZXJSaWdodHNNYW5hZ2VyU3VtbWFyeVwiOiBcIu+8iFtbTWVkaWFXaWtpOkdhZGdldC1Vc2VyUmlnaHRzTWFuYWdlci5qc3xVc2VyUmlnaHRzTWFuYWdlcl1d77yJXCIsXG5cdFwidmVyc2lvblwiOiBcIjIuMFwiXG59XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtpbml0TXdBcGl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmNvbnN0IGFwaTogbXcuQXBpID0gaW5pdE13QXBpKGBtb3JlYml0cy5qczsgVXNlclJpZ2h0c01hbmFnZXIvJHtPUFRJT05TLnZlcnNpb259YCk7XG5cbmV4cG9ydCB7YXBpfTtcbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge2dldFBlcm1pc3Nvbk5hbWUsIHBlcm1pc3Npb25OYW1lc30gZnJvbSAnLi9pMThuJztcbmltcG9ydCB7YXBpfSBmcm9tICcuL2FwaSc7XG5cbmNvbnN0IGFzc2lnblBlcm1pc3Npb24gPSAoXG5cdHVzZXJOYW1lOiBzdHJpbmcsXG5cdHBlcm1pc3Npb246IGtleW9mIHR5cGVvZiBwZXJtaXNzaW9uTmFtZXMsXG5cdHN1bW1hcnk6IHN0cmluZyxcblx0cmV2SWQ6IG51bWJlcixcblx0ZXhwaXJ5OiBzdHJpbmdcbikgPT4ge1xuXHRjb25zdCBwZXJtYUxpbmsgPSBgW1tTcGVjaWFsOlBlcm1hTGluay8ke3JldklkfSNVc2VyOiR7dXNlck5hbWV9fOadg+mZkOeUs+ivt11dYDtcblx0bGV0IGZ1bGxTdW1tYXJ5ID0gYCske2dldFBlcm1pc3Nvbk5hbWUocGVybWlzc2lvbil977ybJHtwZXJtYUxpbmt9YDtcblx0aWYgKHN1bW1hcnkgIT09ICcnKSB7XG5cdFx0ZnVsbFN1bW1hcnkgKz0gYO+8myR7c3VtbWFyeX1gO1xuXHR9XG5cdGZ1bGxTdW1tYXJ5ICs9IE9QVElPTlMudXNlclJpZ2h0c01hbmFnZXJTdW1tYXJ5O1xuXHRjb25zdCBwYXJhbXM6IEFwaVVzZXJyaWdodHNQYXJhbXMgPSB7XG5cdFx0YWN0aW9uOiAndXNlcnJpZ2h0cycsXG5cdFx0dXNlcjogdXNlck5hbWUucmVwbGFjZSgvIC9nLCAnXycpLFxuXHRcdHJlYXNvbjogZnVsbFN1bW1hcnksXG5cdFx0Ly8gQHRzLWV4cGVjdC1lcnJvciBUUzIzMjJcblx0XHRhZGQ6IHBlcm1pc3Npb24sXG5cdFx0ZXhwaXJ5OiBleHBpcnkgPT09ICcnID8gJ2luZmluaXR5JyA6IGV4cGlyeSxcblx0fTtcblx0cmV0dXJuIGFwaS5wb3N0V2l0aFRva2VuKCd1c2VycmlnaHRzJywgcGFyYW1zKTtcbn07XG5cbmV4cG9ydCB7YXNzaWduUGVybWlzc2lvbn07XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtnZXRQZXJtaXNzb25OYW1lLCBnZXRwZXJtaXNzaW9uVGVtcGxhdGUsIHBlcm1pc3Npb25OYW1lc30gZnJvbSAnLi9pMThuJztcbmltcG9ydCB7YXBpfSBmcm9tICcuL2FwaSc7XG5cbmNvbnN0IGlzc3VlVGVtcGxhdGUgPSAoXG5cdHVzZXJOYW1lOiBzdHJpbmcsXG5cdHBlcm1pc3Npb246IFBhcnRpYWw8a2V5b2YgdHlwZW9mIHBlcm1pc3Npb25OYW1lcz4sXG5cdHdhdGNoOiBib29sZWFuIHwgJ3dhdGNoJyB8ICd1bndhdGNoJ1xuKSA9PiB7XG5cdGNvbnN0IHRhbGtQYWdlID0gYFVzZXIgdGFsazoke3VzZXJOYW1lLnJlcGxhY2UoLyAvZywgJ18nKX1gO1xuXHRjb25zdCBwYXJhbXM6IEFwaUVkaXRQYWdlUGFyYW1zID0ge1xuXHRcdGFjdGlvbjogJ2VkaXQnLFxuXHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdHRpdGxlOiB0YWxrUGFnZSxcblx0XHRhcHBlbmR0ZXh0OiAnXFxuXFxue3snLmNvbmNhdChcblx0XHRcdCdzdWJzdDonLFxuXHRcdFx0Z2V0cGVybWlzc2lvblRlbXBsYXRlKFxuXHRcdFx0XHRwZXJtaXNzaW9uIGFzICd0ZW1wbGF0ZWVkaXRvcicgfCAndHJhbnN3aWtpJyB8ICdwYXRyb2xsZXInIHwgJ2F1dG9yZXZpZXdlcicgfCAnbWFzc21lc3NhZ2Utc2VuZGVyJ1xuXHRcdFx0KSxcblx0XHRcdCd9fX0nXG5cdFx0KSxcblx0XHRzdW1tYXJ5OiBg5qC55o2u5YWx6K+G5o6I5LqIJHtnZXRQZXJtaXNzb25OYW1lKHBlcm1pc3Npb24pfSR7T1BUSU9OUy51c2VyUmlnaHRzTWFuYWdlclN1bW1hcnl9YCxcblx0XHR3YXRjaGxpc3Q6IHdhdGNoID8gJ3dhdGNoJyA6ICd1bndhdGNoJyxcblx0fTtcblx0cmV0dXJuIGFwaS5wb3N0V2l0aEVkaXRUb2tlbihwYXJhbXMpO1xufTtcblxuZXhwb3J0IHtpc3N1ZVRlbXBsYXRlfTtcbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge2FwaX0gZnJvbSAnLi9hcGknO1xuXG5jb25zdCBtYXJrQXNEb25lID0gKHVzZXJOYW1lOiBzdHJpbmcsIGluZGV4OiBzdHJpbmcsIGNsb3NpbmdSZW1hcmtzOiBzdHJpbmcpID0+IHtcblx0Y29uc3Qge3dnUGFnZU5hbWV9ID0gbXcuY29uZmlnLmdldCgpO1xuXHRjb25zdCBzZWN0aW9uU2VsZWN0b3IgPSBgIyR7Q1NTLmVzY2FwZShgVXNlcjoke3VzZXJOYW1lLnJlcGxhY2UoL1wiL2csICcuMjInKS5yZXBsYWNlKC8gL2csICdfJyl9YCl9JHtpbmRleCA/PyAnJ31gO1xuXHRjb25zdCBzZWN0aW9uTm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VjdGlvblNlbGVjdG9yKTtcblx0aWYgKCFzZWN0aW9uTm9kZSkge1xuXHRcdHJldHVybjtcblx0fVxuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVuc2FmZS1hc3NpZ25tZW50LCBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW5zYWZlLWNhbGxcblx0Y29uc3QgWywgc2VjdGlvbk51bWJlcl0gPSAkKHNlY3Rpb25Ob2RlIGFzIEhUTUxFbGVtZW50KVxuXHRcdC5zaWJsaW5ncygnLm13LWVkaXRzZWN0aW9uJylcblx0XHQuZmluZCgnYTpub3QoLm13LWVkaXRzZWN0aW9uLXZpc3VhbGVkaXRvciknKVxuXHRcdC5wcm9wKCdocmVmJylcblx0XHQubWF0Y2goL3NlY3Rpb249KFxcZCspLyk7XG5cdGxldCBiYXNldGltZXN0YW1wOiBzdHJpbmc7XG5cdGxldCBjdXJ0aW1lc3RhbXA6IHN0cmluZztcblx0bGV0IGNvbnRlbnQ6IHN0cmluZztcblxuXHRjb25zdCBxdWVyeVBhcmFtczogQXBpUXVlcnlSZXZpc2lvbnNQYXJhbXMgPSB7XG5cdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRwcm9wOiAncmV2aXNpb25zJyxcblx0XHR0aXRsZXM6IFt3Z1BhZ2VOYW1lXSxcblx0XHRjdXJ0aW1lc3RhbXA6IHRydWUsXG5cdFx0cnZwcm9wOiBbJ2NvbnRlbnQnLCAndGltZXN0YW1wJ10sXG5cdFx0cnZzZWN0aW9uOiBgJHtzZWN0aW9uTnVtYmVyfWAsXG5cdH07XG5cblx0cmV0dXJuIChcblx0XHRhcGlcblx0XHRcdC5nZXQocXVlcnlQYXJhbXMpXG5cdFx0XHQvLyBAdHMtZXhwZWN0LWVycm9yIFRTNzAzMFxuXHRcdFx0LnRoZW4oKGRhdGEpID0+IHtcblx0XHRcdFx0aWYgKCFkYXRhWydxdWVyeSddIHx8ICFkYXRhWydxdWVyeSddLnBhZ2VzKSB7XG5cdFx0XHRcdFx0cmV0dXJuICQuRGVmZXJyZWQoKS5yZWplY3QoJ3Vua25vd24nKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW5zYWZlLWFzc2lnbm1lbnRcblx0XHRcdFx0Y29uc3QgW3BhZ2VdID0gZGF0YVsncXVlcnknXS5wYWdlcztcblxuXHRcdFx0XHRpZiAoIXBhZ2UgfHwgcGFnZS5pbnZhbGlkKSB7XG5cdFx0XHRcdFx0cmV0dXJuICQuRGVmZXJyZWQoKS5yZWplY3QoJ2ludmFsaWR0aXRsZScpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKHBhZ2UubWlzc2luZykge1xuXHRcdFx0XHRcdHJldHVybiAkLkRlZmVycmVkKCkucmVqZWN0KCdub2NyZWF0ZS1taXNzaW5nJyk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRjdXJ0aW1lc3RhbXAgPSBkYXRhWydjdXJ0aW1lc3RhbXAnXSBhcyBzdHJpbmc7XG5cdFx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW5zYWZlLWFzc2lnbm1lbnRcblx0XHRcdFx0W3tiYXNldGltZXN0YW1wLCBjb250ZW50fV0gPSBwYWdlLnJldmlzaW9ucztcblx0XHRcdFx0Y29udGVudCA9IGNvbnRlbnQudHJpbSgpLnJlcGxhY2UoLzp7e3N0YXR1cyhcXHwuKj8pP319L2ksICc6e3tTdGF0dXN8K319Jyk7XG5cdFx0XHRcdGNvbnRlbnQgKz0gY2xvc2luZ1JlbWFya3M7XG5cdFx0XHR9KVxuXHRcdFx0LnRoZW4oKCkgPT4ge1xuXHRcdFx0XHRjb25zdCBlZGl0UGFyYW1zOiBBcGlFZGl0UGFnZVBhcmFtcyA9IHtcblx0XHRcdFx0XHRhY3Rpb246ICdlZGl0Jyxcblx0XHRcdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdFx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0XHRcdFx0dGl0bGU6IHdnUGFnZU5hbWUsXG5cdFx0XHRcdFx0bm9jcmVhdGU6IHRydWUsXG5cdFx0XHRcdFx0c2VjdGlvbjogYCR7c2VjdGlvbk51bWJlcn1gLFxuXHRcdFx0XHRcdHN0YXJ0dGltZXN0YW1wOiBjdXJ0aW1lc3RhbXAsXG5cdFx0XHRcdFx0c3VtbWFyeTogYC8qIFVzZXI6JHt1c2VyTmFtZX0gKi8g5a6M5oiQJHtPUFRJT05TLnVzZXJSaWdodHNNYW5hZ2VyU3VtbWFyeX1gLFxuXHRcdFx0XHRcdHRleHQ6IGNvbnRlbnQsXG5cdFx0XHRcdFx0YmFzZXRpbWVzdGFtcCxcblx0XHRcdFx0fTtcblx0XHRcdFx0aWYgKG13LmNvbmZpZy5nZXQoJ3dnVXNlck5hbWUnKSkge1xuXHRcdFx0XHRcdGVkaXRQYXJhbXMuYXNzZXJ0ID0gJ3VzZXInO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0cmV0dXJuIGFwaS5wb3N0V2l0aEVkaXRUb2tlbihlZGl0UGFyYW1zKTtcblx0XHRcdH0pXG5cdCk7XG59O1xuXG5leHBvcnQge21hcmtBc0RvbmV9O1xuIiwgIi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXRzLWNvbW1lbnRcbi8vIEB0cy1ub2NoZWNrXG5pbXBvcnQge2dldFBlcm1pc3Npb25SZXF1ZXN0ZWQsIGdldFBlcm1pc3Nvbk5hbWV9IGZyb20gJy4vaTE4bic7XG5pbXBvcnQge2FwaX0gZnJvbSAnLi9hcGknO1xuaW1wb3J0IHthc3NpZ25QZXJtaXNzaW9ufSBmcm9tICcuL2Fzc2lnblBlcm1pc3Npb24nO1xuaW1wb3J0IHtpc3N1ZVRlbXBsYXRlfSBmcm9tICcuL2lzc3VlVGVtcGxhdGUnO1xuaW1wb3J0IHttYXJrQXNEb25lfSBmcm9tICcuL21hcmtBc0RvbmUnO1xuXG5jb25zdCBzaG93RGlhbG9nID0gKHt1c2VyTmFtZSwgaW5kZXgsIHBlcm1pc3Npb24sICRib2R5fSkgPT4ge1xuXHRjb25zdCBEaWFsb2cgPSBmdW5jdGlvbiAoY29uZmlnKSB7XG5cdFx0RGlhbG9nLnN1cGVyLmNhbGwodGhpcywgY29uZmlnKTtcblx0fTtcblx0T08uaW5oZXJpdENsYXNzKERpYWxvZywgT08udWkuUHJvY2Vzc0RpYWxvZyk7XG5cdERpYWxvZy5zdGF0aWMubmFtZSA9ICd1c2VyLXJpZ2h0cy1tYW5hZ2VyJztcblx0RGlhbG9nLnN0YXRpYy50aXRsZSA9IGDmjojkuogke2dldFBlcm1pc3Nvbk5hbWUocGVybWlzc2lvbil9JHt3aW5kb3cud2dVTFMoJ+e7mScsICfntaYnKX0ke3VzZXJOYW1lfWA7XG5cdERpYWxvZy5zdGF0aWMuYWN0aW9ucyA9IFtcblx0XHR7XG5cdFx0XHRhY3Rpb246ICdzdWJtaXQnLFxuXHRcdFx0bGFiZWw6IHdpbmRvdy53Z1VMUygn5o6I5p2DJywgJ+aOiOasiicpLFxuXHRcdFx0ZmxhZ3M6IFsncHJpbWFyeScsICdwcm9ncmVzc2l2ZSddLFxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0bGFiZWw6ICflj5bmtognLFxuXHRcdFx0ZmxhZ3M6IFsnc2FmZScsICdjbG9zZSddLFxuXHRcdH0sXG5cdF07XG5cdERpYWxvZy5wcm90b3R5cGUuZ2V0QXBpTWFuYWdlciA9IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gdGhpcy5hcGlNYW5hZ2VyO1xuXHR9O1xuXHREaWFsb2cucHJvdG90eXBlLmdldEJvZHlIZWlnaHQgPSAoKSA9PiB7XG5cdFx0cmV0dXJuIDI1NTtcblx0fTtcblx0RGlhbG9nLnByb3RvdHlwZS5pbml0aWFsaXplID0gYXN5bmMgZnVuY3Rpb24gKCkge1xuXHRcdERpYWxvZy5zdXBlci5wcm90b3R5cGUuaW5pdGlhbGl6ZS5jYWxsKHRoaXMpO1xuXHRcdHRoaXMuZWRpdEZpZWxkc2V0ID0gbmV3IE9PLnVpLkZpZWxkc2V0TGF5b3V0KHtcblx0XHRcdGNsYXNzZXM6IFsnY29udGFpbmVyJ10sXG5cdFx0fSk7XG5cdFx0dGhpcy5lZGl0UGFuZWwgPSBuZXcgT08udWkuUGFuZWxMYXlvdXQoe1xuXHRcdFx0ZXhwYW5kZWQ6IGZhbHNlLFxuXHRcdH0pO1xuXHRcdHRoaXMuZWRpdFBhbmVsLiRlbGVtZW50LmFwcGVuZCh0aGlzLmVkaXRGaWVsZHNldC4kZWxlbWVudCk7XG5cdFx0Y29uc3QgcmlnaHRMb2dXYXBwZXIgPSAkKCc8c3Bhbj4nKTtcblx0XHRjb25zdCB1cmwgPSBtdy51dGlsLmdldFVybCgnU3BlY2lhbDpMb2cvcmlnaHRzJywge1xuXHRcdFx0dHlwZTogJ3JpZ2h0cycsXG5cdFx0XHRwYWdlOiBgVXNlcjoke3VzZXJOYW1lfWAsXG5cdFx0fSk7XG5cdFx0JCgnPGE+Jylcblx0XHRcdC50ZXh0KCfmnIDov5HmnYPpmZDml6Xlv5cnKVxuXHRcdFx0LmF0dHIoe1xuXHRcdFx0XHRocmVmOiB1cmwsXG5cdFx0XHRcdHRhcmdldDogJ19ibGFuaycsXG5cdFx0XHR9KVxuXHRcdFx0LmFwcGVuZFRvKHJpZ2h0TG9nV2FwcGVyKTtcblx0XHRyaWdodExvZ1dhcHBlci5hcHBlbmQoJ++8micpO1xuXHRcdGNvbnN0IHJpZ2h0TG9nVGV4dCA9ICQoJzxzcGFuPicpLnRleHQoJ+iOt+WPluS4rScpLmFwcGVuZFRvKHJpZ2h0TG9nV2FwcGVyKTtcblx0XHR0aGlzLnJpZ2h0TG9nID0gbmV3IE9PLnVpLkxhYmVsV2lkZ2V0KHtcblx0XHRcdGxhYmVsOiByaWdodExvZ1dhcHBlcixcblx0XHR9KTtcblx0XHRjb25zdCBwYXJhbXMgPSB7XG5cdFx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0XHRsZWFjdGlvbjogJ3JpZ2h0cy9yaWdodHMnLFxuXHRcdFx0bGVsaW1pdDogMSxcblx0XHRcdGxldGl0bGU6IGBVc2VyOiR7dXNlck5hbWV9YCxcblx0XHRcdGxpc3Q6ICdsb2dldmVudHMnLFxuXHRcdH07XG5cdFx0Y29uc3Qge3F1ZXJ5fSA9IGF3YWl0IGFwaS5nZXQocGFyYW1zKTtcblx0XHRjb25zdCBsb2dzID0gcXVlcnkubG9nZXZlbnRzO1xuXHRcdGlmIChsb2dzLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0cmlnaHRMb2dUZXh0LnRleHQoJ+ayoeacieS7u+S9leaXpeW/lycpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbmV3LWNhcFxuXHRcdFx0Y29uc3QgdGltZXN0YW1wID0gbmV3IE1vcmViaXRzLmRhdGUobG9nc1swXS50aW1lc3RhbXApLmNhbGVuZGFyKCk7XG5cdFx0XHRjb25zdCByaWdodHMgPSBsb2dzWzBdLnBhcmFtcy5uZXdncm91cHMuam9pbign44CBJykgfHwgJ++8iOaXoO+8iSc7XG5cdFx0XHRyaWdodExvZ1RleHQudGV4dChgJHt0aW1lc3RhbXB9ICR7bG9nc1swXS51c2VyfeWwhueUqOaIt+e7hOaUueS4uiR7cmlnaHRzfWApO1xuXHRcdH1cblx0XHR0aGlzLnJpZ2h0c0NoYW5nZVN1bW1hcnlJbnB1dCA9IG5ldyBPTy51aS5UZXh0SW5wdXRXaWRnZXQoe1xuXHRcdFx0dmFsdWU6ICcnLFxuXHRcdFx0cGxhY2Vob2xkZXI6ICflj6/nlZnnqbonLFxuXHRcdH0pO1xuXHRcdHRoaXMuZXhwaXJ5SW5wdXQgPSBuZXcgbXcud2lkZ2V0cy5FeHBpcnlXaWRnZXQoe1xuXHRcdFx0JG92ZXJsYXk6ICRib2R5LmZpbmQoJy5vby11aS13aW5kb3cnKSxcblx0XHRcdFJlbGF0aXZlSW5wdXRDbGFzczogbXcud2lkZ2V0cy5TZWxlY3RXaXRoSW5wdXRXaWRnZXQsXG5cdFx0XHRyZWxhdGl2ZUlucHV0OiB7XG5cdFx0XHRcdG9yOiB0cnVlLFxuXHRcdFx0XHRkcm9wZG93bmlucHV0OiB7XG5cdFx0XHRcdFx0b3B0aW9uczogW1xuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRkYXRhOiAnMSBkYXknLFxuXHRcdFx0XHRcdFx0XHRsYWJlbDogJzHlpKknLFxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0ZGF0YTogJzEgd2VlaycsXG5cdFx0XHRcdFx0XHRcdGxhYmVsOiAnMeWRqCcsXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRkYXRhOiAnMSBtb250aCcsXG5cdFx0XHRcdFx0XHRcdGxhYmVsOiAnMeS4quaciCcsXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRkYXRhOiAnMyBtb250aHMnLFxuXHRcdFx0XHRcdFx0XHRsYWJlbDogJzPkuKrmnIgnLFxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0ZGF0YTogJzYgbW9udGhzJyxcblx0XHRcdFx0XHRcdFx0bGFiZWw6ICc25Liq5pyIJyxcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdGRhdGE6ICcxIHllYXInLFxuXHRcdFx0XHRcdFx0XHRsYWJlbDogJzHlubQnLFxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0ZGF0YTogJ2luZmluaXRlJyxcblx0XHRcdFx0XHRcdFx0bGFiZWw6ICfml6DpmZDmnJ8nLFxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0ZGF0YTogJ290aGVyJyxcblx0XHRcdFx0XHRcdFx0bGFiZWw6ICflhbbku5bml7bpl7QnLFxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRdLFxuXHRcdFx0XHRcdHZhbHVlOiAnaW5maW5pdGUnLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHR0ZXh0aW5wdXQ6IHtcblx0XHRcdFx0XHRyZXF1aXJlZDogdHJ1ZSxcblx0XHRcdFx0fSxcblx0XHRcdH0sXG5cdFx0fSk7XG5cdFx0dGhpcy5jbG9zaW5nUmVtYXJrc0lucHV0ID0gbmV3IE9PLnVpLlRleHRJbnB1dFdpZGdldCh7XG5cdFx0XHR2YWx1ZTogJ3t7ZG9uZX1944CCLS1+ficuY29uY2F0KCd+ficpLFxuXHRcdH0pO1xuXHRcdHRoaXMud2F0Y2hUYWxrUGFnZUNoZWNrYm94ID0gbmV3IE9PLnVpLkNoZWNrYm94SW5wdXRXaWRnZXQoe1xuXHRcdFx0c2VsZWN0ZWQ6IGZhbHNlLFxuXHRcdH0pO1xuXHRcdHRoaXMuZWRpdEZpZWxkc2V0LmFkZEl0ZW1zKHRoaXMucmlnaHRMb2cpO1xuXHRcdGNvbnN0IGZvcm1FbGVtZW50cyA9IFtcblx0XHRcdG5ldyBPTy51aS5GaWVsZExheW91dCh0aGlzLnJpZ2h0c0NoYW5nZVN1bW1hcnlJbnB1dCwge1xuXHRcdFx0XHRsYWJlbDogd2luZG93LndnVUxTKCfmjojmnYPljp/lm6AnLCAn5o6I5p2D5Y6f5ZugJyksXG5cdFx0XHR9KSxcblx0XHRcdG5ldyBPTy51aS5GaWVsZExheW91dCh0aGlzLmV4cGlyeUlucHV0LCB7XG5cdFx0XHRcdGxhYmVsOiB3aW5kb3cud2dVTFMoJ+e7k+adn+aXtumXtCcsICfntZDmnZ/mmYLplpMnKSxcblx0XHRcdH0pLFxuXHRcdFx0bmV3IE9PLnVpLkZpZWxkTGF5b3V0KHRoaXMuY2xvc2luZ1JlbWFya3NJbnB1dCwge1xuXHRcdFx0XHRsYWJlbDogd2luZG93LndnVUxTKCflhbPpl63or7fmsYLnlZnoqIAnLCAn6Zec6ZaJ6KuL5rGC55WZ6KiAJyksXG5cdFx0XHR9KSxcblx0XHRdO1xuXHRcdGlmIChnZXRQZXJtaXNzaW9uUmVxdWVzdGVkKHBlcm1pc3Npb24pKSB7XG5cdFx0XHRmb3JtRWxlbWVudHNbZm9ybUVsZW1lbnRzLmxlbmd0aF0gPSBuZXcgT08udWkuRmllbGRMYXlvdXQodGhpcy53YXRjaFRhbGtQYWdlQ2hlY2tib3gsIHtcblx0XHRcdFx0bGFiZWw6IHdpbmRvdy53Z1VMUygn55uR6KeG55So5oi36K6o6K666aG1JywgJ+ebo+imlueUqOaItuiojuirlumggScpLFxuXHRcdFx0fSk7XG5cdFx0fVxuXHRcdHRoaXMuZWRpdEZpZWxkc2V0LmFkZEl0ZW1zKGZvcm1FbGVtZW50cyk7XG5cdFx0dGhpcy5zdWJtaXRQYW5lbCA9IG5ldyBPTy51aS5QYW5lbExheW91dCh7XG5cdFx0XHQkOiB0aGlzLiQsXG5cdFx0XHRleHBhbmRlZDogZmFsc2UsXG5cdFx0fSk7XG5cdFx0dGhpcy5zdWJtaXRGaWVsZHNldCA9IG5ldyBPTy51aS5GaWVsZHNldExheW91dCh7XG5cdFx0XHRjbGFzc2VzOiBbJ2NvbnRhaW5lciddLFxuXHRcdH0pO1xuXHRcdHRoaXMuc3VibWl0UGFuZWwuJGVsZW1lbnQuYXBwZW5kKHRoaXMuc3VibWl0RmllbGRzZXQuJGVsZW1lbnQpO1xuXHRcdHRoaXMuY2hhbmdlUmlnaHRzUHJvZ3Jlc3NMYWJlbCA9IG5ldyBPTy51aS5MYWJlbFdpZGdldCgpO1xuXHRcdHRoaXMuY2hhbmdlUmlnaHRzUHJvZ3Jlc3NGaWVsZCA9IG5ldyBPTy51aS5GaWVsZExheW91dCh0aGlzLmNoYW5nZVJpZ2h0c1Byb2dyZXNzTGFiZWwpO1xuXHRcdHRoaXMubWFya0FzRG9uZVByb2dyZXNzTGFiZWwgPSBuZXcgT08udWkuTGFiZWxXaWRnZXQoKTtcblx0XHR0aGlzLm1hcmtBc0RvbmVQcm9ncmVzc0ZpZWxkID0gbmV3IE9PLnVpLkZpZWxkTGF5b3V0KHRoaXMubWFya0FzRG9uZVByb2dyZXNzTGFiZWwpO1xuXHRcdHRoaXMuaXNzdWVUZW1wbGF0ZVByb2dyZXNzTGFiZWwgPSBuZXcgT08udWkuTGFiZWxXaWRnZXQoKTtcblx0XHR0aGlzLmlzc3VlVGVtcGxhdGVQcm9ncmVzc0ZpZWxkID0gbmV3IE9PLnVpLkZpZWxkTGF5b3V0KHRoaXMuaXNzdWVUZW1wbGF0ZVByb2dyZXNzTGFiZWwpO1xuXHRcdHRoaXMuc3RhY2tMYXlvdXQgPSBuZXcgT08udWkuU3RhY2tMYXlvdXQoe1xuXHRcdFx0aXRlbXM6IFt0aGlzLmVkaXRQYW5lbCwgdGhpcy5zdWJtaXRQYW5lbF0sXG5cdFx0XHRwYWRkZWQ6IHRydWUsXG5cdFx0fSk7XG5cdFx0dGhpcy4kYm9keS5hcHBlbmQodGhpcy5zdGFja0xheW91dC4kZWxlbWVudCk7XG5cdH07XG5cdERpYWxvZy5wcm90b3R5cGUub25TdWJtaXQgPSBmdW5jdGlvbiAoKSB7XG5cdFx0Y29uc3Qgc2VsZiA9IHRoaXM7XG5cdFx0bGV0IHByb21pc2VDb3VudCA9IGdldFBlcm1pc3Npb25SZXF1ZXN0ZWQocGVybWlzc2lvbikgPyAzIDogMjtcblx0XHRzZWxmLmFjdGlvbnMuc2V0QWJpbGl0aWVzKHtcblx0XHRcdHN1Ym1pdDogZmFsc2UsXG5cdFx0fSk7XG5cdFx0Y29uc3QgYWRkUHJvbWlzZSA9ICh7JGZpZWxkfSwgcHJvbWlzZSkgPT4ge1xuXHRcdFx0c2VsZi5wdXNoUGVuZGluZygpO1xuXHRcdFx0cHJvbWlzZVxuXHRcdFx0XHQuZG9uZSgoKSA9PiB7XG5cdFx0XHRcdFx0JGZpZWxkLmFwcGVuZChcblx0XHRcdFx0XHRcdCQoJzxzcGFuPicpXG5cdFx0XHRcdFx0XHRcdC50ZXh0KCflrozmiJDvvIEnKVxuXHRcdFx0XHRcdFx0XHQucHJvcCgnc3R5bGUnLCAncG9zaXRpb246IHJlbGF0aXZlOyB0b3A6IC41ZW07IGNvbG9yOiAjMDA5MDAwOyBmb250LXdlaWdodDogYm9sZDsnKVxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdH0pXG5cdFx0XHRcdC5mYWlsKChvYmopID0+IHtcblx0XHRcdFx0XHRpZiAob2JqICYmIG9iai5lcnJvciAmJiBvYmouZXJyb3IuaW5mbykge1xuXHRcdFx0XHRcdFx0JGZpZWxkLmFwcGVuZChcblx0XHRcdFx0XHRcdFx0JCgnPHNwYW4+Jylcblx0XHRcdFx0XHRcdFx0XHQudGV4dChg6ZSZ6K+v77yaJHtvYmouZXJyb3IuaW5mb31gKVxuXHRcdFx0XHRcdFx0XHRcdC5wcm9wKCdzdHlsZScsICdwb3NpdGlvbjogcmVsYXRpdmU7IHRvcDogLjVlbTsgY29sb3I6ICNjMDA7IGZvbnQtd2VpZ2h0OiBib2xkOycpXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHQkZmllbGQuYXBwZW5kKFxuXHRcdFx0XHRcdFx0XHQkKCc8c3Bhbj4nKVxuXHRcdFx0XHRcdFx0XHRcdC50ZXh0KCflj5HnlJ/mnKrnn6XplJnor6/jgIInKVxuXHRcdFx0XHRcdFx0XHRcdC5wcm9wKCdzdHlsZScsICdwb3NpdGlvbjogcmVsYXRpdmU7IHRvcDogLjVlbTsgY29sb3I6ICNjMDA7IGZvbnQtd2VpZ2h0OiBib2xkOycpXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSlcblx0XHRcdFx0LmFsd2F5cygoKSA9PiB7XG5cdFx0XHRcdFx0cHJvbWlzZUNvdW50LS07IC8vIEZJWE1FOiBtYXliZSB3ZSBjb3VsZCB1c2UgYSBzZWxmLmlzUGVuZGluZygpIG9yIHNvbWV0aGluZ1xuXHRcdFx0XHRcdHNlbGYucG9wUGVuZGluZygpO1xuXHRcdFx0XHRcdGlmIChwcm9taXNlQ291bnQgPT09IDApIHtcblx0XHRcdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRsb2NhdGlvbi5yZWxvYWQodHJ1ZSk7XG5cdFx0XHRcdFx0XHR9LCAxMDAwKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0cmV0dXJuIHByb21pc2U7XG5cdFx0fTtcblx0XHRzZWxmLm1hcmtBc0RvbmVQcm9ncmVzc0ZpZWxkLnNldExhYmVsKCfmoIforrDor7fmsYLkuLrlt7LlrozmiJAuLi4nKTtcblx0XHRzZWxmLnN1Ym1pdEZpZWxkc2V0LmFkZEl0ZW1zKFtzZWxmLm1hcmtBc0RvbmVQcm9ncmVzc0ZpZWxkXSk7XG5cdFx0c2VsZi5jaGFuZ2VSaWdodHNQcm9ncmVzc0ZpZWxkLnNldExhYmVsKCfmjojkuojmnYPpmZAuLi4nKTtcblx0XHRzZWxmLnN1Ym1pdEZpZWxkc2V0LmFkZEl0ZW1zKFtzZWxmLmNoYW5nZVJpZ2h0c1Byb2dyZXNzRmllbGRdKTtcblx0XHRpZiAoZ2V0UGVybWlzc2lvblJlcXVlc3RlZChwZXJtaXNzaW9uKSkge1xuXHRcdFx0c2VsZi5pc3N1ZVRlbXBsYXRlUHJvZ3Jlc3NGaWVsZC5zZXRMYWJlbCgn5Y+R6YCB6YCa55+lLi4uJyk7XG5cdFx0XHRzZWxmLnN1Ym1pdEZpZWxkc2V0LmFkZEl0ZW1zKFtzZWxmLmlzc3VlVGVtcGxhdGVQcm9ncmVzc0ZpZWxkXSk7XG5cdFx0fVxuXHRcdGFkZFByb21pc2UoXG5cdFx0XHRzZWxmLm1hcmtBc0RvbmVQcm9ncmVzc0ZpZWxkLFxuXHRcdFx0bWFya0FzRG9uZSh1c2VyTmFtZSwgaW5kZXgsIGBcXG46JHt0aGlzLmNsb3NpbmdSZW1hcmtzSW5wdXQuZ2V0VmFsdWUoKX1gKVxuXHRcdCkudGhlbigoe2VkaXR9KSA9PiB7XG5cdFx0XHRhZGRQcm9taXNlKFxuXHRcdFx0XHRzZWxmLmNoYW5nZVJpZ2h0c1Byb2dyZXNzRmllbGQsXG5cdFx0XHRcdGFzc2lnblBlcm1pc3Npb24oXG5cdFx0XHRcdFx0dXNlck5hbWUsXG5cdFx0XHRcdFx0cGVybWlzc2lvbixcblx0XHRcdFx0XHR0aGlzLnJpZ2h0c0NoYW5nZVN1bW1hcnlJbnB1dC5nZXRWYWx1ZSgpLFxuXHRcdFx0XHRcdGVkaXQubmV3cmV2aWQsXG5cdFx0XHRcdFx0dGhpcy5leHBpcnlJbnB1dC5nZXRWYWx1ZSgpXG5cdFx0XHRcdClcblx0XHRcdCkudGhlbigoKSA9PiB7XG5cdFx0XHRcdGlmIChnZXRQZXJtaXNzaW9uUmVxdWVzdGVkKHBlcm1pc3Npb24pKSB7XG5cdFx0XHRcdFx0YWRkUHJvbWlzZShcblx0XHRcdFx0XHRcdHNlbGYuaXNzdWVUZW1wbGF0ZVByb2dyZXNzRmllbGQsXG5cdFx0XHRcdFx0XHRpc3N1ZVRlbXBsYXRlKHVzZXJOYW1lLCBwZXJtaXNzaW9uLCB0aGlzLndhdGNoVGFsa1BhZ2VDaGVja2JveC5pc1NlbGVjdGVkKCkpXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fSk7XG5cdFx0c2VsZi5zdGFja0xheW91dC5zZXRJdGVtKHNlbGYuc3VibWl0UGFuZWwpO1xuXHR9O1xuXHREaWFsb2cucHJvdG90eXBlLmdldEFjdGlvblByb2Nlc3MgPSBmdW5jdGlvbiAoYWN0aW9uKSB7XG5cdFx0cmV0dXJuIERpYWxvZy5zdXBlci5wcm90b3R5cGUuZ2V0QWN0aW9uUHJvY2Vzcy5jYWxsKHRoaXMsIGFjdGlvbikubmV4dChmdW5jdGlvbiAoKSB7XG5cdFx0XHRpZiAoYWN0aW9uID09PSAnc3VibWl0Jykge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5vblN1Ym1pdCgpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIERpYWxvZy5zdXBlci5wcm90b3R5cGUuZ2V0QWN0aW9uUHJvY2Vzcy5jYWxsKHRoaXMsIGFjdGlvbik7XG5cdFx0fSwgdGhpcyk7XG5cdH07XG5cdGNvbnN0IGRpYWxvZyA9IG5ldyBEaWFsb2coe1xuXHRcdHNpemU6ICdtZWRpdW0nLFxuXHR9KTtcblx0Y29uc3Qgd2luZG93TWFuYWdlciA9IG5ldyBPTy51aS5XaW5kb3dNYW5hZ2VyKCk7XG5cdCRib2R5LmFwcGVuZCh3aW5kb3dNYW5hZ2VyLiRlbGVtZW50KTtcblx0d2luZG93TWFuYWdlci5hZGRXaW5kb3dzKFtkaWFsb2ddKTtcblx0dm9pZCB3aW5kb3dNYW5hZ2VyLm9wZW5XaW5kb3coZGlhbG9nKTtcbn07XG5cbmV4cG9ydCB7c2hvd0RpYWxvZ307XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxxQkFBc0JDLFFBQUEsaUJBQUE7O0FDRXRCLElBQU1DLHFCQUFxQkEsTUFBTTtBQUNoQyxTQUFPO0lBQ05DLFdBQVc7SUFDWEMsY0FBYztJQUNkQyxXQUFXO0lBQ1gsc0JBQXNCO0lBQ3RCQyxjQUFjO0lBQ2RDLFdBQVc7SUFDWEMsZ0JBQWdCO0lBQ2hCQyxLQUFLO0lBQ0wscUJBQXFCO0VBQ3RCO0FBQ0Q7QUFFQSxJQUFNQyxrQkFBa0JSLG1CQUFtQjtBQUUzQyxJQUFNUyxtQkFBeURDLFNBQVE7QUFDdEUsU0FBT0YsZ0JB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QVEsTUFBTSxLQUFLLEVBQUVBLFFBQVEsTUFBTSxHQUFHLElBQ3hHLEtBQ0EyTCxVQUNDM0wsUUFBUSxTQUFTLEVBQUUsRUFDbkJBLFFBQVFWLFVBQVUsRUFBRSxFQUNwQlUsUUFBUVYsU0FBU1UsUUFBUSxNQUFNLEtBQUssRUFBRUEsUUFBUSxNQUFNLEdBQUcsR0FBRyxFQUFFO0FBRWpFdUQsZUFBVztNQUNWMUM7TUFDQXZCO01BQ0FDO01BQ0FpRTtJQUNELENBQUM7RUFDRixDQUFDO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFsiaW1wb3J0X2V4dF9nYWRnZXQyIiwgInJlcXVpcmUiLCAiZ2V0UGVybWlzc2lvbk5hbWVzIiwgInBhdHJvbGxlciIsICJhdXRvcmV2aWV3ZXIiLCAiY29uZmlybWVkIiwgImV2ZW50c3BvbnNvciIsICJ0cmFuc3dpa2kiLCAidGVtcGxhdGVlZGl0b3IiLCAiYm90IiwgInBlcm1pc3Npb25OYW1lcyIsICJnZXRQZXJtaXNzb25OYW1lIiwgImtleSIsICJnZXRQZXJtaXNzaW9uQnlQYWdlIiwgInBlcm1pc3Npb25SZXF1ZXN0ZWQiLCAiZ2V0UGVybWlzc2lvblJlcXVlc3RlZCIsICJnZXRQZXJtaXNzaW9uVGVtcGxhdGVzIiwgInBlcm1pc3Npb25UZW1wbGF0ZSIsICJnZXRwZXJtaXNzaW9uVGVtcGxhdGUiLCAidXNlclJpZ2h0c01hbmFnZXJTdW1tYXJ5IiwgInZlcnNpb24iLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAiYXBpIiwgImluaXRNd0FwaSIsICJjb25jYXQiLCAiYXNzaWduUGVybWlzc2lvbiIsICJ1c2VyTmFtZSIsICJwZXJtaXNzaW9uIiwgInN1bW1hcnkiLCAicmV2SWQiLCAiZXhwaXJ5IiwgInBlcm1hTGluayIsICJmdWxsU3VtbWFyeSIsICJwYXJhbXMiLCAiYWN0aW9uIiwgInVzZXIiLCAicmVwbGFjZSIsICJyZWFzb24iLCAiYWRkIiwgInBvc3RXaXRoVG9rZW4iLCAiaXNzdWVUZW1wbGF0ZSIsICJ3YXRjaCIsICJ0YWxrUGFnZSIsICJmb3JtYXQiLCAidGl0bGUiLCAiYXBwZW5kdGV4dCIsICJ3YXRjaGxpc3QiLCAicG9zdFdpdGhFZGl0VG9rZW4iLCAibWFya0FzRG9uZSIsICJpbmRleCIsICJjbG9zaW5nUmVtYXJrcyIsICJ3Z1BhZ2VOYW1lIiwgIm13IiwgImNvbmZpZyIsICJnZXQiLCAic2VjdGlvblNlbGVjdG9yIiwgIkNTUyIsICJlc2NhcGUiLCAic2VjdGlvbk5vZGUiLCAiZG9jdW1lbnQiLCAicXVlcnlTZWxlY3RvciIsICJzZWN0aW9uTnVtYmVyIiwgIiQiLCAic2libGluZ3MiLCAiZmluZCIsICJwcm9wIiwgIm1hdGNoIiwgImJhc2V0aW1lc3RhbXAiLCAiY3VydGltZXN0YW1wIiwgImNvbnRlbnQiLCAicXVlcnlQYXJhbXMiLCAiZm9ybWF0dmVyc2lvbiIsICJ0aXRsZXMiLCAicnZwcm9wIiwgInJ2c2VjdGlvbiIsICJ0aGVuIiwgImRhdGEiLCAicGFnZXMiLCAiRGVmZXJyZWQiLCAicmVqZWN0IiwgInBhZ2UiLCAiaW52YWxpZCIsICJtaXNzaW5nIiwgInJldmlzaW9ucyIsICJ0cmltIiwgImVkaXRQYXJhbXMiLCAibm9jcmVhdGUiLCAic2VjdGlvbiIsICJzdGFydHRpbWVzdGFtcCIsICJ0ZXh0IiwgImFzc2VydCIsICJzaG93RGlhbG9nIiwgIiRib2R5IiwgIkRpYWxvZyIsICJzdXBlciIsICJjYWxsIiwgIk9PIiwgImluaGVyaXRDbGFzcyIsICJ1aSIsICJQcm9jZXNzRGlhbG9nIiwgInN0YXRpYyIsICJuYW1lIiwgIndpbmRvdyIsICJ3Z1VMUyIsICJhY3Rpb25zIiwgImxhYmVsIiwgImZsYWdzIiwgInByb3RvdHlwZSIsICJnZXRBcGlNYW5hZ2VyIiwgImFwaU1hbmFnZXIiLCAiZ2V0Qm9keUhlaWdodCIsICJpbml0aWFsaXplIiwgIl9hc3luY1RvR2VuZXJhdG9yIiwgImVkaXRGaWVsZHNldCIsICJGaWVsZHNldExheW91dCIsICJjbGFzc2VzIiwgImVkaXRQYW5lbCIsICJQYW5lbExheW91dCIsICJleHBhbmRlZCIsICIkZWxlbWVudCIsICJhcHBlbmQiLCAicmlnaHRMb2dXYXBwZXIiLCAidXJsIiwgInV0aWwiLCAiZ2V0VXJsIiwgInR5cGUiLCAiYXR0ciIsICJocmVmIiwgInRhcmdldCIsICJhcHBlbmRUbyIsICJyaWdodExvZ1RleHQiLCAicmlnaHRMb2ciLCAiTGFiZWxXaWRnZXQiLCAibGVhY3Rpb24iLCAibGVsaW1pdCIsICJsZXRpdGxlIiwgImxpc3QiLCAicXVlcnkiLCAibG9ncyIsICJsb2dldmVudHMiLCAibGVuZ3RoIiwgInRpbWVzdGFtcCIsICJNb3JlYml0cyIsICJkYXRlIiwgImNhbGVuZGFyIiwgInJpZ2h0cyIsICJuZXdncm91cHMiLCAiam9pbiIsICJyaWdodHNDaGFuZ2VTdW1tYXJ5SW5wdXQiLCAiVGV4dElucHV0V2lkZ2V0IiwgInZhbHVlIiwgInBsYWNlaG9sZGVyIiwgImV4cGlyeUlucHV0IiwgIndpZGdldHMiLCAiRXhwaXJ5V2lkZ2V0IiwgIiRvdmVybGF5IiwgIlJlbGF0aXZlSW5wdXRDbGFzcyIsICJTZWxlY3RXaXRoSW5wdXRXaWRnZXQiLCAicmVsYXRpdmVJbnB1dCIsICJvciIsICJkcm9wZG93bmlucHV0IiwgIm9wdGlvbnMiLCAidGV4dGlucHV0IiwgInJlcXVpcmVkIiwgImNsb3NpbmdSZW1hcmtzSW5wdXQiLCAid2F0Y2hUYWxrUGFnZUNoZWNrYm94IiwgIkNoZWNrYm94SW5wdXRXaWRnZXQiLCAic2VsZWN0ZWQiLCAiYWRkSXRlbXMiLCAiZm9ybUVsZW1lbnRzIiwgIkZpZWxkTGF5b3V0IiwgInN1Ym1pdFBhbmVsIiwgInN1Ym1pdEZpZWxkc2V0IiwgImNoYW5nZVJpZ2h0c1Byb2dyZXNzTGFiZWwiLCAiY2hhbmdlUmlnaHRzUHJvZ3Jlc3NGaWVsZCIsICJtYXJrQXNEb25lUHJvZ3Jlc3NMYWJlbCIsICJtYXJrQXNEb25lUHJvZ3Jlc3NGaWVsZCIsICJpc3N1ZVRlbXBsYXRlUHJvZ3Jlc3NMYWJlbCIsICJpc3N1ZVRlbXBsYXRlUHJvZ3Jlc3NGaWVsZCIsICJzdGFja0xheW91dCIsICJTdGFja0xheW91dCIsICJpdGVtcyIsICJwYWRkZWQiLCAib25TdWJtaXQiLCAic2VsZiIsICJwcm9taXNlQ291bnQiLCAic2V0QWJpbGl0aWVzIiwgInN1Ym1pdCIsICJhZGRQcm9taXNlIiwgIiRmaWVsZCIsICJwcm9taXNlIiwgInB1c2hQZW5kaW5nIiwgImRvbmUiLCAiZmFpbCIsICJvYmoiLCAiZXJyb3IiLCAiaW5mbyIsICJhbHdheXMiLCAicG9wUGVuZGluZyIsICJzZXRUaW1lb3V0IiwgImxvY2F0aW9uIiwgInJlbG9hZCIsICJzZXRMYWJlbCIsICJnZXRWYWx1ZSIsICJlZGl0IiwgIm5ld3JldmlkIiwgImlzU2VsZWN0ZWQiLCAic2V0SXRlbSIsICJnZXRBY3Rpb25Qcm9jZXNzIiwgIm5leHQiLCAiZGlhbG9nIiwgInNpemUiLCAid2luZG93TWFuYWdlciIsICJXaW5kb3dNYW5hZ2VyIiwgImFkZFdpbmRvd3MiLCAib3BlbldpbmRvdyIsICJnZXRCb2R5IiwgIm9uIiwgImV2ZW50IiwgIl9tdyR1dGlsJGdldFBhcmFtVmFsdSIsICJfJGVsZW1lbnQkcGFyZW50cyRwcmUiLCAicHJldmVudERlZmF1bHQiLCAiZ2V0UGFyYW1WYWx1ZSIsICJzZWN0aW9uSWQiLCAicGFyZW50cyIsICJwcmV2Il0KfQo=

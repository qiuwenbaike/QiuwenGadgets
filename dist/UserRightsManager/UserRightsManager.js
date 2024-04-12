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
//! src/UserRightsManager/modules/core.js
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
    add: permission,
    expiry: expiry === "" ? "infinity" : expiry,
    reason: fullSummary
  };
  return api.postWithToken("userrights", params);
};
var markAsDone = (userName, index, closingRemarks) => {
  const {
    wgPageName
  } = mw.config.get();
  const sectionSelector = "#".concat(CSS.escape("User:".concat(userName.replace(/"/g, ".22").replace(/ /g, "_")))).concat(index !== null && index !== void 0 ? index : "");
  const sectionNode = document.querySelector(sectionSelector);
  const [, sectionNumber] = $(sectionNode).siblings(".mw-editsection").find("a:not(.mw-editsection-visualeditor)").prop("href").match(/section=(\d+)/);
  let basetimestamp;
  let curtimestamp;
  let page;
  let revision;
  let content;
  const queryParams = {
    action: "query",
    format: "json",
    formatversion: "2",
    prop: "revisions",
    titles: [wgPageName],
    curtimestamp: true,
    rvprop: ["content", "timestamp"],
    rvsection: sectionNumber
  };
  return api.get(queryParams).then((data) => {
    if (!data.query || !data.query.pages) {
      return $.Deferred().reject("unknown");
    }
    [page] = data.query.pages;
    if (!page || page.invalid) {
      return $.Deferred().reject("invalidtitle");
    }
    if (page.missing) {
      return $.Deferred().reject("nocreate-missing");
    }
    [revision] = page.revisions;
    basetimestamp = revision.timestamp;
    ({
      curtimestamp
    } = data);
    ({
      content
    } = revision);
  }).then(() => {
    content = content.trim();
    content = content.replace(/:{{status(\|.*?)?}}/i, ":{{Status|+}}");
    content += closingRemarks;
    const editParams = {
      action: "edit",
      format: "json",
      formatversion: "2",
      title: wgPageName,
      assert: mw.config.get("wgUserName") ? "user" : void 0,
      nocreate: true,
      section: sectionNumber,
      starttimestamp: curtimestamp,
      summary: "/* User:".concat(userName, " */ 完成").concat(userRightsManagerSummary),
      text: content,
      basetimestamp
    };
    return api.postWithEditToken(editParams);
  });
};
var issueTemplate = (userName, permission, watch) => {
  const talkPage = "User talk:".concat(userName.replace(/ /g, "_"));
  const params = {
    action: "edit",
    title: talkPage,
    appendtext: "\n\n{{".concat("subst:", getpermissionTemplate(permission), "}}}"),
    summary: "根据共识授予".concat(getPermissonName(permission)).concat(userRightsManagerSummary),
    watchlist: watch ? "watch" : "unwatch"
  };
  return api.postWithEditToken(params);
};
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1VzZXJSaWdodHNNYW5hZ2VyL1VzZXJSaWdodHNNYW5hZ2VyLnRzIiwgInNyYy9Vc2VyUmlnaHRzTWFuYWdlci9tb2R1bGVzL2kxOG4udHMiLCAic3JjL1VzZXJSaWdodHNNYW5hZ2VyL29wdGlvbnMuanNvbiIsICJzcmMvVXNlclJpZ2h0c01hbmFnZXIvbW9kdWxlcy9hcGkudHMiLCAic3JjL1VzZXJSaWdodHNNYW5hZ2VyL21vZHVsZXMvY29yZS5qcyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHtnZXRCb2R5fSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuaW1wb3J0IHtnZXRQZXJtaXNzaW9uUmVxdWVzdGVkfSBmcm9tICcuL21vZHVsZXMvaTE4bic7XG5pbXBvcnQge3Nob3dEaWFsb2d9IGZyb20gJy4vbW9kdWxlcy9jb3JlLmpzJztcblxudm9pZCBnZXRCb2R5KCkudGhlbigoJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KTogdm9pZCA9PiB7XG5cdGNvbnN0IHt3Z1BhZ2VOYW1lfSA9IG13LmNvbmZpZy5nZXQoKTtcblxuXHRpZiAoIWdldFBlcm1pc3Npb25SZXF1ZXN0ZWQod2dQYWdlTmFtZSkgfHwgZ2V0UGVybWlzc2lvblJlcXVlc3RlZCh3Z1BhZ2VOYW1lKSA9PT0gd2dQYWdlTmFtZSkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IHBlcm1pc3Npb246IHN0cmluZyB8IHVuZGVmaW5lZCA9IGdldFBlcm1pc3Npb25SZXF1ZXN0ZWQod2dQYWdlTmFtZSk7XG5cblx0aWYgKHBlcm1pc3Npb24gPT09ICdBdXRvV2lraUJyb3dzZXInKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0JGJvZHkuZmluZCgnLnBlcm0tYXNzaWduLXBlcm1pc3Npb25zIGEnKS5vbignY2xpY2snLCAoZXZlbnQ6IEpRdWVyeS5DbGlja0V2ZW50KTogdm9pZCA9PiB7XG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuXHRcdGNvbnN0ICRlbGVtZW50OiBKUXVlcnk8SFRNTEFuY2hvckVsZW1lbnQ+ID0gJChldmVudC50YXJnZXQgYXMgSFRNTEFuY2hvckVsZW1lbnQpO1xuXG5cdFx0Y29uc3QgdXNlck5hbWU6IHN0cmluZyA9IG13LnV0aWwuZ2V0UGFyYW1WYWx1ZSgndXNlcicsICRlbGVtZW50LmF0dHIoJ2hyZWYnKSkgPz8gJyc7XG5cdFx0Y29uc3Qgc2VjdGlvbklkOiBzdHJpbmcgPSAkZWxlbWVudC5wYXJlbnRzKCdkbCcpLnByZXYoJ2g0JykuZmluZCgnLm13LWhlYWRsaW5lJykuYXR0cignaWQnKSA/PyAnJztcblx0XHRjb25zdCBpbmRleDogc3RyaW5nID1cblx0XHRcdHNlY3Rpb25JZCA9PT0gYFVzZXI6JHt1c2VyTmFtZX1gIHx8IHNlY3Rpb25JZCA9PT0gYFVzZXI6JHt1c2VyTmFtZX1gLnJlcGxhY2UoL1wiL2csICcuMjInKS5yZXBsYWNlKC8gL2csICdfJylcblx0XHRcdFx0PyAnJ1xuXHRcdFx0XHQ6IHNlY3Rpb25JZFxuXHRcdFx0XHRcdFx0LnJlcGxhY2UoJ1VzZXI6JywgJycpXG5cdFx0XHRcdFx0XHQucmVwbGFjZSh1c2VyTmFtZSwgJycpXG5cdFx0XHRcdFx0XHQucmVwbGFjZSh1c2VyTmFtZS5yZXBsYWNlKC9cIi9nLCAnLjIyJykucmVwbGFjZSgvIC9nLCAnXycpLCAnJyk7XG5cblx0XHRzaG93RGlhbG9nKHtcblx0XHRcdGluZGV4LFxuXHRcdFx0dXNlck5hbWUsXG5cdFx0XHRwZXJtaXNzaW9uLFxuXHRcdFx0JGJvZHksXG5cdFx0fSk7XG5cdH0pO1xufSk7XG4iLCAiaW1wb3J0IHR5cGUge1VzZXJSaWdodHN9IGZyb20gJ34vTWFya1JpZ2h0cy9tb2R1bGVzL3R5cGVzJztcblxuY29uc3QgZ2V0UGVybWlzc2lvbk5hbWVzID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdHBhdHJvbGxlcjogJ+W3oeafpeWRmCcsXG5cdFx0YXV0b3Jldmlld2VyOiAn5beh5p+l6LGB5YWN6ICFJyxcblx0XHRjb25maXJtZWQ6ICfnoa7orqTnlKjmiLcnLFxuXHRcdCdtYXNzbWVzc2FnZS1zZW5kZXInOiAn5aSn6YeP5raI5oGv5Y+R6YCB6ICFJyxcblx0XHRldmVudHNwb25zb3I6ICfmtLvliqjnu4Tnu4fogIUnLFxuXHRcdHRyYW5zd2lraTogJ+WvvOWFpeiAhScsXG5cdFx0dGVtcGxhdGVlZGl0b3I6ICfmqKHmnb/nvJbovpHlkZgnLFxuXHRcdGJvdDogJ+acuuWZqOS6uicsXG5cdFx0J3JucnN2ZXJpZnktZXhlbXB0JzogJ+WunuWQjeWItumqjOivgeixgeWFjScsXG5cdH0gYXMgY29uc3Qgc2F0aXNmaWVzIFBhcnRpYWw8UmVjb3JkPFVzZXJSaWdodHMsIHN0cmluZz4+O1xufTtcblxuY29uc3QgcGVybWlzc2lvbk5hbWVzID0gZ2V0UGVybWlzc2lvbk5hbWVzKCk7XG5cbmNvbnN0IGdldFBlcm1pc3Nvbk5hbWU6IEdldE1lc3NhZ2VzPHR5cGVvZiBwZXJtaXNzaW9uTmFtZXM+ID0gKGtleSkgPT4ge1xuXHRyZXR1cm4gcGVybWlzc2lvbk5hbWVzW2tleV0gfHwga2V5O1xufTtcblxuY29uc3QgZ2V0UGVybWlzc2lvbkJ5UGFnZSA9ICgpID0+IHtcblx0cmV0dXJuIHtcblx0XHQnUWl1d2VuX3RhbGs65p2D6ZmQ55Sz6K+3L+eUs+ivt+W3oeafpeWbnumAgOadgyc6ICdwYXRyb2xsZXInLFxuXHRcdCdRaXV3ZW5fdGFsazrmnYPpmZDnlLPor7cv55Sz6K+35beh5p+l6LGB5YWN5p2DJzogJ2F1dG9yZXZpZXdlcicsXG5cdFx0J1FpdXdlbl90YWxrOuadg+mZkOeUs+ivty/nlLPor7fnoa7orqTnlKjmiLfmnYMnOiAnY29uZmlybWVkJyxcblx0XHQnUWl1d2VuX3RhbGs65p2D6ZmQ55Sz6K+3L+eUs+ivt+Wkp+mHj+a2iOaBr+WPkemAgeadgyc6ICdtYXNzbWVzc2FnZS1zZW5kZXInLFxuXHRcdCdRaXV3ZW5fdGFsazrmnYPpmZDnlLPor7cv55Sz6K+35rS75Yqo57uE57uH5p2DJzogJ2V2ZW50c3BvbnNvcicsXG5cdFx0J1FpdXdlbl90YWxrOuadg+mZkOeUs+ivty/nlLPor7flr7zlhaXmnYMnOiAndHJhbnN3aWtpJyxcblx0XHQnUWl1d2VuX3RhbGs65p2D6ZmQ55Sz6K+3L+eUs+ivt+aooeadv+e8lui+keadgyc6ICd0ZW1wbGF0ZWVkaXRvcicsXG5cdFx0J1FpdXdlbl90YWxrOuadg+mZkOeUs+ivty/nlLPor7fmnLrlmajkurrmnYPpmZAnOiAnYm90Jyxcblx0XHQnUWl1d2VuX3RhbGs65p2D6ZmQ55Sz6K+3L+eUs+ivt+WunuWQjeWItumqjOivgeixgeWFjSc6ICdybnJzdmVyaWZ5LWV4ZW1wdCcsXG5cdH0gYXMgUmVjb3JkPHN0cmluZywgVXNlclJpZ2h0cz47XG59O1xuXG5jb25zdCBwZXJtaXNzaW9uUmVxdWVzdGVkID0gZ2V0UGVybWlzc2lvbkJ5UGFnZSgpO1xuXG5jb25zdCBnZXRQZXJtaXNzaW9uUmVxdWVzdGVkOiBHZXRNZXNzYWdlczx0eXBlb2YgcGVybWlzc2lvblJlcXVlc3RlZD4gPSAoa2V5KSA9PiB7XG5cdHJldHVybiBwZXJtaXNzaW9uUmVxdWVzdGVkW2tleV0gfHwga2V5O1xufTtcblxuY29uc3QgZ2V0UGVybWlzc2lvblRlbXBsYXRlcyA9ICgpID0+IHtcblx0cmV0dXJuIHtcblx0XHRwYXRyb2xsZXI6ICdQYXRyb2wgZ3JhbnRlZCcsXG5cdFx0YXV0b3Jldmlld2VyOiAnQXV0b3BhdHJvbCBncmFudGVkJyxcblx0XHQnbWFzc21lc3NhZ2Utc2VuZGVyJzogJ01NUyBncmFudGVkJyxcblx0XHR0ZW1wbGF0ZWVkaXRvcjogJ1RlbXBsYXRlIGVkaXRvciBncmFudGVkJyxcblx0XHR0cmFuc3dpa2k6ICdUcmFuc3dpa2kgZ3JhbnRlZCcsXG5cdH0gYXMgY29uc3Qgc2F0aXNmaWVzIFBhcnRpYWw8UmVjb3JkPFVzZXJSaWdodHMsIHN0cmluZz4+O1xufTtcblxuY29uc3QgcGVybWlzc2lvblRlbXBsYXRlID0gZ2V0UGVybWlzc2lvblRlbXBsYXRlcygpO1xuXG5jb25zdCBnZXRwZXJtaXNzaW9uVGVtcGxhdGU6IEdldE1lc3NhZ2VzPHR5cGVvZiBwZXJtaXNzaW9uVGVtcGxhdGU+ID0gKGtleSkgPT4ge1xuXHRyZXR1cm4gcGVybWlzc2lvblRlbXBsYXRlW2tleV0gfHwga2V5O1xufTtcblxuZXhwb3J0IHtnZXRQZXJtaXNzb25OYW1lLCBnZXRQZXJtaXNzaW9uUmVxdWVzdGVkLCBnZXRwZXJtaXNzaW9uVGVtcGxhdGUsIHBlcm1pc3Npb25OYW1lc307XG4iLCAie1xuXHRcInVzZXJSaWdodHNNYW5hZ2VyU3VtbWFyeVwiOiBcIu+8iFtbTWVkaWFXaWtpOkdhZGdldC1Vc2VyUmlnaHRzTWFuYWdlci5qc3xVc2VyUmlnaHRzTWFuYWdlcl1d77yJXCIsXG5cdFwidmVyc2lvblwiOiBcIjIuMFwiXG59XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtpbml0TXdBcGl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmNvbnN0IGFwaTogbXcuQXBpID0gaW5pdE13QXBpKGBtb3JlYml0cy5qczsgVXNlclJpZ2h0c01hbmFnZXIvJHtPUFRJT05TLnZlcnNpb259YCk7XG5cbmV4cG9ydCB7YXBpfTtcbiIsICIvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10cy1jb21tZW50XG4vLyBAdHMtbm9jaGVja1xuaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtnZXRQZXJtaXNzaW9uUmVxdWVzdGVkLCBnZXRQZXJtaXNzb25OYW1lLCBnZXRwZXJtaXNzaW9uVGVtcGxhdGV9IGZyb20gJy4vaTE4bic7XG5pbXBvcnQge2FwaX0gZnJvbSAnLi9hcGknO1xuXG5jb25zdCBhc3NpZ25QZXJtaXNzaW9uID0gKHVzZXJOYW1lLCBwZXJtaXNzaW9uLCBzdW1tYXJ5LCByZXZJZCwgZXhwaXJ5KSA9PiB7XG5cdGNvbnN0IHBlcm1hTGluayA9IGBbW1NwZWNpYWw6UGVybWFMaW5rLyR7cmV2SWR9I1VzZXI6JHt1c2VyTmFtZX185p2D6ZmQ55Sz6K+3XV1gO1xuXHRsZXQgZnVsbFN1bW1hcnkgPSBgKyR7Z2V0UGVybWlzc29uTmFtZShwZXJtaXNzaW9uKX3vvJske3Blcm1hTGlua31gO1xuXHRpZiAoc3VtbWFyeSAhPT0gJycpIHtcblx0XHRmdWxsU3VtbWFyeSArPSBg77ybJHtzdW1tYXJ5fWA7XG5cdH1cblx0ZnVsbFN1bW1hcnkgKz0gT1BUSU9OUy51c2VyUmlnaHRzTWFuYWdlclN1bW1hcnk7XG5cdGNvbnN0IHBhcmFtcyA9IHtcblx0XHRhY3Rpb246ICd1c2VycmlnaHRzJyxcblx0XHR1c2VyOiB1c2VyTmFtZS5yZXBsYWNlKC8gL2csICdfJyksXG5cdFx0YWRkOiBwZXJtaXNzaW9uLFxuXHRcdGV4cGlyeTogZXhwaXJ5ID09PSAnJyA/ICdpbmZpbml0eScgOiBleHBpcnksXG5cdFx0cmVhc29uOiBmdWxsU3VtbWFyeSxcblx0fTtcblx0cmV0dXJuIGFwaS5wb3N0V2l0aFRva2VuKCd1c2VycmlnaHRzJywgcGFyYW1zKTtcbn07XG5cbmNvbnN0IG1hcmtBc0RvbmUgPSAodXNlck5hbWUsIGluZGV4LCBjbG9zaW5nUmVtYXJrcykgPT4ge1xuXHRjb25zdCB7d2dQYWdlTmFtZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cdGNvbnN0IHNlY3Rpb25TZWxlY3RvciA9IGAjJHtDU1MuZXNjYXBlKGBVc2VyOiR7dXNlck5hbWUucmVwbGFjZSgvXCIvZywgJy4yMicpLnJlcGxhY2UoLyAvZywgJ18nKX1gKX0ke2luZGV4ID8/ICcnfWA7XG5cdGNvbnN0IHNlY3Rpb25Ob2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWN0aW9uU2VsZWN0b3IpO1xuXHRjb25zdCBbLCBzZWN0aW9uTnVtYmVyXSA9ICQoc2VjdGlvbk5vZGUpXG5cdFx0LnNpYmxpbmdzKCcubXctZWRpdHNlY3Rpb24nKVxuXHRcdC5maW5kKCdhOm5vdCgubXctZWRpdHNlY3Rpb24tdmlzdWFsZWRpdG9yKScpXG5cdFx0LnByb3AoJ2hyZWYnKVxuXHRcdC5tYXRjaCgvc2VjdGlvbj0oXFxkKykvKTtcblx0bGV0IGJhc2V0aW1lc3RhbXA7XG5cdGxldCBjdXJ0aW1lc3RhbXA7XG5cdGxldCBwYWdlO1xuXHRsZXQgcmV2aXNpb247XG5cdGxldCBjb250ZW50O1xuXHRjb25zdCBxdWVyeVBhcmFtcyA9IHtcblx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdHByb3A6ICdyZXZpc2lvbnMnLFxuXHRcdHRpdGxlczogW3dnUGFnZU5hbWVdLFxuXHRcdGN1cnRpbWVzdGFtcDogdHJ1ZSxcblx0XHRydnByb3A6IFsnY29udGVudCcsICd0aW1lc3RhbXAnXSxcblx0XHRydnNlY3Rpb246IHNlY3Rpb25OdW1iZXIsXG5cdH07XG5cdHJldHVybiBhcGlcblx0XHQuZ2V0KHF1ZXJ5UGFyYW1zKVxuXHRcdC50aGVuKChkYXRhKSA9PiB7XG5cdFx0XHRpZiAoIWRhdGEucXVlcnkgfHwgIWRhdGEucXVlcnkucGFnZXMpIHtcblx0XHRcdFx0cmV0dXJuICQuRGVmZXJyZWQoKS5yZWplY3QoJ3Vua25vd24nKTtcblx0XHRcdH1cblx0XHRcdFtwYWdlXSA9IGRhdGEucXVlcnkucGFnZXM7XG5cdFx0XHRpZiAoIXBhZ2UgfHwgcGFnZS5pbnZhbGlkKSB7XG5cdFx0XHRcdHJldHVybiAkLkRlZmVycmVkKCkucmVqZWN0KCdpbnZhbGlkdGl0bGUnKTtcblx0XHRcdH1cblx0XHRcdGlmIChwYWdlLm1pc3NpbmcpIHtcblx0XHRcdFx0cmV0dXJuICQuRGVmZXJyZWQoKS5yZWplY3QoJ25vY3JlYXRlLW1pc3NpbmcnKTtcblx0XHRcdH1cblx0XHRcdFtyZXZpc2lvbl0gPSBwYWdlLnJldmlzaW9ucztcblx0XHRcdGJhc2V0aW1lc3RhbXAgPSByZXZpc2lvbi50aW1lc3RhbXA7XG5cdFx0XHQoe2N1cnRpbWVzdGFtcH0gPSBkYXRhKTtcblx0XHRcdCh7Y29udGVudH0gPSByZXZpc2lvbik7XG5cdFx0fSlcblx0XHQudGhlbigoKSA9PiB7XG5cdFx0XHRjb250ZW50ID0gY29udGVudC50cmltKCk7XG5cdFx0XHRjb250ZW50ID0gY29udGVudC5yZXBsYWNlKC86e3tzdGF0dXMoXFx8Lio/KT99fS9pLCAnOnt7U3RhdHVzfCt9fScpO1xuXHRcdFx0Y29udGVudCArPSBjbG9zaW5nUmVtYXJrcztcblx0XHRcdGNvbnN0IGVkaXRQYXJhbXMgPSB7XG5cdFx0XHRcdGFjdGlvbjogJ2VkaXQnLFxuXHRcdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdFx0XHR0aXRsZTogd2dQYWdlTmFtZSxcblx0XHRcdFx0YXNzZXJ0OiBtdy5jb25maWcuZ2V0KCd3Z1VzZXJOYW1lJykgPyAndXNlcicgOiB1bmRlZmluZWQsXG5cdFx0XHRcdG5vY3JlYXRlOiB0cnVlLFxuXHRcdFx0XHRzZWN0aW9uOiBzZWN0aW9uTnVtYmVyLFxuXHRcdFx0XHRzdGFydHRpbWVzdGFtcDogY3VydGltZXN0YW1wLFxuXHRcdFx0XHRzdW1tYXJ5OiBgLyogVXNlcjoke3VzZXJOYW1lfSAqLyDlrozmiJAke09QVElPTlMudXNlclJpZ2h0c01hbmFnZXJTdW1tYXJ5fWAsXG5cdFx0XHRcdHRleHQ6IGNvbnRlbnQsXG5cdFx0XHRcdGJhc2V0aW1lc3RhbXAsXG5cdFx0XHR9O1xuXHRcdFx0cmV0dXJuIGFwaS5wb3N0V2l0aEVkaXRUb2tlbihlZGl0UGFyYW1zKTtcblx0XHR9KTtcbn07XG5cbmNvbnN0IGlzc3VlVGVtcGxhdGUgPSAodXNlck5hbWUsIHBlcm1pc3Npb24sIHdhdGNoKSA9PiB7XG5cdGNvbnN0IHRhbGtQYWdlID0gYFVzZXIgdGFsazoke3VzZXJOYW1lLnJlcGxhY2UoLyAvZywgJ18nKX1gO1xuXHRjb25zdCBwYXJhbXMgPSB7XG5cdFx0YWN0aW9uOiAnZWRpdCcsXG5cdFx0dGl0bGU6IHRhbGtQYWdlLFxuXHRcdGFwcGVuZHRleHQ6ICdcXG5cXG57eycuY29uY2F0KCdzdWJzdDonLCBnZXRwZXJtaXNzaW9uVGVtcGxhdGUocGVybWlzc2lvbiksICd9fX0nKSxcblx0XHRzdW1tYXJ5OiBg5qC55o2u5YWx6K+G5o6I5LqIJHtnZXRQZXJtaXNzb25OYW1lKHBlcm1pc3Npb24pfSR7T1BUSU9OUy51c2VyUmlnaHRzTWFuYWdlclN1bW1hcnl9YCxcblx0XHR3YXRjaGxpc3Q6IHdhdGNoID8gJ3dhdGNoJyA6ICd1bndhdGNoJyxcblx0fTtcblx0cmV0dXJuIGFwaS5wb3N0V2l0aEVkaXRUb2tlbihwYXJhbXMpO1xufTtcblxuY29uc3Qgc2hvd0RpYWxvZyA9ICh7dXNlck5hbWUsIGluZGV4LCBwZXJtaXNzaW9uLCAkYm9keX0pID0+IHtcblx0Y29uc3QgRGlhbG9nID0gZnVuY3Rpb24gKGNvbmZpZykge1xuXHRcdERpYWxvZy5zdXBlci5jYWxsKHRoaXMsIGNvbmZpZyk7XG5cdH07XG5cdE9PLmluaGVyaXRDbGFzcyhEaWFsb2csIE9PLnVpLlByb2Nlc3NEaWFsb2cpO1xuXHREaWFsb2cuc3RhdGljLm5hbWUgPSAndXNlci1yaWdodHMtbWFuYWdlcic7XG5cdERpYWxvZy5zdGF0aWMudGl0bGUgPSBg5o6I5LqIJHtnZXRQZXJtaXNzb25OYW1lKHBlcm1pc3Npb24pfSR7d2luZG93LndnVUxTKCfnu5knLCAn57WmJyl9JHt1c2VyTmFtZX1gO1xuXHREaWFsb2cuc3RhdGljLmFjdGlvbnMgPSBbXG5cdFx0e1xuXHRcdFx0YWN0aW9uOiAnc3VibWl0Jyxcblx0XHRcdGxhYmVsOiB3aW5kb3cud2dVTFMoJ+aOiOadgycsICfmjojmrIonKSxcblx0XHRcdGZsYWdzOiBbJ3ByaW1hcnknLCAncHJvZ3Jlc3NpdmUnXSxcblx0XHR9LFxuXHRcdHtcblx0XHRcdGxhYmVsOiAn5Y+W5raIJyxcblx0XHRcdGZsYWdzOiBbJ3NhZmUnLCAnY2xvc2UnXSxcblx0XHR9LFxuXHRdO1xuXHREaWFsb2cucHJvdG90eXBlLmdldEFwaU1hbmFnZXIgPSBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIHRoaXMuYXBpTWFuYWdlcjtcblx0fTtcblx0RGlhbG9nLnByb3RvdHlwZS5nZXRCb2R5SGVpZ2h0ID0gKCkgPT4ge1xuXHRcdHJldHVybiAyNTU7XG5cdH07XG5cdERpYWxvZy5wcm90b3R5cGUuaW5pdGlhbGl6ZSA9IGFzeW5jIGZ1bmN0aW9uICgpIHtcblx0XHREaWFsb2cuc3VwZXIucHJvdG90eXBlLmluaXRpYWxpemUuY2FsbCh0aGlzKTtcblx0XHR0aGlzLmVkaXRGaWVsZHNldCA9IG5ldyBPTy51aS5GaWVsZHNldExheW91dCh7XG5cdFx0XHRjbGFzc2VzOiBbJ2NvbnRhaW5lciddLFxuXHRcdH0pO1xuXHRcdHRoaXMuZWRpdFBhbmVsID0gbmV3IE9PLnVpLlBhbmVsTGF5b3V0KHtcblx0XHRcdGV4cGFuZGVkOiBmYWxzZSxcblx0XHR9KTtcblx0XHR0aGlzLmVkaXRQYW5lbC4kZWxlbWVudC5hcHBlbmQodGhpcy5lZGl0RmllbGRzZXQuJGVsZW1lbnQpO1xuXHRcdGNvbnN0IHJpZ2h0TG9nV2FwcGVyID0gJCgnPHNwYW4+Jyk7XG5cdFx0Y29uc3QgdXJsID0gbXcudXRpbC5nZXRVcmwoJ1NwZWNpYWw6TG9nL3JpZ2h0cycsIHtcblx0XHRcdHR5cGU6ICdyaWdodHMnLFxuXHRcdFx0cGFnZTogYFVzZXI6JHt1c2VyTmFtZX1gLFxuXHRcdH0pO1xuXHRcdCQoJzxhPicpXG5cdFx0XHQudGV4dCgn5pyA6L+R5p2D6ZmQ5pel5b+XJylcblx0XHRcdC5hdHRyKHtcblx0XHRcdFx0aHJlZjogdXJsLFxuXHRcdFx0XHR0YXJnZXQ6ICdfYmxhbmsnLFxuXHRcdFx0fSlcblx0XHRcdC5hcHBlbmRUbyhyaWdodExvZ1dhcHBlcik7XG5cdFx0cmlnaHRMb2dXYXBwZXIuYXBwZW5kKCfvvJonKTtcblx0XHRjb25zdCByaWdodExvZ1RleHQgPSAkKCc8c3Bhbj4nKS50ZXh0KCfojrflj5bkuK0nKS5hcHBlbmRUbyhyaWdodExvZ1dhcHBlcik7XG5cdFx0dGhpcy5yaWdodExvZyA9IG5ldyBPTy51aS5MYWJlbFdpZGdldCh7XG5cdFx0XHRsYWJlbDogcmlnaHRMb2dXYXBwZXIsXG5cdFx0fSk7XG5cdFx0Y29uc3QgcGFyYW1zID0ge1xuXHRcdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdFx0bGVhY3Rpb246ICdyaWdodHMvcmlnaHRzJyxcblx0XHRcdGxlbGltaXQ6IDEsXG5cdFx0XHRsZXRpdGxlOiBgVXNlcjoke3VzZXJOYW1lfWAsXG5cdFx0XHRsaXN0OiAnbG9nZXZlbnRzJyxcblx0XHR9O1xuXHRcdGNvbnN0IHtxdWVyeX0gPSBhd2FpdCBhcGkuZ2V0KHBhcmFtcyk7XG5cdFx0Y29uc3QgbG9ncyA9IHF1ZXJ5LmxvZ2V2ZW50cztcblx0XHRpZiAobG9ncy5sZW5ndGggPT09IDApIHtcblx0XHRcdHJpZ2h0TG9nVGV4dC50ZXh0KCfmsqHmnInku7vkvZXml6Xlv5cnKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5ldy1jYXBcblx0XHRcdGNvbnN0IHRpbWVzdGFtcCA9IG5ldyBNb3JlYml0cy5kYXRlKGxvZ3NbMF0udGltZXN0YW1wKS5jYWxlbmRhcigpO1xuXHRcdFx0Y29uc3QgcmlnaHRzID0gbG9nc1swXS5wYXJhbXMubmV3Z3JvdXBzLmpvaW4oJ+OAgScpIHx8ICfvvIjml6DvvIknO1xuXHRcdFx0cmlnaHRMb2dUZXh0LnRleHQoYCR7dGltZXN0YW1wfSAke2xvZ3NbMF0udXNlcn3lsIbnlKjmiLfnu4TmlLnkuLoke3JpZ2h0c31gKTtcblx0XHR9XG5cdFx0dGhpcy5yaWdodHNDaGFuZ2VTdW1tYXJ5SW5wdXQgPSBuZXcgT08udWkuVGV4dElucHV0V2lkZ2V0KHtcblx0XHRcdHZhbHVlOiAnJyxcblx0XHRcdHBsYWNlaG9sZGVyOiAn5Y+v55WZ56m6Jyxcblx0XHR9KTtcblx0XHR0aGlzLmV4cGlyeUlucHV0ID0gbmV3IG13LndpZGdldHMuRXhwaXJ5V2lkZ2V0KHtcblx0XHRcdCRvdmVybGF5OiAkYm9keS5maW5kKCcub28tdWktd2luZG93JyksXG5cdFx0XHRSZWxhdGl2ZUlucHV0Q2xhc3M6IG13LndpZGdldHMuU2VsZWN0V2l0aElucHV0V2lkZ2V0LFxuXHRcdFx0cmVsYXRpdmVJbnB1dDoge1xuXHRcdFx0XHRvcjogdHJ1ZSxcblx0XHRcdFx0ZHJvcGRvd25pbnB1dDoge1xuXHRcdFx0XHRcdG9wdGlvbnM6IFtcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0ZGF0YTogJzEgZGF5Jyxcblx0XHRcdFx0XHRcdFx0bGFiZWw6ICcx5aSpJyxcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdGRhdGE6ICcxIHdlZWsnLFxuXHRcdFx0XHRcdFx0XHRsYWJlbDogJzHlkagnLFxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0ZGF0YTogJzEgbW9udGgnLFxuXHRcdFx0XHRcdFx0XHRsYWJlbDogJzHkuKrmnIgnLFxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0ZGF0YTogJzMgbW9udGhzJyxcblx0XHRcdFx0XHRcdFx0bGFiZWw6ICcz5Liq5pyIJyxcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdGRhdGE6ICc2IG1vbnRocycsXG5cdFx0XHRcdFx0XHRcdGxhYmVsOiAnNuS4quaciCcsXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRkYXRhOiAnMSB5ZWFyJyxcblx0XHRcdFx0XHRcdFx0bGFiZWw6ICcx5bm0Jyxcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdGRhdGE6ICdpbmZpbml0ZScsXG5cdFx0XHRcdFx0XHRcdGxhYmVsOiAn5peg6ZmQ5pyfJyxcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdGRhdGE6ICdvdGhlcicsXG5cdFx0XHRcdFx0XHRcdGxhYmVsOiAn5YW25LuW5pe26Ze0Jyxcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XSxcblx0XHRcdFx0XHR2YWx1ZTogJ2luZmluaXRlJyxcblx0XHRcdFx0fSxcblx0XHRcdFx0dGV4dGlucHV0OiB7XG5cdFx0XHRcdFx0cmVxdWlyZWQ6IHRydWUsXG5cdFx0XHRcdH0sXG5cdFx0XHR9LFxuXHRcdH0pO1xuXHRcdHRoaXMuY2xvc2luZ1JlbWFya3NJbnB1dCA9IG5ldyBPTy51aS5UZXh0SW5wdXRXaWRnZXQoe1xuXHRcdFx0dmFsdWU6ICd7e2RvbmV9feOAgi0tfn4nLmNvbmNhdCgnfn4nKSxcblx0XHR9KTtcblx0XHR0aGlzLndhdGNoVGFsa1BhZ2VDaGVja2JveCA9IG5ldyBPTy51aS5DaGVja2JveElucHV0V2lkZ2V0KHtcblx0XHRcdHNlbGVjdGVkOiBmYWxzZSxcblx0XHR9KTtcblx0XHR0aGlzLmVkaXRGaWVsZHNldC5hZGRJdGVtcyh0aGlzLnJpZ2h0TG9nKTtcblx0XHRjb25zdCBmb3JtRWxlbWVudHMgPSBbXG5cdFx0XHRuZXcgT08udWkuRmllbGRMYXlvdXQodGhpcy5yaWdodHNDaGFuZ2VTdW1tYXJ5SW5wdXQsIHtcblx0XHRcdFx0bGFiZWw6IHdpbmRvdy53Z1VMUygn5o6I5p2D5Y6f5ZugJywgJ+aOiOadg+WOn+WboCcpLFxuXHRcdFx0fSksXG5cdFx0XHRuZXcgT08udWkuRmllbGRMYXlvdXQodGhpcy5leHBpcnlJbnB1dCwge1xuXHRcdFx0XHRsYWJlbDogd2luZG93LndnVUxTKCfnu5PmnZ/ml7bpl7QnLCAn57WQ5p2f5pmC6ZaTJyksXG5cdFx0XHR9KSxcblx0XHRcdG5ldyBPTy51aS5GaWVsZExheW91dCh0aGlzLmNsb3NpbmdSZW1hcmtzSW5wdXQsIHtcblx0XHRcdFx0bGFiZWw6IHdpbmRvdy53Z1VMUygn5YWz6Zet6K+35rGC55WZ6KiAJywgJ+mXnOmWieiri+axgueVmeiogCcpLFxuXHRcdFx0fSksXG5cdFx0XTtcblx0XHRpZiAoZ2V0UGVybWlzc2lvblJlcXVlc3RlZChwZXJtaXNzaW9uKSkge1xuXHRcdFx0Zm9ybUVsZW1lbnRzW2Zvcm1FbGVtZW50cy5sZW5ndGhdID0gbmV3IE9PLnVpLkZpZWxkTGF5b3V0KHRoaXMud2F0Y2hUYWxrUGFnZUNoZWNrYm94LCB7XG5cdFx0XHRcdGxhYmVsOiB3aW5kb3cud2dVTFMoJ+ebkeinhueUqOaIt+iuqOiuuumhtScsICfnm6PoppbnlKjmiLboqI7oq5bpoIEnKSxcblx0XHRcdH0pO1xuXHRcdH1cblx0XHR0aGlzLmVkaXRGaWVsZHNldC5hZGRJdGVtcyhmb3JtRWxlbWVudHMpO1xuXHRcdHRoaXMuc3VibWl0UGFuZWwgPSBuZXcgT08udWkuUGFuZWxMYXlvdXQoe1xuXHRcdFx0JDogdGhpcy4kLFxuXHRcdFx0ZXhwYW5kZWQ6IGZhbHNlLFxuXHRcdH0pO1xuXHRcdHRoaXMuc3VibWl0RmllbGRzZXQgPSBuZXcgT08udWkuRmllbGRzZXRMYXlvdXQoe1xuXHRcdFx0Y2xhc3NlczogWydjb250YWluZXInXSxcblx0XHR9KTtcblx0XHR0aGlzLnN1Ym1pdFBhbmVsLiRlbGVtZW50LmFwcGVuZCh0aGlzLnN1Ym1pdEZpZWxkc2V0LiRlbGVtZW50KTtcblx0XHR0aGlzLmNoYW5nZVJpZ2h0c1Byb2dyZXNzTGFiZWwgPSBuZXcgT08udWkuTGFiZWxXaWRnZXQoKTtcblx0XHR0aGlzLmNoYW5nZVJpZ2h0c1Byb2dyZXNzRmllbGQgPSBuZXcgT08udWkuRmllbGRMYXlvdXQodGhpcy5jaGFuZ2VSaWdodHNQcm9ncmVzc0xhYmVsKTtcblx0XHR0aGlzLm1hcmtBc0RvbmVQcm9ncmVzc0xhYmVsID0gbmV3IE9PLnVpLkxhYmVsV2lkZ2V0KCk7XG5cdFx0dGhpcy5tYXJrQXNEb25lUHJvZ3Jlc3NGaWVsZCA9IG5ldyBPTy51aS5GaWVsZExheW91dCh0aGlzLm1hcmtBc0RvbmVQcm9ncmVzc0xhYmVsKTtcblx0XHR0aGlzLmlzc3VlVGVtcGxhdGVQcm9ncmVzc0xhYmVsID0gbmV3IE9PLnVpLkxhYmVsV2lkZ2V0KCk7XG5cdFx0dGhpcy5pc3N1ZVRlbXBsYXRlUHJvZ3Jlc3NGaWVsZCA9IG5ldyBPTy51aS5GaWVsZExheW91dCh0aGlzLmlzc3VlVGVtcGxhdGVQcm9ncmVzc0xhYmVsKTtcblx0XHR0aGlzLnN0YWNrTGF5b3V0ID0gbmV3IE9PLnVpLlN0YWNrTGF5b3V0KHtcblx0XHRcdGl0ZW1zOiBbdGhpcy5lZGl0UGFuZWwsIHRoaXMuc3VibWl0UGFuZWxdLFxuXHRcdFx0cGFkZGVkOiB0cnVlLFxuXHRcdH0pO1xuXHRcdHRoaXMuJGJvZHkuYXBwZW5kKHRoaXMuc3RhY2tMYXlvdXQuJGVsZW1lbnQpO1xuXHR9O1xuXHREaWFsb2cucHJvdG90eXBlLm9uU3VibWl0ID0gZnVuY3Rpb24gKCkge1xuXHRcdGNvbnN0IHNlbGYgPSB0aGlzO1xuXHRcdGxldCBwcm9taXNlQ291bnQgPSBnZXRQZXJtaXNzaW9uUmVxdWVzdGVkKHBlcm1pc3Npb24pID8gMyA6IDI7XG5cdFx0c2VsZi5hY3Rpb25zLnNldEFiaWxpdGllcyh7XG5cdFx0XHRzdWJtaXQ6IGZhbHNlLFxuXHRcdH0pO1xuXHRcdGNvbnN0IGFkZFByb21pc2UgPSAoeyRmaWVsZH0sIHByb21pc2UpID0+IHtcblx0XHRcdHNlbGYucHVzaFBlbmRpbmcoKTtcblx0XHRcdHByb21pc2Vcblx0XHRcdFx0LmRvbmUoKCkgPT4ge1xuXHRcdFx0XHRcdCRmaWVsZC5hcHBlbmQoXG5cdFx0XHRcdFx0XHQkKCc8c3Bhbj4nKVxuXHRcdFx0XHRcdFx0XHQudGV4dCgn5a6M5oiQ77yBJylcblx0XHRcdFx0XHRcdFx0LnByb3AoJ3N0eWxlJywgJ3Bvc2l0aW9uOiByZWxhdGl2ZTsgdG9wOiAuNWVtOyBjb2xvcjogIzAwOTAwMDsgZm9udC13ZWlnaHQ6IGJvbGQ7Jylcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9KVxuXHRcdFx0XHQuZmFpbCgob2JqKSA9PiB7XG5cdFx0XHRcdFx0aWYgKG9iaiAmJiBvYmouZXJyb3IgJiYgb2JqLmVycm9yLmluZm8pIHtcblx0XHRcdFx0XHRcdCRmaWVsZC5hcHBlbmQoXG5cdFx0XHRcdFx0XHRcdCQoJzxzcGFuPicpXG5cdFx0XHRcdFx0XHRcdFx0LnRleHQoYOmUmeivr++8miR7b2JqLmVycm9yLmluZm99YClcblx0XHRcdFx0XHRcdFx0XHQucHJvcCgnc3R5bGUnLCAncG9zaXRpb246IHJlbGF0aXZlOyB0b3A6IC41ZW07IGNvbG9yOiAjYzAwOyBmb250LXdlaWdodDogYm9sZDsnKVxuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0JGZpZWxkLmFwcGVuZChcblx0XHRcdFx0XHRcdFx0JCgnPHNwYW4+Jylcblx0XHRcdFx0XHRcdFx0XHQudGV4dCgn5Y+R55Sf5pyq55+l6ZSZ6K+v44CCJylcblx0XHRcdFx0XHRcdFx0XHQucHJvcCgnc3R5bGUnLCAncG9zaXRpb246IHJlbGF0aXZlOyB0b3A6IC41ZW07IGNvbG9yOiAjYzAwOyBmb250LXdlaWdodDogYm9sZDsnKVxuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pXG5cdFx0XHRcdC5hbHdheXMoKCkgPT4ge1xuXHRcdFx0XHRcdHByb21pc2VDb3VudC0tOyAvLyBGSVhNRTogbWF5YmUgd2UgY291bGQgdXNlIGEgc2VsZi5pc1BlbmRpbmcoKSBvciBzb21ldGhpbmdcblx0XHRcdFx0XHRzZWxmLnBvcFBlbmRpbmcoKTtcblx0XHRcdFx0XHRpZiAocHJvbWlzZUNvdW50ID09PSAwKSB7XG5cdFx0XHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0XHRcdFx0bG9jYXRpb24ucmVsb2FkKHRydWUpO1xuXHRcdFx0XHRcdFx0fSwgMTAwMCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdHJldHVybiBwcm9taXNlO1xuXHRcdH07XG5cdFx0c2VsZi5tYXJrQXNEb25lUHJvZ3Jlc3NGaWVsZC5zZXRMYWJlbCgn5qCH6K6w6K+35rGC5Li65bey5a6M5oiQLi4uJyk7XG5cdFx0c2VsZi5zdWJtaXRGaWVsZHNldC5hZGRJdGVtcyhbc2VsZi5tYXJrQXNEb25lUHJvZ3Jlc3NGaWVsZF0pO1xuXHRcdHNlbGYuY2hhbmdlUmlnaHRzUHJvZ3Jlc3NGaWVsZC5zZXRMYWJlbCgn5o6I5LqI5p2D6ZmQLi4uJyk7XG5cdFx0c2VsZi5zdWJtaXRGaWVsZHNldC5hZGRJdGVtcyhbc2VsZi5jaGFuZ2VSaWdodHNQcm9ncmVzc0ZpZWxkXSk7XG5cdFx0aWYgKGdldFBlcm1pc3Npb25SZXF1ZXN0ZWQocGVybWlzc2lvbikpIHtcblx0XHRcdHNlbGYuaXNzdWVUZW1wbGF0ZVByb2dyZXNzRmllbGQuc2V0TGFiZWwoJ+WPkemAgemAmuefpS4uLicpO1xuXHRcdFx0c2VsZi5zdWJtaXRGaWVsZHNldC5hZGRJdGVtcyhbc2VsZi5pc3N1ZVRlbXBsYXRlUHJvZ3Jlc3NGaWVsZF0pO1xuXHRcdH1cblx0XHRhZGRQcm9taXNlKFxuXHRcdFx0c2VsZi5tYXJrQXNEb25lUHJvZ3Jlc3NGaWVsZCxcblx0XHRcdG1hcmtBc0RvbmUodXNlck5hbWUsIGluZGV4LCBgXFxuOiR7dGhpcy5jbG9zaW5nUmVtYXJrc0lucHV0LmdldFZhbHVlKCl9YClcblx0XHQpLnRoZW4oKHtlZGl0fSkgPT4ge1xuXHRcdFx0YWRkUHJvbWlzZShcblx0XHRcdFx0c2VsZi5jaGFuZ2VSaWdodHNQcm9ncmVzc0ZpZWxkLFxuXHRcdFx0XHRhc3NpZ25QZXJtaXNzaW9uKFxuXHRcdFx0XHRcdHVzZXJOYW1lLFxuXHRcdFx0XHRcdHBlcm1pc3Npb24sXG5cdFx0XHRcdFx0dGhpcy5yaWdodHNDaGFuZ2VTdW1tYXJ5SW5wdXQuZ2V0VmFsdWUoKSxcblx0XHRcdFx0XHRlZGl0Lm5ld3JldmlkLFxuXHRcdFx0XHRcdHRoaXMuZXhwaXJ5SW5wdXQuZ2V0VmFsdWUoKVxuXHRcdFx0XHQpXG5cdFx0XHQpLnRoZW4oKCkgPT4ge1xuXHRcdFx0XHRpZiAoZ2V0UGVybWlzc2lvblJlcXVlc3RlZChwZXJtaXNzaW9uKSkge1xuXHRcdFx0XHRcdGFkZFByb21pc2UoXG5cdFx0XHRcdFx0XHRzZWxmLmlzc3VlVGVtcGxhdGVQcm9ncmVzc0ZpZWxkLFxuXHRcdFx0XHRcdFx0aXNzdWVUZW1wbGF0ZSh1c2VyTmFtZSwgcGVybWlzc2lvbiwgdGhpcy53YXRjaFRhbGtQYWdlQ2hlY2tib3guaXNTZWxlY3RlZCgpKVxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH0pO1xuXHRcdHNlbGYuc3RhY2tMYXlvdXQuc2V0SXRlbShzZWxmLnN1Ym1pdFBhbmVsKTtcblx0fTtcblx0RGlhbG9nLnByb3RvdHlwZS5nZXRBY3Rpb25Qcm9jZXNzID0gZnVuY3Rpb24gKGFjdGlvbikge1xuXHRcdHJldHVybiBEaWFsb2cuc3VwZXIucHJvdG90eXBlLmdldEFjdGlvblByb2Nlc3MuY2FsbCh0aGlzLCBhY3Rpb24pLm5leHQoZnVuY3Rpb24gKCkge1xuXHRcdFx0aWYgKGFjdGlvbiA9PT0gJ3N1Ym1pdCcpIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMub25TdWJtaXQoKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBEaWFsb2cuc3VwZXIucHJvdG90eXBlLmdldEFjdGlvblByb2Nlc3MuY2FsbCh0aGlzLCBhY3Rpb24pO1xuXHRcdH0sIHRoaXMpO1xuXHR9O1xuXHRjb25zdCBkaWFsb2cgPSBuZXcgRGlhbG9nKHtcblx0XHRzaXplOiAnbWVkaXVtJyxcblx0fSk7XG5cdGNvbnN0IHdpbmRvd01hbmFnZXIgPSBuZXcgT08udWkuV2luZG93TWFuYWdlcigpO1xuXHQkYm9keS5hcHBlbmQod2luZG93TWFuYWdlci4kZWxlbWVudCk7XG5cdHdpbmRvd01hbmFnZXIuYWRkV2luZG93cyhbZGlhbG9nXSk7XG5cdHZvaWQgd2luZG93TWFuYWdlci5vcGVuV2luZG93KGRpYWxvZyk7XG59O1xuXG5leHBvcnQge3Nob3dEaWFsb2d9O1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEscUJBQXNCQyxRQUFBLGlCQUFB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dUcsUUFBUSxJQUFJLEVBQUVDLEtBQUssSUFBSSxFQUFFMUssS0FBSyxjQUFjLEVBQUV5RSxLQUFLLElBQUksT0FBQSxRQUFBNEYsMEJBQUEsU0FBQUEsd0JBQUs7QUFDL0YsVUFBTXBMLFFBQ0x1TCxjQUFBLFFBQUF4TSxPQUFzQkUsUUFBUSxLQUFNc00sY0FBYyxRQUFBeE0sT0FBUUUsUUFBUSxFQUFHVSxRQUFRLE1BQU0sS0FBSyxFQUFFQSxRQUFRLE1BQU0sR0FBRyxJQUN4RyxLQUNBNEwsVUFDQzVMLFFBQVEsU0FBUyxFQUFFLEVBQ25CQSxRQUFRVixVQUFVLEVBQUUsRUFDcEJVLFFBQVFWLFNBQVNVLFFBQVEsTUFBTSxLQUFLLEVBQUVBLFFBQVEsTUFBTSxHQUFHLEdBQUcsRUFBRTtBQUVqRTBELGVBQVc7TUFDVnJEO01BQ0FmO01BQ0FDO01BQ0FvRTtJQUNELENBQUM7RUFDRixDQUFDO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFsiaW1wb3J0X2V4dF9nYWRnZXQyIiwgInJlcXVpcmUiLCAiZ2V0UGVybWlzc2lvbk5hbWVzIiwgInBhdHJvbGxlciIsICJhdXRvcmV2aWV3ZXIiLCAiY29uZmlybWVkIiwgImV2ZW50c3BvbnNvciIsICJ0cmFuc3dpa2kiLCAidGVtcGxhdGVlZGl0b3IiLCAiYm90IiwgInBlcm1pc3Npb25OYW1lcyIsICJnZXRQZXJtaXNzb25OYW1lIiwgImtleSIsICJnZXRQZXJtaXNzaW9uQnlQYWdlIiwgInBlcm1pc3Npb25SZXF1ZXN0ZWQiLCAiZ2V0UGVybWlzc2lvblJlcXVlc3RlZCIsICJnZXRQZXJtaXNzaW9uVGVtcGxhdGVzIiwgInBlcm1pc3Npb25UZW1wbGF0ZSIsICJnZXRwZXJtaXNzaW9uVGVtcGxhdGUiLCAidXNlclJpZ2h0c01hbmFnZXJTdW1tYXJ5IiwgInZlcnNpb24iLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAiYXBpIiwgImluaXRNd0FwaSIsICJjb25jYXQiLCAiYXNzaWduUGVybWlzc2lvbiIsICJ1c2VyTmFtZSIsICJwZXJtaXNzaW9uIiwgInN1bW1hcnkiLCAicmV2SWQiLCAiZXhwaXJ5IiwgInBlcm1hTGluayIsICJmdWxsU3VtbWFyeSIsICJwYXJhbXMiLCAiYWN0aW9uIiwgInVzZXIiLCAicmVwbGFjZSIsICJhZGQiLCAicmVhc29uIiwgInBvc3RXaXRoVG9rZW4iLCAibWFya0FzRG9uZSIsICJpbmRleCIsICJjbG9zaW5nUmVtYXJrcyIsICJ3Z1BhZ2VOYW1lIiwgIm13IiwgImNvbmZpZyIsICJnZXQiLCAic2VjdGlvblNlbGVjdG9yIiwgIkNTUyIsICJlc2NhcGUiLCAic2VjdGlvbk5vZGUiLCAiZG9jdW1lbnQiLCAicXVlcnlTZWxlY3RvciIsICJzZWN0aW9uTnVtYmVyIiwgIiQiLCAic2libGluZ3MiLCAiZmluZCIsICJwcm9wIiwgIm1hdGNoIiwgImJhc2V0aW1lc3RhbXAiLCAiY3VydGltZXN0YW1wIiwgInBhZ2UiLCAicmV2aXNpb24iLCAiY29udGVudCIsICJxdWVyeVBhcmFtcyIsICJmb3JtYXQiLCAiZm9ybWF0dmVyc2lvbiIsICJ0aXRsZXMiLCAicnZwcm9wIiwgInJ2c2VjdGlvbiIsICJ0aGVuIiwgImRhdGEiLCAicXVlcnkiLCAicGFnZXMiLCAiRGVmZXJyZWQiLCAicmVqZWN0IiwgImludmFsaWQiLCAibWlzc2luZyIsICJyZXZpc2lvbnMiLCAidGltZXN0YW1wIiwgInRyaW0iLCAiZWRpdFBhcmFtcyIsICJ0aXRsZSIsICJhc3NlcnQiLCAibm9jcmVhdGUiLCAic2VjdGlvbiIsICJzdGFydHRpbWVzdGFtcCIsICJ0ZXh0IiwgInBvc3RXaXRoRWRpdFRva2VuIiwgImlzc3VlVGVtcGxhdGUiLCAid2F0Y2giLCAidGFsa1BhZ2UiLCAiYXBwZW5kdGV4dCIsICJ3YXRjaGxpc3QiLCAic2hvd0RpYWxvZyIsICIkYm9keSIsICJEaWFsb2ciLCAic3VwZXIiLCAiY2FsbCIsICJPTyIsICJpbmhlcml0Q2xhc3MiLCAidWkiLCAiUHJvY2Vzc0RpYWxvZyIsICJzdGF0aWMiLCAibmFtZSIsICJ3aW5kb3ciLCAid2dVTFMiLCAiYWN0aW9ucyIsICJsYWJlbCIsICJmbGFncyIsICJwcm90b3R5cGUiLCAiZ2V0QXBpTWFuYWdlciIsICJhcGlNYW5hZ2VyIiwgImdldEJvZHlIZWlnaHQiLCAiaW5pdGlhbGl6ZSIsICJfYXN5bmNUb0dlbmVyYXRvciIsICJlZGl0RmllbGRzZXQiLCAiRmllbGRzZXRMYXlvdXQiLCAiY2xhc3NlcyIsICJlZGl0UGFuZWwiLCAiUGFuZWxMYXlvdXQiLCAiZXhwYW5kZWQiLCAiJGVsZW1lbnQiLCAiYXBwZW5kIiwgInJpZ2h0TG9nV2FwcGVyIiwgInVybCIsICJ1dGlsIiwgImdldFVybCIsICJ0eXBlIiwgImF0dHIiLCAiaHJlZiIsICJ0YXJnZXQiLCAiYXBwZW5kVG8iLCAicmlnaHRMb2dUZXh0IiwgInJpZ2h0TG9nIiwgIkxhYmVsV2lkZ2V0IiwgImxlYWN0aW9uIiwgImxlbGltaXQiLCAibGV0aXRsZSIsICJsaXN0IiwgImxvZ3MiLCAibG9nZXZlbnRzIiwgImxlbmd0aCIsICJNb3JlYml0cyIsICJkYXRlIiwgImNhbGVuZGFyIiwgInJpZ2h0cyIsICJuZXdncm91cHMiLCAiam9pbiIsICJyaWdodHNDaGFuZ2VTdW1tYXJ5SW5wdXQiLCAiVGV4dElucHV0V2lkZ2V0IiwgInZhbHVlIiwgInBsYWNlaG9sZGVyIiwgImV4cGlyeUlucHV0IiwgIndpZGdldHMiLCAiRXhwaXJ5V2lkZ2V0IiwgIiRvdmVybGF5IiwgIlJlbGF0aXZlSW5wdXRDbGFzcyIsICJTZWxlY3RXaXRoSW5wdXRXaWRnZXQiLCAicmVsYXRpdmVJbnB1dCIsICJvciIsICJkcm9wZG93bmlucHV0IiwgIm9wdGlvbnMiLCAidGV4dGlucHV0IiwgInJlcXVpcmVkIiwgImNsb3NpbmdSZW1hcmtzSW5wdXQiLCAid2F0Y2hUYWxrUGFnZUNoZWNrYm94IiwgIkNoZWNrYm94SW5wdXRXaWRnZXQiLCAic2VsZWN0ZWQiLCAiYWRkSXRlbXMiLCAiZm9ybUVsZW1lbnRzIiwgIkZpZWxkTGF5b3V0IiwgInN1Ym1pdFBhbmVsIiwgInN1Ym1pdEZpZWxkc2V0IiwgImNoYW5nZVJpZ2h0c1Byb2dyZXNzTGFiZWwiLCAiY2hhbmdlUmlnaHRzUHJvZ3Jlc3NGaWVsZCIsICJtYXJrQXNEb25lUHJvZ3Jlc3NMYWJlbCIsICJtYXJrQXNEb25lUHJvZ3Jlc3NGaWVsZCIsICJpc3N1ZVRlbXBsYXRlUHJvZ3Jlc3NMYWJlbCIsICJpc3N1ZVRlbXBsYXRlUHJvZ3Jlc3NGaWVsZCIsICJzdGFja0xheW91dCIsICJTdGFja0xheW91dCIsICJpdGVtcyIsICJwYWRkZWQiLCAib25TdWJtaXQiLCAic2VsZiIsICJwcm9taXNlQ291bnQiLCAic2V0QWJpbGl0aWVzIiwgInN1Ym1pdCIsICJhZGRQcm9taXNlIiwgIiRmaWVsZCIsICJwcm9taXNlIiwgInB1c2hQZW5kaW5nIiwgImRvbmUiLCAiZmFpbCIsICJvYmoiLCAiZXJyb3IiLCAiaW5mbyIsICJhbHdheXMiLCAicG9wUGVuZGluZyIsICJzZXRUaW1lb3V0IiwgImxvY2F0aW9uIiwgInJlbG9hZCIsICJzZXRMYWJlbCIsICJnZXRWYWx1ZSIsICJlZGl0IiwgIm5ld3JldmlkIiwgImlzU2VsZWN0ZWQiLCAic2V0SXRlbSIsICJnZXRBY3Rpb25Qcm9jZXNzIiwgIm5leHQiLCAiZGlhbG9nIiwgInNpemUiLCAid2luZG93TWFuYWdlciIsICJXaW5kb3dNYW5hZ2VyIiwgImFkZFdpbmRvd3MiLCAib3BlbldpbmRvdyIsICJnZXRCb2R5IiwgIm9uIiwgImV2ZW50IiwgIl9tdyR1dGlsJGdldFBhcmFtVmFsdSIsICJfJGVsZW1lbnQkcGFyZW50cyRwcmUiLCAicHJldmVudERlZmF1bHQiLCAiZ2V0UGFyYW1WYWx1ZSIsICJzZWN0aW9uSWQiLCAicGFyZW50cyIsICJwcmV2Il0KfQo=

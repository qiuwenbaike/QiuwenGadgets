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
    patroller: "Patrolgranted",
    autoreviewer: "Autopatrolgranted",
    "massmessage-sender": "MMSgranted",
    templateeditor: "Template editor granted"
  };
};
var permissionTemplate = getPermissionTemplates();
var getpermissionTemplate = (key) => {
  return permissionTemplate[key] || key;
};
//! src/UserRightsManager/modules/constant.ts
var SUMMARY = " ([[MediaWiki:Gadget-UserRightsManager.js|UserRightsManager]])";
//! src/UserRightsManager/options.json
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
  fullSummary += SUMMARY;
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
      summary: "/* User:".concat(userName, " */ 完成").concat(SUMMARY),
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
    summary: "根据共识授予".concat(getPermissonName(permission)).concat(SUMMARY),
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1VzZXJSaWdodHNNYW5hZ2VyL1VzZXJSaWdodHNNYW5hZ2VyLnRzIiwgInNyYy9Vc2VyUmlnaHRzTWFuYWdlci9tb2R1bGVzL2kxOG4udHMiLCAic3JjL1VzZXJSaWdodHNNYW5hZ2VyL21vZHVsZXMvY29uc3RhbnQudHMiLCAic3JjL1VzZXJSaWdodHNNYW5hZ2VyL29wdGlvbnMuanNvbiIsICJzcmMvVXNlclJpZ2h0c01hbmFnZXIvbW9kdWxlcy9hcGkudHMiLCAic3JjL1VzZXJSaWdodHNNYW5hZ2VyL21vZHVsZXMvY29yZS5qcyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHtnZXRCb2R5fSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuaW1wb3J0IHtnZXRQZXJtaXNzaW9uUmVxdWVzdGVkfSBmcm9tICcuL21vZHVsZXMvaTE4bic7XG5pbXBvcnQge3Nob3dEaWFsb2d9IGZyb20gJy4vbW9kdWxlcy9jb3JlLmpzJztcblxudm9pZCBnZXRCb2R5KCkudGhlbigoJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KTogdm9pZCA9PiB7XG5cdGNvbnN0IHt3Z1BhZ2VOYW1lfSA9IG13LmNvbmZpZy5nZXQoKTtcblxuXHRpZiAoIWdldFBlcm1pc3Npb25SZXF1ZXN0ZWQod2dQYWdlTmFtZSkgfHwgZ2V0UGVybWlzc2lvblJlcXVlc3RlZCh3Z1BhZ2VOYW1lKSA9PT0gd2dQYWdlTmFtZSkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IHBlcm1pc3Npb246IHN0cmluZyB8IHVuZGVmaW5lZCA9IGdldFBlcm1pc3Npb25SZXF1ZXN0ZWQod2dQYWdlTmFtZSk7XG5cblx0aWYgKHBlcm1pc3Npb24gPT09ICdBdXRvV2lraUJyb3dzZXInKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0JGJvZHkuZmluZCgnLnBlcm0tYXNzaWduLXBlcm1pc3Npb25zIGEnKS5vbignY2xpY2snLCAoZXZlbnQ6IEpRdWVyeS5DbGlja0V2ZW50KTogdm9pZCA9PiB7XG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuXHRcdGNvbnN0ICRlbGVtZW50OiBKUXVlcnk8SFRNTEFuY2hvckVsZW1lbnQ+ID0gJChldmVudC50YXJnZXQgYXMgSFRNTEFuY2hvckVsZW1lbnQpO1xuXG5cdFx0Y29uc3QgdXNlck5hbWU6IHN0cmluZyA9IG13LnV0aWwuZ2V0UGFyYW1WYWx1ZSgndXNlcicsICRlbGVtZW50LmF0dHIoJ2hyZWYnKSkgPz8gJyc7XG5cdFx0Y29uc3Qgc2VjdGlvbklkOiBzdHJpbmcgPSAkZWxlbWVudC5wYXJlbnRzKCdkbCcpLnByZXYoJ2g0JykuZmluZCgnLm13LWhlYWRsaW5lJykuYXR0cignaWQnKSA/PyAnJztcblx0XHRjb25zdCBpbmRleDogc3RyaW5nID1cblx0XHRcdHNlY3Rpb25JZCA9PT0gYFVzZXI6JHt1c2VyTmFtZX1gIHx8IHNlY3Rpb25JZCA9PT0gYFVzZXI6JHt1c2VyTmFtZX1gLnJlcGxhY2UoL1wiL2csICcuMjInKS5yZXBsYWNlKC8gL2csICdfJylcblx0XHRcdFx0PyAnJ1xuXHRcdFx0XHQ6IHNlY3Rpb25JZFxuXHRcdFx0XHRcdFx0LnJlcGxhY2UoJ1VzZXI6JywgJycpXG5cdFx0XHRcdFx0XHQucmVwbGFjZSh1c2VyTmFtZSwgJycpXG5cdFx0XHRcdFx0XHQucmVwbGFjZSh1c2VyTmFtZS5yZXBsYWNlKC9cIi9nLCAnLjIyJykucmVwbGFjZSgvIC9nLCAnXycpLCAnJyk7XG5cblx0XHRzaG93RGlhbG9nKHtcblx0XHRcdGluZGV4LFxuXHRcdFx0dXNlck5hbWUsXG5cdFx0XHRwZXJtaXNzaW9uLFxuXHRcdFx0JGJvZHksXG5cdFx0fSk7XG5cdH0pO1xufSk7XG4iLCAiaW1wb3J0IHR5cGUge1VzZXJSaWdodHN9IGZyb20gJ34vTWFya1JpZ2h0cy9tb2R1bGVzL3R5cGVzJztcblxuY29uc3QgZ2V0UGVybWlzc2lvbk5hbWVzID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdHBhdHJvbGxlcjogJ+W3oeafpeWRmCcsXG5cdFx0YXV0b3Jldmlld2VyOiAn5beh5p+l6LGB5YWN6ICFJyxcblx0XHRjb25maXJtZWQ6ICfnoa7orqTnlKjmiLcnLFxuXHRcdCdtYXNzbWVzc2FnZS1zZW5kZXInOiAn5aSn6YeP5raI5oGv5Y+R6YCB6ICFJyxcblx0XHRldmVudHNwb25zb3I6ICfmtLvliqjnu4Tnu4fogIUnLFxuXHRcdHRyYW5zd2lraTogJ+WvvOWFpeiAhScsXG5cdFx0dGVtcGxhdGVlZGl0b3I6ICfmqKHmnb/nvJbovpHlkZgnLFxuXHRcdGJvdDogJ+acuuWZqOS6uicsXG5cdFx0J3JucnN2ZXJpZnktZXhlbXB0JzogJ+WunuWQjeWItumqjOivgeixgeWFjScsXG5cdH0gYXMgY29uc3Qgc2F0aXNmaWVzIFBhcnRpYWw8UmVjb3JkPFVzZXJSaWdodHMsIHN0cmluZz4+O1xufTtcblxuY29uc3QgcGVybWlzc2lvbk5hbWVzID0gZ2V0UGVybWlzc2lvbk5hbWVzKCk7XG5cbmNvbnN0IGdldFBlcm1pc3Nvbk5hbWU6IEdldE1lc3NhZ2VzPHR5cGVvZiBwZXJtaXNzaW9uTmFtZXM+ID0gKGtleSkgPT4ge1xuXHRyZXR1cm4gcGVybWlzc2lvbk5hbWVzW2tleV0gfHwga2V5O1xufTtcblxuY29uc3QgZ2V0UGVybWlzc2lvbkJ5UGFnZSA9ICgpID0+IHtcblx0cmV0dXJuIHtcblx0XHQnUWl1d2VuX3RhbGs65p2D6ZmQ55Sz6K+3L+eUs+ivt+W3oeafpeWbnumAgOadgyc6ICdwYXRyb2xsZXInLFxuXHRcdCdRaXV3ZW5fdGFsazrmnYPpmZDnlLPor7cv55Sz6K+35beh5p+l6LGB5YWN5p2DJzogJ2F1dG9yZXZpZXdlcicsXG5cdFx0J1FpdXdlbl90YWxrOuadg+mZkOeUs+ivty/nlLPor7fnoa7orqTnlKjmiLfmnYMnOiAnY29uZmlybWVkJyxcblx0XHQnUWl1d2VuX3RhbGs65p2D6ZmQ55Sz6K+3L+eUs+ivt+Wkp+mHj+a2iOaBr+WPkemAgeadgyc6ICdtYXNzbWVzc2FnZS1zZW5kZXInLFxuXHRcdCdRaXV3ZW5fdGFsazrmnYPpmZDnlLPor7cv55Sz6K+35rS75Yqo57uE57uH5p2DJzogJ2V2ZW50c3BvbnNvcicsXG5cdFx0J1FpdXdlbl90YWxrOuadg+mZkOeUs+ivty/nlLPor7flr7zlhaXmnYMnOiAndHJhbnN3aWtpJyxcblx0XHQnUWl1d2VuX3RhbGs65p2D6ZmQ55Sz6K+3L+eUs+ivt+aooeadv+e8lui+keadgyc6ICd0ZW1wbGF0ZWVkaXRvcicsXG5cdFx0J1FpdXdlbl90YWxrOuadg+mZkOeUs+ivty/nlLPor7fmnLrlmajkurrmnYPpmZAnOiAnYm90Jyxcblx0XHQnUWl1d2VuX3RhbGs65p2D6ZmQ55Sz6K+3L+eUs+ivt+WunuWQjeWItumqjOivgeixgeWFjSc6ICdybnJzdmVyaWZ5LWV4ZW1wdCcsXG5cdH0gYXMgUmVjb3JkPHN0cmluZywgVXNlclJpZ2h0cz47XG59O1xuXG5jb25zdCBwZXJtaXNzaW9uUmVxdWVzdGVkID0gZ2V0UGVybWlzc2lvbkJ5UGFnZSgpO1xuXG5jb25zdCBnZXRQZXJtaXNzaW9uUmVxdWVzdGVkOiBHZXRNZXNzYWdlczx0eXBlb2YgcGVybWlzc2lvblJlcXVlc3RlZD4gPSAoa2V5KSA9PiB7XG5cdHJldHVybiBwZXJtaXNzaW9uUmVxdWVzdGVkW2tleV0gfHwga2V5O1xufTtcblxuY29uc3QgZ2V0UGVybWlzc2lvblRlbXBsYXRlcyA9ICgpID0+IHtcblx0cmV0dXJuIHtcblx0XHRwYXRyb2xsZXI6ICdQYXRyb2xncmFudGVkJyxcblx0XHRhdXRvcmV2aWV3ZXI6ICdBdXRvcGF0cm9sZ3JhbnRlZCcsXG5cdFx0J21hc3NtZXNzYWdlLXNlbmRlcic6ICdNTVNncmFudGVkJyxcblx0XHR0ZW1wbGF0ZWVkaXRvcjogJ1RlbXBsYXRlIGVkaXRvciBncmFudGVkJyxcblx0fSBhcyBjb25zdCBzYXRpc2ZpZXMgUGFydGlhbDxSZWNvcmQ8VXNlclJpZ2h0cywgc3RyaW5nPj47XG59O1xuXG5jb25zdCBwZXJtaXNzaW9uVGVtcGxhdGUgPSBnZXRQZXJtaXNzaW9uVGVtcGxhdGVzKCk7XG5cbmNvbnN0IGdldHBlcm1pc3Npb25UZW1wbGF0ZTogR2V0TWVzc2FnZXM8dHlwZW9mIHBlcm1pc3Npb25UZW1wbGF0ZT4gPSAoa2V5KSA9PiB7XG5cdHJldHVybiBwZXJtaXNzaW9uVGVtcGxhdGVba2V5XSB8fCBrZXk7XG59O1xuXG5leHBvcnQge2dldFBlcm1pc3Nvbk5hbWUsIGdldFBlcm1pc3Npb25SZXF1ZXN0ZWQsIGdldHBlcm1pc3Npb25UZW1wbGF0ZX07XG4iLCAiY29uc3QgU1VNTUFSWTogc3RyaW5nID0gJyAoW1tNZWRpYVdpa2k6R2FkZ2V0LVVzZXJSaWdodHNNYW5hZ2VyLmpzfFVzZXJSaWdodHNNYW5hZ2VyXV0pJztcblxuZXhwb3J0IHtTVU1NQVJZfTtcbiIsICJ7XG5cdFwidmVyc2lvblwiOiBcIjIuMFwiXG59XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtpbml0TXdBcGl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmNvbnN0IGFwaTogbXcuQXBpID0gaW5pdE13QXBpKGBtb3JlYml0cy5qczsgVXNlclJpZ2h0c01hbmFnZXIvJHtPUFRJT05TLnZlcnNpb259YCk7XG5cbmV4cG9ydCB7YXBpfTtcbiIsICIvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10cy1jb21tZW50XG4vLyBAdHMtbm9jaGVja1xuaW1wb3J0IHtnZXRQZXJtaXNzaW9uUmVxdWVzdGVkLCBnZXRQZXJtaXNzb25OYW1lLCBnZXRwZXJtaXNzaW9uVGVtcGxhdGV9IGZyb20gJy4vaTE4bic7XG5pbXBvcnQge1NVTU1BUll9IGZyb20gJy4vY29uc3RhbnQnO1xuaW1wb3J0IHthcGl9IGZyb20gJy4vYXBpJztcblxuY29uc3QgYXNzaWduUGVybWlzc2lvbiA9ICh1c2VyTmFtZSwgcGVybWlzc2lvbiwgc3VtbWFyeSwgcmV2SWQsIGV4cGlyeSkgPT4ge1xuXHRjb25zdCBwZXJtYUxpbmsgPSBgW1tTcGVjaWFsOlBlcm1hTGluay8ke3JldklkfSNVc2VyOiR7dXNlck5hbWV9fOadg+mZkOeUs+ivt11dYDtcblx0bGV0IGZ1bGxTdW1tYXJ5ID0gYCske2dldFBlcm1pc3Nvbk5hbWUocGVybWlzc2lvbil977ybJHtwZXJtYUxpbmt9YDtcblx0aWYgKHN1bW1hcnkgIT09ICcnKSB7XG5cdFx0ZnVsbFN1bW1hcnkgKz0gYO+8myR7c3VtbWFyeX1gO1xuXHR9XG5cdGZ1bGxTdW1tYXJ5ICs9IFNVTU1BUlk7XG5cdGNvbnN0IHBhcmFtcyA9IHtcblx0XHRhY3Rpb246ICd1c2VycmlnaHRzJyxcblx0XHR1c2VyOiB1c2VyTmFtZS5yZXBsYWNlKC8gL2csICdfJyksXG5cdFx0YWRkOiBwZXJtaXNzaW9uLFxuXHRcdGV4cGlyeTogZXhwaXJ5ID09PSAnJyA/ICdpbmZpbml0eScgOiBleHBpcnksXG5cdFx0cmVhc29uOiBmdWxsU3VtbWFyeSxcblx0fTtcblx0cmV0dXJuIGFwaS5wb3N0V2l0aFRva2VuKCd1c2VycmlnaHRzJywgcGFyYW1zKTtcbn07XG5cbmNvbnN0IG1hcmtBc0RvbmUgPSAodXNlck5hbWUsIGluZGV4LCBjbG9zaW5nUmVtYXJrcykgPT4ge1xuXHRjb25zdCB7d2dQYWdlTmFtZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cdGNvbnN0IHNlY3Rpb25TZWxlY3RvciA9IGAjJHtDU1MuZXNjYXBlKGBVc2VyOiR7dXNlck5hbWUucmVwbGFjZSgvXCIvZywgJy4yMicpLnJlcGxhY2UoLyAvZywgJ18nKX1gKX0ke2luZGV4ID8/ICcnfWA7XG5cdGNvbnN0IHNlY3Rpb25Ob2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWN0aW9uU2VsZWN0b3IpO1xuXHRjb25zdCBbLCBzZWN0aW9uTnVtYmVyXSA9ICQoc2VjdGlvbk5vZGUpXG5cdFx0LnNpYmxpbmdzKCcubXctZWRpdHNlY3Rpb24nKVxuXHRcdC5maW5kKCdhOm5vdCgubXctZWRpdHNlY3Rpb24tdmlzdWFsZWRpdG9yKScpXG5cdFx0LnByb3AoJ2hyZWYnKVxuXHRcdC5tYXRjaCgvc2VjdGlvbj0oXFxkKykvKTtcblx0bGV0IGJhc2V0aW1lc3RhbXA7XG5cdGxldCBjdXJ0aW1lc3RhbXA7XG5cdGxldCBwYWdlO1xuXHRsZXQgcmV2aXNpb247XG5cdGxldCBjb250ZW50O1xuXHRjb25zdCBxdWVyeVBhcmFtcyA9IHtcblx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdHByb3A6ICdyZXZpc2lvbnMnLFxuXHRcdHRpdGxlczogW3dnUGFnZU5hbWVdLFxuXHRcdGN1cnRpbWVzdGFtcDogdHJ1ZSxcblx0XHRydnByb3A6IFsnY29udGVudCcsICd0aW1lc3RhbXAnXSxcblx0XHRydnNlY3Rpb246IHNlY3Rpb25OdW1iZXIsXG5cdH07XG5cdHJldHVybiBhcGlcblx0XHQuZ2V0KHF1ZXJ5UGFyYW1zKVxuXHRcdC50aGVuKChkYXRhKSA9PiB7XG5cdFx0XHRpZiAoIWRhdGEucXVlcnkgfHwgIWRhdGEucXVlcnkucGFnZXMpIHtcblx0XHRcdFx0cmV0dXJuICQuRGVmZXJyZWQoKS5yZWplY3QoJ3Vua25vd24nKTtcblx0XHRcdH1cblx0XHRcdFtwYWdlXSA9IGRhdGEucXVlcnkucGFnZXM7XG5cdFx0XHRpZiAoIXBhZ2UgfHwgcGFnZS5pbnZhbGlkKSB7XG5cdFx0XHRcdHJldHVybiAkLkRlZmVycmVkKCkucmVqZWN0KCdpbnZhbGlkdGl0bGUnKTtcblx0XHRcdH1cblx0XHRcdGlmIChwYWdlLm1pc3NpbmcpIHtcblx0XHRcdFx0cmV0dXJuICQuRGVmZXJyZWQoKS5yZWplY3QoJ25vY3JlYXRlLW1pc3NpbmcnKTtcblx0XHRcdH1cblx0XHRcdFtyZXZpc2lvbl0gPSBwYWdlLnJldmlzaW9ucztcblx0XHRcdGJhc2V0aW1lc3RhbXAgPSByZXZpc2lvbi50aW1lc3RhbXA7XG5cdFx0XHQoe2N1cnRpbWVzdGFtcH0gPSBkYXRhKTtcblx0XHRcdCh7Y29udGVudH0gPSByZXZpc2lvbik7XG5cdFx0fSlcblx0XHQudGhlbigoKSA9PiB7XG5cdFx0XHRjb250ZW50ID0gY29udGVudC50cmltKCk7XG5cdFx0XHRjb250ZW50ID0gY29udGVudC5yZXBsYWNlKC86e3tzdGF0dXMoXFx8Lio/KT99fS9pLCAnOnt7U3RhdHVzfCt9fScpO1xuXHRcdFx0Y29udGVudCArPSBjbG9zaW5nUmVtYXJrcztcblx0XHRcdGNvbnN0IGVkaXRQYXJhbXMgPSB7XG5cdFx0XHRcdGFjdGlvbjogJ2VkaXQnLFxuXHRcdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdFx0XHR0aXRsZTogd2dQYWdlTmFtZSxcblx0XHRcdFx0YXNzZXJ0OiBtdy5jb25maWcuZ2V0KCd3Z1VzZXJOYW1lJykgPyAndXNlcicgOiB1bmRlZmluZWQsXG5cdFx0XHRcdG5vY3JlYXRlOiB0cnVlLFxuXHRcdFx0XHRzZWN0aW9uOiBzZWN0aW9uTnVtYmVyLFxuXHRcdFx0XHRzdGFydHRpbWVzdGFtcDogY3VydGltZXN0YW1wLFxuXHRcdFx0XHRzdW1tYXJ5OiBgLyogVXNlcjoke3VzZXJOYW1lfSAqLyDlrozmiJAke1NVTU1BUll9YCxcblx0XHRcdFx0dGV4dDogY29udGVudCxcblx0XHRcdFx0YmFzZXRpbWVzdGFtcCxcblx0XHRcdH07XG5cdFx0XHRyZXR1cm4gYXBpLnBvc3RXaXRoRWRpdFRva2VuKGVkaXRQYXJhbXMpO1xuXHRcdH0pO1xufTtcblxuY29uc3QgaXNzdWVUZW1wbGF0ZSA9ICh1c2VyTmFtZSwgcGVybWlzc2lvbiwgd2F0Y2gpID0+IHtcblx0Y29uc3QgdGFsa1BhZ2UgPSBgVXNlciB0YWxrOiR7dXNlck5hbWUucmVwbGFjZSgvIC9nLCAnXycpfWA7XG5cdGNvbnN0IHBhcmFtcyA9IHtcblx0XHRhY3Rpb246ICdlZGl0Jyxcblx0XHR0aXRsZTogdGFsa1BhZ2UsXG5cdFx0YXBwZW5kdGV4dDogJ1xcblxcbnt7Jy5jb25jYXQoJ3N1YnN0OicsIGdldHBlcm1pc3Npb25UZW1wbGF0ZShwZXJtaXNzaW9uKSwgJ319fScpLFxuXHRcdHN1bW1hcnk6IGDmoLnmja7lhbHor4bmjojkuogke2dldFBlcm1pc3Nvbk5hbWUocGVybWlzc2lvbil9JHtTVU1NQVJZfWAsXG5cdFx0d2F0Y2hsaXN0OiB3YXRjaCA/ICd3YXRjaCcgOiAndW53YXRjaCcsXG5cdH07XG5cdHJldHVybiBhcGkucG9zdFdpdGhFZGl0VG9rZW4ocGFyYW1zKTtcbn07XG5cbmNvbnN0IHNob3dEaWFsb2cgPSAoe3VzZXJOYW1lLCBpbmRleCwgcGVybWlzc2lvbiwgJGJvZHl9KSA9PiB7XG5cdGNvbnN0IERpYWxvZyA9IGZ1bmN0aW9uIChjb25maWcpIHtcblx0XHREaWFsb2cuc3VwZXIuY2FsbCh0aGlzLCBjb25maWcpO1xuXHR9O1xuXHRPTy5pbmhlcml0Q2xhc3MoRGlhbG9nLCBPTy51aS5Qcm9jZXNzRGlhbG9nKTtcblx0RGlhbG9nLnN0YXRpYy5uYW1lID0gJ3VzZXItcmlnaHRzLW1hbmFnZXInO1xuXHREaWFsb2cuc3RhdGljLnRpdGxlID0gYOaOiOS6iCR7Z2V0UGVybWlzc29uTmFtZShwZXJtaXNzaW9uKX0ke3dpbmRvdy53Z1VMUygn57uZJywgJ+e1picpfSR7dXNlck5hbWV9YDtcblx0RGlhbG9nLnN0YXRpYy5hY3Rpb25zID0gW1xuXHRcdHtcblx0XHRcdGFjdGlvbjogJ3N1Ym1pdCcsXG5cdFx0XHRsYWJlbDogd2luZG93LndnVUxTKCfmjojmnYMnLCAn5o6I5qyKJyksXG5cdFx0XHRmbGFnczogWydwcmltYXJ5JywgJ3Byb2dyZXNzaXZlJ10sXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRsYWJlbDogJ+WPlua2iCcsXG5cdFx0XHRmbGFnczogWydzYWZlJywgJ2Nsb3NlJ10sXG5cdFx0fSxcblx0XTtcblx0RGlhbG9nLnByb3RvdHlwZS5nZXRBcGlNYW5hZ2VyID0gZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiB0aGlzLmFwaU1hbmFnZXI7XG5cdH07XG5cdERpYWxvZy5wcm90b3R5cGUuZ2V0Qm9keUhlaWdodCA9ICgpID0+IHtcblx0XHRyZXR1cm4gMjU1O1xuXHR9O1xuXHREaWFsb2cucHJvdG90eXBlLmluaXRpYWxpemUgPSBhc3luYyBmdW5jdGlvbiAoKSB7XG5cdFx0RGlhbG9nLnN1cGVyLnByb3RvdHlwZS5pbml0aWFsaXplLmNhbGwodGhpcyk7XG5cdFx0dGhpcy5lZGl0RmllbGRzZXQgPSBuZXcgT08udWkuRmllbGRzZXRMYXlvdXQoe1xuXHRcdFx0Y2xhc3NlczogWydjb250YWluZXInXSxcblx0XHR9KTtcblx0XHR0aGlzLmVkaXRQYW5lbCA9IG5ldyBPTy51aS5QYW5lbExheW91dCh7XG5cdFx0XHRleHBhbmRlZDogZmFsc2UsXG5cdFx0fSk7XG5cdFx0dGhpcy5lZGl0UGFuZWwuJGVsZW1lbnQuYXBwZW5kKHRoaXMuZWRpdEZpZWxkc2V0LiRlbGVtZW50KTtcblx0XHRjb25zdCByaWdodExvZ1dhcHBlciA9ICQoJzxzcGFuPicpO1xuXHRcdGNvbnN0IHVybCA9IG13LnV0aWwuZ2V0VXJsKCdTcGVjaWFsOkxvZy9yaWdodHMnLCB7XG5cdFx0XHR0eXBlOiAncmlnaHRzJyxcblx0XHRcdHBhZ2U6IGBVc2VyOiR7dXNlck5hbWV9YCxcblx0XHR9KTtcblx0XHQkKCc8YT4nKVxuXHRcdFx0LnRleHQoJ+acgOi/keadg+mZkOaXpeW/lycpXG5cdFx0XHQuYXR0cih7XG5cdFx0XHRcdGhyZWY6IHVybCxcblx0XHRcdFx0dGFyZ2V0OiAnX2JsYW5rJyxcblx0XHRcdH0pXG5cdFx0XHQuYXBwZW5kVG8ocmlnaHRMb2dXYXBwZXIpO1xuXHRcdHJpZ2h0TG9nV2FwcGVyLmFwcGVuZCgn77yaJyk7XG5cdFx0Y29uc3QgcmlnaHRMb2dUZXh0ID0gJCgnPHNwYW4+JykudGV4dCgn6I635Y+W5LitJykuYXBwZW5kVG8ocmlnaHRMb2dXYXBwZXIpO1xuXHRcdHRoaXMucmlnaHRMb2cgPSBuZXcgT08udWkuTGFiZWxXaWRnZXQoe1xuXHRcdFx0bGFiZWw6IHJpZ2h0TG9nV2FwcGVyLFxuXHRcdH0pO1xuXHRcdGNvbnN0IHBhcmFtcyA9IHtcblx0XHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRcdGxlYWN0aW9uOiAncmlnaHRzL3JpZ2h0cycsXG5cdFx0XHRsZWxpbWl0OiAxLFxuXHRcdFx0bGV0aXRsZTogYFVzZXI6JHt1c2VyTmFtZX1gLFxuXHRcdFx0bGlzdDogJ2xvZ2V2ZW50cycsXG5cdFx0fTtcblx0XHRjb25zdCB7cXVlcnl9ID0gYXdhaXQgYXBpLmdldChwYXJhbXMpO1xuXHRcdGNvbnN0IGxvZ3MgPSBxdWVyeS5sb2dldmVudHM7XG5cdFx0aWYgKGxvZ3MubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRyaWdodExvZ1RleHQudGV4dCgn5rKh5pyJ5Lu75L2V5pel5b+XJyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuZXctY2FwXG5cdFx0XHRjb25zdCB0aW1lc3RhbXAgPSBuZXcgTW9yZWJpdHMuZGF0ZShsb2dzWzBdLnRpbWVzdGFtcCkuY2FsZW5kYXIoKTtcblx0XHRcdGNvbnN0IHJpZ2h0cyA9IGxvZ3NbMF0ucGFyYW1zLm5ld2dyb3Vwcy5qb2luKCfjgIEnKSB8fCAn77yI5peg77yJJztcblx0XHRcdHJpZ2h0TG9nVGV4dC50ZXh0KGAke3RpbWVzdGFtcH0gJHtsb2dzWzBdLnVzZXJ95bCG55So5oi357uE5pS55Li6JHtyaWdodHN9YCk7XG5cdFx0fVxuXHRcdHRoaXMucmlnaHRzQ2hhbmdlU3VtbWFyeUlucHV0ID0gbmV3IE9PLnVpLlRleHRJbnB1dFdpZGdldCh7XG5cdFx0XHR2YWx1ZTogJycsXG5cdFx0XHRwbGFjZWhvbGRlcjogJ+WPr+eVmeepuicsXG5cdFx0fSk7XG5cdFx0dGhpcy5leHBpcnlJbnB1dCA9IG5ldyBtdy53aWRnZXRzLkV4cGlyeVdpZGdldCh7XG5cdFx0XHQkb3ZlcmxheTogJGJvZHkuZmluZCgnLm9vLXVpLXdpbmRvdycpLFxuXHRcdFx0UmVsYXRpdmVJbnB1dENsYXNzOiBtdy53aWRnZXRzLlNlbGVjdFdpdGhJbnB1dFdpZGdldCxcblx0XHRcdHJlbGF0aXZlSW5wdXQ6IHtcblx0XHRcdFx0b3I6IHRydWUsXG5cdFx0XHRcdGRyb3Bkb3duaW5wdXQ6IHtcblx0XHRcdFx0XHRvcHRpb25zOiBbXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdGRhdGE6ICcxIGRheScsXG5cdFx0XHRcdFx0XHRcdGxhYmVsOiAnMeWkqScsXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRkYXRhOiAnMSB3ZWVrJyxcblx0XHRcdFx0XHRcdFx0bGFiZWw6ICcx5ZGoJyxcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdGRhdGE6ICcxIG1vbnRoJyxcblx0XHRcdFx0XHRcdFx0bGFiZWw6ICcx5Liq5pyIJyxcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdGRhdGE6ICczIG1vbnRocycsXG5cdFx0XHRcdFx0XHRcdGxhYmVsOiAnM+S4quaciCcsXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRkYXRhOiAnNiBtb250aHMnLFxuXHRcdFx0XHRcdFx0XHRsYWJlbDogJzbkuKrmnIgnLFxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0ZGF0YTogJzEgeWVhcicsXG5cdFx0XHRcdFx0XHRcdGxhYmVsOiAnMeW5tCcsXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRkYXRhOiAnaW5maW5pdGUnLFxuXHRcdFx0XHRcdFx0XHRsYWJlbDogJ+aXoOmZkOacnycsXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRkYXRhOiAnb3RoZXInLFxuXHRcdFx0XHRcdFx0XHRsYWJlbDogJ+WFtuS7luaXtumXtCcsXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdF0sXG5cdFx0XHRcdFx0dmFsdWU6ICdpbmZpbml0ZScsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHRleHRpbnB1dDoge1xuXHRcdFx0XHRcdHJlcXVpcmVkOiB0cnVlLFxuXHRcdFx0XHR9LFxuXHRcdFx0fSxcblx0XHR9KTtcblx0XHR0aGlzLmNsb3NpbmdSZW1hcmtzSW5wdXQgPSBuZXcgT08udWkuVGV4dElucHV0V2lkZ2V0KHtcblx0XHRcdHZhbHVlOiAne3tkb25lfX3jgIItLX5+Jy5jb25jYXQoJ35+JyksXG5cdFx0fSk7XG5cdFx0dGhpcy53YXRjaFRhbGtQYWdlQ2hlY2tib3ggPSBuZXcgT08udWkuQ2hlY2tib3hJbnB1dFdpZGdldCh7XG5cdFx0XHRzZWxlY3RlZDogZmFsc2UsXG5cdFx0fSk7XG5cdFx0dGhpcy5lZGl0RmllbGRzZXQuYWRkSXRlbXModGhpcy5yaWdodExvZyk7XG5cdFx0Y29uc3QgZm9ybUVsZW1lbnRzID0gW1xuXHRcdFx0bmV3IE9PLnVpLkZpZWxkTGF5b3V0KHRoaXMucmlnaHRzQ2hhbmdlU3VtbWFyeUlucHV0LCB7XG5cdFx0XHRcdGxhYmVsOiB3aW5kb3cud2dVTFMoJ+aOiOadg+WOn+WboCcsICfmjojmnYPljp/lm6AnKSxcblx0XHRcdH0pLFxuXHRcdFx0bmV3IE9PLnVpLkZpZWxkTGF5b3V0KHRoaXMuZXhwaXJ5SW5wdXQsIHtcblx0XHRcdFx0bGFiZWw6IHdpbmRvdy53Z1VMUygn57uT5p2f5pe26Ze0JywgJ+e1kOadn+aZgumWkycpLFxuXHRcdFx0fSksXG5cdFx0XHRuZXcgT08udWkuRmllbGRMYXlvdXQodGhpcy5jbG9zaW5nUmVtYXJrc0lucHV0LCB7XG5cdFx0XHRcdGxhYmVsOiB3aW5kb3cud2dVTFMoJ+WFs+mXreivt+axgueVmeiogCcsICfpl5zplonoq4vmsYLnlZnoqIAnKSxcblx0XHRcdH0pLFxuXHRcdF07XG5cdFx0aWYgKGdldFBlcm1pc3Npb25SZXF1ZXN0ZWQocGVybWlzc2lvbikpIHtcblx0XHRcdGZvcm1FbGVtZW50c1tmb3JtRWxlbWVudHMubGVuZ3RoXSA9IG5ldyBPTy51aS5GaWVsZExheW91dCh0aGlzLndhdGNoVGFsa1BhZ2VDaGVja2JveCwge1xuXHRcdFx0XHRsYWJlbDogd2luZG93LndnVUxTKCfnm5Hop4bnlKjmiLforqjorrrpobUnLCAn55uj6KaW55So5oi26KiO6KuW6aCBJyksXG5cdFx0XHR9KTtcblx0XHR9XG5cdFx0dGhpcy5lZGl0RmllbGRzZXQuYWRkSXRlbXMoZm9ybUVsZW1lbnRzKTtcblx0XHR0aGlzLnN1Ym1pdFBhbmVsID0gbmV3IE9PLnVpLlBhbmVsTGF5b3V0KHtcblx0XHRcdCQ6IHRoaXMuJCxcblx0XHRcdGV4cGFuZGVkOiBmYWxzZSxcblx0XHR9KTtcblx0XHR0aGlzLnN1Ym1pdEZpZWxkc2V0ID0gbmV3IE9PLnVpLkZpZWxkc2V0TGF5b3V0KHtcblx0XHRcdGNsYXNzZXM6IFsnY29udGFpbmVyJ10sXG5cdFx0fSk7XG5cdFx0dGhpcy5zdWJtaXRQYW5lbC4kZWxlbWVudC5hcHBlbmQodGhpcy5zdWJtaXRGaWVsZHNldC4kZWxlbWVudCk7XG5cdFx0dGhpcy5jaGFuZ2VSaWdodHNQcm9ncmVzc0xhYmVsID0gbmV3IE9PLnVpLkxhYmVsV2lkZ2V0KCk7XG5cdFx0dGhpcy5jaGFuZ2VSaWdodHNQcm9ncmVzc0ZpZWxkID0gbmV3IE9PLnVpLkZpZWxkTGF5b3V0KHRoaXMuY2hhbmdlUmlnaHRzUHJvZ3Jlc3NMYWJlbCk7XG5cdFx0dGhpcy5tYXJrQXNEb25lUHJvZ3Jlc3NMYWJlbCA9IG5ldyBPTy51aS5MYWJlbFdpZGdldCgpO1xuXHRcdHRoaXMubWFya0FzRG9uZVByb2dyZXNzRmllbGQgPSBuZXcgT08udWkuRmllbGRMYXlvdXQodGhpcy5tYXJrQXNEb25lUHJvZ3Jlc3NMYWJlbCk7XG5cdFx0dGhpcy5pc3N1ZVRlbXBsYXRlUHJvZ3Jlc3NMYWJlbCA9IG5ldyBPTy51aS5MYWJlbFdpZGdldCgpO1xuXHRcdHRoaXMuaXNzdWVUZW1wbGF0ZVByb2dyZXNzRmllbGQgPSBuZXcgT08udWkuRmllbGRMYXlvdXQodGhpcy5pc3N1ZVRlbXBsYXRlUHJvZ3Jlc3NMYWJlbCk7XG5cdFx0dGhpcy5zdGFja0xheW91dCA9IG5ldyBPTy51aS5TdGFja0xheW91dCh7XG5cdFx0XHRpdGVtczogW3RoaXMuZWRpdFBhbmVsLCB0aGlzLnN1Ym1pdFBhbmVsXSxcblx0XHRcdHBhZGRlZDogdHJ1ZSxcblx0XHR9KTtcblx0XHR0aGlzLiRib2R5LmFwcGVuZCh0aGlzLnN0YWNrTGF5b3V0LiRlbGVtZW50KTtcblx0fTtcblx0RGlhbG9nLnByb3RvdHlwZS5vblN1Ym1pdCA9IGZ1bmN0aW9uICgpIHtcblx0XHRjb25zdCBzZWxmID0gdGhpcztcblx0XHRsZXQgcHJvbWlzZUNvdW50ID0gZ2V0UGVybWlzc2lvblJlcXVlc3RlZChwZXJtaXNzaW9uKSA/IDMgOiAyO1xuXHRcdHNlbGYuYWN0aW9ucy5zZXRBYmlsaXRpZXMoe1xuXHRcdFx0c3VibWl0OiBmYWxzZSxcblx0XHR9KTtcblx0XHRjb25zdCBhZGRQcm9taXNlID0gKHskZmllbGR9LCBwcm9taXNlKSA9PiB7XG5cdFx0XHRzZWxmLnB1c2hQZW5kaW5nKCk7XG5cdFx0XHRwcm9taXNlXG5cdFx0XHRcdC5kb25lKCgpID0+IHtcblx0XHRcdFx0XHQkZmllbGQuYXBwZW5kKFxuXHRcdFx0XHRcdFx0JCgnPHNwYW4+Jylcblx0XHRcdFx0XHRcdFx0LnRleHQoJ+WujOaIkO+8gScpXG5cdFx0XHRcdFx0XHRcdC5wcm9wKCdzdHlsZScsICdwb3NpdGlvbjogcmVsYXRpdmU7IHRvcDogLjVlbTsgY29sb3I6ICMwMDkwMDA7IGZvbnQtd2VpZ2h0OiBib2xkOycpXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fSlcblx0XHRcdFx0LmZhaWwoKG9iaikgPT4ge1xuXHRcdFx0XHRcdGlmIChvYmogJiYgb2JqLmVycm9yICYmIG9iai5lcnJvci5pbmZvKSB7XG5cdFx0XHRcdFx0XHQkZmllbGQuYXBwZW5kKFxuXHRcdFx0XHRcdFx0XHQkKCc8c3Bhbj4nKVxuXHRcdFx0XHRcdFx0XHRcdC50ZXh0KGDplJnor6/vvJoke29iai5lcnJvci5pbmZvfWApXG5cdFx0XHRcdFx0XHRcdFx0LnByb3AoJ3N0eWxlJywgJ3Bvc2l0aW9uOiByZWxhdGl2ZTsgdG9wOiAuNWVtOyBjb2xvcjogI2MwMDsgZm9udC13ZWlnaHQ6IGJvbGQ7Jylcblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdCRmaWVsZC5hcHBlbmQoXG5cdFx0XHRcdFx0XHRcdCQoJzxzcGFuPicpXG5cdFx0XHRcdFx0XHRcdFx0LnRleHQoJ+WPkeeUn+acquefpemUmeivr+OAgicpXG5cdFx0XHRcdFx0XHRcdFx0LnByb3AoJ3N0eWxlJywgJ3Bvc2l0aW9uOiByZWxhdGl2ZTsgdG9wOiAuNWVtOyBjb2xvcjogI2MwMDsgZm9udC13ZWlnaHQ6IGJvbGQ7Jylcblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KVxuXHRcdFx0XHQuYWx3YXlzKCgpID0+IHtcblx0XHRcdFx0XHRwcm9taXNlQ291bnQtLTsgLy8gRklYTUU6IG1heWJlIHdlIGNvdWxkIHVzZSBhIHNlbGYuaXNQZW5kaW5nKCkgb3Igc29tZXRoaW5nXG5cdFx0XHRcdFx0c2VsZi5wb3BQZW5kaW5nKCk7XG5cdFx0XHRcdFx0aWYgKHByb21pc2VDb3VudCA9PT0gMCkge1xuXHRcdFx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdGxvY2F0aW9uLnJlbG9hZCh0cnVlKTtcblx0XHRcdFx0XHRcdH0sIDEwMDApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHRyZXR1cm4gcHJvbWlzZTtcblx0XHR9O1xuXHRcdHNlbGYubWFya0FzRG9uZVByb2dyZXNzRmllbGQuc2V0TGFiZWwoJ+agh+iusOivt+axguS4uuW3suWujOaIkC4uLicpO1xuXHRcdHNlbGYuc3VibWl0RmllbGRzZXQuYWRkSXRlbXMoW3NlbGYubWFya0FzRG9uZVByb2dyZXNzRmllbGRdKTtcblx0XHRzZWxmLmNoYW5nZVJpZ2h0c1Byb2dyZXNzRmllbGQuc2V0TGFiZWwoJ+aOiOS6iOadg+mZkC4uLicpO1xuXHRcdHNlbGYuc3VibWl0RmllbGRzZXQuYWRkSXRlbXMoW3NlbGYuY2hhbmdlUmlnaHRzUHJvZ3Jlc3NGaWVsZF0pO1xuXHRcdGlmIChnZXRQZXJtaXNzaW9uUmVxdWVzdGVkKHBlcm1pc3Npb24pKSB7XG5cdFx0XHRzZWxmLmlzc3VlVGVtcGxhdGVQcm9ncmVzc0ZpZWxkLnNldExhYmVsKCflj5HpgIHpgJrnn6UuLi4nKTtcblx0XHRcdHNlbGYuc3VibWl0RmllbGRzZXQuYWRkSXRlbXMoW3NlbGYuaXNzdWVUZW1wbGF0ZVByb2dyZXNzRmllbGRdKTtcblx0XHR9XG5cdFx0YWRkUHJvbWlzZShcblx0XHRcdHNlbGYubWFya0FzRG9uZVByb2dyZXNzRmllbGQsXG5cdFx0XHRtYXJrQXNEb25lKHVzZXJOYW1lLCBpbmRleCwgYFxcbjoke3RoaXMuY2xvc2luZ1JlbWFya3NJbnB1dC5nZXRWYWx1ZSgpfWApXG5cdFx0KS50aGVuKCh7ZWRpdH0pID0+IHtcblx0XHRcdGFkZFByb21pc2UoXG5cdFx0XHRcdHNlbGYuY2hhbmdlUmlnaHRzUHJvZ3Jlc3NGaWVsZCxcblx0XHRcdFx0YXNzaWduUGVybWlzc2lvbihcblx0XHRcdFx0XHR1c2VyTmFtZSxcblx0XHRcdFx0XHRwZXJtaXNzaW9uLFxuXHRcdFx0XHRcdHRoaXMucmlnaHRzQ2hhbmdlU3VtbWFyeUlucHV0LmdldFZhbHVlKCksXG5cdFx0XHRcdFx0ZWRpdC5uZXdyZXZpZCxcblx0XHRcdFx0XHR0aGlzLmV4cGlyeUlucHV0LmdldFZhbHVlKClcblx0XHRcdFx0KVxuXHRcdFx0KS50aGVuKCgpID0+IHtcblx0XHRcdFx0aWYgKGdldFBlcm1pc3Npb25SZXF1ZXN0ZWQocGVybWlzc2lvbikpIHtcblx0XHRcdFx0XHRhZGRQcm9taXNlKFxuXHRcdFx0XHRcdFx0c2VsZi5pc3N1ZVRlbXBsYXRlUHJvZ3Jlc3NGaWVsZCxcblx0XHRcdFx0XHRcdGlzc3VlVGVtcGxhdGUodXNlck5hbWUsIHBlcm1pc3Npb24sIHRoaXMud2F0Y2hUYWxrUGFnZUNoZWNrYm94LmlzU2VsZWN0ZWQoKSlcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9KTtcblx0XHRzZWxmLnN0YWNrTGF5b3V0LnNldEl0ZW0oc2VsZi5zdWJtaXRQYW5lbCk7XG5cdH07XG5cdERpYWxvZy5wcm90b3R5cGUuZ2V0QWN0aW9uUHJvY2VzcyA9IGZ1bmN0aW9uIChhY3Rpb24pIHtcblx0XHRyZXR1cm4gRGlhbG9nLnN1cGVyLnByb3RvdHlwZS5nZXRBY3Rpb25Qcm9jZXNzLmNhbGwodGhpcywgYWN0aW9uKS5uZXh0KGZ1bmN0aW9uICgpIHtcblx0XHRcdGlmIChhY3Rpb24gPT09ICdzdWJtaXQnKSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLm9uU3VibWl0KCk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gRGlhbG9nLnN1cGVyLnByb3RvdHlwZS5nZXRBY3Rpb25Qcm9jZXNzLmNhbGwodGhpcywgYWN0aW9uKTtcblx0XHR9LCB0aGlzKTtcblx0fTtcblx0Y29uc3QgZGlhbG9nID0gbmV3IERpYWxvZyh7XG5cdFx0c2l6ZTogJ21lZGl1bScsXG5cdH0pO1xuXHRjb25zdCB3aW5kb3dNYW5hZ2VyID0gbmV3IE9PLnVpLldpbmRvd01hbmFnZXIoKTtcblx0JGJvZHkuYXBwZW5kKHdpbmRvd01hbmFnZXIuJGVsZW1lbnQpO1xuXHR3aW5kb3dNYW5hZ2VyLmFkZFdpbmRvd3MoW2RpYWxvZ10pO1xuXHR2b2lkIHdpbmRvd01hbmFnZXIub3BlbldpbmRvdyhkaWFsb2cpO1xufTtcblxuZXhwb3J0IHtzaG93RGlhbG9nfTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLHFCQUFzQkMsUUFBQSxpQkFBQTs7QUNFdEIsSUFBTUMscUJBQXFCQSxNQUFNO0FBQ2hDLFNBQU87SUFDTkMsV0FBVztJQUNYQyxjQUFjO0lBQ2RDLFdBQVc7SUFDWCxzQkFBc0I7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QU1wTCxRQUNMdUwsY0FBQSxRQUFBeE0sT0FBc0JFLFFBQVEsS0FBTXNNLGNBQWMsUUFBQXhNLE9BQVFFLFFBQVEsRUFBR1UsUUFBUSxNQUFNLEtBQUssRUFBRUEsUUFBUSxNQUFNLEdBQUcsSUFDeEcsS0FDQTRMLFVBQ0M1TCxRQUFRLFNBQVMsRUFBRSxFQUNuQkEsUUFBUVYsVUFBVSxFQUFFLEVBQ3BCVSxRQUFRVixTQUFTVSxRQUFRLE1BQU0sS0FBSyxFQUFFQSxRQUFRLE1BQU0sR0FBRyxHQUFHLEVBQUU7QUFFakUwRCxlQUFXO01BQ1ZyRDtNQUNBZjtNQUNBQztNQUNBb0U7SUFDRCxDQUFDO0VBQ0YsQ0FBQztBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbImltcG9ydF9leHRfZ2FkZ2V0MiIsICJyZXF1aXJlIiwgImdldFBlcm1pc3Npb25OYW1lcyIsICJwYXRyb2xsZXIiLCAiYXV0b3Jldmlld2VyIiwgImNvbmZpcm1lZCIsICJldmVudHNwb25zb3IiLCAidHJhbnN3aWtpIiwgInRlbXBsYXRlZWRpdG9yIiwgImJvdCIsICJwZXJtaXNzaW9uTmFtZXMiLCAiZ2V0UGVybWlzc29uTmFtZSIsICJrZXkiLCAiZ2V0UGVybWlzc2lvbkJ5UGFnZSIsICJwZXJtaXNzaW9uUmVxdWVzdGVkIiwgImdldFBlcm1pc3Npb25SZXF1ZXN0ZWQiLCAiZ2V0UGVybWlzc2lvblRlbXBsYXRlcyIsICJwZXJtaXNzaW9uVGVtcGxhdGUiLCAiZ2V0cGVybWlzc2lvblRlbXBsYXRlIiwgIlNVTU1BUlkiLCAidmVyc2lvbiIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJhcGkiLCAiaW5pdE13QXBpIiwgImNvbmNhdCIsICJhc3NpZ25QZXJtaXNzaW9uIiwgInVzZXJOYW1lIiwgInBlcm1pc3Npb24iLCAic3VtbWFyeSIsICJyZXZJZCIsICJleHBpcnkiLCAicGVybWFMaW5rIiwgImZ1bGxTdW1tYXJ5IiwgInBhcmFtcyIsICJhY3Rpb24iLCAidXNlciIsICJyZXBsYWNlIiwgImFkZCIsICJyZWFzb24iLCAicG9zdFdpdGhUb2tlbiIsICJtYXJrQXNEb25lIiwgImluZGV4IiwgImNsb3NpbmdSZW1hcmtzIiwgIndnUGFnZU5hbWUiLCAibXciLCAiY29uZmlnIiwgImdldCIsICJzZWN0aW9uU2VsZWN0b3IiLCAiQ1NTIiwgImVzY2FwZSIsICJzZWN0aW9uTm9kZSIsICJkb2N1bWVudCIsICJxdWVyeVNlbGVjdG9yIiwgInNlY3Rpb25OdW1iZXIiLCAiJCIsICJzaWJsaW5ncyIsICJmaW5kIiwgInByb3AiLCAibWF0Y2giLCAiYmFzZXRpbWVzdGFtcCIsICJjdXJ0aW1lc3RhbXAiLCAicGFnZSIsICJyZXZpc2lvbiIsICJjb250ZW50IiwgInF1ZXJ5UGFyYW1zIiwgImZvcm1hdCIsICJmb3JtYXR2ZXJzaW9uIiwgInRpdGxlcyIsICJydnByb3AiLCAicnZzZWN0aW9uIiwgInRoZW4iLCAiZGF0YSIsICJxdWVyeSIsICJwYWdlcyIsICJEZWZlcnJlZCIsICJyZWplY3QiLCAiaW52YWxpZCIsICJtaXNzaW5nIiwgInJldmlzaW9ucyIsICJ0aW1lc3RhbXAiLCAidHJpbSIsICJlZGl0UGFyYW1zIiwgInRpdGxlIiwgImFzc2VydCIsICJub2NyZWF0ZSIsICJzZWN0aW9uIiwgInN0YXJ0dGltZXN0YW1wIiwgInRleHQiLCAicG9zdFdpdGhFZGl0VG9rZW4iLCAiaXNzdWVUZW1wbGF0ZSIsICJ3YXRjaCIsICJ0YWxrUGFnZSIsICJhcHBlbmR0ZXh0IiwgIndhdGNobGlzdCIsICJzaG93RGlhbG9nIiwgIiRib2R5IiwgIkRpYWxvZyIsICJzdXBlciIsICJjYWxsIiwgIk9PIiwgImluaGVyaXRDbGFzcyIsICJ1aSIsICJQcm9jZXNzRGlhbG9nIiwgInN0YXRpYyIsICJuYW1lIiwgIndpbmRvdyIsICJ3Z1VMUyIsICJhY3Rpb25zIiwgImxhYmVsIiwgImZsYWdzIiwgInByb3RvdHlwZSIsICJnZXRBcGlNYW5hZ2VyIiwgImFwaU1hbmFnZXIiLCAiZ2V0Qm9keUhlaWdodCIsICJpbml0aWFsaXplIiwgIl9hc3luY1RvR2VuZXJhdG9yIiwgImVkaXRGaWVsZHNldCIsICJGaWVsZHNldExheW91dCIsICJjbGFzc2VzIiwgImVkaXRQYW5lbCIsICJQYW5lbExheW91dCIsICJleHBhbmRlZCIsICIkZWxlbWVudCIsICJhcHBlbmQiLCAicmlnaHRMb2dXYXBwZXIiLCAidXJsIiwgInV0aWwiLCAiZ2V0VXJsIiwgInR5cGUiLCAiYXR0ciIsICJocmVmIiwgInRhcmdldCIsICJhcHBlbmRUbyIsICJyaWdodExvZ1RleHQiLCAicmlnaHRMb2ciLCAiTGFiZWxXaWRnZXQiLCAibGVhY3Rpb24iLCAibGVsaW1pdCIsICJsZXRpdGxlIiwgImxpc3QiLCAibG9ncyIsICJsb2dldmVudHMiLCAibGVuZ3RoIiwgIk1vcmViaXRzIiwgImRhdGUiLCAiY2FsZW5kYXIiLCAicmlnaHRzIiwgIm5ld2dyb3VwcyIsICJqb2luIiwgInJpZ2h0c0NoYW5nZVN1bW1hcnlJbnB1dCIsICJUZXh0SW5wdXRXaWRnZXQiLCAidmFsdWUiLCAicGxhY2Vob2xkZXIiLCAiZXhwaXJ5SW5wdXQiLCAid2lkZ2V0cyIsICJFeHBpcnlXaWRnZXQiLCAiJG92ZXJsYXkiLCAiUmVsYXRpdmVJbnB1dENsYXNzIiwgIlNlbGVjdFdpdGhJbnB1dFdpZGdldCIsICJyZWxhdGl2ZUlucHV0IiwgIm9yIiwgImRyb3Bkb3duaW5wdXQiLCAib3B0aW9ucyIsICJ0ZXh0aW5wdXQiLCAicmVxdWlyZWQiLCAiY2xvc2luZ1JlbWFya3NJbnB1dCIsICJ3YXRjaFRhbGtQYWdlQ2hlY2tib3giLCAiQ2hlY2tib3hJbnB1dFdpZGdldCIsICJzZWxlY3RlZCIsICJhZGRJdGVtcyIsICJmb3JtRWxlbWVudHMiLCAiRmllbGRMYXlvdXQiLCAic3VibWl0UGFuZWwiLCAic3VibWl0RmllbGRzZXQiLCAiY2hhbmdlUmlnaHRzUHJvZ3Jlc3NMYWJlbCIsICJjaGFuZ2VSaWdodHNQcm9ncmVzc0ZpZWxkIiwgIm1hcmtBc0RvbmVQcm9ncmVzc0xhYmVsIiwgIm1hcmtBc0RvbmVQcm9ncmVzc0ZpZWxkIiwgImlzc3VlVGVtcGxhdGVQcm9ncmVzc0xhYmVsIiwgImlzc3VlVGVtcGxhdGVQcm9ncmVzc0ZpZWxkIiwgInN0YWNrTGF5b3V0IiwgIlN0YWNrTGF5b3V0IiwgIml0ZW1zIiwgInBhZGRlZCIsICJvblN1Ym1pdCIsICJzZWxmIiwgInByb21pc2VDb3VudCIsICJzZXRBYmlsaXRpZXMiLCAic3VibWl0IiwgImFkZFByb21pc2UiLCAiJGZpZWxkIiwgInByb21pc2UiLCAicHVzaFBlbmRpbmciLCAiZG9uZSIsICJmYWlsIiwgIm9iaiIsICJlcnJvciIsICJpbmZvIiwgImFsd2F5cyIsICJwb3BQZW5kaW5nIiwgInNldFRpbWVvdXQiLCAibG9jYXRpb24iLCAicmVsb2FkIiwgInNldExhYmVsIiwgImdldFZhbHVlIiwgImVkaXQiLCAibmV3cmV2aWQiLCAiaXNTZWxlY3RlZCIsICJzZXRJdGVtIiwgImdldEFjdGlvblByb2Nlc3MiLCAibmV4dCIsICJkaWFsb2ciLCAic2l6ZSIsICJ3aW5kb3dNYW5hZ2VyIiwgIldpbmRvd01hbmFnZXIiLCAiYWRkV2luZG93cyIsICJvcGVuV2luZG93IiwgImdldEJvZHkiLCAib24iLCAiZXZlbnQiLCAiX213JHV0aWwkZ2V0UGFyYW1WYWx1IiwgIl8kZWxlbWVudCRwYXJlbnRzJHByZSIsICJwcmV2ZW50RGVmYXVsdCIsICJnZXRQYXJhbVZhbHVlIiwgInNlY3Rpb25JZCIsICJwYXJlbnRzIiwgInByZXYiXQp9Cg==

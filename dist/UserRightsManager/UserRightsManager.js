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
    return yield api.post(params);
  });
  return function queryRevisions2(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
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
    curtimestamp = data["curtimestamp"];
    [{
      basetimestamp,
      content
    }] = page.revisions;
    content = content.trim().replace(/:{{status(\|.*?)?}}/i, ":{{Status|+}}");
    content += closingRemarks;
    return $.Deferred().resolve();
  }).then(() => {
    const editParams = {
      basetimestamp,
      action: "edit",
      format: "json",
      formatversion: "2",
      title: wgPageName,
      nocreate: true,
      section: "".concat(sectionNumber),
      starttimestamp: curtimestamp,
      summary: "/* User:".concat(userName, " */ 完成").concat(userRightsManagerSummary),
      text: content
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
    addPromise(self.markAsDoneProgressField, markAsDone(userName, index, "\n:".concat(this.closingRemarksInput.getValue())).then(({
      edit
    }) => {
      addPromise(self.changeRightsProgressField, assignPermission(userName, permission, this.rightsChangeSummaryInput.getValue(), edit.newrevid, this.expiryInput.getValue()).then(() => {
        if (getPermissionRequested(permission)) {
          addPromise(self.issueTemplateProgressField, issueTemplate(userName, permission, this.watchTalkPageCheckbox.isSelected()));
        }
      }));
    }));
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1VzZXJSaWdodHNNYW5hZ2VyL1VzZXJSaWdodHNNYW5hZ2VyLnRzIiwgInNyYy9Vc2VyUmlnaHRzTWFuYWdlci9tb2R1bGVzL2kxOG4udHMiLCAic3JjL1VzZXJSaWdodHNNYW5hZ2VyL29wdGlvbnMuanNvbiIsICJzcmMvVXNlclJpZ2h0c01hbmFnZXIvbW9kdWxlcy9hcGkudHMiLCAic3JjL1VzZXJSaWdodHNNYW5hZ2VyL21vZHVsZXMvYXNzaWduUGVybWlzc2lvbi50cyIsICJzcmMvVXNlclJpZ2h0c01hbmFnZXIvbW9kdWxlcy9pc3N1ZVRlbXBsYXRlLnRzIiwgInNyYy9Vc2VyUmlnaHRzTWFuYWdlci9tb2R1bGVzL21hcmtBc0RvbmUudHMiLCAic3JjL1VzZXJSaWdodHNNYW5hZ2VyL21vZHVsZXMvc2hvd0RpYWxvZy5qcyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHtnZXRCb2R5fSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuaW1wb3J0IHtnZXRQZXJtaXNzaW9uUmVxdWVzdGVkfSBmcm9tICcuL21vZHVsZXMvaTE4bic7XG5pbXBvcnQge3Nob3dEaWFsb2d9IGZyb20gJy4vbW9kdWxlcy9zaG93RGlhbG9nLmpzJztcblxudm9pZCBnZXRCb2R5KCkudGhlbigoJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KTogdm9pZCA9PiB7XG5cdGNvbnN0IHt3Z1BhZ2VOYW1lfSA9IG13LmNvbmZpZy5nZXQoKTtcblxuXHRpZiAoIWdldFBlcm1pc3Npb25SZXF1ZXN0ZWQod2dQYWdlTmFtZSkgfHwgZ2V0UGVybWlzc2lvblJlcXVlc3RlZCh3Z1BhZ2VOYW1lKSA9PT0gd2dQYWdlTmFtZSkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IHBlcm1pc3Npb246IHN0cmluZyB8IHVuZGVmaW5lZCA9IGdldFBlcm1pc3Npb25SZXF1ZXN0ZWQod2dQYWdlTmFtZSk7XG5cblx0aWYgKHBlcm1pc3Npb24gPT09ICdBdXRvV2lraUJyb3dzZXInKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0JGJvZHkuZmluZCgnLnBlcm0tYXNzaWduLXBlcm1pc3Npb25zIGEnKS5vbignY2xpY2snLCAoZXZlbnQ6IEpRdWVyeS5DbGlja0V2ZW50KTogdm9pZCA9PiB7XG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuXHRcdGNvbnN0ICRlbGVtZW50OiBKUXVlcnk8SFRNTEFuY2hvckVsZW1lbnQ+ID0gJChldmVudC50YXJnZXQgYXMgSFRNTEFuY2hvckVsZW1lbnQpO1xuXG5cdFx0Y29uc3QgdXNlck5hbWU6IHN0cmluZyA9IG13LnV0aWwuZ2V0UGFyYW1WYWx1ZSgndXNlcicsICRlbGVtZW50LmF0dHIoJ2hyZWYnKSkgPz8gJyc7XG5cdFx0Y29uc3Qgc2VjdGlvbklkOiBzdHJpbmcgPSAkZWxlbWVudC5wYXJlbnRzKCdkbCcpLnByZXYoJ2g0JykuZmluZCgnLm13LWhlYWRsaW5lJykuYXR0cignaWQnKSA/PyAnJztcblx0XHRjb25zdCBpbmRleDogc3RyaW5nID1cblx0XHRcdHNlY3Rpb25JZCA9PT0gYFVzZXI6JHt1c2VyTmFtZX1gIHx8IHNlY3Rpb25JZCA9PT0gYFVzZXI6JHt1c2VyTmFtZX1gLnJlcGxhY2UoL1wiL2csICcuMjInKS5yZXBsYWNlKC8gL2csICdfJylcblx0XHRcdFx0PyAnJ1xuXHRcdFx0XHQ6IHNlY3Rpb25JZFxuXHRcdFx0XHRcdFx0LnJlcGxhY2UoJ1VzZXI6JywgJycpXG5cdFx0XHRcdFx0XHQucmVwbGFjZSh1c2VyTmFtZSwgJycpXG5cdFx0XHRcdFx0XHQucmVwbGFjZSh1c2VyTmFtZS5yZXBsYWNlKC9cIi9nLCAnLjIyJykucmVwbGFjZSgvIC9nLCAnXycpLCAnJyk7XG5cblx0XHRzaG93RGlhbG9nKHtcblx0XHRcdGluZGV4LFxuXHRcdFx0dXNlck5hbWUsXG5cdFx0XHRwZXJtaXNzaW9uLFxuXHRcdFx0JGJvZHksXG5cdFx0fSk7XG5cdH0pO1xufSk7XG4iLCAiaW1wb3J0IHR5cGUge1VzZXJSaWdodHN9IGZyb20gJ34vTWFya1JpZ2h0cy9tb2R1bGVzL3R5cGVzJztcblxuY29uc3QgZ2V0UGVybWlzc2lvbk5hbWVzID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdHBhdHJvbGxlcjogJ+W3oeafpeWRmCcsXG5cdFx0YXV0b3Jldmlld2VyOiAn5beh5p+l6LGB5YWN6ICFJyxcblx0XHRjb25maXJtZWQ6ICfnoa7orqTnlKjmiLcnLFxuXHRcdCdtYXNzbWVzc2FnZS1zZW5kZXInOiAn5aSn6YeP5raI5oGv5Y+R6YCB6ICFJyxcblx0XHRldmVudHNwb25zb3I6ICfmtLvliqjnu4Tnu4fogIUnLFxuXHRcdHRyYW5zd2lraTogJ+WvvOWFpeiAhScsXG5cdFx0dGVtcGxhdGVlZGl0b3I6ICfmqKHmnb/nvJbovpHlkZgnLFxuXHRcdGJvdDogJ+acuuWZqOS6uicsXG5cdFx0J3JucnN2ZXJpZnktZXhlbXB0JzogJ+WunuWQjeWItumqjOivgeixgeWFjScsXG5cdH0gYXMgY29uc3Qgc2F0aXNmaWVzIFBhcnRpYWw8UmVjb3JkPFVzZXJSaWdodHMsIHN0cmluZz4+O1xufTtcblxuY29uc3QgcGVybWlzc2lvbk5hbWVzID0gZ2V0UGVybWlzc2lvbk5hbWVzKCk7XG5cbmNvbnN0IGdldFBlcm1pc3Nvbk5hbWU6IEdldE1lc3NhZ2VzPHR5cGVvZiBwZXJtaXNzaW9uTmFtZXM+ID0gKGtleSkgPT4ge1xuXHRyZXR1cm4gcGVybWlzc2lvbk5hbWVzW2tleV0gfHwga2V5O1xufTtcblxuY29uc3QgZ2V0UGVybWlzc2lvbkJ5UGFnZSA9ICgpID0+IHtcblx0cmV0dXJuIHtcblx0XHQnUWl1d2VuX3RhbGs65p2D6ZmQ55Sz6K+3L+eUs+ivt+W3oeafpeWbnumAgOadgyc6ICdwYXRyb2xsZXInLFxuXHRcdCdRaXV3ZW5fdGFsazrmnYPpmZDnlLPor7cv55Sz6K+35beh5p+l6LGB5YWN5p2DJzogJ2F1dG9yZXZpZXdlcicsXG5cdFx0J1FpdXdlbl90YWxrOuadg+mZkOeUs+ivty/nlLPor7fnoa7orqTnlKjmiLfmnYMnOiAnY29uZmlybWVkJyxcblx0XHQnUWl1d2VuX3RhbGs65p2D6ZmQ55Sz6K+3L+eUs+ivt+Wkp+mHj+a2iOaBr+WPkemAgeadgyc6ICdtYXNzbWVzc2FnZS1zZW5kZXInLFxuXHRcdCdRaXV3ZW5fdGFsazrmnYPpmZDnlLPor7cv55Sz6K+35rS75Yqo57uE57uH5p2DJzogJ2V2ZW50c3BvbnNvcicsXG5cdFx0J1FpdXdlbl90YWxrOuadg+mZkOeUs+ivty/nlLPor7flr7zlhaXmnYMnOiAndHJhbnN3aWtpJyxcblx0XHQnUWl1d2VuX3RhbGs65p2D6ZmQ55Sz6K+3L+eUs+ivt+aooeadv+e8lui+keadgyc6ICd0ZW1wbGF0ZWVkaXRvcicsXG5cdFx0J1FpdXdlbl90YWxrOuadg+mZkOeUs+ivty/nlLPor7fmnLrlmajkurrmnYPpmZAnOiAnYm90Jyxcblx0XHQnUWl1d2VuX3RhbGs65p2D6ZmQ55Sz6K+3L+eUs+ivt+WunuWQjeWItumqjOivgeixgeWFjSc6ICdybnJzdmVyaWZ5LWV4ZW1wdCcsXG5cdH0gYXMgUmVjb3JkPHN0cmluZywgVXNlclJpZ2h0cz47XG59O1xuXG5jb25zdCBwZXJtaXNzaW9uUmVxdWVzdGVkID0gZ2V0UGVybWlzc2lvbkJ5UGFnZSgpO1xuXG5jb25zdCBnZXRQZXJtaXNzaW9uUmVxdWVzdGVkOiBHZXRNZXNzYWdlczx0eXBlb2YgcGVybWlzc2lvblJlcXVlc3RlZD4gPSAoa2V5KSA9PiB7XG5cdHJldHVybiBwZXJtaXNzaW9uUmVxdWVzdGVkW2tleV0gfHwga2V5O1xufTtcblxuY29uc3QgZ2V0UGVybWlzc2lvblRlbXBsYXRlcyA9ICgpID0+IHtcblx0cmV0dXJuIHtcblx0XHRwYXRyb2xsZXI6ICdQYXRyb2wgZ3JhbnRlZCcsXG5cdFx0YXV0b3Jldmlld2VyOiAnQXV0b3BhdHJvbCBncmFudGVkJyxcblx0XHQnbWFzc21lc3NhZ2Utc2VuZGVyJzogJ01NUyBncmFudGVkJyxcblx0XHR0ZW1wbGF0ZWVkaXRvcjogJ1RlbXBsYXRlIGVkaXRvciBncmFudGVkJyxcblx0XHR0cmFuc3dpa2k6ICdUcmFuc3dpa2kgZ3JhbnRlZCcsXG5cdH0gYXMgY29uc3Qgc2F0aXNmaWVzIFBhcnRpYWw8UmVjb3JkPFVzZXJSaWdodHMsIHN0cmluZz4+O1xufTtcblxuY29uc3QgcGVybWlzc2lvblRlbXBsYXRlID0gZ2V0UGVybWlzc2lvblRlbXBsYXRlcygpO1xuXG5jb25zdCBnZXRwZXJtaXNzaW9uVGVtcGxhdGU6IEdldE1lc3NhZ2VzPHR5cGVvZiBwZXJtaXNzaW9uVGVtcGxhdGU+ID0gKGtleSkgPT4ge1xuXHRyZXR1cm4gcGVybWlzc2lvblRlbXBsYXRlW2tleV0gfHwga2V5O1xufTtcblxuZXhwb3J0IHtnZXRQZXJtaXNzb25OYW1lLCBnZXRQZXJtaXNzaW9uUmVxdWVzdGVkLCBnZXRwZXJtaXNzaW9uVGVtcGxhdGUsIHBlcm1pc3Npb25OYW1lc307XG4iLCAie1xuXHRcInVzZXJSaWdodHNNYW5hZ2VyU3VtbWFyeVwiOiBcIu+8iFtbTWVkaWFXaWtpOkdhZGdldC1Vc2VyUmlnaHRzTWFuYWdlci5qc3xVc2VyUmlnaHRzTWFuYWdlcl1d77yJXCIsXG5cdFwidmVyc2lvblwiOiBcIjIuMFwiXG59XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtpbml0TXdBcGl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmNvbnN0IGFwaTogbXcuQXBpID0gaW5pdE13QXBpKGBtb3JlYml0cy5qczsgVXNlclJpZ2h0c01hbmFnZXIvJHtPUFRJT05TLnZlcnNpb259YCk7XG5cbmV4cG9ydCB7YXBpfTtcbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge2dldFBlcm1pc3Nvbk5hbWUsIHBlcm1pc3Npb25OYW1lc30gZnJvbSAnLi9pMThuJztcbmltcG9ydCB7YXBpfSBmcm9tICcuL2FwaSc7XG5cbmNvbnN0IGFzc2lnblBlcm1pc3Npb24gPSAoXG5cdHVzZXJOYW1lOiBzdHJpbmcsXG5cdHBlcm1pc3Npb246IGtleW9mIHR5cGVvZiBwZXJtaXNzaW9uTmFtZXMsXG5cdHN1bW1hcnk6IHN0cmluZyxcblx0cmV2SWQ6IG51bWJlcixcblx0ZXhwaXJ5OiBzdHJpbmdcbikgPT4ge1xuXHRjb25zdCBwZXJtYUxpbmsgPSBgW1tTcGVjaWFsOlBlcm1hTGluay8ke3JldklkfSNVc2VyOiR7dXNlck5hbWV9fOadg+mZkOeUs+ivt11dYDtcblx0bGV0IGZ1bGxTdW1tYXJ5ID0gYCske2dldFBlcm1pc3Nvbk5hbWUocGVybWlzc2lvbil977ybJHtwZXJtYUxpbmt9YDtcblx0aWYgKHN1bW1hcnkgIT09ICcnKSB7XG5cdFx0ZnVsbFN1bW1hcnkgKz0gYO+8myR7c3VtbWFyeX1gO1xuXHR9XG5cdGZ1bGxTdW1tYXJ5ICs9IE9QVElPTlMudXNlclJpZ2h0c01hbmFnZXJTdW1tYXJ5O1xuXHRjb25zdCBwYXJhbXM6IEFwaVVzZXJyaWdodHNQYXJhbXMgPSB7XG5cdFx0YWN0aW9uOiAndXNlcnJpZ2h0cycsXG5cdFx0dXNlcjogdXNlck5hbWUucmVwbGFjZSgvIC9nLCAnXycpLFxuXHRcdHJlYXNvbjogZnVsbFN1bW1hcnksXG5cdFx0Ly8gQHRzLWV4cGVjdC1lcnJvciBUUzIzMjJcblx0XHRhZGQ6IHBlcm1pc3Npb24sXG5cdFx0ZXhwaXJ5OiBleHBpcnkgPT09ICcnID8gJ2luZmluaXR5JyA6IGV4cGlyeSxcblx0fTtcblx0cmV0dXJuIGFwaS5wb3N0V2l0aFRva2VuKCd1c2VycmlnaHRzJywgcGFyYW1zKTtcbn07XG5cbmV4cG9ydCB7YXNzaWduUGVybWlzc2lvbn07XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtnZXRQZXJtaXNzb25OYW1lLCBnZXRwZXJtaXNzaW9uVGVtcGxhdGUsIHBlcm1pc3Npb25OYW1lc30gZnJvbSAnLi9pMThuJztcbmltcG9ydCB7YXBpfSBmcm9tICcuL2FwaSc7XG5cbmNvbnN0IGlzc3VlVGVtcGxhdGUgPSAoXG5cdHVzZXJOYW1lOiBzdHJpbmcsXG5cdHBlcm1pc3Npb246IFBhcnRpYWw8a2V5b2YgdHlwZW9mIHBlcm1pc3Npb25OYW1lcz4sXG5cdHdhdGNoOiBib29sZWFuIHwgJ3dhdGNoJyB8ICd1bndhdGNoJ1xuKSA9PiB7XG5cdGNvbnN0IHRhbGtQYWdlID0gYFVzZXIgdGFsazoke3VzZXJOYW1lLnJlcGxhY2UoLyAvZywgJ18nKX1gO1xuXHRjb25zdCBwYXJhbXM6IEFwaUVkaXRQYWdlUGFyYW1zID0ge1xuXHRcdGFjdGlvbjogJ2VkaXQnLFxuXHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdHRpdGxlOiB0YWxrUGFnZSxcblx0XHRhcHBlbmR0ZXh0OiAnXFxuXFxue3snLmNvbmNhdChcblx0XHRcdCdzdWJzdDonLFxuXHRcdFx0Z2V0cGVybWlzc2lvblRlbXBsYXRlKFxuXHRcdFx0XHRwZXJtaXNzaW9uIGFzICd0ZW1wbGF0ZWVkaXRvcicgfCAndHJhbnN3aWtpJyB8ICdwYXRyb2xsZXInIHwgJ2F1dG9yZXZpZXdlcicgfCAnbWFzc21lc3NhZ2Utc2VuZGVyJ1xuXHRcdFx0KSxcblx0XHRcdCd9fX0nXG5cdFx0KSxcblx0XHRzdW1tYXJ5OiBg5qC55o2u5YWx6K+G5o6I5LqIJHtnZXRQZXJtaXNzb25OYW1lKHBlcm1pc3Npb24pfSR7T1BUSU9OUy51c2VyUmlnaHRzTWFuYWdlclN1bW1hcnl9YCxcblx0XHR3YXRjaGxpc3Q6IHdhdGNoID8gJ3dhdGNoJyA6ICd1bndhdGNoJyxcblx0fTtcblx0cmV0dXJuIGFwaS5wb3N0V2l0aEVkaXRUb2tlbihwYXJhbXMpO1xufTtcblxuZXhwb3J0IHtpc3N1ZVRlbXBsYXRlfTtcbiIsICIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW5zYWZlLWFzc2lnbm1lbnQgKi9cbmltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7YXBpfSBmcm9tICcuL2FwaSc7XG5cbmNvbnN0IHF1ZXJ5UmV2aXNpb25zID0gYXN5bmMgKHRpdGxlczogc3RyaW5nIHwgc3RyaW5nW10sIHJ2c2VjdGlvbjogc3RyaW5nKSA9PiB7XG5cdGNvbnN0IHBhcmFtczogQXBpUXVlcnlSZXZpc2lvbnNQYXJhbXMgPSB7XG5cdFx0dGl0bGVzLFxuXHRcdHJ2c2VjdGlvbixcblx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdHByb3A6ICdyZXZpc2lvbnMnLFxuXHRcdGN1cnRpbWVzdGFtcDogdHJ1ZSxcblx0XHRydnByb3A6IFsnY29udGVudCcsICd0aW1lc3RhbXAnXSxcblx0fTtcblxuXHRyZXR1cm4gYXdhaXQgYXBpLnBvc3QocGFyYW1zKTtcbn07XG5cbmNvbnN0IG1hcmtBc0RvbmUgPSAodXNlck5hbWU6IHN0cmluZywgaW5kZXg6IHN0cmluZywgY2xvc2luZ1JlbWFya3M6IHN0cmluZykgPT4ge1xuXHRjb25zdCB7d2dQYWdlTmFtZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cdGNvbnN0IHNlY3Rpb25TZWxlY3RvciA9IGAjJHtDU1MuZXNjYXBlKGBVc2VyOiR7dXNlck5hbWUucmVwbGFjZSgvXCIvZywgJy4yMicpLnJlcGxhY2UoLyAvZywgJ18nKX1gKX0ke2luZGV4ID8/ICcnfWA7XG5cdGNvbnN0IHNlY3Rpb25Ob2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWN0aW9uU2VsZWN0b3IpO1xuXHRpZiAoIXNlY3Rpb25Ob2RlKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW5zYWZlLWNhbGxcblx0Y29uc3QgWywgc2VjdGlvbk51bWJlcl0gPSAkKHNlY3Rpb25Ob2RlIGFzIEhUTUxFbGVtZW50KVxuXHRcdC5zaWJsaW5ncygnLm13LWVkaXRzZWN0aW9uJylcblx0XHQuZmluZCgnYTpub3QoLm13LWVkaXRzZWN0aW9uLXZpc3VhbGVkaXRvciknKVxuXHRcdC5wcm9wKCdocmVmJylcblx0XHQubWF0Y2goL3NlY3Rpb249KFxcZCspLyk7XG5cdGxldCBiYXNldGltZXN0YW1wOiBzdHJpbmc7XG5cdGxldCBjdXJ0aW1lc3RhbXA6IHN0cmluZztcblx0bGV0IGNvbnRlbnQ6IHN0cmluZztcblxuXHRyZXR1cm4gcXVlcnlSZXZpc2lvbnMod2dQYWdlTmFtZSwgYCR7c2VjdGlvbk51bWJlcn1gKVxuXHRcdC50aGVuKChkYXRhKSA9PiB7XG5cdFx0XHRpZiAoIWRhdGFbJ3F1ZXJ5J10gfHwgIWRhdGFbJ3F1ZXJ5J10ucGFnZXMpIHtcblx0XHRcdFx0cmV0dXJuICQuRGVmZXJyZWQoKS5yZWplY3QoJ3Vua25vd24nKTtcblx0XHRcdH1cblxuXHRcdFx0Y29uc3QgW3BhZ2VdID0gZGF0YVsncXVlcnknXS5wYWdlcztcblxuXHRcdFx0aWYgKCFwYWdlIHx8IHBhZ2UuaW52YWxpZCkge1xuXHRcdFx0XHRyZXR1cm4gJC5EZWZlcnJlZCgpLnJlamVjdCgnaW52YWxpZHRpdGxlJyk7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChwYWdlLm1pc3NpbmcpIHtcblx0XHRcdFx0cmV0dXJuICQuRGVmZXJyZWQoKS5yZWplY3QoJ25vY3JlYXRlLW1pc3NpbmcnKTtcblx0XHRcdH1cblxuXHRcdFx0Y3VydGltZXN0YW1wID0gZGF0YVsnY3VydGltZXN0YW1wJ10gYXMgc3RyaW5nO1xuXHRcdFx0W3tiYXNldGltZXN0YW1wLCBjb250ZW50fV0gPSBwYWdlLnJldmlzaW9ucztcblx0XHRcdGNvbnRlbnQgPSBjb250ZW50LnRyaW0oKS5yZXBsYWNlKC86e3tzdGF0dXMoXFx8Lio/KT99fS9pLCAnOnt7U3RhdHVzfCt9fScpO1xuXHRcdFx0Y29udGVudCArPSBjbG9zaW5nUmVtYXJrcztcblx0XHRcdHJldHVybiAkLkRlZmVycmVkKCkucmVzb2x2ZSgpO1xuXHRcdH0pXG5cdFx0LnRoZW4oKCkgPT4ge1xuXHRcdFx0Y29uc3QgZWRpdFBhcmFtczogQXBpRWRpdFBhZ2VQYXJhbXMgPSB7XG5cdFx0XHRcdGJhc2V0aW1lc3RhbXAsXG5cdFx0XHRcdGFjdGlvbjogJ2VkaXQnLFxuXHRcdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdFx0XHR0aXRsZTogd2dQYWdlTmFtZSxcblx0XHRcdFx0bm9jcmVhdGU6IHRydWUsXG5cdFx0XHRcdHNlY3Rpb246IGAke3NlY3Rpb25OdW1iZXJ9YCxcblx0XHRcdFx0c3RhcnR0aW1lc3RhbXA6IGN1cnRpbWVzdGFtcCxcblx0XHRcdFx0c3VtbWFyeTogYC8qIFVzZXI6JHt1c2VyTmFtZX0gKi8g5a6M5oiQJHtPUFRJT05TLnVzZXJSaWdodHNNYW5hZ2VyU3VtbWFyeX1gLFxuXHRcdFx0XHR0ZXh0OiBjb250ZW50LFxuXHRcdFx0fTtcblx0XHRcdGlmIChtdy5jb25maWcuZ2V0KCd3Z1VzZXJOYW1lJykpIHtcblx0XHRcdFx0ZWRpdFBhcmFtcy5hc3NlcnQgPSAndXNlcic7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBhcGkucG9zdFdpdGhFZGl0VG9rZW4oZWRpdFBhcmFtcyk7XG5cdFx0fSk7XG59O1xuXG5leHBvcnQge21hcmtBc0RvbmV9O1xuIiwgIi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXRzLWNvbW1lbnRcbi8vIEB0cy1ub2NoZWNrXG5pbXBvcnQge2dldFBlcm1pc3Npb25SZXF1ZXN0ZWQsIGdldFBlcm1pc3Nvbk5hbWV9IGZyb20gJy4vaTE4bic7XG5pbXBvcnQge2FwaX0gZnJvbSAnLi9hcGknO1xuaW1wb3J0IHthc3NpZ25QZXJtaXNzaW9ufSBmcm9tICcuL2Fzc2lnblBlcm1pc3Npb24nO1xuaW1wb3J0IHtpc3N1ZVRlbXBsYXRlfSBmcm9tICcuL2lzc3VlVGVtcGxhdGUnO1xuaW1wb3J0IHttYXJrQXNEb25lfSBmcm9tICcuL21hcmtBc0RvbmUnO1xuXG5jb25zdCBzaG93RGlhbG9nID0gKHt1c2VyTmFtZSwgaW5kZXgsIHBlcm1pc3Npb24sICRib2R5fSkgPT4ge1xuXHRjb25zdCBEaWFsb2cgPSBmdW5jdGlvbiAoY29uZmlnKSB7XG5cdFx0RGlhbG9nLnN1cGVyLmNhbGwodGhpcywgY29uZmlnKTtcblx0fTtcblx0T08uaW5oZXJpdENsYXNzKERpYWxvZywgT08udWkuUHJvY2Vzc0RpYWxvZyk7XG5cdERpYWxvZy5zdGF0aWMubmFtZSA9ICd1c2VyLXJpZ2h0cy1tYW5hZ2VyJztcblx0RGlhbG9nLnN0YXRpYy50aXRsZSA9IGDmjojkuogke2dldFBlcm1pc3Nvbk5hbWUocGVybWlzc2lvbil9JHt3aW5kb3cud2dVTFMoJ+e7mScsICfntaYnKX0ke3VzZXJOYW1lfWA7XG5cdERpYWxvZy5zdGF0aWMuYWN0aW9ucyA9IFtcblx0XHR7XG5cdFx0XHRhY3Rpb246ICdzdWJtaXQnLFxuXHRcdFx0bGFiZWw6IHdpbmRvdy53Z1VMUygn5o6I5p2DJywgJ+aOiOasiicpLFxuXHRcdFx0ZmxhZ3M6IFsncHJpbWFyeScsICdwcm9ncmVzc2l2ZSddLFxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0bGFiZWw6ICflj5bmtognLFxuXHRcdFx0ZmxhZ3M6IFsnc2FmZScsICdjbG9zZSddLFxuXHRcdH0sXG5cdF07XG5cdERpYWxvZy5wcm90b3R5cGUuZ2V0QXBpTWFuYWdlciA9IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gdGhpcy5hcGlNYW5hZ2VyO1xuXHR9O1xuXHREaWFsb2cucHJvdG90eXBlLmdldEJvZHlIZWlnaHQgPSAoKSA9PiB7XG5cdFx0cmV0dXJuIDI1NTtcblx0fTtcblx0RGlhbG9nLnByb3RvdHlwZS5pbml0aWFsaXplID0gYXN5bmMgZnVuY3Rpb24gKCkge1xuXHRcdERpYWxvZy5zdXBlci5wcm90b3R5cGUuaW5pdGlhbGl6ZS5jYWxsKHRoaXMpO1xuXHRcdHRoaXMuZWRpdEZpZWxkc2V0ID0gbmV3IE9PLnVpLkZpZWxkc2V0TGF5b3V0KHtcblx0XHRcdGNsYXNzZXM6IFsnY29udGFpbmVyJ10sXG5cdFx0fSk7XG5cdFx0dGhpcy5lZGl0UGFuZWwgPSBuZXcgT08udWkuUGFuZWxMYXlvdXQoe1xuXHRcdFx0ZXhwYW5kZWQ6IGZhbHNlLFxuXHRcdH0pO1xuXHRcdHRoaXMuZWRpdFBhbmVsLiRlbGVtZW50LmFwcGVuZCh0aGlzLmVkaXRGaWVsZHNldC4kZWxlbWVudCk7XG5cdFx0Y29uc3QgcmlnaHRMb2dXYXBwZXIgPSAkKCc8c3Bhbj4nKTtcblx0XHRjb25zdCB1cmwgPSBtdy51dGlsLmdldFVybCgnU3BlY2lhbDpMb2cvcmlnaHRzJywge1xuXHRcdFx0dHlwZTogJ3JpZ2h0cycsXG5cdFx0XHRwYWdlOiBgVXNlcjoke3VzZXJOYW1lfWAsXG5cdFx0fSk7XG5cdFx0JCgnPGE+Jylcblx0XHRcdC50ZXh0KCfmnIDov5HmnYPpmZDml6Xlv5cnKVxuXHRcdFx0LmF0dHIoe1xuXHRcdFx0XHRocmVmOiB1cmwsXG5cdFx0XHRcdHRhcmdldDogJ19ibGFuaycsXG5cdFx0XHR9KVxuXHRcdFx0LmFwcGVuZFRvKHJpZ2h0TG9nV2FwcGVyKTtcblx0XHRyaWdodExvZ1dhcHBlci5hcHBlbmQoJ++8micpO1xuXHRcdGNvbnN0IHJpZ2h0TG9nVGV4dCA9ICQoJzxzcGFuPicpLnRleHQoJ+iOt+WPluS4rScpLmFwcGVuZFRvKHJpZ2h0TG9nV2FwcGVyKTtcblx0XHR0aGlzLnJpZ2h0TG9nID0gbmV3IE9PLnVpLkxhYmVsV2lkZ2V0KHtcblx0XHRcdGxhYmVsOiByaWdodExvZ1dhcHBlcixcblx0XHR9KTtcblx0XHRjb25zdCBwYXJhbXMgPSB7XG5cdFx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0XHRsZWFjdGlvbjogJ3JpZ2h0cy9yaWdodHMnLFxuXHRcdFx0bGVsaW1pdDogMSxcblx0XHRcdGxldGl0bGU6IGBVc2VyOiR7dXNlck5hbWV9YCxcblx0XHRcdGxpc3Q6ICdsb2dldmVudHMnLFxuXHRcdH07XG5cdFx0Y29uc3Qge3F1ZXJ5fSA9IGF3YWl0IGFwaS5nZXQocGFyYW1zKTtcblx0XHRjb25zdCBsb2dzID0gcXVlcnkubG9nZXZlbnRzO1xuXHRcdGlmIChsb2dzLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0cmlnaHRMb2dUZXh0LnRleHQoJ+ayoeacieS7u+S9leaXpeW/lycpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbmV3LWNhcFxuXHRcdFx0Y29uc3QgdGltZXN0YW1wID0gbmV3IE1vcmViaXRzLmRhdGUobG9nc1swXS50aW1lc3RhbXApLmNhbGVuZGFyKCk7XG5cdFx0XHRjb25zdCByaWdodHMgPSBsb2dzWzBdLnBhcmFtcy5uZXdncm91cHMuam9pbign44CBJykgfHwgJ++8iOaXoO+8iSc7XG5cdFx0XHRyaWdodExvZ1RleHQudGV4dChgJHt0aW1lc3RhbXB9ICR7bG9nc1swXS51c2VyfeWwhueUqOaIt+e7hOaUueS4uiR7cmlnaHRzfWApO1xuXHRcdH1cblx0XHR0aGlzLnJpZ2h0c0NoYW5nZVN1bW1hcnlJbnB1dCA9IG5ldyBPTy51aS5UZXh0SW5wdXRXaWRnZXQoe1xuXHRcdFx0dmFsdWU6ICcnLFxuXHRcdFx0cGxhY2Vob2xkZXI6ICflj6/nlZnnqbonLFxuXHRcdH0pO1xuXHRcdHRoaXMuZXhwaXJ5SW5wdXQgPSBuZXcgbXcud2lkZ2V0cy5FeHBpcnlXaWRnZXQoe1xuXHRcdFx0JG92ZXJsYXk6ICRib2R5LmZpbmQoJy5vby11aS13aW5kb3cnKSxcblx0XHRcdFJlbGF0aXZlSW5wdXRDbGFzczogbXcud2lkZ2V0cy5TZWxlY3RXaXRoSW5wdXRXaWRnZXQsXG5cdFx0XHRyZWxhdGl2ZUlucHV0OiB7XG5cdFx0XHRcdG9yOiB0cnVlLFxuXHRcdFx0XHRkcm9wZG93bmlucHV0OiB7XG5cdFx0XHRcdFx0b3B0aW9uczogW1xuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRkYXRhOiAnMSBkYXknLFxuXHRcdFx0XHRcdFx0XHRsYWJlbDogJzHlpKknLFxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0ZGF0YTogJzEgd2VlaycsXG5cdFx0XHRcdFx0XHRcdGxhYmVsOiAnMeWRqCcsXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRkYXRhOiAnMSBtb250aCcsXG5cdFx0XHRcdFx0XHRcdGxhYmVsOiAnMeS4quaciCcsXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRkYXRhOiAnMyBtb250aHMnLFxuXHRcdFx0XHRcdFx0XHRsYWJlbDogJzPkuKrmnIgnLFxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0ZGF0YTogJzYgbW9udGhzJyxcblx0XHRcdFx0XHRcdFx0bGFiZWw6ICc25Liq5pyIJyxcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdGRhdGE6ICcxIHllYXInLFxuXHRcdFx0XHRcdFx0XHRsYWJlbDogJzHlubQnLFxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0ZGF0YTogJ2luZmluaXRlJyxcblx0XHRcdFx0XHRcdFx0bGFiZWw6ICfml6DpmZDmnJ8nLFxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0ZGF0YTogJ290aGVyJyxcblx0XHRcdFx0XHRcdFx0bGFiZWw6ICflhbbku5bml7bpl7QnLFxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRdLFxuXHRcdFx0XHRcdHZhbHVlOiAnaW5maW5pdGUnLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHR0ZXh0aW5wdXQ6IHtcblx0XHRcdFx0XHRyZXF1aXJlZDogdHJ1ZSxcblx0XHRcdFx0fSxcblx0XHRcdH0sXG5cdFx0fSk7XG5cdFx0dGhpcy5jbG9zaW5nUmVtYXJrc0lucHV0ID0gbmV3IE9PLnVpLlRleHRJbnB1dFdpZGdldCh7XG5cdFx0XHR2YWx1ZTogJ3t7ZG9uZX1944CCLS1+ficuY29uY2F0KCd+ficpLFxuXHRcdH0pO1xuXHRcdHRoaXMud2F0Y2hUYWxrUGFnZUNoZWNrYm94ID0gbmV3IE9PLnVpLkNoZWNrYm94SW5wdXRXaWRnZXQoe1xuXHRcdFx0c2VsZWN0ZWQ6IGZhbHNlLFxuXHRcdH0pO1xuXHRcdHRoaXMuZWRpdEZpZWxkc2V0LmFkZEl0ZW1zKHRoaXMucmlnaHRMb2cpO1xuXHRcdGNvbnN0IGZvcm1FbGVtZW50cyA9IFtcblx0XHRcdG5ldyBPTy51aS5GaWVsZExheW91dCh0aGlzLnJpZ2h0c0NoYW5nZVN1bW1hcnlJbnB1dCwge1xuXHRcdFx0XHRsYWJlbDogd2luZG93LndnVUxTKCfmjojmnYPljp/lm6AnLCAn5o6I5p2D5Y6f5ZugJyksXG5cdFx0XHR9KSxcblx0XHRcdG5ldyBPTy51aS5GaWVsZExheW91dCh0aGlzLmV4cGlyeUlucHV0LCB7XG5cdFx0XHRcdGxhYmVsOiB3aW5kb3cud2dVTFMoJ+e7k+adn+aXtumXtCcsICfntZDmnZ/mmYLplpMnKSxcblx0XHRcdH0pLFxuXHRcdFx0bmV3IE9PLnVpLkZpZWxkTGF5b3V0KHRoaXMuY2xvc2luZ1JlbWFya3NJbnB1dCwge1xuXHRcdFx0XHRsYWJlbDogd2luZG93LndnVUxTKCflhbPpl63or7fmsYLnlZnoqIAnLCAn6Zec6ZaJ6KuL5rGC55WZ6KiAJyksXG5cdFx0XHR9KSxcblx0XHRdO1xuXHRcdGlmIChnZXRQZXJtaXNzaW9uUmVxdWVzdGVkKHBlcm1pc3Npb24pKSB7XG5cdFx0XHRmb3JtRWxlbWVudHNbZm9ybUVsZW1lbnRzLmxlbmd0aF0gPSBuZXcgT08udWkuRmllbGRMYXlvdXQodGhpcy53YXRjaFRhbGtQYWdlQ2hlY2tib3gsIHtcblx0XHRcdFx0bGFiZWw6IHdpbmRvdy53Z1VMUygn55uR6KeG55So5oi36K6o6K666aG1JywgJ+ebo+imlueUqOaItuiojuirlumggScpLFxuXHRcdFx0fSk7XG5cdFx0fVxuXHRcdHRoaXMuZWRpdEZpZWxkc2V0LmFkZEl0ZW1zKGZvcm1FbGVtZW50cyk7XG5cdFx0dGhpcy5zdWJtaXRQYW5lbCA9IG5ldyBPTy51aS5QYW5lbExheW91dCh7XG5cdFx0XHQkOiB0aGlzLiQsXG5cdFx0XHRleHBhbmRlZDogZmFsc2UsXG5cdFx0fSk7XG5cdFx0dGhpcy5zdWJtaXRGaWVsZHNldCA9IG5ldyBPTy51aS5GaWVsZHNldExheW91dCh7XG5cdFx0XHRjbGFzc2VzOiBbJ2NvbnRhaW5lciddLFxuXHRcdH0pO1xuXHRcdHRoaXMuc3VibWl0UGFuZWwuJGVsZW1lbnQuYXBwZW5kKHRoaXMuc3VibWl0RmllbGRzZXQuJGVsZW1lbnQpO1xuXHRcdHRoaXMuY2hhbmdlUmlnaHRzUHJvZ3Jlc3NMYWJlbCA9IG5ldyBPTy51aS5MYWJlbFdpZGdldCgpO1xuXHRcdHRoaXMuY2hhbmdlUmlnaHRzUHJvZ3Jlc3NGaWVsZCA9IG5ldyBPTy51aS5GaWVsZExheW91dCh0aGlzLmNoYW5nZVJpZ2h0c1Byb2dyZXNzTGFiZWwpO1xuXHRcdHRoaXMubWFya0FzRG9uZVByb2dyZXNzTGFiZWwgPSBuZXcgT08udWkuTGFiZWxXaWRnZXQoKTtcblx0XHR0aGlzLm1hcmtBc0RvbmVQcm9ncmVzc0ZpZWxkID0gbmV3IE9PLnVpLkZpZWxkTGF5b3V0KHRoaXMubWFya0FzRG9uZVByb2dyZXNzTGFiZWwpO1xuXHRcdHRoaXMuaXNzdWVUZW1wbGF0ZVByb2dyZXNzTGFiZWwgPSBuZXcgT08udWkuTGFiZWxXaWRnZXQoKTtcblx0XHR0aGlzLmlzc3VlVGVtcGxhdGVQcm9ncmVzc0ZpZWxkID0gbmV3IE9PLnVpLkZpZWxkTGF5b3V0KHRoaXMuaXNzdWVUZW1wbGF0ZVByb2dyZXNzTGFiZWwpO1xuXHRcdHRoaXMuc3RhY2tMYXlvdXQgPSBuZXcgT08udWkuU3RhY2tMYXlvdXQoe1xuXHRcdFx0aXRlbXM6IFt0aGlzLmVkaXRQYW5lbCwgdGhpcy5zdWJtaXRQYW5lbF0sXG5cdFx0XHRwYWRkZWQ6IHRydWUsXG5cdFx0fSk7XG5cdFx0dGhpcy4kYm9keS5hcHBlbmQodGhpcy5zdGFja0xheW91dC4kZWxlbWVudCk7XG5cdH07XG5cdERpYWxvZy5wcm90b3R5cGUub25TdWJtaXQgPSBmdW5jdGlvbiAoKSB7XG5cdFx0Y29uc3Qgc2VsZiA9IHRoaXM7XG5cdFx0bGV0IHByb21pc2VDb3VudCA9IGdldFBlcm1pc3Npb25SZXF1ZXN0ZWQocGVybWlzc2lvbikgPyAzIDogMjtcblx0XHRzZWxmLmFjdGlvbnMuc2V0QWJpbGl0aWVzKHtcblx0XHRcdHN1Ym1pdDogZmFsc2UsXG5cdFx0fSk7XG5cdFx0Y29uc3QgYWRkUHJvbWlzZSA9ICh7JGZpZWxkfSwgcHJvbWlzZSkgPT4ge1xuXHRcdFx0c2VsZi5wdXNoUGVuZGluZygpO1xuXHRcdFx0cHJvbWlzZVxuXHRcdFx0XHQuZG9uZSgoKSA9PiB7XG5cdFx0XHRcdFx0JGZpZWxkLmFwcGVuZChcblx0XHRcdFx0XHRcdCQoJzxzcGFuPicpXG5cdFx0XHRcdFx0XHRcdC50ZXh0KCflrozmiJDvvIEnKVxuXHRcdFx0XHRcdFx0XHQucHJvcCgnc3R5bGUnLCAncG9zaXRpb246IHJlbGF0aXZlOyB0b3A6IC41ZW07IGNvbG9yOiAjMDA5MDAwOyBmb250LXdlaWdodDogYm9sZDsnKVxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdH0pXG5cdFx0XHRcdC5mYWlsKChvYmopID0+IHtcblx0XHRcdFx0XHRpZiAob2JqICYmIG9iai5lcnJvciAmJiBvYmouZXJyb3IuaW5mbykge1xuXHRcdFx0XHRcdFx0JGZpZWxkLmFwcGVuZChcblx0XHRcdFx0XHRcdFx0JCgnPHNwYW4+Jylcblx0XHRcdFx0XHRcdFx0XHQudGV4dChg6ZSZ6K+v77yaJHtvYmouZXJyb3IuaW5mb31gKVxuXHRcdFx0XHRcdFx0XHRcdC5wcm9wKCdzdHlsZScsICdwb3NpdGlvbjogcmVsYXRpdmU7IHRvcDogLjVlbTsgY29sb3I6ICNjMDA7IGZvbnQtd2VpZ2h0OiBib2xkOycpXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHQkZmllbGQuYXBwZW5kKFxuXHRcdFx0XHRcdFx0XHQkKCc8c3Bhbj4nKVxuXHRcdFx0XHRcdFx0XHRcdC50ZXh0KCflj5HnlJ/mnKrnn6XplJnor6/jgIInKVxuXHRcdFx0XHRcdFx0XHRcdC5wcm9wKCdzdHlsZScsICdwb3NpdGlvbjogcmVsYXRpdmU7IHRvcDogLjVlbTsgY29sb3I6ICNjMDA7IGZvbnQtd2VpZ2h0OiBib2xkOycpXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSlcblx0XHRcdFx0LmFsd2F5cygoKSA9PiB7XG5cdFx0XHRcdFx0cHJvbWlzZUNvdW50LS07IC8vIEZJWE1FOiBtYXliZSB3ZSBjb3VsZCB1c2UgYSBzZWxmLmlzUGVuZGluZygpIG9yIHNvbWV0aGluZ1xuXHRcdFx0XHRcdHNlbGYucG9wUGVuZGluZygpO1xuXHRcdFx0XHRcdGlmIChwcm9taXNlQ291bnQgPT09IDApIHtcblx0XHRcdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRsb2NhdGlvbi5yZWxvYWQodHJ1ZSk7XG5cdFx0XHRcdFx0XHR9LCAxMDAwKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0cmV0dXJuIHByb21pc2U7XG5cdFx0fTtcblx0XHRzZWxmLm1hcmtBc0RvbmVQcm9ncmVzc0ZpZWxkLnNldExhYmVsKCfmoIforrDor7fmsYLkuLrlt7LlrozmiJAuLi4nKTtcblx0XHRzZWxmLnN1Ym1pdEZpZWxkc2V0LmFkZEl0ZW1zKFtzZWxmLm1hcmtBc0RvbmVQcm9ncmVzc0ZpZWxkXSk7XG5cdFx0c2VsZi5jaGFuZ2VSaWdodHNQcm9ncmVzc0ZpZWxkLnNldExhYmVsKCfmjojkuojmnYPpmZAuLi4nKTtcblx0XHRzZWxmLnN1Ym1pdEZpZWxkc2V0LmFkZEl0ZW1zKFtzZWxmLmNoYW5nZVJpZ2h0c1Byb2dyZXNzRmllbGRdKTtcblx0XHRpZiAoZ2V0UGVybWlzc2lvblJlcXVlc3RlZChwZXJtaXNzaW9uKSkge1xuXHRcdFx0c2VsZi5pc3N1ZVRlbXBsYXRlUHJvZ3Jlc3NGaWVsZC5zZXRMYWJlbCgn5Y+R6YCB6YCa55+lLi4uJyk7XG5cdFx0XHRzZWxmLnN1Ym1pdEZpZWxkc2V0LmFkZEl0ZW1zKFtzZWxmLmlzc3VlVGVtcGxhdGVQcm9ncmVzc0ZpZWxkXSk7XG5cdFx0fVxuXHRcdGFkZFByb21pc2UoXG5cdFx0XHRzZWxmLm1hcmtBc0RvbmVQcm9ncmVzc0ZpZWxkLFxuXHRcdFx0bWFya0FzRG9uZSh1c2VyTmFtZSwgaW5kZXgsIGBcXG46JHt0aGlzLmNsb3NpbmdSZW1hcmtzSW5wdXQuZ2V0VmFsdWUoKX1gKS50aGVuKCh7ZWRpdH0pID0+IHtcblx0XHRcdFx0YWRkUHJvbWlzZShcblx0XHRcdFx0XHRzZWxmLmNoYW5nZVJpZ2h0c1Byb2dyZXNzRmllbGQsXG5cdFx0XHRcdFx0YXNzaWduUGVybWlzc2lvbihcblx0XHRcdFx0XHRcdHVzZXJOYW1lLFxuXHRcdFx0XHRcdFx0cGVybWlzc2lvbixcblx0XHRcdFx0XHRcdHRoaXMucmlnaHRzQ2hhbmdlU3VtbWFyeUlucHV0LmdldFZhbHVlKCksXG5cdFx0XHRcdFx0XHRlZGl0Lm5ld3JldmlkLFxuXHRcdFx0XHRcdFx0dGhpcy5leHBpcnlJbnB1dC5nZXRWYWx1ZSgpXG5cdFx0XHRcdFx0KS50aGVuKCgpID0+IHtcblx0XHRcdFx0XHRcdGlmIChnZXRQZXJtaXNzaW9uUmVxdWVzdGVkKHBlcm1pc3Npb24pKSB7XG5cdFx0XHRcdFx0XHRcdGFkZFByb21pc2UoXG5cdFx0XHRcdFx0XHRcdFx0c2VsZi5pc3N1ZVRlbXBsYXRlUHJvZ3Jlc3NGaWVsZCxcblx0XHRcdFx0XHRcdFx0XHRpc3N1ZVRlbXBsYXRlKHVzZXJOYW1lLCBwZXJtaXNzaW9uLCB0aGlzLndhdGNoVGFsa1BhZ2VDaGVja2JveC5pc1NlbGVjdGVkKCkpXG5cdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0KTtcblx0XHRcdH0pXG5cdFx0KTtcblx0XHRzZWxmLnN0YWNrTGF5b3V0LnNldEl0ZW0oc2VsZi5zdWJtaXRQYW5lbCk7XG5cdH07XG5cdERpYWxvZy5wcm90b3R5cGUuZ2V0QWN0aW9uUHJvY2VzcyA9IGZ1bmN0aW9uIChhY3Rpb24pIHtcblx0XHRyZXR1cm4gRGlhbG9nLnN1cGVyLnByb3RvdHlwZS5nZXRBY3Rpb25Qcm9jZXNzLmNhbGwodGhpcywgYWN0aW9uKS5uZXh0KGZ1bmN0aW9uICgpIHtcblx0XHRcdGlmIChhY3Rpb24gPT09ICdzdWJtaXQnKSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLm9uU3VibWl0KCk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gRGlhbG9nLnN1cGVyLnByb3RvdHlwZS5nZXRBY3Rpb25Qcm9jZXNzLmNhbGwodGhpcywgYWN0aW9uKTtcblx0XHR9LCB0aGlzKTtcblx0fTtcblx0Y29uc3QgZGlhbG9nID0gbmV3IERpYWxvZyh7XG5cdFx0c2l6ZTogJ21lZGl1bScsXG5cdH0pO1xuXHRjb25zdCB3aW5kb3dNYW5hZ2VyID0gbmV3IE9PLnVpLldpbmRvd01hbmFnZXIoKTtcblx0JGJvZHkuYXBwZW5kKHdpbmRvd01hbmFnZXIuJGVsZW1lbnQpO1xuXHR3aW5kb3dNYW5hZ2VyLmFkZFdpbmRvd3MoW2RpYWxvZ10pO1xuXHR2b2lkIHdpbmRvd01hbmFnZXIub3BlbldpbmRvdyhkaWFsb2cpO1xufTtcblxuZXhwb3J0IHtzaG93RGlhbG9nfTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLHFCQUFzQkMsUUFBQSxpQkFBQTs7QUNFdEIsSUFBTUMscUJBQXFCQSxNQUFNO0FBQ2hDLFNBQU87SUFDTkMsV0FBVztJQUNYQyxjQUFjO0lBQ2RDLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEJDLGNBQWM7SUFDZEMsV0FBVztJQUNYQyxnQkFBZ0I7SUFDaEJDLEtBQUs7SUFDTCxxQkFBcUI7RUFDdEI7QUFDRDtBQUVBLElBQU1DLGtCQUFrQlIsbUJBQW1CO0FBRTNDLElBQU1TLG1CQUF5REMsU0FBUTtBQUN0RSxTQUFPRixnQkFBZ0JFLEdBQUcsS0FBS0E7QUFDaEM7QUFFQSxJQUFNQyxzQkFBc0JBLE1BQU07QUFDakMsU0FBTztJ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RTFKLEtBQUssY0FBYyxFQUFFdUQsS0FBSyxJQUFJLE9BQUEsUUFBQThGLDBCQUFBLFNBQUFBLHdCQUFLO0FBQy9GLFVBQU1wSyxRQUNMdUssY0FBQSxRQUFBOU0sT0FBc0JFLFFBQVEsS0FBTTRNLGNBQWMsUUFBQTlNLE9BQVFFLFFBQVEsRUFBR1UsUUFBUSxNQUFNLEtBQUssRUFBRUEsUUFBUSxNQUFNLEdBQUcsSUFDeEcsS0FDQWtNLFVBQ0NsTSxRQUFRLFNBQVMsRUFBRSxFQUNuQkEsUUFBUVYsVUFBVSxFQUFFLEVBQ3BCVSxRQUFRVixTQUFTVSxRQUFRLE1BQU0sS0FBSyxFQUFFQSxRQUFRLE1BQU0sR0FBRyxHQUFHLEVBQUU7QUFFakUrRCxlQUFXO01BQ1ZwQztNQUNBckM7TUFDQUM7TUFDQXlFO0lBQ0QsQ0FBQztFQUNGLENBQUM7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogWyJpbXBvcnRfZXh0X2dhZGdldDIiLCAicmVxdWlyZSIsICJnZXRQZXJtaXNzaW9uTmFtZXMiLCAicGF0cm9sbGVyIiwgImF1dG9yZXZpZXdlciIsICJjb25maXJtZWQiLCAiZXZlbnRzcG9uc29yIiwgInRyYW5zd2lraSIsICJ0ZW1wbGF0ZWVkaXRvciIsICJib3QiLCAicGVybWlzc2lvbk5hbWVzIiwgImdldFBlcm1pc3Nvbk5hbWUiLCAia2V5IiwgImdldFBlcm1pc3Npb25CeVBhZ2UiLCAicGVybWlzc2lvblJlcXVlc3RlZCIsICJnZXRQZXJtaXNzaW9uUmVxdWVzdGVkIiwgImdldFBlcm1pc3Npb25UZW1wbGF0ZXMiLCAicGVybWlzc2lvblRlbXBsYXRlIiwgImdldHBlcm1pc3Npb25UZW1wbGF0ZSIsICJ1c2VyUmlnaHRzTWFuYWdlclN1bW1hcnkiLCAidmVyc2lvbiIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJhcGkiLCAiaW5pdE13QXBpIiwgImNvbmNhdCIsICJhc3NpZ25QZXJtaXNzaW9uIiwgInVzZXJOYW1lIiwgInBlcm1pc3Npb24iLCAic3VtbWFyeSIsICJyZXZJZCIsICJleHBpcnkiLCAicGVybWFMaW5rIiwgImZ1bGxTdW1tYXJ5IiwgInBhcmFtcyIsICJhY3Rpb24iLCAidXNlciIsICJyZXBsYWNlIiwgInJlYXNvbiIsICJhZGQiLCAicG9zdFdpdGhUb2tlbiIsICJpc3N1ZVRlbXBsYXRlIiwgIndhdGNoIiwgInRhbGtQYWdlIiwgImZvcm1hdCIsICJ0aXRsZSIsICJhcHBlbmR0ZXh0IiwgIndhdGNobGlzdCIsICJwb3N0V2l0aEVkaXRUb2tlbiIsICJxdWVyeVJldmlzaW9ucyIsICJfcmVmIiwgIl9hc3luY1RvR2VuZXJhdG9yIiwgInRpdGxlcyIsICJydnNlY3Rpb24iLCAiZm9ybWF0dmVyc2lvbiIsICJwcm9wIiwgImN1cnRpbWVzdGFtcCIsICJydnByb3AiLCAicG9zdCIsICJfeCIsICJfeDIiLCAiYXBwbHkiLCAiYXJndW1lbnRzIiwgIm1hcmtBc0RvbmUiLCAiaW5kZXgiLCAiY2xvc2luZ1JlbWFya3MiLCAid2dQYWdlTmFtZSIsICJtdyIsICJjb25maWciLCAiZ2V0IiwgInNlY3Rpb25TZWxlY3RvciIsICJDU1MiLCAiZXNjYXBlIiwgInNlY3Rpb25Ob2RlIiwgImRvY3VtZW50IiwgInF1ZXJ5U2VsZWN0b3IiLCAic2VjdGlvbk51bWJlciIsICIkIiwgInNpYmxpbmdzIiwgImZpbmQiLCAibWF0Y2giLCAiYmFzZXRpbWVzdGFtcCIsICJjb250ZW50IiwgInRoZW4iLCAiZGF0YSIsICJwYWdlcyIsICJEZWZlcnJlZCIsICJyZWplY3QiLCAicGFnZSIsICJpbnZhbGlkIiwgIm1pc3NpbmciLCAicmV2aXNpb25zIiwgInRyaW0iLCAicmVzb2x2ZSIsICJlZGl0UGFyYW1zIiwgIm5vY3JlYXRlIiwgInNlY3Rpb24iLCAic3RhcnR0aW1lc3RhbXAiLCAidGV4dCIsICJhc3NlcnQiLCAic2hvd0RpYWxvZyIsICIkYm9keSIsICJEaWFsb2ciLCAic3VwZXIiLCAiY2FsbCIsICJPTyIsICJpbmhlcml0Q2xhc3MiLCAidWkiLCAiUHJvY2Vzc0RpYWxvZyIsICJzdGF0aWMiLCAibmFtZSIsICJ3aW5kb3ciLCAid2dVTFMiLCAiYWN0aW9ucyIsICJsYWJlbCIsICJmbGFncyIsICJwcm90b3R5cGUiLCAiZ2V0QXBpTWFuYWdlciIsICJhcGlNYW5hZ2VyIiwgImdldEJvZHlIZWlnaHQiLCAiaW5pdGlhbGl6ZSIsICJlZGl0RmllbGRzZXQiLCAiRmllbGRzZXRMYXlvdXQiLCAiY2xhc3NlcyIsICJlZGl0UGFuZWwiLCAiUGFuZWxMYXlvdXQiLCAiZXhwYW5kZWQiLCAiJGVsZW1lbnQiLCAiYXBwZW5kIiwgInJpZ2h0TG9nV2FwcGVyIiwgInVybCIsICJ1dGlsIiwgImdldFVybCIsICJ0eXBlIiwgImF0dHIiLCAiaHJlZiIsICJ0YXJnZXQiLCAiYXBwZW5kVG8iLCAicmlnaHRMb2dUZXh0IiwgInJpZ2h0TG9nIiwgIkxhYmVsV2lkZ2V0IiwgImxlYWN0aW9uIiwgImxlbGltaXQiLCAibGV0aXRsZSIsICJsaXN0IiwgInF1ZXJ5IiwgImxvZ3MiLCAibG9nZXZlbnRzIiwgImxlbmd0aCIsICJ0aW1lc3RhbXAiLCAiTW9yZWJpdHMiLCAiZGF0ZSIsICJjYWxlbmRhciIsICJyaWdodHMiLCAibmV3Z3JvdXBzIiwgImpvaW4iLCAicmlnaHRzQ2hhbmdlU3VtbWFyeUlucHV0IiwgIlRleHRJbnB1dFdpZGdldCIsICJ2YWx1ZSIsICJwbGFjZWhvbGRlciIsICJleHBpcnlJbnB1dCIsICJ3aWRnZXRzIiwgIkV4cGlyeVdpZGdldCIsICIkb3ZlcmxheSIsICJSZWxhdGl2ZUlucHV0Q2xhc3MiLCAiU2VsZWN0V2l0aElucHV0V2lkZ2V0IiwgInJlbGF0aXZlSW5wdXQiLCAib3IiLCAiZHJvcGRvd25pbnB1dCIsICJvcHRpb25zIiwgInRleHRpbnB1dCIsICJyZXF1aXJlZCIsICJjbG9zaW5nUmVtYXJrc0lucHV0IiwgIndhdGNoVGFsa1BhZ2VDaGVja2JveCIsICJDaGVja2JveElucHV0V2lkZ2V0IiwgInNlbGVjdGVkIiwgImFkZEl0ZW1zIiwgImZvcm1FbGVtZW50cyIsICJGaWVsZExheW91dCIsICJzdWJtaXRQYW5lbCIsICJzdWJtaXRGaWVsZHNldCIsICJjaGFuZ2VSaWdodHNQcm9ncmVzc0xhYmVsIiwgImNoYW5nZVJpZ2h0c1Byb2dyZXNzRmllbGQiLCAibWFya0FzRG9uZVByb2dyZXNzTGFiZWwiLCAibWFya0FzRG9uZVByb2dyZXNzRmllbGQiLCAiaXNzdWVUZW1wbGF0ZVByb2dyZXNzTGFiZWwiLCAiaXNzdWVUZW1wbGF0ZVByb2dyZXNzRmllbGQiLCAic3RhY2tMYXlvdXQiLCAiU3RhY2tMYXlvdXQiLCAiaXRlbXMiLCAicGFkZGVkIiwgIm9uU3VibWl0IiwgInNlbGYiLCAicHJvbWlzZUNvdW50IiwgInNldEFiaWxpdGllcyIsICJzdWJtaXQiLCAiYWRkUHJvbWlzZSIsICIkZmllbGQiLCAicHJvbWlzZSIsICJwdXNoUGVuZGluZyIsICJkb25lIiwgImZhaWwiLCAib2JqIiwgImVycm9yIiwgImluZm8iLCAiYWx3YXlzIiwgInBvcFBlbmRpbmciLCAic2V0VGltZW91dCIsICJsb2NhdGlvbiIsICJyZWxvYWQiLCAic2V0TGFiZWwiLCAiZ2V0VmFsdWUiLCAiZWRpdCIsICJuZXdyZXZpZCIsICJpc1NlbGVjdGVkIiwgInNldEl0ZW0iLCAiZ2V0QWN0aW9uUHJvY2VzcyIsICJuZXh0IiwgImRpYWxvZyIsICJzaXplIiwgIndpbmRvd01hbmFnZXIiLCAiV2luZG93TWFuYWdlciIsICJhZGRXaW5kb3dzIiwgIm9wZW5XaW5kb3ciLCAiZ2V0Qm9keSIsICJvbiIsICJldmVudCIsICJfbXckdXRpbCRnZXRQYXJhbVZhbHUiLCAiXyRlbGVtZW50JHBhcmVudHMkcHJlIiwgInByZXZlbnREZWZhdWx0IiwgImdldFBhcmFtVmFsdWUiLCAic2VjdGlvbklkIiwgInBhcmVudHMiLCAicHJldiJdCn0K

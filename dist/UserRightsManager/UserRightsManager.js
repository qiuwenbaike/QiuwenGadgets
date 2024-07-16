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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1VzZXJSaWdodHNNYW5hZ2VyL1VzZXJSaWdodHNNYW5hZ2VyLnRzIiwgInNyYy9Vc2VyUmlnaHRzTWFuYWdlci9tb2R1bGVzL2kxOG4udHMiLCAic3JjL1VzZXJSaWdodHNNYW5hZ2VyL29wdGlvbnMuanNvbiIsICJzcmMvVXNlclJpZ2h0c01hbmFnZXIvbW9kdWxlcy9hcGkudHMiLCAic3JjL1VzZXJSaWdodHNNYW5hZ2VyL21vZHVsZXMvYXNzaWduUGVybWlzc2lvbi50cyIsICJzcmMvVXNlclJpZ2h0c01hbmFnZXIvbW9kdWxlcy9pc3N1ZVRlbXBsYXRlLnRzIiwgInNyYy9Vc2VyUmlnaHRzTWFuYWdlci9tb2R1bGVzL21hcmtBc0RvbmUudHMiLCAic3JjL1VzZXJSaWdodHNNYW5hZ2VyL21vZHVsZXMvc2hvd0RpYWxvZy5qcyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHtnZXRCb2R5fSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuaW1wb3J0IHtnZXRQZXJtaXNzaW9uUmVxdWVzdGVkfSBmcm9tICcuL21vZHVsZXMvaTE4bic7XG5pbXBvcnQge3Nob3dEaWFsb2d9IGZyb20gJy4vbW9kdWxlcy9zaG93RGlhbG9nLmpzJztcblxudm9pZCBnZXRCb2R5KCkudGhlbigoJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KTogdm9pZCA9PiB7XG5cdGNvbnN0IHt3Z1BhZ2VOYW1lfSA9IG13LmNvbmZpZy5nZXQoKTtcblxuXHRpZiAoIWdldFBlcm1pc3Npb25SZXF1ZXN0ZWQod2dQYWdlTmFtZSkgfHwgZ2V0UGVybWlzc2lvblJlcXVlc3RlZCh3Z1BhZ2VOYW1lKSA9PT0gd2dQYWdlTmFtZSkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IHBlcm1pc3Npb246IHN0cmluZyB8IHVuZGVmaW5lZCA9IGdldFBlcm1pc3Npb25SZXF1ZXN0ZWQod2dQYWdlTmFtZSk7XG5cblx0aWYgKHBlcm1pc3Npb24gPT09ICdBdXRvV2lraUJyb3dzZXInKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0JGJvZHkuZmluZCgnLnBlcm0tYXNzaWduLXBlcm1pc3Npb25zIGEnKS5vbignY2xpY2snLCAoZXZlbnQ6IEpRdWVyeS5DbGlja0V2ZW50KTogdm9pZCA9PiB7XG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuXHRcdGNvbnN0ICRlbGVtZW50OiBKUXVlcnk8SFRNTEFuY2hvckVsZW1lbnQ+ID0gJChldmVudC50YXJnZXQgYXMgSFRNTEFuY2hvckVsZW1lbnQpO1xuXG5cdFx0Y29uc3QgdXNlck5hbWU6IHN0cmluZyA9IG13LnV0aWwuZ2V0UGFyYW1WYWx1ZSgndXNlcicsICRlbGVtZW50LmF0dHIoJ2hyZWYnKSkgPz8gJyc7XG5cdFx0Y29uc3Qgc2VjdGlvbklkOiBzdHJpbmcgPSAkZWxlbWVudC5wYXJlbnRzKCdkbCcpLnByZXYoJ2g0JykuZmluZCgnLm13LWhlYWRsaW5lJykuYXR0cignaWQnKSA/PyAnJztcblx0XHRjb25zdCBpbmRleDogc3RyaW5nID1cblx0XHRcdHNlY3Rpb25JZCA9PT0gYFVzZXI6JHt1c2VyTmFtZX1gIHx8IHNlY3Rpb25JZCA9PT0gYFVzZXI6JHt1c2VyTmFtZX1gLnJlcGxhY2UoL1wiL2csICcuMjInKS5yZXBsYWNlKC8gL2csICdfJylcblx0XHRcdFx0PyAnJ1xuXHRcdFx0XHQ6IHNlY3Rpb25JZFxuXHRcdFx0XHRcdFx0LnJlcGxhY2UoJ1VzZXI6JywgJycpXG5cdFx0XHRcdFx0XHQucmVwbGFjZSh1c2VyTmFtZSwgJycpXG5cdFx0XHRcdFx0XHQucmVwbGFjZSh1c2VyTmFtZS5yZXBsYWNlKC9cIi9nLCAnLjIyJykucmVwbGFjZSgvIC9nLCAnXycpLCAnJyk7XG5cblx0XHRzaG93RGlhbG9nKHtcblx0XHRcdGluZGV4LFxuXHRcdFx0dXNlck5hbWUsXG5cdFx0XHRwZXJtaXNzaW9uLFxuXHRcdFx0JGJvZHksXG5cdFx0fSk7XG5cdH0pO1xufSk7XG4iLCAiaW1wb3J0IHR5cGUge1VzZXJSaWdodHN9IGZyb20gJ34vTWFya1JpZ2h0cy9tb2R1bGVzL3R5cGVzJztcblxuY29uc3QgZ2V0UGVybWlzc2lvbk5hbWVzID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdHBhdHJvbGxlcjogJ+W3oeafpeWRmCcsXG5cdFx0YXV0b3Jldmlld2VyOiAn5beh5p+l6LGB5YWN6ICFJyxcblx0XHRjb25maXJtZWQ6ICfnoa7orqTnlKjmiLcnLFxuXHRcdCdtYXNzbWVzc2FnZS1zZW5kZXInOiAn5aSn6YeP5raI5oGv5Y+R6YCB6ICFJyxcblx0XHRldmVudHNwb25zb3I6ICfmtLvliqjnu4Tnu4fogIUnLFxuXHRcdHRyYW5zd2lraTogJ+WvvOWFpeiAhScsXG5cdFx0dGVtcGxhdGVlZGl0b3I6ICfmqKHmnb/nvJbovpHlkZgnLFxuXHRcdGJvdDogJ+acuuWZqOS6uicsXG5cdFx0J3JucnN2ZXJpZnktZXhlbXB0JzogJ+WunuWQjeWItumqjOivgeixgeWFjScsXG5cdH0gYXMgY29uc3Qgc2F0aXNmaWVzIFBhcnRpYWw8UmVjb3JkPFVzZXJSaWdodHMsIHN0cmluZz4+O1xufTtcblxuY29uc3QgcGVybWlzc2lvbk5hbWVzID0gZ2V0UGVybWlzc2lvbk5hbWVzKCk7XG5cbmNvbnN0IGdldFBlcm1pc3Nvbk5hbWU6IEdldE1lc3NhZ2VzPHR5cGVvZiBwZXJtaXNzaW9uTmFtZXM+ID0gKGtleSkgPT4ge1xuXHRyZXR1cm4gcGVybWlzc2lvbk5hbWVzW2tleV0gfHwga2V5O1xufTtcblxuY29uc3QgZ2V0UGVybWlzc2lvbkJ5UGFnZSA9ICgpID0+IHtcblx0cmV0dXJuIHtcblx0XHQnUWl1d2VuX3RhbGs65p2D6ZmQ55Sz6K+3L+eUs+ivt+W3oeafpeWbnumAgOadgyc6ICdwYXRyb2xsZXInLFxuXHRcdCdRaXV3ZW5fdGFsazrmnYPpmZDnlLPor7cv55Sz6K+35beh5p+l6LGB5YWN5p2DJzogJ2F1dG9yZXZpZXdlcicsXG5cdFx0J1FpdXdlbl90YWxrOuadg+mZkOeUs+ivty/nlLPor7fnoa7orqTnlKjmiLfmnYMnOiAnY29uZmlybWVkJyxcblx0XHQnUWl1d2VuX3RhbGs65p2D6ZmQ55Sz6K+3L+eUs+ivt+Wkp+mHj+a2iOaBr+WPkemAgeadgyc6ICdtYXNzbWVzc2FnZS1zZW5kZXInLFxuXHRcdCdRaXV3ZW5fdGFsazrmnYPpmZDnlLPor7cv55Sz6K+35rS75Yqo57uE57uH5p2DJzogJ2V2ZW50c3BvbnNvcicsXG5cdFx0J1FpdXdlbl90YWxrOuadg+mZkOeUs+ivty/nlLPor7flr7zlhaXmnYMnOiAndHJhbnN3aWtpJyxcblx0XHQnUWl1d2VuX3RhbGs65p2D6ZmQ55Sz6K+3L+eUs+ivt+aooeadv+e8lui+keadgyc6ICd0ZW1wbGF0ZWVkaXRvcicsXG5cdFx0J1FpdXdlbl90YWxrOuadg+mZkOeUs+ivty/nlLPor7fmnLrlmajkurrmnYPpmZAnOiAnYm90Jyxcblx0XHQnUWl1d2VuX3RhbGs65p2D6ZmQ55Sz6K+3L+eUs+ivt+WunuWQjeWItumqjOivgeixgeWFjSc6ICdybnJzdmVyaWZ5LWV4ZW1wdCcsXG5cdH0gYXMgUmVjb3JkPHN0cmluZywgVXNlclJpZ2h0cz47XG59O1xuXG5jb25zdCBwZXJtaXNzaW9uUmVxdWVzdGVkID0gZ2V0UGVybWlzc2lvbkJ5UGFnZSgpO1xuXG5jb25zdCBnZXRQZXJtaXNzaW9uUmVxdWVzdGVkOiBHZXRNZXNzYWdlczx0eXBlb2YgcGVybWlzc2lvblJlcXVlc3RlZD4gPSAoa2V5KSA9PiB7XG5cdHJldHVybiBwZXJtaXNzaW9uUmVxdWVzdGVkW2tleV0gfHwga2V5O1xufTtcblxuY29uc3QgZ2V0UGVybWlzc2lvblRlbXBsYXRlcyA9ICgpID0+IHtcblx0cmV0dXJuIHtcblx0XHRwYXRyb2xsZXI6ICdQYXRyb2wgZ3JhbnRlZCcsXG5cdFx0YXV0b3Jldmlld2VyOiAnQXV0b3BhdHJvbCBncmFudGVkJyxcblx0XHQnbWFzc21lc3NhZ2Utc2VuZGVyJzogJ01NUyBncmFudGVkJyxcblx0XHR0ZW1wbGF0ZWVkaXRvcjogJ1RlbXBsYXRlIGVkaXRvciBncmFudGVkJyxcblx0XHR0cmFuc3dpa2k6ICdUcmFuc3dpa2kgZ3JhbnRlZCcsXG5cdH0gYXMgY29uc3Qgc2F0aXNmaWVzIFBhcnRpYWw8UmVjb3JkPFVzZXJSaWdodHMsIHN0cmluZz4+O1xufTtcblxuY29uc3QgcGVybWlzc2lvblRlbXBsYXRlID0gZ2V0UGVybWlzc2lvblRlbXBsYXRlcygpO1xuXG5jb25zdCBnZXRwZXJtaXNzaW9uVGVtcGxhdGU6IEdldE1lc3NhZ2VzPHR5cGVvZiBwZXJtaXNzaW9uVGVtcGxhdGU+ID0gKGtleSkgPT4ge1xuXHRyZXR1cm4gcGVybWlzc2lvblRlbXBsYXRlW2tleV0gfHwga2V5O1xufTtcblxuZXhwb3J0IHtnZXRQZXJtaXNzb25OYW1lLCBnZXRQZXJtaXNzaW9uUmVxdWVzdGVkLCBnZXRwZXJtaXNzaW9uVGVtcGxhdGUsIHBlcm1pc3Npb25OYW1lc307XG4iLCAie1xuXHRcInVzZXJSaWdodHNNYW5hZ2VyU3VtbWFyeVwiOiBcIu+8iFtbTWVkaWFXaWtpOkdhZGdldC1Vc2VyUmlnaHRzTWFuYWdlci5qc3xVc2VyUmlnaHRzTWFuYWdlcl1d77yJXCIsXG5cdFwidmVyc2lvblwiOiBcIjIuMFwiXG59XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtpbml0TXdBcGl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmNvbnN0IGFwaTogbXcuQXBpID0gaW5pdE13QXBpKGBtb3JlYml0cy5qczsgVXNlclJpZ2h0c01hbmFnZXIvJHtPUFRJT05TLnZlcnNpb259YCk7XG5cbmV4cG9ydCB7YXBpfTtcbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge2dldFBlcm1pc3Nvbk5hbWUsIHBlcm1pc3Npb25OYW1lc30gZnJvbSAnLi9pMThuJztcbmltcG9ydCB7YXBpfSBmcm9tICcuL2FwaSc7XG5cbmNvbnN0IGFzc2lnblBlcm1pc3Npb24gPSAoXG5cdHVzZXJOYW1lOiBzdHJpbmcsXG5cdHBlcm1pc3Npb246IGtleW9mIHR5cGVvZiBwZXJtaXNzaW9uTmFtZXMsXG5cdHN1bW1hcnk6IHN0cmluZyxcblx0cmV2SWQ6IG51bWJlcixcblx0ZXhwaXJ5OiBzdHJpbmdcbikgPT4ge1xuXHRjb25zdCBwZXJtYUxpbmsgPSBgW1tTcGVjaWFsOlBlcm1hTGluay8ke3JldklkfSNVc2VyOiR7dXNlck5hbWV9fOadg+mZkOeUs+ivt11dYDtcblx0bGV0IGZ1bGxTdW1tYXJ5ID0gYCske2dldFBlcm1pc3Nvbk5hbWUocGVybWlzc2lvbil977ybJHtwZXJtYUxpbmt9YDtcblx0aWYgKHN1bW1hcnkgIT09ICcnKSB7XG5cdFx0ZnVsbFN1bW1hcnkgKz0gYO+8myR7c3VtbWFyeX1gO1xuXHR9XG5cdGZ1bGxTdW1tYXJ5ICs9IE9QVElPTlMudXNlclJpZ2h0c01hbmFnZXJTdW1tYXJ5O1xuXHRjb25zdCBwYXJhbXM6IEFwaVVzZXJyaWdodHNQYXJhbXMgPSB7XG5cdFx0YWN0aW9uOiAndXNlcnJpZ2h0cycsXG5cdFx0dXNlcjogdXNlck5hbWUucmVwbGFjZSgvIC9nLCAnXycpLFxuXHRcdHJlYXNvbjogZnVsbFN1bW1hcnksXG5cdFx0Ly8gQHRzLWV4cGVjdC1lcnJvciBUUzIzMjJcblx0XHRhZGQ6IHBlcm1pc3Npb24sXG5cdFx0ZXhwaXJ5OiBleHBpcnkgPT09ICcnID8gJ2luZmluaXR5JyA6IGV4cGlyeSxcblx0fTtcblx0cmV0dXJuIGFwaS5wb3N0V2l0aFRva2VuKCd1c2VycmlnaHRzJywgcGFyYW1zKTtcbn07XG5cbmV4cG9ydCB7YXNzaWduUGVybWlzc2lvbn07XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtnZXRQZXJtaXNzb25OYW1lLCBnZXRwZXJtaXNzaW9uVGVtcGxhdGUsIHBlcm1pc3Npb25OYW1lc30gZnJvbSAnLi9pMThuJztcbmltcG9ydCB7YXBpfSBmcm9tICcuL2FwaSc7XG5cbmNvbnN0IGlzc3VlVGVtcGxhdGUgPSAoXG5cdHVzZXJOYW1lOiBzdHJpbmcsXG5cdHBlcm1pc3Npb246IFBhcnRpYWw8a2V5b2YgdHlwZW9mIHBlcm1pc3Npb25OYW1lcz4sXG5cdHdhdGNoOiBib29sZWFuIHwgJ3dhdGNoJyB8ICd1bndhdGNoJ1xuKSA9PiB7XG5cdGNvbnN0IHRhbGtQYWdlID0gYFVzZXIgdGFsazoke3VzZXJOYW1lLnJlcGxhY2UoLyAvZywgJ18nKX1gO1xuXHRjb25zdCBwYXJhbXM6IEFwaUVkaXRQYWdlUGFyYW1zID0ge1xuXHRcdGFjdGlvbjogJ2VkaXQnLFxuXHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdHRpdGxlOiB0YWxrUGFnZSxcblx0XHRhcHBlbmR0ZXh0OiAnXFxuXFxue3snLmNvbmNhdChcblx0XHRcdCdzdWJzdDonLFxuXHRcdFx0Z2V0cGVybWlzc2lvblRlbXBsYXRlKFxuXHRcdFx0XHRwZXJtaXNzaW9uIGFzICd0ZW1wbGF0ZWVkaXRvcicgfCAndHJhbnN3aWtpJyB8ICdwYXRyb2xsZXInIHwgJ2F1dG9yZXZpZXdlcicgfCAnbWFzc21lc3NhZ2Utc2VuZGVyJ1xuXHRcdFx0KSxcblx0XHRcdCd9fX0nXG5cdFx0KSxcblx0XHRzdW1tYXJ5OiBg5qC55o2u5YWx6K+G5o6I5LqIJHtnZXRQZXJtaXNzb25OYW1lKHBlcm1pc3Npb24pfSR7T1BUSU9OUy51c2VyUmlnaHRzTWFuYWdlclN1bW1hcnl9YCxcblx0XHR3YXRjaGxpc3Q6IHdhdGNoID8gJ3dhdGNoJyA6ICd1bndhdGNoJyxcblx0fTtcblx0cmV0dXJuIGFwaS5wb3N0V2l0aEVkaXRUb2tlbihwYXJhbXMpO1xufTtcblxuZXhwb3J0IHtpc3N1ZVRlbXBsYXRlfTtcbiIsICIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW5zYWZlLWFzc2lnbm1lbnQgKi9cbmltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7YXBpfSBmcm9tICcuL2FwaSc7XG5cbmNvbnN0IHF1ZXJ5UmV2aXNpb25zID0gYXN5bmMgKHRpdGxlczogc3RyaW5nIHwgc3RyaW5nW10sIHJ2c2VjdGlvbjogc3RyaW5nKSA9PiB7XG5cdGNvbnN0IHBhcmFtczogQXBpUXVlcnlSZXZpc2lvbnNQYXJhbXMgPSB7XG5cdFx0dGl0bGVzLFxuXHRcdHJ2c2VjdGlvbixcblx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdHByb3A6ICdyZXZpc2lvbnMnLFxuXHRcdGN1cnRpbWVzdGFtcDogdHJ1ZSxcblx0XHRydnByb3A6IFsnY29udGVudCcsICd0aW1lc3RhbXAnXSxcblx0fTtcblxuXHRyZXR1cm4gYXdhaXQgYXBpLmdldChwYXJhbXMpO1xufTtcblxuY29uc3QgbWFya0FzRG9uZSA9ICh1c2VyTmFtZTogc3RyaW5nLCBpbmRleDogc3RyaW5nLCBjbG9zaW5nUmVtYXJrczogc3RyaW5nKSA9PiB7XG5cdGNvbnN0IHt3Z1BhZ2VOYW1lfSA9IG13LmNvbmZpZy5nZXQoKTtcblx0Y29uc3Qgc2VjdGlvblNlbGVjdG9yID0gYCMke0NTUy5lc2NhcGUoYFVzZXI6JHt1c2VyTmFtZS5yZXBsYWNlKC9cIi9nLCAnLjIyJykucmVwbGFjZSgvIC9nLCAnXycpfWApfSR7aW5kZXggPz8gJyd9YDtcblx0Y29uc3Qgc2VjdGlvbk5vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlY3Rpb25TZWxlY3Rvcik7XG5cdGlmICghc2VjdGlvbk5vZGUpIHtcblx0XHRyZXR1cm47XG5cdH1cblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnNhZmUtY2FsbFxuXHRjb25zdCBbLCBzZWN0aW9uTnVtYmVyXSA9ICQoc2VjdGlvbk5vZGUgYXMgSFRNTEVsZW1lbnQpXG5cdFx0LnNpYmxpbmdzKCcubXctZWRpdHNlY3Rpb24nKVxuXHRcdC5maW5kKCdhOm5vdCgubXctZWRpdHNlY3Rpb24tdmlzdWFsZWRpdG9yKScpXG5cdFx0LnByb3AoJ2hyZWYnKVxuXHRcdC5tYXRjaCgvc2VjdGlvbj0oXFxkKykvKTtcblx0bGV0IGJhc2V0aW1lc3RhbXA6IHN0cmluZztcblx0bGV0IGN1cnRpbWVzdGFtcDogc3RyaW5nO1xuXHRsZXQgY29udGVudDogc3RyaW5nO1xuXG5cdHJldHVybiBxdWVyeVJldmlzaW9ucyh3Z1BhZ2VOYW1lLCBgJHtzZWN0aW9uTnVtYmVyfWApXG5cdFx0LnRoZW4oKGRhdGEpID0+IHtcblx0XHRcdGlmICghZGF0YVsncXVlcnknXSB8fCAhZGF0YVsncXVlcnknXS5wYWdlcykge1xuXHRcdFx0XHRyZXR1cm4gJC5EZWZlcnJlZCgpLnJlamVjdCgndW5rbm93bicpO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBbcGFnZV0gPSBkYXRhWydxdWVyeSddLnBhZ2VzO1xuXG5cdFx0XHRpZiAoIXBhZ2UgfHwgcGFnZS5pbnZhbGlkKSB7XG5cdFx0XHRcdHJldHVybiAkLkRlZmVycmVkKCkucmVqZWN0KCdpbnZhbGlkdGl0bGUnKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKHBhZ2UubWlzc2luZykge1xuXHRcdFx0XHRyZXR1cm4gJC5EZWZlcnJlZCgpLnJlamVjdCgnbm9jcmVhdGUtbWlzc2luZycpO1xuXHRcdFx0fVxuXG5cdFx0XHRjdXJ0aW1lc3RhbXAgPSBkYXRhWydjdXJ0aW1lc3RhbXAnXSBhcyBzdHJpbmc7XG5cdFx0XHRbe2Jhc2V0aW1lc3RhbXAsIGNvbnRlbnR9XSA9IHBhZ2UucmV2aXNpb25zO1xuXHRcdFx0Y29udGVudCA9IGNvbnRlbnQudHJpbSgpLnJlcGxhY2UoLzp7e3N0YXR1cyhcXHwuKj8pP319L2ksICc6e3tTdGF0dXN8K319Jyk7XG5cdFx0XHRjb250ZW50ICs9IGNsb3NpbmdSZW1hcmtzO1xuXHRcdFx0cmV0dXJuICQuRGVmZXJyZWQoKS5yZXNvbHZlKCk7XG5cdFx0fSlcblx0XHQudGhlbigoKSA9PiB7XG5cdFx0XHRjb25zdCBlZGl0UGFyYW1zOiBBcGlFZGl0UGFnZVBhcmFtcyA9IHtcblx0XHRcdFx0YmFzZXRpbWVzdGFtcCxcblx0XHRcdFx0YWN0aW9uOiAnZWRpdCcsXG5cdFx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0XHRcdHRpdGxlOiB3Z1BhZ2VOYW1lLFxuXHRcdFx0XHRub2NyZWF0ZTogdHJ1ZSxcblx0XHRcdFx0c2VjdGlvbjogYCR7c2VjdGlvbk51bWJlcn1gLFxuXHRcdFx0XHRzdGFydHRpbWVzdGFtcDogY3VydGltZXN0YW1wLFxuXHRcdFx0XHRzdW1tYXJ5OiBgLyogVXNlcjoke3VzZXJOYW1lfSAqLyDlrozmiJAke09QVElPTlMudXNlclJpZ2h0c01hbmFnZXJTdW1tYXJ5fWAsXG5cdFx0XHRcdHRleHQ6IGNvbnRlbnQsXG5cdFx0XHR9O1xuXHRcdFx0aWYgKG13LmNvbmZpZy5nZXQoJ3dnVXNlck5hbWUnKSkge1xuXHRcdFx0XHRlZGl0UGFyYW1zLmFzc2VydCA9ICd1c2VyJztcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIGFwaS5wb3N0V2l0aEVkaXRUb2tlbihlZGl0UGFyYW1zKTtcblx0XHR9KTtcbn07XG5cbmV4cG9ydCB7bWFya0FzRG9uZX07XG4iLCAiLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHMtY29tbWVudFxuLy8gQHRzLW5vY2hlY2tcbmltcG9ydCB7Z2V0UGVybWlzc2lvblJlcXVlc3RlZCwgZ2V0UGVybWlzc29uTmFtZX0gZnJvbSAnLi9pMThuJztcbmltcG9ydCB7YXBpfSBmcm9tICcuL2FwaSc7XG5pbXBvcnQge2Fzc2lnblBlcm1pc3Npb259IGZyb20gJy4vYXNzaWduUGVybWlzc2lvbic7XG5pbXBvcnQge2lzc3VlVGVtcGxhdGV9IGZyb20gJy4vaXNzdWVUZW1wbGF0ZSc7XG5pbXBvcnQge21hcmtBc0RvbmV9IGZyb20gJy4vbWFya0FzRG9uZSc7XG5cbmNvbnN0IHNob3dEaWFsb2cgPSAoe3VzZXJOYW1lLCBpbmRleCwgcGVybWlzc2lvbiwgJGJvZHl9KSA9PiB7XG5cdGNvbnN0IERpYWxvZyA9IGZ1bmN0aW9uIChjb25maWcpIHtcblx0XHREaWFsb2cuc3VwZXIuY2FsbCh0aGlzLCBjb25maWcpO1xuXHR9O1xuXHRPTy5pbmhlcml0Q2xhc3MoRGlhbG9nLCBPTy51aS5Qcm9jZXNzRGlhbG9nKTtcblx0RGlhbG9nLnN0YXRpYy5uYW1lID0gJ3VzZXItcmlnaHRzLW1hbmFnZXInO1xuXHREaWFsb2cuc3RhdGljLnRpdGxlID0gYOaOiOS6iCR7Z2V0UGVybWlzc29uTmFtZShwZXJtaXNzaW9uKX0ke3dpbmRvdy53Z1VMUygn57uZJywgJ+e1picpfSR7dXNlck5hbWV9YDtcblx0RGlhbG9nLnN0YXRpYy5hY3Rpb25zID0gW1xuXHRcdHtcblx0XHRcdGFjdGlvbjogJ3N1Ym1pdCcsXG5cdFx0XHRsYWJlbDogd2luZG93LndnVUxTKCfmjojmnYMnLCAn5o6I5qyKJyksXG5cdFx0XHRmbGFnczogWydwcmltYXJ5JywgJ3Byb2dyZXNzaXZlJ10sXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRsYWJlbDogJ+WPlua2iCcsXG5cdFx0XHRmbGFnczogWydzYWZlJywgJ2Nsb3NlJ10sXG5cdFx0fSxcblx0XTtcblx0RGlhbG9nLnByb3RvdHlwZS5nZXRBcGlNYW5hZ2VyID0gZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiB0aGlzLmFwaU1hbmFnZXI7XG5cdH07XG5cdERpYWxvZy5wcm90b3R5cGUuZ2V0Qm9keUhlaWdodCA9ICgpID0+IHtcblx0XHRyZXR1cm4gMjU1O1xuXHR9O1xuXHREaWFsb2cucHJvdG90eXBlLmluaXRpYWxpemUgPSBhc3luYyBmdW5jdGlvbiAoKSB7XG5cdFx0RGlhbG9nLnN1cGVyLnByb3RvdHlwZS5pbml0aWFsaXplLmNhbGwodGhpcyk7XG5cdFx0dGhpcy5lZGl0RmllbGRzZXQgPSBuZXcgT08udWkuRmllbGRzZXRMYXlvdXQoe1xuXHRcdFx0Y2xhc3NlczogWydjb250YWluZXInXSxcblx0XHR9KTtcblx0XHR0aGlzLmVkaXRQYW5lbCA9IG5ldyBPTy51aS5QYW5lbExheW91dCh7XG5cdFx0XHRleHBhbmRlZDogZmFsc2UsXG5cdFx0fSk7XG5cdFx0dGhpcy5lZGl0UGFuZWwuJGVsZW1lbnQuYXBwZW5kKHRoaXMuZWRpdEZpZWxkc2V0LiRlbGVtZW50KTtcblx0XHRjb25zdCByaWdodExvZ1dhcHBlciA9ICQoJzxzcGFuPicpO1xuXHRcdGNvbnN0IHVybCA9IG13LnV0aWwuZ2V0VXJsKCdTcGVjaWFsOkxvZy9yaWdodHMnLCB7XG5cdFx0XHR0eXBlOiAncmlnaHRzJyxcblx0XHRcdHBhZ2U6IGBVc2VyOiR7dXNlck5hbWV9YCxcblx0XHR9KTtcblx0XHQkKCc8YT4nKVxuXHRcdFx0LnRleHQoJ+acgOi/keadg+mZkOaXpeW/lycpXG5cdFx0XHQuYXR0cih7XG5cdFx0XHRcdGhyZWY6IHVybCxcblx0XHRcdFx0dGFyZ2V0OiAnX2JsYW5rJyxcblx0XHRcdH0pXG5cdFx0XHQuYXBwZW5kVG8ocmlnaHRMb2dXYXBwZXIpO1xuXHRcdHJpZ2h0TG9nV2FwcGVyLmFwcGVuZCgn77yaJyk7XG5cdFx0Y29uc3QgcmlnaHRMb2dUZXh0ID0gJCgnPHNwYW4+JykudGV4dCgn6I635Y+W5LitJykuYXBwZW5kVG8ocmlnaHRMb2dXYXBwZXIpO1xuXHRcdHRoaXMucmlnaHRMb2cgPSBuZXcgT08udWkuTGFiZWxXaWRnZXQoe1xuXHRcdFx0bGFiZWw6IHJpZ2h0TG9nV2FwcGVyLFxuXHRcdH0pO1xuXHRcdGNvbnN0IHBhcmFtcyA9IHtcblx0XHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRcdGxlYWN0aW9uOiAncmlnaHRzL3JpZ2h0cycsXG5cdFx0XHRsZWxpbWl0OiAxLFxuXHRcdFx0bGV0aXRsZTogYFVzZXI6JHt1c2VyTmFtZX1gLFxuXHRcdFx0bGlzdDogJ2xvZ2V2ZW50cycsXG5cdFx0fTtcblx0XHRjb25zdCB7cXVlcnl9ID0gYXdhaXQgYXBpLmdldChwYXJhbXMpO1xuXHRcdGNvbnN0IGxvZ3MgPSBxdWVyeS5sb2dldmVudHM7XG5cdFx0aWYgKGxvZ3MubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRyaWdodExvZ1RleHQudGV4dCgn5rKh5pyJ5Lu75L2V5pel5b+XJyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuZXctY2FwXG5cdFx0XHRjb25zdCB0aW1lc3RhbXAgPSBuZXcgTW9yZWJpdHMuZGF0ZShsb2dzWzBdLnRpbWVzdGFtcCkuY2FsZW5kYXIoKTtcblx0XHRcdGNvbnN0IHJpZ2h0cyA9IGxvZ3NbMF0ucGFyYW1zLm5ld2dyb3Vwcy5qb2luKCfjgIEnKSB8fCAn77yI5peg77yJJztcblx0XHRcdHJpZ2h0TG9nVGV4dC50ZXh0KGAke3RpbWVzdGFtcH0gJHtsb2dzWzBdLnVzZXJ95bCG55So5oi357uE5pS55Li6JHtyaWdodHN9YCk7XG5cdFx0fVxuXHRcdHRoaXMucmlnaHRzQ2hhbmdlU3VtbWFyeUlucHV0ID0gbmV3IE9PLnVpLlRleHRJbnB1dFdpZGdldCh7XG5cdFx0XHR2YWx1ZTogJycsXG5cdFx0XHRwbGFjZWhvbGRlcjogJ+WPr+eVmeepuicsXG5cdFx0fSk7XG5cdFx0dGhpcy5leHBpcnlJbnB1dCA9IG5ldyBtdy53aWRnZXRzLkV4cGlyeVdpZGdldCh7XG5cdFx0XHQkb3ZlcmxheTogJGJvZHkuZmluZCgnLm9vLXVpLXdpbmRvdycpLFxuXHRcdFx0UmVsYXRpdmVJbnB1dENsYXNzOiBtdy53aWRnZXRzLlNlbGVjdFdpdGhJbnB1dFdpZGdldCxcblx0XHRcdHJlbGF0aXZlSW5wdXQ6IHtcblx0XHRcdFx0b3I6IHRydWUsXG5cdFx0XHRcdGRyb3Bkb3duaW5wdXQ6IHtcblx0XHRcdFx0XHRvcHRpb25zOiBbXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdGRhdGE6ICcxIGRheScsXG5cdFx0XHRcdFx0XHRcdGxhYmVsOiAnMeWkqScsXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRkYXRhOiAnMSB3ZWVrJyxcblx0XHRcdFx0XHRcdFx0bGFiZWw6ICcx5ZGoJyxcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdGRhdGE6ICcxIG1vbnRoJyxcblx0XHRcdFx0XHRcdFx0bGFiZWw6ICcx5Liq5pyIJyxcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdGRhdGE6ICczIG1vbnRocycsXG5cdFx0XHRcdFx0XHRcdGxhYmVsOiAnM+S4quaciCcsXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRkYXRhOiAnNiBtb250aHMnLFxuXHRcdFx0XHRcdFx0XHRsYWJlbDogJzbkuKrmnIgnLFxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0ZGF0YTogJzEgeWVhcicsXG5cdFx0XHRcdFx0XHRcdGxhYmVsOiAnMeW5tCcsXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRkYXRhOiAnaW5maW5pdGUnLFxuXHRcdFx0XHRcdFx0XHRsYWJlbDogJ+aXoOmZkOacnycsXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRkYXRhOiAnb3RoZXInLFxuXHRcdFx0XHRcdFx0XHRsYWJlbDogJ+WFtuS7luaXtumXtCcsXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdF0sXG5cdFx0XHRcdFx0dmFsdWU6ICdpbmZpbml0ZScsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHRleHRpbnB1dDoge1xuXHRcdFx0XHRcdHJlcXVpcmVkOiB0cnVlLFxuXHRcdFx0XHR9LFxuXHRcdFx0fSxcblx0XHR9KTtcblx0XHR0aGlzLmNsb3NpbmdSZW1hcmtzSW5wdXQgPSBuZXcgT08udWkuVGV4dElucHV0V2lkZ2V0KHtcblx0XHRcdHZhbHVlOiAne3tkb25lfX3jgIItLX5+Jy5jb25jYXQoJ35+JyksXG5cdFx0fSk7XG5cdFx0dGhpcy53YXRjaFRhbGtQYWdlQ2hlY2tib3ggPSBuZXcgT08udWkuQ2hlY2tib3hJbnB1dFdpZGdldCh7XG5cdFx0XHRzZWxlY3RlZDogZmFsc2UsXG5cdFx0fSk7XG5cdFx0dGhpcy5lZGl0RmllbGRzZXQuYWRkSXRlbXModGhpcy5yaWdodExvZyk7XG5cdFx0Y29uc3QgZm9ybUVsZW1lbnRzID0gW1xuXHRcdFx0bmV3IE9PLnVpLkZpZWxkTGF5b3V0KHRoaXMucmlnaHRzQ2hhbmdlU3VtbWFyeUlucHV0LCB7XG5cdFx0XHRcdGxhYmVsOiB3aW5kb3cud2dVTFMoJ+aOiOadg+WOn+WboCcsICfmjojmnYPljp/lm6AnKSxcblx0XHRcdH0pLFxuXHRcdFx0bmV3IE9PLnVpLkZpZWxkTGF5b3V0KHRoaXMuZXhwaXJ5SW5wdXQsIHtcblx0XHRcdFx0bGFiZWw6IHdpbmRvdy53Z1VMUygn57uT5p2f5pe26Ze0JywgJ+e1kOadn+aZgumWkycpLFxuXHRcdFx0fSksXG5cdFx0XHRuZXcgT08udWkuRmllbGRMYXlvdXQodGhpcy5jbG9zaW5nUmVtYXJrc0lucHV0LCB7XG5cdFx0XHRcdGxhYmVsOiB3aW5kb3cud2dVTFMoJ+WFs+mXreivt+axgueVmeiogCcsICfpl5zplonoq4vmsYLnlZnoqIAnKSxcblx0XHRcdH0pLFxuXHRcdF07XG5cdFx0aWYgKGdldFBlcm1pc3Npb25SZXF1ZXN0ZWQocGVybWlzc2lvbikpIHtcblx0XHRcdGZvcm1FbGVtZW50c1tmb3JtRWxlbWVudHMubGVuZ3RoXSA9IG5ldyBPTy51aS5GaWVsZExheW91dCh0aGlzLndhdGNoVGFsa1BhZ2VDaGVja2JveCwge1xuXHRcdFx0XHRsYWJlbDogd2luZG93LndnVUxTKCfnm5Hop4bnlKjmiLforqjorrrpobUnLCAn55uj6KaW55So5oi26KiO6KuW6aCBJyksXG5cdFx0XHR9KTtcblx0XHR9XG5cdFx0dGhpcy5lZGl0RmllbGRzZXQuYWRkSXRlbXMoZm9ybUVsZW1lbnRzKTtcblx0XHR0aGlzLnN1Ym1pdFBhbmVsID0gbmV3IE9PLnVpLlBhbmVsTGF5b3V0KHtcblx0XHRcdCQ6IHRoaXMuJCxcblx0XHRcdGV4cGFuZGVkOiBmYWxzZSxcblx0XHR9KTtcblx0XHR0aGlzLnN1Ym1pdEZpZWxkc2V0ID0gbmV3IE9PLnVpLkZpZWxkc2V0TGF5b3V0KHtcblx0XHRcdGNsYXNzZXM6IFsnY29udGFpbmVyJ10sXG5cdFx0fSk7XG5cdFx0dGhpcy5zdWJtaXRQYW5lbC4kZWxlbWVudC5hcHBlbmQodGhpcy5zdWJtaXRGaWVsZHNldC4kZWxlbWVudCk7XG5cdFx0dGhpcy5jaGFuZ2VSaWdodHNQcm9ncmVzc0xhYmVsID0gbmV3IE9PLnVpLkxhYmVsV2lkZ2V0KCk7XG5cdFx0dGhpcy5jaGFuZ2VSaWdodHNQcm9ncmVzc0ZpZWxkID0gbmV3IE9PLnVpLkZpZWxkTGF5b3V0KHRoaXMuY2hhbmdlUmlnaHRzUHJvZ3Jlc3NMYWJlbCk7XG5cdFx0dGhpcy5tYXJrQXNEb25lUHJvZ3Jlc3NMYWJlbCA9IG5ldyBPTy51aS5MYWJlbFdpZGdldCgpO1xuXHRcdHRoaXMubWFya0FzRG9uZVByb2dyZXNzRmllbGQgPSBuZXcgT08udWkuRmllbGRMYXlvdXQodGhpcy5tYXJrQXNEb25lUHJvZ3Jlc3NMYWJlbCk7XG5cdFx0dGhpcy5pc3N1ZVRlbXBsYXRlUHJvZ3Jlc3NMYWJlbCA9IG5ldyBPTy51aS5MYWJlbFdpZGdldCgpO1xuXHRcdHRoaXMuaXNzdWVUZW1wbGF0ZVByb2dyZXNzRmllbGQgPSBuZXcgT08udWkuRmllbGRMYXlvdXQodGhpcy5pc3N1ZVRlbXBsYXRlUHJvZ3Jlc3NMYWJlbCk7XG5cdFx0dGhpcy5zdGFja0xheW91dCA9IG5ldyBPTy51aS5TdGFja0xheW91dCh7XG5cdFx0XHRpdGVtczogW3RoaXMuZWRpdFBhbmVsLCB0aGlzLnN1Ym1pdFBhbmVsXSxcblx0XHRcdHBhZGRlZDogdHJ1ZSxcblx0XHR9KTtcblx0XHR0aGlzLiRib2R5LmFwcGVuZCh0aGlzLnN0YWNrTGF5b3V0LiRlbGVtZW50KTtcblx0fTtcblx0RGlhbG9nLnByb3RvdHlwZS5vblN1Ym1pdCA9IGZ1bmN0aW9uICgpIHtcblx0XHRjb25zdCBzZWxmID0gdGhpcztcblx0XHRsZXQgcHJvbWlzZUNvdW50ID0gZ2V0UGVybWlzc2lvblJlcXVlc3RlZChwZXJtaXNzaW9uKSA/IDMgOiAyO1xuXHRcdHNlbGYuYWN0aW9ucy5zZXRBYmlsaXRpZXMoe1xuXHRcdFx0c3VibWl0OiBmYWxzZSxcblx0XHR9KTtcblx0XHRjb25zdCBhZGRQcm9taXNlID0gKHskZmllbGR9LCBwcm9taXNlKSA9PiB7XG5cdFx0XHRzZWxmLnB1c2hQZW5kaW5nKCk7XG5cdFx0XHRwcm9taXNlXG5cdFx0XHRcdC5kb25lKCgpID0+IHtcblx0XHRcdFx0XHQkZmllbGQuYXBwZW5kKFxuXHRcdFx0XHRcdFx0JCgnPHNwYW4+Jylcblx0XHRcdFx0XHRcdFx0LnRleHQoJ+WujOaIkO+8gScpXG5cdFx0XHRcdFx0XHRcdC5wcm9wKCdzdHlsZScsICdwb3NpdGlvbjogcmVsYXRpdmU7IHRvcDogLjVlbTsgY29sb3I6ICMwMDkwMDA7IGZvbnQtd2VpZ2h0OiBib2xkOycpXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fSlcblx0XHRcdFx0LmZhaWwoKG9iaikgPT4ge1xuXHRcdFx0XHRcdGlmIChvYmogJiYgb2JqLmVycm9yICYmIG9iai5lcnJvci5pbmZvKSB7XG5cdFx0XHRcdFx0XHQkZmllbGQuYXBwZW5kKFxuXHRcdFx0XHRcdFx0XHQkKCc8c3Bhbj4nKVxuXHRcdFx0XHRcdFx0XHRcdC50ZXh0KGDplJnor6/vvJoke29iai5lcnJvci5pbmZvfWApXG5cdFx0XHRcdFx0XHRcdFx0LnByb3AoJ3N0eWxlJywgJ3Bvc2l0aW9uOiByZWxhdGl2ZTsgdG9wOiAuNWVtOyBjb2xvcjogI2MwMDsgZm9udC13ZWlnaHQ6IGJvbGQ7Jylcblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdCRmaWVsZC5hcHBlbmQoXG5cdFx0XHRcdFx0XHRcdCQoJzxzcGFuPicpXG5cdFx0XHRcdFx0XHRcdFx0LnRleHQoJ+WPkeeUn+acquefpemUmeivr+OAgicpXG5cdFx0XHRcdFx0XHRcdFx0LnByb3AoJ3N0eWxlJywgJ3Bvc2l0aW9uOiByZWxhdGl2ZTsgdG9wOiAuNWVtOyBjb2xvcjogI2MwMDsgZm9udC13ZWlnaHQ6IGJvbGQ7Jylcblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KVxuXHRcdFx0XHQuYWx3YXlzKCgpID0+IHtcblx0XHRcdFx0XHRwcm9taXNlQ291bnQtLTsgLy8gRklYTUU6IG1heWJlIHdlIGNvdWxkIHVzZSBhIHNlbGYuaXNQZW5kaW5nKCkgb3Igc29tZXRoaW5nXG5cdFx0XHRcdFx0c2VsZi5wb3BQZW5kaW5nKCk7XG5cdFx0XHRcdFx0aWYgKHByb21pc2VDb3VudCA9PT0gMCkge1xuXHRcdFx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdGxvY2F0aW9uLnJlbG9hZCh0cnVlKTtcblx0XHRcdFx0XHRcdH0sIDEwMDApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHRyZXR1cm4gcHJvbWlzZTtcblx0XHR9O1xuXHRcdHNlbGYubWFya0FzRG9uZVByb2dyZXNzRmllbGQuc2V0TGFiZWwoJ+agh+iusOivt+axguS4uuW3suWujOaIkC4uLicpO1xuXHRcdHNlbGYuc3VibWl0RmllbGRzZXQuYWRkSXRlbXMoW3NlbGYubWFya0FzRG9uZVByb2dyZXNzRmllbGRdKTtcblx0XHRzZWxmLmNoYW5nZVJpZ2h0c1Byb2dyZXNzRmllbGQuc2V0TGFiZWwoJ+aOiOS6iOadg+mZkC4uLicpO1xuXHRcdHNlbGYuc3VibWl0RmllbGRzZXQuYWRkSXRlbXMoW3NlbGYuY2hhbmdlUmlnaHRzUHJvZ3Jlc3NGaWVsZF0pO1xuXHRcdGlmIChnZXRQZXJtaXNzaW9uUmVxdWVzdGVkKHBlcm1pc3Npb24pKSB7XG5cdFx0XHRzZWxmLmlzc3VlVGVtcGxhdGVQcm9ncmVzc0ZpZWxkLnNldExhYmVsKCflj5HpgIHpgJrnn6UuLi4nKTtcblx0XHRcdHNlbGYuc3VibWl0RmllbGRzZXQuYWRkSXRlbXMoW3NlbGYuaXNzdWVUZW1wbGF0ZVByb2dyZXNzRmllbGRdKTtcblx0XHR9XG5cdFx0YWRkUHJvbWlzZShcblx0XHRcdHNlbGYubWFya0FzRG9uZVByb2dyZXNzRmllbGQsXG5cdFx0XHRtYXJrQXNEb25lKHVzZXJOYW1lLCBpbmRleCwgYFxcbjoke3RoaXMuY2xvc2luZ1JlbWFya3NJbnB1dC5nZXRWYWx1ZSgpfWApLnRoZW4oKHtlZGl0fSkgPT4ge1xuXHRcdFx0XHRhZGRQcm9taXNlKFxuXHRcdFx0XHRcdHNlbGYuY2hhbmdlUmlnaHRzUHJvZ3Jlc3NGaWVsZCxcblx0XHRcdFx0XHRhc3NpZ25QZXJtaXNzaW9uKFxuXHRcdFx0XHRcdFx0dXNlck5hbWUsXG5cdFx0XHRcdFx0XHRwZXJtaXNzaW9uLFxuXHRcdFx0XHRcdFx0dGhpcy5yaWdodHNDaGFuZ2VTdW1tYXJ5SW5wdXQuZ2V0VmFsdWUoKSxcblx0XHRcdFx0XHRcdGVkaXQubmV3cmV2aWQsXG5cdFx0XHRcdFx0XHR0aGlzLmV4cGlyeUlucHV0LmdldFZhbHVlKClcblx0XHRcdFx0XHQpLnRoZW4oKCkgPT4ge1xuXHRcdFx0XHRcdFx0aWYgKGdldFBlcm1pc3Npb25SZXF1ZXN0ZWQocGVybWlzc2lvbikpIHtcblx0XHRcdFx0XHRcdFx0YWRkUHJvbWlzZShcblx0XHRcdFx0XHRcdFx0XHRzZWxmLmlzc3VlVGVtcGxhdGVQcm9ncmVzc0ZpZWxkLFxuXHRcdFx0XHRcdFx0XHRcdGlzc3VlVGVtcGxhdGUodXNlck5hbWUsIHBlcm1pc3Npb24sIHRoaXMud2F0Y2hUYWxrUGFnZUNoZWNrYm94LmlzU2VsZWN0ZWQoKSlcblx0XHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9KVxuXHRcdFx0XHQpO1xuXHRcdFx0fSlcblx0XHQpO1xuXHRcdHNlbGYuc3RhY2tMYXlvdXQuc2V0SXRlbShzZWxmLnN1Ym1pdFBhbmVsKTtcblx0fTtcblx0RGlhbG9nLnByb3RvdHlwZS5nZXRBY3Rpb25Qcm9jZXNzID0gZnVuY3Rpb24gKGFjdGlvbikge1xuXHRcdHJldHVybiBEaWFsb2cuc3VwZXIucHJvdG90eXBlLmdldEFjdGlvblByb2Nlc3MuY2FsbCh0aGlzLCBhY3Rpb24pLm5leHQoZnVuY3Rpb24gKCkge1xuXHRcdFx0aWYgKGFjdGlvbiA9PT0gJ3N1Ym1pdCcpIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMub25TdWJtaXQoKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBEaWFsb2cuc3VwZXIucHJvdG90eXBlLmdldEFjdGlvblByb2Nlc3MuY2FsbCh0aGlzLCBhY3Rpb24pO1xuXHRcdH0sIHRoaXMpO1xuXHR9O1xuXHRjb25zdCBkaWFsb2cgPSBuZXcgRGlhbG9nKHtcblx0XHRzaXplOiAnbWVkaXVtJyxcblx0fSk7XG5cdGNvbnN0IHdpbmRvd01hbmFnZXIgPSBuZXcgT08udWkuV2luZG93TWFuYWdlcigpO1xuXHQkYm9keS5hcHBlbmQod2luZG93TWFuYWdlci4kZWxlbWVudCk7XG5cdHdpbmRvd01hbmFnZXIuYWRkV2luZG93cyhbZGlhbG9nXSk7XG5cdHZvaWQgd2luZG93TWFuYWdlci5vcGVuV2luZG93KGRpYWxvZyk7XG59O1xuXG5leHBvcnQge3Nob3dEaWFsb2d9O1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEscUJBQXNCQyxRQUFBLGlCQUFBOztBQ0V0QixJQUFNQyxxQkFBcUJBLE1BQU07QUFDaEMsU0FBTztJQUNOQyxXQUFXO0lBQ1hDLGNBQWM7SUFDZEMsV0FBVztJQUNYLHNCQUFzQjtJQUN0QkMsY0FBYztJQUNkQyxXQUFXO0lBQ1hDLGdCQUFnQjtJQUNoQkMsS0FBSztJQUNMLHFCQUFxQjtFQUN0QjtBQUNEO0FBRUEsSUFBTUMsa0JBQWtCUixtQkFBbUI7QUFFM0MsSUFBTVMsbUJBQXlEQyxTQUFRO0FBQ3RFLFNBQU9GLGdCQUFnQkUsR0FBRyxLQUFLQTtBQUNoQztBQUVBLElBQU1DLHNCQUFzQkEsTUFBTTtBQUNqQyxTQUFPO0lBQ04sNEJB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SyxjQUFjLEVBQUV1RCxLQUFLLElBQUksT0FBQSxRQUFBOEYsMEJBQUEsU0FBQUEsd0JBQUs7QUFDL0YsVUFBTW5LLFFBQ0xzSyxjQUFBLFFBQUE3TSxPQUFzQkUsUUFBUSxLQUFNMk0sY0FBYyxRQUFBN00sT0FBUUUsUUFBUSxFQUFHVSxRQUFRLE1BQU0sS0FBSyxFQUFFQSxRQUFRLE1BQU0sR0FBRyxJQUN4RyxLQUNBaU0sVUFDQ2pNLFFBQVEsU0FBUyxFQUFFLEVBQ25CQSxRQUFRVixVQUFVLEVBQUUsRUFDcEJVLFFBQVFWLFNBQVNVLFFBQVEsTUFBTSxLQUFLLEVBQUVBLFFBQVEsTUFBTSxHQUFHLEdBQUcsRUFBRTtBQUVqRThELGVBQVc7TUFDVm5DO01BQ0FyQztNQUNBQztNQUNBd0U7SUFDRCxDQUFDO0VBQ0YsQ0FBQztBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbImltcG9ydF9leHRfZ2FkZ2V0MiIsICJyZXF1aXJlIiwgImdldFBlcm1pc3Npb25OYW1lcyIsICJwYXRyb2xsZXIiLCAiYXV0b3Jldmlld2VyIiwgImNvbmZpcm1lZCIsICJldmVudHNwb25zb3IiLCAidHJhbnN3aWtpIiwgInRlbXBsYXRlZWRpdG9yIiwgImJvdCIsICJwZXJtaXNzaW9uTmFtZXMiLCAiZ2V0UGVybWlzc29uTmFtZSIsICJrZXkiLCAiZ2V0UGVybWlzc2lvbkJ5UGFnZSIsICJwZXJtaXNzaW9uUmVxdWVzdGVkIiwgImdldFBlcm1pc3Npb25SZXF1ZXN0ZWQiLCAiZ2V0UGVybWlzc2lvblRlbXBsYXRlcyIsICJwZXJtaXNzaW9uVGVtcGxhdGUiLCAiZ2V0cGVybWlzc2lvblRlbXBsYXRlIiwgInVzZXJSaWdodHNNYW5hZ2VyU3VtbWFyeSIsICJ2ZXJzaW9uIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgImFwaSIsICJpbml0TXdBcGkiLCAiY29uY2F0IiwgImFzc2lnblBlcm1pc3Npb24iLCAidXNlck5hbWUiLCAicGVybWlzc2lvbiIsICJzdW1tYXJ5IiwgInJldklkIiwgImV4cGlyeSIsICJwZXJtYUxpbmsiLCAiZnVsbFN1bW1hcnkiLCAicGFyYW1zIiwgImFjdGlvbiIsICJ1c2VyIiwgInJlcGxhY2UiLCAicmVhc29uIiwgImFkZCIsICJwb3N0V2l0aFRva2VuIiwgImlzc3VlVGVtcGxhdGUiLCAid2F0Y2giLCAidGFsa1BhZ2UiLCAiZm9ybWF0IiwgInRpdGxlIiwgImFwcGVuZHRleHQiLCAid2F0Y2hsaXN0IiwgInBvc3RXaXRoRWRpdFRva2VuIiwgInF1ZXJ5UmV2aXNpb25zIiwgIl9yZWYiLCAiX2FzeW5jVG9HZW5lcmF0b3IiLCAidGl0bGVzIiwgInJ2c2VjdGlvbiIsICJmb3JtYXR2ZXJzaW9uIiwgInByb3AiLCAiY3VydGltZXN0YW1wIiwgInJ2cHJvcCIsICJnZXQiLCAiX3giLCAiX3gyIiwgImFwcGx5IiwgImFyZ3VtZW50cyIsICJtYXJrQXNEb25lIiwgImluZGV4IiwgImNsb3NpbmdSZW1hcmtzIiwgIndnUGFnZU5hbWUiLCAibXciLCAiY29uZmlnIiwgInNlY3Rpb25TZWxlY3RvciIsICJDU1MiLCAiZXNjYXBlIiwgInNlY3Rpb25Ob2RlIiwgImRvY3VtZW50IiwgInF1ZXJ5U2VsZWN0b3IiLCAic2VjdGlvbk51bWJlciIsICIkIiwgInNpYmxpbmdzIiwgImZpbmQiLCAibWF0Y2giLCAiYmFzZXRpbWVzdGFtcCIsICJjb250ZW50IiwgInRoZW4iLCAiZGF0YSIsICJwYWdlcyIsICJEZWZlcnJlZCIsICJyZWplY3QiLCAicGFnZSIsICJpbnZhbGlkIiwgIm1pc3NpbmciLCAicmV2aXNpb25zIiwgInRyaW0iLCAicmVzb2x2ZSIsICJlZGl0UGFyYW1zIiwgIm5vY3JlYXRlIiwgInNlY3Rpb24iLCAic3RhcnR0aW1lc3RhbXAiLCAidGV4dCIsICJhc3NlcnQiLCAic2hvd0RpYWxvZyIsICIkYm9keSIsICJEaWFsb2ciLCAic3VwZXIiLCAiY2FsbCIsICJPTyIsICJpbmhlcml0Q2xhc3MiLCAidWkiLCAiUHJvY2Vzc0RpYWxvZyIsICJzdGF0aWMiLCAibmFtZSIsICJ3aW5kb3ciLCAid2dVTFMiLCAiYWN0aW9ucyIsICJsYWJlbCIsICJmbGFncyIsICJwcm90b3R5cGUiLCAiZ2V0QXBpTWFuYWdlciIsICJhcGlNYW5hZ2VyIiwgImdldEJvZHlIZWlnaHQiLCAiaW5pdGlhbGl6ZSIsICJlZGl0RmllbGRzZXQiLCAiRmllbGRzZXRMYXlvdXQiLCAiY2xhc3NlcyIsICJlZGl0UGFuZWwiLCAiUGFuZWxMYXlvdXQiLCAiZXhwYW5kZWQiLCAiJGVsZW1lbnQiLCAiYXBwZW5kIiwgInJpZ2h0TG9nV2FwcGVyIiwgInVybCIsICJ1dGlsIiwgImdldFVybCIsICJ0eXBlIiwgImF0dHIiLCAiaHJlZiIsICJ0YXJnZXQiLCAiYXBwZW5kVG8iLCAicmlnaHRMb2dUZXh0IiwgInJpZ2h0TG9nIiwgIkxhYmVsV2lkZ2V0IiwgImxlYWN0aW9uIiwgImxlbGltaXQiLCAibGV0aXRsZSIsICJsaXN0IiwgInF1ZXJ5IiwgImxvZ3MiLCAibG9nZXZlbnRzIiwgImxlbmd0aCIsICJ0aW1lc3RhbXAiLCAiTW9yZWJpdHMiLCAiZGF0ZSIsICJjYWxlbmRhciIsICJyaWdodHMiLCAibmV3Z3JvdXBzIiwgImpvaW4iLCAicmlnaHRzQ2hhbmdlU3VtbWFyeUlucHV0IiwgIlRleHRJbnB1dFdpZGdldCIsICJ2YWx1ZSIsICJwbGFjZWhvbGRlciIsICJleHBpcnlJbnB1dCIsICJ3aWRnZXRzIiwgIkV4cGlyeVdpZGdldCIsICIkb3ZlcmxheSIsICJSZWxhdGl2ZUlucHV0Q2xhc3MiLCAiU2VsZWN0V2l0aElucHV0V2lkZ2V0IiwgInJlbGF0aXZlSW5wdXQiLCAib3IiLCAiZHJvcGRvd25pbnB1dCIsICJvcHRpb25zIiwgInRleHRpbnB1dCIsICJyZXF1aXJlZCIsICJjbG9zaW5nUmVtYXJrc0lucHV0IiwgIndhdGNoVGFsa1BhZ2VDaGVja2JveCIsICJDaGVja2JveElucHV0V2lkZ2V0IiwgInNlbGVjdGVkIiwgImFkZEl0ZW1zIiwgImZvcm1FbGVtZW50cyIsICJGaWVsZExheW91dCIsICJzdWJtaXRQYW5lbCIsICJzdWJtaXRGaWVsZHNldCIsICJjaGFuZ2VSaWdodHNQcm9ncmVzc0xhYmVsIiwgImNoYW5nZVJpZ2h0c1Byb2dyZXNzRmllbGQiLCAibWFya0FzRG9uZVByb2dyZXNzTGFiZWwiLCAibWFya0FzRG9uZVByb2dyZXNzRmllbGQiLCAiaXNzdWVUZW1wbGF0ZVByb2dyZXNzTGFiZWwiLCAiaXNzdWVUZW1wbGF0ZVByb2dyZXNzRmllbGQiLCAic3RhY2tMYXlvdXQiLCAiU3RhY2tMYXlvdXQiLCAiaXRlbXMiLCAicGFkZGVkIiwgIm9uU3VibWl0IiwgInNlbGYiLCAicHJvbWlzZUNvdW50IiwgInNldEFiaWxpdGllcyIsICJzdWJtaXQiLCAiYWRkUHJvbWlzZSIsICIkZmllbGQiLCAicHJvbWlzZSIsICJwdXNoUGVuZGluZyIsICJkb25lIiwgImZhaWwiLCAib2JqIiwgImVycm9yIiwgImluZm8iLCAiYWx3YXlzIiwgInBvcFBlbmRpbmciLCAic2V0VGltZW91dCIsICJsb2NhdGlvbiIsICJyZWxvYWQiLCAic2V0TGFiZWwiLCAiZ2V0VmFsdWUiLCAiZWRpdCIsICJuZXdyZXZpZCIsICJpc1NlbGVjdGVkIiwgInNldEl0ZW0iLCAiZ2V0QWN0aW9uUHJvY2VzcyIsICJuZXh0IiwgImRpYWxvZyIsICJzaXplIiwgIndpbmRvd01hbmFnZXIiLCAiV2luZG93TWFuYWdlciIsICJhZGRXaW5kb3dzIiwgIm9wZW5XaW5kb3ciLCAiZ2V0Qm9keSIsICJvbiIsICJldmVudCIsICJfbXckdXRpbCRnZXRQYXJhbVZhbHUiLCAiXyRlbGVtZW50JHBhcmVudHMkcHJlIiwgInByZXZlbnREZWZhdWx0IiwgImdldFBhcmFtVmFsdWUiLCAic2VjdGlvbklkIiwgInBhcmVudHMiLCAicHJldiJdCn0K

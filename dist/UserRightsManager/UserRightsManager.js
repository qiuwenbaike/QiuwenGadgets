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
  const sectionNode = document.querySelector("#User\\:".concat(userName.replace(/"/g, ".22").replace(/ /g, "_")).concat(index !== null && index !== void 0 ? index : ""));
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
    appendtext: "\n\n{{".concat("subst:", getPermissionRequested(permission), "}}}"),
    summary: "根据共识授予".concat(getPermissonName(permission)).concat(SUMMARY),
    watchlist: watch ? "watch" : "unwatch"
  };
  return api.postWithEditToken(params);
};
var showDialog = ({
  index,
  userName,
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
  $body.find(".perm-assign-permissions a").on("click", (event) => {
    var _mw$util$getParamValu, _$element$parents$pre;
    if (permission === "AutoWikiBrowser") {
      return;
    }
    event.preventDefault();
    const $element = $(event.target);
    const userName = (_mw$util$getParamValu = mw.util.getParamValue("user", $element.attr("href"))) !== null && _mw$util$getParamValu !== void 0 ? _mw$util$getParamValu : "";
    const sectionId = (_$element$parents$pre = $element.parents("dl").prev("h4").find(".mw-headline").attr("id")) !== null && _$element$parents$pre !== void 0 ? _$element$parents$pre : "";
    const index = sectionId === "User:".concat(userName) ? "" : sectionId.replace("User:", "").replace(userName, "");
    showDialog({
      $body,
      index,
      userName,
      permission
    });
  });
});

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1VzZXJSaWdodHNNYW5hZ2VyL1VzZXJSaWdodHNNYW5hZ2VyLnRzIiwgInNyYy9Vc2VyUmlnaHRzTWFuYWdlci9tb2R1bGVzL2kxOG4udHMiLCAic3JjL1VzZXJSaWdodHNNYW5hZ2VyL21vZHVsZXMvY29uc3RhbnQudHMiLCAic3JjL1VzZXJSaWdodHNNYW5hZ2VyL29wdGlvbnMuanNvbiIsICJzcmMvVXNlclJpZ2h0c01hbmFnZXIvbW9kdWxlcy9hcGkudHMiLCAic3JjL1VzZXJSaWdodHNNYW5hZ2VyL21vZHVsZXMvY29yZS5qcyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHtnZXRCb2R5fSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuaW1wb3J0IHtnZXRQZXJtaXNzaW9uUmVxdWVzdGVkfSBmcm9tICcuL21vZHVsZXMvaTE4bic7XG5pbXBvcnQge3Nob3dEaWFsb2d9IGZyb20gJy4vbW9kdWxlcy9jb3JlLmpzJztcblxudm9pZCBnZXRCb2R5KCkudGhlbigoJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KTogdm9pZCA9PiB7XG5cdGNvbnN0IHt3Z1BhZ2VOYW1lfSA9IG13LmNvbmZpZy5nZXQoKTtcblxuXHRpZiAoIWdldFBlcm1pc3Npb25SZXF1ZXN0ZWQod2dQYWdlTmFtZSkgfHwgZ2V0UGVybWlzc2lvblJlcXVlc3RlZCh3Z1BhZ2VOYW1lKSA9PT0gd2dQYWdlTmFtZSkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IHBlcm1pc3Npb246IHN0cmluZyB8IHVuZGVmaW5lZCA9IGdldFBlcm1pc3Npb25SZXF1ZXN0ZWQod2dQYWdlTmFtZSk7XG5cblx0JGJvZHkuZmluZCgnLnBlcm0tYXNzaWduLXBlcm1pc3Npb25zIGEnKS5vbignY2xpY2snLCAoZXZlbnQ6IEpRdWVyeS5DbGlja0V2ZW50KTogdm9pZCA9PiB7XG5cdFx0aWYgKHBlcm1pc3Npb24gPT09ICdBdXRvV2lraUJyb3dzZXInKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuXHRcdGNvbnN0ICRlbGVtZW50OiBKUXVlcnk8SFRNTEFuY2hvckVsZW1lbnQ+ID0gJChldmVudC50YXJnZXQgYXMgSFRNTEFuY2hvckVsZW1lbnQpO1xuXG5cdFx0Y29uc3QgdXNlck5hbWU6IHN0cmluZyA9IG13LnV0aWwuZ2V0UGFyYW1WYWx1ZSgndXNlcicsICRlbGVtZW50LmF0dHIoJ2hyZWYnKSkgPz8gJyc7XG5cdFx0Y29uc3Qgc2VjdGlvbklkOiBzdHJpbmcgPSAkZWxlbWVudC5wYXJlbnRzKCdkbCcpLnByZXYoJ2g0JykuZmluZCgnLm13LWhlYWRsaW5lJykuYXR0cignaWQnKSA/PyAnJztcblx0XHRjb25zdCBpbmRleDogc3RyaW5nID1cblx0XHRcdHNlY3Rpb25JZCA9PT0gYFVzZXI6JHt1c2VyTmFtZX1gID8gJycgOiBzZWN0aW9uSWQucmVwbGFjZSgnVXNlcjonLCAnJykucmVwbGFjZSh1c2VyTmFtZSwgJycpO1xuXG5cdFx0c2hvd0RpYWxvZyh7XG5cdFx0XHQkYm9keSxcblx0XHRcdGluZGV4LFxuXHRcdFx0dXNlck5hbWUsXG5cdFx0XHRwZXJtaXNzaW9uLFxuXHRcdH0pO1xuXHR9KTtcbn0pO1xuIiwgImltcG9ydCB0eXBlIHtVc2VyUmlnaHRzfSBmcm9tICd+L01hcmtSaWdodHMvbW9kdWxlcy90eXBlcyc7XG5cbmNvbnN0IGdldFBlcm1pc3Npb25OYW1lcyA9ICgpID0+IHtcblx0cmV0dXJuIHtcblx0XHRwYXRyb2xsZXI6ICflt6Hmn6XlkZgnLFxuXHRcdGF1dG9yZXZpZXdlcjogJ+W3oeafpeixgeWFjeiAhScsXG5cdFx0Y29uZmlybWVkOiAn56Gu6K6k55So5oi3Jyxcblx0XHQnbWFzc21lc3NhZ2Utc2VuZGVyJzogJ+Wkp+mHj+a2iOaBr+WPkemAgeiAhScsXG5cdFx0ZXZlbnRzcG9uc29yOiAn5rS75Yqo57uE57uH6ICFJyxcblx0XHR0cmFuc3dpa2k6ICflr7zlhaXogIUnLFxuXHRcdHRlbXBsYXRlZWRpdG9yOiAn5qih5p2/57yW6L6R5ZGYJyxcblx0XHRib3Q6ICfmnLrlmajkuronLFxuXHRcdCdybnJzdmVyaWZ5LWV4ZW1wdCc6ICflrp7lkI3liLbpqozor4HosYHlhY0nLFxuXHR9IGFzIGNvbnN0IHNhdGlzZmllcyBQYXJ0aWFsPFJlY29yZDxVc2VyUmlnaHRzLCBzdHJpbmc+Pjtcbn07XG5cbmNvbnN0IHBlcm1pc3Npb25OYW1lcyA9IGdldFBlcm1pc3Npb25OYW1lcygpO1xuXG5jb25zdCBnZXRQZXJtaXNzb25OYW1lOiBHZXRNZXNzYWdlczx0eXBlb2YgcGVybWlzc2lvbk5hbWVzPiA9IChrZXkpID0+IHtcblx0cmV0dXJuIHBlcm1pc3Npb25OYW1lc1trZXldIHx8IGtleTtcbn07XG5cbmNvbnN0IGdldFBlcm1pc3Npb25CeVBhZ2UgPSAoKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0J1FpdXdlbl90YWxrOuadg+mZkOeUs+ivty/nlLPor7flt6Hmn6Xlm57pgIDmnYMnOiAncGF0cm9sbGVyJyxcblx0XHQnUWl1d2VuX3RhbGs65p2D6ZmQ55Sz6K+3L+eUs+ivt+W3oeafpeixgeWFjeadgyc6ICdhdXRvcmV2aWV3ZXInLFxuXHRcdCdRaXV3ZW5fdGFsazrmnYPpmZDnlLPor7cv55Sz6K+356Gu6K6k55So5oi35p2DJzogJ2NvbmZpcm1lZCcsXG5cdFx0J1FpdXdlbl90YWxrOuadg+mZkOeUs+ivty/nlLPor7flpKfph4/mtojmga/lj5HpgIHmnYMnOiAnbWFzc21lc3NhZ2Utc2VuZGVyJyxcblx0XHQnUWl1d2VuX3RhbGs65p2D6ZmQ55Sz6K+3L+eUs+ivt+a0u+WKqOe7hOe7h+adgyc6ICdldmVudHNwb25zb3InLFxuXHRcdCdRaXV3ZW5fdGFsazrmnYPpmZDnlLPor7cv55Sz6K+35a+85YWl5p2DJzogJ3RyYW5zd2lraScsXG5cdFx0J1FpdXdlbl90YWxrOuadg+mZkOeUs+ivty/nlLPor7fmqKHmnb/nvJbovpHmnYMnOiAndGVtcGxhdGVlZGl0b3InLFxuXHRcdCdRaXV3ZW5fdGFsazrmnYPpmZDnlLPor7cv55Sz6K+35py65Zmo5Lq65p2D6ZmQJzogJ2JvdCcsXG5cdFx0J1FpdXdlbl90YWxrOuadg+mZkOeUs+ivty/nlLPor7flrp7lkI3liLbpqozor4HosYHlhY0nOiAncm5yc3ZlcmlmeS1leGVtcHQnLFxuXHR9IGFzIFJlY29yZDxzdHJpbmcsIFVzZXJSaWdodHM+O1xufTtcblxuY29uc3QgcGVybWlzc2lvblJlcXVlc3RlZCA9IGdldFBlcm1pc3Npb25CeVBhZ2UoKTtcblxuY29uc3QgZ2V0UGVybWlzc2lvblJlcXVlc3RlZDogR2V0TWVzc2FnZXM8dHlwZW9mIHBlcm1pc3Npb25SZXF1ZXN0ZWQ+ID0gKGtleSkgPT4ge1xuXHRyZXR1cm4gcGVybWlzc2lvblJlcXVlc3RlZFtrZXldIHx8IGtleTtcbn07XG5cbmV4cG9ydCB7Z2V0UGVybWlzc29uTmFtZSwgZ2V0UGVybWlzc2lvblJlcXVlc3RlZH07XG4iLCAiY29uc3QgU1VNTUFSWTogc3RyaW5nID0gJyAoW1tNZWRpYVdpa2k6R2FkZ2V0LVVzZXJSaWdodHNNYW5hZ2VyLmpzfFVzZXJSaWdodHNNYW5hZ2VyXV0pJztcblxuZXhwb3J0IHtTVU1NQVJZfTtcbiIsICJ7XG5cdFwidmVyc2lvblwiOiBcIjIuMFwiXG59XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtpbml0TXdBcGl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmNvbnN0IGFwaTogbXcuQXBpID0gaW5pdE13QXBpKGBtb3JlYml0cy5qczsgVXNlclJpZ2h0c01hbmFnZXIvJHtPUFRJT05TLnZlcnNpb259YCk7XG5cbmV4cG9ydCB7YXBpfTtcbiIsICIvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10cy1jb21tZW50XG4vLyBAdHMtbm9jaGVja1xuaW1wb3J0IHtnZXRQZXJtaXNzaW9uUmVxdWVzdGVkLCBnZXRQZXJtaXNzb25OYW1lfSBmcm9tICcuL2kxOG4nO1xuaW1wb3J0IHtTVU1NQVJZfSBmcm9tICcuL2NvbnN0YW50JztcbmltcG9ydCB7YXBpfSBmcm9tICcuL2FwaSc7XG5cbmNvbnN0IGFzc2lnblBlcm1pc3Npb24gPSAodXNlck5hbWUsIHBlcm1pc3Npb24sIHN1bW1hcnksIHJldklkLCBleHBpcnkpID0+IHtcblx0Y29uc3QgcGVybWFMaW5rID0gYFtbU3BlY2lhbDpQZXJtYUxpbmsvJHtyZXZJZH0jVXNlcjoke3VzZXJOYW1lfXzmnYPpmZDnlLPor7ddXWA7XG5cdGxldCBmdWxsU3VtbWFyeSA9IGArJHtnZXRQZXJtaXNzb25OYW1lKHBlcm1pc3Npb24pfe+8myR7cGVybWFMaW5rfWA7XG5cdGlmIChzdW1tYXJ5ICE9PSAnJykge1xuXHRcdGZ1bGxTdW1tYXJ5ICs9IGDvvJske3N1bW1hcnl9YDtcblx0fVxuXHRmdWxsU3VtbWFyeSArPSBTVU1NQVJZO1xuXHRjb25zdCBwYXJhbXMgPSB7XG5cdFx0YWN0aW9uOiAndXNlcnJpZ2h0cycsXG5cdFx0dXNlcjogdXNlck5hbWUucmVwbGFjZSgvIC9nLCAnXycpLFxuXHRcdGFkZDogcGVybWlzc2lvbixcblx0XHRleHBpcnk6IGV4cGlyeSA9PT0gJycgPyAnaW5maW5pdHknIDogZXhwaXJ5LFxuXHRcdHJlYXNvbjogZnVsbFN1bW1hcnksXG5cdH07XG5cdHJldHVybiBhcGkucG9zdFdpdGhUb2tlbigndXNlcnJpZ2h0cycsIHBhcmFtcyk7XG59O1xuXG5jb25zdCBtYXJrQXNEb25lID0gKHVzZXJOYW1lLCBpbmRleCwgY2xvc2luZ1JlbWFya3MpID0+IHtcblx0Y29uc3Qge3dnUGFnZU5hbWV9ID0gbXcuY29uZmlnLmdldCgpO1xuXHRjb25zdCBzZWN0aW9uTm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG5cdFx0YCNVc2VyXFxcXDoke3VzZXJOYW1lLnJlcGxhY2UoL1wiL2csICcuMjInKS5yZXBsYWNlKC8gL2csICdfJyl9JHtpbmRleCA/PyAnJ31gXG5cdCk7XG5cdGNvbnN0IFssIHNlY3Rpb25OdW1iZXJdID0gJChzZWN0aW9uTm9kZSlcblx0XHQuc2libGluZ3MoJy5tdy1lZGl0c2VjdGlvbicpXG5cdFx0LmZpbmQoJ2E6bm90KC5tdy1lZGl0c2VjdGlvbi12aXN1YWxlZGl0b3IpJylcblx0XHQucHJvcCgnaHJlZicpXG5cdFx0Lm1hdGNoKC9zZWN0aW9uPShcXGQrKS8pO1xuXHRsZXQgYmFzZXRpbWVzdGFtcDtcblx0bGV0IGN1cnRpbWVzdGFtcDtcblx0bGV0IHBhZ2U7XG5cdGxldCByZXZpc2lvbjtcblx0bGV0IGNvbnRlbnQ7XG5cdGNvbnN0IHF1ZXJ5UGFyYW1zID0ge1xuXHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0cHJvcDogJ3JldmlzaW9ucycsXG5cdFx0dGl0bGVzOiBbd2dQYWdlTmFtZV0sXG5cdFx0Y3VydGltZXN0YW1wOiB0cnVlLFxuXHRcdHJ2cHJvcDogWydjb250ZW50JywgJ3RpbWVzdGFtcCddLFxuXHRcdHJ2c2VjdGlvbjogc2VjdGlvbk51bWJlcixcblx0fTtcblx0cmV0dXJuIGFwaVxuXHRcdC5nZXQocXVlcnlQYXJhbXMpXG5cdFx0LnRoZW4oKGRhdGEpID0+IHtcblx0XHRcdGlmICghZGF0YS5xdWVyeSB8fCAhZGF0YS5xdWVyeS5wYWdlcykge1xuXHRcdFx0XHRyZXR1cm4gJC5EZWZlcnJlZCgpLnJlamVjdCgndW5rbm93bicpO1xuXHRcdFx0fVxuXHRcdFx0W3BhZ2VdID0gZGF0YS5xdWVyeS5wYWdlcztcblx0XHRcdGlmICghcGFnZSB8fCBwYWdlLmludmFsaWQpIHtcblx0XHRcdFx0cmV0dXJuICQuRGVmZXJyZWQoKS5yZWplY3QoJ2ludmFsaWR0aXRsZScpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHBhZ2UubWlzc2luZykge1xuXHRcdFx0XHRyZXR1cm4gJC5EZWZlcnJlZCgpLnJlamVjdCgnbm9jcmVhdGUtbWlzc2luZycpO1xuXHRcdFx0fVxuXHRcdFx0W3JldmlzaW9uXSA9IHBhZ2UucmV2aXNpb25zO1xuXHRcdFx0YmFzZXRpbWVzdGFtcCA9IHJldmlzaW9uLnRpbWVzdGFtcDtcblx0XHRcdCh7Y3VydGltZXN0YW1wfSA9IGRhdGEpO1xuXHRcdFx0KHtjb250ZW50fSA9IHJldmlzaW9uKTtcblx0XHR9KVxuXHRcdC50aGVuKCgpID0+IHtcblx0XHRcdGNvbnRlbnQgPSBjb250ZW50LnRyaW0oKTtcblx0XHRcdGNvbnRlbnQgPSBjb250ZW50LnJlcGxhY2UoLzp7e3N0YXR1cyhcXHwuKj8pP319L2ksICc6e3tTdGF0dXN8K319Jyk7XG5cdFx0XHRjb250ZW50ICs9IGNsb3NpbmdSZW1hcmtzO1xuXHRcdFx0Y29uc3QgZWRpdFBhcmFtcyA9IHtcblx0XHRcdFx0YWN0aW9uOiAnZWRpdCcsXG5cdFx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0XHRcdHRpdGxlOiB3Z1BhZ2VOYW1lLFxuXHRcdFx0XHRhc3NlcnQ6IG13LmNvbmZpZy5nZXQoJ3dnVXNlck5hbWUnKSA/ICd1c2VyJyA6IHVuZGVmaW5lZCxcblx0XHRcdFx0bm9jcmVhdGU6IHRydWUsXG5cdFx0XHRcdHNlY3Rpb246IHNlY3Rpb25OdW1iZXIsXG5cdFx0XHRcdHN0YXJ0dGltZXN0YW1wOiBjdXJ0aW1lc3RhbXAsXG5cdFx0XHRcdHN1bW1hcnk6IGAvKiBVc2VyOiR7dXNlck5hbWV9ICovIOWujOaIkCR7U1VNTUFSWX1gLFxuXHRcdFx0XHR0ZXh0OiBjb250ZW50LFxuXHRcdFx0XHRiYXNldGltZXN0YW1wLFxuXHRcdFx0fTtcblx0XHRcdHJldHVybiBhcGkucG9zdFdpdGhFZGl0VG9rZW4oZWRpdFBhcmFtcyk7XG5cdFx0fSk7XG59O1xuXG5jb25zdCBpc3N1ZVRlbXBsYXRlID0gKHVzZXJOYW1lLCBwZXJtaXNzaW9uLCB3YXRjaCkgPT4ge1xuXHRjb25zdCB0YWxrUGFnZSA9IGBVc2VyIHRhbGs6JHt1c2VyTmFtZS5yZXBsYWNlKC8gL2csICdfJyl9YDtcblx0Y29uc3QgcGFyYW1zID0ge1xuXHRcdGFjdGlvbjogJ2VkaXQnLFxuXHRcdHRpdGxlOiB0YWxrUGFnZSxcblx0XHRhcHBlbmR0ZXh0OiAnXFxuXFxue3snLmNvbmNhdCgnc3Vic3Q6JywgZ2V0UGVybWlzc2lvblJlcXVlc3RlZChwZXJtaXNzaW9uKSwgJ319fScpLFxuXHRcdHN1bW1hcnk6IGDmoLnmja7lhbHor4bmjojkuogke2dldFBlcm1pc3Nvbk5hbWUocGVybWlzc2lvbil9JHtTVU1NQVJZfWAsXG5cdFx0d2F0Y2hsaXN0OiB3YXRjaCA/ICd3YXRjaCcgOiAndW53YXRjaCcsXG5cdH07XG5cdHJldHVybiBhcGkucG9zdFdpdGhFZGl0VG9rZW4ocGFyYW1zKTtcbn07XG5cbmNvbnN0IHNob3dEaWFsb2cgPSAoe2luZGV4LCB1c2VyTmFtZSwgcGVybWlzc2lvbiwgJGJvZHl9KSA9PiB7XG5cdGNvbnN0IERpYWxvZyA9IGZ1bmN0aW9uIChjb25maWcpIHtcblx0XHREaWFsb2cuc3VwZXIuY2FsbCh0aGlzLCBjb25maWcpO1xuXHR9O1xuXHRPTy5pbmhlcml0Q2xhc3MoRGlhbG9nLCBPTy51aS5Qcm9jZXNzRGlhbG9nKTtcblx0RGlhbG9nLnN0YXRpYy5uYW1lID0gJ3VzZXItcmlnaHRzLW1hbmFnZXInO1xuXHREaWFsb2cuc3RhdGljLnRpdGxlID0gYOaOiOS6iCR7Z2V0UGVybWlzc29uTmFtZShwZXJtaXNzaW9uKX0ke3dpbmRvdy53Z1VMUygn57uZJywgJ+e1picpfSR7dXNlck5hbWV9YDtcblx0RGlhbG9nLnN0YXRpYy5hY3Rpb25zID0gW1xuXHRcdHtcblx0XHRcdGFjdGlvbjogJ3N1Ym1pdCcsXG5cdFx0XHRsYWJlbDogd2luZG93LndnVUxTKCfmjojmnYMnLCAn5o6I5qyKJyksXG5cdFx0XHRmbGFnczogWydwcmltYXJ5JywgJ3Byb2dyZXNzaXZlJ10sXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRsYWJlbDogJ+WPlua2iCcsXG5cdFx0XHRmbGFnczogWydzYWZlJywgJ2Nsb3NlJ10sXG5cdFx0fSxcblx0XTtcblx0RGlhbG9nLnByb3RvdHlwZS5nZXRBcGlNYW5hZ2VyID0gZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiB0aGlzLmFwaU1hbmFnZXI7XG5cdH07XG5cdERpYWxvZy5wcm90b3R5cGUuZ2V0Qm9keUhlaWdodCA9ICgpID0+IHtcblx0XHRyZXR1cm4gMjU1O1xuXHR9O1xuXHREaWFsb2cucHJvdG90eXBlLmluaXRpYWxpemUgPSBhc3luYyBmdW5jdGlvbiAoKSB7XG5cdFx0RGlhbG9nLnN1cGVyLnByb3RvdHlwZS5pbml0aWFsaXplLmNhbGwodGhpcyk7XG5cdFx0dGhpcy5lZGl0RmllbGRzZXQgPSBuZXcgT08udWkuRmllbGRzZXRMYXlvdXQoe1xuXHRcdFx0Y2xhc3NlczogWydjb250YWluZXInXSxcblx0XHR9KTtcblx0XHR0aGlzLmVkaXRQYW5lbCA9IG5ldyBPTy51aS5QYW5lbExheW91dCh7XG5cdFx0XHRleHBhbmRlZDogZmFsc2UsXG5cdFx0fSk7XG5cdFx0dGhpcy5lZGl0UGFuZWwuJGVsZW1lbnQuYXBwZW5kKHRoaXMuZWRpdEZpZWxkc2V0LiRlbGVtZW50KTtcblx0XHRjb25zdCByaWdodExvZ1dhcHBlciA9ICQoJzxzcGFuPicpO1xuXHRcdGNvbnN0IHVybCA9IG13LnV0aWwuZ2V0VXJsKCdTcGVjaWFsOkxvZy9yaWdodHMnLCB7XG5cdFx0XHR0eXBlOiAncmlnaHRzJyxcblx0XHRcdHBhZ2U6IGBVc2VyOiR7dXNlck5hbWV9YCxcblx0XHR9KTtcblx0XHQkKCc8YT4nKVxuXHRcdFx0LnRleHQoJ+acgOi/keadg+mZkOaXpeW/lycpXG5cdFx0XHQuYXR0cih7XG5cdFx0XHRcdGhyZWY6IHVybCxcblx0XHRcdFx0dGFyZ2V0OiAnX2JsYW5rJyxcblx0XHRcdH0pXG5cdFx0XHQuYXBwZW5kVG8ocmlnaHRMb2dXYXBwZXIpO1xuXHRcdHJpZ2h0TG9nV2FwcGVyLmFwcGVuZCgn77yaJyk7XG5cdFx0Y29uc3QgcmlnaHRMb2dUZXh0ID0gJCgnPHNwYW4+JykudGV4dCgn6I635Y+W5LitJykuYXBwZW5kVG8ocmlnaHRMb2dXYXBwZXIpO1xuXHRcdHRoaXMucmlnaHRMb2cgPSBuZXcgT08udWkuTGFiZWxXaWRnZXQoe1xuXHRcdFx0bGFiZWw6IHJpZ2h0TG9nV2FwcGVyLFxuXHRcdH0pO1xuXHRcdGNvbnN0IHBhcmFtcyA9IHtcblx0XHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRcdGxlYWN0aW9uOiAncmlnaHRzL3JpZ2h0cycsXG5cdFx0XHRsZWxpbWl0OiAxLFxuXHRcdFx0bGV0aXRsZTogYFVzZXI6JHt1c2VyTmFtZX1gLFxuXHRcdFx0bGlzdDogJ2xvZ2V2ZW50cycsXG5cdFx0fTtcblx0XHRjb25zdCB7cXVlcnl9ID0gYXdhaXQgYXBpLmdldChwYXJhbXMpO1xuXHRcdGNvbnN0IGxvZ3MgPSBxdWVyeS5sb2dldmVudHM7XG5cdFx0aWYgKGxvZ3MubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRyaWdodExvZ1RleHQudGV4dCgn5rKh5pyJ5Lu75L2V5pel5b+XJyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuZXctY2FwXG5cdFx0XHRjb25zdCB0aW1lc3RhbXAgPSBuZXcgTW9yZWJpdHMuZGF0ZShsb2dzWzBdLnRpbWVzdGFtcCkuY2FsZW5kYXIoKTtcblx0XHRcdGNvbnN0IHJpZ2h0cyA9IGxvZ3NbMF0ucGFyYW1zLm5ld2dyb3Vwcy5qb2luKCfjgIEnKSB8fCAn77yI5peg77yJJztcblx0XHRcdHJpZ2h0TG9nVGV4dC50ZXh0KGAke3RpbWVzdGFtcH0gJHtsb2dzWzBdLnVzZXJ95bCG55So5oi357uE5pS55Li6JHtyaWdodHN9YCk7XG5cdFx0fVxuXHRcdHRoaXMucmlnaHRzQ2hhbmdlU3VtbWFyeUlucHV0ID0gbmV3IE9PLnVpLlRleHRJbnB1dFdpZGdldCh7XG5cdFx0XHR2YWx1ZTogJycsXG5cdFx0XHRwbGFjZWhvbGRlcjogJ+WPr+eVmeepuicsXG5cdFx0fSk7XG5cdFx0dGhpcy5leHBpcnlJbnB1dCA9IG5ldyBtdy53aWRnZXRzLkV4cGlyeVdpZGdldCh7XG5cdFx0XHQkb3ZlcmxheTogJGJvZHkuZmluZCgnLm9vLXVpLXdpbmRvdycpLFxuXHRcdFx0UmVsYXRpdmVJbnB1dENsYXNzOiBtdy53aWRnZXRzLlNlbGVjdFdpdGhJbnB1dFdpZGdldCxcblx0XHRcdHJlbGF0aXZlSW5wdXQ6IHtcblx0XHRcdFx0b3I6IHRydWUsXG5cdFx0XHRcdGRyb3Bkb3duaW5wdXQ6IHtcblx0XHRcdFx0XHRvcHRpb25zOiBbXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdGRhdGE6ICcxIGRheScsXG5cdFx0XHRcdFx0XHRcdGxhYmVsOiAnMeWkqScsXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRkYXRhOiAnMSB3ZWVrJyxcblx0XHRcdFx0XHRcdFx0bGFiZWw6ICcx5ZGoJyxcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdGRhdGE6ICcxIG1vbnRoJyxcblx0XHRcdFx0XHRcdFx0bGFiZWw6ICcx5Liq5pyIJyxcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdGRhdGE6ICczIG1vbnRocycsXG5cdFx0XHRcdFx0XHRcdGxhYmVsOiAnM+S4quaciCcsXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRkYXRhOiAnNiBtb250aHMnLFxuXHRcdFx0XHRcdFx0XHRsYWJlbDogJzbkuKrmnIgnLFxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0ZGF0YTogJzEgeWVhcicsXG5cdFx0XHRcdFx0XHRcdGxhYmVsOiAnMeW5tCcsXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRkYXRhOiAnaW5maW5pdGUnLFxuXHRcdFx0XHRcdFx0XHRsYWJlbDogJ+aXoOmZkOacnycsXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRkYXRhOiAnb3RoZXInLFxuXHRcdFx0XHRcdFx0XHRsYWJlbDogJ+WFtuS7luaXtumXtCcsXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdF0sXG5cdFx0XHRcdFx0dmFsdWU6ICdpbmZpbml0ZScsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHRleHRpbnB1dDoge1xuXHRcdFx0XHRcdHJlcXVpcmVkOiB0cnVlLFxuXHRcdFx0XHR9LFxuXHRcdFx0fSxcblx0XHR9KTtcblx0XHR0aGlzLmNsb3NpbmdSZW1hcmtzSW5wdXQgPSBuZXcgT08udWkuVGV4dElucHV0V2lkZ2V0KHtcblx0XHRcdHZhbHVlOiAne3tkb25lfX3jgIItLX5+Jy5jb25jYXQoJ35+JyksXG5cdFx0fSk7XG5cdFx0dGhpcy53YXRjaFRhbGtQYWdlQ2hlY2tib3ggPSBuZXcgT08udWkuQ2hlY2tib3hJbnB1dFdpZGdldCh7XG5cdFx0XHRzZWxlY3RlZDogZmFsc2UsXG5cdFx0fSk7XG5cdFx0dGhpcy5lZGl0RmllbGRzZXQuYWRkSXRlbXModGhpcy5yaWdodExvZyk7XG5cdFx0Y29uc3QgZm9ybUVsZW1lbnRzID0gW1xuXHRcdFx0bmV3IE9PLnVpLkZpZWxkTGF5b3V0KHRoaXMucmlnaHRzQ2hhbmdlU3VtbWFyeUlucHV0LCB7XG5cdFx0XHRcdGxhYmVsOiB3aW5kb3cud2dVTFMoJ+aOiOadg+WOn+WboCcsICfmjojmnYPljp/lm6AnKSxcblx0XHRcdH0pLFxuXHRcdFx0bmV3IE9PLnVpLkZpZWxkTGF5b3V0KHRoaXMuZXhwaXJ5SW5wdXQsIHtcblx0XHRcdFx0bGFiZWw6IHdpbmRvdy53Z1VMUygn57uT5p2f5pe26Ze0JywgJ+e1kOadn+aZgumWkycpLFxuXHRcdFx0fSksXG5cdFx0XHRuZXcgT08udWkuRmllbGRMYXlvdXQodGhpcy5jbG9zaW5nUmVtYXJrc0lucHV0LCB7XG5cdFx0XHRcdGxhYmVsOiB3aW5kb3cud2dVTFMoJ+WFs+mXreivt+axgueVmeiogCcsICfpl5zplonoq4vmsYLnlZnoqIAnKSxcblx0XHRcdH0pLFxuXHRcdF07XG5cdFx0aWYgKGdldFBlcm1pc3Npb25SZXF1ZXN0ZWQocGVybWlzc2lvbikpIHtcblx0XHRcdGZvcm1FbGVtZW50c1tmb3JtRWxlbWVudHMubGVuZ3RoXSA9IG5ldyBPTy51aS5GaWVsZExheW91dCh0aGlzLndhdGNoVGFsa1BhZ2VDaGVja2JveCwge1xuXHRcdFx0XHRsYWJlbDogd2luZG93LndnVUxTKCfnm5Hop4bnlKjmiLforqjorrrpobUnLCAn55uj6KaW55So5oi26KiO6KuW6aCBJyksXG5cdFx0XHR9KTtcblx0XHR9XG5cdFx0dGhpcy5lZGl0RmllbGRzZXQuYWRkSXRlbXMoZm9ybUVsZW1lbnRzKTtcblx0XHR0aGlzLnN1Ym1pdFBhbmVsID0gbmV3IE9PLnVpLlBhbmVsTGF5b3V0KHtcblx0XHRcdCQ6IHRoaXMuJCxcblx0XHRcdGV4cGFuZGVkOiBmYWxzZSxcblx0XHR9KTtcblx0XHR0aGlzLnN1Ym1pdEZpZWxkc2V0ID0gbmV3IE9PLnVpLkZpZWxkc2V0TGF5b3V0KHtcblx0XHRcdGNsYXNzZXM6IFsnY29udGFpbmVyJ10sXG5cdFx0fSk7XG5cdFx0dGhpcy5zdWJtaXRQYW5lbC4kZWxlbWVudC5hcHBlbmQodGhpcy5zdWJtaXRGaWVsZHNldC4kZWxlbWVudCk7XG5cdFx0dGhpcy5jaGFuZ2VSaWdodHNQcm9ncmVzc0xhYmVsID0gbmV3IE9PLnVpLkxhYmVsV2lkZ2V0KCk7XG5cdFx0dGhpcy5jaGFuZ2VSaWdodHNQcm9ncmVzc0ZpZWxkID0gbmV3IE9PLnVpLkZpZWxkTGF5b3V0KHRoaXMuY2hhbmdlUmlnaHRzUHJvZ3Jlc3NMYWJlbCk7XG5cdFx0dGhpcy5tYXJrQXNEb25lUHJvZ3Jlc3NMYWJlbCA9IG5ldyBPTy51aS5MYWJlbFdpZGdldCgpO1xuXHRcdHRoaXMubWFya0FzRG9uZVByb2dyZXNzRmllbGQgPSBuZXcgT08udWkuRmllbGRMYXlvdXQodGhpcy5tYXJrQXNEb25lUHJvZ3Jlc3NMYWJlbCk7XG5cdFx0dGhpcy5pc3N1ZVRlbXBsYXRlUHJvZ3Jlc3NMYWJlbCA9IG5ldyBPTy51aS5MYWJlbFdpZGdldCgpO1xuXHRcdHRoaXMuaXNzdWVUZW1wbGF0ZVByb2dyZXNzRmllbGQgPSBuZXcgT08udWkuRmllbGRMYXlvdXQodGhpcy5pc3N1ZVRlbXBsYXRlUHJvZ3Jlc3NMYWJlbCk7XG5cdFx0dGhpcy5zdGFja0xheW91dCA9IG5ldyBPTy51aS5TdGFja0xheW91dCh7XG5cdFx0XHRpdGVtczogW3RoaXMuZWRpdFBhbmVsLCB0aGlzLnN1Ym1pdFBhbmVsXSxcblx0XHRcdHBhZGRlZDogdHJ1ZSxcblx0XHR9KTtcblx0XHR0aGlzLiRib2R5LmFwcGVuZCh0aGlzLnN0YWNrTGF5b3V0LiRlbGVtZW50KTtcblx0fTtcblx0RGlhbG9nLnByb3RvdHlwZS5vblN1Ym1pdCA9IGZ1bmN0aW9uICgpIHtcblx0XHRjb25zdCBzZWxmID0gdGhpcztcblx0XHRsZXQgcHJvbWlzZUNvdW50ID0gZ2V0UGVybWlzc2lvblJlcXVlc3RlZChwZXJtaXNzaW9uKSA/IDMgOiAyO1xuXHRcdHNlbGYuYWN0aW9ucy5zZXRBYmlsaXRpZXMoe1xuXHRcdFx0c3VibWl0OiBmYWxzZSxcblx0XHR9KTtcblx0XHRjb25zdCBhZGRQcm9taXNlID0gKHskZmllbGR9LCBwcm9taXNlKSA9PiB7XG5cdFx0XHRzZWxmLnB1c2hQZW5kaW5nKCk7XG5cdFx0XHRwcm9taXNlXG5cdFx0XHRcdC5kb25lKCgpID0+IHtcblx0XHRcdFx0XHQkZmllbGQuYXBwZW5kKFxuXHRcdFx0XHRcdFx0JCgnPHNwYW4+Jylcblx0XHRcdFx0XHRcdFx0LnRleHQoJ+WujOaIkO+8gScpXG5cdFx0XHRcdFx0XHRcdC5wcm9wKCdzdHlsZScsICdwb3NpdGlvbjogcmVsYXRpdmU7IHRvcDogLjVlbTsgY29sb3I6ICMwMDkwMDA7IGZvbnQtd2VpZ2h0OiBib2xkOycpXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fSlcblx0XHRcdFx0LmZhaWwoKG9iaikgPT4ge1xuXHRcdFx0XHRcdGlmIChvYmogJiYgb2JqLmVycm9yICYmIG9iai5lcnJvci5pbmZvKSB7XG5cdFx0XHRcdFx0XHQkZmllbGQuYXBwZW5kKFxuXHRcdFx0XHRcdFx0XHQkKCc8c3Bhbj4nKVxuXHRcdFx0XHRcdFx0XHRcdC50ZXh0KGDplJnor6/vvJoke29iai5lcnJvci5pbmZvfWApXG5cdFx0XHRcdFx0XHRcdFx0LnByb3AoJ3N0eWxlJywgJ3Bvc2l0aW9uOiByZWxhdGl2ZTsgdG9wOiAuNWVtOyBjb2xvcjogI2MwMDsgZm9udC13ZWlnaHQ6IGJvbGQ7Jylcblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdCRmaWVsZC5hcHBlbmQoXG5cdFx0XHRcdFx0XHRcdCQoJzxzcGFuPicpXG5cdFx0XHRcdFx0XHRcdFx0LnRleHQoJ+WPkeeUn+acquefpemUmeivr+OAgicpXG5cdFx0XHRcdFx0XHRcdFx0LnByb3AoJ3N0eWxlJywgJ3Bvc2l0aW9uOiByZWxhdGl2ZTsgdG9wOiAuNWVtOyBjb2xvcjogI2MwMDsgZm9udC13ZWlnaHQ6IGJvbGQ7Jylcblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KVxuXHRcdFx0XHQuYWx3YXlzKCgpID0+IHtcblx0XHRcdFx0XHRwcm9taXNlQ291bnQtLTsgLy8gRklYTUU6IG1heWJlIHdlIGNvdWxkIHVzZSBhIHNlbGYuaXNQZW5kaW5nKCkgb3Igc29tZXRoaW5nXG5cdFx0XHRcdFx0c2VsZi5wb3BQZW5kaW5nKCk7XG5cdFx0XHRcdFx0aWYgKHByb21pc2VDb3VudCA9PT0gMCkge1xuXHRcdFx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdGxvY2F0aW9uLnJlbG9hZCh0cnVlKTtcblx0XHRcdFx0XHRcdH0sIDEwMDApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHRyZXR1cm4gcHJvbWlzZTtcblx0XHR9O1xuXHRcdHNlbGYubWFya0FzRG9uZVByb2dyZXNzRmllbGQuc2V0TGFiZWwoJ+agh+iusOivt+axguS4uuW3suWujOaIkC4uLicpO1xuXHRcdHNlbGYuc3VibWl0RmllbGRzZXQuYWRkSXRlbXMoW3NlbGYubWFya0FzRG9uZVByb2dyZXNzRmllbGRdKTtcblx0XHRzZWxmLmNoYW5nZVJpZ2h0c1Byb2dyZXNzRmllbGQuc2V0TGFiZWwoJ+aOiOS6iOadg+mZkC4uLicpO1xuXHRcdHNlbGYuc3VibWl0RmllbGRzZXQuYWRkSXRlbXMoW3NlbGYuY2hhbmdlUmlnaHRzUHJvZ3Jlc3NGaWVsZF0pO1xuXHRcdGlmIChnZXRQZXJtaXNzaW9uUmVxdWVzdGVkKHBlcm1pc3Npb24pKSB7XG5cdFx0XHRzZWxmLmlzc3VlVGVtcGxhdGVQcm9ncmVzc0ZpZWxkLnNldExhYmVsKCflj5HpgIHpgJrnn6UuLi4nKTtcblx0XHRcdHNlbGYuc3VibWl0RmllbGRzZXQuYWRkSXRlbXMoW3NlbGYuaXNzdWVUZW1wbGF0ZVByb2dyZXNzRmllbGRdKTtcblx0XHR9XG5cdFx0YWRkUHJvbWlzZShcblx0XHRcdHNlbGYubWFya0FzRG9uZVByb2dyZXNzRmllbGQsXG5cdFx0XHRtYXJrQXNEb25lKHVzZXJOYW1lLCBpbmRleCwgYFxcbjoke3RoaXMuY2xvc2luZ1JlbWFya3NJbnB1dC5nZXRWYWx1ZSgpfWApXG5cdFx0KS50aGVuKCh7ZWRpdH0pID0+IHtcblx0XHRcdGFkZFByb21pc2UoXG5cdFx0XHRcdHNlbGYuY2hhbmdlUmlnaHRzUHJvZ3Jlc3NGaWVsZCxcblx0XHRcdFx0YXNzaWduUGVybWlzc2lvbihcblx0XHRcdFx0XHR1c2VyTmFtZSxcblx0XHRcdFx0XHRwZXJtaXNzaW9uLFxuXHRcdFx0XHRcdHRoaXMucmlnaHRzQ2hhbmdlU3VtbWFyeUlucHV0LmdldFZhbHVlKCksXG5cdFx0XHRcdFx0ZWRpdC5uZXdyZXZpZCxcblx0XHRcdFx0XHR0aGlzLmV4cGlyeUlucHV0LmdldFZhbHVlKClcblx0XHRcdFx0KVxuXHRcdFx0KS50aGVuKCgpID0+IHtcblx0XHRcdFx0aWYgKGdldFBlcm1pc3Npb25SZXF1ZXN0ZWQocGVybWlzc2lvbikpIHtcblx0XHRcdFx0XHRhZGRQcm9taXNlKFxuXHRcdFx0XHRcdFx0c2VsZi5pc3N1ZVRlbXBsYXRlUHJvZ3Jlc3NGaWVsZCxcblx0XHRcdFx0XHRcdGlzc3VlVGVtcGxhdGUodXNlck5hbWUsIHBlcm1pc3Npb24sIHRoaXMud2F0Y2hUYWxrUGFnZUNoZWNrYm94LmlzU2VsZWN0ZWQoKSlcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9KTtcblx0XHRzZWxmLnN0YWNrTGF5b3V0LnNldEl0ZW0oc2VsZi5zdWJtaXRQYW5lbCk7XG5cdH07XG5cdERpYWxvZy5wcm90b3R5cGUuZ2V0QWN0aW9uUHJvY2VzcyA9IGZ1bmN0aW9uIChhY3Rpb24pIHtcblx0XHRyZXR1cm4gRGlhbG9nLnN1cGVyLnByb3RvdHlwZS5nZXRBY3Rpb25Qcm9jZXNzLmNhbGwodGhpcywgYWN0aW9uKS5uZXh0KGZ1bmN0aW9uICgpIHtcblx0XHRcdGlmIChhY3Rpb24gPT09ICdzdWJtaXQnKSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLm9uU3VibWl0KCk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gRGlhbG9nLnN1cGVyLnByb3RvdHlwZS5nZXRBY3Rpb25Qcm9jZXNzLmNhbGwodGhpcywgYWN0aW9uKTtcblx0XHR9LCB0aGlzKTtcblx0fTtcblx0Y29uc3QgZGlhbG9nID0gbmV3IERpYWxvZyh7XG5cdFx0c2l6ZTogJ21lZGl1bScsXG5cdH0pO1xuXHRjb25zdCB3aW5kb3dNYW5hZ2VyID0gbmV3IE9PLnVpLldpbmRvd01hbmFnZXIoKTtcblx0JGJvZHkuYXBwZW5kKHdpbmRvd01hbmFnZXIuJGVsZW1lbnQpO1xuXHR3aW5kb3dNYW5hZ2VyLmFkZFdpbmRvd3MoW2RpYWxvZ10pO1xuXHR2b2lkIHdpbmRvd01hbmFnZXIub3BlbldpbmRvdyhkaWFsb2cpO1xufTtcblxuZXhwb3J0IHtzaG93RGlhbG9nfTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QUU1RmlFLGVBQVc7TUFDVkM7TUFDQW5EO01BQ0FmO01BQ0FDO0lBQ0QsQ0FBQztFQUNGLENBQUM7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogWyJpbXBvcnRfZXh0X2dhZGdldDIiLCAicmVxdWlyZSIsICJnZXRQZXJtaXNzaW9uTmFtZXMiLCAicGF0cm9sbGVyIiwgImF1dG9yZXZpZXdlciIsICJjb25maXJtZWQiLCAiZXZlbnRzcG9uc29yIiwgInRyYW5zd2lraSIsICJ0ZW1wbGF0ZWVkaXRvciIsICJib3QiLCAicGVybWlzc2lvbk5hbWVzIiwgImdldFBlcm1pc3Nvbk5hbWUiLCAia2V5IiwgImdldFBlcm1pc3Npb25CeVBhZ2UiLCAicGVybWlzc2lvblJlcXVlc3RlZCIsICJnZXRQZXJtaXNzaW9uUmVxdWVzdGVkIiwgIlNVTU1BUlkiLCAidmVyc2lvbiIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJhcGkiLCAiaW5pdE13QXBpIiwgImNvbmNhdCIsICJhc3NpZ25QZXJtaXNzaW9uIiwgInVzZXJOYW1lIiwgInBlcm1pc3Npb24iLCAic3VtbWFyeSIsICJyZXZJZCIsICJleHBpcnkiLCAicGVybWFMaW5rIiwgImZ1bGxTdW1tYXJ5IiwgInBhcmFtcyIsICJhY3Rpb24iLCAidXNlciIsICJyZXBsYWNlIiwgImFkZCIsICJyZWFzb24iLCAicG9zdFdpdGhUb2tlbiIsICJtYXJrQXNEb25lIiwgImluZGV4IiwgImNsb3NpbmdSZW1hcmtzIiwgIndnUGFnZU5hbWUiLCAibXciLCAiY29uZmlnIiwgImdldCIsICJzZWN0aW9uTm9kZSIsICJkb2N1bWVudCIsICJxdWVyeVNlbGVjdG9yIiwgInNlY3Rpb25OdW1iZXIiLCAiJCIsICJzaWJsaW5ncyIsICJmaW5kIiwgInByb3AiLCAibWF0Y2giLCAiYmFzZXRpbWVzdGFtcCIsICJjdXJ0aW1lc3RhbXAiLCAicGFnZSIsICJyZXZpc2lvbiIsICJjb250ZW50IiwgInF1ZXJ5UGFyYW1zIiwgImZvcm1hdCIsICJmb3JtYXR2ZXJzaW9uIiwgInRpdGxlcyIsICJydnByb3AiLCAicnZzZWN0aW9uIiwgInRoZW4iLCAiZGF0YSIsICJxdWVyeSIsICJwYWdlcyIsICJEZWZlcnJlZCIsICJyZWplY3QiLCAiaW52YWxpZCIsICJtaXNzaW5nIiwgInJldmlzaW9ucyIsICJ0aW1lc3RhbXAiLCAidHJpbSIsICJlZGl0UGFyYW1zIiwgInRpdGxlIiwgImFzc2VydCIsICJub2NyZWF0ZSIsICJzZWN0aW9uIiwgInN0YXJ0dGltZXN0YW1wIiwgInRleHQiLCAicG9zdFdpdGhFZGl0VG9rZW4iLCAiaXNzdWVUZW1wbGF0ZSIsICJ3YXRjaCIsICJ0YWxrUGFnZSIsICJhcHBlbmR0ZXh0IiwgIndhdGNobGlzdCIsICJzaG93RGlhbG9nIiwgIiRib2R5IiwgIkRpYWxvZyIsICJzdXBlciIsICJjYWxsIiwgIk9PIiwgImluaGVyaXRDbGFzcyIsICJ1aSIsICJQcm9jZXNzRGlhbG9nIiwgInN0YXRpYyIsICJuYW1lIiwgIndpbmRvdyIsICJ3Z1VMUyIsICJhY3Rpb25zIiwgImxhYmVsIiwgImZsYWdzIiwgInByb3RvdHlwZSIsICJnZXRBcGlNYW5hZ2VyIiwgImFwaU1hbmFnZXIiLCAiZ2V0Qm9keUhlaWdodCIsICJpbml0aWFsaXplIiwgIl9hc3luY1RvR2VuZXJhdG9yIiwgImVkaXRGaWVsZHNldCIsICJGaWVsZHNldExheW91dCIsICJjbGFzc2VzIiwgImVkaXRQYW5lbCIsICJQYW5lbExheW91dCIsICJleHBhbmRlZCIsICIkZWxlbWVudCIsICJhcHBlbmQiLCAicmlnaHRMb2dXYXBwZXIiLCAidXJsIiwgInV0aWwiLCAiZ2V0VXJsIiwgInR5cGUiLCAiYXR0ciIsICJocmVmIiwgInRhcmdldCIsICJhcHBlbmRUbyIsICJyaWdodExvZ1RleHQiLCAicmlnaHRMb2ciLCAiTGFiZWxXaWRnZXQiLCAibGVhY3Rpb24iLCAibGVsaW1pdCIsICJsZXRpdGxlIiwgImxpc3QiLCAibG9ncyIsICJsb2dldmVudHMiLCAibGVuZ3RoIiwgIk1vcmViaXRzIiwgImRhdGUiLCAiY2FsZW5kYXIiLCAicmlnaHRzIiwgIm5ld2dyb3VwcyIsICJqb2luIiwgInJpZ2h0c0NoYW5nZVN1bW1hcnlJbnB1dCIsICJUZXh0SW5wdXRXaWRnZXQiLCAidmFsdWUiLCAicGxhY2Vob2xkZXIiLCAiZXhwaXJ5SW5wdXQiLCAid2lkZ2V0cyIsICJFeHBpcnlXaWRnZXQiLCAiJG92ZXJsYXkiLCAiUmVsYXRpdmVJbnB1dENsYXNzIiwgIlNlbGVjdFdpdGhJbnB1dFdpZGdldCIsICJyZWxhdGl2ZUlucHV0IiwgIm9yIiwgImRyb3Bkb3duaW5wdXQiLCAib3B0aW9ucyIsICJ0ZXh0aW5wdXQiLCAicmVxdWlyZWQiLCAiY2xvc2luZ1JlbWFya3NJbnB1dCIsICJ3YXRjaFRhbGtQYWdlQ2hlY2tib3giLCAiQ2hlY2tib3hJbnB1dFdpZGdldCIsICJzZWxlY3RlZCIsICJhZGRJdGVtcyIsICJmb3JtRWxlbWVudHMiLCAiRmllbGRMYXlvdXQiLCAic3VibWl0UGFuZWwiLCAic3VibWl0RmllbGRzZXQiLCAiY2hhbmdlUmlnaHRzUHJvZ3Jlc3NMYWJlbCIsICJjaGFuZ2VSaWdodHNQcm9ncmVzc0ZpZWxkIiwgIm1hcmtBc0RvbmVQcm9ncmVzc0xhYmVsIiwgIm1hcmtBc0RvbmVQcm9ncmVzc0ZpZWxkIiwgImlzc3VlVGVtcGxhdGVQcm9ncmVzc0xhYmVsIiwgImlzc3VlVGVtcGxhdGVQcm9ncmVzc0ZpZWxkIiwgInN0YWNrTGF5b3V0IiwgIlN0YWNrTGF5b3V0IiwgIml0ZW1zIiwgInBhZGRlZCIsICJvblN1Ym1pdCIsICJzZWxmIiwgInByb21pc2VDb3VudCIsICJzZXRBYmlsaXRpZXMiLCAic3VibWl0IiwgImFkZFByb21pc2UiLCAiJGZpZWxkIiwgInByb21pc2UiLCAicHVzaFBlbmRpbmciLCAiZG9uZSIsICJmYWlsIiwgIm9iaiIsICJlcnJvciIsICJpbmZvIiwgImFsd2F5cyIsICJwb3BQZW5kaW5nIiwgInNldFRpbWVvdXQiLCAibG9jYXRpb24iLCAicmVsb2FkIiwgInNldExhYmVsIiwgImdldFZhbHVlIiwgImVkaXQiLCAibmV3cmV2aWQiLCAiaXNTZWxlY3RlZCIsICJzZXRJdGVtIiwgImdldEFjdGlvblByb2Nlc3MiLCAibmV4dCIsICJkaWFsb2ciLCAic2l6ZSIsICJ3aW5kb3dNYW5hZ2VyIiwgIldpbmRvd01hbmFnZXIiLCAiYWRkV2luZG93cyIsICJvcGVuV2luZG93IiwgImdldEJvZHkiLCAib24iLCAiZXZlbnQiLCAiX213JHV0aWwkZ2V0UGFyYW1WYWx1IiwgIl8kZWxlbWVudCRwYXJlbnRzJHByZSIsICJwcmV2ZW50RGVmYXVsdCIsICJnZXRQYXJhbVZhbHVlIiwgInNlY3Rpb25JZCIsICJwYXJlbnRzIiwgInByZXYiXQp9Cg==

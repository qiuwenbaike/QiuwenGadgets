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
//! src/UserRightsManager/modules/constant.ts
var PERM_NAME = {
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
var PAGE_PERM = {
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
var PERM_TEMPLATE = {
  patroller: "Patrolgranted",
  autoreviewer: "Autopatrolgranted",
  "massmessage-sender": "MMSgranted",
  templateeditor: "Template editor granted"
};
var SUMMARY = "（使用[[MediaWiki:Gadget-UserRightsManager.js|UserRightsManager]]）";
//! src/UserRightsManager/UserRightsManager.ts
var import_ext_gadget2 = require("ext.gadget.Util");
//! src/UserRightsManager/options.json
var version = "2.0";
//! src/UserRightsManager/modules/api.ts
var import_ext_gadget = require("ext.gadget.Util");
var api = (0, import_ext_gadget.initMwApi)("morebits.js; UserRightsManager/".concat(version));
//! src/UserRightsManager/modules/core.js
var index = "";
var userName = "";
var permission = "";
var dialog;
var permaLink = "";
var WG_PAGE_NAME = mw.config.get("wgPageName");
var assignPermission = (summary, revId, expiry) => {
  permaLink = "[[Special:PermaLink/".concat(revId, "#User:").concat(userName, "|权限申请]]");
  let fullSummary = "+".concat(PERM_NAME[permission], "；").concat(permaLink);
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
var markAsDone = (closingRemarks) => {
  var _index2;
  const sectionNode = document.querySelector("#User\\:".concat(userName.replace(/"/g, ".22").replace(/ /g, "_")).concat((_index2 = index) !== null && _index2 !== void 0 ? _index2 : ""));
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
    titles: [WG_PAGE_NAME],
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
      title: WG_PAGE_NAME,
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
var issueTemplate = (watch) => {
  const talkPage = "User talk:".concat(userName.replace(/ /g, "_"));
  const params = {
    action: "edit",
    title: talkPage,
    appendtext: "\n\n{{".concat("subst:", PERM_TEMPLATE[permission], "}}}"),
    summary: "根据".concat(permaLink, "授予").concat(PERM_NAME[permission]).concat(SUMMARY),
    watchlist: watch ? "watch" : "unwatch"
  };
  return api.postWithEditToken(params);
};
var showDialog = ({
  _index,
  _userName,
  _permission,
  $body
}) => {
  permission = _permission;
  index = _index;
  userName = _userName;
  const Dialog = function(config) {
    Dialog.super.call(this, config);
  };
  OO.inheritClass(Dialog, OO.ui.ProcessDialog);
  Dialog.static.name = "user-rights-manager";
  Dialog.static.title = "授予".concat(PERM_NAME[permission]).concat(window.wgULS("给", "給")).concat(userName);
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
    if (PERM_TEMPLATE[permission]) {
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
    let promiseCount = PERM_TEMPLATE[permission] ? 3 : 2;
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
    if (PERM_TEMPLATE[permission]) {
      self.issueTemplateProgressField.setLabel("发送通知...");
      self.submitFieldset.addItems([self.issueTemplateProgressField]);
    }
    addPromise(self.markAsDoneProgressField, markAsDone("\n:".concat(this.closingRemarksInput.getValue()))).then(({
      edit
    }) => {
      addPromise(self.changeRightsProgressField, assignPermission(this.rightsChangeSummaryInput.getValue(), edit.newrevid, this.expiryInput.getValue())).then(() => {
        if (PERM_TEMPLATE[permission]) {
          addPromise(self.issueTemplateProgressField, issueTemplate(this.watchTalkPageCheckbox.isSelected()));
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
  dialog = new Dialog({
    size: "medium"
  });
  const windowManager = new OO.ui.WindowManager();
  $body.append(windowManager.$element);
  windowManager.addWindows([dialog]);
  windowManager.openWindow(dialog);
};
//! src/UserRightsManager/UserRightsManager.ts
void (0, import_ext_gadget2.getBody)().then(($body) => {
  const {
    wgPageName
  } = mw.config.get();
  if (!Object.keys(PAGE_PERM).includes(wgPageName)) {
    return;
  }
  const permission2 = PAGE_PERM[wgPageName];
  $body.find(".perm-assign-permissions a").on("click", (event) => {
    var _mw$util$getParamValu, _$element$parents$pre;
    if (permission2 === "AutoWikiBrowser") {
      return;
    }
    event.preventDefault();
    const $element = $(event.target);
    const username = (_mw$util$getParamValu = mw.util.getParamValue("user", $element.attr("href"))) !== null && _mw$util$getParamValu !== void 0 ? _mw$util$getParamValu : "";
    const sectionId = (_$element$parents$pre = $element.parents("dl").prev("h4").find(".mw-headline").attr("id")) !== null && _$element$parents$pre !== void 0 ? _$element$parents$pre : "";
    const index2 = sectionId === "User:".concat(username) ? "" : sectionId.replace("User:", "").replace(username, "");
    showDialog({
      $body,
      _index: index2,
      _userName: username,
      _permission: permission2
    });
  });
});

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1VzZXJSaWdodHNNYW5hZ2VyL21vZHVsZXMvY29uc3RhbnQudHMiLCAic3JjL1VzZXJSaWdodHNNYW5hZ2VyL1VzZXJSaWdodHNNYW5hZ2VyLnRzIiwgInNyYy9Vc2VyUmlnaHRzTWFuYWdlci9vcHRpb25zLmpzb24iLCAic3JjL1VzZXJSaWdodHNNYW5hZ2VyL21vZHVsZXMvYXBpLnRzIiwgInNyYy9Vc2VyUmlnaHRzTWFuYWdlci9tb2R1bGVzL2NvcmUuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB0eXBlIHtVc2VyUmlnaHRzfSBmcm9tICd+L01hcmtSaWdodHMvbW9kdWxlcy90eXBlcyc7XG5cbmNvbnN0IFBFUk1fTkFNRSA9IHtcblx0cGF0cm9sbGVyOiAn5beh5p+l5ZGYJyxcblx0YXV0b3Jldmlld2VyOiAn5beh5p+l6LGB5YWN6ICFJyxcblx0Y29uZmlybWVkOiAn56Gu6K6k55So5oi3Jyxcblx0J21hc3NtZXNzYWdlLXNlbmRlcic6ICflpKfph4/mtojmga/lj5HpgIHogIUnLFxuXHRldmVudHNwb25zb3I6ICfmtLvliqjnu4Tnu4fogIUnLFxuXHR0cmFuc3dpa2k6ICflr7zlhaXogIUnLFxuXHR0ZW1wbGF0ZWVkaXRvcjogJ+aooeadv+e8lui+keWRmCcsXG5cdGJvdDogJ+acuuWZqOS6uicsXG5cdCdybnJzdmVyaWZ5LWV4ZW1wdCc6ICflrp7lkI3liLbpqozor4HosYHlhY0nLFxufSBhcyBjb25zdCBzYXRpc2ZpZXMgUGFydGlhbDxSZWNvcmQ8VXNlclJpZ2h0cywgc3RyaW5nPj47XG5cbmNvbnN0IFBBR0VfUEVSTTogUmVjb3JkPHN0cmluZywgVXNlclJpZ2h0cz4gPSB7XG5cdCdRaXV3ZW5fdGFsazrmnYPpmZDnlLPor7cv55Sz6K+35beh5p+l5Zue6YCA5p2DJzogJ3BhdHJvbGxlcicsXG5cdCdRaXV3ZW5fdGFsazrmnYPpmZDnlLPor7cv55Sz6K+35beh5p+l6LGB5YWN5p2DJzogJ2F1dG9yZXZpZXdlcicsXG5cdCdRaXV3ZW5fdGFsazrmnYPpmZDnlLPor7cv55Sz6K+356Gu6K6k55So5oi35p2DJzogJ2NvbmZpcm1lZCcsXG5cdCdRaXV3ZW5fdGFsazrmnYPpmZDnlLPor7cv55Sz6K+35aSn6YeP5raI5oGv5Y+R6YCB5p2DJzogJ21hc3NtZXNzYWdlLXNlbmRlcicsXG5cdCdRaXV3ZW5fdGFsazrmnYPpmZDnlLPor7cv55Sz6K+35rS75Yqo57uE57uH5p2DJzogJ2V2ZW50c3BvbnNvcicsXG5cdCdRaXV3ZW5fdGFsazrmnYPpmZDnlLPor7cv55Sz6K+35a+85YWl5p2DJzogJ3RyYW5zd2lraScsXG5cdCdRaXV3ZW5fdGFsazrmnYPpmZDnlLPor7cv55Sz6K+35qih5p2/57yW6L6R5p2DJzogJ3RlbXBsYXRlZWRpdG9yJyxcblx0J1FpdXdlbl90YWxrOuadg+mZkOeUs+ivty/nlLPor7fmnLrlmajkurrmnYPpmZAnOiAnYm90Jyxcblx0J1FpdXdlbl90YWxrOuadg+mZkOeUs+ivty/nlLPor7flrp7lkI3liLbpqozor4HosYHlhY0nOiAncm5yc3ZlcmlmeS1leGVtcHQnLFxufTtcblxuY29uc3QgUEVSTV9URU1QTEFURSA9IHtcblx0cGF0cm9sbGVyOiAnUGF0cm9sZ3JhbnRlZCcsXG5cdGF1dG9yZXZpZXdlcjogJ0F1dG9wYXRyb2xncmFudGVkJyxcblx0J21hc3NtZXNzYWdlLXNlbmRlcic6ICdNTVNncmFudGVkJyxcblx0dGVtcGxhdGVlZGl0b3I6ICdUZW1wbGF0ZSBlZGl0b3IgZ3JhbnRlZCcsXG59IGFzIGNvbnN0IHNhdGlzZmllcyBQYXJ0aWFsPFJlY29yZDxVc2VyUmlnaHRzLCBzdHJpbmc+PjtcblxuY29uc3QgU1VNTUFSWTogc3RyaW5nID0gJ++8iOS9v+eUqFtbTWVkaWFXaWtpOkdhZGdldC1Vc2VyUmlnaHRzTWFuYWdlci5qc3xVc2VyUmlnaHRzTWFuYWdlcl1d77yJJztcblxuZXhwb3J0IHtQQUdFX1BFUk0sIFBFUk1fTkFNRSwgUEVSTV9URU1QTEFURSwgU1VNTUFSWX07XG4iLCAiaW1wb3J0IHtQQUdFX1BFUk19IGZyb20gJy4vbW9kdWxlcy9jb25zdGFudCc7XG5pbXBvcnQge2dldEJvZHl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5pbXBvcnQge3Nob3dEaWFsb2d9IGZyb20gJy4vbW9kdWxlcy9jb3JlJztcblxudm9pZCBnZXRCb2R5KCkudGhlbigoJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KTogdm9pZCA9PiB7XG5cdGNvbnN0IHt3Z1BhZ2VOYW1lfSA9IG13LmNvbmZpZy5nZXQoKTtcblxuXHRpZiAoIU9iamVjdC5rZXlzKFBBR0VfUEVSTSkuaW5jbHVkZXMod2dQYWdlTmFtZSkpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBwZXJtaXNzaW9uOiBzdHJpbmcgfCB1bmRlZmluZWQgPSBQQUdFX1BFUk1bd2dQYWdlTmFtZV07XG5cblx0JGJvZHkuZmluZCgnLnBlcm0tYXNzaWduLXBlcm1pc3Npb25zIGEnKS5vbignY2xpY2snLCAoZXZlbnQ6IEpRdWVyeS5DbGlja0V2ZW50KTogdm9pZCA9PiB7XG5cdFx0aWYgKHBlcm1pc3Npb24gPT09ICdBdXRvV2lraUJyb3dzZXInKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuXHRcdGNvbnN0ICRlbGVtZW50OiBKUXVlcnk8SFRNTEFuY2hvckVsZW1lbnQ+ID0gJChldmVudC50YXJnZXQgYXMgSFRNTEFuY2hvckVsZW1lbnQpO1xuXG5cdFx0Y29uc3QgdXNlcm5hbWU6IHN0cmluZyA9IG13LnV0aWwuZ2V0UGFyYW1WYWx1ZSgndXNlcicsICRlbGVtZW50LmF0dHIoJ2hyZWYnKSkgPz8gJyc7XG5cdFx0Y29uc3Qgc2VjdGlvbklkOiBzdHJpbmcgPSAkZWxlbWVudC5wYXJlbnRzKCdkbCcpLnByZXYoJ2g0JykuZmluZCgnLm13LWhlYWRsaW5lJykuYXR0cignaWQnKSA/PyAnJztcblx0XHRjb25zdCBpbmRleDogc3RyaW5nID1cblx0XHRcdHNlY3Rpb25JZCA9PT0gYFVzZXI6JHt1c2VybmFtZX1gID8gJycgOiBzZWN0aW9uSWQucmVwbGFjZSgnVXNlcjonLCAnJykucmVwbGFjZSh1c2VybmFtZSwgJycpO1xuXG5cdFx0c2hvd0RpYWxvZyh7XG5cdFx0XHQkYm9keSxcblx0XHRcdF9pbmRleDogaW5kZXgsXG5cdFx0XHRfdXNlck5hbWU6IHVzZXJuYW1lLFxuXHRcdFx0X3Blcm1pc3Npb246IHBlcm1pc3Npb24sXG5cdFx0fSk7XG5cdH0pO1xufSk7XG4iLCAie1xuXHRcInZlcnNpb25cIjogXCIyLjBcIlxufVxuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7aW5pdE13QXBpfSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG5jb25zdCBhcGk6IG13LkFwaSA9IGluaXRNd0FwaShgbW9yZWJpdHMuanM7IFVzZXJSaWdodHNNYW5hZ2VyLyR7T1BUSU9OUy52ZXJzaW9ufWApO1xuXG5leHBvcnQge2FwaX07XG4iLCAiLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHMtY29tbWVudFxuLy8gQHRzLW5vY2hlY2tcbmltcG9ydCB7UEVSTV9OQU1FLCBQRVJNX1RFTVBMQVRFLCBTVU1NQVJZfSBmcm9tICcuL2NvbnN0YW50JztcbmltcG9ydCB7YXBpfSBmcm9tICcuL2FwaSc7XG5cbmxldCBpbmRleCA9ICcnO1xubGV0IHVzZXJOYW1lID0gJyc7XG5sZXQgcGVybWlzc2lvbiA9ICcnO1xubGV0IGRpYWxvZztcbmxldCBwZXJtYUxpbmsgPSAnJztcblxuY29uc3QgV0dfUEFHRV9OQU1FID0gbXcuY29uZmlnLmdldCgnd2dQYWdlTmFtZScpO1xuXG5jb25zdCBhc3NpZ25QZXJtaXNzaW9uID0gKHN1bW1hcnksIHJldklkLCBleHBpcnkpID0+IHtcblx0cGVybWFMaW5rID0gYFtbU3BlY2lhbDpQZXJtYUxpbmsvJHtyZXZJZH0jVXNlcjoke3VzZXJOYW1lfXzmnYPpmZDnlLPor7ddXWA7XG5cdGxldCBmdWxsU3VtbWFyeSA9IGArJHtQRVJNX05BTUVbcGVybWlzc2lvbl1977ybJHtwZXJtYUxpbmt9YDtcblx0aWYgKHN1bW1hcnkgIT09ICcnKSB7XG5cdFx0ZnVsbFN1bW1hcnkgKz0gYO+8myR7c3VtbWFyeX1gO1xuXHR9XG5cdGZ1bGxTdW1tYXJ5ICs9IFNVTU1BUlk7XG5cdGNvbnN0IHBhcmFtcyA9IHtcblx0XHRhY3Rpb246ICd1c2VycmlnaHRzJyxcblx0XHR1c2VyOiB1c2VyTmFtZS5yZXBsYWNlKC8gL2csICdfJyksXG5cdFx0YWRkOiBwZXJtaXNzaW9uLFxuXHRcdGV4cGlyeTogZXhwaXJ5ID09PSAnJyA/ICdpbmZpbml0eScgOiBleHBpcnksXG5cdFx0cmVhc29uOiBmdWxsU3VtbWFyeSxcblx0fTtcblx0cmV0dXJuIGFwaS5wb3N0V2l0aFRva2VuKCd1c2VycmlnaHRzJywgcGFyYW1zKTtcbn07XG5cbmNvbnN0IG1hcmtBc0RvbmUgPSAoY2xvc2luZ1JlbWFya3MpID0+IHtcblx0Y29uc3Qgc2VjdGlvbk5vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuXHRcdGAjVXNlclxcXFw6JHt1c2VyTmFtZS5yZXBsYWNlKC9cIi9nLCAnLjIyJykucmVwbGFjZSgvIC9nLCAnXycpfSR7aW5kZXggPz8gJyd9YFxuXHQpO1xuXHRjb25zdCBbLCBzZWN0aW9uTnVtYmVyXSA9ICQoc2VjdGlvbk5vZGUpXG5cdFx0LnNpYmxpbmdzKCcubXctZWRpdHNlY3Rpb24nKVxuXHRcdC5maW5kKCdhOm5vdCgubXctZWRpdHNlY3Rpb24tdmlzdWFsZWRpdG9yKScpXG5cdFx0LnByb3AoJ2hyZWYnKVxuXHRcdC5tYXRjaCgvc2VjdGlvbj0oXFxkKykvKTtcblx0bGV0IGJhc2V0aW1lc3RhbXA7XG5cdGxldCBjdXJ0aW1lc3RhbXA7XG5cdGxldCBwYWdlO1xuXHRsZXQgcmV2aXNpb247XG5cdGxldCBjb250ZW50O1xuXHRjb25zdCBxdWVyeVBhcmFtcyA9IHtcblx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdHByb3A6ICdyZXZpc2lvbnMnLFxuXHRcdHRpdGxlczogW1dHX1BBR0VfTkFNRV0sXG5cdFx0Y3VydGltZXN0YW1wOiB0cnVlLFxuXHRcdHJ2cHJvcDogWydjb250ZW50JywgJ3RpbWVzdGFtcCddLFxuXHRcdHJ2c2VjdGlvbjogc2VjdGlvbk51bWJlcixcblx0fTtcblx0cmV0dXJuIGFwaVxuXHRcdC5nZXQocXVlcnlQYXJhbXMpXG5cdFx0LnRoZW4oKGRhdGEpID0+IHtcblx0XHRcdGlmICghZGF0YS5xdWVyeSB8fCAhZGF0YS5xdWVyeS5wYWdlcykge1xuXHRcdFx0XHRyZXR1cm4gJC5EZWZlcnJlZCgpLnJlamVjdCgndW5rbm93bicpO1xuXHRcdFx0fVxuXHRcdFx0W3BhZ2VdID0gZGF0YS5xdWVyeS5wYWdlcztcblx0XHRcdGlmICghcGFnZSB8fCBwYWdlLmludmFsaWQpIHtcblx0XHRcdFx0cmV0dXJuICQuRGVmZXJyZWQoKS5yZWplY3QoJ2ludmFsaWR0aXRsZScpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHBhZ2UubWlzc2luZykge1xuXHRcdFx0XHRyZXR1cm4gJC5EZWZlcnJlZCgpLnJlamVjdCgnbm9jcmVhdGUtbWlzc2luZycpO1xuXHRcdFx0fVxuXHRcdFx0W3JldmlzaW9uXSA9IHBhZ2UucmV2aXNpb25zO1xuXHRcdFx0YmFzZXRpbWVzdGFtcCA9IHJldmlzaW9uLnRpbWVzdGFtcDtcblx0XHRcdCh7Y3VydGltZXN0YW1wfSA9IGRhdGEpO1xuXHRcdFx0KHtjb250ZW50fSA9IHJldmlzaW9uKTtcblx0XHR9KVxuXHRcdC50aGVuKCgpID0+IHtcblx0XHRcdGNvbnRlbnQgPSBjb250ZW50LnRyaW0oKTtcblx0XHRcdGNvbnRlbnQgPSBjb250ZW50LnJlcGxhY2UoLzp7e3N0YXR1cyhcXHwuKj8pP319L2ksICc6e3tTdGF0dXN8K319Jyk7XG5cdFx0XHRjb250ZW50ICs9IGNsb3NpbmdSZW1hcmtzO1xuXHRcdFx0Y29uc3QgZWRpdFBhcmFtcyA9IHtcblx0XHRcdFx0YWN0aW9uOiAnZWRpdCcsXG5cdFx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0XHRcdHRpdGxlOiBXR19QQUdFX05BTUUsXG5cdFx0XHRcdGFzc2VydDogbXcuY29uZmlnLmdldCgnd2dVc2VyTmFtZScpID8gJ3VzZXInIDogdW5kZWZpbmVkLFxuXHRcdFx0XHRub2NyZWF0ZTogdHJ1ZSxcblx0XHRcdFx0c2VjdGlvbjogc2VjdGlvbk51bWJlcixcblx0XHRcdFx0c3RhcnR0aW1lc3RhbXA6IGN1cnRpbWVzdGFtcCxcblx0XHRcdFx0c3VtbWFyeTogYC8qIFVzZXI6JHt1c2VyTmFtZX0gKi8g5a6M5oiQJHtTVU1NQVJZfWAsXG5cdFx0XHRcdHRleHQ6IGNvbnRlbnQsXG5cdFx0XHRcdGJhc2V0aW1lc3RhbXAsXG5cdFx0XHR9O1xuXHRcdFx0cmV0dXJuIGFwaS5wb3N0V2l0aEVkaXRUb2tlbihlZGl0UGFyYW1zKTtcblx0XHR9KTtcbn07XG5cbmNvbnN0IGlzc3VlVGVtcGxhdGUgPSAod2F0Y2gpID0+IHtcblx0Y29uc3QgdGFsa1BhZ2UgPSBgVXNlciB0YWxrOiR7dXNlck5hbWUucmVwbGFjZSgvIC9nLCAnXycpfWA7XG5cdGNvbnN0IHBhcmFtcyA9IHtcblx0XHRhY3Rpb246ICdlZGl0Jyxcblx0XHR0aXRsZTogdGFsa1BhZ2UsXG5cdFx0YXBwZW5kdGV4dDogJ1xcblxcbnt7Jy5jb25jYXQoJ3N1YnN0OicsIFBFUk1fVEVNUExBVEVbcGVybWlzc2lvbl0sICd9fX0nKSxcblx0XHRzdW1tYXJ5OiBg5qC55o2uJHtwZXJtYUxpbmt95o6I5LqIJHtQRVJNX05BTUVbcGVybWlzc2lvbl19JHtTVU1NQVJZfWAsXG5cdFx0d2F0Y2hsaXN0OiB3YXRjaCA/ICd3YXRjaCcgOiAndW53YXRjaCcsXG5cdH07XG5cdHJldHVybiBhcGkucG9zdFdpdGhFZGl0VG9rZW4ocGFyYW1zKTtcbn07XG5cbmNvbnN0IHNob3dEaWFsb2cgPSAoe19pbmRleCwgX3VzZXJOYW1lLCBfcGVybWlzc2lvbiwgJGJvZHl9KSA9PiB7XG5cdHBlcm1pc3Npb24gPSBfcGVybWlzc2lvbjtcblx0aW5kZXggPSBfaW5kZXg7XG5cdHVzZXJOYW1lID0gX3VzZXJOYW1lO1xuXG5cdGNvbnN0IERpYWxvZyA9IGZ1bmN0aW9uIChjb25maWcpIHtcblx0XHREaWFsb2cuc3VwZXIuY2FsbCh0aGlzLCBjb25maWcpO1xuXHR9O1xuXHRPTy5pbmhlcml0Q2xhc3MoRGlhbG9nLCBPTy51aS5Qcm9jZXNzRGlhbG9nKTtcblx0RGlhbG9nLnN0YXRpYy5uYW1lID0gJ3VzZXItcmlnaHRzLW1hbmFnZXInO1xuXHREaWFsb2cuc3RhdGljLnRpdGxlID0gYOaOiOS6iCR7UEVSTV9OQU1FW3Blcm1pc3Npb25dfSR7d2luZG93LndnVUxTKCfnu5knLCAn57WmJyl9JHt1c2VyTmFtZX1gO1xuXHREaWFsb2cuc3RhdGljLmFjdGlvbnMgPSBbXG5cdFx0e1xuXHRcdFx0YWN0aW9uOiAnc3VibWl0Jyxcblx0XHRcdGxhYmVsOiB3aW5kb3cud2dVTFMoJ+aOiOadgycsICfmjojmrIonKSxcblx0XHRcdGZsYWdzOiBbJ3ByaW1hcnknLCAncHJvZ3Jlc3NpdmUnXSxcblx0XHR9LFxuXHRcdHtcblx0XHRcdGxhYmVsOiAn5Y+W5raIJyxcblx0XHRcdGZsYWdzOiBbJ3NhZmUnLCAnY2xvc2UnXSxcblx0XHR9LFxuXHRdO1xuXHREaWFsb2cucHJvdG90eXBlLmdldEFwaU1hbmFnZXIgPSBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIHRoaXMuYXBpTWFuYWdlcjtcblx0fTtcblx0RGlhbG9nLnByb3RvdHlwZS5nZXRCb2R5SGVpZ2h0ID0gKCkgPT4ge1xuXHRcdHJldHVybiAyNTU7XG5cdH07XG5cdERpYWxvZy5wcm90b3R5cGUuaW5pdGlhbGl6ZSA9IGFzeW5jIGZ1bmN0aW9uICgpIHtcblx0XHREaWFsb2cuc3VwZXIucHJvdG90eXBlLmluaXRpYWxpemUuY2FsbCh0aGlzKTtcblx0XHR0aGlzLmVkaXRGaWVsZHNldCA9IG5ldyBPTy51aS5GaWVsZHNldExheW91dCh7XG5cdFx0XHRjbGFzc2VzOiBbJ2NvbnRhaW5lciddLFxuXHRcdH0pO1xuXHRcdHRoaXMuZWRpdFBhbmVsID0gbmV3IE9PLnVpLlBhbmVsTGF5b3V0KHtcblx0XHRcdGV4cGFuZGVkOiBmYWxzZSxcblx0XHR9KTtcblx0XHR0aGlzLmVkaXRQYW5lbC4kZWxlbWVudC5hcHBlbmQodGhpcy5lZGl0RmllbGRzZXQuJGVsZW1lbnQpO1xuXHRcdGNvbnN0IHJpZ2h0TG9nV2FwcGVyID0gJCgnPHNwYW4+Jyk7XG5cdFx0Y29uc3QgdXJsID0gbXcudXRpbC5nZXRVcmwoJ1NwZWNpYWw6TG9nL3JpZ2h0cycsIHtcblx0XHRcdHR5cGU6ICdyaWdodHMnLFxuXHRcdFx0cGFnZTogYFVzZXI6JHt1c2VyTmFtZX1gLFxuXHRcdH0pO1xuXHRcdCQoJzxhPicpXG5cdFx0XHQudGV4dCgn5pyA6L+R5p2D6ZmQ5pel5b+XJylcblx0XHRcdC5hdHRyKHtcblx0XHRcdFx0aHJlZjogdXJsLFxuXHRcdFx0XHR0YXJnZXQ6ICdfYmxhbmsnLFxuXHRcdFx0fSlcblx0XHRcdC5hcHBlbmRUbyhyaWdodExvZ1dhcHBlcik7XG5cdFx0cmlnaHRMb2dXYXBwZXIuYXBwZW5kKCfvvJonKTtcblx0XHRjb25zdCByaWdodExvZ1RleHQgPSAkKCc8c3Bhbj4nKS50ZXh0KCfojrflj5bkuK0nKS5hcHBlbmRUbyhyaWdodExvZ1dhcHBlcik7XG5cdFx0dGhpcy5yaWdodExvZyA9IG5ldyBPTy51aS5MYWJlbFdpZGdldCh7XG5cdFx0XHRsYWJlbDogcmlnaHRMb2dXYXBwZXIsXG5cdFx0fSk7XG5cdFx0Y29uc3QgcGFyYW1zID0ge1xuXHRcdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdFx0bGVhY3Rpb246ICdyaWdodHMvcmlnaHRzJyxcblx0XHRcdGxlbGltaXQ6IDEsXG5cdFx0XHRsZXRpdGxlOiBgVXNlcjoke3VzZXJOYW1lfWAsXG5cdFx0XHRsaXN0OiAnbG9nZXZlbnRzJyxcblx0XHR9O1xuXHRcdGNvbnN0IHtxdWVyeX0gPSBhd2FpdCBhcGkuZ2V0KHBhcmFtcyk7XG5cdFx0Y29uc3QgbG9ncyA9IHF1ZXJ5LmxvZ2V2ZW50cztcblx0XHRpZiAobG9ncy5sZW5ndGggPT09IDApIHtcblx0XHRcdHJpZ2h0TG9nVGV4dC50ZXh0KCfmsqHmnInku7vkvZXml6Xlv5cnKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5ldy1jYXBcblx0XHRcdGNvbnN0IHRpbWVzdGFtcCA9IG5ldyBNb3JlYml0cy5kYXRlKGxvZ3NbMF0udGltZXN0YW1wKS5jYWxlbmRhcigpO1xuXHRcdFx0Y29uc3QgcmlnaHRzID0gbG9nc1swXS5wYXJhbXMubmV3Z3JvdXBzLmpvaW4oJ+OAgScpIHx8ICfvvIjml6DvvIknO1xuXHRcdFx0cmlnaHRMb2dUZXh0LnRleHQoYCR7dGltZXN0YW1wfSAke2xvZ3NbMF0udXNlcn3lsIbnlKjmiLfnu4TmlLnkuLoke3JpZ2h0c31gKTtcblx0XHR9XG5cdFx0dGhpcy5yaWdodHNDaGFuZ2VTdW1tYXJ5SW5wdXQgPSBuZXcgT08udWkuVGV4dElucHV0V2lkZ2V0KHtcblx0XHRcdHZhbHVlOiAnJyxcblx0XHRcdHBsYWNlaG9sZGVyOiAn5Y+v55WZ56m6Jyxcblx0XHR9KTtcblx0XHR0aGlzLmV4cGlyeUlucHV0ID0gbmV3IG13LndpZGdldHMuRXhwaXJ5V2lkZ2V0KHtcblx0XHRcdCRvdmVybGF5OiAkYm9keS5maW5kKCcub28tdWktd2luZG93JyksXG5cdFx0XHRSZWxhdGl2ZUlucHV0Q2xhc3M6IG13LndpZGdldHMuU2VsZWN0V2l0aElucHV0V2lkZ2V0LFxuXHRcdFx0cmVsYXRpdmVJbnB1dDoge1xuXHRcdFx0XHRvcjogdHJ1ZSxcblx0XHRcdFx0ZHJvcGRvd25pbnB1dDoge1xuXHRcdFx0XHRcdG9wdGlvbnM6IFtcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0ZGF0YTogJzEgZGF5Jyxcblx0XHRcdFx0XHRcdFx0bGFiZWw6ICcx5aSpJyxcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdGRhdGE6ICcxIHdlZWsnLFxuXHRcdFx0XHRcdFx0XHRsYWJlbDogJzHlkagnLFxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0ZGF0YTogJzEgbW9udGgnLFxuXHRcdFx0XHRcdFx0XHRsYWJlbDogJzHkuKrmnIgnLFxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0ZGF0YTogJzMgbW9udGhzJyxcblx0XHRcdFx0XHRcdFx0bGFiZWw6ICcz5Liq5pyIJyxcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdGRhdGE6ICc2IG1vbnRocycsXG5cdFx0XHRcdFx0XHRcdGxhYmVsOiAnNuS4quaciCcsXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRkYXRhOiAnMSB5ZWFyJyxcblx0XHRcdFx0XHRcdFx0bGFiZWw6ICcx5bm0Jyxcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdGRhdGE6ICdpbmZpbml0ZScsXG5cdFx0XHRcdFx0XHRcdGxhYmVsOiAn5peg6ZmQ5pyfJyxcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdGRhdGE6ICdvdGhlcicsXG5cdFx0XHRcdFx0XHRcdGxhYmVsOiAn5YW25LuW5pe26Ze0Jyxcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XSxcblx0XHRcdFx0XHR2YWx1ZTogJ2luZmluaXRlJyxcblx0XHRcdFx0fSxcblx0XHRcdFx0dGV4dGlucHV0OiB7XG5cdFx0XHRcdFx0cmVxdWlyZWQ6IHRydWUsXG5cdFx0XHRcdH0sXG5cdFx0XHR9LFxuXHRcdH0pO1xuXHRcdHRoaXMuY2xvc2luZ1JlbWFya3NJbnB1dCA9IG5ldyBPTy51aS5UZXh0SW5wdXRXaWRnZXQoe1xuXHRcdFx0dmFsdWU6ICd7e2RvbmV9feOAgi0tfn4nLmNvbmNhdCgnfn4nKSxcblx0XHR9KTtcblx0XHR0aGlzLndhdGNoVGFsa1BhZ2VDaGVja2JveCA9IG5ldyBPTy51aS5DaGVja2JveElucHV0V2lkZ2V0KHtcblx0XHRcdHNlbGVjdGVkOiBmYWxzZSxcblx0XHR9KTtcblx0XHR0aGlzLmVkaXRGaWVsZHNldC5hZGRJdGVtcyh0aGlzLnJpZ2h0TG9nKTtcblx0XHRjb25zdCBmb3JtRWxlbWVudHMgPSBbXG5cdFx0XHRuZXcgT08udWkuRmllbGRMYXlvdXQodGhpcy5yaWdodHNDaGFuZ2VTdW1tYXJ5SW5wdXQsIHtcblx0XHRcdFx0bGFiZWw6IHdpbmRvdy53Z1VMUygn5o6I5p2D5Y6f5ZugJywgJ+aOiOadg+WOn+WboCcpLFxuXHRcdFx0fSksXG5cdFx0XHRuZXcgT08udWkuRmllbGRMYXlvdXQodGhpcy5leHBpcnlJbnB1dCwge1xuXHRcdFx0XHRsYWJlbDogd2luZG93LndnVUxTKCfnu5PmnZ/ml7bpl7QnLCAn57WQ5p2f5pmC6ZaTJyksXG5cdFx0XHR9KSxcblx0XHRcdG5ldyBPTy51aS5GaWVsZExheW91dCh0aGlzLmNsb3NpbmdSZW1hcmtzSW5wdXQsIHtcblx0XHRcdFx0bGFiZWw6IHdpbmRvdy53Z1VMUygn5YWz6Zet6K+35rGC55WZ6KiAJywgJ+mXnOmWieiri+axgueVmeiogCcpLFxuXHRcdFx0fSksXG5cdFx0XTtcblx0XHRpZiAoUEVSTV9URU1QTEFURVtwZXJtaXNzaW9uXSkge1xuXHRcdFx0Zm9ybUVsZW1lbnRzW2Zvcm1FbGVtZW50cy5sZW5ndGhdID0gbmV3IE9PLnVpLkZpZWxkTGF5b3V0KHRoaXMud2F0Y2hUYWxrUGFnZUNoZWNrYm94LCB7XG5cdFx0XHRcdGxhYmVsOiB3aW5kb3cud2dVTFMoJ+ebkeinhueUqOaIt+iuqOiuuumhtScsICfnm6PoppbnlKjmiLboqI7oq5bpoIEnKSxcblx0XHRcdH0pO1xuXHRcdH1cblx0XHR0aGlzLmVkaXRGaWVsZHNldC5hZGRJdGVtcyhmb3JtRWxlbWVudHMpO1xuXHRcdHRoaXMuc3VibWl0UGFuZWwgPSBuZXcgT08udWkuUGFuZWxMYXlvdXQoe1xuXHRcdFx0JDogdGhpcy4kLFxuXHRcdFx0ZXhwYW5kZWQ6IGZhbHNlLFxuXHRcdH0pO1xuXHRcdHRoaXMuc3VibWl0RmllbGRzZXQgPSBuZXcgT08udWkuRmllbGRzZXRMYXlvdXQoe1xuXHRcdFx0Y2xhc3NlczogWydjb250YWluZXInXSxcblx0XHR9KTtcblx0XHR0aGlzLnN1Ym1pdFBhbmVsLiRlbGVtZW50LmFwcGVuZCh0aGlzLnN1Ym1pdEZpZWxkc2V0LiRlbGVtZW50KTtcblx0XHR0aGlzLmNoYW5nZVJpZ2h0c1Byb2dyZXNzTGFiZWwgPSBuZXcgT08udWkuTGFiZWxXaWRnZXQoKTtcblx0XHR0aGlzLmNoYW5nZVJpZ2h0c1Byb2dyZXNzRmllbGQgPSBuZXcgT08udWkuRmllbGRMYXlvdXQodGhpcy5jaGFuZ2VSaWdodHNQcm9ncmVzc0xhYmVsKTtcblx0XHR0aGlzLm1hcmtBc0RvbmVQcm9ncmVzc0xhYmVsID0gbmV3IE9PLnVpLkxhYmVsV2lkZ2V0KCk7XG5cdFx0dGhpcy5tYXJrQXNEb25lUHJvZ3Jlc3NGaWVsZCA9IG5ldyBPTy51aS5GaWVsZExheW91dCh0aGlzLm1hcmtBc0RvbmVQcm9ncmVzc0xhYmVsKTtcblx0XHR0aGlzLmlzc3VlVGVtcGxhdGVQcm9ncmVzc0xhYmVsID0gbmV3IE9PLnVpLkxhYmVsV2lkZ2V0KCk7XG5cdFx0dGhpcy5pc3N1ZVRlbXBsYXRlUHJvZ3Jlc3NGaWVsZCA9IG5ldyBPTy51aS5GaWVsZExheW91dCh0aGlzLmlzc3VlVGVtcGxhdGVQcm9ncmVzc0xhYmVsKTtcblx0XHR0aGlzLnN0YWNrTGF5b3V0ID0gbmV3IE9PLnVpLlN0YWNrTGF5b3V0KHtcblx0XHRcdGl0ZW1zOiBbdGhpcy5lZGl0UGFuZWwsIHRoaXMuc3VibWl0UGFuZWxdLFxuXHRcdFx0cGFkZGVkOiB0cnVlLFxuXHRcdH0pO1xuXHRcdHRoaXMuJGJvZHkuYXBwZW5kKHRoaXMuc3RhY2tMYXlvdXQuJGVsZW1lbnQpO1xuXHR9O1xuXHREaWFsb2cucHJvdG90eXBlLm9uU3VibWl0ID0gZnVuY3Rpb24gKCkge1xuXHRcdGNvbnN0IHNlbGYgPSB0aGlzO1xuXHRcdGxldCBwcm9taXNlQ291bnQgPSBQRVJNX1RFTVBMQVRFW3Blcm1pc3Npb25dID8gMyA6IDI7XG5cdFx0c2VsZi5hY3Rpb25zLnNldEFiaWxpdGllcyh7XG5cdFx0XHRzdWJtaXQ6IGZhbHNlLFxuXHRcdH0pO1xuXHRcdGNvbnN0IGFkZFByb21pc2UgPSAoeyRmaWVsZH0sIHByb21pc2UpID0+IHtcblx0XHRcdHNlbGYucHVzaFBlbmRpbmcoKTtcblx0XHRcdHByb21pc2Vcblx0XHRcdFx0LmRvbmUoKCkgPT4ge1xuXHRcdFx0XHRcdCRmaWVsZC5hcHBlbmQoXG5cdFx0XHRcdFx0XHQkKCc8c3Bhbj4nKVxuXHRcdFx0XHRcdFx0XHQudGV4dCgn5a6M5oiQ77yBJylcblx0XHRcdFx0XHRcdFx0LnByb3AoJ3N0eWxlJywgJ3Bvc2l0aW9uOiByZWxhdGl2ZTsgdG9wOiAuNWVtOyBjb2xvcjogIzAwOTAwMDsgZm9udC13ZWlnaHQ6IGJvbGQ7Jylcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9KVxuXHRcdFx0XHQuZmFpbCgob2JqKSA9PiB7XG5cdFx0XHRcdFx0aWYgKG9iaiAmJiBvYmouZXJyb3IgJiYgb2JqLmVycm9yLmluZm8pIHtcblx0XHRcdFx0XHRcdCRmaWVsZC5hcHBlbmQoXG5cdFx0XHRcdFx0XHRcdCQoJzxzcGFuPicpXG5cdFx0XHRcdFx0XHRcdFx0LnRleHQoYOmUmeivr++8miR7b2JqLmVycm9yLmluZm99YClcblx0XHRcdFx0XHRcdFx0XHQucHJvcCgnc3R5bGUnLCAncG9zaXRpb246IHJlbGF0aXZlOyB0b3A6IC41ZW07IGNvbG9yOiAjYzAwOyBmb250LXdlaWdodDogYm9sZDsnKVxuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0JGZpZWxkLmFwcGVuZChcblx0XHRcdFx0XHRcdFx0JCgnPHNwYW4+Jylcblx0XHRcdFx0XHRcdFx0XHQudGV4dCgn5Y+R55Sf5pyq55+l6ZSZ6K+v44CCJylcblx0XHRcdFx0XHRcdFx0XHQucHJvcCgnc3R5bGUnLCAncG9zaXRpb246IHJlbGF0aXZlOyB0b3A6IC41ZW07IGNvbG9yOiAjYzAwOyBmb250LXdlaWdodDogYm9sZDsnKVxuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pXG5cdFx0XHRcdC5hbHdheXMoKCkgPT4ge1xuXHRcdFx0XHRcdHByb21pc2VDb3VudC0tOyAvLyBGSVhNRTogbWF5YmUgd2UgY291bGQgdXNlIGEgc2VsZi5pc1BlbmRpbmcoKSBvciBzb21ldGhpbmdcblx0XHRcdFx0XHRzZWxmLnBvcFBlbmRpbmcoKTtcblx0XHRcdFx0XHRpZiAocHJvbWlzZUNvdW50ID09PSAwKSB7XG5cdFx0XHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0XHRcdFx0bG9jYXRpb24ucmVsb2FkKHRydWUpO1xuXHRcdFx0XHRcdFx0fSwgMTAwMCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdHJldHVybiBwcm9taXNlO1xuXHRcdH07XG5cdFx0c2VsZi5tYXJrQXNEb25lUHJvZ3Jlc3NGaWVsZC5zZXRMYWJlbCgn5qCH6K6w6K+35rGC5Li65bey5a6M5oiQLi4uJyk7XG5cdFx0c2VsZi5zdWJtaXRGaWVsZHNldC5hZGRJdGVtcyhbc2VsZi5tYXJrQXNEb25lUHJvZ3Jlc3NGaWVsZF0pO1xuXHRcdHNlbGYuY2hhbmdlUmlnaHRzUHJvZ3Jlc3NGaWVsZC5zZXRMYWJlbCgn5o6I5LqI5p2D6ZmQLi4uJyk7XG5cdFx0c2VsZi5zdWJtaXRGaWVsZHNldC5hZGRJdGVtcyhbc2VsZi5jaGFuZ2VSaWdodHNQcm9ncmVzc0ZpZWxkXSk7XG5cdFx0aWYgKFBFUk1fVEVNUExBVEVbcGVybWlzc2lvbl0pIHtcblx0XHRcdHNlbGYuaXNzdWVUZW1wbGF0ZVByb2dyZXNzRmllbGQuc2V0TGFiZWwoJ+WPkemAgemAmuefpS4uLicpO1xuXHRcdFx0c2VsZi5zdWJtaXRGaWVsZHNldC5hZGRJdGVtcyhbc2VsZi5pc3N1ZVRlbXBsYXRlUHJvZ3Jlc3NGaWVsZF0pO1xuXHRcdH1cblx0XHRhZGRQcm9taXNlKHNlbGYubWFya0FzRG9uZVByb2dyZXNzRmllbGQsIG1hcmtBc0RvbmUoYFxcbjoke3RoaXMuY2xvc2luZ1JlbWFya3NJbnB1dC5nZXRWYWx1ZSgpfWApKS50aGVuKFxuXHRcdFx0KHtlZGl0fSkgPT4ge1xuXHRcdFx0XHRhZGRQcm9taXNlKFxuXHRcdFx0XHRcdHNlbGYuY2hhbmdlUmlnaHRzUHJvZ3Jlc3NGaWVsZCxcblx0XHRcdFx0XHRhc3NpZ25QZXJtaXNzaW9uKFxuXHRcdFx0XHRcdFx0dGhpcy5yaWdodHNDaGFuZ2VTdW1tYXJ5SW5wdXQuZ2V0VmFsdWUoKSxcblx0XHRcdFx0XHRcdGVkaXQubmV3cmV2aWQsXG5cdFx0XHRcdFx0XHR0aGlzLmV4cGlyeUlucHV0LmdldFZhbHVlKClcblx0XHRcdFx0XHQpXG5cdFx0XHRcdCkudGhlbigoKSA9PiB7XG5cdFx0XHRcdFx0aWYgKFBFUk1fVEVNUExBVEVbcGVybWlzc2lvbl0pIHtcblx0XHRcdFx0XHRcdGFkZFByb21pc2UoXG5cdFx0XHRcdFx0XHRcdHNlbGYuaXNzdWVUZW1wbGF0ZVByb2dyZXNzRmllbGQsXG5cdFx0XHRcdFx0XHRcdGlzc3VlVGVtcGxhdGUodGhpcy53YXRjaFRhbGtQYWdlQ2hlY2tib3guaXNTZWxlY3RlZCgpKVxuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdCk7XG5cdFx0c2VsZi5zdGFja0xheW91dC5zZXRJdGVtKHNlbGYuc3VibWl0UGFuZWwpO1xuXHR9O1xuXHREaWFsb2cucHJvdG90eXBlLmdldEFjdGlvblByb2Nlc3MgPSBmdW5jdGlvbiAoYWN0aW9uKSB7XG5cdFx0cmV0dXJuIERpYWxvZy5zdXBlci5wcm90b3R5cGUuZ2V0QWN0aW9uUHJvY2Vzcy5jYWxsKHRoaXMsIGFjdGlvbikubmV4dChmdW5jdGlvbiAoKSB7XG5cdFx0XHRpZiAoYWN0aW9uID09PSAnc3VibWl0Jykge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5vblN1Ym1pdCgpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIERpYWxvZy5zdXBlci5wcm90b3R5cGUuZ2V0QWN0aW9uUHJvY2Vzcy5jYWxsKHRoaXMsIGFjdGlvbik7XG5cdFx0fSwgdGhpcyk7XG5cdH07XG5cdGRpYWxvZyA9IG5ldyBEaWFsb2coe1xuXHRcdHNpemU6ICdtZWRpdW0nLFxuXHR9KTtcblx0Y29uc3Qgd2luZG93TWFuYWdlciA9IG5ldyBPTy51aS5XaW5kb3dNYW5hZ2VyKCk7XG5cdCRib2R5LmFwcGVuZCh3aW5kb3dNYW5hZ2VyLiRlbGVtZW50KTtcblx0d2luZG93TWFuYWdlci5hZGRXaW5kb3dzKFtkaWFsb2ddKTtcblx0d2luZG93TWFuYWdlci5vcGVuV2luZG93KGRpYWxvZyk7XG59O1xuXG5leHBvcnQge3Nob3dEaWFsb2d9O1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsWUFBWTtFQUNqQkMsV0FBVztFQUNYQyxjQUFjO0VBQ2RDLFdBQVc7RUFDWCxzQkFBc0I7RUFDdEJDLGNBQWM7RUFDZEMsV0FBVztFQUNYQyxnQkFBZ0I7RUFDaEJDLEtBQUs7RUFDTCxxQkFBcUI7QUFDdEI7QUFFQSxJQUFNQyxZQUF3QztFQUM3Qyw0QkFBNEI7RUFDNUIsNEJBQTRCO0VBQzVCLDRCQUE0QjtFQUM1Qiw4QkFBOEI7RUFDOUIsNEJBQTRCO0VBQzVCLDBCQUEwQjtFQUMxQiw0QkFBNEI7RUFDNUIsNEJBQTRCO0VBQzVCLDhCQUE4QjtBQUMvQjtBQUVBLElBQU1DLGdCQUFnQjtFQUNyQlIsV0FBVztFQUNYQyxjQUFjO0VBQ2Qsc0JBQXNC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UUFBQUMsdUJBQUFDO0FBQ3hGLFFBQUlKLGdCQUFlLG1CQUFtQjtBQUNyQztJQUNEO0FBRUFFLFVBQU1HLGVBQWU7QUFFckIsVUFBTXhHLFdBQXNDdkUsRUFBRTRLLE1BQU01RixNQUEyQjtBQUUvRSxVQUFNZ0csWUFBQUgsd0JBQW1Cbk0sR0FBR2lHLEtBQUtzRyxjQUFjLFFBQVExRyxTQUFTTyxLQUFLLE1BQU0sQ0FBQyxPQUFBLFFBQUErRiwwQkFBQSxTQUFBQSx3QkFBSztBQUNqRixVQUFNSyxhQUFBSix3QkFBb0J2RyxTQUFTNEcsUUFBUSxJQUFJLEVBQUVDLEtBQUssSUFBSSxFQUFFbEwsS0FBSyxjQUFjLEVBQUU0RSxLQUFLLElBQUksT0FBQSxRQUFBZ0csMEJBQUEsU0FBQUEsd0JBQUs7QUFDL0YsVUFBTU8sU0FDTEgsY0FBQSxRQUFBL00sT0FBc0I2TSxRQUFRLElBQUssS0FBS0UsVUFBVTdMLFFBQVEsU0FBUyxFQUFFLEVBQUVBLFFBQVEyTCxVQUFVLEVBQUU7QUFFNUZ4SSxlQUFXO01BQ1ZJO01BQ0FILFFBQVE0STtNQUNSM0ksV0FBV3NJO01BQ1hySSxhQUFhK0g7SUFDZCxDQUFDO0VBQ0YsQ0FBQztBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbIlBFUk1fTkFNRSIsICJwYXRyb2xsZXIiLCAiYXV0b3Jldmlld2VyIiwgImNvbmZpcm1lZCIsICJldmVudHNwb25zb3IiLCAidHJhbnN3aWtpIiwgInRlbXBsYXRlZWRpdG9yIiwgImJvdCIsICJQQUdFX1BFUk0iLCAiUEVSTV9URU1QTEFURSIsICJTVU1NQVJZIiwgImltcG9ydF9leHRfZ2FkZ2V0MiIsICJyZXF1aXJlIiwgInZlcnNpb24iLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAiYXBpIiwgImluaXRNd0FwaSIsICJjb25jYXQiLCAiaW5kZXgiLCAidXNlck5hbWUiLCAicGVybWlzc2lvbiIsICJkaWFsb2ciLCAicGVybWFMaW5rIiwgIldHX1BBR0VfTkFNRSIsICJtdyIsICJjb25maWciLCAiZ2V0IiwgImFzc2lnblBlcm1pc3Npb24iLCAic3VtbWFyeSIsICJyZXZJZCIsICJleHBpcnkiLCAiZnVsbFN1bW1hcnkiLCAicGFyYW1zIiwgImFjdGlvbiIsICJ1c2VyIiwgInJlcGxhY2UiLCAiYWRkIiwgInJlYXNvbiIsICJwb3N0V2l0aFRva2VuIiwgIm1hcmtBc0RvbmUiLCAiY2xvc2luZ1JlbWFya3MiLCAiX2luZGV4MiIsICJzZWN0aW9uTm9kZSIsICJkb2N1bWVudCIsICJxdWVyeVNlbGVjdG9yIiwgInNlY3Rpb25OdW1iZXIiLCAiJCIsICJzaWJsaW5ncyIsICJmaW5kIiwgInByb3AiLCAibWF0Y2giLCAiYmFzZXRpbWVzdGFtcCIsICJjdXJ0aW1lc3RhbXAiLCAicGFnZSIsICJyZXZpc2lvbiIsICJjb250ZW50IiwgInF1ZXJ5UGFyYW1zIiwgImZvcm1hdCIsICJmb3JtYXR2ZXJzaW9uIiwgInRpdGxlcyIsICJydnByb3AiLCAicnZzZWN0aW9uIiwgInRoZW4iLCAiZGF0YSIsICJxdWVyeSIsICJwYWdlcyIsICJEZWZlcnJlZCIsICJyZWplY3QiLCAiaW52YWxpZCIsICJtaXNzaW5nIiwgInJldmlzaW9ucyIsICJ0aW1lc3RhbXAiLCAidHJpbSIsICJlZGl0UGFyYW1zIiwgInRpdGxlIiwgImFzc2VydCIsICJub2NyZWF0ZSIsICJzZWN0aW9uIiwgInN0YXJ0dGltZXN0YW1wIiwgInRleHQiLCAicG9zdFdpdGhFZGl0VG9rZW4iLCAiaXNzdWVUZW1wbGF0ZSIsICJ3YXRjaCIsICJ0YWxrUGFnZSIsICJhcHBlbmR0ZXh0IiwgIndhdGNobGlzdCIsICJzaG93RGlhbG9nIiwgIl9pbmRleCIsICJfdXNlck5hbWUiLCAiX3Blcm1pc3Npb24iLCAiJGJvZHkiLCAiRGlhbG9nIiwgInN1cGVyIiwgImNhbGwiLCAiT08iLCAiaW5oZXJpdENsYXNzIiwgInVpIiwgIlByb2Nlc3NEaWFsb2ciLCAic3RhdGljIiwgIm5hbWUiLCAid2luZG93IiwgIndnVUxTIiwgImFjdGlvbnMiLCAibGFiZWwiLCAiZmxhZ3MiLCAicHJvdG90eXBlIiwgImdldEFwaU1hbmFnZXIiLCAiYXBpTWFuYWdlciIsICJnZXRCb2R5SGVpZ2h0IiwgImluaXRpYWxpemUiLCAiX2FzeW5jVG9HZW5lcmF0b3IiLCAiZWRpdEZpZWxkc2V0IiwgIkZpZWxkc2V0TGF5b3V0IiwgImNsYXNzZXMiLCAiZWRpdFBhbmVsIiwgIlBhbmVsTGF5b3V0IiwgImV4cGFuZGVkIiwgIiRlbGVtZW50IiwgImFwcGVuZCIsICJyaWdodExvZ1dhcHBlciIsICJ1cmwiLCAidXRpbCIsICJnZXRVcmwiLCAidHlwZSIsICJhdHRyIiwgImhyZWYiLCAidGFyZ2V0IiwgImFwcGVuZFRvIiwgInJpZ2h0TG9nVGV4dCIsICJyaWdodExvZyIsICJMYWJlbFdpZGdldCIsICJsZWFjdGlvbiIsICJsZWxpbWl0IiwgImxldGl0bGUiLCAibGlzdCIsICJsb2dzIiwgImxvZ2V2ZW50cyIsICJsZW5ndGgiLCAiTW9yZWJpdHMiLCAiZGF0ZSIsICJjYWxlbmRhciIsICJyaWdodHMiLCAibmV3Z3JvdXBzIiwgImpvaW4iLCAicmlnaHRzQ2hhbmdlU3VtbWFyeUlucHV0IiwgIlRleHRJbnB1dFdpZGdldCIsICJ2YWx1ZSIsICJwbGFjZWhvbGRlciIsICJleHBpcnlJbnB1dCIsICJ3aWRnZXRzIiwgIkV4cGlyeVdpZGdldCIsICIkb3ZlcmxheSIsICJSZWxhdGl2ZUlucHV0Q2xhc3MiLCAiU2VsZWN0V2l0aElucHV0V2lkZ2V0IiwgInJlbGF0aXZlSW5wdXQiLCAib3IiLCAiZHJvcGRvd25pbnB1dCIsICJvcHRpb25zIiwgInRleHRpbnB1dCIsICJyZXF1aXJlZCIsICJjbG9zaW5nUmVtYXJrc0lucHV0IiwgIndhdGNoVGFsa1BhZ2VDaGVja2JveCIsICJDaGVja2JveElucHV0V2lkZ2V0IiwgInNlbGVjdGVkIiwgImFkZEl0ZW1zIiwgImZvcm1FbGVtZW50cyIsICJGaWVsZExheW91dCIsICJzdWJtaXRQYW5lbCIsICJzdWJtaXRGaWVsZHNldCIsICJjaGFuZ2VSaWdodHNQcm9ncmVzc0xhYmVsIiwgImNoYW5nZVJpZ2h0c1Byb2dyZXNzRmllbGQiLCAibWFya0FzRG9uZVByb2dyZXNzTGFiZWwiLCAibWFya0FzRG9uZVByb2dyZXNzRmllbGQiLCAiaXNzdWVUZW1wbGF0ZVByb2dyZXNzTGFiZWwiLCAiaXNzdWVUZW1wbGF0ZVByb2dyZXNzRmllbGQiLCAic3RhY2tMYXlvdXQiLCAiU3RhY2tMYXlvdXQiLCAiaXRlbXMiLCAicGFkZGVkIiwgIm9uU3VibWl0IiwgInNlbGYiLCAicHJvbWlzZUNvdW50IiwgInNldEFiaWxpdGllcyIsICJzdWJtaXQiLCAiYWRkUHJvbWlzZSIsICIkZmllbGQiLCAicHJvbWlzZSIsICJwdXNoUGVuZGluZyIsICJkb25lIiwgImZhaWwiLCAib2JqIiwgImVycm9yIiwgImluZm8iLCAiYWx3YXlzIiwgInBvcFBlbmRpbmciLCAic2V0VGltZW91dCIsICJsb2NhdGlvbiIsICJyZWxvYWQiLCAic2V0TGFiZWwiLCAiZ2V0VmFsdWUiLCAiZWRpdCIsICJuZXdyZXZpZCIsICJpc1NlbGVjdGVkIiwgInNldEl0ZW0iLCAiZ2V0QWN0aW9uUHJvY2VzcyIsICJuZXh0IiwgInNpemUiLCAid2luZG93TWFuYWdlciIsICJXaW5kb3dNYW5hZ2VyIiwgImFkZFdpbmRvd3MiLCAib3BlbldpbmRvdyIsICJnZXRCb2R5IiwgIndnUGFnZU5hbWUiLCAiT2JqZWN0IiwgImtleXMiLCAiaW5jbHVkZXMiLCAicGVybWlzc2lvbjIiLCAib24iLCAiZXZlbnQiLCAiX213JHV0aWwkZ2V0UGFyYW1WYWx1IiwgIl8kZWxlbWVudCRwYXJlbnRzJHByZSIsICJwcmV2ZW50RGVmYXVsdCIsICJ1c2VybmFtZSIsICJnZXRQYXJhbVZhbHVlIiwgInNlY3Rpb25JZCIsICJwYXJlbnRzIiwgInByZXYiLCAiaW5kZXgyIl0KfQo=

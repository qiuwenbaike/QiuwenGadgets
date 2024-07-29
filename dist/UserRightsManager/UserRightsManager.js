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
    [revision] = page.revisions;
    basetimestamp = revision.timestamp;
    curtimestamp = data["curtimestamp"];
    content = revision.content;
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
      Dialog.stackLayout = new OO.ui.StackLayout({
        items: [Dialog.editPanel, Dialog.submitPanel],
        padded: true
      });
      this.$body.append(Dialog.stackLayout.$element);
      return this;
    }
    static onSubmit() {
      void markAsDone(userName, index, "\n:".concat(Dialog.closingRemarksInput.getValue())).then((data) => {
        void assignPermission(userName, permission, Dialog.rightsChangeSummaryInput.getValue(), Number.parseInt(data["edit"].newrevid, 10), Dialog.expiryInput.getValue()).then(() => {
          if (permissionTemplate) {
            void issueTemplate(userName, permission, Dialog.watchTalkPageCheckbox.isSelected());
          }
        }).then(() => {
          setTimeout(() => {
            location.reload();
          }, 1e3);
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1VzZXJSaWdodHNNYW5hZ2VyL1VzZXJSaWdodHNNYW5hZ2VyLnRzIiwgInNyYy9Vc2VyUmlnaHRzTWFuYWdlci9tb2R1bGVzL2dldFBhZ2VQZXJtaXNzaW9ucy50cyIsICJzcmMvVXNlclJpZ2h0c01hbmFnZXIvb3B0aW9ucy5qc29uIiwgInNyYy9Vc2VyUmlnaHRzTWFuYWdlci9tb2R1bGVzL2FwaS50cyIsICJzcmMvVXNlclJpZ2h0c01hbmFnZXIvbW9kdWxlcy9nZXRQZXJtaXNzaW9uTmFtZXMudHMiLCAic3JjL1VzZXJSaWdodHNNYW5hZ2VyL21vZHVsZXMvYXNzaWduUGVybWlzc2lvbi50cyIsICJzcmMvVXNlclJpZ2h0c01hbmFnZXIvbW9kdWxlcy9nZXRUZW1wbGF0ZXMudHMiLCAic3JjL1VzZXJSaWdodHNNYW5hZ2VyL21vZHVsZXMvaXNzdWVUZW1wbGF0ZS50cyIsICJzcmMvVXNlclJpZ2h0c01hbmFnZXIvbW9kdWxlcy9tYXJrQXNEb25lLnRzIiwgInNyYy9Vc2VyUmlnaHRzTWFuYWdlci9tb2R1bGVzL3Nob3dEaWFsb2cudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7Z2V0Qm9keX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbmltcG9ydCB7Z2V0UGFnZVBlcm1pc3Npb25zfSBmcm9tICcuL21vZHVsZXMvZ2V0UGFnZVBlcm1pc3Npb25zJztcbmltcG9ydCB7c2hvd0RpYWxvZ30gZnJvbSAnLi9tb2R1bGVzL3Nob3dEaWFsb2cnO1xuXG52b2lkIGdldEJvZHkoKS50aGVuKCgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkID0+IHtcblx0Y29uc3QgcGVybWlzc2lvbiA9IGdldFBhZ2VQZXJtaXNzaW9ucygpO1xuXHRpZiAoIXBlcm1pc3Npb24pIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHQkYm9keS5maW5kKCcucGVybS1hc3NpZ24tcGVybWlzc2lvbnMgYScpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCkge1xuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cblx0XHRjb25zdCAkZWxlbWVudDogSlF1ZXJ5PEhUTUxBbmNob3JFbGVtZW50PiA9ICQodGhpcyBhcyBIVE1MQW5jaG9yRWxlbWVudCk7XG5cdFx0Y29uc3QgdXNlck5hbWUgPSBtdy51dGlsLmdldFBhcmFtVmFsdWUoJ3VzZXInLCAkZWxlbWVudC5hdHRyKCdocmVmJykpO1xuXHRcdGlmICghdXNlck5hbWUpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRjb25zdCBzZWN0aW9uSWQ6IHN0cmluZyA9ICRlbGVtZW50LnBhcmVudHMoJ2RsJykucHJldignaDQnKS5maW5kKCcubXctaGVhZGxpbmUnKS5hdHRyKCdpZCcpID8/ICcnO1xuXHRcdGNvbnN0IGluZGV4OiBzdHJpbmcgPVxuXHRcdFx0c2VjdGlvbklkID09PSBgVXNlcjoke3VzZXJOYW1lfWAgfHwgc2VjdGlvbklkID09PSBgVXNlcjoke3VzZXJOYW1lfWAucmVwbGFjZSgvXCIvZywgJy4yMicpLnJlcGxhY2UoLyAvZywgJ18nKVxuXHRcdFx0XHQ/ICcnXG5cdFx0XHRcdDogc2VjdGlvbklkXG5cdFx0XHRcdFx0XHQucmVwbGFjZSgnVXNlcjonLCAnJylcblx0XHRcdFx0XHRcdC5yZXBsYWNlKHVzZXJOYW1lLCAnJylcblx0XHRcdFx0XHRcdC5yZXBsYWNlKHVzZXJOYW1lLnJlcGxhY2UoL1wiL2csICcuMjInKS5yZXBsYWNlKC8gL2csICdfJyksICcnKTtcblxuXHRcdHNob3dEaWFsb2coeyRib2R5LCB1c2VyTmFtZSwgcGVybWlzc2lvbiwgaW5kZXh9KTtcblx0fSk7XG59KTtcbiIsICJpbXBvcnQgdHlwZSB7VXNlclJpZ2h0c30gZnJvbSAnfi9NYXJrUmlnaHRzL21vZHVsZXMvdHlwZXMnO1xuXG5jb25zdCBnZXRQYWdlUGVybWlzc2lvbnMgPSAoKTogVXNlclJpZ2h0cyB8IG51bGwgPT4ge1xuXHRjb25zdCB7d2dQYWdlTmFtZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cblx0Y29uc3QgcGFnZVBlcm1pc3Npb25zID0ge1xuXHRcdCdRaXV3ZW5fdGFsazrmnYPpmZDnlLPor7cv55Sz6K+35beh5p+l5Zue6YCA5p2DJzogJ3BhdHJvbGxlcicsXG5cdFx0J1FpdXdlbl90YWxrOuadg+mZkOeUs+ivty/nlLPor7flt6Hmn6XosYHlhY3mnYMnOiAnYXV0b3Jldmlld2VyJyxcblx0XHQnUWl1d2VuX3RhbGs65p2D6ZmQ55Sz6K+3L+eUs+ivt+ehruiupOeUqOaIt+adgyc6ICdjb25maXJtZWQnLFxuXHRcdCdRaXV3ZW5fdGFsazrmnYPpmZDnlLPor7cv55Sz6K+35aSn6YeP5raI5oGv5Y+R6YCB5p2DJzogJ21hc3NtZXNzYWdlLXNlbmRlcicsXG5cdFx0J1FpdXdlbl90YWxrOuadg+mZkOeUs+ivty/nlLPor7fmtLvliqjnu4Tnu4fmnYMnOiAnZXZlbnRzcG9uc29yJyxcblx0XHQnUWl1d2VuX3RhbGs65p2D6ZmQ55Sz6K+3L+eUs+ivt+WvvOWFpeadgyc6ICd0cmFuc3dpa2knLFxuXHRcdCdRaXV3ZW5fdGFsazrmnYPpmZDnlLPor7cv55Sz6K+35qih5p2/57yW6L6R5p2DJzogJ3RlbXBsYXRlZWRpdG9yJyxcblx0XHQnUWl1d2VuX3RhbGs65p2D6ZmQ55Sz6K+3L+eUs+ivt+acuuWZqOS6uuadg+mZkCc6ICdib3QnLFxuXHRcdCdRaXV3ZW5fdGFsazrmnYPpmZDnlLPor7cv55Sz6K+35a6e5ZCN5Yi26aqM6K+B6LGB5YWNJzogJ3JucnN2ZXJpZnktZXhlbXB0Jyxcblx0fSBhcyBjb25zdCBzYXRpc2ZpZXMgUGFydGlhbDxSZWNvcmQ8c3RyaW5nLCBVc2VyUmlnaHRzPj47XG5cblx0bGV0IHBlcm1pc3Npb246IFVzZXJSaWdodHMgfCBudWxsID0gbnVsbDtcblx0Zm9yIChjb25zdCBbcGFnZU5hbWUsIHBhZ2VQZXJtaXNzaW9uXSBvZiBPYmplY3QuZW50cmllcyhwYWdlUGVybWlzc2lvbnMpKSB7XG5cdFx0aWYgKHBhZ2VOYW1lID09PSB3Z1BhZ2VOYW1lKSB7XG5cdFx0XHRwZXJtaXNzaW9uID0gcGFnZVBlcm1pc3Npb247XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBwZXJtaXNzaW9uO1xufTtcblxuZXhwb3J0IHtnZXRQYWdlUGVybWlzc2lvbnN9O1xuIiwgIntcblx0XCJ1c2VyUmlnaHRzTWFuYWdlclN1bW1hcnlcIjogXCLvvIhbW01lZGlhV2lraTpHYWRnZXQtVXNlclJpZ2h0c01hbmFnZXIuanN8VXNlclJpZ2h0c01hbmFnZXJdXe+8iVwiLFxuXHRcInZlcnNpb25cIjogXCIyLjBcIlxufVxuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7aW5pdE13QXBpfSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG5jb25zdCBhcGk6IG13LkFwaSA9IGluaXRNd0FwaShgbW9yZWJpdHMuanM7IFVzZXJSaWdodHNNYW5hZ2VyLyR7T1BUSU9OUy52ZXJzaW9ufWApO1xuXG5leHBvcnQge2FwaX07XG4iLCAiaW1wb3J0IHR5cGUge1VzZXJSaWdodHN9IGZyb20gJ34vTWFya1JpZ2h0cy9tb2R1bGVzL3R5cGVzJztcblxuY29uc3QgZ2V0UGVybWlzc2lvbk5hbWVzID0gKHBlcm1pc3Npb246IFVzZXJSaWdodHMpOiBzdHJpbmcgfCBudWxsID0+IHtcblx0Y29uc3QgcGVybWlzc2lvbk5hbWVzID0ge1xuXHRcdHBhdHJvbGxlcjogJ+W3oeafpeWRmCcsXG5cdFx0YXV0b3Jldmlld2VyOiAn5beh5p+l6LGB5YWN6ICFJyxcblx0XHRjb25maXJtZWQ6ICfnoa7orqTnlKjmiLcnLFxuXHRcdCdtYXNzbWVzc2FnZS1zZW5kZXInOiAn5aSn6YeP5raI5oGv5Y+R6YCB6ICFJyxcblx0XHRldmVudHNwb25zb3I6ICfmtLvliqjnu4Tnu4fogIUnLFxuXHRcdHRyYW5zd2lraTogJ+WvvOWFpeiAhScsXG5cdFx0dGVtcGxhdGVlZGl0b3I6ICfmqKHmnb/nvJbovpHlkZgnLFxuXHRcdGJvdDogJ+acuuWZqOS6uicsXG5cdFx0J3JucnN2ZXJpZnktZXhlbXB0JzogJ+WunuWQjeWItumqjOivgeixgeWFjScsXG5cdH0gYXMgY29uc3Qgc2F0aXNmaWVzIFBhcnRpYWw8UmVjb3JkPFVzZXJSaWdodHMsIHN0cmluZz4+O1xuXG5cdGxldCBwZXJtaXNzaW9uTmFtZTogc3RyaW5nIHwgbnVsbCA9IG51bGw7XG5cdGZvciAoY29uc3QgW3JpZ2h0LCBuYW1lXSBvZiBPYmplY3QuZW50cmllcyhwZXJtaXNzaW9uTmFtZXMpKSB7XG5cdFx0aWYgKHBlcm1pc3Npb24gPT09IHJpZ2h0KSB7XG5cdFx0XHRwZXJtaXNzaW9uTmFtZSA9IG5hbWU7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBwZXJtaXNzaW9uTmFtZTtcbn07XG5cbmV4cG9ydCB7Z2V0UGVybWlzc2lvbk5hbWVzfTtcbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge1VzZXJSaWdodHN9IGZyb20gJ34vTWFya1JpZ2h0cy9tb2R1bGVzL3R5cGVzJztcbmltcG9ydCB7YXBpfSBmcm9tICcuL2FwaSc7XG5pbXBvcnQge2dldFBlcm1pc3Npb25OYW1lc30gZnJvbSAnLi9nZXRQZXJtaXNzaW9uTmFtZXMnO1xuXG5jb25zdCBhc3NpZ25QZXJtaXNzaW9uID0gKHVzZXJOYW1lOiBzdHJpbmcsIHBlcm1pc3Npb246IFVzZXJSaWdodHMsIHN1bW1hcnk6IHN0cmluZywgcmV2SWQ6IG51bWJlciwgZXhwaXJ5OiBzdHJpbmcpID0+IHtcblx0Y29uc3QgcGVybWFMaW5rID0gYFtbU3BlY2lhbDpQZXJtYUxpbmsvJHtyZXZJZH0jVXNlcjoke3VzZXJOYW1lfXzmnYPpmZDnlLPor7ddXWA7XG5cdGxldCBmdWxsU3VtbWFyeSA9IGArJHtnZXRQZXJtaXNzaW9uTmFtZXMocGVybWlzc2lvbil977ybJHtwZXJtYUxpbmt9YDtcblx0aWYgKHN1bW1hcnkgIT09ICcnKSB7XG5cdFx0ZnVsbFN1bW1hcnkgKz0gYO+8myR7c3VtbWFyeX1gO1xuXHR9XG5cdGZ1bGxTdW1tYXJ5ICs9IE9QVElPTlMudXNlclJpZ2h0c01hbmFnZXJTdW1tYXJ5O1xuXHRjb25zdCBwYXJhbXM6IEFwaVVzZXJyaWdodHNQYXJhbXMgPSB7XG5cdFx0YWN0aW9uOiAndXNlcnJpZ2h0cycsXG5cdFx0dXNlcjogdXNlck5hbWUucmVwbGFjZSgvIC9nLCAnXycpLFxuXHRcdHJlYXNvbjogZnVsbFN1bW1hcnksXG5cdFx0Ly8gQHRzLWV4cGVjdC1lcnJvciBUUzIzMjJcblx0XHRhZGQ6IFtwZXJtaXNzaW9uXSxcblx0XHRleHBpcnk6IGV4cGlyeSA9PT0gJycgPyAnaW5maW5pdHknIDogZXhwaXJ5LFxuXHR9O1xuXHRpZiAocGVybWlzc2lvbiA9PT0gJ3BhdHJvbGxlcicgJiYgZXhwaXJ5ID09PSAnaW5maW5pdGUnKSB7XG5cdFx0cGFyYW1zLnJlbW92ZSA9ICdhdXRvcmV2aWV3ZXInO1xuXHR9XG5cdHJldHVybiBhcGkucG9zdFdpdGhUb2tlbigndXNlcnJpZ2h0cycsIHBhcmFtcyk7XG59O1xuXG5leHBvcnQge2Fzc2lnblBlcm1pc3Npb259O1xuIiwgImltcG9ydCB0eXBlIHtVc2VyUmlnaHRzfSBmcm9tICd+L01hcmtSaWdodHMvbW9kdWxlcy90eXBlcyc7XG5cbmNvbnN0IGdldFBlcm1pc3Npb25UZW1wbGF0ZSA9IChwZXJtaXNzaW9uOiBVc2VyUmlnaHRzKTogc3RyaW5nIHwgbnVsbCA9PiB7XG5cdGNvbnN0IHBlcm1pc3Npb25UZW1wbGF0ZXMgPSB7XG5cdFx0cGF0cm9sbGVyOiAnUGF0cm9sIGdyYW50ZWQnLFxuXHRcdGF1dG9yZXZpZXdlcjogJ0F1dG9wYXRyb2wgZ3JhbnRlZCcsXG5cdFx0J21hc3NtZXNzYWdlLXNlbmRlcic6ICdNTVMgZ3JhbnRlZCcsXG5cdFx0dGVtcGxhdGVlZGl0b3I6ICdUZW1wbGF0ZSBlZGl0b3IgZ3JhbnRlZCcsXG5cdFx0dHJhbnN3aWtpOiAnVHJhbnN3aWtpIGdyYW50ZWQnLFxuXHR9IGFzIGNvbnN0IHNhdGlzZmllcyBQYXJ0aWFsPFJlY29yZDxVc2VyUmlnaHRzLCBzdHJpbmc+PjtcblxuXHRsZXQgdGVtcGxhdGU6IHN0cmluZyB8IG51bGwgPSBudWxsO1xuXHRmb3IgKGNvbnN0IFtwYWdlUGVybWlzc2lvbiwgdGVtcGxhdGVOYW1lXSBvZiBPYmplY3QuZW50cmllcyhwZXJtaXNzaW9uVGVtcGxhdGVzKSkge1xuXHRcdGlmIChwZXJtaXNzaW9uID09PSBwYWdlUGVybWlzc2lvbikge1xuXHRcdFx0dGVtcGxhdGUgPSB0ZW1wbGF0ZU5hbWU7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiB0ZW1wbGF0ZTtcbn07XG5cbmV4cG9ydCB7Z2V0UGVybWlzc2lvblRlbXBsYXRlfTtcbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge0FwaVJlc3BvbnNlfSBmcm9tICd0eXBlcy1tZWRpYXdpa2ktcmVub3ZhdGUvbXcvQXBpJztcbmltcG9ydCB7VXNlclJpZ2h0c30gZnJvbSAnfi9NYXJrUmlnaHRzL21vZHVsZXMvdHlwZXMnO1xuaW1wb3J0IHthcGl9IGZyb20gJy4vYXBpJztcbmltcG9ydCB7Z2V0UGVybWlzc2lvbk5hbWVzfSBmcm9tICcuL2dldFBlcm1pc3Npb25OYW1lcyc7XG5pbXBvcnQge2dldFBlcm1pc3Npb25UZW1wbGF0ZX0gZnJvbSAnLi9nZXRUZW1wbGF0ZXMnO1xuXG5jb25zdCBpc3N1ZVRlbXBsYXRlID0gKFxuXHR1c2VyTmFtZTogc3RyaW5nLFxuXHRwZXJtaXNzaW9uOiBVc2VyUmlnaHRzLFxuXHR3YXRjaDogYm9vbGVhbiB8ICd3YXRjaCcgfCAndW53YXRjaCdcbik6IEpRdWVyeS5Qcm9taXNlPEFwaVJlc3BvbnNlPiB8IHZvaWQgPT4ge1xuXHRjb25zdCBwZXJtaXNzaW9uVGVtcGxhdGUgPSBnZXRQZXJtaXNzaW9uVGVtcGxhdGUocGVybWlzc2lvbik7XG5cdGlmICghcGVybWlzc2lvblRlbXBsYXRlKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgcGVybWlzc2lvbk5hbWUgPSBnZXRQZXJtaXNzaW9uTmFtZXMocGVybWlzc2lvbik7XG5cdGNvbnN0IHRhbGtQYWdlID0gYFVzZXIgdGFsazoke3VzZXJOYW1lLnJlcGxhY2UoLyAvZywgJ18nKX1gO1xuXHRjb25zdCBwYXJhbXM6IEFwaUVkaXRQYWdlUGFyYW1zID0ge1xuXHRcdGFjdGlvbjogJ2VkaXQnLFxuXHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdHRpdGxlOiB0YWxrUGFnZSxcblx0XHRhcHBlbmR0ZXh0OiAnXFxuXFxue3snLmNvbmNhdCgnc3Vic3Q6JywgcGVybWlzc2lvblRlbXBsYXRlLCAnfX19JyksXG5cdFx0c3VtbWFyeTogYOagueaNruWFseivhuaOiOS6iCR7cGVybWlzc2lvbk5hbWV9JHtPUFRJT05TLnVzZXJSaWdodHNNYW5hZ2VyU3VtbWFyeX1gLFxuXHRcdHdhdGNobGlzdDogd2F0Y2ggPyAnd2F0Y2gnIDogJ3Vud2F0Y2gnLFxuXHR9O1xuXHRyZXR1cm4gYXBpLnBvc3RXaXRoRWRpdFRva2VuKHBhcmFtcyk7XG59O1xuXG5leHBvcnQge2lzc3VlVGVtcGxhdGV9O1xuIiwgIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnNhZmUtYXNzaWdubWVudCAqL1xuaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHthcGl9IGZyb20gJy4vYXBpJztcbmNvbnN0IHRhZ0xpbmUgPSBPUFRJT05TLnVzZXJSaWdodHNNYW5hZ2VyU3VtbWFyeTtcblxuY29uc3QgcXVlcnlSZXZpc2lvbnMgPSBhc3luYyAodGl0bGVzOiBzdHJpbmcgfCBzdHJpbmdbXSwgcnZzZWN0aW9uOiBzdHJpbmcpID0+IHtcblx0Y29uc3QgcGFyYW1zOiBBcGlRdWVyeVJldmlzaW9uc1BhcmFtcyA9IHtcblx0XHR0aXRsZXMsXG5cdFx0cnZzZWN0aW9uLFxuXHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0cHJvcDogJ3JldmlzaW9ucycsXG5cdFx0Y3VydGltZXN0YW1wOiB0cnVlLFxuXHRcdHJ2cHJvcDogWydjb250ZW50JywgJ3RpbWVzdGFtcCddLFxuXHR9O1xuXG5cdHJldHVybiBhd2FpdCBhcGkuZ2V0KHBhcmFtcyk7XG59O1xuXG5jb25zdCBtYXJrQXNEb25lID0gKHVzZXJOYW1lOiBzdHJpbmcsIGluZGV4OiBzdHJpbmcsIGNsb3NpbmdSZW1hcmtzOiBzdHJpbmcpID0+IHtcblx0Y29uc3Qge3dnUGFnZU5hbWV9ID0gbXcuY29uZmlnLmdldCgpO1xuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgdW5pY29ybi9wcmVmZXItcXVlcnktc2VsZWN0b3Jcblx0Y29uc3Qgc2VjdGlvbk5vZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcblx0XHRgVXNlcjoke3VzZXJOYW1lLnJlcGxhY2UoL1wiL2csICcuMjInKS5yZXBsYWNlKC8gL2csICdfJyl9JHtpbmRleCA/PyAnJ31gXG5cdCk7XG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW5zYWZlLWNhbGxcblx0Y29uc3QgWywgc2VjdGlvbk51bWJlcl0gPSAkKHNlY3Rpb25Ob2RlIGFzIEhUTUxFbGVtZW50KVxuXHRcdC5zaWJsaW5ncygnLm13LWVkaXRzZWN0aW9uJylcblx0XHQuZmluZCgnYTpub3QoLm13LWVkaXRzZWN0aW9uLXZpc3VhbGVkaXRvciknKVxuXHRcdC5wcm9wKCdocmVmJylcblx0XHQubWF0Y2goL3NlY3Rpb249KFxcZCspLyk7XG5cdGxldCBiYXNldGltZXN0YW1wOiBzdHJpbmc7XG5cdGxldCBjdXJ0aW1lc3RhbXA6IHN0cmluZztcblx0bGV0IGNvbnRlbnQ6IHN0cmluZztcblx0bGV0IHJldmlzaW9uO1xuXG5cdHJldHVybiBxdWVyeVJldmlzaW9ucyh3Z1BhZ2VOYW1lLCBgJHtzZWN0aW9uTnVtYmVyfWApXG5cdFx0LnRoZW4oKGRhdGEpID0+IHtcblx0XHRcdGlmICghZGF0YVsncXVlcnknXSB8fCAhZGF0YVsncXVlcnknXS5wYWdlcykge1xuXHRcdFx0XHRyZXR1cm4gJC5EZWZlcnJlZCgpLnJlamVjdCgndW5rbm93bicpO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBbcGFnZV0gPSBkYXRhWydxdWVyeSddLnBhZ2VzO1xuXG5cdFx0XHRpZiAoIXBhZ2UgfHwgcGFnZS5pbnZhbGlkKSB7XG5cdFx0XHRcdHJldHVybiAkLkRlZmVycmVkKCkucmVqZWN0KCdpbnZhbGlkdGl0bGUnKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKHBhZ2UubWlzc2luZykge1xuXHRcdFx0XHRyZXR1cm4gJC5EZWZlcnJlZCgpLnJlamVjdCgnbm9jcmVhdGUtbWlzc2luZycpO1xuXHRcdFx0fVxuXG5cdFx0XHRbcmV2aXNpb25dID0gcGFnZS5yZXZpc2lvbnM7XG5cdFx0XHRiYXNldGltZXN0YW1wID0gcmV2aXNpb24udGltZXN0YW1wO1xuXHRcdFx0Y3VydGltZXN0YW1wID0gZGF0YVsnY3VydGltZXN0YW1wJ107XG5cdFx0XHRjb250ZW50ID0gcmV2aXNpb24uY29udGVudDtcblx0XHRcdHJldHVybiAkLkRlZmVycmVkKCkucmVzb2x2ZSgpO1xuXHRcdH0pXG5cdFx0LnRoZW4oKCkgPT4ge1xuXHRcdFx0Y29udGVudCA9IGNvbnRlbnQudHJpbSgpO1xuXHRcdFx0Y29udGVudCA9IGNvbnRlbnQucmVwbGFjZSgvKDpcXHMqe3tTdGF0dXMpKFxcfC4qPyk/fX0vaSwgJyQxfCt9fScpO1xuXHRcdFx0Y29udGVudCArPSBjbG9zaW5nUmVtYXJrcztcblxuXHRcdFx0Y29uc3QgZWRpdFBhcmFtczogQXBpRWRpdFBhZ2VQYXJhbXMgPSB7XG5cdFx0XHRcdGFjdGlvbjogJ2VkaXQnLFxuXHRcdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdFx0XHR0aXRsZTogd2dQYWdlTmFtZSxcblx0XHRcdFx0c2VjdGlvbjogc2VjdGlvbk51bWJlcixcblx0XHRcdFx0dGV4dDogY29udGVudCxcblx0XHRcdFx0c3VtbWFyeTogYC8qIFVzZXI6JHt1c2VyTmFtZX0gKi8g5a6M5oiQJHt0YWdMaW5lfWAsXG5cdFx0XHRcdGJhc2V0aW1lc3RhbXAsXG5cdFx0XHRcdHN0YXJ0dGltZXN0YW1wOiBjdXJ0aW1lc3RhbXAsXG5cdFx0XHRcdG5vY3JlYXRlOiB0cnVlLFxuXHRcdFx0fTtcblx0XHRcdGlmIChtdy5jb25maWcuZ2V0KCd3Z1VzZXJOYW1lJykpIHtcblx0XHRcdFx0ZWRpdFBhcmFtcy5hc3NlcnQgPSAndXNlcic7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBhcGkucG9zdFdpdGhFZGl0VG9rZW4oZWRpdFBhcmFtcyk7XG5cdFx0fSk7XG59O1xuXG5leHBvcnQge21hcmtBc0RvbmV9O1xuIiwgImltcG9ydCB7QXBpUmVzcG9uc2V9IGZyb20gJ3R5cGVzLW1lZGlhd2lraS1yZW5vdmF0ZS9tdy9BcGknO1xuaW1wb3J0IHtVc2VyUmlnaHRzfSBmcm9tICd+L01hcmtSaWdodHMvbW9kdWxlcy90eXBlcyc7XG5pbXBvcnQge2FwaX0gZnJvbSAnLi9hcGknO1xuaW1wb3J0IHthc3NpZ25QZXJtaXNzaW9ufSBmcm9tICcuL2Fzc2lnblBlcm1pc3Npb24nO1xuaW1wb3J0IHtnZXRQZXJtaXNzaW9uTmFtZXN9IGZyb20gJy4vZ2V0UGVybWlzc2lvbk5hbWVzJztcbmltcG9ydCB7Z2V0UGVybWlzc2lvblRlbXBsYXRlfSBmcm9tICcuL2dldFRlbXBsYXRlcyc7XG5pbXBvcnQge2lzc3VlVGVtcGxhdGV9IGZyb20gJy4vaXNzdWVUZW1wbGF0ZSc7XG5pbXBvcnQge21hcmtBc0RvbmV9IGZyb20gJy4vbWFya0FzRG9uZSc7XG5cbmNvbnN0IHNob3dEaWFsb2cgPSBmdW5jdGlvbiBzaG93RGlhbG9nKHtcblx0JGJvZHksXG5cdHVzZXJOYW1lLFxuXHRwZXJtaXNzaW9uLFxuXHRpbmRleCxcbn06IHtcblx0JGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+O1xuXHR1c2VyTmFtZTogc3RyaW5nO1xuXHRwZXJtaXNzaW9uOiBVc2VyUmlnaHRzO1xuXHRpbmRleDogc3RyaW5nO1xufSkge1xuXHRjb25zdCB7d2dVTFN9ID0gd2luZG93O1xuXHRjb25zdCBwZXJtaXNzaW9uVGVtcGxhdGUgPSBnZXRQZXJtaXNzaW9uVGVtcGxhdGUocGVybWlzc2lvbik7XG5cdGNvbnN0IHBlcm1pc3Npb25OYW1lID0gZ2V0UGVybWlzc2lvbk5hbWVzKHBlcm1pc3Npb24pO1xuXG5cdGNsYXNzIERpYWxvZyBleHRlbmRzIE9PLnVpLlByb2Nlc3NEaWFsb2cge1xuXHRcdHByaXZhdGUgc3RhdGljIGVkaXRQYW5lbDogT08udWkuUGFuZWxMYXlvdXQ7XG5cdFx0cHJpdmF0ZSBzdGF0aWMgcmlnaHRMb2c6IE9PLnVpLkxhYmVsV2lkZ2V0O1xuXHRcdHByaXZhdGUgc3RhdGljIGVkaXRGaWVsZHNldDogT08udWkuRmllbGRzZXRMYXlvdXQ7XG5cdFx0cHJpdmF0ZSBzdGF0aWMgcmlnaHRzQ2hhbmdlU3VtbWFyeUlucHV0OiBPTy51aS5UZXh0SW5wdXRXaWRnZXQ7XG5cdFx0cHJpdmF0ZSBzdGF0aWMgZXhwaXJ5SW5wdXQ6IE9PLnVpLldpZGdldDtcblx0XHRwcml2YXRlIHN0YXRpYyBjbG9zaW5nUmVtYXJrc0lucHV0OiBPTy51aS5UZXh0SW5wdXRXaWRnZXQ7XG5cdFx0cHJpdmF0ZSBzdGF0aWMgd2F0Y2hUYWxrUGFnZUNoZWNrYm94OiBPTy51aS5DaGVja2JveElucHV0V2lkZ2V0O1xuXHRcdHByaXZhdGUgc3RhdGljIHN1Ym1pdFBhbmVsOiBPTy51aS5QYW5lbExheW91dDtcblx0XHRwcml2YXRlIHN0YXRpYyBzdWJtaXRGaWVsZHNldDogT08udWkuRmllbGRzZXRMYXlvdXQ7XG5cdFx0cHJpdmF0ZSBzdGF0aWMgc3RhY2tMYXlvdXQ6IE9PLnVpLlN0YWNrTGF5b3V0O1xuXHRcdHByaXZhdGUgJGJvZHk6IEpRdWVyeSB8IHVuZGVmaW5lZDtcblxuXHRcdHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcblx0XHRcdHN1cGVyKHtcblx0XHRcdFx0c2l6ZTogJ21lZGl1bScsXG5cdFx0XHR9KTtcblx0XHR9XG5cdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNsYXNzLW1ldGhvZHMtdXNlLXRoaXNcblx0XHRwdWJsaWMgb3ZlcnJpZGUgZ2V0Qm9keUhlaWdodCgpIHtcblx0XHRcdHJldHVybiAyNTU7XG5cdFx0fVxuXHRcdHB1YmxpYyBvdmVycmlkZSBpbml0aWFsaXplKCkge1xuXHRcdFx0c3VwZXIuaW5pdGlhbGl6ZSgpO1xuXHRcdFx0RGlhbG9nLmVkaXRQYW5lbCA9IG5ldyBPTy51aS5QYW5lbExheW91dCh7XG5cdFx0XHRcdGV4cGFuZGVkOiBmYWxzZSxcblx0XHRcdH0pO1xuXHRcdFx0Y29uc3QgcmlnaHRMb2dXYXBwZXIgPSAkKCc8c3Bhbj4nKTtcblx0XHRcdGNvbnN0IHVybCA9IG13LnV0aWwuZ2V0VXJsKCdTcGVjaWFsOkxvZy9yaWdodHMnLCB7dHlwZTogJ3JpZ2h0cycsIHBhZ2U6IGBVc2VyOiR7dXNlck5hbWV9YH0pO1xuXHRcdFx0JCgnPGE+Jylcblx0XHRcdFx0LnRleHQod2dVTFMoJ+acgOi/keadg+mZkOaXpeW/lycsICfmnIDov5HmrIrpmZDml6XoqownKSlcblx0XHRcdFx0LmF0dHIoe2hyZWY6IHVybCwgdGFyZ2V0OiAnX2JsYW5rJ30pXG5cdFx0XHRcdC5hcHBlbmRUbyhyaWdodExvZ1dhcHBlcik7XG5cdFx0XHRyaWdodExvZ1dhcHBlci5hcHBlbmQoJ++8micpO1xuXHRcdFx0Y29uc3QgcmlnaHRMb2dUZXh0ID0gJCgnPHNwYW4+JykudGV4dCh3Z1VMUygn6I635Y+W5LitJywgJ+WPluW+l+S4rScpKS5hcHBlbmRUbyhyaWdodExvZ1dhcHBlcik7XG5cdFx0XHREaWFsb2cucmlnaHRMb2cgPSBuZXcgT08udWkuTGFiZWxXaWRnZXQoe1xuXHRcdFx0XHRsYWJlbDogcmlnaHRMb2dXYXBwZXIsXG5cdFx0XHR9KTtcblx0XHRcdERpYWxvZy5lZGl0UGFuZWwuJGVsZW1lbnQuYXBwZW5kKERpYWxvZy5yaWdodExvZy4kZWxlbWVudCk7XG5cblx0XHRcdGNvbnN0IHF1ZXJ5TG9nRXZlbnRzUGFyYW1zOiBBcGlRdWVyeUxvZ0V2ZW50c1BhcmFtcyA9IHtcblx0XHRcdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdFx0bGlzdDogJ2xvZ2V2ZW50cycsXG5cdFx0XHRcdGxlYWN0aW9uOiAncmlnaHRzL3JpZ2h0cycsXG5cdFx0XHRcdGxldGl0bGU6IGBVc2VyOiR7dXNlck5hbWV9YCxcblx0XHRcdFx0bGVsaW1pdDogMSxcblx0XHRcdH07XG5cblx0XHRcdHZvaWQgYXBpLmdldChxdWVyeUxvZ0V2ZW50c1BhcmFtcykuZG9uZSgoZGF0YSkgPT4ge1xuXHRcdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVuc2FmZS1hc3NpZ25tZW50XG5cdFx0XHRcdGNvbnN0IGxvZ3MgPSBkYXRhWydxdWVyeSddLmxvZ2V2ZW50cztcblx0XHRcdFx0aWYgKGxvZ3MubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRcdFx0cmlnaHRMb2dUZXh0LnRleHQod2dVTFMoJ+ayoeacieS7u+S9leaXpeW/lycsICfmspLmnInku7vkvZXml6XoqownKSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Ly8gQHRzLWV4cGVjdC1lcnJvciBUUzIzMDRcblx0XHRcdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVuc2FmZS1hc3NpZ25tZW50LCBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW5zYWZlLWNhbGwsIG5ldy1jYXBcblx0XHRcdFx0XHRjb25zdCB0aW1lc3RhbXAgPSBuZXcgTW9yZWJpdHMuZGF0ZShsb2dzWzBdLnRpbWVzdGFtcCkuY2FsZW5kYXIoKTtcblx0XHRcdFx0XHRjb25zdCByaWdodHMgPSAobG9nc1swXS5wYXJhbXMubmV3Z3JvdXBzIGFzIHN0cmluZ1tdKS5qb2luKCfjgIEnKSB8fCB3Z1VMUygn77yI5peg77yJJywgJ++8iOeEoe+8iScpO1xuXHRcdFx0XHRcdHJpZ2h0TG9nVGV4dC50ZXh0KFxuXHRcdFx0XHRcdFx0YCR7dGltZXN0YW1wfSAke2xvZ3NbMF0udXNlcn0ke3dnVUxTKCflsIbnlKjmiLfnu4TmlLnkuLonLCAn5bCH5L2/55So6ICF576k57WE5pS554K6Jyl9JHtyaWdodHN9YFxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXG5cdFx0XHREaWFsb2cuZWRpdEZpZWxkc2V0ID0gbmV3IE9PLnVpLkZpZWxkc2V0TGF5b3V0KHtcblx0XHRcdFx0Y2xhc3NlczogWydjb250YWluZXInXSxcblx0XHRcdH0pO1xuXHRcdFx0RGlhbG9nLmVkaXRQYW5lbC4kZWxlbWVudC5hcHBlbmQoRGlhbG9nLmVkaXRGaWVsZHNldC4kZWxlbWVudCk7XG5cblx0XHRcdERpYWxvZy5yaWdodHNDaGFuZ2VTdW1tYXJ5SW5wdXQgPSBuZXcgT08udWkuVGV4dElucHV0V2lkZ2V0KHtcblx0XHRcdFx0dmFsdWU6ICcnLFxuXHRcdFx0XHRwbGFjZWhvbGRlcjogJ+WPr+eVmeepuicsXG5cdFx0XHR9KTtcblx0XHRcdC8vIEB0cy1leHBlY3QtZXJyb3IgVFMyMzM5XG5cdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVuc2FmZS1jYWxsXG5cdFx0XHREaWFsb2cuZXhwaXJ5SW5wdXQgPSBuZXcgbXcud2lkZ2V0cy5FeHBpcnlXaWRnZXQoe1xuXHRcdFx0XHQkb3ZlcmxheTogJGJvZHkuZmluZCgnLm9vLXVpLXdpbmRvdycpLFxuXHRcdFx0XHQvLyBAdHMtZXhwZWN0LWVycm9yIFRTMjMzOVxuXHRcdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVuc2FmZS1hc3NpZ25tZW50XG5cdFx0XHRcdFJlbGF0aXZlSW5wdXRDbGFzczogbXcud2lkZ2V0cy5TZWxlY3RXaXRoSW5wdXRXaWRnZXQsXG5cdFx0XHRcdHJlbGF0aXZlSW5wdXQ6IHtcblx0XHRcdFx0XHRvcjogdHJ1ZSxcblx0XHRcdFx0XHRkcm9wZG93bmlucHV0OiB7XG5cdFx0XHRcdFx0XHRvcHRpb25zOiBbXG5cdFx0XHRcdFx0XHRcdHtkYXRhOiAnMSBkYXknLCBsYWJlbDogJzHlpKknfSxcblx0XHRcdFx0XHRcdFx0e2RhdGE6ICcxIHdlZWsnLCBsYWJlbDogd2dVTFMoJzHlkagnLCAnMemAsScpfSxcblx0XHRcdFx0XHRcdFx0e2RhdGE6ICcxIG1vbnRoJywgbGFiZWw6IHdnVUxTKCcx5Liq5pyIJywgJzHlgIvmnIgnKX0sXG5cdFx0XHRcdFx0XHRcdHtkYXRhOiAnMyBtb250aHMnLCBsYWJlbDogd2dVTFMoJzPkuKrmnIgnLCAnM+WAi+aciCcpfSxcblx0XHRcdFx0XHRcdFx0e2RhdGE6ICc2IG1vbnRocycsIGxhYmVsOiB3Z1VMUygnNuS4quaciCcsICc25YCL5pyIJyl9LFxuXHRcdFx0XHRcdFx0XHR7ZGF0YTogJzEgeWVhcicsIGxhYmVsOiAnMeW5tCd9LFxuXHRcdFx0XHRcdFx0XHR7ZGF0YTogJ2luZmluaXRlJywgbGFiZWw6IHdnVUxTKCfmsqHmnInmnJ/pmZAnLCAn5rKS5pyJ5pyf6ZmQJyl9LFxuXHRcdFx0XHRcdFx0XHR7ZGF0YTogJ290aGVyJywgbGFiZWw6IHdnVUxTKCflhbbku5bml7bpl7QnLCAn5YW25LuW5pmC6ZaTJyl9LFxuXHRcdFx0XHRcdFx0XSxcblx0XHRcdFx0XHRcdHZhbHVlOiAnaW5maW5pdGUnLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0dGV4dGlucHV0OiB7XG5cdFx0XHRcdFx0XHRyZXF1aXJlZDogdHJ1ZSxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHR9LFxuXHRcdFx0fSkgYXMgT08udWkuV2lkZ2V0O1xuXHRcdFx0RGlhbG9nLmNsb3NpbmdSZW1hcmtzSW5wdXQgPSBuZXcgT08udWkuVGV4dElucHV0V2lkZ2V0KHtcblx0XHRcdFx0dmFsdWU6ICd7e2RvbmV9fS0tfn5+ficsXG5cdFx0XHR9KTtcblx0XHRcdERpYWxvZy53YXRjaFRhbGtQYWdlQ2hlY2tib3ggPSBuZXcgT08udWkuQ2hlY2tib3hJbnB1dFdpZGdldCh7XG5cdFx0XHRcdHNlbGVjdGVkOiBmYWxzZSxcblx0XHRcdH0pO1xuXHRcdFx0Y29uc3QgZm9ybUVsZW1lbnRzID0gW1xuXHRcdFx0XHRuZXcgT08udWkuRmllbGRMYXlvdXQoRGlhbG9nLnJpZ2h0c0NoYW5nZVN1bW1hcnlJbnB1dCwge1xuXHRcdFx0XHRcdGxhYmVsOiB3Z1VMUygn5o6I5p2D5Y6f5ZugJywgJ+aOiOasiuWOn+WboCcpLFxuXHRcdFx0XHR9KSxcblx0XHRcdFx0bmV3IE9PLnVpLkZpZWxkTGF5b3V0KERpYWxvZy5leHBpcnlJbnB1dCwge1xuXHRcdFx0XHRcdGxhYmVsOiB3Z1VMUygn57uT5p2f5pe26Ze0JywgJ+e1kOadn+aZgumWkycpLFxuXHRcdFx0XHR9KSxcblx0XHRcdFx0bmV3IE9PLnVpLkZpZWxkTGF5b3V0KERpYWxvZy5jbG9zaW5nUmVtYXJrc0lucHV0LCB7XG5cdFx0XHRcdFx0bGFiZWw6IHdnVUxTKCflhbPpl63or7fmsYLnlZnoqIAnLCAn6Zec6ZaJ6KuL5rGC55WZ6KiAJyksXG5cdFx0XHRcdH0pLFxuXHRcdFx0XTtcblx0XHRcdGlmIChwZXJtaXNzaW9uVGVtcGxhdGUpIHtcblx0XHRcdFx0Zm9ybUVsZW1lbnRzLnB1c2goXG5cdFx0XHRcdFx0bmV3IE9PLnVpLkZpZWxkTGF5b3V0KERpYWxvZy53YXRjaFRhbGtQYWdlQ2hlY2tib3gsIHtcblx0XHRcdFx0XHRcdGxhYmVsOiB3Z1VMUygn55uR6KeG55So5oi36K6o6K666aG1JywgJ+ebo+imluS9v+eUqOiAheiojuirlumggScpLFxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0XHREaWFsb2cuZWRpdEZpZWxkc2V0LmFkZEl0ZW1zKGZvcm1FbGVtZW50cyk7XG5cdFx0XHREaWFsb2cuc3VibWl0UGFuZWwgPSBuZXcgT08udWkuUGFuZWxMYXlvdXQoe1xuXHRcdFx0XHRleHBhbmRlZDogZmFsc2UsXG5cdFx0XHR9KTtcblx0XHRcdERpYWxvZy5zdWJtaXRGaWVsZHNldCA9IG5ldyBPTy51aS5GaWVsZHNldExheW91dCh7XG5cdFx0XHRcdGNsYXNzZXM6IFsnY29udGFpbmVyJ10sXG5cdFx0XHR9KTtcblx0XHRcdERpYWxvZy5zdWJtaXRQYW5lbC4kZWxlbWVudC5hcHBlbmQoRGlhbG9nLnN1Ym1pdEZpZWxkc2V0LiRlbGVtZW50KTtcblx0XHRcdERpYWxvZy5zdWJtaXRQYW5lbC4kZWxlbWVudC5hcHBlbmQoRGlhbG9nLnN1Ym1pdEZpZWxkc2V0LiRlbGVtZW50KTtcblx0XHRcdERpYWxvZy5zdGFja0xheW91dCA9IG5ldyBPTy51aS5TdGFja0xheW91dCh7XG5cdFx0XHRcdGl0ZW1zOiBbRGlhbG9nLmVkaXRQYW5lbCwgRGlhbG9nLnN1Ym1pdFBhbmVsXSxcblx0XHRcdFx0cGFkZGVkOiB0cnVlLFxuXHRcdFx0fSk7XG5cdFx0XHQodGhpcy4kYm9keSBhcyBKUXVlcnkpLmFwcGVuZChEaWFsb2cuc3RhY2tMYXlvdXQuJGVsZW1lbnQpO1xuXG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9XG5cdFx0cHVibGljIHN0YXRpYyBvblN1Ym1pdCgpIHtcblx0XHRcdHZvaWQgbWFya0FzRG9uZSh1c2VyTmFtZSwgaW5kZXgsIGBcXG46JHtEaWFsb2cuY2xvc2luZ1JlbWFya3NJbnB1dC5nZXRWYWx1ZSgpfWApLnRoZW4oKGRhdGEpID0+IHtcblx0XHRcdFx0dm9pZCBhc3NpZ25QZXJtaXNzaW9uKFxuXHRcdFx0XHRcdHVzZXJOYW1lLFxuXHRcdFx0XHRcdHBlcm1pc3Npb24sXG5cdFx0XHRcdFx0RGlhbG9nLnJpZ2h0c0NoYW5nZVN1bW1hcnlJbnB1dC5nZXRWYWx1ZSgpLFxuXHRcdFx0XHRcdE51bWJlci5wYXJzZUludChkYXRhWydlZGl0J10ubmV3cmV2aWQgYXMgc3RyaW5nLCAxMCksXG5cdFx0XHRcdFx0KERpYWxvZy5leHBpcnlJbnB1dCBhcyBPTy51aS5UZXh0SW5wdXRXaWRnZXQpLmdldFZhbHVlKClcblx0XHRcdFx0KVxuXHRcdFx0XHRcdC50aGVuKCgpID0+IHtcblx0XHRcdFx0XHRcdGlmIChwZXJtaXNzaW9uVGVtcGxhdGUpIHtcblx0XHRcdFx0XHRcdFx0dm9pZCAoaXNzdWVUZW1wbGF0ZShcblx0XHRcdFx0XHRcdFx0XHR1c2VyTmFtZSxcblx0XHRcdFx0XHRcdFx0XHRwZXJtaXNzaW9uLFxuXHRcdFx0XHRcdFx0XHRcdERpYWxvZy53YXRjaFRhbGtQYWdlQ2hlY2tib3guaXNTZWxlY3RlZCgpXG5cdFx0XHRcdFx0XHRcdCkgYXMgSlF1ZXJ5LlByb21pc2U8QXBpUmVzcG9uc2U+KTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdC50aGVuKCgpID0+IHtcblx0XHRcdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRsb2NhdGlvbi5yZWxvYWQoKTtcblx0XHRcdFx0XHRcdH0sIDEwMDApO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cblx0XHRcdERpYWxvZy5zdGFja0xheW91dC5zZXRJdGVtKERpYWxvZy5zdWJtaXRQYW5lbCk7XG5cdFx0fVxuXHRcdHN0YXRpYyBwdXNoUGVuZGluZygpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcignTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC4nKTtcblx0XHR9XG5cdFx0c3RhdGljIHBvcFBlbmRpbmcoKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ01ldGhvZCBub3QgaW1wbGVtZW50ZWQuJyk7XG5cdFx0fVxuXG5cdFx0cHVibGljIG92ZXJyaWRlIGdldEFjdGlvblByb2Nlc3MoYWN0aW9uPzogc3RyaW5nKTogT08udWkuUHJvY2VzcyB7XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRzdXBlclxuXHRcdFx0XHRcdC5nZXRBY3Rpb25Qcm9jZXNzKGFjdGlvbilcblx0XHRcdFx0XHQvLyBAdHMtZXhwZWN0LWVycm9yIFRTNzAzMFxuXHRcdFx0XHRcdC5uZXh0KGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRcdGlmIChhY3Rpb24gPT09ICdzdWJtaXQnKSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBEaWFsb2cub25TdWJtaXQoKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdHJldHVybiBEaWFsb2cuc3VwZXIucHJvdG90eXBlLmdldEFjdGlvblByb2Nlc3MuY2FsbCh0aGlzLCBhY3Rpb24pO1xuXHRcdFx0XHRcdH0sIHRoaXMpXG5cdFx0XHQpO1xuXHRcdH1cblx0fVxuXHREaWFsb2cuc3RhdGljID0ge1xuXHRcdC4uLk9PLnVpLlByb2Nlc3NEaWFsb2cuc3RhdGljLFxuXHR9O1xuXHREaWFsb2cuc3RhdGljLm5hbWUgPSAndXNlci1yaWdodHMtbWFuYWdlcic7XG5cdERpYWxvZy5zdGF0aWMudGl0bGUgPSBg5o6I5LqIJHtwZXJtaXNzaW9uTmFtZX0ke3dnVUxTKCfnu5knLCAn57WmJyl9JHt1c2VyTmFtZX1gO1xuXHREaWFsb2cuc3RhdGljLmFjdGlvbnMgPSBbXG5cdFx0e2FjdGlvbjogJ3N1Ym1pdCcsIGxhYmVsOiB3Z1VMUygn5o6I5p2DJywgJ+aOiOasiicpLCBmbGFnczogWydwcmltYXJ5JywgJ3Byb2dyZXNzaXZlJ119LFxuXHRcdHtsYWJlbDogJ+WPlua2iCcsIGZsYWdzOiAnc2FmZSd9LFxuXHRdO1xuXG5cdGNvbnN0IGRpYWxvZyA9IG5ldyBEaWFsb2coKTtcblxuXHRjb25zdCB3aW5kb3dNYW5hZ2VyID0gbmV3IE9PLnVpLldpbmRvd01hbmFnZXIoKTtcblx0JCgnYm9keScpLmFwcGVuZCh3aW5kb3dNYW5hZ2VyLiRlbGVtZW50KTtcblx0d2luZG93TWFuYWdlci5hZGRXaW5kb3dzKFtkaWFsb2ddKTtcblx0dm9pZCB3aW5kb3dNYW5hZ2VyLm9wZW5XaW5kb3coZGlhbG9nKTtcbn07XG5cbmV4cG9ydCB7c2hvd0RpYWxvZ307XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxxQkFBc0JDLFFBQUEsaUJBQUE7O0FDRXRCLElBQU1DLHFCQUFxQkEsTUFBeUI7QUFDbkQsUUFBTTtJQUFDQztFQUFVLElBQUlDLEdBQUdDLE9BQU9DLElBQUk7QUFFbkMsUUFBTUMsa0JBQWtCO0lBQ3ZCLDRCQUE0QjtJQUM1Qiw0QkFBNEI7SUFDNUIsNEJBQTRCO0lBQzVCLDhCQUE4QjtJQUM5Qiw0QkFBNEI7SUFDNUIsMEJBQTBCO0lBQzFCLDRCQUE0QjtJQUM1Qiw0QkFBNEI7SUFDNUIsOEJBQThCO0VBQy9CO0FBRUEsTUFBSUMsYUFBZ0M7QUFDcEMsV0FBQUMsS0FBQSxHQUFBQyxrQkFBeUNDLE9BQU9DLFFBQVFMLGVBQWUsR0FBQUUsS0FBQUMsZ0JBQUFHLFFBQUFKLE1BQUc7QUFBMUUsVUFBVyxDQUFDSyxVQUFVQyxjQUFjLElBQUFMLGdCQUFBRCxFQUFBO0FBQ25DLFFBQUlLLGFBQWFYLFlBQVk7QUFDNUJLLG1CQUFhTztJQUNkLE9BQU87QUFDTjtJQUNEO0VBQ0Q7QUFFQSxTQUFPUDtBQUNSOztBQzFCQyxJQUFBUSwyQkFBNEI7QUFDNUIsSUFBQUMsVUFBVzs7QUNEWixJQUFBQyxvQkFBd0JqQixRQUFBLGlCQUFBO0FBRXhCLElBQU1rQixPQUFBLEdBQWNELGtCQUFBRSxXQUFBLGtDQUFBQyxPQUFvREosT0FBTyxDQUFFOztBQ0RqRixJQUFNSyxxQkFBc0JkLGdCQUEwQztBQUNyRSxRQUFNZSxrQkFBa0I7SUFDdkJDLFdBQVc7SUFDWEMsY0FBYztJQUNkQyxXQUFXO0lBQ1gsc0JBQXNCO0lBQ3RCQyxjQUFjO0lBQ2RDLFdBQVc7SUFDWEMsZ0JBQWdCO0lBQ2hCQyxLQUFLO0lBQ0wscUJBQXFCO0VBQ3RCO0FBRUEsTUFBSUMsaUJBQWdDO0FBQ3BDLFdBQUFDLE1BQUEsR0FBQUMsbUJBQTRCdEIsT0FBT0MsUUFBUVcsZUFBZSxHQUFBUyxNQUFBQyxpQkFBQXBCLFFBQUFtQixPQUFHO0FBQTdELFVBQVcsQ0FBQ0UsT0FBT0MsSUFBSSxJQUFBRixpQkFBQUQsR0FBQTtBQUN0QixRQUFJeEIsZUFBZTBCLE9BQU87QUFDekJILHVCQUFpQkk7SUFDbEIsT0FBTztBQUNOO0lBQ0Q7RUFDRDtBQUVBLFNBQU9KO0FBQ1I7O0FDcEJBLElBQU1LLG1CQUFtQkEsQ0FBQ0MsVUFBa0I3QixZQUF3QjhCLFNBQWlCQyxPQUFlQyxXQUFtQjtBQUN0SCxRQUFNQyxZQUFBLHVCQUFBcEIsT0FBbUNrQixPQUFLLFFBQUEsRUFBQWxCLE9BQVNnQixVQUFRLFNBQUE7QUFDL0QsTUFBSUssY0FBQSxJQUFBckIsT0FBa0JDLG1CQUFtQmQsVUFBVSxHQUFDLEdBQUEsRUFBQWEsT0FBSW9CLFNBQVM7QUFDakUsTUFBSUgsWUFBWSxJQUFJO0FBQ25CSSxtQkFBQSxJQUFBckIsT0FBbUJpQixPQUFPO0VBQzNCO0FBQ0FJLGlCQUF1QjFCO0FBQ3ZCLFFBQU0yQixTQUE4QjtJQUNuQ0MsUUFBUTtJQUNSQyxNQUFNUixTQUFTUyxRQUFRLE1BQU0sR0FBRztJQUNoQ0MsUUFBUUw7O0lBRVJNLEtBQUssQ0FBQ3hDLFVBQVU7SUFDaEJnQyxRQUFRQSxXQUFXLEtBQUssYUFBYUE7RUFDdEM7QUFDQSxNQUFJaEMsZUFBZSxlQUFlZ0MsV0FBVyxZQUFZO0FBQ3hERyxXQUFPTSxTQUFTO0VBQ2pCO0FBQ0EsU0FBTzlCLElBQUkrQixjQUFjLGNBQWNQLE1BQU07QUFDOUM7O0FDdEJBLElBQU1RLHdCQUF5QjNDLGdCQUEwQztBQUN4RSxRQUFNNEMsc0JBQXNCO0lBQzNCNUIsV0FBVztJQUNYQyxjQUFjO0lBQ2Qsc0JBQXNCO0lBQ3RCSSxnQkFBZ0I7SUFDaEJELFdBQVc7RUFDWjtBQUVBLE1BQUl5QixXQUEwQjtBQUM5QixXQUFBQyxNQUFBLEdBQUFDLG1CQUE2QzVDLE9BQU9DLFFBQVF3QyxtQkFBbUIsR0FBQUUsTUFBQUMsaUJBQUExQyxRQUFBeUMsT0FBRztBQUFsRixVQUFXLENBQUN2QyxnQkFBZ0J5QyxZQUFZLElBQUFELGlCQUFBRCxHQUFBO0FBQ3ZDLFFBQUk5QyxlQUFlTyxnQkFBZ0I7QUFDbENzQyxpQkFBV0c7SUFDWixPQUFPO0FBQ047SUFDRDtFQUNEO0FBRUEsU0FBT0g7QUFDUjs7QUNkQSxJQUFNSSxnQkFBZ0JBLENBQ3JCcEIsVUFDQTdCLFlBQ0FrRCxVQUN3QztBQUN4QyxRQUFNQyxxQkFBcUJSLHNCQUFzQjNDLFVBQVU7QUFDM0QsTUFBSSxDQUFDbUQsb0JBQW9CO0FBQ3hCO0VBQ0Q7QUFFQSxRQUFNNUIsaUJBQWlCVCxtQkFBbUJkLFVBQVU7QUFDcEQsUUFBTW9ELFdBQUEsYUFBQXZDLE9BQXdCZ0IsU0FBU1MsUUFBUSxNQUFNLEdBQUcsQ0FBQztBQUN6RCxRQUFNSCxTQUE0QjtJQUNqQ0MsUUFBUTtJQUNSaUIsUUFBUTtJQUNSQyxPQUFPRjtJQUNQRyxZQUFZLFNBQVMxQyxPQUFPLFVBQVVzQyxvQkFBb0IsS0FBSztJQUMvRHJCLFNBQUEsU0FBQWpCLE9BQWtCVSxjQUFjLEVBQUFWLE9BQVdMLHdCQUF3QjtJQUNuRWdELFdBQVdOLFFBQVEsVUFBVTtFQUM5QjtBQUNBLFNBQU92QyxJQUFJOEMsa0JBQWtCdEIsTUFBTTtBQUNwQzs7QUN6QkEsSUFBTXVCLFVBQWtCbEQ7QUFFeEIsSUFBTW1ELGlCQUFBLDJCQUFBO0FBQUEsTUFBQUMsT0FBQUMsa0JBQWlCLFdBQU9DLFFBQTJCQyxXQUFzQjtBQUM5RSxVQUFNNUIsU0FBa0M7TUFDdkMyQjtNQUNBQztNQUNBM0IsUUFBUTtNQUNSaUIsUUFBUTtNQUNSVyxlQUFlO01BQ2ZDLE1BQU07TUFDTkMsY0FBYztNQUNkQyxRQUFRLENBQUMsV0FBVyxXQUFXO0lBQ2hDO0FBRUEsV0FBQSxNQUFheEQsSUFBSWIsSUFBSXFDLE1BQU07RUFDNUIsQ0FBQTtBQUFBLFNBQUEsU0FiTXdCLGdCQUFBUyxJQUFBQyxLQUFBO0FBQUEsV0FBQVQsS0FBQVUsTUFBQSxNQUFBQyxTQUFBO0VBQUE7QUFBQSxFQUFBO0FBZU4sSUFBTUMsYUFBYUEsQ0FBQzNDLFVBQWtCNEMsT0FBZUMsbUJBQTJCO0FBQy9FLFFBQU07SUFBQy9FO0VBQVUsSUFBSUMsR0FBR0MsT0FBT0MsSUFBSTtBQUVuQyxRQUFNNkUsY0FBY0MsU0FBU0MsZUFBQSxRQUFBaEUsT0FDcEJnQixTQUFTUyxRQUFRLE1BQU0sS0FBSyxFQUFFQSxRQUFRLE1BQU0sR0FBRyxDQUFDLEVBQUF6QixPQUFHNEQsVUFBQSxRQUFBQSxVQUFBLFNBQUFBLFFBQVMsRUFBRSxDQUN2RTtBQUVBLFFBQU0sQ0FBQSxFQUFHSyxhQUFhLElBQUlDLEVBQUVKLFdBQTBCLEVBQ3BESyxTQUFTLGlCQUFpQixFQUMxQkMsS0FBSyxxQ0FBcUMsRUFDMUNoQixLQUFLLE1BQU0sRUFDWGlCLE1BQU0sZUFBZTtBQUN2QixNQUFJQztBQUNKLE1BQUlqQjtBQUNKLE1BQUlrQjtBQUNKLE1BQUlDO0FBRUosU0FBTzFCLGVBQWVoRSxZQUFBLEdBQUFrQixPQUFlaUUsYUFBYSxDQUFFLEVBQ2xEUSxLQUFNQyxVQUFTO0FBQ2YsUUFBSSxDQUFDQSxLQUFLLE9BQU8sS0FBSyxDQUFDQSxLQUFLLE9BQU8sRUFBRUMsT0FBTztBQUMzQyxhQUFPVCxFQUFFVSxTQUFTLEVBQUVDLE9BQU8sU0FBUztJQUNyQztBQUVBLFVBQU0sQ0FBQ0MsSUFBSSxJQUFJSixLQUFLLE9BQU8sRUFBRUM7QUFFN0IsUUFBSSxDQUFDRyxRQUFRQSxLQUFLQyxTQUFTO0FBQzFCLGFBQU9iLEVBQUVVLFNBQVMsRUFBRUMsT0FBTyxjQUFjO0lBQzFDO0FBRUEsUUFBSUMsS0FBS0UsU0FBUztBQUNqQixhQUFPZCxFQUFFVSxTQUFTLEVBQUVDLE9BQU8sa0JBQWtCO0lBQzlDO0FBRUEsS0FBQ0wsUUFBUSxJQUFJTSxLQUFLRztBQUNsQlgsb0JBQWdCRSxTQUFTVTtBQUN6QjdCLG1CQUFlcUIsS0FBSyxjQUFjO0FBQ2xDSCxjQUFVQyxTQUFTRDtBQUNuQixXQUFPTCxFQUFFVSxTQUFTLEVBQUVPLFFBQVE7RUFDN0IsQ0FBQyxFQUNBVixLQUFLLE1BQU07QUFDWEYsY0FBVUEsUUFBUWEsS0FBSztBQUN2QmIsY0FBVUEsUUFBUTlDLFFBQVEsNkJBQTZCLFFBQVE7QUFDL0Q4QyxlQUFXVjtBQUVYLFVBQU13QixhQUFnQztNQUNyQzlELFFBQVE7TUFDUmlCLFFBQVE7TUFDUlcsZUFBZTtNQUNmVixPQUFPM0Q7TUFDUHdHLFNBQVNyQjtNQUNUc0IsTUFBTWhCO01BQ050RCxTQUFBLFdBQUFqQixPQUFvQmdCLFVBQVEsUUFBQSxFQUFBaEIsT0FBUzZDLE9BQU87TUFDNUN5QjtNQUNBa0IsZ0JBQWdCbkM7TUFDaEJvQyxVQUFVO0lBQ1g7QUFDQSxRQUFJMUcsR0FBR0MsT0FBT0MsSUFBSSxZQUFZLEdBQUc7QUFDaENvRyxpQkFBV0ssU0FBUztJQUNyQjtBQUVBLFdBQU81RixJQUFJOEMsa0JBQWtCeUMsVUFBVTtFQUN4QyxDQUFDO0FBQ0g7O0FDekVBLElBQU1NLGFBQWEsU0FBU0MsWUFBVztFQUN0Q0M7RUFDQTdFO0VBQ0E3QjtFQUNBeUU7QUFDRCxHQUtHO0FBQ0YsUUFBTTtJQUFDa0M7RUFBSyxJQUFJQztBQUNoQixRQUFNekQscUJBQXFCUixzQkFBc0IzQyxVQUFVO0FBQzNELFFBQU11QixpQkFBaUJULG1CQUFtQmQsVUFBVTtFQUVwRCxNQUFNNkcsZUFBZUMsR0FBR0MsR0FBR0MsY0FBYztJQUN4QyxPQUFlQztJQUNmLE9BQWVDO0lBQ2YsT0FBZUM7SUFDZixPQUFlQztJQUNmLE9BQWVDO0lBQ2YsT0FBZUM7SUFDZixPQUFlQztJQUNmLE9BQWVDO0lBQ2YsT0FBZUM7SUFDZixPQUFlQztJQUNQaEI7SUFFRGlCLGNBQWM7QUFDcEIsWUFBTTtRQUNMQyxNQUFNO01BQ1AsQ0FBQztJQUNGOztJQUVnQkMsZ0JBQWdCO0FBQy9CLGFBQU87SUFDUjtJQUNnQkMsYUFBYTtBQUM1QixZQUFNQSxXQUFXO0FBQ2pCakIsYUFBT0ksWUFBWSxJQUFJSCxHQUFHQyxHQUFHZ0IsWUFBWTtRQUN4Q0MsVUFBVTtNQUNYLENBQUM7QUFDRCxZQUFNQyxpQkFBaUJsRCxFQUFFLFFBQVE7QUFDakMsWUFBTW1ELE1BQU10SSxHQUFHdUksS0FBS0MsT0FBTyxzQkFBc0I7UUFBQ0MsTUFBTTtRQUFVMUMsTUFBQSxRQUFBOUUsT0FBY2dCLFFBQVE7TUFBRSxDQUFDO0FBQzNGa0QsUUFBRSxLQUFLLEVBQ0xxQixLQUFLTyxNQUFNLFVBQVUsUUFBUSxDQUFDLEVBQzlCMkIsS0FBSztRQUFDQyxNQUFNTDtRQUFLTSxRQUFRO01BQVEsQ0FBQyxFQUNsQ0MsU0FBU1IsY0FBYztBQUN6QkEscUJBQWVTLE9BQU8sR0FBRztBQUN6QixZQUFNQyxlQUFlNUQsRUFBRSxRQUFRLEVBQUVxQixLQUFLTyxNQUFNLE9BQU8sS0FBSyxDQUFDLEVBQUU4QixTQUFTUixjQUFjO0FBQ2xGcEIsYUFBT0ssV0FBVyxJQUFJSixHQUFHQyxHQUFHNkIsWUFBWTtRQUN2Q0MsT0FBT1o7TUFDUixDQUFDO0FBQ0RwQixhQUFPSSxVQUFVNkIsU0FBU0osT0FBTzdCLE9BQU9LLFNBQVM0QixRQUFRO0FBRXpELFlBQU1DLHVCQUFnRDtRQUNyRDNHLFFBQVE7UUFDUmlCLFFBQVE7UUFDUjJGLE1BQU07UUFDTkMsVUFBVTtRQUNWQyxTQUFBLFFBQUFySSxPQUFpQmdCLFFBQVE7UUFDekJzSCxTQUFTO01BQ1Y7QUFFQSxXQUFLeEksSUFBSWIsSUFBSWlKLG9CQUFvQixFQUFFSyxLQUFNN0QsVUFBUztBQUVqRCxjQUFNOEQsT0FBTzlELEtBQUssT0FBTyxFQUFFK0Q7QUFDM0IsWUFBSUQsS0FBS2hKLFdBQVcsR0FBRztBQUN0QnNJLHVCQUFhdkMsS0FBS08sTUFBTSxVQUFVLFFBQVEsQ0FBQztRQUM1QyxPQUFPO0FBR04sZ0JBQU1aLFlBQVksSUFBSXdELFNBQVNDLEtBQUtILEtBQUssQ0FBQyxFQUFFdEQsU0FBUyxFQUFFMEQsU0FBUztBQUNoRSxnQkFBTUMsU0FBVUwsS0FBSyxDQUFDLEVBQUVsSCxPQUFPd0gsVUFBdUJDLEtBQUssR0FBRyxLQUFLakQsTUFBTSxPQUFPLEtBQUs7QUFDckZnQyx1QkFBYXZDLEtBQUEsR0FBQXZGLE9BQ1RrRixXQUFTLEdBQUEsRUFBQWxGLE9BQUl3SSxLQUFLLENBQUMsRUFBRWhILElBQUksRUFBQXhCLE9BQUc4RixNQUFNLFVBQVUsVUFBVSxDQUFDLEVBQUE5RixPQUFHNkksTUFBTSxDQUNwRTtRQUNEO01BQ0QsQ0FBQztBQUVEN0MsYUFBT00sZUFBZSxJQUFJTCxHQUFHQyxHQUFHOEMsZUFBZTtRQUM5Q0MsU0FBUyxDQUFDLFdBQVc7TUFDdEIsQ0FBQztBQUNEakQsYUFBT0ksVUFBVTZCLFNBQVNKLE9BQU83QixPQUFPTSxhQUFhMkIsUUFBUTtBQUU3RGpDLGFBQU9PLDJCQUEyQixJQUFJTixHQUFHQyxHQUFHZ0QsZ0JBQWdCO1FBQzNEQyxPQUFPO1FBQ1BDLGFBQWE7TUFDZCxDQUFDO0FBR0RwRCxhQUFPUSxjQUFjLElBQUl6SCxHQUFHc0ssUUFBUUMsYUFBYTtRQUNoREMsVUFBVTFELE1BQU16QixLQUFLLGVBQWU7OztRQUdwQ29GLG9CQUFvQnpLLEdBQUdzSyxRQUFRSTtRQUMvQkMsZUFBZTtVQUNkQyxJQUFJO1VBQ0pDLGVBQWU7WUFDZEMsU0FBUyxDQUNSO2NBQUNuRixNQUFNO2NBQVNzRCxPQUFPO1lBQUksR0FDM0I7Y0FBQ3RELE1BQU07Y0FBVXNELE9BQU9sQyxNQUFNLE1BQU0sSUFBSTtZQUFDLEdBQ3pDO2NBQUNwQixNQUFNO2NBQVdzRCxPQUFPbEMsTUFBTSxPQUFPLEtBQUs7WUFBQyxHQUM1QztjQUFDcEIsTUFBTTtjQUFZc0QsT0FBT2xDLE1BQU0sT0FBTyxLQUFLO1lBQUMsR0FDN0M7Y0FBQ3BCLE1BQU07Y0FBWXNELE9BQU9sQyxNQUFNLE9BQU8sS0FBSztZQUFDLEdBQzdDO2NBQUNwQixNQUFNO2NBQVVzRCxPQUFPO1lBQUksR0FDNUI7Y0FBQ3RELE1BQU07Y0FBWXNELE9BQU9sQyxNQUFNLFFBQVEsTUFBTTtZQUFDLEdBQy9DO2NBQUNwQixNQUFNO2NBQVNzRCxPQUFPbEMsTUFBTSxRQUFRLE1BQU07WUFBQyxDQUFBO1lBRTdDcUQsT0FBTztVQUNSO1VBQ0FXLFdBQVc7WUFDVkMsVUFBVTtVQUNYO1FBQ0Q7TUFDRCxDQUFDO0FBQ0QvRCxhQUFPUyxzQkFBc0IsSUFBSVIsR0FBR0MsR0FBR2dELGdCQUFnQjtRQUN0REMsT0FBTztNQUNSLENBQUM7QUFDRG5ELGFBQU9VLHdCQUF3QixJQUFJVCxHQUFHQyxHQUFHOEQsb0JBQW9CO1FBQzVEQyxVQUFVO01BQ1gsQ0FBQztBQUNELFlBQU1DLGVBQWUsQ0FDcEIsSUFBSWpFLEdBQUdDLEdBQUdpRSxZQUFZbkUsT0FBT08sMEJBQTBCO1FBQ3REeUIsT0FBT2xDLE1BQU0sUUFBUSxNQUFNO01BQzVCLENBQUMsR0FDRCxJQUFJRyxHQUFHQyxHQUFHaUUsWUFBWW5FLE9BQU9RLGFBQWE7UUFDekN3QixPQUFPbEMsTUFBTSxRQUFRLE1BQU07TUFDNUIsQ0FBQyxHQUNELElBQUlHLEdBQUdDLEdBQUdpRSxZQUFZbkUsT0FBT1MscUJBQXFCO1FBQ2pEdUIsT0FBT2xDLE1BQU0sVUFBVSxRQUFRO01BQ2hDLENBQUMsQ0FBQTtBQUVGLFVBQUl4RCxvQkFBb0I7QUFDdkI0SCxxQkFBYUUsS0FDWixJQUFJbkUsR0FBR0MsR0FBR2lFLFlBQVluRSxPQUFPVSx1QkFBdUI7VUFDbkRzQixPQUFPbEMsTUFBTSxXQUFXLFVBQVU7UUFDbkMsQ0FBQyxDQUNGO01BQ0Q7QUFDQUUsYUFBT00sYUFBYStELFNBQVNILFlBQVk7QUFDekNsRSxhQUFPVyxjQUFjLElBQUlWLEdBQUdDLEdBQUdnQixZQUFZO1FBQzFDQyxVQUFVO01BQ1gsQ0FBQztBQUNEbkIsYUFBT1ksaUJBQWlCLElBQUlYLEdBQUdDLEdBQUc4QyxlQUFlO1FBQ2hEQyxTQUFTLENBQUMsV0FBVztNQUN0QixDQUFDO0FBQ0RqRCxhQUFPVyxZQUFZc0IsU0FBU0osT0FBTzdCLE9BQU9ZLGVBQWVxQixRQUFRO0FBQ2pFakMsYUFBT1csWUFBWXNCLFNBQVNKLE9BQU83QixPQUFPWSxlQUFlcUIsUUFBUTtBQUNqRWpDLGFBQU9hLGNBQWMsSUFBSVosR0FBR0MsR0FBR29FLFlBQVk7UUFDMUNDLE9BQU8sQ0FBQ3ZFLE9BQU9JLFdBQVdKLE9BQU9XLFdBQVc7UUFDNUM2RCxRQUFRO01BQ1QsQ0FBQztBQUNBLFdBQUszRSxNQUFpQmdDLE9BQU83QixPQUFPYSxZQUFZb0IsUUFBUTtBQUV6RCxhQUFPO0lBQ1I7SUFDQSxPQUFjd0MsV0FBVztBQUN4QixXQUFLOUcsV0FBVzNDLFVBQVU0QyxPQUFBLE1BQUE1RCxPQUFhZ0csT0FBT1Msb0JBQW9CaUUsU0FBUyxDQUFDLENBQUUsRUFBRWpHLEtBQU1DLFVBQVM7QUFDOUYsYUFBSzNELGlCQUNKQyxVQUNBN0IsWUFDQTZHLE9BQU9PLHlCQUF5Qm1FLFNBQVMsR0FDekNDLE9BQU9DLFNBQVNsRyxLQUFLLE1BQU0sRUFBRW1HLFVBQW9CLEVBQUUsR0FDbEQ3RSxPQUFPUSxZQUFzQ2tFLFNBQVMsQ0FDeEQsRUFDRWpHLEtBQUssTUFBTTtBQUNYLGNBQUluQyxvQkFBb0I7QUFDdkIsaUJBQU1GLGNBQ0xwQixVQUNBN0IsWUFDQTZHLE9BQU9VLHNCQUFzQm9FLFdBQVcsQ0FDekM7VUFDRDtRQUNELENBQUMsRUFDQXJHLEtBQUssTUFBTTtBQUNYc0cscUJBQVcsTUFBTTtBQUNoQkMscUJBQVNDLE9BQU87VUFDakIsR0FBRyxHQUFJO1FBQ1IsQ0FBQztNQUNILENBQUM7QUFFRGpGLGFBQU9hLFlBQVlxRSxRQUFRbEYsT0FBT1csV0FBVztJQUM5QztJQUNBLE9BQU93RSxjQUFjO0FBQ3BCLFlBQU0sSUFBSUMsTUFBTSx5QkFBeUI7SUFDMUM7SUFDQSxPQUFPQyxhQUFhO0FBQ25CLFlBQU0sSUFBSUQsTUFBTSx5QkFBeUI7SUFDMUM7SUFFZ0JFLGlCQUFpQi9KLFFBQWdDO0FBQ2hFLGFBQ0MsTUFDRStKLGlCQUFpQi9KLE1BQU0sRUFFdkJnSyxLQUFLLFdBQVk7QUFDakIsWUFBSWhLLFdBQVcsVUFBVTtBQUN4QixpQkFBT3lFLE9BQU95RSxTQUFTO1FBQ3hCO0FBQ0EsZUFBT3pFLE9BQU93RixNQUFNQyxVQUFVSCxpQkFBaUJJLEtBQUssTUFBTW5LLE1BQU07TUFDakUsR0FBRyxJQUFJO0lBRVY7RUFDRDtBQUNBeUUsU0FBTzJGLFNBQVM7SUFDZixHQUFHMUYsR0FBR0MsR0FBR0MsY0FBY3dGO0VBQ3hCO0FBQ0EzRixTQUFPMkYsT0FBTzdLLE9BQU87QUFDckJrRixTQUFPMkYsT0FBT2xKLFFBQUEsS0FBQXpDLE9BQWFVLGNBQWMsRUFBQVYsT0FBRzhGLE1BQU0sS0FBSyxHQUFHLENBQUMsRUFBQTlGLE9BQUdnQixRQUFRO0FBQ3RFZ0YsU0FBTzJGLE9BQU9DLFVBQVUsQ0FDdkI7SUFBQ3JLLFFBQVE7SUFBVXlHLE9BQU9sQyxNQUFNLE1BQU0sSUFBSTtJQUFHK0YsT0FBTyxDQUFDLFdBQVcsYUFBYTtFQUFDLEdBQzlFO0lBQUM3RCxPQUFPO0lBQU02RCxPQUFPO0VBQU0sQ0FBQTtBQUc1QixRQUFNQyxTQUFTLElBQUk5RixPQUFPO0FBRTFCLFFBQU0rRixnQkFBZ0IsSUFBSTlGLEdBQUdDLEdBQUc4RixjQUFjO0FBQzlDOUgsSUFBRSxNQUFNLEVBQUUyRCxPQUFPa0UsY0FBYzlELFFBQVE7QUFDdkM4RCxnQkFBY0UsV0FBVyxDQUFDSCxNQUFNLENBQUM7QUFDakMsT0FBS0MsY0FBY0csV0FBV0osTUFBTTtBQUNyQzs7QVRsT0EsTUFBQSxHQUFLbk4sbUJBQUF3TixTQUFRLEVBQUUxSCxLQUFNb0IsV0FBeUM7QUFDN0QsUUFBTTFHLGFBQWFOLG1CQUFtQjtBQUN0QyxNQUFJLENBQUNNLFlBQVk7QUFDaEI7RUFDRDtBQUVBMEcsUUFBTXpCLEtBQUssNEJBQTRCLEVBQUVnSSxHQUFHLFNBQVMsU0FBVUMsT0FBTztBQUFBLFFBQUFDO0FBQ3JFRCxVQUFNRSxlQUFlO0FBRXJCLFVBQU10RSxXQUFzQy9ELEVBQUUsSUFBeUI7QUFDdkUsVUFBTWxELFdBQVdqQyxHQUFHdUksS0FBS2tGLGNBQWMsUUFBUXZFLFNBQVNSLEtBQUssTUFBTSxDQUFDO0FBQ3BFLFFBQUksQ0FBQ3pHLFVBQVU7QUFDZDtJQUNEO0FBRUEsVUFBTXlMLGFBQUFILHdCQUFvQnJFLFNBQVN5RSxRQUFRLElBQUksRUFBRUMsS0FBSyxJQUFJLEVBQUV2SSxLQUFLLGNBQWMsRUFBRXFELEtBQUssSUFBSSxPQUFBLFFBQUE2RSwwQkFBQSxTQUFBQSx3QkFBSztBQUMvRixVQUFNMUksUUFDTDZJLGNBQUEsUUFBQXpNLE9BQXNCZ0IsUUFBUSxLQUFNeUwsY0FBYyxRQUFBek0sT0FBUWdCLFFBQVEsRUFBR1MsUUFBUSxNQUFNLEtBQUssRUFBRUEsUUFBUSxNQUFNLEdBQUcsSUFDeEcsS0FDQWdMLFVBQ0NoTCxRQUFRLFNBQVMsRUFBRSxFQUNuQkEsUUFBUVQsVUFBVSxFQUFFLEVBQ3BCUyxRQUFRVCxTQUFTUyxRQUFRLE1BQU0sS0FBSyxFQUFFQSxRQUFRLE1BQU0sR0FBRyxHQUFHLEVBQUU7QUFFakVrRSxlQUFXO01BQUNFO01BQU83RTtNQUFVN0I7TUFBWXlFO0lBQUssQ0FBQztFQUNoRCxDQUFDO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFsiaW1wb3J0X2V4dF9nYWRnZXQyIiwgInJlcXVpcmUiLCAiZ2V0UGFnZVBlcm1pc3Npb25zIiwgIndnUGFnZU5hbWUiLCAibXciLCAiY29uZmlnIiwgImdldCIsICJwYWdlUGVybWlzc2lvbnMiLCAicGVybWlzc2lvbiIsICJfaSIsICJfT2JqZWN0JGVudHJpZXMiLCAiT2JqZWN0IiwgImVudHJpZXMiLCAibGVuZ3RoIiwgInBhZ2VOYW1lIiwgInBhZ2VQZXJtaXNzaW9uIiwgInVzZXJSaWdodHNNYW5hZ2VyU3VtbWFyeSIsICJ2ZXJzaW9uIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgImFwaSIsICJpbml0TXdBcGkiLCAiY29uY2F0IiwgImdldFBlcm1pc3Npb25OYW1lcyIsICJwZXJtaXNzaW9uTmFtZXMiLCAicGF0cm9sbGVyIiwgImF1dG9yZXZpZXdlciIsICJjb25maXJtZWQiLCAiZXZlbnRzcG9uc29yIiwgInRyYW5zd2lraSIsICJ0ZW1wbGF0ZWVkaXRvciIsICJib3QiLCAicGVybWlzc2lvbk5hbWUiLCAiX2kyIiwgIl9PYmplY3QkZW50cmllczIiLCAicmlnaHQiLCAibmFtZSIsICJhc3NpZ25QZXJtaXNzaW9uIiwgInVzZXJOYW1lIiwgInN1bW1hcnkiLCAicmV2SWQiLCAiZXhwaXJ5IiwgInBlcm1hTGluayIsICJmdWxsU3VtbWFyeSIsICJwYXJhbXMiLCAiYWN0aW9uIiwgInVzZXIiLCAicmVwbGFjZSIsICJyZWFzb24iLCAiYWRkIiwgInJlbW92ZSIsICJwb3N0V2l0aFRva2VuIiwgImdldFBlcm1pc3Npb25UZW1wbGF0ZSIsICJwZXJtaXNzaW9uVGVtcGxhdGVzIiwgInRlbXBsYXRlIiwgIl9pMyIsICJfT2JqZWN0JGVudHJpZXMzIiwgInRlbXBsYXRlTmFtZSIsICJpc3N1ZVRlbXBsYXRlIiwgIndhdGNoIiwgInBlcm1pc3Npb25UZW1wbGF0ZSIsICJ0YWxrUGFnZSIsICJmb3JtYXQiLCAidGl0bGUiLCAiYXBwZW5kdGV4dCIsICJ3YXRjaGxpc3QiLCAicG9zdFdpdGhFZGl0VG9rZW4iLCAidGFnTGluZSIsICJxdWVyeVJldmlzaW9ucyIsICJfcmVmIiwgIl9hc3luY1RvR2VuZXJhdG9yIiwgInRpdGxlcyIsICJydnNlY3Rpb24iLCAiZm9ybWF0dmVyc2lvbiIsICJwcm9wIiwgImN1cnRpbWVzdGFtcCIsICJydnByb3AiLCAiX3giLCAiX3gyIiwgImFwcGx5IiwgImFyZ3VtZW50cyIsICJtYXJrQXNEb25lIiwgImluZGV4IiwgImNsb3NpbmdSZW1hcmtzIiwgInNlY3Rpb25Ob2RlIiwgImRvY3VtZW50IiwgImdldEVsZW1lbnRCeUlkIiwgInNlY3Rpb25OdW1iZXIiLCAiJCIsICJzaWJsaW5ncyIsICJmaW5kIiwgIm1hdGNoIiwgImJhc2V0aW1lc3RhbXAiLCAiY29udGVudCIsICJyZXZpc2lvbiIsICJ0aGVuIiwgImRhdGEiLCAicGFnZXMiLCAiRGVmZXJyZWQiLCAicmVqZWN0IiwgInBhZ2UiLCAiaW52YWxpZCIsICJtaXNzaW5nIiwgInJldmlzaW9ucyIsICJ0aW1lc3RhbXAiLCAicmVzb2x2ZSIsICJ0cmltIiwgImVkaXRQYXJhbXMiLCAic2VjdGlvbiIsICJ0ZXh0IiwgInN0YXJ0dGltZXN0YW1wIiwgIm5vY3JlYXRlIiwgImFzc2VydCIsICJzaG93RGlhbG9nIiwgInNob3dEaWFsb2cyIiwgIiRib2R5IiwgIndnVUxTIiwgIndpbmRvdyIsICJEaWFsb2ciLCAiT08iLCAidWkiLCAiUHJvY2Vzc0RpYWxvZyIsICJlZGl0UGFuZWwiLCAicmlnaHRMb2ciLCAiZWRpdEZpZWxkc2V0IiwgInJpZ2h0c0NoYW5nZVN1bW1hcnlJbnB1dCIsICJleHBpcnlJbnB1dCIsICJjbG9zaW5nUmVtYXJrc0lucHV0IiwgIndhdGNoVGFsa1BhZ2VDaGVja2JveCIsICJzdWJtaXRQYW5lbCIsICJzdWJtaXRGaWVsZHNldCIsICJzdGFja0xheW91dCIsICJjb25zdHJ1Y3RvciIsICJzaXplIiwgImdldEJvZHlIZWlnaHQiLCAiaW5pdGlhbGl6ZSIsICJQYW5lbExheW91dCIsICJleHBhbmRlZCIsICJyaWdodExvZ1dhcHBlciIsICJ1cmwiLCAidXRpbCIsICJnZXRVcmwiLCAidHlwZSIsICJhdHRyIiwgImhyZWYiLCAidGFyZ2V0IiwgImFwcGVuZFRvIiwgImFwcGVuZCIsICJyaWdodExvZ1RleHQiLCAiTGFiZWxXaWRnZXQiLCAibGFiZWwiLCAiJGVsZW1lbnQiLCAicXVlcnlMb2dFdmVudHNQYXJhbXMiLCAibGlzdCIsICJsZWFjdGlvbiIsICJsZXRpdGxlIiwgImxlbGltaXQiLCAiZG9uZSIsICJsb2dzIiwgImxvZ2V2ZW50cyIsICJNb3JlYml0cyIsICJkYXRlIiwgImNhbGVuZGFyIiwgInJpZ2h0cyIsICJuZXdncm91cHMiLCAiam9pbiIsICJGaWVsZHNldExheW91dCIsICJjbGFzc2VzIiwgIlRleHRJbnB1dFdpZGdldCIsICJ2YWx1ZSIsICJwbGFjZWhvbGRlciIsICJ3aWRnZXRzIiwgIkV4cGlyeVdpZGdldCIsICIkb3ZlcmxheSIsICJSZWxhdGl2ZUlucHV0Q2xhc3MiLCAiU2VsZWN0V2l0aElucHV0V2lkZ2V0IiwgInJlbGF0aXZlSW5wdXQiLCAib3IiLCAiZHJvcGRvd25pbnB1dCIsICJvcHRpb25zIiwgInRleHRpbnB1dCIsICJyZXF1aXJlZCIsICJDaGVja2JveElucHV0V2lkZ2V0IiwgInNlbGVjdGVkIiwgImZvcm1FbGVtZW50cyIsICJGaWVsZExheW91dCIsICJwdXNoIiwgImFkZEl0ZW1zIiwgIlN0YWNrTGF5b3V0IiwgIml0ZW1zIiwgInBhZGRlZCIsICJvblN1Ym1pdCIsICJnZXRWYWx1ZSIsICJOdW1iZXIiLCAicGFyc2VJbnQiLCAibmV3cmV2aWQiLCAiaXNTZWxlY3RlZCIsICJzZXRUaW1lb3V0IiwgImxvY2F0aW9uIiwgInJlbG9hZCIsICJzZXRJdGVtIiwgInB1c2hQZW5kaW5nIiwgIkVycm9yIiwgInBvcFBlbmRpbmciLCAiZ2V0QWN0aW9uUHJvY2VzcyIsICJuZXh0IiwgInN1cGVyIiwgInByb3RvdHlwZSIsICJjYWxsIiwgInN0YXRpYyIsICJhY3Rpb25zIiwgImZsYWdzIiwgImRpYWxvZyIsICJ3aW5kb3dNYW5hZ2VyIiwgIldpbmRvd01hbmFnZXIiLCAiYWRkV2luZG93cyIsICJvcGVuV2luZG93IiwgImdldEJvZHkiLCAib24iLCAiZXZlbnQiLCAiXyRlbGVtZW50JHBhcmVudHMkcHJlIiwgInByZXZlbnREZWZhdWx0IiwgImdldFBhcmFtVmFsdWUiLCAic2VjdGlvbklkIiwgInBhcmVudHMiLCAicHJldiJdCn0K

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
      rvprop: ["content", "timestamp"]
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
    wgPageName
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
        content,
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1VzZXJSaWdodHNNYW5hZ2VyL1VzZXJSaWdodHNNYW5hZ2VyLnRzIiwgInNyYy9Vc2VyUmlnaHRzTWFuYWdlci9tb2R1bGVzL2dldFBhZ2VQZXJtaXNzaW9ucy50cyIsICJzcmMvVXNlclJpZ2h0c01hbmFnZXIvb3B0aW9ucy5qc29uIiwgInNyYy9Vc2VyUmlnaHRzTWFuYWdlci9tb2R1bGVzL2FwaS50cyIsICJzcmMvVXNlclJpZ2h0c01hbmFnZXIvbW9kdWxlcy9nZXRQZXJtaXNzaW9uTmFtZXMudHMiLCAic3JjL1VzZXJSaWdodHNNYW5hZ2VyL21vZHVsZXMvYXNzaWduUGVybWlzc2lvbi50cyIsICJzcmMvVXNlclJpZ2h0c01hbmFnZXIvbW9kdWxlcy9nZXRUZW1wbGF0ZXMudHMiLCAic3JjL1VzZXJSaWdodHNNYW5hZ2VyL21vZHVsZXMvaXNzdWVUZW1wbGF0ZS50cyIsICJzcmMvVXNlclJpZ2h0c01hbmFnZXIvbW9kdWxlcy9tYXJrQXNEb25lLnRzIiwgInNyYy9Vc2VyUmlnaHRzTWFuYWdlci9tb2R1bGVzL3Nob3dEaWFsb2cudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7Z2V0Qm9keX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbmltcG9ydCB7Z2V0UGFnZVBlcm1pc3Npb25zfSBmcm9tICcuL21vZHVsZXMvZ2V0UGFnZVBlcm1pc3Npb25zJztcbmltcG9ydCB7c2hvd0RpYWxvZ30gZnJvbSAnLi9tb2R1bGVzL3Nob3dEaWFsb2cnO1xuXG52b2lkIGdldEJvZHkoKS50aGVuKCgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkID0+IHtcblx0Y29uc3QgcGVybWlzc2lvbiA9IGdldFBhZ2VQZXJtaXNzaW9ucygpO1xuXHRpZiAoIXBlcm1pc3Npb24pIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHQkYm9keS5maW5kKCcucGVybS1hc3NpZ24tcGVybWlzc2lvbnMgYScpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCkge1xuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cblx0XHRjb25zdCAkZWxlbWVudDogSlF1ZXJ5PEhUTUxBbmNob3JFbGVtZW50PiA9ICQodGhpcyBhcyBIVE1MQW5jaG9yRWxlbWVudCk7XG5cdFx0Y29uc3QgdXNlck5hbWUgPSBtdy51dGlsLmdldFBhcmFtVmFsdWUoJ3VzZXInLCAkZWxlbWVudC5hdHRyKCdocmVmJykpO1xuXHRcdGlmICghdXNlck5hbWUpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRjb25zdCBzZWN0aW9uSWQ6IHN0cmluZyA9ICRlbGVtZW50LnBhcmVudHMoJ2RsJykucHJldignaDQnKS5maW5kKCcubXctaGVhZGxpbmUnKS5hdHRyKCdpZCcpID8/ICcnO1xuXHRcdGNvbnN0IGluZGV4OiBzdHJpbmcgPVxuXHRcdFx0c2VjdGlvbklkID09PSBgVXNlcjoke3VzZXJOYW1lfWAgfHwgc2VjdGlvbklkID09PSBgVXNlcjoke3VzZXJOYW1lfWAucmVwbGFjZSgvXCIvZywgJy4yMicpLnJlcGxhY2UoLyAvZywgJ18nKVxuXHRcdFx0XHQ/ICcnXG5cdFx0XHRcdDogc2VjdGlvbklkXG5cdFx0XHRcdFx0XHQucmVwbGFjZSgnVXNlcjonLCAnJylcblx0XHRcdFx0XHRcdC5yZXBsYWNlKHVzZXJOYW1lLCAnJylcblx0XHRcdFx0XHRcdC5yZXBsYWNlKHVzZXJOYW1lLnJlcGxhY2UoL1wiL2csICcuMjInKS5yZXBsYWNlKC8gL2csICdfJyksICcnKTtcblxuXHRcdHNob3dEaWFsb2coeyRib2R5LCB1c2VyTmFtZSwgcGVybWlzc2lvbiwgaW5kZXh9KTtcblx0fSk7XG59KTtcbiIsICJpbXBvcnQgdHlwZSB7VXNlclJpZ2h0c30gZnJvbSAnfi9NYXJrUmlnaHRzL21vZHVsZXMvdHlwZXMnO1xuXG5jb25zdCBnZXRQYWdlUGVybWlzc2lvbnMgPSAoKTogVXNlclJpZ2h0cyB8IG51bGwgPT4ge1xuXHRjb25zdCB7d2dQYWdlTmFtZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cblx0Y29uc3QgcGFnZVBlcm1pc3Npb25zID0ge1xuXHRcdCdRaXV3ZW5fdGFsazrmnYPpmZDnlLPor7cv55Sz6K+35beh5p+l5Zue6YCA5p2DJzogJ3BhdHJvbGxlcicsXG5cdFx0J1FpdXdlbl90YWxrOuadg+mZkOeUs+ivty/nlLPor7flt6Hmn6XosYHlhY3mnYMnOiAnYXV0b3Jldmlld2VyJyxcblx0XHQnUWl1d2VuX3RhbGs65p2D6ZmQ55Sz6K+3L+eUs+ivt+ehruiupOeUqOaIt+adgyc6ICdjb25maXJtZWQnLFxuXHRcdCdRaXV3ZW5fdGFsazrmnYPpmZDnlLPor7cv55Sz6K+35aSn6YeP5raI5oGv5Y+R6YCB5p2DJzogJ21hc3NtZXNzYWdlLXNlbmRlcicsXG5cdFx0J1FpdXdlbl90YWxrOuadg+mZkOeUs+ivty/nlLPor7fmtLvliqjnu4Tnu4fmnYMnOiAnZXZlbnRzcG9uc29yJyxcblx0XHQnUWl1d2VuX3RhbGs65p2D6ZmQ55Sz6K+3L+eUs+ivt+WvvOWFpeadgyc6ICd0cmFuc3dpa2knLFxuXHRcdCdRaXV3ZW5fdGFsazrmnYPpmZDnlLPor7cv55Sz6K+35qih5p2/57yW6L6R5p2DJzogJ3RlbXBsYXRlZWRpdG9yJyxcblx0XHQnUWl1d2VuX3RhbGs65p2D6ZmQ55Sz6K+3L+eUs+ivt+acuuWZqOS6uuadg+mZkCc6ICdib3QnLFxuXHRcdCdRaXV3ZW5fdGFsazrmnYPpmZDnlLPor7cv55Sz6K+35a6e5ZCN5Yi26aqM6K+B6LGB5YWNJzogJ3JucnN2ZXJpZnktZXhlbXB0Jyxcblx0fSBhcyBjb25zdCBzYXRpc2ZpZXMgUGFydGlhbDxSZWNvcmQ8c3RyaW5nLCBVc2VyUmlnaHRzPj47XG5cblx0bGV0IHBlcm1pc3Npb246IFVzZXJSaWdodHMgfCBudWxsID0gbnVsbDtcblx0Zm9yIChjb25zdCBbcGFnZU5hbWUsIHBhZ2VQZXJtaXNzaW9uXSBvZiBPYmplY3QuZW50cmllcyhwYWdlUGVybWlzc2lvbnMpKSB7XG5cdFx0aWYgKHBhZ2VOYW1lID09PSB3Z1BhZ2VOYW1lKSB7XG5cdFx0XHRwZXJtaXNzaW9uID0gcGFnZVBlcm1pc3Npb247XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBwZXJtaXNzaW9uO1xufTtcblxuZXhwb3J0IHtnZXRQYWdlUGVybWlzc2lvbnN9O1xuIiwgIntcblx0XCJ1c2VyUmlnaHRzTWFuYWdlclN1bW1hcnlcIjogXCLvvIhbW01lZGlhV2lraTpHYWRnZXQtVXNlclJpZ2h0c01hbmFnZXIuanN8VXNlclJpZ2h0c01hbmFnZXJdXe+8iVwiLFxuXHRcInZlcnNpb25cIjogXCIyLjBcIlxufVxuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7aW5pdE13QXBpfSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG5jb25zdCBhcGk6IG13LkFwaSA9IGluaXRNd0FwaShgbW9yZWJpdHMuanM7IFVzZXJSaWdodHNNYW5hZ2VyLyR7T1BUSU9OUy52ZXJzaW9ufWApO1xuXG5leHBvcnQge2FwaX07XG4iLCAiaW1wb3J0IHR5cGUge1VzZXJSaWdodHN9IGZyb20gJ34vTWFya1JpZ2h0cy9tb2R1bGVzL3R5cGVzJztcblxuY29uc3QgZ2V0UGVybWlzc2lvbk5hbWVzID0gKHBlcm1pc3Npb246IFVzZXJSaWdodHMpOiBzdHJpbmcgfCBudWxsID0+IHtcblx0Y29uc3QgcGVybWlzc2lvbk5hbWVzID0ge1xuXHRcdHBhdHJvbGxlcjogJ+W3oeafpeWRmCcsXG5cdFx0YXV0b3Jldmlld2VyOiAn5beh5p+l6LGB5YWN6ICFJyxcblx0XHRjb25maXJtZWQ6ICfnoa7orqTnlKjmiLcnLFxuXHRcdCdtYXNzbWVzc2FnZS1zZW5kZXInOiAn5aSn6YeP5raI5oGv5Y+R6YCB6ICFJyxcblx0XHRldmVudHNwb25zb3I6ICfmtLvliqjnu4Tnu4fogIUnLFxuXHRcdHRyYW5zd2lraTogJ+WvvOWFpeiAhScsXG5cdFx0dGVtcGxhdGVlZGl0b3I6ICfmqKHmnb/nvJbovpHlkZgnLFxuXHRcdGJvdDogJ+acuuWZqOS6uicsXG5cdFx0J3JucnN2ZXJpZnktZXhlbXB0JzogJ+WunuWQjeWItumqjOivgeixgeWFjScsXG5cdH0gYXMgY29uc3Qgc2F0aXNmaWVzIFBhcnRpYWw8UmVjb3JkPFVzZXJSaWdodHMsIHN0cmluZz4+O1xuXG5cdGxldCBwZXJtaXNzaW9uTmFtZTogc3RyaW5nIHwgbnVsbCA9IG51bGw7XG5cdGZvciAoY29uc3QgW3JpZ2h0LCBuYW1lXSBvZiBPYmplY3QuZW50cmllcyhwZXJtaXNzaW9uTmFtZXMpKSB7XG5cdFx0aWYgKHBlcm1pc3Npb24gPT09IHJpZ2h0KSB7XG5cdFx0XHRwZXJtaXNzaW9uTmFtZSA9IG5hbWU7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBwZXJtaXNzaW9uTmFtZTtcbn07XG5cbmV4cG9ydCB7Z2V0UGVybWlzc2lvbk5hbWVzfTtcbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge1VzZXJSaWdodHN9IGZyb20gJ34vTWFya1JpZ2h0cy9tb2R1bGVzL3R5cGVzJztcbmltcG9ydCB7YXBpfSBmcm9tICcuL2FwaSc7XG5pbXBvcnQge2dldFBlcm1pc3Npb25OYW1lc30gZnJvbSAnLi9nZXRQZXJtaXNzaW9uTmFtZXMnO1xuXG5jb25zdCBhc3NpZ25QZXJtaXNzaW9uID0gKHtcblx0dXNlck5hbWUsXG5cdHBlcm1pc3Npb24sXG5cdHN1bW1hcnksXG5cdHJldklkLFxuXHRleHBpcnksXG59OiB7XG5cdHVzZXJOYW1lOiBzdHJpbmc7XG5cdHBlcm1pc3Npb246IFVzZXJSaWdodHM7XG5cdHN1bW1hcnk6IHN0cmluZztcblx0cmV2SWQ6IG51bWJlcjtcblx0ZXhwaXJ5OiBzdHJpbmc7XG59KSA9PiB7XG5cdGNvbnN0IHBlcm1hTGluayA9IGBbW1NwZWNpYWw6UGVybWFMaW5rLyR7cmV2SWR9I1VzZXI6JHt1c2VyTmFtZX185p2D6ZmQ55Sz6K+3XV1gO1xuXHRsZXQgZnVsbFN1bW1hcnkgPSBgKyR7Z2V0UGVybWlzc2lvbk5hbWVzKHBlcm1pc3Npb24pfe+8myR7cGVybWFMaW5rfWA7XG5cdGlmIChzdW1tYXJ5ICE9PSAnJykge1xuXHRcdGZ1bGxTdW1tYXJ5ICs9IGDvvJske3N1bW1hcnl9YDtcblx0fVxuXHRmdWxsU3VtbWFyeSArPSBPUFRJT05TLnVzZXJSaWdodHNNYW5hZ2VyU3VtbWFyeTtcblx0Y29uc3QgcGFyYW1zOiBBcGlVc2VycmlnaHRzUGFyYW1zID0ge1xuXHRcdGFjdGlvbjogJ3VzZXJyaWdodHMnLFxuXHRcdHVzZXI6IHVzZXJOYW1lLnJlcGxhY2UoLyAvZywgJ18nKSxcblx0XHRyZWFzb246IGZ1bGxTdW1tYXJ5LFxuXHRcdC8vIEB0cy1leHBlY3QtZXJyb3IgVFMyMzIyXG5cdFx0YWRkOiBbcGVybWlzc2lvbl0sXG5cdFx0ZXhwaXJ5OiBleHBpcnkgPT09ICcnID8gJ2luZmluaXR5JyA6IGV4cGlyeSxcblx0fTtcblx0aWYgKHBlcm1pc3Npb24gPT09ICdwYXRyb2xsZXInICYmIGV4cGlyeSA9PT0gJ2luZmluaXRlJykge1xuXHRcdHBhcmFtcy5yZW1vdmUgPSAnYXV0b3Jldmlld2VyJztcblx0fVxuXHRyZXR1cm4gYXBpLnBvc3RXaXRoVG9rZW4oJ3VzZXJyaWdodHMnLCBwYXJhbXMpO1xufTtcblxuZXhwb3J0IHthc3NpZ25QZXJtaXNzaW9ufTtcbiIsICJpbXBvcnQgdHlwZSB7VXNlclJpZ2h0c30gZnJvbSAnfi9NYXJrUmlnaHRzL21vZHVsZXMvdHlwZXMnO1xuXG5jb25zdCBnZXRQZXJtaXNzaW9uVGVtcGxhdGUgPSAocGVybWlzc2lvbjogVXNlclJpZ2h0cyk6IHN0cmluZyB8IG51bGwgPT4ge1xuXHRjb25zdCBwZXJtaXNzaW9uVGVtcGxhdGVzID0ge1xuXHRcdHBhdHJvbGxlcjogJ1BhdHJvbCBncmFudGVkJyxcblx0XHRhdXRvcmV2aWV3ZXI6ICdBdXRvcGF0cm9sIGdyYW50ZWQnLFxuXHRcdCdtYXNzbWVzc2FnZS1zZW5kZXInOiAnTU1TIGdyYW50ZWQnLFxuXHRcdHRlbXBsYXRlZWRpdG9yOiAnVGVtcGxhdGUgZWRpdG9yIGdyYW50ZWQnLFxuXHRcdHRyYW5zd2lraTogJ1RyYW5zd2lraSBncmFudGVkJyxcblx0fSBhcyBjb25zdCBzYXRpc2ZpZXMgUGFydGlhbDxSZWNvcmQ8VXNlclJpZ2h0cywgc3RyaW5nPj47XG5cblx0bGV0IHRlbXBsYXRlOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcblx0Zm9yIChjb25zdCBbcGFnZVBlcm1pc3Npb24sIHRlbXBsYXRlTmFtZV0gb2YgT2JqZWN0LmVudHJpZXMocGVybWlzc2lvblRlbXBsYXRlcykpIHtcblx0XHRpZiAocGVybWlzc2lvbiA9PT0gcGFnZVBlcm1pc3Npb24pIHtcblx0XHRcdHRlbXBsYXRlID0gdGVtcGxhdGVOYW1lO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gdGVtcGxhdGU7XG59O1xuXG5leHBvcnQge2dldFBlcm1pc3Npb25UZW1wbGF0ZX07XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtBcGlSZXNwb25zZX0gZnJvbSAndHlwZXMtbWVkaWF3aWtpLXJlbm92YXRlL213L0FwaSc7XG5pbXBvcnQge1VzZXJSaWdodHN9IGZyb20gJ34vTWFya1JpZ2h0cy9tb2R1bGVzL3R5cGVzJztcbmltcG9ydCB7YXBpfSBmcm9tICcuL2FwaSc7XG5pbXBvcnQge2dldFBlcm1pc3Npb25OYW1lc30gZnJvbSAnLi9nZXRQZXJtaXNzaW9uTmFtZXMnO1xuaW1wb3J0IHtnZXRQZXJtaXNzaW9uVGVtcGxhdGV9IGZyb20gJy4vZ2V0VGVtcGxhdGVzJztcblxuY29uc3QgaXNzdWVUZW1wbGF0ZSA9ICh7XG5cdHVzZXJOYW1lLFxuXHRwZXJtaXNzaW9uLFxuXHR3YXRjaCxcbn06IHtcblx0dXNlck5hbWU6IHN0cmluZztcblx0cGVybWlzc2lvbjogVXNlclJpZ2h0cztcblx0d2F0Y2g6IGJvb2xlYW4gfCAnd2F0Y2gnIHwgJ3Vud2F0Y2gnO1xufSk6IEpRdWVyeS5Qcm9taXNlPEFwaVJlc3BvbnNlPiB8IHZvaWQgPT4ge1xuXHRjb25zdCBwZXJtaXNzaW9uVGVtcGxhdGUgPSBnZXRQZXJtaXNzaW9uVGVtcGxhdGUocGVybWlzc2lvbik7XG5cdGlmICghcGVybWlzc2lvblRlbXBsYXRlKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgcGVybWlzc2lvbk5hbWUgPSBnZXRQZXJtaXNzaW9uTmFtZXMocGVybWlzc2lvbik7XG5cdGNvbnN0IHRhbGtQYWdlID0gYFVzZXIgdGFsazoke3VzZXJOYW1lLnJlcGxhY2UoLyAvZywgJ18nKX1gO1xuXHRjb25zdCBwYXJhbXM6IEFwaUVkaXRQYWdlUGFyYW1zID0ge1xuXHRcdGFjdGlvbjogJ2VkaXQnLFxuXHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdHRpdGxlOiB0YWxrUGFnZSxcblx0XHRhcHBlbmR0ZXh0OiAnXFxuXFxue3snLmNvbmNhdCgnc3Vic3Q6JywgcGVybWlzc2lvblRlbXBsYXRlLCAnfX0nKSxcblx0XHRzdW1tYXJ5OiBg5qC55o2u5YWx6K+G5o6I5LqIJHtwZXJtaXNzaW9uTmFtZX0ke09QVElPTlMudXNlclJpZ2h0c01hbmFnZXJTdW1tYXJ5fWAsXG5cdFx0d2F0Y2hsaXN0OiB3YXRjaCA/ICd3YXRjaCcgOiAndW53YXRjaCcsXG5cdH07XG5cdHJldHVybiBhcGkucG9zdFdpdGhFZGl0VG9rZW4ocGFyYW1zKTtcbn07XG5cbmV4cG9ydCB7aXNzdWVUZW1wbGF0ZX07XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHthcGl9IGZyb20gJy4vYXBpJztcbmNvbnN0IHRhZ0xpbmUgPSBPUFRJT05TLnVzZXJSaWdodHNNYW5hZ2VyU3VtbWFyeTtcblxuY29uc3QgcXVlcnlSZXZpc2lvbnMgPSBhc3luYyAodGl0bGVzOiBzdHJpbmcgfCBzdHJpbmdbXSwgcnZzZWN0aW9uOiBzdHJpbmcpID0+IHtcblx0Y29uc3QgcGFyYW1zOiBBcGlRdWVyeVJldmlzaW9uc1BhcmFtcyA9IHtcblx0XHR0aXRsZXMsXG5cdFx0cnZzZWN0aW9uLFxuXHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0cHJvcDogJ3JldmlzaW9ucycsXG5cdFx0Y3VydGltZXN0YW1wOiB0cnVlLFxuXHRcdHJ2cHJvcDogWydjb250ZW50JywgJ3RpbWVzdGFtcCddLFxuXHR9O1xuXG5cdHJldHVybiBhd2FpdCBhcGkuZ2V0KHBhcmFtcyk7XG59O1xuXG5jb25zdCBtYXJrQXNEb25lID0gKHt1c2VyTmFtZSwgaW5kZXgsIGNsb3NpbmdSZW1hcmtzfToge3VzZXJOYW1lOiBzdHJpbmc7IGluZGV4OiBzdHJpbmc7IGNsb3NpbmdSZW1hcmtzOiBzdHJpbmd9KSA9PiB7XG5cdGNvbnN0IHt3Z1BhZ2VOYW1lfSA9IG13LmNvbmZpZy5nZXQoKTtcblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHVuaWNvcm4vcHJlZmVyLXF1ZXJ5LXNlbGVjdG9yXG5cdGNvbnN0IHNlY3Rpb25Ob2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG5cdFx0YFVzZXI6JHt1c2VyTmFtZS5yZXBsYWNlKC9cIi9nLCAnLjIyJykucmVwbGFjZSgvIC9nLCAnXycpfSR7aW5kZXggPz8gJyd9YFxuXHQpO1xuXG5cdGNvbnN0IHNlY3Rpb25OdW1iZXIgPSAoXG5cdFx0KFxuXHRcdFx0JChzZWN0aW9uTm9kZSBhcyBIVE1MRWxlbWVudClcblx0XHRcdFx0LnNpYmxpbmdzKCcubXctZWRpdHNlY3Rpb24nKVxuXHRcdFx0XHQuZmluZCgnYTpub3QoLm13LWVkaXRzZWN0aW9uLXZpc3VhbGVkaXRvcilbaHJlZio9ZWRpdF0nKVxuXHRcdFx0XHQucHJvcCgnaHJlZicpIGFzIHN0cmluZ1xuXHRcdCkubWF0Y2goL3NlY3Rpb249KFxcZCspLykgYXMgUmVnRXhwTWF0Y2hBcnJheVxuXHQpWzFdIGFzIHN0cmluZztcblxuXHRsZXQgYmFzZXRpbWVzdGFtcDogc3RyaW5nO1xuXHRsZXQgY3VydGltZXN0YW1wOiBzdHJpbmc7XG5cdGxldCBjb250ZW50OiBzdHJpbmc7XG5cdGxldCByZXZpc2lvbjtcblxuXHRyZXR1cm4gcXVlcnlSZXZpc2lvbnMod2dQYWdlTmFtZSwgc2VjdGlvbk51bWJlcilcblx0XHQudGhlbigoZGF0YSkgPT4ge1xuXHRcdFx0aWYgKCFkYXRhWydxdWVyeSddIHx8ICFkYXRhWydxdWVyeSddLnBhZ2VzKSB7XG5cdFx0XHRcdHJldHVybiAkLkRlZmVycmVkKCkucmVqZWN0KCd1bmtub3duJyk7XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IHtwYWdlc30gPSBkYXRhWydxdWVyeSddIGFzIHtcblx0XHRcdFx0cGFnZXM6IHtcblx0XHRcdFx0XHRpbnZhbGlkPzogYm9vbGVhbjtcblx0XHRcdFx0XHRtaXNzaW5nPzogYm9vbGVhbjtcblx0XHRcdFx0XHRyZXZpc2lvbnM6IHtcblx0XHRcdFx0XHRcdHRpbWVzdGFtcDogc3RyaW5nO1xuXHRcdFx0XHRcdFx0Y29udGVudDogc3RyaW5nO1xuXHRcdFx0XHRcdH1bXTtcblx0XHRcdFx0fVtdO1xuXHRcdFx0fTtcblx0XHRcdGNvbnN0IFtwYWdlXSA9IHBhZ2VzO1xuXG5cdFx0XHRpZiAoIXBhZ2UgfHwgcGFnZS5pbnZhbGlkKSB7XG5cdFx0XHRcdHJldHVybiAkLkRlZmVycmVkKCkucmVqZWN0KCdpbnZhbGlkdGl0bGUnKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKHBhZ2UubWlzc2luZykge1xuXHRcdFx0XHRyZXR1cm4gJC5EZWZlcnJlZCgpLnJlamVjdCgnbm9jcmVhdGUtbWlzc2luZycpO1xuXHRcdFx0fVxuXG5cdFx0XHRbcmV2aXNpb25dID0gcGFnZS5yZXZpc2lvbnM7XG5cdFx0XHRpZiAocmV2aXNpb24pIHtcblx0XHRcdFx0KHtjb250ZW50LCB0aW1lc3RhbXA6IGJhc2V0aW1lc3RhbXB9ID0gcmV2aXNpb24pO1xuXHRcdFx0fVxuXHRcdFx0Y3VydGltZXN0YW1wID0gZGF0YVsnY3VydGltZXN0YW1wJ10gYXMgc3RyaW5nO1xuXHRcdFx0cmV0dXJuICQuRGVmZXJyZWQoKS5yZXNvbHZlKCk7XG5cdFx0fSlcblx0XHQudGhlbigoKSA9PiB7XG5cdFx0XHRjb250ZW50ID0gY29udGVudC50cmltKCk7XG5cdFx0XHRjb250ZW50ID0gY29udGVudC5yZXBsYWNlKC8oOlxccyp7e1N0YXR1cykoXFx8Lio/KT99fS9pLCAnJDF8K319Jyk7XG5cdFx0XHRjb250ZW50ICs9IGNsb3NpbmdSZW1hcmtzO1xuXG5cdFx0XHRjb25zdCBlZGl0UGFyYW1zOiBBcGlFZGl0UGFnZVBhcmFtcyA9IHtcblx0XHRcdFx0YWN0aW9uOiAnZWRpdCcsXG5cdFx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0XHRcdHRpdGxlOiB3Z1BhZ2VOYW1lLFxuXHRcdFx0XHRzZWN0aW9uOiBzZWN0aW9uTnVtYmVyLFxuXHRcdFx0XHR0ZXh0OiBjb250ZW50LFxuXHRcdFx0XHRzdW1tYXJ5OiBgLyogVXNlcjoke3VzZXJOYW1lfSAqLyDlrozmiJAke3RhZ0xpbmV9YCxcblx0XHRcdFx0YmFzZXRpbWVzdGFtcCxcblx0XHRcdFx0c3RhcnR0aW1lc3RhbXA6IGN1cnRpbWVzdGFtcCxcblx0XHRcdFx0bm9jcmVhdGU6IHRydWUsXG5cdFx0XHR9O1xuXHRcdFx0aWYgKG13LmNvbmZpZy5nZXQoJ3dnVXNlck5hbWUnKSkge1xuXHRcdFx0XHRlZGl0UGFyYW1zLmFzc2VydCA9ICd1c2VyJztcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIGFwaS5wb3N0V2l0aEVkaXRUb2tlbihlZGl0UGFyYW1zKTtcblx0XHR9KTtcbn07XG5cbmV4cG9ydCB7bWFya0FzRG9uZX07XG4iLCAiaW1wb3J0IHtVc2VyUmlnaHRzfSBmcm9tICd+L01hcmtSaWdodHMvbW9kdWxlcy90eXBlcyc7XG5pbXBvcnQge2FwaX0gZnJvbSAnLi9hcGknO1xuaW1wb3J0IHthc3NpZ25QZXJtaXNzaW9ufSBmcm9tICcuL2Fzc2lnblBlcm1pc3Npb24nO1xuaW1wb3J0IHtnZXRQZXJtaXNzaW9uTmFtZXN9IGZyb20gJy4vZ2V0UGVybWlzc2lvbk5hbWVzJztcbmltcG9ydCB7Z2V0UGVybWlzc2lvblRlbXBsYXRlfSBmcm9tICcuL2dldFRlbXBsYXRlcyc7XG5pbXBvcnQge2lzc3VlVGVtcGxhdGV9IGZyb20gJy4vaXNzdWVUZW1wbGF0ZSc7XG5pbXBvcnQge21hcmtBc0RvbmV9IGZyb20gJy4vbWFya0FzRG9uZSc7XG5cbmNvbnN0IHNob3dEaWFsb2cgPSBmdW5jdGlvbiBzaG93RGlhbG9nKHtcblx0JGJvZHksXG5cdHVzZXJOYW1lLFxuXHRwZXJtaXNzaW9uLFxuXHRpbmRleCxcbn06IHtcblx0JGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+O1xuXHR1c2VyTmFtZTogc3RyaW5nO1xuXHRwZXJtaXNzaW9uOiBVc2VyUmlnaHRzO1xuXHRpbmRleDogc3RyaW5nO1xufSkge1xuXHRjb25zdCB7d2dVTFN9ID0gd2luZG93O1xuXHRjb25zdCBwZXJtaXNzaW9uVGVtcGxhdGUgPSBnZXRQZXJtaXNzaW9uVGVtcGxhdGUocGVybWlzc2lvbik7XG5cdGNvbnN0IHBlcm1pc3Npb25OYW1lID0gZ2V0UGVybWlzc2lvbk5hbWVzKHBlcm1pc3Npb24pO1xuXG5cdGNsYXNzIERpYWxvZyBleHRlbmRzIE9PLnVpLlByb2Nlc3NEaWFsb2cge1xuXHRcdHByaXZhdGUgc3RhdGljIGVkaXRQYW5lbDogT08udWkuUGFuZWxMYXlvdXQ7XG5cdFx0cHJpdmF0ZSBzdGF0aWMgcmlnaHRMb2c6IE9PLnVpLkxhYmVsV2lkZ2V0O1xuXHRcdHByaXZhdGUgc3RhdGljIGVkaXRGaWVsZHNldDogT08udWkuRmllbGRzZXRMYXlvdXQ7XG5cdFx0cHJpdmF0ZSBzdGF0aWMgcmlnaHRzQ2hhbmdlU3VtbWFyeUlucHV0OiBPTy51aS5UZXh0SW5wdXRXaWRnZXQ7XG5cdFx0cHJpdmF0ZSBzdGF0aWMgZXhwaXJ5SW5wdXQ6IE9PLnVpLldpZGdldDtcblx0XHRwcml2YXRlIHN0YXRpYyBjbG9zaW5nUmVtYXJrc0lucHV0OiBPTy51aS5UZXh0SW5wdXRXaWRnZXQ7XG5cdFx0cHJpdmF0ZSBzdGF0aWMgd2F0Y2hUYWxrUGFnZUNoZWNrYm94OiBPTy51aS5DaGVja2JveElucHV0V2lkZ2V0O1xuXHRcdHByaXZhdGUgc3RhdGljIHN1Ym1pdFBhbmVsOiBPTy51aS5QYW5lbExheW91dDtcblx0XHRwcml2YXRlIHN0YXRpYyBzdWJtaXRGaWVsZHNldDogT08udWkuRmllbGRzZXRMYXlvdXQ7XG5cdFx0cHJpdmF0ZSBzdGF0aWMgc3RhY2tMYXlvdXQ6IE9PLnVpLlN0YWNrTGF5b3V0O1xuXHRcdHByaXZhdGUgJGJvZHk6IEpRdWVyeSB8IHVuZGVmaW5lZDtcblxuXHRcdHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcblx0XHRcdHN1cGVyKHtcblx0XHRcdFx0c2l6ZTogJ21lZGl1bScsXG5cdFx0XHR9KTtcblx0XHR9XG5cdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNsYXNzLW1ldGhvZHMtdXNlLXRoaXNcblx0XHRwdWJsaWMgb3ZlcnJpZGUgZ2V0Qm9keUhlaWdodCgpIHtcblx0XHRcdHJldHVybiAyNTU7XG5cdFx0fVxuXHRcdHB1YmxpYyBvdmVycmlkZSBpbml0aWFsaXplKCkge1xuXHRcdFx0c3VwZXIuaW5pdGlhbGl6ZSgpO1xuXHRcdFx0RGlhbG9nLmVkaXRQYW5lbCA9IG5ldyBPTy51aS5QYW5lbExheW91dCh7XG5cdFx0XHRcdGV4cGFuZGVkOiBmYWxzZSxcblx0XHRcdH0pO1xuXHRcdFx0Y29uc3QgcmlnaHRMb2dXYXBwZXIgPSAkKCc8c3Bhbj4nKTtcblx0XHRcdGNvbnN0IHVybCA9IG13LnV0aWwuZ2V0VXJsKCdTcGVjaWFsOkxvZy9yaWdodHMnLCB7dHlwZTogJ3JpZ2h0cycsIHBhZ2U6IGBVc2VyOiR7dXNlck5hbWV9YH0pO1xuXHRcdFx0JCgnPGE+Jylcblx0XHRcdFx0LnRleHQod2dVTFMoJ+acgOi/keadg+mZkOaXpeW/lycsICfmnIDov5HmrIrpmZDml6XoqownKSlcblx0XHRcdFx0LmF0dHIoe2hyZWY6IHVybCwgdGFyZ2V0OiAnX2JsYW5rJ30pXG5cdFx0XHRcdC5hcHBlbmRUbyhyaWdodExvZ1dhcHBlcik7XG5cdFx0XHRyaWdodExvZ1dhcHBlci5hcHBlbmQoJ++8micpO1xuXHRcdFx0Y29uc3QgcmlnaHRMb2dUZXh0ID0gJCgnPHNwYW4+JykudGV4dCh3Z1VMUygn6I635Y+W5LitJywgJ+WPluW+l+S4rScpKS5hcHBlbmRUbyhyaWdodExvZ1dhcHBlcik7XG5cdFx0XHREaWFsb2cucmlnaHRMb2cgPSBuZXcgT08udWkuTGFiZWxXaWRnZXQoe1xuXHRcdFx0XHRsYWJlbDogcmlnaHRMb2dXYXBwZXIsXG5cdFx0XHR9KTtcblx0XHRcdERpYWxvZy5lZGl0UGFuZWwuJGVsZW1lbnQuYXBwZW5kKERpYWxvZy5yaWdodExvZy4kZWxlbWVudCk7XG5cblx0XHRcdGNvbnN0IHF1ZXJ5TG9nRXZlbnRzUGFyYW1zOiBBcGlRdWVyeUxvZ0V2ZW50c1BhcmFtcyA9IHtcblx0XHRcdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdFx0bGlzdDogJ2xvZ2V2ZW50cycsXG5cdFx0XHRcdGxlYWN0aW9uOiAncmlnaHRzL3JpZ2h0cycsXG5cdFx0XHRcdGxldGl0bGU6IGBVc2VyOiR7dXNlck5hbWV9YCxcblx0XHRcdFx0bGVsaW1pdDogMSxcblx0XHRcdH07XG5cblx0XHRcdHZvaWQgYXBpLmdldChxdWVyeUxvZ0V2ZW50c1BhcmFtcykuZG9uZSgoZGF0YSkgPT4ge1xuXHRcdFx0XHRjb25zdCB7bG9nZXZlbnRzOiBsb2dzfSA9IGRhdGFbJ3F1ZXJ5J10gYXMge1xuXHRcdFx0XHRcdGxvZ2V2ZW50czoge1xuXHRcdFx0XHRcdFx0cGFyYW1zOiB7XG5cdFx0XHRcdFx0XHRcdG5ld2dyb3Vwczogc3RyaW5nW107XG5cdFx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdFx0dXNlcjogc3RyaW5nO1xuXHRcdFx0XHRcdH1bXTtcblx0XHRcdFx0fTtcblx0XHRcdFx0aWYgKGxvZ3MubGVuZ3RoID09PSAwIHx8ICFsb2dzWzBdKSB7XG5cdFx0XHRcdFx0cmlnaHRMb2dUZXh0LnRleHQod2dVTFMoJ+ayoeacieS7u+S9leaXpeW/lycsICfmspLmnInku7vkvZXml6XoqownKSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Ly8gQHRzLWV4cGVjdC1lcnJvciBUUzIzMDRcblx0XHRcdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVuc2FmZS1jYWxsLCBuZXctY2FwXG5cdFx0XHRcdFx0Y29uc3QgdGltZXN0YW1wID0gbmV3IE1vcmViaXRzLmRhdGUobG9nc1swXS50aW1lc3RhbXApLmNhbGVuZGFyKCkgYXMgc3RyaW5nO1xuXHRcdFx0XHRcdGNvbnN0IHJpZ2h0cyA9IGxvZ3NbMF0ucGFyYW1zLm5ld2dyb3Vwcy5qb2luKCfjgIEnKSB8fCB3Z1VMUygn77yI5peg77yJJywgJ++8iOeEoe+8iScpO1xuXHRcdFx0XHRcdHJpZ2h0TG9nVGV4dC50ZXh0KFxuXHRcdFx0XHRcdFx0YCR7dGltZXN0YW1wfSAke2xvZ3NbMF0udXNlcn0ke3dnVUxTKCflsIbnlKjmiLfnu4TmlLnkuLonLCAn5bCH5L2/55So6ICF576k57WE5pS554K6Jyl9JHtyaWdodHN9YFxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXG5cdFx0XHREaWFsb2cuZWRpdEZpZWxkc2V0ID0gbmV3IE9PLnVpLkZpZWxkc2V0TGF5b3V0KHtcblx0XHRcdFx0Y2xhc3NlczogWydjb250YWluZXInXSxcblx0XHRcdH0pO1xuXHRcdFx0RGlhbG9nLmVkaXRQYW5lbC4kZWxlbWVudC5hcHBlbmQoRGlhbG9nLmVkaXRGaWVsZHNldC4kZWxlbWVudCk7XG5cblx0XHRcdERpYWxvZy5yaWdodHNDaGFuZ2VTdW1tYXJ5SW5wdXQgPSBuZXcgT08udWkuVGV4dElucHV0V2lkZ2V0KHtcblx0XHRcdFx0dmFsdWU6ICcnLFxuXHRcdFx0XHRwbGFjZWhvbGRlcjogJ+WPr+eVmeepuicsXG5cdFx0XHR9KTtcblx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW5zYWZlLWNhbGwsIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcblx0XHRcdERpYWxvZy5leHBpcnlJbnB1dCA9IG5ldyAobXcgYXMgYW55KS53aWRnZXRzLkV4cGlyeVdpZGdldCh7XG5cdFx0XHRcdCRvdmVybGF5OiAkYm9keS5maW5kKCcub28tdWktd2luZG93JyksXG5cdFx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW5zYWZlLWFzc2lnbm1lbnQsIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcblx0XHRcdFx0UmVsYXRpdmVJbnB1dENsYXNzOiAobXcgYXMgYW55KS53aWRnZXRzLlNlbGVjdFdpdGhJbnB1dFdpZGdldCxcblx0XHRcdFx0cmVsYXRpdmVJbnB1dDoge1xuXHRcdFx0XHRcdG9yOiB0cnVlLFxuXHRcdFx0XHRcdGRyb3Bkb3duaW5wdXQ6IHtcblx0XHRcdFx0XHRcdG9wdGlvbnM6IFtcblx0XHRcdFx0XHRcdFx0e2RhdGE6ICcxIGRheScsIGxhYmVsOiAnMeWkqSd9LFxuXHRcdFx0XHRcdFx0XHR7ZGF0YTogJzEgd2VlaycsIGxhYmVsOiB3Z1VMUygnMeWRqCcsICcx6YCxJyl9LFxuXHRcdFx0XHRcdFx0XHR7ZGF0YTogJzEgbW9udGgnLCBsYWJlbDogd2dVTFMoJzHkuKrmnIgnLCAnMeWAi+aciCcpfSxcblx0XHRcdFx0XHRcdFx0e2RhdGE6ICczIG1vbnRocycsIGxhYmVsOiB3Z1VMUygnM+S4quaciCcsICcz5YCL5pyIJyl9LFxuXHRcdFx0XHRcdFx0XHR7ZGF0YTogJzYgbW9udGhzJywgbGFiZWw6IHdnVUxTKCc25Liq5pyIJywgJzblgIvmnIgnKX0sXG5cdFx0XHRcdFx0XHRcdHtkYXRhOiAnMSB5ZWFyJywgbGFiZWw6ICcx5bm0J30sXG5cdFx0XHRcdFx0XHRcdHtkYXRhOiAnaW5maW5pdGUnLCBsYWJlbDogd2dVTFMoJ+ayoeacieacn+mZkCcsICfmspLmnInmnJ/pmZAnKX0sXG5cdFx0XHRcdFx0XHRcdHtkYXRhOiAnb3RoZXInLCBsYWJlbDogd2dVTFMoJ+WFtuS7luaXtumXtCcsICflhbbku5bmmYLplpMnKX0sXG5cdFx0XHRcdFx0XHRdLFxuXHRcdFx0XHRcdFx0dmFsdWU6ICdpbmZpbml0ZScsXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR0ZXh0aW5wdXQ6IHtcblx0XHRcdFx0XHRcdHJlcXVpcmVkOiB0cnVlLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdH0sXG5cdFx0XHR9KSBhcyBPTy51aS5XaWRnZXQ7XG5cdFx0XHREaWFsb2cuY2xvc2luZ1JlbWFya3NJbnB1dCA9IG5ldyBPTy51aS5UZXh0SW5wdXRXaWRnZXQoe1xuXHRcdFx0XHR2YWx1ZTogJ3t7ZG9uZX19LS1+fn5+Jyxcblx0XHRcdH0pO1xuXHRcdFx0RGlhbG9nLndhdGNoVGFsa1BhZ2VDaGVja2JveCA9IG5ldyBPTy51aS5DaGVja2JveElucHV0V2lkZ2V0KHtcblx0XHRcdFx0c2VsZWN0ZWQ6IGZhbHNlLFxuXHRcdFx0fSk7XG5cdFx0XHRjb25zdCBmb3JtRWxlbWVudHMgPSBbXG5cdFx0XHRcdG5ldyBPTy51aS5GaWVsZExheW91dChEaWFsb2cucmlnaHRzQ2hhbmdlU3VtbWFyeUlucHV0LCB7XG5cdFx0XHRcdFx0bGFiZWw6IHdnVUxTKCfmjojmnYPljp/lm6AnLCAn5o6I5qyK5Y6f5ZugJyksXG5cdFx0XHRcdH0pLFxuXHRcdFx0XHRuZXcgT08udWkuRmllbGRMYXlvdXQoRGlhbG9nLmV4cGlyeUlucHV0LCB7XG5cdFx0XHRcdFx0bGFiZWw6IHdnVUxTKCfnu5PmnZ/ml7bpl7QnLCAn57WQ5p2f5pmC6ZaTJyksXG5cdFx0XHRcdH0pLFxuXHRcdFx0XHRuZXcgT08udWkuRmllbGRMYXlvdXQoRGlhbG9nLmNsb3NpbmdSZW1hcmtzSW5wdXQsIHtcblx0XHRcdFx0XHRsYWJlbDogd2dVTFMoJ+WFs+mXreivt+axgueVmeiogCcsICfpl5zplonoq4vmsYLnlZnoqIAnKSxcblx0XHRcdFx0fSksXG5cdFx0XHRdO1xuXHRcdFx0aWYgKHBlcm1pc3Npb25UZW1wbGF0ZSkge1xuXHRcdFx0XHRmb3JtRWxlbWVudHMucHVzaChcblx0XHRcdFx0XHRuZXcgT08udWkuRmllbGRMYXlvdXQoRGlhbG9nLndhdGNoVGFsa1BhZ2VDaGVja2JveCwge1xuXHRcdFx0XHRcdFx0bGFiZWw6IHdnVUxTKCfnm5Hop4bnlKjmiLforqjorrrpobUnLCAn55uj6KaW5L2/55So6ICF6KiO6KuW6aCBJyksXG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHRcdERpYWxvZy5lZGl0RmllbGRzZXQuYWRkSXRlbXMoZm9ybUVsZW1lbnRzKTtcblx0XHRcdERpYWxvZy5zdWJtaXRQYW5lbCA9IG5ldyBPTy51aS5QYW5lbExheW91dCh7XG5cdFx0XHRcdGV4cGFuZGVkOiBmYWxzZSxcblx0XHRcdH0pO1xuXHRcdFx0RGlhbG9nLnN1Ym1pdEZpZWxkc2V0ID0gbmV3IE9PLnVpLkZpZWxkc2V0TGF5b3V0KHtcblx0XHRcdFx0Y2xhc3NlczogWydjb250YWluZXInXSxcblx0XHRcdH0pO1xuXHRcdFx0RGlhbG9nLnN1Ym1pdFBhbmVsLiRlbGVtZW50LmFwcGVuZChEaWFsb2cuc3VibWl0RmllbGRzZXQuJGVsZW1lbnQpO1xuXHRcdFx0RGlhbG9nLnN1Ym1pdFBhbmVsLiRlbGVtZW50LmFwcGVuZChEaWFsb2cuc3VibWl0RmllbGRzZXQuJGVsZW1lbnQpO1xuXHRcdFx0RGlhbG9nLnN0YWNrTGF5b3V0ID0gbmV3IE9PLnVpLlN0YWNrTGF5b3V0KHtcblx0XHRcdFx0aXRlbXM6IFtEaWFsb2cuZWRpdFBhbmVsLCBEaWFsb2cuc3VibWl0UGFuZWxdLFxuXHRcdFx0XHRwYWRkZWQ6IHRydWUsXG5cdFx0XHR9KTtcblx0XHRcdCh0aGlzLiRib2R5IGFzIEpRdWVyeSkuYXBwZW5kKERpYWxvZy5zdGFja0xheW91dC4kZWxlbWVudCk7XG5cblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH1cblx0XHRwdWJsaWMgc3RhdGljIG9uU3VibWl0KCkge1xuXHRcdFx0dm9pZCBtYXJrQXNEb25lKHt1c2VyTmFtZSwgaW5kZXgsIGNsb3NpbmdSZW1hcmtzOiBgXFxuOiR7RGlhbG9nLmNsb3NpbmdSZW1hcmtzSW5wdXQuZ2V0VmFsdWUoKX1gfSlcblx0XHRcdFx0LnRoZW4oKGRhdGEpID0+IHtcblx0XHRcdFx0XHR2b2lkIGFzc2lnblBlcm1pc3Npb24oe1xuXHRcdFx0XHRcdFx0dXNlck5hbWUsXG5cdFx0XHRcdFx0XHRwZXJtaXNzaW9uLFxuXHRcdFx0XHRcdFx0c3VtbWFyeTogRGlhbG9nLnJpZ2h0c0NoYW5nZVN1bW1hcnlJbnB1dC5nZXRWYWx1ZSgpLFxuXHRcdFx0XHRcdFx0cmV2SWQ6IE51bWJlci5wYXJzZUludChkYXRhWydlZGl0J10ubmV3cmV2aWQgYXMgc3RyaW5nLCAxMCksXG5cdFx0XHRcdFx0XHRleHBpcnk6IChEaWFsb2cuZXhwaXJ5SW5wdXQgYXMgT08udWkuVGV4dElucHV0V2lkZ2V0KS5nZXRWYWx1ZSgpLFxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9KVxuXHRcdFx0XHQudGhlbigoKSA9PiB7XG5cdFx0XHRcdFx0dm9pZCBpc3N1ZVRlbXBsYXRlKHt1c2VyTmFtZSwgcGVybWlzc2lvbiwgd2F0Y2g6IERpYWxvZy53YXRjaFRhbGtQYWdlQ2hlY2tib3guaXNTZWxlY3RlZCgpfSk7XG5cdFx0XHRcdH0pXG5cdFx0XHRcdC50aGVuKCgpID0+IHtcblx0XHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0XHRcdGxvY2F0aW9uLnJlbG9hZCgpO1xuXHRcdFx0XHRcdH0sIDEwMDApO1xuXHRcdFx0XHR9KTtcblxuXHRcdFx0RGlhbG9nLnN0YWNrTGF5b3V0LnNldEl0ZW0oRGlhbG9nLnN1Ym1pdFBhbmVsKTtcblx0XHR9XG5cdFx0c3RhdGljIHB1c2hQZW5kaW5nKCkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdNZXRob2Qgbm90IGltcGxlbWVudGVkLicpO1xuXHRcdH1cblx0XHRzdGF0aWMgcG9wUGVuZGluZygpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcignTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC4nKTtcblx0XHR9XG5cblx0XHRwdWJsaWMgb3ZlcnJpZGUgZ2V0QWN0aW9uUHJvY2VzcyhhY3Rpb24/OiBzdHJpbmcpOiBPTy51aS5Qcm9jZXNzIHtcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdHN1cGVyXG5cdFx0XHRcdFx0LmdldEFjdGlvblByb2Nlc3MoYWN0aW9uKVxuXHRcdFx0XHRcdC8vIEB0cy1leHBlY3QtZXJyb3IgVFM3MDMwXG5cdFx0XHRcdFx0Lm5leHQoZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdFx0aWYgKGFjdGlvbiA9PT0gJ3N1Ym1pdCcpIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIERpYWxvZy5vblN1Ym1pdCgpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0cmV0dXJuIERpYWxvZy5zdXBlci5wcm90b3R5cGUuZ2V0QWN0aW9uUHJvY2Vzcy5jYWxsKHRoaXMsIGFjdGlvbik7XG5cdFx0XHRcdFx0fSwgdGhpcylcblx0XHRcdCk7XG5cdFx0fVxuXHR9XG5cdERpYWxvZy5zdGF0aWMgPSB7XG5cdFx0Li4uT08udWkuUHJvY2Vzc0RpYWxvZy5zdGF0aWMsXG5cdH07XG5cdERpYWxvZy5zdGF0aWMubmFtZSA9ICd1c2VyLXJpZ2h0cy1tYW5hZ2VyJztcblx0RGlhbG9nLnN0YXRpYy50aXRsZSA9IGDmjojkuogke3Blcm1pc3Npb25OYW1lfSR7d2dVTFMoJ+e7mScsICfntaYnKX0ke3VzZXJOYW1lfWA7XG5cdERpYWxvZy5zdGF0aWMuYWN0aW9ucyA9IFtcblx0XHR7YWN0aW9uOiAnc3VibWl0JywgbGFiZWw6IHdnVUxTKCfmjojmnYMnLCAn5o6I5qyKJyksIGZsYWdzOiBbJ3ByaW1hcnknLCAncHJvZ3Jlc3NpdmUnXX0sXG5cdFx0e2xhYmVsOiAn5Y+W5raIJywgZmxhZ3M6ICdzYWZlJ30sXG5cdF07XG5cblx0Y29uc3QgZGlhbG9nID0gbmV3IERpYWxvZygpO1xuXG5cdGNvbnN0IHdpbmRvd01hbmFnZXIgPSBuZXcgT08udWkuV2luZG93TWFuYWdlcigpO1xuXHQkKCdib2R5JykuYXBwZW5kKHdpbmRvd01hbmFnZXIuJGVsZW1lbnQpO1xuXHR3aW5kb3dNYW5hZ2VyLmFkZFdpbmRvd3MoW2RpYWxvZ10pO1xuXHR2b2lkIHdpbmRvd01hbmFnZXIub3BlbldpbmRvdyhkaWFsb2cpO1xufTtcblxuZXhwb3J0IHtzaG93RGlhbG9nfTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLHFCQUFzQkMsUUFBQSxpQkFBQTs7QUNFdEIsSUFBTUMscUJBQXFCQSxNQUF5QjtBQUNuRCxRQUFNO0lBQUNDO0VBQVUsSUFBSUMsR0FBR0MsT0FBT0MsSUFBSTtBQUVuQyxRQUFNQyxrQkFBa0I7SUFDdkIsNEJBQTRCO0lBQzVCLDRCQUE0QjtJQUM1Qiw0QkFBNEI7SUFDNUIsOEJBQThCO0lBQzlCLDRCQUE0QjtJQUM1QiwwQkFBMEI7SUFDMUIsNEJBQTRCO0lBQzVCLDRCQUE0QjtJQUM1Qiw4QkFBOEI7RUFDL0I7QUFFQSxNQUFJQyxhQUFnQztBQUNwQyxXQUFBQyxLQUFBLEdBQUFDLGtCQUF5Q0MsT0FBT0MsUUFBUUwsZUFBZSxHQUFBRSxLQUFBQyxnQkFBQUcsUUFBQUosTUFBRztBQUExRSxVQUFXLENBQUNLLFVBQVVDLGNBQWMsSUFBQUwsZ0JBQUFELEVBQUE7QUFDbkMsUUFBSUssYUFBYVgsWUFBWTtBQUM1QkssbUJBQWFPO0lBQ2QsT0FBTztBQUNOO0lBQ0Q7RUFD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cyI6IFsiaW1wb3J0X2V4dF9nYWRnZXQyIiwgInJlcXVpcmUiLCAiZ2V0UGFnZVBlcm1pc3Npb25zIiwgIndnUGFnZU5hbWUiLCAibXciLCAiY29uZmlnIiwgImdldCIsICJwYWdlUGVybWlzc2lvbnMiLCAicGVybWlzc2lvbiIsICJfaSIsICJfT2JqZWN0JGVudHJpZXMiLCAiT2JqZWN0IiwgImVudHJpZXMiLCAibGVuZ3RoIiwgInBhZ2VOYW1lIiwgInBhZ2VQZXJtaXNzaW9uIiwgInVzZXJSaWdodHNNYW5hZ2VyU3VtbWFyeSIsICJ2ZXJzaW9uIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgImFwaSIsICJpbml0TXdBcGkiLCAiY29uY2F0IiwgImdldFBlcm1pc3Npb25OYW1lcyIsICJwZXJtaXNzaW9uTmFtZXMiLCAicGF0cm9sbGVyIiwgImF1dG9yZXZpZXdlciIsICJjb25maXJtZWQiLCAiZXZlbnRzcG9uc29yIiwgInRyYW5zd2lraSIsICJ0ZW1wbGF0ZWVkaXRvciIsICJib3QiLCAicGVybWlzc2lvbk5hbWUiLCAiX2kyIiwgIl9PYmplY3QkZW50cmllczIiLCAicmlnaHQiLCAibmFtZSIsICJhc3NpZ25QZXJtaXNzaW9uIiwgInVzZXJOYW1lIiwgInN1bW1hcnkiLCAicmV2SWQiLCAiZXhwaXJ5IiwgInBlcm1hTGluayIsICJmdWxsU3VtbWFyeSIsICJwYXJhbXMiLCAiYWN0aW9uIiwgInVzZXIiLCAicmVwbGFjZSIsICJyZWFzb24iLCAiYWRkIiwgInJlbW92ZSIsICJwb3N0V2l0aFRva2VuIiwgImdldFBlcm1pc3Npb25UZW1wbGF0ZSIsICJwZXJtaXNzaW9uVGVtcGxhdGVzIiwgInRlbXBsYXRlIiwgIl9pMyIsICJfT2JqZWN0JGVudHJpZXMzIiwgInRlbXBsYXRlTmFtZSIsICJpc3N1ZVRlbXBsYXRlIiwgIndhdGNoIiwgInBlcm1pc3Npb25UZW1wbGF0ZSIsICJ0YWxrUGFnZSIsICJmb3JtYXQiLCAidGl0bGUiLCAiYXBwZW5kdGV4dCIsICJ3YXRjaGxpc3QiLCAicG9zdFdpdGhFZGl0VG9rZW4iLCAidGFnTGluZSIsICJxdWVyeVJldmlzaW9ucyIsICJfcmVmIiwgIl9hc3luY1RvR2VuZXJhdG9yIiwgInRpdGxlcyIsICJydnNlY3Rpb24iLCAiZm9ybWF0dmVyc2lvbiIsICJwcm9wIiwgImN1cnRpbWVzdGFtcCIsICJydnByb3AiLCAiX3giLCAiX3gyIiwgImFwcGx5IiwgImFyZ3VtZW50cyIsICJtYXJrQXNEb25lIiwgImluZGV4IiwgImNsb3NpbmdSZW1hcmtzIiwgInNlY3Rpb25Ob2RlIiwgImRvY3VtZW50IiwgImdldEVsZW1lbnRCeUlkIiwgInNlY3Rpb25OdW1iZXIiLCAiJCIsICJzaWJsaW5ncyIsICJmaW5kIiwgIm1hdGNoIiwgImJhc2V0aW1lc3RhbXAiLCAiY29udGVudCIsICJyZXZpc2lvbiIsICJ0aGVuIiwgImRhdGEiLCAicGFnZXMiLCAiRGVmZXJyZWQiLCAicmVqZWN0IiwgInBhZ2UiLCAiaW52YWxpZCIsICJtaXNzaW5nIiwgInJldmlzaW9ucyIsICJ0aW1lc3RhbXAiLCAicmVzb2x2ZSIsICJ0cmltIiwgImVkaXRQYXJhbXMiLCAic2VjdGlvbiIsICJ0ZXh0IiwgInN0YXJ0dGltZXN0YW1wIiwgIm5vY3JlYXRlIiwgImFzc2VydCIsICJzaG93RGlhbG9nIiwgInNob3dEaWFsb2cyIiwgIiRib2R5IiwgIndnVUxTIiwgIndpbmRvdyIsICJEaWFsb2ciLCAiT08iLCAidWkiLCAiUHJvY2Vzc0RpYWxvZyIsICJlZGl0UGFuZWwiLCAicmlnaHRMb2ciLCAiZWRpdEZpZWxkc2V0IiwgInJpZ2h0c0NoYW5nZVN1bW1hcnlJbnB1dCIsICJleHBpcnlJbnB1dCIsICJjbG9zaW5nUmVtYXJrc0lucHV0IiwgIndhdGNoVGFsa1BhZ2VDaGVja2JveCIsICJzdWJtaXRQYW5lbCIsICJzdWJtaXRGaWVsZHNldCIsICJzdGFja0xheW91dCIsICJjb25zdHJ1Y3RvciIsICJzaXplIiwgImdldEJvZHlIZWlnaHQiLCAiaW5pdGlhbGl6ZSIsICJQYW5lbExheW91dCIsICJleHBhbmRlZCIsICJyaWdodExvZ1dhcHBlciIsICJ1cmwiLCAidXRpbCIsICJnZXRVcmwiLCAidHlwZSIsICJhdHRyIiwgImhyZWYiLCAidGFyZ2V0IiwgImFwcGVuZFRvIiwgImFwcGVuZCIsICJyaWdodExvZ1RleHQiLCAiTGFiZWxXaWRnZXQiLCAibGFiZWwiLCAiJGVsZW1lbnQiLCAicXVlcnlMb2dFdmVudHNQYXJhbXMiLCAibGlzdCIsICJsZWFjdGlvbiIsICJsZXRpdGxlIiwgImxlbGltaXQiLCAiZG9uZSIsICJsb2dldmVudHMiLCAibG9ncyIsICJNb3JlYml0cyIsICJkYXRlIiwgImNhbGVuZGFyIiwgInJpZ2h0cyIsICJuZXdncm91cHMiLCAiam9pbiIsICJGaWVsZHNldExheW91dCIsICJjbGFzc2VzIiwgIlRleHRJbnB1dFdpZGdldCIsICJ2YWx1ZSIsICJwbGFjZWhvbGRlciIsICJ3aWRnZXRzIiwgIkV4cGlyeVdpZGdldCIsICIkb3ZlcmxheSIsICJSZWxhdGl2ZUlucHV0Q2xhc3MiLCAiU2VsZWN0V2l0aElucHV0V2lkZ2V0IiwgInJlbGF0aXZlSW5wdXQiLCAib3IiLCAiZHJvcGRvd25pbnB1dCIsICJvcHRpb25zIiwgInRleHRpbnB1dCIsICJyZXF1aXJlZCIsICJDaGVja2JveElucHV0V2lkZ2V0IiwgInNlbGVjdGVkIiwgImZvcm1FbGVtZW50cyIsICJGaWVsZExheW91dCIsICJwdXNoIiwgImFkZEl0ZW1zIiwgIlN0YWNrTGF5b3V0IiwgIml0ZW1zIiwgInBhZGRlZCIsICJvblN1Ym1pdCIsICJnZXRWYWx1ZSIsICJOdW1iZXIiLCAicGFyc2VJbnQiLCAibmV3cmV2aWQiLCAiaXNTZWxlY3RlZCIsICJzZXRUaW1lb3V0IiwgImxvY2F0aW9uIiwgInJlbG9hZCIsICJzZXRJdGVtIiwgInB1c2hQZW5kaW5nIiwgIkVycm9yIiwgInBvcFBlbmRpbmciLCAiZ2V0QWN0aW9uUHJvY2VzcyIsICJuZXh0IiwgInN1cGVyIiwgInByb3RvdHlwZSIsICJjYWxsIiwgInN0YXRpYyIsICJhY3Rpb25zIiwgImZsYWdzIiwgImRpYWxvZyIsICJ3aW5kb3dNYW5hZ2VyIiwgIldpbmRvd01hbmFnZXIiLCAiYWRkV2luZG93cyIsICJvcGVuV2luZG93IiwgImdldEJvZHkiLCAib24iLCAiZXZlbnQiLCAiXyRlbGVtZW50JHBhcmVudHMkcHJlIiwgInByZXZlbnREZWZhdWx0IiwgImdldFBhcmFtVmFsdWUiLCAic2VjdGlvbklkIiwgInBhcmVudHMiLCAicHJldiJdCn0K

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
      rvprop: ["content", "timestamp"],
      rvslots: "main"
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
    wgPageName,
    wgUserName
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
        slots: {
          main: {
            content
          }
        },
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
    if (wgUserName) {
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1VzZXJSaWdodHNNYW5hZ2VyL1VzZXJSaWdodHNNYW5hZ2VyLnRzIiwgInNyYy9Vc2VyUmlnaHRzTWFuYWdlci9tb2R1bGVzL2dldFBhZ2VQZXJtaXNzaW9ucy50cyIsICJzcmMvVXNlclJpZ2h0c01hbmFnZXIvb3B0aW9ucy5qc29uIiwgInNyYy9Vc2VyUmlnaHRzTWFuYWdlci9tb2R1bGVzL2FwaS50cyIsICJzcmMvVXNlclJpZ2h0c01hbmFnZXIvbW9kdWxlcy9nZXRQZXJtaXNzaW9uTmFtZXMudHMiLCAic3JjL1VzZXJSaWdodHNNYW5hZ2VyL21vZHVsZXMvYXNzaWduUGVybWlzc2lvbi50cyIsICJzcmMvVXNlclJpZ2h0c01hbmFnZXIvbW9kdWxlcy9nZXRUZW1wbGF0ZXMudHMiLCAic3JjL1VzZXJSaWdodHNNYW5hZ2VyL21vZHVsZXMvaXNzdWVUZW1wbGF0ZS50cyIsICJzcmMvVXNlclJpZ2h0c01hbmFnZXIvbW9kdWxlcy9tYXJrQXNEb25lLnRzIiwgInNyYy9Vc2VyUmlnaHRzTWFuYWdlci9tb2R1bGVzL3Nob3dEaWFsb2cudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7Z2V0Qm9keX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbmltcG9ydCB7Z2V0UGFnZVBlcm1pc3Npb25zfSBmcm9tICcuL21vZHVsZXMvZ2V0UGFnZVBlcm1pc3Npb25zJztcbmltcG9ydCB7c2hvd0RpYWxvZ30gZnJvbSAnLi9tb2R1bGVzL3Nob3dEaWFsb2cnO1xuXG52b2lkIGdldEJvZHkoKS50aGVuKCgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkID0+IHtcblx0Y29uc3QgcGVybWlzc2lvbiA9IGdldFBhZ2VQZXJtaXNzaW9ucygpO1xuXHRpZiAoIXBlcm1pc3Npb24pIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHQkYm9keS5maW5kKCcucGVybS1hc3NpZ24tcGVybWlzc2lvbnMgYScpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCkge1xuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cblx0XHRjb25zdCAkZWxlbWVudDogSlF1ZXJ5PEhUTUxBbmNob3JFbGVtZW50PiA9ICQodGhpcyBhcyBIVE1MQW5jaG9yRWxlbWVudCk7XG5cdFx0Y29uc3QgdXNlck5hbWUgPSBtdy51dGlsLmdldFBhcmFtVmFsdWUoJ3VzZXInLCAkZWxlbWVudC5hdHRyKCdocmVmJykpO1xuXHRcdGlmICghdXNlck5hbWUpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRjb25zdCBzZWN0aW9uSWQ6IHN0cmluZyA9ICRlbGVtZW50LnBhcmVudHMoJ2RsJykucHJldignaDQnKS5maW5kKCcubXctaGVhZGxpbmUnKS5hdHRyKCdpZCcpID8/ICcnO1xuXHRcdGNvbnN0IGluZGV4OiBzdHJpbmcgPVxuXHRcdFx0c2VjdGlvbklkID09PSBgVXNlcjoke3VzZXJOYW1lfWAgfHwgc2VjdGlvbklkID09PSBgVXNlcjoke3VzZXJOYW1lfWAucmVwbGFjZSgvXCIvZywgJy4yMicpLnJlcGxhY2UoLyAvZywgJ18nKVxuXHRcdFx0XHQ/ICcnXG5cdFx0XHRcdDogc2VjdGlvbklkXG5cdFx0XHRcdFx0XHQucmVwbGFjZSgnVXNlcjonLCAnJylcblx0XHRcdFx0XHRcdC5yZXBsYWNlKHVzZXJOYW1lLCAnJylcblx0XHRcdFx0XHRcdC5yZXBsYWNlKHVzZXJOYW1lLnJlcGxhY2UoL1wiL2csICcuMjInKS5yZXBsYWNlKC8gL2csICdfJyksICcnKTtcblxuXHRcdHNob3dEaWFsb2coeyRib2R5LCB1c2VyTmFtZSwgcGVybWlzc2lvbiwgaW5kZXh9KTtcblx0fSk7XG59KTtcbiIsICJpbXBvcnQgdHlwZSB7VXNlclJpZ2h0c30gZnJvbSAnfi9NYXJrUmlnaHRzL21vZHVsZXMvdHlwZXMnO1xuXG5jb25zdCBnZXRQYWdlUGVybWlzc2lvbnMgPSAoKTogVXNlclJpZ2h0cyB8IG51bGwgPT4ge1xuXHRjb25zdCB7d2dQYWdlTmFtZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cblx0Y29uc3QgcGFnZVBlcm1pc3Npb25zID0ge1xuXHRcdCdRaXV3ZW5fdGFsazrmnYPpmZDnlLPor7cv55Sz6K+35beh5p+l5Zue6YCA5p2DJzogJ3BhdHJvbGxlcicsXG5cdFx0J1FpdXdlbl90YWxrOuadg+mZkOeUs+ivty/nlLPor7flt6Hmn6XosYHlhY3mnYMnOiAnYXV0b3Jldmlld2VyJyxcblx0XHQnUWl1d2VuX3RhbGs65p2D6ZmQ55Sz6K+3L+eUs+ivt+ehruiupOeUqOaIt+adgyc6ICdjb25maXJtZWQnLFxuXHRcdCdRaXV3ZW5fdGFsazrmnYPpmZDnlLPor7cv55Sz6K+35aSn6YeP5raI5oGv5Y+R6YCB5p2DJzogJ21hc3NtZXNzYWdlLXNlbmRlcicsXG5cdFx0J1FpdXdlbl90YWxrOuadg+mZkOeUs+ivty/nlLPor7fmtLvliqjnu4Tnu4fmnYMnOiAnZXZlbnRzcG9uc29yJyxcblx0XHQnUWl1d2VuX3RhbGs65p2D6ZmQ55Sz6K+3L+eUs+ivt+WvvOWFpeadgyc6ICd0cmFuc3dpa2knLFxuXHRcdCdRaXV3ZW5fdGFsazrmnYPpmZDnlLPor7cv55Sz6K+35qih5p2/57yW6L6R5p2DJzogJ3RlbXBsYXRlZWRpdG9yJyxcblx0XHQnUWl1d2VuX3RhbGs65p2D6ZmQ55Sz6K+3L+eUs+ivt+acuuWZqOS6uuadg+mZkCc6ICdib3QnLFxuXHRcdCdRaXV3ZW5fdGFsazrmnYPpmZDnlLPor7cv55Sz6K+35a6e5ZCN5Yi26aqM6K+B6LGB5YWNJzogJ3JucnN2ZXJpZnktZXhlbXB0Jyxcblx0fSBhcyBjb25zdCBzYXRpc2ZpZXMgUGFydGlhbDxSZWNvcmQ8c3RyaW5nLCBVc2VyUmlnaHRzPj47XG5cblx0bGV0IHBlcm1pc3Npb246IFVzZXJSaWdodHMgfCBudWxsID0gbnVsbDtcblx0Zm9yIChjb25zdCBbcGFnZU5hbWUsIHBhZ2VQZXJtaXNzaW9uXSBvZiBPYmplY3QuZW50cmllcyhwYWdlUGVybWlzc2lvbnMpKSB7XG5cdFx0aWYgKHBhZ2VOYW1lID09PSB3Z1BhZ2VOYW1lKSB7XG5cdFx0XHRwZXJtaXNzaW9uID0gcGFnZVBlcm1pc3Npb247XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBwZXJtaXNzaW9uO1xufTtcblxuZXhwb3J0IHtnZXRQYWdlUGVybWlzc2lvbnN9O1xuIiwgIntcblx0XCJ1c2VyUmlnaHRzTWFuYWdlclN1bW1hcnlcIjogXCLvvIhbW01lZGlhV2lraTpHYWRnZXQtVXNlclJpZ2h0c01hbmFnZXIuanN8VXNlclJpZ2h0c01hbmFnZXJdXe+8iVwiLFxuXHRcInZlcnNpb25cIjogXCIyLjBcIlxufVxuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7aW5pdE13QXBpfSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG5jb25zdCBhcGk6IG13LkFwaSA9IGluaXRNd0FwaShgbW9yZWJpdHMuanM7IFVzZXJSaWdodHNNYW5hZ2VyLyR7T1BUSU9OUy52ZXJzaW9ufWApO1xuXG5leHBvcnQge2FwaX07XG4iLCAiaW1wb3J0IHR5cGUge1VzZXJSaWdodHN9IGZyb20gJ34vTWFya1JpZ2h0cy9tb2R1bGVzL3R5cGVzJztcblxuY29uc3QgZ2V0UGVybWlzc2lvbk5hbWVzID0gKHBlcm1pc3Npb246IFVzZXJSaWdodHMpOiBzdHJpbmcgfCBudWxsID0+IHtcblx0Y29uc3QgcGVybWlzc2lvbk5hbWVzID0ge1xuXHRcdHBhdHJvbGxlcjogJ+W3oeafpeWRmCcsXG5cdFx0YXV0b3Jldmlld2VyOiAn5beh5p+l6LGB5YWN6ICFJyxcblx0XHRjb25maXJtZWQ6ICfnoa7orqTnlKjmiLcnLFxuXHRcdCdtYXNzbWVzc2FnZS1zZW5kZXInOiAn5aSn6YeP5raI5oGv5Y+R6YCB6ICFJyxcblx0XHRldmVudHNwb25zb3I6ICfmtLvliqjnu4Tnu4fogIUnLFxuXHRcdHRyYW5zd2lraTogJ+WvvOWFpeiAhScsXG5cdFx0dGVtcGxhdGVlZGl0b3I6ICfmqKHmnb/nvJbovpHlkZgnLFxuXHRcdGJvdDogJ+acuuWZqOS6uicsXG5cdFx0J3JucnN2ZXJpZnktZXhlbXB0JzogJ+WunuWQjeWItumqjOivgeixgeWFjScsXG5cdH0gYXMgY29uc3Qgc2F0aXNmaWVzIFBhcnRpYWw8UmVjb3JkPFVzZXJSaWdodHMsIHN0cmluZz4+O1xuXG5cdGxldCBwZXJtaXNzaW9uTmFtZTogc3RyaW5nIHwgbnVsbCA9IG51bGw7XG5cdGZvciAoY29uc3QgW3JpZ2h0LCBuYW1lXSBvZiBPYmplY3QuZW50cmllcyhwZXJtaXNzaW9uTmFtZXMpKSB7XG5cdFx0aWYgKHBlcm1pc3Npb24gPT09IHJpZ2h0KSB7XG5cdFx0XHRwZXJtaXNzaW9uTmFtZSA9IG5hbWU7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBwZXJtaXNzaW9uTmFtZTtcbn07XG5cbmV4cG9ydCB7Z2V0UGVybWlzc2lvbk5hbWVzfTtcbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge1VzZXJSaWdodHN9IGZyb20gJ34vTWFya1JpZ2h0cy9tb2R1bGVzL3R5cGVzJztcbmltcG9ydCB7YXBpfSBmcm9tICcuL2FwaSc7XG5pbXBvcnQge2dldFBlcm1pc3Npb25OYW1lc30gZnJvbSAnLi9nZXRQZXJtaXNzaW9uTmFtZXMnO1xuXG5jb25zdCBhc3NpZ25QZXJtaXNzaW9uID0gKHtcblx0dXNlck5hbWUsXG5cdHBlcm1pc3Npb24sXG5cdHN1bW1hcnksXG5cdHJldklkLFxuXHRleHBpcnksXG59OiB7XG5cdHVzZXJOYW1lOiBzdHJpbmc7XG5cdHBlcm1pc3Npb246IFVzZXJSaWdodHM7XG5cdHN1bW1hcnk6IHN0cmluZztcblx0cmV2SWQ6IG51bWJlcjtcblx0ZXhwaXJ5OiBzdHJpbmc7XG59KSA9PiB7XG5cdGNvbnN0IHBlcm1hTGluayA9IGBbW1NwZWNpYWw6UGVybWFMaW5rLyR7cmV2SWR9I1VzZXI6JHt1c2VyTmFtZX185p2D6ZmQ55Sz6K+3XV1gO1xuXHRsZXQgZnVsbFN1bW1hcnkgPSBgKyR7Z2V0UGVybWlzc2lvbk5hbWVzKHBlcm1pc3Npb24pfe+8myR7cGVybWFMaW5rfWA7XG5cdGlmIChzdW1tYXJ5ICE9PSAnJykge1xuXHRcdGZ1bGxTdW1tYXJ5ICs9IGDvvJske3N1bW1hcnl9YDtcblx0fVxuXHRmdWxsU3VtbWFyeSArPSBPUFRJT05TLnVzZXJSaWdodHNNYW5hZ2VyU3VtbWFyeTtcblx0Y29uc3QgcGFyYW1zOiBBcGlVc2VycmlnaHRzUGFyYW1zID0ge1xuXHRcdGFjdGlvbjogJ3VzZXJyaWdodHMnLFxuXHRcdHVzZXI6IHVzZXJOYW1lLnJlcGxhY2UoLyAvZywgJ18nKSxcblx0XHRyZWFzb246IGZ1bGxTdW1tYXJ5LFxuXHRcdC8vIEB0cy1leHBlY3QtZXJyb3IgVFMyMzIyXG5cdFx0YWRkOiBbcGVybWlzc2lvbl0sXG5cdFx0ZXhwaXJ5OiBleHBpcnkgPT09ICcnID8gJ2luZmluaXR5JyA6IGV4cGlyeSxcblx0fTtcblx0aWYgKHBlcm1pc3Npb24gPT09ICdwYXRyb2xsZXInICYmIGV4cGlyeSA9PT0gJ2luZmluaXRlJykge1xuXHRcdHBhcmFtcy5yZW1vdmUgPSAnYXV0b3Jldmlld2VyJztcblx0fVxuXHRyZXR1cm4gYXBpLnBvc3RXaXRoVG9rZW4oJ3VzZXJyaWdodHMnLCBwYXJhbXMpO1xufTtcblxuZXhwb3J0IHthc3NpZ25QZXJtaXNzaW9ufTtcbiIsICJpbXBvcnQgdHlwZSB7VXNlclJpZ2h0c30gZnJvbSAnfi9NYXJrUmlnaHRzL21vZHVsZXMvdHlwZXMnO1xuXG5jb25zdCBnZXRQZXJtaXNzaW9uVGVtcGxhdGUgPSAocGVybWlzc2lvbjogVXNlclJpZ2h0cyk6IHN0cmluZyB8IG51bGwgPT4ge1xuXHRjb25zdCBwZXJtaXNzaW9uVGVtcGxhdGVzID0ge1xuXHRcdHBhdHJvbGxlcjogJ1BhdHJvbCBncmFudGVkJyxcblx0XHRhdXRvcmV2aWV3ZXI6ICdBdXRvcGF0cm9sIGdyYW50ZWQnLFxuXHRcdCdtYXNzbWVzc2FnZS1zZW5kZXInOiAnTU1TIGdyYW50ZWQnLFxuXHRcdHRlbXBsYXRlZWRpdG9yOiAnVGVtcGxhdGUgZWRpdG9yIGdyYW50ZWQnLFxuXHRcdHRyYW5zd2lraTogJ1RyYW5zd2lraSBncmFudGVkJyxcblx0fSBhcyBjb25zdCBzYXRpc2ZpZXMgUGFydGlhbDxSZWNvcmQ8VXNlclJpZ2h0cywgc3RyaW5nPj47XG5cblx0bGV0IHRlbXBsYXRlOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcblx0Zm9yIChjb25zdCBbcGFnZVBlcm1pc3Npb24sIHRlbXBsYXRlTmFtZV0gb2YgT2JqZWN0LmVudHJpZXMocGVybWlzc2lvblRlbXBsYXRlcykpIHtcblx0XHRpZiAocGVybWlzc2lvbiA9PT0gcGFnZVBlcm1pc3Npb24pIHtcblx0XHRcdHRlbXBsYXRlID0gdGVtcGxhdGVOYW1lO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gdGVtcGxhdGU7XG59O1xuXG5leHBvcnQge2dldFBlcm1pc3Npb25UZW1wbGF0ZX07XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtBcGlSZXNwb25zZX0gZnJvbSAndHlwZXMtbWVkaWF3aWtpL213L0FwaSc7XG5pbXBvcnQge1VzZXJSaWdodHN9IGZyb20gJ34vTWFya1JpZ2h0cy9tb2R1bGVzL3R5cGVzJztcbmltcG9ydCB7YXBpfSBmcm9tICcuL2FwaSc7XG5pbXBvcnQge2dldFBlcm1pc3Npb25OYW1lc30gZnJvbSAnLi9nZXRQZXJtaXNzaW9uTmFtZXMnO1xuaW1wb3J0IHtnZXRQZXJtaXNzaW9uVGVtcGxhdGV9IGZyb20gJy4vZ2V0VGVtcGxhdGVzJztcblxuY29uc3QgaXNzdWVUZW1wbGF0ZSA9ICh7XG5cdHVzZXJOYW1lLFxuXHRwZXJtaXNzaW9uLFxuXHR3YXRjaCxcbn06IHtcblx0dXNlck5hbWU6IHN0cmluZztcblx0cGVybWlzc2lvbjogVXNlclJpZ2h0cztcblx0d2F0Y2g6IGJvb2xlYW4gfCAnd2F0Y2gnIHwgJ3Vud2F0Y2gnO1xufSk6IEpRdWVyeS5Qcm9taXNlPEFwaVJlc3BvbnNlPiB8IHZvaWQgPT4ge1xuXHRjb25zdCBwZXJtaXNzaW9uVGVtcGxhdGUgPSBnZXRQZXJtaXNzaW9uVGVtcGxhdGUocGVybWlzc2lvbik7XG5cdGlmICghcGVybWlzc2lvblRlbXBsYXRlKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgcGVybWlzc2lvbk5hbWUgPSBnZXRQZXJtaXNzaW9uTmFtZXMocGVybWlzc2lvbik7XG5cdGNvbnN0IHRhbGtQYWdlID0gYFVzZXIgdGFsazoke3VzZXJOYW1lLnJlcGxhY2UoLyAvZywgJ18nKX1gO1xuXHRjb25zdCBwYXJhbXM6IEFwaUVkaXRQYWdlUGFyYW1zID0ge1xuXHRcdGFjdGlvbjogJ2VkaXQnLFxuXHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdHRpdGxlOiB0YWxrUGFnZSxcblx0XHRhcHBlbmR0ZXh0OiAnXFxuXFxue3snLmNvbmNhdCgnc3Vic3Q6JywgcGVybWlzc2lvblRlbXBsYXRlLCAnfX0nKSxcblx0XHRzdW1tYXJ5OiBg5qC55o2u5YWx6K+G5o6I5LqIJHtwZXJtaXNzaW9uTmFtZX0ke09QVElPTlMudXNlclJpZ2h0c01hbmFnZXJTdW1tYXJ5fWAsXG5cdFx0d2F0Y2hsaXN0OiB3YXRjaCA/ICd3YXRjaCcgOiAndW53YXRjaCcsXG5cdH07XG5cdHJldHVybiBhcGkucG9zdFdpdGhFZGl0VG9rZW4ocGFyYW1zKTtcbn07XG5cbmV4cG9ydCB7aXNzdWVUZW1wbGF0ZX07XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHthcGl9IGZyb20gJy4vYXBpJztcbmNvbnN0IHRhZ0xpbmUgPSBPUFRJT05TLnVzZXJSaWdodHNNYW5hZ2VyU3VtbWFyeTtcblxuY29uc3QgcXVlcnlSZXZpc2lvbnMgPSBhc3luYyAodGl0bGVzOiBzdHJpbmcgfCBzdHJpbmdbXSwgcnZzZWN0aW9uOiBzdHJpbmcpID0+IHtcblx0Y29uc3QgcGFyYW1zOiBBcGlRdWVyeVJldmlzaW9uc1BhcmFtcyA9IHtcblx0XHR0aXRsZXMsXG5cdFx0cnZzZWN0aW9uLFxuXHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0cHJvcDogJ3JldmlzaW9ucycsXG5cdFx0Y3VydGltZXN0YW1wOiB0cnVlLFxuXHRcdHJ2cHJvcDogWydjb250ZW50JywgJ3RpbWVzdGFtcCddLFxuXHRcdHJ2c2xvdHM6ICdtYWluJyxcblx0fTtcblxuXHRyZXR1cm4gYXdhaXQgYXBpLmdldChwYXJhbXMpO1xufTtcblxuY29uc3QgbWFya0FzRG9uZSA9ICh7dXNlck5hbWUsIGluZGV4LCBjbG9zaW5nUmVtYXJrc306IHt1c2VyTmFtZTogc3RyaW5nOyBpbmRleDogc3RyaW5nOyBjbG9zaW5nUmVtYXJrczogc3RyaW5nfSkgPT4ge1xuXHRjb25zdCB7d2dQYWdlTmFtZSwgd2dVc2VyTmFtZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSB1bmljb3JuL3ByZWZlci1xdWVyeS1zZWxlY3RvclxuXHRjb25zdCBzZWN0aW9uTm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuXHRcdGBVc2VyOiR7dXNlck5hbWUucmVwbGFjZSgvXCIvZywgJy4yMicpLnJlcGxhY2UoLyAvZywgJ18nKX0ke2luZGV4ID8/ICcnfWBcblx0KTtcblxuXHRjb25zdCBzZWN0aW9uTnVtYmVyID0gKFxuXHRcdChcblx0XHRcdCQoc2VjdGlvbk5vZGUgYXMgSFRNTEVsZW1lbnQpXG5cdFx0XHRcdC5zaWJsaW5ncygnLm13LWVkaXRzZWN0aW9uJylcblx0XHRcdFx0LmZpbmQoJ2E6bm90KC5tdy1lZGl0c2VjdGlvbi12aXN1YWxlZGl0b3IpW2hyZWYqPWVkaXRdJylcblx0XHRcdFx0LnByb3AoJ2hyZWYnKSBhcyBzdHJpbmdcblx0XHQpLm1hdGNoKC9zZWN0aW9uPShcXGQrKS8pIGFzIFJlZ0V4cE1hdGNoQXJyYXlcblx0KVsxXSBhcyBzdHJpbmc7XG5cblx0bGV0IGJhc2V0aW1lc3RhbXA6IHN0cmluZztcblx0bGV0IGN1cnRpbWVzdGFtcDogc3RyaW5nO1xuXHRsZXQgY29udGVudDogc3RyaW5nO1xuXHRsZXQgcmV2aXNpb247XG5cblx0cmV0dXJuIHF1ZXJ5UmV2aXNpb25zKHdnUGFnZU5hbWUsIHNlY3Rpb25OdW1iZXIpXG5cdFx0LnRoZW4oKGRhdGEpID0+IHtcblx0XHRcdGlmICghZGF0YVsncXVlcnknXSB8fCAhZGF0YVsncXVlcnknXS5wYWdlcykge1xuXHRcdFx0XHRyZXR1cm4gJC5EZWZlcnJlZCgpLnJlamVjdCgndW5rbm93bicpO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCB7cGFnZXN9ID0gZGF0YVsncXVlcnknXSBhcyB7XG5cdFx0XHRcdHBhZ2VzOiB7XG5cdFx0XHRcdFx0aW52YWxpZD86IGJvb2xlYW47XG5cdFx0XHRcdFx0bWlzc2luZz86IGJvb2xlYW47XG5cdFx0XHRcdFx0cmV2aXNpb25zOiB7XG5cdFx0XHRcdFx0XHR0aW1lc3RhbXA6IHN0cmluZztcblx0XHRcdFx0XHRcdHNsb3RzOiB7XG5cdFx0XHRcdFx0XHRcdG1haW46IHtcblx0XHRcdFx0XHRcdFx0XHRjb250ZW50OiBzdHJpbmc7XG5cdFx0XHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdH1bXTtcblx0XHRcdFx0fVtdO1xuXHRcdFx0fTtcblx0XHRcdGNvbnN0IFtwYWdlXSA9IHBhZ2VzO1xuXG5cdFx0XHRpZiAoIXBhZ2UgfHwgcGFnZS5pbnZhbGlkKSB7XG5cdFx0XHRcdHJldHVybiAkLkRlZmVycmVkKCkucmVqZWN0KCdpbnZhbGlkdGl0bGUnKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKHBhZ2UubWlzc2luZykge1xuXHRcdFx0XHRyZXR1cm4gJC5EZWZlcnJlZCgpLnJlamVjdCgnbm9jcmVhdGUtbWlzc2luZycpO1xuXHRcdFx0fVxuXG5cdFx0XHRbcmV2aXNpb25dID0gcGFnZS5yZXZpc2lvbnM7XG5cdFx0XHRpZiAocmV2aXNpb24pIHtcblx0XHRcdFx0KHtcblx0XHRcdFx0XHRzbG90czoge1xuXHRcdFx0XHRcdFx0bWFpbjoge2NvbnRlbnR9LFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0dGltZXN0YW1wOiBiYXNldGltZXN0YW1wLFxuXHRcdFx0XHR9ID0gcmV2aXNpb24pO1xuXHRcdFx0fVxuXHRcdFx0Y3VydGltZXN0YW1wID0gZGF0YVsnY3VydGltZXN0YW1wJ10gYXMgc3RyaW5nO1xuXHRcdFx0cmV0dXJuICQuRGVmZXJyZWQoKS5yZXNvbHZlKCk7XG5cdFx0fSlcblx0XHQudGhlbigoKSA9PiB7XG5cdFx0XHRjb250ZW50ID0gY29udGVudC50cmltKCk7XG5cdFx0XHRjb250ZW50ID0gY29udGVudC5yZXBsYWNlKC8oOlxccyp7e1N0YXR1cykoXFx8Lio/KT99fS9pLCAnJDF8K319Jyk7XG5cdFx0XHRjb250ZW50ICs9IGNsb3NpbmdSZW1hcmtzO1xuXG5cdFx0XHRjb25zdCBlZGl0UGFyYW1zOiBBcGlFZGl0UGFnZVBhcmFtcyA9IHtcblx0XHRcdFx0YWN0aW9uOiAnZWRpdCcsXG5cdFx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0XHRcdHRpdGxlOiB3Z1BhZ2VOYW1lLFxuXHRcdFx0XHRzZWN0aW9uOiBzZWN0aW9uTnVtYmVyLFxuXHRcdFx0XHR0ZXh0OiBjb250ZW50LFxuXHRcdFx0XHRzdW1tYXJ5OiBgLyogVXNlcjoke3VzZXJOYW1lfSAqLyDlrozmiJAke3RhZ0xpbmV9YCxcblx0XHRcdFx0YmFzZXRpbWVzdGFtcCxcblx0XHRcdFx0c3RhcnR0aW1lc3RhbXA6IGN1cnRpbWVzdGFtcCxcblx0XHRcdFx0bm9jcmVhdGU6IHRydWUsXG5cdFx0XHR9O1xuXHRcdFx0aWYgKHdnVXNlck5hbWUpIHtcblx0XHRcdFx0ZWRpdFBhcmFtcy5hc3NlcnQgPSAndXNlcic7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBhcGkucG9zdFdpdGhFZGl0VG9rZW4oZWRpdFBhcmFtcyk7XG5cdFx0fSk7XG59O1xuXG5leHBvcnQge21hcmtBc0RvbmV9O1xuIiwgImltcG9ydCB7VXNlclJpZ2h0c30gZnJvbSAnfi9NYXJrUmlnaHRzL21vZHVsZXMvdHlwZXMnO1xuaW1wb3J0IHthcGl9IGZyb20gJy4vYXBpJztcbmltcG9ydCB7YXNzaWduUGVybWlzc2lvbn0gZnJvbSAnLi9hc3NpZ25QZXJtaXNzaW9uJztcbmltcG9ydCB7Z2V0UGVybWlzc2lvbk5hbWVzfSBmcm9tICcuL2dldFBlcm1pc3Npb25OYW1lcyc7XG5pbXBvcnQge2dldFBlcm1pc3Npb25UZW1wbGF0ZX0gZnJvbSAnLi9nZXRUZW1wbGF0ZXMnO1xuaW1wb3J0IHtpc3N1ZVRlbXBsYXRlfSBmcm9tICcuL2lzc3VlVGVtcGxhdGUnO1xuaW1wb3J0IHttYXJrQXNEb25lfSBmcm9tICcuL21hcmtBc0RvbmUnO1xuXG5jb25zdCBzaG93RGlhbG9nID0gZnVuY3Rpb24gc2hvd0RpYWxvZyh7XG5cdCRib2R5LFxuXHR1c2VyTmFtZSxcblx0cGVybWlzc2lvbixcblx0aW5kZXgsXG59OiB7XG5cdCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pjtcblx0dXNlck5hbWU6IHN0cmluZztcblx0cGVybWlzc2lvbjogVXNlclJpZ2h0cztcblx0aW5kZXg6IHN0cmluZztcbn0pIHtcblx0Y29uc3Qge3dnVUxTfSA9IHdpbmRvdztcblx0Y29uc3QgcGVybWlzc2lvblRlbXBsYXRlID0gZ2V0UGVybWlzc2lvblRlbXBsYXRlKHBlcm1pc3Npb24pO1xuXHRjb25zdCBwZXJtaXNzaW9uTmFtZSA9IGdldFBlcm1pc3Npb25OYW1lcyhwZXJtaXNzaW9uKTtcblxuXHRjbGFzcyBEaWFsb2cgZXh0ZW5kcyBPTy51aS5Qcm9jZXNzRGlhbG9nIHtcblx0XHRwcml2YXRlIHN0YXRpYyBlZGl0UGFuZWw6IE9PLnVpLlBhbmVsTGF5b3V0O1xuXHRcdHByaXZhdGUgc3RhdGljIHJpZ2h0TG9nOiBPTy51aS5MYWJlbFdpZGdldDtcblx0XHRwcml2YXRlIHN0YXRpYyBlZGl0RmllbGRzZXQ6IE9PLnVpLkZpZWxkc2V0TGF5b3V0O1xuXHRcdHByaXZhdGUgc3RhdGljIHJpZ2h0c0NoYW5nZVN1bW1hcnlJbnB1dDogT08udWkuVGV4dElucHV0V2lkZ2V0O1xuXHRcdHByaXZhdGUgc3RhdGljIGV4cGlyeUlucHV0OiBPTy51aS5XaWRnZXQ7XG5cdFx0cHJpdmF0ZSBzdGF0aWMgY2xvc2luZ1JlbWFya3NJbnB1dDogT08udWkuVGV4dElucHV0V2lkZ2V0O1xuXHRcdHByaXZhdGUgc3RhdGljIHdhdGNoVGFsa1BhZ2VDaGVja2JveDogT08udWkuQ2hlY2tib3hJbnB1dFdpZGdldDtcblx0XHRwcml2YXRlIHN0YXRpYyBzdWJtaXRQYW5lbDogT08udWkuUGFuZWxMYXlvdXQ7XG5cdFx0cHJpdmF0ZSBzdGF0aWMgc3VibWl0RmllbGRzZXQ6IE9PLnVpLkZpZWxkc2V0TGF5b3V0O1xuXHRcdHByaXZhdGUgc3RhdGljIHN0YWNrTGF5b3V0OiBPTy51aS5TdGFja0xheW91dDtcblx0XHRwcml2YXRlICRib2R5OiBKUXVlcnkgfCB1bmRlZmluZWQ7XG5cblx0XHRwdWJsaWMgY29uc3RydWN0b3IoKSB7XG5cdFx0XHRzdXBlcih7XG5cdFx0XHRcdHNpemU6ICdtZWRpdW0nLFxuXHRcdFx0fSk7XG5cdFx0fVxuXHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjbGFzcy1tZXRob2RzLXVzZS10aGlzXG5cdFx0cHVibGljIG92ZXJyaWRlIGdldEJvZHlIZWlnaHQoKSB7XG5cdFx0XHRyZXR1cm4gMjU1O1xuXHRcdH1cblx0XHRwdWJsaWMgb3ZlcnJpZGUgaW5pdGlhbGl6ZSgpIHtcblx0XHRcdHN1cGVyLmluaXRpYWxpemUoKTtcblx0XHRcdERpYWxvZy5lZGl0UGFuZWwgPSBuZXcgT08udWkuUGFuZWxMYXlvdXQoe1xuXHRcdFx0XHRleHBhbmRlZDogZmFsc2UsXG5cdFx0XHR9KTtcblx0XHRcdGNvbnN0IHJpZ2h0TG9nV2FwcGVyID0gJCgnPHNwYW4+Jyk7XG5cdFx0XHRjb25zdCB1cmwgPSBtdy51dGlsLmdldFVybCgnU3BlY2lhbDpMb2cvcmlnaHRzJywge3R5cGU6ICdyaWdodHMnLCBwYWdlOiBgVXNlcjoke3VzZXJOYW1lfWB9KTtcblx0XHRcdCQoJzxhPicpXG5cdFx0XHRcdC50ZXh0KHdnVUxTKCfmnIDov5HmnYPpmZDml6Xlv5cnLCAn5pyA6L+R5qyK6ZmQ5pel6KqMJykpXG5cdFx0XHRcdC5hdHRyKHtocmVmOiB1cmwsIHRhcmdldDogJ19ibGFuayd9KVxuXHRcdFx0XHQuYXBwZW5kVG8ocmlnaHRMb2dXYXBwZXIpO1xuXHRcdFx0cmlnaHRMb2dXYXBwZXIuYXBwZW5kKCfvvJonKTtcblx0XHRcdGNvbnN0IHJpZ2h0TG9nVGV4dCA9ICQoJzxzcGFuPicpLnRleHQod2dVTFMoJ+iOt+WPluS4rScsICflj5blvpfkuK0nKSkuYXBwZW5kVG8ocmlnaHRMb2dXYXBwZXIpO1xuXHRcdFx0RGlhbG9nLnJpZ2h0TG9nID0gbmV3IE9PLnVpLkxhYmVsV2lkZ2V0KHtcblx0XHRcdFx0bGFiZWw6IHJpZ2h0TG9nV2FwcGVyLFxuXHRcdFx0fSk7XG5cdFx0XHREaWFsb2cuZWRpdFBhbmVsLiRlbGVtZW50LmFwcGVuZChEaWFsb2cucmlnaHRMb2cuJGVsZW1lbnQpO1xuXG5cdFx0XHRjb25zdCBxdWVyeUxvZ0V2ZW50c1BhcmFtczogQXBpUXVlcnlMb2dFdmVudHNQYXJhbXMgPSB7XG5cdFx0XHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHRcdGxpc3Q6ICdsb2dldmVudHMnLFxuXHRcdFx0XHRsZWFjdGlvbjogJ3JpZ2h0cy9yaWdodHMnLFxuXHRcdFx0XHRsZXRpdGxlOiBgVXNlcjoke3VzZXJOYW1lfWAsXG5cdFx0XHRcdGxlbGltaXQ6IDEsXG5cdFx0XHR9O1xuXG5cdFx0XHR2b2lkIGFwaS5nZXQocXVlcnlMb2dFdmVudHNQYXJhbXMpLmRvbmUoKGRhdGEpID0+IHtcblx0XHRcdFx0Y29uc3Qge2xvZ2V2ZW50czogbG9nc30gPSBkYXRhWydxdWVyeSddIGFzIHtcblx0XHRcdFx0XHRsb2dldmVudHM6IHtcblx0XHRcdFx0XHRcdHBhcmFtczoge1xuXHRcdFx0XHRcdFx0XHRuZXdncm91cHM6IHN0cmluZ1tdO1xuXHRcdFx0XHRcdFx0fTtcblx0XHRcdFx0XHRcdHVzZXI6IHN0cmluZztcblx0XHRcdFx0XHR9W107XG5cdFx0XHRcdH07XG5cdFx0XHRcdGlmIChsb2dzLmxlbmd0aCA9PT0gMCB8fCAhbG9nc1swXSkge1xuXHRcdFx0XHRcdHJpZ2h0TG9nVGV4dC50ZXh0KHdnVUxTKCfmsqHmnInku7vkvZXml6Xlv5cnLCAn5rKS5pyJ5Lu75L2V5pel6KqMJykpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdC8vIEB0cy1leHBlY3QtZXJyb3IgVFMyMzA0XG5cdFx0XHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnNhZmUtY2FsbCwgbmV3LWNhcFxuXHRcdFx0XHRcdGNvbnN0IHRpbWVzdGFtcCA9IG5ldyBNb3JlYml0cy5kYXRlKGxvZ3NbMF0udGltZXN0YW1wKS5jYWxlbmRhcigpIGFzIHN0cmluZztcblx0XHRcdFx0XHRjb25zdCByaWdodHMgPSBsb2dzWzBdLnBhcmFtcy5uZXdncm91cHMuam9pbign44CBJykgfHwgd2dVTFMoJ++8iOaXoO+8iScsICfvvIjnhKHvvIknKTtcblx0XHRcdFx0XHRyaWdodExvZ1RleHQudGV4dChcblx0XHRcdFx0XHRcdGAke3RpbWVzdGFtcH0gJHtsb2dzWzBdLnVzZXJ9JHt3Z1VMUygn5bCG55So5oi357uE5pS55Li6JywgJ+Wwh+S9v+eUqOiAhee+pOe1hOaUueeCuicpfSR7cmlnaHRzfWBcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblxuXHRcdFx0RGlhbG9nLmVkaXRGaWVsZHNldCA9IG5ldyBPTy51aS5GaWVsZHNldExheW91dCh7XG5cdFx0XHRcdGNsYXNzZXM6IFsnY29udGFpbmVyJ10sXG5cdFx0XHR9KTtcblx0XHRcdERpYWxvZy5lZGl0UGFuZWwuJGVsZW1lbnQuYXBwZW5kKERpYWxvZy5lZGl0RmllbGRzZXQuJGVsZW1lbnQpO1xuXG5cdFx0XHREaWFsb2cucmlnaHRzQ2hhbmdlU3VtbWFyeUlucHV0ID0gbmV3IE9PLnVpLlRleHRJbnB1dFdpZGdldCh7XG5cdFx0XHRcdHZhbHVlOiAnJyxcblx0XHRcdFx0cGxhY2Vob2xkZXI6ICflj6/nlZnnqbonLFxuXHRcdFx0fSk7XG5cdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVuc2FmZS1jYWxsLCBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG5cdFx0XHREaWFsb2cuZXhwaXJ5SW5wdXQgPSBuZXcgKG13IGFzIGFueSkud2lkZ2V0cy5FeHBpcnlXaWRnZXQoe1xuXHRcdFx0XHQkb3ZlcmxheTogJGJvZHkuZmluZCgnLm9vLXVpLXdpbmRvdycpLFxuXHRcdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVuc2FmZS1hc3NpZ25tZW50LCBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG5cdFx0XHRcdFJlbGF0aXZlSW5wdXRDbGFzczogKG13IGFzIGFueSkud2lkZ2V0cy5TZWxlY3RXaXRoSW5wdXRXaWRnZXQsXG5cdFx0XHRcdHJlbGF0aXZlSW5wdXQ6IHtcblx0XHRcdFx0XHRvcjogdHJ1ZSxcblx0XHRcdFx0XHRkcm9wZG93bmlucHV0OiB7XG5cdFx0XHRcdFx0XHRvcHRpb25zOiBbXG5cdFx0XHRcdFx0XHRcdHtkYXRhOiAnMSBkYXknLCBsYWJlbDogJzHlpKknfSxcblx0XHRcdFx0XHRcdFx0e2RhdGE6ICcxIHdlZWsnLCBsYWJlbDogd2dVTFMoJzHlkagnLCAnMemAsScpfSxcblx0XHRcdFx0XHRcdFx0e2RhdGE6ICcxIG1vbnRoJywgbGFiZWw6IHdnVUxTKCcx5Liq5pyIJywgJzHlgIvmnIgnKX0sXG5cdFx0XHRcdFx0XHRcdHtkYXRhOiAnMyBtb250aHMnLCBsYWJlbDogd2dVTFMoJzPkuKrmnIgnLCAnM+WAi+aciCcpfSxcblx0XHRcdFx0XHRcdFx0e2RhdGE6ICc2IG1vbnRocycsIGxhYmVsOiB3Z1VMUygnNuS4quaciCcsICc25YCL5pyIJyl9LFxuXHRcdFx0XHRcdFx0XHR7ZGF0YTogJzEgeWVhcicsIGxhYmVsOiAnMeW5tCd9LFxuXHRcdFx0XHRcdFx0XHR7ZGF0YTogJ2luZmluaXRlJywgbGFiZWw6IHdnVUxTKCfmsqHmnInmnJ/pmZAnLCAn5rKS5pyJ5pyf6ZmQJyl9LFxuXHRcdFx0XHRcdFx0XHR7ZGF0YTogJ290aGVyJywgbGFiZWw6IHdnVUxTKCflhbbku5bml7bpl7QnLCAn5YW25LuW5pmC6ZaTJyl9LFxuXHRcdFx0XHRcdFx0XSxcblx0XHRcdFx0XHRcdHZhbHVlOiAnaW5maW5pdGUnLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0dGV4dGlucHV0OiB7XG5cdFx0XHRcdFx0XHRyZXF1aXJlZDogdHJ1ZSxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHR9LFxuXHRcdFx0fSkgYXMgT08udWkuV2lkZ2V0O1xuXHRcdFx0RGlhbG9nLmNsb3NpbmdSZW1hcmtzSW5wdXQgPSBuZXcgT08udWkuVGV4dElucHV0V2lkZ2V0KHtcblx0XHRcdFx0dmFsdWU6ICd7e2RvbmV9fS0tfn5+ficsXG5cdFx0XHR9KTtcblx0XHRcdERpYWxvZy53YXRjaFRhbGtQYWdlQ2hlY2tib3ggPSBuZXcgT08udWkuQ2hlY2tib3hJbnB1dFdpZGdldCh7XG5cdFx0XHRcdHNlbGVjdGVkOiBmYWxzZSxcblx0XHRcdH0pO1xuXHRcdFx0Y29uc3QgZm9ybUVsZW1lbnRzID0gW1xuXHRcdFx0XHRuZXcgT08udWkuRmllbGRMYXlvdXQoRGlhbG9nLnJpZ2h0c0NoYW5nZVN1bW1hcnlJbnB1dCwge1xuXHRcdFx0XHRcdGxhYmVsOiB3Z1VMUygn5o6I5p2D5Y6f5ZugJywgJ+aOiOasiuWOn+WboCcpLFxuXHRcdFx0XHR9KSxcblx0XHRcdFx0bmV3IE9PLnVpLkZpZWxkTGF5b3V0KERpYWxvZy5leHBpcnlJbnB1dCwge1xuXHRcdFx0XHRcdGxhYmVsOiB3Z1VMUygn57uT5p2f5pe26Ze0JywgJ+e1kOadn+aZgumWkycpLFxuXHRcdFx0XHR9KSxcblx0XHRcdFx0bmV3IE9PLnVpLkZpZWxkTGF5b3V0KERpYWxvZy5jbG9zaW5nUmVtYXJrc0lucHV0LCB7XG5cdFx0XHRcdFx0bGFiZWw6IHdnVUxTKCflhbPpl63or7fmsYLnlZnoqIAnLCAn6Zec6ZaJ6KuL5rGC55WZ6KiAJyksXG5cdFx0XHRcdH0pLFxuXHRcdFx0XTtcblx0XHRcdGlmIChwZXJtaXNzaW9uVGVtcGxhdGUpIHtcblx0XHRcdFx0Zm9ybUVsZW1lbnRzLnB1c2goXG5cdFx0XHRcdFx0bmV3IE9PLnVpLkZpZWxkTGF5b3V0KERpYWxvZy53YXRjaFRhbGtQYWdlQ2hlY2tib3gsIHtcblx0XHRcdFx0XHRcdGxhYmVsOiB3Z1VMUygn55uR6KeG55So5oi36K6o6K666aG1JywgJ+ebo+imluS9v+eUqOiAheiojuirlumggScpLFxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0XHREaWFsb2cuZWRpdEZpZWxkc2V0LmFkZEl0ZW1zKGZvcm1FbGVtZW50cyk7XG5cdFx0XHREaWFsb2cuc3VibWl0UGFuZWwgPSBuZXcgT08udWkuUGFuZWxMYXlvdXQoe1xuXHRcdFx0XHRleHBhbmRlZDogZmFsc2UsXG5cdFx0XHR9KTtcblx0XHRcdERpYWxvZy5zdWJtaXRGaWVsZHNldCA9IG5ldyBPTy51aS5GaWVsZHNldExheW91dCh7XG5cdFx0XHRcdGNsYXNzZXM6IFsnY29udGFpbmVyJ10sXG5cdFx0XHR9KTtcblx0XHRcdERpYWxvZy5zdWJtaXRQYW5lbC4kZWxlbWVudC5hcHBlbmQoRGlhbG9nLnN1Ym1pdEZpZWxkc2V0LiRlbGVtZW50KTtcblx0XHRcdERpYWxvZy5zdWJtaXRQYW5lbC4kZWxlbWVudC5hcHBlbmQoRGlhbG9nLnN1Ym1pdEZpZWxkc2V0LiRlbGVtZW50KTtcblx0XHRcdERpYWxvZy5zdGFja0xheW91dCA9IG5ldyBPTy51aS5TdGFja0xheW91dCh7XG5cdFx0XHRcdGl0ZW1zOiBbRGlhbG9nLmVkaXRQYW5lbCwgRGlhbG9nLnN1Ym1pdFBhbmVsXSxcblx0XHRcdFx0cGFkZGVkOiB0cnVlLFxuXHRcdFx0fSk7XG5cdFx0XHQodGhpcy4kYm9keSBhcyBKUXVlcnkpLmFwcGVuZChEaWFsb2cuc3RhY2tMYXlvdXQuJGVsZW1lbnQpO1xuXG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9XG5cdFx0cHVibGljIHN0YXRpYyBvblN1Ym1pdCgpIHtcblx0XHRcdHZvaWQgbWFya0FzRG9uZSh7dXNlck5hbWUsIGluZGV4LCBjbG9zaW5nUmVtYXJrczogYFxcbjoke0RpYWxvZy5jbG9zaW5nUmVtYXJrc0lucHV0LmdldFZhbHVlKCl9YH0pXG5cdFx0XHRcdC50aGVuKChkYXRhKSA9PiB7XG5cdFx0XHRcdFx0dm9pZCBhc3NpZ25QZXJtaXNzaW9uKHtcblx0XHRcdFx0XHRcdHVzZXJOYW1lLFxuXHRcdFx0XHRcdFx0cGVybWlzc2lvbixcblx0XHRcdFx0XHRcdHN1bW1hcnk6IERpYWxvZy5yaWdodHNDaGFuZ2VTdW1tYXJ5SW5wdXQuZ2V0VmFsdWUoKSxcblx0XHRcdFx0XHRcdHJldklkOiBOdW1iZXIucGFyc2VJbnQoZGF0YVsnZWRpdCddLm5ld3JldmlkIGFzIHN0cmluZywgMTApLFxuXHRcdFx0XHRcdFx0ZXhwaXJ5OiAoRGlhbG9nLmV4cGlyeUlucHV0IGFzIE9PLnVpLlRleHRJbnB1dFdpZGdldCkuZ2V0VmFsdWUoKSxcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fSlcblx0XHRcdFx0LnRoZW4oKCkgPT4ge1xuXHRcdFx0XHRcdHZvaWQgaXNzdWVUZW1wbGF0ZSh7dXNlck5hbWUsIHBlcm1pc3Npb24sIHdhdGNoOiBEaWFsb2cud2F0Y2hUYWxrUGFnZUNoZWNrYm94LmlzU2VsZWN0ZWQoKX0pO1xuXHRcdFx0XHR9KVxuXHRcdFx0XHQudGhlbigoKSA9PiB7XG5cdFx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdFx0XHRsb2NhdGlvbi5yZWxvYWQoKTtcblx0XHRcdFx0XHR9LCAxMDAwKTtcblx0XHRcdFx0fSk7XG5cblx0XHRcdERpYWxvZy5zdGFja0xheW91dC5zZXRJdGVtKERpYWxvZy5zdWJtaXRQYW5lbCk7XG5cdFx0fVxuXHRcdHN0YXRpYyBwdXNoUGVuZGluZygpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcignTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC4nKTtcblx0XHR9XG5cdFx0c3RhdGljIHBvcFBlbmRpbmcoKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ01ldGhvZCBub3QgaW1wbGVtZW50ZWQuJyk7XG5cdFx0fVxuXG5cdFx0cHVibGljIG92ZXJyaWRlIGdldEFjdGlvblByb2Nlc3MoYWN0aW9uPzogc3RyaW5nKTogT08udWkuUHJvY2VzcyB7XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRzdXBlclxuXHRcdFx0XHRcdC5nZXRBY3Rpb25Qcm9jZXNzKGFjdGlvbilcblx0XHRcdFx0XHQvLyBAdHMtZXhwZWN0LWVycm9yIFRTNzAzMFxuXHRcdFx0XHRcdC5uZXh0KGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRcdGlmIChhY3Rpb24gPT09ICdzdWJtaXQnKSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBEaWFsb2cub25TdWJtaXQoKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdHJldHVybiBEaWFsb2cuc3VwZXIucHJvdG90eXBlLmdldEFjdGlvblByb2Nlc3MuY2FsbCh0aGlzLCBhY3Rpb24pO1xuXHRcdFx0XHRcdH0sIHRoaXMpXG5cdFx0XHQpO1xuXHRcdH1cblx0fVxuXHREaWFsb2cuc3RhdGljID0ge1xuXHRcdC4uLk9PLnVpLlByb2Nlc3NEaWFsb2cuc3RhdGljLFxuXHR9O1xuXHREaWFsb2cuc3RhdGljLm5hbWUgPSAndXNlci1yaWdodHMtbWFuYWdlcic7XG5cdERpYWxvZy5zdGF0aWMudGl0bGUgPSBg5o6I5LqIJHtwZXJtaXNzaW9uTmFtZX0ke3dnVUxTKCfnu5knLCAn57WmJyl9JHt1c2VyTmFtZX1gO1xuXHREaWFsb2cuc3RhdGljLmFjdGlvbnMgPSBbXG5cdFx0e2FjdGlvbjogJ3N1Ym1pdCcsIGxhYmVsOiB3Z1VMUygn5o6I5p2DJywgJ+aOiOasiicpLCBmbGFnczogWydwcmltYXJ5JywgJ3Byb2dyZXNzaXZlJ119LFxuXHRcdHtsYWJlbDogJ+WPlua2iCcsIGZsYWdzOiAnc2FmZSd9LFxuXHRdO1xuXG5cdGNvbnN0IGRpYWxvZyA9IG5ldyBEaWFsb2coKTtcblxuXHRjb25zdCB3aW5kb3dNYW5hZ2VyID0gbmV3IE9PLnVpLldpbmRvd01hbmFnZXIoKTtcblx0JCgnYm9keScpLmFwcGVuZCh3aW5kb3dNYW5hZ2VyLiRlbGVtZW50KTtcblx0d2luZG93TWFuYWdlci5hZGRXaW5kb3dzKFtkaWFsb2ddKTtcblx0dm9pZCB3aW5kb3dNYW5hZ2VyLm9wZW5XaW5kb3coZGlhbG9nKTtcbn07XG5cbmV4cG9ydCB7c2hvd0RpYWxvZ307XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxxQkFBc0JDLFFBQUEsaUJBQUE7O0FDRXRCLElBQU1DLHFCQUFxQkEsTUFBeUI7QUFDbkQsUUFBTTtJQUFDQztFQUFVLElBQUlDLEdBQUdDLE9BQU9DLElBQUk7QUFFbkMsUUFBTUMsa0JBQWtCO0lBQ3ZCLDRCQUE0QjtJQUM1Qiw0QkFBNEI7SUFDNUIsNEJBQTRCO0lBQzVCLDhCQUE4QjtJQUM5Qiw0QkFBNEI7SUFDNUIsMEJBQTBCO0lBQzFCLDRCQUE0QjtJQUM1Qiw0QkFBNEI7SUFDNUIsOEJBQThCO0VBQy9CO0FBRUEsTUFBSUMsYUFBZ0M7QUFDcEMsV0FBQUMsS0FB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QUNBb0wsVUFDQ3BMLFFBQVEsU0FBUyxFQUFFLEVBQ25CQSxRQUFRVCxVQUFVLEVBQUUsRUFDcEJTLFFBQVFULFNBQVNTLFFBQVEsTUFBTSxLQUFLLEVBQUVBLFFBQVEsTUFBTSxHQUFHLEdBQUcsRUFBRTtBQUVqRXNFLGVBQVc7TUFBQ0U7TUFBT2pGO01BQVU3QjtNQUFZMEU7SUFBSyxDQUFDO0VBQ2hELENBQUM7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogWyJpbXBvcnRfZXh0X2dhZGdldDIiLCAicmVxdWlyZSIsICJnZXRQYWdlUGVybWlzc2lvbnMiLCAid2dQYWdlTmFtZSIsICJtdyIsICJjb25maWciLCAiZ2V0IiwgInBhZ2VQZXJtaXNzaW9ucyIsICJwZXJtaXNzaW9uIiwgIl9pIiwgIl9PYmplY3QkZW50cmllcyIsICJPYmplY3QiLCAiZW50cmllcyIsICJsZW5ndGgiLCAicGFnZU5hbWUiLCAicGFnZVBlcm1pc3Npb24iLCAidXNlclJpZ2h0c01hbmFnZXJTdW1tYXJ5IiwgInZlcnNpb24iLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAiYXBpIiwgImluaXRNd0FwaSIsICJjb25jYXQiLCAiZ2V0UGVybWlzc2lvbk5hbWVzIiwgInBlcm1pc3Npb25OYW1lcyIsICJwYXRyb2xsZXIiLCAiYXV0b3Jldmlld2VyIiwgImNvbmZpcm1lZCIsICJldmVudHNwb25zb3IiLCAidHJhbnN3aWtpIiwgInRlbXBsYXRlZWRpdG9yIiwgImJvdCIsICJwZXJtaXNzaW9uTmFtZSIsICJfaTIiLCAiX09iamVjdCRlbnRyaWVzMiIsICJyaWdodCIsICJuYW1lIiwgImFzc2lnblBlcm1pc3Npb24iLCAidXNlck5hbWUiLCAic3VtbWFyeSIsICJyZXZJZCIsICJleHBpcnkiLCAicGVybWFMaW5rIiwgImZ1bGxTdW1tYXJ5IiwgInBhcmFtcyIsICJhY3Rpb24iLCAidXNlciIsICJyZXBsYWNlIiwgInJlYXNvbiIsICJhZGQiLCAicmVtb3ZlIiwgInBvc3RXaXRoVG9rZW4iLCAiZ2V0UGVybWlzc2lvblRlbXBsYXRlIiwgInBlcm1pc3Npb25UZW1wbGF0ZXMiLCAidGVtcGxhdGUiLCAiX2kzIiwgIl9PYmplY3QkZW50cmllczMiLCAidGVtcGxhdGVOYW1lIiwgImlzc3VlVGVtcGxhdGUiLCAid2F0Y2giLCAicGVybWlzc2lvblRlbXBsYXRlIiwgInRhbGtQYWdlIiwgImZvcm1hdCIsICJ0aXRsZSIsICJhcHBlbmR0ZXh0IiwgIndhdGNobGlzdCIsICJwb3N0V2l0aEVkaXRUb2tlbiIsICJ0YWdMaW5lIiwgInF1ZXJ5UmV2aXNpb25zIiwgIl9yZWYiLCAiX2FzeW5jVG9HZW5lcmF0b3IiLCAidGl0bGVzIiwgInJ2c2VjdGlvbiIsICJmb3JtYXR2ZXJzaW9uIiwgInByb3AiLCAiY3VydGltZXN0YW1wIiwgInJ2cHJvcCIsICJydnNsb3RzIiwgIl94IiwgIl94MiIsICJhcHBseSIsICJhcmd1bWVudHMiLCAibWFya0FzRG9uZSIsICJpbmRleCIsICJjbG9zaW5nUmVtYXJrcyIsICJ3Z1VzZXJOYW1lIiwgInNlY3Rpb25Ob2RlIiwgImRvY3VtZW50IiwgImdldEVsZW1lbnRCeUlkIiwgInNlY3Rpb25OdW1iZXIiLCAiJCIsICJzaWJsaW5ncyIsICJmaW5kIiwgIm1hdGNoIiwgImJhc2V0aW1lc3RhbXAiLCAiY29udGVudCIsICJyZXZpc2lvbiIsICJ0aGVuIiwgImRhdGEiLCAicGFnZXMiLCAiRGVmZXJyZWQiLCAicmVqZWN0IiwgInBhZ2UiLCAiaW52YWxpZCIsICJtaXNzaW5nIiwgInJldmlzaW9ucyIsICJzbG90cyIsICJtYWluIiwgInRpbWVzdGFtcCIsICJyZXNvbHZlIiwgInRyaW0iLCAiZWRpdFBhcmFtcyIsICJzZWN0aW9uIiwgInRleHQiLCAic3RhcnR0aW1lc3RhbXAiLCAibm9jcmVhdGUiLCAiYXNzZXJ0IiwgInNob3dEaWFsb2ciLCAic2hvd0RpYWxvZzIiLCAiJGJvZHkiLCAid2dVTFMiLCAid2luZG93IiwgIkRpYWxvZyIsICJPTyIsICJ1aSIsICJQcm9jZXNzRGlhbG9nIiwgImVkaXRQYW5lbCIsICJyaWdodExvZyIsICJlZGl0RmllbGRzZXQiLCAicmlnaHRzQ2hhbmdlU3VtbWFyeUlucHV0IiwgImV4cGlyeUlucHV0IiwgImNsb3NpbmdSZW1hcmtzSW5wdXQiLCAid2F0Y2hUYWxrUGFnZUNoZWNrYm94IiwgInN1Ym1pdFBhbmVsIiwgInN1Ym1pdEZpZWxkc2V0IiwgInN0YWNrTGF5b3V0IiwgImNvbnN0cnVjdG9yIiwgInNpemUiLCAiZ2V0Qm9keUhlaWdodCIsICJpbml0aWFsaXplIiwgIlBhbmVsTGF5b3V0IiwgImV4cGFuZGVkIiwgInJpZ2h0TG9nV2FwcGVyIiwgInVybCIsICJ1dGlsIiwgImdldFVybCIsICJ0eXBlIiwgImF0dHIiLCAiaHJlZiIsICJ0YXJnZXQiLCAiYXBwZW5kVG8iLCAiYXBwZW5kIiwgInJpZ2h0TG9nVGV4dCIsICJMYWJlbFdpZGdldCIsICJsYWJlbCIsICIkZWxlbWVudCIsICJxdWVyeUxvZ0V2ZW50c1BhcmFtcyIsICJsaXN0IiwgImxlYWN0aW9uIiwgImxldGl0bGUiLCAibGVsaW1pdCIsICJkb25lIiwgImxvZ2V2ZW50cyIsICJsb2dzIiwgIk1vcmViaXRzIiwgImRhdGUiLCAiY2FsZW5kYXIiLCAicmlnaHRzIiwgIm5ld2dyb3VwcyIsICJqb2luIiwgIkZpZWxkc2V0TGF5b3V0IiwgImNsYXNzZXMiLCAiVGV4dElucHV0V2lkZ2V0IiwgInZhbHVlIiwgInBsYWNlaG9sZGVyIiwgIndpZGdldHMiLCAiRXhwaXJ5V2lkZ2V0IiwgIiRvdmVybGF5IiwgIlJlbGF0aXZlSW5wdXRDbGFzcyIsICJTZWxlY3RXaXRoSW5wdXRXaWRnZXQiLCAicmVsYXRpdmVJbnB1dCIsICJvciIsICJkcm9wZG93bmlucHV0IiwgIm9wdGlvbnMiLCAidGV4dGlucHV0IiwgInJlcXVpcmVkIiwgIkNoZWNrYm94SW5wdXRXaWRnZXQiLCAic2VsZWN0ZWQiLCAiZm9ybUVsZW1lbnRzIiwgIkZpZWxkTGF5b3V0IiwgInB1c2giLCAiYWRkSXRlbXMiLCAiU3RhY2tMYXlvdXQiLCAiaXRlbXMiLCAicGFkZGVkIiwgIm9uU3VibWl0IiwgImdldFZhbHVlIiwgIk51bWJlciIsICJwYXJzZUludCIsICJuZXdyZXZpZCIsICJpc1NlbGVjdGVkIiwgInNldFRpbWVvdXQiLCAibG9jYXRpb24iLCAicmVsb2FkIiwgInNldEl0ZW0iLCAicHVzaFBlbmRpbmciLCAiRXJyb3IiLCAicG9wUGVuZGluZyIsICJnZXRBY3Rpb25Qcm9jZXNzIiwgIm5leHQiLCAic3VwZXIiLCAicHJvdG90eXBlIiwgImNhbGwiLCAic3RhdGljIiwgImFjdGlvbnMiLCAiZmxhZ3MiLCAiZGlhbG9nIiwgIndpbmRvd01hbmFnZXIiLCAiV2luZG93TWFuYWdlciIsICJhZGRXaW5kb3dzIiwgIm9wZW5XaW5kb3ciLCAiZ2V0Qm9keSIsICJvbiIsICJldmVudCIsICJfJGVsZW1lbnQkcGFyZW50cyRwcmUiLCAicHJldmVudERlZmF1bHQiLCAiZ2V0UGFyYW1WYWx1ZSIsICJzZWN0aW9uSWQiLCAicGFyZW50cyIsICJwcmV2Il0KfQo=

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
  const [, sectionNumber] = $(sectionNode).siblings(".mw-editsection").find("a:not(.mw-editsection-visualeditor)[href*=edit]").prop("href").match(/section=(\d+)/);
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1VzZXJSaWdodHNNYW5hZ2VyL1VzZXJSaWdodHNNYW5hZ2VyLnRzIiwgInNyYy9Vc2VyUmlnaHRzTWFuYWdlci9tb2R1bGVzL2dldFBhZ2VQZXJtaXNzaW9ucy50cyIsICJzcmMvVXNlclJpZ2h0c01hbmFnZXIvb3B0aW9ucy5qc29uIiwgInNyYy9Vc2VyUmlnaHRzTWFuYWdlci9tb2R1bGVzL2FwaS50cyIsICJzcmMvVXNlclJpZ2h0c01hbmFnZXIvbW9kdWxlcy9nZXRQZXJtaXNzaW9uTmFtZXMudHMiLCAic3JjL1VzZXJSaWdodHNNYW5hZ2VyL21vZHVsZXMvYXNzaWduUGVybWlzc2lvbi50cyIsICJzcmMvVXNlclJpZ2h0c01hbmFnZXIvbW9kdWxlcy9nZXRUZW1wbGF0ZXMudHMiLCAic3JjL1VzZXJSaWdodHNNYW5hZ2VyL21vZHVsZXMvaXNzdWVUZW1wbGF0ZS50cyIsICJzcmMvVXNlclJpZ2h0c01hbmFnZXIvbW9kdWxlcy9tYXJrQXNEb25lLnRzIiwgInNyYy9Vc2VyUmlnaHRzTWFuYWdlci9tb2R1bGVzL3Nob3dEaWFsb2cudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7Z2V0Qm9keX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbmltcG9ydCB7Z2V0UGFnZVBlcm1pc3Npb25zfSBmcm9tICcuL21vZHVsZXMvZ2V0UGFnZVBlcm1pc3Npb25zJztcbmltcG9ydCB7c2hvd0RpYWxvZ30gZnJvbSAnLi9tb2R1bGVzL3Nob3dEaWFsb2cnO1xuXG52b2lkIGdldEJvZHkoKS50aGVuKCgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkID0+IHtcblx0Y29uc3QgcGVybWlzc2lvbiA9IGdldFBhZ2VQZXJtaXNzaW9ucygpO1xuXHRpZiAoIXBlcm1pc3Npb24pIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHQkYm9keS5maW5kKCcucGVybS1hc3NpZ24tcGVybWlzc2lvbnMgYScpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCkge1xuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cblx0XHRjb25zdCAkZWxlbWVudDogSlF1ZXJ5PEhUTUxBbmNob3JFbGVtZW50PiA9ICQodGhpcyBhcyBIVE1MQW5jaG9yRWxlbWVudCk7XG5cdFx0Y29uc3QgdXNlck5hbWUgPSBtdy51dGlsLmdldFBhcmFtVmFsdWUoJ3VzZXInLCAkZWxlbWVudC5hdHRyKCdocmVmJykpO1xuXHRcdGlmICghdXNlck5hbWUpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRjb25zdCBzZWN0aW9uSWQ6IHN0cmluZyA9ICRlbGVtZW50LnBhcmVudHMoJ2RsJykucHJldignaDQnKS5maW5kKCcubXctaGVhZGxpbmUnKS5hdHRyKCdpZCcpID8/ICcnO1xuXHRcdGNvbnN0IGluZGV4OiBzdHJpbmcgPVxuXHRcdFx0c2VjdGlvbklkID09PSBgVXNlcjoke3VzZXJOYW1lfWAgfHwgc2VjdGlvbklkID09PSBgVXNlcjoke3VzZXJOYW1lfWAucmVwbGFjZSgvXCIvZywgJy4yMicpLnJlcGxhY2UoLyAvZywgJ18nKVxuXHRcdFx0XHQ/ICcnXG5cdFx0XHRcdDogc2VjdGlvbklkXG5cdFx0XHRcdFx0XHQucmVwbGFjZSgnVXNlcjonLCAnJylcblx0XHRcdFx0XHRcdC5yZXBsYWNlKHVzZXJOYW1lLCAnJylcblx0XHRcdFx0XHRcdC5yZXBsYWNlKHVzZXJOYW1lLnJlcGxhY2UoL1wiL2csICcuMjInKS5yZXBsYWNlKC8gL2csICdfJyksICcnKTtcblxuXHRcdHNob3dEaWFsb2coeyRib2R5LCB1c2VyTmFtZSwgcGVybWlzc2lvbiwgaW5kZXh9KTtcblx0fSk7XG59KTtcbiIsICJpbXBvcnQgdHlwZSB7VXNlclJpZ2h0c30gZnJvbSAnfi9NYXJrUmlnaHRzL21vZHVsZXMvdHlwZXMnO1xuXG5jb25zdCBnZXRQYWdlUGVybWlzc2lvbnMgPSAoKTogVXNlclJpZ2h0cyB8IG51bGwgPT4ge1xuXHRjb25zdCB7d2dQYWdlTmFtZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cblx0Y29uc3QgcGFnZVBlcm1pc3Npb25zID0ge1xuXHRcdCdRaXV3ZW5fdGFsazrmnYPpmZDnlLPor7cv55Sz6K+35beh5p+l5Zue6YCA5p2DJzogJ3BhdHJvbGxlcicsXG5cdFx0J1FpdXdlbl90YWxrOuadg+mZkOeUs+ivty/nlLPor7flt6Hmn6XosYHlhY3mnYMnOiAnYXV0b3Jldmlld2VyJyxcblx0XHQnUWl1d2VuX3RhbGs65p2D6ZmQ55Sz6K+3L+eUs+ivt+ehruiupOeUqOaIt+adgyc6ICdjb25maXJtZWQnLFxuXHRcdCdRaXV3ZW5fdGFsazrmnYPpmZDnlLPor7cv55Sz6K+35aSn6YeP5raI5oGv5Y+R6YCB5p2DJzogJ21hc3NtZXNzYWdlLXNlbmRlcicsXG5cdFx0J1FpdXdlbl90YWxrOuadg+mZkOeUs+ivty/nlLPor7fmtLvliqjnu4Tnu4fmnYMnOiAnZXZlbnRzcG9uc29yJyxcblx0XHQnUWl1d2VuX3RhbGs65p2D6ZmQ55Sz6K+3L+eUs+ivt+WvvOWFpeadgyc6ICd0cmFuc3dpa2knLFxuXHRcdCdRaXV3ZW5fdGFsazrmnYPpmZDnlLPor7cv55Sz6K+35qih5p2/57yW6L6R5p2DJzogJ3RlbXBsYXRlZWRpdG9yJyxcblx0XHQnUWl1d2VuX3RhbGs65p2D6ZmQ55Sz6K+3L+eUs+ivt+acuuWZqOS6uuadg+mZkCc6ICdib3QnLFxuXHRcdCdRaXV3ZW5fdGFsazrmnYPpmZDnlLPor7cv55Sz6K+35a6e5ZCN5Yi26aqM6K+B6LGB5YWNJzogJ3JucnN2ZXJpZnktZXhlbXB0Jyxcblx0fSBhcyBjb25zdCBzYXRpc2ZpZXMgUGFydGlhbDxSZWNvcmQ8c3RyaW5nLCBVc2VyUmlnaHRzPj47XG5cblx0bGV0IHBlcm1pc3Npb246IFVzZXJSaWdodHMgfCBudWxsID0gbnVsbDtcblx0Zm9yIChjb25zdCBbcGFnZU5hbWUsIHBhZ2VQZXJtaXNzaW9uXSBvZiBPYmplY3QuZW50cmllcyhwYWdlUGVybWlzc2lvbnMpKSB7XG5cdFx0aWYgKHBhZ2VOYW1lID09PSB3Z1BhZ2VOYW1lKSB7XG5cdFx0XHRwZXJtaXNzaW9uID0gcGFnZVBlcm1pc3Npb247XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBwZXJtaXNzaW9uO1xufTtcblxuZXhwb3J0IHtnZXRQYWdlUGVybWlzc2lvbnN9O1xuIiwgIntcblx0XCJ1c2VyUmlnaHRzTWFuYWdlclN1bW1hcnlcIjogXCLvvIhbW01lZGlhV2lraTpHYWRnZXQtVXNlclJpZ2h0c01hbmFnZXIuanN8VXNlclJpZ2h0c01hbmFnZXJdXe+8iVwiLFxuXHRcInZlcnNpb25cIjogXCIyLjBcIlxufVxuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7aW5pdE13QXBpfSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG5jb25zdCBhcGk6IG13LkFwaSA9IGluaXRNd0FwaShgbW9yZWJpdHMuanM7IFVzZXJSaWdodHNNYW5hZ2VyLyR7T1BUSU9OUy52ZXJzaW9ufWApO1xuXG5leHBvcnQge2FwaX07XG4iLCAiaW1wb3J0IHR5cGUge1VzZXJSaWdodHN9IGZyb20gJ34vTWFya1JpZ2h0cy9tb2R1bGVzL3R5cGVzJztcblxuY29uc3QgZ2V0UGVybWlzc2lvbk5hbWVzID0gKHBlcm1pc3Npb246IFVzZXJSaWdodHMpOiBzdHJpbmcgfCBudWxsID0+IHtcblx0Y29uc3QgcGVybWlzc2lvbk5hbWVzID0ge1xuXHRcdHBhdHJvbGxlcjogJ+W3oeafpeWRmCcsXG5cdFx0YXV0b3Jldmlld2VyOiAn5beh5p+l6LGB5YWN6ICFJyxcblx0XHRjb25maXJtZWQ6ICfnoa7orqTnlKjmiLcnLFxuXHRcdCdtYXNzbWVzc2FnZS1zZW5kZXInOiAn5aSn6YeP5raI5oGv5Y+R6YCB6ICFJyxcblx0XHRldmVudHNwb25zb3I6ICfmtLvliqjnu4Tnu4fogIUnLFxuXHRcdHRyYW5zd2lraTogJ+WvvOWFpeiAhScsXG5cdFx0dGVtcGxhdGVlZGl0b3I6ICfmqKHmnb/nvJbovpHlkZgnLFxuXHRcdGJvdDogJ+acuuWZqOS6uicsXG5cdFx0J3JucnN2ZXJpZnktZXhlbXB0JzogJ+WunuWQjeWItumqjOivgeixgeWFjScsXG5cdH0gYXMgY29uc3Qgc2F0aXNmaWVzIFBhcnRpYWw8UmVjb3JkPFVzZXJSaWdodHMsIHN0cmluZz4+O1xuXG5cdGxldCBwZXJtaXNzaW9uTmFtZTogc3RyaW5nIHwgbnVsbCA9IG51bGw7XG5cdGZvciAoY29uc3QgW3JpZ2h0LCBuYW1lXSBvZiBPYmplY3QuZW50cmllcyhwZXJtaXNzaW9uTmFtZXMpKSB7XG5cdFx0aWYgKHBlcm1pc3Npb24gPT09IHJpZ2h0KSB7XG5cdFx0XHRwZXJtaXNzaW9uTmFtZSA9IG5hbWU7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBwZXJtaXNzaW9uTmFtZTtcbn07XG5cbmV4cG9ydCB7Z2V0UGVybWlzc2lvbk5hbWVzfTtcbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge1VzZXJSaWdodHN9IGZyb20gJ34vTWFya1JpZ2h0cy9tb2R1bGVzL3R5cGVzJztcbmltcG9ydCB7YXBpfSBmcm9tICcuL2FwaSc7XG5pbXBvcnQge2dldFBlcm1pc3Npb25OYW1lc30gZnJvbSAnLi9nZXRQZXJtaXNzaW9uTmFtZXMnO1xuXG5jb25zdCBhc3NpZ25QZXJtaXNzaW9uID0gKHtcblx0dXNlck5hbWUsXG5cdHBlcm1pc3Npb24sXG5cdHN1bW1hcnksXG5cdHJldklkLFxuXHRleHBpcnksXG59OiB7XG5cdHVzZXJOYW1lOiBzdHJpbmc7XG5cdHBlcm1pc3Npb246IFVzZXJSaWdodHM7XG5cdHN1bW1hcnk6IHN0cmluZztcblx0cmV2SWQ6IG51bWJlcjtcblx0ZXhwaXJ5OiBzdHJpbmc7XG59KSA9PiB7XG5cdGNvbnN0IHBlcm1hTGluayA9IGBbW1NwZWNpYWw6UGVybWFMaW5rLyR7cmV2SWR9I1VzZXI6JHt1c2VyTmFtZX185p2D6ZmQ55Sz6K+3XV1gO1xuXHRsZXQgZnVsbFN1bW1hcnkgPSBgKyR7Z2V0UGVybWlzc2lvbk5hbWVzKHBlcm1pc3Npb24pfe+8myR7cGVybWFMaW5rfWA7XG5cdGlmIChzdW1tYXJ5ICE9PSAnJykge1xuXHRcdGZ1bGxTdW1tYXJ5ICs9IGDvvJske3N1bW1hcnl9YDtcblx0fVxuXHRmdWxsU3VtbWFyeSArPSBPUFRJT05TLnVzZXJSaWdodHNNYW5hZ2VyU3VtbWFyeTtcblx0Y29uc3QgcGFyYW1zOiBBcGlVc2VycmlnaHRzUGFyYW1zID0ge1xuXHRcdGFjdGlvbjogJ3VzZXJyaWdodHMnLFxuXHRcdHVzZXI6IHVzZXJOYW1lLnJlcGxhY2UoLyAvZywgJ18nKSxcblx0XHRyZWFzb246IGZ1bGxTdW1tYXJ5LFxuXHRcdC8vIEB0cy1leHBlY3QtZXJyb3IgVFMyMzIyXG5cdFx0YWRkOiBbcGVybWlzc2lvbl0sXG5cdFx0ZXhwaXJ5OiBleHBpcnkgPT09ICcnID8gJ2luZmluaXR5JyA6IGV4cGlyeSxcblx0fTtcblx0aWYgKHBlcm1pc3Npb24gPT09ICdwYXRyb2xsZXInICYmIGV4cGlyeSA9PT0gJ2luZmluaXRlJykge1xuXHRcdHBhcmFtcy5yZW1vdmUgPSAnYXV0b3Jldmlld2VyJztcblx0fVxuXHRyZXR1cm4gYXBpLnBvc3RXaXRoVG9rZW4oJ3VzZXJyaWdodHMnLCBwYXJhbXMpO1xufTtcblxuZXhwb3J0IHthc3NpZ25QZXJtaXNzaW9ufTtcbiIsICJpbXBvcnQgdHlwZSB7VXNlclJpZ2h0c30gZnJvbSAnfi9NYXJrUmlnaHRzL21vZHVsZXMvdHlwZXMnO1xuXG5jb25zdCBnZXRQZXJtaXNzaW9uVGVtcGxhdGUgPSAocGVybWlzc2lvbjogVXNlclJpZ2h0cyk6IHN0cmluZyB8IG51bGwgPT4ge1xuXHRjb25zdCBwZXJtaXNzaW9uVGVtcGxhdGVzID0ge1xuXHRcdHBhdHJvbGxlcjogJ1BhdHJvbCBncmFudGVkJyxcblx0XHRhdXRvcmV2aWV3ZXI6ICdBdXRvcGF0cm9sIGdyYW50ZWQnLFxuXHRcdCdtYXNzbWVzc2FnZS1zZW5kZXInOiAnTU1TIGdyYW50ZWQnLFxuXHRcdHRlbXBsYXRlZWRpdG9yOiAnVGVtcGxhdGUgZWRpdG9yIGdyYW50ZWQnLFxuXHRcdHRyYW5zd2lraTogJ1RyYW5zd2lraSBncmFudGVkJyxcblx0fSBhcyBjb25zdCBzYXRpc2ZpZXMgUGFydGlhbDxSZWNvcmQ8VXNlclJpZ2h0cywgc3RyaW5nPj47XG5cblx0bGV0IHRlbXBsYXRlOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcblx0Zm9yIChjb25zdCBbcGFnZVBlcm1pc3Npb24sIHRlbXBsYXRlTmFtZV0gb2YgT2JqZWN0LmVudHJpZXMocGVybWlzc2lvblRlbXBsYXRlcykpIHtcblx0XHRpZiAocGVybWlzc2lvbiA9PT0gcGFnZVBlcm1pc3Npb24pIHtcblx0XHRcdHRlbXBsYXRlID0gdGVtcGxhdGVOYW1lO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gdGVtcGxhdGU7XG59O1xuXG5leHBvcnQge2dldFBlcm1pc3Npb25UZW1wbGF0ZX07XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtBcGlSZXNwb25zZX0gZnJvbSAndHlwZXMtbWVkaWF3aWtpLXJlbm92YXRlL213L0FwaSc7XG5pbXBvcnQge1VzZXJSaWdodHN9IGZyb20gJ34vTWFya1JpZ2h0cy9tb2R1bGVzL3R5cGVzJztcbmltcG9ydCB7YXBpfSBmcm9tICcuL2FwaSc7XG5pbXBvcnQge2dldFBlcm1pc3Npb25OYW1lc30gZnJvbSAnLi9nZXRQZXJtaXNzaW9uTmFtZXMnO1xuaW1wb3J0IHtnZXRQZXJtaXNzaW9uVGVtcGxhdGV9IGZyb20gJy4vZ2V0VGVtcGxhdGVzJztcblxuY29uc3QgaXNzdWVUZW1wbGF0ZSA9ICh7XG5cdHVzZXJOYW1lLFxuXHRwZXJtaXNzaW9uLFxuXHR3YXRjaCxcbn06IHtcblx0dXNlck5hbWU6IHN0cmluZztcblx0cGVybWlzc2lvbjogVXNlclJpZ2h0cztcblx0d2F0Y2g6IGJvb2xlYW4gfCAnd2F0Y2gnIHwgJ3Vud2F0Y2gnO1xufSk6IEpRdWVyeS5Qcm9taXNlPEFwaVJlc3BvbnNlPiB8IHZvaWQgPT4ge1xuXHRjb25zdCBwZXJtaXNzaW9uVGVtcGxhdGUgPSBnZXRQZXJtaXNzaW9uVGVtcGxhdGUocGVybWlzc2lvbik7XG5cdGlmICghcGVybWlzc2lvblRlbXBsYXRlKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgcGVybWlzc2lvbk5hbWUgPSBnZXRQZXJtaXNzaW9uTmFtZXMocGVybWlzc2lvbik7XG5cdGNvbnN0IHRhbGtQYWdlID0gYFVzZXIgdGFsazoke3VzZXJOYW1lLnJlcGxhY2UoLyAvZywgJ18nKX1gO1xuXHRjb25zdCBwYXJhbXM6IEFwaUVkaXRQYWdlUGFyYW1zID0ge1xuXHRcdGFjdGlvbjogJ2VkaXQnLFxuXHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdHRpdGxlOiB0YWxrUGFnZSxcblx0XHRhcHBlbmR0ZXh0OiAnXFxuXFxue3snLmNvbmNhdCgnc3Vic3Q6JywgcGVybWlzc2lvblRlbXBsYXRlLCAnfX0nKSxcblx0XHRzdW1tYXJ5OiBg5qC55o2u5YWx6K+G5o6I5LqIJHtwZXJtaXNzaW9uTmFtZX0ke09QVElPTlMudXNlclJpZ2h0c01hbmFnZXJTdW1tYXJ5fWAsXG5cdFx0d2F0Y2hsaXN0OiB3YXRjaCA/ICd3YXRjaCcgOiAndW53YXRjaCcsXG5cdH07XG5cdHJldHVybiBhcGkucG9zdFdpdGhFZGl0VG9rZW4ocGFyYW1zKTtcbn07XG5cbmV4cG9ydCB7aXNzdWVUZW1wbGF0ZX07XG4iLCAiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVuc2FmZS1hc3NpZ25tZW50ICovXG5pbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge2FwaX0gZnJvbSAnLi9hcGknO1xuY29uc3QgdGFnTGluZSA9IE9QVElPTlMudXNlclJpZ2h0c01hbmFnZXJTdW1tYXJ5O1xuXG5jb25zdCBxdWVyeVJldmlzaW9ucyA9IGFzeW5jICh0aXRsZXM6IHN0cmluZyB8IHN0cmluZ1tdLCBydnNlY3Rpb246IHN0cmluZykgPT4ge1xuXHRjb25zdCBwYXJhbXM6IEFwaVF1ZXJ5UmV2aXNpb25zUGFyYW1zID0ge1xuXHRcdHRpdGxlcyxcblx0XHRydnNlY3Rpb24sXG5cdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRwcm9wOiAncmV2aXNpb25zJyxcblx0XHRjdXJ0aW1lc3RhbXA6IHRydWUsXG5cdFx0cnZwcm9wOiBbJ2NvbnRlbnQnLCAndGltZXN0YW1wJ10sXG5cdH07XG5cblx0cmV0dXJuIGF3YWl0IGFwaS5nZXQocGFyYW1zKTtcbn07XG5cbmNvbnN0IG1hcmtBc0RvbmUgPSAoe3VzZXJOYW1lLCBpbmRleCwgY2xvc2luZ1JlbWFya3N9OiB7dXNlck5hbWU6IHN0cmluZzsgaW5kZXg6IHN0cmluZzsgY2xvc2luZ1JlbWFya3M6IHN0cmluZ30pID0+IHtcblx0Y29uc3Qge3dnUGFnZU5hbWV9ID0gbXcuY29uZmlnLmdldCgpO1xuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgdW5pY29ybi9wcmVmZXItcXVlcnktc2VsZWN0b3Jcblx0Y29uc3Qgc2VjdGlvbk5vZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcblx0XHRgVXNlcjoke3VzZXJOYW1lLnJlcGxhY2UoL1wiL2csICcuMjInKS5yZXBsYWNlKC8gL2csICdfJyl9JHtpbmRleCA/PyAnJ31gXG5cdCk7XG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW5zYWZlLWNhbGxcblx0Y29uc3QgWywgc2VjdGlvbk51bWJlcl0gPSAkKHNlY3Rpb25Ob2RlIGFzIEhUTUxFbGVtZW50KVxuXHRcdC5zaWJsaW5ncygnLm13LWVkaXRzZWN0aW9uJylcblx0XHQuZmluZCgnYTpub3QoLm13LWVkaXRzZWN0aW9uLXZpc3VhbGVkaXRvcilbaHJlZio9ZWRpdF0nKVxuXHRcdC5wcm9wKCdocmVmJylcblx0XHQubWF0Y2goL3NlY3Rpb249KFxcZCspLyk7XG5cdGxldCBiYXNldGltZXN0YW1wOiBzdHJpbmc7XG5cdGxldCBjdXJ0aW1lc3RhbXA6IHN0cmluZztcblx0bGV0IGNvbnRlbnQ6IHN0cmluZztcblx0bGV0IHJldmlzaW9uO1xuXG5cdHJldHVybiBxdWVyeVJldmlzaW9ucyh3Z1BhZ2VOYW1lLCBgJHtzZWN0aW9uTnVtYmVyfWApXG5cdFx0LnRoZW4oKGRhdGEpID0+IHtcblx0XHRcdGlmICghZGF0YVsncXVlcnknXSB8fCAhZGF0YVsncXVlcnknXS5wYWdlcykge1xuXHRcdFx0XHRyZXR1cm4gJC5EZWZlcnJlZCgpLnJlamVjdCgndW5rbm93bicpO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBbcGFnZV0gPSBkYXRhWydxdWVyeSddLnBhZ2VzO1xuXG5cdFx0XHRpZiAoIXBhZ2UgfHwgcGFnZS5pbnZhbGlkKSB7XG5cdFx0XHRcdHJldHVybiAkLkRlZmVycmVkKCkucmVqZWN0KCdpbnZhbGlkdGl0bGUnKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKHBhZ2UubWlzc2luZykge1xuXHRcdFx0XHRyZXR1cm4gJC5EZWZlcnJlZCgpLnJlamVjdCgnbm9jcmVhdGUtbWlzc2luZycpO1xuXHRcdFx0fVxuXG5cdFx0XHRbcmV2aXNpb25dID0gcGFnZS5yZXZpc2lvbnM7XG5cdFx0XHRiYXNldGltZXN0YW1wID0gcmV2aXNpb24udGltZXN0YW1wO1xuXHRcdFx0Y3VydGltZXN0YW1wID0gZGF0YVsnY3VydGltZXN0YW1wJ107XG5cdFx0XHRjb250ZW50ID0gcmV2aXNpb24uY29udGVudDtcblx0XHRcdHJldHVybiAkLkRlZmVycmVkKCkucmVzb2x2ZSgpO1xuXHRcdH0pXG5cdFx0LnRoZW4oKCkgPT4ge1xuXHRcdFx0Y29udGVudCA9IGNvbnRlbnQudHJpbSgpO1xuXHRcdFx0Y29udGVudCA9IGNvbnRlbnQucmVwbGFjZSgvKDpcXHMqe3tTdGF0dXMpKFxcfC4qPyk/fX0vaSwgJyQxfCt9fScpO1xuXHRcdFx0Y29udGVudCArPSBjbG9zaW5nUmVtYXJrcztcblxuXHRcdFx0Y29uc3QgZWRpdFBhcmFtczogQXBpRWRpdFBhZ2VQYXJhbXMgPSB7XG5cdFx0XHRcdGFjdGlvbjogJ2VkaXQnLFxuXHRcdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdFx0XHR0aXRsZTogd2dQYWdlTmFtZSxcblx0XHRcdFx0c2VjdGlvbjogc2VjdGlvbk51bWJlcixcblx0XHRcdFx0dGV4dDogY29udGVudCxcblx0XHRcdFx0c3VtbWFyeTogYC8qIFVzZXI6JHt1c2VyTmFtZX0gKi8g5a6M5oiQJHt0YWdMaW5lfWAsXG5cdFx0XHRcdGJhc2V0aW1lc3RhbXAsXG5cdFx0XHRcdHN0YXJ0dGltZXN0YW1wOiBjdXJ0aW1lc3RhbXAsXG5cdFx0XHRcdG5vY3JlYXRlOiB0cnVlLFxuXHRcdFx0fTtcblx0XHRcdGlmIChtdy5jb25maWcuZ2V0KCd3Z1VzZXJOYW1lJykpIHtcblx0XHRcdFx0ZWRpdFBhcmFtcy5hc3NlcnQgPSAndXNlcic7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBhcGkucG9zdFdpdGhFZGl0VG9rZW4oZWRpdFBhcmFtcyk7XG5cdFx0fSk7XG59O1xuXG5leHBvcnQge21hcmtBc0RvbmV9O1xuIiwgImltcG9ydCB7VXNlclJpZ2h0c30gZnJvbSAnfi9NYXJrUmlnaHRzL21vZHVsZXMvdHlwZXMnO1xuaW1wb3J0IHthcGl9IGZyb20gJy4vYXBpJztcbmltcG9ydCB7YXNzaWduUGVybWlzc2lvbn0gZnJvbSAnLi9hc3NpZ25QZXJtaXNzaW9uJztcbmltcG9ydCB7Z2V0UGVybWlzc2lvbk5hbWVzfSBmcm9tICcuL2dldFBlcm1pc3Npb25OYW1lcyc7XG5pbXBvcnQge2dldFBlcm1pc3Npb25UZW1wbGF0ZX0gZnJvbSAnLi9nZXRUZW1wbGF0ZXMnO1xuaW1wb3J0IHtpc3N1ZVRlbXBsYXRlfSBmcm9tICcuL2lzc3VlVGVtcGxhdGUnO1xuaW1wb3J0IHttYXJrQXNEb25lfSBmcm9tICcuL21hcmtBc0RvbmUnO1xuXG5jb25zdCBzaG93RGlhbG9nID0gZnVuY3Rpb24gc2hvd0RpYWxvZyh7XG5cdCRib2R5LFxuXHR1c2VyTmFtZSxcblx0cGVybWlzc2lvbixcblx0aW5kZXgsXG59OiB7XG5cdCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pjtcblx0dXNlck5hbWU6IHN0cmluZztcblx0cGVybWlzc2lvbjogVXNlclJpZ2h0cztcblx0aW5kZXg6IHN0cmluZztcbn0pIHtcblx0Y29uc3Qge3dnVUxTfSA9IHdpbmRvdztcblx0Y29uc3QgcGVybWlzc2lvblRlbXBsYXRlID0gZ2V0UGVybWlzc2lvblRlbXBsYXRlKHBlcm1pc3Npb24pO1xuXHRjb25zdCBwZXJtaXNzaW9uTmFtZSA9IGdldFBlcm1pc3Npb25OYW1lcyhwZXJtaXNzaW9uKTtcblxuXHRjbGFzcyBEaWFsb2cgZXh0ZW5kcyBPTy51aS5Qcm9jZXNzRGlhbG9nIHtcblx0XHRwcml2YXRlIHN0YXRpYyBlZGl0UGFuZWw6IE9PLnVpLlBhbmVsTGF5b3V0O1xuXHRcdHByaXZhdGUgc3RhdGljIHJpZ2h0TG9nOiBPTy51aS5MYWJlbFdpZGdldDtcblx0XHRwcml2YXRlIHN0YXRpYyBlZGl0RmllbGRzZXQ6IE9PLnVpLkZpZWxkc2V0TGF5b3V0O1xuXHRcdHByaXZhdGUgc3RhdGljIHJpZ2h0c0NoYW5nZVN1bW1hcnlJbnB1dDogT08udWkuVGV4dElucHV0V2lkZ2V0O1xuXHRcdHByaXZhdGUgc3RhdGljIGV4cGlyeUlucHV0OiBPTy51aS5XaWRnZXQ7XG5cdFx0cHJpdmF0ZSBzdGF0aWMgY2xvc2luZ1JlbWFya3NJbnB1dDogT08udWkuVGV4dElucHV0V2lkZ2V0O1xuXHRcdHByaXZhdGUgc3RhdGljIHdhdGNoVGFsa1BhZ2VDaGVja2JveDogT08udWkuQ2hlY2tib3hJbnB1dFdpZGdldDtcblx0XHRwcml2YXRlIHN0YXRpYyBzdWJtaXRQYW5lbDogT08udWkuUGFuZWxMYXlvdXQ7XG5cdFx0cHJpdmF0ZSBzdGF0aWMgc3VibWl0RmllbGRzZXQ6IE9PLnVpLkZpZWxkc2V0TGF5b3V0O1xuXHRcdHByaXZhdGUgc3RhdGljIHN0YWNrTGF5b3V0OiBPTy51aS5TdGFja0xheW91dDtcblx0XHRwcml2YXRlICRib2R5OiBKUXVlcnkgfCB1bmRlZmluZWQ7XG5cblx0XHRwdWJsaWMgY29uc3RydWN0b3IoKSB7XG5cdFx0XHRzdXBlcih7XG5cdFx0XHRcdHNpemU6ICdtZWRpdW0nLFxuXHRcdFx0fSk7XG5cdFx0fVxuXHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjbGFzcy1tZXRob2RzLXVzZS10aGlzXG5cdFx0cHVibGljIG92ZXJyaWRlIGdldEJvZHlIZWlnaHQoKSB7XG5cdFx0XHRyZXR1cm4gMjU1O1xuXHRcdH1cblx0XHRwdWJsaWMgb3ZlcnJpZGUgaW5pdGlhbGl6ZSgpIHtcblx0XHRcdHN1cGVyLmluaXRpYWxpemUoKTtcblx0XHRcdERpYWxvZy5lZGl0UGFuZWwgPSBuZXcgT08udWkuUGFuZWxMYXlvdXQoe1xuXHRcdFx0XHRleHBhbmRlZDogZmFsc2UsXG5cdFx0XHR9KTtcblx0XHRcdGNvbnN0IHJpZ2h0TG9nV2FwcGVyID0gJCgnPHNwYW4+Jyk7XG5cdFx0XHRjb25zdCB1cmwgPSBtdy51dGlsLmdldFVybCgnU3BlY2lhbDpMb2cvcmlnaHRzJywge3R5cGU6ICdyaWdodHMnLCBwYWdlOiBgVXNlcjoke3VzZXJOYW1lfWB9KTtcblx0XHRcdCQoJzxhPicpXG5cdFx0XHRcdC50ZXh0KHdnVUxTKCfmnIDov5HmnYPpmZDml6Xlv5cnLCAn5pyA6L+R5qyK6ZmQ5pel6KqMJykpXG5cdFx0XHRcdC5hdHRyKHtocmVmOiB1cmwsIHRhcmdldDogJ19ibGFuayd9KVxuXHRcdFx0XHQuYXBwZW5kVG8ocmlnaHRMb2dXYXBwZXIpO1xuXHRcdFx0cmlnaHRMb2dXYXBwZXIuYXBwZW5kKCfvvJonKTtcblx0XHRcdGNvbnN0IHJpZ2h0TG9nVGV4dCA9ICQoJzxzcGFuPicpLnRleHQod2dVTFMoJ+iOt+WPluS4rScsICflj5blvpfkuK0nKSkuYXBwZW5kVG8ocmlnaHRMb2dXYXBwZXIpO1xuXHRcdFx0RGlhbG9nLnJpZ2h0TG9nID0gbmV3IE9PLnVpLkxhYmVsV2lkZ2V0KHtcblx0XHRcdFx0bGFiZWw6IHJpZ2h0TG9nV2FwcGVyLFxuXHRcdFx0fSk7XG5cdFx0XHREaWFsb2cuZWRpdFBhbmVsLiRlbGVtZW50LmFwcGVuZChEaWFsb2cucmlnaHRMb2cuJGVsZW1lbnQpO1xuXG5cdFx0XHRjb25zdCBxdWVyeUxvZ0V2ZW50c1BhcmFtczogQXBpUXVlcnlMb2dFdmVudHNQYXJhbXMgPSB7XG5cdFx0XHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHRcdGxpc3Q6ICdsb2dldmVudHMnLFxuXHRcdFx0XHRsZWFjdGlvbjogJ3JpZ2h0cy9yaWdodHMnLFxuXHRcdFx0XHRsZXRpdGxlOiBgVXNlcjoke3VzZXJOYW1lfWAsXG5cdFx0XHRcdGxlbGltaXQ6IDEsXG5cdFx0XHR9O1xuXG5cdFx0XHR2b2lkIGFwaS5nZXQocXVlcnlMb2dFdmVudHNQYXJhbXMpLmRvbmUoKGRhdGEpID0+IHtcblx0XHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnNhZmUtYXNzaWdubWVudFxuXHRcdFx0XHRjb25zdCBsb2dzID0gZGF0YVsncXVlcnknXS5sb2dldmVudHM7XG5cdFx0XHRcdGlmIChsb2dzLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0XHRcdHJpZ2h0TG9nVGV4dC50ZXh0KHdnVUxTKCfmsqHmnInku7vkvZXml6Xlv5cnLCAn5rKS5pyJ5Lu75L2V5pel6KqMJykpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdC8vIEB0cy1leHBlY3QtZXJyb3IgVFMyMzA0XG5cdFx0XHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnNhZmUtYXNzaWdubWVudCwgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVuc2FmZS1jYWxsLCBuZXctY2FwXG5cdFx0XHRcdFx0Y29uc3QgdGltZXN0YW1wID0gbmV3IE1vcmViaXRzLmRhdGUobG9nc1swXS50aW1lc3RhbXApLmNhbGVuZGFyKCk7XG5cdFx0XHRcdFx0Y29uc3QgcmlnaHRzID0gKGxvZ3NbMF0ucGFyYW1zLm5ld2dyb3VwcyBhcyBzdHJpbmdbXSkuam9pbign44CBJykgfHwgd2dVTFMoJ++8iOaXoO+8iScsICfvvIjnhKHvvIknKTtcblx0XHRcdFx0XHRyaWdodExvZ1RleHQudGV4dChcblx0XHRcdFx0XHRcdGAke3RpbWVzdGFtcH0gJHtsb2dzWzBdLnVzZXJ9JHt3Z1VMUygn5bCG55So5oi357uE5pS55Li6JywgJ+Wwh+S9v+eUqOiAhee+pOe1hOaUueeCuicpfSR7cmlnaHRzfWBcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblxuXHRcdFx0RGlhbG9nLmVkaXRGaWVsZHNldCA9IG5ldyBPTy51aS5GaWVsZHNldExheW91dCh7XG5cdFx0XHRcdGNsYXNzZXM6IFsnY29udGFpbmVyJ10sXG5cdFx0XHR9KTtcblx0XHRcdERpYWxvZy5lZGl0UGFuZWwuJGVsZW1lbnQuYXBwZW5kKERpYWxvZy5lZGl0RmllbGRzZXQuJGVsZW1lbnQpO1xuXG5cdFx0XHREaWFsb2cucmlnaHRzQ2hhbmdlU3VtbWFyeUlucHV0ID0gbmV3IE9PLnVpLlRleHRJbnB1dFdpZGdldCh7XG5cdFx0XHRcdHZhbHVlOiAnJyxcblx0XHRcdFx0cGxhY2Vob2xkZXI6ICflj6/nlZnnqbonLFxuXHRcdFx0fSk7XG5cdFx0XHQvLyBAdHMtZXhwZWN0LWVycm9yIFRTMjMzOVxuXHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnNhZmUtY2FsbFxuXHRcdFx0RGlhbG9nLmV4cGlyeUlucHV0ID0gbmV3IG13LndpZGdldHMuRXhwaXJ5V2lkZ2V0KHtcblx0XHRcdFx0JG92ZXJsYXk6ICRib2R5LmZpbmQoJy5vby11aS13aW5kb3cnKSxcblx0XHRcdFx0Ly8gQHRzLWV4cGVjdC1lcnJvciBUUzIzMzlcblx0XHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnNhZmUtYXNzaWdubWVudFxuXHRcdFx0XHRSZWxhdGl2ZUlucHV0Q2xhc3M6IG13LndpZGdldHMuU2VsZWN0V2l0aElucHV0V2lkZ2V0LFxuXHRcdFx0XHRyZWxhdGl2ZUlucHV0OiB7XG5cdFx0XHRcdFx0b3I6IHRydWUsXG5cdFx0XHRcdFx0ZHJvcGRvd25pbnB1dDoge1xuXHRcdFx0XHRcdFx0b3B0aW9uczogW1xuXHRcdFx0XHRcdFx0XHR7ZGF0YTogJzEgZGF5JywgbGFiZWw6ICcx5aSpJ30sXG5cdFx0XHRcdFx0XHRcdHtkYXRhOiAnMSB3ZWVrJywgbGFiZWw6IHdnVUxTKCcx5ZGoJywgJzHpgLEnKX0sXG5cdFx0XHRcdFx0XHRcdHtkYXRhOiAnMSBtb250aCcsIGxhYmVsOiB3Z1VMUygnMeS4quaciCcsICcx5YCL5pyIJyl9LFxuXHRcdFx0XHRcdFx0XHR7ZGF0YTogJzMgbW9udGhzJywgbGFiZWw6IHdnVUxTKCcz5Liq5pyIJywgJzPlgIvmnIgnKX0sXG5cdFx0XHRcdFx0XHRcdHtkYXRhOiAnNiBtb250aHMnLCBsYWJlbDogd2dVTFMoJzbkuKrmnIgnLCAnNuWAi+aciCcpfSxcblx0XHRcdFx0XHRcdFx0e2RhdGE6ICcxIHllYXInLCBsYWJlbDogJzHlubQnfSxcblx0XHRcdFx0XHRcdFx0e2RhdGE6ICdpbmZpbml0ZScsIGxhYmVsOiB3Z1VMUygn5rKh5pyJ5pyf6ZmQJywgJ+aykuacieacn+mZkCcpfSxcblx0XHRcdFx0XHRcdFx0e2RhdGE6ICdvdGhlcicsIGxhYmVsOiB3Z1VMUygn5YW25LuW5pe26Ze0JywgJ+WFtuS7luaZgumWkycpfSxcblx0XHRcdFx0XHRcdF0sXG5cdFx0XHRcdFx0XHR2YWx1ZTogJ2luZmluaXRlJyxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHRleHRpbnB1dDoge1xuXHRcdFx0XHRcdFx0cmVxdWlyZWQ6IHRydWUsXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0fSxcblx0XHRcdH0pIGFzIE9PLnVpLldpZGdldDtcblx0XHRcdERpYWxvZy5jbG9zaW5nUmVtYXJrc0lucHV0ID0gbmV3IE9PLnVpLlRleHRJbnB1dFdpZGdldCh7XG5cdFx0XHRcdHZhbHVlOiAne3tkb25lfX0tLX5+fn4nLFxuXHRcdFx0fSk7XG5cdFx0XHREaWFsb2cud2F0Y2hUYWxrUGFnZUNoZWNrYm94ID0gbmV3IE9PLnVpLkNoZWNrYm94SW5wdXRXaWRnZXQoe1xuXHRcdFx0XHRzZWxlY3RlZDogZmFsc2UsXG5cdFx0XHR9KTtcblx0XHRcdGNvbnN0IGZvcm1FbGVtZW50cyA9IFtcblx0XHRcdFx0bmV3IE9PLnVpLkZpZWxkTGF5b3V0KERpYWxvZy5yaWdodHNDaGFuZ2VTdW1tYXJ5SW5wdXQsIHtcblx0XHRcdFx0XHRsYWJlbDogd2dVTFMoJ+aOiOadg+WOn+WboCcsICfmjojmrIrljp/lm6AnKSxcblx0XHRcdFx0fSksXG5cdFx0XHRcdG5ldyBPTy51aS5GaWVsZExheW91dChEaWFsb2cuZXhwaXJ5SW5wdXQsIHtcblx0XHRcdFx0XHRsYWJlbDogd2dVTFMoJ+e7k+adn+aXtumXtCcsICfntZDmnZ/mmYLplpMnKSxcblx0XHRcdFx0fSksXG5cdFx0XHRcdG5ldyBPTy51aS5GaWVsZExheW91dChEaWFsb2cuY2xvc2luZ1JlbWFya3NJbnB1dCwge1xuXHRcdFx0XHRcdGxhYmVsOiB3Z1VMUygn5YWz6Zet6K+35rGC55WZ6KiAJywgJ+mXnOmWieiri+axgueVmeiogCcpLFxuXHRcdFx0XHR9KSxcblx0XHRcdF07XG5cdFx0XHRpZiAocGVybWlzc2lvblRlbXBsYXRlKSB7XG5cdFx0XHRcdGZvcm1FbGVtZW50cy5wdXNoKFxuXHRcdFx0XHRcdG5ldyBPTy51aS5GaWVsZExheW91dChEaWFsb2cud2F0Y2hUYWxrUGFnZUNoZWNrYm94LCB7XG5cdFx0XHRcdFx0XHRsYWJlbDogd2dVTFMoJ+ebkeinhueUqOaIt+iuqOiuuumhtScsICfnm6Poppbkvb/nlKjogIXoqI7oq5bpoIEnKSxcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXHRcdFx0RGlhbG9nLmVkaXRGaWVsZHNldC5hZGRJdGVtcyhmb3JtRWxlbWVudHMpO1xuXHRcdFx0RGlhbG9nLnN1Ym1pdFBhbmVsID0gbmV3IE9PLnVpLlBhbmVsTGF5b3V0KHtcblx0XHRcdFx0ZXhwYW5kZWQ6IGZhbHNlLFxuXHRcdFx0fSk7XG5cdFx0XHREaWFsb2cuc3VibWl0RmllbGRzZXQgPSBuZXcgT08udWkuRmllbGRzZXRMYXlvdXQoe1xuXHRcdFx0XHRjbGFzc2VzOiBbJ2NvbnRhaW5lciddLFxuXHRcdFx0fSk7XG5cdFx0XHREaWFsb2cuc3VibWl0UGFuZWwuJGVsZW1lbnQuYXBwZW5kKERpYWxvZy5zdWJtaXRGaWVsZHNldC4kZWxlbWVudCk7XG5cdFx0XHREaWFsb2cuc3VibWl0UGFuZWwuJGVsZW1lbnQuYXBwZW5kKERpYWxvZy5zdWJtaXRGaWVsZHNldC4kZWxlbWVudCk7XG5cdFx0XHREaWFsb2cuc3RhY2tMYXlvdXQgPSBuZXcgT08udWkuU3RhY2tMYXlvdXQoe1xuXHRcdFx0XHRpdGVtczogW0RpYWxvZy5lZGl0UGFuZWwsIERpYWxvZy5zdWJtaXRQYW5lbF0sXG5cdFx0XHRcdHBhZGRlZDogdHJ1ZSxcblx0XHRcdH0pO1xuXHRcdFx0KHRoaXMuJGJvZHkgYXMgSlF1ZXJ5KS5hcHBlbmQoRGlhbG9nLnN0YWNrTGF5b3V0LiRlbGVtZW50KTtcblxuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fVxuXHRcdHB1YmxpYyBzdGF0aWMgb25TdWJtaXQoKSB7XG5cdFx0XHR2b2lkIG1hcmtBc0RvbmUoe3VzZXJOYW1lLCBpbmRleCwgY2xvc2luZ1JlbWFya3M6IGBcXG46JHtEaWFsb2cuY2xvc2luZ1JlbWFya3NJbnB1dC5nZXRWYWx1ZSgpfWB9KVxuXHRcdFx0XHQudGhlbigoZGF0YSkgPT4ge1xuXHRcdFx0XHRcdHZvaWQgYXNzaWduUGVybWlzc2lvbih7XG5cdFx0XHRcdFx0XHR1c2VyTmFtZSxcblx0XHRcdFx0XHRcdHBlcm1pc3Npb24sXG5cdFx0XHRcdFx0XHRzdW1tYXJ5OiBEaWFsb2cucmlnaHRzQ2hhbmdlU3VtbWFyeUlucHV0LmdldFZhbHVlKCksXG5cdFx0XHRcdFx0XHRyZXZJZDogTnVtYmVyLnBhcnNlSW50KGRhdGFbJ2VkaXQnXS5uZXdyZXZpZCBhcyBzdHJpbmcsIDEwKSxcblx0XHRcdFx0XHRcdGV4cGlyeTogKERpYWxvZy5leHBpcnlJbnB1dCBhcyBPTy51aS5UZXh0SW5wdXRXaWRnZXQpLmdldFZhbHVlKCksXG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0pXG5cdFx0XHRcdC50aGVuKCgpID0+IHtcblx0XHRcdFx0XHR2b2lkIGlzc3VlVGVtcGxhdGUoe3VzZXJOYW1lLCBwZXJtaXNzaW9uLCB3YXRjaDogRGlhbG9nLndhdGNoVGFsa1BhZ2VDaGVja2JveC5pc1NlbGVjdGVkKCl9KTtcblx0XHRcdFx0fSlcblx0XHRcdFx0LnRoZW4oKCkgPT4ge1xuXHRcdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHRcdFx0bG9jYXRpb24ucmVsb2FkKCk7XG5cdFx0XHRcdFx0fSwgMTAwMCk7XG5cdFx0XHRcdH0pO1xuXG5cdFx0XHREaWFsb2cuc3RhY2tMYXlvdXQuc2V0SXRlbShEaWFsb2cuc3VibWl0UGFuZWwpO1xuXHRcdH1cblx0XHRzdGF0aWMgcHVzaFBlbmRpbmcoKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ01ldGhvZCBub3QgaW1wbGVtZW50ZWQuJyk7XG5cdFx0fVxuXHRcdHN0YXRpYyBwb3BQZW5kaW5nKCkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdNZXRob2Qgbm90IGltcGxlbWVudGVkLicpO1xuXHRcdH1cblxuXHRcdHB1YmxpYyBvdmVycmlkZSBnZXRBY3Rpb25Qcm9jZXNzKGFjdGlvbj86IHN0cmluZyk6IE9PLnVpLlByb2Nlc3Mge1xuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0c3VwZXJcblx0XHRcdFx0XHQuZ2V0QWN0aW9uUHJvY2VzcyhhY3Rpb24pXG5cdFx0XHRcdFx0Ly8gQHRzLWV4cGVjdC1lcnJvciBUUzcwMzBcblx0XHRcdFx0XHQubmV4dChmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0XHRpZiAoYWN0aW9uID09PSAnc3VibWl0Jykge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gRGlhbG9nLm9uU3VibWl0KCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRyZXR1cm4gRGlhbG9nLnN1cGVyLnByb3RvdHlwZS5nZXRBY3Rpb25Qcm9jZXNzLmNhbGwodGhpcywgYWN0aW9uKTtcblx0XHRcdFx0XHR9LCB0aGlzKVxuXHRcdFx0KTtcblx0XHR9XG5cdH1cblx0RGlhbG9nLnN0YXRpYyA9IHtcblx0XHQuLi5PTy51aS5Qcm9jZXNzRGlhbG9nLnN0YXRpYyxcblx0fTtcblx0RGlhbG9nLnN0YXRpYy5uYW1lID0gJ3VzZXItcmlnaHRzLW1hbmFnZXInO1xuXHREaWFsb2cuc3RhdGljLnRpdGxlID0gYOaOiOS6iCR7cGVybWlzc2lvbk5hbWV9JHt3Z1VMUygn57uZJywgJ+e1picpfSR7dXNlck5hbWV9YDtcblx0RGlhbG9nLnN0YXRpYy5hY3Rpb25zID0gW1xuXHRcdHthY3Rpb246ICdzdWJtaXQnLCBsYWJlbDogd2dVTFMoJ+aOiOadgycsICfmjojmrIonKSwgZmxhZ3M6IFsncHJpbWFyeScsICdwcm9ncmVzc2l2ZSddfSxcblx0XHR7bGFiZWw6ICflj5bmtognLCBmbGFnczogJ3NhZmUnfSxcblx0XTtcblxuXHRjb25zdCBkaWFsb2cgPSBuZXcgRGlhbG9nKCk7XG5cblx0Y29uc3Qgd2luZG93TWFuYWdlciA9IG5ldyBPTy51aS5XaW5kb3dNYW5hZ2VyKCk7XG5cdCQoJ2JvZHknKS5hcHBlbmQod2luZG93TWFuYWdlci4kZWxlbWVudCk7XG5cdHdpbmRvd01hbmFnZXIuYWRkV2luZG93cyhbZGlhbG9nXSk7XG5cdHZvaWQgd2luZG93TWFuYWdlci5vcGVuV2luZG93KGRpYWxvZyk7XG59O1xuXG5leHBvcnQge3Nob3dEaWFsb2d9O1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEscUJBQXNCQyxRQUFBLGlCQUFBOztBQ0V0QixJQUFNQyxxQkFBcUJBLE1BQXlCO0FBQ25ELFFBQU07SUFBQ0M7RUFBVSxJQUFJQyxHQUFHQyxPQUFPQyxJQUFJO0FBRW5DLFFBQU1DLGtCQUFrQjtJQUN2Qiw0QkFBNEI7SUFDNUIsNEJBQTRCO0lBQzVCLDRCQUE0QjtJQUM1Qiw4QkFBOEI7SUFDOUIsNEJBQTRCO0lBQzVCLDBCQUEwQjtJQUMxQiw0QkFBNEI7SUFDNUIsNEJBQTRCO0lBQzVCLDhCQUE4QjtFQUMvQjtBQUVBLE1BQUlDLGFBQWdDO0FBQ3BDLFdBQUFDLEtBQUEsR0FBQUMsa0JBQXlDQyxPQUFPQyxRQUFRTCxlQUFlLEdBQUFFLEtBQUFDLGdCQUFBRyxRQUFBSixNQUFHO0FBQTFFLFVBQVcsQ0FBQ0ssVUFBVUMsY0FBYyxJQUFBTCxnQkFBQUQsRUFBQTtBQUNuQyxRQUFJSyxhQUFhWCxZQUFZO0FBQzVCSyxtQkFBYU87SUFDZCxPQUFPO0FBQ047SUFDRDtFQUNEO0FBRUEsU0FBT1A7QUFDUjs7QUMxQkMsSUFBQVEsMkJBQTRCO0FBQzVCLElBQUFDLFVBQVc7O0FDRFosSUFBQUMsb0JBQXdCakIsUUFBQSxpQkFBQTtBQUV4QixJQUFNa0IsT0FBQSxHQUFjRCxrQkFBQUUsV0FBQSxrQ0FBQUMsT0FBb0RKLE9BQU8sQ0FBRTs7QUNEakYsSUFBTUsscUJBQXNCZCxnQkFBMEM7QUFDckUsUUFBTWUsa0JBQWtCO0lBQ3ZCQyxXQUFXO0lBQ1hDLGNBQWM7SUFDZEMsV0FBVztJQUNYLHNCQUFzQjtJQUN0QkMsY0FBYztJQUNkQyxXQUFXO0lBQ1hDLGdC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O0FBRXJCLFVBQU10RSxXQUFzQy9ELEVBQUUsSUFBeUI7QUFDdkUsVUFBTWxELFdBQVdqQyxHQUFHdUksS0FBS2tGLGNBQWMsUUFBUXZFLFNBQVNSLEtBQUssTUFBTSxDQUFDO0FBQ3BFLFFBQUksQ0FBQ3pHLFVBQVU7QUFDZDtJQUNEO0FBRUEsVUFBTXlMLGFBQUFILHdCQUFvQnJFLFNBQVN5RSxRQUFRLElBQUksRUFBRUMsS0FBSyxJQUFJLEVBQUV2SSxLQUFLLGNBQWMsRUFBRXFELEtBQUssSUFBSSxPQUFBLFFBQUE2RSwwQkFBQSxTQUFBQSx3QkFBSztBQUMvRixVQUFNMUksUUFDTDZJLGNBQUEsUUFBQXpNLE9BQXNCZ0IsUUFBUSxLQUFNeUwsY0FBYyxRQUFBek0sT0FBUWdCLFFBQVEsRUFBR1MsUUFBUSxNQUFNLEtBQUssRUFBRUEsUUFBUSxNQUFNLEdBQUcsSUFDeEcsS0FDQWdMLFVBQ0NoTCxRQUFRLFNBQVMsRUFBRSxFQUNuQkEsUUFBUVQsVUFBVSxFQUFFLEVBQ3BCUyxRQUFRVCxTQUFTUyxRQUFRLE1BQU0sS0FBSyxFQUFFQSxRQUFRLE1BQU0sR0FBRyxHQUFHLEVBQUU7QUFFakVrRSxlQUFXO01BQUNFO01BQU83RTtNQUFVN0I7TUFBWXlFO0lBQUssQ0FBQztFQUNoRCxDQUFDO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFsiaW1wb3J0X2V4dF9nYWRnZXQyIiwgInJlcXVpcmUiLCAiZ2V0UGFnZVBlcm1pc3Npb25zIiwgIndnUGFnZU5hbWUiLCAibXciLCAiY29uZmlnIiwgImdldCIsICJwYWdlUGVybWlzc2lvbnMiLCAicGVybWlzc2lvbiIsICJfaSIsICJfT2JqZWN0JGVudHJpZXMiLCAiT2JqZWN0IiwgImVudHJpZXMiLCAibGVuZ3RoIiwgInBhZ2VOYW1lIiwgInBhZ2VQZXJtaXNzaW9uIiwgInVzZXJSaWdodHNNYW5hZ2VyU3VtbWFyeSIsICJ2ZXJzaW9uIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgImFwaSIsICJpbml0TXdBcGkiLCAiY29uY2F0IiwgImdldFBlcm1pc3Npb25OYW1lcyIsICJwZXJtaXNzaW9uTmFtZXMiLCAicGF0cm9sbGVyIiwgImF1dG9yZXZpZXdlciIsICJjb25maXJtZWQiLCAiZXZlbnRzcG9uc29yIiwgInRyYW5zd2lraSIsICJ0ZW1wbGF0ZWVkaXRvciIsICJib3QiLCAicGVybWlzc2lvbk5hbWUiLCAiX2kyIiwgIl9PYmplY3QkZW50cmllczIiLCAicmlnaHQiLCAibmFtZSIsICJhc3NpZ25QZXJtaXNzaW9uIiwgInVzZXJOYW1lIiwgInN1bW1hcnkiLCAicmV2SWQiLCAiZXhwaXJ5IiwgInBlcm1hTGluayIsICJmdWxsU3VtbWFyeSIsICJwYXJhbXMiLCAiYWN0aW9uIiwgInVzZXIiLCAicmVwbGFjZSIsICJyZWFzb24iLCAiYWRkIiwgInJlbW92ZSIsICJwb3N0V2l0aFRva2VuIiwgImdldFBlcm1pc3Npb25UZW1wbGF0ZSIsICJwZXJtaXNzaW9uVGVtcGxhdGVzIiwgInRlbXBsYXRlIiwgIl9pMyIsICJfT2JqZWN0JGVudHJpZXMzIiwgInRlbXBsYXRlTmFtZSIsICJpc3N1ZVRlbXBsYXRlIiwgIndhdGNoIiwgInBlcm1pc3Npb25UZW1wbGF0ZSIsICJ0YWxrUGFnZSIsICJmb3JtYXQiLCAidGl0bGUiLCAiYXBwZW5kdGV4dCIsICJ3YXRjaGxpc3QiLCAicG9zdFdpdGhFZGl0VG9rZW4iLCAidGFnTGluZSIsICJxdWVyeVJldmlzaW9ucyIsICJfcmVmIiwgIl9hc3luY1RvR2VuZXJhdG9yIiwgInRpdGxlcyIsICJydnNlY3Rpb24iLCAiZm9ybWF0dmVyc2lvbiIsICJwcm9wIiwgImN1cnRpbWVzdGFtcCIsICJydnByb3AiLCAiX3giLCAiX3gyIiwgImFwcGx5IiwgImFyZ3VtZW50cyIsICJtYXJrQXNEb25lIiwgImluZGV4IiwgImNsb3NpbmdSZW1hcmtzIiwgInNlY3Rpb25Ob2RlIiwgImRvY3VtZW50IiwgImdldEVsZW1lbnRCeUlkIiwgInNlY3Rpb25OdW1iZXIiLCAiJCIsICJzaWJsaW5ncyIsICJmaW5kIiwgIm1hdGNoIiwgImJhc2V0aW1lc3RhbXAiLCAiY29udGVudCIsICJyZXZpc2lvbiIsICJ0aGVuIiwgImRhdGEiLCAicGFnZXMiLCAiRGVmZXJyZWQiLCAicmVqZWN0IiwgInBhZ2UiLCAiaW52YWxpZCIsICJtaXNzaW5nIiwgInJldmlzaW9ucyIsICJ0aW1lc3RhbXAiLCAicmVzb2x2ZSIsICJ0cmltIiwgImVkaXRQYXJhbXMiLCAic2VjdGlvbiIsICJ0ZXh0IiwgInN0YXJ0dGltZXN0YW1wIiwgIm5vY3JlYXRlIiwgImFzc2VydCIsICJzaG93RGlhbG9nIiwgInNob3dEaWFsb2cyIiwgIiRib2R5IiwgIndnVUxTIiwgIndpbmRvdyIsICJEaWFsb2ciLCAiT08iLCAidWkiLCAiUHJvY2Vzc0RpYWxvZyIsICJlZGl0UGFuZWwiLCAicmlnaHRMb2ciLCAiZWRpdEZpZWxkc2V0IiwgInJpZ2h0c0NoYW5nZVN1bW1hcnlJbnB1dCIsICJleHBpcnlJbnB1dCIsICJjbG9zaW5nUmVtYXJrc0lucHV0IiwgIndhdGNoVGFsa1BhZ2VDaGVja2JveCIsICJzdWJtaXRQYW5lbCIsICJzdWJtaXRGaWVsZHNldCIsICJzdGFja0xheW91dCIsICJjb25zdHJ1Y3RvciIsICJzaXplIiwgImdldEJvZHlIZWlnaHQiLCAiaW5pdGlhbGl6ZSIsICJQYW5lbExheW91dCIsICJleHBhbmRlZCIsICJyaWdodExvZ1dhcHBlciIsICJ1cmwiLCAidXRpbCIsICJnZXRVcmwiLCAidHlwZSIsICJhdHRyIiwgImhyZWYiLCAidGFyZ2V0IiwgImFwcGVuZFRvIiwgImFwcGVuZCIsICJyaWdodExvZ1RleHQiLCAiTGFiZWxXaWRnZXQiLCAibGFiZWwiLCAiJGVsZW1lbnQiLCAicXVlcnlMb2dFdmVudHNQYXJhbXMiLCAibGlzdCIsICJsZWFjdGlvbiIsICJsZXRpdGxlIiwgImxlbGltaXQiLCAiZG9uZSIsICJsb2dzIiwgImxvZ2V2ZW50cyIsICJNb3JlYml0cyIsICJkYXRlIiwgImNhbGVuZGFyIiwgInJpZ2h0cyIsICJuZXdncm91cHMiLCAiam9pbiIsICJGaWVsZHNldExheW91dCIsICJjbGFzc2VzIiwgIlRleHRJbnB1dFdpZGdldCIsICJ2YWx1ZSIsICJwbGFjZWhvbGRlciIsICJ3aWRnZXRzIiwgIkV4cGlyeVdpZGdldCIsICIkb3ZlcmxheSIsICJSZWxhdGl2ZUlucHV0Q2xhc3MiLCAiU2VsZWN0V2l0aElucHV0V2lkZ2V0IiwgInJlbGF0aXZlSW5wdXQiLCAib3IiLCAiZHJvcGRvd25pbnB1dCIsICJvcHRpb25zIiwgInRleHRpbnB1dCIsICJyZXF1aXJlZCIsICJDaGVja2JveElucHV0V2lkZ2V0IiwgInNlbGVjdGVkIiwgImZvcm1FbGVtZW50cyIsICJGaWVsZExheW91dCIsICJwdXNoIiwgImFkZEl0ZW1zIiwgIlN0YWNrTGF5b3V0IiwgIml0ZW1zIiwgInBhZGRlZCIsICJvblN1Ym1pdCIsICJnZXRWYWx1ZSIsICJOdW1iZXIiLCAicGFyc2VJbnQiLCAibmV3cmV2aWQiLCAiaXNTZWxlY3RlZCIsICJzZXRUaW1lb3V0IiwgImxvY2F0aW9uIiwgInJlbG9hZCIsICJzZXRJdGVtIiwgInB1c2hQZW5kaW5nIiwgIkVycm9yIiwgInBvcFBlbmRpbmciLCAiZ2V0QWN0aW9uUHJvY2VzcyIsICJuZXh0IiwgInN1cGVyIiwgInByb3RvdHlwZSIsICJjYWxsIiwgInN0YXRpYyIsICJhY3Rpb25zIiwgImZsYWdzIiwgImRpYWxvZyIsICJ3aW5kb3dNYW5hZ2VyIiwgIldpbmRvd01hbmFnZXIiLCAiYWRkV2luZG93cyIsICJvcGVuV2luZG93IiwgImdldEJvZHkiLCAib24iLCAiZXZlbnQiLCAiXyRlbGVtZW50JHBhcmVudHMkcHJlIiwgInByZXZlbnREZWZhdWx0IiwgImdldFBhcmFtVmFsdWUiLCAic2VjdGlvbklkIiwgInBhcmVudHMiLCAicHJldiJdCn0K

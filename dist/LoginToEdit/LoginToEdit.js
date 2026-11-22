/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/LoginToEdit}
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

// dist/LoginToEdit/LoginToEdit.js
//! src/LoginToEdit/LoginToEdit.ts
var import_ext_gadget2 = require("ext.gadget.Util");
//! src/LoginToEdit/modules/i18n.ts
var import_ext_gadget = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    Cancel: (0, import_ext_gadget.localize)({
      en: "Cancel",
      ja: "キャンセル",
      "zh-hans": "暂不登录或注册账号",
      "zh-hant": "暫不登入或註冊賬號"
    }),
    Edit: (0, import_ext_gadget.localize)({
      en: "Edit",
      ja: "編集",
      "zh-hans": "编辑",
      "zh-hant": "編輯"
    }),
    Help: (0, import_ext_gadget.localize)({
      en: "Get help",
      "zh-hans": "了解详情",
      "zh-hant": "了解詳情"
    }),
    Login: (0, import_ext_gadget.localize)({
      en: "Login",
      ja: "ログイン",
      "zh-hans": "登录已有账号",
      "zh-hant": "登入已有賬號"
    }),
    Register: (0, import_ext_gadget.localize)({
      en: "Register",
      ja: "アカウントを作成",
      "zh-hans": "注册新的账号",
      "zh-hant": "註冊新的賬號"
    }),
    DialogTitle: (0, import_ext_gadget.localize)({
      en: "Welcome to Qiuwen Baike!",
      ja: "求聞百科へようこそ！",
      "zh-hans": "欢迎来到求闻百科！",
      "zh-hant": "歡迎來到求聞百科！"
    }),
    DialogMessage: (0, import_ext_gadget.localize)({
      en: "You have not yet logged in. Register and log in to your account to contribute.",
      ja: "あなたはまだ求聞百科にログインしていません。アカウントを作成し、ログインして求聞百科を改善することができます。",
      "zh-hans": "您尚未登录求闻百科。您可以注册并登录账号，帮助完善求闻百科。",
      "zh-hant": "您尚未登錄求聞百科。您可以注冊並登錄賬號，幫助完善求聞百科。"
    })
  };
};
var i18nMessages = getI18nMessages();
var getMessage = (key) => {
  return i18nMessages[key] || key;
};
//! src/LoginToEdit/modules/initDialog.ts
var {
  skin,
  wgAction,
  wgPageName
} = mw.config.get();
var isCitizen = skin === "citizen";
var loginURL = mw.util.getUrl("Special:UserLogin", {
  returnto: wgPageName
});
var registerURL = mw.util.getUrl("Special:CreateAccount", {
  returnto: wgPageName
});
var helpURL = "https://www.qiuwenbaike.cn/wiki/H:LOGIN";
var openDialog = async () => {
  try {
    const moduleName = "ext.gadget.NoticeDialog";
    const require2 = await mw.loader.using(moduleName);
    const {
      showNoticeDialog
    } = require2(moduleName);
    showNoticeDialog({
      title: getMessage("DialogTitle"),
      message: getMessage("DialogMessage"),
      cancelLabel: getMessage("Cancel"),
      helpLabel: getMessage("Help"),
      helpURL,
      actions: [{
        label: getMessage("Register"),
        onClick: () => {
          location.href = registerURL;
        }
      }, {
        label: getMessage("Login"),
        onClick: () => {
          location.href = loginURL;
        }
      }]
    });
  } catch (error) {
    mw.log.warn("[LoginToEdit] ext.gadget.NoticeDialog is unavailable; falling back to window.confirm.", error);
    if (window.confirm(`${getMessage("DialogTitle")}

${getMessage("DialogMessage")}`)) {
      location.href = loginURL;
    }
  }
};
var initDialog = () => {
  const caViewsource = document.querySelector("#ca-viewsource");
  if (caViewsource) {
    caViewsource.id = "ca-edit";
    const link = caViewsource.querySelector("a");
    if (link) {
      link.replaceChildren();
      link.setAttribute("aria-label", getMessage("DialogMessage"));
      if (isCitizen) {
        const editIcon = document.createElement("span");
        editIcon.className = "citizen-ui-icon mw-ui-icon-wikimedia-edit";
        link.append(editIcon);
      }
      link.append(getMessage("Edit"));
      link.addEventListener("click", (event) => {
        event.preventDefault();
        void openDialog();
      });
    }
  }
  if (["edit", "submit"].includes(wgAction)) {
    void openDialog();
  }
};
//! src/LoginToEdit/LoginToEdit.ts
void (0, import_ext_gadget2.getBody)().then(function loginToEdit() {
  const {
    wgUserName
  } = mw.config.get();
  if (wgUserName) {
    return;
  }
  initDialog();
});

})();

/* </nowiki> */


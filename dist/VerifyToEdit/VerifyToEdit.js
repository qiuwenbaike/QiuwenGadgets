/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/LoginToEdit}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/VerifyToEdit}
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

// dist/VerifyToEdit/VerifyToEdit.js
//! src/VerifyToEdit/VerifyToEdit.ts
var import_ext_gadget2 = require("ext.gadget.Util");
//! src/VerifyToEdit/modules/i18n.ts
var import_ext_gadget = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    Cancel: (0, import_ext_gadget.localize)({
      en: "Remind me later",
      "zh-hans": "暂不认证",
      "zh-hant": "暫不認證"
    }),
    Edit: (0, import_ext_gadget.localize)({
      en: "Edit",
      "zh-hans": "编辑",
      "zh-hant": "編輯"
    }),
    Help: (0, import_ext_gadget.localize)({
      en: "Get help",
      "zh-hans": "了解详情",
      "zh-hant": "了解詳情"
    }),
    Verify: (0, import_ext_gadget.localize)({
      en: "Verify your mobile phone number",
      "zh-hans": "认证手机号码",
      "zh-hant": "認證行動電話號碼"
    }),
    DialogTitle: (0, import_ext_gadget.localize)({
      en: "Verify your mobile phone number",
      "zh-hans": "完成手机号码认证",
      "zh-hant": "完成行動電話號碼認證"
    }),
    DialogMessage: (0, import_ext_gadget.localize)({
      en: "You have logged in, but your mobile phone number has not been verified yet. In order to prevent vandalism, you must complete phone number verification before starting editing.",
      "zh-hans": "您已登录求闻百科，但您暂未完成手机号码认证。基于减少破坏的目的，在开始编辑前，您必须完成手机号码认证。",
      "zh-hant": "您已登錄求聞百科，但您暫未完成行動電話號碼認證。基於減少破壞的目的，在開始編輯前，您必須完成行動電話號碼認證。"
    })
  };
};
var i18nMessages = getI18nMessages();
var getMessage = (key) => {
  return i18nMessages[key] || key;
};
//! src/VerifyToEdit/modules/initDialog.ts
var {
  skin,
  wgAction
} = mw.config.get();
var isCitizen = skin === "citizen";
var helpURL = "https://www.qiuwenbaike.cn/wiki/H:RNRS";
var verifyURL = `${mw.util.getUrl("Special:Preferences")}#mw-input-wprnrshook-module`;
var openDialog = async () => {
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
    primary: {
      label: getMessage("Verify"),
      onClick: () => {
        location.href = verifyURL;
      }
    }
  });
};
var initDialog = () => {
  const caViewsource = document.querySelector("#ca-viewsource");
  if (caViewsource) {
    caViewsource.id = "ca-edit";
    const link = caViewsource.querySelector("a");
    if (link) {
      link.setAttribute("aria-label", getMessage("DialogMessage"));
      if (isCitizen) {
        const editIcon = document.createElement("span");
        editIcon.className = "citizen-ui-icon mw-ui-icon-wikimedia-edit";
        link.replaceChildren(editIcon, getMessage("Edit"));
      } else {
        link.replaceChildren(getMessage("Edit"));
      }
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
//! src/VerifyToEdit/VerifyToEdit.ts
void (0, import_ext_gadget2.getBody)().then(function loginToEdit() {
  const {
    wgUserName
  } = mw.config.get();
  if (!wgUserName) {
    return;
  }
  if ((0, import_ext_gadget2.userIsInGroup)(["bot", "qiuwen", "rnrsverify-confirmed", "rnrsverify-exempt", "steward"])) {
    return;
  }
  initDialog();
});

})();

/* </nowiki> */


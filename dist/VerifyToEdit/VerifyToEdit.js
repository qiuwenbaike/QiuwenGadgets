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
//! src/VerifyToEdit/modules/util/generateMessageDialogProperty.ts
var generateMessageDialogProperty = () => {
  const $title = $("<b>").addClass("oo-ui-window-head").text(getMessage("DialogTitle"));
  const $message = $("<span>").addClass("oo-ui-window-foot").text(getMessage("DialogMessage"));
  const messageDialogProperty = {
    title: $title,
    message: $message,
    actions: [{
      action: "help",
      flags: "progressive",
      label: $("<b>").text(getMessage("Help"))
    }, {
      action: "verify",
      flags: ["primary", "progressive"],
      label: $("<b>").text(getMessage("Verify"))
    }, {
      action: "cancel",
      flags: ["safe", "close"],
      label: $("<b>").text(getMessage("Cancel"))
    }]
  };
  return messageDialogProperty;
};
//! src/VerifyToEdit/modules/initWindowManager.ts
var initWindowManager = () => {
  const windowManager = new OO.ui.WindowManager();
  return windowManager;
};
//! src/VerifyToEdit/modules/initDialog.ts
var {
  skin,
  wgAction
} = mw.config.get();
var isCitizen = skin === "citizen";
var helpURL = "https://www.qiuwenbaike.cn/wiki/H:RNRS";
var verifyURL = "".concat(mw.util.getUrl("Special:Preferences"), "#mw-input-wprnrshook-module");
var messageDialog;
var initDialog = ($body) => {
  const windowManager = initWindowManager();
  windowManager.$element.appendTo($body);
  const messageDialogProperty = generateMessageDialogProperty();
  const openDialog = () => {
    if (messageDialog) {
      if (messageDialog.isOpened()) {
        messageDialog.close();
      } else {
        messageDialog.open(messageDialogProperty);
      }
      return;
    }
    messageDialog = new OO.ui.MessageDialog();
    messageDialog.getActionProcess = (action) => {
      if (action === "help") {
        location.href = helpURL;
      } else if (action === "verify") {
        location.href = verifyURL;
      }
      return new OO.ui.Process(() => {
        void windowManager.closeWindow(messageDialog);
      });
    };
    windowManager.addWindows([messageDialog]);
    void windowManager.openWindow(messageDialog, messageDialogProperty);
  };
  const $caViewsource = $body.find("#ca-viewsource");
  if ($caViewsource.length) {
    const editIcon = isCitizen ? '<span class="citizen-ui-icon mw-ui-icon-wikimedia-edit"></span>' : "";
    $caViewsource.attr("id", "ca-edit").find("a").attr("aria-label", getMessage("DialogMessage")).html(editIcon + getMessage("Edit")).on("click", (event) => {
      event.preventDefault();
      openDialog();
    });
  }
  if (["edit", "submit"].includes(wgAction)) {
    openDialog();
  }
};
//! src/VerifyToEdit/VerifyToEdit.ts
void (0, import_ext_gadget2.getBody)().then(function loginToEdit($body) {
  const {
    wgUserName
  } = mw.config.get();
  if (!wgUserName) {
    return;
  }
  if ((0, import_ext_gadget2.userIsInGroup)(["rnrsverify-confirmed", "rnrsverify-exempt", "steward", "qiuwen"])) {
    return;
  }
  initDialog($body);
});

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1ZlcmlmeVRvRWRpdC9WZXJpZnlUb0VkaXQudHMiLCAic3JjL1ZlcmlmeVRvRWRpdC9tb2R1bGVzL2kxOG4udHMiLCAic3JjL1ZlcmlmeVRvRWRpdC9tb2R1bGVzL3V0aWwvZ2VuZXJhdGVNZXNzYWdlRGlhbG9nUHJvcGVydHkudHMiLCAic3JjL1ZlcmlmeVRvRWRpdC9tb2R1bGVzL2luaXRXaW5kb3dNYW5hZ2VyLnRzIiwgInNyYy9WZXJpZnlUb0VkaXQvbW9kdWxlcy9pbml0RGlhbG9nLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQge2dldEJvZHksIHVzZXJJc0luR3JvdXB9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5pbXBvcnQge2luaXREaWFsb2d9IGZyb20gJy4vbW9kdWxlcy9pbml0RGlhbG9nJztcblxudm9pZCBnZXRCb2R5KCkudGhlbihmdW5jdGlvbiBsb2dpblRvRWRpdCgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkIHtcblx0Y29uc3Qge3dnVXNlck5hbWV9ID0gbXcuY29uZmlnLmdldCgpO1xuXG5cdGlmICghd2dVc2VyTmFtZSkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGlmICh1c2VySXNJbkdyb3VwKFsncm5yc3ZlcmlmeS1jb25maXJtZWQnLCAncm5yc3ZlcmlmeS1leGVtcHQnLCAnc3Rld2FyZCcsICdxaXV3ZW4nXSkpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRpbml0RGlhbG9nKCRib2R5KTtcbn0pO1xuIiwgImltcG9ydCB7bG9jYWxpemV9IGZyb20gJ2V4dC5nYWRnZXQuaTE4bic7XG5cbmNvbnN0IGdldEkxOG5NZXNzYWdlcyA9ICgpID0+IHtcblx0cmV0dXJuIHtcblx0XHRDYW5jZWw6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnUmVtaW5kIG1lIGxhdGVyJyxcblx0XHRcdCd6aC1oYW5zJzogJ+aaguS4jeiupOivgScsXG5cdFx0XHQnemgtaGFudCc6ICfmmqvkuI3oqo3orYknLFxuXHRcdH0pLFxuXHRcdEVkaXQ6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnRWRpdCcsXG5cdFx0XHQnemgtaGFucyc6ICfnvJbovpEnLFxuXHRcdFx0J3poLWhhbnQnOiAn57eo6LyvJyxcblx0XHR9KSxcblx0XHRIZWxwOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0dldCBoZWxwJyxcblx0XHRcdCd6aC1oYW5zJzogJ+S6huino+ivpuaDhScsXG5cdFx0XHQnemgtaGFudCc6ICfkuobop6PoqbPmg4UnLFxuXHRcdH0pLFxuXHRcdFZlcmlmeTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdWZXJpZnkgeW91ciBtb2JpbGUgcGhvbmUgbnVtYmVyJyxcblx0XHRcdCd6aC1oYW5zJzogJ+iupOivgeaJi+acuuWPt+eggScsXG5cdFx0XHQnemgtaGFudCc6ICfoqo3orYnooYzli5Xpm7voqbHomZ/norwnLFxuXHRcdH0pLFxuXHRcdERpYWxvZ1RpdGxlOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1ZlcmlmeSB5b3VyIG1vYmlsZSBwaG9uZSBudW1iZXInLFxuXHRcdFx0J3poLWhhbnMnOiAn5a6M5oiQ5omL5py65Y+356CB6K6k6K+BJyxcblx0XHRcdCd6aC1oYW50JzogJ+WujOaIkOihjOWLlembu+ipseiZn+eivOiqjeitiScsXG5cdFx0fSksXG5cdFx0RGlhbG9nTWVzc2FnZTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdZb3UgaGF2ZSBsb2dnZWQgaW4sIGJ1dCB5b3VyIG1vYmlsZSBwaG9uZSBudW1iZXIgaGFzIG5vdCBiZWVuIHZlcmlmaWVkIHlldC4gSW4gb3JkZXIgdG8gcHJldmVudCB2YW5kYWxpc20sIHlvdSBtdXN0IGNvbXBsZXRlIHBob25lIG51bWJlciB2ZXJpZmljYXRpb24gYmVmb3JlIHN0YXJ0aW5nIGVkaXRpbmcuJyxcblx0XHRcdCd6aC1oYW5zJzpcblx0XHRcdFx0J+aCqOW3sueZu+W9leaxgumXu+eZvuenke+8jOS9huaCqOaaguacquWujOaIkOaJi+acuuWPt+eggeiupOivgeOAguWfuuS6juWHj+WwkeegtOWdj+eahOebrueahO+8jOWcqOW8gOWni+e8lui+keWJje+8jOaCqOW/hemhu+WujOaIkOaJi+acuuWPt+eggeiupOivgeOAgicsXG5cdFx0XHQnemgtaGFudCc6XG5cdFx0XHRcdCfmgqjlt7LnmbvpjITmsYLogZ7nmb7np5HvvIzkvYbmgqjmmqvmnKrlrozmiJDooYzli5Xpm7voqbHomZ/norzoqo3orYnjgILln7rmlrzmuJvlsJHnoLTlo57nmoTnm67nmoTvvIzlnKjplovlp4vnt6jovK/liY3vvIzmgqjlv4XpoIjlrozmiJDooYzli5Xpm7voqbHomZ/norzoqo3orYnjgIInLFxuXHRcdH0pLFxuXHR9O1xufTtcblxuY29uc3QgaTE4bk1lc3NhZ2VzID0gZ2V0STE4bk1lc3NhZ2VzKCk7XG5cbmNvbnN0IGdldE1lc3NhZ2U6IEdldE1lc3NhZ2VzPHR5cGVvZiBpMThuTWVzc2FnZXM+ID0gKGtleSkgPT4ge1xuXHRyZXR1cm4gaTE4bk1lc3NhZ2VzW2tleV0gfHwga2V5O1xufTtcblxuZXhwb3J0IHtnZXRNZXNzYWdlfTtcbiIsICJpbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4uL2kxOG4nO1xuXG5jb25zdCBnZW5lcmF0ZU1lc3NhZ2VEaWFsb2dQcm9wZXJ0eSA9ICgpOiBPTy51aS5XaW5kb3dNYW5hZ2VyLldpbmRvd09wZW5pbmdEYXRhID0+IHtcblx0Y29uc3QgJHRpdGxlOiBKUXVlcnkgPSAkKCc8Yj4nKS5hZGRDbGFzcygnb28tdWktd2luZG93LWhlYWQnKS50ZXh0KGdldE1lc3NhZ2UoJ0RpYWxvZ1RpdGxlJykpO1xuXHRjb25zdCAkbWVzc2FnZTogSlF1ZXJ5ID0gJCgnPHNwYW4+JykuYWRkQ2xhc3MoJ29vLXVpLXdpbmRvdy1mb290JykudGV4dChnZXRNZXNzYWdlKCdEaWFsb2dNZXNzYWdlJykpO1xuXG5cdGNvbnN0IG1lc3NhZ2VEaWFsb2dQcm9wZXJ0eTogT08udWkuV2luZG93TWFuYWdlci5XaW5kb3dPcGVuaW5nRGF0YSA9IHtcblx0XHR0aXRsZTogJHRpdGxlLFxuXHRcdG1lc3NhZ2U6ICRtZXNzYWdlLFxuXHRcdGFjdGlvbnM6IFtcblx0XHRcdHtcblx0XHRcdFx0YWN0aW9uOiAnaGVscCcsXG5cdFx0XHRcdGZsYWdzOiAncHJvZ3Jlc3NpdmUnLFxuXHRcdFx0XHRsYWJlbDogJCgnPGI+JykudGV4dChnZXRNZXNzYWdlKCdIZWxwJykpLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0YWN0aW9uOiAndmVyaWZ5Jyxcblx0XHRcdFx0ZmxhZ3M6IFsncHJpbWFyeScsICdwcm9ncmVzc2l2ZSddLFxuXHRcdFx0XHRsYWJlbDogJCgnPGI+JykudGV4dChnZXRNZXNzYWdlKCdWZXJpZnknKSksXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRhY3Rpb246ICdjYW5jZWwnLFxuXHRcdFx0XHRmbGFnczogWydzYWZlJywgJ2Nsb3NlJ10sXG5cdFx0XHRcdGxhYmVsOiAkKCc8Yj4nKS50ZXh0KGdldE1lc3NhZ2UoJ0NhbmNlbCcpKSxcblx0XHRcdH0sXG5cdFx0XSxcblx0fTtcblxuXHRyZXR1cm4gbWVzc2FnZURpYWxvZ1Byb3BlcnR5O1xufTtcblxuZXhwb3J0IHtnZW5lcmF0ZU1lc3NhZ2VEaWFsb2dQcm9wZXJ0eX07XG4iLCAiY29uc3QgaW5pdFdpbmRvd01hbmFnZXIgPSAoKTogT08udWkuV2luZG93TWFuYWdlciA9PiB7XG5cdGNvbnN0IHdpbmRvd01hbmFnZXI6IE9PLnVpLldpbmRvd01hbmFnZXIgPSBuZXcgT08udWkuV2luZG93TWFuYWdlcigpO1xuXG5cdHJldHVybiB3aW5kb3dNYW5hZ2VyO1xufTtcblxuZXhwb3J0IHtpbml0V2luZG93TWFuYWdlcn07XG4iLCAiaW1wb3J0IHtnZW5lcmF0ZU1lc3NhZ2VEaWFsb2dQcm9wZXJ0eX0gZnJvbSAnLi91dGlsL2dlbmVyYXRlTWVzc2FnZURpYWxvZ1Byb3BlcnR5JztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9pMThuJztcbmltcG9ydCB7aW5pdFdpbmRvd01hbmFnZXJ9IGZyb20gJy4vaW5pdFdpbmRvd01hbmFnZXInO1xuXG5jb25zdCB7c2tpbiwgd2dBY3Rpb259ID0gbXcuY29uZmlnLmdldCgpO1xuY29uc3QgaXNDaXRpemVuOiBib29sZWFuID0gc2tpbiA9PT0gJ2NpdGl6ZW4nO1xuY29uc3QgaGVscFVSTDogc3RyaW5nID0gJ2h0dHBzOi8vd3d3LnFpdXdlbmJhaWtlLmNuL3dpa2kvSDpSTlJTJztcbmNvbnN0IHZlcmlmeVVSTDogc3RyaW5nID0gYCR7bXcudXRpbC5nZXRVcmwoJ1NwZWNpYWw6UHJlZmVyZW5jZXMnKX0jbXctaW5wdXQtd3BybnJzaG9vay1tb2R1bGVgO1xuXG5sZXQgbWVzc2FnZURpYWxvZzogT08udWkuTWVzc2FnZURpYWxvZztcblxuY29uc3QgaW5pdERpYWxvZyA9ICgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkID0+IHtcblx0Y29uc3Qgd2luZG93TWFuYWdlcjogT08udWkuV2luZG93TWFuYWdlciA9IGluaXRXaW5kb3dNYW5hZ2VyKCk7XG5cdHdpbmRvd01hbmFnZXIuJGVsZW1lbnQuYXBwZW5kVG8oJGJvZHkpO1xuXG5cdGNvbnN0IG1lc3NhZ2VEaWFsb2dQcm9wZXJ0eTogT08udWkuV2luZG93TWFuYWdlci5XaW5kb3dPcGVuaW5nRGF0YSA9IGdlbmVyYXRlTWVzc2FnZURpYWxvZ1Byb3BlcnR5KCk7XG5cblx0Y29uc3Qgb3BlbkRpYWxvZyA9ICgpOiB2b2lkID0+IHtcblx0XHRpZiAobWVzc2FnZURpYWxvZykge1xuXHRcdFx0aWYgKG1lc3NhZ2VEaWFsb2cuaXNPcGVuZWQoKSkge1xuXHRcdFx0XHRtZXNzYWdlRGlhbG9nLmNsb3NlKCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRtZXNzYWdlRGlhbG9nLm9wZW4obWVzc2FnZURpYWxvZ1Byb3BlcnR5KTtcblx0XHRcdH1cblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRtZXNzYWdlRGlhbG9nID0gbmV3IE9PLnVpLk1lc3NhZ2VEaWFsb2coKTtcblx0XHRtZXNzYWdlRGlhbG9nLmdldEFjdGlvblByb2Nlc3MgPSAoYWN0aW9uOiBzdHJpbmcpOiBPTy51aS5Qcm9jZXNzID0+IHtcblx0XHRcdGlmIChhY3Rpb24gPT09ICdoZWxwJykge1xuXHRcdFx0XHRsb2NhdGlvbi5ocmVmID0gaGVscFVSTDtcblx0XHRcdH0gZWxzZSBpZiAoYWN0aW9uID09PSAndmVyaWZ5Jykge1xuXHRcdFx0XHRsb2NhdGlvbi5ocmVmID0gdmVyaWZ5VVJMO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIG5ldyBPTy51aS5Qcm9jZXNzKCgpOiB2b2lkID0+IHtcblx0XHRcdFx0dm9pZCB3aW5kb3dNYW5hZ2VyLmNsb3NlV2luZG93KG1lc3NhZ2VEaWFsb2cpO1xuXHRcdFx0fSk7XG5cdFx0fTtcblxuXHRcdHdpbmRvd01hbmFnZXIuYWRkV2luZG93cyhbbWVzc2FnZURpYWxvZ10pO1xuXHRcdHZvaWQgd2luZG93TWFuYWdlci5vcGVuV2luZG93KG1lc3NhZ2VEaWFsb2csIG1lc3NhZ2VEaWFsb2dQcm9wZXJ0eSk7XG5cdH07XG5cblx0Y29uc3QgJGNhVmlld3NvdXJjZTogSlF1ZXJ5ID0gJGJvZHkuZmluZCgnI2NhLXZpZXdzb3VyY2UnKTtcblx0aWYgKCRjYVZpZXdzb3VyY2UubGVuZ3RoKSB7XG5cdFx0Y29uc3QgZWRpdEljb246IHN0cmluZyA9IGlzQ2l0aXplbiA/ICc8c3BhbiBjbGFzcz1cImNpdGl6ZW4tdWktaWNvbiBtdy11aS1pY29uLXdpa2ltZWRpYS1lZGl0XCI+PC9zcGFuPicgOiAnJztcblx0XHQkY2FWaWV3c291cmNlXG5cdFx0XHQuYXR0cignaWQnLCAnY2EtZWRpdCcpXG5cdFx0XHQuZmluZCgnYScpXG5cdFx0XHQuYXR0cignYXJpYS1sYWJlbCcsIGdldE1lc3NhZ2UoJ0RpYWxvZ01lc3NhZ2UnKSlcblx0XHRcdC5odG1sKGVkaXRJY29uICsgZ2V0TWVzc2FnZSgnRWRpdCcpKVxuXHRcdFx0Lm9uKCdjbGljaycsIChldmVudDogSlF1ZXJ5LkNsaWNrRXZlbnQpOiB2b2lkID0+IHtcblx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0b3BlbkRpYWxvZygpO1xuXHRcdFx0fSk7XG5cdH1cblxuXHRpZiAoWydlZGl0JywgJ3N1Ym1pdCddLmluY2x1ZGVzKHdnQWN0aW9uKSkge1xuXHRcdG9wZW5EaWFsb2coKTtcblx0fVxufTtcblxuZXhwb3J0IHtpbml0RGlhbG9nfTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLHFCQUFxQ0MsUUFBQSxpQkFBQTs7QUNBckMsSUFBQUMsb0JBQXVCRCxRQUFBLGlCQUFBO0FBRXZCLElBQU1FLGtCQUFrQkEsTUFBTTtBQUM3QixTQUFPO0lBQ05DLFNBQUEsR0FBUUYsa0JBQUFHLFVBQVM7TUFDaEJDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDREMsT0FBQSxHQUFNTCxrQkFBQUcsVUFBUztNQUNkQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0RFLE9BQUEsR0FBTU4sa0JBQUFHLFVBQVM7TUFDZEMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNERyxTQUFBLEdBQVFQLGtCQUFBRyxVQUFTO01BQ2hCQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0RJLGNBQUEsR0FBYVIsa0JBQUFHLFVBQVM7TUFDckJDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDREssZ0JBQUEsR0FBZVQsa0JBQUFHLFVBQVM7TUFDdkJDLElBQUk7TUFDSixXQUNDO01BQ0QsV0FDQztJQUNGLENBQUM7RUFDRjtBQUNEO0FBRUEsSUFBTU0sZUFBZVQsZ0JBQWdCO0FBRXJDLElBQU1VLGFBQWdEQyxTQUFRO0FBQzdELFNBQU9GLGFBQWFFLEdBQUcsS0FBS0E7QUFDN0I7O0FDekNBLElBQU1DLGdDQUFnQ0EsTUFBNkM7QUFDbEYsUUFBTUMsU0FB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SSxDQUFDcUMsWUFBWTtBQUNoQjtFQUNEO0FBRUEsT0FBQSxHQUFJMUUsbUJBQUEyRSxlQUFjLENBQUMsd0JBQXdCLHFCQUFxQixXQUFXLFFBQVEsQ0FBQyxHQUFHO0FBQ3RGO0VBQ0Q7QUFFQTlCLGFBQVdDLEtBQUs7QUFDakIsQ0FBQzsiLAogICJuYW1lcyI6IFsiaW1wb3J0X2V4dF9nYWRnZXQyIiwgInJlcXVpcmUiLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAiZ2V0STE4bk1lc3NhZ2VzIiwgIkNhbmNlbCIsICJsb2NhbGl6ZSIsICJlbiIsICJFZGl0IiwgIkhlbHAiLCAiVmVyaWZ5IiwgIkRpYWxvZ1RpdGxlIiwgIkRpYWxvZ01lc3NhZ2UiLCAiaTE4bk1lc3NhZ2VzIiwgImdldE1lc3NhZ2UiLCAia2V5IiwgImdlbmVyYXRlTWVzc2FnZURpYWxvZ1Byb3BlcnR5IiwgIiR0aXRsZSIsICIkIiwgImFkZENsYXNzIiwgInRleHQiLCAiJG1lc3NhZ2UiLCAibWVzc2FnZURpYWxvZ1Byb3BlcnR5IiwgInRpdGxlIiwgIm1lc3NhZ2UiLCAiYWN0aW9ucyIsICJhY3Rpb24iLCAiZmxhZ3MiLCAibGFiZWwiLCAiaW5pdFdpbmRvd01hbmFnZXIiLCAid2luZG93TWFuYWdlciIsICJPTyIsICJ1aSIsICJXaW5kb3dNYW5hZ2VyIiwgInNraW4iLCAid2dBY3Rpb24iLCAibXciLCAiY29uZmlnIiwgImdldCIsICJpc0NpdGl6ZW4iLCAiaGVscFVSTCIsICJ2ZXJpZnlVUkwiLCAiY29uY2F0IiwgInV0aWwiLCAiZ2V0VXJsIiwgIm1lc3NhZ2VEaWFsb2ciLCAiaW5pdERpYWxvZyIsICIkYm9keSIsICIkZWxlbWVudCIsICJhcHBlbmRUbyIsICJvcGVuRGlhbG9nIiwgImlzT3BlbmVkIiwgImNsb3NlIiwgIm9wZW4iLCAiTWVzc2FnZURpYWxvZyIsICJnZXRBY3Rpb25Qcm9jZXNzIiwgImxvY2F0aW9uIiwgImhyZWYiLCAiUHJvY2VzcyIsICJjbG9zZVdpbmRvdyIsICJhZGRXaW5kb3dzIiwgIm9wZW5XaW5kb3ciLCAiJGNhVmlld3NvdXJjZSIsICJmaW5kIiwgImxlbmd0aCIsICJlZGl0SWNvbiIsICJhdHRyIiwgImh0bWwiLCAib24iLCAiZXZlbnQiLCAicHJldmVudERlZmF1bHQiLCAiaW5jbHVkZXMiLCAiZ2V0Qm9keSIsICJ0aGVuIiwgImxvZ2luVG9FZGl0IiwgIndnVXNlck5hbWUiLCAidXNlcklzSW5Hcm91cCJdCn0K

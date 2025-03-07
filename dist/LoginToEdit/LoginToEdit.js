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
//! src/AjaxLogin/options.json
var loginElementSelector = 'a:has(.ajaxlogin-mount-point),#pt-login>a,.vector-user-menu-login>a,#user-tools>a[href*="Special"],.mainpage-top-menu>li:nth-child(2) a';
//! src/LoginToEdit/modules/i18n.ts
var import_ext_gadget = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    Cancel: (0, import_ext_gadget.localize)({
      en: "Cancel",
      ja: "キャンセル",
      "zh-hans": "暂不登录账号",
      "zh-hant": "暫不登入賬號"
    }),
    Edit: (0, import_ext_gadget.localize)({
      en: "Edit",
      ja: "編集",
      "zh-hans": "编辑",
      "zh-hant": "編輯"
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
//! src/LoginToEdit/modules/util/generateMessageDialogProperty.ts
var generateMessageDialogProperty = () => {
  const $title = $("<b>").addClass("oo-ui-window-head").text(getMessage("DialogTitle"));
  const $message = $("<span>").addClass("oo-ui-window-foot").text(getMessage("DialogMessage"));
  const messageDialogProperty = {
    title: $title,
    message: $message,
    actions: [{
      action: "login",
      flags: ["primary", "progressive"],
      label: $("<b>").text(getMessage("Login"))
    }, {
      action: "register",
      flags: "progressive",
      label: $("<b>").text(getMessage("Register"))
    }, {
      action: "cancel",
      flags: ["safe", "close"],
      label: $("<b>").text(getMessage("Cancel"))
    }]
  };
  return messageDialogProperty;
};
//! src/LoginToEdit/modules/initWindowManager.ts
var initWindowManager = () => {
  const windowManager = new OO.ui.WindowManager();
  return windowManager;
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
      if (action === "login") {
        const $element = $(loginElementSelector);
        if ($element.length) {
          $element.trigger("click");
        } else {
          location.href = loginURL;
        }
      } else if (action === "register") {
        location.href = registerURL;
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
//! src/LoginToEdit/LoginToEdit.ts
void (0, import_ext_gadget2.getBody)().then(function loginToEdit($body) {
  const {
    wgUserName
  } = mw.config.get();
  if (wgUserName) {
    return;
  }
  initDialog($body);
});

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL0xvZ2luVG9FZGl0L0xvZ2luVG9FZGl0LnRzIiwgIi4uLy4uL3NyYy9BamF4TG9naW4vb3B0aW9ucy5qc29uIiwgIi4uLy4uL3NyYy9Mb2dpblRvRWRpdC9tb2R1bGVzL2kxOG4udHMiLCAiLi4vLi4vc3JjL0xvZ2luVG9FZGl0L21vZHVsZXMvdXRpbC9nZW5lcmF0ZU1lc3NhZ2VEaWFsb2dQcm9wZXJ0eS50cyIsICIuLi8uLi9zcmMvTG9naW5Ub0VkaXQvbW9kdWxlcy9pbml0V2luZG93TWFuYWdlci50cyIsICIuLi8uLi9zcmMvTG9naW5Ub0VkaXQvbW9kdWxlcy9pbml0RGlhbG9nLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQge2dldEJvZHl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5pbXBvcnQge2luaXREaWFsb2d9IGZyb20gJy4vbW9kdWxlcy9pbml0RGlhbG9nJztcblxudm9pZCBnZXRCb2R5KCkudGhlbihmdW5jdGlvbiBsb2dpblRvRWRpdCgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkIHtcblx0Y29uc3Qge3dnVXNlck5hbWV9ID0gbXcuY29uZmlnLmdldCgpO1xuXG5cdGlmICh3Z1VzZXJOYW1lKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0aW5pdERpYWxvZygkYm9keSk7XG59KTtcbiIsICJ7XG5cdFwibG9naW5FbGVtZW50U2VsZWN0b3JcIjogXCJhOmhhcyguYWpheGxvZ2luLW1vdW50LXBvaW50KSwjcHQtbG9naW4+YSwudmVjdG9yLXVzZXItbWVudS1sb2dpbj5hLCN1c2VyLXRvb2xzPmFbaHJlZio9XFxcIlNwZWNpYWxcXFwiXSwubWFpbnBhZ2UtdG9wLW1lbnU+bGk6bnRoLWNoaWxkKDIpIGFcIixcblx0XCJ2ZXJzaW9uXCI6IFwiNC4wXCJcbn1cbiIsICJpbXBvcnQge2xvY2FsaXplfSBmcm9tICdleHQuZ2FkZ2V0LmkxOG4nO1xuXG5jb25zdCBnZXRJMThuTWVzc2FnZXMgPSAoKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0Q2FuY2VsOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0NhbmNlbCcsXG5cdFx0XHRqYTogJ+OCreODo+ODs+OCu+ODqycsXG5cdFx0XHQnemgtaGFucyc6ICfmmoLkuI3nmbvlvZXotKblj7cnLFxuXHRcdFx0J3poLWhhbnQnOiAn5pqr5LiN55m75YWl6LOs6JmfJyxcblx0XHR9KSxcblx0XHRFZGl0OiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0VkaXQnLFxuXHRcdFx0amE6ICfnt6jpm4YnLFxuXHRcdFx0J3poLWhhbnMnOiAn57yW6L6RJyxcblx0XHRcdCd6aC1oYW50JzogJ+e3qOi8rycsXG5cdFx0fSksXG5cdFx0TG9naW46IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnTG9naW4nLFxuXHRcdFx0amE6ICfjg63jgrDjgqTjg7MnLFxuXHRcdFx0J3poLWhhbnMnOiAn55m75b2V5bey5pyJ6LSm5Y+3Jyxcblx0XHRcdCd6aC1oYW50JzogJ+eZu+WFpeW3suacieizrOiZnycsXG5cdFx0fSksXG5cdFx0UmVnaXN0ZXI6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnUmVnaXN0ZXInLFxuXHRcdFx0amE6ICfjgqLjgqvjgqbjg7Pjg4jjgpLkvZzmiJAnLFxuXHRcdFx0J3poLWhhbnMnOiAn5rOo5YaM5paw55qE6LSm5Y+3Jyxcblx0XHRcdCd6aC1oYW50JzogJ+iou+WGiuaWsOeahOizrOiZnycsXG5cdFx0fSksXG5cdFx0RGlhbG9nVGl0bGU6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnV2VsY29tZSB0byBRaXV3ZW4gQmFpa2UhJyxcblx0XHRcdGphOiAn5rGC6IGe55m+56eR44G444KI44GG44GT44Gd77yBJyxcblx0XHRcdCd6aC1oYW5zJzogJ+asoui/juadpeWIsOaxgumXu+eZvuenke+8gScsXG5cdFx0XHQnemgtaGFudCc6ICfmraHov47kvobliLDmsYLogZ7nmb7np5HvvIEnLFxuXHRcdH0pLFxuXHRcdERpYWxvZ01lc3NhZ2U6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnWW91IGhhdmUgbm90IHlldCBsb2dnZWQgaW4uIFJlZ2lzdGVyIGFuZCBsb2cgaW4gdG8geW91ciBhY2NvdW50IHRvIGNvbnRyaWJ1dGUuJyxcblx0XHRcdGphOiAn44GC44Gq44Gf44Gv44G+44Gg5rGC6IGe55m+56eR44Gr44Ot44Kw44Kk44Oz44GX44Gm44GE44G+44Gb44KT44CC44Ki44Kr44Km44Oz44OI44KS5L2c5oiQ44GX44CB44Ot44Kw44Kk44Oz44GX44Gm5rGC6IGe55m+56eR44KS5pS55ZaE44GZ44KL44GT44Go44GM44Gn44GN44G+44GZ44CCJyxcblx0XHRcdCd6aC1oYW5zJzogJ+aCqOWwmuacqueZu+W9leaxgumXu+eZvuenkeOAguaCqOWPr+S7peazqOWGjOW5tueZu+W9lei0puWPt++8jOW4ruWKqeWujOWWhOaxgumXu+eZvuenkeOAgicsXG5cdFx0XHQnemgtaGFudCc6ICfmgqjlsJrmnKrnmbvpjITmsYLogZ7nmb7np5HjgILmgqjlj6/ku6Xms6jlhorkuKbnmbvpjITos6zomZ/vvIzluavliqnlrozlloTmsYLogZ7nmb7np5HjgIInLFxuXHRcdH0pLFxuXHR9O1xufTtcblxuY29uc3QgaTE4bk1lc3NhZ2VzID0gZ2V0STE4bk1lc3NhZ2VzKCk7XG5cbmNvbnN0IGdldE1lc3NhZ2U6IEdldE1lc3NhZ2VzPHR5cGVvZiBpMThuTWVzc2FnZXM+ID0gKGtleSkgPT4ge1xuXHRyZXR1cm4gaTE4bk1lc3NhZ2VzW2tleV0gfHwga2V5O1xufTtcblxuZXhwb3J0IHtnZXRNZXNzYWdlfTtcbiIsICJpbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4uL2kxOG4nO1xuXG5jb25zdCBnZW5lcmF0ZU1lc3NhZ2VEaWFsb2dQcm9wZXJ0eSA9ICgpOiBPTy51aS5XaW5kb3dNYW5hZ2VyLldpbmRvd09wZW5pbmdEYXRhID0+IHtcblx0Y29uc3QgJHRpdGxlOiBKUXVlcnkgPSAkKCc8Yj4nKS5hZGRDbGFzcygnb28tdWktd2luZG93LWhlYWQnKS50ZXh0KGdldE1lc3NhZ2UoJ0RpYWxvZ1RpdGxlJykpO1xuXHRjb25zdCAkbWVzc2FnZTogSlF1ZXJ5ID0gJCgnPHNwYW4+JykuYWRkQ2xhc3MoJ29vLXVpLXdpbmRvdy1mb290JykudGV4dChnZXRNZXNzYWdlKCdEaWFsb2dNZXNzYWdlJykpO1xuXG5cdGNvbnN0IG1lc3NhZ2VEaWFsb2dQcm9wZXJ0eTogT08udWkuV2luZG93TWFuYWdlci5XaW5kb3dPcGVuaW5nRGF0YSA9IHtcblx0XHR0aXRsZTogJHRpdGxlLFxuXHRcdG1lc3NhZ2U6ICRtZXNzYWdlLFxuXHRcdGFjdGlvbnM6IFtcblx0XHRcdHtcblx0XHRcdFx0YWN0aW9uOiAnbG9naW4nLFxuXHRcdFx0XHRmbGFnczogWydwcmltYXJ5JywgJ3Byb2dyZXNzaXZlJ10sXG5cdFx0XHRcdGxhYmVsOiAkKCc8Yj4nKS50ZXh0KGdldE1lc3NhZ2UoJ0xvZ2luJykpLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0YWN0aW9uOiAncmVnaXN0ZXInLFxuXHRcdFx0XHRmbGFnczogJ3Byb2dyZXNzaXZlJyxcblx0XHRcdFx0bGFiZWw6ICQoJzxiPicpLnRleHQoZ2V0TWVzc2FnZSgnUmVnaXN0ZXInKSksXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRhY3Rpb246ICdjYW5jZWwnLFxuXHRcdFx0XHRmbGFnczogWydzYWZlJywgJ2Nsb3NlJ10sXG5cdFx0XHRcdGxhYmVsOiAkKCc8Yj4nKS50ZXh0KGdldE1lc3NhZ2UoJ0NhbmNlbCcpKSxcblx0XHRcdH0sXG5cdFx0XSxcblx0fTtcblxuXHRyZXR1cm4gbWVzc2FnZURpYWxvZ1Byb3BlcnR5O1xufTtcblxuZXhwb3J0IHtnZW5lcmF0ZU1lc3NhZ2VEaWFsb2dQcm9wZXJ0eX07XG4iLCAiY29uc3QgaW5pdFdpbmRvd01hbmFnZXIgPSAoKTogT08udWkuV2luZG93TWFuYWdlciA9PiB7XG5cdGNvbnN0IHdpbmRvd01hbmFnZXI6IE9PLnVpLldpbmRvd01hbmFnZXIgPSBuZXcgT08udWkuV2luZG93TWFuYWdlcigpO1xuXG5cdHJldHVybiB3aW5kb3dNYW5hZ2VyO1xufTtcblxuZXhwb3J0IHtpbml0V2luZG93TWFuYWdlcn07XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICd+L0FqYXhMb2dpbi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtnZW5lcmF0ZU1lc3NhZ2VEaWFsb2dQcm9wZXJ0eX0gZnJvbSAnLi91dGlsL2dlbmVyYXRlTWVzc2FnZURpYWxvZ1Byb3BlcnR5JztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9pMThuJztcbmltcG9ydCB7aW5pdFdpbmRvd01hbmFnZXJ9IGZyb20gJy4vaW5pdFdpbmRvd01hbmFnZXInO1xuXG5jb25zdCB7c2tpbiwgd2dBY3Rpb24sIHdnUGFnZU5hbWV9ID0gbXcuY29uZmlnLmdldCgpO1xuY29uc3QgaXNDaXRpemVuOiBib29sZWFuID0gc2tpbiA9PT0gJ2NpdGl6ZW4nO1xuY29uc3QgbG9naW5VUkw6IHN0cmluZyA9IG13LnV0aWwuZ2V0VXJsKCdTcGVjaWFsOlVzZXJMb2dpbicsIHtcblx0cmV0dXJudG86IHdnUGFnZU5hbWUsXG59KTtcbmNvbnN0IHJlZ2lzdGVyVVJMOiBzdHJpbmcgPSBtdy51dGlsLmdldFVybCgnU3BlY2lhbDpDcmVhdGVBY2NvdW50Jywge1xuXHRyZXR1cm50bzogd2dQYWdlTmFtZSxcbn0pO1xuXG5sZXQgbWVzc2FnZURpYWxvZzogT08udWkuTWVzc2FnZURpYWxvZztcblxuY29uc3QgaW5pdERpYWxvZyA9ICgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkID0+IHtcblx0Y29uc3Qgd2luZG93TWFuYWdlcjogT08udWkuV2luZG93TWFuYWdlciA9IGluaXRXaW5kb3dNYW5hZ2VyKCk7XG5cdHdpbmRvd01hbmFnZXIuJGVsZW1lbnQuYXBwZW5kVG8oJGJvZHkpO1xuXG5cdGNvbnN0IG1lc3NhZ2VEaWFsb2dQcm9wZXJ0eTogT08udWkuV2luZG93TWFuYWdlci5XaW5kb3dPcGVuaW5nRGF0YSA9IGdlbmVyYXRlTWVzc2FnZURpYWxvZ1Byb3BlcnR5KCk7XG5cblx0Y29uc3Qgb3BlbkRpYWxvZyA9ICgpOiB2b2lkID0+IHtcblx0XHRpZiAobWVzc2FnZURpYWxvZykge1xuXHRcdFx0aWYgKG1lc3NhZ2VEaWFsb2cuaXNPcGVuZWQoKSkge1xuXHRcdFx0XHRtZXNzYWdlRGlhbG9nLmNsb3NlKCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRtZXNzYWdlRGlhbG9nLm9wZW4obWVzc2FnZURpYWxvZ1Byb3BlcnR5KTtcblx0XHRcdH1cblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRtZXNzYWdlRGlhbG9nID0gbmV3IE9PLnVpLk1lc3NhZ2VEaWFsb2coKTtcblx0XHRtZXNzYWdlRGlhbG9nLmdldEFjdGlvblByb2Nlc3MgPSAoYWN0aW9uOiBzdHJpbmcpOiBPTy51aS5Qcm9jZXNzID0+IHtcblx0XHRcdGlmIChhY3Rpb24gPT09ICdsb2dpbicpIHtcblx0XHRcdFx0Y29uc3QgJGVsZW1lbnQ6IEpRdWVyeTxIVE1MQW5jaG9yRWxlbWVudD4gPSAkKE9QVElPTlMubG9naW5FbGVtZW50U2VsZWN0b3IpO1xuXHRcdFx0XHRpZiAoJGVsZW1lbnQubGVuZ3RoKSB7XG5cdFx0XHRcdFx0JGVsZW1lbnQudHJpZ2dlcignY2xpY2snKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRsb2NhdGlvbi5ocmVmID0gbG9naW5VUkw7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSBpZiAoYWN0aW9uID09PSAncmVnaXN0ZXInKSB7XG5cdFx0XHRcdGxvY2F0aW9uLmhyZWYgPSByZWdpc3RlclVSTDtcblx0XHRcdH1cblx0XHRcdHJldHVybiBuZXcgT08udWkuUHJvY2VzcygoKTogdm9pZCA9PiB7XG5cdFx0XHRcdHZvaWQgd2luZG93TWFuYWdlci5jbG9zZVdpbmRvdyhtZXNzYWdlRGlhbG9nKTtcblx0XHRcdH0pO1xuXHRcdH07XG5cblx0XHR3aW5kb3dNYW5hZ2VyLmFkZFdpbmRvd3MoW21lc3NhZ2VEaWFsb2ddKTtcblx0XHR2b2lkIHdpbmRvd01hbmFnZXIub3BlbldpbmRvdyhtZXNzYWdlRGlhbG9nLCBtZXNzYWdlRGlhbG9nUHJvcGVydHkpO1xuXHR9O1xuXG5cdGNvbnN0ICRjYVZpZXdzb3VyY2U6IEpRdWVyeSA9ICRib2R5LmZpbmQoJyNjYS12aWV3c291cmNlJyk7XG5cdGlmICgkY2FWaWV3c291cmNlLmxlbmd0aCkge1xuXHRcdGNvbnN0IGVkaXRJY29uOiBzdHJpbmcgPSBpc0NpdGl6ZW4gPyAnPHNwYW4gY2xhc3M9XCJjaXRpemVuLXVpLWljb24gbXctdWktaWNvbi13aWtpbWVkaWEtZWRpdFwiPjwvc3Bhbj4nIDogJyc7XG5cdFx0JGNhVmlld3NvdXJjZVxuXHRcdFx0LmF0dHIoJ2lkJywgJ2NhLWVkaXQnKVxuXHRcdFx0LmZpbmQoJ2EnKVxuXHRcdFx0LmF0dHIoJ2FyaWEtbGFiZWwnLCBnZXRNZXNzYWdlKCdEaWFsb2dNZXNzYWdlJykpXG5cdFx0XHQuaHRtbChlZGl0SWNvbiArIGdldE1lc3NhZ2UoJ0VkaXQnKSlcblx0XHRcdC5vbignY2xpY2snLCAoZXZlbnQ6IEpRdWVyeS5DbGlja0V2ZW50KTogdm9pZCA9PiB7XG5cdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdG9wZW5EaWFsb2coKTtcblx0XHRcdH0pO1xuXHR9XG5cblx0aWYgKFsnZWRpdCcsICdzdWJtaXQnXS5pbmNsdWRlcyh3Z0FjdGlvbikpIHtcblx0XHRvcGVuRGlhbG9nKCk7XG5cdH1cbn07XG5cbmV4cG9ydCB7aW5pdERpYWxvZ307XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLHFCQUFzQkMsUUFBQSxpQkFBQTs7QUNDckIsSUFBQUMsdUJBQXdCOztBQ0R6QixJQUFBQyxvQkFBdUJGLFFBQUEsaUJBQUE7QUFFdkIsSUFBTUcsa0JBQWtCQSxNQUFNO0FBQzdCLFNBQU87SUFDTkMsU0FBQSxHQUFRRixrQkFBQUcsVUFBUztNQUNoQkMs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QkFBU1MsUUFBUSxPQUFPO1FBQ3pCLE9BQU87QUFDTkMsbUJBQVNDLE9BQU9uQjtRQUNqQjtNQUNELFdBQVdmLFdBQVcsWUFBWTtBQUNqQ2lDLGlCQUFTQyxPQUFPZjtNQUNqQjtBQUNBLGFBQU8sSUFBSWQsR0FBR0MsR0FBRzZCLFFBQVEsTUFBWTtBQUNwQyxhQUFLL0IsY0FBY2dDLFlBQVloQixhQUFhO01BQzdDLENBQUM7SUFDRjtBQUVBaEIsa0JBQWNpQyxXQUFXLENBQUNqQixhQUFhLENBQUM7QUFDeEMsU0FBS2hCLGNBQWNrQyxXQUFXbEIsZUFBZXhCLHFCQUFxQjtFQUNuRTtBQUVBLFFBQU0yQyxnQkFBd0JqQixNQUFNa0IsS0FBSyxnQkFBZ0I7QUFDekQsTUFBSUQsY0FBY1IsUUFBUTtBQUN6QixVQUFNVSxXQUFtQjNCLFlBQVksb0VBQW9FO0FBQ3pHeUIsa0JBQ0VHLEtBQUssTUFBTSxTQUFTLEVBQ3BCRixLQUFLLEdBQUcsRUFDUkUsS0FBSyxjQUFjdEQsV0FBVyxlQUFlLENBQUMsRUFDOUN1RCxLQUFLRixXQUFXckQsV0FBVyxNQUFNLENBQUMsRUFDbEN3RCxHQUFHLFNBQVVDLFdBQW1DO0FBQ2hEQSxZQUFNQyxlQUFlO0FBQ3JCckIsaUJBQVc7SUFDWixDQUFDO0VBQ0g7QUFFQSxNQUFJLENBQUMsUUFBUSxRQUFRLEVBQUVzQixTQUFTdEMsUUFBUSxHQUFHO0FBQzFDZ0IsZUFBVztFQUNaO0FBQ0Q7O0FMbkVBLE1BQUEsR0FBS3BELG1CQUFBMkUsU0FBUSxFQUFFQyxLQUFLLFNBQVNDLFlBQVk1QixPQUFzQztBQUM5RSxRQUFNO0lBQUM2QjtFQUFVLElBQUl4QyxHQUFHQyxPQUFPQyxJQUFJO0FBRW5DLE1BQUlzQyxZQUFZO0FBQ2Y7RUFDRDtBQUVBOUIsYUFBV0MsS0FBSztBQUNqQixDQUFDOyIsCiAgIm5hbWVzIjogWyJpbXBvcnRfZXh0X2dhZGdldDIiLCAicmVxdWlyZSIsICJsb2dpbkVsZW1lbnRTZWxlY3RvciIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJnZXRJMThuTWVzc2FnZXMiLCAiQ2FuY2VsIiwgImxvY2FsaXplIiwgImVuIiwgImphIiwgIkVkaXQiLCAiTG9naW4iLCAiUmVnaXN0ZXIiLCAiRGlhbG9nVGl0bGUiLCAiRGlhbG9nTWVzc2FnZSIsICJpMThuTWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAiZ2VuZXJhdGVNZXNzYWdlRGlhbG9nUHJvcGVydHkiLCAiJHRpdGxlIiwgIiQiLCAiYWRkQ2xhc3MiLCAidGV4dCIsICIkbWVzc2FnZSIsICJtZXNzYWdlRGlhbG9nUHJvcGVydHkiLCAidGl0bGUiLCAibWVzc2FnZSIsICJhY3Rpb25zIiwgImFjdGlvbiIsICJmbGFncyIsICJsYWJlbCIsICJpbml0V2luZG93TWFuYWdlciIsICJ3aW5kb3dNYW5hZ2VyIiwgIk9PIiwgInVpIiwgIldpbmRvd01hbmFnZXIiLCAic2tpbiIsICJ3Z0FjdGlvbiIsICJ3Z1BhZ2VOYW1lIiwgIm13IiwgImNvbmZpZyIsICJnZXQiLCAiaXNDaXRpemVuIiwgImxvZ2luVVJMIiwgInV0aWwiLCAiZ2V0VXJsIiwgInJldHVybnRvIiwgInJlZ2lzdGVyVVJMIiwgIm1lc3NhZ2VEaWFsb2ciLCAiaW5pdERpYWxvZyIsICIkYm9keSIsICIkZWxlbWVudCIsICJhcHBlbmRUbyIsICJvcGVuRGlhbG9nIiwgImlzT3BlbmVkIiwgImNsb3NlIiwgIm9wZW4iLCAiTWVzc2FnZURpYWxvZyIsICJnZXRBY3Rpb25Qcm9jZXNzIiwgImxlbmd0aCIsICJ0cmlnZ2VyIiwgImxvY2F0aW9uIiwgImhyZWYiLCAiUHJvY2VzcyIsICJjbG9zZVdpbmRvdyIsICJhZGRXaW5kb3dzIiwgIm9wZW5XaW5kb3ciLCAiJGNhVmlld3NvdXJjZSIsICJmaW5kIiwgImVkaXRJY29uIiwgImF0dHIiLCAiaHRtbCIsICJvbiIsICJldmVudCIsICJwcmV2ZW50RGVmYXVsdCIsICJpbmNsdWRlcyIsICJnZXRCb2R5IiwgInRoZW4iLCAibG9naW5Ub0VkaXQiLCAid2dVc2VyTmFtZSJdCn0K

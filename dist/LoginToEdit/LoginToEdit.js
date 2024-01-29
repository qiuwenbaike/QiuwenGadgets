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
//! src/LoginToEdit/modules/constant.ts
var WG_ACTION = mw.config.get("wgAction");
var WG_PAGE_NAME = mw.config.get("wgPageName");
var WG_SKIN = mw.config.get("skin");
var WG_USER_NAME = mw.config.get("wgUserName");
var IS_WG_EDIT_OR_SUBMIT_ACTION = ["edit", "submit"].includes(WG_ACTION);
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
var isCitizen = WG_SKIN === "citizen";
var loginURL = mw.util.getUrl("Special:UserLogin", {
  returnto: WG_PAGE_NAME
});
var registerURL = mw.util.getUrl("Special:CreateAccount", {
  returnto: WG_PAGE_NAME
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
  if (IS_WG_EDIT_OR_SUBMIT_ACTION) {
    openDialog();
  }
};
//! src/LoginToEdit/LoginToEdit.ts
void (0, import_ext_gadget2.getBody)().then(function loginToEdit($body) {
  if (WG_USER_NAME) {
    return;
  }
  initDialog($body);
});

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0xvZ2luVG9FZGl0L21vZHVsZXMvY29uc3RhbnQudHMiLCAic3JjL0xvZ2luVG9FZGl0L0xvZ2luVG9FZGl0LnRzIiwgInNyYy9BamF4TG9naW4vb3B0aW9ucy5qc29uIiwgInNyYy9Mb2dpblRvRWRpdC9tb2R1bGVzL2kxOG4udHMiLCAic3JjL0xvZ2luVG9FZGl0L21vZHVsZXMvdXRpbC9nZW5lcmF0ZU1lc3NhZ2VEaWFsb2dQcm9wZXJ0eS50cyIsICJzcmMvTG9naW5Ub0VkaXQvbW9kdWxlcy9pbml0V2luZG93TWFuYWdlci50cyIsICJzcmMvTG9naW5Ub0VkaXQvbW9kdWxlcy9pbml0RGlhbG9nLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBXR19BQ1RJT046IE1lZGlhV2lraUNvbmZpZ01hcFdnQWN0aW9uID0gbXcuY29uZmlnLmdldCgnd2dBY3Rpb24nKTtcbmNvbnN0IFdHX1BBR0VfTkFNRTogc3RyaW5nID0gbXcuY29uZmlnLmdldCgnd2dQYWdlTmFtZScpO1xuY29uc3QgV0dfU0tJTjogc3RyaW5nID0gbXcuY29uZmlnLmdldCgnc2tpbicpO1xuY29uc3QgV0dfVVNFUl9OQU1FOiBzdHJpbmcgfCBudWxsID0gbXcuY29uZmlnLmdldCgnd2dVc2VyTmFtZScpO1xuXG5jb25zdCBJU19XR19FRElUX09SX1NVQk1JVF9BQ1RJT046IGJvb2xlYW4gPSBbJ2VkaXQnLCAnc3VibWl0J10uaW5jbHVkZXMoV0dfQUNUSU9OKTtcblxuZXhwb3J0IHtXR19QQUdFX05BTUUsIFdHX1NLSU4sIFdHX1VTRVJfTkFNRSwgSVNfV0dfRURJVF9PUl9TVUJNSVRfQUNUSU9OfTtcbiIsICJpbXBvcnQge1dHX1VTRVJfTkFNRX0gZnJvbSAnLi9tb2R1bGVzL2NvbnN0YW50JztcbmltcG9ydCB7Z2V0Qm9keX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbmltcG9ydCB7aW5pdERpYWxvZ30gZnJvbSAnLi9tb2R1bGVzL2luaXREaWFsb2cnO1xuXG52b2lkIGdldEJvZHkoKS50aGVuKGZ1bmN0aW9uIGxvZ2luVG9FZGl0KCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQge1xuXHRpZiAoV0dfVVNFUl9OQU1FKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0aW5pdERpYWxvZygkYm9keSk7XG59KTtcbiIsICJ7XG5cdFwibG9naW5FbGVtZW50U2VsZWN0b3JcIjogXCJhOmhhcyguYWpheGxvZ2luLW1vdW50LXBvaW50KSwjcHQtbG9naW4+YSwudmVjdG9yLXVzZXItbWVudS1sb2dpbj5hLCN1c2VyLXRvb2xzPmFbaHJlZio9XFxcIlNwZWNpYWxcXFwiXSwubWFpbnBhZ2UtdG9wLW1lbnU+bGk6bnRoLWNoaWxkKDIpIGFcIixcblx0XCJ2ZXJzaW9uXCI6IFwiNC4wXCJcbn1cbiIsICJpbXBvcnQge2xvY2FsaXplfSBmcm9tICdleHQuZ2FkZ2V0LmkxOG4nO1xuXG5jb25zdCBnZXRJMThuTWVzc2FnZXMgPSAoKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0Q2FuY2VsOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0NhbmNlbCcsXG5cdFx0XHRqYTogJ+OCreODo+ODs+OCu+ODqycsXG5cdFx0XHQnemgtaGFucyc6ICfmmoLkuI3nmbvlvZXotKblj7cnLFxuXHRcdFx0J3poLWhhbnQnOiAn5pqr5LiN55m75YWl6LOs6JmfJyxcblx0XHR9KSxcblx0XHRFZGl0OiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0VkaXQnLFxuXHRcdFx0amE6ICfnt6jpm4YnLFxuXHRcdFx0J3poLWhhbnMnOiAn57yW6L6RJyxcblx0XHRcdCd6aC1oYW50JzogJ+e3qOi8rycsXG5cdFx0fSksXG5cdFx0TG9naW46IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnTG9naW4nLFxuXHRcdFx0amE6ICfjg63jgrDjgqTjg7MnLFxuXHRcdFx0J3poLWhhbnMnOiAn55m75b2V5bey5pyJ6LSm5Y+3Jyxcblx0XHRcdCd6aC1oYW50JzogJ+eZu+WFpeW3suacieizrOiZnycsXG5cdFx0fSksXG5cdFx0UmVnaXN0ZXI6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnUmVnaXN0ZXInLFxuXHRcdFx0amE6ICfjgqLjgqvjgqbjg7Pjg4jjgpLkvZzmiJAnLFxuXHRcdFx0J3poLWhhbnMnOiAn5rOo5YaM5paw55qE6LSm5Y+3Jyxcblx0XHRcdCd6aC1oYW50JzogJ+iou+WGiuaWsOeahOizrOiZnycsXG5cdFx0fSksXG5cdFx0RGlhbG9nVGl0bGU6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnV2VsY29tZSB0byBRaXV3ZW4gQmFpa2UhJyxcblx0XHRcdGphOiAn5rGC6IGe55m+56eR44G444KI44GG44GT44Gd77yBJyxcblx0XHRcdCd6aC1oYW5zJzogJ+asoui/juadpeWIsOaxgumXu+eZvuenke+8gScsXG5cdFx0XHQnemgtaGFudCc6ICfmraHov47kvobliLDmsYLogZ7nmb7np5HvvIEnLFxuXHRcdH0pLFxuXHRcdERpYWxvZ01lc3NhZ2U6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnWW91IGhhdmUgbm90IHlldCBsb2dnZWQgaW4uIFJlZ2lzdGVyIGFuZCBsb2cgaW4gdG8geW91ciBhY2NvdW50IHRvIGNvbnRyaWJ1dGUuJyxcblx0XHRcdGphOiAn44GC44Gq44Gf44Gv44G+44Gg5rGC6IGe55m+56eR44Gr44Ot44Kw44Kk44Oz44GX44Gm44GE44G+44Gb44KT44CC44Ki44Kr44Km44Oz44OI44KS5L2c5oiQ44GX44CB44Ot44Kw44Kk44Oz44GX44Gm5rGC6IGe55m+56eR44KS5pS55ZaE44GZ44KL44GT44Go44GM44Gn44GN44G+44GZ44CCJyxcblx0XHRcdCd6aC1oYW5zJzogJ+aCqOWwmuacqueZu+W9leaxgumXu+eZvuenkeOAguaCqOWPr+S7peazqOWGjOW5tueZu+W9lei0puWPt++8jOW4ruWKqeWujOWWhOaxgumXu+eZvuenkeOAgicsXG5cdFx0XHQnemgtaGFudCc6ICfmgqjlsJrmnKrnmbvpjITmsYLogZ7nmb7np5HjgILmgqjlj6/ku6Xms6jlhorkuKbnmbvpjITos6zomZ/vvIzluavliqnlrozlloTmsYLogZ7nmb7np5HjgIInLFxuXHRcdH0pLFxuXHR9O1xufTtcblxuY29uc3QgaTE4bk1lc3NhZ2VzID0gZ2V0STE4bk1lc3NhZ2VzKCk7XG5cbmNvbnN0IGdldE1lc3NhZ2U6IEdldE1lc3NhZ2VzPHR5cGVvZiBpMThuTWVzc2FnZXM+ID0gKGtleSkgPT4ge1xuXHRyZXR1cm4gaTE4bk1lc3NhZ2VzW2tleV0gfHwga2V5O1xufTtcblxuZXhwb3J0IHtnZXRNZXNzYWdlfTtcbiIsICJpbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4uL2kxOG4nO1xuXG5jb25zdCBnZW5lcmF0ZU1lc3NhZ2VEaWFsb2dQcm9wZXJ0eSA9ICgpOiBPTy51aS5XaW5kb3dNYW5hZ2VyLldpbmRvd09wZW5pbmdEYXRhID0+IHtcblx0Y29uc3QgJHRpdGxlOiBKUXVlcnkgPSAkKCc8Yj4nKS5hZGRDbGFzcygnb28tdWktd2luZG93LWhlYWQnKS50ZXh0KGdldE1lc3NhZ2UoJ0RpYWxvZ1RpdGxlJykpO1xuXHRjb25zdCAkbWVzc2FnZTogSlF1ZXJ5ID0gJCgnPHNwYW4+JykuYWRkQ2xhc3MoJ29vLXVpLXdpbmRvdy1mb290JykudGV4dChnZXRNZXNzYWdlKCdEaWFsb2dNZXNzYWdlJykpO1xuXG5cdGNvbnN0IG1lc3NhZ2VEaWFsb2dQcm9wZXJ0eTogT08udWkuV2luZG93TWFuYWdlci5XaW5kb3dPcGVuaW5nRGF0YSA9IHtcblx0XHR0aXRsZTogJHRpdGxlLFxuXHRcdG1lc3NhZ2U6ICRtZXNzYWdlLFxuXHRcdGFjdGlvbnM6IFtcblx0XHRcdHtcblx0XHRcdFx0YWN0aW9uOiAnbG9naW4nLFxuXHRcdFx0XHRmbGFnczogWydwcmltYXJ5JywgJ3Byb2dyZXNzaXZlJ10sXG5cdFx0XHRcdGxhYmVsOiAkKCc8Yj4nKS50ZXh0KGdldE1lc3NhZ2UoJ0xvZ2luJykpLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0YWN0aW9uOiAncmVnaXN0ZXInLFxuXHRcdFx0XHRmbGFnczogJ3Byb2dyZXNzaXZlJyxcblx0XHRcdFx0bGFiZWw6ICQoJzxiPicpLnRleHQoZ2V0TWVzc2FnZSgnUmVnaXN0ZXInKSksXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRhY3Rpb246ICdjYW5jZWwnLFxuXHRcdFx0XHRmbGFnczogWydzYWZlJywgJ2Nsb3NlJ10sXG5cdFx0XHRcdGxhYmVsOiAkKCc8Yj4nKS50ZXh0KGdldE1lc3NhZ2UoJ0NhbmNlbCcpKSxcblx0XHRcdH0sXG5cdFx0XSxcblx0fTtcblxuXHRyZXR1cm4gbWVzc2FnZURpYWxvZ1Byb3BlcnR5O1xufTtcblxuZXhwb3J0IHtnZW5lcmF0ZU1lc3NhZ2VEaWFsb2dQcm9wZXJ0eX07XG4iLCAiY29uc3QgaW5pdFdpbmRvd01hbmFnZXIgPSAoKTogT08udWkuV2luZG93TWFuYWdlciA9PiB7XG5cdGNvbnN0IHdpbmRvd01hbmFnZXI6IE9PLnVpLldpbmRvd01hbmFnZXIgPSBuZXcgT08udWkuV2luZG93TWFuYWdlcigpO1xuXG5cdHJldHVybiB3aW5kb3dNYW5hZ2VyO1xufTtcblxuZXhwb3J0IHtpbml0V2luZG93TWFuYWdlcn07XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICd+L0FqYXhMb2dpbi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtJU19XR19FRElUX09SX1NVQk1JVF9BQ1RJT04sIFdHX1BBR0VfTkFNRSwgV0dfU0tJTn0gZnJvbSAnLi9jb25zdGFudCc7XG5pbXBvcnQge2dlbmVyYXRlTWVzc2FnZURpYWxvZ1Byb3BlcnR5fSBmcm9tICcuL3V0aWwvZ2VuZXJhdGVNZXNzYWdlRGlhbG9nUHJvcGVydHknO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL2kxOG4nO1xuaW1wb3J0IHtpbml0V2luZG93TWFuYWdlcn0gZnJvbSAnLi9pbml0V2luZG93TWFuYWdlcic7XG5cbmNvbnN0IGlzQ2l0aXplbjogYm9vbGVhbiA9IFdHX1NLSU4gPT09ICdjaXRpemVuJztcbmNvbnN0IGxvZ2luVVJMOiBzdHJpbmcgPSBtdy51dGlsLmdldFVybCgnU3BlY2lhbDpVc2VyTG9naW4nLCB7XG5cdHJldHVybnRvOiBXR19QQUdFX05BTUUsXG59KTtcbmNvbnN0IHJlZ2lzdGVyVVJMOiBzdHJpbmcgPSBtdy51dGlsLmdldFVybCgnU3BlY2lhbDpDcmVhdGVBY2NvdW50Jywge1xuXHRyZXR1cm50bzogV0dfUEFHRV9OQU1FLFxufSk7XG5cbmxldCBtZXNzYWdlRGlhbG9nOiBPTy51aS5NZXNzYWdlRGlhbG9nO1xuXG5jb25zdCBpbml0RGlhbG9nID0gKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQgPT4ge1xuXHRjb25zdCB3aW5kb3dNYW5hZ2VyOiBPTy51aS5XaW5kb3dNYW5hZ2VyID0gaW5pdFdpbmRvd01hbmFnZXIoKTtcblx0d2luZG93TWFuYWdlci4kZWxlbWVudC5hcHBlbmRUbygkYm9keSk7XG5cblx0Y29uc3QgbWVzc2FnZURpYWxvZ1Byb3BlcnR5OiBPTy51aS5XaW5kb3dNYW5hZ2VyLldpbmRvd09wZW5pbmdEYXRhID0gZ2VuZXJhdGVNZXNzYWdlRGlhbG9nUHJvcGVydHkoKTtcblxuXHRjb25zdCBvcGVuRGlhbG9nID0gKCk6IHZvaWQgPT4ge1xuXHRcdGlmIChtZXNzYWdlRGlhbG9nKSB7XG5cdFx0XHRpZiAobWVzc2FnZURpYWxvZy5pc09wZW5lZCgpKSB7XG5cdFx0XHRcdG1lc3NhZ2VEaWFsb2cuY2xvc2UoKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdG1lc3NhZ2VEaWFsb2cub3BlbihtZXNzYWdlRGlhbG9nUHJvcGVydHkpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdG1lc3NhZ2VEaWFsb2cgPSBuZXcgT08udWkuTWVzc2FnZURpYWxvZygpO1xuXHRcdG1lc3NhZ2VEaWFsb2cuZ2V0QWN0aW9uUHJvY2VzcyA9IChhY3Rpb246IHN0cmluZyk6IE9PLnVpLlByb2Nlc3MgPT4ge1xuXHRcdFx0aWYgKGFjdGlvbiA9PT0gJ2xvZ2luJykge1xuXHRcdFx0XHRjb25zdCAkZWxlbWVudDogSlF1ZXJ5PEhUTUxBbmNob3JFbGVtZW50PiA9ICQoT1BUSU9OUy5sb2dpbkVsZW1lbnRTZWxlY3Rvcik7XG5cdFx0XHRcdGlmICgkZWxlbWVudC5sZW5ndGgpIHtcblx0XHRcdFx0XHQkZWxlbWVudC50cmlnZ2VyKCdjbGljaycpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGxvY2F0aW9uLmhyZWYgPSBsb2dpblVSTDtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIGlmIChhY3Rpb24gPT09ICdyZWdpc3RlcicpIHtcblx0XHRcdFx0bG9jYXRpb24uaHJlZiA9IHJlZ2lzdGVyVVJMO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIG5ldyBPTy51aS5Qcm9jZXNzKCgpOiB2b2lkID0+IHtcblx0XHRcdFx0dm9pZCB3aW5kb3dNYW5hZ2VyLmNsb3NlV2luZG93KG1lc3NhZ2VEaWFsb2cpO1xuXHRcdFx0fSk7XG5cdFx0fTtcblxuXHRcdHdpbmRvd01hbmFnZXIuYWRkV2luZG93cyhbbWVzc2FnZURpYWxvZ10pO1xuXHRcdHZvaWQgd2luZG93TWFuYWdlci5vcGVuV2luZG93KG1lc3NhZ2VEaWFsb2csIG1lc3NhZ2VEaWFsb2dQcm9wZXJ0eSk7XG5cdH07XG5cblx0Y29uc3QgJGNhVmlld3NvdXJjZTogSlF1ZXJ5ID0gJGJvZHkuZmluZCgnI2NhLXZpZXdzb3VyY2UnKTtcblx0aWYgKCRjYVZpZXdzb3VyY2UubGVuZ3RoKSB7XG5cdFx0Y29uc3QgZWRpdEljb246IHN0cmluZyA9IGlzQ2l0aXplbiA/ICc8c3BhbiBjbGFzcz1cImNpdGl6ZW4tdWktaWNvbiBtdy11aS1pY29uLXdpa2ltZWRpYS1lZGl0XCI+PC9zcGFuPicgOiAnJztcblx0XHQkY2FWaWV3c291cmNlXG5cdFx0XHQuYXR0cignaWQnLCAnY2EtZWRpdCcpXG5cdFx0XHQuZmluZCgnYScpXG5cdFx0XHQuYXR0cignYXJpYS1sYWJlbCcsIGdldE1lc3NhZ2UoJ0RpYWxvZ01lc3NhZ2UnKSlcblx0XHRcdC5odG1sKGVkaXRJY29uICsgZ2V0TWVzc2FnZSgnRWRpdCcpKVxuXHRcdFx0Lm9uKCdjbGljaycsIChldmVudDogSlF1ZXJ5LkNsaWNrRXZlbnQpOiB2b2lkID0+IHtcblx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0b3BlbkRpYWxvZygpO1xuXHRcdFx0fSk7XG5cdH1cblxuXHRpZiAoSVNfV0dfRURJVF9PUl9TVUJNSVRfQUNUSU9OKSB7XG5cdFx0b3BlbkRpYWxvZygpO1xuXHR9XG59O1xuXG5leHBvcnQge2luaXREaWFsb2d9O1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFNQSxZQUF3Q0MsR0FBR0MsT0FBT0MsSUFBSSxVQUFVO0FBQ3RFLElBQU1DLGVBQXVCSCxHQUFHQyxPQUFPQyxJQUFJLFlBQVk7QUFDdkQsSUFBTUUsVUFBa0JKLEdBQUdDLE9BQU9DLElBQUksTUFBTTtBQUM1QyxJQUFNRyxlQUE4QkwsR0FBR0MsT0FBT0MsSUFBSSxZQUFZO0FBRTlELElBQU1JLDhCQUF1QyxDQUFDLFFBQVEsUUFBUSxFQUFFQyxTQUFTUixTQUFTOztBQ0psRixJQUFBUyxxQkFBc0JDLFFBQUEsaUJBQUE7O0FDQXJCLElBQUFDLHVCQUF3Qjs7QUNEekIsSUFBQUMsb0JBQXVCRixRQUFBLGlCQUFBO0FBRXZCLElBQU1HLGtCQUFrQkEsTUFBTTtBQUM3QixTQUFPO0lBQ05DLFNBQUEsR0FBUUYsa0JBQUFHLFVBQVM7TUFDaEJDLElBQUk7TUFDSkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNEQyxPQUFBLEdBQU1OLGtCQUFBRyxVQUFTO01BQ2RDLElBQUk7TUFDSkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNERSxRQUFBLEdBQU9QLGtCQUFBRyxVQUFTO01BQ2ZDLElBQUk7TUFDSkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNERyxXQUFBLEdBQVVSLGtCQUFBRyxV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Z0JBQXdCakIsTUFBTWtCLEtBQUssZ0JBQWdCO0FBQ3pELE1BQUlELGNBQWNSLFFBQVE7QUFDekIsVUFBTVUsV0FBbUIzQixZQUFZLG9FQUFvRTtBQUN6R3lCLGtCQUNFRyxLQUFLLE1BQU0sU0FBUyxFQUNwQkYsS0FBSyxHQUFHLEVBQ1JFLEtBQUssY0FBY2hELFdBQVcsZUFBZSxDQUFDLEVBQzlDaUQsS0FBS0YsV0FBVy9DLFdBQVcsTUFBTSxDQUFDLEVBQ2xDa0QsR0FBRyxTQUFVQyxXQUFtQztBQUNoREEsWUFBTUMsZUFBZTtBQUNyQnJCLGlCQUFXO0lBQ1osQ0FBQztFQUNIO0FBRUEsTUFBSWhELDZCQUE2QjtBQUNoQ2dELGVBQVc7RUFDWjtBQUNEOztBTGxFQSxNQUFBLEdBQUs5QyxtQkFBQW9FLFNBQVEsRUFBRUMsS0FBSyxTQUFTQyxZQUFZM0IsT0FBc0M7QUFDOUUsTUFBSTlDLGNBQWM7QUFDakI7RUFDRDtBQUVBNkMsYUFBV0MsS0FBSztBQUNqQixDQUFDOyIsCiAgIm5hbWVzIjogWyJXR19BQ1RJT04iLCAibXciLCAiY29uZmlnIiwgImdldCIsICJXR19QQUdFX05BTUUiLCAiV0dfU0tJTiIsICJXR19VU0VSX05BTUUiLCAiSVNfV0dfRURJVF9PUl9TVUJNSVRfQUNUSU9OIiwgImluY2x1ZGVzIiwgImltcG9ydF9leHRfZ2FkZ2V0MiIsICJyZXF1aXJlIiwgImxvZ2luRWxlbWVudFNlbGVjdG9yIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgImdldEkxOG5NZXNzYWdlcyIsICJDYW5jZWwiLCAibG9jYWxpemUiLCAiZW4iLCAiamEiLCAiRWRpdCIsICJMb2dpbiIsICJSZWdpc3RlciIsICJEaWFsb2dUaXRsZSIsICJEaWFsb2dNZXNzYWdlIiwgImkxOG5NZXNzYWdlcyIsICJnZXRNZXNzYWdlIiwgImtleSIsICJnZW5lcmF0ZU1lc3NhZ2VEaWFsb2dQcm9wZXJ0eSIsICIkdGl0bGUiLCAiJCIsICJhZGRDbGFzcyIsICJ0ZXh0IiwgIiRtZXNzYWdlIiwgIm1lc3NhZ2VEaWFsb2dQcm9wZXJ0eSIsICJ0aXRsZSIsICJtZXNzYWdlIiwgImFjdGlvbnMiLCAiYWN0aW9uIiwgImZsYWdzIiwgImxhYmVsIiwgImluaXRXaW5kb3dNYW5hZ2VyIiwgIndpbmRvd01hbmFnZXIiLCAiT08iLCAidWkiLCAiV2luZG93TWFuYWdlciIsICJpc0NpdGl6ZW4iLCAibG9naW5VUkwiLCAidXRpbCIsICJnZXRVcmwiLCAicmV0dXJudG8iLCAicmVnaXN0ZXJVUkwiLCAibWVzc2FnZURpYWxvZyIsICJpbml0RGlhbG9nIiwgIiRib2R5IiwgIiRlbGVtZW50IiwgImFwcGVuZFRvIiwgIm9wZW5EaWFsb2ciLCAiaXNPcGVuZWQiLCAiY2xvc2UiLCAib3BlbiIsICJNZXNzYWdlRGlhbG9nIiwgImdldEFjdGlvblByb2Nlc3MiLCAibGVuZ3RoIiwgInRyaWdnZXIiLCAibG9jYXRpb24iLCAiaHJlZiIsICJQcm9jZXNzIiwgImNsb3NlV2luZG93IiwgImFkZFdpbmRvd3MiLCAib3BlbldpbmRvdyIsICIkY2FWaWV3c291cmNlIiwgImZpbmQiLCAiZWRpdEljb24iLCAiYXR0ciIsICJodG1sIiwgIm9uIiwgImV2ZW50IiwgInByZXZlbnREZWZhdWx0IiwgImdldEJvZHkiLCAidGhlbiIsICJsb2dpblRvRWRpdCJdCn0K

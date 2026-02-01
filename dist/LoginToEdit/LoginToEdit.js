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
var configKey = "gadget-AjaxLogin__Initialized";
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
        if ($element.length && mw.config.get(configKey) === true) {
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0xvZ2luVG9FZGl0L0xvZ2luVG9FZGl0LnRzIiwgInNyYy9BamF4TG9naW4vb3B0aW9ucy5qc29uIiwgInNyYy9Mb2dpblRvRWRpdC9tb2R1bGVzL2kxOG4udHMiLCAic3JjL0xvZ2luVG9FZGl0L21vZHVsZXMvdXRpbC9nZW5lcmF0ZU1lc3NhZ2VEaWFsb2dQcm9wZXJ0eS50cyIsICJzcmMvTG9naW5Ub0VkaXQvbW9kdWxlcy9pbml0V2luZG93TWFuYWdlci50cyIsICJzcmMvTG9naW5Ub0VkaXQvbW9kdWxlcy9pbml0RGlhbG9nLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQge2dldEJvZHl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5pbXBvcnQge2luaXREaWFsb2d9IGZyb20gJy4vbW9kdWxlcy9pbml0RGlhbG9nJztcblxudm9pZCBnZXRCb2R5KCkudGhlbihmdW5jdGlvbiBsb2dpblRvRWRpdCgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkIHtcblx0Y29uc3Qge3dnVXNlck5hbWV9ID0gbXcuY29uZmlnLmdldCgpO1xuXG5cdGlmICh3Z1VzZXJOYW1lKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0aW5pdERpYWxvZygkYm9keSk7XG59KTtcbiIsICJ7XG5cdFwibG9naW5FbGVtZW50U2VsZWN0b3JcIjogXCJhOmhhcyguYWpheGxvZ2luLW1vdW50LXBvaW50KSwjcHQtbG9naW4+YSwudmVjdG9yLXVzZXItbWVudS1sb2dpbj5hLCN1c2VyLXRvb2xzPmFbaHJlZio9XFxcIlNwZWNpYWxcXFwiXSwubWFpbnBhZ2UtdG9wLW1lbnU+bGk6bnRoLWNoaWxkKDIpIGFcIixcblx0XCJjb25maWdLZXlcIjogXCJnYWRnZXQtQWpheExvZ2luX19Jbml0aWFsaXplZFwiLFxuXHRcInZlcnNpb25cIjogXCI0LjBcIlxufVxuIiwgImltcG9ydCB7bG9jYWxpemV9IGZyb20gJ2V4dC5nYWRnZXQuaTE4bic7XG5cbmNvbnN0IGdldEkxOG5NZXNzYWdlcyA9ICgpID0+IHtcblx0cmV0dXJuIHtcblx0XHRDYW5jZWw6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQ2FuY2VsJyxcblx0XHRcdGphOiAn44Kt44Oj44Oz44K744OrJyxcblx0XHRcdCd6aC1oYW5zJzogJ+aaguS4jeeZu+W9lei0puWPtycsXG5cdFx0XHQnemgtaGFudCc6ICfmmqvkuI3nmbvlhaXos6zomZ8nLFxuXHRcdH0pLFxuXHRcdEVkaXQ6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnRWRpdCcsXG5cdFx0XHRqYTogJ+e3qOmbhicsXG5cdFx0XHQnemgtaGFucyc6ICfnvJbovpEnLFxuXHRcdFx0J3poLWhhbnQnOiAn57eo6LyvJyxcblx0XHR9KSxcblx0XHRMb2dpbjogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdMb2dpbicsXG5cdFx0XHRqYTogJ+ODreOCsOOCpOODsycsXG5cdFx0XHQnemgtaGFucyc6ICfnmbvlvZXlt7LmnInotKblj7cnLFxuXHRcdFx0J3poLWhhbnQnOiAn55m75YWl5bey5pyJ6LOs6JmfJyxcblx0XHR9KSxcblx0XHRSZWdpc3RlcjogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdSZWdpc3RlcicsXG5cdFx0XHRqYTogJ+OCouOCq+OCpuODs+ODiOOCkuS9nOaIkCcsXG5cdFx0XHQnemgtaGFucyc6ICfms6jlhozmlrDnmoTotKblj7cnLFxuXHRcdFx0J3poLWhhbnQnOiAn6Ki75YaK5paw55qE6LOs6JmfJyxcblx0XHR9KSxcblx0XHREaWFsb2dUaXRsZTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdXZWxjb21lIHRvIFFpdXdlbiBCYWlrZSEnLFxuXHRcdFx0amE6ICfmsYLogZ7nmb7np5HjgbjjgojjgYbjgZPjgZ3vvIEnLFxuXHRcdFx0J3poLWhhbnMnOiAn5qyi6L+O5p2l5Yiw5rGC6Ze755m+56eR77yBJyxcblx0XHRcdCd6aC1oYW50JzogJ+atoei/juS+huWIsOaxguiBnueZvuenke+8gScsXG5cdFx0fSksXG5cdFx0RGlhbG9nTWVzc2FnZTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdZb3UgaGF2ZSBub3QgeWV0IGxvZ2dlZCBpbi4gUmVnaXN0ZXIgYW5kIGxvZyBpbiB0byB5b3VyIGFjY291bnQgdG8gY29udHJpYnV0ZS4nLFxuXHRcdFx0amE6ICfjgYLjgarjgZ/jga/jgb7jgaDmsYLogZ7nmb7np5Hjgavjg63jgrDjgqTjg7PjgZfjgabjgYTjgb7jgZvjgpPjgILjgqLjgqvjgqbjg7Pjg4jjgpLkvZzmiJDjgZfjgIHjg63jgrDjgqTjg7PjgZfjgabmsYLogZ7nmb7np5HjgpLmlLnlloTjgZnjgovjgZPjgajjgYzjgafjgY3jgb7jgZnjgIInLFxuXHRcdFx0J3poLWhhbnMnOiAn5oKo5bCa5pyq55m75b2V5rGC6Ze755m+56eR44CC5oKo5Y+v5Lul5rOo5YaM5bm255m75b2V6LSm5Y+377yM5biu5Yqp5a6M5ZaE5rGC6Ze755m+56eR44CCJyxcblx0XHRcdCd6aC1oYW50JzogJ+aCqOWwmuacqueZu+mMhOaxguiBnueZvuenkeOAguaCqOWPr+S7peazqOWGiuS4pueZu+mMhOizrOiZn++8jOW5q+WKqeWujOWWhOaxguiBnueZvuenkeOAgicsXG5cdFx0fSksXG5cdH07XG59O1xuXG5jb25zdCBpMThuTWVzc2FnZXMgPSBnZXRJMThuTWVzc2FnZXMoKTtcblxuY29uc3QgZ2V0TWVzc2FnZTogR2V0TWVzc2FnZXM8dHlwZW9mIGkxOG5NZXNzYWdlcz4gPSAoa2V5KSA9PiB7XG5cdHJldHVybiBpMThuTWVzc2FnZXNba2V5XSB8fCBrZXk7XG59O1xuXG5leHBvcnQge2dldE1lc3NhZ2V9O1xuIiwgImltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi4vaTE4bic7XG5cbmNvbnN0IGdlbmVyYXRlTWVzc2FnZURpYWxvZ1Byb3BlcnR5ID0gKCk6IE9PLnVpLldpbmRvd01hbmFnZXIuV2luZG93T3BlbmluZ0RhdGEgPT4ge1xuXHRjb25zdCAkdGl0bGU6IEpRdWVyeSA9ICQoJzxiPicpLmFkZENsYXNzKCdvby11aS13aW5kb3ctaGVhZCcpLnRleHQoZ2V0TWVzc2FnZSgnRGlhbG9nVGl0bGUnKSk7XG5cdGNvbnN0ICRtZXNzYWdlOiBKUXVlcnkgPSAkKCc8c3Bhbj4nKS5hZGRDbGFzcygnb28tdWktd2luZG93LWZvb3QnKS50ZXh0KGdldE1lc3NhZ2UoJ0RpYWxvZ01lc3NhZ2UnKSk7XG5cblx0Y29uc3QgbWVzc2FnZURpYWxvZ1Byb3BlcnR5OiBPTy51aS5XaW5kb3dNYW5hZ2VyLldpbmRvd09wZW5pbmdEYXRhID0ge1xuXHRcdHRpdGxlOiAkdGl0bGUsXG5cdFx0bWVzc2FnZTogJG1lc3NhZ2UsXG5cdFx0YWN0aW9uczogW1xuXHRcdFx0e1xuXHRcdFx0XHRhY3Rpb246ICdsb2dpbicsXG5cdFx0XHRcdGZsYWdzOiBbJ3ByaW1hcnknLCAncHJvZ3Jlc3NpdmUnXSxcblx0XHRcdFx0bGFiZWw6ICQoJzxiPicpLnRleHQoZ2V0TWVzc2FnZSgnTG9naW4nKSksXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRhY3Rpb246ICdyZWdpc3RlcicsXG5cdFx0XHRcdGZsYWdzOiAncHJvZ3Jlc3NpdmUnLFxuXHRcdFx0XHRsYWJlbDogJCgnPGI+JykudGV4dChnZXRNZXNzYWdlKCdSZWdpc3RlcicpKSxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGFjdGlvbjogJ2NhbmNlbCcsXG5cdFx0XHRcdGZsYWdzOiBbJ3NhZmUnLCAnY2xvc2UnXSxcblx0XHRcdFx0bGFiZWw6ICQoJzxiPicpLnRleHQoZ2V0TWVzc2FnZSgnQ2FuY2VsJykpLFxuXHRcdFx0fSxcblx0XHRdLFxuXHR9O1xuXG5cdHJldHVybiBtZXNzYWdlRGlhbG9nUHJvcGVydHk7XG59O1xuXG5leHBvcnQge2dlbmVyYXRlTWVzc2FnZURpYWxvZ1Byb3BlcnR5fTtcbiIsICJjb25zdCBpbml0V2luZG93TWFuYWdlciA9ICgpOiBPTy51aS5XaW5kb3dNYW5hZ2VyID0+IHtcblx0Y29uc3Qgd2luZG93TWFuYWdlcjogT08udWkuV2luZG93TWFuYWdlciA9IG5ldyBPTy51aS5XaW5kb3dNYW5hZ2VyKCk7XG5cblx0cmV0dXJuIHdpbmRvd01hbmFnZXI7XG59O1xuXG5leHBvcnQge2luaXRXaW5kb3dNYW5hZ2VyfTtcbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJ34vQWpheExvZ2luL29wdGlvbnMuanNvbic7XG5pbXBvcnQge2dlbmVyYXRlTWVzc2FnZURpYWxvZ1Byb3BlcnR5fSBmcm9tICcuL3V0aWwvZ2VuZXJhdGVNZXNzYWdlRGlhbG9nUHJvcGVydHknO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL2kxOG4nO1xuaW1wb3J0IHtpbml0V2luZG93TWFuYWdlcn0gZnJvbSAnLi9pbml0V2luZG93TWFuYWdlcic7XG5cbmNvbnN0IHtza2luLCB3Z0FjdGlvbiwgd2dQYWdlTmFtZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5jb25zdCBpc0NpdGl6ZW46IGJvb2xlYW4gPSBza2luID09PSAnY2l0aXplbic7XG5jb25zdCBsb2dpblVSTDogc3RyaW5nID0gbXcudXRpbC5nZXRVcmwoJ1NwZWNpYWw6VXNlckxvZ2luJywge1xuXHRyZXR1cm50bzogd2dQYWdlTmFtZSxcbn0pO1xuY29uc3QgcmVnaXN0ZXJVUkw6IHN0cmluZyA9IG13LnV0aWwuZ2V0VXJsKCdTcGVjaWFsOkNyZWF0ZUFjY291bnQnLCB7XG5cdHJldHVybnRvOiB3Z1BhZ2VOYW1lLFxufSk7XG5cbmxldCBtZXNzYWdlRGlhbG9nOiBPTy51aS5NZXNzYWdlRGlhbG9nO1xuXG5jb25zdCBpbml0RGlhbG9nID0gKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQgPT4ge1xuXHRjb25zdCB3aW5kb3dNYW5hZ2VyOiBPTy51aS5XaW5kb3dNYW5hZ2VyID0gaW5pdFdpbmRvd01hbmFnZXIoKTtcblx0d2luZG93TWFuYWdlci4kZWxlbWVudC5hcHBlbmRUbygkYm9keSk7XG5cblx0Y29uc3QgbWVzc2FnZURpYWxvZ1Byb3BlcnR5OiBPTy51aS5XaW5kb3dNYW5hZ2VyLldpbmRvd09wZW5pbmdEYXRhID0gZ2VuZXJhdGVNZXNzYWdlRGlhbG9nUHJvcGVydHkoKTtcblxuXHRjb25zdCBvcGVuRGlhbG9nID0gKCk6IHZvaWQgPT4ge1xuXHRcdGlmIChtZXNzYWdlRGlhbG9nKSB7XG5cdFx0XHRpZiAobWVzc2FnZURpYWxvZy5pc09wZW5lZCgpKSB7XG5cdFx0XHRcdG1lc3NhZ2VEaWFsb2cuY2xvc2UoKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdG1lc3NhZ2VEaWFsb2cub3BlbihtZXNzYWdlRGlhbG9nUHJvcGVydHkpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdG1lc3NhZ2VEaWFsb2cgPSBuZXcgT08udWkuTWVzc2FnZURpYWxvZygpO1xuXHRcdG1lc3NhZ2VEaWFsb2cuZ2V0QWN0aW9uUHJvY2VzcyA9IChhY3Rpb246IHN0cmluZyk6IE9PLnVpLlByb2Nlc3MgPT4ge1xuXHRcdFx0aWYgKGFjdGlvbiA9PT0gJ2xvZ2luJykge1xuXHRcdFx0XHRjb25zdCAkZWxlbWVudDogSlF1ZXJ5PEhUTUxBbmNob3JFbGVtZW50PiA9ICQoT1BUSU9OUy5sb2dpbkVsZW1lbnRTZWxlY3Rvcik7XG5cdFx0XHRcdGlmICgkZWxlbWVudC5sZW5ndGggJiYgbXcuY29uZmlnLmdldChPUFRJT05TLmNvbmZpZ0tleSkgPT09IHRydWUpIHtcblx0XHRcdFx0XHQkZWxlbWVudC50cmlnZ2VyKCdjbGljaycpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGxvY2F0aW9uLmhyZWYgPSBsb2dpblVSTDtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIGlmIChhY3Rpb24gPT09ICdyZWdpc3RlcicpIHtcblx0XHRcdFx0bG9jYXRpb24uaHJlZiA9IHJlZ2lzdGVyVVJMO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIG5ldyBPTy51aS5Qcm9jZXNzKCgpOiB2b2lkID0+IHtcblx0XHRcdFx0dm9pZCB3aW5kb3dNYW5hZ2VyLmNsb3NlV2luZG93KG1lc3NhZ2VEaWFsb2cpO1xuXHRcdFx0fSk7XG5cdFx0fTtcblxuXHRcdHdpbmRvd01hbmFnZXIuYWRkV2luZG93cyhbbWVzc2FnZURpYWxvZ10pO1xuXHRcdHZvaWQgd2luZG93TWFuYWdlci5vcGVuV2luZG93KG1lc3NhZ2VEaWFsb2csIG1lc3NhZ2VEaWFsb2dQcm9wZXJ0eSk7XG5cdH07XG5cblx0Y29uc3QgJGNhVmlld3NvdXJjZTogSlF1ZXJ5ID0gJGJvZHkuZmluZCgnI2NhLXZpZXdzb3VyY2UnKTtcblx0aWYgKCRjYVZpZXdzb3VyY2UubGVuZ3RoKSB7XG5cdFx0Y29uc3QgZWRpdEljb246IHN0cmluZyA9IGlzQ2l0aXplbiA/ICc8c3BhbiBjbGFzcz1cImNpdGl6ZW4tdWktaWNvbiBtdy11aS1pY29uLXdpa2ltZWRpYS1lZGl0XCI+PC9zcGFuPicgOiAnJztcblx0XHQkY2FWaWV3c291cmNlXG5cdFx0XHQuYXR0cignaWQnLCAnY2EtZWRpdCcpXG5cdFx0XHQuZmluZCgnYScpXG5cdFx0XHQuYXR0cignYXJpYS1sYWJlbCcsIGdldE1lc3NhZ2UoJ0RpYWxvZ01lc3NhZ2UnKSlcblx0XHRcdC5odG1sKGVkaXRJY29uICsgZ2V0TWVzc2FnZSgnRWRpdCcpKVxuXHRcdFx0Lm9uKCdjbGljaycsIChldmVudDogSlF1ZXJ5LkNsaWNrRXZlbnQpOiB2b2lkID0+IHtcblx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0b3BlbkRpYWxvZygpO1xuXHRcdFx0fSk7XG5cdH1cblxuXHRpZiAoWydlZGl0JywgJ3N1Ym1pdCddLmluY2x1ZGVzKHdnQWN0aW9uKSkge1xuXHRcdG9wZW5EaWFsb2coKTtcblx0fVxufTtcblxuZXhwb3J0IHtpbml0RGlhbG9nfTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEscUJBQXNCQyxRQUFBLGlCQUFBOztBQ0NyQixJQUFBQyx1QkFBd0I7QUFDeEIsSUFBQUMsWUFBYTs7QUNGZCxJQUFBQyxvQkFBdUJILFFBQUEs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akIsQ0FBQzsiLAogICJuYW1lcyI6IFsiaW1wb3J0X2V4dF9nYWRnZXQyIiwgInJlcXVpcmUiLCAibG9naW5FbGVtZW50U2VsZWN0b3IiLCAiY29uZmlnS2V5IiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgImdldEkxOG5NZXNzYWdlcyIsICJDYW5jZWwiLCAibG9jYWxpemUiLCAiZW4iLCAiamEiLCAiRWRpdCIsICJMb2dpbiIsICJSZWdpc3RlciIsICJEaWFsb2dUaXRsZSIsICJEaWFsb2dNZXNzYWdlIiwgImkxOG5NZXNzYWdlcyIsICJnZXRNZXNzYWdlIiwgImtleSIsICJnZW5lcmF0ZU1lc3NhZ2VEaWFsb2dQcm9wZXJ0eSIsICIkdGl0bGUiLCAiJCIsICJhZGRDbGFzcyIsICJ0ZXh0IiwgIiRtZXNzYWdlIiwgIm1lc3NhZ2VEaWFsb2dQcm9wZXJ0eSIsICJ0aXRsZSIsICJtZXNzYWdlIiwgImFjdGlvbnMiLCAiYWN0aW9uIiwgImZsYWdzIiwgImxhYmVsIiwgImluaXRXaW5kb3dNYW5hZ2VyIiwgIndpbmRvd01hbmFnZXIiLCAiT08iLCAidWkiLCAiV2luZG93TWFuYWdlciIsICJza2luIiwgIndnQWN0aW9uIiwgIndnUGFnZU5hbWUiLCAibXciLCAiY29uZmlnIiwgImdldCIsICJpc0NpdGl6ZW4iLCAibG9naW5VUkwiLCAidXRpbCIsICJnZXRVcmwiLCAicmV0dXJudG8iLCAicmVnaXN0ZXJVUkwiLCAibWVzc2FnZURpYWxvZyIsICJpbml0RGlhbG9nIiwgIiRib2R5IiwgIiRlbGVtZW50IiwgImFwcGVuZFRvIiwgIm9wZW5EaWFsb2ciLCAiaXNPcGVuZWQiLCAiY2xvc2UiLCAib3BlbiIsICJNZXNzYWdlRGlhbG9nIiwgImdldEFjdGlvblByb2Nlc3MiLCAibGVuZ3RoIiwgInRyaWdnZXIiLCAibG9jYXRpb24iLCAiaHJlZiIsICJQcm9jZXNzIiwgImNsb3NlV2luZG93IiwgImFkZFdpbmRvd3MiLCAib3BlbldpbmRvdyIsICIkY2FWaWV3c291cmNlIiwgImZpbmQiLCAiZWRpdEljb24iLCAiYXR0ciIsICJodG1sIiwgIm9uIiwgImV2ZW50IiwgInByZXZlbnREZWZhdWx0IiwgImluY2x1ZGVzIiwgImdldEJvZHkiLCAidGhlbiIsICJsb2dpblRvRWRpdCIsICJ3Z1VzZXJOYW1lIl0KfQo=

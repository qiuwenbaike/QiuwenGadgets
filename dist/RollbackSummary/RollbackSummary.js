/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://zh.wikipedia.org/wiki/MediaWiki:Gadget-rollback-summary.js}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/RollbackSummary}
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

// dist/RollbackSummary/RollbackSummary.js
//! src/RollbackSummary/modules/core.ts
var import_ext_gadget2 = require("ext.gadget.FilterAlteredClicks");
//! src/RollbackSummary/modules/i18n.ts
var import_ext_gadget = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    Prompt: (0, import_ext_gadget.localize)({
      en: "Please enter a custom rollback summary (leave blank to use the system default summary)",
      "zh-hans": "请输入自定义回退摘要（留空则使用系统默认摘要）",
      "zh-hant": "請輸入自定義回退摘要（留空則使用系統預設摘要）"
    })
  };
};
var i18nMessages = getI18nMessages();
var getMessage = (key) => {
  return i18nMessages[key] || key;
};
//! src/RollbackSummary/modules/messages.ts
var messages = () => {
  mw.messages.set({
    "rollback-summary-custom": window.wgULS("回退[[Special:Contribs/$1|$1]]（[[User talk:$1|对话]]）的编辑：", "回退[[Special:Contribs/$1|$1]]（[[User talk:$1|對話]]）的編輯："),
    "rollback-summary-nouser": window.wgULS(void 0, void 0, "回退已隐藏用户的编辑：", "回退已隱藏使用者的編輯：", "回退已隱藏用戶的編輯：")
  });
};
//! src/RollbackSummary/modules/core.ts
var updateLinks = ($content) => {
  messages();
  const $body = $content.parents("body");
  const $mwRollbackLinkA = $body.find(".mw-rollback-link a");
  $mwRollbackLinkA.off("click");
  $mwRollbackLinkA.on("click", (0, import_ext_gadget2.filterAlteredClicks)(function(event) {
    event.preventDefault();
    let {
      href
    } = this;
    let summary = prompt(getMessage("Prompt"));
    if (summary === null) {
    } else if (summary === "") {
      location.assign(href);
    } else {
      const username = mw.util.getParamValue("from", href);
      if (username) {
        summary = mw.message("rollback-summary-custom", username).plain() + summary;
      } else {
        summary = mw.message("rollback-summary-nouser").plain() + summary;
      }
      href += "&summary=".concat(encodeURIComponent(summary));
      location.assign(href);
    }
  }));
  $mwRollbackLinkA.css("color", "#099");
};
var rollbackSummary = () => {
  mw.hook("wikipage.content").add(($content) => {
    updateLinks($content);
  });
};
//! src/RollbackSummary/RollbackSummary.ts
$(rollbackSummary);
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1JvbGxiYWNrU3VtbWFyeS9tb2R1bGVzL2NvcmUudHMiLCAic3JjL1JvbGxiYWNrU3VtbWFyeS9tb2R1bGVzL2kxOG4udHMiLCAic3JjL1JvbGxiYWNrU3VtbWFyeS9tb2R1bGVzL21lc3NhZ2VzLnRzIiwgInNyYy9Sb2xsYmFja1N1bW1hcnkvUm9sbGJhY2tTdW1tYXJ5LnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQge2ZpbHRlckFsdGVyZWRDbGlja3N9IGZyb20gJ2V4dC5nYWRnZXQuRmlsdGVyQWx0ZXJlZENsaWNrcyc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vaTE4bic7XG5pbXBvcnQge21lc3NhZ2VzfSBmcm9tICcuL21lc3NhZ2VzJztcblxuY29uc3QgdXBkYXRlTGlua3MgPSAoJGNvbnRlbnQ6IEpRdWVyeSk6IHZvaWQgPT4ge1xuXHRtZXNzYWdlcygpO1xuXHRjb25zdCAkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4gPSAkY29udGVudC5wYXJlbnRzKCdib2R5Jyk7XG5cdGNvbnN0ICRtd1JvbGxiYWNrTGlua0E6IEpRdWVyeTxIVE1MQW5jaG9yRWxlbWVudD4gPSAkYm9keS5maW5kPEhUTUxBbmNob3JFbGVtZW50PignLm13LXJvbGxiYWNrLWxpbmsgYScpO1xuXHQkbXdSb2xsYmFja0xpbmtBLm9mZignY2xpY2snKTtcblx0JG13Um9sbGJhY2tMaW5rQS5vbihcblx0XHQnY2xpY2snLFxuXHRcdGZpbHRlckFsdGVyZWRDbGlja3MoZnVuY3Rpb24gKGV2ZW50OiBKUXVlcnkuQ2xpY2tFdmVudCk6IHZvaWQge1xuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdGxldCB7aHJlZn0gPSB0aGlzO1xuXHRcdFx0bGV0IHN1bW1hcnk6IHN0cmluZyB8IG51bGwgPSBwcm9tcHQoZ2V0TWVzc2FnZSgnUHJvbXB0JykpO1xuXHRcdFx0aWYgKHN1bW1hcnkgPT09IG51bGwpIHtcblx0XHRcdFx0LyogZW1wdHkgKi9cblx0XHRcdH0gZWxzZSBpZiAoc3VtbWFyeSA9PT0gJycpIHtcblx0XHRcdFx0bG9jYXRpb24uYXNzaWduKGhyZWYpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y29uc3QgdXNlcm5hbWU6IHN0cmluZyB8IG51bGwgPSBtdy51dGlsLmdldFBhcmFtVmFsdWUoJ2Zyb20nLCBocmVmKTtcblx0XHRcdFx0aWYgKHVzZXJuYW1lKSB7XG5cdFx0XHRcdFx0c3VtbWFyeSA9IG13Lm1lc3NhZ2UoJ3JvbGxiYWNrLXN1bW1hcnktY3VzdG9tJywgdXNlcm5hbWUpLnBsYWluKCkgKyBzdW1tYXJ5O1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHN1bW1hcnkgPSBtdy5tZXNzYWdlKCdyb2xsYmFjay1zdW1tYXJ5LW5vdXNlcicpLnBsYWluKCkgKyBzdW1tYXJ5O1xuXHRcdFx0XHR9XG5cdFx0XHRcdGhyZWYgKz0gYCZzdW1tYXJ5PSR7ZW5jb2RlVVJJQ29tcG9uZW50KHN1bW1hcnkpfWA7XG5cdFx0XHRcdGxvY2F0aW9uLmFzc2lnbihocmVmKTtcblx0XHRcdH1cblx0XHR9KVxuXHQpO1xuXHQkbXdSb2xsYmFja0xpbmtBLmNzcygnY29sb3InLCAnIzA5OScpO1xufTtcblxuZXhwb3J0IGNvbnN0IHJvbGxiYWNrU3VtbWFyeSA9ICgpOiB2b2lkID0+IHtcblx0bXcuaG9vazxKUXVlcnlbXT4oJ3dpa2lwYWdlLmNvbnRlbnQnKS5hZGQoKCRjb250ZW50KTogdm9pZCA9PiB7XG5cdFx0dXBkYXRlTGlua3MoJGNvbnRlbnQpO1xuXHR9KTtcbn07XG4iLCAiaW1wb3J0IHtsb2NhbGl6ZX0gZnJvbSAnZXh0LmdhZGdldC5pMThuJztcblxuY29uc3QgZ2V0STE4bk1lc3NhZ2VzID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdFByb21wdDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdQbGVhc2UgZW50ZXIgYSBjdXN0b20gcm9sbGJhY2sgc3VtbWFyeSAobGVhdmUgYmxhbmsgdG8gdXNlIHRoZSBzeXN0ZW0gZGVmYXVsdCBzdW1tYXJ5KScsXG5cdFx0XHQnemgtaGFucyc6ICfor7fovpPlhaXoh6rlrprkuYnlm57pgIDmkZjopoHvvIjnlZnnqbrliJnkvb/nlKjns7vnu5/pu5jorqTmkZjopoHvvIknLFxuXHRcdFx0J3poLWhhbnQnOiAn6KuL6Ly45YWl6Ieq5a6a576p5Zue6YCA5pGY6KaB77yI55WZ56m65YmH5L2/55So57O757Wx6aCQ6Kit5pGY6KaB77yJJyxcblx0XHR9KSxcblx0fTtcbn07XG5cbmNvbnN0IGkxOG5NZXNzYWdlcyA9IGdldEkxOG5NZXNzYWdlcygpO1xuXG5jb25zdCBnZXRNZXNzYWdlOiBHZXRNZXNzYWdlczx0eXBlb2YgaTE4bk1lc3NhZ2VzPiA9IChrZXkpID0+IHtcblx0cmV0dXJuIGkxOG5NZXNzYWdlc1trZXldIHx8IGtleTtcbn07XG5cbmV4cG9ydCB7Z2V0TWVzc2FnZX07XG4iLCAiZXhwb3J0IGNvbnN0IG1lc3NhZ2VzID0gKCk6IHZvaWQgPT4ge1xuXHRtdy5tZXNzYWdlcy5zZXQoe1xuXHRcdCdyb2xsYmFjay1zdW1tYXJ5LWN1c3RvbSc6IHdpbmRvdy53Z1VMUyhcblx0XHRcdCflm57pgIBbW1NwZWNpYWw6Q29udHJpYnMvJDF8JDFdXe+8iFtbVXNlciB0YWxrOiQxfOWvueivnV1d77yJ55qE57yW6L6R77yaJyxcblx0XHRcdCflm57pgIBbW1NwZWNpYWw6Q29udHJpYnMvJDF8JDFdXe+8iFtbVXNlciB0YWxrOiQxfOWwjeipsV1d77yJ55qE57eo6Lyv77yaJ1xuXHRcdCksXG5cdFx0J3JvbGxiYWNrLXN1bW1hcnktbm91c2VyJzogd2luZG93LndnVUxTKFxuXHRcdFx0dW5kZWZpbmVkLFxuXHRcdFx0dW5kZWZpbmVkLFxuXHRcdFx0J+WbnumAgOW3sumakOiXj+eUqOaIt+eahOe8lui+ke+8micsXG5cdFx0XHQn5Zue6YCA5bey6Zqx6JeP5L2/55So6ICF55qE57eo6Lyv77yaJyxcblx0XHRcdCflm57pgIDlt7LpmrHol4/nlKjmiLbnmoTnt6jovK/vvJonXG5cdFx0KSxcblx0fSk7XG59O1xuIiwgImltcG9ydCB7cm9sbGJhY2tTdW1tYXJ5fSBmcm9tICcuL21vZHVsZXMvY29yZSc7XG5cbiQocm9sbGJhY2tTdW1tYXJ5KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7QUFBQSxJQUFBQSxxQkFBa0NDLFFBQUEsZ0NBQUE7O0FDQWxDLElBQUFDLG9CQUF1QkQsUUFBQSxpQkFBQTtBQUV2QixJQUFNRSxrQkFBa0JBLE1BQU07QUFDN0IsU0FBTztJQUNOQyxTQUFBLEdBQVFGLGtCQUFBRyxVQUFTO01BQ2hCQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0VBQ0Y7QUFDRDtBQUVBLElBQU1DLGVBQWVKLGdCQUFnQjtBQUVyQyxJQUFNSyxhQUFnREMsU0FBUTtBQUM3RCxTQUFPRixhQUFhRSxHQUFHLEtBQUtBO0FBQzdCOztBQ2hCTyxJQUFNQyxXQUFXQSxNQUFZO0FBQ25DQyxLQUFHRCxTQUFTRSxJQUFJO0lBQ2YsMkJBQTJCQyxPQUFPQyxNQUNqQyx5REFDQSx1REFDRDtJQUNBLDJCQUEyQkQsT0FBT0MsTUFDakMsUUFDQSxRQUNBLGVBQ0EsZ0JBQ0EsYUFDRDtFQUNELENBQUM7QUFDRjs7QUZWQSxJQUFNQyxjQUFlQyxjQUEyQjtBQUMvQ04sV0FBUztBQUNULFFBQU1PLFFBQWlDRCxTQUFTRSxRQUFRLE1BQU07QUFDOUQsUUFBTUMsbUJBQThDRixNQUFNRyxLQUF3QixxQkFBcUI7QUFDdkdELG1CQUFpQkUsSUFBSSxPQUFPO0FBQzVCRixtQkFBaUJHLEdBQ2hCLFVBQUEsR0FDQXRCLG1CQUFBdUIscUJBQW9CLFNBQVVDLE9BQWdDO0FBQzdEQSxVQUFNQyxlQUFlO0FBQ3JCLFFBQUk7TUFBQ0M7SUFBSSxJQUFJO0FBQ2IsUUFBSUMsVUFBeUJDLE9BQU9wQixXQUFXLFFBQVEsQ0FBQztBQUN4RCxRQUFJbUIsWUFBWSxNQUFNO0lBRXRCLFdBQVdBLFlBQVksSUFBSTtBQUMxQkUsZUFBU0MsT0FBT0osSUFBSTtJQUNyQixPQUFPO0FBQ04sWUFBTUssV0FBMEJwQixHQUFHcUIsS0FBS0MsY0FBYyxRQUFRUCxJQUFJO0FBQ2xFLFVBQUlLLFVBQVU7QUFDYkosa0JBQVVoQixHQUFHdUIsUUFBUSwyQkFBMkJILFFBQVEsRUFBRUksTUFBTSxJQUFJUjtNQUNyRSxPQUFPO0FBQ05BLGtCQUFVaEIsR0FBR3VCLFFBQVEseUJBQXlCLEVBQUVDLE1BQU0sSUFBSVI7TUFDM0Q7QUFDQUQsY0FBQSxZQUFBVSxPQUFvQkMsbUJBQW1CVixPQUFPLENBQUM7QUFDL0NFLGVBQVNDLE9BQU9KLElBQUk7SUFDckI7RUFDRCxDQUFDLENBQ0Y7QUFDQVAsbUJBQWlCbUIsSUFBSSxTQUFTLE1BQU07QUFDckM7QUFFTyxJQUFNQyxrQkFBa0JBLE1BQVk7QUFDMUM1QixLQUFHNkIsS0FBZSxrQkFBa0IsRUFBRUMsSUFBS3pCLGNBQW1CO0FBQzdERCxnQkFBWUMsUUFBUTtFQUNyQixDQUFDO0FBQ0Y7O0FHcENBMEIsRUFBRUgsZUFBZTsiLAogICJuYW1lcyI6IFsiaW1wb3J0X2V4dF9nYWRnZXQyIiwgInJlcXVpcmUiLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAiZ2V0STE4bk1lc3NhZ2VzIiwgIlByb21wdCIsICJsb2NhbGl6ZSIsICJlbiIsICJpMThuTWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAibWVzc2FnZXMiLCAibXciLCAic2V0IiwgIndpbmRvdyIsICJ3Z1VMUyIsICJ1cGRhdGVMaW5rcyIsICIkY29udGVudCIsICIkYm9keSIsICJwYXJlbnRzIiwgIiRtd1JvbGxiYWNrTGlua0EiLCAiZmluZCIsICJvZmYiLCAib24iLCAiZmlsdGVyQWx0ZXJlZENsaWNrcyIsICJldmVudCIsICJwcmV2ZW50RGVmYXVsdCIsICJocmVmIiwgInN1bW1hcnkiLCAicHJvbXB0IiwgImxvY2F0aW9uIiwgImFzc2lnbiIsICJ1c2VybmFtZSIsICJ1dGlsIiwgImdldFBhcmFtVmFsdWUiLCAibWVzc2FnZSIsICJwbGFpbiIsICJjb25jYXQiLCAiZW5jb2RlVVJJQ29tcG9uZW50IiwgImNzcyIsICJyb2xsYmFja1N1bW1hcnkiLCAiaG9vayIsICJhZGQiLCAiJCJdCn0K

})();

/* </nowiki> */

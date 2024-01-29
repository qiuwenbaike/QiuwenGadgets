/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://zh.wikipedia.org/wiki/MediaWiki:Gadget-rollback-summary.js}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/RollbackSummary}
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

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1JvbGxiYWNrU3VtbWFyeS9tb2R1bGVzL2NvcmUudHMiLCAic3JjL1JvbGxiYWNrU3VtbWFyeS9tb2R1bGVzL2kxOG4udHMiLCAic3JjL1JvbGxiYWNrU3VtbWFyeS9tb2R1bGVzL21lc3NhZ2VzLnRzIiwgInNyYy9Sb2xsYmFja1N1bW1hcnkvUm9sbGJhY2tTdW1tYXJ5LnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQge2ZpbHRlckFsdGVyZWRDbGlja3N9IGZyb20gJ2V4dC5nYWRnZXQuRmlsdGVyQWx0ZXJlZENsaWNrcyc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vaTE4bic7XG5pbXBvcnQge21lc3NhZ2VzfSBmcm9tICcuL21lc3NhZ2VzJztcblxuY29uc3QgdXBkYXRlTGlua3MgPSAoJGNvbnRlbnQ6IEpRdWVyeSk6IHZvaWQgPT4ge1xuXHRtZXNzYWdlcygpO1xuXHRjb25zdCAkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4gPSAkY29udGVudC5wYXJlbnRzKCdib2R5Jyk7XG5cdGNvbnN0ICRtd1JvbGxiYWNrTGlua0E6IEpRdWVyeTxIVE1MQW5jaG9yRWxlbWVudD4gPSAkYm9keS5maW5kPEhUTUxBbmNob3JFbGVtZW50PignLm13LXJvbGxiYWNrLWxpbmsgYScpO1xuXHQkbXdSb2xsYmFja0xpbmtBLm9mZignY2xpY2snKTtcblx0JG13Um9sbGJhY2tMaW5rQS5vbihcblx0XHQnY2xpY2snLFxuXHRcdGZpbHRlckFsdGVyZWRDbGlja3MoZnVuY3Rpb24gKGV2ZW50OiBKUXVlcnkuQ2xpY2tFdmVudCk6IHZvaWQge1xuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdGxldCB7aHJlZn0gPSB0aGlzO1xuXHRcdFx0bGV0IHN1bW1hcnk6IHN0cmluZyB8IG51bGwgPSBwcm9tcHQoZ2V0TWVzc2FnZSgnUHJvbXB0JykpO1xuXHRcdFx0aWYgKHN1bW1hcnkgPT09IG51bGwpIHtcblx0XHRcdFx0LyogZW1wdHkgKi9cblx0XHRcdH0gZWxzZSBpZiAoc3VtbWFyeSA9PT0gJycpIHtcblx0XHRcdFx0bG9jYXRpb24uYXNzaWduKGhyZWYpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y29uc3QgdXNlcm5hbWU6IHN0cmluZyB8IG51bGwgPSBtdy51dGlsLmdldFBhcmFtVmFsdWUoJ2Zyb20nLCBocmVmKTtcblx0XHRcdFx0aWYgKHVzZXJuYW1lKSB7XG5cdFx0XHRcdFx0c3VtbWFyeSA9IG13Lm1lc3NhZ2UoJ3JvbGxiYWNrLXN1bW1hcnktY3VzdG9tJywgdXNlcm5hbWUpLnBsYWluKCkgKyBzdW1tYXJ5O1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHN1bW1hcnkgPSBtdy5tZXNzYWdlKCdyb2xsYmFjay1zdW1tYXJ5LW5vdXNlcicpLnBsYWluKCkgKyBzdW1tYXJ5O1xuXHRcdFx0XHR9XG5cdFx0XHRcdGhyZWYgKz0gYCZzdW1tYXJ5PSR7ZW5jb2RlVVJJQ29tcG9uZW50KHN1bW1hcnkpfWA7XG5cdFx0XHRcdGxvY2F0aW9uLmFzc2lnbihocmVmKTtcblx0XHRcdH1cblx0XHR9KVxuXHQpO1xuXHQkbXdSb2xsYmFja0xpbmtBLmNzcygnY29sb3InLCAnIzA5OScpO1xufTtcblxuZXhwb3J0IGNvbnN0IHJvbGxiYWNrU3VtbWFyeSA9ICgpOiB2b2lkID0+IHtcblx0bXcuaG9vaygnd2lraXBhZ2UuY29udGVudCcpLmFkZCgoJGNvbnRlbnQpOiB2b2lkID0+IHtcblx0XHR1cGRhdGVMaW5rcygkY29udGVudCk7XG5cdH0pO1xufTtcbiIsICJpbXBvcnQge2xvY2FsaXplfSBmcm9tICdleHQuZ2FkZ2V0LmkxOG4nO1xuXG5jb25zdCBnZXRJMThuTWVzc2FnZXMgPSAoKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0UHJvbXB0OiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1BsZWFzZSBlbnRlciBhIGN1c3RvbSByb2xsYmFjayBzdW1tYXJ5IChsZWF2ZSBibGFuayB0byB1c2UgdGhlIHN5c3RlbSBkZWZhdWx0IHN1bW1hcnkpJyxcblx0XHRcdCd6aC1oYW5zJzogJ+ivt+i+k+WFpeiHquWumuS5ieWbnumAgOaRmOimge+8iOeVmeepuuWImeS9v+eUqOezu+e7n+m7mOiupOaRmOimge+8iScsXG5cdFx0XHQnemgtaGFudCc6ICfoq4vovLjlhaXoh6rlrprnvqnlm57pgIDmkZjopoHvvIjnlZnnqbrliYfkvb/nlKjns7vntbHpoJDoqK3mkZjopoHvvIknLFxuXHRcdH0pLFxuXHR9O1xufTtcblxuY29uc3QgaTE4bk1lc3NhZ2VzID0gZ2V0STE4bk1lc3NhZ2VzKCk7XG5cbmNvbnN0IGdldE1lc3NhZ2U6IEdldE1lc3NhZ2VzPHR5cGVvZiBpMThuTWVzc2FnZXM+ID0gKGtleSkgPT4ge1xuXHRyZXR1cm4gaTE4bk1lc3NhZ2VzW2tleV0gfHwga2V5O1xufTtcblxuZXhwb3J0IHtnZXRNZXNzYWdlfTtcbiIsICJleHBvcnQgY29uc3QgbWVzc2FnZXMgPSAoKTogdm9pZCA9PiB7XG5cdG13Lm1lc3NhZ2VzLnNldCh7XG5cdFx0J3JvbGxiYWNrLXN1bW1hcnktY3VzdG9tJzogd2luZG93LndnVUxTKFxuXHRcdFx0J+WbnumAgFtbU3BlY2lhbDpDb250cmlicy8kMXwkMV1d77yIW1tVc2VyIHRhbGs6JDF85a+56K+dXV3vvInnmoTnvJbovpHvvJonLFxuXHRcdFx0J+WbnumAgFtbU3BlY2lhbDpDb250cmlicy8kMXwkMV1d77yIW1tVc2VyIHRhbGs6JDF85bCN6KmxXV3vvInnmoTnt6jovK/vvJonXG5cdFx0KSxcblx0XHQncm9sbGJhY2stc3VtbWFyeS1ub3VzZXInOiB3aW5kb3cud2dVTFMoXG5cdFx0XHR1bmRlZmluZWQsXG5cdFx0XHR1bmRlZmluZWQsXG5cdFx0XHQn5Zue6YCA5bey6ZqQ6JeP55So5oi355qE57yW6L6R77yaJyxcblx0XHRcdCflm57pgIDlt7LpmrHol4/kvb/nlKjogIXnmoTnt6jovK/vvJonLFxuXHRcdFx0J+WbnumAgOW3sumaseiXj+eUqOaItueahOe3qOi8r++8midcblx0XHQpLFxuXHR9KTtcbn07XG4iLCAiaW1wb3J0IHtyb2xsYmFja1N1bW1hcnl9IGZyb20gJy4vbW9kdWxlcy9jb3JlJztcblxuJChyb2xsYmFja1N1bW1hcnkpO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEscUJBQWtDQyxRQUFBLGdDQUFBOztBQ0FsQyxJQUFBQyxvQkFBdUJELFFBQUEsaUJBQUE7QUFFdkIsSUFBTUUsa0JBQWtCQSxNQUFNO0FBQzdCLFNBQU87SUFDTkMsU0FBQSxHQUFRRixrQkFBQUcsVUFBUztNQUNoQkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztFQUNGO0FBQ0Q7QUFFQSxJQUFNQyxlQUFlSixnQkFBZ0I7QUFFckMsSUFBTUssYUFBZ0RDLFNBQVE7QUFDN0QsU0FBT0YsYUFBYUUsR0FBRyxLQUFLQTtBQUM3Qjs7QUNoQk8sSUFBTUMsV0FBV0EsTUFBWTtBQUNuQ0MsS0FBR0QsU0FBU0UsSUFBSTtJQUNmLDJCQUEyQkMsT0FBT0MsTUFDakMseURBQ0EsdURBQ0Q7SUFDQSwyQkFBMkJELE9BQU9DLE1BQ2pDLFFBQ0EsUUFDQSxlQUNBLGdCQUNBLGFBQ0Q7RUFDRCxDQUFDO0FBQ0Y7O0FGVkEsSUFBTUMsY0FBZUMsY0FBMkI7QUFDL0NOLFdBQVM7QUFDVCxRQUFNTyxRQUFpQ0QsU0FBU0UsUUFBUSxNQUFNO0FBQzlELFFBQU1DLG1CQUE4Q0YsTUFBTUcsS0FBd0IscUJBQXFCO0FBQ3ZHRCxtQkFBaUJFLElBQUksT0FBTztBQUM1QkYsbUJBQWlCRyxHQUNoQixVQUFBLEdBQ0F0QixtQkFBQXVCLHFCQUFvQixTQUFVQyxPQUFnQztBQUM3REEsVUFBTUMsZUFBZTtBQUNyQixRQUFJO01BQUNDO0lBQUksSUFBSTtBQUNiLFFBQUlDLFVBQXlCQyxPQUFPcEIsV0FBVyxRQUFRLENBQUM7QUFDeEQsUUFBSW1CLFlBQVksTUFBTTtJQUV0QixXQUFXQSxZQUFZLElBQUk7QUFDMUJFLGVBQVNDLE9BQU9KLElBQUk7SUFDckIsT0FBTztBQUNOLFlBQU1LLFdBQTBCcEIsR0FBR3FCLEtBQUtDLGNBQWMsUUFBUVAsSUFBSTtBQUNsRSxVQUFJSyxVQUFVO0FBQ2JKLGtCQUFVaEIsR0FBR3VCLFFBQVEsMkJBQTJCSCxRQUFRLEVBQUVJLE1BQU0sSUFBSVI7TUFDckUsT0FBTztBQUNOQSxrQkFBVWhCLEdBQUd1QixRQUFRLHlCQUF5QixFQUFFQyxNQUFNLElBQUlSO01BQzNEO0FBQ0FELGNBQUEsWUFBQVUsT0FBb0JDLG1CQUFtQlYsT0FBTyxDQUFDO0FBQy9DRSxlQUFTQyxPQUFPSixJQUFJO0lBQ3JCO0VBQ0QsQ0FBQyxDQUNGO0FBQ0FQLG1CQUFpQm1CLElBQUksU0FBUyxNQUFNO0FBQ3JDO0FBRU8sSUFBTUMsa0JBQWtCQSxNQUFZO0FBQzFDNUIsS0FBRzZCLEtBQUssa0JBQWtCLEVBQUVDLElBQUt6QixjQUFtQjtBQUNuREQsZ0JBQVlDLFFBQVE7RUFDckIsQ0FBQztBQUNGOztBR3BDQTBCLEVBQUVILGVBQWU7IiwKICAibmFtZXMiOiBbImltcG9ydF9leHRfZ2FkZ2V0MiIsICJyZXF1aXJlIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgImdldEkxOG5NZXNzYWdlcyIsICJQcm9tcHQiLCAibG9jYWxpemUiLCAiZW4iLCAiaTE4bk1lc3NhZ2VzIiwgImdldE1lc3NhZ2UiLCAia2V5IiwgIm1lc3NhZ2VzIiwgIm13IiwgInNldCIsICJ3aW5kb3ciLCAid2dVTFMiLCAidXBkYXRlTGlua3MiLCAiJGNvbnRlbnQiLCAiJGJvZHkiLCAicGFyZW50cyIsICIkbXdSb2xsYmFja0xpbmtBIiwgImZpbmQiLCAib2ZmIiwgIm9uIiwgImZpbHRlckFsdGVyZWRDbGlja3MiLCAiZXZlbnQiLCAicHJldmVudERlZmF1bHQiLCAiaHJlZiIsICJzdW1tYXJ5IiwgInByb21wdCIsICJsb2NhdGlvbiIsICJhc3NpZ24iLCAidXNlcm5hbWUiLCAidXRpbCIsICJnZXRQYXJhbVZhbHVlIiwgIm1lc3NhZ2UiLCAicGxhaW4iLCAiY29uY2F0IiwgImVuY29kZVVSSUNvbXBvbmVudCIsICJjc3MiLCAicm9sbGJhY2tTdW1tYXJ5IiwgImhvb2siLCAiYWRkIiwgIiQiXQp9Cg==

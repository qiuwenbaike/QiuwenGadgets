/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://zh.wikipedia.org/wiki/MediaWiki:Common.js/edit.js}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/EditForm_JS}
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

// dist/EditForm_JS/EditForm_JS.js
//! src/EditForm_JS/modules/clearUndoSummary.ts
var clearUndoSummary = ($editForm) => {
  const $wpAutoSummary = $editForm.find('input[name="wpAutoSummary"]');
  if (!$wpAutoSummary.length) {
    return;
  }
  if (mw.util.getParamValue("undo")) {
    $wpAutoSummary.val("");
  }
};
//! src/EditForm_JS/modules/disableTitle.ts
var disableTitle = ({
  $body,
  $editForm
}) => {
  if ($body.find("#no-new-title").length && $body.find('#editform input[name="wpSection"]').val() === "new") {
    const $wpSummary = $editForm.find("input[name=wpSummary]");
    $wpSummary.prop("disabled", true);
    $wpSummary.val("");
  }
  const {
    wgWikiID
  } = mw.config.get();
  if (wgWikiID === "loginwiki") {
    return;
  }
  const noSectionTitlePages = ["Qiuwen_talk:侵权提报", "Qiuwen_talk:存废讨论/关注度提报"];
  const noSectionTitlePagesRegex = /^Qiuwen_talk:存废讨论/;
  const {
    wgPageName
  } = mw.config.get();
  if ((noSectionTitlePages.includes(wgPageName) || noSectionTitlePagesRegex.test(wgPageName)) && mw.util.getParamValue("section") === "new") {
    mw.util.addCSS("h2.ve-ui-init-desktopArticleTarget-sectionTitle{display:none}");
  }
};
//! src/EditForm_JS/EditForm_JS.ts
var import_ext_gadget3 = require("ext.gadget.Util");
//! src/EditForm_JS/modules/util/api.ts
var import_ext_gadget = require("ext.gadget.Util");
var api = (0, import_ext_gadget.initMwApi)("EditForm_JS/2.0");
//! src/EditForm_JS/modules/i18n.ts
var import_ext_gadget2 = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    Preview: (0, import_ext_gadget2.localize)({
      en: "Please preview the edited text",
      ja: "プレビューしてください",
      "zh-hans": "请先预览",
      "zh-hant": "請先預覽"
    }),
    RevisionPreloaded: (0, import_ext_gadget2.localize)({
      en: "Content of revision $1 preloaded.",
      "zh-hans": "已加载版本$1的内容。",
      "zh-hant": "已載入版本$1的內容。"
    })
  };
};
var i18nMessages = getI18nMessages();
var getMessage = (key) => {
  return i18nMessages[key] || key;
};
//! src/EditForm_JS/modules/setWpTextbox1Content.ts
var setWpTextbox1Content = ({
  $editForm,
  content
}) => {
  $editForm.find("#wpTextbox1").textSelection("setContents", content);
};
//! src/EditForm_JS/modules/preloadRevid.ts
var preloadRevid = ($editForm) => {
  const revid = mw.util.getParamValue("preloadrevid");
  if (!revid) {
    return;
  }
  if (mw.config.get("gadget-EditForm_JS__RevisionPreloaded")) {
    return;
  }
  mw.config.set("gadget-EditForm_JS__RevisionPreloaded", true);
  const {
    wgAction
  } = mw.config.get();
  if (!["edit", "submit"].includes(wgAction)) {
    return;
  }
  const params = {
    action: "query",
    format: "json",
    formatversion: "2",
    prop: "revisions",
    revids: Number.parseInt(revid, 10),
    rvprop: "content",
    rvslots: "main"
  };
  void api.get(params).then(({
    query
  }) => {
    const {
      content
    } = query.pages[0].revisions[0].slots.main;
    setWpTextbox1Content({
      $editForm,
      content
    });
    void mw.notify(getMessage("RevisionPreloaded").replace("$1", revid), {
      type: "success"
    });
  });
};
//! src/EditForm_JS/EditForm_JS.ts
void (0, import_ext_gadget3.getBody)().then(function editForm($body) {
  mw.hook("wikipage.editform").add(($editForm) => {
    clearUndoSummary($editForm);
    disableTitle({
      $body,
      $editForm
    });
    preloadRevid($editForm);
  });
});

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0VkaXRGb3JtX0pTL21vZHVsZXMvY2xlYXJVbmRvU3VtbWFyeS50cyIsICJzcmMvRWRpdEZvcm1fSlMvbW9kdWxlcy9kaXNhYmxlVGl0bGUudHMiLCAic3JjL0VkaXRGb3JtX0pTL0VkaXRGb3JtX0pTLnRzIiwgInNyYy9FZGl0Rm9ybV9KUy9tb2R1bGVzL3V0aWwvYXBpLnRzIiwgInNyYy9FZGl0Rm9ybV9KUy9tb2R1bGVzL2kxOG4udHMiLCAic3JjL0VkaXRGb3JtX0pTL21vZHVsZXMvc2V0V3BUZXh0Ym94MUNvbnRlbnQudHMiLCAic3JjL0VkaXRGb3JtX0pTL21vZHVsZXMvcHJlbG9hZFJldmlkLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBjbGVhclVuZG9TdW1tYXJ5ID0gKCRlZGl0Rm9ybTogSlF1ZXJ5PEhUTUxFbGVtZW50Pik6IHZvaWQgPT4ge1xuXHRjb25zdCAkd3BBdXRvU3VtbWFyeTogSlF1ZXJ5PEhUTUxJbnB1dEVsZW1lbnQ+ID0gJGVkaXRGb3JtLmZpbmQ8SFRNTElucHV0RWxlbWVudD4oJ2lucHV0W25hbWU9XCJ3cEF1dG9TdW1tYXJ5XCJdJyk7XG5cdGlmICghJHdwQXV0b1N1bW1hcnkubGVuZ3RoKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0aWYgKG13LnV0aWwuZ2V0UGFyYW1WYWx1ZSgndW5kbycpKSB7XG5cdFx0JHdwQXV0b1N1bW1hcnkudmFsKCcnKTtcblx0fVxufTtcblxuZXhwb3J0IHtjbGVhclVuZG9TdW1tYXJ5fTtcbiIsICJjb25zdCBkaXNhYmxlVGl0bGUgPSAoeyRib2R5LCAkZWRpdEZvcm19OiB7JGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+OyAkZWRpdEZvcm06IEpRdWVyeTxIVE1MRWxlbWVudD59KTogdm9pZCA9PiB7XG5cdGlmICgkYm9keS5maW5kKCcjbm8tbmV3LXRpdGxlJykubGVuZ3RoICYmICRib2R5LmZpbmQoJyNlZGl0Zm9ybSBpbnB1dFtuYW1lPVwid3BTZWN0aW9uXCJdJykudmFsKCkgPT09ICduZXcnKSB7XG5cdFx0Ly8g5Lyg57uf5paH5pys57yW6L6R5ZmoXG5cdFx0Y29uc3QgJHdwU3VtbWFyeTogSlF1ZXJ5ID0gJGVkaXRGb3JtLmZpbmQoJ2lucHV0W25hbWU9d3BTdW1tYXJ5XScpO1xuXHRcdCR3cFN1bW1hcnkucHJvcCgnZGlzYWJsZWQnLCB0cnVlKTtcblx0XHQkd3BTdW1tYXJ5LnZhbCgnJyk7XG5cdH1cblxuXHRjb25zdCB7d2dXaWtpSUR9ID0gbXcuY29uZmlnLmdldCgpO1xuXHQvLyBEaXNhYmxlZCBmb3IgbG9naW53aWtpXG5cdGlmICh3Z1dpa2lJRCA9PT0gJ2xvZ2lud2lraScpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBub1NlY3Rpb25UaXRsZVBhZ2VzOiBzdHJpbmdbXSA9IFsnUWl1d2VuX3RhbGs65L615p2D5o+Q5oqlJywgJ1FpdXdlbl90YWxrOuWtmOW6n+iuqOiuui/lhbPms6jluqbmj5DmiqUnXTtcblx0Y29uc3Qgbm9TZWN0aW9uVGl0bGVQYWdlc1JlZ2V4OiBSZWdFeHAgPSAvXlFpdXdlbl90YWxrOuWtmOW6n+iuqOiuui87XG5cdGNvbnN0IHt3Z1BhZ2VOYW1lfSA9IG13LmNvbmZpZy5nZXQoKTtcblx0aWYgKFxuXHRcdChub1NlY3Rpb25UaXRsZVBhZ2VzLmluY2x1ZGVzKHdnUGFnZU5hbWUpIHx8IG5vU2VjdGlvblRpdGxlUGFnZXNSZWdleC50ZXN0KHdnUGFnZU5hbWUpKSAmJlxuXHRcdG13LnV0aWwuZ2V0UGFyYW1WYWx1ZSgnc2VjdGlvbicpID09PSAnbmV3J1xuXHQpIHtcblx0XHQvLyDlj6/op4bljJbnvJbovpHlmaggLyDmlrB3aWtpdGV4dOaooeW8j1xuXHRcdG13LnV0aWwuYWRkQ1NTKCdoMi52ZS11aS1pbml0LWRlc2t0b3BBcnRpY2xlVGFyZ2V0LXNlY3Rpb25UaXRsZXtkaXNwbGF5Om5vbmV9Jyk7XG5cdH1cbn07XG5cbmV4cG9ydCB7ZGlzYWJsZVRpdGxlfTtcbiIsICJpbXBvcnQge2NsZWFyVW5kb1N1bW1hcnl9IGZyb20gJy4vbW9kdWxlcy9jbGVhclVuZG9TdW1tYXJ5JztcbmltcG9ydCB7ZGlzYWJsZVRpdGxlfSBmcm9tICcuL21vZHVsZXMvZGlzYWJsZVRpdGxlJztcbmltcG9ydCB7Z2V0Qm9keX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbi8vIGltcG9ydCB7aW50cm9BQ0h9IGZyb20gJy4vbW9kdWxlcy9pbnRyb0FDSCc7XG5pbXBvcnQge3ByZWxvYWRSZXZpZH0gZnJvbSAnLi9tb2R1bGVzL3ByZWxvYWRSZXZpZCc7XG5cbnZvaWQgZ2V0Qm9keSgpLnRoZW4oZnVuY3Rpb24gZWRpdEZvcm0oJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KTogdm9pZCB7XG5cdG13Lmhvb2soJ3dpa2lwYWdlLmVkaXRmb3JtJykuYWRkKCgkZWRpdEZvcm0pOiB2b2lkID0+IHtcblx0XHQvLyDliKDpmaTlm57pgIDml7boh6rliqjnlJ/miJDnmoTnvJbovpHmkZjopoFcblx0XHRjbGVhclVuZG9TdW1tYXJ5KCRlZGl0Rm9ybSk7XG5cblx0XHQvLyDlnKjmj5DkuqTmlrDmrrXokL3ml7bvvIzorqnkuLvpopjmoI/lnKjnibnlrprmg4XlhrXkuIvlpLHmlYhcblx0XHRkaXNhYmxlVGl0bGUoeyRib2R5LCAkZWRpdEZvcm19KTtcblxuXHRcdC8vIOa6kOS7o+eggee8lui+keWZqOWKoOi9veKAnOe8lui+keivt+axguKAneihpeS4gVxuXHRcdHByZWxvYWRSZXZpZCgkZWRpdEZvcm0pO1xuXHR9KTtcblxuXHQvLyDmlrDnlKjmiLflvJXlr7zoh7PmnaHnm67liJvlu7rlkJHlr7zvvIhbW1FXOkFGQ11d77yJXG5cdC8vIGludHJvQUNIKCk7XG59KTtcbiIsICJpbXBvcnQge2luaXRNd0FwaX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxuY29uc3QgYXBpOiBtdy5BcGkgPSBpbml0TXdBcGkoJ0VkaXRGb3JtX0pTLzIuMCcpO1xuXG5leHBvcnQge2FwaX07XG4iLCAiaW1wb3J0IHtsb2NhbGl6ZX0gZnJvbSAnZXh0LmdhZGdldC5pMThuJztcblxuY29uc3QgZ2V0STE4bk1lc3NhZ2VzID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdFByZXZpZXc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnUGxlYXNlIHByZXZpZXcgdGhlIGVkaXRlZCB0ZXh0Jyxcblx0XHRcdGphOiAn44OX44Os44OT44Ol44O844GX44Gm44GP44Gg44GV44GEJyxcblx0XHRcdCd6aC1oYW5zJzogJ+ivt+WFiOmihOiniCcsXG5cdFx0XHQnemgtaGFudCc6ICfoq4vlhYjpoJDopr0nLFxuXHRcdH0pLFxuXHRcdFJldmlzaW9uUHJlbG9hZGVkOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0NvbnRlbnQgb2YgcmV2aXNpb24gJDEgcHJlbG9hZGVkLicsXG5cdFx0XHQnemgtaGFucyc6ICflt7LliqDovb3niYjmnKwkMeeahOWGheWuueOAgicsXG5cdFx0XHQnemgtaGFudCc6ICflt7LovInlhaXniYjmnKwkMeeahOWFp+WuueOAgicsXG5cdFx0fSksXG5cdH07XG59O1xuXG5jb25zdCBpMThuTWVzc2FnZXMgPSBnZXRJMThuTWVzc2FnZXMoKTtcblxuY29uc3QgZ2V0TWVzc2FnZTogR2V0TWVzc2FnZXM8dHlwZW9mIGkxOG5NZXNzYWdlcz4gPSAoa2V5KSA9PiB7XG5cdHJldHVybiBpMThuTWVzc2FnZXNba2V5XSB8fCBrZXk7XG59O1xuXG5leHBvcnQge2dldE1lc3NhZ2V9O1xuIiwgImNvbnN0IHNldFdwVGV4dGJveDFDb250ZW50ID0gKHskZWRpdEZvcm0sIGNvbnRlbnR9OiB7JGVkaXRGb3JtOiBKUXVlcnk8SFRNTEVsZW1lbnQ+OyBjb250ZW50OiBzdHJpbmd9KTogdm9pZCA9PiB7XG5cdCRlZGl0Rm9ybS5maW5kPEhUTUxUZXh0QXJlYUVsZW1lbnQ+KCcjd3BUZXh0Ym94MScpLnRleHRTZWxlY3Rpb24oJ3NldENvbnRlbnRzJywgY29udGVudCk7XG59O1xuXG5leHBvcnQge3NldFdwVGV4dGJveDFDb250ZW50fTtcbiIsICIvKipcbiAqIEBkZXNjcmlwdGlvbiBQcmVsb2FkIGNvbnRlbnRzIGZyb20gUmV2aXNpb24gSUQgKG9sZGlkKVxuICovXG5pbXBvcnQge2FwaX0gZnJvbSAnLi91dGlsL2FwaSc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vaTE4bic7XG5pbXBvcnQge3NldFdwVGV4dGJveDFDb250ZW50fSBmcm9tICcuL3NldFdwVGV4dGJveDFDb250ZW50JztcblxuY29uc3QgcHJlbG9hZFJldmlkID0gKCRlZGl0Rm9ybTogSlF1ZXJ5PEhUTUxFbGVtZW50Pik6IHZvaWQgPT4ge1xuXHRjb25zdCByZXZpZCA9IG13LnV0aWwuZ2V0UGFyYW1WYWx1ZSgncHJlbG9hZHJldmlkJyk7XG5cblx0aWYgKCFyZXZpZCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGlmIChtdy5jb25maWcuZ2V0KCdnYWRnZXQtRWRpdEZvcm1fSlNfX1JldmlzaW9uUHJlbG9hZGVkJykpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRtdy5jb25maWcuc2V0KCdnYWRnZXQtRWRpdEZvcm1fSlNfX1JldmlzaW9uUHJlbG9hZGVkJywgdHJ1ZSk7XG5cblx0Y29uc3Qge3dnQWN0aW9ufSA9IG13LmNvbmZpZy5nZXQoKTtcblxuXHRpZiAoIVsnZWRpdCcsICdzdWJtaXQnXS5pbmNsdWRlcyh3Z0FjdGlvbikpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBwYXJhbXM6IEFwaVF1ZXJ5UmV2aXNpb25zUGFyYW1zID0ge1xuXHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0cHJvcDogJ3JldmlzaW9ucycsXG5cdFx0cmV2aWRzOiBOdW1iZXIucGFyc2VJbnQocmV2aWQsIDEwKSxcblx0XHRydnByb3A6ICdjb250ZW50Jyxcblx0XHRydnNsb3RzOiAnbWFpbicsXG5cdH07XG5cblx0dm9pZCBhcGkuZ2V0KHBhcmFtcykudGhlbigoe3F1ZXJ5fSkgPT4ge1xuXHRcdGNvbnN0IHtjb250ZW50fSA9IHF1ZXJ5LnBhZ2VzWzBdLnJldmlzaW9uc1swXS5zbG90cy5tYWluIGFzIHtjb250ZW50OiBzdHJpbmd9O1xuXHRcdHNldFdwVGV4dGJveDFDb250ZW50KHskZWRpdEZvcm0sIGNvbnRlbnR9KTtcblx0XHR2b2lkIG13Lm5vdGlmeShnZXRNZXNzYWdlKCdSZXZpc2lvblByZWxvYWRlZCcpLnJlcGxhY2UoJyQxJywgcmV2aWQpLCB7dHlwZTogJ3N1Y2Nlc3MnfSk7XG5cdH0pO1xufTtcblxuZXhwb3J0IHtwcmVsb2FkUmV2aWR9O1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsbUJBQW9CQyxlQUF5QztBQUNsRSxRQUFNQyxpQkFBMkNELFVBQVVFLEtBQXVCLDZCQUE2QjtBQUMvRyxNQUFJLENBQUNELGVBQWVFLFFBQVE7QUFDM0I7RUFDRDtBQUVBLE1BQUlDLEdBQUdDLEtBQUtDLGNBQWMsTUFBTSxHQUFHO0FBQ2xDTCxtQkFBZU0sSUFBSSxFQUFFO0VBQ3RCO0FBQ0Q7O0FDVEEsSUFBTUMsZUFBZUEsQ0FBQztFQUFDQztFQUFPVDtBQUFTLE1BQThFO0FBQ3BILE1BQUlTLE1BQU1QLEtBQUssZUFBZSxFQUFFQyxVQUFVTSxNQUFNUCxLQUFLLG1DQUFtQyxFQUFFSyxJQUFJLE1BQU0sT0FBTztBQUUxRyxVQUFNRyxhQUFxQlYsVUFBVUUsS0FBSyx1QkFBdUI7QUFDakVRLGVBQVdDLEtBQUssWUFBWSxJQUFJO0FBQ2hDRCxlQUFXSCxJQUFJLEVBQUU7RUFDbEI7QUFFQSxRQUFNO0lBQUNLO0VBQVEsSUFBSVIsR0FBR1MsT0FBT0MsSUFBSTtBQUVqQyxNQUFJRixhQUFhLGFBQWE7QUFDN0I7RUFDRDtBQUVBLFFBQU1HLHNCQUFnQyxDQUFDLG9CQUFvQix3QkFBd0I7QUFDbkYsUUFBTUMsMkJBQW1DO0FBQ3pDLFFBQU07SUFBQ0M7RUFBVSxJQUFJYixHQUFHUyxPQUFPQyxJQUFJO0FBQ25DLE9BQ0VDLG9CQUFvQkcsU0FBU0QsVUFBVSxLQUFLRCx5QkFBeUJHLEtBQUtGLFVBQVUsTUFDckZiLEdBQUdDLEtBQUtDLGNBQWMsU0FBUyxNQUFNLE9BQ3BDO0FBRURGLE9BQUdDLEtBQUtlLE9BQU8sK0RBQStEO0VBQy9FO0FBQ0Q7O0FDdEJBLElBQUFDLHFCQUFzQkMsUUFBQSxpQkFBQTs7QUNGdEIsSUFBQUMsb0JBQXdCRCxRQUFBLGlCQUFBO0FBRXhCLElBQU1FLE9BQUEsR0FBY0Qsa0JBQUFFLFdBQVUsaUJBQWlCOztBQ0YvQyxJQUFBQyxxQkFBdUJKLFFBQUEsaUJBQUE7QUFFdkIsSUFBTUssa0JBQWtCQSxNQUFNO0FBQzdCLFNBQU87SUFDTkMsVUFBQSxHQUFTRixtQkFBQUcsVUFBUztNQUNqQkMsSUFBSTtNQUNKQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0RDLG9CQUFBLEdBQW1CTixtQkFBQUcsVUFBUztNQUMzQkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztFQUNGO0FBQ0Q7QUFFQSxJQUFNRyxlQUFlTixnQkFBZ0I7QUFFckMsSUFBTU8sYUFBZ0RDLFNBQVE7QUFDN0QsU0FBT0YsYUFBYUUsR0FBRyxLQUFLQTtBQUM3Qjs7QUN0QkEsSUFBTUMsdUJBQXVCQSxDQUFDO0VBQUNwQztFQUFXcUM7QUFBTyxNQUErRDtBQUMvR3JDLFlBQVVFLEtBQTBCLGFBQWEsRUFBRW9DLGNBQWMsZUFBZUQsT0FBTztBQUN4Rjs7QUNLQSxJQUFNRSxlQUFnQnZDLGVBQXlDO0FBQzlELFFBQU13QyxRQUFRcEMsR0FBR0MsS0FBS0MsY0FBYyxjQUFjO0FBRWxELE1BQUksQ0FBQ2tDLE9BQU87QUFDWDtFQUNEO0FBRUEsTUFBSXBDLEdBQUdTLE9BQU9DLElBQUksdUNBQXVDLEdBQUc7QUFDM0Q7RUFDRDtBQUVBVixLQUFHUyxPQUFPNEIsSUFBSSx5Q0FBeUMsSUFBSTtBQUUzRCxRQUFNO0lBQUNDO0VBQVEsSUFBSXRDLEdBQUdTLE9BQU9DLElBQUk7QUFFakMsTUFBSSxDQUFDLENBQUMsUUFBUSxRQUFRLEVBQUVJLFNBQVN3QixRQUFRLEdBQUc7QUFDM0M7RUFDRDtBQUVBLFFBQU1DLFNBQWtDO0lBQ3ZDQyxRQUFRO0lBQ1JDLFFBQVE7SUFDUkMsZUFBZTtJQUNmbkMsTUFBTTtJQUNOb0MsUUFBUUMsT0FBT0MsU0FBU1QsT0FBTyxFQUFFO0lBQ2pDVSxRQUFRO0lBQ1JDLFNBQVM7RUFDVjtBQUVBLE9BQUszQixJQUFJVixJQUFJNkIsTUFBTSxFQUFFUyxLQUFLLENBQUM7SUFBQ0M7RUFBSyxNQUFNO0FBQ3RDLFVBQU07TUFBQ2hCO0lBQU8sSUFBSWdCLE1BQU1DLE1BQU0sQ0FBQyxFQUFFQyxVQUFVLENBQUMsRUFBRUMsTUFBTUM7QUFDcERyQix5QkFBcUI7TUFBQ3BDO01BQVdxQztJQUFPLENBQUM7QUFDekMsU0FBS2pDLEdBQUdzRCxPQUFPeEIsV0FBVyxtQkFBbUIsRUFBRXlCLFFBQVEsTUFBTW5CLEtBQUssR0FBRztNQUFDb0IsTUFBTTtJQUFTLENBQUM7RUFDdkYsQ0FBQztBQUNGOztBSm5DQSxNQUFBLEdBQUt2QyxtQkFBQXdDLFNBQVEsRUFBRVQsS0FBSyxTQUFTVSxTQUFTckQsT0FBc0M7QUFDM0VMLEtBQUcyRCxLQUFLLG1CQUFtQixFQUFFQyxJQUFLaEUsZUFBb0I7QUFFckRELHFCQUFpQkMsU0FBUztBQUcxQlEsaUJBQWE7TUFBQ0M7TUFBT1Q7SUFBUyxDQUFDO0FBRy9CdUMsaUJBQWF2QyxTQUFTO0VBQ3ZCLENBQUM7QUFJRixDQUFDOyIsCiAgIm5hbWVzIjogWyJjbGVhclVuZG9TdW1tYXJ5IiwgIiRlZGl0Rm9ybSIsICIkd3BBdXRvU3VtbWFyeSIsICJmaW5kIiwgImxlbmd0aCIsICJtdyIsICJ1dGlsIiwgImdldFBhcmFtVmFsdWUiLCAidmFsIiwgImRpc2FibGVUaXRsZSIsICIkYm9keSIsICIkd3BTdW1tYXJ5IiwgInByb3AiLCAid2dXaWtpSUQiLCAiY29uZmlnIiwgImdldCIsICJub1NlY3Rpb25UaXRsZVBhZ2VzIiwgIm5vU2VjdGlvblRpdGxlUGFnZXNSZWdleCIsICJ3Z1BhZ2VOYW1lIiwgImluY2x1ZGVzIiwgInRlc3QiLCAiYWRkQ1NTIiwgImltcG9ydF9leHRfZ2FkZ2V0MyIsICJyZXF1aXJlIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgImFwaSIsICJpbml0TXdBcGkiLCAiaW1wb3J0X2V4dF9nYWRnZXQyIiwgImdldEkxOG5NZXNzYWdlcyIsICJQcmV2aWV3IiwgImxvY2FsaXplIiwgImVuIiwgImphIiwgIlJldmlzaW9uUHJlbG9hZGVkIiwgImkxOG5NZXNzYWdlcyIsICJnZXRNZXNzYWdlIiwgImtleSIsICJzZXRXcFRleHRib3gxQ29udGVudCIsICJjb250ZW50IiwgInRleHRTZWxlY3Rpb24iLCAicHJlbG9hZFJldmlkIiwgInJldmlkIiwgInNldCIsICJ3Z0FjdGlvbiIsICJwYXJhbXMiLCAiYWN0aW9uIiwgImZvcm1hdCIsICJmb3JtYXR2ZXJzaW9uIiwgInJldmlkcyIsICJOdW1iZXIiLCAicGFyc2VJbnQiLCAicnZwcm9wIiwgInJ2c2xvdHMiLCAidGhlbiIsICJxdWVyeSIsICJwYWdlcyIsICJyZXZpc2lvbnMiLCAic2xvdHMiLCAibWFpbiIsICJub3RpZnkiLCAicmVwbGFjZSIsICJ0eXBlIiwgImdldEJvZHkiLCAiZWRpdEZvcm0iLCAiaG9vayIsICJhZGQiXQp9Cg==

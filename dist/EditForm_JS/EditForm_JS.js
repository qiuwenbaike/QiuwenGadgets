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
var import_ext_gadget4 = require("ext.gadget.Util");
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
//! src/EditForm_JS/modules/preloadRevid.ts
var import_ext_gadget3 = require("ext.gadget.Util");
var preloadRevid = ($editForm) => {
  const revid = mw.util.getParamValue("preloadrevid");
  if (!revid) {
    return;
  }
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
    (0, import_ext_gadget3.setWpTextbox1Content)({
      $editForm,
      content
    });
    void mw.notify(getMessage("RevisionPreloaded").replace("$1", revid), {
      type: "success"
    });
  });
};
//! src/EditForm_JS/EditForm_JS.ts
void (0, import_ext_gadget4.getBody)().then(function editForm($body) {
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0VkaXRGb3JtX0pTL21vZHVsZXMvY2xlYXJVbmRvU3VtbWFyeS50cyIsICJzcmMvRWRpdEZvcm1fSlMvbW9kdWxlcy9kaXNhYmxlVGl0bGUudHMiLCAic3JjL0VkaXRGb3JtX0pTL0VkaXRGb3JtX0pTLnRzIiwgInNyYy9FZGl0Rm9ybV9KUy9tb2R1bGVzL3V0aWwvYXBpLnRzIiwgInNyYy9FZGl0Rm9ybV9KUy9tb2R1bGVzL2kxOG4udHMiLCAic3JjL0VkaXRGb3JtX0pTL21vZHVsZXMvcHJlbG9hZFJldmlkLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBjbGVhclVuZG9TdW1tYXJ5ID0gKCRlZGl0Rm9ybTogSlF1ZXJ5PEhUTUxFbGVtZW50Pik6IHZvaWQgPT4ge1xuXHRjb25zdCAkd3BBdXRvU3VtbWFyeTogSlF1ZXJ5PEhUTUxJbnB1dEVsZW1lbnQ+ID0gJGVkaXRGb3JtLmZpbmQ8SFRNTElucHV0RWxlbWVudD4oJ2lucHV0W25hbWU9XCJ3cEF1dG9TdW1tYXJ5XCJdJyk7XG5cdGlmICghJHdwQXV0b1N1bW1hcnkubGVuZ3RoKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0aWYgKG13LnV0aWwuZ2V0UGFyYW1WYWx1ZSgndW5kbycpKSB7XG5cdFx0JHdwQXV0b1N1bW1hcnkudmFsKCcnKTtcblx0fVxufTtcblxuZXhwb3J0IHtjbGVhclVuZG9TdW1tYXJ5fTtcbiIsICJjb25zdCBkaXNhYmxlVGl0bGUgPSAoeyRib2R5LCAkZWRpdEZvcm19OiB7JGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+OyAkZWRpdEZvcm06IEpRdWVyeTxIVE1MRWxlbWVudD59KTogdm9pZCA9PiB7XG5cdGlmICgkYm9keS5maW5kKCcjbm8tbmV3LXRpdGxlJykubGVuZ3RoICYmICRib2R5LmZpbmQoJyNlZGl0Zm9ybSBpbnB1dFtuYW1lPVwid3BTZWN0aW9uXCJdJykudmFsKCkgPT09ICduZXcnKSB7XG5cdFx0Ly8g5Lyg57uf5paH5pys57yW6L6R5ZmoXG5cdFx0Y29uc3QgJHdwU3VtbWFyeTogSlF1ZXJ5ID0gJGVkaXRGb3JtLmZpbmQoJ2lucHV0W25hbWU9d3BTdW1tYXJ5XScpO1xuXHRcdCR3cFN1bW1hcnkucHJvcCgnZGlzYWJsZWQnLCB0cnVlKTtcblx0XHQkd3BTdW1tYXJ5LnZhbCgnJyk7XG5cdH1cblxuXHRjb25zdCBub1NlY3Rpb25UaXRsZVBhZ2VzOiBzdHJpbmdbXSA9IFsnUWl1d2VuX3RhbGs65L615p2D5o+Q5oqlJywgJ1FpdXdlbl90YWxrOuWtmOW6n+iuqOiuui/lhbPms6jluqbmj5DmiqUnXTtcblx0Y29uc3Qgbm9TZWN0aW9uVGl0bGVQYWdlc1JlZ2V4OiBSZWdFeHAgPSAvXlFpdXdlbl90YWxrOuWtmOW6n+iuqOiuui87XG5cdGNvbnN0IHt3Z1BhZ2VOYW1lfSA9IG13LmNvbmZpZy5nZXQoKTtcblx0aWYgKFxuXHRcdChub1NlY3Rpb25UaXRsZVBhZ2VzLmluY2x1ZGVzKHdnUGFnZU5hbWUpIHx8IG5vU2VjdGlvblRpdGxlUGFnZXNSZWdleC50ZXN0KHdnUGFnZU5hbWUpKSAmJlxuXHRcdG13LnV0aWwuZ2V0UGFyYW1WYWx1ZSgnc2VjdGlvbicpID09PSAnbmV3J1xuXHQpIHtcblx0XHQvLyDlj6/op4bljJbnvJbovpHlmaggLyDmlrB3aWtpdGV4dOaooeW8j1xuXHRcdG13LnV0aWwuYWRkQ1NTKCdoMi52ZS11aS1pbml0LWRlc2t0b3BBcnRpY2xlVGFyZ2V0LXNlY3Rpb25UaXRsZXtkaXNwbGF5Om5vbmV9Jyk7XG5cdH1cbn07XG5cbmV4cG9ydCB7ZGlzYWJsZVRpdGxlfTtcbiIsICJpbXBvcnQge2NsZWFyVW5kb1N1bW1hcnl9IGZyb20gJy4vbW9kdWxlcy9jbGVhclVuZG9TdW1tYXJ5JztcbmltcG9ydCB7ZGlzYWJsZVRpdGxlfSBmcm9tICcuL21vZHVsZXMvZGlzYWJsZVRpdGxlJztcbmltcG9ydCB7Z2V0Qm9keX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbi8vIGltcG9ydCB7aW50cm9BQ0h9IGZyb20gJy4vbW9kdWxlcy9pbnRyb0FDSCc7XG5pbXBvcnQge3ByZWxvYWRSZXZpZH0gZnJvbSAnLi9tb2R1bGVzL3ByZWxvYWRSZXZpZCc7XG5cbnZvaWQgZ2V0Qm9keSgpLnRoZW4oZnVuY3Rpb24gZWRpdEZvcm0oJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KTogdm9pZCB7XG5cdG13Lmhvb2soJ3dpa2lwYWdlLmVkaXRmb3JtJykuYWRkKCgkZWRpdEZvcm0pOiB2b2lkID0+IHtcblx0XHQvLyDliKDpmaTlm57pgIDml7boh6rliqjnlJ/miJDnmoTnvJbovpHmkZjopoFcblx0XHRjbGVhclVuZG9TdW1tYXJ5KCRlZGl0Rm9ybSk7XG5cdFx0Ly8g5Zyo5o+Q5Lqk5paw5q616JC95pe277yM6K6p5Li76aKY5qCP5Zyo54m55a6a5oOF5Ya15LiL5aSx5pWIXG5cdFx0ZGlzYWJsZVRpdGxlKHskYm9keSwgJGVkaXRGb3JtfSk7XG5cblx0XHQvLyDmupDku6PnoIHnvJbovpHlmajliqDovb3igJznvJbovpHor7fmsYLigJ3ooaXkuIFcblx0XHRwcmVsb2FkUmV2aWQoJGVkaXRGb3JtKTtcblx0fSk7XG5cblx0Ly8g5paw55So5oi35byV5a+86Iez5p2h55uu5Yib5bu65ZCR5a+877yIW1tRVzpBRkNdXe+8iVxuXHQvLyBpbnRyb0FDSCgpO1xufSk7XG4iLCAiaW1wb3J0IHtpbml0TXdBcGl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmNvbnN0IGFwaTogbXcuQXBpID0gaW5pdE13QXBpKCdFZGl0Rm9ybV9KUy8yLjAnKTtcblxuZXhwb3J0IHthcGl9O1xuIiwgImltcG9ydCB7bG9jYWxpemV9IGZyb20gJ2V4dC5nYWRnZXQuaTE4bic7XG5cbmNvbnN0IGdldEkxOG5NZXNzYWdlcyA9ICgpID0+IHtcblx0cmV0dXJuIHtcblx0XHRQcmV2aWV3OiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1BsZWFzZSBwcmV2aWV3IHRoZSBlZGl0ZWQgdGV4dCcsXG5cdFx0XHRqYTogJ+ODl+ODrOODk+ODpeODvOOBl+OBpuOBj+OBoOOBleOBhCcsXG5cdFx0XHQnemgtaGFucyc6ICfor7flhYjpooTop4gnLFxuXHRcdFx0J3poLWhhbnQnOiAn6KuL5YWI6aCQ6Ka9Jyxcblx0XHR9KSxcblx0XHRSZXZpc2lvblByZWxvYWRlZDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdDb250ZW50IG9mIHJldmlzaW9uICQxIHByZWxvYWRlZC4nLFxuXHRcdFx0J3poLWhhbnMnOiAn5bey5Yqg6L2954mI5pysJDHnmoTlhoXlrrnjgIInLFxuXHRcdFx0J3poLWhhbnQnOiAn5bey6LyJ5YWl54mI5pysJDHnmoTlhaflrrnjgIInLFxuXHRcdH0pLFxuXHR9O1xufTtcblxuY29uc3QgaTE4bk1lc3NhZ2VzID0gZ2V0STE4bk1lc3NhZ2VzKCk7XG5cbmNvbnN0IGdldE1lc3NhZ2U6IEdldE1lc3NhZ2VzPHR5cGVvZiBpMThuTWVzc2FnZXM+ID0gKGtleSkgPT4ge1xuXHRyZXR1cm4gaTE4bk1lc3NhZ2VzW2tleV0gfHwga2V5O1xufTtcblxuZXhwb3J0IHtnZXRNZXNzYWdlfTtcbiIsICIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW5zYWZlLWFzc2lnbm1lbnQgKi9cblxuLyoqXG4gKiBAZGVzY3JpcHRpb24gUHJlbG9hZCBjb250ZW50cyBmcm9tIFJldmlzaW9uIElEIChvbGRpZClcbiAqL1xuaW1wb3J0IHthcGl9IGZyb20gJy4vdXRpbC9hcGknO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL2kxOG4nO1xuaW1wb3J0IHtzZXRXcFRleHRib3gxQ29udGVudH0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxuY29uc3QgcHJlbG9hZFJldmlkID0gKCRlZGl0Rm9ybTogSlF1ZXJ5PEhUTUxFbGVtZW50Pik6IHZvaWQgPT4ge1xuXHRjb25zdCByZXZpZCA9IG13LnV0aWwuZ2V0UGFyYW1WYWx1ZSgncHJlbG9hZHJldmlkJyk7XG5cblx0aWYgKCFyZXZpZCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IHt3Z0FjdGlvbn0gPSBtdy5jb25maWcuZ2V0KCk7XG5cblx0aWYgKCFbJ2VkaXQnLCAnc3VibWl0J10uaW5jbHVkZXMod2dBY3Rpb24pKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgcGFyYW1zOiBBcGlRdWVyeVJldmlzaW9uc1BhcmFtcyA9IHtcblx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdHByb3A6ICdyZXZpc2lvbnMnLFxuXHRcdHJldmlkczogTnVtYmVyLnBhcnNlSW50KHJldmlkLCAxMCksXG5cdFx0cnZwcm9wOiAnY29udGVudCcsXG5cdFx0cnZzbG90czogJ21haW4nLFxuXHR9O1xuXG5cdHZvaWQgYXBpLmdldChwYXJhbXMpLnRoZW4oKHtxdWVyeX0pID0+IHtcblx0XHRjb25zdCB7Y29udGVudH0gPSBxdWVyeS5wYWdlc1swXS5yZXZpc2lvbnNbMF0uc2xvdHMubWFpbjtcblx0XHRzZXRXcFRleHRib3gxQ29udGVudCh7JGVkaXRGb3JtLCBjb250ZW50fSk7XG5cdFx0dm9pZCBtdy5ub3RpZnkoZ2V0TWVzc2FnZSgnUmV2aXNpb25QcmVsb2FkZWQnKS5yZXBsYWNlKCckMScsIHJldmlkKSwge3R5cGU6ICdzdWNjZXNzJ30pO1xuXHR9KTtcbn07XG5cbmV4cG9ydCB7cHJlbG9hZFJldmlkfTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLG1CQUFvQkMsZUFBeUM7QUFDbEUsUUFBTUMsaUJBQTJDRCxVQUFVRSxLQUF1Qiw2QkFBNkI7QUFDL0csTUFBSSxDQUFDRCxlQUFlRSxRQUFRO0FBQzNCO0VBQ0Q7QUFFQSxNQUFJQyxHQUFHQyxLQUFLQyxjQUFjLE1BQU0sR0FBRztBQUNsQ0wsbUJBQWVNLElBQUksRUFBRTtFQUN0QjtBQUNEOztBQ1RBLElBQU1DLGVBQWVBLENBQUM7RUFBQ0M7RUFBT1Q7QUFBUyxNQUE4RTtBQUNwSCxNQUFJUyxNQUFNUCxLQUFLLGVBQWUsRUFBRUMsVUFBVU0sTUFBTVAsS0FBSyxtQ0FBbUMsRUFBRUssSUFBSSxNQUFNLE9BQU87QUFFMUcsVUFBTUcsYUFBcUJWLFVBQVVFLEtBQUssdUJBQXVCO0FBQ2pFUSxlQUFXQyxLQUFLLFlBQVksSUFBSTtBQUNoQ0QsZUFBV0gsSUFBSSxFQUFFO0VBQ2xCO0FBRUEsUUFBTUssc0JBQWdDLENBQUMsb0JBQW9CLHdCQUF3QjtBQUNuRixRQUFNQywyQkFBbUM7QUFDekMsUUFBTTtJQUFDQztFQUFVLElBQUlWLEdBQUdXLE9BQU9DLElBQUk7QUFDbkMsT0FDRUosb0JBQW9CSyxTQUFTSCxVQUFVLEtBQUtELHlCQUF5QkssS0FBS0osVUFBVSxNQUNyRlYsR0FBR0MsS0FBS0MsY0FBYyxTQUFTLE1BQU0sT0FDcEM7QUFFREYsT0FBR0MsS0FBS2MsT0FBTywrREFBK0Q7RUFDL0U7QUFDRDs7QUNoQkEsSUFBQUMscUJBQXNCQyxRQUFBLGlCQUFBOztBQ0Z0QixJQUFBQyxvQkFBd0JELFFBQUEsaUJBQUE7QUFFeEIsSUFBTUUsT0FBQSxHQUFjRCxrQkFBQUUsV0FBVSxpQkFBaUI7O0FDRi9DLElBQUFDLHFCQUF1QkosUUFBQSxpQkFBQTtBQUV2QixJQUFNSyxrQkFBa0JBLE1BQU07QUFDN0IsU0FBTztJQUNOQyxVQUFBLEdBQVNGLG1CQUFBRyxVQUFTO01BQ2pCQyxJQUFJO01BQ0pDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDREMsb0JBQUEsR0FBbUJOLG1CQUFBRyxVQUFTO01BQzNCQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0VBQ0Y7QUFDRDtBQUVBLElBQU1HLGVBQWVOLGdCQUFnQjtBQUVyQyxJQUFNTyxhQUFnREMsU0FBUTtBQUM3RCxTQUFPRixhQUFhRSxHQUFHLEtBQUtBO0FBQzdCOztBQ2ZBLElBQUFDLHFCQUFtQ2QsUUFBQSxpQkFBQTtBQUVuQyxJQUFNZSxlQUFnQnBDLGVBQXlDO0FBQzlELFFBQU1xQyxRQUFRakMsR0FBR0MsS0FBS0MsY0FBYyxjQUFjO0FBRWxELE1BQUksQ0FBQytCLE9BQU87QUFDWDtFQUNEO0FBRUEsUUFBTTtJQUFDQztFQUFRLElBQUlsQyxHQUFHVyxPQUFPQyxJQUFJO0FBRWpDLE1BQUksQ0FBQyxDQUFDLFFBQVEsUUFBUSxFQUFFQyxTQUFTcUIsUUFBUSxHQUFHO0FBQzNDO0VBQ0Q7QUFFQSxRQUFNQyxTQUFrQztJQUN2Q0MsUUFBUTtJQUNSQyxRQUFRO0lBQ1JDLGVBQWU7SUFDZi9CLE1BQU07SUFDTmdDLFFBQVFDLE9BQU9DLFNBQVNSLE9BQU8sRUFBRTtJQUNqQ1MsUUFBUTtJQUNSQyxTQUFTO0VBQ1Y7QUFFQSxPQUFLeEIsSUFBSVAsSUFBSXVCLE1BQU0sRUFBRVMsS0FBSyxDQUFDO0lBQUNDO0VBQUssTUFBTTtBQUN0QyxVQUFNO01BQUNDO0lBQU8sSUFBSUQsTUFBTUUsTUFBTSxDQUFDLEVBQUVDLFVBQVUsQ0FBQyxFQUFFQyxNQUFNQztBQUNwRCxLQUFBLEdBQUFuQixtQkFBQW9CLHNCQUFxQjtNQUFDdkQ7TUFBV2tEO0lBQU8sQ0FBQztBQUN6QyxTQUFLOUMsR0FBR29ELE9BQU92QixXQUFXLG1CQUFtQixFQUFFd0IsUUFBUSxNQUFNcEIsS0FBSyxHQUFHO01BQUNxQixNQUFNO0lBQVMsQ0FBQztFQUN2RixDQUFDO0FBQ0Y7O0FIL0JBLE1BQUEsR0FBS3RDLG1CQUFBdUMsU0FBUSxFQUFFWCxLQUFLLFNBQVNZLFNBQVNuRCxPQUFzQztBQUMzRUwsS0FBR3lELEtBQUssbUJBQW1CLEVBQUVDLElBQUs5RCxlQUFvQjtBQUVyREQscUJBQWlCQyxTQUFTO0FBRTFCUSxpQkFBYTtNQUFDQztNQUFPVDtJQUFTLENBQUM7QUFHL0JvQyxpQkFBYXBDLFNBQVM7RUFDdkIsQ0FBQztBQUlGLENBQUM7IiwKICAibmFtZXMiOiBbImNsZWFyVW5kb1N1bW1hcnkiLCAiJGVkaXRGb3JtIiwgIiR3cEF1dG9TdW1tYXJ5IiwgImZpbmQiLCAibGVuZ3RoIiwgIm13IiwgInV0aWwiLCAiZ2V0UGFyYW1WYWx1ZSIsICJ2YWwiLCAiZGlzYWJsZVRpdGxlIiwgIiRib2R5IiwgIiR3cFN1bW1hcnkiLCAicHJvcCIsICJub1NlY3Rpb25UaXRsZVBhZ2VzIiwgIm5vU2VjdGlvblRpdGxlUGFnZXNSZWdleCIsICJ3Z1BhZ2VOYW1lIiwgImNvbmZpZyIsICJnZXQiLCAiaW5jbHVkZXMiLCAidGVzdCIsICJhZGRDU1MiLCAiaW1wb3J0X2V4dF9nYWRnZXQ0IiwgInJlcXVpcmUiLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAiYXBpIiwgImluaXRNd0FwaSIsICJpbXBvcnRfZXh0X2dhZGdldDIiLCAiZ2V0STE4bk1lc3NhZ2VzIiwgIlByZXZpZXciLCAibG9jYWxpemUiLCAiZW4iLCAiamEiLCAiUmV2aXNpb25QcmVsb2FkZWQiLCAiaTE4bk1lc3NhZ2VzIiwgImdldE1lc3NhZ2UiLCAia2V5IiwgImltcG9ydF9leHRfZ2FkZ2V0MyIsICJwcmVsb2FkUmV2aWQiLCAicmV2aWQiLCAid2dBY3Rpb24iLCAicGFyYW1zIiwgImFjdGlvbiIsICJmb3JtYXQiLCAiZm9ybWF0dmVyc2lvbiIsICJyZXZpZHMiLCAiTnVtYmVyIiwgInBhcnNlSW50IiwgInJ2cHJvcCIsICJydnNsb3RzIiwgInRoZW4iLCAicXVlcnkiLCAiY29udGVudCIsICJwYWdlcyIsICJyZXZpc2lvbnMiLCAic2xvdHMiLCAibWFpbiIsICJzZXRXcFRleHRib3gxQ29udGVudCIsICJub3RpZnkiLCAicmVwbGFjZSIsICJ0eXBlIiwgImdldEJvZHkiLCAiZWRpdEZvcm0iLCAiaG9vayIsICJhZGQiXQp9Cg==

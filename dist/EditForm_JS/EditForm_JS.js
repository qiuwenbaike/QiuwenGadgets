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
//! src/EditForm_JS/modules/i18n.ts
var _mw$config$get;
var import_ext_gadget = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    AiAssisted: (0, import_ext_gadget.localize)({
      en: "This edited content was assisted by artificial intelligence",
      ja: "この編集内容は人工知能による支援を受けています",
      "zh-hans": "此编辑由人工智能（AI）辅助",
      "zh-hant": "此編輯由人工智能（AI）輔助"
    }),
    Preview: (0, import_ext_gadget.localize)({
      en: "Please preview the edited text",
      ja: "プレビューしてください",
      "zh-hans": "请先预览",
      "zh-hant": "請先預覽"
    })
  };
};
var i18nMessages = getI18nMessages();
var getMessage = (key) => {
  return i18nMessages[key] || key;
};
//! src/EditForm_JS/modules/aiAssisted.ts
var isInit = false;
var aiAssisted = ({
  $body,
  $editForm
}) => {
  if (isInit) {
    return;
  }
  const isVeInit = !!ve.init;
  const $target = isVeInit ? $body.find(".ve-ui-mwSaveDialog-checkboxes") : $editForm.find(".editCheckboxes .oo-ui-horizontalLayout");
  if (!$target.length) {
    return;
  }
  isInit = true;
  const checkbox = new OO.ui.CheckboxInputWidget({
    selected: false
  });
  checkbox.on("change", () => {
    const changeTag = "AI_assisted";
    const generateChangeTags = (originChangeTags) => {
      return checkbox.isSelected() ? "".concat(originChangeTags, ",").concat(changeTag) : originChangeTags.replace(",".concat(changeTag), "");
    };
    let changeTags = "";
    if (isVeInit) {
      var _ve$init$target$saveF, _ve$init$target$saveF2, _ve$init$target$saveF3;
      changeTags = generateChangeTags((_ve$init$target$saveF = (_ve$init$target$saveF2 = (_ve$init$target$saveF3 = ve.init.target.saveFields).wpChangeTags) === null || _ve$init$target$saveF2 === void 0 ? void 0 : _ve$init$target$saveF2.call(_ve$init$target$saveF3)) !== null && _ve$init$target$saveF !== void 0 ? _ve$init$target$saveF : "");
      ve.init.target.saveFields.wpChangeTags = () => {
        return changeTags;
      };
    } else {
      var _$originWpChangeTags$, _$originWpChangeTags$2;
      const $wpChangeTags = $("<input>").attr({
        id: "wpChangeTags",
        name: "wpChangeTags",
        type: "hidden",
        value: ""
      });
      $body = $editForm.parents("body");
      const $originWpChangeTags = $body.find("#wpChangeTags");
      if (!$originWpChangeTags.length) {
        $body.prepend($wpChangeTags);
      }
      changeTags = generateChangeTags((_$originWpChangeTags$ = (_$originWpChangeTags$2 = $originWpChangeTags.val()) === null || _$originWpChangeTags$2 === void 0 ? void 0 : _$originWpChangeTags$2.toString()) !== null && _$originWpChangeTags$ !== void 0 ? _$originWpChangeTags$ : "");
      $originWpChangeTags.val(changeTags);
    }
  });
  const checkboxLayout = new OO.ui.FieldLayout(checkbox, {
    align: "inline",
    label: getMessage("AiAssisted")
  });
  $target.append(checkboxLayout.$element);
};
//! src/EditForm_JS/modules/clearUndoSummary.ts
var clearUndoSummary = ($body) => {
  const $wpAutoSummary = $body.find('input[name="wpAutoSummary"]');
  if (!$wpAutoSummary.length) {
    return;
  }
  if (mw.util.getParamValue("undo")) {
    $wpAutoSummary.val("");
  }
};
//! src/EditForm_JS/modules/constant.ts
var WG_ACTION = mw.config.get("wgAction");
var WG_PAGE_NAME = mw.config.get("wgPageName");
var WG_USER_GROUPS = (_mw$config$get = mw.config.get("wgUserGroups")) !== null && _mw$config$get !== void 0 ? _mw$config$get : [];
var IS_WG_EDIT_OR_SUBMIT_ACTION = ["edit", "submit"].includes(WG_ACTION);
//! src/EditForm_JS/modules/disableTitle.ts
var disableTitle = ($body) => {
  if ($body.find("#no-new-title").length && $body.find('#editform input[name="wpSection"]').val() === "new") {
    const $wpSummary = $body.find("#wpSummary");
    $wpSummary.prop("disabled", true);
    $wpSummary.val("");
  }
  const noSectionTitlePages = ["Qiuwen_talk:侵权提报", "Qiuwen_talk:存废讨论/关注度提报"];
  const noSectionTitlePagesRegex = /^Qiuwen_talk:存废讨论/;
  if ((noSectionTitlePages.includes(WG_PAGE_NAME) || noSectionTitlePagesRegex.test(WG_PAGE_NAME)) && mw.util.getParamValue("section") === "new") {
    mw.util.addCSS("h2.ve-ui-init-desktopArticleTarget-sectionTitle{display:none}");
  }
};
//! src/EditForm_JS/EditForm_JS.ts
var import_ext_gadget2 = require("ext.gadget.Util");
void (0, import_ext_gadget2.getBody)().then(function editForm($body) {
  clearUndoSummary($body);
  disableTitle($body);
  mw.hook("ve.saveDialog.stateChanged").add(() => {
    aiAssisted({
      $body
    });
  });
  mw.hook("wikipage.editform").add(($editForm) => {
    aiAssisted({
      $editForm
    });
  });
});
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0VkaXRGb3JtX0pTL21vZHVsZXMvaTE4bi50cyIsICJzcmMvRWRpdEZvcm1fSlMvbW9kdWxlcy9haUFzc2lzdGVkLnRzIiwgInNyYy9FZGl0Rm9ybV9KUy9tb2R1bGVzL2NsZWFyVW5kb1N1bW1hcnkudHMiLCAic3JjL0VkaXRGb3JtX0pTL21vZHVsZXMvY29uc3RhbnQudHMiLCAic3JjL0VkaXRGb3JtX0pTL21vZHVsZXMvZGlzYWJsZVRpdGxlLnRzIiwgInNyYy9FZGl0Rm9ybV9KUy9FZGl0Rm9ybV9KUy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHtsb2NhbGl6ZX0gZnJvbSAnZXh0LmdhZGdldC5pMThuJztcblxuY29uc3QgZ2V0STE4bk1lc3NhZ2VzID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdEFpQXNzaXN0ZWQ6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnVGhpcyBlZGl0ZWQgY29udGVudCB3YXMgYXNzaXN0ZWQgYnkgYXJ0aWZpY2lhbCBpbnRlbGxpZ2VuY2UnLFxuXHRcdFx0amE6ICfjgZPjga7nt6jpm4blhoXlrrnjga/kurrlt6Xnn6Xog73jgavjgojjgovmlK/mj7TjgpLlj5fjgZHjgabjgYTjgb7jgZknLFxuXHRcdFx0J3poLWhhbnMnOiAn5q2k57yW6L6R55Sx5Lq65bel5pm66IO977yIQUnvvInovoXliqknLFxuXHRcdFx0J3poLWhhbnQnOiAn5q2k57eo6Lyv55Sx5Lq65bel5pm66IO977yIQUnvvInovJTliqknLFxuXHRcdH0pLFxuXHRcdFByZXZpZXc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnUGxlYXNlIHByZXZpZXcgdGhlIGVkaXRlZCB0ZXh0Jyxcblx0XHRcdGphOiAn44OX44Os44OT44Ol44O844GX44Gm44GP44Gg44GV44GEJyxcblx0XHRcdCd6aC1oYW5zJzogJ+ivt+WFiOmihOiniCcsXG5cdFx0XHQnemgtaGFudCc6ICfoq4vlhYjpoJDopr0nLFxuXHRcdH0pLFxuXHR9O1xufTtcblxuY29uc3QgaTE4bk1lc3NhZ2VzID0gZ2V0STE4bk1lc3NhZ2VzKCk7XG5cbmNvbnN0IGdldE1lc3NhZ2U6IEdldE1lc3NhZ2VzPHR5cGVvZiBpMThuTWVzc2FnZXM+ID0gKGtleSkgPT4ge1xuXHRyZXR1cm4gaTE4bk1lc3NhZ2VzW2tleV0gfHwga2V5O1xufTtcblxuZXhwb3J0IHtnZXRNZXNzYWdlfTtcbiIsICIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW5zYWZlLWFyZ3VtZW50LCBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW5zYWZlLWNhbGwsIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnNhZmUtbWVtYmVyLWFjY2VzcyAqL1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL2kxOG4nO1xuXG5sZXQgaXNJbml0OiBib29sZWFuID0gZmFsc2U7XG5cbmNvbnN0IGFpQXNzaXN0ZWQgPSAoeyRib2R5LCAkZWRpdEZvcm19OiB7JGJvZHk/OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50PjsgJGVkaXRGb3JtPzogSlF1ZXJ5fSk6IHZvaWQgPT4ge1xuXHRpZiAoaXNJbml0KSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Ly8gQHRzLWV4cGVjdC1lcnJvciBUUzIzMDRcblx0Y29uc3QgaXNWZUluaXQ6IGJvb2xlYW4gPSAhIXZlLmluaXQ7XG5cblx0Y29uc3QgJHRhcmdldDogSlF1ZXJ5ID0gaXNWZUluaXRcblx0XHQ/ICgkYm9keSBhcyBKUXVlcnk8SFRNTEJvZHlFbGVtZW50PikuZmluZCgnLnZlLXVpLW13U2F2ZURpYWxvZy1jaGVja2JveGVzJylcblx0XHQ6ICgkZWRpdEZvcm0gYXMgSlF1ZXJ5KS5maW5kKCcuZWRpdENoZWNrYm94ZXMgLm9vLXVpLWhvcml6b250YWxMYXlvdXQnKTtcblx0aWYgKCEkdGFyZ2V0Lmxlbmd0aCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGlzSW5pdCA9IHRydWU7XG5cblx0Y29uc3QgY2hlY2tib3g6IE9PLnVpLkNoZWNrYm94SW5wdXRXaWRnZXQgPSBuZXcgT08udWkuQ2hlY2tib3hJbnB1dFdpZGdldCh7XG5cdFx0c2VsZWN0ZWQ6IGZhbHNlLFxuXHR9KTtcblx0Y2hlY2tib3gub24oJ2NoYW5nZScsICgpOiB2b2lkID0+IHtcblx0XHRjb25zdCBjaGFuZ2VUYWc6IHN0cmluZyA9ICdBSV9hc3Npc3RlZCc7XG5cdFx0Y29uc3QgZ2VuZXJhdGVDaGFuZ2VUYWdzID0gKG9yaWdpbkNoYW5nZVRhZ3M6IHN0cmluZyk6IHN0cmluZyA9PiB7XG5cdFx0XHRyZXR1cm4gY2hlY2tib3guaXNTZWxlY3RlZCgpXG5cdFx0XHRcdD8gYCR7b3JpZ2luQ2hhbmdlVGFnc30sJHtjaGFuZ2VUYWd9YFxuXHRcdFx0XHQ6IG9yaWdpbkNoYW5nZVRhZ3MucmVwbGFjZShgLCR7Y2hhbmdlVGFnfWAsICcnKTtcblx0XHR9O1xuXG5cdFx0bGV0IGNoYW5nZVRhZ3M6IHN0cmluZyA9ICcnO1xuXHRcdGlmIChpc1ZlSW5pdCkge1xuXHRcdFx0Ly8gQHRzLWV4cGVjdC1lcnJvciBUUzIzMDRcblx0XHRcdGNoYW5nZVRhZ3MgPSBnZW5lcmF0ZUNoYW5nZVRhZ3ModmUuaW5pdC50YXJnZXQuc2F2ZUZpZWxkcy53cENoYW5nZVRhZ3M/LigpID8/ICcnKTtcblx0XHRcdC8vIEB0cy1leHBlY3QtZXJyb3IgVFMyMzA0XG5cdFx0XHR2ZS5pbml0LnRhcmdldC5zYXZlRmllbGRzLndwQ2hhbmdlVGFncyA9ICgpOiBzdHJpbmcgPT4ge1xuXHRcdFx0XHRyZXR1cm4gY2hhbmdlVGFncztcblx0XHRcdH07XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbnN0ICR3cENoYW5nZVRhZ3M6IEpRdWVyeSA9ICQoJzxpbnB1dD4nKS5hdHRyKHtcblx0XHRcdFx0aWQ6ICd3cENoYW5nZVRhZ3MnLFxuXHRcdFx0XHRuYW1lOiAnd3BDaGFuZ2VUYWdzJyxcblx0XHRcdFx0dHlwZTogJ2hpZGRlbicsXG5cdFx0XHRcdHZhbHVlOiAnJyxcblx0XHRcdH0pO1xuXHRcdFx0JGJvZHkgPSAoJGVkaXRGb3JtIGFzIEpRdWVyeSkucGFyZW50cygnYm9keScpO1xuXHRcdFx0Y29uc3QgJG9yaWdpbldwQ2hhbmdlVGFnczogSlF1ZXJ5ID0gJGJvZHkuZmluZCgnI3dwQ2hhbmdlVGFncycpO1xuXHRcdFx0aWYgKCEkb3JpZ2luV3BDaGFuZ2VUYWdzLmxlbmd0aCkge1xuXHRcdFx0XHQkYm9keS5wcmVwZW5kKCR3cENoYW5nZVRhZ3MpO1xuXHRcdFx0fVxuXHRcdFx0Y2hhbmdlVGFncyA9IGdlbmVyYXRlQ2hhbmdlVGFncygkb3JpZ2luV3BDaGFuZ2VUYWdzLnZhbCgpPy50b1N0cmluZygpID8/ICcnKTtcblx0XHRcdCRvcmlnaW5XcENoYW5nZVRhZ3MudmFsKGNoYW5nZVRhZ3MpO1xuXHRcdH1cblx0fSk7XG5cblx0Y29uc3QgY2hlY2tib3hMYXlvdXQ6IE9PLnVpLkZpZWxkTGF5b3V0PE9PLnVpLkNoZWNrYm94SW5wdXRXaWRnZXQ+ID0gbmV3IE9PLnVpLkZpZWxkTGF5b3V0KGNoZWNrYm94LCB7XG5cdFx0YWxpZ246ICdpbmxpbmUnLFxuXHRcdGxhYmVsOiBnZXRNZXNzYWdlKCdBaUFzc2lzdGVkJyksXG5cdH0pO1xuXHQkdGFyZ2V0LmFwcGVuZChjaGVja2JveExheW91dC4kZWxlbWVudCk7XG59O1xuXG5leHBvcnQge2FpQXNzaXN0ZWR9O1xuIiwgImNvbnN0IGNsZWFyVW5kb1N1bW1hcnkgPSAoJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KTogdm9pZCA9PiB7XG5cdGNvbnN0ICR3cEF1dG9TdW1tYXJ5OiBKUXVlcnk8SFRNTElucHV0RWxlbWVudD4gPSAkYm9keS5maW5kPEhUTUxJbnB1dEVsZW1lbnQ+KCdpbnB1dFtuYW1lPVwid3BBdXRvU3VtbWFyeVwiXScpO1xuXHRpZiAoISR3cEF1dG9TdW1tYXJ5Lmxlbmd0aCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGlmIChtdy51dGlsLmdldFBhcmFtVmFsdWUoJ3VuZG8nKSkge1xuXHRcdCR3cEF1dG9TdW1tYXJ5LnZhbCgnJyk7XG5cdH1cbn07XG5cbmV4cG9ydCB7Y2xlYXJVbmRvU3VtbWFyeX07XG4iLCAiY29uc3QgV0dfQUNUSU9OOiBNZWRpYVdpa2lDb25maWdNYXBXZ0FjdGlvbiA9IG13LmNvbmZpZy5nZXQoJ3dnQWN0aW9uJyk7XG5jb25zdCBXR19QQUdFX05BTUU6IHN0cmluZyA9IG13LmNvbmZpZy5nZXQoJ3dnUGFnZU5hbWUnKTtcbmNvbnN0IFdHX1VTRVJfR1JPVVBTOiBzdHJpbmdbXSA9IG13LmNvbmZpZy5nZXQoJ3dnVXNlckdyb3VwcycpID8/IFtdO1xuXG5jb25zdCBJU19XR19FRElUX09SX1NVQk1JVF9BQ1RJT046IGJvb2xlYW4gPSBbJ2VkaXQnLCAnc3VibWl0J10uaW5jbHVkZXMoV0dfQUNUSU9OKTtcblxuZXhwb3J0IHtXR19QQUdFX05BTUUsIFdHX1VTRVJfR1JPVVBTLCBJU19XR19FRElUX09SX1NVQk1JVF9BQ1RJT059O1xuIiwgImltcG9ydCB7V0dfUEFHRV9OQU1FfSBmcm9tICcuL2NvbnN0YW50JztcblxuY29uc3QgZGlzYWJsZVRpdGxlID0gKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQgPT4ge1xuXHRpZiAoJGJvZHkuZmluZCgnI25vLW5ldy10aXRsZScpLmxlbmd0aCAmJiAkYm9keS5maW5kKCcjZWRpdGZvcm0gaW5wdXRbbmFtZT1cIndwU2VjdGlvblwiXScpLnZhbCgpID09PSAnbmV3Jykge1xuXHRcdC8vIOS8oOe7n+aWh+acrOe8lui+keWZqFxuXHRcdGNvbnN0ICR3cFN1bW1hcnk6IEpRdWVyeSA9ICRib2R5LmZpbmQoJyN3cFN1bW1hcnknKTtcblx0XHQkd3BTdW1tYXJ5LnByb3AoJ2Rpc2FibGVkJywgdHJ1ZSk7XG5cdFx0JHdwU3VtbWFyeS52YWwoJycpO1xuXHR9XG5cblx0Y29uc3Qgbm9TZWN0aW9uVGl0bGVQYWdlczogc3RyaW5nW10gPSBbJ1FpdXdlbl90YWxrOuS+teadg+aPkOaKpScsICdRaXV3ZW5fdGFsazrlrZjlup/orqjorrov5YWz5rOo5bqm5o+Q5oqlJ107XG5cdGNvbnN0IG5vU2VjdGlvblRpdGxlUGFnZXNSZWdleDogUmVnRXhwID0gL15RaXV3ZW5fdGFsazrlrZjlup/orqjorrovO1xuXHRpZiAoXG5cdFx0KG5vU2VjdGlvblRpdGxlUGFnZXMuaW5jbHVkZXMoV0dfUEFHRV9OQU1FKSB8fCBub1NlY3Rpb25UaXRsZVBhZ2VzUmVnZXgudGVzdChXR19QQUdFX05BTUUpKSAmJlxuXHRcdG13LnV0aWwuZ2V0UGFyYW1WYWx1ZSgnc2VjdGlvbicpID09PSAnbmV3J1xuXHQpIHtcblx0XHQvLyDlj6/op4bljJbnvJbovpHlmaggLyDmlrB3aWtpdGV4dOaooeW8j1xuXHRcdG13LnV0aWwuYWRkQ1NTKCdoMi52ZS11aS1pbml0LWRlc2t0b3BBcnRpY2xlVGFyZ2V0LXNlY3Rpb25UaXRsZXtkaXNwbGF5Om5vbmV9Jyk7XG5cdH1cbn07XG5cbmV4cG9ydCB7ZGlzYWJsZVRpdGxlfTtcbiIsICJpbXBvcnQge2FpQXNzaXN0ZWR9IGZyb20gJy4vbW9kdWxlcy9haUFzc2lzdGVkJztcbmltcG9ydCB7Y2xlYXJVbmRvU3VtbWFyeX0gZnJvbSAnLi9tb2R1bGVzL2NsZWFyVW5kb1N1bW1hcnknO1xuaW1wb3J0IHtkaXNhYmxlVGl0bGV9IGZyb20gJy4vbW9kdWxlcy9kaXNhYmxlVGl0bGUnO1xuaW1wb3J0IHtnZXRCb2R5fSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG52b2lkIGdldEJvZHkoKS50aGVuKGZ1bmN0aW9uIGVkaXRGb3JtKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQge1xuXHQvLyDliKDpmaTlm57pgIDml7boh6rliqjnlJ/miJDnmoTnvJbovpHmkZjopoFcblx0Y2xlYXJVbmRvU3VtbWFyeSgkYm9keSk7XG5cdC8vIOWcqOaPkOS6pOaWsOauteiQveaXtu+8jOiuqeS4u+mimOagj+WcqOeJueWumuaDheWGteS4i+WkseaViFxuXHRkaXNhYmxlVGl0bGUoJGJvZHkpO1xuXG5cdG13Lmhvb2soJ3ZlLnNhdmVEaWFsb2cuc3RhdGVDaGFuZ2VkJykuYWRkKCgpOiB2b2lkID0+IHtcblx0XHQvLyBBSei+heWKqee8lui+keeJueauiuWjsOaYjlxuXHRcdGFpQXNzaXN0ZWQoe1xuXHRcdFx0JGJvZHksXG5cdFx0fSk7XG5cdH0pO1xuXG5cdG13Lmhvb2soJ3dpa2lwYWdlLmVkaXRmb3JtJykuYWRkKCgkZWRpdEZvcm0pOiB2b2lkID0+IHtcblx0XHQvLyBBSei+heWKqee8lui+keeJueauiuWjsOaYjlxuXHRcdGFpQXNzaXN0ZWQoe1xuXHRcdFx0JGVkaXRGb3JtLFxuXHRcdH0pO1xuXHR9KTtcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7QUFBQSxJQUFBQSxvQkFBdUJDLFFBQUEsaUJBQUE7QUFFdkIsSUFBTUMsa0JBQWtCQSxNQUFNO0FBQzdCLFNBQU87SUFDTkMsYUFBQSxHQUFZSCxrQkFBQUksVUFBUztNQUNwQkMsSUFBSTtNQUNKQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0RDLFVBQUEsR0FBU1Asa0JBQUFJLFVBQVM7TUFDakJDLElBQUk7TUFDSkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztFQUNGO0FBQ0Q7QUFFQSxJQUFNRSxlQUFlTixnQkFBZ0I7QUFFckMsSUFBTU8sYUFBZ0RDLFNBQVE7QUFDN0QsU0FBT0YsYUFBYUUsR0FBRyxLQUFLQTtBQUM3Qjs7QUNwQkEsSUFBSUMsU0FBa0I7QUFFdEIsSUFBTUMsYUFBYUEsQ0FBQztFQUFDQztFQUFPQztBQUFTLE1BQW1FO0FBQ3ZHLE1BQUlILFFBQVE7QUFDWDtFQUNEO0FBR0EsUUFBTUksV0FBb0IsQ0FBQyxDQUFDQyxHQUFHQztBQUUvQixRQUFNQyxVQUFrQkgsV0FDcEJGLE1BQWtDTSxLQUFLLGdDQUFnQyxJQUN2RUwsVUFBcUJLLEtBQUsseUNBQXlDO0FBQ3ZFLE1BQUksQ0FBQ0QsUUFBUUUsUUFBUTtBQUNwQjtFQUNEO0FBRUFULFdBQVM7QUFFVCxRQUFNVSxXQUFzQyxJQUFJQyxHQUFHQyxHQUFH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QUFNLE9BQ3BDO0FBRURGLE9BQUdDLEtBQUtnQixPQUFPLCtEQUErRDtFQUMvRTtBQUNEOztBQ2hCQSxJQUFBQyxxQkFBc0JoRixRQUFBLGlCQUFBO0FBRXRCLE1BQUEsR0FBS2dGLG1CQUFBQyxTQUFRLEVBQUVDLEtBQUssU0FBU0MsU0FBU3ZFLE9BQXNDO0FBRTNFZ0QsbUJBQWlCaEQsS0FBSztBQUV0QjZELGVBQWE3RCxLQUFLO0FBRWxCa0QsS0FBR3NCLEtBQUssNEJBQTRCLEVBQUVDLElBQUksTUFBWTtBQUVyRDFFLGVBQVc7TUFDVkM7SUFDRCxDQUFDO0VBQ0YsQ0FBQztBQUVEa0QsS0FBR3NCLEtBQUssbUJBQW1CLEVBQUVDLElBQUt4RSxlQUFvQjtBQUVyREYsZUFBVztNQUNWRTtJQUNELENBQUM7RUFDRixDQUFDO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFsiaW1wb3J0X2V4dF9nYWRnZXQiLCAicmVxdWlyZSIsICJnZXRJMThuTWVzc2FnZXMiLCAiQWlBc3Npc3RlZCIsICJsb2NhbGl6ZSIsICJlbiIsICJqYSIsICJQcmV2aWV3IiwgImkxOG5NZXNzYWdlcyIsICJnZXRNZXNzYWdlIiwgImtleSIsICJpc0luaXQiLCAiYWlBc3Npc3RlZCIsICIkYm9keSIsICIkZWRpdEZvcm0iLCAiaXNWZUluaXQiLCAidmUiLCAiaW5pdCIsICIkdGFyZ2V0IiwgImZpbmQiLCAibGVuZ3RoIiwgImNoZWNrYm94IiwgIk9PIiwgInVpIiwgIkNoZWNrYm94SW5wdXRXaWRnZXQiLCAic2VsZWN0ZWQiLCAib24iLCAiY2hhbmdlVGFnIiwgImdlbmVyYXRlQ2hhbmdlVGFncyIsICJvcmlnaW5DaGFuZ2VUYWdzIiwgImlzU2VsZWN0ZWQiLCAiY29uY2F0IiwgInJlcGxhY2UiLCAiY2hhbmdlVGFncyIsICJfdmUkaW5pdCR0YXJnZXQkc2F2ZUYiLCAiX3ZlJGluaXQkdGFyZ2V0JHNhdmVGMiIsICJfdmUkaW5pdCR0YXJnZXQkc2F2ZUYzIiwgInRhcmdldCIsICJzYXZlRmllbGRzIiwgIndwQ2hhbmdlVGFncyIsICJjYWxsIiwgIl8kb3JpZ2luV3BDaGFuZ2VUYWdzJCIsICJfJG9yaWdpbldwQ2hhbmdlVGFncyQyIiwgIiR3cENoYW5nZVRhZ3MiLCAiJCIsICJhdHRyIiwgImlkIiwgIm5hbWUiLCAidHlwZSIsICJ2YWx1ZSIsICJwYXJlbnRzIiwgIiRvcmlnaW5XcENoYW5nZVRhZ3MiLCAicHJlcGVuZCIsICJ2YWwiLCAidG9TdHJpbmciLCAiY2hlY2tib3hMYXlvdXQiLCAiRmllbGRMYXlvdXQiLCAiYWxpZ24iLCAibGFiZWwiLCAiYXBwZW5kIiwgIiRlbGVtZW50IiwgImNsZWFyVW5kb1N1bW1hcnkiLCAiJHdwQXV0b1N1bW1hcnkiLCAibXciLCAidXRpbCIsICJnZXRQYXJhbVZhbHVlIiwgIldHX0FDVElPTiIsICJjb25maWciLCAiZ2V0IiwgIldHX1BBR0VfTkFNRSIsICJXR19VU0VSX0dST1VQUyIsICJfbXckY29uZmlnJGdldCIsICJJU19XR19FRElUX09SX1NVQk1JVF9BQ1RJT04iLCAiaW5jbHVkZXMiLCAiZGlzYWJsZVRpdGxlIiwgIiR3cFN1bW1hcnkiLCAicHJvcCIsICJub1NlY3Rpb25UaXRsZVBhZ2VzIiwgIm5vU2VjdGlvblRpdGxlUGFnZXNSZWdleCIsICJ0ZXN0IiwgImFkZENTUyIsICJpbXBvcnRfZXh0X2dhZGdldDIiLCAiZ2V0Qm9keSIsICJ0aGVuIiwgImVkaXRGb3JtIiwgImhvb2siLCAiYWRkIl0KfQo=

})();

/* </nowiki> */

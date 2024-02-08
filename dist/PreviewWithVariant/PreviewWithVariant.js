/**
 * SPDX-License-Identifier: MIT
 * _addText: '{{Gadget Header|license=MIT}}'
 *
 * @base {@link https://zh.wikipedia.org/wiki/Special:Permalink/67345361}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/PreviewWithVariant}
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

// dist/PreviewWithVariant/PreviewWithVariant.js
//! src/PreviewWithVariant/PreviewWithVariant.ts
mw.hook("wikipage.editform").add(($editForm) => {
  if (mw.config.get("wgPreviewWithVariantInitialized")) {
    return;
  }
  const $templateSandboxPreview = $editForm.find('input[name="wpTemplateSandboxPreview"]');
  if (mw.config.get("wgPageContentModel") !== "wikitext" && !$templateSandboxPreview.length) {
    return;
  }
  const $layout = $editForm.find(".editCheckboxes .oo-ui-horizontalLayout");
  if (!$layout.length) {
    return;
  }
  mw.config.set("wgPreviewWithVariantInitialized", true);
  const VARIANTS = [{
    data: "zh",
    label: window.wgULS("不转换", "不轉換")
  }, {
    data: "zh-hans",
    label: "简体"
  }, {
    data: "zh-hant",
    label: "繁體"
  }, {
    data: "zh-cn",
    label: "中国大陆简体"
  }, {
    data: "zh-hk",
    label: "中國香港繁體"
  }, {
    data: "zh-mo",
    label: "中國澳門繁體"
  }, {
    data: "zh-my",
    label: "马来西亚简体"
  }, {
    data: "zh-sg",
    label: "新加坡简体"
  }, {
    data: "zh-tw",
    label: "中國臺灣繁體"
  }];
  const uriVariant = mw.util.getParamValue("variant");
  const checkbox = new OO.ui.CheckboxInputWidget({
    selected: Boolean(uriVariant)
  });
  const dropdown = new OO.ui.DropdownWidget({
    $overlay: true,
    disabled: !checkbox.isSelected(),
    menu: {
      items: VARIANTS.map(({
        data,
        label
      }) => {
        return new OO.ui.MenuOptionWidget({
          data,
          label
        });
      })
    }
  });
  dropdown.getMenu().selectItemByData(mw.config.get("wgUserVariant") || uriVariant || mw.user.options.get("variant"));
  checkbox.on("change", (selected) => {
    dropdown.setDisabled(!selected);
  });
  const getSelectedVariant = () => {
    if (!checkbox.isSelected()) {
      return;
    }
    const selectedItem = dropdown.getMenu().findSelectedItem();
    return selectedItem ? selectedItem.getData() : void 0;
  };
  const manipulateActionUrl = () => {
    const selectedVariant = getSelectedVariant();
    const originalAction = $editForm.attr("action");
    if (selectedVariant && originalAction) {
      $editForm.attr("action", new mw.Uri(originalAction).extend({
        variant: selectedVariant
      }).getRelativePath());
    }
  };
  const manipulateVariantConfig = () => {
    mw.config.set("wgUserVariant", getSelectedVariant() || mw.user.options.get("variant"));
  };
  $editForm.find("#wpPreview").on("click", mw.user.options.get("uselivepreview") ? manipulateVariantConfig : manipulateActionUrl);
  $templateSandboxPreview.on("click", manipulateActionUrl);
  dropdown.getMenu().on("select", manipulateVariantConfig);
  const checkboxField = new OO.ui.FieldLayout(checkbox, {
    align: "inline",
    label: window.wgULS("预览字词转换", "預覽字詞轉換")
  });
  const dropdownField = new OO.ui.FieldLayout(dropdown, {
    align: "top",
    label: window.wgULS("使用该语言变体显示预览：", "使用該語言變體顯示預覽："),
    invisibleLabel: true
  });
  $layout.append($("<div>").attr("id", "pwv-area").append(checkboxField.$element, dropdownField.$element));
});

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1ByZXZpZXdXaXRoVmFyaWFudC9QcmV2aWV3V2l0aFZhcmlhbnQudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIi8qKlxuICogQGRlc2NyaXB0aW9uIEFkZCBhIFwiUHJldmlldyB3aXRoIHZhcmlhbnRcIiBvcHRpb24gdG8gdGhlIGVkaXQgZm9ybS5cbiAqL1xubXcuaG9vaygnd2lraXBhZ2UuZWRpdGZvcm0nKS5hZGQoKCRlZGl0Rm9ybSk6IHZvaWQgPT4ge1xuXHQvLyBHdWFyZCBhZ2FpbnN0IGRvdWJsZSBpbmNsdXNpb25zXG5cdGlmIChtdy5jb25maWcuZ2V0KCd3Z1ByZXZpZXdXaXRoVmFyaWFudEluaXRpYWxpemVkJykpIHtcblx0XHRyZXR1cm47XG5cdH1cblx0Y29uc3QgJHRlbXBsYXRlU2FuZGJveFByZXZpZXc6IEpRdWVyeSA9ICRlZGl0Rm9ybS5maW5kKCdpbnB1dFtuYW1lPVwid3BUZW1wbGF0ZVNhbmRib3hQcmV2aWV3XCJdJyk7XG5cdC8vIEl0IGlzIHBvc3NpYmxlIHRoYXQgYSB1c2VyIHdhbnQgdG8gcHJldmlldyBhIHBhZ2Ugd2l0aCBhIG5vbi13aWtpdGV4dCBtb2R1bGVcblx0Ly8gRG8gbm90IHJldHVybiBpbiB0aGlzIGNhc2Vcblx0aWYgKG13LmNvbmZpZy5nZXQoJ3dnUGFnZUNvbnRlbnRNb2RlbCcpICE9PSAnd2lraXRleHQnICYmICEkdGVtcGxhdGVTYW5kYm94UHJldmlldy5sZW5ndGgpIHtcblx0XHRyZXR1cm47XG5cdH1cblx0Y29uc3QgJGxheW91dDogSlF1ZXJ5ID0gJGVkaXRGb3JtLmZpbmQoJy5lZGl0Q2hlY2tib3hlcyAub28tdWktaG9yaXpvbnRhbExheW91dCcpO1xuXHRpZiAoISRsYXlvdXQubGVuZ3RoKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdC8vIEd1YXJkIGFnYWluc3QgZG91YmxlIGluY2x1c2lvbnNcblx0bXcuY29uZmlnLnNldCgnd2dQcmV2aWV3V2l0aFZhcmlhbnRJbml0aWFsaXplZCcsIHRydWUpO1xuXHRjb25zdCBWQVJJQU5UUzoge1xuXHRcdGRhdGE6IHN0cmluZztcblx0XHRsYWJlbDogc3RyaW5nO1xuXHR9W10gPSBbXG5cdFx0e1xuXHRcdFx0ZGF0YTogJ3poJyxcblx0XHRcdGxhYmVsOiB3aW5kb3cud2dVTFMoJ+S4jei9rOaNoicsICfkuI3ovYnmj5snKSxcblx0XHR9LFxuXHRcdHtcblx0XHRcdGRhdGE6ICd6aC1oYW5zJyxcblx0XHRcdGxhYmVsOiAn566A5L2TJyxcblx0XHR9LFxuXHRcdHtcblx0XHRcdGRhdGE6ICd6aC1oYW50Jyxcblx0XHRcdGxhYmVsOiAn57mB6auUJyxcblx0XHR9LFxuXHRcdHtcblx0XHRcdGRhdGE6ICd6aC1jbicsXG5cdFx0XHRsYWJlbDogJ+S4reWbveWkp+mZhueugOS9kycsXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRkYXRhOiAnemgtaGsnLFxuXHRcdFx0bGFiZWw6ICfkuK3lnIvpppnmuK/nuYHpq5QnLFxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0ZGF0YTogJ3poLW1vJyxcblx0XHRcdGxhYmVsOiAn5Lit5ZyL5r6z6ZaA57mB6auUJyxcblx0XHR9LFxuXHRcdHtcblx0XHRcdGRhdGE6ICd6aC1teScsXG5cdFx0XHRsYWJlbDogJ+mprOadpeilv+S6mueugOS9kycsXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRkYXRhOiAnemgtc2cnLFxuXHRcdFx0bGFiZWw6ICfmlrDliqDlnaHnroDkvZMnLFxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0ZGF0YTogJ3poLXR3Jyxcblx0XHRcdGxhYmVsOiAn5Lit5ZyL6Ie654Gj57mB6auUJyxcblx0XHR9LFxuXHRdO1xuXHRjb25zdCB1cmlWYXJpYW50OiBzdHJpbmcgfCBudWxsID0gbXcudXRpbC5nZXRQYXJhbVZhbHVlKCd2YXJpYW50Jyk7XG5cdGNvbnN0IGNoZWNrYm94OiBPTy51aS5DaGVja2JveElucHV0V2lkZ2V0ID0gbmV3IE9PLnVpLkNoZWNrYm94SW5wdXRXaWRnZXQoe1xuXHRcdHNlbGVjdGVkOiBCb29sZWFuKHVyaVZhcmlhbnQpLFxuXHR9KTtcblx0Y29uc3QgZHJvcGRvd246IE9PLnVpLkRyb3Bkb3duV2lkZ2V0ID0gbmV3IE9PLnVpLkRyb3Bkb3duV2lkZ2V0KHtcblx0XHQkb3ZlcmxheTogdHJ1ZSxcblx0XHRkaXNhYmxlZDogIWNoZWNrYm94LmlzU2VsZWN0ZWQoKSxcblx0XHRtZW51OiB7XG5cdFx0XHRpdGVtczogVkFSSUFOVFMubWFwKCh7ZGF0YSwgbGFiZWx9KTogT08udWkuTWVudU9wdGlvbldpZGdldCA9PiB7XG5cdFx0XHRcdHJldHVybiBuZXcgT08udWkuTWVudU9wdGlvbldpZGdldCh7XG5cdFx0XHRcdFx0ZGF0YSxcblx0XHRcdFx0XHRsYWJlbCxcblx0XHRcdFx0fSk7XG5cdFx0XHR9KSxcblx0XHR9LFxuXHR9KTtcblx0ZHJvcGRvd24uZ2V0TWVudSgpLnNlbGVjdEl0ZW1CeURhdGEobXcuY29uZmlnLmdldCgnd2dVc2VyVmFyaWFudCcpIHx8IHVyaVZhcmlhbnQgfHwgbXcudXNlci5vcHRpb25zLmdldCgndmFyaWFudCcpKTtcblx0Y2hlY2tib3gub24oJ2NoYW5nZScsIChzZWxlY3RlZDogYm9vbGVhbiB8IHN0cmluZyk6IHZvaWQgPT4ge1xuXHRcdGRyb3Bkb3duLnNldERpc2FibGVkKCFzZWxlY3RlZCk7XG5cdH0pO1xuXHRjb25zdCBnZXRTZWxlY3RlZFZhcmlhbnQgPSAoKTogc3RyaW5nIHwgdW5kZWZpbmVkID0+IHtcblx0XHRpZiAoIWNoZWNrYm94LmlzU2VsZWN0ZWQoKSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRjb25zdCBzZWxlY3RlZEl0ZW06IE9PLnVpLk9wdGlvbldpZGdldCB8IG51bGwgPSBkcm9wZG93blxuXHRcdFx0LmdldE1lbnUoKVxuXHRcdFx0LmZpbmRTZWxlY3RlZEl0ZW0oKSBhcyBPTy51aS5PcHRpb25XaWRnZXQgfCBudWxsO1xuXHRcdHJldHVybiBzZWxlY3RlZEl0ZW0gPyAoc2VsZWN0ZWRJdGVtLmdldERhdGEoKSBhcyBzdHJpbmcpIDogdW5kZWZpbmVkO1xuXHR9O1xuXHRjb25zdCBtYW5pcHVsYXRlQWN0aW9uVXJsID0gKCk6IHZvaWQgPT4ge1xuXHRcdGNvbnN0IHNlbGVjdGVkVmFyaWFudDogc3RyaW5nIHwgdW5kZWZpbmVkID0gZ2V0U2VsZWN0ZWRWYXJpYW50KCk7XG5cdFx0Y29uc3Qgb3JpZ2luYWxBY3Rpb246IHN0cmluZyB8IHVuZGVmaW5lZCA9ICRlZGl0Rm9ybS5hdHRyKCdhY3Rpb24nKTtcblx0XHRpZiAoc2VsZWN0ZWRWYXJpYW50ICYmIG9yaWdpbmFsQWN0aW9uKSB7XG5cdFx0XHQkZWRpdEZvcm0uYXR0cihcblx0XHRcdFx0J2FjdGlvbicsXG5cdFx0XHRcdG5ldyBtdy5Vcmkob3JpZ2luYWxBY3Rpb24pXG5cdFx0XHRcdFx0LmV4dGVuZCh7XG5cdFx0XHRcdFx0XHR2YXJpYW50OiBzZWxlY3RlZFZhcmlhbnQsXG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0XHQuZ2V0UmVsYXRpdmVQYXRoKClcblx0XHRcdCk7XG5cdFx0fVxuXHR9O1xuXHRjb25zdCBtYW5pcHVsYXRlVmFyaWFudENvbmZpZyA9ICgpOiB2b2lkID0+IHtcblx0XHRtdy5jb25maWcuc2V0KCd3Z1VzZXJWYXJpYW50JywgZ2V0U2VsZWN0ZWRWYXJpYW50KCkgfHwgKG13LnVzZXIub3B0aW9ucy5nZXQoJ3ZhcmlhbnQnKSBhcyBzdHJpbmcpKTtcblx0fTtcblx0JGVkaXRGb3JtXG5cdFx0LmZpbmQoJyN3cFByZXZpZXcnKVxuXHRcdC5vbignY2xpY2snLCBtdy51c2VyLm9wdGlvbnMuZ2V0KCd1c2VsaXZlcHJldmlldycpID8gbWFuaXB1bGF0ZVZhcmlhbnRDb25maWcgOiBtYW5pcHVsYXRlQWN0aW9uVXJsKTtcblx0JHRlbXBsYXRlU2FuZGJveFByZXZpZXcub24oJ2NsaWNrJywgbWFuaXB1bGF0ZUFjdGlvblVybCk7XG5cdGRyb3Bkb3duLmdldE1lbnUoKS5vbignc2VsZWN0JywgbWFuaXB1bGF0ZVZhcmlhbnRDb25maWcpO1xuXHRjb25zdCBjaGVja2JveEZpZWxkOiBPTy51aS5GaWVsZExheW91dDxPTy51aS5DaGVja2JveElucHV0V2lkZ2V0PiA9IG5ldyBPTy51aS5GaWVsZExheW91dChjaGVja2JveCwge1xuXHRcdGFsaWduOiAnaW5saW5lJyxcblx0XHRsYWJlbDogd2luZG93LndnVUxTKCfpooTop4jlrZfor43ovazmjaInLCAn6aCQ6Ka95a2X6Kme6L2J5o+bJyksXG5cdH0pO1xuXHRjb25zdCBkcm9wZG93bkZpZWxkOiBPTy51aS5GaWVsZExheW91dDxPTy51aS5Ecm9wZG93bldpZGdldD4gPSBuZXcgT08udWkuRmllbGRMYXlvdXQoZHJvcGRvd24sIHtcblx0XHRhbGlnbjogJ3RvcCcsXG5cdFx0bGFiZWw6IHdpbmRvdy53Z1VMUygn5L2/55So6K+l6K+t6KiA5Y+Y5L2T5pi+56S66aKE6KeI77yaJywgJ+S9v+eUqOipsuiqnuiogOiuiumrlOmhr+ekuumgkOimve+8micpLFxuXHRcdGludmlzaWJsZUxhYmVsOiB0cnVlLFxuXHR9KTtcblx0JGxheW91dC5hcHBlbmQoJCgnPGRpdj4nKS5hdHRyKCdpZCcsICdwd3YtYXJlYScpLmFwcGVuZChjaGVja2JveEZpZWxkLiRlbGVtZW50LCBkcm9wZG93bkZpZWxkLiRlbGVtZW50KSk7XG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0FBLEdBQUdDLEtBQUssbUJBQW1CLEVBQUVDLElBQUtDLGVBQW9CO0FBRXJELE1BQUlILEdBQUdJLE9BQU9DLElBQUksaUNBQWlDLEdBQUc7QUFDckQ7RUFDRDtBQUNBLFFBQU1DLDBCQUFrQ0gsVUFBVUksS0FBSyx3Q0FBd0M7QUFHL0YsTUFBSVAsR0FBR0ksT0FBT0MsSUFBSSxvQkFBb0IsTUFBTSxjQUFjLENBQUNDLHdCQUF3QkUsUUFBUTtBQUMxRjtFQUNEO0FBQ0EsUUFBTUMsVUFBa0JOLFVBQVVJLEtBQUsseUNBQXlDO0FBQ2hGLE1BQUksQ0FBQ0UsUUFBUUQsUUFBUTtBQUNw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akIsQ0FBQztBQUNEaEQsVUFBUWlELE9BQU9DLEVBQUUsT0FBTyxFQUFFWixLQUFLLE1BQU0sVUFBVSxFQUFFVyxPQUFPTCxjQUFjTyxVQUFVSixjQUFjSSxRQUFRLENBQUM7QUFDeEcsQ0FBQzsiLAogICJuYW1lcyI6IFsibXciLCAiaG9vayIsICJhZGQiLCAiJGVkaXRGb3JtIiwgImNvbmZpZyIsICJnZXQiLCAiJHRlbXBsYXRlU2FuZGJveFByZXZpZXciLCAiZmluZCIsICJsZW5ndGgiLCAiJGxheW91dCIsICJzZXQiLCAiVkFSSUFOVFMiLCAiZGF0YSIsICJsYWJlbCIsICJ3aW5kb3ciLCAid2dVTFMiLCAidXJpVmFyaWFudCIsICJ1dGlsIiwgImdldFBhcmFtVmFsdWUiLCAiY2hlY2tib3giLCAiT08iLCAidWkiLCAiQ2hlY2tib3hJbnB1dFdpZGdldCIsICJzZWxlY3RlZCIsICJCb29sZWFuIiwgImRyb3Bkb3duIiwgIkRyb3Bkb3duV2lkZ2V0IiwgIiRvdmVybGF5IiwgImRpc2FibGVkIiwgImlzU2VsZWN0ZWQiLCAibWVudSIsICJpdGVtcyIsICJtYXAiLCAiTWVudU9wdGlvbldpZGdldCIsICJnZXRNZW51IiwgInNlbGVjdEl0ZW1CeURhdGEiLCAidXNlciIsICJvcHRpb25zIiwgIm9uIiwgInNldERpc2FibGVkIiwgImdldFNlbGVjdGVkVmFyaWFudCIsICJzZWxlY3RlZEl0ZW0iLCAiZmluZFNlbGVjdGVkSXRlbSIsICJnZXREYXRhIiwgIm1hbmlwdWxhdGVBY3Rpb25VcmwiLCAic2VsZWN0ZWRWYXJpYW50IiwgIm9yaWdpbmFsQWN0aW9uIiwgImF0dHIiLCAiVXJpIiwgImV4dGVuZCIsICJ2YXJpYW50IiwgImdldFJlbGF0aXZlUGF0aCIsICJtYW5pcHVsYXRlVmFyaWFudENvbmZpZyIsICJjaGVja2JveEZpZWxkIiwgIkZpZWxkTGF5b3V0IiwgImFsaWduIiwgImRyb3Bkb3duRmllbGQiLCAiaW52aXNpYmxlTGFiZWwiLCAiYXBwZW5kIiwgIiQiLCAiJGVsZW1lbnQiXQp9Cg==

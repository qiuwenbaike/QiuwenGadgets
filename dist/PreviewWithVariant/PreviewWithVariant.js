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
mw.config.set("wgPreviewWithVariantInitialized", false);
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1ByZXZpZXdXaXRoVmFyaWFudC9QcmV2aWV3V2l0aFZhcmlhbnQudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIi8qKlxuICogQGRlc2NyaXB0aW9uIEFkZCBhIFwiUHJldmlldyB3aXRoIHZhcmlhbnRcIiBvcHRpb24gdG8gdGhlIGVkaXQgZm9ybS5cbiAqL1xubXcuY29uZmlnLnNldCgnd2dQcmV2aWV3V2l0aFZhcmlhbnRJbml0aWFsaXplZCcsIGZhbHNlKTtcblxubXcuaG9vazxKUXVlcnlbXT4oJ3dpa2lwYWdlLmVkaXRmb3JtJykuYWRkKCgkZWRpdEZvcm0pOiB2b2lkID0+IHtcblx0aWYgKG13LmNvbmZpZy5nZXQoJ3dnUHJldmlld1dpdGhWYXJpYW50SW5pdGlhbGl6ZWQnKSkge1xuXHRcdHJldHVybjtcblx0fVxuXHRjb25zdCAkdGVtcGxhdGVTYW5kYm94UHJldmlldzogSlF1ZXJ5ID0gJGVkaXRGb3JtLmZpbmQoJ2lucHV0W25hbWU9XCJ3cFRlbXBsYXRlU2FuZGJveFByZXZpZXdcIl0nKTtcblx0Ly8gSXQgaXMgcG9zc2libGUgdGhhdCBhIHVzZXIgd2FudCB0byBwcmV2aWV3IGEgcGFnZSB3aXRoIGEgbm9uLXdpa2l0ZXh0IG1vZHVsZVxuXHQvLyBEbyBub3QgcmV0dXJuIGluIHRoaXMgY2FzZVxuXHRpZiAobXcuY29uZmlnLmdldCgnd2dQYWdlQ29udGVudE1vZGVsJykgIT09ICd3aWtpdGV4dCcgJiYgISR0ZW1wbGF0ZVNhbmRib3hQcmV2aWV3Lmxlbmd0aCkge1xuXHRcdHJldHVybjtcblx0fVxuXHRjb25zdCAkbGF5b3V0OiBKUXVlcnkgPSAkZWRpdEZvcm0uZmluZCgnLmVkaXRDaGVja2JveGVzIC5vby11aS1ob3Jpem9udGFsTGF5b3V0Jyk7XG5cdGlmICghJGxheW91dC5sZW5ndGgpIHtcblx0XHRyZXR1cm47XG5cdH1cblx0bXcuY29uZmlnLnNldCgnd2dQcmV2aWV3V2l0aFZhcmlhbnRJbml0aWFsaXplZCcsIHRydWUpO1xuXHRjb25zdCBWQVJJQU5UUzoge1xuXHRcdGRhdGE6IHN0cmluZztcblx0XHRsYWJlbDogc3RyaW5nO1xuXHR9W10gPSBbXG5cdFx0e1xuXHRcdFx0ZGF0YTogJ3poJyxcblx0XHRcdGxhYmVsOiB3aW5kb3cud2dVTFMoJ+S4jei9rOaNoicsICfkuI3ovYnmj5snKSxcblx0XHR9LFxuXHRcdHtcblx0XHRcdGRhdGE6ICd6aC1oYW5zJyxcblx0XHRcdGxhYmVsOiAn566A5L2TJyxcblx0XHR9LFxuXHRcdHtcblx0XHRcdGRhdGE6ICd6aC1oYW50Jyxcblx0XHRcdGxhYmVsOiAn57mB6auUJyxcblx0XHR9LFxuXHRcdHtcblx0XHRcdGRhdGE6ICd6aC1jbicsXG5cdFx0XHRsYWJlbDogJ+S4reWbveWkp+mZhueugOS9kycsXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRkYXRhOiAnemgtaGsnLFxuXHRcdFx0bGFiZWw6ICfkuK3lnIvpppnmuK/nuYHpq5QnLFxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0ZGF0YTogJ3poLW1vJyxcblx0XHRcdGxhYmVsOiAn5Lit5ZyL5r6z6ZaA57mB6auUJyxcblx0XHR9LFxuXHRcdHtcblx0XHRcdGRhdGE6ICd6aC1teScsXG5cdFx0XHRsYWJlbDogJ+mprOadpeilv+S6mueugOS9kycsXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRkYXRhOiAnemgtc2cnLFxuXHRcdFx0bGFiZWw6ICfmlrDliqDlnaHnroDkvZMnLFxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0ZGF0YTogJ3poLXR3Jyxcblx0XHRcdGxhYmVsOiAn5Lit5ZyL6Ie654Gj57mB6auUJyxcblx0XHR9LFxuXHRdO1xuXHRjb25zdCB1cmlWYXJpYW50OiBzdHJpbmcgfCBudWxsID0gbXcudXRpbC5nZXRQYXJhbVZhbHVlKCd2YXJpYW50Jyk7XG5cdGNvbnN0IGNoZWNrYm94OiBPTy51aS5DaGVja2JveElucHV0V2lkZ2V0ID0gbmV3IE9PLnVpLkNoZWNrYm94SW5wdXRXaWRnZXQoe1xuXHRcdHNlbGVjdGVkOiBCb29sZWFuKHVyaVZhcmlhbnQpLFxuXHR9KTtcblx0Y29uc3QgZHJvcGRvd246IE9PLnVpLkRyb3Bkb3duV2lkZ2V0ID0gbmV3IE9PLnVpLkRyb3Bkb3duV2lkZ2V0KHtcblx0XHQkb3ZlcmxheTogdHJ1ZSxcblx0XHRkaXNhYmxlZDogIWNoZWNrYm94LmlzU2VsZWN0ZWQoKSxcblx0XHRtZW51OiB7XG5cdFx0XHRpdGVtczogVkFSSUFOVFMubWFwKCh7ZGF0YSwgbGFiZWx9KTogT08udWkuTWVudU9wdGlvbldpZGdldCA9PiB7XG5cdFx0XHRcdHJldHVybiBuZXcgT08udWkuTWVudU9wdGlvbldpZGdldCh7XG5cdFx0XHRcdFx0ZGF0YSxcblx0XHRcdFx0XHRsYWJlbCxcblx0XHRcdFx0fSk7XG5cdFx0XHR9KSxcblx0XHR9LFxuXHR9KTtcblx0ZHJvcGRvd24uZ2V0TWVudSgpLnNlbGVjdEl0ZW1CeURhdGEobXcuY29uZmlnLmdldCgnd2dVc2VyVmFyaWFudCcpIHx8IHVyaVZhcmlhbnQgfHwgbXcudXNlci5vcHRpb25zLmdldCgndmFyaWFudCcpKTtcblx0Y2hlY2tib3gub24oJ2NoYW5nZScsIChzZWxlY3RlZDogYm9vbGVhbiB8IHN0cmluZyk6IHZvaWQgPT4ge1xuXHRcdGRyb3Bkb3duLnNldERpc2FibGVkKCFzZWxlY3RlZCk7XG5cdH0pO1xuXHRjb25zdCBnZXRTZWxlY3RlZFZhcmlhbnQgPSAoKTogc3RyaW5nIHwgdW5kZWZpbmVkID0+IHtcblx0XHRpZiAoIWNoZWNrYm94LmlzU2VsZWN0ZWQoKSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRjb25zdCBzZWxlY3RlZEl0ZW06IE9PLnVpLk9wdGlvbldpZGdldCB8IG51bGwgPSBkcm9wZG93blxuXHRcdFx0LmdldE1lbnUoKVxuXHRcdFx0LmZpbmRTZWxlY3RlZEl0ZW0oKSBhcyBPTy51aS5PcHRpb25XaWRnZXQgfCBudWxsO1xuXHRcdHJldHVybiBzZWxlY3RlZEl0ZW0gPyAoc2VsZWN0ZWRJdGVtLmdldERhdGEoKSBhcyBzdHJpbmcpIDogdW5kZWZpbmVkO1xuXHR9O1xuXHRjb25zdCBtYW5pcHVsYXRlQWN0aW9uVXJsID0gKCk6IHZvaWQgPT4ge1xuXHRcdGNvbnN0IHNlbGVjdGVkVmFyaWFudDogc3RyaW5nIHwgdW5kZWZpbmVkID0gZ2V0U2VsZWN0ZWRWYXJpYW50KCk7XG5cdFx0Y29uc3Qgb3JpZ2luYWxBY3Rpb246IHN0cmluZyB8IHVuZGVmaW5lZCA9ICRlZGl0Rm9ybS5hdHRyKCdhY3Rpb24nKTtcblx0XHRpZiAoc2VsZWN0ZWRWYXJpYW50ICYmIG9yaWdpbmFsQWN0aW9uKSB7XG5cdFx0XHQkZWRpdEZvcm0uYXR0cihcblx0XHRcdFx0J2FjdGlvbicsXG5cdFx0XHRcdG5ldyBtdy5Vcmkob3JpZ2luYWxBY3Rpb24pXG5cdFx0XHRcdFx0LmV4dGVuZCh7XG5cdFx0XHRcdFx0XHR2YXJpYW50OiBzZWxlY3RlZFZhcmlhbnQsXG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0XHQuZ2V0UmVsYXRpdmVQYXRoKClcblx0XHRcdCk7XG5cdFx0fVxuXHR9O1xuXHRjb25zdCBtYW5pcHVsYXRlVmFyaWFudENvbmZpZyA9ICgpOiB2b2lkID0+IHtcblx0XHRtdy5jb25maWcuc2V0KCd3Z1VzZXJWYXJpYW50JywgZ2V0U2VsZWN0ZWRWYXJpYW50KCkgfHwgbXcudXNlci5vcHRpb25zLmdldCgndmFyaWFudCcpKTtcblx0fTtcblx0JGVkaXRGb3JtXG5cdFx0LmZpbmQoJyN3cFByZXZpZXcnKVxuXHRcdC5vbignY2xpY2snLCBtdy51c2VyLm9wdGlvbnMuZ2V0KCd1c2VsaXZlcHJldmlldycpID8gbWFuaXB1bGF0ZVZhcmlhbnRDb25maWcgOiBtYW5pcHVsYXRlQWN0aW9uVXJsKTtcblx0JHRlbXBsYXRlU2FuZGJveFByZXZpZXcub24oJ2NsaWNrJywgbWFuaXB1bGF0ZUFjdGlvblVybCk7XG5cdGRyb3Bkb3duLmdldE1lbnUoKS5vbignc2VsZWN0JywgbWFuaXB1bGF0ZVZhcmlhbnRDb25maWcpO1xuXHRjb25zdCBjaGVja2JveEZpZWxkOiBPTy51aS5GaWVsZExheW91dDxPTy51aS5DaGVja2JveElucHV0V2lkZ2V0PiA9IG5ldyBPTy51aS5GaWVsZExheW91dChjaGVja2JveCwge1xuXHRcdGFsaWduOiAnaW5saW5lJyxcblx0XHRsYWJlbDogd2luZG93LndnVUxTKCfpooTop4jlrZfor43ovazmjaInLCAn6aCQ6Ka95a2X6Kme6L2J5o+bJyksXG5cdH0pO1xuXHRjb25zdCBkcm9wZG93bkZpZWxkOiBPTy51aS5GaWVsZExheW91dDxPTy51aS5Ecm9wZG93bldpZGdldD4gPSBuZXcgT08udWkuRmllbGRMYXlvdXQoZHJvcGRvd24sIHtcblx0XHRhbGlnbjogJ3RvcCcsXG5cdFx0bGFiZWw6IHdpbmRvdy53Z1VMUygn5L2/55So6K+l6K+t6KiA5Y+Y5L2T5pi+56S66aKE6KeI77yaJywgJ+S9v+eUqOipsuiqnuiogOiuiumrlOmhr+ekuumgkOimve+8micpLFxuXHRcdGludmlzaWJsZUxhYmVsOiB0cnVlLFxuXHR9KTtcblx0JGxheW91dC5hcHBlbmQoJCgnPGRpdj4nKS5hdHRyKCdpZCcsICdwd3YtYXJlYScpLmFwcGVuZChjaGVja2JveEZpZWxkLiRlbGVtZW50LCBkcm9wZG93bkZpZWxkLiRlbGVtZW50KSk7XG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7QUFHQUEsR0FBR0MsT0FBT0MsSUFBSSxtQ0FBbUMsS0FBSztBQUV0REYsR0FBR0csS0FBZSxtQkFBbUIsRUFBRUMsSUFBS0MsZUFBb0I7QUFDL0QsTUFBSUwsR0FBR0MsT0FBT0ssSUFBSSxpQ0FBaUMsR0FBRztBQUNyRDtFQUNEO0FBQ0EsUUFBTUMsMEJBQWtDRixVQUFVRyxLQUFLLHdDQUF3QztBQUcvRixNQUFJUixHQUFHQyxPQUFPSyxJQUFJLG9CQUFvQixNQUFNLGNBQWMsQ0FBQ0Msd0JBQXdCRSxRQUFRO0FBQzFGO0VBQ0Q7QUFDQSxRQUFNQyxVQUFrQkwsVUFBVUcsS0FBSyx5Q0FBeUM7QUFDaEYsTUFBSSxDQUFDRSxRQUFRRCxRQUFRO0FBQ3BCO0VBQ0Q7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O0FBQ0QvQyxVQUFRZ0QsT0FBT0MsRUFBRSxPQUFPLEVBQUVaLEtBQUssTUFBTSxVQUFVLEVBQUVXLE9BQU9MLGNBQWNPLFVBQVVKLGNBQWNJLFFBQVEsQ0FBQztBQUN4RyxDQUFDOyIsCiAgIm5hbWVzIjogWyJtdyIsICJjb25maWciLCAic2V0IiwgImhvb2siLCAiYWRkIiwgIiRlZGl0Rm9ybSIsICJnZXQiLCAiJHRlbXBsYXRlU2FuZGJveFByZXZpZXciLCAiZmluZCIsICJsZW5ndGgiLCAiJGxheW91dCIsICJWQVJJQU5UUyIsICJkYXRhIiwgImxhYmVsIiwgIndpbmRvdyIsICJ3Z1VMUyIsICJ1cmlWYXJpYW50IiwgInV0aWwiLCAiZ2V0UGFyYW1WYWx1ZSIsICJjaGVja2JveCIsICJPTyIsICJ1aSIsICJDaGVja2JveElucHV0V2lkZ2V0IiwgInNlbGVjdGVkIiwgIkJvb2xlYW4iLCAiZHJvcGRvd24iLCAiRHJvcGRvd25XaWRnZXQiLCAiJG92ZXJsYXkiLCAiZGlzYWJsZWQiLCAiaXNTZWxlY3RlZCIsICJtZW51IiwgIml0ZW1zIiwgIm1hcCIsICJNZW51T3B0aW9uV2lkZ2V0IiwgImdldE1lbnUiLCAic2VsZWN0SXRlbUJ5RGF0YSIsICJ1c2VyIiwgIm9wdGlvbnMiLCAib24iLCAic2V0RGlzYWJsZWQiLCAiZ2V0U2VsZWN0ZWRWYXJpYW50IiwgInNlbGVjdGVkSXRlbSIsICJmaW5kU2VsZWN0ZWRJdGVtIiwgImdldERhdGEiLCAibWFuaXB1bGF0ZUFjdGlvblVybCIsICJzZWxlY3RlZFZhcmlhbnQiLCAib3JpZ2luYWxBY3Rpb24iLCAiYXR0ciIsICJVcmkiLCAiZXh0ZW5kIiwgInZhcmlhbnQiLCAiZ2V0UmVsYXRpdmVQYXRoIiwgIm1hbmlwdWxhdGVWYXJpYW50Q29uZmlnIiwgImNoZWNrYm94RmllbGQiLCAiRmllbGRMYXlvdXQiLCAiYWxpZ24iLCAiZHJvcGRvd25GaWVsZCIsICJpbnZpc2libGVMYWJlbCIsICJhcHBlbmQiLCAiJCIsICIkZWxlbWVudCJdCn0K

})();

/* </nowiki> */

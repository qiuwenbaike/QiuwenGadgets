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
//! src/PreviewWithVariant/modules/constant.ts
var VARIANTS = [{
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
var WG_PAGE_CONTENT_MODEL = mw.config.get("wgPageContentModel");
var WG_USER_VARIANT = mw.config.get("wgUserVariant");
//! src/PreviewWithVariant/PreviewWithVariant.ts
mw.hook("wikipage.editform").add(($editForm) => {
  if (mw.config.get("wgPreviewWithVariantInitialized")) {
    return;
  }
  const $templateSandboxPreview = $editForm.find('input[name="wpTemplateSandboxPreview"]');
  if (WG_PAGE_CONTENT_MODEL !== "wikitext" && !$templateSandboxPreview.length) {
    return;
  }
  const $layout = $editForm.find(".editCheckboxes .oo-ui-horizontalLayout");
  if (!$layout.length) {
    return;
  }
  mw.config.set("wgPreviewWithVariantInitialized", true);
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
  dropdown.getMenu().selectItemByData(WG_USER_VARIANT || uriVariant || mw.user.options.get("variant"));
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
  $editForm.find("input[name=wpPreview]").on("click", mw.user.options.get("uselivepreview") ? manipulateVariantConfig : manipulateActionUrl);
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1ByZXZpZXdXaXRoVmFyaWFudC9tb2R1bGVzL2NvbnN0YW50LnRzIiwgInNyYy9QcmV2aWV3V2l0aFZhcmlhbnQvUHJldmlld1dpdGhWYXJpYW50LnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBWQVJJQU5UUzoge1xuXHRkYXRhOiBzdHJpbmc7XG5cdGxhYmVsOiBzdHJpbmc7XG59W10gPSBbXG5cdHtcblx0XHRkYXRhOiAnemgnLFxuXHRcdGxhYmVsOiB3aW5kb3cud2dVTFMoJ+S4jei9rOaNoicsICfkuI3ovYnmj5snKSxcblx0fSxcblx0e1xuXHRcdGRhdGE6ICd6aC1oYW5zJyxcblx0XHRsYWJlbDogJ+eugOS9kycsXG5cdH0sXG5cdHtcblx0XHRkYXRhOiAnemgtaGFudCcsXG5cdFx0bGFiZWw6ICfnuYHpq5QnLFxuXHR9LFxuXHR7XG5cdFx0ZGF0YTogJ3poLWNuJyxcblx0XHRsYWJlbDogJ+S4reWbveWkp+mZhueugOS9kycsXG5cdH0sXG5cdHtcblx0XHRkYXRhOiAnemgtaGsnLFxuXHRcdGxhYmVsOiAn5Lit5ZyL6aaZ5riv57mB6auUJyxcblx0fSxcblx0e1xuXHRcdGRhdGE6ICd6aC1tbycsXG5cdFx0bGFiZWw6ICfkuK3lnIvmvrPploDnuYHpq5QnLFxuXHR9LFxuXHR7XG5cdFx0ZGF0YTogJ3poLW15Jyxcblx0XHRsYWJlbDogJ+mprOadpeilv+S6mueugOS9kycsXG5cdH0sXG5cdHtcblx0XHRkYXRhOiAnemgtc2cnLFxuXHRcdGxhYmVsOiAn5paw5Yqg5Z2h566A5L2TJyxcblx0fSxcblx0e1xuXHRcdGRhdGE6ICd6aC10dycsXG5cdFx0bGFiZWw6ICfkuK3lnIvoh7rngaPnuYHpq5QnLFxuXHR9LFxuXTtcblxuY29uc3QgV0dfUEFHRV9DT05URU5UX01PREVMID0gbXcuY29uZmlnLmdldCgnd2dQYWdlQ29udGVudE1vZGVsJyk7XG5cbmNvbnN0IFdHX1VTRVJfVkFSSUFOVDogc3RyaW5nIHwgbnVsbCA9IG13LmNvbmZpZy5nZXQoJ3dnVXNlclZhcmlhbnQnKTtcblxuZXhwb3J0IHtWQVJJQU5UUywgV0dfUEFHRV9DT05URU5UX01PREVMLCBXR19VU0VSX1ZBUklBTlR9O1xuIiwgImltcG9ydCAnLi9QcmV2aWV3V2l0aFZhcmlhbnQubGVzcyc7XG5pbXBvcnQge1ZBUklBTlRTLCBXR19QQUdFX0NPTlRFTlRfTU9ERUwsIFdHX1VTRVJfVkFSSUFOVH0gZnJvbSAnLi9tb2R1bGVzL2NvbnN0YW50Jztcbi8qKlxuICogQGRlc2NyaXB0aW9uIEFkZCBhIFwiUHJldmlldyB3aXRoIHZhcmlhbnRcIiBvcHRpb24gdG8gdGhlIGVkaXQgZm9ybS5cbiAqL1xubXcuaG9vaygnd2lraXBhZ2UuZWRpdGZvcm0nKS5hZGQoKCRlZGl0Rm9ybSk6IHZvaWQgPT4ge1xuXHQvLyBHdWFyZCBhZ2FpbnN0IGRvdWJsZSBpbmNsdXNpb25zXG5cdGlmIChtdy5jb25maWcuZ2V0KCd3Z1ByZXZpZXdXaXRoVmFyaWFudEluaXRpYWxpemVkJykpIHtcblx0XHRyZXR1cm47XG5cdH1cblx0Y29uc3QgJHRlbXBsYXRlU2FuZGJveFByZXZpZXc6IEpRdWVyeSA9ICRlZGl0Rm9ybS5maW5kKCdpbnB1dFtuYW1lPVwid3BUZW1wbGF0ZVNhbmRib3hQcmV2aWV3XCJdJyk7XG5cdC8vIEl0IGlzIHBvc3NpYmxlIHRoYXQgYSB1c2VyIHdhbnQgdG8gcHJldmlldyBhIHBhZ2Ugd2l0aCBhIG5vbi13aWtpdGV4dCBtb2R1bGVcblx0Ly8gRG8gbm90IHJldHVybiBpbiB0aGlzIGNhc2Vcblx0aWYgKFdHX1BBR0VfQ09OVEVOVF9NT0RFTCAhPT0gJ3dpa2l0ZXh0JyAmJiAhJHRlbXBsYXRlU2FuZGJveFByZXZpZXcubGVuZ3RoKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdGNvbnN0ICRsYXlvdXQ6IEpRdWVyeSA9ICRlZGl0Rm9ybS5maW5kKCcuZWRpdENoZWNrYm94ZXMgLm9vLXVpLWhvcml6b250YWxMYXlvdXQnKTtcblx0aWYgKCEkbGF5b3V0Lmxlbmd0aCkge1xuXHRcdHJldHVybjtcblx0fVxuXHQvLyBHdWFyZCBhZ2FpbnN0IGRvdWJsZSBpbmNsdXNpb25zXG5cdG13LmNvbmZpZy5zZXQoJ3dnUHJldmlld1dpdGhWYXJpYW50SW5pdGlhbGl6ZWQnLCB0cnVlKTtcblx0Y29uc3QgdXJpVmFyaWFudDogc3RyaW5nIHwgbnVsbCA9IG13LnV0aWwuZ2V0UGFyYW1WYWx1ZSgndmFyaWFudCcpO1xuXHRjb25zdCBjaGVja2JveDogT08udWkuQ2hlY2tib3hJbnB1dFdpZGdldCA9IG5ldyBPTy51aS5DaGVja2JveElucHV0V2lkZ2V0KHtcblx0XHRzZWxlY3RlZDogQm9vbGVhbih1cmlWYXJpYW50KSxcblx0fSk7XG5cdGNvbnN0IGRyb3Bkb3duOiBPTy51aS5Ecm9wZG93bldpZGdldCA9IG5ldyBPTy51aS5Ecm9wZG93bldpZGdldCh7XG5cdFx0JG92ZXJsYXk6IHRydWUsXG5cdFx0ZGlzYWJsZWQ6ICFjaGVja2JveC5pc1NlbGVjdGVkKCksXG5cdFx0bWVudToge1xuXHRcdFx0aXRlbXM6IFZBUklBTlRTLm1hcCgoe2RhdGEsIGxhYmVsfSk6IE9PLnVpLk1lbnVPcHRpb25XaWRnZXQgPT4ge1xuXHRcdFx0XHRyZXR1cm4gbmV3IE9PLnVpLk1lbnVPcHRpb25XaWRnZXQoe1xuXHRcdFx0XHRcdGRhdGEsXG5cdFx0XHRcdFx0bGFiZWwsXG5cdFx0XHRcdH0pO1xuXHRcdFx0fSksXG5cdFx0fSxcblx0fSk7XG5cdGRyb3Bkb3duLmdldE1lbnUoKS5zZWxlY3RJdGVtQnlEYXRhKFdHX1VTRVJfVkFSSUFOVCB8fCB1cmlWYXJpYW50IHx8IG13LnVzZXIub3B0aW9ucy5nZXQoJ3ZhcmlhbnQnKSk7XG5cdGNoZWNrYm94Lm9uKCdjaGFuZ2UnLCAoc2VsZWN0ZWQ6IGJvb2xlYW4gfCBzdHJpbmcpOiB2b2lkID0+IHtcblx0XHRkcm9wZG93bi5zZXREaXNhYmxlZCghc2VsZWN0ZWQpO1xuXHR9KTtcblx0Y29uc3QgZ2V0U2VsZWN0ZWRWYXJpYW50ID0gKCk6IHN0cmluZyB8IHVuZGVmaW5lZCA9PiB7XG5cdFx0aWYgKCFjaGVja2JveC5pc1NlbGVjdGVkKCkpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0Y29uc3Qgc2VsZWN0ZWRJdGVtOiBPTy51aS5PcHRpb25XaWRnZXQgfCBudWxsID0gZHJvcGRvd25cblx0XHRcdC5nZXRNZW51KClcblx0XHRcdC5maW5kU2VsZWN0ZWRJdGVtKCkgYXMgT08udWkuT3B0aW9uV2lkZ2V0IHwgbnVsbDtcblx0XHRyZXR1cm4gc2VsZWN0ZWRJdGVtID8gKHNlbGVjdGVkSXRlbS5nZXREYXRhKCkgYXMgc3RyaW5nKSA6IHVuZGVmaW5lZDtcblx0fTtcblx0Y29uc3QgbWFuaXB1bGF0ZUFjdGlvblVybCA9ICgpOiB2b2lkID0+IHtcblx0XHRjb25zdCBzZWxlY3RlZFZhcmlhbnQ6IHN0cmluZyB8IHVuZGVmaW5lZCA9IGdldFNlbGVjdGVkVmFyaWFudCgpO1xuXHRcdGNvbnN0IG9yaWdpbmFsQWN0aW9uOiBzdHJpbmcgfCB1bmRlZmluZWQgPSAkZWRpdEZvcm0uYXR0cignYWN0aW9uJyk7XG5cdFx0aWYgKHNlbGVjdGVkVmFyaWFudCAmJiBvcmlnaW5hbEFjdGlvbikge1xuXHRcdFx0JGVkaXRGb3JtLmF0dHIoXG5cdFx0XHRcdCdhY3Rpb24nLFxuXHRcdFx0XHRuZXcgbXcuVXJpKG9yaWdpbmFsQWN0aW9uKVxuXHRcdFx0XHRcdC5leHRlbmQoe1xuXHRcdFx0XHRcdFx0dmFyaWFudDogc2VsZWN0ZWRWYXJpYW50LFxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0LmdldFJlbGF0aXZlUGF0aCgpXG5cdFx0XHQpO1xuXHRcdH1cblx0fTtcblx0Y29uc3QgbWFuaXB1bGF0ZVZhcmlhbnRDb25maWcgPSAoKTogdm9pZCA9PiB7XG5cdFx0bXcuY29uZmlnLnNldCgnd2dVc2VyVmFyaWFudCcsIGdldFNlbGVjdGVkVmFyaWFudCgpIHx8IChtdy51c2VyLm9wdGlvbnMuZ2V0KCd2YXJpYW50JykgYXMgc3RyaW5nKSk7XG5cdH07XG5cdCRlZGl0Rm9ybVxuXHRcdC5maW5kKCdpbnB1dFtuYW1lPXdwUHJldmlld10nKVxuXHRcdC5vbignY2xpY2snLCBtdy51c2VyLm9wdGlvbnMuZ2V0KCd1c2VsaXZlcHJldmlldycpID8gbWFuaXB1bGF0ZVZhcmlhbnRDb25maWcgOiBtYW5pcHVsYXRlQWN0aW9uVXJsKTtcblx0JHRlbXBsYXRlU2FuZGJveFByZXZpZXcub24oJ2NsaWNrJywgbWFuaXB1bGF0ZUFjdGlvblVybCk7XG5cdGRyb3Bkb3duLmdldE1lbnUoKS5vbignc2VsZWN0JywgbWFuaXB1bGF0ZVZhcmlhbnRDb25maWcpO1xuXHRjb25zdCBjaGVja2JveEZpZWxkOiBPTy51aS5GaWVsZExheW91dDxPTy51aS5DaGVja2JveElucHV0V2lkZ2V0PiA9IG5ldyBPTy51aS5GaWVsZExheW91dChjaGVja2JveCwge1xuXHRcdGFsaWduOiAnaW5saW5lJyxcblx0XHRsYWJlbDogd2luZG93LndnVUxTKCfpooTop4jlrZfor43ovazmjaInLCAn6aCQ6Ka95a2X6Kme6L2J5o+bJyksXG5cdH0pO1xuXHRjb25zdCBkcm9wZG93bkZpZWxkOiBPTy51aS5GaWVsZExheW91dDxPTy51aS5Ecm9wZG93bldpZGdldD4gPSBuZXcgT08udWkuRmllbGRMYXlvdXQoZHJvcGRvd24sIHtcblx0XHRhbGlnbjogJ3RvcCcsXG5cdFx0bGFiZWw6IHdpbmRvdy53Z1VMUygn5L2/55So6K+l6K+t6KiA5Y+Y5L2T5pi+56S66aKE6KeI77yaJywgJ+S9v+eUqOipsuiqnuiogOiuiumrlOmhr+ekuumgkOimve+8micpLFxuXHRcdGludmlzaWJsZUxhYmVsOiB0cnVlLFxuXHR9KTtcblx0JGxheW91dC5hcHBlbmQoJCgnPGRpdj4nKS5hdHRyKCdpZCcsICdwd3YtYXJlYScpLmFwcGVuZChjaGVja2JveEZpZWxkLiRlbGVtZW50LCBkcm9wZG93bkZpZWxkLiRlbGVtZW50KSk7XG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QUFJOEMsMEJBQTBCUixtQkFBbUI7QUFDbkdqQywwQkFBd0IyQixHQUFHLFNBQVNNLG1CQUFtQjtBQUN2RG5CLFdBQVNTLFFBQVEsRUFBRUksR0FBRyxVQUFVYyx1QkFBdUI7QUFDdkQsUUFBTUMsZ0JBQThELElBQUlqQyxHQUFHQyxHQUFHaUMsWUFBWW5DLFVBQVU7SUFDbkdvQyxPQUFPO0lBQ1B2RCxPQUFPQyxPQUFPQyxNQUFNLFVBQVUsUUFBUTtFQUN2QyxDQUFDO0FBQ0QsUUFBTXNELGdCQUF5RCxJQUFJcEMsR0FBR0MsR0FBR2lDLFlBQVk3QixVQUFVO0lBQzlGOEIsT0FBTztJQUNQdkQsT0FBT0MsT0FBT0MsTUFBTSxnQkFBZ0IsY0FBYztJQUNsRHVELGdCQUFnQjtFQUNqQixDQUFDO0FBQ0QzQyxVQUFRNEMsT0FBT0MsRUFBRSxPQUFPLEVBQUVaLEtBQUssTUFBTSxVQUFVLEVBQUVXLE9BQU9MLGNBQWNPLFVBQVVKLGNBQWNJLFFBQVEsQ0FBQztBQUN4RyxDQUFDOyIsCiAgIm5hbWVzIjogWyJWQVJJQU5UUyIsICJkYXRhIiwgImxhYmVsIiwgIndpbmRvdyIsICJ3Z1VMUyIsICJXR19QQUdFX0NPTlRFTlRfTU9ERUwiLCAibXciLCAiY29uZmlnIiwgImdldCIsICJXR19VU0VSX1ZBUklBTlQiLCAiaG9vayIsICJhZGQiLCAiJGVkaXRGb3JtIiwgIiR0ZW1wbGF0ZVNhbmRib3hQcmV2aWV3IiwgImZpbmQiLCAibGVuZ3RoIiwgIiRsYXlvdXQiLCAic2V0IiwgInVyaVZhcmlhbnQiLCAidXRpbCIsICJnZXRQYXJhbVZhbHVlIiwgImNoZWNrYm94IiwgIk9PIiwgInVpIiwgIkNoZWNrYm94SW5wdXRXaWRnZXQiLCAic2VsZWN0ZWQiLCAiQm9vbGVhbiIsICJkcm9wZG93biIsICJEcm9wZG93bldpZGdldCIsICIkb3ZlcmxheSIsICJkaXNhYmxlZCIsICJpc1NlbGVjdGVkIiwgIm1lbnUiLCAiaXRlbXMiLCAibWFwIiwgIk1lbnVPcHRpb25XaWRnZXQiLCAiZ2V0TWVudSIsICJzZWxlY3RJdGVtQnlEYXRhIiwgInVzZXIiLCAib3B0aW9ucyIsICJvbiIsICJzZXREaXNhYmxlZCIsICJnZXRTZWxlY3RlZFZhcmlhbnQiLCAic2VsZWN0ZWRJdGVtIiwgImZpbmRTZWxlY3RlZEl0ZW0iLCAiZ2V0RGF0YSIsICJtYW5pcHVsYXRlQWN0aW9uVXJsIiwgInNlbGVjdGVkVmFyaWFudCIsICJvcmlnaW5hbEFjdGlvbiIsICJhdHRyIiwgIlVyaSIsICJleHRlbmQiLCAidmFyaWFudCIsICJnZXRSZWxhdGl2ZVBhdGgiLCAibWFuaXB1bGF0ZVZhcmlhbnRDb25maWciLCAiY2hlY2tib3hGaWVsZCIsICJGaWVsZExheW91dCIsICJhbGlnbiIsICJkcm9wZG93bkZpZWxkIiwgImludmlzaWJsZUxhYmVsIiwgImFwcGVuZCIsICIkIiwgIiRlbGVtZW50Il0KfQo=

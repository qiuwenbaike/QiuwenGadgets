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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1ByZXZpZXdXaXRoVmFyaWFudC9QcmV2aWV3V2l0aFZhcmlhbnQudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCAnLi9QcmV2aWV3V2l0aFZhcmlhbnQubGVzcyc7XG4vKipcbiAqIEBkZXNjcmlwdGlvbiBBZGQgYSBcIlByZXZpZXcgd2l0aCB2YXJpYW50XCIgb3B0aW9uIHRvIHRoZSBlZGl0IGZvcm0uXG4gKi9cbm13Lmhvb2soJ3dpa2lwYWdlLmVkaXRmb3JtJykuYWRkKCgkZWRpdEZvcm0pOiB2b2lkID0+IHtcblx0Ly8gR3VhcmQgYWdhaW5zdCBkb3VibGUgaW5jbHVzaW9uc1xuXHRpZiAobXcuY29uZmlnLmdldCgnd2dQcmV2aWV3V2l0aFZhcmlhbnRJbml0aWFsaXplZCcpKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdGNvbnN0ICR0ZW1wbGF0ZVNhbmRib3hQcmV2aWV3OiBKUXVlcnkgPSAkZWRpdEZvcm0uZmluZCgnaW5wdXRbbmFtZT1cIndwVGVtcGxhdGVTYW5kYm94UHJldmlld1wiXScpO1xuXHQvLyBJdCBpcyBwb3NzaWJsZSB0aGF0IGEgdXNlciB3YW50IHRvIHByZXZpZXcgYSBwYWdlIHdpdGggYSBub24td2lraXRleHQgbW9kdWxlXG5cdC8vIERvIG5vdCByZXR1cm4gaW4gdGhpcyBjYXNlXG5cdGlmIChtdy5jb25maWcuZ2V0KCd3Z1BhZ2VDb250ZW50TW9kZWwnKSAhPT0gJ3dpa2l0ZXh0JyAmJiAhJHRlbXBsYXRlU2FuZGJveFByZXZpZXcubGVuZ3RoKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdGNvbnN0ICRsYXlvdXQ6IEpRdWVyeSA9ICRlZGl0Rm9ybS5maW5kKCcuZWRpdENoZWNrYm94ZXMgLm9vLXVpLWhvcml6b250YWxMYXlvdXQnKTtcblx0aWYgKCEkbGF5b3V0Lmxlbmd0aCkge1xuXHRcdHJldHVybjtcblx0fVxuXHQvLyBHdWFyZCBhZ2FpbnN0IGRvdWJsZSBpbmNsdXNpb25zXG5cdG13LmNvbmZpZy5zZXQoJ3dnUHJldmlld1dpdGhWYXJpYW50SW5pdGlhbGl6ZWQnLCB0cnVlKTtcblx0Y29uc3QgVkFSSUFOVFM6IHtcblx0XHRkYXRhOiBzdHJpbmc7XG5cdFx0bGFiZWw6IHN0cmluZztcblx0fVtdID0gW1xuXHRcdHtcblx0XHRcdGRhdGE6ICd6aCcsXG5cdFx0XHRsYWJlbDogd2luZG93LndnVUxTKCfkuI3ovazmjaInLCAn5LiN6L2J5o+bJyksXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRkYXRhOiAnemgtaGFucycsXG5cdFx0XHRsYWJlbDogJ+eugOS9kycsXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRkYXRhOiAnemgtaGFudCcsXG5cdFx0XHRsYWJlbDogJ+e5gemrlCcsXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRkYXRhOiAnemgtY24nLFxuXHRcdFx0bGFiZWw6ICfkuK3lm73lpKfpmYbnroDkvZMnLFxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0ZGF0YTogJ3poLWhrJyxcblx0XHRcdGxhYmVsOiAn5Lit5ZyL6aaZ5riv57mB6auUJyxcblx0XHR9LFxuXHRcdHtcblx0XHRcdGRhdGE6ICd6aC1tbycsXG5cdFx0XHRsYWJlbDogJ+S4reWci+a+s+mWgOe5gemrlCcsXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRkYXRhOiAnemgtbXknLFxuXHRcdFx0bGFiZWw6ICfpqazmnaXopb/kuprnroDkvZMnLFxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0ZGF0YTogJ3poLXNnJyxcblx0XHRcdGxhYmVsOiAn5paw5Yqg5Z2h566A5L2TJyxcblx0XHR9LFxuXHRcdHtcblx0XHRcdGRhdGE6ICd6aC10dycsXG5cdFx0XHRsYWJlbDogJ+S4reWci+iHuueBo+e5gemrlCcsXG5cdFx0fSxcblx0XTtcblx0Y29uc3QgdXJpVmFyaWFudDogc3RyaW5nIHwgbnVsbCA9IG13LnV0aWwuZ2V0UGFyYW1WYWx1ZSgndmFyaWFudCcpO1xuXHRjb25zdCBjaGVja2JveDogT08udWkuQ2hlY2tib3hJbnB1dFdpZGdldCA9IG5ldyBPTy51aS5DaGVja2JveElucHV0V2lkZ2V0KHtcblx0XHRzZWxlY3RlZDogQm9vbGVhbih1cmlWYXJpYW50KSxcblx0fSk7XG5cdGNvbnN0IGRyb3Bkb3duOiBPTy51aS5Ecm9wZG93bldpZGdldCA9IG5ldyBPTy51aS5Ecm9wZG93bldpZGdldCh7XG5cdFx0JG92ZXJsYXk6IHRydWUsXG5cdFx0ZGlzYWJsZWQ6ICFjaGVja2JveC5pc1NlbGVjdGVkKCksXG5cdFx0bWVudToge1xuXHRcdFx0aXRlbXM6IFZBUklBTlRTLm1hcCgoe2RhdGEsIGxhYmVsfSk6IE9PLnVpLk1lbnVPcHRpb25XaWRnZXQgPT4ge1xuXHRcdFx0XHRyZXR1cm4gbmV3IE9PLnVpLk1lbnVPcHRpb25XaWRnZXQoe1xuXHRcdFx0XHRcdGRhdGEsXG5cdFx0XHRcdFx0bGFiZWwsXG5cdFx0XHRcdH0pO1xuXHRcdFx0fSksXG5cdFx0fSxcblx0fSk7XG5cdGRyb3Bkb3duLmdldE1lbnUoKS5zZWxlY3RJdGVtQnlEYXRhKG13LmNvbmZpZy5nZXQoJ3dnVXNlclZhcmlhbnQnKSB8fCB1cmlWYXJpYW50IHx8IG13LnVzZXIub3B0aW9ucy5nZXQoJ3ZhcmlhbnQnKSk7XG5cdGNoZWNrYm94Lm9uKCdjaGFuZ2UnLCAoc2VsZWN0ZWQ6IGJvb2xlYW4gfCBzdHJpbmcpOiB2b2lkID0+IHtcblx0XHRkcm9wZG93bi5zZXREaXNhYmxlZCghc2VsZWN0ZWQpO1xuXHR9KTtcblx0Y29uc3QgZ2V0U2VsZWN0ZWRWYXJpYW50ID0gKCk6IHN0cmluZyB8IHVuZGVmaW5lZCA9PiB7XG5cdFx0aWYgKCFjaGVja2JveC5pc1NlbGVjdGVkKCkpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0Y29uc3Qgc2VsZWN0ZWRJdGVtOiBPTy51aS5PcHRpb25XaWRnZXQgfCBudWxsID0gZHJvcGRvd25cblx0XHRcdC5nZXRNZW51KClcblx0XHRcdC5maW5kU2VsZWN0ZWRJdGVtKCkgYXMgT08udWkuT3B0aW9uV2lkZ2V0IHwgbnVsbDtcblx0XHRyZXR1cm4gc2VsZWN0ZWRJdGVtID8gKHNlbGVjdGVkSXRlbS5nZXREYXRhKCkgYXMgc3RyaW5nKSA6IHVuZGVmaW5lZDtcblx0fTtcblx0Y29uc3QgbWFuaXB1bGF0ZUFjdGlvblVybCA9ICgpOiB2b2lkID0+IHtcblx0XHRjb25zdCBzZWxlY3RlZFZhcmlhbnQ6IHN0cmluZyB8IHVuZGVmaW5lZCA9IGdldFNlbGVjdGVkVmFyaWFudCgpO1xuXHRcdGNvbnN0IG9yaWdpbmFsQWN0aW9uOiBzdHJpbmcgfCB1bmRlZmluZWQgPSAkZWRpdEZvcm0uYXR0cignYWN0aW9uJyk7XG5cdFx0aWYgKHNlbGVjdGVkVmFyaWFudCAmJiBvcmlnaW5hbEFjdGlvbikge1xuXHRcdFx0JGVkaXRGb3JtLmF0dHIoXG5cdFx0XHRcdCdhY3Rpb24nLFxuXHRcdFx0XHRuZXcgbXcuVXJpKG9yaWdpbmFsQWN0aW9uKVxuXHRcdFx0XHRcdC5leHRlbmQoe1xuXHRcdFx0XHRcdFx0dmFyaWFudDogc2VsZWN0ZWRWYXJpYW50LFxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0LmdldFJlbGF0aXZlUGF0aCgpXG5cdFx0XHQpO1xuXHRcdH1cblx0fTtcblx0Y29uc3QgbWFuaXB1bGF0ZVZhcmlhbnRDb25maWcgPSAoKTogdm9pZCA9PiB7XG5cdFx0bXcuY29uZmlnLnNldCgnd2dVc2VyVmFyaWFudCcsIGdldFNlbGVjdGVkVmFyaWFudCgpIHx8IChtdy51c2VyLm9wdGlvbnMuZ2V0KCd2YXJpYW50JykgYXMgc3RyaW5nKSk7XG5cdH07XG5cdCRlZGl0Rm9ybVxuXHRcdC5maW5kKCdpbnB1dFtuYW1lPXdwUHJldmlld10nKVxuXHRcdC5vbignY2xpY2snLCBtdy51c2VyLm9wdGlvbnMuZ2V0KCd1c2VsaXZlcHJldmlldycpID8gbWFuaXB1bGF0ZVZhcmlhbnRDb25maWcgOiBtYW5pcHVsYXRlQWN0aW9uVXJsKTtcblx0JHRlbXBsYXRlU2FuZGJveFByZXZpZXcub24oJ2NsaWNrJywgbWFuaXB1bGF0ZUFjdGlvblVybCk7XG5cdGRyb3Bkb3duLmdldE1lbnUoKS5vbignc2VsZWN0JywgbWFuaXB1bGF0ZVZhcmlhbnRDb25maWcpO1xuXHRjb25zdCBjaGVja2JveEZpZWxkOiBPTy51aS5GaWVsZExheW91dDxPTy51aS5DaGVja2JveElucHV0V2lkZ2V0PiA9IG5ldyBPTy51aS5GaWVsZExheW91dChjaGVja2JveCwge1xuXHRcdGFsaWduOiAnaW5saW5lJyxcblx0XHRsYWJlbDogd2luZG93LndnVUxTKCfpooTop4jlrZfor43ovazmjaInLCAn6aCQ6Ka95a2X6Kme6L2J5o+bJyksXG5cdH0pO1xuXHRjb25zdCBkcm9wZG93bkZpZWxkOiBPTy51aS5GaWVsZExheW91dDxPTy51aS5Ecm9wZG93bldpZGdldD4gPSBuZXcgT08udWkuRmllbGRMYXlvdXQoZHJvcGRvd24sIHtcblx0XHRhbGlnbjogJ3RvcCcsXG5cdFx0bGFiZWw6IHdpbmRvdy53Z1VMUygn5L2/55So6K+l6K+t6KiA5Y+Y5L2T5pi+56S66aKE6KeI77yaJywgJ+S9v+eUqOipsuiqnuiogOiuiumrlOmhr+ekuumgkOimve+8micpLFxuXHRcdGludmlzaWJsZUxhYmVsOiB0cnVlLFxuXHR9KTtcblx0JGxheW91dC5hcHBlbmQoJCgnPGRpdj4nKS5hdHRyKCdpZCcsICdwd3YtYXJlYScpLmFwcGVuZChjaGVja2JveEZpZWxkLiRlbGVtZW50LCBkcm9wZG93bkZpZWxkLiRlbGVtZW50KSk7XG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSUFBLEdBQUdDLEtBQUssbUJBQW1CLEVBQUVDLElBQUtDLGVBQW9CO0FBRXJELE1BQUlILEdBQUdJLE9BQU9DLElBQUksaUNBQWlDLEdBQUc7QUFDckQ7RUFDRDtBQUNBLFFBQU1DLDBCQUFrQ0gsVUFBVUksS0FBSyx3Q0FBd0M7QUFHL0YsTUFBSVAsR0FBR0ksT0FBT0MsSUFBSSxvQkFBb0IsTUFBTSxjQUFjLENBQUNDLHdCQUF3QkUsUUFBUTtBQUMxRjtFQUNEO0FBQ0EsUUFBTUMsVUFBa0JOLFVBQVVJLEtBQUsseUNBQXlDO0FBQ2hGLE1BQUksQ0FBQ0UsUUFBUUQsUUFBUTtBQUNwQjtFQUNEO0FBRUFSLEtBQUdJLE9BQU9NLElBQUksbUNBQW1DLElBQUk7QUFDckQsUUFBTUMsV0FHQSxDQUNMO0lBQ0NDLE1BQU07SUFDTkMsT0FBT0MsT0FBT0MsTUFBTSxPQUFPLEtBQUs7RUFDakMsR0FDQTtJQUNDSCxNQUFNO0lBQ05DLE9BQU87RUFDUixHQUNBO0lBQ0NELE1BQU07SUFDTkMsT0FBTztFQUNSLEdBQ0E7SUFDQ0QsTUFBTTtJQUNOQyxPQUFPO0VBQ1IsR0FDQTtJQUNDRCxNQUFNO0lBQ05DLE9BQU87RUFDUixHQUNBO0lBQ0NELE1BQU07SUFDTkMsT0FBTztFQUNSLEdBQ0E7SUFDQ0QsTUFBTTtJQUNOQyxPQUFPO0VBQ1IsR0FDQTtJQUNDRCxNQUFNO0lBQ05DLE9BQU87RUFDUixHQUNBO0lBQ0NELE1BQU07SUFDTkMsT0FBTztFQUNSLENBQUE7QUFFRCxRQUFNRyxhQUE0QmhCLEdBQUdpQixLQUFLQyxjQUFjLFNBQVM7QUFDakUsUUFBTUMsV0FBc0MsSUFBSUMsR0FBR0MsR0FBR0Msb0JBQW9CO0lBQ3pFQyxVQUFVQyxRQUFRUixVQUFVO0VBQzdCLENBQUM7QUFDRCxRQUFNUyxXQUFpQyxJQUFJTCxHQUFHQyxHQUFHSyxlQUFlO0lBQy9EQyxVQUFVO0lBQ1ZDLFVBQVUsQ0FBQ1QsU0FBU1UsV0FBVztJQUMvQkMsTUFBTTtNQUNMQyxPQUFPcEIsU0FBU3FCLElBQUksQ0FBQztRQUFDcEI7UUFBTUM7TUFBSyxNQUE4QjtBQUM5RCxlQUFPLElBQUlPLEdBQUdDLEdBQUdZLGlCQUFpQjtVQUNqQ3JCO1VBQ0FDO1FBQ0QsQ0FBQztNQUNGLENBQUM7SUFDRjtFQUNELENBQUM7QUFDRFksV0FBU1MsUUFBUSxFQUFFQyxpQkFBaUJuQyxHQUFHSSxPQUFPQyxJQUFJLGVBQWUsS0FBS1csY0FBY2hCLEdBQUdvQyxLQUFLQyxRQUFRaEMsSUFBSSxTQUFTLENBQUM7QUFDbEhjLFdBQVNtQixHQUFHLFVBQVdmLGNBQXFDO0FBQzNERSxhQUFTYyxZQUFZLENBQUNoQixRQUFRO0VBQy9CLENBQUM7QUFDRCxRQUFNaUIscUJBQXFCQSxNQUEwQjtBQUNwRCxRQUFJLENBQUNyQixTQUFTVSxXQUFXLEdBQUc7QUFDM0I7SUFDRDtBQUNBLFVBQU1ZLGVBQTBDaEIsU0FDOUNTLFFBQVEsRUFDUlEsaUJBQWlCO0FBQ25CLFdBQU9ELGVBQWdCQSxhQUFhRSxRQUFRLElBQWU7RUFDNUQ7QUFDQSxRQUFNQyxzQkFBc0JBLE1BQVk7QUFDdkMsVUFBTUMsa0JBQXNDTCxtQkFBbUI7QUFDL0QsVUFBTU0saUJBQXFDM0MsVUFBVTRDLEtBQUssUUFBUTtBQUNsRSxRQUFJRixtQkFBbUJDLGdCQUFnQjtBQUN0QzNDLGdCQUFVNEMsS0FDVCxVQUNBLElBQUkvQyxHQUFHZ0QsSUFBSUYsY0FBYyxFQUN2QkcsT0FBTztRQUNQQyxTQUFTTDtNQUNWLENBQUMsRUFDQU0sZ0JBQWdCLENBQ25CO0lBQ0Q7RUFDRDtBQUNBLFFBQU1DLDBCQUEwQkEsTUFBWTtBQUMzQ3BELE9BQUdJLE9BQU9NLElBQUksaUJBQWlCOEIsbUJBQW1CLEtBQU14QyxHQUFHb0MsS0FBS0MsUUFBUWhDLElBQUksU0FBUyxDQUFZO0VBQ2xHO0FBQ0FGLFlBQ0VJLEtBQUssdUJBQXVCLEVBQzVCK0IsR0FBRyxTQUFTdEMsR0FBR29DLEtBQUtDLFFBQVFoQyxJQUFJLGdCQUFnQixJQUFJK0MsMEJBQTBCUixtQkFBbUI7QUFDbkd0QywwQkFBd0JnQyxHQUFHLFNBQVNNLG1CQUFtQjtBQUN2RG5CLFdBQVNTLFFBQVEsRUFBRUksR0FBRyxVQUFVYyx1QkFBdUI7QUFDdkQsUUFBTUMsZ0JBQThELElBQUlqQyxHQUFHQyxHQUFHaUMsWUFBWW5DLFVBQVU7SUFDbkdvQyxPQUFPO0lBQ1AxQyxPQUFPQyxPQUFPQyxNQUFNLFVBQVUsUUFBUTtFQUN2QyxDQUFDO0FBQ0QsUUFBTXlDLGdCQUF5RCxJQUFJcEMsR0FBR0MsR0FBR2lDLFlBQVk3QixVQUFVO0lBQzlGOEIsT0FBTztJQUNQMUMsT0FBT0MsT0FBT0MsTUFBTSxnQkFBZ0IsY0FBYztJQUNsRDBDLGdCQUFnQjtFQUNqQixDQUFDO0FBQ0RoRCxVQUFRaUQsT0FBT0MsRUFBRSxPQUFPLEVBQUVaLEtBQUssTUFBTSxVQUFVLEVBQUVXLE9BQU9MLGNBQWNPLFVBQVVKLGNBQWNJLFFBQVEsQ0FBQztBQUN4RyxDQUFDOyIsCiAgIm5hbWVzIjogWyJtdyIsICJob29rIiwgImFkZCIsICIkZWRpdEZvcm0iLCAiY29uZmlnIiwgImdldCIsICIkdGVtcGxhdGVTYW5kYm94UHJldmlldyIsICJmaW5kIiwgImxlbmd0aCIsICIkbGF5b3V0IiwgInNldCIsICJWQVJJQU5UUyIsICJkYXRhIiwgImxhYmVsIiwgIndpbmRvdyIsICJ3Z1VMUyIsICJ1cmlWYXJpYW50IiwgInV0aWwiLCAiZ2V0UGFyYW1WYWx1ZSIsICJjaGVja2JveCIsICJPTyIsICJ1aSIsICJDaGVja2JveElucHV0V2lkZ2V0IiwgInNlbGVjdGVkIiwgIkJvb2xlYW4iLCAiZHJvcGRvd24iLCAiRHJvcGRvd25XaWRnZXQiLCAiJG92ZXJsYXkiLCAiZGlzYWJsZWQiLCAiaXNTZWxlY3RlZCIsICJtZW51IiwgIml0ZW1zIiwgIm1hcCIsICJNZW51T3B0aW9uV2lkZ2V0IiwgImdldE1lbnUiLCAic2VsZWN0SXRlbUJ5RGF0YSIsICJ1c2VyIiwgIm9wdGlvbnMiLCAib24iLCAic2V0RGlzYWJsZWQiLCAiZ2V0U2VsZWN0ZWRWYXJpYW50IiwgInNlbGVjdGVkSXRlbSIsICJmaW5kU2VsZWN0ZWRJdGVtIiwgImdldERhdGEiLCAibWFuaXB1bGF0ZUFjdGlvblVybCIsICJzZWxlY3RlZFZhcmlhbnQiLCAib3JpZ2luYWxBY3Rpb24iLCAiYXR0ciIsICJVcmkiLCAiZXh0ZW5kIiwgInZhcmlhbnQiLCAiZ2V0UmVsYXRpdmVQYXRoIiwgIm1hbmlwdWxhdGVWYXJpYW50Q29uZmlnIiwgImNoZWNrYm94RmllbGQiLCAiRmllbGRMYXlvdXQiLCAiYWxpZ24iLCAiZHJvcGRvd25GaWVsZCIsICJpbnZpc2libGVMYWJlbCIsICJhcHBlbmQiLCAiJCIsICIkZWxlbWVudCJdCn0K

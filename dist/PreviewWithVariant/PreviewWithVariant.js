/**
 * SPDX-License-Identifier: MIT + CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 * _addText: '{{Gadget Header|license=MIT|attribution=Diskdance, Lt2818}}'
 *
 * @base {@link https://zh.wikipedia.org/wiki/MediaWiki:Gadget-PreviewWithVariant.js}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/PreviewWithVariant}
 * @license MIT {@link https://zh.wikipedia.org/wiki/MediaWiki:Gadget-PreviewWithVariant.js}
 * @license CC-BY-SA-4.0 {@link https://www.qiuwenbaike.cn/wiki/H:CC-BY-SA-4.0}
 */

/**
 * Copyright Diskdance, Lt2818
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
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
//! src/PreviewWithVariant/options.json
var configKey = "gadget-PreviewWithVariant__Initialized";
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
//! src/PreviewWithVariant/modules/processWikiEditor.ts
var processWikiEditor = ($editForm) => {
  if (mw.config.get(configKey)) {
    return;
  }
  const {
    wgPageContentModel,
    wgUserVariant
  } = mw.config.get();
  const $templateSandboxPreview = $editForm.find('input[name="wpTemplateSandboxPreview"]');
  if (wgPageContentModel !== "wikitext" && !$templateSandboxPreview.length) {
    return;
  }
  const $layout = $editForm.find(".editCheckboxes .oo-ui-horizontalLayout");
  if (!$layout.length) {
    return;
  }
  mw.config.set(configKey, true);
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
  dropdown.getMenu().selectItemByData(wgUserVariant || uriVariant || mw.user.options.get("variant"));
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
};
//! src/PreviewWithVariant/PreviewWithVariant.ts
(function previewWithVariants() {
  mw.hook("wikipage.editform").add(($editForm) => {
    processWikiEditor($editForm);
  });
})();

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1ByZXZpZXdXaXRoVmFyaWFudC9vcHRpb25zLmpzb24iLCAic3JjL1ByZXZpZXdXaXRoVmFyaWFudC9tb2R1bGVzL2NvbnN0YW50LnRzIiwgInNyYy9QcmV2aWV3V2l0aFZhcmlhbnQvbW9kdWxlcy9wcm9jZXNzV2lraUVkaXRvci50cyIsICJzcmMvUHJldmlld1dpdGhWYXJpYW50L1ByZXZpZXdXaXRoVmFyaWFudC50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsie1xuXHRcImNvbmZpZ0tleVwiOiBcImdhZGdldC1QcmV2aWV3V2l0aFZhcmlhbnRfX0luaXRpYWxpemVkXCJcbn1cbiIsICJjb25zdCBWQVJJQU5UUzoge1xuXHRkYXRhOiBzdHJpbmc7XG5cdGxhYmVsOiBzdHJpbmc7XG59W10gPSBbXG5cdHtcblx0XHRkYXRhOiAnemgnLFxuXHRcdGxhYmVsOiB3aW5kb3cud2dVTFMoJ+S4jei9rOaNoicsICfkuI3ovYnmj5snKSxcblx0fSxcblx0e1xuXHRcdGRhdGE6ICd6aC1oYW5zJyxcblx0XHRsYWJlbDogJ+eugOS9kycsXG5cdH0sXG5cdHtcblx0XHRkYXRhOiAnemgtaGFudCcsXG5cdFx0bGFiZWw6ICfnuYHpq5QnLFxuXHR9LFxuXHR7XG5cdFx0ZGF0YTogJ3poLWNuJyxcblx0XHRsYWJlbDogJ+S4reWbveWkp+mZhueugOS9kycsXG5cdH0sXG5cdHtcblx0XHRkYXRhOiAnemgtaGsnLFxuXHRcdGxhYmVsOiAn5Lit5ZyL6aaZ5riv57mB6auUJyxcblx0fSxcblx0e1xuXHRcdGRhdGE6ICd6aC1tbycsXG5cdFx0bGFiZWw6ICfkuK3lnIvmvrPploDnuYHpq5QnLFxuXHR9LFxuXHR7XG5cdFx0ZGF0YTogJ3poLW15Jyxcblx0XHRsYWJlbDogJ+mprOadpeilv+S6mueugOS9kycsXG5cdH0sXG5cdHtcblx0XHRkYXRhOiAnemgtc2cnLFxuXHRcdGxhYmVsOiAn5paw5Yqg5Z2h566A5L2TJyxcblx0fSxcblx0e1xuXHRcdGRhdGE6ICd6aC10dycsXG5cdFx0bGFiZWw6ICfkuK3lnIvoh7rngaPnuYHpq5QnLFxuXHR9LFxuXTtcblxuZXhwb3J0IHtWQVJJQU5UU307XG4iLCAiaW1wb3J0ICcuL3Byb2Nlc3NXaWtpRWRpdG9yLmxlc3MnO1xuaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtWQVJJQU5UU30gZnJvbSAnLi9jb25zdGFudCc7XG4vKipcbiAqIEBkZXNjcmlwdGlvbiBBZGQgYSBcIlByZXZpZXcgd2l0aCB2YXJpYW50XCIgb3B0aW9uIHRvIHRoZSBlZGl0IGZvcm0uXG4gKlxuICogQHBhcmFtIHtKUXVlcnl9ICRlZGl0Rm9ybVxuICovXG5jb25zdCBwcm9jZXNzV2lraUVkaXRvciA9ICgkZWRpdEZvcm06IEpRdWVyeTxIVE1MRWxlbWVudD4pOiB2b2lkID0+IHtcblx0Ly8gR3VhcmQgYWdhaW5zdCBkb3VibGUgaW5jbHVzaW9uc1xuXHRpZiAobXcuY29uZmlnLmdldChPUFRJT05TLmNvbmZpZ0tleSkpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCB7d2dQYWdlQ29udGVudE1vZGVsLCB3Z1VzZXJWYXJpYW50fSA9IG13LmNvbmZpZy5nZXQoKTtcblx0Y29uc3QgJHRlbXBsYXRlU2FuZGJveFByZXZpZXc6IEpRdWVyeSA9ICRlZGl0Rm9ybS5maW5kKCdpbnB1dFtuYW1lPVwid3BUZW1wbGF0ZVNhbmRib3hQcmV2aWV3XCJdJyk7XG5cblx0Ly8gSXQgaXMgcG9zc2libGUgdGhhdCBhIHVzZXIgd2FudCB0byBwcmV2aWV3IGEgcGFnZSB3aXRoIGEgbm9uLXdpa2l0ZXh0IG1vZHVsZVxuXHQvLyBEbyBub3QgcmV0dXJuIGluIHRoaXMgY2FzZVxuXHRpZiAod2dQYWdlQ29udGVudE1vZGVsICE9PSAnd2lraXRleHQnICYmICEkdGVtcGxhdGVTYW5kYm94UHJldmlldy5sZW5ndGgpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCAkbGF5b3V0OiBKUXVlcnkgPSAkZWRpdEZvcm0uZmluZCgnLmVkaXRDaGVja2JveGVzIC5vby11aS1ob3Jpem9udGFsTGF5b3V0Jyk7XG5cdGlmICghJGxheW91dC5sZW5ndGgpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRtdy5jb25maWcuc2V0KE9QVElPTlMuY29uZmlnS2V5LCB0cnVlKTtcblxuXHRjb25zdCB1cmlWYXJpYW50OiBzdHJpbmcgfCBudWxsID0gbXcudXRpbC5nZXRQYXJhbVZhbHVlKCd2YXJpYW50Jyk7XG5cblx0Y29uc3QgY2hlY2tib3g6IE9PLnVpLkNoZWNrYm94SW5wdXRXaWRnZXQgPSBuZXcgT08udWkuQ2hlY2tib3hJbnB1dFdpZGdldCh7XG5cdFx0c2VsZWN0ZWQ6IEJvb2xlYW4odXJpVmFyaWFudCksXG5cdH0pO1xuXG5cdGNvbnN0IGRyb3Bkb3duOiBPTy51aS5Ecm9wZG93bldpZGdldCA9IG5ldyBPTy51aS5Ecm9wZG93bldpZGdldCh7XG5cdFx0JG92ZXJsYXk6IHRydWUsXG5cdFx0ZGlzYWJsZWQ6ICFjaGVja2JveC5pc1NlbGVjdGVkKCksXG5cdFx0bWVudToge1xuXHRcdFx0aXRlbXM6IFZBUklBTlRTLm1hcCgoe2RhdGEsIGxhYmVsfSk6IE9PLnVpLk1lbnVPcHRpb25XaWRnZXQgPT4ge1xuXHRcdFx0XHRyZXR1cm4gbmV3IE9PLnVpLk1lbnVPcHRpb25XaWRnZXQoe1xuXHRcdFx0XHRcdGRhdGEsXG5cdFx0XHRcdFx0bGFiZWwsXG5cdFx0XHRcdH0pO1xuXHRcdFx0fSksXG5cdFx0fSxcblx0fSk7XG5cblx0ZHJvcGRvd24uZ2V0TWVudSgpLnNlbGVjdEl0ZW1CeURhdGEod2dVc2VyVmFyaWFudCB8fCB1cmlWYXJpYW50IHx8IG13LnVzZXIub3B0aW9ucy5nZXQoJ3ZhcmlhbnQnKSk7XG5cblx0Y2hlY2tib3gub24oJ2NoYW5nZScsIChzZWxlY3RlZDogYm9vbGVhbiB8IHN0cmluZyk6IHZvaWQgPT4ge1xuXHRcdGRyb3Bkb3duLnNldERpc2FibGVkKCFzZWxlY3RlZCk7XG5cdH0pO1xuXG5cdGNvbnN0IGdldFNlbGVjdGVkVmFyaWFudCA9ICgpOiBzdHJpbmcgfCB1bmRlZmluZWQgPT4ge1xuXHRcdGlmICghY2hlY2tib3guaXNTZWxlY3RlZCgpKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGNvbnN0IHNlbGVjdGVkSXRlbTogT08udWkuT3B0aW9uV2lkZ2V0IHwgbnVsbCA9IGRyb3Bkb3duXG5cdFx0XHQuZ2V0TWVudSgpXG5cdFx0XHQuZmluZFNlbGVjdGVkSXRlbSgpIGFzIE9PLnVpLk9wdGlvbldpZGdldCB8IG51bGw7XG5cdFx0cmV0dXJuIHNlbGVjdGVkSXRlbSA/IChzZWxlY3RlZEl0ZW0uZ2V0RGF0YSgpIGFzIHN0cmluZykgOiB1bmRlZmluZWQ7XG5cdH07XG5cblx0Y29uc3QgbWFuaXB1bGF0ZUFjdGlvblVybCA9ICgpOiB2b2lkID0+IHtcblx0XHRjb25zdCBzZWxlY3RlZFZhcmlhbnQ6IHN0cmluZyB8IHVuZGVmaW5lZCA9IGdldFNlbGVjdGVkVmFyaWFudCgpO1xuXHRcdGNvbnN0IG9yaWdpbmFsQWN0aW9uOiBzdHJpbmcgfCB1bmRlZmluZWQgPSAkZWRpdEZvcm0uYXR0cignYWN0aW9uJyk7XG5cdFx0aWYgKHNlbGVjdGVkVmFyaWFudCAmJiBvcmlnaW5hbEFjdGlvbikge1xuXHRcdFx0JGVkaXRGb3JtLmF0dHIoXG5cdFx0XHRcdCdhY3Rpb24nLFxuXHRcdFx0XHRuZXcgbXcuVXJpKG9yaWdpbmFsQWN0aW9uKVxuXHRcdFx0XHRcdC5leHRlbmQoe1xuXHRcdFx0XHRcdFx0dmFyaWFudDogc2VsZWN0ZWRWYXJpYW50LFxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0LmdldFJlbGF0aXZlUGF0aCgpXG5cdFx0XHQpO1xuXHRcdH1cblx0fTtcblxuXHRjb25zdCBtYW5pcHVsYXRlVmFyaWFudENvbmZpZyA9ICgpOiB2b2lkID0+IHtcblx0XHRtdy5jb25maWcuc2V0KCd3Z1VzZXJWYXJpYW50JywgZ2V0U2VsZWN0ZWRWYXJpYW50KCkgfHwgKG13LnVzZXIub3B0aW9ucy5nZXQoJ3ZhcmlhbnQnKSBhcyBzdHJpbmcpKTtcblx0fTtcblxuXHQkZWRpdEZvcm1cblx0XHQuZmluZCgnaW5wdXRbbmFtZT13cFByZXZpZXddJylcblx0XHQub24oJ2NsaWNrJywgbXcudXNlci5vcHRpb25zLmdldCgndXNlbGl2ZXByZXZpZXcnKSA/IG1hbmlwdWxhdGVWYXJpYW50Q29uZmlnIDogbWFuaXB1bGF0ZUFjdGlvblVybCk7XG5cblx0JHRlbXBsYXRlU2FuZGJveFByZXZpZXcub24oJ2NsaWNrJywgbWFuaXB1bGF0ZUFjdGlvblVybCk7XG5cblx0ZHJvcGRvd24uZ2V0TWVudSgpLm9uKCdzZWxlY3QnLCBtYW5pcHVsYXRlVmFyaWFudENvbmZpZyk7XG5cblx0Y29uc3QgY2hlY2tib3hGaWVsZDogT08udWkuRmllbGRMYXlvdXQ8T08udWkuQ2hlY2tib3hJbnB1dFdpZGdldD4gPSBuZXcgT08udWkuRmllbGRMYXlvdXQoY2hlY2tib3gsIHtcblx0XHRhbGlnbjogJ2lubGluZScsXG5cdFx0bGFiZWw6IHdpbmRvdy53Z1VMUygn6aKE6KeI5a2X6K+N6L2s5o2iJywgJ+mgkOimveWtl+ipnui9ieaPmycpLFxuXHR9KTtcblxuXHRjb25zdCBkcm9wZG93bkZpZWxkOiBPTy51aS5GaWVsZExheW91dDxPTy51aS5Ecm9wZG93bldpZGdldD4gPSBuZXcgT08udWkuRmllbGRMYXlvdXQoZHJvcGRvd24sIHtcblx0XHRhbGlnbjogJ3RvcCcsXG5cdFx0bGFiZWw6IHdpbmRvdy53Z1VMUygn5L2/55So6K+l6K+t6KiA5Y+Y5L2T5pi+56S66aKE6KeI77yaJywgJ+S9v+eUqOipsuiqnuiogOiuiumrlOmhr+ekuumgkOimve+8micpLFxuXHRcdGludmlzaWJsZUxhYmVsOiB0cnVlLFxuXHR9KTtcblxuXHQkbGF5b3V0LmFwcGVuZCgkKCc8ZGl2PicpLmF0dHIoJ2lkJywgJ3B3di1hcmVhJykuYXBwZW5kKGNoZWNrYm94RmllbGQuJGVsZW1lbnQsIGRyb3Bkb3duRmllbGQuJGVsZW1lbnQpKTtcbn07XG5cbmV4cG9ydCB7cHJvY2Vzc1dpa2lFZGl0b3J9O1xuIiwgImltcG9ydCB7cHJvY2Vzc1dpa2lFZGl0b3J9IGZyb20gJy4vbW9kdWxlcy9wcm9jZXNzV2lraUVkaXRvcic7XG5cbihmdW5jdGlvbiBwcmV2aWV3V2l0aFZhcmlhbnRzKCk6IHZvaWQge1xuXHRtdy5ob29rKCd3aWtpcGFnZS5lZGl0Zm9ybScpLmFkZCgoJGVkaXRGb3JtKTogdm9pZCA9PiB7XG5cdFx0cHJvY2Vzc1dpa2lFZGl0b3IoJGVkaXRGb3JtKTtcblx0fSk7XG59KSgpO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNDLElBQUFBLFlBQWE7O0FDRGQsSUFBTUMsV0FHQSxDQUNMO0VBQ0NDLE1BQU07RUFDTkMsT0FBT0MsT0FBT0MsTUFBTSxPQUFPLEtBQUs7QUFDakMsR0FDQTtFQUNDSCxNQUFNO0VBQ05DLE9BQU87QUFDUixHQUNBO0VBQ0NELE1BQU07RUFDTkMsT0FBTztBQUNSLEdBQ0E7RUFDQ0QsTUFBTTtFQUNOQyxPQUFPO0FBQ1IsR0FDQTtFQUNDRCxNQUFNO0VBQ05DLE9BQU87QUFDUixHQUNBO0VBQ0NELE1BQU07RUFDTkMsT0FBTztBQUNSLEdBQ0E7RUFDQ0QsTUFBTTtFQUNOQyxPQUFPO0FBQ1IsR0FDQTtFQUNDRCxNQUFNO0VBQ05DLE9BQU87QUFDUixHQUNBO0VBQ0NELE1BQU07RUFDTkMsT0FBTztBQUNSLENBQUE7O0FDL0JELElBQU1HLG9CQUFxQkMsZUFBeUM7QUFFbkUsTUFBSUMsR0FBR0MsT0FBT0MsSUFBWVYsU0FBUyxHQUFHO0FBQ3JDO0VBQ0Q7QUFFQSxRQUFNO0lBQUNXO0lBQW9CQztFQUFhLElBQUlKLEdBQUdDLE9BQU9DLElBQUk7QUFDMUQsUUFBTUcsMEJBQWtDTixVQUFVTyxLQUFLLHdDQUF3QztBQUkvRixNQUFJSCx1QkFBdUIsY0FBYyxDQUFDRSx3QkFBd0JFLFFBQVE7QUFDekU7RUFDRDtB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TFMiLCAicHJvY2Vzc1dpa2lFZGl0b3IiLCAiJGVkaXRGb3JtIiwgIm13IiwgImNvbmZpZyIsICJnZXQiLCAid2dQYWdlQ29udGVudE1vZGVsIiwgIndnVXNlclZhcmlhbnQiLCAiJHRlbXBsYXRlU2FuZGJveFByZXZpZXciLCAiZmluZCIsICJsZW5ndGgiLCAiJGxheW91dCIsICJzZXQiLCAidXJpVmFyaWFudCIsICJ1dGlsIiwgImdldFBhcmFtVmFsdWUiLCAiY2hlY2tib3giLCAiT08iLCAidWkiLCAiQ2hlY2tib3hJbnB1dFdpZGdldCIsICJzZWxlY3RlZCIsICJCb29sZWFuIiwgImRyb3Bkb3duIiwgIkRyb3Bkb3duV2lkZ2V0IiwgIiRvdmVybGF5IiwgImRpc2FibGVkIiwgImlzU2VsZWN0ZWQiLCAibWVudSIsICJpdGVtcyIsICJtYXAiLCAiTWVudU9wdGlvbldpZGdldCIsICJnZXRNZW51IiwgInNlbGVjdEl0ZW1CeURhdGEiLCAidXNlciIsICJvcHRpb25zIiwgIm9uIiwgInNldERpc2FibGVkIiwgImdldFNlbGVjdGVkVmFyaWFudCIsICJzZWxlY3RlZEl0ZW0iLCAiZmluZFNlbGVjdGVkSXRlbSIsICJnZXREYXRhIiwgIm1hbmlwdWxhdGVBY3Rpb25VcmwiLCAic2VsZWN0ZWRWYXJpYW50IiwgIm9yaWdpbmFsQWN0aW9uIiwgImF0dHIiLCAiVXJpIiwgImV4dGVuZCIsICJ2YXJpYW50IiwgImdldFJlbGF0aXZlUGF0aCIsICJtYW5pcHVsYXRlVmFyaWFudENvbmZpZyIsICJjaGVja2JveEZpZWxkIiwgIkZpZWxkTGF5b3V0IiwgImFsaWduIiwgImRyb3Bkb3duRmllbGQiLCAiaW52aXNpYmxlTGFiZWwiLCAiYXBwZW5kIiwgIiQiLCAiJGVsZW1lbnQiLCAicHJldmlld1dpdGhWYXJpYW50cyIsICJob29rIiwgImFkZCJdCn0K

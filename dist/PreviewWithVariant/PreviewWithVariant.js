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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1ByZXZpZXdXaXRoVmFyaWFudC9vcHRpb25zLmpzb24iLCAic3JjL1ByZXZpZXdXaXRoVmFyaWFudC9tb2R1bGVzL2NvbnN0YW50LnRzIiwgInNyYy9QcmV2aWV3V2l0aFZhcmlhbnQvbW9kdWxlcy9wcm9jZXNzV2lraUVkaXRvci50cyIsICJzcmMvUHJldmlld1dpdGhWYXJpYW50L1ByZXZpZXdXaXRoVmFyaWFudC50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsie1xuXHRcImNvbmZpZ0tleVwiOiBcImdhZGdldC1QcmV2aWV3V2l0aFZhcmlhbnRfX0luaXRpYWxpemVkXCJcbn1cbiIsICJjb25zdCBWQVJJQU5UUzoge1xuXHRkYXRhOiBzdHJpbmc7XG5cdGxhYmVsOiBzdHJpbmc7XG59W10gPSBbXG5cdHtcblx0XHRkYXRhOiAnemgnLFxuXHRcdGxhYmVsOiB3aW5kb3cud2dVTFMoJ+S4jei9rOaNoicsICfkuI3ovYnmj5snKSxcblx0fSxcblx0e1xuXHRcdGRhdGE6ICd6aC1oYW5zJyxcblx0XHRsYWJlbDogJ+eugOS9kycsXG5cdH0sXG5cdHtcblx0XHRkYXRhOiAnemgtaGFudCcsXG5cdFx0bGFiZWw6ICfnuYHpq5QnLFxuXHR9LFxuXHR7XG5cdFx0ZGF0YTogJ3poLWNuJyxcblx0XHRsYWJlbDogJ+S4reWbveWkp+mZhueugOS9kycsXG5cdH0sXG5cdHtcblx0XHRkYXRhOiAnemgtaGsnLFxuXHRcdGxhYmVsOiAn5Lit5ZyL6aaZ5riv57mB6auUJyxcblx0fSxcblx0e1xuXHRcdGRhdGE6ICd6aC1tbycsXG5cdFx0bGFiZWw6ICfkuK3lnIvmvrPploDnuYHpq5QnLFxuXHR9LFxuXHR7XG5cdFx0ZGF0YTogJ3poLW15Jyxcblx0XHRsYWJlbDogJ+mprOadpeilv+S6mueugOS9kycsXG5cdH0sXG5cdHtcblx0XHRkYXRhOiAnemgtc2cnLFxuXHRcdGxhYmVsOiAn5paw5Yqg5Z2h566A5L2TJyxcblx0fSxcblx0e1xuXHRcdGRhdGE6ICd6aC10dycsXG5cdFx0bGFiZWw6ICfkuK3lnIvoh7rngaPnuYHpq5QnLFxuXHR9LFxuXTtcblxuZXhwb3J0IHtWQVJJQU5UU307XG4iLCAiaW1wb3J0ICcuL3Byb2Nlc3NXaWtpRWRpdG9yLmxlc3MnO1xuaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtWQVJJQU5UU30gZnJvbSAnLi9jb25zdGFudCc7XG4vKipcbiAqIEBkZXNjcmlwdGlvbiBBZGQgYSBcIlByZXZpZXcgd2l0aCB2YXJpYW50XCIgb3B0aW9uIHRvIHRoZSBlZGl0IGZvcm0uXG4gKlxuICogQHBhcmFtIHtKUXVlcnl9ICRlZGl0Rm9ybVxuICovXG5jb25zdCBwcm9jZXNzV2lraUVkaXRvciA9ICgkZWRpdEZvcm06IEpRdWVyeTxIVE1MRWxlbWVudD4pOiB2b2lkID0+IHtcblx0Ly8gR3VhcmQgYWdhaW5zdCBkb3VibGUgaW5jbHVzaW9uc1xuXHRpZiAobXcuY29uZmlnLmdldChPUFRJT05TLmNvbmZpZ0tleSkpIHtcblx0XHRyZXR1cm47XG5cdH1cblx0Y29uc3Qge3dnUGFnZUNvbnRlbnRNb2RlbCwgd2dVc2VyVmFyaWFudH0gPSBtdy5jb25maWcuZ2V0KCk7XG5cdGNvbnN0ICR0ZW1wbGF0ZVNhbmRib3hQcmV2aWV3OiBKUXVlcnkgPSAkZWRpdEZvcm0uZmluZCgnaW5wdXRbbmFtZT1cIndwVGVtcGxhdGVTYW5kYm94UHJldmlld1wiXScpO1xuXHQvLyBJdCBpcyBwb3NzaWJsZSB0aGF0IGEgdXNlciB3YW50IHRvIHByZXZpZXcgYSBwYWdlIHdpdGggYSBub24td2lraXRleHQgbW9kdWxlXG5cdC8vIERvIG5vdCByZXR1cm4gaW4gdGhpcyBjYXNlXG5cdGlmICh3Z1BhZ2VDb250ZW50TW9kZWwgIT09ICd3aWtpdGV4dCcgJiYgISR0ZW1wbGF0ZVNhbmRib3hQcmV2aWV3Lmxlbmd0aCkge1xuXHRcdHJldHVybjtcblx0fVxuXHRjb25zdCAkbGF5b3V0OiBKUXVlcnkgPSAkZWRpdEZvcm0uZmluZCgnLmVkaXRDaGVja2JveGVzIC5vby11aS1ob3Jpem9udGFsTGF5b3V0Jyk7XG5cdGlmICghJGxheW91dC5sZW5ndGgpIHtcblx0XHRyZXR1cm47XG5cdH1cblx0Ly8gR3VhcmQgYWdhaW5zdCBkb3VibGUgaW5jbHVzaW9uc1xuXHRtdy5jb25maWcuc2V0KE9QVElPTlMuY29uZmlnS2V5LCB0cnVlKTtcblx0Y29uc3QgdXJpVmFyaWFudDogc3RyaW5nIHwgbnVsbCA9IG13LnV0aWwuZ2V0UGFyYW1WYWx1ZSgndmFyaWFudCcpO1xuXHRjb25zdCBjaGVja2JveDogT08udWkuQ2hlY2tib3hJbnB1dFdpZGdldCA9IG5ldyBPTy51aS5DaGVja2JveElucHV0V2lkZ2V0KHtcblx0XHRzZWxlY3RlZDogQm9vbGVhbih1cmlWYXJpYW50KSxcblx0fSk7XG5cdGNvbnN0IGRyb3Bkb3duOiBPTy51aS5Ecm9wZG93bldpZGdldCA9IG5ldyBPTy51aS5Ecm9wZG93bldpZGdldCh7XG5cdFx0JG92ZXJsYXk6IHRydWUsXG5cdFx0ZGlzYWJsZWQ6ICFjaGVja2JveC5pc1NlbGVjdGVkKCksXG5cdFx0bWVudToge1xuXHRcdFx0aXRlbXM6IFZBUklBTlRTLm1hcCgoe2RhdGEsIGxhYmVsfSk6IE9PLnVpLk1lbnVPcHRpb25XaWRnZXQgPT4ge1xuXHRcdFx0XHRyZXR1cm4gbmV3IE9PLnVpLk1lbnVPcHRpb25XaWRnZXQoe1xuXHRcdFx0XHRcdGRhdGEsXG5cdFx0XHRcdFx0bGFiZWwsXG5cdFx0XHRcdH0pO1xuXHRcdFx0fSksXG5cdFx0fSxcblx0fSk7XG5cdGRyb3Bkb3duLmdldE1lbnUoKS5zZWxlY3RJdGVtQnlEYXRhKHdnVXNlclZhcmlhbnQgfHwgdXJpVmFyaWFudCB8fCBtdy51c2VyLm9wdGlvbnMuZ2V0KCd2YXJpYW50JykpO1xuXHRjaGVja2JveC5vbignY2hhbmdlJywgKHNlbGVjdGVkOiBib29sZWFuIHwgc3RyaW5nKTogdm9pZCA9PiB7XG5cdFx0ZHJvcGRvd24uc2V0RGlzYWJsZWQoIXNlbGVjdGVkKTtcblx0fSk7XG5cdGNvbnN0IGdldFNlbGVjdGVkVmFyaWFudCA9ICgpOiBzdHJpbmcgfCB1bmRlZmluZWQgPT4ge1xuXHRcdGlmICghY2hlY2tib3guaXNTZWxlY3RlZCgpKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGNvbnN0IHNlbGVjdGVkSXRlbTogT08udWkuT3B0aW9uV2lkZ2V0IHwgbnVsbCA9IGRyb3Bkb3duXG5cdFx0XHQuZ2V0TWVudSgpXG5cdFx0XHQuZmluZFNlbGVjdGVkSXRlbSgpIGFzIE9PLnVpLk9wdGlvbldpZGdldCB8IG51bGw7XG5cdFx0cmV0dXJuIHNlbGVjdGVkSXRlbSA/IChzZWxlY3RlZEl0ZW0uZ2V0RGF0YSgpIGFzIHN0cmluZykgOiB1bmRlZmluZWQ7XG5cdH07XG5cdGNvbnN0IG1hbmlwdWxhdGVBY3Rpb25VcmwgPSAoKTogdm9pZCA9PiB7XG5cdFx0Y29uc3Qgc2VsZWN0ZWRWYXJpYW50OiBzdHJpbmcgfCB1bmRlZmluZWQgPSBnZXRTZWxlY3RlZFZhcmlhbnQoKTtcblx0XHRjb25zdCBvcmlnaW5hbEFjdGlvbjogc3RyaW5nIHwgdW5kZWZpbmVkID0gJGVkaXRGb3JtLmF0dHIoJ2FjdGlvbicpO1xuXHRcdGlmIChzZWxlY3RlZFZhcmlhbnQgJiYgb3JpZ2luYWxBY3Rpb24pIHtcblx0XHRcdCRlZGl0Rm9ybS5hdHRyKFxuXHRcdFx0XHQnYWN0aW9uJyxcblx0XHRcdFx0bmV3IG13LlVyaShvcmlnaW5hbEFjdGlvbilcblx0XHRcdFx0XHQuZXh0ZW5kKHtcblx0XHRcdFx0XHRcdHZhcmlhbnQ6IHNlbGVjdGVkVmFyaWFudCxcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdC5nZXRSZWxhdGl2ZVBhdGgoKVxuXHRcdFx0KTtcblx0XHR9XG5cdH07XG5cdGNvbnN0IG1hbmlwdWxhdGVWYXJpYW50Q29uZmlnID0gKCk6IHZvaWQgPT4ge1xuXHRcdG13LmNvbmZpZy5zZXQoJ3dnVXNlclZhcmlhbnQnLCBnZXRTZWxlY3RlZFZhcmlhbnQoKSB8fCAobXcudXNlci5vcHRpb25zLmdldCgndmFyaWFudCcpIGFzIHN0cmluZykpO1xuXHR9O1xuXHQkZWRpdEZvcm1cblx0XHQuZmluZCgnaW5wdXRbbmFtZT13cFByZXZpZXddJylcblx0XHQub24oJ2NsaWNrJywgbXcudXNlci5vcHRpb25zLmdldCgndXNlbGl2ZXByZXZpZXcnKSA/IG1hbmlwdWxhdGVWYXJpYW50Q29uZmlnIDogbWFuaXB1bGF0ZUFjdGlvblVybCk7XG5cdCR0ZW1wbGF0ZVNhbmRib3hQcmV2aWV3Lm9uKCdjbGljaycsIG1hbmlwdWxhdGVBY3Rpb25VcmwpO1xuXHRkcm9wZG93bi5nZXRNZW51KCkub24oJ3NlbGVjdCcsIG1hbmlwdWxhdGVWYXJpYW50Q29uZmlnKTtcblx0Y29uc3QgY2hlY2tib3hGaWVsZDogT08udWkuRmllbGRMYXlvdXQ8T08udWkuQ2hlY2tib3hJbnB1dFdpZGdldD4gPSBuZXcgT08udWkuRmllbGRMYXlvdXQoY2hlY2tib3gsIHtcblx0XHRhbGlnbjogJ2lubGluZScsXG5cdFx0bGFiZWw6IHdpbmRvdy53Z1VMUygn6aKE6KeI5a2X6K+N6L2s5o2iJywgJ+mgkOimveWtl+ipnui9ieaPmycpLFxuXHR9KTtcblx0Y29uc3QgZHJvcGRvd25GaWVsZDogT08udWkuRmllbGRMYXlvdXQ8T08udWkuRHJvcGRvd25XaWRnZXQ+ID0gbmV3IE9PLnVpLkZpZWxkTGF5b3V0KGRyb3Bkb3duLCB7XG5cdFx0YWxpZ246ICd0b3AnLFxuXHRcdGxhYmVsOiB3aW5kb3cud2dVTFMoJ+S9v+eUqOivpeivreiogOWPmOS9k+aYvuekuumihOiniO+8micsICfkvb/nlKjoqbLoqp7oqIDororpq5Tpoa/npLrpoJDopr3vvJonKSxcblx0XHRpbnZpc2libGVMYWJlbDogdHJ1ZSxcblx0fSk7XG5cdCRsYXlvdXQuYXBwZW5kKCQoJzxkaXY+JykuYXR0cignaWQnLCAncHd2LWFyZWEnKS5hcHBlbmQoY2hlY2tib3hGaWVsZC4kZWxlbWVudCwgZHJvcGRvd25GaWVsZC4kZWxlbWVudCkpO1xufTtcblxuZXhwb3J0IHtwcm9jZXNzV2lraUVkaXRvcn07XG4iLCAiaW1wb3J0IHtwcm9jZXNzV2lraUVkaXRvcn0gZnJvbSAnLi9tb2R1bGVzL3Byb2Nlc3NXaWtpRWRpdG9yJztcblxuKGZ1bmN0aW9uIHByZXZpZXdXaXRoVmFyaWFudHMoKTogdm9pZCB7XG5cdG13Lmhvb2soJ3dpa2lwYWdlLmVkaXRmb3JtJykuYWRkKCgkZWRpdEZvcm0pOiB2b2lkID0+IHtcblx0XHRwcm9jZXNzV2lraUVkaXRvcigkZWRpdEZvcm0pO1xuXHR9KTtcbn0pKCk7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0MsSUFBQUEsWUFBYTs7QUNEZCxJQUFNQyxXQUdBLENBQ0w7RUFDQ0MsTUFBTTtFQUNOQyxPQUFPQyxPQUFPQyxNQUFNLE9BQU8sS0FBSztBQUNqQyxHQUNBO0VBQ0NILE1BQU07RUFDTkMsT0FBTztBQUNSLEdBQ0E7RUFDQ0QsTUFBTTtFQUNOQyxPQUFPO0FBQ1IsR0FDQTtFQUNDRCxNQUFNO0VBQ05DLE9BQU87QUFDUixHQUNBO0VBQ0NELE1BQU07RUFDTkMsT0FBTztBQUNSLEdBQ0E7RUFDQ0QsTUFBTTtFQUNOQyxPQUFPO0FBQ1IsR0FDQTtFQUNDRCxNQUFNO0VBQ05DLE9BQU87QUFDUixHQUNBO0VBQ0NELE1BQU07RUFDTkMsT0FBTztBQUNSLEdBQ0E7RUFDQ0QsTUFBTTtFQUNOQyxPQUFPO0FBQ1IsQ0FBQTs7QUMvQkQsSUFBTUcsb0JBQXFCQyxlQUF5QztBQUVuRSxNQUFJQyxHQUFHQyxPQUFPQyxJQUFZVixTQUFTLEdBQUc7QUFDckM7RUFDRDtBQUNBLFFBQU07SUFBQ1c7SUFBb0JDO0VBQWEsSUFBSUosR0FBR0MsT0FBT0MsSUFBSTtBQUMxRCxRQUFNRywwQkFBa0NOLFVBQVVPLEtBQUssd0NBQXdDO0FBRy9GLE1BQUlILHVCQUF1QixjQUFjLENBQUNFLHdCQUF3QkUsUUFBUTtBQUN6RTtFQUNE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Z1VMUyIsICJwcm9jZXNzV2lraUVkaXRvciIsICIkZWRpdEZvcm0iLCAibXciLCAiY29uZmlnIiwgImdldCIsICJ3Z1BhZ2VDb250ZW50TW9kZWwiLCAid2dVc2VyVmFyaWFudCIsICIkdGVtcGxhdGVTYW5kYm94UHJldmlldyIsICJmaW5kIiwgImxlbmd0aCIsICIkbGF5b3V0IiwgInNldCIsICJ1cmlWYXJpYW50IiwgInV0aWwiLCAiZ2V0UGFyYW1WYWx1ZSIsICJjaGVja2JveCIsICJPTyIsICJ1aSIsICJDaGVja2JveElucHV0V2lkZ2V0IiwgInNlbGVjdGVkIiwgIkJvb2xlYW4iLCAiZHJvcGRvd24iLCAiRHJvcGRvd25XaWRnZXQiLCAiJG92ZXJsYXkiLCAiZGlzYWJsZWQiLCAiaXNTZWxlY3RlZCIsICJtZW51IiwgIml0ZW1zIiwgIm1hcCIsICJNZW51T3B0aW9uV2lkZ2V0IiwgImdldE1lbnUiLCAic2VsZWN0SXRlbUJ5RGF0YSIsICJ1c2VyIiwgIm9wdGlvbnMiLCAib24iLCAic2V0RGlzYWJsZWQiLCAiZ2V0U2VsZWN0ZWRWYXJpYW50IiwgInNlbGVjdGVkSXRlbSIsICJmaW5kU2VsZWN0ZWRJdGVtIiwgImdldERhdGEiLCAibWFuaXB1bGF0ZUFjdGlvblVybCIsICJzZWxlY3RlZFZhcmlhbnQiLCAib3JpZ2luYWxBY3Rpb24iLCAiYXR0ciIsICJVcmkiLCAiZXh0ZW5kIiwgInZhcmlhbnQiLCAiZ2V0UmVsYXRpdmVQYXRoIiwgIm1hbmlwdWxhdGVWYXJpYW50Q29uZmlnIiwgImNoZWNrYm94RmllbGQiLCAiRmllbGRMYXlvdXQiLCAiYWxpZ24iLCAiZHJvcGRvd25GaWVsZCIsICJpbnZpc2libGVMYWJlbCIsICJhcHBlbmQiLCAiJCIsICIkZWxlbWVudCIsICJwcmV2aWV3V2l0aFZhcmlhbnRzIiwgImhvb2siLCAiYWRkIl0KfQo=

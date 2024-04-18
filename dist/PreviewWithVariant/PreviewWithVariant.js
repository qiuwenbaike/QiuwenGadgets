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
var processWikiEditor = () => {
  mw.hook("wikipage.editform").add(($editForm) => {
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
  });
};
//! src/PreviewWithVariant/PreviewWithVariant.ts
(function previewWithVariants() {
  mw.hook("wikipage.editform").add(() => {
    processWikiEditor();
  });
})();

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1ByZXZpZXdXaXRoVmFyaWFudC9vcHRpb25zLmpzb24iLCAic3JjL1ByZXZpZXdXaXRoVmFyaWFudC9tb2R1bGVzL2NvbnN0YW50LnRzIiwgInNyYy9QcmV2aWV3V2l0aFZhcmlhbnQvbW9kdWxlcy9wcm9jZXNzV2lraUVkaXRvci50cyIsICJzcmMvUHJldmlld1dpdGhWYXJpYW50L1ByZXZpZXdXaXRoVmFyaWFudC50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsie1xuXHRcImNvbmZpZ0tleVwiOiBcImdhZGdldC1QcmV2aWV3V2l0aFZhcmlhbnRfX0luaXRpYWxpemVkXCJcbn1cbiIsICJjb25zdCBWQVJJQU5UUzoge1xuXHRkYXRhOiBzdHJpbmc7XG5cdGxhYmVsOiBzdHJpbmc7XG59W10gPSBbXG5cdHtcblx0XHRkYXRhOiAnemgnLFxuXHRcdGxhYmVsOiB3aW5kb3cud2dVTFMoJ+S4jei9rOaNoicsICfkuI3ovYnmj5snKSxcblx0fSxcblx0e1xuXHRcdGRhdGE6ICd6aC1oYW5zJyxcblx0XHRsYWJlbDogJ+eugOS9kycsXG5cdH0sXG5cdHtcblx0XHRkYXRhOiAnemgtaGFudCcsXG5cdFx0bGFiZWw6ICfnuYHpq5QnLFxuXHR9LFxuXHR7XG5cdFx0ZGF0YTogJ3poLWNuJyxcblx0XHRsYWJlbDogJ+S4reWbveWkp+mZhueugOS9kycsXG5cdH0sXG5cdHtcblx0XHRkYXRhOiAnemgtaGsnLFxuXHRcdGxhYmVsOiAn5Lit5ZyL6aaZ5riv57mB6auUJyxcblx0fSxcblx0e1xuXHRcdGRhdGE6ICd6aC1tbycsXG5cdFx0bGFiZWw6ICfkuK3lnIvmvrPploDnuYHpq5QnLFxuXHR9LFxuXHR7XG5cdFx0ZGF0YTogJ3poLW15Jyxcblx0XHRsYWJlbDogJ+mprOadpeilv+S6mueugOS9kycsXG5cdH0sXG5cdHtcblx0XHRkYXRhOiAnemgtc2cnLFxuXHRcdGxhYmVsOiAn5paw5Yqg5Z2h566A5L2TJyxcblx0fSxcblx0e1xuXHRcdGRhdGE6ICd6aC10dycsXG5cdFx0bGFiZWw6ICfkuK3lnIvoh7rngaPnuYHpq5QnLFxuXHR9LFxuXTtcblxuZXhwb3J0IHtWQVJJQU5UU307XG4iLCAiaW1wb3J0ICcuL3Byb2Nlc3NXaWtpRWRpdG9yLmxlc3MnO1xuaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtWQVJJQU5UU30gZnJvbSAnLi9jb25zdGFudCc7XG4vKipcbiAqIEBkZXNjcmlwdGlvbiBBZGQgYSBcIlByZXZpZXcgd2l0aCB2YXJpYW50XCIgb3B0aW9uIHRvIHRoZSBlZGl0IGZvcm0uXG4gKi9cbmNvbnN0IHByb2Nlc3NXaWtpRWRpdG9yID0gKCk6IHZvaWQgPT4ge1xuXHRtdy5ob29rKCd3aWtpcGFnZS5lZGl0Zm9ybScpLmFkZCgoJGVkaXRGb3JtKTogdm9pZCA9PiB7XG5cdFx0Ly8gR3VhcmQgYWdhaW5zdCBkb3VibGUgaW5jbHVzaW9uc1xuXHRcdGlmIChtdy5jb25maWcuZ2V0KE9QVElPTlMuY29uZmlnS2V5KSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRjb25zdCB7d2dQYWdlQ29udGVudE1vZGVsLCB3Z1VzZXJWYXJpYW50fSA9IG13LmNvbmZpZy5nZXQoKTtcblx0XHRjb25zdCAkdGVtcGxhdGVTYW5kYm94UHJldmlldzogSlF1ZXJ5ID0gJGVkaXRGb3JtLmZpbmQoJ2lucHV0W25hbWU9XCJ3cFRlbXBsYXRlU2FuZGJveFByZXZpZXdcIl0nKTtcblx0XHQvLyBJdCBpcyBwb3NzaWJsZSB0aGF0IGEgdXNlciB3YW50IHRvIHByZXZpZXcgYSBwYWdlIHdpdGggYSBub24td2lraXRleHQgbW9kdWxlXG5cdFx0Ly8gRG8gbm90IHJldHVybiBpbiB0aGlzIGNhc2Vcblx0XHRpZiAod2dQYWdlQ29udGVudE1vZGVsICE9PSAnd2lraXRleHQnICYmICEkdGVtcGxhdGVTYW5kYm94UHJldmlldy5sZW5ndGgpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0Y29uc3QgJGxheW91dDogSlF1ZXJ5ID0gJGVkaXRGb3JtLmZpbmQoJy5lZGl0Q2hlY2tib3hlcyAub28tdWktaG9yaXpvbnRhbExheW91dCcpO1xuXHRcdGlmICghJGxheW91dC5sZW5ndGgpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0Ly8gR3VhcmQgYWdhaW5zdCBkb3VibGUgaW5jbHVzaW9uc1xuXHRcdG13LmNvbmZpZy5zZXQoT1BUSU9OUy5jb25maWdLZXksIHRydWUpO1xuXHRcdGNvbnN0IHVyaVZhcmlhbnQ6IHN0cmluZyB8IG51bGwgPSBtdy51dGlsLmdldFBhcmFtVmFsdWUoJ3ZhcmlhbnQnKTtcblx0XHRjb25zdCBjaGVja2JveDogT08udWkuQ2hlY2tib3hJbnB1dFdpZGdldCA9IG5ldyBPTy51aS5DaGVja2JveElucHV0V2lkZ2V0KHtcblx0XHRcdHNlbGVjdGVkOiBCb29sZWFuKHVyaVZhcmlhbnQpLFxuXHRcdH0pO1xuXHRcdGNvbnN0IGRyb3Bkb3duOiBPTy51aS5Ecm9wZG93bldpZGdldCA9IG5ldyBPTy51aS5Ecm9wZG93bldpZGdldCh7XG5cdFx0XHQkb3ZlcmxheTogdHJ1ZSxcblx0XHRcdGRpc2FibGVkOiAhY2hlY2tib3guaXNTZWxlY3RlZCgpLFxuXHRcdFx0bWVudToge1xuXHRcdFx0XHRpdGVtczogVkFSSUFOVFMubWFwKCh7ZGF0YSwgbGFiZWx9KTogT08udWkuTWVudU9wdGlvbldpZGdldCA9PiB7XG5cdFx0XHRcdFx0cmV0dXJuIG5ldyBPTy51aS5NZW51T3B0aW9uV2lkZ2V0KHtcblx0XHRcdFx0XHRcdGRhdGEsXG5cdFx0XHRcdFx0XHRsYWJlbCxcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fSksXG5cdFx0XHR9LFxuXHRcdH0pO1xuXHRcdGRyb3Bkb3duLmdldE1lbnUoKS5zZWxlY3RJdGVtQnlEYXRhKHdnVXNlclZhcmlhbnQgfHwgdXJpVmFyaWFudCB8fCBtdy51c2VyLm9wdGlvbnMuZ2V0KCd2YXJpYW50JykpO1xuXHRcdGNoZWNrYm94Lm9uKCdjaGFuZ2UnLCAoc2VsZWN0ZWQ6IGJvb2xlYW4gfCBzdHJpbmcpOiB2b2lkID0+IHtcblx0XHRcdGRyb3Bkb3duLnNldERpc2FibGVkKCFzZWxlY3RlZCk7XG5cdFx0fSk7XG5cdFx0Y29uc3QgZ2V0U2VsZWN0ZWRWYXJpYW50ID0gKCk6IHN0cmluZyB8IHVuZGVmaW5lZCA9PiB7XG5cdFx0XHRpZiAoIWNoZWNrYm94LmlzU2VsZWN0ZWQoKSkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBzZWxlY3RlZEl0ZW06IE9PLnVpLk9wdGlvbldpZGdldCB8IG51bGwgPSBkcm9wZG93blxuXHRcdFx0XHQuZ2V0TWVudSgpXG5cdFx0XHRcdC5maW5kU2VsZWN0ZWRJdGVtKCkgYXMgT08udWkuT3B0aW9uV2lkZ2V0IHwgbnVsbDtcblx0XHRcdHJldHVybiBzZWxlY3RlZEl0ZW0gPyAoc2VsZWN0ZWRJdGVtLmdldERhdGEoKSBhcyBzdHJpbmcpIDogdW5kZWZpbmVkO1xuXHRcdH07XG5cdFx0Y29uc3QgbWFuaXB1bGF0ZUFjdGlvblVybCA9ICgpOiB2b2lkID0+IHtcblx0XHRcdGNvbnN0IHNlbGVjdGVkVmFyaWFudDogc3RyaW5nIHwgdW5kZWZpbmVkID0gZ2V0U2VsZWN0ZWRWYXJpYW50KCk7XG5cdFx0XHRjb25zdCBvcmlnaW5hbEFjdGlvbjogc3RyaW5nIHwgdW5kZWZpbmVkID0gJGVkaXRGb3JtLmF0dHIoJ2FjdGlvbicpO1xuXHRcdFx0aWYgKHNlbGVjdGVkVmFyaWFudCAmJiBvcmlnaW5hbEFjdGlvbikge1xuXHRcdFx0XHQkZWRpdEZvcm0uYXR0cihcblx0XHRcdFx0XHQnYWN0aW9uJyxcblx0XHRcdFx0XHRuZXcgbXcuVXJpKG9yaWdpbmFsQWN0aW9uKVxuXHRcdFx0XHRcdFx0LmV4dGVuZCh7XG5cdFx0XHRcdFx0XHRcdHZhcmlhbnQ6IHNlbGVjdGVkVmFyaWFudCxcblx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XHQuZ2V0UmVsYXRpdmVQYXRoKClcblx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHR9O1xuXHRcdGNvbnN0IG1hbmlwdWxhdGVWYXJpYW50Q29uZmlnID0gKCk6IHZvaWQgPT4ge1xuXHRcdFx0bXcuY29uZmlnLnNldCgnd2dVc2VyVmFyaWFudCcsIGdldFNlbGVjdGVkVmFyaWFudCgpIHx8IChtdy51c2VyLm9wdGlvbnMuZ2V0KCd2YXJpYW50JykgYXMgc3RyaW5nKSk7XG5cdFx0fTtcblx0XHQkZWRpdEZvcm1cblx0XHRcdC5maW5kKCdpbnB1dFtuYW1lPXdwUHJldmlld10nKVxuXHRcdFx0Lm9uKCdjbGljaycsIG13LnVzZXIub3B0aW9ucy5nZXQoJ3VzZWxpdmVwcmV2aWV3JykgPyBtYW5pcHVsYXRlVmFyaWFudENvbmZpZyA6IG1hbmlwdWxhdGVBY3Rpb25VcmwpO1xuXHRcdCR0ZW1wbGF0ZVNhbmRib3hQcmV2aWV3Lm9uKCdjbGljaycsIG1hbmlwdWxhdGVBY3Rpb25VcmwpO1xuXHRcdGRyb3Bkb3duLmdldE1lbnUoKS5vbignc2VsZWN0JywgbWFuaXB1bGF0ZVZhcmlhbnRDb25maWcpO1xuXHRcdGNvbnN0IGNoZWNrYm94RmllbGQ6IE9PLnVpLkZpZWxkTGF5b3V0PE9PLnVpLkNoZWNrYm94SW5wdXRXaWRnZXQ+ID0gbmV3IE9PLnVpLkZpZWxkTGF5b3V0KGNoZWNrYm94LCB7XG5cdFx0XHRhbGlnbjogJ2lubGluZScsXG5cdFx0XHRsYWJlbDogd2luZG93LndnVUxTKCfpooTop4jlrZfor43ovazmjaInLCAn6aCQ6Ka95a2X6Kme6L2J5o+bJyksXG5cdFx0fSk7XG5cdFx0Y29uc3QgZHJvcGRvd25GaWVsZDogT08udWkuRmllbGRMYXlvdXQ8T08udWkuRHJvcGRvd25XaWRnZXQ+ID0gbmV3IE9PLnVpLkZpZWxkTGF5b3V0KGRyb3Bkb3duLCB7XG5cdFx0XHRhbGlnbjogJ3RvcCcsXG5cdFx0XHRsYWJlbDogd2luZG93LndnVUxTKCfkvb/nlKjor6Xor63oqIDlj5jkvZPmmL7npLrpooTop4jvvJonLCAn5L2/55So6Kmy6Kqe6KiA6K6K6auU6aGv56S66aCQ6Ka977yaJyksXG5cdFx0XHRpbnZpc2libGVMYWJlbDogdHJ1ZSxcblx0XHR9KTtcblx0XHQkbGF5b3V0LmFwcGVuZCgkKCc8ZGl2PicpLmF0dHIoJ2lkJywgJ3B3di1hcmVhJykuYXBwZW5kKGNoZWNrYm94RmllbGQuJGVsZW1lbnQsIGRyb3Bkb3duRmllbGQuJGVsZW1lbnQpKTtcblx0fSk7XG59O1xuXG5leHBvcnQge3Byb2Nlc3NXaWtpRWRpdG9yfTtcbiIsICJpbXBvcnQge3Byb2Nlc3NXaWtpRWRpdG9yfSBmcm9tICcuL21vZHVsZXMvcHJvY2Vzc1dpa2lFZGl0b3InO1xuXG4oZnVuY3Rpb24gcHJldmlld1dpdGhWYXJpYW50cygpOiB2b2lkIHtcblx0bXcuaG9vaygnd2lraXBhZ2UuZWRpdGZvcm0nKS5hZGQoKCk6IHZvaWQgPT4ge1xuXHRcdHByb2Nlc3NXaWtpRWRpdG9yKCk7XG5cdH0pO1xufSkoKTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQyxJQUFBQSxZQUFhOztBQ0RkLElBQU1DLFdBR0EsQ0FDTDtFQUNDQyxNQUFNO0VBQ05DLE9BQU9DLE9BQU9DLE1BQU0sT0FBTyxLQUFLO0FBQ2pDLEdBQ0E7RUFDQ0gsTUFBTTtFQUNOQyxPQUFPO0FBQ1IsR0FDQTtFQUNDRCxNQUFNO0VBQ05DLE9BQU87QUFDUixHQUNBO0VBQ0NELE1BQU07RUFDTkMsT0FBTztBQUNSLEdBQ0E7RUFDQ0QsTUFBTTtFQUNOQyxPQUFPO0FBQ1IsR0FDQTtFQUNDRCxNQUFNO0VBQ05DLE9BQU87QUFDUixHQUNBO0VBQ0NELE1BQU07RUFDTkMsT0FBTztBQUNSLEdBQ0E7RUFDQ0QsTUFBTTtFQUNOQyxPQUFPO0FBQ1IsR0FDQTtFQUNDRCxNQUFNO0VBQ05DLE9BQU87QUFDUixDQUFBOztBQ2pDRCxJQUFNRyxvQkFBb0JBLE1BQVk7QUFDckNDLEtBQUdDLEtBQUssbUJBQW1CLEVBQUVDLElBQUtDLGVBQW9CO0FBRXJELFFBQUlI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O0VBQ3hHLENBQUM7QUFDRjs7Q0NyRkMsU0FBU0Msc0JBQTRCO0FBQ3JDMUQsS0FBR0MsS0FBSyxtQkFBbUIsRUFBRUMsSUFBSSxNQUFZO0FBQzVDSCxzQkFBa0I7RUFDbkIsQ0FBQztBQUNGLEdBQUc7IiwKICAibmFtZXMiOiBbImNvbmZpZ0tleSIsICJWQVJJQU5UUyIsICJkYXRhIiwgImxhYmVsIiwgIndpbmRvdyIsICJ3Z1VMUyIsICJwcm9jZXNzV2lraUVkaXRvciIsICJtdyIsICJob29rIiwgImFkZCIsICIkZWRpdEZvcm0iLCAiY29uZmlnIiwgImdldCIsICJ3Z1BhZ2VDb250ZW50TW9kZWwiLCAid2dVc2VyVmFyaWFudCIsICIkdGVtcGxhdGVTYW5kYm94UHJldmlldyIsICJmaW5kIiwgImxlbmd0aCIsICIkbGF5b3V0IiwgInNldCIsICJ1cmlWYXJpYW50IiwgInV0aWwiLCAiZ2V0UGFyYW1WYWx1ZSIsICJjaGVja2JveCIsICJPTyIsICJ1aSIsICJDaGVja2JveElucHV0V2lkZ2V0IiwgInNlbGVjdGVkIiwgIkJvb2xlYW4iLCAiZHJvcGRvd24iLCAiRHJvcGRvd25XaWRnZXQiLCAiJG92ZXJsYXkiLCAiZGlzYWJsZWQiLCAiaXNTZWxlY3RlZCIsICJtZW51IiwgIml0ZW1zIiwgIm1hcCIsICJNZW51T3B0aW9uV2lkZ2V0IiwgImdldE1lbnUiLCAic2VsZWN0SXRlbUJ5RGF0YSIsICJ1c2VyIiwgIm9wdGlvbnMiLCAib24iLCAic2V0RGlzYWJsZWQiLCAiZ2V0U2VsZWN0ZWRWYXJpYW50IiwgInNlbGVjdGVkSXRlbSIsICJmaW5kU2VsZWN0ZWRJdGVtIiwgImdldERhdGEiLCAibWFuaXB1bGF0ZUFjdGlvblVybCIsICJzZWxlY3RlZFZhcmlhbnQiLCAib3JpZ2luYWxBY3Rpb24iLCAiYXR0ciIsICJVcmkiLCAiZXh0ZW5kIiwgInZhcmlhbnQiLCAiZ2V0UmVsYXRpdmVQYXRoIiwgIm1hbmlwdWxhdGVWYXJpYW50Q29uZmlnIiwgImNoZWNrYm94RmllbGQiLCAiRmllbGRMYXlvdXQiLCAiYWxpZ24iLCAiZHJvcGRvd25GaWVsZCIsICJpbnZpc2libGVMYWJlbCIsICJhcHBlbmQiLCAiJCIsICIkZWxlbWVudCIsICJwcmV2aWV3V2l0aFZhcmlhbnRzIl0KfQo=

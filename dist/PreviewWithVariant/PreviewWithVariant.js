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
(function PreviewWithVariant() {
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
  void mw.loader.using("ext.visualEditor.desktopArticleTarget.init").then(() => {
    mw.libs["ve"].addPlugin("ext.gadget.PreviewWithVariant2017");
  });
})();

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1ByZXZpZXdXaXRoVmFyaWFudC9QcmV2aWV3V2l0aFZhcmlhbnQudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCAnLi9QcmV2aWV3V2l0aFZhcmlhbnQubGVzcyc7XG4vKipcbiAqIEBkZXNjcmlwdGlvbiBBZGQgYSBcIlByZXZpZXcgd2l0aCB2YXJpYW50XCIgb3B0aW9uIHRvIHRoZSBlZGl0IGZvcm0uXG4gKi9cbihmdW5jdGlvbiBQcmV2aWV3V2l0aFZhcmlhbnQoKSB7XG5cdG13LmNvbmZpZy5zZXQoJ3dnUHJldmlld1dpdGhWYXJpYW50SW5pdGlhbGl6ZWQnLCBmYWxzZSk7XG5cblx0bXcuaG9vaygnd2lraXBhZ2UuZWRpdGZvcm0nKS5hZGQoKCRlZGl0Rm9ybSk6IHZvaWQgPT4ge1xuXHRcdC8vIEd1YXJkIGFnYWluc3QgZG91YmxlIGluY2x1c2lvbnNcblx0XHRpZiAobXcuY29uZmlnLmdldCgnd2dQcmV2aWV3V2l0aFZhcmlhbnRJbml0aWFsaXplZCcpKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGNvbnN0ICR0ZW1wbGF0ZVNhbmRib3hQcmV2aWV3OiBKUXVlcnkgPSAkZWRpdEZvcm0uZmluZCgnaW5wdXRbbmFtZT1cIndwVGVtcGxhdGVTYW5kYm94UHJldmlld1wiXScpO1xuXHRcdC8vIEl0IGlzIHBvc3NpYmxlIHRoYXQgYSB1c2VyIHdhbnQgdG8gcHJldmlldyBhIHBhZ2Ugd2l0aCBhIG5vbi13aWtpdGV4dCBtb2R1bGVcblx0XHQvLyBEbyBub3QgcmV0dXJuIGluIHRoaXMgY2FzZVxuXHRcdGlmIChtdy5jb25maWcuZ2V0KCd3Z1BhZ2VDb250ZW50TW9kZWwnKSAhPT0gJ3dpa2l0ZXh0JyAmJiAhJHRlbXBsYXRlU2FuZGJveFByZXZpZXcubGVuZ3RoKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGNvbnN0ICRsYXlvdXQ6IEpRdWVyeSA9ICRlZGl0Rm9ybS5maW5kKCcuZWRpdENoZWNrYm94ZXMgLm9vLXVpLWhvcml6b250YWxMYXlvdXQnKTtcblx0XHRpZiAoISRsYXlvdXQubGVuZ3RoKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdC8vIEd1YXJkIGFnYWluc3QgZG91YmxlIGluY2x1c2lvbnNcblx0XHRtdy5jb25maWcuc2V0KCd3Z1ByZXZpZXdXaXRoVmFyaWFudEluaXRpYWxpemVkJywgdHJ1ZSk7XG5cdFx0Y29uc3QgVkFSSUFOVFM6IHtcblx0XHRcdGRhdGE6IHN0cmluZztcblx0XHRcdGxhYmVsOiBzdHJpbmc7XG5cdFx0fVtdID0gW1xuXHRcdFx0e1xuXHRcdFx0XHRkYXRhOiAnemgnLFxuXHRcdFx0XHRsYWJlbDogd2luZG93LndnVUxTKCfkuI3ovazmjaInLCAn5LiN6L2J5o+bJyksXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRkYXRhOiAnemgtaGFucycsXG5cdFx0XHRcdGxhYmVsOiAn566A5L2TJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGRhdGE6ICd6aC1oYW50Jyxcblx0XHRcdFx0bGFiZWw6ICfnuYHpq5QnLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZGF0YTogJ3poLWNuJyxcblx0XHRcdFx0bGFiZWw6ICfkuK3lm73lpKfpmYbnroDkvZMnLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZGF0YTogJ3poLWhrJyxcblx0XHRcdFx0bGFiZWw6ICfkuK3lnIvpppnmuK/nuYHpq5QnLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZGF0YTogJ3poLW1vJyxcblx0XHRcdFx0bGFiZWw6ICfkuK3lnIvmvrPploDnuYHpq5QnLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZGF0YTogJ3poLW15Jyxcblx0XHRcdFx0bGFiZWw6ICfpqazmnaXopb/kuprnroDkvZMnLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZGF0YTogJ3poLXNnJyxcblx0XHRcdFx0bGFiZWw6ICfmlrDliqDlnaHnroDkvZMnLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZGF0YTogJ3poLXR3Jyxcblx0XHRcdFx0bGFiZWw6ICfkuK3lnIvoh7rngaPnuYHpq5QnLFxuXHRcdFx0fSxcblx0XHRdO1xuXHRcdGNvbnN0IHVyaVZhcmlhbnQ6IHN0cmluZyB8IG51bGwgPSBtdy51dGlsLmdldFBhcmFtVmFsdWUoJ3ZhcmlhbnQnKTtcblx0XHRjb25zdCBjaGVja2JveDogT08udWkuQ2hlY2tib3hJbnB1dFdpZGdldCA9IG5ldyBPTy51aS5DaGVja2JveElucHV0V2lkZ2V0KHtcblx0XHRcdHNlbGVjdGVkOiBCb29sZWFuKHVyaVZhcmlhbnQpLFxuXHRcdH0pO1xuXHRcdGNvbnN0IGRyb3Bkb3duOiBPTy51aS5Ecm9wZG93bldpZGdldCA9IG5ldyBPTy51aS5Ecm9wZG93bldpZGdldCh7XG5cdFx0XHQkb3ZlcmxheTogdHJ1ZSxcblx0XHRcdGRpc2FibGVkOiAhY2hlY2tib3guaXNTZWxlY3RlZCgpLFxuXHRcdFx0bWVudToge1xuXHRcdFx0XHRpdGVtczogVkFSSUFOVFMubWFwKCh7ZGF0YSwgbGFiZWx9KTogT08udWkuTWVudU9wdGlvbldpZGdldCA9PiB7XG5cdFx0XHRcdFx0cmV0dXJuIG5ldyBPTy51aS5NZW51T3B0aW9uV2lkZ2V0KHtcblx0XHRcdFx0XHRcdGRhdGEsXG5cdFx0XHRcdFx0XHRsYWJlbCxcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fSksXG5cdFx0XHR9LFxuXHRcdH0pO1xuXHRcdGRyb3Bkb3duXG5cdFx0XHQuZ2V0TWVudSgpXG5cdFx0XHQuc2VsZWN0SXRlbUJ5RGF0YShtdy5jb25maWcuZ2V0KCd3Z1VzZXJWYXJpYW50JykgfHwgdXJpVmFyaWFudCB8fCBtdy51c2VyLm9wdGlvbnMuZ2V0KCd2YXJpYW50JykpO1xuXHRcdGNoZWNrYm94Lm9uKCdjaGFuZ2UnLCAoc2VsZWN0ZWQ6IGJvb2xlYW4gfCBzdHJpbmcpOiB2b2lkID0+IHtcblx0XHRcdGRyb3Bkb3duLnNldERpc2FibGVkKCFzZWxlY3RlZCk7XG5cdFx0fSk7XG5cdFx0Y29uc3QgZ2V0U2VsZWN0ZWRWYXJpYW50ID0gKCk6IHN0cmluZyB8IHVuZGVmaW5lZCA9PiB7XG5cdFx0XHRpZiAoIWNoZWNrYm94LmlzU2VsZWN0ZWQoKSkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBzZWxlY3RlZEl0ZW06IE9PLnVpLk9wdGlvbldpZGdldCB8IG51bGwgPSBkcm9wZG93blxuXHRcdFx0XHQuZ2V0TWVudSgpXG5cdFx0XHRcdC5maW5kU2VsZWN0ZWRJdGVtKCkgYXMgT08udWkuT3B0aW9uV2lkZ2V0IHwgbnVsbDtcblx0XHRcdHJldHVybiBzZWxlY3RlZEl0ZW0gPyAoc2VsZWN0ZWRJdGVtLmdldERhdGEoKSBhcyBzdHJpbmcpIDogdW5kZWZpbmVkO1xuXHRcdH07XG5cdFx0Y29uc3QgbWFuaXB1bGF0ZUFjdGlvblVybCA9ICgpOiB2b2lkID0+IHtcblx0XHRcdGNvbnN0IHNlbGVjdGVkVmFyaWFudDogc3RyaW5nIHwgdW5kZWZpbmVkID0gZ2V0U2VsZWN0ZWRWYXJpYW50KCk7XG5cdFx0XHRjb25zdCBvcmlnaW5hbEFjdGlvbjogc3RyaW5nIHwgdW5kZWZpbmVkID0gJGVkaXRGb3JtLmF0dHIoJ2FjdGlvbicpO1xuXHRcdFx0aWYgKHNlbGVjdGVkVmFyaWFudCAmJiBvcmlnaW5hbEFjdGlvbikge1xuXHRcdFx0XHQkZWRpdEZvcm0uYXR0cihcblx0XHRcdFx0XHQnYWN0aW9uJyxcblx0XHRcdFx0XHRuZXcgbXcuVXJpKG9yaWdpbmFsQWN0aW9uKVxuXHRcdFx0XHRcdFx0LmV4dGVuZCh7XG5cdFx0XHRcdFx0XHRcdHZhcmlhbnQ6IHNlbGVjdGVkVmFyaWFudCxcblx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XHQuZ2V0UmVsYXRpdmVQYXRoKClcblx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHR9O1xuXHRcdGNvbnN0IG1hbmlwdWxhdGVWYXJpYW50Q29uZmlnID0gKCk6IHZvaWQgPT4ge1xuXHRcdFx0bXcuY29uZmlnLnNldCgnd2dVc2VyVmFyaWFudCcsIGdldFNlbGVjdGVkVmFyaWFudCgpIHx8IChtdy51c2VyLm9wdGlvbnMuZ2V0KCd2YXJpYW50JykgYXMgc3RyaW5nKSk7XG5cdFx0fTtcblx0XHQkZWRpdEZvcm1cblx0XHRcdC5maW5kKCdpbnB1dFtuYW1lPXdwUHJldmlld10nKVxuXHRcdFx0Lm9uKCdjbGljaycsIG13LnVzZXIub3B0aW9ucy5nZXQoJ3VzZWxpdmVwcmV2aWV3JykgPyBtYW5pcHVsYXRlVmFyaWFudENvbmZpZyA6IG1hbmlwdWxhdGVBY3Rpb25VcmwpO1xuXHRcdCR0ZW1wbGF0ZVNhbmRib3hQcmV2aWV3Lm9uKCdjbGljaycsIG1hbmlwdWxhdGVBY3Rpb25VcmwpO1xuXHRcdGRyb3Bkb3duLmdldE1lbnUoKS5vbignc2VsZWN0JywgbWFuaXB1bGF0ZVZhcmlhbnRDb25maWcpO1xuXHRcdGNvbnN0IGNoZWNrYm94RmllbGQ6IE9PLnVpLkZpZWxkTGF5b3V0PE9PLnVpLkNoZWNrYm94SW5wdXRXaWRnZXQ+ID0gbmV3IE9PLnVpLkZpZWxkTGF5b3V0KGNoZWNrYm94LCB7XG5cdFx0XHRhbGlnbjogJ2lubGluZScsXG5cdFx0XHRsYWJlbDogd2luZG93LndnVUxTKCfpooTop4jlrZfor43ovazmjaInLCAn6aCQ6Ka95a2X6Kme6L2J5o+bJyksXG5cdFx0fSk7XG5cdFx0Y29uc3QgZHJvcGRvd25GaWVsZDogT08udWkuRmllbGRMYXlvdXQ8T08udWkuRHJvcGRvd25XaWRnZXQ+ID0gbmV3IE9PLnVpLkZpZWxkTGF5b3V0KGRyb3Bkb3duLCB7XG5cdFx0XHRhbGlnbjogJ3RvcCcsXG5cdFx0XHRsYWJlbDogd2luZG93LndnVUxTKCfkvb/nlKjor6Xor63oqIDlj5jkvZPmmL7npLrpooTop4jvvJonLCAn5L2/55So6Kmy6Kqe6KiA6K6K6auU6aGv56S66aCQ6Ka977yaJyksXG5cdFx0XHRpbnZpc2libGVMYWJlbDogdHJ1ZSxcblx0XHR9KTtcblx0XHQkbGF5b3V0LmFwcGVuZCgkKCc8ZGl2PicpLmF0dHIoJ2lkJywgJ3B3di1hcmVhJykuYXBwZW5kKGNoZWNrYm94RmllbGQuJGVsZW1lbnQsIGRyb3Bkb3duRmllbGQuJGVsZW1lbnQpKTtcblx0fSk7XG5cblx0Ly8gUmVnaXN0ZXIgMjAxNyB3aWtpdGV4dCBlZGl0b3IgdmVyc2lvbiB0byBWRVxuXHR2b2lkIG13LmxvYWRlci51c2luZygnZXh0LnZpc3VhbEVkaXRvci5kZXNrdG9wQXJ0aWNsZVRhcmdldC5pbml0JykudGhlbigoKSA9PiB7XG5cdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnNhZmUtY2FsbFxuXHRcdG13LmxpYnNbJ3ZlJ10uYWRkUGx1Z2luKCdleHQuZ2FkZ2V0LlByZXZpZXdXaXRoVmFyaWFudDIwMTcnKTtcblx0fSk7XG59KSgpO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FJQyxTQUFTQSxxQkFBcUI7QUFDOUJDLEtBQUdDLE9BQU9DLElBQUksbUNBQW1DLEtBQUs7QUFFdERGLEtBQUdHLEtBQUssbUJBQW1CLEVBQUVDLElBQUtDLGVBQW9CO0FBRXJELFFBQUlMLEdBQUdDLE9BQU9LLElBQUksaUNBQWlDLEdBQUc7QUFDckQ7SUFDRDtBQUNBLFVBQU1DLDBCQUFrQ0YsVUFBVUcsS0FBSyx3Q0FBd0M7QUFHL0YsUUFBSVIsR0FBR0MsT0FBT0ssSUFBSSxvQkFBb0IsTUFBTSxjQUFjLENBQUNDLHdCQUF3QkUsUUFBUTtBQUMxRjtJQUNEO0FBQ0EsVUFBTUMsVUFBa0JMLFVBQVVHLEtBQUsseUNBQXlDO0FBQ2hGLFFBQUksQ0FBQ0UsUUFBUUQsUUFBUTtBQUNwQjtJQUNEO0FBRUFULE9BQUdDLE9BQU9DLElBQUksbUNBQW1DLElBQUk7QUFDckQsVUFBTVMsV0FHQSxDQUNMO01BQ0NDLE1BQU07TUFDTkMsT0FBT0MsT0FBT0MsTUFBTSxPQUFPLEtBQUs7SUFDakMsR0FDQTtNQUNDSCxNQUFNO01BQ05DLE9BQU87SUFDUixHQUNBO01BQ0NELE1BQU07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QUFNO0FBRTdFL0QsT0FBR2dFLEtBQUssSUFBSSxFQUFFQyxVQUFVLG1DQUFtQztFQUM1RCxDQUFDO0FBQ0YsR0FBRzsiLAogICJuYW1lcyI6IFsiUHJldmlld1dpdGhWYXJpYW50IiwgIm13IiwgImNvbmZpZyIsICJzZXQiLCAiaG9vayIsICJhZGQiLCAiJGVkaXRGb3JtIiwgImdldCIsICIkdGVtcGxhdGVTYW5kYm94UHJldmlldyIsICJmaW5kIiwgImxlbmd0aCIsICIkbGF5b3V0IiwgIlZBUklBTlRTIiwgImRhdGEiLCAibGFiZWwiLCAid2luZG93IiwgIndnVUxTIiwgInVyaVZhcmlhbnQiLCAidXRpbCIsICJnZXRQYXJhbVZhbHVlIiwgImNoZWNrYm94IiwgIk9PIiwgInVpIiwgIkNoZWNrYm94SW5wdXRXaWRnZXQiLCAic2VsZWN0ZWQiLCAiQm9vbGVhbiIsICJkcm9wZG93biIsICJEcm9wZG93bldpZGdldCIsICIkb3ZlcmxheSIsICJkaXNhYmxlZCIsICJpc1NlbGVjdGVkIiwgIm1lbnUiLCAiaXRlbXMiLCAibWFwIiwgIk1lbnVPcHRpb25XaWRnZXQiLCAiZ2V0TWVudSIsICJzZWxlY3RJdGVtQnlEYXRhIiwgInVzZXIiLCAib3B0aW9ucyIsICJvbiIsICJzZXREaXNhYmxlZCIsICJnZXRTZWxlY3RlZFZhcmlhbnQiLCAic2VsZWN0ZWRJdGVtIiwgImZpbmRTZWxlY3RlZEl0ZW0iLCAiZ2V0RGF0YSIsICJtYW5pcHVsYXRlQWN0aW9uVXJsIiwgInNlbGVjdGVkVmFyaWFudCIsICJvcmlnaW5hbEFjdGlvbiIsICJhdHRyIiwgIlVyaSIsICJleHRlbmQiLCAidmFyaWFudCIsICJnZXRSZWxhdGl2ZVBhdGgiLCAibWFuaXB1bGF0ZVZhcmlhbnRDb25maWciLCAiY2hlY2tib3hGaWVsZCIsICJGaWVsZExheW91dCIsICJhbGlnbiIsICJkcm9wZG93bkZpZWxkIiwgImludmlzaWJsZUxhYmVsIiwgImFwcGVuZCIsICIkIiwgIiRlbGVtZW50IiwgImxvYWRlciIsICJ1c2luZyIsICJ0aGVuIiwgImxpYnMiLCAiYWRkUGx1Z2luIl0KfQo=

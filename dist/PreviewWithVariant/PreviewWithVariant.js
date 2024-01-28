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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1ByZXZpZXdXaXRoVmFyaWFudC9QcmV2aWV3V2l0aFZhcmlhbnQudHMiXSwKICAic291cmNlUm9vdCI6ICIuLi9HYWRnZXRzIiwKICAic291cmNlc0NvbnRlbnQiOiBbIi8qKlxuICogQGRlc2NyaXB0aW9uIEFkZCBhIFwiUHJldmlldyB3aXRoIHZhcmlhbnRcIiBvcHRpb24gdG8gdGhlIGVkaXQgZm9ybS5cbiAqL1xubXcuY29uZmlnLnNldCgnd2dQcmV2aWV3V2l0aFZhcmlhbnRJbml0aWFsaXplZCcsIGZhbHNlKTtcblxubXcuaG9vaygnd2lraXBhZ2UuZWRpdGZvcm0nKS5hZGQoKCRlZGl0Rm9ybSk6IHZvaWQgPT4ge1xuXHRpZiAobXcuY29uZmlnLmdldCgnd2dQcmV2aWV3V2l0aFZhcmlhbnRJbml0aWFsaXplZCcpKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdGNvbnN0ICR0ZW1wbGF0ZVNhbmRib3hQcmV2aWV3OiBKUXVlcnkgPSAkZWRpdEZvcm0uZmluZCgnaW5wdXRbbmFtZT1cIndwVGVtcGxhdGVTYW5kYm94UHJldmlld1wiXScpO1xuXHQvLyBJdCBpcyBwb3NzaWJsZSB0aGF0IGEgdXNlciB3YW50IHRvIHByZXZpZXcgYSBwYWdlIHdpdGggYSBub24td2lraXRleHQgbW9kdWxlXG5cdC8vIERvIG5vdCByZXR1cm4gaW4gdGhpcyBjYXNlXG5cdGlmIChtdy5jb25maWcuZ2V0KCd3Z1BhZ2VDb250ZW50TW9kZWwnKSAhPT0gJ3dpa2l0ZXh0JyAmJiAhJHRlbXBsYXRlU2FuZGJveFByZXZpZXcubGVuZ3RoKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdGNvbnN0ICRsYXlvdXQ6IEpRdWVyeSA9ICRlZGl0Rm9ybS5maW5kKCcuZWRpdENoZWNrYm94ZXMgLm9vLXVpLWhvcml6b250YWxMYXlvdXQnKTtcblx0aWYgKCEkbGF5b3V0Lmxlbmd0aCkge1xuXHRcdHJldHVybjtcblx0fVxuXHRtdy5jb25maWcuc2V0KCd3Z1ByZXZpZXdXaXRoVmFyaWFudEluaXRpYWxpemVkJywgdHJ1ZSk7XG5cdGNvbnN0IFZBUklBTlRTOiB7XG5cdFx0ZGF0YTogc3RyaW5nO1xuXHRcdGxhYmVsOiBzdHJpbmc7XG5cdH1bXSA9IFtcblx0XHR7XG5cdFx0XHRkYXRhOiAnemgnLFxuXHRcdFx0bGFiZWw6IHdpbmRvdy53Z1VMUygn5LiN6L2s5o2iJywgJ+S4jei9ieaPmycpLFxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0ZGF0YTogJ3poLWhhbnMnLFxuXHRcdFx0bGFiZWw6ICfnroDkvZMnLFxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0ZGF0YTogJ3poLWhhbnQnLFxuXHRcdFx0bGFiZWw6ICfnuYHpq5QnLFxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0ZGF0YTogJ3poLWNuJyxcblx0XHRcdGxhYmVsOiAn5Lit5Zu95aSn6ZmG566A5L2TJyxcblx0XHR9LFxuXHRcdHtcblx0XHRcdGRhdGE6ICd6aC1oaycsXG5cdFx0XHRsYWJlbDogJ+S4reWci+mmmea4r+e5gemrlCcsXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRkYXRhOiAnemgtbW8nLFxuXHRcdFx0bGFiZWw6ICfkuK3lnIvmvrPploDnuYHpq5QnLFxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0ZGF0YTogJ3poLW15Jyxcblx0XHRcdGxhYmVsOiAn6ams5p2l6KW/5Lqa566A5L2TJyxcblx0XHR9LFxuXHRcdHtcblx0XHRcdGRhdGE6ICd6aC1zZycsXG5cdFx0XHRsYWJlbDogJ+aWsOWKoOWdoeeugOS9kycsXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRkYXRhOiAnemgtdHcnLFxuXHRcdFx0bGFiZWw6ICfkuK3lnIvoh7rngaPnuYHpq5QnLFxuXHRcdH0sXG5cdF07XG5cdGNvbnN0IHVyaVZhcmlhbnQ6IHN0cmluZyB8IG51bGwgPSBtdy51dGlsLmdldFBhcmFtVmFsdWUoJ3ZhcmlhbnQnKTtcblx0Y29uc3QgY2hlY2tib3g6IE9PLnVpLkNoZWNrYm94SW5wdXRXaWRnZXQgPSBuZXcgT08udWkuQ2hlY2tib3hJbnB1dFdpZGdldCh7XG5cdFx0c2VsZWN0ZWQ6IEJvb2xlYW4odXJpVmFyaWFudCksXG5cdH0pO1xuXHRjb25zdCBkcm9wZG93bjogT08udWkuRHJvcGRvd25XaWRnZXQgPSBuZXcgT08udWkuRHJvcGRvd25XaWRnZXQoe1xuXHRcdCRvdmVybGF5OiB0cnVlLFxuXHRcdGRpc2FibGVkOiAhY2hlY2tib3guaXNTZWxlY3RlZCgpLFxuXHRcdG1lbnU6IHtcblx0XHRcdGl0ZW1zOiBWQVJJQU5UUy5tYXAoKHtkYXRhLCBsYWJlbH0pOiBPTy51aS5NZW51T3B0aW9uV2lkZ2V0ID0+IHtcblx0XHRcdFx0cmV0dXJuIG5ldyBPTy51aS5NZW51T3B0aW9uV2lkZ2V0KHtcblx0XHRcdFx0XHRkYXRhLFxuXHRcdFx0XHRcdGxhYmVsLFxuXHRcdFx0XHR9KTtcblx0XHRcdH0pLFxuXHRcdH0sXG5cdH0pO1xuXHRkcm9wZG93bi5nZXRNZW51KCkuc2VsZWN0SXRlbUJ5RGF0YShtdy5jb25maWcuZ2V0KCd3Z1VzZXJWYXJpYW50JykgfHwgdXJpVmFyaWFudCB8fCBtdy51c2VyLm9wdGlvbnMuZ2V0KCd2YXJpYW50JykpO1xuXHRjaGVja2JveC5vbignY2hhbmdlJywgKHNlbGVjdGVkOiBib29sZWFuIHwgc3RyaW5nKTogdm9pZCA9PiB7XG5cdFx0ZHJvcGRvd24uc2V0RGlzYWJsZWQoIXNlbGVjdGVkKTtcblx0fSk7XG5cdGNvbnN0IGdldFNlbGVjdGVkVmFyaWFudCA9ICgpOiBzdHJpbmcgfCB1bmRlZmluZWQgPT4ge1xuXHRcdGlmICghY2hlY2tib3guaXNTZWxlY3RlZCgpKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGNvbnN0IHNlbGVjdGVkSXRlbTogT08udWkuT3B0aW9uV2lkZ2V0IHwgbnVsbCA9IGRyb3Bkb3duXG5cdFx0XHQuZ2V0TWVudSgpXG5cdFx0XHQuZmluZFNlbGVjdGVkSXRlbSgpIGFzIE9PLnVpLk9wdGlvbldpZGdldCB8IG51bGw7XG5cdFx0cmV0dXJuIHNlbGVjdGVkSXRlbSA/IChzZWxlY3RlZEl0ZW0uZ2V0RGF0YSgpIGFzIHN0cmluZykgOiB1bmRlZmluZWQ7XG5cdH07XG5cdGNvbnN0IG1hbmlwdWxhdGVBY3Rpb25VcmwgPSAoKTogdm9pZCA9PiB7XG5cdFx0Y29uc3Qgc2VsZWN0ZWRWYXJpYW50OiBzdHJpbmcgfCB1bmRlZmluZWQgPSBnZXRTZWxlY3RlZFZhcmlhbnQoKTtcblx0XHRjb25zdCBvcmlnaW5hbEFjdGlvbjogc3RyaW5nIHwgdW5kZWZpbmVkID0gJGVkaXRGb3JtLmF0dHIoJ2FjdGlvbicpO1xuXHRcdGlmIChzZWxlY3RlZFZhcmlhbnQgJiYgb3JpZ2luYWxBY3Rpb24pIHtcblx0XHRcdCRlZGl0Rm9ybS5hdHRyKFxuXHRcdFx0XHQnYWN0aW9uJyxcblx0XHRcdFx0bmV3IG13LlVyaShvcmlnaW5hbEFjdGlvbilcblx0XHRcdFx0XHQuZXh0ZW5kKHtcblx0XHRcdFx0XHRcdHZhcmlhbnQ6IHNlbGVjdGVkVmFyaWFudCxcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdC5nZXRSZWxhdGl2ZVBhdGgoKVxuXHRcdFx0KTtcblx0XHR9XG5cdH07XG5cdGNvbnN0IG1hbmlwdWxhdGVWYXJpYW50Q29uZmlnID0gKCk6IHZvaWQgPT4ge1xuXHRcdG13LmNvbmZpZy5zZXQoJ3dnVXNlclZhcmlhbnQnLCBnZXRTZWxlY3RlZFZhcmlhbnQoKSB8fCAobXcudXNlci5vcHRpb25zLmdldCgndmFyaWFudCcpIGFzIHN0cmluZykpO1xuXHR9O1xuXHQkZWRpdEZvcm1cblx0XHQuZmluZCgnI3dwUHJldmlldycpXG5cdFx0Lm9uKCdjbGljaycsIG13LnVzZXIub3B0aW9ucy5nZXQoJ3VzZWxpdmVwcmV2aWV3JykgPyBtYW5pcHVsYXRlVmFyaWFudENvbmZpZyA6IG1hbmlwdWxhdGVBY3Rpb25VcmwpO1xuXHQkdGVtcGxhdGVTYW5kYm94UHJldmlldy5vbignY2xpY2snLCBtYW5pcHVsYXRlQWN0aW9uVXJsKTtcblx0ZHJvcGRvd24uZ2V0TWVudSgpLm9uKCdzZWxlY3QnLCBtYW5pcHVsYXRlVmFyaWFudENvbmZpZyk7XG5cdGNvbnN0IGNoZWNrYm94RmllbGQ6IE9PLnVpLkZpZWxkTGF5b3V0PE9PLnVpLkNoZWNrYm94SW5wdXRXaWRnZXQ+ID0gbmV3IE9PLnVpLkZpZWxkTGF5b3V0KGNoZWNrYm94LCB7XG5cdFx0YWxpZ246ICdpbmxpbmUnLFxuXHRcdGxhYmVsOiB3aW5kb3cud2dVTFMoJ+mihOiniOWtl+ivjei9rOaNoicsICfpoJDopr3lrZfoqZ7ovYnmj5snKSxcblx0fSk7XG5cdGNvbnN0IGRyb3Bkb3duRmllbGQ6IE9PLnVpLkZpZWxkTGF5b3V0PE9PLnVpLkRyb3Bkb3duV2lkZ2V0PiA9IG5ldyBPTy51aS5GaWVsZExheW91dChkcm9wZG93biwge1xuXHRcdGFsaWduOiAndG9wJyxcblx0XHRsYWJlbDogd2luZG93LndnVUxTKCfkvb/nlKjor6Xor63oqIDlj5jkvZPmmL7npLrpooTop4jvvJonLCAn5L2/55So6Kmy6Kqe6KiA6K6K6auU6aGv56S66aCQ6Ka977yaJyksXG5cdFx0aW52aXNpYmxlTGFiZWw6IHRydWUsXG5cdH0pO1xuXHQkbGF5b3V0LmFwcGVuZCgkKCc8ZGl2PicpLmF0dHIoJ2lkJywgJ3B3di1hcmVhJykuYXBwZW5kKGNoZWNrYm94RmllbGQuJGVsZW1lbnQsIGRyb3Bkb3duRmllbGQuJGVsZW1lbnQpKTtcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7OztBQUdBQSxHQUFHQyxPQUFPQyxJQUFJLG1DQUFtQyxLQUFLO0FBRXRERixHQUFHRyxLQUFLLG1CQUFtQixFQUFFQyxJQUFLQyxlQUFvQjtBQUNyRCxNQUFJTCxHQUFHQyxPQUFPSyxJQUFJLGlDQUFpQyxHQUFHO0FBQ3JEO0VBQ0Q7QUFDQSxRQUFNQywwQkFBa0NGLFVBQVVHLEtBQUssd0NBQXdDO0FBRy9GLE1BQUlSLEdBQUdDLE9BQU9LLElBQUksb0JBQW9CLE1BQU0sY0FBYyxDQUFDQyx3QkFBd0JFLFFBQVE7QUFDMUY7RUFDRDtBQUNBLFFBQU1DLFVBQWtCTCxVQUFVRyxLQUFLLHlDQUF5QztBQUNoRixN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QixjQUFjO0lBQ2xEMEMsZ0JBQWdCO0VBQ2pCLENBQUM7QUFDRC9DLFVBQVFnRCxPQUFPQyxFQUFFLE9BQU8sRUFBRVosS0FBSyxNQUFNLFVBQVUsRUFBRVcsT0FBT0wsY0FBY08sVUFBVUosY0FBY0ksUUFBUSxDQUFDO0FBQ3hHLENBQUM7IiwKICAibmFtZXMiOiBbIm13IiwgImNvbmZpZyIsICJzZXQiLCAiaG9vayIsICJhZGQiLCAiJGVkaXRGb3JtIiwgImdldCIsICIkdGVtcGxhdGVTYW5kYm94UHJldmlldyIsICJmaW5kIiwgImxlbmd0aCIsICIkbGF5b3V0IiwgIlZBUklBTlRTIiwgImRhdGEiLCAibGFiZWwiLCAid2luZG93IiwgIndnVUxTIiwgInVyaVZhcmlhbnQiLCAidXRpbCIsICJnZXRQYXJhbVZhbHVlIiwgImNoZWNrYm94IiwgIk9PIiwgInVpIiwgIkNoZWNrYm94SW5wdXRXaWRnZXQiLCAic2VsZWN0ZWQiLCAiQm9vbGVhbiIsICJkcm9wZG93biIsICJEcm9wZG93bldpZGdldCIsICIkb3ZlcmxheSIsICJkaXNhYmxlZCIsICJpc1NlbGVjdGVkIiwgIm1lbnUiLCAiaXRlbXMiLCAibWFwIiwgIk1lbnVPcHRpb25XaWRnZXQiLCAiZ2V0TWVudSIsICJzZWxlY3RJdGVtQnlEYXRhIiwgInVzZXIiLCAib3B0aW9ucyIsICJvbiIsICJzZXREaXNhYmxlZCIsICJnZXRTZWxlY3RlZFZhcmlhbnQiLCAic2VsZWN0ZWRJdGVtIiwgImZpbmRTZWxlY3RlZEl0ZW0iLCAiZ2V0RGF0YSIsICJtYW5pcHVsYXRlQWN0aW9uVXJsIiwgInNlbGVjdGVkVmFyaWFudCIsICJvcmlnaW5hbEFjdGlvbiIsICJhdHRyIiwgIlVyaSIsICJleHRlbmQiLCAidmFyaWFudCIsICJnZXRSZWxhdGl2ZVBhdGgiLCAibWFuaXB1bGF0ZVZhcmlhbnRDb25maWciLCAiY2hlY2tib3hGaWVsZCIsICJGaWVsZExheW91dCIsICJhbGlnbiIsICJkcm9wZG93bkZpZWxkIiwgImludmlzaWJsZUxhYmVsIiwgImFwcGVuZCIsICIkIiwgIiRlbGVtZW50Il0KfQo=

})();

/* </nowiki> */

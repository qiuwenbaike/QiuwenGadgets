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

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1ByZXZpZXdXaXRoVmFyaWFudC9QcmV2aWV3V2l0aFZhcmlhbnQudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIi8qKlxuICogQGRlc2NyaXB0aW9uIEFkZCBhIFwiUHJldmlldyB3aXRoIHZhcmlhbnRcIiBvcHRpb24gdG8gdGhlIGVkaXQgZm9ybS5cbiAqL1xubXcuY29uZmlnLnNldCgnd2dQcmV2aWV3V2l0aFZhcmlhbnRJbml0aWFsaXplZCcsIGZhbHNlKTtcblxubXcuaG9vaygnd2lraXBhZ2UuZWRpdGZvcm0nKS5hZGQoKCRlZGl0Rm9ybSk6IHZvaWQgPT4ge1xuXHRpZiAobXcuY29uZmlnLmdldCgnd2dQcmV2aWV3V2l0aFZhcmlhbnRJbml0aWFsaXplZCcpKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdGNvbnN0ICR0ZW1wbGF0ZVNhbmRib3hQcmV2aWV3OiBKUXVlcnkgPSAkZWRpdEZvcm0uZmluZCgnaW5wdXRbbmFtZT1cIndwVGVtcGxhdGVTYW5kYm94UHJldmlld1wiXScpO1xuXHQvLyBJdCBpcyBwb3NzaWJsZSB0aGF0IGEgdXNlciB3YW50IHRvIHByZXZpZXcgYSBwYWdlIHdpdGggYSBub24td2lraXRleHQgbW9kdWxlXG5cdC8vIERvIG5vdCByZXR1cm4gaW4gdGhpcyBjYXNlXG5cdGlmIChtdy5jb25maWcuZ2V0KCd3Z1BhZ2VDb250ZW50TW9kZWwnKSAhPT0gJ3dpa2l0ZXh0JyAmJiAhJHRlbXBsYXRlU2FuZGJveFByZXZpZXcubGVuZ3RoKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdGNvbnN0ICRsYXlvdXQ6IEpRdWVyeSA9ICRlZGl0Rm9ybS5maW5kKCcuZWRpdENoZWNrYm94ZXMgLm9vLXVpLWhvcml6b250YWxMYXlvdXQnKTtcblx0aWYgKCEkbGF5b3V0Lmxlbmd0aCkge1xuXHRcdHJldHVybjtcblx0fVxuXHRtdy5jb25maWcuc2V0KCd3Z1ByZXZpZXdXaXRoVmFyaWFudEluaXRpYWxpemVkJywgdHJ1ZSk7XG5cdGNvbnN0IFZBUklBTlRTOiB7XG5cdFx0ZGF0YTogc3RyaW5nO1xuXHRcdGxhYmVsOiBzdHJpbmc7XG5cdH1bXSA9IFtcblx0XHR7XG5cdFx0XHRkYXRhOiAnemgnLFxuXHRcdFx0bGFiZWw6IHdpbmRvdy53Z1VMUygn5LiN6L2s5o2iJywgJ+S4jei9ieaPmycpLFxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0ZGF0YTogJ3poLWhhbnMnLFxuXHRcdFx0bGFiZWw6ICfnroDkvZMnLFxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0ZGF0YTogJ3poLWhhbnQnLFxuXHRcdFx0bGFiZWw6ICfnuYHpq5QnLFxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0ZGF0YTogJ3poLWNuJyxcblx0XHRcdGxhYmVsOiAn5Lit5Zu95aSn6ZmG566A5L2TJyxcblx0XHR9LFxuXHRcdHtcblx0XHRcdGRhdGE6ICd6aC1oaycsXG5cdFx0XHRsYWJlbDogJ+S4reWci+mmmea4r+e5gemrlCcsXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRkYXRhOiAnemgtbW8nLFxuXHRcdFx0bGFiZWw6ICfkuK3lnIvmvrPploDnuYHpq5QnLFxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0ZGF0YTogJ3poLW15Jyxcblx0XHRcdGxhYmVsOiAn6ams5p2l6KW/5Lqa566A5L2TJyxcblx0XHR9LFxuXHRcdHtcblx0XHRcdGRhdGE6ICd6aC1zZycsXG5cdFx0XHRsYWJlbDogJ+aWsOWKoOWdoeeugOS9kycsXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRkYXRhOiAnemgtdHcnLFxuXHRcdFx0bGFiZWw6ICfkuK3lnIvoh7rngaPnuYHpq5QnLFxuXHRcdH0sXG5cdF07XG5cdGNvbnN0IHVyaVZhcmlhbnQ6IHN0cmluZyB8IG51bGwgPSBtdy51dGlsLmdldFBhcmFtVmFsdWUoJ3ZhcmlhbnQnKTtcblx0Y29uc3QgY2hlY2tib3g6IE9PLnVpLkNoZWNrYm94SW5wdXRXaWRnZXQgPSBuZXcgT08udWkuQ2hlY2tib3hJbnB1dFdpZGdldCh7XG5cdFx0c2VsZWN0ZWQ6IEJvb2xlYW4odXJpVmFyaWFudCksXG5cdH0pO1xuXHRjb25zdCBkcm9wZG93bjogT08udWkuRHJvcGRvd25XaWRnZXQgPSBuZXcgT08udWkuRHJvcGRvd25XaWRnZXQoe1xuXHRcdCRvdmVybGF5OiB0cnVlLFxuXHRcdGRpc2FibGVkOiAhY2hlY2tib3guaXNTZWxlY3RlZCgpLFxuXHRcdG1lbnU6IHtcblx0XHRcdGl0ZW1zOiBWQVJJQU5UUy5tYXAoKHtkYXRhLCBsYWJlbH0pOiBPTy51aS5NZW51T3B0aW9uV2lkZ2V0ID0+IHtcblx0XHRcdFx0cmV0dXJuIG5ldyBPTy51aS5NZW51T3B0aW9uV2lkZ2V0KHtcblx0XHRcdFx0XHRkYXRhLFxuXHRcdFx0XHRcdGxhYmVsLFxuXHRcdFx0XHR9KTtcblx0XHRcdH0pLFxuXHRcdH0sXG5cdH0pO1xuXHRkcm9wZG93bi5nZXRNZW51KCkuc2VsZWN0SXRlbUJ5RGF0YShtdy5jb25maWcuZ2V0KCd3Z1VzZXJWYXJpYW50JykgfHwgdXJpVmFyaWFudCB8fCBtdy51c2VyLm9wdGlvbnMuZ2V0KCd2YXJpYW50JykpO1xuXHRjaGVja2JveC5vbignY2hhbmdlJywgKHNlbGVjdGVkOiBib29sZWFuIHwgc3RyaW5nKTogdm9pZCA9PiB7XG5cdFx0ZHJvcGRvd24uc2V0RGlzYWJsZWQoIXNlbGVjdGVkKTtcblx0fSk7XG5cdGNvbnN0IGdldFNlbGVjdGVkVmFyaWFudCA9ICgpOiBzdHJpbmcgfCB1bmRlZmluZWQgPT4ge1xuXHRcdGlmICghY2hlY2tib3guaXNTZWxlY3RlZCgpKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGNvbnN0IHNlbGVjdGVkSXRlbTogT08udWkuT3B0aW9uV2lkZ2V0IHwgbnVsbCA9IGRyb3Bkb3duXG5cdFx0XHQuZ2V0TWVudSgpXG5cdFx0XHQuZmluZFNlbGVjdGVkSXRlbSgpIGFzIE9PLnVpLk9wdGlvbldpZGdldCB8IG51bGw7XG5cdFx0cmV0dXJuIHNlbGVjdGVkSXRlbSA/IChzZWxlY3RlZEl0ZW0uZ2V0RGF0YSgpIGFzIHN0cmluZykgOiB1bmRlZmluZWQ7XG5cdH07XG5cdGNvbnN0IG1hbmlwdWxhdGVBY3Rpb25VcmwgPSAoKTogdm9pZCA9PiB7XG5cdFx0Y29uc3Qgc2VsZWN0ZWRWYXJpYW50OiBzdHJpbmcgfCB1bmRlZmluZWQgPSBnZXRTZWxlY3RlZFZhcmlhbnQoKTtcblx0XHRjb25zdCBvcmlnaW5hbEFjdGlvbjogc3RyaW5nIHwgdW5kZWZpbmVkID0gJGVkaXRGb3JtLmF0dHIoJ2FjdGlvbicpO1xuXHRcdGlmIChzZWxlY3RlZFZhcmlhbnQgJiYgb3JpZ2luYWxBY3Rpb24pIHtcblx0XHRcdCRlZGl0Rm9ybS5hdHRyKFxuXHRcdFx0XHQnYWN0aW9uJyxcblx0XHRcdFx0bmV3IG13LlVyaShvcmlnaW5hbEFjdGlvbilcblx0XHRcdFx0XHQuZXh0ZW5kKHtcblx0XHRcdFx0XHRcdHZhcmlhbnQ6IHNlbGVjdGVkVmFyaWFudCxcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdC5nZXRSZWxhdGl2ZVBhdGgoKVxuXHRcdFx0KTtcblx0XHR9XG5cdH07XG5cdGNvbnN0IG1hbmlwdWxhdGVWYXJpYW50Q29uZmlnID0gKCk6IHZvaWQgPT4ge1xuXHRcdG13LmNvbmZpZy5zZXQoJ3dnVXNlclZhcmlhbnQnLCBnZXRTZWxlY3RlZFZhcmlhbnQoKSB8fCAobXcudXNlci5vcHRpb25zLmdldCgndmFyaWFudCcpIGFzIHN0cmluZykpO1xuXHR9O1xuXHQkZWRpdEZvcm1cblx0XHQuZmluZCgnI3dwUHJldmlldycpXG5cdFx0Lm9uKCdjbGljaycsIG13LnVzZXIub3B0aW9ucy5nZXQoJ3VzZWxpdmVwcmV2aWV3JykgPyBtYW5pcHVsYXRlVmFyaWFudENvbmZpZyA6IG1hbmlwdWxhdGVBY3Rpb25VcmwpO1xuXHQkdGVtcGxhdGVTYW5kYm94UHJldmlldy5vbignY2xpY2snLCBtYW5pcHVsYXRlQWN0aW9uVXJsKTtcblx0ZHJvcGRvd24uZ2V0TWVudSgpLm9uKCdzZWxlY3QnLCBtYW5pcHVsYXRlVmFyaWFudENvbmZpZyk7XG5cdGNvbnN0IGNoZWNrYm94RmllbGQ6IE9PLnVpLkZpZWxkTGF5b3V0PE9PLnVpLkNoZWNrYm94SW5wdXRXaWRnZXQ+ID0gbmV3IE9PLnVpLkZpZWxkTGF5b3V0KGNoZWNrYm94LCB7XG5cdFx0YWxpZ246ICdpbmxpbmUnLFxuXHRcdGxhYmVsOiB3aW5kb3cud2dVTFMoJ+mihOiniOWtl+ivjei9rOaNoicsICfpoJDopr3lrZfoqZ7ovYnmj5snKSxcblx0fSk7XG5cdGNvbnN0IGRyb3Bkb3duRmllbGQ6IE9PLnVpLkZpZWxkTGF5b3V0PE9PLnVpLkRyb3Bkb3duV2lkZ2V0PiA9IG5ldyBPTy51aS5GaWVsZExheW91dChkcm9wZG93biwge1xuXHRcdGFsaWduOiAndG9wJyxcblx0XHRsYWJlbDogd2luZG93LndnVUxTKCfkvb/nlKjor6Xor63oqIDlj5jkvZPmmL7npLrpooTop4jvvJonLCAn5L2/55So6Kmy6Kqe6KiA6K6K6auU6aGv56S66aCQ6Ka977yaJyksXG5cdFx0aW52aXNpYmxlTGFiZWw6IHRydWUsXG5cdH0pO1xuXHQkbGF5b3V0LmFwcGVuZCgkKCc8ZGl2PicpLmF0dHIoJ2lkJywgJ3B3di1hcmVhJykuYXBwZW5kKGNoZWNrYm94RmllbGQuJGVsZW1lbnQsIGRyb3Bkb3duRmllbGQuJGVsZW1lbnQpKTtcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHQUEsR0FBR0MsT0FBT0MsSUFBSSxtQ0FBbUMsS0FBSztBQUV0REYsR0FBR0csS0FBSyxtQkFBbUIsRUFBRUMsSUFBS0MsZUFBb0I7QUFDckQsTUFBSUwsR0FBR0MsT0FBT0ssSUFBSSxpQ0FBaUMsR0FBRztBQUNyRDtFQUNEO0FBQ0EsUUFBTUMsMEJBQWtDRixVQUFVRyxLQUFLLHdDQUF3QztBQUcvRixNQUFJUixHQUFHQyxPQUFPSyxJQUFJLG9CQUFvQixNQUFNLGNBQWMsQ0FBQ0Msd0JBQXdCRSxRQUFRO0FBQzFGO0VBQ0Q7QUFDQSxRQUFNQyxVQUFrQkwsVUFBVUcsS0FBSyx5Q0FBeUM7QUFDaEYsTUFBSSxDQUFD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QUNsRDBDLGdCQUFnQjtFQUNqQixDQUFDO0FBQ0QvQyxVQUFRZ0QsT0FBT0MsRUFBRSxPQUFPLEVBQUVaLEtBQUssTUFBTSxVQUFVLEVBQUVXLE9BQU9MLGNBQWNPLFVBQVVKLGNBQWNJLFFBQVEsQ0FBQztBQUN4RyxDQUFDOyIsCiAgIm5hbWVzIjogWyJtdyIsICJjb25maWciLCAic2V0IiwgImhvb2siLCAiYWRkIiwgIiRlZGl0Rm9ybSIsICJnZXQiLCAiJHRlbXBsYXRlU2FuZGJveFByZXZpZXciLCAiZmluZCIsICJsZW5ndGgiLCAiJGxheW91dCIsICJWQVJJQU5UUyIsICJkYXRhIiwgImxhYmVsIiwgIndpbmRvdyIsICJ3Z1VMUyIsICJ1cmlWYXJpYW50IiwgInV0aWwiLCAiZ2V0UGFyYW1WYWx1ZSIsICJjaGVja2JveCIsICJPTyIsICJ1aSIsICJDaGVja2JveElucHV0V2lkZ2V0IiwgInNlbGVjdGVkIiwgIkJvb2xlYW4iLCAiZHJvcGRvd24iLCAiRHJvcGRvd25XaWRnZXQiLCAiJG92ZXJsYXkiLCAiZGlzYWJsZWQiLCAiaXNTZWxlY3RlZCIsICJtZW51IiwgIml0ZW1zIiwgIm1hcCIsICJNZW51T3B0aW9uV2lkZ2V0IiwgImdldE1lbnUiLCAic2VsZWN0SXRlbUJ5RGF0YSIsICJ1c2VyIiwgIm9wdGlvbnMiLCAib24iLCAic2V0RGlzYWJsZWQiLCAiZ2V0U2VsZWN0ZWRWYXJpYW50IiwgInNlbGVjdGVkSXRlbSIsICJmaW5kU2VsZWN0ZWRJdGVtIiwgImdldERhdGEiLCAibWFuaXB1bGF0ZUFjdGlvblVybCIsICJzZWxlY3RlZFZhcmlhbnQiLCAib3JpZ2luYWxBY3Rpb24iLCAiYXR0ciIsICJVcmkiLCAiZXh0ZW5kIiwgInZhcmlhbnQiLCAiZ2V0UmVsYXRpdmVQYXRoIiwgIm1hbmlwdWxhdGVWYXJpYW50Q29uZmlnIiwgImNoZWNrYm94RmllbGQiLCAiRmllbGRMYXlvdXQiLCAiYWxpZ24iLCAiZHJvcGRvd25GaWVsZCIsICJpbnZpc2libGVMYWJlbCIsICJhcHBlbmQiLCAiJCIsICIkZWxlbWVudCJdCn0K

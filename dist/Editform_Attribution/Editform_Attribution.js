/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/Editform_Attribution}
 * @license CC-BY-SA-4.0 {@link https://www.qiuwenbaike.cn/wiki/H:CC-BY-SA-4.0}
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

// dist/Editform_Attribution/Editform_Attribution.js
function _createForOfIteratorHelper(r, e) {
  var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (!t) {
    if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) {
      t && (r = t);
      var n = 0, F = function() {
      };
      return { s: F, n: function() {
        return n >= r.length ? { done: true } : { done: false, value: r[n++] };
      }, e: function(r2) {
        throw r2;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var o, a = true, u = false;
  return { s: function() {
    t = t.call(r);
  }, n: function() {
    var r2 = t.next();
    return a = r2.done, r2;
  }, e: function(r2) {
    u = true, o = r2;
  }, f: function() {
    try {
      a || null == t.return || t.return();
    } finally {
      if (u) throw o;
    }
  } };
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}
function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
//! src/Editform_Attribution/Editform_Attribution.ts
var import_ext_gadget2 = require("ext.gadget.Util");
//! src/Editform_Attribution/options.json
var configKey = "gadget-Editform_Attribution__Initialized";
var configKeyVe = "gadget-Editform_Attribution__Initialized__VE";
var inputId = "editform_attribution";
var targetWikiEditor = ".editCheckboxes .oo-ui-horizontalLayout";
//! src/Editform_Attribution/modules/util/Editform_Attribution.module.less
var formWrap = "Editform-Attribution-module__formWrap_m5j2Ua__490";
//! src/Editform_Attribution/modules/i18n.ts
var import_ext_gadget = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    "Add to Edit Summary": (0, import_ext_gadget.localize)({
      en: "Add to Edit Summary",
      "zh-hans": "添加至编辑摘要",
      "zh-hant": "添加至編輯摘要"
    }),
    Source: (0, import_ext_gadget.localize)({
      en: "Source",
      "zh-hans": "内容来源",
      "zh-hant": "內容來源"
    }),
    License: (0, import_ext_gadget.localize)({
      en: "License",
      "zh-hans": "许可证",
      "zh-hant": "許可證"
    }),
    "Other License": (0, import_ext_gadget.localize)({
      en: "Other license",
      "zh-hans": "其他许可证",
      "zh-hant": "其他許可證"
    }),
    "Please Claim Sources and Licenses": (0, import_ext_gadget.localize)({
      en: "If edit content adds any third-party content, please add the source and license of the third-party content separately to the editing summary.",
      "zh-hans": "若您向编辑内容中添加了第三方撰写的内容，请将相关第三方内容的来源、许可条款在编辑摘要中分条声明",
      "zh-hant": "若您向編輯內容中添加了第三方撰写的內容，請將相关第三方內容的來源、許可條款在編輯摘要中分條聲明"
    }),
    "Replace With License": (0, import_ext_gadget.localize)({
      en: " (Replace with license name and URL)",
      "zh-hans": "（替换为许可证名称和网址）",
      "zh-hant": "（替換爲許可證名稱和網址）"
    })
  };
};
var i18nMessages = getI18nMessages();
var getMessage = (key) => {
  return i18nMessages[key] || key;
};
//! src/Editform_Attribution/modules/util/getAttribution.ts
var getAttribution = (fieldSetLayout) => {
  const attributions = [];
  const getSelectedValue = (dropdown) => {
    const selectedItem = dropdown.getMenu().findSelectedItem();
    return selectedItem ? selectedItem.getData() : void 0;
  };
  var _iterator = _createForOfIteratorHelper(fieldSetLayout.getItems()), _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done; ) {
      const attributionFieldset = _step.value;
      const attribution = {};
      var _iterator2 = _createForOfIteratorHelper(attributionFieldset.getItems()), _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
          const fieldLayout = _step2.value;
          const field = fieldLayout.getField();
          if (field.supports("getValue")) {
            const value = field.getValue();
            if (value) {
              attribution.source = value;
            }
          } else if (field.supports("getMenu")) {
            const value = getSelectedValue(field);
            if (value) {
              attribution.license = value;
            }
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      if (attribution.source && attribution.license) {
        attributions[attributions.length] = "".concat(attribution.source, " (").concat(getMessage("License"), ": ").concat(attribution.license, ")");
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return attributions.join(" ");
};
var updateWpAttribution = ({
  $body,
  parentFieldSet
}) => {
  let wpAttribution = "";
  const $wpAttribution = $("<input>").attr({
    id: "wpAttribution",
    name: "wpAttribution",
    type: "hidden",
    value: ""
  });
  const $originwpAttribution = $body.find("input[name=wpAttribution]");
  if (!$originwpAttribution.length) {
    $body.prepend($wpAttribution);
  }
  wpAttribution = getAttribution(parentFieldSet);
  $originwpAttribution.val(wpAttribution);
};
//! src/Editform_Attribution/modules/constant.ts
var LICENSES = [{
  label: "CC BY-SA 4.0",
  data: "https://creativecommons.org/licenses/by-sa/4.0/"
}, {
  label: "CC BY-SA 3.0",
  data: "https://creativecommons.org/licenses/by-sa/3.0/"
}, {
  label: "CC BY-SA 3.0 CN",
  data: "https://creativecommons.org/licenses/by-sa/3.0/cn/"
}, {
  label: "CC0-1.0",
  data: "https://creativecommons.org/publicdomain/zero/1.0/"
}, {
  label: "KOGL Type I: Attribution",
  data: "https://www.kogl.or.kr/info/licenseType1.do"
}, {
  label: getMessage("Other License"),
  data: getMessage("Replace With License")
}];
//! src/Editform_Attribution/modules/util/appendTextToSummary.ts
var appendTextToSummary = ({
  customSummary,
  $wpSummary
}) => {
  var _$wpSummary$val;
  const originSummary = (_$wpSummary$val = $wpSummary.val()) !== null && _$wpSummary$val !== void 0 ? _$wpSummary$val : "";
  $wpSummary.val(originSummary.trim() ? "".concat(originSummary, " ").concat(customSummary) : customSummary).trigger("change");
};
//! src/Editform_Attribution/modules/util/generateTextInputWithDropdown.ts
var getTextInput = (...onChanges) => {
  const textInput = new OO.ui.TextInputWidget({
    placeholder: getMessage("Source")
  });
  for (var _i = 0, _onChanges = onChanges; _i < _onChanges.length; _i++) {
    const onChange = _onChanges[_i];
    textInput.on("change", onChange);
  }
  return textInput;
};
var getDropDown = (...onSelects) => {
  const dropdown = new OO.ui.DropdownWidget({
    label: getMessage("License")
  });
  const menuOptions = [];
  for (var _i2 = 0, _LICENSES = LICENSES; _i2 < _LICENSES.length; _i2++) {
    const {
      data,
      label
    } = _LICENSES[_i2];
    menuOptions[menuOptions.length] = new OO.ui.MenuOptionWidget({
      data,
      label
    });
  }
  dropdown.getMenu().addItems(menuOptions);
  for (var _i3 = 0, _onSelects = onSelects; _i3 < _onSelects.length; _i3++) {
    const onSelect = _onSelects[_i3];
    dropdown.getMenu().on("select", onSelect);
  }
  return dropdown;
};
var getAddItemButton = (...onClicks) => {
  const addItemButton = new OO.ui.ButtonInputWidget({
    label: getMessage("Add to Edit Summary")
  });
  for (var _i4 = 0, _onClicks = onClicks; _i4 < _onClicks.length; _i4++) {
    const onClick = _onClicks[_i4];
    addItemButton.on("click", onClick);
  }
  return addItemButton;
};
var generateTextInputWithDropdown = ({
  $body,
  $wpSummary
}) => {
  const initialFieldset = new OO.ui.FieldsetLayout();
  const parentFieldSet = new OO.ui.FieldsetLayout({
    label: getMessage("Please Claim Sources and Licenses")
  });
  const inputOnChange = () => {
    updateWpAttribution({
      $body,
      parentFieldSet
    });
  };
  const textInput = getTextInput(inputOnChange);
  const dropDown = getDropDown(inputOnChange);
  const addItemOnClick = () => {
    let wpAttribution = "";
    const $wpAttribution = $("<input>").attr({
      id: "wpAttribution",
      name: "wpAttribution",
      type: "hidden",
      value: ""
    });
    const $originwpAttribution = $body.find("input[name=wpAttribution]");
    if (!$originwpAttribution.length) {
      $body.prepend($wpAttribution);
    }
    wpAttribution = getAttribution(parentFieldSet);
    $originwpAttribution.val(wpAttribution);
    appendTextToSummary({
      customSummary: $originwpAttribution.val() ? "［".concat(getMessage("Source"), ": ").concat($originwpAttribution.val(), "］") : "",
      $wpSummary
    });
    textInput.setValue("");
    dropDown.getMenu().unselectItem();
  };
  const addItemButton = getAddItemButton(addItemOnClick);
  initialFieldset.addItems([new OO.ui.FieldLayout(textInput, {
    label: getMessage("Source"),
    align: "inline"
  }), new OO.ui.FieldLayout(dropDown, {
    label: getMessage("License"),
    align: "inline"
  }), new OO.ui.FieldLayout(addItemButton, {
    align: "inline"
  })]);
  parentFieldSet.addItems([initialFieldset]);
  return parentFieldSet;
};
//! src/Editform_Attribution/modules/util/generateLayout.ts
var generateVisualEditorLayout = ({
  $body
}) => {
  const {
    target
  } = window.ve.init;
  const $wpSummary = target.saveDialog.editSummaryInput.$input;
  const textInputWithDropdown = generateTextInputWithDropdown({
    $body,
    $wpSummary
  });
  const $layout = $("<div>").attr("id", inputId).addClass(formWrap);
  $layout.append(textInputWithDropdown.$element);
  return $layout;
};
var generateWikiEditorLayout = ({
  $body,
  $editForm
}) => {
  const $wpSummary = $editForm.find("input[name=wpSummary]");
  const textInputWithDropdown = generateTextInputWithDropdown({
    $body,
    $wpSummary
  });
  const $layout = $("<div>").attr("id", inputId).addClass(formWrap);
  $layout.append(textInputWithDropdown.$element);
  return $layout;
};
//! src/Editform_Attribution/modules/processVisualEditor.ts
var processVisualEditor = ({
  $body
}) => {
  if (mw.config.get(configKeyVe)) {
    return;
  }
  const {
    target
  } = window.ve.init;
  const {
    saveDialog
  } = target;
  const {
    $saveOptions
  } = saveDialog;
  if (!$saveOptions.length) {
    return;
  }
  mw.config.set(configKeyVe, true);
  const $layout = generateVisualEditorLayout({
    $body
  });
  if (!$body.find("#".concat(inputId)).length) {
    $saveOptions.append($layout);
  }
  mw.hook("ve.activationComplete").add(() => {
    if (mw.config.get(configKeyVe)) {
      mw.config.set(configKeyVe, false);
    }
  });
};
//! src/Editform_Attribution/modules/processWikiEditor.ts
var processWikiEditor = ({
  $body,
  $editForm
}) => {
  if (mw.config.get(configKey)) {
    return;
  }
  const $target = $editForm.find(targetWikiEditor);
  if (!$target.length) {
    return;
  }
  mw.config.set(configKey, true);
  const $layout = generateWikiEditorLayout({
    $body,
    $editForm
  });
  if (!$body.find("#".concat(inputId)).length) {
    $target.after($layout);
  }
};
//! src/Editform_Attribution/Editform_Attribution.ts
void (0, import_ext_gadget2.getBody)().then(function editForm($body) {
  mw.hook("wikipage.editform").add(($editForm) => {
    processWikiEditor({
      $body,
      $editForm
    });
  });
  mw.hook("ve.saveDialog.stateChanged").add(() => {
    processVisualEditor({
      $body
    });
  });
});

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0VkaXRmb3JtX0F0dHJpYnV0aW9uL0VkaXRmb3JtX0F0dHJpYnV0aW9uLnRzIiwgInNyYy9FZGl0Zm9ybV9BdHRyaWJ1dGlvbi9vcHRpb25zLmpzb24iLCAic3JjL0VkaXRmb3JtX0F0dHJpYnV0aW9uL21vZHVsZXMvdXRpbC9FZGl0Zm9ybV9BdHRyaWJ1dGlvbi5tb2R1bGUubGVzcyIsICJzcmMvRWRpdGZvcm1fQXR0cmlidXRpb24vbW9kdWxlcy9pMThuLnRzIiwgInNyYy9FZGl0Zm9ybV9BdHRyaWJ1dGlvbi9tb2R1bGVzL3V0aWwvZ2V0QXR0cmlidXRpb24udHMiLCAic3JjL0VkaXRmb3JtX0F0dHJpYnV0aW9uL21vZHVsZXMvY29uc3RhbnQudHMiLCAic3JjL0VkaXRmb3JtX0F0dHJpYnV0aW9uL21vZHVsZXMvdXRpbC9hcHBlbmRUZXh0VG9TdW1tYXJ5LnRzIiwgInNyYy9FZGl0Zm9ybV9BdHRyaWJ1dGlvbi9tb2R1bGVzL3V0aWwvZ2VuZXJhdGVUZXh0SW5wdXRXaXRoRHJvcGRvd24udHMiLCAic3JjL0VkaXRmb3JtX0F0dHJpYnV0aW9uL21vZHVsZXMvdXRpbC9nZW5lcmF0ZUxheW91dC50cyIsICJzcmMvRWRpdGZvcm1fQXR0cmlidXRpb24vbW9kdWxlcy9wcm9jZXNzVmlzdWFsRWRpdG9yLnRzIiwgInNyYy9FZGl0Zm9ybV9BdHRyaWJ1dGlvbi9tb2R1bGVzL3Byb2Nlc3NXaWtpRWRpdG9yLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQge2dldEJvZHl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5pbXBvcnQge3Byb2Nlc3NWaXN1YWxFZGl0b3J9IGZyb20gJy4vbW9kdWxlcy9wcm9jZXNzVmlzdWFsRWRpdG9yJztcbmltcG9ydCB7cHJvY2Vzc1dpa2lFZGl0b3J9IGZyb20gJy4vbW9kdWxlcy9wcm9jZXNzV2lraUVkaXRvcic7XG5cbi8qKlxuICogQGRlc2NyaXB0aW9uIOesrOS4ieaWueadpea6kOeJueauiuWjsOaYjlxuICovXG52b2lkIGdldEJvZHkoKS50aGVuKGZ1bmN0aW9uIGVkaXRGb3JtKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQge1xuXHRtdy5ob29rKCd3aWtpcGFnZS5lZGl0Zm9ybScpLmFkZCgoJGVkaXRGb3JtKTogdm9pZCA9PiB7XG5cdFx0cHJvY2Vzc1dpa2lFZGl0b3Ioe1xuXHRcdFx0JGJvZHksXG5cdFx0XHQkZWRpdEZvcm0sXG5cdFx0fSk7XG5cdH0pO1xuXG5cdG13Lmhvb2soJ3ZlLnNhdmVEaWFsb2cuc3RhdGVDaGFuZ2VkJykuYWRkKCgpOiB2b2lkID0+IHtcblx0XHRwcm9jZXNzVmlzdWFsRWRpdG9yKHskYm9keX0pO1xuXHR9KTtcbn0pO1xuIiwgIntcblx0XCJjb25maWdLZXlcIjogXCJnYWRnZXQtRWRpdGZvcm1fQXR0cmlidXRpb25fX0luaXRpYWxpemVkXCIsXG5cdFwiY29uZmlnS2V5VmVcIjogXCJnYWRnZXQtRWRpdGZvcm1fQXR0cmlidXRpb25fX0luaXRpYWxpemVkX19WRVwiLFxuXHRcImNoYW5nZVRhZ1wiOiBcIkF0dHJpYnV0aW9uX2FkZGVkXCIsXG5cdFwiaW5wdXRJZFwiOiBcImVkaXRmb3JtX2F0dHJpYnV0aW9uXCIsXG5cdFwidGFyZ2V0V2lraUVkaXRvclwiOiBcIi5lZGl0Q2hlY2tib3hlcyAub28tdWktaG9yaXpvbnRhbExheW91dFwiXG59XG4iLCAiaW1wb3J0IFwiZXNidWlsZC1jc3MtbW9kdWxlcy1wbHVnaW4tbnMtY3NzOnNyYy9FZGl0Zm9ybV9BdHRyaWJ1dGlvbi9tb2R1bGVzL3V0aWwvRWRpdGZvcm1fQXR0cmlidXRpb24ubW9kdWxlLmxlc3NcIjtcbmV4cG9ydCBjb25zdCBmb3JtV3JhcCA9IFwiRWRpdGZvcm0tQXR0cmlidXRpb24tbW9kdWxlX19mb3JtV3JhcF9tNWoyVWFfXzQ5MFwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIFwiZm9ybVdyYXBcIjogZm9ybVdyYXBcbn07XG4gICAgICAiLCAiaW1wb3J0IHtsb2NhbGl6ZX0gZnJvbSAnZXh0LmdhZGdldC5pMThuJztcblxuY29uc3QgZ2V0STE4bk1lc3NhZ2VzID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdCdBZGQgdG8gRWRpdCBTdW1tYXJ5JzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdBZGQgdG8gRWRpdCBTdW1tYXJ5Jyxcblx0XHRcdCd6aC1oYW5zJzogJ+a3u+WKoOiHs+e8lui+keaRmOimgScsXG5cdFx0XHQnemgtaGFudCc6ICfmt7vliqDoh7Pnt6jovK/mkZjopoEnLFxuXHRcdH0pLFxuXHRcdFNvdXJjZTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdTb3VyY2UnLFxuXHRcdFx0J3poLWhhbnMnOiAn5YaF5a655p2l5rqQJyxcblx0XHRcdCd6aC1oYW50JzogJ+WFp+WuueS+hua6kCcsXG5cdFx0fSksXG5cdFx0TGljZW5zZTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdMaWNlbnNlJyxcblx0XHRcdCd6aC1oYW5zJzogJ+iuuOWPr+ivgScsXG5cdFx0XHQnemgtaGFudCc6ICfoqLHlj6/orYknLFxuXHRcdH0pLFxuXHRcdCdPdGhlciBMaWNlbnNlJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdPdGhlciBsaWNlbnNlJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WFtuS7luiuuOWPr+ivgScsXG5cdFx0XHQnemgtaGFudCc6ICflhbbku5boqLHlj6/orYknLFxuXHRcdH0pLFxuXHRcdCdQbGVhc2UgQ2xhaW0gU291cmNlcyBhbmQgTGljZW5zZXMnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0lmIGVkaXQgY29udGVudCBhZGRzIGFueSB0aGlyZC1wYXJ0eSBjb250ZW50LCBwbGVhc2UgYWRkIHRoZSBzb3VyY2UgYW5kIGxpY2Vuc2Ugb2YgdGhlIHRoaXJkLXBhcnR5IGNvbnRlbnQgc2VwYXJhdGVseSB0byB0aGUgZWRpdGluZyBzdW1tYXJ5LicsXG5cdFx0XHQnemgtaGFucyc6ICfoi6XmgqjlkJHnvJbovpHlhoXlrrnkuK3mt7vliqDkuobnrKzkuInmlrnmkrDlhpnnmoTlhoXlrrnvvIzor7flsIbnm7jlhbPnrKzkuInmlrnlhoXlrrnnmoTmnaXmupDjgIHorrjlj6/mnaHmrL7lnKjnvJbovpHmkZjopoHkuK3liIbmnaHlo7DmmI4nLFxuXHRcdFx0J3poLWhhbnQnOiAn6Iul5oKo5ZCR57eo6Lyv5YWn5a655Lit5re75Yqg5LqG56ys5LiJ5pa55pKw5YaZ55qE5YWn5a6577yM6KuL5bCH55u45YWz56ys5LiJ5pa55YWn5a6555qE5L6G5rqQ44CB6Kix5Y+v5qKd5qy+5Zyo57eo6Lyv5pGY6KaB5Lit5YiG5qKd6IGy5piOJyxcblx0XHR9KSxcblx0XHQnUmVwbGFjZSBXaXRoIExpY2Vuc2UnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJyAoUmVwbGFjZSB3aXRoIGxpY2Vuc2UgbmFtZSBhbmQgVVJMKScsXG5cdFx0XHQnemgtaGFucyc6ICfvvIjmm7/mjaLkuLrorrjlj6/or4HlkI3np7DlkoznvZHlnYDvvIknLFxuXHRcdFx0J3poLWhhbnQnOiAn77yI5pu/5o+b54iy6Kix5Y+v6K2J5ZCN56ix5ZKM57ay5Z2A77yJJyxcblx0XHR9KSxcblx0fTtcbn07XG5cbmNvbnN0IGkxOG5NZXNzYWdlcyA9IGdldEkxOG5NZXNzYWdlcygpO1xuXG5jb25zdCBnZXRNZXNzYWdlOiBHZXRNZXNzYWdlczx0eXBlb2YgaTE4bk1lc3NhZ2VzPiA9IChrZXkpID0+IHtcblx0cmV0dXJuIGkxOG5NZXNzYWdlc1trZXldIHx8IGtleTtcbn07XG5cbmV4cG9ydCB7Z2V0TWVzc2FnZX07XG4iLCAiaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuLi9pMThuJztcblxuY29uc3QgZ2V0QXR0cmlidXRpb24gPSAoZmllbGRTZXRMYXlvdXQ6IE9PLnVpLkZpZWxkc2V0TGF5b3V0KSA9PiB7XG5cdGNvbnN0IGF0dHJpYnV0aW9ucyA9IFtdO1xuXG5cdGNvbnN0IGdldFNlbGVjdGVkVmFsdWUgPSAoZHJvcGRvd246IE9PLnVpLkRyb3Bkb3duV2lkZ2V0KTogc3RyaW5nIHwgdW5kZWZpbmVkID0+IHtcblx0XHRjb25zdCBzZWxlY3RlZEl0ZW06IE9PLnVpLk9wdGlvbldpZGdldCB8IG51bGwgPSBkcm9wZG93blxuXHRcdFx0LmdldE1lbnUoKVxuXHRcdFx0LmZpbmRTZWxlY3RlZEl0ZW0oKSBhcyBPTy51aS5PcHRpb25XaWRnZXQgfCBudWxsO1xuXHRcdHJldHVybiBzZWxlY3RlZEl0ZW0gPyAoc2VsZWN0ZWRJdGVtLmdldERhdGEoKSBhcyBzdHJpbmcpIDogdW5kZWZpbmVkO1xuXHR9O1xuXG5cdGZvciAoY29uc3QgYXR0cmlidXRpb25GaWVsZHNldCBvZiBmaWVsZFNldExheW91dC5nZXRJdGVtcygpIGFzIE9PLnVpLkZpZWxkc2V0TGF5b3V0W10pIHtcblx0XHRjb25zdCBhdHRyaWJ1dGlvbjoge3NvdXJjZT86IHN0cmluZzsgbGljZW5zZT86IHN0cmluZ30gPSB7fTtcblxuXHRcdGZvciAoY29uc3QgZmllbGRMYXlvdXQgb2YgYXR0cmlidXRpb25GaWVsZHNldC5nZXRJdGVtcygpIGFzIE9PLnVpLkZpZWxkTGF5b3V0W10pIHtcblx0XHRcdGNvbnN0IGZpZWxkID0gZmllbGRMYXlvdXQuZ2V0RmllbGQoKTtcblxuXHRcdFx0aWYgKGZpZWxkLnN1cHBvcnRzKCdnZXRWYWx1ZScpKSB7XG5cdFx0XHRcdGNvbnN0IHZhbHVlID0gKGZpZWxkIGFzIE9PLnVpLlRleHRJbnB1dFdpZGdldCkuZ2V0VmFsdWUoKTtcblx0XHRcdFx0aWYgKHZhbHVlKSB7XG5cdFx0XHRcdFx0YXR0cmlidXRpb24uc291cmNlID0gdmFsdWU7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSBpZiAoZmllbGQuc3VwcG9ydHMoJ2dldE1lbnUnKSkge1xuXHRcdFx0XHRjb25zdCB2YWx1ZSA9IGdldFNlbGVjdGVkVmFsdWUoZmllbGQgYXMgT08udWkuRHJvcGRvd25XaWRnZXQpO1xuXHRcdFx0XHRpZiAodmFsdWUpIHtcblx0XHRcdFx0XHRhdHRyaWJ1dGlvbi5saWNlbnNlID0gdmFsdWU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoYXR0cmlidXRpb24uc291cmNlICYmIGF0dHJpYnV0aW9uLmxpY2Vuc2UpIHtcblx0XHRcdGF0dHJpYnV0aW9uc1thdHRyaWJ1dGlvbnMubGVuZ3RoXSA9XG5cdFx0XHRcdGAke2F0dHJpYnV0aW9uLnNvdXJjZX0gKCR7Z2V0TWVzc2FnZSgnTGljZW5zZScpfTogJHthdHRyaWJ1dGlvbi5saWNlbnNlfSlgO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBhdHRyaWJ1dGlvbnMuam9pbignICcpO1xufTtcblxuY29uc3QgdXBkYXRlV3BBdHRyaWJ1dGlvbiA9ICh7XG5cdCRib2R5LFxuXHRwYXJlbnRGaWVsZFNldCxcbn06IHtcblx0JGJvZHk6IEpRdWVyeTxIVE1MRWxlbWVudD47XG5cdHBhcmVudEZpZWxkU2V0OiBPTy51aS5GaWVsZHNldExheW91dDtcbn0pID0+IHtcblx0bGV0IHdwQXR0cmlidXRpb246IHN0cmluZyA9ICcnO1xuXG5cdGNvbnN0ICR3cEF0dHJpYnV0aW9uOiBKUXVlcnkgPSAkKCc8aW5wdXQ+JykuYXR0cih7XG5cdFx0aWQ6ICd3cEF0dHJpYnV0aW9uJyxcblx0XHRuYW1lOiAnd3BBdHRyaWJ1dGlvbicsXG5cdFx0dHlwZTogJ2hpZGRlbicsXG5cdFx0dmFsdWU6ICcnLFxuXHR9KTtcblx0Y29uc3QgJG9yaWdpbndwQXR0cmlidXRpb246IEpRdWVyeSA9ICRib2R5LmZpbmQoJ2lucHV0W25hbWU9d3BBdHRyaWJ1dGlvbl0nKTtcblx0aWYgKCEkb3JpZ2lud3BBdHRyaWJ1dGlvbi5sZW5ndGgpIHtcblx0XHQkYm9keS5wcmVwZW5kKCR3cEF0dHJpYnV0aW9uKTtcblx0fVxuXG5cdHdwQXR0cmlidXRpb24gPSBnZXRBdHRyaWJ1dGlvbihwYXJlbnRGaWVsZFNldCk7XG5cdCRvcmlnaW53cEF0dHJpYnV0aW9uLnZhbCh3cEF0dHJpYnV0aW9uKTtcbn07XG5cbmV4cG9ydCB7Z2V0QXR0cmlidXRpb24sIHVwZGF0ZVdwQXR0cmlidXRpb259O1xuIiwgImltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9pMThuJztcblxuY29uc3QgTElDRU5TRVMgPSBbXG5cdHtcblx0XHRsYWJlbDogJ0NDIEJZLVNBIDQuMCcsXG5cdFx0ZGF0YTogJ2h0dHBzOi8vY3JlYXRpdmVjb21tb25zLm9yZy9saWNlbnNlcy9ieS1zYS80LjAvJyxcblx0fSxcblx0e1xuXHRcdGxhYmVsOiAnQ0MgQlktU0EgMy4wJyxcblx0XHRkYXRhOiAnaHR0cHM6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL2xpY2Vuc2VzL2J5LXNhLzMuMC8nLFxuXHR9LFxuXHR7XG5cdFx0bGFiZWw6ICdDQyBCWS1TQSAzLjAgQ04nLFxuXHRcdGRhdGE6ICdodHRwczovL2NyZWF0aXZlY29tbW9ucy5vcmcvbGljZW5zZXMvYnktc2EvMy4wL2NuLycsXG5cdH0sXG5cdHtcblx0XHRsYWJlbDogJ0NDMC0xLjAnLFxuXHRcdGRhdGE6ICdodHRwczovL2NyZWF0aXZlY29tbW9ucy5vcmcvcHVibGljZG9tYWluL3plcm8vMS4wLycsXG5cdH0sXG5cdHtcblx0XHRsYWJlbDogJ0tPR0wgVHlwZSBJOiBBdHRyaWJ1dGlvbicsXG5cdFx0ZGF0YTogJ2h0dHBzOi8vd3d3LmtvZ2wub3Iua3IvaW5mby9saWNlbnNlVHlwZTEuZG8nLFxuXHR9LFxuXHR7XG5cdFx0bGFiZWw6IGdldE1lc3NhZ2UoJ090aGVyIExpY2Vuc2UnKSxcblx0XHRkYXRhOiBnZXRNZXNzYWdlKCdSZXBsYWNlIFdpdGggTGljZW5zZScpLFxuXHR9LFxuXTtcblxuZXhwb3J0IHtMSUNFTlNFU307XG4iLCAiY29uc3QgYXBwZW5kVGV4dFRvU3VtbWFyeSA9ICh7Y3VzdG9tU3VtbWFyeSwgJHdwU3VtbWFyeX06IHtjdXN0b21TdW1tYXJ5OiBzdHJpbmc7ICR3cFN1bW1hcnk6IEpRdWVyeX0pOiB2b2lkID0+IHtcblx0Y29uc3Qgb3JpZ2luU3VtbWFyeTogc3RyaW5nID0gKCR3cFN1bW1hcnkudmFsKCkgYXMgc3RyaW5nIHwgdW5kZWZpbmVkKSA/PyAnJztcblxuXHQkd3BTdW1tYXJ5LnZhbChvcmlnaW5TdW1tYXJ5LnRyaW0oKSA/IGAke29yaWdpblN1bW1hcnl9ICR7Y3VzdG9tU3VtbWFyeX1gIDogY3VzdG9tU3VtbWFyeSkudHJpZ2dlcignY2hhbmdlJyk7XG59O1xuXG5leHBvcnQge2FwcGVuZFRleHRUb1N1bW1hcnl9O1xuIiwgImltcG9ydCB7Z2V0QXR0cmlidXRpb24sIHVwZGF0ZVdwQXR0cmlidXRpb259IGZyb20gJy4vZ2V0QXR0cmlidXRpb24nO1xuaW1wb3J0IHtMSUNFTlNFU30gZnJvbSAnLi4vY29uc3RhbnQnO1xuaW1wb3J0IHthcHBlbmRUZXh0VG9TdW1tYXJ5fSBmcm9tICcuL2FwcGVuZFRleHRUb1N1bW1hcnknO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuLi9pMThuJztcblxuY29uc3QgZ2V0VGV4dElucHV0ID0gKC4uLm9uQ2hhbmdlczogKCgpID0+IHZvaWQpW10pID0+IHtcblx0Y29uc3QgdGV4dElucHV0ID0gbmV3IE9PLnVpLlRleHRJbnB1dFdpZGdldCh7XG5cdFx0cGxhY2Vob2xkZXI6IGdldE1lc3NhZ2UoJ1NvdXJjZScpLFxuXHR9KTtcblxuXHRmb3IgKGNvbnN0IG9uQ2hhbmdlIG9mIG9uQ2hhbmdlcykge1xuXHRcdHRleHRJbnB1dC5vbignY2hhbmdlJywgb25DaGFuZ2UpO1xuXHR9XG5cblx0cmV0dXJuIHRleHRJbnB1dDtcbn07XG5cbmNvbnN0IGdldERyb3BEb3duID0gKC4uLm9uU2VsZWN0czogKCgpID0+IHZvaWQpW10pID0+IHtcblx0Y29uc3QgZHJvcGRvd246IE9PLnVpLkRyb3Bkb3duV2lkZ2V0ID0gbmV3IE9PLnVpLkRyb3Bkb3duV2lkZ2V0KHtcblx0XHRsYWJlbDogZ2V0TWVzc2FnZSgnTGljZW5zZScpLFxuXHR9KTtcblxuXHRjb25zdCBtZW51T3B0aW9uczogT08udWkuTWVudU9wdGlvbldpZGdldFtdID0gW107XG5cblx0Zm9yIChjb25zdCB7ZGF0YSwgbGFiZWx9IG9mIExJQ0VOU0VTKSB7XG5cdFx0bWVudU9wdGlvbnNbbWVudU9wdGlvbnMubGVuZ3RoXSA9IG5ldyBPTy51aS5NZW51T3B0aW9uV2lkZ2V0KHtcblx0XHRcdGRhdGEsXG5cdFx0XHRsYWJlbCxcblx0XHR9KTtcblx0fVxuXG5cdGRyb3Bkb3duLmdldE1lbnUoKS5hZGRJdGVtcyhtZW51T3B0aW9ucyk7XG5cblx0Zm9yIChjb25zdCBvblNlbGVjdCBvZiBvblNlbGVjdHMpIHtcblx0XHRkcm9wZG93bi5nZXRNZW51KCkub24oJ3NlbGVjdCcsIG9uU2VsZWN0KTtcblx0fVxuXG5cdHJldHVybiBkcm9wZG93bjtcbn07XG5cbmNvbnN0IGdldEFkZEl0ZW1CdXR0b24gPSAoLi4ub25DbGlja3M6ICgoKSA9PiB2b2lkKVtdKTogT08udWkuQnV0dG9uSW5wdXRXaWRnZXQgPT4ge1xuXHRjb25zdCBhZGRJdGVtQnV0dG9uID0gbmV3IE9PLnVpLkJ1dHRvbklucHV0V2lkZ2V0KHtcblx0XHRsYWJlbDogZ2V0TWVzc2FnZSgnQWRkIHRvIEVkaXQgU3VtbWFyeScpLFxuXHR9KTtcblxuXHRmb3IgKGNvbnN0IG9uQ2xpY2sgb2Ygb25DbGlja3MpIHtcblx0XHRhZGRJdGVtQnV0dG9uLm9uKCdjbGljaycsIG9uQ2xpY2spO1xuXHR9XG5cblx0cmV0dXJuIGFkZEl0ZW1CdXR0b247XG59O1xuXG5jb25zdCBnZW5lcmF0ZVRleHRJbnB1dFdpdGhEcm9wZG93biA9ICh7JGJvZHksICR3cFN1bW1hcnl9OiB7JGJvZHk6IEpRdWVyeTxIVE1MRWxlbWVudD47ICR3cFN1bW1hcnk6IEpRdWVyeX0pID0+IHtcblx0Y29uc3QgaW5pdGlhbEZpZWxkc2V0ID0gbmV3IE9PLnVpLkZpZWxkc2V0TGF5b3V0KCk7XG5cdGNvbnN0IHBhcmVudEZpZWxkU2V0ID0gbmV3IE9PLnVpLkZpZWxkc2V0TGF5b3V0KHtcblx0XHRsYWJlbDogZ2V0TWVzc2FnZSgnUGxlYXNlIENsYWltIFNvdXJjZXMgYW5kIExpY2Vuc2VzJyksXG5cdH0pO1xuXG5cdGNvbnN0IGlucHV0T25DaGFuZ2UgPSAoKSA9PiB7XG5cdFx0dXBkYXRlV3BBdHRyaWJ1dGlvbih7JGJvZHksIHBhcmVudEZpZWxkU2V0fSk7XG5cdH07XG5cblx0Y29uc3QgdGV4dElucHV0ID0gZ2V0VGV4dElucHV0KGlucHV0T25DaGFuZ2UpO1xuXHRjb25zdCBkcm9wRG93biA9IGdldERyb3BEb3duKGlucHV0T25DaGFuZ2UpO1xuXG5cdGNvbnN0IGFkZEl0ZW1PbkNsaWNrID0gKCkgPT4ge1xuXHRcdGxldCB3cEF0dHJpYnV0aW9uOiBzdHJpbmcgPSAnJztcblxuXHRcdGNvbnN0ICR3cEF0dHJpYnV0aW9uOiBKUXVlcnkgPSAkKCc8aW5wdXQ+JykuYXR0cih7XG5cdFx0XHRpZDogJ3dwQXR0cmlidXRpb24nLFxuXHRcdFx0bmFtZTogJ3dwQXR0cmlidXRpb24nLFxuXHRcdFx0dHlwZTogJ2hpZGRlbicsXG5cdFx0XHR2YWx1ZTogJycsXG5cdFx0fSk7XG5cblx0XHRjb25zdCAkb3JpZ2lud3BBdHRyaWJ1dGlvbjogSlF1ZXJ5PEhUTUxJbnB1dEVsZW1lbnQ+ID1cblx0XHRcdCRib2R5LmZpbmQ8SFRNTElucHV0RWxlbWVudD4oJ2lucHV0W25hbWU9d3BBdHRyaWJ1dGlvbl0nKTtcblx0XHRpZiAoISRvcmlnaW53cEF0dHJpYnV0aW9uLmxlbmd0aCkge1xuXHRcdFx0JGJvZHkucHJlcGVuZCgkd3BBdHRyaWJ1dGlvbik7XG5cdFx0fVxuXG5cdFx0d3BBdHRyaWJ1dGlvbiA9IGdldEF0dHJpYnV0aW9uKHBhcmVudEZpZWxkU2V0KTtcblx0XHQkb3JpZ2lud3BBdHRyaWJ1dGlvbi52YWwod3BBdHRyaWJ1dGlvbik7XG5cblx0XHRhcHBlbmRUZXh0VG9TdW1tYXJ5KHtcblx0XHRcdGN1c3RvbVN1bW1hcnk6ICRvcmlnaW53cEF0dHJpYnV0aW9uLnZhbCgpXG5cdFx0XHRcdD8gYO+8uyR7Z2V0TWVzc2FnZSgnU291cmNlJyl9OiAkeyRvcmlnaW53cEF0dHJpYnV0aW9uLnZhbCgpfe+8vWBcblx0XHRcdFx0OiAnJyxcblx0XHRcdCR3cFN1bW1hcnksXG5cdFx0fSk7XG5cblx0XHR0ZXh0SW5wdXQuc2V0VmFsdWUoJycpO1xuXHRcdGRyb3BEb3duLmdldE1lbnUoKS51bnNlbGVjdEl0ZW0oKTtcblx0fTtcblxuXHRjb25zdCBhZGRJdGVtQnV0dG9uID0gZ2V0QWRkSXRlbUJ1dHRvbihhZGRJdGVtT25DbGljayk7XG5cblx0aW5pdGlhbEZpZWxkc2V0LmFkZEl0ZW1zKFtcblx0XHRuZXcgT08udWkuRmllbGRMYXlvdXQodGV4dElucHV0LCB7bGFiZWw6IGdldE1lc3NhZ2UoJ1NvdXJjZScpLCBhbGlnbjogJ2lubGluZSd9KSxcblx0XHRuZXcgT08udWkuRmllbGRMYXlvdXQoZHJvcERvd24sIHtsYWJlbDogZ2V0TWVzc2FnZSgnTGljZW5zZScpLCBhbGlnbjogJ2lubGluZSd9KSxcblx0XHRuZXcgT08udWkuRmllbGRMYXlvdXQoYWRkSXRlbUJ1dHRvbiwge2FsaWduOiAnaW5saW5lJ30pLFxuXHRdKTtcblxuXHRwYXJlbnRGaWVsZFNldC5hZGRJdGVtcyhbaW5pdGlhbEZpZWxkc2V0XSk7XG5cblx0cmV0dXJuIHBhcmVudEZpZWxkU2V0O1xufTtcblxuZXhwb3J0IHtnZW5lcmF0ZVRleHRJbnB1dFdpdGhEcm9wZG93bn07XG4iLCAiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVuc2FmZS1hcmd1bWVudCwgbWVkaWF3aWtpL2NsYXNzLWRvYyAqL1xuaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICd+L0VkaXRmb3JtX0F0dHJpYnV0aW9uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge2Zvcm1XcmFwfSBmcm9tICcuL0VkaXRmb3JtX0F0dHJpYnV0aW9uLm1vZHVsZS5sZXNzJztcbmltcG9ydCB7Z2VuZXJhdGVUZXh0SW5wdXRXaXRoRHJvcGRvd259IGZyb20gJy4vZ2VuZXJhdGVUZXh0SW5wdXRXaXRoRHJvcGRvd24nO1xuXG5pbnRlcmZhY2UgTGF5b3V0UHJvcHMge1xuXHQkYm9keTogSlF1ZXJ5PEhUTUxFbGVtZW50Pjtcbn1cblxuY29uc3QgZ2VuZXJhdGVWaXN1YWxFZGl0b3JMYXlvdXQgPSAoeyRib2R5fTogTGF5b3V0UHJvcHMpOiBKUXVlcnk8SFRNTEVsZW1lbnQ+ID0+IHtcblx0Y29uc3Qge3RhcmdldH0gPSB3aW5kb3cudmUuaW5pdDtcblx0Y29uc3QgJHdwU3VtbWFyeSA9IHRhcmdldC5zYXZlRGlhbG9nLmVkaXRTdW1tYXJ5SW5wdXQuJGlucHV0O1xuXHRjb25zdCB0ZXh0SW5wdXRXaXRoRHJvcGRvd24gPSBnZW5lcmF0ZVRleHRJbnB1dFdpdGhEcm9wZG93bih7JGJvZHksICR3cFN1bW1hcnl9KTtcblx0Y29uc3QgJGxheW91dCA9ICQoJzxkaXY+JykuYXR0cignaWQnLCBPUFRJT05TLmlucHV0SWQpLmFkZENsYXNzKGZvcm1XcmFwKTtcblx0JGxheW91dC5hcHBlbmQodGV4dElucHV0V2l0aERyb3Bkb3duLiRlbGVtZW50KTtcblxuXHRyZXR1cm4gJGxheW91dDtcbn07XG5cbmNvbnN0IGdlbmVyYXRlV2lraUVkaXRvckxheW91dCA9ICh7JGJvZHksICRlZGl0Rm9ybX06IExheW91dFByb3BzICYgeyRlZGl0Rm9ybTogSlF1ZXJ5fSk6IEpRdWVyeTxIVE1MRWxlbWVudD4gPT4ge1xuXHRjb25zdCAkd3BTdW1tYXJ5ID0gJGVkaXRGb3JtLmZpbmQoJ2lucHV0W25hbWU9d3BTdW1tYXJ5XScpO1xuXHRjb25zdCB0ZXh0SW5wdXRXaXRoRHJvcGRvd24gPSBnZW5lcmF0ZVRleHRJbnB1dFdpdGhEcm9wZG93bih7JGJvZHksICR3cFN1bW1hcnl9KTtcblx0Y29uc3QgJGxheW91dCA9ICQoJzxkaXY+JykuYXR0cignaWQnLCBPUFRJT05TLmlucHV0SWQpLmFkZENsYXNzKGZvcm1XcmFwKTtcblx0JGxheW91dC5hcHBlbmQodGV4dElucHV0V2l0aERyb3Bkb3duLiRlbGVtZW50KTtcblxuXHRyZXR1cm4gJGxheW91dDtcbn07XG5cbmV4cG9ydCB7Z2VuZXJhdGVWaXN1YWxFZGl0b3JMYXlvdXQsIGdlbmVyYXRlV2lraUVkaXRvckxheW91dH07XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICd+L0VkaXRmb3JtX0F0dHJpYnV0aW9uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge2dlbmVyYXRlVmlzdWFsRWRpdG9yTGF5b3V0fSBmcm9tICcuL3V0aWwvZ2VuZXJhdGVMYXlvdXQnO1xuXG5jb25zdCBwcm9jZXNzVmlzdWFsRWRpdG9yID0gKHskYm9keX06IHskYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD59KTogdm9pZCA9PiB7XG5cdC8vIEd1YXJkIGFnYWluc3QgZG91YmxlIGluY2x1c2lvbnNcblx0aWYgKG13LmNvbmZpZy5nZXQoT1BUSU9OUy5jb25maWdLZXlWZSkpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCB7dGFyZ2V0fSA9IHdpbmRvdy52ZS5pbml0O1xuXHRjb25zdCB7c2F2ZURpYWxvZ30gPSB0YXJnZXQ7XG5cdGNvbnN0IHskc2F2ZU9wdGlvbnN9ID0gc2F2ZURpYWxvZztcblx0aWYgKCEkc2F2ZU9wdGlvbnMubGVuZ3RoKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Ly8gU2V0IGd1YXJkXG5cdG13LmNvbmZpZy5zZXQoT1BUSU9OUy5jb25maWdLZXlWZSwgdHJ1ZSk7XG5cblx0Y29uc3QgJGxheW91dCA9IGdlbmVyYXRlVmlzdWFsRWRpdG9yTGF5b3V0KHskYm9keX0pO1xuXG5cdGlmICghJGJvZHkuZmluZChgIyR7T1BUSU9OUy5pbnB1dElkfWApLmxlbmd0aCkge1xuXHRcdCRzYXZlT3B0aW9ucy5hcHBlbmQoJGxheW91dCk7XG5cdH1cblxuXHQvLyBSZWluaXRpYWxpemF0aW9uIGlzIHJlcXVpcmVkIGZvciBzd2l0Y2hpbmcgYmV0d2VlbiBWaXN1YWxFZGl0b3IgYW5kIE5ldyBXaWtpdGV4dCBFZGl0b3IgKDIwMTcpXG5cdG13Lmhvb2soJ3ZlLmFjdGl2YXRpb25Db21wbGV0ZScpLmFkZCgoKSA9PiB7XG5cdFx0aWYgKG13LmNvbmZpZy5nZXQoT1BUSU9OUy5jb25maWdLZXlWZSkpIHtcblx0XHRcdG13LmNvbmZpZy5zZXQoT1BUSU9OUy5jb25maWdLZXlWZSwgZmFsc2UpO1xuXHRcdH1cblx0fSk7XG59O1xuXG5leHBvcnQge3Byb2Nlc3NWaXN1YWxFZGl0b3J9O1xuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnfi9FZGl0Zm9ybV9BdHRyaWJ1dGlvbi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtnZW5lcmF0ZVdpa2lFZGl0b3JMYXlvdXR9IGZyb20gJy4vdXRpbC9nZW5lcmF0ZUxheW91dCc7XG5cbmNvbnN0IHByb2Nlc3NXaWtpRWRpdG9yID0gKHskYm9keSwgJGVkaXRGb3JtfTogeyRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50PjsgJGVkaXRGb3JtOiBKUXVlcnl9KTogdm9pZCA9PiB7XG5cdC8vIEd1YXJkIGFnYWluc3QgZG91YmxlIGluY2x1c2lvbnNcblx0aWYgKG13LmNvbmZpZy5nZXQoT1BUSU9OUy5jb25maWdLZXkpKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgJHRhcmdldDogSlF1ZXJ5ID0gJGVkaXRGb3JtLmZpbmQoT1BUSU9OUy50YXJnZXRXaWtpRWRpdG9yKTtcblx0aWYgKCEkdGFyZ2V0Lmxlbmd0aCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdG13LmNvbmZpZy5zZXQoT1BUSU9OUy5jb25maWdLZXksIHRydWUpO1xuXG5cdGNvbnN0ICRsYXlvdXQgPSBnZW5lcmF0ZVdpa2lFZGl0b3JMYXlvdXQoeyRib2R5LCAkZWRpdEZvcm19KTtcblxuXHRpZiAoISRib2R5LmZpbmQoYCMke09QVElPTlMuaW5wdXRJZH1gKS5sZW5ndGgpIHtcblx0XHQkdGFyZ2V0LmFmdGVyKCRsYXlvdXQpO1xuXHR9XG59O1xuXG5leHBvcnQge3Byb2Nlc3NXaWtpRWRpdG9yfTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QVMxRixPQUFzQztBQUMzRThFLEtBQUdLLEtBQUssbUJBQW1CLEVBQUVDLElBQUtSLGVBQW9CO0FBQ3JEUyxzQkFBa0I7TUFDakJyRjtNQUNBNEU7SUFDRCxDQUFDO0VBQ0YsQ0FBQztBQUVERSxLQUFHSyxLQUFLLDRCQUE0QixFQUFFQyxJQUFJLE1BQVk7QUFDckRQLHdCQUFvQjtNQUFDN0U7SUFBSyxDQUFDO0VBQzVCLENBQUM7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogWyJpbXBvcnRfZXh0X2dhZGdldDIiLCAicmVxdWlyZSIsICJjb25maWdLZXkiLCAiY29uZmlnS2V5VmUiLCAiaW5wdXRJZCIsICJ0YXJnZXRXaWtpRWRpdG9yIiwgImZvcm1XcmFwIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgImdldEkxOG5NZXNzYWdlcyIsICJsb2NhbGl6ZSIsICJlbiIsICJTb3VyY2UiLCAiTGljZW5zZSIsICJpMThuTWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAiZ2V0QXR0cmlidXRpb24iLCAiZmllbGRTZXRMYXlvdXQiLCAiYXR0cmlidXRpb25zIiwgImdldFNlbGVjdGVkVmFsdWUiLCAiZHJvcGRvd24iLCAic2VsZWN0ZWRJdGVtIiwgImdldE1lbnUiLCAiZmluZFNlbGVjdGVkSXRlbSIsICJnZXREYXRhIiwgIl9pdGVyYXRvciIsICJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsICJnZXRJdGVtcyIsICJfc3RlcCIsICJzIiwgIm4iLCAiZG9uZSIsICJhdHRyaWJ1dGlvbkZpZWxkc2V0IiwgInZhbHVlIiwgImF0dHJpYnV0aW9uIiwgIl9pdGVyYXRvcjIiLCAiX3N0ZXAyIiwgImZpZWxkTGF5b3V0IiwgImZpZWxkIiwgImdldEZpZWxkIiwgInN1cHBvcnRzIiwgImdldFZhbHVlIiwgInNvdXJjZSIsICJsaWNlbnNlIiwgImVyciIsICJlIiwgImYiLCAibGVuZ3RoIiwgImNvbmNhdCIsICJqb2luIiwgInVwZGF0ZVdwQXR0cmlidXRpb24iLCAiJGJvZHkiLCAicGFyZW50RmllbGRTZXQiLCAid3BBdHRyaWJ1dGlvbiIsICIkd3BBdHRyaWJ1dGlvbiIsICIkIiwgImF0dHIiLCAiaWQiLCAibmFtZSIsICJ0eXBlIiwgIiRvcmlnaW53cEF0dHJpYnV0aW9uIiwgImZpbmQiLCAicHJlcGVuZCIsICJ2YWwiLCAiTElDRU5TRVMiLCAibGFiZWwiLCAiZGF0YSIsICJhcHBlbmRUZXh0VG9TdW1tYXJ5IiwgImN1c3RvbVN1bW1hcnkiLCAiJHdwU3VtbWFyeSIsICJfJHdwU3VtbWFyeSR2YWwiLCAib3JpZ2luU3VtbWFyeSIsICJ0cmltIiwgInRyaWdnZXIiLCAiZ2V0VGV4dElucHV0IiwgIm9uQ2hhbmdlcyIsICJ0ZXh0SW5wdXQiLCAiT08iLCAidWkiLCAiVGV4dElucHV0V2lkZ2V0IiwgInBsYWNlaG9sZGVyIiwgIl9pIiwgIl9vbkNoYW5nZXMiLCAib25DaGFuZ2UiLCAib24iLCAiZ2V0RHJvcERvd24iLCAib25TZWxlY3RzIiwgIkRyb3Bkb3duV2lkZ2V0IiwgIm1lbnVPcHRpb25zIiwgIl9pMiIsICJfTElDRU5TRVMiLCAiTWVudU9wdGlvbldpZGdldCIsICJhZGRJdGVtcyIsICJfaTMiLCAiX29uU2VsZWN0cyIsICJvblNlbGVjdCIsICJnZXRBZGRJdGVtQnV0dG9uIiwgIm9uQ2xpY2tzIiwgImFkZEl0ZW1CdXR0b24iLCAiQnV0dG9uSW5wdXRXaWRnZXQiLCAiX2k0IiwgIl9vbkNsaWNrcyIsICJvbkNsaWNrIiwgImdlbmVyYXRlVGV4dElucHV0V2l0aERyb3Bkb3duIiwgImluaXRpYWxGaWVsZHNldCIsICJGaWVsZHNldExheW91dCIsICJpbnB1dE9uQ2hhbmdlIiwgImRyb3BEb3duIiwgImFkZEl0ZW1PbkNsaWNrIiwgInNldFZhbHVlIiwgInVuc2VsZWN0SXRlbSIsICJGaWVsZExheW91dCIsICJhbGlnbiIsICJnZW5lcmF0ZVZpc3VhbEVkaXRvckxheW91dCIsICJ0YXJnZXQiLCAid2luZG93IiwgInZlIiwgImluaXQiLCAic2F2ZURpYWxvZyIsICJlZGl0U3VtbWFyeUlucHV0IiwgIiRpbnB1dCIsICJ0ZXh0SW5wdXRXaXRoRHJvcGRvd24iLCAiJGxheW91dCIsICJhZGRDbGFzcyIsICJhcHBlbmQiLCAiJGVsZW1lbnQiLCAiZ2VuZXJhdGVXaWtpRWRpdG9yTGF5b3V0IiwgIiRlZGl0Rm9ybSIsICJwcm9jZXNzVmlzdWFsRWRpdG9yIiwgIm13IiwgImNvbmZpZyIsICJnZXQiLCAiJHNhdmVPcHRpb25zIiwgInNldCIsICJob29rIiwgImFkZCIsICJwcm9jZXNzV2lraUVkaXRvciIsICIkdGFyZ2V0IiwgImFmdGVyIiwgImdldEJvZHkiLCAidGhlbiIsICJlZGl0Rm9ybSJdCn0K

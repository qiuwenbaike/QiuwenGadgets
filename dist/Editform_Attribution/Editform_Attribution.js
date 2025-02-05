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
      "zh-hans": "若您向编辑内容中添加了第三方内容，请将第三方内容的来源、许可证在编辑摘要中分条声明",
      "zh-hant": "若您向編輯內容中添加了第三方內容，請將第三方內容的來源、許可證在編輯摘要中分條聲明"
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
  const $layout = $("<div>").attr("id", inputId).append(textInputWithDropdown.$element);
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
  const $layout = $("<div>").attr("id", inputId).append(textInputWithDropdown.$element);
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0VkaXRmb3JtX0F0dHJpYnV0aW9uL0VkaXRmb3JtX0F0dHJpYnV0aW9uLnRzIiwgInNyYy9FZGl0Zm9ybV9BdHRyaWJ1dGlvbi9vcHRpb25zLmpzb24iLCAic3JjL0VkaXRmb3JtX0F0dHJpYnV0aW9uL21vZHVsZXMvaTE4bi50cyIsICJzcmMvRWRpdGZvcm1fQXR0cmlidXRpb24vbW9kdWxlcy91dGlsL2dldEF0dHJpYnV0aW9uLnRzIiwgInNyYy9FZGl0Zm9ybV9BdHRyaWJ1dGlvbi9tb2R1bGVzL2NvbnN0YW50LnRzIiwgInNyYy9FZGl0Zm9ybV9BdHRyaWJ1dGlvbi9tb2R1bGVzL3V0aWwvYXBwZW5kVGV4dFRvU3VtbWFyeS50cyIsICJzcmMvRWRpdGZvcm1fQXR0cmlidXRpb24vbW9kdWxlcy91dGlsL2dlbmVyYXRlVGV4dElucHV0V2l0aERyb3Bkb3duLnRzIiwgInNyYy9FZGl0Zm9ybV9BdHRyaWJ1dGlvbi9tb2R1bGVzL3V0aWwvZ2VuZXJhdGVMYXlvdXQudHMiLCAic3JjL0VkaXRmb3JtX0F0dHJpYnV0aW9uL21vZHVsZXMvcHJvY2Vzc1Zpc3VhbEVkaXRvci50cyIsICJzcmMvRWRpdGZvcm1fQXR0cmlidXRpb24vbW9kdWxlcy9wcm9jZXNzV2lraUVkaXRvci50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHtnZXRCb2R5fSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuaW1wb3J0IHtwcm9jZXNzVmlzdWFsRWRpdG9yfSBmcm9tICcuL21vZHVsZXMvcHJvY2Vzc1Zpc3VhbEVkaXRvcic7XG5pbXBvcnQge3Byb2Nlc3NXaWtpRWRpdG9yfSBmcm9tICcuL21vZHVsZXMvcHJvY2Vzc1dpa2lFZGl0b3InO1xuXG4vKipcbiAqIEBkZXNjcmlwdGlvbiDnrKzkuInmlrnmnaXmupDnibnmrorlo7DmmI5cbiAqL1xudm9pZCBnZXRCb2R5KCkudGhlbihmdW5jdGlvbiBlZGl0Rm9ybSgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkIHtcblx0bXcuaG9vaygnd2lraXBhZ2UuZWRpdGZvcm0nKS5hZGQoKCRlZGl0Rm9ybSk6IHZvaWQgPT4ge1xuXHRcdHByb2Nlc3NXaWtpRWRpdG9yKHtcblx0XHRcdCRib2R5LFxuXHRcdFx0JGVkaXRGb3JtLFxuXHRcdH0pO1xuXHR9KTtcblxuXHRtdy5ob29rKCd2ZS5zYXZlRGlhbG9nLnN0YXRlQ2hhbmdlZCcpLmFkZCgoKTogdm9pZCA9PiB7XG5cdFx0cHJvY2Vzc1Zpc3VhbEVkaXRvcih7JGJvZHl9KTtcblx0fSk7XG59KTtcbiIsICJ7XG5cdFwiY29uZmlnS2V5XCI6IFwiZ2FkZ2V0LUVkaXRmb3JtX0F0dHJpYnV0aW9uX19Jbml0aWFsaXplZFwiLFxuXHRcImNvbmZpZ0tleVZlXCI6IFwiZ2FkZ2V0LUVkaXRmb3JtX0F0dHJpYnV0aW9uX19Jbml0aWFsaXplZF9fVkVcIixcblx0XCJjaGFuZ2VUYWdcIjogXCJBdHRyaWJ1dGlvbl9hZGRlZFwiLFxuXHRcImlucHV0SWRcIjogXCJlZGl0Zm9ybV9hdHRyaWJ1dGlvblwiLFxuXHRcInRhcmdldFdpa2lFZGl0b3JcIjogXCIuZWRpdENoZWNrYm94ZXMgLm9vLXVpLWhvcml6b250YWxMYXlvdXRcIlxufVxuIiwgImltcG9ydCB7bG9jYWxpemV9IGZyb20gJ2V4dC5nYWRnZXQuaTE4bic7XG5cbmNvbnN0IGdldEkxOG5NZXNzYWdlcyA9ICgpID0+IHtcblx0cmV0dXJuIHtcblx0XHQnQWRkIHRvIEVkaXQgU3VtbWFyeSc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQWRkIHRvIEVkaXQgU3VtbWFyeScsXG5cdFx0XHQnemgtaGFucyc6ICfmt7vliqDoh7PnvJbovpHmkZjopoEnLFxuXHRcdFx0J3poLWhhbnQnOiAn5re75Yqg6Iez57eo6Lyv5pGY6KaBJyxcblx0XHR9KSxcblx0XHRTb3VyY2U6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnU291cmNlJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WGheWuueadpea6kCcsXG5cdFx0XHQnemgtaGFudCc6ICflhaflrrnkvobmupAnLFxuXHRcdH0pLFxuXHRcdExpY2Vuc2U6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnTGljZW5zZScsXG5cdFx0XHQnemgtaGFucyc6ICforrjlj6/or4EnLFxuXHRcdFx0J3poLWhhbnQnOiAn6Kix5Y+v6K2JJyxcblx0XHR9KSxcblx0XHQnT3RoZXIgTGljZW5zZSc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnT3RoZXIgbGljZW5zZScsXG5cdFx0XHQnemgtaGFucyc6ICflhbbku5borrjlj6/or4EnLFxuXHRcdFx0J3poLWhhbnQnOiAn5YW25LuW6Kix5Y+v6K2JJyxcblx0XHR9KSxcblx0XHQnUGxlYXNlIENsYWltIFNvdXJjZXMgYW5kIExpY2Vuc2VzJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdJZiBlZGl0IGNvbnRlbnQgYWRkcyBhbnkgdGhpcmQtcGFydHkgY29udGVudCwgcGxlYXNlIGFkZCB0aGUgc291cmNlIGFuZCBsaWNlbnNlIG9mIHRoZSB0aGlyZC1wYXJ0eSBjb250ZW50IHNlcGFyYXRlbHkgdG8gdGhlIGVkaXRpbmcgc3VtbWFyeS4nLFxuXHRcdFx0J3poLWhhbnMnOiAn6Iul5oKo5ZCR57yW6L6R5YaF5a655Lit5re75Yqg5LqG56ys5LiJ5pa55YaF5a6577yM6K+35bCG56ys5LiJ5pa55YaF5a6555qE5p2l5rqQ44CB6K645Y+v6K+B5Zyo57yW6L6R5pGY6KaB5Lit5YiG5p2h5aOw5piOJyxcblx0XHRcdCd6aC1oYW50JzogJ+iLpeaCqOWQkee3qOi8r+WFp+WuueS4rea3u+WKoOS6huesrOS4ieaWueWFp+Wuue+8jOiri+Wwh+esrOS4ieaWueWFp+WuueeahOS+hua6kOOAgeioseWPr+itieWcqOe3qOi8r+aRmOimgeS4reWIhuaineiBsuaYjicsXG5cdFx0fSksXG5cdFx0J1JlcGxhY2UgV2l0aCBMaWNlbnNlJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICcgKFJlcGxhY2Ugd2l0aCBsaWNlbnNlIG5hbWUgYW5kIFVSTCknLFxuXHRcdFx0J3poLWhhbnMnOiAn77yI5pu/5o2i5Li66K645Y+v6K+B5ZCN56ew5ZKM572R5Z2A77yJJyxcblx0XHRcdCd6aC1oYW50JzogJ++8iOabv+aPm+eIsuioseWPr+itieWQjeeoseWSjOe2suWdgO+8iScsXG5cdFx0fSksXG5cdH07XG59O1xuXG5jb25zdCBpMThuTWVzc2FnZXMgPSBnZXRJMThuTWVzc2FnZXMoKTtcblxuY29uc3QgZ2V0TWVzc2FnZTogR2V0TWVzc2FnZXM8dHlwZW9mIGkxOG5NZXNzYWdlcz4gPSAoa2V5KSA9PiB7XG5cdHJldHVybiBpMThuTWVzc2FnZXNba2V5XSB8fCBrZXk7XG59O1xuXG5leHBvcnQge2dldE1lc3NhZ2V9O1xuIiwgImltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi4vaTE4bic7XG5cbmNvbnN0IGdldEF0dHJpYnV0aW9uID0gKGZpZWxkU2V0TGF5b3V0OiBPTy51aS5GaWVsZHNldExheW91dCkgPT4ge1xuXHRjb25zdCBhdHRyaWJ1dGlvbnMgPSBbXTtcblxuXHRjb25zdCBnZXRTZWxlY3RlZFZhbHVlID0gKGRyb3Bkb3duOiBPTy51aS5Ecm9wZG93bldpZGdldCk6IHN0cmluZyB8IHVuZGVmaW5lZCA9PiB7XG5cdFx0Y29uc3Qgc2VsZWN0ZWRJdGVtOiBPTy51aS5PcHRpb25XaWRnZXQgfCBudWxsID0gZHJvcGRvd25cblx0XHRcdC5nZXRNZW51KClcblx0XHRcdC5maW5kU2VsZWN0ZWRJdGVtKCkgYXMgT08udWkuT3B0aW9uV2lkZ2V0IHwgbnVsbDtcblx0XHRyZXR1cm4gc2VsZWN0ZWRJdGVtID8gKHNlbGVjdGVkSXRlbS5nZXREYXRhKCkgYXMgc3RyaW5nKSA6IHVuZGVmaW5lZDtcblx0fTtcblxuXHRmb3IgKGNvbnN0IGF0dHJpYnV0aW9uRmllbGRzZXQgb2YgZmllbGRTZXRMYXlvdXQuZ2V0SXRlbXMoKSBhcyBPTy51aS5GaWVsZHNldExheW91dFtdKSB7XG5cdFx0Y29uc3QgYXR0cmlidXRpb246IHtzb3VyY2U/OiBzdHJpbmc7IGxpY2Vuc2U/OiBzdHJpbmd9ID0ge307XG5cblx0XHRmb3IgKGNvbnN0IGZpZWxkTGF5b3V0IG9mIGF0dHJpYnV0aW9uRmllbGRzZXQuZ2V0SXRlbXMoKSBhcyBPTy51aS5GaWVsZExheW91dFtdKSB7XG5cdFx0XHRjb25zdCBmaWVsZCA9IGZpZWxkTGF5b3V0LmdldEZpZWxkKCk7XG5cblx0XHRcdGlmIChmaWVsZC5zdXBwb3J0cygnZ2V0VmFsdWUnKSkge1xuXHRcdFx0XHRjb25zdCB2YWx1ZSA9IChmaWVsZCBhcyBPTy51aS5UZXh0SW5wdXRXaWRnZXQpLmdldFZhbHVlKCk7XG5cdFx0XHRcdGlmICh2YWx1ZSkge1xuXHRcdFx0XHRcdGF0dHJpYnV0aW9uLnNvdXJjZSA9IHZhbHVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYgKGZpZWxkLnN1cHBvcnRzKCdnZXRNZW51JykpIHtcblx0XHRcdFx0Y29uc3QgdmFsdWUgPSBnZXRTZWxlY3RlZFZhbHVlKGZpZWxkIGFzIE9PLnVpLkRyb3Bkb3duV2lkZ2V0KTtcblx0XHRcdFx0aWYgKHZhbHVlKSB7XG5cdFx0XHRcdFx0YXR0cmlidXRpb24ubGljZW5zZSA9IHZhbHVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKGF0dHJpYnV0aW9uLnNvdXJjZSAmJiBhdHRyaWJ1dGlvbi5saWNlbnNlKSB7XG5cdFx0XHRhdHRyaWJ1dGlvbnNbYXR0cmlidXRpb25zLmxlbmd0aF0gPVxuXHRcdFx0XHRgJHthdHRyaWJ1dGlvbi5zb3VyY2V9ICgke2dldE1lc3NhZ2UoJ0xpY2Vuc2UnKX06ICR7YXR0cmlidXRpb24ubGljZW5zZX0pYDtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gYXR0cmlidXRpb25zLmpvaW4oJyAnKTtcbn07XG5cbmNvbnN0IHVwZGF0ZVdwQXR0cmlidXRpb24gPSAoe1xuXHQkYm9keSxcblx0cGFyZW50RmllbGRTZXQsXG59OiB7XG5cdCRib2R5OiBKUXVlcnk8SFRNTEVsZW1lbnQ+O1xuXHRwYXJlbnRGaWVsZFNldDogT08udWkuRmllbGRzZXRMYXlvdXQ7XG59KSA9PiB7XG5cdGxldCB3cEF0dHJpYnV0aW9uOiBzdHJpbmcgPSAnJztcblxuXHRjb25zdCAkd3BBdHRyaWJ1dGlvbjogSlF1ZXJ5ID0gJCgnPGlucHV0PicpLmF0dHIoe1xuXHRcdGlkOiAnd3BBdHRyaWJ1dGlvbicsXG5cdFx0bmFtZTogJ3dwQXR0cmlidXRpb24nLFxuXHRcdHR5cGU6ICdoaWRkZW4nLFxuXHRcdHZhbHVlOiAnJyxcblx0fSk7XG5cdGNvbnN0ICRvcmlnaW53cEF0dHJpYnV0aW9uOiBKUXVlcnkgPSAkYm9keS5maW5kKCdpbnB1dFtuYW1lPXdwQXR0cmlidXRpb25dJyk7XG5cdGlmICghJG9yaWdpbndwQXR0cmlidXRpb24ubGVuZ3RoKSB7XG5cdFx0JGJvZHkucHJlcGVuZCgkd3BBdHRyaWJ1dGlvbik7XG5cdH1cblxuXHR3cEF0dHJpYnV0aW9uID0gZ2V0QXR0cmlidXRpb24ocGFyZW50RmllbGRTZXQpO1xuXHQkb3JpZ2lud3BBdHRyaWJ1dGlvbi52YWwod3BBdHRyaWJ1dGlvbik7XG59O1xuXG5leHBvcnQge2dldEF0dHJpYnV0aW9uLCB1cGRhdGVXcEF0dHJpYnV0aW9ufTtcbiIsICJpbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vaTE4bic7XG5cbmNvbnN0IExJQ0VOU0VTID0gW1xuXHR7XG5cdFx0bGFiZWw6ICdDQyBCWS1TQSA0LjAnLFxuXHRcdGRhdGE6ICdodHRwczovL2NyZWF0aXZlY29tbW9ucy5vcmcvbGljZW5zZXMvYnktc2EvNC4wLycsXG5cdH0sXG5cdHtcblx0XHRsYWJlbDogJ0NDIEJZLVNBIDMuMCcsXG5cdFx0ZGF0YTogJ2h0dHBzOi8vY3JlYXRpdmVjb21tb25zLm9yZy9saWNlbnNlcy9ieS1zYS8zLjAvJyxcblx0fSxcblx0e1xuXHRcdGxhYmVsOiAnQ0MgQlktU0EgMy4wIENOJyxcblx0XHRkYXRhOiAnaHR0cHM6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL2xpY2Vuc2VzL2J5LXNhLzMuMC9jbi8nLFxuXHR9LFxuXHR7XG5cdFx0bGFiZWw6ICdDQzAtMS4wJyxcblx0XHRkYXRhOiAnaHR0cHM6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL3B1YmxpY2RvbWFpbi96ZXJvLzEuMC8nLFxuXHR9LFxuXHR7XG5cdFx0bGFiZWw6ICdLT0dMIFR5cGUgSTogQXR0cmlidXRpb24nLFxuXHRcdGRhdGE6ICdodHRwczovL3d3dy5rb2dsLm9yLmtyL2luZm8vbGljZW5zZVR5cGUxLmRvJyxcblx0fSxcblx0e1xuXHRcdGxhYmVsOiBnZXRNZXNzYWdlKCdPdGhlciBMaWNlbnNlJyksXG5cdFx0ZGF0YTogZ2V0TWVzc2FnZSgnUmVwbGFjZSBXaXRoIExpY2Vuc2UnKSxcblx0fSxcbl07XG5cbmV4cG9ydCB7TElDRU5TRVN9O1xuIiwgImNvbnN0IGFwcGVuZFRleHRUb1N1bW1hcnkgPSAoe2N1c3RvbVN1bW1hcnksICR3cFN1bW1hcnl9OiB7Y3VzdG9tU3VtbWFyeTogc3RyaW5nOyAkd3BTdW1tYXJ5OiBKUXVlcnl9KTogdm9pZCA9PiB7XG5cdGNvbnN0IG9yaWdpblN1bW1hcnk6IHN0cmluZyA9ICgkd3BTdW1tYXJ5LnZhbCgpIGFzIHN0cmluZyB8IHVuZGVmaW5lZCkgPz8gJyc7XG5cblx0JHdwU3VtbWFyeS52YWwob3JpZ2luU3VtbWFyeS50cmltKCkgPyBgJHtvcmlnaW5TdW1tYXJ5fSAke2N1c3RvbVN1bW1hcnl9YCA6IGN1c3RvbVN1bW1hcnkpLnRyaWdnZXIoJ2NoYW5nZScpO1xufTtcblxuZXhwb3J0IHthcHBlbmRUZXh0VG9TdW1tYXJ5fTtcbiIsICJpbXBvcnQge2dldEF0dHJpYnV0aW9uLCB1cGRhdGVXcEF0dHJpYnV0aW9ufSBmcm9tICcuL2dldEF0dHJpYnV0aW9uJztcbmltcG9ydCB7TElDRU5TRVN9IGZyb20gJy4uL2NvbnN0YW50JztcbmltcG9ydCB7YXBwZW5kVGV4dFRvU3VtbWFyeX0gZnJvbSAnLi9hcHBlbmRUZXh0VG9TdW1tYXJ5JztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi4vaTE4bic7XG5cbmNvbnN0IGdldFRleHRJbnB1dCA9ICguLi5vbkNoYW5nZXM6ICgoKSA9PiB2b2lkKVtdKSA9PiB7XG5cdGNvbnN0IHRleHRJbnB1dCA9IG5ldyBPTy51aS5UZXh0SW5wdXRXaWRnZXQoe1xuXHRcdHBsYWNlaG9sZGVyOiBnZXRNZXNzYWdlKCdTb3VyY2UnKSxcblx0fSk7XG5cblx0Zm9yIChjb25zdCBvbkNoYW5nZSBvZiBvbkNoYW5nZXMpIHtcblx0XHR0ZXh0SW5wdXQub24oJ2NoYW5nZScsIG9uQ2hhbmdlKTtcblx0fVxuXG5cdHJldHVybiB0ZXh0SW5wdXQ7XG59O1xuXG5jb25zdCBnZXREcm9wRG93biA9ICguLi5vblNlbGVjdHM6ICgoKSA9PiB2b2lkKVtdKSA9PiB7XG5cdGNvbnN0IGRyb3Bkb3duOiBPTy51aS5Ecm9wZG93bldpZGdldCA9IG5ldyBPTy51aS5Ecm9wZG93bldpZGdldCh7XG5cdFx0bGFiZWw6IGdldE1lc3NhZ2UoJ0xpY2Vuc2UnKSxcblx0fSk7XG5cblx0Y29uc3QgbWVudU9wdGlvbnM6IE9PLnVpLk1lbnVPcHRpb25XaWRnZXRbXSA9IFtdO1xuXG5cdGZvciAoY29uc3Qge2RhdGEsIGxhYmVsfSBvZiBMSUNFTlNFUykge1xuXHRcdG1lbnVPcHRpb25zW21lbnVPcHRpb25zLmxlbmd0aF0gPSBuZXcgT08udWkuTWVudU9wdGlvbldpZGdldCh7XG5cdFx0XHRkYXRhLFxuXHRcdFx0bGFiZWwsXG5cdFx0fSk7XG5cdH1cblxuXHRkcm9wZG93bi5nZXRNZW51KCkuYWRkSXRlbXMobWVudU9wdGlvbnMpO1xuXG5cdGZvciAoY29uc3Qgb25TZWxlY3Qgb2Ygb25TZWxlY3RzKSB7XG5cdFx0ZHJvcGRvd24uZ2V0TWVudSgpLm9uKCdzZWxlY3QnLCBvblNlbGVjdCk7XG5cdH1cblxuXHRyZXR1cm4gZHJvcGRvd247XG59O1xuXG5jb25zdCBnZXRBZGRJdGVtQnV0dG9uID0gKC4uLm9uQ2xpY2tzOiAoKCkgPT4gdm9pZClbXSk6IE9PLnVpLkJ1dHRvbklucHV0V2lkZ2V0ID0+IHtcblx0Y29uc3QgYWRkSXRlbUJ1dHRvbiA9IG5ldyBPTy51aS5CdXR0b25JbnB1dFdpZGdldCh7XG5cdFx0bGFiZWw6IGdldE1lc3NhZ2UoJ0FkZCB0byBFZGl0IFN1bW1hcnknKSxcblx0fSk7XG5cblx0Zm9yIChjb25zdCBvbkNsaWNrIG9mIG9uQ2xpY2tzKSB7XG5cdFx0YWRkSXRlbUJ1dHRvbi5vbignY2xpY2snLCBvbkNsaWNrKTtcblx0fVxuXG5cdHJldHVybiBhZGRJdGVtQnV0dG9uO1xufTtcblxuY29uc3QgZ2VuZXJhdGVUZXh0SW5wdXRXaXRoRHJvcGRvd24gPSAoeyRib2R5LCAkd3BTdW1tYXJ5fTogeyRib2R5OiBKUXVlcnk8SFRNTEVsZW1lbnQ+OyAkd3BTdW1tYXJ5OiBKUXVlcnl9KSA9PiB7XG5cdGNvbnN0IGluaXRpYWxGaWVsZHNldCA9IG5ldyBPTy51aS5GaWVsZHNldExheW91dCgpO1xuXHRjb25zdCBwYXJlbnRGaWVsZFNldCA9IG5ldyBPTy51aS5GaWVsZHNldExheW91dCh7XG5cdFx0bGFiZWw6IGdldE1lc3NhZ2UoJ1BsZWFzZSBDbGFpbSBTb3VyY2VzIGFuZCBMaWNlbnNlcycpLFxuXHR9KTtcblxuXHRjb25zdCBpbnB1dE9uQ2hhbmdlID0gKCkgPT4ge1xuXHRcdHVwZGF0ZVdwQXR0cmlidXRpb24oeyRib2R5LCBwYXJlbnRGaWVsZFNldH0pO1xuXHR9O1xuXG5cdGNvbnN0IHRleHRJbnB1dCA9IGdldFRleHRJbnB1dChpbnB1dE9uQ2hhbmdlKTtcblx0Y29uc3QgZHJvcERvd24gPSBnZXREcm9wRG93bihpbnB1dE9uQ2hhbmdlKTtcblxuXHRjb25zdCBhZGRJdGVtT25DbGljayA9ICgpID0+IHtcblx0XHRsZXQgd3BBdHRyaWJ1dGlvbjogc3RyaW5nID0gJyc7XG5cblx0XHRjb25zdCAkd3BBdHRyaWJ1dGlvbjogSlF1ZXJ5ID0gJCgnPGlucHV0PicpLmF0dHIoe1xuXHRcdFx0aWQ6ICd3cEF0dHJpYnV0aW9uJyxcblx0XHRcdG5hbWU6ICd3cEF0dHJpYnV0aW9uJyxcblx0XHRcdHR5cGU6ICdoaWRkZW4nLFxuXHRcdFx0dmFsdWU6ICcnLFxuXHRcdH0pO1xuXG5cdFx0Y29uc3QgJG9yaWdpbndwQXR0cmlidXRpb246IEpRdWVyeTxIVE1MSW5wdXRFbGVtZW50PiA9XG5cdFx0XHQkYm9keS5maW5kPEhUTUxJbnB1dEVsZW1lbnQ+KCdpbnB1dFtuYW1lPXdwQXR0cmlidXRpb25dJyk7XG5cdFx0aWYgKCEkb3JpZ2lud3BBdHRyaWJ1dGlvbi5sZW5ndGgpIHtcblx0XHRcdCRib2R5LnByZXBlbmQoJHdwQXR0cmlidXRpb24pO1xuXHRcdH1cblxuXHRcdHdwQXR0cmlidXRpb24gPSBnZXRBdHRyaWJ1dGlvbihwYXJlbnRGaWVsZFNldCk7XG5cdFx0JG9yaWdpbndwQXR0cmlidXRpb24udmFsKHdwQXR0cmlidXRpb24pO1xuXG5cdFx0YXBwZW5kVGV4dFRvU3VtbWFyeSh7XG5cdFx0XHRjdXN0b21TdW1tYXJ5OiAkb3JpZ2lud3BBdHRyaWJ1dGlvbi52YWwoKVxuXHRcdFx0XHQ/IGDvvLske2dldE1lc3NhZ2UoJ1NvdXJjZScpfTogJHskb3JpZ2lud3BBdHRyaWJ1dGlvbi52YWwoKX3vvL1gXG5cdFx0XHRcdDogJycsXG5cdFx0XHQkd3BTdW1tYXJ5LFxuXHRcdH0pO1xuXG5cdFx0dGV4dElucHV0LnNldFZhbHVlKCcnKTtcblx0XHRkcm9wRG93bi5nZXRNZW51KCkudW5zZWxlY3RJdGVtKCk7XG5cdH07XG5cblx0Y29uc3QgYWRkSXRlbUJ1dHRvbiA9IGdldEFkZEl0ZW1CdXR0b24oYWRkSXRlbU9uQ2xpY2spO1xuXG5cdGluaXRpYWxGaWVsZHNldC5hZGRJdGVtcyhbXG5cdFx0bmV3IE9PLnVpLkZpZWxkTGF5b3V0KHRleHRJbnB1dCwge2xhYmVsOiBnZXRNZXNzYWdlKCdTb3VyY2UnKSwgYWxpZ246ICdpbmxpbmUnfSksXG5cdFx0bmV3IE9PLnVpLkZpZWxkTGF5b3V0KGRyb3BEb3duLCB7bGFiZWw6IGdldE1lc3NhZ2UoJ0xpY2Vuc2UnKSwgYWxpZ246ICdpbmxpbmUnfSksXG5cdFx0bmV3IE9PLnVpLkZpZWxkTGF5b3V0KGFkZEl0ZW1CdXR0b24sIHthbGlnbjogJ2lubGluZSd9KSxcblx0XSk7XG5cblx0cGFyZW50RmllbGRTZXQuYWRkSXRlbXMoW2luaXRpYWxGaWVsZHNldF0pO1xuXG5cdHJldHVybiBwYXJlbnRGaWVsZFNldDtcbn07XG5cbmV4cG9ydCB7Z2VuZXJhdGVUZXh0SW5wdXRXaXRoRHJvcGRvd259O1xuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnfi9FZGl0Zm9ybV9BdHRyaWJ1dGlvbi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtnZW5lcmF0ZVRleHRJbnB1dFdpdGhEcm9wZG93bn0gZnJvbSAnLi9nZW5lcmF0ZVRleHRJbnB1dFdpdGhEcm9wZG93bic7XG5cbmludGVyZmFjZSBMYXlvdXRQcm9wcyB7XG5cdCRib2R5OiBKUXVlcnk8SFRNTEVsZW1lbnQ+O1xufVxuXG5jb25zdCBnZW5lcmF0ZVZpc3VhbEVkaXRvckxheW91dCA9ICh7JGJvZHl9OiBMYXlvdXRQcm9wcyk6IEpRdWVyeTxIVE1MRWxlbWVudD4gPT4ge1xuXHRjb25zdCB7dGFyZ2V0fSA9IHdpbmRvdy52ZS5pbml0O1xuXHRjb25zdCAkd3BTdW1tYXJ5ID0gdGFyZ2V0LnNhdmVEaWFsb2cuZWRpdFN1bW1hcnlJbnB1dC4kaW5wdXQ7XG5cdGNvbnN0IHRleHRJbnB1dFdpdGhEcm9wZG93biA9IGdlbmVyYXRlVGV4dElucHV0V2l0aERyb3Bkb3duKHskYm9keSwgJHdwU3VtbWFyeX0pO1xuXHRjb25zdCAkbGF5b3V0ID0gJCgnPGRpdj4nKS5hdHRyKCdpZCcsIE9QVElPTlMuaW5wdXRJZCkuYXBwZW5kKHRleHRJbnB1dFdpdGhEcm9wZG93bi4kZWxlbWVudCk7XG5cblx0cmV0dXJuICRsYXlvdXQ7XG59O1xuXG5jb25zdCBnZW5lcmF0ZVdpa2lFZGl0b3JMYXlvdXQgPSAoeyRib2R5LCAkZWRpdEZvcm19OiBMYXlvdXRQcm9wcyAmIHskZWRpdEZvcm06IEpRdWVyeX0pOiBKUXVlcnk8SFRNTEVsZW1lbnQ+ID0+IHtcblx0Y29uc3QgJHdwU3VtbWFyeSA9ICRlZGl0Rm9ybS5maW5kKCdpbnB1dFtuYW1lPXdwU3VtbWFyeV0nKTtcblx0Y29uc3QgdGV4dElucHV0V2l0aERyb3Bkb3duID0gZ2VuZXJhdGVUZXh0SW5wdXRXaXRoRHJvcGRvd24oeyRib2R5LCAkd3BTdW1tYXJ5fSk7XG5cdGNvbnN0ICRsYXlvdXQgPSAkKCc8ZGl2PicpLmF0dHIoJ2lkJywgT1BUSU9OUy5pbnB1dElkKS5hcHBlbmQodGV4dElucHV0V2l0aERyb3Bkb3duLiRlbGVtZW50KTtcblxuXHRyZXR1cm4gJGxheW91dDtcbn07XG5cbmV4cG9ydCB7Z2VuZXJhdGVWaXN1YWxFZGl0b3JMYXlvdXQsIGdlbmVyYXRlV2lraUVkaXRvckxheW91dH07XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICd+L0VkaXRmb3JtX0F0dHJpYnV0aW9uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge2dlbmVyYXRlVmlzdWFsRWRpdG9yTGF5b3V0fSBmcm9tICcuL3V0aWwvZ2VuZXJhdGVMYXlvdXQnO1xuXG5jb25zdCBwcm9jZXNzVmlzdWFsRWRpdG9yID0gKHskYm9keX06IHskYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD59KTogdm9pZCA9PiB7XG5cdC8vIEd1YXJkIGFnYWluc3QgZG91YmxlIGluY2x1c2lvbnNcblx0aWYgKG13LmNvbmZpZy5nZXQoT1BUSU9OUy5jb25maWdLZXlWZSkpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCB7dGFyZ2V0fSA9IHdpbmRvdy52ZS5pbml0O1xuXHRjb25zdCB7c2F2ZURpYWxvZ30gPSB0YXJnZXQ7XG5cdGNvbnN0IHskc2F2ZU9wdGlvbnN9ID0gc2F2ZURpYWxvZztcblx0aWYgKCEkc2F2ZU9wdGlvbnMubGVuZ3RoKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Ly8gU2V0IGd1YXJkXG5cdG13LmNvbmZpZy5zZXQoT1BUSU9OUy5jb25maWdLZXlWZSwgdHJ1ZSk7XG5cblx0Y29uc3QgJGxheW91dCA9IGdlbmVyYXRlVmlzdWFsRWRpdG9yTGF5b3V0KHskYm9keX0pO1xuXG5cdGlmICghJGJvZHkuZmluZChgIyR7T1BUSU9OUy5pbnB1dElkfWApLmxlbmd0aCkge1xuXHRcdCRzYXZlT3B0aW9ucy5hcHBlbmQoJGxheW91dCk7XG5cdH1cblxuXHQvLyBSZWluaXRpYWxpemF0aW9uIGlzIHJlcXVpcmVkIGZvciBzd2l0Y2hpbmcgYmV0d2VlbiBWaXN1YWxFZGl0b3IgYW5kIE5ldyBXaWtpdGV4dCBFZGl0b3IgKDIwMTcpXG5cdG13Lmhvb2soJ3ZlLmFjdGl2YXRpb25Db21wbGV0ZScpLmFkZCgoKSA9PiB7XG5cdFx0aWYgKG13LmNvbmZpZy5nZXQoT1BUSU9OUy5jb25maWdLZXlWZSkpIHtcblx0XHRcdG13LmNvbmZpZy5zZXQoT1BUSU9OUy5jb25maWdLZXlWZSwgZmFsc2UpO1xuXHRcdH1cblx0fSk7XG59O1xuXG5leHBvcnQge3Byb2Nlc3NWaXN1YWxFZGl0b3J9O1xuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnfi9FZGl0Zm9ybV9BdHRyaWJ1dGlvbi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtnZW5lcmF0ZVdpa2lFZGl0b3JMYXlvdXR9IGZyb20gJy4vdXRpbC9nZW5lcmF0ZUxheW91dCc7XG5cbmNvbnN0IHByb2Nlc3NXaWtpRWRpdG9yID0gKHskYm9keSwgJGVkaXRGb3JtfTogeyRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50PjsgJGVkaXRGb3JtOiBKUXVlcnl9KTogdm9pZCA9PiB7XG5cdC8vIEd1YXJkIGFnYWluc3QgZG91YmxlIGluY2x1c2lvbnNcblx0aWYgKG13LmNvbmZpZy5nZXQoT1BUSU9OUy5jb25maWdLZXkpKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgJHRhcmdldDogSlF1ZXJ5ID0gJGVkaXRGb3JtLmZpbmQoT1BUSU9OUy50YXJnZXRXaWtpRWRpdG9yKTtcblx0aWYgKCEkdGFyZ2V0Lmxlbmd0aCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdG13LmNvbmZpZy5zZXQoT1BUSU9OUy5jb25maWdLZXksIHRydWUpO1xuXG5cdGNvbnN0ICRsYXlvdXQgPSBnZW5lcmF0ZVdpa2lFZGl0b3JMYXlvdXQoeyRib2R5LCAkZWRpdEZvcm19KTtcblxuXHRpZiAoISRib2R5LmZpbmQoYCMke09QVElPTlMuaW5wdXRJZH1gKS5sZW5ndGgpIHtcblx0XHQkdGFyZ2V0LmFmdGVyKCRsYXlvdXQpO1xuXHR9XG59O1xuXG5leHBvcnQge3Byb2Nlc3NXaWtpRWRpdG9yfTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLHFCQUFzQkMsUUFBQSxpQkFBQTs7QUNDckIsSUFBQUMsWUFBYTtBQUNiLElBQUFDLGNBQWU7QUFFZixJQUFBQyxVQUFXO0FBQ1gsSUFBQUMsbUJBQW9COztBQ0xyQixJQUFBQyxvQkFBdUJMLFFBQUEsaUJBQUE7QUFFdkIsSUFBTU0sa0JBQWtCQSxNQUFNO0FBQzdCLFNBQU87SUFDTix3QkFBQSxHQUF1QkQsa0JBQUFFLFVBQVM7TUFDL0JDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDREMsU0FBQSxHQUFRSixrQkFBQUUsVUFBUztNQUNoQkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNERSxVQUFBLEdBQVNMLGtCQUFBRSxVQUFTO01BQ2pCQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0Qsa0JBQUEsR0FBaUJILGtCQUFBRSxVQUFTO01BQ3pCQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0Qsc0NBQUEsR0FBcUNILGtCQUFBRSxVQUFTO01BQzdDQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0QseUJBQUEsR0FBd0JILGtCQUFBRSxVQUFTO01B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UXpGLFFBQVE7QUFDcEI7RUFDRDtBQUVBaUYsS0FBR0MsT0FBT0csSUFBWWpJLFdBQVcsSUFBSTtBQUVyQyxRQUFNdUgsVUFBVUcseUJBQXlCO0lBQUMxRTtJQUFPMkU7RUFBUyxDQUFDO0FBRTNELE1BQUksQ0FBQzNFLE1BQU1VLEtBQUEsSUFBQWIsT0FBaUIzQyxPQUFPLENBQUUsRUFBRTBDLFFBQVE7QUFDOUN5RixZQUFRQyxNQUFNZixPQUFPO0VBQ3RCO0FBQ0Q7O0FUZEEsTUFBQSxHQUFLekgsbUJBQUF5SSxTQUFRLEVBQUVDLEtBQUssU0FBU0MsU0FBU3pGLE9BQXNDO0FBQzNFNkUsS0FBR0ssS0FBSyxtQkFBbUIsRUFBRUMsSUFBS1IsZUFBb0I7QUFDckRTLHNCQUFrQjtNQUNqQnBGO01BQ0EyRTtJQUNELENBQUM7RUFDRixDQUFDO0FBRURFLEtBQUdLLEtBQUssNEJBQTRCLEVBQUVDLElBQUksTUFBWTtBQUNyRFAsd0JBQW9CO01BQUM1RTtJQUFLLENBQUM7RUFDNUIsQ0FBQztBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbImltcG9ydF9leHRfZ2FkZ2V0MiIsICJyZXF1aXJlIiwgImNvbmZpZ0tleSIsICJjb25maWdLZXlWZSIsICJpbnB1dElkIiwgInRhcmdldFdpa2lFZGl0b3IiLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAiZ2V0STE4bk1lc3NhZ2VzIiwgImxvY2FsaXplIiwgImVuIiwgIlNvdXJjZSIsICJMaWNlbnNlIiwgImkxOG5NZXNzYWdlcyIsICJnZXRNZXNzYWdlIiwgImtleSIsICJnZXRBdHRyaWJ1dGlvbiIsICJmaWVsZFNldExheW91dCIsICJhdHRyaWJ1dGlvbnMiLCAiZ2V0U2VsZWN0ZWRWYWx1ZSIsICJkcm9wZG93biIsICJzZWxlY3RlZEl0ZW0iLCAiZ2V0TWVudSIsICJmaW5kU2VsZWN0ZWRJdGVtIiwgImdldERhdGEiLCAiX2l0ZXJhdG9yIiwgIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwgImdldEl0ZW1zIiwgIl9zdGVwIiwgInMiLCAibiIsICJkb25lIiwgImF0dHJpYnV0aW9uRmllbGRzZXQiLCAidmFsdWUiLCAiYXR0cmlidXRpb24iLCAiX2l0ZXJhdG9yMiIsICJfc3RlcDIiLCAiZmllbGRMYXlvdXQiLCAiZmllbGQiLCAiZ2V0RmllbGQiLCAic3VwcG9ydHMiLCAiZ2V0VmFsdWUiLCAic291cmNlIiwgImxpY2Vuc2UiLCAiZXJyIiwgImUiLCAiZiIsICJsZW5ndGgiLCAiY29uY2F0IiwgImpvaW4iLCAidXBkYXRlV3BBdHRyaWJ1dGlvbiIsICIkYm9keSIsICJwYXJlbnRGaWVsZFNldCIsICJ3cEF0dHJpYnV0aW9uIiwgIiR3cEF0dHJpYnV0aW9uIiwgIiQiLCAiYXR0ciIsICJpZCIsICJuYW1lIiwgInR5cGUiLCAiJG9yaWdpbndwQXR0cmlidXRpb24iLCAiZmluZCIsICJwcmVwZW5kIiwgInZhbCIsICJMSUNFTlNFUyIsICJsYWJlbCIsICJkYXRhIiwgImFwcGVuZFRleHRUb1N1bW1hcnkiLCAiY3VzdG9tU3VtbWFyeSIsICIkd3BTdW1tYXJ5IiwgIl8kd3BTdW1tYXJ5JHZhbCIsICJvcmlnaW5TdW1tYXJ5IiwgInRyaW0iLCAidHJpZ2dlciIsICJnZXRUZXh0SW5wdXQiLCAib25DaGFuZ2VzIiwgInRleHRJbnB1dCIsICJPTyIsICJ1aSIsICJUZXh0SW5wdXRXaWRnZXQiLCAicGxhY2Vob2xkZXIiLCAiX2kiLCAiX29uQ2hhbmdlcyIsICJvbkNoYW5nZSIsICJvbiIsICJnZXREcm9wRG93biIsICJvblNlbGVjdHMiLCAiRHJvcGRvd25XaWRnZXQiLCAibWVudU9wdGlvbnMiLCAiX2kyIiwgIl9MSUNFTlNFUyIsICJNZW51T3B0aW9uV2lkZ2V0IiwgImFkZEl0ZW1zIiwgIl9pMyIsICJfb25TZWxlY3RzIiwgIm9uU2VsZWN0IiwgImdldEFkZEl0ZW1CdXR0b24iLCAib25DbGlja3MiLCAiYWRkSXRlbUJ1dHRvbiIsICJCdXR0b25JbnB1dFdpZGdldCIsICJfaTQiLCAiX29uQ2xpY2tzIiwgIm9uQ2xpY2siLCAiZ2VuZXJhdGVUZXh0SW5wdXRXaXRoRHJvcGRvd24iLCAiaW5pdGlhbEZpZWxkc2V0IiwgIkZpZWxkc2V0TGF5b3V0IiwgImlucHV0T25DaGFuZ2UiLCAiZHJvcERvd24iLCAiYWRkSXRlbU9uQ2xpY2siLCAic2V0VmFsdWUiLCAidW5zZWxlY3RJdGVtIiwgIkZpZWxkTGF5b3V0IiwgImFsaWduIiwgImdlbmVyYXRlVmlzdWFsRWRpdG9yTGF5b3V0IiwgInRhcmdldCIsICJ3aW5kb3ciLCAidmUiLCAiaW5pdCIsICJzYXZlRGlhbG9nIiwgImVkaXRTdW1tYXJ5SW5wdXQiLCAiJGlucHV0IiwgInRleHRJbnB1dFdpdGhEcm9wZG93biIsICIkbGF5b3V0IiwgImFwcGVuZCIsICIkZWxlbWVudCIsICJnZW5lcmF0ZVdpa2lFZGl0b3JMYXlvdXQiLCAiJGVkaXRGb3JtIiwgInByb2Nlc3NWaXN1YWxFZGl0b3IiLCAibXciLCAiY29uZmlnIiwgImdldCIsICIkc2F2ZU9wdGlvbnMiLCAic2V0IiwgImhvb2siLCAiYWRkIiwgInByb2Nlc3NXaWtpRWRpdG9yIiwgIiR0YXJnZXQiLCAiYWZ0ZXIiLCAiZ2V0Qm9keSIsICJ0aGVuIiwgImVkaXRGb3JtIl0KfQo=

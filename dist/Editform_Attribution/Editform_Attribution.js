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
var targetClassVe = "ve-ui-mwSaveDialog-checkboxes";
var targetWikiEditor = ".editCheckboxes .oo-ui-horizontalLayout";
//! src/Editform_Attribution/modules/util/modifyChangeTag.ts
var modifyVisualEditorChangeTag = ({
  changeTag,
  checkbox
}) => {
  checkbox.on("change", () => {
    var _window$ve$init$targe, _window$ve$init$targe2, _window$ve$init$targe3;
    const generateChangeTags = (originChangeTags) => {
      return checkbox.isSelected() ? "".concat(originChangeTags, ",").concat(changeTag) : originChangeTags.replace(",".concat(changeTag), "");
    };
    let changeTags = "";
    changeTags = generateChangeTags((_window$ve$init$targe = (_window$ve$init$targe2 = (_window$ve$init$targe3 = window.ve.init.target.saveFields).wpChangeTags) === null || _window$ve$init$targe2 === void 0 ? void 0 : _window$ve$init$targe2.call(_window$ve$init$targe3)) !== null && _window$ve$init$targe !== void 0 ? _window$ve$init$targe : "");
    window.ve.init.target.saveFields.wpChangeTags = () => {
      return changeTags;
    };
  });
};
var modifyWikiEditorChangeTag = ({
  changeTag,
  checkbox,
  $editForm
}) => {
  checkbox.on("change", () => {
    var _$originWpChangeTags$, _$originWpChangeTags$2;
    const generateChangeTags = (originChangeTags) => {
      return checkbox.isSelected() ? "".concat(originChangeTags, ",").concat(changeTag) : originChangeTags.replace(",".concat(changeTag), "");
    };
    let changeTags = "";
    const $wpChangeTags = $("<input>").attr({
      id: "wpChangeTags",
      name: "wpChangeTags",
      type: "hidden",
      value: ""
    });
    const $body = $editForm.parents("body");
    const $originWpChangeTags = $body.find("input[name=wpChangeTags]");
    if (!$originWpChangeTags.length) {
      $body.prepend($wpChangeTags);
    }
    changeTags = generateChangeTags((_$originWpChangeTags$ = (_$originWpChangeTags$2 = $originWpChangeTags.val()) === null || _$originWpChangeTags$2 === void 0 ? void 0 : _$originWpChangeTags$2.toString()) !== null && _$originWpChangeTags$ !== void 0 ? _$originWpChangeTags$ : "");
    $originWpChangeTags.val(changeTags);
  });
};
//! src/Editform_Attribution/modules/i18n.ts
var import_ext_gadget = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    Add: (0, import_ext_gadget.localize)({
      en: "Add",
      zh: "增加"
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
    "Sources and Licenses": (0, import_ext_gadget.localize)({
      en: "Sources and Licenses",
      "zh-hans": "内容来源及许可证",
      "zh-hant": "內容來源及許可證"
    }),
    "Other License": (0, import_ext_gadget.localize)({
      en: "Other license",
      "zh-hans": "其他许可证",
      "zh-hant": "其他許可證"
    }),
    "Replace With License": (0, import_ext_gadget.localize)({
      en: " (Replace With license name and URL)",
      "zh-hans": "（替换为许可证名称和网址）",
      "zh-hant": "（替換爲許可證名稱和網址）"
    }),
    ThirdPartyContentContained: (0, import_ext_gadget.localize)({
      en: "This editor contains third-party content.",
      "zh-hans": "此编辑含有第三方内容",
      "zh-hant": "此編輯含有第三方內容"
    }),
    QiuwenContentContained: (0, import_ext_gadget.localize)({
      en: "This editor contains content from other pages of Qiuwen Baike.",
      "zh-hans": "此编辑含有求闻百科其他页面的内容",
      "zh-hant": "此編輯含有求聞百科其他頁面的內容"
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
    label: getMessage("Add")
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
    label: getMessage("Sources and Licenses")
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
      $wpSummary,
      customSummary: $originwpAttribution.val() ? "<".concat(getMessage("Source"), ": ").concat($originwpAttribution.val(), ">") : ""
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
//! src/Editform_Attribution/modules/util/generateCheckboxLayout.ts
var generateVisualEditorCheckboxLayout = ({
  inputId: inputId2,
  label,
  $body,
  changeTag
}) => {
  const checkbox = new OO.ui.CheckboxInputWidget({
    selected: false
  });
  if (inputId2) {
    checkbox.setInputId(inputId2);
  }
  if (changeTag) {
    modifyVisualEditorChangeTag({
      changeTag,
      checkbox
    });
  }
  const {
    target
  } = window.ve.init;
  const $wpSummary = target.saveDialog.editSummaryInput.$input;
  const textInputWithDropdown = generateTextInputWithDropdown({
    $body,
    $wpSummary
  });
  const checkboxLayout = new OO.ui.FieldLayout(checkbox, {
    align: "inline",
    label
  });
  const $layout = $("<div>").attr("id", "efa-area").append(checkboxLayout.$element, textInputWithDropdown.$element);
  return $layout;
};
var generateWikiEditorCheckboxLayout = ({
  inputId: inputId2,
  label,
  changeTag,
  $body,
  $editForm
}) => {
  const checkbox = new OO.ui.CheckboxInputWidget({
    selected: false
  });
  if (inputId2) {
    checkbox.setInputId(inputId2);
  }
  if (changeTag) {
    modifyWikiEditorChangeTag({
      changeTag,
      checkbox,
      $editForm
    });
  }
  const $wpSummary = $editForm.find("input[name=wpSummary]");
  const textInputWithDropdown = generateTextInputWithDropdown({
    $body,
    $wpSummary
  });
  const checkboxLayout = new OO.ui.FieldLayout(checkbox, {
    align: "inline",
    label
  });
  const $layout = $("<div>").attr("id", "efa-area").append(checkboxLayout.$element, textInputWithDropdown.$element);
  return $layout;
};
//! src/Editform_Attribution/modules/processVisualEditor.ts
var processVisualEditor = ({
  $body
}) => {
  if (mw.config.get(configKeyVe)) {
    return;
  }
  const $target = $body.find(".".concat(targetClassVe));
  if (!$target.length) {
    return;
  }
  mw.config.set(configKeyVe, true);
  const $layout = generateVisualEditorCheckboxLayout({
    inputId,
    label: getMessage("ThirdPartyContentContained"),
    // changeTag: OPTIONS.changeTag,
    $body
  });
  if (!$body.find("#".concat(inputId)).length) {
    $target.append($layout);
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
  const $layout = generateWikiEditorCheckboxLayout({
    inputId,
    label: getMessage("ThirdPartyContentContained"),
    // changeTag: OPTIONS.changeTag,
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0VkaXRmb3JtX0F0dHJpYnV0aW9uL0VkaXRmb3JtX0F0dHJpYnV0aW9uLnRzIiwgInNyYy9FZGl0Zm9ybV9BdHRyaWJ1dGlvbi9vcHRpb25zLmpzb24iLCAic3JjL0VkaXRmb3JtX0F0dHJpYnV0aW9uL21vZHVsZXMvdXRpbC9tb2RpZnlDaGFuZ2VUYWcudHMiLCAic3JjL0VkaXRmb3JtX0F0dHJpYnV0aW9uL21vZHVsZXMvaTE4bi50cyIsICJzcmMvRWRpdGZvcm1fQXR0cmlidXRpb24vbW9kdWxlcy91dGlsL2dldEF0dHJpYnV0aW9uLnRzIiwgInNyYy9FZGl0Zm9ybV9BdHRyaWJ1dGlvbi9tb2R1bGVzL2NvbnN0YW50LnRzIiwgInNyYy9FZGl0Zm9ybV9BdHRyaWJ1dGlvbi9tb2R1bGVzL3V0aWwvYXBwZW5kVGV4dFRvU3VtbWFyeS50cyIsICJzcmMvRWRpdGZvcm1fQXR0cmlidXRpb24vbW9kdWxlcy91dGlsL2dlbmVyYXRlVGV4dElucHV0V2l0aERyb3Bkb3duLnRzIiwgInNyYy9FZGl0Zm9ybV9BdHRyaWJ1dGlvbi9tb2R1bGVzL3V0aWwvZ2VuZXJhdGVDaGVja2JveExheW91dC50cyIsICJzcmMvRWRpdGZvcm1fQXR0cmlidXRpb24vbW9kdWxlcy9wcm9jZXNzVmlzdWFsRWRpdG9yLnRzIiwgInNyYy9FZGl0Zm9ybV9BdHRyaWJ1dGlvbi9tb2R1bGVzL3Byb2Nlc3NXaWtpRWRpdG9yLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQge2dldEJvZHl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5pbXBvcnQge3Byb2Nlc3NWaXN1YWxFZGl0b3J9IGZyb20gJy4vbW9kdWxlcy9wcm9jZXNzVmlzdWFsRWRpdG9yJztcbmltcG9ydCB7cHJvY2Vzc1dpa2lFZGl0b3J9IGZyb20gJy4vbW9kdWxlcy9wcm9jZXNzV2lraUVkaXRvcic7XG5cbi8qKlxuICogQGRlc2NyaXB0aW9uIOesrOS4ieaWueadpea6kOeJueauiuWjsOaYjlxuICovXG52b2lkIGdldEJvZHkoKS50aGVuKGZ1bmN0aW9uIGVkaXRGb3JtKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQge1xuXHRtdy5ob29rKCd3aWtpcGFnZS5lZGl0Zm9ybScpLmFkZCgoJGVkaXRGb3JtKTogdm9pZCA9PiB7XG5cdFx0cHJvY2Vzc1dpa2lFZGl0b3Ioe1xuXHRcdFx0JGJvZHksXG5cdFx0XHQkZWRpdEZvcm0sXG5cdFx0fSk7XG5cdH0pO1xuXG5cdG13Lmhvb2soJ3ZlLnNhdmVEaWFsb2cuc3RhdGVDaGFuZ2VkJykuYWRkKCgpOiB2b2lkID0+IHtcblx0XHRwcm9jZXNzVmlzdWFsRWRpdG9yKHskYm9keX0pO1xuXHR9KTtcbn0pO1xuIiwgIntcblx0XCJjb25maWdLZXlcIjogXCJnYWRnZXQtRWRpdGZvcm1fQXR0cmlidXRpb25fX0luaXRpYWxpemVkXCIsXG5cdFwiY29uZmlnS2V5VmVcIjogXCJnYWRnZXQtRWRpdGZvcm1fQXR0cmlidXRpb25fX0luaXRpYWxpemVkX19WRVwiLFxuXHRcImNoYW5nZVRhZ1wiOiBcIkF0dHJpYnV0aW9uX2FkZGVkXCIsXG5cdFwiaW5wdXRJZFwiOiBcImVkaXRmb3JtX2F0dHJpYnV0aW9uXCIsXG5cdFwidGFyZ2V0Q2xhc3NWZVwiOiBcInZlLXVpLW13U2F2ZURpYWxvZy1jaGVja2JveGVzXCIsXG5cdFwidGFyZ2V0V2lraUVkaXRvclwiOiBcIi5lZGl0Q2hlY2tib3hlcyAub28tdWktaG9yaXpvbnRhbExheW91dFwiXG59XG4iLCAiaW50ZXJmYWNlIE1vZGlmeUNoYW5nZVRhZ1Byb3BzIHtcblx0Y2hhbmdlVGFnOiBzdHJpbmc7XG5cdGNoZWNrYm94OiBPTy51aS5DaGVja2JveElucHV0V2lkZ2V0O1xufVxuXG5jb25zdCBtb2RpZnlWaXN1YWxFZGl0b3JDaGFuZ2VUYWcgPSAoe2NoYW5nZVRhZywgY2hlY2tib3h9OiBNb2RpZnlDaGFuZ2VUYWdQcm9wcyk6IHZvaWQgPT4ge1xuXHRjaGVja2JveC5vbignY2hhbmdlJywgKCk6IHZvaWQgPT4ge1xuXHRcdGNvbnN0IGdlbmVyYXRlQ2hhbmdlVGFncyA9IChvcmlnaW5DaGFuZ2VUYWdzOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuXHRcdFx0cmV0dXJuIGNoZWNrYm94LmlzU2VsZWN0ZWQoKVxuXHRcdFx0XHQ/IGAke29yaWdpbkNoYW5nZVRhZ3N9LCR7Y2hhbmdlVGFnfWBcblx0XHRcdFx0OiBvcmlnaW5DaGFuZ2VUYWdzLnJlcGxhY2UoYCwke2NoYW5nZVRhZ31gLCAnJyk7XG5cdFx0fTtcblxuXHRcdGxldCBjaGFuZ2VUYWdzOiBzdHJpbmcgPSAnJztcblx0XHRjaGFuZ2VUYWdzID0gZ2VuZXJhdGVDaGFuZ2VUYWdzKHdpbmRvdy52ZS5pbml0LnRhcmdldC5zYXZlRmllbGRzLndwQ2hhbmdlVGFncz8uKCkgPz8gJycpO1xuXHRcdHdpbmRvdy52ZS5pbml0LnRhcmdldC5zYXZlRmllbGRzLndwQ2hhbmdlVGFncyA9ICgpOiBzdHJpbmcgPT4ge1xuXHRcdFx0cmV0dXJuIGNoYW5nZVRhZ3M7XG5cdFx0fTtcblx0fSk7XG59O1xuXG5jb25zdCBtb2RpZnlXaWtpRWRpdG9yQ2hhbmdlVGFnID0gKHtcblx0Y2hhbmdlVGFnLFxuXHRjaGVja2JveCxcblx0JGVkaXRGb3JtLFxufTogTW9kaWZ5Q2hhbmdlVGFnUHJvcHMgJiB7JGVkaXRGb3JtOiBKUXVlcnl9KTogdm9pZCA9PiB7XG5cdGNoZWNrYm94Lm9uKCdjaGFuZ2UnLCAoKTogdm9pZCA9PiB7XG5cdFx0Y29uc3QgZ2VuZXJhdGVDaGFuZ2VUYWdzID0gKG9yaWdpbkNoYW5nZVRhZ3M6IHN0cmluZyk6IHN0cmluZyA9PiB7XG5cdFx0XHRyZXR1cm4gY2hlY2tib3guaXNTZWxlY3RlZCgpXG5cdFx0XHRcdD8gYCR7b3JpZ2luQ2hhbmdlVGFnc30sJHtjaGFuZ2VUYWd9YFxuXHRcdFx0XHQ6IG9yaWdpbkNoYW5nZVRhZ3MucmVwbGFjZShgLCR7Y2hhbmdlVGFnfWAsICcnKTtcblx0XHR9O1xuXG5cdFx0bGV0IGNoYW5nZVRhZ3M6IHN0cmluZyA9ICcnO1xuXG5cdFx0Y29uc3QgJHdwQ2hhbmdlVGFnczogSlF1ZXJ5ID0gJCgnPGlucHV0PicpLmF0dHIoe1xuXHRcdFx0aWQ6ICd3cENoYW5nZVRhZ3MnLFxuXHRcdFx0bmFtZTogJ3dwQ2hhbmdlVGFncycsXG5cdFx0XHR0eXBlOiAnaGlkZGVuJyxcblx0XHRcdHZhbHVlOiAnJyxcblx0XHR9KTtcblx0XHRjb25zdCAkYm9keSA9ICRlZGl0Rm9ybS5wYXJlbnRzKCdib2R5Jyk7XG5cdFx0Y29uc3QgJG9yaWdpbldwQ2hhbmdlVGFnczogSlF1ZXJ5ID0gJGJvZHkuZmluZCgnaW5wdXRbbmFtZT13cENoYW5nZVRhZ3NdJyk7XG5cdFx0aWYgKCEkb3JpZ2luV3BDaGFuZ2VUYWdzLmxlbmd0aCkge1xuXHRcdFx0JGJvZHkucHJlcGVuZCgkd3BDaGFuZ2VUYWdzKTtcblx0XHR9XG5cdFx0Y2hhbmdlVGFncyA9IGdlbmVyYXRlQ2hhbmdlVGFncygkb3JpZ2luV3BDaGFuZ2VUYWdzLnZhbCgpPy50b1N0cmluZygpID8/ICcnKTtcblx0XHQkb3JpZ2luV3BDaGFuZ2VUYWdzLnZhbChjaGFuZ2VUYWdzKTtcblx0fSk7XG59O1xuXG5leHBvcnQge21vZGlmeVZpc3VhbEVkaXRvckNoYW5nZVRhZywgbW9kaWZ5V2lraUVkaXRvckNoYW5nZVRhZ307XG4iLCAiaW1wb3J0IHtsb2NhbGl6ZX0gZnJvbSAnZXh0LmdhZGdldC5pMThuJztcblxuY29uc3QgZ2V0STE4bk1lc3NhZ2VzID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdEFkZDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdBZGQnLFxuXHRcdFx0emg6ICflop7liqAnLFxuXHRcdH0pLFxuXHRcdFNvdXJjZTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdTb3VyY2UnLFxuXHRcdFx0J3poLWhhbnMnOiAn5YaF5a655p2l5rqQJyxcblx0XHRcdCd6aC1oYW50JzogJ+WFp+WuueS+hua6kCcsXG5cdFx0fSksXG5cdFx0TGljZW5zZTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdMaWNlbnNlJyxcblx0XHRcdCd6aC1oYW5zJzogJ+iuuOWPr+ivgScsXG5cdFx0XHQnemgtaGFudCc6ICfoqLHlj6/orYknLFxuXHRcdH0pLFxuXHRcdCdTb3VyY2VzIGFuZCBMaWNlbnNlcyc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnU291cmNlcyBhbmQgTGljZW5zZXMnLFxuXHRcdFx0J3poLWhhbnMnOiAn5YaF5a655p2l5rqQ5Y+K6K645Y+v6K+BJyxcblx0XHRcdCd6aC1oYW50JzogJ+WFp+WuueS+hua6kOWPiuioseWPr+itiScsXG5cdFx0fSksXG5cdFx0J090aGVyIExpY2Vuc2UnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ090aGVyIGxpY2Vuc2UnLFxuXHRcdFx0J3poLWhhbnMnOiAn5YW25LuW6K645Y+v6K+BJyxcblx0XHRcdCd6aC1oYW50JzogJ+WFtuS7luioseWPr+itiScsXG5cdFx0fSksXG5cdFx0J1JlcGxhY2UgV2l0aCBMaWNlbnNlJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICcgKFJlcGxhY2UgV2l0aCBsaWNlbnNlIG5hbWUgYW5kIFVSTCknLFxuXHRcdFx0J3poLWhhbnMnOiAn77yI5pu/5o2i5Li66K645Y+v6K+B5ZCN56ew5ZKM572R5Z2A77yJJyxcblx0XHRcdCd6aC1oYW50JzogJ++8iOabv+aPm+eIsuioseWPr+itieWQjeeoseWSjOe2suWdgO+8iScsXG5cdFx0fSksXG5cdFx0VGhpcmRQYXJ0eUNvbnRlbnRDb250YWluZWQ6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnVGhpcyBlZGl0b3IgY29udGFpbnMgdGhpcmQtcGFydHkgY29udGVudC4nLFxuXHRcdFx0J3poLWhhbnMnOiAn5q2k57yW6L6R5ZCr5pyJ56ys5LiJ5pa55YaF5a65Jyxcblx0XHRcdCd6aC1oYW50JzogJ+atpOe3qOi8r+WQq+acieesrOS4ieaWueWFp+WuuScsXG5cdFx0fSksXG5cdFx0UWl1d2VuQ29udGVudENvbnRhaW5lZDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdUaGlzIGVkaXRvciBjb250YWlucyBjb250ZW50IGZyb20gb3RoZXIgcGFnZXMgb2YgUWl1d2VuIEJhaWtlLicsXG5cdFx0XHQnemgtaGFucyc6ICfmraTnvJbovpHlkKvmnInmsYLpl7vnmb7np5Hlhbbku5bpobXpnaLnmoTlhoXlrrknLFxuXHRcdFx0J3poLWhhbnQnOiAn5q2k57eo6Lyv5ZCr5pyJ5rGC6IGe55m+56eR5YW25LuW6aCB6Z2i55qE5YWn5a65Jyxcblx0XHR9KSxcblx0fTtcbn07XG5cbmNvbnN0IGkxOG5NZXNzYWdlcyA9IGdldEkxOG5NZXNzYWdlcygpO1xuXG5jb25zdCBnZXRNZXNzYWdlOiBHZXRNZXNzYWdlczx0eXBlb2YgaTE4bk1lc3NhZ2VzPiA9IChrZXkpID0+IHtcblx0cmV0dXJuIGkxOG5NZXNzYWdlc1trZXldIHx8IGtleTtcbn07XG5cbmV4cG9ydCB7Z2V0TWVzc2FnZX07XG4iLCAiaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuLi9pMThuJztcblxuY29uc3QgZ2V0QXR0cmlidXRpb24gPSAoZmllbGRTZXRMYXlvdXQ6IE9PLnVpLkZpZWxkc2V0TGF5b3V0KSA9PiB7XG5cdGNvbnN0IGF0dHJpYnV0aW9ucyA9IFtdO1xuXG5cdGNvbnN0IGdldFNlbGVjdGVkVmFsdWUgPSAoZHJvcGRvd246IE9PLnVpLkRyb3Bkb3duV2lkZ2V0KTogc3RyaW5nIHwgdW5kZWZpbmVkID0+IHtcblx0XHRjb25zdCBzZWxlY3RlZEl0ZW06IE9PLnVpLk9wdGlvbldpZGdldCB8IG51bGwgPSBkcm9wZG93blxuXHRcdFx0LmdldE1lbnUoKVxuXHRcdFx0LmZpbmRTZWxlY3RlZEl0ZW0oKSBhcyBPTy51aS5PcHRpb25XaWRnZXQgfCBudWxsO1xuXHRcdHJldHVybiBzZWxlY3RlZEl0ZW0gPyAoc2VsZWN0ZWRJdGVtLmdldERhdGEoKSBhcyBzdHJpbmcpIDogdW5kZWZpbmVkO1xuXHR9O1xuXG5cdGZvciAoY29uc3QgYXR0cmlidXRpb25GaWVsZHNldCBvZiBmaWVsZFNldExheW91dC5nZXRJdGVtcygpIGFzIE9PLnVpLkZpZWxkc2V0TGF5b3V0W10pIHtcblx0XHRjb25zdCBhdHRyaWJ1dGlvbjoge3NvdXJjZT86IHN0cmluZzsgbGljZW5zZT86IHN0cmluZ30gPSB7fTtcblxuXHRcdGZvciAoY29uc3QgZmllbGRMYXlvdXQgb2YgYXR0cmlidXRpb25GaWVsZHNldC5nZXRJdGVtcygpIGFzIE9PLnVpLkZpZWxkTGF5b3V0W10pIHtcblx0XHRcdGNvbnN0IGZpZWxkID0gZmllbGRMYXlvdXQuZ2V0RmllbGQoKTtcblxuXHRcdFx0aWYgKGZpZWxkLnN1cHBvcnRzKCdnZXRWYWx1ZScpKSB7XG5cdFx0XHRcdGNvbnN0IHZhbHVlID0gKGZpZWxkIGFzIE9PLnVpLlRleHRJbnB1dFdpZGdldCkuZ2V0VmFsdWUoKTtcblx0XHRcdFx0aWYgKHZhbHVlKSB7XG5cdFx0XHRcdFx0YXR0cmlidXRpb24uc291cmNlID0gdmFsdWU7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSBpZiAoZmllbGQuc3VwcG9ydHMoJ2dldE1lbnUnKSkge1xuXHRcdFx0XHRjb25zdCB2YWx1ZSA9IGdldFNlbGVjdGVkVmFsdWUoZmllbGQgYXMgT08udWkuRHJvcGRvd25XaWRnZXQpO1xuXHRcdFx0XHRpZiAodmFsdWUpIHtcblx0XHRcdFx0XHRhdHRyaWJ1dGlvbi5saWNlbnNlID0gdmFsdWU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoYXR0cmlidXRpb24uc291cmNlICYmIGF0dHJpYnV0aW9uLmxpY2Vuc2UpIHtcblx0XHRcdGF0dHJpYnV0aW9uc1thdHRyaWJ1dGlvbnMubGVuZ3RoXSA9XG5cdFx0XHRcdGAke2F0dHJpYnV0aW9uLnNvdXJjZX0gKCR7Z2V0TWVzc2FnZSgnTGljZW5zZScpfTogJHthdHRyaWJ1dGlvbi5saWNlbnNlfSlgO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBhdHRyaWJ1dGlvbnMuam9pbignICcpO1xufTtcblxuY29uc3QgdXBkYXRlV3BBdHRyaWJ1dGlvbiA9ICh7XG5cdCRib2R5LFxuXHRwYXJlbnRGaWVsZFNldCxcbn06IHtcblx0JGJvZHk6IEpRdWVyeTxIVE1MRWxlbWVudD47XG5cdHBhcmVudEZpZWxkU2V0OiBPTy51aS5GaWVsZHNldExheW91dDtcbn0pID0+IHtcblx0bGV0IHdwQXR0cmlidXRpb246IHN0cmluZyA9ICcnO1xuXG5cdGNvbnN0ICR3cEF0dHJpYnV0aW9uOiBKUXVlcnkgPSAkKCc8aW5wdXQ+JykuYXR0cih7XG5cdFx0aWQ6ICd3cEF0dHJpYnV0aW9uJyxcblx0XHRuYW1lOiAnd3BBdHRyaWJ1dGlvbicsXG5cdFx0dHlwZTogJ2hpZGRlbicsXG5cdFx0dmFsdWU6ICcnLFxuXHR9KTtcblx0Y29uc3QgJG9yaWdpbndwQXR0cmlidXRpb246IEpRdWVyeSA9ICRib2R5LmZpbmQoJ2lucHV0W25hbWU9d3BBdHRyaWJ1dGlvbl0nKTtcblx0aWYgKCEkb3JpZ2lud3BBdHRyaWJ1dGlvbi5sZW5ndGgpIHtcblx0XHQkYm9keS5wcmVwZW5kKCR3cEF0dHJpYnV0aW9uKTtcblx0fVxuXG5cdHdwQXR0cmlidXRpb24gPSBnZXRBdHRyaWJ1dGlvbihwYXJlbnRGaWVsZFNldCk7XG5cdCRvcmlnaW53cEF0dHJpYnV0aW9uLnZhbCh3cEF0dHJpYnV0aW9uKTtcbn07XG5cbmV4cG9ydCB7Z2V0QXR0cmlidXRpb24sIHVwZGF0ZVdwQXR0cmlidXRpb259O1xuIiwgImltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9pMThuJztcblxuY29uc3QgTElDRU5TRVMgPSBbXG5cdHtcblx0XHRsYWJlbDogJ0NDIEJZLVNBIDQuMCcsXG5cdFx0ZGF0YTogJ2h0dHBzOi8vY3JlYXRpdmVjb21tb25zLm9yZy9saWNlbnNlcy9ieS1zYS80LjAvJyxcblx0fSxcblx0e1xuXHRcdGxhYmVsOiAnQ0MgQlktU0EgMy4wJyxcblx0XHRkYXRhOiAnaHR0cHM6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL2xpY2Vuc2VzL2J5LXNhLzMuMC8nLFxuXHR9LFxuXHR7XG5cdFx0bGFiZWw6ICdDQyBCWS1TQSAzLjAgQ04nLFxuXHRcdGRhdGE6ICdodHRwczovL2NyZWF0aXZlY29tbW9ucy5vcmcvbGljZW5zZXMvYnktc2EvMy4wL2NuLycsXG5cdH0sXG5cdHtcblx0XHRsYWJlbDogJ0NDMC0xLjAnLFxuXHRcdGRhdGE6ICdodHRwczovL2NyZWF0aXZlY29tbW9ucy5vcmcvcHVibGljZG9tYWluL3plcm8vMS4wLycsXG5cdH0sXG5cdHtcblx0XHRsYWJlbDogJ0tPR0wgVHlwZSBJOiBBdHRyaWJ1dGlvbicsXG5cdFx0ZGF0YTogJ2h0dHBzOi8vd3d3LmtvZ2wub3Iua3IvaW5mby9saWNlbnNlVHlwZTEuZG8nLFxuXHR9LFxuXHR7XG5cdFx0bGFiZWw6IGdldE1lc3NhZ2UoJ090aGVyIExpY2Vuc2UnKSxcblx0XHRkYXRhOiBnZXRNZXNzYWdlKCdSZXBsYWNlIFdpdGggTGljZW5zZScpLFxuXHR9LFxuXTtcblxuZXhwb3J0IHtMSUNFTlNFU307XG4iLCAiY29uc3QgYXBwZW5kVGV4dFRvU3VtbWFyeSA9ICh7Y3VzdG9tU3VtbWFyeSwgJHdwU3VtbWFyeX06IHtjdXN0b21TdW1tYXJ5OiBzdHJpbmc7ICR3cFN1bW1hcnk6IEpRdWVyeX0pOiB2b2lkID0+IHtcblx0Y29uc3Qgb3JpZ2luU3VtbWFyeTogc3RyaW5nID0gKCR3cFN1bW1hcnkudmFsKCkgYXMgc3RyaW5nIHwgdW5kZWZpbmVkKSA/PyAnJztcblxuXHQkd3BTdW1tYXJ5LnZhbChvcmlnaW5TdW1tYXJ5LnRyaW0oKSA/IGAke29yaWdpblN1bW1hcnl9ICR7Y3VzdG9tU3VtbWFyeX1gIDogY3VzdG9tU3VtbWFyeSkudHJpZ2dlcignY2hhbmdlJyk7XG59O1xuXG5leHBvcnQge2FwcGVuZFRleHRUb1N1bW1hcnl9O1xuIiwgImltcG9ydCB7Z2V0QXR0cmlidXRpb24sIHVwZGF0ZVdwQXR0cmlidXRpb259IGZyb20gJy4vZ2V0QXR0cmlidXRpb24nO1xuaW1wb3J0IHtMSUNFTlNFU30gZnJvbSAnLi4vY29uc3RhbnQnO1xuaW1wb3J0IHthcHBlbmRUZXh0VG9TdW1tYXJ5fSBmcm9tICcuL2FwcGVuZFRleHRUb1N1bW1hcnknO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuLi9pMThuJztcblxuY29uc3QgZ2V0VGV4dElucHV0ID0gKC4uLm9uQ2hhbmdlczogKCgpID0+IHZvaWQpW10pID0+IHtcblx0Y29uc3QgdGV4dElucHV0ID0gbmV3IE9PLnVpLlRleHRJbnB1dFdpZGdldCh7XG5cdFx0cGxhY2Vob2xkZXI6IGdldE1lc3NhZ2UoJ1NvdXJjZScpLFxuXHR9KTtcblxuXHRmb3IgKGNvbnN0IG9uQ2hhbmdlIG9mIG9uQ2hhbmdlcykge1xuXHRcdHRleHRJbnB1dC5vbignY2hhbmdlJywgb25DaGFuZ2UpO1xuXHR9XG5cblx0cmV0dXJuIHRleHRJbnB1dDtcbn07XG5cbmNvbnN0IGdldERyb3BEb3duID0gKC4uLm9uU2VsZWN0czogKCgpID0+IHZvaWQpW10pID0+IHtcblx0Y29uc3QgZHJvcGRvd246IE9PLnVpLkRyb3Bkb3duV2lkZ2V0ID0gbmV3IE9PLnVpLkRyb3Bkb3duV2lkZ2V0KHtcblx0XHRsYWJlbDogZ2V0TWVzc2FnZSgnTGljZW5zZScpLFxuXHR9KTtcblxuXHRjb25zdCBtZW51T3B0aW9uczogT08udWkuTWVudU9wdGlvbldpZGdldFtdID0gW107XG5cblx0Zm9yIChjb25zdCB7ZGF0YSwgbGFiZWx9IG9mIExJQ0VOU0VTKSB7XG5cdFx0bWVudU9wdGlvbnNbbWVudU9wdGlvbnMubGVuZ3RoXSA9IG5ldyBPTy51aS5NZW51T3B0aW9uV2lkZ2V0KHtcblx0XHRcdGRhdGEsXG5cdFx0XHRsYWJlbCxcblx0XHR9KTtcblx0fVxuXG5cdGRyb3Bkb3duLmdldE1lbnUoKS5hZGRJdGVtcyhtZW51T3B0aW9ucyk7XG5cblx0Zm9yIChjb25zdCBvblNlbGVjdCBvZiBvblNlbGVjdHMpIHtcblx0XHRkcm9wZG93bi5nZXRNZW51KCkub24oJ3NlbGVjdCcsIG9uU2VsZWN0KTtcblx0fVxuXG5cdHJldHVybiBkcm9wZG93bjtcbn07XG5cbmNvbnN0IGdldEFkZEl0ZW1CdXR0b24gPSAoLi4ub25DbGlja3M6ICgoKSA9PiB2b2lkKVtdKTogT08udWkuQnV0dG9uSW5wdXRXaWRnZXQgPT4ge1xuXHRjb25zdCBhZGRJdGVtQnV0dG9uID0gbmV3IE9PLnVpLkJ1dHRvbklucHV0V2lkZ2V0KHtcblx0XHRsYWJlbDogZ2V0TWVzc2FnZSgnQWRkJyksXG5cdH0pO1xuXG5cdGZvciAoY29uc3Qgb25DbGljayBvZiBvbkNsaWNrcykge1xuXHRcdGFkZEl0ZW1CdXR0b24ub24oJ2NsaWNrJywgb25DbGljayk7XG5cdH1cblxuXHRyZXR1cm4gYWRkSXRlbUJ1dHRvbjtcbn07XG5cbmNvbnN0IGdlbmVyYXRlVGV4dElucHV0V2l0aERyb3Bkb3duID0gKHskYm9keSwgJHdwU3VtbWFyeX06IHskYm9keTogSlF1ZXJ5PEhUTUxFbGVtZW50PjsgJHdwU3VtbWFyeTogSlF1ZXJ5fSkgPT4ge1xuXHRjb25zdCBpbml0aWFsRmllbGRzZXQgPSBuZXcgT08udWkuRmllbGRzZXRMYXlvdXQoKTtcblx0Y29uc3QgcGFyZW50RmllbGRTZXQgPSBuZXcgT08udWkuRmllbGRzZXRMYXlvdXQoe1xuXHRcdGxhYmVsOiBnZXRNZXNzYWdlKCdTb3VyY2VzIGFuZCBMaWNlbnNlcycpLFxuXHR9KTtcblxuXHRjb25zdCBpbnB1dE9uQ2hhbmdlID0gKCkgPT4ge1xuXHRcdHVwZGF0ZVdwQXR0cmlidXRpb24oeyRib2R5LCBwYXJlbnRGaWVsZFNldH0pO1xuXHR9O1xuXG5cdGNvbnN0IHRleHRJbnB1dCA9IGdldFRleHRJbnB1dChpbnB1dE9uQ2hhbmdlKTtcblx0Y29uc3QgZHJvcERvd24gPSBnZXREcm9wRG93bihpbnB1dE9uQ2hhbmdlKTtcblxuXHRjb25zdCBhZGRJdGVtT25DbGljayA9ICgpID0+IHtcblx0XHRsZXQgd3BBdHRyaWJ1dGlvbjogc3RyaW5nID0gJyc7XG5cblx0XHRjb25zdCAkd3BBdHRyaWJ1dGlvbjogSlF1ZXJ5ID0gJCgnPGlucHV0PicpLmF0dHIoe1xuXHRcdFx0aWQ6ICd3cEF0dHJpYnV0aW9uJyxcblx0XHRcdG5hbWU6ICd3cEF0dHJpYnV0aW9uJyxcblx0XHRcdHR5cGU6ICdoaWRkZW4nLFxuXHRcdFx0dmFsdWU6ICcnLFxuXHRcdH0pO1xuXG5cdFx0Y29uc3QgJG9yaWdpbndwQXR0cmlidXRpb246IEpRdWVyeTxIVE1MSW5wdXRFbGVtZW50PiA9XG5cdFx0XHQkYm9keS5maW5kPEhUTUxJbnB1dEVsZW1lbnQ+KCdpbnB1dFtuYW1lPXdwQXR0cmlidXRpb25dJyk7XG5cdFx0aWYgKCEkb3JpZ2lud3BBdHRyaWJ1dGlvbi5sZW5ndGgpIHtcblx0XHRcdCRib2R5LnByZXBlbmQoJHdwQXR0cmlidXRpb24pO1xuXHRcdH1cblxuXHRcdHdwQXR0cmlidXRpb24gPSBnZXRBdHRyaWJ1dGlvbihwYXJlbnRGaWVsZFNldCk7XG5cdFx0JG9yaWdpbndwQXR0cmlidXRpb24udmFsKHdwQXR0cmlidXRpb24pO1xuXG5cdFx0YXBwZW5kVGV4dFRvU3VtbWFyeSh7XG5cdFx0XHQkd3BTdW1tYXJ5LFxuXHRcdFx0Y3VzdG9tU3VtbWFyeTogJG9yaWdpbndwQXR0cmlidXRpb24udmFsKCkgPyBgPCR7Z2V0TWVzc2FnZSgnU291cmNlJyl9OiAkeyRvcmlnaW53cEF0dHJpYnV0aW9uLnZhbCgpfT5gIDogJycsXG5cdFx0fSk7XG5cblx0XHR0ZXh0SW5wdXQuc2V0VmFsdWUoJycpO1xuXHRcdGRyb3BEb3duLmdldE1lbnUoKS51bnNlbGVjdEl0ZW0oKTtcblx0fTtcblxuXHRjb25zdCBhZGRJdGVtQnV0dG9uID0gZ2V0QWRkSXRlbUJ1dHRvbihhZGRJdGVtT25DbGljayk7XG5cblx0aW5pdGlhbEZpZWxkc2V0LmFkZEl0ZW1zKFtcblx0XHRuZXcgT08udWkuRmllbGRMYXlvdXQodGV4dElucHV0LCB7bGFiZWw6IGdldE1lc3NhZ2UoJ1NvdXJjZScpLCBhbGlnbjogJ2lubGluZSd9KSxcblx0XHRuZXcgT08udWkuRmllbGRMYXlvdXQoZHJvcERvd24sIHtsYWJlbDogZ2V0TWVzc2FnZSgnTGljZW5zZScpLCBhbGlnbjogJ2lubGluZSd9KSxcblx0XHRuZXcgT08udWkuRmllbGRMYXlvdXQoYWRkSXRlbUJ1dHRvbiwge2FsaWduOiAnaW5saW5lJ30pLFxuXHRdKTtcblxuXHRwYXJlbnRGaWVsZFNldC5hZGRJdGVtcyhbaW5pdGlhbEZpZWxkc2V0XSk7XG5cblx0cmV0dXJuIHBhcmVudEZpZWxkU2V0O1xufTtcblxuZXhwb3J0IHtnZW5lcmF0ZVRleHRJbnB1dFdpdGhEcm9wZG93bn07XG4iLCAiaW1wb3J0IHttb2RpZnlWaXN1YWxFZGl0b3JDaGFuZ2VUYWcsIG1vZGlmeVdpa2lFZGl0b3JDaGFuZ2VUYWd9IGZyb20gJy4vbW9kaWZ5Q2hhbmdlVGFnJztcbmltcG9ydCB7Z2VuZXJhdGVUZXh0SW5wdXRXaXRoRHJvcGRvd259IGZyb20gJy4vZ2VuZXJhdGVUZXh0SW5wdXRXaXRoRHJvcGRvd24nO1xuXG5pbnRlcmZhY2UgQ2hlY2tib3hMYXlvdXRQcm9wcyB7XG5cdGlucHV0SWQ/OiBzdHJpbmc7XG5cdGxhYmVsOiBzdHJpbmc7XG5cdCRib2R5OiBKUXVlcnk8SFRNTEVsZW1lbnQ+O1xuXHRjaGFuZ2VUYWc/OiBzdHJpbmc7XG59XG5cbmNvbnN0IGdlbmVyYXRlVmlzdWFsRWRpdG9yQ2hlY2tib3hMYXlvdXQgPSAoe2lucHV0SWQsIGxhYmVsLCAkYm9keSwgY2hhbmdlVGFnfTogQ2hlY2tib3hMYXlvdXRQcm9wcykgPT4ge1xuXHRjb25zdCBjaGVja2JveDogT08udWkuQ2hlY2tib3hJbnB1dFdpZGdldCA9IG5ldyBPTy51aS5DaGVja2JveElucHV0V2lkZ2V0KHtcblx0XHRzZWxlY3RlZDogZmFsc2UsXG5cdH0pO1xuXG5cdGlmIChpbnB1dElkKSB7XG5cdFx0Y2hlY2tib3guc2V0SW5wdXRJZChpbnB1dElkKTtcblx0fVxuXG5cdGlmIChjaGFuZ2VUYWcpIHtcblx0XHRtb2RpZnlWaXN1YWxFZGl0b3JDaGFuZ2VUYWcoe2NoYW5nZVRhZywgY2hlY2tib3h9KTtcblx0fVxuXG5cdGNvbnN0IHt0YXJnZXR9ID0gd2luZG93LnZlLmluaXQ7XG5cdGNvbnN0ICR3cFN1bW1hcnkgPSB0YXJnZXQuc2F2ZURpYWxvZy5lZGl0U3VtbWFyeUlucHV0LiRpbnB1dDtcblx0Y29uc3QgdGV4dElucHV0V2l0aERyb3Bkb3duID0gZ2VuZXJhdGVUZXh0SW5wdXRXaXRoRHJvcGRvd24oeyRib2R5LCAkd3BTdW1tYXJ5fSk7XG5cblx0Y29uc3QgY2hlY2tib3hMYXlvdXQ6IE9PLnVpLkZpZWxkTGF5b3V0PE9PLnVpLkNoZWNrYm94SW5wdXRXaWRnZXQ+ID0gbmV3IE9PLnVpLkZpZWxkTGF5b3V0KGNoZWNrYm94LCB7XG5cdFx0YWxpZ246ICdpbmxpbmUnLFxuXHRcdGxhYmVsLFxuXHR9KTtcblxuXHRjb25zdCAkbGF5b3V0ID0gJCgnPGRpdj4nKS5hdHRyKCdpZCcsICdlZmEtYXJlYScpLmFwcGVuZChjaGVja2JveExheW91dC4kZWxlbWVudCwgdGV4dElucHV0V2l0aERyb3Bkb3duLiRlbGVtZW50KTtcblxuXHRyZXR1cm4gJGxheW91dDtcbn07XG5cbmNvbnN0IGdlbmVyYXRlV2lraUVkaXRvckNoZWNrYm94TGF5b3V0ID0gKHtcblx0aW5wdXRJZCxcblx0bGFiZWwsXG5cdGNoYW5nZVRhZyxcblx0JGJvZHksXG5cdCRlZGl0Rm9ybSxcbn06IENoZWNrYm94TGF5b3V0UHJvcHMgJiB7JGVkaXRGb3JtOiBKUXVlcnl9KSA9PiB7XG5cdGNvbnN0IGNoZWNrYm94OiBPTy51aS5DaGVja2JveElucHV0V2lkZ2V0ID0gbmV3IE9PLnVpLkNoZWNrYm94SW5wdXRXaWRnZXQoe1xuXHRcdHNlbGVjdGVkOiBmYWxzZSxcblx0fSk7XG5cblx0aWYgKGlucHV0SWQpIHtcblx0XHRjaGVja2JveC5zZXRJbnB1dElkKGlucHV0SWQpO1xuXHR9XG5cblx0aWYgKGNoYW5nZVRhZykge1xuXHRcdG1vZGlmeVdpa2lFZGl0b3JDaGFuZ2VUYWcoe2NoYW5nZVRhZywgY2hlY2tib3gsICRlZGl0Rm9ybX0pO1xuXHR9XG5cblx0Y29uc3QgJHdwU3VtbWFyeSA9ICRlZGl0Rm9ybS5maW5kKCdpbnB1dFtuYW1lPXdwU3VtbWFyeV0nKTtcblx0Y29uc3QgdGV4dElucHV0V2l0aERyb3Bkb3duID0gZ2VuZXJhdGVUZXh0SW5wdXRXaXRoRHJvcGRvd24oeyRib2R5LCAkd3BTdW1tYXJ5fSk7XG5cblx0Y29uc3QgY2hlY2tib3hMYXlvdXQ6IE9PLnVpLkZpZWxkTGF5b3V0PE9PLnVpLkNoZWNrYm94SW5wdXRXaWRnZXQ+ID0gbmV3IE9PLnVpLkZpZWxkTGF5b3V0KGNoZWNrYm94LCB7XG5cdFx0YWxpZ246ICdpbmxpbmUnLFxuXHRcdGxhYmVsLFxuXHR9KTtcblxuXHRjb25zdCAkbGF5b3V0ID0gJCgnPGRpdj4nKS5hdHRyKCdpZCcsICdlZmEtYXJlYScpLmFwcGVuZChjaGVja2JveExheW91dC4kZWxlbWVudCwgdGV4dElucHV0V2l0aERyb3Bkb3duLiRlbGVtZW50KTtcblxuXHRyZXR1cm4gJGxheW91dDtcbn07XG5cbmV4cG9ydCB7Z2VuZXJhdGVWaXN1YWxFZGl0b3JDaGVja2JveExheW91dCwgZ2VuZXJhdGVXaWtpRWRpdG9yQ2hlY2tib3hMYXlvdXR9O1xuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnfi9FZGl0Zm9ybV9BdHRyaWJ1dGlvbi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtnZW5lcmF0ZVZpc3VhbEVkaXRvckNoZWNrYm94TGF5b3V0fSBmcm9tICcuL3V0aWwvZ2VuZXJhdGVDaGVja2JveExheW91dCc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vaTE4bic7XG5cbmNvbnN0IHByb2Nlc3NWaXN1YWxFZGl0b3IgPSAoeyRib2R5fTogeyRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pn0pOiB2b2lkID0+IHtcblx0Ly8gR3VhcmQgYWdhaW5zdCBkb3VibGUgaW5jbHVzaW9uc1xuXHRpZiAobXcuY29uZmlnLmdldChPUFRJT05TLmNvbmZpZ0tleVZlKSkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0ICR0YXJnZXQ6IEpRdWVyeSA9ICRib2R5LmZpbmQoYC4ke09QVElPTlMudGFyZ2V0Q2xhc3NWZX1gKTtcblx0aWYgKCEkdGFyZ2V0Lmxlbmd0aCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdG13LmNvbmZpZy5zZXQoT1BUSU9OUy5jb25maWdLZXlWZSwgdHJ1ZSk7XG5cblx0Y29uc3QgJGxheW91dCA9IGdlbmVyYXRlVmlzdWFsRWRpdG9yQ2hlY2tib3hMYXlvdXQoe1xuXHRcdGlucHV0SWQ6IE9QVElPTlMuaW5wdXRJZCxcblx0XHRsYWJlbDogZ2V0TWVzc2FnZSgnVGhpcmRQYXJ0eUNvbnRlbnRDb250YWluZWQnKSxcblx0XHQvLyBjaGFuZ2VUYWc6IE9QVElPTlMuY2hhbmdlVGFnLFxuXHRcdCRib2R5LFxuXHR9KTtcblxuXHRpZiAoISRib2R5LmZpbmQoYCMke09QVElPTlMuaW5wdXRJZH1gKS5sZW5ndGgpIHtcblx0XHQkdGFyZ2V0LmFwcGVuZCgkbGF5b3V0KTtcblx0fVxuXG5cdC8vIFJlaW5pdGlhbGl6YXRpb24gaXMgcmVxdWlyZWQgZm9yIHN3aXRjaGluZyBiZXR3ZWVuIFZpc3VhbEVkaXRvciBhbmQgTmV3IFdpa2l0ZXh0IEVkaXRvciAoMjAxNylcblx0bXcuaG9vaygndmUuYWN0aXZhdGlvbkNvbXBsZXRlJykuYWRkKCgpID0+IHtcblx0XHRpZiAobXcuY29uZmlnLmdldChPUFRJT05TLmNvbmZpZ0tleVZlKSkge1xuXHRcdFx0bXcuY29uZmlnLnNldChPUFRJT05TLmNvbmZpZ0tleVZlLCBmYWxzZSk7XG5cdFx0fVxuXHR9KTtcbn07XG5cbmV4cG9ydCB7cHJvY2Vzc1Zpc3VhbEVkaXRvcn07XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICd+L0VkaXRmb3JtX0F0dHJpYnV0aW9uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge2dlbmVyYXRlV2lraUVkaXRvckNoZWNrYm94TGF5b3V0fSBmcm9tICcuL3V0aWwvZ2VuZXJhdGVDaGVja2JveExheW91dCc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vaTE4bic7XG5cbmNvbnN0IHByb2Nlc3NXaWtpRWRpdG9yID0gKHskYm9keSwgJGVkaXRGb3JtfTogeyRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50PjsgJGVkaXRGb3JtOiBKUXVlcnl9KTogdm9pZCA9PiB7XG5cdC8vIEd1YXJkIGFnYWluc3QgZG91YmxlIGluY2x1c2lvbnNcblx0aWYgKG13LmNvbmZpZy5nZXQoT1BUSU9OUy5jb25maWdLZXkpKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgJHRhcmdldDogSlF1ZXJ5ID0gJGVkaXRGb3JtLmZpbmQoT1BUSU9OUy50YXJnZXRXaWtpRWRpdG9yKTtcblx0aWYgKCEkdGFyZ2V0Lmxlbmd0aCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdG13LmNvbmZpZy5zZXQoT1BUSU9OUy5jb25maWdLZXksIHRydWUpO1xuXG5cdGNvbnN0ICRsYXlvdXQgPSBnZW5lcmF0ZVdpa2lFZGl0b3JDaGVja2JveExheW91dCh7XG5cdFx0aW5wdXRJZDogT1BUSU9OUy5pbnB1dElkLFxuXHRcdGxhYmVsOiBnZXRNZXNzYWdlKCdUaGlyZFBhcnR5Q29udGVudENvbnRhaW5lZCcpLFxuXHRcdC8vIGNoYW5nZVRhZzogT1BUSU9OUy5jaGFuZ2VUYWcsXG5cdFx0JGJvZHksXG5cdFx0JGVkaXRGb3JtLFxuXHR9KTtcblxuXHRpZiAoISRib2R5LmZpbmQoYCMke09QVElPTlMuaW5wdXRJZH1gKS5sZW5ndGgpIHtcblx0XHQkdGFyZ2V0LmFmdGVyKCRsYXlvdXQpO1xuXHR9XG59O1xuXG5leHBvcnQge3Byb2Nlc3NXaWtpRWRpdG9yfTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLHFCQUFzQkMsUUFBQSxpQkFBQTs7QUNDckIsSUFBQUMsWUFBYTtBQUNiLElB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VnJCQSxNQUFBLEdBQUt6SixtQkFBQXVLLFNBQVEsRUFBRUMsS0FBSyxTQUFTQyxTQUFTbkksT0FBc0M7QUFDM0V3SCxLQUFHSyxLQUFLLG1CQUFtQixFQUFFQyxJQUFLeEksZUFBb0I7QUFDckR5SSxzQkFBa0I7TUFDakIvSDtNQUNBVjtJQUNELENBQUM7RUFDRixDQUFDO0FBRURrSSxLQUFHSyxLQUFLLDRCQUE0QixFQUFFQyxJQUFJLE1BQVk7QUFDckRQLHdCQUFvQjtNQUFDdkg7SUFBSyxDQUFDO0VBQzVCLENBQUM7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogWyJpbXBvcnRfZXh0X2dhZGdldDIiLCAicmVxdWlyZSIsICJjb25maWdLZXkiLCAiY29uZmlnS2V5VmUiLCAiaW5wdXRJZCIsICJ0YXJnZXRDbGFzc1ZlIiwgInRhcmdldFdpa2lFZGl0b3IiLCAibW9kaWZ5VmlzdWFsRWRpdG9yQ2hhbmdlVGFnIiwgImNoYW5nZVRhZyIsICJjaGVja2JveCIsICJvbiIsICJfd2luZG93JHZlJGluaXQkdGFyZ2UiLCAiX3dpbmRvdyR2ZSRpbml0JHRhcmdlMiIsICJfd2luZG93JHZlJGluaXQkdGFyZ2UzIiwgImdlbmVyYXRlQ2hhbmdlVGFncyIsICJvcmlnaW5DaGFuZ2VUYWdzIiwgImlzU2VsZWN0ZWQiLCAiY29uY2F0IiwgInJlcGxhY2UiLCAiY2hhbmdlVGFncyIsICJ3aW5kb3ciLCAidmUiLCAiaW5pdCIsICJ0YXJnZXQiLCAic2F2ZUZpZWxkcyIsICJ3cENoYW5nZVRhZ3MiLCAiY2FsbCIsICJtb2RpZnlXaWtpRWRpdG9yQ2hhbmdlVGFnIiwgIiRlZGl0Rm9ybSIsICJfJG9yaWdpbldwQ2hhbmdlVGFncyQiLCAiXyRvcmlnaW5XcENoYW5nZVRhZ3MkMiIsICIkd3BDaGFuZ2VUYWdzIiwgIiQiLCAiYXR0ciIsICJpZCIsICJuYW1lIiwgInR5cGUiLCAidmFsdWUiLCAiJGJvZHkiLCAicGFyZW50cyIsICIkb3JpZ2luV3BDaGFuZ2VUYWdzIiwgImZpbmQiLCAibGVuZ3RoIiwgInByZXBlbmQiLCAidmFsIiwgInRvU3RyaW5nIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgImdldEkxOG5NZXNzYWdlcyIsICJBZGQiLCAibG9jYWxpemUiLCAiZW4iLCAiemgiLCAiU291cmNlIiwgIkxpY2Vuc2UiLCAiVGhpcmRQYXJ0eUNvbnRlbnRDb250YWluZWQiLCAiUWl1d2VuQ29udGVudENvbnRhaW5lZCIsICJpMThuTWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAiZ2V0QXR0cmlidXRpb24iLCAiZmllbGRTZXRMYXlvdXQiLCAiYXR0cmlidXRpb25zIiwgImdldFNlbGVjdGVkVmFsdWUiLCAiZHJvcGRvd24iLCAic2VsZWN0ZWRJdGVtIiwgImdldE1lbnUiLCAiZmluZFNlbGVjdGVkSXRlbSIsICJnZXREYXRhIiwgIl9pdGVyYXRvciIsICJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsICJnZXRJdGVtcyIsICJfc3RlcCIsICJzIiwgIm4iLCAiZG9uZSIsICJhdHRyaWJ1dGlvbkZpZWxkc2V0IiwgImF0dHJpYnV0aW9uIiwgIl9pdGVyYXRvcjIiLCAiX3N0ZXAyIiwgImZpZWxkTGF5b3V0IiwgImZpZWxkIiwgImdldEZpZWxkIiwgInN1cHBvcnRzIiwgImdldFZhbHVlIiwgInNvdXJjZSIsICJsaWNlbnNlIiwgImVyciIsICJlIiwgImYiLCAiam9pbiIsICJ1cGRhdGVXcEF0dHJpYnV0aW9uIiwgInBhcmVudEZpZWxkU2V0IiwgIndwQXR0cmlidXRpb24iLCAiJHdwQXR0cmlidXRpb24iLCAiJG9yaWdpbndwQXR0cmlidXRpb24iLCAiTElDRU5TRVMiLCAibGFiZWwiLCAiZGF0YSIsICJhcHBlbmRUZXh0VG9TdW1tYXJ5IiwgImN1c3RvbVN1bW1hcnkiLCAiJHdwU3VtbWFyeSIsICJfJHdwU3VtbWFyeSR2YWwiLCAib3JpZ2luU3VtbWFyeSIsICJ0cmltIiwgInRyaWdnZXIiLCAiZ2V0VGV4dElucHV0IiwgIm9uQ2hhbmdlcyIsICJ0ZXh0SW5wdXQiLCAiT08iLCAidWkiLCAiVGV4dElucHV0V2lkZ2V0IiwgInBsYWNlaG9sZGVyIiwgIl9pIiwgIl9vbkNoYW5nZXMiLCAib25DaGFuZ2UiLCAiZ2V0RHJvcERvd24iLCAib25TZWxlY3RzIiwgIkRyb3Bkb3duV2lkZ2V0IiwgIm1lbnVPcHRpb25zIiwgIl9pMiIsICJfTElDRU5TRVMiLCAiTWVudU9wdGlvbldpZGdldCIsICJhZGRJdGVtcyIsICJfaTMiLCAiX29uU2VsZWN0cyIsICJvblNlbGVjdCIsICJnZXRBZGRJdGVtQnV0dG9uIiwgIm9uQ2xpY2tzIiwgImFkZEl0ZW1CdXR0b24iLCAiQnV0dG9uSW5wdXRXaWRnZXQiLCAiX2k0IiwgIl9vbkNsaWNrcyIsICJvbkNsaWNrIiwgImdlbmVyYXRlVGV4dElucHV0V2l0aERyb3Bkb3duIiwgImluaXRpYWxGaWVsZHNldCIsICJGaWVsZHNldExheW91dCIsICJpbnB1dE9uQ2hhbmdlIiwgImRyb3BEb3duIiwgImFkZEl0ZW1PbkNsaWNrIiwgInNldFZhbHVlIiwgInVuc2VsZWN0SXRlbSIsICJGaWVsZExheW91dCIsICJhbGlnbiIsICJnZW5lcmF0ZVZpc3VhbEVkaXRvckNoZWNrYm94TGF5b3V0IiwgImlucHV0SWQyIiwgIkNoZWNrYm94SW5wdXRXaWRnZXQiLCAic2VsZWN0ZWQiLCAic2V0SW5wdXRJZCIsICJzYXZlRGlhbG9nIiwgImVkaXRTdW1tYXJ5SW5wdXQiLCAiJGlucHV0IiwgInRleHRJbnB1dFdpdGhEcm9wZG93biIsICJjaGVja2JveExheW91dCIsICIkbGF5b3V0IiwgImFwcGVuZCIsICIkZWxlbWVudCIsICJnZW5lcmF0ZVdpa2lFZGl0b3JDaGVja2JveExheW91dCIsICJwcm9jZXNzVmlzdWFsRWRpdG9yIiwgIm13IiwgImNvbmZpZyIsICJnZXQiLCAiJHRhcmdldCIsICJzZXQiLCAiaG9vayIsICJhZGQiLCAicHJvY2Vzc1dpa2lFZGl0b3IiLCAiYWZ0ZXIiLCAiZ2V0Qm9keSIsICJ0aGVuIiwgImVkaXRGb3JtIl0KfQo=

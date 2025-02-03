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
//! src/Editform_Attribution/options.json
var configKey = "gadget-Editform_Attribution__Initialized";
var inputId = "editform_attribution";
var targetClassVe = "ve-ui-mwSaveDialog-checkboxes";
var targetWikiEditor = ".editCheckboxes .oo-ui-horizontalLayout";
//! src/Editform_Attribution/Editform_Attribution.ts
var import_ext_gadget2 = require("ext.gadget.Util");
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
//! src/Editform_Attribution/modules/util/changeSummary.ts
var appendTextToSummary = ({
  customSummary,
  $wpSummary
}) => {
  var _$wpSummary$val;
  const originSummary = (_$wpSummary$val = $wpSummary.val()) !== null && _$wpSummary$val !== void 0 ? _$wpSummary$val : "";
  $wpSummary.val(originSummary.trim() ? "".concat(originSummary, " ").concat(customSummary) : customSummary).trigger("change");
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
}];
//! src/Editform_Attribution/modules/util/getAttribution.ts
var getAttribution = ({
  $body,
  parentFieldSet
}) => {
  const generateInfoMartix = (fieldSetLayout) => {
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
          attributions[attributions.length] = "".concat(attribution.source, ", ").concat(attribution.license);
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    console.log(attributions);
    return attributions.join("; ");
  };
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
  wpAttribution = generateInfoMartix(parentFieldSet);
  $originwpAttribution.val(wpAttribution);
};
//! src/Editform_Attribution/modules/i18n.ts
var import_ext_gadget = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    Add: (0, import_ext_gadget.localize)({
      en: "Add",
      zh: "增加"
    }),
    Delete: (0, import_ext_gadget.localize)({
      en: "Delete",
      zh: "移除"
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
//! src/Editform_Attribution/modules/util/generateTextInputWithDropdown.ts
var generateTextInputWithDropdown = ({
  $body
}) => {
  const getTextInput = (...onChanges) => {
    const textInput = new OO.ui.TextInputWidget({
      placeholder: getMessage("Source")
    });
    for (var _i = 0, _onChanges = onChanges; _i < _onChanges.length; _i++) {
      const onChange = _onChanges[_i];
      textInput.on("change", onChange);
    }
    return textInput;
  };
  const getDropDown = (...onSelects) => {
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
  const getAddItemButton = (...onClicks) => {
    const addItemButton = new OO.ui.ButtonInputWidget({
      label: getMessage("Add")
    });
    for (var _i4 = 0, _onClicks = onClicks; _i4 < _onClicks.length; _i4++) {
      const onClick = _onClicks[_i4];
      addItemButton.on("click", onClick);
    }
    return addItemButton;
  };
  const getDeleteItemButton = (...onClicks) => {
    const deleteItemButton = new OO.ui.ButtonInputWidget({
      label: getMessage("Delete")
    });
    for (var _i5 = 0, _onClicks2 = onClicks; _i5 < _onClicks2.length; _i5++) {
      const onClick = _onClicks2[_i5];
      deleteItemButton.on("click", onClick);
    }
    return deleteItemButton;
  };
  const parentFieldSet = new OO.ui.FieldsetLayout({
    label: getMessage("Sources and Licenses")
  });
  const inputOnChange = () => {
    getAttribution({
      $body,
      parentFieldSet
    });
  };
  const addItemOnClick = () => {
    parentFieldSet.addItems([getFollowUpFieldset()]);
  };
  const deleteItemOnClick = (item) => {
    parentFieldSet.removeItems([item]);
  };
  const initialFieldset = new OO.ui.FieldsetLayout();
  initialFieldset.addItems([new OO.ui.FieldLayout(getTextInput(inputOnChange), {
    label: getMessage("Source"),
    align: "inline"
  }), new OO.ui.FieldLayout(getDropDown(inputOnChange), {
    label: getMessage("License"),
    align: "inline"
  }), new OO.ui.FieldLayout(getAddItemButton(addItemOnClick, inputOnChange), {
    align: "inline"
  })]);
  const getFollowUpFieldset = () => {
    const followUpFieldset = new OO.ui.FieldsetLayout();
    const deleteThisItem = () => {
      deleteItemOnClick(followUpFieldset);
    };
    followUpFieldset.addItems([new OO.ui.FieldLayout(getTextInput(inputOnChange), {
      label: getMessage("Source"),
      align: "inline"
    }), new OO.ui.FieldLayout(getDropDown(inputOnChange), {
      label: getMessage("License"),
      align: "inline"
    }), new OO.ui.FieldLayout(getAddItemButton(addItemOnClick, inputOnChange), {
      align: "inline"
    }), new OO.ui.FieldLayout(getDeleteItemButton(deleteThisItem, inputOnChange), {
      align: "inline"
    })]);
    return followUpFieldset;
  };
  parentFieldSet.addItems([initialFieldset]);
  parentFieldSet.on("change", () => {
    getAttribution({
      $body,
      parentFieldSet
    });
  });
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
  const textInputWithDropdown = generateTextInputWithDropdown({
    $body
  });
  if (!checkbox.isSelected()) {
    textInputWithDropdown.$element.prop("disabled", true);
    textInputWithDropdown.$element.css("display", "none");
  }
  checkbox.on("change", (selected) => {
    textInputWithDropdown.$element.prop("disabled", !selected);
    textInputWithDropdown.$element.css("display", selected ? "block" : "none");
  });
  const checkboxLayout = new OO.ui.FieldLayout(checkbox, {
    align: "inline",
    label
  });
  const $layout = $("<div>").attr("id", "efa-area").append(checkboxLayout.$element, textInputWithDropdown.$element);
  const {
    target
  } = window.ve.init;
  const {
    saveDialog
  } = target;
  saveDialog.on("save", () => {
    if (checkbox.isSelected()) {
      const customSummary = String($body.find("input[name=wpAttribution]").val());
      const $wpSummary = target.saveDialog.editSummaryInput.$input;
      appendTextToSummary({
        customSummary,
        $wpSummary
      });
      $layout.replaceWith($layout);
    }
  });
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
  const textInputWithDropdown = generateTextInputWithDropdown({
    $body
  });
  if (!checkbox.isSelected()) {
    textInputWithDropdown.$element.prop("disabled", true);
    textInputWithDropdown.$element.css("display", "none");
  }
  checkbox.on("change", (selected) => {
    textInputWithDropdown.$element.prop("disabled", !selected);
    textInputWithDropdown.$element.css("display", selected ? "block" : "none");
  });
  const checkboxLayout = new OO.ui.FieldLayout(checkbox, {
    align: "inline",
    label
  });
  const $layout = $("<div>").attr("id", "efa-area").append(checkboxLayout.$element, textInputWithDropdown.$element);
  $editForm.on("submit", () => {
    if (checkbox.isSelected()) {
      const customSummary = String($body.find("input[name=wpAttribution]").val());
      const $wpSummary = $editForm.find("input[name=wpSummary]");
      appendTextToSummary({
        customSummary,
        $wpSummary
      });
      $layout.replaceWith($layout);
    }
  });
  return $layout;
};
//! src/Editform_Attribution/modules/processVisualEditor.ts
var processVisualEditor = ({
  $body
}) => {
  if (mw.config.get(configKey)) {
    return;
  }
  const $target = $body.find(".".concat(targetClassVe));
  if (!$target.length) {
    return;
  }
  mw.config.set(configKey, true);
  const get$Layout = () => {
    return generateVisualEditorCheckboxLayout({
      inputId,
      label: getMessage("ThirdPartyContentContained"),
      // changeTag: OPTIONS.changeTag,
      $body
    });
  };
  const $layout = get$Layout();
  if (!$body.find("#".concat(inputId)).length) {
    $target.append($layout);
  }
  const {
    target
  } = window.ve.init;
  const {
    saveDialog
  } = target;
  saveDialog.on("save", () => {
    $layout.replaceWith(get$Layout());
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
  const get$Layout = () => {
    return generateWikiEditorCheckboxLayout({
      inputId,
      label: getMessage("ThirdPartyContentContained"),
      // changeTag: OPTIONS.changeTag,
      $body,
      $editForm
    });
  };
  const $layout = get$Layout();
  if (!$body.find("#".concat(inputId)).length) {
    $target.after($layout);
  }
  $editForm.on("submit", () => {
    $layout.replaceWith(get$Layout());
  });
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
  mw.hook("ve.activationComplete").add(() => {
    if (mw.config.get(configKey)) {
      mw.config.set(configKey, false);
    }
  });
});

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0VkaXRmb3JtX0F0dHJpYnV0aW9uL29wdGlvbnMuanNvbiIsICJzcmMvRWRpdGZvcm1fQXR0cmlidXRpb24vRWRpdGZvcm1fQXR0cmlidXRpb24udHMiLCAic3JjL0VkaXRmb3JtX0F0dHJpYnV0aW9uL21vZHVsZXMvdXRpbC9tb2RpZnlDaGFuZ2VUYWcudHMiLCAic3JjL0VkaXRmb3JtX0F0dHJpYnV0aW9uL21vZHVsZXMvdXRpbC9jaGFuZ2VTdW1tYXJ5LnRzIiwgInNyYy9FZGl0Zm9ybV9BdHRyaWJ1dGlvbi9tb2R1bGVzL2NvbnN0YW50LnRzIiwgInNyYy9FZGl0Zm9ybV9BdHRyaWJ1dGlvbi9tb2R1bGVzL3V0aWwvZ2V0QXR0cmlidXRpb24udHMiLCAic3JjL0VkaXRmb3JtX0F0dHJpYnV0aW9uL21vZHVsZXMvaTE4bi50cyIsICJzcmMvRWRpdGZvcm1fQXR0cmlidXRpb24vbW9kdWxlcy91dGlsL2dlbmVyYXRlVGV4dElucHV0V2l0aERyb3Bkb3duLnRzIiwgInNyYy9FZGl0Zm9ybV9BdHRyaWJ1dGlvbi9tb2R1bGVzL3V0aWwvZ2VuZXJhdGVDaGVja2JveExheW91dC50cyIsICJzcmMvRWRpdGZvcm1fQXR0cmlidXRpb24vbW9kdWxlcy9wcm9jZXNzVmlzdWFsRWRpdG9yLnRzIiwgInNyYy9FZGl0Zm9ybV9BdHRyaWJ1dGlvbi9tb2R1bGVzL3Byb2Nlc3NXaWtpRWRpdG9yLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJ7XG5cdFwiY29uZmlnS2V5XCI6IFwiZ2FkZ2V0LUVkaXRmb3JtX0F0dHJpYnV0aW9uX19Jbml0aWFsaXplZFwiLFxuXHRcImNoYW5nZVRhZ1wiOiBcIkF0dHJpYnV0aW9uX2FkZGVkXCIsXG5cdFwiaW5wdXRJZFwiOiBcImVkaXRmb3JtX2F0dHJpYnV0aW9uXCIsXG5cdFwidGFyZ2V0Q2xhc3NWZVwiOiBcInZlLXVpLW13U2F2ZURpYWxvZy1jaGVja2JveGVzXCIsXG5cdFwidGFyZ2V0V2lraUVkaXRvclwiOiBcIi5lZGl0Q2hlY2tib3hlcyAub28tdWktaG9yaXpvbnRhbExheW91dFwiXG59XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuL29wdGlvbnMuanNvbic7XG5pbXBvcnQge2dldEJvZHl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5pbXBvcnQge3Byb2Nlc3NWaXN1YWxFZGl0b3J9IGZyb20gJy4vbW9kdWxlcy9wcm9jZXNzVmlzdWFsRWRpdG9yJztcbmltcG9ydCB7cHJvY2Vzc1dpa2lFZGl0b3J9IGZyb20gJy4vbW9kdWxlcy9wcm9jZXNzV2lraUVkaXRvcic7XG5cbi8qKlxuICogQGRlc2NyaXB0aW9uIOesrOS4ieaWueadpea6kOeJueauiuWjsOaYjlxuICovXG52b2lkIGdldEJvZHkoKS50aGVuKGZ1bmN0aW9uIGVkaXRGb3JtKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQge1xuXHRtdy5ob29rKCd3aWtpcGFnZS5lZGl0Zm9ybScpLmFkZCgoJGVkaXRGb3JtKTogdm9pZCA9PiB7XG5cdFx0cHJvY2Vzc1dpa2lFZGl0b3Ioe1xuXHRcdFx0JGJvZHksXG5cdFx0XHQkZWRpdEZvcm0sXG5cdFx0fSk7XG5cdH0pO1xuXG5cdG13Lmhvb2soJ3ZlLnNhdmVEaWFsb2cuc3RhdGVDaGFuZ2VkJykuYWRkKCgpOiB2b2lkID0+IHtcblx0XHRwcm9jZXNzVmlzdWFsRWRpdG9yKHtcblx0XHRcdCRib2R5LFxuXHRcdH0pO1xuXHR9KTtcblxuXHQvLyBXaGVuIHN3aXRjaGluZyBiZXR3ZWVuIFZFIGFuZCBOV0UsIHJlLWluaXRpYWxpemF0aW9uIGlzIHJlcXVpcmVkXG5cdG13Lmhvb2soJ3ZlLmFjdGl2YXRpb25Db21wbGV0ZScpLmFkZCgoKSA9PiB7XG5cdFx0aWYgKG13LmNvbmZpZy5nZXQoT1BUSU9OUy5jb25maWdLZXkpKSB7XG5cdFx0XHRtdy5jb25maWcuc2V0KE9QVElPTlMuY29uZmlnS2V5LCBmYWxzZSk7XG5cdFx0fVxuXHR9KTtcbn0pO1xuIiwgImludGVyZmFjZSBNb2RpZnlDaGFuZ2VUYWdQcm9wcyB7XG5cdGNoYW5nZVRhZzogc3RyaW5nO1xuXHRjaGVja2JveDogT08udWkuQ2hlY2tib3hJbnB1dFdpZGdldDtcbn1cblxuY29uc3QgbW9kaWZ5VmlzdWFsRWRpdG9yQ2hhbmdlVGFnID0gKHtjaGFuZ2VUYWcsIGNoZWNrYm94fTogTW9kaWZ5Q2hhbmdlVGFnUHJvcHMpOiB2b2lkID0+IHtcblx0Y2hlY2tib3gub24oJ2NoYW5nZScsICgpOiB2b2lkID0+IHtcblx0XHRjb25zdCBnZW5lcmF0ZUNoYW5nZVRhZ3MgPSAob3JpZ2luQ2hhbmdlVGFnczogc3RyaW5nKTogc3RyaW5nID0+IHtcblx0XHRcdHJldHVybiBjaGVja2JveC5pc1NlbGVjdGVkKClcblx0XHRcdFx0PyBgJHtvcmlnaW5DaGFuZ2VUYWdzfSwke2NoYW5nZVRhZ31gXG5cdFx0XHRcdDogb3JpZ2luQ2hhbmdlVGFncy5yZXBsYWNlKGAsJHtjaGFuZ2VUYWd9YCwgJycpO1xuXHRcdH07XG5cblx0XHRsZXQgY2hhbmdlVGFnczogc3RyaW5nID0gJyc7XG5cdFx0Y2hhbmdlVGFncyA9IGdlbmVyYXRlQ2hhbmdlVGFncyh3aW5kb3cudmUuaW5pdC50YXJnZXQuc2F2ZUZpZWxkcy53cENoYW5nZVRhZ3M/LigpID8/ICcnKTtcblx0XHR3aW5kb3cudmUuaW5pdC50YXJnZXQuc2F2ZUZpZWxkcy53cENoYW5nZVRhZ3MgPSAoKTogc3RyaW5nID0+IHtcblx0XHRcdHJldHVybiBjaGFuZ2VUYWdzO1xuXHRcdH07XG5cdH0pO1xufTtcblxuY29uc3QgbW9kaWZ5V2lraUVkaXRvckNoYW5nZVRhZyA9ICh7XG5cdGNoYW5nZVRhZyxcblx0Y2hlY2tib3gsXG5cdCRlZGl0Rm9ybSxcbn06IE1vZGlmeUNoYW5nZVRhZ1Byb3BzICYgeyRlZGl0Rm9ybTogSlF1ZXJ5fSk6IHZvaWQgPT4ge1xuXHRjaGVja2JveC5vbignY2hhbmdlJywgKCk6IHZvaWQgPT4ge1xuXHRcdGNvbnN0IGdlbmVyYXRlQ2hhbmdlVGFncyA9IChvcmlnaW5DaGFuZ2VUYWdzOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuXHRcdFx0cmV0dXJuIGNoZWNrYm94LmlzU2VsZWN0ZWQoKVxuXHRcdFx0XHQ/IGAke29yaWdpbkNoYW5nZVRhZ3N9LCR7Y2hhbmdlVGFnfWBcblx0XHRcdFx0OiBvcmlnaW5DaGFuZ2VUYWdzLnJlcGxhY2UoYCwke2NoYW5nZVRhZ31gLCAnJyk7XG5cdFx0fTtcblxuXHRcdGxldCBjaGFuZ2VUYWdzOiBzdHJpbmcgPSAnJztcblxuXHRcdGNvbnN0ICR3cENoYW5nZVRhZ3M6IEpRdWVyeSA9ICQoJzxpbnB1dD4nKS5hdHRyKHtcblx0XHRcdGlkOiAnd3BDaGFuZ2VUYWdzJyxcblx0XHRcdG5hbWU6ICd3cENoYW5nZVRhZ3MnLFxuXHRcdFx0dHlwZTogJ2hpZGRlbicsXG5cdFx0XHR2YWx1ZTogJycsXG5cdFx0fSk7XG5cdFx0Y29uc3QgJGJvZHkgPSAkZWRpdEZvcm0ucGFyZW50cygnYm9keScpO1xuXHRcdGNvbnN0ICRvcmlnaW5XcENoYW5nZVRhZ3M6IEpRdWVyeSA9ICRib2R5LmZpbmQoJ2lucHV0W25hbWU9d3BDaGFuZ2VUYWdzXScpO1xuXHRcdGlmICghJG9yaWdpbldwQ2hhbmdlVGFncy5sZW5ndGgpIHtcblx0XHRcdCRib2R5LnByZXBlbmQoJHdwQ2hhbmdlVGFncyk7XG5cdFx0fVxuXHRcdGNoYW5nZVRhZ3MgPSBnZW5lcmF0ZUNoYW5nZVRhZ3MoJG9yaWdpbldwQ2hhbmdlVGFncy52YWwoKT8udG9TdHJpbmcoKSA/PyAnJyk7XG5cdFx0JG9yaWdpbldwQ2hhbmdlVGFncy52YWwoY2hhbmdlVGFncyk7XG5cdH0pO1xufTtcblxuZXhwb3J0IHttb2RpZnlWaXN1YWxFZGl0b3JDaGFuZ2VUYWcsIG1vZGlmeVdpa2lFZGl0b3JDaGFuZ2VUYWd9O1xuIiwgImNvbnN0IGFwcGVuZFRleHRUb1N1bW1hcnkgPSAoe2N1c3RvbVN1bW1hcnksICR3cFN1bW1hcnl9OiB7Y3VzdG9tU3VtbWFyeTogc3RyaW5nOyAkd3BTdW1tYXJ5OiBKUXVlcnl9KTogdm9pZCA9PiB7XG5cdGNvbnN0IG9yaWdpblN1bW1hcnk6IHN0cmluZyA9ICgkd3BTdW1tYXJ5LnZhbCgpIGFzIHN0cmluZyB8IHVuZGVmaW5lZCkgPz8gJyc7XG5cblx0JHdwU3VtbWFyeS52YWwob3JpZ2luU3VtbWFyeS50cmltKCkgPyBgJHtvcmlnaW5TdW1tYXJ5fSAke2N1c3RvbVN1bW1hcnl9YCA6IGN1c3RvbVN1bW1hcnkpLnRyaWdnZXIoJ2NoYW5nZScpO1xufTtcblxuZXhwb3J0IHthcHBlbmRUZXh0VG9TdW1tYXJ5fTtcbiIsICJjb25zdCBMSUNFTlNFUyA9IFtcblx0e1xuXHRcdGxhYmVsOiAnQ0MgQlktU0EgNC4wJyxcblx0XHRkYXRhOiAnaHR0cHM6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL2xpY2Vuc2VzL2J5LXNhLzQuMC8nLFxuXHR9LFxuXHR7XG5cdFx0bGFiZWw6ICdDQyBCWS1TQSAzLjAnLFxuXHRcdGRhdGE6ICdodHRwczovL2NyZWF0aXZlY29tbW9ucy5vcmcvbGljZW5zZXMvYnktc2EvMy4wLycsXG5cdH0sXG5cdHtcblx0XHRsYWJlbDogJ0NDIEJZLVNBIDMuMCBDTicsXG5cdFx0ZGF0YTogJ2h0dHBzOi8vY3JlYXRpdmVjb21tb25zLm9yZy9saWNlbnNlcy9ieS1zYS8zLjAvY24vJyxcblx0fSxcblx0e1xuXHRcdGxhYmVsOiAnQ0MwLTEuMCcsXG5cdFx0ZGF0YTogJ2h0dHBzOi8vY3JlYXRpdmVjb21tb25zLm9yZy9wdWJsaWNkb21haW4vemVyby8xLjAvJyxcblx0fSxcblx0e1xuXHRcdGxhYmVsOiAnS09HTCBUeXBlIEk6IEF0dHJpYnV0aW9uJyxcblx0XHRkYXRhOiAnaHR0cHM6Ly93d3cua29nbC5vci5rci9pbmZvL2xpY2Vuc2VUeXBlMS5kbycsXG5cdH0sXG5dO1xuXG5leHBvcnQge0xJQ0VOU0VTfTtcbiIsICJjb25zdCBnZXRBdHRyaWJ1dGlvbiA9ICh7XG5cdCRib2R5LFxuXHRwYXJlbnRGaWVsZFNldCxcbn06IHtcblx0JGJvZHk6IEpRdWVyeTxIVE1MRWxlbWVudD47XG5cdHBhcmVudEZpZWxkU2V0OiBPTy51aS5GaWVsZHNldExheW91dDtcbn0pID0+IHtcblx0Y29uc3QgZ2VuZXJhdGVJbmZvTWFydGl4ID0gKGZpZWxkU2V0TGF5b3V0OiBPTy51aS5GaWVsZHNldExheW91dCkgPT4ge1xuXHRcdGNvbnN0IGF0dHJpYnV0aW9ucyA9IFtdO1xuXG5cdFx0Y29uc3QgZ2V0U2VsZWN0ZWRWYWx1ZSA9IChkcm9wZG93bjogT08udWkuRHJvcGRvd25XaWRnZXQpOiBzdHJpbmcgfCB1bmRlZmluZWQgPT4ge1xuXHRcdFx0Y29uc3Qgc2VsZWN0ZWRJdGVtOiBPTy51aS5PcHRpb25XaWRnZXQgfCBudWxsID0gZHJvcGRvd25cblx0XHRcdFx0LmdldE1lbnUoKVxuXHRcdFx0XHQuZmluZFNlbGVjdGVkSXRlbSgpIGFzIE9PLnVpLk9wdGlvbldpZGdldCB8IG51bGw7XG5cdFx0XHRyZXR1cm4gc2VsZWN0ZWRJdGVtID8gKHNlbGVjdGVkSXRlbS5nZXREYXRhKCkgYXMgc3RyaW5nKSA6IHVuZGVmaW5lZDtcblx0XHR9O1xuXG5cdFx0Zm9yIChjb25zdCBhdHRyaWJ1dGlvbkZpZWxkc2V0IG9mIGZpZWxkU2V0TGF5b3V0LmdldEl0ZW1zKCkgYXMgT08udWkuRmllbGRzZXRMYXlvdXRbXSkge1xuXHRcdFx0Y29uc3QgYXR0cmlidXRpb246IHtzb3VyY2U/OiBzdHJpbmc7IGxpY2Vuc2U/OiBzdHJpbmd9ID0ge307XG5cblx0XHRcdGZvciAoY29uc3QgZmllbGRMYXlvdXQgb2YgYXR0cmlidXRpb25GaWVsZHNldC5nZXRJdGVtcygpIGFzIE9PLnVpLkZpZWxkTGF5b3V0W10pIHtcblx0XHRcdFx0Y29uc3QgZmllbGQgPSBmaWVsZExheW91dC5nZXRGaWVsZCgpO1xuXG5cdFx0XHRcdGlmIChmaWVsZC5zdXBwb3J0cygnZ2V0VmFsdWUnKSkge1xuXHRcdFx0XHRcdGNvbnN0IHZhbHVlID0gKGZpZWxkIGFzIE9PLnVpLlRleHRJbnB1dFdpZGdldCkuZ2V0VmFsdWUoKTtcblx0XHRcdFx0XHRpZiAodmFsdWUpIHtcblx0XHRcdFx0XHRcdGF0dHJpYnV0aW9uLnNvdXJjZSA9IHZhbHVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBlbHNlIGlmIChmaWVsZC5zdXBwb3J0cygnZ2V0TWVudScpKSB7XG5cdFx0XHRcdFx0Y29uc3QgdmFsdWUgPSBnZXRTZWxlY3RlZFZhbHVlKGZpZWxkIGFzIE9PLnVpLkRyb3Bkb3duV2lkZ2V0KTtcblx0XHRcdFx0XHRpZiAodmFsdWUpIHtcblx0XHRcdFx0XHRcdGF0dHJpYnV0aW9uLmxpY2Vuc2UgPSB2YWx1ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0aWYgKGF0dHJpYnV0aW9uLnNvdXJjZSAmJiBhdHRyaWJ1dGlvbi5saWNlbnNlKSB7XG5cdFx0XHRcdGF0dHJpYnV0aW9uc1thdHRyaWJ1dGlvbnMubGVuZ3RoXSA9IGAke2F0dHJpYnV0aW9uLnNvdXJjZX0sICR7YXR0cmlidXRpb24ubGljZW5zZX1gO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGNvbnNvbGUubG9nKGF0dHJpYnV0aW9ucyk7XG5cblx0XHRyZXR1cm4gYXR0cmlidXRpb25zLmpvaW4oJzsgJyk7XG5cdH07XG5cblx0bGV0IHdwQXR0cmlidXRpb246IHN0cmluZyA9ICcnO1xuXG5cdGNvbnN0ICR3cEF0dHJpYnV0aW9uOiBKUXVlcnkgPSAkKCc8aW5wdXQ+JykuYXR0cih7XG5cdFx0aWQ6ICd3cEF0dHJpYnV0aW9uJyxcblx0XHRuYW1lOiAnd3BBdHRyaWJ1dGlvbicsXG5cdFx0dHlwZTogJ2hpZGRlbicsXG5cdFx0dmFsdWU6ICcnLFxuXHR9KTtcblx0Y29uc3QgJG9yaWdpbndwQXR0cmlidXRpb246IEpRdWVyeSA9ICRib2R5LmZpbmQoJ2lucHV0W25hbWU9d3BBdHRyaWJ1dGlvbl0nKTtcblx0aWYgKCEkb3JpZ2lud3BBdHRyaWJ1dGlvbi5sZW5ndGgpIHtcblx0XHQkYm9keS5wcmVwZW5kKCR3cEF0dHJpYnV0aW9uKTtcblx0fVxuXG5cdHdwQXR0cmlidXRpb24gPSBnZW5lcmF0ZUluZm9NYXJ0aXgocGFyZW50RmllbGRTZXQpO1xuXHQkb3JpZ2lud3BBdHRyaWJ1dGlvbi52YWwod3BBdHRyaWJ1dGlvbik7XG59O1xuXG5leHBvcnQge2dldEF0dHJpYnV0aW9ufTtcbiIsICJpbXBvcnQge2xvY2FsaXplfSBmcm9tICdleHQuZ2FkZ2V0LmkxOG4nO1xuXG5jb25zdCBnZXRJMThuTWVzc2FnZXMgPSAoKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0QWRkOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0FkZCcsXG5cdFx0XHR6aDogJ+WinuWKoCcsXG5cdFx0fSksXG5cdFx0RGVsZXRlOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0RlbGV0ZScsXG5cdFx0XHR6aDogJ+enu+mZpCcsXG5cdFx0fSksXG5cdFx0U291cmNlOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1NvdXJjZScsXG5cdFx0XHQnemgtaGFucyc6ICflhoXlrrnmnaXmupAnLFxuXHRcdFx0J3poLWhhbnQnOiAn5YWn5a655L6G5rqQJyxcblx0XHR9KSxcblx0XHRMaWNlbnNlOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0xpY2Vuc2UnLFxuXHRcdFx0J3poLWhhbnMnOiAn6K645Y+v6K+BJyxcblx0XHRcdCd6aC1oYW50JzogJ+ioseWPr+itiScsXG5cdFx0fSksXG5cdFx0J1NvdXJjZXMgYW5kIExpY2Vuc2VzJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdTb3VyY2VzIGFuZCBMaWNlbnNlcycsXG5cdFx0XHQnemgtaGFucyc6ICflhoXlrrnmnaXmupDlj4rorrjlj6/or4EnLFxuXHRcdFx0J3poLWhhbnQnOiAn5YWn5a655L6G5rqQ5Y+K6Kix5Y+v6K2JJyxcblx0XHR9KSxcblx0XHRUaGlyZFBhcnR5Q29udGVudENvbnRhaW5lZDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdUaGlzIGVkaXRvciBjb250YWlucyB0aGlyZC1wYXJ0eSBjb250ZW50LicsXG5cdFx0XHQnemgtaGFucyc6ICfmraTnvJbovpHlkKvmnInnrKzkuInmlrnlhoXlrrknLFxuXHRcdFx0J3poLWhhbnQnOiAn5q2k57eo6Lyv5ZCr5pyJ56ys5LiJ5pa55YWn5a65Jyxcblx0XHR9KSxcblx0XHRRaXV3ZW5Db250ZW50Q29udGFpbmVkOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1RoaXMgZWRpdG9yIGNvbnRhaW5zIGNvbnRlbnQgZnJvbSBvdGhlciBwYWdlcyBvZiBRaXV3ZW4gQmFpa2UuJyxcblx0XHRcdCd6aC1oYW5zJzogJ+atpOe8lui+keWQq+acieaxgumXu+eZvuenkeWFtuS7lumhtemdoueahOWGheWuuScsXG5cdFx0XHQnemgtaGFudCc6ICfmraTnt6jovK/lkKvmnInmsYLogZ7nmb7np5Hlhbbku5bpoIHpnaLnmoTlhaflrrknLFxuXHRcdH0pLFxuXHR9O1xufTtcblxuY29uc3QgaTE4bk1lc3NhZ2VzID0gZ2V0STE4bk1lc3NhZ2VzKCk7XG5cbmNvbnN0IGdldE1lc3NhZ2U6IEdldE1lc3NhZ2VzPHR5cGVvZiBpMThuTWVzc2FnZXM+ID0gKGtleSkgPT4ge1xuXHRyZXR1cm4gaTE4bk1lc3NhZ2VzW2tleV0gfHwga2V5O1xufTtcblxuZXhwb3J0IHtnZXRNZXNzYWdlfTtcbiIsICJpbXBvcnQge0xJQ0VOU0VTfSBmcm9tICcuLi9jb25zdGFudCc7XG5pbXBvcnQge2dldEF0dHJpYnV0aW9ufSBmcm9tICcuL2dldEF0dHJpYnV0aW9uJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi4vaTE4bic7XG5cbmNvbnN0IGdlbmVyYXRlVGV4dElucHV0V2l0aERyb3Bkb3duID0gKHskYm9keX06IHskYm9keTogSlF1ZXJ5PEhUTUxFbGVtZW50Pn0pID0+IHtcblx0Y29uc3QgZ2V0VGV4dElucHV0ID0gKC4uLm9uQ2hhbmdlczogKCgpID0+IHZvaWQpW10pID0+IHtcblx0XHRjb25zdCB0ZXh0SW5wdXQgPSBuZXcgT08udWkuVGV4dElucHV0V2lkZ2V0KHtcblx0XHRcdHBsYWNlaG9sZGVyOiBnZXRNZXNzYWdlKCdTb3VyY2UnKSxcblx0XHR9KTtcblxuXHRcdGZvciAoY29uc3Qgb25DaGFuZ2Ugb2Ygb25DaGFuZ2VzKSB7XG5cdFx0XHR0ZXh0SW5wdXQub24oJ2NoYW5nZScsIG9uQ2hhbmdlKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGV4dElucHV0O1xuXHR9O1xuXG5cdGNvbnN0IGdldERyb3BEb3duID0gKC4uLm9uU2VsZWN0czogKCgpID0+IHZvaWQpW10pID0+IHtcblx0XHRjb25zdCBkcm9wZG93bjogT08udWkuRHJvcGRvd25XaWRnZXQgPSBuZXcgT08udWkuRHJvcGRvd25XaWRnZXQoe1xuXHRcdFx0bGFiZWw6IGdldE1lc3NhZ2UoJ0xpY2Vuc2UnKSxcblx0XHR9KTtcblxuXHRcdGNvbnN0IG1lbnVPcHRpb25zOiBPTy51aS5NZW51T3B0aW9uV2lkZ2V0W10gPSBbXTtcblxuXHRcdGZvciAoY29uc3Qge2RhdGEsIGxhYmVsfSBvZiBMSUNFTlNFUykge1xuXHRcdFx0bWVudU9wdGlvbnNbbWVudU9wdGlvbnMubGVuZ3RoXSA9IG5ldyBPTy51aS5NZW51T3B0aW9uV2lkZ2V0KHtcblx0XHRcdFx0ZGF0YSxcblx0XHRcdFx0bGFiZWwsXG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHRkcm9wZG93bi5nZXRNZW51KCkuYWRkSXRlbXMobWVudU9wdGlvbnMpO1xuXG5cdFx0Zm9yIChjb25zdCBvblNlbGVjdCBvZiBvblNlbGVjdHMpIHtcblx0XHRcdGRyb3Bkb3duLmdldE1lbnUoKS5vbignc2VsZWN0Jywgb25TZWxlY3QpO1xuXHRcdH1cblxuXHRcdHJldHVybiBkcm9wZG93bjtcblx0fTtcblxuXHRjb25zdCBnZXRBZGRJdGVtQnV0dG9uID0gKC4uLm9uQ2xpY2tzOiAoKCkgPT4gdm9pZClbXSk6IE9PLnVpLkJ1dHRvbklucHV0V2lkZ2V0ID0+IHtcblx0XHRjb25zdCBhZGRJdGVtQnV0dG9uID0gbmV3IE9PLnVpLkJ1dHRvbklucHV0V2lkZ2V0KHtcblx0XHRcdGxhYmVsOiBnZXRNZXNzYWdlKCdBZGQnKSxcblx0XHR9KTtcblxuXHRcdGZvciAoY29uc3Qgb25DbGljayBvZiBvbkNsaWNrcykge1xuXHRcdFx0YWRkSXRlbUJ1dHRvbi5vbignY2xpY2snLCBvbkNsaWNrKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gYWRkSXRlbUJ1dHRvbjtcblx0fTtcblxuXHRjb25zdCBnZXREZWxldGVJdGVtQnV0dG9uID0gKC4uLm9uQ2xpY2tzOiAoKCkgPT4gdm9pZClbXSk6IE9PLnVpLkJ1dHRvbklucHV0V2lkZ2V0ID0+IHtcblx0XHRjb25zdCBkZWxldGVJdGVtQnV0dG9uID0gbmV3IE9PLnVpLkJ1dHRvbklucHV0V2lkZ2V0KHtcblx0XHRcdGxhYmVsOiBnZXRNZXNzYWdlKCdEZWxldGUnKSxcblx0XHR9KTtcblxuXHRcdGZvciAoY29uc3Qgb25DbGljayBvZiBvbkNsaWNrcykge1xuXHRcdFx0ZGVsZXRlSXRlbUJ1dHRvbi5vbignY2xpY2snLCBvbkNsaWNrKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZGVsZXRlSXRlbUJ1dHRvbjtcblx0fTtcblxuXHRjb25zdCBwYXJlbnRGaWVsZFNldCA9IG5ldyBPTy51aS5GaWVsZHNldExheW91dCh7XG5cdFx0bGFiZWw6IGdldE1lc3NhZ2UoJ1NvdXJjZXMgYW5kIExpY2Vuc2VzJyksXG5cdH0pO1xuXG5cdGNvbnN0IGlucHV0T25DaGFuZ2UgPSAoKSA9PiB7XG5cdFx0Z2V0QXR0cmlidXRpb24oeyRib2R5LCBwYXJlbnRGaWVsZFNldH0pO1xuXHR9O1xuXG5cdGNvbnN0IGFkZEl0ZW1PbkNsaWNrID0gKCkgPT4ge1xuXHRcdHBhcmVudEZpZWxkU2V0LmFkZEl0ZW1zKFtnZXRGb2xsb3dVcEZpZWxkc2V0KCldKTtcblx0fTtcblxuXHRjb25zdCBkZWxldGVJdGVtT25DbGljayA9IChpdGVtOiBPTy51aS5GaWVsZHNldExheW91dCkgPT4ge1xuXHRcdHBhcmVudEZpZWxkU2V0LnJlbW92ZUl0ZW1zKFtpdGVtXSk7XG5cdH07XG5cblx0Y29uc3QgaW5pdGlhbEZpZWxkc2V0ID0gbmV3IE9PLnVpLkZpZWxkc2V0TGF5b3V0KCk7XG5cdGluaXRpYWxGaWVsZHNldC5hZGRJdGVtcyhbXG5cdFx0bmV3IE9PLnVpLkZpZWxkTGF5b3V0KGdldFRleHRJbnB1dChpbnB1dE9uQ2hhbmdlKSwge2xhYmVsOiBnZXRNZXNzYWdlKCdTb3VyY2UnKSwgYWxpZ246ICdpbmxpbmUnfSksXG5cdFx0bmV3IE9PLnVpLkZpZWxkTGF5b3V0KGdldERyb3BEb3duKGlucHV0T25DaGFuZ2UpLCB7bGFiZWw6IGdldE1lc3NhZ2UoJ0xpY2Vuc2UnKSwgYWxpZ246ICdpbmxpbmUnfSksXG5cdFx0bmV3IE9PLnVpLkZpZWxkTGF5b3V0KGdldEFkZEl0ZW1CdXR0b24oYWRkSXRlbU9uQ2xpY2ssIGlucHV0T25DaGFuZ2UpLCB7YWxpZ246ICdpbmxpbmUnfSksXG5cdF0pO1xuXG5cdGNvbnN0IGdldEZvbGxvd1VwRmllbGRzZXQgPSAoKSA9PiB7XG5cdFx0Y29uc3QgZm9sbG93VXBGaWVsZHNldCA9IG5ldyBPTy51aS5GaWVsZHNldExheW91dCgpO1xuXHRcdGNvbnN0IGRlbGV0ZVRoaXNJdGVtID0gKCkgPT4ge1xuXHRcdFx0ZGVsZXRlSXRlbU9uQ2xpY2soZm9sbG93VXBGaWVsZHNldCk7XG5cdFx0fTtcblxuXHRcdGZvbGxvd1VwRmllbGRzZXQuYWRkSXRlbXMoW1xuXHRcdFx0bmV3IE9PLnVpLkZpZWxkTGF5b3V0KGdldFRleHRJbnB1dChpbnB1dE9uQ2hhbmdlKSwge2xhYmVsOiBnZXRNZXNzYWdlKCdTb3VyY2UnKSwgYWxpZ246ICdpbmxpbmUnfSksXG5cdFx0XHRuZXcgT08udWkuRmllbGRMYXlvdXQoZ2V0RHJvcERvd24oaW5wdXRPbkNoYW5nZSksIHtsYWJlbDogZ2V0TWVzc2FnZSgnTGljZW5zZScpLCBhbGlnbjogJ2lubGluZSd9KSxcblx0XHRcdG5ldyBPTy51aS5GaWVsZExheW91dChnZXRBZGRJdGVtQnV0dG9uKGFkZEl0ZW1PbkNsaWNrLCBpbnB1dE9uQ2hhbmdlKSwge2FsaWduOiAnaW5saW5lJ30pLFxuXHRcdFx0bmV3IE9PLnVpLkZpZWxkTGF5b3V0KGdldERlbGV0ZUl0ZW1CdXR0b24oZGVsZXRlVGhpc0l0ZW0sIGlucHV0T25DaGFuZ2UpLCB7YWxpZ246ICdpbmxpbmUnfSksXG5cdFx0XSk7XG5cblx0XHRyZXR1cm4gZm9sbG93VXBGaWVsZHNldDtcblx0fTtcblxuXHRwYXJlbnRGaWVsZFNldC5hZGRJdGVtcyhbaW5pdGlhbEZpZWxkc2V0XSk7XG5cblx0cGFyZW50RmllbGRTZXQub24oJ2NoYW5nZScsICgpID0+IHtcblx0XHRnZXRBdHRyaWJ1dGlvbih7JGJvZHksIHBhcmVudEZpZWxkU2V0fSk7XG5cdH0pO1xuXG5cdHJldHVybiBwYXJlbnRGaWVsZFNldDtcbn07XG5cbmV4cG9ydCB7Z2VuZXJhdGVUZXh0SW5wdXRXaXRoRHJvcGRvd259O1xuIiwgImltcG9ydCB7bW9kaWZ5VmlzdWFsRWRpdG9yQ2hhbmdlVGFnLCBtb2RpZnlXaWtpRWRpdG9yQ2hhbmdlVGFnfSBmcm9tICcuL21vZGlmeUNoYW5nZVRhZyc7XG5pbXBvcnQge2FwcGVuZFRleHRUb1N1bW1hcnl9IGZyb20gJy4vY2hhbmdlU3VtbWFyeSc7XG5pbXBvcnQge2dlbmVyYXRlVGV4dElucHV0V2l0aERyb3Bkb3dufSBmcm9tICcuL2dlbmVyYXRlVGV4dElucHV0V2l0aERyb3Bkb3duJztcblxuaW50ZXJmYWNlIENoZWNrYm94TGF5b3V0UHJvcHMge1xuXHRpbnB1dElkPzogc3RyaW5nO1xuXHRsYWJlbDogc3RyaW5nO1xuXHQkYm9keTogSlF1ZXJ5PEhUTUxFbGVtZW50Pjtcblx0Y2hhbmdlVGFnPzogc3RyaW5nO1xufVxuXG5jb25zdCBnZW5lcmF0ZVZpc3VhbEVkaXRvckNoZWNrYm94TGF5b3V0ID0gKHtpbnB1dElkLCBsYWJlbCwgJGJvZHksIGNoYW5nZVRhZ306IENoZWNrYm94TGF5b3V0UHJvcHMpID0+IHtcblx0Y29uc3QgY2hlY2tib3g6IE9PLnVpLkNoZWNrYm94SW5wdXRXaWRnZXQgPSBuZXcgT08udWkuQ2hlY2tib3hJbnB1dFdpZGdldCh7XG5cdFx0c2VsZWN0ZWQ6IGZhbHNlLFxuXHR9KTtcblxuXHRpZiAoaW5wdXRJZCkge1xuXHRcdGNoZWNrYm94LnNldElucHV0SWQoaW5wdXRJZCk7XG5cdH1cblxuXHRpZiAoY2hhbmdlVGFnKSB7XG5cdFx0bW9kaWZ5VmlzdWFsRWRpdG9yQ2hhbmdlVGFnKHtjaGFuZ2VUYWcsIGNoZWNrYm94fSk7XG5cdH1cblxuXHRjb25zdCB0ZXh0SW5wdXRXaXRoRHJvcGRvd24gPSBnZW5lcmF0ZVRleHRJbnB1dFdpdGhEcm9wZG93bih7JGJvZHl9KTtcblx0aWYgKCFjaGVja2JveC5pc1NlbGVjdGVkKCkpIHtcblx0XHR0ZXh0SW5wdXRXaXRoRHJvcGRvd24uJGVsZW1lbnQucHJvcCgnZGlzYWJsZWQnLCB0cnVlKTtcblx0XHR0ZXh0SW5wdXRXaXRoRHJvcGRvd24uJGVsZW1lbnQuY3NzKCdkaXNwbGF5JywgJ25vbmUnKTtcblx0fVxuXG5cdGNoZWNrYm94Lm9uKCdjaGFuZ2UnLCAoc2VsZWN0ZWQpID0+IHtcblx0XHR0ZXh0SW5wdXRXaXRoRHJvcGRvd24uJGVsZW1lbnQucHJvcCgnZGlzYWJsZWQnLCAhc2VsZWN0ZWQpO1xuXHRcdHRleHRJbnB1dFdpdGhEcm9wZG93bi4kZWxlbWVudC5jc3MoJ2Rpc3BsYXknLCBzZWxlY3RlZCA/ICdibG9jaycgOiAnbm9uZScpO1xuXHR9KTtcblxuXHRjb25zdCBjaGVja2JveExheW91dDogT08udWkuRmllbGRMYXlvdXQ8T08udWkuQ2hlY2tib3hJbnB1dFdpZGdldD4gPSBuZXcgT08udWkuRmllbGRMYXlvdXQoY2hlY2tib3gsIHtcblx0XHRhbGlnbjogJ2lubGluZScsXG5cdFx0bGFiZWwsXG5cdH0pO1xuXG5cdGNvbnN0ICRsYXlvdXQgPSAkKCc8ZGl2PicpLmF0dHIoJ2lkJywgJ2VmYS1hcmVhJykuYXBwZW5kKGNoZWNrYm94TGF5b3V0LiRlbGVtZW50LCB0ZXh0SW5wdXRXaXRoRHJvcGRvd24uJGVsZW1lbnQpO1xuXG5cdGNvbnN0IHt0YXJnZXR9ID0gd2luZG93LnZlLmluaXQ7XG5cdGNvbnN0IHtzYXZlRGlhbG9nfSA9IHRhcmdldDtcblxuXHRzYXZlRGlhbG9nLm9uKCdzYXZlJywgKCkgPT4ge1xuXHRcdGlmIChjaGVja2JveC5pc1NlbGVjdGVkKCkpIHtcblx0XHRcdGNvbnN0IGN1c3RvbVN1bW1hcnkgPSBTdHJpbmcoJGJvZHkuZmluZCgnaW5wdXRbbmFtZT13cEF0dHJpYnV0aW9uXScpLnZhbCgpKTtcblx0XHRcdGNvbnN0ICR3cFN1bW1hcnkgPSB0YXJnZXQuc2F2ZURpYWxvZy5lZGl0U3VtbWFyeUlucHV0LiRpbnB1dDtcblx0XHRcdGFwcGVuZFRleHRUb1N1bW1hcnkoe2N1c3RvbVN1bW1hcnksICR3cFN1bW1hcnl9KTtcblx0XHRcdCRsYXlvdXQucmVwbGFjZVdpdGgoJGxheW91dCk7XG5cdFx0fVxuXHR9KTtcblxuXHRyZXR1cm4gJGxheW91dDtcbn07XG5cbmNvbnN0IGdlbmVyYXRlV2lraUVkaXRvckNoZWNrYm94TGF5b3V0ID0gKHtcblx0aW5wdXRJZCxcblx0bGFiZWwsXG5cdGNoYW5nZVRhZyxcblx0JGJvZHksXG5cdCRlZGl0Rm9ybSxcbn06IENoZWNrYm94TGF5b3V0UHJvcHMgJiB7JGVkaXRGb3JtOiBKUXVlcnl9KSA9PiB7XG5cdGNvbnN0IGNoZWNrYm94OiBPTy51aS5DaGVja2JveElucHV0V2lkZ2V0ID0gbmV3IE9PLnVpLkNoZWNrYm94SW5wdXRXaWRnZXQoe1xuXHRcdHNlbGVjdGVkOiBmYWxzZSxcblx0fSk7XG5cblx0aWYgKGlucHV0SWQpIHtcblx0XHRjaGVja2JveC5zZXRJbnB1dElkKGlucHV0SWQpO1xuXHR9XG5cblx0aWYgKGNoYW5nZVRhZykge1xuXHRcdG1vZGlmeVdpa2lFZGl0b3JDaGFuZ2VUYWcoe2NoYW5nZVRhZywgY2hlY2tib3gsICRlZGl0Rm9ybX0pO1xuXHR9XG5cblx0Y29uc3QgdGV4dElucHV0V2l0aERyb3Bkb3duID0gZ2VuZXJhdGVUZXh0SW5wdXRXaXRoRHJvcGRvd24oeyRib2R5fSk7XG5cdGlmICghY2hlY2tib3guaXNTZWxlY3RlZCgpKSB7XG5cdFx0dGV4dElucHV0V2l0aERyb3Bkb3duLiRlbGVtZW50LnByb3AoJ2Rpc2FibGVkJywgdHJ1ZSk7XG5cdFx0dGV4dElucHV0V2l0aERyb3Bkb3duLiRlbGVtZW50LmNzcygnZGlzcGxheScsICdub25lJyk7XG5cdH1cblxuXHRjaGVja2JveC5vbignY2hhbmdlJywgKHNlbGVjdGVkKSA9PiB7XG5cdFx0dGV4dElucHV0V2l0aERyb3Bkb3duLiRlbGVtZW50LnByb3AoJ2Rpc2FibGVkJywgIXNlbGVjdGVkKTtcblx0XHR0ZXh0SW5wdXRXaXRoRHJvcGRvd24uJGVsZW1lbnQuY3NzKCdkaXNwbGF5Jywgc2VsZWN0ZWQgPyAnYmxvY2snIDogJ25vbmUnKTtcblx0fSk7XG5cblx0Y29uc3QgY2hlY2tib3hMYXlvdXQ6IE9PLnVpLkZpZWxkTGF5b3V0PE9PLnVpLkNoZWNrYm94SW5wdXRXaWRnZXQ+ID0gbmV3IE9PLnVpLkZpZWxkTGF5b3V0KGNoZWNrYm94LCB7XG5cdFx0YWxpZ246ICdpbmxpbmUnLFxuXHRcdGxhYmVsLFxuXHR9KTtcblxuXHRjb25zdCAkbGF5b3V0ID0gJCgnPGRpdj4nKS5hdHRyKCdpZCcsICdlZmEtYXJlYScpLmFwcGVuZChjaGVja2JveExheW91dC4kZWxlbWVudCwgdGV4dElucHV0V2l0aERyb3Bkb3duLiRlbGVtZW50KTtcblxuXHQkZWRpdEZvcm0ub24oJ3N1Ym1pdCcsICgpID0+IHtcblx0XHRpZiAoY2hlY2tib3guaXNTZWxlY3RlZCgpKSB7XG5cdFx0XHRjb25zdCBjdXN0b21TdW1tYXJ5ID0gU3RyaW5nKCRib2R5LmZpbmQoJ2lucHV0W25hbWU9d3BBdHRyaWJ1dGlvbl0nKS52YWwoKSk7XG5cdFx0XHRjb25zdCAkd3BTdW1tYXJ5ID0gJGVkaXRGb3JtLmZpbmQoJ2lucHV0W25hbWU9d3BTdW1tYXJ5XScpO1xuXHRcdFx0YXBwZW5kVGV4dFRvU3VtbWFyeSh7Y3VzdG9tU3VtbWFyeSwgJHdwU3VtbWFyeX0pO1xuXHRcdFx0JGxheW91dC5yZXBsYWNlV2l0aCgkbGF5b3V0KTtcblx0XHR9XG5cdH0pO1xuXG5cdHJldHVybiAkbGF5b3V0O1xufTtcbmV4cG9ydCB7Z2VuZXJhdGVWaXN1YWxFZGl0b3JDaGVja2JveExheW91dCwgZ2VuZXJhdGVXaWtpRWRpdG9yQ2hlY2tib3hMYXlvdXR9O1xuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnfi9FZGl0Zm9ybV9BdHRyaWJ1dGlvbi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtnZW5lcmF0ZVZpc3VhbEVkaXRvckNoZWNrYm94TGF5b3V0fSBmcm9tICcuL3V0aWwvZ2VuZXJhdGVDaGVja2JveExheW91dCc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vaTE4bic7XG5cbmNvbnN0IHByb2Nlc3NWaXN1YWxFZGl0b3IgPSAoeyRib2R5fTogeyRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pn0pOiB2b2lkID0+IHtcblx0Ly8gR3VhcmQgYWdhaW5zdCBkb3VibGUgaW5jbHVzaW9uc1xuXHRpZiAobXcuY29uZmlnLmdldChPUFRJT05TLmNvbmZpZ0tleSkpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCAkdGFyZ2V0OiBKUXVlcnkgPSAkYm9keS5maW5kKGAuJHtPUFRJT05TLnRhcmdldENsYXNzVmV9YCk7XG5cdGlmICghJHRhcmdldC5sZW5ndGgpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRtdy5jb25maWcuc2V0KE9QVElPTlMuY29uZmlnS2V5LCB0cnVlKTtcblxuXHRjb25zdCBnZXQkTGF5b3V0ID0gKCkgPT4ge1xuXHRcdHJldHVybiBnZW5lcmF0ZVZpc3VhbEVkaXRvckNoZWNrYm94TGF5b3V0KHtcblx0XHRcdGlucHV0SWQ6IE9QVElPTlMuaW5wdXRJZCxcblx0XHRcdGxhYmVsOiBnZXRNZXNzYWdlKCdUaGlyZFBhcnR5Q29udGVudENvbnRhaW5lZCcpLFxuXHRcdFx0Ly8gY2hhbmdlVGFnOiBPUFRJT05TLmNoYW5nZVRhZyxcblx0XHRcdCRib2R5LFxuXHRcdH0pO1xuXHR9O1xuXG5cdGNvbnN0ICRsYXlvdXQgPSBnZXQkTGF5b3V0KCk7XG5cblx0aWYgKCEkYm9keS5maW5kKGAjJHtPUFRJT05TLmlucHV0SWR9YCkubGVuZ3RoKSB7XG5cdFx0JHRhcmdldC5hcHBlbmQoJGxheW91dCk7XG5cdH1cblxuXHRjb25zdCB7dGFyZ2V0fSA9IHdpbmRvdy52ZS5pbml0O1xuXHRjb25zdCB7c2F2ZURpYWxvZ30gPSB0YXJnZXQ7XG5cblx0c2F2ZURpYWxvZy5vbignc2F2ZScsICgpID0+IHtcblx0XHQkbGF5b3V0LnJlcGxhY2VXaXRoKGdldCRMYXlvdXQoKSk7XG5cdH0pO1xufTtcblxuZXhwb3J0IHtwcm9jZXNzVmlzdWFsRWRpdG9yfTtcbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJ34vRWRpdGZvcm1fQXR0cmlidXRpb24vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7Z2VuZXJhdGVXaWtpRWRpdG9yQ2hlY2tib3hMYXlvdXR9IGZyb20gJy4vdXRpbC9nZW5lcmF0ZUNoZWNrYm94TGF5b3V0JztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9pMThuJztcblxuY29uc3QgcHJvY2Vzc1dpa2lFZGl0b3IgPSAoeyRib2R5LCAkZWRpdEZvcm19OiB7JGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+OyAkZWRpdEZvcm06IEpRdWVyeX0pOiB2b2lkID0+IHtcblx0Ly8gR3VhcmQgYWdhaW5zdCBkb3VibGUgaW5jbHVzaW9uc1xuXHRpZiAobXcuY29uZmlnLmdldChPUFRJT05TLmNvbmZpZ0tleSkpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCAkdGFyZ2V0OiBKUXVlcnkgPSAkZWRpdEZvcm0uZmluZChPUFRJT05TLnRhcmdldFdpa2lFZGl0b3IpO1xuXHRpZiAoISR0YXJnZXQubGVuZ3RoKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0bXcuY29uZmlnLnNldChPUFRJT05TLmNvbmZpZ0tleSwgdHJ1ZSk7XG5cblx0Y29uc3QgZ2V0JExheW91dCA9ICgpID0+IHtcblx0XHRyZXR1cm4gZ2VuZXJhdGVXaWtpRWRpdG9yQ2hlY2tib3hMYXlvdXQoe1xuXHRcdFx0aW5wdXRJZDogT1BUSU9OUy5pbnB1dElkLFxuXHRcdFx0bGFiZWw6IGdldE1lc3NhZ2UoJ1RoaXJkUGFydHlDb250ZW50Q29udGFpbmVkJyksXG5cdFx0XHQvLyBjaGFuZ2VUYWc6IE9QVElPTlMuY2hhbmdlVGFnLFxuXHRcdFx0JGJvZHksXG5cdFx0XHQkZWRpdEZvcm0sXG5cdFx0fSk7XG5cdH07XG5cblx0Y29uc3QgJGxheW91dCA9IGdldCRMYXlvdXQoKTtcblxuXHRpZiAoISRib2R5LmZpbmQoYCMke09QVElPTlMuaW5wdXRJZH1gKS5sZW5ndGgpIHtcblx0XHQkdGFyZ2V0LmFmdGVyKCRsYXlvdXQpO1xuXHR9XG5cblx0JGVkaXRGb3JtLm9uKCdzdWJtaXQnLCAoKSA9PiB7XG5cdFx0JGxheW91dC5yZXBsYWNlV2l0aChnZXQkTGF5b3V0KCkpO1xuXHR9KTtcbn07XG5cbmV4cG9ydCB7cHJvY2Vzc1dpa2lFZGl0b3J9O1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0MsSUFBQUEsWUFBYTtBQUViLElBQUFDLFVBQVc7QUFDWCxJQUFBQyxnQkFBaUI7QUFDakIsSUFBQUMsbUJBQW9COztBQ0pyQixJQUFBQyxxQkFBc0JDLFFBQUEsaUJBQUE7O0FDSXRCLElBQU1DLDhCQUE4QkEsQ0FBQztFQUFDQztFQUFXQztBQUFRLE1BQWtDO0FBQzFGQSxXQUFTQyxHQUFHLFVBQVUsTUFBWTtBQUFBLFFBQUFDLHVCQUFBQyx3QkFBQUM7QUFDakMsVUFBTUMscUJBQXNCQyxzQkFBcUM7QUFDaEUsYUFBT04sU0FBU08sV0FBVyxJQUFBLEdBQUFDLE9BQ3JCRixrQkFBZ0Is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Q0QsQ0FBQztFQUNGO0FBRUEsUUFBTXVJLFVBQVVjLFdBQVc7QUFFM0IsTUFBSSxDQUFDM0ksTUFBTUcsS0FBQSxJQUFBeEIsT0FBaUJmLE9BQU8sQ0FBRSxFQUFFd0MsUUFBUTtBQUM5Q3FJLFlBQVFJLE1BQU1oQixPQUFPO0VBQ3RCO0FBRUF2SSxZQUFVbEIsR0FBRyxVQUFVLE1BQU07QUFDNUJ5SixZQUFRTSxZQUFZUSxXQUFXLENBQUM7RUFDakMsQ0FBQztBQUNGOztBVDVCQSxNQUFBLEdBQUs1SyxtQkFBQStLLFNBQVEsRUFBRUMsS0FBSyxTQUFTQyxTQUFTaEosT0FBc0M7QUFDM0VzSSxLQUFHVyxLQUFLLG1CQUFtQixFQUFFQyxJQUFLNUosZUFBb0I7QUFDckRzSixzQkFBa0I7TUFDakI1STtNQUNBVjtJQUNELENBQUM7RUFDRixDQUFDO0FBRURnSixLQUFHVyxLQUFLLDRCQUE0QixFQUFFQyxJQUFJLE1BQVk7QUFDckRiLHdCQUFvQjtNQUNuQnJJO0lBQ0QsQ0FBQztFQUNGLENBQUM7QUFHRHNJLEtBQUdXLEtBQUssdUJBQXVCLEVBQUVDLElBQUksTUFBTTtBQUMxQyxRQUFJWixHQUFHQyxPQUFPQyxJQUFZN0ssU0FBUyxHQUFHO0FBQ3JDMkssU0FBR0MsT0FBT0csSUFBWS9LLFdBQVcsS0FBSztJQUN2QztFQUNELENBQUM7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogWyJjb25maWdLZXkiLCAiaW5wdXRJZCIsICJ0YXJnZXRDbGFzc1ZlIiwgInRhcmdldFdpa2lFZGl0b3IiLCAiaW1wb3J0X2V4dF9nYWRnZXQyIiwgInJlcXVpcmUiLCAibW9kaWZ5VmlzdWFsRWRpdG9yQ2hhbmdlVGFnIiwgImNoYW5nZVRhZyIsICJjaGVja2JveCIsICJvbiIsICJfd2luZG93JHZlJGluaXQkdGFyZ2UiLCAiX3dpbmRvdyR2ZSRpbml0JHRhcmdlMiIsICJfd2luZG93JHZlJGluaXQkdGFyZ2UzIiwgImdlbmVyYXRlQ2hhbmdlVGFncyIsICJvcmlnaW5DaGFuZ2VUYWdzIiwgImlzU2VsZWN0ZWQiLCAiY29uY2F0IiwgInJlcGxhY2UiLCAiY2hhbmdlVGFncyIsICJ3aW5kb3ciLCAidmUiLCAiaW5pdCIsICJ0YXJnZXQiLCAic2F2ZUZpZWxkcyIsICJ3cENoYW5nZVRhZ3MiLCAiY2FsbCIsICJtb2RpZnlXaWtpRWRpdG9yQ2hhbmdlVGFnIiwgIiRlZGl0Rm9ybSIsICJfJG9yaWdpbldwQ2hhbmdlVGFncyQiLCAiXyRvcmlnaW5XcENoYW5nZVRhZ3MkMiIsICIkd3BDaGFuZ2VUYWdzIiwgIiQiLCAiYXR0ciIsICJpZCIsICJuYW1lIiwgInR5cGUiLCAidmFsdWUiLCAiJGJvZHkiLCAicGFyZW50cyIsICIkb3JpZ2luV3BDaGFuZ2VUYWdzIiwgImZpbmQiLCAibGVuZ3RoIiwgInByZXBlbmQiLCAidmFsIiwgInRvU3RyaW5nIiwgImFwcGVuZFRleHRUb1N1bW1hcnkiLCAiY3VzdG9tU3VtbWFyeSIsICIkd3BTdW1tYXJ5IiwgIl8kd3BTdW1tYXJ5JHZhbCIsICJvcmlnaW5TdW1tYXJ5IiwgInRyaW0iLCAidHJpZ2dlciIsICJMSUNFTlNFUyIsICJsYWJlbCIsICJkYXRhIiwgImdldEF0dHJpYnV0aW9uIiwgInBhcmVudEZpZWxkU2V0IiwgImdlbmVyYXRlSW5mb01hcnRpeCIsICJmaWVsZFNldExheW91dCIsICJhdHRyaWJ1dGlvbnMiLCAiZ2V0U2VsZWN0ZWRWYWx1ZSIsICJkcm9wZG93biIsICJzZWxlY3RlZEl0ZW0iLCAiZ2V0TWVudSIsICJmaW5kU2VsZWN0ZWRJdGVtIiwgImdldERhdGEiLCAiX2l0ZXJhdG9yIiwgIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwgImdldEl0ZW1zIiwgIl9zdGVwIiwgInMiLCAibiIsICJkb25lIiwgImF0dHJpYnV0aW9uRmllbGRzZXQiLCAiYXR0cmlidXRpb24iLCAiX2l0ZXJhdG9yMiIsICJfc3RlcDIiLCAiZmllbGRMYXlvdXQiLCAiZmllbGQiLCAiZ2V0RmllbGQiLCAic3VwcG9ydHMiLCAiZ2V0VmFsdWUiLCAic291cmNlIiwgImxpY2Vuc2UiLCAiZXJyIiwgImUiLCAiZiIsICJjb25zb2xlIiwgImxvZyIsICJqb2luIiwgIndwQXR0cmlidXRpb24iLCAiJHdwQXR0cmlidXRpb24iLCAiJG9yaWdpbndwQXR0cmlidXRpb24iLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAiZ2V0STE4bk1lc3NhZ2VzIiwgIkFkZCIsICJsb2NhbGl6ZSIsICJlbiIsICJ6aCIsICJEZWxldGUiLCAiU291cmNlIiwgIkxpY2Vuc2UiLCAiVGhpcmRQYXJ0eUNvbnRlbnRDb250YWluZWQiLCAiUWl1d2VuQ29udGVudENvbnRhaW5lZCIsICJpMThuTWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAiZ2VuZXJhdGVUZXh0SW5wdXRXaXRoRHJvcGRvd24iLCAiZ2V0VGV4dElucHV0IiwgIm9uQ2hhbmdlcyIsICJ0ZXh0SW5wdXQiLCAiT08iLCAidWkiLCAiVGV4dElucHV0V2lkZ2V0IiwgInBsYWNlaG9sZGVyIiwgIl9pIiwgIl9vbkNoYW5nZXMiLCAib25DaGFuZ2UiLCAiZ2V0RHJvcERvd24iLCAib25TZWxlY3RzIiwgIkRyb3Bkb3duV2lkZ2V0IiwgIm1lbnVPcHRpb25zIiwgIl9pMiIsICJfTElDRU5TRVMiLCAiTWVudU9wdGlvbldpZGdldCIsICJhZGRJdGVtcyIsICJfaTMiLCAiX29uU2VsZWN0cyIsICJvblNlbGVjdCIsICJnZXRBZGRJdGVtQnV0dG9uIiwgIm9uQ2xpY2tzIiwgImFkZEl0ZW1CdXR0b24iLCAiQnV0dG9uSW5wdXRXaWRnZXQiLCAiX2k0IiwgIl9vbkNsaWNrcyIsICJvbkNsaWNrIiwgImdldERlbGV0ZUl0ZW1CdXR0b24iLCAiZGVsZXRlSXRlbUJ1dHRvbiIsICJfaTUiLCAiX29uQ2xpY2tzMiIsICJGaWVsZHNldExheW91dCIsICJpbnB1dE9uQ2hhbmdlIiwgImFkZEl0ZW1PbkNsaWNrIiwgImdldEZvbGxvd1VwRmllbGRzZXQiLCAiZGVsZXRlSXRlbU9uQ2xpY2siLCAiaXRlbSIsICJyZW1vdmVJdGVtcyIsICJpbml0aWFsRmllbGRzZXQiLCAiRmllbGRMYXlvdXQiLCAiYWxpZ24iLCAiZm9sbG93VXBGaWVsZHNldCIsICJkZWxldGVUaGlzSXRlbSIsICJnZW5lcmF0ZVZpc3VhbEVkaXRvckNoZWNrYm94TGF5b3V0IiwgImlucHV0SWQyIiwgIkNoZWNrYm94SW5wdXRXaWRnZXQiLCAic2VsZWN0ZWQiLCAic2V0SW5wdXRJZCIsICJ0ZXh0SW5wdXRXaXRoRHJvcGRvd24iLCAiJGVsZW1lbnQiLCAicHJvcCIsICJjc3MiLCAiY2hlY2tib3hMYXlvdXQiLCAiJGxheW91dCIsICJhcHBlbmQiLCAic2F2ZURpYWxvZyIsICJTdHJpbmciLCAiZWRpdFN1bW1hcnlJbnB1dCIsICIkaW5wdXQiLCAicmVwbGFjZVdpdGgiLCAiZ2VuZXJhdGVXaWtpRWRpdG9yQ2hlY2tib3hMYXlvdXQiLCAicHJvY2Vzc1Zpc3VhbEVkaXRvciIsICJtdyIsICJjb25maWciLCAiZ2V0IiwgIiR0YXJnZXQiLCAic2V0IiwgImdldCRMYXlvdXQiLCAicHJvY2Vzc1dpa2lFZGl0b3IiLCAiYWZ0ZXIiLCAiZ2V0Qm9keSIsICJ0aGVuIiwgImVkaXRGb3JtIiwgImhvb2siLCAiYWRkIl0KfQo=

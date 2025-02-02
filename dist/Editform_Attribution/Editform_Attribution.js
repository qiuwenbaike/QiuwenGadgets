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
//! src/Editform_Attribution/modules/util/changeSummary.ts
var appendTextToSummary = ({
  customSummary,
  $wpSummary
}) => {
  var _$wpSummary$val;
  const originSummary = (_$wpSummary$val = $wpSummary.val()) !== null && _$wpSummary$val !== void 0 ? _$wpSummary$val : "";
  $wpSummary.val(originSummary.trim() ? "".concat(originSummary, " ").concat(customSummary) : customSummary).trigger("change");
};
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
  const getTextInput = (onChange) => {
    const textInput = new OO.ui.TextInputWidget({
      placeholder: getMessage("Source")
    });
    if (onChange) {
      textInput.on("change", () => {
        onChange();
      });
    }
    return textInput;
  };
  const getDropDown = (onSelect) => {
    const dropdown = new OO.ui.DropdownWidget({
      label: getMessage("License")
    });
    const menuOptions = [];
    for (var _i = 0, _LICENSES = LICENSES; _i < _LICENSES.length; _i++) {
      const {
        data,
        label
      } = _LICENSES[_i];
      menuOptions[menuOptions.length] = new OO.ui.MenuOptionWidget({
        data,
        label
      });
    }
    dropdown.getMenu().addItems(menuOptions);
    if (onSelect) {
      dropdown.getMenu().on("select", () => {
        onSelect();
      });
    }
    return dropdown;
  };
  const getAddItemButton = (...onClicks) => {
    const addItemButton = new OO.ui.ButtonInputWidget({
      label: getMessage("Add")
    });
    if (onClicks) {
      var _iterator3 = _createForOfIteratorHelper(onClicks), _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
          const onClick = _step3.value;
          addItemButton.on("click", onClick);
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
    }
    return addItemButton;
  };
  const getDeleteItemButton = (...onClicks) => {
    const deleteItemButton = new OO.ui.ButtonInputWidget({
      label: getMessage("Delete")
    });
    if (onClicks) {
      var _iterator4 = _createForOfIteratorHelper(onClicks), _step4;
      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
          const onClick = _step4.value;
          deleteItemButton.on("click", onClick);
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }
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
  checkbox.on("change", (selected) => {
    textInputWithDropdown.$element.prop("disabled", !selected);
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
  const textInputWithDropdown = generateTextInputWithDropdown({
    $body
  });
  checkbox.on("change", (selected) => {
    textInputWithDropdown.$element.prop("disabled", !selected);
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
  mw.hook("ve.activationComplete").add(() => {
    const {
      target
    } = window.ve.init;
    const {
      saveDialog
    } = target;
    saveDialog.on("save", () => {
      const customSummary = String($body.find("input[name=wpAttribution]").val());
      const $wpSummary = target.saveDialog.editSummaryInput.$input;
      appendTextToSummary({
        customSummary,
        $wpSummary
      });
      $layout.replaceWith(get$Layout());
    });
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
      $body,
      $editForm
      // changeTag: OPTIONS.changeTag,
    });
  };
  const $layout = get$Layout();
  if (!$body.find("#".concat(inputId)).length) {
    $target.after($layout);
  }
  $editForm.on("submit", () => {
    const customSummary = String($body.find("input[name=wpAttribution]").val());
    const $wpSummary = $editForm.find("input[name=wpSummary]");
    appendTextToSummary({
      customSummary,
      $wpSummary
    });
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0VkaXRmb3JtX0F0dHJpYnV0aW9uL29wdGlvbnMuanNvbiIsICJzcmMvRWRpdGZvcm1fQXR0cmlidXRpb24vRWRpdGZvcm1fQXR0cmlidXRpb24udHMiLCAic3JjL0VkaXRmb3JtX0F0dHJpYnV0aW9uL21vZHVsZXMvdXRpbC9jaGFuZ2VTdW1tYXJ5LnRzIiwgInNyYy9FZGl0Zm9ybV9BdHRyaWJ1dGlvbi9tb2R1bGVzL3V0aWwvbW9kaWZ5Q2hhbmdlVGFnLnRzIiwgInNyYy9FZGl0Zm9ybV9BdHRyaWJ1dGlvbi9tb2R1bGVzL2NvbnN0YW50LnRzIiwgInNyYy9FZGl0Zm9ybV9BdHRyaWJ1dGlvbi9tb2R1bGVzL3V0aWwvZ2V0QXR0cmlidXRpb24udHMiLCAic3JjL0VkaXRmb3JtX0F0dHJpYnV0aW9uL21vZHVsZXMvaTE4bi50cyIsICJzcmMvRWRpdGZvcm1fQXR0cmlidXRpb24vbW9kdWxlcy91dGlsL2dlbmVyYXRlVGV4dElucHV0V2l0aERyb3Bkb3duLnRzIiwgInNyYy9FZGl0Zm9ybV9BdHRyaWJ1dGlvbi9tb2R1bGVzL3V0aWwvZ2VuZXJhdGVDaGVja2JveExheW91dC50cyIsICJzcmMvRWRpdGZvcm1fQXR0cmlidXRpb24vbW9kdWxlcy9wcm9jZXNzVmlzdWFsRWRpdG9yLnRzIiwgInNyYy9FZGl0Zm9ybV9BdHRyaWJ1dGlvbi9tb2R1bGVzL3Byb2Nlc3NXaWtpRWRpdG9yLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJ7XG5cdFwiY29uZmlnS2V5XCI6IFwiZ2FkZ2V0LUVkaXRmb3JtX0F0dHJpYnV0aW9uX19Jbml0aWFsaXplZFwiLFxuXHRcImNoYW5nZVRhZ1wiOiBcIkF0dHJpYnV0aW9uX2FkZGVkXCIsXG5cdFwiaW5wdXRJZFwiOiBcImVkaXRmb3JtX2F0dHJpYnV0aW9uXCIsXG5cdFwidGFyZ2V0Q2xhc3NWZVwiOiBcInZlLXVpLW13U2F2ZURpYWxvZy1jaGVja2JveGVzXCIsXG5cdFwidGFyZ2V0V2lraUVkaXRvclwiOiBcIi5lZGl0Q2hlY2tib3hlcyAub28tdWktaG9yaXpvbnRhbExheW91dFwiXG59XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuL29wdGlvbnMuanNvbic7XG5pbXBvcnQge2dldEJvZHl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5pbXBvcnQge3Byb2Nlc3NWaXN1YWxFZGl0b3J9IGZyb20gJy4vbW9kdWxlcy9wcm9jZXNzVmlzdWFsRWRpdG9yJztcbmltcG9ydCB7cHJvY2Vzc1dpa2lFZGl0b3J9IGZyb20gJy4vbW9kdWxlcy9wcm9jZXNzV2lraUVkaXRvcic7XG5cbi8qKlxuICogQGRlc2NyaXB0aW9uIOesrOS4ieaWueadpea6kOeJueauiuWjsOaYjlxuICovXG52b2lkIGdldEJvZHkoKS50aGVuKGZ1bmN0aW9uIGVkaXRGb3JtKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQge1xuXHRtdy5ob29rKCd3aWtpcGFnZS5lZGl0Zm9ybScpLmFkZCgoJGVkaXRGb3JtKTogdm9pZCA9PiB7XG5cdFx0cHJvY2Vzc1dpa2lFZGl0b3Ioe1xuXHRcdFx0JGJvZHksXG5cdFx0XHQkZWRpdEZvcm0sXG5cdFx0fSk7XG5cdH0pO1xuXG5cdG13Lmhvb2soJ3ZlLnNhdmVEaWFsb2cuc3RhdGVDaGFuZ2VkJykuYWRkKCgpOiB2b2lkID0+IHtcblx0XHRwcm9jZXNzVmlzdWFsRWRpdG9yKHtcblx0XHRcdCRib2R5LFxuXHRcdH0pO1xuXHR9KTtcblxuXHQvLyBXaGVuIHN3aXRjaGluZyBiZXR3ZWVuIFZFIGFuZCBOV0UsIHJlLWluaXRpYWxpemF0aW9uIGlzIHJlcXVpcmVkXG5cdG13Lmhvb2soJ3ZlLmFjdGl2YXRpb25Db21wbGV0ZScpLmFkZCgoKSA9PiB7XG5cdFx0aWYgKG13LmNvbmZpZy5nZXQoT1BUSU9OUy5jb25maWdLZXkpKSB7XG5cdFx0XHRtdy5jb25maWcuc2V0KE9QVElPTlMuY29uZmlnS2V5LCBmYWxzZSk7XG5cdFx0fVxuXHR9KTtcbn0pO1xuIiwgImNvbnN0IGFwcGVuZFRleHRUb1N1bW1hcnkgPSAoe2N1c3RvbVN1bW1hcnksICR3cFN1bW1hcnl9OiB7Y3VzdG9tU3VtbWFyeTogc3RyaW5nOyAkd3BTdW1tYXJ5OiBKUXVlcnl9KTogdm9pZCA9PiB7XG5cdGNvbnN0IG9yaWdpblN1bW1hcnk6IHN0cmluZyA9ICgkd3BTdW1tYXJ5LnZhbCgpIGFzIHN0cmluZyB8IHVuZGVmaW5lZCkgPz8gJyc7XG5cblx0JHdwU3VtbWFyeS52YWwob3JpZ2luU3VtbWFyeS50cmltKCkgPyBgJHtvcmlnaW5TdW1tYXJ5fSAke2N1c3RvbVN1bW1hcnl9YCA6IGN1c3RvbVN1bW1hcnkpLnRyaWdnZXIoJ2NoYW5nZScpO1xufTtcblxuZXhwb3J0IHthcHBlbmRUZXh0VG9TdW1tYXJ5fTtcbiIsICJjb25zdCBtb2RpZnlWaXN1YWxFZGl0b3JDaGFuZ2VUYWcgPSAoe1xuXHRjaGFuZ2VUYWcsXG5cdGNoZWNrYm94LFxufToge1xuXHRjaGFuZ2VUYWc6IHN0cmluZztcblx0Y2hlY2tib3g6IE9PLnVpLkNoZWNrYm94SW5wdXRXaWRnZXQ7XG59KTogdm9pZCA9PiB7XG5cdGNoZWNrYm94Lm9uKCdjaGFuZ2UnLCAoKTogdm9pZCA9PiB7XG5cdFx0Y29uc3QgZ2VuZXJhdGVDaGFuZ2VUYWdzID0gKG9yaWdpbkNoYW5nZVRhZ3M6IHN0cmluZyk6IHN0cmluZyA9PiB7XG5cdFx0XHRyZXR1cm4gY2hlY2tib3guaXNTZWxlY3RlZCgpXG5cdFx0XHRcdD8gYCR7b3JpZ2luQ2hhbmdlVGFnc30sJHtjaGFuZ2VUYWd9YFxuXHRcdFx0XHQ6IG9yaWdpbkNoYW5nZVRhZ3MucmVwbGFjZShgLCR7Y2hhbmdlVGFnfWAsICcnKTtcblx0XHR9O1xuXG5cdFx0bGV0IGNoYW5nZVRhZ3M6IHN0cmluZyA9ICcnO1xuXHRcdGNoYW5nZVRhZ3MgPSBnZW5lcmF0ZUNoYW5nZVRhZ3Mod2luZG93LnZlLmluaXQudGFyZ2V0LnNhdmVGaWVsZHMud3BDaGFuZ2VUYWdzPy4oKSA/PyAnJyk7XG5cdFx0d2luZG93LnZlLmluaXQudGFyZ2V0LnNhdmVGaWVsZHMud3BDaGFuZ2VUYWdzID0gKCk6IHN0cmluZyA9PiB7XG5cdFx0XHRyZXR1cm4gY2hhbmdlVGFncztcblx0XHR9O1xuXHR9KTtcbn07XG5cbmNvbnN0IG1vZGlmeVdpa2lFZGl0b3JDaGFuZ2VUYWcgPSAoe1xuXHRjaGFuZ2VUYWcsXG5cdGNoZWNrYm94LFxuXHQkZWRpdEZvcm0sXG59OiB7XG5cdGNoYW5nZVRhZzogc3RyaW5nO1xuXHRjaGVja2JveDogT08udWkuQ2hlY2tib3hJbnB1dFdpZGdldDtcblx0JGVkaXRGb3JtOiBKUXVlcnk7XG59KTogdm9pZCA9PiB7XG5cdGNoZWNrYm94Lm9uKCdjaGFuZ2UnLCAoKTogdm9pZCA9PiB7XG5cdFx0Y29uc3QgZ2VuZXJhdGVDaGFuZ2VUYWdzID0gKG9yaWdpbkNoYW5nZVRhZ3M6IHN0cmluZyk6IHN0cmluZyA9PiB7XG5cdFx0XHRyZXR1cm4gY2hlY2tib3guaXNTZWxlY3RlZCgpXG5cdFx0XHRcdD8gYCR7b3JpZ2luQ2hhbmdlVGFnc30sJHtjaGFuZ2VUYWd9YFxuXHRcdFx0XHQ6IG9yaWdpbkNoYW5nZVRhZ3MucmVwbGFjZShgLCR7Y2hhbmdlVGFnfWAsICcnKTtcblx0XHR9O1xuXG5cdFx0bGV0IGNoYW5nZVRhZ3M6IHN0cmluZyA9ICcnO1xuXG5cdFx0Y29uc3QgJHdwQ2hhbmdlVGFnczogSlF1ZXJ5ID0gJCgnPGlucHV0PicpLmF0dHIoe1xuXHRcdFx0aWQ6ICd3cENoYW5nZVRhZ3MnLFxuXHRcdFx0bmFtZTogJ3dwQ2hhbmdlVGFncycsXG5cdFx0XHR0eXBlOiAnaGlkZGVuJyxcblx0XHRcdHZhbHVlOiAnJyxcblx0XHR9KTtcblx0XHRjb25zdCAkYm9keSA9ICRlZGl0Rm9ybS5wYXJlbnRzKCdib2R5Jyk7XG5cdFx0Y29uc3QgJG9yaWdpbldwQ2hhbmdlVGFnczogSlF1ZXJ5ID0gJGJvZHkuZmluZCgnaW5wdXRbbmFtZT13cENoYW5nZVRhZ3NdJyk7XG5cdFx0aWYgKCEkb3JpZ2luV3BDaGFuZ2VUYWdzLmxlbmd0aCkge1xuXHRcdFx0JGJvZHkucHJlcGVuZCgkd3BDaGFuZ2VUYWdzKTtcblx0XHR9XG5cdFx0Y2hhbmdlVGFncyA9IGdlbmVyYXRlQ2hhbmdlVGFncygkb3JpZ2luV3BDaGFuZ2VUYWdzLnZhbCgpPy50b1N0cmluZygpID8/ICcnKTtcblx0XHQkb3JpZ2luV3BDaGFuZ2VUYWdzLnZhbChjaGFuZ2VUYWdzKTtcblx0fSk7XG59O1xuXG5leHBvcnQge21vZGlmeVZpc3VhbEVkaXRvckNoYW5nZVRhZywgbW9kaWZ5V2lraUVkaXRvckNoYW5nZVRhZ307XG4iLCAiY29uc3QgTElDRU5TRVMgPSBbXG5cdHtcblx0XHRsYWJlbDogJ0NDIEJZLVNBIDQuMCcsXG5cdFx0ZGF0YTogJ2h0dHBzOi8vY3JlYXRpdmVjb21tb25zLm9yZy9saWNlbnNlcy9ieS1zYS80LjAvJyxcblx0fSxcblx0e1xuXHRcdGxhYmVsOiAnQ0MgQlktU0EgMy4wJyxcblx0XHRkYXRhOiAnaHR0cHM6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL2xpY2Vuc2VzL2J5LXNhLzMuMC8nLFxuXHR9LFxuXHR7XG5cdFx0bGFiZWw6ICdDQyBCWS1TQSAzLjAgQ04nLFxuXHRcdGRhdGE6ICdodHRwczovL2NyZWF0aXZlY29tbW9ucy5vcmcvbGljZW5zZXMvYnktc2EvMy4wL2NuLycsXG5cdH0sXG5cdHtcblx0XHRsYWJlbDogJ0NDMC0xLjAnLFxuXHRcdGRhdGE6ICdodHRwczovL2NyZWF0aXZlY29tbW9ucy5vcmcvcHVibGljZG9tYWluL3plcm8vMS4wLycsXG5cdH0sXG5cdHtcblx0XHRsYWJlbDogJ0tPR0wgVHlwZSBJOiBBdHRyaWJ1dGlvbicsXG5cdFx0ZGF0YTogJ2h0dHBzOi8vd3d3LmtvZ2wub3Iua3IvaW5mby9saWNlbnNlVHlwZTEuZG8nLFxuXHR9LFxuXTtcblxuZXhwb3J0IHtMSUNFTlNFU307XG4iLCAiY29uc3QgZ2V0QXR0cmlidXRpb24gPSAoe1xuXHQkYm9keSxcblx0cGFyZW50RmllbGRTZXQsXG59OiB7XG5cdCRib2R5OiBKUXVlcnk8SFRNTEVsZW1lbnQ+O1xuXHRwYXJlbnRGaWVsZFNldDogT08udWkuRmllbGRzZXRMYXlvdXQ7XG59KSA9PiB7XG5cdGNvbnN0IGdlbmVyYXRlSW5mb01hcnRpeCA9IChmaWVsZFNldExheW91dDogT08udWkuRmllbGRzZXRMYXlvdXQpID0+IHtcblx0XHRjb25zdCBhdHRyaWJ1dGlvbnMgPSBbXTtcblxuXHRcdGNvbnN0IGdldFNlbGVjdGVkVmFsdWUgPSAoZHJvcGRvd246IE9PLnVpLkRyb3Bkb3duV2lkZ2V0KTogc3RyaW5nIHwgdW5kZWZpbmVkID0+IHtcblx0XHRcdGNvbnN0IHNlbGVjdGVkSXRlbTogT08udWkuT3B0aW9uV2lkZ2V0IHwgbnVsbCA9IGRyb3Bkb3duXG5cdFx0XHRcdC5nZXRNZW51KClcblx0XHRcdFx0LmZpbmRTZWxlY3RlZEl0ZW0oKSBhcyBPTy51aS5PcHRpb25XaWRnZXQgfCBudWxsO1xuXHRcdFx0cmV0dXJuIHNlbGVjdGVkSXRlbSA/IChzZWxlY3RlZEl0ZW0uZ2V0RGF0YSgpIGFzIHN0cmluZykgOiB1bmRlZmluZWQ7XG5cdFx0fTtcblxuXHRcdGZvciAoY29uc3QgYXR0cmlidXRpb25GaWVsZHNldCBvZiBmaWVsZFNldExheW91dC5nZXRJdGVtcygpIGFzIE9PLnVpLkZpZWxkc2V0TGF5b3V0W10pIHtcblx0XHRcdGNvbnN0IGF0dHJpYnV0aW9uOiB7c291cmNlPzogc3RyaW5nOyBsaWNlbnNlPzogc3RyaW5nfSA9IHt9O1xuXG5cdFx0XHRmb3IgKGNvbnN0IGZpZWxkTGF5b3V0IG9mIGF0dHJpYnV0aW9uRmllbGRzZXQuZ2V0SXRlbXMoKSBhcyBPTy51aS5GaWVsZExheW91dFtdKSB7XG5cdFx0XHRcdGNvbnN0IGZpZWxkID0gZmllbGRMYXlvdXQuZ2V0RmllbGQoKTtcblxuXHRcdFx0XHRpZiAoZmllbGQuc3VwcG9ydHMoJ2dldFZhbHVlJykpIHtcblx0XHRcdFx0XHRjb25zdCB2YWx1ZSA9IChmaWVsZCBhcyBPTy51aS5UZXh0SW5wdXRXaWRnZXQpLmdldFZhbHVlKCk7XG5cdFx0XHRcdFx0aWYgKHZhbHVlKSB7XG5cdFx0XHRcdFx0XHRhdHRyaWJ1dGlvbi5zb3VyY2UgPSB2YWx1ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gZWxzZSBpZiAoZmllbGQuc3VwcG9ydHMoJ2dldE1lbnUnKSkge1xuXHRcdFx0XHRcdGNvbnN0IHZhbHVlID0gZ2V0U2VsZWN0ZWRWYWx1ZShmaWVsZCBhcyBPTy51aS5Ecm9wZG93bldpZGdldCk7XG5cdFx0XHRcdFx0aWYgKHZhbHVlKSB7XG5cdFx0XHRcdFx0XHRhdHRyaWJ1dGlvbi5saWNlbnNlID0gdmFsdWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGlmIChhdHRyaWJ1dGlvbi5zb3VyY2UgJiYgYXR0cmlidXRpb24ubGljZW5zZSkge1xuXHRcdFx0XHRhdHRyaWJ1dGlvbnNbYXR0cmlidXRpb25zLmxlbmd0aF0gPSBgJHthdHRyaWJ1dGlvbi5zb3VyY2V9LCAke2F0dHJpYnV0aW9uLmxpY2Vuc2V9YDtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRjb25zb2xlLmxvZyhhdHRyaWJ1dGlvbnMpO1xuXG5cdFx0cmV0dXJuIGF0dHJpYnV0aW9ucy5qb2luKCc7ICcpO1xuXHR9O1xuXG5cdGxldCB3cEF0dHJpYnV0aW9uOiBzdHJpbmcgPSAnJztcblxuXHRjb25zdCAkd3BBdHRyaWJ1dGlvbjogSlF1ZXJ5ID0gJCgnPGlucHV0PicpLmF0dHIoe1xuXHRcdGlkOiAnd3BBdHRyaWJ1dGlvbicsXG5cdFx0bmFtZTogJ3dwQXR0cmlidXRpb24nLFxuXHRcdHR5cGU6ICdoaWRkZW4nLFxuXHRcdHZhbHVlOiAnJyxcblx0fSk7XG5cdGNvbnN0ICRvcmlnaW53cEF0dHJpYnV0aW9uOiBKUXVlcnkgPSAkYm9keS5maW5kKCdpbnB1dFtuYW1lPXdwQXR0cmlidXRpb25dJyk7XG5cdGlmICghJG9yaWdpbndwQXR0cmlidXRpb24ubGVuZ3RoKSB7XG5cdFx0JGJvZHkucHJlcGVuZCgkd3BBdHRyaWJ1dGlvbik7XG5cdH1cblxuXHR3cEF0dHJpYnV0aW9uID0gZ2VuZXJhdGVJbmZvTWFydGl4KHBhcmVudEZpZWxkU2V0KTtcblx0JG9yaWdpbndwQXR0cmlidXRpb24udmFsKHdwQXR0cmlidXRpb24pO1xufTtcblxuZXhwb3J0IHtnZXRBdHRyaWJ1dGlvbn07XG4iLCAiaW1wb3J0IHtsb2NhbGl6ZX0gZnJvbSAnZXh0LmdhZGdldC5pMThuJztcblxuY29uc3QgZ2V0STE4bk1lc3NhZ2VzID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdEFkZDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdBZGQnLFxuXHRcdFx0emg6ICflop7liqAnLFxuXHRcdH0pLFxuXHRcdERlbGV0ZTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdEZWxldGUnLFxuXHRcdFx0emg6ICfnp7vpmaQnLFxuXHRcdH0pLFxuXHRcdFNvdXJjZTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdTb3VyY2UnLFxuXHRcdFx0J3poLWhhbnMnOiAn5YaF5a655p2l5rqQJyxcblx0XHRcdCd6aC1oYW50JzogJ+WFp+WuueS+hua6kCcsXG5cdFx0fSksXG5cdFx0TGljZW5zZTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdMaWNlbnNlJyxcblx0XHRcdCd6aC1oYW5zJzogJ+iuuOWPr+ivgScsXG5cdFx0XHQnemgtaGFudCc6ICfoqLHlj6/orYknLFxuXHRcdH0pLFxuXHRcdCdTb3VyY2VzIGFuZCBMaWNlbnNlcyc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnU291cmNlcyBhbmQgTGljZW5zZXMnLFxuXHRcdFx0J3poLWhhbnMnOiAn5YaF5a655p2l5rqQ5Y+K6K645Y+v6K+BJyxcblx0XHRcdCd6aC1oYW50JzogJ+WFp+WuueS+hua6kOWPiuioseWPr+itiScsXG5cdFx0fSksXG5cdFx0VGhpcmRQYXJ0eUNvbnRlbnRDb250YWluZWQ6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnVGhpcyBlZGl0b3IgY29udGFpbnMgdGhpcmQtcGFydHkgY29udGVudC4nLFxuXHRcdFx0J3poLWhhbnMnOiAn5q2k57yW6L6R5ZCr5pyJ56ys5LiJ5pa55YaF5a65Jyxcblx0XHRcdCd6aC1oYW50JzogJ+atpOe3qOi8r+WQq+acieesrOS4ieaWueWFp+WuuScsXG5cdFx0fSksXG5cdFx0UWl1d2VuQ29udGVudENvbnRhaW5lZDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdUaGlzIGVkaXRvciBjb250YWlucyBjb250ZW50IGZyb20gb3RoZXIgcGFnZXMgb2YgUWl1d2VuIEJhaWtlLicsXG5cdFx0XHQnemgtaGFucyc6ICfmraTnvJbovpHlkKvmnInmsYLpl7vnmb7np5Hlhbbku5bpobXpnaLnmoTlhoXlrrknLFxuXHRcdFx0J3poLWhhbnQnOiAn5q2k57eo6Lyv5ZCr5pyJ5rGC6IGe55m+56eR5YW25LuW6aCB6Z2i55qE5YWn5a65Jyxcblx0XHR9KSxcblx0fTtcbn07XG5cbmNvbnN0IGkxOG5NZXNzYWdlcyA9IGdldEkxOG5NZXNzYWdlcygpO1xuXG5jb25zdCBnZXRNZXNzYWdlOiBHZXRNZXNzYWdlczx0eXBlb2YgaTE4bk1lc3NhZ2VzPiA9IChrZXkpID0+IHtcblx0cmV0dXJuIGkxOG5NZXNzYWdlc1trZXldIHx8IGtleTtcbn07XG5cbmV4cG9ydCB7Z2V0TWVzc2FnZX07XG4iLCAiaW1wb3J0IHtMSUNFTlNFU30gZnJvbSAnLi4vY29uc3RhbnQnO1xuaW1wb3J0IHtnZXRBdHRyaWJ1dGlvbn0gZnJvbSAnLi9nZXRBdHRyaWJ1dGlvbic7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4uL2kxOG4nO1xuXG5jb25zdCBnZW5lcmF0ZVRleHRJbnB1dFdpdGhEcm9wZG93biA9ICh7JGJvZHl9OiB7JGJvZHk6IEpRdWVyeTxIVE1MRWxlbWVudD59KSA9PiB7XG5cdGNvbnN0IGdldFRleHRJbnB1dCA9IChvbkNoYW5nZT86IChldmVudD86IEV2ZW50KSA9PiB2b2lkKSA9PiB7XG5cdFx0Y29uc3QgdGV4dElucHV0ID0gbmV3IE9PLnVpLlRleHRJbnB1dFdpZGdldCh7XG5cdFx0XHRwbGFjZWhvbGRlcjogZ2V0TWVzc2FnZSgnU291cmNlJyksXG5cdFx0fSk7XG5cblx0XHRpZiAob25DaGFuZ2UpIHtcblx0XHRcdHRleHRJbnB1dC5vbignY2hhbmdlJywgKCkgPT4ge1xuXHRcdFx0XHRvbkNoYW5nZSgpO1xuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRleHRJbnB1dDtcblx0fTtcblxuXHRjb25zdCBnZXREcm9wRG93biA9IChvblNlbGVjdD86IChldmVudD86IEV2ZW50KSA9PiB2b2lkKSA9PiB7XG5cdFx0Y29uc3QgZHJvcGRvd246IE9PLnVpLkRyb3Bkb3duV2lkZ2V0ID0gbmV3IE9PLnVpLkRyb3Bkb3duV2lkZ2V0KHtcblx0XHRcdGxhYmVsOiBnZXRNZXNzYWdlKCdMaWNlbnNlJyksXG5cdFx0fSk7XG5cblx0XHRjb25zdCBtZW51T3B0aW9uczogT08udWkuTWVudU9wdGlvbldpZGdldFtdID0gW107XG5cblx0XHRmb3IgKGNvbnN0IHtkYXRhLCBsYWJlbH0gb2YgTElDRU5TRVMpIHtcblx0XHRcdG1lbnVPcHRpb25zW21lbnVPcHRpb25zLmxlbmd0aF0gPSBuZXcgT08udWkuTWVudU9wdGlvbldpZGdldCh7XG5cdFx0XHRcdGRhdGEsXG5cdFx0XHRcdGxhYmVsLFxuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0ZHJvcGRvd24uZ2V0TWVudSgpLmFkZEl0ZW1zKG1lbnVPcHRpb25zKTtcblxuXHRcdGlmIChvblNlbGVjdCkge1xuXHRcdFx0ZHJvcGRvd24uZ2V0TWVudSgpLm9uKCdzZWxlY3QnLCAoKSA9PiB7XG5cdFx0XHRcdG9uU2VsZWN0KCk7XG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZHJvcGRvd247XG5cdH07XG5cblx0Y29uc3QgZ2V0QWRkSXRlbUJ1dHRvbiA9ICguLi5vbkNsaWNrczogKChldmVudD86IEV2ZW50KSA9PiB2b2lkKVtdKTogT08udWkuQnV0dG9uSW5wdXRXaWRnZXQgPT4ge1xuXHRcdGNvbnN0IGFkZEl0ZW1CdXR0b24gPSBuZXcgT08udWkuQnV0dG9uSW5wdXRXaWRnZXQoe1xuXHRcdFx0bGFiZWw6IGdldE1lc3NhZ2UoJ0FkZCcpLFxuXHRcdH0pO1xuXG5cdFx0aWYgKG9uQ2xpY2tzKSB7XG5cdFx0XHRmb3IgKGNvbnN0IG9uQ2xpY2sgb2Ygb25DbGlja3MpIHtcblx0XHRcdFx0YWRkSXRlbUJ1dHRvbi5vbignY2xpY2snLCBvbkNsaWNrKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gYWRkSXRlbUJ1dHRvbjtcblx0fTtcblxuXHRjb25zdCBnZXREZWxldGVJdGVtQnV0dG9uID0gKC4uLm9uQ2xpY2tzOiAoKGV2ZW50PzogRXZlbnQpID0+IHZvaWQpW10pOiBPTy51aS5CdXR0b25JbnB1dFdpZGdldCA9PiB7XG5cdFx0Y29uc3QgZGVsZXRlSXRlbUJ1dHRvbiA9IG5ldyBPTy51aS5CdXR0b25JbnB1dFdpZGdldCh7XG5cdFx0XHRsYWJlbDogZ2V0TWVzc2FnZSgnRGVsZXRlJyksXG5cdFx0fSk7XG5cblx0XHRpZiAob25DbGlja3MpIHtcblx0XHRcdGZvciAoY29uc3Qgb25DbGljayBvZiBvbkNsaWNrcykge1xuXHRcdFx0XHRkZWxldGVJdGVtQnV0dG9uLm9uKCdjbGljaycsIG9uQ2xpY2spO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBkZWxldGVJdGVtQnV0dG9uO1xuXHR9O1xuXG5cdGNvbnN0IHBhcmVudEZpZWxkU2V0ID0gbmV3IE9PLnVpLkZpZWxkc2V0TGF5b3V0KHtcblx0XHRsYWJlbDogZ2V0TWVzc2FnZSgnU291cmNlcyBhbmQgTGljZW5zZXMnKSxcblx0fSk7XG5cblx0Y29uc3QgaW5wdXRPbkNoYW5nZSA9ICgpID0+IHtcblx0XHRnZXRBdHRyaWJ1dGlvbih7JGJvZHksIHBhcmVudEZpZWxkU2V0fSk7XG5cdH07XG5cblx0Y29uc3QgYWRkSXRlbU9uQ2xpY2sgPSAoKSA9PiB7XG5cdFx0cGFyZW50RmllbGRTZXQuYWRkSXRlbXMoW2dldEZvbGxvd1VwRmllbGRzZXQoKV0pO1xuXHR9O1xuXG5cdGNvbnN0IGRlbGV0ZUl0ZW1PbkNsaWNrID0gKGl0ZW06IE9PLnVpLkZpZWxkc2V0TGF5b3V0KSA9PiB7XG5cdFx0cGFyZW50RmllbGRTZXQucmVtb3ZlSXRlbXMoW2l0ZW1dKTtcblx0fTtcblxuXHRjb25zdCBpbml0aWFsRmllbGRzZXQgPSBuZXcgT08udWkuRmllbGRzZXRMYXlvdXQoKTtcblx0aW5pdGlhbEZpZWxkc2V0LmFkZEl0ZW1zKFtcblx0XHRuZXcgT08udWkuRmllbGRMYXlvdXQoZ2V0VGV4dElucHV0KGlucHV0T25DaGFuZ2UpLCB7bGFiZWw6IGdldE1lc3NhZ2UoJ1NvdXJjZScpLCBhbGlnbjogJ2lubGluZSd9KSxcblx0XHRuZXcgT08udWkuRmllbGRMYXlvdXQoZ2V0RHJvcERvd24oaW5wdXRPbkNoYW5nZSksIHtsYWJlbDogZ2V0TWVzc2FnZSgnTGljZW5zZScpLCBhbGlnbjogJ2lubGluZSd9KSxcblx0XHRuZXcgT08udWkuRmllbGRMYXlvdXQoZ2V0QWRkSXRlbUJ1dHRvbihhZGRJdGVtT25DbGljaywgaW5wdXRPbkNoYW5nZSksIHthbGlnbjogJ2lubGluZSd9KSxcblx0XSk7XG5cblx0Y29uc3QgZ2V0Rm9sbG93VXBGaWVsZHNldCA9ICgpID0+IHtcblx0XHRjb25zdCBmb2xsb3dVcEZpZWxkc2V0ID0gbmV3IE9PLnVpLkZpZWxkc2V0TGF5b3V0KCk7XG5cdFx0Y29uc3QgZGVsZXRlVGhpc0l0ZW0gPSAoKSA9PiB7XG5cdFx0XHRkZWxldGVJdGVtT25DbGljayhmb2xsb3dVcEZpZWxkc2V0KTtcblx0XHR9O1xuXG5cdFx0Zm9sbG93VXBGaWVsZHNldC5hZGRJdGVtcyhbXG5cdFx0XHRuZXcgT08udWkuRmllbGRMYXlvdXQoZ2V0VGV4dElucHV0KGlucHV0T25DaGFuZ2UpLCB7bGFiZWw6IGdldE1lc3NhZ2UoJ1NvdXJjZScpLCBhbGlnbjogJ2lubGluZSd9KSxcblx0XHRcdG5ldyBPTy51aS5GaWVsZExheW91dChnZXREcm9wRG93bihpbnB1dE9uQ2hhbmdlKSwge2xhYmVsOiBnZXRNZXNzYWdlKCdMaWNlbnNlJyksIGFsaWduOiAnaW5saW5lJ30pLFxuXHRcdFx0bmV3IE9PLnVpLkZpZWxkTGF5b3V0KGdldEFkZEl0ZW1CdXR0b24oYWRkSXRlbU9uQ2xpY2ssIGlucHV0T25DaGFuZ2UpLCB7YWxpZ246ICdpbmxpbmUnfSksXG5cdFx0XHRuZXcgT08udWkuRmllbGRMYXlvdXQoZ2V0RGVsZXRlSXRlbUJ1dHRvbihkZWxldGVUaGlzSXRlbSwgaW5wdXRPbkNoYW5nZSksIHthbGlnbjogJ2lubGluZSd9KSxcblx0XHRdKTtcblxuXHRcdHJldHVybiBmb2xsb3dVcEZpZWxkc2V0O1xuXHR9O1xuXG5cdHBhcmVudEZpZWxkU2V0LmFkZEl0ZW1zKFtpbml0aWFsRmllbGRzZXRdKTtcblxuXHRwYXJlbnRGaWVsZFNldC5vbignY2hhbmdlJywgKCkgPT4ge1xuXHRcdGdldEF0dHJpYnV0aW9uKHskYm9keSwgcGFyZW50RmllbGRTZXR9KTtcblx0fSk7XG5cblx0cmV0dXJuIHBhcmVudEZpZWxkU2V0O1xufTtcblxuZXhwb3J0IHtnZW5lcmF0ZVRleHRJbnB1dFdpdGhEcm9wZG93bn07XG4iLCAiaW1wb3J0IHttb2RpZnlWaXN1YWxFZGl0b3JDaGFuZ2VUYWcsIG1vZGlmeVdpa2lFZGl0b3JDaGFuZ2VUYWd9IGZyb20gJy4vbW9kaWZ5Q2hhbmdlVGFnJztcbmltcG9ydCB7Z2VuZXJhdGVUZXh0SW5wdXRXaXRoRHJvcGRvd259IGZyb20gJy4vZ2VuZXJhdGVUZXh0SW5wdXRXaXRoRHJvcGRvd24nO1xuXG5jb25zdCBnZW5lcmF0ZVZpc3VhbEVkaXRvckNoZWNrYm94TGF5b3V0ID0gKHtcblx0aW5wdXRJZCxcblx0bGFiZWwsXG5cdCRib2R5LFxuXHRjaGFuZ2VUYWcsXG59OiB7XG5cdGlucHV0SWQ/OiBzdHJpbmc7XG5cdGxhYmVsOiBzdHJpbmc7XG5cdCRib2R5OiBKUXVlcnk8SFRNTEVsZW1lbnQ+O1xuXHRjaGFuZ2VUYWc/OiBzdHJpbmc7XG59KSA9PiB7XG5cdGNvbnN0IGNoZWNrYm94OiBPTy51aS5DaGVja2JveElucHV0V2lkZ2V0ID0gbmV3IE9PLnVpLkNoZWNrYm94SW5wdXRXaWRnZXQoe1xuXHRcdHNlbGVjdGVkOiBmYWxzZSxcblx0fSk7XG5cblx0aWYgKGlucHV0SWQpIHtcblx0XHRjaGVja2JveC5zZXRJbnB1dElkKGlucHV0SWQpO1xuXHR9XG5cblx0aWYgKGNoYW5nZVRhZykge1xuXHRcdG1vZGlmeVZpc3VhbEVkaXRvckNoYW5nZVRhZyh7Y2hhbmdlVGFnLCBjaGVja2JveH0pO1xuXHR9XG5cblx0Y29uc3QgdGV4dElucHV0V2l0aERyb3Bkb3duID0gZ2VuZXJhdGVUZXh0SW5wdXRXaXRoRHJvcGRvd24oeyRib2R5fSk7XG5cblx0Y2hlY2tib3gub24oJ2NoYW5nZScsIChzZWxlY3RlZCkgPT4ge1xuXHRcdHRleHRJbnB1dFdpdGhEcm9wZG93bi4kZWxlbWVudC5wcm9wKCdkaXNhYmxlZCcsICFzZWxlY3RlZCk7XG5cdH0pO1xuXG5cdGNvbnN0IGNoZWNrYm94TGF5b3V0OiBPTy51aS5GaWVsZExheW91dDxPTy51aS5DaGVja2JveElucHV0V2lkZ2V0PiA9IG5ldyBPTy51aS5GaWVsZExheW91dChjaGVja2JveCwge1xuXHRcdGFsaWduOiAnaW5saW5lJyxcblx0XHRsYWJlbCxcblx0fSk7XG5cblx0Y29uc3QgJGxheW91dCA9ICQoJzxkaXY+JykuYXR0cignaWQnLCAnZWZhLWFyZWEnKS5hcHBlbmQoY2hlY2tib3hMYXlvdXQuJGVsZW1lbnQsIHRleHRJbnB1dFdpdGhEcm9wZG93bi4kZWxlbWVudCk7XG5cblx0cmV0dXJuICRsYXlvdXQ7XG59O1xuXG5jb25zdCBnZW5lcmF0ZVdpa2lFZGl0b3JDaGVja2JveExheW91dCA9ICh7XG5cdGlucHV0SWQsXG5cdGxhYmVsLFxuXHRjaGFuZ2VUYWcsXG5cdCRib2R5LFxuXHQkZWRpdEZvcm0sXG59OiB7XG5cdGlucHV0SWQ/OiBzdHJpbmc7XG5cdGxhYmVsOiBzdHJpbmc7XG5cdGNoYW5nZVRhZz86IHN0cmluZztcblx0JGJvZHk6IEpRdWVyeTtcblx0JGVkaXRGb3JtOiBKUXVlcnk7XG59KSA9PiB7XG5cdGNvbnN0IGNoZWNrYm94OiBPTy51aS5DaGVja2JveElucHV0V2lkZ2V0ID0gbmV3IE9PLnVpLkNoZWNrYm94SW5wdXRXaWRnZXQoe1xuXHRcdHNlbGVjdGVkOiBmYWxzZSxcblx0fSk7XG5cblx0aWYgKGlucHV0SWQpIHtcblx0XHRjaGVja2JveC5zZXRJbnB1dElkKGlucHV0SWQpO1xuXHR9XG5cblx0aWYgKGNoYW5nZVRhZykge1xuXHRcdG1vZGlmeVdpa2lFZGl0b3JDaGFuZ2VUYWcoe2NoYW5nZVRhZywgY2hlY2tib3gsICRlZGl0Rm9ybX0pO1xuXHR9XG5cblx0Y29uc3QgdGV4dElucHV0V2l0aERyb3Bkb3duID0gZ2VuZXJhdGVUZXh0SW5wdXRXaXRoRHJvcGRvd24oeyRib2R5fSk7XG5cblx0Y2hlY2tib3gub24oJ2NoYW5nZScsIChzZWxlY3RlZCkgPT4ge1xuXHRcdHRleHRJbnB1dFdpdGhEcm9wZG93bi4kZWxlbWVudC5wcm9wKCdkaXNhYmxlZCcsICFzZWxlY3RlZCk7XG5cdH0pO1xuXG5cdGNvbnN0IGNoZWNrYm94TGF5b3V0OiBPTy51aS5GaWVsZExheW91dDxPTy51aS5DaGVja2JveElucHV0V2lkZ2V0PiA9IG5ldyBPTy51aS5GaWVsZExheW91dChjaGVja2JveCwge1xuXHRcdGFsaWduOiAnaW5saW5lJyxcblx0XHRsYWJlbCxcblx0fSk7XG5cblx0Y29uc3QgJGxheW91dCA9ICQoJzxkaXY+JykuYXR0cignaWQnLCAnZWZhLWFyZWEnKS5hcHBlbmQoY2hlY2tib3hMYXlvdXQuJGVsZW1lbnQsIHRleHRJbnB1dFdpdGhEcm9wZG93bi4kZWxlbWVudCk7XG5cblx0cmV0dXJuICRsYXlvdXQ7XG59O1xuZXhwb3J0IHtnZW5lcmF0ZVZpc3VhbEVkaXRvckNoZWNrYm94TGF5b3V0LCBnZW5lcmF0ZVdpa2lFZGl0b3JDaGVja2JveExheW91dH07XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICd+L0VkaXRmb3JtX0F0dHJpYnV0aW9uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge2FwcGVuZFRleHRUb1N1bW1hcnl9IGZyb20gJy4vdXRpbC9jaGFuZ2VTdW1tYXJ5JztcbmltcG9ydCB7Z2VuZXJhdGVWaXN1YWxFZGl0b3JDaGVja2JveExheW91dH0gZnJvbSAnLi91dGlsL2dlbmVyYXRlQ2hlY2tib3hMYXlvdXQnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL2kxOG4nO1xuXG5jb25zdCBwcm9jZXNzVmlzdWFsRWRpdG9yID0gKHskYm9keX06IHskYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD59KTogdm9pZCA9PiB7XG5cdC8vIEd1YXJkIGFnYWluc3QgZG91YmxlIGluY2x1c2lvbnNcblx0aWYgKG13LmNvbmZpZy5nZXQoT1BUSU9OUy5jb25maWdLZXkpKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgJHRhcmdldDogSlF1ZXJ5ID0gJGJvZHkuZmluZChgLiR7T1BUSU9OUy50YXJnZXRDbGFzc1ZlfWApO1xuXHRpZiAoISR0YXJnZXQubGVuZ3RoKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0bXcuY29uZmlnLnNldChPUFRJT05TLmNvbmZpZ0tleSwgdHJ1ZSk7XG5cblx0Y29uc3QgZ2V0JExheW91dCA9ICgpID0+IHtcblx0XHRyZXR1cm4gZ2VuZXJhdGVWaXN1YWxFZGl0b3JDaGVja2JveExheW91dCh7XG5cdFx0XHRpbnB1dElkOiBPUFRJT05TLmlucHV0SWQsXG5cdFx0XHRsYWJlbDogZ2V0TWVzc2FnZSgnVGhpcmRQYXJ0eUNvbnRlbnRDb250YWluZWQnKSxcblx0XHRcdC8vIGNoYW5nZVRhZzogT1BUSU9OUy5jaGFuZ2VUYWcsXG5cdFx0XHQkYm9keSxcblx0XHR9KTtcblx0fTtcblxuXHRjb25zdCAkbGF5b3V0ID0gZ2V0JExheW91dCgpO1xuXG5cdGlmICghJGJvZHkuZmluZChgIyR7T1BUSU9OUy5pbnB1dElkfWApLmxlbmd0aCkge1xuXHRcdCR0YXJnZXQuYXBwZW5kKCRsYXlvdXQpO1xuXHR9XG5cblx0bXcuaG9vaygndmUuYWN0aXZhdGlvbkNvbXBsZXRlJykuYWRkKCgpID0+IHtcblx0XHRjb25zdCB7dGFyZ2V0fSA9IHdpbmRvdy52ZS5pbml0O1xuXHRcdGNvbnN0IHtzYXZlRGlhbG9nfSA9IHRhcmdldDtcblxuXHRcdHNhdmVEaWFsb2cub24oJ3NhdmUnLCAoKSA9PiB7XG5cdFx0XHRjb25zdCBjdXN0b21TdW1tYXJ5ID0gU3RyaW5nKCRib2R5LmZpbmQoJ2lucHV0W25hbWU9d3BBdHRyaWJ1dGlvbl0nKS52YWwoKSk7XG5cdFx0XHRjb25zdCAkd3BTdW1tYXJ5ID0gdGFyZ2V0LnNhdmVEaWFsb2cuZWRpdFN1bW1hcnlJbnB1dC4kaW5wdXQ7XG5cdFx0XHRhcHBlbmRUZXh0VG9TdW1tYXJ5KHtjdXN0b21TdW1tYXJ5LCAkd3BTdW1tYXJ5fSk7XG5cdFx0XHQkbGF5b3V0LnJlcGxhY2VXaXRoKGdldCRMYXlvdXQoKSk7XG5cdFx0fSk7XG5cdH0pO1xufTtcblxuZXhwb3J0IHtwcm9jZXNzVmlzdWFsRWRpdG9yfTtcbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJ34vRWRpdGZvcm1fQXR0cmlidXRpb24vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7YXBwZW5kVGV4dFRvU3VtbWFyeX0gZnJvbSAnLi91dGlsL2NoYW5nZVN1bW1hcnknO1xuaW1wb3J0IHtnZW5lcmF0ZVdpa2lFZGl0b3JDaGVja2JveExheW91dH0gZnJvbSAnLi91dGlsL2dlbmVyYXRlQ2hlY2tib3hMYXlvdXQnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL2kxOG4nO1xuXG5jb25zdCBwcm9jZXNzV2lraUVkaXRvciA9ICh7JGJvZHksICRlZGl0Rm9ybX06IHskYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD47ICRlZGl0Rm9ybTogSlF1ZXJ5fSk6IHZvaWQgPT4ge1xuXHQvLyBHdWFyZCBhZ2FpbnN0IGRvdWJsZSBpbmNsdXNpb25zXG5cdGlmIChtdy5jb25maWcuZ2V0KE9QVElPTlMuY29uZmlnS2V5KSkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0ICR0YXJnZXQ6IEpRdWVyeSA9ICRlZGl0Rm9ybS5maW5kKE9QVElPTlMudGFyZ2V0V2lraUVkaXRvcik7XG5cdGlmICghJHRhcmdldC5sZW5ndGgpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRtdy5jb25maWcuc2V0KE9QVElPTlMuY29uZmlnS2V5LCB0cnVlKTtcblxuXHRjb25zdCBnZXQkTGF5b3V0ID0gKCkgPT4ge1xuXHRcdHJldHVybiBnZW5lcmF0ZVdpa2lFZGl0b3JDaGVja2JveExheW91dCh7XG5cdFx0XHRpbnB1dElkOiBPUFRJT05TLmlucHV0SWQsXG5cdFx0XHRsYWJlbDogZ2V0TWVzc2FnZSgnVGhpcmRQYXJ0eUNvbnRlbnRDb250YWluZWQnKSxcblx0XHRcdCRib2R5LFxuXHRcdFx0JGVkaXRGb3JtLFxuXHRcdFx0Ly8gY2hhbmdlVGFnOiBPUFRJT05TLmNoYW5nZVRhZyxcblx0XHR9KTtcblx0fTtcblxuXHRjb25zdCAkbGF5b3V0ID0gZ2V0JExheW91dCgpO1xuXG5cdGlmICghJGJvZHkuZmluZChgIyR7T1BUSU9OUy5pbnB1dElkfWApLmxlbmd0aCkge1xuXHRcdCR0YXJnZXQuYWZ0ZXIoJGxheW91dCk7XG5cdH1cblxuXHQkZWRpdEZvcm0ub24oJ3N1Ym1pdCcsICgpID0+IHtcblx0XHRjb25zdCBjdXN0b21TdW1tYXJ5ID0gU3RyaW5nKCRib2R5LmZpbmQoJ2lucHV0W25hbWU9d3BBdHRyaWJ1dGlvbl0nKS52YWwoKSk7XG5cdFx0Y29uc3QgJHdwU3VtbWFyeSA9ICRlZGl0Rm9ybS5maW5kKCdpbnB1dFtuYW1lPXdwU3VtbWFyeV0nKTtcblx0XHRhcHBlbmRUZXh0VG9TdW1tYXJ5KHtjdXN0b21TdW1tYXJ5LCAkd3BTdW1tYXJ5fSk7XG5cdFx0JGxheW91dC5yZXBsYWNlV2l0aChnZXQkTGF5b3V0KCkpO1xuXHR9KTtcbn07XG5cbmV4cG9ydCB7cHJv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QUFNbEIsT0FBTztFQUN0QjtBQUVBeEgsWUFBVWpCLEdBQUcsVUFBVSxNQUFNO0FBQzVCLFVBQU1YLGdCQUFnQmlLLE9BQU8zSCxNQUFNRyxLQUFLLDJCQUEyQixFQUFFckMsSUFBSSxDQUFDO0FBQzFFLFVBQU1ILGFBQWEyQixVQUFVYSxLQUFLLHVCQUF1QjtBQUN6RDFDLHdCQUFvQjtNQUFDQztNQUFlQztJQUFVLENBQUM7QUFDL0NtSixZQUFRZ0IsWUFBWVAsV0FBVyxDQUFDO0VBQ2pDLENBQUM7QUFDRjs7QVRoQ0EsTUFBQSxHQUFLaEssbUJBQUEwSyxTQUFRLEVBQUVDLEtBQUssU0FBU0MsU0FBU25JLE9BQXNDO0FBQzNFa0gsS0FBR00sS0FBSyxtQkFBbUIsRUFBRUMsSUFBS25JLGVBQW9CO0FBQ3JEeUksc0JBQWtCO01BQ2pCL0g7TUFDQVY7SUFDRCxDQUFDO0VBQ0YsQ0FBQztBQUVENEgsS0FBR00sS0FBSyw0QkFBNEIsRUFBRUMsSUFBSSxNQUFZO0FBQ3JEUix3QkFBb0I7TUFDbkJqSDtJQUNELENBQUM7RUFDRixDQUFDO0FBR0RrSCxLQUFHTSxLQUFLLHVCQUF1QixFQUFFQyxJQUFJLE1BQU07QUFDMUMsUUFBSVAsR0FBR0MsT0FBT0MsSUFBWWpLLFNBQVMsR0FBRztBQUNyQytKLFNBQUdDLE9BQU9HLElBQVluSyxXQUFXLEtBQUs7SUFDdkM7RUFDRCxDQUFDO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFsiY29uZmlnS2V5IiwgImlucHV0SWQiLCAidGFyZ2V0Q2xhc3NWZSIsICJ0YXJnZXRXaWtpRWRpdG9yIiwgImltcG9ydF9leHRfZ2FkZ2V0MiIsICJyZXF1aXJlIiwgImFwcGVuZFRleHRUb1N1bW1hcnkiLCAiY3VzdG9tU3VtbWFyeSIsICIkd3BTdW1tYXJ5IiwgIl8kd3BTdW1tYXJ5JHZhbCIsICJvcmlnaW5TdW1tYXJ5IiwgInZhbCIsICJ0cmltIiwgImNvbmNhdCIsICJ0cmlnZ2VyIiwgIm1vZGlmeVZpc3VhbEVkaXRvckNoYW5nZVRhZyIsICJjaGFuZ2VUYWciLCAiY2hlY2tib3giLCAib24iLCAiX3dpbmRvdyR2ZSRpbml0JHRhcmdlIiwgIl93aW5kb3ckdmUkaW5pdCR0YXJnZTIiLCAiX3dpbmRvdyR2ZSRpbml0JHRhcmdlMyIsICJnZW5lcmF0ZUNoYW5nZVRhZ3MiLCAib3JpZ2luQ2hhbmdlVGFncyIsICJpc1NlbGVjdGVkIiwgInJlcGxhY2UiLCAiY2hhbmdlVGFncyIsICJ3aW5kb3ciLCAidmUiLCAiaW5pdCIsICJ0YXJnZXQiLCAic2F2ZUZpZWxkcyIsICJ3cENoYW5nZVRhZ3MiLCAiY2FsbCIsICJtb2RpZnlXaWtpRWRpdG9yQ2hhbmdlVGFnIiwgIiRlZGl0Rm9ybSIsICJfJG9yaWdpbldwQ2hhbmdlVGFncyQiLCAiXyRvcmlnaW5XcENoYW5nZVRhZ3MkMiIsICIkd3BDaGFuZ2VUYWdzIiwgIiQiLCAiYXR0ciIsICJpZCIsICJuYW1lIiwgInR5cGUiLCAidmFsdWUiLCAiJGJvZHkiLCAicGFyZW50cyIsICIkb3JpZ2luV3BDaGFuZ2VUYWdzIiwgImZpbmQiLCAibGVuZ3RoIiwgInByZXBlbmQiLCAidG9TdHJpbmciLCAiTElDRU5TRVMiLCAibGFiZWwiLCAiZGF0YSIsICJnZXRBdHRyaWJ1dGlvbiIsICJwYXJlbnRGaWVsZFNldCIsICJnZW5lcmF0ZUluZm9NYXJ0aXgiLCAiZmllbGRTZXRMYXlvdXQiLCAiYXR0cmlidXRpb25zIiwgImdldFNlbGVjdGVkVmFsdWUiLCAiZHJvcGRvd24iLCAic2VsZWN0ZWRJdGVtIiwgImdldE1lbnUiLCAiZmluZFNlbGVjdGVkSXRlbSIsICJnZXREYXRhIiwgIl9pdGVyYXRvciIsICJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsICJnZXRJdGVtcyIsICJfc3RlcCIsICJzIiwgIm4iLCAiZG9uZSIsICJhdHRyaWJ1dGlvbkZpZWxkc2V0IiwgImF0dHJpYnV0aW9uIiwgIl9pdGVyYXRvcjIiLCAiX3N0ZXAyIiwgImZpZWxkTGF5b3V0IiwgImZpZWxkIiwgImdldEZpZWxkIiwgInN1cHBvcnRzIiwgImdldFZhbHVlIiwgInNvdXJjZSIsICJsaWNlbnNlIiwgImVyciIsICJlIiwgImYiLCAiY29uc29sZSIsICJsb2ciLCAiam9pbiIsICJ3cEF0dHJpYnV0aW9uIiwgIiR3cEF0dHJpYnV0aW9uIiwgIiRvcmlnaW53cEF0dHJpYnV0aW9uIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgImdldEkxOG5NZXNzYWdlcyIsICJBZGQiLCAibG9jYWxpemUiLCAiZW4iLCAiemgiLCAiRGVsZXRlIiwgIlNvdXJjZSIsICJMaWNlbnNlIiwgIlRoaXJkUGFydHlDb250ZW50Q29udGFpbmVkIiwgIlFpdXdlbkNvbnRlbnRDb250YWluZWQiLCAiaTE4bk1lc3NhZ2VzIiwgImdldE1lc3NhZ2UiLCAia2V5IiwgImdlbmVyYXRlVGV4dElucHV0V2l0aERyb3Bkb3duIiwgImdldFRleHRJbnB1dCIsICJvbkNoYW5nZSIsICJ0ZXh0SW5wdXQiLCAiT08iLCAidWkiLCAiVGV4dElucHV0V2lkZ2V0IiwgInBsYWNlaG9sZGVyIiwgImdldERyb3BEb3duIiwgIm9uU2VsZWN0IiwgIkRyb3Bkb3duV2lkZ2V0IiwgIm1lbnVPcHRpb25zIiwgIl9pIiwgIl9MSUNFTlNFUyIsICJNZW51T3B0aW9uV2lkZ2V0IiwgImFkZEl0ZW1zIiwgImdldEFkZEl0ZW1CdXR0b24iLCAib25DbGlja3MiLCAiYWRkSXRlbUJ1dHRvbiIsICJCdXR0b25JbnB1dFdpZGdldCIsICJfaXRlcmF0b3IzIiwgIl9zdGVwMyIsICJvbkNsaWNrIiwgImdldERlbGV0ZUl0ZW1CdXR0b24iLCAiZGVsZXRlSXRlbUJ1dHRvbiIsICJfaXRlcmF0b3I0IiwgIl9zdGVwNCIsICJGaWVsZHNldExheW91dCIsICJpbnB1dE9uQ2hhbmdlIiwgImFkZEl0ZW1PbkNsaWNrIiwgImdldEZvbGxvd1VwRmllbGRzZXQiLCAiZGVsZXRlSXRlbU9uQ2xpY2siLCAiaXRlbSIsICJyZW1vdmVJdGVtcyIsICJpbml0aWFsRmllbGRzZXQiLCAiRmllbGRMYXlvdXQiLCAiYWxpZ24iLCAiZm9sbG93VXBGaWVsZHNldCIsICJkZWxldGVUaGlzSXRlbSIsICJnZW5lcmF0ZVZpc3VhbEVkaXRvckNoZWNrYm94TGF5b3V0IiwgImlucHV0SWQyIiwgIkNoZWNrYm94SW5wdXRXaWRnZXQiLCAic2VsZWN0ZWQiLCAic2V0SW5wdXRJZCIsICJ0ZXh0SW5wdXRXaXRoRHJvcGRvd24iLCAiJGVsZW1lbnQiLCAicHJvcCIsICJjaGVja2JveExheW91dCIsICIkbGF5b3V0IiwgImFwcGVuZCIsICJnZW5lcmF0ZVdpa2lFZGl0b3JDaGVja2JveExheW91dCIsICJwcm9jZXNzVmlzdWFsRWRpdG9yIiwgIm13IiwgImNvbmZpZyIsICJnZXQiLCAiJHRhcmdldCIsICJzZXQiLCAiZ2V0JExheW91dCIsICJob29rIiwgImFkZCIsICJzYXZlRGlhbG9nIiwgIlN0cmluZyIsICJlZGl0U3VtbWFyeUlucHV0IiwgIiRpbnB1dCIsICJyZXBsYWNlV2l0aCIsICJwcm9jZXNzV2lraUVkaXRvciIsICJhZnRlciIsICJnZXRCb2R5IiwgInRoZW4iLCAiZWRpdEZvcm0iXQp9Cg==

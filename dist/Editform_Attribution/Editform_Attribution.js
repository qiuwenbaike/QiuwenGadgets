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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0VkaXRmb3JtX0F0dHJpYnV0aW9uL29wdGlvbnMuanNvbiIsICJzcmMvRWRpdGZvcm1fQXR0cmlidXRpb24vRWRpdGZvcm1fQXR0cmlidXRpb24udHMiLCAic3JjL0VkaXRmb3JtX0F0dHJpYnV0aW9uL21vZHVsZXMvdXRpbC9tb2RpZnlDaGFuZ2VUYWcudHMiLCAic3JjL0VkaXRmb3JtX0F0dHJpYnV0aW9uL21vZHVsZXMvdXRpbC9jaGFuZ2VTdW1tYXJ5LnRzIiwgInNyYy9FZGl0Zm9ybV9BdHRyaWJ1dGlvbi9tb2R1bGVzL2NvbnN0YW50LnRzIiwgInNyYy9FZGl0Zm9ybV9BdHRyaWJ1dGlvbi9tb2R1bGVzL3V0aWwvZ2V0QXR0cmlidXRpb24udHMiLCAic3JjL0VkaXRmb3JtX0F0dHJpYnV0aW9uL21vZHVsZXMvaTE4bi50cyIsICJzcmMvRWRpdGZvcm1fQXR0cmlidXRpb24vbW9kdWxlcy91dGlsL2dlbmVyYXRlVGV4dElucHV0V2l0aERyb3Bkb3duLnRzIiwgInNyYy9FZGl0Zm9ybV9BdHRyaWJ1dGlvbi9tb2R1bGVzL3V0aWwvZ2VuZXJhdGVDaGVja2JveExheW91dC50cyIsICJzcmMvRWRpdGZvcm1fQXR0cmlidXRpb24vbW9kdWxlcy9wcm9jZXNzVmlzdWFsRWRpdG9yLnRzIiwgInNyYy9FZGl0Zm9ybV9BdHRyaWJ1dGlvbi9tb2R1bGVzL3Byb2Nlc3NXaWtpRWRpdG9yLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJ7XG5cdFwiY29uZmlnS2V5XCI6IFwiZ2FkZ2V0LUVkaXRmb3JtX0F0dHJpYnV0aW9uX19Jbml0aWFsaXplZFwiLFxuXHRcImNoYW5nZVRhZ1wiOiBcIkF0dHJpYnV0aW9uX2FkZGVkXCIsXG5cdFwiaW5wdXRJZFwiOiBcImVkaXRmb3JtX2F0dHJpYnV0aW9uXCIsXG5cdFwidGFyZ2V0Q2xhc3NWZVwiOiBcInZlLXVpLW13U2F2ZURpYWxvZy1jaGVja2JveGVzXCIsXG5cdFwidGFyZ2V0V2lraUVkaXRvclwiOiBcIi5lZGl0Q2hlY2tib3hlcyAub28tdWktaG9yaXpvbnRhbExheW91dFwiXG59XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuL29wdGlvbnMuanNvbic7XG5pbXBvcnQge2dldEJvZHl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5pbXBvcnQge3Byb2Nlc3NWaXN1YWxFZGl0b3J9IGZyb20gJy4vbW9kdWxlcy9wcm9jZXNzVmlzdWFsRWRpdG9yJztcbmltcG9ydCB7cHJvY2Vzc1dpa2lFZGl0b3J9IGZyb20gJy4vbW9kdWxlcy9wcm9jZXNzV2lraUVkaXRvcic7XG5cbi8qKlxuICogQGRlc2NyaXB0aW9uIOesrOS4ieaWueadpea6kOeJueauiuWjsOaYjlxuICovXG52b2lkIGdldEJvZHkoKS50aGVuKGZ1bmN0aW9uIGVkaXRGb3JtKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQge1xuXHRtdy5ob29rKCd3aWtpcGFnZS5lZGl0Zm9ybScpLmFkZCgoJGVkaXRGb3JtKTogdm9pZCA9PiB7XG5cdFx0cHJvY2Vzc1dpa2lFZGl0b3Ioe1xuXHRcdFx0JGJvZHksXG5cdFx0XHQkZWRpdEZvcm0sXG5cdFx0fSk7XG5cdH0pO1xuXG5cdG13Lmhvb2soJ3ZlLnNhdmVEaWFsb2cuc3RhdGVDaGFuZ2VkJykuYWRkKCgpOiB2b2lkID0+IHtcblx0XHRwcm9jZXNzVmlzdWFsRWRpdG9yKHtcblx0XHRcdCRib2R5LFxuXHRcdH0pO1xuXHR9KTtcblxuXHQvLyBXaGVuIHN3aXRjaGluZyBiZXR3ZWVuIFZFIGFuZCBOV0UsIHJlLWluaXRpYWxpemF0aW9uIGlzIHJlcXVpcmVkXG5cdG13Lmhvb2soJ3ZlLmFjdGl2YXRpb25Db21wbGV0ZScpLmFkZCgoKSA9PiB7XG5cdFx0aWYgKG13LmNvbmZpZy5nZXQoT1BUSU9OUy5jb25maWdLZXkpKSB7XG5cdFx0XHRtdy5jb25maWcuc2V0KE9QVElPTlMuY29uZmlnS2V5LCBmYWxzZSk7XG5cdFx0fVxuXHR9KTtcbn0pO1xuIiwgImNvbnN0IG1vZGlmeVZpc3VhbEVkaXRvckNoYW5nZVRhZyA9ICh7XG5cdGNoYW5nZVRhZyxcblx0Y2hlY2tib3gsXG59OiB7XG5cdGNoYW5nZVRhZzogc3RyaW5nO1xuXHRjaGVja2JveDogT08udWkuQ2hlY2tib3hJbnB1dFdpZGdldDtcbn0pOiB2b2lkID0+IHtcblx0Y2hlY2tib3gub24oJ2NoYW5nZScsICgpOiB2b2lkID0+IHtcblx0XHRjb25zdCBnZW5lcmF0ZUNoYW5nZVRhZ3MgPSAob3JpZ2luQ2hhbmdlVGFnczogc3RyaW5nKTogc3RyaW5nID0+IHtcblx0XHRcdHJldHVybiBjaGVja2JveC5pc1NlbGVjdGVkKClcblx0XHRcdFx0PyBgJHtvcmlnaW5DaGFuZ2VUYWdzfSwke2NoYW5nZVRhZ31gXG5cdFx0XHRcdDogb3JpZ2luQ2hhbmdlVGFncy5yZXBsYWNlKGAsJHtjaGFuZ2VUYWd9YCwgJycpO1xuXHRcdH07XG5cblx0XHRsZXQgY2hhbmdlVGFnczogc3RyaW5nID0gJyc7XG5cdFx0Y2hhbmdlVGFncyA9IGdlbmVyYXRlQ2hhbmdlVGFncyh3aW5kb3cudmUuaW5pdC50YXJnZXQuc2F2ZUZpZWxkcy53cENoYW5nZVRhZ3M/LigpID8/ICcnKTtcblx0XHR3aW5kb3cudmUuaW5pdC50YXJnZXQuc2F2ZUZpZWxkcy53cENoYW5nZVRhZ3MgPSAoKTogc3RyaW5nID0+IHtcblx0XHRcdHJldHVybiBjaGFuZ2VUYWdzO1xuXHRcdH07XG5cdH0pO1xufTtcblxuY29uc3QgbW9kaWZ5V2lraUVkaXRvckNoYW5nZVRhZyA9ICh7XG5cdGNoYW5nZVRhZyxcblx0Y2hlY2tib3gsXG5cdCRlZGl0Rm9ybSxcbn06IHtcblx0Y2hhbmdlVGFnOiBzdHJpbmc7XG5cdGNoZWNrYm94OiBPTy51aS5DaGVja2JveElucHV0V2lkZ2V0O1xuXHQkZWRpdEZvcm06IEpRdWVyeTtcbn0pOiB2b2lkID0+IHtcblx0Y2hlY2tib3gub24oJ2NoYW5nZScsICgpOiB2b2lkID0+IHtcblx0XHRjb25zdCBnZW5lcmF0ZUNoYW5nZVRhZ3MgPSAob3JpZ2luQ2hhbmdlVGFnczogc3RyaW5nKTogc3RyaW5nID0+IHtcblx0XHRcdHJldHVybiBjaGVja2JveC5pc1NlbGVjdGVkKClcblx0XHRcdFx0PyBgJHtvcmlnaW5DaGFuZ2VUYWdzfSwke2NoYW5nZVRhZ31gXG5cdFx0XHRcdDogb3JpZ2luQ2hhbmdlVGFncy5yZXBsYWNlKGAsJHtjaGFuZ2VUYWd9YCwgJycpO1xuXHRcdH07XG5cblx0XHRsZXQgY2hhbmdlVGFnczogc3RyaW5nID0gJyc7XG5cblx0XHRjb25zdCAkd3BDaGFuZ2VUYWdzOiBKUXVlcnkgPSAkKCc8aW5wdXQ+JykuYXR0cih7XG5cdFx0XHRpZDogJ3dwQ2hhbmdlVGFncycsXG5cdFx0XHRuYW1lOiAnd3BDaGFuZ2VUYWdzJyxcblx0XHRcdHR5cGU6ICdoaWRkZW4nLFxuXHRcdFx0dmFsdWU6ICcnLFxuXHRcdH0pO1xuXHRcdGNvbnN0ICRib2R5ID0gJGVkaXRGb3JtLnBhcmVudHMoJ2JvZHknKTtcblx0XHRjb25zdCAkb3JpZ2luV3BDaGFuZ2VUYWdzOiBKUXVlcnkgPSAkYm9keS5maW5kKCdpbnB1dFtuYW1lPXdwQ2hhbmdlVGFnc10nKTtcblx0XHRpZiAoISRvcmlnaW5XcENoYW5nZVRhZ3MubGVuZ3RoKSB7XG5cdFx0XHQkYm9keS5wcmVwZW5kKCR3cENoYW5nZVRhZ3MpO1xuXHRcdH1cblx0XHRjaGFuZ2VUYWdzID0gZ2VuZXJhdGVDaGFuZ2VUYWdzKCRvcmlnaW5XcENoYW5nZVRhZ3MudmFsKCk/LnRvU3RyaW5nKCkgPz8gJycpO1xuXHRcdCRvcmlnaW5XcENoYW5nZVRhZ3MudmFsKGNoYW5nZVRhZ3MpO1xuXHR9KTtcbn07XG5cbmV4cG9ydCB7bW9kaWZ5VmlzdWFsRWRpdG9yQ2hhbmdlVGFnLCBtb2RpZnlXaWtpRWRpdG9yQ2hhbmdlVGFnfTtcbiIsICJjb25zdCBhcHBlbmRUZXh0VG9TdW1tYXJ5ID0gKHtjdXN0b21TdW1tYXJ5LCAkd3BTdW1tYXJ5fToge2N1c3RvbVN1bW1hcnk6IHN0cmluZzsgJHdwU3VtbWFyeTogSlF1ZXJ5fSk6IHZvaWQgPT4ge1xuXHRjb25zdCBvcmlnaW5TdW1tYXJ5OiBzdHJpbmcgPSAoJHdwU3VtbWFyeS52YWwoKSBhcyBzdHJpbmcgfCB1bmRlZmluZWQpID8/ICcnO1xuXG5cdCR3cFN1bW1hcnkudmFsKG9yaWdpblN1bW1hcnkudHJpbSgpID8gYCR7b3JpZ2luU3VtbWFyeX0gJHtjdXN0b21TdW1tYXJ5fWAgOiBjdXN0b21TdW1tYXJ5KS50cmlnZ2VyKCdjaGFuZ2UnKTtcbn07XG5cbmV4cG9ydCB7YXBwZW5kVGV4dFRvU3VtbWFyeX07XG4iLCAiY29uc3QgTElDRU5TRVMgPSBbXG5cdHtcblx0XHRsYWJlbDogJ0NDIEJZLVNBIDQuMCcsXG5cdFx0ZGF0YTogJ2h0dHBzOi8vY3JlYXRpdmVjb21tb25zLm9yZy9saWNlbnNlcy9ieS1zYS80LjAvJyxcblx0fSxcblx0e1xuXHRcdGxhYmVsOiAnQ0MgQlktU0EgMy4wJyxcblx0XHRkYXRhOiAnaHR0cHM6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL2xpY2Vuc2VzL2J5LXNhLzMuMC8nLFxuXHR9LFxuXHR7XG5cdFx0bGFiZWw6ICdDQyBCWS1TQSAzLjAgQ04nLFxuXHRcdGRhdGE6ICdodHRwczovL2NyZWF0aXZlY29tbW9ucy5vcmcvbGljZW5zZXMvYnktc2EvMy4wL2NuLycsXG5cdH0sXG5cdHtcblx0XHRsYWJlbDogJ0NDMC0xLjAnLFxuXHRcdGRhdGE6ICdodHRwczovL2NyZWF0aXZlY29tbW9ucy5vcmcvcHVibGljZG9tYWluL3plcm8vMS4wLycsXG5cdH0sXG5cdHtcblx0XHRsYWJlbDogJ0tPR0wgVHlwZSBJOiBBdHRyaWJ1dGlvbicsXG5cdFx0ZGF0YTogJ2h0dHBzOi8vd3d3LmtvZ2wub3Iua3IvaW5mby9saWNlbnNlVHlwZTEuZG8nLFxuXHR9LFxuXTtcblxuZXhwb3J0IHtMSUNFTlNFU307XG4iLCAiY29uc3QgZ2V0QXR0cmlidXRpb24gPSAoe1xuXHQkYm9keSxcblx0cGFyZW50RmllbGRTZXQsXG59OiB7XG5cdCRib2R5OiBKUXVlcnk8SFRNTEVsZW1lbnQ+O1xuXHRwYXJlbnRGaWVsZFNldDogT08udWkuRmllbGRzZXRMYXlvdXQ7XG59KSA9PiB7XG5cdGNvbnN0IGdlbmVyYXRlSW5mb01hcnRpeCA9IChmaWVsZFNldExheW91dDogT08udWkuRmllbGRzZXRMYXlvdXQpID0+IHtcblx0XHRjb25zdCBhdHRyaWJ1dGlvbnMgPSBbXTtcblxuXHRcdGNvbnN0IGdldFNlbGVjdGVkVmFsdWUgPSAoZHJvcGRvd246IE9PLnVpLkRyb3Bkb3duV2lkZ2V0KTogc3RyaW5nIHwgdW5kZWZpbmVkID0+IHtcblx0XHRcdGNvbnN0IHNlbGVjdGVkSXRlbTogT08udWkuT3B0aW9uV2lkZ2V0IHwgbnVsbCA9IGRyb3Bkb3duXG5cdFx0XHRcdC5nZXRNZW51KClcblx0XHRcdFx0LmZpbmRTZWxlY3RlZEl0ZW0oKSBhcyBPTy51aS5PcHRpb25XaWRnZXQgfCBudWxsO1xuXHRcdFx0cmV0dXJuIHNlbGVjdGVkSXRlbSA/IChzZWxlY3RlZEl0ZW0uZ2V0RGF0YSgpIGFzIHN0cmluZykgOiB1bmRlZmluZWQ7XG5cdFx0fTtcblxuXHRcdGZvciAoY29uc3QgYXR0cmlidXRpb25GaWVsZHNldCBvZiBmaWVsZFNldExheW91dC5nZXRJdGVtcygpIGFzIE9PLnVpLkZpZWxkc2V0TGF5b3V0W10pIHtcblx0XHRcdGNvbnN0IGF0dHJpYnV0aW9uOiB7c291cmNlPzogc3RyaW5nOyBsaWNlbnNlPzogc3RyaW5nfSA9IHt9O1xuXG5cdFx0XHRmb3IgKGNvbnN0IGZpZWxkTGF5b3V0IG9mIGF0dHJpYnV0aW9uRmllbGRzZXQuZ2V0SXRlbXMoKSBhcyBPTy51aS5GaWVsZExheW91dFtdKSB7XG5cdFx0XHRcdGNvbnN0IGZpZWxkID0gZmllbGRMYXlvdXQuZ2V0RmllbGQoKTtcblxuXHRcdFx0XHRpZiAoZmllbGQuc3VwcG9ydHMoJ2dldFZhbHVlJykpIHtcblx0XHRcdFx0XHRjb25zdCB2YWx1ZSA9IChmaWVsZCBhcyBPTy51aS5UZXh0SW5wdXRXaWRnZXQpLmdldFZhbHVlKCk7XG5cdFx0XHRcdFx0aWYgKHZhbHVlKSB7XG5cdFx0XHRcdFx0XHRhdHRyaWJ1dGlvbi5zb3VyY2UgPSB2YWx1ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gZWxzZSBpZiAoZmllbGQuc3VwcG9ydHMoJ2dldE1lbnUnKSkge1xuXHRcdFx0XHRcdGNvbnN0IHZhbHVlID0gZ2V0U2VsZWN0ZWRWYWx1ZShmaWVsZCBhcyBPTy51aS5Ecm9wZG93bldpZGdldCk7XG5cdFx0XHRcdFx0aWYgKHZhbHVlKSB7XG5cdFx0XHRcdFx0XHRhdHRyaWJ1dGlvbi5saWNlbnNlID0gdmFsdWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGlmIChhdHRyaWJ1dGlvbi5zb3VyY2UgJiYgYXR0cmlidXRpb24ubGljZW5zZSkge1xuXHRcdFx0XHRhdHRyaWJ1dGlvbnNbYXR0cmlidXRpb25zLmxlbmd0aF0gPSBgJHthdHRyaWJ1dGlvbi5zb3VyY2V9LCAke2F0dHJpYnV0aW9uLmxpY2Vuc2V9YDtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRjb25zb2xlLmxvZyhhdHRyaWJ1dGlvbnMpO1xuXG5cdFx0cmV0dXJuIGF0dHJpYnV0aW9ucy5qb2luKCc7ICcpO1xuXHR9O1xuXG5cdGxldCB3cEF0dHJpYnV0aW9uOiBzdHJpbmcgPSAnJztcblxuXHRjb25zdCAkd3BBdHRyaWJ1dGlvbjogSlF1ZXJ5ID0gJCgnPGlucHV0PicpLmF0dHIoe1xuXHRcdGlkOiAnd3BBdHRyaWJ1dGlvbicsXG5cdFx0bmFtZTogJ3dwQXR0cmlidXRpb24nLFxuXHRcdHR5cGU6ICdoaWRkZW4nLFxuXHRcdHZhbHVlOiAnJyxcblx0fSk7XG5cdGNvbnN0ICRvcmlnaW53cEF0dHJpYnV0aW9uOiBKUXVlcnkgPSAkYm9keS5maW5kKCdpbnB1dFtuYW1lPXdwQXR0cmlidXRpb25dJyk7XG5cdGlmICghJG9yaWdpbndwQXR0cmlidXRpb24ubGVuZ3RoKSB7XG5cdFx0JGJvZHkucHJlcGVuZCgkd3BBdHRyaWJ1dGlvbik7XG5cdH1cblxuXHR3cEF0dHJpYnV0aW9uID0gZ2VuZXJhdGVJbmZvTWFydGl4KHBhcmVudEZpZWxkU2V0KTtcblx0JG9yaWdpbndwQXR0cmlidXRpb24udmFsKHdwQXR0cmlidXRpb24pO1xufTtcblxuZXhwb3J0IHtnZXRBdHRyaWJ1dGlvbn07XG4iLCAiaW1wb3J0IHtsb2NhbGl6ZX0gZnJvbSAnZXh0LmdhZGdldC5pMThuJztcblxuY29uc3QgZ2V0STE4bk1lc3NhZ2VzID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdEFkZDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdBZGQnLFxuXHRcdFx0emg6ICflop7liqAnLFxuXHRcdH0pLFxuXHRcdERlbGV0ZTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdEZWxldGUnLFxuXHRcdFx0emg6ICfnp7vpmaQnLFxuXHRcdH0pLFxuXHRcdFNvdXJjZTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdTb3VyY2UnLFxuXHRcdFx0J3poLWhhbnMnOiAn5YaF5a655p2l5rqQJyxcblx0XHRcdCd6aC1oYW50JzogJ+WFp+WuueS+hua6kCcsXG5cdFx0fSksXG5cdFx0TGljZW5zZTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdMaWNlbnNlJyxcblx0XHRcdCd6aC1oYW5zJzogJ+iuuOWPr+ivgScsXG5cdFx0XHQnemgtaGFudCc6ICfoqLHlj6/orYknLFxuXHRcdH0pLFxuXHRcdCdTb3VyY2VzIGFuZCBMaWNlbnNlcyc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnU291cmNlcyBhbmQgTGljZW5zZXMnLFxuXHRcdFx0J3poLWhhbnMnOiAn5YaF5a655p2l5rqQ5Y+K6K645Y+v6K+BJyxcblx0XHRcdCd6aC1oYW50JzogJ+WFp+WuueS+hua6kOWPiuioseWPr+itiScsXG5cdFx0fSksXG5cdFx0VGhpcmRQYXJ0eUNvbnRlbnRDb250YWluZWQ6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnVGhpcyBlZGl0b3IgY29udGFpbnMgdGhpcmQtcGFydHkgY29udGVudC4nLFxuXHRcdFx0J3poLWhhbnMnOiAn5q2k57yW6L6R5ZCr5pyJ56ys5LiJ5pa55YaF5a65Jyxcblx0XHRcdCd6aC1oYW50JzogJ+atpOe3qOi8r+WQq+acieesrOS4ieaWueWFp+WuuScsXG5cdFx0fSksXG5cdFx0UWl1d2VuQ29udGVudENvbnRhaW5lZDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdUaGlzIGVkaXRvciBjb250YWlucyBjb250ZW50IGZyb20gb3RoZXIgcGFnZXMgb2YgUWl1d2VuIEJhaWtlLicsXG5cdFx0XHQnemgtaGFucyc6ICfmraTnvJbovpHlkKvmnInmsYLpl7vnmb7np5Hlhbbku5bpobXpnaLnmoTlhoXlrrknLFxuXHRcdFx0J3poLWhhbnQnOiAn5q2k57eo6Lyv5ZCr5pyJ5rGC6IGe55m+56eR5YW25LuW6aCB6Z2i55qE5YWn5a65Jyxcblx0XHR9KSxcblx0fTtcbn07XG5cbmNvbnN0IGkxOG5NZXNzYWdlcyA9IGdldEkxOG5NZXNzYWdlcygpO1xuXG5jb25zdCBnZXRNZXNzYWdlOiBHZXRNZXNzYWdlczx0eXBlb2YgaTE4bk1lc3NhZ2VzPiA9IChrZXkpID0+IHtcblx0cmV0dXJuIGkxOG5NZXNzYWdlc1trZXldIHx8IGtleTtcbn07XG5cbmV4cG9ydCB7Z2V0TWVzc2FnZX07XG4iLCAiaW1wb3J0IHtMSUNFTlNFU30gZnJvbSAnLi4vY29uc3RhbnQnO1xuaW1wb3J0IHtnZXRBdHRyaWJ1dGlvbn0gZnJvbSAnLi9nZXRBdHRyaWJ1dGlvbic7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4uL2kxOG4nO1xuXG5jb25zdCBnZW5lcmF0ZVRleHRJbnB1dFdpdGhEcm9wZG93biA9ICh7JGJvZHl9OiB7JGJvZHk6IEpRdWVyeTxIVE1MRWxlbWVudD59KSA9PiB7XG5cdGNvbnN0IGdldFRleHRJbnB1dCA9IChvbkNoYW5nZT86IChldmVudD86IEV2ZW50KSA9PiB2b2lkKSA9PiB7XG5cdFx0Y29uc3QgdGV4dElucHV0ID0gbmV3IE9PLnVpLlRleHRJbnB1dFdpZGdldCh7XG5cdFx0XHRwbGFjZWhvbGRlcjogZ2V0TWVzc2FnZSgnU291cmNlJyksXG5cdFx0fSk7XG5cblx0XHRpZiAob25DaGFuZ2UpIHtcblx0XHRcdHRleHRJbnB1dC5vbignY2hhbmdlJywgKCkgPT4ge1xuXHRcdFx0XHRvbkNoYW5nZSgpO1xuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRleHRJbnB1dDtcblx0fTtcblxuXHRjb25zdCBnZXREcm9wRG93biA9IChvblNlbGVjdD86IChldmVudD86IEV2ZW50KSA9PiB2b2lkKSA9PiB7XG5cdFx0Y29uc3QgZHJvcGRvd246IE9PLnVpLkRyb3Bkb3duV2lkZ2V0ID0gbmV3IE9PLnVpLkRyb3Bkb3duV2lkZ2V0KHtcblx0XHRcdGxhYmVsOiBnZXRNZXNzYWdlKCdMaWNlbnNlJyksXG5cdFx0fSk7XG5cblx0XHRjb25zdCBtZW51T3B0aW9uczogT08udWkuTWVudU9wdGlvbldpZGdldFtdID0gW107XG5cblx0XHRmb3IgKGNvbnN0IHtkYXRhLCBsYWJlbH0gb2YgTElDRU5TRVMpIHtcblx0XHRcdG1lbnVPcHRpb25zW21lbnVPcHRpb25zLmxlbmd0aF0gPSBuZXcgT08udWkuTWVudU9wdGlvbldpZGdldCh7XG5cdFx0XHRcdGRhdGEsXG5cdFx0XHRcdGxhYmVsLFxuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0ZHJvcGRvd24uZ2V0TWVudSgpLmFkZEl0ZW1zKG1lbnVPcHRpb25zKTtcblxuXHRcdGlmIChvblNlbGVjdCkge1xuXHRcdFx0ZHJvcGRvd24uZ2V0TWVudSgpLm9uKCdzZWxlY3QnLCAoKSA9PiB7XG5cdFx0XHRcdG9uU2VsZWN0KCk7XG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZHJvcGRvd247XG5cdH07XG5cblx0Y29uc3QgZ2V0QWRkSXRlbUJ1dHRvbiA9ICguLi5vbkNsaWNrczogKChldmVudD86IEV2ZW50KSA9PiB2b2lkKVtdKTogT08udWkuQnV0dG9uSW5wdXRXaWRnZXQgPT4ge1xuXHRcdGNvbnN0IGFkZEl0ZW1CdXR0b24gPSBuZXcgT08udWkuQnV0dG9uSW5wdXRXaWRnZXQoe1xuXHRcdFx0bGFiZWw6IGdldE1lc3NhZ2UoJ0FkZCcpLFxuXHRcdH0pO1xuXG5cdFx0aWYgKG9uQ2xpY2tzKSB7XG5cdFx0XHRmb3IgKGNvbnN0IG9uQ2xpY2sgb2Ygb25DbGlja3MpIHtcblx0XHRcdFx0YWRkSXRlbUJ1dHRvbi5vbignY2xpY2snLCBvbkNsaWNrKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gYWRkSXRlbUJ1dHRvbjtcblx0fTtcblxuXHRjb25zdCBnZXREZWxldGVJdGVtQnV0dG9uID0gKC4uLm9uQ2xpY2tzOiAoKGV2ZW50PzogRXZlbnQpID0+IHZvaWQpW10pOiBPTy51aS5CdXR0b25JbnB1dFdpZGdldCA9PiB7XG5cdFx0Y29uc3QgZGVsZXRlSXRlbUJ1dHRvbiA9IG5ldyBPTy51aS5CdXR0b25JbnB1dFdpZGdldCh7XG5cdFx0XHRsYWJlbDogZ2V0TWVzc2FnZSgnRGVsZXRlJyksXG5cdFx0fSk7XG5cblx0XHRpZiAob25DbGlja3MpIHtcblx0XHRcdGZvciAoY29uc3Qgb25DbGljayBvZiBvbkNsaWNrcykge1xuXHRcdFx0XHRkZWxldGVJdGVtQnV0dG9uLm9uKCdjbGljaycsIG9uQ2xpY2spO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBkZWxldGVJdGVtQnV0dG9uO1xuXHR9O1xuXG5cdGNvbnN0IHBhcmVudEZpZWxkU2V0ID0gbmV3IE9PLnVpLkZpZWxkc2V0TGF5b3V0KHtcblx0XHRsYWJlbDogZ2V0TWVzc2FnZSgnU291cmNlcyBhbmQgTGljZW5zZXMnKSxcblx0fSk7XG5cblx0Y29uc3QgaW5wdXRPbkNoYW5nZSA9ICgpID0+IHtcblx0XHRnZXRBdHRyaWJ1dGlvbih7JGJvZHksIHBhcmVudEZpZWxkU2V0fSk7XG5cdH07XG5cblx0Y29uc3QgYWRkSXRlbU9uQ2xpY2sgPSAoKSA9PiB7XG5cdFx0cGFyZW50RmllbGRTZXQuYWRkSXRlbXMoW2dldEZvbGxvd1VwRmllbGRzZXQoKV0pO1xuXHR9O1xuXG5cdGNvbnN0IGRlbGV0ZUl0ZW1PbkNsaWNrID0gKGl0ZW06IE9PLnVpLkZpZWxkc2V0TGF5b3V0KSA9PiB7XG5cdFx0cGFyZW50RmllbGRTZXQucmVtb3ZlSXRlbXMoW2l0ZW1dKTtcblx0fTtcblxuXHRjb25zdCBpbml0aWFsRmllbGRzZXQgPSBuZXcgT08udWkuRmllbGRzZXRMYXlvdXQoKTtcblx0aW5pdGlhbEZpZWxkc2V0LmFkZEl0ZW1zKFtcblx0XHRuZXcgT08udWkuRmllbGRMYXlvdXQoZ2V0VGV4dElucHV0KGlucHV0T25DaGFuZ2UpLCB7bGFiZWw6IGdldE1lc3NhZ2UoJ1NvdXJjZScpLCBhbGlnbjogJ2lubGluZSd9KSxcblx0XHRuZXcgT08udWkuRmllbGRMYXlvdXQoZ2V0RHJvcERvd24oaW5wdXRPbkNoYW5nZSksIHtsYWJlbDogZ2V0TWVzc2FnZSgnTGljZW5zZScpLCBhbGlnbjogJ2lubGluZSd9KSxcblx0XHRuZXcgT08udWkuRmllbGRMYXlvdXQoZ2V0QWRkSXRlbUJ1dHRvbihhZGRJdGVtT25DbGljaywgaW5wdXRPbkNoYW5nZSksIHthbGlnbjogJ2lubGluZSd9KSxcblx0XSk7XG5cblx0Y29uc3QgZ2V0Rm9sbG93VXBGaWVsZHNldCA9ICgpID0+IHtcblx0XHRjb25zdCBmb2xsb3dVcEZpZWxkc2V0ID0gbmV3IE9PLnVpLkZpZWxkc2V0TGF5b3V0KCk7XG5cdFx0Y29uc3QgZGVsZXRlVGhpc0l0ZW0gPSAoKSA9PiB7XG5cdFx0XHRkZWxldGVJdGVtT25DbGljayhmb2xsb3dVcEZpZWxkc2V0KTtcblx0XHR9O1xuXG5cdFx0Zm9sbG93VXBGaWVsZHNldC5hZGRJdGVtcyhbXG5cdFx0XHRuZXcgT08udWkuRmllbGRMYXlvdXQoZ2V0VGV4dElucHV0KGlucHV0T25DaGFuZ2UpLCB7bGFiZWw6IGdldE1lc3NhZ2UoJ1NvdXJjZScpLCBhbGlnbjogJ2lubGluZSd9KSxcblx0XHRcdG5ldyBPTy51aS5GaWVsZExheW91dChnZXREcm9wRG93bihpbnB1dE9uQ2hhbmdlKSwge2xhYmVsOiBnZXRNZXNzYWdlKCdMaWNlbnNlJyksIGFsaWduOiAnaW5saW5lJ30pLFxuXHRcdFx0bmV3IE9PLnVpLkZpZWxkTGF5b3V0KGdldEFkZEl0ZW1CdXR0b24oYWRkSXRlbU9uQ2xpY2ssIGlucHV0T25DaGFuZ2UpLCB7YWxpZ246ICdpbmxpbmUnfSksXG5cdFx0XHRuZXcgT08udWkuRmllbGRMYXlvdXQoZ2V0RGVsZXRlSXRlbUJ1dHRvbihkZWxldGVUaGlzSXRlbSwgaW5wdXRPbkNoYW5nZSksIHthbGlnbjogJ2lubGluZSd9KSxcblx0XHRdKTtcblxuXHRcdHJldHVybiBmb2xsb3dVcEZpZWxkc2V0O1xuXHR9O1xuXG5cdHBhcmVudEZpZWxkU2V0LmFkZEl0ZW1zKFtpbml0aWFsRmllbGRzZXRdKTtcblxuXHRwYXJlbnRGaWVsZFNldC5vbignY2hhbmdlJywgKCkgPT4ge1xuXHRcdGdldEF0dHJpYnV0aW9uKHskYm9keSwgcGFyZW50RmllbGRTZXR9KTtcblx0fSk7XG5cblx0cmV0dXJuIHBhcmVudEZpZWxkU2V0O1xufTtcblxuZXhwb3J0IHtnZW5lcmF0ZVRleHRJbnB1dFdpdGhEcm9wZG93bn07XG4iLCAiaW1wb3J0IHttb2RpZnlWaXN1YWxFZGl0b3JDaGFuZ2VUYWcsIG1vZGlmeVdpa2lFZGl0b3JDaGFuZ2VUYWd9IGZyb20gJy4vbW9kaWZ5Q2hhbmdlVGFnJztcbmltcG9ydCB7YXBwZW5kVGV4dFRvU3VtbWFyeX0gZnJvbSAnLi9jaGFuZ2VTdW1tYXJ5JztcbmltcG9ydCB7Z2VuZXJhdGVUZXh0SW5wdXRXaXRoRHJvcGRvd259IGZyb20gJy4vZ2VuZXJhdGVUZXh0SW5wdXRXaXRoRHJvcGRvd24nO1xuXG5jb25zdCBnZW5lcmF0ZVZpc3VhbEVkaXRvckNoZWNrYm94TGF5b3V0ID0gKHtcblx0aW5wdXRJZCxcblx0bGFiZWwsXG5cdCRib2R5LFxuXHRjaGFuZ2VUYWcsXG59OiB7XG5cdGlucHV0SWQ/OiBzdHJpbmc7XG5cdGxhYmVsOiBzdHJpbmc7XG5cdCRib2R5OiBKUXVlcnk8SFRNTEVsZW1lbnQ+O1xuXHRjaGFuZ2VUYWc/OiBzdHJpbmc7XG59KSA9PiB7XG5cdGNvbnN0IGNoZWNrYm94OiBPTy51aS5DaGVja2JveElucHV0V2lkZ2V0ID0gbmV3IE9PLnVpLkNoZWNrYm94SW5wdXRXaWRnZXQoe1xuXHRcdHNlbGVjdGVkOiBmYWxzZSxcblx0fSk7XG5cblx0aWYgKGlucHV0SWQpIHtcblx0XHRjaGVja2JveC5zZXRJbnB1dElkKGlucHV0SWQpO1xuXHR9XG5cblx0aWYgKGNoYW5nZVRhZykge1xuXHRcdG1vZGlmeVZpc3VhbEVkaXRvckNoYW5nZVRhZyh7Y2hhbmdlVGFnLCBjaGVja2JveH0pO1xuXHR9XG5cblx0Y29uc3QgdGV4dElucHV0V2l0aERyb3Bkb3duID0gZ2VuZXJhdGVUZXh0SW5wdXRXaXRoRHJvcGRvd24oeyRib2R5fSk7XG5cblx0Y2hlY2tib3gub24oJ2NoYW5nZScsIChzZWxlY3RlZCkgPT4ge1xuXHRcdHRleHRJbnB1dFdpdGhEcm9wZG93bi4kZWxlbWVudC5wcm9wKCdkaXNhYmxlZCcsICFzZWxlY3RlZCk7XG5cdFx0dGV4dElucHV0V2l0aERyb3Bkb3duLiRlbGVtZW50LmNzcygnZGlzcGxheScsIHNlbGVjdGVkID8gJ2Jsb2NrJyA6ICdub25lJyk7XG5cdH0pO1xuXG5cdGNvbnN0IGNoZWNrYm94TGF5b3V0OiBPTy51aS5GaWVsZExheW91dDxPTy51aS5DaGVja2JveElucHV0V2lkZ2V0PiA9IG5ldyBPTy51aS5GaWVsZExheW91dChjaGVja2JveCwge1xuXHRcdGFsaWduOiAnaW5saW5lJyxcblx0XHRsYWJlbCxcblx0fSk7XG5cblx0Y29uc3QgJGxheW91dCA9ICQoJzxkaXY+JykuYXR0cignaWQnLCAnZWZhLWFyZWEnKS5hcHBlbmQoY2hlY2tib3hMYXlvdXQuJGVsZW1lbnQsIHRleHRJbnB1dFdpdGhEcm9wZG93bi4kZWxlbWVudCk7XG5cblx0Y29uc3Qge3RhcmdldH0gPSB3aW5kb3cudmUuaW5pdDtcblx0Y29uc3Qge3NhdmVEaWFsb2d9ID0gdGFyZ2V0O1xuXG5cdHNhdmVEaWFsb2cub24oJ3NhdmUnLCAoKSA9PiB7XG5cdFx0aWYgKGNoZWNrYm94LmlzU2VsZWN0ZWQoKSkge1xuXHRcdFx0Y29uc3QgY3VzdG9tU3VtbWFyeSA9IFN0cmluZygkYm9keS5maW5kKCdpbnB1dFtuYW1lPXdwQXR0cmlidXRpb25dJykudmFsKCkpO1xuXHRcdFx0Y29uc3QgJHdwU3VtbWFyeSA9IHRhcmdldC5zYXZlRGlhbG9nLmVkaXRTdW1tYXJ5SW5wdXQuJGlucHV0O1xuXHRcdFx0YXBwZW5kVGV4dFRvU3VtbWFyeSh7Y3VzdG9tU3VtbWFyeSwgJHdwU3VtbWFyeX0pO1xuXHRcdFx0JGxheW91dC5yZXBsYWNlV2l0aCgkbGF5b3V0KTtcblx0XHR9XG5cdH0pO1xuXG5cdHJldHVybiAkbGF5b3V0O1xufTtcblxuY29uc3QgZ2VuZXJhdGVXaWtpRWRpdG9yQ2hlY2tib3hMYXlvdXQgPSAoe1xuXHRpbnB1dElkLFxuXHRsYWJlbCxcblx0Y2hhbmdlVGFnLFxuXHQkYm9keSxcblx0JGVkaXRGb3JtLFxufToge1xuXHRpbnB1dElkPzogc3RyaW5nO1xuXHRsYWJlbDogc3RyaW5nO1xuXHRjaGFuZ2VUYWc/OiBzdHJpbmc7XG5cdCRib2R5OiBKUXVlcnk7XG5cdCRlZGl0Rm9ybTogSlF1ZXJ5O1xufSkgPT4ge1xuXHRjb25zdCBjaGVja2JveDogT08udWkuQ2hlY2tib3hJbnB1dFdpZGdldCA9IG5ldyBPTy51aS5DaGVja2JveElucHV0V2lkZ2V0KHtcblx0XHRzZWxlY3RlZDogZmFsc2UsXG5cdH0pO1xuXG5cdGlmIChpbnB1dElkKSB7XG5cdFx0Y2hlY2tib3guc2V0SW5wdXRJZChpbnB1dElkKTtcblx0fVxuXG5cdGlmIChjaGFuZ2VUYWcpIHtcblx0XHRtb2RpZnlXaWtpRWRpdG9yQ2hhbmdlVGFnKHtjaGFuZ2VUYWcsIGNoZWNrYm94LCAkZWRpdEZvcm19KTtcblx0fVxuXG5cdGNvbnN0IHRleHRJbnB1dFdpdGhEcm9wZG93biA9IGdlbmVyYXRlVGV4dElucHV0V2l0aERyb3Bkb3duKHskYm9keX0pO1xuXG5cdGNoZWNrYm94Lm9uKCdjaGFuZ2UnLCAoc2VsZWN0ZWQpID0+IHtcblx0XHR0ZXh0SW5wdXRXaXRoRHJvcGRvd24uJGVsZW1lbnQucHJvcCgnZGlzYWJsZWQnLCAhc2VsZWN0ZWQpO1xuXHRcdHRleHRJbnB1dFdpdGhEcm9wZG93bi4kZWxlbWVudC5jc3MoJ2Rpc3BsYXknLCBzZWxlY3RlZCA/ICdibG9jaycgOiAnbm9uZScpO1xuXHR9KTtcblxuXHRjb25zdCBjaGVja2JveExheW91dDogT08udWkuRmllbGRMYXlvdXQ8T08udWkuQ2hlY2tib3hJbnB1dFdpZGdldD4gPSBuZXcgT08udWkuRmllbGRMYXlvdXQoY2hlY2tib3gsIHtcblx0XHRhbGlnbjogJ2lubGluZScsXG5cdFx0bGFiZWwsXG5cdH0pO1xuXG5cdGNvbnN0ICRsYXlvdXQgPSAkKCc8ZGl2PicpLmF0dHIoJ2lkJywgJ2VmYS1hcmVhJykuYXBwZW5kKGNoZWNrYm94TGF5b3V0LiRlbGVtZW50LCB0ZXh0SW5wdXRXaXRoRHJvcGRvd24uJGVsZW1lbnQpO1xuXG5cdCRlZGl0Rm9ybS5vbignc3VibWl0JywgKCkgPT4ge1xuXHRcdGlmIChjaGVja2JveC5pc1NlbGVjdGVkKCkpIHtcblx0XHRcdGNvbnN0IGN1c3RvbVN1bW1hcnkgPSBTdHJpbmcoJGJvZHkuZmluZCgnaW5wdXRbbmFtZT13cEF0dHJpYnV0aW9uXScpLnZhbCgpKTtcblx0XHRcdGNvbnN0ICR3cFN1bW1hcnkgPSAkZWRpdEZvcm0uZmluZCgnaW5wdXRbbmFtZT13cFN1bW1hcnldJyk7XG5cdFx0XHRhcHBlbmRUZXh0VG9TdW1tYXJ5KHtjdXN0b21TdW1tYXJ5LCAkd3BTdW1tYXJ5fSk7XG5cdFx0XHQkbGF5b3V0LnJlcGxhY2VXaXRoKCRsYXlvdXQpO1xuXHRcdH1cblx0fSk7XG5cblx0cmV0dXJuICRsYXlvdXQ7XG59O1xuZXhwb3J0IHtnZW5lcmF0ZVZpc3VhbEVkaXRvckNoZWNrYm94TGF5b3V0LCBnZW5lcmF0ZVdpa2lFZGl0b3JDaGVja2JveExheW91dH07XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICd+L0VkaXRmb3JtX0F0dHJpYnV0aW9uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge2dlbmVyYXRlVmlzdWFsRWRpdG9yQ2hlY2tib3hMYXlvdXR9IGZyb20gJy4vdXRpbC9nZW5lcmF0ZUNoZWNrYm94TGF5b3V0JztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9pMThuJztcblxuY29uc3QgcHJvY2Vzc1Zpc3VhbEVkaXRvciA9ICh7JGJvZHl9OiB7JGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+fSk6IHZvaWQgPT4ge1xuXHQvLyBHdWFyZCBhZ2FpbnN0IGRvdWJsZSBpbmNsdXNpb25zXG5cdGlmIChtdy5jb25maWcuZ2V0KE9QVElPTlMuY29uZmlnS2V5KSkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0ICR0YXJnZXQ6IEpRdWVyeSA9ICRib2R5LmZpbmQoYC4ke09QVElPTlMudGFyZ2V0Q2xhc3NWZX1gKTtcblx0aWYgKCEkdGFyZ2V0Lmxlbmd0aCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdG13LmNvbmZpZy5zZXQoT1BUSU9OUy5jb25maWdLZXksIHRydWUpO1xuXG5cdGNvbnN0IGdldCRMYXlvdXQgPSAoKSA9PiB7XG5cdFx0cmV0dXJuIGdlbmVyYXRlVmlzdWFsRWRpdG9yQ2hlY2tib3hMYXlvdXQoe1xuXHRcdFx0aW5wdXRJZDogT1BUSU9OUy5pbnB1dElkLFxuXHRcdFx0bGFiZWw6IGdldE1lc3NhZ2UoJ1RoaXJkUGFydHlDb250ZW50Q29udGFpbmVkJyksXG5cdFx0XHQvLyBjaGFuZ2VUYWc6IE9QVElPTlMuY2hhbmdlVGFnLFxuXHRcdFx0JGJvZHksXG5cdFx0fSk7XG5cdH07XG5cblx0Y29uc3QgJGxheW91dCA9IGdldCRMYXlvdXQoKTtcblxuXHRpZiAoISRib2R5LmZpbmQoYCMke09QVElPTlMuaW5wdXRJZH1gKS5sZW5ndGgpIHtcblx0XHQkdGFyZ2V0LmFwcGVuZCgkbGF5b3V0KTtcblx0fVxuXG5cdGNvbnN0IHt0YXJnZXR9ID0gd2luZG93LnZlLmluaXQ7XG5cdGNvbnN0IHtzYXZlRGlhbG9nfSA9IHRhcmdldDtcblxuXHRzYXZlRGlhbG9nLm9uKCdzYXZlJywgKCkgPT4ge1xuXHRcdCRsYXlvdXQucmVwbGFjZVdpdGgoZ2V0JExheW91dCgpKTtcblx0fSk7XG59O1xuXG5leHBvcnQge3Byb2Nlc3NWaXN1YWxFZGl0b3J9O1xuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnfi9FZGl0Zm9ybV9BdHRyaWJ1dGlvbi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtnZW5lcmF0ZVdpa2lFZGl0b3JDaGVja2JveExheW91dH0gZnJvbSAnLi91dGlsL2dlbmVyYXRlQ2hlY2tib3hMYXlvdXQnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL2kxOG4nO1xuXG5jb25zdCBwcm9jZXNzV2lraUVkaXRvciA9ICh7JGJvZHksICRlZGl0Rm9ybX06IHskYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD47ICRlZGl0Rm9ybTogSlF1ZXJ5fSk6IHZvaWQgPT4ge1xuXHQvLyBHdWFyZCBhZ2FpbnN0IGRvdWJsZSBpbmNsdXNpb25zXG5cdGlmIChtdy5jb25maWcuZ2V0KE9QVElPTlMuY29uZmlnS2V5KSkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0ICR0YXJnZXQ6IEpRdWVyeSA9ICRlZGl0Rm9ybS5maW5kKE9QVElPTlMudGFyZ2V0V2lraUVkaXRvcik7XG5cdGlmICghJHRhcmdldC5sZW5ndGgpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRtdy5jb25maWcuc2V0KE9QVElPTlMuY29uZmlnS2V5LCB0cnVlKTtcblxuXHRjb25zdCBnZXQkTGF5b3V0ID0gKCkgPT4ge1xuXHRcdHJldHVybiBnZW5lcmF0ZVdpa2lFZGl0b3JDaGVja2JveExheW91dCh7XG5cdFx0XHRpbnB1dElkOiBPUFRJT05TLmlucHV0SWQsXG5cdFx0XHRsYWJlbDogZ2V0TWVzc2FnZSgnVGhpcmRQYXJ0eUNvbnRlbnRDb250YWluZWQnKSxcblx0XHRcdCRib2R5LFxuXHRcdFx0JGVkaXRGb3JtLFxuXHRcdFx0Ly8gY2hhbmdlVGFnOiBPUFRJT05TLmNoYW5nZVRhZyxcblx0XHR9KTtcblx0fTtcblxuXHRjb25zdCAkbGF5b3V0ID0gZ2V0JExheW91dCgpO1xuXG5cdGlmICghJGJvZHkuZmluZChgIyR7T1BUSU9OUy5pbnB1dElkfWApLmxlbmd0aCkge1xuXHRcdCR0YXJnZXQuYWZ0ZXIoJGxheW91dCk7XG5cdH1cblxuXHQkZWRpdEZvcm0ub24oJ3N1Ym1pdCcsICgpID0+IHtcblx0XHQkbGF5b3V0LnJlcGxhY2VXaXRoKGdldCRMYXlvdXQoKSk7XG5cdH0pO1xufTtcblxuZXhwb3J0IHtwcm9jZXNzV2lraUVkaXRvcn07XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQyxJQUFBQSxZQUFhO0FBRWIsSUFBQUMsVUFBVztBQUNYLElBQUFDLGdCQUFpQjtBQUNqQixJQUFBQyxtQkFBb0I7O0FDSnJCLElBQUFDLHFCQUFzQkMsUUFBQSxpQkFBQTs7QUNEdEIsSUFBTUMsOEJBQThCQSxDQUFDO0VBQ3BDQztFQUNBQztBQUNELE1BR1k7QUFDWEEsV0FBU0MsR0FBRyxVQUFVLE1BQVk7QUFBQSxRQUFBQyx1QkFBQUMsd0JBQUFDO0FBQ2pDLFVBQU1DLHFCQUFzQkMsc0JBQXFDO0FBQ2hFLGFBQU9OLFNBQVNPLFdBQVcsSUFBQSxHQUFBQyxPQUNyQkYsa0JBQWdCLEdBQUEsRUFBQUUsT0FBSVQsU0FBUyxJQUNoQ08saUJBQWlCRyxRQUFBLElBQUFELE9BQVlULFNBQVMsR0FBSSxFQUFFO0lBQ2hEO0FBRUEsUUFBSVcsYUFBcUI7QUFDekJBLGlCQUFhTCxvQkFBQUgseUJBQUFDLDBCQUFtQkMseUJBQUFPLE9BQU9DLEdBQUdDLEtBQUtDLE9BQU9DLFlBQVdD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QVQ1QkEsTUFBQSxHQUFLdEssbUJBQUF5SyxTQUFRLEVBQUVDLEtBQUssU0FBU0MsU0FBUzFJLE9BQXNDO0FBQzNFZ0ksS0FBR1csS0FBSyxtQkFBbUIsRUFBRUMsSUFBS3RKLGVBQW9CO0FBQ3JEZ0osc0JBQWtCO01BQ2pCdEk7TUFDQVY7SUFDRCxDQUFDO0VBQ0YsQ0FBQztBQUVEMEksS0FBR1csS0FBSyw0QkFBNEIsRUFBRUMsSUFBSSxNQUFZO0FBQ3JEYix3QkFBb0I7TUFDbkIvSDtJQUNELENBQUM7RUFDRixDQUFDO0FBR0RnSSxLQUFHVyxLQUFLLHVCQUF1QixFQUFFQyxJQUFJLE1BQU07QUFDMUMsUUFBSVosR0FBR0MsT0FBT0MsSUFBWXZLLFNBQVMsR0FBRztBQUNyQ3FLLFNBQUdDLE9BQU9HLElBQVl6SyxXQUFXLEtBQUs7SUFDdkM7RUFDRCxDQUFDO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFsiY29uZmlnS2V5IiwgImlucHV0SWQiLCAidGFyZ2V0Q2xhc3NWZSIsICJ0YXJnZXRXaWtpRWRpdG9yIiwgImltcG9ydF9leHRfZ2FkZ2V0MiIsICJyZXF1aXJlIiwgIm1vZGlmeVZpc3VhbEVkaXRvckNoYW5nZVRhZyIsICJjaGFuZ2VUYWciLCAiY2hlY2tib3giLCAib24iLCAiX3dpbmRvdyR2ZSRpbml0JHRhcmdlIiwgIl93aW5kb3ckdmUkaW5pdCR0YXJnZTIiLCAiX3dpbmRvdyR2ZSRpbml0JHRhcmdlMyIsICJnZW5lcmF0ZUNoYW5nZVRhZ3MiLCAib3JpZ2luQ2hhbmdlVGFncyIsICJpc1NlbGVjdGVkIiwgImNvbmNhdCIsICJyZXBsYWNlIiwgImNoYW5nZVRhZ3MiLCAid2luZG93IiwgInZlIiwgImluaXQiLCAidGFyZ2V0IiwgInNhdmVGaWVsZHMiLCAid3BDaGFuZ2VUYWdzIiwgImNhbGwiLCAibW9kaWZ5V2lraUVkaXRvckNoYW5nZVRhZyIsICIkZWRpdEZvcm0iLCAiXyRvcmlnaW5XcENoYW5nZVRhZ3MkIiwgIl8kb3JpZ2luV3BDaGFuZ2VUYWdzJDIiLCAiJHdwQ2hhbmdlVGFncyIsICIkIiwgImF0dHIiLCAiaWQiLCAibmFtZSIsICJ0eXBlIiwgInZhbHVlIiwgIiRib2R5IiwgInBhcmVudHMiLCAiJG9yaWdpbldwQ2hhbmdlVGFncyIsICJmaW5kIiwgImxlbmd0aCIsICJwcmVwZW5kIiwgInZhbCIsICJ0b1N0cmluZyIsICJhcHBlbmRUZXh0VG9TdW1tYXJ5IiwgImN1c3RvbVN1bW1hcnkiLCAiJHdwU3VtbWFyeSIsICJfJHdwU3VtbWFyeSR2YWwiLCAib3JpZ2luU3VtbWFyeSIsICJ0cmltIiwgInRyaWdnZXIiLCAiTElDRU5TRVMiLCAibGFiZWwiLCAiZGF0YSIsICJnZXRBdHRyaWJ1dGlvbiIsICJwYXJlbnRGaWVsZFNldCIsICJnZW5lcmF0ZUluZm9NYXJ0aXgiLCAiZmllbGRTZXRMYXlvdXQiLCAiYXR0cmlidXRpb25zIiwgImdldFNlbGVjdGVkVmFsdWUiLCAiZHJvcGRvd24iLCAic2VsZWN0ZWRJdGVtIiwgImdldE1lbnUiLCAiZmluZFNlbGVjdGVkSXRlbSIsICJnZXREYXRhIiwgIl9pdGVyYXRvciIsICJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsICJnZXRJdGVtcyIsICJfc3RlcCIsICJzIiwgIm4iLCAiZG9uZSIsICJhdHRyaWJ1dGlvbkZpZWxkc2V0IiwgImF0dHJpYnV0aW9uIiwgIl9pdGVyYXRvcjIiLCAiX3N0ZXAyIiwgImZpZWxkTGF5b3V0IiwgImZpZWxkIiwgImdldEZpZWxkIiwgInN1cHBvcnRzIiwgImdldFZhbHVlIiwgInNvdXJjZSIsICJsaWNlbnNlIiwgImVyciIsICJlIiwgImYiLCAiY29uc29sZSIsICJsb2ciLCAiam9pbiIsICJ3cEF0dHJpYnV0aW9uIiwgIiR3cEF0dHJpYnV0aW9uIiwgIiRvcmlnaW53cEF0dHJpYnV0aW9uIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgImdldEkxOG5NZXNzYWdlcyIsICJBZGQiLCAibG9jYWxpemUiLCAiZW4iLCAiemgiLCAiRGVsZXRlIiwgIlNvdXJjZSIsICJMaWNlbnNlIiwgIlRoaXJkUGFydHlDb250ZW50Q29udGFpbmVkIiwgIlFpdXdlbkNvbnRlbnRDb250YWluZWQiLCAiaTE4bk1lc3NhZ2VzIiwgImdldE1lc3NhZ2UiLCAia2V5IiwgImdlbmVyYXRlVGV4dElucHV0V2l0aERyb3Bkb3duIiwgImdldFRleHRJbnB1dCIsICJvbkNoYW5nZSIsICJ0ZXh0SW5wdXQiLCAiT08iLCAidWkiLCAiVGV4dElucHV0V2lkZ2V0IiwgInBsYWNlaG9sZGVyIiwgImdldERyb3BEb3duIiwgIm9uU2VsZWN0IiwgIkRyb3Bkb3duV2lkZ2V0IiwgIm1lbnVPcHRpb25zIiwgIl9pIiwgIl9MSUNFTlNFUyIsICJNZW51T3B0aW9uV2lkZ2V0IiwgImFkZEl0ZW1zIiwgImdldEFkZEl0ZW1CdXR0b24iLCAib25DbGlja3MiLCAiYWRkSXRlbUJ1dHRvbiIsICJCdXR0b25JbnB1dFdpZGdldCIsICJfaXRlcmF0b3IzIiwgIl9zdGVwMyIsICJvbkNsaWNrIiwgImdldERlbGV0ZUl0ZW1CdXR0b24iLCAiZGVsZXRlSXRlbUJ1dHRvbiIsICJfaXRlcmF0b3I0IiwgIl9zdGVwNCIsICJGaWVsZHNldExheW91dCIsICJpbnB1dE9uQ2hhbmdlIiwgImFkZEl0ZW1PbkNsaWNrIiwgImdldEZvbGxvd1VwRmllbGRzZXQiLCAiZGVsZXRlSXRlbU9uQ2xpY2siLCAiaXRlbSIsICJyZW1vdmVJdGVtcyIsICJpbml0aWFsRmllbGRzZXQiLCAiRmllbGRMYXlvdXQiLCAiYWxpZ24iLCAiZm9sbG93VXBGaWVsZHNldCIsICJkZWxldGVUaGlzSXRlbSIsICJnZW5lcmF0ZVZpc3VhbEVkaXRvckNoZWNrYm94TGF5b3V0IiwgImlucHV0SWQyIiwgIkNoZWNrYm94SW5wdXRXaWRnZXQiLCAic2VsZWN0ZWQiLCAic2V0SW5wdXRJZCIsICJ0ZXh0SW5wdXRXaXRoRHJvcGRvd24iLCAiJGVsZW1lbnQiLCAicHJvcCIsICJjc3MiLCAiY2hlY2tib3hMYXlvdXQiLCAiJGxheW91dCIsICJhcHBlbmQiLCAic2F2ZURpYWxvZyIsICJTdHJpbmciLCAiZWRpdFN1bW1hcnlJbnB1dCIsICIkaW5wdXQiLCAicmVwbGFjZVdpdGgiLCAiZ2VuZXJhdGVXaWtpRWRpdG9yQ2hlY2tib3hMYXlvdXQiLCAicHJvY2Vzc1Zpc3VhbEVkaXRvciIsICJtdyIsICJjb25maWciLCAiZ2V0IiwgIiR0YXJnZXQiLCAic2V0IiwgImdldCRMYXlvdXQiLCAicHJvY2Vzc1dpa2lFZGl0b3IiLCAiYWZ0ZXIiLCAiZ2V0Qm9keSIsICJ0aGVuIiwgImVkaXRGb3JtIiwgImhvb2siLCAiYWRkIl0KfQo=

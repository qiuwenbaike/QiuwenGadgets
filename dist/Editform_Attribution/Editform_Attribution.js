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
var changeTag = "Attribution_added";
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
  changeTag: changeTag2,
  checkbox
}) => {
  checkbox.on("change", () => {
    var _window$ve$init$targe, _window$ve$init$targe2, _window$ve$init$targe3;
    const generateChangeTags = (originChangeTags) => {
      return checkbox.isSelected() ? "".concat(originChangeTags, ",").concat(changeTag2) : originChangeTags.replace(",".concat(changeTag2), "");
    };
    let changeTags = "";
    changeTags = generateChangeTags((_window$ve$init$targe = (_window$ve$init$targe2 = (_window$ve$init$targe3 = window.ve.init.target.saveFields).wpChangeTags) === null || _window$ve$init$targe2 === void 0 ? void 0 : _window$ve$init$targe2.call(_window$ve$init$targe3)) !== null && _window$ve$init$targe !== void 0 ? _window$ve$init$targe : "");
    window.ve.init.target.saveFields.wpChangeTags = () => {
      return changeTags;
    };
  });
};
var modifyWikiEditorChangeTag = ({
  changeTag: changeTag2,
  checkbox,
  $editForm
}) => {
  checkbox.on("change", () => {
    var _$originWpChangeTags$, _$originWpChangeTags$2;
    const generateChangeTags = (originChangeTags) => {
      return checkbox.isSelected() ? "".concat(originChangeTags, ",").concat(changeTag2) : originChangeTags.replace(",".concat(changeTag2), "");
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
//! src/Editform_Attribution/modules/util/modifyAttributionSummary.ts
var modifyAttribution = ({
  $body,
  parentFieldSet
}) => {
  const generateInfoMartix = (fieldSetLayout) => {
    let fieldsInfo = "";
    const getSelectedValue = (dropdown) => {
      const selectedItem = dropdown.getMenu().findSelectedItem();
      return selectedItem ? selectedItem.getData() : void 0;
    };
    var _iterator = _createForOfIteratorHelper(fieldSetLayout.getItems()), _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done; ) {
        const attributionFieldset = _step.value;
        const fieldInfo = [];
        var _iterator2 = _createForOfIteratorHelper(attributionFieldset.getItems()), _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
            const fieldLayout = _step2.value;
            const field = fieldLayout.getField();
            let value;
            if (field.supports("getValue")) {
              value = field.getValue();
            } else if (field.supports("getMenu")) {
              value = getSelectedValue(field);
            }
            if (value) {
              fieldInfo[fieldInfo.length] = value;
            }
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
        fieldsInfo = fieldInfo.join("; ");
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    console.log(fieldsInfo);
    return fieldsInfo;
  };
  let attributions = "";
  const $wpAttributions = $("<input>").attr({
    id: "wpAttributions",
    name: "wpAttributions",
    type: "hidden",
    value: ""
  });
  const $originWpAttributions = $body.find("input[name=wpAttributions]");
  if (!$originWpAttributions.length) {
    $body.prepend($wpAttributions);
  }
  attributions = generateInfoMartix(parentFieldSet);
  $originWpAttributions.val(attributions);
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
  const getDropDown = (onChange) => {
    const dropdown = new OO.ui.DropdownWidget();
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
    if (onChange) {
      dropdown.on("change", () => {
        onChange();
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
    modifyAttribution({
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
    modifyAttribution({
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
  changeTag: changeTag2
}) => {
  const checkbox = new OO.ui.CheckboxInputWidget({
    selected: false
  });
  if (inputId2) {
    checkbox.setInputId(inputId2);
  }
  if (changeTag2) {
    modifyVisualEditorChangeTag({
      changeTag: changeTag2,
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
  changeTag: changeTag2,
  $body,
  $editForm
}) => {
  const checkbox = new OO.ui.CheckboxInputWidget({
    selected: false
  });
  if (inputId2) {
    checkbox.setInputId(inputId2);
  }
  if (changeTag2) {
    modifyWikiEditorChangeTag({
      changeTag: changeTag2,
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
  const $layout = generateVisualEditorCheckboxLayout({
    inputId,
    label: getMessage("ThirdPartyContentContained"),
    changeTag,
    $body
  });
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
      const customSummary = String($body.find("input[name=wpAttributions]").val());
      const $wpSummary = target.saveDialog.editSummaryInput.$input;
      appendTextToSummary({
        customSummary,
        $wpSummary
      });
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
  const $layout = generateWikiEditorCheckboxLayout({
    inputId,
    label: getMessage("ThirdPartyContentContained"),
    $body,
    $editForm,
    changeTag
  });
  if (!$body.find("#".concat(inputId)).length) {
    $target.after($layout);
  }
  $editForm.on("submit", () => {
    const customSummary = String($body.find("input[name=wpAttributions]").val());
    const $wpSummary = $editForm.find("input[name=wpSummary]");
    appendTextToSummary({
      customSummary,
      $wpSummary
    });
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0VkaXRmb3JtX0F0dHJpYnV0aW9uL29wdGlvbnMuanNvbiIsICJzcmMvRWRpdGZvcm1fQXR0cmlidXRpb24vRWRpdGZvcm1fQXR0cmlidXRpb24udHMiLCAic3JjL0VkaXRmb3JtX0F0dHJpYnV0aW9uL21vZHVsZXMvdXRpbC9jaGFuZ2VTdW1tYXJ5LnRzIiwgInNyYy9FZGl0Zm9ybV9BdHRyaWJ1dGlvbi9tb2R1bGVzL3V0aWwvbW9kaWZ5Q2hhbmdlVGFnLnRzIiwgInNyYy9FZGl0Zm9ybV9BdHRyaWJ1dGlvbi9tb2R1bGVzL2NvbnN0YW50LnRzIiwgInNyYy9FZGl0Zm9ybV9BdHRyaWJ1dGlvbi9tb2R1bGVzL2kxOG4udHMiLCAic3JjL0VkaXRmb3JtX0F0dHJpYnV0aW9uL21vZHVsZXMvdXRpbC9tb2RpZnlBdHRyaWJ1dGlvblN1bW1hcnkudHMiLCAic3JjL0VkaXRmb3JtX0F0dHJpYnV0aW9uL21vZHVsZXMvdXRpbC9nZW5lcmF0ZVRleHRJbnB1dFdpdGhEcm9wZG93bi50cyIsICJzcmMvRWRpdGZvcm1fQXR0cmlidXRpb24vbW9kdWxlcy91dGlsL2dlbmVyYXRlQ2hlY2tib3hMYXlvdXQudHMiLCAic3JjL0VkaXRmb3JtX0F0dHJpYnV0aW9uL21vZHVsZXMvcHJvY2Vzc1Zpc3VhbEVkaXRvci50cyIsICJzcmMvRWRpdGZvcm1fQXR0cmlidXRpb24vbW9kdWxlcy9wcm9jZXNzV2lraUVkaXRvci50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsie1xuXHRcImNvbmZpZ0tleVwiOiBcImdhZGdldC1FZGl0Zm9ybV9BdHRyaWJ1dGlvbl9fSW5pdGlhbGl6ZWRcIixcblx0XCJjaGFuZ2VUYWdcIjogXCJBdHRyaWJ1dGlvbl9hZGRlZFwiLFxuXHRcImlucHV0SWRcIjogXCJlZGl0Zm9ybV9hdHRyaWJ1dGlvblwiLFxuXHRcInRhcmdldENsYXNzVmVcIjogXCJ2ZS11aS1td1NhdmVEaWFsb2ctY2hlY2tib3hlc1wiLFxuXHRcInRhcmdldFdpa2lFZGl0b3JcIjogXCIuZWRpdENoZWNrYm94ZXMgLm9vLXVpLWhvcml6b250YWxMYXlvdXRcIlxufVxuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtnZXRCb2R5fSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuaW1wb3J0IHtwcm9jZXNzVmlzdWFsRWRpdG9yfSBmcm9tICcuL21vZHVsZXMvcHJvY2Vzc1Zpc3VhbEVkaXRvcic7XG5pbXBvcnQge3Byb2Nlc3NXaWtpRWRpdG9yfSBmcm9tICcuL21vZHVsZXMvcHJvY2Vzc1dpa2lFZGl0b3InO1xuXG4vKipcbiAqIEBkZXNjcmlwdGlvbiDnrKzkuInmlrnmnaXmupDnibnmrorlo7DmmI5cbiAqL1xudm9pZCBnZXRCb2R5KCkudGhlbihmdW5jdGlvbiBlZGl0Rm9ybSgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkIHtcblx0bXcuaG9vaygnd2lraXBhZ2UuZWRpdGZvcm0nKS5hZGQoKCRlZGl0Rm9ybSk6IHZvaWQgPT4ge1xuXHRcdHByb2Nlc3NXaWtpRWRpdG9yKHtcblx0XHRcdCRib2R5LFxuXHRcdFx0JGVkaXRGb3JtLFxuXHRcdH0pO1xuXHR9KTtcblxuXHRtdy5ob29rKCd2ZS5zYXZlRGlhbG9nLnN0YXRlQ2hhbmdlZCcpLmFkZCgoKTogdm9pZCA9PiB7XG5cdFx0cHJvY2Vzc1Zpc3VhbEVkaXRvcih7XG5cdFx0XHQkYm9keSxcblx0XHR9KTtcblx0fSk7XG5cblx0Ly8gV2hlbiBzd2l0Y2hpbmcgYmV0d2VlbiBWRSBhbmQgTldFLCByZS1pbml0aWFsaXphdGlvbiBpcyByZXF1aXJlZFxuXHRtdy5ob29rKCd2ZS5hY3RpdmF0aW9uQ29tcGxldGUnKS5hZGQoKCkgPT4ge1xuXHRcdGlmIChtdy5jb25maWcuZ2V0KE9QVElPTlMuY29uZmlnS2V5KSkge1xuXHRcdFx0bXcuY29uZmlnLnNldChPUFRJT05TLmNvbmZpZ0tleSwgZmFsc2UpO1xuXHRcdH1cblx0fSk7XG59KTtcbiIsICJjb25zdCBhcHBlbmRUZXh0VG9TdW1tYXJ5ID0gKHtjdXN0b21TdW1tYXJ5LCAkd3BTdW1tYXJ5fToge2N1c3RvbVN1bW1hcnk6IHN0cmluZzsgJHdwU3VtbWFyeTogSlF1ZXJ5fSk6IHZvaWQgPT4ge1xuXHRjb25zdCBvcmlnaW5TdW1tYXJ5OiBzdHJpbmcgPSAoJHdwU3VtbWFyeS52YWwoKSBhcyBzdHJpbmcgfCB1bmRlZmluZWQpID8/ICcnO1xuXG5cdCR3cFN1bW1hcnkudmFsKG9yaWdpblN1bW1hcnkudHJpbSgpID8gYCR7b3JpZ2luU3VtbWFyeX0gJHtjdXN0b21TdW1tYXJ5fWAgOiBjdXN0b21TdW1tYXJ5KS50cmlnZ2VyKCdjaGFuZ2UnKTtcbn07XG5cbmV4cG9ydCB7YXBwZW5kVGV4dFRvU3VtbWFyeX07XG4iLCAiY29uc3QgbW9kaWZ5VmlzdWFsRWRpdG9yQ2hhbmdlVGFnID0gKHtcblx0Y2hhbmdlVGFnLFxuXHRjaGVja2JveCxcbn06IHtcblx0Y2hhbmdlVGFnOiBzdHJpbmc7XG5cdGNoZWNrYm94OiBPTy51aS5DaGVja2JveElucHV0V2lkZ2V0O1xufSk6IHZvaWQgPT4ge1xuXHRjaGVja2JveC5vbignY2hhbmdlJywgKCk6IHZvaWQgPT4ge1xuXHRcdGNvbnN0IGdlbmVyYXRlQ2hhbmdlVGFncyA9IChvcmlnaW5DaGFuZ2VUYWdzOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuXHRcdFx0cmV0dXJuIGNoZWNrYm94LmlzU2VsZWN0ZWQoKVxuXHRcdFx0XHQ/IGAke29yaWdpbkNoYW5nZVRhZ3N9LCR7Y2hhbmdlVGFnfWBcblx0XHRcdFx0OiBvcmlnaW5DaGFuZ2VUYWdzLnJlcGxhY2UoYCwke2NoYW5nZVRhZ31gLCAnJyk7XG5cdFx0fTtcblxuXHRcdGxldCBjaGFuZ2VUYWdzOiBzdHJpbmcgPSAnJztcblx0XHRjaGFuZ2VUYWdzID0gZ2VuZXJhdGVDaGFuZ2VUYWdzKHdpbmRvdy52ZS5pbml0LnRhcmdldC5zYXZlRmllbGRzLndwQ2hhbmdlVGFncz8uKCkgPz8gJycpO1xuXHRcdHdpbmRvdy52ZS5pbml0LnRhcmdldC5zYXZlRmllbGRzLndwQ2hhbmdlVGFncyA9ICgpOiBzdHJpbmcgPT4ge1xuXHRcdFx0cmV0dXJuIGNoYW5nZVRhZ3M7XG5cdFx0fTtcblx0fSk7XG59O1xuXG5jb25zdCBtb2RpZnlXaWtpRWRpdG9yQ2hhbmdlVGFnID0gKHtcblx0Y2hhbmdlVGFnLFxuXHRjaGVja2JveCxcblx0JGVkaXRGb3JtLFxufToge1xuXHRjaGFuZ2VUYWc6IHN0cmluZztcblx0Y2hlY2tib3g6IE9PLnVpLkNoZWNrYm94SW5wdXRXaWRnZXQ7XG5cdCRlZGl0Rm9ybTogSlF1ZXJ5O1xufSk6IHZvaWQgPT4ge1xuXHRjaGVja2JveC5vbignY2hhbmdlJywgKCk6IHZvaWQgPT4ge1xuXHRcdGNvbnN0IGdlbmVyYXRlQ2hhbmdlVGFncyA9IChvcmlnaW5DaGFuZ2VUYWdzOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuXHRcdFx0cmV0dXJuIGNoZWNrYm94LmlzU2VsZWN0ZWQoKVxuXHRcdFx0XHQ/IGAke29yaWdpbkNoYW5nZVRhZ3N9LCR7Y2hhbmdlVGFnfWBcblx0XHRcdFx0OiBvcmlnaW5DaGFuZ2VUYWdzLnJlcGxhY2UoYCwke2NoYW5nZVRhZ31gLCAnJyk7XG5cdFx0fTtcblxuXHRcdGxldCBjaGFuZ2VUYWdzOiBzdHJpbmcgPSAnJztcblxuXHRcdGNvbnN0ICR3cENoYW5nZVRhZ3M6IEpRdWVyeSA9ICQoJzxpbnB1dD4nKS5hdHRyKHtcblx0XHRcdGlkOiAnd3BDaGFuZ2VUYWdzJyxcblx0XHRcdG5hbWU6ICd3cENoYW5nZVRhZ3MnLFxuXHRcdFx0dHlwZTogJ2hpZGRlbicsXG5cdFx0XHR2YWx1ZTogJycsXG5cdFx0fSk7XG5cdFx0Y29uc3QgJGJvZHkgPSAkZWRpdEZvcm0ucGFyZW50cygnYm9keScpO1xuXHRcdGNvbnN0ICRvcmlnaW5XcENoYW5nZVRhZ3M6IEpRdWVyeSA9ICRib2R5LmZpbmQoJ2lucHV0W25hbWU9d3BDaGFuZ2VUYWdzXScpO1xuXHRcdGlmICghJG9yaWdpbldwQ2hhbmdlVGFncy5sZW5ndGgpIHtcblx0XHRcdCRib2R5LnByZXBlbmQoJHdwQ2hhbmdlVGFncyk7XG5cdFx0fVxuXHRcdGNoYW5nZVRhZ3MgPSBnZW5lcmF0ZUNoYW5nZVRhZ3MoJG9yaWdpbldwQ2hhbmdlVGFncy52YWwoKT8udG9TdHJpbmcoKSA/PyAnJyk7XG5cdFx0JG9yaWdpbldwQ2hhbmdlVGFncy52YWwoY2hhbmdlVGFncyk7XG5cdH0pO1xufTtcblxuZXhwb3J0IHttb2RpZnlWaXN1YWxFZGl0b3JDaGFuZ2VUYWcsIG1vZGlmeVdpa2lFZGl0b3JDaGFuZ2VUYWd9O1xuIiwgImNvbnN0IExJQ0VOU0VTID0gW1xuXHR7XG5cdFx0bGFiZWw6ICdDQyBCWS1TQSA0LjAnLFxuXHRcdGRhdGE6ICdodHRwczovL2NyZWF0aXZlY29tbW9ucy5vcmcvbGljZW5zZXMvYnktc2EvNC4wLycsXG5cdH0sXG5cdHtcblx0XHRsYWJlbDogJ0NDIEJZLVNBIDMuMCcsXG5cdFx0ZGF0YTogJ2h0dHBzOi8vY3JlYXRpdmVjb21tb25zLm9yZy9saWNlbnNlcy9ieS1zYS8zLjAvJyxcblx0fSxcblx0e1xuXHRcdGxhYmVsOiAnQ0MgQlktU0EgMy4wIENOJyxcblx0XHRkYXRhOiAnaHR0cHM6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL2xpY2Vuc2VzL2J5LXNhLzMuMC9jbi8nLFxuXHR9LFxuXHR7XG5cdFx0bGFiZWw6ICdDQzAtMS4wJyxcblx0XHRkYXRhOiAnaHR0cHM6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL3B1YmxpY2RvbWFpbi96ZXJvLzEuMC8nLFxuXHR9LFxuXHR7XG5cdFx0bGFiZWw6ICdLT0dMIFR5cGUgSTogQXR0cmlidXRpb24nLFxuXHRcdGRhdGE6ICdodHRwczovL3d3dy5rb2dsLm9yLmtyL2luZm8vbGljZW5zZVR5cGUxLmRvJyxcblx0fSxcbl07XG5cbmV4cG9ydCB7TElDRU5TRVN9O1xuIiwgImltcG9ydCB7bG9jYWxpemV9IGZyb20gJ2V4dC5nYWRnZXQuaTE4bic7XG5cbmNvbnN0IGdldEkxOG5NZXNzYWdlcyA9ICgpID0+IHtcblx0cmV0dXJuIHtcblx0XHRBZGQ6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQWRkJyxcblx0XHRcdHpoOiAn5aKe5YqgJyxcblx0XHR9KSxcblx0XHREZWxldGU6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnRGVsZXRlJyxcblx0XHRcdHpoOiAn56e76ZmkJyxcblx0XHR9KSxcblx0XHRTb3VyY2U6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnU291cmNlJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WGheWuueadpea6kCcsXG5cdFx0XHQnemgtaGFudCc6ICflhaflrrnkvobmupAnLFxuXHRcdH0pLFxuXHRcdExpY2Vuc2U6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnTGljZW5zZScsXG5cdFx0XHQnemgtaGFucyc6ICforrjlj6/or4EnLFxuXHRcdFx0J3poLWhhbnQnOiAn6Kix5Y+v6K2JJyxcblx0XHR9KSxcblx0XHQnU291cmNlcyBhbmQgTGljZW5zZXMnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1NvdXJjZXMgYW5kIExpY2Vuc2VzJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WGheWuueadpea6kOWPiuiuuOWPr+ivgScsXG5cdFx0XHQnemgtaGFudCc6ICflhaflrrnkvobmupDlj4roqLHlj6/orYknLFxuXHRcdH0pLFxuXHRcdFRoaXJkUGFydHlDb250ZW50Q29udGFpbmVkOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1RoaXMgZWRpdG9yIGNvbnRhaW5zIHRoaXJkLXBhcnR5IGNvbnRlbnQuJyxcblx0XHRcdCd6aC1oYW5zJzogJ+atpOe8lui+keWQq+acieesrOS4ieaWueWGheWuuScsXG5cdFx0XHQnemgtaGFudCc6ICfmraTnt6jovK/lkKvmnInnrKzkuInmlrnlhaflrrknLFxuXHRcdH0pLFxuXHRcdFFpdXdlbkNvbnRlbnRDb250YWluZWQ6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnVGhpcyBlZGl0b3IgY29udGFpbnMgY29udGVudCBmcm9tIG90aGVyIHBhZ2VzIG9mIFFpdXdlbiBCYWlrZS4nLFxuXHRcdFx0J3poLWhhbnMnOiAn5q2k57yW6L6R5ZCr5pyJ5rGC6Ze755m+56eR5YW25LuW6aG16Z2i55qE5YaF5a65Jyxcblx0XHRcdCd6aC1oYW50JzogJ+atpOe3qOi8r+WQq+acieaxguiBnueZvuenkeWFtuS7lumggemdoueahOWFp+WuuScsXG5cdFx0fSksXG5cdH07XG59O1xuXG5jb25zdCBpMThuTWVzc2FnZXMgPSBnZXRJMThuTWVzc2FnZXMoKTtcblxuY29uc3QgZ2V0TWVzc2FnZTogR2V0TWVzc2FnZXM8dHlwZW9mIGkxOG5NZXNzYWdlcz4gPSAoa2V5KSA9PiB7XG5cdHJldHVybiBpMThuTWVzc2FnZXNba2V5XSB8fCBrZXk7XG59O1xuXG5leHBvcnQge2dldE1lc3NhZ2V9O1xuIiwgImNvbnN0IG1vZGlmeUF0dHJpYnV0aW9uID0gKHtcblx0JGJvZHksXG5cdHBhcmVudEZpZWxkU2V0LFxufToge1xuXHQkYm9keTogSlF1ZXJ5PEhUTUxFbGVtZW50Pjtcblx0cGFyZW50RmllbGRTZXQ6IE9PLnVpLkZpZWxkc2V0TGF5b3V0O1xufSkgPT4ge1xuXHRjb25zdCBnZW5lcmF0ZUluZm9NYXJ0aXggPSAoZmllbGRTZXRMYXlvdXQ6IE9PLnVpLkZpZWxkc2V0TGF5b3V0KSA9PiB7XG5cdFx0bGV0IGZpZWxkc0luZm86IHN0cmluZyA9ICcnO1xuXG5cdFx0Y29uc3QgZ2V0U2VsZWN0ZWRWYWx1ZSA9IChkcm9wZG93bjogT08udWkuRHJvcGRvd25XaWRnZXQpOiBzdHJpbmcgfCB1bmRlZmluZWQgPT4ge1xuXHRcdFx0Y29uc3Qgc2VsZWN0ZWRJdGVtOiBPTy51aS5PcHRpb25XaWRnZXQgfCBudWxsID0gZHJvcGRvd25cblx0XHRcdFx0LmdldE1lbnUoKVxuXHRcdFx0XHQuZmluZFNlbGVjdGVkSXRlbSgpIGFzIE9PLnVpLk9wdGlvbldpZGdldCB8IG51bGw7XG5cdFx0XHRyZXR1cm4gc2VsZWN0ZWRJdGVtID8gKHNlbGVjdGVkSXRlbS5nZXREYXRhKCkgYXMgc3RyaW5nKSA6IHVuZGVmaW5lZDtcblx0XHR9O1xuXG5cdFx0Zm9yIChjb25zdCBhdHRyaWJ1dGlvbkZpZWxkc2V0IG9mIGZpZWxkU2V0TGF5b3V0LmdldEl0ZW1zKCkgYXMgT08udWkuRmllbGRzZXRMYXlvdXRbXSkge1xuXHRcdFx0Y29uc3QgZmllbGRJbmZvID0gW107XG5cblx0XHRcdGZvciAoY29uc3QgZmllbGRMYXlvdXQgb2YgYXR0cmlidXRpb25GaWVsZHNldC5nZXRJdGVtcygpIGFzIE9PLnVpLkZpZWxkTGF5b3V0W10pIHtcblx0XHRcdFx0Y29uc3QgZmllbGQgPSBmaWVsZExheW91dC5nZXRGaWVsZCgpO1xuXHRcdFx0XHRsZXQgdmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuXHRcdFx0XHRpZiAoZmllbGQuc3VwcG9ydHMoJ2dldFZhbHVlJykpIHtcblx0XHRcdFx0XHR2YWx1ZSA9IChmaWVsZCBhcyBPTy51aS5UZXh0SW5wdXRXaWRnZXQpLmdldFZhbHVlKCk7XG5cdFx0XHRcdH0gZWxzZSBpZiAoZmllbGQuc3VwcG9ydHMoJ2dldE1lbnUnKSkge1xuXHRcdFx0XHRcdHZhbHVlID0gZ2V0U2VsZWN0ZWRWYWx1ZShmaWVsZCBhcyBPTy51aS5Ecm9wZG93bldpZGdldCk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAodmFsdWUpIHtcblx0XHRcdFx0XHRmaWVsZEluZm9bZmllbGRJbmZvLmxlbmd0aF0gPSB2YWx1ZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRmaWVsZHNJbmZvID0gZmllbGRJbmZvLmpvaW4oJzsgJyk7XG5cdFx0fVxuXG5cdFx0Y29uc29sZS5sb2coZmllbGRzSW5mbyk7XG5cblx0XHRyZXR1cm4gZmllbGRzSW5mbztcblx0fTtcblxuXHRsZXQgYXR0cmlidXRpb25zOiBzdHJpbmcgPSAnJztcblxuXHRjb25zdCAkd3BBdHRyaWJ1dGlvbnM6IEpRdWVyeSA9ICQoJzxpbnB1dD4nKS5hdHRyKHtcblx0XHRpZDogJ3dwQXR0cmlidXRpb25zJyxcblx0XHRuYW1lOiAnd3BBdHRyaWJ1dGlvbnMnLFxuXHRcdHR5cGU6ICdoaWRkZW4nLFxuXHRcdHZhbHVlOiAnJyxcblx0fSk7XG5cdGNvbnN0ICRvcmlnaW5XcEF0dHJpYnV0aW9uczogSlF1ZXJ5ID0gJGJvZHkuZmluZCgnaW5wdXRbbmFtZT13cEF0dHJpYnV0aW9uc10nKTtcblx0aWYgKCEkb3JpZ2luV3BBdHRyaWJ1dGlvbnMubGVuZ3RoKSB7XG5cdFx0JGJvZHkucHJlcGVuZCgkd3BBdHRyaWJ1dGlvbnMpO1xuXHR9XG5cblx0YXR0cmlidXRpb25zID0gZ2VuZXJhdGVJbmZvTWFydGl4KHBhcmVudEZpZWxkU2V0KTtcblx0JG9yaWdpbldwQXR0cmlidXRpb25zLnZhbChhdHRyaWJ1dGlvbnMpO1xufTtcblxuZXhwb3J0IHttb2RpZnlBdHRyaWJ1dGlvbn07XG4iLCAiaW1wb3J0IHtMSUNFTlNFU30gZnJvbSAnLi4vY29uc3RhbnQnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuLi9pMThuJztcbmltcG9ydCB7bW9kaWZ5QXR0cmlidXRpb259IGZyb20gJy4vbW9kaWZ5QXR0cmlidXRpb25TdW1tYXJ5JztcblxuY29uc3QgZ2VuZXJhdGVUZXh0SW5wdXRXaXRoRHJvcGRvd24gPSAoeyRib2R5fTogeyRib2R5OiBKUXVlcnk8SFRNTEVsZW1lbnQ+fSkgPT4ge1xuXHRjb25zdCBnZXRUZXh0SW5wdXQgPSAob25DaGFuZ2U/OiAoZXZlbnQ/OiBFdmVudCkgPT4gdm9pZCkgPT4ge1xuXHRcdGNvbnN0IHRleHRJbnB1dCA9IG5ldyBPTy51aS5UZXh0SW5wdXRXaWRnZXQoe1xuXHRcdFx0cGxhY2Vob2xkZXI6IGdldE1lc3NhZ2UoJ1NvdXJjZScpLFxuXHRcdH0pO1xuXG5cdFx0aWYgKG9uQ2hhbmdlKSB7XG5cdFx0XHR0ZXh0SW5wdXQub24oJ2NoYW5nZScsICgpID0+IHtcblx0XHRcdFx0b25DaGFuZ2UoKTtcblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdHJldHVybiB0ZXh0SW5wdXQ7XG5cdH07XG5cblx0Y29uc3QgZ2V0RHJvcERvd24gPSAob25DaGFuZ2U/OiAoZXZlbnQ/OiBFdmVudCkgPT4gdm9pZCkgPT4ge1xuXHRcdGNvbnN0IGRyb3Bkb3duOiBPTy51aS5Ecm9wZG93bldpZGdldCA9IG5ldyBPTy51aS5Ecm9wZG93bldpZGdldCgpO1xuXG5cdFx0Y29uc3QgbWVudU9wdGlvbnM6IE9PLnVpLk1lbnVPcHRpb25XaWRnZXRbXSA9IFtdO1xuXG5cdFx0Zm9yIChjb25zdCB7ZGF0YSwgbGFiZWx9IG9mIExJQ0VOU0VTKSB7XG5cdFx0XHRtZW51T3B0aW9uc1ttZW51T3B0aW9ucy5sZW5ndGhdID0gbmV3IE9PLnVpLk1lbnVPcHRpb25XaWRnZXQoe1xuXHRcdFx0XHRkYXRhLFxuXHRcdFx0XHRsYWJlbCxcblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdGRyb3Bkb3duLmdldE1lbnUoKS5hZGRJdGVtcyhtZW51T3B0aW9ucyk7XG5cblx0XHRpZiAob25DaGFuZ2UpIHtcblx0XHRcdGRyb3Bkb3duLm9uKCdjaGFuZ2UnLCAoKSA9PiB7XG5cdFx0XHRcdG9uQ2hhbmdlKCk7XG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZHJvcGRvd247XG5cdH07XG5cblx0Y29uc3QgZ2V0QWRkSXRlbUJ1dHRvbiA9ICguLi5vbkNsaWNrczogKChldmVudD86IEV2ZW50KSA9PiB2b2lkKVtdKTogT08udWkuQnV0dG9uSW5wdXRXaWRnZXQgPT4ge1xuXHRcdGNvbnN0IGFkZEl0ZW1CdXR0b24gPSBuZXcgT08udWkuQnV0dG9uSW5wdXRXaWRnZXQoe1xuXHRcdFx0bGFiZWw6IGdldE1lc3NhZ2UoJ0FkZCcpLFxuXHRcdH0pO1xuXG5cdFx0aWYgKG9uQ2xpY2tzKSB7XG5cdFx0XHRmb3IgKGNvbnN0IG9uQ2xpY2sgb2Ygb25DbGlja3MpIHtcblx0XHRcdFx0YWRkSXRlbUJ1dHRvbi5vbignY2xpY2snLCBvbkNsaWNrKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gYWRkSXRlbUJ1dHRvbjtcblx0fTtcblxuXHRjb25zdCBnZXREZWxldGVJdGVtQnV0dG9uID0gKC4uLm9uQ2xpY2tzOiAoKGV2ZW50PzogRXZlbnQpID0+IHZvaWQpW10pOiBPTy51aS5CdXR0b25JbnB1dFdpZGdldCA9PiB7XG5cdFx0Y29uc3QgZGVsZXRlSXRlbUJ1dHRvbiA9IG5ldyBPTy51aS5CdXR0b25JbnB1dFdpZGdldCh7XG5cdFx0XHRsYWJlbDogZ2V0TWVzc2FnZSgnRGVsZXRlJyksXG5cdFx0fSk7XG5cblx0XHRpZiAob25DbGlja3MpIHtcblx0XHRcdGZvciAoY29uc3Qgb25DbGljayBvZiBvbkNsaWNrcykge1xuXHRcdFx0XHRkZWxldGVJdGVtQnV0dG9uLm9uKCdjbGljaycsIG9uQ2xpY2spO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBkZWxldGVJdGVtQnV0dG9uO1xuXHR9O1xuXG5cdGNvbnN0IHBhcmVudEZpZWxkU2V0ID0gbmV3IE9PLnVpLkZpZWxkc2V0TGF5b3V0KHtcblx0XHRsYWJlbDogZ2V0TWVzc2FnZSgnU291cmNlcyBhbmQgTGljZW5zZXMnKSxcblx0fSk7XG5cblx0Y29uc3QgaW5wdXRPbkNoYW5nZSA9ICgpID0+IHtcblx0XHRtb2RpZnlBdHRyaWJ1dGlvbih7JGJvZHksIHBhcmVudEZpZWxkU2V0fSk7XG5cdH07XG5cblx0Y29uc3QgYWRkSXRlbU9uQ2xpY2sgPSAoKSA9PiB7XG5cdFx0cGFyZW50RmllbGRTZXQuYWRkSXRlbXMoW2dldEZvbGxvd1VwRmllbGRzZXQoKV0pO1xuXHR9O1xuXG5cdGNvbnN0IGRlbGV0ZUl0ZW1PbkNsaWNrID0gKGl0ZW06IE9PLnVpLkZpZWxkc2V0TGF5b3V0KSA9PiB7XG5cdFx0cGFyZW50RmllbGRTZXQucmVtb3ZlSXRlbXMoW2l0ZW1dKTtcblx0fTtcblxuXHRjb25zdCBpbml0aWFsRmllbGRzZXQgPSBuZXcgT08udWkuRmllbGRzZXRMYXlvdXQoKTtcblx0aW5pdGlhbEZpZWxkc2V0LmFkZEl0ZW1zKFtcblx0XHRuZXcgT08udWkuRmllbGRMYXlvdXQoZ2V0VGV4dElucHV0KGlucHV0T25DaGFuZ2UpLCB7bGFiZWw6IGdldE1lc3NhZ2UoJ1NvdXJjZScpLCBhbGlnbjogJ2lubGluZSd9KSxcblx0XHRuZXcgT08udWkuRmllbGRMYXlvdXQoZ2V0RHJvcERvd24oaW5wdXRPbkNoYW5nZSksIHtsYWJlbDogZ2V0TWVzc2FnZSgnTGljZW5zZScpLCBhbGlnbjogJ2lubGluZSd9KSxcblx0XHRuZXcgT08udWkuRmllbGRMYXlvdXQoZ2V0QWRkSXRlbUJ1dHRvbihhZGRJdGVtT25DbGljaywgaW5wdXRPbkNoYW5nZSksIHthbGlnbjogJ2lubGluZSd9KSxcblx0XSk7XG5cblx0Y29uc3QgZ2V0Rm9sbG93VXBGaWVsZHNldCA9ICgpID0+IHtcblx0XHRjb25zdCBmb2xsb3dVcEZpZWxkc2V0ID0gbmV3IE9PLnVpLkZpZWxkc2V0TGF5b3V0KCk7XG5cdFx0Y29uc3QgZGVsZXRlVGhpc0l0ZW0gPSAoKSA9PiB7XG5cdFx0XHRkZWxldGVJdGVtT25DbGljayhmb2xsb3dVcEZpZWxkc2V0KTtcblx0XHR9O1xuXG5cdFx0Zm9sbG93VXBGaWVsZHNldC5hZGRJdGVtcyhbXG5cdFx0XHRuZXcgT08udWkuRmllbGRMYXlvdXQoZ2V0VGV4dElucHV0KGlucHV0T25DaGFuZ2UpLCB7bGFiZWw6IGdldE1lc3NhZ2UoJ1NvdXJjZScpLCBhbGlnbjogJ2lubGluZSd9KSxcblx0XHRcdG5ldyBPTy51aS5GaWVsZExheW91dChnZXREcm9wRG93bihpbnB1dE9uQ2hhbmdlKSwge2xhYmVsOiBnZXRNZXNzYWdlKCdMaWNlbnNlJyksIGFsaWduOiAnaW5saW5lJ30pLFxuXHRcdFx0bmV3IE9PLnVpLkZpZWxkTGF5b3V0KGdldEFkZEl0ZW1CdXR0b24oYWRkSXRlbU9uQ2xpY2ssIGlucHV0T25DaGFuZ2UpLCB7YWxpZ246ICdpbmxpbmUnfSksXG5cdFx0XHRuZXcgT08udWkuRmllbGRMYXlvdXQoZ2V0RGVsZXRlSXRlbUJ1dHRvbihkZWxldGVUaGlzSXRlbSwgaW5wdXRPbkNoYW5nZSksIHthbGlnbjogJ2lubGluZSd9KSxcblx0XHRdKTtcblxuXHRcdHJldHVybiBmb2xsb3dVcEZpZWxkc2V0O1xuXHR9O1xuXG5cdHBhcmVudEZpZWxkU2V0LmFkZEl0ZW1zKFtpbml0aWFsRmllbGRzZXRdKTtcblxuXHRwYXJlbnRGaWVsZFNldC5vbignY2hhbmdlJywgKCkgPT4ge1xuXHRcdG1vZGlmeUF0dHJpYnV0aW9uKHskYm9keSwgcGFyZW50RmllbGRTZXR9KTtcblx0fSk7XG5cblx0cmV0dXJuIHBhcmVudEZpZWxkU2V0O1xufTtcblxuZXhwb3J0IHtnZW5lcmF0ZVRleHRJbnB1dFdpdGhEcm9wZG93bn07XG4iLCAiaW1wb3J0IHttb2RpZnlWaXN1YWxFZGl0b3JDaGFuZ2VUYWcsIG1vZGlmeVdpa2lFZGl0b3JDaGFuZ2VUYWd9IGZyb20gJy4vbW9kaWZ5Q2hhbmdlVGFnJztcbmltcG9ydCB7Z2VuZXJhdGVUZXh0SW5wdXRXaXRoRHJvcGRvd259IGZyb20gJy4vZ2VuZXJhdGVUZXh0SW5wdXRXaXRoRHJvcGRvd24nO1xuXG5jb25zdCBnZW5lcmF0ZVZpc3VhbEVkaXRvckNoZWNrYm94TGF5b3V0ID0gKHtcblx0aW5wdXRJZCxcblx0bGFiZWwsXG5cdCRib2R5LFxuXHRjaGFuZ2VUYWcsXG59OiB7XG5cdGlucHV0SWQ/OiBzdHJpbmc7XG5cdGxhYmVsOiBzdHJpbmc7XG5cdCRib2R5OiBKUXVlcnk8SFRNTEVsZW1lbnQ+O1xuXHRjaGFuZ2VUYWc/OiBzdHJpbmc7XG59KSA9PiB7XG5cdGNvbnN0IGNoZWNrYm94OiBPTy51aS5DaGVja2JveElucHV0V2lkZ2V0ID0gbmV3IE9PLnVpLkNoZWNrYm94SW5wdXRXaWRnZXQoe1xuXHRcdHNlbGVjdGVkOiBmYWxzZSxcblx0fSk7XG5cblx0aWYgKGlucHV0SWQpIHtcblx0XHRjaGVja2JveC5zZXRJbnB1dElkKGlucHV0SWQpO1xuXHR9XG5cblx0aWYgKGNoYW5nZVRhZykge1xuXHRcdG1vZGlmeVZpc3VhbEVkaXRvckNoYW5nZVRhZyh7Y2hhbmdlVGFnLCBjaGVja2JveH0pO1xuXHR9XG5cblx0Y29uc3QgdGV4dElucHV0V2l0aERyb3Bkb3duID0gZ2VuZXJhdGVUZXh0SW5wdXRXaXRoRHJvcGRvd24oeyRib2R5fSk7XG5cblx0Y2hlY2tib3gub24oJ2NoYW5nZScsIChzZWxlY3RlZCkgPT4ge1xuXHRcdHRleHRJbnB1dFdpdGhEcm9wZG93bi4kZWxlbWVudC5wcm9wKCdkaXNhYmxlZCcsICFzZWxlY3RlZCk7XG5cdH0pO1xuXG5cdGNvbnN0IGNoZWNrYm94TGF5b3V0OiBPTy51aS5GaWVsZExheW91dDxPTy51aS5DaGVja2JveElucHV0V2lkZ2V0PiA9IG5ldyBPTy51aS5GaWVsZExheW91dChjaGVja2JveCwge1xuXHRcdGFsaWduOiAnaW5saW5lJyxcblx0XHRsYWJlbCxcblx0fSk7XG5cblx0Y29uc3QgJGxheW91dCA9ICQoJzxkaXY+JykuYXR0cignaWQnLCAnZWZhLWFyZWEnKS5hcHBlbmQoY2hlY2tib3hMYXlvdXQuJGVsZW1lbnQsIHRleHRJbnB1dFdpdGhEcm9wZG93bi4kZWxlbWVudCk7XG5cblx0cmV0dXJuICRsYXlvdXQ7XG59O1xuXG5jb25zdCBnZW5lcmF0ZVdpa2lFZGl0b3JDaGVja2JveExheW91dCA9ICh7XG5cdGlucHV0SWQsXG5cdGxhYmVsLFxuXHRjaGFuZ2VUYWcsXG5cdCRib2R5LFxuXHQkZWRpdEZvcm0sXG59OiB7XG5cdGlucHV0SWQ/OiBzdHJpbmc7XG5cdGxhYmVsOiBzdHJpbmc7XG5cdGNoYW5nZVRhZz86IHN0cmluZztcblx0JGJvZHk6IEpRdWVyeTtcblx0JGVkaXRGb3JtOiBKUXVlcnk7XG59KSA9PiB7XG5cdGNvbnN0IGNoZWNrYm94OiBPTy51aS5DaGVja2JveElucHV0V2lkZ2V0ID0gbmV3IE9PLnVpLkNoZWNrYm94SW5wdXRXaWRnZXQoe1xuXHRcdHNlbGVjdGVkOiBmYWxzZSxcblx0fSk7XG5cblx0aWYgKGlucHV0SWQpIHtcblx0XHRjaGVja2JveC5zZXRJbnB1dElkKGlucHV0SWQpO1xuXHR9XG5cblx0aWYgKGNoYW5nZVRhZykge1xuXHRcdG1vZGlmeVdpa2lFZGl0b3JDaGFuZ2VUYWcoe2NoYW5nZVRhZywgY2hlY2tib3gsICRlZGl0Rm9ybX0pO1xuXHR9XG5cblx0Y29uc3QgdGV4dElucHV0V2l0aERyb3Bkb3duID0gZ2VuZXJhdGVUZXh0SW5wdXRXaXRoRHJvcGRvd24oeyRib2R5fSk7XG5cblx0Y2hlY2tib3gub24oJ2NoYW5nZScsIChzZWxlY3RlZCkgPT4ge1xuXHRcdHRleHRJbnB1dFdpdGhEcm9wZG93bi4kZWxlbWVudC5wcm9wKCdkaXNhYmxlZCcsICFzZWxlY3RlZCk7XG5cdH0pO1xuXG5cdGNvbnN0IGNoZWNrYm94TGF5b3V0OiBPTy51aS5GaWVsZExheW91dDxPTy51aS5DaGVja2JveElucHV0V2lkZ2V0PiA9IG5ldyBPTy51aS5GaWVsZExheW91dChjaGVja2JveCwge1xuXHRcdGFsaWduOiAnaW5saW5lJyxcblx0XHRsYWJlbCxcblx0fSk7XG5cblx0Y29uc3QgJGxheW91dCA9ICQoJzxkaXY+JykuYXR0cignaWQnLCAnZWZhLWFyZWEnKS5hcHBlbmQoY2hlY2tib3hMYXlvdXQuJGVsZW1lbnQsIHRleHRJbnB1dFdpdGhEcm9wZG93bi4kZWxlbWVudCk7XG5cblx0cmV0dXJuICRsYXlvdXQ7XG59O1xuZXhwb3J0IHtnZW5lcmF0ZVZpc3VhbEVkaXRvckNoZWNrYm94TGF5b3V0LCBnZW5lcmF0ZVdpa2lFZGl0b3JDaGVja2JveExheW91dH07XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICd+L0VkaXRmb3JtX0F0dHJpYnV0aW9uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge2FwcGVuZFRleHRUb1N1bW1hcnl9IGZyb20gJy4vdXRpbC9jaGFuZ2VTdW1tYXJ5JztcbmltcG9ydCB7Z2VuZXJhdGVWaXN1YWxFZGl0b3JDaGVja2JveExheW91dH0gZnJvbSAnLi91dGlsL2dlbmVyYXRlQ2hlY2tib3hMYXlvdXQnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL2kxOG4nO1xuXG5jb25zdCBwcm9jZXNzVmlzdWFsRWRpdG9yID0gKHskYm9keX06IHskYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD59KTogdm9pZCA9PiB7XG5cdC8vIEd1YXJkIGFnYWluc3QgZG91YmxlIGluY2x1c2lvbnNcblx0aWYgKG13LmNvbmZpZy5nZXQoT1BUSU9OUy5jb25maWdLZXkpKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgJHRhcmdldDogSlF1ZXJ5ID0gJGJvZHkuZmluZChgLiR7T1BUSU9OUy50YXJnZXRDbGFzc1ZlfWApO1xuXHRpZiAoISR0YXJnZXQubGVuZ3RoKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0bXcuY29uZmlnLnNldChPUFRJT05TLmNvbmZpZ0tleSwgdHJ1ZSk7XG5cblx0Y29uc3QgJGxheW91dCA9IGdlbmVyYXRlVmlzdWFsRWRpdG9yQ2hlY2tib3hMYXlvdXQoe1xuXHRcdGlucHV0SWQ6IE9QVElPTlMuaW5wdXRJZCxcblx0XHRsYWJlbDogZ2V0TWVzc2FnZSgnVGhpcmRQYXJ0eUNvbnRlbnRDb250YWluZWQnKSxcblx0XHRjaGFuZ2VUYWc6IE9QVElPTlMuY2hhbmdlVGFnLFxuXHRcdCRib2R5LFxuXHR9KTtcblxuXHRpZiAoISRib2R5LmZpbmQoYCMke09QVElPTlMuaW5wdXRJZH1gKS5sZW5ndGgpIHtcblx0XHQkdGFyZ2V0LmFwcGVuZCgkbGF5b3V0KTtcblx0fVxuXG5cdG13Lmhvb2soJ3ZlLmFjdGl2YXRpb25Db21wbGV0ZScpLmFkZCgoKSA9PiB7XG5cdFx0Y29uc3Qge3RhcmdldH0gPSB3aW5kb3cudmUuaW5pdDtcblx0XHRjb25zdCB7c2F2ZURpYWxvZ30gPSB0YXJnZXQ7XG5cblx0XHRzYXZlRGlhbG9nLm9uKCdzYXZlJywgKCkgPT4ge1xuXHRcdFx0Y29uc3QgY3VzdG9tU3VtbWFyeSA9IFN0cmluZygkYm9keS5maW5kKCdpbnB1dFtuYW1lPXdwQXR0cmlidXRpb25zXScpLnZhbCgpKTtcblx0XHRcdGNvbnN0ICR3cFN1bW1hcnkgPSB0YXJnZXQuc2F2ZURpYWxvZy5lZGl0U3VtbWFyeUlucHV0LiRpbnB1dDtcblx0XHRcdGFwcGVuZFRleHRUb1N1bW1hcnkoe2N1c3RvbVN1bW1hcnksICR3cFN1bW1hcnl9KTtcblx0XHR9KTtcblx0fSk7XG59O1xuXG5leHBvcnQge3Byb2Nlc3NWaXN1YWxFZGl0b3J9O1xuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnfi9FZGl0Zm9ybV9BdHRyaWJ1dGlvbi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHthcHBlbmRUZXh0VG9TdW1tYXJ5fSBmcm9tICcuL3V0aWwvY2hhbmdlU3VtbWFyeSc7XG5pbXBvcnQge2dlbmVyYXRlV2lraUVkaXRvckNoZWNrYm94TGF5b3V0fSBmcm9tICcuL3V0aWwvZ2VuZXJhdGVDaGVja2JveExheW91dCc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vaTE4bic7XG5cbmNvbnN0IHByb2Nlc3NXaWtpRWRpdG9yID0gKHskYm9keSwgJGVkaXRGb3JtfTogeyRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50PjsgJGVkaXRGb3JtOiBKUXVlcnl9KTogdm9pZCA9PiB7XG5cdC8vIEd1YXJkIGFnYWluc3QgZG91YmxlIGluY2x1c2lvbnNcblx0aWYgKG13LmNvbmZpZy5nZXQoT1BUSU9OUy5jb25maWdLZXkpKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgJHRhcmdldDogSlF1ZXJ5ID0gJGVkaXRGb3JtLmZpbmQoT1BUSU9OUy50YXJnZXRXaWtpRWRpdG9yKTtcblx0aWYgKCEkdGFyZ2V0Lmxlbmd0aCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdG13LmNvbmZpZy5zZXQoT1BUSU9OUy5jb25maWdLZXksIHRydWUpO1xuXG5cdGNvbnN0ICRsYXlvdXQgPSBnZW5lcmF0ZVdpa2lFZGl0b3JDaGVja2JveExheW91dCh7XG5cdFx0aW5wdXRJZDogT1BUSU9OUy5pbnB1dElkLFxuXHRcdGxhYmVsOiBnZXRNZXNzYWdlKCdUaGlyZFBhcnR5Q29udGVudENvbnRhaW5lZCcpLFxuXHRcdCRib2R5LFxuXHRcdCRlZGl0Rm9ybSxcblx0XHRjaGFuZ2VUYWc6IE9QVElPTlMuY2hhbmdlVGFnLFxuXHR9KTtcblxuXHRpZiAoISRib2R5LmZpbmQoYCMke09QVElPTlMuaW5wdXRJZH1gKS5sZW5ndGgpIHtcblx0XHQkdGFyZ2V0LmFmdGVyKCRsYXlvdXQpO1xuXHR9XG5cblx0JGVkaXRGb3JtLm9uKCdzdWJtaXQnLCAoKSA9PiB7XG5cdFx0Y29uc3QgY3VzdG9tU3VtbWFyeSA9IFN0cmluZygkYm9keS5maW5kKCdpbnB1dFtuYW1lPXdwQXR0cmlidXRpb25zXScpLnZhbCgpKTtcblx0XHRjb25zdCAkd3BTdW1tYXJ5ID0gJGVkaXRGb3JtLmZpbmQoJ2lucHV0W25hbWU9d3BTdW1tYXJ5XScpO1xuXHRcdGFwcGVuZFRleHRUb1N1bW1hcnkoe2N1c3RvbVN1bW1hcnksICR3cFN1bW1hcnl9KTtcblx0fSk7XG59O1xuXG5leHBvcnQge3Byb2Nlc3NXaWtpRWRpdG9yfTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNDLElBQUFBLFlBQWE7QUFDYixJQUFBQyxZQUFhO0FBQ2IsSUFBQUMsVUFBVztBQUNYLElBQUFDLGdCQUFpQjtBQUNqQixJQUFBQyxtQkFBb0I7O0FDSnJCLElBQUFDLHFCQUFzQkMsUUFBQSxpQkFBQTs7QUNEdEIsSUFBTUMsc0JBQXNCQSxDQUFDO0VBQUNDO0VBQWVDO0FBQVUsTUFBeUQ7QUFBQSxNQUFBQztBQUMvRyxRQUFNQyxpQkFBQUQsa0JBQXlCRCxXQUFXRyxJQUFJLE9BQUEsUUFBQUYsb0JBQUEsU0FBQUEsa0JBQTRCO0FBRTFFRCxhQUFXRyxJQUFJRCxjQUFjRSxLQUFLLElBQUEsR0FBQUMsT0FBT0gsZUFBYSxHQUFBLEVBQUFHLE9BQUlOLGFBQWEsSUFBS0EsYUFBYSxFQUFFTyxRQUFRLFFBQVE7QUFDNUc7O0FDSkEsSUFBTUMsOEJBQThCQSxDQUFDO0VBQ3BDZixXQUFBZ0I7RUFDQUM7QUFDRCxNQUdZO0FBQ1hBLFdBQVNDLEdBQUcsVUFBVSxNQUFZO0FBQUEsUUFBQUMsdUJBQUFDLHdCQUFBQztBQUNqQyxVQUFNQyxxQkFBc0JDLHNCQUFxQztBQUNoRSxhQUFPTixTQUFTTyxXQUFXLElBQUEsR0FBQVgsT0FDckJVLGtCQUFnQixHQUFBLEVBQUFWLE9BQUlHLFVBQVMsSUFDaENPLGlCQUFpQkUsUUFBQSxJQUFBWixPQUFZRyxVQUFTLEdBQUksRUFBRTtJQUNoRDtBQUVBLFFBQUlVLGFBQXFCO0FBQ3pCQSxpQkFBYUosb0JBQUFILHlCQUFBQywwQkFBbUJDLHlCQUFBTSxPQUFPQyxHQUFHQyxLQUFLQyxPQUFPQyxZQUFXQyxrQkFBQSxRQUFBWiwyQkFBQSxTQUFBLFNBQWpDQSx1QkFBQWEsS0FBQVosc0JBQWdELE9BQUEsUUFBQUYsMEJBQUEsU0FBQUEsd0JBQUssRUFBRTtBQUN2RlEsV0FBT0MsR0FBR0MsS0FBS0MsT0FBT0MsV0FBV0MsZUFBZSxNQUFjO0FBQzdELGFBQU9OO0lBQ1I7RUFDRCxDQUFDO0FBQ0Y7QUFFQSxJQUFNUSw0QkFBNEJBLENBQUM7RUFDbENsQyxXQUFBZ0I7RUFDQUM7RUFDQWtCO0FBQ0QsTUFJWTtBQUNYbEIsV0FBU0MsR0FBRyxVQUFVLE1BQVk7QUFBQSxRQUFBa0IsdUJBQUFDO0FBQ2pDLFVBQU1mLHFCQUFzQkMsc0JBQXFDO0FBQ2hFLGFBQU9OLFNBQVNPLFdBQVcsSUFBQSxHQUFBWCxPQUNyQlUsa0JBQWdCLEdBQUEsRUFBQVYsT0FBSUcsVUFBUyxJQUNoQ08saUJBQWlCRSxRQUFBLElBQUFaLE9BQVlHLFVBQVMsR0FBSSxFQUFFO0lBQ2hEO0FBRUEsUUFBSVUsYUFBcUI7QUFFekIsVUFBTVksZ0JBQXdCQyxFQUFFLFNBQVMsRUFBRUMsS0FBSztNQUMvQ0MsSUFBSTtNQUNKQyxNQUFNO01BQ05DLE1BQU07TUFDTkMsT0FBTztJQUNSLENBQUM7QUFDRCxVQUFNQyxRQUFRVixVQUFVVyxRQUFRLE1BQU07QUFDdEMsVUFBTUMsc0JBQThCRixNQUFNRyxLQUFLLDBCQUEwQjtBQUN6RSxRQUFJLENBQUNELG9CQUFvQkUsUUFBUTtBQUNoQ0osWUFBTUssUUFBUVosYUFBYTtJQUM1QjtBQUNBWixpQkFBYUosb0JBQUFjLHlCQUFBQyx5QkFBbUJVLG9CQUFvQnBDLElBQUksT0FBQSxRQUFBMEIsMkJBQUEsU0FBQSxTQUF4QkEsdUJBQTJCYyxTQUFTLE9BQUEsUUFBQWYsMEJBQUEsU0FBQUEsd0JBQUssRUFBRTtBQUMzRVcsd0JBQW9CcEMsSUFBSWUsVUFBVTtFQUNuQyxDQUFDO0FBQ0Y7O0FDdERBLElBQU0wQixXQUFXLENBQ2hCO0VBQ0NDLE9BQU87RUFDUEMsTUFBTTtBQUNQLEdBQ0E7RUFDQ0QsT0FBTztFQUNQQyxNQUFNO0FBQ1AsR0FDQTtFQUNDRCxPQUFPO0VBQ1BDLE1BQU07QUFDUCxHQUNBO0VBQ0NELE9BQU87RUFDUEMsTUFBTTtBQUNQLEdBQ0E7RUFDQ0QsT0FBTztFQUNQQyxNQUFNO0FBQ1AsQ0FBQTs7QUNwQkQsSUFBQUMsb0JBQXVCbEQsUUFBQSxpQkFBQTtBQUV2QixJQUFNbUQsa0JBQWtCQSxNQUFNO0FBQzdCLFNBQU87SUFDTkMsTUFBQSxHQUFLRixrQkFBQUcsVUFBUztNQUNiQyxJQUFJO01BQ0pDLElBQUk7SUFDTCxDQUFDO0lBQ0RDLFNBQUEsR0FBUU4sa0JBQUFHLFVBQVM7TUFDaEJDLElBQUk7TUFDSkMsSUFBSTtJQUNMLENBQUM7SUFDREUsU0FBQSxHQUFRUCxrQkFBQUcsVUFBUztNQUNoQkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNESSxVQUFBLEdBQVNSLGtCQUFBRyxVQUFTO01BQ2pCQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0QseUJBQUEsR0FBd0JKLGtCQUFBRyxVQUFTO01BQ2hDQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0RLLDZCQUFBLEdBQTRCVCxrQkFBQUcsVUFBUztNQUNwQ0MsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNETSx5QkFBQSxHQUF3QlYsa0JBQUFHLFVBQVM7TUFDaENDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7RUFDRjtBQUNEO0FBRUEsSUFBTU8sZUFBZVYsZ0JBQWdCO0FBRXJDLElBQU1XLGFBQWdEQyxTQUFRO0FBQzdELFNBQU9GLGFBQWFFLEdBQUcsS0FBS0E7QUFDN0I7O0FDNUNBLElBQU1DLG9CQUFvQkEsQ0FBQztFQUMxQnhCO0VBQ0F5QjtBQUNELE1BR007QUFDTCxRQUFNQyxxQkFBc0JDLG9CQUF5QztBQUNwRSxRQUFJQyxhQUFxQjtBQUV6QixVQUFNQyxtQkFBb0JDLGNBQXVEO0FBQ2hGLFlBQU1DLGVBQTBDRCxTQUM5Q0UsUUFBUSxFQUNSQyxpQkFBaUI7QUFDbkIsYUFBT0YsZUFBZ0JBLGFBQWFHLFFBQVEsSUFBZTtJQUM1RDtBQUFBLFFBQUFDLFlBQUFDLDJCQUVrQ1QsZUFBZVUsU0FBUyxDQUFBLEdBQUFDO0FBQUEsUUFBQTtBQUExRCxXQUFBSCxVQUFBSSxFQUFBLEdBQUEsRUFBQUQsUUFBQUgsVUFBQUssRUFBQSxHQUFBQyxRQUF1RjtBQUFBLGNBQTVFQyxzQkFBQUosTUFBQXZDO0FBQ1YsY0FBTTRDLFlBQVksQ0FBQTtBQUFDLFlBQUFDLGFBQUFSLDJCQUVPTSxvQkFBb0JMLFNBQVMsQ0FBQSxHQUFBUTtBQUFBLFlBQUE7QUFBdkQsZUFBQUQsV0FBQUwsRUFBQSxHQUFBLEVBQUFNLFNBQUFELFdBQUFKLEVBQUEsR0FBQUMsUUFBaUY7QUFBQSxrQkFBdEVLLGNBQUFELE9BQUE5QztBQUNWLGtCQUFNZ0QsUUFBUUQsWUFBWUUsU0FBUztBQUNuQyxnQkFBSWpEO0FBRUosZ0JBQUlnRCxNQUFNRSxTQUFTLFVBQVUsR0FBRztBQUMvQmxELHNCQUFTZ0QsTUFBZ0NHLFNBQVM7WUFDbkQsV0FBV0gsTUFBTUUsU0FBUyxTQUFTLEdBQUc7QUFDckNsRCxzQkFBUThCLGlCQUFpQmtCLEtBQTZCO1lBQ3ZEO0FBRUEsZ0JBQUloRCxPQUFPO0FBQ1Y0Qyx3QkFBVUEsVUFBVXZDLE1BQU0sSUFBSUw7WUFDL0I7VUFDRDtRQUFBLFNBQUFvRCxLQUFBO0FBQUFQLHFCQUFBUSxFQUFBRCxHQUFBO1FBQUEsVUFBQTtBQUFBUCxxQkFBQVMsRUFBQTtRQUFBO0FBRUF6QixxQkFBYWUsVUFBVVcsS0FBSyxJQUFJO01BQ2pDO0lBQUEsU0FBQUgsS0FBQTtBQUFBaEIsZ0JBQUFpQixFQUFBRCxHQUFBO0lBQUEsVUFBQTtBQUFBaEIsZ0JBQUFrQixFQUFBO0lBQUE7QUFFQUUsWUFBUUMsSUFBSTVCLFVBQVU7QUFFdEIsV0FBT0E7RUFDUjtBQUVBLE1BQUk2QixlQUF1QjtBQUUzQixRQUFNQyxrQkFBMEJoRSxFQUFFLFNBQVMsRUFBRUMsS0FBSztJQUNqREMsSUFBSTtJQUNKQyxNQUFNO0lBQ05DLE1BQU07SUFDTkMsT0FBTztFQUNSLENBQUM7QUFDRCxRQUFNNEQsd0JBQWdDM0QsTUFBTUcsS0FBSyw0QkFBNEI7QUFDN0UsTUFBSSxDQUFDd0Qsc0JBQXNCdkQsUUFBUTtBQUNsQ0osVUFBTUssUUFBUXFELGVBQWU7RUFDOUI7QUFFQUQsaUJBQWUvQixtQkFBbUJELGNBQWM7QUFDaERrQyx3QkFBc0I3RixJQUFJMkYsWUFBWTtBQUN2Qzs7QUN0REEsSUFBTUcsZ0NBQWdDQSxDQUFDO0VBQUM1RDtBQUFLLE1BQW9DO0FBQ2hGLFFBQU02RCxlQUFnQkMsY0FBdUM7QUFDNUQsVUFBTUMsWUFBWSxJQUFJQyxHQUFHQyxHQUFHQyxnQkFBZ0I7TUFDM0NDLGFBQWE3QyxXQUFXLFFBQVE7SUFDakMsQ0FBQztBQUVELFFBQUl3QyxVQUFVO0FBQ2JDLGdCQUFVMUYsR0FBRyxVQUFVLE1BQU07QUFDNUJ5RixpQkFBUztNQUNWLENBQUM7SUFDRjtBQUVBLFdBQU9DO0VBQ1I7QUFFQSxRQUFNSyxjQUFlTixjQUF1QztBQUMzRCxVQUFNaEMsV0FBaUMsSUFBSWtDLEdBQUdDLEdBQUdJLGVBQWU7QUFFaEUsVUFBTUMsY0FBd0MsQ0FBQTtBQUU5QyxhQUFBQyxLQUFBLEdBQUFDLFlBQTRCakUsVUFBQWdFLEtBQUFDLFVBQUFwRSxRQUFBbUUsTUFBVTtBQUF0QyxZQUFXO1FBQUM5RDtRQUFNRDtNQUFLLElBQUFnRSxVQUFBRCxFQUFBO0FBQ3RCRCxrQkFBWUEsWUFBWWxFLE1BQU0sSUFBSSxJQUFJNEQsR0FBR0MsR0FBR1EsaUJBQWlCO1FBQzVEaEU7UUFDQUQ7TUFDRCxDQUFDO0lBQ0Y7QUFFQXNCLGFBQVNFLFFBQVEsRUFBRTBDLFNBQVNKLFdBQVc7QUFFdkMsUUFBSVIsVUFBVTtBQUNiaEMsZUFBU3pELEdBQUcsVUFBVSxNQUFNO0FBQzNCeUYsaUJBQVM7TUFDVixDQUFDO0lBQ0Y7QUFFQSxXQUFPaEM7RUFDUjtBQUVBLFFBQU02QyxtQkFBbUJBLElBQUlDLGFBQW1FO0FBQy9GLFVBQU1DLGdCQUFnQixJQUFJYixHQUFHQyxHQUFHYSxrQkFBa0I7TUFDakR0RSxPQUFPYyxXQUFXLEtBQUs7SUFDeEIsQ0FBQztBQUVELFFBQUlzRCxVQUFVO0FBQUEsVUFBQUcsYUFBQTNDLDJCQUNTd0MsUUFBQSxHQUFBSTtBQUFBLFVBQUE7QUFBdEIsYUFBQUQsV0FBQXhDLEVBQUEsR0FBQSxFQUFBeUMsU0FBQUQsV0FBQXZDLEVBQUEsR0FBQUMsUUFBZ0M7QUFBQSxnQkFBckJ3QyxVQUFBRCxPQUFBakY7QUFDVjhFLHdCQUFjeEcsR0FBRyxTQUFTNEcsT0FBTztRQUNsQztNQUFBLFNBQUE5QixLQUFBO0FBQUE0QixtQkFBQTNCLEVBQUFELEdBQUE7TUFBQSxVQUFBO0FBQUE0QixtQkFBQTFCLEVBQUE7TUFBQTtJQUNEO0FBRUEsV0FBT3dCO0VBQ1I7QUFFQSxRQUFNSyxzQkFBc0JBLElBQUlOLGFBQW1FO0FBQ2xHLFVBQU1PLG1CQUFtQixJQUFJbkIsR0FBR0MsR0FBR2Esa0JBQWtCO01BQ3BEdEUsT0FBT2MsV0FBVyxRQUFRO0lBQzNCLENBQUM7QUFFRCxRQUFJc0QsVUFBVTtBQUFBLFVBQUFRLGFBQUFoRCwyQkFDU3dDLFFBQUEsR0FBQVM7QUFBQSxVQUFBO0FBQXRCLGFBQUFELFdBQUE3QyxFQUFBLEdBQUEsRUFBQThDLFNBQUFELFdBQUE1QyxFQUFBLEdBQUFDLFFBQWdDO0FBQUEsZ0JBQXJCd0MsVUFBQUksT0FBQXRGO0FBQ1ZvRiwyQkFBaUI5RyxHQUFHLFNBQVM0RyxPQUFPO1FBQ3JDO01BQUEsU0FBQTlCLEtBQUE7QUFBQWlDLG1CQUFBaEMsRUFBQUQsR0FBQTtNQUFBLFVBQUE7QUFBQWlDLG1CQUFBL0IsRUFBQTtNQUFBO0lBQ0Q7QUFFQSxXQUFPOEI7RUFDUjtBQUVBLFFBQU0xRCxpQkFBaUIsSUFBSXVDLEdBQUdDLEdBQUdxQixlQUFlO0lBQy9DOUUsT0FBT2MsV0FBVyxzQkFBc0I7RUFDekMsQ0FBQztBQUVELFFBQU1pRSxnQkFBZ0JBLE1BQU07QUFDM0IvRCxzQkFBa0I7TUFBQ3hCO01BQU95QjtJQUFjLENBQUM7RUFDMUM7QUFFQSxRQUFNK0QsaUJBQWlCQSxNQUFNO0FBQzVCL0QsbUJBQWVpRCxTQUFTLENBQUNlLG9CQUFvQixDQUFDLENBQUM7RUFDaEQ7QUFFQSxRQUFNQyxvQkFBcUJDLFVBQStCO0FBQ3pEbEUsbUJBQWVtRSxZQUFZLENBQUNELElBQUksQ0FBQztFQUNsQztBQUVBLFFBQU1FLGtCQUFrQixJQUFJN0IsR0FBR0MsR0FBR3FCLGVBQWU7QUFDakRPLGtCQUFnQm5CLFNBQVMsQ0FDeEIsSUFBSVYsR0FBR0MsR0FBRzZCLFlBQVlqQyxhQUFhMEIsYUFBYSxHQUFHO0lBQUMvRSxPQUFPYyxXQUFXLFFBQVE7SUFBR3lFLE9BQU87RUFBUSxDQUFDLEdBQ2pHLElBQUkvQixHQUFHQyxHQUFHNkIsWUFBWTFCLFlBQVltQixhQUFhLEdBQUc7SUFBQy9FLE9BQU9jLFdBQVcsU0FBUztJQUFHeUUsT0FBTztFQUFRLENBQUMsR0FDakcsSUFBSS9CLEdBQUdDLEdBQUc2QixZQUFZbkIsaUJBQWlCYSxnQkFBZ0JELGFBQWEsR0FBRztJQUFDUSxPQUFPO0VBQVEsQ0FBQyxDQUFBLENBQ3hGO0FBRUQsUUFBTU4sc0JBQXNCQSxNQUFNO0FBQ2pDLFVBQU1PLG1CQUFtQixJQUFJaEMsR0FBR0MsR0FBR3FCLGVBQWU7QUFDbEQsVUFBTVcsaUJBQWlCQSxNQUFNO0FBQzVCUCx3QkFBa0JNLGdCQUFnQjtJQUNuQztBQUVBQSxxQkFBaUJ0QixTQUFTLENBQ3pCLElBQUlWLEdBQUdDLEdBQUc2QixZQUFZakMsYUFBYTBCLGFBQWEsR0FBRztNQUFDL0UsT0FBT2MsV0FBVyxRQUFRO01BQUd5RSxPQUFPO0lBQVEsQ0FBQyxHQUNqRyxJQUFJL0IsR0FBR0MsR0FBRzZCLFlBQVkxQixZQUFZbUIsYUFBYSxHQUFHO01BQUMvRSxPQUFPYyxXQUFXLFNBQVM7TUFBR3lFLE9BQU87SUFBUSxDQUFDLEdBQ2pHLElBQUkvQixHQUFHQyxHQUFHNkIsWUFBWW5CLGlCQUFpQmEsZ0JBQWdCRCxhQUFhLEdBQUc7TUFBQ1EsT0FBTztJQUFRLENBQUMsR0FDeEYsSUFBSS9CLEdBQUdDLEdBQUc2QixZQUFZWixvQkFBb0JlLGdCQUFnQlYsYUFBYSxHQUFHO01BQUNRLE9BQU87SUFBUSxDQUFDLENBQUEsQ0FDM0Y7QUFFRCxXQUFPQztFQUNSO0FBRUF2RSxpQkFBZWlELFNBQVMsQ0FBQ21CLGVBQWUsQ0FBQztBQUV6Q3BFLGlCQUFlcEQsR0FBRyxVQUFVLE1BQU07QUFDakNtRCxzQkFBa0I7TUFBQ3hCO01BQU95QjtJQUFjLENBQUM7RUFDMUMsQ0FBQztBQUVELFNBQU9BO0FBQ1I7O0FDakhBLElBQU15RSxxQ0FBcUNBLENBQUM7RUFDM0M5SSxTQUFBK0k7RUFDQTNGO0VBQ0FSO0VBQ0E3QyxXQUFBZ0I7QUFDRCxNQUtNO0FBQ0wsUUFBTUMsV0FBc0MsSUFBSTRGLEdBQUdDLEdBQUdtQyxvQkFBb0I7SUFDekVDLFVBQVU7RUFDWCxDQUFDO0FBRUQsTUFBSUYsVUFBUztBQUNaL0gsYUFBU2tJLFdBQVdILFFBQU87RUFDNUI7QUFFQSxNQUFJaEksWUFBVztBQUNkRCxnQ0FBNEI7TUFBQ2YsV0FBQWdCO01BQVdDO0lBQVEsQ0FBQztFQUNsRDtBQUVBLFFBQU1tSSx3QkFBd0IzQyw4QkFBOEI7SUFBQzVEO0VBQUssQ0FBQztBQUVuRTVCLFdBQVNDLEdBQUcsVUFBV2dJLGNBQWE7QUFDbkNFLDBCQUFzQkMsU0FBU0MsS0FBSyxZQUFZLENBQUNKLFFBQVE7RUFDMUQsQ0FBQztBQUVELFFBQU1LLGlCQUErRCxJQUFJMUMsR0FBR0MsR0FBRzZCLFlBQVkxSCxVQUFVO0lBQ3BHMkgsT0FBTztJQUNQdkY7RUFDRCxDQUFDO0FBRUQsUUFBTW1HLFVBQVVqSCxFQUFFLE9BQU8sRUFBRUMsS0FBSyxNQUFNLFVBQVUsRUFBRWlILE9BQU9GLGVBQWVGLFVBQVVELHNCQUFzQkMsUUFBUTtBQUVoSCxTQUFPRztBQUNSO0FBRUEsSUFBTUUsbUNBQW1DQSxDQUFDO0VBQ3pDekosU0FBQStJO0VBQ0EzRjtFQUNBckQsV0FBQWdCO0VBQ0E2QjtFQUNBVjtBQUNELE1BTU07QUFDTCxRQUFNbEIsV0FBc0MsSUFBSTRGLEdBQUdDLEdBQUdtQyxvQkFBb0I7SUFDekVDLFVBQVU7RUFDWCxDQUFDO0FBRUQsTUFBSUYsVUFBUztBQUNaL0gsYUFBU2tJLFdBQVdILFFBQU87RUFDNUI7QUFFQSxNQUFJaEksWUFBVztBQUNka0IsOEJBQTBCO01BQUNsQyxXQUFBZ0I7TUFBV0M7TUFBVWtCO0lBQVMsQ0FBQztFQUMzRDtBQUVBLFFBQU1pSCx3QkFBd0IzQyw4QkFBOEI7SUFBQzVEO0VBQUssQ0FBQztBQUVuRTVCLFdBQVNDLEdBQUcsVUFBV2dJLGNBQWE7QUFDbkNFLDBCQUFzQkMsU0FBU0MsS0FBSyxZQUFZLENBQUNKLFFBQVE7RUFDMUQsQ0FBQztBQUVELFFBQU1LLGlCQUErRCxJQUFJMUMsR0FBR0MsR0FBRzZCLFlBQVkxSCxVQUFVO0lBQ3BHMkgsT0FBTztJQUNQdkY7RUFDRCxDQUFDO0FBRUQsUUFBTW1HLFVBQVVqSCxFQUFFLE9BQU8sRUFBRUMsS0FBSyxNQUFNLFVBQVUsRUFBRWlILE9BQU9GLGVBQWVGLFVBQVVELHNCQUFzQkMsUUFBUTtBQUVoSCxTQUFPRztBQUNSOztBQzVFQSxJQUFNRyxzQkFBc0JBLENBQUM7RUFBQzlHO0FBQUssTUFBOEM7QUFFaEYsTUFBSStHLEdBQUdDLE9BQU9DLElBQVkvSixTQUFTLEdBQUc7QUFDckM7RUFDRDtBQUVBLFFBQU1nSyxVQUFrQmxILE1BQU1HLEtBQUEsSUFBQW5DLE9BQWlCWCxhQUFhLENBQUU7QUFDOUQsTUFBSSxDQUFDNkosUUFBUTlHLFFBQVE7QUFDcEI7RUFDRDtBQUVBMkcsS0FBR0MsT0FBT0csSUFBWWpLLFdBQVcsSUFBSTtBQUVyQyxRQUFNeUosVUFBVVQsbUNBQW1DO0lBQ2xEOUk7SUFDQW9ELE9BQU9jLFdBQVcsNEJBQTRCO0lBQzlDbkU7SUFDQTZDO0VBQ0QsQ0FBQztBQUVELE1BQUksQ0FBQ0EsTUFBTUcsS0FBQSxJQUFBbkMsT0FBaUJaLE9BQU8sQ0FBRSxFQUFFZ0QsUUFBUTtBQUM5QzhHLFlBQVFOLE9BQU9ELE9BQU87RUFDdkI7QUFFQUksS0FBR0ssS0FBSyx1QkFBdUIsRUFBRUMsSUFBSSxNQUFNO0FBQzFDLFVBQU07TUFBQ3BJO0lBQU0sSUFBSUgsT0FBT0MsR0FBR0M7QUFDM0IsVUFBTTtNQUFDc0k7SUFBVSxJQUFJckk7QUFFckJxSSxlQUFXakosR0FBRyxRQUFRLE1BQU07QUFDM0IsWUFBTVgsZ0JBQWdCNkosT0FBT3ZILE1BQU1HLEtBQUssNEJBQTRCLEVBQUVyQyxJQUFJLENBQUM7QUFDM0UsWUFBTUgsYUFBYXNCLE9BQU9xSSxXQUFXRSxpQkFBaUJDO0FBQ3REaEssMEJBQW9CO1FBQUNDO1FBQWVDO01BQVUsQ0FBQztJQUNoRCxDQUFDO0VBQ0YsQ0FBQztBQUNGOztBQ2xDQSxJQUFNK0osb0JBQW9CQSxDQUFDO0VBQUMxSDtFQUFPVjtBQUFTLE1BQWlFO0FBRTVHLE1BQUl5SCxHQUFHQyxPQUFPQyxJQUFZL0osU0FBUyxHQUFHO0FBQ3JDO0VBQ0Q7QUFFQSxRQUFNZ0ssVUFBa0I1SCxVQUFVYSxLQUFhN0MsZ0JBQWdCO0FBQy9ELE1BQUksQ0FBQzRKLFFBQVE5RyxRQUFRO0FBQ3BCO0VBQ0Q7QUFFQTJHLEtBQUdDLE9BQU9HLElBQVlqSyxXQUFXLElBQUk7QUFFckMsUUFBTXlKLFVBQVVFLGlDQUFpQztJQUNoRHpKO0lBQ0FvRCxPQUFPYyxXQUFXLDRCQUE0QjtJQUM5Q3RCO0lBQ0FWO0lBQ0FuQztFQUNELENBQUM7QUFFRCxNQUFJLENBQUM2QyxNQUFNRyxLQUFBLElBQUFuQyxPQUFpQlosT0FBTyxDQUFFLEVBQUVnRCxRQUFRO0FBQzlDOEcsWUFBUVMsTUFBTWhCLE9BQU87RUFDdEI7QUFFQXJILFlBQVVqQixHQUFHLFVBQVUsTUFBTTtBQUM1QixVQUFNWCxnQkFBZ0I2SixPQUFPdkgsTUFBTUcsS0FBSyw0QkFBNEIsRUFBRXJDLElBQUksQ0FBQztBQUMzRSxVQUFNSCxhQUFhMkIsVUFBVWEsS0FBSyx1QkFBdUI7QUFDekQxQyx3QkFBb0I7TUFBQ0M7TUFBZUM7SUFBVSxDQUFDO0VBQ2hELENBQUM7QUFDRjs7QVQzQkEsTUFBQSxHQUFLSixtQkFBQXFLLFNBQVEsRUFBRUMsS0FBSyxTQUFTQyxTQUFTOUgsT0FBc0M7QUFDM0UrRyxLQUFHSyxLQUFLLG1CQUFtQixFQUFFQyxJQUFLL0gsZUFBb0I7QUFDckRvSSxzQkFBa0I7TUFDakIxSDtNQUNBVjtJQUNELENBQUM7RUFDRixDQUFDO0FBRUR5SCxLQUFHSyxLQUFLLDRCQUE0QixFQUFFQyxJQUFJLE1BQVk7QUFDckRQLHdCQUFvQjtNQUNuQjlHO0lBQ0QsQ0FBQztFQUNGLENBQUM7QUFHRCtHLEtBQUdLLEtBQUssdUJBQXVCLEVBQUVDLElBQUksTUFBTTtBQUMxQyxRQUFJTixHQUFHQyxPQUFPQyxJQUFZL0osU0FBUyxHQUFHO0FBQ3JDNkosU0FBR0MsT0FBT0csSUFBWWpLLFdBQVcsS0FBSztJQUN2QztFQUNELENBQUM7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogWyJjb25maWdLZXkiLCAiY2hhbmdlVGFnIiwgImlucHV0SWQiLCAidGFyZ2V0Q2xhc3NWZSIsICJ0YXJnZXRXaWtpRWRpdG9yIiwgImltcG9ydF9leHRfZ2FkZ2V0MiIsICJyZXF1aXJlIiwgImFwcGVuZFRleHRUb1N1bW1hcnkiLCAiY3VzdG9tU3VtbWFyeSIsICIkd3BTdW1tYXJ5IiwgIl8kd3BTdW1tYXJ5JHZhbCIsICJvcmlnaW5TdW1tYXJ5IiwgInZhbCIsICJ0cmltIiwgImNvbmNhdCIsICJ0cmlnZ2VyIiwgIm1vZGlmeVZpc3VhbEVkaXRvckNoYW5nZVRhZyIsICJjaGFuZ2VUYWcyIiwgImNoZWNrYm94IiwgIm9uIiwgIl93aW5kb3ckdmUkaW5pdCR0YXJnZSIsICJfd2luZG93JHZlJGluaXQkdGFyZ2UyIiwgIl93aW5kb3ckdmUkaW5pdCR0YXJnZTMiLCAiZ2VuZXJhdGVDaGFuZ2VUYWdzIiwgIm9yaWdpbkNoYW5nZVRhZ3MiLCAiaXNTZWxlY3RlZCIsICJyZXBsYWNlIiwgImNoYW5nZVRhZ3MiLCAid2luZG93IiwgInZlIiwgImluaXQiLCAidGFyZ2V0IiwgInNhdmVGaWVsZHMiLCAid3BDaGFuZ2VUYWdzIiwgImNhbGwiLCAibW9kaWZ5V2lraUVkaXRvckNoYW5nZVRhZyIsICIkZWRpdEZvcm0iLCAiXyRvcmlnaW5XcENoYW5nZVRhZ3MkIiwgIl8kb3JpZ2luV3BDaGFuZ2VUYWdzJDIiLCAiJHdwQ2hhbmdlVGFncyIsICIkIiwgImF0dHIiLCAiaWQiLCAibmFtZSIsICJ0eXBlIiwgInZhbHVlIiwgIiRib2R5IiwgInBhcmVudHMiLCAiJG9yaWdpbldwQ2hhbmdlVGFncyIsICJmaW5kIiwgImxlbmd0aCIsICJwcmVwZW5kIiwgInRvU3RyaW5nIiwgIkxJQ0VOU0VTIiwgImxhYmVsIiwgImRhdGEiLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAiZ2V0STE4bk1lc3NhZ2VzIiwgIkFkZCIsICJsb2NhbGl6ZSIsICJlbiIsICJ6aCIsICJEZWxldGUiLCAiU291cmNlIiwgIkxpY2Vuc2UiLCAiVGhpcmRQYXJ0eUNvbnRlbnRDb250YWluZWQiLCAiUWl1d2VuQ29udGVudENvbnRhaW5lZCIsICJpMThuTWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAibW9kaWZ5QXR0cmlidXRpb24iLCAicGFyZW50RmllbGRTZXQiLCAiZ2VuZXJhdGVJbmZvTWFydGl4IiwgImZpZWxkU2V0TGF5b3V0IiwgImZpZWxkc0luZm8iLCAiZ2V0U2VsZWN0ZWRWYWx1ZSIsICJkcm9wZG93biIsICJzZWxlY3RlZEl0ZW0iLCAiZ2V0TWVudSIsICJmaW5kU2VsZWN0ZWRJdGVtIiwgImdldERhdGEiLCAiX2l0ZXJhdG9yIiwgIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwgImdldEl0ZW1zIiwgIl9zdGVwIiwgInMiLCAibiIsICJkb25lIiwgImF0dHJpYnV0aW9uRmllbGRzZXQiLCAiZmllbGRJbmZvIiwgIl9pdGVyYXRvcjIiLCAiX3N0ZXAyIiwgImZpZWxkTGF5b3V0IiwgImZpZWxkIiwgImdldEZpZWxkIiwgInN1cHBvcnRzIiwgImdldFZhbHVlIiwgImVyciIsICJlIiwgImYiLCAiam9pbiIsICJjb25zb2xlIiwgImxvZyIsICJhdHRyaWJ1dGlvbnMiLCAiJHdwQXR0cmlidXRpb25zIiwgIiRvcmlnaW5XcEF0dHJpYnV0aW9ucyIsICJnZW5lcmF0ZVRleHRJbnB1dFdpdGhEcm9wZG93biIsICJnZXRUZXh0SW5wdXQiLCAib25DaGFuZ2UiLCAidGV4dElucHV0IiwgIk9PIiwgInVpIiwgIlRleHRJbnB1dFdpZGdldCIsICJwbGFjZWhvbGRlciIsICJnZXREcm9wRG93biIsICJEcm9wZG93bldpZGdldCIsICJtZW51T3B0aW9ucyIsICJfaSIsICJfTElDRU5TRVMiLCAiTWVudU9wdGlvbldpZGdldCIsICJhZGRJdGVtcyIsICJnZXRBZGRJdGVtQnV0dG9uIiwgIm9uQ2xpY2tzIiwgImFkZEl0ZW1CdXR0b24iLCAiQnV0dG9uSW5wdXRXaWRnZXQiLCAiX2l0ZXJhdG9yMyIsICJfc3RlcDMiLCAib25DbGljayIsICJnZXREZWxldGVJdGVtQnV0dG9uIiwgImRlbGV0ZUl0ZW1CdXR0b24iLCAiX2l0ZXJhdG9yNCIsICJfc3RlcDQiLCAiRmllbGRzZXRMYXlvdXQiLCAiaW5wdXRPbkNoYW5nZSIsICJhZGRJdGVtT25DbGljayIsICJnZXRGb2xsb3dVcEZpZWxkc2V0IiwgImRlbGV0ZUl0ZW1PbkNsaWNrIiwgIml0ZW0iLCAicmVtb3ZlSXRlbXMiLCAiaW5pdGlhbEZpZWxkc2V0IiwgIkZpZWxkTGF5b3V0IiwgImFsaWduIiwgImZvbGxvd1VwRmllbGRzZXQiLCAiZGVsZXRlVGhpc0l0ZW0iLCAiZ2VuZXJhdGVWaXN1YWxFZGl0b3JDaGVja2JveExheW91dCIsICJpbnB1dElkMiIsICJDaGVja2JveElucHV0V2lkZ2V0IiwgInNlbGVjdGVkIiwgInNldElucHV0SWQiLCAidGV4dElucHV0V2l0aERyb3Bkb3duIiwgIiRlbGVtZW50IiwgInByb3AiLCAiY2hlY2tib3hMYXlvdXQiLCAiJGxheW91dCIsICJhcHBlbmQiLCAiZ2VuZXJhdGVXaWtpRWRpdG9yQ2hlY2tib3hMYXlvdXQiLCAicHJvY2Vzc1Zpc3VhbEVkaXRvciIsICJtdyIsICJjb25maWciLCAiZ2V0IiwgIiR0YXJnZXQiLCAic2V0IiwgImhvb2siLCAiYWRkIiwgInNhdmVEaWFsb2ciLCAiU3RyaW5nIiwgImVkaXRTdW1tYXJ5SW5wdXQiLCAiJGlucHV0IiwgInByb2Nlc3NXaWtpRWRpdG9yIiwgImFmdGVyIiwgImdldEJvZHkiLCAidGhlbiIsICJlZGl0Rm9ybSJdCn0K

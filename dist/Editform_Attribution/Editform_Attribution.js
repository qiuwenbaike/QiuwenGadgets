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
    const attributions = [];
    const getSelectedValue = (dropdown) => {
      const selectedItem = dropdown.getMenu().findSelectedItem();
      return selectedItem ? selectedItem.getData() : void 0;
    };
    var _iterator = _createForOfIteratorHelper(fieldSetLayout.getItems()), _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done; ) {
        const attributionFieldset = _step.value;
        const attribution = [];
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
              attribution[attribution.length] = value;
            }
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
        attributions[attributions.length] = attribution.join(", ");
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
      const customSummary = String($body.find("input[name=wpAttribution]").val());
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
    const customSummary = String($body.find("input[name=wpAttribution]").val());
    const $wpSummary = $editForm.find("input[name=wpSummary]");
    appendTextToSummary({
      customSummary,
      $wpSummary
    });
    $layout.remove();
    mw.config.set(configKey, false);
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0VkaXRmb3JtX0F0dHJpYnV0aW9uL29wdGlvbnMuanNvbiIsICJzcmMvRWRpdGZvcm1fQXR0cmlidXRpb24vRWRpdGZvcm1fQXR0cmlidXRpb24udHMiLCAic3JjL0VkaXRmb3JtX0F0dHJpYnV0aW9uL21vZHVsZXMvdXRpbC9jaGFuZ2VTdW1tYXJ5LnRzIiwgInNyYy9FZGl0Zm9ybV9BdHRyaWJ1dGlvbi9tb2R1bGVzL3V0aWwvbW9kaWZ5Q2hhbmdlVGFnLnRzIiwgInNyYy9FZGl0Zm9ybV9BdHRyaWJ1dGlvbi9tb2R1bGVzL2NvbnN0YW50LnRzIiwgInNyYy9FZGl0Zm9ybV9BdHRyaWJ1dGlvbi9tb2R1bGVzL2kxOG4udHMiLCAic3JjL0VkaXRmb3JtX0F0dHJpYnV0aW9uL21vZHVsZXMvdXRpbC9tb2RpZnlBdHRyaWJ1dGlvblN1bW1hcnkudHMiLCAic3JjL0VkaXRmb3JtX0F0dHJpYnV0aW9uL21vZHVsZXMvdXRpbC9nZW5lcmF0ZVRleHRJbnB1dFdpdGhEcm9wZG93bi50cyIsICJzcmMvRWRpdGZvcm1fQXR0cmlidXRpb24vbW9kdWxlcy91dGlsL2dlbmVyYXRlQ2hlY2tib3hMYXlvdXQudHMiLCAic3JjL0VkaXRmb3JtX0F0dHJpYnV0aW9uL21vZHVsZXMvcHJvY2Vzc1Zpc3VhbEVkaXRvci50cyIsICJzcmMvRWRpdGZvcm1fQXR0cmlidXRpb24vbW9kdWxlcy9wcm9jZXNzV2lraUVkaXRvci50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsie1xuXHRcImNvbmZpZ0tleVwiOiBcImdhZGdldC1FZGl0Zm9ybV9BdHRyaWJ1dGlvbl9fSW5pdGlhbGl6ZWRcIixcblx0XCJjaGFuZ2VUYWdcIjogXCJBdHRyaWJ1dGlvbl9hZGRlZFwiLFxuXHRcImlucHV0SWRcIjogXCJlZGl0Zm9ybV9hdHRyaWJ1dGlvblwiLFxuXHRcInRhcmdldENsYXNzVmVcIjogXCJ2ZS11aS1td1NhdmVEaWFsb2ctY2hlY2tib3hlc1wiLFxuXHRcInRhcmdldFdpa2lFZGl0b3JcIjogXCIuZWRpdENoZWNrYm94ZXMgLm9vLXVpLWhvcml6b250YWxMYXlvdXRcIlxufVxuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtnZXRCb2R5fSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuaW1wb3J0IHtwcm9jZXNzVmlzdWFsRWRpdG9yfSBmcm9tICcuL21vZHVsZXMvcHJvY2Vzc1Zpc3VhbEVkaXRvcic7XG5pbXBvcnQge3Byb2Nlc3NXaWtpRWRpdG9yfSBmcm9tICcuL21vZHVsZXMvcHJvY2Vzc1dpa2lFZGl0b3InO1xuXG4vKipcbiAqIEBkZXNjcmlwdGlvbiDnrKzkuInmlrnmnaXmupDnibnmrorlo7DmmI5cbiAqL1xudm9pZCBnZXRCb2R5KCkudGhlbihmdW5jdGlvbiBlZGl0Rm9ybSgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkIHtcblx0bXcuaG9vaygnd2lraXBhZ2UuZWRpdGZvcm0nKS5hZGQoKCRlZGl0Rm9ybSk6IHZvaWQgPT4ge1xuXHRcdHByb2Nlc3NXaWtpRWRpdG9yKHtcblx0XHRcdCRib2R5LFxuXHRcdFx0JGVkaXRGb3JtLFxuXHRcdH0pO1xuXHR9KTtcblxuXHRtdy5ob29rKCd2ZS5zYXZlRGlhbG9nLnN0YXRlQ2hhbmdlZCcpLmFkZCgoKTogdm9pZCA9PiB7XG5cdFx0cHJvY2Vzc1Zpc3VhbEVkaXRvcih7XG5cdFx0XHQkYm9keSxcblx0XHR9KTtcblx0fSk7XG5cblx0Ly8gV2hlbiBzd2l0Y2hpbmcgYmV0d2VlbiBWRSBhbmQgTldFLCByZS1pbml0aWFsaXphdGlvbiBpcyByZXF1aXJlZFxuXHRtdy5ob29rKCd2ZS5hY3RpdmF0aW9uQ29tcGxldGUnKS5hZGQoKCkgPT4ge1xuXHRcdGlmIChtdy5jb25maWcuZ2V0KE9QVElPTlMuY29uZmlnS2V5KSkge1xuXHRcdFx0bXcuY29uZmlnLnNldChPUFRJT05TLmNvbmZpZ0tleSwgZmFsc2UpO1xuXHRcdH1cblx0fSk7XG59KTtcbiIsICJjb25zdCBhcHBlbmRUZXh0VG9TdW1tYXJ5ID0gKHtjdXN0b21TdW1tYXJ5LCAkd3BTdW1tYXJ5fToge2N1c3RvbVN1bW1hcnk6IHN0cmluZzsgJHdwU3VtbWFyeTogSlF1ZXJ5fSk6IHZvaWQgPT4ge1xuXHRjb25zdCBvcmlnaW5TdW1tYXJ5OiBzdHJpbmcgPSAoJHdwU3VtbWFyeS52YWwoKSBhcyBzdHJpbmcgfCB1bmRlZmluZWQpID8/ICcnO1xuXG5cdCR3cFN1bW1hcnkudmFsKG9yaWdpblN1bW1hcnkudHJpbSgpID8gYCR7b3JpZ2luU3VtbWFyeX0gJHtjdXN0b21TdW1tYXJ5fWAgOiBjdXN0b21TdW1tYXJ5KS50cmlnZ2VyKCdjaGFuZ2UnKTtcbn07XG5cbmV4cG9ydCB7YXBwZW5kVGV4dFRvU3VtbWFyeX07XG4iLCAiY29uc3QgbW9kaWZ5VmlzdWFsRWRpdG9yQ2hhbmdlVGFnID0gKHtcblx0Y2hhbmdlVGFnLFxuXHRjaGVja2JveCxcbn06IHtcblx0Y2hhbmdlVGFnOiBzdHJpbmc7XG5cdGNoZWNrYm94OiBPTy51aS5DaGVja2JveElucHV0V2lkZ2V0O1xufSk6IHZvaWQgPT4ge1xuXHRjaGVja2JveC5vbignY2hhbmdlJywgKCk6IHZvaWQgPT4ge1xuXHRcdGNvbnN0IGdlbmVyYXRlQ2hhbmdlVGFncyA9IChvcmlnaW5DaGFuZ2VUYWdzOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuXHRcdFx0cmV0dXJuIGNoZWNrYm94LmlzU2VsZWN0ZWQoKVxuXHRcdFx0XHQ/IGAke29yaWdpbkNoYW5nZVRhZ3N9LCR7Y2hhbmdlVGFnfWBcblx0XHRcdFx0OiBvcmlnaW5DaGFuZ2VUYWdzLnJlcGxhY2UoYCwke2NoYW5nZVRhZ31gLCAnJyk7XG5cdFx0fTtcblxuXHRcdGxldCBjaGFuZ2VUYWdzOiBzdHJpbmcgPSAnJztcblx0XHRjaGFuZ2VUYWdzID0gZ2VuZXJhdGVDaGFuZ2VUYWdzKHdpbmRvdy52ZS5pbml0LnRhcmdldC5zYXZlRmllbGRzLndwQ2hhbmdlVGFncz8uKCkgPz8gJycpO1xuXHRcdHdpbmRvdy52ZS5pbml0LnRhcmdldC5zYXZlRmllbGRzLndwQ2hhbmdlVGFncyA9ICgpOiBzdHJpbmcgPT4ge1xuXHRcdFx0cmV0dXJuIGNoYW5nZVRhZ3M7XG5cdFx0fTtcblx0fSk7XG59O1xuXG5jb25zdCBtb2RpZnlXaWtpRWRpdG9yQ2hhbmdlVGFnID0gKHtcblx0Y2hhbmdlVGFnLFxuXHRjaGVja2JveCxcblx0JGVkaXRGb3JtLFxufToge1xuXHRjaGFuZ2VUYWc6IHN0cmluZztcblx0Y2hlY2tib3g6IE9PLnVpLkNoZWNrYm94SW5wdXRXaWRnZXQ7XG5cdCRlZGl0Rm9ybTogSlF1ZXJ5O1xufSk6IHZvaWQgPT4ge1xuXHRjaGVja2JveC5vbignY2hhbmdlJywgKCk6IHZvaWQgPT4ge1xuXHRcdGNvbnN0IGdlbmVyYXRlQ2hhbmdlVGFncyA9IChvcmlnaW5DaGFuZ2VUYWdzOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuXHRcdFx0cmV0dXJuIGNoZWNrYm94LmlzU2VsZWN0ZWQoKVxuXHRcdFx0XHQ/IGAke29yaWdpbkNoYW5nZVRhZ3N9LCR7Y2hhbmdlVGFnfWBcblx0XHRcdFx0OiBvcmlnaW5DaGFuZ2VUYWdzLnJlcGxhY2UoYCwke2NoYW5nZVRhZ31gLCAnJyk7XG5cdFx0fTtcblxuXHRcdGxldCBjaGFuZ2VUYWdzOiBzdHJpbmcgPSAnJztcblxuXHRcdGNvbnN0ICR3cENoYW5nZVRhZ3M6IEpRdWVyeSA9ICQoJzxpbnB1dD4nKS5hdHRyKHtcblx0XHRcdGlkOiAnd3BDaGFuZ2VUYWdzJyxcblx0XHRcdG5hbWU6ICd3cENoYW5nZVRhZ3MnLFxuXHRcdFx0dHlwZTogJ2hpZGRlbicsXG5cdFx0XHR2YWx1ZTogJycsXG5cdFx0fSk7XG5cdFx0Y29uc3QgJGJvZHkgPSAkZWRpdEZvcm0ucGFyZW50cygnYm9keScpO1xuXHRcdGNvbnN0ICRvcmlnaW5XcENoYW5nZVRhZ3M6IEpRdWVyeSA9ICRib2R5LmZpbmQoJ2lucHV0W25hbWU9d3BDaGFuZ2VUYWdzXScpO1xuXHRcdGlmICghJG9yaWdpbldwQ2hhbmdlVGFncy5sZW5ndGgpIHtcblx0XHRcdCRib2R5LnByZXBlbmQoJHdwQ2hhbmdlVGFncyk7XG5cdFx0fVxuXHRcdGNoYW5nZVRhZ3MgPSBnZW5lcmF0ZUNoYW5nZVRhZ3MoJG9yaWdpbldwQ2hhbmdlVGFncy52YWwoKT8udG9TdHJpbmcoKSA/PyAnJyk7XG5cdFx0JG9yaWdpbldwQ2hhbmdlVGFncy52YWwoY2hhbmdlVGFncyk7XG5cdH0pO1xufTtcblxuZXhwb3J0IHttb2RpZnlWaXN1YWxFZGl0b3JDaGFuZ2VUYWcsIG1vZGlmeVdpa2lFZGl0b3JDaGFuZ2VUYWd9O1xuIiwgImNvbnN0IExJQ0VOU0VTID0gW1xuXHR7XG5cdFx0bGFiZWw6ICdDQyBCWS1TQSA0LjAnLFxuXHRcdGRhdGE6ICdodHRwczovL2NyZWF0aXZlY29tbW9ucy5vcmcvbGljZW5zZXMvYnktc2EvNC4wLycsXG5cdH0sXG5cdHtcblx0XHRsYWJlbDogJ0NDIEJZLVNBIDMuMCcsXG5cdFx0ZGF0YTogJ2h0dHBzOi8vY3JlYXRpdmVjb21tb25zLm9yZy9saWNlbnNlcy9ieS1zYS8zLjAvJyxcblx0fSxcblx0e1xuXHRcdGxhYmVsOiAnQ0MgQlktU0EgMy4wIENOJyxcblx0XHRkYXRhOiAnaHR0cHM6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL2xpY2Vuc2VzL2J5LXNhLzMuMC9jbi8nLFxuXHR9LFxuXHR7XG5cdFx0bGFiZWw6ICdDQzAtMS4wJyxcblx0XHRkYXRhOiAnaHR0cHM6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL3B1YmxpY2RvbWFpbi96ZXJvLzEuMC8nLFxuXHR9LFxuXHR7XG5cdFx0bGFiZWw6ICdLT0dMIFR5cGUgSTogQXR0cmlidXRpb24nLFxuXHRcdGRhdGE6ICdodHRwczovL3d3dy5rb2dsLm9yLmtyL2luZm8vbGljZW5zZVR5cGUxLmRvJyxcblx0fSxcbl07XG5cbmV4cG9ydCB7TElDRU5TRVN9O1xuIiwgImltcG9ydCB7bG9jYWxpemV9IGZyb20gJ2V4dC5nYWRnZXQuaTE4bic7XG5cbmNvbnN0IGdldEkxOG5NZXNzYWdlcyA9ICgpID0+IHtcblx0cmV0dXJuIHtcblx0XHRBZGQ6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQWRkJyxcblx0XHRcdHpoOiAn5aKe5YqgJyxcblx0XHR9KSxcblx0XHREZWxldGU6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnRGVsZXRlJyxcblx0XHRcdHpoOiAn56e76ZmkJyxcblx0XHR9KSxcblx0XHRTb3VyY2U6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnU291cmNlJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WGheWuueadpea6kCcsXG5cdFx0XHQnemgtaGFudCc6ICflhaflrrnkvobmupAnLFxuXHRcdH0pLFxuXHRcdExpY2Vuc2U6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnTGljZW5zZScsXG5cdFx0XHQnemgtaGFucyc6ICforrjlj6/or4EnLFxuXHRcdFx0J3poLWhhbnQnOiAn6Kix5Y+v6K2JJyxcblx0XHR9KSxcblx0XHQnU291cmNlcyBhbmQgTGljZW5zZXMnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1NvdXJjZXMgYW5kIExpY2Vuc2VzJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WGheWuueadpea6kOWPiuiuuOWPr+ivgScsXG5cdFx0XHQnemgtaGFudCc6ICflhaflrrnkvobmupDlj4roqLHlj6/orYknLFxuXHRcdH0pLFxuXHRcdFRoaXJkUGFydHlDb250ZW50Q29udGFpbmVkOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1RoaXMgZWRpdG9yIGNvbnRhaW5zIHRoaXJkLXBhcnR5IGNvbnRlbnQuJyxcblx0XHRcdCd6aC1oYW5zJzogJ+atpOe8lui+keWQq+acieesrOS4ieaWueWGheWuuScsXG5cdFx0XHQnemgtaGFudCc6ICfmraTnt6jovK/lkKvmnInnrKzkuInmlrnlhaflrrknLFxuXHRcdH0pLFxuXHRcdFFpdXdlbkNvbnRlbnRDb250YWluZWQ6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnVGhpcyBlZGl0b3IgY29udGFpbnMgY29udGVudCBmcm9tIG90aGVyIHBhZ2VzIG9mIFFpdXdlbiBCYWlrZS4nLFxuXHRcdFx0J3poLWhhbnMnOiAn5q2k57yW6L6R5ZCr5pyJ5rGC6Ze755m+56eR5YW25LuW6aG16Z2i55qE5YaF5a65Jyxcblx0XHRcdCd6aC1oYW50JzogJ+atpOe3qOi8r+WQq+acieaxguiBnueZvuenkeWFtuS7lumggemdoueahOWFp+WuuScsXG5cdFx0fSksXG5cdH07XG59O1xuXG5jb25zdCBpMThuTWVzc2FnZXMgPSBnZXRJMThuTWVzc2FnZXMoKTtcblxuY29uc3QgZ2V0TWVzc2FnZTogR2V0TWVzc2FnZXM8dHlwZW9mIGkxOG5NZXNzYWdlcz4gPSAoa2V5KSA9PiB7XG5cdHJldHVybiBpMThuTWVzc2FnZXNba2V5XSB8fCBrZXk7XG59O1xuXG5leHBvcnQge2dldE1lc3NhZ2V9O1xuIiwgImNvbnN0IG1vZGlmeUF0dHJpYnV0aW9uID0gKHtcblx0JGJvZHksXG5cdHBhcmVudEZpZWxkU2V0LFxufToge1xuXHQkYm9keTogSlF1ZXJ5PEhUTUxFbGVtZW50Pjtcblx0cGFyZW50RmllbGRTZXQ6IE9PLnVpLkZpZWxkc2V0TGF5b3V0O1xufSkgPT4ge1xuXHRjb25zdCBnZW5lcmF0ZUluZm9NYXJ0aXggPSAoZmllbGRTZXRMYXlvdXQ6IE9PLnVpLkZpZWxkc2V0TGF5b3V0KSA9PiB7XG5cdFx0Y29uc3QgYXR0cmlidXRpb25zID0gW107XG5cblx0XHRjb25zdCBnZXRTZWxlY3RlZFZhbHVlID0gKGRyb3Bkb3duOiBPTy51aS5Ecm9wZG93bldpZGdldCk6IHN0cmluZyB8IHVuZGVmaW5lZCA9PiB7XG5cdFx0XHRjb25zdCBzZWxlY3RlZEl0ZW06IE9PLnVpLk9wdGlvbldpZGdldCB8IG51bGwgPSBkcm9wZG93blxuXHRcdFx0XHQuZ2V0TWVudSgpXG5cdFx0XHRcdC5maW5kU2VsZWN0ZWRJdGVtKCkgYXMgT08udWkuT3B0aW9uV2lkZ2V0IHwgbnVsbDtcblx0XHRcdHJldHVybiBzZWxlY3RlZEl0ZW0gPyAoc2VsZWN0ZWRJdGVtLmdldERhdGEoKSBhcyBzdHJpbmcpIDogdW5kZWZpbmVkO1xuXHRcdH07XG5cblx0XHRmb3IgKGNvbnN0IGF0dHJpYnV0aW9uRmllbGRzZXQgb2YgZmllbGRTZXRMYXlvdXQuZ2V0SXRlbXMoKSBhcyBPTy51aS5GaWVsZHNldExheW91dFtdKSB7XG5cdFx0XHRjb25zdCBhdHRyaWJ1dGlvbiA9IFtdO1xuXG5cdFx0XHRmb3IgKGNvbnN0IGZpZWxkTGF5b3V0IG9mIGF0dHJpYnV0aW9uRmllbGRzZXQuZ2V0SXRlbXMoKSBhcyBPTy51aS5GaWVsZExheW91dFtdKSB7XG5cdFx0XHRcdGNvbnN0IGZpZWxkID0gZmllbGRMYXlvdXQuZ2V0RmllbGQoKTtcblx0XHRcdFx0bGV0IHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cblx0XHRcdFx0aWYgKGZpZWxkLnN1cHBvcnRzKCdnZXRWYWx1ZScpKSB7XG5cdFx0XHRcdFx0dmFsdWUgPSAoZmllbGQgYXMgT08udWkuVGV4dElucHV0V2lkZ2V0KS5nZXRWYWx1ZSgpO1xuXHRcdFx0XHR9IGVsc2UgaWYgKGZpZWxkLnN1cHBvcnRzKCdnZXRNZW51JykpIHtcblx0XHRcdFx0XHR2YWx1ZSA9IGdldFNlbGVjdGVkVmFsdWUoZmllbGQgYXMgT08udWkuRHJvcGRvd25XaWRnZXQpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKHZhbHVlKSB7XG5cdFx0XHRcdFx0YXR0cmlidXRpb25bYXR0cmlidXRpb24ubGVuZ3RoXSA9IHZhbHVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGF0dHJpYnV0aW9uc1thdHRyaWJ1dGlvbnMubGVuZ3RoXSA9IGF0dHJpYnV0aW9uLmpvaW4oJywgJyk7XG5cdFx0fVxuXG5cdFx0Y29uc29sZS5sb2coYXR0cmlidXRpb25zKTtcblxuXHRcdHJldHVybiBhdHRyaWJ1dGlvbnMuam9pbignOyAnKTtcblx0fTtcblxuXHRsZXQgd3BBdHRyaWJ1dGlvbjogc3RyaW5nID0gJyc7XG5cblx0Y29uc3QgJHdwQXR0cmlidXRpb246IEpRdWVyeSA9ICQoJzxpbnB1dD4nKS5hdHRyKHtcblx0XHRpZDogJ3dwQXR0cmlidXRpb24nLFxuXHRcdG5hbWU6ICd3cEF0dHJpYnV0aW9uJyxcblx0XHR0eXBlOiAnaGlkZGVuJyxcblx0XHR2YWx1ZTogJycsXG5cdH0pO1xuXHRjb25zdCAkb3JpZ2lud3BBdHRyaWJ1dGlvbjogSlF1ZXJ5ID0gJGJvZHkuZmluZCgnaW5wdXRbbmFtZT13cEF0dHJpYnV0aW9uXScpO1xuXHRpZiAoISRvcmlnaW53cEF0dHJpYnV0aW9uLmxlbmd0aCkge1xuXHRcdCRib2R5LnByZXBlbmQoJHdwQXR0cmlidXRpb24pO1xuXHR9XG5cblx0d3BBdHRyaWJ1dGlvbiA9IGdlbmVyYXRlSW5mb01hcnRpeChwYXJlbnRGaWVsZFNldCk7XG5cdCRvcmlnaW53cEF0dHJpYnV0aW9uLnZhbCh3cEF0dHJpYnV0aW9uKTtcbn07XG5cbmV4cG9ydCB7bW9kaWZ5QXR0cmlidXRpb259O1xuIiwgImltcG9ydCB7TElDRU5TRVN9IGZyb20gJy4uL2NvbnN0YW50JztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi4vaTE4bic7XG5pbXBvcnQge21vZGlmeUF0dHJpYnV0aW9ufSBmcm9tICcuL21vZGlmeUF0dHJpYnV0aW9uU3VtbWFyeSc7XG5cbmNvbnN0IGdlbmVyYXRlVGV4dElucHV0V2l0aERyb3Bkb3duID0gKHskYm9keX06IHskYm9keTogSlF1ZXJ5PEhUTUxFbGVtZW50Pn0pID0+IHtcblx0Y29uc3QgZ2V0VGV4dElucHV0ID0gKG9uQ2hhbmdlPzogKGV2ZW50PzogRXZlbnQpID0+IHZvaWQpID0+IHtcblx0XHRjb25zdCB0ZXh0SW5wdXQgPSBuZXcgT08udWkuVGV4dElucHV0V2lkZ2V0KHtcblx0XHRcdHBsYWNlaG9sZGVyOiBnZXRNZXNzYWdlKCdTb3VyY2UnKSxcblx0XHR9KTtcblxuXHRcdGlmIChvbkNoYW5nZSkge1xuXHRcdFx0dGV4dElucHV0Lm9uKCdjaGFuZ2UnLCAoKSA9PiB7XG5cdFx0XHRcdG9uQ2hhbmdlKCk7XG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGV4dElucHV0O1xuXHR9O1xuXG5cdGNvbnN0IGdldERyb3BEb3duID0gKG9uQ2hhbmdlPzogKGV2ZW50PzogRXZlbnQpID0+IHZvaWQpID0+IHtcblx0XHRjb25zdCBkcm9wZG93bjogT08udWkuRHJvcGRvd25XaWRnZXQgPSBuZXcgT08udWkuRHJvcGRvd25XaWRnZXQoKTtcblxuXHRcdGNvbnN0IG1lbnVPcHRpb25zOiBPTy51aS5NZW51T3B0aW9uV2lkZ2V0W10gPSBbXTtcblxuXHRcdGZvciAoY29uc3Qge2RhdGEsIGxhYmVsfSBvZiBMSUNFTlNFUykge1xuXHRcdFx0bWVudU9wdGlvbnNbbWVudU9wdGlvbnMubGVuZ3RoXSA9IG5ldyBPTy51aS5NZW51T3B0aW9uV2lkZ2V0KHtcblx0XHRcdFx0ZGF0YSxcblx0XHRcdFx0bGFiZWwsXG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHRkcm9wZG93bi5nZXRNZW51KCkuYWRkSXRlbXMobWVudU9wdGlvbnMpO1xuXG5cdFx0aWYgKG9uQ2hhbmdlKSB7XG5cdFx0XHRkcm9wZG93bi5vbignY2hhbmdlJywgKCkgPT4ge1xuXHRcdFx0XHRvbkNoYW5nZSgpO1xuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGRyb3Bkb3duO1xuXHR9O1xuXG5cdGNvbnN0IGdldEFkZEl0ZW1CdXR0b24gPSAoLi4ub25DbGlja3M6ICgoZXZlbnQ/OiBFdmVudCkgPT4gdm9pZClbXSk6IE9PLnVpLkJ1dHRvbklucHV0V2lkZ2V0ID0+IHtcblx0XHRjb25zdCBhZGRJdGVtQnV0dG9uID0gbmV3IE9PLnVpLkJ1dHRvbklucHV0V2lkZ2V0KHtcblx0XHRcdGxhYmVsOiBnZXRNZXNzYWdlKCdBZGQnKSxcblx0XHR9KTtcblxuXHRcdGlmIChvbkNsaWNrcykge1xuXHRcdFx0Zm9yIChjb25zdCBvbkNsaWNrIG9mIG9uQ2xpY2tzKSB7XG5cdFx0XHRcdGFkZEl0ZW1CdXR0b24ub24oJ2NsaWNrJywgb25DbGljayk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGFkZEl0ZW1CdXR0b247XG5cdH07XG5cblx0Y29uc3QgZ2V0RGVsZXRlSXRlbUJ1dHRvbiA9ICguLi5vbkNsaWNrczogKChldmVudD86IEV2ZW50KSA9PiB2b2lkKVtdKTogT08udWkuQnV0dG9uSW5wdXRXaWRnZXQgPT4ge1xuXHRcdGNvbnN0IGRlbGV0ZUl0ZW1CdXR0b24gPSBuZXcgT08udWkuQnV0dG9uSW5wdXRXaWRnZXQoe1xuXHRcdFx0bGFiZWw6IGdldE1lc3NhZ2UoJ0RlbGV0ZScpLFxuXHRcdH0pO1xuXG5cdFx0aWYgKG9uQ2xpY2tzKSB7XG5cdFx0XHRmb3IgKGNvbnN0IG9uQ2xpY2sgb2Ygb25DbGlja3MpIHtcblx0XHRcdFx0ZGVsZXRlSXRlbUJ1dHRvbi5vbignY2xpY2snLCBvbkNsaWNrKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gZGVsZXRlSXRlbUJ1dHRvbjtcblx0fTtcblxuXHRjb25zdCBwYXJlbnRGaWVsZFNldCA9IG5ldyBPTy51aS5GaWVsZHNldExheW91dCh7XG5cdFx0bGFiZWw6IGdldE1lc3NhZ2UoJ1NvdXJjZXMgYW5kIExpY2Vuc2VzJyksXG5cdH0pO1xuXG5cdGNvbnN0IGlucHV0T25DaGFuZ2UgPSAoKSA9PiB7XG5cdFx0bW9kaWZ5QXR0cmlidXRpb24oeyRib2R5LCBwYXJlbnRGaWVsZFNldH0pO1xuXHR9O1xuXG5cdGNvbnN0IGFkZEl0ZW1PbkNsaWNrID0gKCkgPT4ge1xuXHRcdHBhcmVudEZpZWxkU2V0LmFkZEl0ZW1zKFtnZXRGb2xsb3dVcEZpZWxkc2V0KCldKTtcblx0fTtcblxuXHRjb25zdCBkZWxldGVJdGVtT25DbGljayA9IChpdGVtOiBPTy51aS5GaWVsZHNldExheW91dCkgPT4ge1xuXHRcdHBhcmVudEZpZWxkU2V0LnJlbW92ZUl0ZW1zKFtpdGVtXSk7XG5cdH07XG5cblx0Y29uc3QgaW5pdGlhbEZpZWxkc2V0ID0gbmV3IE9PLnVpLkZpZWxkc2V0TGF5b3V0KCk7XG5cdGluaXRpYWxGaWVsZHNldC5hZGRJdGVtcyhbXG5cdFx0bmV3IE9PLnVpLkZpZWxkTGF5b3V0KGdldFRleHRJbnB1dChpbnB1dE9uQ2hhbmdlKSwge2xhYmVsOiBnZXRNZXNzYWdlKCdTb3VyY2UnKSwgYWxpZ246ICdpbmxpbmUnfSksXG5cdFx0bmV3IE9PLnVpLkZpZWxkTGF5b3V0KGdldERyb3BEb3duKGlucHV0T25DaGFuZ2UpLCB7bGFiZWw6IGdldE1lc3NhZ2UoJ0xpY2Vuc2UnKSwgYWxpZ246ICdpbmxpbmUnfSksXG5cdFx0bmV3IE9PLnVpLkZpZWxkTGF5b3V0KGdldEFkZEl0ZW1CdXR0b24oYWRkSXRlbU9uQ2xpY2ssIGlucHV0T25DaGFuZ2UpLCB7YWxpZ246ICdpbmxpbmUnfSksXG5cdF0pO1xuXG5cdGNvbnN0IGdldEZvbGxvd1VwRmllbGRzZXQgPSAoKSA9PiB7XG5cdFx0Y29uc3QgZm9sbG93VXBGaWVsZHNldCA9IG5ldyBPTy51aS5GaWVsZHNldExheW91dCgpO1xuXHRcdGNvbnN0IGRlbGV0ZVRoaXNJdGVtID0gKCkgPT4ge1xuXHRcdFx0ZGVsZXRlSXRlbU9uQ2xpY2soZm9sbG93VXBGaWVsZHNldCk7XG5cdFx0fTtcblxuXHRcdGZvbGxvd1VwRmllbGRzZXQuYWRkSXRlbXMoW1xuXHRcdFx0bmV3IE9PLnVpLkZpZWxkTGF5b3V0KGdldFRleHRJbnB1dChpbnB1dE9uQ2hhbmdlKSwge2xhYmVsOiBnZXRNZXNzYWdlKCdTb3VyY2UnKSwgYWxpZ246ICdpbmxpbmUnfSksXG5cdFx0XHRuZXcgT08udWkuRmllbGRMYXlvdXQoZ2V0RHJvcERvd24oaW5wdXRPbkNoYW5nZSksIHtsYWJlbDogZ2V0TWVzc2FnZSgnTGljZW5zZScpLCBhbGlnbjogJ2lubGluZSd9KSxcblx0XHRcdG5ldyBPTy51aS5GaWVsZExheW91dChnZXRBZGRJdGVtQnV0dG9uKGFkZEl0ZW1PbkNsaWNrLCBpbnB1dE9uQ2hhbmdlKSwge2FsaWduOiAnaW5saW5lJ30pLFxuXHRcdFx0bmV3IE9PLnVpLkZpZWxkTGF5b3V0KGdldERlbGV0ZUl0ZW1CdXR0b24oZGVsZXRlVGhpc0l0ZW0sIGlucHV0T25DaGFuZ2UpLCB7YWxpZ246ICdpbmxpbmUnfSksXG5cdFx0XSk7XG5cblx0XHRyZXR1cm4gZm9sbG93VXBGaWVsZHNldDtcblx0fTtcblxuXHRwYXJlbnRGaWVsZFNldC5hZGRJdGVtcyhbaW5pdGlhbEZpZWxkc2V0XSk7XG5cblx0cGFyZW50RmllbGRTZXQub24oJ2NoYW5nZScsICgpID0+IHtcblx0XHRtb2RpZnlBdHRyaWJ1dGlvbih7JGJvZHksIHBhcmVudEZpZWxkU2V0fSk7XG5cdH0pO1xuXG5cdHJldHVybiBwYXJlbnRGaWVsZFNldDtcbn07XG5cbmV4cG9ydCB7Z2VuZXJhdGVUZXh0SW5wdXRXaXRoRHJvcGRvd259O1xuIiwgImltcG9ydCB7bW9kaWZ5VmlzdWFsRWRpdG9yQ2hhbmdlVGFnLCBtb2RpZnlXaWtpRWRpdG9yQ2hhbmdlVGFnfSBmcm9tICcuL21vZGlmeUNoYW5nZVRhZyc7XG5pbXBvcnQge2dlbmVyYXRlVGV4dElucHV0V2l0aERyb3Bkb3dufSBmcm9tICcuL2dlbmVyYXRlVGV4dElucHV0V2l0aERyb3Bkb3duJztcblxuY29uc3QgZ2VuZXJhdGVWaXN1YWxFZGl0b3JDaGVja2JveExheW91dCA9ICh7XG5cdGlucHV0SWQsXG5cdGxhYmVsLFxuXHQkYm9keSxcblx0Y2hhbmdlVGFnLFxufToge1xuXHRpbnB1dElkPzogc3RyaW5nO1xuXHRsYWJlbDogc3RyaW5nO1xuXHQkYm9keTogSlF1ZXJ5PEhUTUxFbGVtZW50Pjtcblx0Y2hhbmdlVGFnPzogc3RyaW5nO1xufSkgPT4ge1xuXHRjb25zdCBjaGVja2JveDogT08udWkuQ2hlY2tib3hJbnB1dFdpZGdldCA9IG5ldyBPTy51aS5DaGVja2JveElucHV0V2lkZ2V0KHtcblx0XHRzZWxlY3RlZDogZmFsc2UsXG5cdH0pO1xuXG5cdGlmIChpbnB1dElkKSB7XG5cdFx0Y2hlY2tib3guc2V0SW5wdXRJZChpbnB1dElkKTtcblx0fVxuXG5cdGlmIChjaGFuZ2VUYWcpIHtcblx0XHRtb2RpZnlWaXN1YWxFZGl0b3JDaGFuZ2VUYWcoe2NoYW5nZVRhZywgY2hlY2tib3h9KTtcblx0fVxuXG5cdGNvbnN0IHRleHRJbnB1dFdpdGhEcm9wZG93biA9IGdlbmVyYXRlVGV4dElucHV0V2l0aERyb3Bkb3duKHskYm9keX0pO1xuXG5cdGNoZWNrYm94Lm9uKCdjaGFuZ2UnLCAoc2VsZWN0ZWQpID0+IHtcblx0XHR0ZXh0SW5wdXRXaXRoRHJvcGRvd24uJGVsZW1lbnQucHJvcCgnZGlzYWJsZWQnLCAhc2VsZWN0ZWQpO1xuXHR9KTtcblxuXHRjb25zdCBjaGVja2JveExheW91dDogT08udWkuRmllbGRMYXlvdXQ8T08udWkuQ2hlY2tib3hJbnB1dFdpZGdldD4gPSBuZXcgT08udWkuRmllbGRMYXlvdXQoY2hlY2tib3gsIHtcblx0XHRhbGlnbjogJ2lubGluZScsXG5cdFx0bGFiZWwsXG5cdH0pO1xuXG5cdGNvbnN0ICRsYXlvdXQgPSAkKCc8ZGl2PicpLmF0dHIoJ2lkJywgJ2VmYS1hcmVhJykuYXBwZW5kKGNoZWNrYm94TGF5b3V0LiRlbGVtZW50LCB0ZXh0SW5wdXRXaXRoRHJvcGRvd24uJGVsZW1lbnQpO1xuXG5cdHJldHVybiAkbGF5b3V0O1xufTtcblxuY29uc3QgZ2VuZXJhdGVXaWtpRWRpdG9yQ2hlY2tib3hMYXlvdXQgPSAoe1xuXHRpbnB1dElkLFxuXHRsYWJlbCxcblx0Y2hhbmdlVGFnLFxuXHQkYm9keSxcblx0JGVkaXRGb3JtLFxufToge1xuXHRpbnB1dElkPzogc3RyaW5nO1xuXHRsYWJlbDogc3RyaW5nO1xuXHRjaGFuZ2VUYWc/OiBzdHJpbmc7XG5cdCRib2R5OiBKUXVlcnk7XG5cdCRlZGl0Rm9ybTogSlF1ZXJ5O1xufSkgPT4ge1xuXHRjb25zdCBjaGVja2JveDogT08udWkuQ2hlY2tib3hJbnB1dFdpZGdldCA9IG5ldyBPTy51aS5DaGVja2JveElucHV0V2lkZ2V0KHtcblx0XHRzZWxlY3RlZDogZmFsc2UsXG5cdH0pO1xuXG5cdGlmIChpbnB1dElkKSB7XG5cdFx0Y2hlY2tib3guc2V0SW5wdXRJZChpbnB1dElkKTtcblx0fVxuXG5cdGlmIChjaGFuZ2VUYWcpIHtcblx0XHRtb2RpZnlXaWtpRWRpdG9yQ2hhbmdlVGFnKHtjaGFuZ2VUYWcsIGNoZWNrYm94LCAkZWRpdEZvcm19KTtcblx0fVxuXG5cdGNvbnN0IHRleHRJbnB1dFdpdGhEcm9wZG93biA9IGdlbmVyYXRlVGV4dElucHV0V2l0aERyb3Bkb3duKHskYm9keX0pO1xuXG5cdGNoZWNrYm94Lm9uKCdjaGFuZ2UnLCAoc2VsZWN0ZWQpID0+IHtcblx0XHR0ZXh0SW5wdXRXaXRoRHJvcGRvd24uJGVsZW1lbnQucHJvcCgnZGlzYWJsZWQnLCAhc2VsZWN0ZWQpO1xuXHR9KTtcblxuXHRjb25zdCBjaGVja2JveExheW91dDogT08udWkuRmllbGRMYXlvdXQ8T08udWkuQ2hlY2tib3hJbnB1dFdpZGdldD4gPSBuZXcgT08udWkuRmllbGRMYXlvdXQoY2hlY2tib3gsIHtcblx0XHRhbGlnbjogJ2lubGluZScsXG5cdFx0bGFiZWwsXG5cdH0pO1xuXG5cdGNvbnN0ICRsYXlvdXQgPSAkKCc8ZGl2PicpLmF0dHIoJ2lkJywgJ2VmYS1hcmVhJykuYXBwZW5kKGNoZWNrYm94TGF5b3V0LiRlbGVtZW50LCB0ZXh0SW5wdXRXaXRoRHJvcGRvd24uJGVsZW1lbnQpO1xuXG5cdHJldHVybiAkbGF5b3V0O1xufTtcbmV4cG9ydCB7Z2VuZXJhdGVWaXN1YWxFZGl0b3JDaGVja2JveExheW91dCwgZ2VuZXJhdGVXaWtpRWRpdG9yQ2hlY2tib3hMYXlvdXR9O1xuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnfi9FZGl0Zm9ybV9BdHRyaWJ1dGlvbi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHthcHBlbmRUZXh0VG9TdW1tYXJ5fSBmcm9tICcuL3V0aWwvY2hhbmdlU3VtbWFyeSc7XG5pbXBvcnQge2dlbmVyYXRlVmlzdWFsRWRpdG9yQ2hlY2tib3hMYXlvdXR9IGZyb20gJy4vdXRpbC9nZW5lcmF0ZUNoZWNrYm94TGF5b3V0JztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9pMThuJztcblxuY29uc3QgcHJvY2Vzc1Zpc3VhbEVkaXRvciA9ICh7JGJvZHl9OiB7JGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+fSk6IHZvaWQgPT4ge1xuXHQvLyBHdWFyZCBhZ2FpbnN0IGRvdWJsZSBpbmNsdXNpb25zXG5cdGlmIChtdy5jb25maWcuZ2V0KE9QVElPTlMuY29uZmlnS2V5KSkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0ICR0YXJnZXQ6IEpRdWVyeSA9ICRib2R5LmZpbmQoYC4ke09QVElPTlMudGFyZ2V0Q2xhc3NWZX1gKTtcblx0aWYgKCEkdGFyZ2V0Lmxlbmd0aCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdG13LmNvbmZpZy5zZXQoT1BUSU9OUy5jb25maWdLZXksIHRydWUpO1xuXG5cdGNvbnN0ICRsYXlvdXQgPSBnZW5lcmF0ZVZpc3VhbEVkaXRvckNoZWNrYm94TGF5b3V0KHtcblx0XHRpbnB1dElkOiBPUFRJT05TLmlucHV0SWQsXG5cdFx0bGFiZWw6IGdldE1lc3NhZ2UoJ1RoaXJkUGFydHlDb250ZW50Q29udGFpbmVkJyksXG5cdFx0Y2hhbmdlVGFnOiBPUFRJT05TLmNoYW5nZVRhZyxcblx0XHQkYm9keSxcblx0fSk7XG5cblx0aWYgKCEkYm9keS5maW5kKGAjJHtPUFRJT05TLmlucHV0SWR9YCkubGVuZ3RoKSB7XG5cdFx0JHRhcmdldC5hcHBlbmQoJGxheW91dCk7XG5cdH1cblxuXHRtdy5ob29rKCd2ZS5hY3RpdmF0aW9uQ29tcGxldGUnKS5hZGQoKCkgPT4ge1xuXHRcdGNvbnN0IHt0YXJnZXR9ID0gd2luZG93LnZlLmluaXQ7XG5cdFx0Y29uc3Qge3NhdmVEaWFsb2d9ID0gdGFyZ2V0O1xuXG5cdFx0c2F2ZURpYWxvZy5vbignc2F2ZScsICgpID0+IHtcblx0XHRcdGNvbnN0IGN1c3RvbVN1bW1hcnkgPSBTdHJpbmcoJGJvZHkuZmluZCgnaW5wdXRbbmFtZT13cEF0dHJpYnV0aW9uXScpLnZhbCgpKTtcblx0XHRcdGNvbnN0ICR3cFN1bW1hcnkgPSB0YXJnZXQuc2F2ZURpYWxvZy5lZGl0U3VtbWFyeUlucHV0LiRpbnB1dDtcblx0XHRcdGFwcGVuZFRleHRUb1N1bW1hcnkoe2N1c3RvbVN1bW1hcnksICR3cFN1bW1hcnl9KTtcblx0XHR9KTtcblx0fSk7XG59O1xuXG5leHBvcnQge3Byb2Nlc3NWaXN1YWxFZGl0b3J9O1xuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnfi9FZGl0Zm9ybV9BdHRyaWJ1dGlvbi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHthcHBlbmRUZXh0VG9TdW1tYXJ5fSBmcm9tICcuL3V0aWwvY2hhbmdlU3VtbWFyeSc7XG5pbXBvcnQge2dlbmVyYXRlV2lraUVkaXRvckNoZWNrYm94TGF5b3V0fSBmcm9tICcuL3V0aWwvZ2VuZXJhdGVDaGVja2JveExheW91dCc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vaTE4bic7XG5cbmNvbnN0IHByb2Nlc3NXaWtpRWRpdG9yID0gKHskYm9keSwgJGVkaXRGb3JtfTogeyRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50PjsgJGVkaXRGb3JtOiBKUXVlcnl9KTogdm9pZCA9PiB7XG5cdC8vIEd1YXJkIGFnYWluc3QgZG91YmxlIGluY2x1c2lvbnNcblx0aWYgKG13LmNvbmZpZy5nZXQoT1BUSU9OUy5jb25maWdLZXkpKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgJHRhcmdldDogSlF1ZXJ5ID0gJGVkaXRGb3JtLmZpbmQoT1BUSU9OUy50YXJnZXRXaWtpRWRpdG9yKTtcblx0aWYgKCEkdGFyZ2V0Lmxlbmd0aCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdG13LmNvbmZpZy5zZXQoT1BUSU9OUy5jb25maWdLZXksIHRydWUpO1xuXG5cdGNvbnN0ICRsYXlvdXQgPSBnZW5lcmF0ZVdpa2lFZGl0b3JDaGVja2JveExheW91dCh7XG5cdFx0aW5wdXRJZDogT1BUSU9OUy5pbnB1dElkLFxuXHRcdGxhYmVsOiBnZXRNZXNzYWdlKCdUaGlyZFBhcnR5Q29udGVudENvbnRhaW5lZCcpLFxuXHRcdCRib2R5LFxuXHRcdCRlZGl0Rm9ybSxcblx0XHRjaGFuZ2VUYWc6IE9QVElPTlMuY2hhbmdlVGFnLFxuXHR9KTtcblxuXHRpZiAoISRib2R5LmZpbmQoYCMke09QVElPTlMuaW5wdXRJZH1gKS5sZW5ndGgpIHtcblx0XHQkdGFyZ2V0LmFmdGVyKCRsYXlvdXQpO1xuXHR9XG5cblx0JGVkaXRGb3JtLm9uKCdzdWJtaXQnLCAoKSA9PiB7XG5cdFx0Y29uc3QgY3VzdG9tU3VtbWFyeSA9IFN0cmluZygkYm9keS5maW5kKCdpbnB1dFtuYW1lPXdwQXR0cmlidXRpb25dJykudmFsKCkpO1xuXHRcdGNvbnN0ICR3cFN1bW1hcnkgPSAkZWRpdEZvcm0uZmluZCgnaW5wdXRbbmFtZT13cFN1bW1hcnldJyk7XG5cdFx0YXBwZW5kVGV4dFRvU3VtbWFyeSh7Y3VzdG9tU3VtbWFyeSwgJHdwU3VtbWFyeX0pO1xuXHRcdCRsYXlvdXQucmVtb3ZlKCk7XG5cdFx0bXcuY29uZmlnLnNldChPUFRJT05TLmNvbmZpZ0tleSwgZmFsc2UpO1xuXHR9KTtcbn07XG5cbmV4cG9ydCB7cHJvY2Vzc1dpa2lFZGl0b3J9O1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0MsSUFBQUEsWUFBYTtBQUNiLElBQUFDLFlBQWE7QUFDYixJQUFBQyxVQUFXO0FBQ1gsSUFBQUMsZ0JBQWlCO0FBQ2pCLElBQUFDLG1CQUFvQjs7QUNKckIsSUFBQUMscUJBQXNCQyxRQUFBLGlCQUFBOztBQ0R0QixJQUFNQyxzQkFBc0JBLENBQUM7RUFBQ0M7RUFBZUM7QUFBVSxNQUF5RDtBQUFBLE1BQUFDO0FBQy9HLFFBQU1DLGlCQUFBRCxrQkFBeUJELFdBQVdHLElBQUksT0FBQSxRQUFBRixvQkFBQSxTQUFBQSxrQkFBNEI7QUFFMUVE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UyxHQUFHO0FBQ3JDNkosU0FBR0MsT0FBT0csSUFBWWpLLFdBQVcsS0FBSztJQUN2QztFQUNELENBQUM7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogWyJjb25maWdLZXkiLCAiY2hhbmdlVGFnIiwgImlucHV0SWQiLCAidGFyZ2V0Q2xhc3NWZSIsICJ0YXJnZXRXaWtpRWRpdG9yIiwgImltcG9ydF9leHRfZ2FkZ2V0MiIsICJyZXF1aXJlIiwgImFwcGVuZFRleHRUb1N1bW1hcnkiLCAiY3VzdG9tU3VtbWFyeSIsICIkd3BTdW1tYXJ5IiwgIl8kd3BTdW1tYXJ5JHZhbCIsICJvcmlnaW5TdW1tYXJ5IiwgInZhbCIsICJ0cmltIiwgImNvbmNhdCIsICJ0cmlnZ2VyIiwgIm1vZGlmeVZpc3VhbEVkaXRvckNoYW5nZVRhZyIsICJjaGFuZ2VUYWcyIiwgImNoZWNrYm94IiwgIm9uIiwgIl93aW5kb3ckdmUkaW5pdCR0YXJnZSIsICJfd2luZG93JHZlJGluaXQkdGFyZ2UyIiwgIl93aW5kb3ckdmUkaW5pdCR0YXJnZTMiLCAiZ2VuZXJhdGVDaGFuZ2VUYWdzIiwgIm9yaWdpbkNoYW5nZVRhZ3MiLCAiaXNTZWxlY3RlZCIsICJyZXBsYWNlIiwgImNoYW5nZVRhZ3MiLCAid2luZG93IiwgInZlIiwgImluaXQiLCAidGFyZ2V0IiwgInNhdmVGaWVsZHMiLCAid3BDaGFuZ2VUYWdzIiwgImNhbGwiLCAibW9kaWZ5V2lraUVkaXRvckNoYW5nZVRhZyIsICIkZWRpdEZvcm0iLCAiXyRvcmlnaW5XcENoYW5nZVRhZ3MkIiwgIl8kb3JpZ2luV3BDaGFuZ2VUYWdzJDIiLCAiJHdwQ2hhbmdlVGFncyIsICIkIiwgImF0dHIiLCAiaWQiLCAibmFtZSIsICJ0eXBlIiwgInZhbHVlIiwgIiRib2R5IiwgInBhcmVudHMiLCAiJG9yaWdpbldwQ2hhbmdlVGFncyIsICJmaW5kIiwgImxlbmd0aCIsICJwcmVwZW5kIiwgInRvU3RyaW5nIiwgIkxJQ0VOU0VTIiwgImxhYmVsIiwgImRhdGEiLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAiZ2V0STE4bk1lc3NhZ2VzIiwgIkFkZCIsICJsb2NhbGl6ZSIsICJlbiIsICJ6aCIsICJEZWxldGUiLCAiU291cmNlIiwgIkxpY2Vuc2UiLCAiVGhpcmRQYXJ0eUNvbnRlbnRDb250YWluZWQiLCAiUWl1d2VuQ29udGVudENvbnRhaW5lZCIsICJpMThuTWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAibW9kaWZ5QXR0cmlidXRpb24iLCAicGFyZW50RmllbGRTZXQiLCAiZ2VuZXJhdGVJbmZvTWFydGl4IiwgImZpZWxkU2V0TGF5b3V0IiwgImF0dHJpYnV0aW9ucyIsICJnZXRTZWxlY3RlZFZhbHVlIiwgImRyb3Bkb3duIiwgInNlbGVjdGVkSXRlbSIsICJnZXRNZW51IiwgImZpbmRTZWxlY3RlZEl0ZW0iLCAiZ2V0RGF0YSIsICJfaXRlcmF0b3IiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAiZ2V0SXRlbXMiLCAiX3N0ZXAiLCAicyIsICJuIiwgImRvbmUiLCAiYXR0cmlidXRpb25GaWVsZHNldCIsICJhdHRyaWJ1dGlvbiIsICJfaXRlcmF0b3IyIiwgIl9zdGVwMiIsICJmaWVsZExheW91dCIsICJmaWVsZCIsICJnZXRGaWVsZCIsICJzdXBwb3J0cyIsICJnZXRWYWx1ZSIsICJlcnIiLCAiZSIsICJmIiwgImpvaW4iLCAiY29uc29sZSIsICJsb2ciLCAid3BBdHRyaWJ1dGlvbiIsICIkd3BBdHRyaWJ1dGlvbiIsICIkb3JpZ2lud3BBdHRyaWJ1dGlvbiIsICJnZW5lcmF0ZVRleHRJbnB1dFdpdGhEcm9wZG93biIsICJnZXRUZXh0SW5wdXQiLCAib25DaGFuZ2UiLCAidGV4dElucHV0IiwgIk9PIiwgInVpIiwgIlRleHRJbnB1dFdpZGdldCIsICJwbGFjZWhvbGRlciIsICJnZXREcm9wRG93biIsICJEcm9wZG93bldpZGdldCIsICJtZW51T3B0aW9ucyIsICJfaSIsICJfTElDRU5TRVMiLCAiTWVudU9wdGlvbldpZGdldCIsICJhZGRJdGVtcyIsICJnZXRBZGRJdGVtQnV0dG9uIiwgIm9uQ2xpY2tzIiwgImFkZEl0ZW1CdXR0b24iLCAiQnV0dG9uSW5wdXRXaWRnZXQiLCAiX2l0ZXJhdG9yMyIsICJfc3RlcDMiLCAib25DbGljayIsICJnZXREZWxldGVJdGVtQnV0dG9uIiwgImRlbGV0ZUl0ZW1CdXR0b24iLCAiX2l0ZXJhdG9yNCIsICJfc3RlcDQiLCAiRmllbGRzZXRMYXlvdXQiLCAiaW5wdXRPbkNoYW5nZSIsICJhZGRJdGVtT25DbGljayIsICJnZXRGb2xsb3dVcEZpZWxkc2V0IiwgImRlbGV0ZUl0ZW1PbkNsaWNrIiwgIml0ZW0iLCAicmVtb3ZlSXRlbXMiLCAiaW5pdGlhbEZpZWxkc2V0IiwgIkZpZWxkTGF5b3V0IiwgImFsaWduIiwgImZvbGxvd1VwRmllbGRzZXQiLCAiZGVsZXRlVGhpc0l0ZW0iLCAiZ2VuZXJhdGVWaXN1YWxFZGl0b3JDaGVja2JveExheW91dCIsICJpbnB1dElkMiIsICJDaGVja2JveElucHV0V2lkZ2V0IiwgInNlbGVjdGVkIiwgInNldElucHV0SWQiLCAidGV4dElucHV0V2l0aERyb3Bkb3duIiwgIiRlbGVtZW50IiwgInByb3AiLCAiY2hlY2tib3hMYXlvdXQiLCAiJGxheW91dCIsICJhcHBlbmQiLCAiZ2VuZXJhdGVXaWtpRWRpdG9yQ2hlY2tib3hMYXlvdXQiLCAicHJvY2Vzc1Zpc3VhbEVkaXRvciIsICJtdyIsICJjb25maWciLCAiZ2V0IiwgIiR0YXJnZXQiLCAic2V0IiwgImhvb2siLCAiYWRkIiwgInNhdmVEaWFsb2ciLCAiU3RyaW5nIiwgImVkaXRTdW1tYXJ5SW5wdXQiLCAiJGlucHV0IiwgInByb2Nlc3NXaWtpRWRpdG9yIiwgImFmdGVyIiwgInJlbW92ZSIsICJnZXRCb2R5IiwgInRoZW4iLCAiZWRpdEZvcm0iXQp9Cg==

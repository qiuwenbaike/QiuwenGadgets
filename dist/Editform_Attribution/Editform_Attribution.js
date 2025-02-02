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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0VkaXRmb3JtX0F0dHJpYnV0aW9uL29wdGlvbnMuanNvbiIsICJzcmMvRWRpdGZvcm1fQXR0cmlidXRpb24vRWRpdGZvcm1fQXR0cmlidXRpb24udHMiLCAic3JjL0VkaXRmb3JtX0F0dHJpYnV0aW9uL21vZHVsZXMvdXRpbC9jaGFuZ2VTdW1tYXJ5LnRzIiwgInNyYy9FZGl0Zm9ybV9BdHRyaWJ1dGlvbi9tb2R1bGVzL3V0aWwvbW9kaWZ5Q2hhbmdlVGFnLnRzIiwgInNyYy9FZGl0Zm9ybV9BdHRyaWJ1dGlvbi9tb2R1bGVzL2NvbnN0YW50LnRzIiwgInNyYy9FZGl0Zm9ybV9BdHRyaWJ1dGlvbi9tb2R1bGVzL2kxOG4udHMiLCAic3JjL0VkaXRmb3JtX0F0dHJpYnV0aW9uL21vZHVsZXMvdXRpbC9tb2RpZnlBdHRyaWJ1dGlvblN1bW1hcnkudHMiLCAic3JjL0VkaXRmb3JtX0F0dHJpYnV0aW9uL21vZHVsZXMvdXRpbC9nZW5lcmF0ZVRleHRJbnB1dFdpdGhEcm9wZG93bi50cyIsICJzcmMvRWRpdGZvcm1fQXR0cmlidXRpb24vbW9kdWxlcy91dGlsL2dlbmVyYXRlQ2hlY2tib3hMYXlvdXQudHMiLCAic3JjL0VkaXRmb3JtX0F0dHJpYnV0aW9uL21vZHVsZXMvcHJvY2Vzc1Zpc3VhbEVkaXRvci50cyIsICJzcmMvRWRpdGZvcm1fQXR0cmlidXRpb24vbW9kdWxlcy9wcm9jZXNzV2lraUVkaXRvci50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsie1xuXHRcImNvbmZpZ0tleVwiOiBcImdhZGdldC1FZGl0Zm9ybV9BdHRyaWJ1dGlvbl9fSW5pdGlhbGl6ZWRcIixcblx0XCJjaGFuZ2VUYWdcIjogXCJBdHRyaWJ1dGlvbl9hZGRlZFwiLFxuXHRcImlucHV0SWRcIjogXCJlZGl0Zm9ybV9hdHRyaWJ1dGlvblwiLFxuXHRcInRhcmdldENsYXNzVmVcIjogXCJ2ZS11aS1td1NhdmVEaWFsb2ctY2hlY2tib3hlc1wiLFxuXHRcInRhcmdldFdpa2lFZGl0b3JcIjogXCIuZWRpdENoZWNrYm94ZXMgLm9vLXVpLWhvcml6b250YWxMYXlvdXRcIlxufVxuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtnZXRCb2R5fSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuaW1wb3J0IHtwcm9jZXNzVmlzdWFsRWRpdG9yfSBmcm9tICcuL21vZHVsZXMvcHJvY2Vzc1Zpc3VhbEVkaXRvcic7XG5pbXBvcnQge3Byb2Nlc3NXaWtpRWRpdG9yfSBmcm9tICcuL21vZHVsZXMvcHJvY2Vzc1dpa2lFZGl0b3InO1xuXG4vKipcbiAqIEBkZXNjcmlwdGlvbiDnrKzkuInmlrnmnaXmupDnibnmrorlo7DmmI5cbiAqL1xudm9pZCBnZXRCb2R5KCkudGhlbihmdW5jdGlvbiBlZGl0Rm9ybSgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkIHtcblx0bXcuaG9vaygnd2lraXBhZ2UuZWRpdGZvcm0nKS5hZGQoKCRlZGl0Rm9ybSk6IHZvaWQgPT4ge1xuXHRcdHByb2Nlc3NXaWtpRWRpdG9yKHtcblx0XHRcdCRib2R5LFxuXHRcdFx0JGVkaXRGb3JtLFxuXHRcdH0pO1xuXHR9KTtcblxuXHRtdy5ob29rKCd2ZS5zYXZlRGlhbG9nLnN0YXRlQ2hhbmdlZCcpLmFkZCgoKTogdm9pZCA9PiB7XG5cdFx0cHJvY2Vzc1Zpc3VhbEVkaXRvcih7XG5cdFx0XHQkYm9keSxcblx0XHR9KTtcblx0fSk7XG5cblx0Ly8gV2hlbiBzd2l0Y2hpbmcgYmV0d2VlbiBWRSBhbmQgTldFLCByZS1pbml0aWFsaXphdGlvbiBpcyByZXF1aXJlZFxuXHRtdy5ob29rKCd2ZS5hY3RpdmF0aW9uQ29tcGxldGUnKS5hZGQoKCkgPT4ge1xuXHRcdGlmIChtdy5jb25maWcuZ2V0KE9QVElPTlMuY29uZmlnS2V5KSkge1xuXHRcdFx0bXcuY29uZmlnLnNldChPUFRJT05TLmNvbmZpZ0tleSwgZmFsc2UpO1xuXHRcdH1cblx0fSk7XG59KTtcbiIsICJjb25zdCBhcHBlbmRUZXh0VG9TdW1tYXJ5ID0gKHtjdXN0b21TdW1tYXJ5LCAkd3BTdW1tYXJ5fToge2N1c3RvbVN1bW1hcnk6IHN0cmluZzsgJHdwU3VtbWFyeTogSlF1ZXJ5fSk6IHZvaWQgPT4ge1xuXHRjb25zdCBvcmlnaW5TdW1tYXJ5OiBzdHJpbmcgPSAoJHdwU3VtbWFyeS52YWwoKSBhcyBzdHJpbmcgfCB1bmRlZmluZWQpID8/ICcnO1xuXG5cdCR3cFN1bW1hcnkudmFsKG9yaWdpblN1bW1hcnkudHJpbSgpID8gYCR7b3JpZ2luU3VtbWFyeX0gJHtjdXN0b21TdW1tYXJ5fWAgOiBjdXN0b21TdW1tYXJ5KS50cmlnZ2VyKCdjaGFuZ2UnKTtcbn07XG5cbmV4cG9ydCB7YXBwZW5kVGV4dFRvU3VtbWFyeX07XG4iLCAiY29uc3QgbW9kaWZ5VmlzdWFsRWRpdG9yQ2hhbmdlVGFnID0gKHtcblx0Y2hhbmdlVGFnLFxuXHRjaGVja2JveCxcbn06IHtcblx0Y2hhbmdlVGFnOiBzdHJpbmc7XG5cdGNoZWNrYm94OiBPTy51aS5DaGVja2JveElucHV0V2lkZ2V0O1xufSk6IHZvaWQgPT4ge1xuXHRjaGVja2JveC5vbignY2hhbmdlJywgKCk6IHZvaWQgPT4ge1xuXHRcdGNvbnN0IGdlbmVyYXRlQ2hhbmdlVGFncyA9IChvcmlnaW5DaGFuZ2VUYWdzOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuXHRcdFx0cmV0dXJuIGNoZWNrYm94LmlzU2VsZWN0ZWQoKVxuXHRcdFx0XHQ/IGAke29yaWdpbkNoYW5nZVRhZ3N9LCR7Y2hhbmdlVGFnfWBcblx0XHRcdFx0OiBvcmlnaW5DaGFuZ2VUYWdzLnJlcGxhY2UoYCwke2NoYW5nZVRhZ31gLCAnJyk7XG5cdFx0fTtcblxuXHRcdGxldCBjaGFuZ2VUYWdzOiBzdHJpbmcgPSAnJztcblx0XHRjaGFuZ2VUYWdzID0gZ2VuZXJhdGVDaGFuZ2VUYWdzKHdpbmRvdy52ZS5pbml0LnRhcmdldC5zYXZlRmllbGRzLndwQ2hhbmdlVGFncz8uKCkgPz8gJycpO1xuXHRcdHdpbmRvdy52ZS5pbml0LnRhcmdldC5zYXZlRmllbGRzLndwQ2hhbmdlVGFncyA9ICgpOiBzdHJpbmcgPT4ge1xuXHRcdFx0cmV0dXJuIGNoYW5nZVRhZ3M7XG5cdFx0fTtcblx0fSk7XG59O1xuXG5jb25zdCBtb2RpZnlXaWtpRWRpdG9yQ2hhbmdlVGFnID0gKHtcblx0Y2hhbmdlVGFnLFxuXHRjaGVja2JveCxcblx0JGVkaXRGb3JtLFxufToge1xuXHRjaGFuZ2VUYWc6IHN0cmluZztcblx0Y2hlY2tib3g6IE9PLnVpLkNoZWNrYm94SW5wdXRXaWRnZXQ7XG5cdCRlZGl0Rm9ybTogSlF1ZXJ5O1xufSk6IHZvaWQgPT4ge1xuXHRjaGVja2JveC5vbignY2hhbmdlJywgKCk6IHZvaWQgPT4ge1xuXHRcdGNvbnN0IGdlbmVyYXRlQ2hhbmdlVGFncyA9IChvcmlnaW5DaGFuZ2VUYWdzOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuXHRcdFx0cmV0dXJuIGNoZWNrYm94LmlzU2VsZWN0ZWQoKVxuXHRcdFx0XHQ/IGAke29yaWdpbkNoYW5nZVRhZ3N9LCR7Y2hhbmdlVGFnfWBcblx0XHRcdFx0OiBvcmlnaW5DaGFuZ2VUYWdzLnJlcGxhY2UoYCwke2NoYW5nZVRhZ31gLCAnJyk7XG5cdFx0fTtcblxuXHRcdGxldCBjaGFuZ2VUYWdzOiBzdHJpbmcgPSAnJztcblxuXHRcdGNvbnN0ICR3cENoYW5nZVRhZ3M6IEpRdWVyeSA9ICQoJzxpbnB1dD4nKS5hdHRyKHtcblx0XHRcdGlkOiAnd3BDaGFuZ2VUYWdzJyxcblx0XHRcdG5hbWU6ICd3cENoYW5nZVRhZ3MnLFxuXHRcdFx0dHlwZTogJ2hpZGRlbicsXG5cdFx0XHR2YWx1ZTogJycsXG5cdFx0fSk7XG5cdFx0Y29uc3QgJGJvZHkgPSAkZWRpdEZvcm0ucGFyZW50cygnYm9keScpO1xuXHRcdGNvbnN0ICRvcmlnaW5XcENoYW5nZVRhZ3M6IEpRdWVyeSA9ICRib2R5LmZpbmQoJ2lucHV0W25hbWU9d3BDaGFuZ2VUYWdzXScpO1xuXHRcdGlmICghJG9yaWdpbldwQ2hhbmdlVGFncy5sZW5ndGgpIHtcblx0XHRcdCRib2R5LnByZXBlbmQoJHdwQ2hhbmdlVGFncyk7XG5cdFx0fVxuXHRcdGNoYW5nZVRhZ3MgPSBnZW5lcmF0ZUNoYW5nZVRhZ3MoJG9yaWdpbldwQ2hhbmdlVGFncy52YWwoKT8udG9TdHJpbmcoKSA/PyAnJyk7XG5cdFx0JG9yaWdpbldwQ2hhbmdlVGFncy52YWwoY2hhbmdlVGFncyk7XG5cdH0pO1xufTtcblxuZXhwb3J0IHttb2RpZnlWaXN1YWxFZGl0b3JDaGFuZ2VUYWcsIG1vZGlmeVdpa2lFZGl0b3JDaGFuZ2VUYWd9O1xuIiwgImNvbnN0IExJQ0VOU0VTID0gW1xuXHR7XG5cdFx0bGFiZWw6ICdDQyBCWS1TQSA0LjAnLFxuXHRcdGRhdGE6ICdodHRwczovL2NyZWF0aXZlY29tbW9ucy5vcmcvbGljZW5zZXMvYnktc2EvNC4wLycsXG5cdH0sXG5cdHtcblx0XHRsYWJlbDogJ0NDIEJZLVNBIDMuMCcsXG5cdFx0ZGF0YTogJ2h0dHBzOi8vY3JlYXRpdmVjb21tb25zLm9yZy9saWNlbnNlcy9ieS1zYS8zLjAvJyxcblx0fSxcblx0e1xuXHRcdGxhYmVsOiAnQ0MgQlktU0EgMy4wIENOJyxcblx0XHRkYXRhOiAnaHR0cHM6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL2xpY2Vuc2VzL2J5LXNhLzMuMC9jbi8nLFxuXHR9LFxuXHR7XG5cdFx0bGFiZWw6ICdDQzAtMS4wJyxcblx0XHRkYXRhOiAnaHR0cHM6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL3B1YmxpY2RvbWFpbi96ZXJvLzEuMC8nLFxuXHR9LFxuXHR7XG5cdFx0bGFiZWw6ICdLT0dMIFR5cGUgSTogQXR0cmlidXRpb24nLFxuXHRcdGRhdGE6ICdodHRwczovL3d3dy5rb2dsLm9yLmtyL2luZm8vbGljZW5zZVR5cGUxLmRvJyxcblx0fSxcbl07XG5cbmV4cG9ydCB7TElDRU5TRVN9O1xuIiwgImltcG9ydCB7bG9jYWxpemV9IGZyb20gJ2V4dC5nYWRnZXQuaTE4bic7XG5cbmNvbnN0IGdldEkxOG5NZXNzYWdlcyA9ICgpID0+IHtcblx0cmV0dXJuIHtcblx0XHRBZGQ6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQWRkJyxcblx0XHRcdHpoOiAn5aKe5YqgJyxcblx0XHR9KSxcblx0XHREZWxldGU6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnRGVsZXRlJyxcblx0XHRcdHpoOiAn56e76ZmkJyxcblx0XHR9KSxcblx0XHRTb3VyY2U6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnU291cmNlJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WGheWuueadpea6kCcsXG5cdFx0XHQnemgtaGFudCc6ICflhaflrrnkvobmupAnLFxuXHRcdH0pLFxuXHRcdExpY2Vuc2U6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnTGljZW5zZScsXG5cdFx0XHQnemgtaGFucyc6ICforrjlj6/or4EnLFxuXHRcdFx0J3poLWhhbnQnOiAn6Kix5Y+v6K2JJyxcblx0XHR9KSxcblx0XHQnU291cmNlcyBhbmQgTGljZW5zZXMnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1NvdXJjZXMgYW5kIExpY2Vuc2VzJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WGheWuueadpea6kOWPiuiuuOWPr+ivgScsXG5cdFx0XHQnemgtaGFudCc6ICflhaflrrnkvobmupDlj4roqLHlj6/orYknLFxuXHRcdH0pLFxuXHRcdFRoaXJkUGFydHlDb250ZW50Q29udGFpbmVkOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1RoaXMgZWRpdG9yIGNvbnRhaW5zIHRoaXJkLXBhcnR5IGNvbnRlbnQuJyxcblx0XHRcdCd6aC1oYW5zJzogJ+atpOe8lui+keWQq+acieesrOS4ieaWueWGheWuuScsXG5cdFx0XHQnemgtaGFudCc6ICfmraTnt6jovK/lkKvmnInnrKzkuInmlrnlhaflrrknLFxuXHRcdH0pLFxuXHRcdFFpdXdlbkNvbnRlbnRDb250YWluZWQ6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnVGhpcyBlZGl0b3IgY29udGFpbnMgY29udGVudCBmcm9tIG90aGVyIHBhZ2VzIG9mIFFpdXdlbiBCYWlrZS4nLFxuXHRcdFx0J3poLWhhbnMnOiAn5q2k57yW6L6R5ZCr5pyJ5rGC6Ze755m+56eR5YW25LuW6aG16Z2i55qE5YaF5a65Jyxcblx0XHRcdCd6aC1oYW50JzogJ+atpOe3qOi8r+WQq+acieaxguiBnueZvuenkeWFtuS7lumggemdoueahOWFp+WuuScsXG5cdFx0fSksXG5cdH07XG59O1xuXG5jb25zdCBpMThuTWVzc2FnZXMgPSBnZXRJMThuTWVzc2FnZXMoKTtcblxuY29uc3QgZ2V0TWVzc2FnZTogR2V0TWVzc2FnZXM8dHlwZW9mIGkxOG5NZXNzYWdlcz4gPSAoa2V5KSA9PiB7XG5cdHJldHVybiBpMThuTWVzc2FnZXNba2V5XSB8fCBrZXk7XG59O1xuXG5leHBvcnQge2dldE1lc3NhZ2V9O1xuIiwgImNvbnN0IG1vZGlmeUF0dHJpYnV0aW9uID0gKHtcblx0JGJvZHksXG5cdHBhcmVudEZpZWxkU2V0LFxufToge1xuXHQkYm9keTogSlF1ZXJ5PEhUTUxFbGVtZW50Pjtcblx0cGFyZW50RmllbGRTZXQ6IE9PLnVpLkZpZWxkc2V0TGF5b3V0O1xufSkgPT4ge1xuXHRjb25zdCBnZW5lcmF0ZUluZm9NYXJ0aXggPSAoZmllbGRTZXRMYXlvdXQ6IE9PLnVpLkZpZWxkc2V0TGF5b3V0KSA9PiB7XG5cdFx0Y29uc3QgYXR0cmlidXRpb25zID0gW107XG5cblx0XHRjb25zdCBnZXRTZWxlY3RlZFZhbHVlID0gKGRyb3Bkb3duOiBPTy51aS5Ecm9wZG93bldpZGdldCk6IHN0cmluZyB8IHVuZGVmaW5lZCA9PiB7XG5cdFx0XHRjb25zdCBzZWxlY3RlZEl0ZW06IE9PLnVpLk9wdGlvbldpZGdldCB8IG51bGwgPSBkcm9wZG93blxuXHRcdFx0XHQuZ2V0TWVudSgpXG5cdFx0XHRcdC5maW5kU2VsZWN0ZWRJdGVtKCkgYXMgT08udWkuT3B0aW9uV2lkZ2V0IHwgbnVsbDtcblx0XHRcdHJldHVybiBzZWxlY3RlZEl0ZW0gPyAoc2VsZWN0ZWRJdGVtLmdldERhdGEoKSBhcyBzdHJpbmcpIDogdW5kZWZpbmVkO1xuXHRcdH07XG5cblx0XHRmb3IgKGNvbnN0IGF0dHJpYnV0aW9uRmllbGRzZXQgb2YgZmllbGRTZXRMYXlvdXQuZ2V0SXRlbXMoKSBhcyBPTy51aS5GaWVsZHNldExheW91dFtdKSB7XG5cdFx0XHRjb25zdCBhdHRyaWJ1dGlvbiA9IFtdO1xuXG5cdFx0XHRmb3IgKGNvbnN0IGZpZWxkTGF5b3V0IG9mIGF0dHJpYnV0aW9uRmllbGRzZXQuZ2V0SXRlbXMoKSBhcyBPTy51aS5GaWVsZExheW91dFtdKSB7XG5cdFx0XHRcdGNvbnN0IGZpZWxkID0gZmllbGRMYXlvdXQuZ2V0RmllbGQoKTtcblx0XHRcdFx0bGV0IHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cblx0XHRcdFx0aWYgKGZpZWxkLnN1cHBvcnRzKCdnZXRWYWx1ZScpKSB7XG5cdFx0XHRcdFx0dmFsdWUgPSAoZmllbGQgYXMgT08udWkuVGV4dElucHV0V2lkZ2V0KS5nZXRWYWx1ZSgpO1xuXHRcdFx0XHR9IGVsc2UgaWYgKGZpZWxkLnN1cHBvcnRzKCdnZXRNZW51JykpIHtcblx0XHRcdFx0XHR2YWx1ZSA9IGdldFNlbGVjdGVkVmFsdWUoZmllbGQgYXMgT08udWkuRHJvcGRvd25XaWRnZXQpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKHZhbHVlKSB7XG5cdFx0XHRcdFx0YXR0cmlidXRpb25bYXR0cmlidXRpb24ubGVuZ3RoXSA9IHZhbHVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGF0dHJpYnV0aW9uc1thdHRyaWJ1dGlvbnMubGVuZ3RoXSA9IGF0dHJpYnV0aW9uLmpvaW4oJywgJyk7XG5cdFx0fVxuXG5cdFx0Y29uc29sZS5sb2coYXR0cmlidXRpb25zKTtcblxuXHRcdHJldHVybiBhdHRyaWJ1dGlvbnMuam9pbignOyAnKTtcblx0fTtcblxuXHRsZXQgd3BBdHRyaWJ1dGlvbjogc3RyaW5nID0gJyc7XG5cblx0Y29uc3QgJHdwQXR0cmlidXRpb246IEpRdWVyeSA9ICQoJzxpbnB1dD4nKS5hdHRyKHtcblx0XHRpZDogJ3dwQXR0cmlidXRpb24nLFxuXHRcdG5hbWU6ICd3cEF0dHJpYnV0aW9uJyxcblx0XHR0eXBlOiAnaGlkZGVuJyxcblx0XHR2YWx1ZTogJycsXG5cdH0pO1xuXHRjb25zdCAkb3JpZ2lud3BBdHRyaWJ1dGlvbjogSlF1ZXJ5ID0gJGJvZHkuZmluZCgnaW5wdXRbbmFtZT13cEF0dHJpYnV0aW9uXScpO1xuXHRpZiAoISRvcmlnaW53cEF0dHJpYnV0aW9uLmxlbmd0aCkge1xuXHRcdCRib2R5LnByZXBlbmQoJHdwQXR0cmlidXRpb24pO1xuXHR9XG5cblx0d3BBdHRyaWJ1dGlvbiA9IGdlbmVyYXRlSW5mb01hcnRpeChwYXJlbnRGaWVsZFNldCk7XG5cdCRvcmlnaW53cEF0dHJpYnV0aW9uLnZhbCh3cEF0dHJpYnV0aW9uKTtcbn07XG5cbmV4cG9ydCB7bW9kaWZ5QXR0cmlidXRpb259O1xuIiwgImltcG9ydCB7TElDRU5TRVN9IGZyb20gJy4uL2NvbnN0YW50JztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi4vaTE4bic7XG5pbXBvcnQge21vZGlmeUF0dHJpYnV0aW9ufSBmcm9tICcuL21vZGlmeUF0dHJpYnV0aW9uU3VtbWFyeSc7XG5cbmNvbnN0IGdlbmVyYXRlVGV4dElucHV0V2l0aERyb3Bkb3duID0gKHskYm9keX06IHskYm9keTogSlF1ZXJ5PEhUTUxFbGVtZW50Pn0pID0+IHtcblx0Y29uc3QgZ2V0VGV4dElucHV0ID0gKG9uQ2hhbmdlPzogKGV2ZW50PzogRXZlbnQpID0+IHZvaWQpID0+IHtcblx0XHRjb25zdCB0ZXh0SW5wdXQgPSBuZXcgT08udWkuVGV4dElucHV0V2lkZ2V0KHtcblx0XHRcdHBsYWNlaG9sZGVyOiBnZXRNZXNzYWdlKCdTb3VyY2UnKSxcblx0XHR9KTtcblxuXHRcdGlmIChvbkNoYW5nZSkge1xuXHRcdFx0dGV4dElucHV0Lm9uKCdjaGFuZ2UnLCAoKSA9PiB7XG5cdFx0XHRcdG9uQ2hhbmdlKCk7XG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGV4dElucHV0O1xuXHR9O1xuXG5cdGNvbnN0IGdldERyb3BEb3duID0gKG9uQ2hhbmdlPzogKGV2ZW50PzogRXZlbnQpID0+IHZvaWQpID0+IHtcblx0XHRjb25zdCBkcm9wZG93bjogT08udWkuRHJvcGRvd25XaWRnZXQgPSBuZXcgT08udWkuRHJvcGRvd25XaWRnZXQoKTtcblxuXHRcdGNvbnN0IG1lbnVPcHRpb25zOiBPTy51aS5NZW51T3B0aW9uV2lkZ2V0W10gPSBbXTtcblxuXHRcdGZvciAoY29uc3Qge2RhdGEsIGxhYmVsfSBvZiBMSUNFTlNFUykge1xuXHRcdFx0bWVudU9wdGlvbnNbbWVudU9wdGlvbnMubGVuZ3RoXSA9IG5ldyBPTy51aS5NZW51T3B0aW9uV2lkZ2V0KHtcblx0XHRcdFx0ZGF0YSxcblx0XHRcdFx0bGFiZWwsXG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHRkcm9wZG93bi5nZXRNZW51KCkuYWRkSXRlbXMobWVudU9wdGlvbnMpO1xuXG5cdFx0aWYgKG9uQ2hhbmdlKSB7XG5cdFx0XHRkcm9wZG93bi5vbignY2hhbmdlJywgKCkgPT4ge1xuXHRcdFx0XHRvbkNoYW5nZSgpO1xuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGRyb3Bkb3duO1xuXHR9O1xuXG5cdGNvbnN0IGdldEFkZEl0ZW1CdXR0b24gPSAoLi4ub25DbGlja3M6ICgoZXZlbnQ/OiBFdmVudCkgPT4gdm9pZClbXSk6IE9PLnVpLkJ1dHRvbklucHV0V2lkZ2V0ID0+IHtcblx0XHRjb25zdCBhZGRJdGVtQnV0dG9uID0gbmV3IE9PLnVpLkJ1dHRvbklucHV0V2lkZ2V0KHtcblx0XHRcdGxhYmVsOiBnZXRNZXNzYWdlKCdBZGQnKSxcblx0XHR9KTtcblxuXHRcdGlmIChvbkNsaWNrcykge1xuXHRcdFx0Zm9yIChjb25zdCBvbkNsaWNrIG9mIG9uQ2xpY2tzKSB7XG5cdFx0XHRcdGFkZEl0ZW1CdXR0b24ub24oJ2NsaWNrJywgb25DbGljayk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGFkZEl0ZW1CdXR0b247XG5cdH07XG5cblx0Y29uc3QgZ2V0RGVsZXRlSXRlbUJ1dHRvbiA9ICguLi5vbkNsaWNrczogKChldmVudD86IEV2ZW50KSA9PiB2b2lkKVtdKTogT08udWkuQnV0dG9uSW5wdXRXaWRnZXQgPT4ge1xuXHRcdGNvbnN0IGRlbGV0ZUl0ZW1CdXR0b24gPSBuZXcgT08udWkuQnV0dG9uSW5wdXRXaWRnZXQoe1xuXHRcdFx0bGFiZWw6IGdldE1lc3NhZ2UoJ0RlbGV0ZScpLFxuXHRcdH0pO1xuXG5cdFx0aWYgKG9uQ2xpY2tzKSB7XG5cdFx0XHRmb3IgKGNvbnN0IG9uQ2xpY2sgb2Ygb25DbGlja3MpIHtcblx0XHRcdFx0ZGVsZXRlSXRlbUJ1dHRvbi5vbignY2xpY2snLCBvbkNsaWNrKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gZGVsZXRlSXRlbUJ1dHRvbjtcblx0fTtcblxuXHRjb25zdCBwYXJlbnRGaWVsZFNldCA9IG5ldyBPTy51aS5GaWVsZHNldExheW91dCh7XG5cdFx0bGFiZWw6IGdldE1lc3NhZ2UoJ1NvdXJjZXMgYW5kIExpY2Vuc2VzJyksXG5cdH0pO1xuXG5cdGNvbnN0IGlucHV0T25DaGFuZ2UgPSAoKSA9PiB7XG5cdFx0bW9kaWZ5QXR0cmlidXRpb24oeyRib2R5LCBwYXJlbnRGaWVsZFNldH0pO1xuXHR9O1xuXG5cdGNvbnN0IGFkZEl0ZW1PbkNsaWNrID0gKCkgPT4ge1xuXHRcdHBhcmVudEZpZWxkU2V0LmFkZEl0ZW1zKFtnZXRGb2xsb3dVcEZpZWxkc2V0KCldKTtcblx0fTtcblxuXHRjb25zdCBkZWxldGVJdGVtT25DbGljayA9IChpdGVtOiBPTy51aS5GaWVsZHNldExheW91dCkgPT4ge1xuXHRcdHBhcmVudEZpZWxkU2V0LnJlbW92ZUl0ZW1zKFtpdGVtXSk7XG5cdH07XG5cblx0Y29uc3QgaW5pdGlhbEZpZWxkc2V0ID0gbmV3IE9PLnVpLkZpZWxkc2V0TGF5b3V0KCk7XG5cdGluaXRpYWxGaWVsZHNldC5hZGRJdGVtcyhbXG5cdFx0bmV3IE9PLnVpLkZpZWxkTGF5b3V0KGdldFRleHRJbnB1dChpbnB1dE9uQ2hhbmdlKSwge2xhYmVsOiBnZXRNZXNzYWdlKCdTb3VyY2UnKSwgYWxpZ246ICdpbmxpbmUnfSksXG5cdFx0bmV3IE9PLnVpLkZpZWxkTGF5b3V0KGdldERyb3BEb3duKGlucHV0T25DaGFuZ2UpLCB7bGFiZWw6IGdldE1lc3NhZ2UoJ0xpY2Vuc2UnKSwgYWxpZ246ICdpbmxpbmUnfSksXG5cdFx0bmV3IE9PLnVpLkZpZWxkTGF5b3V0KGdldEFkZEl0ZW1CdXR0b24oYWRkSXRlbU9uQ2xpY2ssIGlucHV0T25DaGFuZ2UpLCB7YWxpZ246ICdpbmxpbmUnfSksXG5cdF0pO1xuXG5cdGNvbnN0IGdldEZvbGxvd1VwRmllbGRzZXQgPSAoKSA9PiB7XG5cdFx0Y29uc3QgZm9sbG93VXBGaWVsZHNldCA9IG5ldyBPTy51aS5GaWVsZHNldExheW91dCgpO1xuXHRcdGNvbnN0IGRlbGV0ZVRoaXNJdGVtID0gKCkgPT4ge1xuXHRcdFx0ZGVsZXRlSXRlbU9uQ2xpY2soZm9sbG93VXBGaWVsZHNldCk7XG5cdFx0fTtcblxuXHRcdGZvbGxvd1VwRmllbGRzZXQuYWRkSXRlbXMoW1xuXHRcdFx0bmV3IE9PLnVpLkZpZWxkTGF5b3V0KGdldFRleHRJbnB1dChpbnB1dE9uQ2hhbmdlKSwge2xhYmVsOiBnZXRNZXNzYWdlKCdTb3VyY2UnKSwgYWxpZ246ICdpbmxpbmUnfSksXG5cdFx0XHRuZXcgT08udWkuRmllbGRMYXlvdXQoZ2V0RHJvcERvd24oaW5wdXRPbkNoYW5nZSksIHtsYWJlbDogZ2V0TWVzc2FnZSgnTGljZW5zZScpLCBhbGlnbjogJ2lubGluZSd9KSxcblx0XHRcdG5ldyBPTy51aS5GaWVsZExheW91dChnZXRBZGRJdGVtQnV0dG9uKGFkZEl0ZW1PbkNsaWNrLCBpbnB1dE9uQ2hhbmdlKSwge2FsaWduOiAnaW5saW5lJ30pLFxuXHRcdFx0bmV3IE9PLnVpLkZpZWxkTGF5b3V0KGdldERlbGV0ZUl0ZW1CdXR0b24oZGVsZXRlVGhpc0l0ZW0sIGlucHV0T25DaGFuZ2UpLCB7YWxpZ246ICdpbmxpbmUnfSksXG5cdFx0XSk7XG5cblx0XHRyZXR1cm4gZm9sbG93VXBGaWVsZHNldDtcblx0fTtcblxuXHRwYXJlbnRGaWVsZFNldC5hZGRJdGVtcyhbaW5pdGlhbEZpZWxkc2V0XSk7XG5cblx0cGFyZW50RmllbGRTZXQub24oJ2NoYW5nZScsICgpID0+IHtcblx0XHRtb2RpZnlBdHRyaWJ1dGlvbih7JGJvZHksIHBhcmVudEZpZWxkU2V0fSk7XG5cdH0pO1xuXG5cdHJldHVybiBwYXJlbnRGaWVsZFNldDtcbn07XG5cbmV4cG9ydCB7Z2VuZXJhdGVUZXh0SW5wdXRXaXRoRHJvcGRvd259O1xuIiwgImltcG9ydCB7bW9kaWZ5VmlzdWFsRWRpdG9yQ2hhbmdlVGFnLCBtb2RpZnlXaWtpRWRpdG9yQ2hhbmdlVGFnfSBmcm9tICcuL21vZGlmeUNoYW5nZVRhZyc7XG5pbXBvcnQge2dlbmVyYXRlVGV4dElucHV0V2l0aERyb3Bkb3dufSBmcm9tICcuL2dlbmVyYXRlVGV4dElucHV0V2l0aERyb3Bkb3duJztcblxuY29uc3QgZ2VuZXJhdGVWaXN1YWxFZGl0b3JDaGVja2JveExheW91dCA9ICh7XG5cdGlucHV0SWQsXG5cdGxhYmVsLFxuXHQkYm9keSxcblx0Y2hhbmdlVGFnLFxufToge1xuXHRpbnB1dElkPzogc3RyaW5nO1xuXHRsYWJlbDogc3RyaW5nO1xuXHQkYm9keTogSlF1ZXJ5PEhUTUxFbGVtZW50Pjtcblx0Y2hhbmdlVGFnPzogc3RyaW5nO1xufSkgPT4ge1xuXHRjb25zdCBjaGVja2JveDogT08udWkuQ2hlY2tib3hJbnB1dFdpZGdldCA9IG5ldyBPTy51aS5DaGVja2JveElucHV0V2lkZ2V0KHtcblx0XHRzZWxlY3RlZDogZmFsc2UsXG5cdH0pO1xuXG5cdGlmIChpbnB1dElkKSB7XG5cdFx0Y2hlY2tib3guc2V0SW5wdXRJZChpbnB1dElkKTtcblx0fVxuXG5cdGlmIChjaGFuZ2VUYWcpIHtcblx0XHRtb2RpZnlWaXN1YWxFZGl0b3JDaGFuZ2VUYWcoe2NoYW5nZVRhZywgY2hlY2tib3h9KTtcblx0fVxuXG5cdGNvbnN0IHRleHRJbnB1dFdpdGhEcm9wZG93biA9IGdlbmVyYXRlVGV4dElucHV0V2l0aERyb3Bkb3duKHskYm9keX0pO1xuXG5cdGNoZWNrYm94Lm9uKCdjaGFuZ2UnLCAoc2VsZWN0ZWQpID0+IHtcblx0XHR0ZXh0SW5wdXRXaXRoRHJvcGRvd24uJGVsZW1lbnQucHJvcCgnZGlzYWJsZWQnLCAhc2VsZWN0ZWQpO1xuXHR9KTtcblxuXHRjb25zdCBjaGVja2JveExheW91dDogT08udWkuRmllbGRMYXlvdXQ8T08udWkuQ2hlY2tib3hJbnB1dFdpZGdldD4gPSBuZXcgT08udWkuRmllbGRMYXlvdXQoY2hlY2tib3gsIHtcblx0XHRhbGlnbjogJ2lubGluZScsXG5cdFx0bGFiZWwsXG5cdH0pO1xuXG5cdGNvbnN0ICRsYXlvdXQgPSAkKCc8ZGl2PicpLmF0dHIoJ2lkJywgJ2VmYS1hcmVhJykuYXBwZW5kKGNoZWNrYm94TGF5b3V0LiRlbGVtZW50LCB0ZXh0SW5wdXRXaXRoRHJvcGRvd24uJGVsZW1lbnQpO1xuXG5cdHJldHVybiAkbGF5b3V0O1xufTtcblxuY29uc3QgZ2VuZXJhdGVXaWtpRWRpdG9yQ2hlY2tib3hMYXlvdXQgPSAoe1xuXHRpbnB1dElkLFxuXHRsYWJlbCxcblx0Y2hhbmdlVGFnLFxuXHQkYm9keSxcblx0JGVkaXRGb3JtLFxufToge1xuXHRpbnB1dElkPzogc3RyaW5nO1xuXHRsYWJlbDogc3RyaW5nO1xuXHRjaGFuZ2VUYWc/OiBzdHJpbmc7XG5cdCRib2R5OiBKUXVlcnk7XG5cdCRlZGl0Rm9ybTogSlF1ZXJ5O1xufSkgPT4ge1xuXHRjb25zdCBjaGVja2JveDogT08udWkuQ2hlY2tib3hJbnB1dFdpZGdldCA9IG5ldyBPTy51aS5DaGVja2JveElucHV0V2lkZ2V0KHtcblx0XHRzZWxlY3RlZDogZmFsc2UsXG5cdH0pO1xuXG5cdGlmIChpbnB1dElkKSB7XG5cdFx0Y2hlY2tib3guc2V0SW5wdXRJZChpbnB1dElkKTtcblx0fVxuXG5cdGlmIChjaGFuZ2VUYWcpIHtcblx0XHRtb2RpZnlXaWtpRWRpdG9yQ2hhbmdlVGFnKHtjaGFuZ2VUYWcsIGNoZWNrYm94LCAkZWRpdEZvcm19KTtcblx0fVxuXG5cdGNvbnN0IHRleHRJbnB1dFdpdGhEcm9wZG93biA9IGdlbmVyYXRlVGV4dElucHV0V2l0aERyb3Bkb3duKHskYm9keX0pO1xuXG5cdGNoZWNrYm94Lm9uKCdjaGFuZ2UnLCAoc2VsZWN0ZWQpID0+IHtcblx0XHR0ZXh0SW5wdXRXaXRoRHJvcGRvd24uJGVsZW1lbnQucHJvcCgnZGlzYWJsZWQnLCAhc2VsZWN0ZWQpO1xuXHR9KTtcblxuXHRjb25zdCBjaGVja2JveExheW91dDogT08udWkuRmllbGRMYXlvdXQ8T08udWkuQ2hlY2tib3hJbnB1dFdpZGdldD4gPSBuZXcgT08udWkuRmllbGRMYXlvdXQoY2hlY2tib3gsIHtcblx0XHRhbGlnbjogJ2lubGluZScsXG5cdFx0bGFiZWwsXG5cdH0pO1xuXG5cdGNvbnN0ICRsYXlvdXQgPSAkKCc8ZGl2PicpLmF0dHIoJ2lkJywgJ2VmYS1hcmVhJykuYXBwZW5kKGNoZWNrYm94TGF5b3V0LiRlbGVtZW50LCB0ZXh0SW5wdXRXaXRoRHJvcGRvd24uJGVsZW1lbnQpO1xuXG5cdHJldHVybiAkbGF5b3V0O1xufTtcbmV4cG9ydCB7Z2VuZXJhdGVWaXN1YWxFZGl0b3JDaGVja2JveExheW91dCwgZ2VuZXJhdGVXaWtpRWRpdG9yQ2hlY2tib3hMYXlvdXR9O1xuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnfi9FZGl0Zm9ybV9BdHRyaWJ1dGlvbi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHthcHBlbmRUZXh0VG9TdW1tYXJ5fSBmcm9tICcuL3V0aWwvY2hhbmdlU3VtbWFyeSc7XG5pbXBvcnQge2dlbmVyYXRlVmlzdWFsRWRpdG9yQ2hlY2tib3hMYXlvdXR9IGZyb20gJy4vdXRpbC9nZW5lcmF0ZUNoZWNrYm94TGF5b3V0JztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9pMThuJztcblxuY29uc3QgcHJvY2Vzc1Zpc3VhbEVkaXRvciA9ICh7JGJvZHl9OiB7JGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+fSk6IHZvaWQgPT4ge1xuXHQvLyBHdWFyZCBhZ2FpbnN0IGRvdWJsZSBpbmNsdXNpb25zXG5cdGlmIChtdy5jb25maWcuZ2V0KE9QVElPTlMuY29uZmlnS2V5KSkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0ICR0YXJnZXQ6IEpRdWVyeSA9ICRib2R5LmZpbmQoYC4ke09QVElPTlMudGFyZ2V0Q2xhc3NWZX1gKTtcblx0aWYgKCEkdGFyZ2V0Lmxlbmd0aCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdG13LmNvbmZpZy5zZXQoT1BUSU9OUy5jb25maWdLZXksIHRydWUpO1xuXG5cdGNvbnN0IGdldCRMYXlvdXQgPSAoKSA9PiB7XG5cdFx0cmV0dXJuIGdlbmVyYXRlVmlzdWFsRWRpdG9yQ2hlY2tib3hMYXlvdXQoe1xuXHRcdFx0aW5wdXRJZDogT1BUSU9OUy5pbnB1dElkLFxuXHRcdFx0bGFiZWw6IGdldE1lc3NhZ2UoJ1RoaXJkUGFydHlDb250ZW50Q29udGFpbmVkJyksXG5cdFx0XHQvLyBjaGFuZ2VUYWc6IE9QVElPTlMuY2hhbmdlVGFnLFxuXHRcdFx0JGJvZHksXG5cdFx0fSk7XG5cdH07XG5cblx0Y29uc3QgJGxheW91dCA9IGdldCRMYXlvdXQoKTtcblxuXHRpZiAoISRib2R5LmZpbmQoYCMke09QVElPTlMuaW5wdXRJZH1gKS5sZW5ndGgpIHtcblx0XHQkdGFyZ2V0LmFwcGVuZCgkbGF5b3V0KTtcblx0fVxuXG5cdG13Lmhvb2soJ3ZlLmFjdGl2YXRpb25Db21wbGV0ZScpLmFkZCgoKSA9PiB7XG5cdFx0Y29uc3Qge3RhcmdldH0gPSB3aW5kb3cudmUuaW5pdDtcblx0XHRjb25zdCB7c2F2ZURpYWxvZ30gPSB0YXJnZXQ7XG5cblx0XHRzYXZlRGlhbG9nLm9uKCdzYXZlJywgKCkgPT4ge1xuXHRcdFx0Y29uc3QgY3VzdG9tU3VtbWFyeSA9IFN0cmluZygkYm9keS5maW5kKCdpbnB1dFtuYW1lPXdwQXR0cmlidXRpb25dJykudmFsKCkpO1xuXHRcdFx0Y29uc3QgJHdwU3VtbWFyeSA9IHRhcmdldC5zYXZlRGlhbG9nLmVkaXRTdW1tYXJ5SW5wdXQuJGlucHV0O1xuXHRcdFx0YXBwZW5kVGV4dFRvU3VtbWFyeSh7Y3VzdG9tU3VtbWFyeSwgJHdwU3VtbWFyeX0pO1xuXHRcdFx0JGxheW91dC5yZXBsYWNlV2l0aChnZXQkTGF5b3V0KCkpO1xuXHRcdH0pO1xuXHR9KTtcbn07XG5cbmV4cG9ydCB7cHJvY2Vzc1Zpc3VhbEVkaXRvcn07XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICd+L0VkaXRmb3JtX0F0dHJpYnV0aW9uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge2FwcGVuZFRleHRUb1N1bW1hcnl9IGZyb20gJy4vdXRpbC9jaGFuZ2VTdW1tYXJ5JztcbmltcG9ydCB7Z2VuZXJhdGVXaWtpRWRpdG9yQ2hlY2tib3hMYXlvdXR9IGZyb20gJy4vdXRpbC9nZW5lcmF0ZUNoZWNrYm94TGF5b3V0JztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9pMThuJztcblxuY29uc3QgcHJvY2Vzc1dpa2lFZGl0b3IgPSAoeyRib2R5LCAkZWRpdEZvcm19OiB7JGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+OyAkZWRpdEZvcm06IEpRdWVyeX0pOiB2b2lkID0+IHtcblx0Ly8gR3VhcmQgYWdhaW5zdCBkb3VibGUgaW5jbHVzaW9uc1xuXHRpZiAobXcuY29uZmlnLmdldChPUFRJT05TLmNvbmZpZ0tleSkpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCAkdGFyZ2V0OiBKUXVlcnkgPSAkZWRpdEZvcm0uZmluZChPUFRJT05TLnRhcmdldFdpa2lFZGl0b3IpO1xuXHRpZiAoISR0YXJnZXQubGVuZ3RoKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0bXcuY29uZmlnLnNldChPUFRJT05TLmNvbmZpZ0tleSwgdHJ1ZSk7XG5cblx0Y29uc3QgZ2V0JExheW91dCA9ICgpID0+IHtcblx0XHRyZXR1cm4gZ2VuZXJhdGVXaWtpRWRpdG9yQ2hlY2tib3hMYXlvdXQoe1xuXHRcdFx0aW5wdXRJZDogT1BUSU9OUy5pbnB1dElkLFxuXHRcdFx0bGFiZWw6IGdldE1lc3NhZ2UoJ1RoaXJkUGFydHlDb250ZW50Q29udGFpbmVkJyksXG5cdFx0XHQkYm9keSxcblx0XHRcdCRlZGl0Rm9ybSxcblx0XHRcdC8vIGNoYW5nZVRhZzogT1BUSU9OUy5jaGFuZ2VUYWcsXG5cdFx0fSk7XG5cdH07XG5cblx0Y29uc3QgJGxheW91dCA9IGdldCRMYXlvdXQoKTtcblxuXHRpZiAoISRib2R5LmZpbmQoYCMke09QVElPTlMuaW5wdXRJZH1gKS5sZW5ndGgpIHtcblx0XHQkdGFyZ2V0LmFmdGVyKCRsYXlvdXQpO1xuXHR9XG5cblx0JGVkaXRGb3JtLm9uKCdzdWJtaXQnLCAoKSA9PiB7XG5cdFx0Y29uc3QgY3VzdG9tU3VtbWFyeSA9IFN0cmluZygkYm9keS5maW5kKCdpbnB1dFtuYW1lPXdwQXR0cmlidXRpb25dJykudmFsKCkpO1xuXHRcdGNvbnN0ICR3cFN1bW1hcnkgPSAkZWRpdEZvcm0uZmluZCgnaW5wdXRbbmFtZT13cFN1bW1hcnldJyk7XG5cdFx0YXBwZW5kVGV4dFRvU3VtbWFyeSh7Y3VzdG9tU3VtbWFyeSwgJHdwU3VtbWFyeX0pO1xuXHRcdCRsYXlvdXQucmVwbGFjZVdpdGgoZ2V0JExheW91dCgpKTtcblx0fSk7XG59O1xuXG5leHBvcnQge3Byb2Nlc3NXaWtpRWRpdG9yfTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNDLElBQUFBLFlBQWE7QUFFYixJQUFBQyxVQUFXO0FBQ1gsSUFBQUMsZ0JBQWlCO0FBQ2pCLElBQUFDLG1CQUFvQjs7QUNKckIsSUFBQUMs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LHNCQUFrQjtNQUNqQjVIO01BQ0FWO0lBQ0QsQ0FBQztFQUNGLENBQUM7QUFFRHlILEtBQUdNLEtBQUssNEJBQTRCLEVBQUVDLElBQUksTUFBWTtBQUNyRFIsd0JBQW9CO01BQ25COUc7SUFDRCxDQUFDO0VBQ0YsQ0FBQztBQUdEK0csS0FBR00sS0FBSyx1QkFBdUIsRUFBRUMsSUFBSSxNQUFNO0FBQzFDLFFBQUlQLEdBQUdDLE9BQU9DLElBQVk5SixTQUFTLEdBQUc7QUFDckM0SixTQUFHQyxPQUFPRyxJQUFZaEssV0FBVyxLQUFLO0lBQ3ZDO0VBQ0QsQ0FBQztBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbImNvbmZpZ0tleSIsICJpbnB1dElkIiwgInRhcmdldENsYXNzVmUiLCAidGFyZ2V0V2lraUVkaXRvciIsICJpbXBvcnRfZXh0X2dhZGdldDIiLCAicmVxdWlyZSIsICJhcHBlbmRUZXh0VG9TdW1tYXJ5IiwgImN1c3RvbVN1bW1hcnkiLCAiJHdwU3VtbWFyeSIsICJfJHdwU3VtbWFyeSR2YWwiLCAib3JpZ2luU3VtbWFyeSIsICJ2YWwiLCAidHJpbSIsICJjb25jYXQiLCAidHJpZ2dlciIsICJtb2RpZnlWaXN1YWxFZGl0b3JDaGFuZ2VUYWciLCAiY2hhbmdlVGFnIiwgImNoZWNrYm94IiwgIm9uIiwgIl93aW5kb3ckdmUkaW5pdCR0YXJnZSIsICJfd2luZG93JHZlJGluaXQkdGFyZ2UyIiwgIl93aW5kb3ckdmUkaW5pdCR0YXJnZTMiLCAiZ2VuZXJhdGVDaGFuZ2VUYWdzIiwgIm9yaWdpbkNoYW5nZVRhZ3MiLCAiaXNTZWxlY3RlZCIsICJyZXBsYWNlIiwgImNoYW5nZVRhZ3MiLCAid2luZG93IiwgInZlIiwgImluaXQiLCAidGFyZ2V0IiwgInNhdmVGaWVsZHMiLCAid3BDaGFuZ2VUYWdzIiwgImNhbGwiLCAibW9kaWZ5V2lraUVkaXRvckNoYW5nZVRhZyIsICIkZWRpdEZvcm0iLCAiXyRvcmlnaW5XcENoYW5nZVRhZ3MkIiwgIl8kb3JpZ2luV3BDaGFuZ2VUYWdzJDIiLCAiJHdwQ2hhbmdlVGFncyIsICIkIiwgImF0dHIiLCAiaWQiLCAibmFtZSIsICJ0eXBlIiwgInZhbHVlIiwgIiRib2R5IiwgInBhcmVudHMiLCAiJG9yaWdpbldwQ2hhbmdlVGFncyIsICJmaW5kIiwgImxlbmd0aCIsICJwcmVwZW5kIiwgInRvU3RyaW5nIiwgIkxJQ0VOU0VTIiwgImxhYmVsIiwgImRhdGEiLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAiZ2V0STE4bk1lc3NhZ2VzIiwgIkFkZCIsICJsb2NhbGl6ZSIsICJlbiIsICJ6aCIsICJEZWxldGUiLCAiU291cmNlIiwgIkxpY2Vuc2UiLCAiVGhpcmRQYXJ0eUNvbnRlbnRDb250YWluZWQiLCAiUWl1d2VuQ29udGVudENvbnRhaW5lZCIsICJpMThuTWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAibW9kaWZ5QXR0cmlidXRpb24iLCAicGFyZW50RmllbGRTZXQiLCAiZ2VuZXJhdGVJbmZvTWFydGl4IiwgImZpZWxkU2V0TGF5b3V0IiwgImF0dHJpYnV0aW9ucyIsICJnZXRTZWxlY3RlZFZhbHVlIiwgImRyb3Bkb3duIiwgInNlbGVjdGVkSXRlbSIsICJnZXRNZW51IiwgImZpbmRTZWxlY3RlZEl0ZW0iLCAiZ2V0RGF0YSIsICJfaXRlcmF0b3IiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAiZ2V0SXRlbXMiLCAiX3N0ZXAiLCAicyIsICJuIiwgImRvbmUiLCAiYXR0cmlidXRpb25GaWVsZHNldCIsICJhdHRyaWJ1dGlvbiIsICJfaXRlcmF0b3IyIiwgIl9zdGVwMiIsICJmaWVsZExheW91dCIsICJmaWVsZCIsICJnZXRGaWVsZCIsICJzdXBwb3J0cyIsICJnZXRWYWx1ZSIsICJlcnIiLCAiZSIsICJmIiwgImpvaW4iLCAiY29uc29sZSIsICJsb2ciLCAid3BBdHRyaWJ1dGlvbiIsICIkd3BBdHRyaWJ1dGlvbiIsICIkb3JpZ2lud3BBdHRyaWJ1dGlvbiIsICJnZW5lcmF0ZVRleHRJbnB1dFdpdGhEcm9wZG93biIsICJnZXRUZXh0SW5wdXQiLCAib25DaGFuZ2UiLCAidGV4dElucHV0IiwgIk9PIiwgInVpIiwgIlRleHRJbnB1dFdpZGdldCIsICJwbGFjZWhvbGRlciIsICJnZXREcm9wRG93biIsICJEcm9wZG93bldpZGdldCIsICJtZW51T3B0aW9ucyIsICJfaSIsICJfTElDRU5TRVMiLCAiTWVudU9wdGlvbldpZGdldCIsICJhZGRJdGVtcyIsICJnZXRBZGRJdGVtQnV0dG9uIiwgIm9uQ2xpY2tzIiwgImFkZEl0ZW1CdXR0b24iLCAiQnV0dG9uSW5wdXRXaWRnZXQiLCAiX2l0ZXJhdG9yMyIsICJfc3RlcDMiLCAib25DbGljayIsICJnZXREZWxldGVJdGVtQnV0dG9uIiwgImRlbGV0ZUl0ZW1CdXR0b24iLCAiX2l0ZXJhdG9yNCIsICJfc3RlcDQiLCAiRmllbGRzZXRMYXlvdXQiLCAiaW5wdXRPbkNoYW5nZSIsICJhZGRJdGVtT25DbGljayIsICJnZXRGb2xsb3dVcEZpZWxkc2V0IiwgImRlbGV0ZUl0ZW1PbkNsaWNrIiwgIml0ZW0iLCAicmVtb3ZlSXRlbXMiLCAiaW5pdGlhbEZpZWxkc2V0IiwgIkZpZWxkTGF5b3V0IiwgImFsaWduIiwgImZvbGxvd1VwRmllbGRzZXQiLCAiZGVsZXRlVGhpc0l0ZW0iLCAiZ2VuZXJhdGVWaXN1YWxFZGl0b3JDaGVja2JveExheW91dCIsICJpbnB1dElkMiIsICJDaGVja2JveElucHV0V2lkZ2V0IiwgInNlbGVjdGVkIiwgInNldElucHV0SWQiLCAidGV4dElucHV0V2l0aERyb3Bkb3duIiwgIiRlbGVtZW50IiwgInByb3AiLCAiY2hlY2tib3hMYXlvdXQiLCAiJGxheW91dCIsICJhcHBlbmQiLCAiZ2VuZXJhdGVXaWtpRWRpdG9yQ2hlY2tib3hMYXlvdXQiLCAicHJvY2Vzc1Zpc3VhbEVkaXRvciIsICJtdyIsICJjb25maWciLCAiZ2V0IiwgIiR0YXJnZXQiLCAic2V0IiwgImdldCRMYXlvdXQiLCAiaG9vayIsICJhZGQiLCAic2F2ZURpYWxvZyIsICJTdHJpbmciLCAiZWRpdFN1bW1hcnlJbnB1dCIsICIkaW5wdXQiLCAicmVwbGFjZVdpdGgiLCAicHJvY2Vzc1dpa2lFZGl0b3IiLCAiYWZ0ZXIiLCAiZ2V0Qm9keSIsICJ0aGVuIiwgImVkaXRGb3JtIl0KfQo=

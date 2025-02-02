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
  const getDropDown = (onSelect) => {
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0VkaXRmb3JtX0F0dHJpYnV0aW9uL29wdGlvbnMuanNvbiIsICJzcmMvRWRpdGZvcm1fQXR0cmlidXRpb24vRWRpdGZvcm1fQXR0cmlidXRpb24udHMiLCAic3JjL0VkaXRmb3JtX0F0dHJpYnV0aW9uL21vZHVsZXMvdXRpbC9jaGFuZ2VTdW1tYXJ5LnRzIiwgInNyYy9FZGl0Zm9ybV9BdHRyaWJ1dGlvbi9tb2R1bGVzL3V0aWwvbW9kaWZ5Q2hhbmdlVGFnLnRzIiwgInNyYy9FZGl0Zm9ybV9BdHRyaWJ1dGlvbi9tb2R1bGVzL2NvbnN0YW50LnRzIiwgInNyYy9FZGl0Zm9ybV9BdHRyaWJ1dGlvbi9tb2R1bGVzL2kxOG4udHMiLCAic3JjL0VkaXRmb3JtX0F0dHJpYnV0aW9uL21vZHVsZXMvdXRpbC9tb2RpZnlBdHRyaWJ1dGlvblN1bW1hcnkudHMiLCAic3JjL0VkaXRmb3JtX0F0dHJpYnV0aW9uL21vZHVsZXMvdXRpbC9nZW5lcmF0ZVRleHRJbnB1dFdpdGhEcm9wZG93bi50cyIsICJzcmMvRWRpdGZvcm1fQXR0cmlidXRpb24vbW9kdWxlcy91dGlsL2dlbmVyYXRlQ2hlY2tib3hMYXlvdXQudHMiLCAic3JjL0VkaXRmb3JtX0F0dHJpYnV0aW9uL21vZHVsZXMvcHJvY2Vzc1Zpc3VhbEVkaXRvci50cyIsICJzcmMvRWRpdGZvcm1fQXR0cmlidXRpb24vbW9kdWxlcy9wcm9jZXNzV2lraUVkaXRvci50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsie1xuXHRcImNvbmZpZ0tleVwiOiBcImdhZGdldC1FZGl0Zm9ybV9BdHRyaWJ1dGlvbl9fSW5pdGlhbGl6ZWRcIixcblx0XCJjaGFuZ2VUYWdcIjogXCJBdHRyaWJ1dGlvbl9hZGRlZFwiLFxuXHRcImlucHV0SWRcIjogXCJlZGl0Zm9ybV9hdHRyaWJ1dGlvblwiLFxuXHRcInRhcmdldENsYXNzVmVcIjogXCJ2ZS11aS1td1NhdmVEaWFsb2ctY2hlY2tib3hlc1wiLFxuXHRcInRhcmdldFdpa2lFZGl0b3JcIjogXCIuZWRpdENoZWNrYm94ZXMgLm9vLXVpLWhvcml6b250YWxMYXlvdXRcIlxufVxuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtnZXRCb2R5fSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuaW1wb3J0IHtwcm9jZXNzVmlzdWFsRWRpdG9yfSBmcm9tICcuL21vZHVsZXMvcHJvY2Vzc1Zpc3VhbEVkaXRvcic7XG5pbXBvcnQge3Byb2Nlc3NXaWtpRWRpdG9yfSBmcm9tICcuL21vZHVsZXMvcHJvY2Vzc1dpa2lFZGl0b3InO1xuXG4vKipcbiAqIEBkZXNjcmlwdGlvbiDnrKzkuInmlrnmnaXmupDnibnmrorlo7DmmI5cbiAqL1xudm9pZCBnZXRCb2R5KCkudGhlbihmdW5jdGlvbiBlZGl0Rm9ybSgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkIHtcblx0bXcuaG9vaygnd2lraXBhZ2UuZWRpdGZvcm0nKS5hZGQoKCRlZGl0Rm9ybSk6IHZvaWQgPT4ge1xuXHRcdHByb2Nlc3NXaWtpRWRpdG9yKHtcblx0XHRcdCRib2R5LFxuXHRcdFx0JGVkaXRGb3JtLFxuXHRcdH0pO1xuXHR9KTtcblxuXHRtdy5ob29rKCd2ZS5zYXZlRGlhbG9nLnN0YXRlQ2hhbmdlZCcpLmFkZCgoKTogdm9pZCA9PiB7XG5cdFx0cHJvY2Vzc1Zpc3VhbEVkaXRvcih7XG5cdFx0XHQkYm9keSxcblx0XHR9KTtcblx0fSk7XG5cblx0Ly8gV2hlbiBzd2l0Y2hpbmcgYmV0d2VlbiBWRSBhbmQgTldFLCByZS1pbml0aWFsaXphdGlvbiBpcyByZXF1aXJlZFxuXHRtdy5ob29rKCd2ZS5hY3RpdmF0aW9uQ29tcGxldGUnKS5hZGQoKCkgPT4ge1xuXHRcdGlmIChtdy5jb25maWcuZ2V0KE9QVElPTlMuY29uZmlnS2V5KSkge1xuXHRcdFx0bXcuY29uZmlnLnNldChPUFRJT05TLmNvbmZpZ0tleSwgZmFsc2UpO1xuXHRcdH1cblx0fSk7XG59KTtcbiIsICJjb25zdCBhcHBlbmRUZXh0VG9TdW1tYXJ5ID0gKHtjdXN0b21TdW1tYXJ5LCAkd3BTdW1tYXJ5fToge2N1c3RvbVN1bW1hcnk6IHN0cmluZzsgJHdwU3VtbWFyeTogSlF1ZXJ5fSk6IHZvaWQgPT4ge1xuXHRjb25zdCBvcmlnaW5TdW1tYXJ5OiBzdHJpbmcgPSAoJHdwU3VtbWFyeS52YWwoKSBhcyBzdHJpbmcgfCB1bmRlZmluZWQpID8/ICcnO1xuXG5cdCR3cFN1bW1hcnkudmFsKG9yaWdpblN1bW1hcnkudHJpbSgpID8gYCR7b3JpZ2luU3VtbWFyeX0gJHtjdXN0b21TdW1tYXJ5fWAgOiBjdXN0b21TdW1tYXJ5KS50cmlnZ2VyKCdjaGFuZ2UnKTtcbn07XG5cbmV4cG9ydCB7YXBwZW5kVGV4dFRvU3VtbWFyeX07XG4iLCAiY29uc3QgbW9kaWZ5VmlzdWFsRWRpdG9yQ2hhbmdlVGFnID0gKHtcblx0Y2hhbmdlVGFnLFxuXHRjaGVja2JveCxcbn06IHtcblx0Y2hhbmdlVGFnOiBzdHJpbmc7XG5cdGNoZWNrYm94OiBPTy51aS5DaGVja2JveElucHV0V2lkZ2V0O1xufSk6IHZvaWQgPT4ge1xuXHRjaGVja2JveC5vbignY2hhbmdlJywgKCk6IHZvaWQgPT4ge1xuXHRcdGNvbnN0IGdlbmVyYXRlQ2hhbmdlVGFncyA9IChvcmlnaW5DaGFuZ2VUYWdzOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuXHRcdFx0cmV0dXJuIGNoZWNrYm94LmlzU2VsZWN0ZWQoKVxuXHRcdFx0XHQ/IGAke29yaWdpbkNoYW5nZVRhZ3N9LCR7Y2hhbmdlVGFnfWBcblx0XHRcdFx0OiBvcmlnaW5DaGFuZ2VUYWdzLnJlcGxhY2UoYCwke2NoYW5nZVRhZ31gLCAnJyk7XG5cdFx0fTtcblxuXHRcdGxldCBjaGFuZ2VUYWdzOiBzdHJpbmcgPSAnJztcblx0XHRjaGFuZ2VUYWdzID0gZ2VuZXJhdGVDaGFuZ2VUYWdzKHdpbmRvdy52ZS5pbml0LnRhcmdldC5zYXZlRmllbGRzLndwQ2hhbmdlVGFncz8uKCkgPz8gJycpO1xuXHRcdHdpbmRvdy52ZS5pbml0LnRhcmdldC5zYXZlRmllbGRzLndwQ2hhbmdlVGFncyA9ICgpOiBzdHJpbmcgPT4ge1xuXHRcdFx0cmV0dXJuIGNoYW5nZVRhZ3M7XG5cdFx0fTtcblx0fSk7XG59O1xuXG5jb25zdCBtb2RpZnlXaWtpRWRpdG9yQ2hhbmdlVGFnID0gKHtcblx0Y2hhbmdlVGFnLFxuXHRjaGVja2JveCxcblx0JGVkaXRGb3JtLFxufToge1xuXHRjaGFuZ2VUYWc6IHN0cmluZztcblx0Y2hlY2tib3g6IE9PLnVpLkNoZWNrYm94SW5wdXRXaWRnZXQ7XG5cdCRlZGl0Rm9ybTogSlF1ZXJ5O1xufSk6IHZvaWQgPT4ge1xuXHRjaGVja2JveC5vbignY2hhbmdlJywgKCk6IHZvaWQgPT4ge1xuXHRcdGNvbnN0IGdlbmVyYXRlQ2hhbmdlVGFncyA9IChvcmlnaW5DaGFuZ2VUYWdzOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuXHRcdFx0cmV0dXJuIGNoZWNrYm94LmlzU2VsZWN0ZWQoKVxuXHRcdFx0XHQ/IGAke29yaWdpbkNoYW5nZVRhZ3N9LCR7Y2hhbmdlVGFnfWBcblx0XHRcdFx0OiBvcmlnaW5DaGFuZ2VUYWdzLnJlcGxhY2UoYCwke2NoYW5nZVRhZ31gLCAnJyk7XG5cdFx0fTtcblxuXHRcdGxldCBjaGFuZ2VUYWdzOiBzdHJpbmcgPSAnJztcblxuXHRcdGNvbnN0ICR3cENoYW5nZVRhZ3M6IEpRdWVyeSA9ICQoJzxpbnB1dD4nKS5hdHRyKHtcblx0XHRcdGlkOiAnd3BDaGFuZ2VUYWdzJyxcblx0XHRcdG5hbWU6ICd3cENoYW5nZVRhZ3MnLFxuXHRcdFx0dHlwZTogJ2hpZGRlbicsXG5cdFx0XHR2YWx1ZTogJycsXG5cdFx0fSk7XG5cdFx0Y29uc3QgJGJvZHkgPSAkZWRpdEZvcm0ucGFyZW50cygnYm9keScpO1xuXHRcdGNvbnN0ICRvcmlnaW5XcENoYW5nZVRhZ3M6IEpRdWVyeSA9ICRib2R5LmZpbmQoJ2lucHV0W25hbWU9d3BDaGFuZ2VUYWdzXScpO1xuXHRcdGlmICghJG9yaWdpbldwQ2hhbmdlVGFncy5sZW5ndGgpIHtcblx0XHRcdCRib2R5LnByZXBlbmQoJHdwQ2hhbmdlVGFncyk7XG5cdFx0fVxuXHRcdGNoYW5nZVRhZ3MgPSBnZW5lcmF0ZUNoYW5nZVRhZ3MoJG9yaWdpbldwQ2hhbmdlVGFncy52YWwoKT8udG9TdHJpbmcoKSA/PyAnJyk7XG5cdFx0JG9yaWdpbldwQ2hhbmdlVGFncy52YWwoY2hhbmdlVGFncyk7XG5cdH0pO1xufTtcblxuZXhwb3J0IHttb2RpZnlWaXN1YWxFZGl0b3JDaGFuZ2VUYWcsIG1vZGlmeVdpa2lFZGl0b3JDaGFuZ2VUYWd9O1xuIiwgImNvbnN0IExJQ0VOU0VTID0gW1xuXHR7XG5cdFx0bGFiZWw6ICdDQyBCWS1TQSA0LjAnLFxuXHRcdGRhdGE6ICdodHRwczovL2NyZWF0aXZlY29tbW9ucy5vcmcvbGljZW5zZXMvYnktc2EvNC4wLycsXG5cdH0sXG5cdHtcblx0XHRsYWJlbDogJ0NDIEJZLVNBIDMuMCcsXG5cdFx0ZGF0YTogJ2h0dHBzOi8vY3JlYXRpdmVjb21tb25zLm9yZy9saWNlbnNlcy9ieS1zYS8zLjAvJyxcblx0fSxcblx0e1xuXHRcdGxhYmVsOiAnQ0MgQlktU0EgMy4wIENOJyxcblx0XHRkYXRhOiAnaHR0cHM6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL2xpY2Vuc2VzL2J5LXNhLzMuMC9jbi8nLFxuXHR9LFxuXHR7XG5cdFx0bGFiZWw6ICdDQzAtMS4wJyxcblx0XHRkYXRhOiAnaHR0cHM6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL3B1YmxpY2RvbWFpbi96ZXJvLzEuMC8nLFxuXHR9LFxuXHR7XG5cdFx0bGFiZWw6ICdLT0dMIFR5cGUgSTogQXR0cmlidXRpb24nLFxuXHRcdGRhdGE6ICdodHRwczovL3d3dy5rb2dsLm9yLmtyL2luZm8vbGljZW5zZVR5cGUxLmRvJyxcblx0fSxcbl07XG5cbmV4cG9ydCB7TElDRU5TRVN9O1xuIiwgImltcG9ydCB7bG9jYWxpemV9IGZyb20gJ2V4dC5nYWRnZXQuaTE4bic7XG5cbmNvbnN0IGdldEkxOG5NZXNzYWdlcyA9ICgpID0+IHtcblx0cmV0dXJuIHtcblx0XHRBZGQ6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQWRkJyxcblx0XHRcdHpoOiAn5aKe5YqgJyxcblx0XHR9KSxcblx0XHREZWxldGU6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnRGVsZXRlJyxcblx0XHRcdHpoOiAn56e76ZmkJyxcblx0XHR9KSxcblx0XHRTb3VyY2U6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnU291cmNlJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WGheWuueadpea6kCcsXG5cdFx0XHQnemgtaGFudCc6ICflhaflrrnkvobmupAnLFxuXHRcdH0pLFxuXHRcdExpY2Vuc2U6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnTGljZW5zZScsXG5cdFx0XHQnemgtaGFucyc6ICforrjlj6/or4EnLFxuXHRcdFx0J3poLWhhbnQnOiAn6Kix5Y+v6K2JJyxcblx0XHR9KSxcblx0XHQnU291cmNlcyBhbmQgTGljZW5zZXMnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1NvdXJjZXMgYW5kIExpY2Vuc2VzJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WGheWuueadpea6kOWPiuiuuOWPr+ivgScsXG5cdFx0XHQnemgtaGFudCc6ICflhaflrrnkvobmupDlj4roqLHlj6/orYknLFxuXHRcdH0pLFxuXHRcdFRoaXJkUGFydHlDb250ZW50Q29udGFpbmVkOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1RoaXMgZWRpdG9yIGNvbnRhaW5zIHRoaXJkLXBhcnR5IGNvbnRlbnQuJyxcblx0XHRcdCd6aC1oYW5zJzogJ+atpOe8lui+keWQq+acieesrOS4ieaWueWGheWuuScsXG5cdFx0XHQnemgtaGFudCc6ICfmraTnt6jovK/lkKvmnInnrKzkuInmlrnlhaflrrknLFxuXHRcdH0pLFxuXHRcdFFpdXdlbkNvbnRlbnRDb250YWluZWQ6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnVGhpcyBlZGl0b3IgY29udGFpbnMgY29udGVudCBmcm9tIG90aGVyIHBhZ2VzIG9mIFFpdXdlbiBCYWlrZS4nLFxuXHRcdFx0J3poLWhhbnMnOiAn5q2k57yW6L6R5ZCr5pyJ5rGC6Ze755m+56eR5YW25LuW6aG16Z2i55qE5YaF5a65Jyxcblx0XHRcdCd6aC1oYW50JzogJ+atpOe3qOi8r+WQq+acieaxguiBnueZvuenkeWFtuS7lumggemdoueahOWFp+WuuScsXG5cdFx0fSksXG5cdH07XG59O1xuXG5jb25zdCBpMThuTWVzc2FnZXMgPSBnZXRJMThuTWVzc2FnZXMoKTtcblxuY29uc3QgZ2V0TWVzc2FnZTogR2V0TWVzc2FnZXM8dHlwZW9mIGkxOG5NZXNzYWdlcz4gPSAoa2V5KSA9PiB7XG5cdHJldHVybiBpMThuTWVzc2FnZXNba2V5XSB8fCBrZXk7XG59O1xuXG5leHBvcnQge2dldE1lc3NhZ2V9O1xuIiwgImNvbnN0IG1vZGlmeUF0dHJpYnV0aW9uID0gKHtcblx0JGJvZHksXG5cdHBhcmVudEZpZWxkU2V0LFxufToge1xuXHQkYm9keTogSlF1ZXJ5PEhUTUxFbGVtZW50Pjtcblx0cGFyZW50RmllbGRTZXQ6IE9PLnVpLkZpZWxkc2V0TGF5b3V0O1xufSkgPT4ge1xuXHRjb25zdCBnZW5lcmF0ZUluZm9NYXJ0aXggPSAoZmllbGRTZXRMYXlvdXQ6IE9PLnVpLkZpZWxkc2V0TGF5b3V0KSA9PiB7XG5cdFx0Y29uc3QgYXR0cmlidXRpb25zID0gW107XG5cblx0XHRjb25zdCBnZXRTZWxlY3RlZFZhbHVlID0gKGRyb3Bkb3duOiBPTy51aS5Ecm9wZG93bldpZGdldCk6IHN0cmluZyB8IHVuZGVmaW5lZCA9PiB7XG5cdFx0XHRjb25zdCBzZWxlY3RlZEl0ZW06IE9PLnVpLk9wdGlvbldpZGdldCB8IG51bGwgPSBkcm9wZG93blxuXHRcdFx0XHQuZ2V0TWVudSgpXG5cdFx0XHRcdC5maW5kU2VsZWN0ZWRJdGVtKCkgYXMgT08udWkuT3B0aW9uV2lkZ2V0IHwgbnVsbDtcblx0XHRcdHJldHVybiBzZWxlY3RlZEl0ZW0gPyAoc2VsZWN0ZWRJdGVtLmdldERhdGEoKSBhcyBzdHJpbmcpIDogdW5kZWZpbmVkO1xuXHRcdH07XG5cblx0XHRmb3IgKGNvbnN0IGF0dHJpYnV0aW9uRmllbGRzZXQgb2YgZmllbGRTZXRMYXlvdXQuZ2V0SXRlbXMoKSBhcyBPTy51aS5GaWVsZHNldExheW91dFtdKSB7XG5cdFx0XHRjb25zdCBhdHRyaWJ1dGlvbiA9IFtdO1xuXG5cdFx0XHRmb3IgKGNvbnN0IGZpZWxkTGF5b3V0IG9mIGF0dHJpYnV0aW9uRmllbGRzZXQuZ2V0SXRlbXMoKSBhcyBPTy51aS5GaWVsZExheW91dFtdKSB7XG5cdFx0XHRcdGNvbnN0IGZpZWxkID0gZmllbGRMYXlvdXQuZ2V0RmllbGQoKTtcblx0XHRcdFx0bGV0IHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cblx0XHRcdFx0aWYgKGZpZWxkLnN1cHBvcnRzKCdnZXRWYWx1ZScpKSB7XG5cdFx0XHRcdFx0dmFsdWUgPSAoZmllbGQgYXMgT08udWkuVGV4dElucHV0V2lkZ2V0KS5nZXRWYWx1ZSgpO1xuXHRcdFx0XHR9IGVsc2UgaWYgKGZpZWxkLnN1cHBvcnRzKCdnZXRNZW51JykpIHtcblx0XHRcdFx0XHR2YWx1ZSA9IGdldFNlbGVjdGVkVmFsdWUoZmllbGQgYXMgT08udWkuRHJvcGRvd25XaWRnZXQpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKHZhbHVlKSB7XG5cdFx0XHRcdFx0YXR0cmlidXRpb25bYXR0cmlidXRpb24ubGVuZ3RoXSA9IHZhbHVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGF0dHJpYnV0aW9uc1thdHRyaWJ1dGlvbnMubGVuZ3RoXSA9IGF0dHJpYnV0aW9uLmpvaW4oJywgJyk7XG5cdFx0fVxuXG5cdFx0Y29uc29sZS5sb2coYXR0cmlidXRpb25zKTtcblxuXHRcdHJldHVybiBhdHRyaWJ1dGlvbnMuam9pbignOyAnKTtcblx0fTtcblxuXHRsZXQgd3BBdHRyaWJ1dGlvbjogc3RyaW5nID0gJyc7XG5cblx0Y29uc3QgJHdwQXR0cmlidXRpb246IEpRdWVyeSA9ICQoJzxpbnB1dD4nKS5hdHRyKHtcblx0XHRpZDogJ3dwQXR0cmlidXRpb24nLFxuXHRcdG5hbWU6ICd3cEF0dHJpYnV0aW9uJyxcblx0XHR0eXBlOiAnaGlkZGVuJyxcblx0XHR2YWx1ZTogJycsXG5cdH0pO1xuXHRjb25zdCAkb3JpZ2lud3BBdHRyaWJ1dGlvbjogSlF1ZXJ5ID0gJGJvZHkuZmluZCgnaW5wdXRbbmFtZT13cEF0dHJpYnV0aW9uXScpO1xuXHRpZiAoISRvcmlnaW53cEF0dHJpYnV0aW9uLmxlbmd0aCkge1xuXHRcdCRib2R5LnByZXBlbmQoJHdwQXR0cmlidXRpb24pO1xuXHR9XG5cblx0d3BBdHRyaWJ1dGlvbiA9IGdlbmVyYXRlSW5mb01hcnRpeChwYXJlbnRGaWVsZFNldCk7XG5cdCRvcmlnaW53cEF0dHJpYnV0aW9uLnZhbCh3cEF0dHJpYnV0aW9uKTtcbn07XG5cbmV4cG9ydCB7bW9kaWZ5QXR0cmlidXRpb259O1xuIiwgImltcG9ydCB7TElDRU5TRVN9IGZyb20gJy4uL2NvbnN0YW50JztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi4vaTE4bic7XG5pbXBvcnQge21vZGlmeUF0dHJpYnV0aW9ufSBmcm9tICcuL21vZGlmeUF0dHJpYnV0aW9uU3VtbWFyeSc7XG5cbmNvbnN0IGdlbmVyYXRlVGV4dElucHV0V2l0aERyb3Bkb3duID0gKHskYm9keX06IHskYm9keTogSlF1ZXJ5PEhUTUxFbGVtZW50Pn0pID0+IHtcblx0Y29uc3QgZ2V0VGV4dElucHV0ID0gKG9uQ2hhbmdlPzogKGV2ZW50PzogRXZlbnQpID0+IHZvaWQpID0+IHtcblx0XHRjb25zdCB0ZXh0SW5wdXQgPSBuZXcgT08udWkuVGV4dElucHV0V2lkZ2V0KHtcblx0XHRcdHBsYWNlaG9sZGVyOiBnZXRNZXNzYWdlKCdTb3VyY2UnKSxcblx0XHR9KTtcblxuXHRcdGlmIChvbkNoYW5nZSkge1xuXHRcdFx0dGV4dElucHV0Lm9uKCdjaGFuZ2UnLCAoKSA9PiB7XG5cdFx0XHRcdG9uQ2hhbmdlKCk7XG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGV4dElucHV0O1xuXHR9O1xuXG5cdGNvbnN0IGdldERyb3BEb3duID0gKG9uU2VsZWN0PzogKGV2ZW50PzogRXZlbnQpID0+IHZvaWQpID0+IHtcblx0XHRjb25zdCBkcm9wZG93bjogT08udWkuRHJvcGRvd25XaWRnZXQgPSBuZXcgT08udWkuRHJvcGRvd25XaWRnZXQoKTtcblxuXHRcdGNvbnN0IG1lbnVPcHRpb25zOiBPTy51aS5NZW51T3B0aW9uV2lkZ2V0W10gPSBbXTtcblxuXHRcdGZvciAoY29uc3Qge2RhdGEsIGxhYmVsfSBvZiBMSUNFTlNFUykge1xuXHRcdFx0bWVudU9wdGlvbnNbbWVudU9wdGlvbnMubGVuZ3RoXSA9IG5ldyBPTy51aS5NZW51T3B0aW9uV2lkZ2V0KHtcblx0XHRcdFx0ZGF0YSxcblx0XHRcdFx0bGFiZWwsXG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHRkcm9wZG93bi5nZXRNZW51KCkuYWRkSXRlbXMobWVudU9wdGlvbnMpO1xuXG5cdFx0aWYgKG9uU2VsZWN0KSB7XG5cdFx0XHRkcm9wZG93bi5nZXRNZW51KCkub24oJ3NlbGVjdCcsICgpID0+IHtcblx0XHRcdFx0b25TZWxlY3QoKTtcblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdHJldHVybiBkcm9wZG93bjtcblx0fTtcblxuXHRjb25zdCBnZXRBZGRJdGVtQnV0dG9uID0gKC4uLm9uQ2xpY2tzOiAoKGV2ZW50PzogRXZlbnQpID0+IHZvaWQpW10pOiBPTy51aS5CdXR0b25JbnB1dFdpZGdldCA9PiB7XG5cdFx0Y29uc3QgYWRkSXRlbUJ1dHRvbiA9IG5ldyBPTy51aS5CdXR0b25JbnB1dFdpZGdldCh7XG5cdFx0XHRsYWJlbDogZ2V0TWVzc2FnZSgnQWRkJyksXG5cdFx0fSk7XG5cblx0XHRpZiAob25DbGlja3MpIHtcblx0XHRcdGZvciAoY29uc3Qgb25DbGljayBvZiBvbkNsaWNrcykge1xuXHRcdFx0XHRhZGRJdGVtQnV0dG9uLm9uKCdjbGljaycsIG9uQ2xpY2spO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBhZGRJdGVtQnV0dG9uO1xuXHR9O1xuXG5cdGNvbnN0IGdldERlbGV0ZUl0ZW1CdXR0b24gPSAoLi4ub25DbGlja3M6ICgoZXZlbnQ/OiBFdmVudCkgPT4gdm9pZClbXSk6IE9PLnVpLkJ1dHRvbklucHV0V2lkZ2V0ID0+IHtcblx0XHRjb25zdCBkZWxldGVJdGVtQnV0dG9uID0gbmV3IE9PLnVpLkJ1dHRvbklucHV0V2lkZ2V0KHtcblx0XHRcdGxhYmVsOiBnZXRNZXNzYWdlKCdEZWxldGUnKSxcblx0XHR9KTtcblxuXHRcdGlmIChvbkNsaWNrcykge1xuXHRcdFx0Zm9yIChjb25zdCBvbkNsaWNrIG9mIG9uQ2xpY2tzKSB7XG5cdFx0XHRcdGRlbGV0ZUl0ZW1CdXR0b24ub24oJ2NsaWNrJywgb25DbGljayk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGRlbGV0ZUl0ZW1CdXR0b247XG5cdH07XG5cblx0Y29uc3QgcGFyZW50RmllbGRTZXQgPSBuZXcgT08udWkuRmllbGRzZXRMYXlvdXQoe1xuXHRcdGxhYmVsOiBnZXRNZXNzYWdlKCdTb3VyY2VzIGFuZCBMaWNlbnNlcycpLFxuXHR9KTtcblxuXHRjb25zdCBpbnB1dE9uQ2hhbmdlID0gKCkgPT4ge1xuXHRcdG1vZGlmeUF0dHJpYnV0aW9uKHskYm9keSwgcGFyZW50RmllbGRTZXR9KTtcblx0fTtcblxuXHRjb25zdCBhZGRJdGVtT25DbGljayA9ICgpID0+IHtcblx0XHRwYXJlbnRGaWVsZFNldC5hZGRJdGVtcyhbZ2V0Rm9sbG93VXBGaWVsZHNldCgpXSk7XG5cdH07XG5cblx0Y29uc3QgZGVsZXRlSXRlbU9uQ2xpY2sgPSAoaXRlbTogT08udWkuRmllbGRzZXRMYXlvdXQpID0+IHtcblx0XHRwYXJlbnRGaWVsZFNldC5yZW1vdmVJdGVtcyhbaXRlbV0pO1xuXHR9O1xuXG5cdGNvbnN0IGluaXRpYWxGaWVsZHNldCA9IG5ldyBPTy51aS5GaWVsZHNldExheW91dCgpO1xuXHRpbml0aWFsRmllbGRzZXQuYWRkSXRlbXMoW1xuXHRcdG5ldyBPTy51aS5GaWVsZExheW91dChnZXRUZXh0SW5wdXQoaW5wdXRPbkNoYW5nZSksIHtsYWJlbDogZ2V0TWVzc2FnZSgnU291cmNlJyksIGFsaWduOiAnaW5saW5lJ30pLFxuXHRcdG5ldyBPTy51aS5GaWVsZExheW91dChnZXREcm9wRG93bihpbnB1dE9uQ2hhbmdlKSwge2xhYmVsOiBnZXRNZXNzYWdlKCdMaWNlbnNlJyksIGFsaWduOiAnaW5saW5lJ30pLFxuXHRcdG5ldyBPTy51aS5GaWVsZExheW91dChnZXRBZGRJdGVtQnV0dG9uKGFkZEl0ZW1PbkNsaWNrLCBpbnB1dE9uQ2hhbmdlKSwge2FsaWduOiAnaW5saW5lJ30pLFxuXHRdKTtcblxuXHRjb25zdCBnZXRGb2xsb3dVcEZpZWxkc2V0ID0gKCkgPT4ge1xuXHRcdGNvbnN0IGZvbGxvd1VwRmllbGRzZXQgPSBuZXcgT08udWkuRmllbGRzZXRMYXlvdXQoKTtcblx0XHRjb25zdCBkZWxldGVUaGlzSXRlbSA9ICgpID0+IHtcblx0XHRcdGRlbGV0ZUl0ZW1PbkNsaWNrKGZvbGxvd1VwRmllbGRzZXQpO1xuXHRcdH07XG5cblx0XHRmb2xsb3dVcEZpZWxkc2V0LmFkZEl0ZW1zKFtcblx0XHRcdG5ldyBPTy51aS5GaWVsZExheW91dChnZXRUZXh0SW5wdXQoaW5wdXRPbkNoYW5nZSksIHtsYWJlbDogZ2V0TWVzc2FnZSgnU291cmNlJyksIGFsaWduOiAnaW5saW5lJ30pLFxuXHRcdFx0bmV3IE9PLnVpLkZpZWxkTGF5b3V0KGdldERyb3BEb3duKGlucHV0T25DaGFuZ2UpLCB7bGFiZWw6IGdldE1lc3NhZ2UoJ0xpY2Vuc2UnKSwgYWxpZ246ICdpbmxpbmUnfSksXG5cdFx0XHRuZXcgT08udWkuRmllbGRMYXlvdXQoZ2V0QWRkSXRlbUJ1dHRvbihhZGRJdGVtT25DbGljaywgaW5wdXRPbkNoYW5nZSksIHthbGlnbjogJ2lubGluZSd9KSxcblx0XHRcdG5ldyBPTy51aS5GaWVsZExheW91dChnZXREZWxldGVJdGVtQnV0dG9uKGRlbGV0ZVRoaXNJdGVtLCBpbnB1dE9uQ2hhbmdlKSwge2FsaWduOiAnaW5saW5lJ30pLFxuXHRcdF0pO1xuXG5cdFx0cmV0dXJuIGZvbGxvd1VwRmllbGRzZXQ7XG5cdH07XG5cblx0cGFyZW50RmllbGRTZXQuYWRkSXRlbXMoW2luaXRpYWxGaWVsZHNldF0pO1xuXG5cdHBhcmVudEZpZWxkU2V0Lm9uKCdjaGFuZ2UnLCAoKSA9PiB7XG5cdFx0bW9kaWZ5QXR0cmlidXRpb24oeyRib2R5LCBwYXJlbnRGaWVsZFNldH0pO1xuXHR9KTtcblxuXHRyZXR1cm4gcGFyZW50RmllbGRTZXQ7XG59O1xuXG5leHBvcnQge2dlbmVyYXRlVGV4dElucHV0V2l0aERyb3Bkb3dufTtcbiIsICJpbXBvcnQge21vZGlmeVZpc3VhbEVkaXRvckNoYW5nZVRhZywgbW9kaWZ5V2lraUVkaXRvckNoYW5nZVRhZ30gZnJvbSAnLi9tb2RpZnlDaGFuZ2VUYWcnO1xuaW1wb3J0IHtnZW5lcmF0ZVRleHRJbnB1dFdpdGhEcm9wZG93bn0gZnJvbSAnLi9nZW5lcmF0ZVRleHRJbnB1dFdpdGhEcm9wZG93bic7XG5cbmNvbnN0IGdlbmVyYXRlVmlzdWFsRWRpdG9yQ2hlY2tib3hMYXlvdXQgPSAoe1xuXHRpbnB1dElkLFxuXHRsYWJlbCxcblx0JGJvZHksXG5cdGNoYW5nZVRhZyxcbn06IHtcblx0aW5wdXRJZD86IHN0cmluZztcblx0bGFiZWw6IHN0cmluZztcblx0JGJvZHk6IEpRdWVyeTxIVE1MRWxlbWVudD47XG5cdGNoYW5nZVRhZz86IHN0cmluZztcbn0pID0+IHtcblx0Y29uc3QgY2hlY2tib3g6IE9PLnVpLkNoZWNrYm94SW5wdXRXaWRnZXQgPSBuZXcgT08udWkuQ2hlY2tib3hJbnB1dFdpZGdldCh7XG5cdFx0c2VsZWN0ZWQ6IGZhbHNlLFxuXHR9KTtcblxuXHRpZiAoaW5wdXRJZCkge1xuXHRcdGNoZWNrYm94LnNldElucHV0SWQoaW5wdXRJZCk7XG5cdH1cblxuXHRpZiAoY2hhbmdlVGFnKSB7XG5cdFx0bW9kaWZ5VmlzdWFsRWRpdG9yQ2hhbmdlVGFnKHtjaGFuZ2VUYWcsIGNoZWNrYm94fSk7XG5cdH1cblxuXHRjb25zdCB0ZXh0SW5wdXRXaXRoRHJvcGRvd24gPSBnZW5lcmF0ZVRleHRJbnB1dFdpdGhEcm9wZG93bih7JGJvZHl9KTtcblxuXHRjaGVja2JveC5vbignY2hhbmdlJywgKHNlbGVjdGVkKSA9PiB7XG5cdFx0dGV4dElucHV0V2l0aERyb3Bkb3duLiRlbGVtZW50LnByb3AoJ2Rpc2FibGVkJywgIXNlbGVjdGVkKTtcblx0fSk7XG5cblx0Y29uc3QgY2hlY2tib3hMYXlvdXQ6IE9PLnVpLkZpZWxkTGF5b3V0PE9PLnVpLkNoZWNrYm94SW5wdXRXaWRnZXQ+ID0gbmV3IE9PLnVpLkZpZWxkTGF5b3V0KGNoZWNrYm94LCB7XG5cdFx0YWxpZ246ICdpbmxpbmUnLFxuXHRcdGxhYmVsLFxuXHR9KTtcblxuXHRjb25zdCAkbGF5b3V0ID0gJCgnPGRpdj4nKS5hdHRyKCdpZCcsICdlZmEtYXJlYScpLmFwcGVuZChjaGVja2JveExheW91dC4kZWxlbWVudCwgdGV4dElucHV0V2l0aERyb3Bkb3duLiRlbGVtZW50KTtcblxuXHRyZXR1cm4gJGxheW91dDtcbn07XG5cbmNvbnN0IGdlbmVyYXRlV2lraUVkaXRvckNoZWNrYm94TGF5b3V0ID0gKHtcblx0aW5wdXRJZCxcblx0bGFiZWwsXG5cdGNoYW5nZVRhZyxcblx0JGJvZHksXG5cdCRlZGl0Rm9ybSxcbn06IHtcblx0aW5wdXRJZD86IHN0cmluZztcblx0bGFiZWw6IHN0cmluZztcblx0Y2hhbmdlVGFnPzogc3RyaW5nO1xuXHQkYm9keTogSlF1ZXJ5O1xuXHQkZWRpdEZvcm06IEpRdWVyeTtcbn0pID0+IHtcblx0Y29uc3QgY2hlY2tib3g6IE9PLnVpLkNoZWNrYm94SW5wdXRXaWRnZXQgPSBuZXcgT08udWkuQ2hlY2tib3hJbnB1dFdpZGdldCh7XG5cdFx0c2VsZWN0ZWQ6IGZhbHNlLFxuXHR9KTtcblxuXHRpZiAoaW5wdXRJZCkge1xuXHRcdGNoZWNrYm94LnNldElucHV0SWQoaW5wdXRJZCk7XG5cdH1cblxuXHRpZiAoY2hhbmdlVGFnKSB7XG5cdFx0bW9kaWZ5V2lraUVkaXRvckNoYW5nZVRhZyh7Y2hhbmdlVGFnLCBjaGVja2JveCwgJGVkaXRGb3JtfSk7XG5cdH1cblxuXHRjb25zdCB0ZXh0SW5wdXRXaXRoRHJvcGRvd24gPSBnZW5lcmF0ZVRleHRJbnB1dFdpdGhEcm9wZG93bih7JGJvZHl9KTtcblxuXHRjaGVja2JveC5vbignY2hhbmdlJywgKHNlbGVjdGVkKSA9PiB7XG5cdFx0dGV4dElucHV0V2l0aERyb3Bkb3duLiRlbGVtZW50LnByb3AoJ2Rpc2FibGVkJywgIXNlbGVjdGVkKTtcblx0fSk7XG5cblx0Y29uc3QgY2hlY2tib3hMYXlvdXQ6IE9PLnVpLkZpZWxkTGF5b3V0PE9PLnVpLkNoZWNrYm94SW5wdXRXaWRnZXQ+ID0gbmV3IE9PLnVpLkZpZWxkTGF5b3V0KGNoZWNrYm94LCB7XG5cdFx0YWxpZ246ICdpbmxpbmUnLFxuXHRcdGxhYmVsLFxuXHR9KTtcblxuXHRjb25zdCAkbGF5b3V0ID0gJCgnPGRpdj4nKS5hdHRyKCdpZCcsICdlZmEtYXJlYScpLmFwcGVuZChjaGVja2JveExheW91dC4kZWxlbWVudCwgdGV4dElucHV0V2l0aERyb3Bkb3duLiRlbGVtZW50KTtcblxuXHRyZXR1cm4gJGxheW91dDtcbn07XG5leHBvcnQge2dlbmVyYXRlVmlzdWFsRWRpdG9yQ2hlY2tib3hMYXlvdXQsIGdlbmVyYXRlV2lraUVkaXRvckNoZWNrYm94TGF5b3V0fTtcbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJ34vRWRpdGZvcm1fQXR0cmlidXRpb24vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7YXBwZW5kVGV4dFRvU3VtbWFyeX0gZnJvbSAnLi91dGlsL2NoYW5nZVN1bW1hcnknO1xuaW1wb3J0IHtnZW5lcmF0ZVZpc3VhbEVkaXRvckNoZWNrYm94TGF5b3V0fSBmcm9tICcuL3V0aWwvZ2VuZXJhdGVDaGVja2JveExheW91dCc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vaTE4bic7XG5cbmNvbnN0IHByb2Nlc3NWaXN1YWxFZGl0b3IgPSAoeyRib2R5fTogeyRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pn0pOiB2b2lkID0+IHtcblx0Ly8gR3VhcmQgYWdhaW5zdCBkb3VibGUgaW5jbHVzaW9uc1xuXHRpZiAobXcuY29uZmlnLmdldChPUFRJT05TLmNvbmZpZ0tleSkpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCAkdGFyZ2V0OiBKUXVlcnkgPSAkYm9keS5maW5kKGAuJHtPUFRJT05TLnRhcmdldENsYXNzVmV9YCk7XG5cdGlmICghJHRhcmdldC5sZW5ndGgpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRtdy5jb25maWcuc2V0KE9QVElPTlMuY29uZmlnS2V5LCB0cnVlKTtcblxuXHRjb25zdCBnZXQkTGF5b3V0ID0gKCkgPT4ge1xuXHRcdHJldHVybiBnZW5lcmF0ZVZpc3VhbEVkaXRvckNoZWNrYm94TGF5b3V0KHtcblx0XHRcdGlucHV0SWQ6IE9QVElPTlMuaW5wdXRJZCxcblx0XHRcdGxhYmVsOiBnZXRNZXNzYWdlKCdUaGlyZFBhcnR5Q29udGVudENvbnRhaW5lZCcpLFxuXHRcdFx0Ly8gY2hhbmdlVGFnOiBPUFRJT05TLmNoYW5nZVRhZyxcblx0XHRcdCRib2R5LFxuXHRcdH0pO1xuXHR9O1xuXG5cdGNvbnN0ICRsYXlvdXQgPSBnZXQkTGF5b3V0KCk7XG5cblx0aWYgKCEkYm9keS5maW5kKGAjJHtPUFRJT05TLmlucHV0SWR9YCkubGVuZ3RoKSB7XG5cdFx0JHRhcmdldC5hcHBlbmQoJGxheW91dCk7XG5cdH1cblxuXHRtdy5ob29rKCd2ZS5hY3RpdmF0aW9uQ29tcGxldGUnKS5hZGQoKCkgPT4ge1xuXHRcdGNvbnN0IHt0YXJnZXR9ID0gd2luZG93LnZlLmluaXQ7XG5cdFx0Y29uc3Qge3NhdmVEaWFsb2d9ID0gdGFyZ2V0O1xuXG5cdFx0c2F2ZURpYWxvZy5vbignc2F2ZScsICgpID0+IHtcblx0XHRcdGNvbnN0IGN1c3RvbVN1bW1hcnkgPSBTdHJpbmcoJGJvZHkuZmluZCgnaW5wdXRbbmFtZT13cEF0dHJpYnV0aW9uXScpLnZhbCgpKTtcblx0XHRcdGNvbnN0ICR3cFN1bW1hcnkgPSB0YXJnZXQuc2F2ZURpYWxvZy5lZGl0U3VtbWFyeUlucHV0LiRpbnB1dDtcblx0XHRcdGFwcGVuZFRleHRUb1N1bW1hcnkoe2N1c3RvbVN1bW1hcnksICR3cFN1bW1hcnl9KTtcblx0XHRcdCRsYXlvdXQucmVwbGFjZVdpdGgoZ2V0JExheW91dCgpKTtcblx0XHR9KTtcblx0fSk7XG59O1xuXG5leHBvcnQge3Byb2Nlc3NWaXN1YWxFZGl0b3J9O1xuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnfi9FZGl0Zm9ybV9BdHRyaWJ1dGlvbi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHthcHBlbmRUZXh0VG9TdW1tYXJ5fSBmcm9tICcuL3V0aWwvY2hhbmdlU3VtbWFyeSc7XG5pbXBvcnQge2dlbmVyYXRlV2lraUVkaXRvckNoZWNrYm94TGF5b3V0fSBmcm9tICcuL3V0aWwvZ2VuZXJhdGVDaGVja2JveExheW91dCc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vaTE4bic7XG5cbmNvbnN0IHByb2Nlc3NXaWtpRWRpdG9yID0gKHskYm9keSwgJGVkaXRGb3JtfTogeyRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50PjsgJGVkaXRGb3JtOiBKUXVlcnl9KTogdm9pZCA9PiB7XG5cdC8vIEd1YXJkIGFnYWluc3QgZG91YmxlIGluY2x1c2lvbnNcblx0aWYgKG13LmNvbmZpZy5nZXQoT1BUSU9OUy5jb25maWdLZXkpKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgJHRhcmdldDogSlF1ZXJ5ID0gJGVkaXRGb3JtLmZpbmQoT1BUSU9OUy50YXJnZXRXaWtpRWRpdG9yKTtcblx0aWYgKCEkdGFyZ2V0Lmxlbmd0aCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdG13LmNvbmZpZy5zZXQoT1BUSU9OUy5jb25maWdLZXksIHRydWUpO1xuXG5cdGNvbnN0IGdldCRMYXlvdXQgPSAoKSA9PiB7XG5cdFx0cmV0dXJuIGdlbmVyYXRlV2lraUVkaXRvckNoZWNrYm94TGF5b3V0KHtcblx0XHRcdGlucHV0SWQ6IE9QVElPTlMuaW5wdXRJZCxcblx0XHRcdGxhYmVsOiBnZXRNZXNzYWdlKCdUaGlyZFBhcnR5Q29udGVudENvbnRhaW5lZCcpLFxuXHRcdFx0JGJvZHksXG5cdFx0XHQkZWRpdEZvcm0sXG5cdFx0XHQvLyBjaGFuZ2VUYWc6IE9QVElPTlMuY2hhbmdlVGFnLFxuXHRcdH0pO1xuXHR9O1xuXG5cdGNvbnN0ICRsYXlvdXQgPSBnZXQkTGF5b3V0KCk7XG5cblx0aWYgKCEkYm9keS5maW5kKGAjJHtPUFRJT05TLmlucHV0SWR9YCkubGVuZ3RoKSB7XG5cdFx0JHRhcmdldC5hZnRlcigkbGF5b3V0KTtcblx0fVxuXG5cdCRlZGl0Rm9ybS5vbignc3VibWl0JywgKCkgPT4ge1xuXHRcdGNvbnN0IGN1c3RvbVN1bW1hcnkgPSBTdHJpbmcoJGJvZHkuZmluZCgnaW5wdXRbbmFtZT13cEF0dHJpYnV0aW9uXScpLnZhbCgpKTtcblx0XHRjb25zdCAkd3BTdW1tYXJ5ID0gJGVkaXRGb3JtLmZpbmQoJ2lucHV0W25hbWU9d3BTdW1tYXJ5XScpO1xuXHRcdGFwcGVuZFRleHRUb1N1bW1hcnkoe2N1c3RvbVN1bW1hcnksICR3cFN1bW1hcnl9KTtcblx0XHQkbGF5b3V0LnJlcGxhY2VXaXRoKGdldCRMYXlvdXQoKSk7XG5cdH0pO1xufTtcblxuZXhwb3J0IHtwcm9jZXNzV2lraUVkaXRvcn07XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQyxJQUFBQSxZQUFhO0FBRWIsSUFBQUMsVUFBVztBQUNYLElBQUFDLGdCQUFpQjtBQUNqQixJQUFBQyxtQkFBb0I7O0FD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LElBQUtqSSxlQUFvQjtBQUNyRHVJLHNCQUFrQjtNQUNqQjdIO01BQ0FWO0lBQ0QsQ0FBQztFQUNGLENBQUM7QUFFRDBILEtBQUdNLEtBQUssNEJBQTRCLEVBQUVDLElBQUksTUFBWTtBQUNyRFIsd0JBQW9CO01BQ25CL0c7SUFDRCxDQUFDO0VBQ0YsQ0FBQztBQUdEZ0gsS0FBR00sS0FBSyx1QkFBdUIsRUFBRUMsSUFBSSxNQUFNO0FBQzFDLFFBQUlQLEdBQUdDLE9BQU9DLElBQVkvSixTQUFTLEdBQUc7QUFDckM2SixTQUFHQyxPQUFPRyxJQUFZakssV0FBVyxLQUFLO0lBQ3ZDO0VBQ0QsQ0FBQztBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbImNvbmZpZ0tleSIsICJpbnB1dElkIiwgInRhcmdldENsYXNzVmUiLCAidGFyZ2V0V2lraUVkaXRvciIsICJpbXBvcnRfZXh0X2dhZGdldDIiLCAicmVxdWlyZSIsICJhcHBlbmRUZXh0VG9TdW1tYXJ5IiwgImN1c3RvbVN1bW1hcnkiLCAiJHdwU3VtbWFyeSIsICJfJHdwU3VtbWFyeSR2YWwiLCAib3JpZ2luU3VtbWFyeSIsICJ2YWwiLCAidHJpbSIsICJjb25jYXQiLCAidHJpZ2dlciIsICJtb2RpZnlWaXN1YWxFZGl0b3JDaGFuZ2VUYWciLCAiY2hhbmdlVGFnIiwgImNoZWNrYm94IiwgIm9uIiwgIl93aW5kb3ckdmUkaW5pdCR0YXJnZSIsICJfd2luZG93JHZlJGluaXQkdGFyZ2UyIiwgIl93aW5kb3ckdmUkaW5pdCR0YXJnZTMiLCAiZ2VuZXJhdGVDaGFuZ2VUYWdzIiwgIm9yaWdpbkNoYW5nZVRhZ3MiLCAiaXNTZWxlY3RlZCIsICJyZXBsYWNlIiwgImNoYW5nZVRhZ3MiLCAid2luZG93IiwgInZlIiwgImluaXQiLCAidGFyZ2V0IiwgInNhdmVGaWVsZHMiLCAid3BDaGFuZ2VUYWdzIiwgImNhbGwiLCAibW9kaWZ5V2lraUVkaXRvckNoYW5nZVRhZyIsICIkZWRpdEZvcm0iLCAiXyRvcmlnaW5XcENoYW5nZVRhZ3MkIiwgIl8kb3JpZ2luV3BDaGFuZ2VUYWdzJDIiLCAiJHdwQ2hhbmdlVGFncyIsICIkIiwgImF0dHIiLCAiaWQiLCAibmFtZSIsICJ0eXBlIiwgInZhbHVlIiwgIiRib2R5IiwgInBhcmVudHMiLCAiJG9yaWdpbldwQ2hhbmdlVGFncyIsICJmaW5kIiwgImxlbmd0aCIsICJwcmVwZW5kIiwgInRvU3RyaW5nIiwgIkxJQ0VOU0VTIiwgImxhYmVsIiwgImRhdGEiLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAiZ2V0STE4bk1lc3NhZ2VzIiwgIkFkZCIsICJsb2NhbGl6ZSIsICJlbiIsICJ6aCIsICJEZWxldGUiLCAiU291cmNlIiwgIkxpY2Vuc2UiLCAiVGhpcmRQYXJ0eUNvbnRlbnRDb250YWluZWQiLCAiUWl1d2VuQ29udGVudENvbnRhaW5lZCIsICJpMThuTWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAibW9kaWZ5QXR0cmlidXRpb24iLCAicGFyZW50RmllbGRTZXQiLCAiZ2VuZXJhdGVJbmZvTWFydGl4IiwgImZpZWxkU2V0TGF5b3V0IiwgImF0dHJpYnV0aW9ucyIsICJnZXRTZWxlY3RlZFZhbHVlIiwgImRyb3Bkb3duIiwgInNlbGVjdGVkSXRlbSIsICJnZXRNZW51IiwgImZpbmRTZWxlY3RlZEl0ZW0iLCAiZ2V0RGF0YSIsICJfaXRlcmF0b3IiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAiZ2V0SXRlbXMiLCAiX3N0ZXAiLCAicyIsICJuIiwgImRvbmUiLCAiYXR0cmlidXRpb25GaWVsZHNldCIsICJhdHRyaWJ1dGlvbiIsICJfaXRlcmF0b3IyIiwgIl9zdGVwMiIsICJmaWVsZExheW91dCIsICJmaWVsZCIsICJnZXRGaWVsZCIsICJzdXBwb3J0cyIsICJnZXRWYWx1ZSIsICJlcnIiLCAiZSIsICJmIiwgImpvaW4iLCAiY29uc29sZSIsICJsb2ciLCAid3BBdHRyaWJ1dGlvbiIsICIkd3BBdHRyaWJ1dGlvbiIsICIkb3JpZ2lud3BBdHRyaWJ1dGlvbiIsICJnZW5lcmF0ZVRleHRJbnB1dFdpdGhEcm9wZG93biIsICJnZXRUZXh0SW5wdXQiLCAib25DaGFuZ2UiLCAidGV4dElucHV0IiwgIk9PIiwgInVpIiwgIlRleHRJbnB1dFdpZGdldCIsICJwbGFjZWhvbGRlciIsICJnZXREcm9wRG93biIsICJvblNlbGVjdCIsICJEcm9wZG93bldpZGdldCIsICJtZW51T3B0aW9ucyIsICJfaSIsICJfTElDRU5TRVMiLCAiTWVudU9wdGlvbldpZGdldCIsICJhZGRJdGVtcyIsICJnZXRBZGRJdGVtQnV0dG9uIiwgIm9uQ2xpY2tzIiwgImFkZEl0ZW1CdXR0b24iLCAiQnV0dG9uSW5wdXRXaWRnZXQiLCAiX2l0ZXJhdG9yMyIsICJfc3RlcDMiLCAib25DbGljayIsICJnZXREZWxldGVJdGVtQnV0dG9uIiwgImRlbGV0ZUl0ZW1CdXR0b24iLCAiX2l0ZXJhdG9yNCIsICJfc3RlcDQiLCAiRmllbGRzZXRMYXlvdXQiLCAiaW5wdXRPbkNoYW5nZSIsICJhZGRJdGVtT25DbGljayIsICJnZXRGb2xsb3dVcEZpZWxkc2V0IiwgImRlbGV0ZUl0ZW1PbkNsaWNrIiwgIml0ZW0iLCAicmVtb3ZlSXRlbXMiLCAiaW5pdGlhbEZpZWxkc2V0IiwgIkZpZWxkTGF5b3V0IiwgImFsaWduIiwgImZvbGxvd1VwRmllbGRzZXQiLCAiZGVsZXRlVGhpc0l0ZW0iLCAiZ2VuZXJhdGVWaXN1YWxFZGl0b3JDaGVja2JveExheW91dCIsICJpbnB1dElkMiIsICJDaGVja2JveElucHV0V2lkZ2V0IiwgInNlbGVjdGVkIiwgInNldElucHV0SWQiLCAidGV4dElucHV0V2l0aERyb3Bkb3duIiwgIiRlbGVtZW50IiwgInByb3AiLCAiY2hlY2tib3hMYXlvdXQiLCAiJGxheW91dCIsICJhcHBlbmQiLCAiZ2VuZXJhdGVXaWtpRWRpdG9yQ2hlY2tib3hMYXlvdXQiLCAicHJvY2Vzc1Zpc3VhbEVkaXRvciIsICJtdyIsICJjb25maWciLCAiZ2V0IiwgIiR0YXJnZXQiLCAic2V0IiwgImdldCRMYXlvdXQiLCAiaG9vayIsICJhZGQiLCAic2F2ZURpYWxvZyIsICJTdHJpbmciLCAiZWRpdFN1bW1hcnlJbnB1dCIsICIkaW5wdXQiLCAicmVwbGFjZVdpdGgiLCAicHJvY2Vzc1dpa2lFZGl0b3IiLCAiYWZ0ZXIiLCAiZ2V0Qm9keSIsICJ0aGVuIiwgImVkaXRGb3JtIl0KfQo=

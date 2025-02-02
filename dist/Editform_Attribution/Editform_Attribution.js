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
    const fieldsInfo = [];
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
        fieldsInfo[fieldsInfo.length] = fieldInfo.join(", ");
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    console.log(fieldsInfo);
    return fieldsInfo.join("; ");
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
var generateTextInputWithDropdown = () => {
  const getTextInput = () => {
    const textInput = new OO.ui.TextInputWidget({
      placeholder: getMessage("Source")
    });
    return textInput;
  };
  const getDropDown = () => {
    const dropdown = new OO.ui.DropdownWidget({
      $overlay: true,
      menu: {
        items: LICENSES.map(({
          data,
          label
        }) => {
          return new OO.ui.MenuOptionWidget({
            data,
            label
          });
        })
      }
    });
    return dropdown;
  };
  const getAddItemButton = (onClick) => {
    const addItemButton = new OO.ui.ButtonInputWidget({
      label: getMessage("Add")
    });
    if (onClick) {
      addItemButton.on("click", onClick);
    }
    return addItemButton;
  };
  const addItemOnClick = (fieldSet) => {
    fieldSet.addItems([getFollowUpFieldset()]);
  };
  const getDeleteItemButton = (onClick) => {
    const deleteItemButton = new OO.ui.ButtonInputWidget({
      label: getMessage("Delete")
    });
    if (onClick) {
      deleteItemButton.on("click", onClick);
    }
    return deleteItemButton;
  };
  const deleteItemOnClick = (fieldSet, item) => {
    fieldSet.removeItems([item]);
  };
  const parentFieldSet = new OO.ui.FieldsetLayout({
    label: getMessage("Sources and Licenses")
  });
  const initialFieldset = new OO.ui.FieldsetLayout();
  initialFieldset.addItems([new OO.ui.FieldLayout(getTextInput(), {
    label: getMessage("Source"),
    align: "inline"
  }), new OO.ui.FieldLayout(getDropDown(), {
    label: getMessage("License"),
    align: "inline"
  }), new OO.ui.FieldLayout(getAddItemButton(() => {
    addItemOnClick(parentFieldSet);
  }), {
    align: "inline"
  })]);
  const getFollowUpFieldset = () => {
    const followUpFieldset = new OO.ui.FieldsetLayout();
    followUpFieldset.addItems([new OO.ui.FieldLayout(getTextInput(), {
      label: getMessage("Source"),
      align: "inline"
    }), new OO.ui.FieldLayout(getDropDown(), {
      label: getMessage("License"),
      align: "inline"
    }), new OO.ui.FieldLayout(getAddItemButton(() => {
      addItemOnClick(parentFieldSet);
    }), {
      align: "inline"
    }), new OO.ui.FieldLayout(getDeleteItemButton(() => {
      deleteItemOnClick(parentFieldSet, followUpFieldset);
    }), {
      align: "inline"
    })]);
    return followUpFieldset;
  };
  parentFieldSet.addItems([initialFieldset]);
  parentFieldSet.on("change", () => {
    const $body = $("body");
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
  const textInputWithDropdown = generateTextInputWithDropdown();
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
  const textInputWithDropdown = generateTextInputWithDropdown();
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
    changeTag
  });
  if (!$body.find("#".concat(inputId)).length) {
    $target.append($layout);
  }
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
    $editForm,
    changeTag
  });
  if (!$body.find("#".concat(inputId)).length) {
    $target.append($layout);
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
  mw.hook("ve.activationComplete").add(() => {
    if (mw.config.get(configKey)) {
      mw.config.set(configKey, false);
    }
  });
});

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0VkaXRmb3JtX0F0dHJpYnV0aW9uL29wdGlvbnMuanNvbiIsICJzcmMvRWRpdGZvcm1fQXR0cmlidXRpb24vRWRpdGZvcm1fQXR0cmlidXRpb24udHMiLCAic3JjL0VkaXRmb3JtX0F0dHJpYnV0aW9uL21vZHVsZXMvdXRpbC9tb2RpZnlDaGFuZ2VUYWcudHMiLCAic3JjL0VkaXRmb3JtX0F0dHJpYnV0aW9uL21vZHVsZXMvY29uc3RhbnQudHMiLCAic3JjL0VkaXRmb3JtX0F0dHJpYnV0aW9uL21vZHVsZXMvaTE4bi50cyIsICJzcmMvRWRpdGZvcm1fQXR0cmlidXRpb24vbW9kdWxlcy91dGlsL21vZGlmeUF0dHJpYnV0aW9uU3VtbWFyeS50cyIsICJzcmMvRWRpdGZvcm1fQXR0cmlidXRpb24vbW9kdWxlcy91dGlsL2dlbmVyYXRlVGV4dElucHV0V2l0aERyb3Bkb3duLnRzIiwgInNyYy9FZGl0Zm9ybV9BdHRyaWJ1dGlvbi9tb2R1bGVzL3V0aWwvZ2VuZXJhdGVDaGVja2JveExheW91dC50cyIsICJzcmMvRWRpdGZvcm1fQXR0cmlidXRpb24vbW9kdWxlcy9wcm9jZXNzVmlzdWFsRWRpdG9yLnRzIiwgInNyYy9FZGl0Zm9ybV9BdHRyaWJ1dGlvbi9tb2R1bGVzL3Byb2Nlc3NXaWtpRWRpdG9yLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJ7XG5cdFwiY29uZmlnS2V5XCI6IFwiZ2FkZ2V0LUVkaXRmb3JtX0F0dHJpYnV0aW9uX19Jbml0aWFsaXplZFwiLFxuXHRcImNoYW5nZVRhZ1wiOiBcIkF0dHJpYnV0aW9uX2FkZGVkXCIsXG5cdFwiaW5wdXRJZFwiOiBcImVkaXRmb3JtX2F0dHJpYnV0aW9uXCIsXG5cdFwidGFyZ2V0Q2xhc3NWZVwiOiBcInZlLXVpLW13U2F2ZURpYWxvZy1jaGVja2JveGVzXCIsXG5cdFwidGFyZ2V0V2lraUVkaXRvclwiOiBcIi5lZGl0Q2hlY2tib3hlcyAub28tdWktaG9yaXpvbnRhbExheW91dFwiXG59XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuL29wdGlvbnMuanNvbic7XG5pbXBvcnQge2dldEJvZHl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5pbXBvcnQge3Byb2Nlc3NWaXN1YWxFZGl0b3J9IGZyb20gJy4vbW9kdWxlcy9wcm9jZXNzVmlzdWFsRWRpdG9yJztcbmltcG9ydCB7cHJvY2Vzc1dpa2lFZGl0b3J9IGZyb20gJy4vbW9kdWxlcy9wcm9jZXNzV2lraUVkaXRvcic7XG5cbi8qKlxuICogQGRlc2NyaXB0aW9uIOesrOS4ieaWueadpea6kOeJueauiuWjsOaYjlxuICovXG52b2lkIGdldEJvZHkoKS50aGVuKGZ1bmN0aW9uIGVkaXRGb3JtKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQge1xuXHRtdy5ob29rKCd3aWtpcGFnZS5lZGl0Zm9ybScpLmFkZCgoJGVkaXRGb3JtKTogdm9pZCA9PiB7XG5cdFx0cHJvY2Vzc1dpa2lFZGl0b3Ioe1xuXHRcdFx0JGJvZHksXG5cdFx0XHQkZWRpdEZvcm0sXG5cdFx0fSk7XG5cdH0pO1xuXG5cdG13Lmhvb2soJ3ZlLnNhdmVEaWFsb2cuc3RhdGVDaGFuZ2VkJykuYWRkKCgpOiB2b2lkID0+IHtcblx0XHRwcm9jZXNzVmlzdWFsRWRpdG9yKHtcblx0XHRcdCRib2R5LFxuXHRcdH0pO1xuXHR9KTtcblxuXHQvLyBXaGVuIHN3aXRjaGluZyBiZXR3ZWVuIFZFIGFuZCBOV0UsIHJlLWluaXRpYWxpemF0aW9uIGlzIHJlcXVpcmVkXG5cdG13Lmhvb2soJ3ZlLmFjdGl2YXRpb25Db21wbGV0ZScpLmFkZCgoKSA9PiB7XG5cdFx0aWYgKG13LmNvbmZpZy5nZXQoT1BUSU9OUy5jb25maWdLZXkpKSB7XG5cdFx0XHRtdy5jb25maWcuc2V0KE9QVElPTlMuY29uZmlnS2V5LCBmYWxzZSk7XG5cdFx0fVxuXHR9KTtcbn0pO1xuIiwgImNvbnN0IG1vZGlmeVZpc3VhbEVkaXRvckNoYW5nZVRhZyA9ICh7XG5cdGNoYW5nZVRhZyxcblx0Y2hlY2tib3gsXG59OiB7XG5cdGNoYW5nZVRhZzogc3RyaW5nO1xuXHRjaGVja2JveDogT08udWkuQ2hlY2tib3hJbnB1dFdpZGdldDtcbn0pOiB2b2lkID0+IHtcblx0Y2hlY2tib3gub24oJ2NoYW5nZScsICgpOiB2b2lkID0+IHtcblx0XHRjb25zdCBnZW5lcmF0ZUNoYW5nZVRhZ3MgPSAob3JpZ2luQ2hhbmdlVGFnczogc3RyaW5nKTogc3RyaW5nID0+IHtcblx0XHRcdHJldHVybiBjaGVja2JveC5pc1NlbGVjdGVkKClcblx0XHRcdFx0PyBgJHtvcmlnaW5DaGFuZ2VUYWdzfSwke2NoYW5nZVRhZ31gXG5cdFx0XHRcdDogb3JpZ2luQ2hhbmdlVGFncy5yZXBsYWNlKGAsJHtjaGFuZ2VUYWd9YCwgJycpO1xuXHRcdH07XG5cblx0XHRsZXQgY2hhbmdlVGFnczogc3RyaW5nID0gJyc7XG5cdFx0Y2hhbmdlVGFncyA9IGdlbmVyYXRlQ2hhbmdlVGFncyh3aW5kb3cudmUuaW5pdC50YXJnZXQuc2F2ZUZpZWxkcy53cENoYW5nZVRhZ3M/LigpID8/ICcnKTtcblx0XHR3aW5kb3cudmUuaW5pdC50YXJnZXQuc2F2ZUZpZWxkcy53cENoYW5nZVRhZ3MgPSAoKTogc3RyaW5nID0+IHtcblx0XHRcdHJldHVybiBjaGFuZ2VUYWdzO1xuXHRcdH07XG5cdH0pO1xufTtcblxuY29uc3QgbW9kaWZ5V2lraUVkaXRvckNoYW5nZVRhZyA9ICh7XG5cdGNoYW5nZVRhZyxcblx0Y2hlY2tib3gsXG5cdCRlZGl0Rm9ybSxcbn06IHtcblx0Y2hhbmdlVGFnOiBzdHJpbmc7XG5cdGNoZWNrYm94OiBPTy51aS5DaGVja2JveElucHV0V2lkZ2V0O1xuXHQkZWRpdEZvcm06IEpRdWVyeTtcbn0pOiB2b2lkID0+IHtcblx0Y2hlY2tib3gub24oJ2NoYW5nZScsICgpOiB2b2lkID0+IHtcblx0XHRjb25zdCBnZW5lcmF0ZUNoYW5nZVRhZ3MgPSAob3JpZ2luQ2hhbmdlVGFnczogc3RyaW5nKTogc3RyaW5nID0+IHtcblx0XHRcdHJldHVybiBjaGVja2JveC5pc1NlbGVjdGVkKClcblx0XHRcdFx0PyBgJHtvcmlnaW5DaGFuZ2VUYWdzfSwke2NoYW5nZVRhZ31gXG5cdFx0XHRcdDogb3JpZ2luQ2hhbmdlVGFncy5yZXBsYWNlKGAsJHtjaGFuZ2VUYWd9YCwgJycpO1xuXHRcdH07XG5cblx0XHRsZXQgY2hhbmdlVGFnczogc3RyaW5nID0gJyc7XG5cblx0XHRjb25zdCAkd3BDaGFuZ2VUYWdzOiBKUXVlcnkgPSAkKCc8aW5wdXQ+JykuYXR0cih7XG5cdFx0XHRpZDogJ3dwQ2hhbmdlVGFncycsXG5cdFx0XHRuYW1lOiAnd3BDaGFuZ2VUYWdzJyxcblx0XHRcdHR5cGU6ICdoaWRkZW4nLFxuXHRcdFx0dmFsdWU6ICcnLFxuXHRcdH0pO1xuXHRcdGNvbnN0ICRib2R5ID0gJGVkaXRGb3JtLnBhcmVudHMoJ2JvZHknKTtcblx0XHRjb25zdCAkb3JpZ2luV3BDaGFuZ2VUYWdzOiBKUXVlcnkgPSAkYm9keS5maW5kKCdpbnB1dFtuYW1lPXdwQ2hhbmdlVGFnc10nKTtcblx0XHRpZiAoISRvcmlnaW5XcENoYW5nZVRhZ3MubGVuZ3RoKSB7XG5cdFx0XHQkYm9keS5wcmVwZW5kKCR3cENoYW5nZVRhZ3MpO1xuXHRcdH1cblx0XHRjaGFuZ2VUYWdzID0gZ2VuZXJhdGVDaGFuZ2VUYWdzKCRvcmlnaW5XcENoYW5nZVRhZ3MudmFsKCk/LnRvU3RyaW5nKCkgPz8gJycpO1xuXHRcdCRvcmlnaW5XcENoYW5nZVRhZ3MudmFsKGNoYW5nZVRhZ3MpO1xuXHR9KTtcbn07XG5cbmV4cG9ydCB7bW9kaWZ5VmlzdWFsRWRpdG9yQ2hhbmdlVGFnLCBtb2RpZnlXaWtpRWRpdG9yQ2hhbmdlVGFnfTtcbiIsICJjb25zdCBMSUNFTlNFUyA9IFtcblx0e1xuXHRcdGxhYmVsOiAnQ0MgQlktU0EgNC4wJyxcblx0XHRkYXRhOiAnaHR0cHM6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL2xpY2Vuc2VzL2J5LXNhLzQuMC8nLFxuXHR9LFxuXHR7XG5cdFx0bGFiZWw6ICdDQyBCWS1TQSAzLjAnLFxuXHRcdGRhdGE6ICdodHRwczovL2NyZWF0aXZlY29tbW9ucy5vcmcvbGljZW5zZXMvYnktc2EvMy4wLycsXG5cdH0sXG5cdHtcblx0XHRsYWJlbDogJ0NDIEJZLVNBIDMuMCBDTicsXG5cdFx0ZGF0YTogJ2h0dHBzOi8vY3JlYXRpdmVjb21tb25zLm9yZy9saWNlbnNlcy9ieS1zYS8zLjAvY24vJyxcblx0fSxcblx0e1xuXHRcdGxhYmVsOiAnQ0MwLTEuMCcsXG5cdFx0ZGF0YTogJ2h0dHBzOi8vY3JlYXRpdmVjb21tb25zLm9yZy9wdWJsaWNkb21haW4vemVyby8xLjAvJyxcblx0fSxcblx0e1xuXHRcdGxhYmVsOiAnS09HTCBUeXBlIEk6IEF0dHJpYnV0aW9uJyxcblx0XHRkYXRhOiAnaHR0cHM6Ly93d3cua29nbC5vci5rci9pbmZvL2xpY2Vuc2VUeXBlMS5kbycsXG5cdH0sXG5dO1xuXG5leHBvcnQge0xJQ0VOU0VTfTtcbiIsICJpbXBvcnQge2xvY2FsaXplfSBmcm9tICdleHQuZ2FkZ2V0LmkxOG4nO1xuXG5jb25zdCBnZXRJMThuTWVzc2FnZXMgPSAoKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0QWRkOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0FkZCcsXG5cdFx0XHR6aDogJ+WinuWKoCcsXG5cdFx0fSksXG5cdFx0RGVsZXRlOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0RlbGV0ZScsXG5cdFx0XHR6aDogJ+enu+mZpCcsXG5cdFx0fSksXG5cdFx0U291cmNlOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1NvdXJjZScsXG5cdFx0XHQnemgtaGFucyc6ICflhoXlrrnmnaXmupAnLFxuXHRcdFx0J3poLWhhbnQnOiAn5YWn5a655L6G5rqQJyxcblx0XHR9KSxcblx0XHRMaWNlbnNlOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0xpY2Vuc2UnLFxuXHRcdFx0J3poLWhhbnMnOiAn6K645Y+v6K+BJyxcblx0XHRcdCd6aC1oYW50JzogJ+ioseWPr+itiScsXG5cdFx0fSksXG5cdFx0J1NvdXJjZXMgYW5kIExpY2Vuc2VzJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdTb3VyY2VzIGFuZCBMaWNlbnNlcycsXG5cdFx0XHQnemgtaGFucyc6ICflhoXlrrnmnaXmupDlj4rorrjlj6/or4EnLFxuXHRcdFx0J3poLWhhbnQnOiAn5YWn5a655L6G5rqQ5Y+K6Kix5Y+v6K2JJyxcblx0XHR9KSxcblx0XHRUaGlyZFBhcnR5Q29udGVudENvbnRhaW5lZDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdUaGlzIGVkaXRvciBjb250YWlucyB0aGlyZC1wYXJ0eSBjb250ZW50LicsXG5cdFx0XHQnemgtaGFucyc6ICfmraTnvJbovpHlkKvmnInnrKzkuInmlrnlhoXlrrknLFxuXHRcdFx0J3poLWhhbnQnOiAn5q2k57eo6Lyv5ZCr5pyJ56ys5LiJ5pa55YWn5a65Jyxcblx0XHR9KSxcblx0XHRRaXV3ZW5Db250ZW50Q29udGFpbmVkOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1RoaXMgZWRpdG9yIGNvbnRhaW5zIGNvbnRlbnQgZnJvbSBvdGhlciBwYWdlcyBvZiBRaXV3ZW4gQmFpa2UuJyxcblx0XHRcdCd6aC1oYW5zJzogJ+atpOe8lui+keWQq+acieaxgumXu+eZvuenkeWFtuS7lumhtemdoueahOWGheWuuScsXG5cdFx0XHQnemgtaGFudCc6ICfmraTnt6jovK/lkKvmnInmsYLogZ7nmb7np5Hlhbbku5bpoIHpnaLnmoTlhaflrrknLFxuXHRcdH0pLFxuXHR9O1xufTtcblxuY29uc3QgaTE4bk1lc3NhZ2VzID0gZ2V0STE4bk1lc3NhZ2VzKCk7XG5cbmNvbnN0IGdldE1lc3NhZ2U6IEdldE1lc3NhZ2VzPHR5cGVvZiBpMThuTWVzc2FnZXM+ID0gKGtleSkgPT4ge1xuXHRyZXR1cm4gaTE4bk1lc3NhZ2VzW2tleV0gfHwga2V5O1xufTtcblxuZXhwb3J0IHtnZXRNZXNzYWdlfTtcbiIsICJjb25zdCBtb2RpZnlBdHRyaWJ1dGlvbiA9ICh7XG5cdCRib2R5LFxuXHRwYXJlbnRGaWVsZFNldCxcbn06IHtcblx0JGJvZHk6IEpRdWVyeTxIVE1MRWxlbWVudD47XG5cdHBhcmVudEZpZWxkU2V0OiBPTy51aS5GaWVsZHNldExheW91dDtcbn0pID0+IHtcblx0Y29uc3QgZ2VuZXJhdGVJbmZvTWFydGl4ID0gKGZpZWxkU2V0TGF5b3V0OiBPTy51aS5GaWVsZHNldExheW91dCkgPT4ge1xuXHRcdGNvbnN0IGZpZWxkc0luZm8gPSBbXTtcblxuXHRcdGNvbnN0IGdldFNlbGVjdGVkVmFsdWUgPSAoZHJvcGRvd246IE9PLnVpLkRyb3Bkb3duV2lkZ2V0KTogc3RyaW5nIHwgdW5kZWZpbmVkID0+IHtcblx0XHRcdGNvbnN0IHNlbGVjdGVkSXRlbTogT08udWkuT3B0aW9uV2lkZ2V0IHwgbnVsbCA9IGRyb3Bkb3duXG5cdFx0XHRcdC5nZXRNZW51KClcblx0XHRcdFx0LmZpbmRTZWxlY3RlZEl0ZW0oKSBhcyBPTy51aS5PcHRpb25XaWRnZXQgfCBudWxsO1xuXHRcdFx0cmV0dXJuIHNlbGVjdGVkSXRlbSA/IChzZWxlY3RlZEl0ZW0uZ2V0RGF0YSgpIGFzIHN0cmluZykgOiB1bmRlZmluZWQ7XG5cdFx0fTtcblxuXHRcdGZvciAoY29uc3QgYXR0cmlidXRpb25GaWVsZHNldCBvZiBmaWVsZFNldExheW91dC5nZXRJdGVtcygpIGFzIE9PLnVpLkZpZWxkc2V0TGF5b3V0W10pIHtcblx0XHRcdGNvbnN0IGZpZWxkSW5mbyA9IFtdO1xuXG5cdFx0XHRmb3IgKGNvbnN0IGZpZWxkTGF5b3V0IG9mIGF0dHJpYnV0aW9uRmllbGRzZXQuZ2V0SXRlbXMoKSBhcyBPTy51aS5GaWVsZExheW91dFtdKSB7XG5cdFx0XHRcdGNvbnN0IGZpZWxkID0gZmllbGRMYXlvdXQuZ2V0RmllbGQoKTtcblx0XHRcdFx0bGV0IHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cblx0XHRcdFx0aWYgKGZpZWxkLnN1cHBvcnRzKCdnZXRWYWx1ZScpKSB7XG5cdFx0XHRcdFx0dmFsdWUgPSAoZmllbGQgYXMgT08udWkuVGV4dElucHV0V2lkZ2V0KS5nZXRWYWx1ZSgpO1xuXHRcdFx0XHR9IGVsc2UgaWYgKGZpZWxkLnN1cHBvcnRzKCdnZXRNZW51JykpIHtcblx0XHRcdFx0XHR2YWx1ZSA9IGdldFNlbGVjdGVkVmFsdWUoZmllbGQgYXMgT08udWkuRHJvcGRvd25XaWRnZXQpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKHZhbHVlKSB7XG5cdFx0XHRcdFx0ZmllbGRJbmZvW2ZpZWxkSW5mby5sZW5ndGhdID0gdmFsdWU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0ZmllbGRzSW5mb1tmaWVsZHNJbmZvLmxlbmd0aF0gPSBmaWVsZEluZm8uam9pbignLCAnKTtcblx0XHR9XG5cblx0XHRjb25zb2xlLmxvZyhmaWVsZHNJbmZvKTtcblxuXHRcdHJldHVybiBmaWVsZHNJbmZvLmpvaW4oJzsgJyk7XG5cdH07XG5cblx0bGV0IGF0dHJpYnV0aW9uczogc3RyaW5nID0gJyc7XG5cblx0Y29uc3QgJHdwQXR0cmlidXRpb25zOiBKUXVlcnkgPSAkKCc8aW5wdXQ+JykuYXR0cih7XG5cdFx0aWQ6ICd3cEF0dHJpYnV0aW9ucycsXG5cdFx0bmFtZTogJ3dwQXR0cmlidXRpb25zJyxcblx0XHR0eXBlOiAnaGlkZGVuJyxcblx0XHR2YWx1ZTogJycsXG5cdH0pO1xuXHRjb25zdCAkb3JpZ2luV3BBdHRyaWJ1dGlvbnM6IEpRdWVyeSA9ICRib2R5LmZpbmQoJ2lucHV0W25hbWU9d3BBdHRyaWJ1dGlvbnNdJyk7XG5cdGlmICghJG9yaWdpbldwQXR0cmlidXRpb25zLmxlbmd0aCkge1xuXHRcdCRib2R5LnByZXBlbmQoJHdwQXR0cmlidXRpb25zKTtcblx0fVxuXG5cdGF0dHJpYnV0aW9ucyA9IGdlbmVyYXRlSW5mb01hcnRpeChwYXJlbnRGaWVsZFNldCk7XG5cdCRvcmlnaW5XcEF0dHJpYnV0aW9ucy52YWwoYXR0cmlidXRpb25zKTtcbn07XG5cbmV4cG9ydCB7bW9kaWZ5QXR0cmlidXRpb259O1xuIiwgImltcG9ydCB7TElDRU5TRVN9IGZyb20gJy4uL2NvbnN0YW50JztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi4vaTE4bic7XG5pbXBvcnQge21vZGlmeUF0dHJpYnV0aW9ufSBmcm9tICcuL21vZGlmeUF0dHJpYnV0aW9uU3VtbWFyeSc7XG5cbmNvbnN0IGdlbmVyYXRlVGV4dElucHV0V2l0aERyb3Bkb3duID0gKCkgPT4ge1xuXHRjb25zdCBnZXRUZXh0SW5wdXQgPSAoKSA9PiB7XG5cdFx0Y29uc3QgdGV4dElucHV0ID0gbmV3IE9PLnVpLlRleHRJbnB1dFdpZGdldCh7XG5cdFx0XHRwbGFjZWhvbGRlcjogZ2V0TWVzc2FnZSgnU291cmNlJyksXG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gdGV4dElucHV0O1xuXHR9O1xuXG5cdGNvbnN0IGdldERyb3BEb3duID0gKCkgPT4ge1xuXHRcdGNvbnN0IGRyb3Bkb3duOiBPTy51aS5Ecm9wZG93bldpZGdldCA9IG5ldyBPTy51aS5Ecm9wZG93bldpZGdldCh7XG5cdFx0XHQkb3ZlcmxheTogdHJ1ZSxcblx0XHRcdG1lbnU6IHtcblx0XHRcdFx0aXRlbXM6IExJQ0VOU0VTLm1hcCgoe2RhdGEsIGxhYmVsfSk6IE9PLnVpLk1lbnVPcHRpb25XaWRnZXQgPT4ge1xuXHRcdFx0XHRcdHJldHVybiBuZXcgT08udWkuTWVudU9wdGlvbldpZGdldCh7XG5cdFx0XHRcdFx0XHRkYXRhLFxuXHRcdFx0XHRcdFx0bGFiZWwsXG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0pLFxuXHRcdFx0fSxcblx0XHR9KTtcblxuXHRcdHJldHVybiBkcm9wZG93bjtcblx0fTtcblxuXHRjb25zdCBnZXRBZGRJdGVtQnV0dG9uID0gKG9uQ2xpY2s/OiAoZXZlbnQ/OiBFdmVudCkgPT4gdm9pZCk6IE9PLnVpLkJ1dHRvbklucHV0V2lkZ2V0ID0+IHtcblx0XHRjb25zdCBhZGRJdGVtQnV0dG9uID0gbmV3IE9PLnVpLkJ1dHRvbklucHV0V2lkZ2V0KHtcblx0XHRcdGxhYmVsOiBnZXRNZXNzYWdlKCdBZGQnKSxcblx0XHR9KTtcblxuXHRcdGlmIChvbkNsaWNrKSB7XG5cdFx0XHRhZGRJdGVtQnV0dG9uLm9uKCdjbGljaycsIG9uQ2xpY2spO1xuXHRcdH1cblxuXHRcdHJldHVybiBhZGRJdGVtQnV0dG9uO1xuXHR9O1xuXG5cdGNvbnN0IGFkZEl0ZW1PbkNsaWNrID0gKGZpZWxkU2V0OiBPTy51aS5GaWVsZHNldExheW91dCkgPT4ge1xuXHRcdGZpZWxkU2V0LmFkZEl0ZW1zKFtnZXRGb2xsb3dVcEZpZWxkc2V0KCldKTtcblx0fTtcblxuXHRjb25zdCBnZXREZWxldGVJdGVtQnV0dG9uID0gKG9uQ2xpY2s/OiAoZXZlbnQ/OiBFdmVudCkgPT4gdm9pZCk6IE9PLnVpLkJ1dHRvbklucHV0V2lkZ2V0ID0+IHtcblx0XHRjb25zdCBkZWxldGVJdGVtQnV0dG9uID0gbmV3IE9PLnVpLkJ1dHRvbklucHV0V2lkZ2V0KHtcblx0XHRcdGxhYmVsOiBnZXRNZXNzYWdlKCdEZWxldGUnKSxcblx0XHR9KTtcblxuXHRcdGlmIChvbkNsaWNrKSB7XG5cdFx0XHRkZWxldGVJdGVtQnV0dG9uLm9uKCdjbGljaycsIG9uQ2xpY2spO1xuXHRcdH1cblxuXHRcdHJldHVybiBkZWxldGVJdGVtQnV0dG9uO1xuXHR9O1xuXG5cdGNvbnN0IGRlbGV0ZUl0ZW1PbkNsaWNrID0gKGZpZWxkU2V0OiBPTy51aS5GaWVsZHNldExheW91dCwgaXRlbTogT08udWkuRmllbGRzZXRMYXlvdXQpID0+IHtcblx0XHRmaWVsZFNldC5yZW1vdmVJdGVtcyhbaXRlbV0pO1xuXHR9O1xuXG5cdGNvbnN0IHBhcmVudEZpZWxkU2V0ID0gbmV3IE9PLnVpLkZpZWxkc2V0TGF5b3V0KHtcblx0XHRsYWJlbDogZ2V0TWVzc2FnZSgnU291cmNlcyBhbmQgTGljZW5zZXMnKSxcblx0fSk7XG5cblx0Y29uc3QgaW5pdGlhbEZpZWxkc2V0ID0gbmV3IE9PLnVpLkZpZWxkc2V0TGF5b3V0KCk7XG5cdGluaXRpYWxGaWVsZHNldC5hZGRJdGVtcyhbXG5cdFx0bmV3IE9PLnVpLkZpZWxkTGF5b3V0KGdldFRleHRJbnB1dCgpLCB7bGFiZWw6IGdldE1lc3NhZ2UoJ1NvdXJjZScpLCBhbGlnbjogJ2lubGluZSd9KSxcblx0XHRuZXcgT08udWkuRmllbGRMYXlvdXQoZ2V0RHJvcERvd24oKSwge2xhYmVsOiBnZXRNZXNzYWdlKCdMaWNlbnNlJyksIGFsaWduOiAnaW5saW5lJ30pLFxuXHRcdG5ldyBPTy51aS5GaWVsZExheW91dChcblx0XHRcdGdldEFkZEl0ZW1CdXR0b24oKCkgPT4ge1xuXHRcdFx0XHRhZGRJdGVtT25DbGljayhwYXJlbnRGaWVsZFNldCk7XG5cdFx0XHR9KSxcblx0XHRcdHthbGlnbjogJ2lubGluZSd9XG5cdFx0KSxcblx0XSk7XG5cblx0Y29uc3QgZ2V0Rm9sbG93VXBGaWVsZHNldCA9ICgpID0+IHtcblx0XHRjb25zdCBmb2xsb3dVcEZpZWxkc2V0ID0gbmV3IE9PLnVpLkZpZWxkc2V0TGF5b3V0KCk7XG5cdFx0Zm9sbG93VXBGaWVsZHNldC5hZGRJdGVtcyhbXG5cdFx0XHRuZXcgT08udWkuRmllbGRMYXlvdXQoZ2V0VGV4dElucHV0KCksIHtsYWJlbDogZ2V0TWVzc2FnZSgnU291cmNlJyksIGFsaWduOiAnaW5saW5lJ30pLFxuXHRcdFx0bmV3IE9PLnVpLkZpZWxkTGF5b3V0KGdldERyb3BEb3duKCksIHtsYWJlbDogZ2V0TWVzc2FnZSgnTGljZW5zZScpLCBhbGlnbjogJ2lubGluZSd9KSxcblx0XHRcdG5ldyBPTy51aS5GaWVsZExheW91dChcblx0XHRcdFx0Z2V0QWRkSXRlbUJ1dHRvbigoKSA9PiB7XG5cdFx0XHRcdFx0YWRkSXRlbU9uQ2xpY2socGFyZW50RmllbGRTZXQpO1xuXHRcdFx0XHR9KSxcblx0XHRcdFx0e2FsaWduOiAnaW5saW5lJ31cblx0XHRcdCksXG5cdFx0XHRuZXcgT08udWkuRmllbGRMYXlvdXQoXG5cdFx0XHRcdGdldERlbGV0ZUl0ZW1CdXR0b24oKCkgPT4ge1xuXHRcdFx0XHRcdGRlbGV0ZUl0ZW1PbkNsaWNrKHBhcmVudEZpZWxkU2V0LCBmb2xsb3dVcEZpZWxkc2V0KTtcblx0XHRcdFx0fSksXG5cdFx0XHRcdHthbGlnbjogJ2lubGluZSd9XG5cdFx0XHQpLFxuXHRcdF0pO1xuXG5cdFx0cmV0dXJuIGZvbGxvd1VwRmllbGRzZXQ7XG5cdH07XG5cblx0cGFyZW50RmllbGRTZXQuYWRkSXRlbXMoW2luaXRpYWxGaWVsZHNldF0pO1xuXG5cdHBhcmVudEZpZWxkU2V0Lm9uKCdjaGFuZ2UnLCAoKSA9PiB7XG5cdFx0Y29uc3QgJGJvZHkgPSAkKCdib2R5Jyk7XG5cdFx0bW9kaWZ5QXR0cmlidXRpb24oeyRib2R5LCBwYXJlbnRGaWVsZFNldH0pO1xuXHR9KTtcblxuXHRyZXR1cm4gcGFyZW50RmllbGRTZXQ7XG59O1xuXG5leHBvcnQge2dlbmVyYXRlVGV4dElucHV0V2l0aERyb3Bkb3dufTtcbiIsICJpbXBvcnQge21vZGlmeVZpc3VhbEVkaXRvckNoYW5nZVRhZywgbW9kaWZ5V2lraUVkaXRvckNoYW5nZVRhZ30gZnJvbSAnLi9tb2RpZnlDaGFuZ2VUYWcnO1xuaW1wb3J0IHtnZW5lcmF0ZVRleHRJbnB1dFdpdGhEcm9wZG93bn0gZnJvbSAnLi9nZW5lcmF0ZVRleHRJbnB1dFdpdGhEcm9wZG93bic7XG5cbmNvbnN0IGdlbmVyYXRlVmlzdWFsRWRpdG9yQ2hlY2tib3hMYXlvdXQgPSAoe1xuXHRpbnB1dElkLFxuXHRsYWJlbCxcblx0Y2hhbmdlVGFnLFxufToge1xuXHRpbnB1dElkPzogc3RyaW5nO1xuXHRsYWJlbDogc3RyaW5nO1xuXHRjaGFuZ2VUYWc/OiBzdHJpbmc7XG59KSA9PiB7XG5cdGNvbnN0IGNoZWNrYm94OiBPTy51aS5DaGVja2JveElucHV0V2lkZ2V0ID0gbmV3IE9PLnVpLkNoZWNrYm94SW5wdXRXaWRnZXQoe1xuXHRcdHNlbGVjdGVkOiBmYWxzZSxcblx0fSk7XG5cblx0aWYgKGlucHV0SWQpIHtcblx0XHRjaGVja2JveC5zZXRJbnB1dElkKGlucHV0SWQpO1xuXHR9XG5cblx0aWYgKGNoYW5nZVRhZykge1xuXHRcdG1vZGlmeVZpc3VhbEVkaXRvckNoYW5nZVRhZyh7Y2hhbmdlVGFnLCBjaGVja2JveH0pO1xuXHR9XG5cblx0Y29uc3QgdGV4dElucHV0V2l0aERyb3Bkb3duID0gZ2VuZXJhdGVUZXh0SW5wdXRXaXRoRHJvcGRvd24oKTtcblxuXHRjaGVja2JveC5vbignY2hhbmdlJywgKHNlbGVjdGVkKSA9PiB7XG5cdFx0dGV4dElucHV0V2l0aERyb3Bkb3duLiRlbGVtZW50LnByb3AoJ2Rpc2FibGVkJywgIXNlbGVjdGVkKTtcblx0fSk7XG5cblx0Y29uc3QgY2hlY2tib3hMYXlvdXQ6IE9PLnVpLkZpZWxkTGF5b3V0PE9PLnVpLkNoZWNrYm94SW5wdXRXaWRnZXQ+ID0gbmV3IE9PLnVpLkZpZWxkTGF5b3V0KGNoZWNrYm94LCB7XG5cdFx0YWxpZ246ICdpbmxpbmUnLFxuXHRcdGxhYmVsLFxuXHR9KTtcblxuXHRjb25zdCAkbGF5b3V0ID0gJCgnPGRpdj4nKS5hdHRyKCdpZCcsICdlZmEtYXJlYScpLmFwcGVuZChjaGVja2JveExheW91dC4kZWxlbWVudCwgdGV4dElucHV0V2l0aERyb3Bkb3duLiRlbGVtZW50KTtcblxuXHRyZXR1cm4gJGxheW91dDtcbn07XG5cbmNvbnN0IGdlbmVyYXRlV2lraUVkaXRvckNoZWNrYm94TGF5b3V0ID0gKHtcblx0aW5wdXRJZCxcblx0bGFiZWwsXG5cdGNoYW5nZVRhZyxcblx0JGVkaXRGb3JtLFxufToge1xuXHRpbnB1dElkPzogc3RyaW5nO1xuXHRsYWJlbDogc3RyaW5nO1xuXHRjaGFuZ2VUYWc/OiBzdHJpbmc7XG5cdCRlZGl0Rm9ybTogSlF1ZXJ5O1xufSkgPT4ge1xuXHRjb25zdCBjaGVja2JveDogT08udWkuQ2hlY2tib3hJbnB1dFdpZGdldCA9IG5ldyBPTy51aS5DaGVja2JveElucHV0V2lkZ2V0KHtcblx0XHRzZWxlY3RlZDogZmFsc2UsXG5cdH0pO1xuXG5cdGlmIChpbnB1dElkKSB7XG5cdFx0Y2hlY2tib3guc2V0SW5wdXRJZChpbnB1dElkKTtcblx0fVxuXG5cdGlmIChjaGFuZ2VUYWcpIHtcblx0XHRtb2RpZnlXaWtpRWRpdG9yQ2hhbmdlVGFnKHtjaGFuZ2VUYWcsIGNoZWNrYm94LCAkZWRpdEZvcm19KTtcblx0fVxuXG5cdGNvbnN0IHRleHRJbnB1dFdpdGhEcm9wZG93biA9IGdlbmVyYXRlVGV4dElucHV0V2l0aERyb3Bkb3duKCk7XG5cblx0Y2hlY2tib3gub24oJ2NoYW5nZScsIChzZWxlY3RlZCkgPT4ge1xuXHRcdHRleHRJbnB1dFdpdGhEcm9wZG93bi4kZWxlbWVudC5wcm9wKCdkaXNhYmxlZCcsICFzZWxlY3RlZCk7XG5cdH0pO1xuXG5cdGNvbnN0IGNoZWNrYm94TGF5b3V0OiBPTy51aS5GaWVsZExheW91dDxPTy51aS5DaGVja2JveElucHV0V2lkZ2V0PiA9IG5ldyBPTy51aS5GaWVsZExheW91dChjaGVja2JveCwge1xuXHRcdGFsaWduOiAnaW5saW5lJyxcblx0XHRsYWJlbCxcblx0fSk7XG5cblx0Y29uc3QgJGxheW91dCA9ICQoJzxkaXY+JykuYXR0cignaWQnLCAnZWZhLWFyZWEnKS5hcHBlbmQoY2hlY2tib3hMYXlvdXQuJGVsZW1lbnQsIHRleHRJbnB1dFdpdGhEcm9wZG93bi4kZWxlbWVudCk7XG5cblx0cmV0dXJuICRsYXlvdXQ7XG59O1xuZXhwb3J0IHtnZW5lcmF0ZVZpc3VhbEVkaXRvckNoZWNrYm94TGF5b3V0LCBnZW5lcmF0ZVdpa2lFZGl0b3JDaGVja2JveExheW91dH07XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICd+L0VkaXRmb3JtX0F0dHJpYnV0aW9uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge2dlbmVyYXRlVmlzdWFsRWRpdG9yQ2hlY2tib3hMYXlvdXR9IGZyb20gJy4vdXRpbC9nZW5lcmF0ZUNoZWNrYm94TGF5b3V0JztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9pMThuJztcblxuY29uc3QgcHJvY2Vzc1Zpc3VhbEVkaXRvciA9ICh7JGJvZHl9OiB7JGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+fSk6IHZvaWQgPT4ge1xuXHQvLyBHdWFyZCBhZ2FpbnN0IGRvdWJsZSBpbmNsdXNpb25zXG5cdGlmIChtdy5jb25maWcuZ2V0KE9QVElPTlMuY29uZmlnS2V5KSkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0ICR0YXJnZXQ6IEpRdWVyeSA9ICRib2R5LmZpbmQoYC4ke09QVElPTlMudGFyZ2V0Q2xhc3NWZX1gKTtcblx0aWYgKCEkdGFyZ2V0Lmxlbmd0aCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdG13LmNvbmZpZy5zZXQoT1BUSU9OUy5jb25maWdLZXksIHRydWUpO1xuXG5cdGNvbnN0ICRsYXlvdXQgPSBnZW5lcmF0ZVZpc3VhbEVkaXRvckNoZWNrYm94TGF5b3V0KHtcblx0XHRpbnB1dElkOiBPUFRJT05TLmlucHV0SWQsXG5cdFx0bGFiZWw6IGdldE1lc3NhZ2UoJ1RoaXJkUGFydHlDb250ZW50Q29udGFpbmVkJyksXG5cdFx0Y2hhbmdlVGFnOiBPUFRJT05TLmNoYW5nZVRhZyxcblx0fSk7XG5cblx0aWYgKCEkYm9keS5maW5kKGAjJHtPUFRJT05TLmlucHV0SWR9YCkubGVuZ3RoKSB7XG5cdFx0JHRhcmdldC5hcHBlbmQoJGxheW91dCk7XG5cdH1cbn07XG5cbmV4cG9ydCB7cHJvY2Vzc1Zpc3VhbEVkaXRvcn07XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICd+L0VkaXRmb3JtX0F0dHJpYnV0aW9uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge2dlbmVyYXRlV2lraUVkaXRvckNoZWNrYm94TGF5b3V0fSBmcm9tICcuL3V0aWwvZ2VuZXJhdGVDaGVja2JveExheW91dCc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vaTE4bic7XG5cbmNvbnN0IHByb2Nlc3NXaWtpRWRpdG9yID0gKHskYm9keSwgJGVkaXRGb3JtfTogeyRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50PjsgJGVkaXRGb3JtPzogSlF1ZXJ5fSk6IHZvaWQgPT4ge1xuXHQvLyBHdWFyZCBhZ2FpbnN0IGRvdWJsZSBpbmNsdXNpb25zXG5cdGlmIChtdy5jb25maWcuZ2V0KE9QVElPTlMuY29uZmlnS2V5KSkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0ICR0YXJnZXQ6IEpRdWVyeSA9ICgkZWRpdEZvcm0gYXMgSlF1ZXJ5KS5maW5kKE9QVElPTlMudGFyZ2V0V2lraUVkaXRvcik7XG5cdGlmICghJHRhcmdldC5sZW5ndGgpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRtdy5jb25maWcuc2V0KE9QVElPTlMuY29uZmlnS2V5LCB0cnVlKTtcblxuXHRjb25zdCAkbGF5b3V0ID0gZ2VuZXJhdGVXaWtpRWRpdG9yQ2hlY2tib3hMYXlvdXQoe1xuXHRcdGlucHV0SWQ6IE9QVElPTlMuaW5wdXRJZCxcblx0XHRsYWJlbDogZ2V0TWVzc2FnZSgnVGhpcmRQYXJ0eUNvbnRlbnRDb250YWluZWQnKSxcblx0XHQkZWRpdEZvcm06ICRlZGl0Rm9ybSBhcyBKUXVlcnksXG5cdFx0Y2hhbmdlVGFnOiBPUFRJT05TLmNoYW5nZVRhZyxcblx0fSk7XG5cblx0aWYgKCEkYm9keS5maW5kKGAjJHtPUFRJT05TLmlucHV0SWR9YCkubGVuZ3RoKSB7XG5cdFx0JHRhcmdldC5hcHBlbmQoJGxheW91dCk7XG5cdH1cbn07XG5cbmV4cG9ydCB7cHJvY2Vzc1dpa2lFZGl0b3J9O1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0MsSUFBQUEsWUFBYTtBQUNiLElBQUFDLFlBQWE7QUFDYixJQUFBQyxVQUFXO0FBQ1gsSUFBQUMsZ0JBQWlCO0FBQ2pCLElBQUFDLG1CQUFvQjs7QUNKckIsSUFBQUMscUJBQXNCQyxRQUFBLGlCQUFBOztBQ0R0QixJQUFNQyw4QkFBOEJBLENBQUM7RUFDcENOLFdBQUFPO0VBQ0FDO0FBQ0QsTUFHWTtBQUNYQSxXQUFTQyxHQUFHLFVBQVUsTUFBWTtBQUFBLFFBQUFDLHVCQUFBQyx3QkFBQUM7QUFDakMsVUFBTUMscUJBQXNCQyxzQkFBcUM7QUFDaEUsYUFBT04sU0FBU08sV0FBVyxJQUFBLEdBQUFDLE9BQ3JCRixrQkFBZ0IsR0FBQSxFQUFBRSxPQUFJVCxVQUFTLElBQ2hDTyxpQkFBaUJHLFFBQUEsSUFBQUQsT0FBWVQsVUFBUyxHQUFJLEVBQUU7SUFDaEQ7QUFFQSxRQUFJVyxhQUFxQjtBQUN6QkEsaUJBQWFMLG9CQUFBSCx5QkFBQUMsMEJBQW1CQyx5QkFBQU8sT0FBT0MsR0FBR0MsS0FBS0MsT0FBT0MsWUFBV0Msa0JBQUEsUUFBQWIsMkJBQUEsU0FBQSxTQUFqQ0EsdUJBQUFjLEtBQUFiLHNCQUFnRCxPQUFBLFFBQUFGLDBCQUFBLFNBQUFBLHdCQUFLLEVBQUU7QUFDdkZTLFdBQU9DLEdBQUdDLEtBQUtDLE9BQU9DLFdBQVdDLGVBQWUsTUFBYztBQUM3RCxhQUFPTjtJQUNSO0VBQ0QsQ0FBQztBQUNGO0FBRUEsSUFBTVEsNEJBQTRCQSxDQUFDO0VBQ2xDMUIsV0FBQU87RUFDQUM7RUFDQW1CO0FBQ0QsTUFJWTtBQUNYbkIsV0FBU0MsR0FBRyxVQUFVLE1BQVk7QUFBQSxRQUFBbUIsdUJBQUFDO0FBQ2pDLFVBQU1oQixxQkFBc0JDLHNCQUFxQztBQUNoRSxhQUFPTixTQUFTTyxXQUFXLElBQUEsR0FBQUMsT0FDckJGLGtCQUFnQixHQUFBLEVBQUFFLE9BQUlULFVBQVMsSUFDaENPLGlCQUFpQkcsUUFBQSxJQUFBRCxPQUFZVCxVQUFTLEdBQUksRUFBRTtJQUNoRDtBQUVBLFFBQUlXLGFBQXFCO0FBRXpCLFVBQU1ZLGdCQUF3QkMsRUFBRSxTQUFTLEVBQUVDLEtBQUs7TUFDL0NDLElBQUk7TUFDSkMsTUFBTTtNQUNOQyxNQUFNO01BQ05DLE9BQU87SUFDUixDQUFDO0FBQ0QsVUFBTUMsUUFBUVYsVUFBVVcsUUFBUSxNQUFNO0FBQ3RDLFVBQU1DLHNCQUE4QkYsTUFBTUcsS0FBSywwQkFBMEI7QUFDekUsUUFBSSxDQUFDRCxvQkFBb0JFLFFBQVE7QUFDaENKLFlBQU1LLFFBQVFaLGFBQWE7SUFDNUI7QUFDQVosaUJBQWFMLG9CQUFBZSx5QkFBQUMseUJBQW1CVSxvQkFBb0JJLElBQUksT0FBQSxRQUFBZCwyQkFBQSxTQUFBLFNBQXhCQSx1QkFBMkJlLFNBQVMsT0FBQSxRQUFBaEIsMEJBQUEsU0FBQUEsd0JBQUssRUFBRTtBQUMzRVcsd0JBQW9CSSxJQUFJekIsVUFBVTtFQUNuQyxDQUFDO0FBQ0Y7O0FDdERBLElBQU0yQixXQUFXLENBQ2hCO0VBQ0NDLE9BQU87RUFDUEMsTUFBTTtBQUNQLEdBQ0E7RUFDQ0QsT0FBTztFQUNQQyxNQUFNO0FBQ1AsR0FDQTtFQUNDRCxPQUFPO0VBQ1BDLE1BQU07QUFDUCxHQUNBO0VBQ0NELE9BQU87RUFDUEMsTUFBTTtBQUNQLEdBQ0E7RUFDQ0QsT0FBTztFQUNQQyxNQUFNO0FBQ1AsQ0FBQTs7QUNwQkQsSUFBQUMsb0JBQXVCM0MsUUFBQSxpQkFBQTtBQUV2QixJQUFNNEMsa0JBQWtCQSxNQUFNO0FBQzdCLFNBQU87SUFDTkMsTUFBQSxHQUFLRixrQkFBQUcsVUFBUztNQUNiQyxJQUFJO01BQ0pDLElBQUk7SUFDTCxDQUFDO0lBQ0RDLFNBQUEsR0FBUU4sa0JBQUFHLFVBQVM7TUFDaEJDLElBQUk7TUFDSkMsSUFBSTtJQUNMLENBQUM7SUFDREUsU0FBQSxHQUFRUCxrQkFBQUcsVUFBUztNQUNoQkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNESSxVQUFBLEdBQVNSLGtCQUFBRyxVQUFTO01BQ2pCQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0QseUJBQUEsR0FBd0JKLGtCQUFBRyxVQUFTO01BQ2hDQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0RLLDZCQUFBLEdBQTRCVCxrQkFBQUcsVUFBUztNQUNwQ0MsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNETSx5QkFBQSxHQUF3QlYsa0JBQUFHLFVBQVM7TUFDaENDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7RUFDRjtBQUNEO0FBRUEsSUFBTU8sZUFBZVYsZ0JBQWdCO0FBRXJDLElBQU1XLGFBQWdEQyxTQUFRO0FBQzdELFNBQU9GLGFBQWFFLEdBQUcsS0FBS0E7QUFDN0I7O0FDNUNBLElBQU1DLG9CQUFvQkEsQ0FBQztFQUMxQnpCO0VBQ0EwQjtBQUNELE1BR007QUFDTCxRQUFNQyxxQkFBc0JDLG9CQUF5QztBQUNwRSxVQUFNQyxhQUFhLENBQUE7QUFFbkIsVUFBTUMsbUJBQW9CQyxjQUF1RDtBQUNoRixZQUFNQyxlQUEwQ0QsU0FDOUNFLFFBQVEsRUFDUkMsaUJBQWlCO0FBQ25CLGFBQU9GLGVBQWdCQSxhQUFhRyxRQUFRLElBQWU7SUFDNUQ7QUFBQSxRQUFBQyxZQUFBQywyQkFFa0NULGVBQWVVLFNBQVMsQ0FBQSxHQUFBQztBQUFBLFFBQUE7QUFBMUQsV0FBQUgsVUFBQUksRUFBQSxHQUFBLEVBQUFELFFBQUFILFVBQUFLLEVBQUEsR0FBQUMsUUFBdUY7QUFBQSxjQUE1RUMsc0JBQUFKLE1BQUF4QztBQUNWLGNBQU02QyxZQUFZLENBQUE7QUFBQyxZQUFBQyxhQUFBUiwyQkFFT00sb0JBQW9CTCxTQUFTLENBQUEsR0FBQVE7QUFBQSxZQUFBO0FBQXZELGVBQUFELFdBQUFMLEVBQUEsR0FBQSxFQUFBTSxTQUFBRCxXQUFBSixFQUFBLEdBQUFDLFFBQWlGO0FBQUEsa0JBQXRFSyxjQUFBRCxPQUFBL0M7QUFDVixrQkFBTWlELFFBQVFELFlBQVlFLFNBQVM7QUFDbkMsZ0JBQUlsRDtBQUVKLGdCQUFJaUQsTUFBTUUsU0FBUyxVQUFVLEdBQUc7QUFDL0JuRCxzQkFBU2lELE1BQWdDRyxTQUFTO1lBQ25ELFdBQVdILE1BQU1FLFNBQVMsU0FBUyxHQUFHO0FBQ3JDbkQsc0JBQVErQixpQkFBaUJrQixLQUE2QjtZQUN2RDtBQUVBLGdCQUFJakQsT0FBTztBQUNWNkMsd0JBQVVBLFVBQVV4QyxNQUFNLElBQUlMO1lBQy9CO1VBQ0Q7UUFBQSxTQUFBcUQsS0FBQTtBQUFBUCxxQkFBQVEsRUFBQUQsR0FBQTtRQUFBLFVBQUE7QUFBQVAscUJBQUFTLEVBQUE7UUFBQTtBQUVBekIsbUJBQVdBLFdBQVd6QixNQUFNLElBQUl3QyxVQUFVVyxLQUFLLElBQUk7TUFDcEQ7SUFBQSxTQUFBSCxLQUFBO0FBQUFoQixnQkFBQWlCLEVBQUFELEdBQUE7SUFBQSxVQUFBO0FBQUFoQixnQkFBQWtCLEVBQUE7SUFBQTtBQUVBRSxZQUFRQyxJQUFJNUIsVUFBVTtBQUV0QixXQUFPQSxXQUFXMEIsS0FBSyxJQUFJO0VBQzVCO0FBRUEsTUFBSUcsZUFBdUI7QUFFM0IsUUFBTUMsa0JBQTBCakUsRUFBRSxTQUFTLEVBQUVDLEtBQUs7SUFDakRDLElBQUk7SUFDSkMsTUFBTTtJQUNOQyxNQUFNO0lBQ05DLE9BQU87RUFDUixDQUFDO0FBQ0QsUUFBTTZELHdCQUFnQzVELE1BQU1HLEtBQUssNEJBQTRCO0FBQzdFLE1BQUksQ0FBQ3lELHNCQUFzQnhELFFBQVE7QUFDbENKLFVBQU1LLFFBQVFzRCxlQUFlO0VBQzlCO0FBRUFELGlCQUFlL0IsbUJBQW1CRCxjQUFjO0FBQ2hEa0Msd0JBQXNCdEQsSUFBSW9ELFlBQVk7QUFDdkM7O0FDdERBLElBQU1HLGdDQUFnQ0EsTUFBTTtBQUMzQyxRQUFNQyxlQUFlQSxNQUFNO0FBQzFCLFVBQU1DLFlBQVksSUFBSUMsR0FBR0MsR0FBR0MsZ0JBQWdCO01BQzNDQyxhQUFhNUMsV0FBVyxRQUFRO0lBQ2pDLENBQUM7QUFFRCxXQUFPd0M7RUFDUjtBQUVBLFFBQU1LLGNBQWNBLE1BQU07QUFDekIsVUFBTXJDLFdBQWlDLElBQUlpQyxHQUFHQyxHQUFHSSxlQUFlO01BQy9EQyxVQUFVO01BQ1ZDLE1BQU07UUFDTEMsT0FBT2hFLFNBQVNpRSxJQUFJLENBQUM7VUFBQy9EO1VBQU1EO1FBQUssTUFBOEI7QUFDOUQsaUJBQU8sSUFBSXVELEdBQUdDLEdBQUdTLGlCQUFpQjtZQUNqQ2hFO1lBQ0FEO1VBQ0QsQ0FBQztRQUNGLENBQUM7TUFDRjtJQUNELENBQUM7QUFFRCxXQUFPc0I7RUFDUjtBQUVBLFFBQU00QyxtQkFBb0JDLGFBQStEO0FBQ3hGLFVBQU1DLGdCQUFnQixJQUFJYixHQUFHQyxHQUFHYSxrQkFBa0I7TUFDakRyRSxPQUFPYyxXQUFXLEtBQUs7SUFDeEIsQ0FBQztBQUVELFFBQUlxRCxTQUFTO0FBQ1pDLG9CQUFjekcsR0FBRyxTQUFTd0csT0FBTztJQUNsQztBQUVBLFdBQU9DO0VBQ1I7QUFFQSxRQUFNRSxpQkFBa0JDLGNBQW1DO0FBQzFEQSxhQUFTQyxTQUFTLENBQUNDLG9CQUFvQixDQUFDLENBQUM7RUFDMUM7QUFFQSxRQUFNQyxzQkFBdUJQLGFBQStEO0FBQzNGLFVBQU1RLG1CQUFtQixJQUFJcEIsR0FBR0MsR0FBR2Esa0JBQWtCO01BQ3BEckUsT0FBT2MsV0FBVyxRQUFRO0lBQzNCLENBQUM7QUFFRCxRQUFJcUQsU0FBUztBQUNaUSx1QkFBaUJoSCxHQUFHLFNBQVN3RyxPQUFPO0lBQ3JDO0FBRUEsV0FBT1E7RUFDUjtBQUVBLFFBQU1DLG9CQUFvQkEsQ0FBQ0wsVUFBZ0NNLFNBQStCO0FBQ3pGTixhQUFTTyxZQUFZLENBQUNELElBQUksQ0FBQztFQUM1QjtBQUVBLFFBQU01RCxpQkFBaUIsSUFBSXNDLEdBQUdDLEdBQUd1QixlQUFlO0lBQy9DL0UsT0FBT2MsV0FBVyxzQkFBc0I7RUFDekMsQ0FBQztBQUVELFFBQU1rRSxrQkFBa0IsSUFBSXpCLEdBQUdDLEdBQUd1QixlQUFlO0FBQ2pEQyxrQkFBZ0JSLFNBQVMsQ0FDeEIsSUFBSWpCLEdBQUdDLEdBQUd5QixZQUFZNUIsYUFBYSxHQUFHO0lBQUNyRCxPQUFPYyxXQUFXLFFBQVE7SUFBR29FLE9BQU87RUFBUSxDQUFDLEdBQ3BGLElBQUkzQixHQUFHQyxHQUFHeUIsWUFBWXRCLFlBQVksR0FBRztJQUFDM0QsT0FBT2MsV0FBVyxTQUFTO0lBQUdvRSxPQUFPO0VBQVEsQ0FBQyxHQUNwRixJQUFJM0IsR0FBR0MsR0FBR3lCLFlBQ1RmLGlCQUFpQixNQUFNO0FBQ3RCSSxtQkFBZXJELGNBQWM7RUFDOUIsQ0FBQyxHQUNEO0lBQUNpRSxPQUFPO0VBQVEsQ0FDakIsQ0FBQSxDQUNBO0FBRUQsUUFBTVQsc0JBQXNCQSxNQUFNO0FBQ2pDLFVBQU1VLG1CQUFtQixJQUFJNUIsR0FBR0MsR0FBR3VCLGVBQWU7QUFDbERJLHFCQUFpQlgsU0FBUyxDQUN6QixJQUFJakIsR0FBR0MsR0FBR3lCLFlBQVk1QixhQUFhLEdBQUc7TUFBQ3JELE9BQU9jLFdBQVcsUUFBUTtNQUFHb0UsT0FBTztJQUFRLENBQUMsR0FDcEYsSUFBSTNCLEdBQUdDLEdBQUd5QixZQUFZdEIsWUFBWSxHQUFHO01BQUMzRCxPQUFPYyxXQUFXLFNBQVM7TUFBR29FLE9BQU87SUFBUSxDQUFDLEdBQ3BGLElBQUkzQixHQUFHQyxHQUFHeUIsWUFDVGYsaUJBQWlCLE1BQU07QUFDdEJJLHFCQUFlckQsY0FBYztJQUM5QixDQUFDLEdBQ0Q7TUFBQ2lFLE9BQU87SUFBUSxDQUNqQixHQUNBLElBQUkzQixHQUFHQyxHQUFHeUIsWUFDVFAsb0JBQW9CLE1BQU07QUFDekJFLHdCQUFrQjNELGdCQUFnQmtFLGdCQUFnQjtJQUNuRCxDQUFDLEdBQ0Q7TUFBQ0QsT0FBTztJQUFRLENBQ2pCLENBQUEsQ0FDQTtBQUVELFdBQU9DO0VBQ1I7QUFFQWxFLGlCQUFldUQsU0FBUyxDQUFDUSxlQUFlLENBQUM7QUFFekMvRCxpQkFBZXRELEdBQUcsVUFBVSxNQUFNO0FBQ2pDLFVBQU00QixRQUFRTixFQUFFLE1BQU07QUFDdEIrQixzQkFBa0I7TUFBQ3pCO01BQU8wQjtJQUFjLENBQUM7RUFDMUMsQ0FBQztBQUVELFNBQU9BO0FBQ1I7O0FDeEdBLElBQU1tRSxxQ0FBcUNBLENBQUM7RUFDM0NqSSxTQUFBa0k7RUFDQXJGO0VBQ0E5QyxXQUFBTztBQUNELE1BSU07QUFDTCxRQUFNQyxXQUFzQyxJQUFJNkYsR0FBR0MsR0FBRzhCLG9CQUFvQjtJQUN6RUMsVUFBVTtFQUNYLENBQUM7QUFFRCxNQUFJRixVQUFTO0FBQ1ozSCxhQUFTOEgsV0FBV0gsUUFBTztFQUM1QjtBQUVBLE1BQUk1SCxZQUFXO0FBQ2RELGdDQUE0QjtNQUFDTixXQUFBTztNQUFXQztJQUFRLENBQUM7RUFDbEQ7QUFFQSxRQUFNK0gsd0JBQXdCckMsOEJBQThCO0FBRTVEMUYsV0FBU0MsR0FBRyxVQUFXNEgsY0FBYTtBQUNuQ0UsMEJBQXNCQyxTQUFTQyxLQUFLLFlBQVksQ0FBQ0osUUFBUTtFQUMxRCxDQUFDO0FBRUQsUUFBTUssaUJBQStELElBQUlyQyxHQUFHQyxHQUFHeUIsWUFBWXZILFVBQVU7SUFDcEd3SCxPQUFPO0lBQ1BsRjtFQUNELENBQUM7QUFFRCxRQUFNNkYsVUFBVTVHLEVBQUUsT0FBTyxFQUFFQyxLQUFLLE1BQU0sVUFBVSxFQUFFNEcsT0FBT0YsZUFBZUYsVUFBVUQsc0JBQXNCQyxRQUFRO0FBRWhILFNBQU9HO0FBQ1I7QUFFQSxJQUFNRSxtQ0FBbUNBLENBQUM7RUFDekM1SSxTQUFBa0k7RUFDQXJGO0VBQ0E5QyxXQUFBTztFQUNBb0I7QUFDRCxNQUtNO0FBQ0wsUUFBTW5CLFdBQXNDLElBQUk2RixHQUFHQyxHQUFHOEIsb0JBQW9CO0lBQ3pFQyxVQUFVO0VBQ1gsQ0FBQztBQUVELE1BQUlGLFVBQVM7QUFDWjNILGFBQVM4SCxXQUFXSCxRQUFPO0VBQzVCO0FBRUEsTUFBSTVILFlBQVc7QUFDZG1CLDhCQUEwQjtNQUFDMUIsV0FBQU87TUFBV0M7TUFBVW1CO0lBQVMsQ0FBQztFQUMzRDtBQUVBLFFBQU00Ryx3QkFBd0JyQyw4QkFBOEI7QUFFNUQxRixXQUFTQyxHQUFHLFVBQVc0SCxjQUFhO0FBQ25DRSwwQkFBc0JDLFNBQVNDLEtBQUssWUFBWSxDQUFDSixRQUFRO0VBQzFELENBQUM7QUFFRCxRQUFNSyxpQkFBK0QsSUFBSXJDLEdBQUdDLEdBQUd5QixZQUFZdkgsVUFBVTtJQUNwR3dILE9BQU87SUFDUGxGO0VBQ0QsQ0FBQztBQUVELFFBQU02RixVQUFVNUcsRUFBRSxPQUFPLEVBQUVDLEtBQUssTUFBTSxVQUFVLEVBQUU0RyxPQUFPRixlQUFlRixVQUFVRCxzQkFBc0JDLFFBQVE7QUFFaEgsU0FBT0c7QUFDUjs7QUN6RUEsSUFBTUcsc0JBQXNCQSxDQUFDO0VBQUN6RztBQUFLLE1BQThDO0FBRWhGLE1BQUkwRyxHQUFHQyxPQUFPQyxJQUFZbEosU0FBUyxHQUFHO0FBQ3JDO0VBQ0Q7QUFFQSxRQUFNbUosVUFBa0I3RyxNQUFNRyxLQUFBLElBQUF4QixPQUFpQmQsYUFBYSxDQUFFO0FBQzlELE1BQUksQ0FBQ2dKLFFBQVF6RyxRQUFRO0FBQ3BCO0VBQ0Q7QUFFQXNHLEtBQUdDLE9BQU9HLElBQVlwSixXQUFXLElBQUk7QUFFckMsUUFBTTRJLFVBQVVULG1DQUFtQztJQUNsRGpJO0lBQ0E2QyxPQUFPYyxXQUFXLDRCQUE0QjtJQUM5QzVEO0VBQ0QsQ0FBQztBQUVELE1BQUksQ0FBQ3FDLE1BQU1HLEtBQUEsSUFBQXhCLE9BQWlCZixPQUFPLENBQUUsRUFBRXdDLFFBQVE7QUFDOUN5RyxZQUFRTixPQUFPRCxPQUFPO0VBQ3ZCO0FBQ0Q7O0FDdEJBLElBQU1TLG9CQUFvQkEsQ0FBQztFQUFDL0c7RUFBT1Y7QUFBUyxNQUFrRTtBQUU3RyxNQUFJb0gsR0FBR0MsT0FBT0MsSUFBWWxKLFNBQVMsR0FBRztBQUNyQztFQUNEO0FBRUEsUUFBTW1KLFVBQW1CdkgsVUFBcUJhLEtBQWFyQyxnQkFBZ0I7QUFDM0UsTUFBSSxDQUFDK0ksUUFBUXpHLFFBQVE7QUFDcEI7RUFDRDtBQUVBc0csS0FBR0MsT0FBT0csSUFBWXBKLFdBQVcsSUFBSTtBQUVyQyxRQUFNNEksVUFBVUUsaUNBQWlDO0lBQ2hENUk7SUFDQTZDLE9BQU9jLFdBQVcsNEJBQTRCO0lBQzlDakM7SUFDQTNCO0VBQ0QsQ0FBQztBQUVELE1BQUksQ0FBQ3FDLE1BQU1HLEtBQUEsSUFBQXhCLE9BQWlCZixPQUFPLENBQUUsRUFBRXdDLFFBQVE7QUFDOUN5RyxZQUFRTixPQUFPRCxPQUFPO0VBQ3ZCO0FBQ0Q7O0FSbkJBLE1BQUEsR0FBS3ZJLG1CQUFBaUosU0FBUSxFQUFFQyxLQUFLLFNBQVNDLFNBQVNsSCxPQUFzQztBQUMzRTBHLEtBQUdTLEtBQUssbUJBQW1CLEVBQUVDLElBQUs5SCxlQUFvQjtBQUNyRHlILHNCQUFrQjtNQUNqQi9HO01BQ0FWO0lBQ0QsQ0FBQztFQUNGLENBQUM7QUFFRG9ILEtBQUdTLEtBQUssNEJBQTRCLEVBQUVDLElBQUksTUFBWTtBQUNyRFgsd0JBQW9CO01BQ25Cekc7SUFDRCxDQUFDO0VBQ0YsQ0FBQztBQUdEMEcsS0FBR1MsS0FBSyx1QkFBdUIsRUFBRUMsSUFBSSxNQUFNO0FBQzFDLFFBQUlWLEdBQUdDLE9BQU9DLElBQVlsSixTQUFTLEdBQUc7QUFDckNnSixTQUFHQyxPQUFPRyxJQUFZcEosV0FBVyxLQUFLO0lBQ3ZDO0VBQ0QsQ0FBQztBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbImNvbmZpZ0tleSIsICJjaGFuZ2VUYWciLCAiaW5wdXRJZCIsICJ0YXJnZXRDbGFzc1ZlIiwgInRhcmdldFdpa2lFZGl0b3IiLCAiaW1wb3J0X2V4dF9nYWRnZXQyIiwgInJlcXVpcmUiLCAibW9kaWZ5VmlzdWFsRWRpdG9yQ2hhbmdlVGFnIiwgImNoYW5nZVRhZzIiLCAiY2hlY2tib3giLCAib24iLCAiX3dpbmRvdyR2ZSRpbml0JHRhcmdlIiwgIl93aW5kb3ckdmUkaW5pdCR0YXJnZTIiLCAiX3dpbmRvdyR2ZSRpbml0JHRhcmdlMyIsICJnZW5lcmF0ZUNoYW5nZVRhZ3MiLCAib3JpZ2luQ2hhbmdlVGFncyIsICJpc1NlbGVjdGVkIiwgImNvbmNhdCIsICJyZXBsYWNlIiwgImNoYW5nZVRhZ3MiLCAid2luZG93IiwgInZlIiwgImluaXQiLCAidGFyZ2V0IiwgInNhdmVGaWVsZHMiLCAid3BDaGFuZ2VUYWdzIiwgImNhbGwiLCAibW9kaWZ5V2lraUVkaXRvckNoYW5nZVRhZyIsICIkZWRpdEZvcm0iLCAiXyRvcmlnaW5XcENoYW5nZVRhZ3MkIiwgIl8kb3JpZ2luV3BDaGFuZ2VUYWdzJDIiLCAiJHdwQ2hhbmdlVGFncyIsICIkIiwgImF0dHIiLCAiaWQiLCAibmFtZSIsICJ0eXBlIiwgInZhbHVlIiwgIiRib2R5IiwgInBhcmVudHMiLCAiJG9yaWdpbldwQ2hhbmdlVGFncyIsICJmaW5kIiwgImxlbmd0aCIsICJwcmVwZW5kIiwgInZhbCIsICJ0b1N0cmluZyIsICJMSUNFTlNFUyIsICJsYWJlbCIsICJkYXRhIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgImdldEkxOG5NZXNzYWdlcyIsICJBZGQiLCAibG9jYWxpemUiLCAiZW4iLCAiemgiLCAiRGVsZXRlIiwgIlNvdXJjZSIsICJMaWNlbnNlIiwgIlRoaXJkUGFydHlDb250ZW50Q29udGFpbmVkIiwgIlFpdXdlbkNvbnRlbnRDb250YWluZWQiLCAiaTE4bk1lc3NhZ2VzIiwgImdldE1lc3NhZ2UiLCAia2V5IiwgIm1vZGlmeUF0dHJpYnV0aW9uIiwgInBhcmVudEZpZWxkU2V0IiwgImdlbmVyYXRlSW5mb01hcnRpeCIsICJmaWVsZFNldExheW91dCIsICJmaWVsZHNJbmZvIiwgImdldFNlbGVjdGVkVmFsdWUiLCAiZHJvcGRvd24iLCAic2VsZWN0ZWRJdGVtIiwgImdldE1lbnUiLCAiZmluZFNlbGVjdGVkSXRlbSIsICJnZXREYXRhIiwgIl9pdGVyYXRvciIsICJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsICJnZXRJdGVtcyIsICJfc3RlcCIsICJzIiwgIm4iLCAiZG9uZSIsICJhdHRyaWJ1dGlvbkZpZWxkc2V0IiwgImZpZWxkSW5mbyIsICJfaXRlcmF0b3IyIiwgIl9zdGVwMiIsICJmaWVsZExheW91dCIsICJmaWVsZCIsICJnZXRGaWVsZCIsICJzdXBwb3J0cyIsICJnZXRWYWx1ZSIsICJlcnIiLCAiZSIsICJmIiwgImpvaW4iLCAiY29uc29sZSIsICJsb2ciLCAiYXR0cmlidXRpb25zIiwgIiR3cEF0dHJpYnV0aW9ucyIsICIkb3JpZ2luV3BBdHRyaWJ1dGlvbnMiLCAiZ2VuZXJhdGVUZXh0SW5wdXRXaXRoRHJvcGRvd24iLCAiZ2V0VGV4dElucHV0IiwgInRleHRJbnB1dCIsICJPTyIsICJ1aSIsICJUZXh0SW5wdXRXaWRnZXQiLCAicGxhY2Vob2xkZXIiLCAiZ2V0RHJvcERvd24iLCAiRHJvcGRvd25XaWRnZXQiLCAiJG92ZXJsYXkiLCAibWVudSIsICJpdGVtcyIsICJtYXAiLCAiTWVudU9wdGlvbldpZGdldCIsICJnZXRBZGRJdGVtQnV0dG9uIiwgIm9uQ2xpY2siLCAiYWRkSXRlbUJ1dHRvbiIsICJCdXR0b25JbnB1dFdpZGdldCIsICJhZGRJdGVtT25DbGljayIsICJmaWVsZFNldCIsICJhZGRJdGVtcyIsICJnZXRGb2xsb3dVcEZpZWxkc2V0IiwgImdldERlbGV0ZUl0ZW1CdXR0b24iLCAiZGVsZXRlSXRlbUJ1dHRvbiIsICJkZWxldGVJdGVtT25DbGljayIsICJpdGVtIiwgInJlbW92ZUl0ZW1zIiwgIkZpZWxkc2V0TGF5b3V0IiwgImluaXRpYWxGaWVsZHNldCIsICJGaWVsZExheW91dCIsICJhbGlnbiIsICJmb2xsb3dVcEZpZWxkc2V0IiwgImdlbmVyYXRlVmlzdWFsRWRpdG9yQ2hlY2tib3hMYXlvdXQiLCAiaW5wdXRJZDIiLCAiQ2hlY2tib3hJbnB1dFdpZGdldCIsICJzZWxlY3RlZCIsICJzZXRJbnB1dElkIiwgInRleHRJbnB1dFdpdGhEcm9wZG93biIsICIkZWxlbWVudCIsICJwcm9wIiwgImNoZWNrYm94TGF5b3V0IiwgIiRsYXlvdXQiLCAiYXBwZW5kIiwgImdlbmVyYXRlV2lraUVkaXRvckNoZWNrYm94TGF5b3V0IiwgInByb2Nlc3NWaXN1YWxFZGl0b3IiLCAibXciLCAiY29uZmlnIiwgImdldCIsICIkdGFyZ2V0IiwgInNldCIsICJwcm9jZXNzV2lraUVkaXRvciIsICJnZXRCb2R5IiwgInRoZW4iLCAiZWRpdEZvcm0iLCAiaG9vayIsICJhZGQiXQp9Cg==

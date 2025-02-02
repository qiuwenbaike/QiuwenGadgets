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
  url: "https://creativecommons.org/licenses/by-sa/3.0/"
}, {
  label: "CC BY-SA 3.0 CN",
  url: "https://creativecommons.org/licenses/by-sa/3.0/cn/"
}, {
  label: "CC0-1.0",
  url: "https://creativecommons.org/publicdomain/zero/1.0/"
}, {
  label: "KOGL Type I: Attribution",
  url: "https://www.kogl.or.kr/info/licenseType1.do"
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
            if (field !== null && field !== void 0 && field.getValue()) {
              fieldInfo[fieldInfo.length] = field.getValue();
            } else if (field !== null && field !== void 0 && field.getMenu()) {
              fieldInfo[fieldInfo.length] = getSelectedValue(field);
            }
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
        fieldsInfo[fieldsInfo.length] = fieldInfo;
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0VkaXRmb3JtX0F0dHJpYnV0aW9uL29wdGlvbnMuanNvbiIsICJzcmMvRWRpdGZvcm1fQXR0cmlidXRpb24vRWRpdGZvcm1fQXR0cmlidXRpb24udHMiLCAic3JjL0VkaXRmb3JtX0F0dHJpYnV0aW9uL21vZHVsZXMvdXRpbC9tb2RpZnlDaGFuZ2VUYWcudHMiLCAic3JjL0VkaXRmb3JtX0F0dHJpYnV0aW9uL21vZHVsZXMvY29uc3RhbnQudHMiLCAic3JjL0VkaXRmb3JtX0F0dHJpYnV0aW9uL21vZHVsZXMvaTE4bi50cyIsICJzcmMvRWRpdGZvcm1fQXR0cmlidXRpb24vbW9kdWxlcy91dGlsL21vZGlmeUF0dHJpYnV0aW9uU3VtbWFyeS50cyIsICJzcmMvRWRpdGZvcm1fQXR0cmlidXRpb24vbW9kdWxlcy91dGlsL2dlbmVyYXRlVGV4dElucHV0V2l0aERyb3Bkb3duLnRzIiwgInNyYy9FZGl0Zm9ybV9BdHRyaWJ1dGlvbi9tb2R1bGVzL3V0aWwvZ2VuZXJhdGVDaGVja2JveExheW91dC50cyIsICJzcmMvRWRpdGZvcm1fQXR0cmlidXRpb24vbW9kdWxlcy9wcm9jZXNzVmlzdWFsRWRpdG9yLnRzIiwgInNyYy9FZGl0Zm9ybV9BdHRyaWJ1dGlvbi9tb2R1bGVzL3Byb2Nlc3NXaWtpRWRpdG9yLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJ7XG5cdFwiY29uZmlnS2V5XCI6IFwiZ2FkZ2V0LUVkaXRmb3JtX0F0dHJpYnV0aW9uX19Jbml0aWFsaXplZFwiLFxuXHRcImNoYW5nZVRhZ1wiOiBcIkF0dHJpYnV0aW9uX2FkZGVkXCIsXG5cdFwiaW5wdXRJZFwiOiBcImVkaXRmb3JtX2F0dHJpYnV0aW9uXCIsXG5cdFwidGFyZ2V0Q2xhc3NWZVwiOiBcInZlLXVpLW13U2F2ZURpYWxvZy1jaGVja2JveGVzXCIsXG5cdFwidGFyZ2V0V2lraUVkaXRvclwiOiBcIi5lZGl0Q2hlY2tib3hlcyAub28tdWktaG9yaXpvbnRhbExheW91dFwiXG59XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuL29wdGlvbnMuanNvbic7XG5pbXBvcnQge2dldEJvZHl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5pbXBvcnQge3Byb2Nlc3NWaXN1YWxFZGl0b3J9IGZyb20gJy4vbW9kdWxlcy9wcm9jZXNzVmlzdWFsRWRpdG9yJztcbmltcG9ydCB7cHJvY2Vzc1dpa2lFZGl0b3J9IGZyb20gJy4vbW9kdWxlcy9wcm9jZXNzV2lraUVkaXRvcic7XG5cbi8qKlxuICogQGRlc2NyaXB0aW9uIOesrOS4ieaWueadpea6kOeJueauiuWjsOaYjlxuICovXG52b2lkIGdldEJvZHkoKS50aGVuKGZ1bmN0aW9uIGVkaXRGb3JtKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQge1xuXHRtdy5ob29rKCd3aWtpcGFnZS5lZGl0Zm9ybScpLmFkZCgoJGVkaXRGb3JtKTogdm9pZCA9PiB7XG5cdFx0cHJvY2Vzc1dpa2lFZGl0b3Ioe1xuXHRcdFx0JGJvZHksXG5cdFx0XHQkZWRpdEZvcm0sXG5cdFx0fSk7XG5cdH0pO1xuXG5cdG13Lmhvb2soJ3ZlLnNhdmVEaWFsb2cuc3RhdGVDaGFuZ2VkJykuYWRkKCgpOiB2b2lkID0+IHtcblx0XHRwcm9jZXNzVmlzdWFsRWRpdG9yKHtcblx0XHRcdCRib2R5LFxuXHRcdH0pO1xuXHR9KTtcblxuXHQvLyBXaGVuIHN3aXRjaGluZyBiZXR3ZWVuIFZFIGFuZCBOV0UsIHJlLWluaXRpYWxpemF0aW9uIGlzIHJlcXVpcmVkXG5cdG13Lmhvb2soJ3ZlLmFjdGl2YXRpb25Db21wbGV0ZScpLmFkZCgoKSA9PiB7XG5cdFx0aWYgKG13LmNvbmZpZy5nZXQoT1BUSU9OUy5jb25maWdLZXkpKSB7XG5cdFx0XHRtdy5jb25maWcuc2V0KE9QVElPTlMuY29uZmlnS2V5LCBmYWxzZSk7XG5cdFx0fVxuXHR9KTtcbn0pO1xuIiwgImNvbnN0IG1vZGlmeVZpc3VhbEVkaXRvckNoYW5nZVRhZyA9ICh7XG5cdGNoYW5nZVRhZyxcblx0Y2hlY2tib3gsXG59OiB7XG5cdGNoYW5nZVRhZzogc3RyaW5nO1xuXHRjaGVja2JveDogT08udWkuQ2hlY2tib3hJbnB1dFdpZGdldDtcbn0pOiB2b2lkID0+IHtcblx0Y2hlY2tib3gub24oJ2NoYW5nZScsICgpOiB2b2lkID0+IHtcblx0XHRjb25zdCBnZW5lcmF0ZUNoYW5nZVRhZ3MgPSAob3JpZ2luQ2hhbmdlVGFnczogc3RyaW5nKTogc3RyaW5nID0+IHtcblx0XHRcdHJldHVybiBjaGVja2JveC5pc1NlbGVjdGVkKClcblx0XHRcdFx0PyBgJHtvcmlnaW5DaGFuZ2VUYWdzfSwke2NoYW5nZVRhZ31gXG5cdFx0XHRcdDogb3JpZ2luQ2hhbmdlVGFncy5yZXBsYWNlKGAsJHtjaGFuZ2VUYWd9YCwgJycpO1xuXHRcdH07XG5cblx0XHRsZXQgY2hhbmdlVGFnczogc3RyaW5nID0gJyc7XG5cdFx0Y2hhbmdlVGFncyA9IGdlbmVyYXRlQ2hhbmdlVGFncyh3aW5kb3cudmUuaW5pdC50YXJnZXQuc2F2ZUZpZWxkcy53cENoYW5nZVRhZ3M/LigpID8/ICcnKTtcblx0XHR3aW5kb3cudmUuaW5pdC50YXJnZXQuc2F2ZUZpZWxkcy53cENoYW5nZVRhZ3MgPSAoKTogc3RyaW5nID0+IHtcblx0XHRcdHJldHVybiBjaGFuZ2VUYWdzO1xuXHRcdH07XG5cdH0pO1xufTtcblxuY29uc3QgbW9kaWZ5V2lraUVkaXRvckNoYW5nZVRhZyA9ICh7XG5cdGNoYW5nZVRhZyxcblx0Y2hlY2tib3gsXG5cdCRlZGl0Rm9ybSxcbn06IHtcblx0Y2hhbmdlVGFnOiBzdHJpbmc7XG5cdGNoZWNrYm94OiBPTy51aS5DaGVja2JveElucHV0V2lkZ2V0O1xuXHQkZWRpdEZvcm06IEpRdWVyeTtcbn0pOiB2b2lkID0+IHtcblx0Y2hlY2tib3gub24oJ2NoYW5nZScsICgpOiB2b2lkID0+IHtcblx0XHRjb25zdCBnZW5lcmF0ZUNoYW5nZVRhZ3MgPSAob3JpZ2luQ2hhbmdlVGFnczogc3RyaW5nKTogc3RyaW5nID0+IHtcblx0XHRcdHJldHVybiBjaGVja2JveC5pc1NlbGVjdGVkKClcblx0XHRcdFx0PyBgJHtvcmlnaW5DaGFuZ2VUYWdzfSwke2NoYW5nZVRhZ31gXG5cdFx0XHRcdDogb3JpZ2luQ2hhbmdlVGFncy5yZXBsYWNlKGAsJHtjaGFuZ2VUYWd9YCwgJycpO1xuXHRcdH07XG5cblx0XHRsZXQgY2hhbmdlVGFnczogc3RyaW5nID0gJyc7XG5cblx0XHRjb25zdCAkd3BDaGFuZ2VUYWdzOiBKUXVlcnkgPSAkKCc8aW5wdXQ+JykuYXR0cih7XG5cdFx0XHRpZDogJ3dwQ2hhbmdlVGFncycsXG5cdFx0XHRuYW1lOiAnd3BDaGFuZ2VUYWdzJyxcblx0XHRcdHR5cGU6ICdoaWRkZW4nLFxuXHRcdFx0dmFsdWU6ICcnLFxuXHRcdH0pO1xuXHRcdGNvbnN0ICRib2R5ID0gJGVkaXRGb3JtLnBhcmVudHMoJ2JvZHknKTtcblx0XHRjb25zdCAkb3JpZ2luV3BDaGFuZ2VUYWdzOiBKUXVlcnkgPSAkYm9keS5maW5kKCdpbnB1dFtuYW1lPXdwQ2hhbmdlVGFnc10nKTtcblx0XHRpZiAoISRvcmlnaW5XcENoYW5nZVRhZ3MubGVuZ3RoKSB7XG5cdFx0XHQkYm9keS5wcmVwZW5kKCR3cENoYW5nZVRhZ3MpO1xuXHRcdH1cblx0XHRjaGFuZ2VUYWdzID0gZ2VuZXJhdGVDaGFuZ2VUYWdzKCRvcmlnaW5XcENoYW5nZVRhZ3MudmFsKCk/LnRvU3RyaW5nKCkgPz8gJycpO1xuXHRcdCRvcmlnaW5XcENoYW5nZVRhZ3MudmFsKGNoYW5nZVRhZ3MpO1xuXHR9KTtcbn07XG5cbmV4cG9ydCB7bW9kaWZ5VmlzdWFsRWRpdG9yQ2hhbmdlVGFnLCBtb2RpZnlXaWtpRWRpdG9yQ2hhbmdlVGFnfTtcbiIsICJjb25zdCBMSUNFTlNFUyA9IFtcblx0e1xuXHRcdGxhYmVsOiAnQ0MgQlktU0EgNC4wJyxcblx0XHRkYXRhOiAnaHR0cHM6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL2xpY2Vuc2VzL2J5LXNhLzQuMC8nLFxuXHR9LFxuXHR7XG5cdFx0bGFiZWw6ICdDQyBCWS1TQSAzLjAnLFxuXHRcdHVybDogJ2h0dHBzOi8vY3JlYXRpdmVjb21tb25zLm9yZy9saWNlbnNlcy9ieS1zYS8zLjAvJyxcblx0fSxcblx0e1xuXHRcdGxhYmVsOiAnQ0MgQlktU0EgMy4wIENOJyxcblx0XHR1cmw6ICdodHRwczovL2NyZWF0aXZlY29tbW9ucy5vcmcvbGljZW5zZXMvYnktc2EvMy4wL2NuLycsXG5cdH0sXG5cdHtcblx0XHRsYWJlbDogJ0NDMC0xLjAnLFxuXHRcdHVybDogJ2h0dHBzOi8vY3JlYXRpdmVjb21tb25zLm9yZy9wdWJsaWNkb21haW4vemVyby8xLjAvJyxcblx0fSxcblx0e1xuXHRcdGxhYmVsOiAnS09HTCBUeXBlIEk6IEF0dHJpYnV0aW9uJyxcblx0XHR1cmw6ICdodHRwczovL3d3dy5rb2dsLm9yLmtyL2luZm8vbGljZW5zZVR5cGUxLmRvJyxcblx0fSxcbl07XG5cbmV4cG9ydCB7TElDRU5TRVN9O1xuIiwgImltcG9ydCB7bG9jYWxpemV9IGZyb20gJ2V4dC5nYWRnZXQuaTE4bic7XG5cbmNvbnN0IGdldEkxOG5NZXNzYWdlcyA9ICgpID0+IHtcblx0cmV0dXJuIHtcblx0XHRBZGQ6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQWRkJyxcblx0XHRcdHpoOiAn5aKe5YqgJyxcblx0XHR9KSxcblx0XHREZWxldGU6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnRGVsZXRlJyxcblx0XHRcdHpoOiAn56e76ZmkJyxcblx0XHR9KSxcblx0XHRTb3VyY2U6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnU291cmNlJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WGheWuueadpea6kCcsXG5cdFx0XHQnemgtaGFudCc6ICflhaflrrnkvobmupAnLFxuXHRcdH0pLFxuXHRcdExpY2Vuc2U6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnTGljZW5zZScsXG5cdFx0XHQnemgtaGFucyc6ICforrjlj6/or4EnLFxuXHRcdFx0J3poLWhhbnQnOiAn6Kix5Y+v6K2JJyxcblx0XHR9KSxcblx0XHQnU291cmNlcyBhbmQgTGljZW5zZXMnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1NvdXJjZXMgYW5kIExpY2Vuc2VzJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WGheWuueadpea6kOWPiuiuuOWPr+ivgScsXG5cdFx0XHQnemgtaGFudCc6ICflhaflrrnkvobmupDlj4roqLHlj6/orYknLFxuXHRcdH0pLFxuXHRcdFRoaXJkUGFydHlDb250ZW50Q29udGFpbmVkOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1RoaXMgZWRpdG9yIGNvbnRhaW5zIHRoaXJkLXBhcnR5IGNvbnRlbnQuJyxcblx0XHRcdCd6aC1oYW5zJzogJ+atpOe8lui+keWQq+acieesrOS4ieaWueWGheWuuScsXG5cdFx0XHQnemgtaGFudCc6ICfmraTnt6jovK/lkKvmnInnrKzkuInmlrnlhaflrrknLFxuXHRcdH0pLFxuXHRcdFFpdXdlbkNvbnRlbnRDb250YWluZWQ6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnVGhpcyBlZGl0b3IgY29udGFpbnMgY29udGVudCBmcm9tIG90aGVyIHBhZ2VzIG9mIFFpdXdlbiBCYWlrZS4nLFxuXHRcdFx0J3poLWhhbnMnOiAn5q2k57yW6L6R5ZCr5pyJ5rGC6Ze755m+56eR5YW25LuW6aG16Z2i55qE5YaF5a65Jyxcblx0XHRcdCd6aC1oYW50JzogJ+atpOe3qOi8r+WQq+acieaxguiBnueZvuenkeWFtuS7lumggemdoueahOWFp+WuuScsXG5cdFx0fSksXG5cdH07XG59O1xuXG5jb25zdCBpMThuTWVzc2FnZXMgPSBnZXRJMThuTWVzc2FnZXMoKTtcblxuY29uc3QgZ2V0TWVzc2FnZTogR2V0TWVzc2FnZXM8dHlwZW9mIGkxOG5NZXNzYWdlcz4gPSAoa2V5KSA9PiB7XG5cdHJldHVybiBpMThuTWVzc2FnZXNba2V5XSB8fCBrZXk7XG59O1xuXG5leHBvcnQge2dldE1lc3NhZ2V9O1xuIiwgImNvbnN0IG1vZGlmeUF0dHJpYnV0aW9uID0gKHtcblx0JGJvZHksXG5cdHBhcmVudEZpZWxkU2V0LFxufToge1xuXHQkYm9keTogSlF1ZXJ5PEhUTUxFbGVtZW50Pjtcblx0cGFyZW50RmllbGRTZXQ6IE9PLnVpLkZpZWxkc2V0TGF5b3V0O1xufSkgPT4ge1xuXHRjb25zdCBnZW5lcmF0ZUluZm9NYXJ0aXggPSAoZmllbGRTZXRMYXlvdXQ6IE9PLnVpLkZpZWxkc2V0TGF5b3V0KSA9PiB7XG5cdFx0Y29uc3QgZmllbGRzSW5mbyA9IFtdO1xuXG5cdFx0Y29uc3QgZ2V0U2VsZWN0ZWRWYWx1ZSA9IChkcm9wZG93bjogT08udWkuRHJvcGRvd25XaWRnZXQpOiBzdHJpbmcgfCB1bmRlZmluZWQgPT4ge1xuXHRcdFx0Y29uc3Qgc2VsZWN0ZWRJdGVtOiBPTy51aS5PcHRpb25XaWRnZXQgfCBudWxsID0gZHJvcGRvd25cblx0XHRcdFx0LmdldE1lbnUoKVxuXHRcdFx0XHQuZmluZFNlbGVjdGVkSXRlbSgpIGFzIE9PLnVpLk9wdGlvbldpZGdldCB8IG51bGw7XG5cdFx0XHRyZXR1cm4gc2VsZWN0ZWRJdGVtID8gKHNlbGVjdGVkSXRlbS5nZXREYXRhKCkgYXMgc3RyaW5nKSA6IHVuZGVmaW5lZDtcblx0XHR9O1xuXG5cdFx0Zm9yIChjb25zdCBhdHRyaWJ1dGlvbkZpZWxkc2V0IG9mIGZpZWxkU2V0TGF5b3V0LmdldEl0ZW1zKCkgYXMgT08udWkuRmllbGRzZXRMYXlvdXRbXSkge1xuXHRcdFx0Y29uc3QgZmllbGRJbmZvID0gW107XG5cblx0XHRcdGZvciAoY29uc3QgZmllbGRMYXlvdXQgb2YgYXR0cmlidXRpb25GaWVsZHNldC5nZXRJdGVtcygpIGFzIE9PLnVpLkZpZWxkTGF5b3V0W10pIHtcblx0XHRcdFx0Y29uc3QgZmllbGQgPSBmaWVsZExheW91dC5nZXRGaWVsZCgpO1xuXHRcdFx0XHRpZiAoKGZpZWxkIGFzIE9PLnVpLlRleHRJbnB1dFdpZGdldCk/LmdldFZhbHVlKCkpIHtcblx0XHRcdFx0XHRmaWVsZEluZm9bZmllbGRJbmZvLmxlbmd0aF0gPSAoZmllbGQgYXMgT08udWkuVGV4dElucHV0V2lkZ2V0KS5nZXRWYWx1ZSgpO1xuXHRcdFx0XHR9IGVsc2UgaWYgKChmaWVsZCBhcyBPTy51aS5Ecm9wZG93bldpZGdldCk/LmdldE1lbnUoKSkge1xuXHRcdFx0XHRcdGZpZWxkSW5mb1tmaWVsZEluZm8ubGVuZ3RoXSA9IGdldFNlbGVjdGVkVmFsdWUoZmllbGQgYXMgT08udWkuRHJvcGRvd25XaWRnZXQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGZpZWxkc0luZm9bZmllbGRzSW5mby5sZW5ndGhdID0gZmllbGRJbmZvO1xuXHRcdH1cblxuXHRcdGNvbnNvbGUubG9nKGZpZWxkc0luZm8pO1xuXG5cdFx0cmV0dXJuIGZpZWxkc0luZm8uam9pbignOyAnKTtcblx0fTtcblxuXHRsZXQgYXR0cmlidXRpb25zOiBzdHJpbmcgPSAnJztcblxuXHRjb25zdCAkd3BBdHRyaWJ1dGlvbnM6IEpRdWVyeSA9ICQoJzxpbnB1dD4nKS5hdHRyKHtcblx0XHRpZDogJ3dwQXR0cmlidXRpb25zJyxcblx0XHRuYW1lOiAnd3BBdHRyaWJ1dGlvbnMnLFxuXHRcdHR5cGU6ICdoaWRkZW4nLFxuXHRcdHZhbHVlOiAnJyxcblx0fSk7XG5cdGNvbnN0ICRvcmlnaW5XcEF0dHJpYnV0aW9uczogSlF1ZXJ5ID0gJGJvZHkuZmluZCgnaW5wdXRbbmFtZT13cEF0dHJpYnV0aW9uc10nKTtcblx0aWYgKCEkb3JpZ2luV3BBdHRyaWJ1dGlvbnMubGVuZ3RoKSB7XG5cdFx0JGJvZHkucHJlcGVuZCgkd3BBdHRyaWJ1dGlvbnMpO1xuXHR9XG5cblx0YXR0cmlidXRpb25zID0gZ2VuZXJhdGVJbmZvTWFydGl4KHBhcmVudEZpZWxkU2V0KTtcblx0JG9yaWdpbldwQXR0cmlidXRpb25zLnZhbChhdHRyaWJ1dGlvbnMpO1xufTtcblxuZXhwb3J0IHttb2RpZnlBdHRyaWJ1dGlvbn07XG4iLCAiaW1wb3J0IHtMSUNFTlNFU30gZnJvbSAnLi4vY29uc3RhbnQnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuLi9pMThuJztcbmltcG9ydCB7bW9kaWZ5QXR0cmlidXRpb259IGZyb20gJy4vbW9kaWZ5QXR0cmlidXRpb25TdW1tYXJ5JztcblxuY29uc3QgZ2VuZXJhdGVUZXh0SW5wdXRXaXRoRHJvcGRvd24gPSAoKSA9PiB7XG5cdGNvbnN0IGdldFRleHRJbnB1dCA9ICgpID0+IHtcblx0XHRjb25zdCB0ZXh0SW5wdXQgPSBuZXcgT08udWkuVGV4dElucHV0V2lkZ2V0KHtcblx0XHRcdHBsYWNlaG9sZGVyOiBnZXRNZXNzYWdlKCdTb3VyY2UnKSxcblx0XHR9KTtcblxuXHRcdHJldHVybiB0ZXh0SW5wdXQ7XG5cdH07XG5cblx0Y29uc3QgZ2V0RHJvcERvd24gPSAoKSA9PiB7XG5cdFx0Y29uc3QgZHJvcGRvd246IE9PLnVpLkRyb3Bkb3duV2lkZ2V0ID0gbmV3IE9PLnVpLkRyb3Bkb3duV2lkZ2V0KHtcblx0XHRcdCRvdmVybGF5OiB0cnVlLFxuXHRcdFx0bWVudToge1xuXHRcdFx0XHRpdGVtczogTElDRU5TRVMubWFwKCh7ZGF0YSwgbGFiZWx9KTogT08udWkuTWVudU9wdGlvbldpZGdldCA9PiB7XG5cdFx0XHRcdFx0cmV0dXJuIG5ldyBPTy51aS5NZW51T3B0aW9uV2lkZ2V0KHtcblx0XHRcdFx0XHRcdGRhdGEsXG5cdFx0XHRcdFx0XHRsYWJlbCxcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fSksXG5cdFx0XHR9LFxuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIGRyb3Bkb3duO1xuXHR9O1xuXG5cdGNvbnN0IGdldEFkZEl0ZW1CdXR0b24gPSAob25DbGljaz86IChldmVudD86IEV2ZW50KSA9PiB2b2lkKTogT08udWkuQnV0dG9uSW5wdXRXaWRnZXQgPT4ge1xuXHRcdGNvbnN0IGFkZEl0ZW1CdXR0b24gPSBuZXcgT08udWkuQnV0dG9uSW5wdXRXaWRnZXQoe1xuXHRcdFx0bGFiZWw6IGdldE1lc3NhZ2UoJ0FkZCcpLFxuXHRcdH0pO1xuXG5cdFx0aWYgKG9uQ2xpY2spIHtcblx0XHRcdGFkZEl0ZW1CdXR0b24ub24oJ2NsaWNrJywgb25DbGljayk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGFkZEl0ZW1CdXR0b247XG5cdH07XG5cblx0Y29uc3QgYWRkSXRlbU9uQ2xpY2sgPSAoZmllbGRTZXQ6IE9PLnVpLkZpZWxkc2V0TGF5b3V0KSA9PiB7XG5cdFx0ZmllbGRTZXQuYWRkSXRlbXMoW2dldEZvbGxvd1VwRmllbGRzZXQoKV0pO1xuXHR9O1xuXG5cdGNvbnN0IGdldERlbGV0ZUl0ZW1CdXR0b24gPSAob25DbGljaz86IChldmVudD86IEV2ZW50KSA9PiB2b2lkKTogT08udWkuQnV0dG9uSW5wdXRXaWRnZXQgPT4ge1xuXHRcdGNvbnN0IGRlbGV0ZUl0ZW1CdXR0b24gPSBuZXcgT08udWkuQnV0dG9uSW5wdXRXaWRnZXQoe1xuXHRcdFx0bGFiZWw6IGdldE1lc3NhZ2UoJ0RlbGV0ZScpLFxuXHRcdH0pO1xuXG5cdFx0aWYgKG9uQ2xpY2spIHtcblx0XHRcdGRlbGV0ZUl0ZW1CdXR0b24ub24oJ2NsaWNrJywgb25DbGljayk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGRlbGV0ZUl0ZW1CdXR0b247XG5cdH07XG5cblx0Y29uc3QgZGVsZXRlSXRlbU9uQ2xpY2sgPSAoZmllbGRTZXQ6IE9PLnVpLkZpZWxkc2V0TGF5b3V0LCBpdGVtOiBPTy51aS5GaWVsZHNldExheW91dCkgPT4ge1xuXHRcdGZpZWxkU2V0LnJlbW92ZUl0ZW1zKFtpdGVtXSk7XG5cdH07XG5cblx0Y29uc3QgcGFyZW50RmllbGRTZXQgPSBuZXcgT08udWkuRmllbGRzZXRMYXlvdXQoe1xuXHRcdGxhYmVsOiBnZXRNZXNzYWdlKCdTb3VyY2VzIGFuZCBMaWNlbnNlcycpLFxuXHR9KTtcblxuXHRjb25zdCBpbml0aWFsRmllbGRzZXQgPSBuZXcgT08udWkuRmllbGRzZXRMYXlvdXQoKTtcblx0aW5pdGlhbEZpZWxkc2V0LmFkZEl0ZW1zKFtcblx0XHRuZXcgT08udWkuRmllbGRMYXlvdXQoZ2V0VGV4dElucHV0KCksIHtsYWJlbDogZ2V0TWVzc2FnZSgnU291cmNlJyksIGFsaWduOiAnaW5saW5lJ30pLFxuXHRcdG5ldyBPTy51aS5GaWVsZExheW91dChnZXREcm9wRG93bigpLCB7bGFiZWw6IGdldE1lc3NhZ2UoJ0xpY2Vuc2UnKSwgYWxpZ246ICdpbmxpbmUnfSksXG5cdFx0bmV3IE9PLnVpLkZpZWxkTGF5b3V0KFxuXHRcdFx0Z2V0QWRkSXRlbUJ1dHRvbigoKSA9PiB7XG5cdFx0XHRcdGFkZEl0ZW1PbkNsaWNrKHBhcmVudEZpZWxkU2V0KTtcblx0XHRcdH0pLFxuXHRcdFx0e2FsaWduOiAnaW5saW5lJ31cblx0XHQpLFxuXHRdKTtcblxuXHRjb25zdCBnZXRGb2xsb3dVcEZpZWxkc2V0ID0gKCkgPT4ge1xuXHRcdGNvbnN0IGZvbGxvd1VwRmllbGRzZXQgPSBuZXcgT08udWkuRmllbGRzZXRMYXlvdXQoKTtcblx0XHRmb2xsb3dVcEZpZWxkc2V0LmFkZEl0ZW1zKFtcblx0XHRcdG5ldyBPTy51aS5GaWVsZExheW91dChnZXRUZXh0SW5wdXQoKSwge2xhYmVsOiBnZXRNZXNzYWdlKCdTb3VyY2UnKSwgYWxpZ246ICdpbmxpbmUnfSksXG5cdFx0XHRuZXcgT08udWkuRmllbGRMYXlvdXQoZ2V0RHJvcERvd24oKSwge2xhYmVsOiBnZXRNZXNzYWdlKCdMaWNlbnNlJyksIGFsaWduOiAnaW5saW5lJ30pLFxuXHRcdFx0bmV3IE9PLnVpLkZpZWxkTGF5b3V0KFxuXHRcdFx0XHRnZXRBZGRJdGVtQnV0dG9uKCgpID0+IHtcblx0XHRcdFx0XHRhZGRJdGVtT25DbGljayhwYXJlbnRGaWVsZFNldCk7XG5cdFx0XHRcdH0pLFxuXHRcdFx0XHR7YWxpZ246ICdpbmxpbmUnfVxuXHRcdFx0KSxcblx0XHRcdG5ldyBPTy51aS5GaWVsZExheW91dChcblx0XHRcdFx0Z2V0RGVsZXRlSXRlbUJ1dHRvbigoKSA9PiB7XG5cdFx0XHRcdFx0ZGVsZXRlSXRlbU9uQ2xpY2socGFyZW50RmllbGRTZXQsIGZvbGxvd1VwRmllbGRzZXQpO1xuXHRcdFx0XHR9KSxcblx0XHRcdFx0e2FsaWduOiAnaW5saW5lJ31cblx0XHRcdCksXG5cdFx0XSk7XG5cblx0XHRyZXR1cm4gZm9sbG93VXBGaWVsZHNldDtcblx0fTtcblxuXHRwYXJlbnRGaWVsZFNldC5hZGRJdGVtcyhbaW5pdGlhbEZpZWxkc2V0XSk7XG5cblx0cGFyZW50RmllbGRTZXQub24oJ2NoYW5nZScsICgpID0+IHtcblx0XHRjb25zdCAkYm9keSA9ICQoJ2JvZHknKTtcblx0XHRtb2RpZnlBdHRyaWJ1dGlvbih7JGJvZHksIHBhcmVudEZpZWxkU2V0fSk7XG5cdH0pO1xuXG5cdHJldHVybiBwYXJlbnRGaWVsZFNldDtcbn07XG5cbmV4cG9ydCB7Z2VuZXJhdGVUZXh0SW5wdXRXaXRoRHJvcGRvd259O1xuIiwgImltcG9ydCB7bW9kaWZ5VmlzdWFsRWRpdG9yQ2hhbmdlVGFnLCBtb2RpZnlXaWtpRWRpdG9yQ2hhbmdlVGFnfSBmcm9tICcuL21vZGlmeUNoYW5nZVRhZyc7XG5pbXBvcnQge2dlbmVyYXRlVGV4dElucHV0V2l0aERyb3Bkb3dufSBmcm9tICcuL2dlbmVyYXRlVGV4dElucHV0V2l0aERyb3Bkb3duJztcblxuY29uc3QgZ2VuZXJhdGVWaXN1YWxFZGl0b3JDaGVja2JveExheW91dCA9ICh7XG5cdGlucHV0SWQsXG5cdGxhYmVsLFxuXHRjaGFuZ2VUYWcsXG59OiB7XG5cdGlucHV0SWQ/OiBzdHJpbmc7XG5cdGxhYmVsOiBzdHJpbmc7XG5cdGNoYW5nZVRhZz86IHN0cmluZztcbn0pID0+IHtcblx0Y29uc3QgY2hlY2tib3g6IE9PLnVpLkNoZWNrYm94SW5wdXRXaWRnZXQgPSBuZXcgT08udWkuQ2hlY2tib3hJbnB1dFdpZGdldCh7XG5cdFx0c2VsZWN0ZWQ6IGZhbHNlLFxuXHR9KTtcblxuXHRpZiAoaW5wdXRJZCkge1xuXHRcdGNoZWNrYm94LnNldElucHV0SWQoaW5wdXRJZCk7XG5cdH1cblxuXHRpZiAoY2hhbmdlVGFnKSB7XG5cdFx0bW9kaWZ5VmlzdWFsRWRpdG9yQ2hhbmdlVGFnKHtjaGFuZ2VUYWcsIGNoZWNrYm94fSk7XG5cdH1cblxuXHRjb25zdCB0ZXh0SW5wdXRXaXRoRHJvcGRvd24gPSBnZW5lcmF0ZVRleHRJbnB1dFdpdGhEcm9wZG93bigpO1xuXG5cdGNoZWNrYm94Lm9uKCdjaGFuZ2UnLCAoc2VsZWN0ZWQpID0+IHtcblx0XHR0ZXh0SW5wdXRXaXRoRHJvcGRvd24uJGVsZW1lbnQucHJvcCgnZGlzYWJsZWQnLCAhc2VsZWN0ZWQpO1xuXHR9KTtcblxuXHRjb25zdCBjaGVja2JveExheW91dDogT08udWkuRmllbGRMYXlvdXQ8T08udWkuQ2hlY2tib3hJbnB1dFdpZGdldD4gPSBuZXcgT08udWkuRmllbGRMYXlvdXQoY2hlY2tib3gsIHtcblx0XHRhbGlnbjogJ2lubGluZScsXG5cdFx0bGFiZWwsXG5cdH0pO1xuXG5cdGNvbnN0ICRsYXlvdXQgPSAkKCc8ZGl2PicpLmF0dHIoJ2lkJywgJ2VmYS1hcmVhJykuYXBwZW5kKGNoZWNrYm94TGF5b3V0LiRlbGVtZW50LCB0ZXh0SW5wdXRXaXRoRHJvcGRvd24uJGVsZW1lbnQpO1xuXG5cdHJldHVybiAkbGF5b3V0O1xufTtcblxuY29uc3QgZ2VuZXJhdGVXaWtpRWRpdG9yQ2hlY2tib3hMYXlvdXQgPSAoe1xuXHRpbnB1dElkLFxuXHRsYWJlbCxcblx0Y2hhbmdlVGFnLFxuXHQkZWRpdEZvcm0sXG59OiB7XG5cdGlucHV0SWQ/OiBzdHJpbmc7XG5cdGxhYmVsOiBzdHJpbmc7XG5cdGNoYW5nZVRhZz86IHN0cmluZztcblx0JGVkaXRGb3JtOiBKUXVlcnk7XG59KSA9PiB7XG5cdGNvbnN0IGNoZWNrYm94OiBPTy51aS5DaGVja2JveElucHV0V2lkZ2V0ID0gbmV3IE9PLnVpLkNoZWNrYm94SW5wdXRXaWRnZXQoe1xuXHRcdHNlbGVjdGVkOiBmYWxzZSxcblx0fSk7XG5cblx0aWYgKGlucHV0SWQpIHtcblx0XHRjaGVja2JveC5zZXRJbnB1dElkKGlucHV0SWQpO1xuXHR9XG5cblx0aWYgKGNoYW5nZVRhZykge1xuXHRcdG1vZGlmeVdpa2lFZGl0b3JDaGFuZ2VUYWcoe2NoYW5nZVRhZywgY2hlY2tib3gsICRlZGl0Rm9ybX0pO1xuXHR9XG5cblx0Y29uc3QgdGV4dElucHV0V2l0aERyb3Bkb3duID0gZ2VuZXJhdGVUZXh0SW5wdXRXaXRoRHJvcGRvd24oKTtcblxuXHRjaGVja2JveC5vbignY2hhbmdlJywgKHNlbGVjdGVkKSA9PiB7XG5cdFx0dGV4dElucHV0V2l0aERyb3Bkb3duLiRlbGVtZW50LnByb3AoJ2Rpc2FibGVkJywgIXNlbGVjdGVkKTtcblx0fSk7XG5cblx0Y29uc3QgY2hlY2tib3hMYXlvdXQ6IE9PLnVpLkZpZWxkTGF5b3V0PE9PLnVpLkNoZWNrYm94SW5wdXRXaWRnZXQ+ID0gbmV3IE9PLnVpLkZpZWxkTGF5b3V0KGNoZWNrYm94LCB7XG5cdFx0YWxpZ246ICdpbmxpbmUnLFxuXHRcdGxhYmVsLFxuXHR9KTtcblxuXHRjb25zdCAkbGF5b3V0ID0gJCgnPGRpdj4nKS5hdHRyKCdpZCcsICdlZmEtYXJlYScpLmFwcGVuZChjaGVja2JveExheW91dC4kZWxlbWVudCwgdGV4dElucHV0V2l0aERyb3Bkb3duLiRlbGVtZW50KTtcblxuXHRyZXR1cm4gJGxheW91dDtcbn07XG5leHBvcnQge2dlbmVyYXRlVmlzdWFsRWRpdG9yQ2hlY2tib3hMYXlvdXQsIGdlbmVyYXRlV2lraUVkaXRvckNoZWNrYm94TGF5b3V0fTtcbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJ34vRWRpdGZvcm1fQXR0cmlidXRpb24vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7Z2VuZXJhdGVWaXN1YWxFZGl0b3JDaGVja2JveExheW91dH0gZnJvbSAnLi91dGlsL2dlbmVyYXRlQ2hlY2tib3hMYXlvdXQnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL2kxOG4nO1xuXG5jb25zdCBwcm9jZXNzVmlzdWFsRWRpdG9yID0gKHskYm9keX06IHskYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD59KTogdm9pZCA9PiB7XG5cdC8vIEd1YXJkIGFnYWluc3QgZG91YmxlIGluY2x1c2lvbnNcblx0aWYgKG13LmNvbmZpZy5nZXQoT1BUSU9OUy5jb25maWdLZXkpKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgJHRhcmdldDogSlF1ZXJ5ID0gJGJvZHkuZmluZChgLiR7T1BUSU9OUy50YXJnZXRDbGFzc1ZlfWApO1xuXHRpZiAoISR0YXJnZXQubGVuZ3RoKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0bXcuY29uZmlnLnNldChPUFRJT05TLmNvbmZpZ0tleSwgdHJ1ZSk7XG5cblx0Y29uc3QgJGxheW91dCA9IGdlbmVyYXRlVmlzdWFsRWRpdG9yQ2hlY2tib3hMYXlvdXQoe1xuXHRcdGlucHV0SWQ6IE9QVElPTlMuaW5wdXRJZCxcblx0XHRsYWJlbDogZ2V0TWVzc2FnZSgnVGhpcmRQYXJ0eUNvbnRlbnRDb250YWluZWQnKSxcblx0XHRjaGFuZ2VUYWc6IE9QVElPTlMuY2hhbmdlVGFnLFxuXHR9KTtcblxuXHRpZiAoISRib2R5LmZpbmQoYCMke09QVElPTlMuaW5wdXRJZH1gKS5sZW5ndGgpIHtcblx0XHQkdGFyZ2V0LmFwcGVuZCgkbGF5b3V0KTtcblx0fVxufTtcblxuZXhwb3J0IHtwcm9jZXNzVmlzdWFsRWRpdG9yfTtcbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJ34vRWRpdGZvcm1fQXR0cmlidXRpb24vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7Z2VuZXJhdGVXaWtpRWRpdG9yQ2hlY2tib3hMYXlvdXR9IGZyb20gJy4vdXRpbC9nZW5lcmF0ZUNoZWNrYm94TGF5b3V0JztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9pMThuJztcblxuY29uc3QgcHJvY2Vzc1dpa2lFZGl0b3IgPSAoeyRib2R5LCAkZWRpdEZvcm19OiB7JGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+OyAkZWRpdEZvcm0/OiBKUXVlcnl9KTogdm9pZCA9PiB7XG5cdC8vIEd1YXJkIGFnYWluc3QgZG91YmxlIGluY2x1c2lvbnNcblx0aWYgKG13LmNvbmZpZy5nZXQoT1BUSU9OUy5jb25maWdLZXkpKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgJHRhcmdldDogSlF1ZXJ5ID0gKCRlZGl0Rm9ybSBhcyBKUXVlcnkpLmZpbmQoT1BUSU9OUy50YXJnZXRXaWtpRWRpdG9yKTtcblx0aWYgKCEkdGFyZ2V0Lmxlbmd0aCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdG13LmNvbmZpZy5zZXQoT1BUSU9OUy5jb25maWdLZXksIHRydWUpO1xuXG5cdGNvbnN0ICRsYXlvdXQgPSBnZW5lcmF0ZVdpa2lFZGl0b3JDaGVja2JveExheW91dCh7XG5cdFx0aW5wdXRJZDogT1BUSU9OUy5pbnB1dElkLFxuXHRcdGxhYmVsOiBnZXRNZXNzYWdlKCdUaGlyZFBhcnR5Q29udGVudENvbnRhaW5lZCcpLFxuXHRcdCRlZGl0Rm9ybTogJGVkaXRGb3JtIGFzIEpRdWVyeSxcblx0XHRjaGFuZ2VUYWc6IE9QVElPTlMuY2hhbmdlVGFnLFxuXHR9KTtcblxuXHRpZiAoISRib2R5LmZpbmQoYCMke09QVElPTlMuaW5wdXRJZH1gKS5sZW5ndGgpIHtcblx0XHQkdGFyZ2V0LmFwcGVuZCgkbGF5b3V0KTtcblx0fVxufTtcblxuZXhwb3J0IHtwcm9jZXNzV2lraUVkaXRvcn07XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQyxJQUFBQSxZQUFhO0FBQ2IsSUFBQUMsWUFBYTtBQUNiLElBQUFDLFVBQVc7QUFDWCxJQUFBQyxnQkFBaUI7QUFDakIsSUFBQUMsbUJBQW9COztBQ0pyQixJQUFBQyxxQkFBc0JDLFFBQUEsaUJBQUE7O0FDRHRCLElBQU1DLDhCQUE4QkEsQ0FBQztFQUNwQ04sV0FBQU87RUFDQUM7QUFDRCxNQUdZO0FBQ1hBLFdBQVNDLEdBQUcsVUFBVSxNQUFZO0FBQUEsUUFBQUMsdUJBQUFDLHdCQUFBQztBQUNqQyxVQUFNQyxxQkFB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QkFBa0I7TUFDakIvRztNQUNBVjtJQUNELENBQUM7RUFDRixDQUFDO0FBRURvSCxLQUFHUyxLQUFLLDRCQUE0QixFQUFFQyxJQUFJLE1BQVk7QUFDckRYLHdCQUFvQjtNQUNuQnpHO0lBQ0QsQ0FBQztFQUNGLENBQUM7QUFHRDBHLEtBQUdTLEtBQUssdUJBQXVCLEVBQUVDLElBQUksTUFBTTtBQUMxQyxRQUFJVixHQUFHQyxPQUFPQyxJQUFZbEosU0FBUyxHQUFHO0FBQ3JDZ0osU0FBR0MsT0FBT0csSUFBWXBKLFdBQVcsS0FBSztJQUN2QztFQUNELENBQUM7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogWyJjb25maWdLZXkiLCAiY2hhbmdlVGFnIiwgImlucHV0SWQiLCAidGFyZ2V0Q2xhc3NWZSIsICJ0YXJnZXRXaWtpRWRpdG9yIiwgImltcG9ydF9leHRfZ2FkZ2V0MiIsICJyZXF1aXJlIiwgIm1vZGlmeVZpc3VhbEVkaXRvckNoYW5nZVRhZyIsICJjaGFuZ2VUYWcyIiwgImNoZWNrYm94IiwgIm9uIiwgIl93aW5kb3ckdmUkaW5pdCR0YXJnZSIsICJfd2luZG93JHZlJGluaXQkdGFyZ2UyIiwgIl93aW5kb3ckdmUkaW5pdCR0YXJnZTMiLCAiZ2VuZXJhdGVDaGFuZ2VUYWdzIiwgIm9yaWdpbkNoYW5nZVRhZ3MiLCAiaXNTZWxlY3RlZCIsICJjb25jYXQiLCAicmVwbGFjZSIsICJjaGFuZ2VUYWdzIiwgIndpbmRvdyIsICJ2ZSIsICJpbml0IiwgInRhcmdldCIsICJzYXZlRmllbGRzIiwgIndwQ2hhbmdlVGFncyIsICJjYWxsIiwgIm1vZGlmeVdpa2lFZGl0b3JDaGFuZ2VUYWciLCAiJGVkaXRGb3JtIiwgIl8kb3JpZ2luV3BDaGFuZ2VUYWdzJCIsICJfJG9yaWdpbldwQ2hhbmdlVGFncyQyIiwgIiR3cENoYW5nZVRhZ3MiLCAiJCIsICJhdHRyIiwgImlkIiwgIm5hbWUiLCAidHlwZSIsICJ2YWx1ZSIsICIkYm9keSIsICJwYXJlbnRzIiwgIiRvcmlnaW5XcENoYW5nZVRhZ3MiLCAiZmluZCIsICJsZW5ndGgiLCAicHJlcGVuZCIsICJ2YWwiLCAidG9TdHJpbmciLCAiTElDRU5TRVMiLCAibGFiZWwiLCAiZGF0YSIsICJ1cmwiLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAiZ2V0STE4bk1lc3NhZ2VzIiwgIkFkZCIsICJsb2NhbGl6ZSIsICJlbiIsICJ6aCIsICJEZWxldGUiLCAiU291cmNlIiwgIkxpY2Vuc2UiLCAiVGhpcmRQYXJ0eUNvbnRlbnRDb250YWluZWQiLCAiUWl1d2VuQ29udGVudENvbnRhaW5lZCIsICJpMThuTWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAibW9kaWZ5QXR0cmlidXRpb24iLCAicGFyZW50RmllbGRTZXQiLCAiZ2VuZXJhdGVJbmZvTWFydGl4IiwgImZpZWxkU2V0TGF5b3V0IiwgImZpZWxkc0luZm8iLCAiZ2V0U2VsZWN0ZWRWYWx1ZSIsICJkcm9wZG93biIsICJzZWxlY3RlZEl0ZW0iLCAiZ2V0TWVudSIsICJmaW5kU2VsZWN0ZWRJdGVtIiwgImdldERhdGEiLCAiX2l0ZXJhdG9yIiwgIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwgImdldEl0ZW1zIiwgIl9zdGVwIiwgInMiLCAibiIsICJkb25lIiwgImF0dHJpYnV0aW9uRmllbGRzZXQiLCAiZmllbGRJbmZvIiwgIl9pdGVyYXRvcjIiLCAiX3N0ZXAyIiwgImZpZWxkTGF5b3V0IiwgImZpZWxkIiwgImdldEZpZWxkIiwgImdldFZhbHVlIiwgImVyciIsICJlIiwgImYiLCAiY29uc29sZSIsICJsb2ciLCAiam9pbiIsICJhdHRyaWJ1dGlvbnMiLCAiJHdwQXR0cmlidXRpb25zIiwgIiRvcmlnaW5XcEF0dHJpYnV0aW9ucyIsICJnZW5lcmF0ZVRleHRJbnB1dFdpdGhEcm9wZG93biIsICJnZXRUZXh0SW5wdXQiLCAidGV4dElucHV0IiwgIk9PIiwgInVpIiwgIlRleHRJbnB1dFdpZGdldCIsICJwbGFjZWhvbGRlciIsICJnZXREcm9wRG93biIsICJEcm9wZG93bldpZGdldCIsICIkb3ZlcmxheSIsICJtZW51IiwgIml0ZW1zIiwgIm1hcCIsICJNZW51T3B0aW9uV2lkZ2V0IiwgImdldEFkZEl0ZW1CdXR0b24iLCAib25DbGljayIsICJhZGRJdGVtQnV0dG9uIiwgIkJ1dHRvbklucHV0V2lkZ2V0IiwgImFkZEl0ZW1PbkNsaWNrIiwgImZpZWxkU2V0IiwgImFkZEl0ZW1zIiwgImdldEZvbGxvd1VwRmllbGRzZXQiLCAiZ2V0RGVsZXRlSXRlbUJ1dHRvbiIsICJkZWxldGVJdGVtQnV0dG9uIiwgImRlbGV0ZUl0ZW1PbkNsaWNrIiwgIml0ZW0iLCAicmVtb3ZlSXRlbXMiLCAiRmllbGRzZXRMYXlvdXQiLCAiaW5pdGlhbEZpZWxkc2V0IiwgIkZpZWxkTGF5b3V0IiwgImFsaWduIiwgImZvbGxvd1VwRmllbGRzZXQiLCAiZ2VuZXJhdGVWaXN1YWxFZGl0b3JDaGVja2JveExheW91dCIsICJpbnB1dElkMiIsICJDaGVja2JveElucHV0V2lkZ2V0IiwgInNlbGVjdGVkIiwgInNldElucHV0SWQiLCAidGV4dElucHV0V2l0aERyb3Bkb3duIiwgIiRlbGVtZW50IiwgInByb3AiLCAiY2hlY2tib3hMYXlvdXQiLCAiJGxheW91dCIsICJhcHBlbmQiLCAiZ2VuZXJhdGVXaWtpRWRpdG9yQ2hlY2tib3hMYXlvdXQiLCAicHJvY2Vzc1Zpc3VhbEVkaXRvciIsICJtdyIsICJjb25maWciLCAiZ2V0IiwgIiR0YXJnZXQiLCAic2V0IiwgInByb2Nlc3NXaWtpRWRpdG9yIiwgImdldEJvZHkiLCAidGhlbiIsICJlZGl0Rm9ybSIsICJob29rIiwgImFkZCJdCn0K

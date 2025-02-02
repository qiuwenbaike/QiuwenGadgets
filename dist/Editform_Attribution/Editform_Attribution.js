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
    var _iterator = _createForOfIteratorHelper(fieldSetLayout.getItems()), _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done; ) {
        const attributionFieldset = _step.value;
        const fieldInfo = [];
        var _iterator2 = _createForOfIteratorHelper(attributionFieldset.getItems()), _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
            const field = _step2.value;
            fieldInfo[fieldInfo.length] = field.getData();
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0VkaXRmb3JtX0F0dHJpYnV0aW9uL29wdGlvbnMuanNvbiIsICJzcmMvRWRpdGZvcm1fQXR0cmlidXRpb24vRWRpdGZvcm1fQXR0cmlidXRpb24udHMiLCAic3JjL0VkaXRmb3JtX0F0dHJpYnV0aW9uL21vZHVsZXMvdXRpbC9tb2RpZnlDaGFuZ2VUYWcudHMiLCAic3JjL0VkaXRmb3JtX0F0dHJpYnV0aW9uL21vZHVsZXMvY29uc3RhbnQudHMiLCAic3JjL0VkaXRmb3JtX0F0dHJpYnV0aW9uL21vZHVsZXMvaTE4bi50cyIsICJzcmMvRWRpdGZvcm1fQXR0cmlidXRpb24vbW9kdWxlcy91dGlsL21vZGlmeUF0dHJpYnV0aW9uU3VtbWFyeS50cyIsICJzcmMvRWRpdGZvcm1fQXR0cmlidXRpb24vbW9kdWxlcy91dGlsL2dlbmVyYXRlVGV4dElucHV0V2l0aERyb3Bkb3duLnRzIiwgInNyYy9FZGl0Zm9ybV9BdHRyaWJ1dGlvbi9tb2R1bGVzL3V0aWwvZ2VuZXJhdGVDaGVja2JveExheW91dC50cyIsICJzcmMvRWRpdGZvcm1fQXR0cmlidXRpb24vbW9kdWxlcy9wcm9jZXNzVmlzdWFsRWRpdG9yLnRzIiwgInNyYy9FZGl0Zm9ybV9BdHRyaWJ1dGlvbi9tb2R1bGVzL3Byb2Nlc3NXaWtpRWRpdG9yLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJ7XG5cdFwiY29uZmlnS2V5XCI6IFwiZ2FkZ2V0LUVkaXRmb3JtX0F0dHJpYnV0aW9uX19Jbml0aWFsaXplZFwiLFxuXHRcImNoYW5nZVRhZ1wiOiBcIkF0dHJpYnV0aW9uX2FkZGVkXCIsXG5cdFwiaW5wdXRJZFwiOiBcImVkaXRmb3JtX2F0dHJpYnV0aW9uXCIsXG5cdFwidGFyZ2V0Q2xhc3NWZVwiOiBcInZlLXVpLW13U2F2ZURpYWxvZy1jaGVja2JveGVzXCIsXG5cdFwidGFyZ2V0V2lraUVkaXRvclwiOiBcIi5lZGl0Q2hlY2tib3hlcyAub28tdWktaG9yaXpvbnRhbExheW91dFwiXG59XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuL29wdGlvbnMuanNvbic7XG5pbXBvcnQge2dldEJvZHl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5pbXBvcnQge3Byb2Nlc3NWaXN1YWxFZGl0b3J9IGZyb20gJy4vbW9kdWxlcy9wcm9jZXNzVmlzdWFsRWRpdG9yJztcbmltcG9ydCB7cHJvY2Vzc1dpa2lFZGl0b3J9IGZyb20gJy4vbW9kdWxlcy9wcm9jZXNzV2lraUVkaXRvcic7XG5cbi8qKlxuICogQGRlc2NyaXB0aW9uIOesrOS4ieaWueadpea6kOeJueauiuWjsOaYjlxuICovXG52b2lkIGdldEJvZHkoKS50aGVuKGZ1bmN0aW9uIGVkaXRGb3JtKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQge1xuXHRtdy5ob29rKCd3aWtpcGFnZS5lZGl0Zm9ybScpLmFkZCgoJGVkaXRGb3JtKTogdm9pZCA9PiB7XG5cdFx0cHJvY2Vzc1dpa2lFZGl0b3Ioe1xuXHRcdFx0JGJvZHksXG5cdFx0XHQkZWRpdEZvcm0sXG5cdFx0fSk7XG5cdH0pO1xuXG5cdG13Lmhvb2soJ3ZlLnNhdmVEaWFsb2cuc3RhdGVDaGFuZ2VkJykuYWRkKCgpOiB2b2lkID0+IHtcblx0XHRwcm9jZXNzVmlzdWFsRWRpdG9yKHtcblx0XHRcdCRib2R5LFxuXHRcdH0pO1xuXHR9KTtcblxuXHQvLyBXaGVuIHN3aXRjaGluZyBiZXR3ZWVuIFZFIGFuZCBOV0UsIHJlLWluaXRpYWxpemF0aW9uIGlzIHJlcXVpcmVkXG5cdG13Lmhvb2soJ3ZlLmFjdGl2YXRpb25Db21wbGV0ZScpLmFkZCgoKSA9PiB7XG5cdFx0aWYgKG13LmNvbmZpZy5nZXQoT1BUSU9OUy5jb25maWdLZXkpKSB7XG5cdFx0XHRtdy5jb25maWcuc2V0KE9QVElPTlMuY29uZmlnS2V5LCBmYWxzZSk7XG5cdFx0fVxuXHR9KTtcbn0pO1xuIiwgImNvbnN0IG1vZGlmeVZpc3VhbEVkaXRvckNoYW5nZVRhZyA9ICh7XG5cdGNoYW5nZVRhZyxcblx0Y2hlY2tib3gsXG59OiB7XG5cdGNoYW5nZVRhZzogc3RyaW5nO1xuXHRjaGVja2JveDogT08udWkuQ2hlY2tib3hJbnB1dFdpZGdldDtcbn0pOiB2b2lkID0+IHtcblx0Y2hlY2tib3gub24oJ2NoYW5nZScsICgpOiB2b2lkID0+IHtcblx0XHRjb25zdCBnZW5lcmF0ZUNoYW5nZVRhZ3MgPSAob3JpZ2luQ2hhbmdlVGFnczogc3RyaW5nKTogc3RyaW5nID0+IHtcblx0XHRcdHJldHVybiBjaGVja2JveC5pc1NlbGVjdGVkKClcblx0XHRcdFx0PyBgJHtvcmlnaW5DaGFuZ2VUYWdzfSwke2NoYW5nZVRhZ31gXG5cdFx0XHRcdDogb3JpZ2luQ2hhbmdlVGFncy5yZXBsYWNlKGAsJHtjaGFuZ2VUYWd9YCwgJycpO1xuXHRcdH07XG5cblx0XHRsZXQgY2hhbmdlVGFnczogc3RyaW5nID0gJyc7XG5cdFx0Y2hhbmdlVGFncyA9IGdlbmVyYXRlQ2hhbmdlVGFncyh3aW5kb3cudmUuaW5pdC50YXJnZXQuc2F2ZUZpZWxkcy53cENoYW5nZVRhZ3M/LigpID8/ICcnKTtcblx0XHR3aW5kb3cudmUuaW5pdC50YXJnZXQuc2F2ZUZpZWxkcy53cENoYW5nZVRhZ3MgPSAoKTogc3RyaW5nID0+IHtcblx0XHRcdHJldHVybiBjaGFuZ2VUYWdzO1xuXHRcdH07XG5cdH0pO1xufTtcblxuY29uc3QgbW9kaWZ5V2lraUVkaXRvckNoYW5nZVRhZyA9ICh7XG5cdGNoYW5nZVRhZyxcblx0Y2hlY2tib3gsXG5cdCRlZGl0Rm9ybSxcbn06IHtcblx0Y2hhbmdlVGFnOiBzdHJpbmc7XG5cdGNoZWNrYm94OiBPTy51aS5DaGVja2JveElucHV0V2lkZ2V0O1xuXHQkZWRpdEZvcm06IEpRdWVyeTtcbn0pOiB2b2lkID0+IHtcblx0Y2hlY2tib3gub24oJ2NoYW5nZScsICgpOiB2b2lkID0+IHtcblx0XHRjb25zdCBnZW5lcmF0ZUNoYW5nZVRhZ3MgPSAob3JpZ2luQ2hhbmdlVGFnczogc3RyaW5nKTogc3RyaW5nID0+IHtcblx0XHRcdHJldHVybiBjaGVja2JveC5pc1NlbGVjdGVkKClcblx0XHRcdFx0PyBgJHtvcmlnaW5DaGFuZ2VUYWdzfSwke2NoYW5nZVRhZ31gXG5cdFx0XHRcdDogb3JpZ2luQ2hhbmdlVGFncy5yZXBsYWNlKGAsJHtjaGFuZ2VUYWd9YCwgJycpO1xuXHRcdH07XG5cblx0XHRsZXQgY2hhbmdlVGFnczogc3RyaW5nID0gJyc7XG5cblx0XHRjb25zdCAkd3BDaGFuZ2VUYWdzOiBKUXVlcnkgPSAkKCc8aW5wdXQ+JykuYXR0cih7XG5cdFx0XHRpZDogJ3dwQ2hhbmdlVGFncycsXG5cdFx0XHRuYW1lOiAnd3BDaGFuZ2VUYWdzJyxcblx0XHRcdHR5cGU6ICdoaWRkZW4nLFxuXHRcdFx0dmFsdWU6ICcnLFxuXHRcdH0pO1xuXHRcdGNvbnN0ICRib2R5ID0gJGVkaXRGb3JtLnBhcmVudHMoJ2JvZHknKTtcblx0XHRjb25zdCAkb3JpZ2luV3BDaGFuZ2VUYWdzOiBKUXVlcnkgPSAkYm9keS5maW5kKCdpbnB1dFtuYW1lPXdwQ2hhbmdlVGFnc10nKTtcblx0XHRpZiAoISRvcmlnaW5XcENoYW5nZVRhZ3MubGVuZ3RoKSB7XG5cdFx0XHQkYm9keS5wcmVwZW5kKCR3cENoYW5nZVRhZ3MpO1xuXHRcdH1cblx0XHRjaGFuZ2VUYWdzID0gZ2VuZXJhdGVDaGFuZ2VUYWdzKCRvcmlnaW5XcENoYW5nZVRhZ3MudmFsKCk/LnRvU3RyaW5nKCkgPz8gJycpO1xuXHRcdCRvcmlnaW5XcENoYW5nZVRhZ3MudmFsKGNoYW5nZVRhZ3MpO1xuXHR9KTtcbn07XG5cbmV4cG9ydCB7bW9kaWZ5VmlzdWFsRWRpdG9yQ2hhbmdlVGFnLCBtb2RpZnlXaWtpRWRpdG9yQ2hhbmdlVGFnfTtcbiIsICJjb25zdCBMSUNFTlNFUyA9IFtcblx0e1xuXHRcdGxhYmVsOiAnQ0MgQlktU0EgNC4wJyxcblx0XHRkYXRhOiAnaHR0cHM6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL2xpY2Vuc2VzL2J5LXNhLzQuMC8nLFxuXHR9LFxuXHR7XG5cdFx0bGFiZWw6ICdDQyBCWS1TQSAzLjAnLFxuXHRcdHVybDogJ2h0dHBzOi8vY3JlYXRpdmVjb21tb25zLm9yZy9saWNlbnNlcy9ieS1zYS8zLjAvJyxcblx0fSxcblx0e1xuXHRcdGxhYmVsOiAnQ0MgQlktU0EgMy4wIENOJyxcblx0XHR1cmw6ICdodHRwczovL2NyZWF0aXZlY29tbW9ucy5vcmcvbGljZW5zZXMvYnktc2EvMy4wL2NuLycsXG5cdH0sXG5cdHtcblx0XHRsYWJlbDogJ0NDMC0xLjAnLFxuXHRcdHVybDogJ2h0dHBzOi8vY3JlYXRpdmVjb21tb25zLm9yZy9wdWJsaWNkb21haW4vemVyby8xLjAvJyxcblx0fSxcblx0e1xuXHRcdGxhYmVsOiAnS09HTCBUeXBlIEk6IEF0dHJpYnV0aW9uJyxcblx0XHR1cmw6ICdodHRwczovL3d3dy5rb2dsLm9yLmtyL2luZm8vbGljZW5zZVR5cGUxLmRvJyxcblx0fSxcbl07XG5cbmV4cG9ydCB7TElDRU5TRVN9O1xuIiwgImltcG9ydCB7bG9jYWxpemV9IGZyb20gJ2V4dC5nYWRnZXQuaTE4bic7XG5cbmNvbnN0IGdldEkxOG5NZXNzYWdlcyA9ICgpID0+IHtcblx0cmV0dXJuIHtcblx0XHRBZGQ6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQWRkJyxcblx0XHRcdHpoOiAn5aKe5YqgJyxcblx0XHR9KSxcblx0XHREZWxldGU6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnRGVsZXRlJyxcblx0XHRcdHpoOiAn56e76ZmkJyxcblx0XHR9KSxcblx0XHRTb3VyY2U6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnU291cmNlJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WGheWuueadpea6kCcsXG5cdFx0XHQnemgtaGFudCc6ICflhaflrrnkvobmupAnLFxuXHRcdH0pLFxuXHRcdExpY2Vuc2U6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnTGljZW5zZScsXG5cdFx0XHQnemgtaGFucyc6ICforrjlj6/or4EnLFxuXHRcdFx0J3poLWhhbnQnOiAn6Kix5Y+v6K2JJyxcblx0XHR9KSxcblx0XHQnU291cmNlcyBhbmQgTGljZW5zZXMnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1NvdXJjZXMgYW5kIExpY2Vuc2VzJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WGheWuueadpea6kOWPiuiuuOWPr+ivgScsXG5cdFx0XHQnemgtaGFudCc6ICflhaflrrnkvobmupDlj4roqLHlj6/orYknLFxuXHRcdH0pLFxuXHRcdFRoaXJkUGFydHlDb250ZW50Q29udGFpbmVkOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1RoaXMgZWRpdG9yIGNvbnRhaW5zIHRoaXJkLXBhcnR5IGNvbnRlbnQuJyxcblx0XHRcdCd6aC1oYW5zJzogJ+atpOe8lui+keWQq+acieesrOS4ieaWueWGheWuuScsXG5cdFx0XHQnemgtaGFudCc6ICfmraTnt6jovK/lkKvmnInnrKzkuInmlrnlhaflrrknLFxuXHRcdH0pLFxuXHRcdFFpdXdlbkNvbnRlbnRDb250YWluZWQ6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnVGhpcyBlZGl0b3IgY29udGFpbnMgY29udGVudCBmcm9tIG90aGVyIHBhZ2VzIG9mIFFpdXdlbiBCYWlrZS4nLFxuXHRcdFx0J3poLWhhbnMnOiAn5q2k57yW6L6R5ZCr5pyJ5rGC6Ze755m+56eR5YW25LuW6aG16Z2i55qE5YaF5a65Jyxcblx0XHRcdCd6aC1oYW50JzogJ+atpOe3qOi8r+WQq+acieaxguiBnueZvuenkeWFtuS7lumggemdoueahOWFp+WuuScsXG5cdFx0fSksXG5cdH07XG59O1xuXG5jb25zdCBpMThuTWVzc2FnZXMgPSBnZXRJMThuTWVzc2FnZXMoKTtcblxuY29uc3QgZ2V0TWVzc2FnZTogR2V0TWVzc2FnZXM8dHlwZW9mIGkxOG5NZXNzYWdlcz4gPSAoa2V5KSA9PiB7XG5cdHJldHVybiBpMThuTWVzc2FnZXNba2V5XSB8fCBrZXk7XG59O1xuXG5leHBvcnQge2dldE1lc3NhZ2V9O1xuIiwgImNvbnN0IG1vZGlmeUF0dHJpYnV0aW9uID0gKHtcblx0JGJvZHksXG5cdHBhcmVudEZpZWxkU2V0LFxufToge1xuXHQkYm9keTogSlF1ZXJ5PEhUTUxFbGVtZW50Pjtcblx0cGFyZW50RmllbGRTZXQ6IE9PLnVpLkZpZWxkc2V0TGF5b3V0O1xufSkgPT4ge1xuXHRjb25zdCBnZW5lcmF0ZUluZm9NYXJ0aXggPSAoZmllbGRTZXRMYXlvdXQ6IE9PLnVpLkZpZWxkc2V0TGF5b3V0KSA9PiB7XG5cdFx0Y29uc3QgZmllbGRzSW5mbyA9IFtdO1xuXG5cdFx0Zm9yIChjb25zdCBhdHRyaWJ1dGlvbkZpZWxkc2V0IG9mIGZpZWxkU2V0TGF5b3V0LmdldEl0ZW1zKCkgYXMgT08udWkuRmllbGRzZXRMYXlvdXRbXSkge1xuXHRcdFx0Y29uc3QgZmllbGRJbmZvID0gW107XG5cblx0XHRcdGZvciAoY29uc3QgZmllbGQgb2YgYXR0cmlidXRpb25GaWVsZHNldC5nZXRJdGVtcygpIGFzIE9PLnVpLkZpZWxkc2V0TGF5b3V0W10pIHtcblx0XHRcdFx0ZmllbGRJbmZvW2ZpZWxkSW5mby5sZW5ndGhdID0gZmllbGQuZ2V0RGF0YSgpO1xuXHRcdFx0fVxuXG5cdFx0XHRmaWVsZHNJbmZvW2ZpZWxkc0luZm8ubGVuZ3RoXSA9IGZpZWxkSW5mbztcblx0XHR9XG5cblx0XHRjb25zb2xlLmxvZyhmaWVsZHNJbmZvKTtcblxuXHRcdHJldHVybiBmaWVsZHNJbmZvLmpvaW4oJzsgJyk7XG5cdH07XG5cblx0bGV0IGF0dHJpYnV0aW9uczogc3RyaW5nID0gJyc7XG5cblx0Y29uc3QgJHdwQXR0cmlidXRpb25zOiBKUXVlcnkgPSAkKCc8aW5wdXQ+JykuYXR0cih7XG5cdFx0aWQ6ICd3cEF0dHJpYnV0aW9ucycsXG5cdFx0bmFtZTogJ3dwQXR0cmlidXRpb25zJyxcblx0XHR0eXBlOiAnaGlkZGVuJyxcblx0XHR2YWx1ZTogJycsXG5cdH0pO1xuXHRjb25zdCAkb3JpZ2luV3BBdHRyaWJ1dGlvbnM6IEpRdWVyeSA9ICRib2R5LmZpbmQoJ2lucHV0W25hbWU9d3BBdHRyaWJ1dGlvbnNdJyk7XG5cdGlmICghJG9yaWdpbldwQXR0cmlidXRpb25zLmxlbmd0aCkge1xuXHRcdCRib2R5LnByZXBlbmQoJHdwQXR0cmlidXRpb25zKTtcblx0fVxuXG5cdGF0dHJpYnV0aW9ucyA9IGdlbmVyYXRlSW5mb01hcnRpeChwYXJlbnRGaWVsZFNldCk7XG5cdCRvcmlnaW5XcEF0dHJpYnV0aW9ucy52YWwoYXR0cmlidXRpb25zKTtcbn07XG5cbmV4cG9ydCB7bW9kaWZ5QXR0cmlidXRpb259O1xuIiwgImltcG9ydCB7TElDRU5TRVN9IGZyb20gJy4uL2NvbnN0YW50JztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi4vaTE4bic7XG5pbXBvcnQge21vZGlmeUF0dHJpYnV0aW9ufSBmcm9tICcuL21vZGlmeUF0dHJpYnV0aW9uU3VtbWFyeSc7XG5cbmNvbnN0IGdlbmVyYXRlVGV4dElucHV0V2l0aERyb3Bkb3duID0gKCkgPT4ge1xuXHRjb25zdCBnZXRUZXh0SW5wdXQgPSAoKSA9PiB7XG5cdFx0Y29uc3QgdGV4dElucHV0ID0gbmV3IE9PLnVpLlRleHRJbnB1dFdpZGdldCh7XG5cdFx0XHRwbGFjZWhvbGRlcjogZ2V0TWVzc2FnZSgnU291cmNlJyksXG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gdGV4dElucHV0O1xuXHR9O1xuXG5cdGNvbnN0IGdldERyb3BEb3duID0gKCkgPT4ge1xuXHRcdGNvbnN0IGRyb3Bkb3duOiBPTy51aS5Ecm9wZG93bldpZGdldCA9IG5ldyBPTy51aS5Ecm9wZG93bldpZGdldCh7XG5cdFx0XHQkb3ZlcmxheTogdHJ1ZSxcblx0XHRcdG1lbnU6IHtcblx0XHRcdFx0aXRlbXM6IExJQ0VOU0VTLm1hcCgoe2RhdGEsIGxhYmVsfSk6IE9PLnVpLk1lbnVPcHRpb25XaWRnZXQgPT4ge1xuXHRcdFx0XHRcdHJldHVybiBuZXcgT08udWkuTWVudU9wdGlvbldpZGdldCh7XG5cdFx0XHRcdFx0XHRkYXRhLFxuXHRcdFx0XHRcdFx0bGFiZWwsXG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0pLFxuXHRcdFx0fSxcblx0XHR9KTtcblxuXHRcdHJldHVybiBkcm9wZG93bjtcblx0fTtcblxuXHRjb25zdCBnZXRBZGRJdGVtQnV0dG9uID0gKG9uQ2xpY2s/OiAoZXZlbnQ/OiBFdmVudCkgPT4gdm9pZCk6IE9PLnVpLkJ1dHRvbklucHV0V2lkZ2V0ID0+IHtcblx0XHRjb25zdCBhZGRJdGVtQnV0dG9uID0gbmV3IE9PLnVpLkJ1dHRvbklucHV0V2lkZ2V0KHtcblx0XHRcdGxhYmVsOiBnZXRNZXNzYWdlKCdBZGQnKSxcblx0XHR9KTtcblxuXHRcdGlmIChvbkNsaWNrKSB7XG5cdFx0XHRhZGRJdGVtQnV0dG9uLm9uKCdjbGljaycsIG9uQ2xpY2spO1xuXHRcdH1cblxuXHRcdHJldHVybiBhZGRJdGVtQnV0dG9uO1xuXHR9O1xuXG5cdGNvbnN0IGFkZEl0ZW1PbkNsaWNrID0gKGZpZWxkU2V0OiBPTy51aS5GaWVsZHNldExheW91dCkgPT4ge1xuXHRcdGZpZWxkU2V0LmFkZEl0ZW1zKFtnZXRGb2xsb3dVcEZpZWxkc2V0KCldKTtcblx0fTtcblxuXHRjb25zdCBnZXREZWxldGVJdGVtQnV0dG9uID0gKG9uQ2xpY2s/OiAoZXZlbnQ/OiBFdmVudCkgPT4gdm9pZCk6IE9PLnVpLkJ1dHRvbklucHV0V2lkZ2V0ID0+IHtcblx0XHRjb25zdCBkZWxldGVJdGVtQnV0dG9uID0gbmV3IE9PLnVpLkJ1dHRvbklucHV0V2lkZ2V0KHtcblx0XHRcdGxhYmVsOiBnZXRNZXNzYWdlKCdEZWxldGUnKSxcblx0XHR9KTtcblxuXHRcdGlmIChvbkNsaWNrKSB7XG5cdFx0XHRkZWxldGVJdGVtQnV0dG9uLm9uKCdjbGljaycsIG9uQ2xpY2spO1xuXHRcdH1cblxuXHRcdHJldHVybiBkZWxldGVJdGVtQnV0dG9uO1xuXHR9O1xuXG5cdGNvbnN0IGRlbGV0ZUl0ZW1PbkNsaWNrID0gKGZpZWxkU2V0OiBPTy51aS5GaWVsZHNldExheW91dCwgaXRlbTogT08udWkuRmllbGRzZXRMYXlvdXQpID0+IHtcblx0XHRmaWVsZFNldC5yZW1vdmVJdGVtcyhbaXRlbV0pO1xuXHR9O1xuXG5cdGNvbnN0IHBhcmVudEZpZWxkU2V0ID0gbmV3IE9PLnVpLkZpZWxkc2V0TGF5b3V0KHtcblx0XHRsYWJlbDogZ2V0TWVzc2FnZSgnU291cmNlcyBhbmQgTGljZW5zZXMnKSxcblx0fSk7XG5cblx0Y29uc3QgaW5pdGlhbEZpZWxkc2V0ID0gbmV3IE9PLnVpLkZpZWxkc2V0TGF5b3V0KCk7XG5cdGluaXRpYWxGaWVsZHNldC5hZGRJdGVtcyhbXG5cdFx0bmV3IE9PLnVpLkZpZWxkTGF5b3V0KGdldFRleHRJbnB1dCgpLCB7bGFiZWw6IGdldE1lc3NhZ2UoJ1NvdXJjZScpLCBhbGlnbjogJ2lubGluZSd9KSxcblx0XHRuZXcgT08udWkuRmllbGRMYXlvdXQoZ2V0RHJvcERvd24oKSwge2xhYmVsOiBnZXRNZXNzYWdlKCdMaWNlbnNlJyksIGFsaWduOiAnaW5saW5lJ30pLFxuXHRcdG5ldyBPTy51aS5GaWVsZExheW91dChcblx0XHRcdGdldEFkZEl0ZW1CdXR0b24oKCkgPT4ge1xuXHRcdFx0XHRhZGRJdGVtT25DbGljayhwYXJlbnRGaWVsZFNldCk7XG5cdFx0XHR9KSxcblx0XHRcdHthbGlnbjogJ2lubGluZSd9XG5cdFx0KSxcblx0XSk7XG5cblx0Y29uc3QgZ2V0Rm9sbG93VXBGaWVsZHNldCA9ICgpID0+IHtcblx0XHRjb25zdCBmb2xsb3dVcEZpZWxkc2V0ID0gbmV3IE9PLnVpLkZpZWxkc2V0TGF5b3V0KCk7XG5cdFx0Zm9sbG93VXBGaWVsZHNldC5hZGRJdGVtcyhbXG5cdFx0XHRuZXcgT08udWkuRmllbGRMYXlvdXQoZ2V0VGV4dElucHV0KCksIHtsYWJlbDogZ2V0TWVzc2FnZSgnU291cmNlJyksIGFsaWduOiAnaW5saW5lJ30pLFxuXHRcdFx0bmV3IE9PLnVpLkZpZWxkTGF5b3V0KGdldERyb3BEb3duKCksIHtsYWJlbDogZ2V0TWVzc2FnZSgnTGljZW5zZScpLCBhbGlnbjogJ2lubGluZSd9KSxcblx0XHRcdG5ldyBPTy51aS5GaWVsZExheW91dChcblx0XHRcdFx0Z2V0QWRkSXRlbUJ1dHRvbigoKSA9PiB7XG5cdFx0XHRcdFx0YWRkSXRlbU9uQ2xpY2socGFyZW50RmllbGRTZXQpO1xuXHRcdFx0XHR9KSxcblx0XHRcdFx0e2FsaWduOiAnaW5saW5lJ31cblx0XHRcdCksXG5cdFx0XHRuZXcgT08udWkuRmllbGRMYXlvdXQoXG5cdFx0XHRcdGdldERlbGV0ZUl0ZW1CdXR0b24oKCkgPT4ge1xuXHRcdFx0XHRcdGRlbGV0ZUl0ZW1PbkNsaWNrKHBhcmVudEZpZWxkU2V0LCBmb2xsb3dVcEZpZWxkc2V0KTtcblx0XHRcdFx0fSksXG5cdFx0XHRcdHthbGlnbjogJ2lubGluZSd9XG5cdFx0XHQpLFxuXHRcdF0pO1xuXG5cdFx0cmV0dXJuIGZvbGxvd1VwRmllbGRzZXQ7XG5cdH07XG5cblx0cGFyZW50RmllbGRTZXQuYWRkSXRlbXMoW2luaXRpYWxGaWVsZHNldF0pO1xuXG5cdHBhcmVudEZpZWxkU2V0Lm9uKCdjaGFuZ2UnLCAoKSA9PiB7XG5cdFx0Y29uc3QgJGJvZHkgPSAkKCdib2R5Jyk7XG5cdFx0bW9kaWZ5QXR0cmlidXRpb24oeyRib2R5LCBwYXJlbnRGaWVsZFNldH0pO1xuXHR9KTtcblxuXHRyZXR1cm4gcGFyZW50RmllbGRTZXQ7XG59O1xuXG5leHBvcnQge2dlbmVyYXRlVGV4dElucHV0V2l0aERyb3Bkb3dufTtcbiIsICJpbXBvcnQge21vZGlmeVZpc3VhbEVkaXRvckNoYW5nZVRhZywgbW9kaWZ5V2lraUVkaXRvckNoYW5nZVRhZ30gZnJvbSAnLi9tb2RpZnlDaGFuZ2VUYWcnO1xuaW1wb3J0IHtnZW5lcmF0ZVRleHRJbnB1dFdpdGhEcm9wZG93bn0gZnJvbSAnLi9nZW5lcmF0ZVRleHRJbnB1dFdpdGhEcm9wZG93bic7XG5cbmNvbnN0IGdlbmVyYXRlVmlzdWFsRWRpdG9yQ2hlY2tib3hMYXlvdXQgPSAoe1xuXHRpbnB1dElkLFxuXHRsYWJlbCxcblx0Y2hhbmdlVGFnLFxufToge1xuXHRpbnB1dElkPzogc3RyaW5nO1xuXHRsYWJlbDogc3RyaW5nO1xuXHRjaGFuZ2VUYWc/OiBzdHJpbmc7XG59KSA9PiB7XG5cdGNvbnN0IGNoZWNrYm94OiBPTy51aS5DaGVja2JveElucHV0V2lkZ2V0ID0gbmV3IE9PLnVpLkNoZWNrYm94SW5wdXRXaWRnZXQoe1xuXHRcdHNlbGVjdGVkOiBmYWxzZSxcblx0fSk7XG5cblx0aWYgKGlucHV0SWQpIHtcblx0XHRjaGVja2JveC5zZXRJbnB1dElkKGlucHV0SWQpO1xuXHR9XG5cblx0aWYgKGNoYW5nZVRhZykge1xuXHRcdG1vZGlmeVZpc3VhbEVkaXRvckNoYW5nZVRhZyh7Y2hhbmdlVGFnLCBjaGVja2JveH0pO1xuXHR9XG5cblx0Y29uc3QgdGV4dElucHV0V2l0aERyb3Bkb3duID0gZ2VuZXJhdGVUZXh0SW5wdXRXaXRoRHJvcGRvd24oKTtcblxuXHRjaGVja2JveC5vbignY2hhbmdlJywgKHNlbGVjdGVkKSA9PiB7XG5cdFx0dGV4dElucHV0V2l0aERyb3Bkb3duLiRlbGVtZW50LnByb3AoJ2Rpc2FibGVkJywgIXNlbGVjdGVkKTtcblx0fSk7XG5cblx0Y29uc3QgY2hlY2tib3hMYXlvdXQ6IE9PLnVpLkZpZWxkTGF5b3V0PE9PLnVpLkNoZWNrYm94SW5wdXRXaWRnZXQ+ID0gbmV3IE9PLnVpLkZpZWxkTGF5b3V0KGNoZWNrYm94LCB7XG5cdFx0YWxpZ246ICdpbmxpbmUnLFxuXHRcdGxhYmVsLFxuXHR9KTtcblxuXHRjb25zdCAkbGF5b3V0ID0gJCgnPGRpdj4nKS5hdHRyKCdpZCcsICdlZmEtYXJlYScpLmFwcGVuZChjaGVja2JveExheW91dC4kZWxlbWVudCwgdGV4dElucHV0V2l0aERyb3Bkb3duLiRlbGVtZW50KTtcblxuXHRyZXR1cm4gJGxheW91dDtcbn07XG5cbmNvbnN0IGdlbmVyYXRlV2lraUVkaXRvckNoZWNrYm94TGF5b3V0ID0gKHtcblx0aW5wdXRJZCxcblx0bGFiZWwsXG5cdGNoYW5nZVRhZyxcblx0JGVkaXRGb3JtLFxufToge1xuXHRpbnB1dElkPzogc3RyaW5nO1xuXHRsYWJlbDogc3RyaW5nO1xuXHRjaGFuZ2VUYWc/OiBzdHJpbmc7XG5cdCRlZGl0Rm9ybTogSlF1ZXJ5O1xufSkgPT4ge1xuXHRjb25zdCBjaGVja2JveDogT08udWkuQ2hlY2tib3hJbnB1dFdpZGdldCA9IG5ldyBPTy51aS5DaGVja2JveElucHV0V2lkZ2V0KHtcblx0XHRzZWxlY3RlZDogZmFsc2UsXG5cdH0pO1xuXG5cdGlmIChpbnB1dElkKSB7XG5cdFx0Y2hlY2tib3guc2V0SW5wdXRJZChpbnB1dElkKTtcblx0fVxuXG5cdGlmIChjaGFuZ2VUYWcpIHtcblx0XHRtb2RpZnlXaWtpRWRpdG9yQ2hhbmdlVGFnKHtjaGFuZ2VUYWcsIGNoZWNrYm94LCAkZWRpdEZvcm19KTtcblx0fVxuXG5cdGNvbnN0IHRleHRJbnB1dFdpdGhEcm9wZG93biA9IGdlbmVyYXRlVGV4dElucHV0V2l0aERyb3Bkb3duKCk7XG5cblx0Y2hlY2tib3gub24oJ2NoYW5nZScsIChzZWxlY3RlZCkgPT4ge1xuXHRcdHRleHRJbnB1dFdpdGhEcm9wZG93bi4kZWxlbWVudC5wcm9wKCdkaXNhYmxlZCcsICFzZWxlY3RlZCk7XG5cdH0pO1xuXG5cdGNvbnN0IGNoZWNrYm94TGF5b3V0OiBPTy51aS5GaWVsZExheW91dDxPTy51aS5DaGVja2JveElucHV0V2lkZ2V0PiA9IG5ldyBPTy51aS5GaWVsZExheW91dChjaGVja2JveCwge1xuXHRcdGFsaWduOiAnaW5saW5lJyxcblx0XHRsYWJlbCxcblx0fSk7XG5cblx0Y29uc3QgJGxheW91dCA9ICQoJzxkaXY+JykuYXR0cignaWQnLCAnZWZhLWFyZWEnKS5hcHBlbmQoY2hlY2tib3hMYXlvdXQuJGVsZW1lbnQsIHRleHRJbnB1dFdpdGhEcm9wZG93bi4kZWxlbWVudCk7XG5cblx0cmV0dXJuICRsYXlvdXQ7XG59O1xuZXhwb3J0IHtnZW5lcmF0ZVZpc3VhbEVkaXRvckNoZWNrYm94TGF5b3V0LCBnZW5lcmF0ZVdpa2lFZGl0b3JDaGVja2JveExheW91dH07XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICd+L0VkaXRmb3JtX0F0dHJpYnV0aW9uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge2dlbmVyYXRlVmlzdWFsRWRpdG9yQ2hlY2tib3hMYXlvdXR9IGZyb20gJy4vdXRpbC9nZW5lcmF0ZUNoZWNrYm94TGF5b3V0JztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9pMThuJztcblxuY29uc3QgcHJvY2Vzc1Zpc3VhbEVkaXRvciA9ICh7JGJvZHl9OiB7JGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+fSk6IHZvaWQgPT4ge1xuXHQvLyBHdWFyZCBhZ2FpbnN0IGRvdWJsZSBpbmNsdXNpb25zXG5cdGlmIChtdy5jb25maWcuZ2V0KE9QVElPTlMuY29uZmlnS2V5KSkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0ICR0YXJnZXQ6IEpRdWVyeSA9ICRib2R5LmZpbmQoYC4ke09QVElPTlMudGFyZ2V0Q2xhc3NWZX1gKTtcblx0aWYgKCEkdGFyZ2V0Lmxlbmd0aCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdG13LmNvbmZpZy5zZXQoT1BUSU9OUy5jb25maWdLZXksIHRydWUpO1xuXG5cdGNvbnN0ICRsYXlvdXQgPSBnZW5lcmF0ZVZpc3VhbEVkaXRvckNoZWNrYm94TGF5b3V0KHtcblx0XHRpbnB1dElkOiBPUFRJT05TLmlucHV0SWQsXG5cdFx0bGFiZWw6IGdldE1lc3NhZ2UoJ1RoaXJkUGFydHlDb250ZW50Q29udGFpbmVkJyksXG5cdFx0Y2hhbmdlVGFnOiBPUFRJT05TLmNoYW5nZVRhZyxcblx0fSk7XG5cblx0aWYgKCEkYm9keS5maW5kKGAjJHtPUFRJT05TLmlucHV0SWR9YCkubGVuZ3RoKSB7XG5cdFx0JHRhcmdldC5hcHBlbmQoJGxheW91dCk7XG5cdH1cbn07XG5cbmV4cG9ydCB7cHJvY2Vzc1Zpc3VhbEVkaXRvcn07XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICd+L0VkaXRmb3JtX0F0dHJpYnV0aW9uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge2dlbmVyYXRlV2lraUVkaXRvckNoZWNrYm94TGF5b3V0fSBmcm9tICcuL3V0aWwvZ2VuZXJhdGVDaGVja2JveExheW91dCc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vaTE4bic7XG5cbmNvbnN0IHByb2Nlc3NXaWtpRWRpdG9yID0gKHskYm9keSwgJGVkaXRGb3JtfTogeyRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50PjsgJGVkaXRGb3JtPzogSlF1ZXJ5fSk6IHZvaWQgPT4ge1xuXHQvLyBHdWFyZCBhZ2FpbnN0IGRvdWJsZSBpbmNsdXNpb25zXG5cdGlmIChtdy5jb25maWcuZ2V0KE9QVElPTlMuY29uZmlnS2V5KSkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0ICR0YXJnZXQ6IEpRdWVyeSA9ICgkZWRpdEZvcm0gYXMgSlF1ZXJ5KS5maW5kKE9QVElPTlMudGFyZ2V0V2lraUVkaXRvcik7XG5cdGlmICghJHRhcmdldC5sZW5ndGgpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRtdy5jb25maWcuc2V0KE9QVElPTlMuY29uZmlnS2V5LCB0cnVlKTtcblxuXHRjb25zdCAkbGF5b3V0ID0gZ2VuZXJhdGVXaWtpRWRpdG9yQ2hlY2tib3hMYXlvdXQoe1xuXHRcdGlucHV0SWQ6IE9QVElPTlMuaW5wdXRJZCxcblx0XHRsYWJlbDogZ2V0TWVzc2FnZSgnVGhpcmRQYXJ0eUNvbnRlbnRDb250YWluZWQnKSxcblx0XHQkZWRpdEZvcm06ICRlZGl0Rm9ybSBhcyBKUXVlcnksXG5cdFx0Y2hhbmdlVGFnOiBPUFRJT05TLmNoYW5nZVRhZyxcblx0fSk7XG5cblx0aWYgKCEkYm9keS5maW5kKGAjJHtPUFRJT05TLmlucHV0SWR9YCkubGVuZ3RoKSB7XG5cdFx0JHRhcmdldC5hcHBlbmQoJGxheW91dCk7XG5cdH1cbn07XG5cbmV4cG9ydCB7cHJvY2Vzc1dpa2lFZGl0b3J9O1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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RUFDRixDQUFDO0FBRUQ2RyxLQUFHUyxLQUFLLDRCQUE0QixFQUFFQyxJQUFJLE1BQVk7QUFDckRYLHdCQUFvQjtNQUNuQmxHO0lBQ0QsQ0FBQztFQUNGLENBQUM7QUFHRG1HLEtBQUdTLEtBQUssdUJBQXVCLEVBQUVDLElBQUksTUFBTTtBQUMxQyxRQUFJVixHQUFHQyxPQUFPQyxJQUFZM0ksU0FBUyxHQUFHO0FBQ3JDeUksU0FBR0MsT0FBT0csSUFBWTdJLFdBQVcsS0FBSztJQUN2QztFQUNELENBQUM7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogWyJjb25maWdLZXkiLCAiY2hhbmdlVGFnIiwgImlucHV0SWQiLCAidGFyZ2V0Q2xhc3NWZSIsICJ0YXJnZXRXaWtpRWRpdG9yIiwgImltcG9ydF9leHRfZ2FkZ2V0MiIsICJyZXF1aXJlIiwgIm1vZGlmeVZpc3VhbEVkaXRvckNoYW5nZVRhZyIsICJjaGFuZ2VUYWcyIiwgImNoZWNrYm94IiwgIm9uIiwgIl93aW5kb3ckdmUkaW5pdCR0YXJnZSIsICJfd2luZG93JHZlJGluaXQkdGFyZ2UyIiwgIl93aW5kb3ckdmUkaW5pdCR0YXJnZTMiLCAiZ2VuZXJhdGVDaGFuZ2VUYWdzIiwgIm9yaWdpbkNoYW5nZVRhZ3MiLCAiaXNTZWxlY3RlZCIsICJjb25jYXQiLCAicmVwbGFjZSIsICJjaGFuZ2VUYWdzIiwgIndpbmRvdyIsICJ2ZSIsICJpbml0IiwgInRhcmdldCIsICJzYXZlRmllbGRzIiwgIndwQ2hhbmdlVGFncyIsICJjYWxsIiwgIm1vZGlmeVdpa2lFZGl0b3JDaGFuZ2VUYWciLCAiJGVkaXRGb3JtIiwgIl8kb3JpZ2luV3BDaGFuZ2VUYWdzJCIsICJfJG9yaWdpbldwQ2hhbmdlVGFncyQyIiwgIiR3cENoYW5nZVRhZ3MiLCAiJCIsICJhdHRyIiwgImlkIiwgIm5hbWUiLCAidHlwZSIsICJ2YWx1ZSIsICIkYm9keSIsICJwYXJlbnRzIiwgIiRvcmlnaW5XcENoYW5nZVRhZ3MiLCAiZmluZCIsICJsZW5ndGgiLCAicHJlcGVuZCIsICJ2YWwiLCAidG9TdHJpbmciLCAiTElDRU5TRVMiLCAibGFiZWwiLCAiZGF0YSIsICJ1cmwiLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAiZ2V0STE4bk1lc3NhZ2VzIiwgIkFkZCIsICJsb2NhbGl6ZSIsICJlbiIsICJ6aCIsICJEZWxldGUiLCAiU291cmNlIiwgIkxpY2Vuc2UiLCAiVGhpcmRQYXJ0eUNvbnRlbnRDb250YWluZWQiLCAiUWl1d2VuQ29udGVudENvbnRhaW5lZCIsICJpMThuTWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAibW9kaWZ5QXR0cmlidXRpb24iLCAicGFyZW50RmllbGRTZXQiLCAiZ2VuZXJhdGVJbmZvTWFydGl4IiwgImZpZWxkU2V0TGF5b3V0IiwgImZpZWxkc0luZm8iLCAiX2l0ZXJhdG9yIiwgIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwgImdldEl0ZW1zIiwgIl9zdGVwIiwgInMiLCAibiIsICJkb25lIiwgImF0dHJpYnV0aW9uRmllbGRzZXQiLCAiZmllbGRJbmZvIiwgIl9pdGVyYXRvcjIiLCAiX3N0ZXAyIiwgImZpZWxkIiwgImdldERhdGEiLCAiZXJyIiwgImUiLCAiZiIsICJjb25zb2xlIiwgImxvZyIsICJqb2luIiwgImF0dHJpYnV0aW9ucyIsICIkd3BBdHRyaWJ1dGlvbnMiLCAiJG9yaWdpbldwQXR0cmlidXRpb25zIiwgImdlbmVyYXRlVGV4dElucHV0V2l0aERyb3Bkb3duIiwgImdldFRleHRJbnB1dCIsICJ0ZXh0SW5wdXQiLCAiT08iLCAidWkiLCAiVGV4dElucHV0V2lkZ2V0IiwgInBsYWNlaG9sZGVyIiwgImdldERyb3BEb3duIiwgImRyb3Bkb3duIiwgIkRyb3Bkb3duV2lkZ2V0IiwgIiRvdmVybGF5IiwgIm1lbnUiLCAiaXRlbXMiLCAibWFwIiwgIk1lbnVPcHRpb25XaWRnZXQiLCAiZ2V0QWRkSXRlbUJ1dHRvbiIsICJvbkNsaWNrIiwgImFkZEl0ZW1CdXR0b24iLCAiQnV0dG9uSW5wdXRXaWRnZXQiLCAiYWRkSXRlbU9uQ2xpY2siLCAiZmllbGRTZXQiLCAiYWRkSXRlbXMiLCAiZ2V0Rm9sbG93VXBGaWVsZHNldCIsICJnZXREZWxldGVJdGVtQnV0dG9uIiwgImRlbGV0ZUl0ZW1CdXR0b24iLCAiZGVsZXRlSXRlbU9uQ2xpY2siLCAiaXRlbSIsICJyZW1vdmVJdGVtcyIsICJGaWVsZHNldExheW91dCIsICJpbml0aWFsRmllbGRzZXQiLCAiRmllbGRMYXlvdXQiLCAiYWxpZ24iLCAiZm9sbG93VXBGaWVsZHNldCIsICJnZW5lcmF0ZVZpc3VhbEVkaXRvckNoZWNrYm94TGF5b3V0IiwgImlucHV0SWQyIiwgIkNoZWNrYm94SW5wdXRXaWRnZXQiLCAic2VsZWN0ZWQiLCAic2V0SW5wdXRJZCIsICJ0ZXh0SW5wdXRXaXRoRHJvcGRvd24iLCAiJGVsZW1lbnQiLCAicHJvcCIsICJjaGVja2JveExheW91dCIsICIkbGF5b3V0IiwgImFwcGVuZCIsICJnZW5lcmF0ZVdpa2lFZGl0b3JDaGVja2JveExheW91dCIsICJwcm9jZXNzVmlzdWFsRWRpdG9yIiwgIm13IiwgImNvbmZpZyIsICJnZXQiLCAiJHRhcmdldCIsICJzZXQiLCAicHJvY2Vzc1dpa2lFZGl0b3IiLCAiZ2V0Qm9keSIsICJ0aGVuIiwgImVkaXRGb3JtIiwgImhvb2siLCAiYWRkIl0KfQo=

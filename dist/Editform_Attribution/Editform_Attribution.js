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
    const infoMartix = [];
    var _iterator = _createForOfIteratorHelper(fieldSetLayout.getItems()), _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done; ) {
        const fieldset = _step.value;
        var _iterator2 = _createForOfIteratorHelper(fieldset.getItems()), _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
            const fields = _step2.value;
            const info = [];
            var _iterator3 = _createForOfIteratorHelper(fields.getItems()), _step3;
            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
                const field = _step3.value;
                info[info.length] = field.getData();
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }
            infoMartix[infoMartix.length] = info;
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    console.log(infoMartix);
    return infoMartix.join("; ");
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0VkaXRmb3JtX0F0dHJpYnV0aW9uL29wdGlvbnMuanNvbiIsICJzcmMvRWRpdGZvcm1fQXR0cmlidXRpb24vRWRpdGZvcm1fQXR0cmlidXRpb24udHMiLCAic3JjL0VkaXRmb3JtX0F0dHJpYnV0aW9uL21vZHVsZXMvdXRpbC9tb2RpZnlDaGFuZ2VUYWcudHMiLCAic3JjL0VkaXRmb3JtX0F0dHJpYnV0aW9uL21vZHVsZXMvY29uc3RhbnQudHMiLCAic3JjL0VkaXRmb3JtX0F0dHJpYnV0aW9uL21vZHVsZXMvaTE4bi50cyIsICJzcmMvRWRpdGZvcm1fQXR0cmlidXRpb24vbW9kdWxlcy91dGlsL21vZGlmeUF0dHJpYnV0aW9uU3VtbWFyeS50cyIsICJzcmMvRWRpdGZvcm1fQXR0cmlidXRpb24vbW9kdWxlcy91dGlsL2dlbmVyYXRlVGV4dElucHV0V2l0aERyb3Bkb3duLnRzIiwgInNyYy9FZGl0Zm9ybV9BdHRyaWJ1dGlvbi9tb2R1bGVzL3V0aWwvZ2VuZXJhdGVDaGVja2JveExheW91dC50cyIsICJzcmMvRWRpdGZvcm1fQXR0cmlidXRpb24vbW9kdWxlcy9wcm9jZXNzVmlzdWFsRWRpdG9yLnRzIiwgInNyYy9FZGl0Zm9ybV9BdHRyaWJ1dGlvbi9tb2R1bGVzL3Byb2Nlc3NXaWtpRWRpdG9yLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJ7XG5cdFwiY29uZmlnS2V5XCI6IFwiZ2FkZ2V0LUVkaXRmb3JtX0F0dHJpYnV0aW9uX19Jbml0aWFsaXplZFwiLFxuXHRcImNoYW5nZVRhZ1wiOiBcIkF0dHJpYnV0aW9uX2FkZGVkXCIsXG5cdFwiaW5wdXRJZFwiOiBcImVkaXRmb3JtX2F0dHJpYnV0aW9uXCIsXG5cdFwidGFyZ2V0Q2xhc3NWZVwiOiBcInZlLXVpLW13U2F2ZURpYWxvZy1jaGVja2JveGVzXCIsXG5cdFwidGFyZ2V0V2lraUVkaXRvclwiOiBcIi5lZGl0Q2hlY2tib3hlcyAub28tdWktaG9yaXpvbnRhbExheW91dFwiXG59XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuL29wdGlvbnMuanNvbic7XG5pbXBvcnQge2dldEJvZHl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5pbXBvcnQge3Byb2Nlc3NWaXN1YWxFZGl0b3J9IGZyb20gJy4vbW9kdWxlcy9wcm9jZXNzVmlzdWFsRWRpdG9yJztcbmltcG9ydCB7cHJvY2Vzc1dpa2lFZGl0b3J9IGZyb20gJy4vbW9kdWxlcy9wcm9jZXNzV2lraUVkaXRvcic7XG5cbi8qKlxuICogQGRlc2NyaXB0aW9uIOesrOS4ieaWueadpea6kOeJueauiuWjsOaYjlxuICovXG52b2lkIGdldEJvZHkoKS50aGVuKGZ1bmN0aW9uIGVkaXRGb3JtKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQge1xuXHRtdy5ob29rKCd3aWtpcGFnZS5lZGl0Zm9ybScpLmFkZCgoJGVkaXRGb3JtKTogdm9pZCA9PiB7XG5cdFx0cHJvY2Vzc1dpa2lFZGl0b3Ioe1xuXHRcdFx0JGJvZHksXG5cdFx0XHQkZWRpdEZvcm0sXG5cdFx0fSk7XG5cdH0pO1xuXG5cdG13Lmhvb2soJ3ZlLnNhdmVEaWFsb2cuc3RhdGVDaGFuZ2VkJykuYWRkKCgpOiB2b2lkID0+IHtcblx0XHRwcm9jZXNzVmlzdWFsRWRpdG9yKHtcblx0XHRcdCRib2R5LFxuXHRcdH0pO1xuXHR9KTtcblxuXHQvLyBXaGVuIHN3aXRjaGluZyBiZXR3ZWVuIFZFIGFuZCBOV0UsIHJlLWluaXRpYWxpemF0aW9uIGlzIHJlcXVpcmVkXG5cdG13Lmhvb2soJ3ZlLmFjdGl2YXRpb25Db21wbGV0ZScpLmFkZCgoKSA9PiB7XG5cdFx0aWYgKG13LmNvbmZpZy5nZXQoT1BUSU9OUy5jb25maWdLZXkpKSB7XG5cdFx0XHRtdy5jb25maWcuc2V0KE9QVElPTlMuY29uZmlnS2V5LCBmYWxzZSk7XG5cdFx0fVxuXHR9KTtcbn0pO1xuIiwgImNvbnN0IG1vZGlmeVZpc3VhbEVkaXRvckNoYW5nZVRhZyA9ICh7XG5cdGNoYW5nZVRhZyxcblx0Y2hlY2tib3gsXG59OiB7XG5cdGNoYW5nZVRhZzogc3RyaW5nO1xuXHRjaGVja2JveDogT08udWkuQ2hlY2tib3hJbnB1dFdpZGdldDtcbn0pOiB2b2lkID0+IHtcblx0Y2hlY2tib3gub24oJ2NoYW5nZScsICgpOiB2b2lkID0+IHtcblx0XHRjb25zdCBnZW5lcmF0ZUNoYW5nZVRhZ3MgPSAob3JpZ2luQ2hhbmdlVGFnczogc3RyaW5nKTogc3RyaW5nID0+IHtcblx0XHRcdHJldHVybiBjaGVja2JveC5pc1NlbGVjdGVkKClcblx0XHRcdFx0PyBgJHtvcmlnaW5DaGFuZ2VUYWdzfSwke2NoYW5nZVRhZ31gXG5cdFx0XHRcdDogb3JpZ2luQ2hhbmdlVGFncy5yZXBsYWNlKGAsJHtjaGFuZ2VUYWd9YCwgJycpO1xuXHRcdH07XG5cblx0XHRsZXQgY2hhbmdlVGFnczogc3RyaW5nID0gJyc7XG5cdFx0Y2hhbmdlVGFncyA9IGdlbmVyYXRlQ2hhbmdlVGFncyh3aW5kb3cudmUuaW5pdC50YXJnZXQuc2F2ZUZpZWxkcy53cENoYW5nZVRhZ3M/LigpID8/ICcnKTtcblx0XHR3aW5kb3cudmUuaW5pdC50YXJnZXQuc2F2ZUZpZWxkcy53cENoYW5nZVRhZ3MgPSAoKTogc3RyaW5nID0+IHtcblx0XHRcdHJldHVybiBjaGFuZ2VUYWdzO1xuXHRcdH07XG5cdH0pO1xufTtcblxuY29uc3QgbW9kaWZ5V2lraUVkaXRvckNoYW5nZVRhZyA9ICh7XG5cdGNoYW5nZVRhZyxcblx0Y2hlY2tib3gsXG5cdCRlZGl0Rm9ybSxcbn06IHtcblx0Y2hhbmdlVGFnOiBzdHJpbmc7XG5cdGNoZWNrYm94OiBPTy51aS5DaGVja2JveElucHV0V2lkZ2V0O1xuXHQkZWRpdEZvcm06IEpRdWVyeTtcbn0pOiB2b2lkID0+IHtcblx0Y2hlY2tib3gub24oJ2NoYW5nZScsICgpOiB2b2lkID0+IHtcblx0XHRjb25zdCBnZW5lcmF0ZUNoYW5nZVRhZ3MgPSAob3JpZ2luQ2hhbmdlVGFnczogc3RyaW5nKTogc3RyaW5nID0+IHtcblx0XHRcdHJldHVybiBjaGVja2JveC5pc1NlbGVjdGVkKClcblx0XHRcdFx0PyBgJHtvcmlnaW5DaGFuZ2VUYWdzfSwke2NoYW5nZVRhZ31gXG5cdFx0XHRcdDogb3JpZ2luQ2hhbmdlVGFncy5yZXBsYWNlKGAsJHtjaGFuZ2VUYWd9YCwgJycpO1xuXHRcdH07XG5cblx0XHRsZXQgY2hhbmdlVGFnczogc3RyaW5nID0gJyc7XG5cblx0XHRjb25zdCAkd3BDaGFuZ2VUYWdzOiBKUXVlcnkgPSAkKCc8aW5wdXQ+JykuYXR0cih7XG5cdFx0XHRpZDogJ3dwQ2hhbmdlVGFncycsXG5cdFx0XHRuYW1lOiAnd3BDaGFuZ2VUYWdzJyxcblx0XHRcdHR5cGU6ICdoaWRkZW4nLFxuXHRcdFx0dmFsdWU6ICcnLFxuXHRcdH0pO1xuXHRcdGNvbnN0ICRib2R5ID0gJGVkaXRGb3JtLnBhcmVudHMoJ2JvZHknKTtcblx0XHRjb25zdCAkb3JpZ2luV3BDaGFuZ2VUYWdzOiBKUXVlcnkgPSAkYm9keS5maW5kKCdpbnB1dFtuYW1lPXdwQ2hhbmdlVGFnc10nKTtcblx0XHRpZiAoISRvcmlnaW5XcENoYW5nZVRhZ3MubGVuZ3RoKSB7XG5cdFx0XHQkYm9keS5wcmVwZW5kKCR3cENoYW5nZVRhZ3MpO1xuXHRcdH1cblx0XHRjaGFuZ2VUYWdzID0gZ2VuZXJhdGVDaGFuZ2VUYWdzKCRvcmlnaW5XcENoYW5nZVRhZ3MudmFsKCk/LnRvU3RyaW5nKCkgPz8gJycpO1xuXHRcdCRvcmlnaW5XcENoYW5nZVRhZ3MudmFsKGNoYW5nZVRhZ3MpO1xuXHR9KTtcbn07XG5cbmV4cG9ydCB7bW9kaWZ5VmlzdWFsRWRpdG9yQ2hhbmdlVGFnLCBtb2RpZnlXaWtpRWRpdG9yQ2hhbmdlVGFnfTtcbiIsICJjb25zdCBMSUNFTlNFUyA9IFtcblx0e1xuXHRcdGxhYmVsOiAnQ0MgQlktU0EgNC4wJyxcblx0XHRkYXRhOiAnaHR0cHM6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL2xpY2Vuc2VzL2J5LXNhLzQuMC8nLFxuXHR9LFxuXHR7XG5cdFx0bGFiZWw6ICdDQyBCWS1TQSAzLjAnLFxuXHRcdHVybDogJ2h0dHBzOi8vY3JlYXRpdmVjb21tb25zLm9yZy9saWNlbnNlcy9ieS1zYS8zLjAvJyxcblx0fSxcblx0e1xuXHRcdGxhYmVsOiAnQ0MgQlktU0EgMy4wIENOJyxcblx0XHR1cmw6ICdodHRwczovL2NyZWF0aXZlY29tbW9ucy5vcmcvbGljZW5zZXMvYnktc2EvMy4wL2NuLycsXG5cdH0sXG5cdHtcblx0XHRsYWJlbDogJ0NDMC0xLjAnLFxuXHRcdHVybDogJ2h0dHBzOi8vY3JlYXRpdmVjb21tb25zLm9yZy9wdWJsaWNkb21haW4vemVyby8xLjAvJyxcblx0fSxcblx0e1xuXHRcdGxhYmVsOiAnS09HTCBUeXBlIEk6IEF0dHJpYnV0aW9uJyxcblx0XHR1cmw6ICdodHRwczovL3d3dy5rb2dsLm9yLmtyL2luZm8vbGljZW5zZVR5cGUxLmRvJyxcblx0fSxcbl07XG5cbmV4cG9ydCB7TElDRU5TRVN9O1xuIiwgImltcG9ydCB7bG9jYWxpemV9IGZyb20gJ2V4dC5nYWRnZXQuaTE4bic7XG5cbmNvbnN0IGdldEkxOG5NZXNzYWdlcyA9ICgpID0+IHtcblx0cmV0dXJuIHtcblx0XHRBZGQ6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQWRkJyxcblx0XHRcdHpoOiAn5aKe5YqgJyxcblx0XHR9KSxcblx0XHREZWxldGU6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnRGVsZXRlJyxcblx0XHRcdHpoOiAn56e76ZmkJyxcblx0XHR9KSxcblx0XHRTb3VyY2U6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnU291cmNlJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WGheWuueadpea6kCcsXG5cdFx0XHQnemgtaGFudCc6ICflhaflrrnkvobmupAnLFxuXHRcdH0pLFxuXHRcdExpY2Vuc2U6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnTGljZW5zZScsXG5cdFx0XHQnemgtaGFucyc6ICforrjlj6/or4EnLFxuXHRcdFx0J3poLWhhbnQnOiAn6Kix5Y+v6K2JJyxcblx0XHR9KSxcblx0XHQnU291cmNlcyBhbmQgTGljZW5zZXMnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1NvdXJjZXMgYW5kIExpY2Vuc2VzJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WGheWuueadpea6kOWPiuiuuOWPr+ivgScsXG5cdFx0XHQnemgtaGFudCc6ICflhaflrrnkvobmupDlj4roqLHlj6/orYknLFxuXHRcdH0pLFxuXHRcdFRoaXJkUGFydHlDb250ZW50Q29udGFpbmVkOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1RoaXMgZWRpdG9yIGNvbnRhaW5zIHRoaXJkLXBhcnR5IGNvbnRlbnQuJyxcblx0XHRcdCd6aC1oYW5zJzogJ+atpOe8lui+keWQq+acieesrOS4ieaWueWGheWuuScsXG5cdFx0XHQnemgtaGFudCc6ICfmraTnt6jovK/lkKvmnInnrKzkuInmlrnlhaflrrknLFxuXHRcdH0pLFxuXHRcdFFpdXdlbkNvbnRlbnRDb250YWluZWQ6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnVGhpcyBlZGl0b3IgY29udGFpbnMgY29udGVudCBmcm9tIG90aGVyIHBhZ2VzIG9mIFFpdXdlbiBCYWlrZS4nLFxuXHRcdFx0J3poLWhhbnMnOiAn5q2k57yW6L6R5ZCr5pyJ5rGC6Ze755m+56eR5YW25LuW6aG16Z2i55qE5YaF5a65Jyxcblx0XHRcdCd6aC1oYW50JzogJ+atpOe3qOi8r+WQq+acieaxguiBnueZvuenkeWFtuS7lumggemdoueahOWFp+WuuScsXG5cdFx0fSksXG5cdH07XG59O1xuXG5jb25zdCBpMThuTWVzc2FnZXMgPSBnZXRJMThuTWVzc2FnZXMoKTtcblxuY29uc3QgZ2V0TWVzc2FnZTogR2V0TWVzc2FnZXM8dHlwZW9mIGkxOG5NZXNzYWdlcz4gPSAoa2V5KSA9PiB7XG5cdHJldHVybiBpMThuTWVzc2FnZXNba2V5XSB8fCBrZXk7XG59O1xuXG5leHBvcnQge2dldE1lc3NhZ2V9O1xuIiwgImNvbnN0IG1vZGlmeUF0dHJpYnV0aW9uID0gKHtcblx0JGJvZHksXG5cdHBhcmVudEZpZWxkU2V0LFxufToge1xuXHQkYm9keTogSlF1ZXJ5PEhUTUxFbGVtZW50Pjtcblx0cGFyZW50RmllbGRTZXQ6IE9PLnVpLkZpZWxkc2V0TGF5b3V0O1xufSkgPT4ge1xuXHRjb25zdCBnZW5lcmF0ZUluZm9NYXJ0aXggPSAoZmllbGRTZXRMYXlvdXQ6IE9PLnVpLkZpZWxkc2V0TGF5b3V0KSA9PiB7XG5cdFx0Y29uc3QgaW5mb01hcnRpeCA9IFtdO1xuXG5cdFx0Zm9yIChjb25zdCBmaWVsZHNldCBvZiBmaWVsZFNldExheW91dC5nZXRJdGVtcygpIGFzIE9PLnVpLkZpZWxkc2V0TGF5b3V0W10pIHtcblx0XHRcdGZvciAoY29uc3QgZmllbGRzIG9mIGZpZWxkc2V0LmdldEl0ZW1zKCkgYXMgT08udWkuRmllbGRzZXRMYXlvdXRbXSkge1xuXHRcdFx0XHRjb25zdCBpbmZvID0gW107XG5cblx0XHRcdFx0Zm9yIChjb25zdCBmaWVsZCBvZiBmaWVsZHMuZ2V0SXRlbXMoKSBhcyBPTy51aS5GaWVsZHNldExheW91dFtdKSB7XG5cdFx0XHRcdFx0aW5mb1tpbmZvLmxlbmd0aF0gPSBmaWVsZC5nZXREYXRhKCk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpbmZvTWFydGl4W2luZm9NYXJ0aXgubGVuZ3RoXSA9IGluZm87XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Y29uc29sZS5sb2coaW5mb01hcnRpeCk7XG5cblx0XHRyZXR1cm4gaW5mb01hcnRpeC5qb2luKCc7ICcpO1xuXHR9O1xuXG5cdGxldCBhdHRyaWJ1dGlvbnM6IHN0cmluZyA9ICcnO1xuXG5cdGNvbnN0ICR3cEF0dHJpYnV0aW9uczogSlF1ZXJ5ID0gJCgnPGlucHV0PicpLmF0dHIoe1xuXHRcdGlkOiAnd3BBdHRyaWJ1dGlvbnMnLFxuXHRcdG5hbWU6ICd3cEF0dHJpYnV0aW9ucycsXG5cdFx0dHlwZTogJ2hpZGRlbicsXG5cdFx0dmFsdWU6ICcnLFxuXHR9KTtcblx0Y29uc3QgJG9yaWdpbldwQXR0cmlidXRpb25zOiBKUXVlcnkgPSAkYm9keS5maW5kKCdpbnB1dFtuYW1lPXdwQXR0cmlidXRpb25zXScpO1xuXHRpZiAoISRvcmlnaW5XcEF0dHJpYnV0aW9ucy5sZW5ndGgpIHtcblx0XHQkYm9keS5wcmVwZW5kKCR3cEF0dHJpYnV0aW9ucyk7XG5cdH1cblxuXHRhdHRyaWJ1dGlvbnMgPSBnZW5lcmF0ZUluZm9NYXJ0aXgocGFyZW50RmllbGRTZXQpO1xuXHQkb3JpZ2luV3BBdHRyaWJ1dGlvbnMudmFsKGF0dHJpYnV0aW9ucyk7XG59O1xuXG5leHBvcnQge21vZGlmeUF0dHJpYnV0aW9ufTtcbiIsICJpbXBvcnQge0xJQ0VOU0VTfSBmcm9tICcuLi9jb25zdGFudCc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4uL2kxOG4nO1xuaW1wb3J0IHttb2RpZnlBdHRyaWJ1dGlvbn0gZnJvbSAnLi9tb2RpZnlBdHRyaWJ1dGlvblN1bW1hcnknO1xuXG5jb25zdCBnZW5lcmF0ZVRleHRJbnB1dFdpdGhEcm9wZG93biA9ICgpID0+IHtcblx0Y29uc3QgZ2V0VGV4dElucHV0ID0gKCkgPT4ge1xuXHRcdGNvbnN0IHRleHRJbnB1dCA9IG5ldyBPTy51aS5UZXh0SW5wdXRXaWRnZXQoe1xuXHRcdFx0cGxhY2Vob2xkZXI6IGdldE1lc3NhZ2UoJ1NvdXJjZScpLFxuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIHRleHRJbnB1dDtcblx0fTtcblxuXHRjb25zdCBnZXREcm9wRG93biA9ICgpID0+IHtcblx0XHRjb25zdCBkcm9wZG93bjogT08udWkuRHJvcGRvd25XaWRnZXQgPSBuZXcgT08udWkuRHJvcGRvd25XaWRnZXQoe1xuXHRcdFx0JG92ZXJsYXk6IHRydWUsXG5cdFx0XHRtZW51OiB7XG5cdFx0XHRcdGl0ZW1zOiBMSUNFTlNFUy5tYXAoKHtkYXRhLCBsYWJlbH0pOiBPTy51aS5NZW51T3B0aW9uV2lkZ2V0ID0+IHtcblx0XHRcdFx0XHRyZXR1cm4gbmV3IE9PLnVpLk1lbnVPcHRpb25XaWRnZXQoe1xuXHRcdFx0XHRcdFx0ZGF0YSxcblx0XHRcdFx0XHRcdGxhYmVsLFxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9KSxcblx0XHRcdH0sXG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gZHJvcGRvd247XG5cdH07XG5cblx0Y29uc3QgZ2V0QWRkSXRlbUJ1dHRvbiA9IChvbkNsaWNrPzogKGV2ZW50PzogRXZlbnQpID0+IHZvaWQpOiBPTy51aS5CdXR0b25JbnB1dFdpZGdldCA9PiB7XG5cdFx0Y29uc3QgYWRkSXRlbUJ1dHRvbiA9IG5ldyBPTy51aS5CdXR0b25JbnB1dFdpZGdldCh7XG5cdFx0XHRsYWJlbDogZ2V0TWVzc2FnZSgnQWRkJyksXG5cdFx0fSk7XG5cblx0XHRpZiAob25DbGljaykge1xuXHRcdFx0YWRkSXRlbUJ1dHRvbi5vbignY2xpY2snLCBvbkNsaWNrKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gYWRkSXRlbUJ1dHRvbjtcblx0fTtcblxuXHRjb25zdCBhZGRJdGVtT25DbGljayA9IChmaWVsZFNldDogT08udWkuRmllbGRzZXRMYXlvdXQpID0+IHtcblx0XHRmaWVsZFNldC5hZGRJdGVtcyhbZ2V0Rm9sbG93VXBGaWVsZHNldCgpXSk7XG5cdH07XG5cblx0Y29uc3QgZ2V0RGVsZXRlSXRlbUJ1dHRvbiA9IChvbkNsaWNrPzogKGV2ZW50PzogRXZlbnQpID0+IHZvaWQpOiBPTy51aS5CdXR0b25JbnB1dFdpZGdldCA9PiB7XG5cdFx0Y29uc3QgZGVsZXRlSXRlbUJ1dHRvbiA9IG5ldyBPTy51aS5CdXR0b25JbnB1dFdpZGdldCh7XG5cdFx0XHRsYWJlbDogZ2V0TWVzc2FnZSgnRGVsZXRlJyksXG5cdFx0fSk7XG5cblx0XHRpZiAob25DbGljaykge1xuXHRcdFx0ZGVsZXRlSXRlbUJ1dHRvbi5vbignY2xpY2snLCBvbkNsaWNrKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZGVsZXRlSXRlbUJ1dHRvbjtcblx0fTtcblxuXHRjb25zdCBkZWxldGVJdGVtT25DbGljayA9IChmaWVsZFNldDogT08udWkuRmllbGRzZXRMYXlvdXQsIGl0ZW06IE9PLnVpLkZpZWxkc2V0TGF5b3V0KSA9PiB7XG5cdFx0ZmllbGRTZXQucmVtb3ZlSXRlbXMoW2l0ZW1dKTtcblx0fTtcblxuXHRjb25zdCBwYXJlbnRGaWVsZFNldCA9IG5ldyBPTy51aS5GaWVsZHNldExheW91dCh7XG5cdFx0bGFiZWw6IGdldE1lc3NhZ2UoJ1NvdXJjZXMgYW5kIExpY2Vuc2VzJyksXG5cdH0pO1xuXG5cdGNvbnN0IGluaXRpYWxGaWVsZHNldCA9IG5ldyBPTy51aS5GaWVsZHNldExheW91dCgpO1xuXHRpbml0aWFsRmllbGRzZXQuYWRkSXRlbXMoW1xuXHRcdG5ldyBPTy51aS5GaWVsZExheW91dChnZXRUZXh0SW5wdXQoKSwge2xhYmVsOiBnZXRNZXNzYWdlKCdTb3VyY2UnKSwgYWxpZ246ICdpbmxpbmUnfSksXG5cdFx0bmV3IE9PLnVpLkZpZWxkTGF5b3V0KGdldERyb3BEb3duKCksIHtsYWJlbDogZ2V0TWVzc2FnZSgnTGljZW5zZScpLCBhbGlnbjogJ2lubGluZSd9KSxcblx0XHRuZXcgT08udWkuRmllbGRMYXlvdXQoXG5cdFx0XHRnZXRBZGRJdGVtQnV0dG9uKCgpID0+IHtcblx0XHRcdFx0YWRkSXRlbU9uQ2xpY2socGFyZW50RmllbGRTZXQpO1xuXHRcdFx0fSksXG5cdFx0XHR7YWxpZ246ICdpbmxpbmUnfVxuXHRcdCksXG5cdF0pO1xuXG5cdGNvbnN0IGdldEZvbGxvd1VwRmllbGRzZXQgPSAoKSA9PiB7XG5cdFx0Y29uc3QgZm9sbG93VXBGaWVsZHNldCA9IG5ldyBPTy51aS5GaWVsZHNldExheW91dCgpO1xuXHRcdGZvbGxvd1VwRmllbGRzZXQuYWRkSXRlbXMoW1xuXHRcdFx0bmV3IE9PLnVpLkZpZWxkTGF5b3V0KGdldFRleHRJbnB1dCgpLCB7bGFiZWw6IGdldE1lc3NhZ2UoJ1NvdXJjZScpLCBhbGlnbjogJ2lubGluZSd9KSxcblx0XHRcdG5ldyBPTy51aS5GaWVsZExheW91dChnZXREcm9wRG93bigpLCB7bGFiZWw6IGdldE1lc3NhZ2UoJ0xpY2Vuc2UnKSwgYWxpZ246ICdpbmxpbmUnfSksXG5cdFx0XHRuZXcgT08udWkuRmllbGRMYXlvdXQoXG5cdFx0XHRcdGdldEFkZEl0ZW1CdXR0b24oKCkgPT4ge1xuXHRcdFx0XHRcdGFkZEl0ZW1PbkNsaWNrKHBhcmVudEZpZWxkU2V0KTtcblx0XHRcdFx0fSksXG5cdFx0XHRcdHthbGlnbjogJ2lubGluZSd9XG5cdFx0XHQpLFxuXHRcdFx0bmV3IE9PLnVpLkZpZWxkTGF5b3V0KFxuXHRcdFx0XHRnZXREZWxldGVJdGVtQnV0dG9uKCgpID0+IHtcblx0XHRcdFx0XHRkZWxldGVJdGVtT25DbGljayhwYXJlbnRGaWVsZFNldCwgZm9sbG93VXBGaWVsZHNldCk7XG5cdFx0XHRcdH0pLFxuXHRcdFx0XHR7YWxpZ246ICdpbmxpbmUnfVxuXHRcdFx0KSxcblx0XHRdKTtcblxuXHRcdHJldHVybiBmb2xsb3dVcEZpZWxkc2V0O1xuXHR9O1xuXG5cdHBhcmVudEZpZWxkU2V0LmFkZEl0ZW1zKFtpbml0aWFsRmllbGRzZXRdKTtcblxuXHRwYXJlbnRGaWVsZFNldC5vbignY2hhbmdlJywgKCkgPT4ge1xuXHRcdGNvbnN0ICRib2R5ID0gJCgnYm9keScpO1xuXHRcdG1vZGlmeUF0dHJpYnV0aW9uKHskYm9keSwgcGFyZW50RmllbGRTZXR9KTtcblx0fSk7XG5cblx0cmV0dXJuIHBhcmVudEZpZWxkU2V0O1xufTtcblxuZXhwb3J0IHtnZW5lcmF0ZVRleHRJbnB1dFdpdGhEcm9wZG93bn07XG4iLCAiaW1wb3J0IHttb2RpZnlWaXN1YWxFZGl0b3JDaGFuZ2VUYWcsIG1vZGlmeVdpa2lFZGl0b3JDaGFuZ2VUYWd9IGZyb20gJy4vbW9kaWZ5Q2hhbmdlVGFnJztcbmltcG9ydCB7Z2VuZXJhdGVUZXh0SW5wdXRXaXRoRHJvcGRvd259IGZyb20gJy4vZ2VuZXJhdGVUZXh0SW5wdXRXaXRoRHJvcGRvd24nO1xuXG5jb25zdCBnZW5lcmF0ZVZpc3VhbEVkaXRvckNoZWNrYm94TGF5b3V0ID0gKHtcblx0aW5wdXRJZCxcblx0bGFiZWwsXG5cdGNoYW5nZVRhZyxcbn06IHtcblx0aW5wdXRJZD86IHN0cmluZztcblx0bGFiZWw6IHN0cmluZztcblx0Y2hhbmdlVGFnPzogc3RyaW5nO1xufSkgPT4ge1xuXHRjb25zdCBjaGVja2JveDogT08udWkuQ2hlY2tib3hJbnB1dFdpZGdldCA9IG5ldyBPTy51aS5DaGVja2JveElucHV0V2lkZ2V0KHtcblx0XHRzZWxlY3RlZDogZmFsc2UsXG5cdH0pO1xuXG5cdGlmIChpbnB1dElkKSB7XG5cdFx0Y2hlY2tib3guc2V0SW5wdXRJZChpbnB1dElkKTtcblx0fVxuXG5cdGlmIChjaGFuZ2VUYWcpIHtcblx0XHRtb2RpZnlWaXN1YWxFZGl0b3JDaGFuZ2VUYWcoe2NoYW5nZVRhZywgY2hlY2tib3h9KTtcblx0fVxuXG5cdGNvbnN0IHRleHRJbnB1dFdpdGhEcm9wZG93biA9IGdlbmVyYXRlVGV4dElucHV0V2l0aERyb3Bkb3duKCk7XG5cblx0Y2hlY2tib3gub24oJ2NoYW5nZScsIChzZWxlY3RlZCkgPT4ge1xuXHRcdHRleHRJbnB1dFdpdGhEcm9wZG93bi4kZWxlbWVudC5wcm9wKCdkaXNhYmxlZCcsICFzZWxlY3RlZCk7XG5cdH0pO1xuXG5cdGNvbnN0IGNoZWNrYm94TGF5b3V0OiBPTy51aS5GaWVsZExheW91dDxPTy51aS5DaGVja2JveElucHV0V2lkZ2V0PiA9IG5ldyBPTy51aS5GaWVsZExheW91dChjaGVja2JveCwge1xuXHRcdGFsaWduOiAnaW5saW5lJyxcblx0XHRsYWJlbCxcblx0fSk7XG5cblx0Y29uc3QgJGxheW91dCA9ICQoJzxkaXY+JykuYXR0cignaWQnLCAnZWZhLWFyZWEnKS5hcHBlbmQoY2hlY2tib3hMYXlvdXQuJGVsZW1lbnQsIHRleHRJbnB1dFdpdGhEcm9wZG93bi4kZWxlbWVudCk7XG5cblx0cmV0dXJuICRsYXlvdXQ7XG59O1xuXG5jb25zdCBnZW5lcmF0ZVdpa2lFZGl0b3JDaGVja2JveExheW91dCA9ICh7XG5cdGlucHV0SWQsXG5cdGxhYmVsLFxuXHRjaGFuZ2VUYWcsXG5cdCRlZGl0Rm9ybSxcbn06IHtcblx0aW5wdXRJZD86IHN0cmluZztcblx0bGFiZWw6IHN0cmluZztcblx0Y2hhbmdlVGFnPzogc3RyaW5nO1xuXHQkZWRpdEZvcm06IEpRdWVyeTtcbn0pID0+IHtcblx0Y29uc3QgY2hlY2tib3g6IE9PLnVpLkNoZWNrYm94SW5wdXRXaWRnZXQgPSBuZXcgT08udWkuQ2hlY2tib3hJbnB1dFdpZGdldCh7XG5cdFx0c2VsZWN0ZWQ6IGZhbHNlLFxuXHR9KTtcblxuXHRpZiAoaW5wdXRJZCkge1xuXHRcdGNoZWNrYm94LnNldElucHV0SWQoaW5wdXRJZCk7XG5cdH1cblxuXHRpZiAoY2hhbmdlVGFnKSB7XG5cdFx0bW9kaWZ5V2lraUVkaXRvckNoYW5nZVRhZyh7Y2hhbmdlVGFnLCBjaGVja2JveCwgJGVkaXRGb3JtfSk7XG5cdH1cblxuXHRjb25zdCB0ZXh0SW5wdXRXaXRoRHJvcGRvd24gPSBnZW5lcmF0ZVRleHRJbnB1dFdpdGhEcm9wZG93bigpO1xuXG5cdGNoZWNrYm94Lm9uKCdjaGFuZ2UnLCAoc2VsZWN0ZWQpID0+IHtcblx0XHR0ZXh0SW5wdXRXaXRoRHJvcGRvd24uJGVsZW1lbnQucHJvcCgnZGlzYWJsZWQnLCAhc2VsZWN0ZWQpO1xuXHR9KTtcblxuXHRjb25zdCBjaGVja2JveExheW91dDogT08udWkuRmllbGRMYXlvdXQ8T08udWkuQ2hlY2tib3hJbnB1dFdpZGdldD4gPSBuZXcgT08udWkuRmllbGRMYXlvdXQoY2hlY2tib3gsIHtcblx0XHRhbGlnbjogJ2lubGluZScsXG5cdFx0bGFiZWwsXG5cdH0pO1xuXG5cdGNvbnN0ICRsYXlvdXQgPSAkKCc8ZGl2PicpLmF0dHIoJ2lkJywgJ2VmYS1hcmVhJykuYXBwZW5kKGNoZWNrYm94TGF5b3V0LiRlbGVtZW50LCB0ZXh0SW5wdXRXaXRoRHJvcGRvd24uJGVsZW1lbnQpO1xuXG5cdHJldHVybiAkbGF5b3V0O1xufTtcbmV4cG9ydCB7Z2VuZXJhdGVWaXN1YWxFZGl0b3JDaGVja2JveExheW91dCwgZ2VuZXJhdGVXaWtpRWRpdG9yQ2hlY2tib3hMYXlvdXR9O1xuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnfi9FZGl0Zm9ybV9BdHRyaWJ1dGlvbi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtnZW5lcmF0ZVZpc3VhbEVkaXRvckNoZWNrYm94TGF5b3V0fSBmcm9tICcuL3V0aWwvZ2VuZXJhdGVDaGVja2JveExheW91dCc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vaTE4bic7XG5cbmNvbnN0IHByb2Nlc3NWaXN1YWxFZGl0b3IgPSAoeyRib2R5fTogeyRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pn0pOiB2b2lkID0+IHtcblx0Ly8gR3VhcmQgYWdhaW5zdCBkb3VibGUgaW5jbHVzaW9uc1xuXHRpZiAobXcuY29uZmlnLmdldChPUFRJT05TLmNvbmZpZ0tleSkpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCAkdGFyZ2V0OiBKUXVlcnkgPSAkYm9keS5maW5kKGAuJHtPUFRJT05TLnRhcmdldENsYXNzVmV9YCk7XG5cdGlmICghJHRhcmdldC5sZW5ndGgpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRtdy5jb25maWcuc2V0KE9QVElPTlMuY29uZmlnS2V5LCB0cnVlKTtcblxuXHRjb25zdCAkbGF5b3V0ID0gZ2VuZXJhdGVWaXN1YWxFZGl0b3JDaGVja2JveExheW91dCh7XG5cdFx0aW5wdXRJZDogT1BUSU9OUy5pbnB1dElkLFxuXHRcdGxhYmVsOiBnZXRNZXNzYWdlKCdUaGlyZFBhcnR5Q29udGVudENvbnRhaW5lZCcpLFxuXHRcdGNoYW5nZVRhZzogT1BUSU9OUy5jaGFuZ2VUYWcsXG5cdH0pO1xuXG5cdGlmICghJGJvZHkuZmluZChgIyR7T1BUSU9OUy5pbnB1dElkfWApLmxlbmd0aCkge1xuXHRcdCR0YXJnZXQuYXBwZW5kKCRsYXlvdXQpO1xuXHR9XG59O1xuXG5leHBvcnQge3Byb2Nlc3NWaXN1YWxFZGl0b3J9O1xuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnfi9FZGl0Zm9ybV9BdHRyaWJ1dGlvbi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtnZW5lcmF0ZVdpa2lFZGl0b3JDaGVja2JveExheW91dH0gZnJvbSAnLi91dGlsL2dlbmVyYXRlQ2hlY2tib3hMYXlvdXQnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL2kxOG4nO1xuXG5jb25zdCBwcm9jZXNzV2lraUVkaXRvciA9ICh7JGJvZHksICRlZGl0Rm9ybX06IHskYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD47ICRlZGl0Rm9ybT86IEpRdWVyeX0pOiB2b2lkID0+IHtcblx0Ly8gR3VhcmQgYWdhaW5zdCBkb3VibGUgaW5jbHVzaW9uc1xuXHRpZiAobXcuY29uZmlnLmdldChPUFRJT05TLmNvbmZpZ0tleSkpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCAkdGFyZ2V0OiBKUXVlcnkgPSAoJGVkaXRGb3JtIGFzIEpRdWVyeSkuZmluZChPUFRJT05TLnRhcmdldFdpa2lFZGl0b3IpO1xuXHRpZiAoISR0YXJnZXQubGVuZ3RoKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0bXcuY29uZmlnLnNldChPUFRJT05TLmNvbmZpZ0tleSwgdHJ1ZSk7XG5cblx0Y29uc3QgJGxheW91dCA9IGdlbmVyYXRlV2lraUVkaXRvckNoZWNrYm94TGF5b3V0KHtcblx0XHRpbnB1dElkOiBPUFRJT05TLmlucHV0SWQsXG5cdFx0bGFiZWw6IGdldE1lc3NhZ2UoJ1RoaXJkUGFydHlDb250ZW50Q29udGFpbmVkJyksXG5cdFx0JGVkaXRGb3JtOiAkZWRpdEZvcm0gYXMgSlF1ZXJ5LFxuXHRcdGNoYW5nZVRhZzogT1BUSU9OUy5jaGFuZ2VUYWcsXG5cdH0pO1xuXG5cdGlmICghJGJvZHkuZmluZChgIyR7T1BUSU9OUy5pbnB1dElkfWApLmxlbmd0aCkge1xuXHRcdCR0YXJnZXQuYXBwZW5kKCRsYXlvdXQpO1xuXHR9XG59O1xuXG5leHBvcnQge3Byb2Nlc3NXaWtpRWRpdG9yfTtcbiJdLAog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QVcsNEJBQTRCO0lBQzlDbEM7SUFDQTNCO0VBQ0QsQ0FBQztBQUVELE1BQUksQ0FBQ3FDLE1BQU1HLEtBQUEsSUFBQXhCLE9BQWlCZixPQUFPLENBQUUsRUFBRXdDLFFBQVE7QUFDOUNxRyxZQUFRTixPQUFPRCxPQUFPO0VBQ3ZCO0FBQ0Q7O0FSbkJBLE1BQUEsR0FBS25JLG1CQUFBNkksU0FBUSxFQUFFQyxLQUFLLFNBQVNDLFNBQVM5RyxPQUFzQztBQUMzRXNHLEtBQUdTLEtBQUssbUJBQW1CLEVBQUVDLElBQUsxSCxlQUFvQjtBQUNyRHFILHNCQUFrQjtNQUNqQjNHO01BQ0FWO0lBQ0QsQ0FBQztFQUNGLENBQUM7QUFFRGdILEtBQUdTLEtBQUssNEJBQTRCLEVBQUVDLElBQUksTUFBWTtBQUNyRFgsd0JBQW9CO01BQ25Cckc7SUFDRCxDQUFDO0VBQ0YsQ0FBQztBQUdEc0csS0FBR1MsS0FBSyx1QkFBdUIsRUFBRUMsSUFBSSxNQUFNO0FBQzFDLFFBQUlWLEdBQUdDLE9BQU9DLElBQVk5SSxTQUFTLEdBQUc7QUFDckM0SSxTQUFHQyxPQUFPRyxJQUFZaEosV0FBVyxLQUFLO0lBQ3ZDO0VBQ0QsQ0FBQztBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbImNvbmZpZ0tleSIsICJjaGFuZ2VUYWciLCAiaW5wdXRJZCIsICJ0YXJnZXRDbGFzc1ZlIiwgInRhcmdldFdpa2lFZGl0b3IiLCAiaW1wb3J0X2V4dF9nYWRnZXQyIiwgInJlcXVpcmUiLCAibW9kaWZ5VmlzdWFsRWRpdG9yQ2hhbmdlVGFnIiwgImNoYW5nZVRhZzIiLCAiY2hlY2tib3giLCAib24iLCAiX3dpbmRvdyR2ZSRpbml0JHRhcmdlIiwgIl93aW5kb3ckdmUkaW5pdCR0YXJnZTIiLCAiX3dpbmRvdyR2ZSRpbml0JHRhcmdlMyIsICJnZW5lcmF0ZUNoYW5nZVRhZ3MiLCAib3JpZ2luQ2hhbmdlVGFncyIsICJpc1NlbGVjdGVkIiwgImNvbmNhdCIsICJyZXBsYWNlIiwgImNoYW5nZVRhZ3MiLCAid2luZG93IiwgInZlIiwgImluaXQiLCAidGFyZ2V0IiwgInNhdmVGaWVsZHMiLCAid3BDaGFuZ2VUYWdzIiwgImNhbGwiLCAibW9kaWZ5V2lraUVkaXRvckNoYW5nZVRhZyIsICIkZWRpdEZvcm0iLCAiXyRvcmlnaW5XcENoYW5nZVRhZ3MkIiwgIl8kb3JpZ2luV3BDaGFuZ2VUYWdzJDIiLCAiJHdwQ2hhbmdlVGFncyIsICIkIiwgImF0dHIiLCAiaWQiLCAibmFtZSIsICJ0eXBlIiwgInZhbHVlIiwgIiRib2R5IiwgInBhcmVudHMiLCAiJG9yaWdpbldwQ2hhbmdlVGFncyIsICJmaW5kIiwgImxlbmd0aCIsICJwcmVwZW5kIiwgInZhbCIsICJ0b1N0cmluZyIsICJMSUNFTlNFUyIsICJsYWJlbCIsICJkYXRhIiwgInVybCIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJnZXRJMThuTWVzc2FnZXMiLCAiQWRkIiwgImxvY2FsaXplIiwgImVuIiwgInpoIiwgIkRlbGV0ZSIsICJTb3VyY2UiLCAiTGljZW5zZSIsICJUaGlyZFBhcnR5Q29udGVudENvbnRhaW5lZCIsICJRaXV3ZW5Db250ZW50Q29udGFpbmVkIiwgImkxOG5NZXNzYWdlcyIsICJnZXRNZXNzYWdlIiwgImtleSIsICJtb2RpZnlBdHRyaWJ1dGlvbiIsICJwYXJlbnRGaWVsZFNldCIsICJnZW5lcmF0ZUluZm9NYXJ0aXgiLCAiZmllbGRTZXRMYXlvdXQiLCAiaW5mb01hcnRpeCIsICJfaXRlcmF0b3IiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAiZ2V0SXRlbXMiLCAiX3N0ZXAiLCAicyIsICJuIiwgImRvbmUiLCAiZmllbGRzZXQiLCAiX2l0ZXJhdG9yMiIsICJfc3RlcDIiLCAiZmllbGRzIiwgImluZm8iLCAiX2l0ZXJhdG9yMyIsICJfc3RlcDMiLCAiZmllbGQiLCAiZ2V0RGF0YSIsICJlcnIiLCAiZSIsICJmIiwgImNvbnNvbGUiLCAibG9nIiwgImpvaW4iLCAiYXR0cmlidXRpb25zIiwgIiR3cEF0dHJpYnV0aW9ucyIsICIkb3JpZ2luV3BBdHRyaWJ1dGlvbnMiLCAiZ2VuZXJhdGVUZXh0SW5wdXRXaXRoRHJvcGRvd24iLCAiZ2V0VGV4dElucHV0IiwgInRleHRJbnB1dCIsICJPTyIsICJ1aSIsICJUZXh0SW5wdXRXaWRnZXQiLCAicGxhY2Vob2xkZXIiLCAiZ2V0RHJvcERvd24iLCAiZHJvcGRvd24iLCAiRHJvcGRvd25XaWRnZXQiLCAiJG92ZXJsYXkiLCAibWVudSIsICJpdGVtcyIsICJtYXAiLCAiTWVudU9wdGlvbldpZGdldCIsICJnZXRBZGRJdGVtQnV0dG9uIiwgIm9uQ2xpY2siLCAiYWRkSXRlbUJ1dHRvbiIsICJCdXR0b25JbnB1dFdpZGdldCIsICJhZGRJdGVtT25DbGljayIsICJmaWVsZFNldCIsICJhZGRJdGVtcyIsICJnZXRGb2xsb3dVcEZpZWxkc2V0IiwgImdldERlbGV0ZUl0ZW1CdXR0b24iLCAiZGVsZXRlSXRlbUJ1dHRvbiIsICJkZWxldGVJdGVtT25DbGljayIsICJpdGVtIiwgInJlbW92ZUl0ZW1zIiwgIkZpZWxkc2V0TGF5b3V0IiwgImluaXRpYWxGaWVsZHNldCIsICJGaWVsZExheW91dCIsICJhbGlnbiIsICJmb2xsb3dVcEZpZWxkc2V0IiwgImdlbmVyYXRlVmlzdWFsRWRpdG9yQ2hlY2tib3hMYXlvdXQiLCAiaW5wdXRJZDIiLCAiQ2hlY2tib3hJbnB1dFdpZGdldCIsICJzZWxlY3RlZCIsICJzZXRJbnB1dElkIiwgInRleHRJbnB1dFdpdGhEcm9wZG93biIsICIkZWxlbWVudCIsICJwcm9wIiwgImNoZWNrYm94TGF5b3V0IiwgIiRsYXlvdXQiLCAiYXBwZW5kIiwgImdlbmVyYXRlV2lraUVkaXRvckNoZWNrYm94TGF5b3V0IiwgInByb2Nlc3NWaXN1YWxFZGl0b3IiLCAibXciLCAiY29uZmlnIiwgImdldCIsICIkdGFyZ2V0IiwgInNldCIsICJwcm9jZXNzV2lraUVkaXRvciIsICJnZXRCb2R5IiwgInRoZW4iLCAiZWRpdEZvcm0iLCAiaG9vayIsICJhZGQiXQp9Cg==

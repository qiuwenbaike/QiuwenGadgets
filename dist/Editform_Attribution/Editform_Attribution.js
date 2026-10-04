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
//! src/Editform_Attribution/Editform_Attribution.ts
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
var import_ext_gadget2 = require("ext.gadget.Util");
//! src/Editform_Attribution/options.json
var configKey = "gadget-Editform_Attribution__Initialized";
var configKeyVe = "gadget-Editform_Attribution__Initialized__VE";
var inputId = "editform_attribution";
var targetWikiEditor = ".editCheckboxes .oo-ui-horizontalLayout";
//! src/Editform_Attribution/modules/util/Editform_Attribution.module.less
var formWrap = "Editform-Attribution-module__formWrap_m5j2Ua__4100";
//! src/Editform_Attribution/modules/i18n.ts
var import_ext_gadget = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    "Add to Edit Summary": (0, import_ext_gadget.localize)({
      en: "Add to Edit Summary",
      "zh-hans": "添加至编辑摘要",
      "zh-hant": "添加至編輯摘要"
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
    "Other License": (0, import_ext_gadget.localize)({
      en: "Other license",
      "zh-hans": "其他许可证",
      "zh-hant": "其他許可證"
    }),
    "Please Claim Sources and Licenses": (0, import_ext_gadget.localize)({
      en: "If edit content adds any third-party content, please add the source and license of the third-party content separately to the editing summary.",
      "zh-hans": "若您向编辑内容中添加了第三方撰写的内容，请将相关第三方内容的来源、许可条款在编辑摘要中分条声明",
      "zh-hant": "若您向編輯內容中添加了第三方撰写的內容，請將相关第三方內容的來源、許可條款在編輯摘要中分條聲明"
    }),
    "Replace With License": (0, import_ext_gadget.localize)({
      en: " (Replace with license name and URL)",
      "zh-hans": "（请替换为许可证名称和网址）",
      "zh-hant": "（請替換爲許可證名稱和網址）"
    }),
    "Please replace placeholder with actual license": (0, import_ext_gadget.localize)({
      en: "Please replace placeholder with actual license.",
      "zh-hans": "请将占位符替换为实际许可证。",
      "zh-hant": "請將占位符替換爲實際許可證。"
    }),
    "License is missing": (0, import_ext_gadget.localize)({
      en: "License is missing!",
      "zh-hans": "请选择对应的许可证！",
      "zh-hant": "請選擇對應的許可證！"
    }),
    "Source is missing": (0, import_ext_gadget.localize)({
      en: "Source is missing!",
      "zh-hans": "请填写对应的来源！",
      "zh-hant": "請填寫對應的來源！"
    }),
    "Both source and License are missing": (0, import_ext_gadget.localize)({
      en: "Both source and License are missing!",
      "zh-hans": "请填写对应的来源，并选择对应的许可证！",
      "zh-hant": "請填寫對應的來源，並選擇對應的許可證！"
    })
  };
};
var i18nMessages = getI18nMessages();
var getMessage = (key) => {
  return i18nMessages[key] || key;
};
//! src/Editform_Attribution/modules/constant.ts
var {
  wgNamespaceIds
} = mw.config.get();
var LICENSES = [{
  label: "CC BY-SA 4.0",
  data: "cc-by-sa:4.0"
}, {
  label: "CC BY-SA 3.0",
  data: "cc-by-sa:3.0"
}, {
  label: "CC BY-SA 3.0 CN",
  data: "cc-by-sa:3.0/cn"
}, {
  label: "CC BY 4.0",
  data: "cc-by:4.0"
}, {
  label: "CC BY 3.0",
  data: "cc-by:3.0"
}, {
  label: "CC BY 3.0 CN",
  data: "cc-by:3.0/cn"
}, {
  label: "CC0-1.0",
  data: "cc-zero:1.0"
}, {
  label: "KOGL Type I: Attribution",
  data: "https://www.kogl.or.kr/info/licenseType1.do"
}, {
  label: getMessage("Other License"),
  data: getMessage("Replace With License")
}];
var VALID_INTERWIKI_PREFIX = ["cc-by", "cc-by-sa", "cc-zero", "cc0", "commons", "enwiki", "incubator", "incubator-wp-mnc", "incubator-wt-mnc", "iso639-3", "lexemes", "licence", "licencewiki", "license", "login", "loginqiuwenbaike", "loginwiki", "mediawikiwiki", "mozillawiki", "mw", "oldwikisource", "pmid", "qiuwenbaike", "rev", "testwikidata", "v", "voy", "wiki", "wikibooks", "wikidata", "wikifunctions", "wikinews", "wikipedia", "wikiquote", "wikisource", "wikiversity", "wikivoyage", "wikt", "wiktionary", "zhqiuwenbaike", "zhwiki", "zhwikisource", "zhwikivoyage"];
var VALID_INTERNAL_PREFIX = [];
for (_i = 0, _Object$entries = Object.entries(wgNamespaceIds); _i < _Object$entries.length; _i++) {
  const [namespaceName, id] = _Object$entries[_i];
  if (id === 0) {
    continue;
  }
  VALID_INTERNAL_PREFIX[VALID_INTERNAL_PREFIX.length] = namespaceName;
}
var _i;
var _Object$entries;
//! src/Editform_Attribution/modules/util/getLink.ts
var getLink = ({
  link,
  text
}) => {
  const VALID_INTERWIKI_LINK_REGEX = new RegExp("^:?(".concat(VALID_INTERWIKI_PREFIX.join("|"), ")"), "i");
  const VALID_INTERNAL_PREFIX_REGEX = new RegExp("^:?(".concat(VALID_INTERNAL_PREFIX.join("|"), ")"), "i");
  if ([getMessage("Replace With License"), getMessage("Other License")].includes(link) || text && [getMessage("Replace With License"), getMessage("Other License")].includes(text)) {
    return getMessage("Replace With License");
  }
  if (link.startsWith("[[") && link.endsWith("]]")) {
    return link;
  }
  if (link.startsWith("http://") || link.startsWith("https://")) {
    return "[".concat(encodeURI(decodeURI(link)), " ]");
  }
  if (VALID_INTERWIKI_LINK_REGEX.test(link)) {
    link = ":".concat(link.replace(/^:/, ""));
    if (text) {
      return "[[".concat(link, "|").concat(text, "]]");
    }
    return "[[".concat(link, "]]");
  }
  if (VALID_INTERNAL_PREFIX_REGEX.test(link)) {
    link = ":".concat(link.replace(/^:/, ""));
    if (text) {
      return "[[".concat(link, "|").concat(text, "]]");
    }
    return "[[".concat(link, "]]");
  }
  return link;
};
//! src/Editform_Attribution/modules/util/getLicense.ts
var getLicense = (fieldSetLayout) => {
  let license = "";
  const getSelectedItem = (dropdown) => {
    const selectedItem = dropdown.getMenu().findSelectedItem();
    return selectedItem;
  };
  const getSelectedValue = (dropdown) => {
    const selectedItem = getSelectedItem(dropdown);
    return selectedItem ? selectedItem.getData() : void 0;
  };
  const getSelectedLabel = (dropdown) => {
    const selectedItem = getSelectedItem(dropdown);
    return selectedItem ? selectedItem.getLabel() : void 0;
  };
  var _iterator = _createForOfIteratorHelper(fieldSetLayout.getItems()), _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done; ) {
      const attributionFieldset = _step.value;
      var _iterator2 = _createForOfIteratorHelper(attributionFieldset.getItems()), _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
          const fieldLayout = _step2.value;
          const field = fieldLayout.getField();
          if (field.supports("getMenu")) {
            const link = getSelectedValue(field);
            if (link) {
              const text = getSelectedLabel(field);
              if (text) {
                license = getLink({
                  link,
                  text
                });
              } else {
                license = getLink({
                  link
                });
              }
            }
          }
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
  return license;
};
var updateWpLicense = ({
  $body,
  parentFieldSet
}) => {
  let wpLicense = "";
  const $wpLicense = $body.find("input[name=wpLicense]") || $("<input>").attr({
    id: "wpLicense",
    name: "wpLicense",
    type: "hidden",
    value: ""
  }).prependTo($body);
  wpLicense = getLicense(parentFieldSet);
  $wpLicense.val(wpLicense);
};
//! src/Editform_Attribution/modules/util/getSource.ts
var getSource = (fieldSetLayout) => {
  let source = "";
  var _iterator3 = _createForOfIteratorHelper(fieldSetLayout.getItems()), _step3;
  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
      const attributionFieldset = _step3.value;
      var _iterator4 = _createForOfIteratorHelper(attributionFieldset.getItems()), _step4;
      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
          const fieldLayout = _step4.value;
          const field = fieldLayout.getField();
          if (field.supports("getValue")) {
            const link = field.getValue();
            if (link) {
              source = getLink({
                link
              });
            }
          }
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }
  return source;
};
var updateWpSource = ({
  $body,
  parentFieldSet
}) => {
  let wpSource = "";
  const $wpSource = $body.find("input[name=wpSource]") || $("<input>").attr({
    id: "wpSource",
    name: "wpSource",
    type: "hidden",
    value: ""
  }).prependTo($body);
  wpSource = getSource(parentFieldSet);
  $wpSource.val(wpSource);
};
//! src/Editform_Attribution/modules/util/appendTextToSummary.ts
var appendTextToSummary = ({
  customSummary,
  $wpSummary
}) => {
  var _$wpSummary$val;
  const originSummary = (_$wpSummary$val = $wpSummary.val()) !== null && _$wpSummary$val !== void 0 ? _$wpSummary$val : "";
  $wpSummary.val(originSummary.trim() ? "".concat(originSummary, " ").concat(customSummary) : customSummary).trigger("change");
};
//! src/Editform_Attribution/modules/util/generateTextInputWithDropdown.ts
var getTextInput = (...onChanges) => {
  const textInput = new OO.ui.TextInputWidget({
    placeholder: getMessage("Source")
  });
  for (var _i2 = 0, _onChanges = onChanges; _i2 < _onChanges.length; _i2++) {
    const onChange = _onChanges[_i2];
    textInput.on("change", onChange);
  }
  return textInput;
};
var getDropDown = (...onSelects) => {
  const dropdown = new OO.ui.DropdownWidget({
    label: getMessage("License")
  });
  const menuOptions = [];
  for (var _i3 = 0, _LICENSES = LICENSES; _i3 < _LICENSES.length; _i3++) {
    const {
      data,
      label
    } = _LICENSES[_i3];
    menuOptions[menuOptions.length] = new OO.ui.MenuOptionWidget({
      data,
      label
    });
  }
  dropdown.getMenu().addItems(menuOptions);
  for (var _i4 = 0, _onSelects = onSelects; _i4 < _onSelects.length; _i4++) {
    const onSelect = _onSelects[_i4];
    dropdown.getMenu().on("select", onSelect);
  }
  return dropdown;
};
var getAddItemButton = (...onClicks) => {
  const addItemButton = new OO.ui.ButtonInputWidget({
    label: getMessage("Add to Edit Summary")
  });
  for (var _i5 = 0, _onClicks = onClicks; _i5 < _onClicks.length; _i5++) {
    const onClick = _onClicks[_i5];
    addItemButton.on("click", onClick);
  }
  return addItemButton;
};
var generateTextInputWithDropdown = ({
  $body,
  $wpSummary
}) => {
  const initialFieldset = new OO.ui.FieldsetLayout();
  const parentFieldSet = new OO.ui.FieldsetLayout({
    label: getMessage("Please Claim Sources and Licenses")
  });
  const textInputOnChange = () => {
    updateWpSource({
      $body,
      parentFieldSet
    });
  };
  const textInput = getTextInput(textInputOnChange);
  const dropDownOnChange = () => {
    updateWpLicense({
      $body,
      parentFieldSet
    });
  };
  const dropDown = getDropDown(dropDownOnChange);
  const addItemOnClick = () => {
    let wpSource = "";
    let wpLicense = "";
    const $wpSource = $body.find("input[name=wpSource]") || $("<input>").attr({
      id: "wpSource",
      name: "wpSource",
      type: "hidden",
      value: ""
    }).prependTo($body);
    const $wpLicense = $body.find("input[name=wpLicense]") || $("<input>").attr({
      id: "wpLicense",
      name: "wpLicense",
      type: "hidden",
      value: ""
    }).prependTo($body);
    wpSource = getSource(parentFieldSet);
    wpLicense = getLicense(parentFieldSet);
    $wpSource.val(wpSource);
    $wpLicense.val(wpLicense);
    if (wpSource.length && wpLicense.length) {
      const attribution = "".concat(getMessage("Source"), ": ").concat(wpSource, " (").concat(getMessage("License"), ": ").concat(wpLicense, ") ");
      if ([getMessage("Replace With License"), getMessage("Other License")].includes(wpLicense)) {
        void OO.ui.alert(getMessage("Please replace placeholder with actual license"), {
          size: "medium"
        });
      }
      appendTextToSummary({
        customSummary: attribution ? "[".concat(attribution, "]") : "",
        $wpSummary
      });
      textInput.setValue("");
      dropDown.getMenu().unselectItem();
    } else if (!wpSource.length && wpLicense.length) {
      void OO.ui.alert(getMessage("Source is missing"), {
        size: "medium"
      });
    } else if (wpSource.length && !wpLicense.length) {
      void OO.ui.alert(getMessage("License is missing"), {
        size: "medium"
      });
    } else {
      void OO.ui.alert(getMessage("Both source and License are missing"), {
        size: "medium"
      });
    }
  };
  const addItemButton = getAddItemButton(addItemOnClick);
  initialFieldset.addItems([
    // @ts-expect-error TS2304
    new OO.ui.FieldLayout(textInput, {
      label: getMessage("Source"),
      align: "inline"
    }),
    // @ts-expect-error TS2304
    new OO.ui.FieldLayout(dropDown, {
      label: getMessage("License"),
      align: "inline"
    }),
    // @ts-expect-error TS2304
    new OO.ui.FieldLayout(addItemButton, {
      align: "inline"
    })
  ]);
  parentFieldSet.addItems([initialFieldset]);
  return parentFieldSet;
};
//! src/Editform_Attribution/modules/util/generateLayout.ts
var generateVisualEditorLayout = ({
  $body
}) => {
  const {
    target
  } = window.ve.init;
  const $wpSummary = target.saveDialog.editSummaryInput.$input;
  const textInputWithDropdown = generateTextInputWithDropdown({
    $body,
    $wpSummary
  });
  const $layout = $("<div>").attr("id", inputId).addClass(formWrap);
  $layout.append(textInputWithDropdown.$element);
  return $layout;
};
var generateWikiEditorLayout = ({
  $body,
  $editForm
}) => {
  const $wpSummary = $editForm.find("input[name=wpSummary]");
  const textInputWithDropdown = generateTextInputWithDropdown({
    $body,
    $wpSummary
  });
  const $layout = $("<div>").attr("id", inputId).addClass(formWrap);
  $layout.append(textInputWithDropdown.$element);
  return $layout;
};
//! src/Editform_Attribution/modules/processVisualEditor.ts
var processVisualEditor = ({
  $body
}) => {
  if (mw.config.get(configKeyVe)) {
    return;
  }
  const {
    target
  } = window.ve.init;
  const {
    saveDialog
  } = target;
  const {
    $saveOptions
  } = saveDialog;
  if (!$saveOptions.length) {
    return;
  }
  mw.config.set(configKeyVe, true);
  const $layout = generateVisualEditorLayout({
    $body
  });
  if (!$body.find("#".concat(inputId)).length) {
    $saveOptions.append($layout);
  }
  mw.hook("ve.activationComplete").add(() => {
    if (mw.config.get(configKeyVe)) {
      mw.config.set(configKeyVe, false);
    }
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
  const $layout = generateWikiEditorLayout({
    $body,
    $editForm
  });
  if (!$body.find("#".concat(inputId)).length) {
    $target.after($layout);
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
});

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0VkaXRmb3JtX0F0dHJpYnV0aW9uL0VkaXRmb3JtX0F0dHJpYnV0aW9uLnRzIiwgInNyYy9FZGl0Zm9ybV9BdHRyaWJ1dGlvbi9vcHRpb25zLmpzb24iLCAic3JjL0VkaXRmb3JtX0F0dHJpYnV0aW9uL21vZHVsZXMvdXRpbC9FZGl0Zm9ybV9BdHRyaWJ1dGlvbi5tb2R1bGUubGVzcyIsICJzcmMvRWRpdGZvcm1fQXR0cmlidXRpb24vbW9kdWxlcy9pMThuLnRzIiwgInNyYy9FZGl0Zm9ybV9BdHRyaWJ1dGlvbi9tb2R1bGVzL2NvbnN0YW50LnRzIiwgInNyYy9FZGl0Zm9ybV9BdHRyaWJ1dGlvbi9tb2R1bGVzL3V0aWwvZ2V0TGluay50cyIsICJzcmMvRWRpdGZvcm1fQXR0cmlidXRpb24vbW9kdWxlcy91dGlsL2dldExpY2Vuc2UudHMiLCAic3JjL0VkaXRmb3JtX0F0dHJpYnV0aW9uL21vZHVsZXMvdXRpbC9nZXRTb3VyY2UudHMiLCAic3JjL0VkaXRmb3JtX0F0dHJpYnV0aW9uL21vZHVsZXMvdXRpbC9hcHBlbmRUZXh0VG9TdW1tYXJ5LnRzIiwgInNyYy9FZGl0Zm9ybV9BdHRyaWJ1dGlvbi9tb2R1bGVzL3V0aWwvZ2VuZXJhdGVUZXh0SW5wdXRXaXRoRHJvcGRvd24udHMiLCAic3JjL0VkaXRmb3JtX0F0dHJpYnV0aW9uL21vZHVsZXMvdXRpbC9nZW5lcmF0ZUxheW91dC50cyIsICJzcmMvRWRpdGZvcm1fQXR0cmlidXRpb24vbW9kdWxlcy9wcm9jZXNzVmlzdWFsRWRpdG9yLnRzIiwgInNyYy9FZGl0Zm9ybV9BdHRyaWJ1dGlvbi9tb2R1bGVzL3Byb2Nlc3NXaWtpRWRpdG9yLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQge2dldEJvZHl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5pbXBvcnQge3Byb2Nlc3NWaXN1YWxFZGl0b3J9IGZyb20gJy4vbW9kdWxlcy9wcm9jZXNzVmlzdWFsRWRpdG9yJztcbmltcG9ydCB7cHJvY2Vzc1dpa2lFZGl0b3J9IGZyb20gJy4vbW9kdWxlcy9wcm9jZXNzV2lraUVkaXRvcic7XG5cbi8qKlxuICogQGRlc2NyaXB0aW9uIOesrOS4ieaWueadpea6kOeJueauiuWjsOaYjlxuICovXG52b2lkIGdldEJvZHkoKS50aGVuKGZ1bmN0aW9uIGVkaXRGb3JtKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQge1xuXHRtdy5ob29rKCd3aWtpcGFnZS5lZGl0Zm9ybScpLmFkZCgoJGVkaXRGb3JtKTogdm9pZCA9PiB7XG5cdFx0cHJvY2Vzc1dpa2lFZGl0b3Ioe1xuXHRcdFx0JGJvZHksXG5cdFx0XHQkZWRpdEZvcm0sXG5cdFx0fSk7XG5cdH0pO1xuXG5cdG13Lmhvb2soJ3ZlLnNhdmVEaWFsb2cuc3RhdGVDaGFuZ2VkJykuYWRkKCgpOiB2b2lkID0+IHtcblx0XHRwcm9jZXNzVmlzdWFsRWRpdG9yKHskYm9keX0pO1xuXHR9KTtcbn0pO1xuIiwgIntcblx0XCJjb25maWdLZXlcIjogXCJnYWRnZXQtRWRpdGZvcm1fQXR0cmlidXRpb25fX0luaXRpYWxpemVkXCIsXG5cdFwiY29uZmlnS2V5VmVcIjogXCJnYWRnZXQtRWRpdGZvcm1fQXR0cmlidXRpb25fX0luaXRpYWxpemVkX19WRVwiLFxuXHRcImlucHV0SWRcIjogXCJlZGl0Zm9ybV9hdHRyaWJ1dGlvblwiLFxuXHRcInRhcmdldFdpa2lFZGl0b3JcIjogXCIuZWRpdENoZWNrYm94ZXMgLm9vLXVpLWhvcml6b250YWxMYXlvdXRcIlxufVxuIiwgImltcG9ydCBcImVzYnVpbGQtY3NzLW1vZHVsZXMtcGx1Z2luLW5zLWNzczpzcmMvRWRpdGZvcm1fQXR0cmlidXRpb24vbW9kdWxlcy91dGlsL0VkaXRmb3JtX0F0dHJpYnV0aW9uLm1vZHVsZS5sZXNzXCI7XG5leHBvcnQgY29uc3QgZm9ybVdyYXAgPSBcIkVkaXRmb3JtLUF0dHJpYnV0aW9uLW1vZHVsZV9fZm9ybVdyYXBfbTVqMlVhX180MTAwXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgXCJmb3JtV3JhcFwiOiBmb3JtV3JhcFxufTtcbiAgICAgICIsICJpbXBvcnQge2xvY2FsaXplfSBmcm9tICdleHQuZ2FkZ2V0LmkxOG4nO1xuXG5jb25zdCBnZXRJMThuTWVzc2FnZXMgPSAoKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0J0FkZCB0byBFZGl0IFN1bW1hcnknOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0FkZCB0byBFZGl0IFN1bW1hcnknLFxuXHRcdFx0J3poLWhhbnMnOiAn5re75Yqg6Iez57yW6L6R5pGY6KaBJyxcblx0XHRcdCd6aC1oYW50JzogJ+a3u+WKoOiHs+e3qOi8r+aRmOimgScsXG5cdFx0fSksXG5cdFx0U291cmNlOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1NvdXJjZScsXG5cdFx0XHQnemgtaGFucyc6ICflhoXlrrnmnaXmupAnLFxuXHRcdFx0J3poLWhhbnQnOiAn5YWn5a655L6G5rqQJyxcblx0XHR9KSxcblx0XHRMaWNlbnNlOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0xpY2Vuc2UnLFxuXHRcdFx0J3poLWhhbnMnOiAn6K645Y+v6K+BJyxcblx0XHRcdCd6aC1oYW50JzogJ+ioseWPr+itiScsXG5cdFx0fSksXG5cdFx0J090aGVyIExpY2Vuc2UnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ090aGVyIGxpY2Vuc2UnLFxuXHRcdFx0J3poLWhhbnMnOiAn5YW25LuW6K645Y+v6K+BJyxcblx0XHRcdCd6aC1oYW50JzogJ+WFtuS7luioseWPr+itiScsXG5cdFx0fSksXG5cdFx0J1BsZWFzZSBDbGFpbSBTb3VyY2VzIGFuZCBMaWNlbnNlcyc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnSWYgZWRpdCBjb250ZW50IGFkZHMgYW55IHRoaXJkLXBhcnR5IGNvbnRlbnQsIHBsZWFzZSBhZGQgdGhlIHNvdXJjZSBhbmQgbGljZW5zZSBvZiB0aGUgdGhpcmQtcGFydHkgY29udGVudCBzZXBhcmF0ZWx5IHRvIHRoZSBlZGl0aW5nIHN1bW1hcnkuJyxcblx0XHRcdCd6aC1oYW5zJzogJ+iLpeaCqOWQkee8lui+keWGheWuueS4rea3u+WKoOS6huesrOS4ieaWueaSsOWGmeeahOWGheWuue+8jOivt+WwhuebuOWFs+esrOS4ieaWueWGheWuueeahOadpea6kOOAgeiuuOWPr+adoeasvuWcqOe8lui+keaRmOimgeS4reWIhuadoeWjsOaYjicsXG5cdFx0XHQnemgtaGFudCc6ICfoi6XmgqjlkJHnt6jovK/lhaflrrnkuK3mt7vliqDkuobnrKzkuInmlrnmkrDlhpnnmoTlhaflrrnvvIzoq4vlsIfnm7jlhbPnrKzkuInmlrnlhaflrrnnmoTkvobmupDjgIHoqLHlj6/mop3mrL7lnKjnt6jovK/mkZjopoHkuK3liIbmop3ogbLmmI4nLFxuXHRcdH0pLFxuXHRcdCdSZXBsYWNlIFdpdGggTGljZW5zZSc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnIChSZXBsYWNlIHdpdGggbGljZW5zZSBuYW1lIGFuZCBVUkwpJyxcblx0XHRcdCd6aC1oYW5zJzogJ++8iOivt+abv+aNouS4uuiuuOWPr+ivgeWQjeensOWSjOe9keWdgO+8iScsXG5cdFx0XHQnemgtaGFudCc6ICfvvIjoq4vmm7/mj5vniLLoqLHlj6/orYnlkI3nqLHlkozntrLlnYDvvIknLFxuXHRcdH0pLFxuXHRcdCdQbGVhc2UgcmVwbGFjZSBwbGFjZWhvbGRlciB3aXRoIGFjdHVhbCBsaWNlbnNlJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdQbGVhc2UgcmVwbGFjZSBwbGFjZWhvbGRlciB3aXRoIGFjdHVhbCBsaWNlbnNlLicsXG5cdFx0XHQnemgtaGFucyc6ICfor7flsIbljaDkvY3nrKbmm7/mjaLkuLrlrp7pmYXorrjlj6/or4HjgIInLFxuXHRcdFx0J3poLWhhbnQnOiAn6KuL5bCH5Y2g5L2N56ym5pu/5o+b54iy5a+m6Zqb6Kix5Y+v6K2J44CCJyxcblx0XHR9KSxcblx0XHQnTGljZW5zZSBpcyBtaXNzaW5nJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdMaWNlbnNlIGlzIG1pc3NpbmchJyxcblx0XHRcdCd6aC1oYW5zJzogJ+ivt+mAieaLqeWvueW6lOeahOiuuOWPr+ivge+8gScsXG5cdFx0XHQnemgtaGFudCc6ICfoq4vpgbjmk4flsI3mh4nnmoToqLHlj6/orYnvvIEnLFxuXHRcdH0pLFxuXHRcdCdTb3VyY2UgaXMgbWlzc2luZyc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnU291cmNlIGlzIG1pc3NpbmchJyxcblx0XHRcdCd6aC1oYW5zJzogJ+ivt+Whq+WGmeWvueW6lOeahOadpea6kO+8gScsXG5cdFx0XHQnemgtaGFudCc6ICfoq4vloavlr6vlsI3mh4nnmoTkvobmupDvvIEnLFxuXHRcdH0pLFxuXHRcdCdCb3RoIHNvdXJjZSBhbmQgTGljZW5zZSBhcmUgbWlzc2luZyc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQm90aCBzb3VyY2UgYW5kIExpY2Vuc2UgYXJlIG1pc3NpbmchJyxcblx0XHRcdCd6aC1oYW5zJzogJ+ivt+Whq+WGmeWvueW6lOeahOadpea6kO+8jOW5tumAieaLqeWvueW6lOeahOiuuOWPr+ivge+8gScsXG5cdFx0XHQnemgtaGFudCc6ICfoq4vloavlr6vlsI3mh4nnmoTkvobmupDvvIzkuKbpgbjmk4flsI3mh4nnmoToqLHlj6/orYnvvIEnLFxuXHRcdH0pLFxuXHR9O1xufTtcblxuY29uc3QgaTE4bk1lc3NhZ2VzID0gZ2V0STE4bk1lc3NhZ2VzKCk7XG5cbmNvbnN0IGdldE1lc3NhZ2U6IEdldE1lc3NhZ2VzPHR5cGVvZiBpMThuTWVzc2FnZXM+ID0gKGtleSkgPT4ge1xuXHRyZXR1cm4gaTE4bk1lc3NhZ2VzW2tleV0gfHwga2V5O1xufTtcblxuZXhwb3J0IHtnZXRNZXNzYWdlfTtcbiIsICJpbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vaTE4bic7XG5cbmNvbnN0IHt3Z05hbWVzcGFjZUlkc30gPSBtdy5jb25maWcuZ2V0KCk7XG5cbmNvbnN0IExJQ0VOU0VTID0gW1xuXHR7XG5cdFx0bGFiZWw6ICdDQyBCWS1TQSA0LjAnLFxuXHRcdGRhdGE6ICdjYy1ieS1zYTo0LjAnLFxuXHR9LFxuXHR7XG5cdFx0bGFiZWw6ICdDQyBCWS1TQSAzLjAnLFxuXHRcdGRhdGE6ICdjYy1ieS1zYTozLjAnLFxuXHR9LFxuXHR7XG5cdFx0bGFiZWw6ICdDQyBCWS1TQSAzLjAgQ04nLFxuXHRcdGRhdGE6ICdjYy1ieS1zYTozLjAvY24nLFxuXHR9LFxuXHR7XG5cdFx0bGFiZWw6ICdDQyBCWSA0LjAnLFxuXHRcdGRhdGE6ICdjYy1ieTo0LjAnLFxuXHR9LFxuXHR7XG5cdFx0bGFiZWw6ICdDQyBCWSAzLjAnLFxuXHRcdGRhdGE6ICdjYy1ieTozLjAnLFxuXHR9LFxuXHR7XG5cdFx0bGFiZWw6ICdDQyBCWSAzLjAgQ04nLFxuXHRcdGRhdGE6ICdjYy1ieTozLjAvY24nLFxuXHR9LFxuXHR7XG5cdFx0bGFiZWw6ICdDQzAtMS4wJyxcblx0XHRkYXRhOiAnY2MtemVybzoxLjAnLFxuXHR9LFxuXHR7XG5cdFx0bGFiZWw6ICdLT0dMIFR5cGUgSTogQXR0cmlidXRpb24nLFxuXHRcdGRhdGE6ICdodHRwczovL3d3dy5rb2dsLm9yLmtyL2luZm8vbGljZW5zZVR5cGUxLmRvJyxcblx0fSxcblx0e1xuXHRcdGxhYmVsOiBnZXRNZXNzYWdlKCdPdGhlciBMaWNlbnNlJyksXG5cdFx0ZGF0YTogZ2V0TWVzc2FnZSgnUmVwbGFjZSBXaXRoIExpY2Vuc2UnKSxcblx0fSxcbl07XG5cbmNvbnN0IFZBTElEX0lOVEVSV0lLSV9QUkVGSVggPSBbXG5cdCdjYy1ieScsXG5cdCdjYy1ieS1zYScsXG5cdCdjYy16ZXJvJyxcblx0J2NjMCcsXG5cdCdjb21tb25zJyxcblx0J2Vud2lraScsXG5cdCdpbmN1YmF0b3InLFxuXHQnaW5jdWJhdG9yLXdwLW1uYycsXG5cdCdpbmN1YmF0b3Itd3QtbW5jJyxcblx0J2lzbzYzOS0zJyxcblx0J2xleGVtZXMnLFxuXHQnbGljZW5jZScsXG5cdCdsaWNlbmNld2lraScsXG5cdCdsaWNlbnNlJyxcblx0J2xvZ2luJyxcblx0J2xvZ2lucWl1d2VuYmFpa2UnLFxuXHQnbG9naW53aWtpJyxcblx0J21lZGlhd2lraXdpa2knLFxuXHQnbW96aWxsYXdpa2knLFxuXHQnbXcnLFxuXHQnb2xkd2lraXNvdXJjZScsXG5cdCdwbWlkJyxcblx0J3FpdXdlbmJhaWtlJyxcblx0J3JldicsXG5cdCd0ZXN0d2lraWRhdGEnLFxuXHQndicsXG5cdCd2b3knLFxuXHQnd2lraScsXG5cdCd3aWtpYm9va3MnLFxuXHQnd2lraWRhdGEnLFxuXHQnd2lraWZ1bmN0aW9ucycsXG5cdCd3aWtpbmV3cycsXG5cdCd3aWtpcGVkaWEnLFxuXHQnd2lraXF1b3RlJyxcblx0J3dpa2lzb3VyY2UnLFxuXHQnd2lraXZlcnNpdHknLFxuXHQnd2lraXZveWFnZScsXG5cdCd3aWt0Jyxcblx0J3dpa3Rpb25hcnknLFxuXHQnemhxaXV3ZW5iYWlrZScsXG5cdCd6aHdpa2knLFxuXHQnemh3aWtpc291cmNlJyxcblx0J3pod2lraXZveWFnZScsXG5dO1xuXG5jb25zdCBWQUxJRF9JTlRFUk5BTF9QUkVGSVg6IHN0cmluZ1tdID0gW107XG5cbmZvciAoY29uc3QgW25hbWVzcGFjZU5hbWUsIGlkXSBvZiBPYmplY3QuZW50cmllcyh3Z05hbWVzcGFjZUlkcykpIHtcblx0aWYgKGlkID09PSAwKSB7XG5cdFx0Y29udGludWU7XG5cdH1cblx0VkFMSURfSU5URVJOQUxfUFJFRklYW1ZBTElEX0lOVEVSTkFMX1BSRUZJWC5sZW5ndGhdID0gbmFtZXNwYWNlTmFtZTtcbn1cblxuZXhwb3J0IHtMSUNFTlNFUywgVkFMSURfSU5URVJXSUtJX1BSRUZJWCwgVkFMSURfSU5URVJOQUxfUFJFRklYfTtcbiIsICJpbXBvcnQge1ZBTElEX0lOVEVSTkFMX1BSRUZJWCwgVkFMSURfSU5URVJXSUtJX1BSRUZJWH0gZnJvbSAnLi4vY29uc3RhbnQnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuLi9pMThuJztcblxuY29uc3QgZ2V0TGluayA9ICh7bGluaywgdGV4dH06IHtsaW5rOiBzdHJpbmc7IHRleHQ/OiBzdHJpbmd9KTogc3RyaW5nID0+IHtcblx0Y29uc3QgVkFMSURfSU5URVJXSUtJX0xJTktfUkVHRVggPSBuZXcgUmVnRXhwKGBeOj8oJHtWQUxJRF9JTlRFUldJS0lfUFJFRklYLmpvaW4oJ3wnKX0pYCwgJ2knKTtcblx0Y29uc3QgVkFMSURfSU5URVJOQUxfUFJFRklYX1JFR0VYID0gbmV3IFJlZ0V4cChgXjo/KCR7VkFMSURfSU5URVJOQUxfUFJFRklYLmpvaW4oJ3wnKX0pYCwgJ2knKTtcblxuXHQvLyDlvZPorrjlj6/or4HpgInmi6nigJzoh6rlrprkuYnigJ3vvIzov5Tlm57ljaDkvY3nrKZcblx0aWYgKFxuXHRcdFtnZXRNZXNzYWdlKCdSZXBsYWNlIFdpdGggTGljZW5zZScpLCBnZXRNZXNzYWdlKCdPdGhlciBMaWNlbnNlJyldLmluY2x1ZGVzKGxpbmspIHx8XG5cdFx0KHRleHQgJiYgW2dldE1lc3NhZ2UoJ1JlcGxhY2UgV2l0aCBMaWNlbnNlJyksIGdldE1lc3NhZ2UoJ090aGVyIExpY2Vuc2UnKV0uaW5jbHVkZXModGV4dCkpXG5cdCkge1xuXHRcdHJldHVybiBnZXRNZXNzYWdlKCdSZXBsYWNlIFdpdGggTGljZW5zZScpO1xuXHR9XG5cblx0Ly8g5b2T6ZO+5o6l5pys6Lqr5bCx5piv5pyJ5pWI55qE5YaF6YOo6ZO+5o6l77yM5L2G5LiN5pivSW50ZXJ3aWtp6ZO+5o6l5pe2XG5cdGlmIChsaW5rLnN0YXJ0c1dpdGgoJ1tbJykgJiYgbGluay5lbmRzV2l0aCgnXV0nKSkge1xuXHRcdHJldHVybiBsaW5rO1xuXHR9XG5cblx0Ly8g5b2T6ZO+5o6l5pys6Lqr5bCx5piv5pyJ5pWI55qEVVJM5pe2XG5cdGlmIChsaW5rLnN0YXJ0c1dpdGgoJ2h0dHA6Ly8nKSB8fCBsaW5rLnN0YXJ0c1dpdGgoJ2h0dHBzOi8vJykpIHtcblx0XHRyZXR1cm4gYFske2VuY29kZVVSSShkZWNvZGVVUkkobGluaykpfSBdYDsgLy8g5b2T6ZO+5o6l5LiN5piv5pyJ5pWI55qESW50ZXJ3aWtp6ZO+5o6l5pe277yM6L+U5Zue57yW56CB5ZCO55qE6ZO+5o6lXG5cdH1cblxuXHRpZiAoVkFMSURfSU5URVJXSUtJX0xJTktfUkVHRVgudGVzdChsaW5rKSkge1xuXHRcdGxpbmsgPSBgOiR7bGluay5yZXBsYWNlKC9eOi8sICcnKX1gOyAvLyDlpoLmnpzpk77mjqXmmK/mnInmlYjnmoRJbnRlcndpa2npk77mjqXvvIzliJnlnKjlvIDlpLTmt7vliqDlhpLlj7fku6XpmLLmraLlroPooqvop6PmnpDkuLrlhoXpg6jpk77mjqVcblx0XHRpZiAodGV4dCkge1xuXHRcdFx0cmV0dXJuIGBbWyR7bGlua318JHt0ZXh0fV1dYDtcblx0XHR9XG5cdFx0cmV0dXJuIGBbWyR7bGlua31dXWA7XG5cdH1cblxuXHRpZiAoVkFMSURfSU5URVJOQUxfUFJFRklYX1JFR0VYLnRlc3QobGluaykpIHtcblx0XHRsaW5rID0gYDoke2xpbmsucmVwbGFjZSgvXjovLCAnJyl9YDsgLy8g5aaC5p6c6ZO+5o6l5piv5pyJ5pWI55qE5YaF6YOo6ZO+5o6l77yM5YiZ5Zyo5byA5aS05re75Yqg5YaS5Y+35Lul6Ziy5q2i5a6D6KKr6Kej5p6Q5Li65YaF6YOo6ZO+5o6lXG5cdFx0aWYgKHRleHQpIHtcblx0XHRcdHJldHVybiBgW1ske2xpbmt9fCR7dGV4dH1dXWA7XG5cdFx0fVxuXHRcdHJldHVybiBgW1ske2xpbmt9XV1gO1xuXHR9XG5cblx0cmV0dXJuIGxpbms7IC8vIOW9k+mTvuaOpeS4jeaYr+mTvuaOpeaXtu+8jOi/lOWbnuWOn+aWh1xufTtcblxuZXhwb3J0IHtnZXRMaW5rfTtcbiIsICJpbXBvcnQge2dldExpbmt9IGZyb20gJy4vZ2V0TGluayc7XG5cbi8vIEB0cy1leHBlY3QtZXJyb3IgVFMyNTAzXG5jb25zdCBnZXRMaWNlbnNlID0gKGZpZWxkU2V0TGF5b3V0OiBPTy51aS5GaWVsZHNldExheW91dCkgPT4ge1xuXHRsZXQgbGljZW5zZTogc3RyaW5nID0gJyc7XG5cblx0Ly8gQHRzLWV4cGVjdC1lcnJvciBUUzI1MDNcblx0Y29uc3QgZ2V0U2VsZWN0ZWRJdGVtID0gKGRyb3Bkb3duOiBPTy51aS5Ecm9wZG93bldpZGdldCk6IE9PLnVpLk9wdGlvbldpZGdldCB8IG51bGwgPT4ge1xuXHRcdC8vIEB0cy1leHBlY3QtZXJyb3IgVFMyNTAzXG5cdFx0Y29uc3Qgc2VsZWN0ZWRJdGVtOiBPTy51aS5PcHRpb25XaWRnZXQgfCBudWxsID0gZHJvcGRvd25cblx0XHRcdC5nZXRNZW51KClcblx0XHRcdC8vIEB0cy1leHBlY3QtZXJyb3IgVFMyNTAzXG5cdFx0XHQuZmluZFNlbGVjdGVkSXRlbSgpIGFzIE9PLnVpLk9wdGlvbldpZGdldCB8IG51bGw7XG5cdFx0cmV0dXJuIHNlbGVjdGVkSXRlbTtcblx0fTtcblxuXHQvLyBAdHMtZXhwZWN0LWVycm9yIFRTMjUwM1xuXHRjb25zdCBnZXRTZWxlY3RlZFZhbHVlID0gKGRyb3Bkb3duOiBPTy51aS5Ecm9wZG93bldpZGdldCk6IHN0cmluZyB8IHVuZGVmaW5lZCA9PiB7XG5cdFx0Y29uc3Qgc2VsZWN0ZWRJdGVtID0gZ2V0U2VsZWN0ZWRJdGVtKGRyb3Bkb3duKTtcblx0XHRyZXR1cm4gc2VsZWN0ZWRJdGVtID8gKHNlbGVjdGVkSXRlbS5nZXREYXRhKCkgYXMgc3RyaW5nKSA6IHVuZGVmaW5lZDtcblx0fTtcblxuXHQvLyBAdHMtZXhwZWN0LWVycm9yIFRTMjUwM1xuXHRjb25zdCBnZXRTZWxlY3RlZExhYmVsID0gKGRyb3Bkb3duOiBPTy51aS5Ecm9wZG93bldpZGdldCk6IHN0cmluZyB8IHVuZGVmaW5lZCA9PiB7XG5cdFx0Y29uc3Qgc2VsZWN0ZWRJdGVtID0gZ2V0U2VsZWN0ZWRJdGVtKGRyb3Bkb3duKTtcblx0XHRyZXR1cm4gc2VsZWN0ZWRJdGVtID8gKHNlbGVjdGVkSXRlbS5nZXRMYWJlbCgpIGFzIHN0cmluZykgOiB1bmRlZmluZWQ7XG5cdH07XG5cblx0Ly8gQHRzLWV4cGVjdC1lcnJvciBUUzI1MDNcblx0Zm9yIChjb25zdCBhdHRyaWJ1dGlvbkZpZWxkc2V0IG9mIGZpZWxkU2V0TGF5b3V0LmdldEl0ZW1zKCkgYXMgT08udWkuRmllbGRzZXRMYXlvdXRbXSkge1xuXHRcdC8vIEB0cy1leHBlY3QtZXJyb3IgVFMyNTAzXG5cdFx0Zm9yIChjb25zdCBmaWVsZExheW91dCBvZiBhdHRyaWJ1dGlvbkZpZWxkc2V0LmdldEl0ZW1zKCkgYXMgT08udWkuRmllbGRMYXlvdXRbXSkge1xuXHRcdFx0Y29uc3QgZmllbGQgPSBmaWVsZExheW91dC5nZXRGaWVsZCgpO1xuXG5cdFx0XHRpZiAoZmllbGQuc3VwcG9ydHMoJ2dldE1lbnUnKSkge1xuXHRcdFx0XHQvLyBAdHMtZXhwZWN0LWVycm9yIFRTMjUwM1xuXHRcdFx0XHRjb25zdCBsaW5rID0gZ2V0U2VsZWN0ZWRWYWx1ZShmaWVsZCBhcyBPTy51aS5Ecm9wZG93bldpZGdldCk7XG5cblx0XHRcdFx0aWYgKGxpbmspIHtcblx0XHRcdFx0XHQvLyBAdHMtZXhwZWN0LWVycm9yIFRTMjUwM1xuXHRcdFx0XHRcdGNvbnN0IHRleHQgPSBnZXRTZWxlY3RlZExhYmVsKGZpZWxkIGFzIE9PLnVpLkRyb3Bkb3duV2lkZ2V0KTtcblxuXHRcdFx0XHRcdGlmICh0ZXh0KSB7XG5cdFx0XHRcdFx0XHRsaWNlbnNlID0gZ2V0TGluayh7bGluaywgdGV4dH0pO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRsaWNlbnNlID0gZ2V0TGluayh7bGlua30pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiBsaWNlbnNlO1xufTtcblxuY29uc3QgdXBkYXRlV3BMaWNlbnNlID0gKHtcblx0JGJvZHksXG5cdHBhcmVudEZpZWxkU2V0LFxufToge1xuXHQkYm9keTogSlF1ZXJ5PEhUTUxFbGVtZW50Pjtcblx0Ly8gQHRzLWV4cGVjdC1lcnJvciBUUzI1MDNcblx0cGFyZW50RmllbGRTZXQ6IE9PLnVpLkZpZWxkc2V0TGF5b3V0O1xufSkgPT4ge1xuXHRsZXQgd3BMaWNlbnNlOiBzdHJpbmcgPSAnJztcblxuXHRjb25zdCAkd3BMaWNlbnNlOiBKUXVlcnk8SFRNTElucHV0RWxlbWVudD4gPVxuXHRcdCRib2R5LmZpbmQ8SFRNTElucHV0RWxlbWVudD4oJ2lucHV0W25hbWU9d3BMaWNlbnNlXScpIHx8XG5cdFx0JCgnPGlucHV0PicpXG5cdFx0XHQuYXR0cih7XG5cdFx0XHRcdGlkOiAnd3BMaWNlbnNlJyxcblx0XHRcdFx0bmFtZTogJ3dwTGljZW5zZScsXG5cdFx0XHRcdHR5cGU6ICdoaWRkZW4nLFxuXHRcdFx0XHR2YWx1ZTogJycsXG5cdFx0XHR9KVxuXHRcdFx0LnByZXBlbmRUbygkYm9keSk7XG5cblx0d3BMaWNlbnNlID0gZ2V0TGljZW5zZShwYXJlbnRGaWVsZFNldCk7XG5cdCR3cExpY2Vuc2UudmFsKHdwTGljZW5zZSk7XG59O1xuXG5leHBvcnQge2dldExpY2Vuc2UsIHVwZGF0ZVdwTGljZW5zZX07XG4iLCAiaW1wb3J0IHtnZXRMaW5rfSBmcm9tICcuL2dldExpbmsnO1xuXG4vLyBAdHMtZXhwZWN0LWVycm9yIFRTMjUwM1xuY29uc3QgZ2V0U291cmNlID0gKGZpZWxkU2V0TGF5b3V0OiBPTy51aS5GaWVsZHNldExheW91dCkgPT4ge1xuXHRsZXQgc291cmNlOiBzdHJpbmcgPSAnJztcblxuXHQvLyBAdHMtZXhwZWN0LWVycm9yIFRTMjUwM1xuXHRmb3IgKGNvbnN0IGF0dHJpYnV0aW9uRmllbGRzZXQgb2YgZmllbGRTZXRMYXlvdXQuZ2V0SXRlbXMoKSBhcyBPTy51aS5GaWVsZHNldExheW91dFtdKSB7XG5cdFx0Ly8gQHRzLWV4cGVjdC1lcnJvciBUUzI1MDNcblx0XHRmb3IgKGNvbnN0IGZpZWxkTGF5b3V0IG9mIGF0dHJpYnV0aW9uRmllbGRzZXQuZ2V0SXRlbXMoKSBhcyBPTy51aS5GaWVsZExheW91dFtdKSB7XG5cdFx0XHRjb25zdCBmaWVsZCA9IGZpZWxkTGF5b3V0LmdldEZpZWxkKCk7XG5cblx0XHRcdGlmIChmaWVsZC5zdXBwb3J0cygnZ2V0VmFsdWUnKSkge1xuXHRcdFx0XHQvLyBAdHMtZXhwZWN0LWVycm9yIFRTMjUwM1xuXHRcdFx0XHRjb25zdCBsaW5rID0gKGZpZWxkIGFzIE9PLnVpLlRleHRJbnB1dFdpZGdldCkuZ2V0VmFsdWUoKTtcblx0XHRcdFx0aWYgKGxpbmspIHtcblx0XHRcdFx0XHRzb3VyY2UgPSBnZXRMaW5rKHtsaW5rfSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gc291cmNlO1xufTtcblxuY29uc3QgdXBkYXRlV3BTb3VyY2UgPSAoe1xuXHQkYm9keSxcblx0cGFyZW50RmllbGRTZXQsXG59OiB7XG5cdCRib2R5OiBKUXVlcnk8SFRNTEVsZW1lbnQ+O1xuXHQvLyBAdHMtZXhwZWN0LWVycm9yIFRTMjUwM1xuXHRwYXJlbnRGaWVsZFNldDogT08udWkuRmllbGRzZXRMYXlvdXQ7XG59KSA9PiB7XG5cdGxldCB3cFNvdXJjZTogc3RyaW5nID0gJyc7XG5cblx0Y29uc3QgJHdwU291cmNlOiBKUXVlcnk8SFRNTElucHV0RWxlbWVudD4gPVxuXHRcdCRib2R5LmZpbmQ8SFRNTElucHV0RWxlbWVudD4oJ2lucHV0W25hbWU9d3BTb3VyY2VdJykgfHxcblx0XHQkKCc8aW5wdXQ+Jylcblx0XHRcdC5hdHRyKHtcblx0XHRcdFx0aWQ6ICd3cFNvdXJjZScsXG5cdFx0XHRcdG5hbWU6ICd3cFNvdXJjZScsXG5cdFx0XHRcdHR5cGU6ICdoaWRkZW4nLFxuXHRcdFx0XHR2YWx1ZTogJycsXG5cdFx0XHR9KVxuXHRcdFx0LnByZXBlbmRUbygkYm9keSk7XG5cblx0d3BTb3VyY2UgPSBnZXRTb3VyY2UocGFyZW50RmllbGRTZXQpO1xuXHQkd3BTb3VyY2UudmFsKHdwU291cmNlKTtcbn07XG5cbmV4cG9ydCB7Z2V0U291cmNlLCB1cGRhdGVXcFNvdXJjZX07XG4iLCAiY29uc3QgYXBwZW5kVGV4dFRvU3VtbWFyeSA9ICh7Y3VzdG9tU3VtbWFyeSwgJHdwU3VtbWFyeX06IHtjdXN0b21TdW1tYXJ5OiBzdHJpbmc7ICR3cFN1bW1hcnk6IEpRdWVyeX0pOiB2b2lkID0+IHtcblx0Y29uc3Qgb3JpZ2luU3VtbWFyeTogc3RyaW5nID0gKCR3cFN1bW1hcnkudmFsKCkgYXMgc3RyaW5nIHwgdW5kZWZpbmVkKSA/PyAnJztcblxuXHQkd3BTdW1tYXJ5LnZhbChvcmlnaW5TdW1tYXJ5LnRyaW0oKSA/IGAke29yaWdpblN1bW1hcnl9ICR7Y3VzdG9tU3VtbWFyeX1gIDogY3VzdG9tU3VtbWFyeSkudHJpZ2dlcignY2hhbmdlJyk7XG59O1xuXG5leHBvcnQge2FwcGVuZFRleHRUb1N1bW1hcnl9O1xuIiwgImltcG9ydCB7Z2V0TGljZW5zZSwgdXBkYXRlV3BMaWNlbnNlfSBmcm9tICcuL2dldExpY2Vuc2UnO1xuaW1wb3J0IHtnZXRTb3VyY2UsIHVwZGF0ZVdwU291cmNlfSBmcm9tICcuL2dldFNvdXJjZSc7XG5pbXBvcnQge0xJQ0VOU0VTfSBmcm9tICcuLi9jb25zdGFudCc7XG5pbXBvcnQge2FwcGVuZFRleHRUb1N1bW1hcnl9IGZyb20gJy4vYXBwZW5kVGV4dFRvU3VtbWFyeSc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4uL2kxOG4nO1xuXG5jb25zdCBnZXRUZXh0SW5wdXQgPSAoLi4ub25DaGFuZ2VzOiAoKCkgPT4gdm9pZClbXSkgPT4ge1xuXHQvLyBAdHMtZXhwZWN0LWVycm9yIFRTMjMwNFxuXHRjb25zdCB0ZXh0SW5wdXQgPSBuZXcgT08udWkuVGV4dElucHV0V2lkZ2V0KHtcblx0XHRwbGFjZWhvbGRlcjogZ2V0TWVzc2FnZSgnU291cmNlJyksXG5cdH0pO1xuXG5cdGZvciAoY29uc3Qgb25DaGFuZ2Ugb2Ygb25DaGFuZ2VzKSB7XG5cdFx0dGV4dElucHV0Lm9uKCdjaGFuZ2UnLCBvbkNoYW5nZSk7XG5cdH1cblxuXHRyZXR1cm4gdGV4dElucHV0O1xufTtcblxuY29uc3QgZ2V0RHJvcERvd24gPSAoLi4ub25TZWxlY3RzOiAoKCkgPT4gdm9pZClbXSkgPT4ge1xuXHQvLyBAdHMtZXhwZWN0LWVycm9yIFRTMjMwNFxuXHRjb25zdCBkcm9wZG93bjogT08udWkuRHJvcGRvd25XaWRnZXQgPSBuZXcgT08udWkuRHJvcGRvd25XaWRnZXQoe1xuXHRcdGxhYmVsOiBnZXRNZXNzYWdlKCdMaWNlbnNlJyksXG5cdH0pO1xuXG5cdC8vIEB0cy1leHBlY3QtZXJyb3IgVFMyMzA0XG5cdGNvbnN0IG1lbnVPcHRpb25zOiBPTy51aS5NZW51T3B0aW9uV2lkZ2V0W10gPSBbXTtcblxuXHRmb3IgKGNvbnN0IHtkYXRhLCBsYWJlbH0gb2YgTElDRU5TRVMpIHtcblx0XHQvLyBAdHMtZXhwZWN0LWVycm9yIFRTMjMwNFxuXHRcdG1lbnVPcHRpb25zW21lbnVPcHRpb25zLmxlbmd0aF0gPSBuZXcgT08udWkuTWVudU9wdGlvbldpZGdldCh7XG5cdFx0XHRkYXRhLFxuXHRcdFx0bGFiZWwsXG5cdFx0fSk7XG5cdH1cblxuXHRkcm9wZG93bi5nZXRNZW51KCkuYWRkSXRlbXMobWVudU9wdGlvbnMpO1xuXG5cdGZvciAoY29uc3Qgb25TZWxlY3Qgb2Ygb25TZWxlY3RzKSB7XG5cdFx0ZHJvcGRvd24uZ2V0TWVudSgpLm9uKCdzZWxlY3QnLCBvblNlbGVjdCk7XG5cdH1cblxuXHRyZXR1cm4gZHJvcGRvd247XG59O1xuXG4vLyBAdHMtZXhwZWN0LWVycm9yIFRTMjUwM1xuY29uc3QgZ2V0QWRkSXRlbUJ1dHRvbiA9ICguLi5vbkNsaWNrczogKCgpID0+IHZvaWQpW10pOiBPTy51aS5CdXR0b25JbnB1dFdpZGdldCA9PiB7XG5cdC8vIEB0cy1leHBlY3QtZXJyb3IgVFMyMzA0XG5cdGNvbnN0IGFkZEl0ZW1CdXR0b24gPSBuZXcgT08udWkuQnV0dG9uSW5wdXRXaWRnZXQoe1xuXHRcdGxhYmVsOiBnZXRNZXNzYWdlKCdBZGQgdG8gRWRpdCBTdW1tYXJ5JyksXG5cdH0pO1xuXG5cdGZvciAoY29uc3Qgb25DbGljayBvZiBvbkNsaWNrcykge1xuXHRcdGFkZEl0ZW1CdXR0b24ub24oJ2NsaWNrJywgb25DbGljayk7XG5cdH1cblxuXHRyZXR1cm4gYWRkSXRlbUJ1dHRvbjtcbn07XG5cbmNvbnN0IGdlbmVyYXRlVGV4dElucHV0V2l0aERyb3Bkb3duID0gKHskYm9keSwgJHdwU3VtbWFyeX06IHskYm9keTogSlF1ZXJ5PEhUTUxFbGVtZW50PjsgJHdwU3VtbWFyeTogSlF1ZXJ5fSkgPT4ge1xuXHQvLyBAdHMtZXhwZWN0LWVycm9yIFRTMjMwNFxuXHRjb25zdCBpbml0aWFsRmllbGRzZXQgPSBuZXcgT08udWkuRmllbGRzZXRMYXlvdXQoKTtcblx0Ly8gQHRzLWV4cGVjdC1lcnJvciBUUzIzMDRcblx0Y29uc3QgcGFyZW50RmllbGRTZXQgPSBuZXcgT08udWkuRmllbGRzZXRMYXlvdXQoe1xuXHRcdGxhYmVsOiBnZXRNZXNzYWdlKCdQbGVhc2UgQ2xhaW0gU291cmNlcyBhbmQgTGljZW5zZXMnKSxcblx0fSk7XG5cblx0Y29uc3QgdGV4dElucHV0T25DaGFuZ2UgPSAoKSA9PiB7XG5cdFx0dXBkYXRlV3BTb3VyY2UoeyRib2R5LCBwYXJlbnRGaWVsZFNldH0pO1xuXHR9O1xuXHRjb25zdCB0ZXh0SW5wdXQgPSBnZXRUZXh0SW5wdXQodGV4dElucHV0T25DaGFuZ2UpO1xuXHRjb25zdCBkcm9wRG93bk9uQ2hhbmdlID0gKCkgPT4ge1xuXHRcdHVwZGF0ZVdwTGljZW5zZSh7JGJvZHksIHBhcmVudEZpZWxkU2V0fSk7XG5cdH07XG5cdGNvbnN0IGRyb3BEb3duID0gZ2V0RHJvcERvd24oZHJvcERvd25PbkNoYW5nZSk7XG5cblx0Y29uc3QgYWRkSXRlbU9uQ2xpY2sgPSAoKSA9PiB7XG5cdFx0bGV0IHdwU291cmNlOiBzdHJpbmcgPSAnJztcblx0XHRsZXQgd3BMaWNlbnNlOiBzdHJpbmcgPSAnJztcblxuXHRcdGNvbnN0ICR3cFNvdXJjZTogSlF1ZXJ5PEhUTUxJbnB1dEVsZW1lbnQ+ID1cblx0XHRcdCRib2R5LmZpbmQ8SFRNTElucHV0RWxlbWVudD4oJ2lucHV0W25hbWU9d3BTb3VyY2VdJykgfHxcblx0XHRcdCQoJzxpbnB1dD4nKVxuXHRcdFx0XHQuYXR0cih7XG5cdFx0XHRcdFx0aWQ6ICd3cFNvdXJjZScsXG5cdFx0XHRcdFx0bmFtZTogJ3dwU291cmNlJyxcblx0XHRcdFx0XHR0eXBlOiAnaGlkZGVuJyxcblx0XHRcdFx0XHR2YWx1ZTogJycsXG5cdFx0XHRcdH0pXG5cdFx0XHRcdC5wcmVwZW5kVG8oJGJvZHkpO1xuXHRcdGNvbnN0ICR3cExpY2Vuc2U6IEpRdWVyeTxIVE1MSW5wdXRFbGVtZW50PiA9XG5cdFx0XHQkYm9keS5maW5kPEhUTUxJbnB1dEVsZW1lbnQ+KCdpbnB1dFtuYW1lPXdwTGljZW5zZV0nKSB8fFxuXHRcdFx0JCgnPGlucHV0PicpXG5cdFx0XHRcdC5hdHRyKHtcblx0XHRcdFx0XHRpZDogJ3dwTGljZW5zZScsXG5cdFx0XHRcdFx0bmFtZTogJ3dwTGljZW5zZScsXG5cdFx0XHRcdFx0dHlwZTogJ2hpZGRlbicsXG5cdFx0XHRcdFx0dmFsdWU6ICcnLFxuXHRcdFx0XHR9KVxuXHRcdFx0XHQucHJlcGVuZFRvKCRib2R5KTtcblxuXHRcdHdwU291cmNlID0gZ2V0U291cmNlKHBhcmVudEZpZWxkU2V0KTtcblx0XHR3cExpY2Vuc2UgPSBnZXRMaWNlbnNlKHBhcmVudEZpZWxkU2V0KTtcblx0XHQkd3BTb3VyY2UudmFsKHdwU291cmNlKTtcblx0XHQkd3BMaWNlbnNlLnZhbCh3cExpY2Vuc2UpO1xuXG5cdFx0aWYgKHdwU291cmNlLmxlbmd0aCAmJiB3cExpY2Vuc2UubGVuZ3RoKSB7XG5cdFx0XHRjb25zdCBhdHRyaWJ1dGlvbiA9IGAke2dldE1lc3NhZ2UoJ1NvdXJjZScpfTogJHt3cFNvdXJjZX0gKCR7Z2V0TWVzc2FnZSgnTGljZW5zZScpfTogJHt3cExpY2Vuc2V9KSBgO1xuXG5cdFx0XHRpZiAoW2dldE1lc3NhZ2UoJ1JlcGxhY2UgV2l0aCBMaWNlbnNlJyksIGdldE1lc3NhZ2UoJ090aGVyIExpY2Vuc2UnKV0uaW5jbHVkZXMod3BMaWNlbnNlKSkge1xuXHRcdFx0XHQvLyBAdHMtZXhwZWN0LWVycm9yIFRTMjMwNFxuXHRcdFx0XHR2b2lkIE9PLnVpLmFsZXJ0KGdldE1lc3NhZ2UoJ1BsZWFzZSByZXBsYWNlIHBsYWNlaG9sZGVyIHdpdGggYWN0dWFsIGxpY2Vuc2UnKSwge3NpemU6ICdtZWRpdW0nfSk7XG5cdFx0XHR9XG5cblx0XHRcdGFwcGVuZFRleHRUb1N1bW1hcnkoe1xuXHRcdFx0XHRjdXN0b21TdW1tYXJ5OiBhdHRyaWJ1dGlvbiA/IGBbJHthdHRyaWJ1dGlvbn1dYCA6ICcnLFxuXHRcdFx0XHQkd3BTdW1tYXJ5LFxuXHRcdFx0fSk7XG5cblx0XHRcdHRleHRJbnB1dC5zZXRWYWx1ZSgnJyk7XG5cdFx0XHRkcm9wRG93bi5nZXRNZW51KCkudW5zZWxlY3RJdGVtKCk7XG5cdFx0fSBlbHNlIGlmICghd3BTb3VyY2UubGVuZ3RoICYmIHdwTGljZW5zZS5sZW5ndGgpIHtcblx0XHRcdC8vIEB0cy1leHBlY3QtZXJyb3IgVFMyMzA0XG5cdFx0XHR2b2lkIE9PLnVpLmFsZXJ0KGdldE1lc3NhZ2UoJ1NvdXJjZSBpcyBtaXNzaW5nJyksIHtzaXplOiAnbWVkaXVtJ30pO1xuXHRcdH0gZWxzZSBpZiAod3BTb3VyY2UubGVuZ3RoICYmICF3cExpY2Vuc2UubGVuZ3RoKSB7XG5cdFx0XHQvLyBAdHMtZXhwZWN0LWVycm9yIFRTMjMwNFxuXHRcdFx0dm9pZCBPTy51aS5hbGVydChnZXRNZXNzYWdlKCdMaWNlbnNlIGlzIG1pc3NpbmcnKSwge3NpemU6ICdtZWRpdW0nfSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIEB0cy1leHBlY3QtZXJyb3IgVFMyMzA0XG5cdFx0XHR2b2lkIE9PLnVpLmFsZXJ0KGdldE1lc3NhZ2UoJ0JvdGggc291cmNlIGFuZCBMaWNlbnNlIGFyZSBtaXNzaW5nJyksIHtzaXplOiAnbWVkaXVtJ30pO1xuXHRcdH1cblx0fTtcblxuXHRjb25zdCBhZGRJdGVtQnV0dG9uID0gZ2V0QWRkSXRlbUJ1dHRvbihhZGRJdGVtT25DbGljayk7XG5cblx0aW5pdGlhbEZpZWxkc2V0LmFkZEl0ZW1zKFtcblx0XHQvLyBAdHMtZXhwZWN0LWVycm9yIFRTMjMwNFxuXHRcdG5ldyBPTy51aS5GaWVsZExheW91dCh0ZXh0SW5wdXQsIHtsYWJlbDogZ2V0TWVzc2FnZSgnU291cmNlJyksIGFsaWduOiAnaW5saW5lJ30pLFxuXHRcdC8vIEB0cy1leHBlY3QtZXJyb3IgVFMyMzA0XG5cdFx0bmV3IE9PLnVpLkZpZWxkTGF5b3V0KGRyb3BEb3duLCB7bGFiZWw6IGdldE1lc3NhZ2UoJ0xpY2Vuc2UnKSwgYWxpZ246ICdpbmxpbmUnfSksXG5cdFx0Ly8gQHRzLWV4cGVjdC1lcnJvciBUUzIzMDRcblx0XHRuZXcgT08udWkuRmllbGRMYXlvdXQoYWRkSXRlbUJ1dHRvbiwge2FsaWduOiAnaW5saW5lJ30pLFxuXHRdKTtcblxuXHRwYXJlbnRGaWVsZFNldC5hZGRJdGVtcyhbaW5pdGlhbEZpZWxkc2V0XSk7XG5cblx0cmV0dXJuIHBhcmVudEZpZWxkU2V0O1xufTtcblxuZXhwb3J0IHtnZW5lcmF0ZVRleHRJbnB1dFdpdGhEcm9wZG93bn07XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICd+L0VkaXRmb3JtX0F0dHJpYnV0aW9uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge2Zvcm1XcmFwfSBmcm9tICcuL0VkaXRmb3JtX0F0dHJpYnV0aW9uLm1vZHVsZS5sZXNzJztcbmltcG9ydCB7Z2VuZXJhdGVUZXh0SW5wdXRXaXRoRHJvcGRvd259IGZyb20gJy4vZ2VuZXJhdGVUZXh0SW5wdXRXaXRoRHJvcGRvd24nO1xuXG5pbnRlcmZhY2UgTGF5b3V0UHJvcHMge1xuXHQkYm9keTogSlF1ZXJ5PEhUTUxFbGVtZW50Pjtcbn1cblxuY29uc3QgZ2VuZXJhdGVWaXN1YWxFZGl0b3JMYXlvdXQgPSAoeyRib2R5fTogTGF5b3V0UHJvcHMpOiBKUXVlcnk8SFRNTEVsZW1lbnQ+ID0+IHtcblx0Y29uc3Qge3RhcmdldH0gPSB3aW5kb3cudmUuaW5pdDtcblx0Y29uc3QgJHdwU3VtbWFyeSA9IHRhcmdldC5zYXZlRGlhbG9nLmVkaXRTdW1tYXJ5SW5wdXQuJGlucHV0O1xuXHRjb25zdCB0ZXh0SW5wdXRXaXRoRHJvcGRvd24gPSBnZW5lcmF0ZVRleHRJbnB1dFdpdGhEcm9wZG93bih7JGJvZHksICR3cFN1bW1hcnl9KTtcblx0Ly8gTWVzc2FnZXMgdGhhdCBjYW4gYmUgdXNlZCBoZXJlOlxuXHQvLyAqIHNlZSBhYm92ZSBpbXBvcnRlZCBvcHRpb25zLmpzb25cblx0Ly8gKiBmb3IgbW9yZSBpbmZvcm1hdGlvblxuXHRjb25zdCAkbGF5b3V0ID0gJCgnPGRpdj4nKS5hdHRyKCdpZCcsIE9QVElPTlMuaW5wdXRJZCkuYWRkQ2xhc3MoZm9ybVdyYXApO1xuXHQkbGF5b3V0LmFwcGVuZCh0ZXh0SW5wdXRXaXRoRHJvcGRvd24uJGVsZW1lbnQpO1xuXG5cdHJldHVybiAkbGF5b3V0O1xufTtcblxuY29uc3QgZ2VuZXJhdGVXaWtpRWRpdG9yTGF5b3V0ID0gKHskYm9keSwgJGVkaXRGb3JtfTogTGF5b3V0UHJvcHMgJiB7JGVkaXRGb3JtOiBKUXVlcnl9KTogSlF1ZXJ5PEhUTUxFbGVtZW50PiA9PiB7XG5cdGNvbnN0ICR3cFN1bW1hcnkgPSAkZWRpdEZvcm0uZmluZCgnaW5wdXRbbmFtZT13cFN1bW1hcnldJyk7XG5cdGNvbnN0IHRleHRJbnB1dFdpdGhEcm9wZG93biA9IGdlbmVyYXRlVGV4dElucHV0V2l0aERyb3Bkb3duKHskYm9keSwgJHdwU3VtbWFyeX0pO1xuXHRjb25zdCAkbGF5b3V0ID0gJCgnPGRpdj4nKS5hdHRyKCdpZCcsIE9QVElPTlMuaW5wdXRJZCkuYWRkQ2xhc3MoZm9ybVdyYXApO1xuXHQkbGF5b3V0LmFwcGVuZCh0ZXh0SW5wdXRXaXRoRHJvcGRvd24uJGVsZW1lbnQpO1xuXG5cdHJldHVybiAkbGF5b3V0O1xufTtcblxuZXhwb3J0IHtnZW5lcmF0ZVZpc3VhbEVkaXRvckxheW91dCwgZ2VuZXJhdGVXaWtpRWRpdG9yTGF5b3V0fTtcbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJ34vRWRpdGZvcm1fQXR0cmlidXRpb24vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7Z2VuZXJhdGVWaXN1YWxFZGl0b3JMYXlvdXR9IGZyb20gJy4vdXRpbC9nZW5lcmF0ZUxheW91dCc7XG5cbmNvbnN0IHByb2Nlc3NWaXN1YWxFZGl0b3IgPSAoeyRib2R5fTogeyRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pn0pOiB2b2lkID0+IHtcblx0Ly8gR3VhcmQgYWdhaW5zdCBkb3VibGUgaW5jbHVzaW9uc1xuXHRpZiAobXcuY29uZmlnLmdldChPUFRJT05TLmNvbmZpZ0tleVZlKSkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IHt0YXJnZXR9ID0gd2luZG93LnZlLmluaXQ7XG5cdGNvbnN0IHtzYXZlRGlhbG9nfSA9IHRhcmdldDtcblx0Y29uc3QgeyRzYXZlT3B0aW9uc30gPSBzYXZlRGlhbG9nO1xuXHRpZiAoISRzYXZlT3B0aW9ucy5sZW5ndGgpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHQvLyBTZXQgZ3VhcmRcblx0bXcuY29uZmlnLnNldChPUFRJT05TLmNvbmZpZ0tleVZlLCB0cnVlKTtcblxuXHRjb25zdCAkbGF5b3V0ID0gZ2VuZXJhdGVWaXN1YWxFZGl0b3JMYXlvdXQoeyRib2R5fSk7XG5cblx0aWYgKCEkYm9keS5maW5kKGAjJHtPUFRJT05TLmlucHV0SWR9YCkubGVuZ3RoKSB7XG5cdFx0JHNhdmVPcHRpb25zLmFwcGVuZCgkbGF5b3V0KTtcblx0fVxuXG5cdC8vIFJlaW5pdGlhbGl6YXRpb24gaXMgcmVxdWlyZWQgZm9yIHN3aXRjaGluZyBiZXR3ZWVuIFZpc3VhbEVkaXRvciBhbmQgTmV3IFdpa2l0ZXh0IEVkaXRvciAoMjAxNylcblx0bXcuaG9vaygndmUuYWN0aXZhdGlvbkNvbXBsZXRlJykuYWRkKCgpID0+IHtcblx0XHRpZiAobXcuY29uZmlnLmdldChPUFRJT05TLmNvbmZpZ0tleVZlKSkge1xuXHRcdFx0bXcuY29uZmlnLnNldChPUFRJT05TLmNvbmZpZ0tleVZlLCBmYWxzZSk7XG5cdFx0fVxuXHR9KTtcbn07XG5cbmV4cG9ydCB7cHJvY2Vzc1Zpc3VhbEVkaXRvcn07XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICd+L0VkaXRmb3JtX0F0dHJpYnV0aW9uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge2dlbmVyYXRlV2lraUVkaXRvckxheW91dH0gZnJvbSAnLi91dGlsL2dlbmVyYXRlTGF5b3V0JztcblxuY29uc3QgcHJvY2Vzc1dpa2lFZGl0b3IgPSAoeyRib2R5LCAkZWRpdEZvcm19OiB7JGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+OyAkZWRpdEZvcm06IEpRdWVyeX0pOiB2b2lkID0+IHtcblx0Ly8gR3VhcmQgYWdhaW5zdCBkb3VibGUgaW5jbHVzaW9uc1xuXHRpZiAobXcuY29uZmlnLmdldChPUFRJT05TLmNvbmZpZ0tleSkpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCAkdGFyZ2V0OiBKUXVlcnkgPSAkZWRpdEZvcm0uZmluZChPUFRJT05TLnRhcmdldFdpa2lFZGl0b3IpO1xuXHRpZiAoISR0YXJnZXQubGVuZ3RoKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0bXcuY29uZmlnLnNldChPUFRJT05TLmNvbmZpZ0tleSwgdHJ1ZSk7XG5cblx0Y29uc3QgJGxheW91dCA9IGdlbmVyYXRlV2lraUVkaXRvckxheW91dCh7JGJvZHksICRlZGl0Rm9ybX0pO1xuXG5cdGlmICghJGJvZHkuZmluZChgIyR7T1BUSU9OUy5pbnB1dElkfWApLmxlbmd0aCkge1xuXHRcdCR0YXJnZXQuYWZ0ZXIoJGxheW91dCk7XG5cdH1cbn07XG5cbmV4cG9ydCB7cHJvY2Vzc1dpa2lFZGl0b3J9O1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEscUJBQXNCQyxRQUFBLGlCQUFBOztBQ0NyQixJQUFBQyxZQUFhO0FBQ2Is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M0Y7TUFDQXFGO0lBQ0QsQ0FBQztFQUNGLENBQUM7QUFFRGxKLEtBQUdzSixLQUFLLDRCQUE0QixFQUFFQyxJQUFJLE1BQVk7QUFDckRKLHdCQUFvQjtNQUFDdEY7SUFBSyxDQUFDO0VBQzVCLENBQUM7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogWyJpbXBvcnRfZXh0X2dhZGdldDIiLCAicmVxdWlyZSIsICJjb25maWdLZXkiLCAiY29uZmlnS2V5VmUiLCAiaW5wdXRJZCIsICJ0YXJnZXRXaWtpRWRpdG9yIiwgImZvcm1XcmFwIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgImdldEkxOG5NZXNzYWdlcyIsICJsb2NhbGl6ZSIsICJlbiIsICJTb3VyY2UiLCAiTGljZW5zZSIsICJpMThuTWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAid2dOYW1lc3BhY2VJZHMiLCAibXciLCAiY29uZmlnIiwgImdldCIsICJMSUNFTlNFUyIsICJsYWJlbCIsICJkYXRhIiwgIlZBTElEX0lOVEVSV0lLSV9QUkVGSVgiLCAiVkFMSURfSU5URVJOQUxfUFJFRklYIiwgIl9pIiwgIl9PYmplY3QkZW50cmllcyIsICJPYmplY3QiLCAiZW50cmllcyIsICJsZW5ndGgiLCAibmFtZXNwYWNlTmFtZSIsICJpZCIsICJnZXRMaW5rIiwgImxpbmsiLCAidGV4dCIsICJWQUxJRF9JTlRFUldJS0lfTElOS19SRUdFWCIsICJSZWdFeHAiLCAiY29uY2F0IiwgImpvaW4iLCAiVkFMSURfSU5URVJOQUxfUFJFRklYX1JFR0VYIiwgImluY2x1ZGVzIiwgInN0YXJ0c1dpdGgiLCAiZW5kc1dpdGgiLCAiZW5jb2RlVVJJIiwgImRlY29kZVVSSSIsICJ0ZXN0IiwgInJlcGxhY2UiLCAiZ2V0TGljZW5zZSIsICJmaWVsZFNldExheW91dCIsICJsaWNlbnNlIiwgImdldFNlbGVjdGVkSXRlbSIsICJkcm9wZG93biIsICJzZWxlY3RlZEl0ZW0iLCAiZ2V0TWVudSIsICJmaW5kU2VsZWN0ZWRJdGVtIiwgImdldFNlbGVjdGVkVmFsdWUiLCAiZ2V0RGF0YSIsICJnZXRTZWxlY3RlZExhYmVsIiwgImdldExhYmVsIiwgIl9pdGVyYXRvciIsICJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsICJnZXRJdGVtcyIsICJfc3RlcCIsICJzIiwgIm4iLCAiZG9uZSIsICJhdHRyaWJ1dGlvbkZpZWxkc2V0IiwgInZhbHVlIiwgIl9pdGVyYXRvcjIiLCAiX3N0ZXAyIiwgImZpZWxkTGF5b3V0IiwgImZpZWxkIiwgImdldEZpZWxkIiwgInN1cHBvcnRzIiwgImVyciIsICJlIiwgImYiLCAidXBkYXRlV3BMaWNlbnNlIiwgIiRib2R5IiwgInBhcmVudEZpZWxkU2V0IiwgIndwTGljZW5zZSIsICIkd3BMaWNlbnNlIiwgImZpbmQiLCAiJCIsICJhdHRyIiwgIm5hbWUiLCAidHlwZSIsICJwcmVwZW5kVG8iLCAidmFsIiwgImdldFNvdXJjZSIsICJzb3VyY2UiLCAiX2l0ZXJhdG9yMyIsICJfc3RlcDMiLCAiX2l0ZXJhdG9yNCIsICJfc3RlcDQiLCAiZ2V0VmFsdWUiLCAidXBkYXRlV3BTb3VyY2UiLCAid3BTb3VyY2UiLCAiJHdwU291cmNlIiwgImFwcGVuZFRleHRUb1N1bW1hcnkiLCAiY3VzdG9tU3VtbWFyeSIsICIkd3BTdW1tYXJ5IiwgIl8kd3BTdW1tYXJ5JHZhbCIsICJvcmlnaW5TdW1tYXJ5IiwgInRyaW0iLCAidHJpZ2dlciIsICJnZXRUZXh0SW5wdXQiLCAib25DaGFuZ2VzIiwgInRleHRJbnB1dCIsICJPTyIsICJ1aSIsICJUZXh0SW5wdXRXaWRnZXQiLCAicGxhY2Vob2xkZXIiLCAiX2kyIiwgIl9vbkNoYW5nZXMiLCAib25DaGFuZ2UiLCAib24iLCAiZ2V0RHJvcERvd24iLCAib25TZWxlY3RzIiwgIkRyb3Bkb3duV2lkZ2V0IiwgIm1lbnVPcHRpb25zIiwgIl9pMyIsICJfTElDRU5TRVMiLCAiTWVudU9wdGlvbldpZGdldCIsICJhZGRJdGVtcyIsICJfaTQiLCAiX29uU2VsZWN0cyIsICJvblNlbGVjdCIsICJnZXRBZGRJdGVtQnV0dG9uIiwgIm9uQ2xpY2tzIiwgImFkZEl0ZW1CdXR0b24iLCAiQnV0dG9uSW5wdXRXaWRnZXQiLCAiX2k1IiwgIl9vbkNsaWNrcyIsICJvbkNsaWNrIiwgImdlbmVyYXRlVGV4dElucHV0V2l0aERyb3Bkb3duIiwgImluaXRpYWxGaWVsZHNldCIsICJGaWVsZHNldExheW91dCIsICJ0ZXh0SW5wdXRPbkNoYW5nZSIsICJkcm9wRG93bk9uQ2hhbmdlIiwgImRyb3BEb3duIiwgImFkZEl0ZW1PbkNsaWNrIiwgImF0dHJpYnV0aW9uIiwgImFsZXJ0IiwgInNpemUiLCAic2V0VmFsdWUiLCAidW5zZWxlY3RJdGVtIiwgIkZpZWxkTGF5b3V0IiwgImFsaWduIiwgImdlbmVyYXRlVmlzdWFsRWRpdG9yTGF5b3V0IiwgInRhcmdldCIsICJ3aW5kb3ciLCAidmUiLCAiaW5pdCIsICJzYXZlRGlhbG9nIiwgImVkaXRTdW1tYXJ5SW5wdXQiLCAiJGlucHV0IiwgInRleHRJbnB1dFdpdGhEcm9wZG93biIsICIkbGF5b3V0IiwgImFkZENsYXNzIiwgImFwcGVuZCIsICIkZWxlbWVudCIsICJnZW5lcmF0ZVdpa2lFZGl0b3JMYXlvdXQiLCAiJGVkaXRGb3JtIiwgInByb2Nlc3NWaXN1YWxFZGl0b3IiLCAiJHNhdmVPcHRpb25zIiwgInNldCIsICJob29rIiwgImFkZCIsICJwcm9jZXNzV2lraUVkaXRvciIsICIkdGFyZ2V0IiwgImFmdGVyIiwgImdldEJvZHkiLCAidGhlbiIsICJlZGl0Rm9ybSJdCn0K

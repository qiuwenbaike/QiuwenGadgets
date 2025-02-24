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
//! src/Editform_Attribution/Editform_Attribution.ts
var import_ext_gadget2 = require("ext.gadget.Util");
//! src/Editform_Attribution/options.json
var configKey = "gadget-Editform_Attribution__Initialized";
var configKeyVe = "gadget-Editform_Attribution__Initialized__VE";
var inputId = "editform_attribution";
var targetWikiEditor = ".editCheckboxes .oo-ui-horizontalLayout";
//! src/Editform_Attribution/modules/util/Editform_Attribution.module.less
var formWrap = "Editform-Attribution-module__formWrap_m5j2Ua__490";
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
      "zh-hans": "（替换为许可证名称和网址）",
      "zh-hant": "（替換爲許可證名稱和網址）"
    })
  };
};
var i18nMessages = getI18nMessages();
var getMessage = (key) => {
  return i18nMessages[key] || key;
};
//! src/Editform_Attribution/modules/constant.ts
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
//! src/Editform_Attribution/modules/util/getLinkValue.ts
var getLinkValue = (link, text) => {
  const VALID_INTERWIKI_LINK_REGEX = new RegExp("^:?(".concat(VALID_INTERWIKI_PREFIX.join("|"), ")"), "i");
  if (VALID_INTERWIKI_LINK_REGEX.test(link)) {
    link = ":".concat(link.replace(/^:/, ""));
    if (text) {
      return "[[".concat(link, "|").concat(text, "]]");
    }
    return "[[".concat(link, "]]");
  }
  return encodeURI(decodeURI(link));
};
//! src/Editform_Attribution/modules/util/getAttribution.ts
var getAttribution = (fieldSetLayout) => {
  const attributions = [];
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
      const attribution = {};
      var _iterator2 = _createForOfIteratorHelper(attributionFieldset.getItems()), _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
          const fieldLayout = _step2.value;
          const field = fieldLayout.getField();
          if (field.supports("getValue")) {
            const value = field.getValue();
            if (value) {
              attribution.source = getLinkValue(value);
            }
          } else if (field.supports("getMenu")) {
            const value = getSelectedValue(field);
            if (value) {
              const label = getSelectedLabel(field);
              if (label) {
                attribution.source = getLinkValue(value, label);
              } else {
                attribution.source = getLinkValue(value);
              }
            }
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      if (attribution.source && attribution.license) {
        attributions[attributions.length] = "".concat(attribution.source, " (").concat(getMessage("License"), ": ").concat(attribution.license, ")");
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return attributions.join(" ");
};
var updateWpAttribution = ({
  $body,
  parentFieldSet
}) => {
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
  wpAttribution = getAttribution(parentFieldSet);
  $originwpAttribution.val(wpAttribution);
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
  for (var _i = 0, _onChanges = onChanges; _i < _onChanges.length; _i++) {
    const onChange = _onChanges[_i];
    textInput.on("change", onChange);
  }
  return textInput;
};
var getDropDown = (...onSelects) => {
  const dropdown = new OO.ui.DropdownWidget({
    label: getMessage("License")
  });
  const menuOptions = [];
  for (var _i2 = 0, _LICENSES = LICENSES; _i2 < _LICENSES.length; _i2++) {
    const {
      data,
      label
    } = _LICENSES[_i2];
    menuOptions[menuOptions.length] = new OO.ui.MenuOptionWidget({
      data,
      label
    });
  }
  dropdown.getMenu().addItems(menuOptions);
  for (var _i3 = 0, _onSelects = onSelects; _i3 < _onSelects.length; _i3++) {
    const onSelect = _onSelects[_i3];
    dropdown.getMenu().on("select", onSelect);
  }
  return dropdown;
};
var getAddItemButton = (...onClicks) => {
  const addItemButton = new OO.ui.ButtonInputWidget({
    label: getMessage("Add to Edit Summary")
  });
  for (var _i4 = 0, _onClicks = onClicks; _i4 < _onClicks.length; _i4++) {
    const onClick = _onClicks[_i4];
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
  const inputOnChange = () => {
    updateWpAttribution({
      $body,
      parentFieldSet
    });
  };
  const textInput = getTextInput(inputOnChange);
  const dropDown = getDropDown(inputOnChange);
  const addItemOnClick = () => {
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
    wpAttribution = getAttribution(parentFieldSet);
    $originwpAttribution.val(wpAttribution);
    appendTextToSummary({
      customSummary: $originwpAttribution.val() ? "［".concat(getMessage("Source"), ": ").concat($originwpAttribution.val(), "］") : "",
      $wpSummary
    });
    textInput.setValue("");
    dropDown.getMenu().unselectItem();
  };
  const addItemButton = getAddItemButton(addItemOnClick);
  initialFieldset.addItems([new OO.ui.FieldLayout(textInput, {
    label: getMessage("Source"),
    align: "inline"
  }), new OO.ui.FieldLayout(dropDown, {
    label: getMessage("License"),
    align: "inline"
  }), new OO.ui.FieldLayout(addItemButton, {
    align: "inline"
  })]);
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0VkaXRmb3JtX0F0dHJpYnV0aW9uL0VkaXRmb3JtX0F0dHJpYnV0aW9uLnRzIiwgInNyYy9FZGl0Zm9ybV9BdHRyaWJ1dGlvbi9vcHRpb25zLmpzb24iLCAic3JjL0VkaXRmb3JtX0F0dHJpYnV0aW9uL21vZHVsZXMvdXRpbC9FZGl0Zm9ybV9BdHRyaWJ1dGlvbi5tb2R1bGUubGVzcyIsICJzcmMvRWRpdGZvcm1fQXR0cmlidXRpb24vbW9kdWxlcy9pMThuLnRzIiwgInNyYy9FZGl0Zm9ybV9BdHRyaWJ1dGlvbi9tb2R1bGVzL2NvbnN0YW50LnRzIiwgInNyYy9FZGl0Zm9ybV9BdHRyaWJ1dGlvbi9tb2R1bGVzL3V0aWwvZ2V0TGlua1ZhbHVlLnRzIiwgInNyYy9FZGl0Zm9ybV9BdHRyaWJ1dGlvbi9tb2R1bGVzL3V0aWwvZ2V0QXR0cmlidXRpb24udHMiLCAic3JjL0VkaXRmb3JtX0F0dHJpYnV0aW9uL21vZHVsZXMvdXRpbC9hcHBlbmRUZXh0VG9TdW1tYXJ5LnRzIiwgInNyYy9FZGl0Zm9ybV9BdHRyaWJ1dGlvbi9tb2R1bGVzL3V0aWwvZ2VuZXJhdGVUZXh0SW5wdXRXaXRoRHJvcGRvd24udHMiLCAic3JjL0VkaXRmb3JtX0F0dHJpYnV0aW9uL21vZHVsZXMvdXRpbC9nZW5lcmF0ZUxheW91dC50cyIsICJzcmMvRWRpdGZvcm1fQXR0cmlidXRpb24vbW9kdWxlcy9wcm9jZXNzVmlzdWFsRWRpdG9yLnRzIiwgInNyYy9FZGl0Zm9ybV9BdHRyaWJ1dGlvbi9tb2R1bGVzL3Byb2Nlc3NXaWtpRWRpdG9yLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQge2dldEJvZHl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5pbXBvcnQge3Byb2Nlc3NWaXN1YWxFZGl0b3J9IGZyb20gJy4vbW9kdWxlcy9wcm9jZXNzVmlzdWFsRWRpdG9yJztcbmltcG9ydCB7cHJvY2Vzc1dpa2lFZGl0b3J9IGZyb20gJy4vbW9kdWxlcy9wcm9jZXNzV2lraUVkaXRvcic7XG5cbi8qKlxuICogQGRlc2NyaXB0aW9uIOesrOS4ieaWueadpea6kOeJueauiuWjsOaYjlxuICovXG52b2lkIGdldEJvZHkoKS50aGVuKGZ1bmN0aW9uIGVkaXRGb3JtKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQge1xuXHRtdy5ob29rKCd3aWtpcGFnZS5lZGl0Zm9ybScpLmFkZCgoJGVkaXRGb3JtKTogdm9pZCA9PiB7XG5cdFx0cHJvY2Vzc1dpa2lFZGl0b3Ioe1xuXHRcdFx0JGJvZHksXG5cdFx0XHQkZWRpdEZvcm0sXG5cdFx0fSk7XG5cdH0pO1xuXG5cdG13Lmhvb2soJ3ZlLnNhdmVEaWFsb2cuc3RhdGVDaGFuZ2VkJykuYWRkKCgpOiB2b2lkID0+IHtcblx0XHRwcm9jZXNzVmlzdWFsRWRpdG9yKHskYm9keX0pO1xuXHR9KTtcbn0pO1xuIiwgIntcblx0XCJjb25maWdLZXlcIjogXCJnYWRnZXQtRWRpdGZvcm1fQXR0cmlidXRpb25fX0luaXRpYWxpemVkXCIsXG5cdFwiY29uZmlnS2V5VmVcIjogXCJnYWRnZXQtRWRpdGZvcm1fQXR0cmlidXRpb25fX0luaXRpYWxpemVkX19WRVwiLFxuXHRcImNoYW5nZVRhZ1wiOiBcIkF0dHJpYnV0aW9uX2FkZGVkXCIsXG5cdFwiaW5wdXRJZFwiOiBcImVkaXRmb3JtX2F0dHJpYnV0aW9uXCIsXG5cdFwidGFyZ2V0V2lraUVkaXRvclwiOiBcIi5lZGl0Q2hlY2tib3hlcyAub28tdWktaG9yaXpvbnRhbExheW91dFwiXG59XG4iLCAiaW1wb3J0IFwiZXNidWlsZC1jc3MtbW9kdWxlcy1wbHVnaW4tbnMtY3NzOnNyYy9FZGl0Zm9ybV9BdHRyaWJ1dGlvbi9tb2R1bGVzL3V0aWwvRWRpdGZvcm1fQXR0cmlidXRpb24ubW9kdWxlLmxlc3NcIjtcbmV4cG9ydCBjb25zdCBmb3JtV3JhcCA9IFwiRWRpdGZvcm0tQXR0cmlidXRpb24tbW9kdWxlX19mb3JtV3JhcF9tNWoyVWFfXzQ5MFwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIFwiZm9ybVdyYXBcIjogZm9ybVdyYXBcbn07XG4gICAgICAiLCAiaW1wb3J0IHtsb2NhbGl6ZX0gZnJvbSAnZXh0LmdhZGdldC5pMThuJztcblxuY29uc3QgZ2V0STE4bk1lc3NhZ2VzID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdCdBZGQgdG8gRWRpdCBTdW1tYXJ5JzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdBZGQgdG8gRWRpdCBTdW1tYXJ5Jyxcblx0XHRcdCd6aC1oYW5zJzogJ+a3u+WKoOiHs+e8lui+keaRmOimgScsXG5cdFx0XHQnemgtaGFudCc6ICfmt7vliqDoh7Pnt6jovK/mkZjopoEnLFxuXHRcdH0pLFxuXHRcdFNvdXJjZTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdTb3VyY2UnLFxuXHRcdFx0J3poLWhhbnMnOiAn5YaF5a655p2l5rqQJyxcblx0XHRcdCd6aC1oYW50JzogJ+WFp+WuueS+hua6kCcsXG5cdFx0fSksXG5cdFx0TGljZW5zZTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdMaWNlbnNlJyxcblx0XHRcdCd6aC1oYW5zJzogJ+iuuOWPr+ivgScsXG5cdFx0XHQnemgtaGFudCc6ICfoqLHlj6/orYknLFxuXHRcdH0pLFxuXHRcdCdPdGhlciBMaWNlbnNlJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdPdGhlciBsaWNlbnNlJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WFtuS7luiuuOWPr+ivgScsXG5cdFx0XHQnemgtaGFudCc6ICflhbbku5boqLHlj6/orYknLFxuXHRcdH0pLFxuXHRcdCdQbGVhc2UgQ2xhaW0gU291cmNlcyBhbmQgTGljZW5zZXMnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0lmIGVkaXQgY29udGVudCBhZGRzIGFueSB0aGlyZC1wYXJ0eSBjb250ZW50LCBwbGVhc2UgYWRkIHRoZSBzb3VyY2UgYW5kIGxpY2Vuc2Ugb2YgdGhlIHRoaXJkLXBhcnR5IGNvbnRlbnQgc2VwYXJhdGVseSB0byB0aGUgZWRpdGluZyBzdW1tYXJ5LicsXG5cdFx0XHQnemgtaGFucyc6ICfoi6XmgqjlkJHnvJbovpHlhoXlrrnkuK3mt7vliqDkuobnrKzkuInmlrnmkrDlhpnnmoTlhoXlrrnvvIzor7flsIbnm7jlhbPnrKzkuInmlrnlhoXlrrnnmoTmnaXmupDjgIHorrjlj6/mnaHmrL7lnKjnvJbovpHmkZjopoHkuK3liIbmnaHlo7DmmI4nLFxuXHRcdFx0J3poLWhhbnQnOiAn6Iul5oKo5ZCR57eo6Lyv5YWn5a655Lit5re75Yqg5LqG56ys5LiJ5pa55pKw5YaZ55qE5YWn5a6577yM6KuL5bCH55u45YWz56ys5LiJ5pa55YWn5a6555qE5L6G5rqQ44CB6Kix5Y+v5qKd5qy+5Zyo57eo6Lyv5pGY6KaB5Lit5YiG5qKd6IGy5piOJyxcblx0XHR9KSxcblx0XHQnUmVwbGFjZSBXaXRoIExpY2Vuc2UnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJyAoUmVwbGFjZSB3aXRoIGxpY2Vuc2UgbmFtZSBhbmQgVVJMKScsXG5cdFx0XHQnemgtaGFucyc6ICfvvIjmm7/mjaLkuLrorrjlj6/or4HlkI3np7DlkoznvZHlnYDvvIknLFxuXHRcdFx0J3poLWhhbnQnOiAn77yI5pu/5o+b54iy6Kix5Y+v6K2J5ZCN56ix5ZKM57ay5Z2A77yJJyxcblx0XHR9KSxcblx0fTtcbn07XG5cbmNvbnN0IGkxOG5NZXNzYWdlcyA9IGdldEkxOG5NZXNzYWdlcygpO1xuXG5jb25zdCBnZXRNZXNzYWdlOiBHZXRNZXNzYWdlczx0eXBlb2YgaTE4bk1lc3NhZ2VzPiA9IChrZXkpID0+IHtcblx0cmV0dXJuIGkxOG5NZXNzYWdlc1trZXldIHx8IGtleTtcbn07XG5cbmV4cG9ydCB7Z2V0TWVzc2FnZX07XG4iLCAiaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL2kxOG4nO1xuXG5jb25zdCBMSUNFTlNFUyA9IFtcblx0e1xuXHRcdGxhYmVsOiAnQ0MgQlktU0EgNC4wJyxcblx0XHRkYXRhOiAnY2MtYnktc2E6NC4wJyxcblx0fSxcblx0e1xuXHRcdGxhYmVsOiAnQ0MgQlktU0EgMy4wJyxcblx0XHRkYXRhOiAnY2MtYnktc2E6My4wJyxcblx0fSxcblx0e1xuXHRcdGxhYmVsOiAnQ0MgQlktU0EgMy4wIENOJyxcblx0XHRkYXRhOiAnY2MtYnktc2E6My4wL2NuJyxcblx0fSxcblx0e1xuXHRcdGxhYmVsOiAnQ0MgQlkgNC4wJyxcblx0XHRkYXRhOiAnY2MtYnk6NC4wJyxcblx0fSxcblx0e1xuXHRcdGxhYmVsOiAnQ0MgQlkgMy4wJyxcblx0XHRkYXRhOiAnY2MtYnk6My4wJyxcblx0fSxcblx0e1xuXHRcdGxhYmVsOiAnQ0MgQlkgMy4wIENOJyxcblx0XHRkYXRhOiAnY2MtYnk6My4wL2NuJyxcblx0fSxcblx0e1xuXHRcdGxhYmVsOiAnQ0MwLTEuMCcsXG5cdFx0ZGF0YTogJ2NjLXplcm86MS4wJyxcblx0fSxcblx0e1xuXHRcdGxhYmVsOiAnS09HTCBUeXBlIEk6IEF0dHJpYnV0aW9uJyxcblx0XHRkYXRhOiAnaHR0cHM6Ly93d3cua29nbC5vci5rci9pbmZvL2xpY2Vuc2VUeXBlMS5kbycsXG5cdH0sXG5cdHtcblx0XHRsYWJlbDogZ2V0TWVzc2FnZSgnT3RoZXIgTGljZW5zZScpLFxuXHRcdGRhdGE6IGdldE1lc3NhZ2UoJ1JlcGxhY2UgV2l0aCBMaWNlbnNlJyksXG5cdH0sXG5dO1xuXG5jb25zdCBWQUxJRF9JTlRFUldJS0lfUFJFRklYID0gW1xuXHQnY2MtYnknLFxuXHQnY2MtYnktc2EnLFxuXHQnY2MtemVybycsXG5cdCdjYzAnLFxuXHQnY29tbW9ucycsXG5cdCdlbndpa2knLFxuXHQnaW5jdWJhdG9yJyxcblx0J2luY3ViYXRvci13cC1tbmMnLFxuXHQnaW5jdWJhdG9yLXd0LW1uYycsXG5cdCdpc282MzktMycsXG5cdCdsZXhlbWVzJyxcblx0J2xpY2VuY2UnLFxuXHQnbGljZW5jZXdpa2knLFxuXHQnbGljZW5zZScsXG5cdCdsb2dpbicsXG5cdCdsb2dpbnFpdXdlbmJhaWtlJyxcblx0J2xvZ2lud2lraScsXG5cdCdtZWRpYXdpa2l3aWtpJyxcblx0J21vemlsbGF3aWtpJyxcblx0J213Jyxcblx0J29sZHdpa2lzb3VyY2UnLFxuXHQncG1pZCcsXG5cdCdxaXV3ZW5iYWlrZScsXG5cdCdyZXYnLFxuXHQndGVzdHdpa2lkYXRhJyxcblx0J3YnLFxuXHQndm95Jyxcblx0J3dpa2knLFxuXHQnd2lraWJvb2tzJyxcblx0J3dpa2lkYXRhJyxcblx0J3dpa2lmdW5jdGlvbnMnLFxuXHQnd2lraW5ld3MnLFxuXHQnd2lraXBlZGlhJyxcblx0J3dpa2lxdW90ZScsXG5cdCd3aWtpc291cmNlJyxcblx0J3dpa2l2ZXJzaXR5Jyxcblx0J3dpa2l2b3lhZ2UnLFxuXHQnd2lrdCcsXG5cdCd3aWt0aW9uYXJ5Jyxcblx0J3pocWl1d2VuYmFpa2UnLFxuXHQnemh3aWtpJyxcblx0J3pod2lraXNvdXJjZScsXG5cdCd6aHdpa2l2b3lhZ2UnLFxuXTtcblxuZXhwb3J0IHtMSUNFTlNFUywgVkFMSURfSU5URVJXSUtJX1BSRUZJWH07XG4iLCAiaW1wb3J0IHtWQUxJRF9JTlRFUldJS0lfUFJFRklYfSBmcm9tICcuLi9jb25zdGFudCc7XG5cbmNvbnN0IGdldExpbmtWYWx1ZSA9IChsaW5rOiBzdHJpbmcsIHRleHQ/OiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuXHRjb25zdCBWQUxJRF9JTlRFUldJS0lfTElOS19SRUdFWCA9IG5ldyBSZWdFeHAoYF46Pygke1ZBTElEX0lOVEVSV0lLSV9QUkVGSVguam9pbignfCcpfSlgLCAnaScpO1xuXG5cdGlmIChWQUxJRF9JTlRFUldJS0lfTElOS19SRUdFWC50ZXN0KGxpbmspKSB7XG5cdFx0bGluayA9IGA6JHtsaW5rLnJlcGxhY2UoL146LywgJycpfWA7XG5cdFx0aWYgKHRleHQpIHtcblx0XHRcdHJldHVybiBgW1ske2xpbmt9fCR7dGV4dH1dXWA7XG5cdFx0fVxuXHRcdHJldHVybiBgW1ske2xpbmt9XV1gO1xuXHR9XG5cblx0cmV0dXJuIGVuY29kZVVSSShkZWNvZGVVUkkobGluaykpO1xufTtcblxuZXhwb3J0IHtnZXRMaW5rVmFsdWV9O1xuIiwgImltcG9ydCB7Z2V0TGlua1ZhbHVlfSBmcm9tICcuL2dldExpbmtWYWx1ZSc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4uL2kxOG4nO1xuXG5jb25zdCBnZXRBdHRyaWJ1dGlvbiA9IChmaWVsZFNldExheW91dDogT08udWkuRmllbGRzZXRMYXlvdXQpID0+IHtcblx0Y29uc3QgYXR0cmlidXRpb25zID0gW107XG5cblx0Y29uc3QgZ2V0U2VsZWN0ZWRJdGVtID0gKGRyb3Bkb3duOiBPTy51aS5Ecm9wZG93bldpZGdldCk6IE9PLnVpLk9wdGlvbldpZGdldCB8IG51bGwgPT4ge1xuXHRcdGNvbnN0IHNlbGVjdGVkSXRlbTogT08udWkuT3B0aW9uV2lkZ2V0IHwgbnVsbCA9IGRyb3Bkb3duXG5cdFx0XHQuZ2V0TWVudSgpXG5cdFx0XHQuZmluZFNlbGVjdGVkSXRlbSgpIGFzIE9PLnVpLk9wdGlvbldpZGdldCB8IG51bGw7XG5cdFx0cmV0dXJuIHNlbGVjdGVkSXRlbTtcblx0fTtcblxuXHRjb25zdCBnZXRTZWxlY3RlZFZhbHVlID0gKGRyb3Bkb3duOiBPTy51aS5Ecm9wZG93bldpZGdldCk6IHN0cmluZyB8IHVuZGVmaW5lZCA9PiB7XG5cdFx0Y29uc3Qgc2VsZWN0ZWRJdGVtID0gZ2V0U2VsZWN0ZWRJdGVtKGRyb3Bkb3duKTtcblx0XHRyZXR1cm4gc2VsZWN0ZWRJdGVtID8gKHNlbGVjdGVkSXRlbS5nZXREYXRhKCkgYXMgc3RyaW5nKSA6IHVuZGVmaW5lZDtcblx0fTtcblxuXHRjb25zdCBnZXRTZWxlY3RlZExhYmVsID0gKGRyb3Bkb3duOiBPTy51aS5Ecm9wZG93bldpZGdldCk6IHN0cmluZyB8IHVuZGVmaW5lZCA9PiB7XG5cdFx0Y29uc3Qgc2VsZWN0ZWRJdGVtID0gZ2V0U2VsZWN0ZWRJdGVtKGRyb3Bkb3duKTtcblx0XHRyZXR1cm4gc2VsZWN0ZWRJdGVtID8gKHNlbGVjdGVkSXRlbS5nZXRMYWJlbCgpIGFzIHN0cmluZykgOiB1bmRlZmluZWQ7XG5cdH07XG5cblx0Zm9yIChjb25zdCBhdHRyaWJ1dGlvbkZpZWxkc2V0IG9mIGZpZWxkU2V0TGF5b3V0LmdldEl0ZW1zKCkgYXMgT08udWkuRmllbGRzZXRMYXlvdXRbXSkge1xuXHRcdGNvbnN0IGF0dHJpYnV0aW9uOiB7c291cmNlPzogc3RyaW5nOyBsaWNlbnNlPzogc3RyaW5nfSA9IHt9O1xuXG5cdFx0Zm9yIChjb25zdCBmaWVsZExheW91dCBvZiBhdHRyaWJ1dGlvbkZpZWxkc2V0LmdldEl0ZW1zKCkgYXMgT08udWkuRmllbGRMYXlvdXRbXSkge1xuXHRcdFx0Y29uc3QgZmllbGQgPSBmaWVsZExheW91dC5nZXRGaWVsZCgpO1xuXG5cdFx0XHRpZiAoZmllbGQuc3VwcG9ydHMoJ2dldFZhbHVlJykpIHtcblx0XHRcdFx0Y29uc3QgdmFsdWUgPSAoZmllbGQgYXMgT08udWkuVGV4dElucHV0V2lkZ2V0KS5nZXRWYWx1ZSgpO1xuXHRcdFx0XHRpZiAodmFsdWUpIHtcblx0XHRcdFx0XHRhdHRyaWJ1dGlvbi5zb3VyY2UgPSBnZXRMaW5rVmFsdWUodmFsdWUpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYgKGZpZWxkLnN1cHBvcnRzKCdnZXRNZW51JykpIHtcblx0XHRcdFx0Y29uc3QgdmFsdWUgPSBnZXRTZWxlY3RlZFZhbHVlKGZpZWxkIGFzIE9PLnVpLkRyb3Bkb3duV2lkZ2V0KTtcblx0XHRcdFx0aWYgKHZhbHVlKSB7XG5cdFx0XHRcdFx0Y29uc3QgbGFiZWwgPSBnZXRTZWxlY3RlZExhYmVsKGZpZWxkIGFzIE9PLnVpLkRyb3Bkb3duV2lkZ2V0KTtcblx0XHRcdFx0XHRpZiAobGFiZWwpIHtcblx0XHRcdFx0XHRcdGF0dHJpYnV0aW9uLnNvdXJjZSA9IGdldExpbmtWYWx1ZSh2YWx1ZSwgbGFiZWwpO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRhdHRyaWJ1dGlvbi5zb3VyY2UgPSBnZXRMaW5rVmFsdWUodmFsdWUpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChhdHRyaWJ1dGlvbi5zb3VyY2UgJiYgYXR0cmlidXRpb24ubGljZW5zZSkge1xuXHRcdFx0YXR0cmlidXRpb25zW2F0dHJpYnV0aW9ucy5sZW5ndGhdID1cblx0XHRcdFx0YCR7YXR0cmlidXRpb24uc291cmNlfSAoJHtnZXRNZXNzYWdlKCdMaWNlbnNlJyl9OiAke2F0dHJpYnV0aW9uLmxpY2Vuc2V9KWA7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIGF0dHJpYnV0aW9ucy5qb2luKCcgJyk7XG59O1xuXG5jb25zdCB1cGRhdGVXcEF0dHJpYnV0aW9uID0gKHtcblx0JGJvZHksXG5cdHBhcmVudEZpZWxkU2V0LFxufToge1xuXHQkYm9keTogSlF1ZXJ5PEhUTUxFbGVtZW50Pjtcblx0cGFyZW50RmllbGRTZXQ6IE9PLnVpLkZpZWxkc2V0TGF5b3V0O1xufSkgPT4ge1xuXHRsZXQgd3BBdHRyaWJ1dGlvbjogc3RyaW5nID0gJyc7XG5cblx0Y29uc3QgJHdwQXR0cmlidXRpb246IEpRdWVyeSA9ICQoJzxpbnB1dD4nKS5hdHRyKHtcblx0XHRpZDogJ3dwQXR0cmlidXRpb24nLFxuXHRcdG5hbWU6ICd3cEF0dHJpYnV0aW9uJyxcblx0XHR0eXBlOiAnaGlkZGVuJyxcblx0XHR2YWx1ZTogJycsXG5cdH0pO1xuXHRjb25zdCAkb3JpZ2lud3BBdHRyaWJ1dGlvbjogSlF1ZXJ5ID0gJGJvZHkuZmluZCgnaW5wdXRbbmFtZT13cEF0dHJpYnV0aW9uXScpO1xuXHRpZiAoISRvcmlnaW53cEF0dHJpYnV0aW9uLmxlbmd0aCkge1xuXHRcdCRib2R5LnByZXBlbmQoJHdwQXR0cmlidXRpb24pO1xuXHR9XG5cblx0d3BBdHRyaWJ1dGlvbiA9IGdldEF0dHJpYnV0aW9uKHBhcmVudEZpZWxkU2V0KTtcblx0JG9yaWdpbndwQXR0cmlidXRpb24udmFsKHdwQXR0cmlidXRpb24pO1xufTtcblxuZXhwb3J0IHtnZXRBdHRyaWJ1dGlvbiwgdXBkYXRlV3BBdHRyaWJ1dGlvbn07XG4iLCAiY29uc3QgYXBwZW5kVGV4dFRvU3VtbWFyeSA9ICh7Y3VzdG9tU3VtbWFyeSwgJHdwU3VtbWFyeX06IHtjdXN0b21TdW1tYXJ5OiBzdHJpbmc7ICR3cFN1bW1hcnk6IEpRdWVyeX0pOiB2b2lkID0+IHtcblx0Y29uc3Qgb3JpZ2luU3VtbWFyeTogc3RyaW5nID0gKCR3cFN1bW1hcnkudmFsKCkgYXMgc3RyaW5nIHwgdW5kZWZpbmVkKSA/PyAnJztcblxuXHQkd3BTdW1tYXJ5LnZhbChvcmlnaW5TdW1tYXJ5LnRyaW0oKSA/IGAke29yaWdpblN1bW1hcnl9ICR7Y3VzdG9tU3VtbWFyeX1gIDogY3VzdG9tU3VtbWFyeSkudHJpZ2dlcignY2hhbmdlJyk7XG59O1xuXG5leHBvcnQge2FwcGVuZFRleHRUb1N1bW1hcnl9O1xuIiwgImltcG9ydCB7Z2V0QXR0cmlidXRpb24sIHVwZGF0ZVdwQXR0cmlidXRpb259IGZyb20gJy4vZ2V0QXR0cmlidXRpb24nO1xuaW1wb3J0IHtMSUNFTlNFU30gZnJvbSAnLi4vY29uc3RhbnQnO1xuaW1wb3J0IHthcHBlbmRUZXh0VG9TdW1tYXJ5fSBmcm9tICcuL2FwcGVuZFRleHRUb1N1bW1hcnknO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuLi9pMThuJztcblxuY29uc3QgZ2V0VGV4dElucHV0ID0gKC4uLm9uQ2hhbmdlczogKCgpID0+IHZvaWQpW10pID0+IHtcblx0Y29uc3QgdGV4dElucHV0ID0gbmV3IE9PLnVpLlRleHRJbnB1dFdpZGdldCh7XG5cdFx0cGxhY2Vob2xkZXI6IGdldE1lc3NhZ2UoJ1NvdXJjZScpLFxuXHR9KTtcblxuXHRmb3IgKGNvbnN0IG9uQ2hhbmdlIG9mIG9uQ2hhbmdlcykge1xuXHRcdHRleHRJbnB1dC5vbignY2hhbmdlJywgb25DaGFuZ2UpO1xuXHR9XG5cblx0cmV0dXJuIHRleHRJbnB1dDtcbn07XG5cbmNvbnN0IGdldERyb3BEb3duID0gKC4uLm9uU2VsZWN0czogKCgpID0+IHZvaWQpW10pID0+IHtcblx0Y29uc3QgZHJvcGRvd246IE9PLnVpLkRyb3Bkb3duV2lkZ2V0ID0gbmV3IE9PLnVpLkRyb3Bkb3duV2lkZ2V0KHtcblx0XHRsYWJlbDogZ2V0TWVzc2FnZSgnTGljZW5zZScpLFxuXHR9KTtcblxuXHRjb25zdCBtZW51T3B0aW9uczogT08udWkuTWVudU9wdGlvbldpZGdldFtdID0gW107XG5cblx0Zm9yIChjb25zdCB7ZGF0YSwgbGFiZWx9IG9mIExJQ0VOU0VTKSB7XG5cdFx0bWVudU9wdGlvbnNbbWVudU9wdGlvbnMubGVuZ3RoXSA9IG5ldyBPTy51aS5NZW51T3B0aW9uV2lkZ2V0KHtcblx0XHRcdGRhdGEsXG5cdFx0XHRsYWJlbCxcblx0XHR9KTtcblx0fVxuXG5cdGRyb3Bkb3duLmdldE1lbnUoKS5hZGRJdGVtcyhtZW51T3B0aW9ucyk7XG5cblx0Zm9yIChjb25zdCBvblNlbGVjdCBvZiBvblNlbGVjdHMpIHtcblx0XHRkcm9wZG93bi5nZXRNZW51KCkub24oJ3NlbGVjdCcsIG9uU2VsZWN0KTtcblx0fVxuXG5cdHJldHVybiBkcm9wZG93bjtcbn07XG5cbmNvbnN0IGdldEFkZEl0ZW1CdXR0b24gPSAoLi4ub25DbGlja3M6ICgoKSA9PiB2b2lkKVtdKTogT08udWkuQnV0dG9uSW5wdXRXaWRnZXQgPT4ge1xuXHRjb25zdCBhZGRJdGVtQnV0dG9uID0gbmV3IE9PLnVpLkJ1dHRvbklucHV0V2lkZ2V0KHtcblx0XHRsYWJlbDogZ2V0TWVzc2FnZSgnQWRkIHRvIEVkaXQgU3VtbWFyeScpLFxuXHR9KTtcblxuXHRmb3IgKGNvbnN0IG9uQ2xpY2sgb2Ygb25DbGlja3MpIHtcblx0XHRhZGRJdGVtQnV0dG9uLm9uKCdjbGljaycsIG9uQ2xpY2spO1xuXHR9XG5cblx0cmV0dXJuIGFkZEl0ZW1CdXR0b247XG59O1xuXG5jb25zdCBnZW5lcmF0ZVRleHRJbnB1dFdpdGhEcm9wZG93biA9ICh7JGJvZHksICR3cFN1bW1hcnl9OiB7JGJvZHk6IEpRdWVyeTxIVE1MRWxlbWVudD47ICR3cFN1bW1hcnk6IEpRdWVyeX0pID0+IHtcblx0Y29uc3QgaW5pdGlhbEZpZWxkc2V0ID0gbmV3IE9PLnVpLkZpZWxkc2V0TGF5b3V0KCk7XG5cdGNvbnN0IHBhcmVudEZpZWxkU2V0ID0gbmV3IE9PLnVpLkZpZWxkc2V0TGF5b3V0KHtcblx0XHRsYWJlbDogZ2V0TWVzc2FnZSgnUGxlYXNlIENsYWltIFNvdXJjZXMgYW5kIExpY2Vuc2VzJyksXG5cdH0pO1xuXG5cdGNvbnN0IGlucHV0T25DaGFuZ2UgPSAoKSA9PiB7XG5cdFx0dXBkYXRlV3BBdHRyaWJ1dGlvbih7JGJvZHksIHBhcmVudEZpZWxkU2V0fSk7XG5cdH07XG5cblx0Y29uc3QgdGV4dElucHV0ID0gZ2V0VGV4dElucHV0KGlucHV0T25DaGFuZ2UpO1xuXHRjb25zdCBkcm9wRG93biA9IGdldERyb3BEb3duKGlucHV0T25DaGFuZ2UpO1xuXG5cdGNvbnN0IGFkZEl0ZW1PbkNsaWNrID0gKCkgPT4ge1xuXHRcdGxldCB3cEF0dHJpYnV0aW9uOiBzdHJpbmcgPSAnJztcblxuXHRcdGNvbnN0ICR3cEF0dHJpYnV0aW9uOiBKUXVlcnkgPSAkKCc8aW5wdXQ+JykuYXR0cih7XG5cdFx0XHRpZDogJ3dwQXR0cmlidXRpb24nLFxuXHRcdFx0bmFtZTogJ3dwQXR0cmlidXRpb24nLFxuXHRcdFx0dHlwZTogJ2hpZGRlbicsXG5cdFx0XHR2YWx1ZTogJycsXG5cdFx0fSk7XG5cblx0XHRjb25zdCAkb3JpZ2lud3BBdHRyaWJ1dGlvbjogSlF1ZXJ5PEhUTUxJbnB1dEVsZW1lbnQ+ID1cblx0XHRcdCRib2R5LmZpbmQ8SFRNTElucHV0RWxlbWVudD4oJ2lucHV0W25hbWU9d3BBdHRyaWJ1dGlvbl0nKTtcblx0XHRpZiAoISRvcmlnaW53cEF0dHJpYnV0aW9uLmxlbmd0aCkge1xuXHRcdFx0JGJvZHkucHJlcGVuZCgkd3BBdHRyaWJ1dGlvbik7XG5cdFx0fVxuXG5cdFx0d3BBdHRyaWJ1dGlvbiA9IGdldEF0dHJpYnV0aW9uKHBhcmVudEZpZWxkU2V0KTtcblx0XHQkb3JpZ2lud3BBdHRyaWJ1dGlvbi52YWwod3BBdHRyaWJ1dGlvbik7XG5cblx0XHRhcHBlbmRUZXh0VG9TdW1tYXJ5KHtcblx0XHRcdGN1c3RvbVN1bW1hcnk6ICRvcmlnaW53cEF0dHJpYnV0aW9uLnZhbCgpXG5cdFx0XHRcdD8gYO+8uyR7Z2V0TWVzc2FnZSgnU291cmNlJyl9OiAkeyRvcmlnaW53cEF0dHJpYnV0aW9uLnZhbCgpfe+8vWBcblx0XHRcdFx0OiAnJyxcblx0XHRcdCR3cFN1bW1hcnksXG5cdFx0fSk7XG5cblx0XHR0ZXh0SW5wdXQuc2V0VmFsdWUoJycpO1xuXHRcdGRyb3BEb3duLmdldE1lbnUoKS51bnNlbGVjdEl0ZW0oKTtcblx0fTtcblxuXHRjb25zdCBhZGRJdGVtQnV0dG9uID0gZ2V0QWRkSXRlbUJ1dHRvbihhZGRJdGVtT25DbGljayk7XG5cblx0aW5pdGlhbEZpZWxkc2V0LmFkZEl0ZW1zKFtcblx0XHRuZXcgT08udWkuRmllbGRMYXlvdXQodGV4dElucHV0LCB7bGFiZWw6IGdldE1lc3NhZ2UoJ1NvdXJjZScpLCBhbGlnbjogJ2lubGluZSd9KSxcblx0XHRuZXcgT08udWkuRmllbGRMYXlvdXQoZHJvcERvd24sIHtsYWJlbDogZ2V0TWVzc2FnZSgnTGljZW5zZScpLCBhbGlnbjogJ2lubGluZSd9KSxcblx0XHRuZXcgT08udWkuRmllbGRMYXlvdXQoYWRkSXRlbUJ1dHRvbiwge2FsaWduOiAnaW5saW5lJ30pLFxuXHRdKTtcblxuXHRwYXJlbnRGaWVsZFNldC5hZGRJdGVtcyhbaW5pdGlhbEZpZWxkc2V0XSk7XG5cblx0cmV0dXJuIHBhcmVudEZpZWxkU2V0O1xufTtcblxuZXhwb3J0IHtnZW5lcmF0ZVRleHRJbnB1dFdpdGhEcm9wZG93bn07XG4iLCAiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVuc2FmZS1hcmd1bWVudCwgbWVkaWF3aWtpL2NsYXNzLWRvYyAqL1xuaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICd+L0VkaXRmb3JtX0F0dHJpYnV0aW9uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge2Zvcm1XcmFwfSBmcm9tICcuL0VkaXRmb3JtX0F0dHJpYnV0aW9uLm1vZHVsZS5sZXNzJztcbmltcG9ydCB7Z2VuZXJhdGVUZXh0SW5wdXRXaXRoRHJvcGRvd259IGZyb20gJy4vZ2VuZXJhdGVUZXh0SW5wdXRXaXRoRHJvcGRvd24nO1xuXG5pbnRlcmZhY2UgTGF5b3V0UHJvcHMge1xuXHQkYm9keTogSlF1ZXJ5PEhUTUxFbGVtZW50Pjtcbn1cblxuY29uc3QgZ2VuZXJhdGVWaXN1YWxFZGl0b3JMYXlvdXQgPSAoeyRib2R5fTogTGF5b3V0UHJvcHMpOiBKUXVlcnk8SFRNTEVsZW1lbnQ+ID0+IHtcblx0Y29uc3Qge3RhcmdldH0gPSB3aW5kb3cudmUuaW5pdDtcblx0Y29uc3QgJHdwU3VtbWFyeSA9IHRhcmdldC5zYXZlRGlhbG9nLmVkaXRTdW1tYXJ5SW5wdXQuJGlucHV0O1xuXHRjb25zdCB0ZXh0SW5wdXRXaXRoRHJvcGRvd24gPSBnZW5lcmF0ZVRleHRJbnB1dFdpdGhEcm9wZG93bih7JGJvZHksICR3cFN1bW1hcnl9KTtcblx0Y29uc3QgJGxheW91dCA9ICQoJzxkaXY+JykuYXR0cignaWQnLCBPUFRJT05TLmlucHV0SWQpLmFkZENsYXNzKGZvcm1XcmFwKTtcblx0JGxheW91dC5hcHBlbmQodGV4dElucHV0V2l0aERyb3Bkb3duLiRlbGVtZW50KTtcblxuXHRyZXR1cm4gJGxheW91dDtcbn07XG5cbmNvbnN0IGdlbmVyYXRlV2lraUVkaXRvckxheW91dCA9ICh7JGJvZHksICRlZGl0Rm9ybX06IExheW91dFByb3BzICYgeyRlZGl0Rm9ybTogSlF1ZXJ5fSk6IEpRdWVyeTxIVE1MRWxlbWVudD4gPT4ge1xuXHRjb25zdCAkd3BTdW1tYXJ5ID0gJGVkaXRGb3JtLmZpbmQoJ2lucHV0W25hbWU9d3BTdW1tYXJ5XScpO1xuXHRjb25zdCB0ZXh0SW5wdXRXaXRoRHJvcGRvd24gPSBnZW5lcmF0ZVRleHRJbnB1dFdpdGhEcm9wZG93bih7JGJvZHksICR3cFN1bW1hcnl9KTtcblx0Y29uc3QgJGxheW91dCA9ICQoJzxkaXY+JykuYXR0cignaWQnLCBPUFRJT05TLmlucHV0SWQpLmFkZENsYXNzKGZvcm1XcmFwKTtcblx0JGxheW91dC5hcHBlbmQodGV4dElucHV0V2l0aERyb3Bkb3duLiRlbGVtZW50KTtcblxuXHRyZXR1cm4gJGxheW91dDtcbn07XG5cbmV4cG9ydCB7Z2VuZXJhdGVWaXN1YWxFZGl0b3JMYXlvdXQsIGdlbmVyYXRlV2lraUVkaXRvckxheW91dH07XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICd+L0VkaXRmb3JtX0F0dHJpYnV0aW9uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge2dlbmVyYXRlVmlzdWFsRWRpdG9yTGF5b3V0fSBmcm9tICcuL3V0aWwvZ2VuZXJhdGVMYXlvdXQnO1xuXG5jb25zdCBwcm9jZXNzVmlzdWFsRWRpdG9yID0gKHskYm9keX06IHskYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD59KTogdm9pZCA9PiB7XG5cdC8vIEd1YXJkIGFnYWluc3QgZG91YmxlIGluY2x1c2lvbnNcblx0aWYgKG13LmNvbmZpZy5nZXQoT1BUSU9OUy5jb25maWdLZXlWZSkpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCB7dGFyZ2V0fSA9IHdpbmRvdy52ZS5pbml0O1xuXHRjb25zdCB7c2F2ZURpYWxvZ30gPSB0YXJnZXQ7XG5cdGNvbnN0IHskc2F2ZU9wdGlvbnN9ID0gc2F2ZURpYWxvZztcblx0aWYgKCEkc2F2ZU9wdGlvbnMubGVuZ3RoKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Ly8gU2V0IGd1YXJkXG5cdG13LmNvbmZpZy5zZXQoT1BUSU9OUy5jb25maWdLZXlWZSwgdHJ1ZSk7XG5cblx0Y29uc3QgJGxheW91dCA9IGdlbmVyYXRlVmlzdWFsRWRpdG9yTGF5b3V0KHskYm9keX0pO1xuXG5cdGlmICghJGJvZHkuZmluZChgIyR7T1BUSU9OUy5pbnB1dElkfWApLmxlbmd0aCkge1xuXHRcdCRzYXZlT3B0aW9ucy5hcHBlbmQoJGxheW91dCk7XG5cdH1cblxuXHQvLyBSZWluaXRpYWxpemF0aW9uIGlzIHJlcXVpcmVkIGZvciBzd2l0Y2hpbmcgYmV0d2VlbiBWaXN1YWxFZGl0b3IgYW5kIE5ldyBXaWtpdGV4dCBFZGl0b3IgKDIwMTcpXG5cdG13Lmhvb2soJ3ZlLmFjdGl2YXRpb25Db21wbGV0ZScpLmFkZCgoKSA9PiB7XG5cdFx0aWYgKG13LmNvbmZpZy5nZXQoT1BUSU9OUy5jb25maWdLZXlWZSkpIHtcblx0XHRcdG13LmNvbmZpZy5zZXQoT1BUSU9OUy5jb25maWdLZXlWZSwgZmFsc2UpO1xuXHRcdH1cblx0fSk7XG59O1xuXG5leHBvcnQge3Byb2Nlc3NWaXN1YWxFZGl0b3J9O1xuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnfi9FZGl0Zm9ybV9BdHRyaWJ1dGlvbi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtnZW5lcmF0ZVdpa2lFZGl0b3JMYXlvdXR9IGZyb20gJy4vdXRpbC9nZW5lcmF0ZUxheW91dCc7XG5cbmNvbnN0IHByb2Nlc3NXaWtpRWRpdG9yID0gKHskYm9keSwgJGVkaXRGb3JtfTogeyRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50PjsgJGVkaXRGb3JtOiBKUXVlcnl9KTogdm9pZCA9PiB7XG5cdC8vIEd1YXJkIGFnYWluc3QgZG91YmxlIGluY2x1c2lvbnNcblx0aWYgKG13LmNvbmZpZy5nZXQoT1BUSU9OUy5jb25maWdLZXkpKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgJHRhcmdldDogSlF1ZXJ5ID0gJGVkaXRGb3JtLmZpbmQoT1BUSU9OUy50YXJnZXRXaWtpRWRpdG9yKTtcblx0aWYgKCEkdGFyZ2V0Lmxlbmd0aCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdG13LmNvbmZpZy5zZXQoT1BUSU9OUy5jb25maWdLZXksIHRydWUpO1xuXG5cdGNvbnN0ICRsYXlvdXQgPSBnZW5lcmF0ZVdpa2lFZGl0b3JMYXlvdXQoeyRib2R5LCAkZWRpdEZvcm19KTtcblxuXHRpZiAoISRib2R5LmZpbmQoYCMke09QVElPTlMuaW5wdXRJZH1gKS5sZW5ndGgpIHtcblx0XHQkdGFyZ2V0LmFmdGVyKCRsYXlvdXQpO1xuXHR9XG59O1xuXG5leHBvcnQge3Byb2Nlc3NXaWtpRWRpdG9yfTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLHFCQUFzQkMsUUFBQSxpQkFBQTs7QUNDckIsSUFBQUMsWUFBYTtBQUNiLElBQUFDLGNBQWU7QUFFZixJQUFBQyxVQUFXO0FBQ1gsSUFBQUMsbUJBQW9COztBQ0pkLElBQU1DLFdBQVc7O0FDRHhCLElBQUFDLG9CQUF1Qk4sUUFBQSxpQkFBQTtBQUV2QixJQUFNTyxrQkFBa0JBLE1BQU07QUFDN0IsU0FBTztJQUNOLHdCQUFBLEdBQXVCRCxrQkFBQUUsVUFBUztNQUMvQkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNEQyxTQUFBLEdBQVFKLGtCQUFBRSxVQUFTO01BQ2hCQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0RFLFVBQUEsR0FBU0wsa0JBQUFFLFVBQVM7TUFDakJDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDRCxrQkFBQSxHQUFpQkgsa0JBQUFFLFVBQVM7TUFDekJDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDRCxzQ0FBQSxHQUFxQ0gsa0JBQUFFLFVBQVM7TUFDN0NDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDRCx5QkFBQSxHQUF3Qkgsa0JBQUFFLFVBQVM7TUFDaENDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7RUFDRjtBQUNEO0FBRUEsSUFBTUcsZUFBZUwsZ0JBQWdCO0FBRXJDLElBQU1NLGFBQWdEQyxTQUFRO0FBQzdELFNBQU9GLGFBQWFFLEdBQUcsS0FBS0E7QUFD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QUMvRCxNQUFJLENBQUNpSixRQUFRckYsUUFBUTtBQUNwQjtFQUNEO0FBRUE2RSxLQUFHQyxPQUFPRyxJQUFZaEosV0FBVyxJQUFJO0FBRXJDLFFBQU1xSSxVQUFVSSx5QkFBeUI7SUFBQ3hFO0lBQU95RTtFQUFTLENBQUM7QUFFM0QsTUFBSSxDQUFDekUsTUFBTVUsS0FBQSxJQUFBcEQsT0FBaUJyQixPQUFPLENBQUUsRUFBRTZELFFBQVE7QUFDOUNxRixZQUFRQyxNQUFNaEIsT0FBTztFQUN0QjtBQUNEOztBWGRBLE1BQUEsR0FBS3ZJLG1CQUFBd0osU0FBUSxFQUFFQyxLQUFLLFNBQVNDLFNBQVN2RixPQUFzQztBQUMzRTJFLEtBQUdLLEtBQUssbUJBQW1CLEVBQUVDLElBQUtSLGVBQW9CO0FBQ3JEUyxzQkFBa0I7TUFDakJsRjtNQUNBeUU7SUFDRCxDQUFDO0VBQ0YsQ0FBQztBQUVERSxLQUFHSyxLQUFLLDRCQUE0QixFQUFFQyxJQUFJLE1BQVk7QUFDckRQLHdCQUFvQjtNQUFDMUU7SUFBSyxDQUFDO0VBQzVCLENBQUM7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogWyJpbXBvcnRfZXh0X2dhZGdldDIiLCAicmVxdWlyZSIsICJjb25maWdLZXkiLCAiY29uZmlnS2V5VmUiLCAiaW5wdXRJZCIsICJ0YXJnZXRXaWtpRWRpdG9yIiwgImZvcm1XcmFwIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgImdldEkxOG5NZXNzYWdlcyIsICJsb2NhbGl6ZSIsICJlbiIsICJTb3VyY2UiLCAiTGljZW5zZSIsICJpMThuTWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAiTElDRU5TRVMiLCAibGFiZWwiLCAiZGF0YSIsICJWQUxJRF9JTlRFUldJS0lfUFJFRklYIiwgImdldExpbmtWYWx1ZSIsICJsaW5rIiwgInRleHQiLCAiVkFMSURfSU5URVJXSUtJX0xJTktfUkVHRVgiLCAiUmVnRXhwIiwgImNvbmNhdCIsICJqb2luIiwgInRlc3QiLCAicmVwbGFjZSIsICJlbmNvZGVVUkkiLCAiZGVjb2RlVVJJIiwgImdldEF0dHJpYnV0aW9uIiwgImZpZWxkU2V0TGF5b3V0IiwgImF0dHJpYnV0aW9ucyIsICJnZXRTZWxlY3RlZEl0ZW0iLCAiZHJvcGRvd24iLCAic2VsZWN0ZWRJdGVtIiwgImdldE1lbnUiLCAiZmluZFNlbGVjdGVkSXRlbSIsICJnZXRTZWxlY3RlZFZhbHVlIiwgImdldERhdGEiLCAiZ2V0U2VsZWN0ZWRMYWJlbCIsICJnZXRMYWJlbCIsICJfaXRlcmF0b3IiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAiZ2V0SXRlbXMiLCAiX3N0ZXAiLCAicyIsICJuIiwgImRvbmUiLCAiYXR0cmlidXRpb25GaWVsZHNldCIsICJ2YWx1ZSIsICJhdHRyaWJ1dGlvbiIsICJfaXRlcmF0b3IyIiwgIl9zdGVwMiIsICJmaWVsZExheW91dCIsICJmaWVsZCIsICJnZXRGaWVsZCIsICJzdXBwb3J0cyIsICJnZXRWYWx1ZSIsICJzb3VyY2UiLCAiZXJyIiwgImUiLCAiZiIsICJsaWNlbnNlIiwgImxlbmd0aCIsICJ1cGRhdGVXcEF0dHJpYnV0aW9uIiwgIiRib2R5IiwgInBhcmVudEZpZWxkU2V0IiwgIndwQXR0cmlidXRpb24iLCAiJHdwQXR0cmlidXRpb24iLCAiJCIsICJhdHRyIiwgImlkIiwgIm5hbWUiLCAidHlwZSIsICIkb3JpZ2lud3BBdHRyaWJ1dGlvbiIsICJmaW5kIiwgInByZXBlbmQiLCAidmFsIiwgImFwcGVuZFRleHRUb1N1bW1hcnkiLCAiY3VzdG9tU3VtbWFyeSIsICIkd3BTdW1tYXJ5IiwgIl8kd3BTdW1tYXJ5JHZhbCIsICJvcmlnaW5TdW1tYXJ5IiwgInRyaW0iLCAidHJpZ2dlciIsICJnZXRUZXh0SW5wdXQiLCAib25DaGFuZ2VzIiwgInRleHRJbnB1dCIsICJPTyIsICJ1aSIsICJUZXh0SW5wdXRXaWRnZXQiLCAicGxhY2Vob2xkZXIiLCAiX2kiLCAiX29uQ2hhbmdlcyIsICJvbkNoYW5nZSIsICJvbiIsICJnZXREcm9wRG93biIsICJvblNlbGVjdHMiLCAiRHJvcGRvd25XaWRnZXQiLCAibWVudU9wdGlvbnMiLCAiX2kyIiwgIl9MSUNFTlNFUyIsICJNZW51T3B0aW9uV2lkZ2V0IiwgImFkZEl0ZW1zIiwgIl9pMyIsICJfb25TZWxlY3RzIiwgIm9uU2VsZWN0IiwgImdldEFkZEl0ZW1CdXR0b24iLCAib25DbGlja3MiLCAiYWRkSXRlbUJ1dHRvbiIsICJCdXR0b25JbnB1dFdpZGdldCIsICJfaTQiLCAiX29uQ2xpY2tzIiwgIm9uQ2xpY2siLCAiZ2VuZXJhdGVUZXh0SW5wdXRXaXRoRHJvcGRvd24iLCAiaW5pdGlhbEZpZWxkc2V0IiwgIkZpZWxkc2V0TGF5b3V0IiwgImlucHV0T25DaGFuZ2UiLCAiZHJvcERvd24iLCAiYWRkSXRlbU9uQ2xpY2siLCAic2V0VmFsdWUiLCAidW5zZWxlY3RJdGVtIiwgIkZpZWxkTGF5b3V0IiwgImFsaWduIiwgImdlbmVyYXRlVmlzdWFsRWRpdG9yTGF5b3V0IiwgInRhcmdldCIsICJ3aW5kb3ciLCAidmUiLCAiaW5pdCIsICJzYXZlRGlhbG9nIiwgImVkaXRTdW1tYXJ5SW5wdXQiLCAiJGlucHV0IiwgInRleHRJbnB1dFdpdGhEcm9wZG93biIsICIkbGF5b3V0IiwgImFkZENsYXNzIiwgImFwcGVuZCIsICIkZWxlbWVudCIsICJnZW5lcmF0ZVdpa2lFZGl0b3JMYXlvdXQiLCAiJGVkaXRGb3JtIiwgInByb2Nlc3NWaXN1YWxFZGl0b3IiLCAibXciLCAiY29uZmlnIiwgImdldCIsICIkc2F2ZU9wdGlvbnMiLCAic2V0IiwgImhvb2siLCAiYWRkIiwgInByb2Nlc3NXaWtpRWRpdG9yIiwgIiR0YXJnZXQiLCAiYWZ0ZXIiLCAiZ2V0Qm9keSIsICJ0aGVuIiwgImVkaXRGb3JtIl0KfQo=

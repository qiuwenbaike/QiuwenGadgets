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
  const getSelectedValue = (dropdown) => {
    const selectedItem = dropdown.getMenu().findSelectedItem();
    return selectedItem ? selectedItem.getData() : void 0;
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
            const label = field.getLabel();
            if (value) {
              if (label) {
                attribution.source = getLinkValue(value, label);
              } else {
                attribution.source = getLinkValue(value);
              }
            }
          } else if (field.supports("getMenu")) {
            const value = getSelectedValue(field);
            if (value) {
              attribution.license = getLinkValue(value);
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0VkaXRmb3JtX0F0dHJpYnV0aW9uL0VkaXRmb3JtX0F0dHJpYnV0aW9uLnRzIiwgInNyYy9FZGl0Zm9ybV9BdHRyaWJ1dGlvbi9vcHRpb25zLmpzb24iLCAic3JjL0VkaXRmb3JtX0F0dHJpYnV0aW9uL21vZHVsZXMvdXRpbC9FZGl0Zm9ybV9BdHRyaWJ1dGlvbi5tb2R1bGUubGVzcyIsICJzcmMvRWRpdGZvcm1fQXR0cmlidXRpb24vbW9kdWxlcy9pMThuLnRzIiwgInNyYy9FZGl0Zm9ybV9BdHRyaWJ1dGlvbi9tb2R1bGVzL2NvbnN0YW50LnRzIiwgInNyYy9FZGl0Zm9ybV9BdHRyaWJ1dGlvbi9tb2R1bGVzL3V0aWwvZ2V0TGlua1ZhbHVlLnRzIiwgInNyYy9FZGl0Zm9ybV9BdHRyaWJ1dGlvbi9tb2R1bGVzL3V0aWwvZ2V0QXR0cmlidXRpb24udHMiLCAic3JjL0VkaXRmb3JtX0F0dHJpYnV0aW9uL21vZHVsZXMvdXRpbC9hcHBlbmRUZXh0VG9TdW1tYXJ5LnRzIiwgInNyYy9FZGl0Zm9ybV9BdHRyaWJ1dGlvbi9tb2R1bGVzL3V0aWwvZ2VuZXJhdGVUZXh0SW5wdXRXaXRoRHJvcGRvd24udHMiLCAic3JjL0VkaXRmb3JtX0F0dHJpYnV0aW9uL21vZHVsZXMvdXRpbC9nZW5lcmF0ZUxheW91dC50cyIsICJzcmMvRWRpdGZvcm1fQXR0cmlidXRpb24vbW9kdWxlcy9wcm9jZXNzVmlzdWFsRWRpdG9yLnRzIiwgInNyYy9FZGl0Zm9ybV9BdHRyaWJ1dGlvbi9tb2R1bGVzL3Byb2Nlc3NXaWtpRWRpdG9yLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQge2dldEJvZHl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5pbXBvcnQge3Byb2Nlc3NWaXN1YWxFZGl0b3J9IGZyb20gJy4vbW9kdWxlcy9wcm9jZXNzVmlzdWFsRWRpdG9yJztcbmltcG9ydCB7cHJvY2Vzc1dpa2lFZGl0b3J9IGZyb20gJy4vbW9kdWxlcy9wcm9jZXNzV2lraUVkaXRvcic7XG5cbi8qKlxuICogQGRlc2NyaXB0aW9uIOesrOS4ieaWueadpea6kOeJueauiuWjsOaYjlxuICovXG52b2lkIGdldEJvZHkoKS50aGVuKGZ1bmN0aW9uIGVkaXRGb3JtKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQge1xuXHRtdy5ob29rKCd3aWtpcGFnZS5lZGl0Zm9ybScpLmFkZCgoJGVkaXRGb3JtKTogdm9pZCA9PiB7XG5cdFx0cHJvY2Vzc1dpa2lFZGl0b3Ioe1xuXHRcdFx0JGJvZHksXG5cdFx0XHQkZWRpdEZvcm0sXG5cdFx0fSk7XG5cdH0pO1xuXG5cdG13Lmhvb2soJ3ZlLnNhdmVEaWFsb2cuc3RhdGVDaGFuZ2VkJykuYWRkKCgpOiB2b2lkID0+IHtcblx0XHRwcm9jZXNzVmlzdWFsRWRpdG9yKHskYm9keX0pO1xuXHR9KTtcbn0pO1xuIiwgIntcblx0XCJjb25maWdLZXlcIjogXCJnYWRnZXQtRWRpdGZvcm1fQXR0cmlidXRpb25fX0luaXRpYWxpemVkXCIsXG5cdFwiY29uZmlnS2V5VmVcIjogXCJnYWRnZXQtRWRpdGZvcm1fQXR0cmlidXRpb25fX0luaXRpYWxpemVkX19WRVwiLFxuXHRcImNoYW5nZVRhZ1wiOiBcIkF0dHJpYnV0aW9uX2FkZGVkXCIsXG5cdFwiaW5wdXRJZFwiOiBcImVkaXRmb3JtX2F0dHJpYnV0aW9uXCIsXG5cdFwidGFyZ2V0V2lraUVkaXRvclwiOiBcIi5lZGl0Q2hlY2tib3hlcyAub28tdWktaG9yaXpvbnRhbExheW91dFwiXG59XG4iLCAiaW1wb3J0IFwiZXNidWlsZC1jc3MtbW9kdWxlcy1wbHVnaW4tbnMtY3NzOnNyYy9FZGl0Zm9ybV9BdHRyaWJ1dGlvbi9tb2R1bGVzL3V0aWwvRWRpdGZvcm1fQXR0cmlidXRpb24ubW9kdWxlLmxlc3NcIjtcbmV4cG9ydCBjb25zdCBmb3JtV3JhcCA9IFwiRWRpdGZvcm0tQXR0cmlidXRpb24tbW9kdWxlX19mb3JtV3JhcF9tNWoyVWFfXzQ5MFwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIFwiZm9ybVdyYXBcIjogZm9ybVdyYXBcbn07XG4gICAgICAiLCAiaW1wb3J0IHtsb2NhbGl6ZX0gZnJvbSAnZXh0LmdhZGdldC5pMThuJztcblxuY29uc3QgZ2V0STE4bk1lc3NhZ2VzID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdCdBZGQgdG8gRWRpdCBTdW1tYXJ5JzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdBZGQgdG8gRWRpdCBTdW1tYXJ5Jyxcblx0XHRcdCd6aC1oYW5zJzogJ+a3u+WKoOiHs+e8lui+keaRmOimgScsXG5cdFx0XHQnemgtaGFudCc6ICfmt7vliqDoh7Pnt6jovK/mkZjopoEnLFxuXHRcdH0pLFxuXHRcdFNvdXJjZTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdTb3VyY2UnLFxuXHRcdFx0J3poLWhhbnMnOiAn5YaF5a655p2l5rqQJyxcblx0XHRcdCd6aC1oYW50JzogJ+WFp+WuueS+hua6kCcsXG5cdFx0fSksXG5cdFx0TGljZW5zZTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdMaWNlbnNlJyxcblx0XHRcdCd6aC1oYW5zJzogJ+iuuOWPr+ivgScsXG5cdFx0XHQnemgtaGFudCc6ICfoqLHlj6/orYknLFxuXHRcdH0pLFxuXHRcdCdPdGhlciBMaWNlbnNlJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdPdGhlciBsaWNlbnNlJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WFtuS7luiuuOWPr+ivgScsXG5cdFx0XHQnemgtaGFudCc6ICflhbbku5boqLHlj6/orYknLFxuXHRcdH0pLFxuXHRcdCdQbGVhc2UgQ2xhaW0gU291cmNlcyBhbmQgTGljZW5zZXMnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0lmIGVkaXQgY29udGVudCBhZGRzIGFueSB0aGlyZC1wYXJ0eSBjb250ZW50LCBwbGVhc2UgYWRkIHRoZSBzb3VyY2UgYW5kIGxpY2Vuc2Ugb2YgdGhlIHRoaXJkLXBhcnR5IGNvbnRlbnQgc2VwYXJhdGVseSB0byB0aGUgZWRpdGluZyBzdW1tYXJ5LicsXG5cdFx0XHQnemgtaGFucyc6ICfoi6XmgqjlkJHnvJbovpHlhoXlrrnkuK3mt7vliqDkuobnrKzkuInmlrnmkrDlhpnnmoTlhoXlrrnvvIzor7flsIbnm7jlhbPnrKzkuInmlrnlhoXlrrnnmoTmnaXmupDjgIHorrjlj6/mnaHmrL7lnKjnvJbovpHmkZjopoHkuK3liIbmnaHlo7DmmI4nLFxuXHRcdFx0J3poLWhhbnQnOiAn6Iul5oKo5ZCR57eo6Lyv5YWn5a655Lit5re75Yqg5LqG56ys5LiJ5pa55pKw5YaZ55qE5YWn5a6577yM6KuL5bCH55u45YWz56ys5LiJ5pa55YWn5a6555qE5L6G5rqQ44CB6Kix5Y+v5qKd5qy+5Zyo57eo6Lyv5pGY6KaB5Lit5YiG5qKd6IGy5piOJyxcblx0XHR9KSxcblx0XHQnUmVwbGFjZSBXaXRoIExpY2Vuc2UnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJyAoUmVwbGFjZSB3aXRoIGxpY2Vuc2UgbmFtZSBhbmQgVVJMKScsXG5cdFx0XHQnemgtaGFucyc6ICfvvIjmm7/mjaLkuLrorrjlj6/or4HlkI3np7DlkoznvZHlnYDvvIknLFxuXHRcdFx0J3poLWhhbnQnOiAn77yI5pu/5o+b54iy6Kix5Y+v6K2J5ZCN56ix5ZKM57ay5Z2A77yJJyxcblx0XHR9KSxcblx0fTtcbn07XG5cbmNvbnN0IGkxOG5NZXNzYWdlcyA9IGdldEkxOG5NZXNzYWdlcygpO1xuXG5jb25zdCBnZXRNZXNzYWdlOiBHZXRNZXNzYWdlczx0eXBlb2YgaTE4bk1lc3NhZ2VzPiA9IChrZXkpID0+IHtcblx0cmV0dXJuIGkxOG5NZXNzYWdlc1trZXldIHx8IGtleTtcbn07XG5cbmV4cG9ydCB7Z2V0TWVzc2FnZX07XG4iLCAiaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL2kxOG4nO1xuXG5jb25zdCBMSUNFTlNFUyA9IFtcblx0e1xuXHRcdGxhYmVsOiAnQ0MgQlktU0EgNC4wJyxcblx0XHRkYXRhOiAnY2MtYnktc2E6NC4wJyxcblx0fSxcblx0e1xuXHRcdGxhYmVsOiAnQ0MgQlktU0EgMy4wJyxcblx0XHRkYXRhOiAnY2MtYnktc2E6My4wJyxcblx0fSxcblx0e1xuXHRcdGxhYmVsOiAnQ0MgQlktU0EgMy4wIENOJyxcblx0XHRkYXRhOiAnY2MtYnktc2E6My4wL2NuJyxcblx0fSxcblx0e1xuXHRcdGxhYmVsOiAnQ0MgQlkgNC4wJyxcblx0XHRkYXRhOiAnY2MtYnk6NC4wJyxcblx0fSxcblx0e1xuXHRcdGxhYmVsOiAnQ0MgQlkgMy4wJyxcblx0XHRkYXRhOiAnY2MtYnk6My4wJyxcblx0fSxcblx0e1xuXHRcdGxhYmVsOiAnQ0MgQlkgMy4wIENOJyxcblx0XHRkYXRhOiAnY2MtYnk6My4wL2NuJyxcblx0fSxcblx0e1xuXHRcdGxhYmVsOiAnQ0MwLTEuMCcsXG5cdFx0ZGF0YTogJ2NjLXplcm86MS4wJyxcblx0fSxcblx0e1xuXHRcdGxhYmVsOiAnS09HTCBUeXBlIEk6IEF0dHJpYnV0aW9uJyxcblx0XHRkYXRhOiAnaHR0cHM6Ly93d3cua29nbC5vci5rci9pbmZvL2xpY2Vuc2VUeXBlMS5kbycsXG5cdH0sXG5cdHtcblx0XHRsYWJlbDogZ2V0TWVzc2FnZSgnT3RoZXIgTGljZW5zZScpLFxuXHRcdGRhdGE6IGdldE1lc3NhZ2UoJ1JlcGxhY2UgV2l0aCBMaWNlbnNlJyksXG5cdH0sXG5dO1xuXG5jb25zdCBWQUxJRF9JTlRFUldJS0lfUFJFRklYID0gW1xuXHQnY2MtYnknLFxuXHQnY2MtYnktc2EnLFxuXHQnY2MtemVybycsXG5cdCdjYzAnLFxuXHQnY29tbW9ucycsXG5cdCdlbndpa2knLFxuXHQnaW5jdWJhdG9yJyxcblx0J2luY3ViYXRvci13cC1tbmMnLFxuXHQnaW5jdWJhdG9yLXd0LW1uYycsXG5cdCdpc282MzktMycsXG5cdCdsZXhlbWVzJyxcblx0J2xpY2VuY2UnLFxuXHQnbGljZW5jZXdpa2knLFxuXHQnbGljZW5zZScsXG5cdCdsb2dpbicsXG5cdCdsb2dpbnFpdXdlbmJhaWtlJyxcblx0J2xvZ2lud2lraScsXG5cdCdtZWRpYXdpa2l3aWtpJyxcblx0J21vemlsbGF3aWtpJyxcblx0J213Jyxcblx0J29sZHdpa2lzb3VyY2UnLFxuXHQncG1pZCcsXG5cdCdxaXV3ZW5iYWlrZScsXG5cdCdyZXYnLFxuXHQndGVzdHdpa2lkYXRhJyxcblx0J3YnLFxuXHQndm95Jyxcblx0J3dpa2knLFxuXHQnd2lraWJvb2tzJyxcblx0J3dpa2lkYXRhJyxcblx0J3dpa2lmdW5jdGlvbnMnLFxuXHQnd2lraW5ld3MnLFxuXHQnd2lraXBlZGlhJyxcblx0J3dpa2lxdW90ZScsXG5cdCd3aWtpc291cmNlJyxcblx0J3dpa2l2ZXJzaXR5Jyxcblx0J3dpa2l2b3lhZ2UnLFxuXHQnd2lrdCcsXG5cdCd3aWt0aW9uYXJ5Jyxcblx0J3pocWl1d2VuYmFpa2UnLFxuXHQnemh3aWtpJyxcblx0J3pod2lraXNvdXJjZScsXG5cdCd6aHdpa2l2b3lhZ2UnLFxuXTtcblxuZXhwb3J0IHtMSUNFTlNFUywgVkFMSURfSU5URVJXSUtJX1BSRUZJWH07XG4iLCAiaW1wb3J0IHtWQUxJRF9JTlRFUldJS0lfUFJFRklYfSBmcm9tICcuLi9jb25zdGFudCc7XG5cbmNvbnN0IGdldExpbmtWYWx1ZSA9IChsaW5rOiBzdHJpbmcsIHRleHQ/OiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuXHRjb25zdCBWQUxJRF9JTlRFUldJS0lfTElOS19SRUdFWCA9IG5ldyBSZWdFeHAoYF46Pygke1ZBTElEX0lOVEVSV0lLSV9QUkVGSVguam9pbignfCcpfSlgLCAnaScpO1xuXG5cdGlmIChWQUxJRF9JTlRFUldJS0lfTElOS19SRUdFWC50ZXN0KGxpbmspKSB7XG5cdFx0bGluayA9IGA6JHtsaW5rLnJlcGxhY2UoL146LywgJycpfWA7XG5cdFx0aWYgKHRleHQpIHtcblx0XHRcdHJldHVybiBgW1ske2xpbmt9fCR7dGV4dH1dXWA7XG5cdFx0fVxuXHRcdHJldHVybiBgW1ske2xpbmt9XV1gO1xuXHR9XG5cblx0cmV0dXJuIGVuY29kZVVSSShkZWNvZGVVUkkobGluaykpO1xufTtcblxuZXhwb3J0IHtnZXRMaW5rVmFsdWV9O1xuIiwgImltcG9ydCB7Z2V0TGlua1ZhbHVlfSBmcm9tICcuL2dldExpbmtWYWx1ZSc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4uL2kxOG4nO1xuXG5jb25zdCBnZXRBdHRyaWJ1dGlvbiA9IChmaWVsZFNldExheW91dDogT08udWkuRmllbGRzZXRMYXlvdXQpID0+IHtcblx0Y29uc3QgYXR0cmlidXRpb25zID0gW107XG5cblx0Y29uc3QgZ2V0U2VsZWN0ZWRWYWx1ZSA9IChkcm9wZG93bjogT08udWkuRHJvcGRvd25XaWRnZXQpOiBzdHJpbmcgfCB1bmRlZmluZWQgPT4ge1xuXHRcdGNvbnN0IHNlbGVjdGVkSXRlbTogT08udWkuT3B0aW9uV2lkZ2V0IHwgbnVsbCA9IGRyb3Bkb3duXG5cdFx0XHQuZ2V0TWVudSgpXG5cdFx0XHQuZmluZFNlbGVjdGVkSXRlbSgpIGFzIE9PLnVpLk9wdGlvbldpZGdldCB8IG51bGw7XG5cdFx0cmV0dXJuIHNlbGVjdGVkSXRlbSA/IChzZWxlY3RlZEl0ZW0uZ2V0RGF0YSgpIGFzIHN0cmluZykgOiB1bmRlZmluZWQ7XG5cdH07XG5cblx0Zm9yIChjb25zdCBhdHRyaWJ1dGlvbkZpZWxkc2V0IG9mIGZpZWxkU2V0TGF5b3V0LmdldEl0ZW1zKCkgYXMgT08udWkuRmllbGRzZXRMYXlvdXRbXSkge1xuXHRcdGNvbnN0IGF0dHJpYnV0aW9uOiB7c291cmNlPzogc3RyaW5nOyBsaWNlbnNlPzogc3RyaW5nfSA9IHt9O1xuXG5cdFx0Zm9yIChjb25zdCBmaWVsZExheW91dCBvZiBhdHRyaWJ1dGlvbkZpZWxkc2V0LmdldEl0ZW1zKCkgYXMgT08udWkuRmllbGRMYXlvdXRbXSkge1xuXHRcdFx0Y29uc3QgZmllbGQgPSBmaWVsZExheW91dC5nZXRGaWVsZCgpO1xuXG5cdFx0XHRpZiAoZmllbGQuc3VwcG9ydHMoJ2dldFZhbHVlJykpIHtcblx0XHRcdFx0Y29uc3QgdmFsdWUgPSAoZmllbGQgYXMgT08udWkuVGV4dElucHV0V2lkZ2V0KS5nZXRWYWx1ZSgpO1xuXHRcdFx0XHRjb25zdCBsYWJlbCA9IChmaWVsZCBhcyBPTy51aS5UZXh0SW5wdXRXaWRnZXQpLmdldExhYmVsKCkgYXMgc3RyaW5nIHwgdW5kZWZpbmVkO1xuXHRcdFx0XHRpZiAodmFsdWUpIHtcblx0XHRcdFx0XHRpZiAobGFiZWwpIHtcblx0XHRcdFx0XHRcdGF0dHJpYnV0aW9uLnNvdXJjZSA9IGdldExpbmtWYWx1ZSh2YWx1ZSwgbGFiZWwpO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRhdHRyaWJ1dGlvbi5zb3VyY2UgPSBnZXRMaW5rVmFsdWUodmFsdWUpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIGlmIChmaWVsZC5zdXBwb3J0cygnZ2V0TWVudScpKSB7XG5cdFx0XHRcdGNvbnN0IHZhbHVlID0gZ2V0U2VsZWN0ZWRWYWx1ZShmaWVsZCBhcyBPTy51aS5Ecm9wZG93bldpZGdldCk7XG5cdFx0XHRcdGlmICh2YWx1ZSkge1xuXHRcdFx0XHRcdGF0dHJpYnV0aW9uLmxpY2Vuc2UgPSBnZXRMaW5rVmFsdWUodmFsdWUpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKGF0dHJpYnV0aW9uLnNvdXJjZSAmJiBhdHRyaWJ1dGlvbi5saWNlbnNlKSB7XG5cdFx0XHRhdHRyaWJ1dGlvbnNbYXR0cmlidXRpb25zLmxlbmd0aF0gPVxuXHRcdFx0XHRgJHthdHRyaWJ1dGlvbi5zb3VyY2V9ICgke2dldE1lc3NhZ2UoJ0xpY2Vuc2UnKX06ICR7YXR0cmlidXRpb24ubGljZW5zZX0pYDtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gYXR0cmlidXRpb25zLmpvaW4oJyAnKTtcbn07XG5cbmNvbnN0IHVwZGF0ZVdwQXR0cmlidXRpb24gPSAoe1xuXHQkYm9keSxcblx0cGFyZW50RmllbGRTZXQsXG59OiB7XG5cdCRib2R5OiBKUXVlcnk8SFRNTEVsZW1lbnQ+O1xuXHRwYXJlbnRGaWVsZFNldDogT08udWkuRmllbGRzZXRMYXlvdXQ7XG59KSA9PiB7XG5cdGxldCB3cEF0dHJpYnV0aW9uOiBzdHJpbmcgPSAnJztcblxuXHRjb25zdCAkd3BBdHRyaWJ1dGlvbjogSlF1ZXJ5ID0gJCgnPGlucHV0PicpLmF0dHIoe1xuXHRcdGlkOiAnd3BBdHRyaWJ1dGlvbicsXG5cdFx0bmFtZTogJ3dwQXR0cmlidXRpb24nLFxuXHRcdHR5cGU6ICdoaWRkZW4nLFxuXHRcdHZhbHVlOiAnJyxcblx0fSk7XG5cdGNvbnN0ICRvcmlnaW53cEF0dHJpYnV0aW9uOiBKUXVlcnkgPSAkYm9keS5maW5kKCdpbnB1dFtuYW1lPXdwQXR0cmlidXRpb25dJyk7XG5cdGlmICghJG9yaWdpbndwQXR0cmlidXRpb24ubGVuZ3RoKSB7XG5cdFx0JGJvZHkucHJlcGVuZCgkd3BBdHRyaWJ1dGlvbik7XG5cdH1cblxuXHR3cEF0dHJpYnV0aW9uID0gZ2V0QXR0cmlidXRpb24ocGFyZW50RmllbGRTZXQpO1xuXHQkb3JpZ2lud3BBdHRyaWJ1dGlvbi52YWwod3BBdHRyaWJ1dGlvbik7XG59O1xuXG5leHBvcnQge2dldEF0dHJpYnV0aW9uLCB1cGRhdGVXcEF0dHJpYnV0aW9ufTtcbiIsICJjb25zdCBhcHBlbmRUZXh0VG9TdW1tYXJ5ID0gKHtjdXN0b21TdW1tYXJ5LCAkd3BTdW1tYXJ5fToge2N1c3RvbVN1bW1hcnk6IHN0cmluZzsgJHdwU3VtbWFyeTogSlF1ZXJ5fSk6IHZvaWQgPT4ge1xuXHRjb25zdCBvcmlnaW5TdW1tYXJ5OiBzdHJpbmcgPSAoJHdwU3VtbWFyeS52YWwoKSBhcyBzdHJpbmcgfCB1bmRlZmluZWQpID8/ICcnO1xuXG5cdCR3cFN1bW1hcnkudmFsKG9yaWdpblN1bW1hcnkudHJpbSgpID8gYCR7b3JpZ2luU3VtbWFyeX0gJHtjdXN0b21TdW1tYXJ5fWAgOiBjdXN0b21TdW1tYXJ5KS50cmlnZ2VyKCdjaGFuZ2UnKTtcbn07XG5cbmV4cG9ydCB7YXBwZW5kVGV4dFRvU3VtbWFyeX07XG4iLCAiaW1wb3J0IHtnZXRBdHRyaWJ1dGlvbiwgdXBkYXRlV3BBdHRyaWJ1dGlvbn0gZnJvbSAnLi9nZXRBdHRyaWJ1dGlvbic7XG5pbXBvcnQge0xJQ0VOU0VTfSBmcm9tICcuLi9jb25zdGFudCc7XG5pbXBvcnQge2FwcGVuZFRleHRUb1N1bW1hcnl9IGZyb20gJy4vYXBwZW5kVGV4dFRvU3VtbWFyeSc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4uL2kxOG4nO1xuXG5jb25zdCBnZXRUZXh0SW5wdXQgPSAoLi4ub25DaGFuZ2VzOiAoKCkgPT4gdm9pZClbXSkgPT4ge1xuXHRjb25zdCB0ZXh0SW5wdXQgPSBuZXcgT08udWkuVGV4dElucHV0V2lkZ2V0KHtcblx0XHRwbGFjZWhvbGRlcjogZ2V0TWVzc2FnZSgnU291cmNlJyksXG5cdH0pO1xuXG5cdGZvciAoY29uc3Qgb25DaGFuZ2Ugb2Ygb25DaGFuZ2VzKSB7XG5cdFx0dGV4dElucHV0Lm9uKCdjaGFuZ2UnLCBvbkNoYW5nZSk7XG5cdH1cblxuXHRyZXR1cm4gdGV4dElucHV0O1xufTtcblxuY29uc3QgZ2V0RHJvcERvd24gPSAoLi4ub25TZWxlY3RzOiAoKCkgPT4gdm9pZClbXSkgPT4ge1xuXHRjb25zdCBkcm9wZG93bjogT08udWkuRHJvcGRvd25XaWRnZXQgPSBuZXcgT08udWkuRHJvcGRvd25XaWRnZXQoe1xuXHRcdGxhYmVsOiBnZXRNZXNzYWdlKCdMaWNlbnNlJyksXG5cdH0pO1xuXG5cdGNvbnN0IG1lbnVPcHRpb25zOiBPTy51aS5NZW51T3B0aW9uV2lkZ2V0W10gPSBbXTtcblxuXHRmb3IgKGNvbnN0IHtkYXRhLCBsYWJlbH0gb2YgTElDRU5TRVMpIHtcblx0XHRtZW51T3B0aW9uc1ttZW51T3B0aW9ucy5sZW5ndGhdID0gbmV3IE9PLnVpLk1lbnVPcHRpb25XaWRnZXQoe1xuXHRcdFx0ZGF0YSxcblx0XHRcdGxhYmVsLFxuXHRcdH0pO1xuXHR9XG5cblx0ZHJvcGRvd24uZ2V0TWVudSgpLmFkZEl0ZW1zKG1lbnVPcHRpb25zKTtcblxuXHRmb3IgKGNvbnN0IG9uU2VsZWN0IG9mIG9uU2VsZWN0cykge1xuXHRcdGRyb3Bkb3duLmdldE1lbnUoKS5vbignc2VsZWN0Jywgb25TZWxlY3QpO1xuXHR9XG5cblx0cmV0dXJuIGRyb3Bkb3duO1xufTtcblxuY29uc3QgZ2V0QWRkSXRlbUJ1dHRvbiA9ICguLi5vbkNsaWNrczogKCgpID0+IHZvaWQpW10pOiBPTy51aS5CdXR0b25JbnB1dFdpZGdldCA9PiB7XG5cdGNvbnN0IGFkZEl0ZW1CdXR0b24gPSBuZXcgT08udWkuQnV0dG9uSW5wdXRXaWRnZXQoe1xuXHRcdGxhYmVsOiBnZXRNZXNzYWdlKCdBZGQgdG8gRWRpdCBTdW1tYXJ5JyksXG5cdH0pO1xuXG5cdGZvciAoY29uc3Qgb25DbGljayBvZiBvbkNsaWNrcykge1xuXHRcdGFkZEl0ZW1CdXR0b24ub24oJ2NsaWNrJywgb25DbGljayk7XG5cdH1cblxuXHRyZXR1cm4gYWRkSXRlbUJ1dHRvbjtcbn07XG5cbmNvbnN0IGdlbmVyYXRlVGV4dElucHV0V2l0aERyb3Bkb3duID0gKHskYm9keSwgJHdwU3VtbWFyeX06IHskYm9keTogSlF1ZXJ5PEhUTUxFbGVtZW50PjsgJHdwU3VtbWFyeTogSlF1ZXJ5fSkgPT4ge1xuXHRjb25zdCBpbml0aWFsRmllbGRzZXQgPSBuZXcgT08udWkuRmllbGRzZXRMYXlvdXQoKTtcblx0Y29uc3QgcGFyZW50RmllbGRTZXQgPSBuZXcgT08udWkuRmllbGRzZXRMYXlvdXQoe1xuXHRcdGxhYmVsOiBnZXRNZXNzYWdlKCdQbGVhc2UgQ2xhaW0gU291cmNlcyBhbmQgTGljZW5zZXMnKSxcblx0fSk7XG5cblx0Y29uc3QgaW5wdXRPbkNoYW5nZSA9ICgpID0+IHtcblx0XHR1cGRhdGVXcEF0dHJpYnV0aW9uKHskYm9keSwgcGFyZW50RmllbGRTZXR9KTtcblx0fTtcblxuXHRjb25zdCB0ZXh0SW5wdXQgPSBnZXRUZXh0SW5wdXQoaW5wdXRPbkNoYW5nZSk7XG5cdGNvbnN0IGRyb3BEb3duID0gZ2V0RHJvcERvd24oaW5wdXRPbkNoYW5nZSk7XG5cblx0Y29uc3QgYWRkSXRlbU9uQ2xpY2sgPSAoKSA9PiB7XG5cdFx0bGV0IHdwQXR0cmlidXRpb246IHN0cmluZyA9ICcnO1xuXG5cdFx0Y29uc3QgJHdwQXR0cmlidXRpb246IEpRdWVyeSA9ICQoJzxpbnB1dD4nKS5hdHRyKHtcblx0XHRcdGlkOiAnd3BBdHRyaWJ1dGlvbicsXG5cdFx0XHRuYW1lOiAnd3BBdHRyaWJ1dGlvbicsXG5cdFx0XHR0eXBlOiAnaGlkZGVuJyxcblx0XHRcdHZhbHVlOiAnJyxcblx0XHR9KTtcblxuXHRcdGNvbnN0ICRvcmlnaW53cEF0dHJpYnV0aW9uOiBKUXVlcnk8SFRNTElucHV0RWxlbWVudD4gPVxuXHRcdFx0JGJvZHkuZmluZDxIVE1MSW5wdXRFbGVtZW50PignaW5wdXRbbmFtZT13cEF0dHJpYnV0aW9uXScpO1xuXHRcdGlmICghJG9yaWdpbndwQXR0cmlidXRpb24ubGVuZ3RoKSB7XG5cdFx0XHQkYm9keS5wcmVwZW5kKCR3cEF0dHJpYnV0aW9uKTtcblx0XHR9XG5cblx0XHR3cEF0dHJpYnV0aW9uID0gZ2V0QXR0cmlidXRpb24ocGFyZW50RmllbGRTZXQpO1xuXHRcdCRvcmlnaW53cEF0dHJpYnV0aW9uLnZhbCh3cEF0dHJpYnV0aW9uKTtcblxuXHRcdGFwcGVuZFRleHRUb1N1bW1hcnkoe1xuXHRcdFx0Y3VzdG9tU3VtbWFyeTogJG9yaWdpbndwQXR0cmlidXRpb24udmFsKClcblx0XHRcdFx0PyBg77y7JHtnZXRNZXNzYWdlKCdTb3VyY2UnKX06ICR7JG9yaWdpbndwQXR0cmlidXRpb24udmFsKCl977y9YFxuXHRcdFx0XHQ6ICcnLFxuXHRcdFx0JHdwU3VtbWFyeSxcblx0XHR9KTtcblxuXHRcdHRleHRJbnB1dC5zZXRWYWx1ZSgnJyk7XG5cdFx0ZHJvcERvd24uZ2V0TWVudSgpLnVuc2VsZWN0SXRlbSgpO1xuXHR9O1xuXG5cdGNvbnN0IGFkZEl0ZW1CdXR0b24gPSBnZXRBZGRJdGVtQnV0dG9uKGFkZEl0ZW1PbkNsaWNrKTtcblxuXHRpbml0aWFsRmllbGRzZXQuYWRkSXRlbXMoW1xuXHRcdG5ldyBPTy51aS5GaWVsZExheW91dCh0ZXh0SW5wdXQsIHtsYWJlbDogZ2V0TWVzc2FnZSgnU291cmNlJyksIGFsaWduOiAnaW5saW5lJ30pLFxuXHRcdG5ldyBPTy51aS5GaWVsZExheW91dChkcm9wRG93biwge2xhYmVsOiBnZXRNZXNzYWdlKCdMaWNlbnNlJyksIGFsaWduOiAnaW5saW5lJ30pLFxuXHRcdG5ldyBPTy51aS5GaWVsZExheW91dChhZGRJdGVtQnV0dG9uLCB7YWxpZ246ICdpbmxpbmUnfSksXG5cdF0pO1xuXG5cdHBhcmVudEZpZWxkU2V0LmFkZEl0ZW1zKFtpbml0aWFsRmllbGRzZXRdKTtcblxuXHRyZXR1cm4gcGFyZW50RmllbGRTZXQ7XG59O1xuXG5leHBvcnQge2dlbmVyYXRlVGV4dElucHV0V2l0aERyb3Bkb3dufTtcbiIsICIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW5zYWZlLWFyZ3VtZW50LCBtZWRpYXdpa2kvY2xhc3MtZG9jICovXG5pbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJ34vRWRpdGZvcm1fQXR0cmlidXRpb24vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7Zm9ybVdyYXB9IGZyb20gJy4vRWRpdGZvcm1fQXR0cmlidXRpb24ubW9kdWxlLmxlc3MnO1xuaW1wb3J0IHtnZW5lcmF0ZVRleHRJbnB1dFdpdGhEcm9wZG93bn0gZnJvbSAnLi9nZW5lcmF0ZVRleHRJbnB1dFdpdGhEcm9wZG93bic7XG5cbmludGVyZmFjZSBMYXlvdXRQcm9wcyB7XG5cdCRib2R5OiBKUXVlcnk8SFRNTEVsZW1lbnQ+O1xufVxuXG5jb25zdCBnZW5lcmF0ZVZpc3VhbEVkaXRvckxheW91dCA9ICh7JGJvZHl9OiBMYXlvdXRQcm9wcyk6IEpRdWVyeTxIVE1MRWxlbWVudD4gPT4ge1xuXHRjb25zdCB7dGFyZ2V0fSA9IHdpbmRvdy52ZS5pbml0O1xuXHRjb25zdCAkd3BTdW1tYXJ5ID0gdGFyZ2V0LnNhdmVEaWFsb2cuZWRpdFN1bW1hcnlJbnB1dC4kaW5wdXQ7XG5cdGNvbnN0IHRleHRJbnB1dFdpdGhEcm9wZG93biA9IGdlbmVyYXRlVGV4dElucHV0V2l0aERyb3Bkb3duKHskYm9keSwgJHdwU3VtbWFyeX0pO1xuXHRjb25zdCAkbGF5b3V0ID0gJCgnPGRpdj4nKS5hdHRyKCdpZCcsIE9QVElPTlMuaW5wdXRJZCkuYWRkQ2xhc3MoZm9ybVdyYXApO1xuXHQkbGF5b3V0LmFwcGVuZCh0ZXh0SW5wdXRXaXRoRHJvcGRvd24uJGVsZW1lbnQpO1xuXG5cdHJldHVybiAkbGF5b3V0O1xufTtcblxuY29uc3QgZ2VuZXJhdGVXaWtpRWRpdG9yTGF5b3V0ID0gKHskYm9keSwgJGVkaXRGb3JtfTogTGF5b3V0UHJvcHMgJiB7JGVkaXRGb3JtOiBKUXVlcnl9KTogSlF1ZXJ5PEhUTUxFbGVtZW50PiA9PiB7XG5cdGNvbnN0ICR3cFN1bW1hcnkgPSAkZWRpdEZvcm0uZmluZCgnaW5wdXRbbmFtZT13cFN1bW1hcnldJyk7XG5cdGNvbnN0IHRleHRJbnB1dFdpdGhEcm9wZG93biA9IGdlbmVyYXRlVGV4dElucHV0V2l0aERyb3Bkb3duKHskYm9keSwgJHdwU3VtbWFyeX0pO1xuXHRjb25zdCAkbGF5b3V0ID0gJCgnPGRpdj4nKS5hdHRyKCdpZCcsIE9QVElPTlMuaW5wdXRJZCkuYWRkQ2xhc3MoZm9ybVdyYXApO1xuXHQkbGF5b3V0LmFwcGVuZCh0ZXh0SW5wdXRXaXRoRHJvcGRvd24uJGVsZW1lbnQpO1xuXG5cdHJldHVybiAkbGF5b3V0O1xufTtcblxuZXhwb3J0IHtnZW5lcmF0ZVZpc3VhbEVkaXRvckxheW91dCwgZ2VuZXJhdGVXaWtpRWRpdG9yTGF5b3V0fTtcbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJ34vRWRpdGZvcm1fQXR0cmlidXRpb24vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7Z2VuZXJhdGVWaXN1YWxFZGl0b3JMYXlvdXR9IGZyb20gJy4vdXRpbC9nZW5lcmF0ZUxheW91dCc7XG5cbmNvbnN0IHByb2Nlc3NWaXN1YWxFZGl0b3IgPSAoeyRib2R5fTogeyRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pn0pOiB2b2lkID0+IHtcblx0Ly8gR3VhcmQgYWdhaW5zdCBkb3VibGUgaW5jbHVzaW9uc1xuXHRpZiAobXcuY29uZmlnLmdldChPUFRJT05TLmNvbmZpZ0tleVZlKSkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IHt0YXJnZXR9ID0gd2luZG93LnZlLmluaXQ7XG5cdGNvbnN0IHtzYXZlRGlhbG9nfSA9IHRhcmdldDtcblx0Y29uc3QgeyRzYXZlT3B0aW9uc30gPSBzYXZlRGlhbG9nO1xuXHRpZiAoISRzYXZlT3B0aW9ucy5sZW5ndGgpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHQvLyBTZXQgZ3VhcmRcblx0bXcuY29uZmlnLnNldChPUFRJT05TLmNvbmZpZ0tleVZlLCB0cnVlKTtcblxuXHRjb25zdCAkbGF5b3V0ID0gZ2VuZXJhdGVWaXN1YWxFZGl0b3JMYXlvdXQoeyRib2R5fSk7XG5cblx0aWYgKCEkYm9keS5maW5kKGAjJHtPUFRJT05TLmlucHV0SWR9YCkubGVuZ3RoKSB7XG5cdFx0JHNhdmVPcHRpb25zLmFwcGVuZCgkbGF5b3V0KTtcblx0fVxuXG5cdC8vIFJlaW5pdGlhbGl6YXRpb24gaXMgcmVxdWlyZWQgZm9yIHN3aXRjaGluZyBiZXR3ZWVuIFZpc3VhbEVkaXRvciBhbmQgTmV3IFdpa2l0ZXh0IEVkaXRvciAoMjAxNylcblx0bXcuaG9vaygndmUuYWN0aXZhdGlvbkNvbXBsZXRlJykuYWRkKCgpID0+IHtcblx0XHRpZiAobXcuY29uZmlnLmdldChPUFRJT05TLmNvbmZpZ0tleVZlKSkge1xuXHRcdFx0bXcuY29uZmlnLnNldChPUFRJT05TLmNvbmZpZ0tleVZlLCBmYWxzZSk7XG5cdFx0fVxuXHR9KTtcbn07XG5cbmV4cG9ydCB7cHJvY2Vzc1Zpc3VhbEVkaXRvcn07XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICd+L0VkaXRmb3JtX0F0dHJpYnV0aW9uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge2dlbmVyYXRlV2lraUVkaXRvckxheW91dH0gZnJvbSAnLi91dGlsL2dlbmVyYXRlTGF5b3V0JztcblxuY29uc3QgcHJvY2Vzc1dpa2lFZGl0b3IgPSAoeyRib2R5LCAkZWRpdEZvcm19OiB7JGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+OyAkZWRpdEZvcm06IEpRdWVyeX0pOiB2b2lkID0+IHtcblx0Ly8gR3VhcmQgYWdhaW5zdCBkb3VibGUgaW5jbHVzaW9uc1xuXHRpZiAobXcuY29uZmlnLmdldChPUFRJT05TLmNvbmZpZ0tleSkpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCAkdGFyZ2V0OiBKUXVlcnkgPSAkZWRpdEZvcm0uZmluZChPUFRJT05TLnRhcmdldFdpa2lFZGl0b3IpO1xuXHRpZiAoISR0YXJnZXQubGVuZ3RoKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0bXcuY29uZmlnLnNldChPUFRJT05TLmNvbmZpZ0tleSwgdHJ1ZSk7XG5cblx0Y29uc3QgJGxheW91dCA9IGdlbmVyYXRlV2lraUVkaXRvckxheW91dCh7JGJvZHksICRlZGl0Rm9ybX0pO1xuXG5cdGlmICghJGJvZHkuZmluZChgIyR7T1BUSU9OUy5pbnB1dElkfWApLmxlbmd0aCkge1xuXHRcdCR0YXJnZXQuYWZ0ZXIoJGxheW91dCk7XG5cdH1cbn07XG5cbmV4cG9ydCB7cHJvY2Vzc1dpa2lFZGl0b3J9O1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEscUJBQXNCQyxRQUFBLGlCQUFBOztBQ0NyQixJQUFBQyxZQUFhO0FBQ2IsSUFBQUMsY0FBZTtBQUVmLElBQUFDLFVBQVc7QUFDWCxJQUFBQyxtQkFBb0I7O0FDSmQsSUFBTUMsV0FBVzs7QUNEeEIsSUFBQUMsb0JBQXVCTixRQUFBLGlCQUFBO0FBRXZCLElBQU1PLGtCQUFrQkEsTUFBTTtBQUM3QixTQUFPO0lBQ04s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aUJyQixPQUFPLENBQUUsRUFBRTJELFFBQVE7QUFDOUNnRixpQkFBYVIsT0FBT0YsT0FBTztFQUM1QjtBQUdBTyxLQUFHSyxLQUFLLHVCQUF1QixFQUFFQyxJQUFJLE1BQU07QUFDMUMsUUFBSU4sR0FBR0MsT0FBT0MsSUFBWTNJLFdBQVcsR0FBRztBQUN2Q3lJLFNBQUdDLE9BQU9HLElBQVk3SSxhQUFhLEtBQUs7SUFDekM7RUFDRCxDQUFDO0FBQ0Y7O0FDNUJBLElBQU1nSixvQkFBb0JBLENBQUM7RUFBQ2xGO0VBQU95RTtBQUFTLE1BQWlFO0FBRTVHLE1BQUlFLEdBQUdDLE9BQU9DLElBQVk1SSxTQUFTLEdBQUc7QUFDckM7RUFDRDtBQUVBLFFBQU1rSixVQUFrQlYsVUFBVS9ELEtBQWF0RSxnQkFBZ0I7QUFDL0QsTUFBSSxDQUFDK0ksUUFBUXJGLFFBQVE7QUFDcEI7RUFDRDtBQUVBNkUsS0FBR0MsT0FBT0csSUFBWTlJLFdBQVcsSUFBSTtBQUVyQyxRQUFNbUksVUFBVUkseUJBQXlCO0lBQUN4RTtJQUFPeUU7RUFBUyxDQUFDO0FBRTNELE1BQUksQ0FBQ3pFLE1BQU1VLEtBQUEsSUFBQWxELE9BQWlCckIsT0FBTyxDQUFFLEVBQUUyRCxRQUFRO0FBQzlDcUYsWUFBUUMsTUFBTWhCLE9BQU87RUFDdEI7QUFDRDs7QVhkQSxNQUFBLEdBQUtySSxtQkFBQXNKLFNBQVEsRUFBRUMsS0FBSyxTQUFTQyxTQUFTdkYsT0FBc0M7QUFDM0UyRSxLQUFHSyxLQUFLLG1CQUFtQixFQUFFQyxJQUFLUixlQUFvQjtBQUNyRFMsc0JBQWtCO01BQ2pCbEY7TUFDQXlFO0lBQ0QsQ0FBQztFQUNGLENBQUM7QUFFREUsS0FBR0ssS0FBSyw0QkFBNEIsRUFBRUMsSUFBSSxNQUFZO0FBQ3JEUCx3QkFBb0I7TUFBQzFFO0lBQUssQ0FBQztFQUM1QixDQUFDO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFsiaW1wb3J0X2V4dF9nYWRnZXQyIiwgInJlcXVpcmUiLCAiY29uZmlnS2V5IiwgImNvbmZpZ0tleVZlIiwgImlucHV0SWQiLCAidGFyZ2V0V2lraUVkaXRvciIsICJmb3JtV3JhcCIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJnZXRJMThuTWVzc2FnZXMiLCAibG9jYWxpemUiLCAiZW4iLCAiU291cmNlIiwgIkxpY2Vuc2UiLCAiaTE4bk1lc3NhZ2VzIiwgImdldE1lc3NhZ2UiLCAia2V5IiwgIkxJQ0VOU0VTIiwgImxhYmVsIiwgImRhdGEiLCAiVkFMSURfSU5URVJXSUtJX1BSRUZJWCIsICJnZXRMaW5rVmFsdWUiLCAibGluayIsICJ0ZXh0IiwgIlZBTElEX0lOVEVSV0lLSV9MSU5LX1JFR0VYIiwgIlJlZ0V4cCIsICJjb25jYXQiLCAiam9pbiIsICJ0ZXN0IiwgInJlcGxhY2UiLCAiZW5jb2RlVVJJIiwgImRlY29kZVVSSSIsICJnZXRBdHRyaWJ1dGlvbiIsICJmaWVsZFNldExheW91dCIsICJhdHRyaWJ1dGlvbnMiLCAiZ2V0U2VsZWN0ZWRWYWx1ZSIsICJkcm9wZG93biIsICJzZWxlY3RlZEl0ZW0iLCAiZ2V0TWVudSIsICJmaW5kU2VsZWN0ZWRJdGVtIiwgImdldERhdGEiLCAiX2l0ZXJhdG9yIiwgIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwgImdldEl0ZW1zIiwgIl9zdGVwIiwgInMiLCAibiIsICJkb25lIiwgImF0dHJpYnV0aW9uRmllbGRzZXQiLCAidmFsdWUiLCAiYXR0cmlidXRpb24iLCAiX2l0ZXJhdG9yMiIsICJfc3RlcDIiLCAiZmllbGRMYXlvdXQiLCAiZmllbGQiLCAiZ2V0RmllbGQiLCAic3VwcG9ydHMiLCAiZ2V0VmFsdWUiLCAiZ2V0TGFiZWwiLCAic291cmNlIiwgImxpY2Vuc2UiLCAiZXJyIiwgImUiLCAiZiIsICJsZW5ndGgiLCAidXBkYXRlV3BBdHRyaWJ1dGlvbiIsICIkYm9keSIsICJwYXJlbnRGaWVsZFNldCIsICJ3cEF0dHJpYnV0aW9uIiwgIiR3cEF0dHJpYnV0aW9uIiwgIiQiLCAiYXR0ciIsICJpZCIsICJuYW1lIiwgInR5cGUiLCAiJG9yaWdpbndwQXR0cmlidXRpb24iLCAiZmluZCIsICJwcmVwZW5kIiwgInZhbCIsICJhcHBlbmRUZXh0VG9TdW1tYXJ5IiwgImN1c3RvbVN1bW1hcnkiLCAiJHdwU3VtbWFyeSIsICJfJHdwU3VtbWFyeSR2YWwiLCAib3JpZ2luU3VtbWFyeSIsICJ0cmltIiwgInRyaWdnZXIiLCAiZ2V0VGV4dElucHV0IiwgIm9uQ2hhbmdlcyIsICJ0ZXh0SW5wdXQiLCAiT08iLCAidWkiLCAiVGV4dElucHV0V2lkZ2V0IiwgInBsYWNlaG9sZGVyIiwgIl9pIiwgIl9vbkNoYW5nZXMiLCAib25DaGFuZ2UiLCAib24iLCAiZ2V0RHJvcERvd24iLCAib25TZWxlY3RzIiwgIkRyb3Bkb3duV2lkZ2V0IiwgIm1lbnVPcHRpb25zIiwgIl9pMiIsICJfTElDRU5TRVMiLCAiTWVudU9wdGlvbldpZGdldCIsICJhZGRJdGVtcyIsICJfaTMiLCAiX29uU2VsZWN0cyIsICJvblNlbGVjdCIsICJnZXRBZGRJdGVtQnV0dG9uIiwgIm9uQ2xpY2tzIiwgImFkZEl0ZW1CdXR0b24iLCAiQnV0dG9uSW5wdXRXaWRnZXQiLCAiX2k0IiwgIl9vbkNsaWNrcyIsICJvbkNsaWNrIiwgImdlbmVyYXRlVGV4dElucHV0V2l0aERyb3Bkb3duIiwgImluaXRpYWxGaWVsZHNldCIsICJGaWVsZHNldExheW91dCIsICJpbnB1dE9uQ2hhbmdlIiwgImRyb3BEb3duIiwgImFkZEl0ZW1PbkNsaWNrIiwgInNldFZhbHVlIiwgInVuc2VsZWN0SXRlbSIsICJGaWVsZExheW91dCIsICJhbGlnbiIsICJnZW5lcmF0ZVZpc3VhbEVkaXRvckxheW91dCIsICJ0YXJnZXQiLCAid2luZG93IiwgInZlIiwgImluaXQiLCAic2F2ZURpYWxvZyIsICJlZGl0U3VtbWFyeUlucHV0IiwgIiRpbnB1dCIsICJ0ZXh0SW5wdXRXaXRoRHJvcGRvd24iLCAiJGxheW91dCIsICJhZGRDbGFzcyIsICJhcHBlbmQiLCAiJGVsZW1lbnQiLCAiZ2VuZXJhdGVXaWtpRWRpdG9yTGF5b3V0IiwgIiRlZGl0Rm9ybSIsICJwcm9jZXNzVmlzdWFsRWRpdG9yIiwgIm13IiwgImNvbmZpZyIsICJnZXQiLCAiJHNhdmVPcHRpb25zIiwgInNldCIsICJob29rIiwgImFkZCIsICJwcm9jZXNzV2lraUVkaXRvciIsICIkdGFyZ2V0IiwgImFmdGVyIiwgImdldEJvZHkiLCAidGhlbiIsICJlZGl0Rm9ybSJdCn0K

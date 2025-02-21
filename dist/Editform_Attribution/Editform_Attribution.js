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
var getLinkValue = (value) => {
  const VALID_INTERWIKI_LINK_REGEX = new RegExp("^:?(".concat(VALID_INTERWIKI_PREFIX.join("|"), ")"), "i");
  if (VALID_INTERWIKI_LINK_REGEX.test(value)) {
    return "[[".concat(value, "]]");
  }
  return encodeURI(decodeURI(value));
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
            if (value) {
              attribution.source = getLinkValue(value);
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0VkaXRmb3JtX0F0dHJpYnV0aW9uL0VkaXRmb3JtX0F0dHJpYnV0aW9uLnRzIiwgInNyYy9FZGl0Zm9ybV9BdHRyaWJ1dGlvbi9vcHRpb25zLmpzb24iLCAic3JjL0VkaXRmb3JtX0F0dHJpYnV0aW9uL21vZHVsZXMvdXRpbC9FZGl0Zm9ybV9BdHRyaWJ1dGlvbi5tb2R1bGUubGVzcyIsICJzcmMvRWRpdGZvcm1fQXR0cmlidXRpb24vbW9kdWxlcy9pMThuLnRzIiwgInNyYy9FZGl0Zm9ybV9BdHRyaWJ1dGlvbi9tb2R1bGVzL2NvbnN0YW50LnRzIiwgInNyYy9FZGl0Zm9ybV9BdHRyaWJ1dGlvbi9tb2R1bGVzL3V0aWwvZ2V0TGlua1ZhbHVlLnRzIiwgInNyYy9FZGl0Zm9ybV9BdHRyaWJ1dGlvbi9tb2R1bGVzL3V0aWwvZ2V0QXR0cmlidXRpb24udHMiLCAic3JjL0VkaXRmb3JtX0F0dHJpYnV0aW9uL21vZHVsZXMvdXRpbC9hcHBlbmRUZXh0VG9TdW1tYXJ5LnRzIiwgInNyYy9FZGl0Zm9ybV9BdHRyaWJ1dGlvbi9tb2R1bGVzL3V0aWwvZ2VuZXJhdGVUZXh0SW5wdXRXaXRoRHJvcGRvd24udHMiLCAic3JjL0VkaXRmb3JtX0F0dHJpYnV0aW9uL21vZHVsZXMvdXRpbC9nZW5lcmF0ZUxheW91dC50cyIsICJzcmMvRWRpdGZvcm1fQXR0cmlidXRpb24vbW9kdWxlcy9wcm9jZXNzVmlzdWFsRWRpdG9yLnRzIiwgInNyYy9FZGl0Zm9ybV9BdHRyaWJ1dGlvbi9tb2R1bGVzL3Byb2Nlc3NXaWtpRWRpdG9yLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQge2dldEJvZHl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5pbXBvcnQge3Byb2Nlc3NWaXN1YWxFZGl0b3J9IGZyb20gJy4vbW9kdWxlcy9wcm9jZXNzVmlzdWFsRWRpdG9yJztcbmltcG9ydCB7cHJvY2Vzc1dpa2lFZGl0b3J9IGZyb20gJy4vbW9kdWxlcy9wcm9jZXNzV2lraUVkaXRvcic7XG5cbi8qKlxuICogQGRlc2NyaXB0aW9uIOesrOS4ieaWueadpea6kOeJueauiuWjsOaYjlxuICovXG52b2lkIGdldEJvZHkoKS50aGVuKGZ1bmN0aW9uIGVkaXRGb3JtKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQge1xuXHRtdy5ob29rKCd3aWtpcGFnZS5lZGl0Zm9ybScpLmFkZCgoJGVkaXRGb3JtKTogdm9pZCA9PiB7XG5cdFx0cHJvY2Vzc1dpa2lFZGl0b3Ioe1xuXHRcdFx0JGJvZHksXG5cdFx0XHQkZWRpdEZvcm0sXG5cdFx0fSk7XG5cdH0pO1xuXG5cdG13Lmhvb2soJ3ZlLnNhdmVEaWFsb2cuc3RhdGVDaGFuZ2VkJykuYWRkKCgpOiB2b2lkID0+IHtcblx0XHRwcm9jZXNzVmlzdWFsRWRpdG9yKHskYm9keX0pO1xuXHR9KTtcbn0pO1xuIiwgIntcblx0XCJjb25maWdLZXlcIjogXCJnYWRnZXQtRWRpdGZvcm1fQXR0cmlidXRpb25fX0luaXRpYWxpemVkXCIsXG5cdFwiY29uZmlnS2V5VmVcIjogXCJnYWRnZXQtRWRpdGZvcm1fQXR0cmlidXRpb25fX0luaXRpYWxpemVkX19WRVwiLFxuXHRcImNoYW5nZVRhZ1wiOiBcIkF0dHJpYnV0aW9uX2FkZGVkXCIsXG5cdFwiaW5wdXRJZFwiOiBcImVkaXRmb3JtX2F0dHJpYnV0aW9uXCIsXG5cdFwidGFyZ2V0V2lraUVkaXRvclwiOiBcIi5lZGl0Q2hlY2tib3hlcyAub28tdWktaG9yaXpvbnRhbExheW91dFwiXG59XG4iLCAiaW1wb3J0IFwiZXNidWlsZC1jc3MtbW9kdWxlcy1wbHVnaW4tbnMtY3NzOnNyYy9FZGl0Zm9ybV9BdHRyaWJ1dGlvbi9tb2R1bGVzL3V0aWwvRWRpdGZvcm1fQXR0cmlidXRpb24ubW9kdWxlLmxlc3NcIjtcbmV4cG9ydCBjb25zdCBmb3JtV3JhcCA9IFwiRWRpdGZvcm0tQXR0cmlidXRpb24tbW9kdWxlX19mb3JtV3JhcF9tNWoyVWFfXzQ5MFwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIFwiZm9ybVdyYXBcIjogZm9ybVdyYXBcbn07XG4gICAgICAiLCAiaW1wb3J0IHtsb2NhbGl6ZX0gZnJvbSAnZXh0LmdhZGdldC5pMThuJztcblxuY29uc3QgZ2V0STE4bk1lc3NhZ2VzID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdCdBZGQgdG8gRWRpdCBTdW1tYXJ5JzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdBZGQgdG8gRWRpdCBTdW1tYXJ5Jyxcblx0XHRcdCd6aC1oYW5zJzogJ+a3u+WKoOiHs+e8lui+keaRmOimgScsXG5cdFx0XHQnemgtaGFudCc6ICfmt7vliqDoh7Pnt6jovK/mkZjopoEnLFxuXHRcdH0pLFxuXHRcdFNvdXJjZTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdTb3VyY2UnLFxuXHRcdFx0J3poLWhhbnMnOiAn5YaF5a655p2l5rqQJyxcblx0XHRcdCd6aC1oYW50JzogJ+WFp+WuueS+hua6kCcsXG5cdFx0fSksXG5cdFx0TGljZW5zZTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdMaWNlbnNlJyxcblx0XHRcdCd6aC1oYW5zJzogJ+iuuOWPr+ivgScsXG5cdFx0XHQnemgtaGFudCc6ICfoqLHlj6/orYknLFxuXHRcdH0pLFxuXHRcdCdPdGhlciBMaWNlbnNlJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdPdGhlciBsaWNlbnNlJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WFtuS7luiuuOWPr+ivgScsXG5cdFx0XHQnemgtaGFudCc6ICflhbbku5boqLHlj6/orYknLFxuXHRcdH0pLFxuXHRcdCdQbGVhc2UgQ2xhaW0gU291cmNlcyBhbmQgTGljZW5zZXMnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0lmIGVkaXQgY29udGVudCBhZGRzIGFueSB0aGlyZC1wYXJ0eSBjb250ZW50LCBwbGVhc2UgYWRkIHRoZSBzb3VyY2UgYW5kIGxpY2Vuc2Ugb2YgdGhlIHRoaXJkLXBhcnR5IGNvbnRlbnQgc2VwYXJhdGVseSB0byB0aGUgZWRpdGluZyBzdW1tYXJ5LicsXG5cdFx0XHQnemgtaGFucyc6ICfoi6XmgqjlkJHnvJbovpHlhoXlrrnkuK3mt7vliqDkuobnrKzkuInmlrnmkrDlhpnnmoTlhoXlrrnvvIzor7flsIbnm7jlhbPnrKzkuInmlrnlhoXlrrnnmoTmnaXmupDjgIHorrjlj6/mnaHmrL7lnKjnvJbovpHmkZjopoHkuK3liIbmnaHlo7DmmI4nLFxuXHRcdFx0J3poLWhhbnQnOiAn6Iul5oKo5ZCR57eo6Lyv5YWn5a655Lit5re75Yqg5LqG56ys5LiJ5pa55pKw5YaZ55qE5YWn5a6577yM6KuL5bCH55u45YWz56ys5LiJ5pa55YWn5a6555qE5L6G5rqQ44CB6Kix5Y+v5qKd5qy+5Zyo57eo6Lyv5pGY6KaB5Lit5YiG5qKd6IGy5piOJyxcblx0XHR9KSxcblx0XHQnUmVwbGFjZSBXaXRoIExpY2Vuc2UnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJyAoUmVwbGFjZSB3aXRoIGxpY2Vuc2UgbmFtZSBhbmQgVVJMKScsXG5cdFx0XHQnemgtaGFucyc6ICfvvIjmm7/mjaLkuLrorrjlj6/or4HlkI3np7DlkoznvZHlnYDvvIknLFxuXHRcdFx0J3poLWhhbnQnOiAn77yI5pu/5o+b54iy6Kix5Y+v6K2J5ZCN56ix5ZKM57ay5Z2A77yJJyxcblx0XHR9KSxcblx0fTtcbn07XG5cbmNvbnN0IGkxOG5NZXNzYWdlcyA9IGdldEkxOG5NZXNzYWdlcygpO1xuXG5jb25zdCBnZXRNZXNzYWdlOiBHZXRNZXNzYWdlczx0eXBlb2YgaTE4bk1lc3NhZ2VzPiA9IChrZXkpID0+IHtcblx0cmV0dXJuIGkxOG5NZXNzYWdlc1trZXldIHx8IGtleTtcbn07XG5cbmV4cG9ydCB7Z2V0TWVzc2FnZX07XG4iLCAiaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL2kxOG4nO1xuXG5jb25zdCBMSUNFTlNFUyA9IFtcblx0e1xuXHRcdGxhYmVsOiAnQ0MgQlktU0EgNC4wJyxcblx0XHRkYXRhOiAnY2MtYnktc2E6NC4wJyxcblx0fSxcblx0e1xuXHRcdGxhYmVsOiAnQ0MgQlktU0EgMy4wJyxcblx0XHRkYXRhOiAnY2MtYnktc2E6My4wJyxcblx0fSxcblx0e1xuXHRcdGxhYmVsOiAnQ0MgQlktU0EgMy4wIENOJyxcblx0XHRkYXRhOiAnY2MtYnktc2E6My4wL2NuJyxcblx0fSxcblx0e1xuXHRcdGxhYmVsOiAnQ0MgQlkgNC4wJyxcblx0XHRkYXRhOiAnY2MtYnk6NC4wJyxcblx0fSxcblx0e1xuXHRcdGxhYmVsOiAnQ0MgQlkgMy4wJyxcblx0XHRkYXRhOiAnY2MtYnk6My4wJyxcblx0fSxcblx0e1xuXHRcdGxhYmVsOiAnQ0MgQlkgMy4wIENOJyxcblx0XHRkYXRhOiAnY2MtYnk6My4wL2NuJyxcblx0fSxcblx0e1xuXHRcdGxhYmVsOiAnQ0MwLTEuMCcsXG5cdFx0ZGF0YTogJ2NjLXplcm86MS4wJyxcblx0fSxcblx0e1xuXHRcdGxhYmVsOiAnS09HTCBUeXBlIEk6IEF0dHJpYnV0aW9uJyxcblx0XHRkYXRhOiAnaHR0cHM6Ly93d3cua29nbC5vci5rci9pbmZvL2xpY2Vuc2VUeXBlMS5kbycsXG5cdH0sXG5cdHtcblx0XHRsYWJlbDogZ2V0TWVzc2FnZSgnT3RoZXIgTGljZW5zZScpLFxuXHRcdGRhdGE6IGdldE1lc3NhZ2UoJ1JlcGxhY2UgV2l0aCBMaWNlbnNlJyksXG5cdH0sXG5dO1xuXG5jb25zdCBWQUxJRF9JTlRFUldJS0lfUFJFRklYID0gW1xuXHQnY2MtYnknLFxuXHQnY2MtYnktc2EnLFxuXHQnY2MtemVybycsXG5cdCdjYzAnLFxuXHQnY29tbW9ucycsXG5cdCdlbndpa2knLFxuXHQnaW5jdWJhdG9yJyxcblx0J2luY3ViYXRvci13cC1tbmMnLFxuXHQnaW5jdWJhdG9yLXd0LW1uYycsXG5cdCdpc282MzktMycsXG5cdCdsZXhlbWVzJyxcblx0J2xpY2VuY2UnLFxuXHQnbGljZW5jZXdpa2knLFxuXHQnbGljZW5zZScsXG5cdCdsb2dpbicsXG5cdCdsb2dpbnFpdXdlbmJhaWtlJyxcblx0J2xvZ2lud2lraScsXG5cdCdtZWRpYXdpa2l3aWtpJyxcblx0J21vemlsbGF3aWtpJyxcblx0J213Jyxcblx0J29sZHdpa2lzb3VyY2UnLFxuXHQncG1pZCcsXG5cdCdxaXV3ZW5iYWlrZScsXG5cdCdyZXYnLFxuXHQndGVzdHdpa2lkYXRhJyxcblx0J3YnLFxuXHQndm95Jyxcblx0J3dpa2knLFxuXHQnd2lraWJvb2tzJyxcblx0J3dpa2lkYXRhJyxcblx0J3dpa2lmdW5jdGlvbnMnLFxuXHQnd2lraW5ld3MnLFxuXHQnd2lraXBlZGlhJyxcblx0J3dpa2lxdW90ZScsXG5cdCd3aWtpc291cmNlJyxcblx0J3dpa2l2ZXJzaXR5Jyxcblx0J3dpa2l2b3lhZ2UnLFxuXHQnd2lrdCcsXG5cdCd3aWt0aW9uYXJ5Jyxcblx0J3pocWl1d2VuYmFpa2UnLFxuXHQnemh3aWtpJyxcblx0J3pod2lraXNvdXJjZScsXG5cdCd6aHdpa2l2b3lhZ2UnLFxuXTtcblxuZXhwb3J0IHtMSUNFTlNFUywgVkFMSURfSU5URVJXSUtJX1BSRUZJWH07XG4iLCAiaW1wb3J0IHtWQUxJRF9JTlRFUldJS0lfUFJFRklYfSBmcm9tICcuLi9jb25zdGFudCc7XG5cbmNvbnN0IGdldExpbmtWYWx1ZSA9ICh2YWx1ZTogc3RyaW5nKTogc3RyaW5nID0+IHtcblx0Y29uc3QgVkFMSURfSU5URVJXSUtJX0xJTktfUkVHRVggPSBuZXcgUmVnRXhwKGBeOj8oJHtWQUxJRF9JTlRFUldJS0lfUFJFRklYLmpvaW4oJ3wnKX0pYCwgJ2knKTtcblxuXHRpZiAoVkFMSURfSU5URVJXSUtJX0xJTktfUkVHRVgudGVzdCh2YWx1ZSkpIHtcblx0XHRyZXR1cm4gYFtbJHt2YWx1ZX1dXWA7XG5cdH1cblxuXHRyZXR1cm4gZW5jb2RlVVJJKGRlY29kZVVSSSh2YWx1ZSkpO1xufTtcblxuZXhwb3J0IHtnZXRMaW5rVmFsdWV9O1xuIiwgImltcG9ydCB7Z2V0TGlua1ZhbHVlfSBmcm9tICcuL2dldExpbmtWYWx1ZSc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4uL2kxOG4nO1xuXG5jb25zdCBnZXRBdHRyaWJ1dGlvbiA9IChmaWVsZFNldExheW91dDogT08udWkuRmllbGRzZXRMYXlvdXQpID0+IHtcblx0Y29uc3QgYXR0cmlidXRpb25zID0gW107XG5cblx0Y29uc3QgZ2V0U2VsZWN0ZWRWYWx1ZSA9IChkcm9wZG93bjogT08udWkuRHJvcGRvd25XaWRnZXQpOiBzdHJpbmcgfCB1bmRlZmluZWQgPT4ge1xuXHRcdGNvbnN0IHNlbGVjdGVkSXRlbTogT08udWkuT3B0aW9uV2lkZ2V0IHwgbnVsbCA9IGRyb3Bkb3duXG5cdFx0XHQuZ2V0TWVudSgpXG5cdFx0XHQuZmluZFNlbGVjdGVkSXRlbSgpIGFzIE9PLnVpLk9wdGlvbldpZGdldCB8IG51bGw7XG5cdFx0cmV0dXJuIHNlbGVjdGVkSXRlbSA/IChzZWxlY3RlZEl0ZW0uZ2V0RGF0YSgpIGFzIHN0cmluZykgOiB1bmRlZmluZWQ7XG5cdH07XG5cblx0Zm9yIChjb25zdCBhdHRyaWJ1dGlvbkZpZWxkc2V0IG9mIGZpZWxkU2V0TGF5b3V0LmdldEl0ZW1zKCkgYXMgT08udWkuRmllbGRzZXRMYXlvdXRbXSkge1xuXHRcdGNvbnN0IGF0dHJpYnV0aW9uOiB7c291cmNlPzogc3RyaW5nOyBsaWNlbnNlPzogc3RyaW5nfSA9IHt9O1xuXG5cdFx0Zm9yIChjb25zdCBmaWVsZExheW91dCBvZiBhdHRyaWJ1dGlvbkZpZWxkc2V0LmdldEl0ZW1zKCkgYXMgT08udWkuRmllbGRMYXlvdXRbXSkge1xuXHRcdFx0Y29uc3QgZmllbGQgPSBmaWVsZExheW91dC5nZXRGaWVsZCgpO1xuXG5cdFx0XHRpZiAoZmllbGQuc3VwcG9ydHMoJ2dldFZhbHVlJykpIHtcblx0XHRcdFx0Y29uc3QgdmFsdWUgPSAoZmllbGQgYXMgT08udWkuVGV4dElucHV0V2lkZ2V0KS5nZXRWYWx1ZSgpO1xuXHRcdFx0XHRpZiAodmFsdWUpIHtcblx0XHRcdFx0XHRhdHRyaWJ1dGlvbi5zb3VyY2UgPSBnZXRMaW5rVmFsdWUodmFsdWUpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYgKGZpZWxkLnN1cHBvcnRzKCdnZXRNZW51JykpIHtcblx0XHRcdFx0Y29uc3QgdmFsdWUgPSBnZXRTZWxlY3RlZFZhbHVlKGZpZWxkIGFzIE9PLnVpLkRyb3Bkb3duV2lkZ2V0KTtcblx0XHRcdFx0aWYgKHZhbHVlKSB7XG5cdFx0XHRcdFx0YXR0cmlidXRpb24ubGljZW5zZSA9IGdldExpbmtWYWx1ZSh2YWx1ZSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoYXR0cmlidXRpb24uc291cmNlICYmIGF0dHJpYnV0aW9uLmxpY2Vuc2UpIHtcblx0XHRcdGF0dHJpYnV0aW9uc1thdHRyaWJ1dGlvbnMubGVuZ3RoXSA9XG5cdFx0XHRcdGAke2F0dHJpYnV0aW9uLnNvdXJjZX0gKCR7Z2V0TWVzc2FnZSgnTGljZW5zZScpfTogJHthdHRyaWJ1dGlvbi5saWNlbnNlfSlgO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBhdHRyaWJ1dGlvbnMuam9pbignICcpO1xufTtcblxuY29uc3QgdXBkYXRlV3BBdHRyaWJ1dGlvbiA9ICh7XG5cdCRib2R5LFxuXHRwYXJlbnRGaWVsZFNldCxcbn06IHtcblx0JGJvZHk6IEpRdWVyeTxIVE1MRWxlbWVudD47XG5cdHBhcmVudEZpZWxkU2V0OiBPTy51aS5GaWVsZHNldExheW91dDtcbn0pID0+IHtcblx0bGV0IHdwQXR0cmlidXRpb246IHN0cmluZyA9ICcnO1xuXG5cdGNvbnN0ICR3cEF0dHJpYnV0aW9uOiBKUXVlcnkgPSAkKCc8aW5wdXQ+JykuYXR0cih7XG5cdFx0aWQ6ICd3cEF0dHJpYnV0aW9uJyxcblx0XHRuYW1lOiAnd3BBdHRyaWJ1dGlvbicsXG5cdFx0dHlwZTogJ2hpZGRlbicsXG5cdFx0dmFsdWU6ICcnLFxuXHR9KTtcblx0Y29uc3QgJG9yaWdpbndwQXR0cmlidXRpb246IEpRdWVyeSA9ICRib2R5LmZpbmQoJ2lucHV0W25hbWU9d3BBdHRyaWJ1dGlvbl0nKTtcblx0aWYgKCEkb3JpZ2lud3BBdHRyaWJ1dGlvbi5sZW5ndGgpIHtcblx0XHQkYm9keS5wcmVwZW5kKCR3cEF0dHJpYnV0aW9uKTtcblx0fVxuXG5cdHdwQXR0cmlidXRpb24gPSBnZXRBdHRyaWJ1dGlvbihwYXJlbnRGaWVsZFNldCk7XG5cdCRvcmlnaW53cEF0dHJpYnV0aW9uLnZhbCh3cEF0dHJpYnV0aW9uKTtcbn07XG5cbmV4cG9ydCB7Z2V0QXR0cmlidXRpb24sIHVwZGF0ZVdwQXR0cmlidXRpb259O1xuIiwgImNvbnN0IGFwcGVuZFRleHRUb1N1bW1hcnkgPSAoe2N1c3RvbVN1bW1hcnksICR3cFN1bW1hcnl9OiB7Y3VzdG9tU3VtbWFyeTogc3RyaW5nOyAkd3BTdW1tYXJ5OiBKUXVlcnl9KTogdm9pZCA9PiB7XG5cdGNvbnN0IG9yaWdpblN1bW1hcnk6IHN0cmluZyA9ICgkd3BTdW1tYXJ5LnZhbCgpIGFzIHN0cmluZyB8IHVuZGVmaW5lZCkgPz8gJyc7XG5cblx0JHdwU3VtbWFyeS52YWwob3JpZ2luU3VtbWFyeS50cmltKCkgPyBgJHtvcmlnaW5TdW1tYXJ5fSAke2N1c3RvbVN1bW1hcnl9YCA6IGN1c3RvbVN1bW1hcnkpLnRyaWdnZXIoJ2NoYW5nZScpO1xufTtcblxuZXhwb3J0IHthcHBlbmRUZXh0VG9TdW1tYXJ5fTtcbiIsICJpbXBvcnQge2dldEF0dHJpYnV0aW9uLCB1cGRhdGVXcEF0dHJpYnV0aW9ufSBmcm9tICcuL2dldEF0dHJpYnV0aW9uJztcbmltcG9ydCB7TElDRU5TRVN9IGZyb20gJy4uL2NvbnN0YW50JztcbmltcG9ydCB7YXBwZW5kVGV4dFRvU3VtbWFyeX0gZnJvbSAnLi9hcHBlbmRUZXh0VG9TdW1tYXJ5JztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi4vaTE4bic7XG5cbmNvbnN0IGdldFRleHRJbnB1dCA9ICguLi5vbkNoYW5nZXM6ICgoKSA9PiB2b2lkKVtdKSA9PiB7XG5cdGNvbnN0IHRleHRJbnB1dCA9IG5ldyBPTy51aS5UZXh0SW5wdXRXaWRnZXQoe1xuXHRcdHBsYWNlaG9sZGVyOiBnZXRNZXNzYWdlKCdTb3VyY2UnKSxcblx0fSk7XG5cblx0Zm9yIChjb25zdCBvbkNoYW5nZSBvZiBvbkNoYW5nZXMpIHtcblx0XHR0ZXh0SW5wdXQub24oJ2NoYW5nZScsIG9uQ2hhbmdlKTtcblx0fVxuXG5cdHJldHVybiB0ZXh0SW5wdXQ7XG59O1xuXG5jb25zdCBnZXREcm9wRG93biA9ICguLi5vblNlbGVjdHM6ICgoKSA9PiB2b2lkKVtdKSA9PiB7XG5cdGNvbnN0IGRyb3Bkb3duOiBPTy51aS5Ecm9wZG93bldpZGdldCA9IG5ldyBPTy51aS5Ecm9wZG93bldpZGdldCh7XG5cdFx0bGFiZWw6IGdldE1lc3NhZ2UoJ0xpY2Vuc2UnKSxcblx0fSk7XG5cblx0Y29uc3QgbWVudU9wdGlvbnM6IE9PLnVpLk1lbnVPcHRpb25XaWRnZXRbXSA9IFtdO1xuXG5cdGZvciAoY29uc3Qge2RhdGEsIGxhYmVsfSBvZiBMSUNFTlNFUykge1xuXHRcdG1lbnVPcHRpb25zW21lbnVPcHRpb25zLmxlbmd0aF0gPSBuZXcgT08udWkuTWVudU9wdGlvbldpZGdldCh7XG5cdFx0XHRkYXRhLFxuXHRcdFx0bGFiZWwsXG5cdFx0fSk7XG5cdH1cblxuXHRkcm9wZG93bi5nZXRNZW51KCkuYWRkSXRlbXMobWVudU9wdGlvbnMpO1xuXG5cdGZvciAoY29uc3Qgb25TZWxlY3Qgb2Ygb25TZWxlY3RzKSB7XG5cdFx0ZHJvcGRvd24uZ2V0TWVudSgpLm9uKCdzZWxlY3QnLCBvblNlbGVjdCk7XG5cdH1cblxuXHRyZXR1cm4gZHJvcGRvd247XG59O1xuXG5jb25zdCBnZXRBZGRJdGVtQnV0dG9uID0gKC4uLm9uQ2xpY2tzOiAoKCkgPT4gdm9pZClbXSk6IE9PLnVpLkJ1dHRvbklucHV0V2lkZ2V0ID0+IHtcblx0Y29uc3QgYWRkSXRlbUJ1dHRvbiA9IG5ldyBPTy51aS5CdXR0b25JbnB1dFdpZGdldCh7XG5cdFx0bGFiZWw6IGdldE1lc3NhZ2UoJ0FkZCB0byBFZGl0IFN1bW1hcnknKSxcblx0fSk7XG5cblx0Zm9yIChjb25zdCBvbkNsaWNrIG9mIG9uQ2xpY2tzKSB7XG5cdFx0YWRkSXRlbUJ1dHRvbi5vbignY2xpY2snLCBvbkNsaWNrKTtcblx0fVxuXG5cdHJldHVybiBhZGRJdGVtQnV0dG9uO1xufTtcblxuY29uc3QgZ2VuZXJhdGVUZXh0SW5wdXRXaXRoRHJvcGRvd24gPSAoeyRib2R5LCAkd3BTdW1tYXJ5fTogeyRib2R5OiBKUXVlcnk8SFRNTEVsZW1lbnQ+OyAkd3BTdW1tYXJ5OiBKUXVlcnl9KSA9PiB7XG5cdGNvbnN0IGluaXRpYWxGaWVsZHNldCA9IG5ldyBPTy51aS5GaWVsZHNldExheW91dCgpO1xuXHRjb25zdCBwYXJlbnRGaWVsZFNldCA9IG5ldyBPTy51aS5GaWVsZHNldExheW91dCh7XG5cdFx0bGFiZWw6IGdldE1lc3NhZ2UoJ1BsZWFzZSBDbGFpbSBTb3VyY2VzIGFuZCBMaWNlbnNlcycpLFxuXHR9KTtcblxuXHRjb25zdCBpbnB1dE9uQ2hhbmdlID0gKCkgPT4ge1xuXHRcdHVwZGF0ZVdwQXR0cmlidXRpb24oeyRib2R5LCBwYXJlbnRGaWVsZFNldH0pO1xuXHR9O1xuXG5cdGNvbnN0IHRleHRJbnB1dCA9IGdldFRleHRJbnB1dChpbnB1dE9uQ2hhbmdlKTtcblx0Y29uc3QgZHJvcERvd24gPSBnZXREcm9wRG93bihpbnB1dE9uQ2hhbmdlKTtcblxuXHRjb25zdCBhZGRJdGVtT25DbGljayA9ICgpID0+IHtcblx0XHRsZXQgd3BBdHRyaWJ1dGlvbjogc3RyaW5nID0gJyc7XG5cblx0XHRjb25zdCAkd3BBdHRyaWJ1dGlvbjogSlF1ZXJ5ID0gJCgnPGlucHV0PicpLmF0dHIoe1xuXHRcdFx0aWQ6ICd3cEF0dHJpYnV0aW9uJyxcblx0XHRcdG5hbWU6ICd3cEF0dHJpYnV0aW9uJyxcblx0XHRcdHR5cGU6ICdoaWRkZW4nLFxuXHRcdFx0dmFsdWU6ICcnLFxuXHRcdH0pO1xuXG5cdFx0Y29uc3QgJG9yaWdpbndwQXR0cmlidXRpb246IEpRdWVyeTxIVE1MSW5wdXRFbGVtZW50PiA9XG5cdFx0XHQkYm9keS5maW5kPEhUTUxJbnB1dEVsZW1lbnQ+KCdpbnB1dFtuYW1lPXdwQXR0cmlidXRpb25dJyk7XG5cdFx0aWYgKCEkb3JpZ2lud3BBdHRyaWJ1dGlvbi5sZW5ndGgpIHtcblx0XHRcdCRib2R5LnByZXBlbmQoJHdwQXR0cmlidXRpb24pO1xuXHRcdH1cblxuXHRcdHdwQXR0cmlidXRpb24gPSBnZXRBdHRyaWJ1dGlvbihwYXJlbnRGaWVsZFNldCk7XG5cdFx0JG9yaWdpbndwQXR0cmlidXRpb24udmFsKHdwQXR0cmlidXRpb24pO1xuXG5cdFx0YXBwZW5kVGV4dFRvU3VtbWFyeSh7XG5cdFx0XHRjdXN0b21TdW1tYXJ5OiAkb3JpZ2lud3BBdHRyaWJ1dGlvbi52YWwoKVxuXHRcdFx0XHQ/IGDvvLske2dldE1lc3NhZ2UoJ1NvdXJjZScpfTogJHskb3JpZ2lud3BBdHRyaWJ1dGlvbi52YWwoKX3vvL1gXG5cdFx0XHRcdDogJycsXG5cdFx0XHQkd3BTdW1tYXJ5LFxuXHRcdH0pO1xuXG5cdFx0dGV4dElucHV0LnNldFZhbHVlKCcnKTtcblx0XHRkcm9wRG93bi5nZXRNZW51KCkudW5zZWxlY3RJdGVtKCk7XG5cdH07XG5cblx0Y29uc3QgYWRkSXRlbUJ1dHRvbiA9IGdldEFkZEl0ZW1CdXR0b24oYWRkSXRlbU9uQ2xpY2spO1xuXG5cdGluaXRpYWxGaWVsZHNldC5hZGRJdGVtcyhbXG5cdFx0bmV3IE9PLnVpLkZpZWxkTGF5b3V0KHRleHRJbnB1dCwge2xhYmVsOiBnZXRNZXNzYWdlKCdTb3VyY2UnKSwgYWxpZ246ICdpbmxpbmUnfSksXG5cdFx0bmV3IE9PLnVpLkZpZWxkTGF5b3V0KGRyb3BEb3duLCB7bGFiZWw6IGdldE1lc3NhZ2UoJ0xpY2Vuc2UnKSwgYWxpZ246ICdpbmxpbmUnfSksXG5cdFx0bmV3IE9PLnVpLkZpZWxkTGF5b3V0KGFkZEl0ZW1CdXR0b24sIHthbGlnbjogJ2lubGluZSd9KSxcblx0XSk7XG5cblx0cGFyZW50RmllbGRTZXQuYWRkSXRlbXMoW2luaXRpYWxGaWVsZHNldF0pO1xuXG5cdHJldHVybiBwYXJlbnRGaWVsZFNldDtcbn07XG5cbmV4cG9ydCB7Z2VuZXJhdGVUZXh0SW5wdXRXaXRoRHJvcGRvd259O1xuIiwgIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnNhZmUtYXJndW1lbnQsIG1lZGlhd2lraS9jbGFzcy1kb2MgKi9cbmltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnfi9FZGl0Zm9ybV9BdHRyaWJ1dGlvbi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtmb3JtV3JhcH0gZnJvbSAnLi9FZGl0Zm9ybV9BdHRyaWJ1dGlvbi5tb2R1bGUubGVzcyc7XG5pbXBvcnQge2dlbmVyYXRlVGV4dElucHV0V2l0aERyb3Bkb3dufSBmcm9tICcuL2dlbmVyYXRlVGV4dElucHV0V2l0aERyb3Bkb3duJztcblxuaW50ZXJmYWNlIExheW91dFByb3BzIHtcblx0JGJvZHk6IEpRdWVyeTxIVE1MRWxlbWVudD47XG59XG5cbmNvbnN0IGdlbmVyYXRlVmlzdWFsRWRpdG9yTGF5b3V0ID0gKHskYm9keX06IExheW91dFByb3BzKTogSlF1ZXJ5PEhUTUxFbGVtZW50PiA9PiB7XG5cdGNvbnN0IHt0YXJnZXR9ID0gd2luZG93LnZlLmluaXQ7XG5cdGNvbnN0ICR3cFN1bW1hcnkgPSB0YXJnZXQuc2F2ZURpYWxvZy5lZGl0U3VtbWFyeUlucHV0LiRpbnB1dDtcblx0Y29uc3QgdGV4dElucHV0V2l0aERyb3Bkb3duID0gZ2VuZXJhdGVUZXh0SW5wdXRXaXRoRHJvcGRvd24oeyRib2R5LCAkd3BTdW1tYXJ5fSk7XG5cdGNvbnN0ICRsYXlvdXQgPSAkKCc8ZGl2PicpLmF0dHIoJ2lkJywgT1BUSU9OUy5pbnB1dElkKS5hZGRDbGFzcyhmb3JtV3JhcCk7XG5cdCRsYXlvdXQuYXBwZW5kKHRleHRJbnB1dFdpdGhEcm9wZG93bi4kZWxlbWVudCk7XG5cblx0cmV0dXJuICRsYXlvdXQ7XG59O1xuXG5jb25zdCBnZW5lcmF0ZVdpa2lFZGl0b3JMYXlvdXQgPSAoeyRib2R5LCAkZWRpdEZvcm19OiBMYXlvdXRQcm9wcyAmIHskZWRpdEZvcm06IEpRdWVyeX0pOiBKUXVlcnk8SFRNTEVsZW1lbnQ+ID0+IHtcblx0Y29uc3QgJHdwU3VtbWFyeSA9ICRlZGl0Rm9ybS5maW5kKCdpbnB1dFtuYW1lPXdwU3VtbWFyeV0nKTtcblx0Y29uc3QgdGV4dElucHV0V2l0aERyb3Bkb3duID0gZ2VuZXJhdGVUZXh0SW5wdXRXaXRoRHJvcGRvd24oeyRib2R5LCAkd3BTdW1tYXJ5fSk7XG5cdGNvbnN0ICRsYXlvdXQgPSAkKCc8ZGl2PicpLmF0dHIoJ2lkJywgT1BUSU9OUy5pbnB1dElkKS5hZGRDbGFzcyhmb3JtV3JhcCk7XG5cdCRsYXlvdXQuYXBwZW5kKHRleHRJbnB1dFdpdGhEcm9wZG93bi4kZWxlbWVudCk7XG5cblx0cmV0dXJuICRsYXlvdXQ7XG59O1xuXG5leHBvcnQge2dlbmVyYXRlVmlzdWFsRWRpdG9yTGF5b3V0LCBnZW5lcmF0ZVdpa2lFZGl0b3JMYXlvdXR9O1xuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnfi9FZGl0Zm9ybV9BdHRyaWJ1dGlvbi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtnZW5lcmF0ZVZpc3VhbEVkaXRvckxheW91dH0gZnJvbSAnLi91dGlsL2dlbmVyYXRlTGF5b3V0JztcblxuY29uc3QgcHJvY2Vzc1Zpc3VhbEVkaXRvciA9ICh7JGJvZHl9OiB7JGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+fSk6IHZvaWQgPT4ge1xuXHQvLyBHdWFyZCBhZ2FpbnN0IGRvdWJsZSBpbmNsdXNpb25zXG5cdGlmIChtdy5jb25maWcuZ2V0KE9QVElPTlMuY29uZmlnS2V5VmUpKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3Qge3RhcmdldH0gPSB3aW5kb3cudmUuaW5pdDtcblx0Y29uc3Qge3NhdmVEaWFsb2d9ID0gdGFyZ2V0O1xuXHRjb25zdCB7JHNhdmVPcHRpb25zfSA9IHNhdmVEaWFsb2c7XG5cdGlmICghJHNhdmVPcHRpb25zLmxlbmd0aCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdC8vIFNldCBndWFyZFxuXHRtdy5jb25maWcuc2V0KE9QVElPTlMuY29uZmlnS2V5VmUsIHRydWUpO1xuXG5cdGNvbnN0ICRsYXlvdXQgPSBnZW5lcmF0ZVZpc3VhbEVkaXRvckxheW91dCh7JGJvZHl9KTtcblxuXHRpZiAoISRib2R5LmZpbmQoYCMke09QVElPTlMuaW5wdXRJZH1gKS5sZW5ndGgpIHtcblx0XHQkc2F2ZU9wdGlvbnMuYXBwZW5kKCRsYXlvdXQpO1xuXHR9XG5cblx0Ly8gUmVpbml0aWFsaXphdGlvbiBpcyByZXF1aXJlZCBmb3Igc3dpdGNoaW5nIGJldHdlZW4gVmlzdWFsRWRpdG9yIGFuZCBOZXcgV2lraXRleHQgRWRpdG9yICgyMDE3KVxuXHRtdy5ob29rKCd2ZS5hY3RpdmF0aW9uQ29tcGxldGUnKS5hZGQoKCkgPT4ge1xuXHRcdGlmIChtdy5jb25maWcuZ2V0KE9QVElPTlMuY29uZmlnS2V5VmUpKSB7XG5cdFx0XHRtdy5jb25maWcuc2V0KE9QVElPTlMuY29uZmlnS2V5VmUsIGZhbHNlKTtcblx0XHR9XG5cdH0pO1xufTtcblxuZXhwb3J0IHtwcm9jZXNzVmlzdWFsRWRpdG9yfTtcbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJ34vRWRpdGZvcm1fQXR0cmlidXRpb24vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7Z2VuZXJhdGVXaWtpRWRpdG9yTGF5b3V0fSBmcm9tICcuL3V0aWwvZ2VuZXJhdGVMYXlvdXQnO1xuXG5jb25zdCBwcm9jZXNzV2lraUVkaXRvciA9ICh7JGJvZHksICRlZGl0Rm9ybX06IHskYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD47ICRlZGl0Rm9ybTogSlF1ZXJ5fSk6IHZvaWQgPT4ge1xuXHQvLyBHdWFyZCBhZ2FpbnN0IGRvdWJsZSBpbmNsdXNpb25zXG5cdGlmIChtdy5jb25maWcuZ2V0KE9QVElPTlMuY29uZmlnS2V5KSkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0ICR0YXJnZXQ6IEpRdWVyeSA9ICRlZGl0Rm9ybS5maW5kKE9QVElPTlMudGFyZ2V0V2lraUVkaXRvcik7XG5cdGlmICghJHRhcmdldC5sZW5ndGgpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRtdy5jb25maWcuc2V0KE9QVElPTlMuY29uZmlnS2V5LCB0cnVlKTtcblxuXHRjb25zdCAkbGF5b3V0ID0gZ2VuZXJhdGVXaWtpRWRpdG9yTGF5b3V0KHskYm9keSwgJGVkaXRGb3JtfSk7XG5cblx0aWYgKCEkYm9keS5maW5kKGAjJHtPUFRJT05TLmlucHV0SWR9YCkubGVuZ3RoKSB7XG5cdFx0JHRhcmdldC5hZnRlcigkbGF5b3V0KTtcblx0fVxufTtcblxuZXhwb3J0IHtwcm9jZXNzV2lraUVkaXRvcn07XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxxQkFBc0JDLFFBQUEsaUJBQUE7O0FDQ3JCLElBQUFDLFlBQWE7QUFDYixJQUFBQyxjQUFlO0FBRWYsSUFBQUMsVUFBVztBQUNYLElBQUFDLG1CQUFvQjs7QUNKZCxJQUFNQyxXQUFXOztBQ0R4QixJQUFBQyxvQkFBdUJOLFFBQUEsaUJBQUE7QUFFdkIsSUFBTU8sa0JBQWtCQSxNQUFNO0FBQzdCLFNBQU87SUFDTix3QkFBQSxHQUF1QkQsa0JBQUFFLFVBQVM7TUFDL0JDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDREMsU0FBQSxHQUFRSixrQkFBQUUsVUFBUztNQUNoQkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNERSxVQUFBLEdBQVNMLGtCQUFBRSxVQUFTO01BQ2pCQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0Qsa0JBQUEsR0FBaUJILGtCQUFBRSxVQUFTO01BQ3pCQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0Qsc0NBQUEsR0FBcUNILGtCQUFBRSxVQUFTO01BQzdDQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0QseUJBQUEsR0FBd0JILGtCQUFBRSxVQUFTO01BQ2hDQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0VBQ0Y7QUFDRDtBQUVBLElBQU1HLGVBQWVMLGdCQUFnQjtBQUVyQyxJQUFNTSxhQUFnREMsU0FBUTtBQUM3RCxTQUFPRixhQUFhRSxHQUFHLEtBQUtBO0FBQzdCOztBQ3ZDQSxJQUFNQyxXQUFXLENBQ2hCO0VBQ0NDLE9BQU87RUFDUEMsTUFBTTtBQUNQLEdBQ0E7RUFDQ0QsT0FBTztFQUNQQyxNQUFNO0FBQ1AsR0FDQTtFQUNDRCxPQUFPO0VBQ1BDLE1BQU07QUFDUCxHQUNBO0VBQ0NELE9BQU87RUFDUEMsTUFBTTtBQUNQLEdBQ0E7RUFDQ0QsT0FBTztFQUNQQyxNQUFNO0FBQ1AsR0FDQTtFQUNDRCxPQUFPO0VBQ1BDLE1BQU07QUFDUCxHQUNBO0VBQ0NELE9BQU87RUFDUEMsTUFBTTtBQUNQLEdBQ0E7RUFDQ0QsT0FBTztFQUNQQyxNQUFNO0FBQ1AsR0FDQTtFQUNDRCxPQUFPSCxXQUFXLGVBQWU7RUFDakNJLE1BQU1KLFdBQVcsc0JBQXNCO0FBQ3hDLENBQUE7QUFHRCxJQUFNSyx5QkFBeUIsQ0FDOUIsU0FDQSxZQUNBLFdBQ0EsT0FDQSxXQUNBLFVBQ0EsYUFDQSxvQkFDQSxvQkFDQSxZQUNBLFdBQ0EsV0FDQSxlQUNBLFdBQ0EsU0FDQSxvQkFDQSxhQUNBLGlCQUNBLGVBQ0EsTUFDQSxpQkFDQSxRQUNBLGVBQ0EsT0FDQSxnQkFDQSxLQUNBLE9BQ0EsUUFDQSxhQUNBLFlBQ0EsaUJBQ0EsWUFDQSxhQUNBLGFBQ0EsY0FDQSxlQUNBLGNBQ0EsUUFDQSxjQUNBLGlCQUNBLFVBQ0EsZ0JBQ0EsY0FBQTs7QUNsRkQsSUFBTUMsZUFBZ0JDLFdBQTBCO0FBQy9DLFFBQU1DLDZCQUE2QixJQUFJQyxPQUFBLE9BQUFDLE9BQWNMLHVCQUF1Qk0sS0FBSyxHQUFHLEdBQUMsR0FBQSxHQUFLLEdBQUc7QUFFN0YsTUFBSUgsMkJBQTJCSSxLQUFLTCxLQUFLLEdBQUc7QUFDM0MsV0FBQSxLQUFBRyxPQUFZSCxPQUFLLElBQUE7RUFDbEI7QUFFQSxTQUFPTSxVQUFVQyxVQUFVUCxLQUFLLENBQUM7QUFDbEM7O0FDUEEsSUFBTVEsaUJBQWtCQyxvQkFBeUM7QUFDaEUsUUFBTUMsZUFBZSxDQUFBO0FBRXJCLFFBQU1DLG1CQUFvQkMsY0FBdUQ7QUFDaEYsVUFBTUMsZUFBMENELFNBQzlDRSxRQUFRLEVBQ1JDLGlCQUFpQjtBQUNuQixXQUFPRixlQUFnQkEsYUFBYUcsUUFBUSxJQUFlO0VBQzVEO0FBQUEsTUFBQUMsWUFBQUMsMkJBRWtDVCxlQUFlVSxTQUFTLENBQUEsR0FBQUM7QUFBQSxNQUFBO0FBQTFELFNBQUFILFVBQUFJLEVBQUEsR0FBQSxFQUFBRCxRQUFBSCxVQUFBSyxFQUFBLEdBQUFDLFFBQXVGO0FBQUEsWUFBNUVDLHNCQUFBSixNQUFBcEI7QUFDVixZQUFNeUIsY0FBbUQsQ0FBQztBQUFBLFVBQUFDLGFBQUFSLDJCQUVoQ00sb0JBQW9CTCxTQUFTLENBQUEsR0FBQVE7QUFBQSxVQUFBO0FBQXZELGFBQUFELFdBQUFMLEVBQUEsR0FBQSxFQUFBTSxTQUFBRCxXQUFBSixFQUFBLEdBQUFDLFFBQWlGO0FBQUEsZ0JBQXRFSyxjQUFBRCxPQUFBM0I7QUFDVixnQkFBTTZCLFFBQVFELFlBQVlFLFNBQVM7QUFFbkMsY0FBSUQsTUFBTUUsU0FBUyxVQUFVLEdBQUc7QUFDL0Isa0JBQU0vQixRQUFTNkIsTUFBZ0NHLFNBQVM7QUFDeEQsZ0JBQUloQyxPQUFPO0FBQ1Z5QiwwQkFBWVEsU0FBU2xDLGFBQWFDLEtBQUs7WUFDeEM7VUFDRCxXQUFXNkIsTUFBTUUsU0FBUyxTQUFTLEdBQUc7QUFDckMsa0JBQU0vQixRQUFRVyxpQkFBaUJrQixLQUE2QjtBQUM1RCxnQkFBSTdCLE9BQU87QUFDVnlCLDBCQUFZUyxVQUFVbkMsYUFBYUMsS0FBSztZQUN6QztVQUNEO1FBQ0Q7TUFBQSxTQUFBbUMsS0FBQTtBQUFBVCxtQkFBQVUsRUFBQUQsR0FBQTtNQUFBLFVBQUE7QUFBQVQsbUJBQUFXLEVBQUE7TUFBQTtBQUVBLFVBQUlaLFlBQVlRLFVBQVVSLFlBQVlTLFNBQVM7QUFDOUN4QixxQkFBYUEsYUFBYTRCLE1BQU0sSUFBQSxHQUFBbkMsT0FDNUJzQixZQUFZUSxRQUFNLElBQUEsRUFBQTlCLE9BQUtWLFdBQVcsU0FBUyxHQUFDLElBQUEsRUFBQVUsT0FBS3NCLFlBQVlTLFNBQU8sR0FBQTtNQUN6RTtJQUNEO0VBQUEsU0FBQUMsS0FBQTtBQUFBbEIsY0FBQW1CLEVBQUFELEdBQUE7RUFBQSxVQUFBO0FBQUFsQixjQUFBb0IsRUFBQTtFQUFBO0FBRUEsU0FBTzNCLGFBQWFOLEtBQUssR0FBRztBQUM3QjtBQUVBLElBQU1tQyxzQkFBc0JBLENBQUM7RUFDNUJDO0VBQ0FDO0FBQ0QsTUFHTTtBQUNMLE1BQUlDLGdCQUF3QjtBQUU1QixRQUFNQyxpQkFBeUJDLEVBQUUsU0FBUyxFQUFFQyxLQUFLO0lBQ2hEQyxJQUFJO0lBQ0pDLE1BQU07SUFDTkMsTUFBTTtJQUNOaEQsT0FBTztFQUNSLENBQUM7QUFDRCxRQUFNaUQsdUJBQStCVCxNQUFNVSxLQUFLLDJCQUEyQjtBQUMzRSxNQUFJLENBQUNELHFCQUFxQlgsUUFBUTtBQUNqQ0UsVUFBTVcsUUFBUVIsY0FBYztFQUM3QjtBQUVBRCxrQkFBZ0JsQyxlQUFlaUMsY0FBYztBQUM3Q1EsdUJBQXFCRyxJQUFJVixhQUFhO0FBQ3ZDOztBQy9EQSxJQUFNVyxzQkFBc0JBLENBQUM7RUFBQ0M7RUFBZUM7QUFBVSxNQUF5RDtBQUFBLE1BQUFDO0FBQy9HLFFBQU1DLGlCQUFBRCxrQkFBeUJELFdBQVdILElBQUksT0FBQSxRQUFBSSxvQkFBQSxTQUFBQSxrQkFBNEI7QUFFMUVELGFBQVdILElBQUlLLGNBQWNDLEtBQUssSUFBQSxHQUFBdkQsT0FBT3NELGVBQWEsR0FBQSxFQUFBdEQsT0FBSW1ELGFBQWEsSUFBS0EsYUFBYSxFQUFFSyxRQUFRLFFBQVE7QUFDNUc7O0FDQ0EsSUFBTUMsZUFBZUEsSUFBSUMsY0FBOEI7QUFDdEQsUUFBTUMsWUFBWSxJQUFJQyxHQUFHQyxHQUFHQyxnQkFBZ0I7SUFDM0NDLGFBQWF6RSxXQUFXLFFBQVE7RUFDakMsQ0FBQztBQUVELFdBQUEwRSxLQUFBLEdBQUFDLGFBQXVCUCxXQUFBTSxLQUFBQyxXQUFBOUIsUUFBQTZCLE1BQVc7QUFBbEMsVUFBV0UsV0FBQUQsV0FBQUQsRUFBQTtBQUNWTCxjQUFVUSxHQUFHLFVBQVVELFFBQVE7RUFDaEM7QUFFQSxTQUFPUDtBQUNSO0FBRUEsSUFBTVMsY0FBY0EsSUFBSUMsY0FBOEI7QUFDckQsUUFBTTVELFdBQWlDLElBQUltRCxHQUFHQyxHQUFHUyxlQUFlO0lBQy9EN0UsT0FBT0gsV0FBVyxTQUFTO0VBQzVCLENBQUM7QUFFRCxRQUFNaUYsY0FBd0MsQ0FBQTtBQUU5QyxXQUFBQyxNQUFBLEdBQUFDLFlBQTRCakYsVUFBQWdGLE1BQUFDLFVBQUF0QyxRQUFBcUMsT0FBVTtBQUF0QyxVQUFXO01BQUM5RTtNQUFNRDtJQUFLLElBQUFnRixVQUFBRCxHQUFBO0FBQ3RCRCxnQkFBWUEsWUFBWXBDLE1BQU0sSUFBSSxJQUFJeUIsR0FBR0MsR0FBR2EsaUJBQWlCO01BQzVEaEY7TUFDQUQ7SUFDRCxDQUFDO0VBQ0Y7QUFFQWdCLFdBQVNFLFFBQVEsRUFBRWdFLFNBQVNKLFdBQVc7QUFFdkMsV0FBQUssTUFBQSxHQUFBQyxhQUF1QlIsV0FBQU8sTUFBQUMsV0FBQTFDLFFBQUF5QyxPQUFXO0FBQWxDLFVBQVdFLFdBQUFELFdBQUFELEdBQUE7QUFDVm5FLGFBQVNFLFFBQVEsRUFBRXdELEdBQUcsVUFBVVcsUUFBUTtFQUN6QztBQUVBLFNBQU9yRTtBQUNSO0FBRUEsSUFBTXNFLG1CQUFtQkEsSUFBSUMsYUFBc0Q7QUFDbEYsUUFBTUMsZ0JBQWdCLElBQUlyQixHQUFHQyxHQUFHcUIsa0JBQWtCO0lBQ2pEekYsT0FBT0gsV0FBVyxxQkFBcUI7RUFDeEMsQ0FBQztBQUVELFdBQUE2RixNQUFBLEdBQUFDLFlBQXNCSixVQUFBRyxNQUFBQyxVQUFBakQsUUFBQWdELE9BQVU7QUFBaEMsVUFBV0UsVUFBQUQsVUFBQUQsR0FBQTtBQUNWRixrQkFBY2QsR0FBRyxTQUFTa0IsT0FBTztFQUNsQztBQUVBLFNBQU9KO0FBQ1I7QUFFQSxJQUFNSyxnQ0FBZ0NBLENBQUM7RUFBQ2pEO0VBQU9lO0FBQVUsTUFBd0Q7QUFDaEgsUUFBTW1DLGtCQUFrQixJQUFJM0IsR0FBR0MsR0FBRzJCLGVBQWU7QUFDakQsUUFBTWxELGlCQUFpQixJQUFJc0IsR0FBR0MsR0FBRzJCLGVBQWU7SUFDL0MvRixPQUFPSCxXQUFXLG1DQUFtQztFQUN0RCxDQUFDO0FBRUQsUUFBTW1HLGdCQUFnQkEsTUFBTTtBQUMzQnJELHdCQUFvQjtNQUFDQztNQUFPQztJQUFjLENBQUM7RUFDNUM7QUFFQSxRQUFNcUIsWUFBWUYsYUFBYWdDLGFBQWE7QUFDNUMsUUFBTUMsV0FBV3RCLFlBQVlxQixhQUFhO0FBRTFDLFFBQU1FLGlCQUFpQkEsTUFBTTtBQUM1QixRQUFJcEQsZ0JBQXdCO0FBRTVCLFVBQU1DLGlCQUF5QkMsRUFBRSxTQUFTLEVBQUVDLEtBQUs7TUFDaERDLElBQUk7TUFDSkMsTUFBTTtNQUNOQyxNQUFNO01BQ05oRCxPQUFPO0lBQ1IsQ0FBQztBQUVELFVBQU1pRCx1QkFDTFQsTUFBTVUsS0FBdUIsMkJBQTJCO0FBQ3pELFFBQUksQ0FBQ0QscUJBQXFCWCxRQUFRO0FBQ2pDRSxZQUFNVyxRQUFRUixjQUFjO0lBQzdCO0FBRUFELG9CQUFnQmxDLGVBQWVpQyxjQUFjO0FBQzdDUSx5QkFBcUJHLElBQUlWLGFBQWE7QUFFdENXLHdCQUFvQjtNQUNuQkMsZUFBZUwscUJBQXFCRyxJQUFJLElBQUEsSUFBQWpELE9BQ2pDVixXQUFXLFFBQVEsR0FBQyxJQUFBLEVBQUFVLE9BQUs4QyxxQkFBcUJHLElBQUksR0FBQyxHQUFBLElBQ3ZEO01BQ0hHO0lBQ0QsQ0FBQztBQUVETyxjQUFVaUMsU0FBUyxFQUFFO0FBQ3JCRixhQUFTL0UsUUFBUSxFQUFFa0YsYUFBYTtFQUNqQztBQUVBLFFBQU1aLGdCQUFnQkYsaUJBQWlCWSxjQUFjO0FBRXJESixrQkFBZ0JaLFNBQVMsQ0FDeEIsSUFBSWYsR0FBR0MsR0FBR2lDLFlBQVluQyxXQUFXO0lBQUNsRSxPQUFPSCxXQUFXLFFBQVE7SUFBR3lHLE9BQU87RUFBUSxDQUFDLEdBQy9FLElBQUluQyxHQUFHQyxHQUFHaUMsWUFBWUosVUFBVTtJQUFDakcsT0FBT0gsV0FBVyxTQUFTO0lBQUd5RyxPQUFPO0VBQVEsQ0FBQyxHQUMvRSxJQUFJbkMsR0FBR0MsR0FBR2lDLFlBQVliLGVBQWU7SUFBQ2MsT0FBTztFQUFRLENBQUMsQ0FBQSxDQUN0RDtBQUVEekQsaUJBQWVxQyxTQUFTLENBQUNZLGVBQWUsQ0FBQztBQUV6QyxTQUFPakQ7QUFDUjs7QUNqR0EsSUFBTTBELDZCQUE2QkEsQ0FBQztFQUFDM0Q7QUFBSyxNQUF3QztBQUNqRixRQUFNO0lBQUM0RDtFQUFNLElBQUlDLE9BQU9DLEdBQUdDO0FBQzNCLFFBQU1oRCxhQUFhNkMsT0FBT0ksV0FBV0MsaUJBQWlCQztBQUN0RCxRQUFNQyx3QkFBd0JsQiw4QkFBOEI7SUFBQ2pEO0lBQU9lO0VBQVUsQ0FBQztBQUMvRSxRQUFNcUQsVUFBVWhFLEVBQUUsT0FBTyxFQUFFQyxLQUFLLE1BQWM5RCxPQUFPLEVBQUU4SCxTQUFTNUgsUUFBUTtBQUN4RTJILFVBQVFFLE9BQU9ILHNCQUFzQkksUUFBUTtBQUU3QyxTQUFPSDtBQUNSO0FBRUEsSUFBTUksMkJBQTJCQSxDQUFDO0VBQUN4RTtFQUFPeUU7QUFBUyxNQUE4RDtBQUNoSCxRQUFNMUQsYUFBYTBELFVBQVUvRCxLQUFLLHVCQUF1QjtBQUN6RCxRQUFNeUQsd0JBQXdCbEIsOEJBQThCO0lBQUNqRDtJQUFPZTtFQUFVLENBQUM7QUFDL0UsUUFBTXFELFVBQVVoRSxFQUFFLE9BQU8sRUFBRUMsS0FBSyxNQUFjOUQsT0FBTyxFQUFFOEgsU0FBUzVILFFBQVE7QUFDeEUySCxVQUFRRSxPQUFPSCxzQkFBc0JJLFFBQVE7QUFFN0MsU0FBT0g7QUFDUjs7QUN2QkEsSUFBTU0sc0JBQXNCQSxDQUFDO0VBQUMxRTtBQUFLLE1BQThDO0FBRWhGLE1BQUkyRSxHQUFHQyxPQUFPQyxJQUFZdkksV0FBVyxHQUFHO0FBQ3ZDO0VBQ0Q7QUFFQSxRQUFNO0lBQUNzSDtFQUFNLElBQUlDLE9BQU9DLEdBQUdDO0FBQzNCLFFBQU07SUFBQ0M7RUFBVSxJQUFJSjtBQUNyQixRQUFNO0lBQUNrQjtFQUFZLElBQUlkO0FBQ3ZCLE1BQUksQ0FBQ2MsYUFBYWhGLFFBQVE7QUFDekI7RUFDRDtBQUdBNkUsS0FBR0MsT0FBT0csSUFBWXpJLGFBQWEsSUFBSTtBQUV2QyxRQUFNOEgsVUFBVVQsMkJBQTJCO0lBQUMzRDtFQUFLLENBQUM7QUFFbEQsTUFBSSxDQUFDQSxNQUFNVSxLQUFBLElBQUEvQyxPQUFpQnBCLE9BQU8sQ0FBRSxFQUFFdUQsUUFBUTtBQUM5Q2dGLGlCQUFhUixPQUFPRixPQUFPO0VBQzVCO0FBR0FPLEtBQUdLLEtBQUssdUJBQXVCLEVBQUVDLElBQUksTUFBTTtBQUMxQyxRQUFJTixHQUFHQyxPQUFPQyxJQUFZdkksV0FBVyxHQUFHO0FBQ3ZDcUksU0FBR0MsT0FBT0csSUFBWXpJLGFBQWEsS0FBSztJQUN6QztFQUNELENBQUM7QUFDRjs7QUM1QkEsSUFBTTRJLG9CQUFvQkEsQ0FBQztFQUFDbEY7RUFBT3lFO0FBQVMsTUFBaUU7QUFFNUcsTUFBSUUsR0FBR0MsT0FBT0MsSUFBWXhJLFNBQVMsR0FBRztBQUNyQztFQUNEO0FBRUEsUUFBTThJLFVBQWtCVixVQUFVL0QsS0FBYWxFLGdCQUFnQjtBQUMvRCxNQUFJLENBQUMySSxRQUFRckYsUUFBUTtBQUNwQjtFQUNEO0FBRUE2RSxLQUFHQyxPQUFPRyxJQUFZMUksV0FBVyxJQUFJO0FBRXJDLFFBQU0rSCxVQUFVSSx5QkFBeUI7SUFBQ3hFO0lBQU95RTtFQUFTLENBQUM7QUFFM0QsTUFBSSxDQUFDekUsTUFBTVUsS0FBQSxJQUFBL0MsT0FBaUJwQixPQUFPLENBQUUsRUFBRXVELFFBQVE7QUFDOUNxRixZQUFRQyxNQUFNaEIsT0FBTztFQUN0QjtBQUNEOztBWGRBLE1BQUEsR0FBS2pJLG1CQUFBa0osU0FBUSxFQUFFQyxLQUFLLFNBQVNDLFNBQVN2RixPQUFzQztBQUMzRTJFLEtBQUdLLEtBQUssbUJBQW1CLEVBQUVDLElBQUtSLGVBQW9CO0FBQ3JEUyxzQkFBa0I7TUFDakJsRjtNQUNBeUU7SUFDRCxDQUFDO0VBQ0YsQ0FBQztBQUVERSxLQUFHSyxLQUFLLDRCQUE0QixFQUFFQyxJQUFJLE1BQVk7QUFDckRQLHdCQUFvQjtNQUFDMUU7SUFBSyxDQUFDO0VBQzVCLENBQUM7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogWyJpbXBvcnRfZXh0X2dhZGdldDIiLCAicmVxdWlyZSIsICJjb25maWdLZXkiLCAiY29uZmlnS2V5VmUiLCAiaW5wdXRJZCIsICJ0YXJnZXRXaWtpRWRpdG9yIiwgImZvcm1XcmFwIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgImdldEkxOG5NZXNzYWdlcyIsICJsb2NhbGl6ZSIsICJlbiIsICJTb3VyY2UiLCAiTGljZW5zZSIsICJpMThuTWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAiTElDRU5TRVMiLCAibGFiZWwiLCAiZGF0YSIsICJWQUxJRF9JTlRFUldJS0lfUFJFRklYIiwgImdldExpbmtWYWx1ZSIsICJ2YWx1ZSIsICJWQUxJRF9JTlRFUldJS0lfTElOS19SRUdFWCIsICJSZWdFeHAiLCAiY29uY2F0IiwgImpvaW4iLCAidGVzdCIsICJlbmNvZGVVUkkiLCAiZGVjb2RlVVJJIiwgImdldEF0dHJpYnV0aW9uIiwgImZpZWxkU2V0TGF5b3V0IiwgImF0dHJpYnV0aW9ucyIsICJnZXRTZWxlY3RlZFZhbHVlIiwgImRyb3Bkb3duIiwgInNlbGVjdGVkSXRlbSIsICJnZXRNZW51IiwgImZpbmRTZWxlY3RlZEl0ZW0iLCAiZ2V0RGF0YSIsICJfaXRlcmF0b3IiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAiZ2V0SXRlbXMiLCAiX3N0ZXAiLCAicyIsICJuIiwgImRvbmUiLCAiYXR0cmlidXRpb25GaWVsZHNldCIsICJhdHRyaWJ1dGlvbiIsICJfaXRlcmF0b3IyIiwgIl9zdGVwMiIsICJmaWVsZExheW91dCIsICJmaWVsZCIsICJnZXRGaWVsZCIsICJzdXBwb3J0cyIsICJnZXRWYWx1ZSIsICJzb3VyY2UiLCAibGljZW5zZSIsICJlcnIiLCAiZSIsICJmIiwgImxlbmd0aCIsICJ1cGRhdGVXcEF0dHJpYnV0aW9uIiwgIiRib2R5IiwgInBhcmVudEZpZWxkU2V0IiwgIndwQXR0cmlidXRpb24iLCAiJHdwQXR0cmlidXRpb24iLCAiJCIsICJhdHRyIiwgImlkIiwgIm5hbWUiLCAidHlwZSIsICIkb3JpZ2lud3BBdHRyaWJ1dGlvbiIsICJmaW5kIiwgInByZXBlbmQiLCAidmFsIiwgImFwcGVuZFRleHRUb1N1bW1hcnkiLCAiY3VzdG9tU3VtbWFyeSIsICIkd3BTdW1tYXJ5IiwgIl8kd3BTdW1tYXJ5JHZhbCIsICJvcmlnaW5TdW1tYXJ5IiwgInRyaW0iLCAidHJpZ2dlciIsICJnZXRUZXh0SW5wdXQiLCAib25DaGFuZ2VzIiwgInRleHRJbnB1dCIsICJPTyIsICJ1aSIsICJUZXh0SW5wdXRXaWRnZXQiLCAicGxhY2Vob2xkZXIiLCAiX2kiLCAiX29uQ2hhbmdlcyIsICJvbkNoYW5nZSIsICJvbiIsICJnZXREcm9wRG93biIsICJvblNlbGVjdHMiLCAiRHJvcGRvd25XaWRnZXQiLCAibWVudU9wdGlvbnMiLCAiX2kyIiwgIl9MSUNFTlNFUyIsICJNZW51T3B0aW9uV2lkZ2V0IiwgImFkZEl0ZW1zIiwgIl9pMyIsICJfb25TZWxlY3RzIiwgIm9uU2VsZWN0IiwgImdldEFkZEl0ZW1CdXR0b24iLCAib25DbGlja3MiLCAiYWRkSXRlbUJ1dHRvbiIsICJCdXR0b25JbnB1dFdpZGdldCIsICJfaTQiLCAiX29uQ2xpY2tzIiwgIm9uQ2xpY2siLCAiZ2VuZXJhdGVUZXh0SW5wdXRXaXRoRHJvcGRvd24iLCAiaW5pdGlhbEZpZWxkc2V0IiwgIkZpZWxkc2V0TGF5b3V0IiwgImlucHV0T25DaGFuZ2UiLCAiZHJvcERvd24iLCAiYWRkSXRlbU9uQ2xpY2siLCAic2V0VmFsdWUiLCAidW5zZWxlY3RJdGVtIiwgIkZpZWxkTGF5b3V0IiwgImFsaWduIiwgImdlbmVyYXRlVmlzdWFsRWRpdG9yTGF5b3V0IiwgInRhcmdldCIsICJ3aW5kb3ciLCAidmUiLCAiaW5pdCIsICJzYXZlRGlhbG9nIiwgImVkaXRTdW1tYXJ5SW5wdXQiLCAiJGlucHV0IiwgInRleHRJbnB1dFdpdGhEcm9wZG93biIsICIkbGF5b3V0IiwgImFkZENsYXNzIiwgImFwcGVuZCIsICIkZWxlbWVudCIsICJnZW5lcmF0ZVdpa2lFZGl0b3JMYXlvdXQiLCAiJGVkaXRGb3JtIiwgInByb2Nlc3NWaXN1YWxFZGl0b3IiLCAibXciLCAiY29uZmlnIiwgImdldCIsICIkc2F2ZU9wdGlvbnMiLCAic2V0IiwgImhvb2siLCAiYWRkIiwgInByb2Nlc3NXaWtpRWRpdG9yIiwgIiR0YXJnZXQiLCAiYWZ0ZXIiLCAiZ2V0Qm9keSIsICJ0aGVuIiwgImVkaXRGb3JtIl0KfQo=

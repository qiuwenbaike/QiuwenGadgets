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
//! src/Editform_Attribution/modules/util/getLink.ts
var getLink = ({
  link,
  text
}) => {
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
            const link = field.getValue();
            if (link) {
              attribution.source = getLink({
                link
              });
            }
          } else if (field.supports("getMenu")) {
            const link = getSelectedValue(field);
            if (link) {
              const text = getSelectedLabel(field);
              if (text) {
                attribution.license = getLink({
                  link,
                  text
                });
              } else {
                attribution.license = getLink({
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
      if (attribution.source && attribution.license) {
        attributions[attributions.length] = "".concat(getMessage("Source"), ": ").concat(attribution.source, " (").concat(getMessage("License"), ": ").concat(attribution.license, ") ");
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
      customSummary: $originwpAttribution.val() ? "[".concat($originwpAttribution.val(), "]") : "",
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0VkaXRmb3JtX0F0dHJpYnV0aW9uL0VkaXRmb3JtX0F0dHJpYnV0aW9uLnRzIiwgInNyYy9FZGl0Zm9ybV9BdHRyaWJ1dGlvbi9vcHRpb25zLmpzb24iLCAic3JjL0VkaXRmb3JtX0F0dHJpYnV0aW9uL21vZHVsZXMvdXRpbC9FZGl0Zm9ybV9BdHRyaWJ1dGlvbi5tb2R1bGUubGVzcyIsICJzcmMvRWRpdGZvcm1fQXR0cmlidXRpb24vbW9kdWxlcy9pMThuLnRzIiwgInNyYy9FZGl0Zm9ybV9BdHRyaWJ1dGlvbi9tb2R1bGVzL2NvbnN0YW50LnRzIiwgInNyYy9FZGl0Zm9ybV9BdHRyaWJ1dGlvbi9tb2R1bGVzL3V0aWwvZ2V0TGluay50cyIsICJzcmMvRWRpdGZvcm1fQXR0cmlidXRpb24vbW9kdWxlcy91dGlsL2dldEF0dHJpYnV0aW9uLnRzIiwgInNyYy9FZGl0Zm9ybV9BdHRyaWJ1dGlvbi9tb2R1bGVzL3V0aWwvYXBwZW5kVGV4dFRvU3VtbWFyeS50cyIsICJzcmMvRWRpdGZvcm1fQXR0cmlidXRpb24vbW9kdWxlcy91dGlsL2dlbmVyYXRlVGV4dElucHV0V2l0aERyb3Bkb3duLnRzIiwgInNyYy9FZGl0Zm9ybV9BdHRyaWJ1dGlvbi9tb2R1bGVzL3V0aWwvZ2VuZXJhdGVMYXlvdXQudHMiLCAic3JjL0VkaXRmb3JtX0F0dHJpYnV0aW9uL21vZHVsZXMvcHJvY2Vzc1Zpc3VhbEVkaXRvci50cyIsICJzcmMvRWRpdGZvcm1fQXR0cmlidXRpb24vbW9kdWxlcy9wcm9jZXNzV2lraUVkaXRvci50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHtnZXRCb2R5fSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuaW1wb3J0IHtwcm9jZXNzVmlzdWFsRWRpdG9yfSBmcm9tICcuL21vZHVsZXMvcHJvY2Vzc1Zpc3VhbEVkaXRvcic7XG5pbXBvcnQge3Byb2Nlc3NXaWtpRWRpdG9yfSBmcm9tICcuL21vZHVsZXMvcHJvY2Vzc1dpa2lFZGl0b3InO1xuXG4vKipcbiAqIEBkZXNjcmlwdGlvbiDnrKzkuInmlrnmnaXmupDnibnmrorlo7DmmI5cbiAqL1xudm9pZCBnZXRCb2R5KCkudGhlbihmdW5jdGlvbiBlZGl0Rm9ybSgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkIHtcblx0bXcuaG9vaygnd2lraXBhZ2UuZWRpdGZvcm0nKS5hZGQoKCRlZGl0Rm9ybSk6IHZvaWQgPT4ge1xuXHRcdHByb2Nlc3NXaWtpRWRpdG9yKHtcblx0XHRcdCRib2R5LFxuXHRcdFx0JGVkaXRGb3JtLFxuXHRcdH0pO1xuXHR9KTtcblxuXHRtdy5ob29rKCd2ZS5zYXZlRGlhbG9nLnN0YXRlQ2hhbmdlZCcpLmFkZCgoKTogdm9pZCA9PiB7XG5cdFx0cHJvY2Vzc1Zpc3VhbEVkaXRvcih7JGJvZHl9KTtcblx0fSk7XG59KTtcbiIsICJ7XG5cdFwiY29uZmlnS2V5XCI6IFwiZ2FkZ2V0LUVkaXRmb3JtX0F0dHJpYnV0aW9uX19Jbml0aWFsaXplZFwiLFxuXHRcImNvbmZpZ0tleVZlXCI6IFwiZ2FkZ2V0LUVkaXRmb3JtX0F0dHJpYnV0aW9uX19Jbml0aWFsaXplZF9fVkVcIixcblx0XCJpbnB1dElkXCI6IFwiZWRpdGZvcm1fYXR0cmlidXRpb25cIixcblx0XCJ0YXJnZXRXaWtpRWRpdG9yXCI6IFwiLmVkaXRDaGVja2JveGVzIC5vby11aS1ob3Jpem9udGFsTGF5b3V0XCJcbn1cbiIsICJpbXBvcnQgXCJlc2J1aWxkLWNzcy1tb2R1bGVzLXBsdWdpbi1ucy1jc3M6c3JjL0VkaXRmb3JtX0F0dHJpYnV0aW9uL21vZHVsZXMvdXRpbC9FZGl0Zm9ybV9BdHRyaWJ1dGlvbi5tb2R1bGUubGVzc1wiO1xuZXhwb3J0IGNvbnN0IGZvcm1XcmFwID0gXCJFZGl0Zm9ybS1BdHRyaWJ1dGlvbi1tb2R1bGVfX2Zvcm1XcmFwX201ajJVYV9fNDEwMFwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIFwiZm9ybVdyYXBcIjogZm9ybVdyYXBcbn07XG4gICAgICAiLCAiaW1wb3J0IHtsb2NhbGl6ZX0gZnJvbSAnZXh0LmdhZGdldC5pMThuJztcblxuY29uc3QgZ2V0STE4bk1lc3NhZ2VzID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdCdBZGQgdG8gRWRpdCBTdW1tYXJ5JzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdBZGQgdG8gRWRpdCBTdW1tYXJ5Jyxcblx0XHRcdCd6aC1oYW5zJzogJ+a3u+WKoOiHs+e8lui+keaRmOimgScsXG5cdFx0XHQnemgtaGFudCc6ICfmt7vliqDoh7Pnt6jovK/mkZjopoEnLFxuXHRcdH0pLFxuXHRcdFNvdXJjZTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdTb3VyY2UnLFxuXHRcdFx0J3poLWhhbnMnOiAn5YaF5a655p2l5rqQJyxcblx0XHRcdCd6aC1oYW50JzogJ+WFp+WuueS+hua6kCcsXG5cdFx0fSksXG5cdFx0TGljZW5zZTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdMaWNlbnNlJyxcblx0XHRcdCd6aC1oYW5zJzogJ+iuuOWPr+ivgScsXG5cdFx0XHQnemgtaGFudCc6ICfoqLHlj6/orYknLFxuXHRcdH0pLFxuXHRcdCdPdGhlciBMaWNlbnNlJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdPdGhlciBsaWNlbnNlJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WFtuS7luiuuOWPr+ivgScsXG5cdFx0XHQnemgtaGFudCc6ICflhbbku5boqLHlj6/orYknLFxuXHRcdH0pLFxuXHRcdCdQbGVhc2UgQ2xhaW0gU291cmNlcyBhbmQgTGljZW5zZXMnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0lmIGVkaXQgY29udGVudCBhZGRzIGFueSB0aGlyZC1wYXJ0eSBjb250ZW50LCBwbGVhc2UgYWRkIHRoZSBzb3VyY2UgYW5kIGxpY2Vuc2Ugb2YgdGhlIHRoaXJkLXBhcnR5IGNvbnRlbnQgc2VwYXJhdGVseSB0byB0aGUgZWRpdGluZyBzdW1tYXJ5LicsXG5cdFx0XHQnemgtaGFucyc6ICfoi6XmgqjlkJHnvJbovpHlhoXlrrnkuK3mt7vliqDkuobnrKzkuInmlrnmkrDlhpnnmoTlhoXlrrnvvIzor7flsIbnm7jlhbPnrKzkuInmlrnlhoXlrrnnmoTmnaXmupDjgIHorrjlj6/mnaHmrL7lnKjnvJbovpHmkZjopoHkuK3liIbmnaHlo7DmmI4nLFxuXHRcdFx0J3poLWhhbnQnOiAn6Iul5oKo5ZCR57eo6Lyv5YWn5a655Lit5re75Yqg5LqG56ys5LiJ5pa55pKw5YaZ55qE5YWn5a6577yM6KuL5bCH55u45YWz56ys5LiJ5pa55YWn5a6555qE5L6G5rqQ44CB6Kix5Y+v5qKd5qy+5Zyo57eo6Lyv5pGY6KaB5Lit5YiG5qKd6IGy5piOJyxcblx0XHR9KSxcblx0XHQnUmVwbGFjZSBXaXRoIExpY2Vuc2UnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJyAoUmVwbGFjZSB3aXRoIGxpY2Vuc2UgbmFtZSBhbmQgVVJMKScsXG5cdFx0XHQnemgtaGFucyc6ICfvvIjmm7/mjaLkuLrorrjlj6/or4HlkI3np7DlkoznvZHlnYDvvIknLFxuXHRcdFx0J3poLWhhbnQnOiAn77yI5pu/5o+b54iy6Kix5Y+v6K2J5ZCN56ix5ZKM57ay5Z2A77yJJyxcblx0XHR9KSxcblx0fTtcbn07XG5cbmNvbnN0IGkxOG5NZXNzYWdlcyA9IGdldEkxOG5NZXNzYWdlcygpO1xuXG5jb25zdCBnZXRNZXNzYWdlOiBHZXRNZXNzYWdlczx0eXBlb2YgaTE4bk1lc3NhZ2VzPiA9IChrZXkpID0+IHtcblx0cmV0dXJuIGkxOG5NZXNzYWdlc1trZXldIHx8IGtleTtcbn07XG5cbmV4cG9ydCB7Z2V0TWVzc2FnZX07XG4iLCAiaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL2kxOG4nO1xuXG5jb25zdCBMSUNFTlNFUyA9IFtcblx0e1xuXHRcdGxhYmVsOiAnQ0MgQlktU0EgNC4wJyxcblx0XHRkYXRhOiAnY2MtYnktc2E6NC4wJyxcblx0fSxcblx0e1xuXHRcdGxhYmVsOiAnQ0MgQlktU0EgMy4wJyxcblx0XHRkYXRhOiAnY2MtYnktc2E6My4wJyxcblx0fSxcblx0e1xuXHRcdGxhYmVsOiAnQ0MgQlktU0EgMy4wIENOJyxcblx0XHRkYXRhOiAnY2MtYnktc2E6My4wL2NuJyxcblx0fSxcblx0e1xuXHRcdGxhYmVsOiAnQ0MgQlkgNC4wJyxcblx0XHRkYXRhOiAnY2MtYnk6NC4wJyxcblx0fSxcblx0e1xuXHRcdGxhYmVsOiAnQ0MgQlkgMy4wJyxcblx0XHRkYXRhOiAnY2MtYnk6My4wJyxcblx0fSxcblx0e1xuXHRcdGxhYmVsOiAnQ0MgQlkgMy4wIENOJyxcblx0XHRkYXRhOiAnY2MtYnk6My4wL2NuJyxcblx0fSxcblx0e1xuXHRcdGxhYmVsOiAnQ0MwLTEuMCcsXG5cdFx0ZGF0YTogJ2NjLXplcm86MS4wJyxcblx0fSxcblx0e1xuXHRcdGxhYmVsOiAnS09HTCBUeXBlIEk6IEF0dHJpYnV0aW9uJyxcblx0XHRkYXRhOiAnaHR0cHM6Ly93d3cua29nbC5vci5rci9pbmZvL2xpY2Vuc2VUeXBlMS5kbycsXG5cdH0sXG5cdHtcblx0XHRsYWJlbDogZ2V0TWVzc2FnZSgnT3RoZXIgTGljZW5zZScpLFxuXHRcdGRhdGE6IGdldE1lc3NhZ2UoJ1JlcGxhY2UgV2l0aCBMaWNlbnNlJyksXG5cdH0sXG5dO1xuXG5jb25zdCBWQUxJRF9JTlRFUldJS0lfUFJFRklYID0gW1xuXHQnY2MtYnknLFxuXHQnY2MtYnktc2EnLFxuXHQnY2MtemVybycsXG5cdCdjYzAnLFxuXHQnY29tbW9ucycsXG5cdCdlbndpa2knLFxuXHQnaW5jdWJhdG9yJyxcblx0J2luY3ViYXRvci13cC1tbmMnLFxuXHQnaW5jdWJhdG9yLXd0LW1uYycsXG5cdCdpc282MzktMycsXG5cdCdsZXhlbWVzJyxcblx0J2xpY2VuY2UnLFxuXHQnbGljZW5jZXdpa2knLFxuXHQnbGljZW5zZScsXG5cdCdsb2dpbicsXG5cdCdsb2dpbnFpdXdlbmJhaWtlJyxcblx0J2xvZ2lud2lraScsXG5cdCdtZWRpYXdpa2l3aWtpJyxcblx0J21vemlsbGF3aWtpJyxcblx0J213Jyxcblx0J29sZHdpa2lzb3VyY2UnLFxuXHQncG1pZCcsXG5cdCdxaXV3ZW5iYWlrZScsXG5cdCdyZXYnLFxuXHQndGVzdHdpa2lkYXRhJyxcblx0J3YnLFxuXHQndm95Jyxcblx0J3dpa2knLFxuXHQnd2lraWJvb2tzJyxcblx0J3dpa2lkYXRhJyxcblx0J3dpa2lmdW5jdGlvbnMnLFxuXHQnd2lraW5ld3MnLFxuXHQnd2lraXBlZGlhJyxcblx0J3dpa2lxdW90ZScsXG5cdCd3aWtpc291cmNlJyxcblx0J3dpa2l2ZXJzaXR5Jyxcblx0J3dpa2l2b3lhZ2UnLFxuXHQnd2lrdCcsXG5cdCd3aWt0aW9uYXJ5Jyxcblx0J3pocWl1d2VuYmFpa2UnLFxuXHQnemh3aWtpJyxcblx0J3pod2lraXNvdXJjZScsXG5cdCd6aHdpa2l2b3lhZ2UnLFxuXTtcblxuZXhwb3J0IHtMSUNFTlNFUywgVkFMSURfSU5URVJXSUtJX1BSRUZJWH07XG4iLCAiaW1wb3J0IHtWQUxJRF9JTlRFUldJS0lfUFJFRklYfSBmcm9tICcuLi9jb25zdGFudCc7XG5cbmNvbnN0IGdldExpbmsgPSAoe2xpbmssIHRleHR9OiB7bGluazogc3RyaW5nOyB0ZXh0Pzogc3RyaW5nfSk6IHN0cmluZyA9PiB7XG5cdGNvbnN0IFZBTElEX0lOVEVSV0lLSV9MSU5LX1JFR0VYID0gbmV3IFJlZ0V4cChgXjo/KCR7VkFMSURfSU5URVJXSUtJX1BSRUZJWC5qb2luKCd8Jyl9KWAsICdpJyk7XG5cblx0aWYgKFZBTElEX0lOVEVSV0lLSV9MSU5LX1JFR0VYLnRlc3QobGluaykpIHtcblx0XHRsaW5rID0gYDoke2xpbmsucmVwbGFjZSgvXjovLCAnJyl9YDtcblx0XHRpZiAodGV4dCkge1xuXHRcdFx0cmV0dXJuIGBbWyR7bGlua318JHt0ZXh0fV1dYDtcblx0XHR9XG5cdFx0cmV0dXJuIGBbWyR7bGlua31dXWA7XG5cdH1cblxuXHRyZXR1cm4gZW5jb2RlVVJJKGRlY29kZVVSSShsaW5rKSk7XG59O1xuXG5leHBvcnQge2dldExpbmt9O1xuIiwgImltcG9ydCB7Z2V0TGlua30gZnJvbSAnLi9nZXRMaW5rJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi4vaTE4bic7XG5cbmNvbnN0IGdldEF0dHJpYnV0aW9uID0gKGZpZWxkU2V0TGF5b3V0OiBPTy51aS5GaWVsZHNldExheW91dCkgPT4ge1xuXHRjb25zdCBhdHRyaWJ1dGlvbnMgPSBbXTtcblxuXHRjb25zdCBnZXRTZWxlY3RlZEl0ZW0gPSAoZHJvcGRvd246IE9PLnVpLkRyb3Bkb3duV2lkZ2V0KTogT08udWkuT3B0aW9uV2lkZ2V0IHwgbnVsbCA9PiB7XG5cdFx0Y29uc3Qgc2VsZWN0ZWRJdGVtOiBPTy51aS5PcHRpb25XaWRnZXQgfCBudWxsID0gZHJvcGRvd25cblx0XHRcdC5nZXRNZW51KClcblx0XHRcdC5maW5kU2VsZWN0ZWRJdGVtKCkgYXMgT08udWkuT3B0aW9uV2lkZ2V0IHwgbnVsbDtcblx0XHRyZXR1cm4gc2VsZWN0ZWRJdGVtO1xuXHR9O1xuXG5cdGNvbnN0IGdldFNlbGVjdGVkVmFsdWUgPSAoZHJvcGRvd246IE9PLnVpLkRyb3Bkb3duV2lkZ2V0KTogc3RyaW5nIHwgdW5kZWZpbmVkID0+IHtcblx0XHRjb25zdCBzZWxlY3RlZEl0ZW0gPSBnZXRTZWxlY3RlZEl0ZW0oZHJvcGRvd24pO1xuXHRcdHJldHVybiBzZWxlY3RlZEl0ZW0gPyAoc2VsZWN0ZWRJdGVtLmdldERhdGEoKSBhcyBzdHJpbmcpIDogdW5kZWZpbmVkO1xuXHR9O1xuXG5cdGNvbnN0IGdldFNlbGVjdGVkTGFiZWwgPSAoZHJvcGRvd246IE9PLnVpLkRyb3Bkb3duV2lkZ2V0KTogc3RyaW5nIHwgdW5kZWZpbmVkID0+IHtcblx0XHRjb25zdCBzZWxlY3RlZEl0ZW0gPSBnZXRTZWxlY3RlZEl0ZW0oZHJvcGRvd24pO1xuXHRcdHJldHVybiBzZWxlY3RlZEl0ZW0gPyAoc2VsZWN0ZWRJdGVtLmdldExhYmVsKCkgYXMgc3RyaW5nKSA6IHVuZGVmaW5lZDtcblx0fTtcblxuXHRmb3IgKGNvbnN0IGF0dHJpYnV0aW9uRmllbGRzZXQgb2YgZmllbGRTZXRMYXlvdXQuZ2V0SXRlbXMoKSBhcyBPTy51aS5GaWVsZHNldExheW91dFtdKSB7XG5cdFx0Y29uc3QgYXR0cmlidXRpb246IHtzb3VyY2U/OiBzdHJpbmc7IGxpY2Vuc2U/OiBzdHJpbmd9ID0ge307XG5cblx0XHRmb3IgKGNvbnN0IGZpZWxkTGF5b3V0IG9mIGF0dHJpYnV0aW9uRmllbGRzZXQuZ2V0SXRlbXMoKSBhcyBPTy51aS5GaWVsZExheW91dFtdKSB7XG5cdFx0XHRjb25zdCBmaWVsZCA9IGZpZWxkTGF5b3V0LmdldEZpZWxkKCk7XG5cblx0XHRcdGlmIChmaWVsZC5zdXBwb3J0cygnZ2V0VmFsdWUnKSkge1xuXHRcdFx0XHRjb25zdCBsaW5rID0gKGZpZWxkIGFzIE9PLnVpLlRleHRJbnB1dFdpZGdldCkuZ2V0VmFsdWUoKTtcblx0XHRcdFx0aWYgKGxpbmspIHtcblx0XHRcdFx0XHRhdHRyaWJ1dGlvbi5zb3VyY2UgPSBnZXRMaW5rKHtsaW5rfSk7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSBpZiAoZmllbGQuc3VwcG9ydHMoJ2dldE1lbnUnKSkge1xuXHRcdFx0XHRjb25zdCBsaW5rID0gZ2V0U2VsZWN0ZWRWYWx1ZShmaWVsZCBhcyBPTy51aS5Ecm9wZG93bldpZGdldCk7XG5cblx0XHRcdFx0aWYgKGxpbmspIHtcblx0XHRcdFx0XHRjb25zdCB0ZXh0ID0gZ2V0U2VsZWN0ZWRMYWJlbChmaWVsZCBhcyBPTy51aS5Ecm9wZG93bldpZGdldCk7XG5cblx0XHRcdFx0XHRpZiAodGV4dCkge1xuXHRcdFx0XHRcdFx0YXR0cmlidXRpb24ubGljZW5zZSA9IGdldExpbmsoe2xpbmssIHRleHR9KTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0YXR0cmlidXRpb24ubGljZW5zZSA9IGdldExpbmsoe2xpbmt9KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoYXR0cmlidXRpb24uc291cmNlICYmIGF0dHJpYnV0aW9uLmxpY2Vuc2UpIHtcblx0XHRcdGF0dHJpYnV0aW9uc1thdHRyaWJ1dGlvbnMubGVuZ3RoXSA9XG5cdFx0XHRcdGAke2dldE1lc3NhZ2UoJ1NvdXJjZScpfTogJHthdHRyaWJ1dGlvbi5zb3VyY2V9ICgke2dldE1lc3NhZ2UoJ0xpY2Vuc2UnKX06ICR7YXR0cmlidXRpb24ubGljZW5zZX0pIGA7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIGF0dHJpYnV0aW9ucy5qb2luKCcgJyk7XG59O1xuXG5jb25zdCB1cGRhdGVXcEF0dHJpYnV0aW9uID0gKHtcblx0JGJvZHksXG5cdHBhcmVudEZpZWxkU2V0LFxufToge1xuXHQkYm9keTogSlF1ZXJ5PEhUTUxFbGVtZW50Pjtcblx0cGFyZW50RmllbGRTZXQ6IE9PLnVpLkZpZWxkc2V0TGF5b3V0O1xufSkgPT4ge1xuXHRsZXQgd3BBdHRyaWJ1dGlvbjogc3RyaW5nID0gJyc7XG5cblx0Y29uc3QgJHdwQXR0cmlidXRpb246IEpRdWVyeSA9ICQoJzxpbnB1dD4nKS5hdHRyKHtcblx0XHRpZDogJ3dwQXR0cmlidXRpb24nLFxuXHRcdG5hbWU6ICd3cEF0dHJpYnV0aW9uJyxcblx0XHR0eXBlOiAnaGlkZGVuJyxcblx0XHR2YWx1ZTogJycsXG5cdH0pO1xuXHRjb25zdCAkb3JpZ2lud3BBdHRyaWJ1dGlvbjogSlF1ZXJ5ID0gJGJvZHkuZmluZCgnaW5wdXRbbmFtZT13cEF0dHJpYnV0aW9uXScpO1xuXHRpZiAoISRvcmlnaW53cEF0dHJpYnV0aW9uLmxlbmd0aCkge1xuXHRcdCRib2R5LnByZXBlbmQoJHdwQXR0cmlidXRpb24pO1xuXHR9XG5cblx0d3BBdHRyaWJ1dGlvbiA9IGdldEF0dHJpYnV0aW9uKHBhcmVudEZpZWxkU2V0KTtcblx0JG9yaWdpbndwQXR0cmlidXRpb24udmFsKHdwQXR0cmlidXRpb24pO1xufTtcblxuZXhwb3J0IHtnZXRBdHRyaWJ1dGlvbiwgdXBkYXRlV3BBdHRyaWJ1dGlvbn07XG4iLCAiY29uc3QgYXBwZW5kVGV4dFRvU3VtbWFyeSA9ICh7Y3VzdG9tU3VtbWFyeSwgJHdwU3VtbWFyeX06IHtjdXN0b21TdW1tYXJ5OiBzdHJpbmc7ICR3cFN1bW1hcnk6IEpRdWVyeX0pOiB2b2lkID0+IHtcblx0Y29uc3Qgb3JpZ2luU3VtbWFyeTogc3RyaW5nID0gKCR3cFN1bW1hcnkudmFsKCkgYXMgc3RyaW5nIHwgdW5kZWZpbmVkKSA/PyAnJztcblxuXHQkd3BTdW1tYXJ5LnZhbChvcmlnaW5TdW1tYXJ5LnRyaW0oKSA/IGAke29yaWdpblN1bW1hcnl9ICR7Y3VzdG9tU3VtbWFyeX1gIDogY3VzdG9tU3VtbWFyeSkudHJpZ2dlcignY2hhbmdlJyk7XG59O1xuXG5leHBvcnQge2FwcGVuZFRleHRUb1N1bW1hcnl9O1xuIiwgImltcG9ydCB7Z2V0QXR0cmlidXRpb24sIHVwZGF0ZVdwQXR0cmlidXRpb259IGZyb20gJy4vZ2V0QXR0cmlidXRpb24nO1xuaW1wb3J0IHtMSUNFTlNFU30gZnJvbSAnLi4vY29uc3RhbnQnO1xuaW1wb3J0IHthcHBlbmRUZXh0VG9TdW1tYXJ5fSBmcm9tICcuL2FwcGVuZFRleHRUb1N1bW1hcnknO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuLi9pMThuJztcblxuY29uc3QgZ2V0VGV4dElucHV0ID0gKC4uLm9uQ2hhbmdlczogKCgpID0+IHZvaWQpW10pID0+IHtcblx0Y29uc3QgdGV4dElucHV0ID0gbmV3IE9PLnVpLlRleHRJbnB1dFdpZGdldCh7XG5cdFx0cGxhY2Vob2xkZXI6IGdldE1lc3NhZ2UoJ1NvdXJjZScpLFxuXHR9KTtcblxuXHRmb3IgKGNvbnN0IG9uQ2hhbmdlIG9mIG9uQ2hhbmdlcykge1xuXHRcdHRleHRJbnB1dC5vbignY2hhbmdlJywgb25DaGFuZ2UpO1xuXHR9XG5cblx0cmV0dXJuIHRleHRJbnB1dDtcbn07XG5cbmNvbnN0IGdldERyb3BEb3duID0gKC4uLm9uU2VsZWN0czogKCgpID0+IHZvaWQpW10pID0+IHtcblx0Y29uc3QgZHJvcGRvd246IE9PLnVpLkRyb3Bkb3duV2lkZ2V0ID0gbmV3IE9PLnVpLkRyb3Bkb3duV2lkZ2V0KHtcblx0XHRsYWJlbDogZ2V0TWVzc2FnZSgnTGljZW5zZScpLFxuXHR9KTtcblxuXHRjb25zdCBtZW51T3B0aW9uczogT08udWkuTWVudU9wdGlvbldpZGdldFtdID0gW107XG5cblx0Zm9yIChjb25zdCB7ZGF0YSwgbGFiZWx9IG9mIExJQ0VOU0VTKSB7XG5cdFx0bWVudU9wdGlvbnNbbWVudU9wdGlvbnMubGVuZ3RoXSA9IG5ldyBPTy51aS5NZW51T3B0aW9uV2lkZ2V0KHtcblx0XHRcdGRhdGEsXG5cdFx0XHRsYWJlbCxcblx0XHR9KTtcblx0fVxuXG5cdGRyb3Bkb3duLmdldE1lbnUoKS5hZGRJdGVtcyhtZW51T3B0aW9ucyk7XG5cblx0Zm9yIChjb25zdCBvblNlbGVjdCBvZiBvblNlbGVjdHMpIHtcblx0XHRkcm9wZG93bi5nZXRNZW51KCkub24oJ3NlbGVjdCcsIG9uU2VsZWN0KTtcblx0fVxuXG5cdHJldHVybiBkcm9wZG93bjtcbn07XG5cbmNvbnN0IGdldEFkZEl0ZW1CdXR0b24gPSAoLi4ub25DbGlja3M6ICgoKSA9PiB2b2lkKVtdKTogT08udWkuQnV0dG9uSW5wdXRXaWRnZXQgPT4ge1xuXHRjb25zdCBhZGRJdGVtQnV0dG9uID0gbmV3IE9PLnVpLkJ1dHRvbklucHV0V2lkZ2V0KHtcblx0XHRsYWJlbDogZ2V0TWVzc2FnZSgnQWRkIHRvIEVkaXQgU3VtbWFyeScpLFxuXHR9KTtcblxuXHRmb3IgKGNvbnN0IG9uQ2xpY2sgb2Ygb25DbGlja3MpIHtcblx0XHRhZGRJdGVtQnV0dG9uLm9uKCdjbGljaycsIG9uQ2xpY2spO1xuXHR9XG5cblx0cmV0dXJuIGFkZEl0ZW1CdXR0b247XG59O1xuXG5jb25zdCBnZW5lcmF0ZVRleHRJbnB1dFdpdGhEcm9wZG93biA9ICh7JGJvZHksICR3cFN1bW1hcnl9OiB7JGJvZHk6IEpRdWVyeTxIVE1MRWxlbWVudD47ICR3cFN1bW1hcnk6IEpRdWVyeX0pID0+IHtcblx0Y29uc3QgaW5pdGlhbEZpZWxkc2V0ID0gbmV3IE9PLnVpLkZpZWxkc2V0TGF5b3V0KCk7XG5cdGNvbnN0IHBhcmVudEZpZWxkU2V0ID0gbmV3IE9PLnVpLkZpZWxkc2V0TGF5b3V0KHtcblx0XHRsYWJlbDogZ2V0TWVzc2FnZSgnUGxlYXNlIENsYWltIFNvdXJjZXMgYW5kIExpY2Vuc2VzJyksXG5cdH0pO1xuXG5cdGNvbnN0IGlucHV0T25DaGFuZ2UgPSAoKSA9PiB7XG5cdFx0dXBkYXRlV3BBdHRyaWJ1dGlvbih7JGJvZHksIHBhcmVudEZpZWxkU2V0fSk7XG5cdH07XG5cblx0Y29uc3QgdGV4dElucHV0ID0gZ2V0VGV4dElucHV0KGlucHV0T25DaGFuZ2UpO1xuXHRjb25zdCBkcm9wRG93biA9IGdldERyb3BEb3duKGlucHV0T25DaGFuZ2UpO1xuXG5cdGNvbnN0IGFkZEl0ZW1PbkNsaWNrID0gKCkgPT4ge1xuXHRcdGxldCB3cEF0dHJpYnV0aW9uOiBzdHJpbmcgPSAnJztcblxuXHRcdGNvbnN0ICR3cEF0dHJpYnV0aW9uOiBKUXVlcnkgPSAkKCc8aW5wdXQ+JykuYXR0cih7XG5cdFx0XHRpZDogJ3dwQXR0cmlidXRpb24nLFxuXHRcdFx0bmFtZTogJ3dwQXR0cmlidXRpb24nLFxuXHRcdFx0dHlwZTogJ2hpZGRlbicsXG5cdFx0XHR2YWx1ZTogJycsXG5cdFx0fSk7XG5cblx0XHRjb25zdCAkb3JpZ2lud3BBdHRyaWJ1dGlvbjogSlF1ZXJ5PEhUTUxJbnB1dEVsZW1lbnQ+ID1cblx0XHRcdCRib2R5LmZpbmQ8SFRNTElucHV0RWxlbWVudD4oJ2lucHV0W25hbWU9d3BBdHRyaWJ1dGlvbl0nKTtcblx0XHRpZiAoISRvcmlnaW53cEF0dHJpYnV0aW9uLmxlbmd0aCkge1xuXHRcdFx0JGJvZHkucHJlcGVuZCgkd3BBdHRyaWJ1dGlvbik7XG5cdFx0fVxuXG5cdFx0d3BBdHRyaWJ1dGlvbiA9IGdldEF0dHJpYnV0aW9uKHBhcmVudEZpZWxkU2V0KTtcblx0XHQkb3JpZ2lud3BBdHRyaWJ1dGlvbi52YWwod3BBdHRyaWJ1dGlvbik7XG5cblx0XHRhcHBlbmRUZXh0VG9TdW1tYXJ5KHtcblx0XHRcdGN1c3RvbVN1bW1hcnk6ICRvcmlnaW53cEF0dHJpYnV0aW9uLnZhbCgpID8gYFskeyRvcmlnaW53cEF0dHJpYnV0aW9uLnZhbCgpfV1gIDogJycsXG5cdFx0XHQkd3BTdW1tYXJ5LFxuXHRcdH0pO1xuXG5cdFx0dGV4dElucHV0LnNldFZhbHVlKCcnKTtcblx0XHRkcm9wRG93bi5nZXRNZW51KCkudW5zZWxlY3RJdGVtKCk7XG5cdH07XG5cblx0Y29uc3QgYWRkSXRlbUJ1dHRvbiA9IGdldEFkZEl0ZW1CdXR0b24oYWRkSXRlbU9uQ2xpY2spO1xuXG5cdGluaXRpYWxGaWVsZHNldC5hZGRJdGVtcyhbXG5cdFx0bmV3IE9PLnVpLkZpZWxkTGF5b3V0KHRleHRJbnB1dCwge2xhYmVsOiBnZXRNZXNzYWdlKCdTb3VyY2UnKSwgYWxpZ246ICdpbmxpbmUnfSksXG5cdFx0bmV3IE9PLnVpLkZpZWxkTGF5b3V0KGRyb3BEb3duLCB7bGFiZWw6IGdldE1lc3NhZ2UoJ0xpY2Vuc2UnKSwgYWxpZ246ICdpbmxpbmUnfSksXG5cdFx0bmV3IE9PLnVpLkZpZWxkTGF5b3V0KGFkZEl0ZW1CdXR0b24sIHthbGlnbjogJ2lubGluZSd9KSxcblx0XSk7XG5cblx0cGFyZW50RmllbGRTZXQuYWRkSXRlbXMoW2luaXRpYWxGaWVsZHNldF0pO1xuXG5cdHJldHVybiBwYXJlbnRGaWVsZFNldDtcbn07XG5cbmV4cG9ydCB7Z2VuZXJhdGVUZXh0SW5wdXRXaXRoRHJvcGRvd259O1xuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnfi9FZGl0Zm9ybV9BdHRyaWJ1dGlvbi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtmb3JtV3JhcH0gZnJvbSAnLi9FZGl0Zm9ybV9BdHRyaWJ1dGlvbi5tb2R1bGUubGVzcyc7XG5pbXBvcnQge2dlbmVyYXRlVGV4dElucHV0V2l0aERyb3Bkb3dufSBmcm9tICcuL2dlbmVyYXRlVGV4dElucHV0V2l0aERyb3Bkb3duJztcblxuaW50ZXJmYWNlIExheW91dFByb3BzIHtcblx0JGJvZHk6IEpRdWVyeTxIVE1MRWxlbWVudD47XG59XG5cbmNvbnN0IGdlbmVyYXRlVmlzdWFsRWRpdG9yTGF5b3V0ID0gKHskYm9keX06IExheW91dFByb3BzKTogSlF1ZXJ5PEhUTUxFbGVtZW50PiA9PiB7XG5cdGNvbnN0IHt0YXJnZXR9ID0gd2luZG93LnZlLmluaXQ7XG5cdGNvbnN0ICR3cFN1bW1hcnkgPSB0YXJnZXQuc2F2ZURpYWxvZy5lZGl0U3VtbWFyeUlucHV0LiRpbnB1dDtcblx0Y29uc3QgdGV4dElucHV0V2l0aERyb3Bkb3duID0gZ2VuZXJhdGVUZXh0SW5wdXRXaXRoRHJvcGRvd24oeyRib2R5LCAkd3BTdW1tYXJ5fSk7XG5cdC8vIE1lc3NhZ2VzIHRoYXQgY2FuIGJlIHVzZWQgaGVyZTpcblx0Ly8gKiBzZWUgYWJvdmUgaW1wb3J0ZWQgb3B0aW9ucy5qc29uXG5cdC8vICogZm9yIG1vcmUgaW5mb3JtYXRpb25cblx0Y29uc3QgJGxheW91dCA9ICQoJzxkaXY+JykuYXR0cignaWQnLCBPUFRJT05TLmlucHV0SWQpLmFkZENsYXNzKGZvcm1XcmFwKTtcblx0JGxheW91dC5hcHBlbmQodGV4dElucHV0V2l0aERyb3Bkb3duLiRlbGVtZW50KTtcblxuXHRyZXR1cm4gJGxheW91dDtcbn07XG5cbmNvbnN0IGdlbmVyYXRlV2lraUVkaXRvckxheW91dCA9ICh7JGJvZHksICRlZGl0Rm9ybX06IExheW91dFByb3BzICYgeyRlZGl0Rm9ybTogSlF1ZXJ5fSk6IEpRdWVyeTxIVE1MRWxlbWVudD4gPT4ge1xuXHRjb25zdCAkd3BTdW1tYXJ5ID0gJGVkaXRGb3JtLmZpbmQoJ2lucHV0W25hbWU9d3BTdW1tYXJ5XScpO1xuXHRjb25zdCB0ZXh0SW5wdXRXaXRoRHJvcGRvd24gPSBnZW5lcmF0ZVRleHRJbnB1dFdpdGhEcm9wZG93bih7JGJvZHksICR3cFN1bW1hcnl9KTtcblx0Y29uc3QgJGxheW91dCA9ICQoJzxkaXY+JykuYXR0cignaWQnLCBPUFRJT05TLmlucHV0SWQpLmFkZENsYXNzKGZvcm1XcmFwKTtcblx0JGxheW91dC5hcHBlbmQodGV4dElucHV0V2l0aERyb3Bkb3duLiRlbGVtZW50KTtcblxuXHRyZXR1cm4gJGxheW91dDtcbn07XG5cbmV4cG9ydCB7Z2VuZXJhdGVWaXN1YWxFZGl0b3JMYXlvdXQsIGdlbmVyYXRlV2lraUVkaXRvckxheW91dH07XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICd+L0VkaXRmb3JtX0F0dHJpYnV0aW9uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge2dlbmVyYXRlVmlzdWFsRWRpdG9yTGF5b3V0fSBmcm9tICcuL3V0aWwvZ2VuZXJhdGVMYXlvdXQnO1xuXG5jb25zdCBwcm9jZXNzVmlzdWFsRWRpdG9yID0gKHskYm9keX06IHskYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD59KTogdm9pZCA9PiB7XG5cdC8vIEd1YXJkIGFnYWluc3QgZG91YmxlIGluY2x1c2lvbnNcblx0aWYgKG13LmNvbmZpZy5nZXQoT1BUSU9OUy5jb25maWdLZXlWZSkpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCB7dGFyZ2V0fSA9IHdpbmRvdy52ZS5pbml0O1xuXHRjb25zdCB7c2F2ZURpYWxvZ30gPSB0YXJnZXQ7XG5cdGNvbnN0IHskc2F2ZU9wdGlvbnN9ID0gc2F2ZURpYWxvZztcblx0aWYgKCEkc2F2ZU9wdGlvbnMubGVuZ3RoKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Ly8gU2V0IGd1YXJkXG5cdG13LmNvbmZpZy5zZXQoT1BUSU9OUy5jb25maWdLZXlWZSwgdHJ1ZSk7XG5cblx0Y29uc3QgJGxheW91dCA9IGdlbmVyYXRlVmlzdWFsRWRpdG9yTGF5b3V0KHskYm9keX0pO1xuXG5cdGlmICghJGJvZHkuZmluZChgIyR7T1BUSU9OUy5pbnB1dElkfWApLmxlbmd0aCkge1xuXHRcdCRzYXZlT3B0aW9ucy5hcHBlbmQoJGxheW91dCk7XG5cdH1cblxuXHQvLyBSZWluaXRpYWxpemF0aW9uIGlzIHJlcXVpcmVkIGZvciBzd2l0Y2hpbmcgYmV0d2VlbiBWaXN1YWxFZGl0b3IgYW5kIE5ldyBXaWtpdGV4dCBFZGl0b3IgKDIwMTcpXG5cdG13Lmhvb2soJ3ZlLmFjdGl2YXRpb25Db21wbGV0ZScpLmFkZCgoKSA9PiB7XG5cdFx0aWYgKG13LmNvbmZpZy5nZXQoT1BUSU9OUy5jb25maWdLZXlWZSkpIHtcblx0XHRcdG13LmNvbmZpZy5zZXQoT1BUSU9OUy5jb25maWdLZXlWZSwgZmFsc2UpO1xuXHRcdH1cblx0fSk7XG59O1xuXG5leHBvcnQge3Byb2Nlc3NWaXN1YWxFZGl0b3J9O1xuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnfi9FZGl0Zm9ybV9BdHRyaWJ1dGlvbi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtnZW5lcmF0ZVdpa2lFZGl0b3JMYXlvdXR9IGZyb20gJy4vdXRpbC9nZW5lcmF0ZUxheW91dCc7XG5cbmNvbnN0IHByb2Nlc3NXaWtpRWRpdG9yID0gKHskYm9keSwgJGVkaXRGb3JtfTogeyRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50PjsgJGVkaXRGb3JtOiBKUXVlcnl9KTogdm9pZCA9PiB7XG5cdC8vIEd1YXJkIGFnYWluc3QgZG91YmxlIGluY2x1c2lvbnNcblx0aWYgKG13LmNvbmZpZy5nZXQoT1BUSU9OUy5jb25maWdLZXkpKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgJHRhcmdldDogSlF1ZXJ5ID0gJGVkaXRGb3JtLmZpbmQoT1BUSU9OUy50YXJnZXRXaWtpRWRpdG9yKTtcblx0aWYgKCEkdGFyZ2V0Lmxlbmd0aCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdG13LmNvbmZpZy5zZXQoT1BUSU9OUy5jb25maWdLZXksIHRydWUpO1xuXG5cdGNvbnN0ICRsYXlvdXQgPSBnZW5lcmF0ZVdpa2lFZGl0b3JMYXlvdXQoeyRib2R5LCAkZWRpdEZvcm19KTtcblxuXHRpZiAoISRib2R5LmZpbmQoYCMke09QVElPTlMuaW5wdXRJZH1gKS5sZW5ndGgpIHtcblx0XHQkdGFyZ2V0LmFmdGVyKCRs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SSxDQUFDaUosUUFBUXJGLFFBQVE7QUFDcEI7RUFDRDtBQUVBNkUsS0FBR0MsT0FBT0csSUFBWWhKLFdBQVcsSUFBSTtBQUVyQyxRQUFNcUksVUFBVUkseUJBQXlCO0lBQUN4RTtJQUFPeUU7RUFBUyxDQUFDO0FBRTNELE1BQUksQ0FBQ3pFLE1BQU1VLEtBQUEsSUFBQXBELE9BQWlCckIsT0FBTyxDQUFFLEVBQUU2RCxRQUFRO0FBQzlDcUYsWUFBUUMsTUFBTWhCLE9BQU87RUFDdEI7QUFDRDs7QVhkQSxNQUFBLEdBQUt2SSxtQkFBQXdKLFNBQVEsRUFBRUMsS0FBSyxTQUFTQyxTQUFTdkYsT0FBc0M7QUFDM0UyRSxLQUFHSyxLQUFLLG1CQUFtQixFQUFFQyxJQUFLUixlQUFvQjtBQUNyRFMsc0JBQWtCO01BQ2pCbEY7TUFDQXlFO0lBQ0QsQ0FBQztFQUNGLENBQUM7QUFFREUsS0FBR0ssS0FBSyw0QkFBNEIsRUFBRUMsSUFBSSxNQUFZO0FBQ3JEUCx3QkFBb0I7TUFBQzFFO0lBQUssQ0FBQztFQUM1QixDQUFDO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFsiaW1wb3J0X2V4dF9nYWRnZXQyIiwgInJlcXVpcmUiLCAiY29uZmlnS2V5IiwgImNvbmZpZ0tleVZlIiwgImlucHV0SWQiLCAidGFyZ2V0V2lraUVkaXRvciIsICJmb3JtV3JhcCIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJnZXRJMThuTWVzc2FnZXMiLCAibG9jYWxpemUiLCAiZW4iLCAiU291cmNlIiwgIkxpY2Vuc2UiLCAiaTE4bk1lc3NhZ2VzIiwgImdldE1lc3NhZ2UiLCAia2V5IiwgIkxJQ0VOU0VTIiwgImxhYmVsIiwgImRhdGEiLCAiVkFMSURfSU5URVJXSUtJX1BSRUZJWCIsICJnZXRMaW5rIiwgImxpbmsiLCAidGV4dCIsICJWQUxJRF9JTlRFUldJS0lfTElOS19SRUdFWCIsICJSZWdFeHAiLCAiY29uY2F0IiwgImpvaW4iLCAidGVzdCIsICJyZXBsYWNlIiwgImVuY29kZVVSSSIsICJkZWNvZGVVUkkiLCAiZ2V0QXR0cmlidXRpb24iLCAiZmllbGRTZXRMYXlvdXQiLCAiYXR0cmlidXRpb25zIiwgImdldFNlbGVjdGVkSXRlbSIsICJkcm9wZG93biIsICJzZWxlY3RlZEl0ZW0iLCAiZ2V0TWVudSIsICJmaW5kU2VsZWN0ZWRJdGVtIiwgImdldFNlbGVjdGVkVmFsdWUiLCAiZ2V0RGF0YSIsICJnZXRTZWxlY3RlZExhYmVsIiwgImdldExhYmVsIiwgIl9pdGVyYXRvciIsICJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsICJnZXRJdGVtcyIsICJfc3RlcCIsICJzIiwgIm4iLCAiZG9uZSIsICJhdHRyaWJ1dGlvbkZpZWxkc2V0IiwgInZhbHVlIiwgImF0dHJpYnV0aW9uIiwgIl9pdGVyYXRvcjIiLCAiX3N0ZXAyIiwgImZpZWxkTGF5b3V0IiwgImZpZWxkIiwgImdldEZpZWxkIiwgInN1cHBvcnRzIiwgImdldFZhbHVlIiwgInNvdXJjZSIsICJsaWNlbnNlIiwgImVyciIsICJlIiwgImYiLCAibGVuZ3RoIiwgInVwZGF0ZVdwQXR0cmlidXRpb24iLCAiJGJvZHkiLCAicGFyZW50RmllbGRTZXQiLCAid3BBdHRyaWJ1dGlvbiIsICIkd3BBdHRyaWJ1dGlvbiIsICIkIiwgImF0dHIiLCAiaWQiLCAibmFtZSIsICJ0eXBlIiwgIiRvcmlnaW53cEF0dHJpYnV0aW9uIiwgImZpbmQiLCAicHJlcGVuZCIsICJ2YWwiLCAiYXBwZW5kVGV4dFRvU3VtbWFyeSIsICJjdXN0b21TdW1tYXJ5IiwgIiR3cFN1bW1hcnkiLCAiXyR3cFN1bW1hcnkkdmFsIiwgIm9yaWdpblN1bW1hcnkiLCAidHJpbSIsICJ0cmlnZ2VyIiwgImdldFRleHRJbnB1dCIsICJvbkNoYW5nZXMiLCAidGV4dElucHV0IiwgIk9PIiwgInVpIiwgIlRleHRJbnB1dFdpZGdldCIsICJwbGFjZWhvbGRlciIsICJfaSIsICJfb25DaGFuZ2VzIiwgIm9uQ2hhbmdlIiwgIm9uIiwgImdldERyb3BEb3duIiwgIm9uU2VsZWN0cyIsICJEcm9wZG93bldpZGdldCIsICJtZW51T3B0aW9ucyIsICJfaTIiLCAiX0xJQ0VOU0VTIiwgIk1lbnVPcHRpb25XaWRnZXQiLCAiYWRkSXRlbXMiLCAiX2kzIiwgIl9vblNlbGVjdHMiLCAib25TZWxlY3QiLCAiZ2V0QWRkSXRlbUJ1dHRvbiIsICJvbkNsaWNrcyIsICJhZGRJdGVtQnV0dG9uIiwgIkJ1dHRvbklucHV0V2lkZ2V0IiwgIl9pNCIsICJfb25DbGlja3MiLCAib25DbGljayIsICJnZW5lcmF0ZVRleHRJbnB1dFdpdGhEcm9wZG93biIsICJpbml0aWFsRmllbGRzZXQiLCAiRmllbGRzZXRMYXlvdXQiLCAiaW5wdXRPbkNoYW5nZSIsICJkcm9wRG93biIsICJhZGRJdGVtT25DbGljayIsICJzZXRWYWx1ZSIsICJ1bnNlbGVjdEl0ZW0iLCAiRmllbGRMYXlvdXQiLCAiYWxpZ24iLCAiZ2VuZXJhdGVWaXN1YWxFZGl0b3JMYXlvdXQiLCAidGFyZ2V0IiwgIndpbmRvdyIsICJ2ZSIsICJpbml0IiwgInNhdmVEaWFsb2ciLCAiZWRpdFN1bW1hcnlJbnB1dCIsICIkaW5wdXQiLCAidGV4dElucHV0V2l0aERyb3Bkb3duIiwgIiRsYXlvdXQiLCAiYWRkQ2xhc3MiLCAiYXBwZW5kIiwgIiRlbGVtZW50IiwgImdlbmVyYXRlV2lraUVkaXRvckxheW91dCIsICIkZWRpdEZvcm0iLCAicHJvY2Vzc1Zpc3VhbEVkaXRvciIsICJtdyIsICJjb25maWciLCAiZ2V0IiwgIiRzYXZlT3B0aW9ucyIsICJzZXQiLCAiaG9vayIsICJhZGQiLCAicHJvY2Vzc1dpa2lFZGl0b3IiLCAiJHRhcmdldCIsICJhZnRlciIsICJnZXRCb2R5IiwgInRoZW4iLCAiZWRpdEZvcm0iXQp9Cg==

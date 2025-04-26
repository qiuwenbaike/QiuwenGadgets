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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0VkaXRmb3JtX0F0dHJpYnV0aW9uL0VkaXRmb3JtX0F0dHJpYnV0aW9uLnRzIiwgInNyYy9FZGl0Zm9ybV9BdHRyaWJ1dGlvbi9vcHRpb25zLmpzb24iLCAic3JjL0VkaXRmb3JtX0F0dHJpYnV0aW9uL21vZHVsZXMvdXRpbC9FZGl0Zm9ybV9BdHRyaWJ1dGlvbi5tb2R1bGUubGVzcyIsICJzcmMvRWRpdGZvcm1fQXR0cmlidXRpb24vbW9kdWxlcy9pMThuLnRzIiwgInNyYy9FZGl0Zm9ybV9BdHRyaWJ1dGlvbi9tb2R1bGVzL2NvbnN0YW50LnRzIiwgInNyYy9FZGl0Zm9ybV9BdHRyaWJ1dGlvbi9tb2R1bGVzL3V0aWwvZ2V0TGluay50cyIsICJzcmMvRWRpdGZvcm1fQXR0cmlidXRpb24vbW9kdWxlcy91dGlsL2dldEF0dHJpYnV0aW9uLnRzIiwgInNyYy9FZGl0Zm9ybV9BdHRyaWJ1dGlvbi9tb2R1bGVzL3V0aWwvYXBwZW5kVGV4dFRvU3VtbWFyeS50cyIsICJzcmMvRWRpdGZvcm1fQXR0cmlidXRpb24vbW9kdWxlcy91dGlsL2dlbmVyYXRlVGV4dElucHV0V2l0aERyb3Bkb3duLnRzIiwgInNyYy9FZGl0Zm9ybV9BdHRyaWJ1dGlvbi9tb2R1bGVzL3V0aWwvZ2VuZXJhdGVMYXlvdXQudHMiLCAic3JjL0VkaXRmb3JtX0F0dHJpYnV0aW9uL21vZHVsZXMvcHJvY2Vzc1Zpc3VhbEVkaXRvci50cyIsICJzcmMvRWRpdGZvcm1fQXR0cmlidXRpb24vbW9kdWxlcy9wcm9jZXNzV2lraUVkaXRvci50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHtnZXRCb2R5fSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuaW1wb3J0IHtwcm9jZXNzVmlzdWFsRWRpdG9yfSBmcm9tICcuL21vZHVsZXMvcHJvY2Vzc1Zpc3VhbEVkaXRvcic7XG5pbXBvcnQge3Byb2Nlc3NXaWtpRWRpdG9yfSBmcm9tICcuL21vZHVsZXMvcHJvY2Vzc1dpa2lFZGl0b3InO1xuXG4vKipcbiAqIEBkZXNjcmlwdGlvbiDnrKzkuInmlrnmnaXmupDnibnmrorlo7DmmI5cbiAqL1xudm9pZCBnZXRCb2R5KCkudGhlbihmdW5jdGlvbiBlZGl0Rm9ybSgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkIHtcblx0bXcuaG9vaygnd2lraXBhZ2UuZWRpdGZvcm0nKS5hZGQoKCRlZGl0Rm9ybSk6IHZvaWQgPT4ge1xuXHRcdHByb2Nlc3NXaWtpRWRpdG9yKHtcblx0XHRcdCRib2R5LFxuXHRcdFx0JGVkaXRGb3JtLFxuXHRcdH0pO1xuXHR9KTtcblxuXHRtdy5ob29rKCd2ZS5zYXZlRGlhbG9nLnN0YXRlQ2hhbmdlZCcpLmFkZCgoKTogdm9pZCA9PiB7XG5cdFx0cHJvY2Vzc1Zpc3VhbEVkaXRvcih7JGJvZHl9KTtcblx0fSk7XG59KTtcbiIsICJ7XG5cdFwiY29uZmlnS2V5XCI6IFwiZ2FkZ2V0LUVkaXRmb3JtX0F0dHJpYnV0aW9uX19Jbml0aWFsaXplZFwiLFxuXHRcImNvbmZpZ0tleVZlXCI6IFwiZ2FkZ2V0LUVkaXRmb3JtX0F0dHJpYnV0aW9uX19Jbml0aWFsaXplZF9fVkVcIixcblx0XCJpbnB1dElkXCI6IFwiZWRpdGZvcm1fYXR0cmlidXRpb25cIixcblx0XCJ0YXJnZXRXaWtpRWRpdG9yXCI6IFwiLmVkaXRDaGVja2JveGVzIC5vby11aS1ob3Jpem9udGFsTGF5b3V0XCJcbn1cbiIsICJpbXBvcnQgXCJlc2J1aWxkLWNzcy1tb2R1bGVzLXBsdWdpbi1ucy1jc3M6c3JjL0VkaXRmb3JtX0F0dHJpYnV0aW9uL21vZHVsZXMvdXRpbC9FZGl0Zm9ybV9BdHRyaWJ1dGlvbi5tb2R1bGUubGVzc1wiO1xuZXhwb3J0IGNvbnN0IGZvcm1XcmFwID0gXCJFZGl0Zm9ybS1BdHRyaWJ1dGlvbi1tb2R1bGVfX2Zvcm1XcmFwX201ajJVYV9fNDEwMFwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIFwiZm9ybVdyYXBcIjogZm9ybVdyYXBcbn07XG4gICAgICAiLCAiaW1wb3J0IHtsb2NhbGl6ZX0gZnJvbSAnZXh0LmdhZGdldC5pMThuJztcblxuY29uc3QgZ2V0STE4bk1lc3NhZ2VzID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdCdBZGQgdG8gRWRpdCBTdW1tYXJ5JzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdBZGQgdG8gRWRpdCBTdW1tYXJ5Jyxcblx0XHRcdCd6aC1oYW5zJzogJ+a3u+WKoOiHs+e8lui+keaRmOimgScsXG5cdFx0XHQnemgtaGFudCc6ICfmt7vliqDoh7Pnt6jovK/mkZjopoEnLFxuXHRcdH0pLFxuXHRcdFNvdXJjZTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdTb3VyY2UnLFxuXHRcdFx0J3poLWhhbnMnOiAn5YaF5a655p2l5rqQJyxcblx0XHRcdCd6aC1oYW50JzogJ+WFp+WuueS+hua6kCcsXG5cdFx0fSksXG5cdFx0TGljZW5zZTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdMaWNlbnNlJyxcblx0XHRcdCd6aC1oYW5zJzogJ+iuuOWPr+ivgScsXG5cdFx0XHQnemgtaGFudCc6ICfoqLHlj6/orYknLFxuXHRcdH0pLFxuXHRcdCdPdGhlciBMaWNlbnNlJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdPdGhlciBsaWNlbnNlJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WFtuS7luiuuOWPr+ivgScsXG5cdFx0XHQnemgtaGFudCc6ICflhbbku5boqLHlj6/orYknLFxuXHRcdH0pLFxuXHRcdCdQbGVhc2UgQ2xhaW0gU291cmNlcyBhbmQgTGljZW5zZXMnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0lmIGVkaXQgY29udGVudCBhZGRzIGFueSB0aGlyZC1wYXJ0eSBjb250ZW50LCBwbGVhc2UgYWRkIHRoZSBzb3VyY2UgYW5kIGxpY2Vuc2Ugb2YgdGhlIHRoaXJkLXBhcnR5IGNvbnRlbnQgc2VwYXJhdGVseSB0byB0aGUgZWRpdGluZyBzdW1tYXJ5LicsXG5cdFx0XHQnemgtaGFucyc6ICfoi6XmgqjlkJHnvJbovpHlhoXlrrnkuK3mt7vliqDkuobnrKzkuInmlrnmkrDlhpnnmoTlhoXlrrnvvIzor7flsIbnm7jlhbPnrKzkuInmlrnlhoXlrrnnmoTmnaXmupDjgIHorrjlj6/mnaHmrL7lnKjnvJbovpHmkZjopoHkuK3liIbmnaHlo7DmmI4nLFxuXHRcdFx0J3poLWhhbnQnOiAn6Iul5oKo5ZCR57eo6Lyv5YWn5a655Lit5re75Yqg5LqG56ys5LiJ5pa55pKw5YaZ55qE5YWn5a6577yM6KuL5bCH55u45YWz56ys5LiJ5pa55YWn5a6555qE5L6G5rqQ44CB6Kix5Y+v5qKd5qy+5Zyo57eo6Lyv5pGY6KaB5Lit5YiG5qKd6IGy5piOJyxcblx0XHR9KSxcblx0XHQnUmVwbGFjZSBXaXRoIExpY2Vuc2UnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJyAoUmVwbGFjZSB3aXRoIGxpY2Vuc2UgbmFtZSBhbmQgVVJMKScsXG5cdFx0XHQnemgtaGFucyc6ICfvvIjmm7/mjaLkuLrorrjlj6/or4HlkI3np7DlkoznvZHlnYDvvIknLFxuXHRcdFx0J3poLWhhbnQnOiAn77yI5pu/5o+b54iy6Kix5Y+v6K2J5ZCN56ix5ZKM57ay5Z2A77yJJyxcblx0XHR9KSxcblx0fTtcbn07XG5cbmNvbnN0IGkxOG5NZXNzYWdlcyA9IGdldEkxOG5NZXNzYWdlcygpO1xuXG5jb25zdCBnZXRNZXNzYWdlOiBHZXRNZXNzYWdlczx0eXBlb2YgaTE4bk1lc3NhZ2VzPiA9IChrZXkpID0+IHtcblx0cmV0dXJuIGkxOG5NZXNzYWdlc1trZXldIHx8IGtleTtcbn07XG5cbmV4cG9ydCB7Z2V0TWVzc2FnZX07XG4iLCAiaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL2kxOG4nO1xuXG5jb25zdCBMSUNFTlNFUyA9IFtcblx0e1xuXHRcdGxhYmVsOiAnQ0MgQlktU0EgNC4wJyxcblx0XHRkYXRhOiAnY2MtYnktc2E6NC4wJyxcblx0fSxcblx0e1xuXHRcdGxhYmVsOiAnQ0MgQlktU0EgMy4wJyxcblx0XHRkYXRhOiAnY2MtYnktc2E6My4wJyxcblx0fSxcblx0e1xuXHRcdGxhYmVsOiAnQ0MgQlktU0EgMy4wIENOJyxcblx0XHRkYXRhOiAnY2MtYnktc2E6My4wL2NuJyxcblx0fSxcblx0e1xuXHRcdGxhYmVsOiAnQ0MgQlkgNC4wJyxcblx0XHRkYXRhOiAnY2MtYnk6NC4wJyxcblx0fSxcblx0e1xuXHRcdGxhYmVsOiAnQ0MgQlkgMy4wJyxcblx0XHRkYXRhOiAnY2MtYnk6My4wJyxcblx0fSxcblx0e1xuXHRcdGxhYmVsOiAnQ0MgQlkgMy4wIENOJyxcblx0XHRkYXRhOiAnY2MtYnk6My4wL2NuJyxcblx0fSxcblx0e1xuXHRcdGxhYmVsOiAnQ0MwLTEuMCcsXG5cdFx0ZGF0YTogJ2NjLXplcm86MS4wJyxcblx0fSxcblx0e1xuXHRcdGxhYmVsOiAnS09HTCBUeXBlIEk6IEF0dHJpYnV0aW9uJyxcblx0XHRkYXRhOiAnaHR0cHM6Ly93d3cua29nbC5vci5rci9pbmZvL2xpY2Vuc2VUeXBlMS5kbycsXG5cdH0sXG5cdHtcblx0XHRsYWJlbDogZ2V0TWVzc2FnZSgnT3RoZXIgTGljZW5zZScpLFxuXHRcdGRhdGE6IGdldE1lc3NhZ2UoJ1JlcGxhY2UgV2l0aCBMaWNlbnNlJyksXG5cdH0sXG5dO1xuXG5jb25zdCBWQUxJRF9JTlRFUldJS0lfUFJFRklYID0gW1xuXHQnY2MtYnknLFxuXHQnY2MtYnktc2EnLFxuXHQnY2MtemVybycsXG5cdCdjYzAnLFxuXHQnY29tbW9ucycsXG5cdCdlbndpa2knLFxuXHQnaW5jdWJhdG9yJyxcblx0J2luY3ViYXRvci13cC1tbmMnLFxuXHQnaW5jdWJhdG9yLXd0LW1uYycsXG5cdCdpc282MzktMycsXG5cdCdsZXhlbWVzJyxcblx0J2xpY2VuY2UnLFxuXHQnbGljZW5jZXdpa2knLFxuXHQnbGljZW5zZScsXG5cdCdsb2dpbicsXG5cdCdsb2dpbnFpdXdlbmJhaWtlJyxcblx0J2xvZ2lud2lraScsXG5cdCdtZWRpYXdpa2l3aWtpJyxcblx0J21vemlsbGF3aWtpJyxcblx0J213Jyxcblx0J29sZHdpa2lzb3VyY2UnLFxuXHQncG1pZCcsXG5cdCdxaXV3ZW5iYWlrZScsXG5cdCdyZXYnLFxuXHQndGVzdHdpa2lkYXRhJyxcblx0J3YnLFxuXHQndm95Jyxcblx0J3dpa2knLFxuXHQnd2lraWJvb2tzJyxcblx0J3dpa2lkYXRhJyxcblx0J3dpa2lmdW5jdGlvbnMnLFxuXHQnd2lraW5ld3MnLFxuXHQnd2lraXBlZGlhJyxcblx0J3dpa2lxdW90ZScsXG5cdCd3aWtpc291cmNlJyxcblx0J3dpa2l2ZXJzaXR5Jyxcblx0J3dpa2l2b3lhZ2UnLFxuXHQnd2lrdCcsXG5cdCd3aWt0aW9uYXJ5Jyxcblx0J3pocWl1d2VuYmFpa2UnLFxuXHQnemh3aWtpJyxcblx0J3pod2lraXNvdXJjZScsXG5cdCd6aHdpa2l2b3lhZ2UnLFxuXTtcblxuZXhwb3J0IHtMSUNFTlNFUywgVkFMSURfSU5URVJXSUtJX1BSRUZJWH07XG4iLCAiaW1wb3J0IHtWQUxJRF9JTlRFUldJS0lfUFJFRklYfSBmcm9tICcuLi9jb25zdGFudCc7XG5cbmNvbnN0IGdldExpbmsgPSAoe2xpbmssIHRleHR9OiB7bGluazogc3RyaW5nOyB0ZXh0Pzogc3RyaW5nfSk6IHN0cmluZyA9PiB7XG5cdGNvbnN0IFZBTElEX0lOVEVSV0lLSV9MSU5LX1JFR0VYID0gbmV3IFJlZ0V4cChgXjo/KCR7VkFMSURfSU5URVJXSUtJX1BSRUZJWC5qb2luKCd8Jyl9KWAsICdpJyk7XG5cblx0aWYgKFZBTElEX0lOVEVSV0lLSV9MSU5LX1JFR0VYLnRlc3QobGluaykpIHtcblx0XHRsaW5rID0gYDoke2xpbmsucmVwbGFjZSgvXjovLCAnJyl9YDtcblx0XHRpZiAodGV4dCkge1xuXHRcdFx0cmV0dXJuIGBbWyR7bGlua318JHt0ZXh0fV1dYDtcblx0XHR9XG5cdFx0cmV0dXJuIGBbWyR7bGlua31dXWA7XG5cdH1cblxuXHRyZXR1cm4gZW5jb2RlVVJJKGRlY29kZVVSSShsaW5rKSk7XG59O1xuXG5leHBvcnQge2dldExpbmt9O1xuIiwgImltcG9ydCB7Z2V0TGlua30gZnJvbSAnLi9nZXRMaW5rJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi4vaTE4bic7XG5cbmNvbnN0IGdldEF0dHJpYnV0aW9uID0gKGZpZWxkU2V0TGF5b3V0OiBPTy51aS5GaWVsZHNldExheW91dCkgPT4ge1xuXHRjb25zdCBhdHRyaWJ1dGlvbnMgPSBbXTtcblxuXHRjb25zdCBnZXRTZWxlY3RlZEl0ZW0gPSAoZHJvcGRvd246IE9PLnVpLkRyb3Bkb3duV2lkZ2V0KTogT08udWkuT3B0aW9uV2lkZ2V0IHwgbnVsbCA9PiB7XG5cdFx0Y29uc3Qgc2VsZWN0ZWRJdGVtOiBPTy51aS5PcHRpb25XaWRnZXQgfCBudWxsID0gZHJvcGRvd25cblx0XHRcdC5nZXRNZW51KClcblx0XHRcdC5maW5kU2VsZWN0ZWRJdGVtKCkgYXMgT08udWkuT3B0aW9uV2lkZ2V0IHwgbnVsbDtcblx0XHRyZXR1cm4gc2VsZWN0ZWRJdGVtO1xuXHR9O1xuXG5cdGNvbnN0IGdldFNlbGVjdGVkVmFsdWUgPSAoZHJvcGRvd246IE9PLnVpLkRyb3Bkb3duV2lkZ2V0KTogc3RyaW5nIHwgdW5kZWZpbmVkID0+IHtcblx0XHRjb25zdCBzZWxlY3RlZEl0ZW0gPSBnZXRTZWxlY3RlZEl0ZW0oZHJvcGRvd24pO1xuXHRcdHJldHVybiBzZWxlY3RlZEl0ZW0gPyAoc2VsZWN0ZWRJdGVtLmdldERhdGEoKSBhcyBzdHJpbmcpIDogdW5kZWZpbmVkO1xuXHR9O1xuXG5cdGNvbnN0IGdldFNlbGVjdGVkTGFiZWwgPSAoZHJvcGRvd246IE9PLnVpLkRyb3Bkb3duV2lkZ2V0KTogc3RyaW5nIHwgdW5kZWZpbmVkID0+IHtcblx0XHRjb25zdCBzZWxlY3RlZEl0ZW0gPSBnZXRTZWxlY3RlZEl0ZW0oZHJvcGRvd24pO1xuXHRcdHJldHVybiBzZWxlY3RlZEl0ZW0gPyAoc2VsZWN0ZWRJdGVtLmdldExhYmVsKCkgYXMgc3RyaW5nKSA6IHVuZGVmaW5lZDtcblx0fTtcblxuXHRmb3IgKGNvbnN0IGF0dHJpYnV0aW9uRmllbGRzZXQgb2YgZmllbGRTZXRMYXlvdXQuZ2V0SXRlbXMoKSBhcyBPTy51aS5GaWVsZHNldExheW91dFtdKSB7XG5cdFx0Y29uc3QgYXR0cmlidXRpb246IHtzb3VyY2U/OiBzdHJpbmc7IGxpY2Vuc2U/OiBzdHJpbmd9ID0ge307XG5cblx0XHRmb3IgKGNvbnN0IGZpZWxkTGF5b3V0IG9mIGF0dHJpYnV0aW9uRmllbGRzZXQuZ2V0SXRlbXMoKSBhcyBPTy51aS5GaWVsZExheW91dFtdKSB7XG5cdFx0XHRjb25zdCBmaWVsZCA9IGZpZWxkTGF5b3V0LmdldEZpZWxkKCk7XG5cblx0XHRcdGlmIChmaWVsZC5zdXBwb3J0cygnZ2V0VmFsdWUnKSkge1xuXHRcdFx0XHRjb25zdCBsaW5rID0gKGZpZWxkIGFzIE9PLnVpLlRleHRJbnB1dFdpZGdldCkuZ2V0VmFsdWUoKTtcblx0XHRcdFx0aWYgKGxpbmspIHtcblx0XHRcdFx0XHRhdHRyaWJ1dGlvbi5zb3VyY2UgPSBnZXRMaW5rKHtsaW5rfSk7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSBpZiAoZmllbGQuc3VwcG9ydHMoJ2dldE1lbnUnKSkge1xuXHRcdFx0XHRjb25zdCBsaW5rID0gZ2V0U2VsZWN0ZWRWYWx1ZShmaWVsZCBhcyBPTy51aS5Ecm9wZG93bldpZGdldCk7XG5cblx0XHRcdFx0aWYgKGxpbmspIHtcblx0XHRcdFx0XHRjb25zdCB0ZXh0ID0gZ2V0U2VsZWN0ZWRMYWJlbChmaWVsZCBhcyBPTy51aS5Ecm9wZG93bldpZGdldCk7XG5cblx0XHRcdFx0XHRpZiAodGV4dCkge1xuXHRcdFx0XHRcdFx0YXR0cmlidXRpb24ubGljZW5zZSA9IGdldExpbmsoe2xpbmssIHRleHR9KTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0YXR0cmlidXRpb24ubGljZW5zZSA9IGdldExpbmsoe2xpbmt9KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoYXR0cmlidXRpb24uc291cmNlICYmIGF0dHJpYnV0aW9uLmxpY2Vuc2UpIHtcblx0XHRcdGF0dHJpYnV0aW9uc1thdHRyaWJ1dGlvbnMubGVuZ3RoXSA9XG5cdFx0XHRcdGAke2dldE1lc3NhZ2UoJ1NvdXJjZScpfTogJHthdHRyaWJ1dGlvbi5zb3VyY2V9ICgke2dldE1lc3NhZ2UoJ0xpY2Vuc2UnKX06ICR7YXR0cmlidXRpb24ubGljZW5zZX0pIGA7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIGF0dHJpYnV0aW9ucy5qb2luKCcgJyk7XG59O1xuXG5jb25zdCB1cGRhdGVXcEF0dHJpYnV0aW9uID0gKHtcblx0JGJvZHksXG5cdHBhcmVudEZpZWxkU2V0LFxufToge1xuXHQkYm9keTogSlF1ZXJ5PEhUTUxFbGVtZW50Pjtcblx0cGFyZW50RmllbGRTZXQ6IE9PLnVpLkZpZWxkc2V0TGF5b3V0O1xufSkgPT4ge1xuXHRsZXQgd3BBdHRyaWJ1dGlvbjogc3RyaW5nID0gJyc7XG5cblx0Y29uc3QgJHdwQXR0cmlidXRpb246IEpRdWVyeSA9ICQoJzxpbnB1dD4nKS5hdHRyKHtcblx0XHRpZDogJ3dwQXR0cmlidXRpb24nLFxuXHRcdG5hbWU6ICd3cEF0dHJpYnV0aW9uJyxcblx0XHR0eXBlOiAnaGlkZGVuJyxcblx0XHR2YWx1ZTogJycsXG5cdH0pO1xuXHRjb25zdCAkb3JpZ2lud3BBdHRyaWJ1dGlvbjogSlF1ZXJ5ID0gJGJvZHkuZmluZCgnaW5wdXRbbmFtZT13cEF0dHJpYnV0aW9uXScpO1xuXHRpZiAoISRvcmlnaW53cEF0dHJpYnV0aW9uLmxlbmd0aCkge1xuXHRcdCRib2R5LnByZXBlbmQoJHdwQXR0cmlidXRpb24pO1xuXHR9XG5cblx0d3BBdHRyaWJ1dGlvbiA9IGdldEF0dHJpYnV0aW9uKHBhcmVudEZpZWxkU2V0KTtcblx0JG9yaWdpbndwQXR0cmlidXRpb24udmFsKHdwQXR0cmlidXRpb24pO1xufTtcblxuZXhwb3J0IHtnZXRBdHRyaWJ1dGlvbiwgdXBkYXRlV3BBdHRyaWJ1dGlvbn07XG4iLCAiY29uc3QgYXBwZW5kVGV4dFRvU3VtbWFyeSA9ICh7Y3VzdG9tU3VtbWFyeSwgJHdwU3VtbWFyeX06IHtjdXN0b21TdW1tYXJ5OiBzdHJpbmc7ICR3cFN1bW1hcnk6IEpRdWVyeX0pOiB2b2lkID0+IHtcblx0Y29uc3Qgb3JpZ2luU3VtbWFyeTogc3RyaW5nID0gKCR3cFN1bW1hcnkudmFsKCkgYXMgc3RyaW5nIHwgdW5kZWZpbmVkKSA/PyAnJztcblxuXHQkd3BTdW1tYXJ5LnZhbChvcmlnaW5TdW1tYXJ5LnRyaW0oKSA/IGAke29yaWdpblN1bW1hcnl9ICR7Y3VzdG9tU3VtbWFyeX1gIDogY3VzdG9tU3VtbWFyeSkudHJpZ2dlcignY2hhbmdlJyk7XG59O1xuXG5leHBvcnQge2FwcGVuZFRleHRUb1N1bW1hcnl9O1xuIiwgImltcG9ydCB7Z2V0QXR0cmlidXRpb24sIHVwZGF0ZVdwQXR0cmlidXRpb259IGZyb20gJy4vZ2V0QXR0cmlidXRpb24nO1xuaW1wb3J0IHtMSUNFTlNFU30gZnJvbSAnLi4vY29uc3RhbnQnO1xuaW1wb3J0IHthcHBlbmRUZXh0VG9TdW1tYXJ5fSBmcm9tICcuL2FwcGVuZFRleHRUb1N1bW1hcnknO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuLi9pMThuJztcblxuY29uc3QgZ2V0VGV4dElucHV0ID0gKC4uLm9uQ2hhbmdlczogKCgpID0+IHZvaWQpW10pID0+IHtcblx0Y29uc3QgdGV4dElucHV0ID0gbmV3IE9PLnVpLlRleHRJbnB1dFdpZGdldCh7XG5cdFx0cGxhY2Vob2xkZXI6IGdldE1lc3NhZ2UoJ1NvdXJjZScpLFxuXHR9KTtcblxuXHRmb3IgKGNvbnN0IG9uQ2hhbmdlIG9mIG9uQ2hhbmdlcykge1xuXHRcdHRleHRJbnB1dC5vbignY2hhbmdlJywgb25DaGFuZ2UpO1xuXHR9XG5cblx0cmV0dXJuIHRleHRJbnB1dDtcbn07XG5cbmNvbnN0IGdldERyb3BEb3duID0gKC4uLm9uU2VsZWN0czogKCgpID0+IHZvaWQpW10pID0+IHtcblx0Y29uc3QgZHJvcGRvd246IE9PLnVpLkRyb3Bkb3duV2lkZ2V0ID0gbmV3IE9PLnVpLkRyb3Bkb3duV2lkZ2V0KHtcblx0XHRsYWJlbDogZ2V0TWVzc2FnZSgnTGljZW5zZScpLFxuXHR9KTtcblxuXHRjb25zdCBtZW51T3B0aW9uczogT08udWkuTWVudU9wdGlvbldpZGdldFtdID0gW107XG5cblx0Zm9yIChjb25zdCB7ZGF0YSwgbGFiZWx9IG9mIExJQ0VOU0VTKSB7XG5cdFx0bWVudU9wdGlvbnNbbWVudU9wdGlvbnMubGVuZ3RoXSA9IG5ldyBPTy51aS5NZW51T3B0aW9uV2lkZ2V0KHtcblx0XHRcdGRhdGEsXG5cdFx0XHRsYWJlbCxcblx0XHR9KTtcblx0fVxuXG5cdGRyb3Bkb3duLmdldE1lbnUoKS5hZGRJdGVtcyhtZW51T3B0aW9ucyk7XG5cblx0Zm9yIChjb25zdCBvblNlbGVjdCBvZiBvblNlbGVjdHMpIHtcblx0XHRkcm9wZG93bi5nZXRNZW51KCkub24oJ3NlbGVjdCcsIG9uU2VsZWN0KTtcblx0fVxuXG5cdHJldHVybiBkcm9wZG93bjtcbn07XG5cbmNvbnN0IGdldEFkZEl0ZW1CdXR0b24gPSAoLi4ub25DbGlja3M6ICgoKSA9PiB2b2lkKVtdKTogT08udWkuQnV0dG9uSW5wdXRXaWRnZXQgPT4ge1xuXHRjb25zdCBhZGRJdGVtQnV0dG9uID0gbmV3IE9PLnVpLkJ1dHRvbklucHV0V2lkZ2V0KHtcblx0XHRsYWJlbDogZ2V0TWVzc2FnZSgnQWRkIHRvIEVkaXQgU3VtbWFyeScpLFxuXHR9KTtcblxuXHRmb3IgKGNvbnN0IG9uQ2xpY2sgb2Ygb25DbGlja3MpIHtcblx0XHRhZGRJdGVtQnV0dG9uLm9uKCdjbGljaycsIG9uQ2xpY2spO1xuXHR9XG5cblx0cmV0dXJuIGFkZEl0ZW1CdXR0b247XG59O1xuXG5jb25zdCBnZW5lcmF0ZVRleHRJbnB1dFdpdGhEcm9wZG93biA9ICh7JGJvZHksICR3cFN1bW1hcnl9OiB7JGJvZHk6IEpRdWVyeTxIVE1MRWxlbWVudD47ICR3cFN1bW1hcnk6IEpRdWVyeX0pID0+IHtcblx0Y29uc3QgaW5pdGlhbEZpZWxkc2V0ID0gbmV3IE9PLnVpLkZpZWxkc2V0TGF5b3V0KCk7XG5cdGNvbnN0IHBhcmVudEZpZWxkU2V0ID0gbmV3IE9PLnVpLkZpZWxkc2V0TGF5b3V0KHtcblx0XHRsYWJlbDogZ2V0TWVzc2FnZSgnUGxlYXNlIENsYWltIFNvdXJjZXMgYW5kIExpY2Vuc2VzJyksXG5cdH0pO1xuXG5cdGNvbnN0IGlucHV0T25DaGFuZ2UgPSAoKSA9PiB7XG5cdFx0dXBkYXRlV3BBdHRyaWJ1dGlvbih7JGJvZHksIHBhcmVudEZpZWxkU2V0fSk7XG5cdH07XG5cblx0Y29uc3QgdGV4dElucHV0ID0gZ2V0VGV4dElucHV0KGlucHV0T25DaGFuZ2UpO1xuXHRjb25zdCBkcm9wRG93biA9IGdldERyb3BEb3duKGlucHV0T25DaGFuZ2UpO1xuXG5cdGNvbnN0IGFkZEl0ZW1PbkNsaWNrID0gKCkgPT4ge1xuXHRcdGxldCB3cEF0dHJpYnV0aW9uOiBzdHJpbmcgPSAnJztcblxuXHRcdGNvbnN0ICR3cEF0dHJpYnV0aW9uOiBKUXVlcnkgPSAkKCc8aW5wdXQ+JykuYXR0cih7XG5cdFx0XHRpZDogJ3dwQXR0cmlidXRpb24nLFxuXHRcdFx0bmFtZTogJ3dwQXR0cmlidXRpb24nLFxuXHRcdFx0dHlwZTogJ2hpZGRlbicsXG5cdFx0XHR2YWx1ZTogJycsXG5cdFx0fSk7XG5cblx0XHRjb25zdCAkb3JpZ2lud3BBdHRyaWJ1dGlvbjogSlF1ZXJ5PEhUTUxJbnB1dEVsZW1lbnQ+ID1cblx0XHRcdCRib2R5LmZpbmQ8SFRNTElucHV0RWxlbWVudD4oJ2lucHV0W25hbWU9d3BBdHRyaWJ1dGlvbl0nKTtcblx0XHRpZiAoISRvcmlnaW53cEF0dHJpYnV0aW9uLmxlbmd0aCkge1xuXHRcdFx0JGJvZHkucHJlcGVuZCgkd3BBdHRyaWJ1dGlvbik7XG5cdFx0fVxuXG5cdFx0d3BBdHRyaWJ1dGlvbiA9IGdldEF0dHJpYnV0aW9uKHBhcmVudEZpZWxkU2V0KTtcblx0XHQkb3JpZ2lud3BBdHRyaWJ1dGlvbi52YWwod3BBdHRyaWJ1dGlvbik7XG5cblx0XHRhcHBlbmRUZXh0VG9TdW1tYXJ5KHtcblx0XHRcdGN1c3RvbVN1bW1hcnk6ICRvcmlnaW53cEF0dHJpYnV0aW9uLnZhbCgpID8gYFskeyRvcmlnaW53cEF0dHJpYnV0aW9uLnZhbCgpfV1gIDogJycsXG5cdFx0XHQkd3BTdW1tYXJ5LFxuXHRcdH0pO1xuXG5cdFx0dGV4dElucHV0LnNldFZhbHVlKCcnKTtcblx0XHRkcm9wRG93bi5nZXRNZW51KCkudW5zZWxlY3RJdGVtKCk7XG5cdH07XG5cblx0Y29uc3QgYWRkSXRlbUJ1dHRvbiA9IGdldEFkZEl0ZW1CdXR0b24oYWRkSXRlbU9uQ2xpY2spO1xuXG5cdGluaXRpYWxGaWVsZHNldC5hZGRJdGVtcyhbXG5cdFx0bmV3IE9PLnVpLkZpZWxkTGF5b3V0KHRleHRJbnB1dCwge2xhYmVsOiBnZXRNZXNzYWdlKCdTb3VyY2UnKSwgYWxpZ246ICdpbmxpbmUnfSksXG5cdFx0bmV3IE9PLnVpLkZpZWxkTGF5b3V0KGRyb3BEb3duLCB7bGFiZWw6IGdldE1lc3NhZ2UoJ0xpY2Vuc2UnKSwgYWxpZ246ICdpbmxpbmUnfSksXG5cdFx0bmV3IE9PLnVpLkZpZWxkTGF5b3V0KGFkZEl0ZW1CdXR0b24sIHthbGlnbjogJ2lubGluZSd9KSxcblx0XSk7XG5cblx0cGFyZW50RmllbGRTZXQuYWRkSXRlbXMoW2luaXRpYWxGaWVsZHNldF0pO1xuXG5cdHJldHVybiBwYXJlbnRGaWVsZFNldDtcbn07XG5cbmV4cG9ydCB7Z2VuZXJhdGVUZXh0SW5wdXRXaXRoRHJvcGRvd259O1xuIiwgIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnNhZmUtYXJndW1lbnQsIG1lZGlhd2lraS9jbGFzcy1kb2MgKi9cbmltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnfi9FZGl0Zm9ybV9BdHRyaWJ1dGlvbi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtmb3JtV3JhcH0gZnJvbSAnLi9FZGl0Zm9ybV9BdHRyaWJ1dGlvbi5tb2R1bGUubGVzcyc7XG5pbXBvcnQge2dlbmVyYXRlVGV4dElucHV0V2l0aERyb3Bkb3dufSBmcm9tICcuL2dlbmVyYXRlVGV4dElucHV0V2l0aERyb3Bkb3duJztcblxuaW50ZXJmYWNlIExheW91dFByb3BzIHtcblx0JGJvZHk6IEpRdWVyeTxIVE1MRWxlbWVudD47XG59XG5cbmNvbnN0IGdlbmVyYXRlVmlzdWFsRWRpdG9yTGF5b3V0ID0gKHskYm9keX06IExheW91dFByb3BzKTogSlF1ZXJ5PEhUTUxFbGVtZW50PiA9PiB7XG5cdGNvbnN0IHt0YXJnZXR9ID0gd2luZG93LnZlLmluaXQ7XG5cdGNvbnN0ICR3cFN1bW1hcnkgPSB0YXJnZXQuc2F2ZURpYWxvZy5lZGl0U3VtbWFyeUlucHV0LiRpbnB1dDtcblx0Y29uc3QgdGV4dElucHV0V2l0aERyb3Bkb3duID0gZ2VuZXJhdGVUZXh0SW5wdXRXaXRoRHJvcGRvd24oeyRib2R5LCAkd3BTdW1tYXJ5fSk7XG5cdGNvbnN0ICRsYXlvdXQgPSAkKCc8ZGl2PicpLmF0dHIoJ2lkJywgT1BUSU9OUy5pbnB1dElkKS5hZGRDbGFzcyhmb3JtV3JhcCk7XG5cdCRsYXlvdXQuYXBwZW5kKHRleHRJbnB1dFdpdGhEcm9wZG93bi4kZWxlbWVudCk7XG5cblx0cmV0dXJuICRsYXlvdXQ7XG59O1xuXG5jb25zdCBnZW5lcmF0ZVdpa2lFZGl0b3JMYXlvdXQgPSAoeyRib2R5LCAkZWRpdEZvcm19OiBMYXlvdXRQcm9wcyAmIHskZWRpdEZvcm06IEpRdWVyeX0pOiBKUXVlcnk8SFRNTEVsZW1lbnQ+ID0+IHtcblx0Y29uc3QgJHdwU3VtbWFyeSA9ICRlZGl0Rm9ybS5maW5kKCdpbnB1dFtuYW1lPXdwU3VtbWFyeV0nKTtcblx0Y29uc3QgdGV4dElucHV0V2l0aERyb3Bkb3duID0gZ2VuZXJhdGVUZXh0SW5wdXRXaXRoRHJvcGRvd24oeyRib2R5LCAkd3BTdW1tYXJ5fSk7XG5cdGNvbnN0ICRsYXlvdXQgPSAkKCc8ZGl2PicpLmF0dHIoJ2lkJywgT1BUSU9OUy5pbnB1dElkKS5hZGRDbGFzcyhmb3JtV3JhcCk7XG5cdCRsYXlvdXQuYXBwZW5kKHRleHRJbnB1dFdpdGhEcm9wZG93bi4kZWxlbWVudCk7XG5cblx0cmV0dXJuICRsYXlvdXQ7XG59O1xuXG5leHBvcnQge2dlbmVyYXRlVmlzdWFsRWRpdG9yTGF5b3V0LCBnZW5lcmF0ZVdpa2lFZGl0b3JMYXlvdXR9O1xuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnfi9FZGl0Zm9ybV9BdHRyaWJ1dGlvbi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtnZW5lcmF0ZVZpc3VhbEVkaXRvckxheW91dH0gZnJvbSAnLi91dGlsL2dlbmVyYXRlTGF5b3V0JztcblxuY29uc3QgcHJvY2Vzc1Zpc3VhbEVkaXRvciA9ICh7JGJvZHl9OiB7JGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+fSk6IHZvaWQgPT4ge1xuXHQvLyBHdWFyZCBhZ2FpbnN0IGRvdWJsZSBpbmNsdXNpb25zXG5cdGlmIChtdy5jb25maWcuZ2V0KE9QVElPTlMuY29uZmlnS2V5VmUpKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3Qge3RhcmdldH0gPSB3aW5kb3cudmUuaW5pdDtcblx0Y29uc3Qge3NhdmVEaWFsb2d9ID0gdGFyZ2V0O1xuXHRjb25zdCB7JHNhdmVPcHRpb25zfSA9IHNhdmVEaWFsb2c7XG5cdGlmICghJHNhdmVPcHRpb25zLmxlbmd0aCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdC8vIFNldCBndWFyZFxuXHRtdy5jb25maWcuc2V0KE9QVElPTlMuY29uZmlnS2V5VmUsIHRydWUpO1xuXG5cdGNvbnN0ICRsYXlvdXQgPSBnZW5lcmF0ZVZpc3VhbEVkaXRvckxheW91dCh7JGJvZHl9KTtcblxuXHRpZiAoISRib2R5LmZpbmQoYCMke09QVElPTlMuaW5wdXRJZH1gKS5sZW5ndGgpIHtcblx0XHQkc2F2ZU9wdGlvbnMuYXBwZW5kKCRsYXlvdXQpO1xuXHR9XG5cblx0Ly8gUmVpbml0aWFsaXphdGlvbiBpcyByZXF1aXJlZCBmb3Igc3dpdGNoaW5nIGJldHdlZW4gVmlzdWFsRWRpdG9yIGFuZCBOZXcgV2lraXRleHQgRWRpdG9yICgyMDE3KVxuXHRtdy5ob29rKCd2ZS5hY3RpdmF0aW9uQ29tcGxldGUnKS5hZGQoKCkgPT4ge1xuXHRcdGlmIChtdy5jb25maWcuZ2V0KE9QVElPTlMuY29uZmlnS2V5VmUpKSB7XG5cdFx0XHRtdy5jb25maWcuc2V0KE9QVElPTlMuY29uZmlnS2V5VmUsIGZhbHNlKTtcblx0XHR9XG5cdH0pO1xufTtcblxuZXhwb3J0IHtwcm9jZXNzVmlzdWFsRWRpdG9yfTtcbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJ34vRWRpdGZvcm1fQXR0cmlidXRpb24vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7Z2VuZXJhdGVXaWtpRWRpdG9yTGF5b3V0fSBmcm9tICcuL3V0aWwvZ2VuZXJhdGVMYXlvdXQnO1xuXG5jb25zdCBwcm9jZXNzV2lraUVkaXRvciA9ICh7JGJvZHksICRlZGl0Rm9ybX06IHskYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD47ICRlZGl0Rm9ybTogSlF1ZXJ5fSk6IHZvaWQgPT4ge1xuXHQvLyBHdWFyZCBhZ2FpbnN0IGRvdWJsZSBpbmNsdXNpb25zXG5cdGlmIChtdy5jb25maWcuZ2V0KE9QVElPTlMuY29uZmlnS2V5KSkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0ICR0YXJnZXQ6IEpRdWVyeSA9ICRlZGl0Rm9ybS5maW5kKE9QVElPTlMudGFyZ2V0V2lraUVkaXRvcik7XG5cdGlmICghJHRhcmdldC5sZW5ndGgpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRtdy5jb25maWcuc2V0KE9QVElPTlMuY29uZmlnS2V5LCB0cnVlKTtcblxuXHRjb25zdCAkbGF5b3V0ID0gZ2VuZXJhdGVXaWtpRWRpdG9yTGF5b3V0KHskYm9keSwgJGVkaXRGb3JtfSk7XG5cblx0aWYgKCEkYm9keS5maW5kKGAjJHtPUFRJT05TLmlucHV0SWR9YCkubGVuZ3RoKSB7XG5cdFx0JHRhcmdldC5hZnRlcigkbGF5b3V0KTtcblx0fVxufTtcblxuZXhwb3J0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O0VBQ0Q7QUFFQTZFLEtBQUdDLE9BQU9HLElBQVloSixXQUFXLElBQUk7QUFFckMsUUFBTXFJLFVBQVVJLHlCQUF5QjtJQUFDeEU7SUFBT3lFO0VBQVMsQ0FBQztBQUUzRCxNQUFJLENBQUN6RSxNQUFNVSxLQUFBLElBQUFwRCxPQUFpQnJCLE9BQU8sQ0FBRSxFQUFFNkQsUUFBUTtBQUM5Q3FGLFlBQVFDLE1BQU1oQixPQUFPO0VBQ3RCO0FBQ0Q7O0FYZEEsTUFBQSxHQUFLdkksbUJBQUF3SixTQUFRLEVBQUVDLEtBQUssU0FBU0MsU0FBU3ZGLE9BQXNDO0FBQzNFMkUsS0FBR0ssS0FBSyxtQkFBbUIsRUFBRUMsSUFBS1IsZUFBb0I7QUFDckRTLHNCQUFrQjtNQUNqQmxGO01BQ0F5RTtJQUNELENBQUM7RUFDRixDQUFDO0FBRURFLEtBQUdLLEtBQUssNEJBQTRCLEVBQUVDLElBQUksTUFBWTtBQUNyRFAsd0JBQW9CO01BQUMxRTtJQUFLLENBQUM7RUFDNUIsQ0FBQztBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbImltcG9ydF9leHRfZ2FkZ2V0MiIsICJyZXF1aXJlIiwgImNvbmZpZ0tleSIsICJjb25maWdLZXlWZSIsICJpbnB1dElkIiwgInRhcmdldFdpa2lFZGl0b3IiLCAiZm9ybVdyYXAiLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAiZ2V0STE4bk1lc3NhZ2VzIiwgImxvY2FsaXplIiwgImVuIiwgIlNvdXJjZSIsICJMaWNlbnNlIiwgImkxOG5NZXNzYWdlcyIsICJnZXRNZXNzYWdlIiwgImtleSIsICJMSUNFTlNFUyIsICJsYWJlbCIsICJkYXRhIiwgIlZBTElEX0lOVEVSV0lLSV9QUkVGSVgiLCAiZ2V0TGluayIsICJsaW5rIiwgInRleHQiLCAiVkFMSURfSU5URVJXSUtJX0xJTktfUkVHRVgiLCAiUmVnRXhwIiwgImNvbmNhdCIsICJqb2luIiwgInRlc3QiLCAicmVwbGFjZSIsICJlbmNvZGVVUkkiLCAiZGVjb2RlVVJJIiwgImdldEF0dHJpYnV0aW9uIiwgImZpZWxkU2V0TGF5b3V0IiwgImF0dHJpYnV0aW9ucyIsICJnZXRTZWxlY3RlZEl0ZW0iLCAiZHJvcGRvd24iLCAic2VsZWN0ZWRJdGVtIiwgImdldE1lbnUiLCAiZmluZFNlbGVjdGVkSXRlbSIsICJnZXRTZWxlY3RlZFZhbHVlIiwgImdldERhdGEiLCAiZ2V0U2VsZWN0ZWRMYWJlbCIsICJnZXRMYWJlbCIsICJfaXRlcmF0b3IiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAiZ2V0SXRlbXMiLCAiX3N0ZXAiLCAicyIsICJuIiwgImRvbmUiLCAiYXR0cmlidXRpb25GaWVsZHNldCIsICJ2YWx1ZSIsICJhdHRyaWJ1dGlvbiIsICJfaXRlcmF0b3IyIiwgIl9zdGVwMiIsICJmaWVsZExheW91dCIsICJmaWVsZCIsICJnZXRGaWVsZCIsICJzdXBwb3J0cyIsICJnZXRWYWx1ZSIsICJzb3VyY2UiLCAibGljZW5zZSIsICJlcnIiLCAiZSIsICJmIiwgImxlbmd0aCIsICJ1cGRhdGVXcEF0dHJpYnV0aW9uIiwgIiRib2R5IiwgInBhcmVudEZpZWxkU2V0IiwgIndwQXR0cmlidXRpb24iLCAiJHdwQXR0cmlidXRpb24iLCAiJCIsICJhdHRyIiwgImlkIiwgIm5hbWUiLCAidHlwZSIsICIkb3JpZ2lud3BBdHRyaWJ1dGlvbiIsICJmaW5kIiwgInByZXBlbmQiLCAidmFsIiwgImFwcGVuZFRleHRUb1N1bW1hcnkiLCAiY3VzdG9tU3VtbWFyeSIsICIkd3BTdW1tYXJ5IiwgIl8kd3BTdW1tYXJ5JHZhbCIsICJvcmlnaW5TdW1tYXJ5IiwgInRyaW0iLCAidHJpZ2dlciIsICJnZXRUZXh0SW5wdXQiLCAib25DaGFuZ2VzIiwgInRleHRJbnB1dCIsICJPTyIsICJ1aSIsICJUZXh0SW5wdXRXaWRnZXQiLCAicGxhY2Vob2xkZXIiLCAiX2kiLCAiX29uQ2hhbmdlcyIsICJvbkNoYW5nZSIsICJvbiIsICJnZXREcm9wRG93biIsICJvblNlbGVjdHMiLCAiRHJvcGRvd25XaWRnZXQiLCAibWVudU9wdGlvbnMiLCAiX2kyIiwgIl9MSUNFTlNFUyIsICJNZW51T3B0aW9uV2lkZ2V0IiwgImFkZEl0ZW1zIiwgIl9pMyIsICJfb25TZWxlY3RzIiwgIm9uU2VsZWN0IiwgImdldEFkZEl0ZW1CdXR0b24iLCAib25DbGlja3MiLCAiYWRkSXRlbUJ1dHRvbiIsICJCdXR0b25JbnB1dFdpZGdldCIsICJfaTQiLCAiX29uQ2xpY2tzIiwgIm9uQ2xpY2siLCAiZ2VuZXJhdGVUZXh0SW5wdXRXaXRoRHJvcGRvd24iLCAiaW5pdGlhbEZpZWxkc2V0IiwgIkZpZWxkc2V0TGF5b3V0IiwgImlucHV0T25DaGFuZ2UiLCAiZHJvcERvd24iLCAiYWRkSXRlbU9uQ2xpY2siLCAic2V0VmFsdWUiLCAidW5zZWxlY3RJdGVtIiwgIkZpZWxkTGF5b3V0IiwgImFsaWduIiwgImdlbmVyYXRlVmlzdWFsRWRpdG9yTGF5b3V0IiwgInRhcmdldCIsICJ3aW5kb3ciLCAidmUiLCAiaW5pdCIsICJzYXZlRGlhbG9nIiwgImVkaXRTdW1tYXJ5SW5wdXQiLCAiJGlucHV0IiwgInRleHRJbnB1dFdpdGhEcm9wZG93biIsICIkbGF5b3V0IiwgImFkZENsYXNzIiwgImFwcGVuZCIsICIkZWxlbWVudCIsICJnZW5lcmF0ZVdpa2lFZGl0b3JMYXlvdXQiLCAiJGVkaXRGb3JtIiwgInByb2Nlc3NWaXN1YWxFZGl0b3IiLCAibXciLCAiY29uZmlnIiwgImdldCIsICIkc2F2ZU9wdGlvbnMiLCAic2V0IiwgImhvb2siLCAiYWRkIiwgInByb2Nlc3NXaWtpRWRpdG9yIiwgIiR0YXJnZXQiLCAiYWZ0ZXIiLCAiZ2V0Qm9keSIsICJ0aGVuIiwgImVkaXRGb3JtIl0KfQo=

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
  if (link.startsWith("[[") && link.endsWith("]]")) {
    return link;
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0VkaXRmb3JtX0F0dHJpYnV0aW9uL0VkaXRmb3JtX0F0dHJpYnV0aW9uLnRzIiwgInNyYy9FZGl0Zm9ybV9BdHRyaWJ1dGlvbi9vcHRpb25zLmpzb24iLCAic3JjL0VkaXRmb3JtX0F0dHJpYnV0aW9uL21vZHVsZXMvdXRpbC9FZGl0Zm9ybV9BdHRyaWJ1dGlvbi5tb2R1bGUubGVzcyIsICJzcmMvRWRpdGZvcm1fQXR0cmlidXRpb24vbW9kdWxlcy9pMThuLnRzIiwgInNyYy9FZGl0Zm9ybV9BdHRyaWJ1dGlvbi9tb2R1bGVzL2NvbnN0YW50LnRzIiwgInNyYy9FZGl0Zm9ybV9BdHRyaWJ1dGlvbi9tb2R1bGVzL3V0aWwvZ2V0TGluay50cyIsICJzcmMvRWRpdGZvcm1fQXR0cmlidXRpb24vbW9kdWxlcy91dGlsL2dldEF0dHJpYnV0aW9uLnRzIiwgInNyYy9FZGl0Zm9ybV9BdHRyaWJ1dGlvbi9tb2R1bGVzL3V0aWwvYXBwZW5kVGV4dFRvU3VtbWFyeS50cyIsICJzcmMvRWRpdGZvcm1fQXR0cmlidXRpb24vbW9kdWxlcy91dGlsL2dlbmVyYXRlVGV4dElucHV0V2l0aERyb3Bkb3duLnRzIiwgInNyYy9FZGl0Zm9ybV9BdHRyaWJ1dGlvbi9tb2R1bGVzL3V0aWwvZ2VuZXJhdGVMYXlvdXQudHMiLCAic3JjL0VkaXRmb3JtX0F0dHJpYnV0aW9uL21vZHVsZXMvcHJvY2Vzc1Zpc3VhbEVkaXRvci50cyIsICJzcmMvRWRpdGZvcm1fQXR0cmlidXRpb24vbW9kdWxlcy9wcm9jZXNzV2lraUVkaXRvci50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHtnZXRCb2R5fSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuaW1wb3J0IHtwcm9jZXNzVmlzdWFsRWRpdG9yfSBmcm9tICcuL21vZHVsZXMvcHJvY2Vzc1Zpc3VhbEVkaXRvcic7XG5pbXBvcnQge3Byb2Nlc3NXaWtpRWRpdG9yfSBmcm9tICcuL21vZHVsZXMvcHJvY2Vzc1dpa2lFZGl0b3InO1xuXG4vKipcbiAqIEBkZXNjcmlwdGlvbiDnrKzkuInmlrnmnaXmupDnibnmrorlo7DmmI5cbiAqL1xudm9pZCBnZXRCb2R5KCkudGhlbihmdW5jdGlvbiBlZGl0Rm9ybSgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkIHtcblx0bXcuaG9vaygnd2lraXBhZ2UuZWRpdGZvcm0nKS5hZGQoKCRlZGl0Rm9ybSk6IHZvaWQgPT4ge1xuXHRcdHByb2Nlc3NXaWtpRWRpdG9yKHtcblx0XHRcdCRib2R5LFxuXHRcdFx0JGVkaXRGb3JtLFxuXHRcdH0pO1xuXHR9KTtcblxuXHRtdy5ob29rKCd2ZS5zYXZlRGlhbG9nLnN0YXRlQ2hhbmdlZCcpLmFkZCgoKTogdm9pZCA9PiB7XG5cdFx0cHJvY2Vzc1Zpc3VhbEVkaXRvcih7JGJvZHl9KTtcblx0fSk7XG59KTtcbiIsICJ7XG5cdFwiY29uZmlnS2V5XCI6IFwiZ2FkZ2V0LUVkaXRmb3JtX0F0dHJpYnV0aW9uX19Jbml0aWFsaXplZFwiLFxuXHRcImNvbmZpZ0tleVZlXCI6IFwiZ2FkZ2V0LUVkaXRmb3JtX0F0dHJpYnV0aW9uX19Jbml0aWFsaXplZF9fVkVcIixcblx0XCJpbnB1dElkXCI6IFwiZWRpdGZvcm1fYXR0cmlidXRpb25cIixcblx0XCJ0YXJnZXRXaWtpRWRpdG9yXCI6IFwiLmVkaXRDaGVja2JveGVzIC5vby11aS1ob3Jpem9udGFsTGF5b3V0XCJcbn1cbiIsICJpbXBvcnQgXCJlc2J1aWxkLWNzcy1tb2R1bGVzLXBsdWdpbi1ucy1jc3M6c3JjL0VkaXRmb3JtX0F0dHJpYnV0aW9uL21vZHVsZXMvdXRpbC9FZGl0Zm9ybV9BdHRyaWJ1dGlvbi5tb2R1bGUubGVzc1wiO1xuZXhwb3J0IGNvbnN0IGZvcm1XcmFwID0gXCJFZGl0Zm9ybS1BdHRyaWJ1dGlvbi1tb2R1bGVfX2Zvcm1XcmFwX201ajJVYV9fNDEwMFwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIFwiZm9ybVdyYXBcIjogZm9ybVdyYXBcbn07XG4gICAgICAiLCAiaW1wb3J0IHtsb2NhbGl6ZX0gZnJvbSAnZXh0LmdhZGdldC5pMThuJztcblxuY29uc3QgZ2V0STE4bk1lc3NhZ2VzID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdCdBZGQgdG8gRWRpdCBTdW1tYXJ5JzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdBZGQgdG8gRWRpdCBTdW1tYXJ5Jyxcblx0XHRcdCd6aC1oYW5zJzogJ+a3u+WKoOiHs+e8lui+keaRmOimgScsXG5cdFx0XHQnemgtaGFudCc6ICfmt7vliqDoh7Pnt6jovK/mkZjopoEnLFxuXHRcdH0pLFxuXHRcdFNvdXJjZTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdTb3VyY2UnLFxuXHRcdFx0J3poLWhhbnMnOiAn5YaF5a655p2l5rqQJyxcblx0XHRcdCd6aC1oYW50JzogJ+WFp+WuueS+hua6kCcsXG5cdFx0fSksXG5cdFx0TGljZW5zZTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdMaWNlbnNlJyxcblx0XHRcdCd6aC1oYW5zJzogJ+iuuOWPr+ivgScsXG5cdFx0XHQnemgtaGFudCc6ICfoqLHlj6/orYknLFxuXHRcdH0pLFxuXHRcdCdPdGhlciBMaWNlbnNlJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdPdGhlciBsaWNlbnNlJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WFtuS7luiuuOWPr+ivgScsXG5cdFx0XHQnemgtaGFudCc6ICflhbbku5boqLHlj6/orYknLFxuXHRcdH0pLFxuXHRcdCdQbGVhc2UgQ2xhaW0gU291cmNlcyBhbmQgTGljZW5zZXMnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0lmIGVkaXQgY29udGVudCBhZGRzIGFueSB0aGlyZC1wYXJ0eSBjb250ZW50LCBwbGVhc2UgYWRkIHRoZSBzb3VyY2UgYW5kIGxpY2Vuc2Ugb2YgdGhlIHRoaXJkLXBhcnR5IGNvbnRlbnQgc2VwYXJhdGVseSB0byB0aGUgZWRpdGluZyBzdW1tYXJ5LicsXG5cdFx0XHQnemgtaGFucyc6ICfoi6XmgqjlkJHnvJbovpHlhoXlrrnkuK3mt7vliqDkuobnrKzkuInmlrnmkrDlhpnnmoTlhoXlrrnvvIzor7flsIbnm7jlhbPnrKzkuInmlrnlhoXlrrnnmoTmnaXmupDjgIHorrjlj6/mnaHmrL7lnKjnvJbovpHmkZjopoHkuK3liIbmnaHlo7DmmI4nLFxuXHRcdFx0J3poLWhhbnQnOiAn6Iul5oKo5ZCR57eo6Lyv5YWn5a655Lit5re75Yqg5LqG56ys5LiJ5pa55pKw5YaZ55qE5YWn5a6577yM6KuL5bCH55u45YWz56ys5LiJ5pa55YWn5a6555qE5L6G5rqQ44CB6Kix5Y+v5qKd5qy+5Zyo57eo6Lyv5pGY6KaB5Lit5YiG5qKd6IGy5piOJyxcblx0XHR9KSxcblx0XHQnUmVwbGFjZSBXaXRoIExpY2Vuc2UnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJyAoUmVwbGFjZSB3aXRoIGxpY2Vuc2UgbmFtZSBhbmQgVVJMKScsXG5cdFx0XHQnemgtaGFucyc6ICfvvIjmm7/mjaLkuLrorrjlj6/or4HlkI3np7DlkoznvZHlnYDvvIknLFxuXHRcdFx0J3poLWhhbnQnOiAn77yI5pu/5o+b54iy6Kix5Y+v6K2J5ZCN56ix5ZKM57ay5Z2A77yJJyxcblx0XHR9KSxcblx0fTtcbn07XG5cbmNvbnN0IGkxOG5NZXNzYWdlcyA9IGdldEkxOG5NZXNzYWdlcygpO1xuXG5jb25zdCBnZXRNZXNzYWdlOiBHZXRNZXNzYWdlczx0eXBlb2YgaTE4bk1lc3NhZ2VzPiA9IChrZXkpID0+IHtcblx0cmV0dXJuIGkxOG5NZXNzYWdlc1trZXldIHx8IGtleTtcbn07XG5cbmV4cG9ydCB7Z2V0TWVzc2FnZX07XG4iLCAiaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL2kxOG4nO1xuXG5jb25zdCBMSUNFTlNFUyA9IFtcblx0e1xuXHRcdGxhYmVsOiAnQ0MgQlktU0EgNC4wJyxcblx0XHRkYXRhOiAnY2MtYnktc2E6NC4wJyxcblx0fSxcblx0e1xuXHRcdGxhYmVsOiAnQ0MgQlktU0EgMy4wJyxcblx0XHRkYXRhOiAnY2MtYnktc2E6My4wJyxcblx0fSxcblx0e1xuXHRcdGxhYmVsOiAnQ0MgQlktU0EgMy4wIENOJyxcblx0XHRkYXRhOiAnY2MtYnktc2E6My4wL2NuJyxcblx0fSxcblx0e1xuXHRcdGxhYmVsOiAnQ0MgQlkgNC4wJyxcblx0XHRkYXRhOiAnY2MtYnk6NC4wJyxcblx0fSxcblx0e1xuXHRcdGxhYmVsOiAnQ0MgQlkgMy4wJyxcblx0XHRkYXRhOiAnY2MtYnk6My4wJyxcblx0fSxcblx0e1xuXHRcdGxhYmVsOiAnQ0MgQlkgMy4wIENOJyxcblx0XHRkYXRhOiAnY2MtYnk6My4wL2NuJyxcblx0fSxcblx0e1xuXHRcdGxhYmVsOiAnQ0MwLTEuMCcsXG5cdFx0ZGF0YTogJ2NjLXplcm86MS4wJyxcblx0fSxcblx0e1xuXHRcdGxhYmVsOiAnS09HTCBUeXBlIEk6IEF0dHJpYnV0aW9uJyxcblx0XHRkYXRhOiAnaHR0cHM6Ly93d3cua29nbC5vci5rci9pbmZvL2xpY2Vuc2VUeXBlMS5kbycsXG5cdH0sXG5cdHtcblx0XHRsYWJlbDogZ2V0TWVzc2FnZSgnT3RoZXIgTGljZW5zZScpLFxuXHRcdGRhdGE6IGdldE1lc3NhZ2UoJ1JlcGxhY2UgV2l0aCBMaWNlbnNlJyksXG5cdH0sXG5dO1xuXG5jb25zdCBWQUxJRF9JTlRFUldJS0lfUFJFRklYID0gW1xuXHQnY2MtYnknLFxuXHQnY2MtYnktc2EnLFxuXHQnY2MtemVybycsXG5cdCdjYzAnLFxuXHQnY29tbW9ucycsXG5cdCdlbndpa2knLFxuXHQnaW5jdWJhdG9yJyxcblx0J2luY3ViYXRvci13cC1tbmMnLFxuXHQnaW5jdWJhdG9yLXd0LW1uYycsXG5cdCdpc282MzktMycsXG5cdCdsZXhlbWVzJyxcblx0J2xpY2VuY2UnLFxuXHQnbGljZW5jZXdpa2knLFxuXHQnbGljZW5zZScsXG5cdCdsb2dpbicsXG5cdCdsb2dpbnFpdXdlbmJhaWtlJyxcblx0J2xvZ2lud2lraScsXG5cdCdtZWRpYXdpa2l3aWtpJyxcblx0J21vemlsbGF3aWtpJyxcblx0J213Jyxcblx0J29sZHdpa2lzb3VyY2UnLFxuXHQncG1pZCcsXG5cdCdxaXV3ZW5iYWlrZScsXG5cdCdyZXYnLFxuXHQndGVzdHdpa2lkYXRhJyxcblx0J3YnLFxuXHQndm95Jyxcblx0J3dpa2knLFxuXHQnd2lraWJvb2tzJyxcblx0J3dpa2lkYXRhJyxcblx0J3dpa2lmdW5jdGlvbnMnLFxuXHQnd2lraW5ld3MnLFxuXHQnd2lraXBlZGlhJyxcblx0J3dpa2lxdW90ZScsXG5cdCd3aWtpc291cmNlJyxcblx0J3dpa2l2ZXJzaXR5Jyxcblx0J3dpa2l2b3lhZ2UnLFxuXHQnd2lrdCcsXG5cdCd3aWt0aW9uYXJ5Jyxcblx0J3pocWl1d2VuYmFpa2UnLFxuXHQnemh3aWtpJyxcblx0J3pod2lraXNvdXJjZScsXG5cdCd6aHdpa2l2b3lhZ2UnLFxuXTtcblxuZXhwb3J0IHtMSUNFTlNFUywgVkFMSURfSU5URVJXSUtJX1BSRUZJWH07XG4iLCAiaW1wb3J0IHtWQUxJRF9JTlRFUldJS0lfUFJFRklYfSBmcm9tICcuLi9jb25zdGFudCc7XG5cbmNvbnN0IGdldExpbmsgPSAoe2xpbmssIHRleHR9OiB7bGluazogc3RyaW5nOyB0ZXh0Pzogc3RyaW5nfSk6IHN0cmluZyA9PiB7XG5cdGNvbnN0IFZBTElEX0lOVEVSV0lLSV9MSU5LX1JFR0VYID0gbmV3IFJlZ0V4cChgXjo/KCR7VkFMSURfSU5URVJXSUtJX1BSRUZJWC5qb2luKCd8Jyl9KWAsICdpJyk7XG5cblx0aWYgKFZBTElEX0lOVEVSV0lLSV9MSU5LX1JFR0VYLnRlc3QobGluaykpIHtcblx0XHRsaW5rID0gYDoke2xpbmsucmVwbGFjZSgvXjovLCAnJyl9YDsgLy8g5aaC5p6c6ZO+5o6l5piv5pyJ5pWI55qESW50ZXJ3aWtp6ZO+5o6l77yM5YiZ5Zyo5byA5aS05re75Yqg5YaS5Y+35Lul6Ziy5q2i5a6D6KKr6Kej5p6Q5Li65YaF6YOo6ZO+5o6lXG5cdFx0aWYgKHRleHQpIHtcblx0XHRcdHJldHVybiBgW1ske2xpbmt9fCR7dGV4dH1dXWA7XG5cdFx0fVxuXHRcdHJldHVybiBgW1ske2xpbmt9XV1gO1xuXHR9XG5cblx0Ly8g5b2T6ZO+5o6l5pys6Lqr5bCx5piv5pyJ5pWI55qE5YaF6YOo6ZO+5o6l77yM5L2G5LiN5pivSW50ZXJ3aWtp6ZO+5o6l5pe2XG5cdGlmIChsaW5rLnN0YXJ0c1dpdGgoJ1tbJykgJiYgbGluay5lbmRzV2l0aCgnXV0nKSkge1xuXHRcdHJldHVybiBsaW5rO1xuXHR9XG5cblx0cmV0dXJuIGVuY29kZVVSSShkZWNvZGVVUkkobGluaykpOyAvLyDlvZPpk77mjqXkuI3mmK/mnInmlYjnmoRJbnRlcndpa2npk77mjqXml7bvvIzov5Tlm57nvJbnoIHlkI7nmoTpk77mjqVcbn07XG5cbmV4cG9ydCB7Z2V0TGlua307XG4iLCAiaW1wb3J0IHtnZXRMaW5rfSBmcm9tICcuL2dldExpbmsnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuLi9pMThuJztcblxuY29uc3QgZ2V0QXR0cmlidXRpb24gPSAoZmllbGRTZXRMYXlvdXQ6IE9PLnVpLkZpZWxkc2V0TGF5b3V0KSA9PiB7XG5cdGNvbnN0IGF0dHJpYnV0aW9ucyA9IFtdO1xuXG5cdGNvbnN0IGdldFNlbGVjdGVkSXRlbSA9IChkcm9wZG93bjogT08udWkuRHJvcGRvd25XaWRnZXQpOiBPTy51aS5PcHRpb25XaWRnZXQgfCBudWxsID0+IHtcblx0XHRjb25zdCBzZWxlY3RlZEl0ZW06IE9PLnVpLk9wdGlvbldpZGdldCB8IG51bGwgPSBkcm9wZG93blxuXHRcdFx0LmdldE1lbnUoKVxuXHRcdFx0LmZpbmRTZWxlY3RlZEl0ZW0oKSBhcyBPTy51aS5PcHRpb25XaWRnZXQgfCBudWxsO1xuXHRcdHJldHVybiBzZWxlY3RlZEl0ZW07XG5cdH07XG5cblx0Y29uc3QgZ2V0U2VsZWN0ZWRWYWx1ZSA9IChkcm9wZG93bjogT08udWkuRHJvcGRvd25XaWRnZXQpOiBzdHJpbmcgfCB1bmRlZmluZWQgPT4ge1xuXHRcdGNvbnN0IHNlbGVjdGVkSXRlbSA9IGdldFNlbGVjdGVkSXRlbShkcm9wZG93bik7XG5cdFx0cmV0dXJuIHNlbGVjdGVkSXRlbSA/IChzZWxlY3RlZEl0ZW0uZ2V0RGF0YSgpIGFzIHN0cmluZykgOiB1bmRlZmluZWQ7XG5cdH07XG5cblx0Y29uc3QgZ2V0U2VsZWN0ZWRMYWJlbCA9IChkcm9wZG93bjogT08udWkuRHJvcGRvd25XaWRnZXQpOiBzdHJpbmcgfCB1bmRlZmluZWQgPT4ge1xuXHRcdGNvbnN0IHNlbGVjdGVkSXRlbSA9IGdldFNlbGVjdGVkSXRlbShkcm9wZG93bik7XG5cdFx0cmV0dXJuIHNlbGVjdGVkSXRlbSA/IChzZWxlY3RlZEl0ZW0uZ2V0TGFiZWwoKSBhcyBzdHJpbmcpIDogdW5kZWZpbmVkO1xuXHR9O1xuXG5cdGZvciAoY29uc3QgYXR0cmlidXRpb25GaWVsZHNldCBvZiBmaWVsZFNldExheW91dC5nZXRJdGVtcygpIGFzIE9PLnVpLkZpZWxkc2V0TGF5b3V0W10pIHtcblx0XHRjb25zdCBhdHRyaWJ1dGlvbjoge3NvdXJjZT86IHN0cmluZzsgbGljZW5zZT86IHN0cmluZ30gPSB7fTtcblxuXHRcdGZvciAoY29uc3QgZmllbGRMYXlvdXQgb2YgYXR0cmlidXRpb25GaWVsZHNldC5nZXRJdGVtcygpIGFzIE9PLnVpLkZpZWxkTGF5b3V0W10pIHtcblx0XHRcdGNvbnN0IGZpZWxkID0gZmllbGRMYXlvdXQuZ2V0RmllbGQoKTtcblxuXHRcdFx0aWYgKGZpZWxkLnN1cHBvcnRzKCdnZXRWYWx1ZScpKSB7XG5cdFx0XHRcdGNvbnN0IGxpbmsgPSAoZmllbGQgYXMgT08udWkuVGV4dElucHV0V2lkZ2V0KS5nZXRWYWx1ZSgpO1xuXHRcdFx0XHRpZiAobGluaykge1xuXHRcdFx0XHRcdGF0dHJpYnV0aW9uLnNvdXJjZSA9IGdldExpbmsoe2xpbmt9KTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIGlmIChmaWVsZC5zdXBwb3J0cygnZ2V0TWVudScpKSB7XG5cdFx0XHRcdGNvbnN0IGxpbmsgPSBnZXRTZWxlY3RlZFZhbHVlKGZpZWxkIGFzIE9PLnVpLkRyb3Bkb3duV2lkZ2V0KTtcblxuXHRcdFx0XHRpZiAobGluaykge1xuXHRcdFx0XHRcdGNvbnN0IHRleHQgPSBnZXRTZWxlY3RlZExhYmVsKGZpZWxkIGFzIE9PLnVpLkRyb3Bkb3duV2lkZ2V0KTtcblxuXHRcdFx0XHRcdGlmICh0ZXh0KSB7XG5cdFx0XHRcdFx0XHRhdHRyaWJ1dGlvbi5saWNlbnNlID0gZ2V0TGluayh7bGluaywgdGV4dH0pO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRhdHRyaWJ1dGlvbi5saWNlbnNlID0gZ2V0TGluayh7bGlua30pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChhdHRyaWJ1dGlvbi5zb3VyY2UgJiYgYXR0cmlidXRpb24ubGljZW5zZSkge1xuXHRcdFx0YXR0cmlidXRpb25zW2F0dHJpYnV0aW9ucy5sZW5ndGhdID1cblx0XHRcdFx0YCR7Z2V0TWVzc2FnZSgnU291cmNlJyl9OiAke2F0dHJpYnV0aW9uLnNvdXJjZX0gKCR7Z2V0TWVzc2FnZSgnTGljZW5zZScpfTogJHthdHRyaWJ1dGlvbi5saWNlbnNlfSkgYDtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gYXR0cmlidXRpb25zLmpvaW4oJyAnKTtcbn07XG5cbmNvbnN0IHVwZGF0ZVdwQXR0cmlidXRpb24gPSAoe1xuXHQkYm9keSxcblx0cGFyZW50RmllbGRTZXQsXG59OiB7XG5cdCRib2R5OiBKUXVlcnk8SFRNTEVsZW1lbnQ+O1xuXHRwYXJlbnRGaWVsZFNldDogT08udWkuRmllbGRzZXRMYXlvdXQ7XG59KSA9PiB7XG5cdGxldCB3cEF0dHJpYnV0aW9uOiBzdHJpbmcgPSAnJztcblxuXHRjb25zdCAkd3BBdHRyaWJ1dGlvbjogSlF1ZXJ5ID0gJCgnPGlucHV0PicpLmF0dHIoe1xuXHRcdGlkOiAnd3BBdHRyaWJ1dGlvbicsXG5cdFx0bmFtZTogJ3dwQXR0cmlidXRpb24nLFxuXHRcdHR5cGU6ICdoaWRkZW4nLFxuXHRcdHZhbHVlOiAnJyxcblx0fSk7XG5cdGNvbnN0ICRvcmlnaW53cEF0dHJpYnV0aW9uOiBKUXVlcnkgPSAkYm9keS5maW5kKCdpbnB1dFtuYW1lPXdwQXR0cmlidXRpb25dJyk7XG5cdGlmICghJG9yaWdpbndwQXR0cmlidXRpb24ubGVuZ3RoKSB7XG5cdFx0JGJvZHkucHJlcGVuZCgkd3BBdHRyaWJ1dGlvbik7XG5cdH1cblxuXHR3cEF0dHJpYnV0aW9uID0gZ2V0QXR0cmlidXRpb24ocGFyZW50RmllbGRTZXQpO1xuXHQkb3JpZ2lud3BBdHRyaWJ1dGlvbi52YWwod3BBdHRyaWJ1dGlvbik7XG59O1xuXG5leHBvcnQge2dldEF0dHJpYnV0aW9uLCB1cGRhdGVXcEF0dHJpYnV0aW9ufTtcbiIsICJjb25zdCBhcHBlbmRUZXh0VG9TdW1tYXJ5ID0gKHtjdXN0b21TdW1tYXJ5LCAkd3BTdW1tYXJ5fToge2N1c3RvbVN1bW1hcnk6IHN0cmluZzsgJHdwU3VtbWFyeTogSlF1ZXJ5fSk6IHZvaWQgPT4ge1xuXHRjb25zdCBvcmlnaW5TdW1tYXJ5OiBzdHJpbmcgPSAoJHdwU3VtbWFyeS52YWwoKSBhcyBzdHJpbmcgfCB1bmRlZmluZWQpID8/ICcnO1xuXG5cdCR3cFN1bW1hcnkudmFsKG9yaWdpblN1bW1hcnkudHJpbSgpID8gYCR7b3JpZ2luU3VtbWFyeX0gJHtjdXN0b21TdW1tYXJ5fWAgOiBjdXN0b21TdW1tYXJ5KS50cmlnZ2VyKCdjaGFuZ2UnKTtcbn07XG5cbmV4cG9ydCB7YXBwZW5kVGV4dFRvU3VtbWFyeX07XG4iLCAiaW1wb3J0IHtnZXRBdHRyaWJ1dGlvbiwgdXBkYXRlV3BBdHRyaWJ1dGlvbn0gZnJvbSAnLi9nZXRBdHRyaWJ1dGlvbic7XG5pbXBvcnQge0xJQ0VOU0VTfSBmcm9tICcuLi9jb25zdGFudCc7XG5pbXBvcnQge2FwcGVuZFRleHRUb1N1bW1hcnl9IGZyb20gJy4vYXBwZW5kVGV4dFRvU3VtbWFyeSc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4uL2kxOG4nO1xuXG5jb25zdCBnZXRUZXh0SW5wdXQgPSAoLi4ub25DaGFuZ2VzOiAoKCkgPT4gdm9pZClbXSkgPT4ge1xuXHRjb25zdCB0ZXh0SW5wdXQgPSBuZXcgT08udWkuVGV4dElucHV0V2lkZ2V0KHtcblx0XHRwbGFjZWhvbGRlcjogZ2V0TWVzc2FnZSgnU291cmNlJyksXG5cdH0pO1xuXG5cdGZvciAoY29uc3Qgb25DaGFuZ2Ugb2Ygb25DaGFuZ2VzKSB7XG5cdFx0dGV4dElucHV0Lm9uKCdjaGFuZ2UnLCBvbkNoYW5nZSk7XG5cdH1cblxuXHRyZXR1cm4gdGV4dElucHV0O1xufTtcblxuY29uc3QgZ2V0RHJvcERvd24gPSAoLi4ub25TZWxlY3RzOiAoKCkgPT4gdm9pZClbXSkgPT4ge1xuXHRjb25zdCBkcm9wZG93bjogT08udWkuRHJvcGRvd25XaWRnZXQgPSBuZXcgT08udWkuRHJvcGRvd25XaWRnZXQoe1xuXHRcdGxhYmVsOiBnZXRNZXNzYWdlKCdMaWNlbnNlJyksXG5cdH0pO1xuXG5cdGNvbnN0IG1lbnVPcHRpb25zOiBPTy51aS5NZW51T3B0aW9uV2lkZ2V0W10gPSBbXTtcblxuXHRmb3IgKGNvbnN0IHtkYXRhLCBsYWJlbH0gb2YgTElDRU5TRVMpIHtcblx0XHRtZW51T3B0aW9uc1ttZW51T3B0aW9ucy5sZW5ndGhdID0gbmV3IE9PLnVpLk1lbnVPcHRpb25XaWRnZXQoe1xuXHRcdFx0ZGF0YSxcblx0XHRcdGxhYmVsLFxuXHRcdH0pO1xuXHR9XG5cblx0ZHJvcGRvd24uZ2V0TWVudSgpLmFkZEl0ZW1zKG1lbnVPcHRpb25zKTtcblxuXHRmb3IgKGNvbnN0IG9uU2VsZWN0IG9mIG9uU2VsZWN0cykge1xuXHRcdGRyb3Bkb3duLmdldE1lbnUoKS5vbignc2VsZWN0Jywgb25TZWxlY3QpO1xuXHR9XG5cblx0cmV0dXJuIGRyb3Bkb3duO1xufTtcblxuY29uc3QgZ2V0QWRkSXRlbUJ1dHRvbiA9ICguLi5vbkNsaWNrczogKCgpID0+IHZvaWQpW10pOiBPTy51aS5CdXR0b25JbnB1dFdpZGdldCA9PiB7XG5cdGNvbnN0IGFkZEl0ZW1CdXR0b24gPSBuZXcgT08udWkuQnV0dG9uSW5wdXRXaWRnZXQoe1xuXHRcdGxhYmVsOiBnZXRNZXNzYWdlKCdBZGQgdG8gRWRpdCBTdW1tYXJ5JyksXG5cdH0pO1xuXG5cdGZvciAoY29uc3Qgb25DbGljayBvZiBvbkNsaWNrcykge1xuXHRcdGFkZEl0ZW1CdXR0b24ub24oJ2NsaWNrJywgb25DbGljayk7XG5cdH1cblxuXHRyZXR1cm4gYWRkSXRlbUJ1dHRvbjtcbn07XG5cbmNvbnN0IGdlbmVyYXRlVGV4dElucHV0V2l0aERyb3Bkb3duID0gKHskYm9keSwgJHdwU3VtbWFyeX06IHskYm9keTogSlF1ZXJ5PEhUTUxFbGVtZW50PjsgJHdwU3VtbWFyeTogSlF1ZXJ5fSkgPT4ge1xuXHRjb25zdCBpbml0aWFsRmllbGRzZXQgPSBuZXcgT08udWkuRmllbGRzZXRMYXlvdXQoKTtcblx0Y29uc3QgcGFyZW50RmllbGRTZXQgPSBuZXcgT08udWkuRmllbGRzZXRMYXlvdXQoe1xuXHRcdGxhYmVsOiBnZXRNZXNzYWdlKCdQbGVhc2UgQ2xhaW0gU291cmNlcyBhbmQgTGljZW5zZXMnKSxcblx0fSk7XG5cblx0Y29uc3QgaW5wdXRPbkNoYW5nZSA9ICgpID0+IHtcblx0XHR1cGRhdGVXcEF0dHJpYnV0aW9uKHskYm9keSwgcGFyZW50RmllbGRTZXR9KTtcblx0fTtcblxuXHRjb25zdCB0ZXh0SW5wdXQgPSBnZXRUZXh0SW5wdXQoaW5wdXRPbkNoYW5nZSk7XG5cdGNvbnN0IGRyb3BEb3duID0gZ2V0RHJvcERvd24oaW5wdXRPbkNoYW5nZSk7XG5cblx0Y29uc3QgYWRkSXRlbU9uQ2xpY2sgPSAoKSA9PiB7XG5cdFx0bGV0IHdwQXR0cmlidXRpb246IHN0cmluZyA9ICcnO1xuXG5cdFx0Y29uc3QgJHdwQXR0cmlidXRpb246IEpRdWVyeSA9ICQoJzxpbnB1dD4nKS5hdHRyKHtcblx0XHRcdGlkOiAnd3BBdHRyaWJ1dGlvbicsXG5cdFx0XHRuYW1lOiAnd3BBdHRyaWJ1dGlvbicsXG5cdFx0XHR0eXBlOiAnaGlkZGVuJyxcblx0XHRcdHZhbHVlOiAnJyxcblx0XHR9KTtcblxuXHRcdGNvbnN0ICRvcmlnaW53cEF0dHJpYnV0aW9uOiBKUXVlcnk8SFRNTElucHV0RWxlbWVudD4gPVxuXHRcdFx0JGJvZHkuZmluZDxIVE1MSW5wdXRFbGVtZW50PignaW5wdXRbbmFtZT13cEF0dHJpYnV0aW9uXScpO1xuXHRcdGlmICghJG9yaWdpbndwQXR0cmlidXRpb24ubGVuZ3RoKSB7XG5cdFx0XHQkYm9keS5wcmVwZW5kKCR3cEF0dHJpYnV0aW9uKTtcblx0XHR9XG5cblx0XHR3cEF0dHJpYnV0aW9uID0gZ2V0QXR0cmlidXRpb24ocGFyZW50RmllbGRTZXQpO1xuXHRcdCRvcmlnaW53cEF0dHJpYnV0aW9uLnZhbCh3cEF0dHJpYnV0aW9uKTtcblxuXHRcdGFwcGVuZFRleHRUb1N1bW1hcnkoe1xuXHRcdFx0Y3VzdG9tU3VtbWFyeTogJG9yaWdpbndwQXR0cmlidXRpb24udmFsKCkgPyBgWyR7JG9yaWdpbndwQXR0cmlidXRpb24udmFsKCl9XWAgOiAnJyxcblx0XHRcdCR3cFN1bW1hcnksXG5cdFx0fSk7XG5cblx0XHR0ZXh0SW5wdXQuc2V0VmFsdWUoJycpO1xuXHRcdGRyb3BEb3duLmdldE1lbnUoKS51bnNlbGVjdEl0ZW0oKTtcblx0fTtcblxuXHRjb25zdCBhZGRJdGVtQnV0dG9uID0gZ2V0QWRkSXRlbUJ1dHRvbihhZGRJdGVtT25DbGljayk7XG5cblx0aW5pdGlhbEZpZWxkc2V0LmFkZEl0ZW1zKFtcblx0XHRuZXcgT08udWkuRmllbGRMYXlvdXQodGV4dElucHV0LCB7bGFiZWw6IGdldE1lc3NhZ2UoJ1NvdXJjZScpLCBhbGlnbjogJ2lubGluZSd9KSxcblx0XHRuZXcgT08udWkuRmllbGRMYXlvdXQoZHJvcERvd24sIHtsYWJlbDogZ2V0TWVzc2FnZSgnTGljZW5zZScpLCBhbGlnbjogJ2lubGluZSd9KSxcblx0XHRuZXcgT08udWkuRmllbGRMYXlvdXQoYWRkSXRlbUJ1dHRvbiwge2FsaWduOiAnaW5saW5lJ30pLFxuXHRdKTtcblxuXHRwYXJlbnRGaWVsZFNldC5hZGRJdGVtcyhbaW5pdGlhbEZpZWxkc2V0XSk7XG5cblx0cmV0dXJuIHBhcmVudEZpZWxkU2V0O1xufTtcblxuZXhwb3J0IHtnZW5lcmF0ZVRleHRJbnB1dFdpdGhEcm9wZG93bn07XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICd+L0VkaXRmb3JtX0F0dHJpYnV0aW9uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge2Zvcm1XcmFwfSBmcm9tICcuL0VkaXRmb3JtX0F0dHJpYnV0aW9uLm1vZHVsZS5sZXNzJztcbmltcG9ydCB7Z2VuZXJhdGVUZXh0SW5wdXRXaXRoRHJvcGRvd259IGZyb20gJy4vZ2VuZXJhdGVUZXh0SW5wdXRXaXRoRHJvcGRvd24nO1xuXG5pbnRlcmZhY2UgTGF5b3V0UHJvcHMge1xuXHQkYm9keTogSlF1ZXJ5PEhUTUxFbGVtZW50Pjtcbn1cblxuY29uc3QgZ2VuZXJhdGVWaXN1YWxFZGl0b3JMYXlvdXQgPSAoeyRib2R5fTogTGF5b3V0UHJvcHMpOiBKUXVlcnk8SFRNTEVsZW1lbnQ+ID0+IHtcblx0Y29uc3Qge3RhcmdldH0gPSB3aW5kb3cudmUuaW5pdDtcblx0Y29uc3QgJHdwU3VtbWFyeSA9IHRhcmdldC5zYXZlRGlhbG9nLmVkaXRTdW1tYXJ5SW5wdXQuJGlucHV0O1xuXHRjb25zdCB0ZXh0SW5wdXRXaXRoRHJvcGRvd24gPSBnZW5lcmF0ZVRleHRJbnB1dFdpdGhEcm9wZG93bih7JGJvZHksICR3cFN1bW1hcnl9KTtcblx0Ly8gTWVzc2FnZXMgdGhhdCBjYW4gYmUgdXNlZCBoZXJlOlxuXHQvLyAqIHNlZSBhYm92ZSBpbXBvcnRlZCBvcHRpb25zLmpzb25cblx0Ly8gKiBmb3IgbW9yZSBpbmZvcm1hdGlvblxuXHRjb25zdCAkbGF5b3V0ID0gJCgnPGRpdj4nKS5hdHRyKCdpZCcsIE9QVElPTlMuaW5wdXRJZCkuYWRkQ2xhc3MoZm9ybVdyYXApO1xuXHQkbGF5b3V0LmFwcGVuZCh0ZXh0SW5wdXRXaXRoRHJvcGRvd24uJGVsZW1lbnQpO1xuXG5cdHJldHVybiAkbGF5b3V0O1xufTtcblxuY29uc3QgZ2VuZXJhdGVXaWtpRWRpdG9yTGF5b3V0ID0gKHskYm9keSwgJGVkaXRGb3JtfTogTGF5b3V0UHJvcHMgJiB7JGVkaXRGb3JtOiBKUXVlcnl9KTogSlF1ZXJ5PEhUTUxFbGVtZW50PiA9PiB7XG5cdGNvbnN0ICR3cFN1bW1hcnkgPSAkZWRpdEZvcm0uZmluZCgnaW5wdXRbbmFtZT13cFN1bW1hcnldJyk7XG5cdGNvbnN0IHRleHRJbnB1dFdpdGhEcm9wZG93biA9IGdlbmVyYXRlVGV4dElucHV0V2l0aERyb3Bkb3duKHskYm9keSwgJHdwU3VtbWFyeX0pO1xuXHRjb25zdCAkbGF5b3V0ID0gJCgnPGRpdj4nKS5hdHRyKCdpZCcsIE9QVElPTlMuaW5wdXRJZCkuYWRkQ2xhc3MoZm9ybVdyYXApO1xuXHQkbGF5b3V0LmFwcGVuZCh0ZXh0SW5wdXRXaXRoRHJvcGRvd24uJGVsZW1lbnQpO1xuXG5cdHJldHVybiAkbGF5b3V0O1xufTtcblxuZXhwb3J0IHtnZW5lcmF0ZVZpc3VhbEVkaXRvckxheW91dCwgZ2VuZXJhdGVXaWtpRWRpdG9yTGF5b3V0fTtcbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJ34vRWRpdGZvcm1fQXR0cmlidXRpb24vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7Z2VuZXJhdGVWaXN1YWxFZGl0b3JMYXlvdXR9IGZyb20gJy4vdXRpbC9nZW5lcmF0ZUxheW91dCc7XG5cbmNvbnN0IHByb2Nlc3NWaXN1YWxFZGl0b3IgPSAoeyRib2R5fTogeyRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pn0pOiB2b2lkID0+IHtcblx0Ly8gR3VhcmQgYWdhaW5zdCBkb3VibGUgaW5jbHVzaW9uc1xuXHRpZiAobXcuY29uZmlnLmdldChPUFRJT05TLmNvbmZpZ0tleVZlKSkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IHt0YXJnZXR9ID0gd2luZG93LnZlLmluaXQ7XG5cdGNvbnN0IHtzYXZlRGlhbG9nfSA9IHRhcmdldDtcblx0Y29uc3QgeyRzYXZlT3B0aW9uc30gPSBzYXZlRGlhbG9nO1xuXHRpZiAoISRzYXZlT3B0aW9ucy5sZW5ndGgpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHQvLyBTZXQgZ3VhcmRcblx0bXcuY29uZmlnLnNldChPUFRJT05TLmNvbmZpZ0tleVZlLCB0cnVlKTtcblxuXHRjb25zdCAkbGF5b3V0ID0gZ2VuZXJhdGVWaXN1YWxFZGl0b3JMYXlvdXQoeyRib2R5fSk7XG5cblx0aWYgKCEkYm9keS5maW5kKGAjJHtPUFRJT05TLmlucHV0SWR9YCkubGVuZ3RoKSB7XG5cdFx0JHNhdmVPcHRpb25zLmFwcGVuZCgkbGF5b3V0KTtcblx0fVxuXG5cdC8vIFJlaW5pdGlhbGl6YXRpb24gaXMgcmVxdWlyZWQgZm9yIHN3aXRjaGluZyBiZXR3ZWVuIFZpc3VhbEVkaXRvciBhbmQgTmV3IFdpa2l0ZXh0IEVkaXRvciAoMjAxNylcblx0bXcuaG9vaygndmUuYWN0aXZhdGlvbkNvbXBsZXRlJykuYWRkKCgpID0+IHtcblx0XHRpZiAobXcuY29uZmlnLmdldChPUFRJT05TLmNvbmZpZ0tleVZlKSkge1xuXHRcdFx0bXcuY29uZmlnLnNldChPUFRJT05TLmNvbmZpZ0tleVZlLCBmYWxzZSk7XG5cdFx0fVxuXHR9KTtcbn07XG5cbmV4cG9ydCB7cHJvY2Vzc1Zpc3VhbEVkaXRvcn07XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICd+L0VkaXRmb3JtX0F0dHJpYnV0aW9uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge2dlbmVyYXRlV2lraUVkaXRvckxheW91dH0gZnJvbSAnLi91dGlsL2dlbmVyYXRlTGF5b3V0JztcblxuY29uc3QgcHJvY2Vzc1dpa2lFZGl0b3IgPSAoeyRib2R5LCAkZWRpdEZvcm19OiB7JGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+OyAkZWRpdEZvcm06IEpRdWVyeX0pOiB2b2lkID0+IHtcblx0Ly8gR3VhcmQgYWdhaW5zdCBkb3VibGUgaW5jbHVzaW9uc1xuXHRpZiAobXcuY29uZmlnLmdldChPUFRJT05TLmNvbmZpZ0tleSkpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCAkdGFyZ2V0OiBKUXVlcnkgPSAkZWRpdEZvcm0uZmluZChPUFRJT05TLnRhcmdldFdpa2lFZGl0b3IpO1xuXHRpZiAoISR0YXJnZXQubGVuZ3RoKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0bXcuY29uZmlnLnNldChPUFRJT05TLmNvbmZpZ0tleSwgdHJ1ZSk7XG5cblx0Y29uc3QgJGxheW91dCA9IGdlbmVyYXRlV2lraUVkaXRvckxheW91dCh7JGJvZHksICRlZGl0Rm9ybX0pO1xuXG5cdGlmICghJGJvZHkuZmluZChgIyR7T1BUSU9OUy5pbnB1dElkfWApLmxlbmd0aCkge1xuXHRcdCR0YXJnZXQuYWZ0ZXIoJGxheW91dCk7XG5cdH1cbn07XG5cbmV4cG9ydCB7cHJvY2Vzc1dpa2lFZGl0b3J9O1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEscUJBQXNCQyxRQUFBLGlCQUFBOztBQ0NyQixJQUFBQyxZQUFhO0FBQ2IsSUFBQUMsY0FBZTtBQUNmLElBQUFDLFVBQVc7QUFDWCxJQUFBQyxtQkFBb0I7O0FDSGQsSUFBTUMsV0FBVzs7QUNEeEIsSUFBQUMsb0JBQXVCTixRQUFBLGlCQUFBO0FBRXZCLElBQU1PLGtCQUFrQkEsTUFBTTtBQUM3QixTQUFPO0lBQ04sd0JBQUEsR0FBdUJELGtCQUFBRSxVQUFTO01BQy9CQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0RDLFNBQUEsR0FBUUosa0JBQUFFLFVBQVM7TUFDaEJDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDREUsVUFBQSxHQUFTTCxrQkFBQUUsVUFBUztNQUNqQkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNELGtCQUFBLEdBQWlCSCxrQkFBQUUs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ZXh0X2dhZGdldDIiLCAicmVxdWlyZSIsICJjb25maWdLZXkiLCAiY29uZmlnS2V5VmUiLCAiaW5wdXRJZCIsICJ0YXJnZXRXaWtpRWRpdG9yIiwgImZvcm1XcmFwIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgImdldEkxOG5NZXNzYWdlcyIsICJsb2NhbGl6ZSIsICJlbiIsICJTb3VyY2UiLCAiTGljZW5zZSIsICJpMThuTWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAiTElDRU5TRVMiLCAibGFiZWwiLCAiZGF0YSIsICJWQUxJRF9JTlRFUldJS0lfUFJFRklYIiwgImdldExpbmsiLCAibGluayIsICJ0ZXh0IiwgIlZBTElEX0lOVEVSV0lLSV9MSU5LX1JFR0VYIiwgIlJlZ0V4cCIsICJjb25jYXQiLCAiam9pbiIsICJ0ZXN0IiwgInJlcGxhY2UiLCAic3RhcnRzV2l0aCIsICJlbmRzV2l0aCIsICJlbmNvZGVVUkkiLCAiZGVjb2RlVVJJIiwgImdldEF0dHJpYnV0aW9uIiwgImZpZWxkU2V0TGF5b3V0IiwgImF0dHJpYnV0aW9ucyIsICJnZXRTZWxlY3RlZEl0ZW0iLCAiZHJvcGRvd24iLCAic2VsZWN0ZWRJdGVtIiwgImdldE1lbnUiLCAiZmluZFNlbGVjdGVkSXRlbSIsICJnZXRTZWxlY3RlZFZhbHVlIiwgImdldERhdGEiLCAiZ2V0U2VsZWN0ZWRMYWJlbCIsICJnZXRMYWJlbCIsICJfaXRlcmF0b3IiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAiZ2V0SXRlbXMiLCAiX3N0ZXAiLCAicyIsICJuIiwgImRvbmUiLCAiYXR0cmlidXRpb25GaWVsZHNldCIsICJ2YWx1ZSIsICJhdHRyaWJ1dGlvbiIsICJfaXRlcmF0b3IyIiwgIl9zdGVwMiIsICJmaWVsZExheW91dCIsICJmaWVsZCIsICJnZXRGaWVsZCIsICJzdXBwb3J0cyIsICJnZXRWYWx1ZSIsICJzb3VyY2UiLCAibGljZW5zZSIsICJlcnIiLCAiZSIsICJmIiwgImxlbmd0aCIsICJ1cGRhdGVXcEF0dHJpYnV0aW9uIiwgIiRib2R5IiwgInBhcmVudEZpZWxkU2V0IiwgIndwQXR0cmlidXRpb24iLCAiJHdwQXR0cmlidXRpb24iLCAiJCIsICJhdHRyIiwgImlkIiwgIm5hbWUiLCAidHlwZSIsICIkb3JpZ2lud3BBdHRyaWJ1dGlvbiIsICJmaW5kIiwgInByZXBlbmQiLCAidmFsIiwgImFwcGVuZFRleHRUb1N1bW1hcnkiLCAiY3VzdG9tU3VtbWFyeSIsICIkd3BTdW1tYXJ5IiwgIl8kd3BTdW1tYXJ5JHZhbCIsICJvcmlnaW5TdW1tYXJ5IiwgInRyaW0iLCAidHJpZ2dlciIsICJnZXRUZXh0SW5wdXQiLCAib25DaGFuZ2VzIiwgInRleHRJbnB1dCIsICJPTyIsICJ1aSIsICJUZXh0SW5wdXRXaWRnZXQiLCAicGxhY2Vob2xkZXIiLCAiX2kiLCAiX29uQ2hhbmdlcyIsICJvbkNoYW5nZSIsICJvbiIsICJnZXREcm9wRG93biIsICJvblNlbGVjdHMiLCAiRHJvcGRvd25XaWRnZXQiLCAibWVudU9wdGlvbnMiLCAiX2kyIiwgIl9MSUNFTlNFUyIsICJNZW51T3B0aW9uV2lkZ2V0IiwgImFkZEl0ZW1zIiwgIl9pMyIsICJfb25TZWxlY3RzIiwgIm9uU2VsZWN0IiwgImdldEFkZEl0ZW1CdXR0b24iLCAib25DbGlja3MiLCAiYWRkSXRlbUJ1dHRvbiIsICJCdXR0b25JbnB1dFdpZGdldCIsICJfaTQiLCAiX29uQ2xpY2tzIiwgIm9uQ2xpY2siLCAiZ2VuZXJhdGVUZXh0SW5wdXRXaXRoRHJvcGRvd24iLCAiaW5pdGlhbEZpZWxkc2V0IiwgIkZpZWxkc2V0TGF5b3V0IiwgImlucHV0T25DaGFuZ2UiLCAiZHJvcERvd24iLCAiYWRkSXRlbU9uQ2xpY2siLCAic2V0VmFsdWUiLCAidW5zZWxlY3RJdGVtIiwgIkZpZWxkTGF5b3V0IiwgImFsaWduIiwgImdlbmVyYXRlVmlzdWFsRWRpdG9yTGF5b3V0IiwgInRhcmdldCIsICJ3aW5kb3ciLCAidmUiLCAiaW5pdCIsICJzYXZlRGlhbG9nIiwgImVkaXRTdW1tYXJ5SW5wdXQiLCAiJGlucHV0IiwgInRleHRJbnB1dFdpdGhEcm9wZG93biIsICIkbGF5b3V0IiwgImFkZENsYXNzIiwgImFwcGVuZCIsICIkZWxlbWVudCIsICJnZW5lcmF0ZVdpa2lFZGl0b3JMYXlvdXQiLCAiJGVkaXRGb3JtIiwgInByb2Nlc3NWaXN1YWxFZGl0b3IiLCAibXciLCAiY29uZmlnIiwgImdldCIsICIkc2F2ZU9wdGlvbnMiLCAic2V0IiwgImhvb2siLCAiYWRkIiwgInByb2Nlc3NXaWtpRWRpdG9yIiwgIiR0YXJnZXQiLCAiYWZ0ZXIiLCAiZ2V0Qm9keSIsICJ0aGVuIiwgImVkaXRGb3JtIl0KfQo=

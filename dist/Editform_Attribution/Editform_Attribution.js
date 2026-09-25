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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0VkaXRmb3JtX0F0dHJpYnV0aW9uL0VkaXRmb3JtX0F0dHJpYnV0aW9uLnRzIiwgInNyYy9FZGl0Zm9ybV9BdHRyaWJ1dGlvbi9vcHRpb25zLmpzb24iLCAic3JjL0VkaXRmb3JtX0F0dHJpYnV0aW9uL21vZHVsZXMvdXRpbC9FZGl0Zm9ybV9BdHRyaWJ1dGlvbi5tb2R1bGUubGVzcyIsICJzcmMvRWRpdGZvcm1fQXR0cmlidXRpb24vbW9kdWxlcy9pMThuLnRzIiwgInNyYy9FZGl0Zm9ybV9BdHRyaWJ1dGlvbi9tb2R1bGVzL2NvbnN0YW50LnRzIiwgInNyYy9FZGl0Zm9ybV9BdHRyaWJ1dGlvbi9tb2R1bGVzL3V0aWwvZ2V0TGluay50cyIsICJzcmMvRWRpdGZvcm1fQXR0cmlidXRpb24vbW9kdWxlcy91dGlsL2dldEF0dHJpYnV0aW9uLnRzIiwgInNyYy9FZGl0Zm9ybV9BdHRyaWJ1dGlvbi9tb2R1bGVzL3V0aWwvYXBwZW5kVGV4dFRvU3VtbWFyeS50cyIsICJzcmMvRWRpdGZvcm1fQXR0cmlidXRpb24vbW9kdWxlcy91dGlsL2dlbmVyYXRlVGV4dElucHV0V2l0aERyb3Bkb3duLnRzIiwgInNyYy9FZGl0Zm9ybV9BdHRyaWJ1dGlvbi9tb2R1bGVzL3V0aWwvZ2VuZXJhdGVMYXlvdXQudHMiLCAic3JjL0VkaXRmb3JtX0F0dHJpYnV0aW9uL21vZHVsZXMvcHJvY2Vzc1Zpc3VhbEVkaXRvci50cyIsICJzcmMvRWRpdGZvcm1fQXR0cmlidXRpb24vbW9kdWxlcy9wcm9jZXNzV2lraUVkaXRvci50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHtnZXRCb2R5fSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuaW1wb3J0IHtwcm9jZXNzVmlzdWFsRWRpdG9yfSBmcm9tICcuL21vZHVsZXMvcHJvY2Vzc1Zpc3VhbEVkaXRvcic7XG5pbXBvcnQge3Byb2Nlc3NXaWtpRWRpdG9yfSBmcm9tICcuL21vZHVsZXMvcHJvY2Vzc1dpa2lFZGl0b3InO1xuXG4vKipcbiAqIEBkZXNjcmlwdGlvbiDnrKzkuInmlrnmnaXmupDnibnmrorlo7DmmI5cbiAqL1xudm9pZCBnZXRCb2R5KCkudGhlbihmdW5jdGlvbiBlZGl0Rm9ybSgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkIHtcblx0bXcuaG9vaygnd2lraXBhZ2UuZWRpdGZvcm0nKS5hZGQoKCRlZGl0Rm9ybSk6IHZvaWQgPT4ge1xuXHRcdHByb2Nlc3NXaWtpRWRpdG9yKHtcblx0XHRcdCRib2R5LFxuXHRcdFx0JGVkaXRGb3JtLFxuXHRcdH0pO1xuXHR9KTtcblxuXHRtdy5ob29rKCd2ZS5zYXZlRGlhbG9nLnN0YXRlQ2hhbmdlZCcpLmFkZCgoKTogdm9pZCA9PiB7XG5cdFx0cHJvY2Vzc1Zpc3VhbEVkaXRvcih7JGJvZHl9KTtcblx0fSk7XG59KTtcbiIsICJ7XG5cdFwiY29uZmlnS2V5XCI6IFwiZ2FkZ2V0LUVkaXRmb3JtX0F0dHJpYnV0aW9uX19Jbml0aWFsaXplZFwiLFxuXHRcImNvbmZpZ0tleVZlXCI6IFwiZ2FkZ2V0LUVkaXRmb3JtX0F0dHJpYnV0aW9uX19Jbml0aWFsaXplZF9fVkVcIixcblx0XCJpbnB1dElkXCI6IFwiZWRpdGZvcm1fYXR0cmlidXRpb25cIixcblx0XCJ0YXJnZXRXaWtpRWRpdG9yXCI6IFwiLmVkaXRDaGVja2JveGVzIC5vby11aS1ob3Jpem9udGFsTGF5b3V0XCJcbn1cbiIsICJpbXBvcnQgXCJlc2J1aWxkLWNzcy1tb2R1bGVzLXBsdWdpbi1ucy1jc3M6c3JjL0VkaXRmb3JtX0F0dHJpYnV0aW9uL21vZHVsZXMvdXRpbC9FZGl0Zm9ybV9BdHRyaWJ1dGlvbi5tb2R1bGUubGVzc1wiO1xuZXhwb3J0IGNvbnN0IGZvcm1XcmFwID0gXCJFZGl0Zm9ybS1BdHRyaWJ1dGlvbi1tb2R1bGVfX2Zvcm1XcmFwX201ajJVYV9fNDEwMFwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIFwiZm9ybVdyYXBcIjogZm9ybVdyYXBcbn07XG4gICAgICAiLCAiaW1wb3J0IHtsb2NhbGl6ZX0gZnJvbSAnZXh0LmdhZGdldC5pMThuJztcblxuY29uc3QgZ2V0STE4bk1lc3NhZ2VzID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdCdBZGQgdG8gRWRpdCBTdW1tYXJ5JzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdBZGQgdG8gRWRpdCBTdW1tYXJ5Jyxcblx0XHRcdCd6aC1oYW5zJzogJ+a3u+WKoOiHs+e8lui+keaRmOimgScsXG5cdFx0XHQnemgtaGFudCc6ICfmt7vliqDoh7Pnt6jovK/mkZjopoEnLFxuXHRcdH0pLFxuXHRcdFNvdXJjZTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdTb3VyY2UnLFxuXHRcdFx0J3poLWhhbnMnOiAn5YaF5a655p2l5rqQJyxcblx0XHRcdCd6aC1oYW50JzogJ+WFp+WuueS+hua6kCcsXG5cdFx0fSksXG5cdFx0TGljZW5zZTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdMaWNlbnNlJyxcblx0XHRcdCd6aC1oYW5zJzogJ+iuuOWPr+ivgScsXG5cdFx0XHQnemgtaGFudCc6ICfoqLHlj6/orYknLFxuXHRcdH0pLFxuXHRcdCdPdGhlciBMaWNlbnNlJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdPdGhlciBsaWNlbnNlJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WFtuS7luiuuOWPr+ivgScsXG5cdFx0XHQnemgtaGFudCc6ICflhbbku5boqLHlj6/orYknLFxuXHRcdH0pLFxuXHRcdCdQbGVhc2UgQ2xhaW0gU291cmNlcyBhbmQgTGljZW5zZXMnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0lmIGVkaXQgY29udGVudCBhZGRzIGFueSB0aGlyZC1wYXJ0eSBjb250ZW50LCBwbGVhc2UgYWRkIHRoZSBzb3VyY2UgYW5kIGxpY2Vuc2Ugb2YgdGhlIHRoaXJkLXBhcnR5IGNvbnRlbnQgc2VwYXJhdGVseSB0byB0aGUgZWRpdGluZyBzdW1tYXJ5LicsXG5cdFx0XHQnemgtaGFucyc6ICfoi6XmgqjlkJHnvJbovpHlhoXlrrnkuK3mt7vliqDkuobnrKzkuInmlrnmkrDlhpnnmoTlhoXlrrnvvIzor7flsIbnm7jlhbPnrKzkuInmlrnlhoXlrrnnmoTmnaXmupDjgIHorrjlj6/mnaHmrL7lnKjnvJbovpHmkZjopoHkuK3liIbmnaHlo7DmmI4nLFxuXHRcdFx0J3poLWhhbnQnOiAn6Iul5oKo5ZCR57eo6Lyv5YWn5a655Lit5re75Yqg5LqG56ys5LiJ5pa55pKw5YaZ55qE5YWn5a6577yM6KuL5bCH55u45YWz56ys5LiJ5pa55YWn5a6555qE5L6G5rqQ44CB6Kix5Y+v5qKd5qy+5Zyo57eo6Lyv5pGY6KaB5Lit5YiG5qKd6IGy5piOJyxcblx0XHR9KSxcblx0XHQnUmVwbGFjZSBXaXRoIExpY2Vuc2UnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJyAoUmVwbGFjZSB3aXRoIGxpY2Vuc2UgbmFtZSBhbmQgVVJMKScsXG5cdFx0XHQnemgtaGFucyc6ICfvvIjmm7/mjaLkuLrorrjlj6/or4HlkI3np7DlkoznvZHlnYDvvIknLFxuXHRcdFx0J3poLWhhbnQnOiAn77yI5pu/5o+b54iy6Kix5Y+v6K2J5ZCN56ix5ZKM57ay5Z2A77yJJyxcblx0XHR9KSxcblx0fTtcbn07XG5cbmNvbnN0IGkxOG5NZXNzYWdlcyA9IGdldEkxOG5NZXNzYWdlcygpO1xuXG5jb25zdCBnZXRNZXNzYWdlOiBHZXRNZXNzYWdlczx0eXBlb2YgaTE4bk1lc3NhZ2VzPiA9IChrZXkpID0+IHtcblx0cmV0dXJuIGkxOG5NZXNzYWdlc1trZXldIHx8IGtleTtcbn07XG5cbmV4cG9ydCB7Z2V0TWVzc2FnZX07XG4iLCAiaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL2kxOG4nO1xuXG5jb25zdCBMSUNFTlNFUyA9IFtcblx0e1xuXHRcdGxhYmVsOiAnQ0MgQlktU0EgNC4wJyxcblx0XHRkYXRhOiAnY2MtYnktc2E6NC4wJyxcblx0fSxcblx0e1xuXHRcdGxhYmVsOiAnQ0MgQlktU0EgMy4wJyxcblx0XHRkYXRhOiAnY2MtYnktc2E6My4wJyxcblx0fSxcblx0e1xuXHRcdGxhYmVsOiAnQ0MgQlktU0EgMy4wIENOJyxcblx0XHRkYXRhOiAnY2MtYnktc2E6My4wL2NuJyxcblx0fSxcblx0e1xuXHRcdGxhYmVsOiAnQ0MgQlkgNC4wJyxcblx0XHRkYXRhOiAnY2MtYnk6NC4wJyxcblx0fSxcblx0e1xuXHRcdGxhYmVsOiAnQ0MgQlkgMy4wJyxcblx0XHRkYXRhOiAnY2MtYnk6My4wJyxcblx0fSxcblx0e1xuXHRcdGxhYmVsOiAnQ0MgQlkgMy4wIENOJyxcblx0XHRkYXRhOiAnY2MtYnk6My4wL2NuJyxcblx0fSxcblx0e1xuXHRcdGxhYmVsOiAnQ0MwLTEuMCcsXG5cdFx0ZGF0YTogJ2NjLXplcm86MS4wJyxcblx0fSxcblx0e1xuXHRcdGxhYmVsOiAnS09HTCBUeXBlIEk6IEF0dHJpYnV0aW9uJyxcblx0XHRkYXRhOiAnaHR0cHM6Ly93d3cua29nbC5vci5rci9pbmZvL2xpY2Vuc2VUeXBlMS5kbycsXG5cdH0sXG5cdHtcblx0XHRsYWJlbDogZ2V0TWVzc2FnZSgnT3RoZXIgTGljZW5zZScpLFxuXHRcdGRhdGE6IGdldE1lc3NhZ2UoJ1JlcGxhY2UgV2l0aCBMaWNlbnNlJyksXG5cdH0sXG5dO1xuXG5jb25zdCBWQUxJRF9JTlRFUldJS0lfUFJFRklYID0gW1xuXHQnY2MtYnknLFxuXHQnY2MtYnktc2EnLFxuXHQnY2MtemVybycsXG5cdCdjYzAnLFxuXHQnY29tbW9ucycsXG5cdCdlbndpa2knLFxuXHQnaW5jdWJhdG9yJyxcblx0J2luY3ViYXRvci13cC1tbmMnLFxuXHQnaW5jdWJhdG9yLXd0LW1uYycsXG5cdCdpc282MzktMycsXG5cdCdsZXhlbWVzJyxcblx0J2xpY2VuY2UnLFxuXHQnbGljZW5jZXdpa2knLFxuXHQnbGljZW5zZScsXG5cdCdsb2dpbicsXG5cdCdsb2dpbnFpdXdlbmJhaWtlJyxcblx0J2xvZ2lud2lraScsXG5cdCdtZWRpYXdpa2l3aWtpJyxcblx0J21vemlsbGF3aWtpJyxcblx0J213Jyxcblx0J29sZHdpa2lzb3VyY2UnLFxuXHQncG1pZCcsXG5cdCdxaXV3ZW5iYWlrZScsXG5cdCdyZXYnLFxuXHQndGVzdHdpa2lkYXRhJyxcblx0J3YnLFxuXHQndm95Jyxcblx0J3dpa2knLFxuXHQnd2lraWJvb2tzJyxcblx0J3dpa2lkYXRhJyxcblx0J3dpa2lmdW5jdGlvbnMnLFxuXHQnd2lraW5ld3MnLFxuXHQnd2lraXBlZGlhJyxcblx0J3dpa2lxdW90ZScsXG5cdCd3aWtpc291cmNlJyxcblx0J3dpa2l2ZXJzaXR5Jyxcblx0J3dpa2l2b3lhZ2UnLFxuXHQnd2lrdCcsXG5cdCd3aWt0aW9uYXJ5Jyxcblx0J3pocWl1d2VuYmFpa2UnLFxuXHQnemh3aWtpJyxcblx0J3pod2lraXNvdXJjZScsXG5cdCd6aHdpa2l2b3lhZ2UnLFxuXTtcblxuZXhwb3J0IHtMSUNFTlNFUywgVkFMSURfSU5URVJXSUtJX1BSRUZJWH07XG4iLCAiaW1wb3J0IHtWQUxJRF9JTlRFUldJS0lfUFJFRklYfSBmcm9tICcuLi9jb25zdGFudCc7XG5cbmNvbnN0IGdldExpbmsgPSAoe2xpbmssIHRleHR9OiB7bGluazogc3RyaW5nOyB0ZXh0Pzogc3RyaW5nfSk6IHN0cmluZyA9PiB7XG5cdGNvbnN0IFZBTElEX0lOVEVSV0lLSV9MSU5LX1JFR0VYID0gbmV3IFJlZ0V4cChgXjo/KCR7VkFMSURfSU5URVJXSUtJX1BSRUZJWC5qb2luKCd8Jyl9KWAsICdpJyk7XG5cblx0aWYgKFZBTElEX0lOVEVSV0lLSV9MSU5LX1JFR0VYLnRlc3QobGluaykpIHtcblx0XHRsaW5rID0gYDoke2xpbmsucmVwbGFjZSgvXjovLCAnJyl9YDsgLy8g5aaC5p6c6ZO+5o6l5piv5pyJ5pWI55qESW50ZXJ3aWtp6ZO+5o6l77yM5YiZ5Zyo5byA5aS05re75Yqg5YaS5Y+35Lul6Ziy5q2i5a6D6KKr6Kej5p6Q5Li65YaF6YOo6ZO+5o6lXG5cdFx0aWYgKHRleHQpIHtcblx0XHRcdHJldHVybiBgW1ske2xpbmt9fCR7dGV4dH1dXWA7XG5cdFx0fVxuXHRcdHJldHVybiBgW1ske2xpbmt9XV1gO1xuXHR9XG5cblx0Ly8g5b2T6ZO+5o6l5pys6Lqr5bCx5piv5pyJ5pWI55qE5YaF6YOo6ZO+5o6l77yM5L2G5LiN5pivSW50ZXJ3aWtp6ZO+5o6l5pe2XG5cdGlmIChsaW5rLnN0YXJ0c1dpdGgoJ1tbJykgJiYgbGluay5lbmRzV2l0aCgnXV0nKSkge1xuXHRcdHJldHVybiBsaW5rO1xuXHR9XG5cblx0cmV0dXJuIGVuY29kZVVSSShkZWNvZGVVUkkobGluaykpOyAvLyDlvZPpk77mjqXkuI3mmK/mnInmlYjnmoRJbnRlcndpa2npk77mjqXml7bvvIzov5Tlm57nvJbnoIHlkI7nmoTpk77mjqVcbn07XG5cbmV4cG9ydCB7Z2V0TGlua307XG4iLCAiaW1wb3J0IHtnZXRMaW5rfSBmcm9tICcuL2dldExpbmsnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuLi9pMThuJztcblxuLy8gQHRzLWV4cGVjdC1lcnJvciBUUzI1MDNcbmNvbnN0IGdldEF0dHJpYnV0aW9uID0gKGZpZWxkU2V0TGF5b3V0OiBPTy51aS5GaWVsZHNldExheW91dCkgPT4ge1xuXHRjb25zdCBhdHRyaWJ1dGlvbnMgPSBbXTtcblxuXHQvLyBAdHMtZXhwZWN0LWVycm9yIFRTMjUwM1xuXHRjb25zdCBnZXRTZWxlY3RlZEl0ZW0gPSAoZHJvcGRvd246IE9PLnVpLkRyb3Bkb3duV2lkZ2V0KTogT08udWkuT3B0aW9uV2lkZ2V0IHwgbnVsbCA9PiB7XG5cdFx0Ly8gQHRzLWV4cGVjdC1lcnJvciBUUzI1MDNcblx0XHRjb25zdCBzZWxlY3RlZEl0ZW06IE9PLnVpLk9wdGlvbldpZGdldCB8IG51bGwgPSBkcm9wZG93blxuXHRcdFx0LmdldE1lbnUoKVxuXHRcdFx0Ly8gQHRzLWV4cGVjdC1lcnJvciBUUzI1MDNcblx0XHRcdC5maW5kU2VsZWN0ZWRJdGVtKCkgYXMgT08udWkuT3B0aW9uV2lkZ2V0IHwgbnVsbDtcblx0XHRyZXR1cm4gc2VsZWN0ZWRJdGVtO1xuXHR9O1xuXG5cdC8vIEB0cy1leHBlY3QtZXJyb3IgVFMyNTAzXG5cdGNvbnN0IGdldFNlbGVjdGVkVmFsdWUgPSAoZHJvcGRvd246IE9PLnVpLkRyb3Bkb3duV2lkZ2V0KTogc3RyaW5nIHwgdW5kZWZpbmVkID0+IHtcblx0XHRjb25zdCBzZWxlY3RlZEl0ZW0gPSBnZXRTZWxlY3RlZEl0ZW0oZHJvcGRvd24pO1xuXHRcdHJldHVybiBzZWxlY3RlZEl0ZW0gPyAoc2VsZWN0ZWRJdGVtLmdldERhdGEoKSBhcyBzdHJpbmcpIDogdW5kZWZpbmVkO1xuXHR9O1xuXG5cdC8vIEB0cy1leHBlY3QtZXJyb3IgVFMyNTAzXG5cdGNvbnN0IGdldFNlbGVjdGVkTGFiZWwgPSAoZHJvcGRvd246IE9PLnVpLkRyb3Bkb3duV2lkZ2V0KTogc3RyaW5nIHwgdW5kZWZpbmVkID0+IHtcblx0XHRjb25zdCBzZWxlY3RlZEl0ZW0gPSBnZXRTZWxlY3RlZEl0ZW0oZHJvcGRvd24pO1xuXHRcdHJldHVybiBzZWxlY3RlZEl0ZW0gPyAoc2VsZWN0ZWRJdGVtLmdldExhYmVsKCkgYXMgc3RyaW5nKSA6IHVuZGVmaW5lZDtcblx0fTtcblxuXHQvLyBAdHMtZXhwZWN0LWVycm9yIFRTMjUwM1xuXHRmb3IgKGNvbnN0IGF0dHJpYnV0aW9uRmllbGRzZXQgb2YgZmllbGRTZXRMYXlvdXQuZ2V0SXRlbXMoKSBhcyBPTy51aS5GaWVsZHNldExheW91dFtdKSB7XG5cdFx0Y29uc3QgYXR0cmlidXRpb246IHtzb3VyY2U/OiBzdHJpbmc7IGxpY2Vuc2U/OiBzdHJpbmd9ID0ge307XG5cblx0XHQvLyBAdHMtZXhwZWN0LWVycm9yIFRTMjUwM1xuXHRcdGZvciAoY29uc3QgZmllbGRMYXlvdXQgb2YgYXR0cmlidXRpb25GaWVsZHNldC5nZXRJdGVtcygpIGFzIE9PLnVpLkZpZWxkTGF5b3V0W10pIHtcblx0XHRcdGNvbnN0IGZpZWxkID0gZmllbGRMYXlvdXQuZ2V0RmllbGQoKTtcblxuXHRcdFx0aWYgKGZpZWxkLnN1cHBvcnRzKCdnZXRWYWx1ZScpKSB7XG5cdFx0XHRcdC8vIEB0cy1leHBlY3QtZXJyb3IgVFMyNTAzXG5cdFx0XHRcdGNvbnN0IGxpbmsgPSAoZmllbGQgYXMgT08udWkuVGV4dElucHV0V2lkZ2V0KS5nZXRWYWx1ZSgpO1xuXHRcdFx0XHRpZiAobGluaykge1xuXHRcdFx0XHRcdGF0dHJpYnV0aW9uLnNvdXJjZSA9IGdldExpbmsoe2xpbmt9KTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIGlmIChmaWVsZC5zdXBwb3J0cygnZ2V0TWVudScpKSB7XG5cdFx0XHRcdC8vIEB0cy1leHBlY3QtZXJyb3IgVFMyNTAzXG5cdFx0XHRcdGNvbnN0IGxpbmsgPSBnZXRTZWxlY3RlZFZhbHVlKGZpZWxkIGFzIE9PLnVpLkRyb3Bkb3duV2lkZ2V0KTtcblxuXHRcdFx0XHRpZiAobGluaykge1xuXHRcdFx0XHRcdC8vIEB0cy1leHBlY3QtZXJyb3IgVFMyNTAzXG5cdFx0XHRcdFx0Y29uc3QgdGV4dCA9IGdldFNlbGVjdGVkTGFiZWwoZmllbGQgYXMgT08udWkuRHJvcGRvd25XaWRnZXQpO1xuXG5cdFx0XHRcdFx0aWYgKHRleHQpIHtcblx0XHRcdFx0XHRcdGF0dHJpYnV0aW9uLmxpY2Vuc2UgPSBnZXRMaW5rKHtsaW5rLCB0ZXh0fSk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGF0dHJpYnV0aW9uLmxpY2Vuc2UgPSBnZXRMaW5rKHtsaW5rfSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKGF0dHJpYnV0aW9uLnNvdXJjZSAmJiBhdHRyaWJ1dGlvbi5saWNlbnNlKSB7XG5cdFx0XHRhdHRyaWJ1dGlvbnNbYXR0cmlidXRpb25zLmxlbmd0aF0gPVxuXHRcdFx0XHRgJHtnZXRNZXNzYWdlKCdTb3VyY2UnKX06ICR7YXR0cmlidXRpb24uc291cmNlfSAoJHtnZXRNZXNzYWdlKCdMaWNlbnNlJyl9OiAke2F0dHJpYnV0aW9uLmxpY2Vuc2V9KSBgO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBhdHRyaWJ1dGlvbnMuam9pbignICcpO1xufTtcblxuY29uc3QgdXBkYXRlV3BBdHRyaWJ1dGlvbiA9ICh7XG5cdCRib2R5LFxuXHRwYXJlbnRGaWVsZFNldCxcbn06IHtcblx0JGJvZHk6IEpRdWVyeTxIVE1MRWxlbWVudD47XG5cdC8vIEB0cy1leHBlY3QtZXJyb3IgVFMyNTAzXG5cdHBhcmVudEZpZWxkU2V0OiBPTy51aS5GaWVsZHNldExheW91dDtcbn0pID0+IHtcblx0bGV0IHdwQXR0cmlidXRpb246IHN0cmluZyA9ICcnO1xuXG5cdGNvbnN0ICR3cEF0dHJpYnV0aW9uOiBKUXVlcnkgPSAkKCc8aW5wdXQ+JykuYXR0cih7XG5cdFx0aWQ6ICd3cEF0dHJpYnV0aW9uJyxcblx0XHRuYW1lOiAnd3BBdHRyaWJ1dGlvbicsXG5cdFx0dHlwZTogJ2hpZGRlbicsXG5cdFx0dmFsdWU6ICcnLFxuXHR9KTtcblx0Y29uc3QgJG9yaWdpbndwQXR0cmlidXRpb246IEpRdWVyeSA9ICRib2R5LmZpbmQoJ2lucHV0W25hbWU9d3BBdHRyaWJ1dGlvbl0nKTtcblx0aWYgKCEkb3JpZ2lud3BBdHRyaWJ1dGlvbi5sZW5ndGgpIHtcblx0XHQkYm9keS5wcmVwZW5kKCR3cEF0dHJpYnV0aW9uKTtcblx0fVxuXG5cdHdwQXR0cmlidXRpb24gPSBnZXRBdHRyaWJ1dGlvbihwYXJlbnRGaWVsZFNldCk7XG5cdCRvcmlnaW53cEF0dHJpYnV0aW9uLnZhbCh3cEF0dHJpYnV0aW9uKTtcbn07XG5cbmV4cG9ydCB7Z2V0QXR0cmlidXRpb24sIHVwZGF0ZVdwQXR0cmlidXRpb259O1xuIiwgImNvbnN0IGFwcGVuZFRleHRUb1N1bW1hcnkgPSAoe2N1c3RvbVN1bW1hcnksICR3cFN1bW1hcnl9OiB7Y3VzdG9tU3VtbWFyeTogc3RyaW5nOyAkd3BTdW1tYXJ5OiBKUXVlcnl9KTogdm9pZCA9PiB7XG5cdGNvbnN0IG9yaWdpblN1bW1hcnk6IHN0cmluZyA9ICgkd3BTdW1tYXJ5LnZhbCgpIGFzIHN0cmluZyB8IHVuZGVmaW5lZCkgPz8gJyc7XG5cblx0JHdwU3VtbWFyeS52YWwob3JpZ2luU3VtbWFyeS50cmltKCkgPyBgJHtvcmlnaW5TdW1tYXJ5fSAke2N1c3RvbVN1bW1hcnl9YCA6IGN1c3RvbVN1bW1hcnkpLnRyaWdnZXIoJ2NoYW5nZScpO1xufTtcblxuZXhwb3J0IHthcHBlbmRUZXh0VG9TdW1tYXJ5fTtcbiIsICJpbXBvcnQge2dldEF0dHJpYnV0aW9uLCB1cGRhdGVXcEF0dHJpYnV0aW9ufSBmcm9tICcuL2dldEF0dHJpYnV0aW9uJztcbmltcG9ydCB7TElDRU5TRVN9IGZyb20gJy4uL2NvbnN0YW50JztcbmltcG9ydCB7YXBwZW5kVGV4dFRvU3VtbWFyeX0gZnJvbSAnLi9hcHBlbmRUZXh0VG9TdW1tYXJ5JztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi4vaTE4bic7XG5cbmNvbnN0IGdldFRleHRJbnB1dCA9ICguLi5vbkNoYW5nZXM6ICgoKSA9PiB2b2lkKVtdKSA9PiB7XG5cdC8vIEB0cy1leHBlY3QtZXJyb3IgVFMyMzA0XG5cdGNvbnN0IHRleHRJbnB1dCA9IG5ldyBPTy51aS5UZXh0SW5wdXRXaWRnZXQoe1xuXHRcdHBsYWNlaG9sZGVyOiBnZXRNZXNzYWdlKCdTb3VyY2UnKSxcblx0fSk7XG5cblx0Zm9yIChjb25zdCBvbkNoYW5nZSBvZiBvbkNoYW5nZXMpIHtcblx0XHR0ZXh0SW5wdXQub24oJ2NoYW5nZScsIG9uQ2hhbmdlKTtcblx0fVxuXG5cdHJldHVybiB0ZXh0SW5wdXQ7XG59O1xuXG5jb25zdCBnZXREcm9wRG93biA9ICguLi5vblNlbGVjdHM6ICgoKSA9PiB2b2lkKVtdKSA9PiB7XG5cdC8vIEB0cy1leHBlY3QtZXJyb3IgVFMyMzA0XG5cdGNvbnN0IGRyb3Bkb3duOiBPTy51aS5Ecm9wZG93bldpZGdldCA9IG5ldyBPTy51aS5Ecm9wZG93bldpZGdldCh7XG5cdFx0bGFiZWw6IGdldE1lc3NhZ2UoJ0xpY2Vuc2UnKSxcblx0fSk7XG5cblx0Ly8gQHRzLWV4cGVjdC1lcnJvciBUUzIzMDRcblx0Y29uc3QgbWVudU9wdGlvbnM6IE9PLnVpLk1lbnVPcHRpb25XaWRnZXRbXSA9IFtdO1xuXG5cdGZvciAoY29uc3Qge2RhdGEsIGxhYmVsfSBvZiBMSUNFTlNFUykge1xuXHRcdC8vIEB0cy1leHBlY3QtZXJyb3IgVFMyMzA0XG5cdFx0bWVudU9wdGlvbnNbbWVudU9wdGlvbnMubGVuZ3RoXSA9IG5ldyBPTy51aS5NZW51T3B0aW9uV2lkZ2V0KHtcblx0XHRcdGRhdGEsXG5cdFx0XHRsYWJlbCxcblx0XHR9KTtcblx0fVxuXG5cdGRyb3Bkb3duLmdldE1lbnUoKS5hZGRJdGVtcyhtZW51T3B0aW9ucyk7XG5cblx0Zm9yIChjb25zdCBvblNlbGVjdCBvZiBvblNlbGVjdHMpIHtcblx0XHRkcm9wZG93bi5nZXRNZW51KCkub24oJ3NlbGVjdCcsIG9uU2VsZWN0KTtcblx0fVxuXG5cdHJldHVybiBkcm9wZG93bjtcbn07XG5cbi8vIEB0cy1leHBlY3QtZXJyb3IgVFMyNTAzXG5jb25zdCBnZXRBZGRJdGVtQnV0dG9uID0gKC4uLm9uQ2xpY2tzOiAoKCkgPT4gdm9pZClbXSk6IE9PLnVpLkJ1dHRvbklucHV0V2lkZ2V0ID0+IHtcblx0Ly8gQHRzLWV4cGVjdC1lcnJvciBUUzIzMDRcblx0Y29uc3QgYWRkSXRlbUJ1dHRvbiA9IG5ldyBPTy51aS5CdXR0b25JbnB1dFdpZGdldCh7XG5cdFx0bGFiZWw6IGdldE1lc3NhZ2UoJ0FkZCB0byBFZGl0IFN1bW1hcnknKSxcblx0fSk7XG5cblx0Zm9yIChjb25zdCBvbkNsaWNrIG9mIG9uQ2xpY2tzKSB7XG5cdFx0YWRkSXRlbUJ1dHRvbi5vbignY2xpY2snLCBvbkNsaWNrKTtcblx0fVxuXG5cdHJldHVybiBhZGRJdGVtQnV0dG9uO1xufTtcblxuY29uc3QgZ2VuZXJhdGVUZXh0SW5wdXRXaXRoRHJvcGRvd24gPSAoeyRib2R5LCAkd3BTdW1tYXJ5fTogeyRib2R5OiBKUXVlcnk8SFRNTEVsZW1lbnQ+OyAkd3BTdW1tYXJ5OiBKUXVlcnl9KSA9PiB7XG5cdC8vIEB0cy1leHBlY3QtZXJyb3IgVFMyMzA0XG5cdGNvbnN0IGluaXRpYWxGaWVsZHNldCA9IG5ldyBPTy51aS5GaWVsZHNldExheW91dCgpO1xuXHQvLyBAdHMtZXhwZWN0LWVycm9yIFRTMjMwNFxuXHRjb25zdCBwYXJlbnRGaWVsZFNldCA9IG5ldyBPTy51aS5GaWVsZHNldExheW91dCh7XG5cdFx0bGFiZWw6IGdldE1lc3NhZ2UoJ1BsZWFzZSBDbGFpbSBTb3VyY2VzIGFuZCBMaWNlbnNlcycpLFxuXHR9KTtcblxuXHRjb25zdCBpbnB1dE9uQ2hhbmdlID0gKCkgPT4ge1xuXHRcdHVwZGF0ZVdwQXR0cmlidXRpb24oeyRib2R5LCBwYXJlbnRGaWVsZFNldH0pO1xuXHR9O1xuXG5cdGNvbnN0IHRleHRJbnB1dCA9IGdldFRleHRJbnB1dChpbnB1dE9uQ2hhbmdlKTtcblx0Y29uc3QgZHJvcERvd24gPSBnZXREcm9wRG93bihpbnB1dE9uQ2hhbmdlKTtcblxuXHRjb25zdCBhZGRJdGVtT25DbGljayA9ICgpID0+IHtcblx0XHRsZXQgd3BBdHRyaWJ1dGlvbjogc3RyaW5nID0gJyc7XG5cblx0XHRjb25zdCAkd3BBdHRyaWJ1dGlvbjogSlF1ZXJ5ID0gJCgnPGlucHV0PicpLmF0dHIoe1xuXHRcdFx0aWQ6ICd3cEF0dHJpYnV0aW9uJyxcblx0XHRcdG5hbWU6ICd3cEF0dHJpYnV0aW9uJyxcblx0XHRcdHR5cGU6ICdoaWRkZW4nLFxuXHRcdFx0dmFsdWU6ICcnLFxuXHRcdH0pO1xuXG5cdFx0Y29uc3QgJG9yaWdpbndwQXR0cmlidXRpb246IEpRdWVyeTxIVE1MSW5wdXRFbGVtZW50PiA9XG5cdFx0XHQkYm9keS5maW5kPEhUTUxJbnB1dEVsZW1lbnQ+KCdpbnB1dFtuYW1lPXdwQXR0cmlidXRpb25dJyk7XG5cdFx0aWYgKCEkb3JpZ2lud3BBdHRyaWJ1dGlvbi5sZW5ndGgpIHtcblx0XHRcdCRib2R5LnByZXBlbmQoJHdwQXR0cmlidXRpb24pO1xuXHRcdH1cblxuXHRcdHdwQXR0cmlidXRpb24gPSBnZXRBdHRyaWJ1dGlvbihwYXJlbnRGaWVsZFNldCk7XG5cdFx0JG9yaWdpbndwQXR0cmlidXRpb24udmFsKHdwQXR0cmlidXRpb24pO1xuXG5cdFx0YXBwZW5kVGV4dFRvU3VtbWFyeSh7XG5cdFx0XHRjdXN0b21TdW1tYXJ5OiAkb3JpZ2lud3BBdHRyaWJ1dGlvbi52YWwoKSA/IGBbJHskb3JpZ2lud3BBdHRyaWJ1dGlvbi52YWwoKX1dYCA6ICcnLFxuXHRcdFx0JHdwU3VtbWFyeSxcblx0XHR9KTtcblxuXHRcdHRleHRJbnB1dC5zZXRWYWx1ZSgnJyk7XG5cdFx0ZHJvcERvd24uZ2V0TWVudSgpLnVuc2VsZWN0SXRlbSgpO1xuXHR9O1xuXG5cdGNvbnN0IGFkZEl0ZW1CdXR0b24gPSBnZXRBZGRJdGVtQnV0dG9uKGFkZEl0ZW1PbkNsaWNrKTtcblxuXHRpbml0aWFsRmllbGRzZXQuYWRkSXRlbXMoW1xuXHRcdC8vIEB0cy1leHBlY3QtZXJyb3IgVFMyMzA0XG5cdFx0bmV3IE9PLnVpLkZpZWxkTGF5b3V0KHRleHRJbnB1dCwge2xhYmVsOiBnZXRNZXNzYWdlKCdTb3VyY2UnKSwgYWxpZ246ICdpbmxpbmUnfSksXG5cdFx0Ly8gQHRzLWV4cGVjdC1lcnJvciBUUzIzMDRcblx0XHRuZXcgT08udWkuRmllbGRMYXlvdXQoZHJvcERvd24sIHtsYWJlbDogZ2V0TWVzc2FnZSgnTGljZW5zZScpLCBhbGlnbjogJ2lubGluZSd9KSxcblx0XHQvLyBAdHMtZXhwZWN0LWVycm9yIFRTMjMwNFxuXHRcdG5ldyBPTy51aS5GaWVsZExheW91dChhZGRJdGVtQnV0dG9uLCB7YWxpZ246ICdpbmxpbmUnfSksXG5cdF0pO1xuXG5cdHBhcmVudEZpZWxkU2V0LmFkZEl0ZW1zKFtpbml0aWFsRmllbGRzZXRdKTtcblxuXHRyZXR1cm4gcGFyZW50RmllbGRTZXQ7XG59O1xuXG5leHBvcnQge2dlbmVyYXRlVGV4dElucHV0V2l0aERyb3Bkb3dufTtcbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJ34vRWRpdGZvcm1fQXR0cmlidXRpb24vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7Zm9ybVdyYXB9IGZyb20gJy4vRWRpdGZvcm1fQXR0cmlidXRpb24ubW9kdWxlLmxlc3MnO1xuaW1wb3J0IHtnZW5lcmF0ZVRleHRJbnB1dFdpdGhEcm9wZG93bn0gZnJvbSAnLi9nZW5lcmF0ZVRleHRJbnB1dFdpdGhEcm9wZG93bic7XG5cbmludGVyZmFjZSBMYXlvdXRQcm9wcyB7XG5cdCRib2R5OiBKUXVlcnk8SFRNTEVsZW1lbnQ+O1xufVxuXG5jb25zdCBnZW5lcmF0ZVZpc3VhbEVkaXRvckxheW91dCA9ICh7JGJvZHl9OiBMYXlvdXRQcm9wcyk6IEpRdWVyeTxIVE1MRWxlbWVudD4gPT4ge1xuXHRjb25zdCB7dGFyZ2V0fSA9IHdpbmRvdy52ZS5pbml0O1xuXHRjb25zdCAkd3BTdW1tYXJ5ID0gdGFyZ2V0LnNhdmVEaWFsb2cuZWRpdFN1bW1hcnlJbnB1dC4kaW5wdXQ7XG5cdGNvbnN0IHRleHRJbnB1dFdpdGhEcm9wZG93biA9IGdlbmVyYXRlVGV4dElucHV0V2l0aERyb3Bkb3duKHskYm9keSwgJHdwU3VtbWFyeX0pO1xuXHQvLyBNZXNzYWdlcyB0aGF0IGNhbiBiZSB1c2VkIGhlcmU6XG5cdC8vICogc2VlIGFib3ZlIGltcG9ydGVkIG9wdGlvbnMuanNvblxuXHQvLyAqIGZvciBtb3JlIGluZm9ybWF0aW9uXG5cdGNvbnN0ICRsYXlvdXQgPSAkKCc8ZGl2PicpLmF0dHIoJ2lkJywgT1BUSU9OUy5pbnB1dElkKS5hZGRDbGFzcyhmb3JtV3JhcCk7XG5cdCRsYXlvdXQuYXBwZW5kKHRleHRJbnB1dFdpdGhEcm9wZG93bi4kZWxlbWVudCk7XG5cblx0cmV0dXJuICRsYXlvdXQ7XG59O1xuXG5jb25zdCBnZW5lcmF0ZVdpa2lFZGl0b3JMYXlvdXQgPSAoeyRib2R5LCAkZWRpdEZvcm19OiBMYXlvdXRQcm9wcyAmIHskZWRpdEZvcm06IEpRdWVyeX0pOiBKUXVlcnk8SFRNTEVsZW1lbnQ+ID0+IHtcblx0Y29uc3QgJHdwU3VtbWFyeSA9ICRlZGl0Rm9ybS5maW5kKCdpbnB1dFtuYW1lPXdwU3VtbWFyeV0nKTtcblx0Y29uc3QgdGV4dElucHV0V2l0aERyb3Bkb3duID0gZ2VuZXJhdGVUZXh0SW5wdXRXaXRoRHJvcGRvd24oeyRib2R5LCAkd3BTdW1tYXJ5fSk7XG5cdGNvbnN0ICRsYXlvdXQgPSAkKCc8ZGl2PicpLmF0dHIoJ2lkJywgT1BUSU9OUy5pbnB1dElkKS5hZGRDbGFzcyhmb3JtV3JhcCk7XG5cdCRsYXlvdXQuYXBwZW5kKHRleHRJbnB1dFdpdGhEcm9wZG93bi4kZWxlbWVudCk7XG5cblx0cmV0dXJuICRsYXlvdXQ7XG59O1xuXG5leHBvcnQge2dlbmVyYXRlVmlzdWFsRWRpdG9yTGF5b3V0LCBnZW5lcmF0ZVdpa2lFZGl0b3JMYXlvdXR9O1xuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnfi9FZGl0Zm9ybV9BdHRyaWJ1dGlvbi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtnZW5lcmF0ZVZpc3VhbEVkaXRvckxheW91dH0gZnJvbSAnLi91dGlsL2dlbmVyYXRlTGF5b3V0JztcblxuY29uc3QgcHJvY2Vzc1Zpc3VhbEVkaXRvciA9ICh7JGJvZHl9OiB7JGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+fSk6IHZvaWQgPT4ge1xuXHQvLyBHdWFyZCBhZ2FpbnN0IGRvdWJsZSBpbmNsdXNpb25zXG5cdGlmIChtdy5jb25maWcuZ2V0KE9QVElPTlMuY29uZmlnS2V5VmUpKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3Qge3RhcmdldH0gPSB3aW5kb3cudmUuaW5pdDtcblx0Y29uc3Qge3NhdmVEaWFsb2d9ID0gdGFyZ2V0O1xuXHRjb25zdCB7JHNhdmVPcHRpb25zfSA9IHNhdmVEaWFsb2c7XG5cdGlmICghJHNhdmVPcHRpb25zLmxlbmd0aCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdC8vIFNldCBndWFyZFxuXHRtdy5jb25maWcuc2V0KE9QVElPTlMuY29uZmlnS2V5VmUsIHRydWUpO1xuXG5cdGNvbnN0ICRsYXlvdXQgPSBnZW5lcmF0ZVZpc3VhbEVkaXRvckxheW91dCh7JGJvZHl9KTtcblxuXHRpZiAoISRib2R5LmZpbmQoYCMke09QVElPTlMuaW5wdXRJZH1gKS5sZW5ndGgpIHtcblx0XHQkc2F2ZU9wdGlvbnMuYXBwZW5kKCRsYXlvdXQpO1xuXHR9XG5cblx0Ly8gUmVpbml0aWFsaXphdGlvbiBpcyByZXF1aXJlZCBmb3Igc3dpdGNoaW5nIGJldHdlZW4gVmlzdWFsRWRpdG9yIGFuZCBOZXcgV2lraXRleHQgRWRpdG9yICgyMDE3KVxuXHRtdy5ob29rKCd2ZS5hY3RpdmF0aW9uQ29tcGxldGUnKS5hZGQoKCkgPT4ge1xuXHRcdGlmIChtdy5jb25maWcuZ2V0KE9QVElPTlMuY29uZmlnS2V5VmUpKSB7XG5cdFx0XHRtdy5jb25maWcuc2V0KE9QVElPTlMuY29uZmlnS2V5VmUsIGZhbHNlKTtcblx0XHR9XG5cdH0pO1xufTtcblxuZXhwb3J0IHtwcm9jZXNzVmlzdWFsRWRpdG9yfTtcbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJ34vRWRpdGZvcm1fQXR0cmlidXRpb24vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7Z2VuZXJhdGVXaWtpRWRpdG9yTGF5b3V0fSBmcm9tICcuL3V0aWwvZ2VuZXJhdGVMYXlvdXQnO1xuXG5jb25zdCBwcm9jZXNzV2lraUVkaXRvciA9ICh7JGJvZHksICRlZGl0Rm9ybX06IHskYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD47ICRlZGl0Rm9ybTogSlF1ZXJ5fSk6IHZvaWQgPT4ge1xuXHQvLyBHdWFyZCBhZ2FpbnN0IGRvdWJsZSBpbmNsdXNpb25zXG5cdGlmIChtdy5jb25maWcuZ2V0KE9QVElPTlMuY29uZmlnS2V5KSkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0ICR0YXJnZXQ6IEpRdWVyeSA9ICRlZGl0Rm9ybS5maW5kKE9QVElPTlMudGFyZ2V0V2lraUVkaXRvcik7XG5cdGlmICghJHRhcmdldC5sZW5ndGgpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRtdy5jb25maWcuc2V0KE9QVElPTlMuY29uZmlnS2V5LCB0cnVlKTtcblxuXHRjb25zdCAkbGF5b3V0ID0gZ2VuZXJhdGVXaWtpRWRpdG9yTGF5b3V0KHskYm9keSwgJGVkaXRGb3JtfSk7XG5cblx0aWYgKCEkYm9keS5maW5kKGAjJHtPUFRJT05TLmlucHV0SWR9YCkubGVuZ3RoKSB7XG5cdFx0JHRhcmdldC5hZnRlcigkbGF5b3V0KTtcblx0fVxufTtcblxuZXhwb3J0IHtwcm9jZXNzV2lraUVkaXRvcn07XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxxQkFBc0JDLFFBQUEsaUJBQUE7O0FDQ3JCLElBQUFDLFlBQWE7QUFDYixJQUFBQyxjQUFlO0FBQ2YsSUFBQUMsVUFBVztBQUNYLElBQUFDLG1CQUFvQjs7QUNIZCxJQUFNQyxXQUFXOztBQ0R4QixJQUFBQyxvQkFBdUJOLFFBQUEsaUJBQUE7QUFFdkIsSUFBTU8sa0JBQWtCQSxNQUFNO0FBQzdCLFNBQU87SUFDTix3QkFBQSxHQUF1QkQsa0JBQUFFLFVBQVM7TUFDL0JDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDREMsU0FBQSxHQUFRSixrQkFBQUUsVUFBUztNQUNoQkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNERSxVQUFBLEdBQVNMLGtCQUFBRSxVQUFTO01BQ2pCQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0Qsa0JBQUEsR0FBaUJILGtCQUFBRSxVQUFTO01BQ3pCQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0Qsc0NBQUEsR0FBcUNILGtCQUFBRSxVQUFTO01BQzdDQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0QseUJBQUEsR0FBd0JILGtCQUFBRSxVQUFTO01BQ2hDQyxJQUFJO01BQ0osV0FBVztNQUNYLFdB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T0FBT0MsSUFBWS9JLFdBQVcsR0FBRztBQUN2QzZJLFNBQUdDLE9BQU9HLElBQVlqSixhQUFhLEtBQUs7SUFDekM7RUFDRCxDQUFDO0FBQ0Y7O0FDNUJBLElBQU1vSixvQkFBb0JBLENBQUM7RUFBQ2xGO0VBQU95RTtBQUFTLE1BQWlFO0FBRTVHLE1BQUlFLEdBQUdDLE9BQU9DLElBQVloSixTQUFTLEdBQUc7QUFDckM7RUFDRDtBQUVBLFFBQU1zSixVQUFrQlYsVUFBVS9ELEtBQWExRSxnQkFBZ0I7QUFDL0QsTUFBSSxDQUFDbUosUUFBUXJGLFFBQVE7QUFDcEI7RUFDRDtBQUVBNkUsS0FBR0MsT0FBT0csSUFBWWxKLFdBQVcsSUFBSTtBQUVyQyxRQUFNdUksVUFBVUkseUJBQXlCO0lBQUN4RTtJQUFPeUU7RUFBUyxDQUFDO0FBRTNELE1BQUksQ0FBQ3pFLE1BQU1VLEtBQUEsSUFBQXRELE9BQWlCckIsT0FBTyxDQUFFLEVBQUUrRCxRQUFRO0FBQzlDcUYsWUFBUUMsTUFBTWhCLE9BQU87RUFDdEI7QUFDRDs7QVhkQSxNQUFBLEdBQUt6SSxtQkFBQTBKLFNBQVEsRUFBRUMsS0FBSyxTQUFTQyxTQUFTdkYsT0FBc0M7QUFDM0UyRSxLQUFHSyxLQUFLLG1CQUFtQixFQUFFQyxJQUFLUixlQUFvQjtBQUNyRFMsc0JBQWtCO01BQ2pCbEY7TUFDQXlFO0lBQ0QsQ0FBQztFQUNGLENBQUM7QUFFREUsS0FBR0ssS0FBSyw0QkFBNEIsRUFBRUMsSUFBSSxNQUFZO0FBQ3JEUCx3QkFBb0I7TUFBQzFFO0lBQUssQ0FBQztFQUM1QixDQUFDO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFsiaW1wb3J0X2V4dF9nYWRnZXQyIiwgInJlcXVpcmUiLCAiY29uZmlnS2V5IiwgImNvbmZpZ0tleVZlIiwgImlucHV0SWQiLCAidGFyZ2V0V2lraUVkaXRvciIsICJmb3JtV3JhcCIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJnZXRJMThuTWVzc2FnZXMiLCAibG9jYWxpemUiLCAiZW4iLCAiU291cmNlIiwgIkxpY2Vuc2UiLCAiaTE4bk1lc3NhZ2VzIiwgImdldE1lc3NhZ2UiLCAia2V5IiwgIkxJQ0VOU0VTIiwgImxhYmVsIiwgImRhdGEiLCAiVkFMSURfSU5URVJXSUtJX1BSRUZJWCIsICJnZXRMaW5rIiwgImxpbmsiLCAidGV4dCIsICJWQUxJRF9JTlRFUldJS0lfTElOS19SRUdFWCIsICJSZWdFeHAiLCAiY29uY2F0IiwgImpvaW4iLCAidGVzdCIsICJyZXBsYWNlIiwgInN0YXJ0c1dpdGgiLCAiZW5kc1dpdGgiLCAiZW5jb2RlVVJJIiwgImRlY29kZVVSSSIsICJnZXRBdHRyaWJ1dGlvbiIsICJmaWVsZFNldExheW91dCIsICJhdHRyaWJ1dGlvbnMiLCAiZ2V0U2VsZWN0ZWRJdGVtIiwgImRyb3Bkb3duIiwgInNlbGVjdGVkSXRlbSIsICJnZXRNZW51IiwgImZpbmRTZWxlY3RlZEl0ZW0iLCAiZ2V0U2VsZWN0ZWRWYWx1ZSIsICJnZXREYXRhIiwgImdldFNlbGVjdGVkTGFiZWwiLCAiZ2V0TGFiZWwiLCAiX2l0ZXJhdG9yIiwgIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwgImdldEl0ZW1zIiwgIl9zdGVwIiwgInMiLCAibiIsICJkb25lIiwgImF0dHJpYnV0aW9uRmllbGRzZXQiLCAidmFsdWUiLCAiYXR0cmlidXRpb24iLCAiX2l0ZXJhdG9yMiIsICJfc3RlcDIiLCAiZmllbGRMYXlvdXQiLCAiZmllbGQiLCAiZ2V0RmllbGQiLCAic3VwcG9ydHMiLCAiZ2V0VmFsdWUiLCAic291cmNlIiwgImxpY2Vuc2UiLCAiZXJyIiwgImUiLCAiZiIsICJsZW5ndGgiLCAidXBkYXRlV3BBdHRyaWJ1dGlvbiIsICIkYm9keSIsICJwYXJlbnRGaWVsZFNldCIsICJ3cEF0dHJpYnV0aW9uIiwgIiR3cEF0dHJpYnV0aW9uIiwgIiQiLCAiYXR0ciIsICJpZCIsICJuYW1lIiwgInR5cGUiLCAiJG9yaWdpbndwQXR0cmlidXRpb24iLCAiZmluZCIsICJwcmVwZW5kIiwgInZhbCIsICJhcHBlbmRUZXh0VG9TdW1tYXJ5IiwgImN1c3RvbVN1bW1hcnkiLCAiJHdwU3VtbWFyeSIsICJfJHdwU3VtbWFyeSR2YWwiLCAib3JpZ2luU3VtbWFyeSIsICJ0cmltIiwgInRyaWdnZXIiLCAiZ2V0VGV4dElucHV0IiwgIm9uQ2hhbmdlcyIsICJ0ZXh0SW5wdXQiLCAiT08iLCAidWkiLCAiVGV4dElucHV0V2lkZ2V0IiwgInBsYWNlaG9sZGVyIiwgIl9pIiwgIl9vbkNoYW5nZXMiLCAib25DaGFuZ2UiLCAib24iLCAiZ2V0RHJvcERvd24iLCAib25TZWxlY3RzIiwgIkRyb3Bkb3duV2lkZ2V0IiwgIm1lbnVPcHRpb25zIiwgIl9pMiIsICJfTElDRU5TRVMiLCAiTWVudU9wdGlvbldpZGdldCIsICJhZGRJdGVtcyIsICJfaTMiLCAiX29uU2VsZWN0cyIsICJvblNlbGVjdCIsICJnZXRBZGRJdGVtQnV0dG9uIiwgIm9uQ2xpY2tzIiwgImFkZEl0ZW1CdXR0b24iLCAiQnV0dG9uSW5wdXRXaWRnZXQiLCAiX2k0IiwgIl9vbkNsaWNrcyIsICJvbkNsaWNrIiwgImdlbmVyYXRlVGV4dElucHV0V2l0aERyb3Bkb3duIiwgImluaXRpYWxGaWVsZHNldCIsICJGaWVsZHNldExheW91dCIsICJpbnB1dE9uQ2hhbmdlIiwgImRyb3BEb3duIiwgImFkZEl0ZW1PbkNsaWNrIiwgInNldFZhbHVlIiwgInVuc2VsZWN0SXRlbSIsICJGaWVsZExheW91dCIsICJhbGlnbiIsICJnZW5lcmF0ZVZpc3VhbEVkaXRvckxheW91dCIsICJ0YXJnZXQiLCAid2luZG93IiwgInZlIiwgImluaXQiLCAic2F2ZURpYWxvZyIsICJlZGl0U3VtbWFyeUlucHV0IiwgIiRpbnB1dCIsICJ0ZXh0SW5wdXRXaXRoRHJvcGRvd24iLCAiJGxheW91dCIsICJhZGRDbGFzcyIsICJhcHBlbmQiLCAiJGVsZW1lbnQiLCAiZ2VuZXJhdGVXaWtpRWRpdG9yTGF5b3V0IiwgIiRlZGl0Rm9ybSIsICJwcm9jZXNzVmlzdWFsRWRpdG9yIiwgIm13IiwgImNvbmZpZyIsICJnZXQiLCAiJHNhdmVPcHRpb25zIiwgInNldCIsICJob29rIiwgImFkZCIsICJwcm9jZXNzV2lraUVkaXRvciIsICIkdGFyZ2V0IiwgImFmdGVyIiwgImdldEJvZHkiLCAidGhlbiIsICJlZGl0Rm9ybSJdCn0K

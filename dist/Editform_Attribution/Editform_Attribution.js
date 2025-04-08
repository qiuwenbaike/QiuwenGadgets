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
var formWrap = "Editform-Attribution-module__formWrap_m5j2Ua__492";
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0VkaXRmb3JtX0F0dHJpYnV0aW9uL0VkaXRmb3JtX0F0dHJpYnV0aW9uLnRzIiwgInNyYy9FZGl0Zm9ybV9BdHRyaWJ1dGlvbi9vcHRpb25zLmpzb24iLCAic3JjL0VkaXRmb3JtX0F0dHJpYnV0aW9uL21vZHVsZXMvdXRpbC9FZGl0Zm9ybV9BdHRyaWJ1dGlvbi5tb2R1bGUubGVzcyIsICJzcmMvRWRpdGZvcm1fQXR0cmlidXRpb24vbW9kdWxlcy9pMThuLnRzIiwgInNyYy9FZGl0Zm9ybV9BdHRyaWJ1dGlvbi9tb2R1bGVzL2NvbnN0YW50LnRzIiwgInNyYy9FZGl0Zm9ybV9BdHRyaWJ1dGlvbi9tb2R1bGVzL3V0aWwvZ2V0TGluay50cyIsICJzcmMvRWRpdGZvcm1fQXR0cmlidXRpb24vbW9kdWxlcy91dGlsL2dldEF0dHJpYnV0aW9uLnRzIiwgInNyYy9FZGl0Zm9ybV9BdHRyaWJ1dGlvbi9tb2R1bGVzL3V0aWwvYXBwZW5kVGV4dFRvU3VtbWFyeS50cyIsICJzcmMvRWRpdGZvcm1fQXR0cmlidXRpb24vbW9kdWxlcy91dGlsL2dlbmVyYXRlVGV4dElucHV0V2l0aERyb3Bkb3duLnRzIiwgInNyYy9FZGl0Zm9ybV9BdHRyaWJ1dGlvbi9tb2R1bGVzL3V0aWwvZ2VuZXJhdGVMYXlvdXQudHMiLCAic3JjL0VkaXRmb3JtX0F0dHJpYnV0aW9uL21vZHVsZXMvcHJvY2Vzc1Zpc3VhbEVkaXRvci50cyIsICJzcmMvRWRpdGZvcm1fQXR0cmlidXRpb24vbW9kdWxlcy9wcm9jZXNzV2lraUVkaXRvci50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHtnZXRCb2R5fSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuaW1wb3J0IHtwcm9jZXNzVmlzdWFsRWRpdG9yfSBmcm9tICcuL21vZHVsZXMvcHJvY2Vzc1Zpc3VhbEVkaXRvcic7XG5pbXBvcnQge3Byb2Nlc3NXaWtpRWRpdG9yfSBmcm9tICcuL21vZHVsZXMvcHJvY2Vzc1dpa2lFZGl0b3InO1xuXG4vKipcbiAqIEBkZXNjcmlwdGlvbiDnrKzkuInmlrnmnaXmupDnibnmrorlo7DmmI5cbiAqL1xudm9pZCBnZXRCb2R5KCkudGhlbihmdW5jdGlvbiBlZGl0Rm9ybSgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkIHtcblx0bXcuaG9vaygnd2lraXBhZ2UuZWRpdGZvcm0nKS5hZGQoKCRlZGl0Rm9ybSk6IHZvaWQgPT4ge1xuXHRcdHByb2Nlc3NXaWtpRWRpdG9yKHtcblx0XHRcdCRib2R5LFxuXHRcdFx0JGVkaXRGb3JtLFxuXHRcdH0pO1xuXHR9KTtcblxuXHRtdy5ob29rKCd2ZS5zYXZlRGlhbG9nLnN0YXRlQ2hhbmdlZCcpLmFkZCgoKTogdm9pZCA9PiB7XG5cdFx0cHJvY2Vzc1Zpc3VhbEVkaXRvcih7JGJvZHl9KTtcblx0fSk7XG59KTtcbiIsICJ7XG5cdFwiY29uZmlnS2V5XCI6IFwiZ2FkZ2V0LUVkaXRmb3JtX0F0dHJpYnV0aW9uX19Jbml0aWFsaXplZFwiLFxuXHRcImNvbmZpZ0tleVZlXCI6IFwiZ2FkZ2V0LUVkaXRmb3JtX0F0dHJpYnV0aW9uX19Jbml0aWFsaXplZF9fVkVcIixcblx0XCJpbnB1dElkXCI6IFwiZWRpdGZvcm1fYXR0cmlidXRpb25cIixcblx0XCJ0YXJnZXRXaWtpRWRpdG9yXCI6IFwiLmVkaXRDaGVja2JveGVzIC5vby11aS1ob3Jpem9udGFsTGF5b3V0XCJcbn1cbiIsICJpbXBvcnQgXCJlc2J1aWxkLWNzcy1tb2R1bGVzLXBsdWdpbi1ucy1jc3M6c3JjL0VkaXRmb3JtX0F0dHJpYnV0aW9uL21vZHVsZXMvdXRpbC9FZGl0Zm9ybV9BdHRyaWJ1dGlvbi5tb2R1bGUubGVzc1wiO1xuZXhwb3J0IGNvbnN0IGZvcm1XcmFwID0gXCJFZGl0Zm9ybS1BdHRyaWJ1dGlvbi1tb2R1bGVfX2Zvcm1XcmFwX201ajJVYV9fNDkyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgXCJmb3JtV3JhcFwiOiBmb3JtV3JhcFxufTtcbiAgICAgICIsICJpbXBvcnQge2xvY2FsaXplfSBmcm9tICdleHQuZ2FkZ2V0LmkxOG4nO1xuXG5jb25zdCBnZXRJMThuTWVzc2FnZXMgPSAoKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0J0FkZCB0byBFZGl0IFN1bW1hcnknOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0FkZCB0byBFZGl0IFN1bW1hcnknLFxuXHRcdFx0J3poLWhhbnMnOiAn5re75Yqg6Iez57yW6L6R5pGY6KaBJyxcblx0XHRcdCd6aC1oYW50JzogJ+a3u+WKoOiHs+e3qOi8r+aRmOimgScsXG5cdFx0fSksXG5cdFx0U291cmNlOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1NvdXJjZScsXG5cdFx0XHQnemgtaGFucyc6ICflhoXlrrnmnaXmupAnLFxuXHRcdFx0J3poLWhhbnQnOiAn5YWn5a655L6G5rqQJyxcblx0XHR9KSxcblx0XHRMaWNlbnNlOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0xpY2Vuc2UnLFxuXHRcdFx0J3poLWhhbnMnOiAn6K645Y+v6K+BJyxcblx0XHRcdCd6aC1oYW50JzogJ+ioseWPr+itiScsXG5cdFx0fSksXG5cdFx0J090aGVyIExpY2Vuc2UnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ090aGVyIGxpY2Vuc2UnLFxuXHRcdFx0J3poLWhhbnMnOiAn5YW25LuW6K645Y+v6K+BJyxcblx0XHRcdCd6aC1oYW50JzogJ+WFtuS7luioseWPr+itiScsXG5cdFx0fSksXG5cdFx0J1BsZWFzZSBDbGFpbSBTb3VyY2VzIGFuZCBMaWNlbnNlcyc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnSWYgZWRpdCBjb250ZW50IGFkZHMgYW55IHRoaXJkLXBhcnR5IGNvbnRlbnQsIHBsZWFzZSBhZGQgdGhlIHNvdXJjZSBhbmQgbGljZW5zZSBvZiB0aGUgdGhpcmQtcGFydHkgY29udGVudCBzZXBhcmF0ZWx5IHRvIHRoZSBlZGl0aW5nIHN1bW1hcnkuJyxcblx0XHRcdCd6aC1oYW5zJzogJ+iLpeaCqOWQkee8lui+keWGheWuueS4rea3u+WKoOS6huesrOS4ieaWueaSsOWGmeeahOWGheWuue+8jOivt+WwhuebuOWFs+esrOS4ieaWueWGheWuueeahOadpea6kOOAgeiuuOWPr+adoeasvuWcqOe8lui+keaRmOimgeS4reWIhuadoeWjsOaYjicsXG5cdFx0XHQnemgtaGFudCc6ICfoi6XmgqjlkJHnt6jovK/lhaflrrnkuK3mt7vliqDkuobnrKzkuInmlrnmkrDlhpnnmoTlhaflrrnvvIzoq4vlsIfnm7jlhbPnrKzkuInmlrnlhaflrrnnmoTkvobmupDjgIHoqLHlj6/mop3mrL7lnKjnt6jovK/mkZjopoHkuK3liIbmop3ogbLmmI4nLFxuXHRcdH0pLFxuXHRcdCdSZXBsYWNlIFdpdGggTGljZW5zZSc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnIChSZXBsYWNlIHdpdGggbGljZW5zZSBuYW1lIGFuZCBVUkwpJyxcblx0XHRcdCd6aC1oYW5zJzogJ++8iOabv+aNouS4uuiuuOWPr+ivgeWQjeensOWSjOe9keWdgO+8iScsXG5cdFx0XHQnemgtaGFudCc6ICfvvIjmm7/mj5vniLLoqLHlj6/orYnlkI3nqLHlkozntrLlnYDvvIknLFxuXHRcdH0pLFxuXHR9O1xufTtcblxuY29uc3QgaTE4bk1lc3NhZ2VzID0gZ2V0STE4bk1lc3NhZ2VzKCk7XG5cbmNvbnN0IGdldE1lc3NhZ2U6IEdldE1lc3NhZ2VzPHR5cGVvZiBpMThuTWVzc2FnZXM+ID0gKGtleSkgPT4ge1xuXHRyZXR1cm4gaTE4bk1lc3NhZ2VzW2tleV0gfHwga2V5O1xufTtcblxuZXhwb3J0IHtnZXRNZXNzYWdlfTtcbiIsICJpbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vaTE4bic7XG5cbmNvbnN0IExJQ0VOU0VTID0gW1xuXHR7XG5cdFx0bGFiZWw6ICdDQyBCWS1TQSA0LjAnLFxuXHRcdGRhdGE6ICdjYy1ieS1zYTo0LjAnLFxuXHR9LFxuXHR7XG5cdFx0bGFiZWw6ICdDQyBCWS1TQSAzLjAnLFxuXHRcdGRhdGE6ICdjYy1ieS1zYTozLjAnLFxuXHR9LFxuXHR7XG5cdFx0bGFiZWw6ICdDQyBCWS1TQSAzLjAgQ04nLFxuXHRcdGRhdGE6ICdjYy1ieS1zYTozLjAvY24nLFxuXHR9LFxuXHR7XG5cdFx0bGFiZWw6ICdDQyBCWSA0LjAnLFxuXHRcdGRhdGE6ICdjYy1ieTo0LjAnLFxuXHR9LFxuXHR7XG5cdFx0bGFiZWw6ICdDQyBCWSAzLjAnLFxuXHRcdGRhdGE6ICdjYy1ieTozLjAnLFxuXHR9LFxuXHR7XG5cdFx0bGFiZWw6ICdDQyBCWSAzLjAgQ04nLFxuXHRcdGRhdGE6ICdjYy1ieTozLjAvY24nLFxuXHR9LFxuXHR7XG5cdFx0bGFiZWw6ICdDQzAtMS4wJyxcblx0XHRkYXRhOiAnY2MtemVybzoxLjAnLFxuXHR9LFxuXHR7XG5cdFx0bGFiZWw6ICdLT0dMIFR5cGUgSTogQXR0cmlidXRpb24nLFxuXHRcdGRhdGE6ICdodHRwczovL3d3dy5rb2dsLm9yLmtyL2luZm8vbGljZW5zZVR5cGUxLmRvJyxcblx0fSxcblx0e1xuXHRcdGxhYmVsOiBnZXRNZXNzYWdlKCdPdGhlciBMaWNlbnNlJyksXG5cdFx0ZGF0YTogZ2V0TWVzc2FnZSgnUmVwbGFjZSBXaXRoIExpY2Vuc2UnKSxcblx0fSxcbl07XG5cbmNvbnN0IFZBTElEX0lOVEVSV0lLSV9QUkVGSVggPSBbXG5cdCdjYy1ieScsXG5cdCdjYy1ieS1zYScsXG5cdCdjYy16ZXJvJyxcblx0J2NjMCcsXG5cdCdjb21tb25zJyxcblx0J2Vud2lraScsXG5cdCdpbmN1YmF0b3InLFxuXHQnaW5jdWJhdG9yLXdwLW1uYycsXG5cdCdpbmN1YmF0b3Itd3QtbW5jJyxcblx0J2lzbzYzOS0zJyxcblx0J2xleGVtZXMnLFxuXHQnbGljZW5jZScsXG5cdCdsaWNlbmNld2lraScsXG5cdCdsaWNlbnNlJyxcblx0J2xvZ2luJyxcblx0J2xvZ2lucWl1d2VuYmFpa2UnLFxuXHQnbG9naW53aWtpJyxcblx0J21lZGlhd2lraXdpa2knLFxuXHQnbW96aWxsYXdpa2knLFxuXHQnbXcnLFxuXHQnb2xkd2lraXNvdXJjZScsXG5cdCdwbWlkJyxcblx0J3FpdXdlbmJhaWtlJyxcblx0J3JldicsXG5cdCd0ZXN0d2lraWRhdGEnLFxuXHQndicsXG5cdCd2b3knLFxuXHQnd2lraScsXG5cdCd3aWtpYm9va3MnLFxuXHQnd2lraWRhdGEnLFxuXHQnd2lraWZ1bmN0aW9ucycsXG5cdCd3aWtpbmV3cycsXG5cdCd3aWtpcGVkaWEnLFxuXHQnd2lraXF1b3RlJyxcblx0J3dpa2lzb3VyY2UnLFxuXHQnd2lraXZlcnNpdHknLFxuXHQnd2lraXZveWFnZScsXG5cdCd3aWt0Jyxcblx0J3dpa3Rpb25hcnknLFxuXHQnemhxaXV3ZW5iYWlrZScsXG5cdCd6aHdpa2knLFxuXHQnemh3aWtpc291cmNlJyxcblx0J3pod2lraXZveWFnZScsXG5dO1xuXG5leHBvcnQge0xJQ0VOU0VTLCBWQUxJRF9JTlRFUldJS0lfUFJFRklYfTtcbiIsICJpbXBvcnQge1ZBTElEX0lOVEVSV0lLSV9QUkVGSVh9IGZyb20gJy4uL2NvbnN0YW50JztcblxuY29uc3QgZ2V0TGluayA9ICh7bGluaywgdGV4dH06IHtsaW5rOiBzdHJpbmc7IHRleHQ/OiBzdHJpbmd9KTogc3RyaW5nID0+IHtcblx0Y29uc3QgVkFMSURfSU5URVJXSUtJX0xJTktfUkVHRVggPSBuZXcgUmVnRXhwKGBeOj8oJHtWQUxJRF9JTlRFUldJS0lfUFJFRklYLmpvaW4oJ3wnKX0pYCwgJ2knKTtcblxuXHRpZiAoVkFMSURfSU5URVJXSUtJX0xJTktfUkVHRVgudGVzdChsaW5rKSkge1xuXHRcdGxpbmsgPSBgOiR7bGluay5yZXBsYWNlKC9eOi8sICcnKX1gO1xuXHRcdGlmICh0ZXh0KSB7XG5cdFx0XHRyZXR1cm4gYFtbJHtsaW5rfXwke3RleHR9XV1gO1xuXHRcdH1cblx0XHRyZXR1cm4gYFtbJHtsaW5rfV1dYDtcblx0fVxuXG5cdHJldHVybiBlbmNvZGVVUkkoZGVjb2RlVVJJKGxpbmspKTtcbn07XG5cbmV4cG9ydCB7Z2V0TGlua307XG4iLCAiaW1wb3J0IHtnZXRMaW5rfSBmcm9tICcuL2dldExpbmsnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuLi9pMThuJztcblxuY29uc3QgZ2V0QXR0cmlidXRpb24gPSAoZmllbGRTZXRMYXlvdXQ6IE9PLnVpLkZpZWxkc2V0TGF5b3V0KSA9PiB7XG5cdGNvbnN0IGF0dHJpYnV0aW9ucyA9IFtdO1xuXG5cdGNvbnN0IGdldFNlbGVjdGVkSXRlbSA9IChkcm9wZG93bjogT08udWkuRHJvcGRvd25XaWRnZXQpOiBPTy51aS5PcHRpb25XaWRnZXQgfCBudWxsID0+IHtcblx0XHRjb25zdCBzZWxlY3RlZEl0ZW06IE9PLnVpLk9wdGlvbldpZGdldCB8IG51bGwgPSBkcm9wZG93blxuXHRcdFx0LmdldE1lbnUoKVxuXHRcdFx0LmZpbmRTZWxlY3RlZEl0ZW0oKSBhcyBPTy51aS5PcHRpb25XaWRnZXQgfCBudWxsO1xuXHRcdHJldHVybiBzZWxlY3RlZEl0ZW07XG5cdH07XG5cblx0Y29uc3QgZ2V0U2VsZWN0ZWRWYWx1ZSA9IChkcm9wZG93bjogT08udWkuRHJvcGRvd25XaWRnZXQpOiBzdHJpbmcgfCB1bmRlZmluZWQgPT4ge1xuXHRcdGNvbnN0IHNlbGVjdGVkSXRlbSA9IGdldFNlbGVjdGVkSXRlbShkcm9wZG93bik7XG5cdFx0cmV0dXJuIHNlbGVjdGVkSXRlbSA/IChzZWxlY3RlZEl0ZW0uZ2V0RGF0YSgpIGFzIHN0cmluZykgOiB1bmRlZmluZWQ7XG5cdH07XG5cblx0Y29uc3QgZ2V0U2VsZWN0ZWRMYWJlbCA9IChkcm9wZG93bjogT08udWkuRHJvcGRvd25XaWRnZXQpOiBzdHJpbmcgfCB1bmRlZmluZWQgPT4ge1xuXHRcdGNvbnN0IHNlbGVjdGVkSXRlbSA9IGdldFNlbGVjdGVkSXRlbShkcm9wZG93bik7XG5cdFx0cmV0dXJuIHNlbGVjdGVkSXRlbSA/IChzZWxlY3RlZEl0ZW0uZ2V0TGFiZWwoKSBhcyBzdHJpbmcpIDogdW5kZWZpbmVkO1xuXHR9O1xuXG5cdGZvciAoY29uc3QgYXR0cmlidXRpb25GaWVsZHNldCBvZiBmaWVsZFNldExheW91dC5nZXRJdGVtcygpIGFzIE9PLnVpLkZpZWxkc2V0TGF5b3V0W10pIHtcblx0XHRjb25zdCBhdHRyaWJ1dGlvbjoge3NvdXJjZT86IHN0cmluZzsgbGljZW5zZT86IHN0cmluZ30gPSB7fTtcblxuXHRcdGZvciAoY29uc3QgZmllbGRMYXlvdXQgb2YgYXR0cmlidXRpb25GaWVsZHNldC5nZXRJdGVtcygpIGFzIE9PLnVpLkZpZWxkTGF5b3V0W10pIHtcblx0XHRcdGNvbnN0IGZpZWxkID0gZmllbGRMYXlvdXQuZ2V0RmllbGQoKTtcblxuXHRcdFx0aWYgKGZpZWxkLnN1cHBvcnRzKCdnZXRWYWx1ZScpKSB7XG5cdFx0XHRcdGNvbnN0IGxpbmsgPSAoZmllbGQgYXMgT08udWkuVGV4dElucHV0V2lkZ2V0KS5nZXRWYWx1ZSgpO1xuXHRcdFx0XHRpZiAobGluaykge1xuXHRcdFx0XHRcdGF0dHJpYnV0aW9uLnNvdXJjZSA9IGdldExpbmsoe2xpbmt9KTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIGlmIChmaWVsZC5zdXBwb3J0cygnZ2V0TWVudScpKSB7XG5cdFx0XHRcdGNvbnN0IGxpbmsgPSBnZXRTZWxlY3RlZFZhbHVlKGZpZWxkIGFzIE9PLnVpLkRyb3Bkb3duV2lkZ2V0KTtcblxuXHRcdFx0XHRpZiAobGluaykge1xuXHRcdFx0XHRcdGNvbnN0IHRleHQgPSBnZXRTZWxlY3RlZExhYmVsKGZpZWxkIGFzIE9PLnVpLkRyb3Bkb3duV2lkZ2V0KTtcblxuXHRcdFx0XHRcdGlmICh0ZXh0KSB7XG5cdFx0XHRcdFx0XHRhdHRyaWJ1dGlvbi5saWNlbnNlID0gZ2V0TGluayh7bGluaywgdGV4dH0pO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRhdHRyaWJ1dGlvbi5saWNlbnNlID0gZ2V0TGluayh7bGlua30pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChhdHRyaWJ1dGlvbi5zb3VyY2UgJiYgYXR0cmlidXRpb24ubGljZW5zZSkge1xuXHRcdFx0YXR0cmlidXRpb25zW2F0dHJpYnV0aW9ucy5sZW5ndGhdID1cblx0XHRcdFx0YCR7Z2V0TWVzc2FnZSgnU291cmNlJyl9OiAke2F0dHJpYnV0aW9uLnNvdXJjZX0gKCR7Z2V0TWVzc2FnZSgnTGljZW5zZScpfTogJHthdHRyaWJ1dGlvbi5saWNlbnNlfSkgYDtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gYXR0cmlidXRpb25zLmpvaW4oJyAnKTtcbn07XG5cbmNvbnN0IHVwZGF0ZVdwQXR0cmlidXRpb24gPSAoe1xuXHQkYm9keSxcblx0cGFyZW50RmllbGRTZXQsXG59OiB7XG5cdCRib2R5OiBKUXVlcnk8SFRNTEVsZW1lbnQ+O1xuXHRwYXJlbnRGaWVsZFNldDogT08udWkuRmllbGRzZXRMYXlvdXQ7XG59KSA9PiB7XG5cdGxldCB3cEF0dHJpYnV0aW9uOiBzdHJpbmcgPSAnJztcblxuXHRjb25zdCAkd3BBdHRyaWJ1dGlvbjogSlF1ZXJ5ID0gJCgnPGlucHV0PicpLmF0dHIoe1xuXHRcdGlkOiAnd3BBdHRyaWJ1dGlvbicsXG5cdFx0bmFtZTogJ3dwQXR0cmlidXRpb24nLFxuXHRcdHR5cGU6ICdoaWRkZW4nLFxuXHRcdHZhbHVlOiAnJyxcblx0fSk7XG5cdGNvbnN0ICRvcmlnaW53cEF0dHJpYnV0aW9uOiBKUXVlcnkgPSAkYm9keS5maW5kKCdpbnB1dFtuYW1lPXdwQXR0cmlidXRpb25dJyk7XG5cdGlmICghJG9yaWdpbndwQXR0cmlidXRpb24ubGVuZ3RoKSB7XG5cdFx0JGJvZHkucHJlcGVuZCgkd3BBdHRyaWJ1dGlvbik7XG5cdH1cblxuXHR3cEF0dHJpYnV0aW9uID0gZ2V0QXR0cmlidXRpb24ocGFyZW50RmllbGRTZXQpO1xuXHQkb3JpZ2lud3BBdHRyaWJ1dGlvbi52YWwod3BBdHRyaWJ1dGlvbik7XG59O1xuXG5leHBvcnQge2dldEF0dHJpYnV0aW9uLCB1cGRhdGVXcEF0dHJpYnV0aW9ufTtcbiIsICJjb25zdCBhcHBlbmRUZXh0VG9TdW1tYXJ5ID0gKHtjdXN0b21TdW1tYXJ5LCAkd3BTdW1tYXJ5fToge2N1c3RvbVN1bW1hcnk6IHN0cmluZzsgJHdwU3VtbWFyeTogSlF1ZXJ5fSk6IHZvaWQgPT4ge1xuXHRjb25zdCBvcmlnaW5TdW1tYXJ5OiBzdHJpbmcgPSAoJHdwU3VtbWFyeS52YWwoKSBhcyBzdHJpbmcgfCB1bmRlZmluZWQpID8/ICcnO1xuXG5cdCR3cFN1bW1hcnkudmFsKG9yaWdpblN1bW1hcnkudHJpbSgpID8gYCR7b3JpZ2luU3VtbWFyeX0gJHtjdXN0b21TdW1tYXJ5fWAgOiBjdXN0b21TdW1tYXJ5KS50cmlnZ2VyKCdjaGFuZ2UnKTtcbn07XG5cbmV4cG9ydCB7YXBwZW5kVGV4dFRvU3VtbWFyeX07XG4iLCAiaW1wb3J0IHtnZXRBdHRyaWJ1dGlvbiwgdXBkYXRlV3BBdHRyaWJ1dGlvbn0gZnJvbSAnLi9nZXRBdHRyaWJ1dGlvbic7XG5pbXBvcnQge0xJQ0VOU0VTfSBmcm9tICcuLi9jb25zdGFudCc7XG5pbXBvcnQge2FwcGVuZFRleHRUb1N1bW1hcnl9IGZyb20gJy4vYXBwZW5kVGV4dFRvU3VtbWFyeSc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4uL2kxOG4nO1xuXG5jb25zdCBnZXRUZXh0SW5wdXQgPSAoLi4ub25DaGFuZ2VzOiAoKCkgPT4gdm9pZClbXSkgPT4ge1xuXHRjb25zdCB0ZXh0SW5wdXQgPSBuZXcgT08udWkuVGV4dElucHV0V2lkZ2V0KHtcblx0XHRwbGFjZWhvbGRlcjogZ2V0TWVzc2FnZSgnU291cmNlJyksXG5cdH0pO1xuXG5cdGZvciAoY29uc3Qgb25DaGFuZ2Ugb2Ygb25DaGFuZ2VzKSB7XG5cdFx0dGV4dElucHV0Lm9uKCdjaGFuZ2UnLCBvbkNoYW5nZSk7XG5cdH1cblxuXHRyZXR1cm4gdGV4dElucHV0O1xufTtcblxuY29uc3QgZ2V0RHJvcERvd24gPSAoLi4ub25TZWxlY3RzOiAoKCkgPT4gdm9pZClbXSkgPT4ge1xuXHRjb25zdCBkcm9wZG93bjogT08udWkuRHJvcGRvd25XaWRnZXQgPSBuZXcgT08udWkuRHJvcGRvd25XaWRnZXQoe1xuXHRcdGxhYmVsOiBnZXRNZXNzYWdlKCdMaWNlbnNlJyksXG5cdH0pO1xuXG5cdGNvbnN0IG1lbnVPcHRpb25zOiBPTy51aS5NZW51T3B0aW9uV2lkZ2V0W10gPSBbXTtcblxuXHRmb3IgKGNvbnN0IHtkYXRhLCBsYWJlbH0gb2YgTElDRU5TRVMpIHtcblx0XHRtZW51T3B0aW9uc1ttZW51T3B0aW9ucy5sZW5ndGhdID0gbmV3IE9PLnVpLk1lbnVPcHRpb25XaWRnZXQoe1xuXHRcdFx0ZGF0YSxcblx0XHRcdGxhYmVsLFxuXHRcdH0pO1xuXHR9XG5cblx0ZHJvcGRvd24uZ2V0TWVudSgpLmFkZEl0ZW1zKG1lbnVPcHRpb25zKTtcblxuXHRmb3IgKGNvbnN0IG9uU2VsZWN0IG9mIG9uU2VsZWN0cykge1xuXHRcdGRyb3Bkb3duLmdldE1lbnUoKS5vbignc2VsZWN0Jywgb25TZWxlY3QpO1xuXHR9XG5cblx0cmV0dXJuIGRyb3Bkb3duO1xufTtcblxuY29uc3QgZ2V0QWRkSXRlbUJ1dHRvbiA9ICguLi5vbkNsaWNrczogKCgpID0+IHZvaWQpW10pOiBPTy51aS5CdXR0b25JbnB1dFdpZGdldCA9PiB7XG5cdGNvbnN0IGFkZEl0ZW1CdXR0b24gPSBuZXcgT08udWkuQnV0dG9uSW5wdXRXaWRnZXQoe1xuXHRcdGxhYmVsOiBnZXRNZXNzYWdlKCdBZGQgdG8gRWRpdCBTdW1tYXJ5JyksXG5cdH0pO1xuXG5cdGZvciAoY29uc3Qgb25DbGljayBvZiBvbkNsaWNrcykge1xuXHRcdGFkZEl0ZW1CdXR0b24ub24oJ2NsaWNrJywgb25DbGljayk7XG5cdH1cblxuXHRyZXR1cm4gYWRkSXRlbUJ1dHRvbjtcbn07XG5cbmNvbnN0IGdlbmVyYXRlVGV4dElucHV0V2l0aERyb3Bkb3duID0gKHskYm9keSwgJHdwU3VtbWFyeX06IHskYm9keTogSlF1ZXJ5PEhUTUxFbGVtZW50PjsgJHdwU3VtbWFyeTogSlF1ZXJ5fSkgPT4ge1xuXHRjb25zdCBpbml0aWFsRmllbGRzZXQgPSBuZXcgT08udWkuRmllbGRzZXRMYXlvdXQoKTtcblx0Y29uc3QgcGFyZW50RmllbGRTZXQgPSBuZXcgT08udWkuRmllbGRzZXRMYXlvdXQoe1xuXHRcdGxhYmVsOiBnZXRNZXNzYWdlKCdQbGVhc2UgQ2xhaW0gU291cmNlcyBhbmQgTGljZW5zZXMnKSxcblx0fSk7XG5cblx0Y29uc3QgaW5wdXRPbkNoYW5nZSA9ICgpID0+IHtcblx0XHR1cGRhdGVXcEF0dHJpYnV0aW9uKHskYm9keSwgcGFyZW50RmllbGRTZXR9KTtcblx0fTtcblxuXHRjb25zdCB0ZXh0SW5wdXQgPSBnZXRUZXh0SW5wdXQoaW5wdXRPbkNoYW5nZSk7XG5cdGNvbnN0IGRyb3BEb3duID0gZ2V0RHJvcERvd24oaW5wdXRPbkNoYW5nZSk7XG5cblx0Y29uc3QgYWRkSXRlbU9uQ2xpY2sgPSAoKSA9PiB7XG5cdFx0bGV0IHdwQXR0cmlidXRpb246IHN0cmluZyA9ICcnO1xuXG5cdFx0Y29uc3QgJHdwQXR0cmlidXRpb246IEpRdWVyeSA9ICQoJzxpbnB1dD4nKS5hdHRyKHtcblx0XHRcdGlkOiAnd3BBdHRyaWJ1dGlvbicsXG5cdFx0XHRuYW1lOiAnd3BBdHRyaWJ1dGlvbicsXG5cdFx0XHR0eXBlOiAnaGlkZGVuJyxcblx0XHRcdHZhbHVlOiAnJyxcblx0XHR9KTtcblxuXHRcdGNvbnN0ICRvcmlnaW53cEF0dHJpYnV0aW9uOiBKUXVlcnk8SFRNTElucHV0RWxlbWVudD4gPVxuXHRcdFx0JGJvZHkuZmluZDxIVE1MSW5wdXRFbGVtZW50PignaW5wdXRbbmFtZT13cEF0dHJpYnV0aW9uXScpO1xuXHRcdGlmICghJG9yaWdpbndwQXR0cmlidXRpb24ubGVuZ3RoKSB7XG5cdFx0XHQkYm9keS5wcmVwZW5kKCR3cEF0dHJpYnV0aW9uKTtcblx0XHR9XG5cblx0XHR3cEF0dHJpYnV0aW9uID0gZ2V0QXR0cmlidXRpb24ocGFyZW50RmllbGRTZXQpO1xuXHRcdCRvcmlnaW53cEF0dHJpYnV0aW9uLnZhbCh3cEF0dHJpYnV0aW9uKTtcblxuXHRcdGFwcGVuZFRleHRUb1N1bW1hcnkoe1xuXHRcdFx0Y3VzdG9tU3VtbWFyeTogJG9yaWdpbndwQXR0cmlidXRpb24udmFsKCkgPyBgWyR7JG9yaWdpbndwQXR0cmlidXRpb24udmFsKCl9XWAgOiAnJyxcblx0XHRcdCR3cFN1bW1hcnksXG5cdFx0fSk7XG5cblx0XHR0ZXh0SW5wdXQuc2V0VmFsdWUoJycpO1xuXHRcdGRyb3BEb3duLmdldE1lbnUoKS51bnNlbGVjdEl0ZW0oKTtcblx0fTtcblxuXHRjb25zdCBhZGRJdGVtQnV0dG9uID0gZ2V0QWRkSXRlbUJ1dHRvbihhZGRJdGVtT25DbGljayk7XG5cblx0aW5pdGlhbEZpZWxkc2V0LmFkZEl0ZW1zKFtcblx0XHRuZXcgT08udWkuRmllbGRMYXlvdXQodGV4dElucHV0LCB7bGFiZWw6IGdldE1lc3NhZ2UoJ1NvdXJjZScpLCBhbGlnbjogJ2lubGluZSd9KSxcblx0XHRuZXcgT08udWkuRmllbGRMYXlvdXQoZHJvcERvd24sIHtsYWJlbDogZ2V0TWVzc2FnZSgnTGljZW5zZScpLCBhbGlnbjogJ2lubGluZSd9KSxcblx0XHRuZXcgT08udWkuRmllbGRMYXlvdXQoYWRkSXRlbUJ1dHRvbiwge2FsaWduOiAnaW5saW5lJ30pLFxuXHRdKTtcblxuXHRwYXJlbnRGaWVsZFNldC5hZGRJdGVtcyhbaW5pdGlhbEZpZWxkc2V0XSk7XG5cblx0cmV0dXJuIHBhcmVudEZpZWxkU2V0O1xufTtcblxuZXhwb3J0IHtnZW5lcmF0ZVRleHRJbnB1dFdpdGhEcm9wZG93bn07XG4iLCAiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVuc2FmZS1hcmd1bWVudCwgbWVkaWF3aWtpL2NsYXNzLWRvYyAqL1xuaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICd+L0VkaXRmb3JtX0F0dHJpYnV0aW9uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge2Zvcm1XcmFwfSBmcm9tICcuL0VkaXRmb3JtX0F0dHJpYnV0aW9uLm1vZHVsZS5sZXNzJztcbmltcG9ydCB7Z2VuZXJhdGVUZXh0SW5wdXRXaXRoRHJvcGRvd259IGZyb20gJy4vZ2VuZXJhdGVUZXh0SW5wdXRXaXRoRHJvcGRvd24nO1xuXG5pbnRlcmZhY2UgTGF5b3V0UHJvcHMge1xuXHQkYm9keTogSlF1ZXJ5PEhUTUxFbGVtZW50Pjtcbn1cblxuY29uc3QgZ2VuZXJhdGVWaXN1YWxFZGl0b3JMYXlvdXQgPSAoeyRib2R5fTogTGF5b3V0UHJvcHMpOiBKUXVlcnk8SFRNTEVsZW1lbnQ+ID0+IHtcblx0Y29uc3Qge3RhcmdldH0gPSB3aW5kb3cudmUuaW5pdDtcblx0Y29uc3QgJHdwU3VtbWFyeSA9IHRhcmdldC5zYXZlRGlhbG9nLmVkaXRTdW1tYXJ5SW5wdXQuJGlucHV0O1xuXHRjb25zdCB0ZXh0SW5wdXRXaXRoRHJvcGRvd24gPSBnZW5lcmF0ZVRleHRJbnB1dFdpdGhEcm9wZG93bih7JGJvZHksICR3cFN1bW1hcnl9KTtcblx0Y29uc3QgJGxheW91dCA9ICQoJzxkaXY+JykuYXR0cignaWQnLCBPUFRJT05TLmlucHV0SWQpLmFkZENsYXNzKGZvcm1XcmFwKTtcblx0JGxheW91dC5hcHBlbmQodGV4dElucHV0V2l0aERyb3Bkb3duLiRlbGVtZW50KTtcblxuXHRyZXR1cm4gJGxheW91dDtcbn07XG5cbmNvbnN0IGdlbmVyYXRlV2lraUVkaXRvckxheW91dCA9ICh7JGJvZHksICRlZGl0Rm9ybX06IExheW91dFByb3BzICYgeyRlZGl0Rm9ybTogSlF1ZXJ5fSk6IEpRdWVyeTxIVE1MRWxlbWVudD4gPT4ge1xuXHRjb25zdCAkd3BTdW1tYXJ5ID0gJGVkaXRGb3JtLmZpbmQoJ2lucHV0W25hbWU9d3BTdW1tYXJ5XScpO1xuXHRjb25zdCB0ZXh0SW5wdXRXaXRoRHJvcGRvd24gPSBnZW5lcmF0ZVRleHRJbnB1dFdpdGhEcm9wZG93bih7JGJvZHksICR3cFN1bW1hcnl9KTtcblx0Y29uc3QgJGxheW91dCA9ICQoJzxkaXY+JykuYXR0cignaWQnLCBPUFRJT05TLmlucHV0SWQpLmFkZENsYXNzKGZvcm1XcmFwKTtcblx0JGxheW91dC5hcHBlbmQodGV4dElucHV0V2l0aERyb3Bkb3duLiRlbGVtZW50KTtcblxuXHRyZXR1cm4gJGxheW91dDtcbn07XG5cbmV4cG9ydCB7Z2VuZXJhdGVWaXN1YWxFZGl0b3JMYXlvdXQsIGdlbmVyYXRlV2lraUVkaXRvckxheW91dH07XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICd+L0VkaXRmb3JtX0F0dHJpYnV0aW9uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge2dlbmVyYXRlVmlzdWFsRWRpdG9yTGF5b3V0fSBmcm9tICcuL3V0aWwvZ2VuZXJhdGVMYXlvdXQnO1xuXG5jb25zdCBwcm9jZXNzVmlzdWFsRWRpdG9yID0gKHskYm9keX06IHskYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD59KTogdm9pZCA9PiB7XG5cdC8vIEd1YXJkIGFnYWluc3QgZG91YmxlIGluY2x1c2lvbnNcblx0aWYgKG13LmNvbmZpZy5nZXQoT1BUSU9OUy5jb25maWdLZXlWZSkpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCB7dGFyZ2V0fSA9IHdpbmRvdy52ZS5pbml0O1xuXHRjb25zdCB7c2F2ZURpYWxvZ30gPSB0YXJnZXQ7XG5cdGNvbnN0IHskc2F2ZU9wdGlvbnN9ID0gc2F2ZURpYWxvZztcblx0aWYgKCEkc2F2ZU9wdGlvbnMubGVuZ3RoKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Ly8gU2V0IGd1YXJkXG5cdG13LmNvbmZpZy5zZXQoT1BUSU9OUy5jb25maWdLZXlWZSwgdHJ1ZSk7XG5cblx0Y29uc3QgJGxheW91dCA9IGdlbmVyYXRlVmlzdWFsRWRpdG9yTGF5b3V0KHskYm9keX0pO1xuXG5cdGlmICghJGJvZHkuZmluZChgIyR7T1BUSU9OUy5pbnB1dElkfWApLmxlbmd0aCkge1xuXHRcdCRzYXZlT3B0aW9ucy5hcHBlbmQoJGxheW91dCk7XG5cdH1cblxuXHQvLyBSZWluaXRpYWxpemF0aW9uIGlzIHJlcXVpcmVkIGZvciBzd2l0Y2hpbmcgYmV0d2VlbiBWaXN1YWxFZGl0b3IgYW5kIE5ldyBXaWtpdGV4dCBFZGl0b3IgKDIwMTcpXG5cdG13Lmhvb2soJ3ZlLmFjdGl2YXRpb25Db21wbGV0ZScpLmFkZCgoKSA9PiB7XG5cdFx0aWYgKG13LmNvbmZpZy5nZXQoT1BUSU9OUy5jb25maWdLZXlWZSkpIHtcblx0XHRcdG13LmNvbmZpZy5zZXQoT1BUSU9OUy5jb25maWdLZXlWZSwgZmFsc2UpO1xuXHRcdH1cblx0fSk7XG59O1xuXG5leHBvcnQge3Byb2Nlc3NWaXN1YWxFZGl0b3J9O1xuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnfi9FZGl0Zm9ybV9BdHRyaWJ1dGlvbi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtnZW5lcmF0ZVdpa2lFZGl0b3JMYXlvdXR9IGZyb20gJy4vdXRpbC9nZW5lcmF0ZUxheW91dCc7XG5cbmNvbnN0IHByb2Nlc3NXaWtpRWRpdG9yID0gKHskYm9keSwgJGVkaXRGb3JtfTogeyRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50PjsgJGVkaXRGb3JtOiBKUXVlcnl9KTogdm9pZCA9PiB7XG5cdC8vIEd1YXJkIGFnYWluc3QgZG91YmxlIGluY2x1c2lvbnNcblx0aWYgKG13LmNvbmZpZy5nZXQoT1BUSU9OUy5jb25maWdLZXkpKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgJHRhcmdldDogSlF1ZXJ5ID0gJGVkaXRGb3JtLmZpbmQoT1BUSU9OUy50YXJnZXRXaWtpRWRpdG9yKTtcblx0aWYgKCEkdGFyZ2V0Lmxlbmd0aCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdG13LmNvbmZpZy5zZXQoT1BUSU9OUy5jb25maWdLZXksIHRydWUpO1xuXG5cdGNvbnN0ICRsYXlvdXQgPSBnZW5lcmF0ZVdpa2lFZGl0b3JMYXlvdXQoeyRib2R5LCAkZWRpdEZvcm19KTtcblxuXHRpZiAoISRib2R5LmZpbmQoYCMke09QVElPTlMuaW5wdXRJZH1gKS5sZW5ndGgpIHtcblx0XHQkdGFyZ2V0LmFmdGVyKCRsYXlvdXQpO1xuXHR9XG59O1xuXG5leHBvcnQg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RUFDRDtBQUVBNkUsS0FBR0MsT0FBT0csSUFBWWhKLFdBQVcsSUFBSTtBQUVyQyxRQUFNcUksVUFBVUkseUJBQXlCO0lBQUN4RTtJQUFPeUU7RUFBUyxDQUFDO0FBRTNELE1BQUksQ0FBQ3pFLE1BQU1VLEtBQUEsSUFBQXBELE9BQWlCckIsT0FBTyxDQUFFLEVBQUU2RCxRQUFRO0FBQzlDcUYsWUFBUUMsTUFBTWhCLE9BQU87RUFDdEI7QUFDRDs7QVhkQSxNQUFBLEdBQUt2SSxtQkFBQXdKLFNBQVEsRUFBRUMsS0FBSyxTQUFTQyxTQUFTdkYsT0FBc0M7QUFDM0UyRSxLQUFHSyxLQUFLLG1CQUFtQixFQUFFQyxJQUFLUixlQUFvQjtBQUNyRFMsc0JBQWtCO01BQ2pCbEY7TUFDQXlFO0lBQ0QsQ0FBQztFQUNGLENBQUM7QUFFREUsS0FBR0ssS0FBSyw0QkFBNEIsRUFBRUMsSUFBSSxNQUFZO0FBQ3JEUCx3QkFBb0I7TUFBQzFFO0lBQUssQ0FBQztFQUM1QixDQUFDO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFsiaW1wb3J0X2V4dF9nYWRnZXQyIiwgInJlcXVpcmUiLCAiY29uZmlnS2V5IiwgImNvbmZpZ0tleVZlIiwgImlucHV0SWQiLCAidGFyZ2V0V2lraUVkaXRvciIsICJmb3JtV3JhcCIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJnZXRJMThuTWVzc2FnZXMiLCAibG9jYWxpemUiLCAiZW4iLCAiU291cmNlIiwgIkxpY2Vuc2UiLCAiaTE4bk1lc3NhZ2VzIiwgImdldE1lc3NhZ2UiLCAia2V5IiwgIkxJQ0VOU0VTIiwgImxhYmVsIiwgImRhdGEiLCAiVkFMSURfSU5URVJXSUtJX1BSRUZJWCIsICJnZXRMaW5rIiwgImxpbmsiLCAidGV4dCIsICJWQUxJRF9JTlRFUldJS0lfTElOS19SRUdFWCIsICJSZWdFeHAiLCAiY29uY2F0IiwgImpvaW4iLCAidGVzdCIsICJyZXBsYWNlIiwgImVuY29kZVVSSSIsICJkZWNvZGVVUkkiLCAiZ2V0QXR0cmlidXRpb24iLCAiZmllbGRTZXRMYXlvdXQiLCAiYXR0cmlidXRpb25zIiwgImdldFNlbGVjdGVkSXRlbSIsICJkcm9wZG93biIsICJzZWxlY3RlZEl0ZW0iLCAiZ2V0TWVudSIsICJmaW5kU2VsZWN0ZWRJdGVtIiwgImdldFNlbGVjdGVkVmFsdWUiLCAiZ2V0RGF0YSIsICJnZXRTZWxlY3RlZExhYmVsIiwgImdldExhYmVsIiwgIl9pdGVyYXRvciIsICJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsICJnZXRJdGVtcyIsICJfc3RlcCIsICJzIiwgIm4iLCAiZG9uZSIsICJhdHRyaWJ1dGlvbkZpZWxkc2V0IiwgInZhbHVlIiwgImF0dHJpYnV0aW9uIiwgIl9pdGVyYXRvcjIiLCAiX3N0ZXAyIiwgImZpZWxkTGF5b3V0IiwgImZpZWxkIiwgImdldEZpZWxkIiwgInN1cHBvcnRzIiwgImdldFZhbHVlIiwgInNvdXJjZSIsICJsaWNlbnNlIiwgImVyciIsICJlIiwgImYiLCAibGVuZ3RoIiwgInVwZGF0ZVdwQXR0cmlidXRpb24iLCAiJGJvZHkiLCAicGFyZW50RmllbGRTZXQiLCAid3BBdHRyaWJ1dGlvbiIsICIkd3BBdHRyaWJ1dGlvbiIsICIkIiwgImF0dHIiLCAiaWQiLCAibmFtZSIsICJ0eXBlIiwgIiRvcmlnaW53cEF0dHJpYnV0aW9uIiwgImZpbmQiLCAicHJlcGVuZCIsICJ2YWwiLCAiYXBwZW5kVGV4dFRvU3VtbWFyeSIsICJjdXN0b21TdW1tYXJ5IiwgIiR3cFN1bW1hcnkiLCAiXyR3cFN1bW1hcnkkdmFsIiwgIm9yaWdpblN1bW1hcnkiLCAidHJpbSIsICJ0cmlnZ2VyIiwgImdldFRleHRJbnB1dCIsICJvbkNoYW5nZXMiLCAidGV4dElucHV0IiwgIk9PIiwgInVpIiwgIlRleHRJbnB1dFdpZGdldCIsICJwbGFjZWhvbGRlciIsICJfaSIsICJfb25DaGFuZ2VzIiwgIm9uQ2hhbmdlIiwgIm9uIiwgImdldERyb3BEb3duIiwgIm9uU2VsZWN0cyIsICJEcm9wZG93bldpZGdldCIsICJtZW51T3B0aW9ucyIsICJfaTIiLCAiX0xJQ0VOU0VTIiwgIk1lbnVPcHRpb25XaWRnZXQiLCAiYWRkSXRlbXMiLCAiX2kzIiwgIl9vblNlbGVjdHMiLCAib25TZWxlY3QiLCAiZ2V0QWRkSXRlbUJ1dHRvbiIsICJvbkNsaWNrcyIsICJhZGRJdGVtQnV0dG9uIiwgIkJ1dHRvbklucHV0V2lkZ2V0IiwgIl9pNCIsICJfb25DbGlja3MiLCAib25DbGljayIsICJnZW5lcmF0ZVRleHRJbnB1dFdpdGhEcm9wZG93biIsICJpbml0aWFsRmllbGRzZXQiLCAiRmllbGRzZXRMYXlvdXQiLCAiaW5wdXRPbkNoYW5nZSIsICJkcm9wRG93biIsICJhZGRJdGVtT25DbGljayIsICJzZXRWYWx1ZSIsICJ1bnNlbGVjdEl0ZW0iLCAiRmllbGRMYXlvdXQiLCAiYWxpZ24iLCAiZ2VuZXJhdGVWaXN1YWxFZGl0b3JMYXlvdXQiLCAidGFyZ2V0IiwgIndpbmRvdyIsICJ2ZSIsICJpbml0IiwgInNhdmVEaWFsb2ciLCAiZWRpdFN1bW1hcnlJbnB1dCIsICIkaW5wdXQiLCAidGV4dElucHV0V2l0aERyb3Bkb3duIiwgIiRsYXlvdXQiLCAiYWRkQ2xhc3MiLCAiYXBwZW5kIiwgIiRlbGVtZW50IiwgImdlbmVyYXRlV2lraUVkaXRvckxheW91dCIsICIkZWRpdEZvcm0iLCAicHJvY2Vzc1Zpc3VhbEVkaXRvciIsICJtdyIsICJjb25maWciLCAiZ2V0IiwgIiRzYXZlT3B0aW9ucyIsICJzZXQiLCAiaG9vayIsICJhZGQiLCAicHJvY2Vzc1dpa2lFZGl0b3IiLCAiJHRhcmdldCIsICJhZnRlciIsICJnZXRCb2R5IiwgInRoZW4iLCAiZWRpdEZvcm0iXQp9Cg==

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
var formWrap = "Editform-Attribution-module__formWrap_m5j2Ua__491";
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL0VkaXRmb3JtX0F0dHJpYnV0aW9uL0VkaXRmb3JtX0F0dHJpYnV0aW9uLnRzIiwgIi4uLy4uL3NyYy9FZGl0Zm9ybV9BdHRyaWJ1dGlvbi9vcHRpb25zLmpzb24iLCAiLi4vLi4vc3JjL0VkaXRmb3JtX0F0dHJpYnV0aW9uL21vZHVsZXMvdXRpbC9FZGl0Zm9ybV9BdHRyaWJ1dGlvbi5tb2R1bGUubGVzcyIsICIuLi8uLi9zcmMvRWRpdGZvcm1fQXR0cmlidXRpb24vbW9kdWxlcy9pMThuLnRzIiwgIi4uLy4uL3NyYy9FZGl0Zm9ybV9BdHRyaWJ1dGlvbi9tb2R1bGVzL2NvbnN0YW50LnRzIiwgIi4uLy4uL3NyYy9FZGl0Zm9ybV9BdHRyaWJ1dGlvbi9tb2R1bGVzL3V0aWwvZ2V0TGluay50cyIsICIuLi8uLi9zcmMvRWRpdGZvcm1fQXR0cmlidXRpb24vbW9kdWxlcy91dGlsL2dldEF0dHJpYnV0aW9uLnRzIiwgIi4uLy4uL3NyYy9FZGl0Zm9ybV9BdHRyaWJ1dGlvbi9tb2R1bGVzL3V0aWwvYXBwZW5kVGV4dFRvU3VtbWFyeS50cyIsICIuLi8uLi9zcmMvRWRpdGZvcm1fQXR0cmlidXRpb24vbW9kdWxlcy91dGlsL2dlbmVyYXRlVGV4dElucHV0V2l0aERyb3Bkb3duLnRzIiwgIi4uLy4uL3NyYy9FZGl0Zm9ybV9BdHRyaWJ1dGlvbi9tb2R1bGVzL3V0aWwvZ2VuZXJhdGVMYXlvdXQudHMiLCAiLi4vLi4vc3JjL0VkaXRmb3JtX0F0dHJpYnV0aW9uL21vZHVsZXMvcHJvY2Vzc1Zpc3VhbEVkaXRvci50cyIsICIuLi8uLi9zcmMvRWRpdGZvcm1fQXR0cmlidXRpb24vbW9kdWxlcy9wcm9jZXNzV2lraUVkaXRvci50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHtnZXRCb2R5fSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuaW1wb3J0IHtwcm9jZXNzVmlzdWFsRWRpdG9yfSBmcm9tICcuL21vZHVsZXMvcHJvY2Vzc1Zpc3VhbEVkaXRvcic7XG5pbXBvcnQge3Byb2Nlc3NXaWtpRWRpdG9yfSBmcm9tICcuL21vZHVsZXMvcHJvY2Vzc1dpa2lFZGl0b3InO1xuXG4vKipcbiAqIEBkZXNjcmlwdGlvbiDnrKzkuInmlrnmnaXmupDnibnmrorlo7DmmI5cbiAqL1xudm9pZCBnZXRCb2R5KCkudGhlbihmdW5jdGlvbiBlZGl0Rm9ybSgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkIHtcblx0bXcuaG9vaygnd2lraXBhZ2UuZWRpdGZvcm0nKS5hZGQoKCRlZGl0Rm9ybSk6IHZvaWQgPT4ge1xuXHRcdHByb2Nlc3NXaWtpRWRpdG9yKHtcblx0XHRcdCRib2R5LFxuXHRcdFx0JGVkaXRGb3JtLFxuXHRcdH0pO1xuXHR9KTtcblxuXHRtdy5ob29rKCd2ZS5zYXZlRGlhbG9nLnN0YXRlQ2hhbmdlZCcpLmFkZCgoKTogdm9pZCA9PiB7XG5cdFx0cHJvY2Vzc1Zpc3VhbEVkaXRvcih7JGJvZHl9KTtcblx0fSk7XG59KTtcbiIsICJ7XG5cdFwiY29uZmlnS2V5XCI6IFwiZ2FkZ2V0LUVkaXRmb3JtX0F0dHJpYnV0aW9uX19Jbml0aWFsaXplZFwiLFxuXHRcImNvbmZpZ0tleVZlXCI6IFwiZ2FkZ2V0LUVkaXRmb3JtX0F0dHJpYnV0aW9uX19Jbml0aWFsaXplZF9fVkVcIixcblx0XCJjaGFuZ2VUYWdcIjogXCJBdHRyaWJ1dGlvbl9hZGRlZFwiLFxuXHRcImlucHV0SWRcIjogXCJlZGl0Zm9ybV9hdHRyaWJ1dGlvblwiLFxuXHRcInRhcmdldFdpa2lFZGl0b3JcIjogXCIuZWRpdENoZWNrYm94ZXMgLm9vLXVpLWhvcml6b250YWxMYXlvdXRcIlxufVxuIiwgImltcG9ydCBcImVzYnVpbGQtY3NzLW1vZHVsZXMtcGx1Z2luLW5zLWNzczpzcmMvRWRpdGZvcm1fQXR0cmlidXRpb24vbW9kdWxlcy91dGlsL0VkaXRmb3JtX0F0dHJpYnV0aW9uLm1vZHVsZS5sZXNzXCI7XG5leHBvcnQgY29uc3QgZm9ybVdyYXAgPSBcIkVkaXRmb3JtLUF0dHJpYnV0aW9uLW1vZHVsZV9fZm9ybVdyYXBfbTVqMlVhX180OTFcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBcImZvcm1XcmFwXCI6IGZvcm1XcmFwXG59O1xuICAgICAgIiwgImltcG9ydCB7bG9jYWxpemV9IGZyb20gJ2V4dC5nYWRnZXQuaTE4bic7XG5cbmNvbnN0IGdldEkxOG5NZXNzYWdlcyA9ICgpID0+IHtcblx0cmV0dXJuIHtcblx0XHQnQWRkIHRvIEVkaXQgU3VtbWFyeSc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQWRkIHRvIEVkaXQgU3VtbWFyeScsXG5cdFx0XHQnemgtaGFucyc6ICfmt7vliqDoh7PnvJbovpHmkZjopoEnLFxuXHRcdFx0J3poLWhhbnQnOiAn5re75Yqg6Iez57eo6Lyv5pGY6KaBJyxcblx0XHR9KSxcblx0XHRTb3VyY2U6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnU291cmNlJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WGheWuueadpea6kCcsXG5cdFx0XHQnemgtaGFudCc6ICflhaflrrnkvobmupAnLFxuXHRcdH0pLFxuXHRcdExpY2Vuc2U6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnTGljZW5zZScsXG5cdFx0XHQnemgtaGFucyc6ICforrjlj6/or4EnLFxuXHRcdFx0J3poLWhhbnQnOiAn6Kix5Y+v6K2JJyxcblx0XHR9KSxcblx0XHQnT3RoZXIgTGljZW5zZSc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnT3RoZXIgbGljZW5zZScsXG5cdFx0XHQnemgtaGFucyc6ICflhbbku5borrjlj6/or4EnLFxuXHRcdFx0J3poLWhhbnQnOiAn5YW25LuW6Kix5Y+v6K2JJyxcblx0XHR9KSxcblx0XHQnUGxlYXNlIENsYWltIFNvdXJjZXMgYW5kIExpY2Vuc2VzJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdJZiBlZGl0IGNvbnRlbnQgYWRkcyBhbnkgdGhpcmQtcGFydHkgY29udGVudCwgcGxlYXNlIGFkZCB0aGUgc291cmNlIGFuZCBsaWNlbnNlIG9mIHRoZSB0aGlyZC1wYXJ0eSBjb250ZW50IHNlcGFyYXRlbHkgdG8gdGhlIGVkaXRpbmcgc3VtbWFyeS4nLFxuXHRcdFx0J3poLWhhbnMnOiAn6Iul5oKo5ZCR57yW6L6R5YaF5a655Lit5re75Yqg5LqG56ys5LiJ5pa55pKw5YaZ55qE5YaF5a6577yM6K+35bCG55u45YWz56ys5LiJ5pa55YaF5a6555qE5p2l5rqQ44CB6K645Y+v5p2h5qy+5Zyo57yW6L6R5pGY6KaB5Lit5YiG5p2h5aOw5piOJyxcblx0XHRcdCd6aC1oYW50JzogJ+iLpeaCqOWQkee3qOi8r+WFp+WuueS4rea3u+WKoOS6huesrOS4ieaWueaSsOWGmeeahOWFp+Wuue+8jOiri+Wwh+ebuOWFs+esrOS4ieaWueWFp+WuueeahOS+hua6kOOAgeioseWPr+aineasvuWcqOe3qOi8r+aRmOimgeS4reWIhuaineiBsuaYjicsXG5cdFx0fSksXG5cdFx0J1JlcGxhY2UgV2l0aCBMaWNlbnNlJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICcgKFJlcGxhY2Ugd2l0aCBsaWNlbnNlIG5hbWUgYW5kIFVSTCknLFxuXHRcdFx0J3poLWhhbnMnOiAn77yI5pu/5o2i5Li66K645Y+v6K+B5ZCN56ew5ZKM572R5Z2A77yJJyxcblx0XHRcdCd6aC1oYW50JzogJ++8iOabv+aPm+eIsuioseWPr+itieWQjeeoseWSjOe2suWdgO+8iScsXG5cdFx0fSksXG5cdH07XG59O1xuXG5jb25zdCBpMThuTWVzc2FnZXMgPSBnZXRJMThuTWVzc2FnZXMoKTtcblxuY29uc3QgZ2V0TWVzc2FnZTogR2V0TWVzc2FnZXM8dHlwZW9mIGkxOG5NZXNzYWdlcz4gPSAoa2V5KSA9PiB7XG5cdHJldHVybiBpMThuTWVzc2FnZXNba2V5XSB8fCBrZXk7XG59O1xuXG5leHBvcnQge2dldE1lc3NhZ2V9O1xuIiwgImltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9pMThuJztcblxuY29uc3QgTElDRU5TRVMgPSBbXG5cdHtcblx0XHRsYWJlbDogJ0NDIEJZLVNBIDQuMCcsXG5cdFx0ZGF0YTogJ2NjLWJ5LXNhOjQuMCcsXG5cdH0sXG5cdHtcblx0XHRsYWJlbDogJ0NDIEJZLVNBIDMuMCcsXG5cdFx0ZGF0YTogJ2NjLWJ5LXNhOjMuMCcsXG5cdH0sXG5cdHtcblx0XHRsYWJlbDogJ0NDIEJZLVNBIDMuMCBDTicsXG5cdFx0ZGF0YTogJ2NjLWJ5LXNhOjMuMC9jbicsXG5cdH0sXG5cdHtcblx0XHRsYWJlbDogJ0NDIEJZIDQuMCcsXG5cdFx0ZGF0YTogJ2NjLWJ5OjQuMCcsXG5cdH0sXG5cdHtcblx0XHRsYWJlbDogJ0NDIEJZIDMuMCcsXG5cdFx0ZGF0YTogJ2NjLWJ5OjMuMCcsXG5cdH0sXG5cdHtcblx0XHRsYWJlbDogJ0NDIEJZIDMuMCBDTicsXG5cdFx0ZGF0YTogJ2NjLWJ5OjMuMC9jbicsXG5cdH0sXG5cdHtcblx0XHRsYWJlbDogJ0NDMC0xLjAnLFxuXHRcdGRhdGE6ICdjYy16ZXJvOjEuMCcsXG5cdH0sXG5cdHtcblx0XHRsYWJlbDogJ0tPR0wgVHlwZSBJOiBBdHRyaWJ1dGlvbicsXG5cdFx0ZGF0YTogJ2h0dHBzOi8vd3d3LmtvZ2wub3Iua3IvaW5mby9saWNlbnNlVHlwZTEuZG8nLFxuXHR9LFxuXHR7XG5cdFx0bGFiZWw6IGdldE1lc3NhZ2UoJ090aGVyIExpY2Vuc2UnKSxcblx0XHRkYXRhOiBnZXRNZXNzYWdlKCdSZXBsYWNlIFdpdGggTGljZW5zZScpLFxuXHR9LFxuXTtcblxuY29uc3QgVkFMSURfSU5URVJXSUtJX1BSRUZJWCA9IFtcblx0J2NjLWJ5Jyxcblx0J2NjLWJ5LXNhJyxcblx0J2NjLXplcm8nLFxuXHQnY2MwJyxcblx0J2NvbW1vbnMnLFxuXHQnZW53aWtpJyxcblx0J2luY3ViYXRvcicsXG5cdCdpbmN1YmF0b3Itd3AtbW5jJyxcblx0J2luY3ViYXRvci13dC1tbmMnLFxuXHQnaXNvNjM5LTMnLFxuXHQnbGV4ZW1lcycsXG5cdCdsaWNlbmNlJyxcblx0J2xpY2VuY2V3aWtpJyxcblx0J2xpY2Vuc2UnLFxuXHQnbG9naW4nLFxuXHQnbG9naW5xaXV3ZW5iYWlrZScsXG5cdCdsb2dpbndpa2knLFxuXHQnbWVkaWF3aWtpd2lraScsXG5cdCdtb3ppbGxhd2lraScsXG5cdCdtdycsXG5cdCdvbGR3aWtpc291cmNlJyxcblx0J3BtaWQnLFxuXHQncWl1d2VuYmFpa2UnLFxuXHQncmV2Jyxcblx0J3Rlc3R3aWtpZGF0YScsXG5cdCd2Jyxcblx0J3ZveScsXG5cdCd3aWtpJyxcblx0J3dpa2lib29rcycsXG5cdCd3aWtpZGF0YScsXG5cdCd3aWtpZnVuY3Rpb25zJyxcblx0J3dpa2luZXdzJyxcblx0J3dpa2lwZWRpYScsXG5cdCd3aWtpcXVvdGUnLFxuXHQnd2lraXNvdXJjZScsXG5cdCd3aWtpdmVyc2l0eScsXG5cdCd3aWtpdm95YWdlJyxcblx0J3dpa3QnLFxuXHQnd2lrdGlvbmFyeScsXG5cdCd6aHFpdXdlbmJhaWtlJyxcblx0J3pod2lraScsXG5cdCd6aHdpa2lzb3VyY2UnLFxuXHQnemh3aWtpdm95YWdlJyxcbl07XG5cbmV4cG9ydCB7TElDRU5TRVMsIFZBTElEX0lOVEVSV0lLSV9QUkVGSVh9O1xuIiwgImltcG9ydCB7VkFMSURfSU5URVJXSUtJX1BSRUZJWH0gZnJvbSAnLi4vY29uc3RhbnQnO1xuXG5jb25zdCBnZXRMaW5rID0gKHtsaW5rLCB0ZXh0fToge2xpbms6IHN0cmluZzsgdGV4dD86IHN0cmluZ30pOiBzdHJpbmcgPT4ge1xuXHRjb25zdCBWQUxJRF9JTlRFUldJS0lfTElOS19SRUdFWCA9IG5ldyBSZWdFeHAoYF46Pygke1ZBTElEX0lOVEVSV0lLSV9QUkVGSVguam9pbignfCcpfSlgLCAnaScpO1xuXG5cdGlmIChWQUxJRF9JTlRFUldJS0lfTElOS19SRUdFWC50ZXN0KGxpbmspKSB7XG5cdFx0bGluayA9IGA6JHtsaW5rLnJlcGxhY2UoL146LywgJycpfWA7XG5cdFx0aWYgKHRleHQpIHtcblx0XHRcdHJldHVybiBgW1ske2xpbmt9fCR7dGV4dH1dXWA7XG5cdFx0fVxuXHRcdHJldHVybiBgW1ske2xpbmt9XV1gO1xuXHR9XG5cblx0cmV0dXJuIGVuY29kZVVSSShkZWNvZGVVUkkobGluaykpO1xufTtcblxuZXhwb3J0IHtnZXRMaW5rfTtcbiIsICJpbXBvcnQge2dldExpbmt9IGZyb20gJy4vZ2V0TGluayc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4uL2kxOG4nO1xuXG5jb25zdCBnZXRBdHRyaWJ1dGlvbiA9IChmaWVsZFNldExheW91dDogT08udWkuRmllbGRzZXRMYXlvdXQpID0+IHtcblx0Y29uc3QgYXR0cmlidXRpb25zID0gW107XG5cblx0Y29uc3QgZ2V0U2VsZWN0ZWRJdGVtID0gKGRyb3Bkb3duOiBPTy51aS5Ecm9wZG93bldpZGdldCk6IE9PLnVpLk9wdGlvbldpZGdldCB8IG51bGwgPT4ge1xuXHRcdGNvbnN0IHNlbGVjdGVkSXRlbTogT08udWkuT3B0aW9uV2lkZ2V0IHwgbnVsbCA9IGRyb3Bkb3duXG5cdFx0XHQuZ2V0TWVudSgpXG5cdFx0XHQuZmluZFNlbGVjdGVkSXRlbSgpIGFzIE9PLnVpLk9wdGlvbldpZGdldCB8IG51bGw7XG5cdFx0cmV0dXJuIHNlbGVjdGVkSXRlbTtcblx0fTtcblxuXHRjb25zdCBnZXRTZWxlY3RlZFZhbHVlID0gKGRyb3Bkb3duOiBPTy51aS5Ecm9wZG93bldpZGdldCk6IHN0cmluZyB8IHVuZGVmaW5lZCA9PiB7XG5cdFx0Y29uc3Qgc2VsZWN0ZWRJdGVtID0gZ2V0U2VsZWN0ZWRJdGVtKGRyb3Bkb3duKTtcblx0XHRyZXR1cm4gc2VsZWN0ZWRJdGVtID8gKHNlbGVjdGVkSXRlbS5nZXREYXRhKCkgYXMgc3RyaW5nKSA6IHVuZGVmaW5lZDtcblx0fTtcblxuXHRjb25zdCBnZXRTZWxlY3RlZExhYmVsID0gKGRyb3Bkb3duOiBPTy51aS5Ecm9wZG93bldpZGdldCk6IHN0cmluZyB8IHVuZGVmaW5lZCA9PiB7XG5cdFx0Y29uc3Qgc2VsZWN0ZWRJdGVtID0gZ2V0U2VsZWN0ZWRJdGVtKGRyb3Bkb3duKTtcblx0XHRyZXR1cm4gc2VsZWN0ZWRJdGVtID8gKHNlbGVjdGVkSXRlbS5nZXRMYWJlbCgpIGFzIHN0cmluZykgOiB1bmRlZmluZWQ7XG5cdH07XG5cblx0Zm9yIChjb25zdCBhdHRyaWJ1dGlvbkZpZWxkc2V0IG9mIGZpZWxkU2V0TGF5b3V0LmdldEl0ZW1zKCkgYXMgT08udWkuRmllbGRzZXRMYXlvdXRbXSkge1xuXHRcdGNvbnN0IGF0dHJpYnV0aW9uOiB7c291cmNlPzogc3RyaW5nOyBsaWNlbnNlPzogc3RyaW5nfSA9IHt9O1xuXG5cdFx0Zm9yIChjb25zdCBmaWVsZExheW91dCBvZiBhdHRyaWJ1dGlvbkZpZWxkc2V0LmdldEl0ZW1zKCkgYXMgT08udWkuRmllbGRMYXlvdXRbXSkge1xuXHRcdFx0Y29uc3QgZmllbGQgPSBmaWVsZExheW91dC5nZXRGaWVsZCgpO1xuXG5cdFx0XHRpZiAoZmllbGQuc3VwcG9ydHMoJ2dldFZhbHVlJykpIHtcblx0XHRcdFx0Y29uc3QgbGluayA9IChmaWVsZCBhcyBPTy51aS5UZXh0SW5wdXRXaWRnZXQpLmdldFZhbHVlKCk7XG5cdFx0XHRcdGlmIChsaW5rKSB7XG5cdFx0XHRcdFx0YXR0cmlidXRpb24uc291cmNlID0gZ2V0TGluayh7bGlua30pO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYgKGZpZWxkLnN1cHBvcnRzKCdnZXRNZW51JykpIHtcblx0XHRcdFx0Y29uc3QgbGluayA9IGdldFNlbGVjdGVkVmFsdWUoZmllbGQgYXMgT08udWkuRHJvcGRvd25XaWRnZXQpO1xuXG5cdFx0XHRcdGlmIChsaW5rKSB7XG5cdFx0XHRcdFx0Y29uc3QgdGV4dCA9IGdldFNlbGVjdGVkTGFiZWwoZmllbGQgYXMgT08udWkuRHJvcGRvd25XaWRnZXQpO1xuXG5cdFx0XHRcdFx0aWYgKHRleHQpIHtcblx0XHRcdFx0XHRcdGF0dHJpYnV0aW9uLmxpY2Vuc2UgPSBnZXRMaW5rKHtsaW5rLCB0ZXh0fSk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGF0dHJpYnV0aW9uLmxpY2Vuc2UgPSBnZXRMaW5rKHtsaW5rfSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKGF0dHJpYnV0aW9uLnNvdXJjZSAmJiBhdHRyaWJ1dGlvbi5saWNlbnNlKSB7XG5cdFx0XHRhdHRyaWJ1dGlvbnNbYXR0cmlidXRpb25zLmxlbmd0aF0gPVxuXHRcdFx0XHRgJHtnZXRNZXNzYWdlKCdTb3VyY2UnKX06ICR7YXR0cmlidXRpb24uc291cmNlfSAoJHtnZXRNZXNzYWdlKCdMaWNlbnNlJyl9OiAke2F0dHJpYnV0aW9uLmxpY2Vuc2V9KSBgO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBhdHRyaWJ1dGlvbnMuam9pbignICcpO1xufTtcblxuY29uc3QgdXBkYXRlV3BBdHRyaWJ1dGlvbiA9ICh7XG5cdCRib2R5LFxuXHRwYXJlbnRGaWVsZFNldCxcbn06IHtcblx0JGJvZHk6IEpRdWVyeTxIVE1MRWxlbWVudD47XG5cdHBhcmVudEZpZWxkU2V0OiBPTy51aS5GaWVsZHNldExheW91dDtcbn0pID0+IHtcblx0bGV0IHdwQXR0cmlidXRpb246IHN0cmluZyA9ICcnO1xuXG5cdGNvbnN0ICR3cEF0dHJpYnV0aW9uOiBKUXVlcnkgPSAkKCc8aW5wdXQ+JykuYXR0cih7XG5cdFx0aWQ6ICd3cEF0dHJpYnV0aW9uJyxcblx0XHRuYW1lOiAnd3BBdHRyaWJ1dGlvbicsXG5cdFx0dHlwZTogJ2hpZGRlbicsXG5cdFx0dmFsdWU6ICcnLFxuXHR9KTtcblx0Y29uc3QgJG9yaWdpbndwQXR0cmlidXRpb246IEpRdWVyeSA9ICRib2R5LmZpbmQoJ2lucHV0W25hbWU9d3BBdHRyaWJ1dGlvbl0nKTtcblx0aWYgKCEkb3JpZ2lud3BBdHRyaWJ1dGlvbi5sZW5ndGgpIHtcblx0XHQkYm9keS5wcmVwZW5kKCR3cEF0dHJpYnV0aW9uKTtcblx0fVxuXG5cdHdwQXR0cmlidXRpb24gPSBnZXRBdHRyaWJ1dGlvbihwYXJlbnRGaWVsZFNldCk7XG5cdCRvcmlnaW53cEF0dHJpYnV0aW9uLnZhbCh3cEF0dHJpYnV0aW9uKTtcbn07XG5cbmV4cG9ydCB7Z2V0QXR0cmlidXRpb24sIHVwZGF0ZVdwQXR0cmlidXRpb259O1xuIiwgImNvbnN0IGFwcGVuZFRleHRUb1N1bW1hcnkgPSAoe2N1c3RvbVN1bW1hcnksICR3cFN1bW1hcnl9OiB7Y3VzdG9tU3VtbWFyeTogc3RyaW5nOyAkd3BTdW1tYXJ5OiBKUXVlcnl9KTogdm9pZCA9PiB7XG5cdGNvbnN0IG9yaWdpblN1bW1hcnk6IHN0cmluZyA9ICgkd3BTdW1tYXJ5LnZhbCgpIGFzIHN0cmluZyB8IHVuZGVmaW5lZCkgPz8gJyc7XG5cblx0JHdwU3VtbWFyeS52YWwob3JpZ2luU3VtbWFyeS50cmltKCkgPyBgJHtvcmlnaW5TdW1tYXJ5fSAke2N1c3RvbVN1bW1hcnl9YCA6IGN1c3RvbVN1bW1hcnkpLnRyaWdnZXIoJ2NoYW5nZScpO1xufTtcblxuZXhwb3J0IHthcHBlbmRUZXh0VG9TdW1tYXJ5fTtcbiIsICJpbXBvcnQge2dldEF0dHJpYnV0aW9uLCB1cGRhdGVXcEF0dHJpYnV0aW9ufSBmcm9tICcuL2dldEF0dHJpYnV0aW9uJztcbmltcG9ydCB7TElDRU5TRVN9IGZyb20gJy4uL2NvbnN0YW50JztcbmltcG9ydCB7YXBwZW5kVGV4dFRvU3VtbWFyeX0gZnJvbSAnLi9hcHBlbmRUZXh0VG9TdW1tYXJ5JztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi4vaTE4bic7XG5cbmNvbnN0IGdldFRleHRJbnB1dCA9ICguLi5vbkNoYW5nZXM6ICgoKSA9PiB2b2lkKVtdKSA9PiB7XG5cdGNvbnN0IHRleHRJbnB1dCA9IG5ldyBPTy51aS5UZXh0SW5wdXRXaWRnZXQoe1xuXHRcdHBsYWNlaG9sZGVyOiBnZXRNZXNzYWdlKCdTb3VyY2UnKSxcblx0fSk7XG5cblx0Zm9yIChjb25zdCBvbkNoYW5nZSBvZiBvbkNoYW5nZXMpIHtcblx0XHR0ZXh0SW5wdXQub24oJ2NoYW5nZScsIG9uQ2hhbmdlKTtcblx0fVxuXG5cdHJldHVybiB0ZXh0SW5wdXQ7XG59O1xuXG5jb25zdCBnZXREcm9wRG93biA9ICguLi5vblNlbGVjdHM6ICgoKSA9PiB2b2lkKVtdKSA9PiB7XG5cdGNvbnN0IGRyb3Bkb3duOiBPTy51aS5Ecm9wZG93bldpZGdldCA9IG5ldyBPTy51aS5Ecm9wZG93bldpZGdldCh7XG5cdFx0bGFiZWw6IGdldE1lc3NhZ2UoJ0xpY2Vuc2UnKSxcblx0fSk7XG5cblx0Y29uc3QgbWVudU9wdGlvbnM6IE9PLnVpLk1lbnVPcHRpb25XaWRnZXRbXSA9IFtdO1xuXG5cdGZvciAoY29uc3Qge2RhdGEsIGxhYmVsfSBvZiBMSUNFTlNFUykge1xuXHRcdG1lbnVPcHRpb25zW21lbnVPcHRpb25zLmxlbmd0aF0gPSBuZXcgT08udWkuTWVudU9wdGlvbldpZGdldCh7XG5cdFx0XHRkYXRhLFxuXHRcdFx0bGFiZWwsXG5cdFx0fSk7XG5cdH1cblxuXHRkcm9wZG93bi5nZXRNZW51KCkuYWRkSXRlbXMobWVudU9wdGlvbnMpO1xuXG5cdGZvciAoY29uc3Qgb25TZWxlY3Qgb2Ygb25TZWxlY3RzKSB7XG5cdFx0ZHJvcGRvd24uZ2V0TWVudSgpLm9uKCdzZWxlY3QnLCBvblNlbGVjdCk7XG5cdH1cblxuXHRyZXR1cm4gZHJvcGRvd247XG59O1xuXG5jb25zdCBnZXRBZGRJdGVtQnV0dG9uID0gKC4uLm9uQ2xpY2tzOiAoKCkgPT4gdm9pZClbXSk6IE9PLnVpLkJ1dHRvbklucHV0V2lkZ2V0ID0+IHtcblx0Y29uc3QgYWRkSXRlbUJ1dHRvbiA9IG5ldyBPTy51aS5CdXR0b25JbnB1dFdpZGdldCh7XG5cdFx0bGFiZWw6IGdldE1lc3NhZ2UoJ0FkZCB0byBFZGl0IFN1bW1hcnknKSxcblx0fSk7XG5cblx0Zm9yIChjb25zdCBvbkNsaWNrIG9mIG9uQ2xpY2tzKSB7XG5cdFx0YWRkSXRlbUJ1dHRvbi5vbignY2xpY2snLCBvbkNsaWNrKTtcblx0fVxuXG5cdHJldHVybiBhZGRJdGVtQnV0dG9uO1xufTtcblxuY29uc3QgZ2VuZXJhdGVUZXh0SW5wdXRXaXRoRHJvcGRvd24gPSAoeyRib2R5LCAkd3BTdW1tYXJ5fTogeyRib2R5OiBKUXVlcnk8SFRNTEVsZW1lbnQ+OyAkd3BTdW1tYXJ5OiBKUXVlcnl9KSA9PiB7XG5cdGNvbnN0IGluaXRpYWxGaWVsZHNldCA9IG5ldyBPTy51aS5GaWVsZHNldExheW91dCgpO1xuXHRjb25zdCBwYXJlbnRGaWVsZFNldCA9IG5ldyBPTy51aS5GaWVsZHNldExheW91dCh7XG5cdFx0bGFiZWw6IGdldE1lc3NhZ2UoJ1BsZWFzZSBDbGFpbSBTb3VyY2VzIGFuZCBMaWNlbnNlcycpLFxuXHR9KTtcblxuXHRjb25zdCBpbnB1dE9uQ2hhbmdlID0gKCkgPT4ge1xuXHRcdHVwZGF0ZVdwQXR0cmlidXRpb24oeyRib2R5LCBwYXJlbnRGaWVsZFNldH0pO1xuXHR9O1xuXG5cdGNvbnN0IHRleHRJbnB1dCA9IGdldFRleHRJbnB1dChpbnB1dE9uQ2hhbmdlKTtcblx0Y29uc3QgZHJvcERvd24gPSBnZXREcm9wRG93bihpbnB1dE9uQ2hhbmdlKTtcblxuXHRjb25zdCBhZGRJdGVtT25DbGljayA9ICgpID0+IHtcblx0XHRsZXQgd3BBdHRyaWJ1dGlvbjogc3RyaW5nID0gJyc7XG5cblx0XHRjb25zdCAkd3BBdHRyaWJ1dGlvbjogSlF1ZXJ5ID0gJCgnPGlucHV0PicpLmF0dHIoe1xuXHRcdFx0aWQ6ICd3cEF0dHJpYnV0aW9uJyxcblx0XHRcdG5hbWU6ICd3cEF0dHJpYnV0aW9uJyxcblx0XHRcdHR5cGU6ICdoaWRkZW4nLFxuXHRcdFx0dmFsdWU6ICcnLFxuXHRcdH0pO1xuXG5cdFx0Y29uc3QgJG9yaWdpbndwQXR0cmlidXRpb246IEpRdWVyeTxIVE1MSW5wdXRFbGVtZW50PiA9XG5cdFx0XHQkYm9keS5maW5kPEhUTUxJbnB1dEVsZW1lbnQ+KCdpbnB1dFtuYW1lPXdwQXR0cmlidXRpb25dJyk7XG5cdFx0aWYgKCEkb3JpZ2lud3BBdHRyaWJ1dGlvbi5sZW5ndGgpIHtcblx0XHRcdCRib2R5LnByZXBlbmQoJHdwQXR0cmlidXRpb24pO1xuXHRcdH1cblxuXHRcdHdwQXR0cmlidXRpb24gPSBnZXRBdHRyaWJ1dGlvbihwYXJlbnRGaWVsZFNldCk7XG5cdFx0JG9yaWdpbndwQXR0cmlidXRpb24udmFsKHdwQXR0cmlidXRpb24pO1xuXG5cdFx0YXBwZW5kVGV4dFRvU3VtbWFyeSh7XG5cdFx0XHRjdXN0b21TdW1tYXJ5OiAkb3JpZ2lud3BBdHRyaWJ1dGlvbi52YWwoKSA/IGBbJHskb3JpZ2lud3BBdHRyaWJ1dGlvbi52YWwoKX1dYCA6ICcnLFxuXHRcdFx0JHdwU3VtbWFyeSxcblx0XHR9KTtcblxuXHRcdHRleHRJbnB1dC5zZXRWYWx1ZSgnJyk7XG5cdFx0ZHJvcERvd24uZ2V0TWVudSgpLnVuc2VsZWN0SXRlbSgpO1xuXHR9O1xuXG5cdGNvbnN0IGFkZEl0ZW1CdXR0b24gPSBnZXRBZGRJdGVtQnV0dG9uKGFkZEl0ZW1PbkNsaWNrKTtcblxuXHRpbml0aWFsRmllbGRzZXQuYWRkSXRlbXMoW1xuXHRcdG5ldyBPTy51aS5GaWVsZExheW91dCh0ZXh0SW5wdXQsIHtsYWJlbDogZ2V0TWVzc2FnZSgnU291cmNlJyksIGFsaWduOiAnaW5saW5lJ30pLFxuXHRcdG5ldyBPTy51aS5GaWVsZExheW91dChkcm9wRG93biwge2xhYmVsOiBnZXRNZXNzYWdlKCdMaWNlbnNlJyksIGFsaWduOiAnaW5saW5lJ30pLFxuXHRcdG5ldyBPTy51aS5GaWVsZExheW91dChhZGRJdGVtQnV0dG9uLCB7YWxpZ246ICdpbmxpbmUnfSksXG5cdF0pO1xuXG5cdHBhcmVudEZpZWxkU2V0LmFkZEl0ZW1zKFtpbml0aWFsRmllbGRzZXRdKTtcblxuXHRyZXR1cm4gcGFyZW50RmllbGRTZXQ7XG59O1xuXG5leHBvcnQge2dlbmVyYXRlVGV4dElucHV0V2l0aERyb3Bkb3dufTtcbiIsICIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW5zYWZlLWFyZ3VtZW50LCBtZWRpYXdpa2kvY2xhc3MtZG9jICovXG5pbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJ34vRWRpdGZvcm1fQXR0cmlidXRpb24vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7Zm9ybVdyYXB9IGZyb20gJy4vRWRpdGZvcm1fQXR0cmlidXRpb24ubW9kdWxlLmxlc3MnO1xuaW1wb3J0IHtnZW5lcmF0ZVRleHRJbnB1dFdpdGhEcm9wZG93bn0gZnJvbSAnLi9nZW5lcmF0ZVRleHRJbnB1dFdpdGhEcm9wZG93bic7XG5cbmludGVyZmFjZSBMYXlvdXRQcm9wcyB7XG5cdCRib2R5OiBKUXVlcnk8SFRNTEVsZW1lbnQ+O1xufVxuXG5jb25zdCBnZW5lcmF0ZVZpc3VhbEVkaXRvckxheW91dCA9ICh7JGJvZHl9OiBMYXlvdXRQcm9wcyk6IEpRdWVyeTxIVE1MRWxlbWVudD4gPT4ge1xuXHRjb25zdCB7dGFyZ2V0fSA9IHdpbmRvdy52ZS5pbml0O1xuXHRjb25zdCAkd3BTdW1tYXJ5ID0gdGFyZ2V0LnNhdmVEaWFsb2cuZWRpdFN1bW1hcnlJbnB1dC4kaW5wdXQ7XG5cdGNvbnN0IHRleHRJbnB1dFdpdGhEcm9wZG93biA9IGdlbmVyYXRlVGV4dElucHV0V2l0aERyb3Bkb3duKHskYm9keSwgJHdwU3VtbWFyeX0pO1xuXHRjb25zdCAkbGF5b3V0ID0gJCgnPGRpdj4nKS5hdHRyKCdpZCcsIE9QVElPTlMuaW5wdXRJZCkuYWRkQ2xhc3MoZm9ybVdyYXApO1xuXHQkbGF5b3V0LmFwcGVuZCh0ZXh0SW5wdXRXaXRoRHJvcGRvd24uJGVsZW1lbnQpO1xuXG5cdHJldHVybiAkbGF5b3V0O1xufTtcblxuY29uc3QgZ2VuZXJhdGVXaWtpRWRpdG9yTGF5b3V0ID0gKHskYm9keSwgJGVkaXRGb3JtfTogTGF5b3V0UHJvcHMgJiB7JGVkaXRGb3JtOiBKUXVlcnl9KTogSlF1ZXJ5PEhUTUxFbGVtZW50PiA9PiB7XG5cdGNvbnN0ICR3cFN1bW1hcnkgPSAkZWRpdEZvcm0uZmluZCgnaW5wdXRbbmFtZT13cFN1bW1hcnldJyk7XG5cdGNvbnN0IHRleHRJbnB1dFdpdGhEcm9wZG93biA9IGdlbmVyYXRlVGV4dElucHV0V2l0aERyb3Bkb3duKHskYm9keSwgJHdwU3VtbWFyeX0pO1xuXHRjb25zdCAkbGF5b3V0ID0gJCgnPGRpdj4nKS5hdHRyKCdpZCcsIE9QVElPTlMuaW5wdXRJZCkuYWRkQ2xhc3MoZm9ybVdyYXApO1xuXHQkbGF5b3V0LmFwcGVuZCh0ZXh0SW5wdXRXaXRoRHJvcGRvd24uJGVsZW1lbnQpO1xuXG5cdHJldHVybiAkbGF5b3V0O1xufTtcblxuZXhwb3J0IHtnZW5lcmF0ZVZpc3VhbEVkaXRvckxheW91dCwgZ2VuZXJhdGVXaWtpRWRpdG9yTGF5b3V0fTtcbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJ34vRWRpdGZvcm1fQXR0cmlidXRpb24vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7Z2VuZXJhdGVWaXN1YWxFZGl0b3JMYXlvdXR9IGZyb20gJy4vdXRpbC9nZW5lcmF0ZUxheW91dCc7XG5cbmNvbnN0IHByb2Nlc3NWaXN1YWxFZGl0b3IgPSAoeyRib2R5fTogeyRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pn0pOiB2b2lkID0+IHtcblx0Ly8gR3VhcmQgYWdhaW5zdCBkb3VibGUgaW5jbHVzaW9uc1xuXHRpZiAobXcuY29uZmlnLmdldChPUFRJT05TLmNvbmZpZ0tleVZlKSkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IHt0YXJnZXR9ID0gd2luZG93LnZlLmluaXQ7XG5cdGNvbnN0IHtzYXZlRGlhbG9nfSA9IHRhcmdldDtcblx0Y29uc3QgeyRzYXZlT3B0aW9uc30gPSBzYXZlRGlhbG9nO1xuXHRpZiAoISRzYXZlT3B0aW9ucy5sZW5ndGgpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHQvLyBTZXQgZ3VhcmRcblx0bXcuY29uZmlnLnNldChPUFRJT05TLmNvbmZpZ0tleVZlLCB0cnVlKTtcblxuXHRjb25zdCAkbGF5b3V0ID0gZ2VuZXJhdGVWaXN1YWxFZGl0b3JMYXlvdXQoeyRib2R5fSk7XG5cblx0aWYgKCEkYm9keS5maW5kKGAjJHtPUFRJT05TLmlucHV0SWR9YCkubGVuZ3RoKSB7XG5cdFx0JHNhdmVPcHRpb25zLmFwcGVuZCgkbGF5b3V0KTtcblx0fVxuXG5cdC8vIFJlaW5pdGlhbGl6YXRpb24gaXMgcmVxdWlyZWQgZm9yIHN3aXRjaGluZyBiZXR3ZWVuIFZpc3VhbEVkaXRvciBhbmQgTmV3IFdpa2l0ZXh0IEVkaXRvciAoMjAxNylcblx0bXcuaG9vaygndmUuYWN0aXZhdGlvbkNvbXBsZXRlJykuYWRkKCgpID0+IHtcblx0XHRpZiAobXcuY29uZmlnLmdldChPUFRJT05TLmNvbmZpZ0tleVZlKSkge1xuXHRcdFx0bXcuY29uZmlnLnNldChPUFRJT05TLmNvbmZpZ0tleVZlLCBmYWxzZSk7XG5cdFx0fVxuXHR9KTtcbn07XG5cbmV4cG9ydCB7cHJvY2Vzc1Zpc3VhbEVkaXRvcn07XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICd+L0VkaXRmb3JtX0F0dHJpYnV0aW9uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge2dlbmVyYXRlV2lraUVkaXRvckxheW91dH0gZnJvbSAnLi91dGlsL2dlbmVyYXRlTGF5b3V0JztcblxuY29uc3QgcHJvY2Vzc1dpa2lFZGl0b3IgPSAoeyRib2R5LCAkZWRpdEZvcm19OiB7JGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+OyAkZWRpdEZvcm06IEpRdWVyeX0pOiB2b2lkID0+IHtcblx0Ly8gR3VhcmQgYWdhaW5zdCBkb3VibGUgaW5jbHVzaW9uc1xuXHRpZiAobXcuY29uZmlnLmdldChPUFRJT05TLmNvbmZpZ0tleSkpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCAkdGFyZ2V0OiBKUXVlcnkgPSAkZWRpdEZvcm0uZmluZChPUFRJT05TLnRhcmdldFdpa2lFZGl0b3IpO1xuXHRpZiAoISR0YXJnZXQubGVuZ3RoKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0bXcuY29uZmlnLnNldChPUFRJT05TLmNvbmZpZ0tleSwgdHJ1ZSk7XG5cblx0Y29uc3QgJGxheW91dCA9IGdlbmVyYXRlV2lraUVkaXRvckxheW91dCh7JGJvZHksICRlZGl0Rm9ybX0pO1xuXG5cdGlmICghJGJvZHkuZmluZChgIyR7T1BUSU9OUy5pbnB1dElkfWApLmxlbmd0aCkge1xuXHRcdCR0YXJnZXQuYWZ0ZXIoJGxheW91dCk7XG5cdH1cbn07XG5cbmV4cG9ydCB7cHJvY2Vzc1dpa2lFZGl0b3J9O1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEscUJBQXNCQyxRQUFBLGlCQUFBOztBQ0NyQixJQUFBQyxZQUFhO0FBQ2IsSUFBQUMsY0FBZTtBQUVmLElBQUFDLFVBQVc7QUFDWCxJQUFBQyxtQkFBb0I7O0FDSmQsSUFBTUMsV0FBVzs7QUNEeEIsSUFBQUMsb0JBQXVCTixRQUFBLGlCQUFBO0FBRXZCLElBQU1PLGtCQUFrQkEsTUFBTTtBQUM3QixTQUFPO0lBQ04sd0JBQUEsR0FBdUJELGtCQUFBRSxVQUFTO01BQy9CQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0RDLFNBQUEsR0FBUUosa0JBQUFFLFVBQVM7TUFDaEJDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDREUsVUFBQSxHQUFTTCxrQkFBQUUsVUFBUztNQUNqQkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNELGtCQUFBLEdBQWlCSCxrQkFBQUUsVUFBUztNQUN6QkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNELHNDQUFBLEdBQXFDSCxrQkFBQUUsVUFBUztNQUM3Q0MsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNELHlCQUFBLEdBQXdCSCxrQkFBQUUsVUFBUztNQUNoQ0MsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztFQUNGO0FBQ0Q7QUFFQSxJQUFNRyxlQUFlTCxnQkFBZ0I7QUFFckMsSUFBTU0sYUFBZ0RDLFNBQVE7QUFD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R0MsT0FBT0MsSUFBWTlJLFNBQVMsR0FBRztBQUNyQztFQUNEO0FBRUEsUUFBTW9KLFVBQWtCVixVQUFVL0QsS0FBYXhFLGdCQUFnQjtBQUMvRCxNQUFJLENBQUNpSixRQUFRckYsUUFBUTtBQUNwQjtFQUNEO0FBRUE2RSxLQUFHQyxPQUFPRyxJQUFZaEosV0FBVyxJQUFJO0FBRXJDLFFBQU1xSSxVQUFVSSx5QkFBeUI7SUFBQ3hFO0lBQU95RTtFQUFTLENBQUM7QUFFM0QsTUFBSSxDQUFDekUsTUFBTVUsS0FBQSxJQUFBcEQsT0FBaUJyQixPQUFPLENBQUUsRUFBRTZELFFBQVE7QUFDOUNxRixZQUFRQyxNQUFNaEIsT0FBTztFQUN0QjtBQUNEOztBWGRBLE1BQUEsR0FBS3ZJLG1CQUFBd0osU0FBUSxFQUFFQyxLQUFLLFNBQVNDLFNBQVN2RixPQUFzQztBQUMzRTJFLEtBQUdLLEtBQUssbUJBQW1CLEVBQUVDLElBQUtSLGVBQW9CO0FBQ3JEUyxzQkFBa0I7TUFDakJsRjtNQUNBeUU7SUFDRCxDQUFDO0VBQ0YsQ0FBQztBQUVERSxLQUFHSyxLQUFLLDRCQUE0QixFQUFFQyxJQUFJLE1BQVk7QUFDckRQLHdCQUFvQjtNQUFDMUU7SUFBSyxDQUFDO0VBQzVCLENBQUM7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogWyJpbXBvcnRfZXh0X2dhZGdldDIiLCAicmVxdWlyZSIsICJjb25maWdLZXkiLCAiY29uZmlnS2V5VmUiLCAiaW5wdXRJZCIsICJ0YXJnZXRXaWtpRWRpdG9yIiwgImZvcm1XcmFwIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgImdldEkxOG5NZXNzYWdlcyIsICJsb2NhbGl6ZSIsICJlbiIsICJTb3VyY2UiLCAiTGljZW5zZSIsICJpMThuTWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAiTElDRU5TRVMiLCAibGFiZWwiLCAiZGF0YSIsICJWQUxJRF9JTlRFUldJS0lfUFJFRklYIiwgImdldExpbmsiLCAibGluayIsICJ0ZXh0IiwgIlZBTElEX0lOVEVSV0lLSV9MSU5LX1JFR0VYIiwgIlJlZ0V4cCIsICJjb25jYXQiLCAiam9pbiIsICJ0ZXN0IiwgInJlcGxhY2UiLCAiZW5jb2RlVVJJIiwgImRlY29kZVVSSSIsICJnZXRBdHRyaWJ1dGlvbiIsICJmaWVsZFNldExheW91dCIsICJhdHRyaWJ1dGlvbnMiLCAiZ2V0U2VsZWN0ZWRJdGVtIiwgImRyb3Bkb3duIiwgInNlbGVjdGVkSXRlbSIsICJnZXRNZW51IiwgImZpbmRTZWxlY3RlZEl0ZW0iLCAiZ2V0U2VsZWN0ZWRWYWx1ZSIsICJnZXREYXRhIiwgImdldFNlbGVjdGVkTGFiZWwiLCAiZ2V0TGFiZWwiLCAiX2l0ZXJhdG9yIiwgIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwgImdldEl0ZW1zIiwgIl9zdGVwIiwgInMiLCAibiIsICJkb25lIiwgImF0dHJpYnV0aW9uRmllbGRzZXQiLCAidmFsdWUiLCAiYXR0cmlidXRpb24iLCAiX2l0ZXJhdG9yMiIsICJfc3RlcDIiLCAiZmllbGRMYXlvdXQiLCAiZmllbGQiLCAiZ2V0RmllbGQiLCAic3VwcG9ydHMiLCAiZ2V0VmFsdWUiLCAic291cmNlIiwgImxpY2Vuc2UiLCAiZXJyIiwgImUiLCAiZiIsICJsZW5ndGgiLCAidXBkYXRlV3BBdHRyaWJ1dGlvbiIsICIkYm9keSIsICJwYXJlbnRGaWVsZFNldCIsICJ3cEF0dHJpYnV0aW9uIiwgIiR3cEF0dHJpYnV0aW9uIiwgIiQiLCAiYXR0ciIsICJpZCIsICJuYW1lIiwgInR5cGUiLCAiJG9yaWdpbndwQXR0cmlidXRpb24iLCAiZmluZCIsICJwcmVwZW5kIiwgInZhbCIsICJhcHBlbmRUZXh0VG9TdW1tYXJ5IiwgImN1c3RvbVN1bW1hcnkiLCAiJHdwU3VtbWFyeSIsICJfJHdwU3VtbWFyeSR2YWwiLCAib3JpZ2luU3VtbWFyeSIsICJ0cmltIiwgInRyaWdnZXIiLCAiZ2V0VGV4dElucHV0IiwgIm9uQ2hhbmdlcyIsICJ0ZXh0SW5wdXQiLCAiT08iLCAidWkiLCAiVGV4dElucHV0V2lkZ2V0IiwgInBsYWNlaG9sZGVyIiwgIl9pIiwgIl9vbkNoYW5nZXMiLCAib25DaGFuZ2UiLCAib24iLCAiZ2V0RHJvcERvd24iLCAib25TZWxlY3RzIiwgIkRyb3Bkb3duV2lkZ2V0IiwgIm1lbnVPcHRpb25zIiwgIl9pMiIsICJfTElDRU5TRVMiLCAiTWVudU9wdGlvbldpZGdldCIsICJhZGRJdGVtcyIsICJfaTMiLCAiX29uU2VsZWN0cyIsICJvblNlbGVjdCIsICJnZXRBZGRJdGVtQnV0dG9uIiwgIm9uQ2xpY2tzIiwgImFkZEl0ZW1CdXR0b24iLCAiQnV0dG9uSW5wdXRXaWRnZXQiLCAiX2k0IiwgIl9vbkNsaWNrcyIsICJvbkNsaWNrIiwgImdlbmVyYXRlVGV4dElucHV0V2l0aERyb3Bkb3duIiwgImluaXRpYWxGaWVsZHNldCIsICJGaWVsZHNldExheW91dCIsICJpbnB1dE9uQ2hhbmdlIiwgImRyb3BEb3duIiwgImFkZEl0ZW1PbkNsaWNrIiwgInNldFZhbHVlIiwgInVuc2VsZWN0SXRlbSIsICJGaWVsZExheW91dCIsICJhbGlnbiIsICJnZW5lcmF0ZVZpc3VhbEVkaXRvckxheW91dCIsICJ0YXJnZXQiLCAid2luZG93IiwgInZlIiwgImluaXQiLCAic2F2ZURpYWxvZyIsICJlZGl0U3VtbWFyeUlucHV0IiwgIiRpbnB1dCIsICJ0ZXh0SW5wdXRXaXRoRHJvcGRvd24iLCAiJGxheW91dCIsICJhZGRDbGFzcyIsICJhcHBlbmQiLCAiJGVsZW1lbnQiLCAiZ2VuZXJhdGVXaWtpRWRpdG9yTGF5b3V0IiwgIiRlZGl0Rm9ybSIsICJwcm9jZXNzVmlzdWFsRWRpdG9yIiwgIm13IiwgImNvbmZpZyIsICJnZXQiLCAiJHNhdmVPcHRpb25zIiwgInNldCIsICJob29rIiwgImFkZCIsICJwcm9jZXNzV2lraUVkaXRvciIsICIkdGFyZ2V0IiwgImFmdGVyIiwgImdldEJvZHkiLCAidGhlbiIsICJlZGl0Rm9ybSJdCn0K

/**
 * SPDX-License-Identifier: MIT
 * _addText: '{{Gadget Header|license=MIT|attribution=Diskdance, et. al.}}'
 *
 * @base {@link https://zh.wikipedia.org/wiki/MediaWiki:Gadget-PreviewWithVariant.js}
 * @base {@link https://zh.wikipedia.org/wiki/MediaWiki:Gadget-PreviewWithVariant2017.js}
 * @base {@link https://zh.wikipedia.org/wiki/MediaWiki:Gadget-PreviewWithVariant2017.css}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/PreviewWithVariant}
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

// dist/PreviewWithVariant/PreviewWithVariant.js
function _createForOfIteratorHelper(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it)
        o = it;
      var i = 0;
      var F = function() {
      };
      return { s: F, n: function() {
        if (i >= o.length)
          return { done: true };
        return { done: false, value: o[i++] };
      }, e: function(e) {
        throw e;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var normalCompletion = true, didErr = false, err;
  return { s: function() {
    it = it.call(o);
  }, n: function() {
    var step = it.next();
    normalCompletion = step.done;
    return step;
  }, e: function(e) {
    didErr = true;
    err = e;
  }, f: function() {
    try {
      if (!normalCompletion && it.return != null)
        it.return();
    } finally {
      if (didErr)
        throw err;
    }
  } };
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
//! src/PreviewWithVariant/options.json
var configKey = "gadget-PreviewWithVariant__Initialized";
//! src/PreviewWithVariant/modules/constant.ts
var CLASS_NAME = "pwv-2017-variant";
var VARIANTS = [{
  data: "zh",
  label: window.wgULS("不转换", "不轉換")
}, {
  data: "zh-hans",
  label: "简体"
}, {
  data: "zh-hant",
  label: "繁體"
}, {
  data: "zh-cn",
  label: "中国大陆简体"
}, {
  data: "zh-hk",
  label: "中國香港繁體"
}, {
  data: "zh-mo",
  label: "中國澳門繁體"
}, {
  data: "zh-my",
  label: "马来西亚简体"
}, {
  data: "zh-sg",
  label: "新加坡简体"
}, {
  data: "zh-tw",
  label: "中國臺灣繁體"
}];
var DATA = [{
  var: "zh",
  htmlLang: "zh",
  msg: "pwv-2017-zh"
}, {
  var: "zh-hans",
  htmlLang: "zh-Hans",
  msg: "pwv-2017-zh-hans"
}, {
  var: "zh-hant",
  htmlLang: "zh-Hant",
  msg: "pwv-2017-zh-hant"
}, {
  var: "zh-cn",
  htmlLang: "zh-Hans-CN",
  msg: "pwv-2017-zh-cn"
}, {
  var: "zh-hk",
  htmlLang: "zh-Hant-HK",
  msg: "pwv-2017-zh-hk"
}, {
  var: "zh-mo",
  htmlLang: "zh-Hant-MO",
  msg: "pwv-2017-zh-mo"
}, {
  var: "zh-my",
  htmlLang: "zh-Hans-MY",
  msg: "pwv-2017-zh-my"
}, {
  var: "zh-sg",
  htmlLang: "zh-Hans-SG",
  msg: "pwv-2017-zh-sg"
}, {
  var: "zh-tw",
  htmlLang: "zh-Hant-TW",
  msg: "pwv-2017-zh-tw"
}];
var WG_SKIN = mw.config.get("skin");
var WG_PAGE_CONTENT_MODEL = mw.config.get("wgPageContentModel");
var WG_USER_LANGUAGE = mw.config.get("wgUserLanguage");
var WG_USER_VARIANT = mw.config.get("wgUserVariant");
//! src/PreviewWithVariant/modules/messages.ts
var PWV2017messages = () => {
  mw.messages.set({
    "pwv-2017-caption": window.wgULS("选择语言变体", "選擇語言變體"),
    "pwv-2017-zh": window.wgULS("不转换", "不轉換"),
    "pwv-2017-zh-hans": "简体",
    "pwv-2017-zh-hant": "繁體",
    "pwv-2017-zh-cn": "大陆简体",
    "pwv-2017-zh-hk": "香港繁體",
    "pwv-2017-zh-mo": "澳門繁體",
    "pwv-2017-zh-my": "大马简体",
    "pwv-2017-zh-sg": "新加坡简体",
    "pwv-2017-zh-tw": "臺灣正體"
  });
};
//! src/PreviewWithVariant/modules/processVisualEditor.js
mw.config.set(configKey, false);
PWV2017messages();
var PendingStackLayout = function PendingStackLayout2(config) {
  PendingStackLayout2.super.call(this, config);
  OO.ui.mixin.PendingElement.call(this);
  this.$element.addClass("pwv-2017-pendingStackLayout");
};
OO.inheritClass(PendingStackLayout, OO.ui.StackLayout);
OO.mixinClass(PendingStackLayout, OO.ui.mixin.PendingElement);
var processVisualEditor = () => {
  let variant, target, dialog, dropdown, stackLayout, panelLayouts, windowManager, errorDialog;
  const constructDocument = (title, wikitext, categories) => {
    const $result = $("<div>").addClass("mw-body mw-body-content");
    if (WG_SKIN === "vector") {
      $result.addClass("vector-body");
    }
    $result.append(
      $("<h1>").addClass("firstHeading").html(title),
      // Classes used here:
      // * mw-content-ltr
      // * mw-content-rtl
      $("<div>").addClass("mw-content-".concat(mw.config.get("wgVisualEditor").pageLanguageDir)).attr("lang", DATA.find((item) => {
        return item.var === variant;
      }).htmlLang).html(wikitext),
      $.parseHTML(categories)
    );
    mw.hook("wikipage.content").fire($result);
    ve.targetLinksToNewWindow($result[0]);
    return $result;
  };
  const fetchPreview = () => {
    const deferred = $.Deferred();
    target.getContentApi().post({
      action: "parse",
      disableeditsection: true,
      errorformat: "html",
      errorlang: WG_USER_LANGUAGE,
      errorsuselocal: true,
      formatversion: 2,
      prop: "text|indicators|displaytitle|categorieshtml|parsewarningshtml",
      pst: true,
      preview: true,
      title: target.getPageName(),
      text: target.getDocToSave(),
      uselang: WG_USER_LANGUAGE,
      variant
    }).then((response) => {
      void deferred.resolve(constructDocument(response.parse.displaytitle, response.parse.text, response.parse.categorieshtml));
    }, (error, detail) => {
      void deferred.reject(detail);
    });
    return deferred;
  };
  const changeVariant = function changeVariant2(val) {
    dialog.previewPanel.$element[0].focus();
    variant = val;
    const targetPanel = stackLayout.findItemFromData(variant);
    if (targetPanel.$element.children().length) {
      stackLayout.setItem(targetPanel);
    } else {
      stackLayout.pushPending();
      dropdown.setDisabled(true);
      void fetchPreview().then(($previewContainer) => {
        targetPanel.$element.append($previewContainer);
        stackLayout.setItem(targetPanel);
      }, (error) => {
        windowManager.openWindow(errorDialog, {
          title: OO.ui.msg("ooui-dialog-process-error"),
          // eslint-disable-next-line no-undef
          message: ve.init.target.getContentApi().getErrorMessage(error),
          actions: [{
            action: "reject",
            label: OO.ui.deferMsg("ooui-dialog-message-reject"),
            flags: "safe"
          }, {
            action: "retry",
            label: OO.ui.deferMsg("ooui-dialog-process-retry"),
            flags: ["primary", "progressive"]
          }]
        }).closed.then((data) => {
          if (data && data.action === "retry") {
            changeVariant2(variant);
          } else {
            dropdown.setValue(stackLayout.getCurrentItem().getData());
          }
        });
      }).always(() => {
        stackLayout.popPending();
        dropdown.setDisabled(false);
      });
    }
  };
  const previewWithVariant = () => {
    const currentPanel = stackLayout.getCurrentItem();
    if (currentPanel.$element.children().length) {
      dialog.swapPanel("preview");
      dialog.previewPanel.$element.prepend(dropdown.$element);
    } else {
      target.emit("savePreview");
      dialog.pushPending();
      void fetchPreview().then(($previewContent) => {
        target.getSurface().getModel().getDocument().once("transact", () => {
          var _iterator = _createForOfIteratorHelper(panelLayouts), _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done; ) {
              const item = _step.value;
              item.$element.empty();
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        });
        dialog.swapPanel("preview");
        currentPanel.$element.append($previewContent);
        stackLayout.setItem(stackLayout.findItemFromData(variant));
        const $body = $("body");
        if (!$body.find(".".concat(CLASS_NAME)).length) {
          dialog.previewPanel.$element.prepend(dropdown.$element);
        }
      }, (error) => {
        dialog.showErrors(
          // eslint-disable-next-line no-undef
          new OO.ui.Error(ve.init.target.getContentApi().getErrorMessage(error), {
            recoverable: true
          })
        );
      }).always(() => {
        dialog.popPending();
      });
    }
  };
  const init = () => {
    variant = WG_USER_VARIANT;
    ({
      target
    } = ve.init);
    dialog = target.saveDialog;
    dropdown = new OO.ui.DropdownInputWidget({
      $overlay: dialog.$overlay,
      classes: [CLASS_NAME],
      options: [{
        optgroup: mw.msg("pwv-2017-caption")
      }, ...DATA.map((item) => {
        return {
          data: item.var,
          label: mw.msg(item.msg)
        };
      })],
      value: variant
    });
    dropdown.on("change", changeVariant);
    panelLayouts = DATA.map((item) => {
      return new OO.ui.PanelLayout({
        expanded: false,
        data: item.var
      });
    });
    stackLayout = new PendingStackLayout({
      expanded: false,
      items: panelLayouts
    });
    stackLayout.setItem(stackLayout.findItemFromData(variant));
    dialog.previewPanel.$element.append(stackLayout.$element);
    errorDialog = new OO.ui.MessageDialog();
    windowManager = new OO.ui.WindowManager();
    windowManager.addWindows([errorDialog]);
    const $body = $("body");
    $body.append(windowManager.$element);
    const handlerToRemove = "onSaveDialogPreview";
    dialog.off("preview", handlerToRemove, target).on("preview", previewWithVariant);
    mw.hook("ve.activationComplete").add(() => {
      if (mw.config.get(configKey)) {
        mw.config.set(configKey, false);
      }
    });
  };
  if (!mw.config.get(configKey)) {
    init();
    mw.config.set(configKey, true);
  }
};
//! src/PreviewWithVariant/modules/processWikiEditor.ts
var processWikiEditor = () => {
  mw.hook("wikipage.editform").add(($editForm) => {
    if (mw.config.get(configKey)) {
      return;
    }
    const $templateSandboxPreview = $editForm.find('input[name="wpTemplateSandboxPreview"]');
    if (WG_PAGE_CONTENT_MODEL !== "wikitext" && !$templateSandboxPreview.length) {
      return;
    }
    const $layout = $editForm.find(".editCheckboxes .oo-ui-horizontalLayout");
    if (!$layout.length) {
      return;
    }
    mw.config.set(configKey, true);
    const uriVariant = mw.util.getParamValue("variant");
    const checkbox = new OO.ui.CheckboxInputWidget({
      selected: Boolean(uriVariant)
    });
    const dropdown = new OO.ui.DropdownWidget({
      $overlay: true,
      disabled: !checkbox.isSelected(),
      menu: {
        items: VARIANTS.map(({
          data,
          label
        }) => {
          return new OO.ui.MenuOptionWidget({
            data,
            label
          });
        })
      }
    });
    dropdown.getMenu().selectItemByData(WG_USER_VARIANT || uriVariant || mw.user.options.get("variant"));
    checkbox.on("change", (selected) => {
      dropdown.setDisabled(!selected);
    });
    const getSelectedVariant = () => {
      if (!checkbox.isSelected()) {
        return;
      }
      const selectedItem = dropdown.getMenu().findSelectedItem();
      return selectedItem ? selectedItem.getData() : void 0;
    };
    const manipulateActionUrl = () => {
      const selectedVariant = getSelectedVariant();
      const originalAction = $editForm.attr("action");
      if (selectedVariant && originalAction) {
        $editForm.attr("action", new mw.Uri(originalAction).extend({
          variant: selectedVariant
        }).getRelativePath());
      }
    };
    const manipulateVariantConfig = () => {
      mw.config.set("wgUserVariant", getSelectedVariant() || mw.user.options.get("variant"));
    };
    $editForm.find("input[name=wpPreview]").on("click", mw.user.options.get("uselivepreview") ? manipulateVariantConfig : manipulateActionUrl);
    $templateSandboxPreview.on("click", manipulateActionUrl);
    dropdown.getMenu().on("select", manipulateVariantConfig);
    const checkboxField = new OO.ui.FieldLayout(checkbox, {
      align: "inline",
      label: window.wgULS("预览字词转换", "預覽字詞轉換")
    });
    const dropdownField = new OO.ui.FieldLayout(dropdown, {
      align: "top",
      label: window.wgULS("使用该语言变体显示预览：", "使用該語言變體顯示預覽："),
      invisibleLabel: true
    });
    $layout.append($("<div>").attr("id", "pwv-area").append(checkboxField.$element, dropdownField.$element));
  });
};
//! src/PreviewWithVariant/PreviewWithVariant.ts
(function previewWithVariants() {
  mw.hook("wikipage.editform").add(() => {
    processWikiEditor();
  });
  mw.hook("ve.saveDialog.stateChanged").add(() => {
    processVisualEditor();
  });
})();

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1ByZXZpZXdXaXRoVmFyaWFudC9vcHRpb25zLmpzb24iLCAic3JjL1ByZXZpZXdXaXRoVmFyaWFudC9tb2R1bGVzL2NvbnN0YW50LnRzIiwgInNyYy9QcmV2aWV3V2l0aFZhcmlhbnQvbW9kdWxlcy9tZXNzYWdlcy50cyIsICJzcmMvUHJldmlld1dpdGhWYXJpYW50L21vZHVsZXMvcHJvY2Vzc1Zpc3VhbEVkaXRvci5qcyIsICJzcmMvUHJldmlld1dpdGhWYXJpYW50L21vZHVsZXMvcHJvY2Vzc1dpa2lFZGl0b3IudHMiLCAic3JjL1ByZXZpZXdXaXRoVmFyaWFudC9QcmV2aWV3V2l0aFZhcmlhbnQudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIntcblx0XCJjb25maWdLZXlcIjogXCJnYWRnZXQtUHJldmlld1dpdGhWYXJpYW50X19Jbml0aWFsaXplZFwiXG59XG4iLCAiY29uc3QgQ0xBU1NfTkFNRSA9ICdwd3YtMjAxNy12YXJpYW50JztcblxuY29uc3QgVkFSSUFOVFM6IHtcblx0ZGF0YTogc3RyaW5nO1xuXHRsYWJlbDogc3RyaW5nO1xufVtdID0gW1xuXHR7XG5cdFx0ZGF0YTogJ3poJyxcblx0XHRsYWJlbDogd2luZG93LndnVUxTKCfkuI3ovazmjaInLCAn5LiN6L2J5o+bJyksXG5cdH0sXG5cdHtcblx0XHRkYXRhOiAnemgtaGFucycsXG5cdFx0bGFiZWw6ICfnroDkvZMnLFxuXHR9LFxuXHR7XG5cdFx0ZGF0YTogJ3poLWhhbnQnLFxuXHRcdGxhYmVsOiAn57mB6auUJyxcblx0fSxcblx0e1xuXHRcdGRhdGE6ICd6aC1jbicsXG5cdFx0bGFiZWw6ICfkuK3lm73lpKfpmYbnroDkvZMnLFxuXHR9LFxuXHR7XG5cdFx0ZGF0YTogJ3poLWhrJyxcblx0XHRsYWJlbDogJ+S4reWci+mmmea4r+e5gemrlCcsXG5cdH0sXG5cdHtcblx0XHRkYXRhOiAnemgtbW8nLFxuXHRcdGxhYmVsOiAn5Lit5ZyL5r6z6ZaA57mB6auUJyxcblx0fSxcblx0e1xuXHRcdGRhdGE6ICd6aC1teScsXG5cdFx0bGFiZWw6ICfpqazmnaXopb/kuprnroDkvZMnLFxuXHR9LFxuXHR7XG5cdFx0ZGF0YTogJ3poLXNnJyxcblx0XHRsYWJlbDogJ+aWsOWKoOWdoeeugOS9kycsXG5cdH0sXG5cdHtcblx0XHRkYXRhOiAnemgtdHcnLFxuXHRcdGxhYmVsOiAn5Lit5ZyL6Ie654Gj57mB6auUJyxcblx0fSxcbl07XG5cbmNvbnN0IERBVEEgPSBbXG5cdHt2YXI6ICd6aCcsIGh0bWxMYW5nOiAnemgnLCBtc2c6ICdwd3YtMjAxNy16aCd9LFxuXHR7dmFyOiAnemgtaGFucycsIGh0bWxMYW5nOiAnemgtSGFucycsIG1zZzogJ3B3di0yMDE3LXpoLWhhbnMnfSxcblx0e3ZhcjogJ3poLWhhbnQnLCBodG1sTGFuZzogJ3poLUhhbnQnLCBtc2c6ICdwd3YtMjAxNy16aC1oYW50J30sXG5cdHt2YXI6ICd6aC1jbicsIGh0bWxMYW5nOiAnemgtSGFucy1DTicsIG1zZzogJ3B3di0yMDE3LXpoLWNuJ30sXG5cdHt2YXI6ICd6aC1oaycsIGh0bWxMYW5nOiAnemgtSGFudC1ISycsIG1zZzogJ3B3di0yMDE3LXpoLWhrJ30sXG5cdHt2YXI6ICd6aC1tbycsIGh0bWxMYW5nOiAnemgtSGFudC1NTycsIG1zZzogJ3B3di0yMDE3LXpoLW1vJ30sXG5cdHt2YXI6ICd6aC1teScsIGh0bWxMYW5nOiAnemgtSGFucy1NWScsIG1zZzogJ3B3di0yMDE3LXpoLW15J30sXG5cdHt2YXI6ICd6aC1zZycsIGh0bWxMYW5nOiAnemgtSGFucy1TRycsIG1zZzogJ3B3di0yMDE3LXpoLXNnJ30sXG5cdHt2YXI6ICd6aC10dycsIGh0bWxMYW5nOiAnemgtSGFudC1UVycsIG1zZzogJ3B3di0yMDE3LXpoLXR3J30sXG5dO1xuXG5jb25zdCBXR19TS0lOID0gbXcuY29uZmlnLmdldCgnc2tpbicpO1xuXG5jb25zdCBXR19QQUdFX0NPTlRFTlRfTU9ERUwgPSBtdy5jb25maWcuZ2V0KCd3Z1BhZ2VDb250ZW50TW9kZWwnKTtcblxuY29uc3QgV0dfVVNFUl9MQU5HVUFHRTogc3RyaW5nID0gbXcuY29uZmlnLmdldCgnd2dVc2VyTGFuZ3VhZ2UnKTtcblxuY29uc3QgV0dfVVNFUl9WQVJJQU5UOiBzdHJpbmcgfCBudWxsID0gbXcuY29uZmlnLmdldCgnd2dVc2VyVmFyaWFudCcpO1xuXG5leHBvcnQge0NMQVNTX05BTUUsIERBVEEsIFdHX1NLSU4sIFdHX1VTRVJfTEFOR1VBR0UsIFZBUklBTlRTLCBXR19QQUdFX0NPTlRFTlRfTU9ERUwsIFdHX1VTRVJfVkFSSUFOVH07XG4iLCAiY29uc3QgUFdWMjAxN21lc3NhZ2VzID0gKCkgPT4ge1xuXHRtdy5tZXNzYWdlcy5zZXQoe1xuXHRcdCdwd3YtMjAxNy1jYXB0aW9uJzogd2luZG93LndnVUxTKCfpgInmi6nor63oqIDlj5jkvZMnLCAn6YG45pOH6Kqe6KiA6K6K6auUJyksXG5cdFx0J3B3di0yMDE3LXpoJzogd2luZG93LndnVUxTKCfkuI3ovazmjaInLCAn5LiN6L2J5o+bJyksXG5cdFx0J3B3di0yMDE3LXpoLWhhbnMnOiAn566A5L2TJyxcblx0XHQncHd2LTIwMTctemgtaGFudCc6ICfnuYHpq5QnLFxuXHRcdCdwd3YtMjAxNy16aC1jbic6ICflpKfpmYbnroDkvZMnLFxuXHRcdCdwd3YtMjAxNy16aC1oayc6ICfpppnmuK/nuYHpq5QnLFxuXHRcdCdwd3YtMjAxNy16aC1tbyc6ICfmvrPploDnuYHpq5QnLFxuXHRcdCdwd3YtMjAxNy16aC1teSc6ICflpKfpqaznroDkvZMnLFxuXHRcdCdwd3YtMjAxNy16aC1zZyc6ICfmlrDliqDlnaHnroDkvZMnLFxuXHRcdCdwd3YtMjAxNy16aC10dyc6ICfoh7rngaPmraPpq5QnLFxuXHR9KTtcbn07XG5cbmV4cG9ydCB7UFdWMjAxN21lc3NhZ2VzfTtcbiIsICIvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10cy1jb21tZW50XG4vLyBAdHMtbm9jaGVja1xuaW1wb3J0ICcuL3Byb2Nlc3NWaXN1YWxFZGl0b3IubGVzcyc7XG5pbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge0NMQVNTX05BTUUsIERBVEEsIFdHX1NLSU4sIFdHX1VTRVJfTEFOR1VBR0UsIFdHX1VTRVJfVkFSSUFOVH0gZnJvbSAnLi9jb25zdGFudCc7XG5pbXBvcnQge1BXVjIwMTdtZXNzYWdlc30gZnJvbSAnLi9tZXNzYWdlcyc7XG5cbm13LmNvbmZpZy5zZXQoT1BUSU9OUy5jb25maWdLZXksIGZhbHNlKTtcblxuUFdWMjAxN21lc3NhZ2VzKCk7XG5cbmNvbnN0IFBlbmRpbmdTdGFja0xheW91dCA9IGZ1bmN0aW9uIFBlbmRpbmdTdGFja0xheW91dChjb25maWcpIHtcblx0UGVuZGluZ1N0YWNrTGF5b3V0LnN1cGVyLmNhbGwodGhpcywgY29uZmlnKTtcblx0T08udWkubWl4aW4uUGVuZGluZ0VsZW1lbnQuY2FsbCh0aGlzKTtcblx0dGhpcy4kZWxlbWVudC5hZGRDbGFzcygncHd2LTIwMTctcGVuZGluZ1N0YWNrTGF5b3V0Jyk7XG59O1xuXG5PTy5pbmhlcml0Q2xhc3MoUGVuZGluZ1N0YWNrTGF5b3V0LCBPTy51aS5TdGFja0xheW91dCk7XG5PTy5taXhpbkNsYXNzKFBlbmRpbmdTdGFja0xheW91dCwgT08udWkubWl4aW4uUGVuZGluZ0VsZW1lbnQpO1xuXG5jb25zdCBwcm9jZXNzVmlzdWFsRWRpdG9yID0gKCkgPT4ge1xuXHRsZXQgdmFyaWFudCwgdGFyZ2V0LCBkaWFsb2csIGRyb3Bkb3duLCBzdGFja0xheW91dCwgcGFuZWxMYXlvdXRzLCB3aW5kb3dNYW5hZ2VyLCBlcnJvckRpYWxvZztcblxuXHRjb25zdCBjb25zdHJ1Y3REb2N1bWVudCA9ICh0aXRsZSwgd2lraXRleHQsIGNhdGVnb3JpZXMpID0+IHtcblx0XHRjb25zdCAkcmVzdWx0ID0gJCgnPGRpdj4nKS5hZGRDbGFzcygnbXctYm9keSBtdy1ib2R5LWNvbnRlbnQnKTtcblxuXHRcdGlmIChXR19TS0lOID09PSAndmVjdG9yJykge1xuXHRcdFx0Ly8gQWRkaXRpb25hbCBjbGFzc2VzIHJlcXVpcmVkIGluIHZlY3RvciB0byBnZXQgY29ycmVjdCBhcHBlYXJhbmNlXG5cdFx0XHQkcmVzdWx0LmFkZENsYXNzKCd2ZWN0b3ItYm9keScpO1xuXHRcdH1cblxuXHRcdCRyZXN1bHQuYXBwZW5kKFxuXHRcdFx0JCgnPGgxPicpLmFkZENsYXNzKCdmaXJzdEhlYWRpbmcnKS5odG1sKHRpdGxlKSxcblx0XHRcdC8vIENsYXNzZXMgdXNlZCBoZXJlOlxuXHRcdFx0Ly8gKiBtdy1jb250ZW50LWx0clxuXHRcdFx0Ly8gKiBtdy1jb250ZW50LXJ0bFxuXHRcdFx0JCgnPGRpdj4nKVxuXHRcdFx0XHQuYWRkQ2xhc3MoYG13LWNvbnRlbnQtJHttdy5jb25maWcuZ2V0KCd3Z1Zpc3VhbEVkaXRvcicpLnBhZ2VMYW5ndWFnZURpcn1gKVxuXHRcdFx0XHQuYXR0cihcblx0XHRcdFx0XHQnbGFuZycsXG5cdFx0XHRcdFx0REFUQS5maW5kKChpdGVtKSA9PiB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gaXRlbS52YXIgPT09IHZhcmlhbnQ7XG5cdFx0XHRcdFx0fSkuaHRtbExhbmdcblx0XHRcdFx0KVxuXHRcdFx0XHQuaHRtbCh3aWtpdGV4dCksXG5cdFx0XHQkLnBhcnNlSFRNTChjYXRlZ29yaWVzKVxuXHRcdCk7XG5cblx0XHQvLyBNYWtlIG90aGVyIHRoaW5ncyBsaWtlIFJlZmVyZW5jZSBUb29sdGlwIGZ1bmN0aW9uXG5cdFx0bXcuaG9vaygnd2lraXBhZ2UuY29udGVudCcpLmZpcmUoJHJlc3VsdCk7XG5cdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG5cdFx0dmUudGFyZ2V0TGlua3NUb05ld1dpbmRvdygkcmVzdWx0WzBdKTtcblx0XHRyZXR1cm4gJHJlc3VsdDtcblx0fTtcblxuXHRjb25zdCBmZXRjaFByZXZpZXcgPSAoKSA9PiB7XG5cdFx0Y29uc3QgZGVmZXJyZWQgPSAkLkRlZmVycmVkKCk7XG5cdFx0Ly8gQ3VycmVudGx5IChBdWcgMjAyMSksIFBhcnNvaWQgQVBJIGRvZXMgbm90IGhhdmUgZnVsbCBMQyBmdW5jdGlvbmFsaXR5LFxuXHRcdC8vIGhlbmNlIHVzZSBwYXJzZSBBUEkgaW5zdGVhZC5cblx0XHR0YXJnZXRcblx0XHRcdC5nZXRDb250ZW50QXBpKClcblx0XHRcdC5wb3N0KHtcblx0XHRcdFx0YWN0aW9uOiAncGFyc2UnLFxuXHRcdFx0XHRkaXNhYmxlZWRpdHNlY3Rpb246IHRydWUsXG5cdFx0XHRcdGVycm9yZm9ybWF0OiAnaHRtbCcsXG5cdFx0XHRcdGVycm9ybGFuZzogV0dfVVNFUl9MQU5HVUFHRSxcblx0XHRcdFx0ZXJyb3JzdXNlbG9jYWw6IHRydWUsXG5cdFx0XHRcdGZvcm1hdHZlcnNpb246IDIsXG5cdFx0XHRcdHByb3A6ICd0ZXh0fGluZGljYXRvcnN8ZGlzcGxheXRpdGxlfGNhdGVnb3JpZXNodG1sfHBhcnNld2FybmluZ3NodG1sJyxcblx0XHRcdFx0cHN0OiB0cnVlLFxuXHRcdFx0XHRwcmV2aWV3OiB0cnVlLFxuXHRcdFx0XHR0aXRsZTogdGFyZ2V0LmdldFBhZ2VOYW1lKCksXG5cdFx0XHRcdHRleHQ6IHRhcmdldC5nZXREb2NUb1NhdmUoKSxcblx0XHRcdFx0dXNlbGFuZzogV0dfVVNFUl9MQU5HVUFHRSxcblx0XHRcdFx0dmFyaWFudCxcblx0XHRcdH0pXG5cdFx0XHQudGhlbihcblx0XHRcdFx0KHJlc3BvbnNlKSA9PiB7XG5cdFx0XHRcdFx0dm9pZCBkZWZlcnJlZC5yZXNvbHZlKFxuXHRcdFx0XHRcdFx0Y29uc3RydWN0RG9jdW1lbnQoXG5cdFx0XHRcdFx0XHRcdHJlc3BvbnNlLnBhcnNlLmRpc3BsYXl0aXRsZSxcblx0XHRcdFx0XHRcdFx0cmVzcG9uc2UucGFyc2UudGV4dCxcblx0XHRcdFx0XHRcdFx0cmVzcG9uc2UucGFyc2UuY2F0ZWdvcmllc2h0bWxcblx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHQoZXJyb3IsIGRldGFpbCkgPT4ge1xuXHRcdFx0XHRcdHZvaWQgZGVmZXJyZWQucmVqZWN0KGRldGFpbCk7XG5cdFx0XHRcdH1cblx0XHRcdCk7XG5cdFx0cmV0dXJuIGRlZmVycmVkO1xuXHR9O1xuXG5cdGNvbnN0IGNoYW5nZVZhcmlhbnQgPSBmdW5jdGlvbiBjaGFuZ2VWYXJpYW50KHZhbCkge1xuXHRcdGRpYWxvZy5wcmV2aWV3UGFuZWwuJGVsZW1lbnRbMF0uZm9jdXMoKTtcblx0XHR2YXJpYW50ID0gdmFsO1xuXG5cdFx0Y29uc3QgdGFyZ2V0UGFuZWwgPSBzdGFja0xheW91dC5maW5kSXRlbUZyb21EYXRhKHZhcmlhbnQpO1xuXHRcdGlmICh0YXJnZXRQYW5lbC4kZWxlbWVudC5jaGlsZHJlbigpLmxlbmd0aCkge1xuXHRcdFx0c3RhY2tMYXlvdXQuc2V0SXRlbSh0YXJnZXRQYW5lbCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHN0YWNrTGF5b3V0LnB1c2hQZW5kaW5nKCk7XG5cdFx0XHRkcm9wZG93bi5zZXREaXNhYmxlZCh0cnVlKTtcblxuXHRcdFx0dm9pZCBmZXRjaFByZXZpZXcoKVxuXHRcdFx0XHQudGhlbihcblx0XHRcdFx0XHQoJHByZXZpZXdDb250YWluZXIpID0+IHtcblx0XHRcdFx0XHRcdHRhcmdldFBhbmVsLiRlbGVtZW50LmFwcGVuZCgkcHJldmlld0NvbnRhaW5lcik7XG5cdFx0XHRcdFx0XHRzdGFja0xheW91dC5zZXRJdGVtKHRhcmdldFBhbmVsKTtcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdChlcnJvcikgPT4ge1xuXHRcdFx0XHRcdFx0d2luZG93TWFuYWdlclxuXHRcdFx0XHRcdFx0XHQub3BlbldpbmRvdyhlcnJvckRpYWxvZywge1xuXHRcdFx0XHRcdFx0XHRcdHRpdGxlOiBPTy51aS5tc2coJ29vdWktZGlhbG9nLXByb2Nlc3MtZXJyb3InKSxcblx0XHRcdFx0XHRcdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcblx0XHRcdFx0XHRcdFx0XHRtZXNzYWdlOiB2ZS5pbml0LnRhcmdldC5nZXRDb250ZW50QXBpKCkuZ2V0RXJyb3JNZXNzYWdlKGVycm9yKSxcblx0XHRcdFx0XHRcdFx0XHRhY3Rpb25zOiBbXG5cdFx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGFjdGlvbjogJ3JlamVjdCcsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsOiBPTy51aS5kZWZlck1zZygnb291aS1kaWFsb2ctbWVzc2FnZS1yZWplY3QnKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZmxhZ3M6ICdzYWZlJyxcblx0XHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGFjdGlvbjogJ3JldHJ5Jyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0bGFiZWw6IE9PLnVpLmRlZmVyTXNnKCdvb3VpLWRpYWxvZy1wcm9jZXNzLXJldHJ5JyksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGZsYWdzOiBbJ3ByaW1hcnknLCAncHJvZ3Jlc3NpdmUnXSxcblx0XHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdFx0XSxcblx0XHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdFx0LmNsb3NlZC50aGVuKChkYXRhKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0aWYgKGRhdGEgJiYgZGF0YS5hY3Rpb24gPT09ICdyZXRyeScpIHtcblx0XHRcdFx0XHRcdFx0XHRcdC8vIERvIG5vdCB1c2Ugc2V0VmFsdWUoKSBzaW5jZSBpdCB3aWxsIG5vdCB0cmlnZ2VyIGV2ZW50XG5cdFx0XHRcdFx0XHRcdFx0XHRjaGFuZ2VWYXJpYW50KHZhcmlhbnQpO1xuXHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0XHQvLyBcInZhcmlhbnRcIiB3aWxsIGJlIHNldCBieSBldmVudCBoYW5kbGVyXG5cdFx0XHRcdFx0XHRcdFx0XHRkcm9wZG93bi5zZXRWYWx1ZShzdGFja0xheW91dC5nZXRDdXJyZW50SXRlbSgpLmdldERhdGEoKSk7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdClcblx0XHRcdFx0LmFsd2F5cygoKSA9PiB7XG5cdFx0XHRcdFx0c3RhY2tMYXlvdXQucG9wUGVuZGluZygpO1xuXHRcdFx0XHRcdGRyb3Bkb3duLnNldERpc2FibGVkKGZhbHNlKTtcblx0XHRcdFx0fSk7XG5cdFx0fVxuXHR9O1xuXG5cdGNvbnN0IHByZXZpZXdXaXRoVmFyaWFudCA9ICgpID0+IHtcblx0XHRjb25zdCBjdXJyZW50UGFuZWwgPSBzdGFja0xheW91dC5nZXRDdXJyZW50SXRlbSgpO1xuXG5cdFx0aWYgKGN1cnJlbnRQYW5lbC4kZWxlbWVudC5jaGlsZHJlbigpLmxlbmd0aCkge1xuXHRcdFx0ZGlhbG9nLnN3YXBQYW5lbCgncHJldmlldycpO1xuXHRcdFx0ZGlhbG9nLnByZXZpZXdQYW5lbC4kZWxlbWVudC5wcmVwZW5kKGRyb3Bkb3duLiRlbGVtZW50KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGFyZ2V0LmVtaXQoJ3NhdmVQcmV2aWV3Jyk7XG5cdFx0XHRkaWFsb2cucHVzaFBlbmRpbmcoKTtcblxuXHRcdFx0dm9pZCBmZXRjaFByZXZpZXcoKVxuXHRcdFx0XHQudGhlbihcblx0XHRcdFx0XHQoJHByZXZpZXdDb250ZW50KSA9PiB7XG5cdFx0XHRcdFx0XHR0YXJnZXRcblx0XHRcdFx0XHRcdFx0LmdldFN1cmZhY2UoKVxuXHRcdFx0XHRcdFx0XHQuZ2V0TW9kZWwoKVxuXHRcdFx0XHRcdFx0XHQuZ2V0RG9jdW1lbnQoKVxuXHRcdFx0XHRcdFx0XHQub25jZSgndHJhbnNhY3QnLCAoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0Zm9yIChjb25zdCBpdGVtIG9mIHBhbmVsTGF5b3V0cykge1xuXHRcdFx0XHRcdFx0XHRcdFx0aXRlbS4kZWxlbWVudC5lbXB0eSgpO1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRkaWFsb2cuc3dhcFBhbmVsKCdwcmV2aWV3Jyk7XG5cdFx0XHRcdFx0XHRjdXJyZW50UGFuZWwuJGVsZW1lbnQuYXBwZW5kKCRwcmV2aWV3Q29udGVudCk7XG5cdFx0XHRcdFx0XHRzdGFja0xheW91dC5zZXRJdGVtKHN0YWNrTGF5b3V0LmZpbmRJdGVtRnJvbURhdGEodmFyaWFudCkpO1xuXHRcdFx0XHRcdFx0Y29uc3QgJGJvZHkgPSAkKCdib2R5Jyk7XG5cdFx0XHRcdFx0XHRpZiAoISRib2R5LmZpbmQoYC4ke0NMQVNTX05BTUV9YCkubGVuZ3RoKSB7XG5cdFx0XHRcdFx0XHRcdGRpYWxvZy5wcmV2aWV3UGFuZWwuJGVsZW1lbnQucHJlcGVuZChkcm9wZG93bi4kZWxlbWVudCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHQoZXJyb3IpID0+IHtcblx0XHRcdFx0XHRcdGRpYWxvZy5zaG93RXJyb3JzKFxuXHRcdFx0XHRcdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcblx0XHRcdFx0XHRcdFx0bmV3IE9PLnVpLkVycm9yKHZlLmluaXQudGFyZ2V0LmdldENvbnRlbnRBcGkoKS5nZXRFcnJvck1lc3NhZ2UoZXJyb3IpLCB7XG5cdFx0XHRcdFx0XHRcdFx0cmVjb3ZlcmFibGU6IHRydWUsXG5cdFx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0KVxuXHRcdFx0XHQuYWx3YXlzKCgpID0+IHtcblx0XHRcdFx0XHRkaWFsb2cucG9wUGVuZGluZygpO1xuXHRcdFx0XHR9KTtcblx0XHR9XG5cdH07XG5cblx0Y29uc3QgaW5pdCA9ICgpID0+IHtcblx0XHR2YXJpYW50ID0gV0dfVVNFUl9WQVJJQU5UO1xuXHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuXHRcdCh7dGFyZ2V0fSA9IHZlLmluaXQpO1xuXHRcdGRpYWxvZyA9IHRhcmdldC5zYXZlRGlhbG9nO1xuXHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtZWRpYXdpa2kvY2xhc3MtZG9jXG5cdFx0ZHJvcGRvd24gPSBuZXcgT08udWkuRHJvcGRvd25JbnB1dFdpZGdldCh7XG5cdFx0XHQkb3ZlcmxheTogZGlhbG9nLiRvdmVybGF5LFxuXHRcdFx0Y2xhc3NlczogW0NMQVNTX05BTUVdLFxuXHRcdFx0b3B0aW9uczogW1xuXHRcdFx0XHR7XG5cdFx0XHRcdFx0b3B0Z3JvdXA6IG13Lm1zZygncHd2LTIwMTctY2FwdGlvbicpLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHQuLi5EQVRBLm1hcCgoaXRlbSkgPT4ge1xuXHRcdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0XHRkYXRhOiBpdGVtLnZhcixcblx0XHRcdFx0XHRcdGxhYmVsOiBtdy5tc2coaXRlbS5tc2cpIC8qIGVzbGludC1kaXNhYmxlLWxpbmUgbWVkaWF3aWtpL21zZy1kb2MgKi8sXG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0fSksXG5cdFx0XHRdLFxuXHRcdFx0dmFsdWU6IHZhcmlhbnQsXG5cdFx0fSk7XG5cdFx0ZHJvcGRvd24ub24oJ2NoYW5nZScsIGNoYW5nZVZhcmlhbnQpO1xuXHRcdHBhbmVsTGF5b3V0cyA9IERBVEEubWFwKChpdGVtKSA9PiB7XG5cdFx0XHRyZXR1cm4gbmV3IE9PLnVpLlBhbmVsTGF5b3V0KHtcblx0XHRcdFx0ZXhwYW5kZWQ6IGZhbHNlLFxuXHRcdFx0XHRkYXRhOiBpdGVtLnZhcixcblx0XHRcdH0pO1xuXHRcdH0pO1xuXHRcdHN0YWNrTGF5b3V0ID0gbmV3IFBlbmRpbmdTdGFja0xheW91dCh7XG5cdFx0XHRleHBhbmRlZDogZmFsc2UsXG5cdFx0XHRpdGVtczogcGFuZWxMYXlvdXRzLFxuXHRcdH0pO1xuXHRcdHN0YWNrTGF5b3V0LnNldEl0ZW0oc3RhY2tMYXlvdXQuZmluZEl0ZW1Gcm9tRGF0YSh2YXJpYW50KSk7XG5cdFx0ZGlhbG9nLnByZXZpZXdQYW5lbC4kZWxlbWVudC5hcHBlbmQoc3RhY2tMYXlvdXQuJGVsZW1lbnQpO1xuXHRcdGVycm9yRGlhbG9nID0gbmV3IE9PLnVpLk1lc3NhZ2VEaWFsb2coKTtcblx0XHR3aW5kb3dNYW5hZ2VyID0gbmV3IE9PLnVpLldpbmRvd01hbmFnZXIoKTtcblx0XHR3aW5kb3dNYW5hZ2VyLmFkZFdpbmRvd3MoW2Vycm9yRGlhbG9nXSk7XG5cdFx0Y29uc3QgJGJvZHkgPSAkKCdib2R5Jyk7XG5cdFx0JGJvZHkuYXBwZW5kKHdpbmRvd01hbmFnZXIuJGVsZW1lbnQpO1xuXG5cdFx0Y29uc3QgaGFuZGxlclRvUmVtb3ZlID0gJ29uU2F2ZURpYWxvZ1ByZXZpZXcnO1xuXHRcdGRpYWxvZy5vZmYoJ3ByZXZpZXcnLCBoYW5kbGVyVG9SZW1vdmUsIHRhcmdldCkub24oJ3ByZXZpZXcnLCBwcmV2aWV3V2l0aFZhcmlhbnQpO1xuXG5cdFx0Ly8gU3dpdGNoaW5nIGJldHdlZW4gVkUgYW5kIE5XRSwgcmVxdWlyZXMgdG8gYmUgcmVpbml0aWFsaXplZFxuXHRcdG13Lmhvb2soJ3ZlLmFjdGl2YXRpb25Db21wbGV0ZScpLmFkZCgoKSA9PiB7XG5cdFx0XHRpZiAobXcuY29uZmlnLmdldChPUFRJT05TLmNvbmZpZ0tleSkpIHtcblx0XHRcdFx0bXcuY29uZmlnLnNldChPUFRJT05TLmNvbmZpZ0tleSwgZmFsc2UpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9O1xuXG5cdGlmICghbXcuY29uZmlnLmdldChPUFRJT05TLmNvbmZpZ0tleSkpIHtcblx0XHRpbml0KCk7XG5cdFx0bXcuY29uZmlnLnNldChPUFRJT05TLmNvbmZpZ0tleSwgdHJ1ZSk7XG5cdH1cbn07XG5cbmV4cG9ydCB7cHJvY2Vzc1Zpc3VhbEVkaXRvcn07XG4iLCAiaW1wb3J0ICcuL3Byb2Nlc3NXaWtpRWRpdG9yLmxlc3MnO1xuaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtWQVJJQU5UUywgV0dfUEFHRV9DT05URU5UX01PREVMLCBXR19VU0VSX1ZBUklBTlR9IGZyb20gJy4vY29uc3RhbnQnO1xuLyoqXG4gKiBAZGVzY3JpcHRpb24gQWRkIGEgXCJQcmV2aWV3IHdpdGggdmFyaWFudFwiIG9wdGlvbiB0byB0aGUgZWRpdCBmb3JtLlxuICovXG5jb25zdCBwcm9jZXNzV2lraUVkaXRvciA9ICgpOiB2b2lkID0+IHtcblx0bXcuaG9vaygnd2lraXBhZ2UuZWRpdGZvcm0nKS5hZGQoKCRlZGl0Rm9ybSk6IHZvaWQgPT4ge1xuXHRcdC8vIEd1YXJkIGFnYWluc3QgZG91YmxlIGluY2x1c2lvbnNcblx0XHRpZiAobXcuY29uZmlnLmdldChPUFRJT05TLmNvbmZpZ0tleSkpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0Y29uc3QgJHRlbXBsYXRlU2FuZGJveFByZXZpZXc6IEpRdWVyeSA9ICRlZGl0Rm9ybS5maW5kKCdpbnB1dFtuYW1lPVwid3BUZW1wbGF0ZVNhbmRib3hQcmV2aWV3XCJdJyk7XG5cdFx0Ly8gSXQgaXMgcG9zc2libGUgdGhhdCBhIHVzZXIgd2FudCB0byBwcmV2aWV3IGEgcGFnZSB3aXRoIGEgbm9uLXdpa2l0ZXh0IG1vZHVsZVxuXHRcdC8vIERvIG5vdCByZXR1cm4gaW4gdGhpcyBjYXNlXG5cdFx0aWYgKFdHX1BBR0VfQ09OVEVOVF9NT0RFTCAhPT0gJ3dpa2l0ZXh0JyAmJiAhJHRlbXBsYXRlU2FuZGJveFByZXZpZXcubGVuZ3RoKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGNvbnN0ICRsYXlvdXQ6IEpRdWVyeSA9ICRlZGl0Rm9ybS5maW5kKCcuZWRpdENoZWNrYm94ZXMgLm9vLXVpLWhvcml6b250YWxMYXlvdXQnKTtcblx0XHRpZiAoISRsYXlvdXQubGVuZ3RoKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdC8vIEd1YXJkIGFnYWluc3QgZG91YmxlIGluY2x1c2lvbnNcblx0XHRtdy5jb25maWcuc2V0KE9QVElPTlMuY29uZmlnS2V5LCB0cnVlKTtcblx0XHRjb25zdCB1cmlWYXJpYW50OiBzdHJpbmcgfCBudWxsID0gbXcudXRpbC5nZXRQYXJhbVZhbHVlKCd2YXJpYW50Jyk7XG5cdFx0Y29uc3QgY2hlY2tib3g6IE9PLnVpLkNoZWNrYm94SW5wdXRXaWRnZXQgPSBuZXcgT08udWkuQ2hlY2tib3hJbnB1dFdpZGdldCh7XG5cdFx0XHRzZWxlY3RlZDogQm9vbGVhbih1cmlWYXJpYW50KSxcblx0XHR9KTtcblx0XHRjb25zdCBkcm9wZG93bjogT08udWkuRHJvcGRvd25XaWRnZXQgPSBuZXcgT08udWkuRHJvcGRvd25XaWRnZXQoe1xuXHRcdFx0JG92ZXJsYXk6IHRydWUsXG5cdFx0XHRkaXNhYmxlZDogIWNoZWNrYm94LmlzU2VsZWN0ZWQoKSxcblx0XHRcdG1lbnU6IHtcblx0XHRcdFx0aXRlbXM6IFZBUklBTlRTLm1hcCgoe2RhdGEsIGxhYmVsfSk6IE9PLnVpLk1lbnVPcHRpb25XaWRnZXQgPT4ge1xuXHRcdFx0XHRcdHJldHVybiBuZXcgT08udWkuTWVudU9wdGlvbldpZGdldCh7XG5cdFx0XHRcdFx0XHRkYXRhLFxuXHRcdFx0XHRcdFx0bGFiZWwsXG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0pLFxuXHRcdFx0fSxcblx0XHR9KTtcblx0XHRkcm9wZG93bi5nZXRNZW51KCkuc2VsZWN0SXRlbUJ5RGF0YShXR19VU0VSX1ZBUklBTlQgfHwgdXJpVmFyaWFudCB8fCBtdy51c2VyLm9wdGlvbnMuZ2V0KCd2YXJpYW50JykpO1xuXHRcdGNoZWNrYm94Lm9uKCdjaGFuZ2UnLCAoc2VsZWN0ZWQ6IGJvb2xlYW4gfCBzdHJpbmcpOiB2b2lkID0+IHtcblx0XHRcdGRyb3Bkb3duLnNldERpc2FibGVkKCFzZWxlY3RlZCk7XG5cdFx0fSk7XG5cdFx0Y29uc3QgZ2V0U2VsZWN0ZWRWYXJpYW50ID0gKCk6IHN0cmluZyB8IHVuZGVmaW5lZCA9PiB7XG5cdFx0XHRpZiAoIWNoZWNrYm94LmlzU2VsZWN0ZWQoKSkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBzZWxlY3RlZEl0ZW06IE9PLnVpLk9wdGlvbldpZGdldCB8IG51bGwgPSBkcm9wZG93blxuXHRcdFx0XHQuZ2V0TWVudSgpXG5cdFx0XHRcdC5maW5kU2VsZWN0ZWRJdGVtKCkgYXMgT08udWkuT3B0aW9uV2lkZ2V0IHwgbnVsbDtcblx0XHRcdHJldHVybiBzZWxlY3RlZEl0ZW0gPyAoc2VsZWN0ZWRJdGVtLmdldERhdGEoKSBhcyBzdHJpbmcpIDogdW5kZWZpbmVkO1xuXHRcdH07XG5cdFx0Y29uc3QgbWFuaXB1bGF0ZUFjdGlvblVybCA9ICgpOiB2b2lkID0+IHtcblx0XHRcdGNvbnN0IHNlbGVjdGVkVmFyaWFudDogc3RyaW5nIHwgdW5kZWZpbmVkID0gZ2V0U2VsZWN0ZWRWYXJpYW50KCk7XG5cdFx0XHRjb25zdCBvcmlnaW5hbEFjdGlvbjogc3RyaW5nIHwgdW5kZWZpbmVkID0gJGVkaXRGb3JtLmF0dHIoJ2FjdGlvbicpO1xuXHRcdFx0aWYgKHNlbGVjdGVkVmFyaWFudCAmJiBvcmlnaW5hbEFjdGlvbikge1xuXHRcdFx0XHQkZWRpdEZvcm0uYXR0cihcblx0XHRcdFx0XHQnYWN0aW9uJyxcblx0XHRcdFx0XHRuZXcgbXcuVXJpKG9yaWdpbmFsQWN0aW9uKVxuXHRcdFx0XHRcdFx0LmV4dGVuZCh7XG5cdFx0XHRcdFx0XHRcdHZhcmlhbnQ6IHNlbGVjdGVkVmFyaWFudCxcblx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XHQuZ2V0UmVsYXRpdmVQYXRoKClcblx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHR9O1xuXHRcdGNvbnN0IG1hbmlwdWxhdGVWYXJpYW50Q29uZmlnID0gKCk6IHZvaWQgPT4ge1xuXHRcdFx0bXcuY29uZmlnLnNldCgnd2dVc2VyVmFyaWFudCcsIGdldFNlbGVjdGVkVmFyaWFudCgpIHx8IChtdy51c2VyLm9wdGlvbnMuZ2V0KCd2YXJpYW50JykgYXMgc3RyaW5nKSk7XG5cdFx0fTtcblx0XHQkZWRpdEZvcm1cblx0XHRcdC5maW5kKCdpbnB1dFtuYW1lPXdwUHJldmlld10nKVxuXHRcdFx0Lm9uKCdjbGljaycsIG13LnVzZXIub3B0aW9ucy5nZXQoJ3VzZWxpdmVwcmV2aWV3JykgPyBtYW5pcHVsYXRlVmFyaWFudENvbmZpZyA6IG1hbmlwdWxhdGVBY3Rpb25VcmwpO1xuXHRcdCR0ZW1wbGF0ZVNhbmRib3hQcmV2aWV3Lm9uKCdjbGljaycsIG1hbmlwdWxhdGVBY3Rpb25VcmwpO1xuXHRcdGRyb3Bkb3duLmdldE1lbnUoKS5vbignc2VsZWN0JywgbWFuaXB1bGF0ZVZhcmlhbnRDb25maWcpO1xuXHRcdGNvbnN0IGNoZWNrYm94RmllbGQ6IE9PLnVpLkZpZWxkTGF5b3V0PE9PLnVpLkNoZWNrYm94SW5wdXRXaWRnZXQ+ID0gbmV3IE9PLnVpLkZpZWxkTGF5b3V0KGNoZWNrYm94LCB7XG5cdFx0XHRhbGlnbjogJ2lubGluZScsXG5cdFx0XHRsYWJlbDogd2luZG93LndnVUxTKCfpooTop4jlrZfor43ovazmjaInLCAn6aCQ6Ka95a2X6Kme6L2J5o+bJyksXG5cdFx0fSk7XG5cdFx0Y29uc3QgZHJvcGRvd25GaWVsZDogT08udWkuRmllbGRMYXlvdXQ8T08udWkuRHJvcGRvd25XaWRnZXQ+ID0gbmV3IE9PLnVpLkZpZWxkTGF5b3V0KGRyb3Bkb3duLCB7XG5cdFx0XHRhbGlnbjogJ3RvcCcsXG5cdFx0XHRsYWJlbDogd2luZG93LndnVUxTKCfkvb/nlKjor6Xor63oqIDlj5jkvZPmmL7npLrpooTop4jvvJonLCAn5L2/55So6Kmy6Kqe6KiA6K6K6auU6aGv56S66aCQ6Ka977yaJyksXG5cdFx0XHRpbnZpc2libGVMYWJlbDogdHJ1ZSxcblx0XHR9KTtcblx0XHQkbGF5b3V0LmFwcGVuZCgkKCc8ZGl2PicpLmF0dHIoJ2lkJywgJ3B3di1hcmVhJykuYXBwZW5kKGNoZWNrYm94RmllbGQuJGVsZW1lbnQsIGRyb3Bkb3duRmllbGQuJGVsZW1lbnQpKTtcblx0fSk7XG59O1xuXG5leHBvcnQge3Byb2Nlc3NXaWtpRWRpdG9yfTtcbiIsICJpbXBvcnQge3Byb2Nlc3NWaXN1YWxFZGl0b3J9IGZyb20gJy4vbW9kdWxlcy9wcm9jZXNzVmlzdWFsRWRpdG9yJztcbmltcG9ydCB7cHJvY2Vzc1dpa2lFZGl0b3J9IGZyb20gJy4vbW9kdWxlcy9wcm9jZXNzV2lraUVkaXRvcic7XG5cbihmdW5jdGlvbiBwcmV2aWV3V2l0aFZhcmlhbnRzKCk6IHZvaWQge1xuXHRtdy5ob29rKCd3aWtpcGFnZS5lZGl0Zm9ybScpLmFkZCgoKTogdm9pZCA9PiB7XG5cdFx0cHJvY2Vzc1dpa2lFZGl0b3IoKTtcblx0fSk7XG5cblx0bXcuaG9vaygndmUuc2F2ZURpYWxvZy5zdGF0ZUNoYW5nZWQnKS5hZGQoKCk6IHZvaWQgPT4ge1xuXHRcdHByb2Nlc3NWaXN1YWxFZGl0b3IoKTtcblx0fSk7XG59KSgpO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0MsSUFBQUEsWUFBYTs7QUNEZCxJQUFNQyxhQUFhO0FBRW5CLElBQU1DLFdBR0EsQ0FDTDtFQUNDQyxNQUFNO0VBQ05DLE9BQU9DLE9BQU9DLE1BQU0sT0FBTyxLQUFLO0FBQ2pDLEdBQ0E7RUFDQ0gsTUFBTTtFQUNOQyxPQUFPO0FBQ1IsR0FDQTtFQUNDRCxNQUFNO0VBQ05DLE9BQU87QUFDUixHQUNBO0VBQ0NELE1BQU07RUFDTkMsT0FBTztBQUNSLEdBQ0E7RUFDQ0QsTUFBTTtFQUNOQyxPQUFPO0FBQ1IsR0FDQTtFQUNDRCxNQUFNO0VBQ05DLE9BQU87QUFDUixHQUNBO0VBQ0NELE1BQU07RUFDTkMsT0FBTztBQUNSLEdBQ0E7RUFDQ0QsTUFBTTtFQUNOQyxPQUFPO0FBQ1IsR0FDQTtFQUNDRCxNQUFNO0VBQ05DLE9BQU87QUFDUixDQUFBO0FBR0QsSUFBTUcsT0FBTyxDQUNaO0VBQUNDLEtBQUs7RUFBTUMsVUFBVTtFQUFNQyxLQUFLO0FBQWEsR0FDOUM7RUFBQ0YsS0FBSztFQUFXQyxVQUFVO0VBQVdDLEtB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U2lLLHNCQUE0QjtBQUNyQ2xMLEtBQUc2QyxLQUFLLG1CQUFtQixFQUFFa0csSUFBSSxNQUFZO0FBQzVDQyxzQkFBa0I7RUFDbkIsQ0FBQztBQUVEaEosS0FBRzZDLEtBQUssNEJBQTRCLEVBQUVrRyxJQUFJLE1BQVk7QUFDckR6SCx3QkFBb0I7RUFDckIsQ0FBQztBQUNGLEdBQUc7IiwKICAibmFtZXMiOiBbImNvbmZpZ0tleSIsICJDTEFTU19OQU1FIiwgIlZBUklBTlRTIiwgImRhdGEiLCAibGFiZWwiLCAid2luZG93IiwgIndnVUxTIiwgIkRBVEEiLCAidmFyIiwgImh0bWxMYW5nIiwgIm1zZyIsICJXR19TS0lOIiwgIm13IiwgImNvbmZpZyIsICJnZXQiLCAiV0dfUEFHRV9DT05URU5UX01PREVMIiwgIldHX1VTRVJfTEFOR1VBR0UiLCAiV0dfVVNFUl9WQVJJQU5UIiwgIlBXVjIwMTdtZXNzYWdlcyIsICJtZXNzYWdlcyIsICJzZXQiLCAiUGVuZGluZ1N0YWNrTGF5b3V0IiwgIlBlbmRpbmdTdGFja0xheW91dDIiLCAic3VwZXIiLCAiY2FsbCIsICJPTyIsICJ1aSIsICJtaXhpbiIsICJQZW5kaW5nRWxlbWVudCIsICIkZWxlbWVudCIsICJhZGRDbGFzcyIsICJpbmhlcml0Q2xhc3MiLCAiU3RhY2tMYXlvdXQiLCAibWl4aW5DbGFzcyIsICJwcm9jZXNzVmlzdWFsRWRpdG9yIiwgInZhcmlhbnQiLCAidGFyZ2V0IiwgImRpYWxvZyIsICJkcm9wZG93biIsICJzdGFja0xheW91dCIsICJwYW5lbExheW91dHMiLCAid2luZG93TWFuYWdlciIsICJlcnJvckRpYWxvZyIsICJjb25zdHJ1Y3REb2N1bWVudCIsICJ0aXRsZSIsICJ3aWtpdGV4dCIsICJjYXRlZ29yaWVzIiwgIiRyZXN1bHQiLCAiJCIsICJhcHBlbmQiLCAiaHRtbCIsICJjb25jYXQiLCAicGFnZUxhbmd1YWdlRGlyIiwgImF0dHIiLCAiZmluZCIsICJpdGVtIiwgInBhcnNlSFRNTCIsICJob29rIiwgImZpcmUiLCAidmUiLCAidGFyZ2V0TGlua3NUb05ld1dpbmRvdyIsICJmZXRjaFByZXZpZXciLCAiZGVmZXJyZWQiLCAiRGVmZXJyZWQiLCAiZ2V0Q29udGVudEFwaSIsICJwb3N0IiwgImFjdGlvbiIsICJkaXNhYmxlZWRpdHNlY3Rpb24iLCAiZXJyb3Jmb3JtYXQiLCAiZXJyb3JsYW5nIiwgImVycm9yc3VzZWxvY2FsIiwgImZvcm1hdHZlcnNpb24iLCAicHJvcCIsICJwc3QiLCAicHJldmlldyIsICJnZXRQYWdlTmFtZSIsICJ0ZXh0IiwgImdldERvY1RvU2F2ZSIsICJ1c2VsYW5nIiwgInRoZW4iLCAicmVzcG9uc2UiLCAicmVzb2x2ZSIsICJwYXJzZSIsICJkaXNwbGF5dGl0bGUiLCAiY2F0ZWdvcmllc2h0bWwiLCAiZXJyb3IiLCAiZGV0YWlsIiwgInJlamVjdCIsICJjaGFuZ2VWYXJpYW50IiwgImNoYW5nZVZhcmlhbnQyIiwgInZhbCIsICJwcmV2aWV3UGFuZWwiLCAiZm9jdXMiLCAidGFyZ2V0UGFuZWwiLCAiZmluZEl0ZW1Gcm9tRGF0YSIsICJjaGlsZHJlbiIsICJsZW5ndGgiLCAic2V0SXRlbSIsICJwdXNoUGVuZGluZyIsICJzZXREaXNhYmxlZCIsICIkcHJldmlld0NvbnRhaW5lciIsICJvcGVuV2luZG93IiwgIm1lc3NhZ2UiLCAiaW5pdCIsICJnZXRFcnJvck1lc3NhZ2UiLCAiYWN0aW9ucyIsICJkZWZlck1zZyIsICJmbGFncyIsICJjbG9zZWQiLCAic2V0VmFsdWUiLCAiZ2V0Q3VycmVudEl0ZW0iLCAiZ2V0RGF0YSIsICJhbHdheXMiLCAicG9wUGVuZGluZyIsICJwcmV2aWV3V2l0aFZhcmlhbnQiLCAiY3VycmVudFBhbmVsIiwgInN3YXBQYW5lbCIsICJwcmVwZW5kIiwgImVtaXQiLCAiJHByZXZpZXdDb250ZW50IiwgImdldFN1cmZhY2UiLCAiZ2V0TW9kZWwiLCAiZ2V0RG9jdW1lbnQiLCAib25jZSIsICJfaXRlcmF0b3IiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAiX3N0ZXAiLCAicyIsICJuIiwgImRvbmUiLCAidmFsdWUiLCAiZW1wdHkiLCAiZXJyIiwgImUiLCAiZiIsICIkYm9keSIsICJzaG93RXJyb3JzIiwgIkVycm9yIiwgInJlY292ZXJhYmxlIiwgInNhdmVEaWFsb2ciLCAiRHJvcGRvd25JbnB1dFdpZGdldCIsICIkb3ZlcmxheSIsICJjbGFzc2VzIiwgIm9wdGlvbnMiLCAib3B0Z3JvdXAiLCAibWFwIiwgIm9uIiwgIlBhbmVsTGF5b3V0IiwgImV4cGFuZGVkIiwgIml0ZW1zIiwgIk1lc3NhZ2VEaWFsb2ciLCAiV2luZG93TWFuYWdlciIsICJhZGRXaW5kb3dzIiwgImhhbmRsZXJUb1JlbW92ZSIsICJvZmYiLCAiYWRkIiwgInByb2Nlc3NXaWtpRWRpdG9yIiwgIiRlZGl0Rm9ybSIsICIkdGVtcGxhdGVTYW5kYm94UHJldmlldyIsICIkbGF5b3V0IiwgInVyaVZhcmlhbnQiLCAidXRpbCIsICJnZXRQYXJhbVZhbHVlIiwgImNoZWNrYm94IiwgIkNoZWNrYm94SW5wdXRXaWRnZXQiLCAic2VsZWN0ZWQiLCAiQm9vbGVhbiIsICJEcm9wZG93bldpZGdldCIsICJkaXNhYmxlZCIsICJpc1NlbGVjdGVkIiwgIm1lbnUiLCAiTWVudU9wdGlvbldpZGdldCIsICJnZXRNZW51IiwgInNlbGVjdEl0ZW1CeURhdGEiLCAidXNlciIsICJnZXRTZWxlY3RlZFZhcmlhbnQiLCAic2VsZWN0ZWRJdGVtIiwgImZpbmRTZWxlY3RlZEl0ZW0iLCAibWFuaXB1bGF0ZUFjdGlvblVybCIsICJzZWxlY3RlZFZhcmlhbnQiLCAib3JpZ2luYWxBY3Rpb24iLCAiVXJpIiwgImV4dGVuZCIsICJnZXRSZWxhdGl2ZVBhdGgiLCAibWFuaXB1bGF0ZVZhcmlhbnRDb25maWciLCAiY2hlY2tib3hGaWVsZCIsICJGaWVsZExheW91dCIsICJhbGlnbiIsICJkcm9wZG93bkZpZWxkIiwgImludmlzaWJsZUxhYmVsIiwgInByZXZpZXdXaXRoVmFyaWFudHMiXQp9Cg==

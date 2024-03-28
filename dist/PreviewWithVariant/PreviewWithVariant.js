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
var className = "pwv-2017-variant";
//! src/PreviewWithVariant/modules/constant.ts
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
//! src/PreviewWithVariant/modules/messages.ts
var PWV2017messages = () => {
  mw.messages.set({
    "pwv-2017-caption": window.wgULS("选择语言变体", "選擇語言變體"),
    "pwv-2017-zh": window.wgULS("不转换", "不轉換"),
    "pwv-2017-zh-hans": "简体",
    "pwv-2017-zh-hant": "繁體",
    "pwv-2017-zh-cn": "中国大陆简体",
    "pwv-2017-zh-hk": "中國香港繁體",
    "pwv-2017-zh-mo": "中國澳門繁體",
    "pwv-2017-zh-my": "马来西亚简体",
    "pwv-2017-zh-sg": "新加坡简体",
    "pwv-2017-zh-tw": "中國臺灣繁體"
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
  const {
    skin,
    wgUserLanguage,
    wgUserVariant
  } = mw.config.get();
  let variant, target, dialog, dropdown, stackLayout, panelLayouts, windowManager, errorDialog;
  const constructDocument = (title, wikitext, categories) => {
    const $result = $("<div>").addClass("mw-body mw-body-content");
    if (skin === "vector") {
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
      errorlang: wgUserLanguage,
      errorsuselocal: true,
      formatversion: 2,
      prop: "text|indicators|displaytitle|categorieshtml|parsewarningshtml",
      pst: true,
      preview: true,
      title: target.getPageName(),
      text: target.getDocToSave(),
      uselang: wgUserLanguage,
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
        if (!$body.find(".".concat(className)).length) {
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
    variant = wgUserVariant;
    ({
      target
    } = ve.init);
    dialog = target.saveDialog;
    dropdown = new OO.ui.DropdownInputWidget({
      $overlay: dialog.$overlay,
      classes: [className],
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
    const {
      wgPageContentModel,
      wgUserVariant
    } = mw.config.get();
    const $templateSandboxPreview = $editForm.find('input[name="wpTemplateSandboxPreview"]');
    if (wgPageContentModel !== "wikitext" && !$templateSandboxPreview.length) {
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
    dropdown.getMenu().selectItemByData(wgUserVariant || uriVariant || mw.user.options.get("variant"));
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1ByZXZpZXdXaXRoVmFyaWFudC9vcHRpb25zLmpzb24iLCAic3JjL1ByZXZpZXdXaXRoVmFyaWFudC9tb2R1bGVzL2NvbnN0YW50LnRzIiwgInNyYy9QcmV2aWV3V2l0aFZhcmlhbnQvbW9kdWxlcy9tZXNzYWdlcy50cyIsICJzcmMvUHJldmlld1dpdGhWYXJpYW50L21vZHVsZXMvcHJvY2Vzc1Zpc3VhbEVkaXRvci5qcyIsICJzcmMvUHJldmlld1dpdGhWYXJpYW50L21vZHVsZXMvcHJvY2Vzc1dpa2lFZGl0b3IudHMiLCAic3JjL1ByZXZpZXdXaXRoVmFyaWFudC9QcmV2aWV3V2l0aFZhcmlhbnQudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIntcblx0XCJjb25maWdLZXlcIjogXCJnYWRnZXQtUHJldmlld1dpdGhWYXJpYW50X19Jbml0aWFsaXplZFwiLFxuXHRcImNsYXNzTmFtZVwiOiBcInB3di0yMDE3LXZhcmlhbnRcIlxufVxuIiwgImNvbnN0IFZBUklBTlRTOiB7XG5cdGRhdGE6IHN0cmluZztcblx0bGFiZWw6IHN0cmluZztcbn1bXSA9IFtcblx0e1xuXHRcdGRhdGE6ICd6aCcsXG5cdFx0bGFiZWw6IHdpbmRvdy53Z1VMUygn5LiN6L2s5o2iJywgJ+S4jei9ieaPmycpLFxuXHR9LFxuXHR7XG5cdFx0ZGF0YTogJ3poLWhhbnMnLFxuXHRcdGxhYmVsOiAn566A5L2TJyxcblx0fSxcblx0e1xuXHRcdGRhdGE6ICd6aC1oYW50Jyxcblx0XHRsYWJlbDogJ+e5gemrlCcsXG5cdH0sXG5cdHtcblx0XHRkYXRhOiAnemgtY24nLFxuXHRcdGxhYmVsOiAn5Lit5Zu95aSn6ZmG566A5L2TJyxcblx0fSxcblx0e1xuXHRcdGRhdGE6ICd6aC1oaycsXG5cdFx0bGFiZWw6ICfkuK3lnIvpppnmuK/nuYHpq5QnLFxuXHR9LFxuXHR7XG5cdFx0ZGF0YTogJ3poLW1vJyxcblx0XHRsYWJlbDogJ+S4reWci+a+s+mWgOe5gemrlCcsXG5cdH0sXG5cdHtcblx0XHRkYXRhOiAnemgtbXknLFxuXHRcdGxhYmVsOiAn6ams5p2l6KW/5Lqa566A5L2TJyxcblx0fSxcblx0e1xuXHRcdGRhdGE6ICd6aC1zZycsXG5cdFx0bGFiZWw6ICfmlrDliqDlnaHnroDkvZMnLFxuXHR9LFxuXHR7XG5cdFx0ZGF0YTogJ3poLXR3Jyxcblx0XHRsYWJlbDogJ+S4reWci+iHuueBo+e5gemrlCcsXG5cdH0sXG5dO1xuXG5jb25zdCBEQVRBID0gW1xuXHR7dmFyOiAnemgnLCBodG1sTGFuZzogJ3poJywgbXNnOiAncHd2LTIwMTctemgnfSxcblx0e3ZhcjogJ3poLWhhbnMnLCBodG1sTGFuZzogJ3poLUhhbnMnLCBtc2c6ICdwd3YtMjAxNy16aC1oYW5zJ30sXG5cdHt2YXI6ICd6aC1oYW50JywgaHRtbExhbmc6ICd6aC1IYW50JywgbXNnOiAncHd2LTIwMTctemgtaGFudCd9LFxuXHR7dmFyOiAnemgtY24nLCBodG1sTGFuZzogJ3poLUhhbnMtQ04nLCBtc2c6ICdwd3YtMjAxNy16aC1jbid9LFxuXHR7dmFyOiAnemgtaGsnLCBodG1sTGFuZzogJ3poLUhhbnQtSEsnLCBtc2c6ICdwd3YtMjAxNy16aC1oayd9LFxuXHR7dmFyOiAnemgtbW8nLCBodG1sTGFuZzogJ3poLUhhbnQtTU8nLCBtc2c6ICdwd3YtMjAxNy16aC1tbyd9LFxuXHR7dmFyOiAnemgtbXknLCBodG1sTGFuZzogJ3poLUhhbnMtTVknLCBtc2c6ICdwd3YtMjAxNy16aC1teSd9LFxuXHR7dmFyOiAnemgtc2cnLCBodG1sTGFuZzogJ3poLUhhbnMtU0cnLCBtc2c6ICdwd3YtMjAxNy16aC1zZyd9LFxuXHR7dmFyOiAnemgtdHcnLCBodG1sTGFuZzogJ3poLUhhbnQtVFcnLCBtc2c6ICdwd3YtMjAxNy16aC10dyd9LFxuXTtcblxuZXhwb3J0IHtEQVRBLCBWQVJJQU5UU307XG4iLCAiY29uc3QgUFdWMjAxN21lc3NhZ2VzID0gKCkgPT4ge1xuXHRtdy5tZXNzYWdlcy5zZXQoe1xuXHRcdCdwd3YtMjAxNy1jYXB0aW9uJzogd2luZG93LndnVUxTKCfpgInmi6nor63oqIDlj5jkvZMnLCAn6YG45pOH6Kqe6KiA6K6K6auUJyksXG5cdFx0J3B3di0yMDE3LXpoJzogd2luZG93LndnVUxTKCfkuI3ovazmjaInLCAn5LiN6L2J5o+bJyksXG5cdFx0J3B3di0yMDE3LXpoLWhhbnMnOiAn566A5L2TJyxcblx0XHQncHd2LTIwMTctemgtaGFudCc6ICfnuYHpq5QnLFxuXHRcdCdwd3YtMjAxNy16aC1jbic6ICfkuK3lm73lpKfpmYbnroDkvZMnLFxuXHRcdCdwd3YtMjAxNy16aC1oayc6ICfkuK3lnIvpppnmuK/nuYHpq5QnLFxuXHRcdCdwd3YtMjAxNy16aC1tbyc6ICfkuK3lnIvmvrPploDnuYHpq5QnLFxuXHRcdCdwd3YtMjAxNy16aC1teSc6ICfpqazmnaXopb/kuprnroDkvZMnLFxuXHRcdCdwd3YtMjAxNy16aC1zZyc6ICfmlrDliqDlnaHnroDkvZMnLFxuXHRcdCdwd3YtMjAxNy16aC10dyc6ICfkuK3lnIvoh7rngaPnuYHpq5QnLFxuXHR9KTtcbn07XG5cbmV4cG9ydCB7UFdWMjAxN21lc3NhZ2VzfTtcbiIsICIvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10cy1jb21tZW50XG4vLyBAdHMtbm9jaGVja1xuaW1wb3J0ICcuL3Byb2Nlc3NWaXN1YWxFZGl0b3IubGVzcyc7XG5pbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge0RBVEF9IGZyb20gJy4vY29uc3RhbnQnO1xuaW1wb3J0IHtQV1YyMDE3bWVzc2FnZXN9IGZyb20gJy4vbWVzc2FnZXMnO1xuXG5tdy5jb25maWcuc2V0KE9QVElPTlMuY29uZmlnS2V5LCBmYWxzZSk7XG5cblBXVjIwMTdtZXNzYWdlcygpO1xuXG5jb25zdCBQZW5kaW5nU3RhY2tMYXlvdXQgPSBmdW5jdGlvbiBQZW5kaW5nU3RhY2tMYXlvdXQoY29uZmlnKSB7XG5cdFBlbmRpbmdTdGFja0xheW91dC5zdXBlci5jYWxsKHRoaXMsIGNvbmZpZyk7XG5cdE9PLnVpLm1peGluLlBlbmRpbmdFbGVtZW50LmNhbGwodGhpcyk7XG5cdHRoaXMuJGVsZW1lbnQuYWRkQ2xhc3MoJ3B3di0yMDE3LXBlbmRpbmdTdGFja0xheW91dCcpO1xufTtcblxuT08uaW5oZXJpdENsYXNzKFBlbmRpbmdTdGFja0xheW91dCwgT08udWkuU3RhY2tMYXlvdXQpO1xuT08ubWl4aW5DbGFzcyhQZW5kaW5nU3RhY2tMYXlvdXQsIE9PLnVpLm1peGluLlBlbmRpbmdFbGVtZW50KTtcblxuY29uc3QgcHJvY2Vzc1Zpc3VhbEVkaXRvciA9ICgpID0+IHtcblx0Y29uc3Qge3NraW4sIHdnVXNlckxhbmd1YWdlLCB3Z1VzZXJWYXJpYW50fSA9IG13LmNvbmZpZy5nZXQoKTtcblx0bGV0IHZhcmlhbnQsIHRhcmdldCwgZGlhbG9nLCBkcm9wZG93biwgc3RhY2tMYXlvdXQsIHBhbmVsTGF5b3V0cywgd2luZG93TWFuYWdlciwgZXJyb3JEaWFsb2c7XG5cblx0Y29uc3QgY29uc3RydWN0RG9jdW1lbnQgPSAodGl0bGUsIHdpa2l0ZXh0LCBjYXRlZ29yaWVzKSA9PiB7XG5cdFx0Y29uc3QgJHJlc3VsdCA9ICQoJzxkaXY+JykuYWRkQ2xhc3MoJ213LWJvZHkgbXctYm9keS1jb250ZW50Jyk7XG5cblx0XHRpZiAoc2tpbiA9PT0gJ3ZlY3RvcicpIHtcblx0XHRcdC8vIEFkZGl0aW9uYWwgY2xhc3NlcyByZXF1aXJlZCBpbiB2ZWN0b3IgdG8gZ2V0IGNvcnJlY3QgYXBwZWFyYW5jZVxuXHRcdFx0JHJlc3VsdC5hZGRDbGFzcygndmVjdG9yLWJvZHknKTtcblx0XHR9XG5cblx0XHQkcmVzdWx0LmFwcGVuZChcblx0XHRcdCQoJzxoMT4nKS5hZGRDbGFzcygnZmlyc3RIZWFkaW5nJykuaHRtbCh0aXRsZSksXG5cdFx0XHQvLyBDbGFzc2VzIHVzZWQgaGVyZTpcblx0XHRcdC8vICogbXctY29udGVudC1sdHJcblx0XHRcdC8vICogbXctY29udGVudC1ydGxcblx0XHRcdCQoJzxkaXY+Jylcblx0XHRcdFx0LmFkZENsYXNzKGBtdy1jb250ZW50LSR7bXcuY29uZmlnLmdldCgnd2dWaXN1YWxFZGl0b3InKS5wYWdlTGFuZ3VhZ2VEaXJ9YClcblx0XHRcdFx0LmF0dHIoXG5cdFx0XHRcdFx0J2xhbmcnLFxuXHRcdFx0XHRcdERBVEEuZmluZCgoaXRlbSkgPT4ge1xuXHRcdFx0XHRcdFx0cmV0dXJuIGl0ZW0udmFyID09PSB2YXJpYW50O1xuXHRcdFx0XHRcdH0pLmh0bWxMYW5nXG5cdFx0XHRcdClcblx0XHRcdFx0Lmh0bWwod2lraXRleHQpLFxuXHRcdFx0JC5wYXJzZUhUTUwoY2F0ZWdvcmllcylcblx0XHQpO1xuXG5cdFx0Ly8gTWFrZSBvdGhlciB0aGluZ3MgbGlrZSBSZWZlcmVuY2UgVG9vbHRpcCBmdW5jdGlvblxuXHRcdG13Lmhvb2soJ3dpa2lwYWdlLmNvbnRlbnQnKS5maXJlKCRyZXN1bHQpO1xuXHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuXHRcdHZlLnRhcmdldExpbmtzVG9OZXdXaW5kb3coJHJlc3VsdFswXSk7XG5cdFx0cmV0dXJuICRyZXN1bHQ7XG5cdH07XG5cblx0Y29uc3QgZmV0Y2hQcmV2aWV3ID0gKCkgPT4ge1xuXHRcdGNvbnN0IGRlZmVycmVkID0gJC5EZWZlcnJlZCgpO1xuXHRcdC8vIEN1cnJlbnRseSAoQXVnIDIwMjEpLCBQYXJzb2lkIEFQSSBkb2VzIG5vdCBoYXZlIGZ1bGwgTEMgZnVuY3Rpb25hbGl0eSxcblx0XHQvLyBoZW5jZSB1c2UgcGFyc2UgQVBJIGluc3RlYWQuXG5cdFx0dGFyZ2V0XG5cdFx0XHQuZ2V0Q29udGVudEFwaSgpXG5cdFx0XHQucG9zdCh7XG5cdFx0XHRcdGFjdGlvbjogJ3BhcnNlJyxcblx0XHRcdFx0ZGlzYWJsZWVkaXRzZWN0aW9uOiB0cnVlLFxuXHRcdFx0XHRlcnJvcmZvcm1hdDogJ2h0bWwnLFxuXHRcdFx0XHRlcnJvcmxhbmc6IHdnVXNlckxhbmd1YWdlLFxuXHRcdFx0XHRlcnJvcnN1c2Vsb2NhbDogdHJ1ZSxcblx0XHRcdFx0Zm9ybWF0dmVyc2lvbjogMixcblx0XHRcdFx0cHJvcDogJ3RleHR8aW5kaWNhdG9yc3xkaXNwbGF5dGl0bGV8Y2F0ZWdvcmllc2h0bWx8cGFyc2V3YXJuaW5nc2h0bWwnLFxuXHRcdFx0XHRwc3Q6IHRydWUsXG5cdFx0XHRcdHByZXZpZXc6IHRydWUsXG5cdFx0XHRcdHRpdGxlOiB0YXJnZXQuZ2V0UGFnZU5hbWUoKSxcblx0XHRcdFx0dGV4dDogdGFyZ2V0LmdldERvY1RvU2F2ZSgpLFxuXHRcdFx0XHR1c2VsYW5nOiB3Z1VzZXJMYW5ndWFnZSxcblx0XHRcdFx0dmFyaWFudCxcblx0XHRcdH0pXG5cdFx0XHQudGhlbihcblx0XHRcdFx0KHJlc3BvbnNlKSA9PiB7XG5cdFx0XHRcdFx0dm9pZCBkZWZlcnJlZC5yZXNvbHZlKFxuXHRcdFx0XHRcdFx0Y29uc3RydWN0RG9jdW1lbnQoXG5cdFx0XHRcdFx0XHRcdHJlc3BvbnNlLnBhcnNlLmRpc3BsYXl0aXRsZSxcblx0XHRcdFx0XHRcdFx0cmVzcG9uc2UucGFyc2UudGV4dCxcblx0XHRcdFx0XHRcdFx0cmVzcG9uc2UucGFyc2UuY2F0ZWdvcmllc2h0bWxcblx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHQoZXJyb3IsIGRldGFpbCkgPT4ge1xuXHRcdFx0XHRcdHZvaWQgZGVmZXJyZWQucmVqZWN0KGRldGFpbCk7XG5cdFx0XHRcdH1cblx0XHRcdCk7XG5cdFx0cmV0dXJuIGRlZmVycmVkO1xuXHR9O1xuXG5cdGNvbnN0IGNoYW5nZVZhcmlhbnQgPSBmdW5jdGlvbiBjaGFuZ2VWYXJpYW50KHZhbCkge1xuXHRcdGRpYWxvZy5wcmV2aWV3UGFuZWwuJGVsZW1lbnRbMF0uZm9jdXMoKTtcblx0XHR2YXJpYW50ID0gdmFsO1xuXG5cdFx0Y29uc3QgdGFyZ2V0UGFuZWwgPSBzdGFja0xheW91dC5maW5kSXRlbUZyb21EYXRhKHZhcmlhbnQpO1xuXHRcdGlmICh0YXJnZXRQYW5lbC4kZWxlbWVudC5jaGlsZHJlbigpLmxlbmd0aCkge1xuXHRcdFx0c3RhY2tMYXlvdXQuc2V0SXRlbSh0YXJnZXRQYW5lbCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHN0YWNrTGF5b3V0LnB1c2hQZW5kaW5nKCk7XG5cdFx0XHRkcm9wZG93bi5zZXREaXNhYmxlZCh0cnVlKTtcblxuXHRcdFx0dm9pZCBmZXRjaFByZXZpZXcoKVxuXHRcdFx0XHQudGhlbihcblx0XHRcdFx0XHQoJHByZXZpZXdDb250YWluZXIpID0+IHtcblx0XHRcdFx0XHRcdHRhcmdldFBhbmVsLiRlbGVtZW50LmFwcGVuZCgkcHJldmlld0NvbnRhaW5lcik7XG5cdFx0XHRcdFx0XHRzdGFja0xheW91dC5zZXRJdGVtKHRhcmdldFBhbmVsKTtcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdChlcnJvcikgPT4ge1xuXHRcdFx0XHRcdFx0d2luZG93TWFuYWdlclxuXHRcdFx0XHRcdFx0XHQub3BlbldpbmRvdyhlcnJvckRpYWxvZywge1xuXHRcdFx0XHRcdFx0XHRcdHRpdGxlOiBPTy51aS5tc2coJ29vdWktZGlhbG9nLXByb2Nlc3MtZXJyb3InKSxcblx0XHRcdFx0XHRcdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcblx0XHRcdFx0XHRcdFx0XHRtZXNzYWdlOiB2ZS5pbml0LnRhcmdldC5nZXRDb250ZW50QXBpKCkuZ2V0RXJyb3JNZXNzYWdlKGVycm9yKSxcblx0XHRcdFx0XHRcdFx0XHRhY3Rpb25zOiBbXG5cdFx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGFjdGlvbjogJ3JlamVjdCcsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsOiBPTy51aS5kZWZlck1zZygnb291aS1kaWFsb2ctbWVzc2FnZS1yZWplY3QnKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZmxhZ3M6ICdzYWZlJyxcblx0XHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGFjdGlvbjogJ3JldHJ5Jyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0bGFiZWw6IE9PLnVpLmRlZmVyTXNnKCdvb3VpLWRpYWxvZy1wcm9jZXNzLXJldHJ5JyksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGZsYWdzOiBbJ3ByaW1hcnknLCAncHJvZ3Jlc3NpdmUnXSxcblx0XHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdFx0XSxcblx0XHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdFx0LmNsb3NlZC50aGVuKChkYXRhKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0aWYgKGRhdGEgJiYgZGF0YS5hY3Rpb24gPT09ICdyZXRyeScpIHtcblx0XHRcdFx0XHRcdFx0XHRcdC8vIERvIG5vdCB1c2Ugc2V0VmFsdWUoKSBzaW5jZSBpdCB3aWxsIG5vdCB0cmlnZ2VyIGV2ZW50XG5cdFx0XHRcdFx0XHRcdFx0XHRjaGFuZ2VWYXJpYW50KHZhcmlhbnQpO1xuXHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0XHQvLyBcInZhcmlhbnRcIiB3aWxsIGJlIHNldCBieSBldmVudCBoYW5kbGVyXG5cdFx0XHRcdFx0XHRcdFx0XHRkcm9wZG93bi5zZXRWYWx1ZShzdGFja0xheW91dC5nZXRDdXJyZW50SXRlbSgpLmdldERhdGEoKSk7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdClcblx0XHRcdFx0LmFsd2F5cygoKSA9PiB7XG5cdFx0XHRcdFx0c3RhY2tMYXlvdXQucG9wUGVuZGluZygpO1xuXHRcdFx0XHRcdGRyb3Bkb3duLnNldERpc2FibGVkKGZhbHNlKTtcblx0XHRcdFx0fSk7XG5cdFx0fVxuXHR9O1xuXG5cdGNvbnN0IHByZXZpZXdXaXRoVmFyaWFudCA9ICgpID0+IHtcblx0XHRjb25zdCBjdXJyZW50UGFuZWwgPSBzdGFja0xheW91dC5nZXRDdXJyZW50SXRlbSgpO1xuXG5cdFx0aWYgKGN1cnJlbnRQYW5lbC4kZWxlbWVudC5jaGlsZHJlbigpLmxlbmd0aCkge1xuXHRcdFx0ZGlhbG9nLnN3YXBQYW5lbCgncHJldmlldycpO1xuXHRcdFx0ZGlhbG9nLnByZXZpZXdQYW5lbC4kZWxlbWVudC5wcmVwZW5kKGRyb3Bkb3duLiRlbGVtZW50KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGFyZ2V0LmVtaXQoJ3NhdmVQcmV2aWV3Jyk7XG5cdFx0XHRkaWFsb2cucHVzaFBlbmRpbmcoKTtcblxuXHRcdFx0dm9pZCBmZXRjaFByZXZpZXcoKVxuXHRcdFx0XHQudGhlbihcblx0XHRcdFx0XHQoJHByZXZpZXdDb250ZW50KSA9PiB7XG5cdFx0XHRcdFx0XHR0YXJnZXRcblx0XHRcdFx0XHRcdFx0LmdldFN1cmZhY2UoKVxuXHRcdFx0XHRcdFx0XHQuZ2V0TW9kZWwoKVxuXHRcdFx0XHRcdFx0XHQuZ2V0RG9jdW1lbnQoKVxuXHRcdFx0XHRcdFx0XHQub25jZSgndHJhbnNhY3QnLCAoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0Zm9yIChjb25zdCBpdGVtIG9mIHBhbmVsTGF5b3V0cykge1xuXHRcdFx0XHRcdFx0XHRcdFx0aXRlbS4kZWxlbWVudC5lbXB0eSgpO1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRkaWFsb2cuc3dhcFBhbmVsKCdwcmV2aWV3Jyk7XG5cdFx0XHRcdFx0XHRjdXJyZW50UGFuZWwuJGVsZW1lbnQuYXBwZW5kKCRwcmV2aWV3Q29udGVudCk7XG5cdFx0XHRcdFx0XHRzdGFja0xheW91dC5zZXRJdGVtKHN0YWNrTGF5b3V0LmZpbmRJdGVtRnJvbURhdGEodmFyaWFudCkpO1xuXHRcdFx0XHRcdFx0Y29uc3QgJGJvZHkgPSAkKCdib2R5Jyk7XG5cdFx0XHRcdFx0XHRpZiAoISRib2R5LmZpbmQoYC4ke09QVElPTlMuY2xhc3NOYW1lfWApLmxlbmd0aCkge1xuXHRcdFx0XHRcdFx0XHRkaWFsb2cucHJldmlld1BhbmVsLiRlbGVtZW50LnByZXBlbmQoZHJvcGRvd24uJGVsZW1lbnQpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0KGVycm9yKSA9PiB7XG5cdFx0XHRcdFx0XHRkaWFsb2cuc2hvd0Vycm9ycyhcblx0XHRcdFx0XHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG5cdFx0XHRcdFx0XHRcdG5ldyBPTy51aS5FcnJvcih2ZS5pbml0LnRhcmdldC5nZXRDb250ZW50QXBpKCkuZ2V0RXJyb3JNZXNzYWdlKGVycm9yKSwge1xuXHRcdFx0XHRcdFx0XHRcdHJlY292ZXJhYmxlOiB0cnVlLFxuXHRcdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdClcblx0XHRcdFx0LmFsd2F5cygoKSA9PiB7XG5cdFx0XHRcdFx0ZGlhbG9nLnBvcFBlbmRpbmcoKTtcblx0XHRcdFx0fSk7XG5cdFx0fVxuXHR9O1xuXG5cdGNvbnN0IGluaXQgPSAoKSA9PiB7XG5cdFx0dmFyaWFudCA9IHdnVXNlclZhcmlhbnQ7XG5cdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG5cdFx0KHt0YXJnZXR9ID0gdmUuaW5pdCk7XG5cdFx0ZGlhbG9nID0gdGFyZ2V0LnNhdmVEaWFsb2c7XG5cdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1lZGlhd2lraS9jbGFzcy1kb2Ncblx0XHRkcm9wZG93biA9IG5ldyBPTy51aS5Ecm9wZG93bklucHV0V2lkZ2V0KHtcblx0XHRcdCRvdmVybGF5OiBkaWFsb2cuJG92ZXJsYXksXG5cdFx0XHRjbGFzc2VzOiBbT1BUSU9OUy5jbGFzc05hbWVdLFxuXHRcdFx0b3B0aW9uczogW1xuXHRcdFx0XHR7XG5cdFx0XHRcdFx0b3B0Z3JvdXA6IG13Lm1zZygncHd2LTIwMTctY2FwdGlvbicpLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHQuLi5EQVRBLm1hcCgoaXRlbSkgPT4ge1xuXHRcdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0XHRkYXRhOiBpdGVtLnZhcixcblx0XHRcdFx0XHRcdGxhYmVsOiBtdy5tc2coaXRlbS5tc2cpIC8qIGVzbGludC1kaXNhYmxlLWxpbmUgbWVkaWF3aWtpL21zZy1kb2MgKi8sXG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0fSksXG5cdFx0XHRdLFxuXHRcdFx0dmFsdWU6IHZhcmlhbnQsXG5cdFx0fSk7XG5cdFx0ZHJvcGRvd24ub24oJ2NoYW5nZScsIGNoYW5nZVZhcmlhbnQpO1xuXHRcdHBhbmVsTGF5b3V0cyA9IERBVEEubWFwKChpdGVtKSA9PiB7XG5cdFx0XHRyZXR1cm4gbmV3IE9PLnVpLlBhbmVsTGF5b3V0KHtcblx0XHRcdFx0ZXhwYW5kZWQ6IGZhbHNlLFxuXHRcdFx0XHRkYXRhOiBpdGVtLnZhcixcblx0XHRcdH0pO1xuXHRcdH0pO1xuXHRcdHN0YWNrTGF5b3V0ID0gbmV3IFBlbmRpbmdTdGFja0xheW91dCh7XG5cdFx0XHRleHBhbmRlZDogZmFsc2UsXG5cdFx0XHRpdGVtczogcGFuZWxMYXlvdXRzLFxuXHRcdH0pO1xuXHRcdHN0YWNrTGF5b3V0LnNldEl0ZW0oc3RhY2tMYXlvdXQuZmluZEl0ZW1Gcm9tRGF0YSh2YXJpYW50KSk7XG5cdFx0ZGlhbG9nLnByZXZpZXdQYW5lbC4kZWxlbWVudC5hcHBlbmQoc3RhY2tMYXlvdXQuJGVsZW1lbnQpO1xuXHRcdGVycm9yRGlhbG9nID0gbmV3IE9PLnVpLk1lc3NhZ2VEaWFsb2coKTtcblx0XHR3aW5kb3dNYW5hZ2VyID0gbmV3IE9PLnVpLldpbmRvd01hbmFnZXIoKTtcblx0XHR3aW5kb3dNYW5hZ2VyLmFkZFdpbmRvd3MoW2Vycm9yRGlhbG9nXSk7XG5cdFx0Y29uc3QgJGJvZHkgPSAkKCdib2R5Jyk7XG5cdFx0JGJvZHkuYXBwZW5kKHdpbmRvd01hbmFnZXIuJGVsZW1lbnQpO1xuXG5cdFx0Y29uc3QgaGFuZGxlclRvUmVtb3ZlID0gJ29uU2F2ZURpYWxvZ1ByZXZpZXcnO1xuXHRcdGRpYWxvZy5vZmYoJ3ByZXZpZXcnLCBoYW5kbGVyVG9SZW1vdmUsIHRhcmdldCkub24oJ3ByZXZpZXcnLCBwcmV2aWV3V2l0aFZhcmlhbnQpO1xuXG5cdFx0Ly8gU3dpdGNoaW5nIGJldHdlZW4gVkUgYW5kIE5XRSwgcmVxdWlyZXMgdG8gYmUgcmVpbml0aWFsaXplZFxuXHRcdG13Lmhvb2soJ3ZlLmFjdGl2YXRpb25Db21wbGV0ZScpLmFkZCgoKSA9PiB7XG5cdFx0XHRpZiAobXcuY29uZmlnLmdldChPUFRJT05TLmNvbmZpZ0tleSkpIHtcblx0XHRcdFx0bXcuY29uZmlnLnNldChPUFRJT05TLmNvbmZpZ0tleSwgZmFsc2UpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9O1xuXG5cdGlmICghbXcuY29uZmlnLmdldChPUFRJT05TLmNvbmZpZ0tleSkpIHtcblx0XHRpbml0KCk7XG5cdFx0bXcuY29uZmlnLnNldChPUFRJT05TLmNvbmZpZ0tleSwgdHJ1ZSk7XG5cdH1cbn07XG5cbmV4cG9ydCB7cHJvY2Vzc1Zpc3VhbEVkaXRvcn07XG4iLCAiaW1wb3J0ICcuL3Byb2Nlc3NXaWtpRWRpdG9yLmxlc3MnO1xuaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtWQVJJQU5UU30gZnJvbSAnLi9jb25zdGFudCc7XG4vKipcbiAqIEBkZXNjcmlwdGlvbiBBZGQgYSBcIlByZXZpZXcgd2l0aCB2YXJpYW50XCIgb3B0aW9uIHRvIHRoZSBlZGl0IGZvcm0uXG4gKi9cbmNvbnN0IHByb2Nlc3NXaWtpRWRpdG9yID0gKCk6IHZvaWQgPT4ge1xuXHRtdy5ob29rKCd3aWtpcGFnZS5lZGl0Zm9ybScpLmFkZCgoJGVkaXRGb3JtKTogdm9pZCA9PiB7XG5cdFx0Ly8gR3VhcmQgYWdhaW5zdCBkb3VibGUgaW5jbHVzaW9uc1xuXHRcdGlmIChtdy5jb25maWcuZ2V0KE9QVElPTlMuY29uZmlnS2V5KSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRjb25zdCB7d2dQYWdlQ29udGVudE1vZGVsLCB3Z1VzZXJWYXJpYW50fSA9IG13LmNvbmZpZy5nZXQoKTtcblx0XHRjb25zdCAkdGVtcGxhdGVTYW5kYm94UHJldmlldzogSlF1ZXJ5ID0gJGVkaXRGb3JtLmZpbmQoJ2lucHV0W25hbWU9XCJ3cFRlbXBsYXRlU2FuZGJveFByZXZpZXdcIl0nKTtcblx0XHQvLyBJdCBpcyBwb3NzaWJsZSB0aGF0IGEgdXNlciB3YW50IHRvIHByZXZpZXcgYSBwYWdlIHdpdGggYSBub24td2lraXRleHQgbW9kdWxlXG5cdFx0Ly8gRG8gbm90IHJldHVybiBpbiB0aGlzIGNhc2Vcblx0XHRpZiAod2dQYWdlQ29udGVudE1vZGVsICE9PSAnd2lraXRleHQnICYmICEkdGVtcGxhdGVTYW5kYm94UHJldmlldy5sZW5ndGgpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0Y29uc3QgJGxheW91dDogSlF1ZXJ5ID0gJGVkaXRGb3JtLmZpbmQoJy5lZGl0Q2hlY2tib3hlcyAub28tdWktaG9yaXpvbnRhbExheW91dCcpO1xuXHRcdGlmICghJGxheW91dC5sZW5ndGgpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0Ly8gR3VhcmQgYWdhaW5zdCBkb3VibGUgaW5jbHVzaW9uc1xuXHRcdG13LmNvbmZpZy5zZXQoT1BUSU9OUy5jb25maWdLZXksIHRydWUpO1xuXHRcdGNvbnN0IHVyaVZhcmlhbnQ6IHN0cmluZyB8IG51bGwgPSBtdy51dGlsLmdldFBhcmFtVmFsdWUoJ3ZhcmlhbnQnKTtcblx0XHRjb25zdCBjaGVja2JveDogT08udWkuQ2hlY2tib3hJbnB1dFdpZGdldCA9IG5ldyBPTy51aS5DaGVja2JveElucHV0V2lkZ2V0KHtcblx0XHRcdHNlbGVjdGVkOiBCb29sZWFuKHVyaVZhcmlhbnQpLFxuXHRcdH0pO1xuXHRcdGNvbnN0IGRyb3Bkb3duOiBPTy51aS5Ecm9wZG93bldpZGdldCA9IG5ldyBPTy51aS5Ecm9wZG93bldpZGdldCh7XG5cdFx0XHQkb3ZlcmxheTogdHJ1ZSxcblx0XHRcdGRpc2FibGVkOiAhY2hlY2tib3guaXNTZWxlY3RlZCgpLFxuXHRcdFx0bWVudToge1xuXHRcdFx0XHRpdGVtczogVkFSSUFOVFMubWFwKCh7ZGF0YSwgbGFiZWx9KTogT08udWkuTWVudU9wdGlvbldpZGdldCA9PiB7XG5cdFx0XHRcdFx0cmV0dXJuIG5ldyBPTy51aS5NZW51T3B0aW9uV2lkZ2V0KHtcblx0XHRcdFx0XHRcdGRhdGEsXG5cdFx0XHRcdFx0XHRsYWJlbCxcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fSksXG5cdFx0XHR9LFxuXHRcdH0pO1xuXHRcdGRyb3Bkb3duLmdldE1lbnUoKS5zZWxlY3RJdGVtQnlEYXRhKHdnVXNlclZhcmlhbnQgfHwgdXJpVmFyaWFudCB8fCBtdy51c2VyLm9wdGlvbnMuZ2V0KCd2YXJpYW50JykpO1xuXHRcdGNoZWNrYm94Lm9uKCdjaGFuZ2UnLCAoc2VsZWN0ZWQ6IGJvb2xlYW4gfCBzdHJpbmcpOiB2b2lkID0+IHtcblx0XHRcdGRyb3Bkb3duLnNldERpc2FibGVkKCFzZWxlY3RlZCk7XG5cdFx0fSk7XG5cdFx0Y29uc3QgZ2V0U2VsZWN0ZWRWYXJpYW50ID0gKCk6IHN0cmluZyB8IHVuZGVmaW5lZCA9PiB7XG5cdFx0XHRpZiAoIWNoZWNrYm94LmlzU2VsZWN0ZWQoKSkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBzZWxlY3RlZEl0ZW06IE9PLnVpLk9wdGlvbldpZGdldCB8IG51bGwgPSBkcm9wZG93blxuXHRcdFx0XHQuZ2V0TWVudSgpXG5cdFx0XHRcdC5maW5kU2VsZWN0ZWRJdGVtKCkgYXMgT08udWkuT3B0aW9uV2lkZ2V0IHwgbnVsbDtcblx0XHRcdHJldHVybiBzZWxlY3RlZEl0ZW0gPyAoc2VsZWN0ZWRJdGVtLmdldERhdGEoKSBhcyBzdHJpbmcpIDogdW5kZWZpbmVkO1xuXHRcdH07XG5cdFx0Y29uc3QgbWFuaXB1bGF0ZUFjdGlvblVybCA9ICgpOiB2b2lkID0+IHtcblx0XHRcdGNvbnN0IHNlbGVjdGVkVmFyaWFudDogc3RyaW5nIHwgdW5kZWZpbmVkID0gZ2V0U2VsZWN0ZWRWYXJpYW50KCk7XG5cdFx0XHRjb25zdCBvcmlnaW5hbEFjdGlvbjogc3RyaW5nIHwgdW5kZWZpbmVkID0gJGVkaXRGb3JtLmF0dHIoJ2FjdGlvbicpO1xuXHRcdFx0aWYgKHNlbGVjdGVkVmFyaWFudCAmJiBvcmlnaW5hbEFjdGlvbikge1xuXHRcdFx0XHQkZWRpdEZvcm0uYXR0cihcblx0XHRcdFx0XHQnYWN0aW9uJyxcblx0XHRcdFx0XHRuZXcgbXcuVXJpKG9yaWdpbmFsQWN0aW9uKVxuXHRcdFx0XHRcdFx0LmV4dGVuZCh7XG5cdFx0XHRcdFx0XHRcdHZhcmlhbnQ6IHNlbGVjdGVkVmFyaWFudCxcblx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XHQuZ2V0UmVsYXRpdmVQYXRoKClcblx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHR9O1xuXHRcdGNvbnN0IG1hbmlwdWxhdGVWYXJpYW50Q29uZmlnID0gKCk6IHZvaWQgPT4ge1xuXHRcdFx0bXcuY29uZmlnLnNldCgnd2dVc2VyVmFyaWFudCcsIGdldFNlbGVjdGVkVmFyaWFudCgpIHx8IChtdy51c2VyLm9wdGlvbnMuZ2V0KCd2YXJpYW50JykgYXMgc3RyaW5nKSk7XG5cdFx0fTtcblx0XHQkZWRpdEZvcm1cblx0XHRcdC5maW5kKCdpbnB1dFtuYW1lPXdwUHJldmlld10nKVxuXHRcdFx0Lm9uKCdjbGljaycsIG13LnVzZXIub3B0aW9ucy5nZXQoJ3VzZWxpdmVwcmV2aWV3JykgPyBtYW5pcHVsYXRlVmFyaWFudENvbmZpZyA6IG1hbmlwdWxhdGVBY3Rpb25VcmwpO1xuXHRcdCR0ZW1wbGF0ZVNhbmRib3hQcmV2aWV3Lm9uKCdjbGljaycsIG1hbmlwdWxhdGVBY3Rpb25VcmwpO1xuXHRcdGRyb3Bkb3duLmdldE1lbnUoKS5vbignc2VsZWN0JywgbWFuaXB1bGF0ZVZhcmlhbnRDb25maWcpO1xuXHRcdGNvbnN0IGNoZWNrYm94RmllbGQ6IE9PLnVpLkZpZWxkTGF5b3V0PE9PLnVpLkNoZWNrYm94SW5wdXRXaWRnZXQ+ID0gbmV3IE9PLnVpLkZpZWxkTGF5b3V0KGNoZWNrYm94LCB7XG5cdFx0XHRhbGlnbjogJ2lubGluZScsXG5cdFx0XHRsYWJlbDogd2luZG93LndnVUxTKCfpooTop4jlrZfor43ovazmjaInLCAn6aCQ6Ka95a2X6Kme6L2J5o+bJyksXG5cdFx0fSk7XG5cdFx0Y29uc3QgZHJvcGRvd25GaWVsZDogT08udWkuRmllbGRMYXlvdXQ8T08udWkuRHJvcGRvd25XaWRnZXQ+ID0gbmV3IE9PLnVpLkZpZWxkTGF5b3V0KGRyb3Bkb3duLCB7XG5cdFx0XHRhbGlnbjogJ3RvcCcsXG5cdFx0XHRsYWJlbDogd2luZG93LndnVUxTKCfkvb/nlKjor6Xor63oqIDlj5jkvZPmmL7npLrpooTop4jvvJonLCAn5L2/55So6Kmy6Kqe6KiA6K6K6auU6aGv56S66aCQ6Ka977yaJyksXG5cdFx0XHRpbnZpc2libGVMYWJlbDogdHJ1ZSxcblx0XHR9KTtcblx0XHQkbGF5b3V0LmFwcGVuZCgkKCc8ZGl2PicpLmF0dHIoJ2lkJywgJ3B3di1hcmVhJykuYXBwZW5kKGNoZWNrYm94RmllbGQuJGVsZW1lbnQsIGRyb3Bkb3duRmllbGQuJGVsZW1lbnQpKTtcblx0fSk7XG59O1xuXG5leHBvcnQge3Byb2Nlc3NXaWtpRWRpdG9yfTtcbiIsICJpbXBvcnQge3Byb2Nlc3NWaXN1YWxFZGl0b3J9IGZyb20gJy4vbW9kdWxlcy9wcm9jZXNzVmlzdWFsRWRpdG9yJztcbmltcG9ydCB7cHJvY2Vzc1dpa2lFZGl0b3J9IGZyb20gJy4vbW9kdWxlcy9wcm9jZXNzV2lraUVkaXRvcic7XG5cbihmdW5jdGlvbiBwcmV2aWV3V2l0aFZhcmlhbnRzKCk6IHZvaWQge1xuXHRtdy5ob29rKCd3aWtpcGFnZS5lZGl0Zm9ybScpLmFkZCgoKTogdm9pZCA9PiB7XG5cdFx0cHJvY2Vzc1dpa2lFZGl0b3IoKTtcblx0fSk7XG5cblx0bXcuaG9vaygndmUuc2F2ZURpYWxvZy5zdGF0ZUNoYW5nZWQnKS5hZGQoKCk6IHZvaWQgPT4ge1xuXHRcdHByb2Nlc3NWaXN1YWxFZGl0b3IoKTtcblx0fSk7XG59KSgpO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0MsSUFBQUEsWUFBYTtBQUNiLElBQUFDLFlBQWE7O0FDRmQsSUFBTUMsV0FHQSxDQUNMO0VBQ0NDLE1BQU07RUFDTkMsT0FBT0MsT0FBT0MsTUFBTSxPQUFPLEtBQUs7QUFDakMsR0FDQTtFQUNDSCxNQUFNO0VBQ05DLE9BQU87QUFDUixHQUNBO0VBQ0NELE1BQU07RUFDTkMsT0FBTztBQUNSLEdBQ0E7RUFDQ0QsTUFBTTtFQUNOQyxPQUFPO0FBQ1IsR0FDQTtFQUNDRCxNQUFNO0VBQ05DLE9BQU87QUFDUixHQUNBO0VBQ0NELE1BQU07RUFDTkMsT0FBTztBQUNSLEdBQ0E7RUFDQ0QsTUFBTTtFQUNOQyxPQUFPO0FBQ1IsR0FDQTtFQUNDRCxNQUFNO0VBQ05DLE9BQU87QUFDUixHQUNBO0VBQ0NELE1BQU07RUFDTkMsT0FBTztBQUNSLENBQUE7QUFHRCxJQUFNRyxPQUFPLENBQ1o7RUFBQ0MsS0FBSztFQUFNQyxVQUFVO0VBQU1DLEtBQUs7QUFBYSxHQUM5QztFQUFDRixLQUFLO0VBQVdDLFVBQVU7RUFBV0MsS0FBSztBQUFrQixHQUM3RDtFQUFDRixLQUFLO0VBQVdDLFVBQVU7RUFBV0MsS0FBSztBQUFrQixHQUM3RDtFQUFDRixLQUFLO0VBQVNDLFVBQVU7RUFBY0MsS0FBSztBQUFnQixHQUM1RDtFQUFDRixLQUFLO0VBQVNDLFVBQVU7RUFBY0MsS0FBSztBQUFnQixHQUM1RDtFQUFDRixLQUFLO0VBQVNDLFVBQVU7RUFBY0MsS0FBSztBQUFnQixHQUM1RDtFQUFDRixLQUFLO0VBQVNDLFVBQVU7RUFBY0MsS0FBSztBQUFnQixHQUM1RDtFQUFDRixLQUFLO0VBQVNDLFVBQVU7RUFBY0MsS0FB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a0ssS0FBS2hDLFFBQVE3RyxJQUFJLFNBQVMsQ0FBWTtJQUNsRztBQUNBMkgsY0FDRXZHLEtBQUssdUJBQXVCLEVBQzVCNEYsR0FBRyxTQUFTckksR0FBR2tLLEtBQUtoQyxRQUFRN0csSUFBSSxnQkFBZ0IsSUFBSXVKLDBCQUEwQk4sbUJBQW1CO0FBQ25HcEIsNEJBQXdCYixHQUFHLFNBQVNpQyxtQkFBbUI7QUFDdkQ3SSxhQUFTdUksUUFBUSxFQUFFM0IsR0FBRyxVQUFVdUMsdUJBQXVCO0FBQ3ZELFVBQU1DLGdCQUE4RCxJQUFJckssR0FBR0MsR0FBR3FLLFlBQVl2QixVQUFVO01BQ25Hd0IsT0FBTztNQUNQdkwsT0FBT0MsT0FBT0MsTUFBTSxVQUFVLFFBQVE7SUFDdkMsQ0FBQztBQUNELFVBQU1zTCxnQkFBeUQsSUFBSXhLLEdBQUdDLEdBQUdxSyxZQUFZckosVUFBVTtNQUM5RnNKLE9BQU87TUFDUHZMLE9BQU9DLE9BQU9DLE1BQU0sZ0JBQWdCLGNBQWM7TUFDbER1TCxnQkFBZ0I7SUFDakIsQ0FBQztBQUNEOUIsWUFBUS9HLE9BQU9ELEVBQUUsT0FBTyxFQUFFSyxLQUFLLE1BQU0sVUFBVSxFQUFFSixPQUFPeUksY0FBY2pLLFVBQVVvSyxjQUFjcEssUUFBUSxDQUFDO0VBQ3hHLENBQUM7QUFDRjs7Q0NwRkMsU0FBU3NLLHNCQUE0QjtBQUNyQ2xMLEtBQUc0QyxLQUFLLG1CQUFtQixFQUFFa0csSUFBSSxNQUFZO0FBQzVDQyxzQkFBa0I7RUFDbkIsQ0FBQztBQUVEL0ksS0FBRzRDLEtBQUssNEJBQTRCLEVBQUVrRyxJQUFJLE1BQVk7QUFDckQ3SCx3QkFBb0I7RUFDckIsQ0FBQztBQUNGLEdBQUc7IiwKICAibmFtZXMiOiBbImNvbmZpZ0tleSIsICJjbGFzc05hbWUiLCAiVkFSSUFOVFMiLCAiZGF0YSIsICJsYWJlbCIsICJ3aW5kb3ciLCAid2dVTFMiLCAiREFUQSIsICJ2YXIiLCAiaHRtbExhbmciLCAibXNnIiwgIlBXVjIwMTdtZXNzYWdlcyIsICJtdyIsICJtZXNzYWdlcyIsICJzZXQiLCAiY29uZmlnIiwgIlBlbmRpbmdTdGFja0xheW91dCIsICJQZW5kaW5nU3RhY2tMYXlvdXQyIiwgInN1cGVyIiwgImNhbGwiLCAiT08iLCAidWkiLCAibWl4aW4iLCAiUGVuZGluZ0VsZW1lbnQiLCAiJGVsZW1lbnQiLCAiYWRkQ2xhc3MiLCAiaW5oZXJpdENsYXNzIiwgIlN0YWNrTGF5b3V0IiwgIm1peGluQ2xhc3MiLCAicHJvY2Vzc1Zpc3VhbEVkaXRvciIsICJza2luIiwgIndnVXNlckxhbmd1YWdlIiwgIndnVXNlclZhcmlhbnQiLCAiZ2V0IiwgInZhcmlhbnQiLCAidGFyZ2V0IiwgImRpYWxvZyIsICJkcm9wZG93biIsICJzdGFja0xheW91dCIsICJwYW5lbExheW91dHMiLCAid2luZG93TWFuYWdlciIsICJlcnJvckRpYWxvZyIsICJjb25zdHJ1Y3REb2N1bWVudCIsICJ0aXRsZSIsICJ3aWtpdGV4dCIsICJjYXRlZ29yaWVzIiwgIiRyZXN1bHQiLCAiJCIsICJhcHBlbmQiLCAiaHRtbCIsICJjb25jYXQiLCAicGFnZUxhbmd1YWdlRGlyIiwgImF0dHIiLCAiZmluZCIsICJpdGVtIiwgInBhcnNlSFRNTCIsICJob29rIiwgImZpcmUiLCAidmUiLCAidGFyZ2V0TGlua3NUb05ld1dpbmRvdyIsICJmZXRjaFByZXZpZXciLCAiZGVmZXJyZWQiLCAiRGVmZXJyZWQiLCAiZ2V0Q29udGVudEFwaSIsICJwb3N0IiwgImFjdGlvbiIsICJkaXNhYmxlZWRpdHNlY3Rpb24iLCAiZXJyb3Jmb3JtYXQiLCAiZXJyb3JsYW5nIiwgImVycm9yc3VzZWxvY2FsIiwgImZvcm1hdHZlcnNpb24iLCAicHJvcCIsICJwc3QiLCAicHJldmlldyIsICJnZXRQYWdlTmFtZSIsICJ0ZXh0IiwgImdldERvY1RvU2F2ZSIsICJ1c2VsYW5nIiwgInRoZW4iLCAicmVzcG9uc2UiLCAicmVzb2x2ZSIsICJwYXJzZSIsICJkaXNwbGF5dGl0bGUiLCAiY2F0ZWdvcmllc2h0bWwiLCAiZXJyb3IiLCAiZGV0YWlsIiwgInJlamVjdCIsICJjaGFuZ2VWYXJpYW50IiwgImNoYW5nZVZhcmlhbnQyIiwgInZhbCIsICJwcmV2aWV3UGFuZWwiLCAiZm9jdXMiLCAidGFyZ2V0UGFuZWwiLCAiZmluZEl0ZW1Gcm9tRGF0YSIsICJjaGlsZHJlbiIsICJsZW5ndGgiLCAic2V0SXRlbSIsICJwdXNoUGVuZGluZyIsICJzZXREaXNhYmxlZCIsICIkcHJldmlld0NvbnRhaW5lciIsICJvcGVuV2luZG93IiwgIm1lc3NhZ2UiLCAiaW5pdCIsICJnZXRFcnJvck1lc3NhZ2UiLCAiYWN0aW9ucyIsICJkZWZlck1zZyIsICJmbGFncyIsICJjbG9zZWQiLCAic2V0VmFsdWUiLCAiZ2V0Q3VycmVudEl0ZW0iLCAiZ2V0RGF0YSIsICJhbHdheXMiLCAicG9wUGVuZGluZyIsICJwcmV2aWV3V2l0aFZhcmlhbnQiLCAiY3VycmVudFBhbmVsIiwgInN3YXBQYW5lbCIsICJwcmVwZW5kIiwgImVtaXQiLCAiJHByZXZpZXdDb250ZW50IiwgImdldFN1cmZhY2UiLCAiZ2V0TW9kZWwiLCAiZ2V0RG9jdW1lbnQiLCAib25jZSIsICJfaXRlcmF0b3IiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAiX3N0ZXAiLCAicyIsICJuIiwgImRvbmUiLCAidmFsdWUiLCAiZW1wdHkiLCAiZXJyIiwgImUiLCAiZiIsICIkYm9keSIsICJzaG93RXJyb3JzIiwgIkVycm9yIiwgInJlY292ZXJhYmxlIiwgInNhdmVEaWFsb2ciLCAiRHJvcGRvd25JbnB1dFdpZGdldCIsICIkb3ZlcmxheSIsICJjbGFzc2VzIiwgIm9wdGlvbnMiLCAib3B0Z3JvdXAiLCAibWFwIiwgIm9uIiwgIlBhbmVsTGF5b3V0IiwgImV4cGFuZGVkIiwgIml0ZW1zIiwgIk1lc3NhZ2VEaWFsb2ciLCAiV2luZG93TWFuYWdlciIsICJhZGRXaW5kb3dzIiwgImhhbmRsZXJUb1JlbW92ZSIsICJvZmYiLCAiYWRkIiwgInByb2Nlc3NXaWtpRWRpdG9yIiwgIiRlZGl0Rm9ybSIsICJ3Z1BhZ2VDb250ZW50TW9kZWwiLCAiJHRlbXBsYXRlU2FuZGJveFByZXZpZXciLCAiJGxheW91dCIsICJ1cmlWYXJpYW50IiwgInV0aWwiLCAiZ2V0UGFyYW1WYWx1ZSIsICJjaGVja2JveCIsICJDaGVja2JveElucHV0V2lkZ2V0IiwgInNlbGVjdGVkIiwgIkJvb2xlYW4iLCAiRHJvcGRvd25XaWRnZXQiLCAiZGlzYWJsZWQiLCAiaXNTZWxlY3RlZCIsICJtZW51IiwgIk1lbnVPcHRpb25XaWRnZXQiLCAiZ2V0TWVudSIsICJzZWxlY3RJdGVtQnlEYXRhIiwgInVzZXIiLCAiZ2V0U2VsZWN0ZWRWYXJpYW50IiwgInNlbGVjdGVkSXRlbSIsICJmaW5kU2VsZWN0ZWRJdGVtIiwgIm1hbmlwdWxhdGVBY3Rpb25VcmwiLCAic2VsZWN0ZWRWYXJpYW50IiwgIm9yaWdpbmFsQWN0aW9uIiwgIlVyaSIsICJleHRlbmQiLCAiZ2V0UmVsYXRpdmVQYXRoIiwgIm1hbmlwdWxhdGVWYXJpYW50Q29uZmlnIiwgImNoZWNrYm94RmllbGQiLCAiRmllbGRMYXlvdXQiLCAiYWxpZ24iLCAiZHJvcGRvd25GaWVsZCIsICJpbnZpc2libGVMYWJlbCIsICJwcmV2aWV3V2l0aFZhcmlhbnRzIl0KfQo=

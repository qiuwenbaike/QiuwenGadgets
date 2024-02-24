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
mw.config.set("wgPreviewWithVariantInitialized", false);
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
    mw.config.set("wgPreviewWithVariant2017Initialized", true);
    mw.hook("ve.activationComplete").add(() => {
      if (mw.config.get("wgPreviewWithVariantInitialized")) {
        mw.config.set("wgPreviewWithVariantInitialized", false);
      }
    });
  };
  if (!mw.config.get("wgPreviewWithVariantInitialized")) {
    init();
    mw.config.set("wgPreviewWithVariantInitialized", true);
  }
};
//! src/PreviewWithVariant/modules/processWikiEditor.ts
var processWikiEditor = () => {
  mw.hook("wikipage.editform").add(($editForm) => {
    if (mw.config.get("wgPreviewWithVariantInitialized")) {
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
    mw.config.set("wgPreviewWithVariantInitialized", true);
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1ByZXZpZXdXaXRoVmFyaWFudC9tb2R1bGVzL2NvbnN0YW50LnRzIiwgInNyYy9QcmV2aWV3V2l0aFZhcmlhbnQvbW9kdWxlcy9tZXNzYWdlcy50cyIsICJzcmMvUHJldmlld1dpdGhWYXJpYW50L21vZHVsZXMvcHJvY2Vzc1Zpc3VhbEVkaXRvci5qcyIsICJzcmMvUHJldmlld1dpdGhWYXJpYW50L21vZHVsZXMvcHJvY2Vzc1dpa2lFZGl0b3IudHMiLCAic3JjL1ByZXZpZXdXaXRoVmFyaWFudC9QcmV2aWV3V2l0aFZhcmlhbnQudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IENMQVNTX05BTUUgPSAncHd2LTIwMTctdmFyaWFudCc7XG5cbmNvbnN0IFZBUklBTlRTOiB7XG5cdGRhdGE6IHN0cmluZztcblx0bGFiZWw6IHN0cmluZztcbn1bXSA9IFtcblx0e1xuXHRcdGRhdGE6ICd6aCcsXG5cdFx0bGFiZWw6IHdpbmRvdy53Z1VMUygn5LiN6L2s5o2iJywgJ+S4jei9ieaPmycpLFxuXHR9LFxuXHR7XG5cdFx0ZGF0YTogJ3poLWhhbnMnLFxuXHRcdGxhYmVsOiAn566A5L2TJyxcblx0fSxcblx0e1xuXHRcdGRhdGE6ICd6aC1oYW50Jyxcblx0XHRsYWJlbDogJ+e5gemrlCcsXG5cdH0sXG5cdHtcblx0XHRkYXRhOiAnemgtY24nLFxuXHRcdGxhYmVsOiAn5Lit5Zu95aSn6ZmG566A5L2TJyxcblx0fSxcblx0e1xuXHRcdGRhdGE6ICd6aC1oaycsXG5cdFx0bGFiZWw6ICfkuK3lnIvpppnmuK/nuYHpq5QnLFxuXHR9LFxuXHR7XG5cdFx0ZGF0YTogJ3poLW1vJyxcblx0XHRsYWJlbDogJ+S4reWci+a+s+mWgOe5gemrlCcsXG5cdH0sXG5cdHtcblx0XHRkYXRhOiAnemgtbXknLFxuXHRcdGxhYmVsOiAn6ams5p2l6KW/5Lqa566A5L2TJyxcblx0fSxcblx0e1xuXHRcdGRhdGE6ICd6aC1zZycsXG5cdFx0bGFiZWw6ICfmlrDliqDlnaHnroDkvZMnLFxuXHR9LFxuXHR7XG5cdFx0ZGF0YTogJ3poLXR3Jyxcblx0XHRsYWJlbDogJ+S4reWci+iHuueBo+e5gemrlCcsXG5cdH0sXG5dO1xuXG5jb25zdCBEQVRBID0gW1xuXHR7dmFyOiAnemgnLCBodG1sTGFuZzogJ3poJywgbXNnOiAncHd2LTIwMTctemgnfSxcblx0e3ZhcjogJ3poLWhhbnMnLCBodG1sTGFuZzogJ3poLUhhbnMnLCBtc2c6ICdwd3YtMjAxNy16aC1oYW5zJ30sXG5cdHt2YXI6ICd6aC1oYW50JywgaHRtbExhbmc6ICd6aC1IYW50JywgbXNnOiAncHd2LTIwMTctemgtaGFudCd9LFxuXHR7dmFyOiAnemgtY24nLCBodG1sTGFuZzogJ3poLUhhbnMtQ04nLCBtc2c6ICdwd3YtMjAxNy16aC1jbid9LFxuXHR7dmFyOiAnemgtaGsnLCBodG1sTGFuZzogJ3poLUhhbnQtSEsnLCBtc2c6ICdwd3YtMjAxNy16aC1oayd9LFxuXHR7dmFyOiAnemgtbW8nLCBodG1sTGFuZzogJ3poLUhhbnQtTU8nLCBtc2c6ICdwd3YtMjAxNy16aC1tbyd9LFxuXHR7dmFyOiAnemgtbXknLCBodG1sTGFuZzogJ3poLUhhbnMtTVknLCBtc2c6ICdwd3YtMjAxNy16aC1teSd9LFxuXHR7dmFyOiAnemgtc2cnLCBodG1sTGFuZzogJ3poLUhhbnMtU0cnLCBtc2c6ICdwd3YtMjAxNy16aC1zZyd9LFxuXHR7dmFyOiAnemgtdHcnLCBodG1sTGFuZzogJ3poLUhhbnQtVFcnLCBtc2c6ICdwd3YtMjAxNy16aC10dyd9LFxuXTtcblxuY29uc3QgV0dfU0tJTiA9IG13LmNvbmZpZy5nZXQoJ3NraW4nKTtcblxuY29uc3QgV0dfUEFHRV9DT05URU5UX01PREVMID0gbXcuY29uZmlnLmdldCgnd2dQYWdlQ29udGVudE1vZGVsJyk7XG5cbmNvbnN0IFdHX1VTRVJfTEFOR1VBR0U6IHN0cmluZyA9IG13LmNvbmZpZy5nZXQoJ3dnVXNlckxhbmd1YWdlJyk7XG5cbmNvbnN0IFdHX1VTRVJfVkFSSUFOVDogc3RyaW5nIHwgbnVsbCA9IG13LmNvbmZpZy5nZXQoJ3dnVXNlclZhcmlhbnQnKTtcblxuZXhwb3J0IHtDTEFTU19OQU1FLCBEQVRBLCBXR19TS0lOLCBXR19VU0VSX0xBTkdVQUdFLCBWQVJJQU5UUywgV0dfUEFHRV9DT05URU5UX01PREVMLCBXR19VU0VSX1ZBUklBTlR9O1xuIiwgImNvbnN0IFBXVjIwMTdtZXNzYWdlcyA9ICgpID0+IHtcblx0bXcubWVzc2FnZXMuc2V0KHtcblx0XHQncHd2LTIwMTctY2FwdGlvbic6IHdpbmRvdy53Z1VMUygn6YCJ5oup6K+t6KiA5Y+Y5L2TJywgJ+mBuOaTh+iqnuiogOiuiumrlCcpLFxuXHRcdCdwd3YtMjAxNy16aCc6IHdpbmRvdy53Z1VMUygn5LiN6L2s5o2iJywgJ+S4jei9ieaPmycpLFxuXHRcdCdwd3YtMjAxNy16aC1oYW5zJzogJ+eugOS9kycsXG5cdFx0J3B3di0yMDE3LXpoLWhhbnQnOiAn57mB6auUJyxcblx0XHQncHd2LTIwMTctemgtY24nOiAn5aSn6ZmG566A5L2TJyxcblx0XHQncHd2LTIwMTctemgtaGsnOiAn6aaZ5riv57mB6auUJyxcblx0XHQncHd2LTIwMTctemgtbW8nOiAn5r6z6ZaA57mB6auUJyxcblx0XHQncHd2LTIwMTctemgtbXknOiAn5aSn6ams566A5L2TJyxcblx0XHQncHd2LTIwMTctemgtc2cnOiAn5paw5Yqg5Z2h566A5L2TJyxcblx0XHQncHd2LTIwMTctemgtdHcnOiAn6Ie654Gj5q2j6auUJyxcblx0fSk7XG59O1xuXG5leHBvcnQge1BXVjIwMTdtZXNzYWdlc307XG4iLCAiLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHMtY29tbWVudFxuLy8gQHRzLW5vY2hlY2tcbmltcG9ydCAnLi9wcm9jZXNzVmlzdWFsRWRpdG9yLmxlc3MnO1xuaW1wb3J0IHtDTEFTU19OQU1FLCBEQVRBLCBXR19TS0lOLCBXR19VU0VSX0xBTkdVQUdFLCBXR19VU0VSX1ZBUklBTlR9IGZyb20gJy4vY29uc3RhbnQnO1xuaW1wb3J0IHtQV1YyMDE3bWVzc2FnZXN9IGZyb20gJy4vbWVzc2FnZXMnO1xuXG5tdy5jb25maWcuc2V0KCd3Z1ByZXZpZXdXaXRoVmFyaWFudEluaXRpYWxpemVkJywgZmFsc2UpO1xuXG5QV1YyMDE3bWVzc2FnZXMoKTtcblxuY29uc3QgUGVuZGluZ1N0YWNrTGF5b3V0ID0gZnVuY3Rpb24gUGVuZGluZ1N0YWNrTGF5b3V0KGNvbmZpZykge1xuXHRQZW5kaW5nU3RhY2tMYXlvdXQuc3VwZXIuY2FsbCh0aGlzLCBjb25maWcpO1xuXHRPTy51aS5taXhpbi5QZW5kaW5nRWxlbWVudC5jYWxsKHRoaXMpO1xuXHR0aGlzLiRlbGVtZW50LmFkZENsYXNzKCdwd3YtMjAxNy1wZW5kaW5nU3RhY2tMYXlvdXQnKTtcbn07XG5cbk9PLmluaGVyaXRDbGFzcyhQZW5kaW5nU3RhY2tMYXlvdXQsIE9PLnVpLlN0YWNrTGF5b3V0KTtcbk9PLm1peGluQ2xhc3MoUGVuZGluZ1N0YWNrTGF5b3V0LCBPTy51aS5taXhpbi5QZW5kaW5nRWxlbWVudCk7XG5cbmNvbnN0IHByb2Nlc3NWaXN1YWxFZGl0b3IgPSAoKSA9PiB7XG5cdGxldCB2YXJpYW50LCB0YXJnZXQsIGRpYWxvZywgZHJvcGRvd24sIHN0YWNrTGF5b3V0LCBwYW5lbExheW91dHMsIHdpbmRvd01hbmFnZXIsIGVycm9yRGlhbG9nO1xuXG5cdGNvbnN0IGNvbnN0cnVjdERvY3VtZW50ID0gKHRpdGxlLCB3aWtpdGV4dCwgY2F0ZWdvcmllcykgPT4ge1xuXHRcdGNvbnN0ICRyZXN1bHQgPSAkKCc8ZGl2PicpLmFkZENsYXNzKCdtdy1ib2R5IG13LWJvZHktY29udGVudCcpO1xuXG5cdFx0aWYgKFdHX1NLSU4gPT09ICd2ZWN0b3InKSB7XG5cdFx0XHQvLyBBZGRpdGlvbmFsIGNsYXNzZXMgcmVxdWlyZWQgaW4gdmVjdG9yIHRvIGdldCBjb3JyZWN0IGFwcGVhcmFuY2Vcblx0XHRcdCRyZXN1bHQuYWRkQ2xhc3MoJ3ZlY3Rvci1ib2R5Jyk7XG5cdFx0fVxuXG5cdFx0JHJlc3VsdC5hcHBlbmQoXG5cdFx0XHQkKCc8aDE+JykuYWRkQ2xhc3MoJ2ZpcnN0SGVhZGluZycpLmh0bWwodGl0bGUpLFxuXHRcdFx0Ly8gQ2xhc3NlcyB1c2VkIGhlcmU6XG5cdFx0XHQvLyAqIG13LWNvbnRlbnQtbHRyXG5cdFx0XHQvLyAqIG13LWNvbnRlbnQtcnRsXG5cdFx0XHQkKCc8ZGl2PicpXG5cdFx0XHRcdC5hZGRDbGFzcyhgbXctY29udGVudC0ke213LmNvbmZpZy5nZXQoJ3dnVmlzdWFsRWRpdG9yJykucGFnZUxhbmd1YWdlRGlyfWApXG5cdFx0XHRcdC5hdHRyKFxuXHRcdFx0XHRcdCdsYW5nJyxcblx0XHRcdFx0XHREQVRBLmZpbmQoKGl0ZW0pID0+IHtcblx0XHRcdFx0XHRcdHJldHVybiBpdGVtLnZhciA9PT0gdmFyaWFudDtcblx0XHRcdFx0XHR9KS5odG1sTGFuZ1xuXHRcdFx0XHQpXG5cdFx0XHRcdC5odG1sKHdpa2l0ZXh0KSxcblx0XHRcdCQucGFyc2VIVE1MKGNhdGVnb3JpZXMpXG5cdFx0KTtcblxuXHRcdC8vIE1ha2Ugb3RoZXIgdGhpbmdzIGxpa2UgUmVmZXJlbmNlIFRvb2x0aXAgZnVuY3Rpb25cblx0XHRtdy5ob29rKCd3aWtpcGFnZS5jb250ZW50JykuZmlyZSgkcmVzdWx0KTtcblx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcblx0XHR2ZS50YXJnZXRMaW5rc1RvTmV3V2luZG93KCRyZXN1bHRbMF0pO1xuXHRcdHJldHVybiAkcmVzdWx0O1xuXHR9O1xuXG5cdGNvbnN0IGZldGNoUHJldmlldyA9ICgpID0+IHtcblx0XHRjb25zdCBkZWZlcnJlZCA9ICQuRGVmZXJyZWQoKTtcblx0XHQvLyBDdXJyZW50bHkgKEF1ZyAyMDIxKSwgUGFyc29pZCBBUEkgZG9lcyBub3QgaGF2ZSBmdWxsIExDIGZ1bmN0aW9uYWxpdHksXG5cdFx0Ly8gaGVuY2UgdXNlIHBhcnNlIEFQSSBpbnN0ZWFkLlxuXHRcdHRhcmdldFxuXHRcdFx0LmdldENvbnRlbnRBcGkoKVxuXHRcdFx0LnBvc3Qoe1xuXHRcdFx0XHRhY3Rpb246ICdwYXJzZScsXG5cdFx0XHRcdGRpc2FibGVlZGl0c2VjdGlvbjogdHJ1ZSxcblx0XHRcdFx0ZXJyb3Jmb3JtYXQ6ICdodG1sJyxcblx0XHRcdFx0ZXJyb3JsYW5nOiBXR19VU0VSX0xBTkdVQUdFLFxuXHRcdFx0XHRlcnJvcnN1c2Vsb2NhbDogdHJ1ZSxcblx0XHRcdFx0Zm9ybWF0dmVyc2lvbjogMixcblx0XHRcdFx0cHJvcDogJ3RleHR8aW5kaWNhdG9yc3xkaXNwbGF5dGl0bGV8Y2F0ZWdvcmllc2h0bWx8cGFyc2V3YXJuaW5nc2h0bWwnLFxuXHRcdFx0XHRwc3Q6IHRydWUsXG5cdFx0XHRcdHByZXZpZXc6IHRydWUsXG5cdFx0XHRcdHRpdGxlOiB0YXJnZXQuZ2V0UGFnZU5hbWUoKSxcblx0XHRcdFx0dGV4dDogdGFyZ2V0LmdldERvY1RvU2F2ZSgpLFxuXHRcdFx0XHR1c2VsYW5nOiBXR19VU0VSX0xBTkdVQUdFLFxuXHRcdFx0XHR2YXJpYW50LFxuXHRcdFx0fSlcblx0XHRcdC50aGVuKFxuXHRcdFx0XHQocmVzcG9uc2UpID0+IHtcblx0XHRcdFx0XHR2b2lkIGRlZmVycmVkLnJlc29sdmUoXG5cdFx0XHRcdFx0XHRjb25zdHJ1Y3REb2N1bWVudChcblx0XHRcdFx0XHRcdFx0cmVzcG9uc2UucGFyc2UuZGlzcGxheXRpdGxlLFxuXHRcdFx0XHRcdFx0XHRyZXNwb25zZS5wYXJzZS50ZXh0LFxuXHRcdFx0XHRcdFx0XHRyZXNwb25zZS5wYXJzZS5jYXRlZ29yaWVzaHRtbFxuXHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdChlcnJvciwgZGV0YWlsKSA9PiB7XG5cdFx0XHRcdFx0dm9pZCBkZWZlcnJlZC5yZWplY3QoZGV0YWlsKTtcblx0XHRcdFx0fVxuXHRcdFx0KTtcblx0XHRyZXR1cm4gZGVmZXJyZWQ7XG5cdH07XG5cblx0Y29uc3QgY2hhbmdlVmFyaWFudCA9IGZ1bmN0aW9uIGNoYW5nZVZhcmlhbnQodmFsKSB7XG5cdFx0ZGlhbG9nLnByZXZpZXdQYW5lbC4kZWxlbWVudFswXS5mb2N1cygpO1xuXHRcdHZhcmlhbnQgPSB2YWw7XG5cblx0XHRjb25zdCB0YXJnZXRQYW5lbCA9IHN0YWNrTGF5b3V0LmZpbmRJdGVtRnJvbURhdGEodmFyaWFudCk7XG5cdFx0aWYgKHRhcmdldFBhbmVsLiRlbGVtZW50LmNoaWxkcmVuKCkubGVuZ3RoKSB7XG5cdFx0XHRzdGFja0xheW91dC5zZXRJdGVtKHRhcmdldFBhbmVsKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c3RhY2tMYXlvdXQucHVzaFBlbmRpbmcoKTtcblx0XHRcdGRyb3Bkb3duLnNldERpc2FibGVkKHRydWUpO1xuXG5cdFx0XHR2b2lkIGZldGNoUHJldmlldygpXG5cdFx0XHRcdC50aGVuKFxuXHRcdFx0XHRcdCgkcHJldmlld0NvbnRhaW5lcikgPT4ge1xuXHRcdFx0XHRcdFx0dGFyZ2V0UGFuZWwuJGVsZW1lbnQuYXBwZW5kKCRwcmV2aWV3Q29udGFpbmVyKTtcblx0XHRcdFx0XHRcdHN0YWNrTGF5b3V0LnNldEl0ZW0odGFyZ2V0UGFuZWwpO1xuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0KGVycm9yKSA9PiB7XG5cdFx0XHRcdFx0XHR3aW5kb3dNYW5hZ2VyXG5cdFx0XHRcdFx0XHRcdC5vcGVuV2luZG93KGVycm9yRGlhbG9nLCB7XG5cdFx0XHRcdFx0XHRcdFx0dGl0bGU6IE9PLnVpLm1zZygnb291aS1kaWFsb2ctcHJvY2Vzcy1lcnJvcicpLFxuXHRcdFx0XHRcdFx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuXHRcdFx0XHRcdFx0XHRcdG1lc3NhZ2U6IHZlLmluaXQudGFyZ2V0LmdldENvbnRlbnRBcGkoKS5nZXRFcnJvck1lc3NhZ2UoZXJyb3IpLFxuXHRcdFx0XHRcdFx0XHRcdGFjdGlvbnM6IFtcblx0XHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0YWN0aW9uOiAncmVqZWN0Jyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0bGFiZWw6IE9PLnVpLmRlZmVyTXNnKCdvb3VpLWRpYWxvZy1tZXNzYWdlLXJlamVjdCcpLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRmbGFnczogJ3NhZmUnLFxuXHRcdFx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0YWN0aW9uOiAncmV0cnknLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRsYWJlbDogT08udWkuZGVmZXJNc2coJ29vdWktZGlhbG9nLXByb2Nlc3MtcmV0cnknKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZmxhZ3M6IFsncHJpbWFyeScsICdwcm9ncmVzc2l2ZSddLFxuXHRcdFx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0XHRdLFxuXHRcdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdFx0XHQuY2xvc2VkLnRoZW4oKGRhdGEpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRpZiAoZGF0YSAmJiBkYXRhLmFjdGlvbiA9PT0gJ3JldHJ5Jykge1xuXHRcdFx0XHRcdFx0XHRcdFx0Ly8gRG8gbm90IHVzZSBzZXRWYWx1ZSgpIHNpbmNlIGl0IHdpbGwgbm90IHRyaWdnZXIgZXZlbnRcblx0XHRcdFx0XHRcdFx0XHRcdGNoYW5nZVZhcmlhbnQodmFyaWFudCk7XG5cdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHRcdC8vIFwidmFyaWFudFwiIHdpbGwgYmUgc2V0IGJ5IGV2ZW50IGhhbmRsZXJcblx0XHRcdFx0XHRcdFx0XHRcdGRyb3Bkb3duLnNldFZhbHVlKHN0YWNrTGF5b3V0LmdldEN1cnJlbnRJdGVtKCkuZ2V0RGF0YSgpKTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0KVxuXHRcdFx0XHQuYWx3YXlzKCgpID0+IHtcblx0XHRcdFx0XHRzdGFja0xheW91dC5wb3BQZW5kaW5nKCk7XG5cdFx0XHRcdFx0ZHJvcGRvd24uc2V0RGlzYWJsZWQoZmFsc2UpO1xuXHRcdFx0XHR9KTtcblx0XHR9XG5cdH07XG5cblx0Y29uc3QgcHJldmlld1dpdGhWYXJpYW50ID0gKCkgPT4ge1xuXHRcdGNvbnN0IGN1cnJlbnRQYW5lbCA9IHN0YWNrTGF5b3V0LmdldEN1cnJlbnRJdGVtKCk7XG5cblx0XHRpZiAoY3VycmVudFBhbmVsLiRlbGVtZW50LmNoaWxkcmVuKCkubGVuZ3RoKSB7XG5cdFx0XHRkaWFsb2cuc3dhcFBhbmVsKCdwcmV2aWV3Jyk7XG5cdFx0XHRkaWFsb2cucHJldmlld1BhbmVsLiRlbGVtZW50LnByZXBlbmQoZHJvcGRvd24uJGVsZW1lbnQpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0YXJnZXQuZW1pdCgnc2F2ZVByZXZpZXcnKTtcblx0XHRcdGRpYWxvZy5wdXNoUGVuZGluZygpO1xuXG5cdFx0XHR2b2lkIGZldGNoUHJldmlldygpXG5cdFx0XHRcdC50aGVuKFxuXHRcdFx0XHRcdCgkcHJldmlld0NvbnRlbnQpID0+IHtcblx0XHRcdFx0XHRcdHRhcmdldFxuXHRcdFx0XHRcdFx0XHQuZ2V0U3VyZmFjZSgpXG5cdFx0XHRcdFx0XHRcdC5nZXRNb2RlbCgpXG5cdFx0XHRcdFx0XHRcdC5nZXREb2N1bWVudCgpXG5cdFx0XHRcdFx0XHRcdC5vbmNlKCd0cmFuc2FjdCcsICgpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRmb3IgKGNvbnN0IGl0ZW0gb2YgcGFuZWxMYXlvdXRzKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRpdGVtLiRlbGVtZW50LmVtcHR5KCk7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdGRpYWxvZy5zd2FwUGFuZWwoJ3ByZXZpZXcnKTtcblx0XHRcdFx0XHRcdGN1cnJlbnRQYW5lbC4kZWxlbWVudC5hcHBlbmQoJHByZXZpZXdDb250ZW50KTtcblx0XHRcdFx0XHRcdHN0YWNrTGF5b3V0LnNldEl0ZW0oc3RhY2tMYXlvdXQuZmluZEl0ZW1Gcm9tRGF0YSh2YXJpYW50KSk7XG5cdFx0XHRcdFx0XHRjb25zdCAkYm9keSA9ICQoJ2JvZHknKTtcblx0XHRcdFx0XHRcdGlmICghJGJvZHkuZmluZChgLiR7Q0xBU1NfTkFNRX1gKS5sZW5ndGgpIHtcblx0XHRcdFx0XHRcdFx0ZGlhbG9nLnByZXZpZXdQYW5lbC4kZWxlbWVudC5wcmVwZW5kKGRyb3Bkb3duLiRlbGVtZW50KTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdChlcnJvcikgPT4ge1xuXHRcdFx0XHRcdFx0ZGlhbG9nLnNob3dFcnJvcnMoXG5cdFx0XHRcdFx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuXHRcdFx0XHRcdFx0XHRuZXcgT08udWkuRXJyb3IodmUuaW5pdC50YXJnZXQuZ2V0Q29udGVudEFwaSgpLmdldEVycm9yTWVzc2FnZShlcnJvciksIHtcblx0XHRcdFx0XHRcdFx0XHRyZWNvdmVyYWJsZTogdHJ1ZSxcblx0XHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHQpXG5cdFx0XHRcdC5hbHdheXMoKCkgPT4ge1xuXHRcdFx0XHRcdGRpYWxvZy5wb3BQZW5kaW5nKCk7XG5cdFx0XHRcdH0pO1xuXHRcdH1cblx0fTtcblxuXHRjb25zdCBpbml0ID0gKCkgPT4ge1xuXHRcdHZhcmlhbnQgPSBXR19VU0VSX1ZBUklBTlQ7XG5cdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG5cdFx0KHt0YXJnZXR9ID0gdmUuaW5pdCk7XG5cdFx0ZGlhbG9nID0gdGFyZ2V0LnNhdmVEaWFsb2c7XG5cdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1lZGlhd2lraS9jbGFzcy1kb2Ncblx0XHRkcm9wZG93biA9IG5ldyBPTy51aS5Ecm9wZG93bklucHV0V2lkZ2V0KHtcblx0XHRcdCRvdmVybGF5OiBkaWFsb2cuJG92ZXJsYXksXG5cdFx0XHRjbGFzc2VzOiBbQ0xBU1NfTkFNRV0sXG5cdFx0XHRvcHRpb25zOiBbXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRvcHRncm91cDogbXcubXNnKCdwd3YtMjAxNy1jYXB0aW9uJyksXG5cdFx0XHRcdH0sXG5cdFx0XHRcdC4uLkRBVEEubWFwKChpdGVtKSA9PiB7XG5cdFx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHRcdGRhdGE6IGl0ZW0udmFyLFxuXHRcdFx0XHRcdFx0bGFiZWw6IG13Lm1zZyhpdGVtLm1zZykgLyogZXNsaW50LWRpc2FibGUtbGluZSBtZWRpYXdpa2kvbXNnLWRvYyAqLyxcblx0XHRcdFx0XHR9O1xuXHRcdFx0XHR9KSxcblx0XHRcdF0sXG5cdFx0XHR2YWx1ZTogdmFyaWFudCxcblx0XHR9KTtcblx0XHRkcm9wZG93bi5vbignY2hhbmdlJywgY2hhbmdlVmFyaWFudCk7XG5cdFx0cGFuZWxMYXlvdXRzID0gREFUQS5tYXAoKGl0ZW0pID0+IHtcblx0XHRcdHJldHVybiBuZXcgT08udWkuUGFuZWxMYXlvdXQoe1xuXHRcdFx0XHRleHBhbmRlZDogZmFsc2UsXG5cdFx0XHRcdGRhdGE6IGl0ZW0udmFyLFxuXHRcdFx0fSk7XG5cdFx0fSk7XG5cdFx0c3RhY2tMYXlvdXQgPSBuZXcgUGVuZGluZ1N0YWNrTGF5b3V0KHtcblx0XHRcdGV4cGFuZGVkOiBmYWxzZSxcblx0XHRcdGl0ZW1zOiBwYW5lbExheW91dHMsXG5cdFx0fSk7XG5cdFx0c3RhY2tMYXlvdXQuc2V0SXRlbShzdGFja0xheW91dC5maW5kSXRlbUZyb21EYXRhKHZhcmlhbnQpKTtcblx0XHRkaWFsb2cucHJldmlld1BhbmVsLiRlbGVtZW50LmFwcGVuZChzdGFja0xheW91dC4kZWxlbWVudCk7XG5cdFx0ZXJyb3JEaWFsb2cgPSBuZXcgT08udWkuTWVzc2FnZURpYWxvZygpO1xuXHRcdHdpbmRvd01hbmFnZXIgPSBuZXcgT08udWkuV2luZG93TWFuYWdlcigpO1xuXHRcdHdpbmRvd01hbmFnZXIuYWRkV2luZG93cyhbZXJyb3JEaWFsb2ddKTtcblx0XHRjb25zdCAkYm9keSA9ICQoJ2JvZHknKTtcblx0XHQkYm9keS5hcHBlbmQod2luZG93TWFuYWdlci4kZWxlbWVudCk7XG5cblx0XHRjb25zdCBoYW5kbGVyVG9SZW1vdmUgPSAnb25TYXZlRGlhbG9nUHJldmlldyc7XG5cdFx0ZGlhbG9nLm9mZigncHJldmlldycsIGhhbmRsZXJUb1JlbW92ZSwgdGFyZ2V0KS5vbigncHJldmlldycsIHByZXZpZXdXaXRoVmFyaWFudCk7XG5cblx0XHRtdy5jb25maWcuc2V0KCd3Z1ByZXZpZXdXaXRoVmFyaWFudDIwMTdJbml0aWFsaXplZCcsIHRydWUpO1xuXG5cdFx0Ly8gU3dpdGNoaW5nIGJldHdlZW4gVkUgYW5kIE5XRSwgcmVxdWlyZXMgdG8gYmUgcmVpbml0aWFsaXplZFxuXHRcdG13Lmhvb2soJ3ZlLmFjdGl2YXRpb25Db21wbGV0ZScpLmFkZCgoKSA9PiB7XG5cdFx0XHRpZiAobXcuY29uZmlnLmdldCgnd2dQcmV2aWV3V2l0aFZhcmlhbnRJbml0aWFsaXplZCcpKSB7XG5cdFx0XHRcdG13LmNvbmZpZy5zZXQoJ3dnUHJldmlld1dpdGhWYXJpYW50SW5pdGlhbGl6ZWQnLCBmYWxzZSk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH07XG5cblx0aWYgKCFtdy5jb25maWcuZ2V0KCd3Z1ByZXZpZXdXaXRoVmFyaWFudEluaXRpYWxpemVkJykpIHtcblx0XHRpbml0KCk7XG5cdFx0bXcuY29uZmlnLnNldCgnd2dQcmV2aWV3V2l0aFZhcmlhbnRJbml0aWFsaXplZCcsIHRydWUpO1xuXHR9XG59O1xuXG5leHBvcnQge3Byb2Nlc3NWaXN1YWxFZGl0b3J9O1xuIiwgImltcG9ydCAnLi9wcm9jZXNzV2lraUVkaXRvci5sZXNzJztcbmltcG9ydCB7VkFSSUFOVFMsIFdHX1BBR0VfQ09OVEVOVF9NT0RFTCwgV0dfVVNFUl9WQVJJQU5UfSBmcm9tICcuL2NvbnN0YW50Jztcbi8qKlxuICogQGRlc2NyaXB0aW9uIEFkZCBhIFwiUHJldmlldyB3aXRoIHZhcmlhbnRcIiBvcHRpb24gdG8gdGhlIGVkaXQgZm9ybS5cbiAqL1xuY29uc3QgcHJvY2Vzc1dpa2lFZGl0b3IgPSAoKTogdm9pZCA9PiB7XG5cdG13Lmhvb2soJ3dpa2lwYWdlLmVkaXRmb3JtJykuYWRkKCgkZWRpdEZvcm0pOiB2b2lkID0+IHtcblx0XHQvLyBHdWFyZCBhZ2FpbnN0IGRvdWJsZSBpbmNsdXNpb25zXG5cdFx0aWYgKG13LmNvbmZpZy5nZXQoJ3dnUHJldmlld1dpdGhWYXJpYW50SW5pdGlhbGl6ZWQnKSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRjb25zdCAkdGVtcGxhdGVTYW5kYm94UHJldmlldzogSlF1ZXJ5ID0gJGVkaXRGb3JtLmZpbmQoJ2lucHV0W25hbWU9XCJ3cFRlbXBsYXRlU2FuZGJveFByZXZpZXdcIl0nKTtcblx0XHQvLyBJdCBpcyBwb3NzaWJsZSB0aGF0IGEgdXNlciB3YW50IHRvIHByZXZpZXcgYSBwYWdlIHdpdGggYSBub24td2lraXRleHQgbW9kdWxlXG5cdFx0Ly8gRG8gbm90IHJldHVybiBpbiB0aGlzIGNhc2Vcblx0XHRpZiAoV0dfUEFHRV9DT05URU5UX01PREVMICE9PSAnd2lraXRleHQnICYmICEkdGVtcGxhdGVTYW5kYm94UHJldmlldy5sZW5ndGgpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0Y29uc3QgJGxheW91dDogSlF1ZXJ5ID0gJGVkaXRGb3JtLmZpbmQoJy5lZGl0Q2hlY2tib3hlcyAub28tdWktaG9yaXpvbnRhbExheW91dCcpO1xuXHRcdGlmICghJGxheW91dC5sZW5ndGgpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0Ly8gR3VhcmQgYWdhaW5zdCBkb3VibGUgaW5jbHVzaW9uc1xuXHRcdG13LmNvbmZpZy5zZXQoJ3dnUHJldmlld1dpdGhWYXJpYW50SW5pdGlhbGl6ZWQnLCB0cnVlKTtcblx0XHRjb25zdCB1cmlWYXJpYW50OiBzdHJpbmcgfCBudWxsID0gbXcudXRpbC5nZXRQYXJhbVZhbHVlKCd2YXJpYW50Jyk7XG5cdFx0Y29uc3QgY2hlY2tib3g6IE9PLnVpLkNoZWNrYm94SW5wdXRXaWRnZXQgPSBuZXcgT08udWkuQ2hlY2tib3hJbnB1dFdpZGdldCh7XG5cdFx0XHRzZWxlY3RlZDogQm9vbGVhbih1cmlWYXJpYW50KSxcblx0XHR9KTtcblx0XHRjb25zdCBkcm9wZG93bjogT08udWkuRHJvcGRvd25XaWRnZXQgPSBuZXcgT08udWkuRHJvcGRvd25XaWRnZXQoe1xuXHRcdFx0JG92ZXJsYXk6IHRydWUsXG5cdFx0XHRkaXNhYmxlZDogIWNoZWNrYm94LmlzU2VsZWN0ZWQoKSxcblx0XHRcdG1lbnU6IHtcblx0XHRcdFx0aXRlbXM6IFZBUklBTlRTLm1hcCgoe2RhdGEsIGxhYmVsfSk6IE9PLnVpLk1lbnVPcHRpb25XaWRnZXQgPT4ge1xuXHRcdFx0XHRcdHJldHVybiBuZXcgT08udWkuTWVudU9wdGlvbldpZGdldCh7XG5cdFx0XHRcdFx0XHRkYXRhLFxuXHRcdFx0XHRcdFx0bGFiZWwsXG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0pLFxuXHRcdFx0fSxcblx0XHR9KTtcblx0XHRkcm9wZG93bi5nZXRNZW51KCkuc2VsZWN0SXRlbUJ5RGF0YShXR19VU0VSX1ZBUklBTlQgfHwgdXJpVmFyaWFudCB8fCBtdy51c2VyLm9wdGlvbnMuZ2V0KCd2YXJpYW50JykpO1xuXHRcdGNoZWNrYm94Lm9uKCdjaGFuZ2UnLCAoc2VsZWN0ZWQ6IGJvb2xlYW4gfCBzdHJpbmcpOiB2b2lkID0+IHtcblx0XHRcdGRyb3Bkb3duLnNldERpc2FibGVkKCFzZWxlY3RlZCk7XG5cdFx0fSk7XG5cdFx0Y29uc3QgZ2V0U2VsZWN0ZWRWYXJpYW50ID0gKCk6IHN0cmluZyB8IHVuZGVmaW5lZCA9PiB7XG5cdFx0XHRpZiAoIWNoZWNrYm94LmlzU2VsZWN0ZWQoKSkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBzZWxlY3RlZEl0ZW06IE9PLnVpLk9wdGlvbldpZGdldCB8IG51bGwgPSBkcm9wZG93blxuXHRcdFx0XHQuZ2V0TWVudSgpXG5cdFx0XHRcdC5maW5kU2VsZWN0ZWRJdGVtKCkgYXMgT08udWkuT3B0aW9uV2lkZ2V0IHwgbnVsbDtcblx0XHRcdHJldHVybiBzZWxlY3RlZEl0ZW0gPyAoc2VsZWN0ZWRJdGVtLmdldERhdGEoKSBhcyBzdHJpbmcpIDogdW5kZWZpbmVkO1xuXHRcdH07XG5cdFx0Y29uc3QgbWFuaXB1bGF0ZUFjdGlvblVybCA9ICgpOiB2b2lkID0+IHtcblx0XHRcdGNvbnN0IHNlbGVjdGVkVmFyaWFudDogc3RyaW5nIHwgdW5kZWZpbmVkID0gZ2V0U2VsZWN0ZWRWYXJpYW50KCk7XG5cdFx0XHRjb25zdCBvcmlnaW5hbEFjdGlvbjogc3RyaW5nIHwgdW5kZWZpbmVkID0gJGVkaXRGb3JtLmF0dHIoJ2FjdGlvbicpO1xuXHRcdFx0aWYgKHNlbGVjdGVkVmFyaWFudCAmJiBvcmlnaW5hbEFjdGlvbikge1xuXHRcdFx0XHQkZWRpdEZvcm0uYXR0cihcblx0XHRcdFx0XHQnYWN0aW9uJyxcblx0XHRcdFx0XHRuZXcgbXcuVXJpKG9yaWdpbmFsQWN0aW9uKVxuXHRcdFx0XHRcdFx0LmV4dGVuZCh7XG5cdFx0XHRcdFx0XHRcdHZhcmlhbnQ6IHNlbGVjdGVkVmFyaWFudCxcblx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XHQuZ2V0UmVsYXRpdmVQYXRoKClcblx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHR9O1xuXHRcdGNvbnN0IG1hbmlwdWxhdGVWYXJpYW50Q29uZmlnID0gKCk6IHZvaWQgPT4ge1xuXHRcdFx0bXcuY29uZmlnLnNldCgnd2dVc2VyVmFyaWFudCcsIGdldFNlbGVjdGVkVmFyaWFudCgpIHx8IChtdy51c2VyLm9wdGlvbnMuZ2V0KCd2YXJpYW50JykgYXMgc3RyaW5nKSk7XG5cdFx0fTtcblx0XHQkZWRpdEZvcm1cblx0XHRcdC5maW5kKCdpbnB1dFtuYW1lPXdwUHJldmlld10nKVxuXHRcdFx0Lm9uKCdjbGljaycsIG13LnVzZXIub3B0aW9ucy5nZXQoJ3VzZWxpdmVwcmV2aWV3JykgPyBtYW5pcHVsYXRlVmFyaWFudENvbmZpZyA6IG1hbmlwdWxhdGVBY3Rpb25VcmwpO1xuXHRcdCR0ZW1wbGF0ZVNhbmRib3hQcmV2aWV3Lm9uKCdjbGljaycsIG1hbmlwdWxhdGVBY3Rpb25VcmwpO1xuXHRcdGRyb3Bkb3duLmdldE1lbnUoKS5vbignc2VsZWN0JywgbWFuaXB1bGF0ZVZhcmlhbnRDb25maWcpO1xuXHRcdGNvbnN0IGNoZWNrYm94RmllbGQ6IE9PLnVpLkZpZWxkTGF5b3V0PE9PLnVpLkNoZWNrYm94SW5wdXRXaWRnZXQ+ID0gbmV3IE9PLnVpLkZpZWxkTGF5b3V0KGNoZWNrYm94LCB7XG5cdFx0XHRhbGlnbjogJ2lubGluZScsXG5cdFx0XHRsYWJlbDogd2luZG93LndnVUxTKCfpooTop4jlrZfor43ovazmjaInLCAn6aCQ6Ka95a2X6Kme6L2J5o+bJyksXG5cdFx0fSk7XG5cdFx0Y29uc3QgZHJvcGRvd25GaWVsZDogT08udWkuRmllbGRMYXlvdXQ8T08udWkuRHJvcGRvd25XaWRnZXQ+ID0gbmV3IE9PLnVpLkZpZWxkTGF5b3V0KGRyb3Bkb3duLCB7XG5cdFx0XHRhbGlnbjogJ3RvcCcsXG5cdFx0XHRsYWJlbDogd2luZG93LndnVUxTKCfkvb/nlKjor6Xor63oqIDlj5jkvZPmmL7npLrpooTop4jvvJonLCAn5L2/55So6Kmy6Kqe6KiA6K6K6auU6aGv56S66aCQ6Ka977yaJyksXG5cdFx0XHRpbnZpc2libGVMYWJlbDogdHJ1ZSxcblx0XHR9KTtcblx0XHQkbGF5b3V0LmFwcGVuZCgkKCc8ZGl2PicpLmF0dHIoJ2lkJywgJ3B3di1hcmVhJykuYXBwZW5kKGNoZWNrYm94RmllbGQuJGVsZW1lbnQsIGRyb3Bkb3duRmllbGQuJGVsZW1lbnQpKTtcblx0fSk7XG59O1xuXG5leHBvcnQge3Byb2Nlc3NXaWtpRWRpdG9yfTtcbiIsICJpbXBvcnQge3Byb2Nlc3NWaXN1YWxFZGl0b3J9IGZyb20gJy4vbW9kdWxlcy9wcm9jZXNzVmlzdWFsRWRpdG9yJztcbmltcG9ydCB7cHJvY2Vzc1dpa2lFZGl0b3J9IGZyb20gJy4vbW9kdWxlcy9wcm9jZXNzV2lraUVkaXRvcic7XG5cbihmdW5jdGlvbiBwcmV2aWV3V2l0aFZhcmlhbnRzKCk6IHZvaWQge1xuXHRtdy5ob29rKCd3aWtpcGFnZS5lZGl0Zm9ybScpLmFkZCgoKTogdm9pZCA9PiB7XG5cdFx0cHJvY2Vzc1dpa2lFZGl0b3IoKTtcblx0fSk7XG5cblx0bXcuaG9vaygndmUuc2F2ZURpYWxvZy5zdGF0ZUNoYW5nZWQnKS5hZGQoKCk6IHZvaWQgPT4ge1xuXHRcdHByb2Nlc3NWaXN1YWxFZGl0b3IoKTtcblx0fSk7XG59KSgpO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsYUFBYTtBQUVuQixJQUFNQyxXQUdBLENBQ0w7RUFDQ0MsTUFBTTtFQUNOQyxPQUFPQyxPQUFPQyxNQUFNLE9BQU8sS0FBSztBQUNqQyxHQUNBO0VBQ0NILE1BQU07RUFDTkMsT0FBTztBQUNSLEdBQ0E7RUFDQ0QsTUFBTTtFQUNOQyxPQUFPO0FBQ1IsR0FDQTtFQUNDRCxNQUFNO0VBQ05DLE9BQU87QUFDUixHQUNBO0VBQ0NELE1BQU07RUFDTkMsT0FBTztBQUNSLEdBQ0E7RUFDQ0QsTUFBTTtFQUNOQyxPQUFPO0FBQ1IsR0FDQTtFQUNDRCxNQUFNO0VBQ05DLE9BQU87QUFDUixHQUNBO0VBQ0NELE1BQU07RUFDTkMsT0FBTztBQUNSLEdBQ0E7RUFDQ0QsTUFBTTtFQUNOQyxPQUFPO0FBQ1IsQ0FBQTtBQUdELElBQU1HLE9BQU8sQ0FDWjtFQUFDQyxLQUFLO0VBQU1DLFVBQVU7RUFBTUMsS0FBSztBQUFhLEdBQzlDO0VBQUNGLEtBQUs7RUFBV0MsVUFBVTtFQUFXQyxLQUFLO0FBQWtCLEdBQzdEO0VBQUNGLEtBQUs7RUFBV0MsVUFBVTtF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U2lLLHNCQUE0QjtBQUNyQ2xMLEtBQUc2QyxLQUFLLG1CQUFtQixFQUFFa0csSUFBSSxNQUFZO0FBQzVDQyxzQkFBa0I7RUFDbkIsQ0FBQztBQUVEaEosS0FBRzZDLEtBQUssNEJBQTRCLEVBQUVrRyxJQUFJLE1BQVk7QUFDckR6SCx3QkFBb0I7RUFDckIsQ0FBQztBQUNGLEdBQUc7IiwKICAibmFtZXMiOiBbIkNMQVNTX05BTUUiLCAiVkFSSUFOVFMiLCAiZGF0YSIsICJsYWJlbCIsICJ3aW5kb3ciLCAid2dVTFMiLCAiREFUQSIsICJ2YXIiLCAiaHRtbExhbmciLCAibXNnIiwgIldHX1NLSU4iLCAibXciLCAiY29uZmlnIiwgImdldCIsICJXR19QQUdFX0NPTlRFTlRfTU9ERUwiLCAiV0dfVVNFUl9MQU5HVUFHRSIsICJXR19VU0VSX1ZBUklBTlQiLCAiUFdWMjAxN21lc3NhZ2VzIiwgIm1lc3NhZ2VzIiwgInNldCIsICJQZW5kaW5nU3RhY2tMYXlvdXQiLCAiUGVuZGluZ1N0YWNrTGF5b3V0MiIsICJzdXBlciIsICJjYWxsIiwgIk9PIiwgInVpIiwgIm1peGluIiwgIlBlbmRpbmdFbGVtZW50IiwgIiRlbGVtZW50IiwgImFkZENsYXNzIiwgImluaGVyaXRDbGFzcyIsICJTdGFja0xheW91dCIsICJtaXhpbkNsYXNzIiwgInByb2Nlc3NWaXN1YWxFZGl0b3IiLCAidmFyaWFudCIsICJ0YXJnZXQiLCAiZGlhbG9nIiwgImRyb3Bkb3duIiwgInN0YWNrTGF5b3V0IiwgInBhbmVsTGF5b3V0cyIsICJ3aW5kb3dNYW5hZ2VyIiwgImVycm9yRGlhbG9nIiwgImNvbnN0cnVjdERvY3VtZW50IiwgInRpdGxlIiwgIndpa2l0ZXh0IiwgImNhdGVnb3JpZXMiLCAiJHJlc3VsdCIsICIkIiwgImFwcGVuZCIsICJodG1sIiwgImNvbmNhdCIsICJwYWdlTGFuZ3VhZ2VEaXIiLCAiYXR0ciIsICJmaW5kIiwgIml0ZW0iLCAicGFyc2VIVE1MIiwgImhvb2siLCAiZmlyZSIsICJ2ZSIsICJ0YXJnZXRMaW5rc1RvTmV3V2luZG93IiwgImZldGNoUHJldmlldyIsICJkZWZlcnJlZCIsICJEZWZlcnJlZCIsICJnZXRDb250ZW50QXBpIiwgInBvc3QiLCAiYWN0aW9uIiwgImRpc2FibGVlZGl0c2VjdGlvbiIsICJlcnJvcmZvcm1hdCIsICJlcnJvcmxhbmciLCAiZXJyb3JzdXNlbG9jYWwiLCAiZm9ybWF0dmVyc2lvbiIsICJwcm9wIiwgInBzdCIsICJwcmV2aWV3IiwgImdldFBhZ2VOYW1lIiwgInRleHQiLCAiZ2V0RG9jVG9TYXZlIiwgInVzZWxhbmciLCAidGhlbiIsICJyZXNwb25zZSIsICJyZXNvbHZlIiwgInBhcnNlIiwgImRpc3BsYXl0aXRsZSIsICJjYXRlZ29yaWVzaHRtbCIsICJlcnJvciIsICJkZXRhaWwiLCAicmVqZWN0IiwgImNoYW5nZVZhcmlhbnQiLCAiY2hhbmdlVmFyaWFudDIiLCAidmFsIiwgInByZXZpZXdQYW5lbCIsICJmb2N1cyIsICJ0YXJnZXRQYW5lbCIsICJmaW5kSXRlbUZyb21EYXRhIiwgImNoaWxkcmVuIiwgImxlbmd0aCIsICJzZXRJdGVtIiwgInB1c2hQZW5kaW5nIiwgInNldERpc2FibGVkIiwgIiRwcmV2aWV3Q29udGFpbmVyIiwgIm9wZW5XaW5kb3ciLCAibWVzc2FnZSIsICJpbml0IiwgImdldEVycm9yTWVzc2FnZSIsICJhY3Rpb25zIiwgImRlZmVyTXNnIiwgImZsYWdzIiwgImNsb3NlZCIsICJzZXRWYWx1ZSIsICJnZXRDdXJyZW50SXRlbSIsICJnZXREYXRhIiwgImFsd2F5cyIsICJwb3BQZW5kaW5nIiwgInByZXZpZXdXaXRoVmFyaWFudCIsICJjdXJyZW50UGFuZWwiLCAic3dhcFBhbmVsIiwgInByZXBlbmQiLCAiZW1pdCIsICIkcHJldmlld0NvbnRlbnQiLCAiZ2V0U3VyZmFjZSIsICJnZXRNb2RlbCIsICJnZXREb2N1bWVudCIsICJvbmNlIiwgIl9pdGVyYXRvciIsICJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsICJfc3RlcCIsICJzIiwgIm4iLCAiZG9uZSIsICJ2YWx1ZSIsICJlbXB0eSIsICJlcnIiLCAiZSIsICJmIiwgIiRib2R5IiwgInNob3dFcnJvcnMiLCAiRXJyb3IiLCAicmVjb3ZlcmFibGUiLCAic2F2ZURpYWxvZyIsICJEcm9wZG93bklucHV0V2lkZ2V0IiwgIiRvdmVybGF5IiwgImNsYXNzZXMiLCAib3B0aW9ucyIsICJvcHRncm91cCIsICJtYXAiLCAib24iLCAiUGFuZWxMYXlvdXQiLCAiZXhwYW5kZWQiLCAiaXRlbXMiLCAiTWVzc2FnZURpYWxvZyIsICJXaW5kb3dNYW5hZ2VyIiwgImFkZFdpbmRvd3MiLCAiaGFuZGxlclRvUmVtb3ZlIiwgIm9mZiIsICJhZGQiLCAicHJvY2Vzc1dpa2lFZGl0b3IiLCAiJGVkaXRGb3JtIiwgIiR0ZW1wbGF0ZVNhbmRib3hQcmV2aWV3IiwgIiRsYXlvdXQiLCAidXJpVmFyaWFudCIsICJ1dGlsIiwgImdldFBhcmFtVmFsdWUiLCAiY2hlY2tib3giLCAiQ2hlY2tib3hJbnB1dFdpZGdldCIsICJzZWxlY3RlZCIsICJCb29sZWFuIiwgIkRyb3Bkb3duV2lkZ2V0IiwgImRpc2FibGVkIiwgImlzU2VsZWN0ZWQiLCAibWVudSIsICJNZW51T3B0aW9uV2lkZ2V0IiwgImdldE1lbnUiLCAic2VsZWN0SXRlbUJ5RGF0YSIsICJ1c2VyIiwgImdldFNlbGVjdGVkVmFyaWFudCIsICJzZWxlY3RlZEl0ZW0iLCAiZmluZFNlbGVjdGVkSXRlbSIsICJtYW5pcHVsYXRlQWN0aW9uVXJsIiwgInNlbGVjdGVkVmFyaWFudCIsICJvcmlnaW5hbEFjdGlvbiIsICJVcmkiLCAiZXh0ZW5kIiwgImdldFJlbGF0aXZlUGF0aCIsICJtYW5pcHVsYXRlVmFyaWFudENvbmZpZyIsICJjaGVja2JveEZpZWxkIiwgIkZpZWxkTGF5b3V0IiwgImFsaWduIiwgImRyb3Bkb3duRmllbGQiLCAiaW52aXNpYmxlTGFiZWwiLCAicHJldmlld1dpdGhWYXJpYW50cyJdCn0K

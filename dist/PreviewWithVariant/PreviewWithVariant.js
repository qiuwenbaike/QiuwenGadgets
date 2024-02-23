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
      deferred.resolve(constructDocument(response.parse.displaytitle, response.parse.text, response.parse.categorieshtml));
    }, (error, detail) => {
      deferred.reject(detail);
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
      fetchPreview().then(($previewContainer) => {
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
      fetchPreview().then(($previewContent) => {
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
  mw.hook("ve.saveDialog.stateChanged").add(() => {
    processVisualEditor();
  });
  mw.hook("wikipage.editform").add(() => {
    processWikiEditor();
  });
})();

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1ByZXZpZXdXaXRoVmFyaWFudC9tb2R1bGVzL2NvbnN0YW50LnRzIiwgInNyYy9QcmV2aWV3V2l0aFZhcmlhbnQvbW9kdWxlcy9tZXNzYWdlcy50cyIsICJzcmMvUHJldmlld1dpdGhWYXJpYW50L21vZHVsZXMvcHJvY2Vzc1Zpc3VhbEVkaXRvci5qcyIsICJzcmMvUHJldmlld1dpdGhWYXJpYW50L21vZHVsZXMvcHJvY2Vzc1dpa2lFZGl0b3IudHMiLCAic3JjL1ByZXZpZXdXaXRoVmFyaWFudC9QcmV2aWV3V2l0aFZhcmlhbnQudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IENMQVNTX05BTUUgPSAncHd2LTIwMTctdmFyaWFudCc7XG5cbmNvbnN0IFZBUklBTlRTOiB7XG5cdGRhdGE6IHN0cmluZztcblx0bGFiZWw6IHN0cmluZztcbn1bXSA9IFtcblx0e1xuXHRcdGRhdGE6ICd6aCcsXG5cdFx0bGFiZWw6IHdpbmRvdy53Z1VMUygn5LiN6L2s5o2iJywgJ+S4jei9ieaPmycpLFxuXHR9LFxuXHR7XG5cdFx0ZGF0YTogJ3poLWhhbnMnLFxuXHRcdGxhYmVsOiAn566A5L2TJyxcblx0fSxcblx0e1xuXHRcdGRhdGE6ICd6aC1oYW50Jyxcblx0XHRsYWJlbDogJ+e5gemrlCcsXG5cdH0sXG5cdHtcblx0XHRkYXRhOiAnemgtY24nLFxuXHRcdGxhYmVsOiAn5Lit5Zu95aSn6ZmG566A5L2TJyxcblx0fSxcblx0e1xuXHRcdGRhdGE6ICd6aC1oaycsXG5cdFx0bGFiZWw6ICfkuK3lnIvpppnmuK/nuYHpq5QnLFxuXHR9LFxuXHR7XG5cdFx0ZGF0YTogJ3poLW1vJyxcblx0XHRsYWJlbDogJ+S4reWci+a+s+mWgOe5gemrlCcsXG5cdH0sXG5cdHtcblx0XHRkYXRhOiAnemgtbXknLFxuXHRcdGxhYmVsOiAn6ams5p2l6KW/5Lqa566A5L2TJyxcblx0fSxcblx0e1xuXHRcdGRhdGE6ICd6aC1zZycsXG5cdFx0bGFiZWw6ICfmlrDliqDlnaHnroDkvZMnLFxuXHR9LFxuXHR7XG5cdFx0ZGF0YTogJ3poLXR3Jyxcblx0XHRsYWJlbDogJ+S4reWci+iHuueBo+e5gemrlCcsXG5cdH0sXG5dO1xuXG5jb25zdCBEQVRBID0gW1xuXHR7dmFyOiAnemgnLCBodG1sTGFuZzogJ3poJywgbXNnOiAncHd2LTIwMTctemgnfSxcblx0e3ZhcjogJ3poLWhhbnMnLCBodG1sTGFuZzogJ3poLUhhbnMnLCBtc2c6ICdwd3YtMjAxNy16aC1oYW5zJ30sXG5cdHt2YXI6ICd6aC1oYW50JywgaHRtbExhbmc6ICd6aC1IYW50JywgbXNnOiAncHd2LTIwMTctemgtaGFudCd9LFxuXHR7dmFyOiAnemgtY24nLCBodG1sTGFuZzogJ3poLUhhbnMtQ04nLCBtc2c6ICdwd3YtMjAxNy16aC1jbid9LFxuXHR7dmFyOiAnemgtaGsnLCBodG1sTGFuZzogJ3poLUhhbnQtSEsnLCBtc2c6ICdwd3YtMjAxNy16aC1oayd9LFxuXHR7dmFyOiAnemgtbW8nLCBodG1sTGFuZzogJ3poLUhhbnQtTU8nLCBtc2c6ICdwd3YtMjAxNy16aC1tbyd9LFxuXHR7dmFyOiAnemgtbXknLCBodG1sTGFuZzogJ3poLUhhbnMtTVknLCBtc2c6ICdwd3YtMjAxNy16aC1teSd9LFxuXHR7dmFyOiAnemgtc2cnLCBodG1sTGFuZzogJ3poLUhhbnMtU0cnLCBtc2c6ICdwd3YtMjAxNy16aC1zZyd9LFxuXHR7dmFyOiAnemgtdHcnLCBodG1sTGFuZzogJ3poLUhhbnQtVFcnLCBtc2c6ICdwd3YtMjAxNy16aC10dyd9LFxuXTtcblxuY29uc3QgV0dfU0tJTiA9IG13LmNvbmZpZy5nZXQoJ3NraW4nKTtcblxuY29uc3QgV0dfUEFHRV9DT05URU5UX01PREVMID0gbXcuY29uZmlnLmdldCgnd2dQYWdlQ29udGVudE1vZGVsJyk7XG5cbmNvbnN0IFdHX1VTRVJfTEFOR1VBR0U6IHN0cmluZyA9IG13LmNvbmZpZy5nZXQoJ3dnVXNlckxhbmd1YWdlJyk7XG5cbmNvbnN0IFdHX1VTRVJfVkFSSUFOVDogc3RyaW5nIHwgbnVsbCA9IG13LmNvbmZpZy5nZXQoJ3dnVXNlclZhcmlhbnQnKTtcblxuZXhwb3J0IHtDTEFTU19OQU1FLCBEQVRBLCBXR19TS0lOLCBXR19VU0VSX0xBTkdVQUdFLCBWQVJJQU5UUywgV0dfUEFHRV9DT05URU5UX01PREVMLCBXR19VU0VSX1ZBUklBTlR9O1xuIiwgImNvbnN0IFBXVjIwMTdtZXNzYWdlcyA9ICgpID0+IHtcblx0bXcubWVzc2FnZXMuc2V0KHtcblx0XHQncHd2LTIwMTctY2FwdGlvbic6IHdpbmRvdy53Z1VMUygn6YCJ5oup6K+t6KiA5Y+Y5L2TJywgJ+mBuOaTh+iqnuiogOiuiumrlCcpLFxuXHRcdCdwd3YtMjAxNy16aCc6IHdpbmRvdy53Z1VMUygn5LiN6L2s5o2iJywgJ+S4jei9ieaPmycpLFxuXHRcdCdwd3YtMjAxNy16aC1oYW5zJzogJ+eugOS9kycsXG5cdFx0J3B3di0yMDE3LXpoLWhhbnQnOiAn57mB6auUJyxcblx0XHQncHd2LTIwMTctemgtY24nOiAn5aSn6ZmG566A5L2TJyxcblx0XHQncHd2LTIwMTctemgtaGsnOiAn6aaZ5riv57mB6auUJyxcblx0XHQncHd2LTIwMTctemgtbW8nOiAn5r6z6ZaA57mB6auUJyxcblx0XHQncHd2LTIwMTctemgtbXknOiAn5aSn6ams566A5L2TJyxcblx0XHQncHd2LTIwMTctemgtc2cnOiAn5paw5Yqg5Z2h566A5L2TJyxcblx0XHQncHd2LTIwMTctemgtdHcnOiAn6Ie654Gj5q2j6auUJyxcblx0fSk7XG59O1xuXG5leHBvcnQge1BXVjIwMTdtZXNzYWdlc307XG4iLCAiLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHMtY29tbWVudFxuLy8gQHRzLW5vY2hlY2tcbmltcG9ydCAnLi9wcm9jZXNzVmlzdWFsRWRpdG9yLmxlc3MnO1xuaW1wb3J0IHtDTEFTU19OQU1FLCBEQVRBLCBXR19TS0lOLCBXR19VU0VSX0xBTkdVQUdFLCBXR19VU0VSX1ZBUklBTlR9IGZyb20gJy4vY29uc3RhbnQnO1xuaW1wb3J0IHtQV1YyMDE3bWVzc2FnZXN9IGZyb20gJy4vbWVzc2FnZXMnO1xuXG5tdy5jb25maWcuc2V0KCd3Z1ByZXZpZXdXaXRoVmFyaWFudEluaXRpYWxpemVkJywgZmFsc2UpO1xuXG5QV1YyMDE3bWVzc2FnZXMoKTtcblxuY29uc3QgUGVuZGluZ1N0YWNrTGF5b3V0ID0gZnVuY3Rpb24gUGVuZGluZ1N0YWNrTGF5b3V0KGNvbmZpZykge1xuXHRQZW5kaW5nU3RhY2tMYXlvdXQuc3VwZXIuY2FsbCh0aGlzLCBjb25maWcpO1xuXHRPTy51aS5taXhpbi5QZW5kaW5nRWxlbWVudC5jYWxsKHRoaXMpO1xuXHR0aGlzLiRlbGVtZW50LmFkZENsYXNzKCdwd3YtMjAxNy1wZW5kaW5nU3RhY2tMYXlvdXQnKTtcbn07XG5cbk9PLmluaGVyaXRDbGFzcyhQZW5kaW5nU3RhY2tMYXlvdXQsIE9PLnVpLlN0YWNrTGF5b3V0KTtcbk9PLm1peGluQ2xhc3MoUGVuZGluZ1N0YWNrTGF5b3V0LCBPTy51aS5taXhpbi5QZW5kaW5nRWxlbWVudCk7XG5cbmNvbnN0IHByb2Nlc3NWaXN1YWxFZGl0b3IgPSAoKSA9PiB7XG5cdGxldCB2YXJpYW50LCB0YXJnZXQsIGRpYWxvZywgZHJvcGRvd24sIHN0YWNrTGF5b3V0LCBwYW5lbExheW91dHMsIHdpbmRvd01hbmFnZXIsIGVycm9yRGlhbG9nO1xuXG5cdGNvbnN0IGNvbnN0cnVjdERvY3VtZW50ID0gKHRpdGxlLCB3aWtpdGV4dCwgY2F0ZWdvcmllcykgPT4ge1xuXHRcdGNvbnN0ICRyZXN1bHQgPSAkKCc8ZGl2PicpLmFkZENsYXNzKCdtdy1ib2R5IG13LWJvZHktY29udGVudCcpO1xuXG5cdFx0aWYgKFdHX1NLSU4gPT09ICd2ZWN0b3InKSB7XG5cdFx0XHQvLyBBZGRpdGlvbmFsIGNsYXNzZXMgcmVxdWlyZWQgaW4gdmVjdG9yIHRvIGdldCBjb3JyZWN0IGFwcGVhcmFuY2Vcblx0XHRcdCRyZXN1bHQuYWRkQ2xhc3MoJ3ZlY3Rvci1ib2R5Jyk7XG5cdFx0fVxuXG5cdFx0JHJlc3VsdC5hcHBlbmQoXG5cdFx0XHQkKCc8aDE+JykuYWRkQ2xhc3MoJ2ZpcnN0SGVhZGluZycpLmh0bWwodGl0bGUpLFxuXHRcdFx0Ly8gQ2xhc3NlcyB1c2VkIGhlcmU6XG5cdFx0XHQvLyAqIG13LWNvbnRlbnQtbHRyXG5cdFx0XHQvLyAqIG13LWNvbnRlbnQtcnRsXG5cdFx0XHQkKCc8ZGl2PicpXG5cdFx0XHRcdC5hZGRDbGFzcyhgbXctY29udGVudC0ke213LmNvbmZpZy5nZXQoJ3dnVmlzdWFsRWRpdG9yJykucGFnZUxhbmd1YWdlRGlyfWApXG5cdFx0XHRcdC5hdHRyKFxuXHRcdFx0XHRcdCdsYW5nJyxcblx0XHRcdFx0XHREQVRBLmZpbmQoKGl0ZW0pID0+IHtcblx0XHRcdFx0XHRcdHJldHVybiBpdGVtLnZhciA9PT0gdmFyaWFudDtcblx0XHRcdFx0XHR9KS5odG1sTGFuZ1xuXHRcdFx0XHQpXG5cdFx0XHRcdC5odG1sKHdpa2l0ZXh0KSxcblx0XHRcdCQucGFyc2VIVE1MKGNhdGVnb3JpZXMpXG5cdFx0KTtcblxuXHRcdC8vIE1ha2Ugb3RoZXIgdGhpbmdzIGxpa2UgUmVmZXJlbmNlIFRvb2x0aXAgZnVuY3Rpb25cblx0XHRtdy5ob29rKCd3aWtpcGFnZS5jb250ZW50JykuZmlyZSgkcmVzdWx0KTtcblx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcblx0XHR2ZS50YXJnZXRMaW5rc1RvTmV3V2luZG93KCRyZXN1bHRbMF0pO1xuXHRcdHJldHVybiAkcmVzdWx0O1xuXHR9O1xuXG5cdGNvbnN0IGZldGNoUHJldmlldyA9ICgpID0+IHtcblx0XHRjb25zdCBkZWZlcnJlZCA9ICQuRGVmZXJyZWQoKTtcblx0XHQvLyBDdXJyZW50bHkgKEF1ZyAyMDIxKSwgUGFyc29pZCBBUEkgZG9lcyBub3QgaGF2ZSBmdWxsIExDIGZ1bmN0aW9uYWxpdHksXG5cdFx0Ly8gaGVuY2UgdXNlIHBhcnNlIEFQSSBpbnN0ZWFkLlxuXHRcdHRhcmdldFxuXHRcdFx0LmdldENvbnRlbnRBcGkoKVxuXHRcdFx0LnBvc3Qoe1xuXHRcdFx0XHRhY3Rpb246ICdwYXJzZScsXG5cdFx0XHRcdGRpc2FibGVlZGl0c2VjdGlvbjogdHJ1ZSxcblx0XHRcdFx0ZXJyb3Jmb3JtYXQ6ICdodG1sJyxcblx0XHRcdFx0ZXJyb3JsYW5nOiBXR19VU0VSX0xBTkdVQUdFLFxuXHRcdFx0XHRlcnJvcnN1c2Vsb2NhbDogdHJ1ZSxcblx0XHRcdFx0Zm9ybWF0dmVyc2lvbjogMixcblx0XHRcdFx0cHJvcDogJ3RleHR8aW5kaWNhdG9yc3xkaXNwbGF5dGl0bGV8Y2F0ZWdvcmllc2h0bWx8cGFyc2V3YXJuaW5nc2h0bWwnLFxuXHRcdFx0XHRwc3Q6IHRydWUsXG5cdFx0XHRcdHByZXZpZXc6IHRydWUsXG5cdFx0XHRcdHRpdGxlOiB0YXJnZXQuZ2V0UGFnZU5hbWUoKSxcblx0XHRcdFx0dGV4dDogdGFyZ2V0LmdldERvY1RvU2F2ZSgpLFxuXHRcdFx0XHR1c2VsYW5nOiBXR19VU0VSX0xBTkdVQUdFLFxuXHRcdFx0XHR2YXJpYW50LFxuXHRcdFx0fSlcblx0XHRcdC50aGVuKFxuXHRcdFx0XHQocmVzcG9uc2UpID0+IHtcblx0XHRcdFx0XHRkZWZlcnJlZC5yZXNvbHZlKFxuXHRcdFx0XHRcdFx0Y29uc3RydWN0RG9jdW1lbnQoXG5cdFx0XHRcdFx0XHRcdHJlc3BvbnNlLnBhcnNlLmRpc3BsYXl0aXRsZSxcblx0XHRcdFx0XHRcdFx0cmVzcG9uc2UucGFyc2UudGV4dCxcblx0XHRcdFx0XHRcdFx0cmVzcG9uc2UucGFyc2UuY2F0ZWdvcmllc2h0bWxcblx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHQoZXJyb3IsIGRldGFpbCkgPT4ge1xuXHRcdFx0XHRcdGRlZmVycmVkLnJlamVjdChkZXRhaWwpO1xuXHRcdFx0XHR9XG5cdFx0XHQpO1xuXHRcdHJldHVybiBkZWZlcnJlZDtcblx0fTtcblxuXHRjb25zdCBjaGFuZ2VWYXJpYW50ID0gZnVuY3Rpb24gY2hhbmdlVmFyaWFudCh2YWwpIHtcblx0XHRkaWFsb2cucHJldmlld1BhbmVsLiRlbGVtZW50WzBdLmZvY3VzKCk7XG5cdFx0dmFyaWFudCA9IHZhbDtcblxuXHRcdGNvbnN0IHRhcmdldFBhbmVsID0gc3RhY2tMYXlvdXQuZmluZEl0ZW1Gcm9tRGF0YSh2YXJpYW50KTtcblx0XHRpZiAodGFyZ2V0UGFuZWwuJGVsZW1lbnQuY2hpbGRyZW4oKS5sZW5ndGgpIHtcblx0XHRcdHN0YWNrTGF5b3V0LnNldEl0ZW0odGFyZ2V0UGFuZWwpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzdGFja0xheW91dC5wdXNoUGVuZGluZygpO1xuXHRcdFx0ZHJvcGRvd24uc2V0RGlzYWJsZWQodHJ1ZSk7XG5cblx0XHRcdGZldGNoUHJldmlldygpXG5cdFx0XHRcdC50aGVuKFxuXHRcdFx0XHRcdCgkcHJldmlld0NvbnRhaW5lcikgPT4ge1xuXHRcdFx0XHRcdFx0dGFyZ2V0UGFuZWwuJGVsZW1lbnQuYXBwZW5kKCRwcmV2aWV3Q29udGFpbmVyKTtcblx0XHRcdFx0XHRcdHN0YWNrTGF5b3V0LnNldEl0ZW0odGFyZ2V0UGFuZWwpO1xuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0KGVycm9yKSA9PiB7XG5cdFx0XHRcdFx0XHR3aW5kb3dNYW5hZ2VyXG5cdFx0XHRcdFx0XHRcdC5vcGVuV2luZG93KGVycm9yRGlhbG9nLCB7XG5cdFx0XHRcdFx0XHRcdFx0dGl0bGU6IE9PLnVpLm1zZygnb291aS1kaWFsb2ctcHJvY2Vzcy1lcnJvcicpLFxuXHRcdFx0XHRcdFx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuXHRcdFx0XHRcdFx0XHRcdG1lc3NhZ2U6IHZlLmluaXQudGFyZ2V0LmdldENvbnRlbnRBcGkoKS5nZXRFcnJvck1lc3NhZ2UoZXJyb3IpLFxuXHRcdFx0XHRcdFx0XHRcdGFjdGlvbnM6IFtcblx0XHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0YWN0aW9uOiAncmVqZWN0Jyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0bGFiZWw6IE9PLnVpLmRlZmVyTXNnKCdvb3VpLWRpYWxvZy1tZXNzYWdlLXJlamVjdCcpLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRmbGFnczogJ3NhZmUnLFxuXHRcdFx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0YWN0aW9uOiAncmV0cnknLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRsYWJlbDogT08udWkuZGVmZXJNc2coJ29vdWktZGlhbG9nLXByb2Nlc3MtcmV0cnknKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZmxhZ3M6IFsncHJpbWFyeScsICdwcm9ncmVzc2l2ZSddLFxuXHRcdFx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0XHRdLFxuXHRcdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdFx0XHQuY2xvc2VkLnRoZW4oKGRhdGEpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRpZiAoZGF0YSAmJiBkYXRhLmFjdGlvbiA9PT0gJ3JldHJ5Jykge1xuXHRcdFx0XHRcdFx0XHRcdFx0Ly8gRG8gbm90IHVzZSBzZXRWYWx1ZSgpIHNpbmNlIGl0IHdpbGwgbm90IHRyaWdnZXIgZXZlbnRcblx0XHRcdFx0XHRcdFx0XHRcdGNoYW5nZVZhcmlhbnQodmFyaWFudCk7XG5cdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHRcdC8vIFwidmFyaWFudFwiIHdpbGwgYmUgc2V0IGJ5IGV2ZW50IGhhbmRsZXJcblx0XHRcdFx0XHRcdFx0XHRcdGRyb3Bkb3duLnNldFZhbHVlKHN0YWNrTGF5b3V0LmdldEN1cnJlbnRJdGVtKCkuZ2V0RGF0YSgpKTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0KVxuXHRcdFx0XHQuYWx3YXlzKCgpID0+IHtcblx0XHRcdFx0XHRzdGFja0xheW91dC5wb3BQZW5kaW5nKCk7XG5cdFx0XHRcdFx0ZHJvcGRvd24uc2V0RGlzYWJsZWQoZmFsc2UpO1xuXHRcdFx0XHR9KTtcblx0XHR9XG5cdH07XG5cblx0Y29uc3QgcHJldmlld1dpdGhWYXJpYW50ID0gKCkgPT4ge1xuXHRcdGNvbnN0IGN1cnJlbnRQYW5lbCA9IHN0YWNrTGF5b3V0LmdldEN1cnJlbnRJdGVtKCk7XG5cblx0XHRpZiAoY3VycmVudFBhbmVsLiRlbGVtZW50LmNoaWxkcmVuKCkubGVuZ3RoKSB7XG5cdFx0XHRkaWFsb2cuc3dhcFBhbmVsKCdwcmV2aWV3Jyk7XG5cdFx0XHRkaWFsb2cucHJldmlld1BhbmVsLiRlbGVtZW50LnByZXBlbmQoZHJvcGRvd24uJGVsZW1lbnQpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0YXJnZXQuZW1pdCgnc2F2ZVByZXZpZXcnKTtcblx0XHRcdGRpYWxvZy5wdXNoUGVuZGluZygpO1xuXG5cdFx0XHRmZXRjaFByZXZpZXcoKVxuXHRcdFx0XHQudGhlbihcblx0XHRcdFx0XHQoJHByZXZpZXdDb250ZW50KSA9PiB7XG5cdFx0XHRcdFx0XHR0YXJnZXRcblx0XHRcdFx0XHRcdFx0LmdldFN1cmZhY2UoKVxuXHRcdFx0XHRcdFx0XHQuZ2V0TW9kZWwoKVxuXHRcdFx0XHRcdFx0XHQuZ2V0RG9jdW1lbnQoKVxuXHRcdFx0XHRcdFx0XHQub25jZSgndHJhbnNhY3QnLCAoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0Zm9yIChjb25zdCBpdGVtIG9mIHBhbmVsTGF5b3V0cykge1xuXHRcdFx0XHRcdFx0XHRcdFx0aXRlbS4kZWxlbWVudC5lbXB0eSgpO1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRkaWFsb2cuc3dhcFBhbmVsKCdwcmV2aWV3Jyk7XG5cdFx0XHRcdFx0XHRjdXJyZW50UGFuZWwuJGVsZW1lbnQuYXBwZW5kKCRwcmV2aWV3Q29udGVudCk7XG5cdFx0XHRcdFx0XHRzdGFja0xheW91dC5zZXRJdGVtKHN0YWNrTGF5b3V0LmZpbmRJdGVtRnJvbURhdGEodmFyaWFudCkpO1xuXHRcdFx0XHRcdFx0Y29uc3QgJGJvZHkgPSAkKCdib2R5Jyk7XG5cdFx0XHRcdFx0XHRpZiAoISRib2R5LmZpbmQoYC4ke0NMQVNTX05BTUV9YCkubGVuZ3RoKSB7XG5cdFx0XHRcdFx0XHRcdGRpYWxvZy5wcmV2aWV3UGFuZWwuJGVsZW1lbnQucHJlcGVuZChkcm9wZG93bi4kZWxlbWVudCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHQoZXJyb3IpID0+IHtcblx0XHRcdFx0XHRcdGRpYWxvZy5zaG93RXJyb3JzKFxuXHRcdFx0XHRcdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcblx0XHRcdFx0XHRcdFx0bmV3IE9PLnVpLkVycm9yKHZlLmluaXQudGFyZ2V0LmdldENvbnRlbnRBcGkoKS5nZXRFcnJvck1lc3NhZ2UoZXJyb3IpLCB7XG5cdFx0XHRcdFx0XHRcdFx0cmVjb3ZlcmFibGU6IHRydWUsXG5cdFx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0KVxuXHRcdFx0XHQuYWx3YXlzKCgpID0+IHtcblx0XHRcdFx0XHRkaWFsb2cucG9wUGVuZGluZygpO1xuXHRcdFx0XHR9KTtcblx0XHR9XG5cdH07XG5cblx0Y29uc3QgaW5pdCA9ICgpID0+IHtcblx0XHR2YXJpYW50ID0gV0dfVVNFUl9WQVJJQU5UO1xuXHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuXHRcdCh7dGFyZ2V0fSA9IHZlLmluaXQpO1xuXHRcdGRpYWxvZyA9IHRhcmdldC5zYXZlRGlhbG9nO1xuXHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtZWRpYXdpa2kvY2xhc3MtZG9jXG5cdFx0ZHJvcGRvd24gPSBuZXcgT08udWkuRHJvcGRvd25JbnB1dFdpZGdldCh7XG5cdFx0XHQkb3ZlcmxheTogZGlhbG9nLiRvdmVybGF5LFxuXHRcdFx0Y2xhc3NlczogW0NMQVNTX05BTUVdLFxuXHRcdFx0b3B0aW9uczogW1xuXHRcdFx0XHR7XG5cdFx0XHRcdFx0b3B0Z3JvdXA6IG13Lm1zZygncHd2LTIwMTctY2FwdGlvbicpLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHQuLi5EQVRBLm1hcCgoaXRlbSkgPT4ge1xuXHRcdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0XHRkYXRhOiBpdGVtLnZhcixcblx0XHRcdFx0XHRcdGxhYmVsOiBtdy5tc2coaXRlbS5tc2cpIC8qIGVzbGludC1kaXNhYmxlLWxpbmUgbWVkaWF3aWtpL21zZy1kb2MgKi8sXG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0fSksXG5cdFx0XHRdLFxuXHRcdFx0dmFsdWU6IHZhcmlhbnQsXG5cdFx0fSk7XG5cdFx0ZHJvcGRvd24ub24oJ2NoYW5nZScsIGNoYW5nZVZhcmlhbnQpO1xuXHRcdHBhbmVsTGF5b3V0cyA9IERBVEEubWFwKChpdGVtKSA9PiB7XG5cdFx0XHRyZXR1cm4gbmV3IE9PLnVpLlBhbmVsTGF5b3V0KHtcblx0XHRcdFx0ZXhwYW5kZWQ6IGZhbHNlLFxuXHRcdFx0XHRkYXRhOiBpdGVtLnZhcixcblx0XHRcdH0pO1xuXHRcdH0pO1xuXHRcdHN0YWNrTGF5b3V0ID0gbmV3IFBlbmRpbmdTdGFja0xheW91dCh7XG5cdFx0XHRleHBhbmRlZDogZmFsc2UsXG5cdFx0XHRpdGVtczogcGFuZWxMYXlvdXRzLFxuXHRcdH0pO1xuXHRcdHN0YWNrTGF5b3V0LnNldEl0ZW0oc3RhY2tMYXlvdXQuZmluZEl0ZW1Gcm9tRGF0YSh2YXJpYW50KSk7XG5cdFx0ZGlhbG9nLnByZXZpZXdQYW5lbC4kZWxlbWVudC5hcHBlbmQoc3RhY2tMYXlvdXQuJGVsZW1lbnQpO1xuXHRcdGVycm9yRGlhbG9nID0gbmV3IE9PLnVpLk1lc3NhZ2VEaWFsb2coKTtcblx0XHR3aW5kb3dNYW5hZ2VyID0gbmV3IE9PLnVpLldpbmRvd01hbmFnZXIoKTtcblx0XHR3aW5kb3dNYW5hZ2VyLmFkZFdpbmRvd3MoW2Vycm9yRGlhbG9nXSk7XG5cdFx0Y29uc3QgJGJvZHkgPSAkKCdib2R5Jyk7XG5cdFx0JGJvZHkuYXBwZW5kKHdpbmRvd01hbmFnZXIuJGVsZW1lbnQpO1xuXG5cdFx0Y29uc3QgaGFuZGxlclRvUmVtb3ZlID0gJ29uU2F2ZURpYWxvZ1ByZXZpZXcnO1xuXHRcdGRpYWxvZy5vZmYoJ3ByZXZpZXcnLCBoYW5kbGVyVG9SZW1vdmUsIHRhcmdldCkub24oJ3ByZXZpZXcnLCBwcmV2aWV3V2l0aFZhcmlhbnQpO1xuXG5cdFx0bXcuY29uZmlnLnNldCgnd2dQcmV2aWV3V2l0aFZhcmlhbnQyMDE3SW5pdGlhbGl6ZWQnLCB0cnVlKTtcblxuXHRcdC8vIFN3aXRjaGluZyBiZXR3ZWVuIFZFIGFuZCBOV0UsIHJlcXVpcmVzIHRvIGJlIHJlaW5pdGlhbGl6ZWRcblx0XHRtdy5ob29rKCd2ZS5hY3RpdmF0aW9uQ29tcGxldGUnKS5hZGQoKCkgPT4ge1xuXHRcdFx0aWYgKG13LmNvbmZpZy5nZXQoJ3dnUHJldmlld1dpdGhWYXJpYW50SW5pdGlhbGl6ZWQnKSkge1xuXHRcdFx0XHRtdy5jb25maWcuc2V0KCd3Z1ByZXZpZXdXaXRoVmFyaWFudEluaXRpYWxpemVkJywgZmFsc2UpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9O1xuXG5cdGlmICghbXcuY29uZmlnLmdldCgnd2dQcmV2aWV3V2l0aFZhcmlhbnRJbml0aWFsaXplZCcpKSB7XG5cdFx0aW5pdCgpO1xuXHRcdG13LmNvbmZpZy5zZXQoJ3dnUHJldmlld1dpdGhWYXJpYW50SW5pdGlhbGl6ZWQnLCB0cnVlKTtcblx0fVxufTtcblxuZXhwb3J0IHtwcm9jZXNzVmlzdWFsRWRpdG9yfTtcbiIsICJpbXBvcnQgJy4vcHJvY2Vzc1dpa2lFZGl0b3IubGVzcyc7XG5pbXBvcnQge1ZBUklBTlRTLCBXR19QQUdFX0NPTlRFTlRfTU9ERUwsIFdHX1VTRVJfVkFSSUFOVH0gZnJvbSAnLi9jb25zdGFudCc7XG4vKipcbiAqIEBkZXNjcmlwdGlvbiBBZGQgYSBcIlByZXZpZXcgd2l0aCB2YXJpYW50XCIgb3B0aW9uIHRvIHRoZSBlZGl0IGZvcm0uXG4gKi9cbmNvbnN0IHByb2Nlc3NXaWtpRWRpdG9yID0gKCk6IHZvaWQgPT4ge1xuXHRtdy5ob29rKCd3aWtpcGFnZS5lZGl0Zm9ybScpLmFkZCgoJGVkaXRGb3JtKTogdm9pZCA9PiB7XG5cdFx0Ly8gR3VhcmQgYWdhaW5zdCBkb3VibGUgaW5jbHVzaW9uc1xuXHRcdGlmIChtdy5jb25maWcuZ2V0KCd3Z1ByZXZpZXdXaXRoVmFyaWFudEluaXRpYWxpemVkJykpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0Y29uc3QgJHRlbXBsYXRlU2FuZGJveFByZXZpZXc6IEpRdWVyeSA9ICRlZGl0Rm9ybS5maW5kKCdpbnB1dFtuYW1lPVwid3BUZW1wbGF0ZVNhbmRib3hQcmV2aWV3XCJdJyk7XG5cdFx0Ly8gSXQgaXMgcG9zc2libGUgdGhhdCBhIHVzZXIgd2FudCB0byBwcmV2aWV3IGEgcGFnZSB3aXRoIGEgbm9uLXdpa2l0ZXh0IG1vZHVsZVxuXHRcdC8vIERvIG5vdCByZXR1cm4gaW4gdGhpcyBjYXNlXG5cdFx0aWYgKFdHX1BBR0VfQ09OVEVOVF9NT0RFTCAhPT0gJ3dpa2l0ZXh0JyAmJiAhJHRlbXBsYXRlU2FuZGJveFByZXZpZXcubGVuZ3RoKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGNvbnN0ICRsYXlvdXQ6IEpRdWVyeSA9ICRlZGl0Rm9ybS5maW5kKCcuZWRpdENoZWNrYm94ZXMgLm9vLXVpLWhvcml6b250YWxMYXlvdXQnKTtcblx0XHRpZiAoISRsYXlvdXQubGVuZ3RoKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdC8vIEd1YXJkIGFnYWluc3QgZG91YmxlIGluY2x1c2lvbnNcblx0XHRtdy5jb25maWcuc2V0KCd3Z1ByZXZpZXdXaXRoVmFyaWFudEluaXRpYWxpemVkJywgdHJ1ZSk7XG5cdFx0Y29uc3QgdXJpVmFyaWFudDogc3RyaW5nIHwgbnVsbCA9IG13LnV0aWwuZ2V0UGFyYW1WYWx1ZSgndmFyaWFudCcpO1xuXHRcdGNvbnN0IGNoZWNrYm94OiBPTy51aS5DaGVja2JveElucHV0V2lkZ2V0ID0gbmV3IE9PLnVpLkNoZWNrYm94SW5wdXRXaWRnZXQoe1xuXHRcdFx0c2VsZWN0ZWQ6IEJvb2xlYW4odXJpVmFyaWFudCksXG5cdFx0fSk7XG5cdFx0Y29uc3QgZHJvcGRvd246IE9PLnVpLkRyb3Bkb3duV2lkZ2V0ID0gbmV3IE9PLnVpLkRyb3Bkb3duV2lkZ2V0KHtcblx0XHRcdCRvdmVybGF5OiB0cnVlLFxuXHRcdFx0ZGlzYWJsZWQ6ICFjaGVja2JveC5pc1NlbGVjdGVkKCksXG5cdFx0XHRtZW51OiB7XG5cdFx0XHRcdGl0ZW1zOiBWQVJJQU5UUy5tYXAoKHtkYXRhLCBsYWJlbH0pOiBPTy51aS5NZW51T3B0aW9uV2lkZ2V0ID0+IHtcblx0XHRcdFx0XHRyZXR1cm4gbmV3IE9PLnVpLk1lbnVPcHRpb25XaWRnZXQoe1xuXHRcdFx0XHRcdFx0ZGF0YSxcblx0XHRcdFx0XHRcdGxhYmVsLFxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9KSxcblx0XHRcdH0sXG5cdFx0fSk7XG5cdFx0ZHJvcGRvd24uZ2V0TWVudSgpLnNlbGVjdEl0ZW1CeURhdGEoV0dfVVNFUl9WQVJJQU5UIHx8IHVyaVZhcmlhbnQgfHwgbXcudXNlci5vcHRpb25zLmdldCgndmFyaWFudCcpKTtcblx0XHRjaGVja2JveC5vbignY2hhbmdlJywgKHNlbGVjdGVkOiBib29sZWFuIHwgc3RyaW5nKTogdm9pZCA9PiB7XG5cdFx0XHRkcm9wZG93bi5zZXREaXNhYmxlZCghc2VsZWN0ZWQpO1xuXHRcdH0pO1xuXHRcdGNvbnN0IGdldFNlbGVjdGVkVmFyaWFudCA9ICgpOiBzdHJpbmcgfCB1bmRlZmluZWQgPT4ge1xuXHRcdFx0aWYgKCFjaGVja2JveC5pc1NlbGVjdGVkKCkpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3Qgc2VsZWN0ZWRJdGVtOiBPTy51aS5PcHRpb25XaWRnZXQgfCBudWxsID0gZHJvcGRvd25cblx0XHRcdFx0LmdldE1lbnUoKVxuXHRcdFx0XHQuZmluZFNlbGVjdGVkSXRlbSgpIGFzIE9PLnVpLk9wdGlvbldpZGdldCB8IG51bGw7XG5cdFx0XHRyZXR1cm4gc2VsZWN0ZWRJdGVtID8gKHNlbGVjdGVkSXRlbS5nZXREYXRhKCkgYXMgc3RyaW5nKSA6IHVuZGVmaW5lZDtcblx0XHR9O1xuXHRcdGNvbnN0IG1hbmlwdWxhdGVBY3Rpb25VcmwgPSAoKTogdm9pZCA9PiB7XG5cdFx0XHRjb25zdCBzZWxlY3RlZFZhcmlhbnQ6IHN0cmluZyB8IHVuZGVmaW5lZCA9IGdldFNlbGVjdGVkVmFyaWFudCgpO1xuXHRcdFx0Y29uc3Qgb3JpZ2luYWxBY3Rpb246IHN0cmluZyB8IHVuZGVmaW5lZCA9ICRlZGl0Rm9ybS5hdHRyKCdhY3Rpb24nKTtcblx0XHRcdGlmIChzZWxlY3RlZFZhcmlhbnQgJiYgb3JpZ2luYWxBY3Rpb24pIHtcblx0XHRcdFx0JGVkaXRGb3JtLmF0dHIoXG5cdFx0XHRcdFx0J2FjdGlvbicsXG5cdFx0XHRcdFx0bmV3IG13LlVyaShvcmlnaW5hbEFjdGlvbilcblx0XHRcdFx0XHRcdC5leHRlbmQoe1xuXHRcdFx0XHRcdFx0XHR2YXJpYW50OiBzZWxlY3RlZFZhcmlhbnQsXG5cdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdFx0LmdldFJlbGF0aXZlUGF0aCgpXG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0fTtcblx0XHRjb25zdCBtYW5pcHVsYXRlVmFyaWFudENvbmZpZyA9ICgpOiB2b2lkID0+IHtcblx0XHRcdG13LmNvbmZpZy5zZXQoJ3dnVXNlclZhcmlhbnQnLCBnZXRTZWxlY3RlZFZhcmlhbnQoKSB8fCAobXcudXNlci5vcHRpb25zLmdldCgndmFyaWFudCcpIGFzIHN0cmluZykpO1xuXHRcdH07XG5cdFx0JGVkaXRGb3JtXG5cdFx0XHQuZmluZCgnaW5wdXRbbmFtZT13cFByZXZpZXddJylcblx0XHRcdC5vbignY2xpY2snLCBtdy51c2VyLm9wdGlvbnMuZ2V0KCd1c2VsaXZlcHJldmlldycpID8gbWFuaXB1bGF0ZVZhcmlhbnRDb25maWcgOiBtYW5pcHVsYXRlQWN0aW9uVXJsKTtcblx0XHQkdGVtcGxhdGVTYW5kYm94UHJldmlldy5vbignY2xpY2snLCBtYW5pcHVsYXRlQWN0aW9uVXJsKTtcblx0XHRkcm9wZG93bi5nZXRNZW51KCkub24oJ3NlbGVjdCcsIG1hbmlwdWxhdGVWYXJpYW50Q29uZmlnKTtcblx0XHRjb25zdCBjaGVja2JveEZpZWxkOiBPTy51aS5GaWVsZExheW91dDxPTy51aS5DaGVja2JveElucHV0V2lkZ2V0PiA9IG5ldyBPTy51aS5GaWVsZExheW91dChjaGVja2JveCwge1xuXHRcdFx0YWxpZ246ICdpbmxpbmUnLFxuXHRcdFx0bGFiZWw6IHdpbmRvdy53Z1VMUygn6aKE6KeI5a2X6K+N6L2s5o2iJywgJ+mgkOimveWtl+ipnui9ieaPmycpLFxuXHRcdH0pO1xuXHRcdGNvbnN0IGRyb3Bkb3duRmllbGQ6IE9PLnVpLkZpZWxkTGF5b3V0PE9PLnVpLkRyb3Bkb3duV2lkZ2V0PiA9IG5ldyBPTy51aS5GaWVsZExheW91dChkcm9wZG93biwge1xuXHRcdFx0YWxpZ246ICd0b3AnLFxuXHRcdFx0bGFiZWw6IHdpbmRvdy53Z1VMUygn5L2/55So6K+l6K+t6KiA5Y+Y5L2T5pi+56S66aKE6KeI77yaJywgJ+S9v+eUqOipsuiqnuiogOiuiumrlOmhr+ekuumgkOimve+8micpLFxuXHRcdFx0aW52aXNpYmxlTGFiZWw6IHRydWUsXG5cdFx0fSk7XG5cdFx0JGxheW91dC5hcHBlbmQoJCgnPGRpdj4nKS5hdHRyKCdpZCcsICdwd3YtYXJlYScpLmFwcGVuZChjaGVja2JveEZpZWxkLiRlbGVtZW50LCBkcm9wZG93bkZpZWxkLiRlbGVtZW50KSk7XG5cdH0pO1xufTtcblxuZXhwb3J0IHtwcm9jZXNzV2lraUVkaXRvcn07XG4iLCAiaW1wb3J0IHtwcm9jZXNzVmlzdWFsRWRpdG9yfSBmcm9tICcuL21vZHVsZXMvcHJvY2Vzc1Zpc3VhbEVkaXRvcic7XG5pbXBvcnQge3Byb2Nlc3NXaWtpRWRpdG9yfSBmcm9tICcuL21vZHVsZXMvcHJvY2Vzc1dpa2lFZGl0b3InO1xuXG4oZnVuY3Rpb24gcHJldmlld1dpdGhWYXJpYW50cygpOiB2b2lkIHtcblx0bXcuaG9vaygndmUuc2F2ZURpYWxvZy5zdGF0ZUNoYW5nZWQnKS5hZGQoKCk6IHZvaWQgPT4ge1xuXHRcdHByb2Nlc3NWaXN1YWxFZGl0b3IoKTtcblx0fSk7XG5cblx0bXcuaG9vaygnd2lraXBhZ2UuZWRpdGZvcm0nKS5hZGQoKCk6IHZvaWQgPT4ge1xuXHRcdHByb2Nlc3NXaWtpRWRpdG9yKCk7XG5cdH0pO1xufSkoKTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLGFBQWE7QUFFbkIsSUFBTUMsV0FHQSxDQUNMO0VBQ0NDLE1BQU07RUFDTkMsT0FBT0MsT0FBT0MsTUFBTSxPQUFPLEtBQUs7QUFDakMsR0FDQTtFQUNDSCxNQUFNO0VBQ05DLE9BQU87QUFDUixHQUNBO0VBQ0NELE1BQU07RUFDTkMsT0FBTztBQUNSLEdBQ0E7RUFDQ0QsTUFBTTtFQUNOQyxPQUFPO0FBQ1IsR0FDQTtFQUNDRCxNQUFNO0VBQ05DLE9BQU87QUFDUixHQUNBO0VBQ0NELE1BQU07RUFDTkMsT0FBTztBQUNSLEdBQ0E7RUFDQ0QsTUFBTTtFQUNOQyxPQUFPO0FBQ1IsR0FDQTtFQUNDRCxNQUFNO0VBQ05DLE9BQU87QUFDUixHQUNBO0VBQ0NELE1BQU07RUFDTkMsT0FBTztBQUNSLENBQUE7QUFHRCxJQUFNRyxPQUFPLENBQ1o7RUFBQ0MsS0FBSztFQUFNQyxVQUFVO0VBQU1DLEtBQUs7QUFBYSxHQUM5QztFQUFDRixLQUFLO0VBQVdDLFVBQVU7RUFBV0MsS0FBSztBQUFrQixHQUM3RDtFQUFDRixLQUFLO0VBQVdDLFVBQVU7RUFBV0MsS0FBSztBQUFrQixHQUM3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QUVrRyxJQUFJLE1BQVk7QUFDckR6SCx3QkFBb0I7RUFDckIsQ0FBQztBQUVEdEIsS0FBRzZDLEtBQUssbUJBQW1CLEVBQUVrRyxJQUFJLE1BQVk7QUFDNUNDLHNCQUFrQjtFQUNuQixDQUFDO0FBQ0YsR0FBRzsiLAogICJuYW1lcyI6IFsiQ0xBU1NfTkFNRSIsICJWQVJJQU5UUyIsICJkYXRhIiwgImxhYmVsIiwgIndpbmRvdyIsICJ3Z1VMUyIsICJEQVRBIiwgInZhciIsICJodG1sTGFuZyIsICJtc2ciLCAiV0dfU0tJTiIsICJtdyIsICJjb25maWciLCAiZ2V0IiwgIldHX1BBR0VfQ09OVEVOVF9NT0RFTCIsICJXR19VU0VSX0xBTkdVQUdFIiwgIldHX1VTRVJfVkFSSUFOVCIsICJQV1YyMDE3bWVzc2FnZXMiLCAibWVzc2FnZXMiLCAic2V0IiwgIlBlbmRpbmdTdGFja0xheW91dCIsICJQZW5kaW5nU3RhY2tMYXlvdXQyIiwgInN1cGVyIiwgImNhbGwiLCAiT08iLCAidWkiLCAibWl4aW4iLCAiUGVuZGluZ0VsZW1lbnQiLCAiJGVsZW1lbnQiLCAiYWRkQ2xhc3MiLCAiaW5oZXJpdENsYXNzIiwgIlN0YWNrTGF5b3V0IiwgIm1peGluQ2xhc3MiLCAicHJvY2Vzc1Zpc3VhbEVkaXRvciIsICJ2YXJpYW50IiwgInRhcmdldCIsICJkaWFsb2ciLCAiZHJvcGRvd24iLCAic3RhY2tMYXlvdXQiLCAicGFuZWxMYXlvdXRzIiwgIndpbmRvd01hbmFnZXIiLCAiZXJyb3JEaWFsb2ciLCAiY29uc3RydWN0RG9jdW1lbnQiLCAidGl0bGUiLCAid2lraXRleHQiLCAiY2F0ZWdvcmllcyIsICIkcmVzdWx0IiwgIiQiLCAiYXBwZW5kIiwgImh0bWwiLCAiY29uY2F0IiwgInBhZ2VMYW5ndWFnZURpciIsICJhdHRyIiwgImZpbmQiLCAiaXRlbSIsICJwYXJzZUhUTUwiLCAiaG9vayIsICJmaXJlIiwgInZlIiwgInRhcmdldExpbmtzVG9OZXdXaW5kb3ciLCAiZmV0Y2hQcmV2aWV3IiwgImRlZmVycmVkIiwgIkRlZmVycmVkIiwgImdldENvbnRlbnRBcGkiLCAicG9zdCIsICJhY3Rpb24iLCAiZGlzYWJsZWVkaXRzZWN0aW9uIiwgImVycm9yZm9ybWF0IiwgImVycm9ybGFuZyIsICJlcnJvcnN1c2Vsb2NhbCIsICJmb3JtYXR2ZXJzaW9uIiwgInByb3AiLCAicHN0IiwgInByZXZpZXciLCAiZ2V0UGFnZU5hbWUiLCAidGV4dCIsICJnZXREb2NUb1NhdmUiLCAidXNlbGFuZyIsICJ0aGVuIiwgInJlc3BvbnNlIiwgInJlc29sdmUiLCAicGFyc2UiLCAiZGlzcGxheXRpdGxlIiwgImNhdGVnb3JpZXNodG1sIiwgImVycm9yIiwgImRldGFpbCIsICJyZWplY3QiLCAiY2hhbmdlVmFyaWFudCIsICJjaGFuZ2VWYXJpYW50MiIsICJ2YWwiLCAicHJldmlld1BhbmVsIiwgImZvY3VzIiwgInRhcmdldFBhbmVsIiwgImZpbmRJdGVtRnJvbURhdGEiLCAiY2hpbGRyZW4iLCAibGVuZ3RoIiwgInNldEl0ZW0iLCAicHVzaFBlbmRpbmciLCAic2V0RGlzYWJsZWQiLCAiJHByZXZpZXdDb250YWluZXIiLCAib3BlbldpbmRvdyIsICJtZXNzYWdlIiwgImluaXQiLCAiZ2V0RXJyb3JNZXNzYWdlIiwgImFjdGlvbnMiLCAiZGVmZXJNc2ciLCAiZmxhZ3MiLCAiY2xvc2VkIiwgInNldFZhbHVlIiwgImdldEN1cnJlbnRJdGVtIiwgImdldERhdGEiLCAiYWx3YXlzIiwgInBvcFBlbmRpbmciLCAicHJldmlld1dpdGhWYXJpYW50IiwgImN1cnJlbnRQYW5lbCIsICJzd2FwUGFuZWwiLCAicHJlcGVuZCIsICJlbWl0IiwgIiRwcmV2aWV3Q29udGVudCIsICJnZXRTdXJmYWNlIiwgImdldE1vZGVsIiwgImdldERvY3VtZW50IiwgIm9uY2UiLCAiX2l0ZXJhdG9yIiwgIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwgIl9zdGVwIiwgInMiLCAibiIsICJkb25lIiwgInZhbHVlIiwgImVtcHR5IiwgImVyciIsICJlIiwgImYiLCAiJGJvZHkiLCAic2hvd0Vycm9ycyIsICJFcnJvciIsICJyZWNvdmVyYWJsZSIsICJzYXZlRGlhbG9nIiwgIkRyb3Bkb3duSW5wdXRXaWRnZXQiLCAiJG92ZXJsYXkiLCAiY2xhc3NlcyIsICJvcHRpb25zIiwgIm9wdGdyb3VwIiwgIm1hcCIsICJvbiIsICJQYW5lbExheW91dCIsICJleHBhbmRlZCIsICJpdGVtcyIsICJNZXNzYWdlRGlhbG9nIiwgIldpbmRvd01hbmFnZXIiLCAiYWRkV2luZG93cyIsICJoYW5kbGVyVG9SZW1vdmUiLCAib2ZmIiwgImFkZCIsICJwcm9jZXNzV2lraUVkaXRvciIsICIkZWRpdEZvcm0iLCAiJHRlbXBsYXRlU2FuZGJveFByZXZpZXciLCAiJGxheW91dCIsICJ1cmlWYXJpYW50IiwgInV0aWwiLCAiZ2V0UGFyYW1WYWx1ZSIsICJjaGVja2JveCIsICJDaGVja2JveElucHV0V2lkZ2V0IiwgInNlbGVjdGVkIiwgIkJvb2xlYW4iLCAiRHJvcGRvd25XaWRnZXQiLCAiZGlzYWJsZWQiLCAiaXNTZWxlY3RlZCIsICJtZW51IiwgIk1lbnVPcHRpb25XaWRnZXQiLCAiZ2V0TWVudSIsICJzZWxlY3RJdGVtQnlEYXRhIiwgInVzZXIiLCAiZ2V0U2VsZWN0ZWRWYXJpYW50IiwgInNlbGVjdGVkSXRlbSIsICJmaW5kU2VsZWN0ZWRJdGVtIiwgIm1hbmlwdWxhdGVBY3Rpb25VcmwiLCAic2VsZWN0ZWRWYXJpYW50IiwgIm9yaWdpbmFsQWN0aW9uIiwgIlVyaSIsICJleHRlbmQiLCAiZ2V0UmVsYXRpdmVQYXRoIiwgIm1hbmlwdWxhdGVWYXJpYW50Q29uZmlnIiwgImNoZWNrYm94RmllbGQiLCAiRmllbGRMYXlvdXQiLCAiYWxpZ24iLCAiZHJvcGRvd25GaWVsZCIsICJpbnZpc2libGVMYWJlbCIsICJwcmV2aWV3V2l0aFZhcmlhbnRzIl0KfQo=

/**
 * SPDX-License-Identifier: MIT
 * _addText: '{{Gadget Header|license=MIT|attribution=Diskdance, et. al.}}'
 *
 * @base {@link https://zh.wikipedia.org/wiki/MediaWiki:Gadget-PreviewWithVariant2017.js}
 * @base {@link https://zh.wikipedia.org/wiki/MediaWiki:Gadget-PreviewWithVariant2017.css}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/PreviewWithVariant2017}
 * @license MIT {@link https://zh.wikipedia.org/wiki/MediaWiki:Gadget-PreviewWithVariant2017.js}
 */

/**
 * Copyright Diskdance
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
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

// dist/PreviewWithVariant2017/PreviewWithVariant2017.js
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
//! src/PreviewWithVariant2017/options.json
var configKey = "gadget-PreviewWithVariant2017__Initialized";
var className = "pwv-2017-variant";
//! src/PreviewWithVariant2017/modules/constant.ts
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
//! src/PreviewWithVariant2017/modules/messages.ts
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
//! src/PreviewWithVariant2017/modules/processVisualEditor.js
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
//! src/PreviewWithVariant2017/PreviewWithVariant2017.ts
(function previewWithVariants2017() {
  mw.hook("ve.saveDialog.stateChanged").add(() => {
    processVisualEditor();
  });
})();

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1ByZXZpZXdXaXRoVmFyaWFudDIwMTcvb3B0aW9ucy5qc29uIiwgInNyYy9QcmV2aWV3V2l0aFZhcmlhbnQyMDE3L21vZHVsZXMvY29uc3RhbnQudHMiLCAic3JjL1ByZXZpZXdXaXRoVmFyaWFudDIwMTcvbW9kdWxlcy9tZXNzYWdlcy50cyIsICJzcmMvUHJldmlld1dpdGhWYXJpYW50MjAxNy9tb2R1bGVzL3Byb2Nlc3NWaXN1YWxFZGl0b3IuanMiLCAic3JjL1ByZXZpZXdXaXRoVmFyaWFudDIwMTcvUHJldmlld1dpdGhWYXJpYW50MjAxNy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsie1xuXHRcImNvbmZpZ0tleVwiOiBcImdhZGdldC1QcmV2aWV3V2l0aFZhcmlhbnQyMDE3X19Jbml0aWFsaXplZFwiLFxuXHRcImNsYXNzTmFtZVwiOiBcInB3di0yMDE3LXZhcmlhbnRcIlxufVxuIiwgImNvbnN0IERBVEEgPSBbXG5cdHt2YXI6ICd6aCcsIGh0bWxMYW5nOiAnemgnLCBtc2c6ICdwd3YtMjAxNy16aCd9LFxuXHR7dmFyOiAnemgtaGFucycsIGh0bWxMYW5nOiAnemgtSGFucycsIG1zZzogJ3B3di0yMDE3LXpoLWhhbnMnfSxcblx0e3ZhcjogJ3poLWhhbnQnLCBodG1sTGFuZzogJ3poLUhhbnQnLCBtc2c6ICdwd3YtMjAxNy16aC1oYW50J30sXG5cdHt2YXI6ICd6aC1jbicsIGh0bWxMYW5nOiAnemgtSGFucy1DTicsIG1zZzogJ3B3di0yMDE3LXpoLWNuJ30sXG5cdHt2YXI6ICd6aC1oaycsIGh0bWxMYW5nOiAnemgtSGFudC1ISycsIG1zZzogJ3B3di0yMDE3LXpoLWhrJ30sXG5cdHt2YXI6ICd6aC1tbycsIGh0bWxMYW5nOiAnemgtSGFudC1NTycsIG1zZzogJ3B3di0yMDE3LXpoLW1vJ30sXG5cdHt2YXI6ICd6aC1teScsIGh0bWxMYW5nOiAnemgtSGFucy1NWScsIG1zZzogJ3B3di0yMDE3LXpoLW15J30sXG5cdHt2YXI6ICd6aC1zZycsIGh0bWxMYW5nOiAnemgtSGFucy1TRycsIG1zZzogJ3B3di0yMDE3LXpoLXNnJ30sXG5cdHt2YXI6ICd6aC10dycsIGh0bWxMYW5nOiAnemgtSGFudC1UVycsIG1zZzogJ3B3di0yMDE3LXpoLXR3J30sXG5dO1xuXG5leHBvcnQge0RBVEF9O1xuIiwgImNvbnN0IFBXVjIwMTdtZXNzYWdlcyA9ICgpID0+IHtcblx0bXcubWVzc2FnZXMuc2V0KHtcblx0XHQncHd2LTIwMTctY2FwdGlvbic6IHdpbmRvdy53Z1VMUygn6YCJ5oup6K+t6KiA5Y+Y5L2TJywgJ+mBuOaTh+iqnuiogOiuiumrlCcpLFxuXHRcdCdwd3YtMjAxNy16aCc6IHdpbmRvdy53Z1VMUygn5LiN6L2s5o2iJywgJ+S4jei9ieaPmycpLFxuXHRcdCdwd3YtMjAxNy16aC1oYW5zJzogJ+eugOS9kycsXG5cdFx0J3B3di0yMDE3LXpoLWhhbnQnOiAn57mB6auUJyxcblx0XHQncHd2LTIwMTctemgtY24nOiAn5Lit5Zu95aSn6ZmG566A5L2TJyxcblx0XHQncHd2LTIwMTctemgtaGsnOiAn5Lit5ZyL6aaZ5riv57mB6auUJyxcblx0XHQncHd2LTIwMTctemgtbW8nOiAn5Lit5ZyL5r6z6ZaA57mB6auUJyxcblx0XHQncHd2LTIwMTctemgtbXknOiAn6ams5p2l6KW/5Lqa566A5L2TJyxcblx0XHQncHd2LTIwMTctemgtc2cnOiAn5paw5Yqg5Z2h566A5L2TJyxcblx0XHQncHd2LTIwMTctemgtdHcnOiAn5Lit5ZyL6Ie654Gj57mB6auUJyxcblx0fSk7XG59O1xuXG5leHBvcnQge1BXVjIwMTdtZXNzYWdlc307XG4iLCAiLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHMtY29tbWVudFxuLy8gQHRzLW5vY2hlY2tcbmltcG9ydCAnLi9wcm9jZXNzVmlzdWFsRWRpdG9yLmxlc3MnO1xuaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtEQVRBfSBmcm9tICcuL2NvbnN0YW50JztcbmltcG9ydCB7UFdWMjAxN21lc3NhZ2VzfSBmcm9tICcuL21lc3NhZ2VzJztcblxubXcuY29uZmlnLnNldChPUFRJT05TLmNvbmZpZ0tleSwgZmFsc2UpO1xuXG5QV1YyMDE3bWVzc2FnZXMoKTtcblxuY29uc3QgUGVuZGluZ1N0YWNrTGF5b3V0ID0gZnVuY3Rpb24gUGVuZGluZ1N0YWNrTGF5b3V0KGNvbmZpZykge1xuXHRQZW5kaW5nU3RhY2tMYXlvdXQuc3VwZXIuY2FsbCh0aGlzLCBjb25maWcpO1xuXHRPTy51aS5taXhpbi5QZW5kaW5nRWxlbWVudC5jYWxsKHRoaXMpO1xuXHR0aGlzLiRlbGVtZW50LmFkZENsYXNzKCdwd3YtMjAxNy1wZW5kaW5nU3RhY2tMYXlvdXQnKTtcbn07XG5cbk9PLmluaGVyaXRDbGFzcyhQZW5kaW5nU3RhY2tMYXlvdXQsIE9PLnVpLlN0YWNrTGF5b3V0KTtcbk9PLm1peGluQ2xhc3MoUGVuZGluZ1N0YWNrTGF5b3V0LCBPTy51aS5taXhpbi5QZW5kaW5nRWxlbWVudCk7XG5cbmNvbnN0IHByb2Nlc3NWaXN1YWxFZGl0b3IgPSAoKSA9PiB7XG5cdGNvbnN0IHtza2luLCB3Z1VzZXJMYW5ndWFnZSwgd2dVc2VyVmFyaWFudH0gPSBtdy5jb25maWcuZ2V0KCk7XG5cdGxldCB2YXJpYW50LCB0YXJnZXQsIGRpYWxvZywgZHJvcGRvd24sIHN0YWNrTGF5b3V0LCBwYW5lbExheW91dHMsIHdpbmRvd01hbmFnZXIsIGVycm9yRGlhbG9nO1xuXG5cdGNvbnN0IGNvbnN0cnVjdERvY3VtZW50ID0gKHRpdGxlLCB3aWtpdGV4dCwgY2F0ZWdvcmllcykgPT4ge1xuXHRcdGNvbnN0ICRyZXN1bHQgPSAkKCc8ZGl2PicpLmFkZENsYXNzKCdtdy1ib2R5IG13LWJvZHktY29udGVudCcpO1xuXG5cdFx0aWYgKHNraW4gPT09ICd2ZWN0b3InKSB7XG5cdFx0XHQvLyBBZGRpdGlvbmFsIGNsYXNzZXMgcmVxdWlyZWQgaW4gdmVjdG9yIHRvIGdldCBjb3JyZWN0IGFwcGVhcmFuY2Vcblx0XHRcdCRyZXN1bHQuYWRkQ2xhc3MoJ3ZlY3Rvci1ib2R5Jyk7XG5cdFx0fVxuXG5cdFx0JHJlc3VsdC5hcHBlbmQoXG5cdFx0XHQkKCc8aDE+JykuYWRkQ2xhc3MoJ2ZpcnN0SGVhZGluZycpLmh0bWwodGl0bGUpLFxuXHRcdFx0Ly8gQ2xhc3NlcyB1c2VkIGhlcmU6XG5cdFx0XHQvLyAqIG13LWNvbnRlbnQtbHRyXG5cdFx0XHQvLyAqIG13LWNvbnRlbnQtcnRsXG5cdFx0XHQkKCc8ZGl2PicpXG5cdFx0XHRcdC5hZGRDbGFzcyhgbXctY29udGVudC0ke213LmNvbmZpZy5nZXQoJ3dnVmlzdWFsRWRpdG9yJykucGFnZUxhbmd1YWdlRGlyfWApXG5cdFx0XHRcdC5hdHRyKFxuXHRcdFx0XHRcdCdsYW5nJyxcblx0XHRcdFx0XHREQVRBLmZpbmQoKGl0ZW0pID0+IHtcblx0XHRcdFx0XHRcdHJldHVybiBpdGVtLnZhciA9PT0gdmFyaWFudDtcblx0XHRcdFx0XHR9KS5odG1sTGFuZ1xuXHRcdFx0XHQpXG5cdFx0XHRcdC5odG1sKHdpa2l0ZXh0KSxcblx0XHRcdCQucGFyc2VIVE1MKGNhdGVnb3JpZXMpXG5cdFx0KTtcblxuXHRcdC8vIE1ha2Ugb3RoZXIgdGhpbmdzIGxpa2UgUmVmZXJlbmNlIFRvb2x0aXAgZnVuY3Rpb25cblx0XHRtdy5ob29rKCd3aWtpcGFnZS5jb250ZW50JykuZmlyZSgkcmVzdWx0KTtcblx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcblx0XHR2ZS50YXJnZXRMaW5rc1RvTmV3V2luZG93KCRyZXN1bHRbMF0pO1xuXHRcdHJldHVybiAkcmVzdWx0O1xuXHR9O1xuXG5cdGNvbnN0IGZldGNoUHJldmlldyA9ICgpID0+IHtcblx0XHRjb25zdCBkZWZlcnJlZCA9ICQuRGVmZXJyZWQoKTtcblx0XHQvLyBDdXJyZW50bHkgKEF1ZyAyMDIxKSwgUGFyc29pZCBBUEkgZG9lcyBub3QgaGF2ZSBmdWxsIExDIGZ1bmN0aW9uYWxpdHksXG5cdFx0Ly8gaGVuY2UgdXNlIHBhcnNlIEFQSSBpbnN0ZWFkLlxuXHRcdHRhcmdldFxuXHRcdFx0LmdldENvbnRlbnRBcGkoKVxuXHRcdFx0LnBvc3Qoe1xuXHRcdFx0XHRhY3Rpb246ICdwYXJzZScsXG5cdFx0XHRcdGRpc2FibGVlZGl0c2VjdGlvbjogdHJ1ZSxcblx0XHRcdFx0ZXJyb3Jmb3JtYXQ6ICdodG1sJyxcblx0XHRcdFx0ZXJyb3JsYW5nOiB3Z1VzZXJMYW5ndWFnZSxcblx0XHRcdFx0ZXJyb3JzdXNlbG9jYWw6IHRydWUsXG5cdFx0XHRcdGZvcm1hdHZlcnNpb246IDIsXG5cdFx0XHRcdHByb3A6ICd0ZXh0fGluZGljYXRvcnN8ZGlzcGxheXRpdGxlfGNhdGVnb3JpZXNodG1sfHBhcnNld2FybmluZ3NodG1sJyxcblx0XHRcdFx0cHN0OiB0cnVlLFxuXHRcdFx0XHRwcmV2aWV3OiB0cnVlLFxuXHRcdFx0XHR0aXRsZTogdGFyZ2V0LmdldFBhZ2VOYW1lKCksXG5cdFx0XHRcdHRleHQ6IHRhcmdldC5nZXREb2NUb1NhdmUoKSxcblx0XHRcdFx0dXNlbGFuZzogd2dVc2VyTGFuZ3VhZ2UsXG5cdFx0XHRcdHZhcmlhbnQsXG5cdFx0XHR9KVxuXHRcdFx0LnRoZW4oXG5cdFx0XHRcdChyZXNwb25zZSkgPT4ge1xuXHRcdFx0XHRcdHZvaWQgZGVmZXJyZWQucmVzb2x2ZShcblx0XHRcdFx0XHRcdGNvbnN0cnVjdERvY3VtZW50KFxuXHRcdFx0XHRcdFx0XHRyZXNwb25zZS5wYXJzZS5kaXNwbGF5dGl0bGUsXG5cdFx0XHRcdFx0XHRcdHJlc3BvbnNlLnBhcnNlLnRleHQsXG5cdFx0XHRcdFx0XHRcdHJlc3BvbnNlLnBhcnNlLmNhdGVnb3JpZXNodG1sXG5cdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fSxcblx0XHRcdFx0KGVycm9yLCBkZXRhaWwpID0+IHtcblx0XHRcdFx0XHR2b2lkIGRlZmVycmVkLnJlamVjdChkZXRhaWwpO1xuXHRcdFx0XHR9XG5cdFx0XHQpO1xuXHRcdHJldHVybiBkZWZlcnJlZDtcblx0fTtcblxuXHRjb25zdCBjaGFuZ2VWYXJpYW50ID0gZnVuY3Rpb24gY2hhbmdlVmFyaWFudCh2YWwpIHtcblx0XHRkaWFsb2cucHJldmlld1BhbmVsLiRlbGVtZW50WzBdLmZvY3VzKCk7XG5cdFx0dmFyaWFudCA9IHZhbDtcblxuXHRcdGNvbnN0IHRhcmdldFBhbmVsID0gc3RhY2tMYXlvdXQuZmluZEl0ZW1Gcm9tRGF0YSh2YXJpYW50KTtcblx0XHRpZiAodGFyZ2V0UGFuZWwuJGVsZW1lbnQuY2hpbGRyZW4oKS5sZW5ndGgpIHtcblx0XHRcdHN0YWNrTGF5b3V0LnNldEl0ZW0odGFyZ2V0UGFuZWwpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzdGFja0xheW91dC5wdXNoUGVuZGluZygpO1xuXHRcdFx0ZHJvcGRvd24uc2V0RGlzYWJsZWQodHJ1ZSk7XG5cblx0XHRcdHZvaWQgZmV0Y2hQcmV2aWV3KClcblx0XHRcdFx0LnRoZW4oXG5cdFx0XHRcdFx0KCRwcmV2aWV3Q29udGFpbmVyKSA9PiB7XG5cdFx0XHRcdFx0XHR0YXJnZXRQYW5lbC4kZWxlbWVudC5hcHBlbmQoJHByZXZpZXdDb250YWluZXIpO1xuXHRcdFx0XHRcdFx0c3RhY2tMYXlvdXQuc2V0SXRlbSh0YXJnZXRQYW5lbCk7XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHQoZXJyb3IpID0+IHtcblx0XHRcdFx0XHRcdHdpbmRvd01hbmFnZXJcblx0XHRcdFx0XHRcdFx0Lm9wZW5XaW5kb3coZXJyb3JEaWFsb2csIHtcblx0XHRcdFx0XHRcdFx0XHR0aXRsZTogT08udWkubXNnKCdvb3VpLWRpYWxvZy1wcm9jZXNzLWVycm9yJyksXG5cdFx0XHRcdFx0XHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG5cdFx0XHRcdFx0XHRcdFx0bWVzc2FnZTogdmUuaW5pdC50YXJnZXQuZ2V0Q29udGVudEFwaSgpLmdldEVycm9yTWVzc2FnZShlcnJvciksXG5cdFx0XHRcdFx0XHRcdFx0YWN0aW9uczogW1xuXHRcdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRhY3Rpb246ICdyZWplY3QnLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRsYWJlbDogT08udWkuZGVmZXJNc2coJ29vdWktZGlhbG9nLW1lc3NhZ2UtcmVqZWN0JyksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGZsYWdzOiAnc2FmZScsXG5cdFx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRhY3Rpb246ICdyZXRyeScsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsOiBPTy51aS5kZWZlck1zZygnb291aS1kaWFsb2ctcHJvY2Vzcy1yZXRyeScpLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRmbGFnczogWydwcmltYXJ5JywgJ3Byb2dyZXNzaXZlJ10sXG5cdFx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRcdF0sXG5cdFx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XHRcdC5jbG9zZWQudGhlbigoZGF0YSkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdGlmIChkYXRhICYmIGRhdGEuYWN0aW9uID09PSAncmV0cnknKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHQvLyBEbyBub3QgdXNlIHNldFZhbHVlKCkgc2luY2UgaXQgd2lsbCBub3QgdHJpZ2dlciBldmVudFxuXHRcdFx0XHRcdFx0XHRcdFx0Y2hhbmdlVmFyaWFudCh2YXJpYW50KTtcblx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdFx0Ly8gXCJ2YXJpYW50XCIgd2lsbCBiZSBzZXQgYnkgZXZlbnQgaGFuZGxlclxuXHRcdFx0XHRcdFx0XHRcdFx0ZHJvcGRvd24uc2V0VmFsdWUoc3RhY2tMYXlvdXQuZ2V0Q3VycmVudEl0ZW0oKS5nZXREYXRhKCkpO1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHQpXG5cdFx0XHRcdC5hbHdheXMoKCkgPT4ge1xuXHRcdFx0XHRcdHN0YWNrTGF5b3V0LnBvcFBlbmRpbmcoKTtcblx0XHRcdFx0XHRkcm9wZG93bi5zZXREaXNhYmxlZChmYWxzZSk7XG5cdFx0XHRcdH0pO1xuXHRcdH1cblx0fTtcblxuXHRjb25zdCBwcmV2aWV3V2l0aFZhcmlhbnQgPSAoKSA9PiB7XG5cdFx0Y29uc3QgY3VycmVudFBhbmVsID0gc3RhY2tMYXlvdXQuZ2V0Q3VycmVudEl0ZW0oKTtcblxuXHRcdGlmIChjdXJyZW50UGFuZWwuJGVsZW1lbnQuY2hpbGRyZW4oKS5sZW5ndGgpIHtcblx0XHRcdGRpYWxvZy5zd2FwUGFuZWwoJ3ByZXZpZXcnKTtcblx0XHRcdGRpYWxvZy5wcmV2aWV3UGFuZWwuJGVsZW1lbnQucHJlcGVuZChkcm9wZG93bi4kZWxlbWVudCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRhcmdldC5lbWl0KCdzYXZlUHJldmlldycpO1xuXHRcdFx0ZGlhbG9nLnB1c2hQZW5kaW5nKCk7XG5cblx0XHRcdHZvaWQgZmV0Y2hQcmV2aWV3KClcblx0XHRcdFx0LnRoZW4oXG5cdFx0XHRcdFx0KCRwcmV2aWV3Q29udGVudCkgPT4ge1xuXHRcdFx0XHRcdFx0dGFyZ2V0XG5cdFx0XHRcdFx0XHRcdC5nZXRTdXJmYWNlKClcblx0XHRcdFx0XHRcdFx0LmdldE1vZGVsKClcblx0XHRcdFx0XHRcdFx0LmdldERvY3VtZW50KClcblx0XHRcdFx0XHRcdFx0Lm9uY2UoJ3RyYW5zYWN0JywgKCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdGZvciAoY29uc3QgaXRlbSBvZiBwYW5lbExheW91dHMpIHtcblx0XHRcdFx0XHRcdFx0XHRcdGl0ZW0uJGVsZW1lbnQuZW1wdHkoKTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0ZGlhbG9nLnN3YXBQYW5lbCgncHJldmlldycpO1xuXHRcdFx0XHRcdFx0Y3VycmVudFBhbmVsLiRlbGVtZW50LmFwcGVuZCgkcHJldmlld0NvbnRlbnQpO1xuXHRcdFx0XHRcdFx0c3RhY2tMYXlvdXQuc2V0SXRlbShzdGFja0xheW91dC5maW5kSXRlbUZyb21EYXRhKHZhcmlhbnQpKTtcblx0XHRcdFx0XHRcdGNvbnN0ICRib2R5ID0gJCgnYm9keScpO1xuXHRcdFx0XHRcdFx0aWYgKCEkYm9keS5maW5kKGAuJHtPUFRJT05TLmNsYXNzTmFtZX1gKS5sZW5ndGgpIHtcblx0XHRcdFx0XHRcdFx0ZGlhbG9nLnByZXZpZXdQYW5lbC4kZWxlbWVudC5wcmVwZW5kKGRyb3Bkb3duLiRlbGVtZW50KTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdChlcnJvcikgPT4ge1xuXHRcdFx0XHRcdFx0ZGlhbG9nLnNob3dFcnJvcnMoXG5cdFx0XHRcdFx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuXHRcdFx0XHRcdFx0XHRuZXcgT08udWkuRXJyb3IodmUuaW5pdC50YXJnZXQuZ2V0Q29udGVudEFwaSgpLmdldEVycm9yTWVzc2FnZShlcnJvciksIHtcblx0XHRcdFx0XHRcdFx0XHRyZWNvdmVyYWJsZTogdHJ1ZSxcblx0XHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHQpXG5cdFx0XHRcdC5hbHdheXMoKCkgPT4ge1xuXHRcdFx0XHRcdGRpYWxvZy5wb3BQZW5kaW5nKCk7XG5cdFx0XHRcdH0pO1xuXHRcdH1cblx0fTtcblxuXHRjb25zdCBpbml0ID0gKCkgPT4ge1xuXHRcdHZhcmlhbnQgPSB3Z1VzZXJWYXJpYW50O1xuXHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuXHRcdCh7dGFyZ2V0fSA9IHZlLmluaXQpO1xuXHRcdGRpYWxvZyA9IHRhcmdldC5zYXZlRGlhbG9nO1xuXHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtZWRpYXdpa2kvY2xhc3MtZG9jXG5cdFx0ZHJvcGRvd24gPSBuZXcgT08udWkuRHJvcGRvd25JbnB1dFdpZGdldCh7XG5cdFx0XHQkb3ZlcmxheTogZGlhbG9nLiRvdmVybGF5LFxuXHRcdFx0Y2xhc3NlczogW09QVElPTlMuY2xhc3NOYW1lXSxcblx0XHRcdG9wdGlvbnM6IFtcblx0XHRcdFx0e1xuXHRcdFx0XHRcdG9wdGdyb3VwOiBtdy5tc2coJ3B3di0yMDE3LWNhcHRpb24nKSxcblx0XHRcdFx0fSxcblx0XHRcdFx0Li4uREFUQS5tYXAoKGl0ZW0pID0+IHtcblx0XHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdFx0ZGF0YTogaXRlbS52YXIsXG5cdFx0XHRcdFx0XHRsYWJlbDogbXcubXNnKGl0ZW0ubXNnKSAvKiBlc2xpbnQtZGlzYWJsZS1saW5lIG1lZGlhd2lraS9tc2ctZG9jICovLFxuXHRcdFx0XHRcdH07XG5cdFx0XHRcdH0pLFxuXHRcdFx0XSxcblx0XHRcdHZhbHVlOiB2YXJpYW50LFxuXHRcdH0pO1xuXHRcdGRyb3Bkb3duLm9uKCdjaGFuZ2UnLCBjaGFuZ2VWYXJpYW50KTtcblx0XHRwYW5lbExheW91dHMgPSBEQVRBLm1hcCgoaXRlbSkgPT4ge1xuXHRcdFx0cmV0dXJuIG5ldyBPTy51aS5QYW5lbExheW91dCh7XG5cdFx0XHRcdGV4cGFuZGVkOiBmYWxzZSxcblx0XHRcdFx0ZGF0YTogaXRlbS52YXIsXG5cdFx0XHR9KTtcblx0XHR9KTtcblx0XHRzdGFja0xheW91dCA9IG5ldyBQZW5kaW5nU3RhY2tMYXlvdXQoe1xuXHRcdFx0ZXhwYW5kZWQ6IGZhbHNlLFxuXHRcdFx0aXRlbXM6IHBhbmVsTGF5b3V0cyxcblx0XHR9KTtcblx0XHRzdGFja0xheW91dC5zZXRJdGVtKHN0YWNrTGF5b3V0LmZpbmRJdGVtRnJvbURhdGEodmFyaWFudCkpO1xuXHRcdGRpYWxvZy5wcmV2aWV3UGFuZWwuJGVsZW1lbnQuYXBwZW5kKHN0YWNrTGF5b3V0LiRlbGVtZW50KTtcblx0XHRlcnJvckRpYWxvZyA9IG5ldyBPTy51aS5NZXNzYWdlRGlhbG9nKCk7XG5cdFx0d2luZG93TWFuYWdlciA9IG5ldyBPTy51aS5XaW5kb3dNYW5hZ2VyKCk7XG5cdFx0d2luZG93TWFuYWdlci5hZGRXaW5kb3dzKFtlcnJvckRpYWxvZ10pO1xuXHRcdGNvbnN0ICRib2R5ID0gJCgnYm9keScpO1xuXHRcdCRib2R5LmFwcGVuZCh3aW5kb3dNYW5hZ2VyLiRlbGVtZW50KTtcblxuXHRcdGNvbnN0IGhhbmRsZXJUb1JlbW92ZSA9ICdvblNhdmVEaWFsb2dQcmV2aWV3Jztcblx0XHRkaWFsb2cub2ZmKCdwcmV2aWV3JywgaGFuZGxlclRvUmVtb3ZlLCB0YXJnZXQpLm9uKCdwcmV2aWV3JywgcHJldmlld1dpdGhWYXJpYW50KTtcblxuXHRcdC8vIFN3aXRjaGluZyBiZXR3ZWVuIFZFIGFuZCBOV0UsIHJlcXVpcmVzIHRvIGJlIHJlaW5pdGlhbGl6ZWRcblx0XHRtdy5ob29rKCd2ZS5hY3RpdmF0aW9uQ29tcGxldGUnKS5hZGQoKCkgPT4ge1xuXHRcdFx0aWYgKG13LmNvbmZpZy5nZXQoT1BUSU9OUy5jb25maWdLZXkpKSB7XG5cdFx0XHRcdG13LmNvbmZpZy5zZXQoT1BUSU9OUy5jb25maWdLZXksIGZhbHNlKTtcblx0XHRcdH1cblx0XHR9KTtcblx0fTtcblxuXHRpZiAoIW13LmNvbmZpZy5nZXQoT1BUSU9OUy5jb25maWdLZXkpKSB7XG5cdFx0aW5pdCgpO1xuXHRcdG13LmNvbmZpZy5zZXQoT1BUSU9OUy5jb25maWdLZXksIHRydWUpO1xuXHR9XG59O1xuXG5leHBvcnQge3Byb2Nlc3NWaXN1YWxFZGl0b3J9O1xuIiwgImltcG9ydCB7cHJvY2Vzc1Zpc3VhbEVkaXRvcn0gZnJvbSAnLi9tb2R1bGVzL3Byb2Nlc3NWaXN1YWxFZGl0b3InO1xuXG4oZnVuY3Rpb24gcHJldmlld1dpdGhWYXJpYW50czIwMTcoKTogdm9pZCB7XG5cdG13Lmhvb2soJ3ZlLnNhdmVEaWFsb2cuc3RhdGVDaGFuZ2VkJykuYWRkKCgpOiB2b2lkID0+IHtcblx0XHRwcm9jZXNzVmlzdWFsRWRpdG9yKCk7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LEdBQUc7QUFDdENtRyxTQUFLO0FBQ0w1RixPQUFHSyxPQUFPSCxJQUFZVCxXQUFXLElBQUk7RUFDdEM7QUFDRDs7Q0N2UEMsU0FBUzBKLDBCQUFnQztBQUN6Q25KLEtBQUc4QyxLQUFLLDRCQUE0QixFQUFFb0csSUFBSSxNQUFZO0FBQ3JEL0gsd0JBQW9CO0VBQ3JCLENBQUM7QUFDRixHQUFHOyIsCiAgIm5hbWVzIjogWyJjb25maWdLZXkiLCAiY2xhc3NOYW1lIiwgIkRBVEEiLCAidmFyIiwgImh0bWxMYW5nIiwgIm1zZyIsICJQV1YyMDE3bWVzc2FnZXMiLCAibXciLCAibWVzc2FnZXMiLCAic2V0IiwgIndpbmRvdyIsICJ3Z1VMUyIsICJjb25maWciLCAiUGVuZGluZ1N0YWNrTGF5b3V0IiwgIlBlbmRpbmdTdGFja0xheW91dDIiLCAic3VwZXIiLCAiY2FsbCIsICJPTyIsICJ1aSIsICJtaXhpbiIsICJQZW5kaW5nRWxlbWVudCIsICIkZWxlbWVudCIsICJhZGRDbGFzcyIsICJpbmhlcml0Q2xhc3MiLCAiU3RhY2tMYXlvdXQiLCAibWl4aW5DbGFzcyIsICJwcm9jZXNzVmlzdWFsRWRpdG9yIiwgInNraW4iLCAid2dVc2VyTGFuZ3VhZ2UiLCAid2dVc2VyVmFyaWFudCIsICJnZXQiLCAidmFyaWFudCIsICJ0YXJnZXQiLCAiZGlhbG9nIiwgImRyb3Bkb3duIiwgInN0YWNrTGF5b3V0IiwgInBhbmVsTGF5b3V0cyIsICJ3aW5kb3dNYW5hZ2VyIiwgImVycm9yRGlhbG9nIiwgImNvbnN0cnVjdERvY3VtZW50IiwgInRpdGxlIiwgIndpa2l0ZXh0IiwgImNhdGVnb3JpZXMiLCAiJHJlc3VsdCIsICIkIiwgImFwcGVuZCIsICJodG1sIiwgImNvbmNhdCIsICJwYWdlTGFuZ3VhZ2VEaXIiLCAiYXR0ciIsICJmaW5kIiwgIml0ZW0iLCAicGFyc2VIVE1MIiwgImhvb2siLCAiZmlyZSIsICJ2ZSIsICJ0YXJnZXRMaW5rc1RvTmV3V2luZG93IiwgImZldGNoUHJldmlldyIsICJkZWZlcnJlZCIsICJEZWZlcnJlZCIsICJnZXRDb250ZW50QXBpIiwgInBvc3QiLCAiYWN0aW9uIiwgImRpc2FibGVlZGl0c2VjdGlvbiIsICJlcnJvcmZvcm1hdCIsICJlcnJvcmxhbmciLCAiZXJyb3JzdXNlbG9jYWwiLCAiZm9ybWF0dmVyc2lvbiIsICJwcm9wIiwgInBzdCIsICJwcmV2aWV3IiwgImdldFBhZ2VOYW1lIiwgInRleHQiLCAiZ2V0RG9jVG9TYXZlIiwgInVzZWxhbmciLCAidGhlbiIsICJyZXNwb25zZSIsICJyZXNvbHZlIiwgInBhcnNlIiwgImRpc3BsYXl0aXRsZSIsICJjYXRlZ29yaWVzaHRtbCIsICJlcnJvciIsICJkZXRhaWwiLCAicmVqZWN0IiwgImNoYW5nZVZhcmlhbnQiLCAiY2hhbmdlVmFyaWFudDIiLCAidmFsIiwgInByZXZpZXdQYW5lbCIsICJmb2N1cyIsICJ0YXJnZXRQYW5lbCIsICJmaW5kSXRlbUZyb21EYXRhIiwgImNoaWxkcmVuIiwgImxlbmd0aCIsICJzZXRJdGVtIiwgInB1c2hQZW5kaW5nIiwgInNldERpc2FibGVkIiwgIiRwcmV2aWV3Q29udGFpbmVyIiwgIm9wZW5XaW5kb3ciLCAibWVzc2FnZSIsICJpbml0IiwgImdldEVycm9yTWVzc2FnZSIsICJhY3Rpb25zIiwgImxhYmVsIiwgImRlZmVyTXNnIiwgImZsYWdzIiwgImNsb3NlZCIsICJkYXRhIiwgInNldFZhbHVlIiwgImdldEN1cnJlbnRJdGVtIiwgImdldERhdGEiLCAiYWx3YXlzIiwgInBvcFBlbmRpbmciLCAicHJldmlld1dpdGhWYXJpYW50IiwgImN1cnJlbnRQYW5lbCIsICJzd2FwUGFuZWwiLCAicHJlcGVuZCIsICJlbWl0IiwgIiRwcmV2aWV3Q29udGVudCIsICJnZXRTdXJmYWNlIiwgImdldE1vZGVsIiwgImdldERvY3VtZW50IiwgIm9uY2UiLCAiX2l0ZXJhdG9yIiwgIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwgIl9zdGVwIiwgInMiLCAibiIsICJkb25lIiwgInZhbHVlIiwgImVtcHR5IiwgImVyciIsICJlIiwgImYiLCAiJGJvZHkiLCAic2hvd0Vycm9ycyIsICJFcnJvciIsICJyZWNvdmVyYWJsZSIsICJzYXZlRGlhbG9nIiwgIkRyb3Bkb3duSW5wdXRXaWRnZXQiLCAiJG92ZXJsYXkiLCAiY2xhc3NlcyIsICJvcHRpb25zIiwgIm9wdGdyb3VwIiwgIm1hcCIsICJvbiIsICJQYW5lbExheW91dCIsICJleHBhbmRlZCIsICJpdGVtcyIsICJNZXNzYWdlRGlhbG9nIiwgIldpbmRvd01hbmFnZXIiLCAiYWRkV2luZG93cyIsICJoYW5kbGVyVG9SZW1vdmUiLCAib2ZmIiwgImFkZCIsICJwcmV2aWV3V2l0aFZhcmlhbnRzMjAxNyJdCn0K

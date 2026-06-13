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
//! src/PreviewWithVariant2017/PreviewWithVariant2017.ts
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
var import_ext_gadget = require("ext.gadget.Util");
//! src/PreviewWithVariant2017/options.json
var className = "pwv-2017-variant";
var configKey = "gadget-PreviewWithVariant2017__Initialized";
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
PWV2017messages();
var PendingStackLayout = function PendingStackLayout2(config) {
  PendingStackLayout2.super.call(this, config);
  OO.ui.mixin.PendingElement.call(this);
  this.$element.addClass("pwv-2017-pendingStackLayout");
};
OO.inheritClass(PendingStackLayout, OO.ui.StackLayout);
OO.mixinClass(PendingStackLayout, OO.ui.mixin.PendingElement);
var processVisualEditor = ($body) => {
  const {
    skin,
    wgUserLanguage,
    wgUserVariant
  } = mw.config.get();
  let variant, target, saveDialog, dropdown, stackLayout, panelLayouts, windowManager, errorDialog;
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
      formatversion: "2",
      prop: ["text", "indicators", "displaytitle", "categorieshtml", "parsewarningshtml"],
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
    saveDialog.previewPanel.$element[0].focus();
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
          message: window.ve.init.target.getContentApi().getErrorMessage(error),
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
      saveDialog.swapPanel("preview");
      saveDialog.previewPanel.$element.prepend(dropdown.$element);
    } else {
      target.emit("savePreview");
      saveDialog.pushPending();
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
        saveDialog.swapPanel("preview");
        currentPanel.$element.append($previewContent);
        stackLayout.setItem(stackLayout.findItemFromData(variant));
        if (!saveDialog.$element.find(".".concat(className)).length) {
          saveDialog.previewPanel.$element.prepend(dropdown.$element);
        }
      }, (error) => {
        saveDialog.showErrors(new OO.ui.Error(window.ve.init.target.getContentApi().getErrorMessage(error), {
          recoverable: true
        }));
      }).always(() => {
        saveDialog.popPending();
      });
    }
  };
  const init = () => {
    variant = wgUserVariant;
    ({
      target
    } = window.ve.init);
    ({
      saveDialog
    } = target);
    dropdown = new OO.ui.DropdownInputWidget({
      $overlay: saveDialog.$overlay,
      classes: [className],
      options: [{
        optgroup: mw.message("pwv-2017-caption").parse()
      }, ...DATA.map((item) => {
        return {
          data: item.var,
          label: mw.message(item.msg).parse()
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
    saveDialog.previewPanel.$element.append(stackLayout.$element);
    errorDialog = new OO.ui.MessageDialog();
    windowManager = new OO.ui.WindowManager();
    windowManager.addWindows([errorDialog]);
    $body.append(windowManager.$element);
    const handlerToRemove = "onSaveDialogPreview";
    saveDialog.off("preview", handlerToRemove, target).on("preview", previewWithVariant);
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
void (0, import_ext_gadget.getBody)().then(function previewWithVariants2017($body) {
  mw.hook("ve.saveDialog.stateChanged").add(() => {
    processVisualEditor($body);
  });
});

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1ByZXZpZXdXaXRoVmFyaWFudDIwMTcvUHJldmlld1dpdGhWYXJpYW50MjAxNy50cyIsICJzcmMvUHJldmlld1dpdGhWYXJpYW50MjAxNy9vcHRpb25zLmpzb24iLCAic3JjL1ByZXZpZXdXaXRoVmFyaWFudDIwMTcvbW9kdWxlcy9jb25zdGFudC50cyIsICJzcmMvUHJldmlld1dpdGhWYXJpYW50MjAxNy9tb2R1bGVzL21lc3NhZ2VzLnRzIiwgInNyYy9QcmV2aWV3V2l0aFZhcmlhbnQyMDE3L21vZHVsZXMvcHJvY2Vzc1Zpc3VhbEVkaXRvci5qcyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHtnZXRCb2R5fSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuaW1wb3J0IHtwcm9jZXNzVmlzdWFsRWRpdG9yfSBmcm9tICcuL21vZHVsZXMvcHJvY2Vzc1Zpc3VhbEVkaXRvci5qcyc7XG5cbnZvaWQgZ2V0Qm9keSgpLnRoZW4oZnVuY3Rpb24gcHJldmlld1dpdGhWYXJpYW50czIwMTcoJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KTogdm9pZCB7XG5cdG13Lmhvb2soJ3ZlLnNhdmVEaWFsb2cuc3RhdGVDaGFuZ2VkJykuYWRkKCgpOiB2b2lkID0+IHtcblx0XHRwcm9jZXNzVmlzdWFsRWRpdG9yKCRib2R5KTtcblx0fSk7XG59KTtcbiIsICJ7XG5cdFwiY2xhc3NOYW1lXCI6IFwicHd2LTIwMTctdmFyaWFudFwiLFxuXHRcImNvbmZpZ0tleVwiOiBcImdhZGdldC1QcmV2aWV3V2l0aFZhcmlhbnQyMDE3X19Jbml0aWFsaXplZFwiXG59XG4iLCAiY29uc3QgREFUQSA9IFtcblx0e3ZhcjogJ3poJywgaHRtbExhbmc6ICd6aCcsIG1zZzogJ3B3di0yMDE3LXpoJ30sXG5cdHt2YXI6ICd6aC1oYW5zJywgaHRtbExhbmc6ICd6aC1IYW5zJywgbXNnOiAncHd2LTIwMTctemgtaGFucyd9LFxuXHR7dmFyOiAnemgtaGFudCcsIGh0bWxMYW5nOiAnemgtSGFudCcsIG1zZzogJ3B3di0yMDE3LXpoLWhhbnQnfSxcblx0e3ZhcjogJ3poLWNuJywgaHRtbExhbmc6ICd6aC1IYW5zLUNOJywgbXNnOiAncHd2LTIwMTctemgtY24nfSxcblx0e3ZhcjogJ3poLWhrJywgaHRtbExhbmc6ICd6aC1IYW50LUhLJywgbXNnOiAncHd2LTIwMTctemgtaGsnfSxcblx0e3ZhcjogJ3poLW1vJywgaHRtbExhbmc6ICd6aC1IYW50LU1PJywgbXNnOiAncHd2LTIwMTctemgtbW8nfSxcblx0e3ZhcjogJ3poLW15JywgaHRtbExhbmc6ICd6aC1IYW5zLU1ZJywgbXNnOiAncHd2LTIwMTctemgtbXknfSxcblx0e3ZhcjogJ3poLXNnJywgaHRtbExhbmc6ICd6aC1IYW5zLVNHJywgbXNnOiAncHd2LTIwMTctemgtc2cnfSxcblx0e3ZhcjogJ3poLXR3JywgaHRtbExhbmc6ICd6aC1IYW50LVRXJywgbXNnOiAncHd2LTIwMTctemgtdHcnfSxcbl07XG5cbmV4cG9ydCB7REFUQX07XG4iLCAiY29uc3QgUFdWMjAxN21lc3NhZ2VzID0gKCkgPT4ge1xuXHRtdy5tZXNzYWdlcy5zZXQoe1xuXHRcdCdwd3YtMjAxNy1jYXB0aW9uJzogd2luZG93LndnVUxTKCfpgInmi6nor63oqIDlj5jkvZMnLCAn6YG45pOH6Kqe6KiA6K6K6auUJyksXG5cdFx0J3B3di0yMDE3LXpoJzogd2luZG93LndnVUxTKCfkuI3ovazmjaInLCAn5LiN6L2J5o+bJyksXG5cdFx0J3B3di0yMDE3LXpoLWhhbnMnOiAn566A5L2TJyxcblx0XHQncHd2LTIwMTctemgtaGFudCc6ICfnuYHpq5QnLFxuXHRcdCdwd3YtMjAxNy16aC1jbic6ICfkuK3lm73lpKfpmYbnroDkvZMnLFxuXHRcdCdwd3YtMjAxNy16aC1oayc6ICfkuK3lnIvpppnmuK/nuYHpq5QnLFxuXHRcdCdwd3YtMjAxNy16aC1tbyc6ICfkuK3lnIvmvrPploDnuYHpq5QnLFxuXHRcdCdwd3YtMjAxNy16aC1teSc6ICfpqazmnaXopb/kuprnroDkvZMnLFxuXHRcdCdwd3YtMjAxNy16aC1zZyc6ICfmlrDliqDlnaHnroDkvZMnLFxuXHRcdCdwd3YtMjAxNy16aC10dyc6ICfkuK3lnIvoh7rngaPnuYHpq5QnLFxuXHR9KTtcbn07XG5cbmV4cG9ydCB7UFdWMjAxN21lc3NhZ2VzfTtcbiIsICIvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10cy1jb21tZW50XG4vLyBAdHMtbm9jaGVja1xuaW1wb3J0ICcuL3Byb2Nlc3NWaXN1YWxFZGl0b3IubGVzcyc7XG5pbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge0RBVEF9IGZyb20gJy4vY29uc3RhbnQnO1xuaW1wb3J0IHtQV1YyMDE3bWVzc2FnZXN9IGZyb20gJy4vbWVzc2FnZXMnO1xuXG5QV1YyMDE3bWVzc2FnZXMoKTtcblxuY29uc3QgUGVuZGluZ1N0YWNrTGF5b3V0ID0gZnVuY3Rpb24gUGVuZGluZ1N0YWNrTGF5b3V0KGNvbmZpZykge1xuXHRQZW5kaW5nU3RhY2tMYXlvdXQuc3VwZXIuY2FsbCh0aGlzLCBjb25maWcpO1xuXHRPTy51aS5taXhpbi5QZW5kaW5nRWxlbWVudC5jYWxsKHRoaXMpO1xuXHR0aGlzLiRlbGVtZW50LmFkZENsYXNzKCdwd3YtMjAxNy1wZW5kaW5nU3RhY2tMYXlvdXQnKTtcbn07XG5cbk9PLmluaGVyaXRDbGFzcyhQZW5kaW5nU3RhY2tMYXlvdXQsIE9PLnVpLlN0YWNrTGF5b3V0KTtcbk9PLm1peGluQ2xhc3MoUGVuZGluZ1N0YWNrTGF5b3V0LCBPTy51aS5taXhpbi5QZW5kaW5nRWxlbWVudCk7XG5cbmNvbnN0IHByb2Nlc3NWaXN1YWxFZGl0b3IgPSAoJGJvZHkpID0+IHtcblx0Y29uc3Qge3NraW4sIHdnVXNlckxhbmd1YWdlLCB3Z1VzZXJWYXJpYW50fSA9IG13LmNvbmZpZy5nZXQoKTtcblx0bGV0IHZhcmlhbnQsIHRhcmdldCwgc2F2ZURpYWxvZywgZHJvcGRvd24sIHN0YWNrTGF5b3V0LCBwYW5lbExheW91dHMsIHdpbmRvd01hbmFnZXIsIGVycm9yRGlhbG9nO1xuXG5cdGNvbnN0IGNvbnN0cnVjdERvY3VtZW50ID0gKHRpdGxlLCB3aWtpdGV4dCwgY2F0ZWdvcmllcykgPT4ge1xuXHRcdGNvbnN0ICRyZXN1bHQgPSAkKCc8ZGl2PicpLmFkZENsYXNzKCdtdy1ib2R5IG13LWJvZHktY29udGVudCcpO1xuXG5cdFx0aWYgKHNraW4gPT09ICd2ZWN0b3InKSB7XG5cdFx0XHQvLyBBZGRpdGlvbmFsIGNsYXNzZXMgcmVxdWlyZWQgaW4gdmVjdG9yIHRvIGdldCBjb3JyZWN0IGFwcGVhcmFuY2Vcblx0XHRcdCRyZXN1bHQuYWRkQ2xhc3MoJ3ZlY3Rvci1ib2R5Jyk7XG5cdFx0fVxuXG5cdFx0JHJlc3VsdC5hcHBlbmQoXG5cdFx0XHQkKCc8aDE+JykuYWRkQ2xhc3MoJ2ZpcnN0SGVhZGluZycpLmh0bWwodGl0bGUpLFxuXHRcdFx0Ly8gQ2xhc3NlcyB1c2VkIGhlcmU6XG5cdFx0XHQvLyAqIG13LWNvbnRlbnQtbHRyXG5cdFx0XHQvLyAqIG13LWNvbnRlbnQtcnRsXG5cdFx0XHQkKCc8ZGl2PicpXG5cdFx0XHRcdC5hZGRDbGFzcyhgbXctY29udGVudC0ke213LmNvbmZpZy5nZXQoJ3dnVmlzdWFsRWRpdG9yJykucGFnZUxhbmd1YWdlRGlyfWApXG5cdFx0XHRcdC5hdHRyKFxuXHRcdFx0XHRcdCdsYW5nJyxcblx0XHRcdFx0XHREQVRBLmZpbmQoKGl0ZW0pID0+IHtcblx0XHRcdFx0XHRcdHJldHVybiBpdGVtLnZhciA9PT0gdmFyaWFudDtcblx0XHRcdFx0XHR9KS5odG1sTGFuZ1xuXHRcdFx0XHQpXG5cdFx0XHRcdC5odG1sKHdpa2l0ZXh0KSxcblx0XHRcdCQucGFyc2VIVE1MKGNhdGVnb3JpZXMpXG5cdFx0KTtcblxuXHRcdC8vIE1ha2Ugb3RoZXIgdGhpbmdzIGxpa2UgUmVmZXJlbmNlIFRvb2x0aXAgZnVuY3Rpb25cblx0XHRtdy5ob29rKCd3aWtpcGFnZS5jb250ZW50JykuZmlyZSgkcmVzdWx0KTtcblx0XHR2ZS50YXJnZXRMaW5rc1RvTmV3V2luZG93KCRyZXN1bHRbMF0pO1xuXHRcdHJldHVybiAkcmVzdWx0O1xuXHR9O1xuXG5cdGNvbnN0IGZldGNoUHJldmlldyA9ICgpID0+IHtcblx0XHRjb25zdCBkZWZlcnJlZCA9ICQuRGVmZXJyZWQoKTtcblx0XHQvLyBDdXJyZW50bHkgKEF1ZyAyMDIxKSwgUGFyc29pZCBBUEkgZG9lcyBub3QgaGF2ZSBmdWxsIExDIGZ1bmN0aW9uYWxpdHksXG5cdFx0Ly8gaGVuY2UgdXNlIHBhcnNlIEFQSSBpbnN0ZWFkLlxuXHRcdHRhcmdldFxuXHRcdFx0LmdldENvbnRlbnRBcGkoKVxuXHRcdFx0LnBvc3Qoe1xuXHRcdFx0XHRhY3Rpb246ICdwYXJzZScsXG5cdFx0XHRcdGRpc2FibGVlZGl0c2VjdGlvbjogdHJ1ZSxcblx0XHRcdFx0ZXJyb3Jmb3JtYXQ6ICdodG1sJyxcblx0XHRcdFx0ZXJyb3JsYW5nOiB3Z1VzZXJMYW5ndWFnZSxcblx0XHRcdFx0ZXJyb3JzdXNlbG9jYWw6IHRydWUsXG5cdFx0XHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRcdFx0cHJvcDogWyd0ZXh0JywgJ2luZGljYXRvcnMnLCAnZGlzcGxheXRpdGxlJywgJ2NhdGVnb3JpZXNodG1sJywgJ3BhcnNld2FybmluZ3NodG1sJ10sXG5cdFx0XHRcdHBzdDogdHJ1ZSxcblx0XHRcdFx0cHJldmlldzogdHJ1ZSxcblx0XHRcdFx0dGl0bGU6IHRhcmdldC5nZXRQYWdlTmFtZSgpLFxuXHRcdFx0XHR0ZXh0OiB0YXJnZXQuZ2V0RG9jVG9TYXZlKCksXG5cdFx0XHRcdHVzZWxhbmc6IHdnVXNlckxhbmd1YWdlLFxuXHRcdFx0XHR2YXJpYW50LFxuXHRcdFx0fSlcblx0XHRcdC50aGVuKFxuXHRcdFx0XHQocmVzcG9uc2UpID0+IHtcblx0XHRcdFx0XHR2b2lkIGRlZmVycmVkLnJlc29sdmUoXG5cdFx0XHRcdFx0XHRjb25zdHJ1Y3REb2N1bWVudChcblx0XHRcdFx0XHRcdFx0cmVzcG9uc2UucGFyc2UuZGlzcGxheXRpdGxlLFxuXHRcdFx0XHRcdFx0XHRyZXNwb25zZS5wYXJzZS50ZXh0LFxuXHRcdFx0XHRcdFx0XHRyZXNwb25zZS5wYXJzZS5jYXRlZ29yaWVzaHRtbFxuXHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdChlcnJvciwgZGV0YWlsKSA9PiB7XG5cdFx0XHRcdFx0dm9pZCBkZWZlcnJlZC5yZWplY3QoZGV0YWlsKTtcblx0XHRcdFx0fVxuXHRcdFx0KTtcblx0XHRyZXR1cm4gZGVmZXJyZWQ7XG5cdH07XG5cblx0Y29uc3QgY2hhbmdlVmFyaWFudCA9IGZ1bmN0aW9uIGNoYW5nZVZhcmlhbnQodmFsKSB7XG5cdFx0c2F2ZURpYWxvZy5wcmV2aWV3UGFuZWwuJGVsZW1lbnRbMF0uZm9jdXMoKTtcblx0XHR2YXJpYW50ID0gdmFsO1xuXG5cdFx0Y29uc3QgdGFyZ2V0UGFuZWwgPSBzdGFja0xheW91dC5maW5kSXRlbUZyb21EYXRhKHZhcmlhbnQpO1xuXHRcdGlmICh0YXJnZXRQYW5lbC4kZWxlbWVudC5jaGlsZHJlbigpLmxlbmd0aCkge1xuXHRcdFx0c3RhY2tMYXlvdXQuc2V0SXRlbSh0YXJnZXRQYW5lbCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHN0YWNrTGF5b3V0LnB1c2hQZW5kaW5nKCk7XG5cdFx0XHRkcm9wZG93bi5zZXREaXNhYmxlZCh0cnVlKTtcblxuXHRcdFx0dm9pZCBmZXRjaFByZXZpZXcoKVxuXHRcdFx0XHQudGhlbihcblx0XHRcdFx0XHQoJHByZXZpZXdDb250YWluZXIpID0+IHtcblx0XHRcdFx0XHRcdHRhcmdldFBhbmVsLiRlbGVtZW50LmFwcGVuZCgkcHJldmlld0NvbnRhaW5lcik7XG5cdFx0XHRcdFx0XHRzdGFja0xheW91dC5zZXRJdGVtKHRhcmdldFBhbmVsKTtcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdChlcnJvcikgPT4ge1xuXHRcdFx0XHRcdFx0d2luZG93TWFuYWdlclxuXHRcdFx0XHRcdFx0XHQub3BlbldpbmRvdyhlcnJvckRpYWxvZywge1xuXHRcdFx0XHRcdFx0XHRcdHRpdGxlOiBPTy51aS5tc2coJ29vdWktZGlhbG9nLXByb2Nlc3MtZXJyb3InKSxcblx0XHRcdFx0XHRcdFx0XHRtZXNzYWdlOiB3aW5kb3cudmUuaW5pdC50YXJnZXQuZ2V0Q29udGVudEFwaSgpLmdldEVycm9yTWVzc2FnZShlcnJvciksXG5cdFx0XHRcdFx0XHRcdFx0YWN0aW9uczogW1xuXHRcdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRhY3Rpb246ICdyZWplY3QnLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRsYWJlbDogT08udWkuZGVmZXJNc2coJ29vdWktZGlhbG9nLW1lc3NhZ2UtcmVqZWN0JyksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGZsYWdzOiAnc2FmZScsXG5cdFx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRhY3Rpb246ICdyZXRyeScsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsOiBPTy51aS5kZWZlck1zZygnb291aS1kaWFsb2ctcHJvY2Vzcy1yZXRyeScpLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRmbGFnczogWydwcmltYXJ5JywgJ3Byb2dyZXNzaXZlJ10sXG5cdFx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRcdF0sXG5cdFx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XHRcdC5jbG9zZWQudGhlbigoZGF0YSkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdGlmIChkYXRhICYmIGRhdGEuYWN0aW9uID09PSAncmV0cnknKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHQvLyBEbyBub3QgdXNlIHNldFZhbHVlKCkgc2luY2UgaXQgd2lsbCBub3QgdHJpZ2dlciBldmVudFxuXHRcdFx0XHRcdFx0XHRcdFx0Y2hhbmdlVmFyaWFudCh2YXJpYW50KTtcblx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdFx0Ly8gXCJ2YXJpYW50XCIgd2lsbCBiZSBzZXQgYnkgZXZlbnQgaGFuZGxlclxuXHRcdFx0XHRcdFx0XHRcdFx0ZHJvcGRvd24uc2V0VmFsdWUoc3RhY2tMYXlvdXQuZ2V0Q3VycmVudEl0ZW0oKS5nZXREYXRhKCkpO1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHQpXG5cdFx0XHRcdC5hbHdheXMoKCkgPT4ge1xuXHRcdFx0XHRcdHN0YWNrTGF5b3V0LnBvcFBlbmRpbmcoKTtcblx0XHRcdFx0XHRkcm9wZG93bi5zZXREaXNhYmxlZChmYWxzZSk7XG5cdFx0XHRcdH0pO1xuXHRcdH1cblx0fTtcblxuXHRjb25zdCBwcmV2aWV3V2l0aFZhcmlhbnQgPSAoKSA9PiB7XG5cdFx0Y29uc3QgY3VycmVudFBhbmVsID0gc3RhY2tMYXlvdXQuZ2V0Q3VycmVudEl0ZW0oKTtcblxuXHRcdGlmIChjdXJyZW50UGFuZWwuJGVsZW1lbnQuY2hpbGRyZW4oKS5sZW5ndGgpIHtcblx0XHRcdHNhdmVEaWFsb2cuc3dhcFBhbmVsKCdwcmV2aWV3Jyk7XG5cdFx0XHRzYXZlRGlhbG9nLnByZXZpZXdQYW5lbC4kZWxlbWVudC5wcmVwZW5kKGRyb3Bkb3duLiRlbGVtZW50KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGFyZ2V0LmVtaXQoJ3NhdmVQcmV2aWV3Jyk7XG5cdFx0XHRzYXZlRGlhbG9nLnB1c2hQZW5kaW5nKCk7XG5cblx0XHRcdHZvaWQgZmV0Y2hQcmV2aWV3KClcblx0XHRcdFx0LnRoZW4oXG5cdFx0XHRcdFx0KCRwcmV2aWV3Q29udGVudCkgPT4ge1xuXHRcdFx0XHRcdFx0dGFyZ2V0XG5cdFx0XHRcdFx0XHRcdC5nZXRTdXJmYWNlKClcblx0XHRcdFx0XHRcdFx0LmdldE1vZGVsKClcblx0XHRcdFx0XHRcdFx0LmdldERvY3VtZW50KClcblx0XHRcdFx0XHRcdFx0Lm9uY2UoJ3RyYW5zYWN0JywgKCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdGZvciAoY29uc3QgaXRlbSBvZiBwYW5lbExheW91dHMpIHtcblx0XHRcdFx0XHRcdFx0XHRcdGl0ZW0uJGVsZW1lbnQuZW1wdHkoKTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0c2F2ZURpYWxvZy5zd2FwUGFuZWwoJ3ByZXZpZXcnKTtcblx0XHRcdFx0XHRcdGN1cnJlbnRQYW5lbC4kZWxlbWVudC5hcHBlbmQoJHByZXZpZXdDb250ZW50KTtcblx0XHRcdFx0XHRcdHN0YWNrTGF5b3V0LnNldEl0ZW0oc3RhY2tMYXlvdXQuZmluZEl0ZW1Gcm9tRGF0YSh2YXJpYW50KSk7XG5cdFx0XHRcdFx0XHRpZiAoIXNhdmVEaWFsb2cuJGVsZW1lbnQuZmluZChgLiR7T1BUSU9OUy5jbGFzc05hbWV9YCkubGVuZ3RoKSB7XG5cdFx0XHRcdFx0XHRcdHNhdmVEaWFsb2cucHJldmlld1BhbmVsLiRlbGVtZW50LnByZXBlbmQoZHJvcGRvd24uJGVsZW1lbnQpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0KGVycm9yKSA9PiB7XG5cdFx0XHRcdFx0XHRzYXZlRGlhbG9nLnNob3dFcnJvcnMoXG5cdFx0XHRcdFx0XHRcdG5ldyBPTy51aS5FcnJvcih3aW5kb3cudmUuaW5pdC50YXJnZXQuZ2V0Q29udGVudEFwaSgpLmdldEVycm9yTWVzc2FnZShlcnJvciksIHtcblx0XHRcdFx0XHRcdFx0XHRyZWNvdmVyYWJsZTogdHJ1ZSxcblx0XHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHQpXG5cdFx0XHRcdC5hbHdheXMoKCkgPT4ge1xuXHRcdFx0XHRcdHNhdmVEaWFsb2cucG9wUGVuZGluZygpO1xuXHRcdFx0XHR9KTtcblx0XHR9XG5cdH07XG5cblx0Y29uc3QgaW5pdCA9ICgpID0+IHtcblx0XHR2YXJpYW50ID0gd2dVc2VyVmFyaWFudDtcblx0XHQoe3RhcmdldH0gPSB3aW5kb3cudmUuaW5pdCk7XG5cdFx0KHtzYXZlRGlhbG9nfSA9IHRhcmdldCk7XG5cdFx0Ly8gTWVzc2FnZXMgdGhhdCBjYW4gYmUgdXNlZCBoZXJlOlxuXHRcdC8vICogc2VlIGFib3ZlIGltcG9ydGVkIG9wdGlvbnMgYW5kIGNvbnN0YW50c1xuXHRcdC8vICogZm9yIG1vcmUgaW5mb3JtYXRpb25cblx0XHRkcm9wZG93biA9IG5ldyBPTy51aS5Ecm9wZG93bklucHV0V2lkZ2V0KHtcblx0XHRcdCRvdmVybGF5OiBzYXZlRGlhbG9nLiRvdmVybGF5LFxuXHRcdFx0Y2xhc3NlczogW09QVElPTlMuY2xhc3NOYW1lXSxcblx0XHRcdG9wdGlvbnM6IFtcblx0XHRcdFx0e1xuXHRcdFx0XHRcdG9wdGdyb3VwOiBtdy5tZXNzYWdlKCdwd3YtMjAxNy1jYXB0aW9uJykucGFyc2UoKSxcblx0XHRcdFx0fSxcblx0XHRcdFx0Li4uREFUQS5tYXAoKGl0ZW0pID0+IHtcblx0XHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdFx0ZGF0YTogaXRlbS52YXIsXG5cdFx0XHRcdFx0XHRsYWJlbDogbXcubWVzc2FnZShpdGVtLm1zZykucGFyc2UoKSxcblx0XHRcdFx0XHR9O1xuXHRcdFx0XHR9KSxcblx0XHRcdF0sXG5cdFx0XHR2YWx1ZTogdmFyaWFudCxcblx0XHR9KTtcblx0XHRkcm9wZG93bi5vbignY2hhbmdlJywgY2hhbmdlVmFyaWFudCk7XG5cdFx0cGFuZWxMYXlvdXRzID0gREFUQS5tYXAoKGl0ZW0pID0+IHtcblx0XHRcdHJldHVybiBuZXcgT08udWkuUGFuZWxMYXlvdXQoe1xuXHRcdFx0XHRleHBhbmRlZDogZmFsc2UsXG5cdFx0XHRcdGRhdGE6IGl0ZW0udmFyLFxuXHRcdFx0fSk7XG5cdFx0fSk7XG5cdFx0c3RhY2tMYXlvdXQgPSBuZXcgUGVuZGluZ1N0YWNrTGF5b3V0KHtcblx0XHRcdGV4cGFuZGVkOiBmYWxzZSxcblx0XHRcdGl0ZW1zOiBwYW5lbExheW91dHMsXG5cdFx0fSk7XG5cdFx0c3RhY2tMYXlvdXQuc2V0SXRlbShzdGFja0xheW91dC5maW5kSXRlbUZyb21EYXRhKHZhcmlhbnQpKTtcblx0XHRzYXZlRGlhbG9nLnByZXZpZXdQYW5lbC4kZWxlbWVudC5hcHBlbmQoc3RhY2tMYXlvdXQuJGVsZW1lbnQpO1xuXHRcdGVycm9yRGlhbG9nID0gbmV3IE9PLnVpLk1lc3NhZ2VEaWFsb2coKTtcblx0XHR3aW5kb3dNYW5hZ2VyID0gbmV3IE9PLnVpLldpbmRvd01hbmFnZXIoKTtcblx0XHR3aW5kb3dNYW5hZ2VyLmFkZFdpbmRvd3MoW2Vycm9yRGlhbG9nXSk7XG5cdFx0JGJvZHkuYXBwZW5kKHdpbmRvd01hbmFnZXIuJGVsZW1lbnQpO1xuXG5cdFx0Y29uc3QgaGFuZGxlclRvUmVtb3ZlID0gJ29uU2F2ZURpYWxvZ1ByZXZpZXcnO1xuXHRcdHNhdmVEaWFsb2cub2ZmKCdwcmV2aWV3JywgaGFuZGxlclRvUmVtb3ZlLCB0YXJnZXQpLm9uKCdwcmV2aWV3JywgcHJldmlld1dpdGhWYXJpYW50KTtcblxuXHRcdC8vIFJlaW5pdGlhbGl6YXRpb24gaXMgcmVxdWlyZWQgZm9yIHN3aXRjaGluZyBiZXR3ZWVuIFZpc3VhbEVkaXRvciBhbmQgTmV3IFdpa2l0ZXh0IEVkaXRvciAoMjAxNylcblx0XHRtdy5ob29rKCd2ZS5hY3RpdmF0aW9uQ29tcGxldGUnKS5hZGQoKCkgPT4ge1xuXHRcdFx0aWYgKG13LmNvbmZpZy5nZXQoT1BUSU9OUy5jb25maWdLZXkpKSB7XG5cdFx0XHRcdG13LmNvbmZpZy5zZXQoT1BUSU9OUy5jb25maWdLZXksIGZhbHNlKTtcblx0XHRcdH1cblx0XHR9KTtcblx0fTtcblxuXHQvLyBHdWFyZCBhZ2FpbnN0IGRvdWJsZSBpbmNsdXNpb25zXG5cdGlmICghbXcuY29uZmlnLmdldChPUFRJT05TLmNvbmZpZ0tleSkpIHtcblx0XHRpbml0KCk7XG5cblx0XHQvLyBTZXQgZ3VhcmRcblx0XHRtdy5jb25maWcuc2V0KE9QVElPTlMuY29uZmlnS2V5LCB0cnVlKTtcblx0fVxufTtcblxuZXhwb3J0IHtwcm9jZXNzVmlzdWFsRWRpdG9yfTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxvQkFBc0JDLFFBQUEsaUJBQUE7O0FDQ3JCLElBQUFDLFlBQWE7QUFDYixJQUFBQyxZQUFhOztBQ0ZkLElBQU1DLE9BQU8sQ0FDWjtFQUFDQyxLQUFLO0VBQU1DLFVBQVU7RUFBTUMsS0FBSztBQUFhLEdBQzlDO0VBQUNGLEtBQUs7RUFBV0MsVUFBVTtFQUFXQyxLQUFLO0FBQWtCLEdBQzdEO0VBQUNGLEtBQUs7RUFBV0MsVUFBVTtFQUFXQyxLQUFLO0FBQWtCLEdBQzdEO0VBQUNGLEtBQUs7RUFBU0MsVUFBVTtFQUFjQyxLQUFLO0FBQWdCLEdBQzVEO0VBQUNGLEtBQUs7RUFBU0MsVUFBVTtFQUFjQyxLQUFLO0FBQWdCLEdBQzVEO0VBQUNGLEtBQUs7RUFBU0MsVUFBVTtFQUFjQyxLQUFLO0FBQWdCLEdBQzVEO0VBQUNGLEtBQUs7RUFBU0MsVUFBVTtFQUFjQyxLQUFLO0FBQWdCLEdBQzVEO0VBQUNGLEtBQUs7RUFBU0MsVUFBVTtFQUFjQyxLQUFLO0FBQWdCLEdBQzVEO0VBQUNGLEtBQUs7RUFBU0MsVUFBVTtFQUFjQyxLQUFLO0FBQWdCLENBQUE7O0FDVDdELElBQU1DLGtCQUFrQkEsTUFBTTtBQUM3QkMsS0FBR0MsU0FBU0MsSUFBSTtJQUNmLG9CQUFvQkMsT0FBT0MsTUFBTSxVQUFVLFFBQVE7SUFDbkQsZUFBZUQsT0FBT0MsTUFBTSxPQUFPLEtBQUs7SUFDeEMsb0JBQW9CO0lBQ3BCLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtFQUNuQixDQUFDO0FBQ0Y7O0FD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TUFDdkM7SUFDRCxDQUFDO0VBQ0Y7QUFHQSxNQUFJLENBQUNNLEdBQUdPLE9BQU9pQixJQUFZOUIsU0FBUyxHQUFHO0FBQ3RDbUcsU0FBSztBQUdMN0YsT0FBR08sT0FBT0wsSUFBWVIsV0FBVyxJQUFJO0VBQ3RDO0FBQ0Q7O0FKblBBLE1BQUEsR0FBS0gsa0JBQUEySixTQUFRLEVBQUU3RSxLQUFLLFNBQVM4RSx3QkFBd0IvSCxPQUFzQztBQUMxRnBCLEtBQUcrQyxLQUFLLDRCQUE0QixFQUFFa0csSUFBSSxNQUFZO0FBQ3JEOUgsd0JBQW9CQyxLQUFLO0VBQzFCLENBQUM7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogWyJpbXBvcnRfZXh0X2dhZGdldCIsICJyZXF1aXJlIiwgImNsYXNzTmFtZSIsICJjb25maWdLZXkiLCAiREFUQSIsICJ2YXIiLCAiaHRtbExhbmciLCAibXNnIiwgIlBXVjIwMTdtZXNzYWdlcyIsICJtdyIsICJtZXNzYWdlcyIsICJzZXQiLCAid2luZG93IiwgIndnVUxTIiwgIlBlbmRpbmdTdGFja0xheW91dCIsICJQZW5kaW5nU3RhY2tMYXlvdXQyIiwgImNvbmZpZyIsICJzdXBlciIsICJjYWxsIiwgIk9PIiwgInVpIiwgIm1peGluIiwgIlBlbmRpbmdFbGVtZW50IiwgIiRlbGVtZW50IiwgImFkZENsYXNzIiwgImluaGVyaXRDbGFzcyIsICJTdGFja0xheW91dCIsICJtaXhpbkNsYXNzIiwgInByb2Nlc3NWaXN1YWxFZGl0b3IiLCAiJGJvZHkiLCAic2tpbiIsICJ3Z1VzZXJMYW5ndWFnZSIsICJ3Z1VzZXJWYXJpYW50IiwgImdldCIsICJ2YXJpYW50IiwgInRhcmdldCIsICJzYXZlRGlhbG9nIiwgImRyb3Bkb3duIiwgInN0YWNrTGF5b3V0IiwgInBhbmVsTGF5b3V0cyIsICJ3aW5kb3dNYW5hZ2VyIiwgImVycm9yRGlhbG9nIiwgImNvbnN0cnVjdERvY3VtZW50IiwgInRpdGxlIiwgIndpa2l0ZXh0IiwgImNhdGVnb3JpZXMiLCAiJHJlc3VsdCIsICIkIiwgImFwcGVuZCIsICJodG1sIiwgImNvbmNhdCIsICJwYWdlTGFuZ3VhZ2VEaXIiLCAiYXR0ciIsICJmaW5kIiwgIml0ZW0iLCAicGFyc2VIVE1MIiwgImhvb2siLCAiZmlyZSIsICJ2ZSIsICJ0YXJnZXRMaW5rc1RvTmV3V2luZG93IiwgImZldGNoUHJldmlldyIsICJkZWZlcnJlZCIsICJEZWZlcnJlZCIsICJnZXRDb250ZW50QXBpIiwgInBvc3QiLCAiYWN0aW9uIiwgImRpc2FibGVlZGl0c2VjdGlvbiIsICJlcnJvcmZvcm1hdCIsICJlcnJvcmxhbmciLCAiZXJyb3JzdXNlbG9jYWwiLCAiZm9ybWF0dmVyc2lvbiIsICJwcm9wIiwgInBzdCIsICJwcmV2aWV3IiwgImdldFBhZ2VOYW1lIiwgInRleHQiLCAiZ2V0RG9jVG9TYXZlIiwgInVzZWxhbmciLCAidGhlbiIsICJyZXNwb25zZSIsICJyZXNvbHZlIiwgInBhcnNlIiwgImRpc3BsYXl0aXRsZSIsICJjYXRlZ29yaWVzaHRtbCIsICJlcnJvciIsICJkZXRhaWwiLCAicmVqZWN0IiwgImNoYW5nZVZhcmlhbnQiLCAiY2hhbmdlVmFyaWFudDIiLCAidmFsIiwgInByZXZpZXdQYW5lbCIsICJmb2N1cyIsICJ0YXJnZXRQYW5lbCIsICJmaW5kSXRlbUZyb21EYXRhIiwgImNoaWxkcmVuIiwgImxlbmd0aCIsICJzZXRJdGVtIiwgInB1c2hQZW5kaW5nIiwgInNldERpc2FibGVkIiwgIiRwcmV2aWV3Q29udGFpbmVyIiwgIm9wZW5XaW5kb3ciLCAibWVzc2FnZSIsICJpbml0IiwgImdldEVycm9yTWVzc2FnZSIsICJhY3Rpb25zIiwgImxhYmVsIiwgImRlZmVyTXNnIiwgImZsYWdzIiwgImNsb3NlZCIsICJkYXRhIiwgInNldFZhbHVlIiwgImdldEN1cnJlbnRJdGVtIiwgImdldERhdGEiLCAiYWx3YXlzIiwgInBvcFBlbmRpbmciLCAicHJldmlld1dpdGhWYXJpYW50IiwgImN1cnJlbnRQYW5lbCIsICJzd2FwUGFuZWwiLCAicHJlcGVuZCIsICJlbWl0IiwgIiRwcmV2aWV3Q29udGVudCIsICJnZXRTdXJmYWNlIiwgImdldE1vZGVsIiwgImdldERvY3VtZW50IiwgIm9uY2UiLCAiX2l0ZXJhdG9yIiwgIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwgIl9zdGVwIiwgInMiLCAibiIsICJkb25lIiwgInZhbHVlIiwgImVtcHR5IiwgImVyciIsICJlIiwgImYiLCAic2hvd0Vycm9ycyIsICJFcnJvciIsICJyZWNvdmVyYWJsZSIsICJEcm9wZG93bklucHV0V2lkZ2V0IiwgIiRvdmVybGF5IiwgImNsYXNzZXMiLCAib3B0aW9ucyIsICJvcHRncm91cCIsICJtYXAiLCAib24iLCAiUGFuZWxMYXlvdXQiLCAiZXhwYW5kZWQiLCAiaXRlbXMiLCAiTWVzc2FnZURpYWxvZyIsICJXaW5kb3dNYW5hZ2VyIiwgImFkZFdpbmRvd3MiLCAiaGFuZGxlclRvUmVtb3ZlIiwgIm9mZiIsICJhZGQiLCAiZ2V0Qm9keSIsICJwcmV2aWV3V2l0aFZhcmlhbnRzMjAxNyJdCn0K

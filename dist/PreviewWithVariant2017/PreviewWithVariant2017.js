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
//! src/PreviewWithVariant2017/PreviewWithVariant2017.ts
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1ByZXZpZXdXaXRoVmFyaWFudDIwMTcvUHJldmlld1dpdGhWYXJpYW50MjAxNy50cyIsICJzcmMvUHJldmlld1dpdGhWYXJpYW50MjAxNy9vcHRpb25zLmpzb24iLCAic3JjL1ByZXZpZXdXaXRoVmFyaWFudDIwMTcvbW9kdWxlcy9jb25zdGFudC50cyIsICJzcmMvUHJldmlld1dpdGhWYXJpYW50MjAxNy9tb2R1bGVzL21lc3NhZ2VzLnRzIiwgInNyYy9QcmV2aWV3V2l0aFZhcmlhbnQyMDE3L21vZHVsZXMvcHJvY2Vzc1Zpc3VhbEVkaXRvci5qcyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHtnZXRCb2R5fSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuaW1wb3J0IHtwcm9jZXNzVmlzdWFsRWRpdG9yfSBmcm9tICcuL21vZHVsZXMvcHJvY2Vzc1Zpc3VhbEVkaXRvci5qcyc7XG5cbnZvaWQgZ2V0Qm9keSgpLnRoZW4oZnVuY3Rpb24gcHJldmlld1dpdGhWYXJpYW50czIwMTcoJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KTogdm9pZCB7XG5cdG13Lmhvb2soJ3ZlLnNhdmVEaWFsb2cuc3RhdGVDaGFuZ2VkJykuYWRkKCgpOiB2b2lkID0+IHtcblx0XHRwcm9jZXNzVmlzdWFsRWRpdG9yKCRib2R5KTtcblx0fSk7XG59KTtcbiIsICJ7XG5cdFwiY2xhc3NOYW1lXCI6IFwicHd2LTIwMTctdmFyaWFudFwiLFxuXHRcImNvbmZpZ0tleVwiOiBcImdhZGdldC1QcmV2aWV3V2l0aFZhcmlhbnQyMDE3X19Jbml0aWFsaXplZFwiXG59XG4iLCAiY29uc3QgREFUQSA9IFtcblx0e3ZhcjogJ3poJywgaHRtbExhbmc6ICd6aCcsIG1zZzogJ3B3di0yMDE3LXpoJ30sXG5cdHt2YXI6ICd6aC1oYW5zJywgaHRtbExhbmc6ICd6aC1IYW5zJywgbXNnOiAncHd2LTIwMTctemgtaGFucyd9LFxuXHR7dmFyOiAnemgtaGFudCcsIGh0bWxMYW5nOiAnemgtSGFudCcsIG1zZzogJ3B3di0yMDE3LXpoLWhhbnQnfSxcblx0e3ZhcjogJ3poLWNuJywgaHRtbExhbmc6ICd6aC1IYW5zLUNOJywgbXNnOiAncHd2LTIwMTctemgtY24nfSxcblx0e3ZhcjogJ3poLWhrJywgaHRtbExhbmc6ICd6aC1IYW50LUhLJywgbXNnOiAncHd2LTIwMTctemgtaGsnfSxcblx0e3ZhcjogJ3poLW1vJywgaHRtbExhbmc6ICd6aC1IYW50LU1PJywgbXNnOiAncHd2LTIwMTctemgtbW8nfSxcblx0e3ZhcjogJ3poLW15JywgaHRtbExhbmc6ICd6aC1IYW5zLU1ZJywgbXNnOiAncHd2LTIwMTctemgtbXknfSxcblx0e3ZhcjogJ3poLXNnJywgaHRtbExhbmc6ICd6aC1IYW5zLVNHJywgbXNnOiAncHd2LTIwMTctemgtc2cnfSxcblx0e3ZhcjogJ3poLXR3JywgaHRtbExhbmc6ICd6aC1IYW50LVRXJywgbXNnOiAncHd2LTIwMTctemgtdHcnfSxcbl07XG5cbmV4cG9ydCB7REFUQX07XG4iLCAiY29uc3QgUFdWMjAxN21lc3NhZ2VzID0gKCkgPT4ge1xuXHRtdy5tZXNzYWdlcy5zZXQoe1xuXHRcdCdwd3YtMjAxNy1jYXB0aW9uJzogd2luZG93LndnVUxTKCfpgInmi6nor63oqIDlj5jkvZMnLCAn6YG45pOH6Kqe6KiA6K6K6auUJyksXG5cdFx0J3B3di0yMDE3LXpoJzogd2luZG93LndnVUxTKCfkuI3ovazmjaInLCAn5LiN6L2J5o+bJyksXG5cdFx0J3B3di0yMDE3LXpoLWhhbnMnOiAn566A5L2TJyxcblx0XHQncHd2LTIwMTctemgtaGFudCc6ICfnuYHpq5QnLFxuXHRcdCdwd3YtMjAxNy16aC1jbic6ICfkuK3lm73lpKfpmYbnroDkvZMnLFxuXHRcdCdwd3YtMjAxNy16aC1oayc6ICfkuK3lnIvpppnmuK/nuYHpq5QnLFxuXHRcdCdwd3YtMjAxNy16aC1tbyc6ICfkuK3lnIvmvrPploDnuYHpq5QnLFxuXHRcdCdwd3YtMjAxNy16aC1teSc6ICfpqazmnaXopb/kuprnroDkvZMnLFxuXHRcdCdwd3YtMjAxNy16aC1zZyc6ICfmlrDliqDlnaHnroDkvZMnLFxuXHRcdCdwd3YtMjAxNy16aC10dyc6ICfkuK3lnIvoh7rngaPnuYHpq5QnLFxuXHR9KTtcbn07XG5cbmV4cG9ydCB7UFdWMjAxN21lc3NhZ2VzfTtcbiIsICIvLyBAdHMtbm9jaGVja1xuaW1wb3J0ICcuL3Byb2Nlc3NWaXN1YWxFZGl0b3IubGVzcyc7XG5pbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge0RBVEF9IGZyb20gJy4vY29uc3RhbnQnO1xuaW1wb3J0IHtQV1YyMDE3bWVzc2FnZXN9IGZyb20gJy4vbWVzc2FnZXMnO1xuXG5QV1YyMDE3bWVzc2FnZXMoKTtcblxuY29uc3QgUGVuZGluZ1N0YWNrTGF5b3V0ID0gZnVuY3Rpb24gUGVuZGluZ1N0YWNrTGF5b3V0KGNvbmZpZykge1xuXHRQZW5kaW5nU3RhY2tMYXlvdXQuc3VwZXIuY2FsbCh0aGlzLCBjb25maWcpO1xuXHRPTy51aS5taXhpbi5QZW5kaW5nRWxlbWVudC5jYWxsKHRoaXMpO1xuXHR0aGlzLiRlbGVtZW50LmFkZENsYXNzKCdwd3YtMjAxNy1wZW5kaW5nU3RhY2tMYXlvdXQnKTtcbn07XG5cbk9PLmluaGVyaXRDbGFzcyhQZW5kaW5nU3RhY2tMYXlvdXQsIE9PLnVpLlN0YWNrTGF5b3V0KTtcbk9PLm1peGluQ2xhc3MoUGVuZGluZ1N0YWNrTGF5b3V0LCBPTy51aS5taXhpbi5QZW5kaW5nRWxlbWVudCk7XG5cbmNvbnN0IHByb2Nlc3NWaXN1YWxFZGl0b3IgPSAoJGJvZHkpID0+IHtcblx0Y29uc3Qge3NraW4sIHdnVXNlckxhbmd1YWdlLCB3Z1VzZXJWYXJpYW50fSA9IG13LmNvbmZpZy5nZXQoKTtcblx0bGV0IHZhcmlhbnQsIHRhcmdldCwgc2F2ZURpYWxvZywgZHJvcGRvd24sIHN0YWNrTGF5b3V0LCBwYW5lbExheW91dHMsIHdpbmRvd01hbmFnZXIsIGVycm9yRGlhbG9nO1xuXG5cdGNvbnN0IGNvbnN0cnVjdERvY3VtZW50ID0gKHRpdGxlLCB3aWtpdGV4dCwgY2F0ZWdvcmllcykgPT4ge1xuXHRcdGNvbnN0ICRyZXN1bHQgPSAkKCc8ZGl2PicpLmFkZENsYXNzKCdtdy1ib2R5IG13LWJvZHktY29udGVudCcpO1xuXG5cdFx0aWYgKHNraW4gPT09ICd2ZWN0b3InKSB7XG5cdFx0XHQvLyBBZGRpdGlvbmFsIGNsYXNzZXMgcmVxdWlyZWQgaW4gdmVjdG9yIHRvIGdldCBjb3JyZWN0IGFwcGVhcmFuY2Vcblx0XHRcdCRyZXN1bHQuYWRkQ2xhc3MoJ3ZlY3Rvci1ib2R5Jyk7XG5cdFx0fVxuXG5cdFx0JHJlc3VsdC5hcHBlbmQoXG5cdFx0XHQkKCc8aDE+JykuYWRkQ2xhc3MoJ2ZpcnN0SGVhZGluZycpLmh0bWwodGl0bGUpLFxuXHRcdFx0Ly8gQ2xhc3NlcyB1c2VkIGhlcmU6XG5cdFx0XHQvLyAqIG13LWNvbnRlbnQtbHRyXG5cdFx0XHQvLyAqIG13LWNvbnRlbnQtcnRsXG5cdFx0XHQkKCc8ZGl2PicpXG5cdFx0XHRcdC5hZGRDbGFzcyhgbXctY29udGVudC0ke213LmNvbmZpZy5nZXQoJ3dnVmlzdWFsRWRpdG9yJykucGFnZUxhbmd1YWdlRGlyfWApXG5cdFx0XHRcdC5hdHRyKFxuXHRcdFx0XHRcdCdsYW5nJyxcblx0XHRcdFx0XHREQVRBLmZpbmQoKGl0ZW0pID0+IHtcblx0XHRcdFx0XHRcdHJldHVybiBpdGVtLnZhciA9PT0gdmFyaWFudDtcblx0XHRcdFx0XHR9KS5odG1sTGFuZ1xuXHRcdFx0XHQpXG5cdFx0XHRcdC5odG1sKHdpa2l0ZXh0KSxcblx0XHRcdCQucGFyc2VIVE1MKGNhdGVnb3JpZXMpXG5cdFx0KTtcblxuXHRcdC8vIE1ha2Ugb3RoZXIgdGhpbmdzIGxpa2UgUmVmZXJlbmNlIFRvb2x0aXAgZnVuY3Rpb25cblx0XHRtdy5ob29rKCd3aWtpcGFnZS5jb250ZW50JykuZmlyZSgkcmVzdWx0KTtcblx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcblx0XHR2ZS50YXJnZXRMaW5rc1RvTmV3V2luZG93KCRyZXN1bHRbMF0pO1xuXHRcdHJldHVybiAkcmVzdWx0O1xuXHR9O1xuXG5cdGNvbnN0IGZldGNoUHJldmlldyA9ICgpID0+IHtcblx0XHRjb25zdCBkZWZlcnJlZCA9ICQuRGVmZXJyZWQoKTtcblx0XHQvLyBDdXJyZW50bHkgKEF1ZyAyMDIxKSwgUGFyc29pZCBBUEkgZG9lcyBub3QgaGF2ZSBmdWxsIExDIGZ1bmN0aW9uYWxpdHksXG5cdFx0Ly8gaGVuY2UgdXNlIHBhcnNlIEFQSSBpbnN0ZWFkLlxuXHRcdHRhcmdldFxuXHRcdFx0LmdldENvbnRlbnRBcGkoKVxuXHRcdFx0LnBvc3Qoe1xuXHRcdFx0XHRhY3Rpb246ICdwYXJzZScsXG5cdFx0XHRcdGRpc2FibGVlZGl0c2VjdGlvbjogdHJ1ZSxcblx0XHRcdFx0ZXJyb3Jmb3JtYXQ6ICdodG1sJyxcblx0XHRcdFx0ZXJyb3JsYW5nOiB3Z1VzZXJMYW5ndWFnZSxcblx0XHRcdFx0ZXJyb3JzdXNlbG9jYWw6IHRydWUsXG5cdFx0XHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRcdFx0cHJvcDogWyd0ZXh0JywgJ2luZGljYXRvcnMnLCAnZGlzcGxheXRpdGxlJywgJ2NhdGVnb3JpZXNodG1sJywgJ3BhcnNld2FybmluZ3NodG1sJ10sXG5cdFx0XHRcdHBzdDogdHJ1ZSxcblx0XHRcdFx0cHJldmlldzogdHJ1ZSxcblx0XHRcdFx0dGl0bGU6IHRhcmdldC5nZXRQYWdlTmFtZSgpLFxuXHRcdFx0XHR0ZXh0OiB0YXJnZXQuZ2V0RG9jVG9TYXZlKCksXG5cdFx0XHRcdHVzZWxhbmc6IHdnVXNlckxhbmd1YWdlLFxuXHRcdFx0XHR2YXJpYW50LFxuXHRcdFx0fSlcblx0XHRcdC50aGVuKFxuXHRcdFx0XHQocmVzcG9uc2UpID0+IHtcblx0XHRcdFx0XHR2b2lkIGRlZmVycmVkLnJlc29sdmUoXG5cdFx0XHRcdFx0XHRjb25zdHJ1Y3REb2N1bWVudChcblx0XHRcdFx0XHRcdFx0cmVzcG9uc2UucGFyc2UuZGlzcGxheXRpdGxlLFxuXHRcdFx0XHRcdFx0XHRyZXNwb25zZS5wYXJzZS50ZXh0LFxuXHRcdFx0XHRcdFx0XHRyZXNwb25zZS5wYXJzZS5jYXRlZ29yaWVzaHRtbFxuXHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdChlcnJvciwgZGV0YWlsKSA9PiB7XG5cdFx0XHRcdFx0dm9pZCBkZWZlcnJlZC5yZWplY3QoZGV0YWlsKTtcblx0XHRcdFx0fVxuXHRcdFx0KTtcblx0XHRyZXR1cm4gZGVmZXJyZWQ7XG5cdH07XG5cblx0Y29uc3QgY2hhbmdlVmFyaWFudCA9IGZ1bmN0aW9uIGNoYW5nZVZhcmlhbnQodmFsKSB7XG5cdFx0c2F2ZURpYWxvZy5wcmV2aWV3UGFuZWwuJGVsZW1lbnRbMF0uZm9jdXMoKTtcblx0XHR2YXJpYW50ID0gdmFsO1xuXG5cdFx0Y29uc3QgdGFyZ2V0UGFuZWwgPSBzdGFja0xheW91dC5maW5kSXRlbUZyb21EYXRhKHZhcmlhbnQpO1xuXHRcdGlmICh0YXJnZXRQYW5lbC4kZWxlbWVudC5jaGlsZHJlbigpLmxlbmd0aCkge1xuXHRcdFx0c3RhY2tMYXlvdXQuc2V0SXRlbSh0YXJnZXRQYW5lbCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHN0YWNrTGF5b3V0LnB1c2hQZW5kaW5nKCk7XG5cdFx0XHRkcm9wZG93bi5zZXREaXNhYmxlZCh0cnVlKTtcblxuXHRcdFx0dm9pZCBmZXRjaFByZXZpZXcoKVxuXHRcdFx0XHQudGhlbihcblx0XHRcdFx0XHQoJHByZXZpZXdDb250YWluZXIpID0+IHtcblx0XHRcdFx0XHRcdHRhcmdldFBhbmVsLiRlbGVtZW50LmFwcGVuZCgkcHJldmlld0NvbnRhaW5lcik7XG5cdFx0XHRcdFx0XHRzdGFja0xheW91dC5zZXRJdGVtKHRhcmdldFBhbmVsKTtcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdChlcnJvcikgPT4ge1xuXHRcdFx0XHRcdFx0d2luZG93TWFuYWdlclxuXHRcdFx0XHRcdFx0XHQub3BlbldpbmRvdyhlcnJvckRpYWxvZywge1xuXHRcdFx0XHRcdFx0XHRcdHRpdGxlOiBPTy51aS5tc2coJ29vdWktZGlhbG9nLXByb2Nlc3MtZXJyb3InKSxcblx0XHRcdFx0XHRcdFx0XHRtZXNzYWdlOiB3aW5kb3cudmUuaW5pdC50YXJnZXQuZ2V0Q29udGVudEFwaSgpLmdldEVycm9yTWVzc2FnZShlcnJvciksXG5cdFx0XHRcdFx0XHRcdFx0YWN0aW9uczogW1xuXHRcdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRhY3Rpb246ICdyZWplY3QnLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRsYWJlbDogT08udWkuZGVmZXJNc2coJ29vdWktZGlhbG9nLW1lc3NhZ2UtcmVqZWN0JyksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGZsYWdzOiAnc2FmZScsXG5cdFx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRhY3Rpb246ICdyZXRyeScsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsOiBPTy51aS5kZWZlck1zZygnb291aS1kaWFsb2ctcHJvY2Vzcy1yZXRyeScpLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRmbGFnczogWydwcmltYXJ5JywgJ3Byb2dyZXNzaXZlJ10sXG5cdFx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRcdF0sXG5cdFx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XHRcdC5jbG9zZWQudGhlbigoZGF0YSkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdGlmIChkYXRhICYmIGRhdGEuYWN0aW9uID09PSAncmV0cnknKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHQvLyBEbyBub3QgdXNlIHNldFZhbHVlKCkgc2luY2UgaXQgd2lsbCBub3QgdHJpZ2dlciBldmVudFxuXHRcdFx0XHRcdFx0XHRcdFx0Y2hhbmdlVmFyaWFudCh2YXJpYW50KTtcblx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdFx0Ly8gXCJ2YXJpYW50XCIgd2lsbCBiZSBzZXQgYnkgZXZlbnQgaGFuZGxlclxuXHRcdFx0XHRcdFx0XHRcdFx0ZHJvcGRvd24uc2V0VmFsdWUoc3RhY2tMYXlvdXQuZ2V0Q3VycmVudEl0ZW0oKS5nZXREYXRhKCkpO1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHQpXG5cdFx0XHRcdC5hbHdheXMoKCkgPT4ge1xuXHRcdFx0XHRcdHN0YWNrTGF5b3V0LnBvcFBlbmRpbmcoKTtcblx0XHRcdFx0XHRkcm9wZG93bi5zZXREaXNhYmxlZChmYWxzZSk7XG5cdFx0XHRcdH0pO1xuXHRcdH1cblx0fTtcblxuXHRjb25zdCBwcmV2aWV3V2l0aFZhcmlhbnQgPSAoKSA9PiB7XG5cdFx0Y29uc3QgY3VycmVudFBhbmVsID0gc3RhY2tMYXlvdXQuZ2V0Q3VycmVudEl0ZW0oKTtcblxuXHRcdGlmIChjdXJyZW50UGFuZWwuJGVsZW1lbnQuY2hpbGRyZW4oKS5sZW5ndGgpIHtcblx0XHRcdHNhdmVEaWFsb2cuc3dhcFBhbmVsKCdwcmV2aWV3Jyk7XG5cdFx0XHRzYXZlRGlhbG9nLnByZXZpZXdQYW5lbC4kZWxlbWVudC5wcmVwZW5kKGRyb3Bkb3duLiRlbGVtZW50KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGFyZ2V0LmVtaXQoJ3NhdmVQcmV2aWV3Jyk7XG5cdFx0XHRzYXZlRGlhbG9nLnB1c2hQZW5kaW5nKCk7XG5cblx0XHRcdHZvaWQgZmV0Y2hQcmV2aWV3KClcblx0XHRcdFx0LnRoZW4oXG5cdFx0XHRcdFx0KCRwcmV2aWV3Q29udGVudCkgPT4ge1xuXHRcdFx0XHRcdFx0dGFyZ2V0XG5cdFx0XHRcdFx0XHRcdC5nZXRTdXJmYWNlKClcblx0XHRcdFx0XHRcdFx0LmdldE1vZGVsKClcblx0XHRcdFx0XHRcdFx0LmdldERvY3VtZW50KClcblx0XHRcdFx0XHRcdFx0Lm9uY2UoJ3RyYW5zYWN0JywgKCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdGZvciAoY29uc3QgaXRlbSBvZiBwYW5lbExheW91dHMpIHtcblx0XHRcdFx0XHRcdFx0XHRcdGl0ZW0uJGVsZW1lbnQuZW1wdHkoKTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0c2F2ZURpYWxvZy5zd2FwUGFuZWwoJ3ByZXZpZXcnKTtcblx0XHRcdFx0XHRcdGN1cnJlbnRQYW5lbC4kZWxlbWVudC5hcHBlbmQoJHByZXZpZXdDb250ZW50KTtcblx0XHRcdFx0XHRcdHN0YWNrTGF5b3V0LnNldEl0ZW0oc3RhY2tMYXlvdXQuZmluZEl0ZW1Gcm9tRGF0YSh2YXJpYW50KSk7XG5cdFx0XHRcdFx0XHRpZiAoIXNhdmVEaWFsb2cuJGVsZW1lbnQuZmluZChgLiR7T1BUSU9OUy5jbGFzc05hbWV9YCkubGVuZ3RoKSB7XG5cdFx0XHRcdFx0XHRcdHNhdmVEaWFsb2cucHJldmlld1BhbmVsLiRlbGVtZW50LnByZXBlbmQoZHJvcGRvd24uJGVsZW1lbnQpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0KGVycm9yKSA9PiB7XG5cdFx0XHRcdFx0XHRzYXZlRGlhbG9nLnNob3dFcnJvcnMoXG5cdFx0XHRcdFx0XHRcdG5ldyBPTy51aS5FcnJvcih3aW5kb3cudmUuaW5pdC50YXJnZXQuZ2V0Q29udGVudEFwaSgpLmdldEVycm9yTWVzc2FnZShlcnJvciksIHtcblx0XHRcdFx0XHRcdFx0XHRyZWNvdmVyYWJsZTogdHJ1ZSxcblx0XHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHQpXG5cdFx0XHRcdC5hbHdheXMoKCkgPT4ge1xuXHRcdFx0XHRcdHNhdmVEaWFsb2cucG9wUGVuZGluZygpO1xuXHRcdFx0XHR9KTtcblx0XHR9XG5cdH07XG5cblx0Y29uc3QgaW5pdCA9ICgpID0+IHtcblx0XHR2YXJpYW50ID0gd2dVc2VyVmFyaWFudDtcblx0XHQoe3RhcmdldH0gPSB3aW5kb3cudmUuaW5pdCk7XG5cdFx0KHtzYXZlRGlhbG9nfSA9IHRhcmdldCk7XG5cdFx0ZHJvcGRvd24gPSBuZXcgT08udWkuRHJvcGRvd25JbnB1dFdpZGdldCh7XG5cdFx0XHQkb3ZlcmxheTogc2F2ZURpYWxvZy4kb3ZlcmxheSxcblx0XHRcdGNsYXNzZXM6IFtPUFRJT05TLmNsYXNzTmFtZV0sXG5cdFx0XHRvcHRpb25zOiBbXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRvcHRncm91cDogbXcubWVzc2FnZSgncHd2LTIwMTctY2FwdGlvbicpLnBhcnNlKCksXG5cdFx0XHRcdH0sXG5cdFx0XHRcdC4uLkRBVEEubWFwKChpdGVtKSA9PiB7XG5cdFx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHRcdGRhdGE6IGl0ZW0udmFyLFxuXHRcdFx0XHRcdFx0bGFiZWw6IG13Lm1lc3NhZ2UoaXRlbS5tc2cpLnBhcnNlKCksXG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0fSksXG5cdFx0XHRdLFxuXHRcdFx0dmFsdWU6IHZhcmlhbnQsXG5cdFx0fSk7XG5cdFx0ZHJvcGRvd24ub24oJ2NoYW5nZScsIGNoYW5nZVZhcmlhbnQpO1xuXHRcdHBhbmVsTGF5b3V0cyA9IERBVEEubWFwKChpdGVtKSA9PiB7XG5cdFx0XHRyZXR1cm4gbmV3IE9PLnVpLlBhbmVsTGF5b3V0KHtcblx0XHRcdFx0ZXhwYW5kZWQ6IGZhbHNlLFxuXHRcdFx0XHRkYXRhOiBpdGVtLnZhcixcblx0XHRcdH0pO1xuXHRcdH0pO1xuXHRcdHN0YWNrTGF5b3V0ID0gbmV3IFBlbmRpbmdTdGFja0xheW91dCh7XG5cdFx0XHRleHBhbmRlZDogZmFsc2UsXG5cdFx0XHRpdGVtczogcGFuZWxMYXlvdXRzLFxuXHRcdH0pO1xuXHRcdHN0YWNrTGF5b3V0LnNldEl0ZW0oc3RhY2tMYXlvdXQuZmluZEl0ZW1Gcm9tRGF0YSh2YXJpYW50KSk7XG5cdFx0c2F2ZURpYWxvZy5wcmV2aWV3UGFuZWwuJGVsZW1lbnQuYXBwZW5kKHN0YWNrTGF5b3V0LiRlbGVtZW50KTtcblx0XHRlcnJvckRpYWxvZyA9IG5ldyBPTy51aS5NZXNzYWdlRGlhbG9nKCk7XG5cdFx0d2luZG93TWFuYWdlciA9IG5ldyBPTy51aS5XaW5kb3dNYW5hZ2VyKCk7XG5cdFx0d2luZG93TWFuYWdlci5hZGRXaW5kb3dzKFtlcnJvckRpYWxvZ10pO1xuXHRcdCRib2R5LmFwcGVuZCh3aW5kb3dNYW5hZ2VyLiRlbGVtZW50KTtcblxuXHRcdGNvbnN0IGhhbmRsZXJUb1JlbW92ZSA9ICdvblNhdmVEaWFsb2dQcmV2aWV3Jztcblx0XHRzYXZlRGlhbG9nLm9mZigncHJldmlldycsIGhhbmRsZXJUb1JlbW92ZSwgdGFyZ2V0KS5vbigncHJldmlldycsIHByZXZpZXdXaXRoVmFyaWFudCk7XG5cblx0XHQvLyBSZWluaXRpYWxpemF0aW9uIGlzIHJlcXVpcmVkIGZvciBzd2l0Y2hpbmcgYmV0d2VlbiBWaXN1YWxFZGl0b3IgYW5kIE5ldyBXaWtpdGV4dCBFZGl0b3IgKDIwMTcpXG5cdFx0bXcuaG9vaygndmUuYWN0aXZhdGlvbkNvbXBsZXRlJykuYWRkKCgpID0+IHtcblx0XHRcdGlmIChtdy5jb25maWcuZ2V0KE9QVElPTlMuY29uZmlnS2V5KSkge1xuXHRcdFx0XHRtdy5jb25maWcuc2V0KE9QVElPTlMuY29uZmlnS2V5LCBmYWxzZSk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH07XG5cblx0Ly8gR3VhcmQgYWdhaW5zdCBkb3VibGUgaW5jbHVzaW9uc1xuXHRpZiAoIW13LmNvbmZpZy5nZXQoT1BUSU9OUy5jb25maWdLZXkpKSB7XG5cdFx0aW5pdCgpO1xuXG5cdFx0Ly8gU2V0IGd1YXJkXG5cdFx0bXcuY29uZmlnLnNldChPUFRJT05TLmNvbmZpZ0tleSwgdHJ1ZSk7XG5cdH1cbn07XG5cbmV4cG9ydCB7cHJvY2Vzc1Zpc3VhbEVkaXRvcn07XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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LGtCQUFBMkosU0FBUSxFQUFFN0UsS0FBSyxTQUFTOEUsd0JBQXdCL0gsT0FBc0M7QUFDMUZwQixLQUFHK0MsS0FBSyw0QkFBNEIsRUFBRWtHLElBQUksTUFBWTtBQUNyRDlILHdCQUFvQkMsS0FBSztFQUMxQixDQUFDO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFsiaW1wb3J0X2V4dF9nYWRnZXQiLCAicmVxdWlyZSIsICJjbGFzc05hbWUiLCAiY29uZmlnS2V5IiwgIkRBVEEiLCAidmFyIiwgImh0bWxMYW5nIiwgIm1zZyIsICJQV1YyMDE3bWVzc2FnZXMiLCAibXciLCAibWVzc2FnZXMiLCAic2V0IiwgIndpbmRvdyIsICJ3Z1VMUyIsICJQZW5kaW5nU3RhY2tMYXlvdXQiLCAiUGVuZGluZ1N0YWNrTGF5b3V0MiIsICJjb25maWciLCAic3VwZXIiLCAiY2FsbCIsICJPTyIsICJ1aSIsICJtaXhpbiIsICJQZW5kaW5nRWxlbWVudCIsICIkZWxlbWVudCIsICJhZGRDbGFzcyIsICJpbmhlcml0Q2xhc3MiLCAiU3RhY2tMYXlvdXQiLCAibWl4aW5DbGFzcyIsICJwcm9jZXNzVmlzdWFsRWRpdG9yIiwgIiRib2R5IiwgInNraW4iLCAid2dVc2VyTGFuZ3VhZ2UiLCAid2dVc2VyVmFyaWFudCIsICJnZXQiLCAidmFyaWFudCIsICJ0YXJnZXQiLCAic2F2ZURpYWxvZyIsICJkcm9wZG93biIsICJzdGFja0xheW91dCIsICJwYW5lbExheW91dHMiLCAid2luZG93TWFuYWdlciIsICJlcnJvckRpYWxvZyIsICJjb25zdHJ1Y3REb2N1bWVudCIsICJ0aXRsZSIsICJ3aWtpdGV4dCIsICJjYXRlZ29yaWVzIiwgIiRyZXN1bHQiLCAiJCIsICJhcHBlbmQiLCAiaHRtbCIsICJjb25jYXQiLCAicGFnZUxhbmd1YWdlRGlyIiwgImF0dHIiLCAiZmluZCIsICJpdGVtIiwgInBhcnNlSFRNTCIsICJob29rIiwgImZpcmUiLCAidmUiLCAidGFyZ2V0TGlua3NUb05ld1dpbmRvdyIsICJmZXRjaFByZXZpZXciLCAiZGVmZXJyZWQiLCAiRGVmZXJyZWQiLCAiZ2V0Q29udGVudEFwaSIsICJwb3N0IiwgImFjdGlvbiIsICJkaXNhYmxlZWRpdHNlY3Rpb24iLCAiZXJyb3Jmb3JtYXQiLCAiZXJyb3JsYW5nIiwgImVycm9yc3VzZWxvY2FsIiwgImZvcm1hdHZlcnNpb24iLCAicHJvcCIsICJwc3QiLCAicHJldmlldyIsICJnZXRQYWdlTmFtZSIsICJ0ZXh0IiwgImdldERvY1RvU2F2ZSIsICJ1c2VsYW5nIiwgInRoZW4iLCAicmVzcG9uc2UiLCAicmVzb2x2ZSIsICJwYXJzZSIsICJkaXNwbGF5dGl0bGUiLCAiY2F0ZWdvcmllc2h0bWwiLCAiZXJyb3IiLCAiZGV0YWlsIiwgInJlamVjdCIsICJjaGFuZ2VWYXJpYW50IiwgImNoYW5nZVZhcmlhbnQyIiwgInZhbCIsICJwcmV2aWV3UGFuZWwiLCAiZm9jdXMiLCAidGFyZ2V0UGFuZWwiLCAiZmluZEl0ZW1Gcm9tRGF0YSIsICJjaGlsZHJlbiIsICJsZW5ndGgiLCAic2V0SXRlbSIsICJwdXNoUGVuZGluZyIsICJzZXREaXNhYmxlZCIsICIkcHJldmlld0NvbnRhaW5lciIsICJvcGVuV2luZG93IiwgIm1lc3NhZ2UiLCAiaW5pdCIsICJnZXRFcnJvck1lc3NhZ2UiLCAiYWN0aW9ucyIsICJsYWJlbCIsICJkZWZlck1zZyIsICJmbGFncyIsICJjbG9zZWQiLCAiZGF0YSIsICJzZXRWYWx1ZSIsICJnZXRDdXJyZW50SXRlbSIsICJnZXREYXRhIiwgImFsd2F5cyIsICJwb3BQZW5kaW5nIiwgInByZXZpZXdXaXRoVmFyaWFudCIsICJjdXJyZW50UGFuZWwiLCAic3dhcFBhbmVsIiwgInByZXBlbmQiLCAiZW1pdCIsICIkcHJldmlld0NvbnRlbnQiLCAiZ2V0U3VyZmFjZSIsICJnZXRNb2RlbCIsICJnZXREb2N1bWVudCIsICJvbmNlIiwgIl9pdGVyYXRvciIsICJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsICJfc3RlcCIsICJzIiwgIm4iLCAiZG9uZSIsICJ2YWx1ZSIsICJlbXB0eSIsICJlcnIiLCAiZSIsICJmIiwgInNob3dFcnJvcnMiLCAiRXJyb3IiLCAicmVjb3ZlcmFibGUiLCAiRHJvcGRvd25JbnB1dFdpZGdldCIsICIkb3ZlcmxheSIsICJjbGFzc2VzIiwgIm9wdGlvbnMiLCAib3B0Z3JvdXAiLCAibWFwIiwgIm9uIiwgIlBhbmVsTGF5b3V0IiwgImV4cGFuZGVkIiwgIml0ZW1zIiwgIk1lc3NhZ2VEaWFsb2ciLCAiV2luZG93TWFuYWdlciIsICJhZGRXaW5kb3dzIiwgImhhbmRsZXJUb1JlbW92ZSIsICJvZmYiLCAiYWRkIiwgImdldEJvZHkiLCAicHJldmlld1dpdGhWYXJpYW50czIwMTciXQp9Cg==

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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1ByZXZpZXdXaXRoVmFyaWFudDIwMTcvUHJldmlld1dpdGhWYXJpYW50MjAxNy50cyIsICJzcmMvUHJldmlld1dpdGhWYXJpYW50MjAxNy9vcHRpb25zLmpzb24iLCAic3JjL1ByZXZpZXdXaXRoVmFyaWFudDIwMTcvbW9kdWxlcy9jb25zdGFudC50cyIsICJzcmMvUHJldmlld1dpdGhWYXJpYW50MjAxNy9tb2R1bGVzL21lc3NhZ2VzLnRzIiwgInNyYy9QcmV2aWV3V2l0aFZhcmlhbnQyMDE3L21vZHVsZXMvcHJvY2Vzc1Zpc3VhbEVkaXRvci5qcyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHtnZXRCb2R5fSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuaW1wb3J0IHtwcm9jZXNzVmlzdWFsRWRpdG9yfSBmcm9tICcuL21vZHVsZXMvcHJvY2Vzc1Zpc3VhbEVkaXRvci5qcyc7XG5cbnZvaWQgZ2V0Qm9keSgpLnRoZW4oZnVuY3Rpb24gcHJldmlld1dpdGhWYXJpYW50czIwMTcoJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KTogdm9pZCB7XG5cdG13Lmhvb2soJ3ZlLnNhdmVEaWFsb2cuc3RhdGVDaGFuZ2VkJykuYWRkKCgpOiB2b2lkID0+IHtcblx0XHRwcm9jZXNzVmlzdWFsRWRpdG9yKCRib2R5KTtcblx0fSk7XG59KTtcbiIsICJ7XG5cdFwiY29uZmlnS2V5XCI6IFwiZ2FkZ2V0LVByZXZpZXdXaXRoVmFyaWFudDIwMTdfX0luaXRpYWxpemVkXCIsXG5cdFwiY2xhc3NOYW1lXCI6IFwicHd2LTIwMTctdmFyaWFudFwiXG59XG4iLCAiY29uc3QgREFUQSA9IFtcblx0e3ZhcjogJ3poJywgaHRtbExhbmc6ICd6aCcsIG1zZzogJ3B3di0yMDE3LXpoJ30sXG5cdHt2YXI6ICd6aC1oYW5zJywgaHRtbExhbmc6ICd6aC1IYW5zJywgbXNnOiAncHd2LTIwMTctemgtaGFucyd9LFxuXHR7dmFyOiAnemgtaGFudCcsIGh0bWxMYW5nOiAnemgtSGFudCcsIG1zZzogJ3B3di0yMDE3LXpoLWhhbnQnfSxcblx0e3ZhcjogJ3poLWNuJywgaHRtbExhbmc6ICd6aC1IYW5zLUNOJywgbXNnOiAncHd2LTIwMTctemgtY24nfSxcblx0e3ZhcjogJ3poLWhrJywgaHRtbExhbmc6ICd6aC1IYW50LUhLJywgbXNnOiAncHd2LTIwMTctemgtaGsnfSxcblx0e3ZhcjogJ3poLW1vJywgaHRtbExhbmc6ICd6aC1IYW50LU1PJywgbXNnOiAncHd2LTIwMTctemgtbW8nfSxcblx0e3ZhcjogJ3poLW15JywgaHRtbExhbmc6ICd6aC1IYW5zLU1ZJywgbXNnOiAncHd2LTIwMTctemgtbXknfSxcblx0e3ZhcjogJ3poLXNnJywgaHRtbExhbmc6ICd6aC1IYW5zLVNHJywgbXNnOiAncHd2LTIwMTctemgtc2cnfSxcblx0e3ZhcjogJ3poLXR3JywgaHRtbExhbmc6ICd6aC1IYW50LVRXJywgbXNnOiAncHd2LTIwMTctemgtdHcnfSxcbl07XG5cbmV4cG9ydCB7REFUQX07XG4iLCAiY29uc3QgUFdWMjAxN21lc3NhZ2VzID0gKCkgPT4ge1xuXHRtdy5tZXNzYWdlcy5zZXQoe1xuXHRcdCdwd3YtMjAxNy1jYXB0aW9uJzogd2luZG93LndnVUxTKCfpgInmi6nor63oqIDlj5jkvZMnLCAn6YG45pOH6Kqe6KiA6K6K6auUJyksXG5cdFx0J3B3di0yMDE3LXpoJzogd2luZG93LndnVUxTKCfkuI3ovazmjaInLCAn5LiN6L2J5o+bJyksXG5cdFx0J3B3di0yMDE3LXpoLWhhbnMnOiAn566A5L2TJyxcblx0XHQncHd2LTIwMTctemgtaGFudCc6ICfnuYHpq5QnLFxuXHRcdCdwd3YtMjAxNy16aC1jbic6ICfkuK3lm73lpKfpmYbnroDkvZMnLFxuXHRcdCdwd3YtMjAxNy16aC1oayc6ICfkuK3lnIvpppnmuK/nuYHpq5QnLFxuXHRcdCdwd3YtMjAxNy16aC1tbyc6ICfkuK3lnIvmvrPploDnuYHpq5QnLFxuXHRcdCdwd3YtMjAxNy16aC1teSc6ICfpqazmnaXopb/kuprnroDkvZMnLFxuXHRcdCdwd3YtMjAxNy16aC1zZyc6ICfmlrDliqDlnaHnroDkvZMnLFxuXHRcdCdwd3YtMjAxNy16aC10dyc6ICfkuK3lnIvoh7rngaPnuYHpq5QnLFxuXHR9KTtcbn07XG5cbmV4cG9ydCB7UFdWMjAxN21lc3NhZ2VzfTtcbiIsICIvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10cy1jb21tZW50XG4vLyBAdHMtbm9jaGVja1xuaW1wb3J0ICcuL3Byb2Nlc3NWaXN1YWxFZGl0b3IubGVzcyc7XG5pbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge0RBVEF9IGZyb20gJy4vY29uc3RhbnQnO1xuaW1wb3J0IHtQV1YyMDE3bWVzc2FnZXN9IGZyb20gJy4vbWVzc2FnZXMnO1xuXG5QV1YyMDE3bWVzc2FnZXMoKTtcblxuY29uc3QgUGVuZGluZ1N0YWNrTGF5b3V0ID0gZnVuY3Rpb24gUGVuZGluZ1N0YWNrTGF5b3V0KGNvbmZpZykge1xuXHRQZW5kaW5nU3RhY2tMYXlvdXQuc3VwZXIuY2FsbCh0aGlzLCBjb25maWcpO1xuXHRPTy51aS5taXhpbi5QZW5kaW5nRWxlbWVudC5jYWxsKHRoaXMpO1xuXHR0aGlzLiRlbGVtZW50LmFkZENsYXNzKCdwd3YtMjAxNy1wZW5kaW5nU3RhY2tMYXlvdXQnKTtcbn07XG5cbk9PLmluaGVyaXRDbGFzcyhQZW5kaW5nU3RhY2tMYXlvdXQsIE9PLnVpLlN0YWNrTGF5b3V0KTtcbk9PLm1peGluQ2xhc3MoUGVuZGluZ1N0YWNrTGF5b3V0LCBPTy51aS5taXhpbi5QZW5kaW5nRWxlbWVudCk7XG5cbmNvbnN0IHByb2Nlc3NWaXN1YWxFZGl0b3IgPSAoJGJvZHkpID0+IHtcblx0Y29uc3Qge3NraW4sIHdnVXNlckxhbmd1YWdlLCB3Z1VzZXJWYXJpYW50fSA9IG13LmNvbmZpZy5nZXQoKTtcblx0bGV0IHZhcmlhbnQsIHRhcmdldCwgc2F2ZURpYWxvZywgZHJvcGRvd24sIHN0YWNrTGF5b3V0LCBwYW5lbExheW91dHMsIHdpbmRvd01hbmFnZXIsIGVycm9yRGlhbG9nO1xuXG5cdGNvbnN0IGNvbnN0cnVjdERvY3VtZW50ID0gKHRpdGxlLCB3aWtpdGV4dCwgY2F0ZWdvcmllcykgPT4ge1xuXHRcdGNvbnN0ICRyZXN1bHQgPSAkKCc8ZGl2PicpLmFkZENsYXNzKCdtdy1ib2R5IG13LWJvZHktY29udGVudCcpO1xuXG5cdFx0aWYgKHNraW4gPT09ICd2ZWN0b3InKSB7XG5cdFx0XHQvLyBBZGRpdGlvbmFsIGNsYXNzZXMgcmVxdWlyZWQgaW4gdmVjdG9yIHRvIGdldCBjb3JyZWN0IGFwcGVhcmFuY2Vcblx0XHRcdCRyZXN1bHQuYWRkQ2xhc3MoJ3ZlY3Rvci1ib2R5Jyk7XG5cdFx0fVxuXG5cdFx0JHJlc3VsdC5hcHBlbmQoXG5cdFx0XHQkKCc8aDE+JykuYWRkQ2xhc3MoJ2ZpcnN0SGVhZGluZycpLmh0bWwodGl0bGUpLFxuXHRcdFx0Ly8gQ2xhc3NlcyB1c2VkIGhlcmU6XG5cdFx0XHQvLyAqIG13LWNvbnRlbnQtbHRyXG5cdFx0XHQvLyAqIG13LWNvbnRlbnQtcnRsXG5cdFx0XHQkKCc8ZGl2PicpXG5cdFx0XHRcdC5hZGRDbGFzcyhgbXctY29udGVudC0ke213LmNvbmZpZy5nZXQoJ3dnVmlzdWFsRWRpdG9yJykucGFnZUxhbmd1YWdlRGlyfWApXG5cdFx0XHRcdC5hdHRyKFxuXHRcdFx0XHRcdCdsYW5nJyxcblx0XHRcdFx0XHREQVRBLmZpbmQoKGl0ZW0pID0+IHtcblx0XHRcdFx0XHRcdHJldHVybiBpdGVtLnZhciA9PT0gdmFyaWFudDtcblx0XHRcdFx0XHR9KS5odG1sTGFuZ1xuXHRcdFx0XHQpXG5cdFx0XHRcdC5odG1sKHdpa2l0ZXh0KSxcblx0XHRcdCQucGFyc2VIVE1MKGNhdGVnb3JpZXMpXG5cdFx0KTtcblxuXHRcdC8vIE1ha2Ugb3RoZXIgdGhpbmdzIGxpa2UgUmVmZXJlbmNlIFRvb2x0aXAgZnVuY3Rpb25cblx0XHRtdy5ob29rKCd3aWtpcGFnZS5jb250ZW50JykuZmlyZSgkcmVzdWx0KTtcblx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcblx0XHR2ZS50YXJnZXRMaW5rc1RvTmV3V2luZG93KCRyZXN1bHRbMF0pO1xuXHRcdHJldHVybiAkcmVzdWx0O1xuXHR9O1xuXG5cdGNvbnN0IGZldGNoUHJldmlldyA9ICgpID0+IHtcblx0XHRjb25zdCBkZWZlcnJlZCA9ICQuRGVmZXJyZWQoKTtcblx0XHQvLyBDdXJyZW50bHkgKEF1ZyAyMDIxKSwgUGFyc29pZCBBUEkgZG9lcyBub3QgaGF2ZSBmdWxsIExDIGZ1bmN0aW9uYWxpdHksXG5cdFx0Ly8gaGVuY2UgdXNlIHBhcnNlIEFQSSBpbnN0ZWFkLlxuXHRcdHRhcmdldFxuXHRcdFx0LmdldENvbnRlbnRBcGkoKVxuXHRcdFx0LnBvc3Qoe1xuXHRcdFx0XHRhY3Rpb246ICdwYXJzZScsXG5cdFx0XHRcdGRpc2FibGVlZGl0c2VjdGlvbjogdHJ1ZSxcblx0XHRcdFx0ZXJyb3Jmb3JtYXQ6ICdodG1sJyxcblx0XHRcdFx0ZXJyb3JsYW5nOiB3Z1VzZXJMYW5ndWFnZSxcblx0XHRcdFx0ZXJyb3JzdXNlbG9jYWw6IHRydWUsXG5cdFx0XHRcdGZvcm1hdHZlcnNpb246IDIsXG5cdFx0XHRcdHByb3A6ICd0ZXh0fGluZGljYXRvcnN8ZGlzcGxheXRpdGxlfGNhdGVnb3JpZXNodG1sfHBhcnNld2FybmluZ3NodG1sJyxcblx0XHRcdFx0cHN0OiB0cnVlLFxuXHRcdFx0XHRwcmV2aWV3OiB0cnVlLFxuXHRcdFx0XHR0aXRsZTogdGFyZ2V0LmdldFBhZ2VOYW1lKCksXG5cdFx0XHRcdHRleHQ6IHRhcmdldC5nZXREb2NUb1NhdmUoKSxcblx0XHRcdFx0dXNlbGFuZzogd2dVc2VyTGFuZ3VhZ2UsXG5cdFx0XHRcdHZhcmlhbnQsXG5cdFx0XHR9KVxuXHRcdFx0LnRoZW4oXG5cdFx0XHRcdChyZXNwb25zZSkgPT4ge1xuXHRcdFx0XHRcdHZvaWQgZGVmZXJyZWQucmVzb2x2ZShcblx0XHRcdFx0XHRcdGNvbnN0cnVjdERvY3VtZW50KFxuXHRcdFx0XHRcdFx0XHRyZXNwb25zZS5wYXJzZS5kaXNwbGF5dGl0bGUsXG5cdFx0XHRcdFx0XHRcdHJlc3BvbnNlLnBhcnNlLnRleHQsXG5cdFx0XHRcdFx0XHRcdHJlc3BvbnNlLnBhcnNlLmNhdGVnb3JpZXNodG1sXG5cdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fSxcblx0XHRcdFx0KGVycm9yLCBkZXRhaWwpID0+IHtcblx0XHRcdFx0XHR2b2lkIGRlZmVycmVkLnJlamVjdChkZXRhaWwpO1xuXHRcdFx0XHR9XG5cdFx0XHQpO1xuXHRcdHJldHVybiBkZWZlcnJlZDtcblx0fTtcblxuXHRjb25zdCBjaGFuZ2VWYXJpYW50ID0gZnVuY3Rpb24gY2hhbmdlVmFyaWFudCh2YWwpIHtcblx0XHRzYXZlRGlhbG9nLnByZXZpZXdQYW5lbC4kZWxlbWVudFswXS5mb2N1cygpO1xuXHRcdHZhcmlhbnQgPSB2YWw7XG5cblx0XHRjb25zdCB0YXJnZXRQYW5lbCA9IHN0YWNrTGF5b3V0LmZpbmRJdGVtRnJvbURhdGEodmFyaWFudCk7XG5cdFx0aWYgKHRhcmdldFBhbmVsLiRlbGVtZW50LmNoaWxkcmVuKCkubGVuZ3RoKSB7XG5cdFx0XHRzdGFja0xheW91dC5zZXRJdGVtKHRhcmdldFBhbmVsKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c3RhY2tMYXlvdXQucHVzaFBlbmRpbmcoKTtcblx0XHRcdGRyb3Bkb3duLnNldERpc2FibGVkKHRydWUpO1xuXG5cdFx0XHR2b2lkIGZldGNoUHJldmlldygpXG5cdFx0XHRcdC50aGVuKFxuXHRcdFx0XHRcdCgkcHJldmlld0NvbnRhaW5lcikgPT4ge1xuXHRcdFx0XHRcdFx0dGFyZ2V0UGFuZWwuJGVsZW1lbnQuYXBwZW5kKCRwcmV2aWV3Q29udGFpbmVyKTtcblx0XHRcdFx0XHRcdHN0YWNrTGF5b3V0LnNldEl0ZW0odGFyZ2V0UGFuZWwpO1xuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0KGVycm9yKSA9PiB7XG5cdFx0XHRcdFx0XHR3aW5kb3dNYW5hZ2VyXG5cdFx0XHRcdFx0XHRcdC5vcGVuV2luZG93KGVycm9yRGlhbG9nLCB7XG5cdFx0XHRcdFx0XHRcdFx0dGl0bGU6IE9PLnVpLm1zZygnb291aS1kaWFsb2ctcHJvY2Vzcy1lcnJvcicpLFxuXHRcdFx0XHRcdFx0XHRcdG1lc3NhZ2U6IHdpbmRvdy52ZS5pbml0LnRhcmdldC5nZXRDb250ZW50QXBpKCkuZ2V0RXJyb3JNZXNzYWdlKGVycm9yKSxcblx0XHRcdFx0XHRcdFx0XHRhY3Rpb25zOiBbXG5cdFx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGFjdGlvbjogJ3JlamVjdCcsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsOiBPTy51aS5kZWZlck1zZygnb291aS1kaWFsb2ctbWVzc2FnZS1yZWplY3QnKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZmxhZ3M6ICdzYWZlJyxcblx0XHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGFjdGlvbjogJ3JldHJ5Jyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0bGFiZWw6IE9PLnVpLmRlZmVyTXNnKCdvb3VpLWRpYWxvZy1wcm9jZXNzLXJldHJ5JyksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGZsYWdzOiBbJ3ByaW1hcnknLCAncHJvZ3Jlc3NpdmUnXSxcblx0XHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdFx0XSxcblx0XHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdFx0LmNsb3NlZC50aGVuKChkYXRhKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0aWYgKGRhdGEgJiYgZGF0YS5hY3Rpb24gPT09ICdyZXRyeScpIHtcblx0XHRcdFx0XHRcdFx0XHRcdC8vIERvIG5vdCB1c2Ugc2V0VmFsdWUoKSBzaW5jZSBpdCB3aWxsIG5vdCB0cmlnZ2VyIGV2ZW50XG5cdFx0XHRcdFx0XHRcdFx0XHRjaGFuZ2VWYXJpYW50KHZhcmlhbnQpO1xuXHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0XHQvLyBcInZhcmlhbnRcIiB3aWxsIGJlIHNldCBieSBldmVudCBoYW5kbGVyXG5cdFx0XHRcdFx0XHRcdFx0XHRkcm9wZG93bi5zZXRWYWx1ZShzdGFja0xheW91dC5nZXRDdXJyZW50SXRlbSgpLmdldERhdGEoKSk7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdClcblx0XHRcdFx0LmFsd2F5cygoKSA9PiB7XG5cdFx0XHRcdFx0c3RhY2tMYXlvdXQucG9wUGVuZGluZygpO1xuXHRcdFx0XHRcdGRyb3Bkb3duLnNldERpc2FibGVkKGZhbHNlKTtcblx0XHRcdFx0fSk7XG5cdFx0fVxuXHR9O1xuXG5cdGNvbnN0IHByZXZpZXdXaXRoVmFyaWFudCA9ICgpID0+IHtcblx0XHRjb25zdCBjdXJyZW50UGFuZWwgPSBzdGFja0xheW91dC5nZXRDdXJyZW50SXRlbSgpO1xuXG5cdFx0aWYgKGN1cnJlbnRQYW5lbC4kZWxlbWVudC5jaGlsZHJlbigpLmxlbmd0aCkge1xuXHRcdFx0c2F2ZURpYWxvZy5zd2FwUGFuZWwoJ3ByZXZpZXcnKTtcblx0XHRcdHNhdmVEaWFsb2cucHJldmlld1BhbmVsLiRlbGVtZW50LnByZXBlbmQoZHJvcGRvd24uJGVsZW1lbnQpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0YXJnZXQuZW1pdCgnc2F2ZVByZXZpZXcnKTtcblx0XHRcdHNhdmVEaWFsb2cucHVzaFBlbmRpbmcoKTtcblxuXHRcdFx0dm9pZCBmZXRjaFByZXZpZXcoKVxuXHRcdFx0XHQudGhlbihcblx0XHRcdFx0XHQoJHByZXZpZXdDb250ZW50KSA9PiB7XG5cdFx0XHRcdFx0XHR0YXJnZXRcblx0XHRcdFx0XHRcdFx0LmdldFN1cmZhY2UoKVxuXHRcdFx0XHRcdFx0XHQuZ2V0TW9kZWwoKVxuXHRcdFx0XHRcdFx0XHQuZ2V0RG9jdW1lbnQoKVxuXHRcdFx0XHRcdFx0XHQub25jZSgndHJhbnNhY3QnLCAoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0Zm9yIChjb25zdCBpdGVtIG9mIHBhbmVsTGF5b3V0cykge1xuXHRcdFx0XHRcdFx0XHRcdFx0aXRlbS4kZWxlbWVudC5lbXB0eSgpO1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRzYXZlRGlhbG9nLnN3YXBQYW5lbCgncHJldmlldycpO1xuXHRcdFx0XHRcdFx0Y3VycmVudFBhbmVsLiRlbGVtZW50LmFwcGVuZCgkcHJldmlld0NvbnRlbnQpO1xuXHRcdFx0XHRcdFx0c3RhY2tMYXlvdXQuc2V0SXRlbShzdGFja0xheW91dC5maW5kSXRlbUZyb21EYXRhKHZhcmlhbnQpKTtcblx0XHRcdFx0XHRcdGlmICghc2F2ZURpYWxvZy4kZWxlbWVudC5maW5kKGAuJHtPUFRJT05TLmNsYXNzTmFtZX1gKS5sZW5ndGgpIHtcblx0XHRcdFx0XHRcdFx0c2F2ZURpYWxvZy5wcmV2aWV3UGFuZWwuJGVsZW1lbnQucHJlcGVuZChkcm9wZG93bi4kZWxlbWVudCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHQoZXJyb3IpID0+IHtcblx0XHRcdFx0XHRcdHNhdmVEaWFsb2cuc2hvd0Vycm9ycyhcblx0XHRcdFx0XHRcdFx0bmV3IE9PLnVpLkVycm9yKHdpbmRvdy52ZS5pbml0LnRhcmdldC5nZXRDb250ZW50QXBpKCkuZ2V0RXJyb3JNZXNzYWdlKGVycm9yKSwge1xuXHRcdFx0XHRcdFx0XHRcdHJlY292ZXJhYmxlOiB0cnVlLFxuXHRcdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdClcblx0XHRcdFx0LmFsd2F5cygoKSA9PiB7XG5cdFx0XHRcdFx0c2F2ZURpYWxvZy5wb3BQZW5kaW5nKCk7XG5cdFx0XHRcdH0pO1xuXHRcdH1cblx0fTtcblxuXHRjb25zdCBpbml0ID0gKCkgPT4ge1xuXHRcdHZhcmlhbnQgPSB3Z1VzZXJWYXJpYW50O1xuXHRcdCh7dGFyZ2V0fSA9IHdpbmRvdy52ZS5pbml0KTtcblx0XHQoe3NhdmVEaWFsb2d9ID0gdGFyZ2V0KTtcblx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWVkaWF3aWtpL2NsYXNzLWRvY1xuXHRcdGRyb3Bkb3duID0gbmV3IE9PLnVpLkRyb3Bkb3duSW5wdXRXaWRnZXQoe1xuXHRcdFx0JG92ZXJsYXk6IHNhdmVEaWFsb2cuJG92ZXJsYXksXG5cdFx0XHRjbGFzc2VzOiBbT1BUSU9OUy5jbGFzc05hbWVdLFxuXHRcdFx0b3B0aW9uczogW1xuXHRcdFx0XHR7XG5cdFx0XHRcdFx0b3B0Z3JvdXA6IG13Lm1zZygncHd2LTIwMTctY2FwdGlvbicpLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHQuLi5EQVRBLm1hcCgoaXRlbSkgPT4ge1xuXHRcdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0XHRkYXRhOiBpdGVtLnZhcixcblx0XHRcdFx0XHRcdGxhYmVsOiBtdy5tc2coaXRlbS5tc2cpIC8qIGVzbGludC1kaXNhYmxlLWxpbmUgbWVkaWF3aWtpL21zZy1kb2MgKi8sXG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0fSksXG5cdFx0XHRdLFxuXHRcdFx0dmFsdWU6IHZhcmlhbnQsXG5cdFx0fSk7XG5cdFx0ZHJvcGRvd24ub24oJ2NoYW5nZScsIGNoYW5nZVZhcmlhbnQpO1xuXHRcdHBhbmVsTGF5b3V0cyA9IERBVEEubWFwKChpdGVtKSA9PiB7XG5cdFx0XHRyZXR1cm4gbmV3IE9PLnVpLlBhbmVsTGF5b3V0KHtcblx0XHRcdFx0ZXhwYW5kZWQ6IGZhbHNlLFxuXHRcdFx0XHRkYXRhOiBpdGVtLnZhcixcblx0XHRcdH0pO1xuXHRcdH0pO1xuXHRcdHN0YWNrTGF5b3V0ID0gbmV3IFBlbmRpbmdTdGFja0xheW91dCh7XG5cdFx0XHRleHBhbmRlZDogZmFsc2UsXG5cdFx0XHRpdGVtczogcGFuZWxMYXlvdXRzLFxuXHRcdH0pO1xuXHRcdHN0YWNrTGF5b3V0LnNldEl0ZW0oc3RhY2tMYXlvdXQuZmluZEl0ZW1Gcm9tRGF0YSh2YXJpYW50KSk7XG5cdFx0c2F2ZURpYWxvZy5wcmV2aWV3UGFuZWwuJGVsZW1lbnQuYXBwZW5kKHN0YWNrTGF5b3V0LiRlbGVtZW50KTtcblx0XHRlcnJvckRpYWxvZyA9IG5ldyBPTy51aS5NZXNzYWdlRGlhbG9nKCk7XG5cdFx0d2luZG93TWFuYWdlciA9IG5ldyBPTy51aS5XaW5kb3dNYW5hZ2VyKCk7XG5cdFx0d2luZG93TWFuYWdlci5hZGRXaW5kb3dzKFtlcnJvckRpYWxvZ10pO1xuXHRcdCRib2R5LmFwcGVuZCh3aW5kb3dNYW5hZ2VyLiRlbGVtZW50KTtcblxuXHRcdGNvbnN0IGhhbmRsZXJUb1JlbW92ZSA9ICdvblNhdmVEaWFsb2dQcmV2aWV3Jztcblx0XHRzYXZlRGlhbG9nLm9mZigncHJldmlldycsIGhhbmRsZXJUb1JlbW92ZSwgdGFyZ2V0KS5vbigncHJldmlldycsIHByZXZpZXdXaXRoVmFyaWFudCk7XG5cblx0XHQvLyBSZWluaXRpYWxpemF0aW9uIGlzIHJlcXVpcmVkIGZvciBzd2l0Y2hpbmcgYmV0d2VlbiBWaXN1YWxFZGl0b3IgYW5kIE5ldyBXaWtpdGV4dCBFZGl0b3IgKDIwMTcpXG5cdFx0bXcuaG9vaygndmUuYWN0aXZhdGlvbkNvbXBsZXRlJykuYWRkKCgpID0+IHtcblx0XHRcdGlmIChtdy5jb25maWcuZ2V0KE9QVElPTlMuY29uZmlnS2V5KSkge1xuXHRcdFx0XHRtdy5jb25maWcuc2V0KE9QVElPTlMuY29uZmlnS2V5LCBmYWxzZSk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH07XG5cblx0Ly8gR3VhcmQgYWdhaW5zdCBkb3VibGUgaW5jbHVzaW9uc1xuXHRpZiAoIW13LmNvbmZpZy5nZXQoT1BUSU9OUy5jb25maWdLZXkpKSB7XG5cdFx0aW5pdCgpO1xuXG5cdFx0Ly8gU2V0IGd1YXJkXG5cdFx0bXcuY29uZmlnLnNldChPUFRJT05TLmNvbmZpZ0tleSwgdHJ1ZSk7XG5cdH1cbn07XG5c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T0FBR08sT0FBT0wsSUFBWVQsV0FBVyxJQUFJO0VBQ3RDO0FBQ0Q7O0FKbFBBLE1BQUEsR0FBS0Ysa0JBQUEySixTQUFRLEVBQUU3RSxLQUFLLFNBQVM4RSx3QkFBd0IvSCxPQUFzQztBQUMxRnBCLEtBQUcrQyxLQUFLLDRCQUE0QixFQUFFa0csSUFBSSxNQUFZO0FBQ3JEOUgsd0JBQW9CQyxLQUFLO0VBQzFCLENBQUM7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogWyJpbXBvcnRfZXh0X2dhZGdldCIsICJyZXF1aXJlIiwgImNvbmZpZ0tleSIsICJjbGFzc05hbWUiLCAiREFUQSIsICJ2YXIiLCAiaHRtbExhbmciLCAibXNnIiwgIlBXVjIwMTdtZXNzYWdlcyIsICJtdyIsICJtZXNzYWdlcyIsICJzZXQiLCAid2luZG93IiwgIndnVUxTIiwgIlBlbmRpbmdTdGFja0xheW91dCIsICJQZW5kaW5nU3RhY2tMYXlvdXQyIiwgImNvbmZpZyIsICJzdXBlciIsICJjYWxsIiwgIk9PIiwgInVpIiwgIm1peGluIiwgIlBlbmRpbmdFbGVtZW50IiwgIiRlbGVtZW50IiwgImFkZENsYXNzIiwgImluaGVyaXRDbGFzcyIsICJTdGFja0xheW91dCIsICJtaXhpbkNsYXNzIiwgInByb2Nlc3NWaXN1YWxFZGl0b3IiLCAiJGJvZHkiLCAic2tpbiIsICJ3Z1VzZXJMYW5ndWFnZSIsICJ3Z1VzZXJWYXJpYW50IiwgImdldCIsICJ2YXJpYW50IiwgInRhcmdldCIsICJzYXZlRGlhbG9nIiwgImRyb3Bkb3duIiwgInN0YWNrTGF5b3V0IiwgInBhbmVsTGF5b3V0cyIsICJ3aW5kb3dNYW5hZ2VyIiwgImVycm9yRGlhbG9nIiwgImNvbnN0cnVjdERvY3VtZW50IiwgInRpdGxlIiwgIndpa2l0ZXh0IiwgImNhdGVnb3JpZXMiLCAiJHJlc3VsdCIsICIkIiwgImFwcGVuZCIsICJodG1sIiwgImNvbmNhdCIsICJwYWdlTGFuZ3VhZ2VEaXIiLCAiYXR0ciIsICJmaW5kIiwgIml0ZW0iLCAicGFyc2VIVE1MIiwgImhvb2siLCAiZmlyZSIsICJ2ZSIsICJ0YXJnZXRMaW5rc1RvTmV3V2luZG93IiwgImZldGNoUHJldmlldyIsICJkZWZlcnJlZCIsICJEZWZlcnJlZCIsICJnZXRDb250ZW50QXBpIiwgInBvc3QiLCAiYWN0aW9uIiwgImRpc2FibGVlZGl0c2VjdGlvbiIsICJlcnJvcmZvcm1hdCIsICJlcnJvcmxhbmciLCAiZXJyb3JzdXNlbG9jYWwiLCAiZm9ybWF0dmVyc2lvbiIsICJwcm9wIiwgInBzdCIsICJwcmV2aWV3IiwgImdldFBhZ2VOYW1lIiwgInRleHQiLCAiZ2V0RG9jVG9TYXZlIiwgInVzZWxhbmciLCAidGhlbiIsICJyZXNwb25zZSIsICJyZXNvbHZlIiwgInBhcnNlIiwgImRpc3BsYXl0aXRsZSIsICJjYXRlZ29yaWVzaHRtbCIsICJlcnJvciIsICJkZXRhaWwiLCAicmVqZWN0IiwgImNoYW5nZVZhcmlhbnQiLCAiY2hhbmdlVmFyaWFudDIiLCAidmFsIiwgInByZXZpZXdQYW5lbCIsICJmb2N1cyIsICJ0YXJnZXRQYW5lbCIsICJmaW5kSXRlbUZyb21EYXRhIiwgImNoaWxkcmVuIiwgImxlbmd0aCIsICJzZXRJdGVtIiwgInB1c2hQZW5kaW5nIiwgInNldERpc2FibGVkIiwgIiRwcmV2aWV3Q29udGFpbmVyIiwgIm9wZW5XaW5kb3ciLCAibWVzc2FnZSIsICJpbml0IiwgImdldEVycm9yTWVzc2FnZSIsICJhY3Rpb25zIiwgImxhYmVsIiwgImRlZmVyTXNnIiwgImZsYWdzIiwgImNsb3NlZCIsICJkYXRhIiwgInNldFZhbHVlIiwgImdldEN1cnJlbnRJdGVtIiwgImdldERhdGEiLCAiYWx3YXlzIiwgInBvcFBlbmRpbmciLCAicHJldmlld1dpdGhWYXJpYW50IiwgImN1cnJlbnRQYW5lbCIsICJzd2FwUGFuZWwiLCAicHJlcGVuZCIsICJlbWl0IiwgIiRwcmV2aWV3Q29udGVudCIsICJnZXRTdXJmYWNlIiwgImdldE1vZGVsIiwgImdldERvY3VtZW50IiwgIm9uY2UiLCAiX2l0ZXJhdG9yIiwgIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwgIl9zdGVwIiwgInMiLCAibiIsICJkb25lIiwgInZhbHVlIiwgImVtcHR5IiwgImVyciIsICJlIiwgImYiLCAic2hvd0Vycm9ycyIsICJFcnJvciIsICJyZWNvdmVyYWJsZSIsICJEcm9wZG93bklucHV0V2lkZ2V0IiwgIiRvdmVybGF5IiwgImNsYXNzZXMiLCAib3B0aW9ucyIsICJvcHRncm91cCIsICJtYXAiLCAib24iLCAiUGFuZWxMYXlvdXQiLCAiZXhwYW5kZWQiLCAiaXRlbXMiLCAiTWVzc2FnZURpYWxvZyIsICJXaW5kb3dNYW5hZ2VyIiwgImFkZFdpbmRvd3MiLCAiaGFuZGxlclRvUmVtb3ZlIiwgIm9mZiIsICJhZGQiLCAiZ2V0Qm9keSIsICJwcmV2aWV3V2l0aFZhcmlhbnRzMjAxNyJdCn0K

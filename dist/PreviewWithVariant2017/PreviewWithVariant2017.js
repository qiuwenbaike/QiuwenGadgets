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
      formatversion: "2",
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1ByZXZpZXdXaXRoVmFyaWFudDIwMTcvUHJldmlld1dpdGhWYXJpYW50MjAxNy50cyIsICJzcmMvUHJldmlld1dpdGhWYXJpYW50MjAxNy9vcHRpb25zLmpzb24iLCAic3JjL1ByZXZpZXdXaXRoVmFyaWFudDIwMTcvbW9kdWxlcy9jb25zdGFudC50cyIsICJzcmMvUHJldmlld1dpdGhWYXJpYW50MjAxNy9tb2R1bGVzL21lc3NhZ2VzLnRzIiwgInNyYy9QcmV2aWV3V2l0aFZhcmlhbnQyMDE3L21vZHVsZXMvcHJvY2Vzc1Zpc3VhbEVkaXRvci5qcyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHtnZXRCb2R5fSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuaW1wb3J0IHtwcm9jZXNzVmlzdWFsRWRpdG9yfSBmcm9tICcuL21vZHVsZXMvcHJvY2Vzc1Zpc3VhbEVkaXRvci5qcyc7XG5cbnZvaWQgZ2V0Qm9keSgpLnRoZW4oZnVuY3Rpb24gcHJldmlld1dpdGhWYXJpYW50czIwMTcoJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KTogdm9pZCB7XG5cdG13Lmhvb2soJ3ZlLnNhdmVEaWFsb2cuc3RhdGVDaGFuZ2VkJykuYWRkKCgpOiB2b2lkID0+IHtcblx0XHRwcm9jZXNzVmlzdWFsRWRpdG9yKCRib2R5KTtcblx0fSk7XG59KTtcbiIsICJ7XG5cdFwiY29uZmlnS2V5XCI6IFwiZ2FkZ2V0LVByZXZpZXdXaXRoVmFyaWFudDIwMTdfX0luaXRpYWxpemVkXCIsXG5cdFwiY2xhc3NOYW1lXCI6IFwicHd2LTIwMTctdmFyaWFudFwiXG59XG4iLCAiY29uc3QgREFUQSA9IFtcblx0e3ZhcjogJ3poJywgaHRtbExhbmc6ICd6aCcsIG1zZzogJ3B3di0yMDE3LXpoJ30sXG5cdHt2YXI6ICd6aC1oYW5zJywgaHRtbExhbmc6ICd6aC1IYW5zJywgbXNnOiAncHd2LTIwMTctemgtaGFucyd9LFxuXHR7dmFyOiAnemgtaGFudCcsIGh0bWxMYW5nOiAnemgtSGFudCcsIG1zZzogJ3B3di0yMDE3LXpoLWhhbnQnfSxcblx0e3ZhcjogJ3poLWNuJywgaHRtbExhbmc6ICd6aC1IYW5zLUNOJywgbXNnOiAncHd2LTIwMTctemgtY24nfSxcblx0e3ZhcjogJ3poLWhrJywgaHRtbExhbmc6ICd6aC1IYW50LUhLJywgbXNnOiAncHd2LTIwMTctemgtaGsnfSxcblx0e3ZhcjogJ3poLW1vJywgaHRtbExhbmc6ICd6aC1IYW50LU1PJywgbXNnOiAncHd2LTIwMTctemgtbW8nfSxcblx0e3ZhcjogJ3poLW15JywgaHRtbExhbmc6ICd6aC1IYW5zLU1ZJywgbXNnOiAncHd2LTIwMTctemgtbXknfSxcblx0e3ZhcjogJ3poLXNnJywgaHRtbExhbmc6ICd6aC1IYW5zLVNHJywgbXNnOiAncHd2LTIwMTctemgtc2cnfSxcblx0e3ZhcjogJ3poLXR3JywgaHRtbExhbmc6ICd6aC1IYW50LVRXJywgbXNnOiAncHd2LTIwMTctemgtdHcnfSxcbl07XG5cbmV4cG9ydCB7REFUQX07XG4iLCAiY29uc3QgUFdWMjAxN21lc3NhZ2VzID0gKCkgPT4ge1xuXHRtdy5tZXNzYWdlcy5zZXQoe1xuXHRcdCdwd3YtMjAxNy1jYXB0aW9uJzogd2luZG93LndnVUxTKCfpgInmi6nor63oqIDlj5jkvZMnLCAn6YG45pOH6Kqe6KiA6K6K6auUJyksXG5cdFx0J3B3di0yMDE3LXpoJzogd2luZG93LndnVUxTKCfkuI3ovazmjaInLCAn5LiN6L2J5o+bJyksXG5cdFx0J3B3di0yMDE3LXpoLWhhbnMnOiAn566A5L2TJyxcblx0XHQncHd2LTIwMTctemgtaGFudCc6ICfnuYHpq5QnLFxuXHRcdCdwd3YtMjAxNy16aC1jbic6ICfkuK3lm73lpKfpmYbnroDkvZMnLFxuXHRcdCdwd3YtMjAxNy16aC1oayc6ICfkuK3lnIvpppnmuK/nuYHpq5QnLFxuXHRcdCdwd3YtMjAxNy16aC1tbyc6ICfkuK3lnIvmvrPploDnuYHpq5QnLFxuXHRcdCdwd3YtMjAxNy16aC1teSc6ICfpqazmnaXopb/kuprnroDkvZMnLFxuXHRcdCdwd3YtMjAxNy16aC1zZyc6ICfmlrDliqDlnaHnroDkvZMnLFxuXHRcdCdwd3YtMjAxNy16aC10dyc6ICfkuK3lnIvoh7rngaPnuYHpq5QnLFxuXHR9KTtcbn07XG5cbmV4cG9ydCB7UFdWMjAxN21lc3NhZ2VzfTtcbiIsICIvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10cy1jb21tZW50XG4vLyBAdHMtbm9jaGVja1xuaW1wb3J0ICcuL3Byb2Nlc3NWaXN1YWxFZGl0b3IubGVzcyc7XG5pbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge0RBVEF9IGZyb20gJy4vY29uc3RhbnQnO1xuaW1wb3J0IHtQV1YyMDE3bWVzc2FnZXN9IGZyb20gJy4vbWVzc2FnZXMnO1xuXG5QV1YyMDE3bWVzc2FnZXMoKTtcblxuY29uc3QgUGVuZGluZ1N0YWNrTGF5b3V0ID0gZnVuY3Rpb24gUGVuZGluZ1N0YWNrTGF5b3V0KGNvbmZpZykge1xuXHRQZW5kaW5nU3RhY2tMYXlvdXQuc3VwZXIuY2FsbCh0aGlzLCBjb25maWcpO1xuXHRPTy51aS5taXhpbi5QZW5kaW5nRWxlbWVudC5jYWxsKHRoaXMpO1xuXHR0aGlzLiRlbGVtZW50LmFkZENsYXNzKCdwd3YtMjAxNy1wZW5kaW5nU3RhY2tMYXlvdXQnKTtcbn07XG5cbk9PLmluaGVyaXRDbGFzcyhQZW5kaW5nU3RhY2tMYXlvdXQsIE9PLnVpLlN0YWNrTGF5b3V0KTtcbk9PLm1peGluQ2xhc3MoUGVuZGluZ1N0YWNrTGF5b3V0LCBPTy51aS5taXhpbi5QZW5kaW5nRWxlbWVudCk7XG5cbmNvbnN0IHByb2Nlc3NWaXN1YWxFZGl0b3IgPSAoJGJvZHkpID0+IHtcblx0Y29uc3Qge3NraW4sIHdnVXNlckxhbmd1YWdlLCB3Z1VzZXJWYXJpYW50fSA9IG13LmNvbmZpZy5nZXQoKTtcblx0bGV0IHZhcmlhbnQsIHRhcmdldCwgc2F2ZURpYWxvZywgZHJvcGRvd24sIHN0YWNrTGF5b3V0LCBwYW5lbExheW91dHMsIHdpbmRvd01hbmFnZXIsIGVycm9yRGlhbG9nO1xuXG5cdGNvbnN0IGNvbnN0cnVjdERvY3VtZW50ID0gKHRpdGxlLCB3aWtpdGV4dCwgY2F0ZWdvcmllcykgPT4ge1xuXHRcdGNvbnN0ICRyZXN1bHQgPSAkKCc8ZGl2PicpLmFkZENsYXNzKCdtdy1ib2R5IG13LWJvZHktY29udGVudCcpO1xuXG5cdFx0aWYgKHNraW4gPT09ICd2ZWN0b3InKSB7XG5cdFx0XHQvLyBBZGRpdGlvbmFsIGNsYXNzZXMgcmVxdWlyZWQgaW4gdmVjdG9yIHRvIGdldCBjb3JyZWN0IGFwcGVhcmFuY2Vcblx0XHRcdCRyZXN1bHQuYWRkQ2xhc3MoJ3ZlY3Rvci1ib2R5Jyk7XG5cdFx0fVxuXG5cdFx0JHJlc3VsdC5hcHBlbmQoXG5cdFx0XHQkKCc8aDE+JykuYWRkQ2xhc3MoJ2ZpcnN0SGVhZGluZycpLmh0bWwodGl0bGUpLFxuXHRcdFx0Ly8gQ2xhc3NlcyB1c2VkIGhlcmU6XG5cdFx0XHQvLyAqIG13LWNvbnRlbnQtbHRyXG5cdFx0XHQvLyAqIG13LWNvbnRlbnQtcnRsXG5cdFx0XHQkKCc8ZGl2PicpXG5cdFx0XHRcdC5hZGRDbGFzcyhgbXctY29udGVudC0ke213LmNvbmZpZy5nZXQoJ3dnVmlzdWFsRWRpdG9yJykucGFnZUxhbmd1YWdlRGlyfWApXG5cdFx0XHRcdC5hdHRyKFxuXHRcdFx0XHRcdCdsYW5nJyxcblx0XHRcdFx0XHREQVRBLmZpbmQoKGl0ZW0pID0+IHtcblx0XHRcdFx0XHRcdHJldHVybiBpdGVtLnZhciA9PT0gdmFyaWFudDtcblx0XHRcdFx0XHR9KS5odG1sTGFuZ1xuXHRcdFx0XHQpXG5cdFx0XHRcdC5odG1sKHdpa2l0ZXh0KSxcblx0XHRcdCQucGFyc2VIVE1MKGNhdGVnb3JpZXMpXG5cdFx0KTtcblxuXHRcdC8vIE1ha2Ugb3RoZXIgdGhpbmdzIGxpa2UgUmVmZXJlbmNlIFRvb2x0aXAgZnVuY3Rpb25cblx0XHRtdy5ob29rKCd3aWtpcGFnZS5jb250ZW50JykuZmlyZSgkcmVzdWx0KTtcblx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcblx0XHR2ZS50YXJnZXRMaW5rc1RvTmV3V2luZG93KCRyZXN1bHRbMF0pO1xuXHRcdHJldHVybiAkcmVzdWx0O1xuXHR9O1xuXG5cdGNvbnN0IGZldGNoUHJldmlldyA9ICgpID0+IHtcblx0XHRjb25zdCBkZWZlcnJlZCA9ICQuRGVmZXJyZWQoKTtcblx0XHQvLyBDdXJyZW50bHkgKEF1ZyAyMDIxKSwgUGFyc29pZCBBUEkgZG9lcyBub3QgaGF2ZSBmdWxsIExDIGZ1bmN0aW9uYWxpdHksXG5cdFx0Ly8gaGVuY2UgdXNlIHBhcnNlIEFQSSBpbnN0ZWFkLlxuXHRcdHRhcmdldFxuXHRcdFx0LmdldENvbnRlbnRBcGkoKVxuXHRcdFx0LnBvc3Qoe1xuXHRcdFx0XHRhY3Rpb246ICdwYXJzZScsXG5cdFx0XHRcdGRpc2FibGVlZGl0c2VjdGlvbjogdHJ1ZSxcblx0XHRcdFx0ZXJyb3Jmb3JtYXQ6ICdodG1sJyxcblx0XHRcdFx0ZXJyb3JsYW5nOiB3Z1VzZXJMYW5ndWFnZSxcblx0XHRcdFx0ZXJyb3JzdXNlbG9jYWw6IHRydWUsXG5cdFx0XHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRcdFx0cHJvcDogJ3RleHR8aW5kaWNhdG9yc3xkaXNwbGF5dGl0bGV8Y2F0ZWdvcmllc2h0bWx8cGFyc2V3YXJuaW5nc2h0bWwnLFxuXHRcdFx0XHRwc3Q6IHRydWUsXG5cdFx0XHRcdHByZXZpZXc6IHRydWUsXG5cdFx0XHRcdHRpdGxlOiB0YXJnZXQuZ2V0UGFnZU5hbWUoKSxcblx0XHRcdFx0dGV4dDogdGFyZ2V0LmdldERvY1RvU2F2ZSgpLFxuXHRcdFx0XHR1c2VsYW5nOiB3Z1VzZXJMYW5ndWFnZSxcblx0XHRcdFx0dmFyaWFudCxcblx0XHRcdH0pXG5cdFx0XHQudGhlbihcblx0XHRcdFx0KHJlc3BvbnNlKSA9PiB7XG5cdFx0XHRcdFx0dm9pZCBkZWZlcnJlZC5yZXNvbHZlKFxuXHRcdFx0XHRcdFx0Y29uc3RydWN0RG9jdW1lbnQoXG5cdFx0XHRcdFx0XHRcdHJlc3BvbnNlLnBhcnNlLmRpc3BsYXl0aXRsZSxcblx0XHRcdFx0XHRcdFx0cmVzcG9uc2UucGFyc2UudGV4dCxcblx0XHRcdFx0XHRcdFx0cmVzcG9uc2UucGFyc2UuY2F0ZWdvcmllc2h0bWxcblx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHQoZXJyb3IsIGRldGFpbCkgPT4ge1xuXHRcdFx0XHRcdHZvaWQgZGVmZXJyZWQucmVqZWN0KGRldGFpbCk7XG5cdFx0XHRcdH1cblx0XHRcdCk7XG5cdFx0cmV0dXJuIGRlZmVycmVkO1xuXHR9O1xuXG5cdGNvbnN0IGNoYW5nZVZhcmlhbnQgPSBmdW5jdGlvbiBjaGFuZ2VWYXJpYW50KHZhbCkge1xuXHRcdHNhdmVEaWFsb2cucHJldmlld1BhbmVsLiRlbGVtZW50WzBdLmZvY3VzKCk7XG5cdFx0dmFyaWFudCA9IHZhbDtcblxuXHRcdGNvbnN0IHRhcmdldFBhbmVsID0gc3RhY2tMYXlvdXQuZmluZEl0ZW1Gcm9tRGF0YSh2YXJpYW50KTtcblx0XHRpZiAodGFyZ2V0UGFuZWwuJGVsZW1lbnQuY2hpbGRyZW4oKS5sZW5ndGgpIHtcblx0XHRcdHN0YWNrTGF5b3V0LnNldEl0ZW0odGFyZ2V0UGFuZWwpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzdGFja0xheW91dC5wdXNoUGVuZGluZygpO1xuXHRcdFx0ZHJvcGRvd24uc2V0RGlzYWJsZWQodHJ1ZSk7XG5cblx0XHRcdHZvaWQgZmV0Y2hQcmV2aWV3KClcblx0XHRcdFx0LnRoZW4oXG5cdFx0XHRcdFx0KCRwcmV2aWV3Q29udGFpbmVyKSA9PiB7XG5cdFx0XHRcdFx0XHR0YXJnZXRQYW5lbC4kZWxlbWVudC5hcHBlbmQoJHByZXZpZXdDb250YWluZXIpO1xuXHRcdFx0XHRcdFx0c3RhY2tMYXlvdXQuc2V0SXRlbSh0YXJnZXRQYW5lbCk7XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHQoZXJyb3IpID0+IHtcblx0XHRcdFx0XHRcdHdpbmRvd01hbmFnZXJcblx0XHRcdFx0XHRcdFx0Lm9wZW5XaW5kb3coZXJyb3JEaWFsb2csIHtcblx0XHRcdFx0XHRcdFx0XHR0aXRsZTogT08udWkubXNnKCdvb3VpLWRpYWxvZy1wcm9jZXNzLWVycm9yJyksXG5cdFx0XHRcdFx0XHRcdFx0bWVzc2FnZTogd2luZG93LnZlLmluaXQudGFyZ2V0LmdldENvbnRlbnRBcGkoKS5nZXRFcnJvck1lc3NhZ2UoZXJyb3IpLFxuXHRcdFx0XHRcdFx0XHRcdGFjdGlvbnM6IFtcblx0XHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0YWN0aW9uOiAncmVqZWN0Jyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0bGFiZWw6IE9PLnVpLmRlZmVyTXNnKCdvb3VpLWRpYWxvZy1tZXNzYWdlLXJlamVjdCcpLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRmbGFnczogJ3NhZmUnLFxuXHRcdFx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0YWN0aW9uOiAncmV0cnknLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRsYWJlbDogT08udWkuZGVmZXJNc2coJ29vdWktZGlhbG9nLXByb2Nlc3MtcmV0cnknKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZmxhZ3M6IFsncHJpbWFyeScsICdwcm9ncmVzc2l2ZSddLFxuXHRcdFx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0XHRdLFxuXHRcdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdFx0XHQuY2xvc2VkLnRoZW4oKGRhdGEpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRpZiAoZGF0YSAmJiBkYXRhLmFjdGlvbiA9PT0gJ3JldHJ5Jykge1xuXHRcdFx0XHRcdFx0XHRcdFx0Ly8gRG8gbm90IHVzZSBzZXRWYWx1ZSgpIHNpbmNlIGl0IHdpbGwgbm90IHRyaWdnZXIgZXZlbnRcblx0XHRcdFx0XHRcdFx0XHRcdGNoYW5nZVZhcmlhbnQodmFyaWFudCk7XG5cdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHRcdC8vIFwidmFyaWFudFwiIHdpbGwgYmUgc2V0IGJ5IGV2ZW50IGhhbmRsZXJcblx0XHRcdFx0XHRcdFx0XHRcdGRyb3Bkb3duLnNldFZhbHVlKHN0YWNrTGF5b3V0LmdldEN1cnJlbnRJdGVtKCkuZ2V0RGF0YSgpKTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0KVxuXHRcdFx0XHQuYWx3YXlzKCgpID0+IHtcblx0XHRcdFx0XHRzdGFja0xheW91dC5wb3BQZW5kaW5nKCk7XG5cdFx0XHRcdFx0ZHJvcGRvd24uc2V0RGlzYWJsZWQoZmFsc2UpO1xuXHRcdFx0XHR9KTtcblx0XHR9XG5cdH07XG5cblx0Y29uc3QgcHJldmlld1dpdGhWYXJpYW50ID0gKCkgPT4ge1xuXHRcdGNvbnN0IGN1cnJlbnRQYW5lbCA9IHN0YWNrTGF5b3V0LmdldEN1cnJlbnRJdGVtKCk7XG5cblx0XHRpZiAoY3VycmVudFBhbmVsLiRlbGVtZW50LmNoaWxkcmVuKCkubGVuZ3RoKSB7XG5cdFx0XHRzYXZlRGlhbG9nLnN3YXBQYW5lbCgncHJldmlldycpO1xuXHRcdFx0c2F2ZURpYWxvZy5wcmV2aWV3UGFuZWwuJGVsZW1lbnQucHJlcGVuZChkcm9wZG93bi4kZWxlbWVudCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRhcmdldC5lbWl0KCdzYXZlUHJldmlldycpO1xuXHRcdFx0c2F2ZURpYWxvZy5wdXNoUGVuZGluZygpO1xuXG5cdFx0XHR2b2lkIGZldGNoUHJldmlldygpXG5cdFx0XHRcdC50aGVuKFxuXHRcdFx0XHRcdCgkcHJldmlld0NvbnRlbnQpID0+IHtcblx0XHRcdFx0XHRcdHRhcmdldFxuXHRcdFx0XHRcdFx0XHQuZ2V0U3VyZmFjZSgpXG5cdFx0XHRcdFx0XHRcdC5nZXRNb2RlbCgpXG5cdFx0XHRcdFx0XHRcdC5nZXREb2N1bWVudCgpXG5cdFx0XHRcdFx0XHRcdC5vbmNlKCd0cmFuc2FjdCcsICgpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRmb3IgKGNvbnN0IGl0ZW0gb2YgcGFuZWxMYXlvdXRzKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRpdGVtLiRlbGVtZW50LmVtcHR5KCk7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdHNhdmVEaWFsb2cuc3dhcFBhbmVsKCdwcmV2aWV3Jyk7XG5cdFx0XHRcdFx0XHRjdXJyZW50UGFuZWwuJGVsZW1lbnQuYXBwZW5kKCRwcmV2aWV3Q29udGVudCk7XG5cdFx0XHRcdFx0XHRzdGFja0xheW91dC5zZXRJdGVtKHN0YWNrTGF5b3V0LmZpbmRJdGVtRnJvbURhdGEodmFyaWFudCkpO1xuXHRcdFx0XHRcdFx0aWYgKCFzYXZlRGlhbG9nLiRlbGVtZW50LmZpbmQoYC4ke09QVElPTlMuY2xhc3NOYW1lfWApLmxlbmd0aCkge1xuXHRcdFx0XHRcdFx0XHRzYXZlRGlhbG9nLnByZXZpZXdQYW5lbC4kZWxlbWVudC5wcmVwZW5kKGRyb3Bkb3duLiRlbGVtZW50KTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdChlcnJvcikgPT4ge1xuXHRcdFx0XHRcdFx0c2F2ZURpYWxvZy5zaG93RXJyb3JzKFxuXHRcdFx0XHRcdFx0XHRuZXcgT08udWkuRXJyb3Iod2luZG93LnZlLmluaXQudGFyZ2V0LmdldENvbnRlbnRBcGkoKS5nZXRFcnJvck1lc3NhZ2UoZXJyb3IpLCB7XG5cdFx0XHRcdFx0XHRcdFx0cmVjb3ZlcmFibGU6IHRydWUsXG5cdFx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0KVxuXHRcdFx0XHQuYWx3YXlzKCgpID0+IHtcblx0XHRcdFx0XHRzYXZlRGlhbG9nLnBvcFBlbmRpbmcoKTtcblx0XHRcdFx0fSk7XG5cdFx0fVxuXHR9O1xuXG5cdGNvbnN0IGluaXQgPSAoKSA9PiB7XG5cdFx0dmFyaWFudCA9IHdnVXNlclZhcmlhbnQ7XG5cdFx0KHt0YXJnZXR9ID0gd2luZG93LnZlLmluaXQpO1xuXHRcdCh7c2F2ZURpYWxvZ30gPSB0YXJnZXQpO1xuXHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtZWRpYXdpa2kvY2xhc3MtZG9jXG5cdFx0ZHJvcGRvd24gPSBuZXcgT08udWkuRHJvcGRvd25JbnB1dFdpZGdldCh7XG5cdFx0XHQkb3ZlcmxheTogc2F2ZURpYWxvZy4kb3ZlcmxheSxcblx0XHRcdGNsYXNzZXM6IFtPUFRJT05TLmNsYXNzTmFtZV0sXG5cdFx0XHRvcHRpb25zOiBbXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRvcHRncm91cDogbXcubXNnKCdwd3YtMjAxNy1jYXB0aW9uJyksXG5cdFx0XHRcdH0sXG5cdFx0XHRcdC4uLkRBVEEubWFwKChpdGVtKSA9PiB7XG5cdFx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHRcdGRhdGE6IGl0ZW0udmFyLFxuXHRcdFx0XHRcdFx0bGFiZWw6IG13Lm1zZyhpdGVtLm1zZykgLyogZXNsaW50LWRpc2FibGUtbGluZSBtZWRpYXdpa2kvbXNnLWRvYyAqLyxcblx0XHRcdFx0XHR9O1xuXHRcdFx0XHR9KSxcblx0XHRcdF0sXG5cdFx0XHR2YWx1ZTogdmFyaWFudCxcblx0XHR9KTtcblx0XHRkcm9wZG93bi5vbignY2hhbmdlJywgY2hhbmdlVmFyaWFudCk7XG5cdFx0cGFuZWxMYXlvdXRzID0gREFUQS5tYXAoKGl0ZW0pID0+IHtcblx0XHRcdHJldHVybiBuZXcgT08udWkuUGFuZWxMYXlvdXQoe1xuXHRcdFx0XHRleHBhbmRlZDogZmFsc2UsXG5cdFx0XHRcdGRhdGE6IGl0ZW0udmFyLFxuXHRcdFx0fSk7XG5cdFx0fSk7XG5cdFx0c3RhY2tMYXlvdXQgPSBuZXcgUGVuZGluZ1N0YWNrTGF5b3V0KHtcblx0XHRcdGV4cGFuZGVkOiBmYWxzZSxcblx0XHRcdGl0ZW1zOiBwYW5lbExheW91dHMsXG5cdFx0fSk7XG5cdFx0c3RhY2tMYXlvdXQuc2V0SXRlbShzdGFja0xheW91dC5maW5kSXRlbUZyb21EYXRhKHZhcmlhbnQpKTtcblx0XHRzYXZlRGlhbG9nLnByZXZpZXdQYW5lbC4kZWxlbWVudC5hcHBlbmQoc3RhY2tMYXlvdXQuJGVsZW1lbnQpO1xuXHRcdGVycm9yRGlhbG9nID0gbmV3IE9PLnVpLk1lc3NhZ2VEaWFsb2coKTtcblx0XHR3aW5kb3dNYW5hZ2VyID0gbmV3IE9PLnVpLldpbmRvd01hbmFnZXIoKTtcblx0XHR3aW5kb3dNYW5hZ2VyLmFkZFdpbmRvd3MoW2Vycm9yRGlhbG9nXSk7XG5cdFx0JGJvZHkuYXBwZW5kKHdpbmRvd01hbmFnZXIuJGVsZW1lbnQpO1xuXG5cdFx0Y29uc3QgaGFuZGxlclRvUmVtb3ZlID0gJ29uU2F2ZURpYWxvZ1ByZXZpZXcnO1xuXHRcdHNhdmVEaWFsb2cub2ZmKCdwcmV2aWV3JywgaGFuZGxlclRvUmVtb3ZlLCB0YXJnZXQpLm9uKCdwcmV2aWV3JywgcHJldmlld1dpdGhWYXJpYW50KTtcblxuXHRcdC8vIFJlaW5pdGlhbGl6YXRpb24gaXMgcmVxdWlyZWQgZm9yIHN3aXRjaGluZyBiZXR3ZWVuIFZpc3VhbEVkaXRvciBhbmQgTmV3IFdpa2l0ZXh0IEVkaXRvciAoMjAxNylcblx0XHRtdy5ob29rKCd2ZS5hY3RpdmF0aW9uQ29tcGxldGUnKS5hZGQoKCkgPT4ge1xuXHRcdFx0aWYgKG13LmNvbmZpZy5nZXQoT1BUSU9OUy5jb25maWdLZXkpKSB7XG5cdFx0XHRcdG13LmNvbmZpZy5zZXQoT1BUSU9OUy5jb25maWdLZXksIGZhbHNlKTtcblx0XHRcdH1cblx0XHR9KTtcblx0fTtcblxuXHQvLyBHdWFyZCBhZ2FpbnN0IGRvdWJsZSBpbmNsdXNpb25zXG5cdGlmICghbXcuY29uZmlnLmdldChPUFRJT05TLmNvbmZpZ0tleSkpIHtcblx0XHRpbml0KCk7XG5cblx0XHQvLyBTZXQgZ3VhcmRcblx0XHRtdy5jb25maWcuc2V0KE9QVElPTlMuY29uZmlnS2V5LCB0cnVlKTtcblx0fVxufTtcblxuZXhwb3J0IHtwcm9jZXNzVmlzdWFsRWRpdG9yfTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxvQkFBc0JDLFFBQUEsaUJBQUE7O0FDQ3JCLElBQUFDLFlBQWE7QUFDYixJQUFBQyxZQUFhOztBQ0ZkLElBQU1DLE9BQU8sQ0FDWjtFQUFDQyxLQUFLO0VBQU1DLFVBQVU7RUFBTUMsS0FBSztBQUFhLEdBQzlDO0VBQUNGLEtBQUs7RUFBV0MsVUFBVTtFQUFXQyxLQUFLO0FBQWtCLEdBQzdEO0VBQUNGLEtBQUs7RUFBV0MsVUFBVTtFQUFXQyxLQUFLO0FBQWtCLEdBQzdEO0VBQUNGLEtBQUs7RUFBU0MsVUFBVTtFQUFjQyxLQUFLO0FBQWdCLEdBQzVEO0VBQUNGLEtBQUs7RUFBU0MsVUFBVTtFQUFjQyxLQUFLO0FBQWdCLEdBQzVEO0VBQUNGLEtBQUs7RUFBU0MsVUFBVTtFQUFjQyxLQUFLO0FBQWdCLEdBQzVEO0VBQUNGLEtBQUs7RUFBU0MsVUFBVTtFQUFjQyxLQUFLO0FBQWdCLEdBQzVEO0VBQUNGLEtBQUs7RUFBU0MsVUFBVTtFQUFjQyxLQUFLO0FBQWdCLEdBQzVEO0VBQUNGLEtBQUs7RUFBU0MsVUFBVTtFQUFjQyxLQUFLO0FBQWdCLENBQUE7O0FDVDdELElBQU1DLGtCQUFrQkEsTUFBTTtBQUM3QkMsS0FBR0MsU0FBU0MsSUFBSTtJQUNmLG9CQUFvQkMsT0FBT0MsTUFBTSxVQUFVLFFBQVE7SUFDbkQsZUFBZUQsT0FBT0MsTUFBTSxPQUFPLEtBQUs7SUFDeEMsb0JBQW9CO0lBQ3BCLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtFQUNuQixDQUFDO0FBQ0Y7O0FDTkFMLGdCQUFnQjtBQUVoQixJQUFNTSxxQkFBcUIsU0FBU0Msb0JBQW1CQyxRQUFRO0FBQzlERCxzQkFBbUJFLE1BQU1DLEtBQUssTUFBTUYsTUFBTTtBQUMxQ0csS0FBR0MsR0FBR0MsTUFBTUMsZUFBZUosS0FBSyxJQUFJO0FBQ3BDLE9BQUtLLFNBQVNDLFNBQVMsNkJBQTZCO0FBQ3JEO0FBRUFMLEdBQUdNLGFBQWFYLG9CQUFvQkssR0FBR0MsR0FBR00sV0FBVztBQUNyRFAsR0FBR1EsV0FBV2Isb0JBQW9CSyxHQUFHQyxHQUFHQyxNQUFNQyxjQUFjO0FBRTVELElBQU1NLHNCQUF1QkMsV0FBVTtBQUN0QyxRQUFNO0lBQUNDO0lBQU1DO0lBQWdCQztFQUFhLElBQUl2QixHQUFHTyxPQUFPaUIsSUFBSTtBQUM1RCxNQUFJQyxTQUFTQyxRQUFRQyxZQUFZQyxVQUFVQyxhQUFhQyxjQUFjQyxlQUFlQztBQUVyRixRQUFNQyxvQkFBb0JBLENBQUNDLE9BQU9DLFVBQVVDLGVBQWU7QUFDMUQsVUFBTUMsVUFBVUMsRUFBRSxPQUFPLEVBQUV2QixTQUFTLHlCQUF5QjtBQUU3RCxRQUFJTSxTQUFTLFVBQVU7QUFFdEJnQixjQUFRdEIsU0FBUyxhQUFhO0lBQy9CO0FBRUFzQixZQUFRRTtNQUNQRCxFQUFFLE1BQU0sRUFBRXZCLFNBQVMsY0FBYyxFQUFFeUIsS0FBS04sS0FBSzs7OztNQUk3Q0ksRUFBRSxPQUFPLEVBQ1B2QixTQUFBLGNBQUEwQixPQUF1QnpDLEdBQUdPLE9BQU9pQixJQUFJLGdCQUFnQixFQUFFa0IsZUFBZSxDQUFFLEVBQ3hFQyxLQUNBLFFBQ0FoRCxLQUFLaUQsS0FBTUMsVUFBUztBQUNuQixlQUFPQSxLQUFLakQsUUFBUTZCO01BQ3JCLENBQUMsRUFBRTVCLFFBQ0osRUFDQzJDLEtBQUtMLFFBQVE7TUFDZkcsRUFBRVEsVUFBVVYsVUFBVTtJQUN2QjtBQUdBcEMsT0FBRytDLEtBQUssa0JBQWtCLEVBQUVDLEtBQUtYLE9BQU87QUFFeENZLE9BQUdDLHVCQUF1QmIsUUFBUSxDQUFDLENBQUM7QUFDcEMsV0FBT0E7RUFDUjtBQUVBLFFBQU1jLGVBQWVBLE1BQU07QUFDMUIsVUFBTUMsV0FBV2QsRUFBRWUsU0FBUztBQUc1QjNCLFdBQ0U0QixjQUFjLEVBQ2RDLEtBQUs7TUFDTEMsUUFBUTtNQUNSQyxvQkFBb0I7TUFDcEJDLGFBQWE7TUFDYkMsV0FBV3JDO01BQ1hzQyxnQkFBZ0I7TUFDaEJDLGVBQWU7TUFDZkMsTUFBTTtNQUNOQyxLQUFLO01BQ0xDLFNBQVM7TUFDVDlCLE9BQU9SLE9BQU91QyxZQUFZO01BQzFCQyxNQUFNeEMsT0FBT3lDLGFBQWE7TUFDMUJDLFNBQVM5QztNQUNURztJQUNELENBQUMsRUFDQTRDLEtBQ0NDLGNBQWE7QUFDYixXQUFLbEIsU0FBU21CLFFBQ2J0QyxrQkFDQ3FDLFNBQVNFLE1BQU1DLGNBQ2ZILFNBQVNFLE1BQU1OLE1BQ2ZJLFNBQVNFLE1BQU1FLGNBQ2hCLENBQ0Q7SUFDRCxHQUNBLENBQUNDLE9BQU9DLFdBQVc7QUFDbEIsV0FBS3hCLFNBQVN5QixPQUFPRCxNQUFNO0lBQzVCLENBQ0Q7QUFDRCxXQUFPeEI7RUFDUjtBQUVBLFFBQU0wQixnQkFBZ0IsU0FBU0MsZUFBY0MsS0FBSztBQUNqRHJELGVBQVdzRCxhQUFhbkUsU0FBUyxDQUFDLEVBQUVvRSxNQUFNO0FBQzFDekQsY0FBVXVEO0FBRVYsVUFBTUcsY0FBY3RELFlBQVl1RCxpQkFBaUIzRCxPQUFPO0FBQ3hELFFBQUkwRCxZQUFZckUsU0FBU3VFLFNBQVMsRUFBRUMsUUFBUTtBQUMzQ3pELGtCQUFZMEQsUUFBUUosV0FBVztJQUNoQyxPQUFPO0FBQ050RCxrQkFBWTJELFlBQVk7QUFDeEI1RCxlQUFTNkQsWUFBWSxJQUFJO0FBRXpCLFdBQUt0QyxhQUFhLEVBQ2hCa0IsS0FDQ3FCLHVCQUFzQjtBQUN0QlAsb0JBQVlyRSxTQUFTeUIsT0FBT21ELGlCQUFpQjtBQUM3QzdELG9CQUFZMEQsUUFBUUosV0FBVztNQUNoQyxHQUNDUixXQUFVO0FBQ1Y1QyxzQkFDRTRELFdBQVczRCxhQUFhO1VBQ3hCRSxPQUFPeEIsR0FBR0MsR0FBR2IsSUFBSSwyQkFBMkI7VUFDNUM4RixTQUFTekYsT0FBTzhDLEdBQUc0QyxLQUFLbkUsT0FBTzRCLGNBQWMsRUFBRXdDLGdCQUFnQm5CLEtBQUs7VUFDcEVvQixTQUFTLENBQ1I7WUFDQ3ZDLFFBQVE7WUFDUndDLE9BQU90RixHQUFHQyxHQUFHc0YsU0FBUyw0QkFBNEI7WUFDbERDLE9BQU87VUFDUixHQUNBO1lBQ0MxQyxRQUFRO1lBQ1J3QyxPQUFPdEYsR0FBR0MsR0FBR3NGLFNBQVMsMkJBQTJCO1lBQ2pEQyxPQUFPLENBQUMsV0FBVyxhQUFhO1VBQ2pDLENBQUE7UUFFRixDQUFDLEVBQ0FDLE9BQU85QixLQUFNK0IsVUFBUztBQUN0QixjQUFJQSxRQUFRQSxLQUFLNUMsV0FBVyxTQUFTO0FBRXBDdUIsMkJBQWN0RCxPQUFPO1VBQ3RCLE9BQU87QUFFTkcscUJBQVN5RSxTQUFTeEUsWUFBWXlFLGVBQWUsRUFBRUMsUUFBUSxDQUFDO1VBQ3pEO1FBQ0QsQ0FBQztNQUNILENBQ0QsRUFDQ0MsT0FBTyxNQUFNO0FBQ2IzRSxvQkFBWTRFLFdBQVc7QUFDdkI3RSxpQkFBUzZELFlBQVksS0FBSztNQUMzQixDQUFDO0lBQ0g7RUFDRDtBQUVBLFFBQU1pQixxQkFBcUJBLE1BQU07QUFDaEMsVUFBTUMsZUFBZTlFLFlBQVl5RSxlQUFlO0FBRWhELFFBQUlLLGFBQWE3RixTQUFTdUUsU0FBUyxFQUFFQyxRQUFRO0FBQzVDM0QsaUJBQVdpRixVQUFVLFNBQVM7QUFDOUJqRixpQkFBV3NELGFBQWFuRSxTQUFTK0YsUUFBUWpGLFNBQVNkLFFBQVE7SUFDM0QsT0FBTztBQUNOWSxhQUFPb0YsS0FBSyxhQUFhO0FBQ3pCbkYsaUJBQVc2RCxZQUFZO0FBRXZCLFdBQUtyQyxhQUFhLEVBQ2hCa0IsS0FDQzBDLHFCQUFvQjtBQUNwQnJGLGVBQ0VzRixXQUFXLEVBQ1hDLFNBQVMsRUFDVEMsWUFBWSxFQUNaQyxLQUFLLFlBQVksTUFBTTtBQUFBLGNBQUFDLFlBQUFDLDJCQUNKdkYsWUFBQSxHQUFBd0Y7QUFBQSxjQUFBO0FBQW5CLGlCQUFBRixVQUFBRyxFQUFBLEdBQUEsRUFBQUQsUUFBQUYsVUFBQUksRUFBQSxHQUFBQyxRQUFpQztBQUFBLG9CQUF0QjVFLE9BQUF5RSxNQUFBSTtBQUNWN0UsbUJBQUsvQixTQUFTNkcsTUFBTTtZQUNyQjtVQUFBLFNBQUFDLEtBQUE7QUFBQVIsc0JBQUFTLEVBQUFELEdBQUE7VUFBQSxVQUFBO0FBQUFSLHNCQUFBVSxFQUFBO1VBQUE7UUFDRCxDQUFDO0FBQ0ZuRyxtQkFBV2lGLFVBQVUsU0FBUztBQUM5QkQscUJBQWE3RixTQUFTeUIsT0FBT3dFLGVBQWU7QUFDNUNsRixvQkFBWTBELFFBQVExRCxZQUFZdUQsaUJBQWlCM0QsT0FBTyxDQUFDO0FBQ3pELFlBQUksQ0FBQ0UsV0FBV2IsU0FBUzhCLEtBQUEsSUFBQUgsT0FBaUIvQyxTQUFTLENBQUUsRUFBRTRGLFFBQVE7QUFDOUQzRCxxQkFBV3NELGFBQWFuRSxTQUFTK0YsUUFBUWpGLFNBQVNkLFFBQVE7UUFDM0Q7TUFDRCxHQUNDNkQsV0FBVTtBQUNWaEQsbUJBQVdvRyxXQUNWLElBQUlySCxHQUFHQyxHQUFHcUgsTUFBTTdILE9BQU84QyxHQUFHNEMsS0FBS25FLE9BQU80QixjQUFjLEVBQUV3QyxnQkFBZ0JuQixLQUFLLEdBQUc7VUFDN0VzRCxhQUFhO1FBQ2QsQ0FBQyxDQUNGO01BQ0QsQ0FDRCxFQUNDekIsT0FBTyxNQUFNO0FBQ2I3RSxtQkFBVzhFLFdBQVc7TUFDdkIsQ0FBQztJQUNIO0VBQ0Q7QUFFQSxRQUFNWixPQUFPQSxNQUFNO0FBQ2xCcEUsY0FBVUY7QUFDVixLQUFDO01BQUNHO0lBQU0sSUFBSXZCLE9BQU84QyxHQUFHNEM7QUFDdEIsS0FBQztNQUFDbEU7SUFBVSxJQUFJRDtBQUVoQkUsZUFBVyxJQUFJbEIsR0FBR0MsR0FBR3VILG9CQUFvQjtNQUN4Q0MsVUFBVXhHLFdBQVd3RztNQUNyQkMsU0FBUyxDQUFTMUksU0FBUztNQUMzQjJJLFNBQVMsQ0FDUjtRQUNDQyxVQUFVdEksR0FBR0YsSUFBSSxrQkFBa0I7TUFDcEMsR0FDQSxHQUFHSCxLQUFLNEksSUFBSzFGLFVBQVM7QUFDckIsZUFBTztVQUNOdUQsTUFBTXZELEtBQUtqRDtVQUNYb0csT0FBT2hHLEdBQUdGLElBQUkrQyxLQUFLL0MsR0FBRztRQUN2QjtNQUNELENBQUMsQ0FBQTtNQUVGNEgsT0FBT2pHO0lBQ1IsQ0FBQztBQUNERyxhQUFTNEcsR0FBRyxVQUFVMUQsYUFBYTtBQUNuQ2hELG1CQUFlbkMsS0FBSzRJLElBQUsxRixVQUFTO0FBQ2pDLGFBQU8sSUFBSW5DLEdBQUdDLEdBQUc4SCxZQUFZO1FBQzVCQyxVQUFVO1FBQ1Z0QyxNQUFNdkQsS0FBS2pEO01BQ1osQ0FBQztJQUNGLENBQUM7QUFDRGlDLGtCQUFjLElBQUl4QixtQkFBbUI7TUFDcENxSSxVQUFVO01BQ1ZDLE9BQU83RztJQUNSLENBQUM7QUFDREQsZ0JBQVkwRCxRQUFRMUQsWUFBWXVELGlCQUFpQjNELE9BQU8sQ0FBQztBQUN6REUsZUFBV3NELGFBQWFuRSxTQUFTeUIsT0FBT1YsWUFBWWYsUUFBUTtBQUM1RGtCLGtCQUFjLElBQUl0QixHQUFHQyxHQUFHaUksY0FBYztBQUN0QzdHLG9CQUFnQixJQUFJckIsR0FBR0MsR0FBR2tJLGNBQWM7QUFDeEM5RyxrQkFBYytHLFdBQVcsQ0FBQzlHLFdBQVcsQ0FBQztBQUN0Q1osVUFBTW1CLE9BQU9SLGNBQWNqQixRQUFRO0FBRW5DLFVBQU1pSSxrQkFBa0I7QUFDeEJwSCxlQUFXcUgsSUFBSSxXQUFXRCxpQkFBaUJySCxNQUFNLEVBQUU4RyxHQUFHLFdBQVc5QixrQkFBa0I7QUFHbkYxRyxPQUFHK0MsS0FBSyx1QkFBdUIsRUFBRWtHLElBQUksTUFBTTtBQUMxQyxVQUFJakosR0FBR08sT0FBT2lCLElBQVkvQixTQUFTLEdBQUc7QUFDckNPLFdBQUdPLE9BQU9MLElBQVlULFdBQVcsS0FBSztNQUN2QztJQUNELENBQUM7RUFDRjtBQUdBLE1BQUksQ0FBQ08sR0FBR08sT0FBT2lCLElBQVkvQixTQUFTLEdBQUc7QUFDdENvRyxTQUFLO0FBR0w3RixPQUFHTyxPQUFPTCxJQUFZVCxXQUFXLElBQUk7RUFDdEM7QUFDRDs7QUpsUEEsTUFBQSxHQUFLRixrQkFBQTJKLFNBQVEsRUFBRTdFLEtBQUssU0FBUzhFLHdCQUF3Qi9ILE9BQXNDO0FBQzFGcEIsS0FBRytDLEtBQUssNEJBQTRCLEVBQUVrRyxJQUFJLE1BQVk7QUFDckQ5SCx3QkFBb0JDLEtBQUs7RUFDMUIsQ0FBQztBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbImltcG9ydF9leHRfZ2FkZ2V0IiwgInJlcXVpcmUiLCAiY29uZmlnS2V5IiwgImNsYXNzTmFtZSIsICJEQVRBIiwgInZhciIsICJodG1sTGFuZyIsICJtc2ciLCAiUFdWMjAxN21lc3NhZ2VzIiwgIm13IiwgIm1lc3NhZ2VzIiwgInNldCIsICJ3aW5kb3ciLCAid2dVTFMiLCAiUGVuZGluZ1N0YWNrTGF5b3V0IiwgIlBlbmRpbmdTdGFja0xheW91dDIiLCAiY29uZmlnIiwgInN1cGVyIiwgImNhbGwiLCAiT08iLCAidWkiLCAibWl4aW4iLCAiUGVuZGluZ0VsZW1lbnQiLCAiJGVsZW1lbnQiLCAiYWRkQ2xhc3MiLCAiaW5oZXJpdENsYXNzIiwgIlN0YWNrTGF5b3V0IiwgIm1peGluQ2xhc3MiLCAicHJvY2Vzc1Zpc3VhbEVkaXRvciIsICIkYm9keSIsICJza2luIiwgIndnVXNlckxhbmd1YWdlIiwgIndnVXNlclZhcmlhbnQiLCAiZ2V0IiwgInZhcmlhbnQiLCAidGFyZ2V0IiwgInNhdmVEaWFsb2ciLCAiZHJvcGRvd24iLCAic3RhY2tMYXlvdXQiLCAicGFuZWxMYXlvdXRzIiwgIndpbmRvd01hbmFnZXIiLCAiZXJyb3JEaWFsb2ciLCAiY29uc3RydWN0RG9jdW1lbnQiLCAidGl0bGUiLCAid2lraXRleHQiLCAiY2F0ZWdvcmllcyIsICIkcmVzdWx0IiwgIiQiLCAiYXBwZW5kIiwgImh0bWwiLCAiY29uY2F0IiwgInBhZ2VMYW5ndWFnZURpciIsICJhdHRyIiwgImZpbmQiLCAiaXRlbSIsICJwYXJzZUhUTUwiLCAiaG9vayIsICJmaXJlIiwgInZlIiwgInRhcmdldExpbmtzVG9OZXdXaW5kb3ciLCAiZmV0Y2hQcmV2aWV3IiwgImRlZmVycmVkIiwgIkRlZmVycmVkIiwgImdldENvbnRlbnRBcGkiLCAicG9zdCIsICJhY3Rpb24iLCAiZGlzYWJsZWVkaXRzZWN0aW9uIiwgImVycm9yZm9ybWF0IiwgImVycm9ybGFuZyIsICJlcnJvcnN1c2Vsb2NhbCIsICJmb3JtYXR2ZXJzaW9uIiwgInByb3AiLCAicHN0IiwgInByZXZpZXciLCAiZ2V0UGFnZU5hbWUiLCAidGV4dCIsICJnZXREb2NUb1NhdmUiLCAidXNlbGFuZyIsICJ0aGVuIiwgInJlc3BvbnNlIiwgInJlc29sdmUiLCAicGFyc2UiLCAiZGlzcGxheXRpdGxlIiwgImNhdGVnb3JpZXNodG1sIiwgImVycm9yIiwgImRldGFpbCIsICJyZWplY3QiLCAiY2hhbmdlVmFyaWFudCIsICJjaGFuZ2VWYXJpYW50MiIsICJ2YWwiLCAicHJldmlld1BhbmVsIiwgImZvY3VzIiwgInRhcmdldFBhbmVsIiwgImZpbmRJdGVtRnJvbURhdGEiLCAiY2hpbGRyZW4iLCAibGVuZ3RoIiwgInNldEl0ZW0iLCAicHVzaFBlbmRpbmciLCAic2V0RGlzYWJsZWQiLCAiJHByZXZpZXdDb250YWluZXIiLCAib3BlbldpbmRvdyIsICJtZXNzYWdlIiwgImluaXQiLCAiZ2V0RXJyb3JNZXNzYWdlIiwgImFjdGlvbnMiLCAibGFiZWwiLCAiZGVmZXJNc2ciLCAiZmxhZ3MiLCAiY2xvc2VkIiwgImRhdGEiLCAic2V0VmFsdWUiLCAiZ2V0Q3VycmVudEl0ZW0iLCAiZ2V0RGF0YSIsICJhbHdheXMiLCAicG9wUGVuZGluZyIsICJwcmV2aWV3V2l0aFZhcmlhbnQiLCAiY3VycmVudFBhbmVsIiwgInN3YXBQYW5lbCIsICJwcmVwZW5kIiwgImVtaXQiLCAiJHByZXZpZXdDb250ZW50IiwgImdldFN1cmZhY2UiLCAiZ2V0TW9kZWwiLCAiZ2V0RG9jdW1lbnQiLCAib25jZSIsICJfaXRlcmF0b3IiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAiX3N0ZXAiLCAicyIsICJuIiwgImRvbmUiLCAidmFsdWUiLCAiZW1wdHkiLCAiZXJyIiwgImUiLCAiZiIsICJzaG93RXJyb3JzIiwgIkVycm9yIiwgInJlY292ZXJhYmxlIiwgIkRyb3Bkb3duSW5wdXRXaWRnZXQiLCAiJG92ZXJsYXkiLCAiY2xhc3NlcyIsICJvcHRpb25zIiwgIm9wdGdyb3VwIiwgIm1hcCIsICJvbiIsICJQYW5lbExheW91dCIsICJleHBhbmRlZCIsICJpdGVtcyIsICJNZXNzYWdlRGlhbG9nIiwgIldpbmRvd01hbmFnZXIiLCAiYWRkV2luZG93cyIsICJoYW5kbGVyVG9SZW1vdmUiLCAib2ZmIiwgImFkZCIsICJnZXRCb2R5IiwgInByZXZpZXdXaXRoVmFyaWFudHMyMDE3Il0KfQo=

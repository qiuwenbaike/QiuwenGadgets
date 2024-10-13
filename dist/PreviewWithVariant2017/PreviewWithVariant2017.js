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
        dialog.showErrors(new OO.ui.Error(window.ve.init.target.getContentApi().getErrorMessage(error), {
          recoverable: true
        }));
      }).always(() => {
        dialog.popPending();
      });
    }
  };
  const init = () => {
    variant = wgUserVariant;
    ({
      target
    } = window.ve.init);
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1ByZXZpZXdXaXRoVmFyaWFudDIwMTcvb3B0aW9ucy5qc29uIiwgInNyYy9QcmV2aWV3V2l0aFZhcmlhbnQyMDE3L21vZHVsZXMvY29uc3RhbnQudHMiLCAic3JjL1ByZXZpZXdXaXRoVmFyaWFudDIwMTcvbW9kdWxlcy9tZXNzYWdlcy50cyIsICJzcmMvUHJldmlld1dpdGhWYXJpYW50MjAxNy9tb2R1bGVzL3Byb2Nlc3NWaXN1YWxFZGl0b3IuanMiLCAic3JjL1ByZXZpZXdXaXRoVmFyaWFudDIwMTcvUHJldmlld1dpdGhWYXJpYW50MjAxNy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsie1xuXHRcImNvbmZpZ0tleVwiOiBcImdhZGdldC1QcmV2aWV3V2l0aFZhcmlhbnQyMDE3X19Jbml0aWFsaXplZFwiLFxuXHRcImNsYXNzTmFtZVwiOiBcInB3di0yMDE3LXZhcmlhbnRcIlxufVxuIiwgImNvbnN0IERBVEEgPSBbXG5cdHt2YXI6ICd6aCcsIGh0bWxMYW5nOiAnemgnLCBtc2c6ICdwd3YtMjAxNy16aCd9LFxuXHR7dmFyOiAnemgtaGFucycsIGh0bWxMYW5nOiAnemgtSGFucycsIG1zZzogJ3B3di0yMDE3LXpoLWhhbnMnfSxcblx0e3ZhcjogJ3poLWhhbnQnLCBodG1sTGFuZzogJ3poLUhhbnQnLCBtc2c6ICdwd3YtMjAxNy16aC1oYW50J30sXG5cdHt2YXI6ICd6aC1jbicsIGh0bWxMYW5nOiAnemgtSGFucy1DTicsIG1zZzogJ3B3di0yMDE3LXpoLWNuJ30sXG5cdHt2YXI6ICd6aC1oaycsIGh0bWxMYW5nOiAnemgtSGFudC1ISycsIG1zZzogJ3B3di0yMDE3LXpoLWhrJ30sXG5cdHt2YXI6ICd6aC1tbycsIGh0bWxMYW5nOiAnemgtSGFudC1NTycsIG1zZzogJ3B3di0yMDE3LXpoLW1vJ30sXG5cdHt2YXI6ICd6aC1teScsIGh0bWxMYW5nOiAnemgtSGFucy1NWScsIG1zZzogJ3B3di0yMDE3LXpoLW15J30sXG5cdHt2YXI6ICd6aC1zZycsIGh0bWxMYW5nOiAnemgtSGFucy1TRycsIG1zZzogJ3B3di0yMDE3LXpoLXNnJ30sXG5cdHt2YXI6ICd6aC10dycsIGh0bWxMYW5nOiAnemgtSGFudC1UVycsIG1zZzogJ3B3di0yMDE3LXpoLXR3J30sXG5dO1xuXG5leHBvcnQge0RBVEF9O1xuIiwgImNvbnN0IFBXVjIwMTdtZXNzYWdlcyA9ICgpID0+IHtcblx0bXcubWVzc2FnZXMuc2V0KHtcblx0XHQncHd2LTIwMTctY2FwdGlvbic6IHdpbmRvdy53Z1VMUygn6YCJ5oup6K+t6KiA5Y+Y5L2TJywgJ+mBuOaTh+iqnuiogOiuiumrlCcpLFxuXHRcdCdwd3YtMjAxNy16aCc6IHdpbmRvdy53Z1VMUygn5LiN6L2s5o2iJywgJ+S4jei9ieaPmycpLFxuXHRcdCdwd3YtMjAxNy16aC1oYW5zJzogJ+eugOS9kycsXG5cdFx0J3B3di0yMDE3LXpoLWhhbnQnOiAn57mB6auUJyxcblx0XHQncHd2LTIwMTctemgtY24nOiAn5Lit5Zu95aSn6ZmG566A5L2TJyxcblx0XHQncHd2LTIwMTctemgtaGsnOiAn5Lit5ZyL6aaZ5riv57mB6auUJyxcblx0XHQncHd2LTIwMTctemgtbW8nOiAn5Lit5ZyL5r6z6ZaA57mB6auUJyxcblx0XHQncHd2LTIwMTctemgtbXknOiAn6ams5p2l6KW/5Lqa566A5L2TJyxcblx0XHQncHd2LTIwMTctemgtc2cnOiAn5paw5Yqg5Z2h566A5L2TJyxcblx0XHQncHd2LTIwMTctemgtdHcnOiAn5Lit5ZyL6Ie654Gj57mB6auUJyxcblx0fSk7XG59O1xuXG5leHBvcnQge1BXVjIwMTdtZXNzYWdlc307XG4iLCAiLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHMtY29tbWVudFxuLy8gQHRzLW5vY2hlY2tcbmltcG9ydCAnLi9wcm9jZXNzVmlzdWFsRWRpdG9yLmxlc3MnO1xuaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtEQVRBfSBmcm9tICcuL2NvbnN0YW50JztcbmltcG9ydCB7UFdWMjAxN21lc3NhZ2VzfSBmcm9tICcuL21lc3NhZ2VzJztcblxubXcuY29uZmlnLnNldChPUFRJT05TLmNvbmZpZ0tleSwgZmFsc2UpO1xuXG5QV1YyMDE3bWVzc2FnZXMoKTtcblxuY29uc3QgUGVuZGluZ1N0YWNrTGF5b3V0ID0gZnVuY3Rpb24gUGVuZGluZ1N0YWNrTGF5b3V0KGNvbmZpZykge1xuXHRQZW5kaW5nU3RhY2tMYXlvdXQuc3VwZXIuY2FsbCh0aGlzLCBjb25maWcpO1xuXHRPTy51aS5taXhpbi5QZW5kaW5nRWxlbWVudC5jYWxsKHRoaXMpO1xuXHR0aGlzLiRlbGVtZW50LmFkZENsYXNzKCdwd3YtMjAxNy1wZW5kaW5nU3RhY2tMYXlvdXQnKTtcbn07XG5cbk9PLmluaGVyaXRDbGFzcyhQZW5kaW5nU3RhY2tMYXlvdXQsIE9PLnVpLlN0YWNrTGF5b3V0KTtcbk9PLm1peGluQ2xhc3MoUGVuZGluZ1N0YWNrTGF5b3V0LCBPTy51aS5taXhpbi5QZW5kaW5nRWxlbWVudCk7XG5cbmNvbnN0IHByb2Nlc3NWaXN1YWxFZGl0b3IgPSAoKSA9PiB7XG5cdGNvbnN0IHtza2luLCB3Z1VzZXJMYW5ndWFnZSwgd2dVc2VyVmFyaWFudH0gPSBtdy5jb25maWcuZ2V0KCk7XG5cdGxldCB2YXJpYW50LCB0YXJnZXQsIGRpYWxvZywgZHJvcGRvd24sIHN0YWNrTGF5b3V0LCBwYW5lbExheW91dHMsIHdpbmRvd01hbmFnZXIsIGVycm9yRGlhbG9nO1xuXG5cdGNvbnN0IGNvbnN0cnVjdERvY3VtZW50ID0gKHRpdGxlLCB3aWtpdGV4dCwgY2F0ZWdvcmllcykgPT4ge1xuXHRcdGNvbnN0ICRyZXN1bHQgPSAkKCc8ZGl2PicpLmFkZENsYXNzKCdtdy1ib2R5IG13LWJvZHktY29udGVudCcpO1xuXG5cdFx0aWYgKHNraW4gPT09ICd2ZWN0b3InKSB7XG5cdFx0XHQvLyBBZGRpdGlvbmFsIGNsYXNzZXMgcmVxdWlyZWQgaW4gdmVjdG9yIHRvIGdldCBjb3JyZWN0IGFwcGVhcmFuY2Vcblx0XHRcdCRyZXN1bHQuYWRkQ2xhc3MoJ3ZlY3Rvci1ib2R5Jyk7XG5cdFx0fVxuXG5cdFx0JHJlc3VsdC5hcHBlbmQoXG5cdFx0XHQkKCc8aDE+JykuYWRkQ2xhc3MoJ2ZpcnN0SGVhZGluZycpLmh0bWwodGl0bGUpLFxuXHRcdFx0Ly8gQ2xhc3NlcyB1c2VkIGhlcmU6XG5cdFx0XHQvLyAqIG13LWNvbnRlbnQtbHRyXG5cdFx0XHQvLyAqIG13LWNvbnRlbnQtcnRsXG5cdFx0XHQkKCc8ZGl2PicpXG5cdFx0XHRcdC5hZGRDbGFzcyhgbXctY29udGVudC0ke213LmNvbmZpZy5nZXQoJ3dnVmlzdWFsRWRpdG9yJykucGFnZUxhbmd1YWdlRGlyfWApXG5cdFx0XHRcdC5hdHRyKFxuXHRcdFx0XHRcdCdsYW5nJyxcblx0XHRcdFx0XHREQVRBLmZpbmQoKGl0ZW0pID0+IHtcblx0XHRcdFx0XHRcdHJldHVybiBpdGVtLnZhciA9PT0gdmFyaWFudDtcblx0XHRcdFx0XHR9KS5odG1sTGFuZ1xuXHRcdFx0XHQpXG5cdFx0XHRcdC5odG1sKHdpa2l0ZXh0KSxcblx0XHRcdCQucGFyc2VIVE1MKGNhdGVnb3JpZXMpXG5cdFx0KTtcblxuXHRcdC8vIE1ha2Ugb3RoZXIgdGhpbmdzIGxpa2UgUmVmZXJlbmNlIFRvb2x0aXAgZnVuY3Rpb25cblx0XHRtdy5ob29rKCd3aWtpcGFnZS5jb250ZW50JykuZmlyZSgkcmVzdWx0KTtcblx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcblx0XHR2ZS50YXJnZXRMaW5rc1RvTmV3V2luZG93KCRyZXN1bHRbMF0pO1xuXHRcdHJldHVybiAkcmVzdWx0O1xuXHR9O1xuXG5cdGNvbnN0IGZldGNoUHJldmlldyA9ICgpID0+IHtcblx0XHRjb25zdCBkZWZlcnJlZCA9ICQuRGVmZXJyZWQoKTtcblx0XHQvLyBDdXJyZW50bHkgKEF1ZyAyMDIxKSwgUGFyc29pZCBBUEkgZG9lcyBub3QgaGF2ZSBmdWxsIExDIGZ1bmN0aW9uYWxpdHksXG5cdFx0Ly8gaGVuY2UgdXNlIHBhcnNlIEFQSSBpbnN0ZWFkLlxuXHRcdHRhcmdldFxuXHRcdFx0LmdldENvbnRlbnRBcGkoKVxuXHRcdFx0LnBvc3Qoe1xuXHRcdFx0XHRhY3Rpb246ICdwYXJzZScsXG5cdFx0XHRcdGRpc2FibGVlZGl0c2VjdGlvbjogdHJ1ZSxcblx0XHRcdFx0ZXJyb3Jmb3JtYXQ6ICdodG1sJyxcblx0XHRcdFx0ZXJyb3JsYW5nOiB3Z1VzZXJMYW5ndWFnZSxcblx0XHRcdFx0ZXJyb3JzdXNlbG9jYWw6IHRydWUsXG5cdFx0XHRcdGZvcm1hdHZlcnNpb246IDIsXG5cdFx0XHRcdHByb3A6ICd0ZXh0fGluZGljYXRvcnN8ZGlzcGxheXRpdGxlfGNhdGVnb3JpZXNodG1sfHBhcnNld2FybmluZ3NodG1sJyxcblx0XHRcdFx0cHN0OiB0cnVlLFxuXHRcdFx0XHRwcmV2aWV3OiB0cnVlLFxuXHRcdFx0XHR0aXRsZTogdGFyZ2V0LmdldFBhZ2VOYW1lKCksXG5cdFx0XHRcdHRleHQ6IHRhcmdldC5nZXREb2NUb1NhdmUoKSxcblx0XHRcdFx0dXNlbGFuZzogd2dVc2VyTGFuZ3VhZ2UsXG5cdFx0XHRcdHZhcmlhbnQsXG5cdFx0XHR9KVxuXHRcdFx0LnRoZW4oXG5cdFx0XHRcdChyZXNwb25zZSkgPT4ge1xuXHRcdFx0XHRcdHZvaWQgZGVmZXJyZWQucmVzb2x2ZShcblx0XHRcdFx0XHRcdGNvbnN0cnVjdERvY3VtZW50KFxuXHRcdFx0XHRcdFx0XHRyZXNwb25zZS5wYXJzZS5kaXNwbGF5dGl0bGUsXG5cdFx0XHRcdFx0XHRcdHJlc3BvbnNlLnBhcnNlLnRleHQsXG5cdFx0XHRcdFx0XHRcdHJlc3BvbnNlLnBhcnNlLmNhdGVnb3JpZXNodG1sXG5cdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fSxcblx0XHRcdFx0KGVycm9yLCBkZXRhaWwpID0+IHtcblx0XHRcdFx0XHR2b2lkIGRlZmVycmVkLnJlamVjdChkZXRhaWwpO1xuXHRcdFx0XHR9XG5cdFx0XHQpO1xuXHRcdHJldHVybiBkZWZlcnJlZDtcblx0fTtcblxuXHRjb25zdCBjaGFuZ2VWYXJpYW50ID0gZnVuY3Rpb24gY2hhbmdlVmFyaWFudCh2YWwpIHtcblx0XHRkaWFsb2cucHJldmlld1BhbmVsLiRlbGVtZW50WzBdLmZvY3VzKCk7XG5cdFx0dmFyaWFudCA9IHZhbDtcblxuXHRcdGNvbnN0IHRhcmdldFBhbmVsID0gc3RhY2tMYXlvdXQuZmluZEl0ZW1Gcm9tRGF0YSh2YXJpYW50KTtcblx0XHRpZiAodGFyZ2V0UGFuZWwuJGVsZW1lbnQuY2hpbGRyZW4oKS5sZW5ndGgpIHtcblx0XHRcdHN0YWNrTGF5b3V0LnNldEl0ZW0odGFyZ2V0UGFuZWwpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzdGFja0xheW91dC5wdXNoUGVuZGluZygpO1xuXHRcdFx0ZHJvcGRvd24uc2V0RGlzYWJsZWQodHJ1ZSk7XG5cblx0XHRcdHZvaWQgZmV0Y2hQcmV2aWV3KClcblx0XHRcdFx0LnRoZW4oXG5cdFx0XHRcdFx0KCRwcmV2aWV3Q29udGFpbmVyKSA9PiB7XG5cdFx0XHRcdFx0XHR0YXJnZXRQYW5lbC4kZWxlbWVudC5hcHBlbmQoJHByZXZpZXdDb250YWluZXIpO1xuXHRcdFx0XHRcdFx0c3RhY2tMYXlvdXQuc2V0SXRlbSh0YXJnZXRQYW5lbCk7XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHQoZXJyb3IpID0+IHtcblx0XHRcdFx0XHRcdHdpbmRvd01hbmFnZXJcblx0XHRcdFx0XHRcdFx0Lm9wZW5XaW5kb3coZXJyb3JEaWFsb2csIHtcblx0XHRcdFx0XHRcdFx0XHR0aXRsZTogT08udWkubXNnKCdvb3VpLWRpYWxvZy1wcm9jZXNzLWVycm9yJyksXG5cdFx0XHRcdFx0XHRcdFx0bWVzc2FnZTogd2luZG93LnZlLmluaXQudGFyZ2V0LmdldENvbnRlbnRBcGkoKS5nZXRFcnJvck1lc3NhZ2UoZXJyb3IpLFxuXHRcdFx0XHRcdFx0XHRcdGFjdGlvbnM6IFtcblx0XHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0YWN0aW9uOiAncmVqZWN0Jyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0bGFiZWw6IE9PLnVpLmRlZmVyTXNnKCdvb3VpLWRpYWxvZy1tZXNzYWdlLXJlamVjdCcpLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRmbGFnczogJ3NhZmUnLFxuXHRcdFx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0YWN0aW9uOiAncmV0cnknLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRsYWJlbDogT08udWkuZGVmZXJNc2coJ29vdWktZGlhbG9nLXByb2Nlc3MtcmV0cnknKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZmxhZ3M6IFsncHJpbWFyeScsICdwcm9ncmVzc2l2ZSddLFxuXHRcdFx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0XHRdLFxuXHRcdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdFx0XHQuY2xvc2VkLnRoZW4oKGRhdGEpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRpZiAoZGF0YSAmJiBkYXRhLmFjdGlvbiA9PT0gJ3JldHJ5Jykge1xuXHRcdFx0XHRcdFx0XHRcdFx0Ly8gRG8gbm90IHVzZSBzZXRWYWx1ZSgpIHNpbmNlIGl0IHdpbGwgbm90IHRyaWdnZXIgZXZlbnRcblx0XHRcdFx0XHRcdFx0XHRcdGNoYW5nZVZhcmlhbnQodmFyaWFudCk7XG5cdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHRcdC8vIFwidmFyaWFudFwiIHdpbGwgYmUgc2V0IGJ5IGV2ZW50IGhhbmRsZXJcblx0XHRcdFx0XHRcdFx0XHRcdGRyb3Bkb3duLnNldFZhbHVlKHN0YWNrTGF5b3V0LmdldEN1cnJlbnRJdGVtKCkuZ2V0RGF0YSgpKTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0KVxuXHRcdFx0XHQuYWx3YXlzKCgpID0+IHtcblx0XHRcdFx0XHRzdGFja0xheW91dC5wb3BQZW5kaW5nKCk7XG5cdFx0XHRcdFx0ZHJvcGRvd24uc2V0RGlzYWJsZWQoZmFsc2UpO1xuXHRcdFx0XHR9KTtcblx0XHR9XG5cdH07XG5cblx0Y29uc3QgcHJldmlld1dpdGhWYXJpYW50ID0gKCkgPT4ge1xuXHRcdGNvbnN0IGN1cnJlbnRQYW5lbCA9IHN0YWNrTGF5b3V0LmdldEN1cnJlbnRJdGVtKCk7XG5cblx0XHRpZiAoY3VycmVudFBhbmVsLiRlbGVtZW50LmNoaWxkcmVuKCkubGVuZ3RoKSB7XG5cdFx0XHRkaWFsb2cuc3dhcFBhbmVsKCdwcmV2aWV3Jyk7XG5cdFx0XHRkaWFsb2cucHJldmlld1BhbmVsLiRlbGVtZW50LnByZXBlbmQoZHJvcGRvd24uJGVsZW1lbnQpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0YXJnZXQuZW1pdCgnc2F2ZVByZXZpZXcnKTtcblx0XHRcdGRpYWxvZy5wdXNoUGVuZGluZygpO1xuXG5cdFx0XHR2b2lkIGZldGNoUHJldmlldygpXG5cdFx0XHRcdC50aGVuKFxuXHRcdFx0XHRcdCgkcHJldmlld0NvbnRlbnQpID0+IHtcblx0XHRcdFx0XHRcdHRhcmdldFxuXHRcdFx0XHRcdFx0XHQuZ2V0U3VyZmFjZSgpXG5cdFx0XHRcdFx0XHRcdC5nZXRNb2RlbCgpXG5cdFx0XHRcdFx0XHRcdC5nZXREb2N1bWVudCgpXG5cdFx0XHRcdFx0XHRcdC5vbmNlKCd0cmFuc2FjdCcsICgpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRmb3IgKGNvbnN0IGl0ZW0gb2YgcGFuZWxMYXlvdXRzKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRpdGVtLiRlbGVtZW50LmVtcHR5KCk7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdGRpYWxvZy5zd2FwUGFuZWwoJ3ByZXZpZXcnKTtcblx0XHRcdFx0XHRcdGN1cnJlbnRQYW5lbC4kZWxlbWVudC5hcHBlbmQoJHByZXZpZXdDb250ZW50KTtcblx0XHRcdFx0XHRcdHN0YWNrTGF5b3V0LnNldEl0ZW0oc3RhY2tMYXlvdXQuZmluZEl0ZW1Gcm9tRGF0YSh2YXJpYW50KSk7XG5cdFx0XHRcdFx0XHRjb25zdCAkYm9keSA9ICQoJ2JvZHknKTtcblx0XHRcdFx0XHRcdGlmICghJGJvZHkuZmluZChgLiR7T1BUSU9OUy5jbGFzc05hbWV9YCkubGVuZ3RoKSB7XG5cdFx0XHRcdFx0XHRcdGRpYWxvZy5wcmV2aWV3UGFuZWwuJGVsZW1lbnQucHJlcGVuZChkcm9wZG93bi4kZWxlbWVudCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHQoZXJyb3IpID0+IHtcblx0XHRcdFx0XHRcdGRpYWxvZy5zaG93RXJyb3JzKFxuXHRcdFx0XHRcdFx0XHRuZXcgT08udWkuRXJyb3Iod2luZG93LnZlLmluaXQudGFyZ2V0LmdldENvbnRlbnRBcGkoKS5nZXRFcnJvck1lc3NhZ2UoZXJyb3IpLCB7XG5cdFx0XHRcdFx0XHRcdFx0cmVjb3ZlcmFibGU6IHRydWUsXG5cdFx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0KVxuXHRcdFx0XHQuYWx3YXlzKCgpID0+IHtcblx0XHRcdFx0XHRkaWFsb2cucG9wUGVuZGluZygpO1xuXHRcdFx0XHR9KTtcblx0XHR9XG5cdH07XG5cblx0Y29uc3QgaW5pdCA9ICgpID0+IHtcblx0XHR2YXJpYW50ID0gd2dVc2VyVmFyaWFudDtcblx0XHQoe3RhcmdldH0gPSB3aW5kb3cudmUuaW5pdCk7XG5cdFx0ZGlhbG9nID0gdGFyZ2V0LnNhdmVEaWFsb2c7XG5cdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1lZGlhd2lraS9jbGFzcy1kb2Ncblx0XHRkcm9wZG93biA9IG5ldyBPTy51aS5Ecm9wZG93bklucHV0V2lkZ2V0KHtcblx0XHRcdCRvdmVybGF5OiBkaWFsb2cuJG92ZXJsYXksXG5cdFx0XHRjbGFzc2VzOiBbT1BUSU9OUy5jbGFzc05hbWVdLFxuXHRcdFx0b3B0aW9uczogW1xuXHRcdFx0XHR7XG5cdFx0XHRcdFx0b3B0Z3JvdXA6IG13Lm1zZygncHd2LTIwMTctY2FwdGlvbicpLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHQuLi5EQVRBLm1hcCgoaXRlbSkgPT4ge1xuXHRcdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0XHRkYXRhOiBpdGVtLnZhcixcblx0XHRcdFx0XHRcdGxhYmVsOiBtdy5tc2coaXRlbS5tc2cpIC8qIGVzbGludC1kaXNhYmxlLWxpbmUgbWVkaWF3aWtpL21zZy1kb2MgKi8sXG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0fSksXG5cdFx0XHRdLFxuXHRcdFx0dmFsdWU6IHZhcmlhbnQsXG5cdFx0fSk7XG5cdFx0ZHJvcGRvd24ub24oJ2NoYW5nZScsIGNoYW5nZVZhcmlhbnQpO1xuXHRcdHBhbmVsTGF5b3V0cyA9IERBVEEubWFwKChpdGVtKSA9PiB7XG5cdFx0XHRyZXR1cm4gbmV3IE9PLnVpLlBhbmVsTGF5b3V0KHtcblx0XHRcdFx0ZXhwYW5kZWQ6IGZhbHNlLFxuXHRcdFx0XHRkYXRhOiBpdGVtLnZhcixcblx0XHRcdH0pO1xuXHRcdH0pO1xuXHRcdHN0YWNrTGF5b3V0ID0gbmV3IFBlbmRpbmdTdGFja0xheW91dCh7XG5cdFx0XHRleHBhbmRlZDogZmFsc2UsXG5cdFx0XHRpdGVtczogcGFuZWxMYXlvdXRzLFxuXHRcdH0pO1xuXHRcdHN0YWNrTGF5b3V0LnNldEl0ZW0oc3RhY2tMYXlvdXQuZmluZEl0ZW1Gcm9tRGF0YSh2YXJpYW50KSk7XG5cdFx0ZGlhbG9nLnByZXZpZXdQYW5lbC4kZWxlbWVudC5hcHBlbmQoc3RhY2tMYXlvdXQuJGVsZW1lbnQpO1xuXHRcdGVycm9yRGlhbG9nID0gbmV3IE9PLnVpLk1lc3NhZ2VEaWFsb2coKTtcblx0XHR3aW5kb3dNYW5hZ2VyID0gbmV3IE9PLnVpLldpbmRvd01hbmFnZXIoKTtcblx0XHR3aW5kb3dNYW5hZ2VyLmFkZFdpbmRvd3MoW2Vycm9yRGlhbG9nXSk7XG5cdFx0Y29uc3QgJGJvZHkgPSAkKCdib2R5Jyk7XG5cdFx0JGJvZHkuYXBwZW5kKHdpbmRvd01hbmFnZXIuJGVsZW1lbnQpO1xuXG5cdFx0Y29uc3QgaGFuZGxlclRvUmVtb3ZlID0gJ29uU2F2ZURpYWxvZ1ByZXZpZXcnO1xuXHRcdGRpYWxvZy5vZmYoJ3ByZXZpZXcnLCBoYW5kbGVyVG9SZW1vdmUsIHRhcmdldCkub24oJ3ByZXZpZXcnLCBwcmV2aWV3V2l0aFZhcmlhbnQpO1xuXG5cdFx0Ly8gU3dpdGNoaW5nIGJldHdlZW4gVkUgYW5kIE5XRSwgcmVxdWlyZXMgdG8gYmUgcmVpbml0aWFsaXplZFxuXHRcdG13Lmhvb2soJ3ZlLmFjdGl2YXRpb25Db21wbGV0ZScpLmFkZCgoKSA9PiB7XG5cdFx0XHRpZiAobXcuY29uZmlnLmdldChPUFRJT05TLmNvbmZpZ0tleSkpIHtcblx0XHRcdFx0bXcuY29uZmlnLnNldChPUFRJT05TLmNvbmZpZ0tleSwgZmFsc2UpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9O1xuXG5cdGlmICghbXcuY29uZmlnLmdldChPUFRJT05TLmNvbmZpZ0tleSkpIHtcblx0XHRpbml0KCk7XG5cdFx0bXcuY29uZmlnLnNldChPUFRJT05TLmNvbmZpZ0tleSwgdHJ1ZSk7XG5cdH1cbn07XG5cbmV4cG9ydCB7cHJvY2Vzc1Zpc3VhbEVkaXRvcn07XG4iLCAiaW1wb3J0IHtwcm9jZXNzVmlzdWFsRWRpdG9yfSBmcm9tICcuL21vZHVsZXMvcHJvY2Vzc1Zpc3VhbEVkaXRvci5qcyc7XG5cbihmdW5jdGlvbiBwcmV2aWV3V2l0aFZhcmlhbnRzMjAxNygpOiB2b2lkIHtcblx0bXcuaG9vaygndmUuc2F2ZURpYWxvZy5zdGF0ZUNoYW5nZWQnKS5hZGQoKCk6IHZvaWQgPT4ge1xuXHRcdHByb2Nlc3NWaXN1YWxFZGl0b3IoKTtcblx0fSk7XG59KSgpO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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SUFBSSxNQUFZO0FBQ3JEL0gsd0JBQW9CO0VBQ3JCLENBQUM7QUFDRixHQUFHOyIsCiAgIm5hbWVzIjogWyJjb25maWdLZXkiLCAiY2xhc3NOYW1lIiwgIkRBVEEiLCAidmFyIiwgImh0bWxMYW5nIiwgIm1zZyIsICJQV1YyMDE3bWVzc2FnZXMiLCAibXciLCAibWVzc2FnZXMiLCAic2V0IiwgIndpbmRvdyIsICJ3Z1VMUyIsICJjb25maWciLCAiUGVuZGluZ1N0YWNrTGF5b3V0IiwgIlBlbmRpbmdTdGFja0xheW91dDIiLCAic3VwZXIiLCAiY2FsbCIsICJPTyIsICJ1aSIsICJtaXhpbiIsICJQZW5kaW5nRWxlbWVudCIsICIkZWxlbWVudCIsICJhZGRDbGFzcyIsICJpbmhlcml0Q2xhc3MiLCAiU3RhY2tMYXlvdXQiLCAibWl4aW5DbGFzcyIsICJwcm9jZXNzVmlzdWFsRWRpdG9yIiwgInNraW4iLCAid2dVc2VyTGFuZ3VhZ2UiLCAid2dVc2VyVmFyaWFudCIsICJnZXQiLCAidmFyaWFudCIsICJ0YXJnZXQiLCAiZGlhbG9nIiwgImRyb3Bkb3duIiwgInN0YWNrTGF5b3V0IiwgInBhbmVsTGF5b3V0cyIsICJ3aW5kb3dNYW5hZ2VyIiwgImVycm9yRGlhbG9nIiwgImNvbnN0cnVjdERvY3VtZW50IiwgInRpdGxlIiwgIndpa2l0ZXh0IiwgImNhdGVnb3JpZXMiLCAiJHJlc3VsdCIsICIkIiwgImFwcGVuZCIsICJodG1sIiwgImNvbmNhdCIsICJwYWdlTGFuZ3VhZ2VEaXIiLCAiYXR0ciIsICJmaW5kIiwgIml0ZW0iLCAicGFyc2VIVE1MIiwgImhvb2siLCAiZmlyZSIsICJ2ZSIsICJ0YXJnZXRMaW5rc1RvTmV3V2luZG93IiwgImZldGNoUHJldmlldyIsICJkZWZlcnJlZCIsICJEZWZlcnJlZCIsICJnZXRDb250ZW50QXBpIiwgInBvc3QiLCAiYWN0aW9uIiwgImRpc2FibGVlZGl0c2VjdGlvbiIsICJlcnJvcmZvcm1hdCIsICJlcnJvcmxhbmciLCAiZXJyb3JzdXNlbG9jYWwiLCAiZm9ybWF0dmVyc2lvbiIsICJwcm9wIiwgInBzdCIsICJwcmV2aWV3IiwgImdldFBhZ2VOYW1lIiwgInRleHQiLCAiZ2V0RG9jVG9TYXZlIiwgInVzZWxhbmciLCAidGhlbiIsICJyZXNwb25zZSIsICJyZXNvbHZlIiwgInBhcnNlIiwgImRpc3BsYXl0aXRsZSIsICJjYXRlZ29yaWVzaHRtbCIsICJlcnJvciIsICJkZXRhaWwiLCAicmVqZWN0IiwgImNoYW5nZVZhcmlhbnQiLCAiY2hhbmdlVmFyaWFudDIiLCAidmFsIiwgInByZXZpZXdQYW5lbCIsICJmb2N1cyIsICJ0YXJnZXRQYW5lbCIsICJmaW5kSXRlbUZyb21EYXRhIiwgImNoaWxkcmVuIiwgImxlbmd0aCIsICJzZXRJdGVtIiwgInB1c2hQZW5kaW5nIiwgInNldERpc2FibGVkIiwgIiRwcmV2aWV3Q29udGFpbmVyIiwgIm9wZW5XaW5kb3ciLCAibWVzc2FnZSIsICJpbml0IiwgImdldEVycm9yTWVzc2FnZSIsICJhY3Rpb25zIiwgImxhYmVsIiwgImRlZmVyTXNnIiwgImZsYWdzIiwgImNsb3NlZCIsICJkYXRhIiwgInNldFZhbHVlIiwgImdldEN1cnJlbnRJdGVtIiwgImdldERhdGEiLCAiYWx3YXlzIiwgInBvcFBlbmRpbmciLCAicHJldmlld1dpdGhWYXJpYW50IiwgImN1cnJlbnRQYW5lbCIsICJzd2FwUGFuZWwiLCAicHJlcGVuZCIsICJlbWl0IiwgIiRwcmV2aWV3Q29udGVudCIsICJnZXRTdXJmYWNlIiwgImdldE1vZGVsIiwgImdldERvY3VtZW50IiwgIm9uY2UiLCAiX2l0ZXJhdG9yIiwgIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwgIl9zdGVwIiwgInMiLCAibiIsICJkb25lIiwgInZhbHVlIiwgImVtcHR5IiwgImVyciIsICJlIiwgImYiLCAiJGJvZHkiLCAic2hvd0Vycm9ycyIsICJFcnJvciIsICJyZWNvdmVyYWJsZSIsICJzYXZlRGlhbG9nIiwgIkRyb3Bkb3duSW5wdXRXaWRnZXQiLCAiJG92ZXJsYXkiLCAiY2xhc3NlcyIsICJvcHRpb25zIiwgIm9wdGdyb3VwIiwgIm1hcCIsICJvbiIsICJQYW5lbExheW91dCIsICJleHBhbmRlZCIsICJpdGVtcyIsICJNZXNzYWdlRGlhbG9nIiwgIldpbmRvd01hbmFnZXIiLCAiYWRkV2luZG93cyIsICJoYW5kbGVyVG9SZW1vdmUiLCAib2ZmIiwgImFkZCIsICJwcmV2aWV3V2l0aFZhcmlhbnRzMjAxNyJdCn0K

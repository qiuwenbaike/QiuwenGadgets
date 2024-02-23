/**
 * SPDX-License-Identifier: MIT
 * _addText: '{{Gadget Header|license=MIT}}'
 *
 * @base {@link https://zh.wikipedia.org/wiki/MediaWiki:Gadget-PreviewWithVariant2017.js}
 * @base {@link https://zh.wikipedia.org/wiki/MediaWiki:Gadget-PreviewWithVariant2017.css}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/PreviewWithVariant2017}
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
//! src/PreviewWithVariant2017/PreviewWithVariant2017.js
(function PreviewWithVariant2017() {
  const DATA = [{
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
  mw.config.set("wgPreviewWithVariantInitialized", false);
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
  const PendingStackLayout = function PendingStackLayout2(config) {
    PendingStackLayout2.super.call(this, config);
    OO.ui.mixin.PendingElement.call(this);
    this.$element.addClass("pwv-2017-pendingStackLayout");
  };
  OO.inheritClass(PendingStackLayout, OO.ui.StackLayout);
  OO.mixinClass(PendingStackLayout, OO.ui.mixin.PendingElement);
  const entryPoint = () => {
    let variant, target, dialog, dropdown, stackLayout, panelLayouts, windowManager, errorDialog;
    const constructDocument = (title, wikitext, categories) => {
      const $result = $("<div>").addClass("mw-body mw-body-content");
      if (mw.config.get("skin") === "vector") {
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
        errorlang: mw.config.get("wgUserLanguage"),
        errorsuselocal: true,
        formatversion: 2,
        prop: "text|indicators|displaytitle|categorieshtml|parsewarningshtml",
        pst: true,
        preview: true,
        title: target.getPageName(),
        text: target.getDocToSave(),
        uselang: mw.config.get("wgUserLanguage"),
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
          dialog.previewPanel.$element.prepend(dropdown.$element);
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
      variant = mw.config.get("wgUserVariant");
      ({
        target
      } = ve.init);
      dialog = target.saveDialog;
      dropdown = new OO.ui.DropdownInputWidget({
        $overlay: dialog.$overlay,
        classes: ["pwv-2017-variant"],
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
      $(document.body).append(windowManager.$element);
      const handlerToRemove = "onSaveDialogPreview";
      dialog.off("preview", handlerToRemove, target).on("preview", previewWithVariant);
    };
    if (!mw.config.get("wgPreviewWithVariantInitialized")) {
      init();
      mw.config.set("wgPreviewWithVariantInitialized", true);
    }
  };
  mw.hook("ve.saveDialog.stateChanged").add(entryPoint);
  mw.hook("ve.activationComplete").add(() => {
    if (mw.config.get("wgPreviewWithVariantInitialized")) {
      mw.config.set("wgPreviewWithVariantInitialized", true);
    }
  });
})();

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1ByZXZpZXdXaXRoVmFyaWFudDIwMTcvUHJldmlld1dpdGhWYXJpYW50MjAxNy5qcyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHMtY29tbWVudFxuLy8gQHRzLW5vY2hlY2tcbmltcG9ydCAnLi9QcmV2aWV3V2l0aFZhcmlhbnQyMDE3Lmxlc3MnO1xuXG4oZnVuY3Rpb24gUHJldmlld1dpdGhWYXJpYW50MjAxNygpIHtcblx0Y29uc3QgREFUQSA9IFtcblx0XHR7dmFyOiAnemgnLCBodG1sTGFuZzogJ3poJywgbXNnOiAncHd2LTIwMTctemgnfSxcblx0XHR7dmFyOiAnemgtaGFucycsIGh0bWxMYW5nOiAnemgtSGFucycsIG1zZzogJ3B3di0yMDE3LXpoLWhhbnMnfSxcblx0XHR7dmFyOiAnemgtaGFudCcsIGh0bWxMYW5nOiAnemgtSGFudCcsIG1zZzogJ3B3di0yMDE3LXpoLWhhbnQnfSxcblx0XHR7dmFyOiAnemgtY24nLCBodG1sTGFuZzogJ3poLUhhbnMtQ04nLCBtc2c6ICdwd3YtMjAxNy16aC1jbid9LFxuXHRcdHt2YXI6ICd6aC1oaycsIGh0bWxMYW5nOiAnemgtSGFudC1ISycsIG1zZzogJ3B3di0yMDE3LXpoLWhrJ30sXG5cdFx0e3ZhcjogJ3poLW1vJywgaHRtbExhbmc6ICd6aC1IYW50LU1PJywgbXNnOiAncHd2LTIwMTctemgtbW8nfSxcblx0XHR7dmFyOiAnemgtbXknLCBodG1sTGFuZzogJ3poLUhhbnMtTVknLCBtc2c6ICdwd3YtMjAxNy16aC1teSd9LFxuXHRcdHt2YXI6ICd6aC1zZycsIGh0bWxMYW5nOiAnemgtSGFucy1TRycsIG1zZzogJ3B3di0yMDE3LXpoLXNnJ30sXG5cdFx0e3ZhcjogJ3poLXR3JywgaHRtbExhbmc6ICd6aC1IYW50LVRXJywgbXNnOiAncHd2LTIwMTctemgtdHcnfSxcblx0XTtcblx0bXcuY29uZmlnLnNldCgnd2dQcmV2aWV3V2l0aFZhcmlhbnRJbml0aWFsaXplZCcsIGZhbHNlKTtcblxuXHRtdy5tZXNzYWdlcy5zZXQoe1xuXHRcdCdwd3YtMjAxNy1jYXB0aW9uJzogd2luZG93LndnVUxTKCfpgInmi6nor63oqIDlj5jkvZMnLCAn6YG45pOH6Kqe6KiA6K6K6auUJyksXG5cdFx0J3B3di0yMDE3LXpoJzogd2luZG93LndnVUxTKCfkuI3ovazmjaInLCAn5LiN6L2J5o+bJyksXG5cdFx0J3B3di0yMDE3LXpoLWhhbnMnOiAn566A5L2TJyxcblx0XHQncHd2LTIwMTctemgtaGFudCc6ICfnuYHpq5QnLFxuXHRcdCdwd3YtMjAxNy16aC1jbic6ICflpKfpmYbnroDkvZMnLFxuXHRcdCdwd3YtMjAxNy16aC1oayc6ICfpppnmuK/nuYHpq5QnLFxuXHRcdCdwd3YtMjAxNy16aC1tbyc6ICfmvrPploDnuYHpq5QnLFxuXHRcdCdwd3YtMjAxNy16aC1teSc6ICflpKfpqaznroDkvZMnLFxuXHRcdCdwd3YtMjAxNy16aC1zZyc6ICfmlrDliqDlnaHnroDkvZMnLFxuXHRcdCdwd3YtMjAxNy16aC10dyc6ICfoh7rngaPmraPpq5QnLFxuXHR9KTtcblxuXHRjb25zdCBQZW5kaW5nU3RhY2tMYXlvdXQgPSBmdW5jdGlvbiBQZW5kaW5nU3RhY2tMYXlvdXQoY29uZmlnKSB7XG5cdFx0UGVuZGluZ1N0YWNrTGF5b3V0LnN1cGVyLmNhbGwodGhpcywgY29uZmlnKTtcblx0XHRPTy51aS5taXhpbi5QZW5kaW5nRWxlbWVudC5jYWxsKHRoaXMpO1xuXHRcdHRoaXMuJGVsZW1lbnQuYWRkQ2xhc3MoJ3B3di0yMDE3LXBlbmRpbmdTdGFja0xheW91dCcpO1xuXHR9O1xuXG5cdE9PLmluaGVyaXRDbGFzcyhQZW5kaW5nU3RhY2tMYXlvdXQsIE9PLnVpLlN0YWNrTGF5b3V0KTtcblx0T08ubWl4aW5DbGFzcyhQZW5kaW5nU3RhY2tMYXlvdXQsIE9PLnVpLm1peGluLlBlbmRpbmdFbGVtZW50KTtcblxuXHRjb25zdCBlbnRyeVBvaW50ID0gKCkgPT4ge1xuXHRcdGxldCB2YXJpYW50LCB0YXJnZXQsIGRpYWxvZywgZHJvcGRvd24sIHN0YWNrTGF5b3V0LCBwYW5lbExheW91dHMsIHdpbmRvd01hbmFnZXIsIGVycm9yRGlhbG9nO1xuXG5cdFx0Y29uc3QgY29uc3RydWN0RG9jdW1lbnQgPSAodGl0bGUsIHdpa2l0ZXh0LCBjYXRlZ29yaWVzKSA9PiB7XG5cdFx0XHRjb25zdCAkcmVzdWx0ID0gJCgnPGRpdj4nKS5hZGRDbGFzcygnbXctYm9keSBtdy1ib2R5LWNvbnRlbnQnKTtcblxuXHRcdFx0aWYgKG13LmNvbmZpZy5nZXQoJ3NraW4nKSA9PT0gJ3ZlY3RvcicpIHtcblx0XHRcdFx0Ly8gQWRkaXRpb25hbCBjbGFzc2VzIHJlcXVpcmVkIGluIHZlY3RvciB0byBnZXQgY29ycmVjdCBhcHBlYXJhbmNlXG5cdFx0XHRcdCRyZXN1bHQuYWRkQ2xhc3MoJ3ZlY3Rvci1ib2R5Jyk7XG5cdFx0XHR9XG5cblx0XHRcdCRyZXN1bHQuYXBwZW5kKFxuXHRcdFx0XHQkKCc8aDE+JykuYWRkQ2xhc3MoJ2ZpcnN0SGVhZGluZycpLmh0bWwodGl0bGUpLFxuXHRcdFx0XHQvLyBDbGFzc2VzIHVzZWQgaGVyZTpcblx0XHRcdFx0Ly8gKiBtdy1jb250ZW50LWx0clxuXHRcdFx0XHQvLyAqIG13LWNvbnRlbnQtcnRsXG5cdFx0XHRcdCQoJzxkaXY+Jylcblx0XHRcdFx0XHQuYWRkQ2xhc3MoYG13LWNvbnRlbnQtJHttdy5jb25maWcuZ2V0KCd3Z1Zpc3VhbEVkaXRvcicpLnBhZ2VMYW5ndWFnZURpcn1gKVxuXHRcdFx0XHRcdC5hdHRyKFxuXHRcdFx0XHRcdFx0J2xhbmcnLFxuXHRcdFx0XHRcdFx0REFUQS5maW5kKChpdGVtKSA9PiB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBpdGVtLnZhciA9PT0gdmFyaWFudDtcblx0XHRcdFx0XHRcdH0pLmh0bWxMYW5nXG5cdFx0XHRcdFx0KVxuXHRcdFx0XHRcdC5odG1sKHdpa2l0ZXh0KSxcblx0XHRcdFx0JC5wYXJzZUhUTUwoY2F0ZWdvcmllcylcblx0XHRcdCk7XG5cblx0XHRcdC8vIE1ha2Ugb3RoZXIgdGhpbmdzIGxpa2UgUmVmZXJlbmNlIFRvb2x0aXAgZnVuY3Rpb25cblx0XHRcdG13Lmhvb2soJ3dpa2lwYWdlLmNvbnRlbnQnKS5maXJlKCRyZXN1bHQpO1xuXHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG5cdFx0XHR2ZS50YXJnZXRMaW5rc1RvTmV3V2luZG93KCRyZXN1bHRbMF0pO1xuXHRcdFx0cmV0dXJuICRyZXN1bHQ7XG5cdFx0fTtcblxuXHRcdGNvbnN0IGZldGNoUHJldmlldyA9ICgpID0+IHtcblx0XHRcdGNvbnN0IGRlZmVycmVkID0gJC5EZWZlcnJlZCgpO1xuXHRcdFx0Ly8gQ3VycmVudGx5IChBdWcgMjAyMSksIFBhcnNvaWQgQVBJIGRvZXMgbm90IGhhdmUgZnVsbCBMQyBmdW5jdGlvbmFsaXR5LFxuXHRcdFx0Ly8gaGVuY2UgdXNlIHBhcnNlIEFQSSBpbnN0ZWFkLlxuXHRcdFx0dGFyZ2V0XG5cdFx0XHRcdC5nZXRDb250ZW50QXBpKClcblx0XHRcdFx0LnBvc3Qoe1xuXHRcdFx0XHRcdGFjdGlvbjogJ3BhcnNlJyxcblx0XHRcdFx0XHRkaXNhYmxlZWRpdHNlY3Rpb246IHRydWUsXG5cdFx0XHRcdFx0ZXJyb3Jmb3JtYXQ6ICdodG1sJyxcblx0XHRcdFx0XHRlcnJvcmxhbmc6IG13LmNvbmZpZy5nZXQoJ3dnVXNlckxhbmd1YWdlJyksXG5cdFx0XHRcdFx0ZXJyb3JzdXNlbG9jYWw6IHRydWUsXG5cdFx0XHRcdFx0Zm9ybWF0dmVyc2lvbjogMixcblx0XHRcdFx0XHRwcm9wOiAndGV4dHxpbmRpY2F0b3JzfGRpc3BsYXl0aXRsZXxjYXRlZ29yaWVzaHRtbHxwYXJzZXdhcm5pbmdzaHRtbCcsXG5cdFx0XHRcdFx0cHN0OiB0cnVlLFxuXHRcdFx0XHRcdHByZXZpZXc6IHRydWUsXG5cdFx0XHRcdFx0dGl0bGU6IHRhcmdldC5nZXRQYWdlTmFtZSgpLFxuXHRcdFx0XHRcdHRleHQ6IHRhcmdldC5nZXREb2NUb1NhdmUoKSxcblx0XHRcdFx0XHR1c2VsYW5nOiBtdy5jb25maWcuZ2V0KCd3Z1VzZXJMYW5ndWFnZScpLFxuXHRcdFx0XHRcdHZhcmlhbnQsXG5cdFx0XHRcdH0pXG5cdFx0XHRcdC50aGVuKFxuXHRcdFx0XHRcdChyZXNwb25zZSkgPT4ge1xuXHRcdFx0XHRcdFx0ZGVmZXJyZWQucmVzb2x2ZShcblx0XHRcdFx0XHRcdFx0Y29uc3RydWN0RG9jdW1lbnQoXG5cdFx0XHRcdFx0XHRcdFx0cmVzcG9uc2UucGFyc2UuZGlzcGxheXRpdGxlLFxuXHRcdFx0XHRcdFx0XHRcdHJlc3BvbnNlLnBhcnNlLnRleHQsXG5cdFx0XHRcdFx0XHRcdFx0cmVzcG9uc2UucGFyc2UuY2F0ZWdvcmllc2h0bWxcblx0XHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdChlcnJvciwgZGV0YWlsKSA9PiB7XG5cdFx0XHRcdFx0XHRkZWZlcnJlZC5yZWplY3QoZGV0YWlsKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdCk7XG5cdFx0XHRyZXR1cm4gZGVmZXJyZWQ7XG5cdFx0fTtcblxuXHRcdGNvbnN0IGNoYW5nZVZhcmlhbnQgPSBmdW5jdGlvbiBjaGFuZ2VWYXJpYW50KHZhbCkge1xuXHRcdFx0ZGlhbG9nLnByZXZpZXdQYW5lbC4kZWxlbWVudFswXS5mb2N1cygpO1xuXHRcdFx0dmFyaWFudCA9IHZhbDtcblxuXHRcdFx0Y29uc3QgdGFyZ2V0UGFuZWwgPSBzdGFja0xheW91dC5maW5kSXRlbUZyb21EYXRhKHZhcmlhbnQpO1xuXHRcdFx0aWYgKHRhcmdldFBhbmVsLiRlbGVtZW50LmNoaWxkcmVuKCkubGVuZ3RoKSB7XG5cdFx0XHRcdHN0YWNrTGF5b3V0LnNldEl0ZW0odGFyZ2V0UGFuZWwpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0c3RhY2tMYXlvdXQucHVzaFBlbmRpbmcoKTtcblx0XHRcdFx0ZHJvcGRvd24uc2V0RGlzYWJsZWQodHJ1ZSk7XG5cblx0XHRcdFx0ZmV0Y2hQcmV2aWV3KClcblx0XHRcdFx0XHQudGhlbihcblx0XHRcdFx0XHRcdCgkcHJldmlld0NvbnRhaW5lcikgPT4ge1xuXHRcdFx0XHRcdFx0XHR0YXJnZXRQYW5lbC4kZWxlbWVudC5hcHBlbmQoJHByZXZpZXdDb250YWluZXIpO1xuXHRcdFx0XHRcdFx0XHRzdGFja0xheW91dC5zZXRJdGVtKHRhcmdldFBhbmVsKTtcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHQoZXJyb3IpID0+IHtcblx0XHRcdFx0XHRcdFx0d2luZG93TWFuYWdlclxuXHRcdFx0XHRcdFx0XHRcdC5vcGVuV2luZG93KGVycm9yRGlhbG9nLCB7XG5cdFx0XHRcdFx0XHRcdFx0XHR0aXRsZTogT08udWkubXNnKCdvb3VpLWRpYWxvZy1wcm9jZXNzLWVycm9yJyksXG5cdFx0XHRcdFx0XHRcdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcblx0XHRcdFx0XHRcdFx0XHRcdG1lc3NhZ2U6IHZlLmluaXQudGFyZ2V0LmdldENvbnRlbnRBcGkoKS5nZXRFcnJvck1lc3NhZ2UoZXJyb3IpLFxuXHRcdFx0XHRcdFx0XHRcdFx0YWN0aW9uczogW1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0YWN0aW9uOiAncmVqZWN0Jyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRsYWJlbDogT08udWkuZGVmZXJNc2coJ29vdWktZGlhbG9nLW1lc3NhZ2UtcmVqZWN0JyksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZmxhZ3M6ICdzYWZlJyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFjdGlvbjogJ3JldHJ5Jyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRsYWJlbDogT08udWkuZGVmZXJNc2coJ29vdWktZGlhbG9nLXByb2Nlc3MtcmV0cnknKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRmbGFnczogWydwcmltYXJ5JywgJ3Byb2dyZXNzaXZlJ10sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdFx0XHRdLFxuXHRcdFx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XHRcdFx0LmNsb3NlZC50aGVuKChkYXRhKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRpZiAoZGF0YSAmJiBkYXRhLmFjdGlvbiA9PT0gJ3JldHJ5Jykge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHQvLyBEbyBub3QgdXNlIHNldFZhbHVlKCkgc2luY2UgaXQgd2lsbCBub3QgdHJpZ2dlciBldmVudFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjaGFuZ2VWYXJpYW50KHZhcmlhbnQpO1xuXHRcdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0Ly8gXCJ2YXJpYW50XCIgd2lsbCBiZSBzZXQgYnkgZXZlbnQgaGFuZGxlclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRkcm9wZG93bi5zZXRWYWx1ZShzdGFja0xheW91dC5nZXRDdXJyZW50SXRlbSgpLmdldERhdGEoKSk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0KVxuXHRcdFx0XHRcdC5hbHdheXMoKCkgPT4ge1xuXHRcdFx0XHRcdFx0c3RhY2tMYXlvdXQucG9wUGVuZGluZygpO1xuXHRcdFx0XHRcdFx0ZHJvcGRvd24uc2V0RGlzYWJsZWQoZmFsc2UpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdH07XG5cblx0XHRjb25zdCBwcmV2aWV3V2l0aFZhcmlhbnQgPSAoKSA9PiB7XG5cdFx0XHRjb25zdCBjdXJyZW50UGFuZWwgPSBzdGFja0xheW91dC5nZXRDdXJyZW50SXRlbSgpO1xuXG5cdFx0XHRpZiAoY3VycmVudFBhbmVsLiRlbGVtZW50LmNoaWxkcmVuKCkubGVuZ3RoKSB7XG5cdFx0XHRcdGRpYWxvZy5zd2FwUGFuZWwoJ3ByZXZpZXcnKTtcblx0XHRcdFx0ZGlhbG9nLnByZXZpZXdQYW5lbC4kZWxlbWVudC5wcmVwZW5kKGRyb3Bkb3duLiRlbGVtZW50KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRhcmdldC5lbWl0KCdzYXZlUHJldmlldycpO1xuXHRcdFx0XHRkaWFsb2cucHVzaFBlbmRpbmcoKTtcblxuXHRcdFx0XHRmZXRjaFByZXZpZXcoKVxuXHRcdFx0XHRcdC50aGVuKFxuXHRcdFx0XHRcdFx0KCRwcmV2aWV3Q29udGVudCkgPT4ge1xuXHRcdFx0XHRcdFx0XHR0YXJnZXRcblx0XHRcdFx0XHRcdFx0XHQuZ2V0U3VyZmFjZSgpXG5cdFx0XHRcdFx0XHRcdFx0LmdldE1vZGVsKClcblx0XHRcdFx0XHRcdFx0XHQuZ2V0RG9jdW1lbnQoKVxuXHRcdFx0XHRcdFx0XHRcdC5vbmNlKCd0cmFuc2FjdCcsICgpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdGZvciAoY29uc3QgaXRlbSBvZiBwYW5lbExheW91dHMpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0aXRlbS4kZWxlbWVudC5lbXB0eSgpO1xuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0XHRkaWFsb2cuc3dhcFBhbmVsKCdwcmV2aWV3Jyk7XG5cdFx0XHRcdFx0XHRcdGN1cnJlbnRQYW5lbC4kZWxlbWVudC5hcHBlbmQoJHByZXZpZXdDb250ZW50KTtcblx0XHRcdFx0XHRcdFx0c3RhY2tMYXlvdXQuc2V0SXRlbShzdGFja0xheW91dC5maW5kSXRlbUZyb21EYXRhKHZhcmlhbnQpKTtcblx0XHRcdFx0XHRcdFx0ZGlhbG9nLnByZXZpZXdQYW5lbC4kZWxlbWVudC5wcmVwZW5kKGRyb3Bkb3duLiRlbGVtZW50KTtcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHQoZXJyb3IpID0+IHtcblx0XHRcdFx0XHRcdFx0ZGlhbG9nLnNob3dFcnJvcnMoXG5cdFx0XHRcdFx0XHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG5cdFx0XHRcdFx0XHRcdFx0bmV3IE9PLnVpLkVycm9yKHZlLmluaXQudGFyZ2V0LmdldENvbnRlbnRBcGkoKS5nZXRFcnJvck1lc3NhZ2UoZXJyb3IpLCB7XG5cdFx0XHRcdFx0XHRcdFx0XHRyZWNvdmVyYWJsZTogdHJ1ZSxcblx0XHRcdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdClcblx0XHRcdFx0XHQuYWx3YXlzKCgpID0+IHtcblx0XHRcdFx0XHRcdGRpYWxvZy5wb3BQZW5kaW5nKCk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fTtcblxuXHRcdGNvbnN0IGluaXQgPSAoKSA9PiB7XG5cdFx0XHR2YXJpYW50ID0gbXcuY29uZmlnLmdldCgnd2dVc2VyVmFyaWFudCcpO1xuXHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG5cdFx0XHQoe3RhcmdldH0gPSB2ZS5pbml0KTtcblx0XHRcdGRpYWxvZyA9IHRhcmdldC5zYXZlRGlhbG9nO1xuXHRcdFx0ZHJvcGRvd24gPSBuZXcgT08udWkuRHJvcGRvd25JbnB1dFdpZGdldCh7XG5cdFx0XHRcdCRvdmVybGF5OiBkaWFsb2cuJG92ZXJsYXksXG5cdFx0XHRcdGNsYXNzZXM6IFsncHd2LTIwMTctdmFyaWFudCddLFxuXHRcdFx0XHRvcHRpb25zOiBbXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0b3B0Z3JvdXA6IG13Lm1zZygncHd2LTIwMTctY2FwdGlvbicpLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0Li4uREFUQS5tYXAoKGl0ZW0pID0+IHtcblx0XHRcdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0XHRcdGRhdGE6IGl0ZW0udmFyLFxuXHRcdFx0XHRcdFx0XHRsYWJlbDogbXcubXNnKGl0ZW0ubXNnKSAvKiBlc2xpbnQtZGlzYWJsZS1saW5lIG1lZGlhd2lraS9tc2ctZG9jICovLFxuXHRcdFx0XHRcdFx0fTtcblx0XHRcdFx0XHR9KSxcblx0XHRcdFx0XSxcblx0XHRcdFx0dmFsdWU6IHZhcmlhbnQsXG5cdFx0XHR9KTtcblx0XHRcdGRyb3Bkb3duLm9uKCdjaGFuZ2UnLCBjaGFuZ2VWYXJpYW50KTtcblx0XHRcdHBhbmVsTGF5b3V0cyA9IERBVEEubWFwKChpdGVtKSA9PiB7XG5cdFx0XHRcdHJldHVybiBuZXcgT08udWkuUGFuZWxMYXlvdXQoe1xuXHRcdFx0XHRcdGV4cGFuZGVkOiBmYWxzZSxcblx0XHRcdFx0XHRkYXRhOiBpdGVtLnZhcixcblx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblx0XHRcdHN0YWNrTGF5b3V0ID0gbmV3IFBlbmRpbmdTdGFja0xheW91dCh7XG5cdFx0XHRcdGV4cGFuZGVkOiBmYWxzZSxcblx0XHRcdFx0aXRlbXM6IHBhbmVsTGF5b3V0cyxcblx0XHRcdH0pO1xuXHRcdFx0c3RhY2tMYXlvdXQuc2V0SXRlbShzdGFja0xheW91dC5maW5kSXRlbUZyb21EYXRhKHZhcmlhbnQpKTtcblx0XHRcdGRpYWxvZy5wcmV2aWV3UGFuZWwuJGVsZW1lbnQuYXBwZW5kKHN0YWNrTGF5b3V0LiRlbGVtZW50KTtcblx0XHRcdGVycm9yRGlhbG9nID0gbmV3IE9PLnVpLk1lc3NhZ2VEaWFsb2coKTtcblx0XHRcdHdpbmRvd01hbmFnZXIgPSBuZXcgT08udWkuV2luZG93TWFuYWdlcigpO1xuXHRcdFx0d2luZG93TWFuYWdlci5hZGRXaW5kb3dzKFtlcnJvckRpYWxvZ10pO1xuXHRcdFx0JChkb2N1bWVudC5ib2R5KS5hcHBlbmQod2luZG93TWFuYWdlci4kZWxlbWVudCk7XG5cblx0XHRcdGNvbnN0IGhhbmRsZXJUb1JlbW92ZSA9ICdvblNhdmVEaWFsb2dQcmV2aWV3Jztcblx0XHRcdGRpYWxvZy5vZmYoJ3ByZXZpZXcnLCBoYW5kbGVyVG9SZW1vdmUsIHRhcmdldCkub24oJ3ByZXZpZXcnLCBwcmV2aWV3V2l0aFZhcmlhbnQpO1xuXHRcdH07XG5cblx0XHRpZiAoIW13LmNvbmZpZy5nZXQoJ3dnUHJldmlld1dpdGhWYXJpYW50SW5pdGlhbGl6ZWQnKSkge1xuXHRcdFx0aW5pdCgpO1xuXHRcdFx0bXcuY29uZmlnLnNldCgnd2dQcmV2aWV3V2l0aFZhcmlhbnRJbml0aWFsaXplZCcsIHRydWUpO1xuXHRcdH1cblx0fTtcblxuXHRtdy5ob29rKCd2ZS5zYXZlRGlhbG9nLnN0YXRlQ2hhbmdlZCcpLmFkZChlbnRyeVBvaW50KTtcblxuXHRtdy5ob29rKCd2ZS5hY3RpdmF0aW9uQ29tcGxldGUnKS5hZGQoKCkgPT4ge1xuXHRcdGlmIChtdy5jb25maWcuZ2V0KCd3Z1ByZXZpZXdXaXRoVmFyaWFudEluaXRpYWxpemVkJykpIHtcblx0XHRcdC8vIFN3aXRjaGluZyBiZXR3ZWVuIFZFIGFuZCBOV0UsIHJlcXVpcmVzIHRvIGJlIHJlaW5pdGlhbGl6ZWRcblx0XHRcdG13LmNvbmZpZy5zZXQoJ3dnUHJldmlld1dpdGhWYXJpYW50SW5pdGlhbGl6ZWQnLCB0cnVlKTtcblx0XHR9XG5cdH0pO1xufSkoKTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBSUMsU0FBU0EseUJBQXlCO0FBQ2xDLFFBQU1DLE9BQU8sQ0FDWjtJQUFDQyxLQUFLO0lBQU1DLFVBQVU7SUFBTUMsS0FBSztFQUFhLEdBQzlDO0lBQUNGLEtBQUs7SUFBV0MsVUFBVTtJQUFXQyxLQUFLO0VBQWtCLEdBQzdEO0lBQUNGLEtBQUs7SUFBV0MsVUFBVTtJQUFXQyxLQUFLO0VBQWtCLEdBQzdEO0lBQUNGLEtBQUs7SUFBU0MsVUFBVTtJQUFjQyxLQUFLO0VBQWdCLEdBQzVEO0lBQUNGLEtBQUs7SUFBU0MsVUFBVTtJQUFjQyxLQUFLO0VBQWdCLEdBQzVEO0lBQUNGLEtBQUs7SUFBU0MsVUFBVTtJQUFjQyxLQUFLO0VBQWdCLEdBQzVE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LElBQUksRUFBRTFHLE9BQU9ULGNBQWNaLFFBQVE7QUFFOUMsWUFBTWdJLGtCQUFrQjtBQUN4QnhILGFBQU95SCxJQUFJLFdBQVdELGlCQUFpQnpILE1BQU0sRUFBRWdILEdBQUcsV0FBVy9CLGtCQUFrQjtJQUNoRjtBQUVBLFFBQUksQ0FBQ3RHLEdBQUdDLE9BQU9pQyxJQUFJLGlDQUFpQyxHQUFHO0FBQ3REdUQsV0FBSztBQUNMekYsU0FBR0MsT0FBT0MsSUFBSSxtQ0FBbUMsSUFBSTtJQUN0RDtFQUNEO0FBRUFGLEtBQUcyQyxLQUFLLDRCQUE0QixFQUFFcUcsSUFBSTdILFVBQVU7QUFFcERuQixLQUFHMkMsS0FBSyx1QkFBdUIsRUFBRXFHLElBQUksTUFBTTtBQUMxQyxRQUFJaEosR0FBR0MsT0FBT2lDLElBQUksaUNBQWlDLEdBQUc7QUFFckRsQyxTQUFHQyxPQUFPQyxJQUFJLG1DQUFtQyxJQUFJO0lBQ3REO0VBQ0QsQ0FBQztBQUNGLEdBQUc7IiwKICAibmFtZXMiOiBbIlByZXZpZXdXaXRoVmFyaWFudDIwMTciLCAiREFUQSIsICJ2YXIiLCAiaHRtbExhbmciLCAibXNnIiwgIm13IiwgImNvbmZpZyIsICJzZXQiLCAibWVzc2FnZXMiLCAid2luZG93IiwgIndnVUxTIiwgIlBlbmRpbmdTdGFja0xheW91dCIsICJQZW5kaW5nU3RhY2tMYXlvdXQyIiwgInN1cGVyIiwgImNhbGwiLCAiT08iLCAidWkiLCAibWl4aW4iLCAiUGVuZGluZ0VsZW1lbnQiLCAiJGVsZW1lbnQiLCAiYWRkQ2xhc3MiLCAiaW5oZXJpdENsYXNzIiwgIlN0YWNrTGF5b3V0IiwgIm1peGluQ2xhc3MiLCAiZW50cnlQb2ludCIsICJ2YXJpYW50IiwgInRhcmdldCIsICJkaWFsb2ciLCAiZHJvcGRvd24iLCAic3RhY2tMYXlvdXQiLCAicGFuZWxMYXlvdXRzIiwgIndpbmRvd01hbmFnZXIiLCAiZXJyb3JEaWFsb2ciLCAiY29uc3RydWN0RG9jdW1lbnQiLCAidGl0bGUiLCAid2lraXRleHQiLCAiY2F0ZWdvcmllcyIsICIkcmVzdWx0IiwgIiQiLCAiZ2V0IiwgImFwcGVuZCIsICJodG1sIiwgImNvbmNhdCIsICJwYWdlTGFuZ3VhZ2VEaXIiLCAiYXR0ciIsICJmaW5kIiwgIml0ZW0iLCAicGFyc2VIVE1MIiwgImhvb2siLCAiZmlyZSIsICJ2ZSIsICJ0YXJnZXRMaW5rc1RvTmV3V2luZG93IiwgImZldGNoUHJldmlldyIsICJkZWZlcnJlZCIsICJEZWZlcnJlZCIsICJnZXRDb250ZW50QXBpIiwgInBvc3QiLCAiYWN0aW9uIiwgImRpc2FibGVlZGl0c2VjdGlvbiIsICJlcnJvcmZvcm1hdCIsICJlcnJvcmxhbmciLCAiZXJyb3JzdXNlbG9jYWwiLCAiZm9ybWF0dmVyc2lvbiIsICJwcm9wIiwgInBzdCIsICJwcmV2aWV3IiwgImdldFBhZ2VOYW1lIiwgInRleHQiLCAiZ2V0RG9jVG9TYXZlIiwgInVzZWxhbmciLCAidGhlbiIsICJyZXNwb25zZSIsICJyZXNvbHZlIiwgInBhcnNlIiwgImRpc3BsYXl0aXRsZSIsICJjYXRlZ29yaWVzaHRtbCIsICJlcnJvciIsICJkZXRhaWwiLCAicmVqZWN0IiwgImNoYW5nZVZhcmlhbnQiLCAiY2hhbmdlVmFyaWFudDIiLCAidmFsIiwgInByZXZpZXdQYW5lbCIsICJmb2N1cyIsICJ0YXJnZXRQYW5lbCIsICJmaW5kSXRlbUZyb21EYXRhIiwgImNoaWxkcmVuIiwgImxlbmd0aCIsICJzZXRJdGVtIiwgInB1c2hQZW5kaW5nIiwgInNldERpc2FibGVkIiwgIiRwcmV2aWV3Q29udGFpbmVyIiwgIm9wZW5XaW5kb3ciLCAibWVzc2FnZSIsICJpbml0IiwgImdldEVycm9yTWVzc2FnZSIsICJhY3Rpb25zIiwgImxhYmVsIiwgImRlZmVyTXNnIiwgImZsYWdzIiwgImNsb3NlZCIsICJkYXRhIiwgInNldFZhbHVlIiwgImdldEN1cnJlbnRJdGVtIiwgImdldERhdGEiLCAiYWx3YXlzIiwgInBvcFBlbmRpbmciLCAicHJldmlld1dpdGhWYXJpYW50IiwgImN1cnJlbnRQYW5lbCIsICJzd2FwUGFuZWwiLCAicHJlcGVuZCIsICJlbWl0IiwgIiRwcmV2aWV3Q29udGVudCIsICJnZXRTdXJmYWNlIiwgImdldE1vZGVsIiwgImdldERvY3VtZW50IiwgIm9uY2UiLCAiX2l0ZXJhdG9yIiwgIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwgIl9zdGVwIiwgInMiLCAibiIsICJkb25lIiwgInZhbHVlIiwgImVtcHR5IiwgImVyciIsICJlIiwgImYiLCAic2hvd0Vycm9ycyIsICJFcnJvciIsICJyZWNvdmVyYWJsZSIsICJzYXZlRGlhbG9nIiwgIkRyb3Bkb3duSW5wdXRXaWRnZXQiLCAiJG92ZXJsYXkiLCAiY2xhc3NlcyIsICJvcHRpb25zIiwgIm9wdGdyb3VwIiwgIm1hcCIsICJvbiIsICJQYW5lbExheW91dCIsICJleHBhbmRlZCIsICJpdGVtcyIsICJNZXNzYWdlRGlhbG9nIiwgIldpbmRvd01hbmFnZXIiLCAiYWRkV2luZG93cyIsICJkb2N1bWVudCIsICJib2R5IiwgImhhbmRsZXJUb1JlbW92ZSIsICJvZmYiLCAiYWRkIl0KfQo=

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
var WG_SKIN = mw.config.get("skin");
var WG_USER_LANGUAGE = mw.config.get("wgUserLanguage");
var WG_USER_VARIANT = mw.config.get("wgUserVariant");
//! src/PreviewWithVariant2017/modules/messages.ts
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
//! src/PreviewWithVariant2017/PreviewWithVariant2017.js
PWV2017messages();
var PendingStackLayout = function PendingStackLayout2(config) {
  PendingStackLayout2.super.call(this, config);
  OO.ui.mixin.PendingElement.call(this);
  this.$element.addClass("pwv-2017-pendingStackLayout");
};
OO.inheritClass(PendingStackLayout, OO.ui.StackLayout);
OO.mixinClass(PendingStackLayout, OO.ui.mixin.PendingElement);
var entryPoint = () => {
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
    variant = WG_USER_VARIANT;
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
  if (!mw.config.get("wgPreviewWithVariant2017Initialized")) {
    init();
    mw.config.set("wgPreviewWithVariant2017Initialized", true);
  }
};
mw.hook("ve.saveDialog.stateChanged").add(entryPoint);
mw.hook("ve.activationComplete").add(() => {
  if (mw.config.get("wgPreviewWithVariant2017Initialized")) {
    mw.config.set("wgPreviewWithVariant2017Initialized", false);
  }
});

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1ByZXZpZXdXaXRoVmFyaWFudDIwMTcvbW9kdWxlcy9jb25zdGFudC50cyIsICJzcmMvUHJldmlld1dpdGhWYXJpYW50MjAxNy9tb2R1bGVzL21lc3NhZ2VzLnRzIiwgInNyYy9QcmV2aWV3V2l0aFZhcmlhbnQyMDE3L1ByZXZpZXdXaXRoVmFyaWFudDIwMTcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IERBVEEgPSBbXG5cdHt2YXI6ICd6aCcsIGh0bWxMYW5nOiAnemgnLCBtc2c6ICdwd3YtMjAxNy16aCd9LFxuXHR7dmFyOiAnemgtaGFucycsIGh0bWxMYW5nOiAnemgtSGFucycsIG1zZzogJ3B3di0yMDE3LXpoLWhhbnMnfSxcblx0e3ZhcjogJ3poLWhhbnQnLCBodG1sTGFuZzogJ3poLUhhbnQnLCBtc2c6ICdwd3YtMjAxNy16aC1oYW50J30sXG5cdHt2YXI6ICd6aC1jbicsIGh0bWxMYW5nOiAnemgtSGFucy1DTicsIG1zZzogJ3B3di0yMDE3LXpoLWNuJ30sXG5cdHt2YXI6ICd6aC1oaycsIGh0bWxMYW5nOiAnemgtSGFudC1ISycsIG1zZzogJ3B3di0yMDE3LXpoLWhrJ30sXG5cdHt2YXI6ICd6aC1tbycsIGh0bWxMYW5nOiAnemgtSGFudC1NTycsIG1zZzogJ3B3di0yMDE3LXpoLW1vJ30sXG5cdHt2YXI6ICd6aC1teScsIGh0bWxMYW5nOiAnemgtSGFucy1NWScsIG1zZzogJ3B3di0yMDE3LXpoLW15J30sXG5cdHt2YXI6ICd6aC1zZycsIGh0bWxMYW5nOiAnemgtSGFucy1TRycsIG1zZzogJ3B3di0yMDE3LXpoLXNnJ30sXG5cdHt2YXI6ICd6aC10dycsIGh0bWxMYW5nOiAnemgtSGFudC1UVycsIG1zZzogJ3B3di0yMDE3LXpoLXR3J30sXG5dO1xuXG5jb25zdCBXR19TS0lOID0gbXcuY29uZmlnLmdldCgnc2tpbicpO1xuXG5jb25zdCBXR19VU0VSX0xBTkdVQUdFOiBzdHJpbmcgPSBtdy5jb25maWcuZ2V0KCd3Z1VzZXJMYW5ndWFnZScpO1xuXG5jb25zdCBXR19VU0VSX1ZBUklBTlQ6IHN0cmluZyB8IG51bGwgPSBtdy5jb25maWcuZ2V0KCd3Z1VzZXJWYXJpYW50Jyk7XG5cbmV4cG9ydCB7REFUQSwgV0dfU0tJTiwgV0dfVVNFUl9MQU5HVUFHRSwgV0dfVVNFUl9WQVJJQU5UfTtcbiIsICJjb25zdCBQV1YyMDE3bWVzc2FnZXMgPSAoKSA9PiB7XG5cdG13Lm1lc3NhZ2VzLnNldCh7XG5cdFx0J3B3di0yMDE3LWNhcHRpb24nOiB3aW5kb3cud2dVTFMoJ+mAieaLqeivreiogOWPmOS9kycsICfpgbjmk4foqp7oqIDororpq5QnKSxcblx0XHQncHd2LTIwMTctemgnOiB3aW5kb3cud2dVTFMoJ+S4jei9rOaNoicsICfkuI3ovYnmj5snKSxcblx0XHQncHd2LTIwMTctemgtaGFucyc6ICfnroDkvZMnLFxuXHRcdCdwd3YtMjAxNy16aC1oYW50JzogJ+e5gemrlCcsXG5cdFx0J3B3di0yMDE3LXpoLWNuJzogJ+Wkp+mZhueugOS9kycsXG5cdFx0J3B3di0yMDE3LXpoLWhrJzogJ+mmmea4r+e5gemrlCcsXG5cdFx0J3B3di0yMDE3LXpoLW1vJzogJ+a+s+mWgOe5gemrlCcsXG5cdFx0J3B3di0yMDE3LXpoLW15JzogJ+Wkp+mprOeugOS9kycsXG5cdFx0J3B3di0yMDE3LXpoLXNnJzogJ+aWsOWKoOWdoeeugOS9kycsXG5cdFx0J3B3di0yMDE3LXpoLXR3JzogJ+iHuueBo+ato+mrlCcsXG5cdH0pO1xufTtcblxuZXhwb3J0IHtQV1YyMDE3bWVzc2FnZXN9O1xuIiwgIi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXRzLWNvbW1lbnRcbi8vIEB0cy1ub2NoZWNrXG5pbXBvcnQgJy4vUHJldmlld1dpdGhWYXJpYW50MjAxNy5sZXNzJztcbmltcG9ydCB7REFUQSwgV0dfU0tJTiwgV0dfVVNFUl9MQU5HVUFHRSwgV0dfVVNFUl9WQVJJQU5UfSBmcm9tICcuL21vZHVsZXMvY29uc3RhbnQnO1xuaW1wb3J0IHtQV1YyMDE3bWVzc2FnZXN9IGZyb20gJy4vbW9kdWxlcy9tZXNzYWdlcyc7XG5cblBXVjIwMTdtZXNzYWdlcygpO1xuXG5jb25zdCBQZW5kaW5nU3RhY2tMYXlvdXQgPSBmdW5jdGlvbiBQZW5kaW5nU3RhY2tMYXlvdXQoY29uZmlnKSB7XG5cdFBlbmRpbmdTdGFja0xheW91dC5zdXBlci5jYWxsKHRoaXMsIGNvbmZpZyk7XG5cdE9PLnVpLm1peGluLlBlbmRpbmdFbGVtZW50LmNhbGwodGhpcyk7XG5cdHRoaXMuJGVsZW1lbnQuYWRkQ2xhc3MoJ3B3di0yMDE3LXBlbmRpbmdTdGFja0xheW91dCcpO1xufTtcblxuT08uaW5oZXJpdENsYXNzKFBlbmRpbmdTdGFja0xheW91dCwgT08udWkuU3RhY2tMYXlvdXQpO1xuT08ubWl4aW5DbGFzcyhQZW5kaW5nU3RhY2tMYXlvdXQsIE9PLnVpLm1peGluLlBlbmRpbmdFbGVtZW50KTtcblxuY29uc3QgZW50cnlQb2ludCA9ICgpID0+IHtcblx0bGV0IHZhcmlhbnQsIHRhcmdldCwgZGlhbG9nLCBkcm9wZG93biwgc3RhY2tMYXlvdXQsIHBhbmVsTGF5b3V0cywgd2luZG93TWFuYWdlciwgZXJyb3JEaWFsb2c7XG5cblx0Y29uc3QgY29uc3RydWN0RG9jdW1lbnQgPSAodGl0bGUsIHdpa2l0ZXh0LCBjYXRlZ29yaWVzKSA9PiB7XG5cdFx0Y29uc3QgJHJlc3VsdCA9ICQoJzxkaXY+JykuYWRkQ2xhc3MoJ213LWJvZHkgbXctYm9keS1jb250ZW50Jyk7XG5cblx0XHRpZiAoV0dfU0tJTiA9PT0gJ3ZlY3RvcicpIHtcblx0XHRcdC8vIEFkZGl0aW9uYWwgY2xhc3NlcyByZXF1aXJlZCBpbiB2ZWN0b3IgdG8gZ2V0IGNvcnJlY3QgYXBwZWFyYW5jZVxuXHRcdFx0JHJlc3VsdC5hZGRDbGFzcygndmVjdG9yLWJvZHknKTtcblx0XHR9XG5cblx0XHQkcmVzdWx0LmFwcGVuZChcblx0XHRcdCQoJzxoMT4nKS5hZGRDbGFzcygnZmlyc3RIZWFkaW5nJykuaHRtbCh0aXRsZSksXG5cdFx0XHQvLyBDbGFzc2VzIHVzZWQgaGVyZTpcblx0XHRcdC8vICogbXctY29udGVudC1sdHJcblx0XHRcdC8vICogbXctY29udGVudC1ydGxcblx0XHRcdCQoJzxkaXY+Jylcblx0XHRcdFx0LmFkZENsYXNzKGBtdy1jb250ZW50LSR7bXcuY29uZmlnLmdldCgnd2dWaXN1YWxFZGl0b3InKS5wYWdlTGFuZ3VhZ2VEaXJ9YClcblx0XHRcdFx0LmF0dHIoXG5cdFx0XHRcdFx0J2xhbmcnLFxuXHRcdFx0XHRcdERBVEEuZmluZCgoaXRlbSkgPT4ge1xuXHRcdFx0XHRcdFx0cmV0dXJuIGl0ZW0udmFyID09PSB2YXJpYW50O1xuXHRcdFx0XHRcdH0pLmh0bWxMYW5nXG5cdFx0XHRcdClcblx0XHRcdFx0Lmh0bWwod2lraXRleHQpLFxuXHRcdFx0JC5wYXJzZUhUTUwoY2F0ZWdvcmllcylcblx0XHQpO1xuXG5cdFx0Ly8gTWFrZSBvdGhlciB0aGluZ3MgbGlrZSBSZWZlcmVuY2UgVG9vbHRpcCBmdW5jdGlvblxuXHRcdG13Lmhvb2soJ3dpa2lwYWdlLmNvbnRlbnQnKS5maXJlKCRyZXN1bHQpO1xuXHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuXHRcdHZlLnRhcmdldExpbmtzVG9OZXdXaW5kb3coJHJlc3VsdFswXSk7XG5cdFx0cmV0dXJuICRyZXN1bHQ7XG5cdH07XG5cblx0Y29uc3QgZmV0Y2hQcmV2aWV3ID0gKCkgPT4ge1xuXHRcdGNvbnN0IGRlZmVycmVkID0gJC5EZWZlcnJlZCgpO1xuXHRcdC8vIEN1cnJlbnRseSAoQXVnIDIwMjEpLCBQYXJzb2lkIEFQSSBkb2VzIG5vdCBoYXZlIGZ1bGwgTEMgZnVuY3Rpb25hbGl0eSxcblx0XHQvLyBoZW5jZSB1c2UgcGFyc2UgQVBJIGluc3RlYWQuXG5cdFx0dGFyZ2V0XG5cdFx0XHQuZ2V0Q29udGVudEFwaSgpXG5cdFx0XHQucG9zdCh7XG5cdFx0XHRcdGFjdGlvbjogJ3BhcnNlJyxcblx0XHRcdFx0ZGlzYWJsZWVkaXRzZWN0aW9uOiB0cnVlLFxuXHRcdFx0XHRlcnJvcmZvcm1hdDogJ2h0bWwnLFxuXHRcdFx0XHRlcnJvcmxhbmc6IFdHX1VTRVJfTEFOR1VBR0UsXG5cdFx0XHRcdGVycm9yc3VzZWxvY2FsOiB0cnVlLFxuXHRcdFx0XHRmb3JtYXR2ZXJzaW9uOiAyLFxuXHRcdFx0XHRwcm9wOiAndGV4dHxpbmRpY2F0b3JzfGRpc3BsYXl0aXRsZXxjYXRlZ29yaWVzaHRtbHxwYXJzZXdhcm5pbmdzaHRtbCcsXG5cdFx0XHRcdHBzdDogdHJ1ZSxcblx0XHRcdFx0cHJldmlldzogdHJ1ZSxcblx0XHRcdFx0dGl0bGU6IHRhcmdldC5nZXRQYWdlTmFtZSgpLFxuXHRcdFx0XHR0ZXh0OiB0YXJnZXQuZ2V0RG9jVG9TYXZlKCksXG5cdFx0XHRcdHVzZWxhbmc6IFdHX1VTRVJfTEFOR1VBR0UsXG5cdFx0XHRcdHZhcmlhbnQsXG5cdFx0XHR9KVxuXHRcdFx0LnRoZW4oXG5cdFx0XHRcdChyZXNwb25zZSkgPT4ge1xuXHRcdFx0XHRcdGRlZmVycmVkLnJlc29sdmUoXG5cdFx0XHRcdFx0XHRjb25zdHJ1Y3REb2N1bWVudChcblx0XHRcdFx0XHRcdFx0cmVzcG9uc2UucGFyc2UuZGlzcGxheXRpdGxlLFxuXHRcdFx0XHRcdFx0XHRyZXNwb25zZS5wYXJzZS50ZXh0LFxuXHRcdFx0XHRcdFx0XHRyZXNwb25zZS5wYXJzZS5jYXRlZ29yaWVzaHRtbFxuXHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdChlcnJvciwgZGV0YWlsKSA9PiB7XG5cdFx0XHRcdFx0ZGVmZXJyZWQucmVqZWN0KGRldGFpbCk7XG5cdFx0XHRcdH1cblx0XHRcdCk7XG5cdFx0cmV0dXJuIGRlZmVycmVkO1xuXHR9O1xuXG5cdGNvbnN0IGNoYW5nZVZhcmlhbnQgPSBmdW5jdGlvbiBjaGFuZ2VWYXJpYW50KHZhbCkge1xuXHRcdGRpYWxvZy5wcmV2aWV3UGFuZWwuJGVsZW1lbnRbMF0uZm9jdXMoKTtcblx0XHR2YXJpYW50ID0gdmFsO1xuXG5cdFx0Y29uc3QgdGFyZ2V0UGFuZWwgPSBzdGFja0xheW91dC5maW5kSXRlbUZyb21EYXRhKHZhcmlhbnQpO1xuXHRcdGlmICh0YXJnZXRQYW5lbC4kZWxlbWVudC5jaGlsZHJlbigpLmxlbmd0aCkge1xuXHRcdFx0c3RhY2tMYXlvdXQuc2V0SXRlbSh0YXJnZXRQYW5lbCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHN0YWNrTGF5b3V0LnB1c2hQZW5kaW5nKCk7XG5cdFx0XHRkcm9wZG93bi5zZXREaXNhYmxlZCh0cnVlKTtcblxuXHRcdFx0ZmV0Y2hQcmV2aWV3KClcblx0XHRcdFx0LnRoZW4oXG5cdFx0XHRcdFx0KCRwcmV2aWV3Q29udGFpbmVyKSA9PiB7XG5cdFx0XHRcdFx0XHR0YXJnZXRQYW5lbC4kZWxlbWVudC5hcHBlbmQoJHByZXZpZXdDb250YWluZXIpO1xuXHRcdFx0XHRcdFx0c3RhY2tMYXlvdXQuc2V0SXRlbSh0YXJnZXRQYW5lbCk7XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHQoZXJyb3IpID0+IHtcblx0XHRcdFx0XHRcdHdpbmRvd01hbmFnZXJcblx0XHRcdFx0XHRcdFx0Lm9wZW5XaW5kb3coZXJyb3JEaWFsb2csIHtcblx0XHRcdFx0XHRcdFx0XHR0aXRsZTogT08udWkubXNnKCdvb3VpLWRpYWxvZy1wcm9jZXNzLWVycm9yJyksXG5cdFx0XHRcdFx0XHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG5cdFx0XHRcdFx0XHRcdFx0bWVzc2FnZTogdmUuaW5pdC50YXJnZXQuZ2V0Q29udGVudEFwaSgpLmdldEVycm9yTWVzc2FnZShlcnJvciksXG5cdFx0XHRcdFx0XHRcdFx0YWN0aW9uczogW1xuXHRcdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRhY3Rpb246ICdyZWplY3QnLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRsYWJlbDogT08udWkuZGVmZXJNc2coJ29vdWktZGlhbG9nLW1lc3NhZ2UtcmVqZWN0JyksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGZsYWdzOiAnc2FmZScsXG5cdFx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRhY3Rpb246ICdyZXRyeScsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsOiBPTy51aS5kZWZlck1zZygnb291aS1kaWFsb2ctcHJvY2Vzcy1yZXRyeScpLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRmbGFnczogWydwcmltYXJ5JywgJ3Byb2dyZXNzaXZlJ10sXG5cdFx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRcdF0sXG5cdFx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XHRcdC5jbG9zZWQudGhlbigoZGF0YSkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdGlmIChkYXRhICYmIGRhdGEuYWN0aW9uID09PSAncmV0cnknKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHQvLyBEbyBub3QgdXNlIHNldFZhbHVlKCkgc2luY2UgaXQgd2lsbCBub3QgdHJpZ2dlciBldmVudFxuXHRcdFx0XHRcdFx0XHRcdFx0Y2hhbmdlVmFyaWFudCh2YXJpYW50KTtcblx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdFx0Ly8gXCJ2YXJpYW50XCIgd2lsbCBiZSBzZXQgYnkgZXZlbnQgaGFuZGxlclxuXHRcdFx0XHRcdFx0XHRcdFx0ZHJvcGRvd24uc2V0VmFsdWUoc3RhY2tMYXlvdXQuZ2V0Q3VycmVudEl0ZW0oKS5nZXREYXRhKCkpO1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHQpXG5cdFx0XHRcdC5hbHdheXMoKCkgPT4ge1xuXHRcdFx0XHRcdHN0YWNrTGF5b3V0LnBvcFBlbmRpbmcoKTtcblx0XHRcdFx0XHRkcm9wZG93bi5zZXREaXNhYmxlZChmYWxzZSk7XG5cdFx0XHRcdH0pO1xuXHRcdH1cblx0fTtcblxuXHRjb25zdCBwcmV2aWV3V2l0aFZhcmlhbnQgPSAoKSA9PiB7XG5cdFx0Y29uc3QgY3VycmVudFBhbmVsID0gc3RhY2tMYXlvdXQuZ2V0Q3VycmVudEl0ZW0oKTtcblxuXHRcdGlmIChjdXJyZW50UGFuZWwuJGVsZW1lbnQuY2hpbGRyZW4oKS5sZW5ndGgpIHtcblx0XHRcdGRpYWxvZy5zd2FwUGFuZWwoJ3ByZXZpZXcnKTtcblx0XHRcdGRpYWxvZy5wcmV2aWV3UGFuZWwuJGVsZW1lbnQucHJlcGVuZChkcm9wZG93bi4kZWxlbWVudCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRhcmdldC5lbWl0KCdzYXZlUHJldmlldycpO1xuXHRcdFx0ZGlhbG9nLnB1c2hQZW5kaW5nKCk7XG5cblx0XHRcdGZldGNoUHJldmlldygpXG5cdFx0XHRcdC50aGVuKFxuXHRcdFx0XHRcdCgkcHJldmlld0NvbnRlbnQpID0+IHtcblx0XHRcdFx0XHRcdHRhcmdldFxuXHRcdFx0XHRcdFx0XHQuZ2V0U3VyZmFjZSgpXG5cdFx0XHRcdFx0XHRcdC5nZXRNb2RlbCgpXG5cdFx0XHRcdFx0XHRcdC5nZXREb2N1bWVudCgpXG5cdFx0XHRcdFx0XHRcdC5vbmNlKCd0cmFuc2FjdCcsICgpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRmb3IgKGNvbnN0IGl0ZW0gb2YgcGFuZWxMYXlvdXRzKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRpdGVtLiRlbGVtZW50LmVtcHR5KCk7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdGRpYWxvZy5zd2FwUGFuZWwoJ3ByZXZpZXcnKTtcblx0XHRcdFx0XHRcdGN1cnJlbnRQYW5lbC4kZWxlbWVudC5hcHBlbmQoJHByZXZpZXdDb250ZW50KTtcblx0XHRcdFx0XHRcdHN0YWNrTGF5b3V0LnNldEl0ZW0oc3RhY2tMYXlvdXQuZmluZEl0ZW1Gcm9tRGF0YSh2YXJpYW50KSk7XG5cdFx0XHRcdFx0XHRkaWFsb2cucHJldmlld1BhbmVsLiRlbGVtZW50LnByZXBlbmQoZHJvcGRvd24uJGVsZW1lbnQpO1xuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0KGVycm9yKSA9PiB7XG5cdFx0XHRcdFx0XHRkaWFsb2cuc2hvd0Vycm9ycyhcblx0XHRcdFx0XHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG5cdFx0XHRcdFx0XHRcdG5ldyBPTy51aS5FcnJvcih2ZS5pbml0LnRhcmdldC5nZXRDb250ZW50QXBpKCkuZ2V0RXJyb3JNZXNzYWdlKGVycm9yKSwge1xuXHRcdFx0XHRcdFx0XHRcdHJlY292ZXJhYmxlOiB0cnVlLFxuXHRcdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdClcblx0XHRcdFx0LmFsd2F5cygoKSA9PiB7XG5cdFx0XHRcdFx0ZGlhbG9nLnBvcFBlbmRpbmcoKTtcblx0XHRcdFx0fSk7XG5cdFx0fVxuXHR9O1xuXG5cdGNvbnN0IGluaXQgPSAoKSA9PiB7XG5cdFx0dmFyaWFudCA9IFdHX1VTRVJfVkFSSUFOVDtcblx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcblx0XHQoe3RhcmdldH0gPSB2ZS5pbml0KTtcblx0XHRkaWFsb2cgPSB0YXJnZXQuc2F2ZURpYWxvZztcblx0XHRkcm9wZG93biA9IG5ldyBPTy51aS5Ecm9wZG93bklucHV0V2lkZ2V0KHtcblx0XHRcdCRvdmVybGF5OiBkaWFsb2cuJG92ZXJsYXksXG5cdFx0XHRjbGFzc2VzOiBbJ3B3di0yMDE3LXZhcmlhbnQnXSxcblx0XHRcdG9wdGlvbnM6IFtcblx0XHRcdFx0e1xuXHRcdFx0XHRcdG9wdGdyb3VwOiBtdy5tc2coJ3B3di0yMDE3LWNhcHRpb24nKSxcblx0XHRcdFx0fSxcblx0XHRcdFx0Li4uREFUQS5tYXAoKGl0ZW0pID0+IHtcblx0XHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdFx0ZGF0YTogaXRlbS52YXIsXG5cdFx0XHRcdFx0XHRsYWJlbDogbXcubXNnKGl0ZW0ubXNnKSAvKiBlc2xpbnQtZGlzYWJsZS1saW5lIG1lZGlhd2lraS9tc2ctZG9jICovLFxuXHRcdFx0XHRcdH07XG5cdFx0XHRcdH0pLFxuXHRcdFx0XSxcblx0XHRcdHZhbHVlOiB2YXJpYW50LFxuXHRcdH0pO1xuXHRcdGRyb3Bkb3duLm9uKCdjaGFuZ2UnLCBjaGFuZ2VWYXJpYW50KTtcblx0XHRwYW5lbExheW91dHMgPSBEQVRBLm1hcCgoaXRlbSkgPT4ge1xuXHRcdFx0cmV0dXJuIG5ldyBPTy51aS5QYW5lbExheW91dCh7XG5cdFx0XHRcdGV4cGFuZGVkOiBmYWxzZSxcblx0XHRcdFx0ZGF0YTogaXRlbS52YXIsXG5cdFx0XHR9KTtcblx0XHR9KTtcblx0XHRzdGFja0xheW91dCA9IG5ldyBQZW5kaW5nU3RhY2tMYXlvdXQoe1xuXHRcdFx0ZXhwYW5kZWQ6IGZhbHNlLFxuXHRcdFx0aXRlbXM6IHBhbmVsTGF5b3V0cyxcblx0XHR9KTtcblx0XHRzdGFja0xheW91dC5zZXRJdGVtKHN0YWNrTGF5b3V0LmZpbmRJdGVtRnJvbURhdGEodmFyaWFudCkpO1xuXHRcdGRpYWxvZy5wcmV2aWV3UGFuZWwuJGVsZW1lbnQuYXBwZW5kKHN0YWNrTGF5b3V0LiRlbGVtZW50KTtcblx0XHRlcnJvckRpYWxvZyA9IG5ldyBPTy51aS5NZXNzYWdlRGlhbG9nKCk7XG5cdFx0d2luZG93TWFuYWdlciA9IG5ldyBPTy51aS5XaW5kb3dNYW5hZ2VyKCk7XG5cdFx0d2luZG93TWFuYWdlci5hZGRXaW5kb3dzKFtlcnJvckRpYWxvZ10pO1xuXHRcdCQoZG9jdW1lbnQuYm9keSkuYXBwZW5kKHdpbmRvd01hbmFnZXIuJGVsZW1lbnQpO1xuXG5cdFx0Y29uc3QgaGFuZGxlclRvUmVtb3ZlID0gJ29uU2F2ZURpYWxvZ1ByZXZpZXcnO1xuXHRcdGRpYWxvZy5vZmYoJ3ByZXZpZXcnLCBoYW5kbGVyVG9SZW1vdmUsIHRhcmdldCkub24oJ3ByZXZpZXcnLCBwcmV2aWV3V2l0aFZhcmlhbnQpO1xuXHR9O1xuXG5cdGlmICghbXcuY29uZmlnLmdldCgnd2dQcmV2aWV3V2l0aFZhcmlhbnQyMDE3SW5pdGlhbGl6ZWQnKSkge1xuXHRcdGluaXQoKTtcblx0XHRtdy5jb25maWcuc2V0KCd3Z1ByZXZpZXdXaXRoVmFyaWFudDIwMTdJbml0aWFsaXplZCcsIHRydWUpO1xuXHR9XG59O1xuXG5tdy5ob29rKCd2ZS5zYXZlRGlhbG9nLnN0YXRlQ2hhbmdlZCcpLmFkZChlbnRyeVBvaW50KTtcblxubXcuaG9vaygndmUuYWN0aXZhdGlvbkNvbXBsZXRlJykuYWRkKCgpID0+IHtcblx0aWYgKG13LmNvbmZpZy5nZXQoJ3dnUHJldmlld1dpdGhWYXJpYW50MjAxN0luaXRpYWxpemVkJykpIHtcblx0XHQvLyBTd2l0Y2hpbmcgYmV0d2VlbiBWRSBhbmQgTldFLCByZXF1aXJlcyB0byBiZSByZWluaXRpYWxpemVkXG5cdFx0bXcuY29uZmlnLnNldCgnd2dQcmV2aWV3V2l0aFZhcmlhbnQyMDE3SW5pdGlhbGl6ZWQnLCBmYWxzZSk7XG5cdH1cbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFNQSxPQUFPLENBQ1o7RUFBQ0MsS0FBSztFQUFNQyxVQUFVO0VBQU1DLEtBQUs7QUFBYSxHQUM5QztFQUFDRixLQUFLO0VBQVdDLFVBQVU7RUFBV0MsS0FBSztBQUFrQixHQUM3RDtFQUFDRixLQUFLO0VBQVdDLFVBQVU7RUFBV0MsS0FBSztBQUFrQixHQUM3RDtFQUFDRixLQUFLO0VBQVNDLFVBQVU7RUFBY0MsS0FBSztBQUFnQixHQUM1RDtFQUFDRixLQUFLO0VBQVNDLFVBQVU7RUFBY0MsS0FBSztBQUFnQixHQUM1RDtFQUFDRixLQUFLO0VBQVNDLFVBQVU7RUFBY0MsS0FBSztBQUFnQixHQUM1RDtFQUFDRixLQUFLO0VBQVNDLFVBQVU7RUFBY0MsS0FBSztBQUFnQixHQUM1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Y0FBY1osUUFBUTtBQUU5QyxVQUFNK0gsa0JBQWtCO0FBQ3hCdkgsV0FBT3dILElBQUksV0FBV0QsaUJBQWlCeEgsTUFBTSxFQUFFK0csR0FBRyxXQUFXL0Isa0JBQWtCO0VBQ2hGO0FBRUEsTUFBSSxDQUFDekcsR0FBR0MsT0FBT0MsSUFBSSxxQ0FBcUMsR0FBRztBQUMxRDBGLFNBQUs7QUFDTDVGLE9BQUdDLE9BQU9NLElBQUksdUNBQXVDLElBQUk7RUFDMUQ7QUFDRDtBQUVBUCxHQUFHOEMsS0FBSyw0QkFBNEIsRUFBRXFHLElBQUk1SCxVQUFVO0FBRXBEdkIsR0FBRzhDLEtBQUssdUJBQXVCLEVBQUVxRyxJQUFJLE1BQU07QUFDMUMsTUFBSW5KLEdBQUdDLE9BQU9DLElBQUkscUNBQXFDLEdBQUc7QUFFekRGLE9BQUdDLE9BQU9NLElBQUksdUNBQXVDLEtBQUs7RUFDM0Q7QUFDRCxDQUFDOyIsCiAgIm5hbWVzIjogWyJEQVRBIiwgInZhciIsICJodG1sTGFuZyIsICJtc2ciLCAiV0dfU0tJTiIsICJtdyIsICJjb25maWciLCAiZ2V0IiwgIldHX1VTRVJfTEFOR1VBR0UiLCAiV0dfVVNFUl9WQVJJQU5UIiwgIlBXVjIwMTdtZXNzYWdlcyIsICJtZXNzYWdlcyIsICJzZXQiLCAid2luZG93IiwgIndnVUxTIiwgIlBlbmRpbmdTdGFja0xheW91dCIsICJQZW5kaW5nU3RhY2tMYXlvdXQyIiwgInN1cGVyIiwgImNhbGwiLCAiT08iLCAidWkiLCAibWl4aW4iLCAiUGVuZGluZ0VsZW1lbnQiLCAiJGVsZW1lbnQiLCAiYWRkQ2xhc3MiLCAiaW5oZXJpdENsYXNzIiwgIlN0YWNrTGF5b3V0IiwgIm1peGluQ2xhc3MiLCAiZW50cnlQb2ludCIsICJ2YXJpYW50IiwgInRhcmdldCIsICJkaWFsb2ciLCAiZHJvcGRvd24iLCAic3RhY2tMYXlvdXQiLCAicGFuZWxMYXlvdXRzIiwgIndpbmRvd01hbmFnZXIiLCAiZXJyb3JEaWFsb2ciLCAiY29uc3RydWN0RG9jdW1lbnQiLCAidGl0bGUiLCAid2lraXRleHQiLCAiY2F0ZWdvcmllcyIsICIkcmVzdWx0IiwgIiQiLCAiYXBwZW5kIiwgImh0bWwiLCAiY29uY2F0IiwgInBhZ2VMYW5ndWFnZURpciIsICJhdHRyIiwgImZpbmQiLCAiaXRlbSIsICJwYXJzZUhUTUwiLCAiaG9vayIsICJmaXJlIiwgInZlIiwgInRhcmdldExpbmtzVG9OZXdXaW5kb3ciLCAiZmV0Y2hQcmV2aWV3IiwgImRlZmVycmVkIiwgIkRlZmVycmVkIiwgImdldENvbnRlbnRBcGkiLCAicG9zdCIsICJhY3Rpb24iLCAiZGlzYWJsZWVkaXRzZWN0aW9uIiwgImVycm9yZm9ybWF0IiwgImVycm9ybGFuZyIsICJlcnJvcnN1c2Vsb2NhbCIsICJmb3JtYXR2ZXJzaW9uIiwgInByb3AiLCAicHN0IiwgInByZXZpZXciLCAiZ2V0UGFnZU5hbWUiLCAidGV4dCIsICJnZXREb2NUb1NhdmUiLCAidXNlbGFuZyIsICJ0aGVuIiwgInJlc3BvbnNlIiwgInJlc29sdmUiLCAicGFyc2UiLCAiZGlzcGxheXRpdGxlIiwgImNhdGVnb3JpZXNodG1sIiwgImVycm9yIiwgImRldGFpbCIsICJyZWplY3QiLCAiY2hhbmdlVmFyaWFudCIsICJjaGFuZ2VWYXJpYW50MiIsICJ2YWwiLCAicHJldmlld1BhbmVsIiwgImZvY3VzIiwgInRhcmdldFBhbmVsIiwgImZpbmRJdGVtRnJvbURhdGEiLCAiY2hpbGRyZW4iLCAibGVuZ3RoIiwgInNldEl0ZW0iLCAicHVzaFBlbmRpbmciLCAic2V0RGlzYWJsZWQiLCAiJHByZXZpZXdDb250YWluZXIiLCAib3BlbldpbmRvdyIsICJtZXNzYWdlIiwgImluaXQiLCAiZ2V0RXJyb3JNZXNzYWdlIiwgImFjdGlvbnMiLCAibGFiZWwiLCAiZGVmZXJNc2ciLCAiZmxhZ3MiLCAiY2xvc2VkIiwgImRhdGEiLCAic2V0VmFsdWUiLCAiZ2V0Q3VycmVudEl0ZW0iLCAiZ2V0RGF0YSIsICJhbHdheXMiLCAicG9wUGVuZGluZyIsICJwcmV2aWV3V2l0aFZhcmlhbnQiLCAiY3VycmVudFBhbmVsIiwgInN3YXBQYW5lbCIsICJwcmVwZW5kIiwgImVtaXQiLCAiJHByZXZpZXdDb250ZW50IiwgImdldFN1cmZhY2UiLCAiZ2V0TW9kZWwiLCAiZ2V0RG9jdW1lbnQiLCAib25jZSIsICJfaXRlcmF0b3IiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAiX3N0ZXAiLCAicyIsICJuIiwgImRvbmUiLCAidmFsdWUiLCAiZW1wdHkiLCAiZXJyIiwgImUiLCAiZiIsICJzaG93RXJyb3JzIiwgIkVycm9yIiwgInJlY292ZXJhYmxlIiwgInNhdmVEaWFsb2ciLCAiRHJvcGRvd25JbnB1dFdpZGdldCIsICIkb3ZlcmxheSIsICJjbGFzc2VzIiwgIm9wdGlvbnMiLCAib3B0Z3JvdXAiLCAibWFwIiwgIm9uIiwgIlBhbmVsTGF5b3V0IiwgImV4cGFuZGVkIiwgIml0ZW1zIiwgIk1lc3NhZ2VEaWFsb2ciLCAiV2luZG93TWFuYWdlciIsICJhZGRXaW5kb3dzIiwgImRvY3VtZW50IiwgImJvZHkiLCAiaGFuZGxlclRvUmVtb3ZlIiwgIm9mZiIsICJhZGQiXQp9Cg==

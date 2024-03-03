/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://en.wikipedia.org/wiki/MediaWiki:Gadget-PrintOptions.js}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/PrintOptions}
 * @author Derk-Jan Hartman, English Wikipedia Contributors and Qiuwen Baike Contributors.
 */

/**
 * Print options is a Gadget writen by Derk-Jan Hartman
 *
 * Licensed MIT and/or CC-BY-SA-4.0
 *
 * Copyright (c) 2010-2017 Derk-Jan Hartman
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * @license CC-BY-SA-4.0 {@link https://www.qiuwenbaike.cn/wiki/H:CC-BY-SA-4.0}
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

// dist/PrintOptions/PrintOptions.js
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
//! src/PrintOptions/PrintOptions.js
var windowManager;
var printDialog;
var printOptionsMain = {
  install: () => {
    var _$printLink$off$get;
    const $printLink = $("body").find("#t-print a");
    if (!$printLink.length) {
      return;
    }
    (_$printLink$off$get = $printLink.off("click").get(0)) === null || _$printLink$off$get === void 0 || _$printLink$off$get.addEventListener(
      "click",
      (event) => {
        event.stopPropagation();
        event.preventDefault();
        printOptionsMain.createWindow();
      },
      // Use capturing phase, to beat the other click listener
      true
    );
  },
  createWindow: () => {
    const PrintDialog = function(config) {
      PrintDialog.super.call(this, config);
    };
    OO.inheritClass(PrintDialog, OO.ui.ProcessDialog);
    PrintDialog.static = {};
    PrintDialog.static.name = "PrintDialog";
    PrintDialog.static.title = "".concat(window.wgULS("打", "列"), "印此").concat(window.wgULS("页", "頁"), "面");
    PrintDialog.static.actions = [{
      action: "print",
      label: "".concat(window.wgULS("打", "列"), "印"),
      flags: ["primary", "progressive"]
    }, {
      label: "取消",
      flags: ["safe", "close"]
    }];
    PrintDialog.prototype.initialize = function(...args) {
      let checkboxInputWidget;
      const fieldLayouts = [];
      PrintDialog.super.prototype.initialize.apply(this, args);
      this.panel = new OO.ui.PanelLayout({
        expanded: false,
        padded: true
      });
      this.content = new OO.ui.FieldsetLayout();
      var _iterator = _createForOfIteratorHelper(printOptionsMain.questions), _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done; ) {
          const question = _step.value;
          const {
            checked,
            label,
            type
          } = question;
          if (type !== "checkbox") {
            continue;
          }
          checkboxInputWidget = new OO.ui.CheckboxInputWidget({
            selected: checked
          });
          question.widget = checkboxInputWidget;
          fieldLayouts[fieldLayouts.length] = new OO.ui.FieldLayout(checkboxInputWidget, {
            label,
            align: "inline"
          });
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      this.content.addItems(fieldLayouts);
      this.panel.$element.append(this.content.$element);
      this.$body.append(this.panel.$element);
    };
    PrintDialog.prototype.getActionProcess = function(action) {
      const self = this;
      if (action === "print") {
        return new OO.ui.Process(() => {
          var _iterator2 = _createForOfIteratorHelper(printOptionsMain.questions), _step2;
          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
              const question = _step2.value;
              if (question.type === "checkbox" && question.widget) {
                printOptionsMain[question.returnvalue] = question.widget.isSelected();
              }
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
          self.close({
            action
          }).done(() => {
            printOptionsMain.changePrintCSS();
            printOptionsMain.otherEnhancements();
            window.print();
          });
        });
      }
      return PrintDialog.super.prototype.getActionProcess.call(this, action);
    };
    if (!windowManager) {
      windowManager = new OO.ui.WindowManager();
      $("body").append(windowManager.$element);
    }
    if (!printDialog) {
      printDialog = new PrintDialog({
        size: "medium"
      });
      windowManager.addWindows([printDialog]);
    }
    windowManager.openWindow(printDialog);
  },
  changePrintCSS() {
    if (this.enhanced === false) {
      var _iterator3 = _createForOfIteratorHelper(document.styleSheets), _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
          const stylesheet = _step3.value;
          const {
            media
          } = stylesheet;
          if (!media) {
            continue;
          }
          if (media.mediaText && media.mediaText.includes("print")) {
            if (!media.mediaText.includes("screen")) {
              stylesheet.disabled = true;
            }
          } else if (media.mediaText && media.mediaText.includes("screen") && !media.mediaText.includes("print")) {
            try {
              media.appendMedium("print");
            } catch {
              media.mediaText += ",print";
            }
          }
          let rules;
          try {
            rules = stylesheet.cssRules || stylesheet.rules;
          } catch {
            mw.log.warn("Not possible to correct stylesheet due to cross origin restrictions.");
            continue;
          }
          stylesheet.compatdelete = stylesheet.deleteRule || stylesheet.removeRule;
          if (!rules) {
            continue;
          }
          for (let j = 0; j < rules.length; j++) {
            const rule = rules[j];
            let hasPrint = false;
            let hasScreen = false;
            if (rule.type === CSSRule.MEDIA_RULE && rule.media) {
              var _iterator4 = _createForOfIteratorHelper(rule.media), _step4;
              try {
                for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
                  const ruleMedia = _step4.value;
                  if (ruleMedia === "print") {
                    hasPrint = true;
                  } else if (ruleMedia === "screen") {
                    hasScreen = true;
                  }
                }
              } catch (err) {
                _iterator4.e(err);
              } finally {
                _iterator4.f();
              }
            } else {
              continue;
            }
            if (hasPrint && !hasScreen) {
              stylesheet.compatdelete(j);
              j--;
            } else if (rule && hasScreen && !hasPrint) {
              try {
                rule.media.appendMedium("print");
              } catch {
                rule.media.mediaText += ",print";
              }
            }
          }
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
    }
    let printStyle = "";
    if (this.noimages) {
      printStyle += "img,.thumb{display:none}";
    }
    if (this.norefs) {
      printStyle += '.mw-headline[id="References"],ol.references,.reference{display:none}';
    }
    if (this.notoc) {
      printStyle += "#toc,.toc{display:none}";
    }
    if (this.nobackground) {
      printStyle += "*{background:none !important}";
    }
    if (this.blacktext) {
      printStyle += "*{color:#000 !important}";
    }
    if (printStyle) {
      var _document$querySelect;
      (_document$querySelect = document.querySelector("#printStyle")) === null || _document$querySelect === void 0 || _document$querySelect.remove();
      const styleTag = document.createElement("style");
      styleTag.id = "printStyle";
      styleTag.media = "print";
      styleTag.append(document.createTextNode(printStyle));
      document.head.append(styleTag);
    }
  },
  /* Rewrite the "retrieved from" url to be readable */
  otherEnhancements: () => {
    const link = $("body").find("div.printfooter a");
    link.text(decodeURI(link.text()));
  },
  questions: [{
    label: "隐藏界面元素",
    type: "checkbox",
    checked: true,
    returnvalue: "enhanced"
  }, {
    label: "隐藏图片",
    type: "checkbox",
    checked: false,
    returnvalue: "noimages"
  }, {
    label: "隐藏参考文献",
    type: "checkbox",
    checked: false,
    returnvalue: "norefs"
  }, {
    label: "隐藏目录",
    type: "checkbox",
    checked: false,
    returnvalue: "notoc"
  }, {
    label: "移除背景（您的浏览器或可以覆盖本设置）",
    type: "checkbox",
    checked: false,
    returnvalue: "nobackground"
  }, {
    label: "强制将所有文字设置为黑色",
    type: "checkbox",
    checked: true,
    returnvalue: "blacktext"
  }]
};
$(function printOptions() {
  if (mw.config.get("wgNamespaceNumber") < 0) {
    return;
  }
  setTimeout(printOptionsMain.install, 0);
});

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1ByaW50T3B0aW9ucy9QcmludE9wdGlvbnMuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXRzLWNvbW1lbnRcbi8vIEB0cy1ub2NoZWNrXG5cbmxldCAvKiogQHR5cGUge09PLnVpLldpbmRvd01hbmFnZXJ9ICovIHdpbmRvd01hbmFnZXI7XG5sZXQgLyoqIEB0eXBlIHtPTy51aS5Qcm9jZXNzRGlhbG9nfSAqLyBwcmludERpYWxvZztcblxuY29uc3QgcHJpbnRPcHRpb25zTWFpbiA9IHtcblx0aW5zdGFsbDogKCkgPT4ge1xuXHRcdGNvbnN0ICRwcmludExpbmsgPSAkKCdib2R5JykuZmluZCgnI3QtcHJpbnQgYScpO1xuXHRcdGlmICghJHByaW50TGluay5sZW5ndGgpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHQkcHJpbnRMaW5rXG5cdFx0XHQub2ZmKCdjbGljaycpXG5cdFx0XHQuZ2V0KDApXG5cdFx0XHQ/LmFkZEV2ZW50TGlzdGVuZXIoXG5cdFx0XHRcdCdjbGljaycsXG5cdFx0XHRcdChldmVudCkgPT4ge1xuXHRcdFx0XHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0cHJpbnRPcHRpb25zTWFpbi5jcmVhdGVXaW5kb3coKTtcblx0XHRcdFx0fSwgLy8gVXNlIGNhcHR1cmluZyBwaGFzZSwgdG8gYmVhdCB0aGUgb3RoZXIgY2xpY2sgbGlzdGVuZXJcblx0XHRcdFx0dHJ1ZVxuXHRcdFx0KTtcblx0fSxcblx0Y3JlYXRlV2luZG93OiAoKSA9PiB7XG5cdFx0Y29uc3QgUHJpbnREaWFsb2cgPSBmdW5jdGlvbiAoY29uZmlnKSB7XG5cdFx0XHRQcmludERpYWxvZy5zdXBlci5jYWxsKHRoaXMsIGNvbmZpZyk7XG5cdFx0fTtcblx0XHRPTy5pbmhlcml0Q2xhc3MoUHJpbnREaWFsb2csIE9PLnVpLlByb2Nlc3NEaWFsb2cpO1xuXG5cdFx0UHJpbnREaWFsb2cuc3RhdGljID0ge307XG5cdFx0UHJpbnREaWFsb2cuc3RhdGljLm5hbWUgPSAnUHJpbnREaWFsb2cnO1xuXHRcdFByaW50RGlhbG9nLnN0YXRpYy50aXRsZSA9IGAke3dpbmRvdy53Z1VMUygn5omTJywgJ+WIlycpfeWNsOatpCR7d2luZG93LndnVUxTKCfpobUnLCAn6aCBJyl96Z2iYDtcblx0XHRQcmludERpYWxvZy5zdGF0aWMuYWN0aW9ucyA9IFtcblx0XHRcdHtcblx0XHRcdFx0YWN0aW9uOiAncHJpbnQnLFxuXHRcdFx0XHRsYWJlbDogYCR7d2luZG93LndnVUxTKCfmiZMnLCAn5YiXJyl95Y2wYCxcblx0XHRcdFx0ZmxhZ3M6IFsncHJpbWFyeScsICdwcm9ncmVzc2l2ZSddLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0bGFiZWw6ICflj5bmtognLFxuXHRcdFx0XHRmbGFnczogWydzYWZlJywgJ2Nsb3NlJ10sXG5cdFx0XHR9LFxuXHRcdF07XG5cblx0XHRQcmludERpYWxvZy5wcm90b3R5cGUuaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uICguLi5hcmdzKSB7XG5cdFx0XHRsZXQgY2hlY2tib3hJbnB1dFdpZGdldDtcblx0XHRcdGNvbnN0IGZpZWxkTGF5b3V0cyA9IFtdO1xuXG5cdFx0XHRQcmludERpYWxvZy5zdXBlci5wcm90b3R5cGUuaW5pdGlhbGl6ZS5hcHBseSh0aGlzLCBhcmdzKTtcblxuXHRcdFx0dGhpcy5wYW5lbCA9IG5ldyBPTy51aS5QYW5lbExheW91dCh7XG5cdFx0XHRcdGV4cGFuZGVkOiBmYWxzZSxcblx0XHRcdFx0cGFkZGVkOiB0cnVlLFxuXHRcdFx0fSk7XG5cblx0XHRcdHRoaXMuY29udGVudCA9IG5ldyBPTy51aS5GaWVsZHNldExheW91dCgpO1xuXHRcdFx0Zm9yIChjb25zdCBxdWVzdGlvbiBvZiBwcmludE9wdGlvbnNNYWluLnF1ZXN0aW9ucykge1xuXHRcdFx0XHRjb25zdCB7Y2hlY2tlZCwgbGFiZWwsIHR5cGV9ID0gcXVlc3Rpb247XG5cdFx0XHRcdGlmICh0eXBlICE9PSAnY2hlY2tib3gnKSB7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y2hlY2tib3hJbnB1dFdpZGdldCA9IG5ldyBPTy51aS5DaGVja2JveElucHV0V2lkZ2V0KHtcblx0XHRcdFx0XHRzZWxlY3RlZDogY2hlY2tlZCxcblx0XHRcdFx0fSk7XG5cdFx0XHRcdHF1ZXN0aW9uLndpZGdldCA9IGNoZWNrYm94SW5wdXRXaWRnZXQ7XG5cdFx0XHRcdGZpZWxkTGF5b3V0c1tmaWVsZExheW91dHMubGVuZ3RoXSA9IG5ldyBPTy51aS5GaWVsZExheW91dChjaGVja2JveElucHV0V2lkZ2V0LCB7XG5cdFx0XHRcdFx0bGFiZWwsXG5cdFx0XHRcdFx0YWxpZ246ICdpbmxpbmUnLFxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHRcdHRoaXMuY29udGVudC5hZGRJdGVtcyhmaWVsZExheW91dHMpO1xuXG5cdFx0XHR0aGlzLnBhbmVsLiRlbGVtZW50LmFwcGVuZCh0aGlzLmNvbnRlbnQuJGVsZW1lbnQpO1xuXHRcdFx0dGhpcy4kYm9keS5hcHBlbmQodGhpcy5wYW5lbC4kZWxlbWVudCk7XG5cdFx0fTtcblxuXHRcdFByaW50RGlhbG9nLnByb3RvdHlwZS5nZXRBY3Rpb25Qcm9jZXNzID0gZnVuY3Rpb24gKGFjdGlvbikge1xuXHRcdFx0Y29uc3Qgc2VsZiA9IHRoaXM7XG5cdFx0XHRpZiAoYWN0aW9uID09PSAncHJpbnQnKSB7XG5cdFx0XHRcdHJldHVybiBuZXcgT08udWkuUHJvY2VzcygoKSA9PiB7XG5cdFx0XHRcdFx0Ly8gR2V0IHZhbHVlcyBvZiBjaGVja2JveGVzXG5cdFx0XHRcdFx0Zm9yIChjb25zdCBxdWVzdGlvbiBvZiBwcmludE9wdGlvbnNNYWluLnF1ZXN0aW9ucykge1xuXHRcdFx0XHRcdFx0aWYgKHF1ZXN0aW9uLnR5cGUgPT09ICdjaGVja2JveCcgJiYgcXVlc3Rpb24ud2lkZ2V0KSB7XG5cdFx0XHRcdFx0XHRcdHByaW50T3B0aW9uc01haW5bcXVlc3Rpb24ucmV0dXJudmFsdWVdID0gcXVlc3Rpb24ud2lkZ2V0LmlzU2VsZWN0ZWQoKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0c2VsZi5jbG9zZSh7YWN0aW9ufSkuZG9uZSgoKSA9PiB7XG5cdFx0XHRcdFx0XHRwcmludE9wdGlvbnNNYWluLmNoYW5nZVByaW50Q1NTKCk7XG5cdFx0XHRcdFx0XHRwcmludE9wdGlvbnNNYWluLm90aGVyRW5oYW5jZW1lbnRzKCk7XG5cdFx0XHRcdFx0XHR3aW5kb3cucHJpbnQoKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBQcmludERpYWxvZy5zdXBlci5wcm90b3R5cGUuZ2V0QWN0aW9uUHJvY2Vzcy5jYWxsKHRoaXMsIGFjdGlvbik7XG5cdFx0fTtcblxuXHRcdGlmICghd2luZG93TWFuYWdlcikge1xuXHRcdFx0d2luZG93TWFuYWdlciA9IG5ldyBPTy51aS5XaW5kb3dNYW5hZ2VyKCk7XG5cdFx0XHQkKCdib2R5JykuYXBwZW5kKHdpbmRvd01hbmFnZXIuJGVsZW1lbnQpO1xuXHRcdH1cblxuXHRcdGlmICghcHJpbnREaWFsb2cpIHtcblx0XHRcdHByaW50RGlhbG9nID0gbmV3IFByaW50RGlhbG9nKHtcblx0XHRcdFx0c2l6ZTogJ21lZGl1bScsXG5cdFx0XHR9KTtcblx0XHRcdHdpbmRvd01hbmFnZXIuYWRkV2luZG93cyhbcHJpbnREaWFsb2ddKTtcblx0XHR9XG5cblx0XHR3aW5kb3dNYW5hZ2VyLm9wZW5XaW5kb3cocHJpbnREaWFsb2cpO1xuXHR9LFxuXG5cdGNoYW5nZVByaW50Q1NTKCkge1xuXHRcdC8qIEhlcmUgd2U6XG5cdFx0ICogLSBkaXNhYmxlIHN0eWxlc2hlZXRzIHRoYXQgYXJlIHByaW50IHNwZWNpZmljXG5cdFx0ICogLSBtYWtlIHNjcmVlbiBzcGVjaWZpYyBzdHlsZXNoZWV0cyBhbHNvIGVuYWJsZWQgZm9yIHByaW50IG1lZGl1bVxuXHRcdCAqIC0gcmVtb3ZlIHByaW50IHNwZWNpZmljIHN0eWxlcnVsZXNcblx0XHQgKiAtIG1ha2Ugc2NyZWVuIHNwZWNpZmljIHN0eWxlcnVsZXMgYWxzbyBlbmFibGVkIGZvciBwcmludCBtZWRpdW1cblx0XHQgKi9cblx0XHRpZiAodGhpcy5lbmhhbmNlZCA9PT0gZmFsc2UpIHtcblx0XHRcdGZvciAoY29uc3Qgc3R5bGVzaGVldCBvZiBkb2N1bWVudC5zdHlsZVNoZWV0cykge1xuXHRcdFx0XHRjb25zdCB7bWVkaWF9ID0gc3R5bGVzaGVldDtcblx0XHRcdFx0aWYgKCFtZWRpYSkge1xuXHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKG1lZGlhLm1lZGlhVGV4dCAmJiBtZWRpYS5tZWRpYVRleHQuaW5jbHVkZXMoJ3ByaW50JykpIHtcblx0XHRcdFx0XHRpZiAoIW1lZGlhLm1lZGlhVGV4dC5pbmNsdWRlcygnc2NyZWVuJykpIHtcblx0XHRcdFx0XHRcdHN0eWxlc2hlZXQuZGlzYWJsZWQgPSB0cnVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBlbHNlIGlmIChcblx0XHRcdFx0XHRtZWRpYS5tZWRpYVRleHQgJiZcblx0XHRcdFx0XHRtZWRpYS5tZWRpYVRleHQuaW5jbHVkZXMoJ3NjcmVlbicpICYmXG5cdFx0XHRcdFx0IW1lZGlhLm1lZGlhVGV4dC5pbmNsdWRlcygncHJpbnQnKVxuXHRcdFx0XHQpIHtcblx0XHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdFx0bWVkaWEuYXBwZW5kTWVkaXVtKCdwcmludCcpO1xuXHRcdFx0XHRcdH0gY2F0Y2gge1xuXHRcdFx0XHRcdFx0bWVkaWEubWVkaWFUZXh0ICs9ICcscHJpbnQnO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8qIG5vdyB0ZXN0IGluZGl2aWR1YWwgc3R5bGVzaGVldCBydWxlcyAqL1xuXHRcdFx0XHRsZXQgcnVsZXM7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0cnVsZXMgPSBzdHlsZXNoZWV0LmNzc1J1bGVzIHx8IHN0eWxlc2hlZXQucnVsZXM7XG5cdFx0XHRcdH0gY2F0Y2gge1xuXHRcdFx0XHRcdC8qIENyb3NzIGRvbWFpbiBpc3N1ZS4gKi9cblx0XHRcdFx0XHRtdy5sb2cud2FybignTm90IHBvc3NpYmxlIHRvIGNvcnJlY3Qgc3R5bGVzaGVldCBkdWUgdG8gY3Jvc3Mgb3JpZ2luIHJlc3RyaWN0aW9ucy4nKTtcblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHN0eWxlc2hlZXQuY29tcGF0ZGVsZXRlID0gc3R5bGVzaGVldC5kZWxldGVSdWxlIHx8IHN0eWxlc2hlZXQucmVtb3ZlUnVsZTtcblxuXHRcdFx0XHRpZiAoIXJ1bGVzKSB7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRmb3IgKGxldCBqID0gMDsgaiA8IHJ1bGVzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdFx0Y29uc3QgcnVsZSA9IHJ1bGVzW2pdO1xuXG5cdFx0XHRcdFx0bGV0IGhhc1ByaW50ID0gZmFsc2U7XG5cdFx0XHRcdFx0bGV0IGhhc1NjcmVlbiA9IGZhbHNlO1xuXG5cdFx0XHRcdFx0aWYgKHJ1bGUudHlwZSA9PT0gQ1NTUnVsZS5NRURJQV9SVUxFICYmIHJ1bGUubWVkaWEpIHtcblx0XHRcdFx0XHRcdGZvciAoY29uc3QgcnVsZU1lZGlhIG9mIHJ1bGUubWVkaWEpIHtcblx0XHRcdFx0XHRcdFx0aWYgKHJ1bGVNZWRpYSA9PT0gJ3ByaW50Jykge1xuXHRcdFx0XHRcdFx0XHRcdGhhc1ByaW50ID0gdHJ1ZTtcblx0XHRcdFx0XHRcdFx0fSBlbHNlIGlmIChydWxlTWVkaWEgPT09ICdzY3JlZW4nKSB7XG5cdFx0XHRcdFx0XHRcdFx0aGFzU2NyZWVuID0gdHJ1ZTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRpZiAoaGFzUHJpbnQgJiYgIWhhc1NjcmVlbikge1xuXHRcdFx0XHRcdFx0c3R5bGVzaGVldC5jb21wYXRkZWxldGUoaik7XG5cdFx0XHRcdFx0XHRqLS07XG5cdFx0XHRcdFx0fSBlbHNlIGlmIChydWxlICYmIGhhc1NjcmVlbiAmJiAhaGFzUHJpbnQpIHtcblx0XHRcdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0XHRcdHJ1bGUubWVkaWEuYXBwZW5kTWVkaXVtKCdwcmludCcpO1xuXHRcdFx0XHRcdFx0fSBjYXRjaCB7XG5cdFx0XHRcdFx0XHRcdHJ1bGUubWVkaWEubWVkaWFUZXh0ICs9ICcscHJpbnQnO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGxldCBwcmludFN0eWxlID0gJyc7XG5cdFx0LyogQWRkIGNzcyB0byBoaWRlIGltYWdlcyAqL1xuXHRcdGlmICh0aGlzLm5vaW1hZ2VzKSB7XG5cdFx0XHRwcmludFN0eWxlICs9ICdpbWcsLnRodW1ie2Rpc3BsYXk6bm9uZX0nO1xuXHRcdH1cblx0XHQvKiBBZGQgY3NzIHRvIGhpZGUgcmVmZXJlbmNlcyBtYXJrZXJzIGFuZCB0aGUgcmVmZXJlbmNlcyBsaXN0cyAqL1xuXHRcdGlmICh0aGlzLm5vcmVmcykge1xuXHRcdFx0cHJpbnRTdHlsZSArPSAnLm13LWhlYWRsaW5lW2lkPVwiUmVmZXJlbmNlc1wiXSxvbC5yZWZlcmVuY2VzLC5yZWZlcmVuY2V7ZGlzcGxheTpub25lfSc7XG5cdFx0fVxuXHRcdGlmICh0aGlzLm5vdG9jKSB7XG5cdFx0XHRwcmludFN0eWxlICs9ICcjdG9jLC50b2N7ZGlzcGxheTpub25lfSc7XG5cdFx0fVxuXHRcdGlmICh0aGlzLm5vYmFja2dyb3VuZCkge1xuXHRcdFx0cHJpbnRTdHlsZSArPSAnKntiYWNrZ3JvdW5kOm5vbmUgIWltcG9ydGFudH0nO1xuXHRcdH1cblx0XHRpZiAodGhpcy5ibGFja3RleHQpIHtcblx0XHRcdHByaW50U3R5bGUgKz0gJyp7Y29sb3I6IzAwMCAhaW1wb3J0YW50fSc7XG5cdFx0fVxuXG5cdFx0aWYgKHByaW50U3R5bGUpIHtcblx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcmludFN0eWxlJyk/LnJlbW92ZSgpO1xuXHRcdFx0Y29uc3Qgc3R5bGVUYWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuXHRcdFx0c3R5bGVUYWcuaWQgPSAncHJpbnRTdHlsZSc7XG5cdFx0XHRzdHlsZVRhZy5tZWRpYSA9ICdwcmludCc7XG5cdFx0XHRzdHlsZVRhZy5hcHBlbmQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUocHJpbnRTdHlsZSkpO1xuXHRcdFx0ZG9jdW1lbnQuaGVhZC5hcHBlbmQoc3R5bGVUYWcpO1xuXHRcdH1cblx0fSxcblxuXHQvKiBSZXdyaXRlIHRoZSBcInJldHJpZXZlZCBmcm9tXCIgdXJsIHRvIGJlIHJlYWRhYmxlICovXG5cdG90aGVyRW5oYW5jZW1lbnRzOiAoKSA9PiB7XG5cdFx0Y29uc3QgbGluayA9ICQoJ2JvZHknKS5maW5kKCdkaXYucHJpbnRmb290ZXIgYScpO1xuXHRcdGxpbmsudGV4dChkZWNvZGVVUkkobGluay50ZXh0KCkpKTtcblx0fSxcblxuXHRxdWVzdGlvbnM6IFtcblx0XHR7XG5cdFx0XHRsYWJlbDogJ+makOiXj+eVjOmdouWFg+e0oCcsXG5cdFx0XHR0eXBlOiAnY2hlY2tib3gnLFxuXHRcdFx0Y2hlY2tlZDogdHJ1ZSxcblx0XHRcdHJldHVybnZhbHVlOiAnZW5oYW5jZWQnLFxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0bGFiZWw6ICfpmpDol4/lm77niYcnLFxuXHRcdFx0dHlwZTogJ2NoZWNrYm94Jyxcblx0XHRcdGNoZWNrZWQ6IGZhbHNlLFxuXHRcdFx0cmV0dXJudmFsdWU6ICdub2ltYWdlcycsXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRsYWJlbDogJ+makOiXj+WPguiAg+aWh+eMricsXG5cdFx0XHR0eXBlOiAnY2hlY2tib3gnLFxuXHRcdFx0Y2hlY2tlZDogZmFsc2UsXG5cdFx0XHRyZXR1cm52YWx1ZTogJ25vcmVmcycsXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRsYWJlbDogJ+makOiXj+ebruW9lScsXG5cdFx0XHR0eXBlOiAnY2hlY2tib3gnLFxuXHRcdFx0Y2hlY2tlZDogZmFsc2UsXG5cdFx0XHRyZXR1cm52YWx1ZTogJ25vdG9jJyxcblx0XHR9LFxuXHRcdHtcblx0XHRcdGxhYmVsOiAn56e76Zmk6IOM5pmv77yI5oKo55qE5rWP6KeI5Zmo5oiW5Y+v5Lul6KaG55uW5pys6K6+572u77yJJyxcblx0XHRcdHR5cGU6ICdjaGVja2JveCcsXG5cdFx0XHRjaGVja2VkOiBmYWxzZSxcblx0XHRcdHJldHVybnZhbHVlOiAnbm9iYWNrZ3JvdW5kJyxcblx0XHR9LFxuXHRcdHtcblx0XHRcdGxhYmVsOiAn5by65Yi25bCG5omA5pyJ5paH5a2X6K6+572u5Li66buR6ImyJyxcblx0XHRcdHR5cGU6ICdjaGVja2JveCcsXG5cdFx0XHRjaGVja2VkOiB0cnVlLFxuXHRcdFx0cmV0dXJudmFsdWU6ICdibGFja3RleHQnLFxuXHRcdH0sXG5cdF0sXG59O1xuXG4kKGZ1bmN0aW9uIHByaW50T3B0aW9ucygpIHtcblx0aWYgKG13LmNvbmZpZy5nZXQoJ3dnTmFtZXNwYWNlTnVtYmVyJykgPCAwKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdC8vIFRoaXMgY2FuIGJlIGJlZm9yZSB0aGUgY2xpY2sgbGlzdGVuZXIgYnkgTVcgaXMgaW5zdGFsbGVkLiBJbnN0ZWFkLFxuXHQvLyByZS1hZGQgb3Vyc2VsdmVzIHRvIHRoZSBiYWNrIG9mIHRoZSBkb2N1bWVudC5yZWFkeSBsaXN0XG5cdC8vIHVzZSBhc3luYyB0aW1lb3V0ZSB0byBkbyB0aGlzXG5cdHNldFRpbWVvdXQocHJpbnRPcHRpb25zTWFpbi5pbnN0YWxsLCAwKTtcbn0pO1xuIl0sCiAgIm1hcHBp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RCxlQUFTRSxLQUFLO0FBQ2RGLGVBQVMvQixRQUFRO0FBQ2pCK0IsZUFBU3RELE9BQU9tQixTQUFTc0MsZUFBZVosVUFBVSxDQUFDO0FBQ25EMUIsZUFBU3VDLEtBQUsxRCxPQUFPc0QsUUFBUTtJQUM5QjtFQUNEOztFQUdBM0MsbUJBQW1CQSxNQUFNO0FBQ3hCLFVBQU1nRCxPQUFPeEgsRUFBRSxNQUFNLEVBQUVDLEtBQUssbUJBQW1CO0FBQy9DdUgsU0FBS0MsS0FBS0MsVUFBVUYsS0FBS0MsS0FBSyxDQUFDLENBQUM7RUFDakM7RUFFQS9FLFdBQVcsQ0FDVjtJQUNDaEIsT0FBTztJQUNQd0IsTUFBTTtJQUNORCxTQUFTO0lBQ1RtQixhQUFhO0VBQ2QsR0FDQTtJQUNDMUMsT0FBTztJQUNQd0IsTUFBTTtJQUNORCxTQUFTO0lBQ1RtQixhQUFhO0VBQ2QsR0FDQTtJQUNDMUMsT0FBTztJQUNQd0IsTUFBTTtJQUNORCxTQUFTO0lBQ1RtQixhQUFhO0VBQ2QsR0FDQTtJQUNDMUMsT0FBTztJQUNQd0IsTUFBTTtJQUNORCxTQUFTO0lBQ1RtQixhQUFhO0VBQ2QsR0FDQTtJQUNDMUMsT0FBTztJQUNQd0IsTUFBTTtJQUNORCxTQUFTO0lBQ1RtQixhQUFhO0VBQ2QsR0FDQTtJQUNDMUMsT0FBTztJQUNQd0IsTUFBTTtJQUNORCxTQUFTO0lBQ1RtQixhQUFhO0VBQ2QsQ0FBQTtBQUVGO0FBRUFwRSxFQUFFLFNBQVMySCxlQUFlO0FBQ3pCLE1BQUloQyxHQUFHaEYsT0FBT1AsSUFBSSxtQkFBbUIsSUFBSSxHQUFHO0FBQzNDO0VBQ0Q7QUFJQXdILGFBQVdoSSxpQkFBaUJDLFNBQVMsQ0FBQztBQUN2QyxDQUFDOyIsCiAgIm5hbWVzIjogWyJ3aW5kb3dNYW5hZ2VyIiwgInByaW50RGlhbG9nIiwgInByaW50T3B0aW9uc01haW4iLCAiaW5zdGFsbCIsICJfJHByaW50TGluayRvZmYkZ2V0IiwgIiRwcmludExpbmsiLCAiJCIsICJmaW5kIiwgImxlbmd0aCIsICJvZmYiLCAiZ2V0IiwgImFkZEV2ZW50TGlzdGVuZXIiLCAiZXZlbnQiLCAic3RvcFByb3BhZ2F0aW9uIiwgInByZXZlbnREZWZhdWx0IiwgImNyZWF0ZVdpbmRvdyIsICJQcmludERpYWxvZyIsICJjb25maWciLCAic3VwZXIiLCAiY2FsbCIsICJPTyIsICJpbmhlcml0Q2xhc3MiLCAidWkiLCAiUHJvY2Vzc0RpYWxvZyIsICJzdGF0aWMiLCAibmFtZSIsICJ0aXRsZSIsICJjb25jYXQiLCAid2luZG93IiwgIndnVUxTIiwgImFjdGlvbnMiLCAiYWN0aW9uIiwgImxhYmVsIiwgImZsYWdzIiwgInByb3RvdHlwZSIsICJpbml0aWFsaXplIiwgImFyZ3MiLCAiY2hlY2tib3hJbnB1dFdpZGdldCIsICJmaWVsZExheW91dHMiLCAiYXBwbHkiLCAicGFuZWwiLCAiUGFuZWxMYXlvdXQiLCAiZXhwYW5kZWQiLCAicGFkZGVkIiwgImNvbnRlbnQiLCAiRmllbGRzZXRMYXlvdXQiLCAiX2l0ZXJhdG9yIiwgIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwgInF1ZXN0aW9ucyIsICJfc3RlcCIsICJzIiwgIm4iLCAiZG9uZSIsICJxdWVzdGlvbiIsICJ2YWx1ZSIsICJjaGVja2VkIiwgInR5cGUiLCAiQ2hlY2tib3hJbnB1dFdpZGdldCIsICJzZWxlY3RlZCIsICJ3aWRnZXQiLCAiRmllbGRMYXlvdXQiLCAiYWxpZ24iLCAiZXJyIiwgImUiLCAiZiIsICJhZGRJdGVtcyIsICIkZWxlbWVudCIsICJhcHBlbmQiLCAiJGJvZHkiLCAiZ2V0QWN0aW9uUHJvY2VzcyIsICJzZWxmIiwgIlByb2Nlc3MiLCAiX2l0ZXJhdG9yMiIsICJfc3RlcDIiLCAicmV0dXJudmFsdWUiLCAiaXNTZWxlY3RlZCIsICJjbG9zZSIsICJjaGFuZ2VQcmludENTUyIsICJvdGhlckVuaGFuY2VtZW50cyIsICJwcmludCIsICJXaW5kb3dNYW5hZ2VyIiwgInNpemUiLCAiYWRkV2luZG93cyIsICJvcGVuV2luZG93IiwgImVuaGFuY2VkIiwgIl9pdGVyYXRvcjMiLCAiZG9jdW1lbnQiLCAic3R5bGVTaGVldHMiLCAiX3N0ZXAzIiwgInN0eWxlc2hlZXQiLCAibWVkaWEiLCAibWVkaWFUZXh0IiwgImluY2x1ZGVzIiwgImRpc2FibGVkIiwgImFwcGVuZE1lZGl1bSIsICJydWxlcyIsICJjc3NSdWxlcyIsICJtdyIsICJsb2ciLCAid2FybiIsICJjb21wYXRkZWxldGUiLCAiZGVsZXRlUnVsZSIsICJyZW1vdmVSdWxlIiwgImoiLCAicnVsZSIsICJoYXNQcmludCIsICJoYXNTY3JlZW4iLCAiQ1NTUnVsZSIsICJNRURJQV9SVUxFIiwgIl9pdGVyYXRvcjQiLCAiX3N0ZXA0IiwgInJ1bGVNZWRpYSIsICJwcmludFN0eWxlIiwgIm5vaW1hZ2VzIiwgIm5vcmVmcyIsICJub3RvYyIsICJub2JhY2tncm91bmQiLCAiYmxhY2t0ZXh0IiwgIl9kb2N1bWVudCRxdWVyeVNlbGVjdCIsICJxdWVyeVNlbGVjdG9yIiwgInJlbW92ZSIsICJzdHlsZVRhZyIsICJjcmVhdGVFbGVtZW50IiwgImlkIiwgImNyZWF0ZVRleHROb2RlIiwgImhlYWQiLCAibGluayIsICJ0ZXh0IiwgImRlY29kZVVSSSIsICJwcmludE9wdGlvbnMiLCAic2V0VGltZW91dCJdCn0K

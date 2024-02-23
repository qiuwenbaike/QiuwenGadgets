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
    const $body = $("body");
    const $printLink = $body.find("#t-print a");
    if ($printLink.length === 0) {
      return;
    }
    $printLink.off("click").get(0).addEventListener("click", (e) => {
      printOptionsMain.createWindow();
      e.stopPropagation();
      e.preventDefault();
    }, true);
  },
  createWindow: () => {
    const PrintDialog = function(config) {
      PrintDialog.super.call(this, config);
    };
    OO.inheritClass(PrintDialog, OO.ui.ProcessDialog);
    PrintDialog.static.name = "printdialog";
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
      let checkbox;
      const fieldset = [];
      PrintDialog.super.prototype.initialize.apply(this, args);
      this.panel = new OO.ui.PanelLayout({
        padded: true,
        expanded: false
      });
      this.content = new OO.ui.FieldsetLayout();
      var _iterator = _createForOfIteratorHelper(printOptionsMain.questions), _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done; ) {
          const question = _step.value;
          if (question.type === "checkbox") {
            checkbox = new OO.ui.CheckboxInputWidget({
              selected: question.checked
            });
            question.widget = checkbox;
            fieldset[fieldset.length] = new OO.ui.FieldLayout(checkbox, {
              label: question.label,
              align: "inline"
            });
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      this.content.addItems(fieldset);
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
      const $body = $("body");
      $body.append(windowManager.$element);
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
    let printStyle = "";
    if (this.enhanced === false) {
      let i;
      let j;
      let k;
      let rule;
      let hasPrint;
      let hasScreen;
      let rules;
      let stylesheet;
      const stylesheets = document.styleSheets;
      for (i = 0; i < stylesheets.length; i++) {
        stylesheet = stylesheets[i];
        if (!stylesheet.media) {
          continue;
        }
        if (stylesheet.media.mediaText && stylesheet.media.mediaText.includes("print")) {
          if (!stylesheet.media.mediaText.includes("screen")) {
            stylesheet.disabled = true;
          }
        } else if (stylesheet.media.mediaText && stylesheet.media.mediaText.includes("screen") && !stylesheet.media.mediaText.includes("print")) {
          try {
            stylesheet.media.appendMedium("print");
          } catch {
            stylesheet.media.mediaText += ",print";
          }
        }
        try {
          rules = stylesheet.cssRules || stylesheet.rules;
        } catch {
          mw.log.warn("Not possible to correct stylesheet due to cross origin restrictions.");
          continue;
        }
        stylesheet.compatdelete = stylesheet.deleteRule || stylesheet.removeRule;
        if (rules) {
          for (j = 0; j < rules.length; j++) {
            rule = rules[j];
            hasPrint = false;
            hasScreen = false;
            if (rule.type === CSSRule.MEDIA_RULE && rule.media) {
              for (k = 0; k < rule.media.length; k++) {
                if (rule.media[k] === "print") {
                  hasPrint = true;
                } else if (rule.media[k] === "screen") {
                  hasScreen = true;
                }
              }
            } else {
              continue;
            }
            if (hasPrint && !hasScreen) {
              stylesheet.compatdelete(j);
              j--;
            } else if (hasScreen && !hasPrint) {
              try {
                rule.media.appendMedium("print");
              } catch {
                rule.media.mediaText += ",print";
              }
            }
          }
        }
      }
    }
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
    const $body = $("body");
    const link = $body.find("div.printfooter a");
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
$(function PrintOptions() {
  if (mw.config.get("wgNamespaceNumber") < 0) {
    return;
  }
  setTimeout(() => {
    $(printOptionsMain.install);
  }, 0);
});

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1ByaW50T3B0aW9ucy9QcmludE9wdGlvbnMuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXRzLWNvbW1lbnRcbi8vIEB0cy1ub2NoZWNrXG5sZXQgd2luZG93TWFuYWdlcjtcbmxldCBwcmludERpYWxvZztcblxuY29uc3QgcHJpbnRPcHRpb25zTWFpbiA9IHtcblx0aW5zdGFsbDogKCkgPT4ge1xuXHRcdGNvbnN0ICRib2R5ID0gJCgnYm9keScpO1xuXHRcdGNvbnN0ICRwcmludExpbmsgPSAkYm9keS5maW5kKCcjdC1wcmludCBhJyk7XG5cdFx0aWYgKCRwcmludExpbmsubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdCRwcmludExpbmtcblx0XHRcdC5vZmYoJ2NsaWNrJylcblx0XHRcdC5nZXQoMClcblx0XHRcdC5hZGRFdmVudExpc3RlbmVyKFxuXHRcdFx0XHQnY2xpY2snLFxuXHRcdFx0XHQoZSkgPT4ge1xuXHRcdFx0XHRcdHByaW50T3B0aW9uc01haW4uY3JlYXRlV2luZG93KCk7XG5cdFx0XHRcdFx0ZS5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdHRydWVcblx0XHRcdCk7IC8vIFVzZSBjYXB0dXJpbmcgcGhhc2UsIHRvIGJlYXQgdGhlIG90aGVyIGNsaWNrIGxpc3RlbmVyXG5cdH0sXG5cdGNyZWF0ZVdpbmRvdzogKCkgPT4ge1xuXHRcdGNvbnN0IFByaW50RGlhbG9nID0gZnVuY3Rpb24gKGNvbmZpZykge1xuXHRcdFx0UHJpbnREaWFsb2cuc3VwZXIuY2FsbCh0aGlzLCBjb25maWcpO1xuXHRcdH07XG5cdFx0T08uaW5oZXJpdENsYXNzKFByaW50RGlhbG9nLCBPTy51aS5Qcm9jZXNzRGlhbG9nKTtcblx0XHRQcmludERpYWxvZy5zdGF0aWMubmFtZSA9ICdwcmludGRpYWxvZyc7XG5cdFx0UHJpbnREaWFsb2cuc3RhdGljLnRpdGxlID0gYCR7d2luZG93LndnVUxTKCfmiZMnLCAn5YiXJyl95Y2w5q2kJHt3aW5kb3cud2dVTFMoJ+mhtScsICfpoIEnKX3pnaJgO1xuXHRcdFByaW50RGlhbG9nLnN0YXRpYy5hY3Rpb25zID0gW1xuXHRcdFx0e2FjdGlvbjogJ3ByaW50JywgbGFiZWw6IGAke3dpbmRvdy53Z1VMUygn5omTJywgJ+WIlycpfeWNsGAsIGZsYWdzOiBbJ3ByaW1hcnknLCAncHJvZ3Jlc3NpdmUnXX0sXG5cdFx0XHR7bGFiZWw6ICflj5bmtognLCBmbGFnczogWydzYWZlJywgJ2Nsb3NlJ119LFxuXHRcdF07XG5cdFx0UHJpbnREaWFsb2cucHJvdG90eXBlLmluaXRpYWxpemUgPSBmdW5jdGlvbiAoLi4uYXJncykge1xuXHRcdFx0bGV0IGNoZWNrYm94O1xuXHRcdFx0Y29uc3QgZmllbGRzZXQgPSBbXTtcblx0XHRcdFByaW50RGlhbG9nLnN1cGVyLnByb3RvdHlwZS5pbml0aWFsaXplLmFwcGx5KHRoaXMsIGFyZ3MpO1xuXHRcdFx0dGhpcy5wYW5lbCA9IG5ldyBPTy51aS5QYW5lbExheW91dCh7XG5cdFx0XHRcdHBhZGRlZDogdHJ1ZSxcblx0XHRcdFx0ZXhwYW5kZWQ6IGZhbHNlLFxuXHRcdFx0fSk7XG5cdFx0XHR0aGlzLmNvbnRlbnQgPSBuZXcgT08udWkuRmllbGRzZXRMYXlvdXQoKTtcblx0XHRcdGZvciAoY29uc3QgcXVlc3Rpb24gb2YgcHJpbnRPcHRpb25zTWFpbi5xdWVzdGlvbnMpIHtcblx0XHRcdFx0aWYgKHF1ZXN0aW9uLnR5cGUgPT09ICdjaGVja2JveCcpIHtcblx0XHRcdFx0XHRjaGVja2JveCA9IG5ldyBPTy51aS5DaGVja2JveElucHV0V2lkZ2V0KHtcblx0XHRcdFx0XHRcdHNlbGVjdGVkOiBxdWVzdGlvbi5jaGVja2VkLFxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdHF1ZXN0aW9uLndpZGdldCA9IGNoZWNrYm94O1xuXHRcdFx0XHRcdGZpZWxkc2V0W2ZpZWxkc2V0Lmxlbmd0aF0gPSBuZXcgT08udWkuRmllbGRMYXlvdXQoY2hlY2tib3gsIHtcblx0XHRcdFx0XHRcdGxhYmVsOiBxdWVzdGlvbi5sYWJlbCxcblx0XHRcdFx0XHRcdGFsaWduOiAnaW5saW5lJyxcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0dGhpcy5jb250ZW50LmFkZEl0ZW1zKGZpZWxkc2V0KTtcblx0XHRcdHRoaXMucGFuZWwuJGVsZW1lbnQuYXBwZW5kKHRoaXMuY29udGVudC4kZWxlbWVudCk7XG5cdFx0XHR0aGlzLiRib2R5LmFwcGVuZCh0aGlzLnBhbmVsLiRlbGVtZW50KTtcblx0XHR9O1xuXHRcdFByaW50RGlhbG9nLnByb3RvdHlwZS5nZXRBY3Rpb25Qcm9jZXNzID0gZnVuY3Rpb24gKGFjdGlvbikge1xuXHRcdFx0Y29uc3Qgc2VsZiA9IHRoaXM7XG5cdFx0XHRpZiAoYWN0aW9uID09PSAncHJpbnQnKSB7XG5cdFx0XHRcdHJldHVybiBuZXcgT08udWkuUHJvY2VzcygoKSA9PiB7XG5cdFx0XHRcdFx0Ly8gR2V0IHZhbHVlcyBvZiBjaGVja2JveGVzXG5cdFx0XHRcdFx0Zm9yIChjb25zdCBxdWVzdGlvbiBvZiBwcmludE9wdGlvbnNNYWluLnF1ZXN0aW9ucykge1xuXHRcdFx0XHRcdFx0aWYgKHF1ZXN0aW9uLnR5cGUgPT09ICdjaGVja2JveCcgJiYgcXVlc3Rpb24ud2lkZ2V0KSB7XG5cdFx0XHRcdFx0XHRcdHByaW50T3B0aW9uc01haW5bcXVlc3Rpb24ucmV0dXJudmFsdWVdID0gcXVlc3Rpb24ud2lkZ2V0LmlzU2VsZWN0ZWQoKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0c2VsZi5jbG9zZSh7YWN0aW9ufSkuZG9uZSgoKSA9PiB7XG5cdFx0XHRcdFx0XHRwcmludE9wdGlvbnNNYWluLmNoYW5nZVByaW50Q1NTKCk7XG5cdFx0XHRcdFx0XHRwcmludE9wdGlvbnNNYWluLm90aGVyRW5oYW5jZW1lbnRzKCk7XG5cdFx0XHRcdFx0XHR3aW5kb3cucHJpbnQoKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gUHJpbnREaWFsb2cuc3VwZXIucHJvdG90eXBlLmdldEFjdGlvblByb2Nlc3MuY2FsbCh0aGlzLCBhY3Rpb24pO1xuXHRcdH07XG5cdFx0aWYgKCF3aW5kb3dNYW5hZ2VyKSB7XG5cdFx0XHR3aW5kb3dNYW5hZ2VyID0gbmV3IE9PLnVpLldpbmRvd01hbmFnZXIoKTtcblx0XHRcdGNvbnN0ICRib2R5ID0gJCgnYm9keScpO1xuXHRcdFx0JGJvZHkuYXBwZW5kKHdpbmRvd01hbmFnZXIuJGVsZW1lbnQpO1xuXHRcdH1cblx0XHRpZiAoIXByaW50RGlhbG9nKSB7XG5cdFx0XHRwcmludERpYWxvZyA9IG5ldyBQcmludERpYWxvZyh7XG5cdFx0XHRcdHNpemU6ICdtZWRpdW0nLFxuXHRcdFx0fSk7XG5cdFx0XHR3aW5kb3dNYW5hZ2VyLmFkZFdpbmRvd3MoW3ByaW50RGlhbG9nXSk7XG5cdFx0fVxuXHRcdHdpbmRvd01hbmFnZXIub3BlbldpbmRvdyhwcmludERpYWxvZyk7XG5cdH0sXG5cdGNoYW5nZVByaW50Q1NTKCkge1xuXHRcdC8qIEhlcmUgd2U6XG5cdFx0ICogLSBkaXNhYmxlIHN0eWxlc2hlZXRzIHRoYXQgYXJlIHByaW50IHNwZWNpZmljXG5cdFx0ICogLSBtYWtlIHNjcmVlbiBzcGVjaWZpYyBzdHlsZXNoZWV0cyBhbHNvIGVuYWJsZWQgZm9yIHByaW50IG1lZGl1bVxuXHRcdCAqIC0gcmVtb3ZlIHByaW50IHNwZWNpZmljIHN0eWxlcnVsZXNcblx0XHQgKiAtIG1ha2Ugc2NyZWVuIHNwZWNpZmljIHN0eWxlcnVsZXMgYWxzbyBlbmFibGVkIGZvciBwcmludCBtZWRpdW1cblx0XHQgKi9cblx0XHRsZXQgcHJpbnRTdHlsZSA9ICcnO1xuXHRcdGlmICh0aGlzLmVuaGFuY2VkID09PSBmYWxzZSkge1xuXHRcdFx0bGV0IGk7XG5cdFx0XHRsZXQgajtcblx0XHRcdGxldCBrO1xuXHRcdFx0bGV0IHJ1bGU7XG5cdFx0XHRsZXQgaGFzUHJpbnQ7XG5cdFx0XHRsZXQgaGFzU2NyZWVuO1xuXHRcdFx0bGV0IHJ1bGVzO1xuXHRcdFx0bGV0IHN0eWxlc2hlZXQ7XG5cdFx0XHRjb25zdCBzdHlsZXNoZWV0cyA9IGRvY3VtZW50LnN0eWxlU2hlZXRzO1xuXHRcdFx0Zm9yIChpID0gMDsgaSA8IHN0eWxlc2hlZXRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdHN0eWxlc2hlZXQgPSBzdHlsZXNoZWV0c1tpXTtcblx0XHRcdFx0aWYgKCFzdHlsZXNoZWV0Lm1lZGlhKSB7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKHN0eWxlc2hlZXQubWVkaWEubWVkaWFUZXh0ICYmIHN0eWxlc2hlZXQubWVkaWEubWVkaWFUZXh0LmluY2x1ZGVzKCdwcmludCcpKSB7XG5cdFx0XHRcdFx0aWYgKCFzdHlsZXNoZWV0Lm1lZGlhLm1lZGlhVGV4dC5pbmNsdWRlcygnc2NyZWVuJykpIHtcblx0XHRcdFx0XHRcdHN0eWxlc2hlZXQuZGlzYWJsZWQgPSB0cnVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBlbHNlIGlmIChcblx0XHRcdFx0XHRzdHlsZXNoZWV0Lm1lZGlhLm1lZGlhVGV4dCAmJlxuXHRcdFx0XHRcdHN0eWxlc2hlZXQubWVkaWEubWVkaWFUZXh0LmluY2x1ZGVzKCdzY3JlZW4nKSAmJlxuXHRcdFx0XHRcdCFzdHlsZXNoZWV0Lm1lZGlhLm1lZGlhVGV4dC5pbmNsdWRlcygncHJpbnQnKVxuXHRcdFx0XHQpIHtcblx0XHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdFx0c3R5bGVzaGVldC5tZWRpYS5hcHBlbmRNZWRpdW0oJ3ByaW50Jyk7XG5cdFx0XHRcdFx0fSBjYXRjaCB7XG5cdFx0XHRcdFx0XHRzdHlsZXNoZWV0Lm1lZGlhLm1lZGlhVGV4dCArPSAnLHByaW50Jztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0Lyogbm93IHRlc3QgaW5kaXZpZHVhbCBzdHlsZXNoZWV0IHJ1bGVzICovXG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0cnVsZXMgPSBzdHlsZXNoZWV0LmNzc1J1bGVzIHx8IHN0eWxlc2hlZXQucnVsZXM7XG5cdFx0XHRcdH0gY2F0Y2gge1xuXHRcdFx0XHRcdC8qIENyb3NzIGRvbWFpbiBpc3N1ZS4gKi9cblx0XHRcdFx0XHRtdy5sb2cud2FybignTm90IHBvc3NpYmxlIHRvIGNvcnJlY3Qgc3R5bGVzaGVldCBkdWUgdG8gY3Jvc3Mgb3JpZ2luIHJlc3RyaWN0aW9ucy4nKTtcblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRzdHlsZXNoZWV0LmNvbXBhdGRlbGV0ZSA9IHN0eWxlc2hlZXQuZGVsZXRlUnVsZSB8fCBzdHlsZXNoZWV0LnJlbW92ZVJ1bGU7XG5cdFx0XHRcdGlmIChydWxlcykge1xuXHRcdFx0XHRcdGZvciAoaiA9IDA7IGogPCBydWxlcy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRcdFx0cnVsZSA9IHJ1bGVzW2pdO1xuXHRcdFx0XHRcdFx0aGFzUHJpbnQgPSBmYWxzZTtcblx0XHRcdFx0XHRcdGhhc1NjcmVlbiA9IGZhbHNlO1xuXHRcdFx0XHRcdFx0aWYgKHJ1bGUudHlwZSA9PT0gQ1NTUnVsZS5NRURJQV9SVUxFICYmIHJ1bGUubWVkaWEpIHtcblx0XHRcdFx0XHRcdFx0Zm9yIChrID0gMDsgayA8IHJ1bGUubWVkaWEubGVuZ3RoOyBrKyspIHtcblx0XHRcdFx0XHRcdFx0XHRpZiAocnVsZS5tZWRpYVtrXSA9PT0gJ3ByaW50Jykge1xuXHRcdFx0XHRcdFx0XHRcdFx0aGFzUHJpbnQgPSB0cnVlO1xuXHRcdFx0XHRcdFx0XHRcdH0gZWxzZSBpZiAocnVsZS5tZWRpYVtrXSA9PT0gJ3NjcmVlbicpIHtcblx0XHRcdFx0XHRcdFx0XHRcdGhhc1NjcmVlbiA9IHRydWU7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGlmIChoYXNQcmludCAmJiAhaGFzU2NyZWVuKSB7XG5cdFx0XHRcdFx0XHRcdHN0eWxlc2hlZXQuY29tcGF0ZGVsZXRlKGopO1xuXHRcdFx0XHRcdFx0XHRqLS07XG5cdFx0XHRcdFx0XHR9IGVsc2UgaWYgKGhhc1NjcmVlbiAmJiAhaGFzUHJpbnQpIHtcblx0XHRcdFx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRcdFx0XHRydWxlLm1lZGlhLmFwcGVuZE1lZGl1bSgncHJpbnQnKTtcblx0XHRcdFx0XHRcdFx0fSBjYXRjaCB7XG5cdFx0XHRcdFx0XHRcdFx0cnVsZS5tZWRpYS5tZWRpYVRleHQgKz0gJyxwcmludCc7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0LyogQWRkIGNzcyB0byBoaWRlIGltYWdlcyAqL1xuXHRcdGlmICh0aGlzLm5vaW1hZ2VzKSB7XG5cdFx0XHRwcmludFN0eWxlICs9ICdpbWcsLnRodW1ie2Rpc3BsYXk6bm9uZX0nO1xuXHRcdH1cblx0XHQvKiBBZGQgY3NzIHRvIGhpZGUgcmVmZXJlbmNlcyBtYXJrZXJzIGFuZCB0aGUgcmVmZXJlbmNlcyBsaXN0cyAqL1xuXHRcdGlmICh0aGlzLm5vcmVmcykge1xuXHRcdFx0cHJpbnRTdHlsZSArPSAnLm13LWhlYWRsaW5lW2lkPVwiUmVmZXJlbmNlc1wiXSxvbC5yZWZlcmVuY2VzLC5yZWZlcmVuY2V7ZGlzcGxheTpub25lfSc7XG5cdFx0fVxuXHRcdGlmICh0aGlzLm5vdG9jKSB7XG5cdFx0XHRwcmludFN0eWxlICs9ICcjdG9jLC50b2N7ZGlzcGxheTpub25lfSc7XG5cdFx0fVxuXHRcdGlmICh0aGlzLm5vYmFja2dyb3VuZCkge1xuXHRcdFx0cHJpbnRTdHlsZSArPSAnKntiYWNrZ3JvdW5kOm5vbmUgIWltcG9ydGFudH0nO1xuXHRcdH1cblx0XHRpZiAodGhpcy5ibGFja3RleHQpIHtcblx0XHRcdHByaW50U3R5bGUgKz0gJyp7Y29sb3I6IzAwMCAhaW1wb3J0YW50fSc7XG5cdFx0fVxuXHRcdGlmIChwcmludFN0eWxlKSB7XG5cdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJpbnRTdHlsZScpPy5yZW1vdmUoKTtcblx0XHRcdGNvbnN0IHN0eWxlVGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcblx0XHRcdHN0eWxlVGFnLmlkID0gJ3ByaW50U3R5bGUnO1xuXHRcdFx0c3R5bGVUYWcubWVkaWEgPSAncHJpbnQnO1xuXHRcdFx0c3R5bGVUYWcuYXBwZW5kKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHByaW50U3R5bGUpKTtcblx0XHRcdGRvY3VtZW50LmhlYWQuYXBwZW5kKHN0eWxlVGFnKTtcblx0XHR9XG5cdH0sXG5cdC8qIFJld3JpdGUgdGhlIFwicmV0cmlldmVkIGZyb21cIiB1cmwgdG8gYmUgcmVhZGFibGUgKi9cblx0b3RoZXJFbmhhbmNlbWVudHM6ICgpID0+IHtcblx0XHRjb25zdCAkYm9keSA9ICQoJ2JvZHknKTtcblx0XHRjb25zdCBsaW5rID0gJGJvZHkuZmluZCgnZGl2LnByaW50Zm9vdGVyIGEnKTtcblx0XHRsaW5rLnRleHQoZGVjb2RlVVJJKGxpbmsudGV4dCgpKSk7XG5cdH0sXG5cdHF1ZXN0aW9uczogW1xuXHRcdHtcblx0XHRcdGxhYmVsOiAn6ZqQ6JeP55WM6Z2i5YWD57SgJyxcblx0XHRcdHR5cGU6ICdjaGVja2JveCcsXG5cdFx0XHRjaGVja2VkOiB0cnVlLFxuXHRcdFx0cmV0dXJudmFsdWU6ICdlbmhhbmNlZCcsXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRsYWJlbDogJ+makOiXj+WbvueJhycsXG5cdFx0XHR0eXBlOiAnY2hlY2tib3gnLFxuXHRcdFx0Y2hlY2tlZDogZmFsc2UsXG5cdFx0XHRyZXR1cm52YWx1ZTogJ25vaW1hZ2VzJyxcblx0XHR9LFxuXHRcdHtcblx0XHRcdGxhYmVsOiAn6ZqQ6JeP5Y+C6ICD5paH54yuJyxcblx0XHRcdHR5cGU6ICdjaGVja2JveCcsXG5cdFx0XHRjaGVja2VkOiBmYWxzZSxcblx0XHRcdHJldHVybnZhbHVlOiAnbm9yZWZzJyxcblx0XHR9LFxuXHRcdHtcblx0XHRcdGxhYmVsOiAn6ZqQ6JeP55uu5b2VJyxcblx0XHRcdHR5cGU6ICdjaGVja2JveCcsXG5cdFx0XHRjaGVja2VkOiBmYWxzZSxcblx0XHRcdHJldHVybnZhbHVlOiAnbm90b2MnLFxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0bGFiZWw6ICfnp7vpmaTog4zmma/vvIjmgqjnmoTmtY/op4jlmajmiJblj6/ku6Xopobnm5bmnKzorr7nva7vvIknLFxuXHRcdFx0dHlwZTogJ2NoZWNrYm94Jyxcblx0XHRcdGNoZWNrZWQ6IGZhbHNlLFxuXHRcdFx0cmV0dXJudmFsdWU6ICdub2JhY2tncm91bmQnLFxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0bGFiZWw6ICflvLrliLblsIbmiYDmnInmloflrZforr7nva7kuLrpu5HoibInLFxuXHRcdFx0dHlwZTogJ2NoZWNrYm94Jyxcblx0XHRcdGNoZWNrZWQ6IHRydWUsXG5cdFx0XHRyZXR1cm52YWx1ZTogJ2JsYWNrdGV4dCcsXG5cdFx0fSxcblx0XSxcbn07XG5cbiQoZnVuY3Rpb24gUHJpbnRPcHRpb25zKCkge1xuXHRpZiAobXcuY29uZmlnLmdldCgnd2dOYW1lc3BhY2VOdW1iZXInKSA8IDApIHtcblx0XHRyZXR1cm47XG5cdH1cblx0Ly8gVGhpcyBjYW4gYmUgYmVmb3JlIHRoZSBjbGljayBsaXN0ZW5lciBieSBNVyBpcyBpbnN0YWxsZWQuIEluc3RlYWQsXG5cdC8vIHJlLWFkZCBvdXJzZWx2ZXMgdG8gdGhlIGJhY2sgb2YgdGhlIGRvY3VtZW50LnJlYWR5IGxpc3Rcblx0Ly8gdXNlIGFzeW5jIHRpbWVvdXRlIHRvIGRvIHRoaXNcblx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0JChwcmludE9wdGlvbnNNYWluLmluc3RhbGwpO1xuXHR9LCAwKTtcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFJQTtBQUNKLElBQUlDO0FBRUosSUFBTUMsbUJBQW1CO0VBQ3hCQyxTQUFTQSxNQUFNO0FBQ2QsVUFBTUMsUUFBUUMsRUFBRSxNQUFNO0FBQ3RCLFVBQU1DLGFBQWFGLE1BQU1HLEtBQUssWUFBWTtBQUMxQyxRQUFJRCxXQUFXRSxXQUFXLEdBQUc7QUFDNUI7SUFDRDtBQUNBRixlQUNFRyxJQUFJLE9BQU8sRUFDWEMsSUFBSSxDQUFDLEVBQ0xDLGlCQUNBLFNBQ0NDLE9BQU07QUFDTlYsdUJBQWlCVyxhQUFhO0FBQzlCRCxRQUFFRSxnQkFBZ0I7QUFDbEJGLFFBQUVHLGVBQWU7SUFDbEIsR0FDQSxJQUNEO0VBQ0Y7RUFDQUYsY0FBY0EsTUFBTTtBQUNuQixVQUFNRyxjQUFjLFNBQVVDLFFBQVE7QUFDckNELGtCQUFZRSxNQUFNQyxLQUFLLE1BQU1GLE1BQU07SUFDcEM7QUFDQUcsT0FBR0MsYUFBYUwsYUFBYUksR0FBR0UsR0FBR0MsYUFBYTtBQUNoRFAsZ0JBQVlRLE9BQU9DLE9BQU87QUFDMUJULGdCQUFZUSxPQUFPRSxRQUFBLEdBQUFDLE9BQVdDLE9BQU9DLE1BQU0sS0FBSyxHQUFHLEdBQUMsSUFBQSxFQUFBRixPQUFLQyxPQUFPQyxNQUFNLEtBQUssR0FBRyxHQUFDLEdBQUE7QUFDL0ViLGdCQUFZUSxPQUFPTSxVQUFVLENBQzVCO01BQUNDLFFBQVE7TUFBU0MsT0FBQSxHQUFBTCxPQUFVQyxPQUFPQyxNQUFNLEtBQUssR0FBRyxHQUFDLEdBQUE7TUFBS0ksT0FBTyxDQUFDLFdBQVcsYUFBYTtJQUFDLEdBQ3hGO01BQUNE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QUN0QixVQUFNcUgsT0FBT3RILE1BQU1HLEtBQUssbUJBQW1CO0FBQzNDbUgsU0FBS0MsS0FBS0MsVUFBVUYsS0FBS0MsS0FBSyxDQUFDLENBQUM7RUFDakM7RUFDQTNFLFdBQVcsQ0FDVjtJQUNDaEIsT0FBTztJQUNQdUIsTUFBTTtJQUNORyxTQUFTO0lBQ1RjLGFBQWE7RUFDZCxHQUNBO0lBQ0N4QyxPQUFPO0lBQ1B1QixNQUFNO0lBQ05HLFNBQVM7SUFDVGMsYUFBYTtFQUNkLEdBQ0E7SUFDQ3hDLE9BQU87SUFDUHVCLE1BQU07SUFDTkcsU0FBUztJQUNUYyxhQUFhO0VBQ2QsR0FDQTtJQUNDeEMsT0FBTztJQUNQdUIsTUFBTTtJQUNORyxTQUFTO0lBQ1RjLGFBQWE7RUFDZCxHQUNBO0lBQ0N4QyxPQUFPO0lBQ1B1QixNQUFNO0lBQ05HLFNBQVM7SUFDVGMsYUFBYTtFQUNkLEdBQ0E7SUFDQ3hDLE9BQU87SUFDUHVCLE1BQU07SUFDTkcsU0FBUztJQUNUYyxhQUFhO0VBQ2QsQ0FBQTtBQUVGO0FBRUFuRSxFQUFFLFNBQVN3SCxlQUFlO0FBQ3pCLE1BQUl4QixHQUFHcEYsT0FBT1AsSUFBSSxtQkFBbUIsSUFBSSxHQUFHO0FBQzNDO0VBQ0Q7QUFJQW9ILGFBQVcsTUFBTTtBQUNoQnpILE1BQUVILGlCQUFpQkMsT0FBTztFQUMzQixHQUFHLENBQUM7QUFDTCxDQUFDOyIsCiAgIm5hbWVzIjogWyJ3aW5kb3dNYW5hZ2VyIiwgInByaW50RGlhbG9nIiwgInByaW50T3B0aW9uc01haW4iLCAiaW5zdGFsbCIsICIkYm9keSIsICIkIiwgIiRwcmludExpbmsiLCAiZmluZCIsICJsZW5ndGgiLCAib2ZmIiwgImdldCIsICJhZGRFdmVudExpc3RlbmVyIiwgImUiLCAiY3JlYXRlV2luZG93IiwgInN0b3BQcm9wYWdhdGlvbiIsICJwcmV2ZW50RGVmYXVsdCIsICJQcmludERpYWxvZyIsICJjb25maWciLCAic3VwZXIiLCAiY2FsbCIsICJPTyIsICJpbmhlcml0Q2xhc3MiLCAidWkiLCAiUHJvY2Vzc0RpYWxvZyIsICJzdGF0aWMiLCAibmFtZSIsICJ0aXRsZSIsICJjb25jYXQiLCAid2luZG93IiwgIndnVUxTIiwgImFjdGlvbnMiLCAiYWN0aW9uIiwgImxhYmVsIiwgImZsYWdzIiwgInByb3RvdHlwZSIsICJpbml0aWFsaXplIiwgImFyZ3MiLCAiY2hlY2tib3giLCAiZmllbGRzZXQiLCAiYXBwbHkiLCAicGFuZWwiLCAiUGFuZWxMYXlvdXQiLCAicGFkZGVkIiwgImV4cGFuZGVkIiwgImNvbnRlbnQiLCAiRmllbGRzZXRMYXlvdXQiLCAiX2l0ZXJhdG9yIiwgIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwgInF1ZXN0aW9ucyIsICJfc3RlcCIsICJzIiwgIm4iLCAiZG9uZSIsICJxdWVzdGlvbiIsICJ2YWx1ZSIsICJ0eXBlIiwgIkNoZWNrYm94SW5wdXRXaWRnZXQiLCAic2VsZWN0ZWQiLCAiY2hlY2tlZCIsICJ3aWRnZXQiLCAiRmllbGRMYXlvdXQiLCAiYWxpZ24iLCAiZXJyIiwgImYiLCAiYWRkSXRlbXMiLCAiJGVsZW1lbnQiLCAiYXBwZW5kIiwgImdldEFjdGlvblByb2Nlc3MiLCAic2VsZiIsICJQcm9jZXNzIiwgIl9pdGVyYXRvcjIiLCAiX3N0ZXAyIiwgInJldHVybnZhbHVlIiwgImlzU2VsZWN0ZWQiLCAiY2xvc2UiLCAiY2hhbmdlUHJpbnRDU1MiLCAib3RoZXJFbmhhbmNlbWVudHMiLCAicHJpbnQiLCAiV2luZG93TWFuYWdlciIsICJzaXplIiwgImFkZFdpbmRvd3MiLCAib3BlbldpbmRvdyIsICJwcmludFN0eWxlIiwgImVuaGFuY2VkIiwgImkiLCAiaiIsICJrIiwgInJ1bGUiLCAiaGFzUHJpbnQiLCAiaGFzU2NyZWVuIiwgInJ1bGVzIiwgInN0eWxlc2hlZXQiLCAic3R5bGVzaGVldHMiLCAiZG9jdW1lbnQiLCAic3R5bGVTaGVldHMiLCAibWVkaWEiLCAibWVkaWFUZXh0IiwgImluY2x1ZGVzIiwgImRpc2FibGVkIiwgImFwcGVuZE1lZGl1bSIsICJjc3NSdWxlcyIsICJtdyIsICJsb2ciLCAid2FybiIsICJjb21wYXRkZWxldGUiLCAiZGVsZXRlUnVsZSIsICJyZW1vdmVSdWxlIiwgIkNTU1J1bGUiLCAiTUVESUFfUlVMRSIsICJub2ltYWdlcyIsICJub3JlZnMiLCAibm90b2MiLCAibm9iYWNrZ3JvdW5kIiwgImJsYWNrdGV4dCIsICJfZG9jdW1lbnQkcXVlcnlTZWxlY3QiLCAicXVlcnlTZWxlY3RvciIsICJyZW1vdmUiLCAic3R5bGVUYWciLCAiY3JlYXRlRWxlbWVudCIsICJpZCIsICJjcmVhdGVUZXh0Tm9kZSIsICJoZWFkIiwgImxpbmsiLCAidGV4dCIsICJkZWNvZGVVUkkiLCAiUHJpbnRPcHRpb25zIiwgInNldFRpbWVvdXQiXQp9Cg==

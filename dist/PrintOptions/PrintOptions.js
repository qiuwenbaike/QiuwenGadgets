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
//! src/PrintOptions/modules/i18n.ts
var import_ext_gadget = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    Print: (0, import_ext_gadget.localize)({
      en: "Print",
      ja: "印刷",
      "zh-hans": "打印",
      "zh-hant": "列印"
    }),
    "Print this page": (0, import_ext_gadget.localize)({
      en: "Print this page",
      ja: "このページを印刷に",
      "zh-hans": "打印此页面",
      "zh-hant": "列印此頁面"
    }),
    Cancel: (0, import_ext_gadget.localize)({
      en: "Cancel",
      ja: "キャンセル",
      zh: "取消"
    })
  };
};
var i18nMessages = getI18nMessages();
var getMessage = (key) => {
  return i18nMessages[key] || key;
};
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
    PrintDialog.static.title = getMessage("Print this page");
    PrintDialog.static.actions = [{
      action: "print",
      label: getMessage("Print"),
      flags: ["primary", "progressive"]
    }, {
      label: getMessage("Cancel"),
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1ByaW50T3B0aW9ucy9tb2R1bGVzL2kxOG4udHMiLCAic3JjL1ByaW50T3B0aW9ucy9QcmludE9wdGlvbnMuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7bG9jYWxpemV9IGZyb20gJ2V4dC5nYWRnZXQuaTE4bic7XG5cbmNvbnN0IGdldEkxOG5NZXNzYWdlcyA9ICgpID0+IHtcblx0cmV0dXJuIHtcblx0XHRQcmludDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdQcmludCcsXG5cdFx0XHRqYTogJ+WNsOWItycsXG5cdFx0XHQnemgtaGFucyc6ICfmiZPljbAnLFxuXHRcdFx0J3poLWhhbnQnOiAn5YiX5Y2wJyxcblx0XHR9KSxcblx0XHQnUHJpbnQgdGhpcyBwYWdlJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdQcmludCB0aGlzIHBhZ2UnLFxuXHRcdFx0amE6ICfjgZPjga7jg5rjg7zjgrjjgpLljbDliLfjgasnLFxuXHRcdFx0J3poLWhhbnMnOiAn5omT5Y2w5q2k6aG16Z2iJyxcblx0XHRcdCd6aC1oYW50JzogJ+WIl+WNsOatpOmggemdoicsXG5cdFx0fSksXG5cdFx0Q2FuY2VsOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0NhbmNlbCcsXG5cdFx0XHRqYTogJ+OCreODo+ODs+OCu+ODqycsXG5cdFx0XHR6aDogJ+WPlua2iCcsXG5cdFx0fSksXG5cdH07XG59O1xuXG5jb25zdCBpMThuTWVzc2FnZXMgPSBnZXRJMThuTWVzc2FnZXMoKTtcblxuY29uc3QgZ2V0TWVzc2FnZTogR2V0TWVzc2FnZXM8dHlwZW9mIGkxOG5NZXNzYWdlcz4gPSAoa2V5KSA9PiB7XG5cdHJldHVybiBpMThuTWVzc2FnZXNba2V5XSB8fCBrZXk7XG59O1xuXG5leHBvcnQge2dldE1lc3NhZ2V9O1xuIiwgIi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXRzLWNvbW1lbnRcbi8vIEB0cy1ub2NoZWNrXG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vbW9kdWxlcy9pMThuJztcblxubGV0IC8qKiBAdHlwZSB7T08udWkuV2luZG93TWFuYWdlcn0gKi8gd2luZG93TWFuYWdlcjtcbmxldCAvKiogQHR5cGUge09PLnVpLlByb2Nlc3NEaWFsb2d9ICovIHByaW50RGlhbG9nO1xuXG5jb25zdCBwcmludE9wdGlvbnNNYWluID0ge1xuXHRpbnN0YWxsOiAoKSA9PiB7XG5cdFx0Y29uc3QgJHByaW50TGluayA9ICQoJ2JvZHknKS5maW5kKCcjdC1wcmludCBhJyk7XG5cdFx0aWYgKCEkcHJpbnRMaW5rLmxlbmd0aCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdCRwcmludExpbmtcblx0XHRcdC5vZmYoJ2NsaWNrJylcblx0XHRcdC5nZXQoMClcblx0XHRcdD8uYWRkRXZlbnRMaXN0ZW5lcihcblx0XHRcdFx0J2NsaWNrJyxcblx0XHRcdFx0KGV2ZW50KSA9PiB7XG5cdFx0XHRcdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRwcmludE9wdGlvbnNNYWluLmNyZWF0ZVdpbmRvdygpO1xuXHRcdFx0XHR9LCAvLyBVc2UgY2FwdHVyaW5nIHBoYXNlLCB0byBiZWF0IHRoZSBvdGhlciBjbGljayBsaXN0ZW5lclxuXHRcdFx0XHR0cnVlXG5cdFx0XHQpO1xuXHR9LFxuXHRjcmVhdGVXaW5kb3c6ICgpID0+IHtcblx0XHRjb25zdCBQcmludERpYWxvZyA9IGZ1bmN0aW9uIChjb25maWcpIHtcblx0XHRcdFByaW50RGlhbG9nLnN1cGVyLmNhbGwodGhpcywgY29uZmlnKTtcblx0XHR9O1xuXHRcdE9PLmluaGVyaXRDbGFzcyhQcmludERpYWxvZywgT08udWkuUHJvY2Vzc0RpYWxvZyk7XG5cblx0XHRQcmludERpYWxvZy5zdGF0aWMgPSB7fTtcblx0XHRQcmludERpYWxvZy5zdGF0aWMubmFtZSA9ICdQcmludERpYWxvZyc7XG5cdFx0UHJpbnREaWFsb2cuc3RhdGljLnRpdGxlID0gZ2V0TWVzc2FnZSgnUHJpbnQgdGhpcyBwYWdlJyk7XG5cdFx0UHJpbnREaWFsb2cuc3RhdGljLmFjdGlvbnMgPSBbXG5cdFx0XHR7XG5cdFx0XHRcdGFjdGlvbjogJ3ByaW50Jyxcblx0XHRcdFx0bGFiZWw6IGdldE1lc3NhZ2UoJ1ByaW50JyksXG5cdFx0XHRcdGZsYWdzOiBbJ3ByaW1hcnknLCAncHJvZ3Jlc3NpdmUnXSxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGxhYmVsOiBnZXRNZXNzYWdlKCdDYW5jZWwnKSxcblx0XHRcdFx0ZmxhZ3M6IFsnc2FmZScsICdjbG9zZSddLFxuXHRcdFx0fSxcblx0XHRdO1xuXG5cdFx0UHJpbnREaWFsb2cucHJvdG90eXBlLmluaXRpYWxpemUgPSBmdW5jdGlvbiAoLi4uYXJncykge1xuXHRcdFx0bGV0IGNoZWNrYm94SW5wdXRXaWRnZXQ7XG5cdFx0XHRjb25zdCBmaWVsZExheW91dHMgPSBbXTtcblxuXHRcdFx0UHJpbnREaWFsb2cuc3VwZXIucHJvdG90eXBlLmluaXRpYWxpemUuYXBwbHkodGhpcywgYXJncyk7XG5cblx0XHRcdHRoaXMucGFuZWwgPSBuZXcgT08udWkuUGFuZWxMYXlvdXQoe1xuXHRcdFx0XHRleHBhbmRlZDogZmFsc2UsXG5cdFx0XHRcdHBhZGRlZDogdHJ1ZSxcblx0XHRcdH0pO1xuXG5cdFx0XHR0aGlzLmNvbnRlbnQgPSBuZXcgT08udWkuRmllbGRzZXRMYXlvdXQoKTtcblx0XHRcdGZvciAoY29uc3QgcXVlc3Rpb24gb2YgcHJpbnRPcHRpb25zTWFpbi5xdWVzdGlvbnMpIHtcblx0XHRcdFx0Y29uc3Qge2NoZWNrZWQsIGxhYmVsLCB0eXBlfSA9IHF1ZXN0aW9uO1xuXHRcdFx0XHRpZiAodHlwZSAhPT0gJ2NoZWNrYm94Jykge1xuXHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNoZWNrYm94SW5wdXRXaWRnZXQgPSBuZXcgT08udWkuQ2hlY2tib3hJbnB1dFdpZGdldCh7XG5cdFx0XHRcdFx0c2VsZWN0ZWQ6IGNoZWNrZWQsXG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRxdWVzdGlvbi53aWRnZXQgPSBjaGVja2JveElucHV0V2lkZ2V0O1xuXHRcdFx0XHRmaWVsZExheW91dHNbZmllbGRMYXlvdXRzLmxlbmd0aF0gPSBuZXcgT08udWkuRmllbGRMYXlvdXQoY2hlY2tib3hJbnB1dFdpZGdldCwge1xuXHRcdFx0XHRcdGxhYmVsLFxuXHRcdFx0XHRcdGFsaWduOiAnaW5saW5lJyxcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLmNvbnRlbnQuYWRkSXRlbXMoZmllbGRMYXlvdXRzKTtcblxuXHRcdFx0dGhpcy5wYW5lbC4kZWxlbWVudC5hcHBlbmQodGhpcy5jb250ZW50LiRlbGVtZW50KTtcblx0XHRcdHRoaXMuJGJvZHkuYXBwZW5kKHRoaXMucGFuZWwuJGVsZW1lbnQpO1xuXHRcdH07XG5cblx0XHRQcmludERpYWxvZy5wcm90b3R5cGUuZ2V0QWN0aW9uUHJvY2VzcyA9IGZ1bmN0aW9uIChhY3Rpb24pIHtcblx0XHRcdGNvbnN0IHNlbGYgPSB0aGlzO1xuXHRcdFx0aWYgKGFjdGlvbiA9PT0gJ3ByaW50Jykge1xuXHRcdFx0XHRyZXR1cm4gbmV3IE9PLnVpLlByb2Nlc3MoKCkgPT4ge1xuXHRcdFx0XHRcdC8vIEdldCB2YWx1ZXMgb2YgY2hlY2tib3hlc1xuXHRcdFx0XHRcdGZvciAoY29uc3QgcXVlc3Rpb24gb2YgcHJpbnRPcHRpb25zTWFpbi5xdWVzdGlvbnMpIHtcblx0XHRcdFx0XHRcdGlmIChxdWVzdGlvbi50eXBlID09PSAnY2hlY2tib3gnICYmIHF1ZXN0aW9uLndpZGdldCkge1xuXHRcdFx0XHRcdFx0XHRwcmludE9wdGlvbnNNYWluW3F1ZXN0aW9uLnJldHVybnZhbHVlXSA9IHF1ZXN0aW9uLndpZGdldC5pc1NlbGVjdGVkKCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHNlbGYuY2xvc2Uoe2FjdGlvbn0pLmRvbmUoKCkgPT4ge1xuXHRcdFx0XHRcdFx0cHJpbnRPcHRpb25zTWFpbi5jaGFuZ2VQcmludENTUygpO1xuXHRcdFx0XHRcdFx0cHJpbnRPcHRpb25zTWFpbi5vdGhlckVuaGFuY2VtZW50cygpO1xuXHRcdFx0XHRcdFx0d2luZG93LnByaW50KCk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gUHJpbnREaWFsb2cuc3VwZXIucHJvdG90eXBlLmdldEFjdGlvblByb2Nlc3MuY2FsbCh0aGlzLCBhY3Rpb24pO1xuXHRcdH07XG5cblx0XHRpZiAoIXdpbmRvd01hbmFnZXIpIHtcblx0XHRcdHdpbmRvd01hbmFnZXIgPSBuZXcgT08udWkuV2luZG93TWFuYWdlcigpO1xuXHRcdFx0JCgnYm9keScpLmFwcGVuZCh3aW5kb3dNYW5hZ2VyLiRlbGVtZW50KTtcblx0XHR9XG5cblx0XHRpZiAoIXByaW50RGlhbG9nKSB7XG5cdFx0XHRwcmludERpYWxvZyA9IG5ldyBQcmludERpYWxvZyh7XG5cdFx0XHRcdHNpemU6ICdtZWRpdW0nLFxuXHRcdFx0fSk7XG5cdFx0XHR3aW5kb3dNYW5hZ2VyLmFkZFdpbmRvd3MoW3ByaW50RGlhbG9nXSk7XG5cdFx0fVxuXG5cdFx0d2luZG93TWFuYWdlci5vcGVuV2luZG93KHByaW50RGlhbG9nKTtcblx0fSxcblxuXHRjaGFuZ2VQcmludENTUygpIHtcblx0XHQvKiBIZXJlIHdlOlxuXHRcdCAqIC0gZGlzYWJsZSBzdHlsZXNoZWV0cyB0aGF0IGFyZSBwcmludCBzcGVjaWZpY1xuXHRcdCAqIC0gbWFrZSBzY3JlZW4gc3BlY2lmaWMgc3R5bGVzaGVldHMgYWxzbyBlbmFibGVkIGZvciBwcmludCBtZWRpdW1cblx0XHQgKiAtIHJlbW92ZSBwcmludCBzcGVjaWZpYyBzdHlsZXJ1bGVzXG5cdFx0ICogLSBtYWtlIHNjcmVlbiBzcGVjaWZpYyBzdHlsZXJ1bGVzIGFsc28gZW5hYmxlZCBmb3IgcHJpbnQgbWVkaXVtXG5cdFx0ICovXG5cdFx0aWYgKHRoaXMuZW5oYW5jZWQgPT09IGZhbHNlKSB7XG5cdFx0XHRmb3IgKGNvbnN0IHN0eWxlc2hlZXQgb2YgZG9jdW1lbnQuc3R5bGVTaGVldHMpIHtcblx0XHRcdFx0Y29uc3Qge21lZGlhfSA9IHN0eWxlc2hlZXQ7XG5cdFx0XHRcdGlmICghbWVkaWEpIHtcblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChtZWRpYS5tZWRpYVRleHQgJiYgbWVkaWEubWVkaWFUZXh0LmluY2x1ZGVzKCdwcmludCcpKSB7XG5cdFx0XHRcdFx0aWYgKCFtZWRpYS5tZWRpYVRleHQuaW5jbHVkZXMoJ3NjcmVlbicpKSB7XG5cdFx0XHRcdFx0XHRzdHlsZXNoZWV0LmRpc2FibGVkID0gdHJ1ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gZWxzZSBpZiAoXG5cdFx0XHRcdFx0bWVkaWEubWVkaWFUZXh0ICYmXG5cdFx0XHRcdFx0bWVkaWEubWVkaWFUZXh0LmluY2x1ZGVzKCdzY3JlZW4nKSAmJlxuXHRcdFx0XHRcdCFtZWRpYS5tZWRpYVRleHQuaW5jbHVkZXMoJ3ByaW50Jylcblx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRcdG1lZGlhLmFwcGVuZE1lZGl1bSgncHJpbnQnKTtcblx0XHRcdFx0XHR9IGNhdGNoIHtcblx0XHRcdFx0XHRcdG1lZGlhLm1lZGlhVGV4dCArPSAnLHByaW50Jztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvKiBub3cgdGVzdCBpbmRpdmlkdWFsIHN0eWxlc2hlZXQgcnVsZXMgKi9cblx0XHRcdFx0bGV0IHJ1bGVzO1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdHJ1bGVzID0gc3R5bGVzaGVldC5jc3NSdWxlcyB8fCBzdHlsZXNoZWV0LnJ1bGVzO1xuXHRcdFx0XHR9IGNhdGNoIHtcblx0XHRcdFx0XHQvKiBDcm9zcyBkb21haW4gaXNzdWUuICovXG5cdFx0XHRcdFx0bXcubG9nLndhcm4oJ05vdCBwb3NzaWJsZSB0byBjb3JyZWN0IHN0eWxlc2hlZXQgZHVlIHRvIGNyb3NzIG9yaWdpbiByZXN0cmljdGlvbnMuJyk7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRzdHlsZXNoZWV0LmNvbXBhdGRlbGV0ZSA9IHN0eWxlc2hlZXQuZGVsZXRlUnVsZSB8fCBzdHlsZXNoZWV0LnJlbW92ZVJ1bGU7XG5cblx0XHRcdFx0aWYgKCFydWxlcykge1xuXHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Zm9yIChsZXQgaiA9IDA7IGogPCBydWxlcy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRcdGNvbnN0IHJ1bGUgPSBydWxlc1tqXTtcblxuXHRcdFx0XHRcdGxldCBoYXNQcmludCA9IGZhbHNlO1xuXHRcdFx0XHRcdGxldCBoYXNTY3JlZW4gPSBmYWxzZTtcblxuXHRcdFx0XHRcdGlmIChydWxlLnR5cGUgPT09IENTU1J1bGUuTUVESUFfUlVMRSAmJiBydWxlLm1lZGlhKSB7XG5cdFx0XHRcdFx0XHRmb3IgKGNvbnN0IHJ1bGVNZWRpYSBvZiBydWxlLm1lZGlhKSB7XG5cdFx0XHRcdFx0XHRcdGlmIChydWxlTWVkaWEgPT09ICdwcmludCcpIHtcblx0XHRcdFx0XHRcdFx0XHRoYXNQcmludCA9IHRydWU7XG5cdFx0XHRcdFx0XHRcdH0gZWxzZSBpZiAocnVsZU1lZGlhID09PSAnc2NyZWVuJykge1xuXHRcdFx0XHRcdFx0XHRcdGhhc1NjcmVlbiA9IHRydWU7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0aWYgKGhhc1ByaW50ICYmICFoYXNTY3JlZW4pIHtcblx0XHRcdFx0XHRcdHN0eWxlc2hlZXQuY29tcGF0ZGVsZXRlKGopO1xuXHRcdFx0XHRcdFx0ai0tO1xuXHRcdFx0XHRcdH0gZWxzZSBpZiAocnVsZSAmJiBoYXNTY3JlZW4gJiYgIWhhc1ByaW50KSB7XG5cdFx0XHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdFx0XHRydWxlLm1lZGlhLmFwcGVuZE1lZGl1bSgncHJpbnQnKTtcblx0XHRcdFx0XHRcdH0gY2F0Y2gge1xuXHRcdFx0XHRcdFx0XHRydWxlLm1lZGlhLm1lZGlhVGV4dCArPSAnLHByaW50Jztcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRsZXQgcHJpbnRTdHlsZSA9ICcnO1xuXHRcdC8qIEFkZCBjc3MgdG8gaGlkZSBpbWFnZXMgKi9cblx0XHRpZiAodGhpcy5ub2ltYWdlcykge1xuXHRcdFx0cHJpbnRTdHlsZSArPSAnaW1nLC50aHVtYntkaXNwbGF5Om5vbmV9Jztcblx0XHR9XG5cdFx0LyogQWRkIGNzcyB0byBoaWRlIHJlZmVyZW5jZXMgbWFya2VycyBhbmQgdGhlIHJlZmVyZW5jZXMgbGlzdHMgKi9cblx0XHRpZiAodGhpcy5ub3JlZnMpIHtcblx0XHRcdHByaW50U3R5bGUgKz0gJy5tdy1oZWFkbGluZVtpZD1cIlJlZmVyZW5jZXNcIl0sb2wucmVmZXJlbmNlcywucmVmZXJlbmNle2Rpc3BsYXk6bm9uZX0nO1xuXHRcdH1cblx0XHRpZiAodGhpcy5ub3RvYykge1xuXHRcdFx0cHJpbnRTdHlsZSArPSAnI3RvYywudG9je2Rpc3BsYXk6bm9uZX0nO1xuXHRcdH1cblx0XHRpZiAodGhpcy5ub2JhY2tncm91bmQpIHtcblx0XHRcdHByaW50U3R5bGUgKz0gJyp7YmFja2dyb3VuZDpub25lICFpbXBvcnRhbnR9Jztcblx0XHR9XG5cdFx0aWYgKHRoaXMuYmxhY2t0ZXh0KSB7XG5cdFx0XHRwcmludFN0eWxlICs9ICcqe2NvbG9yOiMwMDAgIWltcG9ydGFudH0nO1xuXHRcdH1cblxuXHRcdGlmIChwcmludFN0eWxlKSB7XG5cdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJpbnRTdHlsZScpPy5yZW1vdmUoKTtcblx0XHRcdGNvbnN0IHN0eWxlVGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcblx0XHRcdHN0eWxlVGFnLmlkID0gJ3ByaW50U3R5bGUnO1xuXHRcdFx0c3R5bGVUYWcubWVkaWEgPSAncHJpbnQnO1xuXHRcdFx0c3R5bGVUYWcuYXBwZW5kKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHByaW50U3R5bGUpKTtcblx0XHRcdGRvY3VtZW50LmhlYWQuYXBwZW5kKHN0eWxlVGFnKTtcblx0XHR9XG5cdH0sXG5cblx0LyogUmV3cml0ZSB0aGUgXCJyZXRyaWV2ZWQgZnJvbVwiIHVybCB0byBiZSByZWFkYWJsZSAqL1xuXHRvdGhlckVuaGFuY2VtZW50czogKCkgPT4ge1xuXHRcdGNvbnN0IGxpbmsgPSAkKCdib2R5JykuZmluZCgnZGl2LnByaW50Zm9vdGVyIGEnKTtcblx0XHRsaW5rLnRleHQoZGVjb2RlVVJJKGxpbmsudGV4dCgpKSk7XG5cdH0sXG5cblx0cXVlc3Rpb25zOiBbXG5cdFx0e1xuXHRcdFx0bGFiZWw6ICfpmpDol4/nlYzpnaLlhYPntKAnLFxuXHRcdFx0dHlwZTogJ2NoZWNrYm94Jyxcblx0XHRcdGNoZWNrZWQ6IHRydWUsXG5cdFx0XHRyZXR1cm52YWx1ZTogJ2VuaGFuY2VkJyxcblx0XHR9LFxuXHRcdHtcblx0XHRcdGxhYmVsOiAn6ZqQ6JeP5Zu+54mHJyxcblx0XHRcdHR5cGU6ICdjaGVja2JveCcsXG5cdFx0XHRjaGVja2VkOiBmYWxzZSxcblx0XHRcdHJldHVybnZhbHVlOiAnbm9pbWFnZXMnLFxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0bGFiZWw6ICfpmpDol4/lj4LogIPmlofnjK4nLFxuXHRcdFx0dHlwZTogJ2NoZWNrYm94Jyxcblx0XHRcdGNoZWNrZWQ6IGZhbHNlLFxuXHRcdFx0cmV0dXJudmFsdWU6ICdub3JlZnMnLFxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0bGFiZWw6ICfpmpDol4/nm67lvZUnLFxuXHRcdFx0dHlwZTogJ2NoZWNrYm94Jyxcblx0XHRcdGNoZWNrZWQ6IGZhbHNlLFxuXHRcdFx0cmV0dXJudmFsdWU6ICdub3RvYycsXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRsYWJlbDogJ+enu+mZpOiDjOaZr++8iOaCqOeahOa1j+iniOWZqOaIluWPr+S7peimhuebluacrOiuvue9ru+8iScsXG5cdFx0XHR0eXBlOiAnY2hlY2tib3gnLFxuXHRcdFx0Y2hlY2tlZDogZmFsc2UsXG5cdFx0XHRyZXR1cm52YWx1ZTogJ25vYmFja2dyb3VuZCcsXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRsYWJlbDogJ+W8uuWItuWwhuaJgOacieaWh+Wtl+iuvue9ruS4uum7keiJsicsXG5cdFx0XHR0eXBlOiAnY2hlY2tib3gnLFxuXHRcdFx0Y2hlY2tlZDogdHJ1ZSxcblx0XHRcdHJldHVybnZhbHVlOiAnYmxhY2t0ZXh0Jyxcblx0XHR9LFxuXHRdLFxufTtcblxuJChmdW5jdGlvbiBwcmludE9wdGlvbnMoKSB7XG5cdGlmIChtdy5jb25maWcuZ2V0KCd3Z05hbWVzcGFjZU51bWJlcicpIDwgMCkge1xuXHRcdHJldHVybjtcblx0fVxuXHQvLyBUaGlzIGNhbiBiZSBiZWZvcmUgdGhlIGNsaWNrIGxpc3RlbmVyIGJ5IE1XIGlzIGluc3RhbGxlZC4gSW5zdGVhZCxcblx0Ly8gcmUtYWRkIG91cnNlbHZlcyB0byB0aGUgYmFjayBvZiB0aGUgZG9jdW1lbnQucmVhZHkgbGlzdFxuXHQvLyB1c2UgYXN5bmMgdGltZW91dGUgdG8gZG8gdGhpc1xuXHRzZXRUaW1lb3V0KHByaW50T3B0aW9uc01haW4uaW5zdGFsbCwgMCk7XG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsb0JBQXVCQyxRQUFBLGlCQUFBO0FBRXZCLElB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dF9nYWRnZXQiLCAicmVxdWlyZSIsICJnZXRJMThuTWVzc2FnZXMiLCAiUHJpbnQiLCAibG9jYWxpemUiLCAiZW4iLCAiamEiLCAiQ2FuY2VsIiwgInpoIiwgImkxOG5NZXNzYWdlcyIsICJnZXRNZXNzYWdlIiwgImtleSIsICJ3aW5kb3dNYW5hZ2VyIiwgInByaW50RGlhbG9nIiwgInByaW50T3B0aW9uc01haW4iLCAiaW5zdGFsbCIsICJfJHByaW50TGluayRvZmYkZ2V0IiwgIiRwcmludExpbmsiLCAiJCIsICJmaW5kIiwgImxlbmd0aCIsICJvZmYiLCAiZ2V0IiwgImFkZEV2ZW50TGlzdGVuZXIiLCAiZXZlbnQiLCAic3RvcFByb3BhZ2F0aW9uIiwgInByZXZlbnREZWZhdWx0IiwgImNyZWF0ZVdpbmRvdyIsICJQcmludERpYWxvZyIsICJjb25maWciLCAic3VwZXIiLCAiY2FsbCIsICJPTyIsICJpbmhlcml0Q2xhc3MiLCAidWkiLCAiUHJvY2Vzc0RpYWxvZyIsICJzdGF0aWMiLCAibmFtZSIsICJ0aXRsZSIsICJhY3Rpb25zIiwgImFjdGlvbiIsICJsYWJlbCIsICJmbGFncyIsICJwcm90b3R5cGUiLCAiaW5pdGlhbGl6ZSIsICJhcmdzIiwgImNoZWNrYm94SW5wdXRXaWRnZXQiLCAiZmllbGRMYXlvdXRzIiwgImFwcGx5IiwgInBhbmVsIiwgIlBhbmVsTGF5b3V0IiwgImV4cGFuZGVkIiwgInBhZGRlZCIsICJjb250ZW50IiwgIkZpZWxkc2V0TGF5b3V0IiwgIl9pdGVyYXRvciIsICJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsICJxdWVzdGlvbnMiLCAiX3N0ZXAiLCAicyIsICJuIiwgImRvbmUiLCAicXVlc3Rpb24iLCAidmFsdWUiLCAiY2hlY2tlZCIsICJ0eXBlIiwgIkNoZWNrYm94SW5wdXRXaWRnZXQiLCAic2VsZWN0ZWQiLCAid2lkZ2V0IiwgIkZpZWxkTGF5b3V0IiwgImFsaWduIiwgImVyciIsICJlIiwgImYiLCAiYWRkSXRlbXMiLCAiJGVsZW1lbnQiLCAiYXBwZW5kIiwgIiRib2R5IiwgImdldEFjdGlvblByb2Nlc3MiLCAic2VsZiIsICJQcm9jZXNzIiwgIl9pdGVyYXRvcjIiLCAiX3N0ZXAyIiwgInJldHVybnZhbHVlIiwgImlzU2VsZWN0ZWQiLCAiY2xvc2UiLCAiY2hhbmdlUHJpbnRDU1MiLCAib3RoZXJFbmhhbmNlbWVudHMiLCAid2luZG93IiwgInByaW50IiwgIldpbmRvd01hbmFnZXIiLCAic2l6ZSIsICJhZGRXaW5kb3dzIiwgIm9wZW5XaW5kb3ciLCAiZW5oYW5jZWQiLCAiX2l0ZXJhdG9yMyIsICJkb2N1bWVudCIsICJzdHlsZVNoZWV0cyIsICJfc3RlcDMiLCAic3R5bGVzaGVldCIsICJtZWRpYSIsICJtZWRpYVRleHQiLCAiaW5jbHVkZXMiLCAiZGlzYWJsZWQiLCAiYXBwZW5kTWVkaXVtIiwgInJ1bGVzIiwgImNzc1J1bGVzIiwgIm13IiwgImxvZyIsICJ3YXJuIiwgImNvbXBhdGRlbGV0ZSIsICJkZWxldGVSdWxlIiwgInJlbW92ZVJ1bGUiLCAiaiIsICJydWxlIiwgImhhc1ByaW50IiwgImhhc1NjcmVlbiIsICJDU1NSdWxlIiwgIk1FRElBX1JVTEUiLCAiX2l0ZXJhdG9yNCIsICJfc3RlcDQiLCAicnVsZU1lZGlhIiwgInByaW50U3R5bGUiLCAibm9pbWFnZXMiLCAibm9yZWZzIiwgIm5vdG9jIiwgIm5vYmFja2dyb3VuZCIsICJibGFja3RleHQiLCAiX2RvY3VtZW50JHF1ZXJ5U2VsZWN0IiwgInF1ZXJ5U2VsZWN0b3IiLCAicmVtb3ZlIiwgInN0eWxlVGFnIiwgImNyZWF0ZUVsZW1lbnQiLCAiaWQiLCAiY3JlYXRlVGV4dE5vZGUiLCAiaGVhZCIsICJsaW5rIiwgInRleHQiLCAiZGVjb2RlVVJJIiwgInByaW50T3B0aW9ucyIsICJzZXRUaW1lb3V0Il0KfQo=

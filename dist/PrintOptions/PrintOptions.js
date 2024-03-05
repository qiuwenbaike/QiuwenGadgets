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
      "zh-hans": "Api 调用连续失败 $1 次，$1 次调用的错误分别为：",
      "zh-hant": "Api 調用連續失敗 $1 次，$1 次調用的錯誤分別為："
    }),
    "Print this page": (0, import_ext_gadget.localize)({
      en: "Print this page",
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1ByaW50T3B0aW9ucy9tb2R1bGVzL2kxOG4udHMiLCAic3JjL1ByaW50T3B0aW9ucy9QcmludE9wdGlvbnMuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7bG9jYWxpemV9IGZyb20gJ2V4dC5nYWRnZXQuaTE4bic7XG5cbmNvbnN0IGdldEkxOG5NZXNzYWdlcyA9ICgpID0+IHtcblx0cmV0dXJuIHtcblx0XHRQcmludDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdQcmludCcsXG5cdFx0XHQnemgtaGFucyc6ICdBcGkg6LCD55So6L+e57ut5aSx6LSlICQxIOasoe+8jCQxIOasoeiwg+eUqOeahOmUmeivr+WIhuWIq+S4uu+8micsXG5cdFx0XHQnemgtaGFudCc6ICdBcGkg6Kq/55So6YCj57qM5aSx5pWXICQxIOasoe+8jCQxIOasoeiqv+eUqOeahOmMr+iqpOWIhuWIpeeCuu+8micsXG5cdFx0fSksXG5cdFx0J1ByaW50IHRoaXMgcGFnZSc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnUHJpbnQgdGhpcyBwYWdlJyxcblx0XHRcdCd6aC1oYW5zJzogJ+aJk+WNsOatpOmhtemdoicsXG5cdFx0XHQnemgtaGFudCc6ICfliJfljbDmraTpoIHpnaInLFxuXHRcdH0pLFxuXHRcdENhbmNlbDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdDYW5jZWwnLFxuXHRcdFx0amE6ICfjgq3jg6Pjg7Pjgrvjg6snLFxuXHRcdFx0emg6ICflj5bmtognLFxuXHRcdH0pLFxuXHR9O1xufTtcblxuY29uc3QgaTE4bk1lc3NhZ2VzID0gZ2V0STE4bk1lc3NhZ2VzKCk7XG5cbmNvbnN0IGdldE1lc3NhZ2U6IEdldE1lc3NhZ2VzPHR5cGVvZiBpMThuTWVzc2FnZXM+ID0gKGtleSkgPT4ge1xuXHRyZXR1cm4gaTE4bk1lc3NhZ2VzW2tleV0gfHwga2V5O1xufTtcblxuZXhwb3J0IHtnZXRNZXNzYWdlfTtcbiIsICIvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10cy1jb21tZW50XG4vLyBAdHMtbm9jaGVja1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL21vZHVsZXMvaTE4bic7XG5cbmxldCAvKiogQHR5cGUge09PLnVpLldpbmRvd01hbmFnZXJ9ICovIHdpbmRvd01hbmFnZXI7XG5sZXQgLyoqIEB0eXBlIHtPTy51aS5Qcm9jZXNzRGlhbG9nfSAqLyBwcmludERpYWxvZztcblxuY29uc3QgcHJpbnRPcHRpb25zTWFpbiA9IHtcblx0aW5zdGFsbDogKCkgPT4ge1xuXHRcdGNvbnN0ICRwcmludExpbmsgPSAkKCdib2R5JykuZmluZCgnI3QtcHJpbnQgYScpO1xuXHRcdGlmICghJHByaW50TGluay5sZW5ndGgpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHQkcHJpbnRMaW5rXG5cdFx0XHQub2ZmKCdjbGljaycpXG5cdFx0XHQuZ2V0KDApXG5cdFx0XHQ/LmFkZEV2ZW50TGlzdGVuZXIoXG5cdFx0XHRcdCdjbGljaycsXG5cdFx0XHRcdChldmVudCkgPT4ge1xuXHRcdFx0XHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0cHJpbnRPcHRpb25zTWFpbi5jcmVhdGVXaW5kb3coKTtcblx0XHRcdFx0fSwgLy8gVXNlIGNhcHR1cmluZyBwaGFzZSwgdG8gYmVhdCB0aGUgb3RoZXIgY2xpY2sgbGlzdGVuZXJcblx0XHRcdFx0dHJ1ZVxuXHRcdFx0KTtcblx0fSxcblx0Y3JlYXRlV2luZG93OiAoKSA9PiB7XG5cdFx0Y29uc3QgUHJpbnREaWFsb2cgPSBmdW5jdGlvbiAoY29uZmlnKSB7XG5cdFx0XHRQcmludERpYWxvZy5zdXBlci5jYWxsKHRoaXMsIGNvbmZpZyk7XG5cdFx0fTtcblx0XHRPTy5pbmhlcml0Q2xhc3MoUHJpbnREaWFsb2csIE9PLnVpLlByb2Nlc3NEaWFsb2cpO1xuXG5cdFx0UHJpbnREaWFsb2cuc3RhdGljID0ge307XG5cdFx0UHJpbnREaWFsb2cuc3RhdGljLm5hbWUgPSAnUHJpbnREaWFsb2cnO1xuXHRcdFByaW50RGlhbG9nLnN0YXRpYy50aXRsZSA9IGdldE1lc3NhZ2UoJ1ByaW50IHRoaXMgcGFnZScpO1xuXHRcdFByaW50RGlhbG9nLnN0YXRpYy5hY3Rpb25zID0gW1xuXHRcdFx0e1xuXHRcdFx0XHRhY3Rpb246ICdwcmludCcsXG5cdFx0XHRcdGxhYmVsOiBnZXRNZXNzYWdlKCdQcmludCcpLFxuXHRcdFx0XHRmbGFnczogWydwcmltYXJ5JywgJ3Byb2dyZXNzaXZlJ10sXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRsYWJlbDogZ2V0TWVzc2FnZSgnQ2FuY2VsJyksXG5cdFx0XHRcdGZsYWdzOiBbJ3NhZmUnLCAnY2xvc2UnXSxcblx0XHRcdH0sXG5cdFx0XTtcblxuXHRcdFByaW50RGlhbG9nLnByb3RvdHlwZS5pbml0aWFsaXplID0gZnVuY3Rpb24gKC4uLmFyZ3MpIHtcblx0XHRcdGxldCBjaGVja2JveElucHV0V2lkZ2V0O1xuXHRcdFx0Y29uc3QgZmllbGRMYXlvdXRzID0gW107XG5cblx0XHRcdFByaW50RGlhbG9nLnN1cGVyLnByb3RvdHlwZS5pbml0aWFsaXplLmFwcGx5KHRoaXMsIGFyZ3MpO1xuXG5cdFx0XHR0aGlzLnBhbmVsID0gbmV3IE9PLnVpLlBhbmVsTGF5b3V0KHtcblx0XHRcdFx0ZXhwYW5kZWQ6IGZhbHNlLFxuXHRcdFx0XHRwYWRkZWQ6IHRydWUsXG5cdFx0XHR9KTtcblxuXHRcdFx0dGhpcy5jb250ZW50ID0gbmV3IE9PLnVpLkZpZWxkc2V0TGF5b3V0KCk7XG5cdFx0XHRmb3IgKGNvbnN0IHF1ZXN0aW9uIG9mIHByaW50T3B0aW9uc01haW4ucXVlc3Rpb25zKSB7XG5cdFx0XHRcdGNvbnN0IHtjaGVja2VkLCBsYWJlbCwgdHlwZX0gPSBxdWVzdGlvbjtcblx0XHRcdFx0aWYgKHR5cGUgIT09ICdjaGVja2JveCcpIHtcblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRjaGVja2JveElucHV0V2lkZ2V0ID0gbmV3IE9PLnVpLkNoZWNrYm94SW5wdXRXaWRnZXQoe1xuXHRcdFx0XHRcdHNlbGVjdGVkOiBjaGVja2VkLFxuXHRcdFx0XHR9KTtcblx0XHRcdFx0cXVlc3Rpb24ud2lkZ2V0ID0gY2hlY2tib3hJbnB1dFdpZGdldDtcblx0XHRcdFx0ZmllbGRMYXlvdXRzW2ZpZWxkTGF5b3V0cy5sZW5ndGhdID0gbmV3IE9PLnVpLkZpZWxkTGF5b3V0KGNoZWNrYm94SW5wdXRXaWRnZXQsIHtcblx0XHRcdFx0XHRsYWJlbCxcblx0XHRcdFx0XHRhbGlnbjogJ2lubGluZScsXG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5jb250ZW50LmFkZEl0ZW1zKGZpZWxkTGF5b3V0cyk7XG5cblx0XHRcdHRoaXMucGFuZWwuJGVsZW1lbnQuYXBwZW5kKHRoaXMuY29udGVudC4kZWxlbWVudCk7XG5cdFx0XHR0aGlzLiRib2R5LmFwcGVuZCh0aGlzLnBhbmVsLiRlbGVtZW50KTtcblx0XHR9O1xuXG5cdFx0UHJpbnREaWFsb2cucHJvdG90eXBlLmdldEFjdGlvblByb2Nlc3MgPSBmdW5jdGlvbiAoYWN0aW9uKSB7XG5cdFx0XHRjb25zdCBzZWxmID0gdGhpcztcblx0XHRcdGlmIChhY3Rpb24gPT09ICdwcmludCcpIHtcblx0XHRcdFx0cmV0dXJuIG5ldyBPTy51aS5Qcm9jZXNzKCgpID0+IHtcblx0XHRcdFx0XHQvLyBHZXQgdmFsdWVzIG9mIGNoZWNrYm94ZXNcblx0XHRcdFx0XHRmb3IgKGNvbnN0IHF1ZXN0aW9uIG9mIHByaW50T3B0aW9uc01haW4ucXVlc3Rpb25zKSB7XG5cdFx0XHRcdFx0XHRpZiAocXVlc3Rpb24udHlwZSA9PT0gJ2NoZWNrYm94JyAmJiBxdWVzdGlvbi53aWRnZXQpIHtcblx0XHRcdFx0XHRcdFx0cHJpbnRPcHRpb25zTWFpbltxdWVzdGlvbi5yZXR1cm52YWx1ZV0gPSBxdWVzdGlvbi53aWRnZXQuaXNTZWxlY3RlZCgpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRzZWxmLmNsb3NlKHthY3Rpb259KS5kb25lKCgpID0+IHtcblx0XHRcdFx0XHRcdHByaW50T3B0aW9uc01haW4uY2hhbmdlUHJpbnRDU1MoKTtcblx0XHRcdFx0XHRcdHByaW50T3B0aW9uc01haW4ub3RoZXJFbmhhbmNlbWVudHMoKTtcblx0XHRcdFx0XHRcdHdpbmRvdy5wcmludCgpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9KTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIFByaW50RGlhbG9nLnN1cGVyLnByb3RvdHlwZS5nZXRBY3Rpb25Qcm9jZXNzLmNhbGwodGhpcywgYWN0aW9uKTtcblx0XHR9O1xuXG5cdFx0aWYgKCF3aW5kb3dNYW5hZ2VyKSB7XG5cdFx0XHR3aW5kb3dNYW5hZ2VyID0gbmV3IE9PLnVpLldpbmRvd01hbmFnZXIoKTtcblx0XHRcdCQoJ2JvZHknKS5hcHBlbmQod2luZG93TWFuYWdlci4kZWxlbWVudCk7XG5cdFx0fVxuXG5cdFx0aWYgKCFwcmludERpYWxvZykge1xuXHRcdFx0cHJpbnREaWFsb2cgPSBuZXcgUHJpbnREaWFsb2coe1xuXHRcdFx0XHRzaXplOiAnbWVkaXVtJyxcblx0XHRcdH0pO1xuXHRcdFx0d2luZG93TWFuYWdlci5hZGRXaW5kb3dzKFtwcmludERpYWxvZ10pO1xuXHRcdH1cblxuXHRcdHdpbmRvd01hbmFnZXIub3BlbldpbmRvdyhwcmludERpYWxvZyk7XG5cdH0sXG5cblx0Y2hhbmdlUHJpbnRDU1MoKSB7XG5cdFx0LyogSGVyZSB3ZTpcblx0XHQgKiAtIGRpc2FibGUgc3R5bGVzaGVldHMgdGhhdCBhcmUgcHJpbnQgc3BlY2lmaWNcblx0XHQgKiAtIG1ha2Ugc2NyZWVuIHNwZWNpZmljIHN0eWxlc2hlZXRzIGFsc28gZW5hYmxlZCBmb3IgcHJpbnQgbWVkaXVtXG5cdFx0ICogLSByZW1vdmUgcHJpbnQgc3BlY2lmaWMgc3R5bGVydWxlc1xuXHRcdCAqIC0gbWFrZSBzY3JlZW4gc3BlY2lmaWMgc3R5bGVydWxlcyBhbHNvIGVuYWJsZWQgZm9yIHByaW50IG1lZGl1bVxuXHRcdCAqL1xuXHRcdGlmICh0aGlzLmVuaGFuY2VkID09PSBmYWxzZSkge1xuXHRcdFx0Zm9yIChjb25zdCBzdHlsZXNoZWV0IG9mIGRvY3VtZW50LnN0eWxlU2hlZXRzKSB7XG5cdFx0XHRcdGNvbnN0IHttZWRpYX0gPSBzdHlsZXNoZWV0O1xuXHRcdFx0XHRpZiAoIW1lZGlhKSB7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAobWVkaWEubWVkaWFUZXh0ICYmIG1lZGlhLm1lZGlhVGV4dC5pbmNsdWRlcygncHJpbnQnKSkge1xuXHRcdFx0XHRcdGlmICghbWVkaWEubWVkaWFUZXh0LmluY2x1ZGVzKCdzY3JlZW4nKSkge1xuXHRcdFx0XHRcdFx0c3R5bGVzaGVldC5kaXNhYmxlZCA9IHRydWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGVsc2UgaWYgKFxuXHRcdFx0XHRcdG1lZGlhLm1lZGlhVGV4dCAmJlxuXHRcdFx0XHRcdG1lZGlhLm1lZGlhVGV4dC5pbmNsdWRlcygnc2NyZWVuJykgJiZcblx0XHRcdFx0XHQhbWVkaWEubWVkaWFUZXh0LmluY2x1ZGVzKCdwcmludCcpXG5cdFx0XHRcdCkge1xuXHRcdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0XHRtZWRpYS5hcHBlbmRNZWRpdW0oJ3ByaW50Jyk7XG5cdFx0XHRcdFx0fSBjYXRjaCB7XG5cdFx0XHRcdFx0XHRtZWRpYS5tZWRpYVRleHQgKz0gJyxwcmludCc7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0Lyogbm93IHRlc3QgaW5kaXZpZHVhbCBzdHlsZXNoZWV0IHJ1bGVzICovXG5cdFx0XHRcdGxldCBydWxlcztcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRydWxlcyA9IHN0eWxlc2hlZXQuY3NzUnVsZXMgfHwgc3R5bGVzaGVldC5ydWxlcztcblx0XHRcdFx0fSBjYXRjaCB7XG5cdFx0XHRcdFx0LyogQ3Jvc3MgZG9tYWluIGlzc3VlLiAqL1xuXHRcdFx0XHRcdG13LmxvZy53YXJuKCdOb3QgcG9zc2libGUgdG8gY29ycmVjdCBzdHlsZXNoZWV0IGR1ZSB0byBjcm9zcyBvcmlnaW4gcmVzdHJpY3Rpb25zLicpO1xuXHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0c3R5bGVzaGVldC5jb21wYXRkZWxldGUgPSBzdHlsZXNoZWV0LmRlbGV0ZVJ1bGUgfHwgc3R5bGVzaGVldC5yZW1vdmVSdWxlO1xuXG5cdFx0XHRcdGlmICghcnVsZXMpIHtcblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGZvciAobGV0IGogPSAwOyBqIDwgcnVsZXMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0XHRjb25zdCBydWxlID0gcnVsZXNbal07XG5cblx0XHRcdFx0XHRsZXQgaGFzUHJpbnQgPSBmYWxzZTtcblx0XHRcdFx0XHRsZXQgaGFzU2NyZWVuID0gZmFsc2U7XG5cblx0XHRcdFx0XHRpZiAocnVsZS50eXBlID09PSBDU1NSdWxlLk1FRElBX1JVTEUgJiYgcnVsZS5tZWRpYSkge1xuXHRcdFx0XHRcdFx0Zm9yIChjb25zdCBydWxlTWVkaWEgb2YgcnVsZS5tZWRpYSkge1xuXHRcdFx0XHRcdFx0XHRpZiAocnVsZU1lZGlhID09PSAncHJpbnQnKSB7XG5cdFx0XHRcdFx0XHRcdFx0aGFzUHJpbnQgPSB0cnVlO1xuXHRcdFx0XHRcdFx0XHR9IGVsc2UgaWYgKHJ1bGVNZWRpYSA9PT0gJ3NjcmVlbicpIHtcblx0XHRcdFx0XHRcdFx0XHRoYXNTY3JlZW4gPSB0cnVlO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGlmIChoYXNQcmludCAmJiAhaGFzU2NyZWVuKSB7XG5cdFx0XHRcdFx0XHRzdHlsZXNoZWV0LmNvbXBhdGRlbGV0ZShqKTtcblx0XHRcdFx0XHRcdGotLTtcblx0XHRcdFx0XHR9IGVsc2UgaWYgKHJ1bGUgJiYgaGFzU2NyZWVuICYmICFoYXNQcmludCkge1xuXHRcdFx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRcdFx0cnVsZS5tZWRpYS5hcHBlbmRNZWRpdW0oJ3ByaW50Jyk7XG5cdFx0XHRcdFx0XHR9IGNhdGNoIHtcblx0XHRcdFx0XHRcdFx0cnVsZS5tZWRpYS5tZWRpYVRleHQgKz0gJyxwcmludCc7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0bGV0IHByaW50U3R5bGUgPSAnJztcblx0XHQvKiBBZGQgY3NzIHRvIGhpZGUgaW1hZ2VzICovXG5cdFx0aWYgKHRoaXMubm9pbWFnZXMpIHtcblx0XHRcdHByaW50U3R5bGUgKz0gJ2ltZywudGh1bWJ7ZGlzcGxheTpub25lfSc7XG5cdFx0fVxuXHRcdC8qIEFkZCBjc3MgdG8gaGlkZSByZWZlcmVuY2VzIG1hcmtlcnMgYW5kIHRoZSByZWZlcmVuY2VzIGxpc3RzICovXG5cdFx0aWYgKHRoaXMubm9yZWZzKSB7XG5cdFx0XHRwcmludFN0eWxlICs9ICcubXctaGVhZGxpbmVbaWQ9XCJSZWZlcmVuY2VzXCJdLG9sLnJlZmVyZW5jZXMsLnJlZmVyZW5jZXtkaXNwbGF5Om5vbmV9Jztcblx0XHR9XG5cdFx0aWYgKHRoaXMubm90b2MpIHtcblx0XHRcdHByaW50U3R5bGUgKz0gJyN0b2MsLnRvY3tkaXNwbGF5Om5vbmV9Jztcblx0XHR9XG5cdFx0aWYgKHRoaXMubm9iYWNrZ3JvdW5kKSB7XG5cdFx0XHRwcmludFN0eWxlICs9ICcqe2JhY2tncm91bmQ6bm9uZSAhaW1wb3J0YW50fSc7XG5cdFx0fVxuXHRcdGlmICh0aGlzLmJsYWNrdGV4dCkge1xuXHRcdFx0cHJpbnRTdHlsZSArPSAnKntjb2xvcjojMDAwICFpbXBvcnRhbnR9Jztcblx0XHR9XG5cblx0XHRpZiAocHJpbnRTdHlsZSkge1xuXHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ByaW50U3R5bGUnKT8ucmVtb3ZlKCk7XG5cdFx0XHRjb25zdCBzdHlsZVRhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG5cdFx0XHRzdHlsZVRhZy5pZCA9ICdwcmludFN0eWxlJztcblx0XHRcdHN0eWxlVGFnLm1lZGlhID0gJ3ByaW50Jztcblx0XHRcdHN0eWxlVGFnLmFwcGVuZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShwcmludFN0eWxlKSk7XG5cdFx0XHRkb2N1bWVudC5oZWFkLmFwcGVuZChzdHlsZVRhZyk7XG5cdFx0fVxuXHR9LFxuXG5cdC8qIFJld3JpdGUgdGhlIFwicmV0cmlldmVkIGZyb21cIiB1cmwgdG8gYmUgcmVhZGFibGUgKi9cblx0b3RoZXJFbmhhbmNlbWVudHM6ICgpID0+IHtcblx0XHRjb25zdCBsaW5rID0gJCgnYm9keScpLmZpbmQoJ2Rpdi5wcmludGZvb3RlciBhJyk7XG5cdFx0bGluay50ZXh0KGRlY29kZVVSSShsaW5rLnRleHQoKSkpO1xuXHR9LFxuXG5cdHF1ZXN0aW9uczogW1xuXHRcdHtcblx0XHRcdGxhYmVsOiAn6ZqQ6JeP55WM6Z2i5YWD57SgJyxcblx0XHRcdHR5cGU6ICdjaGVja2JveCcsXG5cdFx0XHRjaGVja2VkOiB0cnVlLFxuXHRcdFx0cmV0dXJudmFsdWU6ICdlbmhhbmNlZCcsXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRsYWJlbDogJ+makOiXj+WbvueJhycsXG5cdFx0XHR0eXBlOiAnY2hlY2tib3gnLFxuXHRcdFx0Y2hlY2tlZDogZmFsc2UsXG5cdFx0XHRyZXR1cm52YWx1ZTogJ25vaW1hZ2VzJyxcblx0XHR9LFxuXHRcdHtcblx0XHRcdGxhYmVsOiAn6ZqQ6JeP5Y+C6ICD5paH54yuJyxcblx0XHRcdHR5cGU6ICdjaGVja2JveCcsXG5cdFx0XHRjaGVja2VkOiBmYWxzZSxcblx0XHRcdHJldHVybnZhbHVlOiAnbm9yZWZzJyxcblx0XHR9LFxuXHRcdHtcblx0XHRcdGxhYmVsOiAn6ZqQ6JeP55uu5b2VJyxcblx0XHRcdHR5cGU6ICdjaGVja2JveCcsXG5cdFx0XHRjaGVja2VkOiBmYWxzZSxcblx0XHRcdHJldHVybnZhbHVlOiAnbm90b2MnLFxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0bGFiZWw6ICfnp7vpmaTog4zmma/vvIjmgqjnmoTmtY/op4jlmajmiJblj6/ku6Xopobnm5bmnKzorr7nva7vvIknLFxuXHRcdFx0dHlwZTogJ2NoZWNrYm94Jyxcblx0XHRcdGNoZWNrZWQ6IGZhbHNlLFxuXHRcdFx0cmV0dXJudmFsdWU6ICdub2JhY2tncm91bmQnLFxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0bGFiZWw6ICflvLrliLblsIbmiYDmnInmloflrZforr7nva7kuLrpu5HoibInLFxuXHRcdFx0dHlwZTogJ2NoZWNrYm94Jyxcblx0XHRcdGNoZWNrZWQ6IHRydWUsXG5cdFx0XHRyZXR1cm52YWx1ZTogJ2JsYWNrdGV4dCcsXG5cdFx0fSxcblx0XSxcbn07XG5cbiQoZnVuY3Rpb24gcHJpbnRPcHRpb25zKCkge1xuXHRpZiAobXcuY29uZmlnLmdldCgnd2dOYW1lc3BhY2VOdW1iZXInKSA8IDApIHtcblx0XHRyZXR1cm47XG5cdH1cblx0Ly8gVGhpcyBjYW4gYmUgYmVmb3JlIHRoZSBjbGljayBsaXN0ZW5lciBieSBNVyBpcyBpbnN0YWxsZWQuIEluc3RlYWQsXG5cdC8vIHJlLWFkZCBvdXJzZWx2ZXMgdG8gdGhlIGJhY2sgb2YgdGhlIGRvY3VtZW50LnJlYWR5IGxpc3Rcblx0Ly8gdXNlIGFzeW5jIHRpbWVvdXRlIHRvIGRvIHRoaXNcblx0c2V0VGltZW91dChwcmludE9wdGlvbnNNYWluLmluc3RhbGwsIDApO1xufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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dkMsQ0FBQzsiLAogICJuYW1lcyI6IFsiaW1wb3J0X2V4dF9nYWRnZXQiLCAicmVxdWlyZSIsICJnZXRJMThuTWVzc2FnZXMiLCAiUHJpbnQiLCAibG9jYWxpemUiLCAiZW4iLCAiQ2FuY2VsIiwgImphIiwgInpoIiwgImkxOG5NZXNzYWdlcyIsICJnZXRNZXNzYWdlIiwgImtleSIsICJ3aW5kb3dNYW5hZ2VyIiwgInByaW50RGlhbG9nIiwgInByaW50T3B0aW9uc01haW4iLCAiaW5zdGFsbCIsICJfJHByaW50TGluayRvZmYkZ2V0IiwgIiRwcmludExpbmsiLCAiJCIsICJmaW5kIiwgImxlbmd0aCIsICJvZmYiLCAiZ2V0IiwgImFkZEV2ZW50TGlzdGVuZXIiLCAiZXZlbnQiLCAic3RvcFByb3BhZ2F0aW9uIiwgInByZXZlbnREZWZhdWx0IiwgImNyZWF0ZVdpbmRvdyIsICJQcmludERpYWxvZyIsICJjb25maWciLCAic3VwZXIiLCAiY2FsbCIsICJPTyIsICJpbmhlcml0Q2xhc3MiLCAidWkiLCAiUHJvY2Vzc0RpYWxvZyIsICJzdGF0aWMiLCAibmFtZSIsICJ0aXRsZSIsICJhY3Rpb25zIiwgImFjdGlvbiIsICJsYWJlbCIsICJmbGFncyIsICJwcm90b3R5cGUiLCAiaW5pdGlhbGl6ZSIsICJhcmdzIiwgImNoZWNrYm94SW5wdXRXaWRnZXQiLCAiZmllbGRMYXlvdXRzIiwgImFwcGx5IiwgInBhbmVsIiwgIlBhbmVsTGF5b3V0IiwgImV4cGFuZGVkIiwgInBhZGRlZCIsICJjb250ZW50IiwgIkZpZWxkc2V0TGF5b3V0IiwgIl9pdGVyYXRvciIsICJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsICJxdWVzdGlvbnMiLCAiX3N0ZXAiLCAicyIsICJuIiwgImRvbmUiLCAicXVlc3Rpb24iLCAidmFsdWUiLCAiY2hlY2tlZCIsICJ0eXBlIiwgIkNoZWNrYm94SW5wdXRXaWRnZXQiLCAic2VsZWN0ZWQiLCAid2lkZ2V0IiwgIkZpZWxkTGF5b3V0IiwgImFsaWduIiwgImVyciIsICJlIiwgImYiLCAiYWRkSXRlbXMiLCAiJGVsZW1lbnQiLCAiYXBwZW5kIiwgIiRib2R5IiwgImdldEFjdGlvblByb2Nlc3MiLCAic2VsZiIsICJQcm9jZXNzIiwgIl9pdGVyYXRvcjIiLCAiX3N0ZXAyIiwgInJldHVybnZhbHVlIiwgImlzU2VsZWN0ZWQiLCAiY2xvc2UiLCAiY2hhbmdlUHJpbnRDU1MiLCAib3RoZXJFbmhhbmNlbWVudHMiLCAid2luZG93IiwgInByaW50IiwgIldpbmRvd01hbmFnZXIiLCAic2l6ZSIsICJhZGRXaW5kb3dzIiwgIm9wZW5XaW5kb3ciLCAiZW5oYW5jZWQiLCAiX2l0ZXJhdG9yMyIsICJkb2N1bWVudCIsICJzdHlsZVNoZWV0cyIsICJfc3RlcDMiLCAic3R5bGVzaGVldCIsICJtZWRpYSIsICJtZWRpYVRleHQiLCAiaW5jbHVkZXMiLCAiZGlzYWJsZWQiLCAiYXBwZW5kTWVkaXVtIiwgInJ1bGVzIiwgImNzc1J1bGVzIiwgIm13IiwgImxvZyIsICJ3YXJuIiwgImNvbXBhdGRlbGV0ZSIsICJkZWxldGVSdWxlIiwgInJlbW92ZVJ1bGUiLCAiaiIsICJydWxlIiwgImhhc1ByaW50IiwgImhhc1NjcmVlbiIsICJDU1NSdWxlIiwgIk1FRElBX1JVTEUiLCAiX2l0ZXJhdG9yNCIsICJfc3RlcDQiLCAicnVsZU1lZGlhIiwgInByaW50U3R5bGUiLCAibm9pbWFnZXMiLCAibm9yZWZzIiwgIm5vdG9jIiwgIm5vYmFja2dyb3VuZCIsICJibGFja3RleHQiLCAiX2RvY3VtZW50JHF1ZXJ5U2VsZWN0IiwgInF1ZXJ5U2VsZWN0b3IiLCAicmVtb3ZlIiwgInN0eWxlVGFnIiwgImNyZWF0ZUVsZW1lbnQiLCAiaWQiLCAiY3JlYXRlVGV4dE5vZGUiLCAiaGVhZCIsICJsaW5rIiwgInRleHQiLCAiZGVjb2RlVVJJIiwgInByaW50T3B0aW9ucyIsICJzZXRUaW1lb3V0Il0KfQo=

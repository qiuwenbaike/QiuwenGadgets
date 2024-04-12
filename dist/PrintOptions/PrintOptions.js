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
//! src/PrintOptions/PrintOptions.ts
var import_ext_gadget2 = require("ext.gadget.Util");
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
//! src/PrintOptions/PrintOptions.ts
var getPrintOptions = ($body) => {
  let windowManager;
  let printDialog;
  const printOptions = {
    enhanced: true,
    noimages: false,
    norefs: false,
    notoc: false,
    nobackground: false,
    blacktext: true,
    install: () => {
      var _$printLink$off$get;
      const $printLink = $body.find("#t-print a");
      if (!$printLink.length) {
        return;
      }
      (_$printLink$off$get = $printLink.off("click").get(0)) === null || _$printLink$off$get === void 0 || _$printLink$off$get.addEventListener(
        "click",
        (event) => {
          event.stopPropagation();
          event.preventDefault();
          printOptions.createWindow();
        },
        // Use capturing phase, to beat the other click listener
        true
      );
    },
    createWindow: () => {
      class PrintDialog extends OO.ui.ProcessDialog {
        panel;
        content;
        $body;
        questions = [{
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
        }];
        initialize() {
          let checkboxInputWidget;
          const fieldLayouts = [];
          super.initialize();
          this.panel = new OO.ui.PanelLayout({
            expanded: false,
            padded: true
          });
          this.content = new OO.ui.FieldsetLayout();
          var _iterator = _createForOfIteratorHelper(this.questions), _step;
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
          this.panel.$element.appendTo(this.$body);
          return this;
        }
        getActionProcess(action) {
          const self = this;
          if (action === "print") {
            return new OO.ui.Process(() => {
              var _iterator2 = _createForOfIteratorHelper(this.questions), _step2;
              try {
                for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
                  const question = _step2.value;
                  if (question.type === "checkbox" && question.widget) {
                    Object.defineProperty(printOptions, question.returnvalue, {
                      value: question.widget.isSelected(),
                      writable: true
                    });
                  }
                }
              } catch (err) {
                _iterator2.e(err);
              } finally {
                _iterator2.f();
              }
              void self.close({
                action
              }).closed.then(() => {
                printOptions.changePrintCSS();
                printOptions.otherEnhancements();
                window.print();
              });
            });
          }
          return super.getActionProcess(action);
        }
      }
      PrintDialog.static = {
        ...OO.ui.ProcessDialog.static
      };
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
      if (!windowManager) {
        windowManager = new OO.ui.WindowManager();
        $body.append(windowManager.$element);
      }
      if (!printDialog) {
        printDialog = new PrintDialog({
          size: "medium"
        });
        windowManager.addWindows([printDialog]);
      }
      void windowManager.openWindow(printDialog);
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
            if (!rules) {
              continue;
            }
            for (let j = 0; j < rules.length; j++) {
              const rule = rules[j];
              let hasPrint = false;
              let hasScreen = false;
              if (!rule) {
                continue;
              }
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
                stylesheet.deleteRule(j);
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
      const link = $body.find("div.printfooter a");
      link.text(decodeURI(link.text()));
    }
  };
  return printOptions;
};
void (0, import_ext_gadget2.getBody)().then(function printOptionsLoad($body) {
  if (mw.config.get("wgNamespaceNumber") < 0) {
    return;
  }
  const printOptions = getPrintOptions($body);
  setTimeout(printOptions.install, 0);
});

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1ByaW50T3B0aW9ucy9QcmludE9wdGlvbnMudHMiLCAic3JjL1ByaW50T3B0aW9ucy9tb2R1bGVzL2kxOG4udHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7Z2V0Qm9keX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9tb2R1bGVzL2kxOG4nO1xuXG5jb25zdCBnZXRQcmludE9wdGlvbnMgPSAoJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KSA9PiB7XG5cdGxldCB3aW5kb3dNYW5hZ2VyOiBPTy51aS5XaW5kb3dNYW5hZ2VyO1xuXHRsZXQgcHJpbnREaWFsb2c6IE9PLnVpLlByb2Nlc3NEaWFsb2c7XG5cblx0Y29uc3QgcHJpbnRPcHRpb25zID0ge1xuXHRcdGVuaGFuY2VkOiB0cnVlLFxuXHRcdG5vaW1hZ2VzOiBmYWxzZSxcblx0XHRub3JlZnM6IGZhbHNlLFxuXHRcdG5vdG9jOiBmYWxzZSxcblx0XHRub2JhY2tncm91bmQ6IGZhbHNlLFxuXHRcdGJsYWNrdGV4dDogdHJ1ZSxcblxuXHRcdGluc3RhbGw6ICgpID0+IHtcblx0XHRcdGNvbnN0ICRwcmludExpbmsgPSAkYm9keS5maW5kKCcjdC1wcmludCBhJyk7XG5cdFx0XHRpZiAoISRwcmludExpbmsubGVuZ3RoKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0JHByaW50TGlua1xuXHRcdFx0XHQub2ZmKCdjbGljaycpXG5cdFx0XHRcdC5nZXQoMClcblx0XHRcdFx0Py5hZGRFdmVudExpc3RlbmVyKFxuXHRcdFx0XHRcdCdjbGljaycsXG5cdFx0XHRcdFx0KGV2ZW50KSA9PiB7XG5cdFx0XHRcdFx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHRcdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0XHRwcmludE9wdGlvbnMuY3JlYXRlV2luZG93KCk7XG5cdFx0XHRcdFx0fSwgLy8gVXNlIGNhcHR1cmluZyBwaGFzZSwgdG8gYmVhdCB0aGUgb3RoZXIgY2xpY2sgbGlzdGVuZXJcblx0XHRcdFx0XHR0cnVlXG5cdFx0XHRcdCk7XG5cdFx0fSxcblxuXHRcdGNyZWF0ZVdpbmRvdzogKCkgPT4ge1xuXHRcdFx0Y2xhc3MgUHJpbnREaWFsb2cgZXh0ZW5kcyBPTy51aS5Qcm9jZXNzRGlhbG9nIHtcblx0XHRcdFx0cHJpdmF0ZSBwYW5lbDogT08udWkuUGFuZWxMYXlvdXQgfCB1bmRlZmluZWQ7XG5cdFx0XHRcdHByaXZhdGUgY29udGVudDogT08udWkuRmllbGRzZXRMYXlvdXQgfCB1bmRlZmluZWQ7XG5cdFx0XHRcdHByaXZhdGUgJGJvZHk6IEpRdWVyeSB8IHVuZGVmaW5lZDtcblxuXHRcdFx0XHRwcml2YXRlIHF1ZXN0aW9uczoge1xuXHRcdFx0XHRcdGxhYmVsOiBzdHJpbmc7XG5cdFx0XHRcdFx0dHlwZTogc3RyaW5nO1xuXHRcdFx0XHRcdGNoZWNrZWQ6IGJvb2xlYW47XG5cdFx0XHRcdFx0cmV0dXJudmFsdWU6IHN0cmluZztcblx0XHRcdFx0XHR3aWRnZXQ/OiBPTy51aS5DaGVja2JveElucHV0V2lkZ2V0O1xuXHRcdFx0XHR9W10gPSBbXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0bGFiZWw6ICfpmpDol4/nlYzpnaLlhYPntKAnLFxuXHRcdFx0XHRcdFx0dHlwZTogJ2NoZWNrYm94Jyxcblx0XHRcdFx0XHRcdGNoZWNrZWQ6IHRydWUsXG5cdFx0XHRcdFx0XHRyZXR1cm52YWx1ZTogJ2VuaGFuY2VkJyxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdGxhYmVsOiAn6ZqQ6JeP5Zu+54mHJyxcblx0XHRcdFx0XHRcdHR5cGU6ICdjaGVja2JveCcsXG5cdFx0XHRcdFx0XHRjaGVja2VkOiBmYWxzZSxcblx0XHRcdFx0XHRcdHJldHVybnZhbHVlOiAnbm9pbWFnZXMnLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0bGFiZWw6ICfpmpDol4/lj4LogIPmlofnjK4nLFxuXHRcdFx0XHRcdFx0dHlwZTogJ2NoZWNrYm94Jyxcblx0XHRcdFx0XHRcdGNoZWNrZWQ6IGZhbHNlLFxuXHRcdFx0XHRcdFx0cmV0dXJudmFsdWU6ICdub3JlZnMnLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0bGFiZWw6ICfpmpDol4/nm67lvZUnLFxuXHRcdFx0XHRcdFx0dHlwZTogJ2NoZWNrYm94Jyxcblx0XHRcdFx0XHRcdGNoZWNrZWQ6IGZhbHNlLFxuXHRcdFx0XHRcdFx0cmV0dXJudmFsdWU6ICdub3RvYycsXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRsYWJlbDogJ+enu+mZpOiDjOaZr++8iOaCqOeahOa1j+iniOWZqOaIluWPr+S7peimhuebluacrOiuvue9ru+8iScsXG5cdFx0XHRcdFx0XHR0eXBlOiAnY2hlY2tib3gnLFxuXHRcdFx0XHRcdFx0Y2hlY2tlZDogZmFsc2UsXG5cdFx0XHRcdFx0XHRyZXR1cm52YWx1ZTogJ25vYmFja2dyb3VuZCcsXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRsYWJlbDogJ+W8uuWItuWwhuaJgOacieaWh+Wtl+iuvue9ruS4uum7keiJsicsXG5cdFx0XHRcdFx0XHR0eXBlOiAnY2hlY2tib3gnLFxuXHRcdFx0XHRcdFx0Y2hlY2tlZDogdHJ1ZSxcblx0XHRcdFx0XHRcdHJldHVybnZhbHVlOiAnYmxhY2t0ZXh0Jyxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRdO1xuXG5cdFx0XHRcdHB1YmxpYyBvdmVycmlkZSBpbml0aWFsaXplKCk6IHRoaXMge1xuXHRcdFx0XHRcdGxldCBjaGVja2JveElucHV0V2lkZ2V0O1xuXHRcdFx0XHRcdGNvbnN0IGZpZWxkTGF5b3V0cyA9IFtdO1xuXG5cdFx0XHRcdFx0c3VwZXIuaW5pdGlhbGl6ZSgpO1xuXG5cdFx0XHRcdFx0dGhpcy5wYW5lbCA9IG5ldyBPTy51aS5QYW5lbExheW91dCh7XG5cdFx0XHRcdFx0XHRleHBhbmRlZDogZmFsc2UsXG5cdFx0XHRcdFx0XHRwYWRkZWQ6IHRydWUsXG5cdFx0XHRcdFx0fSk7XG5cblx0XHRcdFx0XHR0aGlzLmNvbnRlbnQgPSBuZXcgT08udWkuRmllbGRzZXRMYXlvdXQoKTtcblx0XHRcdFx0XHRmb3IgKGNvbnN0IHF1ZXN0aW9uIG9mIHRoaXMucXVlc3Rpb25zKSB7XG5cdFx0XHRcdFx0XHRjb25zdCB7Y2hlY2tlZCwgbGFiZWwsIHR5cGV9ID0gcXVlc3Rpb247XG5cdFx0XHRcdFx0XHRpZiAodHlwZSAhPT0gJ2NoZWNrYm94Jykge1xuXHRcdFx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGNoZWNrYm94SW5wdXRXaWRnZXQgPSBuZXcgT08udWkuQ2hlY2tib3hJbnB1dFdpZGdldCh7XG5cdFx0XHRcdFx0XHRcdHNlbGVjdGVkOiBjaGVja2VkLFxuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRxdWVzdGlvbi53aWRnZXQgPSBjaGVja2JveElucHV0V2lkZ2V0O1xuXHRcdFx0XHRcdFx0ZmllbGRMYXlvdXRzW2ZpZWxkTGF5b3V0cy5sZW5ndGhdID0gbmV3IE9PLnVpLkZpZWxkTGF5b3V0KGNoZWNrYm94SW5wdXRXaWRnZXQsIHtcblx0XHRcdFx0XHRcdFx0bGFiZWwsXG5cdFx0XHRcdFx0XHRcdGFsaWduOiAnaW5saW5lJyxcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR0aGlzLmNvbnRlbnQuYWRkSXRlbXMoZmllbGRMYXlvdXRzKTtcblxuXHRcdFx0XHRcdHRoaXMucGFuZWwuJGVsZW1lbnQuYXBwZW5kKHRoaXMuY29udGVudC4kZWxlbWVudCk7XG5cdFx0XHRcdFx0dGhpcy5wYW5lbC4kZWxlbWVudC5hcHBlbmRUbyh0aGlzLiRib2R5IGFzIEpRdWVyeSk7XG5cblx0XHRcdFx0XHRyZXR1cm4gdGhpcztcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHB1YmxpYyBvdmVycmlkZSBnZXRBY3Rpb25Qcm9jZXNzKGFjdGlvbj86IHN0cmluZyk6IE9PLnVpLlByb2Nlc3Mge1xuXHRcdFx0XHRcdGNvbnN0IHNlbGYgPSB0aGlzO1xuXHRcdFx0XHRcdGlmIChhY3Rpb24gPT09ICdwcmludCcpIHtcblx0XHRcdFx0XHRcdHJldHVybiBuZXcgT08udWkuUHJvY2VzcygoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdC8vIEdldCB2YWx1ZXMgb2YgY2hlY2tib3hlc1xuXHRcdFx0XHRcdFx0XHRmb3IgKGNvbnN0IHF1ZXN0aW9uIG9mIHRoaXMucXVlc3Rpb25zKSB7XG5cdFx0XHRcdFx0XHRcdFx0aWYgKHF1ZXN0aW9uLnR5cGUgPT09ICdjaGVja2JveCcgJiYgcXVlc3Rpb24ud2lkZ2V0KSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkocHJpbnRPcHRpb25zLCBxdWVzdGlvbi5yZXR1cm52YWx1ZSwge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZTogcXVlc3Rpb24ud2lkZ2V0LmlzU2VsZWN0ZWQoKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0d3JpdGFibGU6IHRydWUsXG5cdFx0XHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHR2b2lkIHNlbGYuY2xvc2Uoe2FjdGlvbn0pLmNsb3NlZC50aGVuKCgpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRwcmludE9wdGlvbnMuY2hhbmdlUHJpbnRDU1MoKTtcblx0XHRcdFx0XHRcdFx0XHRwcmludE9wdGlvbnMub3RoZXJFbmhhbmNlbWVudHMoKTtcblx0XHRcdFx0XHRcdFx0XHR3aW5kb3cucHJpbnQoKTtcblx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRyZXR1cm4gc3VwZXIuZ2V0QWN0aW9uUHJvY2VzcyhhY3Rpb24pO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC8vIE9PLmluaGVyaXRDbGFzcyhQcmludERpYWxvZywgT08udWkuUHJvY2Vzc0RpYWxvZyk7XG5cdFx0XHRQcmludERpYWxvZy5zdGF0aWMgPSB7XG5cdFx0XHRcdC4uLk9PLnVpLlByb2Nlc3NEaWFsb2cuc3RhdGljLFxuXHRcdFx0fTtcblx0XHRcdFByaW50RGlhbG9nLnN0YXRpYy5uYW1lID0gJ1ByaW50RGlhbG9nJztcblx0XHRcdFByaW50RGlhbG9nLnN0YXRpYy50aXRsZSA9IGdldE1lc3NhZ2UoJ1ByaW50IHRoaXMgcGFnZScpO1xuXHRcdFx0UHJpbnREaWFsb2cuc3RhdGljLmFjdGlvbnMgPSBbXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRhY3Rpb246ICdwcmludCcsXG5cdFx0XHRcdFx0bGFiZWw6IGdldE1lc3NhZ2UoJ1ByaW50JyksXG5cdFx0XHRcdFx0ZmxhZ3M6IFsncHJpbWFyeScsICdwcm9ncmVzc2l2ZSddLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0bGFiZWw6IGdldE1lc3NhZ2UoJ0NhbmNlbCcpLFxuXHRcdFx0XHRcdGZsYWdzOiBbJ3NhZmUnLCAnY2xvc2UnXSxcblx0XHRcdFx0fSxcblx0XHRcdF07XG5cblx0XHRcdGlmICghd2luZG93TWFuYWdlcikge1xuXHRcdFx0XHR3aW5kb3dNYW5hZ2VyID0gbmV3IE9PLnVpLldpbmRvd01hbmFnZXIoKTtcblx0XHRcdFx0JGJvZHkuYXBwZW5kKHdpbmRvd01hbmFnZXIuJGVsZW1lbnQpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIXByaW50RGlhbG9nKSB7XG5cdFx0XHRcdHByaW50RGlhbG9nID0gbmV3IFByaW50RGlhbG9nKHtcblx0XHRcdFx0XHRzaXplOiAnbWVkaXVtJyxcblx0XHRcdFx0fSk7XG5cdFx0XHRcdHdpbmRvd01hbmFnZXIuYWRkV2luZG93cyhbcHJpbnREaWFsb2ddKTtcblx0XHRcdH1cblxuXHRcdFx0dm9pZCB3aW5kb3dNYW5hZ2VyLm9wZW5XaW5kb3cocHJpbnREaWFsb2cpO1xuXHRcdH0sXG5cblx0XHRjaGFuZ2VQcmludENTUygpIHtcblx0XHRcdC8qIEhlcmUgd2U6XG5cdFx0XHQgKiAtIGRpc2FibGUgc3R5bGVzaGVldHMgdGhhdCBhcmUgcHJpbnQgc3BlY2lmaWNcblx0XHRcdCAqIC0gbWFrZSBzY3JlZW4gc3BlY2lmaWMgc3R5bGVzaGVldHMgYWxzbyBlbmFibGVkIGZvciBwcmludCBtZWRpdW1cblx0XHRcdCAqIC0gcmVtb3ZlIHByaW50IHNwZWNpZmljIHN0eWxlcnVsZXNcblx0XHRcdCAqIC0gbWFrZSBzY3JlZW4gc3BlY2lmaWMgc3R5bGVydWxlcyBhbHNvIGVuYWJsZWQgZm9yIHByaW50IG1lZGl1bVxuXHRcdFx0ICovXG5cdFx0XHRpZiAodGhpcy5lbmhhbmNlZCA9PT0gZmFsc2UpIHtcblx0XHRcdFx0Zm9yIChjb25zdCBzdHlsZXNoZWV0IG9mIGRvY3VtZW50LnN0eWxlU2hlZXRzKSB7XG5cdFx0XHRcdFx0Y29uc3Qge21lZGlhfSA9IHN0eWxlc2hlZXQ7XG5cdFx0XHRcdFx0aWYgKCFtZWRpYSkge1xuXHRcdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0aWYgKG1lZGlhLm1lZGlhVGV4dCAmJiBtZWRpYS5tZWRpYVRleHQuaW5jbHVkZXMoJ3ByaW50JykpIHtcblx0XHRcdFx0XHRcdGlmICghbWVkaWEubWVkaWFUZXh0LmluY2x1ZGVzKCdzY3JlZW4nKSkge1xuXHRcdFx0XHRcdFx0XHRzdHlsZXNoZWV0LmRpc2FibGVkID0gdHJ1ZTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9IGVsc2UgaWYgKFxuXHRcdFx0XHRcdFx0bWVkaWEubWVkaWFUZXh0ICYmXG5cdFx0XHRcdFx0XHRtZWRpYS5tZWRpYVRleHQuaW5jbHVkZXMoJ3NjcmVlbicpICYmXG5cdFx0XHRcdFx0XHQhbWVkaWEubWVkaWFUZXh0LmluY2x1ZGVzKCdwcmludCcpXG5cdFx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdFx0XHRtZWRpYS5hcHBlbmRNZWRpdW0oJ3ByaW50Jyk7XG5cdFx0XHRcdFx0XHR9IGNhdGNoIHtcblx0XHRcdFx0XHRcdFx0bWVkaWEubWVkaWFUZXh0ICs9ICcscHJpbnQnO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC8qIG5vdyB0ZXN0IGluZGl2aWR1YWwgc3R5bGVzaGVldCBydWxlcyAqL1xuXHRcdFx0XHRcdGxldCBydWxlcztcblx0XHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdFx0cnVsZXMgPSBzdHlsZXNoZWV0LmNzc1J1bGVzIHx8IHN0eWxlc2hlZXQucnVsZXM7XG5cdFx0XHRcdFx0fSBjYXRjaCB7XG5cdFx0XHRcdFx0XHQvKiBDcm9zcyBkb21haW4gaXNzdWUuICovXG5cdFx0XHRcdFx0XHRtdy5sb2cud2FybignTm90IHBvc3NpYmxlIHRvIGNvcnJlY3Qgc3R5bGVzaGVldCBkdWUgdG8gY3Jvc3Mgb3JpZ2luIHJlc3RyaWN0aW9ucy4nKTtcblx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGlmICghcnVsZXMpIHtcblx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGZvciAobGV0IGogPSAwOyBqIDwgcnVsZXMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0XHRcdGNvbnN0IHJ1bGUgPSBydWxlc1tqXSBhcyB1bmtub3duIGFzIFN0eWxlU2hlZXQ7XG5cblx0XHRcdFx0XHRcdGxldCBoYXNQcmludCA9IGZhbHNlO1xuXHRcdFx0XHRcdFx0bGV0IGhhc1NjcmVlbiA9IGZhbHNlO1xuXG5cdFx0XHRcdFx0XHRpZiAoIXJ1bGUpIHtcblx0XHRcdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdGlmICgocnVsZSBhcyB1bmtub3duIGFzIENTU1J1bGUpLnR5cGUgPT09IENTU1J1bGUuTUVESUFfUlVMRSAmJiBydWxlLm1lZGlhKSB7XG5cdFx0XHRcdFx0XHRcdGZvciAoY29uc3QgcnVsZU1lZGlhIG9mIHJ1bGUubWVkaWEpIHtcblx0XHRcdFx0XHRcdFx0XHRpZiAocnVsZU1lZGlhID09PSAncHJpbnQnKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRoYXNQcmludCA9IHRydWU7XG5cdFx0XHRcdFx0XHRcdFx0fSBlbHNlIGlmIChydWxlTWVkaWEgPT09ICdzY3JlZW4nKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRoYXNTY3JlZW4gPSB0cnVlO1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdGlmIChoYXNQcmludCAmJiAhaGFzU2NyZWVuKSB7XG5cdFx0XHRcdFx0XHRcdHN0eWxlc2hlZXQuZGVsZXRlUnVsZShqKTtcblx0XHRcdFx0XHRcdFx0ai0tO1xuXHRcdFx0XHRcdFx0fSBlbHNlIGlmIChydWxlICYmIGhhc1NjcmVlbiAmJiAhaGFzUHJpbnQpIHtcblx0XHRcdFx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRcdFx0XHRydWxlLm1lZGlhLmFwcGVuZE1lZGl1bSgncHJpbnQnKTtcblx0XHRcdFx0XHRcdFx0fSBjYXRjaCB7XG5cdFx0XHRcdFx0XHRcdFx0cnVsZS5tZWRpYS5tZWRpYVRleHQgKz0gJyxwcmludCc7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0bGV0IHByaW50U3R5bGUgPSAnJztcblx0XHRcdC8qIEFkZCBjc3MgdG8gaGlkZSBpbWFnZXMgKi9cblx0XHRcdGlmICh0aGlzLm5vaW1hZ2VzKSB7XG5cdFx0XHRcdHByaW50U3R5bGUgKz0gJ2ltZywudGh1bWJ7ZGlzcGxheTpub25lfSc7XG5cdFx0XHR9XG5cdFx0XHQvKiBBZGQgY3NzIHRvIGhpZGUgcmVmZXJlbmNlcyBtYXJrZXJzIGFuZCB0aGUgcmVmZXJlbmNlcyBsaXN0cyAqL1xuXHRcdFx0aWYgKHRoaXMubm9yZWZzKSB7XG5cdFx0XHRcdHByaW50U3R5bGUgKz0gJy5tdy1oZWFkbGluZVtpZD1cIlJlZmVyZW5jZXNcIl0sb2wucmVmZXJlbmNlcywucmVmZXJlbmNle2Rpc3BsYXk6bm9uZX0nO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHRoaXMubm90b2MpIHtcblx0XHRcdFx0cHJpbnRTdHlsZSArPSAnI3RvYywudG9je2Rpc3BsYXk6bm9uZX0nO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHRoaXMubm9iYWNrZ3JvdW5kKSB7XG5cdFx0XHRcdHByaW50U3R5bGUgKz0gJyp7YmFja2dyb3VuZDpub25lICFpbXBvcnRhbnR9Jztcblx0XHRcdH1cblx0XHRcdGlmICh0aGlzLmJsYWNrdGV4dCkge1xuXHRcdFx0XHRwcmludFN0eWxlICs9ICcqe2NvbG9yOiMwMDAgIWltcG9ydGFudH0nO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAocHJpbnRTdHlsZSkge1xuXHRcdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJpbnRTdHlsZScpPy5yZW1vdmUoKTtcblx0XHRcdFx0Y29uc3Qgc3R5bGVUYWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuXHRcdFx0XHRzdHlsZVRhZy5pZCA9ICdwcmludFN0eWxlJztcblx0XHRcdFx0c3R5bGVUYWcubWVkaWEgPSAncHJpbnQnO1xuXHRcdFx0XHRzdHlsZVRhZy5hcHBlbmQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUocHJpbnRTdHlsZSkpO1xuXHRcdFx0XHRkb2N1bWVudC5oZWFkLmFwcGVuZChzdHlsZVRhZyk7XG5cdFx0XHR9XG5cdFx0fSxcblxuXHRcdC8qIFJld3JpdGUgdGhlIFwicmV0cmlldmVkIGZyb21cIiB1cmwgdG8gYmUgcmVhZGFibGUgKi9cblx0XHRvdGhlckVuaGFuY2VtZW50czogKCkgPT4ge1xuXHRcdFx0Y29uc3QgbGluayA9ICRib2R5LmZpbmQoJ2Rpdi5wcmludGZvb3RlciBhJyk7XG5cdFx0XHRsaW5rLnRleHQoZGVjb2RlVVJJKGxpbmsudGV4dCgpKSk7XG5cdFx0fSxcblx0fTtcblxuXHRyZXR1cm4gcHJpbnRPcHRpb25zO1xufTtcblxudm9pZCBnZXRCb2R5KCkudGhlbihmdW5jdGlvbiBwcmludE9wdGlvbnNMb2FkKCRib2R5KSB7XG5cdGlmIChtdy5jb25maWcuZ2V0KCd3Z05hbWVzcGFjZU51bWJlcicpIDwgMCkge1xuXHRcdHJldHVybjtcblx0fVxuXHRjb25zdCBwcmludE9wdGlvbnMgPSBnZXRQcmludE9wdGlvbnMoJGJvZHkpO1xuXHQvLyBUaGlzIGNhbiBiZSBiZWZvcmUgdGhlIGNsaWNrIGxpc3RlbmVyIGJ5IE1XIGlzIGluc3RhbGxlZC4gSW5zdGVhZCxcblx0Ly8gcmUtYWRkIG91cnNlbHZlcyB0byB0aGUgYmFjayBvZiB0aGUgZG9jdW1lbnQucmVhZHkgbGlzdFxuXHQvLyB1c2UgYXN5bmMgdGltZW91dGUgdG8gZG8gdGhpc1xuXHRzZXRUaW1lb3V0KHByaW50T3B0aW9ucy5pbnN0YWxsLCAwKTtcbn0pO1xuIiwgImltcG9ydCB7bG9jYWxpemV9IGZyb20gJ2V4dC5nYWRnZXQuaTE4bic7XG5cbmNvbnN0IGdldEkxOG5NZXNzYWdlcyA9ICgpID0+IHtcblx0cmV0dXJuIHtcblx0XHRQcmludDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdQcmludCcsXG5cdFx0XHRqYTogJ+WNsOWItycsXG5cdFx0XHQnemgtaGFucyc6ICfmiZPljbAnLFxuXHRcdFx0J3poLWhhbnQnOiAn5YiX5Y2wJyxcblx0XHR9KSxcblx0XHQnUHJpbnQgdGhpcyBwYWdlJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdQcmludCB0aGlzIHBhZ2UnLFxuXHRcdFx0amE6ICfjgZPjga7jg5rjg7zjgrjjgpLljbDliLfjgasnLFxuXHRcdFx0J3poLWhhbnMnOiAn5omT5Y2w5q2k6aG16Z2iJyxcblx0XHRcdCd6aC1oYW50JzogJ+WIl+WNsOatpOmggemdoicsXG5cdFx0fSksXG5cdFx0Q2FuY2VsOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0NhbmNlbCcsXG5cdFx0XHRqYTogJ+OCreODo+ODs+OCu+ODqycsXG5cdFx0XHR6aDogJ+WPlua2iCcsXG5cdFx0fSksXG5cdH07XG59O1xuXG5jb25zdCBpMThuTWVzc2FnZXMgPSBnZXRJMThuTWVzc2FnZXMoKTtcblxuY29uc3QgZ2V0TWVzc2FnZTogR2V0TWVzc2FnZXM8dHlwZW9mIGkxOG5NZXNzYWdlcz4gPSAoa2V5KSA9PiB7XG5cdHJldHVybiBpMThuTWVzc2FnZXNba2V5XSB8fCBrZXk7XG59O1xuXG5leHBvcnQge2dldE1lc3NhZ2V9O1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxxQkFBc0JDLFFBQUEsaUJBQUE7O0FDQXRCLElBQUFDLG9CQUF1QkQsUUFBQSxpQkFBQTtBQUV2QixJQUFNRSxrQkFBa0JBLE1BQU07QUFDN0IsU0FBTztJQUNOQyxRQUFBLEdBQU9GLGtCQUFBRyxVQUFTO01BQ2ZDLElBQUk7TUFDSkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNELG9CQUFBLEdBQW1CTCxrQkFBQUcsVUFBUztNQUMzQkMsSUFBSTtNQUNKQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0RDLFNBQUEsR0FBUU4sa0JBQUFHLFVBQVM7TUFDaEJDLElBQUk7TUFDSkMsSUFBSTtNQUNKRSxJQUFJO0lBQ0wsQ0FBQztFQUNGO0FBQ0Q7QUFFQSxJQUFNQyxlQUFlUCxnQkFBZ0I7QUFFckMsSUFBTVEsYUFBZ0RDLFNBQVE7QUFDN0QsU0FBT0YsYUFBYUUsR0FBRyxLQUFLQTtBQUM3Qjs7QUR6QkEsSUFBTUMsa0JBQW1CQyxXQUFtQztBQUMzRCxNQUFJQztBQUNKLE1BQUlD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QUFBQSxZQUFBQztBQUNmLFNBQUFBLHdCQUFBekIsU0FBUzBCLGNBQWMsYUFBYSxPQUFBLFFBQUFELDBCQUFBLFVBQXBDQSxzQkFBdUNFLE9BQU87QUFDOUMsY0FBTUMsV0FBVzVCLFNBQVM2QixjQUFjLE9BQU87QUFDL0NELGlCQUFTRSxLQUFLO0FBQ2RGLGlCQUFTeEIsUUFBUTtBQUNqQndCLGlCQUFTekQsT0FBTzZCLFNBQVMrQixlQUFlUCxVQUFVLENBQUM7QUFDbkR4QixpQkFBU2dDLEtBQUs3RCxPQUFPeUQsUUFBUTtNQUM5QjtJQUNEOztJQUdBekMsbUJBQW1CQSxNQUFNO0FBQ3hCLFlBQU04QyxPQUFPeEgsTUFBTWEsS0FBSyxtQkFBbUI7QUFDM0MyRyxXQUFLQyxLQUFLQyxVQUFVRixLQUFLQyxLQUFLLENBQUMsQ0FBQztJQUNqQztFQUNEO0FBRUEsU0FBT3RIO0FBQ1I7QUFFQSxNQUFBLEdBQUtqQixtQkFBQXlJLFNBQVEsRUFBRW5ELEtBQUssU0FBU29ELGlCQUFpQjVILE9BQU87QUFDcEQsTUFBSWtHLEdBQUcyQixPQUFPN0csSUFBSSxtQkFBbUIsSUFBSSxHQUFHO0FBQzNDO0VBQ0Q7QUFDQSxRQUFNYixlQUFlSixnQkFBZ0JDLEtBQUs7QUFJMUM4SCxhQUFXM0gsYUFBYU8sU0FBUyxDQUFDO0FBQ25DLENBQUM7IiwKICAibmFtZXMiOiBbImltcG9ydF9leHRfZ2FkZ2V0MiIsICJyZXF1aXJlIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgImdldEkxOG5NZXNzYWdlcyIsICJQcmludCIsICJsb2NhbGl6ZSIsICJlbiIsICJqYSIsICJDYW5jZWwiLCAiemgiLCAiaTE4bk1lc3NhZ2VzIiwgImdldE1lc3NhZ2UiLCAia2V5IiwgImdldFByaW50T3B0aW9ucyIsICIkYm9keSIsICJ3aW5kb3dNYW5hZ2VyIiwgInByaW50RGlhbG9nIiwgInByaW50T3B0aW9ucyIsICJlbmhhbmNlZCIsICJub2ltYWdlcyIsICJub3JlZnMiLCAibm90b2MiLCAibm9iYWNrZ3JvdW5kIiwgImJsYWNrdGV4dCIsICJpbnN0YWxsIiwgIl8kcHJpbnRMaW5rJG9mZiRnZXQiLCAiJHByaW50TGluayIsICJmaW5kIiwgImxlbmd0aCIsICJvZmYiLCAiZ2V0IiwgImFkZEV2ZW50TGlzdGVuZXIiLCAiZXZlbnQiLCAic3RvcFByb3BhZ2F0aW9uIiwgInByZXZlbnREZWZhdWx0IiwgImNyZWF0ZVdpbmRvdyIsICJQcmludERpYWxvZyIsICJPTyIsICJ1aSIsICJQcm9jZXNzRGlhbG9nIiwgInBhbmVsIiwgImNvbnRlbnQiLCAicXVlc3Rpb25zIiwgImxhYmVsIiwgInR5cGUiLCAiY2hlY2tlZCIsICJyZXR1cm52YWx1ZSIsICJpbml0aWFsaXplIiwgImNoZWNrYm94SW5wdXRXaWRnZXQiLCAiZmllbGRMYXlvdXRzIiwgIlBhbmVsTGF5b3V0IiwgImV4cGFuZGVkIiwgInBhZGRlZCIsICJGaWVsZHNldExheW91dCIsICJfaXRlcmF0b3IiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAiX3N0ZXAiLCAicyIsICJuIiwgImRvbmUiLCAicXVlc3Rpb24iLCAidmFsdWUiLCAiQ2hlY2tib3hJbnB1dFdpZGdldCIsICJzZWxlY3RlZCIsICJ3aWRnZXQiLCAiRmllbGRMYXlvdXQiLCAiYWxpZ24iLCAiZXJyIiwgImUiLCAiZiIsICJhZGRJdGVtcyIsICIkZWxlbWVudCIsICJhcHBlbmQiLCAiYXBwZW5kVG8iLCAiZ2V0QWN0aW9uUHJvY2VzcyIsICJhY3Rpb24iLCAic2VsZiIsICJQcm9jZXNzIiwgIl9pdGVyYXRvcjIiLCAiX3N0ZXAyIiwgIk9iamVjdCIsICJkZWZpbmVQcm9wZXJ0eSIsICJpc1NlbGVjdGVkIiwgIndyaXRhYmxlIiwgImNsb3NlIiwgImNsb3NlZCIsICJ0aGVuIiwgImNoYW5nZVByaW50Q1NTIiwgIm90aGVyRW5oYW5jZW1lbnRzIiwgIndpbmRvdyIsICJwcmludCIsICJzdGF0aWMiLCAibmFtZSIsICJ0aXRsZSIsICJhY3Rpb25zIiwgImZsYWdzIiwgIldpbmRvd01hbmFnZXIiLCAic2l6ZSIsICJhZGRXaW5kb3dzIiwgIm9wZW5XaW5kb3ciLCAiX2l0ZXJhdG9yMyIsICJkb2N1bWVudCIsICJzdHlsZVNoZWV0cyIsICJfc3RlcDMiLCAic3R5bGVzaGVldCIsICJtZWRpYSIsICJtZWRpYVRleHQiLCAiaW5jbHVkZXMiLCAiZGlzYWJsZWQiLCAiYXBwZW5kTWVkaXVtIiwgInJ1bGVzIiwgImNzc1J1bGVzIiwgIm13IiwgImxvZyIsICJ3YXJuIiwgImoiLCAicnVsZSIsICJoYXNQcmludCIsICJoYXNTY3JlZW4iLCAiQ1NTUnVsZSIsICJNRURJQV9SVUxFIiwgIl9pdGVyYXRvcjQiLCAiX3N0ZXA0IiwgInJ1bGVNZWRpYSIsICJkZWxldGVSdWxlIiwgInByaW50U3R5bGUiLCAiX2RvY3VtZW50JHF1ZXJ5U2VsZWN0IiwgInF1ZXJ5U2VsZWN0b3IiLCAicmVtb3ZlIiwgInN0eWxlVGFnIiwgImNyZWF0ZUVsZW1lbnQiLCAiaWQiLCAiY3JlYXRlVGV4dE5vZGUiLCAiaGVhZCIsICJsaW5rIiwgInRleHQiLCAiZGVjb2RlVVJJIiwgImdldEJvZHkiLCAicHJpbnRPcHRpb25zTG9hZCIsICJjb25maWciLCAic2V0VGltZW91dCJdCn0K

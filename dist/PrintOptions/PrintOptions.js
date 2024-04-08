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
              self.close({
                action
              }).done(() => {
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1ByaW50T3B0aW9ucy9QcmludE9wdGlvbnMudHMiLCAic3JjL1ByaW50T3B0aW9ucy9tb2R1bGVzL2kxOG4udHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7Z2V0Qm9keX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9tb2R1bGVzL2kxOG4nO1xuXG5jb25zdCBnZXRQcmludE9wdGlvbnMgPSAoJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KSA9PiB7XG5cdGxldCB3aW5kb3dNYW5hZ2VyOiBPTy51aS5XaW5kb3dNYW5hZ2VyO1xuXHRsZXQgcHJpbnREaWFsb2c6IE9PLnVpLlByb2Nlc3NEaWFsb2c7XG5cblx0Y29uc3QgcHJpbnRPcHRpb25zID0ge1xuXHRcdGVuaGFuY2VkOiB0cnVlLFxuXHRcdG5vaW1hZ2VzOiBmYWxzZSxcblx0XHRub3JlZnM6IGZhbHNlLFxuXHRcdG5vdG9jOiBmYWxzZSxcblx0XHRub2JhY2tncm91bmQ6IGZhbHNlLFxuXHRcdGJsYWNrdGV4dDogdHJ1ZSxcblxuXHRcdGluc3RhbGw6ICgpID0+IHtcblx0XHRcdGNvbnN0ICRwcmludExpbmsgPSAkYm9keS5maW5kKCcjdC1wcmludCBhJyk7XG5cdFx0XHRpZiAoISRwcmludExpbmsubGVuZ3RoKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0JHByaW50TGlua1xuXHRcdFx0XHQub2ZmKCdjbGljaycpXG5cdFx0XHRcdC5nZXQoMClcblx0XHRcdFx0Py5hZGRFdmVudExpc3RlbmVyKFxuXHRcdFx0XHRcdCdjbGljaycsXG5cdFx0XHRcdFx0KGV2ZW50KSA9PiB7XG5cdFx0XHRcdFx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHRcdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0XHRwcmludE9wdGlvbnMuY3JlYXRlV2luZG93KCk7XG5cdFx0XHRcdFx0fSwgLy8gVXNlIGNhcHR1cmluZyBwaGFzZSwgdG8gYmVhdCB0aGUgb3RoZXIgY2xpY2sgbGlzdGVuZXJcblx0XHRcdFx0XHR0cnVlXG5cdFx0XHRcdCk7XG5cdFx0fSxcblxuXHRcdGNyZWF0ZVdpbmRvdzogKCkgPT4ge1xuXHRcdFx0Y2xhc3MgUHJpbnREaWFsb2cgZXh0ZW5kcyBPTy51aS5Qcm9jZXNzRGlhbG9nIHtcblx0XHRcdFx0cHJpdmF0ZSBwYW5lbDogT08udWkuUGFuZWxMYXlvdXQgfCB1bmRlZmluZWQ7XG5cdFx0XHRcdHByaXZhdGUgY29udGVudDogT08udWkuRmllbGRzZXRMYXlvdXQgfCB1bmRlZmluZWQ7XG5cdFx0XHRcdHByaXZhdGUgJGJvZHk6IEpRdWVyeSB8IHVuZGVmaW5lZDtcblxuXHRcdFx0XHRwcml2YXRlIHF1ZXN0aW9uczoge1xuXHRcdFx0XHRcdGxhYmVsOiBzdHJpbmc7XG5cdFx0XHRcdFx0dHlwZTogc3RyaW5nO1xuXHRcdFx0XHRcdGNoZWNrZWQ6IGJvb2xlYW47XG5cdFx0XHRcdFx0cmV0dXJudmFsdWU6IHN0cmluZztcblx0XHRcdFx0XHR3aWRnZXQ/OiBPTy51aS5DaGVja2JveElucHV0V2lkZ2V0O1xuXHRcdFx0XHR9W10gPSBbXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0bGFiZWw6ICfpmpDol4/nlYzpnaLlhYPntKAnLFxuXHRcdFx0XHRcdFx0dHlwZTogJ2NoZWNrYm94Jyxcblx0XHRcdFx0XHRcdGNoZWNrZWQ6IHRydWUsXG5cdFx0XHRcdFx0XHRyZXR1cm52YWx1ZTogJ2VuaGFuY2VkJyxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdGxhYmVsOiAn6ZqQ6JeP5Zu+54mHJyxcblx0XHRcdFx0XHRcdHR5cGU6ICdjaGVja2JveCcsXG5cdFx0XHRcdFx0XHRjaGVja2VkOiBmYWxzZSxcblx0XHRcdFx0XHRcdHJldHVybnZhbHVlOiAnbm9pbWFnZXMnLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0bGFiZWw6ICfpmpDol4/lj4LogIPmlofnjK4nLFxuXHRcdFx0XHRcdFx0dHlwZTogJ2NoZWNrYm94Jyxcblx0XHRcdFx0XHRcdGNoZWNrZWQ6IGZhbHNlLFxuXHRcdFx0XHRcdFx0cmV0dXJudmFsdWU6ICdub3JlZnMnLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0bGFiZWw6ICfpmpDol4/nm67lvZUnLFxuXHRcdFx0XHRcdFx0dHlwZTogJ2NoZWNrYm94Jyxcblx0XHRcdFx0XHRcdGNoZWNrZWQ6IGZhbHNlLFxuXHRcdFx0XHRcdFx0cmV0dXJudmFsdWU6ICdub3RvYycsXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRsYWJlbDogJ+enu+mZpOiDjOaZr++8iOaCqOeahOa1j+iniOWZqOaIluWPr+S7peimhuebluacrOiuvue9ru+8iScsXG5cdFx0XHRcdFx0XHR0eXBlOiAnY2hlY2tib3gnLFxuXHRcdFx0XHRcdFx0Y2hlY2tlZDogZmFsc2UsXG5cdFx0XHRcdFx0XHRyZXR1cm52YWx1ZTogJ25vYmFja2dyb3VuZCcsXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRsYWJlbDogJ+W8uuWItuWwhuaJgOacieaWh+Wtl+iuvue9ruS4uum7keiJsicsXG5cdFx0XHRcdFx0XHR0eXBlOiAnY2hlY2tib3gnLFxuXHRcdFx0XHRcdFx0Y2hlY2tlZDogdHJ1ZSxcblx0XHRcdFx0XHRcdHJldHVybnZhbHVlOiAnYmxhY2t0ZXh0Jyxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRdO1xuXG5cdFx0XHRcdHB1YmxpYyBvdmVycmlkZSBpbml0aWFsaXplKCk6IHRoaXMge1xuXHRcdFx0XHRcdGxldCBjaGVja2JveElucHV0V2lkZ2V0O1xuXHRcdFx0XHRcdGNvbnN0IGZpZWxkTGF5b3V0cyA9IFtdO1xuXG5cdFx0XHRcdFx0c3VwZXIuaW5pdGlhbGl6ZSgpO1xuXG5cdFx0XHRcdFx0dGhpcy5wYW5lbCA9IG5ldyBPTy51aS5QYW5lbExheW91dCh7XG5cdFx0XHRcdFx0XHRleHBhbmRlZDogZmFsc2UsXG5cdFx0XHRcdFx0XHRwYWRkZWQ6IHRydWUsXG5cdFx0XHRcdFx0fSk7XG5cblx0XHRcdFx0XHR0aGlzLmNvbnRlbnQgPSBuZXcgT08udWkuRmllbGRzZXRMYXlvdXQoKTtcblx0XHRcdFx0XHRmb3IgKGNvbnN0IHF1ZXN0aW9uIG9mIHRoaXMucXVlc3Rpb25zKSB7XG5cdFx0XHRcdFx0XHRjb25zdCB7Y2hlY2tlZCwgbGFiZWwsIHR5cGV9ID0gcXVlc3Rpb247XG5cdFx0XHRcdFx0XHRpZiAodHlwZSAhPT0gJ2NoZWNrYm94Jykge1xuXHRcdFx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGNoZWNrYm94SW5wdXRXaWRnZXQgPSBuZXcgT08udWkuQ2hlY2tib3hJbnB1dFdpZGdldCh7XG5cdFx0XHRcdFx0XHRcdHNlbGVjdGVkOiBjaGVja2VkLFxuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRxdWVzdGlvbi53aWRnZXQgPSBjaGVja2JveElucHV0V2lkZ2V0O1xuXHRcdFx0XHRcdFx0ZmllbGRMYXlvdXRzW2ZpZWxkTGF5b3V0cy5sZW5ndGhdID0gbmV3IE9PLnVpLkZpZWxkTGF5b3V0KGNoZWNrYm94SW5wdXRXaWRnZXQsIHtcblx0XHRcdFx0XHRcdFx0bGFiZWwsXG5cdFx0XHRcdFx0XHRcdGFsaWduOiAnaW5saW5lJyxcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR0aGlzLmNvbnRlbnQuYWRkSXRlbXMoZmllbGRMYXlvdXRzKTtcblxuXHRcdFx0XHRcdHRoaXMucGFuZWwuJGVsZW1lbnQuYXBwZW5kKHRoaXMuY29udGVudC4kZWxlbWVudCk7XG5cdFx0XHRcdFx0dGhpcy5wYW5lbC4kZWxlbWVudC5hcHBlbmRUbyh0aGlzLiRib2R5IGFzIEpRdWVyeSk7XG5cblx0XHRcdFx0XHRyZXR1cm4gdGhpcztcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHB1YmxpYyBvdmVycmlkZSBnZXRBY3Rpb25Qcm9jZXNzKGFjdGlvbj86IHN0cmluZyk6IE9PLnVpLlByb2Nlc3Mge1xuXHRcdFx0XHRcdGNvbnN0IHNlbGYgPSB0aGlzO1xuXHRcdFx0XHRcdGlmIChhY3Rpb24gPT09ICdwcmludCcpIHtcblx0XHRcdFx0XHRcdHJldHVybiBuZXcgT08udWkuUHJvY2VzcygoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdC8vIEdldCB2YWx1ZXMgb2YgY2hlY2tib3hlc1xuXHRcdFx0XHRcdFx0XHRmb3IgKGNvbnN0IHF1ZXN0aW9uIG9mIHRoaXMucXVlc3Rpb25zKSB7XG5cdFx0XHRcdFx0XHRcdFx0aWYgKHF1ZXN0aW9uLnR5cGUgPT09ICdjaGVja2JveCcgJiYgcXVlc3Rpb24ud2lkZ2V0KSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkocHJpbnRPcHRpb25zLCBxdWVzdGlvbi5yZXR1cm52YWx1ZSwge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZTogcXVlc3Rpb24ud2lkZ2V0LmlzU2VsZWN0ZWQoKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0d3JpdGFibGU6IHRydWUsXG5cdFx0XHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHQvLyBAdHMtZXhwZWN0LWVycm9yIFRTMjMzOVxuXHRcdFx0XHRcdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVuc2FmZS1jYWxsXG5cdFx0XHRcdFx0XHRcdHNlbGYuY2xvc2Uoe2FjdGlvbn0pLmRvbmUoKCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdHByaW50T3B0aW9ucy5jaGFuZ2VQcmludENTUygpO1xuXHRcdFx0XHRcdFx0XHRcdHByaW50T3B0aW9ucy5vdGhlckVuaGFuY2VtZW50cygpO1xuXHRcdFx0XHRcdFx0XHRcdHdpbmRvdy5wcmludCgpO1xuXHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHJldHVybiBzdXBlci5nZXRBY3Rpb25Qcm9jZXNzKGFjdGlvbik7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Ly8gT08uaW5oZXJpdENsYXNzKFByaW50RGlhbG9nLCBPTy51aS5Qcm9jZXNzRGlhbG9nKTtcblx0XHRcdFByaW50RGlhbG9nLnN0YXRpYyA9IHtcblx0XHRcdFx0Li4uT08udWkuUHJvY2Vzc0RpYWxvZy5zdGF0aWMsXG5cdFx0XHR9O1xuXHRcdFx0UHJpbnREaWFsb2cuc3RhdGljLm5hbWUgPSAnUHJpbnREaWFsb2cnO1xuXHRcdFx0UHJpbnREaWFsb2cuc3RhdGljLnRpdGxlID0gZ2V0TWVzc2FnZSgnUHJpbnQgdGhpcyBwYWdlJyk7XG5cdFx0XHRQcmludERpYWxvZy5zdGF0aWMuYWN0aW9ucyA9IFtcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGFjdGlvbjogJ3ByaW50Jyxcblx0XHRcdFx0XHRsYWJlbDogZ2V0TWVzc2FnZSgnUHJpbnQnKSxcblx0XHRcdFx0XHRmbGFnczogWydwcmltYXJ5JywgJ3Byb2dyZXNzaXZlJ10sXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRsYWJlbDogZ2V0TWVzc2FnZSgnQ2FuY2VsJyksXG5cdFx0XHRcdFx0ZmxhZ3M6IFsnc2FmZScsICdjbG9zZSddLFxuXHRcdFx0XHR9LFxuXHRcdFx0XTtcblxuXHRcdFx0aWYgKCF3aW5kb3dNYW5hZ2VyKSB7XG5cdFx0XHRcdHdpbmRvd01hbmFnZXIgPSBuZXcgT08udWkuV2luZG93TWFuYWdlcigpO1xuXHRcdFx0XHQkYm9keS5hcHBlbmQod2luZG93TWFuYWdlci4kZWxlbWVudCk7XG5cdFx0XHR9XG5cblx0XHRcdGlmICghcHJpbnREaWFsb2cpIHtcblx0XHRcdFx0cHJpbnREaWFsb2cgPSBuZXcgUHJpbnREaWFsb2coe1xuXHRcdFx0XHRcdHNpemU6ICdtZWRpdW0nLFxuXHRcdFx0XHR9KTtcblx0XHRcdFx0d2luZG93TWFuYWdlci5hZGRXaW5kb3dzKFtwcmludERpYWxvZ10pO1xuXHRcdFx0fVxuXG5cdFx0XHR2b2lkIHdpbmRvd01hbmFnZXIub3BlbldpbmRvdyhwcmludERpYWxvZyk7XG5cdFx0fSxcblxuXHRcdGNoYW5nZVByaW50Q1NTKCkge1xuXHRcdFx0LyogSGVyZSB3ZTpcblx0XHRcdCAqIC0gZGlzYWJsZSBzdHlsZXNoZWV0cyB0aGF0IGFyZSBwcmludCBzcGVjaWZpY1xuXHRcdFx0ICogLSBtYWtlIHNjcmVlbiBzcGVjaWZpYyBzdHlsZXNoZWV0cyBhbHNvIGVuYWJsZWQgZm9yIHByaW50IG1lZGl1bVxuXHRcdFx0ICogLSByZW1vdmUgcHJpbnQgc3BlY2lmaWMgc3R5bGVydWxlc1xuXHRcdFx0ICogLSBtYWtlIHNjcmVlbiBzcGVjaWZpYyBzdHlsZXJ1bGVzIGFsc28gZW5hYmxlZCBmb3IgcHJpbnQgbWVkaXVtXG5cdFx0XHQgKi9cblx0XHRcdGlmICh0aGlzLmVuaGFuY2VkID09PSBmYWxzZSkge1xuXHRcdFx0XHRmb3IgKGNvbnN0IHN0eWxlc2hlZXQgb2YgZG9jdW1lbnQuc3R5bGVTaGVldHMpIHtcblx0XHRcdFx0XHRjb25zdCB7bWVkaWF9ID0gc3R5bGVzaGVldDtcblx0XHRcdFx0XHRpZiAoIW1lZGlhKSB7XG5cdFx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRpZiAobWVkaWEubWVkaWFUZXh0ICYmIG1lZGlhLm1lZGlhVGV4dC5pbmNsdWRlcygncHJpbnQnKSkge1xuXHRcdFx0XHRcdFx0aWYgKCFtZWRpYS5tZWRpYVRleHQuaW5jbHVkZXMoJ3NjcmVlbicpKSB7XG5cdFx0XHRcdFx0XHRcdHN0eWxlc2hlZXQuZGlzYWJsZWQgPSB0cnVlO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0gZWxzZSBpZiAoXG5cdFx0XHRcdFx0XHRtZWRpYS5tZWRpYVRleHQgJiZcblx0XHRcdFx0XHRcdG1lZGlhLm1lZGlhVGV4dC5pbmNsdWRlcygnc2NyZWVuJykgJiZcblx0XHRcdFx0XHRcdCFtZWRpYS5tZWRpYVRleHQuaW5jbHVkZXMoJ3ByaW50Jylcblx0XHRcdFx0XHQpIHtcblx0XHRcdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0XHRcdG1lZGlhLmFwcGVuZE1lZGl1bSgncHJpbnQnKTtcblx0XHRcdFx0XHRcdH0gY2F0Y2gge1xuXHRcdFx0XHRcdFx0XHRtZWRpYS5tZWRpYVRleHQgKz0gJyxwcmludCc7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Lyogbm93IHRlc3QgaW5kaXZpZHVhbCBzdHlsZXNoZWV0IHJ1bGVzICovXG5cdFx0XHRcdFx0bGV0IHJ1bGVzO1xuXHRcdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0XHRydWxlcyA9IHN0eWxlc2hlZXQuY3NzUnVsZXMgfHwgc3R5bGVzaGVldC5ydWxlcztcblx0XHRcdFx0XHR9IGNhdGNoIHtcblx0XHRcdFx0XHRcdC8qIENyb3NzIGRvbWFpbiBpc3N1ZS4gKi9cblx0XHRcdFx0XHRcdG13LmxvZy53YXJuKCdOb3QgcG9zc2libGUgdG8gY29ycmVjdCBzdHlsZXNoZWV0IGR1ZSB0byBjcm9zcyBvcmlnaW4gcmVzdHJpY3Rpb25zLicpO1xuXHRcdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0aWYgKCFydWxlcykge1xuXHRcdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Zm9yIChsZXQgaiA9IDA7IGogPCBydWxlcy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRcdFx0Y29uc3QgcnVsZSA9IHJ1bGVzW2pdIGFzIHVua25vd24gYXMgU3R5bGVTaGVldDtcblxuXHRcdFx0XHRcdFx0bGV0IGhhc1ByaW50ID0gZmFsc2U7XG5cdFx0XHRcdFx0XHRsZXQgaGFzU2NyZWVuID0gZmFsc2U7XG5cblx0XHRcdFx0XHRcdGlmICghcnVsZSkge1xuXHRcdFx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0aWYgKChydWxlIGFzIHVua25vd24gYXMgQ1NTUnVsZSkudHlwZSA9PT0gQ1NTUnVsZS5NRURJQV9SVUxFICYmIHJ1bGUubWVkaWEpIHtcblx0XHRcdFx0XHRcdFx0Zm9yIChjb25zdCBydWxlTWVkaWEgb2YgcnVsZS5tZWRpYSkge1xuXHRcdFx0XHRcdFx0XHRcdGlmIChydWxlTWVkaWEgPT09ICdwcmludCcpIHtcblx0XHRcdFx0XHRcdFx0XHRcdGhhc1ByaW50ID0gdHJ1ZTtcblx0XHRcdFx0XHRcdFx0XHR9IGVsc2UgaWYgKHJ1bGVNZWRpYSA9PT0gJ3NjcmVlbicpIHtcblx0XHRcdFx0XHRcdFx0XHRcdGhhc1NjcmVlbiA9IHRydWU7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0aWYgKGhhc1ByaW50ICYmICFoYXNTY3JlZW4pIHtcblx0XHRcdFx0XHRcdFx0c3R5bGVzaGVldC5kZWxldGVSdWxlKGopO1xuXHRcdFx0XHRcdFx0XHRqLS07XG5cdFx0XHRcdFx0XHR9IGVsc2UgaWYgKHJ1bGUgJiYgaGFzU2NyZWVuICYmICFoYXNQcmludCkge1xuXHRcdFx0XHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdFx0XHRcdHJ1bGUubWVkaWEuYXBwZW5kTWVkaXVtKCdwcmludCcpO1xuXHRcdFx0XHRcdFx0XHR9IGNhdGNoIHtcblx0XHRcdFx0XHRcdFx0XHRydWxlLm1lZGlhLm1lZGlhVGV4dCArPSAnLHByaW50Jztcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRsZXQgcHJpbnRTdHlsZSA9ICcnO1xuXHRcdFx0LyogQWRkIGNzcyB0byBoaWRlIGltYWdlcyAqL1xuXHRcdFx0aWYgKHRoaXMubm9pbWFnZXMpIHtcblx0XHRcdFx0cHJpbnRTdHlsZSArPSAnaW1nLC50aHVtYntkaXNwbGF5Om5vbmV9Jztcblx0XHRcdH1cblx0XHRcdC8qIEFkZCBjc3MgdG8gaGlkZSByZWZlcmVuY2VzIG1hcmtlcnMgYW5kIHRoZSByZWZlcmVuY2VzIGxpc3RzICovXG5cdFx0XHRpZiAodGhpcy5ub3JlZnMpIHtcblx0XHRcdFx0cHJpbnRTdHlsZSArPSAnLm13LWhlYWRsaW5lW2lkPVwiUmVmZXJlbmNlc1wiXSxvbC5yZWZlcmVuY2VzLC5yZWZlcmVuY2V7ZGlzcGxheTpub25lfSc7XG5cdFx0XHR9XG5cdFx0XHRpZiAodGhpcy5ub3RvYykge1xuXHRcdFx0XHRwcmludFN0eWxlICs9ICcjdG9jLC50b2N7ZGlzcGxheTpub25lfSc7XG5cdFx0XHR9XG5cdFx0XHRpZiAodGhpcy5ub2JhY2tncm91bmQpIHtcblx0XHRcdFx0cHJpbnRTdHlsZSArPSAnKntiYWNrZ3JvdW5kOm5vbmUgIWltcG9ydGFudH0nO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHRoaXMuYmxhY2t0ZXh0KSB7XG5cdFx0XHRcdHByaW50U3R5bGUgKz0gJyp7Y29sb3I6IzAwMCAhaW1wb3J0YW50fSc7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChwcmludFN0eWxlKSB7XG5cdFx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcmludFN0eWxlJyk/LnJlbW92ZSgpO1xuXHRcdFx0XHRjb25zdCBzdHlsZVRhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG5cdFx0XHRcdHN0eWxlVGFnLmlkID0gJ3ByaW50U3R5bGUnO1xuXHRcdFx0XHRzdHlsZVRhZy5tZWRpYSA9ICdwcmludCc7XG5cdFx0XHRcdHN0eWxlVGFnLmFwcGVuZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShwcmludFN0eWxlKSk7XG5cdFx0XHRcdGRvY3VtZW50LmhlYWQuYXBwZW5kKHN0eWxlVGFnKTtcblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0LyogUmV3cml0ZSB0aGUgXCJyZXRyaWV2ZWQgZnJvbVwiIHVybCB0byBiZSByZWFkYWJsZSAqL1xuXHRcdG90aGVyRW5oYW5jZW1lbnRzOiAoKSA9PiB7XG5cdFx0XHRjb25zdCBsaW5rID0gJGJvZHkuZmluZCgnZGl2LnByaW50Zm9vdGVyIGEnKTtcblx0XHRcdGxpbmsudGV4dChkZWNvZGVVUkkobGluay50ZXh0KCkpKTtcblx0XHR9LFxuXHR9O1xuXG5cdHJldHVybiBwcmludE9wdGlvbnM7XG59O1xuXG52b2lkIGdldEJvZHkoKS50aGVuKGZ1bmN0aW9uIHByaW50T3B0aW9uc0xvYWQoJGJvZHkpIHtcblx0aWYgKG13LmNvbmZpZy5nZXQoJ3dnTmFtZXNwYWNlTnVtYmVyJykgPCAwKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdGNvbnN0IHByaW50T3B0aW9ucyA9IGdldFByaW50T3B0aW9ucygkYm9keSk7XG5cdC8vIFRoaXMgY2FuIGJlIGJlZm9yZSB0aGUgY2xpY2sgbGlzdGVuZXIgYnkgTVcgaXMgaW5zdGFsbGVkLiBJbnN0ZWFkLFxuXHQvLyByZS1hZGQgb3Vyc2VsdmVzIHRvIHRoZSBiYWNrIG9mIHRoZSBkb2N1bWVudC5yZWFkeSBsaXN0XG5cdC8vIHVzZSBhc3luYyB0aW1lb3V0ZSB0byBkbyB0aGlzXG5cdHNldFRpbWVvdXQocHJpbnRPcHRpb25zLmluc3RhbGwsIDApO1xufSk7XG4iLCAiaW1wb3J0IHtsb2NhbGl6ZX0gZnJvbSAnZXh0LmdhZGdldC5pMThuJztcblxuY29uc3QgZ2V0STE4bk1lc3NhZ2VzID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdFByaW50OiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1ByaW50Jyxcblx0XHRcdGphOiAn5Y2w5Yi3Jyxcblx0XHRcdCd6aC1oYW5zJzogJ+aJk+WNsCcsXG5cdFx0XHQnemgtaGFudCc6ICfliJfljbAnLFxuXHRcdH0pLFxuXHRcdCdQcmludCB0aGlzIHBhZ2UnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1ByaW50IHRoaXMgcGFnZScsXG5cdFx0XHRqYTogJ+OBk+OBruODmuODvOOCuOOCkuWNsOWIt+OBqycsXG5cdFx0XHQnemgtaGFucyc6ICfmiZPljbDmraTpobXpnaInLFxuXHRcdFx0J3poLWhhbnQnOiAn5YiX5Y2w5q2k6aCB6Z2iJyxcblx0XHR9KSxcblx0XHRDYW5jZWw6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQ2FuY2VsJyxcblx0XHRcdGphOiAn44Kt44Oj44Oz44K744OrJyxcblx0XHRcdHpoOiAn5Y+W5raIJyxcblx0XHR9KSxcblx0fTtcbn07XG5cbmNvbnN0IGkxOG5NZXNzYWdlcyA9IGdldEkxOG5NZXNzYWdlcygpO1xuXG5jb25zdCBnZXRNZXNzYWdlOiBHZXRNZXNzYWdlczx0eXBlb2YgaTE4bk1lc3NhZ2VzPiA9IChrZXkpID0+IHtcblx0cmV0dXJuIGkxOG5NZXNzYWdlc1trZXldIHx8IGtleTtcbn07XG5cbmV4cG9ydCB7Z2V0TWVzc2FnZX07XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLHFCQUFzQkMsUUFBQSxpQkFBQTs7QUNBdEIsSUFBQUMsb0JBQXVCRCxRQUFBLGlCQUFBO0FBRXZCLElBQU1FLGtCQUFrQkEsTUFBTTtBQUM3QixTQUFPO0lBQ05DLFFBQUEsR0FBT0Ysa0JBQUFHLFVBQVM7TUFDZkMsSUFBSTtNQUNKQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0Qsb0JBQUEsR0FBbUJMLGtCQUFBRyxVQUFTO01BQzNCQyxJQUFJO01BQ0pDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDREMsU0FBQSxHQUFRTixrQkFBQUcsVUFBUztNQUNoQkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pFLElBQUk7SUFDTCxDQUFDO0VBQ0Y7QUFDRDtBQUVBLElBQU1DLGVBQWVQLGdCQUFnQjtB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Q0EsVUFBSSxLQUFLckcsY0FBYztBQUN0QnFHLHNCQUFjO01BQ2Y7QUFDQSxVQUFJLEtBQUtwRyxXQUFXO0FBQ25Cb0csc0JBQWM7TUFDZjtBQUVBLFVBQUlBLFlBQVk7QUFBQSxZQUFBQztBQUNmLFNBQUFBLHdCQUFBekIsU0FBUzBCLGNBQWMsYUFBYSxPQUFBLFFBQUFELDBCQUFBLFVBQXBDQSxzQkFBdUNFLE9BQU87QUFDOUMsY0FBTUMsV0FBVzVCLFNBQVM2QixjQUFjLE9BQU87QUFDL0NELGlCQUFTRSxLQUFLO0FBQ2RGLGlCQUFTeEIsUUFBUTtBQUNqQndCLGlCQUFTdkQsT0FBTzJCLFNBQVMrQixlQUFlUCxVQUFVLENBQUM7QUFDbkR4QixpQkFBU2dDLEtBQUszRCxPQUFPdUQsUUFBUTtNQUM5QjtJQUNEOztJQUdBekMsbUJBQW1CQSxNQUFNO0FBQ3hCLFlBQU04QyxPQUFPdEgsTUFBTWEsS0FBSyxtQkFBbUI7QUFDM0N5RyxXQUFLQyxLQUFLQyxVQUFVRixLQUFLQyxLQUFLLENBQUMsQ0FBQztJQUNqQztFQUNEO0FBRUEsU0FBT3BIO0FBQ1I7QUFFQSxNQUFBLEdBQUtqQixtQkFBQXVJLFNBQVEsRUFBRUMsS0FBSyxTQUFTQyxpQkFBaUIzSCxPQUFPO0FBQ3BELE1BQUlnRyxHQUFHNEIsT0FBTzVHLElBQUksbUJBQW1CLElBQUksR0FBRztBQUMzQztFQUNEO0FBQ0EsUUFBTWIsZUFBZUosZ0JBQWdCQyxLQUFLO0FBSTFDNkgsYUFBVzFILGFBQWFPLFNBQVMsQ0FBQztBQUNuQyxDQUFDOyIsCiAgIm5hbWVzIjogWyJpbXBvcnRfZXh0X2dhZGdldDIiLCAicmVxdWlyZSIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJnZXRJMThuTWVzc2FnZXMiLCAiUHJpbnQiLCAibG9jYWxpemUiLCAiZW4iLCAiamEiLCAiQ2FuY2VsIiwgInpoIiwgImkxOG5NZXNzYWdlcyIsICJnZXRNZXNzYWdlIiwgImtleSIsICJnZXRQcmludE9wdGlvbnMiLCAiJGJvZHkiLCAid2luZG93TWFuYWdlciIsICJwcmludERpYWxvZyIsICJwcmludE9wdGlvbnMiLCAiZW5oYW5jZWQiLCAibm9pbWFnZXMiLCAibm9yZWZzIiwgIm5vdG9jIiwgIm5vYmFja2dyb3VuZCIsICJibGFja3RleHQiLCAiaW5zdGFsbCIsICJfJHByaW50TGluayRvZmYkZ2V0IiwgIiRwcmludExpbmsiLCAiZmluZCIsICJsZW5ndGgiLCAib2ZmIiwgImdldCIsICJhZGRFdmVudExpc3RlbmVyIiwgImV2ZW50IiwgInN0b3BQcm9wYWdhdGlvbiIsICJwcmV2ZW50RGVmYXVsdCIsICJjcmVhdGVXaW5kb3ciLCAiUHJpbnREaWFsb2ciLCAiT08iLCAidWkiLCAiUHJvY2Vzc0RpYWxvZyIsICJwYW5lbCIsICJjb250ZW50IiwgInF1ZXN0aW9ucyIsICJsYWJlbCIsICJ0eXBlIiwgImNoZWNrZWQiLCAicmV0dXJudmFsdWUiLCAiaW5pdGlhbGl6ZSIsICJjaGVja2JveElucHV0V2lkZ2V0IiwgImZpZWxkTGF5b3V0cyIsICJQYW5lbExheW91dCIsICJleHBhbmRlZCIsICJwYWRkZWQiLCAiRmllbGRzZXRMYXlvdXQiLCAiX2l0ZXJhdG9yIiwgIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwgIl9zdGVwIiwgInMiLCAibiIsICJkb25lIiwgInF1ZXN0aW9uIiwgInZhbHVlIiwgIkNoZWNrYm94SW5wdXRXaWRnZXQiLCAic2VsZWN0ZWQiLCAid2lkZ2V0IiwgIkZpZWxkTGF5b3V0IiwgImFsaWduIiwgImVyciIsICJlIiwgImYiLCAiYWRkSXRlbXMiLCAiJGVsZW1lbnQiLCAiYXBwZW5kIiwgImFwcGVuZFRvIiwgImdldEFjdGlvblByb2Nlc3MiLCAiYWN0aW9uIiwgInNlbGYiLCAiUHJvY2VzcyIsICJfaXRlcmF0b3IyIiwgIl9zdGVwMiIsICJPYmplY3QiLCAiZGVmaW5lUHJvcGVydHkiLCAiaXNTZWxlY3RlZCIsICJ3cml0YWJsZSIsICJjbG9zZSIsICJjaGFuZ2VQcmludENTUyIsICJvdGhlckVuaGFuY2VtZW50cyIsICJ3aW5kb3ciLCAicHJpbnQiLCAic3RhdGljIiwgIm5hbWUiLCAidGl0bGUiLCAiYWN0aW9ucyIsICJmbGFncyIsICJXaW5kb3dNYW5hZ2VyIiwgInNpemUiLCAiYWRkV2luZG93cyIsICJvcGVuV2luZG93IiwgIl9pdGVyYXRvcjMiLCAiZG9jdW1lbnQiLCAic3R5bGVTaGVldHMiLCAiX3N0ZXAzIiwgInN0eWxlc2hlZXQiLCAibWVkaWEiLCAibWVkaWFUZXh0IiwgImluY2x1ZGVzIiwgImRpc2FibGVkIiwgImFwcGVuZE1lZGl1bSIsICJydWxlcyIsICJjc3NSdWxlcyIsICJtdyIsICJsb2ciLCAid2FybiIsICJqIiwgInJ1bGUiLCAiaGFzUHJpbnQiLCAiaGFzU2NyZWVuIiwgIkNTU1J1bGUiLCAiTUVESUFfUlVMRSIsICJfaXRlcmF0b3I0IiwgIl9zdGVwNCIsICJydWxlTWVkaWEiLCAiZGVsZXRlUnVsZSIsICJwcmludFN0eWxlIiwgIl9kb2N1bWVudCRxdWVyeVNlbGVjdCIsICJxdWVyeVNlbGVjdG9yIiwgInJlbW92ZSIsICJzdHlsZVRhZyIsICJjcmVhdGVFbGVtZW50IiwgImlkIiwgImNyZWF0ZVRleHROb2RlIiwgImhlYWQiLCAibGluayIsICJ0ZXh0IiwgImRlY29kZVVSSSIsICJnZXRCb2R5IiwgInRoZW4iLCAicHJpbnRPcHRpb25zTG9hZCIsICJjb25maWciLCAic2V0VGltZW91dCJdCn0K

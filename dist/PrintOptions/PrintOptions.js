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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1ByaW50T3B0aW9ucy9QcmludE9wdGlvbnMudHMiLCAic3JjL1ByaW50T3B0aW9ucy9tb2R1bGVzL2kxOG4udHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7Z2V0Qm9keX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9tb2R1bGVzL2kxOG4nO1xuXG5jb25zdCBnZXRQcmludE9wdGlvbnMgPSAoJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KSA9PiB7XG5cdGxldCB3aW5kb3dNYW5hZ2VyOiBPTy51aS5XaW5kb3dNYW5hZ2VyO1xuXHRsZXQgcHJpbnREaWFsb2c6IE9PLnVpLlByb2Nlc3NEaWFsb2c7XG5cblx0Y29uc3QgcHJpbnRPcHRpb25zID0ge1xuXHRcdGVuaGFuY2VkOiB0cnVlLFxuXHRcdG5vaW1hZ2VzOiBmYWxzZSxcblx0XHRub3JlZnM6IGZhbHNlLFxuXHRcdG5vdG9jOiBmYWxzZSxcblx0XHRub2JhY2tncm91bmQ6IGZhbHNlLFxuXHRcdGJsYWNrdGV4dDogdHJ1ZSxcblxuXHRcdGluc3RhbGw6ICgpID0+IHtcblx0XHRcdGNvbnN0ICRwcmludExpbmsgPSAkYm9keS5maW5kKCcjdC1wcmludCBhJyk7XG5cdFx0XHRpZiAoISRwcmludExpbmsubGVuZ3RoKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0JHByaW50TGlua1xuXHRcdFx0XHQub2ZmKCdjbGljaycpXG5cdFx0XHRcdC5nZXQoMClcblx0XHRcdFx0Py5hZGRFdmVudExpc3RlbmVyKFxuXHRcdFx0XHRcdCdjbGljaycsXG5cdFx0XHRcdFx0KGV2ZW50KSA9PiB7XG5cdFx0XHRcdFx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHRcdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0XHRwcmludE9wdGlvbnMuY3JlYXRlV2luZG93KCk7XG5cdFx0XHRcdFx0fSwgLy8gVXNlIGNhcHR1cmluZyBwaGFzZSwgdG8gYmVhdCB0aGUgb3RoZXIgY2xpY2sgbGlzdGVuZXJcblx0XHRcdFx0XHR0cnVlXG5cdFx0XHRcdCk7XG5cdFx0fSxcblxuXHRcdGNyZWF0ZVdpbmRvdzogKCkgPT4ge1xuXHRcdFx0Y2xhc3MgUHJpbnREaWFsb2cgZXh0ZW5kcyBPTy51aS5Qcm9jZXNzRGlhbG9nIHtcblx0XHRcdFx0cHJpdmF0ZSBwYW5lbDogT08udWkuUGFuZWxMYXlvdXQgfCB1bmRlZmluZWQ7XG5cdFx0XHRcdHByaXZhdGUgY29udGVudDogT08udWkuRmllbGRzZXRMYXlvdXQgfCB1bmRlZmluZWQ7XG5cdFx0XHRcdHByaXZhdGUgJGJvZHk6IEpRdWVyeSB8IHVuZGVmaW5lZDtcblxuXHRcdFx0XHRwcml2YXRlIHF1ZXN0aW9uczoge1xuXHRcdFx0XHRcdGxhYmVsOiBzdHJpbmc7XG5cdFx0XHRcdFx0dHlwZTogc3RyaW5nO1xuXHRcdFx0XHRcdGNoZWNrZWQ6IGJvb2xlYW47XG5cdFx0XHRcdFx0cmV0dXJudmFsdWU6IHN0cmluZztcblx0XHRcdFx0XHR3aWRnZXQ/OiBPTy51aS5DaGVja2JveElucHV0V2lkZ2V0O1xuXHRcdFx0XHR9W10gPSBbXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0bGFiZWw6ICfpmpDol4/nlYzpnaLlhYPntKAnLFxuXHRcdFx0XHRcdFx0dHlwZTogJ2NoZWNrYm94Jyxcblx0XHRcdFx0XHRcdGNoZWNrZWQ6IHRydWUsXG5cdFx0XHRcdFx0XHRyZXR1cm52YWx1ZTogJ2VuaGFuY2VkJyxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdGxhYmVsOiAn6ZqQ6JeP5Zu+54mHJyxcblx0XHRcdFx0XHRcdHR5cGU6ICdjaGVja2JveCcsXG5cdFx0XHRcdFx0XHRjaGVja2VkOiBmYWxzZSxcblx0XHRcdFx0XHRcdHJldHVybnZhbHVlOiAnbm9pbWFnZXMnLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0bGFiZWw6ICfpmpDol4/lj4LogIPmlofnjK4nLFxuXHRcdFx0XHRcdFx0dHlwZTogJ2NoZWNrYm94Jyxcblx0XHRcdFx0XHRcdGNoZWNrZWQ6IGZhbHNlLFxuXHRcdFx0XHRcdFx0cmV0dXJudmFsdWU6ICdub3JlZnMnLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0bGFiZWw6ICfpmpDol4/nm67lvZUnLFxuXHRcdFx0XHRcdFx0dHlwZTogJ2NoZWNrYm94Jyxcblx0XHRcdFx0XHRcdGNoZWNrZWQ6IGZhbHNlLFxuXHRcdFx0XHRcdFx0cmV0dXJudmFsdWU6ICdub3RvYycsXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRsYWJlbDogJ+enu+mZpOiDjOaZr++8iOaCqOeahOa1j+iniOWZqOaIluWPr+S7peimhuebluacrOiuvue9ru+8iScsXG5cdFx0XHRcdFx0XHR0eXBlOiAnY2hlY2tib3gnLFxuXHRcdFx0XHRcdFx0Y2hlY2tlZDogZmFsc2UsXG5cdFx0XHRcdFx0XHRyZXR1cm52YWx1ZTogJ25vYmFja2dyb3VuZCcsXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRsYWJlbDogJ+W8uuWItuWwhuaJgOacieaWh+Wtl+iuvue9ruS4uum7keiJsicsXG5cdFx0XHRcdFx0XHR0eXBlOiAnY2hlY2tib3gnLFxuXHRcdFx0XHRcdFx0Y2hlY2tlZDogdHJ1ZSxcblx0XHRcdFx0XHRcdHJldHVybnZhbHVlOiAnYmxhY2t0ZXh0Jyxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRdO1xuXG5cdFx0XHRcdHB1YmxpYyBvdmVycmlkZSBpbml0aWFsaXplKCk6IHRoaXMge1xuXHRcdFx0XHRcdGxldCBjaGVja2JveElucHV0V2lkZ2V0O1xuXHRcdFx0XHRcdGNvbnN0IGZpZWxkTGF5b3V0cyA9IFtdO1xuXG5cdFx0XHRcdFx0c3VwZXIuaW5pdGlhbGl6ZSgpO1xuXG5cdFx0XHRcdFx0dGhpcy5wYW5lbCA9IG5ldyBPTy51aS5QYW5lbExheW91dCh7XG5cdFx0XHRcdFx0XHRleHBhbmRlZDogZmFsc2UsXG5cdFx0XHRcdFx0XHRwYWRkZWQ6IHRydWUsXG5cdFx0XHRcdFx0fSk7XG5cblx0XHRcdFx0XHR0aGlzLmNvbnRlbnQgPSBuZXcgT08udWkuRmllbGRzZXRMYXlvdXQoKTtcblx0XHRcdFx0XHRmb3IgKGNvbnN0IHF1ZXN0aW9uIG9mIHRoaXMucXVlc3Rpb25zKSB7XG5cdFx0XHRcdFx0XHRjb25zdCB7Y2hlY2tlZCwgbGFiZWwsIHR5cGV9ID0gcXVlc3Rpb247XG5cdFx0XHRcdFx0XHRpZiAodHlwZSAhPT0gJ2NoZWNrYm94Jykge1xuXHRcdFx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGNoZWNrYm94SW5wdXRXaWRnZXQgPSBuZXcgT08udWkuQ2hlY2tib3hJbnB1dFdpZGdldCh7XG5cdFx0XHRcdFx0XHRcdHNlbGVjdGVkOiBjaGVja2VkLFxuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRxdWVzdGlvbi53aWRnZXQgPSBjaGVja2JveElucHV0V2lkZ2V0O1xuXHRcdFx0XHRcdFx0ZmllbGRMYXlvdXRzW2ZpZWxkTGF5b3V0cy5sZW5ndGhdID0gbmV3IE9PLnVpLkZpZWxkTGF5b3V0KGNoZWNrYm94SW5wdXRXaWRnZXQsIHtcblx0XHRcdFx0XHRcdFx0bGFiZWwsXG5cdFx0XHRcdFx0XHRcdGFsaWduOiAnaW5saW5lJyxcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR0aGlzLmNvbnRlbnQuYWRkSXRlbXMoZmllbGRMYXlvdXRzKTtcblxuXHRcdFx0XHRcdHRoaXMucGFuZWwuJGVsZW1lbnQuYXBwZW5kKHRoaXMuY29udGVudC4kZWxlbWVudCk7XG5cdFx0XHRcdFx0dGhpcy5wYW5lbC4kZWxlbWVudC5hcHBlbmRUbyh0aGlzLiRib2R5IGFzIEpRdWVyeSk7XG5cblx0XHRcdFx0XHRyZXR1cm4gdGhpcztcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHB1YmxpYyBvdmVycmlkZSBnZXRBY3Rpb25Qcm9jZXNzKGFjdGlvbj86IHN0cmluZyk6IE9PLnVpLlByb2Nlc3Mge1xuXHRcdFx0XHRcdGNvbnN0IHNlbGYgPSB0aGlzO1xuXHRcdFx0XHRcdGlmIChhY3Rpb24gPT09ICdwcmludCcpIHtcblx0XHRcdFx0XHRcdHJldHVybiBuZXcgT08udWkuUHJvY2VzcygoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdC8vIEdldCB2YWx1ZXMgb2YgY2hlY2tib3hlc1xuXHRcdFx0XHRcdFx0XHRmb3IgKGNvbnN0IHF1ZXN0aW9uIG9mIHRoaXMucXVlc3Rpb25zKSB7XG5cdFx0XHRcdFx0XHRcdFx0aWYgKHF1ZXN0aW9uLnR5cGUgPT09ICdjaGVja2JveCcgJiYgcXVlc3Rpb24ud2lkZ2V0KSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkocHJpbnRPcHRpb25zLCBxdWVzdGlvbi5yZXR1cm52YWx1ZSwge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZTogcXVlc3Rpb24ud2lkZ2V0LmlzU2VsZWN0ZWQoKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0d3JpdGFibGU6IHRydWUsXG5cdFx0XHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHQvLyBAdHMtZXhwZWN0LWVycm9yIFRTMjMzOVxuXHRcdFx0XHRcdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVuc2FmZS1jYWxsXG5cdFx0XHRcdFx0XHRcdHNlbGYuY2xvc2Uoe2FjdGlvbn0pLmRvbmUoKCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdHByaW50T3B0aW9ucy5jaGFuZ2VQcmludENTUygpO1xuXHRcdFx0XHRcdFx0XHRcdHByaW50T3B0aW9ucy5vdGhlckVuaGFuY2VtZW50cygpO1xuXHRcdFx0XHRcdFx0XHRcdHdpbmRvdy5wcmludCgpO1xuXHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHJldHVybiBzdXBlci5nZXRBY3Rpb25Qcm9jZXNzKGFjdGlvbik7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0UHJpbnREaWFsb2cuc3RhdGljID0ge1xuXHRcdFx0XHQuLi5PTy51aS5Qcm9jZXNzRGlhbG9nLnN0YXRpYyxcblx0XHRcdH07XG5cdFx0XHRQcmludERpYWxvZy5zdGF0aWMubmFtZSA9ICdQcmludERpYWxvZyc7XG5cdFx0XHRQcmludERpYWxvZy5zdGF0aWMudGl0bGUgPSBnZXRNZXNzYWdlKCdQcmludCB0aGlzIHBhZ2UnKTtcblx0XHRcdFByaW50RGlhbG9nLnN0YXRpYy5hY3Rpb25zID0gW1xuXHRcdFx0XHR7XG5cdFx0XHRcdFx0YWN0aW9uOiAncHJpbnQnLFxuXHRcdFx0XHRcdGxhYmVsOiBnZXRNZXNzYWdlKCdQcmludCcpLFxuXHRcdFx0XHRcdGZsYWdzOiBbJ3ByaW1hcnknLCAncHJvZ3Jlc3NpdmUnXSxcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGxhYmVsOiBnZXRNZXNzYWdlKCdDYW5jZWwnKSxcblx0XHRcdFx0XHRmbGFnczogWydzYWZlJywgJ2Nsb3NlJ10sXG5cdFx0XHRcdH0sXG5cdFx0XHRdO1xuXG5cdFx0XHRpZiAoIXdpbmRvd01hbmFnZXIpIHtcblx0XHRcdFx0d2luZG93TWFuYWdlciA9IG5ldyBPTy51aS5XaW5kb3dNYW5hZ2VyKCk7XG5cdFx0XHRcdCRib2R5LmFwcGVuZCh3aW5kb3dNYW5hZ2VyLiRlbGVtZW50KTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKCFwcmludERpYWxvZykge1xuXHRcdFx0XHRwcmludERpYWxvZyA9IG5ldyBQcmludERpYWxvZyh7XG5cdFx0XHRcdFx0c2l6ZTogJ21lZGl1bScsXG5cdFx0XHRcdH0pO1xuXHRcdFx0XHR3aW5kb3dNYW5hZ2VyLmFkZFdpbmRvd3MoW3ByaW50RGlhbG9nXSk7XG5cdFx0XHR9XG5cblx0XHRcdHZvaWQgd2luZG93TWFuYWdlci5vcGVuV2luZG93KHByaW50RGlhbG9nKTtcblx0XHR9LFxuXG5cdFx0Y2hhbmdlUHJpbnRDU1MoKSB7XG5cdFx0XHQvKiBIZXJlIHdlOlxuXHRcdFx0ICogLSBkaXNhYmxlIHN0eWxlc2hlZXRzIHRoYXQgYXJlIHByaW50IHNwZWNpZmljXG5cdFx0XHQgKiAtIG1ha2Ugc2NyZWVuIHNwZWNpZmljIHN0eWxlc2hlZXRzIGFsc28gZW5hYmxlZCBmb3IgcHJpbnQgbWVkaXVtXG5cdFx0XHQgKiAtIHJlbW92ZSBwcmludCBzcGVjaWZpYyBzdHlsZXJ1bGVzXG5cdFx0XHQgKiAtIG1ha2Ugc2NyZWVuIHNwZWNpZmljIHN0eWxlcnVsZXMgYWxzbyBlbmFibGVkIGZvciBwcmludCBtZWRpdW1cblx0XHRcdCAqL1xuXHRcdFx0aWYgKHRoaXMuZW5oYW5jZWQgPT09IGZhbHNlKSB7XG5cdFx0XHRcdGZvciAoY29uc3Qgc3R5bGVzaGVldCBvZiBkb2N1bWVudC5zdHlsZVNoZWV0cykge1xuXHRcdFx0XHRcdGNvbnN0IHttZWRpYX0gPSBzdHlsZXNoZWV0O1xuXHRcdFx0XHRcdGlmICghbWVkaWEpIHtcblx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGlmIChtZWRpYS5tZWRpYVRleHQgJiYgbWVkaWEubWVkaWFUZXh0LmluY2x1ZGVzKCdwcmludCcpKSB7XG5cdFx0XHRcdFx0XHRpZiAoIW1lZGlhLm1lZGlhVGV4dC5pbmNsdWRlcygnc2NyZWVuJykpIHtcblx0XHRcdFx0XHRcdFx0c3R5bGVzaGVldC5kaXNhYmxlZCA9IHRydWU7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSBlbHNlIGlmIChcblx0XHRcdFx0XHRcdG1lZGlhLm1lZGlhVGV4dCAmJlxuXHRcdFx0XHRcdFx0bWVkaWEubWVkaWFUZXh0LmluY2x1ZGVzKCdzY3JlZW4nKSAmJlxuXHRcdFx0XHRcdFx0IW1lZGlhLm1lZGlhVGV4dC5pbmNsdWRlcygncHJpbnQnKVxuXHRcdFx0XHRcdCkge1xuXHRcdFx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRcdFx0bWVkaWEuYXBwZW5kTWVkaXVtKCdwcmludCcpO1xuXHRcdFx0XHRcdFx0fSBjYXRjaCB7XG5cdFx0XHRcdFx0XHRcdG1lZGlhLm1lZGlhVGV4dCArPSAnLHByaW50Jztcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQvKiBub3cgdGVzdCBpbmRpdmlkdWFsIHN0eWxlc2hlZXQgcnVsZXMgKi9cblx0XHRcdFx0XHRsZXQgcnVsZXM7XG5cdFx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRcdHJ1bGVzID0gc3R5bGVzaGVldC5jc3NSdWxlcyB8fCBzdHlsZXNoZWV0LnJ1bGVzO1xuXHRcdFx0XHRcdH0gY2F0Y2gge1xuXHRcdFx0XHRcdFx0LyogQ3Jvc3MgZG9tYWluIGlzc3VlLiAqL1xuXHRcdFx0XHRcdFx0bXcubG9nLndhcm4oJ05vdCBwb3NzaWJsZSB0byBjb3JyZWN0IHN0eWxlc2hlZXQgZHVlIHRvIGNyb3NzIG9yaWdpbiByZXN0cmljdGlvbnMuJyk7XG5cdFx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRpZiAoIXJ1bGVzKSB7XG5cdFx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRmb3IgKGxldCBqID0gMDsgaiA8IHJ1bGVzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdFx0XHRjb25zdCBydWxlID0gcnVsZXNbal0gYXMgdW5rbm93biBhcyBTdHlsZVNoZWV0O1xuXG5cdFx0XHRcdFx0XHRsZXQgaGFzUHJpbnQgPSBmYWxzZTtcblx0XHRcdFx0XHRcdGxldCBoYXNTY3JlZW4gPSBmYWxzZTtcblxuXHRcdFx0XHRcdFx0aWYgKCFydWxlKSB7XG5cdFx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRpZiAoKHJ1bGUgYXMgdW5rbm93biBhcyBDU1NSdWxlKS50eXBlID09PSBDU1NSdWxlLk1FRElBX1JVTEUgJiYgcnVsZS5tZWRpYSkge1xuXHRcdFx0XHRcdFx0XHRmb3IgKGNvbnN0IHJ1bGVNZWRpYSBvZiBydWxlLm1lZGlhKSB7XG5cdFx0XHRcdFx0XHRcdFx0aWYgKHJ1bGVNZWRpYSA9PT0gJ3ByaW50Jykge1xuXHRcdFx0XHRcdFx0XHRcdFx0aGFzUHJpbnQgPSB0cnVlO1xuXHRcdFx0XHRcdFx0XHRcdH0gZWxzZSBpZiAocnVsZU1lZGlhID09PSAnc2NyZWVuJykge1xuXHRcdFx0XHRcdFx0XHRcdFx0aGFzU2NyZWVuID0gdHJ1ZTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRpZiAoaGFzUHJpbnQgJiYgIWhhc1NjcmVlbikge1xuXHRcdFx0XHRcdFx0XHRzdHlsZXNoZWV0LmRlbGV0ZVJ1bGUoaik7XG5cdFx0XHRcdFx0XHRcdGotLTtcblx0XHRcdFx0XHRcdH0gZWxzZSBpZiAocnVsZSAmJiBoYXNTY3JlZW4gJiYgIWhhc1ByaW50KSB7XG5cdFx0XHRcdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0XHRcdFx0cnVsZS5tZWRpYS5hcHBlbmRNZWRpdW0oJ3ByaW50Jyk7XG5cdFx0XHRcdFx0XHRcdH0gY2F0Y2gge1xuXHRcdFx0XHRcdFx0XHRcdHJ1bGUubWVkaWEubWVkaWFUZXh0ICs9ICcscHJpbnQnO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGxldCBwcmludFN0eWxlID0gJyc7XG5cdFx0XHQvKiBBZGQgY3NzIHRvIGhpZGUgaW1hZ2VzICovXG5cdFx0XHRpZiAodGhpcy5ub2ltYWdlcykge1xuXHRcdFx0XHRwcmludFN0eWxlICs9ICdpbWcsLnRodW1ie2Rpc3BsYXk6bm9uZX0nO1xuXHRcdFx0fVxuXHRcdFx0LyogQWRkIGNzcyB0byBoaWRlIHJlZmVyZW5jZXMgbWFya2VycyBhbmQgdGhlIHJlZmVyZW5jZXMgbGlzdHMgKi9cblx0XHRcdGlmICh0aGlzLm5vcmVmcykge1xuXHRcdFx0XHRwcmludFN0eWxlICs9ICcubXctaGVhZGxpbmVbaWQ9XCJSZWZlcmVuY2VzXCJdLG9sLnJlZmVyZW5jZXMsLnJlZmVyZW5jZXtkaXNwbGF5Om5vbmV9Jztcblx0XHRcdH1cblx0XHRcdGlmICh0aGlzLm5vdG9jKSB7XG5cdFx0XHRcdHByaW50U3R5bGUgKz0gJyN0b2MsLnRvY3tkaXNwbGF5Om5vbmV9Jztcblx0XHRcdH1cblx0XHRcdGlmICh0aGlzLm5vYmFja2dyb3VuZCkge1xuXHRcdFx0XHRwcmludFN0eWxlICs9ICcqe2JhY2tncm91bmQ6bm9uZSAhaW1wb3J0YW50fSc7XG5cdFx0XHR9XG5cdFx0XHRpZiAodGhpcy5ibGFja3RleHQpIHtcblx0XHRcdFx0cHJpbnRTdHlsZSArPSAnKntjb2xvcjojMDAwICFpbXBvcnRhbnR9Jztcblx0XHRcdH1cblxuXHRcdFx0aWYgKHByaW50U3R5bGUpIHtcblx0XHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ByaW50U3R5bGUnKT8ucmVtb3ZlKCk7XG5cdFx0XHRcdGNvbnN0IHN0eWxlVGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcblx0XHRcdFx0c3R5bGVUYWcuaWQgPSAncHJpbnRTdHlsZSc7XG5cdFx0XHRcdHN0eWxlVGFnLm1lZGlhID0gJ3ByaW50Jztcblx0XHRcdFx0c3R5bGVUYWcuYXBwZW5kKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHByaW50U3R5bGUpKTtcblx0XHRcdFx0ZG9jdW1lbnQuaGVhZC5hcHBlbmQoc3R5bGVUYWcpO1xuXHRcdFx0fVxuXHRcdH0sXG5cblx0XHQvKiBSZXdyaXRlIHRoZSBcInJldHJpZXZlZCBmcm9tXCIgdXJsIHRvIGJlIHJlYWRhYmxlICovXG5cdFx0b3RoZXJFbmhhbmNlbWVudHM6ICgpID0+IHtcblx0XHRcdGNvbnN0IGxpbmsgPSAkYm9keS5maW5kKCdkaXYucHJpbnRmb290ZXIgYScpO1xuXHRcdFx0bGluay50ZXh0KGRlY29kZVVSSShsaW5rLnRleHQoKSkpO1xuXHRcdH0sXG5cdH07XG5cblx0cmV0dXJuIHByaW50T3B0aW9ucztcbn07XG5cbnZvaWQgZ2V0Qm9keSgpLnRoZW4oZnVuY3Rpb24gcHJpbnRPcHRpb25zTG9hZCgkYm9keSkge1xuXHRpZiAobXcuY29uZmlnLmdldCgnd2dOYW1lc3BhY2VOdW1iZXInKSA8IDApIHtcblx0XHRyZXR1cm47XG5cdH1cblx0Y29uc3QgcHJpbnRPcHRpb25zID0gZ2V0UHJpbnRPcHRpb25zKCRib2R5KTtcblx0Ly8gVGhpcyBjYW4gYmUgYmVmb3JlIHRoZSBjbGljayBsaXN0ZW5lciBieSBNVyBpcyBpbnN0YWxsZWQuIEluc3RlYWQsXG5cdC8vIHJlLWFkZCBvdXJzZWx2ZXMgdG8gdGhlIGJhY2sgb2YgdGhlIGRvY3VtZW50LnJlYWR5IGxpc3Rcblx0Ly8gdXNlIGFzeW5jIHRpbWVvdXRlIHRvIGRvIHRoaXNcblx0c2V0VGltZW91dChwcmludE9wdGlvbnMuaW5zdGFsbCwgMCk7XG59KTtcbiIsICJpbXBvcnQge2xvY2FsaXplfSBmcm9tICdleHQuZ2FkZ2V0LmkxOG4nO1xuXG5jb25zdCBnZXRJMThuTWVzc2FnZXMgPSAoKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0UHJpbnQ6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnUHJpbnQnLFxuXHRcdFx0amE6ICfljbDliLcnLFxuXHRcdFx0J3poLWhhbnMnOiAn5omT5Y2wJyxcblx0XHRcdCd6aC1oYW50JzogJ+WIl+WNsCcsXG5cdFx0fSksXG5cdFx0J1ByaW50IHRoaXMgcGFnZSc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnUHJpbnQgdGhpcyBwYWdlJyxcblx0XHRcdGphOiAn44GT44Gu44Oa44O844K444KS5Y2w5Yi344GrJyxcblx0XHRcdCd6aC1oYW5zJzogJ+aJk+WNsOatpOmhtemdoicsXG5cdFx0XHQnemgtaGFudCc6ICfliJfljbDmraTpoIHpnaInLFxuXHRcdH0pLFxuXHRcdENhbmNlbDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdDYW5jZWwnLFxuXHRcdFx0amE6ICfjgq3jg6Pjg7Pjgrvjg6snLFxuXHRcdFx0emg6ICflj5bmtognLFxuXHRcdH0pLFxuXHR9O1xufTtcblxuY29uc3QgaTE4bk1lc3NhZ2VzID0gZ2V0STE4bk1lc3NhZ2VzKCk7XG5cbmNvbnN0IGdldE1lc3NhZ2U6IEdldE1lc3NhZ2VzPHR5cGVvZiBpMThuTWVzc2FnZXM+ID0gKGtleSkgPT4ge1xuXHRyZXR1cm4gaTE4bk1lc3NhZ2VzW2tleV0gfHwga2V5O1xufTtcblxuZXhwb3J0IHtnZXRNZXNzYWdlfTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEscUJBQXNCQyxRQUFBLGlCQUFBOztBQ0F0QixJQUFBQyxvQkFBdUJELFFBQUEsaUJBQUE7QUFFdkIsSUFBTUUsa0JBQWtCQSxNQUFNO0FBQzdCLFNBQU87SUFDTkMsUUFBQSxHQUFPRixrQkFBQUcsVUFBUztNQUNmQyxJQUFJO01BQ0pDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDRCxvQkFBQSxHQUFtQkwsa0JBQUFHLFVBQVM7TUFDM0JDLElBQUk7TUFDSkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNEQyxTQUFBLEdBQVFOLGtCQUFBRyxVQUFTO01BQ2hCQyxJQUFJO01BQ0pDLElBQUk7TUFDSkUsSUFBSTtJQUNMLENBQUM7RUFDRjtBQUNEO0FBRUEsSUFBTUMsZUFBZVAsZ0JBQWdCO0FBRXJDLElBQU1RLGFBQWdEQyxTQUFRO0FBQzdELFNBQU9GLGFBQWFFLEdBQUcsS0FBS0E7QUFDN0I7O0FEekJBLElBQU1DLGtCQUFtQkMsV0FBbUM7QUFDM0QsTUFBSUM7QUFDSixNQUFJQztBQUVKLFFBQU1DLGVBQWU7SUFDcEJDLFVBQVU7SUFDVkMsVUFBVTtJQUNWQyxRQUFRO0lBQ1JDLE9BQU87SUFDUEMsY0FBYztJQUNkQyxXQUFXO0lBRVhDLFNBQVNBLE1BQU07QUFBQSxVQUFBQztBQUNkLFlBQU1DLGFBQWFaLE1BQU1hLEtBQUssWUFBWTtBQUMxQyxVQUFJLENBQUNELFdBQVdFLFFBQVE7QUFDdkI7TUFDRDtBQUVBLE9BQUFILHNCQUFBQyxXQUNFRyxJQUFJLE9BQU8sRUFDWEMsSUFBSSxDQUFDLE9BQUEsUUFBQUwsd0JBQUEsVUFGUEEsb0JBR0dNO1FBQ0Q7UUFDQ0MsV0FBVTtBQUNWQSxnQkFBTUMsZ0JBQWdCO0FBQ3RCRCxnQkFBTUUsZUFBZTtBQUNyQmpCLHVCQUFha0IsYUFBYTtRQUMzQjs7UUFDQTtNQUNEO0lBQ0Y7SUFFQUEsY0FBY0EsTUFBTTtNQUNuQixNQUFNQyxvQkFBb0JDLEdBQUdDLEdBQUdDLGNBQWM7UUFDckNDO1FBQ0FDO1FBQ0EzQjtRQUVBNEIsWUFNRixDQUNMO1VBQ0NDLE9BQU87VUFDUEMsTUFBTTtVQUNOQyxTQUFTO1VBQ1RDLGFBQWE7UUFDZCxHQUNBO1VBQ0NILE9BQU87VUFDUEMsTUFBTTtVQUNOQyxTQUFTO1VBQ1RDLGFBQWE7UUFDZCxHQUNBO1VBQ0NILE9BQU87VUFDUEMsTUFBTTtVQUNOQyxTQUFTO1VBQ1RDLGFBQWE7UUFDZCxHQUNBO1VBQ0NILE9BQU87VUFDUEMsTUFBTTtVQUNOQyxTQUFTO1VBQ1RDLGFBQWE7UUFDZCxHQUNBO1VBQ0NILE9BQU87VUFDUEMsTUFBTTtVQUNOQyxTQUFTO1VBQ1RDLGFBQWE7UUFDZCxHQUNBO1VBQ0NILE9BQU87VUFDUEMsTUFBTTtVQUNOQyxTQUFTO1VBQ1RDLGFBQWE7UUFDZCxDQUFBO1FBR2VDLGFBQW1CO0FBQ2xDLGNBQUlDO0FBQ0osZ0JBQU1DLGVBQWUsQ0FBQTtBQUVyQixnQkFBTUYsV0FBVztBQUVqQixlQUFLUCxRQUFRLElBQUlILEdBQUdDLEdBQUdZLFlBQVk7WUFDbENDLFVBQVU7WUFDVkMsUUFBUTtVQUNULENBQUM7QUFFRCxlQUFLWCxVQUFVLElBQUlKLEdBQUdDLEdBQUdlLGVBQWU7QUFBQSxjQUFBQyxZQUFBQywyQkFDakIsS0FBS2IsU0FBQSxHQUFBYztBQUFBLGNBQUE7QUFBNUIsaUJBQUFGLFVBQUFHLEVBQUEsR0FBQSxFQUFBRCxRQUFBRixVQUFBSSxFQUFBLEdBQUFDLFFBQXVDO0FBQUEsb0JBQTVCQyxXQUFBSixNQUFBSztBQUNWLG9CQUFNO2dCQUFDaEI7Z0JBQVNGO2dCQUFPQztjQUFJLElBQUlnQjtBQUMvQixrQkFBSWhCLFNBQVMsWUFBWTtBQUN4QjtjQUNEO0FBQ0FJLG9DQUFzQixJQUFJWCxHQUFHQyxHQUFHd0Isb0JBQW9CO2dCQUNuREMsVUFBVWxCO2NBQ1gsQ0FBQztBQUNEZSx1QkFBU0ksU0FBU2hCO0FBQ2xCQywyQkFBYUEsYUFBYXJCLE1BQU0sSUFBSSxJQUFJUyxHQUFHQyxHQUFHMkIsWUFBWWpCLHFCQUFxQjtnQkFDOUVMO2dCQUNBdUIsT0FBTztjQUNSLENBQUM7WUFDRjtVQUFBLFNBQUFDLEtBQUE7QUFBQWIsc0JBQUFjLEVBQUFELEdBQUE7VUFBQSxVQUFBO0FBQUFiLHNCQUFBZSxFQUFBO1VBQUE7QUFDQSxlQUFLNUIsUUFBUTZCLFNBQVNyQixZQUFZO0FBRWxDLGVBQUtULE1BQU0rQixTQUFTQyxPQUFPLEtBQUsvQixRQUFROEIsUUFBUTtBQUNoRCxlQUFLL0IsTUFBTStCLFNBQVNFLFNBQVMsS0FBSzNELEtBQWU7QUFFakQsaUJBQU87UUFDUjtRQUVnQjRELGlCQUFpQkMsUUFBZ0M7QUFDaEUsZ0JBQU1DLE9BQU87QUFDYixjQUFJRCxXQUFXLFNBQVM7QUFDdkIsbUJBQU8sSUFBSXRDLEdBQUdDLEdBQUd1QyxRQUFRLE1BQU07QUFBQSxrQkFBQUMsYUFBQXZCLDJCQUVQLEtBQUtiLFNBQUEsR0FBQXFDO0FBQUEsa0JBQUE7QUFBNUIscUJBQUFELFdBQUFyQixFQUFBLEdBQUEsRUFBQXNCLFNBQUFELFdBQUFwQixFQUFBLEdBQUFDLFFBQXVDO0FBQUEsd0JBQTVCQyxXQUFBbUIsT0FBQWxCO0FBQ1Ysc0JBQUlELFNBQVNoQixTQUFTLGNBQWNnQixTQUFTSSxRQUFRO0FBQ3BEZ0IsMkJBQU9DLGVBQWVoRSxjQUFjMkMsU0FBU2QsYUFBYTtzQkFDekRlLE9BQU9ELFNBQVNJLE9BQU9rQixXQUFXO3NCQUNsQ0MsVUFBVTtvQkFDWCxDQUFDO2tCQUNGO2dCQUNEO2NBQUEsU0FBQWhCLEtBQUE7QUFBQVcsMkJBQUFWLEVBQUFELEdBQUE7Y0FBQSxVQUFBO0FBQUFXLDJCQUFBVCxFQUFBO2NBQUE7QUFJQU8sbUJBQUtRLE1BQU07Z0JBQUNUO2NBQU0sQ0FBQyxFQUFFaEIsS0FBSyxNQUFNO0FBQy9CMUMsNkJBQWFvRSxlQUFlO0FBQzVCcEUsNkJBQWFxRSxrQkFBa0I7QUFDL0JDLHVCQUFPQyxNQUFNO2NBQ2QsQ0FBQztZQUNGLENBQUM7VUFDRjtBQUVBLGlCQUFPLE1BQU1kLGlCQUFpQkMsTUFBTTtRQUNyQztNQUNEO0FBRUF2QyxrQkFBWXFELFNBQVM7UUFDcEIsR0FBR3BELEdBQUdDLEdBQUdDLGNBQWNrRDtNQUN4QjtBQUNBckQsa0JBQVlxRCxPQUFPQyxPQUFPO0FBQzFCdEQsa0JBQVlxRCxPQUFPRSxRQUFRaEYsV0FBVyxpQkFBaUI7QUFDdkR5QixrQkFBWXFELE9BQU9HLFVBQVUsQ0FDNUI7UUFDQ2pCLFFBQVE7UUFDUmhDLE9BQU9oQyxXQUFXLE9BQU87UUFDekJrRixPQUFPLENBQUMsV0FBVyxhQUFhO01BQ2pDLEdBQ0E7UUFDQ2xELE9BQU9oQyxXQUFXLFFBQVE7UUFDMUJrRixPQUFPLENBQUMsUUFBUSxPQUFPO01BQ3hCLENBQUE7QUFHRCxVQUFJLENBQUM5RSxlQUFlO0FBQ25CQSx3QkFBZ0IsSUFBSXNCLEdBQUdDLEdBQUd3RCxjQUFjO0FBQ3hDaEYsY0FBTTBELE9BQU96RCxjQUFjd0QsUUFBUTtNQUNwQztBQUVBLFVBQUksQ0FBQ3ZELGFBQWE7QUFDakJBLHNCQUFjLElBQUlvQixZQUFZO1VBQzdCMkQsTUFBTTtRQUNQLENBQUM7QUFDRGhGLHNCQUFjaUYsV0FBVyxDQUFDaEYsV0FBVyxDQUFDO01BQ3ZDO0FBRUEsV0FBS0QsY0FBY2tGLFdBQVdqRixXQUFXO0lBQzFDO0lBRUFxRSxpQkFBaUI7QUFPaEIsVUFBSSxLQUFLbkUsYUFBYSxPQUFPO0FBQUEsWUFBQWdGLGFBQUEzQywyQkFDSDRDLFNBQVNDLFdBQUEsR0FBQUM7QUFBQSxZQUFBO0FBQWxDLGVBQUFILFdBQUF6QyxFQUFBLEdBQUEsRUFBQTRDLFNBQUFILFdBQUF4QyxFQUFBLEdBQUFDLFFBQStDO0FBQUEsa0JBQXBDMkMsYUFBQUQsT0FBQXhDO0FBQ1Ysa0JBQU07Y0FBQzBDO1lBQUssSUFBSUQ7QUFDaEIsZ0JBQUksQ0FBQ0MsT0FBTztBQUNYO1lBQ0Q7QUFFQSxnQkFBSUEsTUFBTUMsYUFBYUQsTUFBTUMsVUFBVUMsU0FBUyxPQUFPLEdBQUc7QUFDekQsa0JBQUksQ0FBQ0YsTUFBTUMsVUFBVUMsU0FBUyxRQUFRLEdBQUc7QUFDeENILDJCQUFXSSxXQUFXO2NBQ3ZCO1lBQ0QsV0FDQ0gsTUFBTUMsYUFDTkQsTUFBTUMsVUFBVUMsU0FBUyxRQUFRLEtBQ2pDLENBQUNGLE1BQU1DLFVBQVVDLFNBQVMsT0FBTyxHQUNoQztBQUNELGtCQUFJO0FBQ0hGLHNCQUFNSSxhQUFhLE9BQU87Y0FDM0IsUUFBUTtBQUNQSixzQkFBTUMsYUFBYTtjQUNwQjtZQUNEO0FBR0EsZ0JBQUlJO0FBQ0osZ0JBQUk7QUFDSEEsc0JBQVFOLFdBQVdPLFlBQVlQLFdBQVdNO1lBQzNDLFFBQVE7QUFFUEUsaUJBQUdDLElBQUlDLEtBQUssc0VBQXNFO0FBQ2xGO1lBQ0Q7QUFFQSxnQkFBSSxDQUFDSixPQUFPO0FBQ1g7WUFDRDtBQUVBLHFCQUFTSyxJQUFJLEdBQUdBLElBQUlMLE1BQU1oRixRQUFRcUYsS0FBSztBQUN0QyxvQkFBTUMsT0FBT04sTUFBTUssQ0FBQztBQUVwQixrQkFBSUUsV0FBVztBQUNmLGtCQUFJQyxZQUFZO0FBRWhCLGtCQUFJLENBQUNGLE1BQU07QUFDVjtjQUNEO0FBRUEsa0JBQUtBLEtBQTRCdEUsU0FBU3lFLFFBQVFDLGNBQWNKLEtBQUtYLE9BQU87QUFBQSxvQkFBQWdCLGFBQUFoRSwyQkFDbkQyRCxLQUFLWCxLQUFBLEdBQUFpQjtBQUFBLG9CQUFBO0FBQTdCLHVCQUFBRCxXQUFBOUQsRUFBQSxHQUFBLEVBQUErRCxTQUFBRCxXQUFBN0QsRUFBQSxHQUFBQyxRQUFvQztBQUFBLDBCQUF6QjhELFlBQUFELE9BQUEzRDtBQUNWLHdCQUFJNEQsY0FBYyxTQUFTO0FBQzFCTixpQ0FBVztvQkFDWixXQUFXTSxjQUFjLFVBQVU7QUFDbENMLGtDQUFZO29CQUNiO2tCQUNEO2dCQUFBLFNBQUFqRCxLQUFBO0FBQUFvRCw2QkFBQW5ELEVBQUFELEdBQUE7Z0JBQUEsVUFBQTtBQUFBb0QsNkJBQUFsRCxFQUFBO2dCQUFBO2NBQ0QsT0FBTztBQUNOO2NBQ0Q7QUFFQSxrQkFBSThDLFlBQVksQ0FBQ0MsV0FBVztBQUMzQmQsMkJBQVdvQixXQUFXVCxDQUFDO0FBQ3ZCQTtjQUNELFdBQVdDLFFBQVFFLGFBQWEsQ0FBQ0QsVUFBVTtBQUMxQyxvQkFBSTtBQUNIRCx1QkFBS1gsTUFBTUksYUFBYSxPQUFPO2dCQUNoQyxRQUFRO0FBQ1BPLHVCQUFLWCxNQUFNQyxhQUFhO2dCQUN6QjtjQUNEO1lBQ0Q7VUFDRDtRQUFBLFNBQUFyQyxLQUFBO0FBQUErQixxQkFBQTlCLEVBQUFELEdBQUE7UUFBQSxVQUFBO0FBQUErQixxQkFBQTdCLEVBQUE7UUFBQTtNQUNEO0FBRUEsVUFBSXNELGFBQWE7QUFFakIsVUFBSSxLQUFLeEcsVUFBVTtBQUNsQndHLHNCQUFjO01BQ2Y7QUFFQSxVQUFJLEtBQUt2RyxRQUFRO0FBQ2hCdUcsc0JBQWM7TUFDZjtBQUNBLFVBQUksS0FBS3RHLE9BQU87QUFDZnNHLHNCQUFjO01BQ2Y7QUFDQSxVQUFJLEtBQUtyRyxjQUFjO0FBQ3RCcUcsc0JBQWM7TUFDZjtBQUNBLFVBQUksS0FBS3BHLFdBQVc7QUFDbkJvRyxzQkFBYztNQUNmO0FBRUEsVUFBSUEsWUFBWTtBQUFBLFlBQUFDO0FBQ2YsU0FBQUEsd0JBQUF6QixTQUFTMEIsY0FBYyxhQUFhLE9BQUEsUUFBQUQsMEJBQUEsVUFBcENBLHNCQUF1Q0UsT0FBTztBQUM5QyxjQUFNQyxXQUFXNUIsU0FBUzZCLGNBQWMsT0FBTztBQUMvQ0QsaUJBQVNFLEtBQUs7QUFDZEYsaUJBQVN4QixRQUFRO0FBQ2pCd0IsaUJBQVN2RCxPQUFPMkIsU0FBUytCLGVBQWVQLFVBQVUsQ0FBQztBQUNuRHhCLGlCQUFTZ0MsS0FBSzNELE9BQU91RCxRQUFRO01BQzlCO0lBQ0Q7O0lBR0F6QyxtQkFBbUJBLE1BQU07QUFDeEIsWUFBTThDLE9BQU90SCxNQUFNYSxLQUFLLG1CQUFtQjtBQUMzQ3lHLFdBQUtDLEtBQUtDLFVBQVVGLEtBQUtDLEtBQUssQ0FBQyxDQUFDO0lBQ2pDO0VBQ0Q7QUFFQSxTQUFPcEg7QUFDUjtBQUVBLE1BQUEsR0FBS2pCLG1CQUFBdUksU0FBUSxFQUFFQyxLQUFLLFNBQVNDLGlCQUFpQjNILE9BQU87QUFDcEQsTUFBSWdHLEdBQUc0QixPQUFPNUcsSUFBSSxtQkFBbUIsSUFBSSxHQUFHO0FBQzNDO0VBQ0Q7QUFDQSxRQUFNYixlQUFlSixnQkFBZ0JDLEtBQUs7QUFJMUM2SCxhQUFXMUgsYUFBYU8sU0FBUyxDQUFDO0FBQ25DLENBQUM7IiwKICAibmFtZXMiOiBbImltcG9ydF9leHRfZ2FkZ2V0MiIsICJyZXF1aXJlIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgImdldEkxOG5NZXNzYWdlcyIsICJQcmludCIsICJsb2NhbGl6ZSIsICJlbiIsICJqYSIsICJDYW5jZWwiLCAiemgiLCAiaTE4bk1lc3NhZ2VzIiwgImdldE1lc3NhZ2UiLCAia2V5IiwgImdldFByaW50T3B0aW9ucyIsICIkYm9keSIsICJ3aW5kb3dNYW5hZ2VyIiwgInByaW50RGlhbG9nIiwgInByaW50T3B0aW9ucyIsICJlbmhhbmNlZCIsICJub2ltYWdlcyIsICJub3JlZnMiLCAibm90b2MiLCAibm9iYWNrZ3JvdW5kIiwgImJsYWNrdGV4dCIsICJpbnN0YWxsIiwgIl8kcHJpbnRMaW5rJG9mZiRnZXQiLCAiJHByaW50TGluayIsICJmaW5kIiwgImxlbmd0aCIsICJvZmYiLCAiZ2V0IiwgImFkZEV2ZW50TGlzdGVuZXIiLCAiZXZlbnQiLCAic3RvcFByb3BhZ2F0aW9uIiwgInByZXZlbnREZWZhdWx0IiwgImNyZWF0ZVdpbmRvdyIsICJQcmludERpYWxvZyIsICJPTyIsICJ1aSIsICJQcm9jZXNzRGlhbG9nIiwgInBhbmVsIiwgImNvbnRlbnQiLCAicXVlc3Rpb25zIiwgImxhYmVsIiwgInR5cGUiLCAiY2hlY2tlZCIsICJyZXR1cm52YWx1ZSIsICJpbml0aWFsaXplIiwgImNoZWNrYm94SW5wdXRXaWRnZXQiLCAiZmllbGRMYXlvdXRzIiwgIlBhbmVsTGF5b3V0IiwgImV4cGFuZGVkIiwgInBhZGRlZCIsICJGaWVsZHNldExheW91dCIsICJfaXRlcmF0b3IiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAiX3N0ZXAiLCAicyIsICJuIiwgImRvbmUiLCAicXVlc3Rpb24iLCAidmFsdWUiLCAiQ2hlY2tib3hJbnB1dFdpZGdldCIsICJzZWxlY3RlZCIsICJ3aWRnZXQiLCAiRmllbGRMYXlvdXQiLCAiYWxpZ24iLCAiZXJyIiwgImUiLCAiZiIsICJhZGRJdGVtcyIsICIkZWxlbWVudCIsICJhcHBlbmQiLCAiYXBwZW5kVG8iLCAiZ2V0QWN0aW9uUHJvY2VzcyIsICJhY3Rpb24iLCAic2VsZiIsICJQcm9jZXNzIiwgIl9pdGVyYXRvcjIiLCAiX3N0ZXAyIiwgIk9iamVjdCIsICJkZWZpbmVQcm9wZXJ0eSIsICJpc1NlbGVjdGVkIiwgIndyaXRhYmxlIiwgImNsb3NlIiwgImNoYW5nZVByaW50Q1NTIiwgIm90aGVyRW5oYW5jZW1lbnRzIiwgIndpbmRvdyIsICJwcmludCIsICJzdGF0aWMiLCAibmFtZSIsICJ0aXRsZSIsICJhY3Rpb25zIiwgImZsYWdzIiwgIldpbmRvd01hbmFnZXIiLCAic2l6ZSIsICJhZGRXaW5kb3dzIiwgIm9wZW5XaW5kb3ciLCAiX2l0ZXJhdG9yMyIsICJkb2N1bWVudCIsICJzdHlsZVNoZWV0cyIsICJfc3RlcDMiLCAic3R5bGVzaGVldCIsICJtZWRpYSIsICJtZWRpYVRleHQiLCAiaW5jbHVkZXMiLCAiZGlzYWJsZWQiLCAiYXBwZW5kTWVkaXVtIiwgInJ1bGVzIiwgImNzc1J1bGVzIiwgIm13IiwgImxvZyIsICJ3YXJuIiwgImoiLCAicnVsZSIsICJoYXNQcmludCIsICJoYXNTY3JlZW4iLCAiQ1NTUnVsZSIsICJNRURJQV9SVUxFIiwgIl9pdGVyYXRvcjQiLCAiX3N0ZXA0IiwgInJ1bGVNZWRpYSIsICJkZWxldGVSdWxlIiwgInByaW50U3R5bGUiLCAiX2RvY3VtZW50JHF1ZXJ5U2VsZWN0IiwgInF1ZXJ5U2VsZWN0b3IiLCAicmVtb3ZlIiwgInN0eWxlVGFnIiwgImNyZWF0ZUVsZW1lbnQiLCAiaWQiLCAiY3JlYXRlVGV4dE5vZGUiLCAiaGVhZCIsICJsaW5rIiwgInRleHQiLCAiZGVjb2RlVVJJIiwgImdldEJvZHkiLCAidGhlbiIsICJwcmludE9wdGlvbnNMb2FkIiwgImNvbmZpZyIsICJzZXRUaW1lb3V0Il0KfQo=

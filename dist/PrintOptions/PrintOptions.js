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
//! src/PrintOptions/PrintOptions.ts
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1ByaW50T3B0aW9ucy9QcmludE9wdGlvbnMudHMiLCAic3JjL1ByaW50T3B0aW9ucy9tb2R1bGVzL2kxOG4udHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7Z2V0Qm9keX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9tb2R1bGVzL2kxOG4nO1xuXG5jb25zdCBnZXRQcmludE9wdGlvbnMgPSAoJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KSA9PiB7XG5cdGxldCB3aW5kb3dNYW5hZ2VyOiBPTy51aS5XaW5kb3dNYW5hZ2VyO1xuXHRsZXQgcHJpbnREaWFsb2c6IE9PLnVpLlByb2Nlc3NEaWFsb2c7XG5cblx0Y29uc3QgcHJpbnRPcHRpb25zID0ge1xuXHRcdGVuaGFuY2VkOiB0cnVlLFxuXHRcdG5vaW1hZ2VzOiBmYWxzZSxcblx0XHRub3JlZnM6IGZhbHNlLFxuXHRcdG5vdG9jOiBmYWxzZSxcblx0XHRub2JhY2tncm91bmQ6IGZhbHNlLFxuXHRcdGJsYWNrdGV4dDogdHJ1ZSxcblxuXHRcdGluc3RhbGw6ICgpID0+IHtcblx0XHRcdGNvbnN0ICRwcmludExpbmsgPSAkYm9keS5maW5kKCcjdC1wcmludCBhJyk7XG5cdFx0XHRpZiAoISRwcmludExpbmsubGVuZ3RoKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0JHByaW50TGlua1xuXHRcdFx0XHQub2ZmKCdjbGljaycpXG5cdFx0XHRcdC5nZXQoMClcblx0XHRcdFx0Py5hZGRFdmVudExpc3RlbmVyKFxuXHRcdFx0XHRcdCdjbGljaycsXG5cdFx0XHRcdFx0KGV2ZW50KSA9PiB7XG5cdFx0XHRcdFx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHRcdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0XHRwcmludE9wdGlvbnMuY3JlYXRlV2luZG93KCk7XG5cdFx0XHRcdFx0fSwgLy8gVXNlIGNhcHR1cmluZyBwaGFzZSwgdG8gYmVhdCB0aGUgb3RoZXIgY2xpY2sgbGlzdGVuZXJcblx0XHRcdFx0XHR0cnVlXG5cdFx0XHRcdCk7XG5cdFx0fSxcblxuXHRcdGNyZWF0ZVdpbmRvdzogKCkgPT4ge1xuXHRcdFx0Y2xhc3MgUHJpbnREaWFsb2cgZXh0ZW5kcyBPTy51aS5Qcm9jZXNzRGlhbG9nIHtcblx0XHRcdFx0cHJpdmF0ZSBwYW5lbDogT08udWkuUGFuZWxMYXlvdXQgfCB1bmRlZmluZWQ7XG5cdFx0XHRcdHByaXZhdGUgY29udGVudDogT08udWkuRmllbGRzZXRMYXlvdXQgfCB1bmRlZmluZWQ7XG5cdFx0XHRcdHByaXZhdGUgJGJvZHk6IEpRdWVyeSB8IHVuZGVmaW5lZDtcblxuXHRcdFx0XHRwcml2YXRlIHF1ZXN0aW9uczoge1xuXHRcdFx0XHRcdGxhYmVsOiBzdHJpbmc7XG5cdFx0XHRcdFx0dHlwZTogc3RyaW5nO1xuXHRcdFx0XHRcdGNoZWNrZWQ6IGJvb2xlYW47XG5cdFx0XHRcdFx0cmV0dXJudmFsdWU6IHN0cmluZztcblx0XHRcdFx0XHR3aWRnZXQ/OiBPTy51aS5DaGVja2JveElucHV0V2lkZ2V0O1xuXHRcdFx0XHR9W10gPSBbXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0bGFiZWw6ICfpmpDol4/nlYzpnaLlhYPntKAnLFxuXHRcdFx0XHRcdFx0dHlwZTogJ2NoZWNrYm94Jyxcblx0XHRcdFx0XHRcdGNoZWNrZWQ6IHRydWUsXG5cdFx0XHRcdFx0XHRyZXR1cm52YWx1ZTogJ2VuaGFuY2VkJyxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdGxhYmVsOiAn6ZqQ6JeP5Zu+54mHJyxcblx0XHRcdFx0XHRcdHR5cGU6ICdjaGVja2JveCcsXG5cdFx0XHRcdFx0XHRjaGVja2VkOiBmYWxzZSxcblx0XHRcdFx0XHRcdHJldHVybnZhbHVlOiAnbm9pbWFnZXMnLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0bGFiZWw6ICfpmpDol4/lj4LogIPmlofnjK4nLFxuXHRcdFx0XHRcdFx0dHlwZTogJ2NoZWNrYm94Jyxcblx0XHRcdFx0XHRcdGNoZWNrZWQ6IGZhbHNlLFxuXHRcdFx0XHRcdFx0cmV0dXJudmFsdWU6ICdub3JlZnMnLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0bGFiZWw6ICfpmpDol4/nm67lvZUnLFxuXHRcdFx0XHRcdFx0dHlwZTogJ2NoZWNrYm94Jyxcblx0XHRcdFx0XHRcdGNoZWNrZWQ6IGZhbHNlLFxuXHRcdFx0XHRcdFx0cmV0dXJudmFsdWU6ICdub3RvYycsXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRsYWJlbDogJ+enu+mZpOiDjOaZr++8iOaCqOeahOa1j+iniOWZqOaIluWPr+S7peimhuebluacrOiuvue9ru+8iScsXG5cdFx0XHRcdFx0XHR0eXBlOiAnY2hlY2tib3gnLFxuXHRcdFx0XHRcdFx0Y2hlY2tlZDogZmFsc2UsXG5cdFx0XHRcdFx0XHRyZXR1cm52YWx1ZTogJ25vYmFja2dyb3VuZCcsXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRsYWJlbDogJ+W8uuWItuWwhuaJgOacieaWh+Wtl+iuvue9ruS4uum7keiJsicsXG5cdFx0XHRcdFx0XHR0eXBlOiAnY2hlY2tib3gnLFxuXHRcdFx0XHRcdFx0Y2hlY2tlZDogdHJ1ZSxcblx0XHRcdFx0XHRcdHJldHVybnZhbHVlOiAnYmxhY2t0ZXh0Jyxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRdO1xuXG5cdFx0XHRcdHB1YmxpYyBvdmVycmlkZSBpbml0aWFsaXplKCk6IHRoaXMge1xuXHRcdFx0XHRcdGxldCBjaGVja2JveElucHV0V2lkZ2V0O1xuXHRcdFx0XHRcdGNvbnN0IGZpZWxkTGF5b3V0cyA9IFtdO1xuXG5cdFx0XHRcdFx0c3VwZXIuaW5pdGlhbGl6ZSgpO1xuXG5cdFx0XHRcdFx0dGhpcy5wYW5lbCA9IG5ldyBPTy51aS5QYW5lbExheW91dCh7XG5cdFx0XHRcdFx0XHRleHBhbmRlZDogZmFsc2UsXG5cdFx0XHRcdFx0XHRwYWRkZWQ6IHRydWUsXG5cdFx0XHRcdFx0fSk7XG5cblx0XHRcdFx0XHR0aGlzLmNvbnRlbnQgPSBuZXcgT08udWkuRmllbGRzZXRMYXlvdXQoKTtcblx0XHRcdFx0XHRmb3IgKGNvbnN0IHF1ZXN0aW9uIG9mIHRoaXMucXVlc3Rpb25zKSB7XG5cdFx0XHRcdFx0XHRjb25zdCB7Y2hlY2tlZCwgbGFiZWwsIHR5cGV9ID0gcXVlc3Rpb247XG5cdFx0XHRcdFx0XHRpZiAodHlwZSAhPT0gJ2NoZWNrYm94Jykge1xuXHRcdFx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGNoZWNrYm94SW5wdXRXaWRnZXQgPSBuZXcgT08udWkuQ2hlY2tib3hJbnB1dFdpZGdldCh7XG5cdFx0XHRcdFx0XHRcdHNlbGVjdGVkOiBjaGVja2VkLFxuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRxdWVzdGlvbi53aWRnZXQgPSBjaGVja2JveElucHV0V2lkZ2V0O1xuXHRcdFx0XHRcdFx0ZmllbGRMYXlvdXRzW2ZpZWxkTGF5b3V0cy5sZW5ndGhdID0gbmV3IE9PLnVpLkZpZWxkTGF5b3V0KGNoZWNrYm94SW5wdXRXaWRnZXQsIHtcblx0XHRcdFx0XHRcdFx0bGFiZWwsXG5cdFx0XHRcdFx0XHRcdGFsaWduOiAnaW5saW5lJyxcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR0aGlzLmNvbnRlbnQuYWRkSXRlbXMoZmllbGRMYXlvdXRzKTtcblxuXHRcdFx0XHRcdHRoaXMucGFuZWwuJGVsZW1lbnQuYXBwZW5kKHRoaXMuY29udGVudC4kZWxlbWVudCk7XG5cdFx0XHRcdFx0dGhpcy5wYW5lbC4kZWxlbWVudC5hcHBlbmRUbyh0aGlzLiRib2R5IGFzIEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KTtcblxuXHRcdFx0XHRcdHJldHVybiB0aGlzO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0cHVibGljIG92ZXJyaWRlIGdldEFjdGlvblByb2Nlc3MoYWN0aW9uPzogc3RyaW5nKTogT08udWkuUHJvY2VzcyB7XG5cdFx0XHRcdFx0Y29uc3Qgc2VsZiA9IHRoaXM7XG5cdFx0XHRcdFx0aWYgKGFjdGlvbiA9PT0gJ3ByaW50Jykge1xuXHRcdFx0XHRcdFx0cmV0dXJuIG5ldyBPTy51aS5Qcm9jZXNzKCgpID0+IHtcblx0XHRcdFx0XHRcdFx0Ly8gR2V0IHZhbHVlcyBvZiBjaGVja2JveGVzXG5cdFx0XHRcdFx0XHRcdGZvciAoY29uc3QgcXVlc3Rpb24gb2YgdGhpcy5xdWVzdGlvbnMpIHtcblx0XHRcdFx0XHRcdFx0XHRpZiAocXVlc3Rpb24udHlwZSA9PT0gJ2NoZWNrYm94JyAmJiBxdWVzdGlvbi53aWRnZXQpIHtcblx0XHRcdFx0XHRcdFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcmludE9wdGlvbnMsIHF1ZXN0aW9uLnJldHVybnZhbHVlLCB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlOiBxdWVzdGlvbi53aWRnZXQuaXNTZWxlY3RlZCgpLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHR3cml0YWJsZTogdHJ1ZSxcblx0XHRcdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdHZvaWQgc2VsZi5jbG9zZSh7YWN0aW9ufSkuY2xvc2VkLnRoZW4oKCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdHByaW50T3B0aW9ucy5jaGFuZ2VQcmludENTUygpO1xuXHRcdFx0XHRcdFx0XHRcdHByaW50T3B0aW9ucy5vdGhlckVuaGFuY2VtZW50cygpO1xuXHRcdFx0XHRcdFx0XHRcdHdpbmRvdy5wcmludCgpO1xuXHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHJldHVybiBzdXBlci5nZXRBY3Rpb25Qcm9jZXNzKGFjdGlvbik7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Ly8gT08uaW5oZXJpdENsYXNzKFByaW50RGlhbG9nLCBPTy51aS5Qcm9jZXNzRGlhbG9nKTtcblx0XHRcdFByaW50RGlhbG9nLnN0YXRpYyA9IHtcblx0XHRcdFx0Li4uT08udWkuUHJvY2Vzc0RpYWxvZy5zdGF0aWMsXG5cdFx0XHR9O1xuXHRcdFx0UHJpbnREaWFsb2cuc3RhdGljLm5hbWUgPSAnUHJpbnREaWFsb2cnO1xuXHRcdFx0UHJpbnREaWFsb2cuc3RhdGljLnRpdGxlID0gZ2V0TWVzc2FnZSgnUHJpbnQgdGhpcyBwYWdlJyk7XG5cdFx0XHRQcmludERpYWxvZy5zdGF0aWMuYWN0aW9ucyA9IFtcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGFjdGlvbjogJ3ByaW50Jyxcblx0XHRcdFx0XHRsYWJlbDogZ2V0TWVzc2FnZSgnUHJpbnQnKSxcblx0XHRcdFx0XHRmbGFnczogWydwcmltYXJ5JywgJ3Byb2dyZXNzaXZlJ10sXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRsYWJlbDogZ2V0TWVzc2FnZSgnQ2FuY2VsJyksXG5cdFx0XHRcdFx0ZmxhZ3M6IFsnc2FmZScsICdjbG9zZSddLFxuXHRcdFx0XHR9LFxuXHRcdFx0XTtcblxuXHRcdFx0aWYgKCF3aW5kb3dNYW5hZ2VyKSB7XG5cdFx0XHRcdHdpbmRvd01hbmFnZXIgPSBuZXcgT08udWkuV2luZG93TWFuYWdlcigpO1xuXHRcdFx0XHQkYm9keS5hcHBlbmQod2luZG93TWFuYWdlci4kZWxlbWVudCk7XG5cdFx0XHR9XG5cblx0XHRcdGlmICghcHJpbnREaWFsb2cpIHtcblx0XHRcdFx0cHJpbnREaWFsb2cgPSBuZXcgUHJpbnREaWFsb2coe1xuXHRcdFx0XHRcdHNpemU6ICdtZWRpdW0nLFxuXHRcdFx0XHR9KTtcblx0XHRcdFx0d2luZG93TWFuYWdlci5hZGRXaW5kb3dzKFtwcmludERpYWxvZ10pO1xuXHRcdFx0fVxuXG5cdFx0XHR2b2lkIHdpbmRvd01hbmFnZXIub3BlbldpbmRvdyhwcmludERpYWxvZyk7XG5cdFx0fSxcblxuXHRcdGNoYW5nZVByaW50Q1NTKCkge1xuXHRcdFx0LyogSGVyZSB3ZTpcblx0XHRcdCAqIC0gZGlzYWJsZSBzdHlsZXNoZWV0cyB0aGF0IGFyZSBwcmludCBzcGVjaWZpY1xuXHRcdFx0ICogLSBtYWtlIHNjcmVlbiBzcGVjaWZpYyBzdHlsZXNoZWV0cyBhbHNvIGVuYWJsZWQgZm9yIHByaW50IG1lZGl1bVxuXHRcdFx0ICogLSByZW1vdmUgcHJpbnQgc3BlY2lmaWMgc3R5bGVydWxlc1xuXHRcdFx0ICogLSBtYWtlIHNjcmVlbiBzcGVjaWZpYyBzdHlsZXJ1bGVzIGFsc28gZW5hYmxlZCBmb3IgcHJpbnQgbWVkaXVtXG5cdFx0XHQgKi9cblx0XHRcdGlmICh0aGlzLmVuaGFuY2VkID09PSBmYWxzZSkge1xuXHRcdFx0XHRmb3IgKGNvbnN0IHN0eWxlc2hlZXQgb2YgZG9jdW1lbnQuc3R5bGVTaGVldHMpIHtcblx0XHRcdFx0XHRjb25zdCB7bWVkaWF9ID0gc3R5bGVzaGVldDtcblx0XHRcdFx0XHRpZiAoIW1lZGlhKSB7XG5cdFx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRpZiAobWVkaWEubWVkaWFUZXh0ICYmIG1lZGlhLm1lZGlhVGV4dC5pbmNsdWRlcygncHJpbnQnKSkge1xuXHRcdFx0XHRcdFx0aWYgKCFtZWRpYS5tZWRpYVRleHQuaW5jbHVkZXMoJ3NjcmVlbicpKSB7XG5cdFx0XHRcdFx0XHRcdHN0eWxlc2hlZXQuZGlzYWJsZWQgPSB0cnVlO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0gZWxzZSBpZiAoXG5cdFx0XHRcdFx0XHRtZWRpYS5tZWRpYVRleHQgJiZcblx0XHRcdFx0XHRcdG1lZGlhLm1lZGlhVGV4dC5pbmNsdWRlcygnc2NyZWVuJykgJiZcblx0XHRcdFx0XHRcdCFtZWRpYS5tZWRpYVRleHQuaW5jbHVkZXMoJ3ByaW50Jylcblx0XHRcdFx0XHQpIHtcblx0XHRcdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0XHRcdG1lZGlhLmFwcGVuZE1lZGl1bSgncHJpbnQnKTtcblx0XHRcdFx0XHRcdH0gY2F0Y2gge1xuXHRcdFx0XHRcdFx0XHRtZWRpYS5tZWRpYVRleHQgKz0gJyxwcmludCc7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Lyogbm93IHRlc3QgaW5kaXZpZHVhbCBzdHlsZXNoZWV0IHJ1bGVzICovXG5cdFx0XHRcdFx0bGV0IHJ1bGVzO1xuXHRcdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0XHRydWxlcyA9IHN0eWxlc2hlZXQuY3NzUnVsZXMgfHwgc3R5bGVzaGVldC5ydWxlcztcblx0XHRcdFx0XHR9IGNhdGNoIHtcblx0XHRcdFx0XHRcdC8qIENyb3NzIGRvbWFpbiBpc3N1ZS4gKi9cblx0XHRcdFx0XHRcdG13LmxvZy53YXJuKCdOb3QgcG9zc2libGUgdG8gY29ycmVjdCBzdHlsZXNoZWV0IGR1ZSB0byBjcm9zcyBvcmlnaW4gcmVzdHJpY3Rpb25zLicpO1xuXHRcdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0aWYgKCFydWxlcykge1xuXHRcdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Zm9yIChsZXQgaiA9IDA7IGogPCBydWxlcy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRcdFx0Y29uc3QgcnVsZSA9IHJ1bGVzW2pdIGFzIHVua25vd24gYXMgU3R5bGVTaGVldDtcblxuXHRcdFx0XHRcdFx0bGV0IGhhc1ByaW50ID0gZmFsc2U7XG5cdFx0XHRcdFx0XHRsZXQgaGFzU2NyZWVuID0gZmFsc2U7XG5cblx0XHRcdFx0XHRcdGlmICghcnVsZSkge1xuXHRcdFx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0aWYgKChydWxlIGFzIHVua25vd24gYXMgQ1NTUnVsZSkudHlwZSA9PT0gQ1NTUnVsZS5NRURJQV9SVUxFICYmIHJ1bGUubWVkaWEpIHtcblx0XHRcdFx0XHRcdFx0Zm9yIChjb25zdCBydWxlTWVkaWEgb2YgcnVsZS5tZWRpYSkge1xuXHRcdFx0XHRcdFx0XHRcdGlmIChydWxlTWVkaWEgPT09ICdwcmludCcpIHtcblx0XHRcdFx0XHRcdFx0XHRcdGhhc1ByaW50ID0gdHJ1ZTtcblx0XHRcdFx0XHRcdFx0XHR9IGVsc2UgaWYgKHJ1bGVNZWRpYSA9PT0gJ3NjcmVlbicpIHtcblx0XHRcdFx0XHRcdFx0XHRcdGhhc1NjcmVlbiA9IHRydWU7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0aWYgKGhhc1ByaW50ICYmICFoYXNTY3JlZW4pIHtcblx0XHRcdFx0XHRcdFx0c3R5bGVzaGVldC5kZWxldGVSdWxlKGopO1xuXHRcdFx0XHRcdFx0XHRqLS07XG5cdFx0XHRcdFx0XHR9IGVsc2UgaWYgKHJ1bGUgJiYgaGFzU2NyZWVuICYmICFoYXNQcmludCkge1xuXHRcdFx0XHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdFx0XHRcdHJ1bGUubWVkaWEuYXBwZW5kTWVkaXVtKCdwcmludCcpO1xuXHRcdFx0XHRcdFx0XHR9IGNhdGNoIHtcblx0XHRcdFx0XHRcdFx0XHRydWxlLm1lZGlhLm1lZGlhVGV4dCArPSAnLHByaW50Jztcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRsZXQgcHJpbnRTdHlsZSA9ICcnO1xuXHRcdFx0LyogQWRkIGNzcyB0byBoaWRlIGltYWdlcyAqL1xuXHRcdFx0aWYgKHRoaXMubm9pbWFnZXMpIHtcblx0XHRcdFx0cHJpbnRTdHlsZSArPSAnaW1nLC50aHVtYntkaXNwbGF5Om5vbmV9Jztcblx0XHRcdH1cblx0XHRcdC8qIEFkZCBjc3MgdG8gaGlkZSByZWZlcmVuY2VzIG1hcmtlcnMgYW5kIHRoZSByZWZlcmVuY2VzIGxpc3RzICovXG5cdFx0XHRpZiAodGhpcy5ub3JlZnMpIHtcblx0XHRcdFx0cHJpbnRTdHlsZSArPSAnLm13LWhlYWRsaW5lW2lkPVwiUmVmZXJlbmNlc1wiXSxvbC5yZWZlcmVuY2VzLC5yZWZlcmVuY2V7ZGlzcGxheTpub25lfSc7XG5cdFx0XHR9XG5cdFx0XHRpZiAodGhpcy5ub3RvYykge1xuXHRcdFx0XHRwcmludFN0eWxlICs9ICcjdG9jLC50b2N7ZGlzcGxheTpub25lfSc7XG5cdFx0XHR9XG5cdFx0XHRpZiAodGhpcy5ub2JhY2tncm91bmQpIHtcblx0XHRcdFx0cHJpbnRTdHlsZSArPSAnKntiYWNrZ3JvdW5kOm5vbmUgIWltcG9ydGFudH0nO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHRoaXMuYmxhY2t0ZXh0KSB7XG5cdFx0XHRcdHByaW50U3R5bGUgKz0gJyp7Y29sb3I6IzAwMCAhaW1wb3J0YW50fSc7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChwcmludFN0eWxlKSB7XG5cdFx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcmludFN0eWxlJyk/LnJlbW92ZSgpO1xuXHRcdFx0XHRjb25zdCBzdHlsZVRhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG5cdFx0XHRcdHN0eWxlVGFnLmlkID0gJ3ByaW50U3R5bGUnO1xuXHRcdFx0XHRzdHlsZVRhZy5tZWRpYSA9ICdwcmludCc7XG5cdFx0XHRcdHN0eWxlVGFnLmFwcGVuZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShwcmludFN0eWxlKSk7XG5cdFx0XHRcdGRvY3VtZW50LmhlYWQuYXBwZW5kKHN0eWxlVGFnKTtcblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0LyogUmV3cml0ZSB0aGUgXCJyZXRyaWV2ZWQgZnJvbVwiIHVybCB0byBiZSByZWFkYWJsZSAqL1xuXHRcdG90aGVyRW5oYW5jZW1lbnRzOiAoKSA9PiB7XG5cdFx0XHRjb25zdCBsaW5rID0gJGJvZHkuZmluZCgnZGl2LnByaW50Zm9vdGVyIGEnKTtcblx0XHRcdGxpbmsudGV4dChkZWNvZGVVUkkobGluay50ZXh0KCkpKTtcblx0XHR9LFxuXHR9O1xuXG5cdHJldHVybiBwcmludE9wdGlvbnM7XG59O1xuXG52b2lkIGdldEJvZHkoKS50aGVuKGZ1bmN0aW9uIHByaW50T3B0aW9uc0xvYWQoJGJvZHkpIHtcblx0aWYgKG13LmNvbmZpZy5nZXQoJ3dnTmFtZXNwYWNlTnVtYmVyJykgPCAwKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdGNvbnN0IHByaW50T3B0aW9ucyA9IGdldFByaW50T3B0aW9ucygkYm9keSk7XG5cdC8vIFRoaXMgY2FuIGJlIGJlZm9yZSB0aGUgY2xpY2sgbGlzdGVuZXIgYnkgTVcgaXMgaW5zdGFsbGVkLiBJbnN0ZWFkLFxuXHQvLyByZS1hZGQgb3Vyc2VsdmVzIHRvIHRoZSBiYWNrIG9mIHRoZSBkb2N1bWVudC5yZWFkeSBsaXN0XG5cdC8vIHVzZSBhc3luYyB0aW1lb3V0ZSB0byBkbyB0aGlzXG5cdHNldFRpbWVvdXQocHJpbnRPcHRpb25zLmluc3RhbGwsIDApO1xufSk7XG4iLCAiaW1wb3J0IHtsb2NhbGl6ZX0gZnJvbSAnZXh0LmdhZGdldC5pMThuJztcblxuY29uc3QgZ2V0STE4bk1lc3NhZ2VzID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdFByaW50OiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1ByaW50Jyxcblx0XHRcdGphOiAn5Y2w5Yi3Jyxcblx0XHRcdCd6aC1oYW5zJzogJ+aJk+WNsCcsXG5cdFx0XHQnemgtaGFudCc6ICfliJfljbAnLFxuXHRcdH0pLFxuXHRcdCdQcmludCB0aGlzIHBhZ2UnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1ByaW50IHRoaXMgcGFnZScsXG5cdFx0XHRqYTogJ+OBk+OBruODmuODvOOCuOOCkuWNsOWIt+OBqycsXG5cdFx0XHQnemgtaGFucyc6ICfmiZPljbDmraTpobXpnaInLFxuXHRcdFx0J3poLWhhbnQnOiAn5YiX5Y2w5q2k6aCB6Z2iJyxcblx0XHR9KSxcblx0XHRDYW5jZWw6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQ2FuY2VsJyxcblx0XHRcdGphOiAn44Kt44Oj44Oz44K744OrJyxcblx0XHRcdHpoOiAn5Y+W5raIJyxcblx0XHR9KSxcblx0fTtcbn07XG5cbmNvbnN0IGkxOG5NZXNzYWdlcyA9IGdldEkxOG5NZXNzYWdlcygpO1xuXG5jb25zdCBnZXRNZXNzYWdlOiBHZXRNZXNzYWdlczx0eXBlb2YgaTE4bk1lc3NhZ2VzPiA9IChrZXkpID0+IHtcblx0cmV0dXJuIGkxOG5NZXNzYWdlc1trZXldIHx8IGtleTtcbn07XG5cbmV4cG9ydCB7Z2V0TWVzc2FnZX07XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEscUJBQXNCQyxRQUFBLGlCQUFBOztBQ0F0QixJQUFBQyxvQkFBdUJELFFBQUEsaUJBQUE7QUFFdkIsSUFBTUUsa0JBQWtCQSxNQUFNO0FBQzdCLFNBQU87SUFDTkMsUUFBQSxHQUFPRixrQkFBQUcsVUFBUztNQUNmQyxJQUFJO01BQ0pDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDRCxvQkFBQSxHQUFtQkwsa0JBQUFHLFVBQVM7TUFDM0JDLElBQUk7TUFDSkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNEQyxTQUFBLEdBQVFOLGtCQUFBRyxVQUFTO01BQ2hCQyxJQUFJO01BQ0pDLElBQUk7TUFDSkUsSUFBSTtJQUNMLENBQUM7RUFDRjtBQUNEO0FBRUEsSUFBTUMsZUFBZVAsZ0JBQWdCO0FBRXJDLElBQU1RLGFBQWdEQyxTQUFRO0FBQzdELFNBQU9GLGFBQWFFLEdBQUcsS0FBS0E7QUFDN0I7O0FEekJBLElBQU1DLGtCQUFtQkMsV0FBbUM7QUFDM0QsTUFBSUM7QUFDSixNQUFJQztBQUVKLFFBQU1DLGVBQWU7SUFDcEJDLFVBQVU7SUFDVkMsVUFBVTtJQUNWQyxRQUFRO0lBQ1JDLE9BQU87SUFDUEMsY0FBYztJQUNkQyxXQUFXO0lBRVhDLFNBQVNBLE1BQU07QUFBQSxVQUFBQztBQUNkLFlBQU1DLGFBQWFaLE1BQU1hLEtBQUssWUFBWTtBQUMxQyxVQUFJLENBQUNELFdBQVdFLFFBQVE7QUFDdkI7TUFDRDtBQUVBLE9BQUFILHNCQUFBQyxXQUNFRyxJQUFJLE9BQU8sRUFDWEMsSUFBSSxDQUFDLE9BQUEsUUFBQUwsd0JBQUEsVUFGUEEsb0JBR0dNO1FBQ0Q7UUFDQ0MsV0FBVTtBQUNWQSxnQkFBTUMsZ0JBQWdCO0FBQ3RCRCxnQkFBTUUsZUFBZTtBQUNyQmpCLHVCQUFha0IsYUFBYTtRQUMzQjs7UUFDQTtNQUNEO0lBQ0Y7SUFFQUEsY0FBY0EsTUFBTTtNQUNuQixNQUFNQyxvQkFBb0JDLEdBQUdDLEdBQUdDLGNBQWM7UUFDckNDO1FBQ0FDO1FBQ0EzQjtRQUVBNEIsWUFNRixDQUNMO1VBQ0NDLE9BQU87VUFDUEMsTUFBTTtVQUNOQyxTQUFTO1VBQ1RDLGFBQWE7UUFDZCxHQUNBO1VBQ0NILE9BQU87VUFDUEMsTUFBTTtVQUNOQyxTQUFTO1VBQ1RDLGFBQWE7UUFDZCxHQUNBO1VBQ0NILE9BQU87VUFDUEMsTUFBTTtVQUNOQyxTQUFTO1VBQ1RDLGFBQWE7UUFDZCxHQUNBO1VBQ0NILE9BQU87VUFDUEMsTUFBTTtVQUNOQyxTQUFTO1VBQ1RDLGFBQWE7UUFDZCxHQUNBO1VBQ0NILE9BQU87VUFDUEMsTUFBTTtVQUNOQyxTQUFTO1VBQ1RDLGFBQWE7UUFDZCxHQUNBO1VBQ0NILE9BQU87VUFDUEMsTUFBTTtVQUNOQyxTQUFTO1VBQ1RDLGFBQWE7UUFDZCxDQUFBO1FBR2VDLGFBQW1CO0FBQ2xDLGNBQUlDO0FBQ0osZ0JBQU1DLGVBQWUsQ0FBQTtBQUVyQixnQkFBTUYsV0FBVztBQUVqQixlQUFLUCxRQUFRLElBQUlILEdBQUdDLEdBQUdZLFlBQVk7WUFDbENDLFVBQVU7WUFDVkMsUUFBUTtVQUNULENBQUM7QUFFRCxlQUFLWCxVQUFVLElBQUlKLEdBQUdDLEdBQUdlLGVBQWU7QUFBQSxjQUFBQyxZQUFBQywyQkFDakIsS0FBS2IsU0FBQSxHQUFBYztBQUFBLGNBQUE7QUFBNUIsaUJBQUFGLFVBQUFHLEVBQUEsR0FBQSxFQUFBRCxRQUFBRixVQUFBSSxFQUFBLEdBQUFDLFFBQXVDO0FBQUEsb0JBQTVCQyxXQUFBSixNQUFBSztBQUNWLG9CQUFNO2dCQUFDaEI7Z0JBQVNGO2dCQUFPQztjQUFJLElBQUlnQjtBQUMvQixrQkFBSWhCLFNBQVMsWUFBWTtBQUN4QjtjQUNEO0FBQ0FJLG9DQUFzQixJQUFJWCxHQUFHQyxHQUFHd0Isb0JBQW9CO2dCQUNuREMsVUFBVWxCO2NBQ1gsQ0FBQztBQUNEZSx1QkFBU0ksU0FBU2hCO0FBQ2xCQywyQkFBYUEsYUFBYXJCLE1BQU0sSUFBSSxJQUFJUyxHQUFHQyxHQUFHMkIsWUFBWWpCLHFCQUFxQjtnQkFDOUVMO2dCQUNBdUIsT0FBTztjQUNSLENBQUM7WUFDRjtVQUFBLFNBQUFDLEtBQUE7QUFBQWIsc0JBQUFjLEVBQUFELEdBQUE7VUFBQSxVQUFBO0FBQUFiLHNCQUFBZSxFQUFBO1VBQUE7QUFDQSxlQUFLNUIsUUFBUTZCLFNBQVNyQixZQUFZO0FBRWxDLGVBQUtULE1BQU0rQixTQUFTQyxPQUFPLEtBQUsvQixRQUFROEIsUUFBUTtBQUNoRCxlQUFLL0IsTUFBTStCLFNBQVNFLFNBQVMsS0FBSzNELEtBQWdDO0FBRWxFLGlCQUFPO1FBQ1I7UUFFZ0I0RCxpQkFBaUJDLFFBQWdDO0FBQ2hFLGdCQUFNQyxPQUFPO0FBQ2IsY0FBSUQsV0FBVyxTQUFTO0FBQ3ZCLG1CQUFPLElBQUl0QyxHQUFHQyxHQUFHdUMsUUFBUSxNQUFNO0FBQUEsa0JBQUFDLGFBQUF2QiwyQkFFUCxLQUFLYixTQUFBLEdBQUFxQztBQUFBLGtCQUFBO0FBQTVCLHFCQUFBRCxXQUFBckIsRUFBQSxHQUFBLEVBQUFzQixTQUFBRCxXQUFBcEIsRUFBQSxHQUFBQyxRQUF1QztBQUFBLHdCQUE1QkMsV0FBQW1CLE9BQUFsQjtBQUNWLHNCQUFJRCxTQUFTaEIsU0FBUyxjQUFjZ0IsU0FBU0ksUUFBUTtBQUNwRGdCLDJCQUFPQyxlQUFlaEUsY0FBYzJDLFNBQVNkLGFBQWE7c0JBQ3pEZSxPQUFPRCxTQUFTSSxPQUFPa0IsV0FBVztzQkFDbENDLFVBQVU7b0JBQ1gsQ0FBQztrQkFDRjtnQkFDRDtjQUFBLFNBQUFoQixLQUFBO0FBQUFXLDJCQUFBVixFQUFBRCxHQUFBO2NBQUEsVUFBQTtBQUFBVywyQkFBQVQsRUFBQTtjQUFBO0FBRUEsbUJBQUtPLEtBQUtRLE1BQU07Z0JBQUNUO2NBQU0sQ0FBQyxFQUFFVSxPQUFPQyxLQUFLLE1BQU07QUFDM0NyRSw2QkFBYXNFLGVBQWU7QUFDNUJ0RSw2QkFBYXVFLGtCQUFrQjtBQUMvQkMsdUJBQU9DLE1BQU07Y0FDZCxDQUFDO1lBQ0YsQ0FBQztVQUNGO0FBRUEsaUJBQU8sTUFBTWhCLGlCQUFpQkMsTUFBTTtRQUNyQztNQUNEO0FBR0F2QyxrQkFBWXVELFNBQVM7UUFDcEIsR0FBR3RELEdBQUdDLEdBQUdDLGNBQWNvRDtNQUN4QjtBQUNBdkQsa0JBQVl1RCxPQUFPQyxPQUFPO0FBQzFCeEQsa0JBQVl1RCxPQUFPRSxRQUFRbEYsV0FBVyxpQkFBaUI7QUFDdkR5QixrQkFBWXVELE9BQU9HLFVBQVUsQ0FDNUI7UUFDQ25CLFFBQVE7UUFDUmhDLE9BQU9oQyxXQUFXLE9BQU87UUFDekJvRixPQUFPLENBQUMsV0FBVyxhQUFhO01BQ2pDLEdBQ0E7UUFDQ3BELE9BQU9oQyxXQUFXLFFBQVE7UUFDMUJvRixPQUFPLENBQUMsUUFBUSxPQUFPO01BQ3hCLENBQUE7QUFHRCxVQUFJLENBQUNoRixlQUFlO0FBQ25CQSx3QkFBZ0IsSUFBSXNCLEdBQUdDLEdBQUcwRCxjQUFjO0FBQ3hDbEYsY0FBTTBELE9BQU96RCxjQUFjd0QsUUFBUTtNQUNwQztBQUVBLFVBQUksQ0FBQ3ZELGFBQWE7QUFDakJBLHNCQUFjLElBQUlvQixZQUFZO1VBQzdCNkQsTUFBTTtRQUNQLENBQUM7QUFDRGxGLHNCQUFjbUYsV0FBVyxDQUFDbEYsV0FBVyxDQUFDO01BQ3ZDO0FBRUEsV0FBS0QsY0FBY29GLFdBQVduRixXQUFXO0lBQzFDO0lBRUF1RSxpQkFBaUI7QUFPaEIsVUFBSSxLQUFLckUsYUFBYSxPQUFPO0FBQUEsWUFBQWtGLGFBQUE3QywyQkFDSDhDLFNBQVNDLFdBQUEsR0FBQUM7QUFBQSxZQUFBO0FBQWxDLGVBQUFILFdBQUEzQyxFQUFBLEdBQUEsRUFBQThDLFNBQUFILFdBQUExQyxFQUFBLEdBQUFDLFFBQStDO0FBQUEsa0JBQXBDNkMsYUFBQUQsT0FBQTFDO0FBQ1Ysa0JBQU07Y0FBQzRDO1lBQUssSUFBSUQ7QUFDaEIsZ0JBQUksQ0FBQ0MsT0FBTztBQUNYO1lBQ0Q7QUFFQSxnQkFBSUEsTUFBTUMsYUFBYUQsTUFBTUMsVUFBVUMsU0FBUyxPQUFPLEdBQUc7QUFDekQsa0JBQUksQ0FBQ0YsTUFBTUMsVUFBVUMsU0FBUyxRQUFRLEdBQUc7QUFDeENILDJCQUFXSSxXQUFXO2NBQ3ZCO1lBQ0QsV0FDQ0gsTUFBTUMsYUFDTkQsTUFBTUMsVUFBVUMsU0FBUyxRQUFRLEtBQ2pDLENBQUNGLE1BQU1DLFVBQVVDLFNBQVMsT0FBTyxHQUNoQztBQUNELGtCQUFJO0FBQ0hGLHNCQUFNSSxhQUFhLE9BQU87Y0FDM0IsUUFBUTtBQUNQSixzQkFBTUMsYUFBYTtjQUNwQjtZQUNEO0FBR0EsZ0JBQUlJO0FBQ0osZ0JBQUk7QUFDSEEsc0JBQVFOLFdBQVdPLFlBQVlQLFdBQVdNO1lBQzNDLFFBQVE7QUFFUEUsaUJBQUdDLElBQUlDLEtBQUssc0VBQXNFO0FBQ2xGO1lBQ0Q7QUFFQSxnQkFBSSxDQUFDSixPQUFPO0FBQ1g7WUFDRDtBQUVBLHFCQUFTSyxJQUFJLEdBQUdBLElBQUlMLE1BQU1sRixRQUFRdUYsS0FBSztBQUN0QyxvQkFBTUMsT0FBT04sTUFBTUssQ0FBQztBQUVwQixrQkFBSUUsV0FBVztBQUNmLGtCQUFJQyxZQUFZO0FBRWhCLGtCQUFJLENBQUNGLE1BQU07QUFDVjtjQUNEO0FBRUEsa0JBQUtBLEtBQTRCeEUsU0FBUzJFLFFBQVFDLGNBQWNKLEtBQUtYLE9BQU87QUFBQSxvQkFBQWdCLGFBQUFsRSwyQkFDbkQ2RCxLQUFLWCxLQUFBLEdBQUFpQjtBQUFBLG9CQUFBO0FBQTdCLHVCQUFBRCxXQUFBaEUsRUFBQSxHQUFBLEVBQUFpRSxTQUFBRCxXQUFBL0QsRUFBQSxHQUFBQyxRQUFvQztBQUFBLDBCQUF6QmdFLFlBQUFELE9BQUE3RDtBQUNWLHdCQUFJOEQsY0FBYyxTQUFTO0FBQzFCTixpQ0FBVztvQkFDWixXQUFXTSxjQUFjLFVBQVU7QUFDbENMLGtDQUFZO29CQUNiO2tCQUNEO2dCQUFBLFNBQUFuRCxLQUFBO0FBQUFzRCw2QkFBQXJELEVBQUFELEdBQUE7Z0JBQUEsVUFBQTtBQUFBc0QsNkJBQUFwRCxFQUFBO2dCQUFBO2NBQ0QsT0FBTztBQUNOO2NBQ0Q7QUFFQSxrQkFBSWdELFlBQVksQ0FBQ0MsV0FBVztBQUMzQmQsMkJBQVdvQixXQUFXVCxDQUFDO0FBQ3ZCQTtjQUNELFdBQVdDLFFBQVFFLGFBQWEsQ0FBQ0QsVUFBVTtBQUMxQyxvQkFBSTtBQUNIRCx1QkFBS1gsTUFBTUksYUFBYSxPQUFPO2dCQUNoQyxRQUFRO0FBQ1BPLHVCQUFLWCxNQUFNQyxhQUFhO2dCQUN6QjtjQUNEO1lBQ0Q7VUFDRDtRQUFBLFNBQUF2QyxLQUFBO0FBQUFpQyxxQkFBQWhDLEVBQUFELEdBQUE7UUFBQSxVQUFBO0FBQUFpQyxxQkFBQS9CLEVBQUE7UUFBQTtNQUNEO0FBRUEsVUFBSXdELGFBQWE7QUFFakIsVUFBSSxLQUFLMUcsVUFBVTtBQUNsQjBHLHNCQUFjO01BQ2Y7QUFFQSxVQUFJLEtBQUt6RyxRQUFRO0FBQ2hCeUcsc0JBQWM7TUFDZjtBQUNBLFVBQUksS0FBS3hHLE9BQU87QUFDZndHLHNCQUFjO01BQ2Y7QUFDQSxVQUFJLEtBQUt2RyxjQUFjO0FBQ3RCdUcsc0JBQWM7TUFDZjtBQUNBLFVBQUksS0FBS3RHLFdBQVc7QUFDbkJzRyxzQkFBYztNQUNmO0FBRUEsVUFBSUEsWUFBWTtBQUFBLFlBQUFDO0FBQ2YsU0FBQUEsd0JBQUF6QixTQUFTMEIsY0FBYyxhQUFhLE9BQUEsUUFBQUQsMEJBQUEsVUFBcENBLHNCQUF1Q0UsT0FBTztBQUM5QyxjQUFNQyxXQUFXNUIsU0FBUzZCLGNBQWMsT0FBTztBQUMvQ0QsaUJBQVNFLEtBQUs7QUFDZEYsaUJBQVN4QixRQUFRO0FBQ2pCd0IsaUJBQVN6RCxPQUFPNkIsU0FBUytCLGVBQWVQLFVBQVUsQ0FBQztBQUNuRHhCLGlCQUFTZ0MsS0FBSzdELE9BQU95RCxRQUFRO01BQzlCO0lBQ0Q7O0lBR0F6QyxtQkFBbUJBLE1BQU07QUFDeEIsWUFBTThDLE9BQU94SCxNQUFNYSxLQUFLLG1CQUFtQjtBQUMzQzJHLFdBQUtDLEtBQUtDLFVBQVVGLEtBQUtDLEtBQUssQ0FBQyxDQUFDO0lBQ2pDO0VBQ0Q7QUFFQSxTQUFPdEg7QUFDUjtBQUVBLE1BQUEsR0FBS2pCLG1CQUFBeUksU0FBUSxFQUFFbkQsS0FBSyxTQUFTb0QsaUJBQWlCNUgsT0FBTztBQUNwRCxNQUFJa0csR0FBRzJCLE9BQU83RyxJQUFJLG1CQUFtQixJQUFJLEdBQUc7QUFDM0M7RUFDRDtBQUNBLFFBQU1iLGVBQWVKLGdCQUFnQkMsS0FBSztBQUkxQzhILGFBQVczSCxhQUFhTyxTQUFTLENBQUM7QUFDbkMsQ0FBQzsiLAogICJuYW1lcyI6IFsiaW1wb3J0X2V4dF9nYWRnZXQyIiwgInJlcXVpcmUiLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAiZ2V0STE4bk1lc3NhZ2VzIiwgIlByaW50IiwgImxvY2FsaXplIiwgImVuIiwgImphIiwgIkNhbmNlbCIsICJ6aCIsICJpMThuTWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAiZ2V0UHJpbnRPcHRpb25zIiwgIiRib2R5IiwgIndpbmRvd01hbmFnZXIiLCAicHJpbnREaWFsb2ciLCAicHJpbnRPcHRpb25zIiwgImVuaGFuY2VkIiwgIm5vaW1hZ2VzIiwgIm5vcmVmcyIsICJub3RvYyIsICJub2JhY2tncm91bmQiLCAiYmxhY2t0ZXh0IiwgImluc3RhbGwiLCAiXyRwcmludExpbmskb2ZmJGdldCIsICIkcHJpbnRMaW5rIiwgImZpbmQiLCAibGVuZ3RoIiwgIm9mZiIsICJnZXQiLCAiYWRkRXZlbnRMaXN0ZW5lciIsICJldmVudCIsICJzdG9wUHJvcGFnYXRpb24iLCAicHJldmVudERlZmF1bHQiLCAiY3JlYXRlV2luZG93IiwgIlByaW50RGlhbG9nIiwgIk9PIiwgInVpIiwgIlByb2Nlc3NEaWFsb2ciLCAicGFuZWwiLCAiY29udGVudCIsICJxdWVzdGlvbnMiLCAibGFiZWwiLCAidHlwZSIsICJjaGVja2VkIiwgInJldHVybnZhbHVlIiwgImluaXRpYWxpemUiLCAiY2hlY2tib3hJbnB1dFdpZGdldCIsICJmaWVsZExheW91dHMiLCAiUGFuZWxMYXlvdXQiLCAiZXhwYW5kZWQiLCAicGFkZGVkIiwgIkZpZWxkc2V0TGF5b3V0IiwgIl9pdGVyYXRvciIsICJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsICJfc3RlcCIsICJzIiwgIm4iLCAiZG9uZSIsICJxdWVzdGlvbiIsICJ2YWx1ZSIsICJDaGVja2JveElucHV0V2lkZ2V0IiwgInNlbGVjdGVkIiwgIndpZGdldCIsICJGaWVsZExheW91dCIsICJhbGlnbiIsICJlcnIiLCAiZSIsICJmIiwgImFkZEl0ZW1zIiwgIiRlbGVtZW50IiwgImFwcGVuZCIsICJhcHBlbmRUbyIsICJnZXRBY3Rpb25Qcm9jZXNzIiwgImFjdGlvbiIsICJzZWxmIiwgIlByb2Nlc3MiLCAiX2l0ZXJhdG9yMiIsICJfc3RlcDIiLCAiT2JqZWN0IiwgImRlZmluZVByb3BlcnR5IiwgImlzU2VsZWN0ZWQiLCAid3JpdGFibGUiLCAiY2xvc2UiLCAiY2xvc2VkIiwgInRoZW4iLCAiY2hhbmdlUHJpbnRDU1MiLCAib3RoZXJFbmhhbmNlbWVudHMiLCAid2luZG93IiwgInByaW50IiwgInN0YXRpYyIsICJuYW1lIiwgInRpdGxlIiwgImFjdGlvbnMiLCAiZmxhZ3MiLCAiV2luZG93TWFuYWdlciIsICJzaXplIiwgImFkZFdpbmRvd3MiLCAib3BlbldpbmRvdyIsICJfaXRlcmF0b3IzIiwgImRvY3VtZW50IiwgInN0eWxlU2hlZXRzIiwgIl9zdGVwMyIsICJzdHlsZXNoZWV0IiwgIm1lZGlhIiwgIm1lZGlhVGV4dCIsICJpbmNsdWRlcyIsICJkaXNhYmxlZCIsICJhcHBlbmRNZWRpdW0iLCAicnVsZXMiLCAiY3NzUnVsZXMiLCAibXciLCAibG9nIiwgIndhcm4iLCAiaiIsICJydWxlIiwgImhhc1ByaW50IiwgImhhc1NjcmVlbiIsICJDU1NSdWxlIiwgIk1FRElBX1JVTEUiLCAiX2l0ZXJhdG9yNCIsICJfc3RlcDQiLCAicnVsZU1lZGlhIiwgImRlbGV0ZVJ1bGUiLCAicHJpbnRTdHlsZSIsICJfZG9jdW1lbnQkcXVlcnlTZWxlY3QiLCAicXVlcnlTZWxlY3RvciIsICJyZW1vdmUiLCAic3R5bGVUYWciLCAiY3JlYXRlRWxlbWVudCIsICJpZCIsICJjcmVhdGVUZXh0Tm9kZSIsICJoZWFkIiwgImxpbmsiLCAidGV4dCIsICJkZWNvZGVVUkkiLCAiZ2V0Qm9keSIsICJwcmludE9wdGlvbnNMb2FkIiwgImNvbmZpZyIsICJzZXRUaW1lb3V0Il0KfQo=

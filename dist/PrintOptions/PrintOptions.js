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
        // @ts-expect-error TS2503
        panel;
        // @ts-expect-error TS2503
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
        // @ts-expect-error TS4112
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
        // @ts-expect-error TS2503
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
        // @ts-expect-error TS2304
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1ByaW50T3B0aW9ucy9QcmludE9wdGlvbnMudHMiLCAic3JjL1ByaW50T3B0aW9ucy9tb2R1bGVzL2kxOG4udHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7Z2V0Qm9keX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9tb2R1bGVzL2kxOG4nO1xuXG5jb25zdCBnZXRQcmludE9wdGlvbnMgPSAoJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KSA9PiB7XG5cdC8vIEB0cy1leHBlY3QtZXJyb3IgVFMyNTAzXG5cdGxldCB3aW5kb3dNYW5hZ2VyOiBPTy51aS5XaW5kb3dNYW5hZ2VyO1xuXHQvLyBAdHMtZXhwZWN0LWVycm9yIFRTMjUwM1xuXHRsZXQgcHJpbnREaWFsb2c6IE9PLnVpLlByb2Nlc3NEaWFsb2c7XG5cblx0Y29uc3QgcHJpbnRPcHRpb25zID0ge1xuXHRcdGVuaGFuY2VkOiB0cnVlLFxuXHRcdG5vaW1hZ2VzOiBmYWxzZSxcblx0XHRub3JlZnM6IGZhbHNlLFxuXHRcdG5vdG9jOiBmYWxzZSxcblx0XHRub2JhY2tncm91bmQ6IGZhbHNlLFxuXHRcdGJsYWNrdGV4dDogdHJ1ZSxcblxuXHRcdGluc3RhbGw6ICgpID0+IHtcblx0XHRcdGNvbnN0ICRwcmludExpbmsgPSAkYm9keS5maW5kKCcjdC1wcmludCBhJyk7XG5cdFx0XHRpZiAoISRwcmludExpbmsubGVuZ3RoKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0JHByaW50TGlua1xuXHRcdFx0XHQub2ZmKCdjbGljaycpXG5cdFx0XHRcdC5nZXQoMClcblx0XHRcdFx0Py5hZGRFdmVudExpc3RlbmVyKFxuXHRcdFx0XHRcdCdjbGljaycsXG5cdFx0XHRcdFx0KGV2ZW50KSA9PiB7XG5cdFx0XHRcdFx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHRcdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0XHRwcmludE9wdGlvbnMuY3JlYXRlV2luZG93KCk7XG5cdFx0XHRcdFx0fSwgLy8gVXNlIGNhcHR1cmluZyBwaGFzZSwgdG8gYmVhdCB0aGUgb3RoZXIgY2xpY2sgbGlzdGVuZXJcblx0XHRcdFx0XHR0cnVlXG5cdFx0XHRcdCk7XG5cdFx0fSxcblxuXHRcdGNyZWF0ZVdpbmRvdzogKCkgPT4ge1xuXHRcdFx0Ly8gQHRzLWV4cGVjdC1lcnJvciBUUzI1MDNcblx0XHRcdGNsYXNzIFByaW50RGlhbG9nIGV4dGVuZHMgT08udWkuUHJvY2Vzc0RpYWxvZyB7XG5cdFx0XHRcdC8vIEB0cy1leHBlY3QtZXJyb3IgVFMyNTAzXG5cdFx0XHRcdHByaXZhdGUgcGFuZWw6IE9PLnVpLlBhbmVsTGF5b3V0IHwgdW5kZWZpbmVkO1xuXHRcdFx0XHQvLyBAdHMtZXhwZWN0LWVycm9yIFRTMjUwM1xuXHRcdFx0XHRwcml2YXRlIGNvbnRlbnQ6IE9PLnVpLkZpZWxkc2V0TGF5b3V0IHwgdW5kZWZpbmVkO1xuXHRcdFx0XHRwcml2YXRlICRib2R5OiBKUXVlcnkgfCB1bmRlZmluZWQ7XG5cblx0XHRcdFx0cHJpdmF0ZSBxdWVzdGlvbnM6IHtcblx0XHRcdFx0XHRsYWJlbDogc3RyaW5nO1xuXHRcdFx0XHRcdHR5cGU6IHN0cmluZztcblx0XHRcdFx0XHRjaGVja2VkOiBib29sZWFuO1xuXHRcdFx0XHRcdHJldHVybnZhbHVlOiBzdHJpbmc7XG5cdFx0XHRcdFx0Ly8gQHRzLWV4cGVjdC1lcnJvciBUUzI1MDNcblx0XHRcdFx0XHR3aWRnZXQ/OiBPTy51aS5DaGVja2JveElucHV0V2lkZ2V0O1xuXHRcdFx0XHR9W10gPSBbXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0bGFiZWw6ICfpmpDol4/nlYzpnaLlhYPntKAnLFxuXHRcdFx0XHRcdFx0dHlwZTogJ2NoZWNrYm94Jyxcblx0XHRcdFx0XHRcdGNoZWNrZWQ6IHRydWUsXG5cdFx0XHRcdFx0XHRyZXR1cm52YWx1ZTogJ2VuaGFuY2VkJyxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdGxhYmVsOiAn6ZqQ6JeP5Zu+54mHJyxcblx0XHRcdFx0XHRcdHR5cGU6ICdjaGVja2JveCcsXG5cdFx0XHRcdFx0XHRjaGVja2VkOiBmYWxzZSxcblx0XHRcdFx0XHRcdHJldHVybnZhbHVlOiAnbm9pbWFnZXMnLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0bGFiZWw6ICfpmpDol4/lj4LogIPmlofnjK4nLFxuXHRcdFx0XHRcdFx0dHlwZTogJ2NoZWNrYm94Jyxcblx0XHRcdFx0XHRcdGNoZWNrZWQ6IGZhbHNlLFxuXHRcdFx0XHRcdFx0cmV0dXJudmFsdWU6ICdub3JlZnMnLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0bGFiZWw6ICfpmpDol4/nm67lvZUnLFxuXHRcdFx0XHRcdFx0dHlwZTogJ2NoZWNrYm94Jyxcblx0XHRcdFx0XHRcdGNoZWNrZWQ6IGZhbHNlLFxuXHRcdFx0XHRcdFx0cmV0dXJudmFsdWU6ICdub3RvYycsXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRsYWJlbDogJ+enu+mZpOiDjOaZr++8iOaCqOeahOa1j+iniOWZqOaIluWPr+S7peimhuebluacrOiuvue9ru+8iScsXG5cdFx0XHRcdFx0XHR0eXBlOiAnY2hlY2tib3gnLFxuXHRcdFx0XHRcdFx0Y2hlY2tlZDogZmFsc2UsXG5cdFx0XHRcdFx0XHRyZXR1cm52YWx1ZTogJ25vYmFja2dyb3VuZCcsXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRsYWJlbDogJ+W8uuWItuWwhuaJgOacieaWh+Wtl+iuvue9ruS4uum7keiJsicsXG5cdFx0XHRcdFx0XHR0eXBlOiAnY2hlY2tib3gnLFxuXHRcdFx0XHRcdFx0Y2hlY2tlZDogdHJ1ZSxcblx0XHRcdFx0XHRcdHJldHVybnZhbHVlOiAnYmxhY2t0ZXh0Jyxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRdO1xuXG5cdFx0XHRcdC8vIEB0cy1leHBlY3QtZXJyb3IgVFM0MTEyXG5cdFx0XHRcdHB1YmxpYyBvdmVycmlkZSBpbml0aWFsaXplKCk6IHRoaXMge1xuXHRcdFx0XHRcdGxldCBjaGVja2JveElucHV0V2lkZ2V0O1xuXHRcdFx0XHRcdGNvbnN0IGZpZWxkTGF5b3V0cyA9IFtdO1xuXG5cdFx0XHRcdFx0c3VwZXIuaW5pdGlhbGl6ZSgpO1xuXG5cdFx0XHRcdFx0Ly8gQHRzLWV4cGVjdC1lcnJvciBUUzIzMDRcblx0XHRcdFx0XHR0aGlzLnBhbmVsID0gbmV3IE9PLnVpLlBhbmVsTGF5b3V0KHtcblx0XHRcdFx0XHRcdGV4cGFuZGVkOiBmYWxzZSxcblx0XHRcdFx0XHRcdHBhZGRlZDogdHJ1ZSxcblx0XHRcdFx0XHR9KTtcblxuXHRcdFx0XHRcdC8vIEB0cy1leHBlY3QtZXJyb3IgVFMyMzA0XG5cdFx0XHRcdFx0dGhpcy5jb250ZW50ID0gbmV3IE9PLnVpLkZpZWxkc2V0TGF5b3V0KCk7XG5cdFx0XHRcdFx0Zm9yIChjb25zdCBxdWVzdGlvbiBvZiB0aGlzLnF1ZXN0aW9ucykge1xuXHRcdFx0XHRcdFx0Y29uc3Qge2NoZWNrZWQsIGxhYmVsLCB0eXBlfSA9IHF1ZXN0aW9uO1xuXHRcdFx0XHRcdFx0aWYgKHR5cGUgIT09ICdjaGVja2JveCcpIHtcblx0XHRcdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQvLyBAdHMtZXhwZWN0LWVycm9yIFRTMjMwNFxuXHRcdFx0XHRcdFx0Y2hlY2tib3hJbnB1dFdpZGdldCA9IG5ldyBPTy51aS5DaGVja2JveElucHV0V2lkZ2V0KHtcblx0XHRcdFx0XHRcdFx0c2VsZWN0ZWQ6IGNoZWNrZWQsXG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdHF1ZXN0aW9uLndpZGdldCA9IGNoZWNrYm94SW5wdXRXaWRnZXQ7XG5cdFx0XHRcdFx0XHQvLyBAdHMtZXhwZWN0LWVycm9yIFRTMjMwNFxuXHRcdFx0XHRcdFx0ZmllbGRMYXlvdXRzW2ZpZWxkTGF5b3V0cy5sZW5ndGhdID0gbmV3IE9PLnVpLkZpZWxkTGF5b3V0KGNoZWNrYm94SW5wdXRXaWRnZXQsIHtcblx0XHRcdFx0XHRcdFx0bGFiZWwsXG5cdFx0XHRcdFx0XHRcdGFsaWduOiAnaW5saW5lJyxcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR0aGlzLmNvbnRlbnQuYWRkSXRlbXMoZmllbGRMYXlvdXRzKTtcblxuXHRcdFx0XHRcdHRoaXMucGFuZWwuJGVsZW1lbnQuYXBwZW5kKHRoaXMuY29udGVudC4kZWxlbWVudCk7XG5cdFx0XHRcdFx0dGhpcy5wYW5lbC4kZWxlbWVudC5hcHBlbmRUbyh0aGlzLiRib2R5IGFzIEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KTtcblxuXHRcdFx0XHRcdHJldHVybiB0aGlzO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gQHRzLWV4cGVjdC1lcnJvciBUUzI1MDNcblx0XHRcdFx0cHVibGljIG92ZXJyaWRlIGdldEFjdGlvblByb2Nlc3MoYWN0aW9uPzogc3RyaW5nKTogT08udWkuUHJvY2VzcyB7XG5cdFx0XHRcdFx0Y29uc3Qgc2VsZiA9IHRoaXM7XG5cdFx0XHRcdFx0aWYgKGFjdGlvbiA9PT0gJ3ByaW50Jykge1xuXHRcdFx0XHRcdFx0Ly8gQHRzLWV4cGVjdC1lcnJvciBUUzIzMDRcblx0XHRcdFx0XHRcdHJldHVybiBuZXcgT08udWkuUHJvY2VzcygoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdC8vIEdldCB2YWx1ZXMgb2YgY2hlY2tib3hlc1xuXHRcdFx0XHRcdFx0XHRmb3IgKGNvbnN0IHF1ZXN0aW9uIG9mIHRoaXMucXVlc3Rpb25zKSB7XG5cdFx0XHRcdFx0XHRcdFx0aWYgKHF1ZXN0aW9uLnR5cGUgPT09ICdjaGVja2JveCcgJiYgcXVlc3Rpb24ud2lkZ2V0KSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkocHJpbnRPcHRpb25zLCBxdWVzdGlvbi5yZXR1cm52YWx1ZSwge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZTogcXVlc3Rpb24ud2lkZ2V0LmlzU2VsZWN0ZWQoKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0d3JpdGFibGU6IHRydWUsXG5cdFx0XHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHQvLyBAdHMtZXhwZWN0LWVycm9yIFRTMjUwM1xuXHRcdFx0XHRcdFx0XHR2b2lkIChzZWxmIGFzIE9PLnVpLlByb2Nlc3NQcm9jZXNzRGlhbG9nKS5jbG9zZSh7YWN0aW9ufSkuY2xvc2VkLnRoZW4oKCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdHByaW50T3B0aW9ucy5jaGFuZ2VQcmludENTUygpO1xuXHRcdFx0XHRcdFx0XHRcdHByaW50T3B0aW9ucy5vdGhlckVuaGFuY2VtZW50cygpO1xuXHRcdFx0XHRcdFx0XHRcdHdpbmRvdy5wcmludCgpO1xuXHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHJldHVybiBzdXBlci5nZXRBY3Rpb25Qcm9jZXNzKGFjdGlvbik7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Ly8gT08uaW5oZXJpdENsYXNzKFByaW50RGlhbG9nLCBPTy51aS5Qcm9jZXNzRGlhbG9nKTtcblx0XHRcdC8vIEB0cy1leHBlY3QtZXJyb3IgVFMyNTAzXG5cdFx0XHQoUHJpbnREaWFsb2cgYXMgT08udWkuUHJvY2Vzc0RpYWxvZykuc3RhdGljID0ge1xuXHRcdFx0XHQvLyBAdHMtZXhwZWN0LWVycm9yIFRTMjMwNFxuXHRcdFx0XHQuLi5PTy51aS5Qcm9jZXNzRGlhbG9nLnN0YXRpYyxcblx0XHRcdH07XG5cdFx0XHQvLyBAdHMtZXhwZWN0LWVycm9yIFRTMjUwM1xuXHRcdFx0KFByaW50RGlhbG9nIGFzIE9PLnVpLlByb2Nlc3NEaWFsb2cpLnN0YXRpYy5uYW1lID0gJ1ByaW50RGlhbG9nJztcblx0XHRcdC8vIEB0cy1leHBlY3QtZXJyb3IgVFMyNTAzXG5cdFx0XHQoUHJpbnREaWFsb2cgYXMgT08udWkuUHJvY2Vzc0RpYWxvZykuc3RhdGljLnRpdGxlID0gZ2V0TWVzc2FnZSgnUHJpbnQgdGhpcyBwYWdlJyk7XG5cdFx0XHQvLyBAdHMtZXhwZWN0LWVycm9yIFRTMjUwM1xuXHRcdFx0KFByaW50RGlhbG9nIGFzIE9PLnVpLlByb2Nlc3NEaWFsb2cpLnN0YXRpYy5hY3Rpb25zID0gW1xuXHRcdFx0XHR7XG5cdFx0XHRcdFx0YWN0aW9uOiAncHJpbnQnLFxuXHRcdFx0XHRcdGxhYmVsOiBnZXRNZXNzYWdlKCdQcmludCcpLFxuXHRcdFx0XHRcdGZsYWdzOiBbJ3ByaW1hcnknLCAncHJvZ3Jlc3NpdmUnXSxcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGxhYmVsOiBnZXRNZXNzYWdlKCdDYW5jZWwnKSxcblx0XHRcdFx0XHRmbGFnczogWydzYWZlJywgJ2Nsb3NlJ10sXG5cdFx0XHRcdH0sXG5cdFx0XHRdO1xuXG5cdFx0XHRpZiAoIXdpbmRvd01hbmFnZXIpIHtcblx0XHRcdFx0Ly8gQHRzLWV4cGVjdC1lcnJvciBUUzIzMDRcblx0XHRcdFx0d2luZG93TWFuYWdlciA9IG5ldyBPTy51aS5XaW5kb3dNYW5hZ2VyKCk7XG5cdFx0XHRcdCRib2R5LmFwcGVuZCh3aW5kb3dNYW5hZ2VyLiRlbGVtZW50KTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKCFwcmludERpYWxvZykge1xuXHRcdFx0XHQvLyBAdHMtZXhwZWN0LWVycm9yIFRTMjU1NFxuXHRcdFx0XHRwcmludERpYWxvZyA9IG5ldyBQcmludERpYWxvZyh7XG5cdFx0XHRcdFx0c2l6ZTogJ21lZGl1bScsXG5cdFx0XHRcdH0pO1xuXHRcdFx0XHR3aW5kb3dNYW5hZ2VyLmFkZFdpbmRvd3MoW3ByaW50RGlhbG9nXSk7XG5cdFx0XHR9XG5cblx0XHRcdHZvaWQgd2luZG93TWFuYWdlci5vcGVuV2luZG93KHByaW50RGlhbG9nKTtcblx0XHR9LFxuXG5cdFx0Y2hhbmdlUHJpbnRDU1MoKSB7XG5cdFx0XHQvKiBIZXJlIHdlOlxuXHRcdFx0ICogLSBkaXNhYmxlIHN0eWxlc2hlZXRzIHRoYXQgYXJlIHByaW50IHNwZWNpZmljXG5cdFx0XHQgKiAtIG1ha2Ugc2NyZWVuIHNwZWNpZmljIHN0eWxlc2hlZXRzIGFsc28gZW5hYmxlZCBmb3IgcHJpbnQgbWVkaXVtXG5cdFx0XHQgKiAtIHJlbW92ZSBwcmludCBzcGVjaWZpYyBzdHlsZXJ1bGVzXG5cdFx0XHQgKiAtIG1ha2Ugc2NyZWVuIHNwZWNpZmljIHN0eWxlcnVsZXMgYWxzbyBlbmFibGVkIGZvciBwcmludCBtZWRpdW1cblx0XHRcdCAqL1xuXHRcdFx0aWYgKHRoaXMuZW5oYW5jZWQgPT09IGZhbHNlKSB7XG5cdFx0XHRcdGZvciAoY29uc3Qgc3R5bGVzaGVldCBvZiBkb2N1bWVudC5zdHlsZVNoZWV0cykge1xuXHRcdFx0XHRcdGNvbnN0IHttZWRpYX0gPSBzdHlsZXNoZWV0O1xuXHRcdFx0XHRcdGlmICghbWVkaWEpIHtcblx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGlmIChtZWRpYS5tZWRpYVRleHQgJiYgbWVkaWEubWVkaWFUZXh0LmluY2x1ZGVzKCdwcmludCcpKSB7XG5cdFx0XHRcdFx0XHRpZiAoIW1lZGlhLm1lZGlhVGV4dC5pbmNsdWRlcygnc2NyZWVuJykpIHtcblx0XHRcdFx0XHRcdFx0c3R5bGVzaGVldC5kaXNhYmxlZCA9IHRydWU7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSBlbHNlIGlmIChcblx0XHRcdFx0XHRcdG1lZGlhLm1lZGlhVGV4dCAmJlxuXHRcdFx0XHRcdFx0bWVkaWEubWVkaWFUZXh0LmluY2x1ZGVzKCdzY3JlZW4nKSAmJlxuXHRcdFx0XHRcdFx0IW1lZGlhLm1lZGlhVGV4dC5pbmNsdWRlcygncHJpbnQnKVxuXHRcdFx0XHRcdCkge1xuXHRcdFx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRcdFx0bWVkaWEuYXBwZW5kTWVkaXVtKCdwcmludCcpO1xuXHRcdFx0XHRcdFx0fSBjYXRjaCB7XG5cdFx0XHRcdFx0XHRcdG1lZGlhLm1lZGlhVGV4dCArPSAnLHByaW50Jztcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQvKiBub3cgdGVzdCBpbmRpdmlkdWFsIHN0eWxlc2hlZXQgcnVsZXMgKi9cblx0XHRcdFx0XHRsZXQgcnVsZXM7XG5cdFx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRcdHJ1bGVzID0gc3R5bGVzaGVldC5jc3NSdWxlcyB8fCBzdHlsZXNoZWV0LnJ1bGVzO1xuXHRcdFx0XHRcdH0gY2F0Y2gge1xuXHRcdFx0XHRcdFx0LyogQ3Jvc3MgZG9tYWluIGlzc3VlLiAqL1xuXHRcdFx0XHRcdFx0bXcubG9nLndhcm4oJ05vdCBwb3NzaWJsZSB0byBjb3JyZWN0IHN0eWxlc2hlZXQgZHVlIHRvIGNyb3NzIG9yaWdpbiByZXN0cmljdGlvbnMuJyk7XG5cdFx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRpZiAoIXJ1bGVzKSB7XG5cdFx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRmb3IgKGxldCBqID0gMDsgaiA8IHJ1bGVzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdFx0XHRjb25zdCBydWxlID0gcnVsZXNbal0gYXMgdW5rbm93biBhcyBTdHlsZVNoZWV0O1xuXG5cdFx0XHRcdFx0XHRsZXQgaGFzUHJpbnQgPSBmYWxzZTtcblx0XHRcdFx0XHRcdGxldCBoYXNTY3JlZW4gPSBmYWxzZTtcblxuXHRcdFx0XHRcdFx0aWYgKCFydWxlKSB7XG5cdFx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRpZiAoKHJ1bGUgYXMgdW5rbm93biBhcyBDU1NSdWxlKS50eXBlID09PSBDU1NSdWxlLk1FRElBX1JVTEUgJiYgcnVsZS5tZWRpYSkge1xuXHRcdFx0XHRcdFx0XHRmb3IgKGNvbnN0IHJ1bGVNZWRpYSBvZiBydWxlLm1lZGlhKSB7XG5cdFx0XHRcdFx0XHRcdFx0aWYgKHJ1bGVNZWRpYSA9PT0gJ3ByaW50Jykge1xuXHRcdFx0XHRcdFx0XHRcdFx0aGFzUHJpbnQgPSB0cnVlO1xuXHRcdFx0XHRcdFx0XHRcdH0gZWxzZSBpZiAocnVsZU1lZGlhID09PSAnc2NyZWVuJykge1xuXHRcdFx0XHRcdFx0XHRcdFx0aGFzU2NyZWVuID0gdHJ1ZTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRpZiAoaGFzUHJpbnQgJiYgIWhhc1NjcmVlbikge1xuXHRcdFx0XHRcdFx0XHRzdHlsZXNoZWV0LmRlbGV0ZVJ1bGUoaik7XG5cdFx0XHRcdFx0XHRcdGotLTtcblx0XHRcdFx0XHRcdH0gZWxzZSBpZiAocnVsZSAmJiBoYXNTY3JlZW4gJiYgIWhhc1ByaW50KSB7XG5cdFx0XHRcdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0XHRcdFx0cnVsZS5tZWRpYS5hcHBlbmRNZWRpdW0oJ3ByaW50Jyk7XG5cdFx0XHRcdFx0XHRcdH0gY2F0Y2gge1xuXHRcdFx0XHRcdFx0XHRcdHJ1bGUubWVkaWEubWVkaWFUZXh0ICs9ICcscHJpbnQnO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGxldCBwcmludFN0eWxlID0gJyc7XG5cdFx0XHQvKiBBZGQgY3NzIHRvIGhpZGUgaW1hZ2VzICovXG5cdFx0XHRpZiAodGhpcy5ub2ltYWdlcykge1xuXHRcdFx0XHRwcmludFN0eWxlICs9ICdpbWcsLnRodW1ie2Rpc3BsYXk6bm9uZX0nO1xuXHRcdFx0fVxuXHRcdFx0LyogQWRkIGNzcyB0byBoaWRlIHJlZmVyZW5jZXMgbWFya2VycyBhbmQgdGhlIHJlZmVyZW5jZXMgbGlzdHMgKi9cblx0XHRcdGlmICh0aGlzLm5vcmVmcykge1xuXHRcdFx0XHRwcmludFN0eWxlICs9ICcubXctaGVhZGxpbmVbaWQ9XCJSZWZlcmVuY2VzXCJdLG9sLnJlZmVyZW5jZXMsLnJlZmVyZW5jZXtkaXNwbGF5Om5vbmV9Jztcblx0XHRcdH1cblx0XHRcdGlmICh0aGlzLm5vdG9jKSB7XG5cdFx0XHRcdHByaW50U3R5bGUgKz0gJyN0b2MsLnRvY3tkaXNwbGF5Om5vbmV9Jztcblx0XHRcdH1cblx0XHRcdGlmICh0aGlzLm5vYmFja2dyb3VuZCkge1xuXHRcdFx0XHRwcmludFN0eWxlICs9ICcqe2JhY2tncm91bmQ6bm9uZSAhaW1wb3J0YW50fSc7XG5cdFx0XHR9XG5cdFx0XHRpZiAodGhpcy5ibGFja3RleHQpIHtcblx0XHRcdFx0cHJpbnRTdHlsZSArPSAnKntjb2xvcjojMDAwICFpbXBvcnRhbnR9Jztcblx0XHRcdH1cblxuXHRcdFx0aWYgKHByaW50U3R5bGUpIHtcblx0XHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ByaW50U3R5bGUnKT8ucmVtb3ZlKCk7XG5cdFx0XHRcdGNvbnN0IHN0eWxlVGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcblx0XHRcdFx0c3R5bGVUYWcuaWQgPSAncHJpbnRTdHlsZSc7XG5cdFx0XHRcdHN0eWxlVGFnLm1lZGlhID0gJ3ByaW50Jztcblx0XHRcdFx0c3R5bGVUYWcuYXBwZW5kKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHByaW50U3R5bGUpKTtcblx0XHRcdFx0ZG9jdW1lbnQuaGVhZC5hcHBlbmQoc3R5bGVUYWcpO1xuXHRcdFx0fVxuXHRcdH0sXG5cblx0XHQvKiBSZXdyaXRlIHRoZSBcInJldHJpZXZlZCBmcm9tXCIgdXJsIHRvIGJlIHJlYWRhYmxlICovXG5cdFx0b3RoZXJFbmhhbmNlbWVudHM6ICgpID0+IHtcblx0XHRcdGNvbnN0IGxpbmsgPSAkYm9keS5maW5kKCdkaXYucHJpbnRmb290ZXIgYScpO1xuXHRcdFx0bGluay50ZXh0KGRlY29kZVVSSShsaW5rLnRleHQoKSkpO1xuXHRcdH0sXG5cdH07XG5cblx0cmV0dXJuIHByaW50T3B0aW9ucztcbn07XG5cbnZvaWQgZ2V0Qm9keSgpLnRoZW4oZnVuY3Rpb24gcHJpbnRPcHRpb25zTG9hZCgkYm9keSkge1xuXHRpZiAobXcuY29uZmlnLmdldCgnd2dOYW1lc3BhY2VOdW1iZXInKSA8IDApIHtcblx0XHRyZXR1cm47XG5cdH1cblx0Y29uc3QgcHJpbnRPcHRpb25zID0gZ2V0UHJpbnRPcHRpb25zKCRib2R5KTtcblx0Ly8gVGhpcyBjYW4gYmUgYmVmb3JlIHRoZSBjbGljayBsaXN0ZW5lciBieSBNVyBpcyBpbnN0YWxsZWQuIEluc3RlYWQsXG5cdC8vIHJlLWFkZCBvdXJzZWx2ZXMgdG8gdGhlIGJhY2sgb2YgdGhlIGRvY3VtZW50LnJlYWR5IGxpc3Rcblx0Ly8gdXNlIGFzeW5jIHRpbWVvdXRlIHRvIGRvIHRoaXNcblx0c2V0VGltZW91dChwcmludE9wdGlvbnMuaW5zdGFsbCwgMCk7XG59KTtcbiIsICJpbXBvcnQge2xvY2FsaXplfSBmcm9tICdleHQuZ2FkZ2V0LmkxOG4nO1xuXG5jb25zdCBnZXRJMThuTWVzc2FnZXMgPSAoKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0UHJpbnQ6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnUHJpbnQnLFxuXHRcdFx0amE6ICfljbDliLcnLFxuXHRcdFx0J3poLWhhbnMnOiAn5omT5Y2wJyxcblx0XHRcdCd6aC1oYW50JzogJ+WIl+WNsCcsXG5cdFx0fSksXG5cdFx0J1ByaW50IHRoaXMgcGFnZSc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnUHJpbnQgdGhpcyBwYWdlJyxcblx0XHRcdGphOiAn44GT44Gu44Oa44O844K444KS5Y2w5Yi344GrJyxcblx0XHRcdCd6aC1oYW5zJzogJ+aJk+WNsOatpOmhtemdoicsXG5cdFx0XHQnemgtaGFudCc6ICfliJfljbDmraTpoIHpnaInLFxuXHRcdH0pLFxuXHRcdENhbmNlbDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdDYW5jZWwnLFxuXHRcdFx0amE6ICfjgq3jg6Pjg7Pjgrvjg6snLFxuXHRcdFx0emg6ICflj5bmtognLFxuXHRcdH0pLFxuXHR9O1xufTtcblxuY29uc3QgaTE4bk1lc3NhZ2VzID0gZ2V0STE4bk1lc3NhZ2VzKCk7XG5cbmNvbnN0IGdldE1lc3NhZ2U6IEdldE1lc3NhZ2VzPHR5cGVvZiBpMThuTWVzc2FnZXM+ID0gKGtleSkgPT4ge1xuXHRyZXR1cm4gaTE4bk1lc3NhZ2VzW2tleV0gfHwga2V5O1xufTtcblxuZXhwb3J0IHtnZXRNZXNzYWdlfTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxxQkFBc0JDLFFBQUEsaUJBQUE7O0FDQXRCLElBQUFDLG9CQUF1QkQsUUFBQSxpQkFBQTtBQUV2QixJQUFNRSxrQkFBa0JBLE1BQU07QUFDN0IsU0FBTztJQUNOQyxRQUFBLEdBQU9GLGtCQUFBRyxVQUFTO01BQ2ZDLElBQUk7TUFDSkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNELG9CQUFBLEdBQW1CTCxrQkFBQUcsVUFBUztNQUMzQkMsSUFBSTtNQUNKQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0RDLFNBQUEsR0FBUU4sa0JBQUFHLFVBQVM7TUFDaEJDLElBQUk7TUFDSkMsSUFBSTtNQUNKRSxJQUFJO0lBQ0wsQ0FBQztFQUNGO0FBQ0Q7QUFFQSxJQUFNQyxlQUFlUCxnQkFBZ0I7QUFFckMsSUFBTVEsYUFBZ0RDLFNBQVE7QUFDN0QsU0FBT0YsYUFBYUUsR0FBRyxLQUFLQTtBQUM3Qjs7QUR6QkEsSUFBTUMsa0JBQW1CQyxXQUFtQztBQUUzRCxNQUFJQztBQUVKLE1BQUlDO0FBRUosUUFB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WTtBQUFBLFlBQUFDO0FBQ2YsU0FBQUEsd0JBQUF6QixTQUFTMEIsY0FBYyxhQUFhLE9BQUEsUUFBQUQsMEJBQUEsVUFBcENBLHNCQUF1Q0UsT0FBTztBQUM5QyxjQUFNQyxXQUFXNUIsU0FBUzZCLGNBQWMsT0FBTztBQUMvQ0QsaUJBQVNFLEtBQUs7QUFDZEYsaUJBQVN4QixRQUFRO0FBQ2pCd0IsaUJBQVN6RCxPQUFPNkIsU0FBUytCLGVBQWVQLFVBQVUsQ0FBQztBQUNuRHhCLGlCQUFTZ0MsS0FBSzdELE9BQU95RCxRQUFRO01BQzlCO0lBQ0Q7O0lBR0F6QyxtQkFBbUJBLE1BQU07QUFDeEIsWUFBTThDLE9BQU94SCxNQUFNYSxLQUFLLG1CQUFtQjtBQUMzQzJHLFdBQUtDLEtBQUtDLFVBQVVGLEtBQUtDLEtBQUssQ0FBQyxDQUFDO0lBQ2pDO0VBQ0Q7QUFFQSxTQUFPdEg7QUFDUjtBQUVBLE1BQUEsR0FBS2pCLG1CQUFBeUksU0FBUSxFQUFFbkQsS0FBSyxTQUFTb0QsaUJBQWlCNUgsT0FBTztBQUNwRCxNQUFJa0csR0FBRzJCLE9BQU83RyxJQUFJLG1CQUFtQixJQUFJLEdBQUc7QUFDM0M7RUFDRDtBQUNBLFFBQU1iLGVBQWVKLGdCQUFnQkMsS0FBSztBQUkxQzhILGFBQVczSCxhQUFhTyxTQUFTLENBQUM7QUFDbkMsQ0FBQzsiLAogICJuYW1lcyI6IFsiaW1wb3J0X2V4dF9nYWRnZXQyIiwgInJlcXVpcmUiLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAiZ2V0STE4bk1lc3NhZ2VzIiwgIlByaW50IiwgImxvY2FsaXplIiwgImVuIiwgImphIiwgIkNhbmNlbCIsICJ6aCIsICJpMThuTWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAiZ2V0UHJpbnRPcHRpb25zIiwgIiRib2R5IiwgIndpbmRvd01hbmFnZXIiLCAicHJpbnREaWFsb2ciLCAicHJpbnRPcHRpb25zIiwgImVuaGFuY2VkIiwgIm5vaW1hZ2VzIiwgIm5vcmVmcyIsICJub3RvYyIsICJub2JhY2tncm91bmQiLCAiYmxhY2t0ZXh0IiwgImluc3RhbGwiLCAiXyRwcmludExpbmskb2ZmJGdldCIsICIkcHJpbnRMaW5rIiwgImZpbmQiLCAibGVuZ3RoIiwgIm9mZiIsICJnZXQiLCAiYWRkRXZlbnRMaXN0ZW5lciIsICJldmVudCIsICJzdG9wUHJvcGFnYXRpb24iLCAicHJldmVudERlZmF1bHQiLCAiY3JlYXRlV2luZG93IiwgIlByaW50RGlhbG9nIiwgIk9PIiwgInVpIiwgIlByb2Nlc3NEaWFsb2ciLCAicGFuZWwiLCAiY29udGVudCIsICJxdWVzdGlvbnMiLCAibGFiZWwiLCAidHlwZSIsICJjaGVja2VkIiwgInJldHVybnZhbHVlIiwgImluaXRpYWxpemUiLCAiY2hlY2tib3hJbnB1dFdpZGdldCIsICJmaWVsZExheW91dHMiLCAiUGFuZWxMYXlvdXQiLCAiZXhwYW5kZWQiLCAicGFkZGVkIiwgIkZpZWxkc2V0TGF5b3V0IiwgIl9pdGVyYXRvciIsICJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsICJfc3RlcCIsICJzIiwgIm4iLCAiZG9uZSIsICJxdWVzdGlvbiIsICJ2YWx1ZSIsICJDaGVja2JveElucHV0V2lkZ2V0IiwgInNlbGVjdGVkIiwgIndpZGdldCIsICJGaWVsZExheW91dCIsICJhbGlnbiIsICJlcnIiLCAiZSIsICJmIiwgImFkZEl0ZW1zIiwgIiRlbGVtZW50IiwgImFwcGVuZCIsICJhcHBlbmRUbyIsICJnZXRBY3Rpb25Qcm9jZXNzIiwgImFjdGlvbiIsICJzZWxmIiwgIlByb2Nlc3MiLCAiX2l0ZXJhdG9yMiIsICJfc3RlcDIiLCAiT2JqZWN0IiwgImRlZmluZVByb3BlcnR5IiwgImlzU2VsZWN0ZWQiLCAid3JpdGFibGUiLCAiY2xvc2UiLCAiY2xvc2VkIiwgInRoZW4iLCAiY2hhbmdlUHJpbnRDU1MiLCAib3RoZXJFbmhhbmNlbWVudHMiLCAid2luZG93IiwgInByaW50IiwgInN0YXRpYyIsICJuYW1lIiwgInRpdGxlIiwgImFjdGlvbnMiLCAiZmxhZ3MiLCAiV2luZG93TWFuYWdlciIsICJzaXplIiwgImFkZFdpbmRvd3MiLCAib3BlbldpbmRvdyIsICJfaXRlcmF0b3IzIiwgImRvY3VtZW50IiwgInN0eWxlU2hlZXRzIiwgIl9zdGVwMyIsICJzdHlsZXNoZWV0IiwgIm1lZGlhIiwgIm1lZGlhVGV4dCIsICJpbmNsdWRlcyIsICJkaXNhYmxlZCIsICJhcHBlbmRNZWRpdW0iLCAicnVsZXMiLCAiY3NzUnVsZXMiLCAibXciLCAibG9nIiwgIndhcm4iLCAiaiIsICJydWxlIiwgImhhc1ByaW50IiwgImhhc1NjcmVlbiIsICJDU1NSdWxlIiwgIk1FRElBX1JVTEUiLCAiX2l0ZXJhdG9yNCIsICJfc3RlcDQiLCAicnVsZU1lZGlhIiwgImRlbGV0ZVJ1bGUiLCAicHJpbnRTdHlsZSIsICJfZG9jdW1lbnQkcXVlcnlTZWxlY3QiLCAicXVlcnlTZWxlY3RvciIsICJyZW1vdmUiLCAic3R5bGVUYWciLCAiY3JlYXRlRWxlbWVudCIsICJpZCIsICJjcmVhdGVUZXh0Tm9kZSIsICJoZWFkIiwgImxpbmsiLCAidGV4dCIsICJkZWNvZGVVUkkiLCAiZ2V0Qm9keSIsICJwcmludE9wdGlvbnNMb2FkIiwgImNvbmZpZyIsICJzZXRUaW1lb3V0Il0KfQo=

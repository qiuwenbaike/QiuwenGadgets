/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://en.wikipedia.org/wiki/User:Guarapiranga/accessKeysCheatSheet.js}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/AccessKeyCheatsheet}
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

// dist/AccessKeyCheatsheet/AccessKeyCheatsheet.js
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
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    var _iterator = _createForOfIteratorHelper(__getOwnPropNames(from)), _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done; ) {
        let key = _step.value;
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, {
            get: () => from[key],
            enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
          });
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
    value: mod,
    enumerable: true
  }) : target,
  mod
));
//! src/AccessKeyCheatsheet/modules/addListener.ts
var messageDialog;
var addListener = ($element, windowManager, messageDialogProperty) => {
  $element.on("click", (event) => {
    event.preventDefault();
    if (messageDialog) {
      if (messageDialog.isOpened()) {
        messageDialog.close();
      } else {
        messageDialog.open(messageDialogProperty);
      }
      return;
    }
    messageDialog = new OO.ui.MessageDialog();
    windowManager.addWindows([messageDialog]);
    void windowManager.openWindow(messageDialog, messageDialogProperty);
  });
};
//! src/AccessKeyCheatsheet/modules/util/generateElements.tsx
var import_ext_gadget2 = __toESM(require("ext.gadget.React"), 1);
//! src/AccessKeyCheatsheet/modules/i18n.ts
var import_ext_gadget = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    Close: (0, import_ext_gadget.localize)({
      en: "Close",
      ja: "閉じる",
      ru: "Закрыть",
      "zh-hans": "关闭",
      "zh-hant": "關閉"
    }),
    Text: (0, import_ext_gadget.localize)({
      en: "Open access keys cheatsheet",
      ja: "アクセスキーのチートシート",
      ru: "Открыть подсказку с клавиатурными ярлыками",
      "zh-hans": "显示键盘快捷键提示",
      "zh-hant": "顯示鍵盤快速鍵提示"
    }),
    Title: (0, import_ext_gadget.localize)({
      en: "Access keys cheatsheet",
      ja: "アクセスキーのチートシート",
      ru: "Подсказки клавиатурных ярлыков",
      "zh-hans": "键盘快捷键提示",
      "zh-hant": "鍵盤快速鍵提示"
    })
  };
};
var i18nMessages = getI18nMessages();
var getMessage = (key) => {
  return i18nMessages[key] || key;
};
//! src/AccessKeyCheatsheet/modules/util/generateElements.tsx
var generateElements = ($body) => {
  const $tableItems = $body.find("[accesskey]").map((_index, element) => $(/* @__PURE__ */ import_ext_gadget2.default.createElement("tr", null, /* @__PURE__ */ import_ext_gadget2.default.createElement("th", null, element.accessKey.toUpperCase()), /* @__PURE__ */ import_ext_gadget2.default.createElement("td", null, (element.getAttribute("aria-label") || element.title || element.textContent || element.value || $body.find('label[for="'.concat(element.id, '"]')).text()).replace(/\s*?\[.+?]$/, "").trim())))).get();
  const $table = $("<table>").addClass("wikitable").css("width", "100%").append($tableItems);
  const $opener = $(/* @__PURE__ */ import_ext_gadget2.default.createElement("a", {
    accessKey: "?"
  }, getMessage("Text")));
  return {
    $table,
    $opener
  };
};
//! src/AccessKeyCheatsheet/modules/util/generateMessageDialogProperty.ts
var generateMessageDialogProperty = ($element) => {
  const messageDialogProperty = {
    title: getMessage("Title"),
    message: $element,
    actions: [{
      action: "close",
      flags: ["safe", "close"],
      label: getMessage("Close")
    }],
    size: "medium"
  };
  return messageDialogProperty;
};
//! src/AccessKeyCheatsheet/AccessKeyCheatsheet.ts
var import_ext_gadget3 = require("ext.gadget.Util");
//! src/AccessKeyCheatsheet/modules/initWindowManager.ts
var initWindowManager = () => {
  const windowManager = new OO.ui.WindowManager();
  windowManager.$element.css({
    "margin-bottom": "0",
    width: "35em"
  });
  return windowManager;
};
//! src/AccessKeyCheatsheet/AccessKeyCheatsheet.ts
void (0, import_ext_gadget3.getBody)().then(function accessKeyCheatsheet($body) {
  const {
    $table,
    $opener
  } = generateElements($body);
  $opener.hide().appendTo($body);
  const windowManager = initWindowManager();
  windowManager.$element.appendTo($body);
  const messageDialogProperty = generateMessageDialogProperty($table);
  addListener($opener, windowManager, messageDialogProperty);
});
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0FjY2Vzc0tleUNoZWF0c2hlZXQvbW9kdWxlcy9hZGRMaXN0ZW5lci50cyIsICJzcmMvQWNjZXNzS2V5Q2hlYXRzaGVldC9tb2R1bGVzL3V0aWwvZ2VuZXJhdGVFbGVtZW50cy50c3giLCAic3JjL0FjY2Vzc0tleUNoZWF0c2hlZXQvbW9kdWxlcy9pMThuLnRzIiwgInNyYy9BY2Nlc3NLZXlDaGVhdHNoZWV0L21vZHVsZXMvdXRpbC9nZW5lcmF0ZU1lc3NhZ2VEaWFsb2dQcm9wZXJ0eS50cyIsICJzcmMvQWNjZXNzS2V5Q2hlYXRzaGVldC9BY2Nlc3NLZXlDaGVhdHNoZWV0LnRzIiwgInNyYy9BY2Nlc3NLZXlDaGVhdHNoZWV0L21vZHVsZXMvaW5pdFdpbmRvd01hbmFnZXIudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImxldCBtZXNzYWdlRGlhbG9nOiBPTy51aS5NZXNzYWdlRGlhbG9nO1xuXG5jb25zdCBhZGRMaXN0ZW5lciA9IChcblx0JGVsZW1lbnQ6IEpRdWVyeSxcblx0d2luZG93TWFuYWdlcjogT08udWkuV2luZG93TWFuYWdlcixcblx0bWVzc2FnZURpYWxvZ1Byb3BlcnR5OiBPTy51aS5XaW5kb3dNYW5hZ2VyLldpbmRvd09wZW5pbmdEYXRhXG4pOiB2b2lkID0+IHtcblx0JGVsZW1lbnQub24oJ2NsaWNrJywgKGV2ZW50OiBKUXVlcnkuQ2xpY2tFdmVudCk6IHZvaWQgPT4ge1xuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cblx0XHRpZiAobWVzc2FnZURpYWxvZykge1xuXHRcdFx0aWYgKG1lc3NhZ2VEaWFsb2cuaXNPcGVuZWQoKSkge1xuXHRcdFx0XHRtZXNzYWdlRGlhbG9nLmNsb3NlKCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRtZXNzYWdlRGlhbG9nLm9wZW4obWVzc2FnZURpYWxvZ1Byb3BlcnR5KTtcblx0XHRcdH1cblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRtZXNzYWdlRGlhbG9nID0gbmV3IE9PLnVpLk1lc3NhZ2VEaWFsb2coKTtcblx0XHR3aW5kb3dNYW5hZ2VyLmFkZFdpbmRvd3MoW21lc3NhZ2VEaWFsb2ddKTtcblx0XHR2b2lkIHdpbmRvd01hbmFnZXIub3BlbldpbmRvdyhtZXNzYWdlRGlhbG9nLCBtZXNzYWdlRGlhbG9nUHJvcGVydHkpO1xuXHR9KTtcbn07XG5cbmV4cG9ydCB7YWRkTGlzdGVuZXJ9O1xuIiwgImltcG9ydCBSZWFjdCBmcm9tICdleHQuZ2FkZ2V0LlJlYWN0JztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi4vaTE4bic7XG5cbmNvbnN0IGdlbmVyYXRlRWxlbWVudHMgPSAoXG5cdCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50PlxuKToge1xuXHQkdGFibGU6IEpRdWVyeTtcblx0JG9wZW5lcjogSlF1ZXJ5O1xufSA9PiB7XG5cdGNvbnN0ICR0YWJsZUl0ZW1zOiBKUXVlcnlbXSA9ICRib2R5XG5cdFx0LmZpbmQoJ1thY2Nlc3NrZXldJylcblx0XHQubWFwKFxuXHRcdFx0KF9pbmRleDogbnVtYmVyLCBlbGVtZW50OiBIVE1MRWxlbWVudCk6IEpRdWVyeSA9PlxuXHRcdFx0XHQkKFxuXHRcdFx0XHRcdChcblx0XHRcdFx0XHRcdDx0cj5cblx0XHRcdFx0XHRcdFx0PHRoPntlbGVtZW50LmFjY2Vzc0tleS50b1VwcGVyQ2FzZSgpfTwvdGg+XG5cdFx0XHRcdFx0XHRcdDx0ZD5cblx0XHRcdFx0XHRcdFx0XHR7KFxuXHRcdFx0XHRcdFx0XHRcdFx0ZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKSB8fFxuXHRcdFx0XHRcdFx0XHRcdFx0ZWxlbWVudC50aXRsZSB8fFxuXHRcdFx0XHRcdFx0XHRcdFx0ZWxlbWVudC50ZXh0Q29udGVudCB8fFxuXHRcdFx0XHRcdFx0XHRcdFx0KGVsZW1lbnQgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWUgfHxcblx0XHRcdFx0XHRcdFx0XHRcdCRib2R5LmZpbmQoYGxhYmVsW2Zvcj1cIiR7ZWxlbWVudC5pZH1cIl1gKS50ZXh0KClcblx0XHRcdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0XHRcdFx0XHQucmVwbGFjZSgvXFxzKj9cXFsuKz9dJC8sICcnKVxuXHRcdFx0XHRcdFx0XHRcdFx0LnRyaW0oKX1cblx0XHRcdFx0XHRcdFx0PC90ZD5cblx0XHRcdFx0XHRcdDwvdHI+XG5cdFx0XHRcdFx0KSBhcyBIVE1MRWxlbWVudFxuXHRcdFx0XHQpXG5cdFx0KVxuXHRcdC5nZXQoKTtcblxuXHRjb25zdCAkdGFibGU6IEpRdWVyeSA9ICQoJzx0YWJsZT4nKS5hZGRDbGFzcygnd2lraXRhYmxlJykuY3NzKCd3aWR0aCcsICcxMDAlJykuYXBwZW5kKCR0YWJsZUl0ZW1zKTtcblxuXHRjb25zdCAkb3BlbmVyID0gJCgoPGEgYWNjZXNzS2V5PVwiP1wiPntnZXRNZXNzYWdlKCdUZXh0Jyl9PC9hPikgYXMgSFRNTEVsZW1lbnQpO1xuXG5cdHJldHVybiB7XG5cdFx0JHRhYmxlLFxuXHRcdCRvcGVuZXIsXG5cdH07XG59O1xuXG5leHBvcnQge2dlbmVyYXRlRWxlbWVudHN9O1xuIiwgImltcG9ydCB7bG9jYWxpemV9IGZyb20gJ2V4dC5nYWRnZXQuaTE4bic7XG5cbmNvbnN0IGdldEkxOG5NZXNzYWdlcyA9ICgpID0+IHtcblx0cmV0dXJuIHtcblx0XHRDbG9zZTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdDbG9zZScsXG5cdFx0XHRqYTogJ+mWieOBmOOCiycsXG5cdFx0XHRydTogJ9CX0LDQutGA0YvRgtGMJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WFs+mXrScsXG5cdFx0XHQnemgtaGFudCc6ICfpl5zploknLFxuXHRcdH0pLFxuXHRcdFRleHQ6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnT3BlbiBhY2Nlc3Mga2V5cyBjaGVhdHNoZWV0Jyxcblx0XHRcdGphOiAn44Ki44Kv44K744K544Kt44O844Gu44OB44O844OI44K344O844OIJyxcblx0XHRcdHJ1OiAn0J7RgtC60YDRi9GC0Ywg0L/QvtC00YHQutCw0LfQutGDINGBINC60LvQsNCy0LjQsNGC0YPRgNC90YvQvNC4INGP0YDQu9GL0LrQsNC80LgnLFxuXHRcdFx0J3poLWhhbnMnOiAn5pi+56S66ZSu55uY5b+r5o236ZSu5o+Q56S6Jyxcblx0XHRcdCd6aC1oYW50JzogJ+mhr+ekuumNteebpOW/q+mAn+mNteaPkOekuicsXG5cdFx0fSksXG5cdFx0VGl0bGU6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQWNjZXNzIGtleXMgY2hlYXRzaGVldCcsXG5cdFx0XHRqYTogJ+OCouOCr+OCu+OCueOCreODvOOBruODgeODvOODiOOCt+ODvOODiCcsXG5cdFx0XHRydTogJ9Cf0L7QtNGB0LrQsNC30LrQuCDQutC70LDQstC40LDRgtGD0YDQvdGL0YUg0Y/RgNC70YvQutC+0LInLFxuXHRcdFx0J3poLWhhbnMnOiAn6ZSu55uY5b+r5o236ZSu5o+Q56S6Jyxcblx0XHRcdCd6aC1oYW50JzogJ+mNteebpOW/q+mAn+mNteaPkOekuicsXG5cdFx0fSksXG5cdH07XG59O1xuXG5jb25zdCBpMThuTWVzc2FnZXMgPSBnZXRJMThuTWVzc2FnZXMoKTtcblxuY29uc3QgZ2V0TWVzc2FnZTogR2V0TWVzc2FnZXM8dHlwZW9mIGkxOG5NZXNzYWdlcz4gPSAoa2V5KSA9PiB7XG5cdHJldHVybiBpMThuTWVzc2FnZXNba2V5XSB8fCBrZXk7XG59O1xuXG5leHBvcnQge2dldE1lc3NhZ2V9O1xuIiwgImltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi4vaTE4bic7XG5cbmNvbnN0IGdlbmVyYXRlTWVzc2FnZURpYWxvZ1Byb3BlcnR5ID0gKCRlbGVtZW50OiBKUXVlcnkpOiBPTy51aS5XaW5kb3dNYW5hZ2VyLldpbmRvd09wZW5pbmdEYXRhID0+IHtcblx0Y29uc3QgbWVzc2FnZURpYWxvZ1Byb3BlcnR5OiBPTy51aS5XaW5kb3dNYW5hZ2VyLldpbmRvd09wZW5pbmdEYXRhID0ge1xuXHRcdHRpdGxlOiBnZXRNZXNzYWdlKCdUaXRsZScpLFxuXHRcdG1lc3NhZ2U6ICRlbGVtZW50LFxuXHRcdGFjdGlvbnM6IFtcblx0XHRcdHtcblx0XHRcdFx0YWN0aW9uOiAnY2xvc2UnLFxuXHRcdFx0XHRmbGFnczogWydzYWZlJywgJ2Nsb3NlJ10sXG5cdFx0XHRcdGxhYmVsOiBnZXRNZXNzYWdlKCdDbG9zZScpLFxuXHRcdFx0fSxcblx0XHRdLFxuXHRcdHNpemU6ICdtZWRpdW0nLFxuXHR9O1xuXG5cdHJldHVybiBtZXNzYWdlRGlhbG9nUHJvcGVydHk7XG59O1xuXG5leHBvcnQge2dlbmVyYXRlTWVzc2FnZURpYWxvZ1Byb3BlcnR5fTtcbiIsICJpbXBvcnQge2FkZExpc3RlbmVyfSBmcm9tICcuL21vZHVsZXMvYWRkTGlzdGVuZXInO1xuaW1wb3J0IHtnZW5lcmF0ZUVsZW1lbnRzfSBmcm9tICcuL21vZHVsZXMvdXRpbC9nZW5lcmF0ZUVsZW1lbnRzJztcbmltcG9ydCB7Z2VuZXJhdGVNZXNzYWdlRGlhbG9nUHJvcGVydHl9IGZyb20gJy4vbW9kdWxlcy91dGlsL2dlbmVyYXRlTWVzc2FnZURpYWxvZ1Byb3BlcnR5JztcbmltcG9ydCB7Z2V0Qm9keX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbmltcG9ydCB7aW5pdFdpbmRvd01hbmFnZXJ9IGZyb20gJy4vbW9kdWxlcy9pbml0V2luZG93TWFuYWdlcic7XG5cbi8qKlxuICogQWRkcyBhbHQrc2hpZnQrPyBhcyBhbiBhY2Nlc3Mga2V5IHRvIHNob3cgYSBsaXN0IG9mIGFsbCBkZWZhdWx0IGFjY2VzcyBrZXlzXG4gKi9cbnZvaWQgZ2V0Qm9keSgpLnRoZW4oZnVuY3Rpb24gYWNjZXNzS2V5Q2hlYXRzaGVldCgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkIHtcblx0Y29uc3QgeyR0YWJsZSwgJG9wZW5lcn0gPSBnZW5lcmF0ZUVsZW1lbnRzKCRib2R5KTtcblx0JG9wZW5lci5oaWRlKCkuYXBwZW5kVG8oJGJvZHkpO1xuXG5cdGNvbnN0IHdpbmRvd01hbmFnZXI6IE9PLnVpLldpbmRvd01hbmFnZXIgPSBpbml0V2luZG93TWFuYWdlcigpO1xuXHR3aW5kb3dNYW5hZ2VyLiRlbGVtZW50LmFwcGVuZFRvKCRib2R5KTtcblxuXHRjb25zdCBtZXNzYWdlRGlhbG9nUHJvcGVydHk6IE9PLnVpLldpbmRvd01hbmFnZXIuV2luZG93T3BlbmluZ0RhdGEgPSBnZW5lcmF0ZU1lc3NhZ2VEaWFsb2dQcm9wZXJ0eSgkdGFibGUpO1xuXG5cdGFkZExpc3RlbmVyKCRvcGVuZXIsIHdpbmRvd01hbmFnZXIsIG1lc3NhZ2VEaWFsb2dQcm9wZXJ0eSk7XG59KTtcbiIsICJjb25zdCBpbml0V2luZG93TWFuYWdlciA9ICgpOiBPTy51aS5XaW5kb3dNYW5hZ2VyID0+IHtcblx0Y29uc3Qgd2luZG93TWFuYWdlcjogT08udWkuV2luZG93TWFuYWdlciA9IG5ldyBPTy51aS5XaW5kb3dNYW5hZ2VyKCk7XG5cblx0d2luZG93TWFuYWdlci4kZWxlbWVudC5jc3Moe1xuXHRcdCdtYXJnaW4tYm90dG9tJzogJzAnLFxuXHRcdHdpZHRoOiAnMzVlbScsXG5cdH0pO1xuXG5cdHJldHVybiB3aW5kb3dNYW5hZ2VyO1xufTtcblxuZXhwb3J0IHtpbml0V2luZG93TWFuYWdlcn07XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUE7QUFFSixJQUFNQyxjQUFjQSxDQUNuQkMsVUFDQUMsZUFDQUMsMEJBQ1U7QUFDVkYsV0FBU0csR0FBRyxTQUFVQyxXQUFtQztBQUN4REEsVUFBTUMsZUFBZTtBQUVyQixRQUFJUCxlQUFlO0FBQ2xCLFVBQUlBLGNBQWNRLFNBQVMsR0FBRztBQUM3QlIsc0JBQWNTLE1BQU07TUFDckIsT0FBTztBQUNOVCxzQkFBY1UsS0FBS04scUJBQXFCO01BQ3pDO0FBQ0E7SUFDRDtBQUVBSixvQkFBZ0IsSUFBSVcsR0FBR0MsR0FBR0MsY0FBYztB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NUIsd0JBQStEc0QsOEJBQThCTCxNQUFNO0FBRXpHcEQsY0FBWXdELFNBQVN0RCxlQUFlQyxxQkFBcUI7QUFDMUQsQ0FBQzsiLAogICJuYW1lcyI6IFsibWVzc2FnZURpYWxvZyIsICJhZGRMaXN0ZW5lciIsICIkZWxlbWVudCIsICJ3aW5kb3dNYW5hZ2VyIiwgIm1lc3NhZ2VEaWFsb2dQcm9wZXJ0eSIsICJvbiIsICJldmVudCIsICJwcmV2ZW50RGVmYXVsdCIsICJpc09wZW5lZCIsICJjbG9zZSIsICJvcGVuIiwgIk9PIiwgInVpIiwgIk1lc3NhZ2VEaWFsb2ciLCAiYWRkV2luZG93cyIsICJvcGVuV2luZG93IiwgImltcG9ydF9leHRfZ2FkZ2V0MiIsICJfX3RvRVNNIiwgInJlcXVpcmUiLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAiZ2V0STE4bk1lc3NhZ2VzIiwgIkNsb3NlIiwgImxvY2FsaXplIiwgImVuIiwgImphIiwgInJ1IiwgIlRleHQiLCAiVGl0bGUiLCAiaTE4bk1lc3NhZ2VzIiwgImdldE1lc3NhZ2UiLCAia2V5IiwgImdlbmVyYXRlRWxlbWVudHMiLCAiJGJvZHkiLCAiJHRhYmxlSXRlbXMiLCAiZmluZCIsICJtYXAiLCAiX2luZGV4IiwgImVsZW1lbnQiLCAiJCIsICJkZWZhdWx0IiwgImNyZWF0ZUVsZW1lbnQiLCAiYWNjZXNzS2V5IiwgInRvVXBwZXJDYXNlIiwgImdldEF0dHJpYnV0ZSIsICJ0aXRsZSIsICJ0ZXh0Q29udGVudCIsICJ2YWx1ZSIsICJjb25jYXQiLCAiaWQiLCAidGV4dCIsICJyZXBsYWNlIiwgInRyaW0iLCAiZ2V0IiwgIiR0YWJsZSIsICJhZGRDbGFzcyIsICJjc3MiLCAiYXBwZW5kIiwgIiRvcGVuZXIiLCAiZ2VuZXJhdGVNZXNzYWdlRGlhbG9nUHJvcGVydHkiLCAibWVzc2FnZSIsICJhY3Rpb25zIiwgImFjdGlvbiIsICJmbGFncyIsICJsYWJlbCIsICJzaXplIiwgImltcG9ydF9leHRfZ2FkZ2V0MyIsICJpbml0V2luZG93TWFuYWdlciIsICJXaW5kb3dNYW5hZ2VyIiwgIndpZHRoIiwgImdldEJvZHkiLCAidGhlbiIsICJhY2Nlc3NLZXlDaGVhdHNoZWV0IiwgImhpZGUiLCAiYXBwZW5kVG8iXQp9Cg==

})();

/* </nowiki> */

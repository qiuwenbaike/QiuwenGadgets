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
  const $table = $(/* @__PURE__ */ import_ext_gadget2.default.createElement("table", {
    className: "wikitable",
    style: {
      width: "100%"
    }
  }, [...$body.find("[accesskey]")].reduce((accumulator, element) => [...accumulator, /* @__PURE__ */ import_ext_gadget2.default.createElement(import_ext_gadget2.default.Fragment, null, /* @__PURE__ */ import_ext_gadget2.default.createElement("tr", null, /* @__PURE__ */ import_ext_gadget2.default.createElement("th", null, element.accessKey.toUpperCase()), /* @__PURE__ */ import_ext_gadget2.default.createElement("td", null, (element.getAttribute("aria-label") || element.title || element.textContent || element.value || $body.find('label[for="'.concat(element.id, '"]')).text()).replace(/\s*?\[.+?]$/, "").trim())))], [])));
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0FjY2Vzc0tleUNoZWF0c2hlZXQvbW9kdWxlcy9hZGRMaXN0ZW5lci50cyIsICJzcmMvQWNjZXNzS2V5Q2hlYXRzaGVldC9tb2R1bGVzL3V0aWwvZ2VuZXJhdGVFbGVtZW50cy50c3giLCAic3JjL0FjY2Vzc0tleUNoZWF0c2hlZXQvbW9kdWxlcy9pMThuLnRzIiwgInNyYy9BY2Nlc3NLZXlDaGVhdHNoZWV0L21vZHVsZXMvdXRpbC9nZW5lcmF0ZU1lc3NhZ2VEaWFsb2dQcm9wZXJ0eS50cyIsICJzcmMvQWNjZXNzS2V5Q2hlYXRzaGVldC9BY2Nlc3NLZXlDaGVhdHNoZWV0LnRzIiwgInNyYy9BY2Nlc3NLZXlDaGVhdHNoZWV0L21vZHVsZXMvaW5pdFdpbmRvd01hbmFnZXIudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImxldCBtZXNzYWdlRGlhbG9nOiBPTy51aS5NZXNzYWdlRGlhbG9nO1xuXG5jb25zdCBhZGRMaXN0ZW5lciA9IChcblx0JGVsZW1lbnQ6IEpRdWVyeSxcblx0d2luZG93TWFuYWdlcjogT08udWkuV2luZG93TWFuYWdlcixcblx0bWVzc2FnZURpYWxvZ1Byb3BlcnR5OiBPTy51aS5XaW5kb3dNYW5hZ2VyLldpbmRvd09wZW5pbmdEYXRhXG4pOiB2b2lkID0+IHtcblx0JGVsZW1lbnQub24oJ2NsaWNrJywgKGV2ZW50OiBKUXVlcnkuQ2xpY2tFdmVudCk6IHZvaWQgPT4ge1xuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cblx0XHRpZiAobWVzc2FnZURpYWxvZykge1xuXHRcdFx0aWYgKG1lc3NhZ2VEaWFsb2cuaXNPcGVuZWQoKSkge1xuXHRcdFx0XHRtZXNzYWdlRGlhbG9nLmNsb3NlKCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRtZXNzYWdlRGlhbG9nLm9wZW4obWVzc2FnZURpYWxvZ1Byb3BlcnR5KTtcblx0XHRcdH1cblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRtZXNzYWdlRGlhbG9nID0gbmV3IE9PLnVpLk1lc3NhZ2VEaWFsb2coKTtcblx0XHR3aW5kb3dNYW5hZ2VyLmFkZFdpbmRvd3MoW21lc3NhZ2VEaWFsb2ddKTtcblx0XHR2b2lkIHdpbmRvd01hbmFnZXIub3BlbldpbmRvdyhtZXNzYWdlRGlhbG9nLCBtZXNzYWdlRGlhbG9nUHJvcGVydHkpO1xuXHR9KTtcbn07XG5cbmV4cG9ydCB7YWRkTGlzdGVuZXJ9O1xuIiwgImltcG9ydCBSZWFjdCBmcm9tICdleHQuZ2FkZ2V0LlJlYWN0JztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi4vaTE4bic7XG5cbmNvbnN0IGdlbmVyYXRlRWxlbWVudHMgPSAoXG5cdCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50PlxuKToge1xuXHQkdGFibGU6IEpRdWVyeTtcblx0JG9wZW5lcjogSlF1ZXJ5O1xufSA9PiB7XG5cdGNvbnN0ICR0YWJsZSA9ICQoXG5cdFx0PHRhYmxlXG5cdFx0XHRjbGFzc05hbWU9XCJ3aWtpdGFibGVcIlxuXHRcdFx0c3R5bGU9e3tcblx0XHRcdFx0d2lkdGg6ICcxMDAlJyxcblx0XHRcdH19XG5cdFx0PlxuXHRcdFx0e1suLi4kYm9keS5maW5kKCdbYWNjZXNza2V5XScpXS5yZWR1Y2UoXG5cdFx0XHRcdChhY2N1bXVsYXRvciwgZWxlbWVudCkgPT4gW1xuXHRcdFx0XHRcdC4uLmFjY3VtdWxhdG9yLFxuXHRcdFx0XHRcdDw+XG5cdFx0XHRcdFx0XHQ8dHI+XG5cdFx0XHRcdFx0XHRcdDx0aD57ZWxlbWVudC5hY2Nlc3NLZXkudG9VcHBlckNhc2UoKX08L3RoPlxuXHRcdFx0XHRcdFx0XHQ8dGQ+XG5cdFx0XHRcdFx0XHRcdFx0eyhcblx0XHRcdFx0XHRcdFx0XHRcdGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJykgfHxcblx0XHRcdFx0XHRcdFx0XHRcdGVsZW1lbnQudGl0bGUgfHxcblx0XHRcdFx0XHRcdFx0XHRcdGVsZW1lbnQudGV4dENvbnRlbnQgfHxcblx0XHRcdFx0XHRcdFx0XHRcdChlbGVtZW50IGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlIHx8XG5cdFx0XHRcdFx0XHRcdFx0XHQkYm9keS5maW5kKGBsYWJlbFtmb3I9XCIke2VsZW1lbnQuaWR9XCJdYCkudGV4dCgpXG5cdFx0XHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdFx0XHRcdFx0LnJlcGxhY2UoL1xccyo/XFxbLis/XSQvLCAnJylcblx0XHRcdFx0XHRcdFx0XHRcdC50cmltKCl9XG5cdFx0XHRcdFx0XHRcdDwvdGQ+XG5cdFx0XHRcdFx0XHQ8L3RyPlxuXHRcdFx0XHRcdDwvPixcblx0XHRcdFx0XSxcblx0XHRcdFx0W10gYXMgUmVhY3QuUmVhY3RFbGVtZW50W11cblx0XHRcdCl9XG5cdFx0PC90YWJsZT5cblx0KSBhcyBKUXVlcnk7XG5cdGNvbnN0ICRvcGVuZXIgPSAkKDxhIGFjY2Vzc0tleT1cIj9cIj57Z2V0TWVzc2FnZSgnVGV4dCcpfTwvYT4pIGFzIEpRdWVyeTtcblxuXHRyZXR1cm4ge1xuXHRcdCR0YWJsZSxcblx0XHQkb3BlbmVyLFxuXHR9O1xufTtcblxuZXhwb3J0IHtnZW5lcmF0ZUVsZW1lbnRzfTtcbiIsICJpbXBvcnQge2xvY2FsaXplfSBmcm9tICdleHQuZ2FkZ2V0LmkxOG4nO1xuXG5jb25zdCBnZXRJMThuTWVzc2FnZXMgPSAoKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0Q2xvc2U6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQ2xvc2UnLFxuXHRcdFx0amE6ICfplonjgZjjgosnLFxuXHRcdFx0cnU6ICfQl9Cw0LrRgNGL0YLRjCcsXG5cdFx0XHQnemgtaGFucyc6ICflhbPpl60nLFxuXHRcdFx0J3poLWhhbnQnOiAn6Zec6ZaJJyxcblx0XHR9KSxcblx0XHRUZXh0OiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ09wZW4gYWNjZXNzIGtleXMgY2hlYXRzaGVldCcsXG5cdFx0XHRqYTogJ+OCouOCr+OCu+OCueOCreODvOOBruODgeODvOODiOOCt+ODvOODiCcsXG5cdFx0XHRydTogJ9Ce0YLQutGA0YvRgtGMINC/0L7QtNGB0LrQsNC30LrRgyDRgSDQutC70LDQstC40LDRgtGD0YDQvdGL0LzQuCDRj9GA0LvRi9C60LDQvNC4Jyxcblx0XHRcdCd6aC1oYW5zJzogJ+aYvuekuumUruebmOW/q+aNt+mUruaPkOekuicsXG5cdFx0XHQnemgtaGFudCc6ICfpoa/npLrpjbXnm6Tlv6vpgJ/pjbXmj5DnpLonLFxuXHRcdH0pLFxuXHRcdFRpdGxlOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0FjY2VzcyBrZXlzIGNoZWF0c2hlZXQnLFxuXHRcdFx0amE6ICfjgqLjgq/jgrvjgrnjgq3jg7zjga7jg4Hjg7zjg4jjgrfjg7zjg4gnLFxuXHRcdFx0cnU6ICfQn9C+0LTRgdC60LDQt9C60Lgg0LrQu9Cw0LLQuNCw0YLRg9GA0L3Ri9GFINGP0YDQu9GL0LrQvtCyJyxcblx0XHRcdCd6aC1oYW5zJzogJ+mUruebmOW/q+aNt+mUruaPkOekuicsXG5cdFx0XHQnemgtaGFudCc6ICfpjbXnm6Tlv6vpgJ/pjbXmj5DnpLonLFxuXHRcdH0pLFxuXHR9O1xufTtcblxuY29uc3QgaTE4bk1lc3NhZ2VzID0gZ2V0STE4bk1lc3NhZ2VzKCk7XG5cbmNvbnN0IGdldE1lc3NhZ2U6IEdldE1lc3NhZ2VzPHR5cGVvZiBpMThuTWVzc2FnZXM+ID0gKGtleSkgPT4ge1xuXHRyZXR1cm4gaTE4bk1lc3NhZ2VzW2tleV0gfHwga2V5O1xufTtcblxuZXhwb3J0IHtnZXRNZXNzYWdlfTtcbiIsICJpbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4uL2kxOG4nO1xuXG5jb25zdCBnZW5lcmF0ZU1lc3NhZ2VEaWFsb2dQcm9wZXJ0eSA9ICgkZWxlbWVudDogSlF1ZXJ5KTogT08udWkuV2luZG93TWFuYWdlci5XaW5kb3dPcGVuaW5nRGF0YSA9PiB7XG5cdGNvbnN0IG1lc3NhZ2VEaWFsb2dQcm9wZXJ0eTogT08udWkuV2luZG93TWFuYWdlci5XaW5kb3dPcGVuaW5nRGF0YSA9IHtcblx0XHR0aXRsZTogZ2V0TWVzc2FnZSgnVGl0bGUnKSxcblx0XHRtZXNzYWdlOiAkZWxlbWVudCxcblx0XHRhY3Rpb25zOiBbXG5cdFx0XHR7XG5cdFx0XHRcdGFjdGlvbjogJ2Nsb3NlJyxcblx0XHRcdFx0ZmxhZ3M6IFsnc2FmZScsICdjbG9zZSddLFxuXHRcdFx0XHRsYWJlbDogZ2V0TWVzc2FnZSgnQ2xvc2UnKSxcblx0XHRcdH0sXG5cdFx0XSxcblx0XHRzaXplOiAnbWVkaXVtJyxcblx0fTtcblxuXHRyZXR1cm4gbWVzc2FnZURpYWxvZ1Byb3BlcnR5O1xufTtcblxuZXhwb3J0IHtnZW5lcmF0ZU1lc3NhZ2VEaWFsb2dQcm9wZXJ0eX07XG4iLCAiaW1wb3J0IHthZGRMaXN0ZW5lcn0gZnJvbSAnLi9tb2R1bGVzL2FkZExpc3RlbmVyJztcbmltcG9ydCB7Z2VuZXJhdGVFbGVtZW50c30gZnJvbSAnLi9tb2R1bGVzL3V0aWwvZ2VuZXJhdGVFbGVtZW50cyc7XG5pbXBvcnQge2dlbmVyYXRlTWVzc2FnZURpYWxvZ1Byb3BlcnR5fSBmcm9tICcuL21vZHVsZXMvdXRpbC9nZW5lcmF0ZU1lc3NhZ2VEaWFsb2dQcm9wZXJ0eSc7XG5pbXBvcnQge2dldEJvZHl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5pbXBvcnQge2luaXRXaW5kb3dNYW5hZ2VyfSBmcm9tICcuL21vZHVsZXMvaW5pdFdpbmRvd01hbmFnZXInO1xuXG4vKipcbiAqIEFkZHMgYWx0K3NoaWZ0Kz8gYXMgYW4gYWNjZXNzIGtleSB0byBzaG93IGEgbGlzdCBvZiBhbGwgZGVmYXVsdCBhY2Nlc3Mga2V5c1xuICovXG52b2lkIGdldEJvZHkoKS50aGVuKGZ1bmN0aW9uIGFjY2Vzc0tleUNoZWF0c2hlZXQoJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KTogdm9pZCB7XG5cdGNvbnN0IHskdGFibGUsICRvcGVuZXJ9ID0gZ2VuZXJhdGVFbGVtZW50cygkYm9keSk7XG5cdCRvcGVuZXIuaGlkZSgpLmFwcGVuZFRvKCRib2R5KTtcblxuXHRjb25zdCB3aW5kb3dNYW5hZ2VyOiBPTy51aS5XaW5kb3dNYW5hZ2VyID0gaW5pdFdpbmRvd01hbmFnZXIoKTtcblx0d2luZG93TWFuYWdlci4kZWxlbWVudC5hcHBlbmRUbygkYm9keSk7XG5cblx0Y29uc3QgbWVzc2FnZURpYWxvZ1Byb3BlcnR5OiBPTy51aS5XaW5kb3dNYW5hZ2VyLldpbmRvd09wZW5pbmdEYXRhID0gZ2VuZXJhdGVNZXNzYWdlRGlhbG9nUHJvcGVydHkoJHRhYmxlKTtcblxuXHRhZGRMaXN0ZW5lcigkb3BlbmVyLCB3aW5kb3dNYW5hZ2VyLCBtZXNzYWdlRGlhbG9nUHJvcGVydHkpO1xufSk7XG4iLCAiY29uc3QgaW5pdFdpbmRvd01hbmFnZXIgPSAoKTogT08udWkuV2luZG93TWFuYWdlciA9PiB7XG5cdGNvbnN0IHdpbmRvd01hbmFnZXI6IE9PLnVpLldpbmRvd01hbmFnZXIgPSBuZXcgT08udWkuV2luZG93TWFuYWdlcigpO1xuXG5cdHdpbmRvd01hbmFnZXIuJGVsZW1lbnQuY3NzKHtcblx0XHQnbWFyZ2luLWJvdHRvbSc6ICcwJyxcblx0XHR3aWR0aDogJzM1ZW0nLFxuXHR9KTtcblxuXHRyZXR1cm4gd2luZG93TWFuYWdlcjtcbn07XG5cbmV4cG9ydCB7aW5pdFdpbmRvd01hbmFnZXJ9O1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBO0FBRUosSUFBTUMsY0FBY0EsQ0FDbkJDLFVBQ0FDLGVBQ0FDLDBCQUNVO0FBQ1ZGLFdBQVNHLEdBQUcsU0FBVUMsV0FBbUM7QUFDeERBLFVBQU1DLGVBQWU7QUFFckIsUUFBSVAsZUFBZTtBQUNsQixVQUFJQSxjQUFjUSxTQUFTLEdBQUc7QUFDN0JSLHNCQUFjUyxNQUFNO01BQ3JCLE9BQU87QUFDTlQsc0JBQWNVLEtBQUtOLHFCQUFxQjtNQUN6QztBQUNBO0lBQ0Q7QUFFQUosb0JBQWdCLElBQUlX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UWUsS0FBSyxFQUFFQyxTQUFTeEMsS0FBSztBQUU3QixRQUFNN0IsZ0JBQXFDOEQsa0JBQWtCO0FBQzdEOUQsZ0JBQWNELFNBQVNzRSxTQUFTeEMsS0FBSztBQUVyQyxRQUFNNUIsd0JBQStEcUQsOEJBQThCeEIsTUFBTTtBQUV6R2hDLGNBQVl1RCxTQUFTckQsZUFBZUMscUJBQXFCO0FBQzFELENBQUM7IiwKICAibmFtZXMiOiBbIm1lc3NhZ2VEaWFsb2ciLCAiYWRkTGlzdGVuZXIiLCAiJGVsZW1lbnQiLCAid2luZG93TWFuYWdlciIsICJtZXNzYWdlRGlhbG9nUHJvcGVydHkiLCAib24iLCAiZXZlbnQiLCAicHJldmVudERlZmF1bHQiLCAiaXNPcGVuZWQiLCAiY2xvc2UiLCAib3BlbiIsICJPTyIsICJ1aSIsICJNZXNzYWdlRGlhbG9nIiwgImFkZFdpbmRvd3MiLCAib3BlbldpbmRvdyIsICJpbXBvcnRfZXh0X2dhZGdldDIiLCAiX190b0VTTSIsICJyZXF1aXJlIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgImdldEkxOG5NZXNzYWdlcyIsICJDbG9zZSIsICJsb2NhbGl6ZSIsICJlbiIsICJqYSIsICJydSIsICJUZXh0IiwgIlRpdGxlIiwgImkxOG5NZXNzYWdlcyIsICJnZXRNZXNzYWdlIiwgImtleSIsICJnZW5lcmF0ZUVsZW1lbnRzIiwgIiRib2R5IiwgIiR0YWJsZSIsICIkIiwgImRlZmF1bHQiLCAiY3JlYXRlRWxlbWVudCIsICJjbGFzc05hbWUiLCAic3R5bGUiLCAid2lkdGgiLCAiZmluZCIsICJyZWR1Y2UiLCAiYWNjdW11bGF0b3IiLCAiZWxlbWVudCIsICJGcmFnbWVudCIsICJhY2Nlc3NLZXkiLCAidG9VcHBlckNhc2UiLCAiZ2V0QXR0cmlidXRlIiwgInRpdGxlIiwgInRleHRDb250ZW50IiwgInZhbHVlIiwgImNvbmNhdCIsICJpZCIsICJ0ZXh0IiwgInJlcGxhY2UiLCAidHJpbSIsICIkb3BlbmVyIiwgImdlbmVyYXRlTWVzc2FnZURpYWxvZ1Byb3BlcnR5IiwgIm1lc3NhZ2UiLCAiYWN0aW9ucyIsICJhY3Rpb24iLCAiZmxhZ3MiLCAibGFiZWwiLCAic2l6ZSIsICJpbXBvcnRfZXh0X2dhZGdldDMiLCAiaW5pdFdpbmRvd01hbmFnZXIiLCAiV2luZG93TWFuYWdlciIsICJjc3MiLCAiZ2V0Qm9keSIsICJ0aGVuIiwgImFjY2Vzc0tleUNoZWF0c2hlZXQiLCAiaGlkZSIsICJhcHBlbmRUbyJdCn0K

})();

/* </nowiki> */

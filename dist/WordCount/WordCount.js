/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://zh.wikipedia.org/wiki/MediaWiki:Gadget-Wordcount.js}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/WordCount}
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

// dist/WordCount/WordCount.js
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
//! src/WordCount/modules/constant.ts
var CLASS_NAME = "gadget-wordcount";
//! src/WordCount/modules/wordCount.tsx
var import_ext_gadget3 = __toESM(require("ext.gadget.React"), 1);
//! src/WordCount/modules/util/countLength.ts
var countLength = (text) => {
  return text.length;
};
//! src/WordCount/modules/util/countByte.ts
var countByte = (text) => {
  return countLength(text.replace(/[\u0000-\u007F]/g, ".").replace(/[\u0080-\u07FF\uD800-\uDFFF]/g, "..").replace(/[\u0800-\uD7FF\uE000-\uFFFF]/g, "..."));
};
//! src/WordCount/modules/util/countCJK.ts
var countCJK = (text) => {
  return countLength(text.replace(/\./g, "").replace(/[\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3005\u3007\u3021-\u3029\u3038-\u303B\u3400-\u4DB5\u4E00-\u9FCC\uF900-\uFA6D\uFA70-\uFAD9]|[\uD840-\uD868][\uDC00-\uDFFF]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|[\uD86A-\uD86C][\uDC00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D]|\uD87E[\uDC00-\uDE1D]/g, ".").replace(/[^.]/g, ""));
};
//! src/WordCount/modules/i18n.ts
var import_ext_gadget = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    "character(s)": (0, import_ext_gadget.localize)({
      en: " character(s)",
      "zh-hans": "字符",
      "zh-hant": "字元"
    }),
    "(": (0, import_ext_gadget.localize)({
      en: " (",
      zh: "（"
    }),
    ")": (0, import_ext_gadget.localize)({
      en: ") ",
      zh: "）"
    }),
    CJK: (0, import_ext_gadget.localize)({
      en: " CJK",
      "zh-hans": "个CJK字符",
      "zh-hant": "个CJK字元"
    }),
    "byte(s) in UTF-8 encoding": (0, import_ext_gadget.localize)({
      en: "byte(s) in UTF-8 encoding",
      "zh-hans": "字节（UTF-8编码）",
      "zh-hant": "位元組（UTF-8編碼）"
    })
  };
};
var i18nMessages = getI18nMessages();
var getMessage = (key) => {
  return i18nMessages[key] || key;
};
//! src/WordCount/modules/getCount.ts
var getCountByTextLength = (text) => {
  return "".concat(countLength(text)).concat(getMessage("character(s)"));
};
var getCJKCountByTextLength = (text) => {
  return "".concat(getMessage("(")).concat(countCJK(text)).concat(getMessage("CJK")).concat(getMessage(")"));
};
var getUTF8CountByTextLength = (text) => {
  return "".concat(countByte(text)).concat(getMessage("byte(s) in UTF-8 encoding"));
};
//! src/WordCount/components/WordCount.tsx
var import_ext_gadget2 = __toESM(require("ext.gadget.React"), 1);
var WordCount = (props) => {
  const {
    text
  } = props;
  return /* @__PURE__ */ import_ext_gadget2.default.createElement("div", {
    className: [CLASS_NAME, "noprint", "ui-state-highlight", "ui-corner-all"]
  }, getCountByTextLength(text), getCJKCountByTextLength(text), /* @__PURE__ */ import_ext_gadget2.default.createElement("br", null), getUTF8CountByTextLength(text));
};
var WordCount_default = WordCount;
//! src/WordCount/modules/wordCount.tsx
var wordCount = () => {
  var _window$getSelection;
  var _iterator2 = _createForOfIteratorHelper(document.querySelectorAll(".".concat(CLASS_NAME))), _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
      const element = _step2.value;
      element.remove();
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
  const text = (_window$getSelection = window.getSelection()) === null || _window$getSelection === void 0 ? void 0 : _window$getSelection.toString();
  if (!text) {
    return;
  }
  const wordCountElement = /* @__PURE__ */ import_ext_gadget3.default.createElement(WordCount_default, {
    text
  });
  document.body.append(wordCountElement);
  setTimeout(() => {
    wordCountElement.style.display = "none";
  }, 5 * 1e3);
};
//! src/WordCount/modules/addListener.ts
var addListener = () => {
  let events;
  if ("ontouchstart" in document) {
    events = ["touchstart", "touchend"];
  } else {
    events = ["mouseup", "keyup"];
  }
  var _iterator3 = _createForOfIteratorHelper(events), _step3;
  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
      const event = _step3.value;
      document.body.addEventListener(event, () => {
        wordCount();
      });
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }
};
//! src/WordCount/WordCount.ts
addListener();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1dvcmRDb3VudC9tb2R1bGVzL2NvbnN0YW50LnRzIiwgInNyYy9Xb3JkQ291bnQvbW9kdWxlcy93b3JkQ291bnQudHN4IiwgInNyYy9Xb3JkQ291bnQvbW9kdWxlcy91dGlsL2NvdW50TGVuZ3RoLnRzIiwgInNyYy9Xb3JkQ291bnQvbW9kdWxlcy91dGlsL2NvdW50Qnl0ZS50cyIsICJzcmMvV29yZENvdW50L21vZHVsZXMvdXRpbC9jb3VudENKSy50cyIsICJzcmMvV29yZENvdW50L21vZHVsZXMvaTE4bi50cyIsICJzcmMvV29yZENvdW50L21vZHVsZXMvZ2V0Q291bnQudHMiLCAic3JjL1dvcmRDb3VudC9jb21wb25lbnRzL1dvcmRDb3VudC50c3giLCAic3JjL1dvcmRDb3VudC9tb2R1bGVzL2FkZExpc3RlbmVyLnRzIiwgInNyYy9Xb3JkQ291bnQvV29yZENvdW50LnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBDTEFTU19OQU1FOiBzdHJpbmcgPSAnZ2FkZ2V0LXdvcmRjb3VudCc7XG5cbmV4cG9ydCB7Q0xBU1NfTkFNRX07XG4iLCAiaW1wb3J0IHtDTEFTU19OQU1FfSBmcm9tICcuL2NvbnN0YW50JztcbmltcG9ydCBSZWFjdCBmcm9tICdleHQuZ2FkZ2V0LlJlYWN0JztcbmltcG9ydCBXb3JkQ291bnQgZnJvbSAnLi4vY29tcG9uZW50cy9Xb3JkQ291bnQnO1xuXG5jb25zdCB3b3JkQ291bnQgPSAoKTogdm9pZCA9PiB7XG5cdGZvciAoY29uc3QgZWxlbWVudCBvZiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAuJHtDTEFTU19OQU1FfWApKSB7XG5cdFx0ZWxlbWVudC5yZW1vdmUoKTtcblx0fVxuXG5cdGNvbnN0IHRleHQ6IHN0cmluZyB8IHVuZGVmaW5lZCA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKT8udG9TdHJpbmcoKTtcblx0aWYgKCF0ZXh0KSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3Qgd29yZENvdW50RWxlbWVudCA9IDxXb3JkQ291bnQgdGV4dD17dGV4dH0gLz47XG5cblx0ZG9jdW1lbnQuYm9keS5hcHBlbmQod29yZENvdW50RWxlbWVudCk7XG5cblx0c2V0VGltZW91dCgoKTogdm9pZCA9PiB7XG5cdFx0d29yZENvdW50RWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHR9LCA1ICogMTAwMCk7XG59O1xuXG5leHBvcnQge3dvcmRDb3VudH07XG4iLCAiY29uc3QgY291bnRMZW5ndGggPSAodGV4dDogc3RyaW5nKTogbnVtYmVyID0+IHtcblx0cmV0dXJuIHRleHQubGVuZ3RoO1xufTtcblxuZXhwb3J0IHtjb3VudExlbmd0aH07XG4iLCAiaW1wb3J0IHtjb3VudExlbmd0aH0gZnJvbSAnLi9jb3VudExlbmd0aCc7XG5cbmNvbnN0IGNvdW50Qnl0ZSA9ICh0ZXh0OiBzdHJpbmcpOiBudW1iZXIgPT4ge1xuXHRyZXR1cm4gY291bnRMZW5ndGgoXG5cdFx0dGV4dFxuXHRcdFx0LnJlcGxhY2UoL1tcXHUwMDAwLVxcdTAwN0ZdL2csICcuJylcblx0XHRcdC5yZXBsYWNlKC9bXFx1MDA4MC1cXHUwN0ZGXFx1RDgwMC1cXHVERkZGXS9nLCAnLi4nKVxuXHRcdFx0LnJlcGxhY2UoL1tcXHUwODAwLVxcdUQ3RkZcXHVFMDAwLVxcdUZGRkZdL2csICcuLi4nKVxuXHQpO1xufTtcblxuZXhwb3J0IHtjb3VudEJ5dGV9O1xuIiwgImltcG9ydCB7Y291bnRMZW5ndGh9IGZyb20gJy4vY291bnRMZW5ndGgnO1xuXG5jb25zdCBjb3VudENKSyA9ICh0ZXh0OiBzdHJpbmcpOiBudW1iZXIgPT4ge1xuXHRyZXR1cm4gY291bnRMZW5ndGgoXG5cdFx0dGV4dFxuXHRcdFx0LnJlcGxhY2UoL1xcLi9nLCAnJylcblx0XHRcdC5yZXBsYWNlKFxuXHRcdFx0XHQvW1xcdTJFODAtXFx1MkU5OVxcdTJFOUItXFx1MkVGM1xcdTJGMDAtXFx1MkZENVxcdTMwMDVcXHUzMDA3XFx1MzAyMS1cXHUzMDI5XFx1MzAzOC1cXHUzMDNCXFx1MzQwMC1cXHU0REI1XFx1NEUwMC1cXHU5RkNDXFx1RjkwMC1cXHVGQTZEXFx1RkE3MC1cXHVGQUQ5XXxbXFx1RDg0MC1cXHVEODY4XVtcXHVEQzAwLVxcdURGRkZdfFxcdUQ4NjlbXFx1REMwMC1cXHVERUQ2XFx1REYwMC1cXHVERkZGXXxbXFx1RDg2QS1cXHVEODZDXVtcXHVEQzAwLVxcdURGRkZdfFxcdUQ4NkRbXFx1REMwMC1cXHVERjM0XFx1REY0MC1cXHVERkZGXXxcXHVEODZFW1xcdURDMDAtXFx1REMxRF18XFx1RDg3RVtcXHVEQzAwLVxcdURFMURdL2csXG5cdFx0XHRcdCcuJ1xuXHRcdFx0KVxuXHRcdFx0LnJlcGxhY2UoL1teLl0vZywgJycpXG5cdCk7XG59O1xuXG5leHBvcnQge2NvdW50Q0pLfTtcbiIsICJpbXBvcnQge2xvY2FsaXplfSBmcm9tICdleHQuZ2FkZ2V0LmkxOG4nO1xuXG5jb25zdCBnZXRJMThuTWVzc2FnZXMgPSAoKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0J2NoYXJhY3RlcihzKSc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnIGNoYXJhY3RlcihzKScsXG5cdFx0XHQnemgtaGFucyc6ICflrZfnrKYnLFxuXHRcdFx0J3poLWhhbnQnOiAn5a2X5YWDJyxcblx0XHR9KSxcblx0XHQnKCc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnICgnLFxuXHRcdFx0emg6ICfvvIgnLFxuXHRcdH0pLFxuXHRcdCcpJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICcpICcsXG5cdFx0XHR6aDogJ++8iScsXG5cdFx0fSksXG5cdFx0Q0pLOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJyBDSksnLFxuXHRcdFx0J3poLWhhbnMnOiAn5LiqQ0pL5a2X56ymJyxcblx0XHRcdCd6aC1oYW50JzogJ+S4qkNKS+Wtl+WFgycsXG5cdFx0fSksXG5cdFx0J2J5dGUocykgaW4gVVRGLTggZW5jb2RpbmcnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ2J5dGUocykgaW4gVVRGLTggZW5jb2RpbmcnLFxuXHRcdFx0J3poLWhhbnMnOiAn5a2X6IqC77yIVVRGLTjnvJbnoIHvvIknLFxuXHRcdFx0J3poLWhhbnQnOiAn5L2N5YWD57WE77yIVVRGLTjnt6jnorzvvIknLFxuXHRcdH0pLFxuXHR9O1xufTtcbmNvbnN0IGkxOG5NZXNzYWdlcyA9IGdldEkxOG5NZXNzYWdlcygpO1xuXG5jb25zdCBnZXRNZXNzYWdlOiBHZXRNZXNzYWdlczx0eXBlb2YgaTE4bk1lc3NhZ2VzPiA9IChrZXkpID0+IHtcblx0cmV0dXJuIGkxOG5NZXNzYWdlc1trZXldIHx8IGtleTtcbn07XG5cbmV4cG9ydCB7Z2V0TWVzc2FnZX07XG4iLCAiaW1wb3J0IHtjb3VudEJ5dGV9IGZyb20gJy4vdXRpbC9jb3VudEJ5dGUnO1xuaW1wb3J0IHtjb3VudENKS30gZnJvbSAnLi91dGlsL2NvdW50Q0pLJztcbmltcG9ydCB7Y291bnRMZW5ndGh9IGZyb20gJy4vdXRpbC9jb3VudExlbmd0aCc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vaTE4bic7XG5cbmNvbnN0IGdldENvdW50QnlUZXh0TGVuZ3RoID0gKHRleHQ6IHN0cmluZyk6IHN0cmluZyA9PiB7XG5cdHJldHVybiBgJHtjb3VudExlbmd0aCh0ZXh0KX0ke2dldE1lc3NhZ2UoJ2NoYXJhY3RlcihzKScpfWA7XG59O1xuXG5jb25zdCBnZXRDSktDb3VudEJ5VGV4dExlbmd0aCA9ICh0ZXh0OiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuXHRyZXR1cm4gYCR7Z2V0TWVzc2FnZSgnKCcpfSR7Y291bnRDSksodGV4dCl9JHtnZXRNZXNzYWdlKCdDSksnKX0ke2dldE1lc3NhZ2UoJyknKX1gO1xufTtcblxuY29uc3QgZ2V0VVRGOENvdW50QnlUZXh0TGVuZ3RoID0gKHRleHQ6IHN0cmluZyk6IHN0cmluZyA9PiB7XG5cdHJldHVybiBgJHtjb3VudEJ5dGUodGV4dCl9JHtnZXRNZXNzYWdlKCdieXRlKHMpIGluIFVURi04IGVuY29kaW5nJyl9YDtcbn07XG5cbmV4cG9ydCB7Z2V0Q291bnRCeVRleHRMZW5ndGgsIGdldENKS0NvdW50QnlUZXh0TGVuZ3RoLCBnZXRVVEY4Q291bnRCeVRleHRMZW5ndGh9O1xuIiwgImltcG9ydCB7Z2V0Q0pLQ291bnRCeVRleHRMZW5ndGgsIGdldENvdW50QnlUZXh0TGVuZ3RoLCBnZXRVVEY4Q291bnRCeVRleHRMZW5ndGh9IGZyb20gJy4uL21vZHVsZXMvZ2V0Q291bnQnO1xuaW1wb3J0IHtDTEFTU19OQU1FfSBmcm9tICcuLi9tb2R1bGVzL2NvbnN0YW50JztcbmltcG9ydCBSZWFjdCBmcm9tICdleHQuZ2FkZ2V0LlJlYWN0JztcblxuaW50ZXJmYWNlIFByb3BzIHtcblx0dGV4dDogc3RyaW5nO1xufVxuXG5jb25zdCBXb3JkQ291bnQgPSAocHJvcHM6IFByb3BzKSA9PiB7XG5cdGNvbnN0IHt0ZXh0fSA9IHByb3BzO1xuXG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9e1tDTEFTU19OQU1FLCAnbm9wcmludCcsICd1aS1zdGF0ZS1oaWdobGlnaHQnLCAndWktY29ybmVyLWFsbCddfT5cblx0XHRcdHtnZXRDb3VudEJ5VGV4dExlbmd0aCh0ZXh0KX1cblx0XHRcdHtnZXRDSktDb3VudEJ5VGV4dExlbmd0aCh0ZXh0KX1cblx0XHRcdDxiciAvPlxuXHRcdFx0e2dldFVURjhDb3VudEJ5VGV4dExlbmd0aCh0ZXh0KX1cblx0XHQ8L2Rpdj5cblx0KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFdvcmRDb3VudDtcbiIsICJpbXBvcnQge3dvcmRDb3VudH0gZnJvbSAnLi93b3JkQ291bnQnO1xuXG5jb25zdCBhZGRMaXN0ZW5lciA9ICgpOiB2b2lkID0+IHtcblx0bGV0IGV2ZW50czogc3RyaW5nW107XG5cblx0aWYgKCdvbnRvdWNoc3RhcnQnIGluIGRvY3VtZW50KSB7XG5cdFx0ZXZlbnRzID0gWyd0b3VjaHN0YXJ0JywgJ3RvdWNoZW5kJ107XG5cdH0gZWxzZSB7XG5cdFx0ZXZlbnRzID0gWydtb3VzZXVwJywgJ2tleXVwJ107XG5cdH1cblxuXHRmb3IgKGNvbnN0IGV2ZW50IG9mIGV2ZW50cykge1xuXHRcdGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgKCk6IHZvaWQgPT4ge1xuXHRcdFx0d29yZENvdW50KCk7XG5cdFx0fSk7XG5cdH1cbn07XG5cbmV4cG9ydCB7YWRkTGlzdGVuZXJ9O1xuIiwgImltcG9ydCB7YWRkTGlzdGVuZXJ9IGZyb20gJy4vbW9kdWxlcy9hZGRMaXN0ZW5lcic7XG5cbmFkZExpc3RlbmVyKCk7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsYUFBcUI7O0FDQzNCLElBQUFDLHFCQUFrQkMsUUFBQUMsUUFBQSxrQkFBQSxHQUFBLENBQUE7O0FDRGxCLElBQU1DLGNBQWVDLFVBQXlCO0FBQzdDLFNBQU9BLEtBQUtDO0FBQ2I7O0FDQUEsSUFBTUMsWUFBYUYsVUFBeUI7QUFDM0MsU0FBT0QsWUFDTkMsS0FDRUcsUUFBUSxvQkFBb0IsR0FBRyxFQUMvQkEsUUFBUSxpQ0FBaUMsSUFBSSxFQUM3Q0EsUUFBUSxpQ0FBaUMsS0FBSyxDQUNqRDtBQUNEOztBQ1BBLElBQU1DLFdBQVlKLFVBQXlCO0FBQzFDLFNBQU9ELFlBQ05DLEtBQ0VHLFFBQVEsT0FBTyxFQUFFLEVBQ2pCQSxRQUNBLHdUQUNBLEdBQ0QsRUFDQ0EsUUFBUSxTQUFTLEVBQUUsQ0FDdEI7QUFDRDs7QUNaQSxJQUFBRSxvQkFBdUJQLFFBQUEsaUJBQUE7QUFFdkIsSUFBTVEsa0JBQWtCQSxNQUFNO0FBQzdCLFNBQU87SUFDTixpQkFBQSxHQUFnQkQsa0JBQUFFLFVBQVM7TUFDeEJDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDRCxNQUFBLEdBQUtILGtCQUFBRSxVQUFTO01BQ2JDLElBQUk7TUFDSkMs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QUEsWUFBakJvQixRQUFBRCxPQUFBakI7QUFDVlAsZUFBU2dCLEtBQUtVLGlCQUFpQkQsT0FBTyxNQUFZO0FBQ2pEN0Isa0JBQVU7TUFDWCxDQUFDO0lBQ0Y7RUFBQSxTQUFBYSxLQUFBO0FBQUFjLGVBQUFiLEVBQUFELEdBQUE7RUFBQSxVQUFBO0FBQUFjLGVBQUFaLEVBQUE7RUFBQTtBQUNEOztBQ2RBVSxZQUFZOyIsCiAgIm5hbWVzIjogWyJDTEFTU19OQU1FIiwgImltcG9ydF9leHRfZ2FkZ2V0MyIsICJfX3RvRVNNIiwgInJlcXVpcmUiLCAiY291bnRMZW5ndGgiLCAidGV4dCIsICJsZW5ndGgiLCAiY291bnRCeXRlIiwgInJlcGxhY2UiLCAiY291bnRDSksiLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAiZ2V0STE4bk1lc3NhZ2VzIiwgImxvY2FsaXplIiwgImVuIiwgInpoIiwgIkNKSyIsICJpMThuTWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAiZ2V0Q291bnRCeVRleHRMZW5ndGgiLCAiY29uY2F0IiwgImdldENKS0NvdW50QnlUZXh0TGVuZ3RoIiwgImdldFVURjhDb3VudEJ5VGV4dExlbmd0aCIsICJpbXBvcnRfZXh0X2dhZGdldDIiLCAiV29yZENvdW50IiwgInByb3BzIiwgImRlZmF1bHQiLCAiY3JlYXRlRWxlbWVudCIsICJjbGFzc05hbWUiLCAiV29yZENvdW50X2RlZmF1bHQiLCAid29yZENvdW50IiwgIl93aW5kb3ckZ2V0U2VsZWN0aW9uIiwgIl9pdGVyYXRvcjIiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAiZG9jdW1lbnQiLCAicXVlcnlTZWxlY3RvckFsbCIsICJfc3RlcDIiLCAicyIsICJuIiwgImRvbmUiLCAiZWxlbWVudCIsICJ2YWx1ZSIsICJyZW1vdmUiLCAiZXJyIiwgImUiLCAiZiIsICJ3aW5kb3ciLCAiZ2V0U2VsZWN0aW9uIiwgInRvU3RyaW5nIiwgIndvcmRDb3VudEVsZW1lbnQiLCAiYm9keSIsICJhcHBlbmQiLCAic2V0VGltZW91dCIsICJzdHlsZSIsICJkaXNwbGF5IiwgImFkZExpc3RlbmVyIiwgImV2ZW50cyIsICJfaXRlcmF0b3IzIiwgIl9zdGVwMyIsICJldmVudCIsICJhZGRFdmVudExpc3RlbmVyIl0KfQo=

})();

/* </nowiki> */

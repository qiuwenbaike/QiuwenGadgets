/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://zh.wikipedia.org/wiki/MediaWiki:Gadget-Wordcount.js}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/WordCount}
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
var wordCount = ($body) => {
  var _window$getSelection;
  $body.find(".".concat(CLASS_NAME)).remove();
  const text = (_window$getSelection = window.getSelection()) === null || _window$getSelection === void 0 ? void 0 : _window$getSelection.toString();
  if (!text) {
    return;
  }
  const $element = $(/* @__PURE__ */ import_ext_gadget3.default.createElement(WordCount_default, {
    text
  }));
  $element.appendTo($body);
  setTimeout(() => {
    $element.fadeOut("slow");
  }, 5 * 1e3);
};
//! src/WordCount/modules/addListener.ts
var addListener = ($body) => {
  let events;
  if ("ontouchstart" in document) {
    events = "touchstart touchend";
  } else {
    events = "mouseup keyup";
  }
  $body.on(events, () => {
    wordCount($body);
  });
};
//! src/WordCount/WordCount.ts
var import_ext_gadget4 = require("ext.gadget.Util");
void (0, import_ext_gadget4.getBody)().then(addListener);

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1dvcmRDb3VudC9tb2R1bGVzL2NvbnN0YW50LnRzIiwgInNyYy9Xb3JkQ291bnQvbW9kdWxlcy93b3JkQ291bnQudHN4IiwgInNyYy9Xb3JkQ291bnQvbW9kdWxlcy91dGlsL2NvdW50TGVuZ3RoLnRzIiwgInNyYy9Xb3JkQ291bnQvbW9kdWxlcy91dGlsL2NvdW50Qnl0ZS50cyIsICJzcmMvV29yZENvdW50L21vZHVsZXMvdXRpbC9jb3VudENKSy50cyIsICJzcmMvV29yZENvdW50L21vZHVsZXMvaTE4bi50cyIsICJzcmMvV29yZENvdW50L21vZHVsZXMvZ2V0Q291bnQudHMiLCAic3JjL1dvcmRDb3VudC9jb21wb25lbnRzL1dvcmRDb3VudC50c3giLCAic3JjL1dvcmRDb3VudC9tb2R1bGVzL2FkZExpc3RlbmVyLnRzIiwgInNyYy9Xb3JkQ291bnQvV29yZENvdW50LnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBDTEFTU19OQU1FOiBzdHJpbmcgPSAnZ2FkZ2V0LXdvcmRjb3VudCc7XG5cbmV4cG9ydCB7Q0xBU1NfTkFNRX07XG4iLCAiaW1wb3J0IHtDTEFTU19OQU1FfSBmcm9tICcuL2NvbnN0YW50JztcbmltcG9ydCBSZWFjdCBmcm9tICdleHQuZ2FkZ2V0LlJlYWN0JztcbmltcG9ydCBXb3JkQ291bnQgZnJvbSAnLi4vY29tcG9uZW50cy9Xb3JkQ291bnQnO1xuXG5jb25zdCB3b3JkQ291bnQgPSAoJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KTogdm9pZCA9PiB7XG5cdCRib2R5LmZpbmQoYC4ke0NMQVNTX05BTUV9YCkucmVtb3ZlKCk7XG5cblx0Y29uc3QgdGV4dDogc3RyaW5nIHwgdW5kZWZpbmVkID0gd2luZG93LmdldFNlbGVjdGlvbigpPy50b1N0cmluZygpO1xuXHRpZiAoIXRleHQpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCAkZWxlbWVudCA9ICQoPFdvcmRDb3VudCB0ZXh0PXt0ZXh0fSAvPik7XG5cblx0JGVsZW1lbnQuYXBwZW5kVG8oJGJvZHkpO1xuXG5cdHNldFRpbWVvdXQoKCk6IHZvaWQgPT4ge1xuXHRcdCRlbGVtZW50LmZhZGVPdXQoJ3Nsb3cnKTtcblx0fSwgNSAqIDEwMDApO1xufTtcblxuZXhwb3J0IHt3b3JkQ291bnR9O1xuIiwgImNvbnN0IGNvdW50TGVuZ3RoID0gKHRleHQ6IHN0cmluZyk6IG51bWJlciA9PiB7XG5cdHJldHVybiB0ZXh0Lmxlbmd0aDtcbn07XG5cbmV4cG9ydCB7Y291bnRMZW5ndGh9O1xuIiwgImltcG9ydCB7Y291bnRMZW5ndGh9IGZyb20gJy4vY291bnRMZW5ndGgnO1xuXG5jb25zdCBjb3VudEJ5dGUgPSAodGV4dDogc3RyaW5nKTogbnVtYmVyID0+IHtcblx0cmV0dXJuIGNvdW50TGVuZ3RoKFxuXHRcdHRleHRcblx0XHRcdC5yZXBsYWNlKC9bXFx1MDAwMC1cXHUwMDdGXS9nLCAnLicpXG5cdFx0XHQucmVwbGFjZSgvW1xcdTAwODAtXFx1MDdGRlxcdUQ4MDAtXFx1REZGRl0vZywgJy4uJylcblx0XHRcdC5yZXBsYWNlKC9bXFx1MDgwMC1cXHVEN0ZGXFx1RTAwMC1cXHVGRkZGXS9nLCAnLi4uJylcblx0KTtcbn07XG5cbmV4cG9ydCB7Y291bnRCeXRlfTtcbiIsICJpbXBvcnQge2NvdW50TGVuZ3RofSBmcm9tICcuL2NvdW50TGVuZ3RoJztcblxuY29uc3QgY291bnRDSksgPSAodGV4dDogc3RyaW5nKTogbnVtYmVyID0+IHtcblx0cmV0dXJuIGNvdW50TGVuZ3RoKFxuXHRcdHRleHRcblx0XHRcdC5yZXBsYWNlKC9cXC4vZywgJycpXG5cdFx0XHQucmVwbGFjZShcblx0XHRcdFx0L1tcXHUyRTgwLVxcdTJFOTlcXHUyRTlCLVxcdTJFRjNcXHUyRjAwLVxcdTJGRDVcXHUzMDA1XFx1MzAwN1xcdTMwMjEtXFx1MzAyOVxcdTMwMzgtXFx1MzAzQlxcdTM0MDAtXFx1NERCNVxcdTRFMDAtXFx1OUZDQ1xcdUY5MDAtXFx1RkE2RFxcdUZBNzAtXFx1RkFEOV18W1xcdUQ4NDAtXFx1RDg2OF1bXFx1REMwMC1cXHVERkZGXXxcXHVEODY5W1xcdURDMDAtXFx1REVENlxcdURGMDAtXFx1REZGRl18W1xcdUQ4NkEtXFx1RDg2Q11bXFx1REMwMC1cXHVERkZGXXxcXHVEODZEW1xcdURDMDAtXFx1REYzNFxcdURGNDAtXFx1REZGRl18XFx1RDg2RVtcXHVEQzAwLVxcdURDMURdfFxcdUQ4N0VbXFx1REMwMC1cXHVERTFEXS9nLFxuXHRcdFx0XHQnLidcblx0XHRcdClcblx0XHRcdC5yZXBsYWNlKC9bXi5dL2csICcnKVxuXHQpO1xufTtcblxuZXhwb3J0IHtjb3VudENKS307XG4iLCAiaW1wb3J0IHtsb2NhbGl6ZX0gZnJvbSAnZXh0LmdhZGdldC5pMThuJztcblxuY29uc3QgZ2V0STE4bk1lc3NhZ2VzID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdCdjaGFyYWN0ZXIocyknOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJyBjaGFyYWN0ZXIocyknLFxuXHRcdFx0J3poLWhhbnMnOiAn5a2X56ymJyxcblx0XHRcdCd6aC1oYW50JzogJ+Wtl+WFgycsXG5cdFx0fSksXG5cdFx0JygnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJyAoJyxcblx0XHRcdHpoOiAn77yIJyxcblx0XHR9KSxcblx0XHQnKSc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnKSAnLFxuXHRcdFx0emg6ICfvvIknLFxuXHRcdH0pLFxuXHRcdENKSzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICcgQ0pLJyxcblx0XHRcdCd6aC1oYW5zJzogJ+S4qkNKS+Wtl+espicsXG5cdFx0XHQnemgtaGFudCc6ICfkuKpDSkvlrZflhYMnLFxuXHRcdH0pLFxuXHRcdCdieXRlKHMpIGluIFVURi04IGVuY29kaW5nJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdieXRlKHMpIGluIFVURi04IGVuY29kaW5nJyxcblx0XHRcdCd6aC1oYW5zJzogJ+Wtl+iKgu+8iFVURi0457yW56CB77yJJyxcblx0XHRcdCd6aC1oYW50JzogJ+S9jeWFg+e1hO+8iFVURi0457eo56K877yJJyxcblx0XHR9KSxcblx0fTtcbn07XG5jb25zdCBpMThuTWVzc2FnZXMgPSBnZXRJMThuTWVzc2FnZXMoKTtcblxuY29uc3QgZ2V0TWVzc2FnZTogR2V0TWVzc2FnZXM8dHlwZW9mIGkxOG5NZXNzYWdlcz4gPSAoa2V5KSA9PiB7XG5cdHJldHVybiBpMThuTWVzc2FnZXNba2V5XSB8fCBrZXk7XG59O1xuXG5leHBvcnQge2dldE1lc3NhZ2V9O1xuIiwgImltcG9ydCB7Y291bnRCeXRlfSBmcm9tICcuL3V0aWwvY291bnRCeXRlJztcbmltcG9ydCB7Y291bnRDSkt9IGZyb20gJy4vdXRpbC9jb3VudENKSyc7XG5pbXBvcnQge2NvdW50TGVuZ3RofSBmcm9tICcuL3V0aWwvY291bnRMZW5ndGgnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL2kxOG4nO1xuXG5jb25zdCBnZXRDb3VudEJ5VGV4dExlbmd0aCA9ICh0ZXh0OiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuXHRyZXR1cm4gYCR7Y291bnRMZW5ndGgodGV4dCl9JHtnZXRNZXNzYWdlKCdjaGFyYWN0ZXIocyknKX1gO1xufTtcblxuY29uc3QgZ2V0Q0pLQ291bnRCeVRleHRMZW5ndGggPSAodGV4dDogc3RyaW5nKTogc3RyaW5nID0+IHtcblx0cmV0dXJuIGAke2dldE1lc3NhZ2UoJygnKX0ke2NvdW50Q0pLKHRleHQpfSR7Z2V0TWVzc2FnZSgnQ0pLJyl9JHtnZXRNZXNzYWdlKCcpJyl9YDtcbn07XG5cbmNvbnN0IGdldFVURjhDb3VudEJ5VGV4dExlbmd0aCA9ICh0ZXh0OiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuXHRyZXR1cm4gYCR7Y291bnRCeXRlKHRleHQpfSR7Z2V0TWVzc2FnZSgnYnl0ZShzKSBpbiBVVEYtOCBlbmNvZGluZycpfWA7XG59O1xuXG5leHBvcnQge2dldENvdW50QnlUZXh0TGVuZ3RoLCBnZXRDSktDb3VudEJ5VGV4dExlbmd0aCwgZ2V0VVRGOENvdW50QnlUZXh0TGVuZ3RofTtcbiIsICJpbXBvcnQge2dldENKS0NvdW50QnlUZXh0TGVuZ3RoLCBnZXRDb3VudEJ5VGV4dExlbmd0aCwgZ2V0VVRGOENvdW50QnlUZXh0TGVuZ3RofSBmcm9tICcuLi9tb2R1bGVzL2dldENvdW50JztcbmltcG9ydCB7Q0xBU1NfTkFNRX0gZnJvbSAnLi4vbW9kdWxlcy9jb25zdGFudCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAnZXh0LmdhZGdldC5SZWFjdCc7XG5cbmludGVyZmFjZSBQcm9wcyB7XG5cdHRleHQ6IHN0cmluZztcbn1cblxuY29uc3QgV29yZENvdW50ID0gKHByb3BzOiBQcm9wcykgPT4ge1xuXHRjb25zdCB7dGV4dH0gPSBwcm9wcztcblxuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPXtbQ0xBU1NfTkFNRSwgJ25vcHJpbnQnLCAndWktc3RhdGUtaGlnaGxpZ2h0JywgJ3VpLWNvcm5lci1hbGwnXX0+XG5cdFx0XHR7Z2V0Q291bnRCeVRleHRMZW5ndGgodGV4dCl9XG5cdFx0XHR7Z2V0Q0pLQ291bnRCeVRleHRMZW5ndGgodGV4dCl9XG5cdFx0XHQ8YnIgLz5cblx0XHRcdHtnZXRVVEY4Q291bnRCeVRleHRMZW5ndGgodGV4dCl9XG5cdFx0PC9kaXY+XG5cdCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBXb3JkQ291bnQ7XG4iLCAiaW1wb3J0IHt3b3JkQ291bnR9IGZyb20gJy4vd29yZENvdW50JztcblxuY29uc3QgYWRkTGlzdGVuZXIgPSAoJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KTogdm9pZCA9PiB7XG5cdGxldCBldmVudHM6IHN0cmluZztcblx0aWYgKCdvbnRvdWNoc3RhcnQnIGluIGRvY3VtZW50KSB7XG5cdFx0ZXZlbnRzID0gJ3RvdWNoc3RhcnQgdG91Y2hlbmQnO1xuXHR9IGVsc2Uge1xuXHRcdGV2ZW50cyA9ICdtb3VzZXVwIGtleXVwJztcblx0fVxuXG5cdCRib2R5Lm9uKGV2ZW50cywgKCk6IHZvaWQgPT4ge1xuXHRcdHdvcmRDb3VudCgkYm9keSk7XG5cdH0pO1xufTtcblxuZXhwb3J0IHthZGRMaXN0ZW5lcn07XG4iLCAiaW1wb3J0IHthZGRMaXN0ZW5lcn0gZnJvbSAnLi9tb2R1bGVzL2FkZExpc3RlbmVyJztcbmltcG9ydCB7Z2V0Qm9keX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxudm9pZCBnZXRCb2R5KCkudGhlbihhZGRMaXN0ZW5lcik7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFNQSxhQUFxQjs7QUNDM0IsSUFBQUMscUJBQWtCQyxRQUFBQyxRQUFBLGtCQUFBLEdBQUEsQ0FBQTs7QUNEbEIsSUFBTUMsY0FBZUMsVUFBeUI7QUFDN0MsU0FBT0EsS0FBS0M7QUFDYjs7QUNBQSxJQUFNQyxZQUFhRixVQUF5QjtBQUMzQyxTQUFPRCxZQUNOQyxLQUNFRyxRQUFRLG9CQUFvQixHQUFHLEVBQy9CQSxRQUFRLGlDQUFpQyxJQUFJLEVBQzdDQSxRQUFRLGlDQUFpQyxLQUFLLENBQ2pEO0FBQ0Q7O0FDUEEsSUFBTUMsV0FBWUosVUFBeUI7QUFDMUMsU0FBT0QsWUFDTkMsS0FDRUcsUUFBUSxPQUFPLEVBQUUsRUFDakJBLFFBQ0Esd1RBQ0EsR0FDRCxFQUNDQSxRQUFRLFNBQVMsRUFBRSxDQUN0QjtBQUNEOztBQ1pBLElBQUFFLG9CQUF1QlAsUUFBQSxpQkFBQTtBQUV2QixJQUFNUSxrQkFBa0JBLE1BQU07QUFDN0IsU0FBTztJQUNOLGlCQUFBLEdBQWdCRCxrQkFBQUUsVUFBUztNQUN4QkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNELE1BQUEsR0FBS0gsa0JBQUFFLFVBQVM7TUFDYkMsSUFBSTtNQUNKQyxJQUFJO0lBQ0wsQ0FBQztJQUNELE1BQUEsR0FBS0osa0JBQUFFLFVBQVM7TUFDYkMsSUFBSTtNQUNKQyxJQUFJO0lBQ0wsQ0FBQztJQUNEQyxNQUFBLEdBQUtMLGtCQUFBRSxVQUFTO01BQ2JDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDRCw4QkFBQSxHQUE2Qkgsa0JBQUFFLFVBQVM7TUFDckNDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7RUFDRjtBQUNEO0FBQ0EsSUFBTUcsZUFBZUwsZ0JBQWdCO0FBRXJDLElBQU1NLGFBQWdEQyxTQUFRO0FBQzdELFNBQU9GLGFBQWFFLEdBQUcsS0FBS0E7QUFDN0I7O0FDNUJBLElBQU1DLHVCQUF3QmQsVUFBeUI7QUFDdEQsU0FBQSxHQUFBZSxPQUFVaEIsWUFBWUMsSUFBSSxDQUFDLEVBQUFlLE9BQUdILFdBQVcsY0FBYyxDQUFDO0FBQ3pEO0FBRUEsSUFBTUksMEJBQTJCaEIsVUFBeUI7QUFDekQsU0FBQSxHQUFBZSxPQUFVSCxXQUFXLEdBQUcsQ0FBQyxFQUFBRyxPQUFHWCxTQUFTSixJQUFJLENBQUMsRUFBQWUsT0FBR0gsV0FBVyxLQUFLLENBQUMsRUFBQUcsT0FBR0gsV0FBVyxHQUFHLENBQUM7QUFDakY7QUFFQSxJQUFNSywyQkFBNEJqQixVQUF5QjtBQUMxRCxTQUFBLEdBQUFlLE9BQVViLFVBQVVGLElBQUksQ0FBQyxFQUFBZSxPQUFHSCxXQUFXLDJCQUEyQixDQUFDO0FBQ3BFOztBQ2JBLElBQUFNLHFCQUFrQnJCLFFBQUFDLFFBQUEsa0JBQUEsR0FBQSxDQUFBO0FBTWxCLElBQU1xQixZQUFhQyxXQUFpQjtBQUNuQyxRQUFNO0lBQUNwQjtFQUFJLElBQUlvQjtBQUVmLFNBQ0NGLG1DQUFBRyxRQUFBQyxjQUFDLE9BQUE7SUFBSUMsV0FBVyxDQUFDNUIsWUFBWSxXQUFXLHNCQUFzQixlQUFlO0VBQUEsR0FDM0VtQixxQkFBcUJkLElBQUksR0FDekJnQix3QkFBd0JoQixJQUFJLEdBQzdCa0IsbUNBQUFHLFFBQUFDLGNBQUMsTUFBQSxJQUFHLEdBQ0hMLHlCQUF5QmpCLElBQUksQ0FDL0I7QUFFRjtBQUVBLElBQU93QixvQkFBUUw7O0FOakJmLElBQU1NLFlBQWFDLFdBQXlDO0FBQUEsTUFBQUM7QUFDM0RELFFBQU1FLEtBQUEsSUFBQWIsT0FBU3BCLFVBQVUsQ0FBRSxFQUFFa0MsT0FBTztBQUVwQyxRQUFNN0IsUUFBQTJCLHVCQUEyQkcsT0FBT0MsYUFBYSxPQUFBLFFBQUFKLHlCQUFBLFNBQUEsU0FBcEJBLHFCQUF1QkssU0FBUztBQUNqRSxNQUFJLENBQUNoQyxNQUFNO0FBQ1Y7RUFDRDtBQUVBLFFBQU1pQyxXQUFXQyxFQUFFdEMsbUNBQUF5QixRQUFBQyxjQUFDRSxtQkFBQTtJQUFVeEI7RUFBQSxDQUFZLENBQUU7QUFFNUNpQyxXQUFTRSxTQUFTVCxLQUFLO0FBRXZCVSxhQUFXLE1BQVk7QUFDdEJILGFBQVNJLFFBQVEsTUFBTTtFQUN4QixHQUFHLElBQUksR0FBSTtBQUNaOztBT2pCQSxJQUFNQyxjQUFlWixXQUF5QztBQUM3RCxNQUFJYTtBQUNKLE1BQUksa0JBQWtCQyxVQUFVO0FBQy9CRCxhQUFTO0VBQ1YsT0FBTztBQUNOQSxhQUFTO0VBQ1Y7QUFFQWIsUUFBTWUsR0FBR0YsUUFBUSxNQUFZO0FBQzVCZCxjQUFVQyxLQUFLO0VBQ2hCLENBQUM7QUFDRjs7QUNaQSxJQUFBZ0IscUJBQXNCNUMsUUFBQSxpQkFBQTtBQUV0QixNQUFBLEdBQUs0QyxtQkFBQUMsU0FBUSxFQUFFQyxLQUFLTixXQUFXOyIsCiAgIm5hbWVzIjogWyJDTEFTU19OQU1FIiwgImltcG9ydF9leHRfZ2FkZ2V0MyIsICJfX3RvRVNNIiwgInJlcXVpcmUiLCAiY291bnRMZW5ndGgiLCAidGV4dCIsICJsZW5ndGgiLCAiY291bnRCeXRlIiwgInJlcGxhY2UiLCAiY291bnRDSksiLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAiZ2V0STE4bk1lc3NhZ2VzIiwgImxvY2FsaXplIiwgImVuIiwgInpoIiwgIkNKSyIsICJpMThuTWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAiZ2V0Q291bnRCeVRleHRMZW5ndGgiLCAiY29uY2F0IiwgImdldENKS0NvdW50QnlUZXh0TGVuZ3RoIiwgImdldFVURjhDb3VudEJ5VGV4dExlbmd0aCIsICJpbXBvcnRfZXh0X2dhZGdldDIiLCAiV29yZENvdW50IiwgInByb3BzIiwgImRlZmF1bHQiLCAiY3JlYXRlRWxlbWVudCIsICJjbGFzc05hbWUiLCAiV29yZENvdW50X2RlZmF1bHQiLCAid29yZENvdW50IiwgIiRib2R5IiwgIl93aW5kb3ckZ2V0U2VsZWN0aW9uIiwgImZpbmQiLCAicmVtb3ZlIiwgIndpbmRvdyIsICJnZXRTZWxlY3Rpb24iLCAidG9TdHJpbmciLCAiJGVsZW1lbnQiLCAiJCIsICJhcHBlbmRUbyIsICJzZXRUaW1lb3V0IiwgImZhZGVPdXQiLCAiYWRkTGlzdGVuZXIiLCAiZXZlbnRzIiwgImRvY3VtZW50IiwgIm9uIiwgImltcG9ydF9leHRfZ2FkZ2V0NCIsICJnZXRCb2R5IiwgInRoZW4iXQp9Cg==

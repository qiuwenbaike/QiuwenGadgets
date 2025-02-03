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
        if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
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
//! src/WordCount/modules/wordCount.tsx
var import_ext_gadget3 = __toESM(require("ext.gadget.JSX"), 1);
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
var import_ext_gadget2 = __toESM(require("ext.gadget.JSX"), 1);
//! src/WordCount/components/WordCount.module.less
var tip = "WordCount-module__tip_HBDn5a__490";
//! src/WordCount/components/WordCount.tsx
var WordCount = ({
  text
}) => /* @__PURE__ */ import_ext_gadget2.default.createElement("div", {
  className: [tip, "noprint", "ui-state-highlight", "ui-corner-all"],
  id: "gadget-word_count-tip"
}, getCountByTextLength(text), getCJKCountByTextLength(text), /* @__PURE__ */ import_ext_gadget2.default.createElement("br", null), getUTF8CountByTextLength(text));
var WordCount_default = WordCount;
//! src/WordCount/modules/wordCount.tsx
var wordCount = ($body) => {
  var _window$getSelection;
  $body.find(".".concat(tip)).remove();
  const text = (_window$getSelection = window.getSelection()) === null || _window$getSelection === void 0 ? void 0 : _window$getSelection.toString();
  if (!text) {
    return;
  }
  const $element = $(/* @__PURE__ */ import_ext_gadget3.default.createElement(WordCount_default, {
    text
  }));
  $element.appendTo($body);
  setTimeout(() => {
    $element.fadeOut("slow", () => {
      $element.remove();
    });
  }, 5 * 1e3);
};
//! src/WordCount/modules/addListener.ts
var addListener = ($body) => {
  if ("ontouchstart" in document) {
    $body.on("touchstart touchend", {
      passive: true
    }, () => {
      wordCount($body);
    });
  } else {
    $body.on("mouseup keyup", () => {
      wordCount($body);
    });
  }
};
//! src/WordCount/WordCount.ts
var import_ext_gadget4 = require("ext.gadget.Util");
void (0, import_ext_gadget4.getBody)().then(addListener);

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1dvcmRDb3VudC9tb2R1bGVzL3dvcmRDb3VudC50c3giLCAic3JjL1dvcmRDb3VudC9tb2R1bGVzL3V0aWwvY291bnRMZW5ndGgudHMiLCAic3JjL1dvcmRDb3VudC9tb2R1bGVzL3V0aWwvY291bnRCeXRlLnRzIiwgInNyYy9Xb3JkQ291bnQvbW9kdWxlcy91dGlsL2NvdW50Q0pLLnRzIiwgInNyYy9Xb3JkQ291bnQvbW9kdWxlcy9pMThuLnRzIiwgInNyYy9Xb3JkQ291bnQvbW9kdWxlcy9nZXRDb3VudC50cyIsICJzcmMvV29yZENvdW50L2NvbXBvbmVudHMvV29yZENvdW50LnRzeCIsICJzcmMvV29yZENvdW50L2NvbXBvbmVudHMvV29yZENvdW50Lm1vZHVsZS5sZXNzIiwgInNyYy9Xb3JkQ291bnQvbW9kdWxlcy9hZGRMaXN0ZW5lci50cyIsICJzcmMvV29yZENvdW50L1dvcmRDb3VudC50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IFJlYWN0IGZyb20gJ2V4dC5nYWRnZXQuSlNYJztcbmltcG9ydCBXb3JkQ291bnQgZnJvbSAnLi4vY29tcG9uZW50cy9Xb3JkQ291bnQnO1xuaW1wb3J0IHt0aXB9IGZyb20gJy4uL2NvbXBvbmVudHMvV29yZENvdW50Lm1vZHVsZS5sZXNzJztcblxuY29uc3Qgd29yZENvdW50ID0gKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQgPT4ge1xuXHQkYm9keS5maW5kKGAuJHt0aXB9YCkucmVtb3ZlKCk7XG5cblx0Y29uc3QgdGV4dDogc3RyaW5nIHwgdW5kZWZpbmVkID0gd2luZG93LmdldFNlbGVjdGlvbigpPy50b1N0cmluZygpO1xuXHRpZiAoIXRleHQpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCAkZWxlbWVudCA9ICQoPFdvcmRDb3VudCB0ZXh0PXt0ZXh0fSAvPik7XG5cblx0JGVsZW1lbnQuYXBwZW5kVG8oJGJvZHkpO1xuXG5cdHNldFRpbWVvdXQoKCk6IHZvaWQgPT4ge1xuXHRcdCRlbGVtZW50LmZhZGVPdXQoJ3Nsb3cnLCAoKTogdm9pZCA9PiB7XG5cdFx0XHQkZWxlbWVudC5yZW1vdmUoKTtcblx0XHR9KTtcblx0fSwgNSAqIDEwMDApO1xufTtcblxuZXhwb3J0IHt3b3JkQ291bnR9O1xuIiwgImNvbnN0IGNvdW50TGVuZ3RoID0gKHRleHQ6IHN0cmluZyk6IG51bWJlciA9PiB7XG5cdHJldHVybiB0ZXh0Lmxlbmd0aDtcbn07XG5cbmV4cG9ydCB7Y291bnRMZW5ndGh9O1xuIiwgImltcG9ydCB7Y291bnRMZW5ndGh9IGZyb20gJy4vY291bnRMZW5ndGgnO1xuXG5jb25zdCBjb3VudEJ5dGUgPSAodGV4dDogc3RyaW5nKTogbnVtYmVyID0+IHtcblx0cmV0dXJuIGNvdW50TGVuZ3RoKFxuXHRcdHRleHRcblx0XHRcdC5yZXBsYWNlKC9bXFx1MDAwMC1cXHUwMDdGXS9nLCAnLicpXG5cdFx0XHQucmVwbGFjZSgvW1xcdTAwODAtXFx1MDdGRlxcdUQ4MDAtXFx1REZGRl0vZywgJy4uJylcblx0XHRcdC5yZXBsYWNlKC9bXFx1MDgwMC1cXHVEN0ZGXFx1RTAwMC1cXHVGRkZGXS9nLCAnLi4uJylcblx0KTtcbn07XG5cbmV4cG9ydCB7Y291bnRCeXRlfTtcbiIsICJpbXBvcnQge2NvdW50TGVuZ3RofSBmcm9tICcuL2NvdW50TGVuZ3RoJztcblxuY29uc3QgY291bnRDSksgPSAodGV4dDogc3RyaW5nKTogbnVtYmVyID0+IHtcblx0cmV0dXJuIGNvdW50TGVuZ3RoKFxuXHRcdHRleHRcblx0XHRcdC5yZXBsYWNlKC9cXC4vZywgJycpXG5cdFx0XHQucmVwbGFjZShcblx0XHRcdFx0L1tcXHUyRTgwLVxcdTJFOTlcXHUyRTlCLVxcdTJFRjNcXHUyRjAwLVxcdTJGRDVcXHUzMDA1XFx1MzAwN1xcdTMwMjEtXFx1MzAyOVxcdTMwMzgtXFx1MzAzQlxcdTM0MDAtXFx1NERCNVxcdTRFMDAtXFx1OUZDQ1xcdUY5MDAtXFx1RkE2RFxcdUZBNzAtXFx1RkFEOV18W1xcdUQ4NDAtXFx1RDg2OF1bXFx1REMwMC1cXHVERkZGXXxcXHVEODY5W1xcdURDMDAtXFx1REVENlxcdURGMDAtXFx1REZGRl18W1xcdUQ4NkEtXFx1RDg2Q11bXFx1REMwMC1cXHVERkZGXXxcXHVEODZEW1xcdURDMDAtXFx1REYzNFxcdURGNDAtXFx1REZGRl18XFx1RDg2RVtcXHVEQzAwLVxcdURDMURdfFxcdUQ4N0VbXFx1REMwMC1cXHVERTFEXS9nLFxuXHRcdFx0XHQnLidcblx0XHRcdClcblx0XHRcdC5yZXBsYWNlKC9bXi5dL2csICcnKVxuXHQpO1xufTtcblxuZXhwb3J0IHtjb3VudENKS307XG4iLCAiaW1wb3J0IHtsb2NhbGl6ZX0gZnJvbSAnZXh0LmdhZGdldC5pMThuJztcblxuY29uc3QgZ2V0STE4bk1lc3NhZ2VzID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdCdjaGFyYWN0ZXIocyknOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJyBjaGFyYWN0ZXIocyknLFxuXHRcdFx0J3poLWhhbnMnOiAn5a2X56ymJyxcblx0XHRcdCd6aC1oYW50JzogJ+Wtl+WFgycsXG5cdFx0fSksXG5cdFx0JygnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJyAoJyxcblx0XHRcdHpoOiAn77yIJyxcblx0XHR9KSxcblx0XHQnKSc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnKSAnLFxuXHRcdFx0emg6ICfvvIknLFxuXHRcdH0pLFxuXHRcdENKSzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICcgQ0pLJyxcblx0XHRcdCd6aC1oYW5zJzogJ+S4qkNKS+Wtl+espicsXG5cdFx0XHQnemgtaGFudCc6ICfkuKpDSkvlrZflhYMnLFxuXHRcdH0pLFxuXHRcdCdieXRlKHMpIGluIFVURi04IGVuY29kaW5nJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdieXRlKHMpIGluIFVURi04IGVuY29kaW5nJyxcblx0XHRcdCd6aC1oYW5zJzogJ+Wtl+iKgu+8iFVURi0457yW56CB77yJJyxcblx0XHRcdCd6aC1oYW50JzogJ+S9jeWFg+e1hO+8iFVURi0457eo56K877yJJyxcblx0XHR9KSxcblx0fTtcbn07XG5jb25zdCBpMThuTWVzc2FnZXMgPSBnZXRJMThuTWVzc2FnZXMoKTtcblxuY29uc3QgZ2V0TWVzc2FnZTogR2V0TWVzc2FnZXM8dHlwZW9mIGkxOG5NZXNzYWdlcz4gPSAoa2V5KSA9PiB7XG5cdHJldHVybiBpMThuTWVzc2FnZXNba2V5XSB8fCBrZXk7XG59O1xuXG5leHBvcnQge2dldE1lc3NhZ2V9O1xuIiwgImltcG9ydCB7Y291bnRCeXRlfSBmcm9tICcuL3V0aWwvY291bnRCeXRlJztcbmltcG9ydCB7Y291bnRDSkt9IGZyb20gJy4vdXRpbC9jb3VudENKSyc7XG5pbXBvcnQge2NvdW50TGVuZ3RofSBmcm9tICcuL3V0aWwvY291bnRMZW5ndGgnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL2kxOG4nO1xuXG5jb25zdCBnZXRDb3VudEJ5VGV4dExlbmd0aCA9ICh0ZXh0OiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuXHRyZXR1cm4gYCR7Y291bnRMZW5ndGgodGV4dCl9JHtnZXRNZXNzYWdlKCdjaGFyYWN0ZXIocyknKX1gO1xufTtcblxuY29uc3QgZ2V0Q0pLQ291bnRCeVRleHRMZW5ndGggPSAodGV4dDogc3RyaW5nKTogc3RyaW5nID0+IHtcblx0cmV0dXJuIGAke2dldE1lc3NhZ2UoJygnKX0ke2NvdW50Q0pLKHRleHQpfSR7Z2V0TWVzc2FnZSgnQ0pLJyl9JHtnZXRNZXNzYWdlKCcpJyl9YDtcbn07XG5cbmNvbnN0IGdldFVURjhDb3VudEJ5VGV4dExlbmd0aCA9ICh0ZXh0OiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuXHRyZXR1cm4gYCR7Y291bnRCeXRlKHRleHQpfSR7Z2V0TWVzc2FnZSgnYnl0ZShzKSBpbiBVVEYtOCBlbmNvZGluZycpfWA7XG59O1xuXG5leHBvcnQge2dldENvdW50QnlUZXh0TGVuZ3RoLCBnZXRDSktDb3VudEJ5VGV4dExlbmd0aCwgZ2V0VVRGOENvdW50QnlUZXh0TGVuZ3RofTtcbiIsICJpbXBvcnQge2dldENKS0NvdW50QnlUZXh0TGVuZ3RoLCBnZXRDb3VudEJ5VGV4dExlbmd0aCwgZ2V0VVRGOENvdW50QnlUZXh0TGVuZ3RofSBmcm9tICcuLi9tb2R1bGVzL2dldENvdW50JztcbmltcG9ydCBSZWFjdCBmcm9tICdleHQuZ2FkZ2V0LkpTWCc7XG5pbXBvcnQge3RpcH0gZnJvbSAnLi9Xb3JkQ291bnQubW9kdWxlLmxlc3MnO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuXHR0ZXh0OiBzdHJpbmc7XG59XG5cbmNvbnN0IFdvcmRDb3VudCA9ICh7dGV4dH06IFByb3BzKSA9PiAoXG5cdDxkaXYgY2xhc3NOYW1lPXtbdGlwLCAnbm9wcmludCcsICd1aS1zdGF0ZS1oaWdobGlnaHQnLCAndWktY29ybmVyLWFsbCddfSBpZD1cImdhZGdldC13b3JkX2NvdW50LXRpcFwiPlxuXHRcdHtnZXRDb3VudEJ5VGV4dExlbmd0aCh0ZXh0KX1cblx0XHR7Z2V0Q0pLQ291bnRCeVRleHRMZW5ndGgodGV4dCl9XG5cdFx0PGJyIC8+XG5cdFx0e2dldFVURjhDb3VudEJ5VGV4dExlbmd0aCh0ZXh0KX1cblx0PC9kaXY+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBXb3JkQ291bnQ7XG4iLCAiaW1wb3J0IFwiZXNidWlsZC1jc3MtbW9kdWxlcy1wbHVnaW4tbnMtY3NzOnNyYy9Xb3JkQ291bnQvY29tcG9uZW50cy9Xb3JkQ291bnQubW9kdWxlLmxlc3NcIjtcbmV4cG9ydCBjb25zdCB0aXAgPSBcIldvcmRDb3VudC1tb2R1bGVfX3RpcF9IQkRuNWFfXzQ5MFwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIFwidGlwXCI6IHRpcFxufTtcbiAgICAgICIsICJpbXBvcnQge3dvcmRDb3VudH0gZnJvbSAnLi93b3JkQ291bnQnO1xuXG5jb25zdCBhZGRMaXN0ZW5lciA9ICgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkID0+IHtcblx0aWYgKCdvbnRvdWNoc3RhcnQnIGluIGRvY3VtZW50KSB7XG5cdFx0JGJvZHkub24oJ3RvdWNoc3RhcnQgdG91Y2hlbmQnLCB7cGFzc2l2ZTogdHJ1ZX0sICgpOiB2b2lkID0+IHtcblx0XHRcdHdvcmRDb3VudCgkYm9keSk7XG5cdFx0fSk7XG5cdH0gZWxzZSB7XG5cdFx0JGJvZHkub24oJ21vdXNldXAga2V5dXAnLCAoKTogdm9pZCA9PiB7XG5cdFx0XHR3b3JkQ291bnQoJGJvZHkpO1xuXHRcdH0pO1xuXHR9XG59O1xuXG5leHBvcnQge2FkZExpc3RlbmVyfTtcbiIsICJpbXBvcnQge2FkZExpc3RlbmVyfSBmcm9tICcuL21vZHVsZXMvYWRkTGlzdGVuZXInO1xuaW1wb3J0IHtnZXRCb2R5fSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG52b2lkIGdldEJvZHkoKS50aGVuKGFkZExpc3RlbmVyKTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxxQkFBa0JDLFFBQUFDLFFBQUEsZ0JBQUEsR0FBQSxDQUFBOztBQ0FsQixJQUFNQyxjQUFlQyxVQUF5QjtBQUM3QyxTQUFPQSxLQUFLQztBQUNiOztBQ0FBLElBQU1DLFlBQWFGLFVBQXlCO0FBQzNDLFNBQU9ELFlBQ05DLEtBQ0VHLFFBQVEsb0JBQW9CLEdBQUcsRUFDL0JBLFFBQVEsaUNBQWlDLElBQUksRUFDN0NBLFFBQVEsaUNBQWlDLEtBQUssQ0FDakQ7QUFDRDs7QUNQQSxJQUFNQyxXQUFZSixVQUF5QjtBQUMxQyxTQUFPRCxZQUNOQyxLQUNFRyxRQUFRLE9BQU8sRUFBRSxFQUNqQkEsUUFDQSx3VEFDQSxHQUNELEVBQ0NBLFFBQVEsU0FBUyxFQUFFLENBQ3RCO0FBQ0Q7O0FDWkEsSUFBQUUsb0JBQXVCUCxRQUFBLGlCQUFBO0FBRXZCLElBQU1RLGtCQUFrQkEsTUFBTTtB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IFsiaW1wb3J0X2V4dF9nYWRnZXQzIiwgIl9fdG9FU00iLCAicmVxdWlyZSIsICJjb3VudExlbmd0aCIsICJ0ZXh0IiwgImxlbmd0aCIsICJjb3VudEJ5dGUiLCAicmVwbGFjZSIsICJjb3VudENKSyIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJnZXRJMThuTWVzc2FnZXMiLCAibG9jYWxpemUiLCAiZW4iLCAiemgiLCAiQ0pLIiwgImkxOG5NZXNzYWdlcyIsICJnZXRNZXNzYWdlIiwgImtleSIsICJnZXRDb3VudEJ5VGV4dExlbmd0aCIsICJjb25jYXQiLCAiZ2V0Q0pLQ291bnRCeVRleHRMZW5ndGgiLCAiZ2V0VVRGOENvdW50QnlUZXh0TGVuZ3RoIiwgImltcG9ydF9leHRfZ2FkZ2V0MiIsICJ0aXAiLCAiV29yZENvdW50IiwgImRlZmF1bHQiLCAiY3JlYXRlRWxlbWVudCIsICJjbGFzc05hbWUiLCAiaWQiLCAiV29yZENvdW50X2RlZmF1bHQiLCAid29yZENvdW50IiwgIiRib2R5IiwgIl93aW5kb3ckZ2V0U2VsZWN0aW9uIiwgImZpbmQiLCAicmVtb3ZlIiwgIndpbmRvdyIsICJnZXRTZWxlY3Rpb24iLCAidG9TdHJpbmciLCAiJGVsZW1lbnQiLCAiJCIsICJhcHBlbmRUbyIsICJzZXRUaW1lb3V0IiwgImZhZGVPdXQiLCAiYWRkTGlzdGVuZXIiLCAiZG9jdW1lbnQiLCAib24iLCAicGFzc2l2ZSIsICJpbXBvcnRfZXh0X2dhZGdldDQiLCAiZ2V0Qm9keSIsICJ0aGVuIl0KfQo=

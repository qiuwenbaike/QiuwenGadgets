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
//! src/WordCount/components/WordCount.module.less
var tip = "WordCount-module__tip_HBDn5a";
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
  let events;
  let data = null;
  if ("ontouchstart" in document) {
    events = "touchstart touchend";
    data = {
      passive: true
    };
  } else {
    events = "mouseup keyup";
  }
  if (data === null) {
    $body.on(events, () => {
      wordCount($body);
    });
  } else {
    $body.on(events, data, () => {
      wordCount($body);
    });
  }
};
//! src/WordCount/WordCount.ts
var import_ext_gadget4 = require("ext.gadget.Util");
void (0, import_ext_gadget4.getBody)().then(addListener);

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1dvcmRDb3VudC9tb2R1bGVzL3dvcmRDb3VudC50c3giLCAic3JjL1dvcmRDb3VudC9tb2R1bGVzL3V0aWwvY291bnRMZW5ndGgudHMiLCAic3JjL1dvcmRDb3VudC9tb2R1bGVzL3V0aWwvY291bnRCeXRlLnRzIiwgInNyYy9Xb3JkQ291bnQvbW9kdWxlcy91dGlsL2NvdW50Q0pLLnRzIiwgInNyYy9Xb3JkQ291bnQvbW9kdWxlcy9pMThuLnRzIiwgInNyYy9Xb3JkQ291bnQvbW9kdWxlcy9nZXRDb3VudC50cyIsICJzcmMvV29yZENvdW50L2NvbXBvbmVudHMvV29yZENvdW50LnRzeCIsICJzcmMvV29yZENvdW50L2NvbXBvbmVudHMvV29yZENvdW50Lm1vZHVsZS5sZXNzIiwgInNyYy9Xb3JkQ291bnQvbW9kdWxlcy9hZGRMaXN0ZW5lci50cyIsICJzcmMvV29yZENvdW50L1dvcmRDb3VudC50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IFJlYWN0IGZyb20gJ2V4dC5nYWRnZXQuUmVhY3QnO1xuaW1wb3J0IFdvcmRDb3VudCBmcm9tICcuLi9jb21wb25lbnRzL1dvcmRDb3VudCc7XG5pbXBvcnQge3RpcH0gZnJvbSAnLi4vY29tcG9uZW50cy9Xb3JkQ291bnQubW9kdWxlLmxlc3MnO1xuXG5jb25zdCB3b3JkQ291bnQgPSAoJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KTogdm9pZCA9PiB7XG5cdCRib2R5LmZpbmQoYC4ke3RpcH1gKS5yZW1vdmUoKTtcblxuXHRjb25zdCB0ZXh0OiBzdHJpbmcgfCB1bmRlZmluZWQgPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCk/LnRvU3RyaW5nKCk7XG5cdGlmICghdGV4dCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0ICRlbGVtZW50ID0gJCg8V29yZENvdW50IHRleHQ9e3RleHR9IC8+KTtcblxuXHQkZWxlbWVudC5hcHBlbmRUbygkYm9keSk7XG5cblx0c2V0VGltZW91dCgoKTogdm9pZCA9PiB7XG5cdFx0JGVsZW1lbnQuZmFkZU91dCgnc2xvdycsICgpOiB2b2lkID0+IHtcblx0XHRcdCRlbGVtZW50LnJlbW92ZSgpO1xuXHRcdH0pO1xuXHR9LCA1ICogMTAwMCk7XG59O1xuXG5leHBvcnQge3dvcmRDb3VudH07XG4iLCAiY29uc3QgY291bnRMZW5ndGggPSAodGV4dDogc3RyaW5nKTogbnVtYmVyID0+IHtcblx0cmV0dXJuIHRleHQubGVuZ3RoO1xufTtcblxuZXhwb3J0IHtjb3VudExlbmd0aH07XG4iLCAiaW1wb3J0IHtjb3VudExlbmd0aH0gZnJvbSAnLi9jb3VudExlbmd0aCc7XG5cbmNvbnN0IGNvdW50Qnl0ZSA9ICh0ZXh0OiBzdHJpbmcpOiBudW1iZXIgPT4ge1xuXHRyZXR1cm4gY291bnRMZW5ndGgoXG5cdFx0dGV4dFxuXHRcdFx0LnJlcGxhY2UoL1tcXHUwMDAwLVxcdTAwN0ZdL2csICcuJylcblx0XHRcdC5yZXBsYWNlKC9bXFx1MDA4MC1cXHUwN0ZGXFx1RDgwMC1cXHVERkZGXS9nLCAnLi4nKVxuXHRcdFx0LnJlcGxhY2UoL1tcXHUwODAwLVxcdUQ3RkZcXHVFMDAwLVxcdUZGRkZdL2csICcuLi4nKVxuXHQpO1xufTtcblxuZXhwb3J0IHtjb3VudEJ5dGV9O1xuIiwgImltcG9ydCB7Y291bnRMZW5ndGh9IGZyb20gJy4vY291bnRMZW5ndGgnO1xuXG5jb25zdCBjb3VudENKSyA9ICh0ZXh0OiBzdHJpbmcpOiBudW1iZXIgPT4ge1xuXHRyZXR1cm4gY291bnRMZW5ndGgoXG5cdFx0dGV4dFxuXHRcdFx0LnJlcGxhY2UoL1xcLi9nLCAnJylcblx0XHRcdC5yZXBsYWNlKFxuXHRcdFx0XHQvW1xcdTJFODAtXFx1MkU5OVxcdTJFOUItXFx1MkVGM1xcdTJGMDAtXFx1MkZENVxcdTMwMDVcXHUzMDA3XFx1MzAyMS1cXHUzMDI5XFx1MzAzOC1cXHUzMDNCXFx1MzQwMC1cXHU0REI1XFx1NEUwMC1cXHU5RkNDXFx1RjkwMC1cXHVGQTZEXFx1RkE3MC1cXHVGQUQ5XXxbXFx1RDg0MC1cXHVEODY4XVtcXHVEQzAwLVxcdURGRkZdfFxcdUQ4NjlbXFx1REMwMC1cXHVERUQ2XFx1REYwMC1cXHVERkZGXXxbXFx1RDg2QS1cXHVEODZDXVtcXHVEQzAwLVxcdURGRkZdfFxcdUQ4NkRbXFx1REMwMC1cXHVERjM0XFx1REY0MC1cXHVERkZGXXxcXHVEODZFW1xcdURDMDAtXFx1REMxRF18XFx1RDg3RVtcXHVEQzAwLVxcdURFMURdL2csXG5cdFx0XHRcdCcuJ1xuXHRcdFx0KVxuXHRcdFx0LnJlcGxhY2UoL1teLl0vZywgJycpXG5cdCk7XG59O1xuXG5leHBvcnQge2NvdW50Q0pLfTtcbiIsICJpbXBvcnQge2xvY2FsaXplfSBmcm9tICdleHQuZ2FkZ2V0LmkxOG4nO1xuXG5jb25zdCBnZXRJMThuTWVzc2FnZXMgPSAoKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0J2NoYXJhY3RlcihzKSc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnIGNoYXJhY3RlcihzKScsXG5cdFx0XHQnemgtaGFucyc6ICflrZfnrKYnLFxuXHRcdFx0J3poLWhhbnQnOiAn5a2X5YWDJyxcblx0XHR9KSxcblx0XHQnKCc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnICgnLFxuXHRcdFx0emg6ICfvvIgnLFxuXHRcdH0pLFxuXHRcdCcpJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICcpICcsXG5cdFx0XHR6aDogJ++8iScsXG5cdFx0fSksXG5cdFx0Q0pLOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJyBDSksnLFxuXHRcdFx0J3poLWhhbnMnOiAn5LiqQ0pL5a2X56ymJyxcblx0XHRcdCd6aC1oYW50JzogJ+S4qkNKS+Wtl+WFgycsXG5cdFx0fSksXG5cdFx0J2J5dGUocykgaW4gVVRGLTggZW5jb2RpbmcnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ2J5dGUocykgaW4gVVRGLTggZW5jb2RpbmcnLFxuXHRcdFx0J3poLWhhbnMnOiAn5a2X6IqC77yIVVRGLTjnvJbnoIHvvIknLFxuXHRcdFx0J3poLWhhbnQnOiAn5L2N5YWD57WE77yIVVRGLTjnt6jnorzvvIknLFxuXHRcdH0pLFxuXHR9O1xufTtcbmNvbnN0IGkxOG5NZXNzYWdlcyA9IGdldEkxOG5NZXNzYWdlcygpO1xuXG5jb25zdCBnZXRNZXNzYWdlOiBHZXRNZXNzYWdlczx0eXBlb2YgaTE4bk1lc3NhZ2VzPiA9IChrZXkpID0+IHtcblx0cmV0dXJuIGkxOG5NZXNzYWdlc1trZXldIHx8IGtleTtcbn07XG5cbmV4cG9ydCB7Z2V0TWVzc2FnZX07XG4iLCAiaW1wb3J0IHtjb3VudEJ5dGV9IGZyb20gJy4vdXRpbC9jb3VudEJ5dGUnO1xuaW1wb3J0IHtjb3VudENKS30gZnJvbSAnLi91dGlsL2NvdW50Q0pLJztcbmltcG9ydCB7Y291bnRMZW5ndGh9IGZyb20gJy4vdXRpbC9jb3VudExlbmd0aCc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vaTE4bic7XG5cbmNvbnN0IGdldENvdW50QnlUZXh0TGVuZ3RoID0gKHRleHQ6IHN0cmluZyk6IHN0cmluZyA9PiB7XG5cdHJldHVybiBgJHtjb3VudExlbmd0aCh0ZXh0KX0ke2dldE1lc3NhZ2UoJ2NoYXJhY3RlcihzKScpfWA7XG59O1xuXG5jb25zdCBnZXRDSktDb3VudEJ5VGV4dExlbmd0aCA9ICh0ZXh0OiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuXHRyZXR1cm4gYCR7Z2V0TWVzc2FnZSgnKCcpfSR7Y291bnRDSksodGV4dCl9JHtnZXRNZXNzYWdlKCdDSksnKX0ke2dldE1lc3NhZ2UoJyknKX1gO1xufTtcblxuY29uc3QgZ2V0VVRGOENvdW50QnlUZXh0TGVuZ3RoID0gKHRleHQ6IHN0cmluZyk6IHN0cmluZyA9PiB7XG5cdHJldHVybiBgJHtjb3VudEJ5dGUodGV4dCl9JHtnZXRNZXNzYWdlKCdieXRlKHMpIGluIFVURi04IGVuY29kaW5nJyl9YDtcbn07XG5cbmV4cG9ydCB7Z2V0Q291bnRCeVRleHRMZW5ndGgsIGdldENKS0NvdW50QnlUZXh0TGVuZ3RoLCBnZXRVVEY4Q291bnRCeVRleHRMZW5ndGh9O1xuIiwgImltcG9ydCB7Z2V0Q0pLQ291bnRCeVRleHRMZW5ndGgsIGdldENvdW50QnlUZXh0TGVuZ3RoLCBnZXRVVEY4Q291bnRCeVRleHRMZW5ndGh9IGZyb20gJy4uL21vZHVsZXMvZ2V0Q291bnQnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ2V4dC5nYWRnZXQuUmVhY3QnO1xuaW1wb3J0IHt0aXB9IGZyb20gJy4vV29yZENvdW50Lm1vZHVsZS5sZXNzJztcblxuaW50ZXJmYWNlIFByb3BzIHtcblx0dGV4dDogc3RyaW5nO1xufVxuXG5jb25zdCBXb3JkQ291bnQgPSAoe3RleHR9OiBQcm9wcykgPT4gKFxuXHQ8ZGl2IGNsYXNzTmFtZT17W3RpcCwgJ25vcHJpbnQnLCAndWktc3RhdGUtaGlnaGxpZ2h0JywgJ3VpLWNvcm5lci1hbGwnXX0gaWQ9XCJnYWRnZXQtd29yZF9jb3VudC10aXBcIj5cblx0XHR7Z2V0Q291bnRCeVRleHRMZW5ndGgodGV4dCl9XG5cdFx0e2dldENKS0NvdW50QnlUZXh0TGVuZ3RoKHRleHQpfVxuXHRcdDxiciAvPlxuXHRcdHtnZXRVVEY4Q291bnRCeVRleHRMZW5ndGgodGV4dCl9XG5cdDwvZGl2PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgV29yZENvdW50O1xuIiwgImltcG9ydCBcImVzYnVpbGQtY3NzLW1vZHVsZXMtcGx1Z2luLW5zLWNzczpzcmMvV29yZENvdW50L2NvbXBvbmVudHMvV29yZENvdW50Lm1vZHVsZS5sZXNzXCI7XG5leHBvcnQgY29uc3QgdGlwID0gXCJXb3JkQ291bnQtbW9kdWxlX190aXBfSEJEbjVhXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgXCJ0aXBcIjogdGlwXG59O1xuICAgICAgIiwgImltcG9ydCB7d29yZENvdW50fSBmcm9tICcuL3dvcmRDb3VudCc7XG5cbmNvbnN0IGFkZExpc3RlbmVyID0gKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQgPT4ge1xuXHRsZXQgZXZlbnRzOiBzdHJpbmc7XG5cdGxldCBkYXRhOiB7cGFzc2l2ZT86IHRydWV9IHwgbnVsbCA9IG51bGw7XG5cdGlmICgnb250b3VjaHN0YXJ0JyBpbiBkb2N1bWVudCkge1xuXHRcdGV2ZW50cyA9ICd0b3VjaHN0YXJ0IHRvdWNoZW5kJztcblx0XHRkYXRhID0ge3Bhc3NpdmU6IHRydWV9O1xuXHR9IGVsc2Uge1xuXHRcdGV2ZW50cyA9ICdtb3VzZXVwIGtleXVwJztcblx0fVxuXG5cdGlmIChkYXRhID09PSBudWxsKSB7XG5cdFx0JGJvZHkub24oZXZlbnRzLCAoKTogdm9pZCA9PiB7XG5cdFx0XHR3b3JkQ291bnQoJGJvZHkpO1xuXHRcdH0pO1xuXHR9IGVsc2Uge1xuXHRcdCRib2R5Lm9uKGV2ZW50cywgZGF0YSwgKCk6IHZvaWQgPT4ge1xuXHRcdFx0d29yZENvdW50KCRib2R5KTtcblx0XHR9KTtcblx0fVxufTtcblxuZXhwb3J0IHthZGRMaXN0ZW5lcn07XG4iLCAiaW1wb3J0IHthZGRMaXN0ZW5lcn0gZnJvbSAnLi9tb2R1bGVzL2FkZExpc3RlbmVyJztcbmltcG9ydCB7Z2V0Qm9keX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxudm9pZCBnZXRCb2R5KCkudGhlbihhZGRMaXN0ZW5lcik7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEscUJBQWtCQyxRQUFBQyxRQUFBLGtCQUFBLEdBQUEsQ0FBQTs7QUNBbEIsSUFBTUMsY0FBZUMsVUFBeUI7QUFDN0MsU0FBT0EsS0FBS0M7QUFDYjs7QUNBQSxJQUFNQyxZQUFhRixVQUF5QjtBQUMzQyxTQUFPRCxZQUNOQyxLQUNFRyxRQUFRLG9CQUFvQixHQUFHLEVBQy9CQSxRQUFRLGlDQUFpQyxJQUFJLEVBQzdDQSxRQUFRLGlDQUFpQyxLQUFLLENBQ2pEO0FBQ0Q7O0FD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TkgsYUFBUztFQUNWO0FBRUEsTUFBSUMsU0FBUyxNQUFNO0FBQ2xCZCxVQUFNaUIsR0FBR0osUUFBUSxNQUFZO0FBQzVCZCxnQkFBVUMsS0FBSztJQUNoQixDQUFDO0VBQ0YsT0FBTztBQUNOQSxVQUFNaUIsR0FBR0osUUFBUUMsTUFBTSxNQUFZO0FBQ2xDZixnQkFBVUMsS0FBSztJQUNoQixDQUFDO0VBQ0Y7QUFDRDs7QUNwQkEsSUFBQWtCLHFCQUFzQi9DLFFBQUEsaUJBQUE7QUFFdEIsTUFBQSxHQUFLK0MsbUJBQUFDLFNBQVEsRUFBRUMsS0FBS1IsV0FBVzsiLAogICJuYW1lcyI6IFsiaW1wb3J0X2V4dF9nYWRnZXQzIiwgIl9fdG9FU00iLCAicmVxdWlyZSIsICJjb3VudExlbmd0aCIsICJ0ZXh0IiwgImxlbmd0aCIsICJjb3VudEJ5dGUiLCAicmVwbGFjZSIsICJjb3VudENKSyIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJnZXRJMThuTWVzc2FnZXMiLCAibG9jYWxpemUiLCAiZW4iLCAiemgiLCAiQ0pLIiwgImkxOG5NZXNzYWdlcyIsICJnZXRNZXNzYWdlIiwgImtleSIsICJnZXRDb3VudEJ5VGV4dExlbmd0aCIsICJjb25jYXQiLCAiZ2V0Q0pLQ291bnRCeVRleHRMZW5ndGgiLCAiZ2V0VVRGOENvdW50QnlUZXh0TGVuZ3RoIiwgImltcG9ydF9leHRfZ2FkZ2V0MiIsICJ0aXAiLCAiV29yZENvdW50IiwgImRlZmF1bHQiLCAiY3JlYXRlRWxlbWVudCIsICJjbGFzc05hbWUiLCAiaWQiLCAiV29yZENvdW50X2RlZmF1bHQiLCAid29yZENvdW50IiwgIiRib2R5IiwgIl93aW5kb3ckZ2V0U2VsZWN0aW9uIiwgImZpbmQiLCAicmVtb3ZlIiwgIndpbmRvdyIsICJnZXRTZWxlY3Rpb24iLCAidG9TdHJpbmciLCAiJGVsZW1lbnQiLCAiJCIsICJhcHBlbmRUbyIsICJzZXRUaW1lb3V0IiwgImZhZGVPdXQiLCAiYWRkTGlzdGVuZXIiLCAiZXZlbnRzIiwgImRhdGEiLCAiZG9jdW1lbnQiLCAicGFzc2l2ZSIsICJvbiIsICJpbXBvcnRfZXh0X2dhZGdldDQiLCAiZ2V0Qm9keSIsICJ0aGVuIl0KfQo=

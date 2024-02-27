/**
 * SPDX-License-Identifier: GPL-3.0-or-later
 * _addText: '{{Gadget Header|license=GPL-3.0-or-later}}'
 *
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/ScrollUpButton}
 * @author 安忆 <i@anyi.in>
 * @license GPL-3.0-or-later {@link https://www.qiuwenbaike.cn/wiki/H:GPL-3.0}
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

// dist/ScrollUpButton/ScrollUpButton.js
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
//! src/ScrollUpButton/ScrollUpButton.ts
var import_ext_gadget6 = require("ext.gadget.Util");
//! src/ScrollUpButton/modules/constant.ts
var CLASS_NAME = "gadget-scroll_up_button";
var CLASS_NAME_DOWN = "".concat(CLASS_NAME, "-down");
var CLASS_NAME_UP = "".concat(CLASS_NAME, "-up");
//! src/ScrollUpButton/components/scrollButton.tsx
var import_ext_gadget2 = __toESM(require("ext.gadget.React"), 1);
//! src/ScrollUpButton/modules/i18n.ts
var import_ext_gadget = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    ToBottom: (0, import_ext_gadget.localize)({
      en: "Scroll to the bottom",
      "zh-hans": "滚动至页底",
      "zh-hant": "滾動至頁底"
    }),
    ToTop: (0, import_ext_gadget.localize)({
      en: "Go back to the top",
      "zh-hans": "滚动至页顶",
      "zh-hant": "滾動至頁頂"
    })
  };
};
var i18nMessages = getI18nMessages();
var getMessage = (key) => {
  return i18nMessages[key] || key;
};
//! src/ScrollUpButton/components/scrollButton.tsx
var import_ext_gadget3 = require("ext.gadget.Util");
function ScrollButton(props) {
  const {
    additionalClassName,
    alt,
    ariaLabel,
    onClick
  } = props;
  return /* @__PURE__ */ import_ext_gadget2.default.createElement("img", {
    className: [CLASS_NAME, additionalClassName],
    src: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1' height='1'%3E%3C/svg%3E",
    width: "32",
    height: "32",
    draggable: false,
    alt,
    "aria-label": ariaLabel,
    onClick
  });
}
var TO_BOTTOM = getMessage("ToBottom");
var TO_TOP = getMessage("ToTop");
var ScrollDownButton = () => /* @__PURE__ */ import_ext_gadget2.default.createElement(ScrollButton, {
  additionalClassName: CLASS_NAME_DOWN,
  alt: TO_BOTTOM,
  ariaLabel: TO_BOTTOM,
  onClick: () => {
    var _$$height, _$$height2;
    (0, import_ext_gadget3.scrollTop)(((_$$height = $(document).height()) !== null && _$$height !== void 0 ? _$$height : 0) - ((_$$height2 = $(window).height()) !== null && _$$height2 !== void 0 ? _$$height2 : 0));
  }
});
var ScrollUpButton = () => /* @__PURE__ */ import_ext_gadget2.default.createElement(ScrollButton, {
  additionalClassName: CLASS_NAME_UP,
  alt: TO_TOP,
  ariaLabel: TO_TOP,
  onClick: () => {
    (0, import_ext_gadget3.scrollTop)(0);
  }
});
//! src/ScrollUpButton/modules/insertElementAndListener.ts
var import_ext_gadget4 = require("ext.gadget.Util");
var import_ext_gadget5 = require("ext.gadget.Tippy");
var insertElementandListener = ($body) => {
  const onMouseEnterMouseLeave = (event) => {
    (0, import_ext_gadget4.changeOpacityWhenMouseEnterOrLeave)(event);
  };
  const scrollDownButton = ScrollDownButton();
  const scrollUpButton2 = ScrollUpButton();
  for (var _i = 0, _arr = [scrollDownButton, scrollUpButton2]; _i < _arr.length; _i++) {
    const element = _arr[_i];
    for (var _i2 = 0, _arr2 = ["mouseenter", "mouseleave"]; _i2 < _arr2.length; _i2++) {
      const event = _arr2[_i2];
      element.addEventListener(event, onMouseEnterMouseLeave);
    }
    $body.append(element);
    (0, import_ext_gadget5.tippy)(element, {
      arrow: true,
      content: element.getAttribute("alt"),
      placement: "left"
    });
  }
  const scrollListener = () => {
    let downButtonButtom;
    let upButtonButtom;
    if (document.querySelector("#proveit") || document.querySelector(".gadget-cat_a_lot-container") || document.querySelector("#gadget-word_count-tip")) {
      downButtonButtom = "85px";
      upButtonButtom = "127px";
    } else {
      downButtonButtom = "45px";
      upButtonButtom = "85px";
    }
    scrollDownButton.style.bottom = downButtonButtom;
    scrollUpButton2.style.bottom = upButtonButtom;
  };
  const scrollListenerWithThrottle = mw.util.throttle(scrollListener, 200);
  $(window).on("scroll selectionchange", scrollListenerWithThrottle);
};
//! src/ScrollUpButton/ScrollUpButton.ts
void (0, import_ext_gadget6.getBody)().then(function scrollUpButton($body) {
  insertElementandListener($body);
});

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1Njcm9sbFVwQnV0dG9uL1Njcm9sbFVwQnV0dG9uLnRzIiwgInNyYy9TY3JvbGxVcEJ1dHRvbi9tb2R1bGVzL2NvbnN0YW50LnRzIiwgInNyYy9TY3JvbGxVcEJ1dHRvbi9jb21wb25lbnRzL3Njcm9sbEJ1dHRvbi50c3giLCAic3JjL1Njcm9sbFVwQnV0dG9uL21vZHVsZXMvaTE4bi50cyIsICJzcmMvU2Nyb2xsVXBCdXR0b24vbW9kdWxlcy9pbnNlcnRFbGVtZW50QW5kTGlzdGVuZXIudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7Z2V0Qm9keX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbmltcG9ydCB7aW5zZXJ0RWxlbWVudGFuZExpc3RlbmVyfSBmcm9tICcuL21vZHVsZXMvaW5zZXJ0RWxlbWVudEFuZExpc3RlbmVyJztcblxudm9pZCBnZXRCb2R5KCkudGhlbihmdW5jdGlvbiBzY3JvbGxVcEJ1dHRvbigkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkIHtcblx0aW5zZXJ0RWxlbWVudGFuZExpc3RlbmVyKCRib2R5KTtcbn0pO1xuIiwgImNvbnN0IENMQVNTX05BTUU6IHN0cmluZyA9ICdnYWRnZXQtc2Nyb2xsX3VwX2J1dHRvbic7XG5jb25zdCBDTEFTU19OQU1FX0RPV046IHN0cmluZyA9IGAke0NMQVNTX05BTUV9LWRvd25gO1xuY29uc3QgQ0xBU1NfTkFNRV9VUDogc3RyaW5nID0gYCR7Q0xBU1NfTkFNRX0tdXBgO1xuXG5leHBvcnQge0NMQVNTX05BTUUsIENMQVNTX05BTUVfRE9XTiwgQ0xBU1NfTkFNRV9VUH07XG4iLCAiaW1wb3J0IHtDTEFTU19OQU1FLCBDTEFTU19OQU1FX0RPV04sIENMQVNTX05BTUVfVVB9IGZyb20gJy4uL21vZHVsZXMvY29uc3RhbnQnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ2V4dC5nYWRnZXQuUmVhY3QnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuLi9tb2R1bGVzL2kxOG4nO1xuaW1wb3J0IHtzY3JvbGxUb3B9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmludGVyZmFjZSBQcm9wcyB7XG5cdGFkZGl0aW9uYWxDbGFzc05hbWU6IHN0cmluZztcblx0YWx0OiBzdHJpbmc7XG5cdGFyaWFMYWJlbDogc3RyaW5nO1xuXHRvbkNsaWNrOiAoKSA9PiB2b2lkO1xufVxuXG5mdW5jdGlvbiBTY3JvbGxCdXR0b24ocHJvcHM6IFByb3BzKSB7XG5cdGNvbnN0IHthZGRpdGlvbmFsQ2xhc3NOYW1lLCBhbHQsIGFyaWFMYWJlbCwgb25DbGlja30gPSBwcm9wcztcblxuXHRyZXR1cm4gKFxuXHRcdDxpbWdcblx0XHRcdGNsYXNzTmFtZT17W0NMQVNTX05BTUUsIGFkZGl0aW9uYWxDbGFzc05hbWVdfVxuXHRcdFx0c3JjPXtcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nMScgaGVpZ2h0PScxJyUzRSUzQy9zdmclM0VcIn1cblx0XHRcdHdpZHRoPVwiMzJcIlxuXHRcdFx0aGVpZ2h0PVwiMzJcIlxuXHRcdFx0ZHJhZ2dhYmxlPXtmYWxzZX1cblx0XHRcdGFsdD17YWx0fVxuXHRcdFx0YXJpYS1sYWJlbD17YXJpYUxhYmVsfVxuXHRcdFx0b25DbGljaz17b25DbGlja31cblx0XHQvPlxuXHQpO1xufVxuXG5jb25zdCBUT19CT1RUT006IHN0cmluZyA9IGdldE1lc3NhZ2UoJ1RvQm90dG9tJyk7XG5jb25zdCBUT19UT1A6IHN0cmluZyA9IGdldE1lc3NhZ2UoJ1RvVG9wJyk7XG5cbmNvbnN0IFNjcm9sbERvd25CdXR0b24gPSAoKSA9PiAoXG5cdDxTY3JvbGxCdXR0b25cblx0XHRhZGRpdGlvbmFsQ2xhc3NOYW1lPXtDTEFTU19OQU1FX0RPV059XG5cdFx0YWx0PXtUT19CT1RUT019XG5cdFx0YXJpYUxhYmVsPXtUT19CT1RUT019XG5cdFx0b25DbGljaz17KCk6IHZvaWQgPT4ge1xuXHRcdFx0c2Nyb2xsVG9wKCgkKGRvY3VtZW50KS5oZWlnaHQoKSA/PyAwKSAtICgkKHdpbmRvdykuaGVpZ2h0KCkgPz8gMCkpO1xuXHRcdH19XG5cdC8+XG4pO1xuXG5jb25zdCBTY3JvbGxVcEJ1dHRvbiA9ICgpID0+IChcblx0PFNjcm9sbEJ1dHRvblxuXHRcdGFkZGl0aW9uYWxDbGFzc05hbWU9e0NMQVNTX05BTUVfVVB9XG5cdFx0YWx0PXtUT19UT1B9XG5cdFx0YXJpYUxhYmVsPXtUT19UT1B9XG5cdFx0b25DbGljaz17KCk6IHZvaWQgPT4ge1xuXHRcdFx0c2Nyb2xsVG9wKDApO1xuXHRcdH19XG5cdC8+XG4pO1xuXG5leHBvcnQge1Njcm9sbERvd25CdXR0b24sIFNjcm9sbFVwQnV0dG9ufTtcbiIsICJpbXBvcnQge2xvY2FsaXplfSBmcm9tICdleHQuZ2FkZ2V0LmkxOG4nO1xuXG5jb25zdCBnZXRJMThuTWVzc2FnZXMgPSAoKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0VG9Cb3R0b206IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnU2Nyb2xsIHRvIHRoZSBib3R0b20nLFxuXHRcdFx0J3poLWhhbnMnOiAn5rua5Yqo6Iez6aG15bqVJyxcblx0XHRcdCd6aC1oYW50JzogJ+a7vuWLleiHs+mggeW6lScsXG5cdFx0fSksXG5cdFx0VG9Ub3A6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnR28gYmFjayB0byB0aGUgdG9wJyxcblx0XHRcdCd6aC1oYW5zJzogJ+a7muWKqOiHs+mhtemhticsXG5cdFx0XHQnemgtaGFudCc6ICfmu77li5Xoh7PpoIHpoIInLFxuXHRcdH0pLFxuXHR9O1xufTtcblxuY29uc3QgaTE4bk1lc3NhZ2VzID0gZ2V0STE4bk1lc3NhZ2VzKCk7XG5cbmNvbnN0IGdldE1lc3NhZ2U6IEdldE1lc3NhZ2VzPHR5cGVvZiBpMThuTWVzc2FnZXM+ID0gKGtleSkgPT4ge1xuXHRyZXR1cm4gaTE4bk1lc3NhZ2VzW2tleV0gfHwga2V5O1xufTtcblxuZXhwb3J0IHtnZXRNZXNzYWdlfTtcbiIsICJpbXBvcnQge1Njcm9sbERvd25CdXR0b24sIFNjcm9sbFVwQnV0dG9ufSBmcm9tICcuLi9jb21wb25lbnRzL3Njcm9sbEJ1dHRvbic7XG5pbXBvcnQge2NoYW5nZU9wYWNpdHlXaGVuTW91c2VFbnRlck9yTGVhdmV9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5pbXBvcnQge3RpcHB5fSBmcm9tICdleHQuZ2FkZ2V0LlRpcHB5JztcblxuY29uc3QgaW5zZXJ0RWxlbWVudGFuZExpc3RlbmVyID0gKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQgPT4ge1xuXHRjb25zdCBvbk1vdXNlRW50ZXJNb3VzZUxlYXZlID0gKGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCA9PiB7XG5cdFx0Y2hhbmdlT3BhY2l0eVdoZW5Nb3VzZUVudGVyT3JMZWF2ZShldmVudCk7XG5cdH07XG5cblx0Y29uc3Qgc2Nyb2xsRG93bkJ1dHRvbiA9IFNjcm9sbERvd25CdXR0b24oKSBhcyBIVE1MRWxlbWVudDtcblx0Y29uc3Qgc2Nyb2xsVXBCdXR0b24gPSBTY3JvbGxVcEJ1dHRvbigpIGFzIEhUTUxFbGVtZW50O1xuXG5cdGZvciAoY29uc3QgZWxlbWVudCBvZiBbc2Nyb2xsRG93bkJ1dHRvbiwgc2Nyb2xsVXBCdXR0b25dKSB7XG5cdFx0Zm9yIChjb25zdCBldmVudCBvZiBbJ21vdXNlZW50ZXInLCAnbW91c2VsZWF2ZSddIGFzIGNvbnN0KSB7XG5cdFx0XHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIG9uTW91c2VFbnRlck1vdXNlTGVhdmUpO1xuXHRcdH1cblxuXHRcdCRib2R5LmFwcGVuZChlbGVtZW50KTtcblxuXHRcdHRpcHB5KGVsZW1lbnQsIHtcblx0XHRcdGFycm93OiB0cnVlLFxuXHRcdFx0Y29udGVudDogZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2FsdCcpIGFzIHN0cmluZyxcblx0XHRcdHBsYWNlbWVudDogJ2xlZnQnLFxuXHRcdH0pO1xuXHR9XG5cblx0Y29uc3Qgc2Nyb2xsTGlzdGVuZXIgPSAoKTogdm9pZCA9PiB7XG5cdFx0bGV0IGRvd25CdXR0b25CdXR0b206IHN0cmluZztcblx0XHRsZXQgdXBCdXR0b25CdXR0b206IHN0cmluZztcblxuXHRcdGlmIChcblx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm92ZWl0JykgfHxcblx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYWRnZXQtY2F0X2FfbG90LWNvbnRhaW5lcicpIHx8XG5cdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZ2FkZ2V0LXdvcmRfY291bnQtdGlwJylcblx0XHQpIHtcblx0XHRcdGRvd25CdXR0b25CdXR0b20gPSAnODVweCc7XG5cdFx0XHR1cEJ1dHRvbkJ1dHRvbSA9ICcxMjdweCc7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGRvd25CdXR0b25CdXR0b20gPSAnNDVweCc7XG5cdFx0XHR1cEJ1dHRvbkJ1dHRvbSA9ICc4NXB4Jztcblx0XHR9XG5cblx0XHRzY3JvbGxEb3duQnV0dG9uLnN0eWxlLmJvdHRvbSA9IGRvd25CdXR0b25CdXR0b207XG5cdFx0c2Nyb2xsVXBCdXR0b24uc3R5bGUuYm90dG9tID0gdXBCdXR0b25CdXR0b207XG5cdH07XG5cdGNvbnN0IHNjcm9sbExpc3RlbmVyV2l0aFRocm90dGxlOiB0eXBlb2Ygc2Nyb2xsTGlzdGVuZXIgPSBtdy51dGlsLnRocm90dGxlKHNjcm9sbExpc3RlbmVyLCAyMDApO1xuXG5cdCQod2luZG93KS5vbignc2Nyb2xsIHNlbGVjdGlvbmNoYW5nZScsIHNjcm9sbExpc3RlbmVyV2l0aFRocm90dGxlKTtcbn07XG5cbmV4cG9ydCB7aW5zZXJ0RWxlbWVudGFuZExpc3RlbmVyfTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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UEMsU0FBU1AsUUFBUVEsYUFBYSxLQUFLO01BQ25DQyxXQUFXO0lBQ1osQ0FBQztFQUNGO0FBRUEsUUFBTUMsaUJBQWlCQSxNQUFZO0FBQ2xDLFFBQUlDO0FBQ0osUUFBSUM7QUFFSixRQUNDM0IsU0FBUzRCLGNBQWMsVUFBVSxLQUNqQzVCLFNBQVM0QixjQUFjLDZCQUE2QixLQUNwRDVCLFNBQVM0QixjQUFjLHdCQUF3QixHQUM5QztBQUNERix5QkFBbUI7QUFDbkJDLHVCQUFpQjtJQUNsQixPQUFPO0FBQ05ELHlCQUFtQjtBQUNuQkMsdUJBQWlCO0lBQ2xCO0FBRUFqQixxQkFBaUJtQixNQUFNQyxTQUFTSjtBQUNoQ2Ysb0JBQWVrQixNQUFNQyxTQUFTSDtFQUMvQjtBQUNBLFFBQU1JLDZCQUFvREMsR0FBR0MsS0FBS0MsU0FBU1QsZ0JBQWdCLEdBQUc7QUFFOUYxQixJQUFFRSxNQUFNLEVBQUVrQyxHQUFHLDBCQUEwQkosMEJBQTBCO0FBQ2xFOztBSjdDQSxNQUFBLEdBQUtyRSxtQkFBQTBFLFNBQVEsRUFBRUMsS0FBSyxTQUFTQyxlQUFlaEMsT0FBc0M7QUFDakZELDJCQUF5QkMsS0FBSztBQUMvQixDQUFDOyIsCiAgIm5hbWVzIjogWyJpbXBvcnRfZXh0X2dhZGdldDYiLCAicmVxdWlyZSIsICJDTEFTU19OQU1FIiwgIkNMQVNTX05BTUVfRE9XTiIsICJjb25jYXQiLCAiQ0xBU1NfTkFNRV9VUCIsICJpbXBvcnRfZXh0X2dhZGdldDIiLCAiX190b0VTTSIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJnZXRJMThuTWVzc2FnZXMiLCAiVG9Cb3R0b20iLCAibG9jYWxpemUiLCAiZW4iLCAiVG9Ub3AiLCAiaTE4bk1lc3NhZ2VzIiwgImdldE1lc3NhZ2UiLCAia2V5IiwgImltcG9ydF9leHRfZ2FkZ2V0MyIsICJTY3JvbGxCdXR0b24iLCAicHJvcHMiLCAiYWRkaXRpb25hbENsYXNzTmFtZSIsICJhbHQiLCAiYXJpYUxhYmVsIiwgIm9uQ2xpY2siLCAiZGVmYXVsdCIsICJjcmVhdGVFbGVtZW50IiwgImNsYXNzTmFtZSIsICJzcmMiLCAid2lkdGgiLCAiaGVpZ2h0IiwgImRyYWdnYWJsZSIsICJUT19CT1RUT00iLCAiVE9fVE9QIiwgIlNjcm9sbERvd25CdXR0b24iLCAiXyQkaGVpZ2h0IiwgIl8kJGhlaWdodDIiLCAic2Nyb2xsVG9wIiwgIiQiLCAiZG9jdW1lbnQiLCAid2luZG93IiwgIlNjcm9sbFVwQnV0dG9uIiwgImltcG9ydF9leHRfZ2FkZ2V0NCIsICJpbXBvcnRfZXh0X2dhZGdldDUiLCAiaW5zZXJ0RWxlbWVudGFuZExpc3RlbmVyIiwgIiRib2R5IiwgIm9uTW91c2VFbnRlck1vdXNlTGVhdmUiLCAiZXZlbnQiLCAiY2hhbmdlT3BhY2l0eVdoZW5Nb3VzZUVudGVyT3JMZWF2ZSIsICJzY3JvbGxEb3duQnV0dG9uIiwgInNjcm9sbFVwQnV0dG9uMiIsICJfaSIsICJfYXJyIiwgImxlbmd0aCIsICJlbGVtZW50IiwgIl9pMiIsICJfYXJyMiIsICJhZGRFdmVudExpc3RlbmVyIiwgImFwcGVuZCIsICJ0aXBweSIsICJhcnJvdyIsICJjb250ZW50IiwgImdldEF0dHJpYnV0ZSIsICJwbGFjZW1lbnQiLCAic2Nyb2xsTGlzdGVuZXIiLCAiZG93bkJ1dHRvbkJ1dHRvbSIsICJ1cEJ1dHRvbkJ1dHRvbSIsICJxdWVyeVNlbGVjdG9yIiwgInN0eWxlIiwgImJvdHRvbSIsICJzY3JvbGxMaXN0ZW5lcldpdGhUaHJvdHRsZSIsICJtdyIsICJ1dGlsIiwgInRocm90dGxlIiwgIm9uIiwgImdldEJvZHkiLCAidGhlbiIsICJzY3JvbGxVcEJ1dHRvbiJdCn0K

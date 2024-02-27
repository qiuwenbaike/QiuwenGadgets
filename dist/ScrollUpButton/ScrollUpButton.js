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
var ScrollDownButton = /* @__PURE__ */ import_ext_gadget2.default.createElement(ScrollButton, {
  additionalClassName: CLASS_NAME_DOWN,
  alt: TO_BOTTOM,
  ariaLabel: TO_BOTTOM,
  onClick: () => {
    var _$$height, _$$height2;
    (0, import_ext_gadget3.scrollTop)(((_$$height = $(document).height()) !== null && _$$height !== void 0 ? _$$height : 0) - ((_$$height2 = $(window).height()) !== null && _$$height2 !== void 0 ? _$$height2 : 0));
  }
});
var ScrollUpButton = /* @__PURE__ */ import_ext_gadget2.default.createElement(ScrollButton, {
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
  for (var _i = 0, _arr = [ScrollDownButton, ScrollUpButton]; _i < _arr.length; _i++) {
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
    let downButtonButtom, upButtonButtom;
    if (document.querySelector("#proveit") || document.querySelector(".gadget-cat_a_lot-container") || document.querySelector("#gadget-word_count-tip")) {
      downButtonButtom = "85px";
      upButtonButtom = "127px";
    } else {
      downButtonButtom = "45px";
      upButtonButtom = "85px";
    }
    ScrollDownButton.style.bottom = downButtonButtom;
    ScrollUpButton.style.bottom = upButtonButtom;
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1Njcm9sbFVwQnV0dG9uL1Njcm9sbFVwQnV0dG9uLnRzIiwgInNyYy9TY3JvbGxVcEJ1dHRvbi9tb2R1bGVzL2NvbnN0YW50LnRzIiwgInNyYy9TY3JvbGxVcEJ1dHRvbi9jb21wb25lbnRzL3Njcm9sbEJ1dHRvbi50c3giLCAic3JjL1Njcm9sbFVwQnV0dG9uL21vZHVsZXMvaTE4bi50cyIsICJzcmMvU2Nyb2xsVXBCdXR0b24vbW9kdWxlcy9pbnNlcnRFbGVtZW50QW5kTGlzdGVuZXIudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7Z2V0Qm9keX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbmltcG9ydCB7aW5zZXJ0RWxlbWVudGFuZExpc3RlbmVyfSBmcm9tICcuL21vZHVsZXMvaW5zZXJ0RWxlbWVudEFuZExpc3RlbmVyJztcblxudm9pZCBnZXRCb2R5KCkudGhlbihmdW5jdGlvbiBzY3JvbGxVcEJ1dHRvbigkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkIHtcblx0aW5zZXJ0RWxlbWVudGFuZExpc3RlbmVyKCRib2R5KTtcbn0pO1xuIiwgImNvbnN0IENMQVNTX05BTUU6IHN0cmluZyA9ICdnYWRnZXQtc2Nyb2xsX3VwX2J1dHRvbic7XG5jb25zdCBDTEFTU19OQU1FX0RPV046IHN0cmluZyA9IGAke0NMQVNTX05BTUV9LWRvd25gO1xuY29uc3QgQ0xBU1NfTkFNRV9VUDogc3RyaW5nID0gYCR7Q0xBU1NfTkFNRX0tdXBgO1xuXG5leHBvcnQge0NMQVNTX05BTUUsIENMQVNTX05BTUVfRE9XTiwgQ0xBU1NfTkFNRV9VUH07XG4iLCAiaW1wb3J0IHtDTEFTU19OQU1FLCBDTEFTU19OQU1FX0RPV04sIENMQVNTX05BTUVfVVB9IGZyb20gJy4uL21vZHVsZXMvY29uc3RhbnQnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ2V4dC5nYWRnZXQuUmVhY3QnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuLi9tb2R1bGVzL2kxOG4nO1xuaW1wb3J0IHtzY3JvbGxUb3B9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmludGVyZmFjZSBQcm9wcyB7XG5cdGFkZGl0aW9uYWxDbGFzc05hbWU6IHN0cmluZztcblx0YWx0OiBzdHJpbmc7XG5cdGFyaWFMYWJlbDogc3RyaW5nO1xuXHRvbkNsaWNrOiAoKSA9PiB2b2lkO1xufVxuXG5mdW5jdGlvbiBTY3JvbGxCdXR0b24ocHJvcHM6IFByb3BzKSB7XG5cdGNvbnN0IHthZGRpdGlvbmFsQ2xhc3NOYW1lLCBhbHQsIGFyaWFMYWJlbCwgb25DbGlja30gPSBwcm9wcztcblxuXHRyZXR1cm4gKFxuXHRcdDxpbWdcblx0XHRcdGNsYXNzTmFtZT17W0NMQVNTX05BTUUsIGFkZGl0aW9uYWxDbGFzc05hbWVdfVxuXHRcdFx0c3JjPXtcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nMScgaGVpZ2h0PScxJyUzRSUzQy9zdmclM0VcIn1cblx0XHRcdHdpZHRoPVwiMzJcIlxuXHRcdFx0aGVpZ2h0PVwiMzJcIlxuXHRcdFx0ZHJhZ2dhYmxlPXtmYWxzZX1cblx0XHRcdGFsdD17YWx0fVxuXHRcdFx0YXJpYS1sYWJlbD17YXJpYUxhYmVsfVxuXHRcdFx0b25DbGljaz17b25DbGlja31cblx0XHQvPlxuXHQpO1xufVxuXG5jb25zdCBUT19CT1RUT006IHN0cmluZyA9IGdldE1lc3NhZ2UoJ1RvQm90dG9tJyk7XG5jb25zdCBUT19UT1A6IHN0cmluZyA9IGdldE1lc3NhZ2UoJ1RvVG9wJyk7XG5cbmNvbnN0IFNjcm9sbERvd25CdXR0b24gPSAoXG5cdDxTY3JvbGxCdXR0b25cblx0XHRhZGRpdGlvbmFsQ2xhc3NOYW1lPXtDTEFTU19OQU1FX0RPV059XG5cdFx0YWx0PXtUT19CT1RUT019XG5cdFx0YXJpYUxhYmVsPXtUT19CT1RUT019XG5cdFx0b25DbGljaz17KCk6IHZvaWQgPT4ge1xuXHRcdFx0c2Nyb2xsVG9wKCgkKGRvY3VtZW50KS5oZWlnaHQoKSA/PyAwKSAtICgkKHdpbmRvdykuaGVpZ2h0KCkgPz8gMCkpO1xuXHRcdH19XG5cdC8+XG4pO1xuXG5jb25zdCBTY3JvbGxVcEJ1dHRvbiA9IChcblx0PFNjcm9sbEJ1dHRvblxuXHRcdGFkZGl0aW9uYWxDbGFzc05hbWU9e0NMQVNTX05BTUVfVVB9XG5cdFx0YWx0PXtUT19UT1B9XG5cdFx0YXJpYUxhYmVsPXtUT19UT1B9XG5cdFx0b25DbGljaz17KCk6IHZvaWQgPT4ge1xuXHRcdFx0c2Nyb2xsVG9wKDApO1xuXHRcdH19XG5cdC8+XG4pO1xuXG5leHBvcnQge1Njcm9sbERvd25CdXR0b24sIFNjcm9sbFVwQnV0dG9ufTtcbiIsICJpbXBvcnQge2xvY2FsaXplfSBmcm9tICdleHQuZ2FkZ2V0LmkxOG4nO1xuXG5jb25zdCBnZXRJMThuTWVzc2FnZXMgPSAoKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0VG9Cb3R0b206IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnU2Nyb2xsIHRvIHRoZSBib3R0b20nLFxuXHRcdFx0J3poLWhhbnMnOiAn5rua5Yqo6Iez6aG15bqVJyxcblx0XHRcdCd6aC1oYW50JzogJ+a7vuWLleiHs+mggeW6lScsXG5cdFx0fSksXG5cdFx0VG9Ub3A6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnR28gYmFjayB0byB0aGUgdG9wJyxcblx0XHRcdCd6aC1oYW5zJzogJ+a7muWKqOiHs+mhtemhticsXG5cdFx0XHQnemgtaGFudCc6ICfmu77li5Xoh7PpoIHpoIInLFxuXHRcdH0pLFxuXHR9O1xufTtcblxuY29uc3QgaTE4bk1lc3NhZ2VzID0gZ2V0STE4bk1lc3NhZ2VzKCk7XG5cbmNvbnN0IGdldE1lc3NhZ2U6IEdldE1lc3NhZ2VzPHR5cGVvZiBpMThuTWVzc2FnZXM+ID0gKGtleSkgPT4ge1xuXHRyZXR1cm4gaTE4bk1lc3NhZ2VzW2tleV0gfHwga2V5O1xufTtcblxuZXhwb3J0IHtnZXRNZXNzYWdlfTtcbiIsICJpbXBvcnQge1Njcm9sbERvd25CdXR0b24sIFNjcm9sbFVwQnV0dG9ufSBmcm9tICcuLi9jb21wb25lbnRzL3Njcm9sbEJ1dHRvbic7XG5pbXBvcnQge2NoYW5nZU9wYWNpdHlXaGVuTW91c2VFbnRlck9yTGVhdmV9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5pbXBvcnQge3RpcHB5fSBmcm9tICdleHQuZ2FkZ2V0LlRpcHB5JztcblxuY29uc3QgaW5zZXJ0RWxlbWVudGFuZExpc3RlbmVyID0gKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQgPT4ge1xuXHRjb25zdCBvbk1vdXNlRW50ZXJNb3VzZUxlYXZlID0gKGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCA9PiB7XG5cdFx0Y2hhbmdlT3BhY2l0eVdoZW5Nb3VzZUVudGVyT3JMZWF2ZShldmVudCk7XG5cdH07XG5cblx0Zm9yIChjb25zdCBlbGVtZW50IG9mIFtTY3JvbGxEb3duQnV0dG9uLCBTY3JvbGxVcEJ1dHRvbl0gYXMgSFRNTEVsZW1lbnRbXSkge1xuXHRcdGZvciAoY29uc3QgZXZlbnQgb2YgWydtb3VzZWVudGVyJywgJ21vdXNlbGVhdmUnXSBhcyBjb25zdCkge1xuXHRcdFx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBvbk1vdXNlRW50ZXJNb3VzZUxlYXZlKTtcblx0XHR9XG5cblx0XHQkYm9keS5hcHBlbmQoZWxlbWVudCk7XG5cblx0XHR0aXBweShlbGVtZW50LCB7XG5cdFx0XHRhcnJvdzogdHJ1ZSxcblx0XHRcdGNvbnRlbnQ6IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdhbHQnKSBhcyBzdHJpbmcsXG5cdFx0XHRwbGFjZW1lbnQ6ICdsZWZ0Jyxcblx0XHR9KTtcblx0fVxuXG5cdGNvbnN0IHNjcm9sbExpc3RlbmVyID0gKCk6IHZvaWQgPT4ge1xuXHRcdGxldCBkb3duQnV0dG9uQnV0dG9tLCB1cEJ1dHRvbkJ1dHRvbTtcblx0XHRpZiAoXG5cdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvdmVpdCcpIHx8XG5cdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FkZ2V0LWNhdF9hX2xvdC1jb250YWluZXInKSB8fFxuXHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2dhZGdldC13b3JkX2NvdW50LXRpcCcpXG5cdFx0KSB7XG5cdFx0XHRkb3duQnV0dG9uQnV0dG9tID0gJzg1cHgnO1xuXHRcdFx0dXBCdXR0b25CdXR0b20gPSAnMTI3cHgnO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRkb3duQnV0dG9uQnV0dG9tID0gJzQ1cHgnO1xuXHRcdFx0dXBCdXR0b25CdXR0b20gPSAnODVweCc7XG5cdFx0fVxuXG5cdFx0U2Nyb2xsRG93bkJ1dHRvbi5zdHlsZS5ib3R0b20gPSBkb3duQnV0dG9uQnV0dG9tO1xuXHRcdFNjcm9sbFVwQnV0dG9uLnN0eWxlLmJvdHRvbSA9IHVwQnV0dG9uQnV0dG9tO1xuXHR9O1xuXHRjb25zdCBzY3JvbGxMaXN0ZW5lcldpdGhUaHJvdHRsZTogdHlwZW9mIHNjcm9sbExpc3RlbmVyID0gbXcudXRpbC50aHJvdHRsZShzY3JvbGxMaXN0ZW5lciwgMjAwKTtcblxuXHQkKHdpbmRvdykub24oJ3Njcm9sbCBzZWxlY3Rpb25jaGFuZ2UnLCBzY3JvbGxMaXN0ZW5lcldpdGhUaHJvdHRsZSk7XG59O1xuXG5leHBvcnQge2luc2VydEVsZW1lbnRhbmRMaXN0ZW5lcn07XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxxQkFBc0JDLFFBQUEsaUJBQUE7O0FDQXRCLElBQU1DLGFBQXFCO0FBQzNCLElBQU1DLGtCQUFBLEdBQUFDLE9BQTZCRixZQUFVLE9BQUE7QUFDN0MsSUFBTUcsZ0JBQUEsR0FBQUQsT0FBMkJGLFlBQVUsS0FBQTs7QUNEM0MsSUFBQUkscUJBQWtCQyxRQUFBTixRQUFBLGtCQUFBLEdBQUEsQ0FBQTs7QUNEbEIsSUFBQU8sb0JBQXVCUCxRQUFBLGlCQUFBO0FBRXZCLElBQU1RLGtCQUFrQkEsTUFBTTtBQUM3QixTQUFPO0lBQ05DLFdBQUEsR0FBVUYsa0JBQUFHLFVBQVM7TUFDbEJDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDREMsUUFBQSxHQUFPTCxrQkFBQUcsVUFBUztNQUNmQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0VBQ0Y7QUFDRDtBQUVBLElBQU1FLGVBQWVMLGdCQUFnQjtBQUVyQyxJQUFNTSxhQUFnREMsU0FBUTtBQUM3RCxTQUFPRixhQUFhRSxHQUFHLEtBQUtBO0FBQzdCOztBRGxCQSxJQUFBQyxxQkFBd0JoQixRQUFBLGlCQUFBO0FBU3hCLFNBQVNpQixhQUFhQyxPQUFjO0FBQ25DLFFBQU07SUFBQ0M7SUFBcUJDO0lBQUtDO0lBQVdDO0VBQU8sSUFBSUo7QUFFdkQsU0FDQ2IsbUNBQUFrQixRQUFBQyxjQUFDLE9BQUE7SUFDQUMsV0FBVyxDQUFDeEIsWUFBWWtCLG1CQUFtQjtJQUMzQ08sS0FBSztJQUNMQyxPQUFNO0lBQ05DLFFBQU87SUFDUEMsV0FBVztJQUNYVDtJQUNBLGNBQVlDO0lBQ1pDO0VBQUEsQ0FDRDtBQUVGO0FBRUEsSUFBTVEsWUFBb0JoQixXQUFXLFVBQVU7QUFDL0MsSUFBTWlCLFNBQWlCakIsV0FBVyxPQUFPO0FBRXpDLElBQU1rQixtQkFDTDNCLG1DQUFBa0IsUUFBQUMsY0FBQ1AsY0FBQTtFQUNBRSxxQkFBcUJqQjtFQUNyQmtCLEtBQUtVO0VBQ0xULFdBQVdTO0VBQ1hSLFNBQVNBLE1BQVk7QUFBQSxRQUFBVyxXQUFBQztBQUNwQixLQUFBLEdBQUFsQixtQkFBQW1CLGFBQUFGLFlBQVdHLEVBQUVDLFFBQVEsRUFBRVQsT0FBTyxPQUFBLFFBQUFLLGNBQUEsU0FBQUEsWUFBSyxPQUFBQyxhQUFNRSxFQUFFRSxNQUFNLEVBQUVWLE9BQU8sT0FBQSxRQUFBTSxlQUFBLFNBQUFBLGFBQUssRUFBRTtFQUNsRTtBQUFBLENBQ0Q7QUFHRCxJQUFNSyxpQkFDTGxDLG1DQUFBa0IsUUFBQUMsY0FBQ1AsY0FBQTtFQUNBRSxxQkFBcUJmO0VBQ3JCZ0IsS0FBS1c7RUFDTFYsV0FBV1U7RUFDWFQsU0FBU0EsTUFBWTtBQUNwQixLQUFBLEdBQUFOLG1CQUFBbUIsV0FBVSxDQUFDO0VBQ1o7QUFBQSxDQUNEOztBRWxERCxJQUFBSyxxQkFBaUR4QyxRQUFBLGlCQUFBO0FBQ2pELElBQUF5QyxxQkFBb0J6QyxRQUFBLGtCQUFBO0FBRXBCLElBQU0wQywyQkFBNEJDLFdBQXlDO0FBQzFFLFFBQU1DLHlCQUEwQkMsV0FBNEI7QUFDM0QsS0FBQSxHQUFBTCxtQkFBQU0sb0NBQW1DRCxLQUFLO0VBQ3pDO0FBRUEsV0FBQUUsS0FBQSxHQUFBQyxPQUFzQixDQUFDaEIsa0JBQWtCTyxjQUFjLEdBQUFRLEtBQUFDLEtBQUFDLFFBQUFGLE1BQW9CO0FBQTNFLFVBQVdHLFVBQUFGLEtBQUFELEVBQUE7QUFDVixhQUFBSSxNQUFBLEdBQUFDLFFBQW9CLENBQUMsY0FBYyxZQUFZLEdBQUFELE1BQUFDLE1BQUFILFFBQUFFLE9BQVk7QUFBM0QsWUFBV04sUUFBQU8sTUFBQUQsR0FBQTtBQUNWRCxjQUFRRyxpQkFBaUJSLE9BQU9ELHNCQUFzQjtJQUN2RDtBQUVBRCxVQUFNVyxPQUFPSixPQUFPO0FBRXBCLEtBQUEsR0FBQVQsbUJBQUFjLE9BQU1MLFNBQVM7TUFDZE0sT0FBTztNQUNQQyxTQUFTUCxRQUFRUSxhQUFhLEtBQUs7TUFDbkNDLFdBQVc7SUFDWixDQUFDO0VBQ0Y7QUFFQSxRQUFNQyxpQkFBaUJBLE1BQVk7QUFDbEMsUUFBSUMsa0JBQWtCQztBQUN0QixRQUNDekIsU0FBUzBCLGNBQWMsVUFBVSxLQUNqQzFCLFNBQVMwQixjQUFjLDZCQUE2QixLQUNwRDFCLFNBQVMwQixjQUFjLHdCQUF3QixHQUM5QztBQUNERix5QkFBbUI7QUFDbkJDLHVCQUFpQjtJQUNsQixPQUFPO0FBQ05ELHlCQUFtQjtBQUNuQkMsdUJBQWlCO0lBQ2xCO0FBRUE5QixxQkFBaUJnQyxNQUFNQyxTQUFTSjtBQUNoQ3RCLG1CQUFleUIsTUFBTUMsU0FBU0g7RUFDL0I7QUFDQSxRQUFNSSw2QkFBb0RDLEdBQUdDLEtBQUtDLFNBQVNULGdCQUFnQixHQUFHO0FBRTlGeEIsSUFBRUUsTUFBTSxFQUFFZ0MsR0FBRywwQkFBMEJKLDBCQUEwQjtBQUNsRTs7QUp4Q0EsTUFBQSxHQUFLbkUsbUJBQUF3RSxTQUFRLEVBQUVDLEtBQUssU0FBU0MsZUFBZTlCLE9BQXNDO0FBQ2pGRCwyQkFBeUJDLEtBQUs7QUFDL0IsQ0FBQzsiLAogICJuYW1lcyI6IFsiaW1wb3J0X2V4dF9nYWRnZXQ2IiwgInJlcXVpcmUiLCAiQ0xBU1NfTkFNRSIsICJDTEFTU19OQU1FX0RPV04iLCAiY29uY2F0IiwgIkNMQVNTX05BTUVfVVAiLCAiaW1wb3J0X2V4dF9nYWRnZXQyIiwgIl9fdG9FU00iLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAiZ2V0STE4bk1lc3NhZ2VzIiwgIlRvQm90dG9tIiwgImxvY2FsaXplIiwgImVuIiwgIlRvVG9wIiwgImkxOG5NZXNzYWdlcyIsICJnZXRNZXNzYWdlIiwgImtleSIsICJpbXBvcnRfZXh0X2dhZGdldDMiLCAiU2Nyb2xsQnV0dG9uIiwgInByb3BzIiwgImFkZGl0aW9uYWxDbGFzc05hbWUiLCAiYWx0IiwgImFyaWFMYWJlbCIsICJvbkNsaWNrIiwgImRlZmF1bHQiLCAiY3JlYXRlRWxlbWVudCIsICJjbGFzc05hbWUiLCAic3JjIiwgIndpZHRoIiwgImhlaWdodCIsICJkcmFnZ2FibGUiLCAiVE9fQk9UVE9NIiwgIlRPX1RPUCIsICJTY3JvbGxEb3duQnV0dG9uIiwgIl8kJGhlaWdodCIsICJfJCRoZWlnaHQyIiwgInNjcm9sbFRvcCIsICIkIiwgImRvY3VtZW50IiwgIndpbmRvdyIsICJTY3JvbGxVcEJ1dHRvbiIsICJpbXBvcnRfZXh0X2dhZGdldDQiLCAiaW1wb3J0X2V4dF9nYWRnZXQ1IiwgImluc2VydEVsZW1lbnRhbmRMaXN0ZW5lciIsICIkYm9keSIsICJvbk1vdXNlRW50ZXJNb3VzZUxlYXZlIiwgImV2ZW50IiwgImNoYW5nZU9wYWNpdHlXaGVuTW91c2VFbnRlck9yTGVhdmUiLCAiX2kiLCAiX2FyciIsICJsZW5ndGgiLCAiZWxlbWVudCIsICJfaTIiLCAiX2FycjIiLCAiYWRkRXZlbnRMaXN0ZW5lciIsICJhcHBlbmQiLCAidGlwcHkiLCAiYXJyb3ciLCAiY29udGVudCIsICJnZXRBdHRyaWJ1dGUiLCAicGxhY2VtZW50IiwgInNjcm9sbExpc3RlbmVyIiwgImRvd25CdXR0b25CdXR0b20iLCAidXBCdXR0b25CdXR0b20iLCAicXVlcnlTZWxlY3RvciIsICJzdHlsZSIsICJib3R0b20iLCAic2Nyb2xsTGlzdGVuZXJXaXRoVGhyb3R0bGUiLCAibXciLCAidXRpbCIsICJ0aHJvdHRsZSIsICJvbiIsICJnZXRCb2R5IiwgInRoZW4iLCAic2Nyb2xsVXBCdXR0b24iXQp9Cg==

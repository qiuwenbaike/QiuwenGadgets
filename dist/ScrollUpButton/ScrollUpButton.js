/**
 * SPDX-License-Identifier: GPL-3.0-or-later
 * _addText: '{{Gadget Header|license=GPL-3.0-or-later}}'
 *
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/ScrollUpButton}
 * @author 安忆 <i@anyi.in>
 * @license GPL-3.0-or-later {@link https://www.qiuwenbaike.cn/wiki/H:GPL-3.0}
 */

/**
 * Copyright (C)  安忆
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
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
    onClick,
    onMouseEnter,
    onMouseLeave
  } = props;
  return /* @__PURE__ */ import_ext_gadget2.default.createElement("img", {
    className: [CLASS_NAME, additionalClassName, "noprint"],
    src: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1' height='1'%3E%3C/svg%3E",
    width: "32",
    height: "32",
    draggable: false,
    alt,
    "aria-label": ariaLabel,
    onClick,
    onMouseEnter,
    onMouseLeave
  });
}
var TO_BOTTOM = getMessage("ToBottom");
var TO_TOP = getMessage("ToTop");
var ScrollDownButton = (onMouseEnterMouseLeave) => /* @__PURE__ */ import_ext_gadget2.default.createElement(ScrollButton, {
  additionalClassName: CLASS_NAME_DOWN,
  alt: TO_BOTTOM,
  ariaLabel: TO_BOTTOM,
  onClick: () => {
    var _$$height, _$$height2;
    (0, import_ext_gadget3.scrollTop)(((_$$height = $(document).height()) !== null && _$$height !== void 0 ? _$$height : 0) - ((_$$height2 = $(window).height()) !== null && _$$height2 !== void 0 ? _$$height2 : 0));
  },
  onMouseEnter: onMouseEnterMouseLeave,
  onMouseLeave: onMouseEnterMouseLeave
});
var ScrollUpButton = (onMouseEnterMouseLeave) => /* @__PURE__ */ import_ext_gadget2.default.createElement(ScrollButton, {
  additionalClassName: CLASS_NAME_UP,
  alt: TO_TOP,
  ariaLabel: TO_TOP,
  onClick: () => {
    (0, import_ext_gadget3.scrollTop)(0);
  },
  onMouseEnter: onMouseEnterMouseLeave,
  onMouseLeave: onMouseEnterMouseLeave
});
//! src/ScrollUpButton/modules/insertElementAndListener.ts
var import_ext_gadget4 = require("ext.gadget.Util");
var import_ext_gadget5 = require("ext.gadget.Tippy");
var insertElementandListener = ($body) => {
  const onMouseEnterMouseLeave = (event) => {
    (0, import_ext_gadget4.changeOpacityWhenMouseEnterOrLeave)(event);
  };
  const scrollDownButton = ScrollDownButton(onMouseEnterMouseLeave);
  const scrollUpButton2 = ScrollUpButton(onMouseEnterMouseLeave);
  for (var _i = 0, _arr = [scrollDownButton, scrollUpButton2]; _i < _arr.length; _i++) {
    const element = _arr[_i];
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1Njcm9sbFVwQnV0dG9uL1Njcm9sbFVwQnV0dG9uLnRzIiwgInNyYy9TY3JvbGxVcEJ1dHRvbi9tb2R1bGVzL2NvbnN0YW50LnRzIiwgInNyYy9TY3JvbGxVcEJ1dHRvbi9jb21wb25lbnRzL3Njcm9sbEJ1dHRvbi50c3giLCAic3JjL1Njcm9sbFVwQnV0dG9uL21vZHVsZXMvaTE4bi50cyIsICJzcmMvU2Nyb2xsVXBCdXR0b24vbW9kdWxlcy9pbnNlcnRFbGVtZW50QW5kTGlzdGVuZXIudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7Z2V0Qm9keX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbmltcG9ydCB7aW5zZXJ0RWxlbWVudGFuZExpc3RlbmVyfSBmcm9tICcuL21vZHVsZXMvaW5zZXJ0RWxlbWVudEFuZExpc3RlbmVyJztcblxudm9pZCBnZXRCb2R5KCkudGhlbihmdW5jdGlvbiBzY3JvbGxVcEJ1dHRvbigkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkIHtcblx0aW5zZXJ0RWxlbWVudGFuZExpc3RlbmVyKCRib2R5KTtcbn0pO1xuIiwgImNvbnN0IENMQVNTX05BTUU6IHN0cmluZyA9ICdnYWRnZXQtc2Nyb2xsX3VwX2J1dHRvbic7XG5jb25zdCBDTEFTU19OQU1FX0RPV046IHN0cmluZyA9IGAke0NMQVNTX05BTUV9LWRvd25gO1xuY29uc3QgQ0xBU1NfTkFNRV9VUDogc3RyaW5nID0gYCR7Q0xBU1NfTkFNRX0tdXBgO1xuXG5leHBvcnQge0NMQVNTX05BTUUsIENMQVNTX05BTUVfRE9XTiwgQ0xBU1NfTkFNRV9VUH07XG4iLCAiaW1wb3J0IHtDTEFTU19OQU1FLCBDTEFTU19OQU1FX0RPV04sIENMQVNTX05BTUVfVVB9IGZyb20gJy4uL21vZHVsZXMvY29uc3RhbnQnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ2V4dC5nYWRnZXQuUmVhY3QnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuLi9tb2R1bGVzL2kxOG4nO1xuaW1wb3J0IHtzY3JvbGxUb3B9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmludGVyZmFjZSBQcm9wcyB7XG5cdGFkZGl0aW9uYWxDbGFzc05hbWU6IHN0cmluZztcblx0YWx0OiBzdHJpbmc7XG5cdGFyaWFMYWJlbDogc3RyaW5nO1xuXHRvbkNsaWNrOiAoZXZlbnQ/OiBNb3VzZUV2ZW50KSA9PiB2b2lkO1xuXHRvbk1vdXNlRW50ZXI6IChldmVudDogTW91c2VFdmVudCkgPT4gdm9pZDtcblx0b25Nb3VzZUxlYXZlOiAoZXZlbnQ6IE1vdXNlRXZlbnQpID0+IHZvaWQ7XG59XG5cbmZ1bmN0aW9uIFNjcm9sbEJ1dHRvbihwcm9wczogUHJvcHMpIHtcblx0Y29uc3Qge2FkZGl0aW9uYWxDbGFzc05hbWUsIGFsdCwgYXJpYUxhYmVsLCBvbkNsaWNrLCBvbk1vdXNlRW50ZXIsIG9uTW91c2VMZWF2ZX0gPSBwcm9wcztcblxuXHRyZXR1cm4gKFxuXHRcdDxpbWdcblx0XHRcdGNsYXNzTmFtZT17W0NMQVNTX05BTUUsIGFkZGl0aW9uYWxDbGFzc05hbWUsICdub3ByaW50J119XG5cdFx0XHRzcmM9e1wiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxJyBoZWlnaHQ9JzEnJTNFJTNDL3N2ZyUzRVwifVxuXHRcdFx0d2lkdGg9XCIzMlwiXG5cdFx0XHRoZWlnaHQ9XCIzMlwiXG5cdFx0XHRkcmFnZ2FibGU9e2ZhbHNlfVxuXHRcdFx0YWx0PXthbHR9XG5cdFx0XHRhcmlhLWxhYmVsPXthcmlhTGFiZWx9XG5cdFx0XHRvbkNsaWNrPXtvbkNsaWNrfVxuXHRcdFx0b25Nb3VzZUVudGVyPXtvbk1vdXNlRW50ZXJ9XG5cdFx0XHRvbk1vdXNlTGVhdmU9e29uTW91c2VMZWF2ZX1cblx0XHQvPlxuXHQpO1xufVxuXG5jb25zdCBUT19CT1RUT006IHN0cmluZyA9IGdldE1lc3NhZ2UoJ1RvQm90dG9tJyk7XG5jb25zdCBUT19UT1A6IHN0cmluZyA9IGdldE1lc3NhZ2UoJ1RvVG9wJyk7XG5cbmNvbnN0IFNjcm9sbERvd25CdXR0b24gPSAob25Nb3VzZUVudGVyTW91c2VMZWF2ZTogKGV2ZW50OiBNb3VzZUV2ZW50KSA9PiB2b2lkKSA9PiAoXG5cdDxTY3JvbGxCdXR0b25cblx0XHRhZGRpdGlvbmFsQ2xhc3NOYW1lPXtDTEFTU19OQU1FX0RPV059XG5cdFx0YWx0PXtUT19CT1RUT019XG5cdFx0YXJpYUxhYmVsPXtUT19CT1RUT019XG5cdFx0b25DbGljaz17KCk6IHZvaWQgPT4ge1xuXHRcdFx0c2Nyb2xsVG9wKCgkKGRvY3VtZW50KS5oZWlnaHQoKSA/PyAwKSAtICgkKHdpbmRvdykuaGVpZ2h0KCkgPz8gMCkpO1xuXHRcdH19XG5cdFx0b25Nb3VzZUVudGVyPXtvbk1vdXNlRW50ZXJNb3VzZUxlYXZlfVxuXHRcdG9uTW91c2VMZWF2ZT17b25Nb3VzZUVudGVyTW91c2VMZWF2ZX1cblx0Lz5cbik7XG5cbmNvbnN0IFNjcm9sbFVwQnV0dG9uID0gKG9uTW91c2VFbnRlck1vdXNlTGVhdmU6IChldmVudDogTW91c2VFdmVudCkgPT4gdm9pZCkgPT4gKFxuXHQ8U2Nyb2xsQnV0dG9uXG5cdFx0YWRkaXRpb25hbENsYXNzTmFtZT17Q0xBU1NfTkFNRV9VUH1cblx0XHRhbHQ9e1RPX1RPUH1cblx0XHRhcmlhTGFiZWw9e1RPX1RPUH1cblx0XHRvbkNsaWNrPXsoKTogdm9pZCA9PiB7XG5cdFx0XHRzY3JvbGxUb3AoMCk7XG5cdFx0fX1cblx0XHRvbk1vdXNlRW50ZXI9e29uTW91c2VFbnRlck1vdXNlTGVhdmV9XG5cdFx0b25Nb3VzZUxlYXZlPXtvbk1vdXNlRW50ZXJNb3VzZUxlYXZlfVxuXHQvPlxuKTtcblxuZXhwb3J0IHtTY3JvbGxEb3duQnV0dG9uLCBTY3JvbGxVcEJ1dHRvbn07XG4iLCAiaW1wb3J0IHtsb2NhbGl6ZX0gZnJvbSAnZXh0LmdhZGdldC5pMThuJztcblxuY29uc3QgZ2V0STE4bk1lc3NhZ2VzID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdFRvQm90dG9tOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1Njcm9sbCB0byB0aGUgYm90dG9tJyxcblx0XHRcdCd6aC1oYW5zJzogJ+a7muWKqOiHs+mhteW6lScsXG5cdFx0XHQnemgtaGFudCc6ICfmu77li5Xoh7PpoIHlupUnLFxuXHRcdH0pLFxuXHRcdFRvVG9wOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0dvIGJhY2sgdG8gdGhlIHRvcCcsXG5cdFx0XHQnemgtaGFucyc6ICfmu5rliqjoh7PpobXpobYnLFxuXHRcdFx0J3poLWhhbnQnOiAn5ru+5YuV6Iez6aCB6aCCJyxcblx0XHR9KSxcblx0fTtcbn07XG5cbmNvbnN0IGkxOG5NZXNzYWdlcyA9IGdldEkxOG5NZXNzYWdlcygpO1xuXG5jb25zdCBnZXRNZXNzYWdlOiBHZXRNZXNzYWdlczx0eXBlb2YgaTE4bk1lc3NhZ2VzPiA9IChrZXkpID0+IHtcblx0cmV0dXJuIGkxOG5NZXNzYWdlc1trZXldIHx8IGtleTtcbn07XG5cbmV4cG9ydCB7Z2V0TWVzc2FnZX07XG4iLCAiaW1wb3J0IHtTY3JvbGxEb3duQnV0dG9uLCBTY3JvbGxVcEJ1dHRvbn0gZnJvbSAnLi4vY29tcG9uZW50cy9zY3JvbGxCdXR0b24nO1xuaW1wb3J0IHtjaGFuZ2VPcGFjaXR5V2hlbk1vdXNlRW50ZXJPckxlYXZlfSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuaW1wb3J0IHt0aXBweX0gZnJvbSAnZXh0LmdhZGdldC5UaXBweSc7XG5cbmNvbnN0IGluc2VydEVsZW1lbnRhbmRMaXN0ZW5lciA9ICgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkID0+IHtcblx0Y29uc3Qgb25Nb3VzZUVudGVyTW91c2VMZWF2ZSA9IChldmVudDogTW91c2VFdmVudCk6IHZvaWQgPT4ge1xuXHRcdGNoYW5nZU9wYWNpdHlXaGVuTW91c2VFbnRlck9yTGVhdmUoZXZlbnQpO1xuXHR9O1xuXG5cdGNvbnN0IHNjcm9sbERvd25CdXR0b24gPSBTY3JvbGxEb3duQnV0dG9uKG9uTW91c2VFbnRlck1vdXNlTGVhdmUpO1xuXHRjb25zdCBzY3JvbGxVcEJ1dHRvbiA9IFNjcm9sbFVwQnV0dG9uKG9uTW91c2VFbnRlck1vdXNlTGVhdmUpO1xuXG5cdGZvciAoY29uc3QgZWxlbWVudCBvZiBbc2Nyb2xsRG93bkJ1dHRvbiwgc2Nyb2xsVXBCdXR0b25dKSB7XG5cdFx0JGJvZHkuYXBwZW5kKGVsZW1lbnQpO1xuXG5cdFx0dGlwcHkoZWxlbWVudCwge1xuXHRcdFx0YXJyb3c6IHRydWUsXG5cdFx0XHRjb250ZW50OiBlbGVtZW50LmdldEF0dHJpYnV0ZSgnYWx0JykgYXMgc3RyaW5nLFxuXHRcdFx0cGxhY2VtZW50OiAnbGVmdCcsXG5cdFx0fSk7XG5cdH1cblxuXHRjb25zdCBzY3JvbGxMaXN0ZW5lciA9ICgpOiB2b2lkID0+IHtcblx0XHRsZXQgZG93bkJ1dHRvbkJ1dHRvbTogc3RyaW5nO1xuXHRcdGxldCB1cEJ1dHRvbkJ1dHRvbTogc3RyaW5nO1xuXG5cdFx0aWYgKFxuXHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb3ZlaXQnKSB8fFxuXHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhZGdldC1jYXRfYV9sb3QtY29udGFpbmVyJykgfHxcblx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNnYWRnZXQtd29yZF9jb3VudC10aXAnKVxuXHRcdCkge1xuXHRcdFx0ZG93bkJ1dHRvbkJ1dHRvbSA9ICc4NXB4Jztcblx0XHRcdHVwQnV0dG9uQnV0dG9tID0gJzEyN3B4Jztcblx0XHR9IGVsc2Uge1xuXHRcdFx0ZG93bkJ1dHRvbkJ1dHRvbSA9ICc0NXB4Jztcblx0XHRcdHVwQnV0dG9uQnV0dG9tID0gJzg1cHgnO1xuXHRcdH1cblxuXHRcdHNjcm9sbERvd25CdXR0b24uc3R5bGUuYm90dG9tID0gZG93bkJ1dHRvbkJ1dHRvbTtcblx0XHRzY3JvbGxVcEJ1dHRvbi5zdHlsZS5ib3R0b20gPSB1cEJ1dHRvbkJ1dHRvbTtcblx0fTtcblx0Y29uc3Qgc2Nyb2xsTGlzdGVuZXJXaXRoVGhyb3R0bGU6IHR5cGVvZiBzY3JvbGxMaXN0ZW5lciA9IG13LnV0aWwudGhyb3R0bGUoc2Nyb2xsTGlzdGVuZXIsIDIwMCk7XG5cblx0JCh3aW5kb3cpLm9uKCdzY3JvbGwgc2VsZWN0aW9uY2hhbmdlJywgc2Nyb2xsTGlzdGVuZXJXaXRoVGhyb3R0bGUpO1xufTtcblxuZXhwb3J0IHtpbnNlcnRFbGVtZW50YW5kTGlzdGVuZXJ9O1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEscUJBQXNCQyxRQUFBLGlCQUFBOztBQ0F0QixJQUFNQyxhQUFxQjtBQUMzQixJQUFNQyxrQkFBQSxHQUFBQyxPQUE2QkYsWUFBVSxPQUFBO0FBQzdDLElBQU1HLGdCQUFBLEdBQUFELE9BQTJCRixZQUFVLEtBQUE7O0FDRDNDLElBQUFJLHFCQUFrQkMsUUFBQU4sUUFBQSxrQkFBQSxHQUFBLENBQUE7O0FDRGxCLElBQUFPLG9CQUF1QlAsUUFBQSxpQkFBQTtBQUV2QixJQUFNUSxrQkFBa0JBLE1BQU07QUFDN0IsU0FBTztJQUNOQyxXQUFBLEdBQVVGLGtCQUFBRyxVQUFTO01BQ2xCQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0RDLFFBQUEsR0FBT0wsa0JBQUFHLFVBQVM7TUFDZkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztFQUNGO0FBQ0Q7QUFFQSxJQUFNRSxlQUFlTCxnQkFBZ0I7QUFFckMsSUFBTU0sYUFBZ0RDLFNBQVE7QUFDN0QsU0FBT0YsYUFBYUUsR0FBRyxLQUFLQTtBQUM3Qjs7QURsQkEsSUFBQUMscUJBQXdCaEIsUUFBQSxpQkFBQTtBQVd4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U1NfTkFNRV9ET1dOIiwgImNvbmNhdCIsICJDTEFTU19OQU1FX1VQIiwgImltcG9ydF9leHRfZ2FkZ2V0MiIsICJfX3RvRVNNIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgImdldEkxOG5NZXNzYWdlcyIsICJUb0JvdHRvbSIsICJsb2NhbGl6ZSIsICJlbiIsICJUb1RvcCIsICJpMThuTWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAiaW1wb3J0X2V4dF9nYWRnZXQzIiwgIlNjcm9sbEJ1dHRvbiIsICJwcm9wcyIsICJhZGRpdGlvbmFsQ2xhc3NOYW1lIiwgImFsdCIsICJhcmlhTGFiZWwiLCAib25DbGljayIsICJvbk1vdXNlRW50ZXIiLCAib25Nb3VzZUxlYXZlIiwgImRlZmF1bHQiLCAiY3JlYXRlRWxlbWVudCIsICJjbGFzc05hbWUiLCAic3JjIiwgIndpZHRoIiwgImhlaWdodCIsICJkcmFnZ2FibGUiLCAiVE9fQk9UVE9NIiwgIlRPX1RPUCIsICJTY3JvbGxEb3duQnV0dG9uIiwgIm9uTW91c2VFbnRlck1vdXNlTGVhdmUiLCAiXyQkaGVpZ2h0IiwgIl8kJGhlaWdodDIiLCAic2Nyb2xsVG9wIiwgIiQiLCAiZG9jdW1lbnQiLCAid2luZG93IiwgIlNjcm9sbFVwQnV0dG9uIiwgImltcG9ydF9leHRfZ2FkZ2V0NCIsICJpbXBvcnRfZXh0X2dhZGdldDUiLCAiaW5zZXJ0RWxlbWVudGFuZExpc3RlbmVyIiwgIiRib2R5IiwgImV2ZW50IiwgImNoYW5nZU9wYWNpdHlXaGVuTW91c2VFbnRlck9yTGVhdmUiLCAic2Nyb2xsRG93bkJ1dHRvbiIsICJzY3JvbGxVcEJ1dHRvbjIiLCAiX2kiLCAiX2FyciIsICJsZW5ndGgiLCAiZWxlbWVudCIsICJhcHBlbmQiLCAidGlwcHkiLCAiYXJyb3ciLCAiY29udGVudCIsICJnZXRBdHRyaWJ1dGUiLCAicGxhY2VtZW50IiwgInNjcm9sbExpc3RlbmVyIiwgImRvd25CdXR0b25CdXR0b20iLCAidXBCdXR0b25CdXR0b20iLCAicXVlcnlTZWxlY3RvciIsICJzdHlsZSIsICJib3R0b20iLCAic2Nyb2xsTGlzdGVuZXJXaXRoVGhyb3R0bGUiLCAibXciLCAidXRpbCIsICJ0aHJvdHRsZSIsICJvbiIsICJnZXRCb2R5IiwgInRoZW4iLCAic2Nyb2xsVXBCdXR0b24iXQp9Cg==

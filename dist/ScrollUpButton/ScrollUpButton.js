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
    className: [CLASS_NAME, additionalClassName],
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1Njcm9sbFVwQnV0dG9uL1Njcm9sbFVwQnV0dG9uLnRzIiwgInNyYy9TY3JvbGxVcEJ1dHRvbi9tb2R1bGVzL2NvbnN0YW50LnRzIiwgInNyYy9TY3JvbGxVcEJ1dHRvbi9jb21wb25lbnRzL3Njcm9sbEJ1dHRvbi50c3giLCAic3JjL1Njcm9sbFVwQnV0dG9uL21vZHVsZXMvaTE4bi50cyIsICJzcmMvU2Nyb2xsVXBCdXR0b24vbW9kdWxlcy9pbnNlcnRFbGVtZW50QW5kTGlzdGVuZXIudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7Z2V0Qm9keX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbmltcG9ydCB7aW5zZXJ0RWxlbWVudGFuZExpc3RlbmVyfSBmcm9tICcuL21vZHVsZXMvaW5zZXJ0RWxlbWVudEFuZExpc3RlbmVyJztcblxudm9pZCBnZXRCb2R5KCkudGhlbihmdW5jdGlvbiBzY3JvbGxVcEJ1dHRvbigkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkIHtcblx0aW5zZXJ0RWxlbWVudGFuZExpc3RlbmVyKCRib2R5KTtcbn0pO1xuIiwgImNvbnN0IENMQVNTX05BTUU6IHN0cmluZyA9ICdnYWRnZXQtc2Nyb2xsX3VwX2J1dHRvbic7XG5jb25zdCBDTEFTU19OQU1FX0RPV046IHN0cmluZyA9IGAke0NMQVNTX05BTUV9LWRvd25gO1xuY29uc3QgQ0xBU1NfTkFNRV9VUDogc3RyaW5nID0gYCR7Q0xBU1NfTkFNRX0tdXBgO1xuXG5leHBvcnQge0NMQVNTX05BTUUsIENMQVNTX05BTUVfRE9XTiwgQ0xBU1NfTkFNRV9VUH07XG4iLCAiaW1wb3J0IHtDTEFTU19OQU1FLCBDTEFTU19OQU1FX0RPV04sIENMQVNTX05BTUVfVVB9IGZyb20gJy4uL21vZHVsZXMvY29uc3RhbnQnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ2V4dC5nYWRnZXQuUmVhY3QnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuLi9tb2R1bGVzL2kxOG4nO1xuaW1wb3J0IHtzY3JvbGxUb3B9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmludGVyZmFjZSBQcm9wcyB7XG5cdGFkZGl0aW9uYWxDbGFzc05hbWU6IHN0cmluZztcblx0YWx0OiBzdHJpbmc7XG5cdGFyaWFMYWJlbDogc3RyaW5nO1xuXHRvbkNsaWNrOiAoZXZlbnQ/OiBNb3VzZUV2ZW50KSA9PiB2b2lkO1xuXHRvbk1vdXNlRW50ZXI6IChldmVudDogTW91c2VFdmVudCkgPT4gdm9pZDtcblx0b25Nb3VzZUxlYXZlOiAoZXZlbnQ6IE1vdXNlRXZlbnQpID0+IHZvaWQ7XG59XG5cbmZ1bmN0aW9uIFNjcm9sbEJ1dHRvbihwcm9wczogUHJvcHMpIHtcblx0Y29uc3Qge2FkZGl0aW9uYWxDbGFzc05hbWUsIGFsdCwgYXJpYUxhYmVsLCBvbkNsaWNrLCBvbk1vdXNlRW50ZXIsIG9uTW91c2VMZWF2ZX0gPSBwcm9wcztcblxuXHRyZXR1cm4gKFxuXHRcdDxpbWdcblx0XHRcdGNsYXNzTmFtZT17W0NMQVNTX05BTUUsIGFkZGl0aW9uYWxDbGFzc05hbWVdfVxuXHRcdFx0c3JjPXtcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nMScgaGVpZ2h0PScxJyUzRSUzQy9zdmclM0VcIn1cblx0XHRcdHdpZHRoPVwiMzJcIlxuXHRcdFx0aGVpZ2h0PVwiMzJcIlxuXHRcdFx0ZHJhZ2dhYmxlPXtmYWxzZX1cblx0XHRcdGFsdD17YWx0fVxuXHRcdFx0YXJpYS1sYWJlbD17YXJpYUxhYmVsfVxuXHRcdFx0b25DbGljaz17b25DbGlja31cblx0XHRcdG9uTW91c2VFbnRlcj17b25Nb3VzZUVudGVyfVxuXHRcdFx0b25Nb3VzZUxlYXZlPXtvbk1vdXNlTGVhdmV9XG5cdFx0Lz5cblx0KTtcbn1cblxuY29uc3QgVE9fQk9UVE9NOiBzdHJpbmcgPSBnZXRNZXNzYWdlKCdUb0JvdHRvbScpO1xuY29uc3QgVE9fVE9QOiBzdHJpbmcgPSBnZXRNZXNzYWdlKCdUb1RvcCcpO1xuXG5jb25zdCBTY3JvbGxEb3duQnV0dG9uID0gKG9uTW91c2VFbnRlck1vdXNlTGVhdmU6IChldmVudDogTW91c2VFdmVudCkgPT4gdm9pZCkgPT4gKFxuXHQ8U2Nyb2xsQnV0dG9uXG5cdFx0YWRkaXRpb25hbENsYXNzTmFtZT17Q0xBU1NfTkFNRV9ET1dOfVxuXHRcdGFsdD17VE9fQk9UVE9NfVxuXHRcdGFyaWFMYWJlbD17VE9fQk9UVE9NfVxuXHRcdG9uQ2xpY2s9eygpOiB2b2lkID0+IHtcblx0XHRcdHNjcm9sbFRvcCgoJChkb2N1bWVudCkuaGVpZ2h0KCkgPz8gMCkgLSAoJCh3aW5kb3cpLmhlaWdodCgpID8/IDApKTtcblx0XHR9fVxuXHRcdG9uTW91c2VFbnRlcj17b25Nb3VzZUVudGVyTW91c2VMZWF2ZX1cblx0XHRvbk1vdXNlTGVhdmU9e29uTW91c2VFbnRlck1vdXNlTGVhdmV9XG5cdC8+XG4pO1xuXG5jb25zdCBTY3JvbGxVcEJ1dHRvbiA9IChvbk1vdXNlRW50ZXJNb3VzZUxlYXZlOiAoZXZlbnQ6IE1vdXNlRXZlbnQpID0+IHZvaWQpID0+IChcblx0PFNjcm9sbEJ1dHRvblxuXHRcdGFkZGl0aW9uYWxDbGFzc05hbWU9e0NMQVNTX05BTUVfVVB9XG5cdFx0YWx0PXtUT19UT1B9XG5cdFx0YXJpYUxhYmVsPXtUT19UT1B9XG5cdFx0b25DbGljaz17KCk6IHZvaWQgPT4ge1xuXHRcdFx0c2Nyb2xsVG9wKDApO1xuXHRcdH19XG5cdFx0b25Nb3VzZUVudGVyPXtvbk1vdXNlRW50ZXJNb3VzZUxlYXZlfVxuXHRcdG9uTW91c2VMZWF2ZT17b25Nb3VzZUVudGVyTW91c2VMZWF2ZX1cblx0Lz5cbik7XG5cbmV4cG9ydCB7U2Nyb2xsRG93bkJ1dHRvbiwgU2Nyb2xsVXBCdXR0b259O1xuIiwgImltcG9ydCB7bG9jYWxpemV9IGZyb20gJ2V4dC5nYWRnZXQuaTE4bic7XG5cbmNvbnN0IGdldEkxOG5NZXNzYWdlcyA9ICgpID0+IHtcblx0cmV0dXJuIHtcblx0XHRUb0JvdHRvbTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdTY3JvbGwgdG8gdGhlIGJvdHRvbScsXG5cdFx0XHQnemgtaGFucyc6ICfmu5rliqjoh7PpobXlupUnLFxuXHRcdFx0J3poLWhhbnQnOiAn5ru+5YuV6Iez6aCB5bqVJyxcblx0XHR9KSxcblx0XHRUb1RvcDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdHbyBiYWNrIHRvIHRoZSB0b3AnLFxuXHRcdFx0J3poLWhhbnMnOiAn5rua5Yqo6Iez6aG16aG2Jyxcblx0XHRcdCd6aC1oYW50JzogJ+a7vuWLleiHs+mggemggicsXG5cdFx0fSksXG5cdH07XG59O1xuXG5jb25zdCBpMThuTWVzc2FnZXMgPSBnZXRJMThuTWVzc2FnZXMoKTtcblxuY29uc3QgZ2V0TWVzc2FnZTogR2V0TWVzc2FnZXM8dHlwZW9mIGkxOG5NZXNzYWdlcz4gPSAoa2V5KSA9PiB7XG5cdHJldHVybiBpMThuTWVzc2FnZXNba2V5XSB8fCBrZXk7XG59O1xuXG5leHBvcnQge2dldE1lc3NhZ2V9O1xuIiwgImltcG9ydCB7U2Nyb2xsRG93bkJ1dHRvbiwgU2Nyb2xsVXBCdXR0b259IGZyb20gJy4uL2NvbXBvbmVudHMvc2Nyb2xsQnV0dG9uJztcbmltcG9ydCB7Y2hhbmdlT3BhY2l0eVdoZW5Nb3VzZUVudGVyT3JMZWF2ZX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbmltcG9ydCB7dGlwcHl9IGZyb20gJ2V4dC5nYWRnZXQuVGlwcHknO1xuXG5jb25zdCBpbnNlcnRFbGVtZW50YW5kTGlzdGVuZXIgPSAoJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KTogdm9pZCA9PiB7XG5cdGNvbnN0IG9uTW91c2VFbnRlck1vdXNlTGVhdmUgPSAoZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkID0+IHtcblx0XHRjaGFuZ2VPcGFjaXR5V2hlbk1vdXNlRW50ZXJPckxlYXZlKGV2ZW50KTtcblx0fTtcblxuXHRjb25zdCBzY3JvbGxEb3duQnV0dG9uID0gU2Nyb2xsRG93bkJ1dHRvbihvbk1vdXNlRW50ZXJNb3VzZUxlYXZlKTtcblx0Y29uc3Qgc2Nyb2xsVXBCdXR0b24gPSBTY3JvbGxVcEJ1dHRvbihvbk1vdXNlRW50ZXJNb3VzZUxlYXZlKTtcblxuXHRmb3IgKGNvbnN0IGVsZW1lbnQgb2YgW3Njcm9sbERvd25CdXR0b24sIHNjcm9sbFVwQnV0dG9uXSkge1xuXHRcdCRib2R5LmFwcGVuZChlbGVtZW50KTtcblxuXHRcdHRpcHB5KGVsZW1lbnQsIHtcblx0XHRcdGFycm93OiB0cnVlLFxuXHRcdFx0Y29udGVudDogZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2FsdCcpIGFzIHN0cmluZyxcblx0XHRcdHBsYWNlbWVudDogJ2xlZnQnLFxuXHRcdH0pO1xuXHR9XG5cblx0Y29uc3Qgc2Nyb2xsTGlzdGVuZXIgPSAoKTogdm9pZCA9PiB7XG5cdFx0bGV0IGRvd25CdXR0b25CdXR0b206IHN0cmluZztcblx0XHRsZXQgdXBCdXR0b25CdXR0b206IHN0cmluZztcblxuXHRcdGlmIChcblx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm92ZWl0JykgfHxcblx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYWRnZXQtY2F0X2FfbG90LWNvbnRhaW5lcicpIHx8XG5cdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZ2FkZ2V0LXdvcmRfY291bnQtdGlwJylcblx0XHQpIHtcblx0XHRcdGRvd25CdXR0b25CdXR0b20gPSAnODVweCc7XG5cdFx0XHR1cEJ1dHRvbkJ1dHRvbSA9ICcxMjdweCc7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGRvd25CdXR0b25CdXR0b20gPSAnNDVweCc7XG5cdFx0XHR1cEJ1dHRvbkJ1dHRvbSA9ICc4NXB4Jztcblx0XHR9XG5cblx0XHRzY3JvbGxEb3duQnV0dG9uLnN0eWxlLmJvdHRvbSA9IGRvd25CdXR0b25CdXR0b207XG5cdFx0c2Nyb2xsVXBCdXR0b24uc3R5bGUuYm90dG9tID0gdXBCdXR0b25CdXR0b207XG5cdH07XG5cdGNvbnN0IHNjcm9sbExpc3RlbmVyV2l0aFRocm90dGxlOiB0eXBlb2Ygc2Nyb2xsTGlzdGVuZXIgPSBtdy51dGlsLnRocm90dGxlKHNjcm9sbExpc3RlbmVyLCAyMDApO1xuXG5cdCQod2luZG93KS5vbignc2Nyb2xsIHNlbGVjdGlvbmNoYW5nZScsIHNjcm9sbExpc3RlbmVyV2l0aFRocm90dGxlKTtcbn07XG5cbmV4cG9ydCB7aW5zZXJ0RWxlbWVudGFuZExpc3RlbmVyfTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxxQkFBc0JDLFFBQUEsaUJBQUE7O0FDQXRCLElBQU1DLGFBQXFCO0FBQzNCLElBQU1DLGtCQUFBLEdBQUFDLE9BQTZCRixZQUFVLE9BQUE7QUFDN0MsSUFBTUcsZ0JBQUEsR0FBQUQsT0FBMkJGLFlBQVUsS0FBQTs7QUNEM0MsSUFBQUkscUJBQWtCQyxRQUFBTixRQUFBLGtCQUFBLEdBQUEsQ0FBQTs7QUNEbEIsSUFBQU8sb0JBQXVCUCxRQUFBLGlCQUFBO0FBRXZCLElBQU1RLGtCQUFrQkEsTUFBTTtBQUM3QixTQUFPO0lBQ05DLFdBQUEsR0FBVUYsa0JBQUFHLFVBQVM7TUFDbEJDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDREMsUUFBQSxHQUFPTCxrQkFBQUcsVUFBUztNQUNmQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0VBQ0Y7QUFDRDtBQUVBLElBQU1FLGVBQWVMLGdCQUFnQjtBQUVyQyxJQUFNTSxhQUFnREMsU0FBUTtBQUM3RCxTQUFPRixhQUFhRSxHQUFHLEtBQUtBO0FBQzdCOztBRGxCQSxJQUFBQyxxQkFBd0JoQixRQUFBLGlCQUFBO0FBV3hCLFNBQVNpQixhQUFhQyxPQUFjO0FBQ25DLFFBQU07SUFBQ0M7SUFBcUJDO0lBQUtDO0lBQVdDO0lBQVNDO0lBQWNDO0VBQVksSUFBSU47QUFFbkYsU0FDQ2IsbUNBQUFvQixRQUFBQyxjQUFDLE9BQUE7SUFDQUMsV0FBVyxDQUFDMUIsWUFBWWtCLG1CQUFtQjtJQUMzQ1MsS0FBSztJQUNMQyxPQUFNO0lBQ05DLFFBQU87SUFDUEMsV0FBVztJQUNYWDtJQUNBLGNBQVlDO0lBQ1pDO0lBQ0FDO0lBQ0FDO0VBQUEsQ0FDRDtBQUVGO0FBRUEsSUFBTVEsWUFBb0JsQixXQUFXLFVBQVU7QUFDL0MsSUFBTW1CLFNBQWlCbkIsV0FBVyxPQUFPO0FBRXpDLElBQU1vQixtQkFBb0JDLDRCQUN6QjlCLG1DQUFBb0IsUUFBQUMsY0FBQ1QsY0FBQTtFQUNBRSxxQkFBcUJqQjtFQUNyQmtCLEtBQUtZO0VBQ0xYLFdBQVdXO0VBQ1hWLFNBQVNBLE1BQVk7QUFBQSxRQUFBYyxXQUFBQztBQUNwQixLQUFBLEdBQUFyQixtQkFBQXNCLGFBQUFGLFlBQVdHLEVBQUVDLFFBQVEsRUFBRVYsT0FBTyxPQUFBLFFBQUFNLGNBQUEsU0FBQUEsWUFBSyxPQUFBQyxhQUFNRSxFQUFFRSxNQUFNLEVBQUVYLE9BQU8sT0FBQSxRQUFBTyxlQUFBLFNBQUFBLGFBQUssRUFBRTtFQUNsRTtFQUNBZCxjQUFjWTtFQUNkWCxjQUFjVztBQUFBLENBQ2Y7QUFHRCxJQUFNTyxpQkFBa0JQLDRCQUN2QjlCLG1DQUFBb0IsUUFBQUMsY0FBQ1QsY0FBQTtFQUNBRSxxQkFBcUJmO0VBQ3JCZ0IsS0FBS2E7RUFDTFosV0FBV1k7RUFDWFgsU0FBU0EsTUFBWTtBQUNwQixLQUFBLEdBQUFOLG1CQUFBc0IsV0FBVSxDQUFDO0VBQ1o7RUFDQWYsY0FBY1k7RUFDZFgsY0FBY1c7QUFBQSxDQUNmOztBRTFERCxJQUFBUSxxQkFBaUQzQyxRQUFBLGlCQUFBO0FBQ2pELElBQUE0QyxxQkFBb0I1QyxRQUFBLGtCQUFBO0FBRXBCLElBQU02QywyQkFBNEJDLFdBQXlDO0FBQzFFLFFBQU1YLHlCQUEwQlksV0FBNEI7QUFDM0QsS0FBQSxHQUFBSixtQkFBQUssb0NBQW1DRCxLQUFLO0VBQ3pDO0FBRUEsUUFBTUUsbUJBQW1CZixpQkFBaUJDLHNCQUFzQjtBQUNoRSxRQUFNZSxrQkFBaUJSLGVBQWVQLHNCQUFzQjtBQUU1RCxXQUFBZ0IsS0FBQSxHQUFBQyxPQUFzQixDQUFDSCxrQkFBa0JDLGVBQWMsR0FBQUMsS0FBQUMsS0FBQUMsUUFBQUYsTUFBRztBQUExRCxVQUFXRyxVQUFBRixLQUFBRCxFQUFBO0FBQ1ZMLFVBQU1TLE9BQU9ELE9BQU87QUFFcEIsS0FBQSxHQUFBVixtQkFBQVksT0FBTUYsU0FBUztNQUNkRyxPQUFPO01BQ1BDLFNBQVNKLFFBQVFLLGFBQWEsS0FBSztNQUNuQ0MsV0FBVztJQUNaLENBQUM7RUFDRjtBQUVBLFFBQU1DLGlCQUFpQkEsTUFBWTtBQUNsQyxRQUFJQztBQUNKLFFBQUlDO0FBRUosUUFDQ3ZCLFNBQVN3QixjQUFjLFVBQVUsS0FDakN4QixTQUFTd0IsY0FBYyw2QkFBNkIsS0FDcER4QixTQUFTd0IsY0FBYyx3QkFBd0IsR0FDOUM7QUFDREYseUJBQW1CO0FBQ25CQyx1QkFBaUI7SUFDbEIsT0FBTztBQUNORCx5QkFBbUI7QUFDbkJDLHVCQUFpQjtJQUNsQjtBQUVBZCxxQkFBaUJnQixNQUFNQyxTQUFTSjtBQUNoQ1osb0JBQWVlLE1BQU1DLFNBQVNIO0VBQy9CO0FBQ0EsUUFBTUksNkJBQW9EQyxHQUFHQyxLQUFLQyxTQUFTVCxnQkFBZ0IsR0FBRztBQUU5RnRCLElBQUVFLE1BQU0sRUFBRThCLEdBQUcsMEJBQTBCSiwwQkFBMEI7QUFDbEU7O0FKekNBLE1BQUEsR0FBS3BFLG1CQUFBeUUsU0FBUSxFQUFFQyxLQUFLLFNBQVNDLGVBQWU1QixPQUFzQztBQUNqRkQsMkJBQXlCQyxLQUFLO0FBQy9CLENBQUM7IiwKICAibmFtZXMiOiBbImltcG9ydF9leHRfZ2FkZ2V0NiIsICJyZXF1aXJlIiwgIkNMQVNTX05BTUUiLCAiQ0xBU1NfTkFNRV9ET1dOIiwgImNvbmNhdCIsICJDTEFTU19OQU1FX1VQIiwgImltcG9ydF9leHRfZ2FkZ2V0MiIsICJfX3RvRVNNIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgImdldEkxOG5NZXNzYWdlcyIsICJUb0JvdHRvbSIsICJsb2NhbGl6ZSIsICJlbiIsICJUb1RvcCIsICJpMThuTWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAiaW1wb3J0X2V4dF9nYWRnZXQzIiwgIlNjcm9sbEJ1dHRvbiIsICJwcm9wcyIsICJhZGRpdGlvbmFsQ2xhc3NOYW1lIiwgImFsdCIsICJhcmlhTGFiZWwiLCAib25DbGljayIsICJvbk1vdXNlRW50ZXIiLCAib25Nb3VzZUxlYXZlIiwgImRlZmF1bHQiLCAiY3JlYXRlRWxlbWVudCIsICJjbGFzc05hbWUiLCAic3JjIiwgIndpZHRoIiwgImhlaWdodCIsICJkcmFnZ2FibGUiLCAiVE9fQk9UVE9NIiwgIlRPX1RPUCIsICJTY3JvbGxEb3duQnV0dG9uIiwgIm9uTW91c2VFbnRlck1vdXNlTGVhdmUiLCAiXyQkaGVpZ2h0IiwgIl8kJGhlaWdodDIiLCAic2Nyb2xsVG9wIiwgIiQiLCAiZG9jdW1lbnQiLCAid2luZG93IiwgIlNjcm9sbFVwQnV0dG9uIiwgImltcG9ydF9leHRfZ2FkZ2V0NCIsICJpbXBvcnRfZXh0X2dhZGdldDUiLCAiaW5zZXJ0RWxlbWVudGFuZExpc3RlbmVyIiwgIiRib2R5IiwgImV2ZW50IiwgImNoYW5nZU9wYWNpdHlXaGVuTW91c2VFbnRlck9yTGVhdmUiLCAic2Nyb2xsRG93bkJ1dHRvbiIsICJzY3JvbGxVcEJ1dHRvbjIiLCAiX2kiLCAiX2FyciIsICJsZW5ndGgiLCAiZWxlbWVudCIsICJhcHBlbmQiLCAidGlwcHkiLCAiYXJyb3ciLCAiY29udGVudCIsICJnZXRBdHRyaWJ1dGUiLCAicGxhY2VtZW50IiwgInNjcm9sbExpc3RlbmVyIiwgImRvd25CdXR0b25CdXR0b20iLCAidXBCdXR0b25CdXR0b20iLCAicXVlcnlTZWxlY3RvciIsICJzdHlsZSIsICJib3R0b20iLCAic2Nyb2xsTGlzdGVuZXJXaXRoVGhyb3R0bGUiLCAibXciLCAidXRpbCIsICJ0aHJvdHRsZSIsICJvbiIsICJnZXRCb2R5IiwgInRoZW4iLCAic2Nyb2xsVXBCdXR0b24iXQp9Cg==

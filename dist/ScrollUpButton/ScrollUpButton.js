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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1Njcm9sbFVwQnV0dG9uL1Njcm9sbFVwQnV0dG9uLnRzIiwgInNyYy9TY3JvbGxVcEJ1dHRvbi9tb2R1bGVzL2NvbnN0YW50LnRzIiwgInNyYy9TY3JvbGxVcEJ1dHRvbi9jb21wb25lbnRzL3Njcm9sbEJ1dHRvbi50c3giLCAic3JjL1Njcm9sbFVwQnV0dG9uL21vZHVsZXMvaTE4bi50cyIsICJzcmMvU2Nyb2xsVXBCdXR0b24vbW9kdWxlcy9pbnNlcnRFbGVtZW50QW5kTGlzdGVuZXIudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7Z2V0Qm9keX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbmltcG9ydCB7aW5zZXJ0RWxlbWVudGFuZExpc3RlbmVyfSBmcm9tICcuL21vZHVsZXMvaW5zZXJ0RWxlbWVudEFuZExpc3RlbmVyJztcblxudm9pZCBnZXRCb2R5KCkudGhlbihmdW5jdGlvbiBzY3JvbGxVcEJ1dHRvbigkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkIHtcblx0aW5zZXJ0RWxlbWVudGFuZExpc3RlbmVyKCRib2R5KTtcbn0pO1xuIiwgImNvbnN0IENMQVNTX05BTUU6IHN0cmluZyA9ICdnYWRnZXQtc2Nyb2xsX3VwX2J1dHRvbic7XG5jb25zdCBDTEFTU19OQU1FX0RPV046IHN0cmluZyA9IGAke0NMQVNTX05BTUV9LWRvd25gO1xuY29uc3QgQ0xBU1NfTkFNRV9VUDogc3RyaW5nID0gYCR7Q0xBU1NfTkFNRX0tdXBgO1xuXG5leHBvcnQge0NMQVNTX05BTUUsIENMQVNTX05BTUVfRE9XTiwgQ0xBU1NfTkFNRV9VUH07XG4iLCAiaW1wb3J0IHtDTEFTU19OQU1FLCBDTEFTU19OQU1FX0RPV04sIENMQVNTX05BTUVfVVB9IGZyb20gJy4uL21vZHVsZXMvY29uc3RhbnQnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ2V4dC5nYWRnZXQuUmVhY3QnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuLi9tb2R1bGVzL2kxOG4nO1xuaW1wb3J0IHtzY3JvbGxUb3B9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmludGVyZmFjZSBQcm9wcyB7XG5cdGFkZGl0aW9uYWxDbGFzc05hbWU6IHN0cmluZztcblx0YWx0OiBzdHJpbmc7XG5cdGFyaWFMYWJlbDogc3RyaW5nO1xuXHRvbkNsaWNrOiAoZXZlbnQ/OiBNb3VzZUV2ZW50KSA9PiB2b2lkO1xuXHRvbk1vdXNlRW50ZXI6IChldmVudDogTW91c2VFdmVudCkgPT4gdm9pZDtcblx0b25Nb3VzZUxlYXZlOiAoZXZlbnQ6IE1vdXNlRXZlbnQpID0+IHZvaWQ7XG59XG5cbmZ1bmN0aW9uIFNjcm9sbEJ1dHRvbihwcm9wczogUHJvcHMpIHtcblx0Y29uc3Qge2FkZGl0aW9uYWxDbGFzc05hbWUsIGFsdCwgYXJpYUxhYmVsLCBvbkNsaWNrLCBvbk1vdXNlRW50ZXIsIG9uTW91c2VMZWF2ZX0gPSBwcm9wcztcblxuXHRyZXR1cm4gKFxuXHRcdDxpbWdcblx0XHRcdGNsYXNzTmFtZT17W0NMQVNTX05BTUUsIGFkZGl0aW9uYWxDbGFzc05hbWVdfVxuXHRcdFx0c3JjPXtcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nMScgaGVpZ2h0PScxJyUzRSUzQy9zdmclM0VcIn1cblx0XHRcdHdpZHRoPVwiMzJcIlxuXHRcdFx0aGVpZ2h0PVwiMzJcIlxuXHRcdFx0ZHJhZ2dhYmxlPXtmYWxzZX1cblx0XHRcdGFsdD17YWx0fVxuXHRcdFx0YXJpYS1sYWJlbD17YXJpYUxhYmVsfVxuXHRcdFx0b25DbGljaz17b25DbGlja31cblx0XHRcdG9uTW91c2VFbnRlcj17b25Nb3VzZUVudGVyfVxuXHRcdFx0b25Nb3VzZUxlYXZlPXtvbk1vdXNlTGVhdmV9XG5cdFx0Lz5cblx0KTtcbn1cblxuY29uc3QgVE9fQk9UVE9NOiBzdHJpbmcgPSBnZXRNZXNzYWdlKCdUb0JvdHRvbScpO1xuY29uc3QgVE9fVE9QOiBzdHJpbmcgPSBnZXRNZXNzYWdlKCdUb1RvcCcpO1xuXG5jb25zdCBTY3JvbGxEb3duQnV0dG9uID0gKG9uTW91c2VFbnRlck1vdXNlTGVhdmU6IChldmVudDogTW91c2VFdmVudCkgPT4gdm9pZCkgPT4gKFxuXHQ8U2Nyb2xsQnV0dG9uXG5cdFx0YWRkaXRpb25hbENsYXNzTmFtZT17Q0xBU1NfTkFNRV9ET1dOfVxuXHRcdGFsdD17VE9fQk9UVE9NfVxuXHRcdGFyaWFMYWJlbD17VE9fQk9UVE9NfVxuXHRcdG9uQ2xpY2s9eygpOiB2b2lkID0+IHtcblx0XHRcdHNjcm9sbFRvcCgoJChkb2N1bWVudCkuaGVpZ2h0KCkgPz8gMCkgLSAoJCh3aW5kb3cpLmhlaWdodCgpID8/IDApKTtcblx0XHR9fVxuXHRcdG9uTW91c2VFbnRlcj17b25Nb3VzZUVudGVyTW91c2VMZWF2ZX1cblx0XHRvbk1vdXNlTGVhdmU9e29uTW91c2VFbnRlck1vdXNlTGVhdmV9XG5cdC8+XG4pO1xuXG5jb25zdCBTY3JvbGxVcEJ1dHRvbiA9IChvbk1vdXNlRW50ZXJNb3VzZUxlYXZlOiAoZXZlbnQ6IE1vdXNlRXZlbnQpID0+IHZvaWQpID0+IChcblx0PFNjcm9sbEJ1dHRvblxuXHRcdGFkZGl0aW9uYWxDbGFzc05hbWU9e0NMQVNTX05BTUVfVVB9XG5cdFx0YWx0PXtUT19UT1B9XG5cdFx0YXJpYUxhYmVsPXtUT19UT1B9XG5cdFx0b25DbGljaz17KCk6IHZvaWQgPT4ge1xuXHRcdFx0c2Nyb2xsVG9wKDApO1xuXHRcdH19XG5cdFx0b25Nb3VzZUVudGVyPXtvbk1vdXNlRW50ZXJNb3VzZUxlYXZlfVxuXHRcdG9uTW91c2VMZWF2ZT17b25Nb3VzZUVudGVyTW91c2VMZWF2ZX1cblx0Lz5cbik7XG5cbmV4cG9ydCB7U2Nyb2xsRG93bkJ1dHRvbiwgU2Nyb2xsVXBCdXR0b259O1xuIiwgImltcG9ydCB7bG9jYWxpemV9IGZyb20gJ2V4dC5nYWRnZXQuaTE4bic7XG5cbmNvbnN0IGdldEkxOG5NZXNzYWdlcyA9ICgpID0+IHtcblx0cmV0dXJuIHtcblx0XHRUb0JvdHRvbTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdTY3JvbGwgdG8gdGhlIGJvdHRvbScsXG5cdFx0XHQnemgtaGFucyc6ICfmu5rliqjoh7PpobXlupUnLFxuXHRcdFx0J3poLWhhbnQnOiAn5ru+5YuV6Iez6aCB5bqVJyxcblx0XHR9KSxcblx0XHRUb1RvcDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdHbyBiYWNrIHRvIHRoZSB0b3AnLFxuXHRcdFx0J3poLWhhbnMnOiAn5rua5Yqo6Iez6aG16aG2Jyxcblx0XHRcdCd6aC1oYW50JzogJ+a7vuWLleiHs+mggemggicsXG5cdFx0fSksXG5cdH07XG59O1xuXG5jb25zdCBpMThuTWVzc2FnZXMgPSBnZXRJMThuTWVzc2FnZXMoKTtcblxuY29uc3QgZ2V0TWVzc2FnZTogR2V0TWVzc2FnZXM8dHlwZW9mIGkxOG5NZXNzYWdlcz4gPSAoa2V5KSA9PiB7XG5cdHJldHVybiBpMThuTWVzc2FnZXNba2V5XSB8fCBrZXk7XG59O1xuXG5leHBvcnQge2dldE1lc3NhZ2V9O1xuIiwgImltcG9ydCB7U2Nyb2xsRG93bkJ1dHRvbiwgU2Nyb2xsVXBCdXR0b259IGZyb20gJy4uL2NvbXBvbmVudHMvc2Nyb2xsQnV0dG9uJztcbmltcG9ydCB7Y2hhbmdlT3BhY2l0eVdoZW5Nb3VzZUVudGVyT3JMZWF2ZX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbmltcG9ydCB7dGlwcHl9IGZyb20gJ2V4dC5nYWRnZXQuVGlwcHknO1xuXG5jb25zdCBpbnNlcnRFbGVtZW50YW5kTGlzdGVuZXIgPSAoJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KTogdm9pZCA9PiB7XG5cdGNvbnN0IG9uTW91c2VFbnRlck1vdXNlTGVhdmUgPSAoZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkID0+IHtcblx0XHRjaGFuZ2VPcGFjaXR5V2hlbk1vdXNlRW50ZXJPckxlYXZlKGV2ZW50KTtcblx0fTtcblxuXHRjb25zdCBzY3JvbGxEb3duQnV0dG9uID0gU2Nyb2xsRG93bkJ1dHRvbihvbk1vdXNlRW50ZXJNb3VzZUxlYXZlKTtcblx0Y29uc3Qgc2Nyb2xsVXBCdXR0b24gPSBTY3JvbGxVcEJ1dHRvbihvbk1vdXNlRW50ZXJNb3VzZUxlYXZlKTtcblxuXHRmb3IgKGNvbnN0IGVsZW1lbnQgb2YgW3Njcm9sbERvd25CdXR0b24sIHNjcm9sbFVwQnV0dG9uXSkge1xuXHRcdCRib2R5LmFwcGVuZChlbGVtZW50KTtcblxuXHRcdHRpcHB5KGVsZW1lbnQsIHtcblx0XHRcdGFycm93OiB0cnVlLFxuXHRcdFx0Y29udGVudDogZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2FsdCcpIGFzIHN0cmluZyxcblx0XHRcdHBsYWNlbWVudDogJ2xlZnQnLFxuXHRcdH0pO1xuXHR9XG5cblx0Y29uc3Qgc2Nyb2xsTGlzdGVuZXIgPSAoKTogdm9pZCA9PiB7XG5cdFx0bGV0IGRvd25CdXR0b25CdXR0b206IHN0cmluZztcblx0XHRsZXQgdXBCdXR0b25CdXR0b206IHN0cmluZztcblxuXHRcdGlmIChcblx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm92ZWl0JykgfHxcblx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYWRnZXQtY2F0X2FfbG90LWNvbnRhaW5lcicpIHx8XG5cdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZ2FkZ2V0LXdvcmRfY291bnQtdGlwJylcblx0XHQpIHtcblx0XHRcdGRvd25CdXR0b25CdXR0b20gPSAnODVweCc7XG5cdFx0XHR1cEJ1dHRvbkJ1dHRvbSA9ICcxMjdweCc7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGRvd25CdXR0b25CdXR0b20gPSAnNDVweCc7XG5cdFx0XHR1cEJ1dHRvbkJ1dHRvbSA9ICc4NXB4Jztcblx0XHR9XG5cblx0XHRzY3JvbGxEb3duQnV0dG9uLnN0eWxlLmJvdHRvbSA9IGRvd25CdXR0b25CdXR0b207XG5cdFx0c2Nyb2xsVXBCdXR0b24uc3R5bGUuYm90dG9tID0gdXBCdXR0b25CdXR0b207XG5cdH07XG5cdGNvbnN0IHNjcm9sbExpc3RlbmVyV2l0aFRocm90dGxlOiB0eXBlb2Ygc2Nyb2xsTGlzdGVuZXIgPSBtdy51dGlsLnRocm90dGxlKHNjcm9sbExpc3RlbmVyLCAyMDApO1xuXG5cdCQod2luZG93KS5vbignc2Nyb2xsIHNlbGVjdGlvbmNoYW5nZScsIHNjcm9sbExpc3RlbmVyV2l0aFRocm90dGxlKTtcbn07XG5cbmV4cG9ydCB7aW5zZXJ0RWxlbWVudGFuZExpc3RlbmVyfTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLHFCQUFzQkMsUUFBQSxpQkFBQTs7QUNBdEIsSUFBTUMsYUFBcUI7QUFDM0IsSUFBTUMsa0JBQUEsR0FBQUMsT0FBNkJGLFlBQVUsT0FBQTtBQUM3QyxJQUFNRyxnQkFBQSxHQUFBRCxPQUEyQkYsWUFBVSxLQUFBOztBQ0QzQyxJQUFBSSxxQkFBa0JDLFFBQUFOLFFBQUEsa0JBQUEsR0FBQSxDQUFBOztBQ0RsQixJQUFBTyxvQkFBdUJQLFFBQUEsaUJBQUE7QUFFdkIsSUFBTVEsa0JBQWtCQSxNQUFNO0FBQzdCLFNBQU87SUFDTkMsV0FBQSxHQUFVRixrQkFBQUcsVUFBUztNQUNsQkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNEQyxRQUFBLEdBQU9MLGtCQUFBRyxVQUFTO01BQ2ZDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7RUFDRjtBQUNEO0FBRUEsSUFBTUUsZUFBZUwsZ0JBQWdCO0FBRXJDLElBQU1NLGFBQWdEQyxTQUFRO0FBQzdELFNBQU9GLGFBQWFFLEdBQUcsS0FBS0E7QUFDN0I7O0FEbEJBLElBQUFDLHFCQUF3QmhCLFFBQUEsaUJBQUE7QUFXeEIsU0FBU2lCLGFBQWFDLE9BQWM7QUFDbkMsUUFBTTtJQUFDQztJQUFxQkM7SUFBS0M7SUFBV0M7SUFBU0M7SUFBY0M7RUFBWSxJQUFJTjtBQUVuRixTQUNDYixtQ0FBQW9CLFFBQUFDLGNBQUMsT0FBQTtJQUNBQyxXQUFXLENBQUMxQixZQUFZa0IsbUJBQW1CO0lBQzNDUyxLQUFLO0lBQ0xDLE9BQU07SUFDTkMsUUFBTztJQUNQQyxXQUFXO0lBQ1hYO0lBQ0EsY0FBWUM7SUFDWkM7SUFDQUM7SUFDQUM7RUFBQSxDQUNEO0FBRUY7QUFFQSxJQUFNUSxZQUFvQmxCLFdBQVcsVUFBVTtBQUMvQyxJQUFNbUIsU0FBaUJuQixXQUFXLE9BQU87QUFFekMsSUFBTW9CLG1CQUFvQkMsNEJBQ3pCOUIsbUNBQUFvQixRQUFBQyxjQUFDVCxjQUFBO0VBQ0FFLHFCQUFxQmpCO0VBQ3JCa0IsS0FBS1k7RUFDTFgsV0FBV1c7RUFDWFYsU0FBU0EsTUFBWTtBQUFBLFFBQUFjLFdBQUFDO0FBQ3BCLEtBQUEsR0FBQXJCLG1CQUFBc0IsYUFBQUYsWUFBV0csRUFBRUMsUUFBUSxFQUFFVixPQUFPLE9BQUEsUUFBQU0sY0FBQSxTQUFBQSxZQUFLLE9BQUFDLGFBQU1FLEVBQUVFLE1BQU0sRUFBRVgsT0FBTyxPQUFBLFFBQUFPLGVBQUEsU0FBQUEsYUFBSyxFQUFFO0VBQ2xFO0VBQ0FkLGNBQWNZO0VBQ2RYLGNBQWNXO0FBQUEsQ0FDZjtBQUdELElBQU1PLGlCQUFrQlAsNEJBQ3ZCOUIsbUNBQUFvQixRQUFBQyxjQUFDVCxjQUFBO0VBQ0FFLHFCQUFxQmY7RUFDckJnQixLQUFLYTtFQUNMWixXQUFXWTtFQUNYWCxTQUFTQSxNQUFZO0FBQ3BCLEtBQUEsR0FBQU4sbUJBQUFzQixXQUFVLENBQUM7RUFDWjtFQUNBZixjQUFjWTtFQUNkWCxjQUFjVztBQUFBLENBQ2Y7O0FFMURELElBQUFRLHFCQUFpRDNDLFFBQUEsaUJBQUE7QUFDakQsSUFBQTRDLHFCQUFvQjVDLFFBQUEsa0JBQUE7QUFFcEIsSUFBTTZDLDJCQUE0QkMsV0FBeUM7QUFDMUUsUUFBTVgseUJBQTBCWSxXQUE0QjtBQUMzRCxLQUFBLEdBQUFKLG1CQUFBSyxvQ0FBbUNELEtBQUs7RUFDekM7QUFFQSxRQUFNRSxtQkFBbUJmLGlCQUFpQkMsc0JBQXNCO0FBQ2hFLFFBQU1lLGtCQUFpQlIsZUFBZVAsc0JBQXNCO0FBRTVELFdBQUFnQixLQUFBLEdBQUFDLE9BQXNCLENBQUNILGtCQUFrQkMsZUFBYyxHQUFBQyxLQUFBQyxLQUFBQyxRQUFBRixNQUFHO0FBQTFELFVBQVdHLFVBQUFGLEtBQUFELEVBQUE7QUFDVkwsVUFBTVMsT0FBT0QsT0FBTztBQUVwQixLQUFBLEdBQUFWLG1CQUFBWSxPQUFNRixTQUFTO01BQ2RHLE9BQU87TUFDUEMsU0FBU0osUUFBUUssYUFBYSxLQUFLO01BQ25DQyxXQUFXO0lBQ1osQ0FBQztFQUNGO0FBRUEsUUFBTUMsaUJBQWlCQSxNQUFZO0FBQ2xDLFFBQUlDO0FBQ0osUUFBSUM7QUFFSixRQUNDdkIsU0FBU3dCLGNBQWMsVUFBVSxLQUNqQ3hCLFNBQVN3QixjQUFjLDZCQUE2QixLQUNwRHhCLFNBQVN3QixjQUFjLHdCQUF3QixHQUM5QztBQUNERix5QkFBbUI7QUFDbkJDLHVCQUFpQjtJQUNsQixPQUFPO0FBQ05ELHlCQUFtQjtBQUNuQkMsdUJBQWlCO0lBQ2xCO0FBRUFkLHFCQUFpQmdCLE1BQU1DLFNBQVNKO0FBQ2hDWixvQkFBZWUsTUFBTUMsU0FBU0g7RUFDL0I7QUFDQSxRQUFNSSw2QkFBb0RDLEdBQUdDLEtBQUtDLFNBQVNULGdCQUFnQixHQUFHO0FBRTlGdEIsSUFBRUUsTUFBTSxFQUFFOEIsR0FBRywwQkFBMEJKLDBCQUEwQjtBQUNsRTs7QUp6Q0EsTUFBQSxHQUFLcEUsbUJBQUF5RSxTQUFRLEVBQUVDLEtBQUssU0FBU0MsZUFBZTVCLE9BQXNDO0FBQ2pGRCwyQkFBeUJDLEtBQUs7QUFDL0IsQ0FBQzsiLAogICJuYW1lcyI6IFsiaW1wb3J0X2V4dF9nYWRnZXQ2IiwgInJlcXVpcmUiLCAiQ0xBU1NfTkFNRSIsICJDTEFTU19OQU1FX0RPV04iLCAiY29uY2F0IiwgIkNMQVNTX05BTUVfVVAiLCAiaW1wb3J0X2V4dF9nYWRnZXQyIiwgIl9fdG9FU00iLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAiZ2V0STE4bk1lc3NhZ2VzIiwgIlRvQm90dG9tIiwgImxvY2FsaXplIiwgImVuIiwgIlRvVG9wIiwgImkxOG5NZXNzYWdlcyIsICJnZXRNZXNzYWdlIiwgImtleSIsICJpbXBvcnRfZXh0X2dhZGdldDMiLCAiU2Nyb2xsQnV0dG9uIiwgInByb3BzIiwgImFkZGl0aW9uYWxDbGFzc05hbWUiLCAiYWx0IiwgImFyaWFMYWJlbCIsICJvbkNsaWNrIiwgIm9uTW91c2VFbnRlciIsICJvbk1vdXNlTGVhdmUiLCAiZGVmYXVsdCIsICJjcmVhdGVFbGVtZW50IiwgImNsYXNzTmFtZSIsICJzcmMiLCAid2lkdGgiLCAiaGVpZ2h0IiwgImRyYWdnYWJsZSIsICJUT19CT1RUT00iLCAiVE9fVE9QIiwgIlNjcm9sbERvd25CdXR0b24iLCAib25Nb3VzZUVudGVyTW91c2VMZWF2ZSIsICJfJCRoZWlnaHQiLCAiXyQkaGVpZ2h0MiIsICJzY3JvbGxUb3AiLCAiJCIsICJkb2N1bWVudCIsICJ3aW5kb3ciLCAiU2Nyb2xsVXBCdXR0b24iLCAiaW1wb3J0X2V4dF9nYWRnZXQ0IiwgImltcG9ydF9leHRfZ2FkZ2V0NSIsICJpbnNlcnRFbGVtZW50YW5kTGlzdGVuZXIiLCAiJGJvZHkiLCAiZXZlbnQiLCAiY2hhbmdlT3BhY2l0eVdoZW5Nb3VzZUVudGVyT3JMZWF2ZSIsICJzY3JvbGxEb3duQnV0dG9uIiwgInNjcm9sbFVwQnV0dG9uMiIsICJfaSIsICJfYXJyIiwgImxlbmd0aCIsICJlbGVtZW50IiwgImFwcGVuZCIsICJ0aXBweSIsICJhcnJvdyIsICJjb250ZW50IiwgImdldEF0dHJpYnV0ZSIsICJwbGFjZW1lbnQiLCAic2Nyb2xsTGlzdGVuZXIiLCAiZG93bkJ1dHRvbkJ1dHRvbSIsICJ1cEJ1dHRvbkJ1dHRvbSIsICJxdWVyeVNlbGVjdG9yIiwgInN0eWxlIiwgImJvdHRvbSIsICJzY3JvbGxMaXN0ZW5lcldpdGhUaHJvdHRsZSIsICJtdyIsICJ1dGlsIiwgInRocm90dGxlIiwgIm9uIiwgImdldEJvZHkiLCAidGhlbiIsICJzY3JvbGxVcEJ1dHRvbiJdCn0K

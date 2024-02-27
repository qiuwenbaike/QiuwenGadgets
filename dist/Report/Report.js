/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/Report}
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

// dist/Report/Report.js
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
//! src/Report/modules/constant.ts
var CLASS_NAME = "gadget-report";
var CLASS_NAME_BUTTON = "".concat(CLASS_NAME, "-button");
var {
  wgCurRevisionId,
  wgNamespaceNumber,
  wgPageName,
  wgRevisionId
} = mw.config.get();
var URL = mw.util.getUrl("Special:Contact/Report", {
  report_title: wgPageName,
  report_revision: (wgRevisionId || wgCurRevisionId).toString()
});
var WG_NAMESPACE_NUMBER = wgNamespaceNumber;
//! src/Report/components/ReportButton.tsx
var import_ext_gadget2 = __toESM(require("ext.gadget.React"), 1);
//! src/Report/modules/i18n.ts
var import_ext_gadget = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    ":": (0, import_ext_gadget.localize)({
      en: ": ",
      ja: "：",
      zh: "："
    }),
    "(": (0, import_ext_gadget.localize)({
      en: "(",
      ja: "（",
      zh: "（"
    }),
    ")": (0, import_ext_gadget.localize)({
      en: ")",
      ja: "）",
      zh: "）"
    }),
    Report: (0, import_ext_gadget.localize)({
      en: "Report this page",
      ja: "このページを報告",
      "zh-hans": "报告不良信息",
      "zh-hant": "報告不良資訊"
    }),
    Revision: (0, import_ext_gadget.localize)({
      en: "Revision",
      ja: "版",
      zh: "版本"
    })
  };
};
var i18nMessages = getI18nMessages();
var getMessage = (key) => {
  return i18nMessages[key] || key;
};
//! src/Report/components/ReportButton.tsx
var LINK_TITLE = getMessage("Report");
var ReportButton = () => /* @__PURE__ */ import_ext_gadget2.default.createElement("img", {
  className: [CLASS_NAME_BUTTON, "noprint"],
  src: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1' height='1'%3E%3C/svg%3E",
  width: "32",
  height: "32",
  draggable: false,
  alt: LINK_TITLE,
  "aria-label": LINK_TITLE,
  onClick: () => {
    window.open(URL, "_blank", "noopener,noreferrer");
  }
});
var ReportButton_default = ReportButton;
//! src/Report/modules/addButton.ts
var import_ext_gadget3 = require("ext.gadget.Util");
var import_ext_gadget4 = require("ext.gadget.Tippy");
var addButton = ($body) => {
  if (WG_NAMESPACE_NUMBER < 0) {
    return;
  }
  const onMouseEnterMouseLeave = (event) => {
    (0, import_ext_gadget3.changeOpacityWhenMouseEnterOrLeave)(event);
  };
  const reportButton = ReportButton_default();
  for (var _i = 0, _arr = ["mouseenter", "mouseleave"]; _i < _arr.length; _i++) {
    const event = _arr[_i];
    reportButton.addEventListener(event, onMouseEnterMouseLeave);
  }
  (0, import_ext_gadget4.tippy)(reportButton, {
    arrow: true,
    content: reportButton.getAttribute("alt"),
    placement: "left"
  });
  $body.append(reportButton);
  const scrollListener = () => {
    let buttonBottom;
    if (document.querySelector("#proveit") || document.querySelector(".gadget-cat_a_lot-container") || document.querySelector("#gadget-word_count-tip")) {
      buttonBottom = "253px";
    } else {
      buttonBottom = "211px";
    }
    reportButton.style.bottom = buttonBottom;
  };
  const scrollListenerWithThrottle = mw.util.throttle(scrollListener, 200);
  $(window).on("scroll selectionchange", scrollListenerWithThrottle);
};
//! src/Report/modules/addPortletLink.ts
var addPortletLink = () => {
  if (WG_NAMESPACE_NUMBER < 0) {
    return;
  }
  const linkTilte = getMessage("Report");
  mw.util.addPortletLink("p-tb", URL, linkTilte, "t-report", linkTilte);
};
//! src/Report/modules/fillSpecialPage.ts
var fillSpecialPage = ($body) => {
  const $wpSubjectElement = $body.find('input[name="wpSubject"]');
  if (!$wpSubjectElement.length) {
    return;
  }
  const isBodyHasClass = $body.hasClass("page-Special_联系_Report") || $body.hasClass("page-Special_联系_report");
  if (!isBodyHasClass) {
    return;
  }
  const $wpTitleElement = $body.find('input[name="wpTitle"]');
  const linkTilte = getMessage("Report");
  const reportRevision = mw.util.getParamValue("report_revision") || "0";
  let reportTitle = mw.util.getParamValue("report_title") || "";
  if (reportRevision !== "0") {
    reportTitle += getMessage("(") + getMessage("Revision") + reportRevision + getMessage(")");
  }
  if (reportTitle) {
    $wpSubjectElement.val(linkTilte + getMessage(":") + reportTitle);
    $wpTitleElement.val(reportTitle);
  } else {
    $wpSubjectElement.val(linkTilte);
  }
};
//! src/Report/Report.ts
var import_ext_gadget5 = require("ext.gadget.Util");
void (0, import_ext_gadget5.getBody)().then(function report($body) {
  addButton($body);
  addPortletLink();
  fillSpecialPage($body);
});

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1JlcG9ydC9tb2R1bGVzL2NvbnN0YW50LnRzIiwgInNyYy9SZXBvcnQvY29tcG9uZW50cy9SZXBvcnRCdXR0b24udHN4IiwgInNyYy9SZXBvcnQvbW9kdWxlcy9pMThuLnRzIiwgInNyYy9SZXBvcnQvbW9kdWxlcy9hZGRCdXR0b24udHMiLCAic3JjL1JlcG9ydC9tb2R1bGVzL2FkZFBvcnRsZXRMaW5rLnRzIiwgInNyYy9SZXBvcnQvbW9kdWxlcy9maWxsU3BlY2lhbFBhZ2UudHMiLCAic3JjL1JlcG9ydC9SZXBvcnQudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIi8qIGVzbGludC1kaXNhYmxlIGNhbWVsY2FzZSAqL1xuY29uc3QgQ0xBU1NfTkFNRTogc3RyaW5nID0gJ2dhZGdldC1yZXBvcnQnO1xuY29uc3QgQ0xBU1NfTkFNRV9CVVRUT046IHN0cmluZyA9IGAke0NMQVNTX05BTUV9LWJ1dHRvbmA7XG5cbmNvbnN0IHt3Z0N1clJldmlzaW9uSWQsIHdnTmFtZXNwYWNlTnVtYmVyLCB3Z1BhZ2VOYW1lLCB3Z1JldmlzaW9uSWR9ID0gbXcuY29uZmlnLmdldCgpO1xuXG5jb25zdCBVUkw6IHN0cmluZyA9IG13LnV0aWwuZ2V0VXJsKCdTcGVjaWFsOkNvbnRhY3QvUmVwb3J0Jywge1xuXHRyZXBvcnRfdGl0bGU6IHdnUGFnZU5hbWUsXG5cdHJlcG9ydF9yZXZpc2lvbjogKHdnUmV2aXNpb25JZCB8fCB3Z0N1clJldmlzaW9uSWQpLnRvU3RyaW5nKCksXG59KTtcblxuY29uc3QgV0dfTkFNRVNQQUNFX05VTUJFUjogbnVtYmVyID0gd2dOYW1lc3BhY2VOdW1iZXI7XG5cbmV4cG9ydCB7Q0xBU1NfTkFNRV9CVVRUT04sIFVSTCwgV0dfTkFNRVNQQUNFX05VTUJFUn07XG4iLCAiaW1wb3J0IHtDTEFTU19OQU1FX0JVVFRPTiwgVVJMfSBmcm9tICcuLi9tb2R1bGVzL2NvbnN0YW50JztcbmltcG9ydCBSZWFjdCBmcm9tICdleHQuZ2FkZ2V0LlJlYWN0JztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi4vbW9kdWxlcy9pMThuJztcblxuY29uc3QgTElOS19USVRMRTogc3RyaW5nID0gZ2V0TWVzc2FnZSgnUmVwb3J0Jyk7XG5cbmNvbnN0IFJlcG9ydEJ1dHRvbiA9ICgpID0+IChcblx0PGltZ1xuXHRcdGNsYXNzTmFtZT17W0NMQVNTX05BTUVfQlVUVE9OLCAnbm9wcmludCddfVxuXHRcdHNyYz1cImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nMScgaGVpZ2h0PScxJyUzRSUzQy9zdmclM0VcIlxuXHRcdHdpZHRoPVwiMzJcIlxuXHRcdGhlaWdodD1cIjMyXCJcblx0XHRkcmFnZ2FibGU9e2ZhbHNlfVxuXHRcdGFsdD17TElOS19USVRMRX1cblx0XHRhcmlhLWxhYmVsPXtMSU5LX1RJVExFfVxuXHRcdG9uQ2xpY2s9eygpOiB2b2lkID0+IHtcblx0XHRcdHdpbmRvdy5vcGVuKFVSTCwgJ19ibGFuaycsICdub29wZW5lcixub3JlZmVycmVyJyk7XG5cdFx0fX1cblx0Lz5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IFJlcG9ydEJ1dHRvbjtcbiIsICJpbXBvcnQge2xvY2FsaXplfSBmcm9tICdleHQuZ2FkZ2V0LmkxOG4nO1xuXG5jb25zdCBnZXRJMThuTWVzc2FnZXMgPSAoKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0JzonOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJzogJyxcblx0XHRcdGphOiAn77yaJyxcblx0XHRcdHpoOiAn77yaJyxcblx0XHR9KSxcblx0XHQnKCc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnKCcsXG5cdFx0XHRqYTogJ++8iCcsXG5cdFx0XHR6aDogJ++8iCcsXG5cdFx0fSksXG5cdFx0JyknOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJyknLFxuXHRcdFx0amE6ICfvvIknLFxuXHRcdFx0emg6ICfvvIknLFxuXHRcdH0pLFxuXHRcdFJlcG9ydDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdSZXBvcnQgdGhpcyBwYWdlJyxcblx0XHRcdGphOiAn44GT44Gu44Oa44O844K444KS5aCx5ZGKJyxcblx0XHRcdCd6aC1oYW5zJzogJ+aKpeWRiuS4jeiJr+S/oeaBrycsXG5cdFx0XHQnemgtaGFudCc6ICfloLHlkYrkuI3oia/os4foqIonLFxuXHRcdH0pLFxuXHRcdFJldmlzaW9uOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1JldmlzaW9uJyxcblx0XHRcdGphOiAn54mIJyxcblx0XHRcdHpoOiAn54mI5pysJyxcblx0XHR9KSxcblx0fTtcbn07XG5cbmNvbnN0IGkxOG5NZXNzYWdlcyA9IGdldEkxOG5NZXNzYWdlcygpO1xuXG5jb25zdCBnZXRNZXNzYWdlOiBHZXRNZXNzYWdlczx0eXBlb2YgaTE4bk1lc3NhZ2VzPiA9IChrZXkpID0+IHtcblx0cmV0dXJuIGkxOG5NZXNzYWdlc1trZXldIHx8IGtleTtcbn07XG5cbmV4cG9ydCB7Z2V0TWVzc2FnZX07XG4iLCAiaW1wb3J0IFJlcG9ydEJ1dHRvbiBmcm9tICcuLi9jb21wb25lbnRzL1JlcG9ydEJ1dHRvbic7XG5pbXBvcnQge1dHX05BTUVTUEFDRV9OVU1CRVJ9IGZyb20gJy4vY29uc3RhbnQnO1xuaW1wb3J0IHtjaGFuZ2VPcGFjaXR5V2hlbk1vdXNlRW50ZXJPckxlYXZlfSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuaW1wb3J0IHt0aXBweX0gZnJvbSAnZXh0LmdhZGdldC5UaXBweSc7XG5cbmNvbnN0IGFkZEJ1dHRvbiA9ICgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkID0+IHtcblx0aWYgKFdHX05BTUVTUEFDRV9OVU1CRVIgPCAwKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3Qgb25Nb3VzZUVudGVyTW91c2VMZWF2ZSA9IChldmVudDogTW91c2VFdmVudCk6IHZvaWQgPT4ge1xuXHRcdGNoYW5nZU9wYWNpdHlXaGVuTW91c2VFbnRlck9yTGVhdmUoZXZlbnQpO1xuXHR9O1xuXG5cdGNvbnN0IHJlcG9ydEJ1dHRvbiA9IFJlcG9ydEJ1dHRvbigpIGFzIEhUTUxFbGVtZW50O1xuXG5cdGZvciAoY29uc3QgZXZlbnQgb2YgWydtb3VzZWVudGVyJywgJ21vdXNlbGVhdmUnXSBhcyBjb25zdCkge1xuXHRcdHJlcG9ydEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBvbk1vdXNlRW50ZXJNb3VzZUxlYXZlKTtcblx0fVxuXG5cdHRpcHB5KHJlcG9ydEJ1dHRvbiwge1xuXHRcdGFycm93OiB0cnVlLFxuXHRcdGNvbnRlbnQ6IHJlcG9ydEJ1dHRvbi5nZXRBdHRyaWJ1dGUoJ2FsdCcpIGFzIHN0cmluZyxcblx0XHRwbGFjZW1lbnQ6ICdsZWZ0Jyxcblx0fSk7XG5cblx0JGJvZHkuYXBwZW5kKHJlcG9ydEJ1dHRvbik7XG5cblx0Y29uc3Qgc2Nyb2xsTGlzdGVuZXIgPSAoKTogdm9pZCA9PiB7XG5cdFx0bGV0IGJ1dHRvbkJvdHRvbTogc3RyaW5nO1xuXG5cdFx0aWYgKFxuXHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb3ZlaXQnKSB8fFxuXHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhZGdldC1jYXRfYV9sb3QtY29udGFpbmVyJykgfHxcblx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNnYWRnZXQtd29yZF9jb3VudC10aXAnKVxuXHRcdCkge1xuXHRcdFx0YnV0dG9uQm90dG9tID0gJzI1M3B4Jztcblx0XHR9IGVsc2Uge1xuXHRcdFx0YnV0dG9uQm90dG9tID0gJzIxMXB4Jztcblx0XHR9XG5cblx0XHRyZXBvcnRCdXR0b24uc3R5bGUuYm90dG9tID0gYnV0dG9uQm90dG9tO1xuXHR9O1xuXHRjb25zdCBzY3JvbGxMaXN0ZW5lcldpdGhUaHJvdHRsZTogdHlwZW9mIHNjcm9sbExpc3RlbmVyID0gbXcudXRpbC50aHJvdHRsZShzY3JvbGxMaXN0ZW5lciwgMjAwKTtcblxuXHQkKHdpbmRvdykub24oJ3Njcm9sbCBzZWxlY3Rpb25jaGFuZ2UnLCBzY3JvbGxMaXN0ZW5lcldpdGhUaHJvdHRsZSk7XG59O1xuXG5leHBvcnQge2FkZEJ1dHRvbn07XG4iLCAiaW1wb3J0IHtVUkwsIFdHX05BTUVTUEFDRV9OVU1CRVJ9IGZyb20gJy4vY29uc3RhbnQnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL2kxOG4nO1xuXG5jb25zdCBhZGRQb3J0bGV0TGluayA9ICgpOiB2b2lkID0+IHtcblx0aWYgKFdHX05BTUVTUEFDRV9OVU1CRVIgPCAwKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgbGlua1RpbHRlOiBzdHJpbmcgPSBnZXRNZXNzYWdlKCdSZXBvcnQnKTtcblx0bXcudXRpbC5hZGRQb3J0bGV0TGluaygncC10YicsIFVSTCwgbGlua1RpbHRlLCAndC1yZXBvcnQnLCBsaW5rVGlsdGUpO1xufTtcblxuZXhwb3J0IHthZGRQb3J0bGV0TGlua307XG4iLCAiaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL2kxOG4nO1xuXG5jb25zdCBmaWxsU3BlY2lhbFBhZ2UgPSAoJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KTogdm9pZCA9PiB7XG5cdGNvbnN0ICR3cFN1YmplY3RFbGVtZW50OiBKUXVlcnk8SFRNTElucHV0RWxlbWVudD4gPSAkYm9keS5maW5kPEhUTUxJbnB1dEVsZW1lbnQ+KCdpbnB1dFtuYW1lPVwid3BTdWJqZWN0XCJdJyk7XG5cdGlmICghJHdwU3ViamVjdEVsZW1lbnQubGVuZ3RoKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgaXNCb2R5SGFzQ2xhc3M6IGJvb2xlYW4gPVxuXHRcdCRib2R5Lmhhc0NsYXNzKCdwYWdlLVNwZWNpYWxf6IGU57O7X1JlcG9ydCcpIHx8ICRib2R5Lmhhc0NsYXNzKCdwYWdlLVNwZWNpYWxf6IGU57O7X3JlcG9ydCcpO1xuXHRpZiAoIWlzQm9keUhhc0NsYXNzKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgJHdwVGl0bGVFbGVtZW50OiBKUXVlcnk8SFRNTElucHV0RWxlbWVudD4gPSAkYm9keS5maW5kPEhUTUxJbnB1dEVsZW1lbnQ+KCdpbnB1dFtuYW1lPVwid3BUaXRsZVwiXScpO1xuXG5cdGNvbnN0IGxpbmtUaWx0ZTogc3RyaW5nID0gZ2V0TWVzc2FnZSgnUmVwb3J0Jyk7XG5cdGNvbnN0IHJlcG9ydFJldmlzaW9uOiBzdHJpbmcgPSBtdy51dGlsLmdldFBhcmFtVmFsdWUoJ3JlcG9ydF9yZXZpc2lvbicpIHx8ICcwJztcblx0bGV0IHJlcG9ydFRpdGxlOiBzdHJpbmcgPSBtdy51dGlsLmdldFBhcmFtVmFsdWUoJ3JlcG9ydF90aXRsZScpIHx8ICcnO1xuXHRpZiAocmVwb3J0UmV2aXNpb24gIT09ICcwJykge1xuXHRcdHJlcG9ydFRpdGxlICs9IGdldE1lc3NhZ2UoJygnKSArIGdldE1lc3NhZ2UoJ1JldmlzaW9uJykgKyByZXBvcnRSZXZpc2lvbiArIGdldE1lc3NhZ2UoJyknKTtcblx0fVxuXG5cdGlmIChyZXBvcnRUaXRsZSkge1xuXHRcdCR3cFN1YmplY3RFbGVtZW50LnZhbChsaW5rVGlsdGUgKyBnZXRNZXNzYWdlKCc6JykgKyByZXBvcnRUaXRsZSk7XG5cdFx0JHdwVGl0bGVFbGVtZW50LnZhbChyZXBvcnRUaXRsZSk7XG5cdH0gZWxzZSB7XG5cdFx0JHdwU3ViamVjdEVsZW1lbnQudmFsKGxpbmtUaWx0ZSk7XG5cdH1cbn07XG5cbmV4cG9ydCB7ZmlsbFNwZWNpYWxQYWdlfTtcbiIsICJpbXBvcnQge2FkZEJ1dHRvbn0gZnJvbSAnLi9tb2R1bGVzL2FkZEJ1dHRvbic7XG5pbXBvcnQge2FkZFBvcnRsZXRMaW5rfSBmcm9tICcuL21vZHVsZXMvYWRkUG9ydGxldExpbmsnO1xuaW1wb3J0IHtmaWxsU3BlY2lhbFBhZ2V9IGZyb20gJy4vbW9kdWxlcy9maWxsU3BlY2lhbFBhZ2UnO1xuaW1wb3J0IHtnZXRCb2R5fSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG52b2lkIGdldEJvZHkoKS50aGVuKGZ1bmN0aW9uIHJlcG9ydCgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkIHtcblx0YWRkQnV0dG9uKCRib2R5KTtcblx0YWRkUG9ydGxldExpbmsoKTtcblx0ZmlsbFNwZWNpYWxQYWdlKCRib2R5KTtcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxJQUFNQSxhQUFxQjtBQUMzQixJQUFNQyxvQkFBQSxHQUFBQyxPQUErQkYsWUFBVSxTQUFBO0FBRS9DLElBQU07RUFBQ0c7RUFBaUJDO0VBQW1CQztFQUFZQztBQUFZLElBQUlDLEdBQUdDLE9BQU9DLElBQUk7QUFFckYsSUFBTUMsTUFBY0gsR0FBR0ksS0FBS0MsT0FBTywwQkFBMEI7RUFDNURDLGNBQWNSO0VBQ2RTLGtCQUFrQlIsZ0JBQWdCSCxpQkFBaUJZLFNBQVM7QUFDN0QsQ0FBQztBQUVELElBQU1DLHNCQUE4Qlo7O0FDVnBDLElBQUFhLHFCQUFrQkMsUUFBQUMsUUFBQSxrQkFBQSxHQUFBLENBQUE7O0FDRGxCLElBQUFDLG9CQUF1QkQsUUFBQSxpQkFBQTtBQUV2QixJQUFNRSxrQkFBa0JBLE1BQU07QUFDN0IsU0FBTztJQUNOLE1BQUEsR0FBS0Qsa0JBQUFFLFVBQVM7TUFDYkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7SUFDTCxDQUFDO0lBQ0QsTUFBQSxHQUFLTCxrQkFBQUUsVUFBUztNQUNiQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtJQUNMLENBQUM7SUFDRCxNQUFBLEdBQUtMLGtCQUFBRSxVQUFTO01BQ2JDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO0lBQ0wsQ0FBQztJQUNEQyxTQUFBLEdBQVFOLGtCQUFBRSxVQUFTO01BQ2hCQyxJQUFJO01BQ0pDLElBQUk7TUFDSixXQUFX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dEQsV0FBVyxHQUFHLElBQUlBLFdBQVcsVUFBVSxJQUFJb0QsaUJBQWlCcEQsV0FBVyxHQUFHO0VBQzFGO0FBRUEsTUFBSXNELGFBQWE7QUFDaEJQLHNCQUFrQlEsSUFBSVYsWUFBWTdDLFdBQVcsR0FBRyxJQUFJc0QsV0FBVztBQUMvREgsb0JBQWdCSSxJQUFJRCxXQUFXO0VBQ2hDLE9BQU87QUFDTlAsc0JBQWtCUSxJQUFJVixTQUFTO0VBQ2hDO0FBQ0Q7O0FDMUJBLElBQUFXLHFCQUFzQmxFLFFBQUEsaUJBQUE7QUFFdEIsTUFBQSxHQUFLa0UsbUJBQUFDLFNBQVEsRUFBRUMsS0FBSyxTQUFTQyxPQUFPeEMsT0FBc0M7QUFDekVELFlBQVVDLEtBQUs7QUFDZnlCLGlCQUFlO0FBQ2ZFLGtCQUFnQjNCLEtBQUs7QUFDdEIsQ0FBQzsiLAogICJuYW1lcyI6IFsiQ0xBU1NfTkFNRSIsICJDTEFTU19OQU1FX0JVVFRPTiIsICJjb25jYXQiLCAid2dDdXJSZXZpc2lvbklkIiwgIndnTmFtZXNwYWNlTnVtYmVyIiwgIndnUGFnZU5hbWUiLCAid2dSZXZpc2lvbklkIiwgIm13IiwgImNvbmZpZyIsICJnZXQiLCAiVVJMIiwgInV0aWwiLCAiZ2V0VXJsIiwgInJlcG9ydF90aXRsZSIsICJyZXBvcnRfcmV2aXNpb24iLCAidG9TdHJpbmciLCAiV0dfTkFNRVNQQUNFX05VTUJFUiIsICJpbXBvcnRfZXh0X2dhZGdldDIiLCAiX190b0VTTSIsICJyZXF1aXJlIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgImdldEkxOG5NZXNzYWdlcyIsICJsb2NhbGl6ZSIsICJlbiIsICJqYSIsICJ6aCIsICJSZXBvcnQiLCAiUmV2aXNpb24iLCAiaTE4bk1lc3NhZ2VzIiwgImdldE1lc3NhZ2UiLCAia2V5IiwgIkxJTktfVElUTEUiLCAiUmVwb3J0QnV0dG9uIiwgImRlZmF1bHQiLCAiY3JlYXRlRWxlbWVudCIsICJjbGFzc05hbWUiLCAic3JjIiwgIndpZHRoIiwgImhlaWdodCIsICJkcmFnZ2FibGUiLCAiYWx0IiwgIm9uQ2xpY2siLCAid2luZG93IiwgIm9wZW4iLCAiUmVwb3J0QnV0dG9uX2RlZmF1bHQiLCAiaW1wb3J0X2V4dF9nYWRnZXQzIiwgImltcG9ydF9leHRfZ2FkZ2V0NCIsICJhZGRCdXR0b24iLCAiJGJvZHkiLCAib25Nb3VzZUVudGVyTW91c2VMZWF2ZSIsICJldmVudCIsICJjaGFuZ2VPcGFjaXR5V2hlbk1vdXNlRW50ZXJPckxlYXZlIiwgInJlcG9ydEJ1dHRvbiIsICJfaSIsICJfYXJyIiwgImxlbmd0aCIsICJhZGRFdmVudExpc3RlbmVyIiwgInRpcHB5IiwgImFycm93IiwgImNvbnRlbnQiLCAiZ2V0QXR0cmlidXRlIiwgInBsYWNlbWVudCIsICJhcHBlbmQiLCAic2Nyb2xsTGlzdGVuZXIiLCAiYnV0dG9uQm90dG9tIiwgImRvY3VtZW50IiwgInF1ZXJ5U2VsZWN0b3IiLCAic3R5bGUiLCAiYm90dG9tIiwgInNjcm9sbExpc3RlbmVyV2l0aFRocm90dGxlIiwgInRocm90dGxlIiwgIiQiLCAib24iLCAiYWRkUG9ydGxldExpbmsiLCAibGlua1RpbHRlIiwgImZpbGxTcGVjaWFsUGFnZSIsICIkd3BTdWJqZWN0RWxlbWVudCIsICJmaW5kIiwgImlzQm9keUhhc0NsYXNzIiwgImhhc0NsYXNzIiwgIiR3cFRpdGxlRWxlbWVudCIsICJyZXBvcnRSZXZpc2lvbiIsICJnZXRQYXJhbVZhbHVlIiwgInJlcG9ydFRpdGxlIiwgInZhbCIsICJpbXBvcnRfZXh0X2dhZGdldDUiLCAiZ2V0Qm9keSIsICJ0aGVuIiwgInJlcG9ydCJdCn0K

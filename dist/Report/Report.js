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
//! src/Report/modules/constant.ts
var CLASS_NAME = "gadget-report";
var CLASS_NAME_BUTTON = "".concat(CLASS_NAME, "-button");
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
var ReportButton = (URL, onMouseEnterLeave) => /* @__PURE__ */ import_ext_gadget2.default.createElement("img", {
  className: [CLASS_NAME_BUTTON, "noprint"],
  src: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1' height='1'%3E%3C/svg%3E",
  width: "32",
  height: "32",
  draggable: false,
  alt: LINK_TITLE,
  "aria-label": LINK_TITLE,
  onClick: () => {
    window.open(URL, "_blank", "noopener,noreferrer");
  },
  onMouseEnter: onMouseEnterLeave,
  onMouseLeave: onMouseEnterLeave
});
var ReportButton_default = ReportButton;
//! src/Report/modules/addButton.ts
var import_ext_gadget3 = require("ext.gadget.Util");
var import_ext_gadget4 = require("ext.gadget.Tippy");
var addButton = ($body, URL) => {
  const {
    wgNamespaceNumber
  } = mw.config.get();
  if (wgNamespaceNumber < 0) {
    return;
  }
  const onMouseEnterMouseLeave = (event) => {
    (0, import_ext_gadget3.changeOpacityWhenMouseEnterOrLeave)(event);
  };
  const reportButton = ReportButton_default(URL, onMouseEnterMouseLeave);
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
var addPortletLink = (URL) => {
  const {
    wgNamespaceNumber
  } = mw.config.get();
  if (wgNamespaceNumber < 0) {
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
  const reportRevision = mw.util.getParamValue("report_revision") || mw.util.getParamValue("reportrevision") || "0";
  let reportTitle = mw.util.getParamValue("report_title") || mw.util.getParamValue("reporttitle") || "";
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
//! src/Report/modules/getURL.ts
var getURL = () => {
  const {
    wgCurRevisionId,
    wgPageName,
    wgRevisionId
  } = mw.config.get();
  const URL = mw.util.getUrl("Special:Contact/Report", {
    reporttitle: wgPageName,
    reportrevision: (wgRevisionId || wgCurRevisionId).toString()
  });
  return URL;
};
//! src/Report/Report.ts
void (0, import_ext_gadget5.getBody)().then(function report($body) {
  const URL = getURL();
  addButton($body, URL);
  addPortletLink(URL);
  fillSpecialPage($body);
});

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1JlcG9ydC9tb2R1bGVzL2NvbnN0YW50LnRzIiwgInNyYy9SZXBvcnQvY29tcG9uZW50cy9SZXBvcnRCdXR0b24udHN4IiwgInNyYy9SZXBvcnQvbW9kdWxlcy9pMThuLnRzIiwgInNyYy9SZXBvcnQvbW9kdWxlcy9hZGRCdXR0b24udHMiLCAic3JjL1JlcG9ydC9tb2R1bGVzL2FkZFBvcnRsZXRMaW5rLnRzIiwgInNyYy9SZXBvcnQvbW9kdWxlcy9maWxsU3BlY2lhbFBhZ2UudHMiLCAic3JjL1JlcG9ydC9SZXBvcnQudHMiLCAic3JjL1JlcG9ydC9tb2R1bGVzL2dldFVSTC50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgQ0xBU1NfTkFNRTogc3RyaW5nID0gJ2dhZGdldC1yZXBvcnQnO1xuY29uc3QgQ0xBU1NfTkFNRV9CVVRUT046IHN0cmluZyA9IGAke0NMQVNTX05BTUV9LWJ1dHRvbmA7XG5cbmV4cG9ydCB7Q0xBU1NfTkFNRV9CVVRUT059O1xuIiwgImltcG9ydCB7Q0xBU1NfTkFNRV9CVVRUT059IGZyb20gJy4uL21vZHVsZXMvY29uc3RhbnQnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ2V4dC5nYWRnZXQuUmVhY3QnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuLi9tb2R1bGVzL2kxOG4nO1xuXG5jb25zdCBMSU5LX1RJVExFOiBzdHJpbmcgPSBnZXRNZXNzYWdlKCdSZXBvcnQnKTtcblxuY29uc3QgUmVwb3J0QnV0dG9uID0gKFVSTDogc3RyaW5nLCBvbk1vdXNlRW50ZXJMZWF2ZTogKGV2ZW50OiBNb3VzZUV2ZW50KSA9PiB2b2lkKSA9PiAoXG5cdDxpbWdcblx0XHRjbGFzc05hbWU9e1tDTEFTU19OQU1FX0JVVFRPTiwgJ25vcHJpbnQnXX1cblx0XHRzcmM9XCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzEnIGhlaWdodD0nMSclM0UlM0Mvc3ZnJTNFXCJcblx0XHR3aWR0aD1cIjMyXCJcblx0XHRoZWlnaHQ9XCIzMlwiXG5cdFx0ZHJhZ2dhYmxlPXtmYWxzZX1cblx0XHRhbHQ9e0xJTktfVElUTEV9XG5cdFx0YXJpYS1sYWJlbD17TElOS19USVRMRX1cblx0XHRvbkNsaWNrPXsoKTogdm9pZCA9PiB7XG5cdFx0XHR3aW5kb3cub3BlbihVUkwsICdfYmxhbmsnLCAnbm9vcGVuZXIsbm9yZWZlcnJlcicpO1xuXHRcdH19XG5cdFx0b25Nb3VzZUVudGVyPXtvbk1vdXNlRW50ZXJMZWF2ZX1cblx0XHRvbk1vdXNlTGVhdmU9e29uTW91c2VFbnRlckxlYXZlfVxuXHQvPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgUmVwb3J0QnV0dG9uO1xuIiwgImltcG9ydCB7bG9jYWxpemV9IGZyb20gJ2V4dC5nYWRnZXQuaTE4bic7XG5cbmNvbnN0IGdldEkxOG5NZXNzYWdlcyA9ICgpID0+IHtcblx0cmV0dXJuIHtcblx0XHQnOic6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnOiAnLFxuXHRcdFx0amE6ICfvvJonLFxuXHRcdFx0emg6ICfvvJonLFxuXHRcdH0pLFxuXHRcdCcoJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICcoJyxcblx0XHRcdGphOiAn77yIJyxcblx0XHRcdHpoOiAn77yIJyxcblx0XHR9KSxcblx0XHQnKSc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnKScsXG5cdFx0XHRqYTogJ++8iScsXG5cdFx0XHR6aDogJ++8iScsXG5cdFx0fSksXG5cdFx0UmVwb3J0OiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1JlcG9ydCB0aGlzIHBhZ2UnLFxuXHRcdFx0amE6ICfjgZPjga7jg5rjg7zjgrjjgpLloLHlkYonLFxuXHRcdFx0J3poLWhhbnMnOiAn5oql5ZGK5LiN6Imv5L+h5oGvJyxcblx0XHRcdCd6aC1oYW50JzogJ+WgseWRiuS4jeiJr+izh+ioiicsXG5cdFx0fSksXG5cdFx0UmV2aXNpb246IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnUmV2aXNpb24nLFxuXHRcdFx0amE6ICfniYgnLFxuXHRcdFx0emg6ICfniYjmnKwnLFxuXHRcdH0pLFxuXHR9O1xufTtcblxuY29uc3QgaTE4bk1lc3NhZ2VzID0gZ2V0STE4bk1lc3NhZ2VzKCk7XG5cbmNvbnN0IGdldE1lc3NhZ2U6IEdldE1lc3NhZ2VzPHR5cGVvZiBpMThuTWVzc2FnZXM+ID0gKGtleSkgPT4ge1xuXHRyZXR1cm4gaTE4bk1lc3NhZ2VzW2tleV0gfHwga2V5O1xufTtcblxuZXhwb3J0IHtnZXRNZXNzYWdlfTtcbiIsICJpbXBvcnQgUmVwb3J0QnV0dG9uIGZyb20gJy4uL2NvbXBvbmVudHMvUmVwb3J0QnV0dG9uJztcbmltcG9ydCB7Y2hhbmdlT3BhY2l0eVdoZW5Nb3VzZUVudGVyT3JMZWF2ZX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbmltcG9ydCB7dGlwcHl9IGZyb20gJ2V4dC5nYWRnZXQuVGlwcHknO1xuXG5jb25zdCBhZGRCdXR0b24gPSAoJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+LCBVUkw6IHN0cmluZyk6IHZvaWQgPT4ge1xuXHRjb25zdCB7d2dOYW1lc3BhY2VOdW1iZXJ9ID0gbXcuY29uZmlnLmdldCgpO1xuXHRpZiAod2dOYW1lc3BhY2VOdW1iZXIgPCAwKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3Qgb25Nb3VzZUVudGVyTW91c2VMZWF2ZSA9IChldmVudDogTW91c2VFdmVudCk6IHZvaWQgPT4ge1xuXHRcdGNoYW5nZU9wYWNpdHlXaGVuTW91c2VFbnRlck9yTGVhdmUoZXZlbnQpO1xuXHR9O1xuXG5cdGNvbnN0IHJlcG9ydEJ1dHRvbiA9IFJlcG9ydEJ1dHRvbihVUkwsIG9uTW91c2VFbnRlck1vdXNlTGVhdmUpO1xuXG5cdHRpcHB5KHJlcG9ydEJ1dHRvbiwge1xuXHRcdGFycm93OiB0cnVlLFxuXHRcdGNvbnRlbnQ6IHJlcG9ydEJ1dHRvbi5nZXRBdHRyaWJ1dGUoJ2FsdCcpIGFzIHN0cmluZyxcblx0XHRwbGFjZW1lbnQ6ICdsZWZ0Jyxcblx0fSk7XG5cblx0JGJvZHkuYXBwZW5kKHJlcG9ydEJ1dHRvbik7XG5cblx0Y29uc3Qgc2Nyb2xsTGlzdGVuZXIgPSAoKTogdm9pZCA9PiB7XG5cdFx0bGV0IGJ1dHRvbkJvdHRvbTogc3RyaW5nO1xuXG5cdFx0aWYgKFxuXHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb3ZlaXQnKSB8fFxuXHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhZGdldC1jYXRfYV9sb3QtY29udGFpbmVyJykgfHxcblx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNnYWRnZXQtd29yZF9jb3VudC10aXAnKVxuXHRcdCkge1xuXHRcdFx0YnV0dG9uQm90dG9tID0gJzI1M3B4Jztcblx0XHR9IGVsc2Uge1xuXHRcdFx0YnV0dG9uQm90dG9tID0gJzIxMXB4Jztcblx0XHR9XG5cblx0XHRyZXBvcnRCdXR0b24uc3R5bGUuYm90dG9tID0gYnV0dG9uQm90dG9tO1xuXHR9O1xuXHRjb25zdCBzY3JvbGxMaXN0ZW5lcldpdGhUaHJvdHRsZTogdHlwZW9mIHNjcm9sbExpc3RlbmVyID0gbXcudXRpbC50aHJvdHRsZShzY3JvbGxMaXN0ZW5lciwgMjAwKTtcblxuXHQkKHdpbmRvdykub24oJ3Njcm9sbCBzZWxlY3Rpb25jaGFuZ2UnLCBzY3JvbGxMaXN0ZW5lcldpdGhUaHJvdHRsZSk7XG59O1xuXG5leHBvcnQge2FkZEJ1dHRvbn07XG4iLCAiaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL2kxOG4nO1xuXG5jb25zdCBhZGRQb3J0bGV0TGluayA9IChVUkw6IHN0cmluZyk6IHZvaWQgPT4ge1xuXHRjb25zdCB7d2dOYW1lc3BhY2VOdW1iZXJ9ID0gbXcuY29uZmlnLmdldCgpO1xuXHRpZiAod2dOYW1lc3BhY2VOdW1iZXIgPCAwKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgbGlua1RpbHRlOiBzdHJpbmcgPSBnZXRNZXNzYWdlKCdSZXBvcnQnKTtcblx0bXcudXRpbC5hZGRQb3J0bGV0TGluaygncC10YicsIFVSTCwgbGlua1RpbHRlLCAndC1yZXBvcnQnLCBsaW5rVGlsdGUpO1xufTtcblxuZXhwb3J0IHthZGRQb3J0bGV0TGlua307XG4iLCAiaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL2kxOG4nO1xuXG5jb25zdCBmaWxsU3BlY2lhbFBhZ2UgPSAoJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KTogdm9pZCA9PiB7XG5cdGNvbnN0ICR3cFN1YmplY3RFbGVtZW50OiBKUXVlcnk8SFRNTElucHV0RWxlbWVudD4gPSAkYm9keS5maW5kPEhUTUxJbnB1dEVsZW1lbnQ+KCdpbnB1dFtuYW1lPVwid3BTdWJqZWN0XCJdJyk7XG5cdGlmICghJHdwU3ViamVjdEVsZW1lbnQubGVuZ3RoKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgaXNCb2R5SGFzQ2xhc3M6IGJvb2xlYW4gPVxuXHRcdCRib2R5Lmhhc0NsYXNzKCdwYWdlLVNwZWNpYWxf6IGU57O7X1JlcG9ydCcpIHx8ICRib2R5Lmhhc0NsYXNzKCdwYWdlLVNwZWNpYWxf6IGU57O7X3JlcG9ydCcpO1xuXHRpZiAoIWlzQm9keUhhc0NsYXNzKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgJHdwVGl0bGVFbGVtZW50OiBKUXVlcnk8SFRNTElucHV0RWxlbWVudD4gPSAkYm9keS5maW5kPEhUTUxJbnB1dEVsZW1lbnQ+KCdpbnB1dFtuYW1lPVwid3BUaXRsZVwiXScpO1xuXG5cdGNvbnN0IGxpbmtUaWx0ZTogc3RyaW5nID0gZ2V0TWVzc2FnZSgnUmVwb3J0Jyk7XG5cdGNvbnN0IHJlcG9ydFJldmlzaW9uOiBzdHJpbmcgPVxuXHRcdG13LnV0aWwuZ2V0UGFyYW1WYWx1ZSgncmVwb3J0X3JldmlzaW9uJykgfHwgbXcudXRpbC5nZXRQYXJhbVZhbHVlKCdyZXBvcnRyZXZpc2lvbicpIHx8ICcwJztcblx0bGV0IHJlcG9ydFRpdGxlOiBzdHJpbmcgPSBtdy51dGlsLmdldFBhcmFtVmFsdWUoJ3JlcG9ydF90aXRsZScpIHx8IG13LnV0aWwuZ2V0UGFyYW1WYWx1ZSgncmVwb3J0dGl0bGUnKSB8fCAnJztcblx0aWYgKHJlcG9ydFJldmlzaW9uICE9PSAnMCcpIHtcblx0XHRyZXBvcnRUaXRsZSArPSBnZXRNZXNzYWdlKCcoJykgKyBnZXRNZXNzYWdlKCdSZXZpc2lvbicpICsgcmVwb3J0UmV2aXNpb24gKyBnZXRNZXNzYWdlKCcpJyk7XG5cdH1cblxuXHRpZiAocmVwb3J0VGl0bGUpIHtcblx0XHQkd3BTdWJqZWN0RWxlbWVudC52YWwobGlua1RpbHRlICsgZ2V0TWVzc2FnZSgnOicpICsgcmVwb3J0VGl0bGUpO1xuXHRcdCR3cFRpdGxlRWxlbWVudC52YWwocmVwb3J0VGl0bGUpO1xuXHR9IGVsc2Uge1xuXHRcdCR3cFN1YmplY3RFbGVtZW50LnZhbChsaW5rVGlsdGUpO1xuXHR9XG59O1xuXG5leHBvcnQge2ZpbGxTcGVjaWFsUGFnZX07XG4iLCAiaW1wb3J0IHthZGRCdXR0b259IGZyb20gJy4vbW9kdWxlcy9hZGRCdXR0b24nO1xuaW1wb3J0IHthZGRQb3J0bGV0TGlua30gZnJvbSAnLi9tb2R1bGVzL2FkZFBvcnRsZXRMaW5rJztcbmltcG9ydCB7ZmlsbFNwZWNpYWxQYWdlfSBmcm9tICcuL21vZHVsZXMvZmlsbFNwZWNpYWxQYWdlJztcbmltcG9ydCB7Z2V0Qm9keX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbmltcG9ydCB7Z2V0VVJMfSBmcm9tICcuL21vZHVsZXMvZ2V0VVJMJztcblxudm9pZCBnZXRCb2R5KCkudGhlbihmdW5jdGlvbiByZXBvcnQoJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KTogdm9pZCB7XG5cdGNvbnN0IFVSTDogc3RyaW5nID0gZ2V0VVJMKCk7XG5cdGFkZEJ1dHRvbigkYm9keSwgVVJMKTtcblx0YWRkUG9ydGxldExpbmsoVVJMKTtcblx0ZmlsbFNwZWNpYWxQYWdlKCRib2R5KTtcbn0pO1xuIiwgImNvbnN0IGdldFVSTCA9ICgpID0+IHtcblx0Y29uc3Qge3dnQ3VyUmV2aXNpb25JZCwgd2dQYWdlTmFtZSwgd2dSZXZpc2lvbklkfSA9IG13LmNvbmZpZy5nZXQoKTtcblx0Y29uc3QgVVJMOiBzdHJpbmcgPSBtdy51dGlsLmdldFVybCgnU3BlY2lhbDpDb250YWN0L1JlcG9ydCcsIHtcblx0XHRyZXBvcnR0aXRsZTogd2dQYWdlTmFtZSxcblx0XHRyZXBvcnRyZXZpc2lvbjogKHdnUmV2aXNpb25JZCB8fCB3Z0N1clJldmlzaW9uSWQpLnRvU3RyaW5nKCksXG5cdH0pO1xuXG5cdHJldHVybiBVUkw7XG59O1xuXG5leHBvcnQge2dldFVSTH07XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFNQSxhQUFxQjtBQUMzQixJQUFNQyxvQkFBQSxHQUFBQyxPQUErQkYsWUFBVSxTQUFBOztBQ0EvQyxJQUFBRyxxQkFBa0JDLFFBQUFDLFFBQUEsa0JBQUEsR0FBQSxDQUFBOztBQ0RsQixJQUFBQyxvQkFBdUJELFFBQUEsaUJBQUE7QUFFdkIsSUFBTUUsa0JBQWtCQSxNQUFNO0FBQzdCLFNBQU87SUFDTixNQUFBLEdBQUtELGtCQUFBRSxVQUFTO01BQ2JDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO0lBQ0wsQ0FBQztJQUNELE1BQUEsR0FBS0wsa0JBQUFFLFVBQVM7TUFDYkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7SUFDTCxDQUFDO0lBQ0QsTUFBQSxHQUFLTCxrQkFBQUUsVUFBUztNQUNiQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtJQUNMLENBQUM7SUFDREMsU0FBQSxHQUFRTixrQkFBQUUsVUFBUztNQUNoQkMsSUFBSTtNQUNKQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0RHLFdBQUEsR0FBVVAsa0JBQUFF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QzNHLE1BQUlELG1CQUFtQixLQUFLO0FBQzNCRSxtQkFBZTVELFdBQVcsR0FBRyxJQUFJQSxXQUFXLFVBQVUsSUFBSTBELGlCQUFpQjFELFdBQVcsR0FBRztFQUMxRjtBQUVBLE1BQUk0RCxhQUFhO0FBQ2hCUixzQkFBa0JTLElBQUlYLFlBQVlsRCxXQUFXLEdBQUcsSUFBSTRELFdBQVc7QUFDL0RILG9CQUFnQkksSUFBSUQsV0FBVztFQUNoQyxPQUFPO0FBQ05SLHNCQUFrQlMsSUFBSVgsU0FBUztFQUNoQztBQUNEOztBQzNCQSxJQUFBWSxxQkFBc0J4RSxRQUFBLGlCQUFBOztBQ0h0QixJQUFNeUUsU0FBU0EsTUFBTTtBQUNwQixRQUFNO0lBQUNDO0lBQWlCQztJQUFZQztFQUFZLElBQUl6QyxHQUFHQyxPQUFPQyxJQUFJO0FBQ2xFLFFBQU12QixNQUFjcUIsR0FBR29CLEtBQUtzQixPQUFPLDBCQUEwQjtJQUM1REMsYUFBYUg7SUFDYkksaUJBQWlCSCxnQkFBZ0JGLGlCQUFpQk0sU0FBUztFQUM1RCxDQUFDO0FBRUQsU0FBT2xFO0FBQ1I7O0FERkEsTUFBQSxHQUFLMEQsbUJBQUFTLFNBQVEsRUFBRUMsS0FBSyxTQUFTQyxPQUFPbEQsT0FBc0M7QUFDekUsUUFBTW5CLE1BQWMyRCxPQUFPO0FBQzNCekMsWUFBVUMsT0FBT25CLEdBQUc7QUFDcEI2QyxpQkFBZTdDLEdBQUc7QUFDbEIrQyxrQkFBZ0I1QixLQUFLO0FBQ3RCLENBQUM7IiwKICAibmFtZXMiOiBbIkNMQVNTX05BTUUiLCAiQ0xBU1NfTkFNRV9CVVRUT04iLCAiY29uY2F0IiwgImltcG9ydF9leHRfZ2FkZ2V0MiIsICJfX3RvRVNNIiwgInJlcXVpcmUiLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAiZ2V0STE4bk1lc3NhZ2VzIiwgImxvY2FsaXplIiwgImVuIiwgImphIiwgInpoIiwgIlJlcG9ydCIsICJSZXZpc2lvbiIsICJpMThuTWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAiTElOS19USVRMRSIsICJSZXBvcnRCdXR0b24iLCAiVVJMIiwgIm9uTW91c2VFbnRlckxlYXZlIiwgImRlZmF1bHQiLCAiY3JlYXRlRWxlbWVudCIsICJjbGFzc05hbWUiLCAic3JjIiwgIndpZHRoIiwgImhlaWdodCIsICJkcmFnZ2FibGUiLCAiYWx0IiwgIm9uQ2xpY2siLCAid2luZG93IiwgIm9wZW4iLCAib25Nb3VzZUVudGVyIiwgIm9uTW91c2VMZWF2ZSIsICJSZXBvcnRCdXR0b25fZGVmYXVsdCIsICJpbXBvcnRfZXh0X2dhZGdldDMiLCAiaW1wb3J0X2V4dF9nYWRnZXQ0IiwgImFkZEJ1dHRvbiIsICIkYm9keSIsICJ3Z05hbWVzcGFjZU51bWJlciIsICJtdyIsICJjb25maWciLCAiZ2V0IiwgIm9uTW91c2VFbnRlck1vdXNlTGVhdmUiLCAiZXZlbnQiLCAiY2hhbmdlT3BhY2l0eVdoZW5Nb3VzZUVudGVyT3JMZWF2ZSIsICJyZXBvcnRCdXR0b24iLCAidGlwcHkiLCAiYXJyb3ciLCAiY29udGVudCIsICJnZXRBdHRyaWJ1dGUiLCAicGxhY2VtZW50IiwgImFwcGVuZCIsICJzY3JvbGxMaXN0ZW5lciIsICJidXR0b25Cb3R0b20iLCAiZG9jdW1lbnQiLCAicXVlcnlTZWxlY3RvciIsICJzdHlsZSIsICJib3R0b20iLCAic2Nyb2xsTGlzdGVuZXJXaXRoVGhyb3R0bGUiLCAidXRpbCIsICJ0aHJvdHRsZSIsICIkIiwgIm9uIiwgImFkZFBvcnRsZXRMaW5rIiwgImxpbmtUaWx0ZSIsICJmaWxsU3BlY2lhbFBhZ2UiLCAiJHdwU3ViamVjdEVsZW1lbnQiLCAiZmluZCIsICJsZW5ndGgiLCAiaXNCb2R5SGFzQ2xhc3MiLCAiaGFzQ2xhc3MiLCAiJHdwVGl0bGVFbGVtZW50IiwgInJlcG9ydFJldmlzaW9uIiwgImdldFBhcmFtVmFsdWUiLCAicmVwb3J0VGl0bGUiLCAidmFsIiwgImltcG9ydF9leHRfZ2FkZ2V0NSIsICJnZXRVUkwiLCAid2dDdXJSZXZpc2lvbklkIiwgIndnUGFnZU5hbWUiLCAid2dSZXZpc2lvbklkIiwgImdldFVybCIsICJyZXBvcnR0aXRsZSIsICJyZXBvcnRyZXZpc2lvbiIsICJ0b1N0cmluZyIsICJnZXRCb2R5IiwgInRoZW4iLCAicmVwb3J0Il0KfQo=

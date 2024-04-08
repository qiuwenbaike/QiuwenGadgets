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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1JlcG9ydC9tb2R1bGVzL2NvbnN0YW50LnRzIiwgInNyYy9SZXBvcnQvY29tcG9uZW50cy9SZXBvcnRCdXR0b24udHN4IiwgInNyYy9SZXBvcnQvbW9kdWxlcy9pMThuLnRzIiwgInNyYy9SZXBvcnQvbW9kdWxlcy9hZGRCdXR0b24udHMiLCAic3JjL1JlcG9ydC9tb2R1bGVzL2FkZFBvcnRsZXRMaW5rLnRzIiwgInNyYy9SZXBvcnQvbW9kdWxlcy9maWxsU3BlY2lhbFBhZ2UudHMiLCAic3JjL1JlcG9ydC9SZXBvcnQudHMiLCAic3JjL1JlcG9ydC9tb2R1bGVzL2dldFVSTC50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgQ0xBU1NfTkFNRTogc3RyaW5nID0gJ2dhZGdldC1yZXBvcnQnO1xuY29uc3QgQ0xBU1NfTkFNRV9CVVRUT046IHN0cmluZyA9IGAke0NMQVNTX05BTUV9LWJ1dHRvbmA7XG5cbmV4cG9ydCB7Q0xBU1NfTkFNRV9CVVRUT059O1xuIiwgImltcG9ydCB7Q0xBU1NfTkFNRV9CVVRUT059IGZyb20gJy4uL21vZHVsZXMvY29uc3RhbnQnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ2V4dC5nYWRnZXQuUmVhY3QnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuLi9tb2R1bGVzL2kxOG4nO1xuXG5jb25zdCBMSU5LX1RJVExFOiBzdHJpbmcgPSBnZXRNZXNzYWdlKCdSZXBvcnQnKTtcblxuY29uc3QgUmVwb3J0QnV0dG9uID0gKFVSTDogc3RyaW5nLCBvbk1vdXNlRW50ZXJMZWF2ZTogKGV2ZW50OiBNb3VzZUV2ZW50KSA9PiB2b2lkKSA9PiAoXG5cdDxpbWdcblx0XHRjbGFzc05hbWU9e1tDTEFTU19OQU1FX0JVVFRPTiwgJ25vcHJpbnQnXX1cblx0XHRzcmM9XCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzEnIGhlaWdodD0nMSclM0UlM0Mvc3ZnJTNFXCJcblx0XHR3aWR0aD1cIjMyXCJcblx0XHRoZWlnaHQ9XCIzMlwiXG5cdFx0ZHJhZ2dhYmxlPXtmYWxzZX1cblx0XHRhbHQ9e0xJTktfVElUTEV9XG5cdFx0YXJpYS1sYWJlbD17TElOS19USVRMRX1cblx0XHRvbkNsaWNrPXsoKTogdm9pZCA9PiB7XG5cdFx0XHR3aW5kb3cub3BlbihVUkwsICdfYmxhbmsnLCAnbm9vcGVuZXIsbm9yZWZlcnJlcicpO1xuXHRcdH19XG5cdFx0b25Nb3VzZUVudGVyPXtvbk1vdXNlRW50ZXJMZWF2ZX1cblx0XHRvbk1vdXNlTGVhdmU9e29uTW91c2VFbnRlckxlYXZlfVxuXHQvPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgUmVwb3J0QnV0dG9uO1xuIiwgImltcG9ydCB7bG9jYWxpemV9IGZyb20gJ2V4dC5nYWRnZXQuaTE4bic7XG5cbmNvbnN0IGdldEkxOG5NZXNzYWdlcyA9ICgpID0+IHtcblx0cmV0dXJuIHtcblx0XHQnOic6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnOiAnLFxuXHRcdFx0amE6ICfvvJonLFxuXHRcdFx0emg6ICfvvJonLFxuXHRcdH0pLFxuXHRcdCcoJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICcoJyxcblx0XHRcdGphOiAn77yIJyxcblx0XHRcdHpoOiAn77yIJyxcblx0XHR9KSxcblx0XHQnKSc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnKScsXG5cdFx0XHRqYTogJ++8iScsXG5cdFx0XHR6aDogJ++8iScsXG5cdFx0fSksXG5cdFx0UmVwb3J0OiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1JlcG9ydCB0aGlzIHBhZ2UnLFxuXHRcdFx0amE6ICfjgZPjga7jg5rjg7zjgrjjgpLloLHlkYonLFxuXHRcdFx0J3poLWhhbnMnOiAn5oql5ZGK5LiN6Imv5L+h5oGvJyxcblx0XHRcdCd6aC1oYW50JzogJ+WgseWRiuS4jeiJr+izh+ioiicsXG5cdFx0fSksXG5cdFx0UmV2aXNpb246IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnUmV2aXNpb24nLFxuXHRcdFx0amE6ICfniYgnLFxuXHRcdFx0emg6ICfniYjmnKwnLFxuXHRcdH0pLFxuXHR9O1xufTtcblxuY29uc3QgaTE4bk1lc3NhZ2VzID0gZ2V0STE4bk1lc3NhZ2VzKCk7XG5cbmNvbnN0IGdldE1lc3NhZ2U6IEdldE1lc3NhZ2VzPHR5cGVvZiBpMThuTWVzc2FnZXM+ID0gKGtleSkgPT4ge1xuXHRyZXR1cm4gaTE4bk1lc3NhZ2VzW2tleV0gfHwga2V5O1xufTtcblxuZXhwb3J0IHtnZXRNZXNzYWdlfTtcbiIsICJpbXBvcnQgUmVwb3J0QnV0dG9uIGZyb20gJy4uL2NvbXBvbmVudHMvUmVwb3J0QnV0dG9uJztcbmltcG9ydCB7Y2hhbmdlT3BhY2l0eVdoZW5Nb3VzZUVudGVyT3JMZWF2ZX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbmltcG9ydCB7dGlwcHl9IGZyb20gJ2V4dC5nYWRnZXQuVGlwcHknO1xuXG5jb25zdCBhZGRCdXR0b24gPSAoJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+LCBVUkw6IHN0cmluZyk6IHZvaWQgPT4ge1xuXHRjb25zdCB7d2dOYW1lc3BhY2VOdW1iZXJ9ID0gbXcuY29uZmlnLmdldCgpO1xuXHRpZiAod2dOYW1lc3BhY2VOdW1iZXIgPCAwKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3Qgb25Nb3VzZUVudGVyTW91c2VMZWF2ZSA9IChldmVudDogTW91c2VFdmVudCk6IHZvaWQgPT4ge1xuXHRcdGNoYW5nZU9wYWNpdHlXaGVuTW91c2VFbnRlck9yTGVhdmUoZXZlbnQpO1xuXHR9O1xuXG5cdGNvbnN0IHJlcG9ydEJ1dHRvbiA9IFJlcG9ydEJ1dHRvbihVUkwsIG9uTW91c2VFbnRlck1vdXNlTGVhdmUpO1xuXG5cdHRpcHB5KHJlcG9ydEJ1dHRvbiwge1xuXHRcdGFycm93OiB0cnVlLFxuXHRcdGNvbnRlbnQ6IHJlcG9ydEJ1dHRvbi5nZXRBdHRyaWJ1dGUoJ2FsdCcpIGFzIHN0cmluZyxcblx0XHRwbGFjZW1lbnQ6ICdsZWZ0Jyxcblx0fSk7XG5cblx0JGJvZHkuYXBwZW5kKHJlcG9ydEJ1dHRvbik7XG5cblx0Y29uc3Qgc2Nyb2xsTGlzdGVuZXIgPSAoKTogdm9pZCA9PiB7XG5cdFx0bGV0IGJ1dHRvbkJvdHRvbTogc3RyaW5nO1xuXG5cdFx0aWYgKFxuXHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb3ZlaXQnKSB8fFxuXHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhZGdldC1jYXRfYV9sb3QtY29udGFpbmVyJykgfHxcblx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNnYWRnZXQtd29yZF9jb3VudC10aXAnKVxuXHRcdCkge1xuXHRcdFx0YnV0dG9uQm90dG9tID0gJzI1M3B4Jztcblx0XHR9IGVsc2Uge1xuXHRcdFx0YnV0dG9uQm90dG9tID0gJzIxMXB4Jztcblx0XHR9XG5cblx0XHRyZXBvcnRCdXR0b24uc3R5bGUuYm90dG9tID0gYnV0dG9uQm90dG9tO1xuXHR9O1xuXHRjb25zdCBzY3JvbGxMaXN0ZW5lcldpdGhUaHJvdHRsZTogdHlwZW9mIHNjcm9sbExpc3RlbmVyID0gbXcudXRpbC50aHJvdHRsZShzY3JvbGxMaXN0ZW5lciwgMjAwKTtcblxuXHQkKHdpbmRvdykub24oJ3Njcm9sbCBzZWxlY3Rpb25jaGFuZ2UnLCBzY3JvbGxMaXN0ZW5lcldpdGhUaHJvdHRsZSk7XG59O1xuXG5leHBvcnQge2FkZEJ1dHRvbn07XG4iLCAiaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL2kxOG4nO1xuXG5jb25zdCBhZGRQb3J0bGV0TGluayA9IChVUkw6IHN0cmluZyk6IHZvaWQgPT4ge1xuXHRjb25zdCB7d2dOYW1lc3BhY2VOdW1iZXJ9ID0gbXcuY29uZmlnLmdldCgpO1xuXHRpZiAod2dOYW1lc3BhY2VOdW1iZXIgPCAwKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgbGlua1RpbHRlOiBzdHJpbmcgPSBnZXRNZXNzYWdlKCdSZXBvcnQnKTtcblx0bXcudXRpbC5hZGRQb3J0bGV0TGluaygncC10YicsIFVSTCwgbGlua1RpbHRlLCAndC1yZXBvcnQnLCBsaW5rVGlsdGUpO1xufTtcblxuZXhwb3J0IHthZGRQb3J0bGV0TGlua307XG4iLCAiaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL2kxOG4nO1xuXG5jb25zdCBmaWxsU3BlY2lhbFBhZ2UgPSAoJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KTogdm9pZCA9PiB7XG5cdGNvbnN0ICR3cFN1YmplY3RFbGVtZW50OiBKUXVlcnk8SFRNTElucHV0RWxlbWVudD4gPSAkYm9keS5maW5kPEhUTUxJbnB1dEVsZW1lbnQ+KCdpbnB1dFtuYW1lPVwid3BTdWJqZWN0XCJdJyk7XG5cdGlmICghJHdwU3ViamVjdEVsZW1lbnQubGVuZ3RoKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgaXNCb2R5SGFzQ2xhc3M6IGJvb2xlYW4gPVxuXHRcdCRib2R5Lmhhc0NsYXNzKCdwYWdlLVNwZWNpYWxf6IGU57O7X1JlcG9ydCcpIHx8ICRib2R5Lmhhc0NsYXNzKCdwYWdlLVNwZWNpYWxf6IGU57O7X3JlcG9ydCcpO1xuXHRpZiAoIWlzQm9keUhhc0NsYXNzKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgJHdwVGl0bGVFbGVtZW50OiBKUXVlcnk8SFRNTElucHV0RWxlbWVudD4gPSAkYm9keS5maW5kPEhUTUxJbnB1dEVsZW1lbnQ+KCdpbnB1dFtuYW1lPVwid3BUaXRsZVwiXScpO1xuXG5cdGNvbnN0IGxpbmtUaWx0ZTogc3RyaW5nID0gZ2V0TWVzc2FnZSgnUmVwb3J0Jyk7XG5cdGNvbnN0IHJlcG9ydFJldmlzaW9uOiBzdHJpbmcgPVxuXHRcdG13LnV0aWwuZ2V0UGFyYW1WYWx1ZSgncmVwb3J0X3JldmlzaW9uJykgfHwgbXcudXRpbC5nZXRQYXJhbVZhbHVlKCdyZXBvcnRyZXZpc2lvbicpIHx8ICcwJztcblx0bGV0IHJlcG9ydFRpdGxlOiBzdHJpbmcgPSBtdy51dGlsLmdldFBhcmFtVmFsdWUoJ3JlcG9ydF90aXRsZScpIHx8IG13LnV0aWwuZ2V0UGFyYW1WYWx1ZSgncmVwb3J0dGl0bGUnKSB8fCAnJztcblx0aWYgKHJlcG9ydFJldmlzaW9uICE9PSAnMCcpIHtcblx0XHRyZXBvcnRUaXRsZSArPSBnZXRNZXNzYWdlKCcoJykgKyBnZXRNZXNzYWdlKCdSZXZpc2lvbicpICsgcmVwb3J0UmV2aXNpb24gKyBnZXRNZXNzYWdlKCcpJyk7XG5cdH1cblxuXHRpZiAocmVwb3J0VGl0bGUpIHtcblx0XHQkd3BTdWJqZWN0RWxlbWVudC52YWwobGlua1RpbHRlICsgZ2V0TWVzc2FnZSgnOicpICsgcmVwb3J0VGl0bGUpO1xuXHRcdCR3cFRpdGxlRWxlbWVudC52YWwocmVwb3J0VGl0bGUpO1xuXHR9IGVsc2Uge1xuXHRcdCR3cFN1YmplY3RFbGVtZW50LnZhbChsaW5rVGlsdGUpO1xuXHR9XG59O1xuXG5leHBvcnQge2ZpbGxTcGVjaWFsUGFnZX07XG4iLCAiaW1wb3J0IHthZGRCdXR0b259IGZyb20gJy4vbW9kdWxlcy9hZGRCdXR0b24nO1xuaW1wb3J0IHthZGRQb3J0bGV0TGlua30gZnJvbSAnLi9tb2R1bGVzL2FkZFBvcnRsZXRMaW5rJztcbmltcG9ydCB7ZmlsbFNwZWNpYWxQYWdlfSBmcm9tICcuL21vZHVsZXMvZmlsbFNwZWNpYWxQYWdlJztcbmltcG9ydCB7Z2V0Qm9keX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbmltcG9ydCB7Z2V0VVJMfSBmcm9tICcuL21vZHVsZXMvZ2V0VVJMJztcblxudm9pZCBnZXRCb2R5KCkudGhlbihmdW5jdGlvbiByZXBvcnQoJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KTogdm9pZCB7XG5cdGNvbnN0IFVSTDogc3RyaW5nID0gZ2V0VVJMKCk7XG5cdGFkZEJ1dHRvbigkYm9keSwgVVJMKTtcblx0YWRkUG9ydGxldExpbmsoVVJMKTtcblx0ZmlsbFNwZWNpYWxQYWdlKCRib2R5KTtcbn0pO1xuIiwgImNvbnN0IGdldFVSTCA9ICgpID0+IHtcblx0Y29uc3Qge3dnQ3VyUmV2aXNpb25JZCwgd2dQYWdlTmFtZSwgd2dSZXZpc2lvbklkfSA9IG13LmNvbmZpZy5nZXQoKTtcblx0Y29uc3QgVVJMOiBzdHJpbmcgPSBtdy51dGlsLmdldFVybCgnU3BlY2lhbDpDb250YWN0L1JlcG9ydCcsIHtcblx0XHRyZXBvcnR0aXRsZTogd2dQYWdlTmFtZSxcblx0XHRyZXBvcnRyZXZpc2lvbjogKHdnUmV2aXNpb25JZCB8fCB3Z0N1clJldmlzaW9uSWQpLnRvU3RyaW5nKCksXG5cdH0pO1xuXG5cdHJldHVybiBVUkw7XG59O1xuXG5leHBvcnQge2dldFVSTH07XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLGFBQXFCO0FBQzNCLElBQU1DLG9CQUFBLEdBQUFDLE9BQStCRixZQUFVLFNBQUE7O0FDQS9DLElBQUFHLHFCQUFrQkMsUUFBQUMsUUFBQSxrQkFBQSxHQUFBLENBQUE7O0FDRGxCLElBQUFDLG9CQUF1QkQsUUFBQSxpQkFBQTtBQUV2QixJQUFNRSxrQkFBa0JBLE1BQU07QUFDN0IsU0FBTztJQUNOLE1BQUEsR0FBS0Qsa0JBQUFFLFVBQVM7TUFDYkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7SUFDTCxDQUFDO0lBQ0QsTUFBQSxHQUFLTCxrQkFBQUUsVUFBUztNQUNiQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtJQUNMLENBQUM7SUFDRCxNQUFBLEdBQUtMLGtCQUFBRSxVQUFTO01BQ2JDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO0lBQ0wsQ0FBQztJQUNEQyxTQUFBLEdBQVFOLGtCQUFBRSxVQUFTO01BQ2hCQyxJQUFJO01BQ0pDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDREcs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Y0FBYyxhQUFhLEtBQUs7QUFDM0csTUFBSUQsbUJBQW1CLEtBQUs7QUFDM0JFLG1CQUFlNUQsV0FBVyxHQUFHLElBQUlBLFdBQVcsVUFBVSxJQUFJMEQsaUJBQWlCMUQsV0FBVyxHQUFHO0VBQzFGO0FBRUEsTUFBSTRELGFBQWE7QUFDaEJSLHNCQUFrQlMsSUFBSVgsWUFBWWxELFdBQVcsR0FBRyxJQUFJNEQsV0FBVztBQUMvREgsb0JBQWdCSSxJQUFJRCxXQUFXO0VBQ2hDLE9BQU87QUFDTlIsc0JBQWtCUyxJQUFJWCxTQUFTO0VBQ2hDO0FBQ0Q7O0FDM0JBLElBQUFZLHFCQUFzQnhFLFFBQUEsaUJBQUE7O0FDSHRCLElBQU15RSxTQUFTQSxNQUFNO0FBQ3BCLFFBQU07SUFBQ0M7SUFBaUJDO0lBQVlDO0VBQVksSUFBSXpDLEdBQUdDLE9BQU9DLElBQUk7QUFDbEUsUUFBTXZCLE1BQWNxQixHQUFHb0IsS0FBS3NCLE9BQU8sMEJBQTBCO0lBQzVEQyxhQUFhSDtJQUNiSSxpQkFBaUJILGdCQUFnQkYsaUJBQWlCTSxTQUFTO0VBQzVELENBQUM7QUFFRCxTQUFPbEU7QUFDUjs7QURGQSxNQUFBLEdBQUswRCxtQkFBQVMsU0FBUSxFQUFFQyxLQUFLLFNBQVNDLE9BQU9sRCxPQUFzQztBQUN6RSxRQUFNbkIsTUFBYzJELE9BQU87QUFDM0J6QyxZQUFVQyxPQUFPbkIsR0FBRztBQUNwQjZDLGlCQUFlN0MsR0FBRztBQUNsQitDLGtCQUFnQjVCLEtBQUs7QUFDdEIsQ0FBQzsiLAogICJuYW1lcyI6IFsiQ0xBU1NfTkFNRSIsICJDTEFTU19OQU1FX0JVVFRPTiIsICJjb25jYXQiLCAiaW1wb3J0X2V4dF9nYWRnZXQyIiwgIl9fdG9FU00iLCAicmVxdWlyZSIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJnZXRJMThuTWVzc2FnZXMiLCAibG9jYWxpemUiLCAiZW4iLCAiamEiLCAiemgiLCAiUmVwb3J0IiwgIlJldmlzaW9uIiwgImkxOG5NZXNzYWdlcyIsICJnZXRNZXNzYWdlIiwgImtleSIsICJMSU5LX1RJVExFIiwgIlJlcG9ydEJ1dHRvbiIsICJVUkwiLCAib25Nb3VzZUVudGVyTGVhdmUiLCAiZGVmYXVsdCIsICJjcmVhdGVFbGVtZW50IiwgImNsYXNzTmFtZSIsICJzcmMiLCAid2lkdGgiLCAiaGVpZ2h0IiwgImRyYWdnYWJsZSIsICJhbHQiLCAib25DbGljayIsICJ3aW5kb3ciLCAib3BlbiIsICJvbk1vdXNlRW50ZXIiLCAib25Nb3VzZUxlYXZlIiwgIlJlcG9ydEJ1dHRvbl9kZWZhdWx0IiwgImltcG9ydF9leHRfZ2FkZ2V0MyIsICJpbXBvcnRfZXh0X2dhZGdldDQiLCAiYWRkQnV0dG9uIiwgIiRib2R5IiwgIndnTmFtZXNwYWNlTnVtYmVyIiwgIm13IiwgImNvbmZpZyIsICJnZXQiLCAib25Nb3VzZUVudGVyTW91c2VMZWF2ZSIsICJldmVudCIsICJjaGFuZ2VPcGFjaXR5V2hlbk1vdXNlRW50ZXJPckxlYXZlIiwgInJlcG9ydEJ1dHRvbiIsICJ0aXBweSIsICJhcnJvdyIsICJjb250ZW50IiwgImdldEF0dHJpYnV0ZSIsICJwbGFjZW1lbnQiLCAiYXBwZW5kIiwgInNjcm9sbExpc3RlbmVyIiwgImJ1dHRvbkJvdHRvbSIsICJkb2N1bWVudCIsICJxdWVyeVNlbGVjdG9yIiwgInN0eWxlIiwgImJvdHRvbSIsICJzY3JvbGxMaXN0ZW5lcldpdGhUaHJvdHRsZSIsICJ1dGlsIiwgInRocm90dGxlIiwgIiQiLCAib24iLCAiYWRkUG9ydGxldExpbmsiLCAibGlua1RpbHRlIiwgImZpbGxTcGVjaWFsUGFnZSIsICIkd3BTdWJqZWN0RWxlbWVudCIsICJmaW5kIiwgImxlbmd0aCIsICJpc0JvZHlIYXNDbGFzcyIsICJoYXNDbGFzcyIsICIkd3BUaXRsZUVsZW1lbnQiLCAicmVwb3J0UmV2aXNpb24iLCAiZ2V0UGFyYW1WYWx1ZSIsICJyZXBvcnRUaXRsZSIsICJ2YWwiLCAiaW1wb3J0X2V4dF9nYWRnZXQ1IiwgImdldFVSTCIsICJ3Z0N1clJldmlzaW9uSWQiLCAid2dQYWdlTmFtZSIsICJ3Z1JldmlzaW9uSWQiLCAiZ2V0VXJsIiwgInJlcG9ydHRpdGxlIiwgInJlcG9ydHJldmlzaW9uIiwgInRvU3RyaW5nIiwgImdldEJvZHkiLCAidGhlbiIsICJyZXBvcnQiXQp9Cg==

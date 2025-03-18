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
var import_ext_gadget2 = __toESM(require("ext.gadget.JSX"), 1);
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1JlcG9ydC9tb2R1bGVzL2NvbnN0YW50LnRzIiwgInNyYy9SZXBvcnQvY29tcG9uZW50cy9SZXBvcnRCdXR0b24udHN4IiwgInNyYy9SZXBvcnQvbW9kdWxlcy9pMThuLnRzIiwgInNyYy9SZXBvcnQvbW9kdWxlcy9hZGRCdXR0b24udHMiLCAic3JjL1JlcG9ydC9tb2R1bGVzL2FkZFBvcnRsZXRMaW5rLnRzIiwgInNyYy9SZXBvcnQvbW9kdWxlcy9maWxsU3BlY2lhbFBhZ2UudHMiLCAic3JjL1JlcG9ydC9SZXBvcnQudHMiLCAic3JjL1JlcG9ydC9tb2R1bGVzL2dldFVSTC50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgQ0xBU1NfTkFNRTogc3RyaW5nID0gJ2dhZGdldC1yZXBvcnQnO1xuY29uc3QgQ0xBU1NfTkFNRV9CVVRUT046IHN0cmluZyA9IGAke0NMQVNTX05BTUV9LWJ1dHRvbmA7XG5cbmV4cG9ydCB7Q0xBU1NfTkFNRV9CVVRUT059O1xuIiwgImltcG9ydCB7Q0xBU1NfTkFNRV9CVVRUT059IGZyb20gJy4uL21vZHVsZXMvY29uc3RhbnQnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ2V4dC5nYWRnZXQuSlNYJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi4vbW9kdWxlcy9pMThuJztcblxuY29uc3QgTElOS19USVRMRTogc3RyaW5nID0gZ2V0TWVzc2FnZSgnUmVwb3J0Jyk7XG5cbmNvbnN0IFJlcG9ydEJ1dHRvbiA9IChVUkw6IHN0cmluZywgb25Nb3VzZUVudGVyTGVhdmU6IChldmVudDogTW91c2VFdmVudCkgPT4gdm9pZCkgPT4gKFxuXHQ8aW1nXG5cdFx0Y2xhc3NOYW1lPXtbQ0xBU1NfTkFNRV9CVVRUT04sICdub3ByaW50J119XG5cdFx0c3JjPVwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxJyBoZWlnaHQ9JzEnJTNFJTNDL3N2ZyUzRVwiXG5cdFx0d2lkdGg9XCIzMlwiXG5cdFx0aGVpZ2h0PVwiMzJcIlxuXHRcdGRyYWdnYWJsZT17ZmFsc2V9XG5cdFx0YWx0PXtMSU5LX1RJVExFfVxuXHRcdGFyaWEtbGFiZWw9e0xJTktfVElUTEV9XG5cdFx0b25DbGljaz17KCk6IHZvaWQgPT4ge1xuXHRcdFx0d2luZG93Lm9wZW4oVVJMLCAnX2JsYW5rJywgJ25vb3BlbmVyLG5vcmVmZXJyZXInKTtcblx0XHR9fVxuXHRcdG9uTW91c2VFbnRlcj17b25Nb3VzZUVudGVyTGVhdmV9XG5cdFx0b25Nb3VzZUxlYXZlPXtvbk1vdXNlRW50ZXJMZWF2ZX1cblx0Lz5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IFJlcG9ydEJ1dHRvbjtcbiIsICJpbXBvcnQge2xvY2FsaXplfSBmcm9tICdleHQuZ2FkZ2V0LmkxOG4nO1xuXG5jb25zdCBnZXRJMThuTWVzc2FnZXMgPSAoKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0JzonOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJzogJyxcblx0XHRcdGphOiAn77yaJyxcblx0XHRcdHpoOiAn77yaJyxcblx0XHR9KSxcblx0XHQnKCc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnKCcsXG5cdFx0XHRqYTogJ++8iCcsXG5cdFx0XHR6aDogJ++8iCcsXG5cdFx0fSksXG5cdFx0JyknOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJyknLFxuXHRcdFx0amE6ICfvvIknLFxuXHRcdFx0emg6ICfvvIknLFxuXHRcdH0pLFxuXHRcdFJlcG9ydDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdSZXBvcnQgdGhpcyBwYWdlJyxcblx0XHRcdGphOiAn44GT44Gu44Oa44O844K444KS5aCx5ZGKJyxcblx0XHRcdCd6aC1oYW5zJzogJ+aKpeWRiuS4jeiJr+S/oeaBrycsXG5cdFx0XHQnemgtaGFudCc6ICfloLHlkYrkuI3oia/os4foqIonLFxuXHRcdH0pLFxuXHRcdFJldmlzaW9uOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1JldmlzaW9uJyxcblx0XHRcdGphOiAn54mIJyxcblx0XHRcdHpoOiAn54mI5pysJyxcblx0XHR9KSxcblx0fTtcbn07XG5cbmNvbnN0IGkxOG5NZXNzYWdlcyA9IGdldEkxOG5NZXNzYWdlcygpO1xuXG5jb25zdCBnZXRNZXNzYWdlOiBHZXRNZXNzYWdlczx0eXBlb2YgaTE4bk1lc3NhZ2VzPiA9IChrZXkpID0+IHtcblx0cmV0dXJuIGkxOG5NZXNzYWdlc1trZXldIHx8IGtleTtcbn07XG5cbmV4cG9ydCB7Z2V0TWVzc2FnZX07XG4iLCAiaW1wb3J0IFJlcG9ydEJ1dHRvbiBmcm9tICcuLi9jb21wb25lbnRzL1JlcG9ydEJ1dHRvbic7XG5pbXBvcnQge2NoYW5nZU9wYWNpdHlXaGVuTW91c2VFbnRlck9yTGVhdmV9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5pbXBvcnQge3RpcHB5fSBmcm9tICdleHQuZ2FkZ2V0LlRpcHB5JztcblxuY29uc3QgYWRkQnV0dG9uID0gKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50PiwgVVJMOiBzdHJpbmcpOiB2b2lkID0+IHtcblx0Y29uc3Qge3dnTmFtZXNwYWNlTnVtYmVyfSA9IG13LmNvbmZpZy5nZXQoKTtcblx0aWYgKHdnTmFtZXNwYWNlTnVtYmVyIDwgMCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IG9uTW91c2VFbnRlck1vdXNlTGVhdmUgPSAoZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkID0+IHtcblx0XHRjaGFuZ2VPcGFjaXR5V2hlbk1vdXNlRW50ZXJPckxlYXZlKGV2ZW50KTtcblx0fTtcblxuXHRjb25zdCByZXBvcnRCdXR0b24gPSBSZXBvcnRCdXR0b24oVVJMLCBvbk1vdXNlRW50ZXJNb3VzZUxlYXZlKTtcblxuXHR0aXBweShyZXBvcnRCdXR0b24sIHtcblx0XHRhcnJvdzogdHJ1ZSxcblx0XHRjb250ZW50OiByZXBvcnRCdXR0b24uZ2V0QXR0cmlidXRlKCdhbHQnKSBhcyBzdHJpbmcsXG5cdFx0cGxhY2VtZW50OiAnbGVmdCcsXG5cdH0pO1xuXG5cdCRib2R5LmFwcGVuZChyZXBvcnRCdXR0b24pO1xuXG5cdGNvbnN0IHNjcm9sbExpc3RlbmVyID0gKCk6IHZvaWQgPT4ge1xuXHRcdGxldCBidXR0b25Cb3R0b206IHN0cmluZztcblxuXHRcdGlmIChcblx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm92ZWl0JykgfHxcblx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYWRnZXQtY2F0X2FfbG90LWNvbnRhaW5lcicpIHx8XG5cdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZ2FkZ2V0LXdvcmRfY291bnQtdGlwJylcblx0XHQpIHtcblx0XHRcdGJ1dHRvbkJvdHRvbSA9ICcyNTNweCc7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGJ1dHRvbkJvdHRvbSA9ICcyMTFweCc7XG5cdFx0fVxuXG5cdFx0cmVwb3J0QnV0dG9uLnN0eWxlLmJvdHRvbSA9IGJ1dHRvbkJvdHRvbTtcblx0fTtcblx0Y29uc3Qgc2Nyb2xsTGlzdGVuZXJXaXRoVGhyb3R0bGU6IHR5cGVvZiBzY3JvbGxMaXN0ZW5lciA9IG13LnV0aWwudGhyb3R0bGUoc2Nyb2xsTGlzdGVuZXIsIDIwMCk7XG5cblx0JCh3aW5kb3cpLm9uKCdzY3JvbGwgc2VsZWN0aW9uY2hhbmdlJywgc2Nyb2xsTGlzdGVuZXJXaXRoVGhyb3R0bGUpO1xufTtcblxuZXhwb3J0IHthZGRCdXR0b259O1xuIiwgImltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9pMThuJztcblxuY29uc3QgYWRkUG9ydGxldExpbmsgPSAoVVJMOiBzdHJpbmcpOiB2b2lkID0+IHtcblx0Y29uc3Qge3dnTmFtZXNwYWNlTnVtYmVyfSA9IG13LmNvbmZpZy5nZXQoKTtcblx0aWYgKHdnTmFtZXNwYWNlTnVtYmVyIDwgMCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IGxpbmtUaWx0ZTogc3RyaW5nID0gZ2V0TWVzc2FnZSgnUmVwb3J0Jyk7XG5cdG13LnV0aWwuYWRkUG9ydGxldExpbmsoJ3AtdGInLCBVUkwsIGxpbmtUaWx0ZSwgJ3QtcmVwb3J0JywgbGlua1RpbHRlKTtcbn07XG5cbmV4cG9ydCB7YWRkUG9ydGxldExpbmt9O1xuIiwgImltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9pMThuJztcblxuY29uc3QgZmlsbFNwZWNpYWxQYWdlID0gKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQgPT4ge1xuXHRjb25zdCAkd3BTdWJqZWN0RWxlbWVudDogSlF1ZXJ5PEhUTUxJbnB1dEVsZW1lbnQ+ID0gJGJvZHkuZmluZDxIVE1MSW5wdXRFbGVtZW50PignaW5wdXRbbmFtZT1cIndwU3ViamVjdFwiXScpO1xuXHRpZiAoISR3cFN1YmplY3RFbGVtZW50Lmxlbmd0aCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IGlzQm9keUhhc0NsYXNzOiBib29sZWFuID1cblx0XHQkYm9keS5oYXNDbGFzcygncGFnZS1TcGVjaWFsX+iBlOezu19SZXBvcnQnKSB8fCAkYm9keS5oYXNDbGFzcygncGFnZS1TcGVjaWFsX+iBlOezu19yZXBvcnQnKTtcblx0aWYgKCFpc0JvZHlIYXNDbGFzcykge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0ICR3cFRpdGxlRWxlbWVudDogSlF1ZXJ5PEhUTUxJbnB1dEVsZW1lbnQ+ID0gJGJvZHkuZmluZDxIVE1MSW5wdXRFbGVtZW50PignaW5wdXRbbmFtZT1cIndwVGl0bGVcIl0nKTtcblxuXHRjb25zdCBsaW5rVGlsdGU6IHN0cmluZyA9IGdldE1lc3NhZ2UoJ1JlcG9ydCcpO1xuXHRjb25zdCByZXBvcnRSZXZpc2lvbjogc3RyaW5nID1cblx0XHRtdy51dGlsLmdldFBhcmFtVmFsdWUoJ3JlcG9ydF9yZXZpc2lvbicpIHx8IG13LnV0aWwuZ2V0UGFyYW1WYWx1ZSgncmVwb3J0cmV2aXNpb24nKSB8fCAnMCc7XG5cdGxldCByZXBvcnRUaXRsZTogc3RyaW5nID0gbXcudXRpbC5nZXRQYXJhbVZhbHVlKCdyZXBvcnRfdGl0bGUnKSB8fCBtdy51dGlsLmdldFBhcmFtVmFsdWUoJ3JlcG9ydHRpdGxlJykgfHwgJyc7XG5cdGlmIChyZXBvcnRSZXZpc2lvbiAhPT0gJzAnKSB7XG5cdFx0cmVwb3J0VGl0bGUgKz0gZ2V0TWVzc2FnZSgnKCcpICsgZ2V0TWVzc2FnZSgnUmV2aXNpb24nKSArIHJlcG9ydFJldmlzaW9uICsgZ2V0TWVzc2FnZSgnKScpO1xuXHR9XG5cblx0aWYgKHJlcG9ydFRpdGxlKSB7XG5cdFx0JHdwU3ViamVjdEVsZW1lbnQudmFsKGxpbmtUaWx0ZSArIGdldE1lc3NhZ2UoJzonKSArIHJlcG9ydFRpdGxlKTtcblx0XHQkd3BUaXRsZUVsZW1lbnQudmFsKHJlcG9ydFRpdGxlKTtcblx0fSBlbHNlIHtcblx0XHQkd3BTdWJqZWN0RWxlbWVudC52YWwobGlua1RpbHRlKTtcblx0fVxufTtcblxuZXhwb3J0IHtmaWxsU3BlY2lhbFBhZ2V9O1xuIiwgImltcG9ydCB7YWRkQnV0dG9ufSBmcm9tICcuL21vZHVsZXMvYWRkQnV0dG9uJztcbmltcG9ydCB7YWRkUG9ydGxldExpbmt9IGZyb20gJy4vbW9kdWxlcy9hZGRQb3J0bGV0TGluayc7XG5pbXBvcnQge2ZpbGxTcGVjaWFsUGFnZX0gZnJvbSAnLi9tb2R1bGVzL2ZpbGxTcGVjaWFsUGFnZSc7XG5pbXBvcnQge2dldEJvZHl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5pbXBvcnQge2dldFVSTH0gZnJvbSAnLi9tb2R1bGVzL2dldFVSTCc7XG5cbnZvaWQgZ2V0Qm9keSgpLnRoZW4oZnVuY3Rpb24gcmVwb3J0KCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQge1xuXHRjb25zdCBVUkw6IHN0cmluZyA9IGdldFVSTCgpO1xuXHRhZGRCdXR0b24oJGJvZHksIFVSTCk7XG5cdGFkZFBvcnRsZXRMaW5rKFVSTCk7XG5cdGZpbGxTcGVjaWFsUGFnZSgkYm9keSk7XG59KTtcbiIsICJjb25zdCBnZXRVUkwgPSAoKSA9PiB7XG5cdGNvbnN0IHt3Z0N1clJldmlzaW9uSWQsIHdnUGFnZU5hbWUsIHdnUmV2aXNpb25JZH0gPSBtdy5jb25maWcuZ2V0KCk7XG5cdGNvbnN0IFVSTDogc3RyaW5nID0gbXcudXRpbC5nZXRVcmwoJ1NwZWNpYWw6Q29udGFjdC9SZXBvcnQnLCB7XG5cdFx0cmVwb3J0dGl0bGU6IHdnUGFnZU5hbWUsXG5cdFx0cmVwb3J0cmV2aXNpb246ICh3Z1JldmlzaW9uSWQgfHwgd2dDdXJSZXZpc2lvbklkKS50b1N0cmluZygpLFxuXHR9KTtcblxuXHRyZXR1cm4gVVJMO1xufTtcblxuZXhwb3J0IHtnZXRVUkx9O1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsYUFBcUI7QUFDM0IsSUFBTUMsb0JBQUEsR0FBQUMsT0FBK0JGLFlBQVUsU0FBQTs7QUNBL0MsSUFBQUcscUJBQWtCQyxRQUFBQyxRQUFBLGdCQUFBLEdBQUEsQ0FBQTs7QUNEbEIsSUFBQUMsb0JBQXVCRCxRQUFBLGlCQUFBO0FBRXZCLElBQU1FLGtCQUFrQkEsTUFBTTtBQUM3QixTQUFPO0lBQ04sTUFBQSxHQUFLRCxrQkFBQUUsVUFBUztNQUNiQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtJQUNMLENBQUM7SUFDRCxNQUFBLEdBQUtMLGtCQUFBRSxVQUFTO01BQ2JDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO0lBQ0wsQ0FBQztJQUNELE1BQUEsR0FBS0wsa0JBQUFFLFVBQVM7TUFDYkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7SUFDTCxDQUFDO0lBQ0RDLFNBQUEsR0FBUU4sa0JBQUFFLFVBQVM7TUFDaEJDLElBQUk7TUFDSkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNERyxXQUFBLEdBQVVQLGtCQUFBRSxV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RyxNQUFJRCxtQkFBbUIsS0FBSztBQUMzQkUsbUJBQWU1RCxXQUFXLEdBQUcsSUFBSUEsV0FBVyxVQUFVLElBQUkwRCxpQkFBaUIxRCxXQUFXLEdBQUc7RUFDMUY7QUFFQSxNQUFJNEQsYUFBYTtBQUNoQlIsc0JBQWtCUyxJQUFJWCxZQUFZbEQsV0FBVyxHQUFHLElBQUk0RCxXQUFXO0FBQy9ESCxvQkFBZ0JJLElBQUlELFdBQVc7RUFDaEMsT0FBTztBQUNOUixzQkFBa0JTLElBQUlYLFNBQVM7RUFDaEM7QUFDRDs7QUMzQkEsSUFBQVkscUJBQXNCeEUsUUFBQSxpQkFBQTs7QUNIdEIsSUFBTXlFLFNBQVNBLE1BQU07QUFDcEIsUUFBTTtJQUFDQztJQUFpQkM7SUFBWUM7RUFBWSxJQUFJekMsR0FBR0MsT0FBT0MsSUFBSTtBQUNsRSxRQUFNdkIsTUFBY3FCLEdBQUdvQixLQUFLc0IsT0FBTywwQkFBMEI7SUFDNURDLGFBQWFIO0lBQ2JJLGlCQUFpQkgsZ0JBQWdCRixpQkFBaUJNLFNBQVM7RUFDNUQsQ0FBQztBQUVELFNBQU9sRTtBQUNSOztBREZBLE1BQUEsR0FBSzBELG1CQUFBUyxTQUFRLEVBQUVDLEtBQUssU0FBU0MsT0FBT2xELE9BQXNDO0FBQ3pFLFFBQU1uQixNQUFjMkQsT0FBTztBQUMzQnpDLFlBQVVDLE9BQU9uQixHQUFHO0FBQ3BCNkMsaUJBQWU3QyxHQUFHO0FBQ2xCK0Msa0JBQWdCNUIsS0FBSztBQUN0QixDQUFDOyIsCiAgIm5hbWVzIjogWyJDTEFTU19OQU1FIiwgIkNMQVNTX05BTUVfQlVUVE9OIiwgImNvbmNhdCIsICJpbXBvcnRfZXh0X2dhZGdldDIiLCAiX190b0VTTSIsICJyZXF1aXJlIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgImdldEkxOG5NZXNzYWdlcyIsICJsb2NhbGl6ZSIsICJlbiIsICJqYSIsICJ6aCIsICJSZXBvcnQiLCAiUmV2aXNpb24iLCAiaTE4bk1lc3NhZ2VzIiwgImdldE1lc3NhZ2UiLCAia2V5IiwgIkxJTktfVElUTEUiLCAiUmVwb3J0QnV0dG9uIiwgIlVSTCIsICJvbk1vdXNlRW50ZXJMZWF2ZSIsICJkZWZhdWx0IiwgImNyZWF0ZUVsZW1lbnQiLCAiY2xhc3NOYW1lIiwgInNyYyIsICJ3aWR0aCIsICJoZWlnaHQiLCAiZHJhZ2dhYmxlIiwgImFsdCIsICJvbkNsaWNrIiwgIndpbmRvdyIsICJvcGVuIiwgIm9uTW91c2VFbnRlciIsICJvbk1vdXNlTGVhdmUiLCAiUmVwb3J0QnV0dG9uX2RlZmF1bHQiLCAiaW1wb3J0X2V4dF9nYWRnZXQzIiwgImltcG9ydF9leHRfZ2FkZ2V0NCIsICJhZGRCdXR0b24iLCAiJGJvZHkiLCAid2dOYW1lc3BhY2VOdW1iZXIiLCAibXciLCAiY29uZmlnIiwgImdldCIsICJvbk1vdXNlRW50ZXJNb3VzZUxlYXZlIiwgImV2ZW50IiwgImNoYW5nZU9wYWNpdHlXaGVuTW91c2VFbnRlck9yTGVhdmUiLCAicmVwb3J0QnV0dG9uIiwgInRpcHB5IiwgImFycm93IiwgImNvbnRlbnQiLCAiZ2V0QXR0cmlidXRlIiwgInBsYWNlbWVudCIsICJhcHBlbmQiLCAic2Nyb2xsTGlzdGVuZXIiLCAiYnV0dG9uQm90dG9tIiwgImRvY3VtZW50IiwgInF1ZXJ5U2VsZWN0b3IiLCAic3R5bGUiLCAiYm90dG9tIiwgInNjcm9sbExpc3RlbmVyV2l0aFRocm90dGxlIiwgInV0aWwiLCAidGhyb3R0bGUiLCAiJCIsICJvbiIsICJhZGRQb3J0bGV0TGluayIsICJsaW5rVGlsdGUiLCAiZmlsbFNwZWNpYWxQYWdlIiwgIiR3cFN1YmplY3RFbGVtZW50IiwgImZpbmQiLCAibGVuZ3RoIiwgImlzQm9keUhhc0NsYXNzIiwgImhhc0NsYXNzIiwgIiR3cFRpdGxlRWxlbWVudCIsICJyZXBvcnRSZXZpc2lvbiIsICJnZXRQYXJhbVZhbHVlIiwgInJlcG9ydFRpdGxlIiwgInZhbCIsICJpbXBvcnRfZXh0X2dhZGdldDUiLCAiZ2V0VVJMIiwgIndnQ3VyUmV2aXNpb25JZCIsICJ3Z1BhZ2VOYW1lIiwgIndnUmV2aXNpb25JZCIsICJnZXRVcmwiLCAicmVwb3J0dGl0bGUiLCAicmVwb3J0cmV2aXNpb24iLCAidG9TdHJpbmciLCAiZ2V0Qm9keSIsICJ0aGVuIiwgInJlcG9ydCJdCn0K

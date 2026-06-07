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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1JlcG9ydC9tb2R1bGVzL2NvbnN0YW50LnRzIiwgInNyYy9SZXBvcnQvY29tcG9uZW50cy9SZXBvcnRCdXR0b24udHN4IiwgInNyYy9SZXBvcnQvbW9kdWxlcy9pMThuLnRzIiwgInNyYy9SZXBvcnQvbW9kdWxlcy9hZGRCdXR0b24udHMiLCAic3JjL1JlcG9ydC9tb2R1bGVzL2FkZFBvcnRsZXRMaW5rLnRzIiwgInNyYy9SZXBvcnQvbW9kdWxlcy9maWxsU3BlY2lhbFBhZ2UudHMiLCAic3JjL1JlcG9ydC9SZXBvcnQudHMiLCAic3JjL1JlcG9ydC9tb2R1bGVzL2dldFVSTC50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgQ0xBU1NfTkFNRTogc3RyaW5nID0gJ2dhZGdldC1yZXBvcnQnO1xuY29uc3QgQ0xBU1NfTkFNRV9CVVRUT046IHN0cmluZyA9IGAke0NMQVNTX05BTUV9LWJ1dHRvbmA7XG5cbmV4cG9ydCB7Q0xBU1NfTkFNRV9CVVRUT059O1xuIiwgImltcG9ydCB7Q0xBU1NfTkFNRV9CVVRUT059IGZyb20gJy4uL21vZHVsZXMvY29uc3RhbnQnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ2V4dC5nYWRnZXQuSlNYJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi4vbW9kdWxlcy9pMThuJztcblxuY29uc3QgTElOS19USVRMRTogc3RyaW5nID0gZ2V0TWVzc2FnZSgnUmVwb3J0Jyk7XG5cbmNvbnN0IFJlcG9ydEJ1dHRvbiA9IChVUkw6IHN0cmluZywgb25Nb3VzZUVudGVyTGVhdmU6IChldmVudDogTW91c2VFdmVudCkgPT4gdm9pZCkgPT4gKFxuXHQ8aW1nXG5cdFx0Y2xhc3NOYW1lPXtbQ0xBU1NfTkFNRV9CVVRUT04sICdub3ByaW50J119XG5cdFx0c3JjPVwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxJyBoZWlnaHQ9JzEnJTNFJTNDL3N2ZyUzRVwiXG5cdFx0d2lkdGg9XCIzMlwiXG5cdFx0aGVpZ2h0PVwiMzJcIlxuXHRcdGRyYWdnYWJsZT17ZmFsc2V9XG5cdFx0YWx0PXtMSU5LX1RJVExFfVxuXHRcdGFyaWEtbGFiZWw9e0xJTktfVElUTEV9XG5cdFx0b25DbGljaz17KCk6IHZvaWQgPT4ge1xuXHRcdFx0d2luZG93Lm9wZW4oVVJMLCAnX2JsYW5rJywgJ25vb3BlbmVyLG5vcmVmZXJyZXInKTtcblx0XHR9fVxuXHRcdG9uTW91c2VFbnRlcj17b25Nb3VzZUVudGVyTGVhdmV9XG5cdFx0b25Nb3VzZUxlYXZlPXtvbk1vdXNlRW50ZXJMZWF2ZX1cblx0Lz5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IFJlcG9ydEJ1dHRvbjtcbiIsICJpbXBvcnQge2xvY2FsaXplfSBmcm9tICdleHQuZ2FkZ2V0LmkxOG4nO1xuXG5jb25zdCBnZXRJMThuTWVzc2FnZXMgPSAoKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0JzonOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJzogJyxcblx0XHRcdGphOiAn77yaJyxcblx0XHRcdHpoOiAn77yaJyxcblx0XHR9KSxcblx0XHQnKCc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnKCcsXG5cdFx0XHRqYTogJ++8iCcsXG5cdFx0XHR6aDogJ++8iCcsXG5cdFx0fSksXG5cdFx0JyknOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJyknLFxuXHRcdFx0amE6ICfvvIknLFxuXHRcdFx0emg6ICfvvIknLFxuXHRcdH0pLFxuXHRcdFJlcG9ydDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdSZXBvcnQgdGhpcyBwYWdlJyxcblx0XHRcdGphOiAn44GT44Gu44Oa44O844K444KS5aCx5ZGKJyxcblx0XHRcdCd6aC1oYW5zJzogJ+aKpeWRiuS4jeiJr+S/oeaBrycsXG5cdFx0XHQnemgtaGFudCc6ICfloLHlkYrkuI3oia/os4foqIonLFxuXHRcdH0pLFxuXHRcdFJldmlzaW9uOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1JldmlzaW9uJyxcblx0XHRcdGphOiAn54mIJyxcblx0XHRcdHpoOiAn54mI5pysJyxcblx0XHR9KSxcblx0fTtcbn07XG5cbmNvbnN0IGkxOG5NZXNzYWdlcyA9IGdldEkxOG5NZXNzYWdlcygpO1xuXG5jb25zdCBnZXRNZXNzYWdlOiBHZXRNZXNzYWdlczx0eXBlb2YgaTE4bk1lc3NhZ2VzPiA9IChrZXkpID0+IHtcblx0cmV0dXJuIGkxOG5NZXNzYWdlc1trZXldIHx8IGtleTtcbn07XG5cbmV4cG9ydCB7Z2V0TWVzc2FnZX07XG4iLCAiaW1wb3J0IFJlcG9ydEJ1dHRvbiBmcm9tICcuLi9jb21wb25lbnRzL1JlcG9ydEJ1dHRvbic7XG5pbXBvcnQge2NoYW5nZU9wYWNpdHlXaGVuTW91c2VFbnRlck9yTGVhdmV9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5pbXBvcnQge3RpcHB5fSBmcm9tICdleHQuZ2FkZ2V0LlRpcHB5JztcblxuY29uc3QgYWRkQnV0dG9uID0gKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50PiwgVVJMOiBzdHJpbmcpOiB2b2lkID0+IHtcblx0Y29uc3Qge3dnTmFtZXNwYWNlTnVtYmVyfSA9IG13LmNvbmZpZy5nZXQoKTtcblx0aWYgKHdnTmFtZXNwYWNlTnVtYmVyIDwgMCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IG9uTW91c2VFbnRlck1vdXNlTGVhdmUgPSAoZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkID0+IHtcblx0XHRjaGFuZ2VPcGFjaXR5V2hlbk1vdXNlRW50ZXJPckxlYXZlKGV2ZW50KTtcblx0fTtcblxuXHRjb25zdCByZXBvcnRCdXR0b24gPSBSZXBvcnRCdXR0b24oVVJMLCBvbk1vdXNlRW50ZXJNb3VzZUxlYXZlKTtcblxuXHR0aXBweShyZXBvcnRCdXR0b24sIHtcblx0XHRhcnJvdzogdHJ1ZSxcblx0XHRjb250ZW50OiByZXBvcnRCdXR0b24uZ2V0QXR0cmlidXRlKCdhbHQnKSBhcyBzdHJpbmcsXG5cdFx0cGxhY2VtZW50OiAnbGVmdCcsXG5cdH0pO1xuXG5cdCRib2R5LmFwcGVuZChyZXBvcnRCdXR0b24pO1xuXG5cdGNvbnN0IHNjcm9sbExpc3RlbmVyID0gKCk6IHZvaWQgPT4ge1xuXHRcdGxldCBidXR0b25Cb3R0b206IHN0cmluZztcblxuXHRcdGlmIChcblx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm92ZWl0JykgfHxcblx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYWRnZXQtY2F0X2FfbG90LWNvbnRhaW5lcicpIHx8XG5cdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZ2FkZ2V0LXdvcmRfY291bnQtdGlwJylcblx0XHQpIHtcblx0XHRcdGJ1dHRvbkJvdHRvbSA9ICcyNTNweCc7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGJ1dHRvbkJvdHRvbSA9ICcyMTFweCc7XG5cdFx0fVxuXG5cdFx0cmVwb3J0QnV0dG9uLnN0eWxlLmJvdHRvbSA9IGJ1dHRvbkJvdHRvbTtcblx0fTtcblx0Y29uc3Qgc2Nyb2xsTGlzdGVuZXJXaXRoVGhyb3R0bGU6IHR5cGVvZiBzY3JvbGxMaXN0ZW5lciA9IG13LnV0aWwudGhyb3R0bGUoc2Nyb2xsTGlzdGVuZXIsIDIwMCk7XG5cblx0JCh3aW5kb3cpLm9uKCdzY3JvbGwgc2VsZWN0aW9uY2hhbmdlJywgc2Nyb2xsTGlzdGVuZXJXaXRoVGhyb3R0bGUpO1xufTtcblxuZXhwb3J0IHthZGRCdXR0b259O1xuIiwgImltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9pMThuJztcblxuY29uc3QgYWRkUG9ydGxldExpbmsgPSAoVVJMOiBzdHJpbmcpOiB2b2lkID0+IHtcblx0Y29uc3Qge3dnTmFtZXNwYWNlTnVtYmVyfSA9IG13LmNvbmZpZy5nZXQoKTtcblx0aWYgKHdnTmFtZXNwYWNlTnVtYmVyIDwgMCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IGxpbmtUaWx0ZTogc3RyaW5nID0gZ2V0TWVzc2FnZSgnUmVwb3J0Jyk7XG5cdG13LnV0aWwuYWRkUG9ydGxldExpbmsoJ3AtdGInLCBVUkwsIGxpbmtUaWx0ZSwgJ3QtcmVwb3J0JywgbGlua1RpbHRlKTtcbn07XG5cbmV4cG9ydCB7YWRkUG9ydGxldExpbmt9O1xuIiwgImltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9pMThuJztcblxuY29uc3QgZmlsbFNwZWNpYWxQYWdlID0gKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQgPT4ge1xuXHRjb25zdCAkd3BTdWJqZWN0RWxlbWVudDogSlF1ZXJ5PEhUTUxJbnB1dEVsZW1lbnQ+ID0gJGJvZHkuZmluZDxIVE1MSW5wdXRFbGVtZW50PignaW5wdXRbbmFtZT1cIndwU3ViamVjdFwiXScpO1xuXHRpZiAoISR3cFN1YmplY3RFbGVtZW50Lmxlbmd0aCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IGlzQm9keUhhc0NsYXNzOiBib29sZWFuID1cblx0XHQkYm9keS5oYXNDbGFzcygncGFnZS1TcGVjaWFsX+iBlOezu19SZXBvcnQnKSB8fCAkYm9keS5oYXNDbGFzcygncGFnZS1TcGVjaWFsX+iBlOezu19yZXBvcnQnKTtcblx0aWYgKCFpc0JvZHlIYXNDbGFzcykge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0ICR3cFRpdGxlRWxlbWVudDogSlF1ZXJ5PEhUTUxJbnB1dEVsZW1lbnQ+ID0gJGJvZHkuZmluZDxIVE1MSW5wdXRFbGVtZW50PignaW5wdXRbbmFtZT1cIndwVGl0bGVcIl0nKTtcblxuXHRjb25zdCBsaW5rVGlsdGU6IHN0cmluZyA9IGdldE1lc3NhZ2UoJ1JlcG9ydCcpO1xuXHRjb25zdCByZXBvcnRSZXZpc2lvbjogc3RyaW5nID1cblx0XHRtdy51dGlsLmdldFBhcmFtVmFsdWUoJ3JlcG9ydF9yZXZpc2lvbicpIHx8IG13LnV0aWwuZ2V0UGFyYW1WYWx1ZSgncmVwb3J0cmV2aXNpb24nKSB8fCAnMCc7XG5cdGxldCByZXBvcnRUaXRsZTogc3RyaW5nID0gbXcudXRpbC5nZXRQYXJhbVZhbHVlKCdyZXBvcnRfdGl0bGUnKSB8fCBtdy51dGlsLmdldFBhcmFtVmFsdWUoJ3JlcG9ydHRpdGxlJykgfHwgJyc7XG5cdGlmIChyZXBvcnRSZXZpc2lvbiAhPT0gJzAnKSB7XG5cdFx0cmVwb3J0VGl0bGUgKz0gZ2V0TWVzc2FnZSgnKCcpICsgZ2V0TWVzc2FnZSgnUmV2aXNpb24nKSArIHJlcG9ydFJldmlzaW9uICsgZ2V0TWVzc2FnZSgnKScpO1xuXHR9XG5cblx0aWYgKHJlcG9ydFRpdGxlKSB7XG5cdFx0JHdwU3ViamVjdEVsZW1lbnQudmFsKGxpbmtUaWx0ZSArIGdldE1lc3NhZ2UoJzonKSArIHJlcG9ydFRpdGxlKTtcblx0XHQkd3BUaXRsZUVsZW1lbnQudmFsKHJlcG9ydFRpdGxlKTtcblx0fSBlbHNlIHtcblx0XHQkd3BTdWJqZWN0RWxlbWVudC52YWwobGlua1RpbHRlKTtcblx0fVxufTtcblxuZXhwb3J0IHtmaWxsU3BlY2lhbFBhZ2V9O1xuIiwgImltcG9ydCB7YWRkQnV0dG9ufSBmcm9tICcuL21vZHVsZXMvYWRkQnV0dG9uJztcbmltcG9ydCB7YWRkUG9ydGxldExpbmt9IGZyb20gJy4vbW9kdWxlcy9hZGRQb3J0bGV0TGluayc7XG5pbXBvcnQge2ZpbGxTcGVjaWFsUGFnZX0gZnJvbSAnLi9tb2R1bGVzL2ZpbGxTcGVjaWFsUGFnZSc7XG5pbXBvcnQge2dldEJvZHl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5pbXBvcnQge2dldFVSTH0gZnJvbSAnLi9tb2R1bGVzL2dldFVSTCc7XG5cbnZvaWQgZ2V0Qm9keSgpLnRoZW4oZnVuY3Rpb24gcmVwb3J0KCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQge1xuXHRjb25zdCBVUkw6IHN0cmluZyA9IGdldFVSTCgpO1xuXHRhZGRCdXR0b24oJGJvZHksIFVSTCk7XG5cdGFkZFBvcnRsZXRMaW5rKFVSTCk7XG5cdGZpbGxTcGVjaWFsUGFnZSgkYm9keSk7XG59KTtcbiIsICJjb25zdCBnZXRVUkwgPSAoKTogc3RyaW5nID0+IHtcblx0Y29uc3Qge3dnQ3VyUmV2aXNpb25JZCwgd2dQYWdlTmFtZSwgd2dSZXZpc2lvbklkfSA9IG13LmNvbmZpZy5nZXQoKTtcblx0Y29uc3QgVVJMOiBzdHJpbmcgPSBtdy51dGlsLmdldFVybCgnU3BlY2lhbDpDb250YWN0L1JlcG9ydCcsIHtcblx0XHRyZXBvcnR0aXRsZTogd2dQYWdlTmFtZSxcblx0XHRyZXBvcnRyZXZpc2lvbjogKHdnUmV2aXNpb25JZCB8fCB3Z0N1clJldmlzaW9uSWQpLnRvU3RyaW5nKCksXG5cdH0pO1xuXG5cdHJldHVybiBVUkw7XG59O1xuXG5leHBvcnQge2dldFVSTH07XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFNQSxhQUFxQjtBQUMzQixJQUFNQyxvQkFBQSxHQUFBQyxPQUErQkYsWUFBVSxTQUFBOztBQ0EvQyxJQUFBRyxxQkFBa0JDLFFBQUFDLFFBQUEsZ0JBQUEsR0FBQSxDQUFBOztBQ0RsQixJQUFBQyxvQkFBdUJELFFBQUEsaUJBQUE7QUFFdkIsSUFBTUUsa0JBQWtCQSxNQUFNO0FBQzdCLFNBQU87SUFDTixNQUFBLEdBQUtELGtCQUFBRSxVQUFTO01BQ2JDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO0lBQ0wsQ0FBQztJQUNELE1BQUEsR0FBS0wsa0JBQUFFLFVBQVM7TUFDYkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7SUFDTCxDQUFDO0lBQ0QsTUFBQSxHQUFLTCxrQkFBQUUsVUFBUztNQUNiQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtJQUNMLENBQUM7SUFDREMsU0FBQSxHQUFRTixrQkFBQUUsVUFBUztNQUNoQkMsSUFBSTtNQUNKQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0RHLFdBQUEsR0FBVVAs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QUFLO0FBQzNHLE1BQUlELG1CQUFtQixLQUFLO0FBQzNCRSxtQkFBZTVELFdBQVcsR0FBRyxJQUFJQSxXQUFXLFVBQVUsSUFBSTBELGlCQUFpQjFELFdBQVcsR0FBRztFQUMxRjtBQUVBLE1BQUk0RCxhQUFhO0FBQ2hCUixzQkFBa0JTLElBQUlYLFlBQVlsRCxXQUFXLEdBQUcsSUFBSTRELFdBQVc7QUFDL0RILG9CQUFnQkksSUFBSUQsV0FBVztFQUNoQyxPQUFPO0FBQ05SLHNCQUFrQlMsSUFBSVgsU0FBUztFQUNoQztBQUNEOztBQzNCQSxJQUFBWSxxQkFBc0J4RSxRQUFBLGlCQUFBOztBQ0h0QixJQUFNeUUsU0FBU0EsTUFBYztBQUM1QixRQUFNO0lBQUNDO0lBQWlCQztJQUFZQztFQUFZLElBQUl6QyxHQUFHQyxPQUFPQyxJQUFJO0FBQ2xFLFFBQU12QixNQUFjcUIsR0FBR29CLEtBQUtzQixPQUFPLDBCQUEwQjtJQUM1REMsYUFBYUg7SUFDYkksaUJBQWlCSCxnQkFBZ0JGLGlCQUFpQk0sU0FBUztFQUM1RCxDQUFDO0FBRUQsU0FBT2xFO0FBQ1I7O0FERkEsTUFBQSxHQUFLMEQsbUJBQUFTLFNBQVEsRUFBRUMsS0FBSyxTQUFTQyxPQUFPbEQsT0FBc0M7QUFDekUsUUFBTW5CLE1BQWMyRCxPQUFPO0FBQzNCekMsWUFBVUMsT0FBT25CLEdBQUc7QUFDcEI2QyxpQkFBZTdDLEdBQUc7QUFDbEIrQyxrQkFBZ0I1QixLQUFLO0FBQ3RCLENBQUM7IiwKICAibmFtZXMiOiBbIkNMQVNTX05BTUUiLCAiQ0xBU1NfTkFNRV9CVVRUT04iLCAiY29uY2F0IiwgImltcG9ydF9leHRfZ2FkZ2V0MiIsICJfX3RvRVNNIiwgInJlcXVpcmUiLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAiZ2V0STE4bk1lc3NhZ2VzIiwgImxvY2FsaXplIiwgImVuIiwgImphIiwgInpoIiwgIlJlcG9ydCIsICJSZXZpc2lvbiIsICJpMThuTWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAiTElOS19USVRMRSIsICJSZXBvcnRCdXR0b24iLCAiVVJMIiwgIm9uTW91c2VFbnRlckxlYXZlIiwgImRlZmF1bHQiLCAiY3JlYXRlRWxlbWVudCIsICJjbGFzc05hbWUiLCAic3JjIiwgIndpZHRoIiwgImhlaWdodCIsICJkcmFnZ2FibGUiLCAiYWx0IiwgIm9uQ2xpY2siLCAid2luZG93IiwgIm9wZW4iLCAib25Nb3VzZUVudGVyIiwgIm9uTW91c2VMZWF2ZSIsICJSZXBvcnRCdXR0b25fZGVmYXVsdCIsICJpbXBvcnRfZXh0X2dhZGdldDMiLCAiaW1wb3J0X2V4dF9nYWRnZXQ0IiwgImFkZEJ1dHRvbiIsICIkYm9keSIsICJ3Z05hbWVzcGFjZU51bWJlciIsICJtdyIsICJjb25maWciLCAiZ2V0IiwgIm9uTW91c2VFbnRlck1vdXNlTGVhdmUiLCAiZXZlbnQiLCAiY2hhbmdlT3BhY2l0eVdoZW5Nb3VzZUVudGVyT3JMZWF2ZSIsICJyZXBvcnRCdXR0b24iLCAidGlwcHkiLCAiYXJyb3ciLCAiY29udGVudCIsICJnZXRBdHRyaWJ1dGUiLCAicGxhY2VtZW50IiwgImFwcGVuZCIsICJzY3JvbGxMaXN0ZW5lciIsICJidXR0b25Cb3R0b20iLCAiZG9jdW1lbnQiLCAicXVlcnlTZWxlY3RvciIsICJzdHlsZSIsICJib3R0b20iLCAic2Nyb2xsTGlzdGVuZXJXaXRoVGhyb3R0bGUiLCAidXRpbCIsICJ0aHJvdHRsZSIsICIkIiwgIm9uIiwgImFkZFBvcnRsZXRMaW5rIiwgImxpbmtUaWx0ZSIsICJmaWxsU3BlY2lhbFBhZ2UiLCAiJHdwU3ViamVjdEVsZW1lbnQiLCAiZmluZCIsICJsZW5ndGgiLCAiaXNCb2R5SGFzQ2xhc3MiLCAiaGFzQ2xhc3MiLCAiJHdwVGl0bGVFbGVtZW50IiwgInJlcG9ydFJldmlzaW9uIiwgImdldFBhcmFtVmFsdWUiLCAicmVwb3J0VGl0bGUiLCAidmFsIiwgImltcG9ydF9leHRfZ2FkZ2V0NSIsICJnZXRVUkwiLCAid2dDdXJSZXZpc2lvbklkIiwgIndnUGFnZU5hbWUiLCAid2dSZXZpc2lvbklkIiwgImdldFVybCIsICJyZXBvcnR0aXRsZSIsICJyZXBvcnRyZXZpc2lvbiIsICJ0b1N0cmluZyIsICJnZXRCb2R5IiwgInRoZW4iLCAicmVwb3J0Il0KfQo=

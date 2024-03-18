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
var ReportButton = (URL) => /* @__PURE__ */ import_ext_gadget2.default.createElement("img", {
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
  const reportButton = ReportButton_default(URL);
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1JlcG9ydC9tb2R1bGVzL2NvbnN0YW50LnRzIiwgInNyYy9SZXBvcnQvY29tcG9uZW50cy9SZXBvcnRCdXR0b24udHN4IiwgInNyYy9SZXBvcnQvbW9kdWxlcy9pMThuLnRzIiwgInNyYy9SZXBvcnQvbW9kdWxlcy9hZGRCdXR0b24udHMiLCAic3JjL1JlcG9ydC9tb2R1bGVzL2FkZFBvcnRsZXRMaW5rLnRzIiwgInNyYy9SZXBvcnQvbW9kdWxlcy9maWxsU3BlY2lhbFBhZ2UudHMiLCAic3JjL1JlcG9ydC9SZXBvcnQudHMiLCAic3JjL1JlcG9ydC9tb2R1bGVzL2dldFVSTC50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgQ0xBU1NfTkFNRTogc3RyaW5nID0gJ2dhZGdldC1yZXBvcnQnO1xuY29uc3QgQ0xBU1NfTkFNRV9CVVRUT046IHN0cmluZyA9IGAke0NMQVNTX05BTUV9LWJ1dHRvbmA7XG5cbmV4cG9ydCB7Q0xBU1NfTkFNRV9CVVRUT059O1xuIiwgImltcG9ydCB7Q0xBU1NfTkFNRV9CVVRUT059IGZyb20gJy4uL21vZHVsZXMvY29uc3RhbnQnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ2V4dC5nYWRnZXQuUmVhY3QnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuLi9tb2R1bGVzL2kxOG4nO1xuXG5jb25zdCBMSU5LX1RJVExFOiBzdHJpbmcgPSBnZXRNZXNzYWdlKCdSZXBvcnQnKTtcblxuY29uc3QgUmVwb3J0QnV0dG9uID0gKFVSTDogc3RyaW5nKSA9PiAoXG5cdDxpbWdcblx0XHRjbGFzc05hbWU9e1tDTEFTU19OQU1FX0JVVFRPTiwgJ25vcHJpbnQnXX1cblx0XHRzcmM9XCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzEnIGhlaWdodD0nMSclM0UlM0Mvc3ZnJTNFXCJcblx0XHR3aWR0aD1cIjMyXCJcblx0XHRoZWlnaHQ9XCIzMlwiXG5cdFx0ZHJhZ2dhYmxlPXtmYWxzZX1cblx0XHRhbHQ9e0xJTktfVElUTEV9XG5cdFx0YXJpYS1sYWJlbD17TElOS19USVRMRX1cblx0XHRvbkNsaWNrPXsoKTogdm9pZCA9PiB7XG5cdFx0XHR3aW5kb3cub3BlbihVUkwsICdfYmxhbmsnLCAnbm9vcGVuZXIsbm9yZWZlcnJlcicpO1xuXHRcdH19XG5cdC8+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBSZXBvcnRCdXR0b247XG4iLCAiaW1wb3J0IHtsb2NhbGl6ZX0gZnJvbSAnZXh0LmdhZGdldC5pMThuJztcblxuY29uc3QgZ2V0STE4bk1lc3NhZ2VzID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdCc6JzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICc6ICcsXG5cdFx0XHRqYTogJ++8micsXG5cdFx0XHR6aDogJ++8micsXG5cdFx0fSksXG5cdFx0JygnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJygnLFxuXHRcdFx0amE6ICfvvIgnLFxuXHRcdFx0emg6ICfvvIgnLFxuXHRcdH0pLFxuXHRcdCcpJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICcpJyxcblx0XHRcdGphOiAn77yJJyxcblx0XHRcdHpoOiAn77yJJyxcblx0XHR9KSxcblx0XHRSZXBvcnQ6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnUmVwb3J0IHRoaXMgcGFnZScsXG5cdFx0XHRqYTogJ+OBk+OBruODmuODvOOCuOOCkuWgseWRiicsXG5cdFx0XHQnemgtaGFucyc6ICfmiqXlkYrkuI3oia/kv6Hmga8nLFxuXHRcdFx0J3poLWhhbnQnOiAn5aCx5ZGK5LiN6Imv6LOH6KiKJyxcblx0XHR9KSxcblx0XHRSZXZpc2lvbjogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdSZXZpc2lvbicsXG5cdFx0XHRqYTogJ+eJiCcsXG5cdFx0XHR6aDogJ+eJiOacrCcsXG5cdFx0fSksXG5cdH07XG59O1xuXG5jb25zdCBpMThuTWVzc2FnZXMgPSBnZXRJMThuTWVzc2FnZXMoKTtcblxuY29uc3QgZ2V0TWVzc2FnZTogR2V0TWVzc2FnZXM8dHlwZW9mIGkxOG5NZXNzYWdlcz4gPSAoa2V5KSA9PiB7XG5cdHJldHVybiBpMThuTWVzc2FnZXNba2V5XSB8fCBrZXk7XG59O1xuXG5leHBvcnQge2dldE1lc3NhZ2V9O1xuIiwgImltcG9ydCBSZXBvcnRCdXR0b24gZnJvbSAnLi4vY29tcG9uZW50cy9SZXBvcnRCdXR0b24nO1xuaW1wb3J0IHtjaGFuZ2VPcGFjaXR5V2hlbk1vdXNlRW50ZXJPckxlYXZlfSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuaW1wb3J0IHt0aXBweX0gZnJvbSAnZXh0LmdhZGdldC5UaXBweSc7XG5cbmNvbnN0IGFkZEJ1dHRvbiA9ICgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4sIFVSTDogc3RyaW5nKTogdm9pZCA9PiB7XG5cdGNvbnN0IHt3Z05hbWVzcGFjZU51bWJlcn0gPSBtdy5jb25maWcuZ2V0KCk7XG5cdGlmICh3Z05hbWVzcGFjZU51bWJlciA8IDApIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBvbk1vdXNlRW50ZXJNb3VzZUxlYXZlID0gKGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCA9PiB7XG5cdFx0Y2hhbmdlT3BhY2l0eVdoZW5Nb3VzZUVudGVyT3JMZWF2ZShldmVudCk7XG5cdH07XG5cblx0Y29uc3QgcmVwb3J0QnV0dG9uID0gUmVwb3J0QnV0dG9uKFVSTCkgYXMgSFRNTEVsZW1lbnQ7XG5cblx0Zm9yIChjb25zdCBldmVudCBvZiBbJ21vdXNlZW50ZXInLCAnbW91c2VsZWF2ZSddIGFzIGNvbnN0KSB7XG5cdFx0cmVwb3J0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIG9uTW91c2VFbnRlck1vdXNlTGVhdmUpO1xuXHR9XG5cblx0dGlwcHkocmVwb3J0QnV0dG9uLCB7XG5cdFx0YXJyb3c6IHRydWUsXG5cdFx0Y29udGVudDogcmVwb3J0QnV0dG9uLmdldEF0dHJpYnV0ZSgnYWx0JykgYXMgc3RyaW5nLFxuXHRcdHBsYWNlbWVudDogJ2xlZnQnLFxuXHR9KTtcblxuXHQkYm9keS5hcHBlbmQocmVwb3J0QnV0dG9uKTtcblxuXHRjb25zdCBzY3JvbGxMaXN0ZW5lciA9ICgpOiB2b2lkID0+IHtcblx0XHRsZXQgYnV0dG9uQm90dG9tOiBzdHJpbmc7XG5cblx0XHRpZiAoXG5cdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvdmVpdCcpIHx8XG5cdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FkZ2V0LWNhdF9hX2xvdC1jb250YWluZXInKSB8fFxuXHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2dhZGdldC13b3JkX2NvdW50LXRpcCcpXG5cdFx0KSB7XG5cdFx0XHRidXR0b25Cb3R0b20gPSAnMjUzcHgnO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRidXR0b25Cb3R0b20gPSAnMjExcHgnO1xuXHRcdH1cblxuXHRcdHJlcG9ydEJ1dHRvbi5zdHlsZS5ib3R0b20gPSBidXR0b25Cb3R0b207XG5cdH07XG5cdGNvbnN0IHNjcm9sbExpc3RlbmVyV2l0aFRocm90dGxlOiB0eXBlb2Ygc2Nyb2xsTGlzdGVuZXIgPSBtdy51dGlsLnRocm90dGxlKHNjcm9sbExpc3RlbmVyLCAyMDApO1xuXG5cdCQod2luZG93KS5vbignc2Nyb2xsIHNlbGVjdGlvbmNoYW5nZScsIHNjcm9sbExpc3RlbmVyV2l0aFRocm90dGxlKTtcbn07XG5cbmV4cG9ydCB7YWRkQnV0dG9ufTtcbiIsICJpbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vaTE4bic7XG5cbmNvbnN0IGFkZFBvcnRsZXRMaW5rID0gKFVSTDogc3RyaW5nKTogdm9pZCA9PiB7XG5cdGNvbnN0IHt3Z05hbWVzcGFjZU51bWJlcn0gPSBtdy5jb25maWcuZ2V0KCk7XG5cdGlmICh3Z05hbWVzcGFjZU51bWJlciA8IDApIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBsaW5rVGlsdGU6IHN0cmluZyA9IGdldE1lc3NhZ2UoJ1JlcG9ydCcpO1xuXHRtdy51dGlsLmFkZFBvcnRsZXRMaW5rKCdwLXRiJywgVVJMLCBsaW5rVGlsdGUsICd0LXJlcG9ydCcsIGxpbmtUaWx0ZSk7XG59O1xuXG5leHBvcnQge2FkZFBvcnRsZXRMaW5rfTtcbiIsICJpbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vaTE4bic7XG5cbmNvbnN0IGZpbGxTcGVjaWFsUGFnZSA9ICgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkID0+IHtcblx0Y29uc3QgJHdwU3ViamVjdEVsZW1lbnQ6IEpRdWVyeTxIVE1MSW5wdXRFbGVtZW50PiA9ICRib2R5LmZpbmQ8SFRNTElucHV0RWxlbWVudD4oJ2lucHV0W25hbWU9XCJ3cFN1YmplY3RcIl0nKTtcblx0aWYgKCEkd3BTdWJqZWN0RWxlbWVudC5sZW5ndGgpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBpc0JvZHlIYXNDbGFzczogYm9vbGVhbiA9XG5cdFx0JGJvZHkuaGFzQ2xhc3MoJ3BhZ2UtU3BlY2lhbF/ogZTns7tfUmVwb3J0JykgfHwgJGJvZHkuaGFzQ2xhc3MoJ3BhZ2UtU3BlY2lhbF/ogZTns7tfcmVwb3J0Jyk7XG5cdGlmICghaXNCb2R5SGFzQ2xhc3MpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCAkd3BUaXRsZUVsZW1lbnQ6IEpRdWVyeTxIVE1MSW5wdXRFbGVtZW50PiA9ICRib2R5LmZpbmQ8SFRNTElucHV0RWxlbWVudD4oJ2lucHV0W25hbWU9XCJ3cFRpdGxlXCJdJyk7XG5cblx0Y29uc3QgbGlua1RpbHRlOiBzdHJpbmcgPSBnZXRNZXNzYWdlKCdSZXBvcnQnKTtcblx0Y29uc3QgcmVwb3J0UmV2aXNpb246IHN0cmluZyA9XG5cdFx0bXcudXRpbC5nZXRQYXJhbVZhbHVlKCdyZXBvcnRfcmV2aXNpb24nKSB8fCBtdy51dGlsLmdldFBhcmFtVmFsdWUoJ3JlcG9ydHJldmlzaW9uJykgfHwgJzAnO1xuXHRsZXQgcmVwb3J0VGl0bGU6IHN0cmluZyA9IG13LnV0aWwuZ2V0UGFyYW1WYWx1ZSgncmVwb3J0X3RpdGxlJykgfHwgbXcudXRpbC5nZXRQYXJhbVZhbHVlKCdyZXBvcnR0aXRsZScpIHx8ICcnO1xuXHRpZiAocmVwb3J0UmV2aXNpb24gIT09ICcwJykge1xuXHRcdHJlcG9ydFRpdGxlICs9IGdldE1lc3NhZ2UoJygnKSArIGdldE1lc3NhZ2UoJ1JldmlzaW9uJykgKyByZXBvcnRSZXZpc2lvbiArIGdldE1lc3NhZ2UoJyknKTtcblx0fVxuXG5cdGlmIChyZXBvcnRUaXRsZSkge1xuXHRcdCR3cFN1YmplY3RFbGVtZW50LnZhbChsaW5rVGlsdGUgKyBnZXRNZXNzYWdlKCc6JykgKyByZXBvcnRUaXRsZSk7XG5cdFx0JHdwVGl0bGVFbGVtZW50LnZhbChyZXBvcnRUaXRsZSk7XG5cdH0gZWxzZSB7XG5cdFx0JHdwU3ViamVjdEVsZW1lbnQudmFsKGxpbmtUaWx0ZSk7XG5cdH1cbn07XG5cbmV4cG9ydCB7ZmlsbFNwZWNpYWxQYWdlfTtcbiIsICJpbXBvcnQge2FkZEJ1dHRvbn0gZnJvbSAnLi9tb2R1bGVzL2FkZEJ1dHRvbic7XG5pbXBvcnQge2FkZFBvcnRsZXRMaW5rfSBmcm9tICcuL21vZHVsZXMvYWRkUG9ydGxldExpbmsnO1xuaW1wb3J0IHtmaWxsU3BlY2lhbFBhZ2V9IGZyb20gJy4vbW9kdWxlcy9maWxsU3BlY2lhbFBhZ2UnO1xuaW1wb3J0IHtnZXRCb2R5fSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuaW1wb3J0IHtnZXRVUkx9IGZyb20gJy4vbW9kdWxlcy9nZXRVUkwnO1xuXG52b2lkIGdldEJvZHkoKS50aGVuKGZ1bmN0aW9uIHJlcG9ydCgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkIHtcblx0Y29uc3QgVVJMOiBzdHJpbmcgPSBnZXRVUkwoKTtcblx0YWRkQnV0dG9uKCRib2R5LCBVUkwpO1xuXHRhZGRQb3J0bGV0TGluayhVUkwpO1xuXHRmaWxsU3BlY2lhbFBhZ2UoJGJvZHkpO1xufSk7XG4iLCAiY29uc3QgZ2V0VVJMID0gKCkgPT4ge1xuXHRjb25zdCB7d2dDdXJSZXZpc2lvbklkLCB3Z1BhZ2VOYW1lLCB3Z1JldmlzaW9uSWR9ID0gbXcuY29uZmlnLmdldCgpO1xuXHRjb25zdCBVUkw6IHN0cmluZyA9IG13LnV0aWwuZ2V0VXJsKCdTcGVjaWFsOkNvbnRhY3QvUmVwb3J0Jywge1xuXHRcdHJlcG9ydHRpdGxlOiB3Z1BhZ2VOYW1lLFxuXHRcdHJlcG9ydHJldmlzaW9uOiAod2dSZXZpc2lvbklkIHx8IHdnQ3VyUmV2aXNpb25JZCkudG9TdHJpbmcoKSxcblx0fSk7XG5cblx0cmV0dXJuIFVSTDtcbn07XG5cbmV4cG9ydCB7Z2V0VVJMfTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsYUFBcUI7QUFDM0IsSUFBTUMsb0JBQUEsR0FBQUMsT0FBK0JGLFlBQVUsU0FBQTs7QUNBL0MsSUFBQUcscUJBQWtCQyxRQUFBQyxRQUFBLGtCQUFBLEdBQUEsQ0FBQTs7QUNEbEIsSUFBQUMsb0JBQXVCRCxRQUFBLGlCQUFBO0FBRXZCLElBQU1FLGtCQUFrQkEsTUFBTTtBQUM3QixTQUFPO0lBQ04sTUFBQSxHQUFLRCxrQkFBQUUsVUFBUztNQUNiQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtJQUNMLENBQUM7SUFDRCxNQUFBLEdBQUtMLGtCQUFBRSxVQUFTO01BQ2JDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO0lBQ0wsQ0FBQztJQUNELE1BQUEsR0FBS0wsa0JBQUFFLFVBQVM7TUFDYkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7SUFDTCxDQUFDO0lBQ0RDLFNBQUEsR0FBUU4sa0JBQUFFLFVBQVM7TUFDaEJDLElBQUk7TUFDSkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJ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QWlCLEtBQUtyQyxHQUFHd0IsS0FBS2EsY0FBYyxnQkFBZ0IsS0FBSztBQUN4RixNQUFJQyxjQUFzQnRDLEdBQUd3QixLQUFLYSxjQUFjLGNBQWMsS0FBS3JDLEdBQUd3QixLQUFLYSxjQUFjLGFBQWEsS0FBSztBQUMzRyxNQUFJRCxtQkFBbUIsS0FBSztBQUMzQkUsbUJBQWU1RCxXQUFXLEdBQUcsSUFBSUEsV0FBVyxVQUFVLElBQUkwRCxpQkFBaUIxRCxXQUFXLEdBQUc7RUFDMUY7QUFFQSxNQUFJNEQsYUFBYTtBQUNoQlAsc0JBQWtCUSxJQUFJVixZQUFZbkQsV0FBVyxHQUFHLElBQUk0RCxXQUFXO0FBQy9ESCxvQkFBZ0JJLElBQUlELFdBQVc7RUFDaEMsT0FBTztBQUNOUCxzQkFBa0JRLElBQUlWLFNBQVM7RUFDaEM7QUFDRDs7QUMzQkEsSUFBQVcscUJBQXNCeEUsUUFBQSxpQkFBQTs7QUNIdEIsSUFBTXlFLFNBQVNBLE1BQU07QUFDcEIsUUFBTTtJQUFDQztJQUFpQkM7SUFBWUM7RUFBWSxJQUFJNUMsR0FBR0MsT0FBT0MsSUFBSTtBQUNsRSxRQUFNcEIsTUFBY2tCLEdBQUd3QixLQUFLcUIsT0FBTywwQkFBMEI7SUFDNURDLGFBQWFIO0lBQ2JJLGlCQUFpQkgsZ0JBQWdCRixpQkFBaUJNLFNBQVM7RUFDNUQsQ0FBQztBQUVELFNBQU9sRTtBQUNSOztBREZBLE1BQUEsR0FBSzBELG1CQUFBUyxTQUFRLEVBQUVDLEtBQUssU0FBU0MsT0FBT3JELE9BQXNDO0FBQ3pFLFFBQU1oQixNQUFjMkQsT0FBTztBQUMzQjVDLFlBQVVDLE9BQU9oQixHQUFHO0FBQ3BCOEMsaUJBQWU5QyxHQUFHO0FBQ2xCZ0Qsa0JBQWdCaEMsS0FBSztBQUN0QixDQUFDOyIsCiAgIm5hbWVzIjogWyJDTEFTU19OQU1FIiwgIkNMQVNTX05BTUVfQlVUVE9OIiwgImNvbmNhdCIsICJpbXBvcnRfZXh0X2dhZGdldDIiLCAiX190b0VTTSIsICJyZXF1aXJlIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgImdldEkxOG5NZXNzYWdlcyIsICJsb2NhbGl6ZSIsICJlbiIsICJqYSIsICJ6aCIsICJSZXBvcnQiLCAiUmV2aXNpb24iLCAiaTE4bk1lc3NhZ2VzIiwgImdldE1lc3NhZ2UiLCAia2V5IiwgIkxJTktfVElUTEUiLCAiUmVwb3J0QnV0dG9uIiwgIlVSTCIsICJkZWZhdWx0IiwgImNyZWF0ZUVsZW1lbnQiLCAiY2xhc3NOYW1lIiwgInNyYyIsICJ3aWR0aCIsICJoZWlnaHQiLCAiZHJhZ2dhYmxlIiwgImFsdCIsICJvbkNsaWNrIiwgIndpbmRvdyIsICJvcGVuIiwgIlJlcG9ydEJ1dHRvbl9kZWZhdWx0IiwgImltcG9ydF9leHRfZ2FkZ2V0MyIsICJpbXBvcnRfZXh0X2dhZGdldDQiLCAiYWRkQnV0dG9uIiwgIiRib2R5IiwgIndnTmFtZXNwYWNlTnVtYmVyIiwgIm13IiwgImNvbmZpZyIsICJnZXQiLCAib25Nb3VzZUVudGVyTW91c2VMZWF2ZSIsICJldmVudCIsICJjaGFuZ2VPcGFjaXR5V2hlbk1vdXNlRW50ZXJPckxlYXZlIiwgInJlcG9ydEJ1dHRvbiIsICJfaSIsICJfYXJyIiwgImxlbmd0aCIsICJhZGRFdmVudExpc3RlbmVyIiwgInRpcHB5IiwgImFycm93IiwgImNvbnRlbnQiLCAiZ2V0QXR0cmlidXRlIiwgInBsYWNlbWVudCIsICJhcHBlbmQiLCAic2Nyb2xsTGlzdGVuZXIiLCAiYnV0dG9uQm90dG9tIiwgImRvY3VtZW50IiwgInF1ZXJ5U2VsZWN0b3IiLCAic3R5bGUiLCAiYm90dG9tIiwgInNjcm9sbExpc3RlbmVyV2l0aFRocm90dGxlIiwgInV0aWwiLCAidGhyb3R0bGUiLCAiJCIsICJvbiIsICJhZGRQb3J0bGV0TGluayIsICJsaW5rVGlsdGUiLCAiZmlsbFNwZWNpYWxQYWdlIiwgIiR3cFN1YmplY3RFbGVtZW50IiwgImZpbmQiLCAiaXNCb2R5SGFzQ2xhc3MiLCAiaGFzQ2xhc3MiLCAiJHdwVGl0bGVFbGVtZW50IiwgInJlcG9ydFJldmlzaW9uIiwgImdldFBhcmFtVmFsdWUiLCAicmVwb3J0VGl0bGUiLCAidmFsIiwgImltcG9ydF9leHRfZ2FkZ2V0NSIsICJnZXRVUkwiLCAid2dDdXJSZXZpc2lvbklkIiwgIndnUGFnZU5hbWUiLCAid2dSZXZpc2lvbklkIiwgImdldFVybCIsICJyZXBvcnR0aXRsZSIsICJyZXBvcnRyZXZpc2lvbiIsICJ0b1N0cmluZyIsICJnZXRCb2R5IiwgInRoZW4iLCAicmVwb3J0Il0KfQo=

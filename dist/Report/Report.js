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
var URL = mw.util.getUrl("Special:Contact/Report", {
  report_title: mw.config.get("wgPageName"),
  report_revision: (mw.config.get("wgRevisionId") || mw.config.get("wgCurRevisionId")).toString()
});
var WG_NAMESPACE_NUMBER = mw.config.get("wgNamespaceNumber");
//! src/Report/modules/addButton.ts
var import_ext_gadget3 = require("ext.gadget.Util");
//! src/Report/components/button.tsx
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
//! src/Report/components/button.tsx
var LINK_TITLE = getMessage("Report");
var IMAGE_URI = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1' height='1'%3E%3C/svg%3E";
var onClick = () => {
  window.open(URL, "_blank", "noopener,noreferrer");
};
var reportButton = /* @__PURE__ */ import_ext_gadget2.default.createElement("img", {
  className: [CLASS_NAME_BUTTON, "noprint"],
  src: IMAGE_URI,
  width: "32",
  height: "32",
  draggable: false,
  alt: LINK_TITLE,
  "aria-label": LINK_TITLE,
  onClick
});
//! src/Report/modules/addButton.ts
var import_ext_gadget4 = require("ext.gadget.Tippy");
var addButton = () => {
  if (WG_NAMESPACE_NUMBER < 0) {
    return;
  }
  const $body = $("body");
  const onMouseEnterMouseLeave = (event) => {
    (0, import_ext_gadget3.changeOpacityWhenMouseEnterOrLeave)(event);
  };
  const $element = $(reportButton);
  $element.on("mouseenter mouseleave", onMouseEnterMouseLeave);
  $element.appendTo($body);
  (0, import_ext_gadget4.tippy)($element.get(0), {
    arrow: true,
    content: $element.attr("aria-label"),
    placement: "left"
  });
  const scrollListener = () => {
    let buttonBottom;
    if (document.querySelector("#proveit") || document.querySelector(".gadget-cat_a_lot-container") || document.querySelector(".wordcount")) {
      buttonBottom = "253px";
    } else {
      buttonBottom = "211px";
    }
    $element.css("bottom", buttonBottom);
  };
  const scrollListenerWithThrottle = mw.util.throttle(scrollListener, 200);
  $(window).on("scroll selectionchange", scrollListenerWithThrottle);
};
//! src/Report/modules/addPortletLink.ts
var addPortletLink = () => {
  if (mw.config.get("wgNamespaceNumber") < 0) {
    return;
  }
  const linkTilte = getMessage("Report");
  const portletId = "p-tb";
  mw.util.addPortletLink(portletId, URL, linkTilte, "t-report", linkTilte);
};
//! src/Report/modules/fillSpecialPage.ts
var fillSpecialPage = () => {
  var _mw$util$getParamValu;
  const $body = $("body");
  const $wpSubjectElement = $body.find('input[name="wpSubject"]');
  if (!$wpSubjectElement.length) {
    return;
  }
  const $bodyHasClass = $body.hasClass("page-Special_联系_Report") || $body.hasClass("page-Special_联系_report");
  if (!$bodyHasClass) {
    return;
  }
  const $wpTitleElement = $body.find('input[name="wpTitle"]');
  const linkTilte = getMessage("Report");
  const reportRevision = (_mw$util$getParamValu = mw.util.getParamValue("report_revision")) !== null && _mw$util$getParamValu !== void 0 ? _mw$util$getParamValu : "";
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
$(addButton);
$(addPortletLink);
$(fillSpecialPage);

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1JlcG9ydC9tb2R1bGVzL2NvbnN0YW50LnRzIiwgInNyYy9SZXBvcnQvbW9kdWxlcy9hZGRCdXR0b24udHMiLCAic3JjL1JlcG9ydC9jb21wb25lbnRzL2J1dHRvbi50c3giLCAic3JjL1JlcG9ydC9tb2R1bGVzL2kxOG4udHMiLCAic3JjL1JlcG9ydC9tb2R1bGVzL2FkZFBvcnRsZXRMaW5rLnRzIiwgInNyYy9SZXBvcnQvbW9kdWxlcy9maWxsU3BlY2lhbFBhZ2UudHMiLCAic3JjL1JlcG9ydC9SZXBvcnQudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIi8qIGVzbGludC1kaXNhYmxlIGNhbWVsY2FzZSAqL1xuY29uc3QgQ0xBU1NfTkFNRTogc3RyaW5nID0gJ2dhZGdldC1yZXBvcnQnO1xuY29uc3QgQ0xBU1NfTkFNRV9CVVRUT046IHN0cmluZyA9IGAke0NMQVNTX05BTUV9LWJ1dHRvbmA7XG5cbmNvbnN0IFVSTDogc3RyaW5nID0gbXcudXRpbC5nZXRVcmwoJ1NwZWNpYWw6Q29udGFjdC9SZXBvcnQnLCB7XG5cdHJlcG9ydF90aXRsZTogbXcuY29uZmlnLmdldCgnd2dQYWdlTmFtZScpLFxuXHRyZXBvcnRfcmV2aXNpb246IChtdy5jb25maWcuZ2V0KCd3Z1JldmlzaW9uSWQnKSB8fCBtdy5jb25maWcuZ2V0KCd3Z0N1clJldmlzaW9uSWQnKSkudG9TdHJpbmcoKSxcbn0pO1xuXG5jb25zdCBXR19OQU1FU1BBQ0VfTlVNQkVSOiBudW1iZXIgPSBtdy5jb25maWcuZ2V0KCd3Z05hbWVzcGFjZU51bWJlcicpO1xuXG5leHBvcnQge0NMQVNTX05BTUVfQlVUVE9OLCBVUkwsIFdHX05BTUVTUEFDRV9OVU1CRVJ9O1xuIiwgImltcG9ydCB7V0dfTkFNRVNQQUNFX05VTUJFUn0gZnJvbSAnLi9jb25zdGFudCc7XG5pbXBvcnQge2NoYW5nZU9wYWNpdHlXaGVuTW91c2VFbnRlck9yTGVhdmV9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5pbXBvcnQge3JlcG9ydEJ1dHRvbn0gZnJvbSAnLi4vY29tcG9uZW50cy9idXR0b24nO1xuaW1wb3J0IHt0aXBweX0gZnJvbSAnZXh0LmdhZGdldC5UaXBweSc7XG5cbmNvbnN0IGFkZEJ1dHRvbiA9ICgpOiB2b2lkID0+IHtcblx0aWYgKFdHX05BTUVTUEFDRV9OVU1CRVIgPCAwKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgJGJvZHkgPSAkKCdib2R5Jyk7XG5cdGNvbnN0IG9uTW91c2VFbnRlck1vdXNlTGVhdmUgPSAoZXZlbnQ6IEpRdWVyeS5UcmlnZ2VyZWRFdmVudCk6IHZvaWQgPT4ge1xuXHRcdGNoYW5nZU9wYWNpdHlXaGVuTW91c2VFbnRlck9yTGVhdmUoZXZlbnQpO1xuXHR9O1xuXG5cdGNvbnN0ICRlbGVtZW50ID0gJChyZXBvcnRCdXR0b24pO1xuXHQkZWxlbWVudC5vbignbW91c2VlbnRlciBtb3VzZWxlYXZlJywgb25Nb3VzZUVudGVyTW91c2VMZWF2ZSk7XG5cdCRlbGVtZW50LmFwcGVuZFRvKCRib2R5KTtcblxuXHR0aXBweSgkZWxlbWVudC5nZXQoMCkgYXMgSFRNTEFuY2hvckVsZW1lbnQsIHtcblx0XHRhcnJvdzogdHJ1ZSxcblx0XHRjb250ZW50OiAkZWxlbWVudC5hdHRyKCdhcmlhLWxhYmVsJykgYXMgc3RyaW5nLFxuXHRcdHBsYWNlbWVudDogJ2xlZnQnLFxuXHR9KTtcblxuXHRjb25zdCBzY3JvbGxMaXN0ZW5lciA9ICgpOiB2b2lkID0+IHtcblx0XHRsZXQgYnV0dG9uQm90dG9tO1xuXHRcdGlmIChcblx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm92ZWl0JykgfHxcblx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYWRnZXQtY2F0X2FfbG90LWNvbnRhaW5lcicpIHx8XG5cdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud29yZGNvdW50Jylcblx0XHQpIHtcblx0XHRcdGJ1dHRvbkJvdHRvbSA9ICcyNTNweCc7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGJ1dHRvbkJvdHRvbSA9ICcyMTFweCc7XG5cdFx0fVxuXHRcdCRlbGVtZW50LmNzcygnYm90dG9tJywgYnV0dG9uQm90dG9tKTtcblx0fTtcblx0Y29uc3Qgc2Nyb2xsTGlzdGVuZXJXaXRoVGhyb3R0bGU6IHR5cGVvZiBzY3JvbGxMaXN0ZW5lciA9IG13LnV0aWwudGhyb3R0bGUoc2Nyb2xsTGlzdGVuZXIsIDIwMCk7XG5cdCQod2luZG93KS5vbignc2Nyb2xsIHNlbGVjdGlvbmNoYW5nZScsIHNjcm9sbExpc3RlbmVyV2l0aFRocm90dGxlKTtcbn07XG5cbmV4cG9ydCB7YWRkQnV0dG9ufTtcbiIsICJpbXBvcnQge0NMQVNTX05BTUVfQlVUVE9OLCBVUkx9IGZyb20gJy4uL21vZHVsZXMvY29uc3RhbnQnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ2V4dC5nYWRnZXQuUmVhY3QnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuLi9tb2R1bGVzL2kxOG4nO1xuXG5jb25zdCBMSU5LX1RJVExFOiBzdHJpbmcgPSBnZXRNZXNzYWdlKCdSZXBvcnQnKTtcbmNvbnN0IElNQUdFX1VSSTogc3RyaW5nID1cblx0XCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzEnIGhlaWdodD0nMSclM0UlM0Mvc3ZnJTNFXCI7XG5cbmNvbnN0IG9uQ2xpY2sgPSAoKSA9PiB7XG5cdHdpbmRvdy5vcGVuKFVSTCwgJ19ibGFuaycsICdub29wZW5lcixub3JlZmVycmVyJyk7XG59O1xuXG5jb25zdCByZXBvcnRCdXR0b24gPSAoXG5cdDxpbWdcblx0XHRjbGFzc05hbWU9e1tDTEFTU19OQU1FX0JVVFRPTiwgJ25vcHJpbnQnXX1cblx0XHRzcmM9e0lNQUdFX1VSSX1cblx0XHR3aWR0aD1cIjMyXCJcblx0XHRoZWlnaHQ9XCIzMlwiXG5cdFx0ZHJhZ2dhYmxlPXtmYWxzZX1cblx0XHRhbHQ9e0xJTktfVElUTEV9XG5cdFx0YXJpYS1sYWJlbD17TElOS19USVRMRX1cblx0XHRvbkNsaWNrPXtvbkNsaWNrfVxuXHQvPlxuKTtcblxuZXhwb3J0IHtyZXBvcnRCdXR0b259O1xuIiwgImltcG9ydCB7bG9jYWxpemV9IGZyb20gJ2V4dC5nYWRnZXQuaTE4bic7XG5cbmNvbnN0IGdldEkxOG5NZXNzYWdlcyA9ICgpID0+IHtcblx0cmV0dXJuIHtcblx0XHQnOic6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnOiAnLFxuXHRcdFx0amE6ICfvvJonLFxuXHRcdFx0emg6ICfvvJonLFxuXHRcdH0pLFxuXHRcdCcoJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICcoJyxcblx0XHRcdGphOiAn77yIJyxcblx0XHRcdHpoOiAn77yIJyxcblx0XHR9KSxcblx0XHQnKSc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnKScsXG5cdFx0XHRqYTogJ++8iScsXG5cdFx0XHR6aDogJ++8iScsXG5cdFx0fSksXG5cdFx0UmVwb3J0OiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1JlcG9ydCB0aGlzIHBhZ2UnLFxuXHRcdFx0amE6ICfjgZPjga7jg5rjg7zjgrjjgpLloLHlkYonLFxuXHRcdFx0J3poLWhhbnMnOiAn5oql5ZGK5LiN6Imv5L+h5oGvJyxcblx0XHRcdCd6aC1oYW50JzogJ+WgseWRiuS4jeiJr+izh+ioiicsXG5cdFx0fSksXG5cdFx0UmV2aXNpb246IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnUmV2aXNpb24nLFxuXHRcdFx0amE6ICfniYgnLFxuXHRcdFx0emg6ICfniYjmnKwnLFxuXHRcdH0pLFxuXHR9O1xufTtcblxuY29uc3QgaTE4bk1lc3NhZ2VzID0gZ2V0STE4bk1lc3NhZ2VzKCk7XG5cbmNvbnN0IGdldE1lc3NhZ2U6IEdldE1lc3NhZ2VzPHR5cGVvZiBpMThuTWVzc2FnZXM+ID0gKGtleSkgPT4ge1xuXHRyZXR1cm4gaTE4bk1lc3NhZ2VzW2tleV0gfHwga2V5O1xufTtcblxuZXhwb3J0IHtnZXRNZXNzYWdlfTtcbiIsICJpbXBvcnQge1VSTH0gZnJvbSAnLi9jb25zdGFudCc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vaTE4bic7XG5cbmNvbnN0IGFkZFBvcnRsZXRMaW5rID0gKCk6IHZvaWQgPT4ge1xuXHRpZiAobXcuY29uZmlnLmdldCgnd2dOYW1lc3BhY2VOdW1iZXInKSA8IDApIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBsaW5rVGlsdGU6IHN0cmluZyA9IGdldE1lc3NhZ2UoJ1JlcG9ydCcpO1xuXHRjb25zdCBwb3J0bGV0SWQ6IHN0cmluZyA9ICdwLXRiJztcblx0bXcudXRpbC5hZGRQb3J0bGV0TGluayhwb3J0bGV0SWQsIFVSTCwgbGlua1RpbHRlLCAndC1yZXBvcnQnLCBsaW5rVGlsdGUpO1xufTtcblxuZXhwb3J0IHthZGRQb3J0bGV0TGlua307XG4iLCAiaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL2kxOG4nO1xuXG5jb25zdCBmaWxsU3BlY2lhbFBhZ2UgPSAoKTogdm9pZCA9PiB7XG5cdGNvbnN0ICRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50PiA9ICQoJ2JvZHknKTtcblxuXHRjb25zdCAkd3BTdWJqZWN0RWxlbWVudDogSlF1ZXJ5PEhUTUxJbnB1dEVsZW1lbnQ+ID0gJGJvZHkuZmluZDxIVE1MSW5wdXRFbGVtZW50PignaW5wdXRbbmFtZT1cIndwU3ViamVjdFwiXScpO1xuXHRpZiAoISR3cFN1YmplY3RFbGVtZW50Lmxlbmd0aCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0ICRib2R5SGFzQ2xhc3MgPSAkYm9keS5oYXNDbGFzcygncGFnZS1TcGVjaWFsX+iBlOezu19SZXBvcnQnKSB8fCAkYm9keS5oYXNDbGFzcygncGFnZS1TcGVjaWFsX+iBlOezu19yZXBvcnQnKTtcblx0aWYgKCEkYm9keUhhc0NsYXNzKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgJHdwVGl0bGVFbGVtZW50OiBKUXVlcnk8SFRNTElucHV0RWxlbWVudD4gPSAkYm9keS5maW5kPEhUTUxJbnB1dEVsZW1lbnQ+KCdpbnB1dFtuYW1lPVwid3BUaXRsZVwiXScpO1xuXG5cdGNvbnN0IGxpbmtUaWx0ZTogc3RyaW5nID0gZ2V0TWVzc2FnZSgnUmVwb3J0Jyk7XG5cdGNvbnN0IHJlcG9ydFJldmlzaW9uOiBzdHJpbmcgPSBtdy51dGlsLmdldFBhcmFtVmFsdWUoJ3JlcG9ydF9yZXZpc2lvbicpID8/ICcnO1xuXHRsZXQgcmVwb3J0VGl0bGU6IHN0cmluZyA9IG13LnV0aWwuZ2V0UGFyYW1WYWx1ZSgncmVwb3J0X3RpdGxlJykgfHwgJyc7XG5cdGlmIChyZXBvcnRSZXZpc2lvbiAhPT0gJzAnKSB7XG5cdFx0cmVwb3J0VGl0bGUgKz0gZ2V0TWVzc2FnZSgnKCcpICsgZ2V0TWVzc2FnZSgnUmV2aXNpb24nKSArIHJlcG9ydFJldmlzaW9uICsgZ2V0TWVzc2FnZSgnKScpO1xuXHR9XG5cblx0aWYgKHJlcG9ydFRpdGxlKSB7XG5cdFx0JHdwU3ViamVjdEVsZW1lbnQudmFsKGxpbmtUaWx0ZSArIGdldE1lc3NhZ2UoJzonKSArIHJlcG9ydFRpdGxlKTtcblx0XHQkd3BUaXRsZUVsZW1lbnQudmFsKHJlcG9ydFRpdGxlKTtcblx0fSBlbHNlIHtcblx0XHQkd3BTdWJqZWN0RWxlbWVudC52YWwobGlua1RpbHRlKTtcblx0fVxufTtcblxuZXhwb3J0IHtmaWxsU3BlY2lhbFBhZ2V9O1xuIiwgImltcG9ydCB7YWRkQnV0dG9ufSBmcm9tICcuL21vZHVsZXMvYWRkQnV0dG9uJztcbmltcG9ydCB7YWRkUG9ydGxldExpbmt9IGZyb20gJy4vbW9kdWxlcy9hZGRQb3J0bGV0TGluayc7XG5pbXBvcnQge2ZpbGxTcGVjaWFsUGFnZX0gZnJvbSAnLi9tb2R1bGVzL2ZpbGxTcGVjaWFsUGFnZSc7XG5cbiQoYWRkQnV0dG9uKTtcbiQoYWRkUG9ydGxldExpbmspO1xuJChmaWxsU3BlY2lhbFBhZ2UpO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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LFlBQVl2QyxXQUFXLEdBQUcsSUFBSW1ELFdBQVc7QUFDL0RILG9CQUFnQkksSUFBSUQsV0FBVztFQUNoQyxPQUFPO0FBQ05SLHNCQUFrQlMsSUFBSWIsU0FBUztFQUNoQztBQUNEOztBQzFCQXBCLEVBQUVGLFNBQVM7QUFDWEUsRUFBRW1CLGNBQWM7QUFDaEJuQixFQUFFc0IsZUFBZTsiLAogICJuYW1lcyI6IFsiQ0xBU1NfTkFNRSIsICJDTEFTU19OQU1FX0JVVFRPTiIsICJjb25jYXQiLCAiVVJMIiwgIm13IiwgInV0aWwiLCAiZ2V0VXJsIiwgInJlcG9ydF90aXRsZSIsICJjb25maWciLCAiZ2V0IiwgInJlcG9ydF9yZXZpc2lvbiIsICJ0b1N0cmluZyIsICJXR19OQU1FU1BBQ0VfTlVNQkVSIiwgImltcG9ydF9leHRfZ2FkZ2V0MyIsICJyZXF1aXJlIiwgImltcG9ydF9leHRfZ2FkZ2V0MiIsICJfX3RvRVNNIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgImdldEkxOG5NZXNzYWdlcyIsICJsb2NhbGl6ZSIsICJlbiIsICJqYSIsICJ6aCIsICJSZXBvcnQiLCAiUmV2aXNpb24iLCAiaTE4bk1lc3NhZ2VzIiwgImdldE1lc3NhZ2UiLCAia2V5IiwgIkxJTktfVElUTEUiLCAiSU1BR0VfVVJJIiwgIm9uQ2xpY2siLCAid2luZG93IiwgIm9wZW4iLCAicmVwb3J0QnV0dG9uIiwgImRlZmF1bHQiLCAiY3JlYXRlRWxlbWVudCIsICJjbGFzc05hbWUiLCAic3JjIiwgIndpZHRoIiwgImhlaWdodCIsICJkcmFnZ2FibGUiLCAiYWx0IiwgImltcG9ydF9leHRfZ2FkZ2V0NCIsICJhZGRCdXR0b24iLCAiJGJvZHkiLCAiJCIsICJvbk1vdXNlRW50ZXJNb3VzZUxlYXZlIiwgImV2ZW50IiwgImNoYW5nZU9wYWNpdHlXaGVuTW91c2VFbnRlck9yTGVhdmUiLCAiJGVsZW1lbnQiLCAib24iLCAiYXBwZW5kVG8iLCAidGlwcHkiLCAiYXJyb3ciLCAiY29udGVudCIsICJhdHRyIiwgInBsYWNlbWVudCIsICJzY3JvbGxMaXN0ZW5lciIsICJidXR0b25Cb3R0b20iLCAiZG9jdW1lbnQiLCAicXVlcnlTZWxlY3RvciIsICJjc3MiLCAic2Nyb2xsTGlzdGVuZXJXaXRoVGhyb3R0bGUiLCAidGhyb3R0bGUiLCAiYWRkUG9ydGxldExpbmsiLCAibGlua1RpbHRlIiwgInBvcnRsZXRJZCIsICJmaWxsU3BlY2lhbFBhZ2UiLCAiX213JHV0aWwkZ2V0UGFyYW1WYWx1IiwgIiR3cFN1YmplY3RFbGVtZW50IiwgImZpbmQiLCAibGVuZ3RoIiwgIiRib2R5SGFzQ2xhc3MiLCAiaGFzQ2xhc3MiLCAiJHdwVGl0bGVFbGVtZW50IiwgInJlcG9ydFJldmlzaW9uIiwgImdldFBhcmFtVmFsdWUiLCAicmVwb3J0VGl0bGUiLCAidmFsIl0KfQo=

/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/Report}
 * @license CC-BY-SA-4.0 {@link https://www.qiuwenbaike.cn/wiki/H:CC-BY-SA-4.0}
 */

/**
 * Alert Mark (with blue color and white background)
 *
 * @source {@link https://www.qiuwenbaike.cn/wiki/File:Alert_Mark_(Blue).svg}
 * @author WaitSpring
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
//! src/Report/modules/addButton.ts
var import_ext_gadget2 = require("ext.gadget.Util");
//! src/Report/images/empty.svg
var empty_default = '<svg xmlns="http://www.w3.org/2000/svg" width="1" height="1"/>';
//! src/Report/modules/reportButton.module.less
var gadgetReportButton = "reportButton-module__gadget-report-button_Fs7fda__4100";
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
//! src/Report/modules/reportButton.ts
var element = (URL, onMouseEnterLeave) => {
  const LINK_TITLE = getMessage("Report");
  const button = document.createElement("img");
  button.className = [gadgetReportButton, "noprint"].join(" ");
  button.src = empty_default;
  button.width = 32;
  button.height = 32;
  button.draggable = false;
  button.alt = LINK_TITLE;
  button.setAttribute("aria-label", LINK_TITLE);
  button.addEventListener("click", () => {
    window.open(URL, "_blank", "noopener, noreferrer");
  });
  button.addEventListener("mouseenter", onMouseEnterLeave);
  button.addEventListener("mouseleave", onMouseEnterLeave);
  return button;
};
//! src/Report/modules/addButton.ts
var import_ext_gadget3 = require("ext.gadget.Tippy");
var addButton = ($body, URL) => {
  const {
    wgNamespaceNumber
  } = mw.config.get();
  if (wgNamespaceNumber < 0) {
    return;
  }
  const onMouseEnterMouseLeave = (event) => {
    (0, import_ext_gadget2.changeOpacityWhenMouseEnterOrLeave)(event);
  };
  const button = element(URL, onMouseEnterMouseLeave);
  (0, import_ext_gadget3.tippy)(button, {
    arrow: true,
    content: button.getAttribute("alt"),
    placement: "left"
  });
  $body.append(button);
  const scrollListener = () => {
    let buttonBottom;
    if (document.querySelector("#proveit") || document.querySelector(".gadget-cat_a_lot-container") || document.querySelector("#gadget-word_count-tip")) {
      buttonBottom = "253px";
    } else {
      buttonBottom = "211px";
    }
    button.style.bottom = buttonBottom;
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
var import_ext_gadget4 = require("ext.gadget.Util");
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
void (0, import_ext_gadget4.getBody)().then(function report($body) {
  const URL = getURL();
  addButton($body, URL);
  addPortletLink(URL);
  fillSpecialPage($body);
});

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1JlcG9ydC9tb2R1bGVzL2FkZEJ1dHRvbi50cyIsICJzcmMvUmVwb3J0L2ltYWdlcy9lbXB0eS5zdmciLCAic3JjL1JlcG9ydC9tb2R1bGVzL3JlcG9ydEJ1dHRvbi5tb2R1bGUubGVzcyIsICJzcmMvUmVwb3J0L21vZHVsZXMvaTE4bi50cyIsICJzcmMvUmVwb3J0L21vZHVsZXMvcmVwb3J0QnV0dG9uLnRzIiwgInNyYy9SZXBvcnQvbW9kdWxlcy9hZGRQb3J0bGV0TGluay50cyIsICJzcmMvUmVwb3J0L21vZHVsZXMvZmlsbFNwZWNpYWxQYWdlLnRzIiwgInNyYy9SZXBvcnQvUmVwb3J0LnRzIiwgInNyYy9SZXBvcnQvbW9kdWxlcy9nZXRVUkwudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7Y2hhbmdlT3BhY2l0eVdoZW5Nb3VzZUVudGVyT3JMZWF2ZX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbmltcG9ydCB7cmVwb3J0QnV0dG9ufSBmcm9tICcuL3JlcG9ydEJ1dHRvbic7XG5pbXBvcnQge3RpcHB5fSBmcm9tICdleHQuZ2FkZ2V0LlRpcHB5JztcblxuY29uc3QgYWRkQnV0dG9uID0gKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50PiwgVVJMOiBzdHJpbmcpOiB2b2lkID0+IHtcblx0Y29uc3Qge3dnTmFtZXNwYWNlTnVtYmVyfSA9IG13LmNvbmZpZy5nZXQoKTtcblx0aWYgKHdnTmFtZXNwYWNlTnVtYmVyIDwgMCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IG9uTW91c2VFbnRlck1vdXNlTGVhdmUgPSAoZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkID0+IHtcblx0XHRjaGFuZ2VPcGFjaXR5V2hlbk1vdXNlRW50ZXJPckxlYXZlKGV2ZW50KTtcblx0fTtcblxuXHRjb25zdCBidXR0b24gPSByZXBvcnRCdXR0b24oVVJMLCBvbk1vdXNlRW50ZXJNb3VzZUxlYXZlKTtcblxuXHR0aXBweShidXR0b24sIHtcblx0XHRhcnJvdzogdHJ1ZSxcblx0XHRjb250ZW50OiBidXR0b24uZ2V0QXR0cmlidXRlKCdhbHQnKSBhcyBzdHJpbmcsXG5cdFx0cGxhY2VtZW50OiAnbGVmdCcsXG5cdH0pO1xuXG5cdCRib2R5LmFwcGVuZChidXR0b24pO1xuXG5cdGNvbnN0IHNjcm9sbExpc3RlbmVyID0gKCk6IHZvaWQgPT4ge1xuXHRcdGxldCBidXR0b25Cb3R0b206IHN0cmluZztcblxuXHRcdGlmIChcblx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm92ZWl0JykgfHxcblx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYWRnZXQtY2F0X2FfbG90LWNvbnRhaW5lcicpIHx8XG5cdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZ2FkZ2V0LXdvcmRfY291bnQtdGlwJylcblx0XHQpIHtcblx0XHRcdGJ1dHRvbkJvdHRvbSA9ICcyNTNweCc7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGJ1dHRvbkJvdHRvbSA9ICcyMTFweCc7XG5cdFx0fVxuXG5cdFx0YnV0dG9uLnN0eWxlLmJvdHRvbSA9IGJ1dHRvbkJvdHRvbTtcblx0fTtcblx0Y29uc3Qgc2Nyb2xsTGlzdGVuZXJXaXRoVGhyb3R0bGU6IHR5cGVvZiBzY3JvbGxMaXN0ZW5lciA9IG13LnV0aWwudGhyb3R0bGUoc2Nyb2xsTGlzdGVuZXIsIDIwMCk7XG5cblx0JCh3aW5kb3cpLm9uKCdzY3JvbGwgc2VsZWN0aW9uY2hhbmdlJywgc2Nyb2xsTGlzdGVuZXJXaXRoVGhyb3R0bGUpO1xufTtcblxuZXhwb3J0IHthZGRCdXR0b259O1xuIiwgIjxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMVwiIGhlaWdodD1cIjFcIi8+IiwgImltcG9ydCBcImVzYnVpbGQtY3NzLW1vZHVsZXMtcGx1Z2luLW5zLWNzczpzcmMvUmVwb3J0L21vZHVsZXMvcmVwb3J0QnV0dG9uLm1vZHVsZS5sZXNzXCI7XG5leHBvcnQgY29uc3QgZ2FkZ2V0UmVwb3J0QnV0dG9uID0gXCJyZXBvcnRCdXR0b24tbW9kdWxlX19nYWRnZXQtcmVwb3J0LWJ1dHRvbl9GczdmZGFfXzQxMDBcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBcImdhZGdldFJlcG9ydEJ1dHRvblwiOiBnYWRnZXRSZXBvcnRCdXR0b25cbn07XG4gICAgICAiLCAiaW1wb3J0IHtsb2NhbGl6ZX0gZnJvbSAnZXh0LmdhZGdldC5pMThuJztcblxuY29uc3QgZ2V0STE4bk1lc3NhZ2VzID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdCc6JzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICc6ICcsXG5cdFx0XHRqYTogJ++8micsXG5cdFx0XHR6aDogJ++8micsXG5cdFx0fSksXG5cdFx0JygnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJygnLFxuXHRcdFx0amE6ICfvvIgnLFxuXHRcdFx0emg6ICfvvIgnLFxuXHRcdH0pLFxuXHRcdCcpJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICcpJyxcblx0XHRcdGphOiAn77yJJyxcblx0XHRcdHpoOiAn77yJJyxcblx0XHR9KSxcblx0XHRSZXBvcnQ6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnUmVwb3J0IHRoaXMgcGFnZScsXG5cdFx0XHRqYTogJ+OBk+OBruODmuODvOOCuOOCkuWgseWRiicsXG5cdFx0XHQnemgtaGFucyc6ICfmiqXlkYrkuI3oia/kv6Hmga8nLFxuXHRcdFx0J3poLWhhbnQnOiAn5aCx5ZGK5LiN6Imv6LOH6KiKJyxcblx0XHR9KSxcblx0XHRSZXZpc2lvbjogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdSZXZpc2lvbicsXG5cdFx0XHRqYTogJ+eJiCcsXG5cdFx0XHR6aDogJ+eJiOacrCcsXG5cdFx0fSksXG5cdH07XG59O1xuXG5jb25zdCBpMThuTWVzc2FnZXMgPSBnZXRJMThuTWVzc2FnZXMoKTtcblxuY29uc3QgZ2V0TWVzc2FnZTogR2V0TWVzc2FnZXM8dHlwZW9mIGkxOG5NZXNzYWdlcz4gPSAoa2V5KSA9PiB7XG5cdHJldHVybiBpMThuTWVzc2FnZXNba2V5XSB8fCBrZXk7XG59O1xuXG5leHBvcnQge2dldE1lc3NhZ2V9O1xuIiwgImltcG9ydCBlbXB0eVN2ZyBmcm9tICcuLi9pbWFnZXMvZW1wdHkuc3ZnJztcbmltcG9ydCB7Z2FkZ2V0UmVwb3J0QnV0dG9ufSBmcm9tICcuL3JlcG9ydEJ1dHRvbi5tb2R1bGUubGVzcyc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vaTE4bic7XG5cbmNvbnN0IGVsZW1lbnQgPSAoVVJMOiBzdHJpbmcsIG9uTW91c2VFbnRlckxlYXZlOiAoZXZlbnQ6IE1vdXNlRXZlbnQpID0+IHZvaWQpID0+IHtcblx0Y29uc3QgTElOS19USVRMRTogc3RyaW5nID0gZ2V0TWVzc2FnZSgnUmVwb3J0Jyk7XG5cblx0Y29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG5cdGJ1dHRvbi5jbGFzc05hbWUgPSBbZ2FkZ2V0UmVwb3J0QnV0dG9uLCAnbm9wcmludCddLmpvaW4oJyAnKTtcblx0YnV0dG9uLnNyYyA9IGVtcHR5U3ZnO1xuXHRidXR0b24ud2lkdGggPSAzMjtcblx0YnV0dG9uLmhlaWdodCA9IDMyO1xuXHRidXR0b24uZHJhZ2dhYmxlID0gZmFsc2U7XG5cdGJ1dHRvbi5hbHQgPSBMSU5LX1RJVExFO1xuXHRidXR0b24uc2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJywgTElOS19USVRMRSk7XG5cblx0YnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk6IHZvaWQgPT4ge1xuXHRcdHdpbmRvdy5vcGVuKFVSTCwgJ19ibGFuaycsICdub29wZW5lciwgbm9yZWZlcnJlcicpO1xuXHR9KTtcblx0YnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBvbk1vdXNlRW50ZXJMZWF2ZSk7XG5cdGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgb25Nb3VzZUVudGVyTGVhdmUpO1xuXG5cdHJldHVybiBidXR0b247XG59O1xuXG5leHBvcnQge2VsZW1lbnQgYXMgcmVwb3J0QnV0dG9ufTtcbiIsICJpbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vaTE4bic7XG5cbmNvbnN0IGFkZFBvcnRsZXRMaW5rID0gKFVSTDogc3RyaW5nKTogdm9pZCA9PiB7XG5cdGNvbnN0IHt3Z05hbWVzcGFjZU51bWJlcn0gPSBtdy5jb25maWcuZ2V0KCk7XG5cdGlmICh3Z05hbWVzcGFjZU51bWJlciA8IDApIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBsaW5rVGlsdGU6IHN0cmluZyA9IGdldE1lc3NhZ2UoJ1JlcG9ydCcpO1xuXHRtdy51dGlsLmFkZFBvcnRsZXRMaW5rKCdwLXRiJywgVVJMLCBsaW5rVGlsdGUsICd0LXJlcG9ydCcsIGxpbmtUaWx0ZSk7XG59O1xuXG5leHBvcnQge2FkZFBvcnRsZXRMaW5rfTtcbiIsICJpbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vaTE4bic7XG5cbmNvbnN0IGZpbGxTcGVjaWFsUGFnZSA9ICgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkID0+IHtcblx0Y29uc3QgJHdwU3ViamVjdEVsZW1lbnQ6IEpRdWVyeTxIVE1MSW5wdXRFbGVtZW50PiA9ICRib2R5LmZpbmQ8SFRNTElucHV0RWxlbWVudD4oJ2lucHV0W25hbWU9XCJ3cFN1YmplY3RcIl0nKTtcblx0aWYgKCEkd3BTdWJqZWN0RWxlbWVudC5sZW5ndGgpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBpc0JvZHlIYXNDbGFzczogYm9vbGVhbiA9XG5cdFx0JGJvZHkuaGFzQ2xhc3MoJ3BhZ2UtU3BlY2lhbF/ogZTns7tfUmVwb3J0JykgfHwgJGJvZHkuaGFzQ2xhc3MoJ3BhZ2UtU3BlY2lhbF/ogZTns7tfcmVwb3J0Jyk7XG5cdGlmICghaXNCb2R5SGFzQ2xhc3MpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCAkd3BUaXRsZUVsZW1lbnQ6IEpRdWVyeTxIVE1MSW5wdXRFbGVtZW50PiA9ICRib2R5LmZpbmQ8SFRNTElucHV0RWxlbWVudD4oJ2lucHV0W25hbWU9XCJ3cFRpdGxlXCJdJyk7XG5cblx0Y29uc3QgbGlua1RpbHRlOiBzdHJpbmcgPSBnZXRNZXNzYWdlKCdSZXBvcnQnKTtcblx0Y29uc3QgcmVwb3J0UmV2aXNpb246IHN0cmluZyA9XG5cdFx0bXcudXRpbC5nZXRQYXJhbVZhbHVlKCdyZXBvcnRfcmV2aXNpb24nKSB8fCBtdy51dGlsLmdldFBhcmFtVmFsdWUoJ3JlcG9ydHJldmlzaW9uJykgfHwgJzAnO1xuXHRsZXQgcmVwb3J0VGl0bGU6IHN0cmluZyA9IG13LnV0aWwuZ2V0UGFyYW1WYWx1ZSgncmVwb3J0X3RpdGxlJykgfHwgbXcudXRpbC5nZXRQYXJhbVZhbHVlKCdyZXBvcnR0aXRsZScpIHx8ICcnO1xuXHRpZiAocmVwb3J0UmV2aXNpb24gIT09ICcwJykge1xuXHRcdHJlcG9ydFRpdGxlICs9IGdldE1lc3NhZ2UoJygnKSArIGdldE1lc3NhZ2UoJ1JldmlzaW9uJykgKyByZXBvcnRSZXZpc2lvbiArIGdldE1lc3NhZ2UoJyknKTtcblx0fVxuXG5cdGlmIChyZXBvcnRUaXRsZSkge1xuXHRcdCR3cFN1YmplY3RFbGVtZW50LnZhbChsaW5rVGlsdGUgKyBnZXRNZXNzYWdlKCc6JykgKyByZXBvcnRUaXRsZSk7XG5cdFx0JHdwVGl0bGVFbGVtZW50LnZhbChyZXBvcnRUaXRsZSk7XG5cdH0gZWxzZSB7XG5cdFx0JHdwU3ViamVjdEVsZW1lbnQudmFsKGxpbmtUaWx0ZSk7XG5cdH1cbn07XG5cbmV4cG9ydCB7ZmlsbFNwZWNpYWxQYWdlfTtcbiIsICJpbXBvcnQge2FkZEJ1dHRvbn0gZnJvbSAnLi9tb2R1bGVzL2FkZEJ1dHRvbic7XG5pbXBvcnQge2FkZFBvcnRsZXRMaW5rfSBmcm9tICcuL21vZHVsZXMvYWRkUG9ydGxldExpbmsnO1xuaW1wb3J0IHtmaWxsU3BlY2lhbFBhZ2V9IGZyb20gJy4vbW9kdWxlcy9maWxsU3BlY2lhbFBhZ2UnO1xuaW1wb3J0IHtnZXRCb2R5fSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuaW1wb3J0IHtnZXRVUkx9IGZyb20gJy4vbW9kdWxlcy9nZXRVUkwnO1xuXG52b2lkIGdldEJvZHkoKS50aGVuKGZ1bmN0aW9uIHJlcG9ydCgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkIHtcblx0Y29uc3QgVVJMOiBzdHJpbmcgPSBnZXRVUkwoKTtcblx0YWRkQnV0dG9uKCRib2R5LCBVUkwpO1xuXHRhZGRQb3J0bGV0TGluayhVUkwpO1xuXHRmaWxsU3BlY2lhbFBhZ2UoJGJvZHkpO1xufSk7XG4iLCAiY29uc3QgZ2V0VVJMID0gKCk6IHN0cmluZyA9PiB7XG5cdGNvbnN0IHt3Z0N1clJldmlzaW9uSWQsIHdnUGFnZU5hbWUsIHdnUmV2aXNpb25JZH0gPSBtdy5jb25maWcuZ2V0KCk7XG5cdGNvbnN0IFVSTDogc3RyaW5nID0gbXcudXRpbC5nZXRVcmwoJ1NwZWNpYWw6Q29udGFjdC9SZXBvcnQnLCB7XG5cdFx0cmVwb3J0dGl0bGU6IHdnUGFnZU5hbWUsXG5cdFx0cmVwb3J0cmV2aXNpb246ICh3Z1JldmlzaW9uSWQgfHwgd2dDdXJSZXZpc2lvbklkKS50b1N0cmluZygpLFxuXHR9KTtcblxuXHRyZXR1cm4gVVJMO1xufTtcblxuZXhwb3J0IHtnZXRVUkx9O1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLHFCQUFpREMsUUFBQSxpQkFBQTs7QUNBakQsSUFBQUMsZ0JBQUE7O0FDQ08sSUFBTUMscUJBQXFCOztBQ0RsQyxJQUFBQyxvQkFBdUJILFFBQUEsaUJBQUE7QUFFdkIsSUFBTUksa0JBQWtCQSxNQUFNO0FBQzdCLFNBQU87SUFDTixNQUFBLEdBQUtELGtCQUFBRSxVQUFTO01BQ2JDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO0lBQ0wsQ0FBQztJQUNELE1BQUEsR0FBS0wsa0JBQUFFLFVBQVM7TUFDYkMsSUFBSTtNQUNK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QUFDcEIyQyxpQkFBZTNDLEdBQUc7QUFDbEI2QyxrQkFBZ0IxQixLQUFLO0FBQ3RCLENBQUM7IiwKICAibmFtZXMiOiBbImltcG9ydF9leHRfZ2FkZ2V0MiIsICJyZXF1aXJlIiwgImVtcHR5X2RlZmF1bHQiLCAiZ2FkZ2V0UmVwb3J0QnV0dG9uIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgImdldEkxOG5NZXNzYWdlcyIsICJsb2NhbGl6ZSIsICJlbiIsICJqYSIsICJ6aCIsICJSZXBvcnQiLCAiUmV2aXNpb24iLCAiaTE4bk1lc3NhZ2VzIiwgImdldE1lc3NhZ2UiLCAia2V5IiwgImVsZW1lbnQiLCAiVVJMIiwgIm9uTW91c2VFbnRlckxlYXZlIiwgIkxJTktfVElUTEUiLCAiYnV0dG9uIiwgImRvY3VtZW50IiwgImNyZWF0ZUVsZW1lbnQiLCAiY2xhc3NOYW1lIiwgImpvaW4iLCAic3JjIiwgIndpZHRoIiwgImhlaWdodCIsICJkcmFnZ2FibGUiLCAiYWx0IiwgInNldEF0dHJpYnV0ZSIsICJhZGRFdmVudExpc3RlbmVyIiwgIndpbmRvdyIsICJvcGVuIiwgImltcG9ydF9leHRfZ2FkZ2V0MyIsICJhZGRCdXR0b24iLCAiJGJvZHkiLCAid2dOYW1lc3BhY2VOdW1iZXIiLCAibXciLCAiY29uZmlnIiwgImdldCIsICJvbk1vdXNlRW50ZXJNb3VzZUxlYXZlIiwgImV2ZW50IiwgImNoYW5nZU9wYWNpdHlXaGVuTW91c2VFbnRlck9yTGVhdmUiLCAidGlwcHkiLCAiYXJyb3ciLCAiY29udGVudCIsICJnZXRBdHRyaWJ1dGUiLCAicGxhY2VtZW50IiwgImFwcGVuZCIsICJzY3JvbGxMaXN0ZW5lciIsICJidXR0b25Cb3R0b20iLCAicXVlcnlTZWxlY3RvciIsICJzdHlsZSIsICJib3R0b20iLCAic2Nyb2xsTGlzdGVuZXJXaXRoVGhyb3R0bGUiLCAidXRpbCIsICJ0aHJvdHRsZSIsICIkIiwgIm9uIiwgImFkZFBvcnRsZXRMaW5rIiwgImxpbmtUaWx0ZSIsICJmaWxsU3BlY2lhbFBhZ2UiLCAiJHdwU3ViamVjdEVsZW1lbnQiLCAiZmluZCIsICJsZW5ndGgiLCAiaXNCb2R5SGFzQ2xhc3MiLCAiaGFzQ2xhc3MiLCAiJHdwVGl0bGVFbGVtZW50IiwgInJlcG9ydFJldmlzaW9uIiwgImdldFBhcmFtVmFsdWUiLCAicmVwb3J0VGl0bGUiLCAidmFsIiwgImltcG9ydF9leHRfZ2FkZ2V0NCIsICJnZXRVUkwiLCAid2dDdXJSZXZpc2lvbklkIiwgIndnUGFnZU5hbWUiLCAid2dSZXZpc2lvbklkIiwgImdldFVybCIsICJyZXBvcnR0aXRsZSIsICJyZXBvcnRyZXZpc2lvbiIsICJ0b1N0cmluZyIsICJnZXRCb2R5IiwgInRoZW4iLCAicmVwb3J0Il0KfQo=

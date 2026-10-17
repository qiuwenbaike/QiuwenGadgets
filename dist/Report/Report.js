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
      en: "Report this page ($1) ",
      ja: "このページを報告（$1）",
      "zh-hans": "报告不良信息（$1）",
      "zh-hant": "報告不良資訊（$1）"
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
  const {
    wgSiteName
  } = mw.config.get();
  const linkTitle = getMessage("Report").replace("$1", wgSiteName);
  const reportRevision = mw.util.getParamValue("reportrevision") || "0";
  let reportTitle = mw.util.getParamValue("reporttitle") || "";
  if (reportRevision !== "0") {
    reportTitle += getMessage("(") + getMessage("Revision") + reportRevision + getMessage(")");
  }
  if (reportTitle) {
    $wpSubjectElement.val(linkTitle + getMessage(":") + reportTitle);
    $wpTitleElement.val(reportTitle);
  } else {
    $wpSubjectElement.val(linkTitle);
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1JlcG9ydC9tb2R1bGVzL2FkZEJ1dHRvbi50cyIsICJzcmMvUmVwb3J0L2ltYWdlcy9lbXB0eS5zdmciLCAic3JjL1JlcG9ydC9tb2R1bGVzL3JlcG9ydEJ1dHRvbi5tb2R1bGUubGVzcyIsICJzcmMvUmVwb3J0L21vZHVsZXMvaTE4bi50cyIsICJzcmMvUmVwb3J0L21vZHVsZXMvcmVwb3J0QnV0dG9uLnRzIiwgInNyYy9SZXBvcnQvbW9kdWxlcy9hZGRQb3J0bGV0TGluay50cyIsICJzcmMvUmVwb3J0L21vZHVsZXMvZmlsbFNwZWNpYWxQYWdlLnRzIiwgInNyYy9SZXBvcnQvUmVwb3J0LnRzIiwgInNyYy9SZXBvcnQvbW9kdWxlcy9nZXRVUkwudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7Y2hhbmdlT3BhY2l0eVdoZW5Nb3VzZUVudGVyT3JMZWF2ZX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbmltcG9ydCB7cmVwb3J0QnV0dG9ufSBmcm9tICcuL3JlcG9ydEJ1dHRvbic7XG5pbXBvcnQge3RpcHB5fSBmcm9tICdleHQuZ2FkZ2V0LlRpcHB5JztcblxuY29uc3QgYWRkQnV0dG9uID0gKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50PiwgVVJMOiBzdHJpbmcpOiB2b2lkID0+IHtcblx0Y29uc3Qge3dnTmFtZXNwYWNlTnVtYmVyfSA9IG13LmNvbmZpZy5nZXQoKTtcblx0aWYgKHdnTmFtZXNwYWNlTnVtYmVyIDwgMCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IG9uTW91c2VFbnRlck1vdXNlTGVhdmUgPSAoZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkID0+IHtcblx0XHRjaGFuZ2VPcGFjaXR5V2hlbk1vdXNlRW50ZXJPckxlYXZlKGV2ZW50KTtcblx0fTtcblxuXHRjb25zdCBidXR0b24gPSByZXBvcnRCdXR0b24oVVJMLCBvbk1vdXNlRW50ZXJNb3VzZUxlYXZlKTtcblxuXHR0aXBweShidXR0b24sIHtcblx0XHRhcnJvdzogdHJ1ZSxcblx0XHRjb250ZW50OiBidXR0b24uZ2V0QXR0cmlidXRlKCdhbHQnKSBhcyBzdHJpbmcsXG5cdFx0cGxhY2VtZW50OiAnbGVmdCcsXG5cdH0pO1xuXG5cdCRib2R5LmFwcGVuZChidXR0b24pO1xuXG5cdGNvbnN0IHNjcm9sbExpc3RlbmVyID0gKCk6IHZvaWQgPT4ge1xuXHRcdGxldCBidXR0b25Cb3R0b206IHN0cmluZztcblxuXHRcdGlmIChcblx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm92ZWl0JykgfHxcblx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYWRnZXQtY2F0X2FfbG90LWNvbnRhaW5lcicpIHx8XG5cdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZ2FkZ2V0LXdvcmRfY291bnQtdGlwJylcblx0XHQpIHtcblx0XHRcdGJ1dHRvbkJvdHRvbSA9ICcyNTNweCc7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGJ1dHRvbkJvdHRvbSA9ICcyMTFweCc7XG5cdFx0fVxuXG5cdFx0YnV0dG9uLnN0eWxlLmJvdHRvbSA9IGJ1dHRvbkJvdHRvbTtcblx0fTtcblx0Y29uc3Qgc2Nyb2xsTGlzdGVuZXJXaXRoVGhyb3R0bGU6IHR5cGVvZiBzY3JvbGxMaXN0ZW5lciA9IG13LnV0aWwudGhyb3R0bGUoc2Nyb2xsTGlzdGVuZXIsIDIwMCk7XG5cblx0JCh3aW5kb3cpLm9uKCdzY3JvbGwgc2VsZWN0aW9uY2hhbmdlJywgc2Nyb2xsTGlzdGVuZXJXaXRoVGhyb3R0bGUpO1xufTtcblxuZXhwb3J0IHthZGRCdXR0b259O1xuIiwgIjxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMVwiIGhlaWdodD1cIjFcIi8+IiwgImltcG9ydCBcImVzYnVpbGQtY3NzLW1vZHVsZXMtcGx1Z2luLW5zLWNzczpzcmMvUmVwb3J0L21vZHVsZXMvcmVwb3J0QnV0dG9uLm1vZHVsZS5sZXNzXCI7XG5leHBvcnQgY29uc3QgZ2FkZ2V0UmVwb3J0QnV0dG9uID0gXCJyZXBvcnRCdXR0b24tbW9kdWxlX19nYWRnZXQtcmVwb3J0LWJ1dHRvbl9GczdmZGFfXzQxMDBcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBcImdhZGdldFJlcG9ydEJ1dHRvblwiOiBnYWRnZXRSZXBvcnRCdXR0b25cbn07XG4gICAgICAiLCAiaW1wb3J0IHtsb2NhbGl6ZX0gZnJvbSAnZXh0LmdhZGdldC5pMThuJztcblxuY29uc3QgZ2V0STE4bk1lc3NhZ2VzID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdCc6JzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICc6ICcsXG5cdFx0XHRqYTogJ++8micsXG5cdFx0XHR6aDogJ++8micsXG5cdFx0fSksXG5cdFx0JygnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJygnLFxuXHRcdFx0amE6ICfvvIgnLFxuXHRcdFx0emg6ICfvvIgnLFxuXHRcdH0pLFxuXHRcdCcpJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICcpJyxcblx0XHRcdGphOiAn77yJJyxcblx0XHRcdHpoOiAn77yJJyxcblx0XHR9KSxcblx0XHRSZXBvcnQ6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnUmVwb3J0IHRoaXMgcGFnZSAoJDEpICcsXG5cdFx0XHRqYTogJ+OBk+OBruODmuODvOOCuOOCkuWgseWRiu+8iCQx77yJJyxcblx0XHRcdCd6aC1oYW5zJzogJ+aKpeWRiuS4jeiJr+S/oeaBr++8iCQx77yJJyxcblx0XHRcdCd6aC1oYW50JzogJ+WgseWRiuS4jeiJr+izh+ioiu+8iCQx77yJJyxcblx0XHR9KSxcblx0XHRSZXZpc2lvbjogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdSZXZpc2lvbicsXG5cdFx0XHRqYTogJ+eJiCcsXG5cdFx0XHR6aDogJ+eJiOacrCcsXG5cdFx0fSksXG5cdH07XG59O1xuXG5jb25zdCBpMThuTWVzc2FnZXMgPSBnZXRJMThuTWVzc2FnZXMoKTtcblxuY29uc3QgZ2V0TWVzc2FnZTogR2V0TWVzc2FnZXM8dHlwZW9mIGkxOG5NZXNzYWdlcz4gPSAoa2V5KSA9PiB7XG5cdHJldHVybiBpMThuTWVzc2FnZXNba2V5XSB8fCBrZXk7XG59O1xuXG5leHBvcnQge2dldE1lc3NhZ2V9O1xuIiwgImltcG9ydCBlbXB0eVN2ZyBmcm9tICcuLi9pbWFnZXMvZW1wdHkuc3ZnJztcbmltcG9ydCB7Z2FkZ2V0UmVwb3J0QnV0dG9ufSBmcm9tICcuL3JlcG9ydEJ1dHRvbi5tb2R1bGUubGVzcyc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vaTE4bic7XG5cbmNvbnN0IGVsZW1lbnQgPSAoVVJMOiBzdHJpbmcsIG9uTW91c2VFbnRlckxlYXZlOiAoZXZlbnQ6IE1vdXNlRXZlbnQpID0+IHZvaWQpID0+IHtcblx0Y29uc3QgTElOS19USVRMRTogc3RyaW5nID0gZ2V0TWVzc2FnZSgnUmVwb3J0Jyk7XG5cblx0Y29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG5cdGJ1dHRvbi5jbGFzc05hbWUgPSBbZ2FkZ2V0UmVwb3J0QnV0dG9uLCAnbm9wcmludCddLmpvaW4oJyAnKTtcblx0YnV0dG9uLnNyYyA9IGVtcHR5U3ZnO1xuXHRidXR0b24ud2lkdGggPSAzMjtcblx0YnV0dG9uLmhlaWdodCA9IDMyO1xuXHRidXR0b24uZHJhZ2dhYmxlID0gZmFsc2U7XG5cdGJ1dHRvbi5hbHQgPSBMSU5LX1RJVExFO1xuXHRidXR0b24uc2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJywgTElOS19USVRMRSk7XG5cblx0YnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk6IHZvaWQgPT4ge1xuXHRcdHdpbmRvdy5vcGVuKFVSTCwgJ19ibGFuaycsICdub29wZW5lciwgbm9yZWZlcnJlcicpO1xuXHR9KTtcblx0YnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBvbk1vdXNlRW50ZXJMZWF2ZSk7XG5cdGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgb25Nb3VzZUVudGVyTGVhdmUpO1xuXG5cdHJldHVybiBidXR0b247XG59O1xuXG5leHBvcnQge2VsZW1lbnQgYXMgcmVwb3J0QnV0dG9ufTtcbiIsICJpbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vaTE4bic7XG5cbmNvbnN0IGFkZFBvcnRsZXRMaW5rID0gKFVSTDogc3RyaW5nKTogdm9pZCA9PiB7XG5cdGNvbnN0IHt3Z05hbWVzcGFjZU51bWJlcn0gPSBtdy5jb25maWcuZ2V0KCk7XG5cdGlmICh3Z05hbWVzcGFjZU51bWJlciA8IDApIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBsaW5rVGlsdGU6IHN0cmluZyA9IGdldE1lc3NhZ2UoJ1JlcG9ydCcpO1xuXHRtdy51dGlsLmFkZFBvcnRsZXRMaW5rKCdwLXRiJywgVVJMLCBsaW5rVGlsdGUsICd0LXJlcG9ydCcsIGxpbmtUaWx0ZSk7XG59O1xuXG5leHBvcnQge2FkZFBvcnRsZXRMaW5rfTtcbiIsICJpbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vaTE4bic7XG5cbmNvbnN0IGZpbGxTcGVjaWFsUGFnZSA9ICgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkID0+IHtcblx0Y29uc3QgJHdwU3ViamVjdEVsZW1lbnQ6IEpRdWVyeTxIVE1MSW5wdXRFbGVtZW50PiA9ICRib2R5LmZpbmQ8SFRNTElucHV0RWxlbWVudD4oJ2lucHV0W25hbWU9XCJ3cFN1YmplY3RcIl0nKTtcblx0aWYgKCEkd3BTdWJqZWN0RWxlbWVudC5sZW5ndGgpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBpc0JvZHlIYXNDbGFzczogYm9vbGVhbiA9XG5cdFx0JGJvZHkuaGFzQ2xhc3MoJ3BhZ2UtU3BlY2lhbF/ogZTns7tfUmVwb3J0JykgfHwgJGJvZHkuaGFzQ2xhc3MoJ3BhZ2UtU3BlY2lhbF/ogZTns7tfcmVwb3J0Jyk7XG5cdGlmICghaXNCb2R5SGFzQ2xhc3MpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCAkd3BUaXRsZUVsZW1lbnQ6IEpRdWVyeTxIVE1MSW5wdXRFbGVtZW50PiA9ICRib2R5LmZpbmQ8SFRNTElucHV0RWxlbWVudD4oJ2lucHV0W25hbWU9XCJ3cFRpdGxlXCJdJyk7XG5cblx0Y29uc3Qge3dnU2l0ZU5hbWV9ID0gbXcuY29uZmlnLmdldCgpO1xuXHRjb25zdCBsaW5rVGl0bGU6IHN0cmluZyA9IGdldE1lc3NhZ2UoJ1JlcG9ydCcpLnJlcGxhY2UoJyQxJywgd2dTaXRlTmFtZSk7XG5cdGNvbnN0IHJlcG9ydFJldmlzaW9uOiBzdHJpbmcgPSBtdy51dGlsLmdldFBhcmFtVmFsdWUoJ3JlcG9ydHJldmlzaW9uJykgfHwgJzAnO1xuXHRsZXQgcmVwb3J0VGl0bGU6IHN0cmluZyA9IG13LnV0aWwuZ2V0UGFyYW1WYWx1ZSgncmVwb3J0dGl0bGUnKSB8fCAnJztcblx0aWYgKHJlcG9ydFJldmlzaW9uICE9PSAnMCcpIHtcblx0XHRyZXBvcnRUaXRsZSArPSBnZXRNZXNzYWdlKCcoJykgKyBnZXRNZXNzYWdlKCdSZXZpc2lvbicpICsgcmVwb3J0UmV2aXNpb24gKyBnZXRNZXNzYWdlKCcpJyk7XG5cdH1cblxuXHRpZiAocmVwb3J0VGl0bGUpIHtcblx0XHQkd3BTdWJqZWN0RWxlbWVudC52YWwobGlua1RpdGxlICsgZ2V0TWVzc2FnZSgnOicpICsgcmVwb3J0VGl0bGUpO1xuXHRcdCR3cFRpdGxlRWxlbWVudC52YWwocmVwb3J0VGl0bGUpO1xuXHR9IGVsc2Uge1xuXHRcdCR3cFN1YmplY3RFbGVtZW50LnZhbChsaW5rVGl0bGUpO1xuXHR9XG59O1xuXG5leHBvcnQge2ZpbGxTcGVjaWFsUGFnZX07XG4iLCAiaW1wb3J0IHthZGRCdXR0b259IGZyb20gJy4vbW9kdWxlcy9hZGRCdXR0b24nO1xuaW1wb3J0IHthZGRQb3J0bGV0TGlua30gZnJvbSAnLi9tb2R1bGVzL2FkZFBvcnRsZXRMaW5rJztcbmltcG9ydCB7ZmlsbFNwZWNpYWxQYWdlfSBmcm9tICcuL21vZHVsZXMvZmlsbFNwZWNpYWxQYWdlJztcbmltcG9ydCB7Z2V0Qm9keX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbmltcG9ydCB7Z2V0VVJMfSBmcm9tICcuL21vZHVsZXMvZ2V0VVJMJztcblxudm9pZCBnZXRCb2R5KCkudGhlbihmdW5jdGlvbiByZXBvcnQoJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KTogdm9pZCB7XG5cdGNvbnN0IFVSTDogc3RyaW5nID0gZ2V0VVJMKCk7XG5cdGFkZEJ1dHRvbigkYm9keSwgVVJMKTtcblx0YWRkUG9ydGxldExpbmsoVVJMKTtcblx0ZmlsbFNwZWNpYWxQYWdlKCRib2R5KTtcbn0pO1xuIiwgImNvbnN0IGdldFVSTCA9ICgpOiBzdHJpbmcgPT4ge1xuXHRjb25zdCB7d2dDdXJSZXZpc2lvbklkLCB3Z1BhZ2VOYW1lLCB3Z1JldmlzaW9uSWR9ID0gbXcuY29uZmlnLmdldCgpO1xuXHRjb25zdCBVUkw6IHN0cmluZyA9IG13LnV0aWwuZ2V0VXJsKCdTcGVjaWFsOkNvbnRhY3QvUmVwb3J0Jywge1xuXHRcdHJlcG9ydHRpdGxlOiB3Z1BhZ2VOYW1lLFxuXHRcdHJlcG9ydHJldmlzaW9uOiAod2dSZXZpc2lvbklkIHx8IHdnQ3VyUmV2aXNpb25JZCkudG9TdHJpbmcoKSxcblx0fSk7XG5cblx0cmV0dXJuIFVSTDtcbn07XG5cbmV4cG9ydCB7Z2V0VVJMfTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxxQkFBaURDLFFBQUEsaUJBQUE7O0FDQWpELElBQUFDLGdCQUFBOztBQ0NPLElBQU1DLHFCQUFxQjs7QUNEbEMsSUFBQUMsb0JBQXVCSCxRQUFBLGlCQUFBO0FBRXZCLElBQU1JLGtCQUFrQkEsTUFBTTtBQUM3QixTQUFPO0lBQ04sTUFBQSxHQUFLRCxrQkFBQUUsVUFBUztNQUNiQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtJQUNMLENBQUM7SUFDRCxNQUFBLEdBQUtMLGtCQUFBRSxVQUFTO01BQ2JDLElB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QUFVQyxPQUFPbkIsR0FBRztBQUNwQjJDLGlCQUFlM0MsR0FBRztBQUNsQjZDLGtCQUFnQjFCLEtBQUs7QUFDdEIsQ0FBQzsiLAogICJuYW1lcyI6IFsiaW1wb3J0X2V4dF9nYWRnZXQyIiwgInJlcXVpcmUiLCAiZW1wdHlfZGVmYXVsdCIsICJnYWRnZXRSZXBvcnRCdXR0b24iLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAiZ2V0STE4bk1lc3NhZ2VzIiwgImxvY2FsaXplIiwgImVuIiwgImphIiwgInpoIiwgIlJlcG9ydCIsICJSZXZpc2lvbiIsICJpMThuTWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAiZWxlbWVudCIsICJVUkwiLCAib25Nb3VzZUVudGVyTGVhdmUiLCAiTElOS19USVRMRSIsICJidXR0b24iLCAiZG9jdW1lbnQiLCAiY3JlYXRlRWxlbWVudCIsICJjbGFzc05hbWUiLCAiam9pbiIsICJzcmMiLCAid2lkdGgiLCAiaGVpZ2h0IiwgImRyYWdnYWJsZSIsICJhbHQiLCAic2V0QXR0cmlidXRlIiwgImFkZEV2ZW50TGlzdGVuZXIiLCAid2luZG93IiwgIm9wZW4iLCAiaW1wb3J0X2V4dF9nYWRnZXQzIiwgImFkZEJ1dHRvbiIsICIkYm9keSIsICJ3Z05hbWVzcGFjZU51bWJlciIsICJtdyIsICJjb25maWciLCAiZ2V0IiwgIm9uTW91c2VFbnRlck1vdXNlTGVhdmUiLCAiZXZlbnQiLCAiY2hhbmdlT3BhY2l0eVdoZW5Nb3VzZUVudGVyT3JMZWF2ZSIsICJ0aXBweSIsICJhcnJvdyIsICJjb250ZW50IiwgImdldEF0dHJpYnV0ZSIsICJwbGFjZW1lbnQiLCAiYXBwZW5kIiwgInNjcm9sbExpc3RlbmVyIiwgImJ1dHRvbkJvdHRvbSIsICJxdWVyeVNlbGVjdG9yIiwgInN0eWxlIiwgImJvdHRvbSIsICJzY3JvbGxMaXN0ZW5lcldpdGhUaHJvdHRsZSIsICJ1dGlsIiwgInRocm90dGxlIiwgIiQiLCAib24iLCAiYWRkUG9ydGxldExpbmsiLCAibGlua1RpbHRlIiwgImZpbGxTcGVjaWFsUGFnZSIsICIkd3BTdWJqZWN0RWxlbWVudCIsICJmaW5kIiwgImxlbmd0aCIsICJpc0JvZHlIYXNDbGFzcyIsICJoYXNDbGFzcyIsICIkd3BUaXRsZUVsZW1lbnQiLCAid2dTaXRlTmFtZSIsICJsaW5rVGl0bGUiLCAicmVwbGFjZSIsICJyZXBvcnRSZXZpc2lvbiIsICJnZXRQYXJhbVZhbHVlIiwgInJlcG9ydFRpdGxlIiwgInZhbCIsICJpbXBvcnRfZXh0X2dhZGdldDQiLCAiZ2V0VVJMIiwgIndnQ3VyUmV2aXNpb25JZCIsICJ3Z1BhZ2VOYW1lIiwgIndnUmV2aXNpb25JZCIsICJnZXRVcmwiLCAicmVwb3J0dGl0bGUiLCAicmVwb3J0cmV2aXNpb24iLCAidG9TdHJpbmciLCAiZ2V0Qm9keSIsICJ0aGVuIiwgInJlcG9ydCJdCn0K

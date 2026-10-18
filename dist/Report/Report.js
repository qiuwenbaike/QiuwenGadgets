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
    "Report Title": (0, import_ext_gadget.localize)({
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
  const linkTitle = getMessage("Report Title").replace("$1", wgSiteName);
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1JlcG9ydC9tb2R1bGVzL2FkZEJ1dHRvbi50cyIsICJzcmMvUmVwb3J0L2ltYWdlcy9lbXB0eS5zdmciLCAic3JjL1JlcG9ydC9tb2R1bGVzL3JlcG9ydEJ1dHRvbi5tb2R1bGUubGVzcyIsICJzcmMvUmVwb3J0L21vZHVsZXMvaTE4bi50cyIsICJzcmMvUmVwb3J0L21vZHVsZXMvcmVwb3J0QnV0dG9uLnRzIiwgInNyYy9SZXBvcnQvbW9kdWxlcy9hZGRQb3J0bGV0TGluay50cyIsICJzcmMvUmVwb3J0L21vZHVsZXMvZmlsbFNwZWNpYWxQYWdlLnRzIiwgInNyYy9SZXBvcnQvUmVwb3J0LnRzIiwgInNyYy9SZXBvcnQvbW9kdWxlcy9nZXRVUkwudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7Y2hhbmdlT3BhY2l0eVdoZW5Nb3VzZUVudGVyT3JMZWF2ZX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbmltcG9ydCB7cmVwb3J0QnV0dG9ufSBmcm9tICcuL3JlcG9ydEJ1dHRvbic7XG5pbXBvcnQge3RpcHB5fSBmcm9tICdleHQuZ2FkZ2V0LlRpcHB5JztcblxuY29uc3QgYWRkQnV0dG9uID0gKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50PiwgVVJMOiBzdHJpbmcpOiB2b2lkID0+IHtcblx0Y29uc3Qge3dnTmFtZXNwYWNlTnVtYmVyfSA9IG13LmNvbmZpZy5nZXQoKTtcblx0aWYgKHdnTmFtZXNwYWNlTnVtYmVyIDwgMCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IG9uTW91c2VFbnRlck1vdXNlTGVhdmUgPSAoZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkID0+IHtcblx0XHRjaGFuZ2VPcGFjaXR5V2hlbk1vdXNlRW50ZXJPckxlYXZlKGV2ZW50KTtcblx0fTtcblxuXHRjb25zdCBidXR0b24gPSByZXBvcnRCdXR0b24oVVJMLCBvbk1vdXNlRW50ZXJNb3VzZUxlYXZlKTtcblxuXHR0aXBweShidXR0b24sIHtcblx0XHRhcnJvdzogdHJ1ZSxcblx0XHRjb250ZW50OiBidXR0b24uZ2V0QXR0cmlidXRlKCdhbHQnKSBhcyBzdHJpbmcsXG5cdFx0cGxhY2VtZW50OiAnbGVmdCcsXG5cdH0pO1xuXG5cdCRib2R5LmFwcGVuZChidXR0b24pO1xuXG5cdGNvbnN0IHNjcm9sbExpc3RlbmVyID0gKCk6IHZvaWQgPT4ge1xuXHRcdGxldCBidXR0b25Cb3R0b206IHN0cmluZztcblxuXHRcdGlmIChcblx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm92ZWl0JykgfHxcblx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYWRnZXQtY2F0X2FfbG90LWNvbnRhaW5lcicpIHx8XG5cdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZ2FkZ2V0LXdvcmRfY291bnQtdGlwJylcblx0XHQpIHtcblx0XHRcdGJ1dHRvbkJvdHRvbSA9ICcyNTNweCc7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGJ1dHRvbkJvdHRvbSA9ICcyMTFweCc7XG5cdFx0fVxuXG5cdFx0YnV0dG9uLnN0eWxlLmJvdHRvbSA9IGJ1dHRvbkJvdHRvbTtcblx0fTtcblx0Y29uc3Qgc2Nyb2xsTGlzdGVuZXJXaXRoVGhyb3R0bGU6IHR5cGVvZiBzY3JvbGxMaXN0ZW5lciA9IG13LnV0aWwudGhyb3R0bGUoc2Nyb2xsTGlzdGVuZXIsIDIwMCk7XG5cblx0JCh3aW5kb3cpLm9uKCdzY3JvbGwgc2VsZWN0aW9uY2hhbmdlJywgc2Nyb2xsTGlzdGVuZXJXaXRoVGhyb3R0bGUpO1xufTtcblxuZXhwb3J0IHthZGRCdXR0b259O1xuIiwgIjxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMVwiIGhlaWdodD1cIjFcIi8+IiwgImltcG9ydCBcImVzYnVpbGQtY3NzLW1vZHVsZXMtcGx1Z2luLW5zLWNzczpzcmMvUmVwb3J0L21vZHVsZXMvcmVwb3J0QnV0dG9uLm1vZHVsZS5sZXNzXCI7XG5leHBvcnQgY29uc3QgZ2FkZ2V0UmVwb3J0QnV0dG9uID0gXCJyZXBvcnRCdXR0b24tbW9kdWxlX19nYWRnZXQtcmVwb3J0LWJ1dHRvbl9GczdmZGFfXzQxMDBcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBcImdhZGdldFJlcG9ydEJ1dHRvblwiOiBnYWRnZXRSZXBvcnRCdXR0b25cbn07XG4gICAgICAiLCAiaW1wb3J0IHtsb2NhbGl6ZX0gZnJvbSAnZXh0LmdhZGdldC5pMThuJztcblxuY29uc3QgZ2V0STE4bk1lc3NhZ2VzID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdCc6JzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICc6ICcsXG5cdFx0XHRqYTogJ++8micsXG5cdFx0XHR6aDogJ++8micsXG5cdFx0fSksXG5cdFx0JygnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJygnLFxuXHRcdFx0amE6ICfvvIgnLFxuXHRcdFx0emg6ICfvvIgnLFxuXHRcdH0pLFxuXHRcdCcpJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICcpJyxcblx0XHRcdGphOiAn77yJJyxcblx0XHRcdHpoOiAn77yJJyxcblx0XHR9KSxcblx0XHRSZXBvcnQ6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnUmVwb3J0IHRoaXMgcGFnZScsXG5cdFx0XHRqYTogJ+OBk+OBruODmuODvOOCuOOCkuWgseWRiicsXG5cdFx0XHQnemgtaGFucyc6ICfmiqXlkYrkuI3oia/kv6Hmga8nLFxuXHRcdFx0J3poLWhhbnQnOiAn5aCx5ZGK5LiN6Imv6LOH6KiKJyxcblx0XHR9KSxcblx0XHQnUmVwb3J0IFRpdGxlJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdSZXBvcnQgdGhpcyBwYWdlICgkMSkgJyxcblx0XHRcdGphOiAn44GT44Gu44Oa44O844K444KS5aCx5ZGK77yIJDHvvIknLFxuXHRcdFx0J3poLWhhbnMnOiAn5oql5ZGK5LiN6Imv5L+h5oGv77yIJDHvvIknLFxuXHRcdFx0J3poLWhhbnQnOiAn5aCx5ZGK5LiN6Imv6LOH6KiK77yIJDHvvIknLFxuXHRcdH0pLFxuXHRcdFJldmlzaW9uOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1JldmlzaW9uJyxcblx0XHRcdGphOiAn54mIJyxcblx0XHRcdHpoOiAn54mI5pysJyxcblx0XHR9KSxcblx0fTtcbn07XG5cbmNvbnN0IGkxOG5NZXNzYWdlcyA9IGdldEkxOG5NZXNzYWdlcygpO1xuXG5jb25zdCBnZXRNZXNzYWdlOiBHZXRNZXNzYWdlczx0eXBlb2YgaTE4bk1lc3NhZ2VzPiA9IChrZXkpID0+IHtcblx0cmV0dXJuIGkxOG5NZXNzYWdlc1trZXldIHx8IGtleTtcbn07XG5cbmV4cG9ydCB7Z2V0TWVzc2FnZX07XG4iLCAiaW1wb3J0IGVtcHR5U3ZnIGZyb20gJy4uL2ltYWdlcy9lbXB0eS5zdmcnO1xuaW1wb3J0IHtnYWRnZXRSZXBvcnRCdXR0b259IGZyb20gJy4vcmVwb3J0QnV0dG9uLm1vZHVsZS5sZXNzJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9pMThuJztcblxuY29uc3QgZWxlbWVudCA9IChVUkw6IHN0cmluZywgb25Nb3VzZUVudGVyTGVhdmU6IChldmVudDogTW91c2VFdmVudCkgPT4gdm9pZCkgPT4ge1xuXHRjb25zdCBMSU5LX1RJVExFOiBzdHJpbmcgPSBnZXRNZXNzYWdlKCdSZXBvcnQnKTtcblxuXHRjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcblx0YnV0dG9uLmNsYXNzTmFtZSA9IFtnYWRnZXRSZXBvcnRCdXR0b24sICdub3ByaW50J10uam9pbignICcpO1xuXHRidXR0b24uc3JjID0gZW1wdHlTdmc7XG5cdGJ1dHRvbi53aWR0aCA9IDMyO1xuXHRidXR0b24uaGVpZ2h0ID0gMzI7XG5cdGJ1dHRvbi5kcmFnZ2FibGUgPSBmYWxzZTtcblx0YnV0dG9uLmFsdCA9IExJTktfVElUTEU7XG5cdGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnLCBMSU5LX1RJVExFKTtcblxuXHRidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKTogdm9pZCA9PiB7XG5cdFx0d2luZG93Lm9wZW4oVVJMLCAnX2JsYW5rJywgJ25vb3BlbmVyLCBub3JlZmVycmVyJyk7XG5cdH0pO1xuXHRidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIG9uTW91c2VFbnRlckxlYXZlKTtcblx0YnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBvbk1vdXNlRW50ZXJMZWF2ZSk7XG5cblx0cmV0dXJuIGJ1dHRvbjtcbn07XG5cbmV4cG9ydCB7ZWxlbWVudCBhcyByZXBvcnRCdXR0b259O1xuIiwgImltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9pMThuJztcblxuY29uc3QgYWRkUG9ydGxldExpbmsgPSAoVVJMOiBzdHJpbmcpOiB2b2lkID0+IHtcblx0Y29uc3Qge3dnTmFtZXNwYWNlTnVtYmVyfSA9IG13LmNvbmZpZy5nZXQoKTtcblx0aWYgKHdnTmFtZXNwYWNlTnVtYmVyIDwgMCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IGxpbmtUaWx0ZTogc3RyaW5nID0gZ2V0TWVzc2FnZSgnUmVwb3J0Jyk7XG5cdG13LnV0aWwuYWRkUG9ydGxldExpbmsoJ3AtdGInLCBVUkwsIGxpbmtUaWx0ZSwgJ3QtcmVwb3J0JywgbGlua1RpbHRlKTtcbn07XG5cbmV4cG9ydCB7YWRkUG9ydGxldExpbmt9O1xuIiwgImltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9pMThuJztcblxuY29uc3QgZmlsbFNwZWNpYWxQYWdlID0gKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQgPT4ge1xuXHRjb25zdCAkd3BTdWJqZWN0RWxlbWVudDogSlF1ZXJ5PEhUTUxJbnB1dEVsZW1lbnQ+ID0gJGJvZHkuZmluZDxIVE1MSW5wdXRFbGVtZW50PignaW5wdXRbbmFtZT1cIndwU3ViamVjdFwiXScpO1xuXHRpZiAoISR3cFN1YmplY3RFbGVtZW50Lmxlbmd0aCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IGlzQm9keUhhc0NsYXNzOiBib29sZWFuID1cblx0XHQkYm9keS5oYXNDbGFzcygncGFnZS1TcGVjaWFsX+iBlOezu19SZXBvcnQnKSB8fCAkYm9keS5oYXNDbGFzcygncGFnZS1TcGVjaWFsX+iBlOezu19yZXBvcnQnKTtcblx0aWYgKCFpc0JvZHlIYXNDbGFzcykge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0ICR3cFRpdGxlRWxlbWVudDogSlF1ZXJ5PEhUTUxJbnB1dEVsZW1lbnQ+ID0gJGJvZHkuZmluZDxIVE1MSW5wdXRFbGVtZW50PignaW5wdXRbbmFtZT1cIndwVGl0bGVcIl0nKTtcblxuXHRjb25zdCB7d2dTaXRlTmFtZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cdGNvbnN0IGxpbmtUaXRsZTogc3RyaW5nID0gZ2V0TWVzc2FnZSgnUmVwb3J0IFRpdGxlJykucmVwbGFjZSgnJDEnLCB3Z1NpdGVOYW1lKTtcblx0Y29uc3QgcmVwb3J0UmV2aXNpb246IHN0cmluZyA9IG13LnV0aWwuZ2V0UGFyYW1WYWx1ZSgncmVwb3J0cmV2aXNpb24nKSB8fCAnMCc7XG5cdGxldCByZXBvcnRUaXRsZTogc3RyaW5nID0gbXcudXRpbC5nZXRQYXJhbVZhbHVlKCdyZXBvcnR0aXRsZScpIHx8ICcnO1xuXHRpZiAocmVwb3J0UmV2aXNpb24gIT09ICcwJykge1xuXHRcdHJlcG9ydFRpdGxlICs9IGdldE1lc3NhZ2UoJygnKSArIGdldE1lc3NhZ2UoJ1JldmlzaW9uJykgKyByZXBvcnRSZXZpc2lvbiArIGdldE1lc3NhZ2UoJyknKTtcblx0fVxuXG5cdGlmIChyZXBvcnRUaXRsZSkge1xuXHRcdCR3cFN1YmplY3RFbGVtZW50LnZhbChsaW5rVGl0bGUgKyBnZXRNZXNzYWdlKCc6JykgKyByZXBvcnRUaXRsZSk7XG5cdFx0JHdwVGl0bGVFbGVtZW50LnZhbChyZXBvcnRUaXRsZSk7XG5cdH0gZWxzZSB7XG5cdFx0JHdwU3ViamVjdEVsZW1lbnQudmFsKGxpbmtUaXRsZSk7XG5cdH1cbn07XG5cbmV4cG9ydCB7ZmlsbFNwZWNpYWxQYWdlfTtcbiIsICJpbXBvcnQge2FkZEJ1dHRvbn0gZnJvbSAnLi9tb2R1bGVzL2FkZEJ1dHRvbic7XG5pbXBvcnQge2FkZFBvcnRsZXRMaW5rfSBmcm9tICcuL21vZHVsZXMvYWRkUG9ydGxldExpbmsnO1xuaW1wb3J0IHtmaWxsU3BlY2lhbFBhZ2V9IGZyb20gJy4vbW9kdWxlcy9maWxsU3BlY2lhbFBhZ2UnO1xuaW1wb3J0IHtnZXRCb2R5fSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuaW1wb3J0IHtnZXRVUkx9IGZyb20gJy4vbW9kdWxlcy9nZXRVUkwnO1xuXG52b2lkIGdldEJvZHkoKS50aGVuKGZ1bmN0aW9uIHJlcG9ydCgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkIHtcblx0Y29uc3QgVVJMOiBzdHJpbmcgPSBnZXRVUkwoKTtcblx0YWRkQnV0dG9uKCRib2R5LCBVUkwpO1xuXHRhZGRQb3J0bGV0TGluayhVUkwpO1xuXHRmaWxsU3BlY2lhbFBhZ2UoJGJvZHkpO1xufSk7XG4iLCAiY29uc3QgZ2V0VVJMID0gKCk6IHN0cmluZyA9PiB7XG5cdGNvbnN0IHt3Z0N1clJldmlzaW9uSWQsIHdnUGFnZU5hbWUsIHdnUmV2aXNpb25JZH0gPSBtdy5jb25maWcuZ2V0KCk7XG5cdGNvbnN0IFVSTDogc3RyaW5nID0gbXcudXRpbC5nZXRVcmwoJ1NwZWNpYWw6Q29udGFjdC9SZXBvcnQnLCB7XG5cdFx0cmVwb3J0dGl0bGU6IHdnUGFnZU5hbWUsXG5cdFx0cmVwb3J0cmV2aXNpb246ICh3Z1JldmlzaW9uSWQgfHwgd2dDdXJSZXZpc2lvbklkKS50b1N0cmluZygpLFxuXHR9KTtcblxuXHRyZXR1cm4gVVJMO1xufTtcblxuZXhwb3J0IHtnZXRVUkx9O1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLHFCQUFpREMsUUFBQSxpQkFBQTs7QUNBakQsSUFBQUMsZ0JB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TUFBYztBQUM1QixRQUFNO0lBQUNDO0lBQWlCQztJQUFZQztFQUFZLElBQUkxQyxHQUFHQyxPQUFPQyxJQUFJO0FBQ2xFLFFBQU12QixNQUFjcUIsR0FBR2tCLEtBQUt5QixPQUFPLDBCQUEwQjtJQUM1REMsYUFBYUg7SUFDYkksaUJBQWlCSCxnQkFBZ0JGLGlCQUFpQk0sU0FBUztFQUM1RCxDQUFDO0FBRUQsU0FBT25FO0FBQ1I7O0FERkEsTUFBQSxHQUFLMkQsbUJBQUFTLFNBQVEsRUFBRUMsS0FBSyxTQUFTQyxPQUFPbkQsT0FBc0M7QUFDekUsUUFBTW5CLE1BQWM0RCxPQUFPO0FBQzNCMUMsWUFBVUMsT0FBT25CLEdBQUc7QUFDcEIyQyxpQkFBZTNDLEdBQUc7QUFDbEI2QyxrQkFBZ0IxQixLQUFLO0FBQ3RCLENBQUM7IiwKICAibmFtZXMiOiBbImltcG9ydF9leHRfZ2FkZ2V0MiIsICJyZXF1aXJlIiwgImVtcHR5X2RlZmF1bHQiLCAiZ2FkZ2V0UmVwb3J0QnV0dG9uIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgImdldEkxOG5NZXNzYWdlcyIsICJsb2NhbGl6ZSIsICJlbiIsICJqYSIsICJ6aCIsICJSZXBvcnQiLCAiUmV2aXNpb24iLCAiaTE4bk1lc3NhZ2VzIiwgImdldE1lc3NhZ2UiLCAia2V5IiwgImVsZW1lbnQiLCAiVVJMIiwgIm9uTW91c2VFbnRlckxlYXZlIiwgIkxJTktfVElUTEUiLCAiYnV0dG9uIiwgImRvY3VtZW50IiwgImNyZWF0ZUVsZW1lbnQiLCAiY2xhc3NOYW1lIiwgImpvaW4iLCAic3JjIiwgIndpZHRoIiwgImhlaWdodCIsICJkcmFnZ2FibGUiLCAiYWx0IiwgInNldEF0dHJpYnV0ZSIsICJhZGRFdmVudExpc3RlbmVyIiwgIndpbmRvdyIsICJvcGVuIiwgImltcG9ydF9leHRfZ2FkZ2V0MyIsICJhZGRCdXR0b24iLCAiJGJvZHkiLCAid2dOYW1lc3BhY2VOdW1iZXIiLCAibXciLCAiY29uZmlnIiwgImdldCIsICJvbk1vdXNlRW50ZXJNb3VzZUxlYXZlIiwgImV2ZW50IiwgImNoYW5nZU9wYWNpdHlXaGVuTW91c2VFbnRlck9yTGVhdmUiLCAidGlwcHkiLCAiYXJyb3ciLCAiY29udGVudCIsICJnZXRBdHRyaWJ1dGUiLCAicGxhY2VtZW50IiwgImFwcGVuZCIsICJzY3JvbGxMaXN0ZW5lciIsICJidXR0b25Cb3R0b20iLCAicXVlcnlTZWxlY3RvciIsICJzdHlsZSIsICJib3R0b20iLCAic2Nyb2xsTGlzdGVuZXJXaXRoVGhyb3R0bGUiLCAidXRpbCIsICJ0aHJvdHRsZSIsICIkIiwgIm9uIiwgImFkZFBvcnRsZXRMaW5rIiwgImxpbmtUaWx0ZSIsICJmaWxsU3BlY2lhbFBhZ2UiLCAiJHdwU3ViamVjdEVsZW1lbnQiLCAiZmluZCIsICJsZW5ndGgiLCAiaXNCb2R5SGFzQ2xhc3MiLCAiaGFzQ2xhc3MiLCAiJHdwVGl0bGVFbGVtZW50IiwgIndnU2l0ZU5hbWUiLCAibGlua1RpdGxlIiwgInJlcGxhY2UiLCAicmVwb3J0UmV2aXNpb24iLCAiZ2V0UGFyYW1WYWx1ZSIsICJyZXBvcnRUaXRsZSIsICJ2YWwiLCAiaW1wb3J0X2V4dF9nYWRnZXQ0IiwgImdldFVSTCIsICJ3Z0N1clJldmlzaW9uSWQiLCAid2dQYWdlTmFtZSIsICJ3Z1JldmlzaW9uSWQiLCAiZ2V0VXJsIiwgInJlcG9ydHRpdGxlIiwgInJlcG9ydHJldmlzaW9uIiwgInRvU3RyaW5nIiwgImdldEJvZHkiLCAidGhlbiIsICJyZXBvcnQiXQp9Cg==

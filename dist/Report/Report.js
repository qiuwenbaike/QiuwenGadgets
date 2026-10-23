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
  button.src = "data:image/svg+xml,".concat(encodeURI(empty_default));
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1JlcG9ydC9tb2R1bGVzL2FkZEJ1dHRvbi50cyIsICJzcmMvUmVwb3J0L2ltYWdlcy9lbXB0eS5zdmciLCAic3JjL1JlcG9ydC9tb2R1bGVzL3JlcG9ydEJ1dHRvbi5tb2R1bGUubGVzcyIsICJzcmMvUmVwb3J0L21vZHVsZXMvaTE4bi50cyIsICJzcmMvUmVwb3J0L21vZHVsZXMvcmVwb3J0QnV0dG9uLnRzIiwgInNyYy9SZXBvcnQvbW9kdWxlcy9hZGRQb3J0bGV0TGluay50cyIsICJzcmMvUmVwb3J0L21vZHVsZXMvZmlsbFNwZWNpYWxQYWdlLnRzIiwgInNyYy9SZXBvcnQvUmVwb3J0LnRzIiwgInNyYy9SZXBvcnQvbW9kdWxlcy9nZXRVUkwudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7Y2hhbmdlT3BhY2l0eVdoZW5Nb3VzZUVudGVyT3JMZWF2ZX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbmltcG9ydCB7cmVwb3J0QnV0dG9ufSBmcm9tICcuL3JlcG9ydEJ1dHRvbic7XG5pbXBvcnQge3RpcHB5fSBmcm9tICdleHQuZ2FkZ2V0LlRpcHB5JztcblxuY29uc3QgYWRkQnV0dG9uID0gKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50PiwgVVJMOiBzdHJpbmcpOiB2b2lkID0+IHtcblx0Y29uc3Qge3dnTmFtZXNwYWNlTnVtYmVyfSA9IG13LmNvbmZpZy5nZXQoKTtcblx0aWYgKHdnTmFtZXNwYWNlTnVtYmVyIDwgMCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IG9uTW91c2VFbnRlck1vdXNlTGVhdmUgPSAoZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkID0+IHtcblx0XHRjaGFuZ2VPcGFjaXR5V2hlbk1vdXNlRW50ZXJPckxlYXZlKGV2ZW50KTtcblx0fTtcblxuXHRjb25zdCBidXR0b24gPSByZXBvcnRCdXR0b24oVVJMLCBvbk1vdXNlRW50ZXJNb3VzZUxlYXZlKTtcblxuXHR0aXBweShidXR0b24sIHtcblx0XHRhcnJvdzogdHJ1ZSxcblx0XHRjb250ZW50OiBidXR0b24uZ2V0QXR0cmlidXRlKCdhbHQnKSBhcyBzdHJpbmcsXG5cdFx0cGxhY2VtZW50OiAnbGVmdCcsXG5cdH0pO1xuXG5cdCRib2R5LmFwcGVuZChidXR0b24pO1xuXG5cdGNvbnN0IHNjcm9sbExpc3RlbmVyID0gKCk6IHZvaWQgPT4ge1xuXHRcdGxldCBidXR0b25Cb3R0b206IHN0cmluZztcblxuXHRcdGlmIChcblx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm92ZWl0JykgfHxcblx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYWRnZXQtY2F0X2FfbG90LWNvbnRhaW5lcicpIHx8XG5cdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZ2FkZ2V0LXdvcmRfY291bnQtdGlwJylcblx0XHQpIHtcblx0XHRcdGJ1dHRvbkJvdHRvbSA9ICcyNTNweCc7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGJ1dHRvbkJvdHRvbSA9ICcyMTFweCc7XG5cdFx0fVxuXG5cdFx0YnV0dG9uLnN0eWxlLmJvdHRvbSA9IGJ1dHRvbkJvdHRvbTtcblx0fTtcblx0Y29uc3Qgc2Nyb2xsTGlzdGVuZXJXaXRoVGhyb3R0bGU6IHR5cGVvZiBzY3JvbGxMaXN0ZW5lciA9IG13LnV0aWwudGhyb3R0bGUoc2Nyb2xsTGlzdGVuZXIsIDIwMCk7XG5cblx0JCh3aW5kb3cpLm9uKCdzY3JvbGwgc2VsZWN0aW9uY2hhbmdlJywgc2Nyb2xsTGlzdGVuZXJXaXRoVGhyb3R0bGUpO1xufTtcblxuZXhwb3J0IHthZGRCdXR0b259O1xuIiwgIjxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMVwiIGhlaWdodD1cIjFcIi8+IiwgImltcG9ydCBcImVzYnVpbGQtY3NzLW1vZHVsZXMtcGx1Z2luLW5zLWNzczpzcmMvUmVwb3J0L21vZHVsZXMvcmVwb3J0QnV0dG9uLm1vZHVsZS5sZXNzXCI7XG5leHBvcnQgY29uc3QgZ2FkZ2V0UmVwb3J0QnV0dG9uID0gXCJyZXBvcnRCdXR0b24tbW9kdWxlX19nYWRnZXQtcmVwb3J0LWJ1dHRvbl9GczdmZGFfXzQxMDBcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBcImdhZGdldFJlcG9ydEJ1dHRvblwiOiBnYWRnZXRSZXBvcnRCdXR0b25cbn07XG4gICAgICAiLCAiaW1wb3J0IHtsb2NhbGl6ZX0gZnJvbSAnZXh0LmdhZGdldC5pMThuJztcblxuY29uc3QgZ2V0STE4bk1lc3NhZ2VzID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdCc6JzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICc6ICcsXG5cdFx0XHRqYTogJ++8micsXG5cdFx0XHR6aDogJ++8micsXG5cdFx0fSksXG5cdFx0JygnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJygnLFxuXHRcdFx0amE6ICfvvIgnLFxuXHRcdFx0emg6ICfvvIgnLFxuXHRcdH0pLFxuXHRcdCcpJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICcpJyxcblx0XHRcdGphOiAn77yJJyxcblx0XHRcdHpoOiAn77yJJyxcblx0XHR9KSxcblx0XHRSZXBvcnQ6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnUmVwb3J0IHRoaXMgcGFnZScsXG5cdFx0XHRqYTogJ+OBk+OBruODmuODvOOCuOOCkuWgseWRiicsXG5cdFx0XHQnemgtaGFucyc6ICfmiqXlkYrkuI3oia/kv6Hmga8nLFxuXHRcdFx0J3poLWhhbnQnOiAn5aCx5ZGK5LiN6Imv6LOH6KiKJyxcblx0XHR9KSxcblx0XHQnUmVwb3J0IFRpdGxlJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdSZXBvcnQgdGhpcyBwYWdlICgkMSkgJyxcblx0XHRcdGphOiAn44GT44Gu44Oa44O844K444KS5aCx5ZGK77yIJDHvvIknLFxuXHRcdFx0J3poLWhhbnMnOiAn5oql5ZGK5LiN6Imv5L+h5oGv77yIJDHvvIknLFxuXHRcdFx0J3poLWhhbnQnOiAn5aCx5ZGK5LiN6Imv6LOH6KiK77yIJDHvvIknLFxuXHRcdH0pLFxuXHRcdFJldmlzaW9uOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1JldmlzaW9uJyxcblx0XHRcdGphOiAn54mIJyxcblx0XHRcdHpoOiAn54mI5pysJyxcblx0XHR9KSxcblx0fTtcbn07XG5cbmNvbnN0IGkxOG5NZXNzYWdlcyA9IGdldEkxOG5NZXNzYWdlcygpO1xuXG5jb25zdCBnZXRNZXNzYWdlOiBHZXRNZXNzYWdlczx0eXBlb2YgaTE4bk1lc3NhZ2VzPiA9IChrZXkpID0+IHtcblx0cmV0dXJuIGkxOG5NZXNzYWdlc1trZXldIHx8IGtleTtcbn07XG5cbmV4cG9ydCB7Z2V0TWVzc2FnZX07XG4iLCAiaW1wb3J0IGVtcHR5U3ZnIGZyb20gJy4uL2ltYWdlcy9lbXB0eS5zdmcnO1xuaW1wb3J0IHtnYWRnZXRSZXBvcnRCdXR0b259IGZyb20gJy4vcmVwb3J0QnV0dG9uLm1vZHVsZS5sZXNzJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9pMThuJztcblxuY29uc3QgZWxlbWVudCA9IChVUkw6IHN0cmluZywgb25Nb3VzZUVudGVyTGVhdmU6IChldmVudDogTW91c2VFdmVudCkgPT4gdm9pZCkgPT4ge1xuXHRjb25zdCBMSU5LX1RJVExFOiBzdHJpbmcgPSBnZXRNZXNzYWdlKCdSZXBvcnQnKTtcblxuXHRjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcblx0YnV0dG9uLmNsYXNzTmFtZSA9IFtnYWRnZXRSZXBvcnRCdXR0b24sICdub3ByaW50J10uam9pbignICcpO1xuXHRidXR0b24uc3JjID0gYGRhdGE6aW1hZ2Uvc3ZnK3htbCwke2VuY29kZVVSSShlbXB0eVN2Zyl9YDtcblx0YnV0dG9uLndpZHRoID0gMzI7XG5cdGJ1dHRvbi5oZWlnaHQgPSAzMjtcblx0YnV0dG9uLmRyYWdnYWJsZSA9IGZhbHNlO1xuXHRidXR0b24uYWx0ID0gTElOS19USVRMRTtcblx0YnV0dG9uLnNldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcsIExJTktfVElUTEUpO1xuXG5cdGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpOiB2b2lkID0+IHtcblx0XHR3aW5kb3cub3BlbihVUkwsICdfYmxhbmsnLCAnbm9vcGVuZXIsIG5vcmVmZXJyZXInKTtcblx0fSk7XG5cdGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgb25Nb3VzZUVudGVyTGVhdmUpO1xuXHRidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIG9uTW91c2VFbnRlckxlYXZlKTtcblxuXHRyZXR1cm4gYnV0dG9uO1xufTtcblxuZXhwb3J0IHtlbGVtZW50IGFzIHJlcG9ydEJ1dHRvbn07XG4iLCAiaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL2kxOG4nO1xuXG5jb25zdCBhZGRQb3J0bGV0TGluayA9IChVUkw6IHN0cmluZyk6IHZvaWQgPT4ge1xuXHRjb25zdCB7d2dOYW1lc3BhY2VOdW1iZXJ9ID0gbXcuY29uZmlnLmdldCgpO1xuXHRpZiAod2dOYW1lc3BhY2VOdW1iZXIgPCAwKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgbGlua1RpbHRlOiBzdHJpbmcgPSBnZXRNZXNzYWdlKCdSZXBvcnQnKTtcblx0bXcudXRpbC5hZGRQb3J0bGV0TGluaygncC10YicsIFVSTCwgbGlua1RpbHRlLCAndC1yZXBvcnQnLCBsaW5rVGlsdGUpO1xufTtcblxuZXhwb3J0IHthZGRQb3J0bGV0TGlua307XG4iLCAiaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL2kxOG4nO1xuXG5jb25zdCBmaWxsU3BlY2lhbFBhZ2UgPSAoJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KTogdm9pZCA9PiB7XG5cdGNvbnN0ICR3cFN1YmplY3RFbGVtZW50OiBKUXVlcnk8SFRNTElucHV0RWxlbWVudD4gPSAkYm9keS5maW5kPEhUTUxJbnB1dEVsZW1lbnQ+KCdpbnB1dFtuYW1lPVwid3BTdWJqZWN0XCJdJyk7XG5cdGlmICghJHdwU3ViamVjdEVsZW1lbnQubGVuZ3RoKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgaXNCb2R5SGFzQ2xhc3M6IGJvb2xlYW4gPVxuXHRcdCRib2R5Lmhhc0NsYXNzKCdwYWdlLVNwZWNpYWxf6IGU57O7X1JlcG9ydCcpIHx8ICRib2R5Lmhhc0NsYXNzKCdwYWdlLVNwZWNpYWxf6IGU57O7X3JlcG9ydCcpO1xuXHRpZiAoIWlzQm9keUhhc0NsYXNzKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgJHdwVGl0bGVFbGVtZW50OiBKUXVlcnk8SFRNTElucHV0RWxlbWVudD4gPSAkYm9keS5maW5kPEhUTUxJbnB1dEVsZW1lbnQ+KCdpbnB1dFtuYW1lPVwid3BUaXRsZVwiXScpO1xuXG5cdGNvbnN0IHt3Z1NpdGVOYW1lfSA9IG13LmNvbmZpZy5nZXQoKTtcblx0Y29uc3QgbGlua1RpdGxlOiBzdHJpbmcgPSBnZXRNZXNzYWdlKCdSZXBvcnQgVGl0bGUnKS5yZXBsYWNlKCckMScsIHdnU2l0ZU5hbWUpO1xuXHRjb25zdCByZXBvcnRSZXZpc2lvbjogc3RyaW5nID0gbXcudXRpbC5nZXRQYXJhbVZhbHVlKCdyZXBvcnRyZXZpc2lvbicpIHx8ICcwJztcblx0bGV0IHJlcG9ydFRpdGxlOiBzdHJpbmcgPSBtdy51dGlsLmdldFBhcmFtVmFsdWUoJ3JlcG9ydHRpdGxlJykgfHwgJyc7XG5cdGlmIChyZXBvcnRSZXZpc2lvbiAhPT0gJzAnKSB7XG5cdFx0cmVwb3J0VGl0bGUgKz0gZ2V0TWVzc2FnZSgnKCcpICsgZ2V0TWVzc2FnZSgnUmV2aXNpb24nKSArIHJlcG9ydFJldmlzaW9uICsgZ2V0TWVzc2FnZSgnKScpO1xuXHR9XG5cblx0aWYgKHJlcG9ydFRpdGxlKSB7XG5cdFx0JHdwU3ViamVjdEVsZW1lbnQudmFsKGxpbmtUaXRsZSArIGdldE1lc3NhZ2UoJzonKSArIHJlcG9ydFRpdGxlKTtcblx0XHQkd3BUaXRsZUVsZW1lbnQudmFsKHJlcG9ydFRpdGxlKTtcblx0fSBlbHNlIHtcblx0XHQkd3BTdWJqZWN0RWxlbWVudC52YWwobGlua1RpdGxlKTtcblx0fVxufTtcblxuZXhwb3J0IHtmaWxsU3BlY2lhbFBhZ2V9O1xuIiwgImltcG9ydCB7YWRkQnV0dG9ufSBmcm9tICcuL21vZHVsZXMvYWRkQnV0dG9uJztcbmltcG9ydCB7YWRkUG9ydGxldExpbmt9IGZyb20gJy4vbW9kdWxlcy9hZGRQb3J0bGV0TGluayc7XG5pbXBvcnQge2ZpbGxTcGVjaWFsUGFnZX0gZnJvbSAnLi9tb2R1bGVzL2ZpbGxTcGVjaWFsUGFnZSc7XG5pbXBvcnQge2dldEJvZHl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5pbXBvcnQge2dldFVSTH0gZnJvbSAnLi9tb2R1bGVzL2dldFVSTCc7XG5cbnZvaWQgZ2V0Qm9keSgpLnRoZW4oZnVuY3Rpb24gcmVwb3J0KCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQge1xuXHRjb25zdCBVUkw6IHN0cmluZyA9IGdldFVSTCgpO1xuXHRhZGRCdXR0b24oJGJvZHksIFVSTCk7XG5cdGFkZFBvcnRsZXRMaW5rKFVSTCk7XG5cdGZpbGxTcGVjaWFsUGFnZSgkYm9keSk7XG59KTtcbiIsICJjb25zdCBnZXRVUkwgPSAoKTogc3RyaW5nID0+IHtcblx0Y29uc3Qge3dnQ3VyUmV2aXNpb25JZCwgd2dQYWdlTmFtZSwgd2dSZXZpc2lvbklkfSA9IG13LmNvbmZpZy5nZXQoKTtcblx0Y29uc3QgVVJMOiBzdHJpbmcgPSBtdy51dGlsLmdldFVybCgnU3BlY2lhbDpDb250YWN0L1JlcG9ydCcsIHtcblx0XHRyZXBvcnR0aXRsZTogd2dQYWdlTmFtZSxcblx0XHRyZXBvcnRyZXZpc2lvbjogKHdnUmV2aXNpb25JZCB8fCB3Z0N1clJldmlzaW9uSWQpLnRvU3RyaW5nKCksXG5cdH0pO1xuXG5cdHJldHVybiBVUkw7XG59O1xuXG5leHBvcnQge2dldFVSTH07XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEs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UztFQUNoQztBQUNEOztBQzNCQSxJQUFBTSxxQkFBc0I1RSxRQUFBLGlCQUFBOztBQ0h0QixJQUFNNkUsU0FBU0EsTUFBYztBQUM1QixRQUFNO0lBQUNDO0lBQWlCQztJQUFZQztFQUFZLElBQUkxQyxHQUFHQyxPQUFPQyxJQUFJO0FBQ2xFLFFBQU16QixNQUFjdUIsR0FBR2tCLEtBQUt5QixPQUFPLDBCQUEwQjtJQUM1REMsYUFBYUg7SUFDYkksaUJBQWlCSCxnQkFBZ0JGLGlCQUFpQk0sU0FBUztFQUM1RCxDQUFDO0FBRUQsU0FBT3JFO0FBQ1I7O0FERkEsTUFBQSxHQUFLNkQsbUJBQUFTLFNBQVEsRUFBRUMsS0FBSyxTQUFTQyxPQUFPbkQsT0FBc0M7QUFDekUsUUFBTXJCLE1BQWM4RCxPQUFPO0FBQzNCMUMsWUFBVUMsT0FBT3JCLEdBQUc7QUFDcEI2QyxpQkFBZTdDLEdBQUc7QUFDbEIrQyxrQkFBZ0IxQixLQUFLO0FBQ3RCLENBQUM7IiwKICAibmFtZXMiOiBbImltcG9ydF9leHRfZ2FkZ2V0MiIsICJyZXF1aXJlIiwgImVtcHR5X2RlZmF1bHQiLCAiZ2FkZ2V0UmVwb3J0QnV0dG9uIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgImdldEkxOG5NZXNzYWdlcyIsICJsb2NhbGl6ZSIsICJlbiIsICJqYSIsICJ6aCIsICJSZXBvcnQiLCAiUmV2aXNpb24iLCAiaTE4bk1lc3NhZ2VzIiwgImdldE1lc3NhZ2UiLCAia2V5IiwgImVsZW1lbnQiLCAiVVJMIiwgIm9uTW91c2VFbnRlckxlYXZlIiwgIkxJTktfVElUTEUiLCAiYnV0dG9uIiwgImRvY3VtZW50IiwgImNyZWF0ZUVsZW1lbnQiLCAiY2xhc3NOYW1lIiwgImpvaW4iLCAic3JjIiwgImNvbmNhdCIsICJlbmNvZGVVUkkiLCAid2lkdGgiLCAiaGVpZ2h0IiwgImRyYWdnYWJsZSIsICJhbHQiLCAic2V0QXR0cmlidXRlIiwgImFkZEV2ZW50TGlzdGVuZXIiLCAid2luZG93IiwgIm9wZW4iLCAiaW1wb3J0X2V4dF9nYWRnZXQzIiwgImFkZEJ1dHRvbiIsICIkYm9keSIsICJ3Z05hbWVzcGFjZU51bWJlciIsICJtdyIsICJjb25maWciLCAiZ2V0IiwgIm9uTW91c2VFbnRlck1vdXNlTGVhdmUiLCAiZXZlbnQiLCAiY2hhbmdlT3BhY2l0eVdoZW5Nb3VzZUVudGVyT3JMZWF2ZSIsICJ0aXBweSIsICJhcnJvdyIsICJjb250ZW50IiwgImdldEF0dHJpYnV0ZSIsICJwbGFjZW1lbnQiLCAiYXBwZW5kIiwgInNjcm9sbExpc3RlbmVyIiwgImJ1dHRvbkJvdHRvbSIsICJxdWVyeVNlbGVjdG9yIiwgInN0eWxlIiwgImJvdHRvbSIsICJzY3JvbGxMaXN0ZW5lcldpdGhUaHJvdHRsZSIsICJ1dGlsIiwgInRocm90dGxlIiwgIiQiLCAib24iLCAiYWRkUG9ydGxldExpbmsiLCAibGlua1RpbHRlIiwgImZpbGxTcGVjaWFsUGFnZSIsICIkd3BTdWJqZWN0RWxlbWVudCIsICJmaW5kIiwgImxlbmd0aCIsICJpc0JvZHlIYXNDbGFzcyIsICJoYXNDbGFzcyIsICIkd3BUaXRsZUVsZW1lbnQiLCAid2dTaXRlTmFtZSIsICJsaW5rVGl0bGUiLCAicmVwbGFjZSIsICJyZXBvcnRSZXZpc2lvbiIsICJnZXRQYXJhbVZhbHVlIiwgInJlcG9ydFRpdGxlIiwgInZhbCIsICJpbXBvcnRfZXh0X2dhZGdldDQiLCAiZ2V0VVJMIiwgIndnQ3VyUmV2aXNpb25JZCIsICJ3Z1BhZ2VOYW1lIiwgIndnUmV2aXNpb25JZCIsICJnZXRVcmwiLCAicmVwb3J0dGl0bGUiLCAicmVwb3J0cmV2aXNpb24iLCAidG9TdHJpbmciLCAiZ2V0Qm9keSIsICJ0aGVuIiwgInJlcG9ydCJdCn0K

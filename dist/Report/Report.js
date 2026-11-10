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
  button.src = `data:image/svg+xml,${encodeURI(empty_default)}`;
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


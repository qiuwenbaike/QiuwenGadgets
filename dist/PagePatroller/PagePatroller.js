/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://zh.wikipedia.org/wiki/User:WhitePhosphorus/js/PagePatroller.js}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/PagePatroller}
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

// dist/PagePatroller/PagePatroller.js
//! src/PagePatroller/options.json
var elementId = "footer-info-patroller";
var mountPointSelector = "#footer-info,.page-info";
var storageKey = "ext.gadget.PagePatroller_getPatroller-";
//! src/PagePatroller/modules/i18n.ts
var import_ext_gadget = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    "Loading...": (0, import_ext_gadget.localize)({
      en: "Loading...",
      "zh-hans": "正在加载此页面的巡查者……",
      "zh-hant": "正在加載此頁面的巡查者……"
    }),
    "This page has not been patrolled yet": (0, import_ext_gadget.localize)({
      en: "This page has not been patrolled yet.",
      "zh-hans": "此页面尚未被巡查。",
      "zh-hant": "此頁面尚未被巡查。"
    }),
    "This page was patrolled at by": (0, import_ext_gadget.localize)({
      en: "This page was patrolled at $1 by",
      "zh-hans": "此页面巡查于$1，巡查者是",
      "zh-hant": "此頁面巡查於$1，巡查者是"
    }),
    "This page has been patrolled, or has been marked as auto-patrolled": (0, import_ext_gadget.localize)({
      en: "This page has been patrolled, or has been marked as auto-patrolled.",
      "zh-hans": "此页面尚未被巡查，或已自动标为已巡查。",
      "zh-hant": "此頁面尚未被巡查，或已自動標爲已巡查。"
    }),
    "Error occurs when finding patroller": (0, import_ext_gadget.localize)({
      en: "Error occurs when finding patroller.",
      "zh-hans": "查找巡查者时出现错误。",
      "zh-hant": "查找巡查者時出現錯誤。"
    }),
    period: (0, import_ext_gadget.localize)({
      en: ".",
      zh: "。"
    })
  };
};
var i18nMessages = getI18nMessages();
var getMessage = (key) => {
  return i18nMessages[key] || key;
};
//! src/PagePatroller/modules/util/getFooterNotices.ts
var notPatrolledYet = () => {
  const span = document.createElement("span");
  span.id = "page_patroller__not-patrolled";
  span.textContent = getMessage("This page has not been patrolled yet");
  return span;
};
var patrolledBy = (props) => {
  if (props && props.user && props.timestamp) {
    const {
      timestamp,
      user
    } = props;
    const span2 = document.createElement("span");
    span2.id = "page_patroller__patrolled-by";
    const userLink = document.createElement("a");
    userLink.textContent = user;
    userLink.href = mw.util.getUrl(`User:${user}`);
    span2.append(getMessage("This page was patrolled at by").replace("$1", timestamp), userLink, getMessage("period"));
    return span2;
  }
  const span = document.createElement("span");
  span.id = "page_patroller__patrolled";
  span.textContent = getMessage("This page has been patrolled, or has been marked as auto-patrolled");
  return span;
};
var errorMessage = () => {
  const span = document.createElement("span");
  span.id = "page_patroller__error";
  span.textContent = getMessage("Error occurs when finding patroller");
  return span;
};
//! src/PagePatroller/modules/util/createFooterRoot.ts
var createFooterRoot = (mountPoint) => {
  const {
    skin
  } = mw.config.get();
  const isCitizen = skin === "citizen";
  const isListItem = ["gongbi", "vector", "vector-2022"].includes(skin) || document.querySelector("ul#footer-info");
  const root = document.createElement(isCitizen ? "section" : isListItem ? "li" : "div");
  root.id = elementId;
  root.classList.add("gadget-page_patroller", "noprint");
  if (isCitizen) {
    root.classList.add("page-info__item", "citizen-footer__pageinfo-item");
  }
  mountPoint.prepend(root);
  return root;
};
//! src/PagePatroller/modules/api.ts
var import_ext_gadget2 = require("ext.gadget.Util");
var api = (0, import_ext_gadget2.initMwApi)("PagePatroller/2.0");
//! src/PagePatroller/modules/util/getPatroller.ts
var getPatroller = async (wgPageName) => {
  let action;
  let user;
  let timestamp;
  if (mw.storage.getObject(storageKey + wgPageName)) {
    ({
      action,
      user,
      timestamp
    } = mw.storage.getObject(storageKey + wgPageName));
  } else {
    try {
      const params = {
        action: "query",
        format: "json",
        formatversion: "2",
        prop: "revisions",
        titles: wgPageName,
        list: "logevents",
        letype: "patrol",
        letitle: wgPageName,
        rvprop: "timestamp",
        rvlimit: 1,
        rvdir: "newer",
        smaxage: 600,
        maxage: 600
      };
      const {
        query
      } = await api.get(params);
      if (query !== null && query !== void 0 && query.logevents && query.logevents.length) {
        const [log] = query.logevents;
        ({
          action
        } = log);
        if (action === "patrol") {
          ({
            user,
            timestamp
          } = log);
          mw.storage.setObject(storageKey + wgPageName, {
            action,
            user,
            timestamp
          }, 60 * 60 * 24 * 30);
        }
      }
    } catch (error) {
      console.error("[PagePatroller] Ajax error in `getPatroller` method:", error);
    }
  }
  return {
    action,
    user,
    timestamp
  };
};
//! src/PagePatroller/modules/showPagePatroller.ts
var showPagePatroller = async () => {
  const mountPoint = document.querySelector(mountPointSelector);
  if (!mountPoint) {
    return;
  }
  const footer = createFooterRoot(mountPoint);
  if (document.querySelector(".patrollink")) {
    footer.append(notPatrolledYet());
    return;
  }
  const {
    wgPageName
  } = mw.config.get();
  try {
    const log = await getPatroller(wgPageName);
    const {
      action,
      user
    } = log;
    let {
      timestamp
    } = log;
    if (action && action === "patrol" && user && timestamp) {
      timestamp = new Date(timestamp).toLocaleString();
      footer.append(patrolledBy({
        timestamp,
        user
      }));
    } else {
      footer.append(patrolledBy());
    }
  } catch (error) {
    console.error("[PagePatroller] Ajax error:", error);
    footer.append(errorMessage());
  }
};
//! src/PagePatroller/PagePatroller.ts
var {
  wgNamespaceNumber,
  wgArticleId,
  wgIsMainPage
} = mw.config.get();
(function pagePatroller() {
  if (wgNamespaceNumber < 0) {
    return;
  }
  if (wgIsMainPage) {
    return;
  }
  if (!(wgArticleId > 0)) {
    return;
  }
  void showPagePatroller();
})();

})();

/* </nowiki> */


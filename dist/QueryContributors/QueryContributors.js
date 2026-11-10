/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0|license2=Qiuwen Public Licence}}'
 *
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/QueryContributors}
 * @author WaitSpring <me@waitspring.com>
 * @license CC-BY-SA-4.0 {@link https://www.qiuwenbaike.cn/wiki/H:CC-BY-SA-4.0}
 * @license Qiuwen Public License {@link https://www.qiuwenbaike.cn/wiki/QW:QWL}
 */

/**
 * Copyright 2024 WaitSpring <me@waitspring.com>
 * Licensed under the "Qiuwen Public Licence"
 * (the "License", formerly the "Qiuwen Licence"),
 * either version 1.0 of the Licence, or any
 * later version.
 * You may obtain a copy of the License at
 *
 *  http://www.qiuwenbaike.cn/wiki/QW:QWL
 *
 * See the License for details.
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

// dist/QueryContributors/QueryContributors.js
//! src/QueryContributors/options.json
var elementId = "gadget-query_contributors";
var mountPointSelector = "#footer-info,.page-info";
var version = "1.0";
//! src/QueryContributors/modules/util/createFooterRoot.ts
var createFooterRoot = (mountPoint) => {
  const {
    skin
  } = mw.config.get();
  const isCitizen = skin === "citizen";
  const isListItem = ["gongbi", "vector", "vector-2022"].includes(skin) || document.querySelector("ul#footer-info");
  const root = document.createElement(isCitizen ? "section" : isListItem ? "li" : "div");
  root.id = elementId;
  root.classList.add(elementId, "noprint");
  if (isCitizen) {
    root.classList.add("page-info__item", "citizen-footer__pageinfo-item");
  }
  mountPoint.prepend(root);
  return root;
};
//! src/QueryContributors/modules/i18n.ts
var import_ext_gadget = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    "Based on contributions of": (0, import_ext_gadget.localize)({
      en: "Based on contributions of ",
      "zh-hans": "基于下列用户的贡献：",
      "zh-hant": "基于下列使用者的貢獻："
    }),
    Seperator: (0, import_ext_gadget.localize)({
      en: ", ",
      "zh-hans": "、",
      "zh-hant": "、"
    }),
    Period: (0, import_ext_gadget.localize)({
      en: ".",
      zh: "。"
    }),
    "Other $1 anonymous contributors": (0, import_ext_gadget.localize)({
      en: "other $1 anonymous contributor(s)",
      "zh-hans": "其他$1位匿名贡献者",
      "zh-hant": "其他$1位匿名貢獻者"
    })
  };
};
var i18nMessages = getI18nMessages();
var getMessage = (key) => {
  return i18nMessages[key] || key;
};
//! src/QueryContributors/modules/util/sanitize.ts
var sanitize = (string) => {
  return string.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/'/g, "&apos;").replace(/"/g, "&quot;");
};
//! src/QueryContributors/modules/util/getfooterUserList.ts
var anonyContrib = (number) => {
  const span = document.createElement("span");
  span.textContent = getMessage("Other $1 anonymous contributors").replace("$1", `${number}`);
  return span;
};
var userLink = (userName) => {
  const link = document.createElement("a");
  link.textContent = userName;
  link.href = /(>|&gt;)/.test(userName) ? mw.util.getUrl(`Special:GoToInterWiki/${sanitize(userName.replace(/(>|&gt;)/, ":User:").replace(/(>|&gt;)/g, "&gt;"))}`) : mw.util.getUrl(`User:${sanitize(userName)}`);
  link.target = "_blank";
  link.rel = ["noopener", "noreferrer"].join(" ");
  return link;
};
var footerUserList = ({
  userNames
}) => {
  const span = document.createElement("span");
  span.append(getMessage("Based on contributions of"));
  userNames.forEach((userName, index) => {
    span.append(typeof userName === "number" ? anonyContrib(userName) : userLink(userName), index < userNames.length - 1 ? getMessage("Seperator") : getMessage("Period"));
  });
  return span;
};
//! src/QueryContributors/modules/appendElement.ts
var appendElement = (userNames) => {
  if (!userNames || !userNames.length) {
    return;
  }
  const mountPoint = document.querySelector(mountPointSelector);
  if (!mountPoint) {
    return;
  }
  const footer = createFooterRoot(mountPoint);
  footer.append(footerUserList({
    userNames
  }));
};
//! src/QueryContributors/modules/api.ts
var import_ext_gadget2 = require("ext.gadget.Util");
var api = (0, import_ext_gadget2.initMwApi)(`QueryContributors/${version}`);
//! src/QueryContributors/modules/queryContributors.ts
var queryContributors = async (titles, pccontinue) => {
  const params = {
    action: "query",
    format: "json",
    formatversion: "2",
    prop: "contributors",
    pcexcludegroup: ["bot"],
    pclimit: 5e3,
    titles,
    smaxage: 600,
    maxage: 600
  };
  if (pccontinue) {
    params.pccontinue = pccontinue;
  }
  const response = await api.get(params);
  return response;
};
//! src/QueryContributors/modules/util/getContributors.ts
var import_ext_gadget3 = require("ext.gadget.Util");
var getContributors = async (title) => {
  let pclist = [];
  let pccontinue;
  const CACHE_KEY_PREFIX = "ext.gadget.QueryContributors_getContributors-";
  if (mw.storage.getObject(CACHE_KEY_PREFIX + title)) {
    pclist = mw.storage.getObject(CACHE_KEY_PREFIX + title);
    return (0, import_ext_gadget3.uniqueArray)(pclist);
  }
  while (true) {
    const data = await queryContributors(title, pccontinue);
    try {
      var _data$query, _data$continue;
      if ((_data$query = data["query"]) !== null && _data$query !== void 0 && _data$query.pages) {
        for (const page of data["query"].pages) {
          if (page !== null && page !== void 0 && page.contributors) {
            for (const contributor of page.contributors) {
              if (contributor !== null && contributor !== void 0 && contributor.name) {
                pclist[pclist.length] = contributor.name;
              }
            }
          }
          if (page !== null && page !== void 0 && page.anoncontributors) {
            pclist[pclist.length] = page.anoncontributors;
          }
        }
      } else {
        break;
      }
      if ((_data$continue = data["continue"]) !== null && _data$continue !== void 0 && _data$continue.pccontinue) {
        ({
          pccontinue
        } = data["continue"]);
      } else {
        break;
      }
    } catch {
      break;
    }
  }
  mw.storage.setObject(CACHE_KEY_PREFIX + title, pclist, 10 * 60);
  return (0, import_ext_gadget3.uniqueArray)(pclist);
};
//! src/QueryContributors/QueryContributors.ts
(async function queryContributos() {
  const {
    wgAction,
    wgArticleId,
    wgCurRevisionId,
    wgPageName,
    wgRevisionId
  } = mw.config.get();
  if (wgAction !== "view" || !wgArticleId || !wgPageName) {
    return;
  }
  if (wgCurRevisionId > wgRevisionId) {
    return;
  }
  const contributors = await getContributors(wgPageName);
  appendElement(contributors);
})();

})();

/* </nowiki> */


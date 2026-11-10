/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/GeoLocation}
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

// dist/GeoLocation/GeoLocation.js
//! src/GeoLocation/modules/constant.ts
var SYSTEM_SCRIPT_LIST = ["滥用过滤器", "求闻编者", "求闻百科社区", "Example", "External contributors", "Maintenance script", "MediaWiki default", "MediaWiki message delivery", "New user page"];
var WEBMASTER_LIST = ["QiuWen", "QiuWen for Accounts", "QiuwenSocialMedia"];
//! src/GeoLocation/GeoLocation.ts
var import_ext_gadget3 = require("ext.gadget.Geo");
//! src/GeoLocation/options.json
var apiTag = "GeoLocation";
var version = "3.0";
//! src/GeoLocation/modules/api.ts
var import_ext_gadget = require("ext.gadget.Util");
var api = (0, import_ext_gadget.initMwApi)(`GeoLocation/${version}`);
//! src/GeoLocation/modules/i18n.ts
var import_ext_gadget2 = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    Update: (0, import_ext_gadget2.localize)({
      en: "Update IP location information",
      ja: "IP地域の情報を更新",
      "zh-hans": "更新IP属地信息",
      "zh-hant": "更新IP屬地資訊"
    })
  };
};
var i18nMessages = getI18nMessages();
var getMessage = (key) => {
  return i18nMessages[key] || key;
};
//! src/GeoLocation/modules/storeLocation.ts
var queryRevisons = async (titles) => {
  const params = {
    titles,
    action: "query",
    format: "json",
    formatversion: "2",
    prop: "revisions",
    rvprop: "content",
    rvslots: "main",
    smaxage: 600,
    maxage: 600
  };
  const response = await api.get(params);
  return response;
};
var edit = async (title, text, summary) => {
  const params = {
    title,
    text,
    action: "edit",
    format: "json",
    formatversion: "2",
    contentformat: "application/json",
    contentmodel: "json",
    minor: true,
    recreate: true,
    watchlist: "unwatch",
    tags: apiTag
  };
  if (summary) {
    params.summary = summary;
  }
  const response = await api.postWithEditToken(params);
  return response;
};
var storeLocation = async ({
  countryOrArea,
  region
}) => {
  const {
    wgUserName
  } = mw.config.get();
  const storePageTitle = `User:${wgUserName}/GeoIP.json`;
  try {
    var _data$query$pages$;
    const data = await queryRevisons(storePageTitle);
    const content = ((_data$query$pages$ = data["query"].pages[0]) === null || _data$query$pages$ === void 0 || (_data$query$pages$ = _data$query$pages$.revisions) === null || _data$query$pages$ === void 0 ? void 0 : _data$query$pages$[0].slots.main.content) || "";
    const response = JSON.parse(content);
    if (response.countryOrArea && response.countryOrArea === countryOrArea) {
      if (!response.region || !region) {
        return;
      }
      if (response.region === region) {
        return;
      }
    }
  } catch {
  }
  const geoInfo = {
    countryOrArea,
    region
  };
  try {
    await edit(storePageTitle, JSON.stringify(geoInfo), getMessage("Update"));
  } catch (error) {
    console.error("[GeoLocation] Ajax error:", error);
  }
};
//! src/GeoLocation/GeoLocation.ts
var import_ext_gadget4 = require("ext.gadget.Util");
(async function geoLocation() {
  const {
    wgUserName
  } = mw.config.get();
  if (!wgUserName || SYSTEM_SCRIPT_LIST.includes(wgUserName) || WEBMASTER_LIST.includes(wgUserName)) {
    return;
  }
  if ((0, import_ext_gadget4.userIsInGroup)(["qiuwen", "steward", "bot"])) {
    return;
  }
  const {
    countryOrArea,
    region
  } = await (0, import_ext_gadget3.getGeoInfo)();
  if (!countryOrArea) {
    return;
  }
  void storeLocation({
    countryOrArea,
    region
  });
})();

})();

/* </nowiki> */


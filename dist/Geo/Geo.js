/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/Geo}
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

// dist/Geo/Geo.js
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all) __defProp(target, name, {
    get: all[name],
    enumerable: true
  });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from)) if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
      get: () => from[key],
      enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
    });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", {
  value: true
}), mod);
//! src/Geo/Geo.ts
var Geo_exports = {};
__export(Geo_exports, {
  getGeoInfo: () => getGeoInfo
});
module.exports = __toCommonJS(Geo_exports);
//! src/Geo/options.json
var defaultGeoInfo = {
  countryOrArea: "",
  region: "",
  city: ""
};
var storageKey = "ext.gadget.Geo";
//! src/Geo/Geo.ts
var getGeoInfo = async () => {
  const storeGeoInfo = mw.storage.getObject(storageKey);
  if (storeGeoInfo) {
    return storeGeoInfo;
  }
  try {
    const response = await $.getJSON("/rest.php/geo");
    const geoInfo = {
      countryOrArea: response.country ?? response.countryOrArea ?? "",
      region: response.region ?? "",
      city: response.city ?? ""
    };
    mw.storage.setObject(storageKey, geoInfo, 60 * 60 * 24);
    return geoInfo;
  } catch {
    return defaultGeoInfo;
  }
};

})();

/* </nowiki> */


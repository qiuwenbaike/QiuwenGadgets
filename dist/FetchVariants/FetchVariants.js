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

// dist/FetchVariants/FetchVariants.js
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
//! src/FetchVariants/FetchVariants.ts
var FetchVariants_exports = {};
__export(FetchVariants_exports, {
  fetchVariants: () => fetchVariants
});
module.exports = __toCommonJS(FetchVariants_exports);
//! src/FetchVariants/options.json
var storageKey = "ext.gadget.FetchVariants_fetchVariants";
var version = "1.0";
//! src/FetchVariants/modules/api.ts
var import_ext_gadget = require("ext.gadget.Util");
var api = (0, import_ext_gadget.initMwApi)(`FetchVariants/${version}`);
//! src/FetchVariants/modules/constant.ts
var VARIANTS = ["zh", "zh-hans", "zh-cn", "zh-my", "zh-sg", "zh-hant", "zh-hk", "zh-mo", "zh-tw"];
//! src/FetchVariants/modules/generateResult.ts
var generateResult = (result) => Object.fromEntries([...VARIANTS.map((variant) => {
  var _result$querySelector;
  return [variant, ((_result$querySelector = result.querySelector(`#${variant}`)) === null || _result$querySelector === void 0 ? void 0 : _result$querySelector.textContent) ?? ""];
})]);
//! src/FetchVariants/modules/generateText.ts
var generateText = (string) => `<ul id="fetchvariants">${VARIANTS.map((variant) => `<li id="${variant}">-{${variant}|${string}}-</li>`)}</ul>`;
//! src/FetchVariants/modules/idb.ts
var import_ext_gadget2 = require("ext.gadget.idb-plus");
var variants = new import_ext_gadget2.IDBPlus(storageKey, "variants");
//! src/FetchVariants/modules/getVariants.ts
var getVariants = async (string) => {
  const results = await variants.get(string);
  if (results) {
    variants.delete(string);
  }
  const params = {
    action: "parse",
    format: "json",
    text: generateText(string),
    title: "temp",
    variant: "zh",
    formatversion: "2"
  };
  try {
    const {
      parse
    } = await api.get(params);
    const {
      text
    } = parse;
    const result = new DOMParser().parseFromString(text, "text/html");
    const time = Date.now();
    const results2 = {
      string,
      variants: generateResult(result),
      time
    };
    await variants.set(string, results2);
    return results2;
  } catch {
    return void 0;
  }
};
//! src/FetchVariants/FetchVariants.ts
var CACHE_DURATION = 24 * 60 * 60 * 1e3;
var fetchVariants = async (string) => {
  const time = Date.now();
  const results = await variants.get(string);
  if (results !== null && results !== void 0 && results.time && time - results.time < CACHE_DURATION) {
    return results;
  }
  if (results) {
    await variants.delete(string);
  }
  return getVariants(string);
};

})();

/* </nowiki> */


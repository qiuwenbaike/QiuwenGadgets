/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|title=GeoLocationReader|license=CC-BY-SA-4.0}}'
 *
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/GeoLocationReader}
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

// dist/GeoLocationReader/GeoLocationReader.js
function asyncGeneratorStep(n, t, e, r, o, a, c) {
  try {
    var i = n[a](c), u = i.value;
  } catch (n2) {
    return void e(n2);
  }
  i.done ? t(u) : Promise.resolve(u).then(r, o);
}
function _asyncToGenerator(n) {
  return function() {
    var t = this, e = arguments;
    return new Promise(function(r, o) {
      var a = n.apply(t, e);
      function _next(n2) {
        asyncGeneratorStep(a, r, o, _next, _throw, "next", n2);
      }
      function _throw(n2) {
        asyncGeneratorStep(a, r, o, _next, _throw, "throw", n2);
      }
      _next(void 0);
    });
  };
}
function _createForOfIteratorHelper(r, e) {
  var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (!t) {
    if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) {
      t && (r = t);
      var n = 0, F = function() {
      };
      return { s: F, n: function() {
        return n >= r.length ? { done: true } : { done: false, value: r[n++] };
      }, e: function(r2) {
        throw r2;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var o, a = true, u = false;
  return { s: function() {
    t = t.call(r);
  }, n: function() {
    var r2 = t.next();
    return a = r2.done, r2;
  }, e: function(r2) {
    u = true, o = r2;
  }, f: function() {
    try {
      a || null == t.return || t.return();
    } finally {
      if (u) throw o;
    }
  } };
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}
function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    var _iterator = _createForOfIteratorHelper(__getOwnPropNames(from)), _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done; ) {
        let key = _step.value;
        if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
          get: () => from[key],
          enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
        });
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
    value: mod,
    enumerable: true
  }) : target,
  mod
));
//! src/GeoLocationReader/options.json
var mountPointSelector = "#footer-info,.page-info";
var storageKey = "ext.gadget.MarkRights_GeoLocationReader-";
var userNameSpaceNumber = 2;
var version = "2.1";
//! src/GeoLocation/modules/constant.ts
var SYSTEM_SCRIPT_LIST = ["滥用过滤器", "求闻编者", "求闻百科社区", "Example", "External contributors", "Maintenance script", "MediaWiki default", "MediaWiki message delivery", "New user page"];
var WEBMASTER_LIST = ["QiuWen", "QiuWen for Accounts", "QiuwenSocialMedia"];
//! src/GeoLocationReader/modules/constant.ts
var CLASS_NAME = "gadget-geo_location_reader";
var CLASS_NAME_ICON = "".concat(CLASS_NAME, "__icon");
var CLASS_NAME_TEXT = "".concat(CLASS_NAME, "__text");
//! src/GeoLocationReader/modules/components/react.tsx
var import_ext_gadget2 = __toESM(require("ext.gadget.JSX"), 1);
//! src/GeoLocationReader/modules/i18n.ts
var import_ext_gadget = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    ":": (0, import_ext_gadget.localize)({
      en: ": ",
      ja: "：",
      zh: "："
    }),
    Unknown: (0, import_ext_gadget.localize)({
      en: "Unknown Location",
      ja: "未知IP地域",
      "zh-hans": "未知IP属地",
      "zh-hant": "未知IP屬地"
    }),
    Location: (0, import_ext_gadget.localize)({
      en: "IP Location",
      ja: "IP地域",
      "zh-hans": "IP属地",
      "zh-hant": "IP屬地"
    })
  };
};
var i18nMessages = getI18nMessages();
var getMessage = (key) => {
  return i18nMessages[key] || key;
};
//! src/GeoLocationReader/modules/components/react.tsx
var FooterNotice = ({
  spanClass,
  children = /* @__PURE__ */ import_ext_gadget2.default.createElement(import_ext_gadget2.default.Fragment, null)
}) => {
  const {
    skin
  } = mw.config.get();
  return /* @__PURE__ */ import_ext_gadget2.default.createElement(import_ext_gadget2.default.Fragment, null, skin === "citizen" ? /* @__PURE__ */ import_ext_gadget2.default.createElement("section", {
    id: CLASS_NAME,
    className: [CLASS_NAME, "".concat(CLASS_NAME, "-").concat(spanClass), "page-info__item", "citizen-footer__pageinfo-item", "noprint"]
  }, children) : ["vector", "vector-2022", "gongbi"].includes(skin) || document.querySelector("ul#footer-info") ? /* @__PURE__ */ import_ext_gadget2.default.createElement("li", {
    id: CLASS_NAME,
    className: [CLASS_NAME, "".concat(CLASS_NAME, "-").concat(spanClass), "noprint"]
  }, children) : /* @__PURE__ */ import_ext_gadget2.default.createElement("div", {
    id: CLASS_NAME,
    className: [CLASS_NAME, "".concat(CLASS_NAME, "-").concat(spanClass), "noprint"]
  }, children));
};
var Indicator = ({
  icon,
  indicatorText
}) => {
  const text = icon === "globe" ? getMessage("Location") + getMessage(":") + indicatorText : indicatorText !== null && indicatorText !== void 0 ? indicatorText : "";
  return /* @__PURE__ */ import_ext_gadget2.default.createElement(import_ext_gadget2.default.Fragment, null, /* @__PURE__ */ import_ext_gadget2.default.createElement("span", {
    className: [CLASS_NAME_ICON, "".concat(CLASS_NAME_ICON, "-").concat(icon)],
    "aria-label": text
  }), /* @__PURE__ */ import_ext_gadget2.default.createElement("span", {
    className: CLASS_NAME_TEXT
  }, text));
};
var FooterIcon = ({
  icon,
  spanClass,
  indicatorText
}) => /* @__PURE__ */ import_ext_gadget2.default.createElement(FooterNotice, {
  spanClass
}, /* @__PURE__ */ import_ext_gadget2.default.createElement(Indicator, {
  icon,
  indicatorText
}));
//! src/GeoLocationReader/modules/util/appendIcon.tsx
var import_ext_gadget3 = __toESM(require("ext.gadget.JSX"), 1);
var appendIcon = ({
  icon,
  indicatorText,
  spanClass
}) => {
  if (!spanClass || !icon || !indicatorText) {
    return;
  }
  const mountPoint = document.querySelector(mountPointSelector);
  if (!mountPoint) {
    return;
  }
  mountPoint.prepend(/* @__PURE__ */ import_ext_gadget3.default.createElement(FooterIcon, {
    spanClass,
    icon,
    indicatorText
  }));
};
//! src/GeoLocationReader/modules/util/name.ts
var getCountryOrAreaNameList = () => {
  const {
    wgUserLanguage
  } = mw.config.get();
  if (["zh-hant", "zh-hk", "zh-mo"].includes(wgUserLanguage)) {
    return {
      AF: "阿富汗",
      AX: "奧蘭",
      AL: "阿爾巴尼亞",
      DZ: "阿爾及利亞",
      AS: "美屬薩摩亞",
      AD: "安道爾",
      AO: "安哥拉",
      AI: "安圭拉",
      AQ: "南極洲",
      AG: "安提瓜和巴布達",
      AR: "阿根廷",
      AM: "亞美尼亞",
      AW: "阿魯巴",
      AU: "澳洲",
      AT: "奧地利",
      AZ: "阿塞拜疆",
      BS: "巴哈馬",
      BH: "巴林",
      BD: "孟加拉國",
      BB: "巴巴多斯",
      BY: "白俄羅斯",
      BE: "比利時",
      BZ: "伯利茲",
      BJ: "貝寧",
      BM: "百慕達",
      BT: "不丹",
      BO: "玻利維亞",
      BQ: "荷蘭加勒比區",
      BA: "波黑",
      BW: "博茨瓦納",
      BV: "布韋島",
      BR: "巴西",
      IO: "英屬印度洋領地",
      BN: "汶萊",
      BG: "保加利亞",
      BF: "布基納法索",
      BI: "布隆迪",
      CV: "佛得角",
      KH: "柬埔寨",
      CM: "喀麥隆",
      CA: "加拿大",
      KY: "開曼群島",
      CF: "中非",
      TD: "乍得",
      CL: "智利",
      CN: "中國",
      CX: "聖誕島",
      CC: "科科斯（基林）群島",
      CO: "哥倫比亞",
      KM: "科摩羅",
      CG: "剛果共和國",
      CD: "剛果民主共和國",
      CK: "庫克群島",
      CR: "哥斯達黎加",
      CI: "科特迪瓦",
      HR: "克羅地亞",
      CU: "古巴",
      CW: "庫拉索",
      CY: "塞浦路斯",
      CZ: "捷克",
      DK: "丹麥",
      DJ: "吉布提",
      DM: "多米尼克",
      DO: "多米尼加",
      EC: "厄瓜多爾",
      EG: "埃及",
      SV: "薩爾瓦多",
      GQ: "赤道畿內亞",
      ER: "厄立特里亞",
      EE: "愛沙尼亞",
      SZ: "斯威士蘭",
      ET: "埃塞俄比亞",
      FK: "福克蘭群島",
      FO: "法羅群島",
      FJ: "斐濟",
      FI: "芬蘭",
      FR: "法國",
      GF: "法屬圭亞那",
      PF: "法屬波利尼西亞",
      TF: "法屬南部和南極領地",
      GA: "加蓬",
      GM: "岡比亞",
      GE: "格魯吉亞",
      DE: "德國",
      GH: "加納",
      GI: "直布羅陀",
      GR: "希臘",
      GL: "格陵蘭",
      GD: "格林納達",
      GP: "瓜德羅普",
      GU: "關島",
      GT: "危地馬拉",
      GG: "根西",
      GN: "畿內亞",
      GW: "畿內亞比紹",
      GY: "圭亞那",
      HT: "海地",
      HM: "赫德島和麥克唐納群島",
      VA: "梵蒂岡",
      HN: "洪都拉斯",
      HK: "中國香港",
      HU: "匈牙利",
      IS: "冰島",
      IN: "印度",
      ID: "印尼",
      IR: "伊朗",
      IQ: "伊拉克",
      IE: "愛爾蘭",
      IM: "人島",
      IL: "以色列",
      IT: "意大利",
      JM: "牙買加",
      JP: "日本",
      JE: "澤西",
      JO: "約旦",
      KZ: "哈薩克",
      KE: "肯雅",
      KI: "基里巴斯",
      KP: "北韓",
      KR: "韓國",
      KW: "科威特",
      KG: "吉爾吉斯",
      LA: "老撾",
      LV: "拉脫維亞",
      LB: "黎巴嫩",
      LS: "萊索托",
      LR: "利比里亞",
      LY: "利比亞",
      LI: "列支敦士登",
      LT: "立陶宛",
      LU: "盧森堡",
      MO: "中國澳門",
      MG: "馬達加斯加",
      MW: "馬拉維",
      MY: "馬來西亞",
      MV: "馬爾代夫",
      ML: "馬里",
      MT: "馬耳他",
      MH: "馬紹爾群島",
      MQ: "馬提尼克",
      MR: "毛里塔尼亞",
      MU: "毛里裘斯",
      YT: "馬約特",
      MX: "墨西哥",
      FM: "密克羅尼西亞聯邦",
      MD: "摩爾多瓦",
      MC: "摩納哥",
      MN: "蒙古",
      ME: "黑山",
      MS: "蒙特塞拉特",
      MA: "摩洛哥",
      MZ: "莫桑比克",
      MM: "緬甸",
      NA: "納米比亞",
      NR: "瑙魯",
      NP: "尼泊爾",
      NL: "荷蘭",
      NC: "新喀里多尼亞",
      NZ: "新西蘭",
      NI: "尼加拉瓜",
      NE: "尼日爾",
      NG: "尼日利亞",
      NU: "紐埃",
      NF: "諾福克島",
      MK: "北馬其頓",
      MP: "北馬利安納群島",
      NO: "挪威",
      OM: "阿曼",
      PK: "巴基斯坦",
      PW: "帕勞",
      PS: "巴勒斯坦",
      PA: "巴拿馬",
      PG: "巴布亞新畿內亞",
      PY: "巴拉圭",
      PE: "秘魯",
      PH: "菲律賓",
      PN: "皮特肯群島",
      PL: "波蘭",
      PT: "葡萄牙",
      PR: "波多黎各",
      QA: "卡塔爾",
      RE: "留尼汪",
      RO: "羅馬尼亞",
      RU: "俄羅斯",
      RW: "盧旺達",
      BL: "聖巴泰勒米",
      SH: "聖海倫娜、阿森松和特里斯坦-達庫尼亞",
      KN: "聖基茨和尼維斯",
      LC: "聖盧西亞",
      MF: "法屬聖馬丁",
      PM: "聖皮埃爾和密克隆",
      VC: "聖文森特和格林納丁斯",
      WS: "薩摩亞",
      SM: "聖馬力諾",
      ST: "聖多美和普林西比",
      SA: "沙地阿拉伯",
      SN: "塞內加爾",
      RS: "塞爾維亞",
      SC: "塞舌爾",
      SL: "塞拉利昂",
      SG: "新加坡",
      SX: "荷屬聖馬丁",
      SK: "斯洛伐克",
      SI: "斯洛文尼亞",
      SB: "所羅門群島",
      SO: "索馬里",
      ZA: "南非",
      GS: "南喬治亞和南桑威奇群島",
      SS: "南蘇丹",
      ES: "西班牙",
      LK: "斯里蘭卡",
      SD: "蘇丹",
      SR: "蘇里南",
      SJ: "斯瓦爾巴和揚馬延",
      SE: "瑞典",
      CH: "瑞士",
      SY: "敘利亞",
      TW: "中國臺灣",
      TJ: "塔吉克",
      TZ: "坦桑尼亞",
      TH: "泰國",
      TL: "東帝汶",
      TG: "多哥",
      TK: "托克勞",
      TO: "湯加",
      TT: "千里達和多巴哥",
      TN: "突尼西亞",
      TR: "土耳其",
      TM: "土庫曼",
      TC: "特克斯和凱科斯群島",
      TV: "圖瓦盧",
      UG: "烏干達",
      UA: "烏克蘭",
      AE: "阿聯酋",
      GB: "英國",
      US: "美國",
      UM: "美國本土外小島嶼",
      UY: "烏拉圭",
      UZ: "烏茲別克",
      VU: "瓦努阿圖",
      VE: "委內瑞拉",
      VN: "越南",
      VG: "英屬處女群島",
      VI: "美屬處女群島",
      WF: "瓦利斯和富圖納",
      EH: "西撒哈拉",
      YE: "也門",
      ZM: "贊比亞",
      ZW: "津巴布韋"
    };
  } else if (["zh-tw"].includes(wgUserLanguage)) {
    return {
      AF: "阿富汗",
      AX: "奧蘭",
      AL: "阿爾巴尼亞",
      DZ: "阿爾及利亞",
      AS: "美屬薩摩亞",
      AD: "安道爾",
      AO: "安哥拉",
      AI: "安圭拉",
      AQ: "南極洲",
      AG: "安地卡及巴布達",
      AR: "阿根廷",
      AM: "亞美尼亞",
      AW: "阿魯巴",
      AU: "澳洲",
      AT: "奧地利",
      AZ: "亞塞拜然",
      BS: "巴哈馬",
      BH: "巴林",
      BD: "孟加拉國",
      BB: "巴貝多",
      BY: "白俄羅斯",
      BE: "比利時",
      BZ: "貝里斯",
      BJ: "貝南",
      BM: "百慕達",
      BT: "不丹",
      BO: "玻利維亞",
      BQ: "荷蘭加勒比區",
      BA: "波赫",
      BW: "波札那",
      BV: "布韋島",
      BR: "巴西",
      IO: "英屬印度洋領地",
      BN: "汶萊",
      BG: "保加利亞",
      BF: "布吉納法索",
      BI: "蒲隆地",
      CV: "維德角",
      KH: "柬埔寨",
      CM: "喀麥隆",
      CA: "加拿大",
      KY: "開曼群島",
      CF: "中非",
      TD: "查德",
      CL: "智利",
      CN: "中國",
      CX: "聖誕島",
      CC: "科科斯（基林）群島",
      CO: "哥倫比亞",
      KM: "葛摩",
      CG: "剛果共和國",
      CD: "剛果民主共和國",
      CK: "庫克群島",
      CR: "哥斯大黎加",
      CI: "象牙海岸",
      HR: "克羅埃西亞",
      CU: "古巴",
      CW: "古拉索",
      CY: "賽普勒斯",
      CZ: "捷克",
      DK: "丹麥",
      DJ: "吉布地",
      DM: "多米尼克",
      DO: "多明尼加",
      EC: "厄瓜多",
      EG: "埃及",
      SV: "薩爾瓦多",
      GQ: "赤道幾內亞",
      ER: "厄利垂亞",
      EE: "愛沙尼亞",
      SZ: "史瓦帝尼",
      ET: "衣索比亞",
      FK: "福克蘭群島",
      FO: "法羅群島",
      FJ: "斐濟",
      FI: "芬蘭",
      FR: "法國",
      GF: "法屬圭亞那",
      PF: "法屬玻里尼西亞",
      TF: "法屬南部和南極領地",
      GA: "加彭",
      GM: "甘比亞",
      GE: "喬治亞",
      DE: "德國",
      GH: "迦納",
      GI: "直布羅陀",
      GR: "希臘",
      GL: "格陵蘭",
      GD: "格瑞那達",
      GP: "瓜德羅普",
      GU: "關島",
      GT: "瓜地馬拉",
      GG: "根西",
      GN: "幾內亞",
      GW: "幾內亞比索",
      GY: "蓋亞那",
      HT: "海地",
      HM: "赫德島和麥克唐納群島",
      VA: "梵蒂岡",
      HN: "宏都拉斯",
      HK: "中國香港",
      HU: "匈牙利",
      IS: "冰島",
      IN: "印度",
      ID: "印尼",
      IR: "伊朗",
      IQ: "伊拉克",
      IE: "愛爾蘭",
      IM: "曼島",
      IL: "以色列",
      IT: "義大利",
      JM: "牙買加",
      JP: "日本",
      JE: "澤西",
      JO: "約旦",
      KZ: "哈薩克",
      KE: "肯亞",
      KI: "吉里巴斯",
      KP: "北韓",
      KR: "韓國",
      KW: "科威特",
      KG: "吉爾吉斯",
      LA: "老撾",
      LV: "拉脫維亞",
      LB: "黎巴嫩",
      LS: "賴索托",
      LR: "賴比瑞亞",
      LY: "利比亞",
      LI: "列支敦斯登",
      LT: "立陶宛",
      LU: "盧森堡",
      MO: "中國澳門",
      MG: "馬達加斯加",
      MW: "馬拉威",
      MY: "馬來西亞",
      MV: "馬爾地夫",
      ML: "馬里",
      MT: "馬爾他",
      MH: "馬紹爾群島",
      MQ: "馬提尼克",
      MR: "茅利塔尼亞",
      MU: "模里西斯",
      YT: "馬約特",
      MX: "墨西哥",
      FM: "密克羅尼西亞聯邦",
      MD: "摩爾多瓦",
      MC: "摩納哥",
      MN: "蒙古",
      ME: "蒙特內哥羅",
      MS: "蒙哲臘",
      MA: "摩洛哥",
      MZ: "莫三比克",
      MM: "緬甸",
      NA: "納米比亞",
      NR: "諾魯",
      NP: "尼泊爾",
      NL: "荷蘭",
      NC: "新喀里多尼亞",
      NZ: "紐西蘭",
      NI: "尼加拉瓜",
      NE: "尼日",
      NG: "奈及利亞",
      NU: "紐埃",
      NF: "諾福克島",
      MK: "北馬其頓",
      MP: "北馬利安納群島",
      NO: "挪威",
      OM: "阿曼",
      PK: "巴基斯坦",
      PW: "帛琉",
      PS: "巴勒斯坦",
      PA: "巴拿馬",
      PG: "巴布亞紐幾內亞",
      PY: "巴拉圭",
      PE: "秘魯",
      PH: "菲律賓",
      PN: "皮特肯群島",
      PL: "波蘭",
      PT: "葡萄牙",
      PR: "波多黎各",
      QA: "卡達",
      RE: "留尼旺",
      RO: "羅馬尼亞",
      RU: "俄羅斯",
      RW: "盧安達",
      BL: "聖巴泰勒米",
      SH: "聖海蓮娜、阿森松和特里斯坦-達庫尼亞",
      KN: "聖克里斯多福及尼維斯",
      LC: "聖露西亞",
      MF: "法屬聖馬丁",
      PM: "聖皮耶與密克隆",
      VC: "聖文森及格瑞那丁",
      WS: "薩摩亞",
      SM: "聖馬利諾",
      ST: "聖多美普林西比",
      SA: "沙烏地阿拉伯",
      SN: "塞內加爾",
      RS: "塞爾維亞",
      SC: "塞席爾",
      SL: "獅子山",
      SG: "新加坡",
      SX: "荷屬聖馬丁",
      SK: "斯洛伐克",
      SI: "斯洛維尼亞",
      SB: "索羅門群島",
      SO: "索馬利亞",
      ZA: "南非",
      GS: "南喬治亞和南桑威奇群島",
      SS: "南蘇丹",
      ES: "西班牙",
      LK: "斯里蘭卡",
      SD: "蘇丹",
      SR: "蘇利南",
      SJ: "斯瓦爾巴和揚馬延",
      SE: "瑞典",
      CH: "瑞士",
      SY: "敘利亞",
      TW: "中國臺灣",
      TJ: "塔吉克",
      TZ: "坦尚尼亞",
      TH: "泰國",
      TL: "東帝汶",
      TG: "多哥",
      TK: "托克勞",
      TO: "東加",
      TT: "千里達及托巴哥",
      TN: "突尼西亞",
      TR: "土耳其",
      TM: "土庫曼",
      TC: "土克凱可群島",
      TV: "吐瓦魯",
      UG: "烏干達",
      UA: "烏克蘭",
      AE: "阿聯",
      GB: "英國",
      US: "美國",
      UM: "美國本土外小島嶼",
      UY: "烏拉圭",
      UZ: "烏茲別克",
      VU: "萬那杜",
      VE: "委內瑞拉",
      VN: "越南",
      VG: "英屬維京群島",
      VI: "美屬維京群島",
      WF: "瓦利斯和富圖納",
      EH: "西撒哈拉",
      YE: "葉門",
      ZM: "尚比亞",
      ZW: "辛巴威"
    };
  } else if (["zh-my", "zh-sg"].includes(wgUserLanguage)) {
    return {
      AF: "阿富汗",
      AX: "奥兰",
      AL: "阿尔巴尼亚",
      DZ: "阿尔及利亚",
      AS: "美属萨摩亚",
      AD: "安道尔",
      AO: "安哥拉",
      AI: "安圭拉",
      AQ: "南极洲",
      AG: "安提瓜和巴布达",
      AR: "阿根廷",
      AM: "亚美尼亚",
      AW: "阿鲁巴",
      AU: "澳大利亚",
      AT: "奥地利",
      AZ: "阿塞拜疆",
      BS: "巴哈马",
      BH: "巴林",
      BD: "孟加拉国",
      BB: "巴巴多斯",
      BY: "白俄罗斯",
      BE: "比利时",
      BZ: "伯利兹",
      BJ: "贝宁",
      BM: "百慕大",
      BT: "不丹",
      BO: "玻利维亚",
      BQ: "荷兰加勒比区",
      BA: "波黑",
      BW: "博茨瓦纳",
      BV: "布韦岛",
      BR: "巴西",
      IO: "英属印度洋领地",
      BN: "汶莱",
      BG: "保加利亚",
      BF: "布基纳法索",
      BI: "布隆迪",
      CV: "佛得角",
      KH: "柬埔寨",
      CM: "喀麦隆",
      CA: "加拿大",
      KY: "开曼群岛",
      CF: "中非",
      TD: "乍得",
      CL: "智利",
      CN: "中国",
      CX: "圣诞岛",
      CC: "科科斯（基林）群岛",
      CO: "哥伦比亚",
      KM: "科摩罗",
      CG: "刚果共和国",
      CD: "刚果民主共和国",
      CK: "库克群岛",
      CR: "哥斯达黎加",
      CI: "象牙海岸",
      HR: "克罗地亚",
      CU: "古巴",
      CW: "库拉索",
      CY: "塞浦路斯",
      CZ: "捷克",
      DK: "丹麦",
      DJ: "吉布提",
      DM: "多米尼克",
      DO: "多米尼加",
      EC: "厄瓜多尔",
      EG: "埃及",
      SV: "萨尔瓦多",
      GQ: "赤道几内亚",
      ER: "厄立特里亚",
      EE: "爱沙尼亚",
      SZ: "斯威士兰",
      ET: "埃塞俄比亚",
      FK: "福克兰群岛",
      FO: "法罗群岛",
      FJ: "斐济",
      FI: "芬兰",
      FR: "法国",
      GF: "法属圭亚那",
      PF: "法属波利尼西亚",
      TF: "法属南部和南极领地",
      GA: "加蓬",
      GM: "冈比亚",
      GE: "格鲁吉亚",
      DE: "德国",
      GH: "加纳",
      GI: "直布罗陀",
      GR: "希腊",
      GL: "格陵兰",
      GD: "格林纳达",
      GP: "瓜德罗普",
      GU: "关岛",
      GT: "危地马拉",
      GG: "根西",
      GN: "几内亚",
      GW: "几内亚比绍",
      GY: "圭亚那",
      HT: "海地",
      HM: "赫德岛和麦克唐纳群岛",
      VA: "梵蒂冈",
      HN: "洪都拉斯",
      HK: "中国香港",
      HU: "匈牙利",
      IS: "冰岛",
      IN: "印度",
      ID: "印尼",
      IR: "伊朗",
      IQ: "伊拉克",
      IE: "爱尔兰",
      IM: "马恩岛",
      IL: "以色列",
      IT: "意大利",
      JM: "牙买加",
      JP: "日本",
      JE: "泽西",
      JO: "约旦",
      KZ: "哈萨克斯坦",
      KE: "肯尼亚",
      KI: "基里巴斯",
      KP: "北韩",
      KR: "韩国",
      KW: "科威特",
      KG: "吉尔吉斯斯坦",
      LA: "老挝",
      LV: "拉脱维亚",
      LB: "黎巴嫩",
      LS: "莱索托",
      LR: "利比里亚",
      LY: "利比亚",
      LI: "列支敦士登",
      LT: "立陶宛",
      LU: "卢森堡",
      MO: "中国澳门",
      MG: "马达加斯加",
      MW: "马拉维",
      MY: "马来西亚",
      MV: "马尔代夫",
      ML: "马里",
      MT: "马耳他",
      MH: "马绍尔群岛",
      MQ: "马提尼克",
      MR: "毛里塔尼亚",
      MU: "毛里求斯",
      YT: "马约特",
      MX: "墨西哥",
      FM: "密克罗尼西亚联邦",
      MD: "摩尔多瓦",
      MC: "摩纳哥",
      MN: "蒙古",
      ME: "黑山",
      MS: "蒙特塞拉特",
      MA: "摩洛哥",
      MZ: "莫桑比克",
      MM: "缅甸",
      NA: "那米比亚",
      NR: "瑙鲁",
      NP: "尼泊尔",
      NL: "荷兰",
      NC: "新喀里多尼亚",
      NZ: "新西兰",
      NI: "尼加拉瓜",
      NE: "尼日尔",
      NG: "尼日利亚",
      NU: "纽埃",
      NF: "诺福克岛",
      MK: "北马其顿",
      MP: "北马里亚纳群岛",
      NO: "挪威",
      OM: "阿曼",
      PK: "巴基斯坦",
      PW: "帕劳",
      PS: "巴勒斯坦",
      PA: "巴拿马",
      PG: "巴布亚新几内亚",
      PY: "巴拉圭",
      PE: "秘鲁",
      PH: "菲律宾",
      PN: "皮特凯恩群岛",
      PL: "波兰",
      PT: "葡萄牙",
      PR: "波多黎各",
      QA: "卡塔尔",
      RE: "留尼汪",
      RO: "罗马尼亚",
      RU: "俄罗斯",
      RW: "卢旺达",
      BL: "圣巴泰勒米",
      SH: "圣赫勒拿、阿森松和特里斯坦-达库尼亚",
      KN: "圣基茨和尼维斯",
      LC: "圣卢西亚",
      MF: "法属圣马丁",
      PM: "圣皮埃尔和密克隆",
      VC: "圣文森特和格林纳丁斯",
      WS: "萨摩亚",
      SM: "圣马力诺",
      ST: "圣多美和普林西比",
      SA: "沙特阿拉伯",
      SN: "塞内加尔",
      RS: "塞尔维亚",
      SC: "塞舌尔",
      SL: "塞拉利昂",
      SG: "新加坡",
      SX: "荷属圣马丁",
      SK: "斯洛伐克",
      SI: "斯洛文尼亚",
      SB: "所罗门群岛",
      SO: "索马里",
      ZA: "南非",
      GS: "南乔治亚和南桑威奇群岛",
      SS: "南苏丹",
      ES: "西班牙",
      LK: "斯里兰卡",
      SD: "苏丹",
      SR: "苏里南",
      SJ: "斯瓦尔巴和扬马延",
      SE: "瑞典",
      CH: "瑞士",
      SY: "叙利亚",
      TW: "中国台湾",
      TJ: "塔吉克斯坦",
      TZ: "坦桑尼亚",
      TH: "泰国",
      TL: "东帝汶",
      TG: "多哥",
      TK: "托克劳",
      TO: "汤加",
      TT: "特立尼达和多巴哥",
      TN: "突尼斯",
      TR: "土耳其",
      TM: "土库曼斯坦",
      TC: "特克斯和凯科斯群岛",
      TV: "图瓦卢",
      UG: "乌干达",
      UA: "乌克兰",
      AE: "阿联酋",
      GB: "英国",
      US: "美国",
      UM: "美国本土外小岛屿",
      UY: "乌拉圭",
      UZ: "乌兹别克斯坦",
      VU: "瓦努阿图",
      VE: "委内瑞拉",
      VN: "越南",
      VG: "英属维尔京群岛",
      VI: "美属维尔京群岛",
      WF: "瓦利斯和富图纳",
      EH: "西撒哈拉",
      YE: "也门",
      ZM: "赞比亚",
      ZW: "津巴布韦"
    };
  }
  return {
    AF: "阿富汗",
    AX: "奥兰",
    AL: "阿尔巴尼亚",
    DZ: "阿尔及利亚",
    AS: "美属萨摩亚",
    AD: "安道尔",
    AO: "安哥拉",
    AI: "安圭拉",
    AQ: "南极洲",
    AG: "安提瓜和巴布达",
    AR: "阿根廷",
    AM: "亚美尼亚",
    AW: "阿鲁巴",
    AU: "澳大利亚",
    AT: "奥地利",
    AZ: "阿塞拜疆",
    BS: "巴哈马",
    BH: "巴林",
    BD: "孟加拉国",
    BB: "巴巴多斯",
    BY: "白俄罗斯",
    BE: "比利时",
    BZ: "伯利兹",
    BJ: "贝宁",
    BM: "百慕大",
    BT: "不丹",
    BO: "玻利维亚",
    BQ: "荷兰加勒比区",
    BA: "波黑",
    BW: "博茨瓦纳",
    BV: "布韦岛",
    BR: "巴西",
    IO: "英属印度洋领地",
    BN: "文莱",
    BG: "保加利亚",
    BF: "布基纳法索",
    BI: "布隆迪",
    CV: "佛得角",
    KH: "柬埔寨",
    CM: "喀麦隆",
    CA: "加拿大",
    KY: "开曼群岛",
    CF: "中非",
    TD: "乍得",
    CL: "智利",
    CN: "中国",
    CX: "圣诞岛",
    CC: "科科斯（基林）群岛",
    CO: "哥伦比亚",
    KM: "科摩罗",
    CG: "刚果共和国",
    CD: "刚果民主共和国",
    CK: "库克群岛",
    CR: "哥斯达黎加",
    CI: "科特迪瓦",
    HR: "克罗地亚",
    CU: "古巴",
    CW: "库拉索",
    CY: "塞浦路斯",
    CZ: "捷克",
    DK: "丹麦",
    DJ: "吉布提",
    DM: "多米尼克",
    DO: "多米尼加",
    EC: "厄瓜多尔",
    EG: "埃及",
    SV: "萨尔瓦多",
    GQ: "赤道几内亚",
    ER: "厄立特里亚",
    EE: "爱沙尼亚",
    SZ: "斯威士兰",
    ET: "埃塞俄比亚",
    FK: "福克兰群岛",
    FO: "法罗群岛",
    FJ: "斐济",
    FI: "芬兰",
    FR: "法国",
    GF: "法属圭亚那",
    PF: "法属波利尼西亚",
    TF: "法属南部和南极领地",
    GA: "加蓬",
    GM: "冈比亚",
    GE: "格鲁吉亚",
    DE: "德国",
    GH: "加纳",
    GI: "直布罗陀",
    GR: "希腊",
    GL: "格陵兰",
    GD: "格林纳达",
    GP: "瓜德罗普",
    GU: "关岛",
    GT: "危地马拉",
    GG: "根西",
    GN: "几内亚",
    GW: "几内亚比绍",
    GY: "圭亚那",
    HT: "海地",
    HM: "赫德岛和麦克唐纳群岛",
    VA: "梵蒂冈",
    HN: "洪都拉斯",
    HK: "中国香港",
    HU: "匈牙利",
    IS: "冰岛",
    IN: "印度",
    ID: "印尼",
    IR: "伊朗",
    IQ: "伊拉克",
    IE: "爱尔兰",
    IM: "马恩岛",
    IL: "以色列",
    IT: "意大利",
    JM: "牙买加",
    JP: "日本",
    JE: "泽西",
    JO: "约旦",
    KZ: "哈萨克斯坦",
    KE: "肯尼亚",
    KI: "基里巴斯",
    KP: "朝鲜",
    KR: "韩国",
    KW: "科威特",
    KG: "吉尔吉斯斯坦",
    LA: "老挝",
    LV: "拉脱维亚",
    LB: "黎巴嫩",
    LS: "莱索托",
    LR: "利比里亚",
    LY: "利比亚",
    LI: "列支敦士登",
    LT: "立陶宛",
    LU: "卢森堡",
    MO: "中国澳门",
    MG: "马达加斯加",
    MW: "马拉维",
    MY: "马来西亚",
    MV: "马尔代夫",
    ML: "马里",
    MT: "马耳他",
    MH: "马绍尔群岛",
    MQ: "马提尼克",
    MR: "毛里塔尼亚",
    MU: "毛里求斯",
    YT: "马约特",
    MX: "墨西哥",
    FM: "密克罗尼西亚联邦",
    MD: "摩尔多瓦",
    MC: "摩纳哥",
    MN: "蒙古",
    ME: "黑山",
    MS: "蒙特塞拉特",
    MA: "摩洛哥",
    MZ: "莫桑比克",
    MM: "缅甸",
    NA: "纳米比亚",
    NR: "瑙鲁",
    NP: "尼泊尔",
    NL: "荷兰",
    NC: "新喀里多尼亚",
    NZ: "新西兰",
    NI: "尼加拉瓜",
    NE: "尼日尔",
    NG: "尼日利亚",
    NU: "纽埃",
    NF: "诺福克岛",
    MK: "北马其顿",
    MP: "北马里亚纳群岛",
    NO: "挪威",
    OM: "阿曼",
    PK: "巴基斯坦",
    PW: "帕劳",
    PS: "巴勒斯坦",
    PA: "巴拿马",
    PG: "巴布亚新几内亚",
    PY: "巴拉圭",
    PE: "秘鲁",
    PH: "菲律宾",
    PN: "皮特凯恩群岛",
    PL: "波兰",
    PT: "葡萄牙",
    PR: "波多黎各",
    QA: "卡塔尔",
    RE: "留尼汪",
    RO: "罗马尼亚",
    RU: "俄罗斯",
    RW: "卢旺达",
    BL: "圣巴泰勒米",
    SH: "圣赫勒拿、阿森松和特里斯坦-达库尼亚",
    KN: "圣基茨和尼维斯",
    LC: "圣卢西亚",
    MF: "法属圣马丁",
    PM: "圣皮埃尔和密克隆",
    VC: "圣文森特和格林纳丁斯",
    WS: "萨摩亚",
    SM: "圣马力诺",
    ST: "圣多美和普林西比",
    SA: "沙特阿拉伯",
    SN: "塞内加尔",
    RS: "塞尔维亚",
    SC: "塞舌尔",
    SL: "塞拉利昂",
    SG: "新加坡",
    SX: "荷属圣马丁",
    SK: "斯洛伐克",
    SI: "斯洛文尼亚",
    SB: "所罗门群岛",
    SO: "索马里",
    ZA: "南非",
    GS: "南乔治亚和南桑威奇群岛",
    SS: "南苏丹",
    ES: "西班牙",
    LK: "斯里兰卡",
    SD: "苏丹",
    SR: "苏里南",
    SJ: "斯瓦尔巴和扬马延",
    SE: "瑞典",
    CH: "瑞士",
    SY: "叙利亚",
    TW: "中国臺湾",
    TJ: "塔吉克斯坦",
    TZ: "坦桑尼亚",
    TH: "泰国",
    TL: "东帝汶",
    TG: "多哥",
    TK: "托克劳",
    TO: "汤加",
    TT: "特立尼达和多巴哥",
    TN: "突尼斯",
    TR: "土耳其",
    TM: "土库曼斯坦",
    TC: "特克斯和凯科斯群岛",
    TV: "图瓦卢",
    UG: "乌干达",
    UA: "乌克兰",
    AE: "阿联酋",
    GB: "英国",
    US: "美国",
    UM: "美国本土外小岛屿",
    UY: "乌拉圭",
    UZ: "乌兹别克斯坦",
    VU: "瓦努阿图",
    VE: "委内瑞拉",
    VN: "越南",
    VG: "英属维尔京群岛",
    VI: "美属维尔京群岛",
    WF: "瓦利斯和富图纳",
    EH: "西撒哈拉",
    YE: "也门",
    ZM: "赞比亚",
    ZW: "津巴布韦"
  };
};
var getRegionNameList = () => {
  const {
    wgUserLanguage
  } = mw.config.get();
  if (["zh-hant", "zh-hk", "zh-mo", "zh-tw"].includes(wgUserLanguage)) {
    return {
      AH: "安徽",
      BJ: "北京",
      CQ: "重慶",
      FJ: "福建",
      GD: "廣東",
      GS: "甘肅",
      GX: "廣西",
      GZ: "貴州",
      HA: "河南",
      HB: "湖北",
      HE: "河北",
      HI: "海南",
      HL: "黑龍江",
      HN: "湖南",
      JL: "吉林",
      JS: "江蘇",
      JX: "江西",
      LN: "遼寧",
      NM: "內蒙古",
      NX: "寧夏",
      QH: "青海",
      SC: "四川",
      SD: "山東",
      SH: "上海",
      SN: "陝西",
      SX: "山西",
      TJ: "天津",
      XJ: "新疆",
      XZ: "西藏",
      YN: "雲南",
      ZJ: "浙江"
    };
  }
  return {
    AH: "安徽",
    BJ: "北京",
    CQ: "重庆",
    FJ: "福建",
    GD: "广东",
    GS: "甘肃",
    GX: "广西",
    GZ: "贵州",
    HA: "河南",
    HB: "湖北",
    HE: "河北",
    HI: "海南",
    HL: "黑龙江",
    HN: "湖南",
    JL: "吉林",
    JS: "江苏",
    JX: "江西",
    LN: "辽宁",
    NM: "内蒙古",
    NX: "宁夏",
    QH: "青海",
    SC: "四川",
    SD: "山东",
    SH: "上海",
    SN: "陕西",
    SX: "山西",
    TJ: "天津",
    XJ: "新疆",
    XZ: "西藏",
    YN: "云南",
    ZJ: "浙江"
  };
};
//! src/GeoLocationReader/modules/util/getName.ts
var countryOrAreaList = getCountryOrAreaNameList();
var regionList = getRegionNameList();
var getCountryOrAreaName = (key) => {
  return countryOrAreaList[key];
};
var getRegionName = (key) => {
  return regionList[key];
};
//! src/GeoLocationReader/modules/api.ts
var import_ext_gadget4 = require("ext.gadget.Util");
var api = (0, import_ext_gadget4.initMwApi)("GeoLocationReader/".concat(version));
//! src/GeoLocationReader/modules/util/getLocation.ts
var getLocation = /* @__PURE__ */ function() {
  var _ref = _asyncToGenerator(function* (wgRelevantUserName) {
    const storePageTitle = "User:".concat(wgRelevantUserName, "/GeoIP.json");
    let countryOrAreaName = getMessage("Unknown");
    let regionName = "";
    if (mw.storage.getObject(storageKey + wgRelevantUserName)) {
      ({
        countryOrAreaName,
        regionName
      } = mw.storage.getObject(storageKey + wgRelevantUserName));
    } else {
      try {
        var _data$query;
        const params = {
          action: "query",
          format: "json",
          formatversion: "2",
          titles: [storePageTitle],
          prop: ["revisions"],
          rvprop: ["content"],
          rvslots: "main",
          smaxage: 600,
          maxage: 600
        };
        const data = yield api.get(params);
        const content = ((_data$query = data["query"]) === null || _data$query === void 0 || (_data$query = _data$query.pages[0]) === null || _data$query === void 0 || (_data$query = _data$query.revisions) === null || _data$query === void 0 ? void 0 : _data$query[0].slots.main.content) || "";
        const response = JSON.parse(content);
        if (!(response.country || response.countryOrArea) && !response.region) {
          return;
        }
        const {
          country,
          countryOrArea,
          region
        } = response;
        let location = "";
        if (country || countryOrArea) {
          location = country || countryOrArea;
        }
        if (getCountryOrAreaName(location)) {
          countryOrAreaName = getCountryOrAreaName(location) || getMessage("Unknown");
        }
        if (location && location === "CN") {
          regionName = getRegionName(region) || "";
        }
        mw.storage.setObject(storageKey + wgRelevantUserName, {
          countryOrAreaName,
          regionName
        }, 60 * 60);
      } catch (error) {
        console.error("[GeoLocationReader] Ajax error in `getLocation` method:", error);
      }
    }
    return {
      countryOrAreaName,
      regionName
    };
  });
  return function getLocation2(_x) {
    return _ref.apply(this, arguments);
  };
}();
//! src/GeoLocationReader/modules/appendGeoIcon.tsx
var appendGeoIcon = /* @__PURE__ */ function() {
  var _ref2 = _asyncToGenerator(function* () {
    const {
      wgRelevantUserName
    } = mw.config.get();
    if (!wgRelevantUserName) {
      return;
    }
    try {
      var _response$countryOrAr, _response$regionName;
      const response = yield getLocation(wgRelevantUserName);
      const countryOrAreaName = (_response$countryOrAr = response === null || response === void 0 ? void 0 : response.countryOrAreaName) !== null && _response$countryOrAr !== void 0 ? _response$countryOrAr : "";
      const regionName = (_response$regionName = response === null || response === void 0 ? void 0 : response.regionName) !== null && _response$regionName !== void 0 ? _response$regionName : "";
      appendIcon({
        icon: "globe",
        indicatorText: countryOrAreaName + regionName,
        spanClass: "green"
      });
    } catch (error) {
      console.error("[GeoLocationReader] Ajax error in `appendGeoIcon` method:", error);
      appendIcon({
        icon: "helpNotice",
        indicatorText: getMessage("Unknown"),
        spanClass: "orange"
      });
    }
  });
  return function appendGeoIcon2() {
    return _ref2.apply(this, arguments);
  };
}();
//! src/GeoLocationReader/modules/addElement.ts
var import_ext_gadget5 = require("ext.gadget.MarkRights");
var addElement = /* @__PURE__ */ function() {
  var _ref3 = _asyncToGenerator(function* () {
    const {
      wgRelevantUserName
    } = mw.config.get();
    if (!wgRelevantUserName) {
      return;
    }
    try {
      var _groupsMap$wgRelevant;
      const groupsMap = yield (0, import_ext_gadget5.getLocalUserGroups)([wgRelevantUserName]);
      const groups = (_groupsMap$wgRelevant = groupsMap[wgRelevantUserName]) !== null && _groupsMap$wgRelevant !== void 0 ? _groupsMap$wgRelevant : [];
      if (groups.includes("bot") || groups.includes("qiuwen")) {
      } else {
        void appendGeoIcon();
      }
    } catch (error) {
      console.error("[GeoLocationReader] Ajax error in `addElement` method:", error);
    }
  });
  return function addElement2() {
    return _ref3.apply(this, arguments);
  };
}();
//! src/GeoLocationReader/GeoLocationReader.ts
(function geoLocationReader() {
  const {
    wgAction,
    wgNamespaceNumber,
    wgPageName,
    wgRelevantUserName
  } = mw.config.get();
  if (!wgRelevantUserName || SYSTEM_SCRIPT_LIST.includes(wgRelevantUserName) || WEBMASTER_LIST.includes(wgRelevantUserName) || !(wgNamespaceNumber === userNameSpaceNumber) || !(wgAction === "view")) {
    return;
  }
  const pageName = new mw.Title(wgPageName).toText();
  const relevantUserPageName = new mw.Title(wgRelevantUserName, userNameSpaceNumber).toText();
  if (pageName !== relevantUserPageName) {
    return;
  }
  void addElement();
})();

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0dlb0xvY2F0aW9uUmVhZGVyL29wdGlvbnMuanNvbiIsICJzcmMvR2VvTG9jYXRpb24vbW9kdWxlcy9jb25zdGFudC50cyIsICJzcmMvR2VvTG9jYXRpb25SZWFkZXIvbW9kdWxlcy9jb25zdGFudC50cyIsICJzcmMvR2VvTG9jYXRpb25SZWFkZXIvbW9kdWxlcy9jb21wb25lbnRzL3JlYWN0LnRzeCIsICJzcmMvR2VvTG9jYXRpb25SZWFkZXIvbW9kdWxlcy9pMThuLnRzIiwgInNyYy9HZW9Mb2NhdGlvblJlYWRlci9tb2R1bGVzL3V0aWwvYXBwZW5kSWNvbi50c3giLCAic3JjL0dlb0xvY2F0aW9uUmVhZGVyL21vZHVsZXMvdXRpbC9uYW1lLnRzIiwgInNyYy9HZW9Mb2NhdGlvblJlYWRlci9tb2R1bGVzL3V0aWwvZ2V0TmFtZS50cyIsICJzcmMvR2VvTG9jYXRpb25SZWFkZXIvbW9kdWxlcy9hcGkudHMiLCAic3JjL0dlb0xvY2F0aW9uUmVhZGVyL21vZHVsZXMvdXRpbC9nZXRMb2NhdGlvbi50cyIsICJzcmMvR2VvTG9jYXRpb25SZWFkZXIvbW9kdWxlcy9hcHBlbmRHZW9JY29uLnRzeCIsICJzcmMvR2VvTG9jYXRpb25SZWFkZXIvbW9kdWxlcy9hZGRFbGVtZW50LnRzIiwgInNyYy9HZW9Mb2NhdGlvblJlYWRlci9HZW9Mb2NhdGlvblJlYWRlci50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsie1xuXHRcImRlZmF1bHRHZW9JbmZvXCI6IHtcblx0XHRcImNvdW50cnlPckFyZWFcIjogXCJcIixcblx0XHRcInJlZ2lvblwiOiBcIlwiLFxuXHRcdFwiY2l0eVwiOiBcIlwiXG5cdH0sXG5cdFwibW91bnRQb2ludFNlbGVjdG9yXCI6IFwiI2Zvb3Rlci1pbmZvLC5wYWdlLWluZm9cIixcblx0XCJzdG9yYWdlS2V5XCI6IFwiZXh0LmdhZGdldC5NYXJrUmlnaHRzX0dlb0xvY2F0aW9uUmVhZGVyLVwiLFxuXHRcInVzZXJOYW1lU3BhY2VOdW1iZXJcIjogMixcblx0XCJ2ZXJzaW9uXCI6IFwiMi4xXCJcbn1cbiIsICJjb25zdCBTWVNURU1fU0NSSVBUX0xJU1Q6IHN0cmluZ1tdID0gW1xuXHQn5rul55So6L+H5ruk5ZmoJyxcblx0J+axgumXu+e8luiAhScsXG5cdCfmsYLpl7vnmb7np5HnpL7ljLonLFxuXHQnRXhhbXBsZScsXG5cdCdFeHRlcm5hbCBjb250cmlidXRvcnMnLFxuXHQnTWFpbnRlbmFuY2Ugc2NyaXB0Jyxcblx0J01lZGlhV2lraSBkZWZhdWx0Jyxcblx0J01lZGlhV2lraSBtZXNzYWdlIGRlbGl2ZXJ5Jyxcblx0J05ldyB1c2VyIHBhZ2UnLFxuXTtcbmNvbnN0IFdFQk1BU1RFUl9MSVNUOiBzdHJpbmdbXSA9IFsnUWl1V2VuJywgJ1FpdVdlbiBmb3IgQWNjb3VudHMnLCAnUWl1d2VuU29jaWFsTWVkaWEnXTtcblxuZXhwb3J0IHtTWVNURU1fU0NSSVBUX0xJU1QsIFdFQk1BU1RFUl9MSVNUfTtcbiIsICJjb25zdCBDTEFTU19OQU1FOiBzdHJpbmcgPSAnZ2FkZ2V0LWdlb19sb2NhdGlvbl9yZWFkZXInO1xuY29uc3QgQ0xBU1NfTkFNRV9JQ09OOiBzdHJpbmcgPSBgJHtDTEFTU19OQU1FfV9faWNvbmA7XG5jb25zdCBDTEFTU19OQU1FX1RFWFQ6IHN0cmluZyA9IGAke0NMQVNTX05BTUV9X190ZXh0YDtcblxuZXhwb3J0IHtTWVNURU1fU0NSSVBUX0xJU1QsIFdFQk1BU1RFUl9MSVNUfSBmcm9tICd+L0dlb0xvY2F0aW9uL21vZHVsZXMvY29uc3RhbnQnO1xuZXhwb3J0IHtDTEFTU19OQU1FLCBDTEFTU19OQU1FX0lDT04sIENMQVNTX05BTUVfVEVYVH07XG4iLCAiaW1wb3J0IHtDTEFTU19OQU1FLCBDTEFTU19OQU1FX0lDT04sIENMQVNTX05BTUVfVEVYVH0gZnJvbSAnLi4vY29uc3RhbnQnO1xuaW1wb3J0IFJlYWN0LCB7UmVhY3RFbGVtZW50fSBmcm9tICdleHQuZ2FkZ2V0LkpTWCc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4uL2kxOG4nO1xuXG5pbnRlcmZhY2UgRm9vdGVyTm90aWNlUHJvcHMge1xuXHRzcGFuQ2xhc3M6IHN0cmluZztcblx0Y2hpbGRyZW4/OiBSZWFjdEVsZW1lbnQ7XG59XG5cbmNvbnN0IEZvb3Rlck5vdGljZSA9ICh7c3BhbkNsYXNzLCBjaGlsZHJlbiA9IDw+PC8+fTogRm9vdGVyTm90aWNlUHJvcHMpID0+IHtcblx0Y29uc3Qge3NraW59ID0gbXcuY29uZmlnLmdldCgpO1xuXG5cdHJldHVybiAoXG5cdFx0PD5cblx0XHRcdHtza2luID09PSAnY2l0aXplbicgPyAoXG5cdFx0XHRcdDxzZWN0aW9uXG5cdFx0XHRcdFx0aWQ9e0NMQVNTX05BTUV9XG5cdFx0XHRcdFx0Y2xhc3NOYW1lPXtbXG5cdFx0XHRcdFx0XHRDTEFTU19OQU1FLFxuXHRcdFx0XHRcdFx0YCR7Q0xBU1NfTkFNRX0tJHtzcGFuQ2xhc3N9YCxcblx0XHRcdFx0XHRcdCdwYWdlLWluZm9fX2l0ZW0nLFxuXHRcdFx0XHRcdFx0J2NpdGl6ZW4tZm9vdGVyX19wYWdlaW5mby1pdGVtJyxcblx0XHRcdFx0XHRcdCdub3ByaW50Jyxcblx0XHRcdFx0XHRdfVxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0e2NoaWxkcmVufVxuXHRcdFx0XHQ8L3NlY3Rpb24+XG5cdFx0XHQpIDogWyd2ZWN0b3InLCAndmVjdG9yLTIwMjInLCAnZ29uZ2JpJ10uaW5jbHVkZXMoc2tpbikgfHwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcigndWwjZm9vdGVyLWluZm8nKSA/IChcblx0XHRcdFx0PGxpIGlkPXtDTEFTU19OQU1FfSBjbGFzc05hbWU9e1tDTEFTU19OQU1FLCBgJHtDTEFTU19OQU1FfS0ke3NwYW5DbGFzc31gLCAnbm9wcmludCddfT5cblx0XHRcdFx0XHR7Y2hpbGRyZW59XG5cdFx0XHRcdDwvbGk+XG5cdFx0XHQpIDogKFxuXHRcdFx0XHQ8ZGl2IGlkPXtDTEFTU19OQU1FfSBjbGFzc05hbWU9e1tDTEFTU19OQU1FLCBgJHtDTEFTU19OQU1FfS0ke3NwYW5DbGFzc31gLCAnbm9wcmludCddfT5cblx0XHRcdFx0XHR7Y2hpbGRyZW59XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0KX1cblx0XHQ8Lz5cblx0KTtcbn07XG5cbmludGVyZmFjZSBJbmRpY2F0b3JQcm9wcyB7XG5cdGljb246ICdnbG9iZScgfCAnaGVscE5vdGljZSc7XG5cdGluZGljYXRvclRleHQ6IHN0cmluZztcbn1cblxuY29uc3QgSW5kaWNhdG9yID0gKHtpY29uLCBpbmRpY2F0b3JUZXh0fTogSW5kaWNhdG9yUHJvcHMpID0+IHtcblx0Y29uc3QgdGV4dDogc3RyaW5nID1cblx0XHRpY29uID09PSAnZ2xvYmUnID8gZ2V0TWVzc2FnZSgnTG9jYXRpb24nKSArIGdldE1lc3NhZ2UoJzonKSArIGluZGljYXRvclRleHQgOiAoaW5kaWNhdG9yVGV4dCA/PyAnJyk7XG5cblx0cmV0dXJuIChcblx0XHQ8PlxuXHRcdFx0PHNwYW4gY2xhc3NOYW1lPXtbQ0xBU1NfTkFNRV9JQ09OLCBgJHtDTEFTU19OQU1FX0lDT059LSR7aWNvbn1gXX0gYXJpYS1sYWJlbD17dGV4dH0+PC9zcGFuPlxuXHRcdFx0PHNwYW4gY2xhc3NOYW1lPXtDTEFTU19OQU1FX1RFWFR9Pnt0ZXh0fTwvc3Bhbj5cblx0XHQ8Lz5cblx0KTtcbn07XG5cbmludGVyZmFjZSBGb290ZXJJY29uUHJvcHMge1xuXHRzcGFuQ2xhc3M6IHN0cmluZztcblx0aWNvbjogJ2dsb2JlJyB8ICdoZWxwTm90aWNlJztcblx0aW5kaWNhdG9yVGV4dDogc3RyaW5nO1xufVxuXG5jb25zdCBGb290ZXJJY29uID0gKHtpY29uLCBzcGFuQ2xhc3MsIGluZGljYXRvclRleHR9OiBGb290ZXJJY29uUHJvcHMpID0+IChcblx0PEZvb3Rlck5vdGljZSBzcGFuQ2xhc3M9e3NwYW5DbGFzc30+XG5cdFx0PEluZGljYXRvciBpY29uPXtpY29ufSBpbmRpY2F0b3JUZXh0PXtpbmRpY2F0b3JUZXh0fSAvPlxuXHQ8L0Zvb3Rlck5vdGljZT5cbik7XG5cbmV4cG9ydCB7Rm9vdGVySWNvbiwgdHlwZSBGb290ZXJJY29uUHJvcHN9O1xuIiwgImltcG9ydCB7bG9jYWxpemV9IGZyb20gJ2V4dC5nYWRnZXQuaTE4bic7XG5cbmNvbnN0IGdldEkxOG5NZXNzYWdlcyA9ICgpID0+IHtcblx0cmV0dXJuIHtcblx0XHQnOic6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnOiAnLFxuXHRcdFx0amE6ICfvvJonLFxuXHRcdFx0emg6ICfvvJonLFxuXHRcdH0pLFxuXHRcdFVua25vd246IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnVW5rbm93biBMb2NhdGlvbicsXG5cdFx0XHRqYTogJ+acquefpUlQ5Zyw5Z+fJyxcblx0XHRcdCd6aC1oYW5zJzogJ+acquefpUlQ5bGe5ZywJyxcblx0XHRcdCd6aC1oYW50JzogJ+acquefpUlQ5bGs5ZywJyxcblx0XHR9KSxcblx0XHRMb2NhdGlvbjogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdJUCBMb2NhdGlvbicsXG5cdFx0XHRqYTogJ0lQ5Zyw5Z+fJyxcblx0XHRcdCd6aC1oYW5zJzogJ0lQ5bGe5ZywJyxcblx0XHRcdCd6aC1oYW50JzogJ0lQ5bGs5ZywJyxcblx0XHR9KSxcblx0fTtcbn07XG5cbmNvbnN0IGkxOG5NZXNzYWdlcyA9IGdldEkxOG5NZXNzYWdlcygpO1xuXG5jb25zdCBnZXRNZXNzYWdlOiBHZXRNZXNzYWdlczx0eXBlb2YgaTE4bk1lc3NhZ2VzPiA9IChrZXkpID0+IHtcblx0cmV0dXJuIGkxOG5NZXNzYWdlc1trZXldIHx8IGtleTtcbn07XG5cbmV4cG9ydCB7Z2V0TWVzc2FnZX07XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi8uLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtGb290ZXJJY29uLCB0eXBlIEZvb3Rlckljb25Qcm9wc30gZnJvbSAnLi4vY29tcG9uZW50cy9yZWFjdCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAnZXh0LmdhZGdldC5KU1gnO1xuXG5jb25zdCBhcHBlbmRJY29uID0gKHtpY29uLCBpbmRpY2F0b3JUZXh0LCBzcGFuQ2xhc3N9OiBGb290ZXJJY29uUHJvcHMpOiB2b2lkID0+IHtcblx0aWYgKCFzcGFuQ2xhc3MgfHwgIWljb24gfHwgIWluZGljYXRvclRleHQpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBtb3VudFBvaW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MRWxlbWVudD4oT1BUSU9OUy5tb3VudFBvaW50U2VsZWN0b3IpO1xuXHRpZiAoIW1vdW50UG9pbnQpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRtb3VudFBvaW50LnByZXBlbmQoPEZvb3Rlckljb24gc3BhbkNsYXNzPXtzcGFuQ2xhc3N9IGljb249e2ljb259IGluZGljYXRvclRleHQ9e2luZGljYXRvclRleHR9IC8+KTtcbn07XG5cbmV4cG9ydCB7YXBwZW5kSWNvbn07XG4iLCAiY29uc3QgZ2V0Q291bnRyeU9yQXJlYU5hbWVMaXN0ID0gKCkgPT4ge1xuXHRjb25zdCB7d2dVc2VyTGFuZ3VhZ2V9ID0gbXcuY29uZmlnLmdldCgpO1xuXG5cdGlmIChbJ3poLWhhbnQnLCAnemgtaGsnLCAnemgtbW8nXS5pbmNsdWRlcyh3Z1VzZXJMYW5ndWFnZSkpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0QUY6ICfpmL/lr4zmsZcnLFxuXHRcdFx0QVg6ICflpafomK0nLFxuXHRcdFx0QUw6ICfpmL/niL7lt7TlsLzkup4nLFxuXHRcdFx0RFo6ICfpmL/niL7lj4rliKnkup4nLFxuXHRcdFx0QVM6ICfnvo7lsazolqnmkankup4nLFxuXHRcdFx0QUQ6ICflronpgZPniL4nLFxuXHRcdFx0QU86ICflronlk6Xmi4knLFxuXHRcdFx0QUk6ICflronlnK3mi4knLFxuXHRcdFx0QVE6ICfljZfmpbXmtLInLFxuXHRcdFx0QUc6ICflronmj5Dnk5zlkozlt7TluIPpgZQnLFxuXHRcdFx0QVI6ICfpmL/moLnlu7cnLFxuXHRcdFx0QU06ICfkup7nvo7lsLzkup4nLFxuXHRcdFx0QVc6ICfpmL/pra/lt7QnLFxuXHRcdFx0QVU6ICfmvrPmtLInLFxuXHRcdFx0QVQ6ICflpaflnLDliKknLFxuXHRcdFx0QVo6ICfpmL/loZ7mi5znloYnLFxuXHRcdFx0QlM6ICflt7Tlk4jppqwnLFxuXHRcdFx0Qkg6ICflt7TmnpcnLFxuXHRcdFx0QkQ6ICflrZ/liqDmi4nlnIsnLFxuXHRcdFx0QkI6ICflt7Tlt7TlpJrmlq8nLFxuXHRcdFx0Qlk6ICfnmb3kv4TnvoXmlq8nLFxuXHRcdFx0QkU6ICfmr5TliKnmmYInLFxuXHRcdFx0Qlo6ICfkvK/liKnojLInLFxuXHRcdFx0Qko6ICfosp3lr6cnLFxuXHRcdFx0Qk06ICfnmb7mhZXpgZQnLFxuXHRcdFx0QlQ6ICfkuI3kuLknLFxuXHRcdFx0Qk86ICfnjrvliKnntq3kup4nLFxuXHRcdFx0QlE6ICfojbfomK3liqDli5Lmr5TljYAnLFxuXHRcdFx0QkE6ICfms6Lpu5EnLFxuXHRcdFx0Qlc6ICfljZrojKjnk6bntI0nLFxuXHRcdFx0QlY6ICfluIPpn4vls7YnLFxuXHRcdFx0QlI6ICflt7Topb8nLFxuXHRcdFx0SU86ICfoi7HlsazljbDluqbmtIvpoJjlnLAnLFxuXHRcdFx0Qk46ICfmsbbokIonLFxuXHRcdFx0Qkc6ICfkv53liqDliKnkup4nLFxuXHRcdFx0QkY6ICfluIPln7rntI3ms5XntKInLFxuXHRcdFx0Qkk6ICfluIPpmobov6onLFxuXHRcdFx0Q1Y6ICfkvZvlvpfop5InLFxuXHRcdFx0S0g6ICfmn6zln5Tlr6gnLFxuXHRcdFx0Q006ICflloDpuqXpmoYnLFxuXHRcdFx0Q0E6ICfliqDmi7/lpKcnLFxuXHRcdFx0S1k6ICfplovmm7znvqTls7YnLFxuXHRcdFx0Q0Y6ICfkuK3pnZ4nLFxuXHRcdFx0VEQ6ICfkuY3lvpcnLFxuXHRcdFx0Q0w6ICfmmbrliKknLFxuXHRcdFx0Q046ICfkuK3lnIsnLFxuXHRcdFx0Q1g6ICfogZboqpXls7YnLFxuXHRcdFx0Q0M6ICfnp5Hnp5Hmlq/vvIjln7rmnpfvvInnvqTls7YnLFxuXHRcdFx0Q086ICflk6XlgKvmr5Tkup4nLFxuXHRcdFx0S006ICfnp5HmkannvoUnLFxuXHRcdFx0Q0c6ICfliZvmnpzlhbHlkozlnIsnLFxuXHRcdFx0Q0Q6ICfliZvmnpzmsJHkuLvlhbHlkozlnIsnLFxuXHRcdFx0Q0s6ICfluqvlhYvnvqTls7YnLFxuXHRcdFx0Q1I6ICflk6Xmlq/pgZTpu47liqAnLFxuXHRcdFx0Q0k6ICfnp5Hnibnov6rnk6YnLFxuXHRcdFx0SFI6ICflhYvnvoXlnLDkup4nLFxuXHRcdFx0Q1U6ICflj6Tlt7QnLFxuXHRcdFx0Q1c6ICfluqvmi4nntKInLFxuXHRcdFx0Q1k6ICfloZ7mtabot6/mlq8nLFxuXHRcdFx0Q1o6ICfmjbflhYsnLFxuXHRcdFx0REs6ICfkuLnpuqUnLFxuXHRcdFx0REo6ICflkInluIPmj5AnLFxuXHRcdFx0RE06ICflpJrnsbPlsLzlhYsnLFxuXHRcdFx0RE86ICflpJrnsbPlsLzliqAnLFxuXHRcdFx0RUM6ICfljoTnk5zlpJrniL4nLFxuXHRcdFx0RUc6ICfln4Plj4onLFxuXHRcdFx0U1Y6ICfolqnniL7nk6blpJonLFxuXHRcdFx0R1E6ICfotaTpgZPnlb/lhafkup4nLFxuXHRcdFx0RVI6ICfljoTnq4vnibnph4zkup4nLFxuXHRcdFx0RUU6ICfmhJvmspnlsLzkup4nLFxuXHRcdFx0U1o6ICfmlq/lqIHlo6vomK0nLFxuXHRcdFx0RVQ6ICfln4PloZ7kv4Tmr5Tkup4nLFxuXHRcdFx0Rks6ICfnpo/lhYvomK3nvqTls7YnLFxuXHRcdFx0Rk86ICfms5XnvoXnvqTls7YnLFxuXHRcdFx0Rko6ICfmlpDmv58nLFxuXHRcdFx0Rkk6ICfoiqzomK0nLFxuXHRcdFx0RlI6ICfms5XlnIsnLFxuXHRcdFx0R0Y6ICfms5XlsazlnK3kup7pgqMnLFxuXHRcdFx0UEY6ICfms5Xlsazms6LliKnlsLzopb/kup4nLFxuXHRcdFx0VEY6ICfms5XlsazljZfpg6jlkozljZfmpbXpoJjlnLAnLFxuXHRcdFx0R0E6ICfliqDok6wnLFxuXHRcdFx0R006ICflsqHmr5Tkup4nLFxuXHRcdFx0R0U6ICfmoLzpra/lkInkup4nLFxuXHRcdFx0REU6ICflvrflnIsnLFxuXHRcdFx0R0g6ICfliqDntI0nLFxuXHRcdFx0R0k6ICfnm7TluIPnvoXpmYAnLFxuXHRcdFx0R1I6ICfluIzoh5gnLFxuXHRcdFx0R0w6ICfmoLzpmbXomK0nLFxuXHRcdFx0R0Q6ICfmoLzmnpfntI3pgZQnLFxuXHRcdFx0R1A6ICfnk5zlvrfnvoXmma4nLFxuXHRcdFx0R1U6ICfpl5zls7YnLFxuXHRcdFx0R1Q6ICfljbHlnLDppqzmi4knLFxuXHRcdFx0R0c6ICfmoLnopb8nLFxuXHRcdFx0R046ICfnlb/lhafkup4nLFxuXHRcdFx0R1c6ICfnlb/lhafkup7mr5TntLknLFxuXHRcdFx0R1k6ICflnK3kup7pgqMnLFxuXHRcdFx0SFQ6ICfmtbflnLAnLFxuXHRcdFx0SE06ICfotavlvrfls7blkozpuqXlhYvllJDntI3nvqTls7YnLFxuXHRcdFx0VkE6ICfmorXokoLlsqEnLFxuXHRcdFx0SE46ICfmtKrpg73mi4nmlq8nLFxuXHRcdFx0SEs6ICfkuK3lnIvpppnmuK8nLFxuXHRcdFx0SFU6ICfljIjniZnliKknLFxuXHRcdFx0SVM6ICflhrDls7YnLFxuXHRcdFx0SU46ICfljbDluqYnLFxuXHRcdFx0SUQ6ICfljbDlsLwnLFxuXHRcdFx0SVI6ICfkvIrmnJcnLFxuXHRcdFx0SVE6ICfkvIrmi4nlhYsnLFxuXHRcdFx0SUU6ICfmhJvniL7omK0nLFxuXHRcdFx0SU06ICfkurrls7YnLFxuXHRcdFx0SUw6ICfku6XoibLliJcnLFxuXHRcdFx0SVQ6ICfmhI/lpKfliKknLFxuXHRcdFx0Sk06ICfniZnosrfliqAnLFxuXHRcdFx0SlA6ICfml6XmnKwnLFxuXHRcdFx0SkU6ICfmvqTopb8nLFxuXHRcdFx0Sk86ICfntITml6YnLFxuXHRcdFx0S1o6ICflk4jolqnlhYsnLFxuXHRcdFx0S0U6ICfogq/pm4UnLFxuXHRcdFx0S0k6ICfln7rph4zlt7Tmlq8nLFxuXHRcdFx0S1A6ICfljJfpn5MnLFxuXHRcdFx0S1I6ICfpn5PlnIsnLFxuXHRcdFx0S1c6ICfnp5HlqIHnibknLFxuXHRcdFx0S0c6ICflkInniL7lkInmlq8nLFxuXHRcdFx0TEE6ICfogIHmkr4nLFxuXHRcdFx0TFY6ICfmi4nohKvntq3kup4nLFxuXHRcdFx0TEI6ICfpu47lt7Tlq6knLFxuXHRcdFx0TFM6ICfokIrntKLmiZgnLFxuXHRcdFx0TFI6ICfliKnmr5Tph4zkup4nLFxuXHRcdFx0TFk6ICfliKnmr5Tkup4nLFxuXHRcdFx0TEk6ICfliJfmlK/mlablo6vnmbsnLFxuXHRcdFx0TFQ6ICfnq4vpmbblrpsnLFxuXHRcdFx0TFU6ICfnm6fmo67loKEnLFxuXHRcdFx0TU86ICfkuK3lnIvmvrPploAnLFxuXHRcdFx0TUc6ICfppqzpgZTliqDmlq/liqAnLFxuXHRcdFx0TVc6ICfppqzmi4nntq0nLFxuXHRcdFx0TVk6ICfppqzkvobopb/kup4nLFxuXHRcdFx0TVY6ICfppqzniL7ku6PlpKsnLFxuXHRcdFx0TUw6ICfppqzph4wnLFxuXHRcdFx0TVQ6ICfppqzogLPku5YnLFxuXHRcdFx0TUg6ICfppqzntLnniL7nvqTls7YnLFxuXHRcdFx0TVE6ICfppqzmj5DlsLzlhYsnLFxuXHRcdFx0TVI6ICfmr5vph4zloZTlsLzkup4nLFxuXHRcdFx0TVU6ICfmr5vph4zoo5jmlq8nLFxuXHRcdFx0WVQ6ICfppqzntITnibknLFxuXHRcdFx0TVg6ICfloqjopb/lk6UnLFxuXHRcdFx0Rk06ICflr4blhYvnvoXlsLzopb/kup7oga/pgqYnLFxuXHRcdFx0TUQ6ICfmkanniL7lpJrnk6YnLFxuXHRcdFx0TUM6ICfmkanntI3lk6UnLFxuXHRcdFx0TU46ICfokpnlj6QnLFxuXHRcdFx0TUU6ICfpu5HlsbEnLFxuXHRcdFx0TVM6ICfokpnnibnloZ7mi4nnibknLFxuXHRcdFx0TUE6ICfmkanmtJvlk6UnLFxuXHRcdFx0TVo6ICfojqvmoZHmr5TlhYsnLFxuXHRcdFx0TU06ICfnt6znlLgnLFxuXHRcdFx0TkE6ICfntI3nsbPmr5Tkup4nLFxuXHRcdFx0TlI6ICfnkZnpra8nLFxuXHRcdFx0TlA6ICflsLzms4rniL4nLFxuXHRcdFx0Tkw6ICfojbfomK0nLFxuXHRcdFx0TkM6ICfmlrDlloDph4zlpJrlsLzkup4nLFxuXHRcdFx0Tlo6ICfmlrDopb/omK0nLFxuXHRcdFx0Tkk6ICflsLzliqDmi4nnk5wnLFxuXHRcdFx0TkU6ICflsLzml6XniL4nLFxuXHRcdFx0Tkc6ICflsLzml6XliKnkup4nLFxuXHRcdFx0TlU6ICfntJDln4MnLFxuXHRcdFx0TkY6ICfoq77npo/lhYvls7YnLFxuXHRcdFx0TUs6ICfljJfppqzlhbbpoJMnLFxuXHRcdFx0TVA6ICfljJfppqzliKnlronntI3nvqTls7YnLFxuXHRcdFx0Tk86ICfmjKrlqIEnLFxuXHRcdFx0T006ICfpmL/mm7wnLFxuXHRcdFx0UEs6ICflt7Tln7rmlq/lnaYnLFxuXHRcdFx0UFc6ICfluJXli54nLFxuXHRcdFx0UFM6ICflt7Tli5Lmlq/lnaYnLFxuXHRcdFx0UEE6ICflt7Tmi7/ppqwnLFxuXHRcdFx0UEc6ICflt7TluIPkup7mlrDnlb/lhafkup4nLFxuXHRcdFx0UFk6ICflt7Tmi4nlnK0nLFxuXHRcdFx0UEU6ICfnp5jpra8nLFxuXHRcdFx0UEg6ICfoj7Llvovos5MnLFxuXHRcdFx0UE46ICfnmq7nibnogq/nvqTls7YnLFxuXHRcdFx0UEw6ICfms6LomK0nLFxuXHRcdFx0UFQ6ICfokaHokITniZknLFxuXHRcdFx0UFI6ICfms6LlpJrpu47lkIQnLFxuXHRcdFx0UUE6ICfljaHloZTniL4nLFxuXHRcdFx0UkU6ICfnlZnlsLzmsaonLFxuXHRcdFx0Uk86ICfnvoXppqzlsLzkup4nLFxuXHRcdFx0UlU6ICfkv4TnvoXmlq8nLFxuXHRcdFx0Ulc6ICfnm6fml7rpgZQnLFxuXHRcdFx0Qkw6ICfogZblt7Tms7Dli5LnsbMnLFxuXHRcdFx0U0g6ICfogZbmtbflgKvlqJzjgIHpmL/mo67mnb7lkoznibnph4zmlq/lnaYt6YGU5bqr5bC85LqeJyxcblx0XHRcdEtOOiAn6IGW5Z+66Iyo5ZKM5bC857at5pavJyxcblx0XHRcdExDOiAn6IGW55un6KW/5LqeJyxcblx0XHRcdE1GOiAn5rOV5bGs6IGW6aas5LiBJyxcblx0XHRcdFBNOiAn6IGW55qu5Z+D54i+5ZKM5a+G5YWL6ZqGJyxcblx0XHRcdFZDOiAn6IGW5paH5qOu54m55ZKM5qC85p6X57SN5LiB5pavJyxcblx0XHRcdFdTOiAn6Jap5pGp5LqeJyxcblx0XHRcdFNNOiAn6IGW6aas5Yqb6Ku+Jyxcblx0XHRcdFNUOiAn6IGW5aSa576O5ZKM5pmu5p6X6KW/5q+UJyxcblx0XHRcdFNBOiAn5rKZ5Zyw6Zi/5ouJ5LyvJyxcblx0XHRcdFNOOiAn5aGe5YWn5Yqg54i+Jyxcblx0XHRcdFJTOiAn5aGe54i+57at5LqeJyxcblx0XHRcdFNDOiAn5aGe6IiM54i+Jyxcblx0XHRcdFNMOiAn5aGe5ouJ5Yip5piCJyxcblx0XHRcdFNHOiAn5paw5Yqg5Z2hJyxcblx0XHRcdFNYOiAn6I235bGs6IGW6aas5LiBJyxcblx0XHRcdFNLOiAn5pav5rSb5LyQ5YWLJyxcblx0XHRcdFNJOiAn5pav5rSb5paH5bC85LqeJyxcblx0XHRcdFNCOiAn5omA576F6ZaA576k5bO2Jyxcblx0XHRcdFNPOiAn57Si6aas6YeMJyxcblx0XHRcdFpBOiAn5Y2X6Z2eJyxcblx0XHRcdEdTOiAn5Y2X5Zas5rK75Lqe5ZKM5Y2X5qGR5aiB5aWH576k5bO2Jyxcblx0XHRcdFNTOiAn5Y2X6JiH5Li5Jyxcblx0XHRcdEVTOiAn6KW/54+t54mZJyxcblx0XHRcdExLOiAn5pav6YeM6Jit5Y2hJyxcblx0XHRcdFNEOiAn6JiH5Li5Jyxcblx0XHRcdFNSOiAn6JiH6YeM5Y2XJyxcblx0XHRcdFNKOiAn5pav55Om54i+5be05ZKM5o+a6aas5bu2Jyxcblx0XHRcdFNFOiAn55Ge5YW4Jyxcblx0XHRcdENIOiAn55Ge5aOrJyxcblx0XHRcdFNZOiAn5pWY5Yip5LqeJyxcblx0XHRcdFRXOiAn5Lit5ZyL6Ie654GjJyxcblx0XHRcdFRKOiAn5aGU5ZCJ5YWLJyxcblx0XHRcdFRaOiAn5Z2m5qGR5bC85LqeJyxcblx0XHRcdFRIOiAn5rOw5ZyLJyxcblx0XHRcdFRMOiAn5p2x5bid5rG2Jyxcblx0XHRcdFRHOiAn5aSa5ZOlJyxcblx0XHRcdFRLOiAn5omY5YWL5YueJyxcblx0XHRcdFRPOiAn5rmv5YqgJyxcblx0XHRcdFRUOiAn5Y2D6YeM6YGU5ZKM5aSa5be05ZOlJyxcblx0XHRcdFROOiAn56qB5bC86KW/5LqeJyxcblx0XHRcdFRSOiAn5Zyf6ICz5YW2Jyxcblx0XHRcdFRNOiAn5Zyf5bqr5pu8Jyxcblx0XHRcdFRDOiAn54m55YWL5pav5ZKM5Yex56eR5pav576k5bO2Jyxcblx0XHRcdFRWOiAn5ZyW55Om55unJyxcblx0XHRcdFVHOiAn54OP5bmy6YGUJyxcblx0XHRcdFVBOiAn54OP5YWL6JitJyxcblx0XHRcdEFFOiAn6Zi/6IGv6YWLJyxcblx0XHRcdEdCOiAn6Iux5ZyLJyxcblx0XHRcdFVTOiAn576O5ZyLJyxcblx0XHRcdFVNOiAn576O5ZyL5pys5Zyf5aSW5bCP5bO25ba8Jyxcblx0XHRcdFVZOiAn54OP5ouJ5ZytJyxcblx0XHRcdFVaOiAn54OP6Iyy5Yil5YWLJyxcblx0XHRcdFZVOiAn55Om5Yqq6Zi/5ZyWJyxcblx0XHRcdFZFOiAn5aeU5YWn55Ge5ouJJyxcblx0XHRcdFZOOiAn6LaK5Y2XJyxcblx0XHRcdFZHOiAn6Iux5bGs6JmV5aWz576k5bO2Jyxcblx0XHRcdFZJOiAn576O5bGs6JmV5aWz576k5bO2Jyxcblx0XHRcdFdGOiAn55Om5Yip5pav5ZKM5a+M5ZyW57SNJyxcblx0XHRcdEVIOiAn6KW/5pKS5ZOI5ouJJyxcblx0XHRcdFlFOiAn5Lmf6ZaAJyxcblx0XHRcdFpNOiAn6LSK5q+U5LqeJyxcblx0XHRcdFpXOiAn5rSl5be05biD6Z+LJyxcblx0XHR9O1xuXHR9IGVsc2UgaWYgKFsnemgtdHcnXS5pbmNsdWRlcyh3Z1VzZXJMYW5ndWFnZSkpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0QUY6ICfpmL/lr4zmsZcnLFxuXHRcdFx0QVg6ICflpafomK0nLFxuXHRcdFx0QUw6ICfpmL/niL7lt7TlsLzkup4nLFxuXHRcdFx0RFo6ICfpmL/niL7lj4rliKnkup4nLFxuXHRcdFx0QVM6ICfnvo7lsazolqnmkankup4nLFxuXHRcdFx0QUQ6ICflronpgZPniL4nLFxuXHRcdFx0QU86ICflronlk6Xmi4knLFxuXHRcdFx0QUk6ICflronlnK3mi4knLFxuXHRcdFx0QVE6ICfljZfmpbXmtLInLFxuXHRcdFx0QUc6ICflronlnLDljaHlj4rlt7TluIPpgZQnLFxuXHRcdFx0QVI6ICfpmL/moLnlu7cnLFxuXHRcdFx0QU06ICfkup7nvo7lsLzkup4nLFxuXHRcdFx0QVc6ICfpmL/pra/lt7QnLFxuXHRcdFx0QVU6ICfmvrPmtLInLFxuXHRcdFx0QVQ6ICflpaflnLDliKknLFxuXHRcdFx0QVo6ICfkup7loZ7mi5znhLYnLFxuXHRcdFx0QlM6ICflt7Tlk4jppqwnLFxuXHRcdFx0Qkg6ICflt7TmnpcnLFxuXHRcdFx0QkQ6ICflrZ/liqDmi4nlnIsnLFxuXHRcdFx0QkI6ICflt7Tosp3lpJonLFxuXHRcdFx0Qlk6ICfnmb3kv4TnvoXmlq8nLFxuXHRcdFx0QkU6ICfmr5TliKnmmYInLFxuXHRcdFx0Qlo6ICfosp3ph4zmlq8nLFxuXHRcdFx0Qko6ICfosp3ljZcnLFxuXHRcdFx0Qk06ICfnmb7mhZXpgZQnLFxuXHRcdFx0QlQ6ICfkuI3kuLknLFxuXHRcdFx0Qk86ICfnjrvliKnntq3kup4nLFxuXHRcdFx0QlE6ICfojbfomK3liqDli5Lmr5TljYAnLFxuXHRcdFx0QkE6ICfms6LotasnLFxuXHRcdFx0Qlc6ICfms6LmnK3pgqMnLFxuXHRcdFx0QlY6ICfluIPpn4vls7YnLFxuXHRcdFx0QlI6ICflt7Topb8nLFxuXHRcdFx0SU86ICfoi7HlsazljbDluqbmtIvpoJjlnLAnLFxuXHRcdFx0Qk46ICfmsbbokIonLFxuXHRcdFx0Qkc6ICfkv53liqDliKnkup4nLFxuXHRcdFx0QkY6ICfluIPlkInntI3ms5XntKInLFxuXHRcdFx0Qkk6ICfokrLpmoblnLAnLFxuXHRcdFx0Q1Y6ICfntq3lvrfop5InLFxuXHRcdFx0S0g6ICfmn6zln5Tlr6gnLFxuXHRcdFx0Q006ICflloDpuqXpmoYnLFxuXHRcdFx0Q0E6ICfliqDmi7/lpKcnLFxuXHRcdFx0S1k6ICfplovmm7znvqTls7YnLFxuXHRcdFx0Q0Y6ICfkuK3pnZ4nLFxuXHRcdFx0VEQ6ICfmn6XlvrcnLFxuXHRcdFx0Q0w6ICfmmbrliKknLFxuXHRcdFx0Q046ICfkuK3lnIsnLFxuXHRcdFx0Q1g6ICfogZboqpXls7YnLFxuXHRcdFx0Q0M6ICfnp5Hnp5Hmlq/vvIjln7rmnpfvvInnvqTls7YnLFxuXHRcdFx0Q086ICflk6XlgKvmr5Tkup4nLFxuXHRcdFx0S006ICfokZvmkaknLFxuXHRcdFx0Q0c6ICfliZvmnpzlhbHlkozlnIsnLFxuXHRcdFx0Q0Q6ICfliZvmnpzmsJHkuLvlhbHlkozlnIsnLFxuXHRcdFx0Q0s6ICfluqvlhYvnvqTls7YnLFxuXHRcdFx0Q1I6ICflk6Xmlq/lpKfpu47liqAnLFxuXHRcdFx0Q0k6ICfosaHniZnmtbflsrgnLFxuXHRcdFx0SFI6ICflhYvnvoXln4Popb/kup4nLFxuXHRcdFx0Q1U6ICflj6Tlt7QnLFxuXHRcdFx0Q1c6ICflj6Tmi4nntKInLFxuXHRcdFx0Q1k6ICfos73mma7li5Lmlq8nLFxuXHRcdFx0Q1o6ICfmjbflhYsnLFxuXHRcdFx0REs6ICfkuLnpuqUnLFxuXHRcdFx0REo6ICflkInluIPlnLAnLFxuXHRcdFx0RE06ICflpJrnsbPlsLzlhYsnLFxuXHRcdFx0RE86ICflpJrmmI7lsLzliqAnLFxuXHRcdFx0RUM6ICfljoTnk5zlpJonLFxuXHRcdFx0RUc6ICfln4Plj4onLFxuXHRcdFx0U1Y6ICfolqnniL7nk6blpJonLFxuXHRcdFx0R1E6ICfotaTpgZPlub7lhafkup4nLFxuXHRcdFx0RVI6ICfljoTliKnlnoLkup4nLFxuXHRcdFx0RUU6ICfmhJvmspnlsLzkup4nLFxuXHRcdFx0U1o6ICflj7Lnk6bluJ3lsLwnLFxuXHRcdFx0RVQ6ICfooaPntKLmr5Tkup4nLFxuXHRcdFx0Rks6ICfnpo/lhYvomK3nvqTls7YnLFxuXHRcdFx0Rk86ICfms5XnvoXnvqTls7YnLFxuXHRcdFx0Rko6ICfmlpDmv58nLFxuXHRcdFx0Rkk6ICfoiqzomK0nLFxuXHRcdFx0RlI6ICfms5XlnIsnLFxuXHRcdFx0R0Y6ICfms5XlsazlnK3kup7pgqMnLFxuXHRcdFx0UEY6ICfms5Xlsaznjrvph4zlsLzopb/kup4nLFxuXHRcdFx0VEY6ICfms5XlsazljZfpg6jlkozljZfmpbXpoJjlnLAnLFxuXHRcdFx0R0E6ICfliqDlva0nLFxuXHRcdFx0R006ICfnlJjmr5Tkup4nLFxuXHRcdFx0R0U6ICfllqzmsrvkup4nLFxuXHRcdFx0REU6ICflvrflnIsnLFxuXHRcdFx0R0g6ICfov6bntI0nLFxuXHRcdFx0R0k6ICfnm7TluIPnvoXpmYAnLFxuXHRcdFx0R1I6ICfluIzoh5gnLFxuXHRcdFx0R0w6ICfmoLzpmbXomK0nLFxuXHRcdFx0R0Q6ICfmoLznkZ7pgqPpgZQnLFxuXHRcdFx0R1A6ICfnk5zlvrfnvoXmma4nLFxuXHRcdFx0R1U6ICfpl5zls7YnLFxuXHRcdFx0R1Q6ICfnk5zlnLDppqzmi4knLFxuXHRcdFx0R0c6ICfmoLnopb8nLFxuXHRcdFx0R046ICflub7lhafkup4nLFxuXHRcdFx0R1c6ICflub7lhafkup7mr5TntKInLFxuXHRcdFx0R1k6ICfok4vkup7pgqMnLFxuXHRcdFx0SFQ6ICfmtbflnLAnLFxuXHRcdFx0SE06ICfotavlvrfls7blkozpuqXlhYvllJDntI3nvqTls7YnLFxuXHRcdFx0VkE6ICfmorXokoLlsqEnLFxuXHRcdFx0SE46ICflro/pg73mi4nmlq8nLFxuXHRcdFx0SEs6ICfkuK3lnIvpppnmuK8nLFxuXHRcdFx0SFU6ICfljIjniZnliKknLFxuXHRcdFx0SVM6ICflhrDls7YnLFxuXHRcdFx0SU46ICfljbDluqYnLFxuXHRcdFx0SUQ6ICfljbDlsLwnLFxuXHRcdFx0SVI6ICfkvIrmnJcnLFxuXHRcdFx0SVE6ICfkvIrmi4nlhYsnLFxuXHRcdFx0SUU6ICfmhJvniL7omK0nLFxuXHRcdFx0SU06ICfmm7zls7YnLFxuXHRcdFx0SUw6ICfku6XoibLliJcnLFxuXHRcdFx0SVQ6ICfnvqnlpKfliKknLFxuXHRcdFx0Sk06ICfniZnosrfliqAnLFxuXHRcdFx0SlA6ICfml6XmnKwnLFxuXHRcdFx0SkU6ICfmvqTopb8nLFxuXHRcdFx0Sk86ICfntITml6YnLFxuXHRcdFx0S1o6ICflk4jolqnlhYsnLFxuXHRcdFx0S0U6ICfogq/kup4nLFxuXHRcdFx0S0k6ICflkInph4zlt7Tmlq8nLFxuXHRcdFx0S1A6ICfljJfpn5MnLFxuXHRcdFx0S1I6ICfpn5PlnIsnLFxuXHRcdFx0S1c6ICfnp5HlqIHnibknLFxuXHRcdFx0S0c6ICflkInniL7lkInmlq8nLFxuXHRcdFx0TEE6ICfogIHmkr4nLFxuXHRcdFx0TFY6ICfmi4nohKvntq3kup4nLFxuXHRcdFx0TEI6ICfpu47lt7Tlq6knLFxuXHRcdFx0TFM6ICfos7TntKLmiZgnLFxuXHRcdFx0TFI6ICfos7Tmr5TnkZ7kup4nLFxuXHRcdFx0TFk6ICfliKnmr5Tkup4nLFxuXHRcdFx0TEk6ICfliJfmlK/mlabmlq/nmbsnLFxuXHRcdFx0TFQ6ICfnq4vpmbblrpsnLFxuXHRcdFx0TFU6ICfnm6fmo67loKEnLFxuXHRcdFx0TU86ICfkuK3lnIvmvrPploAnLFxuXHRcdFx0TUc6ICfppqzpgZTliqDmlq/liqAnLFxuXHRcdFx0TVc6ICfppqzmi4nlqIEnLFxuXHRcdFx0TVk6ICfppqzkvobopb/kup4nLFxuXHRcdFx0TVY6ICfppqzniL7lnLDlpKsnLFxuXHRcdFx0TUw6ICfppqzph4wnLFxuXHRcdFx0TVQ6ICfppqzniL7ku5YnLFxuXHRcdFx0TUg6ICfppqzntLnniL7nvqTls7YnLFxuXHRcdFx0TVE6ICfppqzmj5DlsLzlhYsnLFxuXHRcdFx0TVI6ICfojIXliKnloZTlsLzkup4nLFxuXHRcdFx0TVU6ICfmqKHph4zopb/mlq8nLFxuXHRcdFx0WVQ6ICfppqzntITnibknLFxuXHRcdFx0TVg6ICfloqjopb/lk6UnLFxuXHRcdFx0Rk06ICflr4blhYvnvoXlsLzopb/kup7oga/pgqYnLFxuXHRcdFx0TUQ6ICfmkanniL7lpJrnk6YnLFxuXHRcdFx0TUM6ICfmkanntI3lk6UnLFxuXHRcdFx0TU46ICfokpnlj6QnLFxuXHRcdFx0TUU6ICfokpnnibnlhaflk6XnvoUnLFxuXHRcdFx0TVM6ICfokpnlk7Loh5gnLFxuXHRcdFx0TUE6ICfmkanmtJvlk6UnLFxuXHRcdFx0TVo6ICfojqvkuInmr5TlhYsnLFxuXHRcdFx0TU06ICfnt6znlLgnLFxuXHRcdFx0TkE6ICfntI3nsbPmr5Tkup4nLFxuXHRcdFx0TlI6ICfoq77pra8nLFxuXHRcdFx0TlA6ICflsLzms4rniL4nLFxuXHRcdFx0Tkw6ICfojbfomK0nLFxuXHRcdFx0TkM6ICfmlrDlloDph4zlpJrlsLzkup4nLFxuXHRcdFx0Tlo6ICfntJDopb/omK0nLFxuXHRcdFx0Tkk6ICflsLzliqDmi4nnk5wnLFxuXHRcdFx0TkU6ICflsLzml6UnLFxuXHRcdFx0Tkc6ICflpYjlj4rliKnkup4nLFxuXHRcdFx0TlU6ICfntJDln4MnLFxuXHRcdFx0TkY6ICfoq77npo/lhYvls7YnLFxuXHRcdFx0TUs6ICfljJfppqzlhbbpoJMnLFxuXHRcdFx0TVA6ICfljJfppqzliKnlronntI3nvqTls7YnLFxuXHRcdFx0Tk86ICfmjKrlqIEnLFxuXHRcdFx0T006ICfpmL/mm7wnLFxuXHRcdFx0UEs6ICflt7Tln7rmlq/lnaYnLFxuXHRcdFx0UFc6ICfluJvnkIknLFxuXHRcdFx0UFM6ICflt7Tli5Lmlq/lnaYnLFxuXHRcdFx0UEE6ICflt7Tmi7/ppqwnLFxuXHRcdFx0UEc6ICflt7TluIPkup7ntJDlub7lhafkup4nLFxuXHRcdFx0UFk6ICflt7Tmi4nlnK0nLFxuXHRcdFx0UEU6ICfnp5jpra8nLFxuXHRcdFx0UEg6ICfoj7Llvovos5MnLFxuXHRcdFx0UE46ICfnmq7nibnogq/nvqTls7YnLFxuXHRcdFx0UEw6ICfms6LomK0nLFxuXHRcdFx0UFQ6ICfokaHokITniZknLFxuXHRcdFx0UFI6ICfms6LlpJrpu47lkIQnLFxuXHRcdFx0UUE6ICfljaHpgZQnLFxuXHRcdFx0UkU6ICfnlZnlsLzml7onLFxuXHRcdFx0Uk86ICfnvoXppqzlsLzkup4nLFxuXHRcdFx0UlU6ICfkv4TnvoXmlq8nLFxuXHRcdFx0Ulc6ICfnm6flronpgZQnLFxuXHRcdFx0Qkw6ICfogZblt7Tms7Dli5LnsbMnLFxuXHRcdFx0U0g6ICfogZbmtbfok67lqJzjgIHpmL/mo67mnb7lkoznibnph4zmlq/lnaYt6YGU5bqr5bC85LqeJyxcblx0XHRcdEtOOiAn6IGW5YWL6YeM5pav5aSa56aP5Y+K5bC857at5pavJyxcblx0XHRcdExDOiAn6IGW6Zyy6KW/5LqeJyxcblx0XHRcdE1GOiAn5rOV5bGs6IGW6aas5LiBJyxcblx0XHRcdFBNOiAn6IGW55qu6IC26IiH5a+G5YWL6ZqGJyxcblx0XHRcdFZDOiAn6IGW5paH5qOu5Y+K5qC855Ge6YKj5LiBJyxcblx0XHRcdFdTOiAn6Jap5pGp5LqeJyxcblx0XHRcdFNNOiAn6IGW6aas5Yip6Ku+Jyxcblx0XHRcdFNUOiAn6IGW5aSa576O5pmu5p6X6KW/5q+UJyxcblx0XHRcdFNBOiAn5rKZ54OP5Zyw6Zi/5ouJ5LyvJyxcblx0XHRcdFNOOiAn5aGe5YWn5Yqg54i+Jyxcblx0XHRcdFJTOiAn5aGe54i+57at5LqeJyxcblx0XHRcdFNDOiAn5aGe5bit54i+Jyxcblx0XHRcdFNMOiAn542F5a2Q5bGxJyxcblx0XHRcdFNHOiAn5paw5Yqg5Z2hJyxcblx0XHRcdFNYOiAn6I235bGs6IGW6aas5LiBJyxcblx0XHRcdFNLOiAn5pav5rSb5LyQ5YWLJyxcblx0XHRcdFNJOiAn5pav5rSb57at5bC85LqeJyxcblx0XHRcdFNCOiAn57Si576F6ZaA576k5bO2Jyxcblx0XHRcdFNPOiAn57Si6aas5Yip5LqeJyxcblx0XHRcdFpBOiAn5Y2X6Z2eJyxcblx0XHRcdEdTOiAn5Y2X5Zas5rK75Lqe5ZKM5Y2X5qGR5aiB5aWH576k5bO2Jyxcblx0XHRcdFNTOiAn5Y2X6JiH5Li5Jyxcblx0XHRcdEVTOiAn6KW/54+t54mZJyxcblx0XHRcdExLOiAn5pav6YeM6Jit5Y2hJyxcblx0XHRcdFNEOiAn6JiH5Li5Jyxcblx0XHRcdFNSOiAn6JiH5Yip5Y2XJyxcblx0XHRcdFNKOiAn5pav55Om54i+5be05ZKM5o+a6aas5bu2Jyxcblx0XHRcdFNFOiAn55Ge5YW4Jyxcblx0XHRcdENIOiAn55Ge5aOrJyxcblx0XHRcdFNZOiAn5pWY5Yip5LqeJyxcblx0XHRcdFRXOiAn5Lit5ZyL6Ie654GjJyxcblx0XHRcdFRKOiAn5aGU5ZCJ5YWLJyxcblx0XHRcdFRaOiAn5Z2m5bCa5bC85LqeJyxcblx0XHRcdFRIOiAn5rOw5ZyLJyxcblx0XHRcdFRMOiAn5p2x5bid5rG2Jyxcblx0XHRcdFRHOiAn5aSa5ZOlJyxcblx0XHRcdFRLOiAn5omY5YWL5YueJyxcblx0XHRcdFRPOiAn5p2x5YqgJyxcblx0XHRcdFRUOiAn5Y2D6YeM6YGU5Y+K5omY5be05ZOlJyxcblx0XHRcdFROOiAn56qB5bC86KW/5LqeJyxcblx0XHRcdFRSOiAn5Zyf6ICz5YW2Jyxcblx0XHRcdFRNOiAn5Zyf5bqr5pu8Jyxcblx0XHRcdFRDOiAn5Zyf5YWL5Yex5Y+v576k5bO2Jyxcblx0XHRcdFRWOiAn5ZCQ55Om6a2vJyxcblx0XHRcdFVHOiAn54OP5bmy6YGUJyxcblx0XHRcdFVBOiAn54OP5YWL6JitJyxcblx0XHRcdEFFOiAn6Zi/6IGvJyxcblx0XHRcdEdCOiAn6Iux5ZyLJyxcblx0XHRcdFVTOiAn576O5ZyLJyxcblx0XHRcdFVNOiAn576O5ZyL5pys5Zyf5aSW5bCP5bO25ba8Jyxcblx0XHRcdFVZOiAn54OP5ouJ5ZytJyxcblx0XHRcdFVaOiAn54OP6Iyy5Yil5YWLJyxcblx0XHRcdFZVOiAn6JCs6YKj5p2cJyxcblx0XHRcdFZFOiAn5aeU5YWn55Ge5ouJJyxcblx0XHRcdFZOOiAn6LaK5Y2XJyxcblx0XHRcdFZHOiAn6Iux5bGs57at5Lqs576k5bO2Jyxcblx0XHRcdFZJOiAn576O5bGs57at5Lqs576k5bO2Jyxcblx0XHRcdFdGOiAn55Om5Yip5pav5ZKM5a+M5ZyW57SNJyxcblx0XHRcdEVIOiAn6KW/5pKS5ZOI5ouJJyxcblx0XHRcdFlFOiAn6JGJ6ZaAJyxcblx0XHRcdFpNOiAn5bCa5q+U5LqeJyxcblx0XHRcdFpXOiAn6L6b5be05aiBJyxcblx0XHR9O1xuXHR9IGVsc2UgaWYgKFsnemgtbXknLCAnemgtc2cnXS5pbmNsdWRlcyh3Z1VzZXJMYW5ndWFnZSkpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0QUY6ICfpmL/lr4zmsZcnLFxuXHRcdFx0QVg6ICflpaXlhbAnLFxuXHRcdFx0QUw6ICfpmL/lsJTlt7TlsLzkuponLFxuXHRcdFx0RFo6ICfpmL/lsJTlj4rliKnkuponLFxuXHRcdFx0QVM6ICfnvo7lsZ7okKjmkankuponLFxuXHRcdFx0QUQ6ICflronpgZPlsJQnLFxuXHRcdFx0QU86ICflronlk6Xmi4knLFxuXHRcdFx0QUk6ICflronlnK3mi4knLFxuXHRcdFx0QVE6ICfljZfmnoHmtLInLFxuXHRcdFx0QUc6ICflronmj5Dnk5zlkozlt7TluIPovr4nLFxuXHRcdFx0QVI6ICfpmL/moLnlu7cnLFxuXHRcdFx0QU06ICfkuprnvo7lsLzkuponLFxuXHRcdFx0QVc6ICfpmL/psoHlt7QnLFxuXHRcdFx0QVU6ICfmvrPlpKfliKnkuponLFxuXHRcdFx0QVQ6ICflpaXlnLDliKknLFxuXHRcdFx0QVo6ICfpmL/loZ7mi5znloYnLFxuXHRcdFx0QlM6ICflt7Tlk4jpqawnLFxuXHRcdFx0Qkg6ICflt7TmnpcnLFxuXHRcdFx0QkQ6ICflrZ/liqDmi4nlm70nLFxuXHRcdFx0QkI6ICflt7Tlt7TlpJrmlq8nLFxuXHRcdFx0Qlk6ICfnmb3kv4TnvZfmlq8nLFxuXHRcdFx0QkU6ICfmr5TliKnml7YnLFxuXHRcdFx0Qlo6ICfkvK/liKnlhbknLFxuXHRcdFx0Qko6ICfotJ3lroEnLFxuXHRcdFx0Qk06ICfnmb7mhZXlpKcnLFxuXHRcdFx0QlQ6ICfkuI3kuLknLFxuXHRcdFx0Qk86ICfnjrvliKnnu7TkuponLFxuXHRcdFx0QlE6ICfojbflhbDliqDli5Lmr5TljLonLFxuXHRcdFx0QkE6ICfms6Lpu5EnLFxuXHRcdFx0Qlc6ICfljZrojKjnk6bnurMnLFxuXHRcdFx0QlY6ICfluIPpn6blspsnLFxuXHRcdFx0QlI6ICflt7Topb8nLFxuXHRcdFx0SU86ICfoi7HlsZ7ljbDluqbmtIvpooblnLAnLFxuXHRcdFx0Qk46ICfmsbbojrEnLFxuXHRcdFx0Qkc6ICfkv53liqDliKnkuponLFxuXHRcdFx0QkY6ICfluIPln7rnurPms5XntKInLFxuXHRcdFx0Qkk6ICfluIPpmobov6onLFxuXHRcdFx0Q1Y6ICfkvZvlvpfop5InLFxuXHRcdFx0S0g6ICfmn6zln5Tlr6gnLFxuXHRcdFx0Q006ICflloDpuqbpmoYnLFxuXHRcdFx0Q0E6ICfliqDmi7/lpKcnLFxuXHRcdFx0S1k6ICflvIDmm7znvqTlspsnLFxuXHRcdFx0Q0Y6ICfkuK3pnZ4nLFxuXHRcdFx0VEQ6ICfkuY3lvpcnLFxuXHRcdFx0Q0w6ICfmmbrliKknLFxuXHRcdFx0Q046ICfkuK3lm70nLFxuXHRcdFx0Q1g6ICflnKPor57lspsnLFxuXHRcdFx0Q0M6ICfnp5Hnp5Hmlq/vvIjln7rmnpfvvInnvqTlspsnLFxuXHRcdFx0Q086ICflk6XkvKbmr5TkuponLFxuXHRcdFx0S006ICfnp5HmkannvZcnLFxuXHRcdFx0Q0c6ICfliJrmnpzlhbHlkozlm70nLFxuXHRcdFx0Q0Q6ICfliJrmnpzmsJHkuLvlhbHlkozlm70nLFxuXHRcdFx0Q0s6ICflupPlhYvnvqTlspsnLFxuXHRcdFx0Q1I6ICflk6Xmlq/ovr7pu47liqAnLFxuXHRcdFx0Q0k6ICfosaHniZnmtbflsrgnLFxuXHRcdFx0SFI6ICflhYvnvZflnLDkuponLFxuXHRcdFx0Q1U6ICflj6Tlt7QnLFxuXHRcdFx0Q1c6ICflupPmi4nntKInLFxuXHRcdFx0Q1k6ICfloZ7mtabot6/mlq8nLFxuXHRcdFx0Q1o6ICfmjbflhYsnLFxuXHRcdFx0REs6ICfkuLnpuqYnLFxuXHRcdFx0REo6ICflkInluIPmj5AnLFxuXHRcdFx0RE06ICflpJrnsbPlsLzlhYsnLFxuXHRcdFx0RE86ICflpJrnsbPlsLzliqAnLFxuXHRcdFx0RUM6ICfljoTnk5zlpJrlsJQnLFxuXHRcdFx0RUc6ICfln4Plj4onLFxuXHRcdFx0U1Y6ICfokKjlsJTnk6blpJonLFxuXHRcdFx0R1E6ICfotaTpgZPlh6DlhoXkuponLFxuXHRcdFx0RVI6ICfljoTnq4vnibnph4zkuponLFxuXHRcdFx0RUU6ICfniLHmspnlsLzkuponLFxuXHRcdFx0U1o6ICfmlq/lqIHlo6vlhbAnLFxuXHRcdFx0RVQ6ICfln4PloZ7kv4Tmr5TkuponLFxuXHRcdFx0Rks6ICfnpo/lhYvlhbDnvqTlspsnLFxuXHRcdFx0Rk86ICfms5XnvZfnvqTlspsnLFxuXHRcdFx0Rko6ICfmlpDmtY4nLFxuXHRcdFx0Rkk6ICfoiqzlhbAnLFxuXHRcdFx0RlI6ICfms5Xlm70nLFxuXHRcdFx0R0Y6ICfms5XlsZ7lnK3kuprpgqMnLFxuXHRcdFx0UEY6ICfms5XlsZ7ms6LliKnlsLzopb/kuponLFxuXHRcdFx0VEY6ICfms5XlsZ7ljZfpg6jlkozljZfmnoHpooblnLAnLFxuXHRcdFx0R0E6ICfliqDok6wnLFxuXHRcdFx0R006ICflhojmr5TkuponLFxuXHRcdFx0R0U6ICfmoLzpsoHlkInkuponLFxuXHRcdFx0REU6ICflvrflm70nLFxuXHRcdFx0R0g6ICfliqDnurMnLFxuXHRcdFx0R0k6ICfnm7TluIPnvZfpmYAnLFxuXHRcdFx0R1I6ICfluIzohYonLFxuXHRcdFx0R0w6ICfmoLzpmbXlhbAnLFxuXHRcdFx0R0Q6ICfmoLzmnpfnurPovr4nLFxuXHRcdFx0R1A6ICfnk5zlvrfnvZfmma4nLFxuXHRcdFx0R1U6ICflhbPlspsnLFxuXHRcdFx0R1Q6ICfljbHlnLDpqazmi4knLFxuXHRcdFx0R0c6ICfmoLnopb8nLFxuXHRcdFx0R046ICflh6DlhoXkuponLFxuXHRcdFx0R1c6ICflh6DlhoXkuprmr5Tnu40nLFxuXHRcdFx0R1k6ICflnK3kuprpgqMnLFxuXHRcdFx0SFQ6ICfmtbflnLAnLFxuXHRcdFx0SE06ICfotavlvrflspvlkozpuqblhYvllJDnurPnvqTlspsnLFxuXHRcdFx0VkE6ICfmorXokoLlhognLFxuXHRcdFx0SE46ICfmtKrpg73mi4nmlq8nLFxuXHRcdFx0SEs6ICfkuK3lm73pppnmuK8nLFxuXHRcdFx0SFU6ICfljIjniZnliKknLFxuXHRcdFx0SVM6ICflhrDlspsnLFxuXHRcdFx0SU46ICfljbDluqYnLFxuXHRcdFx0SUQ6ICfljbDlsLwnLFxuXHRcdFx0SVI6ICfkvIrmnJcnLFxuXHRcdFx0SVE6ICfkvIrmi4nlhYsnLFxuXHRcdFx0SUU6ICfniLHlsJTlhbAnLFxuXHRcdFx0SU06ICfpqazmganlspsnLFxuXHRcdFx0SUw6ICfku6XoibLliJcnLFxuXHRcdFx0SVQ6ICfmhI/lpKfliKknLFxuXHRcdFx0Sk06ICfniZnkubDliqAnLFxuXHRcdFx0SlA6ICfml6XmnKwnLFxuXHRcdFx0SkU6ICfms73opb8nLFxuXHRcdFx0Sk86ICfnuqbml6YnLFxuXHRcdFx0S1o6ICflk4jokKjlhYvmlq/lnaYnLFxuXHRcdFx0S0U6ICfogq/lsLzkuponLFxuXHRcdFx0S0k6ICfln7rph4zlt7Tmlq8nLFxuXHRcdFx0S1A6ICfljJfpn6knLFxuXHRcdFx0S1I6ICfpn6nlm70nLFxuXHRcdFx0S1c6ICfnp5HlqIHnibknLFxuXHRcdFx0S0c6ICflkInlsJTlkInmlq/mlq/lnaYnLFxuXHRcdFx0TEE6ICfogIHmjJ0nLFxuXHRcdFx0TFY6ICfmi4nohLHnu7TkuponLFxuXHRcdFx0TEI6ICfpu47lt7Tlq6knLFxuXHRcdFx0TFM6ICfojrHntKLmiZgnLFxuXHRcdFx0TFI6ICfliKnmr5Tph4zkuponLFxuXHRcdFx0TFk6ICfliKnmr5TkuponLFxuXHRcdFx0TEk6ICfliJfmlK/mlablo6vnmbsnLFxuXHRcdFx0TFQ6ICfnq4vpmbblrpsnLFxuXHRcdFx0TFU6ICfljaLmo67loKEnLFxuXHRcdFx0TU86ICfkuK3lm73mvrPpl6gnLFxuXHRcdFx0TUc6ICfpqazovr7liqDmlq/liqAnLFxuXHRcdFx0TVc6ICfpqazmi4nnu7QnLFxuXHRcdFx0TVk6ICfpqazmnaXopb/kuponLFxuXHRcdFx0TVY6ICfpqazlsJTku6PlpKsnLFxuXHRcdFx0TUw6ICfpqazph4wnLFxuXHRcdFx0TVQ6ICfpqazogLPku5YnLFxuXHRcdFx0TUg6ICfpqaznu43lsJTnvqTlspsnLFxuXHRcdFx0TVE6ICfpqazmj5DlsLzlhYsnLFxuXHRcdFx0TVI6ICfmr5vph4zloZTlsLzkuponLFxuXHRcdFx0TVU6ICfmr5vph4zmsYLmlq8nLFxuXHRcdFx0WVQ6ICfpqaznuqbnibknLFxuXHRcdFx0TVg6ICfloqjopb/lk6UnLFxuXHRcdFx0Rk06ICflr4blhYvnvZflsLzopb/kuprogZTpgqYnLFxuXHRcdFx0TUQ6ICfmkanlsJTlpJrnk6YnLFxuXHRcdFx0TUM6ICfmkannurPlk6UnLFxuXHRcdFx0TU46ICfokpnlj6QnLFxuXHRcdFx0TUU6ICfpu5HlsbEnLFxuXHRcdFx0TVM6ICfokpnnibnloZ7mi4nnibknLFxuXHRcdFx0TUE6ICfmkanmtJvlk6UnLFxuXHRcdFx0TVo6ICfojqvmoZHmr5TlhYsnLFxuXHRcdFx0TU06ICfnvIXnlLgnLFxuXHRcdFx0TkE6ICfpgqPnsbPmr5TkuponLFxuXHRcdFx0TlI6ICfnkZnpsoEnLFxuXHRcdFx0TlA6ICflsLzms4rlsJQnLFxuXHRcdFx0Tkw6ICfojbflhbAnLFxuXHRcdFx0TkM6ICfmlrDlloDph4zlpJrlsLzkuponLFxuXHRcdFx0Tlo6ICfmlrDopb/lhbAnLFxuXHRcdFx0Tkk6ICflsLzliqDmi4nnk5wnLFxuXHRcdFx0TkU6ICflsLzml6XlsJQnLFxuXHRcdFx0Tkc6ICflsLzml6XliKnkuponLFxuXHRcdFx0TlU6ICfnur3ln4MnLFxuXHRcdFx0TkY6ICfor7rnpo/lhYvlspsnLFxuXHRcdFx0TUs6ICfljJfpqazlhbbpob8nLFxuXHRcdFx0TVA6ICfljJfpqazph4zkuprnurPnvqTlspsnLFxuXHRcdFx0Tk86ICfmjKrlqIEnLFxuXHRcdFx0T006ICfpmL/mm7wnLFxuXHRcdFx0UEs6ICflt7Tln7rmlq/lnaYnLFxuXHRcdFx0UFc6ICfluJXlirMnLFxuXHRcdFx0UFM6ICflt7Tli5Lmlq/lnaYnLFxuXHRcdFx0UEE6ICflt7Tmi7/pqawnLFxuXHRcdFx0UEc6ICflt7TluIPkuprmlrDlh6DlhoXkuponLFxuXHRcdFx0UFk6ICflt7Tmi4nlnK0nLFxuXHRcdFx0UEU6ICfnp5jpsoEnLFxuXHRcdFx0UEg6ICfoj7Llvovlrr4nLFxuXHRcdFx0UE46ICfnmq7nibnlh6/mgannvqTlspsnLFxuXHRcdFx0UEw6ICfms6LlhbAnLFxuXHRcdFx0UFQ6ICfokaHokITniZknLFxuXHRcdFx0UFI6ICfms6LlpJrpu47lkIQnLFxuXHRcdFx0UUE6ICfljaHloZTlsJQnLFxuXHRcdFx0UkU6ICfnlZnlsLzmsaonLFxuXHRcdFx0Uk86ICfnvZfpqazlsLzkuponLFxuXHRcdFx0UlU6ICfkv4TnvZfmlq8nLFxuXHRcdFx0Ulc6ICfljaLml7rovr4nLFxuXHRcdFx0Qkw6ICflnKPlt7Tms7Dli5LnsbMnLFxuXHRcdFx0U0g6ICflnKPotavli5Lmi7/jgIHpmL/mo67mnb7lkoznibnph4zmlq/lnaYt6L6+5bqT5bC85LqaJyxcblx0XHRcdEtOOiAn5Zyj5Z+66Iyo5ZKM5bC857u05pavJyxcblx0XHRcdExDOiAn5Zyj5Y2i6KW/5LqaJyxcblx0XHRcdE1GOiAn5rOV5bGe5Zyj6ams5LiBJyxcblx0XHRcdFBNOiAn5Zyj55qu5Z+D5bCU5ZKM5a+G5YWL6ZqGJyxcblx0XHRcdFZDOiAn5Zyj5paH5qOu54m55ZKM5qC85p6X57qz5LiB5pavJyxcblx0XHRcdFdTOiAn6JCo5pGp5LqaJyxcblx0XHRcdFNNOiAn5Zyj6ams5Yqb6K+6Jyxcblx0XHRcdFNUOiAn5Zyj5aSa576O5ZKM5pmu5p6X6KW/5q+UJyxcblx0XHRcdFNBOiAn5rKZ54m56Zi/5ouJ5LyvJyxcblx0XHRcdFNOOiAn5aGe5YaF5Yqg5bCUJyxcblx0XHRcdFJTOiAn5aGe5bCU57u05LqaJyxcblx0XHRcdFNDOiAn5aGe6IiM5bCUJyxcblx0XHRcdFNMOiAn5aGe5ouJ5Yip5piCJyxcblx0XHRcdFNHOiAn5paw5Yqg5Z2hJyxcblx0XHRcdFNYOiAn6I235bGe5Zyj6ams5LiBJyxcblx0XHRcdFNLOiAn5pav5rSb5LyQ5YWLJyxcblx0XHRcdFNJOiAn5pav5rSb5paH5bC85LqaJyxcblx0XHRcdFNCOiAn5omA572X6Zeo576k5bKbJyxcblx0XHRcdFNPOiAn57Si6ams6YeMJyxcblx0XHRcdFpBOiAn5Y2X6Z2eJyxcblx0XHRcdEdTOiAn5Y2X5LmU5rK75Lqa5ZKM5Y2X5qGR5aiB5aWH576k5bKbJyxcblx0XHRcdFNTOiAn5Y2X6IuP5Li5Jyxcblx0XHRcdEVTOiAn6KW/54+t54mZJyxcblx0XHRcdExLOiAn5pav6YeM5YWw5Y2hJyxcblx0XHRcdFNEOiAn6IuP5Li5Jyxcblx0XHRcdFNSOiAn6IuP6YeM5Y2XJyxcblx0XHRcdFNKOiAn5pav55Om5bCU5be05ZKM5oms6ams5bu2Jyxcblx0XHRcdFNFOiAn55Ge5YW4Jyxcblx0XHRcdENIOiAn55Ge5aOrJyxcblx0XHRcdFNZOiAn5Y+Z5Yip5LqaJyxcblx0XHRcdFRXOiAn5Lit5Zu95Y+w5rm+Jyxcblx0XHRcdFRKOiAn5aGU5ZCJ5YWL5pav5Z2mJyxcblx0XHRcdFRaOiAn5Z2m5qGR5bC85LqaJyxcblx0XHRcdFRIOiAn5rOw5Zu9Jyxcblx0XHRcdFRMOiAn5Lic5bid5rG2Jyxcblx0XHRcdFRHOiAn5aSa5ZOlJyxcblx0XHRcdFRLOiAn5omY5YWL5YqzJyxcblx0XHRcdFRPOiAn5rGk5YqgJyxcblx0XHRcdFRUOiAn54m556uL5bC86L6+5ZKM5aSa5be05ZOlJyxcblx0XHRcdFROOiAn56qB5bC85pavJyxcblx0XHRcdFRSOiAn5Zyf6ICz5YW2Jyxcblx0XHRcdFRNOiAn5Zyf5bqT5pu85pav5Z2mJyxcblx0XHRcdFRDOiAn54m55YWL5pav5ZKM5Yev56eR5pav576k5bKbJyxcblx0XHRcdFRWOiAn5Zu+55Om5Y2iJyxcblx0XHRcdFVHOiAn5LmM5bmy6L6+Jyxcblx0XHRcdFVBOiAn5LmM5YWL5YWwJyxcblx0XHRcdEFFOiAn6Zi/6IGU6YWLJyxcblx0XHRcdEdCOiAn6Iux5Zu9Jyxcblx0XHRcdFVTOiAn576O5Zu9Jyxcblx0XHRcdFVNOiAn576O5Zu95pys5Zyf5aSW5bCP5bKb5bG/Jyxcblx0XHRcdFVZOiAn5LmM5ouJ5ZytJyxcblx0XHRcdFVaOiAn5LmM5YW55Yir5YWL5pav5Z2mJyxcblx0XHRcdFZVOiAn55Om5Yqq6Zi/5Zu+Jyxcblx0XHRcdFZFOiAn5aeU5YaF55Ge5ouJJyxcblx0XHRcdFZOOiAn6LaK5Y2XJyxcblx0XHRcdFZHOiAn6Iux5bGe57u05bCU5Lqs576k5bKbJyxcblx0XHRcdFZJOiAn576O5bGe57u05bCU5Lqs576k5bKbJyxcblx0XHRcdFdGOiAn55Om5Yip5pav5ZKM5a+M5Zu+57qzJyxcblx0XHRcdEVIOiAn6KW/5pKS5ZOI5ouJJyxcblx0XHRcdFlFOiAn5Lmf6ZeoJyxcblx0XHRcdFpNOiAn6LWe5q+U5LqaJyxcblx0XHRcdFpXOiAn5rSl5be05biD6Z+mJyxcblx0XHR9O1xuXHR9XG5cblx0cmV0dXJuIHtcblx0XHRBRjogJ+mYv+WvjOaxlycsXG5cdFx0QVg6ICflpaXlhbAnLFxuXHRcdEFMOiAn6Zi/5bCU5be05bC85LqaJyxcblx0XHREWjogJ+mYv+WwlOWPiuWIqeS6micsXG5cdFx0QVM6ICfnvo7lsZ7okKjmkankuponLFxuXHRcdEFEOiAn5a6J6YGT5bCUJyxcblx0XHRBTzogJ+WuieWTpeaLiScsXG5cdFx0QUk6ICflronlnK3mi4knLFxuXHRcdEFROiAn5Y2X5p6B5rSyJyxcblx0XHRBRzogJ+WuieaPkOeTnOWSjOW3tOW4g+i+vicsXG5cdFx0QVI6ICfpmL/moLnlu7cnLFxuXHRcdEFNOiAn5Lqa576O5bC85LqaJyxcblx0XHRBVzogJ+mYv+mygeW3tCcsXG5cdFx0QVU6ICfmvrPlpKfliKnkuponLFxuXHRcdEFUOiAn5aWl5Zyw5YipJyxcblx0XHRBWjogJ+mYv+WhnuaLnOeWhicsXG5cdFx0QlM6ICflt7Tlk4jpqawnLFxuXHRcdEJIOiAn5be05p6XJyxcblx0XHRCRDogJ+Wtn+WKoOaLieWbvScsXG5cdFx0QkI6ICflt7Tlt7TlpJrmlq8nLFxuXHRcdEJZOiAn55m95L+E572X5pavJyxcblx0XHRCRTogJ+avlOWIqeaXticsXG5cdFx0Qlo6ICfkvK/liKnlhbknLFxuXHRcdEJKOiAn6LSd5a6BJyxcblx0XHRCTTogJ+eZvuaFleWkpycsXG5cdFx0QlQ6ICfkuI3kuLknLFxuXHRcdEJPOiAn54675Yip57u05LqaJyxcblx0XHRCUTogJ+iNt+WFsOWKoOWLkuavlOWMuicsXG5cdFx0QkE6ICfms6Lpu5EnLFxuXHRcdEJXOiAn5Y2a6Iyo55Om57qzJyxcblx0XHRCVjogJ+W4g+mfpuWymycsXG5cdFx0QlI6ICflt7Topb8nLFxuXHRcdElPOiAn6Iux5bGe5Y2w5bqm5rSL6aKG5ZywJyxcblx0XHRCTjogJ+aWh+iOsScsXG5cdFx0Qkc6ICfkv53liqDliKnkuponLFxuXHRcdEJGOiAn5biD5Z+657qz5rOV57SiJyxcblx0XHRCSTogJ+W4g+mahui/qicsXG5cdFx0Q1Y6ICfkvZvlvpfop5InLFxuXHRcdEtIOiAn5p+s5Z+U5a+oJyxcblx0XHRDTTogJ+WWgOm6pumahicsXG5cdFx0Q0E6ICfliqDmi7/lpKcnLFxuXHRcdEtZOiAn5byA5pu8576k5bKbJyxcblx0XHRDRjogJ+S4remdnicsXG5cdFx0VEQ6ICfkuY3lvpcnLFxuXHRcdENMOiAn5pm65YipJyxcblx0XHRDTjogJ+S4reWbvScsXG5cdFx0Q1g6ICflnKPor57lspsnLFxuXHRcdENDOiAn56eR56eR5pav77yI5Z+65p6X77yJ576k5bKbJyxcblx0XHRDTzogJ+WTpeS8puavlOS6micsXG5cdFx0S006ICfnp5HmkannvZcnLFxuXHRcdENHOiAn5Yia5p6c5YWx5ZKM5Zu9Jyxcblx0XHRDRDogJ+WImuaenOawkeS4u+WFseWSjOWbvScsXG5cdFx0Q0s6ICflupPlhYvnvqTlspsnLFxuXHRcdENSOiAn5ZOl5pav6L6+6buO5YqgJyxcblx0XHRDSTogJ+enkeeJuei/queTpicsXG5cdFx0SFI6ICflhYvnvZflnLDkuponLFxuXHRcdENVOiAn5Y+k5be0Jyxcblx0XHRDVzogJ+W6k+aLiee0oicsXG5cdFx0Q1k6ICfloZ7mtabot6/mlq8nLFxuXHRcdENaOiAn5o235YWLJyxcblx0XHRESzogJ+S4uem6picsXG5cdFx0REo6ICflkInluIPmj5AnLFxuXHRcdERNOiAn5aSa57Gz5bC85YWLJyxcblx0XHRETzogJ+Wkmuexs+WwvOWKoCcsXG5cdFx0RUM6ICfljoTnk5zlpJrlsJQnLFxuXHRcdEVHOiAn5Z+D5Y+KJyxcblx0XHRTVjogJ+iQqOWwlOeTpuWkmicsXG5cdFx0R1E6ICfotaTpgZPlh6DlhoXkuponLFxuXHRcdEVSOiAn5Y6E56uL54m56YeM5LqaJyxcblx0XHRFRTogJ+eIseaymeWwvOS6micsXG5cdFx0U1o6ICfmlq/lqIHlo6vlhbAnLFxuXHRcdEVUOiAn5Z+D5aGe5L+E5q+U5LqaJyxcblx0XHRGSzogJ+emj+WFi+WFsOe+pOWymycsXG5cdFx0Rk86ICfms5XnvZfnvqTlspsnLFxuXHRcdEZKOiAn5paQ5rWOJyxcblx0XHRGSTogJ+iKrOWFsCcsXG5cdFx0RlI6ICfms5Xlm70nLFxuXHRcdEdGOiAn5rOV5bGe5Zyt5Lqa6YKjJyxcblx0XHRQRjogJ+azleWxnuazouWIqeWwvOilv+S6micsXG5cdFx0VEY6ICfms5XlsZ7ljZfpg6jlkozljZfmnoHpooblnLAnLFxuXHRcdEdBOiAn5Yqg6JOsJyxcblx0XHRHTTogJ+WGiOavlOS6micsXG5cdFx0R0U6ICfmoLzpsoHlkInkuponLFxuXHRcdERFOiAn5b635Zu9Jyxcblx0XHRHSDogJ+WKoOe6sycsXG5cdFx0R0k6ICfnm7TluIPnvZfpmYAnLFxuXHRcdEdSOiAn5biM6IWKJyxcblx0XHRHTDogJ+agvOmZteWFsCcsXG5cdFx0R0Q6ICfmoLzmnpfnurPovr4nLFxuXHRcdEdQOiAn55Oc5b63572X5pmuJyxcblx0XHRHVTogJ+WFs+WymycsXG5cdFx0R1Q6ICfljbHlnLDpqazmi4knLFxuXHRcdEdHOiAn5qC56KW/Jyxcblx0XHRHTjogJ+WHoOWGheS6micsXG5cdFx0R1c6ICflh6DlhoXkuprmr5Tnu40nLFxuXHRcdEdZOiAn5Zyt5Lqa6YKjJyxcblx0XHRIVDogJ+a1t+WcsCcsXG5cdFx0SE06ICfotavlvrflspvlkozpuqblhYvllJDnurPnvqTlspsnLFxuXHRcdFZBOiAn5qK16JKC5YaIJyxcblx0XHRITjogJ+a0qumDveaLieaWrycsXG5cdFx0SEs6ICfkuK3lm73pppnmuK8nLFxuXHRcdEhVOiAn5YyI54mZ5YipJyxcblx0XHRJUzogJ+WGsOWymycsXG5cdFx0SU46ICfljbDluqYnLFxuXHRcdElEOiAn5Y2w5bC8Jyxcblx0XHRJUjogJ+S8iuaclycsXG5cdFx0SVE6ICfkvIrmi4nlhYsnLFxuXHRcdElFOiAn54ix5bCU5YWwJyxcblx0XHRJTTogJ+mprOaBqeWymycsXG5cdFx0SUw6ICfku6XoibLliJcnLFxuXHRcdElUOiAn5oSP5aSn5YipJyxcblx0XHRKTTogJ+eJmeS5sOWKoCcsXG5cdFx0SlA6ICfml6XmnKwnLFxuXHRcdEpFOiAn5rO96KW/Jyxcblx0XHRKTzogJ+e6puaXpicsXG5cdFx0S1o6ICflk4jokKjlhYvmlq/lnaYnLFxuXHRcdEtFOiAn6IKv5bC85LqaJyxcblx0XHRLSTogJ+WfuumHjOW3tOaWrycsXG5cdFx0S1A6ICfmnJ3pspwnLFxuXHRcdEtSOiAn6Z+p5Zu9Jyxcblx0XHRLVzogJ+enkeWogeeJuScsXG5cdFx0S0c6ICflkInlsJTlkInmlq/mlq/lnaYnLFxuXHRcdExBOiAn6ICB5oydJyxcblx0XHRMVjogJ+aLieiEsee7tOS6micsXG5cdFx0TEI6ICfpu47lt7Tlq6knLFxuXHRcdExTOiAn6I6x57Si5omYJyxcblx0XHRMUjogJ+WIqeavlOmHjOS6micsXG5cdFx0TFk6ICfliKnmr5TkuponLFxuXHRcdExJOiAn5YiX5pSv5pWm5aOr55m7Jyxcblx0XHRMVDogJ+eri+mZtuWumycsXG5cdFx0TFU6ICfljaLmo67loKEnLFxuXHRcdE1POiAn5Lit5Zu95r6z6ZeoJyxcblx0XHRNRzogJ+mprOi+vuWKoOaWr+WKoCcsXG5cdFx0TVc6ICfpqazmi4nnu7QnLFxuXHRcdE1ZOiAn6ams5p2l6KW/5LqaJyxcblx0XHRNVjogJ+mprOWwlOS7o+WkqycsXG5cdFx0TUw6ICfpqazph4wnLFxuXHRcdE1UOiAn6ams6ICz5LuWJyxcblx0XHRNSDogJ+mprOe7jeWwlOe+pOWymycsXG5cdFx0TVE6ICfpqazmj5DlsLzlhYsnLFxuXHRcdE1SOiAn5q+b6YeM5aGU5bC85LqaJyxcblx0XHRNVTogJ+avm+mHjOaxguaWrycsXG5cdFx0WVQ6ICfpqaznuqbnibknLFxuXHRcdE1YOiAn5aKo6KW/5ZOlJyxcblx0XHRGTTogJ+WvhuWFi+e9l+WwvOilv+S6muiBlOmCpicsXG5cdFx0TUQ6ICfmkanlsJTlpJrnk6YnLFxuXHRcdE1DOiAn5pGp57qz5ZOlJyxcblx0XHRNTjogJ+iSmeWPpCcsXG5cdFx0TUU6ICfpu5HlsbEnLFxuXHRcdE1TOiAn6JKZ54m55aGe5ouJ54m5Jyxcblx0XHRNQTogJ+aRqea0m+WTpScsXG5cdFx0TVo6ICfojqvmoZHmr5TlhYsnLFxuXHRcdE1NOiAn57yF55S4Jyxcblx0XHROQTogJ+e6s+exs+avlOS6micsXG5cdFx0TlI6ICfnkZnpsoEnLFxuXHRcdE5QOiAn5bC85rOK5bCUJyxcblx0XHROTDogJ+iNt+WFsCcsXG5cdFx0TkM6ICfmlrDlloDph4zlpJrlsLzkuponLFxuXHRcdE5aOiAn5paw6KW/5YWwJyxcblx0XHROSTogJ+WwvOWKoOaLieeTnCcsXG5cdFx0TkU6ICflsLzml6XlsJQnLFxuXHRcdE5HOiAn5bC85pel5Yip5LqaJyxcblx0XHROVTogJ+e6veWfgycsXG5cdFx0TkY6ICfor7rnpo/lhYvlspsnLFxuXHRcdE1LOiAn5YyX6ams5YW26aG/Jyxcblx0XHRNUDogJ+WMl+mprOmHjOS6mue6s+e+pOWymycsXG5cdFx0Tk86ICfmjKrlqIEnLFxuXHRcdE9NOiAn6Zi/5pu8Jyxcblx0XHRQSzogJ+W3tOWfuuaWr+WdpicsXG5cdFx0UFc6ICfluJXlirMnLFxuXHRcdFBTOiAn5be05YuS5pav5Z2mJyxcblx0XHRQQTogJ+W3tOaLv+mprCcsXG5cdFx0UEc6ICflt7TluIPkuprmlrDlh6DlhoXkuponLFxuXHRcdFBZOiAn5be05ouJ5ZytJyxcblx0XHRQRTogJ+enmOmygScsXG5cdFx0UEg6ICfoj7Llvovlrr4nLFxuXHRcdFBOOiAn55qu54m55Yev5oGp576k5bKbJyxcblx0XHRQTDogJ+azouWFsCcsXG5cdFx0UFQ6ICfokaHokITniZknLFxuXHRcdFBSOiAn5rOi5aSa6buO5ZCEJyxcblx0XHRRQTogJ+WNoeWhlOWwlCcsXG5cdFx0UkU6ICfnlZnlsLzmsaonLFxuXHRcdFJPOiAn572X6ams5bC85LqaJyxcblx0XHRSVTogJ+S/hOe9l+aWrycsXG5cdFx0Ulc6ICfljaLml7rovr4nLFxuXHRcdEJMOiAn5Zyj5be05rOw5YuS57GzJyxcblx0XHRTSDogJ+Wco+i1q+WLkuaLv+OAgemYv+ajruadvuWSjOeJuemHjOaWr+Wdpi3ovr7lupPlsLzkuponLFxuXHRcdEtOOiAn5Zyj5Z+66Iyo5ZKM5bC857u05pavJyxcblx0XHRMQzogJ+Wco+WNouilv+S6micsXG5cdFx0TUY6ICfms5XlsZ7lnKPpqazkuIEnLFxuXHRcdFBNOiAn5Zyj55qu5Z+D5bCU5ZKM5a+G5YWL6ZqGJyxcblx0XHRWQzogJ+Wco+aWh+ajrueJueWSjOagvOael+e6s+S4geaWrycsXG5cdFx0V1M6ICfokKjmkankuponLFxuXHRcdFNNOiAn5Zyj6ams5Yqb6K+6Jyxcblx0XHRTVDogJ+Wco+Wkmue+juWSjOaZruael+ilv+avlCcsXG5cdFx0U0E6ICfmspnnibnpmL/mi4nkvK8nLFxuXHRcdFNOOiAn5aGe5YaF5Yqg5bCUJyxcblx0XHRSUzogJ+WhnuWwlOe7tOS6micsXG5cdFx0U0M6ICfloZ7oiIzlsJQnLFxuXHRcdFNMOiAn5aGe5ouJ5Yip5piCJyxcblx0XHRTRzogJ+aWsOWKoOWdoScsXG5cdFx0U1g6ICfojbflsZ7lnKPpqazkuIEnLFxuXHRcdFNLOiAn5pav5rSb5LyQ5YWLJyxcblx0XHRTSTogJ+aWr+a0m+aWh+WwvOS6micsXG5cdFx0U0I6ICfmiYDnvZfpl6jnvqTlspsnLFxuXHRcdFNPOiAn57Si6ams6YeMJyxcblx0XHRaQTogJ+WNl+mdnicsXG5cdFx0R1M6ICfljZfkuZTmsrvkuprlkozljZfmoZHlqIHlpYfnvqTlspsnLFxuXHRcdFNTOiAn5Y2X6IuP5Li5Jyxcblx0XHRFUzogJ+ilv+ePreeJmScsXG5cdFx0TEs6ICfmlq/ph4zlhbDljaEnLFxuXHRcdFNEOiAn6IuP5Li5Jyxcblx0XHRTUjogJ+iLj+mHjOWNlycsXG5cdFx0U0o6ICfmlq/nk6blsJTlt7Tlkozmiazpqazlu7YnLFxuXHRcdFNFOiAn55Ge5YW4Jyxcblx0XHRDSDogJ+eRnuWjqycsXG5cdFx0U1k6ICflj5nliKnkuponLFxuXHRcdFRXOiAn5Lit5Zu96Ie65rm+Jyxcblx0XHRUSjogJ+WhlOWQieWFi+aWr+WdpicsXG5cdFx0VFo6ICflnabmoZHlsLzkuponLFxuXHRcdFRIOiAn5rOw5Zu9Jyxcblx0XHRUTDogJ+S4nOW4neaxticsXG5cdFx0VEc6ICflpJrlk6UnLFxuXHRcdFRLOiAn5omY5YWL5YqzJyxcblx0XHRUTzogJ+axpOWKoCcsXG5cdFx0VFQ6ICfnibnnq4vlsLzovr7lkozlpJrlt7Tlk6UnLFxuXHRcdFROOiAn56qB5bC85pavJyxcblx0XHRUUjogJ+Wcn+iAs+WFticsXG5cdFx0VE06ICflnJ/lupPmm7zmlq/lnaYnLFxuXHRcdFRDOiAn54m55YWL5pav5ZKM5Yev56eR5pav576k5bKbJyxcblx0XHRUVjogJ+WbvueTpuWNoicsXG5cdFx0VUc6ICfkuYzlubLovr4nLFxuXHRcdFVBOiAn5LmM5YWL5YWwJyxcblx0XHRBRTogJ+mYv+iBlOmFiycsXG5cdFx0R0I6ICfoi7Hlm70nLFxuXHRcdFVTOiAn576O5Zu9Jyxcblx0XHRVTTogJ+e+juWbveacrOWcn+WkluWwj+Wym+WxvycsXG5cdFx0VVk6ICfkuYzmi4nlnK0nLFxuXHRcdFVaOiAn5LmM5YW55Yir5YWL5pav5Z2mJyxcblx0XHRWVTogJ+eTpuWKqumYv+WbvicsXG5cdFx0VkU6ICflp5TlhoXnkZ7mi4knLFxuXHRcdFZOOiAn6LaK5Y2XJyxcblx0XHRWRzogJ+iLseWxnue7tOWwlOS6rOe+pOWymycsXG5cdFx0Vkk6ICfnvo7lsZ7nu7TlsJTkuqznvqTlspsnLFxuXHRcdFdGOiAn55Om5Yip5pav5ZKM5a+M5Zu+57qzJyxcblx0XHRFSDogJ+ilv+aSkuWTiOaLiScsXG5cdFx0WUU6ICfkuZ/pl6gnLFxuXHRcdFpNOiAn6LWe5q+U5LqaJyxcblx0XHRaVzogJ+a0peW3tOW4g+mfpicsXG5cdH07XG59O1xuXG5jb25zdCBnZXRSZWdpb25OYW1lTGlzdCA9ICgpID0+IHtcblx0Y29uc3Qge3dnVXNlckxhbmd1YWdlfSA9IG13LmNvbmZpZy5nZXQoKTtcblxuXHRpZiAoWyd6aC1oYW50JywgJ3poLWhrJywgJ3poLW1vJywgJ3poLXR3J10uaW5jbHVkZXMod2dVc2VyTGFuZ3VhZ2UpKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdEFIOiAn5a6J5b69Jyxcblx0XHRcdEJKOiAn5YyX5LqsJyxcblx0XHRcdENROiAn6YeN5oW2Jyxcblx0XHRcdEZKOiAn56aP5bu6Jyxcblx0XHRcdEdEOiAn5buj5p2xJyxcblx0XHRcdEdTOiAn55SY6IKFJyxcblx0XHRcdEdYOiAn5buj6KW/Jyxcblx0XHRcdEdaOiAn6LK05beeJyxcblx0XHRcdEhBOiAn5rKz5Y2XJyxcblx0XHRcdEhCOiAn5rmW5YyXJyxcblx0XHRcdEhFOiAn5rKz5YyXJyxcblx0XHRcdEhJOiAn5rW35Y2XJyxcblx0XHRcdEhMOiAn6buR6b6N5rGfJyxcblx0XHRcdEhOOiAn5rmW5Y2XJyxcblx0XHRcdEpMOiAn5ZCJ5p6XJyxcblx0XHRcdEpTOiAn5rGf6JiHJyxcblx0XHRcdEpYOiAn5rGf6KW/Jyxcblx0XHRcdExOOiAn6YG85a+nJyxcblx0XHRcdE5NOiAn5YWn6JKZ5Y+kJyxcblx0XHRcdE5YOiAn5a+n5aSPJyxcblx0XHRcdFFIOiAn6Z2S5rW3Jyxcblx0XHRcdFNDOiAn5Zub5bedJyxcblx0XHRcdFNEOiAn5bGx5p2xJyxcblx0XHRcdFNIOiAn5LiK5rW3Jyxcblx0XHRcdFNOOiAn6Zmd6KW/Jyxcblx0XHRcdFNYOiAn5bGx6KW/Jyxcblx0XHRcdFRKOiAn5aSp5rSlJyxcblx0XHRcdFhKOiAn5paw55aGJyxcblx0XHRcdFhaOiAn6KW/6JePJyxcblx0XHRcdFlOOiAn6Zuy5Y2XJyxcblx0XHRcdFpKOiAn5rWZ5rGfJyxcblx0XHR9O1xuXHR9XG5cblx0cmV0dXJuIHtcblx0XHRBSDogJ+WuieW+vScsXG5cdFx0Qko6ICfljJfkuqwnLFxuXHRcdENROiAn6YeN5bqGJyxcblx0XHRGSjogJ+emj+W7uicsXG5cdFx0R0Q6ICflub/kuJwnLFxuXHRcdEdTOiAn55SY6IKDJyxcblx0XHRHWDogJ+W5v+ilvycsXG5cdFx0R1o6ICfotLXlt54nLFxuXHRcdEhBOiAn5rKz5Y2XJyxcblx0XHRIQjogJ+a5luWMlycsXG5cdFx0SEU6ICfmsrPljJcnLFxuXHRcdEhJOiAn5rW35Y2XJyxcblx0XHRITDogJ+m7kem+meaxnycsXG5cdFx0SE46ICfmuZbljZcnLFxuXHRcdEpMOiAn5ZCJ5p6XJyxcblx0XHRKUzogJ+axn+iLjycsXG5cdFx0Slg6ICfmsZ/opb8nLFxuXHRcdExOOiAn6L695a6BJyxcblx0XHROTTogJ+WGheiSmeWPpCcsXG5cdFx0Tlg6ICflroHlpI8nLFxuXHRcdFFIOiAn6Z2S5rW3Jyxcblx0XHRTQzogJ+Wbm+W3nScsXG5cdFx0U0Q6ICflsbHkuJwnLFxuXHRcdFNIOiAn5LiK5rW3Jyxcblx0XHRTTjogJ+mZleilvycsXG5cdFx0U1g6ICflsbHopb8nLFxuXHRcdFRKOiAn5aSp5rSlJyxcblx0XHRYSjogJ+aWsOeWhicsXG5cdFx0WFo6ICfopb/ol48nLFxuXHRcdFlOOiAn5LqR5Y2XJyxcblx0XHRaSjogJ+a1meaxnycsXG5cdH07XG59O1xuXG5leHBvcnQge2dldENvdW50cnlPckFyZWFOYW1lTGlzdCwgZ2V0UmVnaW9uTmFtZUxpc3R9O1xuIiwgImltcG9ydCB7Z2V0Q291bnRyeU9yQXJlYU5hbWVMaXN0LCBnZXRSZWdpb25OYW1lTGlzdH0gZnJvbSAnLi9uYW1lJztcblxudHlwZSBDb3VudHJ5T3JBcmVhTmFtZUxpc3QgPSBSZXR1cm5UeXBlPHR5cGVvZiBnZXRDb3VudHJ5T3JBcmVhTmFtZUxpc3Q+O1xudHlwZSBSZWdpb25OYW1lTGlzdCA9IFJldHVyblR5cGU8dHlwZW9mIGdldFJlZ2lvbk5hbWVMaXN0PjtcblxuY29uc3QgY291bnRyeU9yQXJlYUxpc3Q6IENvdW50cnlPckFyZWFOYW1lTGlzdCA9IGdldENvdW50cnlPckFyZWFOYW1lTGlzdCgpO1xuY29uc3QgcmVnaW9uTGlzdDogUmVnaW9uTmFtZUxpc3QgPSBnZXRSZWdpb25OYW1lTGlzdCgpO1xuXG5jb25zdCBnZXRDb3VudHJ5T3JBcmVhTmFtZSA9IDxUIGV4dGVuZHMga2V5b2YgQ291bnRyeU9yQXJlYU5hbWVMaXN0PihrZXk6IFQpOiBDb3VudHJ5T3JBcmVhTmFtZUxpc3RbVF0gfCB1bmRlZmluZWQgPT4ge1xuXHRyZXR1cm4gY291bnRyeU9yQXJlYUxpc3Rba2V5XTtcbn07XG5cbmNvbnN0IGdldFJlZ2lvbk5hbWUgPSA8VCBleHRlbmRzIGtleW9mIFJlZ2lvbk5hbWVMaXN0PihrZXk6IFQpOiBSZWdpb25OYW1lTGlzdFtUXSB8IHVuZGVmaW5lZCA9PiB7XG5cdHJldHVybiByZWdpb25MaXN0W2tleV07XG59O1xuXG5leHBvcnQge3R5cGUgQ291bnRyeU9yQXJlYU5hbWVMaXN0LCB0eXBlIFJlZ2lvbk5hbWVMaXN0LCBnZXRDb3VudHJ5T3JBcmVhTmFtZSwgZ2V0UmVnaW9uTmFtZX07XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtpbml0TXdBcGl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmNvbnN0IGFwaTogbXcuQXBpID0gaW5pdE13QXBpKGBHZW9Mb2NhdGlvblJlYWRlci8ke09QVElPTlMudmVyc2lvbn1gKTtcblxuZXhwb3J0IHthcGl9O1xuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7dHlwZSBDb3VudHJ5T3JBcmVhTmFtZUxpc3QsIHR5cGUgUmVnaW9uTmFtZUxpc3QsIGdldENvdW50cnlPckFyZWFOYW1lLCBnZXRSZWdpb25OYW1lfSBmcm9tICcuL2dldE5hbWUnO1xuaW1wb3J0IHR5cGUge1N0b3JlR2VvSW5mb30gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHthcGl9IGZyb20gJy4uL2FwaSc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4uL2kxOG4nO1xuXG5jb25zdCBnZXRMb2NhdGlvbiA9IGFzeW5jICh3Z1JlbGV2YW50VXNlck5hbWU6IHN0cmluZykgPT4ge1xuXHRjb25zdCBzdG9yZVBhZ2VUaXRsZTogc3RyaW5nID0gYFVzZXI6JHt3Z1JlbGV2YW50VXNlck5hbWV9L0dlb0lQLmpzb25gO1xuXG5cdGxldCBjb3VudHJ5T3JBcmVhTmFtZTogc3RyaW5nID0gZ2V0TWVzc2FnZSgnVW5rbm93bicpO1xuXHRsZXQgcmVnaW9uTmFtZTogc3RyaW5nID0gJyc7XG5cblx0aWYgKG13LnN0b3JhZ2UuZ2V0T2JqZWN0KE9QVElPTlMuc3RvcmFnZUtleSArIHdnUmVsZXZhbnRVc2VyTmFtZSkpIHtcblx0XHQoe2NvdW50cnlPckFyZWFOYW1lLCByZWdpb25OYW1lfSA9IG13LnN0b3JhZ2UuZ2V0T2JqZWN0KE9QVElPTlMuc3RvcmFnZUtleSArIHdnUmVsZXZhbnRVc2VyTmFtZSkgYXMge1xuXHRcdFx0Y291bnRyeU9yQXJlYU5hbWU6IHN0cmluZztcblx0XHRcdHJlZ2lvbk5hbWU6IHN0cmluZztcblx0XHR9KTtcblx0fSBlbHNlIHtcblx0XHR0cnkge1xuXHRcdFx0Y29uc3QgcGFyYW1zOiBBcGlRdWVyeVJldmlzaW9uc1BhcmFtcyA9IHtcblx0XHRcdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdFx0XHR0aXRsZXM6IFtzdG9yZVBhZ2VUaXRsZV0sXG5cdFx0XHRcdHByb3A6IFsncmV2aXNpb25zJ10sXG5cdFx0XHRcdHJ2cHJvcDogWydjb250ZW50J10sXG5cdFx0XHRcdHJ2c2xvdHM6ICdtYWluJyxcblx0XHRcdFx0c21heGFnZTogNjAwLFxuXHRcdFx0XHRtYXhhZ2U6IDYwMCxcblx0XHRcdH07XG5cblx0XHRcdGNvbnN0IGRhdGEgPSBhd2FpdCBhcGkuZ2V0KHBhcmFtcyk7XG5cblx0XHRcdGNvbnN0IGNvbnRlbnQgPSAoZGF0YVsncXVlcnknXT8ucGFnZXNbMF0/LnJldmlzaW9ucz8uWzBdLnNsb3RzLm1haW4uY29udGVudCBhcyBzdHJpbmcpIHx8ICcnO1xuXHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBKU09OLnBhcnNlKGNvbnRlbnQpIGFzIFN0b3JlR2VvSW5mbyAmIHtcblx0XHRcdFx0Y291bnRyeT86IHN0cmluZztcblx0XHRcdH07XG5cblx0XHRcdGlmICghKHJlc3BvbnNlLmNvdW50cnkgfHwgcmVzcG9uc2UuY291bnRyeU9yQXJlYSkgJiYgIXJlc3BvbnNlLnJlZ2lvbikge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IHtjb3VudHJ5LCBjb3VudHJ5T3JBcmVhLCByZWdpb259ID0gcmVzcG9uc2U7XG5cblx0XHRcdGxldCBsb2NhdGlvbjogU3RvcmVHZW9JbmZvWydjb3VudHJ5T3JBcmVhJ10gPSAnJztcblxuXHRcdFx0aWYgKGNvdW50cnkgfHwgY291bnRyeU9yQXJlYSkge1xuXHRcdFx0XHRsb2NhdGlvbiA9IGNvdW50cnkgfHwgY291bnRyeU9yQXJlYTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKGdldENvdW50cnlPckFyZWFOYW1lKGxvY2F0aW9uIGFzIGtleW9mIENvdW50cnlPckFyZWFOYW1lTGlzdCkpIHtcblx0XHRcdFx0Y291bnRyeU9yQXJlYU5hbWUgPVxuXHRcdFx0XHRcdGdldENvdW50cnlPckFyZWFOYW1lKGxvY2F0aW9uIGFzIGtleW9mIENvdW50cnlPckFyZWFOYW1lTGlzdCkgfHwgZ2V0TWVzc2FnZSgnVW5rbm93bicpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAobG9jYXRpb24gJiYgbG9jYXRpb24gPT09ICdDTicpIHtcblx0XHRcdFx0cmVnaW9uTmFtZSA9IGdldFJlZ2lvbk5hbWUocmVnaW9uIGFzIGtleW9mIFJlZ2lvbk5hbWVMaXN0KSB8fCAnJztcblx0XHRcdH1cblxuXHRcdFx0bXcuc3RvcmFnZS5zZXRPYmplY3QoT1BUSU9OUy5zdG9yYWdlS2V5ICsgd2dSZWxldmFudFVzZXJOYW1lLCB7Y291bnRyeU9yQXJlYU5hbWUsIHJlZ2lvbk5hbWV9LCA2MCAqIDYwKTtcblx0XHR9IGNhdGNoIChlcnJvcjogdW5rbm93bikge1xuXHRcdFx0Y29uc29sZS5lcnJvcignW0dlb0xvY2F0aW9uUmVhZGVyXSBBamF4IGVycm9yIGluIGBnZXRMb2NhdGlvbmAgbWV0aG9kOicsIGVycm9yKTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4ge2NvdW50cnlPckFyZWFOYW1lLCByZWdpb25OYW1lfTtcbn07XG5cbmV4cG9ydCB7Z2V0TG9jYXRpb259O1xuIiwgImltcG9ydCB7YXBwZW5kSWNvbn0gZnJvbSAnLi91dGlsL2FwcGVuZEljb24nO1xuaW1wb3J0IHtnZXRMb2NhdGlvbn0gZnJvbSAnLi91dGlsL2dldExvY2F0aW9uJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9pMThuJztcblxuY29uc3QgYXBwZW5kR2VvSWNvbiA9IGFzeW5jICgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0Y29uc3Qge3dnUmVsZXZhbnRVc2VyTmFtZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cdGlmICghd2dSZWxldmFudFVzZXJOYW1lKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0dHJ5IHtcblx0XHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGdldExvY2F0aW9uKHdnUmVsZXZhbnRVc2VyTmFtZSk7XG5cdFx0Y29uc3QgY291bnRyeU9yQXJlYU5hbWUgPSByZXNwb25zZT8uY291bnRyeU9yQXJlYU5hbWUgPz8gJyc7XG5cdFx0Y29uc3QgcmVnaW9uTmFtZSA9IHJlc3BvbnNlPy5yZWdpb25OYW1lID8/ICcnO1xuXG5cdFx0YXBwZW5kSWNvbih7XG5cdFx0XHRpY29uOiAnZ2xvYmUnLFxuXHRcdFx0aW5kaWNhdG9yVGV4dDogY291bnRyeU9yQXJlYU5hbWUgKyByZWdpb25OYW1lLFxuXHRcdFx0c3BhbkNsYXNzOiAnZ3JlZW4nLFxuXHRcdH0pO1xuXHR9IGNhdGNoIChlcnJvcjogdW5rbm93bikge1xuXHRcdGNvbnNvbGUuZXJyb3IoJ1tHZW9Mb2NhdGlvblJlYWRlcl0gQWpheCBlcnJvciBpbiBgYXBwZW5kR2VvSWNvbmAgbWV0aG9kOicsIGVycm9yKTtcblx0XHRhcHBlbmRJY29uKHtcblx0XHRcdGljb246ICdoZWxwTm90aWNlJyxcblx0XHRcdGluZGljYXRvclRleHQ6IGdldE1lc3NhZ2UoJ1Vua25vd24nKSxcblx0XHRcdHNwYW5DbGFzczogJ29yYW5nZScsXG5cdFx0fSk7XG5cdH1cbn07XG5cbmV4cG9ydCB7YXBwZW5kR2VvSWNvbn07XG4iLCAiaW1wb3J0IHthcHBlbmRHZW9JY29ufSBmcm9tICcuL2FwcGVuZEdlb0ljb24nO1xuaW1wb3J0IHtnZXRMb2NhbFVzZXJHcm91cHN9IGZyb20gJ2V4dC5nYWRnZXQuTWFya1JpZ2h0cyc7XG5cbmNvbnN0IGFkZEVsZW1lbnQgPSBhc3luYyAoKTogUHJvbWlzZTx2b2lkPiA9PiB7XG5cdGNvbnN0IHt3Z1JlbGV2YW50VXNlck5hbWV9ID0gbXcuY29uZmlnLmdldCgpO1xuXG5cdGlmICghd2dSZWxldmFudFVzZXJOYW1lKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0dHJ5IHtcblx0XHRjb25zdCBncm91cHNNYXAgPSBhd2FpdCBnZXRMb2NhbFVzZXJHcm91cHMoW3dnUmVsZXZhbnRVc2VyTmFtZV0pO1xuXHRcdGNvbnN0IGdyb3VwcyA9IGdyb3Vwc01hcFt3Z1JlbGV2YW50VXNlck5hbWVdID8/IFtdO1xuXG5cdFx0aWYgKGdyb3Vwcy5pbmNsdWRlcygnYm90JykgfHwgZ3JvdXBzLmluY2x1ZGVzKCdxaXV3ZW4nKSkge1xuXHRcdFx0LyogZW1wdHkgKi9cblx0XHRcdC8vIEFscmVhZHkgc2hvd24gaW4gTWFya1JpZ2h0cy1Vc2VycGFnZVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR2b2lkIGFwcGVuZEdlb0ljb24oKTtcblx0XHR9XG5cdH0gY2F0Y2ggKGVycm9yOiB1bmtub3duKSB7XG5cdFx0Y29uc29sZS5lcnJvcignW0dlb0xvY2F0aW9uUmVhZGVyXSBBamF4IGVycm9yIGluIGBhZGRFbGVtZW50YCBtZXRob2Q6JywgZXJyb3IpO1xuXHR9XG59O1xuXG5leHBvcnQge2FkZEVsZW1lbnR9O1xuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtTWVNURU1fU0NSSVBUX0xJU1QsIFdFQk1BU1RFUl9MSVNUfSBmcm9tICcuL21vZHVsZXMvY29uc3RhbnQnO1xuaW1wb3J0IHthZGRFbGVtZW50fSBmcm9tICcuL21vZHVsZXMvYWRkRWxlbWVudCc7XG5cbihmdW5jdGlvbiBnZW9Mb2NhdGlvblJlYWRlcigpOiB2b2lkIHtcblx0Y29uc3Qge3dnQWN0aW9uLCB3Z05hbWVzcGFjZU51bWJlciwgd2dQYWdlTmFtZSwgd2dSZWxldmFudFVzZXJOYW1lfSA9IG13LmNvbmZpZy5nZXQoKTtcblx0aWYgKFxuXHRcdCF3Z1JlbGV2YW50VXNlck5hbWUgfHxcblx0XHRTWVNURU1fU0NSSVBUX0xJU1QuaW5jbHVkZXMod2dSZWxldmFudFVzZXJOYW1lKSB8fFxuXHRcdFdFQk1BU1RFUl9MSVNULmluY2x1ZGVzKHdnUmVsZXZhbnRVc2VyTmFtZSkgfHxcblx0XHQhKHdnTmFtZXNwYWNlTnVtYmVyID09PSBPUFRJT05TLnVzZXJOYW1lU3BhY2VOdW1iZXIpIHx8XG5cdFx0ISh3Z0FjdGlvbiA9PT0gJ3ZpZXcnKVxuXHQpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBwYWdlTmFtZTogc3RyaW5nID0gbmV3IG13LlRpdGxlKHdnUGFnZU5hbWUpLnRvVGV4dCgpO1xuXHRjb25zdCByZWxldmFudFVzZXJQYWdlTmFtZTogc3RyaW5nID0gbmV3IG13LlRpdGxlKHdnUmVsZXZhbnRVc2VyTmFtZSwgT1BUSU9OUy51c2VyTmFtZVNwYWNlTnVtYmVyKS50b1RleHQoKTtcblx0aWYgKHBhZ2VOYW1lICE9PSByZWxldmFudFVzZXJQYWdlTmFtZSkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdHZvaWQgYWRkRWxlbWVudCgpO1xufSkoKTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTUMsSUFBQUEscUJBQXNCO0FBQ3RCLElBQUFDLGFBQWM7QUFDZCxJQUFBQyxzQkFBdUI7QUFDdkIsSUFBQUMsVUFBVzs7QUNUWixJQUFNQyxxQkFBK0IsQ0FDcEMsU0FDQSxRQUNBLFVBQ0EsV0FDQSx5QkFDQSxzQkFDQSxxQkFDQSw4QkFDQSxlQUFBO0FBRUQsSUFBTUMsaUJBQTJCLENBQUMsVUFBVSx1QkFBdUIsbUJBQW1COztBQ1h0RixJQUFNQyxhQUFxQjtBQUMzQixJQUFNQyxrQkFBQSxHQUFBQyxPQUE2QkYsWUFBVSxRQUFBO0FBQzdDLElBQU1HLGtCQUFBLEdBQUFELE9BQTZCRixZQUFVLFFBQUE7O0FDRDdDLElBQUFJLHFCQUFrQ0MsUUFBQUMsUUFBQSxnQkFBQSxHQUFBLENBQUE7O0FDRGxDLElBQUFDLG9CQUF1QkQsUUFBQSxpQkFBQTtBQUV2QixJQUFNRSxrQkFBa0JBLE1BQU07QUFDN0IsU0FBTztJQUNOLE1BQUEsR0FBS0Qsa0JBQUFFLFVBQVM7TUFDYkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7SUFDTCxDQUFDO0lBQ0RD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QUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO0lBQ0w7RUFDRCxXQUFXLENBQUMsT0FBTyxFQUFFdFEsU0FBU2EsY0FBYyxHQUFHO0FBQzlDLFdBQU87TUFDTkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7SUFDTDtFQUNELFdBQVcsQ0FBQyxTQUFTLE9BQU8sRUFBRXRRLFNBQVNhLGNBQWMsR0FBRztBQUN2RCxXQUFPO01BQ05DLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO0lBQ0w7RUFDRDtBQUVBLFNBQU87SUFDTnhQLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7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c0I7QUFDdEM7RUFDRDtBQUVBLE9BQUtiLFdBQVc7QUFDakIsR0FBRzsiLAogICJuYW1lcyI6IFsibW91bnRQb2ludFNlbGVjdG9yIiwgInN0b3JhZ2VLZXkiLCAidXNlck5hbWVTcGFjZU51bWJlciIsICJ2ZXJzaW9uIiwgIlNZU1RFTV9TQ1JJUFRfTElTVCIsICJXRUJNQVNURVJfTElTVCIsICJDTEFTU19OQU1FIiwgIkNMQVNTX05BTUVfSUNPTiIsICJjb25jYXQiLCAiQ0xBU1NfTkFNRV9URVhUIiwgImltcG9ydF9leHRfZ2FkZ2V0MiIsICJfX3RvRVNNIiwgInJlcXVpcmUiLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAiZ2V0STE4bk1lc3NhZ2VzIiwgImxvY2FsaXplIiwgImVuIiwgImphIiwgInpoIiwgIlVua25vd24iLCAiTG9jYXRpb24iLCAiaTE4bk1lc3NhZ2VzIiwgImdldE1lc3NhZ2UiLCAia2V5IiwgIkZvb3Rlck5vdGljZSIsICJzcGFuQ2xhc3MiLCAiY2hpbGRyZW4iLCAiZGVmYXVsdCIsICJjcmVhdGVFbGVtZW50IiwgIkZyYWdtZW50IiwgInNraW4iLCAibXciLCAiY29uZmlnIiwgImdldCIsICJpZCIsICJjbGFzc05hbWUiLCAiaW5jbHVkZXMiLCAiZG9jdW1lbnQiLCAicXVlcnlTZWxlY3RvciIsICJJbmRpY2F0b3IiLCAiaWNvbiIsICJpbmRpY2F0b3JUZXh0IiwgInRleHQiLCAiRm9vdGVySWNvbiIsICJpbXBvcnRfZXh0X2dhZGdldDMiLCAiYXBwZW5kSWNvbiIsICJtb3VudFBvaW50IiwgInByZXBlbmQiLCAiZ2V0Q291bnRyeU9yQXJlYU5hbWVMaXN0IiwgIndnVXNlckxhbmd1YWdlIiwgIkFGIiwgIkFYIiwgIkFMIiwgIkRaIiwgIkFTIiwgIkFEIiwgIkFPIiwgIkFJIiwgIkFRIiwgIkFHIiwgIkFSIiwgIkFNIiwgIkFXIiwgIkFVIiwgIkFUIiwgIkFaIiwgIkJTIiwgIkJIIiwgIkJEIiwgIkJCIiwgIkJZIiwgIkJFIiwgIkJaIiwgIkJKIiwgIkJNIiwgIkJUIiwgIkJPIiwgIkJRIiwgIkJBIiwgIkJXIiwgIkJWIiwgIkJSIiwgIklPIiwgIkJOIiwgIkJHIiwgIkJGIiwgIkJJIiwgIkNWIiwgIktIIiwgIkNNIiwgIkNBIiwgIktZIiwgIkNGIiwgIlREIiwgIkNMIiwgIkNOIiwgIkNYIiwgIkNDIiwgIkNPIiwgIktNIiwgIkNHIiwgIkNEIiwgIkNLIiwgIkNSIiwgIkNJIiwgIkhSIiwgIkNVIiwgIkNXIiwgIkNZIiwgIkNaIiwgIkRLIiwgIkRKIiwgIkRNIiwgIkRPIiwgIkVDIiwgIkVHIiwgIlNWIiwgIkdRIiwgIkVSIiwgIkVFIiwgIlNaIiwgIkVUIiwgIkZLIiwgIkZPIiwgIkZKIiwgIkZJIiwgIkZSIiwgIkdGIiwgIlBGIiwgIlRGIiwgIkdBIiwgIkdNIiwgIkdFIiwgIkRFIiwgIkdIIiwgIkdJIiwgIkdSIiwgIkdMIiwgIkdEIiwgIkdQIiwgIkdVIiwgIkdUIiwgIkdHIiwgIkdOIiwgIkdXIiwgIkdZIiwgIkhUIiwgIkhNIiwgIlZBIiwgIkhOIiwgIkhLIiwgIkhVIiwgIklTIiwgIklOIiwgIklEIiwgIklSIiwgIklRIiwgIklFIiwgIklNIiwgIklMIiwgIklUIiwgIkpNIiwgIkpQIiwgIkpFIiwgIkpPIiwgIktaIiwgIktFIiwgIktJIiwgIktQIiwgIktSIiwgIktXIiwgIktHIiwgIkxBIiwgIkxWIiwgIkxCIiwgIkxTIiwgIkxSIiwgIkxZIiwgIkxJIiwgIkxUIiwgIkxVIiwgIk1PIiwgIk1HIiwgIk1XIiwgIk1ZIiwgIk1WIiwgIk1MIiwgIk1UIiwgIk1IIiwgIk1RIiwgIk1SIiwgIk1VIiwgIllUIiwgIk1YIiwgIkZNIiwgIk1EIiwgIk1DIiwgIk1OIiwgIk1FIiwgIk1TIiwgIk1BIiwgIk1aIiwgIk1NIiwgIk5BIiwgIk5SIiwgIk5QIiwgIk5MIiwgIk5DIiwgIk5aIiwgIk5JIiwgIk5FIiwgIk5HIiwgIk5VIiwgIk5GIiwgIk1LIiwgIk1QIiwgIk5PIiwgIk9NIiwgIlBLIiwgIlBXIiwgIlBTIiwgIlBBIiwgIlBHIiwgIlBZIiwgIlBFIiwgIlBIIiwgIlBOIiwgIlBMIiwgIlBUIiwgIlBSIiwgIlFBIiwgIlJFIiwgIlJPIiwgIlJVIiwgIlJXIiwgIkJMIiwgIlNIIiwgIktOIiwgIkxDIiwgIk1GIiwgIlBNIiwgIlZDIiwgIldTIiwgIlNNIiwgIlNUIiwgIlNBIiwgIlNOIiwgIlJTIiwgIlNDIiwgIlNMIiwgIlNHIiwgIlNYIiwgIlNLIiwgIlNJIiwgIlNCIiwgIlNPIiwgIlpBIiwgIkdTIiwgIlNTIiwgIkVTIiwgIkxLIiwgIlNEIiwgIlNSIiwgIlNKIiwgIlNFIiwgIkNIIiwgIlNZIiwgIlRXIiwgIlRKIiwgIlRaIiwgIlRIIiwgIlRMIiwgIlRHIiwgIlRLIiwgIlRPIiwgIlRUIiwgIlROIiwgIlRSIiwgIlRNIiwgIlRDIiwgIlRWIiwgIlVHIiwgIlVBIiwgIkFFIiwgIkdCIiwgIlVTIiwgIlVNIiwgIlVZIiwgIlVaIiwgIlZVIiwgIlZFIiwgIlZOIiwgIlZHIiwgIlZJIiwgIldGIiwgIkVIIiwgIllFIiwgIlpNIiwgIlpXIiwgImdldFJlZ2lvbk5hbWVMaXN0IiwgIkFIIiwgIkNRIiwgIkdYIiwgIkdaIiwgIkhBIiwgIkhCIiwgIkhFIiwgIkhJIiwgIkhMIiwgIkpMIiwgIkpTIiwgIkpYIiwgIkxOIiwgIk5NIiwgIk5YIiwgIlFIIiwgIlhKIiwgIlhaIiwgIllOIiwgIlpKIiwgImNvdW50cnlPckFyZWFMaXN0IiwgInJlZ2lvbkxpc3QiLCAiZ2V0Q291bnRyeU9yQXJlYU5hbWUiLCAiZ2V0UmVnaW9uTmFtZSIsICJpbXBvcnRfZXh0X2dhZGdldDQiLCAiYXBpIiwgImluaXRNd0FwaSIsICJnZXRMb2NhdGlvbiIsICJfcmVmIiwgIl9hc3luY1RvR2VuZXJhdG9yIiwgIndnUmVsZXZhbnRVc2VyTmFtZSIsICJzdG9yZVBhZ2VUaXRsZSIsICJjb3VudHJ5T3JBcmVhTmFtZSIsICJyZWdpb25OYW1lIiwgInN0b3JhZ2UiLCAiZ2V0T2JqZWN0IiwgIl9kYXRhJHF1ZXJ5IiwgInBhcmFtcyIsICJhY3Rpb24iLCAiZm9ybWF0IiwgImZvcm1hdHZlcnNpb24iLCAidGl0bGVzIiwgInByb3AiLCAicnZwcm9wIiwgInJ2c2xvdHMiLCAic21heGFnZSIsICJtYXhhZ2UiLCAiZGF0YSIsICJjb250ZW50IiwgInBhZ2VzIiwgInJldmlzaW9ucyIsICJzbG90cyIsICJtYWluIiwgInJlc3BvbnNlIiwgIkpTT04iLCAicGFyc2UiLCAiY291bnRyeSIsICJjb3VudHJ5T3JBcmVhIiwgInJlZ2lvbiIsICJsb2NhdGlvbiIsICJzZXRPYmplY3QiLCAiZXJyb3IiLCAiY29uc29sZSIsICJfeCIsICJhcHBseSIsICJhcmd1bWVudHMiLCAiYXBwZW5kR2VvSWNvbiIsICJfcmVmMiIsICJfcmVzcG9uc2UkY291bnRyeU9yQXIiLCAiX3Jlc3BvbnNlJHJlZ2lvbk5hbWUiLCAiaW1wb3J0X2V4dF9nYWRnZXQ1IiwgImFkZEVsZW1lbnQiLCAiX3JlZjMiLCAiX2dyb3Vwc01hcCR3Z1JlbGV2YW50IiwgImdyb3Vwc01hcCIsICJnZXRMb2NhbFVzZXJHcm91cHMiLCAiZ3JvdXBzIiwgImdlb0xvY2F0aW9uUmVhZGVyIiwgIndnQWN0aW9uIiwgIndnTmFtZXNwYWNlTnVtYmVyIiwgIndnUGFnZU5hbWUiLCAicGFnZU5hbWUiLCAiVGl0bGUiLCAidG9UZXh0IiwgInJlbGV2YW50VXNlclBhZ2VOYW1lIl0KfQo=

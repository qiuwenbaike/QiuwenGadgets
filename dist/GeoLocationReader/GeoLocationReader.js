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
var import_ext_gadget2 = __toESM(require("ext.gadget.React"), 1);
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
  children !== null && children !== void 0 ? children : children = /* @__PURE__ */ import_ext_gadget2.default.createElement(import_ext_gadget2.default.Fragment, null);
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
var import_ext_gadget3 = __toESM(require("ext.gadget.React"), 1);
var appendFooterNotice = (element) => {
  const mountPoint = document.querySelector(mountPointSelector);
  if (mountPoint) {
    mountPoint.prepend(element);
  }
};
var appendIcon = ({
  icon,
  indicatorText,
  spanClass
}) => {
  if (!spanClass || !icon || !indicatorText) {
    return;
  }
  appendFooterNotice(/* @__PURE__ */ import_ext_gadget3.default.createElement(FooterIcon, {
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0dlb0xvY2F0aW9uUmVhZGVyL29wdGlvbnMuanNvbiIsICJzcmMvR2VvTG9jYXRpb24vbW9kdWxlcy9jb25zdGFudC50cyIsICJzcmMvR2VvTG9jYXRpb25SZWFkZXIvbW9kdWxlcy9jb25zdGFudC50cyIsICJzcmMvR2VvTG9jYXRpb25SZWFkZXIvbW9kdWxlcy9jb21wb25lbnRzL3JlYWN0LnRzeCIsICJzcmMvR2VvTG9jYXRpb25SZWFkZXIvbW9kdWxlcy9pMThuLnRzIiwgInNyYy9HZW9Mb2NhdGlvblJlYWRlci9tb2R1bGVzL3V0aWwvYXBwZW5kSWNvbi50c3giLCAic3JjL0dlb0xvY2F0aW9uUmVhZGVyL21vZHVsZXMvdXRpbC9uYW1lLnRzIiwgInNyYy9HZW9Mb2NhdGlvblJlYWRlci9tb2R1bGVzL3V0aWwvZ2V0TmFtZS50cyIsICJzcmMvR2VvTG9jYXRpb25SZWFkZXIvbW9kdWxlcy9hcGkudHMiLCAic3JjL0dlb0xvY2F0aW9uUmVhZGVyL21vZHVsZXMvdXRpbC9nZXRMb2NhdGlvbi50cyIsICJzcmMvR2VvTG9jYXRpb25SZWFkZXIvbW9kdWxlcy9hcHBlbmRHZW9JY29uLnRzeCIsICJzcmMvR2VvTG9jYXRpb25SZWFkZXIvbW9kdWxlcy9hZGRFbGVtZW50LnRzIiwgInNyYy9HZW9Mb2NhdGlvblJlYWRlci9HZW9Mb2NhdGlvblJlYWRlci50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsie1xuXHRcImRlZmF1bHRHZW9JbmZvXCI6IHtcblx0XHRcImNvdW50cnlPckFyZWFcIjogXCJcIixcblx0XHRcInJlZ2lvblwiOiBcIlwiLFxuXHRcdFwiY2l0eVwiOiBcIlwiXG5cdH0sXG5cdFwibW91bnRQb2ludFNlbGVjdG9yXCI6IFwiI2Zvb3Rlci1pbmZvLC5wYWdlLWluZm9cIixcblx0XCJzdG9yYWdlS2V5XCI6IFwiZXh0LmdhZGdldC5NYXJrUmlnaHRzX0dlb0xvY2F0aW9uUmVhZGVyLVwiLFxuXHRcInVzZXJOYW1lU3BhY2VOdW1iZXJcIjogMixcblx0XCJ2ZXJzaW9uXCI6IFwiMi4xXCJcbn1cbiIsICJjb25zdCBTWVNURU1fU0NSSVBUX0xJU1Q6IHN0cmluZ1tdID0gW1xuXHQn5rul55So6L+H5ruk5ZmoJyxcblx0J+axgumXu+e8luiAhScsXG5cdCfmsYLpl7vnmb7np5HnpL7ljLonLFxuXHQnRXhhbXBsZScsXG5cdCdFeHRlcm5hbCBjb250cmlidXRvcnMnLFxuXHQnTWFpbnRlbmFuY2Ugc2NyaXB0Jyxcblx0J01lZGlhV2lraSBkZWZhdWx0Jyxcblx0J01lZGlhV2lraSBtZXNzYWdlIGRlbGl2ZXJ5Jyxcblx0J05ldyB1c2VyIHBhZ2UnLFxuXTtcbmNvbnN0IFdFQk1BU1RFUl9MSVNUOiBzdHJpbmdbXSA9IFsnUWl1V2VuJywgJ1FpdVdlbiBmb3IgQWNjb3VudHMnLCAnUWl1d2VuU29jaWFsTWVkaWEnXTtcblxuZXhwb3J0IHtTWVNURU1fU0NSSVBUX0xJU1QsIFdFQk1BU1RFUl9MSVNUfTtcbiIsICJjb25zdCBDTEFTU19OQU1FOiBzdHJpbmcgPSAnZ2FkZ2V0LWdlb19sb2NhdGlvbl9yZWFkZXInO1xuY29uc3QgQ0xBU1NfTkFNRV9JQ09OOiBzdHJpbmcgPSBgJHtDTEFTU19OQU1FfV9faWNvbmA7XG5jb25zdCBDTEFTU19OQU1FX1RFWFQ6IHN0cmluZyA9IGAke0NMQVNTX05BTUV9X190ZXh0YDtcblxuZXhwb3J0IHtTWVNURU1fU0NSSVBUX0xJU1QsIFdFQk1BU1RFUl9MSVNUfSBmcm9tICd+L0dlb0xvY2F0aW9uL21vZHVsZXMvY29uc3RhbnQnO1xuZXhwb3J0IHtDTEFTU19OQU1FLCBDTEFTU19OQU1FX0lDT04sIENMQVNTX05BTUVfVEVYVH07XG4iLCAiaW1wb3J0IHtDTEFTU19OQU1FLCBDTEFTU19OQU1FX0lDT04sIENMQVNTX05BTUVfVEVYVH0gZnJvbSAnLi4vY29uc3RhbnQnO1xuaW1wb3J0IFJlYWN0LCB7UmVhY3RFbGVtZW50fSBmcm9tICdleHQuZ2FkZ2V0LlJlYWN0JztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi4vaTE4bic7XG5cbmludGVyZmFjZSBGb290ZXJOb3RpY2VQcm9wcyB7XG5cdHNwYW5DbGFzczogc3RyaW5nO1xuXHRjaGlsZHJlbj86IFJlYWN0RWxlbWVudCB8IFJlYWN0RWxlbWVudFtdO1xufVxuXG5jb25zdCBGb290ZXJOb3RpY2UgPSAoe3NwYW5DbGFzcywgY2hpbGRyZW4gPSA8PjwvPn06IEZvb3Rlck5vdGljZVByb3BzKSA9PiB7XG5cdGNvbnN0IHtza2lufSA9IG13LmNvbmZpZy5nZXQoKTtcblx0Y2hpbGRyZW4gPz89IDw+PC8+O1xuXG5cdHJldHVybiAoXG5cdFx0PD5cblx0XHRcdHtza2luID09PSAnY2l0aXplbicgPyAoXG5cdFx0XHRcdDxzZWN0aW9uXG5cdFx0XHRcdFx0aWQ9e0NMQVNTX05BTUV9XG5cdFx0XHRcdFx0Y2xhc3NOYW1lPXtbXG5cdFx0XHRcdFx0XHRDTEFTU19OQU1FLFxuXHRcdFx0XHRcdFx0YCR7Q0xBU1NfTkFNRX0tJHtzcGFuQ2xhc3N9YCxcblx0XHRcdFx0XHRcdCdwYWdlLWluZm9fX2l0ZW0nLFxuXHRcdFx0XHRcdFx0J2NpdGl6ZW4tZm9vdGVyX19wYWdlaW5mby1pdGVtJyxcblx0XHRcdFx0XHRcdCdub3ByaW50Jyxcblx0XHRcdFx0XHRdfVxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0e2NoaWxkcmVufVxuXHRcdFx0XHQ8L3NlY3Rpb24+XG5cdFx0XHQpIDogWyd2ZWN0b3InLCAndmVjdG9yLTIwMjInLCAnZ29uZ2JpJ10uaW5jbHVkZXMoc2tpbikgfHwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcigndWwjZm9vdGVyLWluZm8nKSA/IChcblx0XHRcdFx0PGxpIGlkPXtDTEFTU19OQU1FfSBjbGFzc05hbWU9e1tDTEFTU19OQU1FLCBgJHtDTEFTU19OQU1FfS0ke3NwYW5DbGFzc31gLCAnbm9wcmludCddfT5cblx0XHRcdFx0XHR7Y2hpbGRyZW59XG5cdFx0XHRcdDwvbGk+XG5cdFx0XHQpIDogKFxuXHRcdFx0XHQ8ZGl2IGlkPXtDTEFTU19OQU1FfSBjbGFzc05hbWU9e1tDTEFTU19OQU1FLCBgJHtDTEFTU19OQU1FfS0ke3NwYW5DbGFzc31gLCAnbm9wcmludCddfT5cblx0XHRcdFx0XHR7Y2hpbGRyZW59XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0KX1cblx0XHQ8Lz5cblx0KTtcbn07XG5cbmludGVyZmFjZSBJbmRpY2F0b3JQcm9wcyB7XG5cdGljb246ICdnbG9iZScgfCAnaGVscE5vdGljZSc7XG5cdGluZGljYXRvclRleHQ6IHN0cmluZztcbn1cblxuY29uc3QgSW5kaWNhdG9yID0gKHtpY29uLCBpbmRpY2F0b3JUZXh0fTogSW5kaWNhdG9yUHJvcHMpID0+IHtcblx0Y29uc3QgdGV4dDogc3RyaW5nID1cblx0XHRpY29uID09PSAnZ2xvYmUnID8gZ2V0TWVzc2FnZSgnTG9jYXRpb24nKSArIGdldE1lc3NhZ2UoJzonKSArIGluZGljYXRvclRleHQgOiAoaW5kaWNhdG9yVGV4dCA/PyAnJyk7XG5cblx0cmV0dXJuIChcblx0XHQ8PlxuXHRcdFx0PHNwYW4gY2xhc3NOYW1lPXtbQ0xBU1NfTkFNRV9JQ09OLCBgJHtDTEFTU19OQU1FX0lDT059LSR7aWNvbn1gXX0gYXJpYS1sYWJlbD17dGV4dH0+PC9zcGFuPlxuXHRcdFx0PHNwYW4gY2xhc3NOYW1lPXtDTEFTU19OQU1FX1RFWFR9Pnt0ZXh0fTwvc3Bhbj5cblx0XHQ8Lz5cblx0KTtcbn07XG5cbmludGVyZmFjZSBGb290ZXJJY29uUHJvcHMge1xuXHRzcGFuQ2xhc3M6IHN0cmluZztcblx0aWNvbjogJ2dsb2JlJyB8ICdoZWxwTm90aWNlJztcblx0aW5kaWNhdG9yVGV4dDogc3RyaW5nO1xufVxuXG5jb25zdCBGb290ZXJJY29uID0gKHtpY29uLCBzcGFuQ2xhc3MsIGluZGljYXRvclRleHR9OiBGb290ZXJJY29uUHJvcHMpID0+IChcblx0PEZvb3Rlck5vdGljZSBzcGFuQ2xhc3M9e3NwYW5DbGFzc30+XG5cdFx0PEluZGljYXRvciBpY29uPXtpY29ufSBpbmRpY2F0b3JUZXh0PXtpbmRpY2F0b3JUZXh0fSAvPlxuXHQ8L0Zvb3Rlck5vdGljZT5cbik7XG5cbmV4cG9ydCB7Rm9vdGVySWNvbiwgdHlwZSBGb290ZXJJY29uUHJvcHN9O1xuIiwgImltcG9ydCB7bG9jYWxpemV9IGZyb20gJ2V4dC5nYWRnZXQuaTE4bic7XG5cbmNvbnN0IGdldEkxOG5NZXNzYWdlcyA9ICgpID0+IHtcblx0cmV0dXJuIHtcblx0XHQnOic6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnOiAnLFxuXHRcdFx0amE6ICfvvJonLFxuXHRcdFx0emg6ICfvvJonLFxuXHRcdH0pLFxuXHRcdFVua25vd246IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnVW5rbm93biBMb2NhdGlvbicsXG5cdFx0XHRqYTogJ+acquefpUlQ5Zyw5Z+fJyxcblx0XHRcdCd6aC1oYW5zJzogJ+acquefpUlQ5bGe5ZywJyxcblx0XHRcdCd6aC1oYW50JzogJ+acquefpUlQ5bGs5ZywJyxcblx0XHR9KSxcblx0XHRMb2NhdGlvbjogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdJUCBMb2NhdGlvbicsXG5cdFx0XHRqYTogJ0lQ5Zyw5Z+fJyxcblx0XHRcdCd6aC1oYW5zJzogJ0lQ5bGe5ZywJyxcblx0XHRcdCd6aC1oYW50JzogJ0lQ5bGs5ZywJyxcblx0XHR9KSxcblx0fTtcbn07XG5cbmNvbnN0IGkxOG5NZXNzYWdlcyA9IGdldEkxOG5NZXNzYWdlcygpO1xuXG5jb25zdCBnZXRNZXNzYWdlOiBHZXRNZXNzYWdlczx0eXBlb2YgaTE4bk1lc3NhZ2VzPiA9IChrZXkpID0+IHtcblx0cmV0dXJuIGkxOG5NZXNzYWdlc1trZXldIHx8IGtleTtcbn07XG5cbmV4cG9ydCB7Z2V0TWVzc2FnZX07XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi8uLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtGb290ZXJJY29uLCB0eXBlIEZvb3Rlckljb25Qcm9wc30gZnJvbSAnLi4vY29tcG9uZW50cy9yZWFjdCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAnZXh0LmdhZGdldC5SZWFjdCc7XG5cbmNvbnN0IGFwcGVuZEZvb3Rlck5vdGljZSA9IChlbGVtZW50OiBFbGVtZW50KSA9PiB7XG5cdGNvbnN0IG1vdW50UG9pbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxFbGVtZW50PihPUFRJT05TLm1vdW50UG9pbnRTZWxlY3Rvcik7XG5cblx0aWYgKG1vdW50UG9pbnQpIHtcblx0XHRtb3VudFBvaW50LnByZXBlbmQoZWxlbWVudCk7XG5cdH1cbn07XG5cbmNvbnN0IGFwcGVuZEljb24gPSAoe2ljb24sIGluZGljYXRvclRleHQsIHNwYW5DbGFzc306IEZvb3Rlckljb25Qcm9wcyk6IHZvaWQgPT4ge1xuXHRpZiAoIXNwYW5DbGFzcyB8fCAhaWNvbiB8fCAhaW5kaWNhdG9yVGV4dCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGFwcGVuZEZvb3Rlck5vdGljZSg8Rm9vdGVySWNvbiBzcGFuQ2xhc3M9e3NwYW5DbGFzc30gaWNvbj17aWNvbn0gaW5kaWNhdG9yVGV4dD17aW5kaWNhdG9yVGV4dH0gLz4pO1xufTtcblxuZXhwb3J0IHthcHBlbmRJY29ufTtcbiIsICJjb25zdCBnZXRDb3VudHJ5T3JBcmVhTmFtZUxpc3QgPSAoKSA9PiB7XG5cdGNvbnN0IHt3Z1VzZXJMYW5ndWFnZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cblx0aWYgKFsnemgtaGFudCcsICd6aC1oaycsICd6aC1tbyddLmluY2x1ZGVzKHdnVXNlckxhbmd1YWdlKSkge1xuXHRcdHJldHVybiB7XG5cdFx0XHRBRjogJ+mYv+WvjOaxlycsXG5cdFx0XHRBWDogJ+Wlp+iYrScsXG5cdFx0XHRBTDogJ+mYv+eIvuW3tOWwvOS6nicsXG5cdFx0XHREWjogJ+mYv+eIvuWPiuWIqeS6nicsXG5cdFx0XHRBUzogJ+e+juWxrOiWqeaRqeS6nicsXG5cdFx0XHRBRDogJ+WuiemBk+eIvicsXG5cdFx0XHRBTzogJ+WuieWTpeaLiScsXG5cdFx0XHRBSTogJ+WuieWcreaLiScsXG5cdFx0XHRBUTogJ+WNl+altea0sicsXG5cdFx0XHRBRzogJ+WuieaPkOeTnOWSjOW3tOW4g+mBlCcsXG5cdFx0XHRBUjogJ+mYv+agueW7tycsXG5cdFx0XHRBTTogJ+S6nue+juWwvOS6nicsXG5cdFx0XHRBVzogJ+mYv+mtr+W3tCcsXG5cdFx0XHRBVTogJ+a+s+a0sicsXG5cdFx0XHRBVDogJ+Wlp+WcsOWIqScsXG5cdFx0XHRBWjogJ+mYv+WhnuaLnOeWhicsXG5cdFx0XHRCUzogJ+W3tOWTiOmmrCcsXG5cdFx0XHRCSDogJ+W3tOaelycsXG5cdFx0XHRCRDogJ+Wtn+WKoOaLieWciycsXG5cdFx0XHRCQjogJ+W3tOW3tOWkmuaWrycsXG5cdFx0XHRCWTogJ+eZveS/hOe+heaWrycsXG5cdFx0XHRCRTogJ+avlOWIqeaZgicsXG5cdFx0XHRCWjogJ+S8r+WIqeiMsicsXG5cdFx0XHRCSjogJ+iyneWvpycsXG5cdFx0XHRCTTogJ+eZvuaFlemBlCcsXG5cdFx0XHRCVDogJ+S4jeS4uScsXG5cdFx0XHRCTzogJ+eOu+WIqee2reS6nicsXG5cdFx0XHRCUTogJ+iNt+iYreWKoOWLkuavlOWNgCcsXG5cdFx0XHRCQTogJ+azoum7kScsXG5cdFx0XHRCVzogJ+WNmuiMqOeTpue0jScsXG5cdFx0XHRCVjogJ+W4g+mfi+WzticsXG5cdFx0XHRCUjogJ+W3tOilvycsXG5cdFx0XHRJTzogJ+iLseWxrOWNsOW6pua0i+mgmOWcsCcsXG5cdFx0XHRCTjogJ+axtuiQiicsXG5cdFx0XHRCRzogJ+S/neWKoOWIqeS6nicsXG5cdFx0XHRCRjogJ+W4g+Wfuue0jeazlee0oicsXG5cdFx0XHRCSTogJ+W4g+mahui/qicsXG5cdFx0XHRDVjogJ+S9m+W+l+inkicsXG5cdFx0XHRLSDogJ+afrOWflOWvqCcsXG5cdFx0XHRDTTogJ+WWgOm6pemahicsXG5cdFx0XHRDQTogJ+WKoOaLv+WkpycsXG5cdFx0XHRLWTogJ+mWi+abvOe+pOWzticsXG5cdFx0XHRDRjogJ+S4remdnicsXG5cdFx0XHRURDogJ+S5jeW+lycsXG5cdFx0XHRDTDogJ+aZuuWIqScsXG5cdFx0XHRDTjogJ+S4reWciycsXG5cdFx0XHRDWDogJ+iBluiqleWzticsXG5cdFx0XHRDQzogJ+enkeenkeaWr++8iOWfuuael++8iee+pOWzticsXG5cdFx0XHRDTzogJ+WTpeWAq+avlOS6nicsXG5cdFx0XHRLTTogJ+enkeaRqee+hScsXG5cdFx0XHRDRzogJ+WJm+aenOWFseWSjOWciycsXG5cdFx0XHRDRDogJ+WJm+aenOawkeS4u+WFseWSjOWciycsXG5cdFx0XHRDSzogJ+W6q+WFi+e+pOWzticsXG5cdFx0XHRDUjogJ+WTpeaWr+mBlOm7juWKoCcsXG5cdFx0XHRDSTogJ+enkeeJuei/queTpicsXG5cdFx0XHRIUjogJ+WFi+e+heWcsOS6nicsXG5cdFx0XHRDVTogJ+WPpOW3tCcsXG5cdFx0XHRDVzogJ+W6q+aLiee0oicsXG5cdFx0XHRDWTogJ+Whnua1pui3r+aWrycsXG5cdFx0XHRDWjogJ+aNt+WFiycsXG5cdFx0XHRESzogJ+S4uem6pScsXG5cdFx0XHRESjogJ+WQieW4g+aPkCcsXG5cdFx0XHRETTogJ+Wkmuexs+WwvOWFiycsXG5cdFx0XHRETzogJ+Wkmuexs+WwvOWKoCcsXG5cdFx0XHRFQzogJ+WOhOeTnOWkmueIvicsXG5cdFx0XHRFRzogJ+Wfg+WPiicsXG5cdFx0XHRTVjogJ+iWqeeIvueTpuWkmicsXG5cdFx0XHRHUTogJ+i1pOmBk+eVv+WFp+S6nicsXG5cdFx0XHRFUjogJ+WOhOeri+eJuemHjOS6nicsXG5cdFx0XHRFRTogJ+aEm+aymeWwvOS6nicsXG5cdFx0XHRTWjogJ+aWr+WogeWjq+iYrScsXG5cdFx0XHRFVDogJ+Wfg+WhnuS/hOavlOS6nicsXG5cdFx0XHRGSzogJ+emj+WFi+iYree+pOWzticsXG5cdFx0XHRGTzogJ+azlee+hee+pOWzticsXG5cdFx0XHRGSjogJ+aWkOa/nycsXG5cdFx0XHRGSTogJ+iKrOiYrScsXG5cdFx0XHRGUjogJ+azleWciycsXG5cdFx0XHRHRjogJ+azleWxrOWcreS6numCoycsXG5cdFx0XHRQRjogJ+azleWxrOazouWIqeWwvOilv+S6nicsXG5cdFx0XHRURjogJ+azleWxrOWNl+mDqOWSjOWNl+altemgmOWcsCcsXG5cdFx0XHRHQTogJ+WKoOiTrCcsXG5cdFx0XHRHTTogJ+WyoeavlOS6nicsXG5cdFx0XHRHRTogJ+agvOmtr+WQieS6nicsXG5cdFx0XHRERTogJ+W+t+WciycsXG5cdFx0XHRHSDogJ+WKoOe0jScsXG5cdFx0XHRHSTogJ+ebtOW4g+e+hemZgCcsXG5cdFx0XHRHUjogJ+W4jOiHmCcsXG5cdFx0XHRHTDogJ+agvOmZteiYrScsXG5cdFx0XHRHRDogJ+agvOael+e0jemBlCcsXG5cdFx0XHRHUDogJ+eTnOW+t+e+heaZricsXG5cdFx0XHRHVTogJ+mXnOWzticsXG5cdFx0XHRHVDogJ+WNseWcsOmmrOaLiScsXG5cdFx0XHRHRzogJ+agueilvycsXG5cdFx0XHRHTjogJ+eVv+WFp+S6nicsXG5cdFx0XHRHVzogJ+eVv+WFp+S6nuavlOe0uScsXG5cdFx0XHRHWTogJ+WcreS6numCoycsXG5cdFx0XHRIVDogJ+a1t+WcsCcsXG5cdFx0XHRITTogJ+i1q+W+t+WztuWSjOm6peWFi+WUkOe0jee+pOWzticsXG5cdFx0XHRWQTogJ+aiteiSguWyoScsXG5cdFx0XHRITjogJ+a0qumDveaLieaWrycsXG5cdFx0XHRISzogJ+S4reWci+mmmea4rycsXG5cdFx0XHRIVTogJ+WMiOeJmeWIqScsXG5cdFx0XHRJUzogJ+WGsOWzticsXG5cdFx0XHRJTjogJ+WNsOW6picsXG5cdFx0XHRJRDogJ+WNsOWwvCcsXG5cdFx0XHRJUjogJ+S8iuaclycsXG5cdFx0XHRJUTogJ+S8iuaLieWFiycsXG5cdFx0XHRJRTogJ+aEm+eIvuiYrScsXG5cdFx0XHRJTTogJ+S6uuWzticsXG5cdFx0XHRJTDogJ+S7peiJsuWIlycsXG5cdFx0XHRJVDogJ+aEj+Wkp+WIqScsXG5cdFx0XHRKTTogJ+eJmeiyt+WKoCcsXG5cdFx0XHRKUDogJ+aXpeacrCcsXG5cdFx0XHRKRTogJ+a+pOilvycsXG5cdFx0XHRKTzogJ+e0hOaXpicsXG5cdFx0XHRLWjogJ+WTiOiWqeWFiycsXG5cdFx0XHRLRTogJ+iCr+mbhScsXG5cdFx0XHRLSTogJ+WfuumHjOW3tOaWrycsXG5cdFx0XHRLUDogJ+WMl+mfkycsXG5cdFx0XHRLUjogJ+mfk+WciycsXG5cdFx0XHRLVzogJ+enkeWogeeJuScsXG5cdFx0XHRLRzogJ+WQieeIvuWQieaWrycsXG5cdFx0XHRMQTogJ+iAgeaSvicsXG5cdFx0XHRMVjogJ+aLieiEq+e2reS6nicsXG5cdFx0XHRMQjogJ+m7juW3tOWrqScsXG5cdFx0XHRMUzogJ+iQiue0ouaJmCcsXG5cdFx0XHRMUjogJ+WIqeavlOmHjOS6nicsXG5cdFx0XHRMWTogJ+WIqeavlOS6nicsXG5cdFx0XHRMSTogJ+WIl+aUr+aVpuWjq+eZuycsXG5cdFx0XHRMVDogJ+eri+mZtuWumycsXG5cdFx0XHRMVTogJ+ebp+ajruWgoScsXG5cdFx0XHRNTzogJ+S4reWci+a+s+mWgCcsXG5cdFx0XHRNRzogJ+mmrOmBlOWKoOaWr+WKoCcsXG5cdFx0XHRNVzogJ+mmrOaLiee2rScsXG5cdFx0XHRNWTogJ+mmrOS+huilv+S6nicsXG5cdFx0XHRNVjogJ+mmrOeIvuS7o+WkqycsXG5cdFx0XHRNTDogJ+mmrOmHjCcsXG5cdFx0XHRNVDogJ+mmrOiAs+S7licsXG5cdFx0XHRNSDogJ+mmrOe0ueeIvue+pOWzticsXG5cdFx0XHRNUTogJ+mmrOaPkOWwvOWFiycsXG5cdFx0XHRNUjogJ+avm+mHjOWhlOWwvOS6nicsXG5cdFx0XHRNVTogJ+avm+mHjOijmOaWrycsXG5cdFx0XHRZVDogJ+mmrOe0hOeJuScsXG5cdFx0XHRNWDogJ+WiqOilv+WTpScsXG5cdFx0XHRGTTogJ+WvhuWFi+e+heWwvOilv+S6nuiBr+mCpicsXG5cdFx0XHRNRDogJ+aRqeeIvuWkmueTpicsXG5cdFx0XHRNQzogJ+aRqee0jeWTpScsXG5cdFx0XHRNTjogJ+iSmeWPpCcsXG5cdFx0XHRNRTogJ+m7keWxsScsXG5cdFx0XHRNUzogJ+iSmeeJueWhnuaLieeJuScsXG5cdFx0XHRNQTogJ+aRqea0m+WTpScsXG5cdFx0XHRNWjogJ+iOq+ahkeavlOWFiycsXG5cdFx0XHRNTTogJ+e3rOeUuCcsXG5cdFx0XHROQTogJ+e0jeexs+avlOS6nicsXG5cdFx0XHROUjogJ+eRmemtrycsXG5cdFx0XHROUDogJ+WwvOaziueIvicsXG5cdFx0XHROTDogJ+iNt+iYrScsXG5cdFx0XHROQzogJ+aWsOWWgOmHjOWkmuWwvOS6nicsXG5cdFx0XHROWjogJ+aWsOilv+iYrScsXG5cdFx0XHROSTogJ+WwvOWKoOaLieeTnCcsXG5cdFx0XHRORTogJ+WwvOaXpeeIvicsXG5cdFx0XHRORzogJ+WwvOaXpeWIqeS6nicsXG5cdFx0XHROVTogJ+e0kOWfgycsXG5cdFx0XHRORjogJ+irvuemj+WFi+WzticsXG5cdFx0XHRNSzogJ+WMl+mmrOWFtumgkycsXG5cdFx0XHRNUDogJ+WMl+mmrOWIqeWuiee0jee+pOWzticsXG5cdFx0XHROTzogJ+aMquWogScsXG5cdFx0XHRPTTogJ+mYv+abvCcsXG5cdFx0XHRQSzogJ+W3tOWfuuaWr+WdpicsXG5cdFx0XHRQVzogJ+W4leWLnicsXG5cdFx0XHRQUzogJ+W3tOWLkuaWr+WdpicsXG5cdFx0XHRQQTogJ+W3tOaLv+mmrCcsXG5cdFx0XHRQRzogJ+W3tOW4g+S6nuaWsOeVv+WFp+S6nicsXG5cdFx0XHRQWTogJ+W3tOaLieWcrScsXG5cdFx0XHRQRTogJ+enmOmtrycsXG5cdFx0XHRQSDogJ+iPsuW+i+izkycsXG5cdFx0XHRQTjogJ+earueJueiCr+e+pOWzticsXG5cdFx0XHRQTDogJ+azouiYrScsXG5cdFx0XHRQVDogJ+iRoeiQhOeJmScsXG5cdFx0XHRQUjogJ+azouWkmum7juWQhCcsXG5cdFx0XHRRQTogJ+WNoeWhlOeIvicsXG5cdFx0XHRSRTogJ+eVmeWwvOaxqicsXG5cdFx0XHRSTzogJ+e+hemmrOWwvOS6nicsXG5cdFx0XHRSVTogJ+S/hOe+heaWrycsXG5cdFx0XHRSVzogJ+ebp+aXuumBlCcsXG5cdFx0XHRCTDogJ+iBluW3tOazsOWLkuexsycsXG5cdFx0XHRTSDogJ+iBlua1t+WAq+WonOOAgemYv+ajruadvuWSjOeJuemHjOaWr+Wdpi3pgZTluqvlsLzkup4nLFxuXHRcdFx0S046ICfogZbln7rojKjlkozlsLzntq3mlq8nLFxuXHRcdFx0TEM6ICfogZbnm6fopb/kup4nLFxuXHRcdFx0TUY6ICfms5XlsazogZbppqzkuIEnLFxuXHRcdFx0UE06ICfogZbnmq7ln4PniL7lkozlr4blhYvpmoYnLFxuXHRcdFx0VkM6ICfogZbmlofmo67nibnlkozmoLzmnpfntI3kuIHmlq8nLFxuXHRcdFx0V1M6ICfolqnmkankup4nLFxuXHRcdFx0U006ICfogZbppqzlipvoq74nLFxuXHRcdFx0U1Q6ICfogZblpJrnvo7lkozmma7mnpfopb/mr5QnLFxuXHRcdFx0U0E6ICfmspnlnLDpmL/mi4nkvK8nLFxuXHRcdFx0U046ICfloZ7lhafliqDniL4nLFxuXHRcdFx0UlM6ICfloZ7niL7ntq3kup4nLFxuXHRcdFx0U0M6ICfloZ7oiIzniL4nLFxuXHRcdFx0U0w6ICfloZ7mi4nliKnmmIInLFxuXHRcdFx0U0c6ICfmlrDliqDlnaEnLFxuXHRcdFx0U1g6ICfojbflsazogZbppqzkuIEnLFxuXHRcdFx0U0s6ICfmlq/mtJvkvJDlhYsnLFxuXHRcdFx0U0k6ICfmlq/mtJvmloflsLzkup4nLFxuXHRcdFx0U0I6ICfmiYDnvoXploDnvqTls7YnLFxuXHRcdFx0U086ICfntKLppqzph4wnLFxuXHRcdFx0WkE6ICfljZfpnZ4nLFxuXHRcdFx0R1M6ICfljZfllqzmsrvkup7lkozljZfmoZHlqIHlpYfnvqTls7YnLFxuXHRcdFx0U1M6ICfljZfomIfkuLknLFxuXHRcdFx0RVM6ICfopb/nj63niZknLFxuXHRcdFx0TEs6ICfmlq/ph4zomK3ljaEnLFxuXHRcdFx0U0Q6ICfomIfkuLknLFxuXHRcdFx0U1I6ICfomIfph4zljZcnLFxuXHRcdFx0U0o6ICfmlq/nk6bniL7lt7Tlkozmj5rppqzlu7YnLFxuXHRcdFx0U0U6ICfnkZ7lhbgnLFxuXHRcdFx0Q0g6ICfnkZ7lo6snLFxuXHRcdFx0U1k6ICfmlZjliKnkup4nLFxuXHRcdFx0VFc6ICfkuK3lnIvoh7rngaMnLFxuXHRcdFx0VEo6ICfloZTlkInlhYsnLFxuXHRcdFx0VFo6ICflnabmoZHlsLzkup4nLFxuXHRcdFx0VEg6ICfms7DlnIsnLFxuXHRcdFx0VEw6ICfmnbHluJ3msbYnLFxuXHRcdFx0VEc6ICflpJrlk6UnLFxuXHRcdFx0VEs6ICfmiZjlhYvli54nLFxuXHRcdFx0VE86ICfmua/liqAnLFxuXHRcdFx0VFQ6ICfljYPph4zpgZTlkozlpJrlt7Tlk6UnLFxuXHRcdFx0VE46ICfnqoHlsLzopb/kup4nLFxuXHRcdFx0VFI6ICflnJ/ogLPlhbYnLFxuXHRcdFx0VE06ICflnJ/luqvmm7wnLFxuXHRcdFx0VEM6ICfnibnlhYvmlq/lkozlh7Hnp5Hmlq/nvqTls7YnLFxuXHRcdFx0VFY6ICflnJbnk6bnm6cnLFxuXHRcdFx0VUc6ICfng4/lubLpgZQnLFxuXHRcdFx0VUE6ICfng4/lhYvomK0nLFxuXHRcdFx0QUU6ICfpmL/oga/phYsnLFxuXHRcdFx0R0I6ICfoi7HlnIsnLFxuXHRcdFx0VVM6ICfnvo7lnIsnLFxuXHRcdFx0VU06ICfnvo7lnIvmnKzlnJ/lpJblsI/ls7bltrwnLFxuXHRcdFx0VVk6ICfng4/mi4nlnK0nLFxuXHRcdFx0VVo6ICfng4/ojLLliKXlhYsnLFxuXHRcdFx0VlU6ICfnk6bliqrpmL/lnJYnLFxuXHRcdFx0VkU6ICflp5TlhafnkZ7mi4knLFxuXHRcdFx0Vk46ICfotorljZcnLFxuXHRcdFx0Vkc6ICfoi7HlsazomZXlpbPnvqTls7YnLFxuXHRcdFx0Vkk6ICfnvo7lsazomZXlpbPnvqTls7YnLFxuXHRcdFx0V0Y6ICfnk6bliKnmlq/lkozlr4zlnJbntI0nLFxuXHRcdFx0RUg6ICfopb/mkpLlk4jmi4knLFxuXHRcdFx0WUU6ICfkuZ/ploAnLFxuXHRcdFx0Wk06ICfotIrmr5Tkup4nLFxuXHRcdFx0Wlc6ICfmtKXlt7TluIPpn4snLFxuXHRcdH07XG5cdH0gZWxzZSBpZiAoWyd6aC10dyddLmluY2x1ZGVzKHdnVXNlckxhbmd1YWdlKSkge1xuXHRcdHJldHVybiB7XG5cdFx0XHRBRjogJ+mYv+WvjOaxlycsXG5cdFx0XHRBWDogJ+Wlp+iYrScsXG5cdFx0XHRBTDogJ+mYv+eIvuW3tOWwvOS6nicsXG5cdFx0XHREWjogJ+mYv+eIvuWPiuWIqeS6nicsXG5cdFx0XHRBUzogJ+e+juWxrOiWqeaRqeS6nicsXG5cdFx0XHRBRDogJ+WuiemBk+eIvicsXG5cdFx0XHRBTzogJ+WuieWTpeaLiScsXG5cdFx0XHRBSTogJ+WuieWcreaLiScsXG5cdFx0XHRBUTogJ+WNl+altea0sicsXG5cdFx0XHRBRzogJ+WuieWcsOWNoeWPiuW3tOW4g+mBlCcsXG5cdFx0XHRBUjogJ+mYv+agueW7tycsXG5cdFx0XHRBTTogJ+S6nue+juWwvOS6nicsXG5cdFx0XHRBVzogJ+mYv+mtr+W3tCcsXG5cdFx0XHRBVTogJ+a+s+a0sicsXG5cdFx0XHRBVDogJ+Wlp+WcsOWIqScsXG5cdFx0XHRBWjogJ+S6nuWhnuaLnOeEticsXG5cdFx0XHRCUzogJ+W3tOWTiOmmrCcsXG5cdFx0XHRCSDogJ+W3tOaelycsXG5cdFx0XHRCRDogJ+Wtn+WKoOaLieWciycsXG5cdFx0XHRCQjogJ+W3tOiyneWkmicsXG5cdFx0XHRCWTogJ+eZveS/hOe+heaWrycsXG5cdFx0XHRCRTogJ+avlOWIqeaZgicsXG5cdFx0XHRCWjogJ+iynemHjOaWrycsXG5cdFx0XHRCSjogJ+iyneWNlycsXG5cdFx0XHRCTTogJ+eZvuaFlemBlCcsXG5cdFx0XHRCVDogJ+S4jeS4uScsXG5cdFx0XHRCTzogJ+eOu+WIqee2reS6nicsXG5cdFx0XHRCUTogJ+iNt+iYreWKoOWLkuavlOWNgCcsXG5cdFx0XHRCQTogJ+azoui1qycsXG5cdFx0XHRCVzogJ+azouacremCoycsXG5cdFx0XHRCVjogJ+W4g+mfi+WzticsXG5cdFx0XHRCUjogJ+W3tOilvycsXG5cdFx0XHRJTzogJ+iLseWxrOWNsOW6pua0i+mgmOWcsCcsXG5cdFx0XHRCTjogJ+axtuiQiicsXG5cdFx0XHRCRzogJ+S/neWKoOWIqeS6nicsXG5cdFx0XHRCRjogJ+W4g+WQiee0jeazlee0oicsXG5cdFx0XHRCSTogJ+iSsumahuWcsCcsXG5cdFx0XHRDVjogJ+e2reW+t+inkicsXG5cdFx0XHRLSDogJ+afrOWflOWvqCcsXG5cdFx0XHRDTTogJ+WWgOm6pemahicsXG5cdFx0XHRDQTogJ+WKoOaLv+WkpycsXG5cdFx0XHRLWTogJ+mWi+abvOe+pOWzticsXG5cdFx0XHRDRjogJ+S4remdnicsXG5cdFx0XHRURDogJ+afpeW+tycsXG5cdFx0XHRDTDogJ+aZuuWIqScsXG5cdFx0XHRDTjogJ+S4reWciycsXG5cdFx0XHRDWDogJ+iBluiqleWzticsXG5cdFx0XHRDQzogJ+enkeenkeaWr++8iOWfuuael++8iee+pOWzticsXG5cdFx0XHRDTzogJ+WTpeWAq+avlOS6nicsXG5cdFx0XHRLTTogJ+iRm+aRqScsXG5cdFx0XHRDRzogJ+WJm+aenOWFseWSjOWciycsXG5cdFx0XHRDRDogJ+WJm+aenOawkeS4u+WFseWSjOWciycsXG5cdFx0XHRDSzogJ+W6q+WFi+e+pOWzticsXG5cdFx0XHRDUjogJ+WTpeaWr+Wkp+m7juWKoCcsXG5cdFx0XHRDSTogJ+ixoeeJmea1t+WyuCcsXG5cdFx0XHRIUjogJ+WFi+e+heWfg+ilv+S6nicsXG5cdFx0XHRDVTogJ+WPpOW3tCcsXG5cdFx0XHRDVzogJ+WPpOaLiee0oicsXG5cdFx0XHRDWTogJ+izveaZruWLkuaWrycsXG5cdFx0XHRDWjogJ+aNt+WFiycsXG5cdFx0XHRESzogJ+S4uem6pScsXG5cdFx0XHRESjogJ+WQieW4g+WcsCcsXG5cdFx0XHRETTogJ+Wkmuexs+WwvOWFiycsXG5cdFx0XHRETzogJ+WkmuaYjuWwvOWKoCcsXG5cdFx0XHRFQzogJ+WOhOeTnOWkmicsXG5cdFx0XHRFRzogJ+Wfg+WPiicsXG5cdFx0XHRTVjogJ+iWqeeIvueTpuWkmicsXG5cdFx0XHRHUTogJ+i1pOmBk+W5vuWFp+S6nicsXG5cdFx0XHRFUjogJ+WOhOWIqeWeguS6nicsXG5cdFx0XHRFRTogJ+aEm+aymeWwvOS6nicsXG5cdFx0XHRTWjogJ+WPsueTpuW4neWwvCcsXG5cdFx0XHRFVDogJ+iho+e0ouavlOS6nicsXG5cdFx0XHRGSzogJ+emj+WFi+iYree+pOWzticsXG5cdFx0XHRGTzogJ+azlee+hee+pOWzticsXG5cdFx0XHRGSjogJ+aWkOa/nycsXG5cdFx0XHRGSTogJ+iKrOiYrScsXG5cdFx0XHRGUjogJ+azleWciycsXG5cdFx0XHRHRjogJ+azleWxrOWcreS6numCoycsXG5cdFx0XHRQRjogJ+azleWxrOeOu+mHjOWwvOilv+S6nicsXG5cdFx0XHRURjogJ+azleWxrOWNl+mDqOWSjOWNl+altemgmOWcsCcsXG5cdFx0XHRHQTogJ+WKoOW9rScsXG5cdFx0XHRHTTogJ+eUmOavlOS6nicsXG5cdFx0XHRHRTogJ+WWrOayu+S6nicsXG5cdFx0XHRERTogJ+W+t+WciycsXG5cdFx0XHRHSDogJ+i/pue0jScsXG5cdFx0XHRHSTogJ+ebtOW4g+e+hemZgCcsXG5cdFx0XHRHUjogJ+W4jOiHmCcsXG5cdFx0XHRHTDogJ+agvOmZteiYrScsXG5cdFx0XHRHRDogJ+agvOeRnumCo+mBlCcsXG5cdFx0XHRHUDogJ+eTnOW+t+e+heaZricsXG5cdFx0XHRHVTogJ+mXnOWzticsXG5cdFx0XHRHVDogJ+eTnOWcsOmmrOaLiScsXG5cdFx0XHRHRzogJ+agueilvycsXG5cdFx0XHRHTjogJ+W5vuWFp+S6nicsXG5cdFx0XHRHVzogJ+W5vuWFp+S6nuavlOe0oicsXG5cdFx0XHRHWTogJ+iTi+S6numCoycsXG5cdFx0XHRIVDogJ+a1t+WcsCcsXG5cdFx0XHRITTogJ+i1q+W+t+WztuWSjOm6peWFi+WUkOe0jee+pOWzticsXG5cdFx0XHRWQTogJ+aiteiSguWyoScsXG5cdFx0XHRITjogJ+Wuj+mDveaLieaWrycsXG5cdFx0XHRISzogJ+S4reWci+mmmea4rycsXG5cdFx0XHRIVTogJ+WMiOeJmeWIqScsXG5cdFx0XHRJUzogJ+WGsOWzticsXG5cdFx0XHRJTjogJ+WNsOW6picsXG5cdFx0XHRJRDogJ+WNsOWwvCcsXG5cdFx0XHRJUjogJ+S8iuaclycsXG5cdFx0XHRJUTogJ+S8iuaLieWFiycsXG5cdFx0XHRJRTogJ+aEm+eIvuiYrScsXG5cdFx0XHRJTTogJ+abvOWzticsXG5cdFx0XHRJTDogJ+S7peiJsuWIlycsXG5cdFx0XHRJVDogJ+e+qeWkp+WIqScsXG5cdFx0XHRKTTogJ+eJmeiyt+WKoCcsXG5cdFx0XHRKUDogJ+aXpeacrCcsXG5cdFx0XHRKRTogJ+a+pOilvycsXG5cdFx0XHRKTzogJ+e0hOaXpicsXG5cdFx0XHRLWjogJ+WTiOiWqeWFiycsXG5cdFx0XHRLRTogJ+iCr+S6nicsXG5cdFx0XHRLSTogJ+WQiemHjOW3tOaWrycsXG5cdFx0XHRLUDogJ+WMl+mfkycsXG5cdFx0XHRLUjogJ+mfk+WciycsXG5cdFx0XHRLVzogJ+enkeWogeeJuScsXG5cdFx0XHRLRzogJ+WQieeIvuWQieaWrycsXG5cdFx0XHRMQTogJ+iAgeaSvicsXG5cdFx0XHRMVjogJ+aLieiEq+e2reS6nicsXG5cdFx0XHRMQjogJ+m7juW3tOWrqScsXG5cdFx0XHRMUzogJ+iztOe0ouaJmCcsXG5cdFx0XHRMUjogJ+iztOavlOeRnuS6nicsXG5cdFx0XHRMWTogJ+WIqeavlOS6nicsXG5cdFx0XHRMSTogJ+WIl+aUr+aVpuaWr+eZuycsXG5cdFx0XHRMVDogJ+eri+mZtuWumycsXG5cdFx0XHRMVTogJ+ebp+ajruWgoScsXG5cdFx0XHRNTzogJ+S4reWci+a+s+mWgCcsXG5cdFx0XHRNRzogJ+mmrOmBlOWKoOaWr+WKoCcsXG5cdFx0XHRNVzogJ+mmrOaLieWogScsXG5cdFx0XHRNWTogJ+mmrOS+huilv+S6nicsXG5cdFx0XHRNVjogJ+mmrOeIvuWcsOWkqycsXG5cdFx0XHRNTDogJ+mmrOmHjCcsXG5cdFx0XHRNVDogJ+mmrOeIvuS7licsXG5cdFx0XHRNSDogJ+mmrOe0ueeIvue+pOWzticsXG5cdFx0XHRNUTogJ+mmrOaPkOWwvOWFiycsXG5cdFx0XHRNUjogJ+iMheWIqeWhlOWwvOS6nicsXG5cdFx0XHRNVTogJ+aooemHjOilv+aWrycsXG5cdFx0XHRZVDogJ+mmrOe0hOeJuScsXG5cdFx0XHRNWDogJ+WiqOilv+WTpScsXG5cdFx0XHRGTTogJ+WvhuWFi+e+heWwvOilv+S6nuiBr+mCpicsXG5cdFx0XHRNRDogJ+aRqeeIvuWkmueTpicsXG5cdFx0XHRNQzogJ+aRqee0jeWTpScsXG5cdFx0XHRNTjogJ+iSmeWPpCcsXG5cdFx0XHRNRTogJ+iSmeeJueWFp+WTpee+hScsXG5cdFx0XHRNUzogJ+iSmeWTsuiHmCcsXG5cdFx0XHRNQTogJ+aRqea0m+WTpScsXG5cdFx0XHRNWjogJ+iOq+S4ieavlOWFiycsXG5cdFx0XHRNTTogJ+e3rOeUuCcsXG5cdFx0XHROQTogJ+e0jeexs+avlOS6nicsXG5cdFx0XHROUjogJ+irvumtrycsXG5cdFx0XHROUDogJ+WwvOaziueIvicsXG5cdFx0XHROTDogJ+iNt+iYrScsXG5cdFx0XHROQzogJ+aWsOWWgOmHjOWkmuWwvOS6nicsXG5cdFx0XHROWjogJ+e0kOilv+iYrScsXG5cdFx0XHROSTogJ+WwvOWKoOaLieeTnCcsXG5cdFx0XHRORTogJ+WwvOaXpScsXG5cdFx0XHRORzogJ+WliOWPiuWIqeS6nicsXG5cdFx0XHROVTogJ+e0kOWfgycsXG5cdFx0XHRORjogJ+irvuemj+WFi+WzticsXG5cdFx0XHRNSzogJ+WMl+mmrOWFtumgkycsXG5cdFx0XHRNUDogJ+WMl+mmrOWIqeWuiee0jee+pOWzticsXG5cdFx0XHROTzogJ+aMquWogScsXG5cdFx0XHRPTTogJ+mYv+abvCcsXG5cdFx0XHRQSzogJ+W3tOWfuuaWr+WdpicsXG5cdFx0XHRQVzogJ+W4m+eQiScsXG5cdFx0XHRQUzogJ+W3tOWLkuaWr+WdpicsXG5cdFx0XHRQQTogJ+W3tOaLv+mmrCcsXG5cdFx0XHRQRzogJ+W3tOW4g+S6nue0kOW5vuWFp+S6nicsXG5cdFx0XHRQWTogJ+W3tOaLieWcrScsXG5cdFx0XHRQRTogJ+enmOmtrycsXG5cdFx0XHRQSDogJ+iPsuW+i+izkycsXG5cdFx0XHRQTjogJ+earueJueiCr+e+pOWzticsXG5cdFx0XHRQTDogJ+azouiYrScsXG5cdFx0XHRQVDogJ+iRoeiQhOeJmScsXG5cdFx0XHRQUjogJ+azouWkmum7juWQhCcsXG5cdFx0XHRRQTogJ+WNoemBlCcsXG5cdFx0XHRSRTogJ+eVmeWwvOaXuicsXG5cdFx0XHRSTzogJ+e+hemmrOWwvOS6nicsXG5cdFx0XHRSVTogJ+S/hOe+heaWrycsXG5cdFx0XHRSVzogJ+ebp+WuiemBlCcsXG5cdFx0XHRCTDogJ+iBluW3tOazsOWLkuexsycsXG5cdFx0XHRTSDogJ+iBlua1t+iTruWonOOAgemYv+ajruadvuWSjOeJuemHjOaWr+Wdpi3pgZTluqvlsLzkup4nLFxuXHRcdFx0S046ICfogZblhYvph4zmlq/lpJrnpo/lj4rlsLzntq3mlq8nLFxuXHRcdFx0TEM6ICfogZbpnLLopb/kup4nLFxuXHRcdFx0TUY6ICfms5XlsazogZbppqzkuIEnLFxuXHRcdFx0UE06ICfogZbnmq7ogLboiIflr4blhYvpmoYnLFxuXHRcdFx0VkM6ICfogZbmlofmo67lj4rmoLznkZ7pgqPkuIEnLFxuXHRcdFx0V1M6ICfolqnmkankup4nLFxuXHRcdFx0U006ICfogZbppqzliKnoq74nLFxuXHRcdFx0U1Q6ICfogZblpJrnvo7mma7mnpfopb/mr5QnLFxuXHRcdFx0U0E6ICfmspnng4/lnLDpmL/mi4nkvK8nLFxuXHRcdFx0U046ICfloZ7lhafliqDniL4nLFxuXHRcdFx0UlM6ICfloZ7niL7ntq3kup4nLFxuXHRcdFx0U0M6ICfloZ7luK3niL4nLFxuXHRcdFx0U0w6ICfnjYXlrZDlsbEnLFxuXHRcdFx0U0c6ICfmlrDliqDlnaEnLFxuXHRcdFx0U1g6ICfojbflsazogZbppqzkuIEnLFxuXHRcdFx0U0s6ICfmlq/mtJvkvJDlhYsnLFxuXHRcdFx0U0k6ICfmlq/mtJvntq3lsLzkup4nLFxuXHRcdFx0U0I6ICfntKLnvoXploDnvqTls7YnLFxuXHRcdFx0U086ICfntKLppqzliKnkup4nLFxuXHRcdFx0WkE6ICfljZfpnZ4nLFxuXHRcdFx0R1M6ICfljZfllqzmsrvkup7lkozljZfmoZHlqIHlpYfnvqTls7YnLFxuXHRcdFx0U1M6ICfljZfomIfkuLknLFxuXHRcdFx0RVM6ICfopb/nj63niZknLFxuXHRcdFx0TEs6ICfmlq/ph4zomK3ljaEnLFxuXHRcdFx0U0Q6ICfomIfkuLknLFxuXHRcdFx0U1I6ICfomIfliKnljZcnLFxuXHRcdFx0U0o6ICfmlq/nk6bniL7lt7Tlkozmj5rppqzlu7YnLFxuXHRcdFx0U0U6ICfnkZ7lhbgnLFxuXHRcdFx0Q0g6ICfnkZ7lo6snLFxuXHRcdFx0U1k6ICfmlZjliKnkup4nLFxuXHRcdFx0VFc6ICfkuK3lnIvoh7rngaMnLFxuXHRcdFx0VEo6ICfloZTlkInlhYsnLFxuXHRcdFx0VFo6ICflnablsJrlsLzkup4nLFxuXHRcdFx0VEg6ICfms7DlnIsnLFxuXHRcdFx0VEw6ICfmnbHluJ3msbYnLFxuXHRcdFx0VEc6ICflpJrlk6UnLFxuXHRcdFx0VEs6ICfmiZjlhYvli54nLFxuXHRcdFx0VE86ICfmnbHliqAnLFxuXHRcdFx0VFQ6ICfljYPph4zpgZTlj4rmiZjlt7Tlk6UnLFxuXHRcdFx0VE46ICfnqoHlsLzopb/kup4nLFxuXHRcdFx0VFI6ICflnJ/ogLPlhbYnLFxuXHRcdFx0VE06ICflnJ/luqvmm7wnLFxuXHRcdFx0VEM6ICflnJ/lhYvlh7Hlj6/nvqTls7YnLFxuXHRcdFx0VFY6ICflkJDnk6bpra8nLFxuXHRcdFx0VUc6ICfng4/lubLpgZQnLFxuXHRcdFx0VUE6ICfng4/lhYvomK0nLFxuXHRcdFx0QUU6ICfpmL/oga8nLFxuXHRcdFx0R0I6ICfoi7HlnIsnLFxuXHRcdFx0VVM6ICfnvo7lnIsnLFxuXHRcdFx0VU06ICfnvo7lnIvmnKzlnJ/lpJblsI/ls7bltrwnLFxuXHRcdFx0VVk6ICfng4/mi4nlnK0nLFxuXHRcdFx0VVo6ICfng4/ojLLliKXlhYsnLFxuXHRcdFx0VlU6ICfokKzpgqPmnZwnLFxuXHRcdFx0VkU6ICflp5TlhafnkZ7mi4knLFxuXHRcdFx0Vk46ICfotorljZcnLFxuXHRcdFx0Vkc6ICfoi7Hlsazntq3kuqznvqTls7YnLFxuXHRcdFx0Vkk6ICfnvo7lsazntq3kuqznvqTls7YnLFxuXHRcdFx0V0Y6ICfnk6bliKnmlq/lkozlr4zlnJbntI0nLFxuXHRcdFx0RUg6ICfopb/mkpLlk4jmi4knLFxuXHRcdFx0WUU6ICfokYnploAnLFxuXHRcdFx0Wk06ICflsJrmr5Tkup4nLFxuXHRcdFx0Wlc6ICfovpvlt7TlqIEnLFxuXHRcdH07XG5cdH0gZWxzZSBpZiAoWyd6aC1teScsICd6aC1zZyddLmluY2x1ZGVzKHdnVXNlckxhbmd1YWdlKSkge1xuXHRcdHJldHVybiB7XG5cdFx0XHRBRjogJ+mYv+WvjOaxlycsXG5cdFx0XHRBWDogJ+WlpeWFsCcsXG5cdFx0XHRBTDogJ+mYv+WwlOW3tOWwvOS6micsXG5cdFx0XHREWjogJ+mYv+WwlOWPiuWIqeS6micsXG5cdFx0XHRBUzogJ+e+juWxnuiQqOaRqeS6micsXG5cdFx0XHRBRDogJ+WuiemBk+WwlCcsXG5cdFx0XHRBTzogJ+WuieWTpeaLiScsXG5cdFx0XHRBSTogJ+WuieWcreaLiScsXG5cdFx0XHRBUTogJ+WNl+aegea0sicsXG5cdFx0XHRBRzogJ+WuieaPkOeTnOWSjOW3tOW4g+i+vicsXG5cdFx0XHRBUjogJ+mYv+agueW7tycsXG5cdFx0XHRBTTogJ+S6mue+juWwvOS6micsXG5cdFx0XHRBVzogJ+mYv+mygeW3tCcsXG5cdFx0XHRBVTogJ+a+s+Wkp+WIqeS6micsXG5cdFx0XHRBVDogJ+WlpeWcsOWIqScsXG5cdFx0XHRBWjogJ+mYv+WhnuaLnOeWhicsXG5cdFx0XHRCUzogJ+W3tOWTiOmprCcsXG5cdFx0XHRCSDogJ+W3tOaelycsXG5cdFx0XHRCRDogJ+Wtn+WKoOaLieWbvScsXG5cdFx0XHRCQjogJ+W3tOW3tOWkmuaWrycsXG5cdFx0XHRCWTogJ+eZveS/hOe9l+aWrycsXG5cdFx0XHRCRTogJ+avlOWIqeaXticsXG5cdFx0XHRCWjogJ+S8r+WIqeWFuScsXG5cdFx0XHRCSjogJ+i0neWugScsXG5cdFx0XHRCTTogJ+eZvuaFleWkpycsXG5cdFx0XHRCVDogJ+S4jeS4uScsXG5cdFx0XHRCTzogJ+eOu+WIqee7tOS6micsXG5cdFx0XHRCUTogJ+iNt+WFsOWKoOWLkuavlOWMuicsXG5cdFx0XHRCQTogJ+azoum7kScsXG5cdFx0XHRCVzogJ+WNmuiMqOeTpue6sycsXG5cdFx0XHRCVjogJ+W4g+mfpuWymycsXG5cdFx0XHRCUjogJ+W3tOilvycsXG5cdFx0XHRJTzogJ+iLseWxnuWNsOW6pua0i+mihuWcsCcsXG5cdFx0XHRCTjogJ+axtuiOsScsXG5cdFx0XHRCRzogJ+S/neWKoOWIqeS6micsXG5cdFx0XHRCRjogJ+W4g+Wfuue6s+azlee0oicsXG5cdFx0XHRCSTogJ+W4g+mahui/qicsXG5cdFx0XHRDVjogJ+S9m+W+l+inkicsXG5cdFx0XHRLSDogJ+afrOWflOWvqCcsXG5cdFx0XHRDTTogJ+WWgOm6pumahicsXG5cdFx0XHRDQTogJ+WKoOaLv+WkpycsXG5cdFx0XHRLWTogJ+W8gOabvOe+pOWymycsXG5cdFx0XHRDRjogJ+S4remdnicsXG5cdFx0XHRURDogJ+S5jeW+lycsXG5cdFx0XHRDTDogJ+aZuuWIqScsXG5cdFx0XHRDTjogJ+S4reWbvScsXG5cdFx0XHRDWDogJ+Wco+ivnuWymycsXG5cdFx0XHRDQzogJ+enkeenkeaWr++8iOWfuuael++8iee+pOWymycsXG5cdFx0XHRDTzogJ+WTpeS8puavlOS6micsXG5cdFx0XHRLTTogJ+enkeaRqee9lycsXG5cdFx0XHRDRzogJ+WImuaenOWFseWSjOWbvScsXG5cdFx0XHRDRDogJ+WImuaenOawkeS4u+WFseWSjOWbvScsXG5cdFx0XHRDSzogJ+W6k+WFi+e+pOWymycsXG5cdFx0XHRDUjogJ+WTpeaWr+i+vum7juWKoCcsXG5cdFx0XHRDSTogJ+ixoeeJmea1t+WyuCcsXG5cdFx0XHRIUjogJ+WFi+e9l+WcsOS6micsXG5cdFx0XHRDVTogJ+WPpOW3tCcsXG5cdFx0XHRDVzogJ+W6k+aLiee0oicsXG5cdFx0XHRDWTogJ+Whnua1pui3r+aWrycsXG5cdFx0XHRDWjogJ+aNt+WFiycsXG5cdFx0XHRESzogJ+S4uem6picsXG5cdFx0XHRESjogJ+WQieW4g+aPkCcsXG5cdFx0XHRETTogJ+Wkmuexs+WwvOWFiycsXG5cdFx0XHRETzogJ+Wkmuexs+WwvOWKoCcsXG5cdFx0XHRFQzogJ+WOhOeTnOWkmuWwlCcsXG5cdFx0XHRFRzogJ+Wfg+WPiicsXG5cdFx0XHRTVjogJ+iQqOWwlOeTpuWkmicsXG5cdFx0XHRHUTogJ+i1pOmBk+WHoOWGheS6micsXG5cdFx0XHRFUjogJ+WOhOeri+eJuemHjOS6micsXG5cdFx0XHRFRTogJ+eIseaymeWwvOS6micsXG5cdFx0XHRTWjogJ+aWr+WogeWjq+WFsCcsXG5cdFx0XHRFVDogJ+Wfg+WhnuS/hOavlOS6micsXG5cdFx0XHRGSzogJ+emj+WFi+WFsOe+pOWymycsXG5cdFx0XHRGTzogJ+azlee9l+e+pOWymycsXG5cdFx0XHRGSjogJ+aWkOa1jicsXG5cdFx0XHRGSTogJ+iKrOWFsCcsXG5cdFx0XHRGUjogJ+azleWbvScsXG5cdFx0XHRHRjogJ+azleWxnuWcreS6mumCoycsXG5cdFx0XHRQRjogJ+azleWxnuazouWIqeWwvOilv+S6micsXG5cdFx0XHRURjogJ+azleWxnuWNl+mDqOWSjOWNl+aegemihuWcsCcsXG5cdFx0XHRHQTogJ+WKoOiTrCcsXG5cdFx0XHRHTTogJ+WGiOavlOS6micsXG5cdFx0XHRHRTogJ+agvOmygeWQieS6micsXG5cdFx0XHRERTogJ+W+t+WbvScsXG5cdFx0XHRHSDogJ+WKoOe6sycsXG5cdFx0XHRHSTogJ+ebtOW4g+e9l+mZgCcsXG5cdFx0XHRHUjogJ+W4jOiFiicsXG5cdFx0XHRHTDogJ+agvOmZteWFsCcsXG5cdFx0XHRHRDogJ+agvOael+e6s+i+vicsXG5cdFx0XHRHUDogJ+eTnOW+t+e9l+aZricsXG5cdFx0XHRHVTogJ+WFs+WymycsXG5cdFx0XHRHVDogJ+WNseWcsOmprOaLiScsXG5cdFx0XHRHRzogJ+agueilvycsXG5cdFx0XHRHTjogJ+WHoOWGheS6micsXG5cdFx0XHRHVzogJ+WHoOWGheS6muavlOe7jScsXG5cdFx0XHRHWTogJ+WcreS6mumCoycsXG5cdFx0XHRIVDogJ+a1t+WcsCcsXG5cdFx0XHRITTogJ+i1q+W+t+Wym+WSjOm6puWFi+WUkOe6s+e+pOWymycsXG5cdFx0XHRWQTogJ+aiteiSguWGiCcsXG5cdFx0XHRITjogJ+a0qumDveaLieaWrycsXG5cdFx0XHRISzogJ+S4reWbvemmmea4rycsXG5cdFx0XHRIVTogJ+WMiOeJmeWIqScsXG5cdFx0XHRJUzogJ+WGsOWymycsXG5cdFx0XHRJTjogJ+WNsOW6picsXG5cdFx0XHRJRDogJ+WNsOWwvCcsXG5cdFx0XHRJUjogJ+S8iuaclycsXG5cdFx0XHRJUTogJ+S8iuaLieWFiycsXG5cdFx0XHRJRTogJ+eIseWwlOWFsCcsXG5cdFx0XHRJTTogJ+mprOaBqeWymycsXG5cdFx0XHRJTDogJ+S7peiJsuWIlycsXG5cdFx0XHRJVDogJ+aEj+Wkp+WIqScsXG5cdFx0XHRKTTogJ+eJmeS5sOWKoCcsXG5cdFx0XHRKUDogJ+aXpeacrCcsXG5cdFx0XHRKRTogJ+azveilvycsXG5cdFx0XHRKTzogJ+e6puaXpicsXG5cdFx0XHRLWjogJ+WTiOiQqOWFi+aWr+WdpicsXG5cdFx0XHRLRTogJ+iCr+WwvOS6micsXG5cdFx0XHRLSTogJ+WfuumHjOW3tOaWrycsXG5cdFx0XHRLUDogJ+WMl+mfqScsXG5cdFx0XHRLUjogJ+mfqeWbvScsXG5cdFx0XHRLVzogJ+enkeWogeeJuScsXG5cdFx0XHRLRzogJ+WQieWwlOWQieaWr+aWr+WdpicsXG5cdFx0XHRMQTogJ+iAgeaMnScsXG5cdFx0XHRMVjogJ+aLieiEsee7tOS6micsXG5cdFx0XHRMQjogJ+m7juW3tOWrqScsXG5cdFx0XHRMUzogJ+iOsee0ouaJmCcsXG5cdFx0XHRMUjogJ+WIqeavlOmHjOS6micsXG5cdFx0XHRMWTogJ+WIqeavlOS6micsXG5cdFx0XHRMSTogJ+WIl+aUr+aVpuWjq+eZuycsXG5cdFx0XHRMVDogJ+eri+mZtuWumycsXG5cdFx0XHRMVTogJ+WNouajruWgoScsXG5cdFx0XHRNTzogJ+S4reWbvea+s+mXqCcsXG5cdFx0XHRNRzogJ+mprOi+vuWKoOaWr+WKoCcsXG5cdFx0XHRNVzogJ+mprOaLiee7tCcsXG5cdFx0XHRNWTogJ+mprOadpeilv+S6micsXG5cdFx0XHRNVjogJ+mprOWwlOS7o+WkqycsXG5cdFx0XHRNTDogJ+mprOmHjCcsXG5cdFx0XHRNVDogJ+mprOiAs+S7licsXG5cdFx0XHRNSDogJ+mprOe7jeWwlOe+pOWymycsXG5cdFx0XHRNUTogJ+mprOaPkOWwvOWFiycsXG5cdFx0XHRNUjogJ+avm+mHjOWhlOWwvOS6micsXG5cdFx0XHRNVTogJ+avm+mHjOaxguaWrycsXG5cdFx0XHRZVDogJ+mprOe6pueJuScsXG5cdFx0XHRNWDogJ+WiqOilv+WTpScsXG5cdFx0XHRGTTogJ+WvhuWFi+e9l+WwvOilv+S6muiBlOmCpicsXG5cdFx0XHRNRDogJ+aRqeWwlOWkmueTpicsXG5cdFx0XHRNQzogJ+aRqee6s+WTpScsXG5cdFx0XHRNTjogJ+iSmeWPpCcsXG5cdFx0XHRNRTogJ+m7keWxsScsXG5cdFx0XHRNUzogJ+iSmeeJueWhnuaLieeJuScsXG5cdFx0XHRNQTogJ+aRqea0m+WTpScsXG5cdFx0XHRNWjogJ+iOq+ahkeavlOWFiycsXG5cdFx0XHRNTTogJ+e8heeUuCcsXG5cdFx0XHROQTogJ+mCo+exs+avlOS6micsXG5cdFx0XHROUjogJ+eRmemygScsXG5cdFx0XHROUDogJ+WwvOaziuWwlCcsXG5cdFx0XHROTDogJ+iNt+WFsCcsXG5cdFx0XHROQzogJ+aWsOWWgOmHjOWkmuWwvOS6micsXG5cdFx0XHROWjogJ+aWsOilv+WFsCcsXG5cdFx0XHROSTogJ+WwvOWKoOaLieeTnCcsXG5cdFx0XHRORTogJ+WwvOaXpeWwlCcsXG5cdFx0XHRORzogJ+WwvOaXpeWIqeS6micsXG5cdFx0XHROVTogJ+e6veWfgycsXG5cdFx0XHRORjogJ+ivuuemj+WFi+WymycsXG5cdFx0XHRNSzogJ+WMl+mprOWFtumhvycsXG5cdFx0XHRNUDogJ+WMl+mprOmHjOS6mue6s+e+pOWymycsXG5cdFx0XHROTzogJ+aMquWogScsXG5cdFx0XHRPTTogJ+mYv+abvCcsXG5cdFx0XHRQSzogJ+W3tOWfuuaWr+WdpicsXG5cdFx0XHRQVzogJ+W4leWKsycsXG5cdFx0XHRQUzogJ+W3tOWLkuaWr+WdpicsXG5cdFx0XHRQQTogJ+W3tOaLv+mprCcsXG5cdFx0XHRQRzogJ+W3tOW4g+S6muaWsOWHoOWGheS6micsXG5cdFx0XHRQWTogJ+W3tOaLieWcrScsXG5cdFx0XHRQRTogJ+enmOmygScsXG5cdFx0XHRQSDogJ+iPsuW+i+WuvicsXG5cdFx0XHRQTjogJ+earueJueWHr+aBqee+pOWymycsXG5cdFx0XHRQTDogJ+azouWFsCcsXG5cdFx0XHRQVDogJ+iRoeiQhOeJmScsXG5cdFx0XHRQUjogJ+azouWkmum7juWQhCcsXG5cdFx0XHRRQTogJ+WNoeWhlOWwlCcsXG5cdFx0XHRSRTogJ+eVmeWwvOaxqicsXG5cdFx0XHRSTzogJ+e9l+mprOWwvOS6micsXG5cdFx0XHRSVTogJ+S/hOe9l+aWrycsXG5cdFx0XHRSVzogJ+WNouaXuui+vicsXG5cdFx0XHRCTDogJ+Wco+W3tOazsOWLkuexsycsXG5cdFx0XHRTSDogJ+Wco+i1q+WLkuaLv+OAgemYv+ajruadvuWSjOeJuemHjOaWr+Wdpi3ovr7lupPlsLzkuponLFxuXHRcdFx0S046ICflnKPln7rojKjlkozlsLznu7Tmlq8nLFxuXHRcdFx0TEM6ICflnKPljaLopb/kuponLFxuXHRcdFx0TUY6ICfms5XlsZ7lnKPpqazkuIEnLFxuXHRcdFx0UE06ICflnKPnmq7ln4PlsJTlkozlr4blhYvpmoYnLFxuXHRcdFx0VkM6ICflnKPmlofmo67nibnlkozmoLzmnpfnurPkuIHmlq8nLFxuXHRcdFx0V1M6ICfokKjmkankuponLFxuXHRcdFx0U006ICflnKPpqazlipvor7onLFxuXHRcdFx0U1Q6ICflnKPlpJrnvo7lkozmma7mnpfopb/mr5QnLFxuXHRcdFx0U0E6ICfmspnnibnpmL/mi4nkvK8nLFxuXHRcdFx0U046ICfloZ7lhoXliqDlsJQnLFxuXHRcdFx0UlM6ICfloZ7lsJTnu7TkuponLFxuXHRcdFx0U0M6ICfloZ7oiIzlsJQnLFxuXHRcdFx0U0w6ICfloZ7mi4nliKnmmIInLFxuXHRcdFx0U0c6ICfmlrDliqDlnaEnLFxuXHRcdFx0U1g6ICfojbflsZ7lnKPpqazkuIEnLFxuXHRcdFx0U0s6ICfmlq/mtJvkvJDlhYsnLFxuXHRcdFx0U0k6ICfmlq/mtJvmloflsLzkuponLFxuXHRcdFx0U0I6ICfmiYDnvZfpl6jnvqTlspsnLFxuXHRcdFx0U086ICfntKLpqazph4wnLFxuXHRcdFx0WkE6ICfljZfpnZ4nLFxuXHRcdFx0R1M6ICfljZfkuZTmsrvkuprlkozljZfmoZHlqIHlpYfnvqTlspsnLFxuXHRcdFx0U1M6ICfljZfoi4/kuLknLFxuXHRcdFx0RVM6ICfopb/nj63niZknLFxuXHRcdFx0TEs6ICfmlq/ph4zlhbDljaEnLFxuXHRcdFx0U0Q6ICfoi4/kuLknLFxuXHRcdFx0U1I6ICfoi4/ph4zljZcnLFxuXHRcdFx0U0o6ICfmlq/nk6blsJTlt7Tlkozmiazpqazlu7YnLFxuXHRcdFx0U0U6ICfnkZ7lhbgnLFxuXHRcdFx0Q0g6ICfnkZ7lo6snLFxuXHRcdFx0U1k6ICflj5nliKnkuponLFxuXHRcdFx0VFc6ICfkuK3lm73lj7Dmub4nLFxuXHRcdFx0VEo6ICfloZTlkInlhYvmlq/lnaYnLFxuXHRcdFx0VFo6ICflnabmoZHlsLzkuponLFxuXHRcdFx0VEg6ICfms7Dlm70nLFxuXHRcdFx0VEw6ICfkuJzluJ3msbYnLFxuXHRcdFx0VEc6ICflpJrlk6UnLFxuXHRcdFx0VEs6ICfmiZjlhYvlirMnLFxuXHRcdFx0VE86ICfmsaTliqAnLFxuXHRcdFx0VFQ6ICfnibnnq4vlsLzovr7lkozlpJrlt7Tlk6UnLFxuXHRcdFx0VE46ICfnqoHlsLzmlq8nLFxuXHRcdFx0VFI6ICflnJ/ogLPlhbYnLFxuXHRcdFx0VE06ICflnJ/lupPmm7zmlq/lnaYnLFxuXHRcdFx0VEM6ICfnibnlhYvmlq/lkozlh6/np5Hmlq/nvqTlspsnLFxuXHRcdFx0VFY6ICflm77nk6bljaInLFxuXHRcdFx0VUc6ICfkuYzlubLovr4nLFxuXHRcdFx0VUE6ICfkuYzlhYvlhbAnLFxuXHRcdFx0QUU6ICfpmL/ogZTphYsnLFxuXHRcdFx0R0I6ICfoi7Hlm70nLFxuXHRcdFx0VVM6ICfnvo7lm70nLFxuXHRcdFx0VU06ICfnvo7lm73mnKzlnJ/lpJblsI/lspvlsb8nLFxuXHRcdFx0VVk6ICfkuYzmi4nlnK0nLFxuXHRcdFx0VVo6ICfkuYzlhbnliKvlhYvmlq/lnaYnLFxuXHRcdFx0VlU6ICfnk6bliqrpmL/lm74nLFxuXHRcdFx0VkU6ICflp5TlhoXnkZ7mi4knLFxuXHRcdFx0Vk46ICfotorljZcnLFxuXHRcdFx0Vkc6ICfoi7HlsZ7nu7TlsJTkuqznvqTlspsnLFxuXHRcdFx0Vkk6ICfnvo7lsZ7nu7TlsJTkuqznvqTlspsnLFxuXHRcdFx0V0Y6ICfnk6bliKnmlq/lkozlr4zlm77nurMnLFxuXHRcdFx0RUg6ICfopb/mkpLlk4jmi4knLFxuXHRcdFx0WUU6ICfkuZ/pl6gnLFxuXHRcdFx0Wk06ICfotZ7mr5TkuponLFxuXHRcdFx0Wlc6ICfmtKXlt7TluIPpn6YnLFxuXHRcdH07XG5cdH1cblxuXHRyZXR1cm4ge1xuXHRcdEFGOiAn6Zi/5a+M5rGXJyxcblx0XHRBWDogJ+WlpeWFsCcsXG5cdFx0QUw6ICfpmL/lsJTlt7TlsLzkuponLFxuXHRcdERaOiAn6Zi/5bCU5Y+K5Yip5LqaJyxcblx0XHRBUzogJ+e+juWxnuiQqOaRqeS6micsXG5cdFx0QUQ6ICflronpgZPlsJQnLFxuXHRcdEFPOiAn5a6J5ZOl5ouJJyxcblx0XHRBSTogJ+WuieWcreaLiScsXG5cdFx0QVE6ICfljZfmnoHmtLInLFxuXHRcdEFHOiAn5a6J5o+Q55Oc5ZKM5be05biD6L6+Jyxcblx0XHRBUjogJ+mYv+agueW7tycsXG5cdFx0QU06ICfkuprnvo7lsLzkuponLFxuXHRcdEFXOiAn6Zi/6bKB5be0Jyxcblx0XHRBVTogJ+a+s+Wkp+WIqeS6micsXG5cdFx0QVQ6ICflpaXlnLDliKknLFxuXHRcdEFaOiAn6Zi/5aGe5ouc55aGJyxcblx0XHRCUzogJ+W3tOWTiOmprCcsXG5cdFx0Qkg6ICflt7TmnpcnLFxuXHRcdEJEOiAn5a2f5Yqg5ouJ5Zu9Jyxcblx0XHRCQjogJ+W3tOW3tOWkmuaWrycsXG5cdFx0Qlk6ICfnmb3kv4TnvZfmlq8nLFxuXHRcdEJFOiAn5q+U5Yip5pe2Jyxcblx0XHRCWjogJ+S8r+WIqeWFuScsXG5cdFx0Qko6ICfotJ3lroEnLFxuXHRcdEJNOiAn55m+5oWV5aSnJyxcblx0XHRCVDogJ+S4jeS4uScsXG5cdFx0Qk86ICfnjrvliKnnu7TkuponLFxuXHRcdEJROiAn6I235YWw5Yqg5YuS5q+U5Yy6Jyxcblx0XHRCQTogJ+azoum7kScsXG5cdFx0Qlc6ICfljZrojKjnk6bnurMnLFxuXHRcdEJWOiAn5biD6Z+m5bKbJyxcblx0XHRCUjogJ+W3tOilvycsXG5cdFx0SU86ICfoi7HlsZ7ljbDluqbmtIvpooblnLAnLFxuXHRcdEJOOiAn5paH6I6xJyxcblx0XHRCRzogJ+S/neWKoOWIqeS6micsXG5cdFx0QkY6ICfluIPln7rnurPms5XntKInLFxuXHRcdEJJOiAn5biD6ZqG6L+qJyxcblx0XHRDVjogJ+S9m+W+l+inkicsXG5cdFx0S0g6ICfmn6zln5Tlr6gnLFxuXHRcdENNOiAn5ZaA6bqm6ZqGJyxcblx0XHRDQTogJ+WKoOaLv+WkpycsXG5cdFx0S1k6ICflvIDmm7znvqTlspsnLFxuXHRcdENGOiAn5Lit6Z2eJyxcblx0XHRURDogJ+S5jeW+lycsXG5cdFx0Q0w6ICfmmbrliKknLFxuXHRcdENOOiAn5Lit5Zu9Jyxcblx0XHRDWDogJ+Wco+ivnuWymycsXG5cdFx0Q0M6ICfnp5Hnp5Hmlq/vvIjln7rmnpfvvInnvqTlspsnLFxuXHRcdENPOiAn5ZOl5Lym5q+U5LqaJyxcblx0XHRLTTogJ+enkeaRqee9lycsXG5cdFx0Q0c6ICfliJrmnpzlhbHlkozlm70nLFxuXHRcdENEOiAn5Yia5p6c5rCR5Li75YWx5ZKM5Zu9Jyxcblx0XHRDSzogJ+W6k+WFi+e+pOWymycsXG5cdFx0Q1I6ICflk6Xmlq/ovr7pu47liqAnLFxuXHRcdENJOiAn56eR54m56L+q55OmJyxcblx0XHRIUjogJ+WFi+e9l+WcsOS6micsXG5cdFx0Q1U6ICflj6Tlt7QnLFxuXHRcdENXOiAn5bqT5ouJ57SiJyxcblx0XHRDWTogJ+Whnua1pui3r+aWrycsXG5cdFx0Q1o6ICfmjbflhYsnLFxuXHRcdERLOiAn5Li56bqmJyxcblx0XHRESjogJ+WQieW4g+aPkCcsXG5cdFx0RE06ICflpJrnsbPlsLzlhYsnLFxuXHRcdERPOiAn5aSa57Gz5bC85YqgJyxcblx0XHRFQzogJ+WOhOeTnOWkmuWwlCcsXG5cdFx0RUc6ICfln4Plj4onLFxuXHRcdFNWOiAn6JCo5bCU55Om5aSaJyxcblx0XHRHUTogJ+i1pOmBk+WHoOWGheS6micsXG5cdFx0RVI6ICfljoTnq4vnibnph4zkuponLFxuXHRcdEVFOiAn54ix5rKZ5bC85LqaJyxcblx0XHRTWjogJ+aWr+WogeWjq+WFsCcsXG5cdFx0RVQ6ICfln4PloZ7kv4Tmr5TkuponLFxuXHRcdEZLOiAn56aP5YWL5YWw576k5bKbJyxcblx0XHRGTzogJ+azlee9l+e+pOWymycsXG5cdFx0Rko6ICfmlpDmtY4nLFxuXHRcdEZJOiAn6Iqs5YWwJyxcblx0XHRGUjogJ+azleWbvScsXG5cdFx0R0Y6ICfms5XlsZ7lnK3kuprpgqMnLFxuXHRcdFBGOiAn5rOV5bGe5rOi5Yip5bC86KW/5LqaJyxcblx0XHRURjogJ+azleWxnuWNl+mDqOWSjOWNl+aegemihuWcsCcsXG5cdFx0R0E6ICfliqDok6wnLFxuXHRcdEdNOiAn5YaI5q+U5LqaJyxcblx0XHRHRTogJ+agvOmygeWQieS6micsXG5cdFx0REU6ICflvrflm70nLFxuXHRcdEdIOiAn5Yqg57qzJyxcblx0XHRHSTogJ+ebtOW4g+e9l+mZgCcsXG5cdFx0R1I6ICfluIzohYonLFxuXHRcdEdMOiAn5qC86Zm15YWwJyxcblx0XHRHRDogJ+agvOael+e6s+i+vicsXG5cdFx0R1A6ICfnk5zlvrfnvZfmma4nLFxuXHRcdEdVOiAn5YWz5bKbJyxcblx0XHRHVDogJ+WNseWcsOmprOaLiScsXG5cdFx0R0c6ICfmoLnopb8nLFxuXHRcdEdOOiAn5Yeg5YaF5LqaJyxcblx0XHRHVzogJ+WHoOWGheS6muavlOe7jScsXG5cdFx0R1k6ICflnK3kuprpgqMnLFxuXHRcdEhUOiAn5rW35ZywJyxcblx0XHRITTogJ+i1q+W+t+Wym+WSjOm6puWFi+WUkOe6s+e+pOWymycsXG5cdFx0VkE6ICfmorXokoLlhognLFxuXHRcdEhOOiAn5rSq6YO95ouJ5pavJyxcblx0XHRISzogJ+S4reWbvemmmea4rycsXG5cdFx0SFU6ICfljIjniZnliKknLFxuXHRcdElTOiAn5Yaw5bKbJyxcblx0XHRJTjogJ+WNsOW6picsXG5cdFx0SUQ6ICfljbDlsLwnLFxuXHRcdElSOiAn5LyK5pyXJyxcblx0XHRJUTogJ+S8iuaLieWFiycsXG5cdFx0SUU6ICfniLHlsJTlhbAnLFxuXHRcdElNOiAn6ams5oGp5bKbJyxcblx0XHRJTDogJ+S7peiJsuWIlycsXG5cdFx0SVQ6ICfmhI/lpKfliKknLFxuXHRcdEpNOiAn54mZ5Lmw5YqgJyxcblx0XHRKUDogJ+aXpeacrCcsXG5cdFx0SkU6ICfms73opb8nLFxuXHRcdEpPOiAn57qm5pemJyxcblx0XHRLWjogJ+WTiOiQqOWFi+aWr+WdpicsXG5cdFx0S0U6ICfogq/lsLzkuponLFxuXHRcdEtJOiAn5Z+66YeM5be05pavJyxcblx0XHRLUDogJ+acnemynCcsXG5cdFx0S1I6ICfpn6nlm70nLFxuXHRcdEtXOiAn56eR5aiB54m5Jyxcblx0XHRLRzogJ+WQieWwlOWQieaWr+aWr+WdpicsXG5cdFx0TEE6ICfogIHmjJ0nLFxuXHRcdExWOiAn5ouJ6ISx57u05LqaJyxcblx0XHRMQjogJ+m7juW3tOWrqScsXG5cdFx0TFM6ICfojrHntKLmiZgnLFxuXHRcdExSOiAn5Yip5q+U6YeM5LqaJyxcblx0XHRMWTogJ+WIqeavlOS6micsXG5cdFx0TEk6ICfliJfmlK/mlablo6vnmbsnLFxuXHRcdExUOiAn56uL6Zm25a6bJyxcblx0XHRMVTogJ+WNouajruWgoScsXG5cdFx0TU86ICfkuK3lm73mvrPpl6gnLFxuXHRcdE1HOiAn6ams6L6+5Yqg5pav5YqgJyxcblx0XHRNVzogJ+mprOaLiee7tCcsXG5cdFx0TVk6ICfpqazmnaXopb/kuponLFxuXHRcdE1WOiAn6ams5bCU5Luj5aSrJyxcblx0XHRNTDogJ+mprOmHjCcsXG5cdFx0TVQ6ICfpqazogLPku5YnLFxuXHRcdE1IOiAn6ams57uN5bCU576k5bKbJyxcblx0XHRNUTogJ+mprOaPkOWwvOWFiycsXG5cdFx0TVI6ICfmr5vph4zloZTlsLzkuponLFxuXHRcdE1VOiAn5q+b6YeM5rGC5pavJyxcblx0XHRZVDogJ+mprOe6pueJuScsXG5cdFx0TVg6ICfloqjopb/lk6UnLFxuXHRcdEZNOiAn5a+G5YWL572X5bC86KW/5Lqa6IGU6YKmJyxcblx0XHRNRDogJ+aRqeWwlOWkmueTpicsXG5cdFx0TUM6ICfmkannurPlk6UnLFxuXHRcdE1OOiAn6JKZ5Y+kJyxcblx0XHRNRTogJ+m7keWxsScsXG5cdFx0TVM6ICfokpnnibnloZ7mi4nnibknLFxuXHRcdE1BOiAn5pGp5rSb5ZOlJyxcblx0XHRNWjogJ+iOq+ahkeavlOWFiycsXG5cdFx0TU06ICfnvIXnlLgnLFxuXHRcdE5BOiAn57qz57Gz5q+U5LqaJyxcblx0XHROUjogJ+eRmemygScsXG5cdFx0TlA6ICflsLzms4rlsJQnLFxuXHRcdE5MOiAn6I235YWwJyxcblx0XHROQzogJ+aWsOWWgOmHjOWkmuWwvOS6micsXG5cdFx0Tlo6ICfmlrDopb/lhbAnLFxuXHRcdE5JOiAn5bC85Yqg5ouJ55OcJyxcblx0XHRORTogJ+WwvOaXpeWwlCcsXG5cdFx0Tkc6ICflsLzml6XliKnkuponLFxuXHRcdE5VOiAn57q95Z+DJyxcblx0XHRORjogJ+ivuuemj+WFi+WymycsXG5cdFx0TUs6ICfljJfpqazlhbbpob8nLFxuXHRcdE1QOiAn5YyX6ams6YeM5Lqa57qz576k5bKbJyxcblx0XHROTzogJ+aMquWogScsXG5cdFx0T006ICfpmL/mm7wnLFxuXHRcdFBLOiAn5be05Z+65pav5Z2mJyxcblx0XHRQVzogJ+W4leWKsycsXG5cdFx0UFM6ICflt7Tli5Lmlq/lnaYnLFxuXHRcdFBBOiAn5be05ou/6amsJyxcblx0XHRQRzogJ+W3tOW4g+S6muaWsOWHoOWGheS6micsXG5cdFx0UFk6ICflt7Tmi4nlnK0nLFxuXHRcdFBFOiAn56eY6bKBJyxcblx0XHRQSDogJ+iPsuW+i+WuvicsXG5cdFx0UE46ICfnmq7nibnlh6/mgannvqTlspsnLFxuXHRcdFBMOiAn5rOi5YWwJyxcblx0XHRQVDogJ+iRoeiQhOeJmScsXG5cdFx0UFI6ICfms6LlpJrpu47lkIQnLFxuXHRcdFFBOiAn5Y2h5aGU5bCUJyxcblx0XHRSRTogJ+eVmeWwvOaxqicsXG5cdFx0Uk86ICfnvZfpqazlsLzkuponLFxuXHRcdFJVOiAn5L+E572X5pavJyxcblx0XHRSVzogJ+WNouaXuui+vicsXG5cdFx0Qkw6ICflnKPlt7Tms7Dli5LnsbMnLFxuXHRcdFNIOiAn5Zyj6LWr5YuS5ou/44CB6Zi/5qOu5p2+5ZKM54m56YeM5pav5Z2mLei+vuW6k+WwvOS6micsXG5cdFx0S046ICflnKPln7rojKjlkozlsLznu7Tmlq8nLFxuXHRcdExDOiAn5Zyj5Y2i6KW/5LqaJyxcblx0XHRNRjogJ+azleWxnuWco+mprOS4gScsXG5cdFx0UE06ICflnKPnmq7ln4PlsJTlkozlr4blhYvpmoYnLFxuXHRcdFZDOiAn5Zyj5paH5qOu54m55ZKM5qC85p6X57qz5LiB5pavJyxcblx0XHRXUzogJ+iQqOaRqeS6micsXG5cdFx0U006ICflnKPpqazlipvor7onLFxuXHRcdFNUOiAn5Zyj5aSa576O5ZKM5pmu5p6X6KW/5q+UJyxcblx0XHRTQTogJ+aymeeJuemYv+aLieS8rycsXG5cdFx0U046ICfloZ7lhoXliqDlsJQnLFxuXHRcdFJTOiAn5aGe5bCU57u05LqaJyxcblx0XHRTQzogJ+WhnuiIjOWwlCcsXG5cdFx0U0w6ICfloZ7mi4nliKnmmIInLFxuXHRcdFNHOiAn5paw5Yqg5Z2hJyxcblx0XHRTWDogJ+iNt+WxnuWco+mprOS4gScsXG5cdFx0U0s6ICfmlq/mtJvkvJDlhYsnLFxuXHRcdFNJOiAn5pav5rSb5paH5bC85LqaJyxcblx0XHRTQjogJ+aJgOe9l+mXqOe+pOWymycsXG5cdFx0U086ICfntKLpqazph4wnLFxuXHRcdFpBOiAn5Y2X6Z2eJyxcblx0XHRHUzogJ+WNl+S5lOayu+S6muWSjOWNl+ahkeWogeWlh+e+pOWymycsXG5cdFx0U1M6ICfljZfoi4/kuLknLFxuXHRcdEVTOiAn6KW/54+t54mZJyxcblx0XHRMSzogJ+aWr+mHjOWFsOWNoScsXG5cdFx0U0Q6ICfoi4/kuLknLFxuXHRcdFNSOiAn6IuP6YeM5Y2XJyxcblx0XHRTSjogJ+aWr+eTpuWwlOW3tOWSjOaJrOmprOW7ticsXG5cdFx0U0U6ICfnkZ7lhbgnLFxuXHRcdENIOiAn55Ge5aOrJyxcblx0XHRTWTogJ+WPmeWIqeS6micsXG5cdFx0VFc6ICfkuK3lm73oh7rmub4nLFxuXHRcdFRKOiAn5aGU5ZCJ5YWL5pav5Z2mJyxcblx0XHRUWjogJ+WdpuahkeWwvOS6micsXG5cdFx0VEg6ICfms7Dlm70nLFxuXHRcdFRMOiAn5Lic5bid5rG2Jyxcblx0XHRURzogJ+WkmuWTpScsXG5cdFx0VEs6ICfmiZjlhYvlirMnLFxuXHRcdFRPOiAn5rGk5YqgJyxcblx0XHRUVDogJ+eJueeri+WwvOi+vuWSjOWkmuW3tOWTpScsXG5cdFx0VE46ICfnqoHlsLzmlq8nLFxuXHRcdFRSOiAn5Zyf6ICz5YW2Jyxcblx0XHRUTTogJ+Wcn+W6k+abvOaWr+WdpicsXG5cdFx0VEM6ICfnibnlhYvmlq/lkozlh6/np5Hmlq/nvqTlspsnLFxuXHRcdFRWOiAn5Zu+55Om5Y2iJyxcblx0XHRVRzogJ+S5jOW5sui+vicsXG5cdFx0VUE6ICfkuYzlhYvlhbAnLFxuXHRcdEFFOiAn6Zi/6IGU6YWLJyxcblx0XHRHQjogJ+iLseWbvScsXG5cdFx0VVM6ICfnvo7lm70nLFxuXHRcdFVNOiAn576O5Zu95pys5Zyf5aSW5bCP5bKb5bG/Jyxcblx0XHRVWTogJ+S5jOaLieWcrScsXG5cdFx0VVo6ICfkuYzlhbnliKvlhYvmlq/lnaYnLFxuXHRcdFZVOiAn55Om5Yqq6Zi/5Zu+Jyxcblx0XHRWRTogJ+WnlOWGheeRnuaLiScsXG5cdFx0Vk46ICfotorljZcnLFxuXHRcdFZHOiAn6Iux5bGe57u05bCU5Lqs576k5bKbJyxcblx0XHRWSTogJ+e+juWxnue7tOWwlOS6rOe+pOWymycsXG5cdFx0V0Y6ICfnk6bliKnmlq/lkozlr4zlm77nurMnLFxuXHRcdEVIOiAn6KW/5pKS5ZOI5ouJJyxcblx0XHRZRTogJ+S5n+mXqCcsXG5cdFx0Wk06ICfotZ7mr5TkuponLFxuXHRcdFpXOiAn5rSl5be05biD6Z+mJyxcblx0fTtcbn07XG5cbmNvbnN0IGdldFJlZ2lvbk5hbWVMaXN0ID0gKCkgPT4ge1xuXHRjb25zdCB7d2dVc2VyTGFuZ3VhZ2V9ID0gbXcuY29uZmlnLmdldCgpO1xuXG5cdGlmIChbJ3poLWhhbnQnLCAnemgtaGsnLCAnemgtbW8nLCAnemgtdHcnXS5pbmNsdWRlcyh3Z1VzZXJMYW5ndWFnZSkpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0QUg6ICflronlvr0nLFxuXHRcdFx0Qko6ICfljJfkuqwnLFxuXHRcdFx0Q1E6ICfph43mhbYnLFxuXHRcdFx0Rko6ICfnpo/lu7onLFxuXHRcdFx0R0Q6ICflu6PmnbEnLFxuXHRcdFx0R1M6ICfnlJjogoUnLFxuXHRcdFx0R1g6ICflu6Popb8nLFxuXHRcdFx0R1o6ICfosrTlt54nLFxuXHRcdFx0SEE6ICfmsrPljZcnLFxuXHRcdFx0SEI6ICfmuZbljJcnLFxuXHRcdFx0SEU6ICfmsrPljJcnLFxuXHRcdFx0SEk6ICfmtbfljZcnLFxuXHRcdFx0SEw6ICfpu5Hpvo3msZ8nLFxuXHRcdFx0SE46ICfmuZbljZcnLFxuXHRcdFx0Skw6ICflkInmnpcnLFxuXHRcdFx0SlM6ICfmsZ/omIcnLFxuXHRcdFx0Slg6ICfmsZ/opb8nLFxuXHRcdFx0TE46ICfpgbzlr6cnLFxuXHRcdFx0Tk06ICflhafokpnlj6QnLFxuXHRcdFx0Tlg6ICflr6flpI8nLFxuXHRcdFx0UUg6ICfpnZLmtbcnLFxuXHRcdFx0U0M6ICflm5vlt50nLFxuXHRcdFx0U0Q6ICflsbHmnbEnLFxuXHRcdFx0U0g6ICfkuIrmtbcnLFxuXHRcdFx0U046ICfpmZ3opb8nLFxuXHRcdFx0U1g6ICflsbHopb8nLFxuXHRcdFx0VEo6ICflpKnmtKUnLFxuXHRcdFx0WEo6ICfmlrDnloYnLFxuXHRcdFx0WFo6ICfopb/ol48nLFxuXHRcdFx0WU46ICfpm7LljZcnLFxuXHRcdFx0Wko6ICfmtZnmsZ8nLFxuXHRcdH07XG5cdH1cblxuXHRyZXR1cm4ge1xuXHRcdEFIOiAn5a6J5b69Jyxcblx0XHRCSjogJ+WMl+S6rCcsXG5cdFx0Q1E6ICfph43luoYnLFxuXHRcdEZKOiAn56aP5bu6Jyxcblx0XHRHRDogJ+W5v+S4nCcsXG5cdFx0R1M6ICfnlJjogoMnLFxuXHRcdEdYOiAn5bm/6KW/Jyxcblx0XHRHWjogJ+i0teW3nicsXG5cdFx0SEE6ICfmsrPljZcnLFxuXHRcdEhCOiAn5rmW5YyXJyxcblx0XHRIRTogJ+ays+WMlycsXG5cdFx0SEk6ICfmtbfljZcnLFxuXHRcdEhMOiAn6buR6b6Z5rGfJyxcblx0XHRITjogJ+a5luWNlycsXG5cdFx0Skw6ICflkInmnpcnLFxuXHRcdEpTOiAn5rGf6IuPJyxcblx0XHRKWDogJ+axn+ilvycsXG5cdFx0TE46ICfovr3lroEnLFxuXHRcdE5NOiAn5YaF6JKZ5Y+kJyxcblx0XHROWDogJ+WugeWkjycsXG5cdFx0UUg6ICfpnZLmtbcnLFxuXHRcdFNDOiAn5Zub5bedJyxcblx0XHRTRDogJ+WxseS4nCcsXG5cdFx0U0g6ICfkuIrmtbcnLFxuXHRcdFNOOiAn6ZmV6KW/Jyxcblx0XHRTWDogJ+WxseilvycsXG5cdFx0VEo6ICflpKnmtKUnLFxuXHRcdFhKOiAn5paw55aGJyxcblx0XHRYWjogJ+ilv+iXjycsXG5cdFx0WU46ICfkupHljZcnLFxuXHRcdFpKOiAn5rWZ5rGfJyxcblx0fTtcbn07XG5cbmV4cG9ydCB7Z2V0Q291bnRyeU9yQXJlYU5hbWVMaXN0LCBnZXRSZWdpb25OYW1lTGlzdH07XG4iLCAiaW1wb3J0IHtnZXRDb3VudHJ5T3JBcmVhTmFtZUxpc3QsIGdldFJlZ2lvbk5hbWVMaXN0fSBmcm9tICcuL25hbWUnO1xuXG50eXBlIENvdW50cnlPckFyZWFOYW1lTGlzdCA9IFJldHVyblR5cGU8dHlwZW9mIGdldENvdW50cnlPckFyZWFOYW1lTGlzdD47XG50eXBlIFJlZ2lvbk5hbWVMaXN0ID0gUmV0dXJuVHlwZTx0eXBlb2YgZ2V0UmVnaW9uTmFtZUxpc3Q+O1xuXG5jb25zdCBjb3VudHJ5T3JBcmVhTGlzdDogQ291bnRyeU9yQXJlYU5hbWVMaXN0ID0gZ2V0Q291bnRyeU9yQXJlYU5hbWVMaXN0KCk7XG5jb25zdCByZWdpb25MaXN0OiBSZWdpb25OYW1lTGlzdCA9IGdldFJlZ2lvbk5hbWVMaXN0KCk7XG5cbmNvbnN0IGdldENvdW50cnlPckFyZWFOYW1lID0gPFQgZXh0ZW5kcyBrZXlvZiBDb3VudHJ5T3JBcmVhTmFtZUxpc3Q+KGtleTogVCk6IENvdW50cnlPckFyZWFOYW1lTGlzdFtUXSB8IHVuZGVmaW5lZCA9PiB7XG5cdHJldHVybiBjb3VudHJ5T3JBcmVhTGlzdFtrZXldO1xufTtcblxuY29uc3QgZ2V0UmVnaW9uTmFtZSA9IDxUIGV4dGVuZHMga2V5b2YgUmVnaW9uTmFtZUxpc3Q+KGtleTogVCk6IFJlZ2lvbk5hbWVMaXN0W1RdIHwgdW5kZWZpbmVkID0+IHtcblx0cmV0dXJuIHJlZ2lvbkxpc3Rba2V5XTtcbn07XG5cbmV4cG9ydCB7dHlwZSBDb3VudHJ5T3JBcmVhTmFtZUxpc3QsIHR5cGUgUmVnaW9uTmFtZUxpc3QsIGdldENvdW50cnlPckFyZWFOYW1lLCBnZXRSZWdpb25OYW1lfTtcbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge2luaXRNd0FwaX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxuY29uc3QgYXBpOiBtdy5BcGkgPSBpbml0TXdBcGkoYEdlb0xvY2F0aW9uUmVhZGVyLyR7T1BUSU9OUy52ZXJzaW9ufWApO1xuXG5leHBvcnQge2FwaX07XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi8uLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHt0eXBlIENvdW50cnlPckFyZWFOYW1lTGlzdCwgdHlwZSBSZWdpb25OYW1lTGlzdCwgZ2V0Q291bnRyeU9yQXJlYU5hbWUsIGdldFJlZ2lvbk5hbWV9IGZyb20gJy4vZ2V0TmFtZSc7XG5pbXBvcnQgdHlwZSB7U3RvcmVHZW9JbmZvfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQge2FwaX0gZnJvbSAnLi4vYXBpJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi4vaTE4bic7XG5cbmNvbnN0IGdldExvY2F0aW9uID0gYXN5bmMgKHdnUmVsZXZhbnRVc2VyTmFtZTogc3RyaW5nKSA9PiB7XG5cdGNvbnN0IHN0b3JlUGFnZVRpdGxlOiBzdHJpbmcgPSBgVXNlcjoke3dnUmVsZXZhbnRVc2VyTmFtZX0vR2VvSVAuanNvbmA7XG5cblx0bGV0IGNvdW50cnlPckFyZWFOYW1lOiBzdHJpbmcgPSBnZXRNZXNzYWdlKCdVbmtub3duJyk7XG5cdGxldCByZWdpb25OYW1lOiBzdHJpbmcgPSAnJztcblxuXHRpZiAobXcuc3RvcmFnZS5nZXRPYmplY3QoT1BUSU9OUy5zdG9yYWdlS2V5ICsgd2dSZWxldmFudFVzZXJOYW1lKSkge1xuXHRcdCh7Y291bnRyeU9yQXJlYU5hbWUsIHJlZ2lvbk5hbWV9ID0gbXcuc3RvcmFnZS5nZXRPYmplY3QoT1BUSU9OUy5zdG9yYWdlS2V5ICsgd2dSZWxldmFudFVzZXJOYW1lKSBhcyB7XG5cdFx0XHRjb3VudHJ5T3JBcmVhTmFtZTogc3RyaW5nO1xuXHRcdFx0cmVnaW9uTmFtZTogc3RyaW5nO1xuXHRcdH0pO1xuXHR9IGVsc2Uge1xuXHRcdHRyeSB7XG5cdFx0XHRjb25zdCBwYXJhbXM6IEFwaVF1ZXJ5UmV2aXNpb25zUGFyYW1zID0ge1xuXHRcdFx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0XHRcdHRpdGxlczogW3N0b3JlUGFnZVRpdGxlXSxcblx0XHRcdFx0cHJvcDogWydyZXZpc2lvbnMnXSxcblx0XHRcdFx0cnZwcm9wOiBbJ2NvbnRlbnQnXSxcblx0XHRcdFx0cnZzbG90czogJ21haW4nLFxuXHRcdFx0XHRzbWF4YWdlOiA2MDAsXG5cdFx0XHRcdG1heGFnZTogNjAwLFxuXHRcdFx0fTtcblxuXHRcdFx0Y29uc3QgZGF0YSA9IGF3YWl0IGFwaS5nZXQocGFyYW1zKTtcblxuXHRcdFx0Y29uc3QgY29udGVudCA9IChkYXRhWydxdWVyeSddPy5wYWdlc1swXT8ucmV2aXNpb25zPy5bMF0uc2xvdHMubWFpbi5jb250ZW50IGFzIHN0cmluZykgfHwgJyc7XG5cdFx0XHRjb25zdCByZXNwb25zZSA9IEpTT04ucGFyc2UoY29udGVudCkgYXMgU3RvcmVHZW9JbmZvICYge1xuXHRcdFx0XHRjb3VudHJ5Pzogc3RyaW5nO1xuXHRcdFx0fTtcblxuXHRcdFx0aWYgKCEocmVzcG9uc2UuY291bnRyeSB8fCByZXNwb25zZS5jb3VudHJ5T3JBcmVhKSAmJiAhcmVzcG9uc2UucmVnaW9uKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0Y29uc3Qge2NvdW50cnksIGNvdW50cnlPckFyZWEsIHJlZ2lvbn0gPSByZXNwb25zZTtcblxuXHRcdFx0bGV0IGxvY2F0aW9uOiBTdG9yZUdlb0luZm9bJ2NvdW50cnlPckFyZWEnXSA9ICcnO1xuXG5cdFx0XHRpZiAoY291bnRyeSB8fCBjb3VudHJ5T3JBcmVhKSB7XG5cdFx0XHRcdGxvY2F0aW9uID0gY291bnRyeSB8fCBjb3VudHJ5T3JBcmVhO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoZ2V0Q291bnRyeU9yQXJlYU5hbWUobG9jYXRpb24gYXMga2V5b2YgQ291bnRyeU9yQXJlYU5hbWVMaXN0KSkge1xuXHRcdFx0XHRjb3VudHJ5T3JBcmVhTmFtZSA9XG5cdFx0XHRcdFx0Z2V0Q291bnRyeU9yQXJlYU5hbWUobG9jYXRpb24gYXMga2V5b2YgQ291bnRyeU9yQXJlYU5hbWVMaXN0KSB8fCBnZXRNZXNzYWdlKCdVbmtub3duJyk7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChsb2NhdGlvbiAmJiBsb2NhdGlvbiA9PT0gJ0NOJykge1xuXHRcdFx0XHRyZWdpb25OYW1lID0gZ2V0UmVnaW9uTmFtZShyZWdpb24gYXMga2V5b2YgUmVnaW9uTmFtZUxpc3QpIHx8ICcnO1xuXHRcdFx0fVxuXG5cdFx0XHRtdy5zdG9yYWdlLnNldE9iamVjdChPUFRJT05TLnN0b3JhZ2VLZXkgKyB3Z1JlbGV2YW50VXNlck5hbWUsIHtjb3VudHJ5T3JBcmVhTmFtZSwgcmVnaW9uTmFtZX0sIDYwICogNjApO1xuXHRcdH0gY2F0Y2ggKGVycm9yOiB1bmtub3duKSB7XG5cdFx0XHRjb25zb2xlLmVycm9yKCdbR2VvTG9jYXRpb25SZWFkZXJdIEFqYXggZXJyb3IgaW4gYGdldExvY2F0aW9uYCBtZXRob2Q6JywgZXJyb3IpO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiB7Y291bnRyeU9yQXJlYU5hbWUsIHJlZ2lvbk5hbWV9O1xufTtcblxuZXhwb3J0IHtnZXRMb2NhdGlvbn07XG4iLCAiaW1wb3J0IHthcHBlbmRJY29ufSBmcm9tICcuL3V0aWwvYXBwZW5kSWNvbic7XG5pbXBvcnQge2dldExvY2F0aW9ufSBmcm9tICcuL3V0aWwvZ2V0TG9jYXRpb24nO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL2kxOG4nO1xuXG5jb25zdCBhcHBlbmRHZW9JY29uID0gYXN5bmMgKCk6IFByb21pc2U8dm9pZD4gPT4ge1xuXHRjb25zdCB7d2dSZWxldmFudFVzZXJOYW1lfSA9IG13LmNvbmZpZy5nZXQoKTtcblx0aWYgKCF3Z1JlbGV2YW50VXNlck5hbWUpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHR0cnkge1xuXHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZ2V0TG9jYXRpb24od2dSZWxldmFudFVzZXJOYW1lKTtcblx0XHRjb25zdCBjb3VudHJ5T3JBcmVhTmFtZSA9IHJlc3BvbnNlPy5jb3VudHJ5T3JBcmVhTmFtZSA/PyAnJztcblx0XHRjb25zdCByZWdpb25OYW1lID0gcmVzcG9uc2U/LnJlZ2lvbk5hbWUgPz8gJyc7XG5cblx0XHRhcHBlbmRJY29uKHtcblx0XHRcdGljb246ICdnbG9iZScsXG5cdFx0XHRpbmRpY2F0b3JUZXh0OiBjb3VudHJ5T3JBcmVhTmFtZSArIHJlZ2lvbk5hbWUsXG5cdFx0XHRzcGFuQ2xhc3M6ICdncmVlbicsXG5cdFx0fSk7XG5cdH0gY2F0Y2ggKGVycm9yOiB1bmtub3duKSB7XG5cdFx0Y29uc29sZS5lcnJvcignW0dlb0xvY2F0aW9uUmVhZGVyXSBBamF4IGVycm9yIGluIGBhcHBlbmRHZW9JY29uYCBtZXRob2Q6JywgZXJyb3IpO1xuXHRcdGFwcGVuZEljb24oe1xuXHRcdFx0aWNvbjogJ2hlbHBOb3RpY2UnLFxuXHRcdFx0aW5kaWNhdG9yVGV4dDogZ2V0TWVzc2FnZSgnVW5rbm93bicpLFxuXHRcdFx0c3BhbkNsYXNzOiAnb3JhbmdlJyxcblx0XHR9KTtcblx0fVxufTtcblxuZXhwb3J0IHthcHBlbmRHZW9JY29ufTtcbiIsICJpbXBvcnQge2FwcGVuZEdlb0ljb259IGZyb20gJy4vYXBwZW5kR2VvSWNvbic7XG5pbXBvcnQge2dldExvY2FsVXNlckdyb3Vwc30gZnJvbSAnZXh0LmdhZGdldC5NYXJrUmlnaHRzJztcblxuY29uc3QgYWRkRWxlbWVudCA9IGFzeW5jICgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0Y29uc3Qge3dnUmVsZXZhbnRVc2VyTmFtZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cblx0aWYgKCF3Z1JlbGV2YW50VXNlck5hbWUpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHR0cnkge1xuXHRcdGNvbnN0IGdyb3Vwc01hcCA9IGF3YWl0IGdldExvY2FsVXNlckdyb3Vwcyhbd2dSZWxldmFudFVzZXJOYW1lXSk7XG5cdFx0Y29uc3QgZ3JvdXBzID0gZ3JvdXBzTWFwW3dnUmVsZXZhbnRVc2VyTmFtZV0gPz8gW107XG5cblx0XHRpZiAoZ3JvdXBzLmluY2x1ZGVzKCdib3QnKSB8fCBncm91cHMuaW5jbHVkZXMoJ3FpdXdlbicpKSB7XG5cdFx0XHQvKiBlbXB0eSAqL1xuXHRcdFx0Ly8gQWxyZWFkeSBzaG93biBpbiBNYXJrUmlnaHRzLVVzZXJwYWdlXG5cdFx0fSBlbHNlIHtcblx0XHRcdHZvaWQgYXBwZW5kR2VvSWNvbigpO1xuXHRcdH1cblx0fSBjYXRjaCAoZXJyb3I6IHVua25vd24pIHtcblx0XHRjb25zb2xlLmVycm9yKCdbR2VvTG9jYXRpb25SZWFkZXJdIEFqYXggZXJyb3IgaW4gYGFkZEVsZW1lbnRgIG1ldGhvZDonLCBlcnJvcik7XG5cdH1cbn07XG5cbmV4cG9ydCB7YWRkRWxlbWVudH07XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuL29wdGlvbnMuanNvbic7XG5pbXBvcnQge1NZU1RFTV9TQ1JJUFRfTElTVCwgV0VCTUFTVEVSX0xJU1R9IGZyb20gJy4vbW9kdWxlcy9jb25zdGFudCc7XG5pbXBvcnQge2FkZEVsZW1lbnR9IGZyb20gJy4vbW9kdWxlcy9hZGRFbGVtZW50JztcblxuKGZ1bmN0aW9uIGdlb0xvY2F0aW9uUmVhZGVyKCk6IHZvaWQge1xuXHRjb25zdCB7d2dBY3Rpb24sIHdnTmFtZXNwYWNlTnVtYmVyLCB3Z1BhZ2VOYW1lLCB3Z1JlbGV2YW50VXNlck5hbWV9ID0gbXcuY29uZmlnLmdldCgpO1xuXHRpZiAoXG5cdFx0IXdnUmVsZXZhbnRVc2VyTmFtZSB8fFxuXHRcdFNZU1RFTV9TQ1JJUFRfTElTVC5pbmNsdWRlcyh3Z1JlbGV2YW50VXNlck5hbWUpIHx8XG5cdFx0V0VCTUFTVEVSX0xJU1QuaW5jbHVkZXMod2dSZWxldmFudFVzZXJOYW1lKSB8fFxuXHRcdCEod2dOYW1lc3BhY2VOdW1iZXIgPT09IE9QVElPTlMudXNlck5hbWVTcGFjZU51bWJlcikgfHxcblx0XHQhKHdnQWN0aW9uID09PSAndmlldycpXG5cdCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IHBhZ2VOYW1lOiBzdHJpbmcgPSBuZXcgbXcuVGl0bGUod2dQYWdlTmFtZSkudG9UZXh0KCk7XG5cdGNvbnN0IHJlbGV2YW50VXNlclBhZ2VOYW1lOiBzdHJpbmcgPSBuZXcgbXcuVGl0bGUod2dSZWxldmFudFVzZXJOYW1lLCBPUFRJT05TLnVzZXJOYW1lU3BhY2VOdW1iZXIpLnRvVGV4dCgpO1xuXHRpZiAocGFnZU5hbWUgIT09IHJlbGV2YW50VXNlclBhZ2VOYW1lKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0dm9pZCBhZGRFbGVtZW50KCk7XG59KSgpO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNQyxJQUFBQSxxQkFBc0I7QUFDdEIsSUFBQUMsYUFBYztBQUNkLElBQUFDLHNCQUF1QjtBQUN2QixJQUFBQyxVQUFXOztBQ1RaLElBQU1DLHFCQUErQixDQUNwQyxTQUNBLFFBQ0EsVUFDQSxXQUNBLHlCQUNBLHNCQUNBLHFCQUNBLDhCQUNBLGVBQUE7QUFFRCxJQUFNQyxpQkFBMkIsQ0FBQyxVQUFVLHVCQUF1QixtQkFBbUI7O0FDWHRGLElBQU1DLGFBQXFCO0FBQzNCLElBQU1DLGtCQUFBLEdBQUFDLE9BQTZCRixZQUFVLFFBQUE7QUFDN0MsSUFBTUcsa0JBQUEsR0FBQUQsT0FBNkJGLFlBQVUsUUFBQTs7QUNEN0MsSUFBQUkscUJBQWtDQyxRQUFBQyxRQUFBLGtCQUFBLEdBQUEsQ0FBQTs7QUNEbEMsSUFBQUMsb0JBQXVCRCxR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LElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO0lBQ0w7RUFDRCxXQUFXLENBQUMsT0FBTyxFQUFFeFEsU0FBU2UsY0FBYyxHQUFHO0FBQzlDLFdBQU87TUFDTkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7SUFDTDtFQUNELFdBQVcsQ0FBQyxTQUFTLE9BQU8sRUFBRXhRLFNBQVNlLGNBQWMsR0FBRztBQUN2RCxXQUFPO01BQ05DLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO0lBQ0w7RUFDRDtBQUVBLFNBQU87SUFDTnhQLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNK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QUFtQmdDLFNBQVN3UyxrQkFBa0IsS0FDOUN2VSxlQUFlK0IsU0FBU3dTLGtCQUFrQixLQUMxQyxFQUFFaUQsc0JBQThCM1gsd0JBQ2hDLEVBQUUwWCxhQUFhLFNBQ2Q7QUFDRDtFQUNEO0FBRUEsUUFBTUcsV0FBbUIsSUFBSWhXLEdBQUdpVyxNQUFNRixVQUFVLEVBQUVHLE9BQU87QUFDekQsUUFBTUMsdUJBQStCLElBQUluVyxHQUFHaVcsTUFBTXBELG9CQUE0QjFVLG1CQUFtQixFQUFFK1gsT0FBTztBQUMxRyxNQUFJRixhQUFhRyxzQkFBc0I7QUFDdEM7RUFDRDtBQUVBLE9BQUtiLFdBQVc7QUFDakIsR0FBRzsiLAogICJuYW1lcyI6IFsibW91bnRQb2ludFNlbGVjdG9yIiwgInN0b3JhZ2VLZXkiLCAidXNlck5hbWVTcGFjZU51bWJlciIsICJ2ZXJzaW9uIiwgIlNZU1RFTV9TQ1JJUFRfTElTVCIsICJXRUJNQVNURVJfTElTVCIsICJDTEFTU19OQU1FIiwgIkNMQVNTX05BTUVfSUNPTiIsICJjb25jYXQiLCAiQ0xBU1NfTkFNRV9URVhUIiwgImltcG9ydF9leHRfZ2FkZ2V0MiIsICJfX3RvRVNNIiwgInJlcXVpcmUiLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAiZ2V0STE4bk1lc3NhZ2VzIiwgImxvY2FsaXplIiwgImVuIiwgImphIiwgInpoIiwgIlVua25vd24iLCAiTG9jYXRpb24iLCAiaTE4bk1lc3NhZ2VzIiwgImdldE1lc3NhZ2UiLCAia2V5IiwgIkZvb3Rlck5vdGljZSIsICJzcGFuQ2xhc3MiLCAiY2hpbGRyZW4iLCAiZGVmYXVsdCIsICJjcmVhdGVFbGVtZW50IiwgIkZyYWdtZW50IiwgInNraW4iLCAibXciLCAiY29uZmlnIiwgImdldCIsICJpZCIsICJjbGFzc05hbWUiLCAiaW5jbHVkZXMiLCAiZG9jdW1lbnQiLCAicXVlcnlTZWxlY3RvciIsICJJbmRpY2F0b3IiLCAiaWNvbiIsICJpbmRpY2F0b3JUZXh0IiwgInRleHQiLCAiRm9vdGVySWNvbiIsICJpbXBvcnRfZXh0X2dhZGdldDMiLCAiYXBwZW5kRm9vdGVyTm90aWNlIiwgImVsZW1lbnQiLCAibW91bnRQb2ludCIsICJwcmVwZW5kIiwgImFwcGVuZEljb24iLCAiZ2V0Q291bnRyeU9yQXJlYU5hbWVMaXN0IiwgIndnVXNlckxhbmd1YWdlIiwgIkFGIiwgIkFYIiwgIkFMIiwgIkRaIiwgIkFTIiwgIkFEIiwgIkFPIiwgIkFJIiwgIkFRIiwgIkFHIiwgIkFSIiwgIkFNIiwgIkFXIiwgIkFVIiwgIkFUIiwgIkFaIiwgIkJTIiwgIkJIIiwgIkJEIiwgIkJCIiwgIkJZIiwgIkJFIiwgIkJaIiwgIkJKIiwgIkJNIiwgIkJUIiwgIkJPIiwgIkJRIiwgIkJBIiwgIkJXIiwgIkJWIiwgIkJSIiwgIklPIiwgIkJOIiwgIkJHIiwgIkJGIiwgIkJJIiwgIkNWIiwgIktIIiwgIkNNIiwgIkNBIiwgIktZIiwgIkNGIiwgIlREIiwgIkNMIiwgIkNOIiwgIkNYIiwgIkNDIiwgIkNPIiwgIktNIiwgIkNHIiwgIkNEIiwgIkNLIiwgIkNSIiwgIkNJIiwgIkhSIiwgIkNVIiwgIkNXIiwgIkNZIiwgIkNaIiwgIkRLIiwgIkRKIiwgIkRNIiwgIkRPIiwgIkVDIiwgIkVHIiwgIlNWIiwgIkdRIiwgIkVSIiwgIkVFIiwgIlNaIiwgIkVUIiwgIkZLIiwgIkZPIiwgIkZKIiwgIkZJIiwgIkZSIiwgIkdGIiwgIlBGIiwgIlRGIiwgIkdBIiwgIkdNIiwgIkdFIiwgIkRFIiwgIkdIIiwgIkdJIiwgIkdSIiwgIkdMIiwgIkdEIiwgIkdQIiwgIkdVIiwgIkdUIiwgIkdHIiwgIkdOIiwgIkdXIiwgIkdZIiwgIkhUIiwgIkhNIiwgIlZBIiwgIkhOIiwgIkhLIiwgIkhVIiwgIklTIiwgIklOIiwgIklEIiwgIklSIiwgIklRIiwgIklFIiwgIklNIiwgIklMIiwgIklUIiwgIkpNIiwgIkpQIiwgIkpFIiwgIkpPIiwgIktaIiwgIktFIiwgIktJIiwgIktQIiwgIktSIiwgIktXIiwgIktHIiwgIkxBIiwgIkxWIiwgIkxCIiwgIkxTIiwgIkxSIiwgIkxZIiwgIkxJIiwgIkxUIiwgIkxVIiwgIk1PIiwgIk1HIiwgIk1XIiwgIk1ZIiwgIk1WIiwgIk1MIiwgIk1UIiwgIk1IIiwgIk1RIiwgIk1SIiwgIk1VIiwgIllUIiwgIk1YIiwgIkZNIiwgIk1EIiwgIk1DIiwgIk1OIiwgIk1FIiwgIk1TIiwgIk1BIiwgIk1aIiwgIk1NIiwgIk5BIiwgIk5SIiwgIk5QIiwgIk5MIiwgIk5DIiwgIk5aIiwgIk5JIiwgIk5FIiwgIk5HIiwgIk5VIiwgIk5GIiwgIk1LIiwgIk1QIiwgIk5PIiwgIk9NIiwgIlBLIiwgIlBXIiwgIlBTIiwgIlBBIiwgIlBHIiwgIlBZIiwgIlBFIiwgIlBIIiwgIlBOIiwgIlBMIiwgIlBUIiwgIlBSIiwgIlFBIiwgIlJFIiwgIlJPIiwgIlJVIiwgIlJXIiwgIkJMIiwgIlNIIiwgIktOIiwgIkxDIiwgIk1GIiwgIlBNIiwgIlZDIiwgIldTIiwgIlNNIiwgIlNUIiwgIlNBIiwgIlNOIiwgIlJTIiwgIlNDIiwgIlNMIiwgIlNHIiwgIlNYIiwgIlNLIiwgIlNJIiwgIlNCIiwgIlNPIiwgIlpBIiwgIkdTIiwgIlNTIiwgIkVTIiwgIkxLIiwgIlNEIiwgIlNSIiwgIlNKIiwgIlNFIiwgIkNIIiwgIlNZIiwgIlRXIiwgIlRKIiwgIlRaIiwgIlRIIiwgIlRMIiwgIlRHIiwgIlRLIiwgIlRPIiwgIlRUIiwgIlROIiwgIlRSIiwgIlRNIiwgIlRDIiwgIlRWIiwgIlVHIiwgIlVBIiwgIkFFIiwgIkdCIiwgIlVTIiwgIlVNIiwgIlVZIiwgIlVaIiwgIlZVIiwgIlZFIiwgIlZOIiwgIlZHIiwgIlZJIiwgIldGIiwgIkVIIiwgIllFIiwgIlpNIiwgIlpXIiwgImdldFJlZ2lvbk5hbWVMaXN0IiwgIkFIIiwgIkNRIiwgIkdYIiwgIkdaIiwgIkhBIiwgIkhCIiwgIkhFIiwgIkhJIiwgIkhMIiwgIkpMIiwgIkpTIiwgIkpYIiwgIkxOIiwgIk5NIiwgIk5YIiwgIlFIIiwgIlhKIiwgIlhaIiwgIllOIiwgIlpKIiwgImNvdW50cnlPckFyZWFMaXN0IiwgInJlZ2lvbkxpc3QiLCAiZ2V0Q291bnRyeU9yQXJlYU5hbWUiLCAiZ2V0UmVnaW9uTmFtZSIsICJpbXBvcnRfZXh0X2dhZGdldDQiLCAiYXBpIiwgImluaXRNd0FwaSIsICJnZXRMb2NhdGlvbiIsICJfcmVmIiwgIl9hc3luY1RvR2VuZXJhdG9yIiwgIndnUmVsZXZhbnRVc2VyTmFtZSIsICJzdG9yZVBhZ2VUaXRsZSIsICJjb3VudHJ5T3JBcmVhTmFtZSIsICJyZWdpb25OYW1lIiwgInN0b3JhZ2UiLCAiZ2V0T2JqZWN0IiwgIl9kYXRhJHF1ZXJ5IiwgInBhcmFtcyIsICJhY3Rpb24iLCAiZm9ybWF0IiwgImZvcm1hdHZlcnNpb24iLCAidGl0bGVzIiwgInByb3AiLCAicnZwcm9wIiwgInJ2c2xvdHMiLCAic21heGFnZSIsICJtYXhhZ2UiLCAiZGF0YSIsICJjb250ZW50IiwgInBhZ2VzIiwgInJldmlzaW9ucyIsICJzbG90cyIsICJtYWluIiwgInJlc3BvbnNlIiwgIkpTT04iLCAicGFyc2UiLCAiY291bnRyeSIsICJjb3VudHJ5T3JBcmVhIiwgInJlZ2lvbiIsICJsb2NhdGlvbiIsICJzZXRPYmplY3QiLCAiZXJyb3IiLCAiY29uc29sZSIsICJfeCIsICJhcHBseSIsICJhcmd1bWVudHMiLCAiYXBwZW5kR2VvSWNvbiIsICJfcmVmMiIsICJfcmVzcG9uc2UkY291bnRyeU9yQXIiLCAiX3Jlc3BvbnNlJHJlZ2lvbk5hbWUiLCAiaW1wb3J0X2V4dF9nYWRnZXQ1IiwgImFkZEVsZW1lbnQiLCAiX3JlZjMiLCAiX2dyb3Vwc01hcCR3Z1JlbGV2YW50IiwgImdyb3Vwc01hcCIsICJnZXRMb2NhbFVzZXJHcm91cHMiLCAiZ3JvdXBzIiwgImdlb0xvY2F0aW9uUmVhZGVyIiwgIndnQWN0aW9uIiwgIndnTmFtZXNwYWNlTnVtYmVyIiwgIndnUGFnZU5hbWUiLCAicGFnZU5hbWUiLCAiVGl0bGUiLCAidG9UZXh0IiwgInJlbGV2YW50VXNlclBhZ2VOYW1lIl0KfQo=

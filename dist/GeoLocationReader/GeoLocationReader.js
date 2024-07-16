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
var userNameSpaceNumber = 2;
var version = "2.0";
//! src/GeoLocation/modules/constant.ts
var SYSTEM_SCRIPT_LIST = ["滥用过滤器", "求闻编者", "求闻百科社区", "Example", "External contributors", "Maintenance script", "MediaWiki default", "MediaWiki message delivery", "New user page"];
var WEBMASTER_LIST = ["QiuWen", "QiuWen for Accounts", "QiuwenSocialMedia"];
//! src/GeoLocationReader/modules/constant.ts
var CLASS_NAME = "gadget-geo_location_reader";
var CLASS_NAME_ICON = "".concat(CLASS_NAME, "__icon");
var CLASS_NAME_TEXT = "".concat(CLASS_NAME, "__text");
//! src/GeoLocationReader/modules/api.ts
var import_ext_gadget = require("ext.gadget.Util");
var api = (0, import_ext_gadget.initMwApi)("GeoLocationReader/".concat(version));
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
//! src/GeoLocationReader/modules/util/appendIcon.tsx
var import_ext_gadget3 = __toESM(require("ext.gadget.React"), 1);
//! src/GeoLocationReader/modules/i18n.ts
var import_ext_gadget2 = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    ":": (0, import_ext_gadget2.localize)({
      en: ": ",
      ja: "：",
      zh: "："
    }),
    Unknown: (0, import_ext_gadget2.localize)({
      en: "Unknown Location",
      ja: "未知IP地域",
      "zh-hans": "未知IP属地",
      "zh-hant": "未知IP屬地"
    }),
    Location: (0, import_ext_gadget2.localize)({
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
//! src/GeoLocationReader/modules/util/appendIcon.tsx
var elementWrap = (spanClass, innerElement) => {
  const {
    skin
  } = mw.config.get();
  const classNames = [CLASS_NAME, "".concat(CLASS_NAME, "-").concat(spanClass)];
  if (skin === "citizen") {
    return /* @__PURE__ */ import_ext_gadget3.default.createElement("section", {
      className: classNames
    }, innerElement);
  } else if (["vector", "vector-2022", "gongbi"].includes(skin) || document.querySelector("ul#footer-info")) {
    return /* @__PURE__ */ import_ext_gadget3.default.createElement("li", {
      className: classNames
    }, innerElement);
  }
  return /* @__PURE__ */ import_ext_gadget3.default.createElement("div", {
    className: classNames
  }, innerElement);
};
var indicator = (icon, indicatorText) => {
  const ipLocationDesc = getMessage("Location") + getMessage(":");
  const text = icon === "globe" ? ipLocationDesc + indicatorText : indicatorText !== null && indicatorText !== void 0 ? indicatorText : "";
  return /* @__PURE__ */ import_ext_gadget3.default.createElement(import_ext_gadget3.default.Fragment, null, /* @__PURE__ */ import_ext_gadget3.default.createElement("span", {
    className: [CLASS_NAME_ICON, "".concat(CLASS_NAME_ICON, "-").concat(icon)],
    "aria-label": text
  }), /* @__PURE__ */ import_ext_gadget3.default.createElement("span", {
    className: CLASS_NAME_TEXT
  }, text));
};
var appendIcon = ({
  icon,
  indicatorText,
  spanClass
}) => {
  var _document$querySelect;
  if (!spanClass || !icon) {
    return;
  }
  const tag = elementWrap(spanClass, indicator(icon, indicatorText));
  (_document$querySelect = document.querySelectorAll(mountPointSelector)[0]) === null || _document$querySelect === void 0 || _document$querySelect.prepend(tag);
};
//! src/GeoLocationReader/modules/appendGeoIcon.tsx
var appendGeoIcon = /* @__PURE__ */ function() {
  var _ref = _asyncToGenerator(function* () {
    const {
      wgRelevantUserName
    } = mw.config.get();
    const storePageTitle = "User:".concat(wgRelevantUserName, "/GeoIP.json");
    try {
      var _ref2, _getCountryOrAreaName, _getRegionName;
      const params = {
        action: "query",
        format: "json",
        formatversion: "2",
        titles: [storePageTitle],
        prop: ["revisions"],
        rvprop: ["content"],
        rvslots: "main"
      };
      const data = yield api.get(params);
      const {
        country,
        countryOrArea,
        region
      } = JSON.parse(
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        data["query"].pages[0].revisions[0].slots.main.content
      );
      const location = (_ref2 = country !== null && country !== void 0 ? country : countryOrArea) !== null && _ref2 !== void 0 ? _ref2 : "";
      const countryOrAreaName = (_getCountryOrAreaName = getCountryOrAreaName(location)) !== null && _getCountryOrAreaName !== void 0 ? _getCountryOrAreaName : getMessage("Unknown");
      const regionName = location === "CN" ? (_getRegionName = getRegionName(region)) !== null && _getRegionName !== void 0 ? _getRegionName : "" : "";
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
    return _ref.apply(this, arguments);
  };
}();
//! src/GeoLocationReader/modules/addElement.ts
var queryUserGroups = /* @__PURE__ */ function() {
  var _ref3 = _asyncToGenerator(function* (ususers) {
    const params = {
      ususers,
      action: "query",
      format: "json",
      formatversion: "2",
      list: "users",
      usprop: "groups"
    };
    const response = yield api.get(params);
    return response;
  });
  return function queryUserGroups2(_x) {
    return _ref3.apply(this, arguments);
  };
}();
var addElement = /* @__PURE__ */ function() {
  var _ref4 = _asyncToGenerator(function* () {
    const {
      wgRelevantUserName
    } = mw.config.get();
    try {
      const {
        query: {
          users: [{
            groups
          }]
        }
      } = yield queryUserGroups("".concat(wgRelevantUserName));
      if (groups.includes("bot") || groups.includes("qiuwen")) {
      } else {
        void appendGeoIcon();
      }
    } catch (error) {
      console.error("[GeoLocationReader] Ajax error in `addElement` method:", error);
    }
  });
  return function addElement2() {
    return _ref4.apply(this, arguments);
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0dlb0xvY2F0aW9uUmVhZGVyL29wdGlvbnMuanNvbiIsICJzcmMvR2VvTG9jYXRpb24vbW9kdWxlcy9jb25zdGFudC50cyIsICJzcmMvR2VvTG9jYXRpb25SZWFkZXIvbW9kdWxlcy9jb25zdGFudC50cyIsICJzcmMvR2VvTG9jYXRpb25SZWFkZXIvbW9kdWxlcy9hcGkudHMiLCAic3JjL0dlb0xvY2F0aW9uUmVhZGVyL21vZHVsZXMvdXRpbC9uYW1lLnRzIiwgInNyYy9HZW9Mb2NhdGlvblJlYWRlci9tb2R1bGVzL3V0aWwvZ2V0TmFtZS50cyIsICJzcmMvR2VvTG9jYXRpb25SZWFkZXIvbW9kdWxlcy91dGlsL2FwcGVuZEljb24udHN4IiwgInNyYy9HZW9Mb2NhdGlvblJlYWRlci9tb2R1bGVzL2kxOG4udHMiLCAic3JjL0dlb0xvY2F0aW9uUmVhZGVyL21vZHVsZXMvYXBwZW5kR2VvSWNvbi50c3giLCAic3JjL0dlb0xvY2F0aW9uUmVhZGVyL21vZHVsZXMvYWRkRWxlbWVudC50cyIsICJzcmMvR2VvTG9jYXRpb25SZWFkZXIvR2VvTG9jYXRpb25SZWFkZXIudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIntcblx0XCJtb3VudFBvaW50U2VsZWN0b3JcIjogXCIjZm9vdGVyLWluZm8sLnBhZ2UtaW5mb1wiLFxuXHRcInVzZXJOYW1lU3BhY2VOdW1iZXJcIjogMixcblx0XCJ2ZXJzaW9uXCI6IFwiMi4wXCJcbn1cbiIsICJjb25zdCBTWVNURU1fU0NSSVBUX0xJU1Q6IHN0cmluZ1tdID0gW1xuXHQn5rul55So6L+H5ruk5ZmoJyxcblx0J+axgumXu+e8luiAhScsXG5cdCfmsYLpl7vnmb7np5HnpL7ljLonLFxuXHQnRXhhbXBsZScsXG5cdCdFeHRlcm5hbCBjb250cmlidXRvcnMnLFxuXHQnTWFpbnRlbmFuY2Ugc2NyaXB0Jyxcblx0J01lZGlhV2lraSBkZWZhdWx0Jyxcblx0J01lZGlhV2lraSBtZXNzYWdlIGRlbGl2ZXJ5Jyxcblx0J05ldyB1c2VyIHBhZ2UnLFxuXTtcbmNvbnN0IFdFQk1BU1RFUl9MSVNUOiBzdHJpbmdbXSA9IFsnUWl1V2VuJywgJ1FpdVdlbiBmb3IgQWNjb3VudHMnLCAnUWl1d2VuU29jaWFsTWVkaWEnXTtcblxuZXhwb3J0IHtTWVNURU1fU0NSSVBUX0xJU1QsIFdFQk1BU1RFUl9MSVNUfTtcbiIsICJjb25zdCBDTEFTU19OQU1FOiBzdHJpbmcgPSAnZ2FkZ2V0LWdlb19sb2NhdGlvbl9yZWFkZXInO1xuY29uc3QgQ0xBU1NfTkFNRV9JQ09OOiBzdHJpbmcgPSBgJHtDTEFTU19OQU1FfV9faWNvbmA7XG5jb25zdCBDTEFTU19OQU1FX1RFWFQ6IHN0cmluZyA9IGAke0NMQVNTX05BTUV9X190ZXh0YDtcblxuZXhwb3J0IHtTWVNURU1fU0NSSVBUX0xJU1QsIFdFQk1BU1RFUl9MSVNUfSBmcm9tICd+L0dlb0xvY2F0aW9uL21vZHVsZXMvY29uc3RhbnQnO1xuZXhwb3J0IHtDTEFTU19OQU1FLCBDTEFTU19OQU1FX0lDT04sIENMQVNTX05BTUVfVEVYVH07XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtpbml0TXdBcGl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmNvbnN0IGFwaTogbXcuQXBpID0gaW5pdE13QXBpKGBHZW9Mb2NhdGlvblJlYWRlci8ke09QVElPTlMudmVyc2lvbn1gKTtcblxuZXhwb3J0IHthcGl9O1xuIiwgImNvbnN0IGdldENvdW50cnlPckFyZWFOYW1lTGlzdCA9ICgpID0+IHtcblx0Y29uc3Qge3dnVXNlckxhbmd1YWdlfSA9IG13LmNvbmZpZy5nZXQoKTtcblxuXHRpZiAoWyd6aC1oYW50JywgJ3poLWhrJywgJ3poLW1vJ10uaW5jbHVkZXMod2dVc2VyTGFuZ3VhZ2UpKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdEFGOiAn6Zi/5a+M5rGXJyxcblx0XHRcdEFYOiAn5aWn6JitJyxcblx0XHRcdEFMOiAn6Zi/54i+5be05bC85LqeJyxcblx0XHRcdERaOiAn6Zi/54i+5Y+K5Yip5LqeJyxcblx0XHRcdEFTOiAn576O5bGs6Jap5pGp5LqeJyxcblx0XHRcdEFEOiAn5a6J6YGT54i+Jyxcblx0XHRcdEFPOiAn5a6J5ZOl5ouJJyxcblx0XHRcdEFJOiAn5a6J5Zyt5ouJJyxcblx0XHRcdEFROiAn5Y2X5qW15rSyJyxcblx0XHRcdEFHOiAn5a6J5o+Q55Oc5ZKM5be05biD6YGUJyxcblx0XHRcdEFSOiAn6Zi/5qC55bu3Jyxcblx0XHRcdEFNOiAn5Lqe576O5bC85LqeJyxcblx0XHRcdEFXOiAn6Zi/6a2v5be0Jyxcblx0XHRcdEFVOiAn5r6z5rSyJyxcblx0XHRcdEFUOiAn5aWn5Zyw5YipJyxcblx0XHRcdEFaOiAn6Zi/5aGe5ouc55aGJyxcblx0XHRcdEJTOiAn5be05ZOI6aasJyxcblx0XHRcdEJIOiAn5be05p6XJyxcblx0XHRcdEJEOiAn5a2f5Yqg5ouJ5ZyLJyxcblx0XHRcdEJCOiAn5be05be05aSa5pavJyxcblx0XHRcdEJZOiAn55m95L+E576F5pavJyxcblx0XHRcdEJFOiAn5q+U5Yip5pmCJyxcblx0XHRcdEJaOiAn5Lyv5Yip6IyyJyxcblx0XHRcdEJKOiAn6LKd5a+nJyxcblx0XHRcdEJNOiAn55m+5oWV6YGUJyxcblx0XHRcdEJUOiAn5LiN5Li5Jyxcblx0XHRcdEJPOiAn54675Yip57at5LqeJyxcblx0XHRcdEJROiAn6I236Jit5Yqg5YuS5q+U5Y2AJyxcblx0XHRcdEJBOiAn5rOi6buRJyxcblx0XHRcdEJXOiAn5Y2a6Iyo55Om57SNJyxcblx0XHRcdEJWOiAn5biD6Z+L5bO2Jyxcblx0XHRcdEJSOiAn5be06KW/Jyxcblx0XHRcdElPOiAn6Iux5bGs5Y2w5bqm5rSL6aCY5ZywJyxcblx0XHRcdEJOOiAn5rG26JCKJyxcblx0XHRcdEJHOiAn5L+d5Yqg5Yip5LqeJyxcblx0XHRcdEJGOiAn5biD5Z+657SN5rOV57SiJyxcblx0XHRcdEJJOiAn5biD6ZqG6L+qJyxcblx0XHRcdENWOiAn5L2b5b6X6KeSJyxcblx0XHRcdEtIOiAn5p+s5Z+U5a+oJyxcblx0XHRcdENNOiAn5ZaA6bql6ZqGJyxcblx0XHRcdENBOiAn5Yqg5ou/5aSnJyxcblx0XHRcdEtZOiAn6ZaL5pu8576k5bO2Jyxcblx0XHRcdENGOiAn5Lit6Z2eJyxcblx0XHRcdFREOiAn5LmN5b6XJyxcblx0XHRcdENMOiAn5pm65YipJyxcblx0XHRcdENOOiAn5Lit5ZyLJyxcblx0XHRcdENYOiAn6IGW6KqV5bO2Jyxcblx0XHRcdENDOiAn56eR56eR5pav77yI5Z+65p6X77yJ576k5bO2Jyxcblx0XHRcdENPOiAn5ZOl5YCr5q+U5LqeJyxcblx0XHRcdEtNOiAn56eR5pGp576FJyxcblx0XHRcdENHOiAn5Ymb5p6c5YWx5ZKM5ZyLJyxcblx0XHRcdENEOiAn5Ymb5p6c5rCR5Li75YWx5ZKM5ZyLJyxcblx0XHRcdENLOiAn5bqr5YWL576k5bO2Jyxcblx0XHRcdENSOiAn5ZOl5pav6YGU6buO5YqgJyxcblx0XHRcdENJOiAn56eR54m56L+q55OmJyxcblx0XHRcdEhSOiAn5YWL576F5Zyw5LqeJyxcblx0XHRcdENVOiAn5Y+k5be0Jyxcblx0XHRcdENXOiAn5bqr5ouJ57SiJyxcblx0XHRcdENZOiAn5aGe5rWm6Lev5pavJyxcblx0XHRcdENaOiAn5o235YWLJyxcblx0XHRcdERLOiAn5Li56bqlJyxcblx0XHRcdERKOiAn5ZCJ5biD5o+QJyxcblx0XHRcdERNOiAn5aSa57Gz5bC85YWLJyxcblx0XHRcdERPOiAn5aSa57Gz5bC85YqgJyxcblx0XHRcdEVDOiAn5Y6E55Oc5aSa54i+Jyxcblx0XHRcdEVHOiAn5Z+D5Y+KJyxcblx0XHRcdFNWOiAn6Jap54i+55Om5aSaJyxcblx0XHRcdEdROiAn6LWk6YGT55W/5YWn5LqeJyxcblx0XHRcdEVSOiAn5Y6E56uL54m56YeM5LqeJyxcblx0XHRcdEVFOiAn5oSb5rKZ5bC85LqeJyxcblx0XHRcdFNaOiAn5pav5aiB5aOr6JitJyxcblx0XHRcdEVUOiAn5Z+D5aGe5L+E5q+U5LqeJyxcblx0XHRcdEZLOiAn56aP5YWL6Jit576k5bO2Jyxcblx0XHRcdEZPOiAn5rOV576F576k5bO2Jyxcblx0XHRcdEZKOiAn5paQ5r+fJyxcblx0XHRcdEZJOiAn6Iqs6JitJyxcblx0XHRcdEZSOiAn5rOV5ZyLJyxcblx0XHRcdEdGOiAn5rOV5bGs5Zyt5Lqe6YKjJyxcblx0XHRcdFBGOiAn5rOV5bGs5rOi5Yip5bC86KW/5LqeJyxcblx0XHRcdFRGOiAn5rOV5bGs5Y2X6YOo5ZKM5Y2X5qW16aCY5ZywJyxcblx0XHRcdEdBOiAn5Yqg6JOsJyxcblx0XHRcdEdNOiAn5bKh5q+U5LqeJyxcblx0XHRcdEdFOiAn5qC86a2v5ZCJ5LqeJyxcblx0XHRcdERFOiAn5b635ZyLJyxcblx0XHRcdEdIOiAn5Yqg57SNJyxcblx0XHRcdEdJOiAn55u05biD576F6ZmAJyxcblx0XHRcdEdSOiAn5biM6IeYJyxcblx0XHRcdEdMOiAn5qC86Zm16JitJyxcblx0XHRcdEdEOiAn5qC85p6X57SN6YGUJyxcblx0XHRcdEdQOiAn55Oc5b63576F5pmuJyxcblx0XHRcdEdVOiAn6Zec5bO2Jyxcblx0XHRcdEdUOiAn5Y2x5Zyw6aas5ouJJyxcblx0XHRcdEdHOiAn5qC56KW/Jyxcblx0XHRcdEdOOiAn55W/5YWn5LqeJyxcblx0XHRcdEdXOiAn55W/5YWn5Lqe5q+U57S5Jyxcblx0XHRcdEdZOiAn5Zyt5Lqe6YKjJyxcblx0XHRcdEhUOiAn5rW35ZywJyxcblx0XHRcdEhNOiAn6LWr5b635bO25ZKM6bql5YWL5ZSQ57SN576k5bO2Jyxcblx0XHRcdFZBOiAn5qK16JKC5bKhJyxcblx0XHRcdEhOOiAn5rSq6YO95ouJ5pavJyxcblx0XHRcdEhLOiAn5Lit5ZyL6aaZ5rivJyxcblx0XHRcdEhVOiAn5YyI54mZ5YipJyxcblx0XHRcdElTOiAn5Yaw5bO2Jyxcblx0XHRcdElOOiAn5Y2w5bqmJyxcblx0XHRcdElEOiAn5Y2w5bC8Jyxcblx0XHRcdElSOiAn5LyK5pyXJyxcblx0XHRcdElROiAn5LyK5ouJ5YWLJyxcblx0XHRcdElFOiAn5oSb54i+6JitJyxcblx0XHRcdElNOiAn5Lq65bO2Jyxcblx0XHRcdElMOiAn5Lul6Imy5YiXJyxcblx0XHRcdElUOiAn5oSP5aSn5YipJyxcblx0XHRcdEpNOiAn54mZ6LK35YqgJyxcblx0XHRcdEpQOiAn5pel5pysJyxcblx0XHRcdEpFOiAn5r6k6KW/Jyxcblx0XHRcdEpPOiAn57SE5pemJyxcblx0XHRcdEtaOiAn5ZOI6Jap5YWLJyxcblx0XHRcdEtFOiAn6IKv6ZuFJyxcblx0XHRcdEtJOiAn5Z+66YeM5be05pavJyxcblx0XHRcdEtQOiAn5YyX6Z+TJyxcblx0XHRcdEtSOiAn6Z+T5ZyLJyxcblx0XHRcdEtXOiAn56eR5aiB54m5Jyxcblx0XHRcdEtHOiAn5ZCJ54i+5ZCJ5pavJyxcblx0XHRcdExBOiAn6ICB5pK+Jyxcblx0XHRcdExWOiAn5ouJ6ISr57at5LqeJyxcblx0XHRcdExCOiAn6buO5be05aupJyxcblx0XHRcdExTOiAn6JCK57Si5omYJyxcblx0XHRcdExSOiAn5Yip5q+U6YeM5LqeJyxcblx0XHRcdExZOiAn5Yip5q+U5LqeJyxcblx0XHRcdExJOiAn5YiX5pSv5pWm5aOr55m7Jyxcblx0XHRcdExUOiAn56uL6Zm25a6bJyxcblx0XHRcdExVOiAn55un5qOu5aChJyxcblx0XHRcdE1POiAn5Lit5ZyL5r6z6ZaAJyxcblx0XHRcdE1HOiAn6aas6YGU5Yqg5pav5YqgJyxcblx0XHRcdE1XOiAn6aas5ouJ57atJyxcblx0XHRcdE1ZOiAn6aas5L6G6KW/5LqeJyxcblx0XHRcdE1WOiAn6aas54i+5Luj5aSrJyxcblx0XHRcdE1MOiAn6aas6YeMJyxcblx0XHRcdE1UOiAn6aas6ICz5LuWJyxcblx0XHRcdE1IOiAn6aas57S554i+576k5bO2Jyxcblx0XHRcdE1ROiAn6aas5o+Q5bC85YWLJyxcblx0XHRcdE1SOiAn5q+b6YeM5aGU5bC85LqeJyxcblx0XHRcdE1VOiAn5q+b6YeM6KOY5pavJyxcblx0XHRcdFlUOiAn6aas57SE54m5Jyxcblx0XHRcdE1YOiAn5aKo6KW/5ZOlJyxcblx0XHRcdEZNOiAn5a+G5YWL576F5bC86KW/5Lqe6IGv6YKmJyxcblx0XHRcdE1EOiAn5pGp54i+5aSa55OmJyxcblx0XHRcdE1DOiAn5pGp57SN5ZOlJyxcblx0XHRcdE1OOiAn6JKZ5Y+kJyxcblx0XHRcdE1FOiAn6buR5bGxJyxcblx0XHRcdE1TOiAn6JKZ54m55aGe5ouJ54m5Jyxcblx0XHRcdE1BOiAn5pGp5rSb5ZOlJyxcblx0XHRcdE1aOiAn6I6r5qGR5q+U5YWLJyxcblx0XHRcdE1NOiAn57es55S4Jyxcblx0XHRcdE5BOiAn57SN57Gz5q+U5LqeJyxcblx0XHRcdE5SOiAn55GZ6a2vJyxcblx0XHRcdE5QOiAn5bC85rOK54i+Jyxcblx0XHRcdE5MOiAn6I236JitJyxcblx0XHRcdE5DOiAn5paw5ZaA6YeM5aSa5bC85LqeJyxcblx0XHRcdE5aOiAn5paw6KW/6JitJyxcblx0XHRcdE5JOiAn5bC85Yqg5ouJ55OcJyxcblx0XHRcdE5FOiAn5bC85pel54i+Jyxcblx0XHRcdE5HOiAn5bC85pel5Yip5LqeJyxcblx0XHRcdE5VOiAn57SQ5Z+DJyxcblx0XHRcdE5GOiAn6Ku+56aP5YWL5bO2Jyxcblx0XHRcdE1LOiAn5YyX6aas5YW26aCTJyxcblx0XHRcdE1QOiAn5YyX6aas5Yip5a6J57SN576k5bO2Jyxcblx0XHRcdE5POiAn5oyq5aiBJyxcblx0XHRcdE9NOiAn6Zi/5pu8Jyxcblx0XHRcdFBLOiAn5be05Z+65pav5Z2mJyxcblx0XHRcdFBXOiAn5biV5YueJyxcblx0XHRcdFBTOiAn5be05YuS5pav5Z2mJyxcblx0XHRcdFBBOiAn5be05ou/6aasJyxcblx0XHRcdFBHOiAn5be05biD5Lqe5paw55W/5YWn5LqeJyxcblx0XHRcdFBZOiAn5be05ouJ5ZytJyxcblx0XHRcdFBFOiAn56eY6a2vJyxcblx0XHRcdFBIOiAn6I+y5b6L6LOTJyxcblx0XHRcdFBOOiAn55qu54m56IKv576k5bO2Jyxcblx0XHRcdFBMOiAn5rOi6JitJyxcblx0XHRcdFBUOiAn6JGh6JCE54mZJyxcblx0XHRcdFBSOiAn5rOi5aSa6buO5ZCEJyxcblx0XHRcdFFBOiAn5Y2h5aGU54i+Jyxcblx0XHRcdFJFOiAn55WZ5bC85rGqJyxcblx0XHRcdFJPOiAn576F6aas5bC85LqeJyxcblx0XHRcdFJVOiAn5L+E576F5pavJyxcblx0XHRcdFJXOiAn55un5pe66YGUJyxcblx0XHRcdEJMOiAn6IGW5be05rOw5YuS57GzJyxcblx0XHRcdFNIOiAn6IGW5rW35YCr5aic44CB6Zi/5qOu5p2+5ZKM54m56YeM5pav5Z2mLemBlOW6q+WwvOS6nicsXG5cdFx0XHRLTjogJ+iBluWfuuiMqOWSjOWwvOe2reaWrycsXG5cdFx0XHRMQzogJ+iBluebp+ilv+S6nicsXG5cdFx0XHRNRjogJ+azleWxrOiBlummrOS4gScsXG5cdFx0XHRQTTogJ+iBluearuWfg+eIvuWSjOWvhuWFi+mahicsXG5cdFx0XHRWQzogJ+iBluaWh+ajrueJueWSjOagvOael+e0jeS4geaWrycsXG5cdFx0XHRXUzogJ+iWqeaRqeS6nicsXG5cdFx0XHRTTTogJ+iBlummrOWKm+irvicsXG5cdFx0XHRTVDogJ+iBluWkmue+juWSjOaZruael+ilv+avlCcsXG5cdFx0XHRTQTogJ+aymeWcsOmYv+aLieS8rycsXG5cdFx0XHRTTjogJ+WhnuWFp+WKoOeIvicsXG5cdFx0XHRSUzogJ+WhnueIvue2reS6nicsXG5cdFx0XHRTQzogJ+WhnuiIjOeIvicsXG5cdFx0XHRTTDogJ+WhnuaLieWIqeaYgicsXG5cdFx0XHRTRzogJ+aWsOWKoOWdoScsXG5cdFx0XHRTWDogJ+iNt+WxrOiBlummrOS4gScsXG5cdFx0XHRTSzogJ+aWr+a0m+S8kOWFiycsXG5cdFx0XHRTSTogJ+aWr+a0m+aWh+WwvOS6nicsXG5cdFx0XHRTQjogJ+aJgOe+hemWgOe+pOWzticsXG5cdFx0XHRTTzogJ+e0oummrOmHjCcsXG5cdFx0XHRaQTogJ+WNl+mdnicsXG5cdFx0XHRHUzogJ+WNl+WWrOayu+S6nuWSjOWNl+ahkeWogeWlh+e+pOWzticsXG5cdFx0XHRTUzogJ+WNl+iYh+S4uScsXG5cdFx0XHRFUzogJ+ilv+ePreeJmScsXG5cdFx0XHRMSzogJ+aWr+mHjOiYreWNoScsXG5cdFx0XHRTRDogJ+iYh+S4uScsXG5cdFx0XHRTUjogJ+iYh+mHjOWNlycsXG5cdFx0XHRTSjogJ+aWr+eTpueIvuW3tOWSjOaPmummrOW7ticsXG5cdFx0XHRTRTogJ+eRnuWFuCcsXG5cdFx0XHRDSDogJ+eRnuWjqycsXG5cdFx0XHRTWTogJ+aVmOWIqeS6nicsXG5cdFx0XHRUVzogJ+S4reWci+iHuueBoycsXG5cdFx0XHRUSjogJ+WhlOWQieWFiycsXG5cdFx0XHRUWjogJ+WdpuahkeWwvOS6nicsXG5cdFx0XHRUSDogJ+azsOWciycsXG5cdFx0XHRUTDogJ+adseW4neaxticsXG5cdFx0XHRURzogJ+WkmuWTpScsXG5cdFx0XHRUSzogJ+aJmOWFi+WLnicsXG5cdFx0XHRUTzogJ+a5r+WKoCcsXG5cdFx0XHRUVDogJ+WNg+mHjOmBlOWSjOWkmuW3tOWTpScsXG5cdFx0XHRUTjogJ+eqgeWwvOilv+S6nicsXG5cdFx0XHRUUjogJ+Wcn+iAs+WFticsXG5cdFx0XHRUTTogJ+Wcn+W6q+abvCcsXG5cdFx0XHRUQzogJ+eJueWFi+aWr+WSjOWHseenkeaWr+e+pOWzticsXG5cdFx0XHRUVjogJ+WclueTpuebpycsXG5cdFx0XHRVRzogJ+eDj+W5sumBlCcsXG5cdFx0XHRVQTogJ+eDj+WFi+iYrScsXG5cdFx0XHRBRTogJ+mYv+iBr+mFiycsXG5cdFx0XHRHQjogJ+iLseWciycsXG5cdFx0XHRVUzogJ+e+juWciycsXG5cdFx0XHRVTTogJ+e+juWci+acrOWcn+WkluWwj+WztuW2vCcsXG5cdFx0XHRVWTogJ+eDj+aLieWcrScsXG5cdFx0XHRVWjogJ+eDj+iMsuWIpeWFiycsXG5cdFx0XHRWVTogJ+eTpuWKqumYv+WclicsXG5cdFx0XHRWRTogJ+WnlOWFp+eRnuaLiScsXG5cdFx0XHRWTjogJ+i2iuWNlycsXG5cdFx0XHRWRzogJ+iLseWxrOiZleWls+e+pOWzticsXG5cdFx0XHRWSTogJ+e+juWxrOiZleWls+e+pOWzticsXG5cdFx0XHRXRjogJ+eTpuWIqeaWr+WSjOWvjOWclue0jScsXG5cdFx0XHRFSDogJ+ilv+aSkuWTiOaLiScsXG5cdFx0XHRZRTogJ+S5n+mWgCcsXG5cdFx0XHRaTTogJ+i0iuavlOS6nicsXG5cdFx0XHRaVzogJ+a0peW3tOW4g+mfiycsXG5cdFx0fTtcblx0fSBlbHNlIGlmIChbJ3poLXR3J10uaW5jbHVkZXMod2dVc2VyTGFuZ3VhZ2UpKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdEFGOiAn6Zi/5a+M5rGXJyxcblx0XHRcdEFYOiAn5aWn6JitJyxcblx0XHRcdEFMOiAn6Zi/54i+5be05bC85LqeJyxcblx0XHRcdERaOiAn6Zi/54i+5Y+K5Yip5LqeJyxcblx0XHRcdEFTOiAn576O5bGs6Jap5pGp5LqeJyxcblx0XHRcdEFEOiAn5a6J6YGT54i+Jyxcblx0XHRcdEFPOiAn5a6J5ZOl5ouJJyxcblx0XHRcdEFJOiAn5a6J5Zyt5ouJJyxcblx0XHRcdEFROiAn5Y2X5qW15rSyJyxcblx0XHRcdEFHOiAn5a6J5Zyw5Y2h5Y+K5be05biD6YGUJyxcblx0XHRcdEFSOiAn6Zi/5qC55bu3Jyxcblx0XHRcdEFNOiAn5Lqe576O5bC85LqeJyxcblx0XHRcdEFXOiAn6Zi/6a2v5be0Jyxcblx0XHRcdEFVOiAn5r6z5rSyJyxcblx0XHRcdEFUOiAn5aWn5Zyw5YipJyxcblx0XHRcdEFaOiAn5Lqe5aGe5ouc54S2Jyxcblx0XHRcdEJTOiAn5be05ZOI6aasJyxcblx0XHRcdEJIOiAn5be05p6XJyxcblx0XHRcdEJEOiAn5a2f5Yqg5ouJ5ZyLJyxcblx0XHRcdEJCOiAn5be06LKd5aSaJyxcblx0XHRcdEJZOiAn55m95L+E576F5pavJyxcblx0XHRcdEJFOiAn5q+U5Yip5pmCJyxcblx0XHRcdEJaOiAn6LKd6YeM5pavJyxcblx0XHRcdEJKOiAn6LKd5Y2XJyxcblx0XHRcdEJNOiAn55m+5oWV6YGUJyxcblx0XHRcdEJUOiAn5LiN5Li5Jyxcblx0XHRcdEJPOiAn54675Yip57at5LqeJyxcblx0XHRcdEJROiAn6I236Jit5Yqg5YuS5q+U5Y2AJyxcblx0XHRcdEJBOiAn5rOi6LWrJyxcblx0XHRcdEJXOiAn5rOi5pyt6YKjJyxcblx0XHRcdEJWOiAn5biD6Z+L5bO2Jyxcblx0XHRcdEJSOiAn5be06KW/Jyxcblx0XHRcdElPOiAn6Iux5bGs5Y2w5bqm5rSL6aCY5ZywJyxcblx0XHRcdEJOOiAn5rG26JCKJyxcblx0XHRcdEJHOiAn5L+d5Yqg5Yip5LqeJyxcblx0XHRcdEJGOiAn5biD5ZCJ57SN5rOV57SiJyxcblx0XHRcdEJJOiAn6JKy6ZqG5ZywJyxcblx0XHRcdENWOiAn57at5b636KeSJyxcblx0XHRcdEtIOiAn5p+s5Z+U5a+oJyxcblx0XHRcdENNOiAn5ZaA6bql6ZqGJyxcblx0XHRcdENBOiAn5Yqg5ou/5aSnJyxcblx0XHRcdEtZOiAn6ZaL5pu8576k5bO2Jyxcblx0XHRcdENGOiAn5Lit6Z2eJyxcblx0XHRcdFREOiAn5p+l5b63Jyxcblx0XHRcdENMOiAn5pm65YipJyxcblx0XHRcdENOOiAn5Lit5ZyLJyxcblx0XHRcdENYOiAn6IGW6KqV5bO2Jyxcblx0XHRcdENDOiAn56eR56eR5pav77yI5Z+65p6X77yJ576k5bO2Jyxcblx0XHRcdENPOiAn5ZOl5YCr5q+U5LqeJyxcblx0XHRcdEtNOiAn6JGb5pGpJyxcblx0XHRcdENHOiAn5Ymb5p6c5YWx5ZKM5ZyLJyxcblx0XHRcdENEOiAn5Ymb5p6c5rCR5Li75YWx5ZKM5ZyLJyxcblx0XHRcdENLOiAn5bqr5YWL576k5bO2Jyxcblx0XHRcdENSOiAn5ZOl5pav5aSn6buO5YqgJyxcblx0XHRcdENJOiAn6LGh54mZ5rW35bK4Jyxcblx0XHRcdEhSOiAn5YWL576F5Z+D6KW/5LqeJyxcblx0XHRcdENVOiAn5Y+k5be0Jyxcblx0XHRcdENXOiAn5Y+k5ouJ57SiJyxcblx0XHRcdENZOiAn6LO95pmu5YuS5pavJyxcblx0XHRcdENaOiAn5o235YWLJyxcblx0XHRcdERLOiAn5Li56bqlJyxcblx0XHRcdERKOiAn5ZCJ5biD5ZywJyxcblx0XHRcdERNOiAn5aSa57Gz5bC85YWLJyxcblx0XHRcdERPOiAn5aSa5piO5bC85YqgJyxcblx0XHRcdEVDOiAn5Y6E55Oc5aSaJyxcblx0XHRcdEVHOiAn5Z+D5Y+KJyxcblx0XHRcdFNWOiAn6Jap54i+55Om5aSaJyxcblx0XHRcdEdROiAn6LWk6YGT5bm+5YWn5LqeJyxcblx0XHRcdEVSOiAn5Y6E5Yip5Z6C5LqeJyxcblx0XHRcdEVFOiAn5oSb5rKZ5bC85LqeJyxcblx0XHRcdFNaOiAn5Y+y55Om5bid5bC8Jyxcblx0XHRcdEVUOiAn6KGj57Si5q+U5LqeJyxcblx0XHRcdEZLOiAn56aP5YWL6Jit576k5bO2Jyxcblx0XHRcdEZPOiAn5rOV576F576k5bO2Jyxcblx0XHRcdEZKOiAn5paQ5r+fJyxcblx0XHRcdEZJOiAn6Iqs6JitJyxcblx0XHRcdEZSOiAn5rOV5ZyLJyxcblx0XHRcdEdGOiAn5rOV5bGs5Zyt5Lqe6YKjJyxcblx0XHRcdFBGOiAn5rOV5bGs54676YeM5bC86KW/5LqeJyxcblx0XHRcdFRGOiAn5rOV5bGs5Y2X6YOo5ZKM5Y2X5qW16aCY5ZywJyxcblx0XHRcdEdBOiAn5Yqg5b2tJyxcblx0XHRcdEdNOiAn55SY5q+U5LqeJyxcblx0XHRcdEdFOiAn5Zas5rK75LqeJyxcblx0XHRcdERFOiAn5b635ZyLJyxcblx0XHRcdEdIOiAn6L+m57SNJyxcblx0XHRcdEdJOiAn55u05biD576F6ZmAJyxcblx0XHRcdEdSOiAn5biM6IeYJyxcblx0XHRcdEdMOiAn5qC86Zm16JitJyxcblx0XHRcdEdEOiAn5qC855Ge6YKj6YGUJyxcblx0XHRcdEdQOiAn55Oc5b63576F5pmuJyxcblx0XHRcdEdVOiAn6Zec5bO2Jyxcblx0XHRcdEdUOiAn55Oc5Zyw6aas5ouJJyxcblx0XHRcdEdHOiAn5qC56KW/Jyxcblx0XHRcdEdOOiAn5bm+5YWn5LqeJyxcblx0XHRcdEdXOiAn5bm+5YWn5Lqe5q+U57SiJyxcblx0XHRcdEdZOiAn6JOL5Lqe6YKjJyxcblx0XHRcdEhUOiAn5rW35ZywJyxcblx0XHRcdEhNOiAn6LWr5b635bO25ZKM6bql5YWL5ZSQ57SN576k5bO2Jyxcblx0XHRcdFZBOiAn5qK16JKC5bKhJyxcblx0XHRcdEhOOiAn5a6P6YO95ouJ5pavJyxcblx0XHRcdEhLOiAn5Lit5ZyL6aaZ5rivJyxcblx0XHRcdEhVOiAn5YyI54mZ5YipJyxcblx0XHRcdElTOiAn5Yaw5bO2Jyxcblx0XHRcdElOOiAn5Y2w5bqmJyxcblx0XHRcdElEOiAn5Y2w5bC8Jyxcblx0XHRcdElSOiAn5LyK5pyXJyxcblx0XHRcdElROiAn5LyK5ouJ5YWLJyxcblx0XHRcdElFOiAn5oSb54i+6JitJyxcblx0XHRcdElNOiAn5pu85bO2Jyxcblx0XHRcdElMOiAn5Lul6Imy5YiXJyxcblx0XHRcdElUOiAn576p5aSn5YipJyxcblx0XHRcdEpNOiAn54mZ6LK35YqgJyxcblx0XHRcdEpQOiAn5pel5pysJyxcblx0XHRcdEpFOiAn5r6k6KW/Jyxcblx0XHRcdEpPOiAn57SE5pemJyxcblx0XHRcdEtaOiAn5ZOI6Jap5YWLJyxcblx0XHRcdEtFOiAn6IKv5LqeJyxcblx0XHRcdEtJOiAn5ZCJ6YeM5be05pavJyxcblx0XHRcdEtQOiAn5YyX6Z+TJyxcblx0XHRcdEtSOiAn6Z+T5ZyLJyxcblx0XHRcdEtXOiAn56eR5aiB54m5Jyxcblx0XHRcdEtHOiAn5ZCJ54i+5ZCJ5pavJyxcblx0XHRcdExBOiAn6ICB5pK+Jyxcblx0XHRcdExWOiAn5ouJ6ISr57at5LqeJyxcblx0XHRcdExCOiAn6buO5be05aupJyxcblx0XHRcdExTOiAn6LO057Si5omYJyxcblx0XHRcdExSOiAn6LO05q+U55Ge5LqeJyxcblx0XHRcdExZOiAn5Yip5q+U5LqeJyxcblx0XHRcdExJOiAn5YiX5pSv5pWm5pav55m7Jyxcblx0XHRcdExUOiAn56uL6Zm25a6bJyxcblx0XHRcdExVOiAn55un5qOu5aChJyxcblx0XHRcdE1POiAn5Lit5ZyL5r6z6ZaAJyxcblx0XHRcdE1HOiAn6aas6YGU5Yqg5pav5YqgJyxcblx0XHRcdE1XOiAn6aas5ouJ5aiBJyxcblx0XHRcdE1ZOiAn6aas5L6G6KW/5LqeJyxcblx0XHRcdE1WOiAn6aas54i+5Zyw5aSrJyxcblx0XHRcdE1MOiAn6aas6YeMJyxcblx0XHRcdE1UOiAn6aas54i+5LuWJyxcblx0XHRcdE1IOiAn6aas57S554i+576k5bO2Jyxcblx0XHRcdE1ROiAn6aas5o+Q5bC85YWLJyxcblx0XHRcdE1SOiAn6IyF5Yip5aGU5bC85LqeJyxcblx0XHRcdE1VOiAn5qih6YeM6KW/5pavJyxcblx0XHRcdFlUOiAn6aas57SE54m5Jyxcblx0XHRcdE1YOiAn5aKo6KW/5ZOlJyxcblx0XHRcdEZNOiAn5a+G5YWL576F5bC86KW/5Lqe6IGv6YKmJyxcblx0XHRcdE1EOiAn5pGp54i+5aSa55OmJyxcblx0XHRcdE1DOiAn5pGp57SN5ZOlJyxcblx0XHRcdE1OOiAn6JKZ5Y+kJyxcblx0XHRcdE1FOiAn6JKZ54m55YWn5ZOl576FJyxcblx0XHRcdE1TOiAn6JKZ5ZOy6IeYJyxcblx0XHRcdE1BOiAn5pGp5rSb5ZOlJyxcblx0XHRcdE1aOiAn6I6r5LiJ5q+U5YWLJyxcblx0XHRcdE1NOiAn57es55S4Jyxcblx0XHRcdE5BOiAn57SN57Gz5q+U5LqeJyxcblx0XHRcdE5SOiAn6Ku+6a2vJyxcblx0XHRcdE5QOiAn5bC85rOK54i+Jyxcblx0XHRcdE5MOiAn6I236JitJyxcblx0XHRcdE5DOiAn5paw5ZaA6YeM5aSa5bC85LqeJyxcblx0XHRcdE5aOiAn57SQ6KW/6JitJyxcblx0XHRcdE5JOiAn5bC85Yqg5ouJ55OcJyxcblx0XHRcdE5FOiAn5bC85pelJyxcblx0XHRcdE5HOiAn5aWI5Y+K5Yip5LqeJyxcblx0XHRcdE5VOiAn57SQ5Z+DJyxcblx0XHRcdE5GOiAn6Ku+56aP5YWL5bO2Jyxcblx0XHRcdE1LOiAn5YyX6aas5YW26aCTJyxcblx0XHRcdE1QOiAn5YyX6aas5Yip5a6J57SN576k5bO2Jyxcblx0XHRcdE5POiAn5oyq5aiBJyxcblx0XHRcdE9NOiAn6Zi/5pu8Jyxcblx0XHRcdFBLOiAn5be05Z+65pav5Z2mJyxcblx0XHRcdFBXOiAn5bib55CJJyxcblx0XHRcdFBTOiAn5be05YuS5pav5Z2mJyxcblx0XHRcdFBBOiAn5be05ou/6aasJyxcblx0XHRcdFBHOiAn5be05biD5Lqe57SQ5bm+5YWn5LqeJyxcblx0XHRcdFBZOiAn5be05ouJ5ZytJyxcblx0XHRcdFBFOiAn56eY6a2vJyxcblx0XHRcdFBIOiAn6I+y5b6L6LOTJyxcblx0XHRcdFBOOiAn55qu54m56IKv576k5bO2Jyxcblx0XHRcdFBMOiAn5rOi6JitJyxcblx0XHRcdFBUOiAn6JGh6JCE54mZJyxcblx0XHRcdFBSOiAn5rOi5aSa6buO5ZCEJyxcblx0XHRcdFFBOiAn5Y2h6YGUJyxcblx0XHRcdFJFOiAn55WZ5bC85pe6Jyxcblx0XHRcdFJPOiAn576F6aas5bC85LqeJyxcblx0XHRcdFJVOiAn5L+E576F5pavJyxcblx0XHRcdFJXOiAn55un5a6J6YGUJyxcblx0XHRcdEJMOiAn6IGW5be05rOw5YuS57GzJyxcblx0XHRcdFNIOiAn6IGW5rW36JOu5aic44CB6Zi/5qOu5p2+5ZKM54m56YeM5pav5Z2mLemBlOW6q+WwvOS6nicsXG5cdFx0XHRLTjogJ+iBluWFi+mHjOaWr+Wkmuemj+WPiuWwvOe2reaWrycsXG5cdFx0XHRMQzogJ+iBlumcsuilv+S6nicsXG5cdFx0XHRNRjogJ+azleWxrOiBlummrOS4gScsXG5cdFx0XHRQTTogJ+iBluearuiAtuiIh+WvhuWFi+mahicsXG5cdFx0XHRWQzogJ+iBluaWh+ajruWPiuagvOeRnumCo+S4gScsXG5cdFx0XHRXUzogJ+iWqeaRqeS6nicsXG5cdFx0XHRTTTogJ+iBlummrOWIqeirvicsXG5cdFx0XHRTVDogJ+iBluWkmue+juaZruael+ilv+avlCcsXG5cdFx0XHRTQTogJ+aymeeDj+WcsOmYv+aLieS8rycsXG5cdFx0XHRTTjogJ+WhnuWFp+WKoOeIvicsXG5cdFx0XHRSUzogJ+WhnueIvue2reS6nicsXG5cdFx0XHRTQzogJ+WhnuW4reeIvicsXG5cdFx0XHRTTDogJ+eNheWtkOWxsScsXG5cdFx0XHRTRzogJ+aWsOWKoOWdoScsXG5cdFx0XHRTWDogJ+iNt+WxrOiBlummrOS4gScsXG5cdFx0XHRTSzogJ+aWr+a0m+S8kOWFiycsXG5cdFx0XHRTSTogJ+aWr+a0m+e2reWwvOS6nicsXG5cdFx0XHRTQjogJ+e0oue+hemWgOe+pOWzticsXG5cdFx0XHRTTzogJ+e0oummrOWIqeS6nicsXG5cdFx0XHRaQTogJ+WNl+mdnicsXG5cdFx0XHRHUzogJ+WNl+WWrOayu+S6nuWSjOWNl+ahkeWogeWlh+e+pOWzticsXG5cdFx0XHRTUzogJ+WNl+iYh+S4uScsXG5cdFx0XHRFUzogJ+ilv+ePreeJmScsXG5cdFx0XHRMSzogJ+aWr+mHjOiYreWNoScsXG5cdFx0XHRTRDogJ+iYh+S4uScsXG5cdFx0XHRTUjogJ+iYh+WIqeWNlycsXG5cdFx0XHRTSjogJ+aWr+eTpueIvuW3tOWSjOaPmummrOW7ticsXG5cdFx0XHRTRTogJ+eRnuWFuCcsXG5cdFx0XHRDSDogJ+eRnuWjqycsXG5cdFx0XHRTWTogJ+aVmOWIqeS6nicsXG5cdFx0XHRUVzogJ+S4reWci+iHuueBoycsXG5cdFx0XHRUSjogJ+WhlOWQieWFiycsXG5cdFx0XHRUWjogJ+WdpuWwmuWwvOS6nicsXG5cdFx0XHRUSDogJ+azsOWciycsXG5cdFx0XHRUTDogJ+adseW4neaxticsXG5cdFx0XHRURzogJ+WkmuWTpScsXG5cdFx0XHRUSzogJ+aJmOWFi+WLnicsXG5cdFx0XHRUTzogJ+adseWKoCcsXG5cdFx0XHRUVDogJ+WNg+mHjOmBlOWPiuaJmOW3tOWTpScsXG5cdFx0XHRUTjogJ+eqgeWwvOilv+S6nicsXG5cdFx0XHRUUjogJ+Wcn+iAs+WFticsXG5cdFx0XHRUTTogJ+Wcn+W6q+abvCcsXG5cdFx0XHRUQzogJ+Wcn+WFi+WHseWPr+e+pOWzticsXG5cdFx0XHRUVjogJ+WQkOeTpumtrycsXG5cdFx0XHRVRzogJ+eDj+W5sumBlCcsXG5cdFx0XHRVQTogJ+eDj+WFi+iYrScsXG5cdFx0XHRBRTogJ+mYv+iBrycsXG5cdFx0XHRHQjogJ+iLseWciycsXG5cdFx0XHRVUzogJ+e+juWciycsXG5cdFx0XHRVTTogJ+e+juWci+acrOWcn+WkluWwj+WztuW2vCcsXG5cdFx0XHRVWTogJ+eDj+aLieWcrScsXG5cdFx0XHRVWjogJ+eDj+iMsuWIpeWFiycsXG5cdFx0XHRWVTogJ+iQrOmCo+adnCcsXG5cdFx0XHRWRTogJ+WnlOWFp+eRnuaLiScsXG5cdFx0XHRWTjogJ+i2iuWNlycsXG5cdFx0XHRWRzogJ+iLseWxrOe2reS6rOe+pOWzticsXG5cdFx0XHRWSTogJ+e+juWxrOe2reS6rOe+pOWzticsXG5cdFx0XHRXRjogJ+eTpuWIqeaWr+WSjOWvjOWclue0jScsXG5cdFx0XHRFSDogJ+ilv+aSkuWTiOaLiScsXG5cdFx0XHRZRTogJ+iRiemWgCcsXG5cdFx0XHRaTTogJ+WwmuavlOS6nicsXG5cdFx0XHRaVzogJ+i+m+W3tOWogScsXG5cdFx0fTtcblx0fSBlbHNlIGlmIChbJ3poLW15JywgJ3poLXNnJ10uaW5jbHVkZXMod2dVc2VyTGFuZ3VhZ2UpKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdEFGOiAn6Zi/5a+M5rGXJyxcblx0XHRcdEFYOiAn5aWl5YWwJyxcblx0XHRcdEFMOiAn6Zi/5bCU5be05bC85LqaJyxcblx0XHRcdERaOiAn6Zi/5bCU5Y+K5Yip5LqaJyxcblx0XHRcdEFTOiAn576O5bGe6JCo5pGp5LqaJyxcblx0XHRcdEFEOiAn5a6J6YGT5bCUJyxcblx0XHRcdEFPOiAn5a6J5ZOl5ouJJyxcblx0XHRcdEFJOiAn5a6J5Zyt5ouJJyxcblx0XHRcdEFROiAn5Y2X5p6B5rSyJyxcblx0XHRcdEFHOiAn5a6J5o+Q55Oc5ZKM5be05biD6L6+Jyxcblx0XHRcdEFSOiAn6Zi/5qC55bu3Jyxcblx0XHRcdEFNOiAn5Lqa576O5bC85LqaJyxcblx0XHRcdEFXOiAn6Zi/6bKB5be0Jyxcblx0XHRcdEFVOiAn5r6z5aSn5Yip5LqaJyxcblx0XHRcdEFUOiAn5aWl5Zyw5YipJyxcblx0XHRcdEFaOiAn6Zi/5aGe5ouc55aGJyxcblx0XHRcdEJTOiAn5be05ZOI6amsJyxcblx0XHRcdEJIOiAn5be05p6XJyxcblx0XHRcdEJEOiAn5a2f5Yqg5ouJ5Zu9Jyxcblx0XHRcdEJCOiAn5be05be05aSa5pavJyxcblx0XHRcdEJZOiAn55m95L+E572X5pavJyxcblx0XHRcdEJFOiAn5q+U5Yip5pe2Jyxcblx0XHRcdEJaOiAn5Lyv5Yip5YW5Jyxcblx0XHRcdEJKOiAn6LSd5a6BJyxcblx0XHRcdEJNOiAn55m+5oWV5aSnJyxcblx0XHRcdEJUOiAn5LiN5Li5Jyxcblx0XHRcdEJPOiAn54675Yip57u05LqaJyxcblx0XHRcdEJROiAn6I235YWw5Yqg5YuS5q+U5Yy6Jyxcblx0XHRcdEJBOiAn5rOi6buRJyxcblx0XHRcdEJXOiAn5Y2a6Iyo55Om57qzJyxcblx0XHRcdEJWOiAn5biD6Z+m5bKbJyxcblx0XHRcdEJSOiAn5be06KW/Jyxcblx0XHRcdElPOiAn6Iux5bGe5Y2w5bqm5rSL6aKG5ZywJyxcblx0XHRcdEJOOiAn5rG26I6xJyxcblx0XHRcdEJHOiAn5L+d5Yqg5Yip5LqaJyxcblx0XHRcdEJGOiAn5biD5Z+657qz5rOV57SiJyxcblx0XHRcdEJJOiAn5biD6ZqG6L+qJyxcblx0XHRcdENWOiAn5L2b5b6X6KeSJyxcblx0XHRcdEtIOiAn5p+s5Z+U5a+oJyxcblx0XHRcdENNOiAn5ZaA6bqm6ZqGJyxcblx0XHRcdENBOiAn5Yqg5ou/5aSnJyxcblx0XHRcdEtZOiAn5byA5pu8576k5bKbJyxcblx0XHRcdENGOiAn5Lit6Z2eJyxcblx0XHRcdFREOiAn5LmN5b6XJyxcblx0XHRcdENMOiAn5pm65YipJyxcblx0XHRcdENOOiAn5Lit5Zu9Jyxcblx0XHRcdENYOiAn5Zyj6K+e5bKbJyxcblx0XHRcdENDOiAn56eR56eR5pav77yI5Z+65p6X77yJ576k5bKbJyxcblx0XHRcdENPOiAn5ZOl5Lym5q+U5LqaJyxcblx0XHRcdEtNOiAn56eR5pGp572XJyxcblx0XHRcdENHOiAn5Yia5p6c5YWx5ZKM5Zu9Jyxcblx0XHRcdENEOiAn5Yia5p6c5rCR5Li75YWx5ZKM5Zu9Jyxcblx0XHRcdENLOiAn5bqT5YWL576k5bKbJyxcblx0XHRcdENSOiAn5ZOl5pav6L6+6buO5YqgJyxcblx0XHRcdENJOiAn6LGh54mZ5rW35bK4Jyxcblx0XHRcdEhSOiAn5YWL572X5Zyw5LqaJyxcblx0XHRcdENVOiAn5Y+k5be0Jyxcblx0XHRcdENXOiAn5bqT5ouJ57SiJyxcblx0XHRcdENZOiAn5aGe5rWm6Lev5pavJyxcblx0XHRcdENaOiAn5o235YWLJyxcblx0XHRcdERLOiAn5Li56bqmJyxcblx0XHRcdERKOiAn5ZCJ5biD5o+QJyxcblx0XHRcdERNOiAn5aSa57Gz5bC85YWLJyxcblx0XHRcdERPOiAn5aSa57Gz5bC85YqgJyxcblx0XHRcdEVDOiAn5Y6E55Oc5aSa5bCUJyxcblx0XHRcdEVHOiAn5Z+D5Y+KJyxcblx0XHRcdFNWOiAn6JCo5bCU55Om5aSaJyxcblx0XHRcdEdROiAn6LWk6YGT5Yeg5YaF5LqaJyxcblx0XHRcdEVSOiAn5Y6E56uL54m56YeM5LqaJyxcblx0XHRcdEVFOiAn54ix5rKZ5bC85LqaJyxcblx0XHRcdFNaOiAn5pav5aiB5aOr5YWwJyxcblx0XHRcdEVUOiAn5Z+D5aGe5L+E5q+U5LqaJyxcblx0XHRcdEZLOiAn56aP5YWL5YWw576k5bKbJyxcblx0XHRcdEZPOiAn5rOV572X576k5bKbJyxcblx0XHRcdEZKOiAn5paQ5rWOJyxcblx0XHRcdEZJOiAn6Iqs5YWwJyxcblx0XHRcdEZSOiAn5rOV5Zu9Jyxcblx0XHRcdEdGOiAn5rOV5bGe5Zyt5Lqa6YKjJyxcblx0XHRcdFBGOiAn5rOV5bGe5rOi5Yip5bC86KW/5LqaJyxcblx0XHRcdFRGOiAn5rOV5bGe5Y2X6YOo5ZKM5Y2X5p6B6aKG5ZywJyxcblx0XHRcdEdBOiAn5Yqg6JOsJyxcblx0XHRcdEdNOiAn5YaI5q+U5LqaJyxcblx0XHRcdEdFOiAn5qC86bKB5ZCJ5LqaJyxcblx0XHRcdERFOiAn5b635Zu9Jyxcblx0XHRcdEdIOiAn5Yqg57qzJyxcblx0XHRcdEdJOiAn55u05biD572X6ZmAJyxcblx0XHRcdEdSOiAn5biM6IWKJyxcblx0XHRcdEdMOiAn5qC86Zm15YWwJyxcblx0XHRcdEdEOiAn5qC85p6X57qz6L6+Jyxcblx0XHRcdEdQOiAn55Oc5b63572X5pmuJyxcblx0XHRcdEdVOiAn5YWz5bKbJyxcblx0XHRcdEdUOiAn5Y2x5Zyw6ams5ouJJyxcblx0XHRcdEdHOiAn5qC56KW/Jyxcblx0XHRcdEdOOiAn5Yeg5YaF5LqaJyxcblx0XHRcdEdXOiAn5Yeg5YaF5Lqa5q+U57uNJyxcblx0XHRcdEdZOiAn5Zyt5Lqa6YKjJyxcblx0XHRcdEhUOiAn5rW35ZywJyxcblx0XHRcdEhNOiAn6LWr5b635bKb5ZKM6bqm5YWL5ZSQ57qz576k5bKbJyxcblx0XHRcdFZBOiAn5qK16JKC5YaIJyxcblx0XHRcdEhOOiAn5rSq6YO95ouJ5pavJyxcblx0XHRcdEhLOiAn5Lit5Zu96aaZ5rivJyxcblx0XHRcdEhVOiAn5YyI54mZ5YipJyxcblx0XHRcdElTOiAn5Yaw5bKbJyxcblx0XHRcdElOOiAn5Y2w5bqmJyxcblx0XHRcdElEOiAn5Y2w5bC8Jyxcblx0XHRcdElSOiAn5LyK5pyXJyxcblx0XHRcdElROiAn5LyK5ouJ5YWLJyxcblx0XHRcdElFOiAn54ix5bCU5YWwJyxcblx0XHRcdElNOiAn6ams5oGp5bKbJyxcblx0XHRcdElMOiAn5Lul6Imy5YiXJyxcblx0XHRcdElUOiAn5oSP5aSn5YipJyxcblx0XHRcdEpNOiAn54mZ5Lmw5YqgJyxcblx0XHRcdEpQOiAn5pel5pysJyxcblx0XHRcdEpFOiAn5rO96KW/Jyxcblx0XHRcdEpPOiAn57qm5pemJyxcblx0XHRcdEtaOiAn5ZOI6JCo5YWL5pav5Z2mJyxcblx0XHRcdEtFOiAn6IKv5bC85LqaJyxcblx0XHRcdEtJOiAn5Z+66YeM5be05pavJyxcblx0XHRcdEtQOiAn5YyX6Z+pJyxcblx0XHRcdEtSOiAn6Z+p5Zu9Jyxcblx0XHRcdEtXOiAn56eR5aiB54m5Jyxcblx0XHRcdEtHOiAn5ZCJ5bCU5ZCJ5pav5pav5Z2mJyxcblx0XHRcdExBOiAn6ICB5oydJyxcblx0XHRcdExWOiAn5ouJ6ISx57u05LqaJyxcblx0XHRcdExCOiAn6buO5be05aupJyxcblx0XHRcdExTOiAn6I6x57Si5omYJyxcblx0XHRcdExSOiAn5Yip5q+U6YeM5LqaJyxcblx0XHRcdExZOiAn5Yip5q+U5LqaJyxcblx0XHRcdExJOiAn5YiX5pSv5pWm5aOr55m7Jyxcblx0XHRcdExUOiAn56uL6Zm25a6bJyxcblx0XHRcdExVOiAn5Y2i5qOu5aChJyxcblx0XHRcdE1POiAn5Lit5Zu95r6z6ZeoJyxcblx0XHRcdE1HOiAn6ams6L6+5Yqg5pav5YqgJyxcblx0XHRcdE1XOiAn6ams5ouJ57u0Jyxcblx0XHRcdE1ZOiAn6ams5p2l6KW/5LqaJyxcblx0XHRcdE1WOiAn6ams5bCU5Luj5aSrJyxcblx0XHRcdE1MOiAn6ams6YeMJyxcblx0XHRcdE1UOiAn6ams6ICz5LuWJyxcblx0XHRcdE1IOiAn6ams57uN5bCU576k5bKbJyxcblx0XHRcdE1ROiAn6ams5o+Q5bC85YWLJyxcblx0XHRcdE1SOiAn5q+b6YeM5aGU5bC85LqaJyxcblx0XHRcdE1VOiAn5q+b6YeM5rGC5pavJyxcblx0XHRcdFlUOiAn6ams57qm54m5Jyxcblx0XHRcdE1YOiAn5aKo6KW/5ZOlJyxcblx0XHRcdEZNOiAn5a+G5YWL572X5bC86KW/5Lqa6IGU6YKmJyxcblx0XHRcdE1EOiAn5pGp5bCU5aSa55OmJyxcblx0XHRcdE1DOiAn5pGp57qz5ZOlJyxcblx0XHRcdE1OOiAn6JKZ5Y+kJyxcblx0XHRcdE1FOiAn6buR5bGxJyxcblx0XHRcdE1TOiAn6JKZ54m55aGe5ouJ54m5Jyxcblx0XHRcdE1BOiAn5pGp5rSb5ZOlJyxcblx0XHRcdE1aOiAn6I6r5qGR5q+U5YWLJyxcblx0XHRcdE1NOiAn57yF55S4Jyxcblx0XHRcdE5BOiAn6YKj57Gz5q+U5LqaJyxcblx0XHRcdE5SOiAn55GZ6bKBJyxcblx0XHRcdE5QOiAn5bC85rOK5bCUJyxcblx0XHRcdE5MOiAn6I235YWwJyxcblx0XHRcdE5DOiAn5paw5ZaA6YeM5aSa5bC85LqaJyxcblx0XHRcdE5aOiAn5paw6KW/5YWwJyxcblx0XHRcdE5JOiAn5bC85Yqg5ouJ55OcJyxcblx0XHRcdE5FOiAn5bC85pel5bCUJyxcblx0XHRcdE5HOiAn5bC85pel5Yip5LqaJyxcblx0XHRcdE5VOiAn57q95Z+DJyxcblx0XHRcdE5GOiAn6K+656aP5YWL5bKbJyxcblx0XHRcdE1LOiAn5YyX6ams5YW26aG/Jyxcblx0XHRcdE1QOiAn5YyX6ams6YeM5Lqa57qz576k5bKbJyxcblx0XHRcdE5POiAn5oyq5aiBJyxcblx0XHRcdE9NOiAn6Zi/5pu8Jyxcblx0XHRcdFBLOiAn5be05Z+65pav5Z2mJyxcblx0XHRcdFBXOiAn5biV5YqzJyxcblx0XHRcdFBTOiAn5be05YuS5pav5Z2mJyxcblx0XHRcdFBBOiAn5be05ou/6amsJyxcblx0XHRcdFBHOiAn5be05biD5Lqa5paw5Yeg5YaF5LqaJyxcblx0XHRcdFBZOiAn5be05ouJ5ZytJyxcblx0XHRcdFBFOiAn56eY6bKBJyxcblx0XHRcdFBIOiAn6I+y5b6L5a6+Jyxcblx0XHRcdFBOOiAn55qu54m55Yev5oGp576k5bKbJyxcblx0XHRcdFBMOiAn5rOi5YWwJyxcblx0XHRcdFBUOiAn6JGh6JCE54mZJyxcblx0XHRcdFBSOiAn5rOi5aSa6buO5ZCEJyxcblx0XHRcdFFBOiAn5Y2h5aGU5bCUJyxcblx0XHRcdFJFOiAn55WZ5bC85rGqJyxcblx0XHRcdFJPOiAn572X6ams5bC85LqaJyxcblx0XHRcdFJVOiAn5L+E572X5pavJyxcblx0XHRcdFJXOiAn5Y2i5pe66L6+Jyxcblx0XHRcdEJMOiAn5Zyj5be05rOw5YuS57GzJyxcblx0XHRcdFNIOiAn5Zyj6LWr5YuS5ou/44CB6Zi/5qOu5p2+5ZKM54m56YeM5pav5Z2mLei+vuW6k+WwvOS6micsXG5cdFx0XHRLTjogJ+Wco+WfuuiMqOWSjOWwvOe7tOaWrycsXG5cdFx0XHRMQzogJ+Wco+WNouilv+S6micsXG5cdFx0XHRNRjogJ+azleWxnuWco+mprOS4gScsXG5cdFx0XHRQTTogJ+Wco+earuWfg+WwlOWSjOWvhuWFi+mahicsXG5cdFx0XHRWQzogJ+Wco+aWh+ajrueJueWSjOagvOael+e6s+S4geaWrycsXG5cdFx0XHRXUzogJ+iQqOaRqeS6micsXG5cdFx0XHRTTTogJ+Wco+mprOWKm+ivuicsXG5cdFx0XHRTVDogJ+Wco+Wkmue+juWSjOaZruael+ilv+avlCcsXG5cdFx0XHRTQTogJ+aymeeJuemYv+aLieS8rycsXG5cdFx0XHRTTjogJ+WhnuWGheWKoOWwlCcsXG5cdFx0XHRSUzogJ+WhnuWwlOe7tOS6micsXG5cdFx0XHRTQzogJ+WhnuiIjOWwlCcsXG5cdFx0XHRTTDogJ+WhnuaLieWIqeaYgicsXG5cdFx0XHRTRzogJ+aWsOWKoOWdoScsXG5cdFx0XHRTWDogJ+iNt+WxnuWco+mprOS4gScsXG5cdFx0XHRTSzogJ+aWr+a0m+S8kOWFiycsXG5cdFx0XHRTSTogJ+aWr+a0m+aWh+WwvOS6micsXG5cdFx0XHRTQjogJ+aJgOe9l+mXqOe+pOWymycsXG5cdFx0XHRTTzogJ+e0oumprOmHjCcsXG5cdFx0XHRaQTogJ+WNl+mdnicsXG5cdFx0XHRHUzogJ+WNl+S5lOayu+S6muWSjOWNl+ahkeWogeWlh+e+pOWymycsXG5cdFx0XHRTUzogJ+WNl+iLj+S4uScsXG5cdFx0XHRFUzogJ+ilv+ePreeJmScsXG5cdFx0XHRMSzogJ+aWr+mHjOWFsOWNoScsXG5cdFx0XHRTRDogJ+iLj+S4uScsXG5cdFx0XHRTUjogJ+iLj+mHjOWNlycsXG5cdFx0XHRTSjogJ+aWr+eTpuWwlOW3tOWSjOaJrOmprOW7ticsXG5cdFx0XHRTRTogJ+eRnuWFuCcsXG5cdFx0XHRDSDogJ+eRnuWjqycsXG5cdFx0XHRTWTogJ+WPmeWIqeS6micsXG5cdFx0XHRUVzogJ+S4reWbveWPsOa5vicsXG5cdFx0XHRUSjogJ+WhlOWQieWFi+aWr+WdpicsXG5cdFx0XHRUWjogJ+WdpuahkeWwvOS6micsXG5cdFx0XHRUSDogJ+azsOWbvScsXG5cdFx0XHRUTDogJ+S4nOW4neaxticsXG5cdFx0XHRURzogJ+WkmuWTpScsXG5cdFx0XHRUSzogJ+aJmOWFi+WKsycsXG5cdFx0XHRUTzogJ+axpOWKoCcsXG5cdFx0XHRUVDogJ+eJueeri+WwvOi+vuWSjOWkmuW3tOWTpScsXG5cdFx0XHRUTjogJ+eqgeWwvOaWrycsXG5cdFx0XHRUUjogJ+Wcn+iAs+WFticsXG5cdFx0XHRUTTogJ+Wcn+W6k+abvOaWr+WdpicsXG5cdFx0XHRUQzogJ+eJueWFi+aWr+WSjOWHr+enkeaWr+e+pOWymycsXG5cdFx0XHRUVjogJ+WbvueTpuWNoicsXG5cdFx0XHRVRzogJ+S5jOW5sui+vicsXG5cdFx0XHRVQTogJ+S5jOWFi+WFsCcsXG5cdFx0XHRBRTogJ+mYv+iBlOmFiycsXG5cdFx0XHRHQjogJ+iLseWbvScsXG5cdFx0XHRVUzogJ+e+juWbvScsXG5cdFx0XHRVTTogJ+e+juWbveacrOWcn+WkluWwj+Wym+WxvycsXG5cdFx0XHRVWTogJ+S5jOaLieWcrScsXG5cdFx0XHRVWjogJ+S5jOWFueWIq+WFi+aWr+WdpicsXG5cdFx0XHRWVTogJ+eTpuWKqumYv+WbvicsXG5cdFx0XHRWRTogJ+WnlOWGheeRnuaLiScsXG5cdFx0XHRWTjogJ+i2iuWNlycsXG5cdFx0XHRWRzogJ+iLseWxnue7tOWwlOS6rOe+pOWymycsXG5cdFx0XHRWSTogJ+e+juWxnue7tOWwlOS6rOe+pOWymycsXG5cdFx0XHRXRjogJ+eTpuWIqeaWr+WSjOWvjOWbvue6sycsXG5cdFx0XHRFSDogJ+ilv+aSkuWTiOaLiScsXG5cdFx0XHRZRTogJ+S5n+mXqCcsXG5cdFx0XHRaTTogJ+i1nuavlOS6micsXG5cdFx0XHRaVzogJ+a0peW3tOW4g+mfpicsXG5cdFx0fTtcblx0fVxuXG5cdHJldHVybiB7XG5cdFx0QUY6ICfpmL/lr4zmsZcnLFxuXHRcdEFYOiAn5aWl5YWwJyxcblx0XHRBTDogJ+mYv+WwlOW3tOWwvOS6micsXG5cdFx0RFo6ICfpmL/lsJTlj4rliKnkuponLFxuXHRcdEFTOiAn576O5bGe6JCo5pGp5LqaJyxcblx0XHRBRDogJ+WuiemBk+WwlCcsXG5cdFx0QU86ICflronlk6Xmi4knLFxuXHRcdEFJOiAn5a6J5Zyt5ouJJyxcblx0XHRBUTogJ+WNl+aegea0sicsXG5cdFx0QUc6ICflronmj5Dnk5zlkozlt7TluIPovr4nLFxuXHRcdEFSOiAn6Zi/5qC55bu3Jyxcblx0XHRBTTogJ+S6mue+juWwvOS6micsXG5cdFx0QVc6ICfpmL/psoHlt7QnLFxuXHRcdEFVOiAn5r6z5aSn5Yip5LqaJyxcblx0XHRBVDogJ+WlpeWcsOWIqScsXG5cdFx0QVo6ICfpmL/loZ7mi5znloYnLFxuXHRcdEJTOiAn5be05ZOI6amsJyxcblx0XHRCSDogJ+W3tOaelycsXG5cdFx0QkQ6ICflrZ/liqDmi4nlm70nLFxuXHRcdEJCOiAn5be05be05aSa5pavJyxcblx0XHRCWTogJ+eZveS/hOe9l+aWrycsXG5cdFx0QkU6ICfmr5TliKnml7YnLFxuXHRcdEJaOiAn5Lyv5Yip5YW5Jyxcblx0XHRCSjogJ+i0neWugScsXG5cdFx0Qk06ICfnmb7mhZXlpKcnLFxuXHRcdEJUOiAn5LiN5Li5Jyxcblx0XHRCTzogJ+eOu+WIqee7tOS6micsXG5cdFx0QlE6ICfojbflhbDliqDli5Lmr5TljLonLFxuXHRcdEJBOiAn5rOi6buRJyxcblx0XHRCVzogJ+WNmuiMqOeTpue6sycsXG5cdFx0QlY6ICfluIPpn6blspsnLFxuXHRcdEJSOiAn5be06KW/Jyxcblx0XHRJTzogJ+iLseWxnuWNsOW6pua0i+mihuWcsCcsXG5cdFx0Qk46ICfmlofojrEnLFxuXHRcdEJHOiAn5L+d5Yqg5Yip5LqaJyxcblx0XHRCRjogJ+W4g+Wfuue6s+azlee0oicsXG5cdFx0Qkk6ICfluIPpmobov6onLFxuXHRcdENWOiAn5L2b5b6X6KeSJyxcblx0XHRLSDogJ+afrOWflOWvqCcsXG5cdFx0Q006ICflloDpuqbpmoYnLFxuXHRcdENBOiAn5Yqg5ou/5aSnJyxcblx0XHRLWTogJ+W8gOabvOe+pOWymycsXG5cdFx0Q0Y6ICfkuK3pnZ4nLFxuXHRcdFREOiAn5LmN5b6XJyxcblx0XHRDTDogJ+aZuuWIqScsXG5cdFx0Q046ICfkuK3lm70nLFxuXHRcdENYOiAn5Zyj6K+e5bKbJyxcblx0XHRDQzogJ+enkeenkeaWr++8iOWfuuael++8iee+pOWymycsXG5cdFx0Q086ICflk6XkvKbmr5TkuponLFxuXHRcdEtNOiAn56eR5pGp572XJyxcblx0XHRDRzogJ+WImuaenOWFseWSjOWbvScsXG5cdFx0Q0Q6ICfliJrmnpzmsJHkuLvlhbHlkozlm70nLFxuXHRcdENLOiAn5bqT5YWL576k5bKbJyxcblx0XHRDUjogJ+WTpeaWr+i+vum7juWKoCcsXG5cdFx0Q0k6ICfnp5Hnibnov6rnk6YnLFxuXHRcdEhSOiAn5YWL572X5Zyw5LqaJyxcblx0XHRDVTogJ+WPpOW3tCcsXG5cdFx0Q1c6ICflupPmi4nntKInLFxuXHRcdENZOiAn5aGe5rWm6Lev5pavJyxcblx0XHRDWjogJ+aNt+WFiycsXG5cdFx0REs6ICfkuLnpuqYnLFxuXHRcdERKOiAn5ZCJ5biD5o+QJyxcblx0XHRETTogJ+Wkmuexs+WwvOWFiycsXG5cdFx0RE86ICflpJrnsbPlsLzliqAnLFxuXHRcdEVDOiAn5Y6E55Oc5aSa5bCUJyxcblx0XHRFRzogJ+Wfg+WPiicsXG5cdFx0U1Y6ICfokKjlsJTnk6blpJonLFxuXHRcdEdROiAn6LWk6YGT5Yeg5YaF5LqaJyxcblx0XHRFUjogJ+WOhOeri+eJuemHjOS6micsXG5cdFx0RUU6ICfniLHmspnlsLzkuponLFxuXHRcdFNaOiAn5pav5aiB5aOr5YWwJyxcblx0XHRFVDogJ+Wfg+WhnuS/hOavlOS6micsXG5cdFx0Rks6ICfnpo/lhYvlhbDnvqTlspsnLFxuXHRcdEZPOiAn5rOV572X576k5bKbJyxcblx0XHRGSjogJ+aWkOa1jicsXG5cdFx0Rkk6ICfoiqzlhbAnLFxuXHRcdEZSOiAn5rOV5Zu9Jyxcblx0XHRHRjogJ+azleWxnuWcreS6mumCoycsXG5cdFx0UEY6ICfms5XlsZ7ms6LliKnlsLzopb/kuponLFxuXHRcdFRGOiAn5rOV5bGe5Y2X6YOo5ZKM5Y2X5p6B6aKG5ZywJyxcblx0XHRHQTogJ+WKoOiTrCcsXG5cdFx0R006ICflhojmr5TkuponLFxuXHRcdEdFOiAn5qC86bKB5ZCJ5LqaJyxcblx0XHRERTogJ+W+t+WbvScsXG5cdFx0R0g6ICfliqDnurMnLFxuXHRcdEdJOiAn55u05biD572X6ZmAJyxcblx0XHRHUjogJ+W4jOiFiicsXG5cdFx0R0w6ICfmoLzpmbXlhbAnLFxuXHRcdEdEOiAn5qC85p6X57qz6L6+Jyxcblx0XHRHUDogJ+eTnOW+t+e9l+aZricsXG5cdFx0R1U6ICflhbPlspsnLFxuXHRcdEdUOiAn5Y2x5Zyw6ams5ouJJyxcblx0XHRHRzogJ+agueilvycsXG5cdFx0R046ICflh6DlhoXkuponLFxuXHRcdEdXOiAn5Yeg5YaF5Lqa5q+U57uNJyxcblx0XHRHWTogJ+WcreS6mumCoycsXG5cdFx0SFQ6ICfmtbflnLAnLFxuXHRcdEhNOiAn6LWr5b635bKb5ZKM6bqm5YWL5ZSQ57qz576k5bKbJyxcblx0XHRWQTogJ+aiteiSguWGiCcsXG5cdFx0SE46ICfmtKrpg73mi4nmlq8nLFxuXHRcdEhLOiAn5Lit5Zu96aaZ5rivJyxcblx0XHRIVTogJ+WMiOeJmeWIqScsXG5cdFx0SVM6ICflhrDlspsnLFxuXHRcdElOOiAn5Y2w5bqmJyxcblx0XHRJRDogJ+WNsOWwvCcsXG5cdFx0SVI6ICfkvIrmnJcnLFxuXHRcdElROiAn5LyK5ouJ5YWLJyxcblx0XHRJRTogJ+eIseWwlOWFsCcsXG5cdFx0SU06ICfpqazmganlspsnLFxuXHRcdElMOiAn5Lul6Imy5YiXJyxcblx0XHRJVDogJ+aEj+Wkp+WIqScsXG5cdFx0Sk06ICfniZnkubDliqAnLFxuXHRcdEpQOiAn5pel5pysJyxcblx0XHRKRTogJ+azveilvycsXG5cdFx0Sk86ICfnuqbml6YnLFxuXHRcdEtaOiAn5ZOI6JCo5YWL5pav5Z2mJyxcblx0XHRLRTogJ+iCr+WwvOS6micsXG5cdFx0S0k6ICfln7rph4zlt7Tmlq8nLFxuXHRcdEtQOiAn5pyd6bKcJyxcblx0XHRLUjogJ+mfqeWbvScsXG5cdFx0S1c6ICfnp5HlqIHnibknLFxuXHRcdEtHOiAn5ZCJ5bCU5ZCJ5pav5pav5Z2mJyxcblx0XHRMQTogJ+iAgeaMnScsXG5cdFx0TFY6ICfmi4nohLHnu7TkuponLFxuXHRcdExCOiAn6buO5be05aupJyxcblx0XHRMUzogJ+iOsee0ouaJmCcsXG5cdFx0TFI6ICfliKnmr5Tph4zkuponLFxuXHRcdExZOiAn5Yip5q+U5LqaJyxcblx0XHRMSTogJ+WIl+aUr+aVpuWjq+eZuycsXG5cdFx0TFQ6ICfnq4vpmbblrpsnLFxuXHRcdExVOiAn5Y2i5qOu5aChJyxcblx0XHRNTzogJ+S4reWbvea+s+mXqCcsXG5cdFx0TUc6ICfpqazovr7liqDmlq/liqAnLFxuXHRcdE1XOiAn6ams5ouJ57u0Jyxcblx0XHRNWTogJ+mprOadpeilv+S6micsXG5cdFx0TVY6ICfpqazlsJTku6PlpKsnLFxuXHRcdE1MOiAn6ams6YeMJyxcblx0XHRNVDogJ+mprOiAs+S7licsXG5cdFx0TUg6ICfpqaznu43lsJTnvqTlspsnLFxuXHRcdE1ROiAn6ams5o+Q5bC85YWLJyxcblx0XHRNUjogJ+avm+mHjOWhlOWwvOS6micsXG5cdFx0TVU6ICfmr5vph4zmsYLmlq8nLFxuXHRcdFlUOiAn6ams57qm54m5Jyxcblx0XHRNWDogJ+WiqOilv+WTpScsXG5cdFx0Rk06ICflr4blhYvnvZflsLzopb/kuprogZTpgqYnLFxuXHRcdE1EOiAn5pGp5bCU5aSa55OmJyxcblx0XHRNQzogJ+aRqee6s+WTpScsXG5cdFx0TU46ICfokpnlj6QnLFxuXHRcdE1FOiAn6buR5bGxJyxcblx0XHRNUzogJ+iSmeeJueWhnuaLieeJuScsXG5cdFx0TUE6ICfmkanmtJvlk6UnLFxuXHRcdE1aOiAn6I6r5qGR5q+U5YWLJyxcblx0XHRNTTogJ+e8heeUuCcsXG5cdFx0TkE6ICfnurPnsbPmr5TkuponLFxuXHRcdE5SOiAn55GZ6bKBJyxcblx0XHROUDogJ+WwvOaziuWwlCcsXG5cdFx0Tkw6ICfojbflhbAnLFxuXHRcdE5DOiAn5paw5ZaA6YeM5aSa5bC85LqaJyxcblx0XHROWjogJ+aWsOilv+WFsCcsXG5cdFx0Tkk6ICflsLzliqDmi4nnk5wnLFxuXHRcdE5FOiAn5bC85pel5bCUJyxcblx0XHRORzogJ+WwvOaXpeWIqeS6micsXG5cdFx0TlU6ICfnur3ln4MnLFxuXHRcdE5GOiAn6K+656aP5YWL5bKbJyxcblx0XHRNSzogJ+WMl+mprOWFtumhvycsXG5cdFx0TVA6ICfljJfpqazph4zkuprnurPnvqTlspsnLFxuXHRcdE5POiAn5oyq5aiBJyxcblx0XHRPTTogJ+mYv+abvCcsXG5cdFx0UEs6ICflt7Tln7rmlq/lnaYnLFxuXHRcdFBXOiAn5biV5YqzJyxcblx0XHRQUzogJ+W3tOWLkuaWr+WdpicsXG5cdFx0UEE6ICflt7Tmi7/pqawnLFxuXHRcdFBHOiAn5be05biD5Lqa5paw5Yeg5YaF5LqaJyxcblx0XHRQWTogJ+W3tOaLieWcrScsXG5cdFx0UEU6ICfnp5jpsoEnLFxuXHRcdFBIOiAn6I+y5b6L5a6+Jyxcblx0XHRQTjogJ+earueJueWHr+aBqee+pOWymycsXG5cdFx0UEw6ICfms6LlhbAnLFxuXHRcdFBUOiAn6JGh6JCE54mZJyxcblx0XHRQUjogJ+azouWkmum7juWQhCcsXG5cdFx0UUE6ICfljaHloZTlsJQnLFxuXHRcdFJFOiAn55WZ5bC85rGqJyxcblx0XHRSTzogJ+e9l+mprOWwvOS6micsXG5cdFx0UlU6ICfkv4TnvZfmlq8nLFxuXHRcdFJXOiAn5Y2i5pe66L6+Jyxcblx0XHRCTDogJ+Wco+W3tOazsOWLkuexsycsXG5cdFx0U0g6ICflnKPotavli5Lmi7/jgIHpmL/mo67mnb7lkoznibnph4zmlq/lnaYt6L6+5bqT5bC85LqaJyxcblx0XHRLTjogJ+Wco+WfuuiMqOWSjOWwvOe7tOaWrycsXG5cdFx0TEM6ICflnKPljaLopb/kuponLFxuXHRcdE1GOiAn5rOV5bGe5Zyj6ams5LiBJyxcblx0XHRQTTogJ+Wco+earuWfg+WwlOWSjOWvhuWFi+mahicsXG5cdFx0VkM6ICflnKPmlofmo67nibnlkozmoLzmnpfnurPkuIHmlq8nLFxuXHRcdFdTOiAn6JCo5pGp5LqaJyxcblx0XHRTTTogJ+Wco+mprOWKm+ivuicsXG5cdFx0U1Q6ICflnKPlpJrnvo7lkozmma7mnpfopb/mr5QnLFxuXHRcdFNBOiAn5rKZ54m56Zi/5ouJ5LyvJyxcblx0XHRTTjogJ+WhnuWGheWKoOWwlCcsXG5cdFx0UlM6ICfloZ7lsJTnu7TkuponLFxuXHRcdFNDOiAn5aGe6IiM5bCUJyxcblx0XHRTTDogJ+WhnuaLieWIqeaYgicsXG5cdFx0U0c6ICfmlrDliqDlnaEnLFxuXHRcdFNYOiAn6I235bGe5Zyj6ams5LiBJyxcblx0XHRTSzogJ+aWr+a0m+S8kOWFiycsXG5cdFx0U0k6ICfmlq/mtJvmloflsLzkuponLFxuXHRcdFNCOiAn5omA572X6Zeo576k5bKbJyxcblx0XHRTTzogJ+e0oumprOmHjCcsXG5cdFx0WkE6ICfljZfpnZ4nLFxuXHRcdEdTOiAn5Y2X5LmU5rK75Lqa5ZKM5Y2X5qGR5aiB5aWH576k5bKbJyxcblx0XHRTUzogJ+WNl+iLj+S4uScsXG5cdFx0RVM6ICfopb/nj63niZknLFxuXHRcdExLOiAn5pav6YeM5YWw5Y2hJyxcblx0XHRTRDogJ+iLj+S4uScsXG5cdFx0U1I6ICfoi4/ph4zljZcnLFxuXHRcdFNKOiAn5pav55Om5bCU5be05ZKM5oms6ams5bu2Jyxcblx0XHRTRTogJ+eRnuWFuCcsXG5cdFx0Q0g6ICfnkZ7lo6snLFxuXHRcdFNZOiAn5Y+Z5Yip5LqaJyxcblx0XHRUVzogJ+S4reWbveiHuua5vicsXG5cdFx0VEo6ICfloZTlkInlhYvmlq/lnaYnLFxuXHRcdFRaOiAn5Z2m5qGR5bC85LqaJyxcblx0XHRUSDogJ+azsOWbvScsXG5cdFx0VEw6ICfkuJzluJ3msbYnLFxuXHRcdFRHOiAn5aSa5ZOlJyxcblx0XHRUSzogJ+aJmOWFi+WKsycsXG5cdFx0VE86ICfmsaTliqAnLFxuXHRcdFRUOiAn54m556uL5bC86L6+5ZKM5aSa5be05ZOlJyxcblx0XHRUTjogJ+eqgeWwvOaWrycsXG5cdFx0VFI6ICflnJ/ogLPlhbYnLFxuXHRcdFRNOiAn5Zyf5bqT5pu85pav5Z2mJyxcblx0XHRUQzogJ+eJueWFi+aWr+WSjOWHr+enkeaWr+e+pOWymycsXG5cdFx0VFY6ICflm77nk6bljaInLFxuXHRcdFVHOiAn5LmM5bmy6L6+Jyxcblx0XHRVQTogJ+S5jOWFi+WFsCcsXG5cdFx0QUU6ICfpmL/ogZTphYsnLFxuXHRcdEdCOiAn6Iux5Zu9Jyxcblx0XHRVUzogJ+e+juWbvScsXG5cdFx0VU06ICfnvo7lm73mnKzlnJ/lpJblsI/lspvlsb8nLFxuXHRcdFVZOiAn5LmM5ouJ5ZytJyxcblx0XHRVWjogJ+S5jOWFueWIq+WFi+aWr+WdpicsXG5cdFx0VlU6ICfnk6bliqrpmL/lm74nLFxuXHRcdFZFOiAn5aeU5YaF55Ge5ouJJyxcblx0XHRWTjogJ+i2iuWNlycsXG5cdFx0Vkc6ICfoi7HlsZ7nu7TlsJTkuqznvqTlspsnLFxuXHRcdFZJOiAn576O5bGe57u05bCU5Lqs576k5bKbJyxcblx0XHRXRjogJ+eTpuWIqeaWr+WSjOWvjOWbvue6sycsXG5cdFx0RUg6ICfopb/mkpLlk4jmi4knLFxuXHRcdFlFOiAn5Lmf6ZeoJyxcblx0XHRaTTogJ+i1nuavlOS6micsXG5cdFx0Wlc6ICfmtKXlt7TluIPpn6YnLFxuXHR9O1xufTtcblxuY29uc3QgZ2V0UmVnaW9uTmFtZUxpc3QgPSAoKSA9PiB7XG5cdGNvbnN0IHt3Z1VzZXJMYW5ndWFnZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cblx0aWYgKFsnemgtaGFudCcsICd6aC1oaycsICd6aC1tbycsICd6aC10dyddLmluY2x1ZGVzKHdnVXNlckxhbmd1YWdlKSkge1xuXHRcdHJldHVybiB7XG5cdFx0XHRBSDogJ+WuieW+vScsXG5cdFx0XHRCSjogJ+WMl+S6rCcsXG5cdFx0XHRDUTogJ+mHjeaFticsXG5cdFx0XHRGSjogJ+emj+W7uicsXG5cdFx0XHRHRDogJ+W7o+adsScsXG5cdFx0XHRHUzogJ+eUmOiChScsXG5cdFx0XHRHWDogJ+W7o+ilvycsXG5cdFx0XHRHWjogJ+iytOW3nicsXG5cdFx0XHRIQTogJ+ays+WNlycsXG5cdFx0XHRIQjogJ+a5luWMlycsXG5cdFx0XHRIRTogJ+ays+WMlycsXG5cdFx0XHRISTogJ+a1t+WNlycsXG5cdFx0XHRITDogJ+m7kem+jeaxnycsXG5cdFx0XHRITjogJ+a5luWNlycsXG5cdFx0XHRKTDogJ+WQieaelycsXG5cdFx0XHRKUzogJ+axn+iYhycsXG5cdFx0XHRKWDogJ+axn+ilvycsXG5cdFx0XHRMTjogJ+mBvOWvpycsXG5cdFx0XHROTTogJ+WFp+iSmeWPpCcsXG5cdFx0XHROWDogJ+Wvp+WkjycsXG5cdFx0XHRRSDogJ+mdkua1tycsXG5cdFx0XHRTQzogJ+Wbm+W3nScsXG5cdFx0XHRTRDogJ+WxseadsScsXG5cdFx0XHRTSDogJ+S4iua1tycsXG5cdFx0XHRTTjogJ+mZneilvycsXG5cdFx0XHRTWDogJ+WxseilvycsXG5cdFx0XHRUSjogJ+Wkqea0pScsXG5cdFx0XHRYSjogJ+aWsOeWhicsXG5cdFx0XHRYWjogJ+ilv+iXjycsXG5cdFx0XHRZTjogJ+mbsuWNlycsXG5cdFx0XHRaSjogJ+a1meaxnycsXG5cdFx0fTtcblx0fVxuXG5cdHJldHVybiB7XG5cdFx0QUg6ICflronlvr0nLFxuXHRcdEJKOiAn5YyX5LqsJyxcblx0XHRDUTogJ+mHjeW6hicsXG5cdFx0Rko6ICfnpo/lu7onLFxuXHRcdEdEOiAn5bm/5LicJyxcblx0XHRHUzogJ+eUmOiCgycsXG5cdFx0R1g6ICflub/opb8nLFxuXHRcdEdaOiAn6LS15beeJyxcblx0XHRIQTogJ+ays+WNlycsXG5cdFx0SEI6ICfmuZbljJcnLFxuXHRcdEhFOiAn5rKz5YyXJyxcblx0XHRISTogJ+a1t+WNlycsXG5cdFx0SEw6ICfpu5HpvpnmsZ8nLFxuXHRcdEhOOiAn5rmW5Y2XJyxcblx0XHRKTDogJ+WQieaelycsXG5cdFx0SlM6ICfmsZ/oi48nLFxuXHRcdEpYOiAn5rGf6KW/Jyxcblx0XHRMTjogJ+i+veWugScsXG5cdFx0Tk06ICflhoXokpnlj6QnLFxuXHRcdE5YOiAn5a6B5aSPJyxcblx0XHRRSDogJ+mdkua1tycsXG5cdFx0U0M6ICflm5vlt50nLFxuXHRcdFNEOiAn5bGx5LicJyxcblx0XHRTSDogJ+S4iua1tycsXG5cdFx0U046ICfpmZXopb8nLFxuXHRcdFNYOiAn5bGx6KW/Jyxcblx0XHRUSjogJ+Wkqea0pScsXG5cdFx0WEo6ICfmlrDnloYnLFxuXHRcdFhaOiAn6KW/6JePJyxcblx0XHRZTjogJ+S6keWNlycsXG5cdFx0Wko6ICfmtZnmsZ8nLFxuXHR9O1xufTtcblxuZXhwb3J0IHtnZXRDb3VudHJ5T3JBcmVhTmFtZUxpc3QsIGdldFJlZ2lvbk5hbWVMaXN0fTtcbiIsICJpbXBvcnQge2dldENvdW50cnlPckFyZWFOYW1lTGlzdCwgZ2V0UmVnaW9uTmFtZUxpc3R9IGZyb20gJy4vbmFtZSc7XG5cbnR5cGUgQ291bnRyeU9yQXJlYU5hbWVMaXN0ID0gUmV0dXJuVHlwZTx0eXBlb2YgZ2V0Q291bnRyeU9yQXJlYU5hbWVMaXN0PjtcbnR5cGUgUmVnaW9uTmFtZUxpc3QgPSBSZXR1cm5UeXBlPHR5cGVvZiBnZXRSZWdpb25OYW1lTGlzdD47XG5cbmNvbnN0IGNvdW50cnlPckFyZWFMaXN0OiBDb3VudHJ5T3JBcmVhTmFtZUxpc3QgPSBnZXRDb3VudHJ5T3JBcmVhTmFtZUxpc3QoKTtcbmNvbnN0IHJlZ2lvbkxpc3Q6IFJlZ2lvbk5hbWVMaXN0ID0gZ2V0UmVnaW9uTmFtZUxpc3QoKTtcblxuY29uc3QgZ2V0Q291bnRyeU9yQXJlYU5hbWUgPSA8VCBleHRlbmRzIGtleW9mIENvdW50cnlPckFyZWFOYW1lTGlzdD4oa2V5OiBUKTogQ291bnRyeU9yQXJlYU5hbWVMaXN0W1RdIHwgdW5kZWZpbmVkID0+IHtcblx0cmV0dXJuIGNvdW50cnlPckFyZWFMaXN0W2tleV07XG59O1xuXG5jb25zdCBnZXRSZWdpb25OYW1lID0gPFQgZXh0ZW5kcyBrZXlvZiBSZWdpb25OYW1lTGlzdD4oa2V5OiBUKTogUmVnaW9uTmFtZUxpc3RbVF0gfCB1bmRlZmluZWQgPT4ge1xuXHRyZXR1cm4gcmVnaW9uTGlzdFtrZXldO1xufTtcblxuZXhwb3J0IHt0eXBlIENvdW50cnlPckFyZWFOYW1lTGlzdCwgdHlwZSBSZWdpb25OYW1lTGlzdCwgZ2V0Q291bnRyeU9yQXJlYU5hbWUsIGdldFJlZ2lvbk5hbWV9O1xuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7Q0xBU1NfTkFNRSwgQ0xBU1NfTkFNRV9JQ09OLCBDTEFTU19OQU1FX1RFWFR9IGZyb20gJy4uL2NvbnN0YW50JztcbmltcG9ydCBSZWFjdCwge1JlYWN0RWxlbWVudH0gZnJvbSAnZXh0LmdhZGdldC5SZWFjdCc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4uL2kxOG4nO1xuXG5jb25zdCBlbGVtZW50V3JhcCA9IChzcGFuQ2xhc3M6ICdncmVlbicgfCAnb3JhbmdlJywgaW5uZXJFbGVtZW50OiBSZWFjdEVsZW1lbnQpID0+IHtcblx0Y29uc3Qge3NraW59ID0gbXcuY29uZmlnLmdldCgpO1xuXHRjb25zdCBjbGFzc05hbWVzID0gW0NMQVNTX05BTUUsIGAke0NMQVNTX05BTUV9LSR7c3BhbkNsYXNzfWBdO1xuXG5cdGlmIChza2luID09PSAnY2l0aXplbicpIHtcblx0XHRyZXR1cm4gPHNlY3Rpb24gY2xhc3NOYW1lPXtjbGFzc05hbWVzfT57aW5uZXJFbGVtZW50fTwvc2VjdGlvbj47XG5cdH0gZWxzZSBpZiAoWyd2ZWN0b3InLCAndmVjdG9yLTIwMjInLCAnZ29uZ2JpJ10uaW5jbHVkZXMoc2tpbikgfHwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcigndWwjZm9vdGVyLWluZm8nKSkge1xuXHRcdHJldHVybiA8bGkgY2xhc3NOYW1lPXtjbGFzc05hbWVzfT57aW5uZXJFbGVtZW50fTwvbGk+O1xuXHR9XG5cdHJldHVybiA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lc30+e2lubmVyRWxlbWVudH08L2Rpdj47XG59O1xuXG5jb25zdCBpbmRpY2F0b3IgPSAoaWNvbjogJ2dsb2JlJyB8ICdoZWxwTm90aWNlJywgaW5kaWNhdG9yVGV4dDogc3RyaW5nKSA9PiB7XG5cdGNvbnN0IGlwTG9jYXRpb25EZXNjOiBzdHJpbmcgPSBnZXRNZXNzYWdlKCdMb2NhdGlvbicpICsgZ2V0TWVzc2FnZSgnOicpO1xuXHRjb25zdCB0ZXh0OiBzdHJpbmcgPSBpY29uID09PSAnZ2xvYmUnID8gaXBMb2NhdGlvbkRlc2MgKyBpbmRpY2F0b3JUZXh0IDogaW5kaWNhdG9yVGV4dCA/PyAnJztcblxuXHRyZXR1cm4gKFxuXHRcdDw+XG5cdFx0XHQ8c3BhbiBjbGFzc05hbWU9e1tDTEFTU19OQU1FX0lDT04sIGAke0NMQVNTX05BTUVfSUNPTn0tJHtpY29ufWBdfSBhcmlhLWxhYmVsPXt0ZXh0fT48L3NwYW4+XG5cdFx0XHQ8c3BhbiBjbGFzc05hbWU9e0NMQVNTX05BTUVfVEVYVH0+e3RleHR9PC9zcGFuPlxuXHRcdDwvPlxuXHQpO1xufTtcblxuY29uc3QgYXBwZW5kSWNvbiA9ICh7XG5cdGljb24sXG5cdGluZGljYXRvclRleHQsXG5cdHNwYW5DbGFzcyxcbn06IHtcblx0aWNvbjogJ2dsb2JlJyB8ICdoZWxwTm90aWNlJztcblx0aW5kaWNhdG9yVGV4dDogc3RyaW5nO1xuXHRzcGFuQ2xhc3M6ICdncmVlbicgfCAnb3JhbmdlJztcbn0pOiB2b2lkID0+IHtcblx0aWYgKCFzcGFuQ2xhc3MgfHwgIWljb24pIHtcblx0XHRyZXR1cm47XG5cdH1cblx0Y29uc3QgdGFnID0gZWxlbWVudFdyYXAoc3BhbkNsYXNzLCBpbmRpY2F0b3IoaWNvbiwgaW5kaWNhdG9yVGV4dCkpO1xuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PihPUFRJT05TLm1vdW50UG9pbnRTZWxlY3RvcilbMF0/LnByZXBlbmQodGFnKTtcbn07XG5cbmV4cG9ydCB7YXBwZW5kSWNvbn07XG4iLCAiaW1wb3J0IHtsb2NhbGl6ZX0gZnJvbSAnZXh0LmdhZGdldC5pMThuJztcblxuY29uc3QgZ2V0STE4bk1lc3NhZ2VzID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdCc6JzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICc6ICcsXG5cdFx0XHRqYTogJ++8micsXG5cdFx0XHR6aDogJ++8micsXG5cdFx0fSksXG5cdFx0VW5rbm93bjogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdVbmtub3duIExvY2F0aW9uJyxcblx0XHRcdGphOiAn5pyq55+lSVDlnLDln58nLFxuXHRcdFx0J3poLWhhbnMnOiAn5pyq55+lSVDlsZ7lnLAnLFxuXHRcdFx0J3poLWhhbnQnOiAn5pyq55+lSVDlsazlnLAnLFxuXHRcdH0pLFxuXHRcdExvY2F0aW9uOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0lQIExvY2F0aW9uJyxcblx0XHRcdGphOiAnSVDlnLDln58nLFxuXHRcdFx0J3poLWhhbnMnOiAnSVDlsZ7lnLAnLFxuXHRcdFx0J3poLWhhbnQnOiAnSVDlsazlnLAnLFxuXHRcdH0pLFxuXHR9O1xufTtcblxuY29uc3QgaTE4bk1lc3NhZ2VzID0gZ2V0STE4bk1lc3NhZ2VzKCk7XG5cbmNvbnN0IGdldE1lc3NhZ2U6IEdldE1lc3NhZ2VzPHR5cGVvZiBpMThuTWVzc2FnZXM+ID0gKGtleSkgPT4ge1xuXHRyZXR1cm4gaTE4bk1lc3NhZ2VzW2tleV0gfHwga2V5O1xufTtcblxuZXhwb3J0IHtnZXRNZXNzYWdlfTtcbiIsICJpbXBvcnQge3R5cGUgQ291bnRyeU9yQXJlYU5hbWVMaXN0LCB0eXBlIFJlZ2lvbk5hbWVMaXN0LCBnZXRDb3VudHJ5T3JBcmVhTmFtZSwgZ2V0UmVnaW9uTmFtZX0gZnJvbSAnLi91dGlsL2dldE5hbWUnO1xuaW1wb3J0IHR5cGUge1N0b3JlR2VvSW5mb30gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQge2FwaX0gZnJvbSAnLi9hcGknO1xuaW1wb3J0IHthcHBlbmRJY29ufSBmcm9tICcuL3V0aWwvYXBwZW5kSWNvbic7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vaTE4bic7XG5cbmNvbnN0IGFwcGVuZEdlb0ljb24gPSBhc3luYyAoKTogUHJvbWlzZTx2b2lkPiA9PiB7XG5cdGNvbnN0IHt3Z1JlbGV2YW50VXNlck5hbWV9ID0gbXcuY29uZmlnLmdldCgpO1xuXHRjb25zdCBzdG9yZVBhZ2VUaXRsZTogc3RyaW5nID0gYFVzZXI6JHt3Z1JlbGV2YW50VXNlck5hbWV9L0dlb0lQLmpzb25gO1xuXG5cdHRyeSB7XG5cdFx0Y29uc3QgcGFyYW1zOiBBcGlRdWVyeVJldmlzaW9uc1BhcmFtcyA9IHtcblx0XHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdFx0dGl0bGVzOiBbc3RvcmVQYWdlVGl0bGVdLFxuXHRcdFx0cHJvcDogWydyZXZpc2lvbnMnXSxcblx0XHRcdHJ2cHJvcDogWydjb250ZW50J10sXG5cdFx0XHRydnNsb3RzOiAnbWFpbicsXG5cdFx0fTtcblxuXHRcdGNvbnN0IGRhdGEgPSBhd2FpdCBhcGkuZ2V0KHBhcmFtcyk7XG5cblx0XHRjb25zdCB7XG5cdFx0XHRjb3VudHJ5LFxuXHRcdFx0Y291bnRyeU9yQXJlYSxcblx0XHRcdHJlZ2lvbixcblx0XHR9OiBTdG9yZUdlb0luZm8gJiB7XG5cdFx0XHRjb3VudHJ5Pzogc3RyaW5nO1xuXHRcdH0gPSBKU09OLnBhcnNlKFxuXHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnNhZmUtYXJndW1lbnRcblx0XHRcdGRhdGFbJ3F1ZXJ5J10ucGFnZXNbMF0ucmV2aXNpb25zWzBdLnNsb3RzLm1haW4uY29udGVudFxuXHRcdCk7XG5cblx0XHRjb25zdCBsb2NhdGlvbjogU3RvcmVHZW9JbmZvWydjb3VudHJ5T3JBcmVhJ10gPSBjb3VudHJ5ID8/IGNvdW50cnlPckFyZWEgPz8gJyc7XG5cdFx0Y29uc3QgY291bnRyeU9yQXJlYU5hbWU6IHN0cmluZyA9XG5cdFx0XHRnZXRDb3VudHJ5T3JBcmVhTmFtZShsb2NhdGlvbiBhcyBrZXlvZiBDb3VudHJ5T3JBcmVhTmFtZUxpc3QpID8/IGdldE1lc3NhZ2UoJ1Vua25vd24nKTtcblx0XHRjb25zdCByZWdpb25OYW1lOiBzdHJpbmcgPSBsb2NhdGlvbiA9PT0gJ0NOJyA/IGdldFJlZ2lvbk5hbWUocmVnaW9uIGFzIGtleW9mIFJlZ2lvbk5hbWVMaXN0KSA/PyAnJyA6ICcnO1xuXG5cdFx0YXBwZW5kSWNvbih7XG5cdFx0XHRpY29uOiAnZ2xvYmUnLFxuXHRcdFx0aW5kaWNhdG9yVGV4dDogY291bnRyeU9yQXJlYU5hbWUgKyByZWdpb25OYW1lLFxuXHRcdFx0c3BhbkNsYXNzOiAnZ3JlZW4nLFxuXHRcdH0pO1xuXHR9IGNhdGNoIChlcnJvcjogdW5rbm93bikge1xuXHRcdGNvbnNvbGUuZXJyb3IoJ1tHZW9Mb2NhdGlvblJlYWRlcl0gQWpheCBlcnJvciBpbiBgYXBwZW5kR2VvSWNvbmAgbWV0aG9kOicsIGVycm9yKTtcblx0XHRhcHBlbmRJY29uKHtcblx0XHRcdGljb246ICdoZWxwTm90aWNlJyxcblx0XHRcdGluZGljYXRvclRleHQ6IGdldE1lc3NhZ2UoJ1Vua25vd24nKSxcblx0XHRcdHNwYW5DbGFzczogJ29yYW5nZScsXG5cdFx0fSk7XG5cdH1cbn07XG5cbmV4cG9ydCB7YXBwZW5kR2VvSWNvbn07XG4iLCAiaW1wb3J0IHthcGl9IGZyb20gJy4vYXBpJztcbmltcG9ydCB7YXBwZW5kR2VvSWNvbn0gZnJvbSAnLi9hcHBlbmRHZW9JY29uJztcblxuY29uc3QgcXVlcnlVc2VyR3JvdXBzID0gYXN5bmMgKHVzdXNlcnM6IHN0cmluZykgPT4ge1xuXHRjb25zdCBwYXJhbXM6IEFwaVF1ZXJ5VXNlcnNQYXJhbXMgPSB7XG5cdFx0dXN1c2Vycyxcblx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdGxpc3Q6ICd1c2VycycsXG5cdFx0dXNwcm9wOiAnZ3JvdXBzJyxcblx0fTtcblx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGkuZ2V0KHBhcmFtcyk7XG5cblx0cmV0dXJuIHJlc3BvbnNlO1xufTtcblxuY29uc3QgYWRkRWxlbWVudCA9IGFzeW5jICgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0Y29uc3Qge3dnUmVsZXZhbnRVc2VyTmFtZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cdHRyeSB7XG5cdFx0Y29uc3Qge1xuXHRcdFx0cXVlcnk6IHtcblx0XHRcdFx0dXNlcnM6IFt7Z3JvdXBzfV0sXG5cdFx0XHR9LFxuXHRcdH06IHtcblx0XHRcdHF1ZXJ5OiB7XG5cdFx0XHRcdHVzZXJzOiBbXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0Z3JvdXBzOiBzdHJpbmdbXTtcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRdO1xuXHRcdFx0fTtcblx0XHR9ID0gKGF3YWl0IHF1ZXJ5VXNlckdyb3VwcyhgJHt3Z1JlbGV2YW50VXNlck5hbWV9YCkpIGFzIG5ldmVyO1xuXG5cdFx0aWYgKGdyb3Vwcy5pbmNsdWRlcygnYm90JykgfHwgZ3JvdXBzLmluY2x1ZGVzKCdxaXV3ZW4nKSkge1xuXHRcdFx0LyogZW1wdHkgKi9cblx0XHRcdC8vIEFscmVhZHkgc2hvd24gaW4gTWFya1JpZ2h0cy1Vc2VycGFnZVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR2b2lkIGFwcGVuZEdlb0ljb24oKTtcblx0XHR9XG5cdH0gY2F0Y2ggKGVycm9yOiB1bmtub3duKSB7XG5cdFx0Y29uc29sZS5lcnJvcignW0dlb0xvY2F0aW9uUmVhZGVyXSBBamF4IGVycm9yIGluIGBhZGRFbGVtZW50YCBtZXRob2Q6JywgZXJyb3IpO1xuXHR9XG59O1xuXG5leHBvcnQge2FkZEVsZW1lbnR9O1xuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtTWVNURU1fU0NSSVBUX0xJU1QsIFdFQk1BU1RFUl9MSVNUfSBmcm9tICcuL21vZHVsZXMvY29uc3RhbnQnO1xuaW1wb3J0IHthZGRFbGVtZW50fSBmcm9tICcuL21vZHVsZXMvYWRkRWxlbWVudCc7XG5cbihmdW5jdGlvbiBnZW9Mb2NhdGlvblJlYWRlcigpOiB2b2lkIHtcblx0Y29uc3Qge3dnQWN0aW9uLCB3Z05hbWVzcGFjZU51bWJlciwgd2dQYWdlTmFtZSwgd2dSZWxldmFudFVzZXJOYW1lfSA9IG13LmNvbmZpZy5nZXQoKTtcblx0aWYgKFxuXHRcdCF3Z1JlbGV2YW50VXNlck5hbWUgfHxcblx0XHRTWVNURU1fU0NSSVBUX0xJU1QuaW5jbHVkZXMod2dSZWxldmFudFVzZXJOYW1lKSB8fFxuXHRcdFdFQk1BU1RFUl9MSVNULmluY2x1ZGVzKHdnUmVsZXZhbnRVc2VyTmFtZSkgfHxcblx0XHQhKHdnTmFtZXNwYWNlTnVtYmVyID09PSBPUFRJT05TLnVzZXJOYW1lU3BhY2VOdW1iZXIpIHx8XG5cdFx0ISh3Z0FjdGlvbiA9PT0gJ3ZpZXcnKVxuXHQpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBwYWdlTmFtZTogc3RyaW5nID0gbmV3IG13LlRpdGxlKHdnUGFnZU5hbWUpLnRvVGV4dCgpO1xuXHRjb25zdCByZWxldmFudFVzZXJQYWdlTmFtZTogc3RyaW5nID0gbmV3IG13LlRpdGxlKHdnUmVsZXZhbnRVc2VyTmFtZSwgT1BUSU9OUy51c2VyTmFtZVNwYWNlTnVtYmVyKS50b1RleHQoKTtcblx0aWYgKHBhZ2VOYW1lICE9PSByZWxldmFudFVzZXJQYWdlTmFtZSkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdHZvaWQgYWRkRWxlbWVudCgpO1xufSkoKTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0MsSUFBQUEscUJBQXNCO0FBQ3RCLElBQUFDLHNCQUF1QjtBQUN2QixJQUFBQyxVQUFXOztBQ0haLElBQU1DLHFCQUErQixDQUNwQyxTQUNBLFFBQ0EsVUFDQSxXQUNBLHlCQUNBLHNCQUNBLHFCQUNBLDhCQUNBLGVBQUE7QUFFRCxJQUFNQyxpQkFBMkIsQ0FBQyxVQUFVLHVCQUF1QixtQkFBbUI7O0FDWHRGLElBQU1DLGFBQXFCO0FBQzNCLElBQU1DLGtCQUFBLEdBQUFDLE9BQTZCRixZQUFVLFFBQUE7QUFDN0MsSUFBTUcsa0JBQUEsR0FBQUQsT0FBNkJGLFlBQVUsUUFBQTs7QUNEN0MsSUFBQUksb0JBQXdCQyxRQUFBLGlCQUFBO0FBRXhCLElBQU1DLE9BQUEsR0FBY0Ysa0JBQUFHLFdBQUEscUJBQUFMLE9BQXVDTCxPQUFPLENBQUU7O0FDSHBFLElBQU1XLDJCQUEyQkEsTUFBTTtBQUN0QyxRQUFNO0lBQUNDO0VBQWMsSUFBSUMsR0FBR0MsT0FBT0MsSUFBSTtBQUV2QyxNQUFJLENBQUMsV0FBVyxTQUFTLE9BQU8sRUFBRUMsU0FBU0osY0FBYyxHQUFHO0FBQzNELFdBQU87TUFDTkssSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7SUFDTDtFQUNELFdBQVcsQ0FBQyxPQUFPLEVBQUV6UCxTQUFTSixjQUFjLEdBQUc7QUFDOUMsV0FBTztNQUNOSyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtJQUNMO0VBQ0QsV0FBVyxDQUFDLFNBQVMsT0FBTyxFQUFFelAsU0FBU0osY0FBYyxHQUFHO0FBQ3ZELFdBQU87TUFDTkssSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7SUFDTDtFQUNEO0FBRUEsU0FBTztJQUNOeFAsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7RUFDTDtBQUNEO0FBRUEsSUFBTUMsb0JBQW9CQSxNQUFNO0FBQy9CLFFBQU07SUFBQzlQO0VBQWMsSUFBSUMsR0FBR0MsT0FBT0MsSUFBSTtBQUV2QyxNQUFJLENBQUMsV0FBVyxTQUFTLFNBQVMsT0FBTyxFQUFFQyxTQUFTSixjQUFjLEdBQUc7QUFDcEUsV0FBTztNQUNOK1AsSUFBSTtNQUNKbk8sSUFBSTtNQUNKb08sSUFBSTtNQUNKakwsSUFBSTtNQUNKYyxJQUFJO01BQ0p1SCxJQUFJO01BQ0o2QyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0ovSixJQUFJO01BQ0pnSyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0puRSxJQUFJO01BQ0phLElBQUk7TUFDSnpCLElBQUk7TUFDSlUsSUFBSTtNQUNKSyxJQUFJO01BQ0ppQixJQUFJO01BQ0pnRCxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO0lBQ0w7RUFDRDtBQUVBLFNBQU87SUFDTm5CLElBQUk7SUFDSm5PLElBQUk7SUFDSm9PLElBQUk7SUFDSmpMLElBQUk7SUFDSmMsSUFBSTtJQUNKdUgsSUFBSTtJQUNKNkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKL0osSUFBSTtJQUNKZ0ssSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKbkUsSUFBSTtJQUNKYSxJQUFJO0lBQ0p6QixJQUFJO0lBQ0pVLElBQUk7SUFDSkssSUFBSTtJQUNKaUIsSUFBSTtJQUNKZ0QsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtFQUNMO0FBQ0Q7O0FDempDQSxJQUFNQyxvQkFBMkNwUix5QkFBeUI7QUFDMUUsSUFBTXFSLGFBQTZCdEIsa0JBQWtCO0FBRXJELElBQU11Qix1QkFBK0RDLFNBQWlEO0FBQ3JILFNBQU9ILGtCQUFrQkcsR0FBRztBQUM3QjtBQUVBLElBQU1DLGdCQUFpREQsU0FBMEM7QUFDaEcsU0FBT0YsV0FBV0UsR0FBRztBQUN0Qjs7QUNaQSxJQUFBRSxxQkFBa0NDLFFBQUE3UixRQUFBLGtCQUFBLEdBQUEsQ0FBQTs7QUNGbEMsSUFBQThSLHFCQUF1QjlSLFFBQUEsaUJBQUE7QUFFdkIsSUFBTStSLGtCQUFrQkEsTUFBTTtBQUM3QixTQUFPO0lBQ04sTUFBQSxHQUFLRCxtQkFBQUUsVUFBUztNQUNiQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtJQUNMLENBQUM7SUFDREMsVUFBQSxHQUFTTixtQkFBQUUsVUFBUztNQUNqQkMsSUFBSTtNQUNKQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0RHLFdBQUEsR0FBVVAsbUJBQUFFLFVBQVM7TUFDbEJDLElBQUk7TUFDSkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztFQUNGO0FBQ0Q7QUFFQSxJQUFNSSxlQUFlUCxnQkFBZ0I7QUFFckMsSUFBTVEsYUFBZ0RiLFNBQVE7QUFDN0QsU0FBT1ksYUFBYVosR0FBRyxLQUFLQTtBQUM3Qjs7QUR2QkEsSUFBTWMsY0FBY0EsQ0FBQ0MsV0FBK0JDLGlCQUErQjtBQUNsRixRQUFNO0lBQUNDO0VBQUksSUFBSXRTLEdBQUdDLE9BQU9DLElBQUk7QUFDN0IsUUFBTXFTLGFBQWEsQ0FBQ2pULFlBQUEsR0FBQUUsT0FBZUYsWUFBVSxHQUFBLEVBQUFFLE9BQUk0UyxTQUFTLENBQUE7QUFFMUQsTUFBSUUsU0FBUyxXQUFXO0FBQ3ZCLFdBQU9mLG1DQUFBaUIsUUFBQUMsY0FBQyxXQUFBO01BQVFDLFdBQVdIO0lBQUEsR0FBYUYsWUFBYTtFQUN0RCxXQUFXLENBQUMsVUFBVSxlQUFlLFFBQVEsRUFBRWxTLFNBQVNtUyxJQUFJLEtBQUtLLFNBQVNDLGNBQWMsZ0JBQWdCLEdBQUc7QUFDMUcsV0FBT3JCLG1DQUFBaUIsUUFBQUMsY0FBQyxNQUFBO01BQUdDLFdBQVdIO0lBQUEsR0FBYUYsWUFBYTtFQUNqRDtBQUNBLFNBQU9kLG1DQUFBaUIsUUFBQUMsY0FBQyxPQUFBO0lBQUlDLFdBQVdIO0VBQUEsR0FBYUYsWUFBYTtBQUNsRDtBQUVBLElBQU1RLFlBQVlBLENBQUNDLE1BQThCQyxrQkFBMEI7QUFDMUUsUUFBTUMsaUJBQXlCZCxXQUFXLFVBQVUsSUFBSUEsV0FBVyxHQUFHO0FBQ3RFLFFBQU1lLE9BQWVILFNBQVMsVUFBVUUsaUJBQWlCRCxnQkFBZ0JBLGtCQUFBLFFBQUFBLGtCQUFBLFNBQUFBLGdCQUFpQjtBQUUxRixTQUNDeEIsbUNBQUFpQixRQUFBQyxjQUFBbEIsbUJBQUFpQixRQUFBVSxVQUFBLE1BQ0MzQixtQ0FBQWlCLFFBQUFDLGNBQUMsUUFBQTtJQUFLQyxXQUFXLENBQUNuVCxpQkFBQSxHQUFBQyxPQUFvQkQsaUJBQWUsR0FBQSxFQUFBQyxPQUFJc1QsSUFBSSxDQUFBO0lBQUssY0FBWUc7RUFBQSxDQUFNLEdBQ3BGMUIsbUNBQUFpQixRQUFBQyxjQUFDLFFBQUE7SUFBS0MsV0FBV2pUO0VBQUEsR0FBa0J3VCxJQUFLLENBQ3pDO0FBRUY7QUFFQSxJQUFNRSxhQUFhQSxDQUFDO0VBQ25CTDtFQUNBQztFQUNBWDtBQUNELE1BSVk7QUFBQSxNQUFBZ0I7QUFDWCxNQUFJLENBQUNoQixhQUFhLENBQUNVLE1BQU07QUFDeEI7RUFDRDtBQUNBLFFBQU1PLE1BQU1sQixZQUFZQyxXQUFXUyxVQUFVQyxNQUFNQyxhQUFhLENBQUM7QUFDakUsR0FBQUssd0JBQUFULFNBQVNXLGlCQUFzQ3JVLGtCQUFrQixFQUFFLENBQUMsT0FBQSxRQUFBbVUsMEJBQUEsVUFBcEVBLHNCQUF1RUcsUUFBUUYsR0FBRztBQUNuRjs7QUVyQ0EsSUFBTUcsZ0JBQUEsMkJBQUE7QUFBQSxNQUFBQyxPQUFBQyxrQkFBZ0IsYUFBMkI7QUFDaEQsVUFBTTtNQUFDQztJQUFrQixJQUFJM1QsR0FBR0MsT0FBT0MsSUFBSTtBQUMzQyxVQUFNMFQsaUJBQUEsUUFBQXBVLE9BQWlDbVUsb0JBQWtCLGFBQUE7QUFFekQsUUFBSTtBQUFBLFVBQUFFLE9BQUFDLHVCQUFBQztBQUNILFlBQU1DLFNBQWtDO1FBQ3ZDQyxRQUFRO1FBQ1JDLFFBQVE7UUFDUkMsZUFBZTtRQUNmQyxRQUFRLENBQUNSLGNBQWM7UUFDdkJTLE1BQU0sQ0FBQyxXQUFXO1FBQ2xCQyxRQUFRLENBQUMsU0FBUztRQUNsQkMsU0FBUztNQUNWO0FBRUEsWUFBTUMsT0FBQSxNQUFhNVUsSUFBSU0sSUFBSThULE1BQU07QUFFakMsWUFBTTtRQUNMUztRQUNBQztRQUNBQztNQUNELElBRUlDLEtBQUtDOztRQUVSTCxLQUFLLE9BQU8sRUFBRU0sTUFBTSxDQUFDLEVBQUVDLFVBQVUsQ0FBQyxFQUFFQyxNQUFNQyxLQUFLQztNQUNoRDtBQUVBLFlBQU1DLFlBQUF0QixRQUEwQ1ksWUFBQSxRQUFBQSxZQUFBLFNBQUFBLFVBQVdDLG1CQUFBLFFBQUFiLFVBQUEsU0FBQUEsUUFBaUI7QUFDNUUsWUFBTXVCLHFCQUFBdEIsd0JBQ0wxQyxxQkFBcUIrRCxRQUF1QyxPQUFBLFFBQUFyQiwwQkFBQSxTQUFBQSx3QkFBSzVCLFdBQVcsU0FBUztBQUN0RixZQUFNbUQsYUFBcUJGLGFBQWEsUUFBQXBCLGlCQUFPekMsY0FBY3FELE1BQThCLE9BQUEsUUFBQVosbUJBQUEsU0FBQUEsaUJBQUssS0FBSztBQUVyR1osaUJBQVc7UUFDVkwsTUFBTTtRQUNOQyxlQUFlcUMsb0JBQW9CQztRQUNuQ2pELFdBQVc7TUFDWixDQUFDO0lBQ0YsU0FBU2tELE9BQWdCO0FBQ3hCQyxjQUFRRCxNQUFNLDZEQUE2REEsS0FBSztBQUNoRm5DLGlCQUFXO1FBQ1ZMLE1BQU07UUFDTkMsZUFBZWIsV0FBVyxTQUFTO1FBQ25DRSxXQUFXO01BQ1osQ0FBQztJQUNGO0VBQ0QsQ0FBQTtBQUFBLFNBQUEsU0E5Q01vQixpQkFBQTtBQUFBLFdBQUFDLEtBQUErQixNQUFBLE1BQUFDLFNBQUE7RUFBQTtBQUFBLEVBQUE7O0FDSE4sSUFBTUMsa0JBQUEsMkJBQUE7QUFBQSxNQUFBQyxRQUFBakMsa0JBQWtCLFdBQU9rQyxTQUFvQjtBQUNsRCxVQUFNNUIsU0FBOEI7TUFDbkM0QjtNQUNBM0IsUUFBUTtNQUNSQyxRQUFRO01BQ1JDLGVBQWU7TUFDZjBCLE1BQU07TUFDTkMsUUFBUTtJQUNUO0FBQ0EsVUFBTUMsV0FBQSxNQUFpQm5XLElBQUlNLElBQUk4VCxNQUFNO0FBRXJDLFdBQU8rQjtFQUNSLENBQUE7QUFBQSxTQUFBLFNBWk1MLGlCQUFBTSxJQUFBO0FBQUEsV0FBQUwsTUFBQUgsTUFBQSxNQUFBQyxTQUFBO0VBQUE7QUFBQSxFQUFBO0FBY04sSUFBTVEsYUFBQSwyQkFBQTtBQUFBLE1BQUFDLFFBQUF4QyxrQkFBYSxhQUEyQjtBQUM3QyxVQUFNO01BQUNDO0lBQWtCLElBQUkzVCxHQUFHQyxPQUFPQyxJQUFJO0FBQzNDLFFBQUk7QUFDSCxZQUFNO1FBQ0xpVyxPQUFPO1VBQ05DLE9BQU8sQ0FBQztZQUFDQztVQUFNLENBQUM7UUFDakI7TUFDRCxJQUFBLE1BUVdYLGdCQUFBLEdBQUFsVyxPQUFtQm1VLGtCQUFrQixDQUFFO0FBRWxELFVBQUkwQyxPQUFPbFcsU0FBUyxLQUFLLEtBQUtrVyxPQUFPbFcsU0FBUyxRQUFRLEdBQUc7TUFHekQsT0FBTztBQUNOLGFBQUtxVCxjQUFjO01BQ3BCO0lBQ0QsU0FBUzhCLE9BQWdCO0FBQ3hCQyxjQUFRRCxNQUFNLDBEQUEwREEsS0FBSztJQUM5RTtFQUNELENBQUE7QUFBQSxTQUFBLFNBMUJNVyxjQUFBO0FBQUEsV0FBQUMsTUFBQVYsTUFBQSxNQUFBQyxTQUFBO0VBQUE7QUFBQSxFQUFBOztDQ2JMLFNBQVNhLG9CQUEwQjtBQUNuQyxRQUFNO0lBQUNDO0lBQVVDO0lBQW1CQztJQUFZOUM7RUFBa0IsSUFBSTNULEdBQUdDLE9BQU9DLElBQUk7QUFDcEYsTUFDQyxDQUFDeVQsc0JBQ0R2VSxtQkFBbUJlLFNBQVN3VCxrQkFBa0IsS0FDOUN0VSxlQUFlYyxTQUFTd1Qsa0JBQWtCLEtBQzFDLEVBQUU2QyxzQkFBOEJ0WCx3QkFDaEMsRUFBRXFYLGFBQWEsU0FDZDtBQUNEO0VBQ0Q7QUFFQSxRQUFNRyxXQUFtQixJQUFJMVcsR0FBRzJXLE1BQU1GLFVBQVUsRUFBRUcsT0FBTztBQUN6RCxRQUFNQyx1QkFBK0IsSUFBSTdXLEdBQUcyVyxNQUFNaEQsb0JBQTRCelUsbUJBQW1CLEVBQUUwWCxPQUFPO0FBQzFHLE1BQUlGLGFBQWFHLHNCQUFzQjtBQUN0QztFQUNEO0FBRUEsT0FBS1osV0FBVztBQUNqQixHQUFHOyIsCiAgIm5hbWVzIjogWyJtb3VudFBvaW50U2VsZWN0b3IiLCAidXNlck5hbWVTcGFjZU51bWJlciIsICJ2ZXJzaW9uIiwgIlNZU1RFTV9TQ1JJUFRfTElTVCIsICJXRUJNQVNURVJfTElTVCIsICJDTEFTU19OQU1FIiwgIkNMQVNTX05BTUVfSUNPTiIsICJjb25jYXQiLCAiQ0xBU1NfTkFNRV9URVhUIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgInJlcXVpcmUiLCAiYXBpIiwgImluaXRNd0FwaSIsICJnZXRDb3VudHJ5T3JBcmVhTmFtZUxpc3QiLCAid2dVc2VyTGFuZ3VhZ2UiLCAibXciLCAiY29uZmlnIiwgImdldCIsICJpbmNsdWRlcyIsICJBRiIsICJBWCIsICJBTCIsICJEWiIsICJBUyIsICJBRCIsICJBTyIsICJBSSIsICJBUSIsICJBRyIsICJBUiIsICJBTSIsICJBVyIsICJBVSIsICJBVCIsICJBWiIsICJCUyIsICJCSCIsICJCRCIsICJCQiIsICJCWSIsICJCRSIsICJCWiIsICJCSiIsICJCTSIsICJCVCIsICJCTyIsICJCUSIsICJCQSIsICJCVyIsICJCViIsICJCUiIsICJJTyIsICJCTiIsICJCRyIsICJCRiIsICJCSSIsICJDViIsICJLSCIsICJDTSIsICJDQSIsICJLWSIsICJDRiIsICJURCIsICJDTCIsICJDTiIsICJDWCIsICJDQyIsICJDTyIsICJLTSIsICJDRyIsICJDRCIsICJDSyIsICJDUiIsICJDSSIsICJIUiIsICJDVSIsICJDVyIsICJDWSIsICJDWiIsICJESyIsICJESiIsICJETSIsICJETyIsICJFQyIsICJFRyIsICJTViIsICJHUSIsICJFUiIsICJFRSIsICJTWiIsICJFVCIsICJGSyIsICJGTyIsICJGSiIsICJGSSIsICJGUiIsICJHRiIsICJQRiIsICJURiIsICJHQSIsICJHTSIsICJHRSIsICJERSIsICJHSCIsICJHSSIsICJHUiIsICJHTCIsICJHRCIsICJHUCIsICJHVSIsICJHVCIsICJHRyIsICJHTiIsICJHVyIsICJHWSIsICJIVCIsICJITSIsICJWQSIsICJITiIsICJISyIsICJIVSIsICJJUyIsICJJTiIsICJJRCIsICJJUiIsICJJUSIsICJJRSIsICJJTSIsICJJTCIsICJJVCIsICJKTSIsICJKUCIsICJKRSIsICJKTyIsICJLWiIsICJLRSIsICJLSSIsICJLUCIsICJLUiIsICJLVyIsICJLRyIsICJMQSIsICJMViIsICJMQiIsICJMUyIsICJMUiIsICJMWSIsICJMSSIsICJMVCIsICJMVSIsICJNTyIsICJNRyIsICJNVyIsICJNWSIsICJNViIsICJNTCIsICJNVCIsICJNSCIsICJNUSIsICJNUiIsICJNVSIsICJZVCIsICJNWCIsICJGTSIsICJNRCIsICJNQyIsICJNTiIsICJNRSIsICJNUyIsICJNQSIsICJNWiIsICJNTSIsICJOQSIsICJOUiIsICJOUCIsICJOTCIsICJOQyIsICJOWiIsICJOSSIsICJORSIsICJORyIsICJOVSIsICJORiIsICJNSyIsICJNUCIsICJOTyIsICJPTSIsICJQSyIsICJQVyIsICJQUyIsICJQQSIsICJQRyIsICJQWSIsICJQRSIsICJQSCIsICJQTiIsICJQTCIsICJQVCIsICJQUiIsICJRQSIsICJSRSIsICJSTyIsICJSVSIsICJSVyIsICJCTCIsICJTSCIsICJLTiIsICJMQyIsICJNRiIsICJQTSIsICJWQyIsICJXUyIsICJTTSIsICJTVCIsICJTQSIsICJTTiIsICJSUyIsICJTQyIsICJTTCIsICJTRyIsICJTWCIsICJTSyIsICJTSSIsICJTQiIsICJTTyIsICJaQSIsICJHUyIsICJTUyIsICJFUyIsICJMSyIsICJTRCIsICJTUiIsICJTSiIsICJTRSIsICJDSCIsICJTWSIsICJUVyIsICJUSiIsICJUWiIsICJUSCIsICJUTCIsICJURyIsICJUSyIsICJUTyIsICJUVCIsICJUTiIsICJUUiIsICJUTSIsICJUQyIsICJUViIsICJVRyIsICJVQSIsICJBRSIsICJHQiIsICJVUyIsICJVTSIsICJVWSIsICJVWiIsICJWVSIsICJWRSIsICJWTiIsICJWRyIsICJWSSIsICJXRiIsICJFSCIsICJZRSIsICJaTSIsICJaVyIsICJnZXRSZWdpb25OYW1lTGlzdCIsICJBSCIsICJDUSIsICJHWCIsICJHWiIsICJIQSIsICJIQiIsICJIRSIsICJISSIsICJITCIsICJKTCIsICJKUyIsICJKWCIsICJMTiIsICJOTSIsICJOWCIsICJRSCIsICJYSiIsICJYWiIsICJZTiIsICJaSiIsICJjb3VudHJ5T3JBcmVhTGlzdCIsICJyZWdpb25MaXN0IiwgImdldENvdW50cnlPckFyZWFOYW1lIiwgImtleSIsICJnZXRSZWdpb25OYW1lIiwgImltcG9ydF9leHRfZ2FkZ2V0MyIsICJfX3RvRVNNIiwgImltcG9ydF9leHRfZ2FkZ2V0MiIsICJnZXRJMThuTWVzc2FnZXMiLCAibG9jYWxpemUiLCAiZW4iLCAiamEiLCAiemgiLCAiVW5rbm93biIsICJMb2NhdGlvbiIsICJpMThuTWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJlbGVtZW50V3JhcCIsICJzcGFuQ2xhc3MiLCAiaW5uZXJFbGVtZW50IiwgInNraW4iLCAiY2xhc3NOYW1lcyIsICJkZWZhdWx0IiwgImNyZWF0ZUVsZW1lbnQiLCAiY2xhc3NOYW1lIiwgImRvY3VtZW50IiwgInF1ZXJ5U2VsZWN0b3IiLCAiaW5kaWNhdG9yIiwgImljb24iLCAiaW5kaWNhdG9yVGV4dCIsICJpcExvY2F0aW9uRGVzYyIsICJ0ZXh0IiwgIkZyYWdtZW50IiwgImFwcGVuZEljb24iLCAiX2RvY3VtZW50JHF1ZXJ5U2VsZWN0IiwgInRhZyIsICJxdWVyeVNlbGVjdG9yQWxsIiwgInByZXBlbmQiLCAiYXBwZW5kR2VvSWNvbiIsICJfcmVmIiwgIl9hc3luY1RvR2VuZXJhdG9yIiwgIndnUmVsZXZhbnRVc2VyTmFtZSIsICJzdG9yZVBhZ2VUaXRsZSIsICJfcmVmMiIsICJfZ2V0Q291bnRyeU9yQXJlYU5hbWUiLCAiX2dldFJlZ2lvbk5hbWUiLCAicGFyYW1zIiwgImFjdGlvbiIsICJmb3JtYXQiLCAiZm9ybWF0dmVyc2lvbiIsICJ0aXRsZXMiLCAicHJvcCIsICJydnByb3AiLCAicnZzbG90cyIsICJkYXRhIiwgImNvdW50cnkiLCAiY291bnRyeU9yQXJlYSIsICJyZWdpb24iLCAiSlNPTiIsICJwYXJzZSIsICJwYWdlcyIsICJyZXZpc2lvbnMiLCAic2xvdHMiLCAibWFpbiIsICJjb250ZW50IiwgImxvY2F0aW9uIiwgImNvdW50cnlPckFyZWFOYW1lIiwgInJlZ2lvbk5hbWUiLCAiZXJyb3IiLCAiY29uc29sZSIsICJhcHBseSIsICJhcmd1bWVudHMiLCAicXVlcnlVc2VyR3JvdXBzIiwgIl9yZWYzIiwgInVzdXNlcnMiLCAibGlzdCIsICJ1c3Byb3AiLCAicmVzcG9uc2UiLCAiX3giLCAiYWRkRWxlbWVudCIsICJfcmVmNCIsICJxdWVyeSIsICJ1c2VycyIsICJncm91cHMiLCAiZ2VvTG9jYXRpb25SZWFkZXIiLCAid2dBY3Rpb24iLCAid2dOYW1lc3BhY2VOdW1iZXIiLCAid2dQYWdlTmFtZSIsICJwYWdlTmFtZSIsICJUaXRsZSIsICJ0b1RleHQiLCAicmVsZXZhbnRVc2VyUGFnZU5hbWUiXQp9Cg==

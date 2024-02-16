/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|title=GeoLocationReader|license=CC-BY-SA-4.0}}'
 *
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/GeoLocationReader}
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
var _mw$config$get;
var _mw$config$get2;
var _mw$config$get3;
var _mw$config$get4;
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function() {
    var self = this, args = arguments;
    return new Promise(function(resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(void 0);
    });
  };
}
function _createForOfIteratorHelper(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it)
        o = it;
      var i = 0;
      var F = function() {
      };
      return { s: F, n: function() {
        if (i >= o.length)
          return { done: true };
        return { done: false, value: o[i++] };
      }, e: function(e) {
        throw e;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var normalCompletion = true, didErr = false, err;
  return { s: function() {
    it = it.call(o);
  }, n: function() {
    var step = it.next();
    normalCompletion = step.done;
    return step;
  }, e: function(e) {
    didErr = true;
    err = e;
  }, f: function() {
    try {
      if (!normalCompletion && it.return != null)
        it.return();
    } finally {
      if (didErr)
        throw err;
    }
  } };
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
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
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, {
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
var WG_SCRIPT = mw.config.get("wgScript");
var WG_USER_GROUPS = (_mw$config$get = mw.config.get("wgUserGroups")) !== null && _mw$config$get !== void 0 ? _mw$config$get : [];
var WG_USER_NAME = (_mw$config$get2 = mw.config.get("wgUserName")) !== null && _mw$config$get2 !== void 0 ? _mw$config$get2 : "";
var WG_USER_EDIT_COUNT = (_mw$config$get3 = mw.config.get("wgUserEditCount")) !== null && _mw$config$get3 !== void 0 ? _mw$config$get3 : 0;
//! src/GeoLocationReader/modules/constant.ts
var CLASS_NAME = "gadget-geo_location_reader";
var CLASS_NAME_ICON = "".concat(CLASS_NAME, "__icon");
var CLASS_NAME_TEXT = "".concat(CLASS_NAME, "__text");
var IS_USER_PAGE = mw.config.get("wgNamespaceNumber") === userNameSpaceNumber;
var IS_WG_ACTION_VIEW = mw.config.get("wgAction") === "view";
var WG_PAGE_NAME = mw.config.get("wgPageName");
var WG_RELEVANT_USER_NAME = (_mw$config$get4 = mw.config.get("wgRelevantUserName")) !== null && _mw$config$get4 !== void 0 ? _mw$config$get4 : "";
var WG_SCRIPT2 = mw.config.get("wgScript");
var WG_SKIN = mw.config.get("skin");
var WG_USER_LANGUAGE = mw.config.get("wgUserLanguage");
//! src/GeoLocationReader/modules/api.ts
var import_ext_gadget = require("ext.gadget.Util");
var api = (0, import_ext_gadget.initMwApi)("GeoLocationReader/".concat(version));
//! src/GeoLocationReader/modules/util/name.ts
var getCountryOrAreaNameList = () => {
  if (["zh-hant", "zh-hk", "zh-mo"].includes(WG_USER_LANGUAGE)) {
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
  } else if (["zh-tw"].includes(WG_USER_LANGUAGE)) {
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
  } else if (["zh-my", "zh-sg"].includes(WG_USER_LANGUAGE)) {
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
  if (["zh-hant", "zh-hk", "zh-mo", "zh-tw"].includes(WG_USER_LANGUAGE)) {
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
//! src/GeoLocationReader/modules/appendGeoIcon.tsx
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
//! src/GeoLocationReader/modules/appendGeoIcon.tsx
var appendIcon = ($body, {
  icon,
  indicatorText,
  spanClass
}) => {
  const ipLocationDesc = getMessage("Location") + getMessage(":");
  const text = icon === "globe" ? ipLocationDesc + indicatorText : indicatorText !== null && indicatorText !== void 0 ? indicatorText : "";
  const tag = WG_SKIN === "citizen" ? /* @__PURE__ */ import_ext_gadget3.default.createElement("section", {
    className: [CLASS_NAME, "".concat(CLASS_NAME, "-").concat(spanClass)]
  }) : ["vector", "vector-2022", "gongbi"].includes(WG_SKIN) ? /* @__PURE__ */ import_ext_gadget3.default.createElement("li", {
    className: [CLASS_NAME, "".concat(CLASS_NAME, "-").concat(spanClass)]
  }) : /* @__PURE__ */ import_ext_gadget3.default.createElement("div", {
    className: [CLASS_NAME, "".concat(CLASS_NAME, "-").concat(spanClass)]
  });
  const indicatorInner = /* @__PURE__ */ import_ext_gadget3.default.createElement(import_ext_gadget3.default.Fragment, null, /* @__PURE__ */ import_ext_gadget3.default.createElement("span", {
    className: [CLASS_NAME_ICON, "".concat(CLASS_NAME_ICON, "-").concat(icon)],
    "aria-label": text
  }), /* @__PURE__ */ import_ext_gadget3.default.createElement("span", {
    className: CLASS_NAME_TEXT
  }, text));
  const $target = $body.find(mountPointSelector);
  $(tag).append(indicatorInner).prependTo($target);
};
var appendGeoIcon = /* @__PURE__ */ function() {
  var _ref = _asyncToGenerator(function* ($body) {
    const storePageTitle = "User:".concat(WG_RELEVANT_USER_NAME, "/GeoIP.json");
    try {
      var _ref2, _getCountryOrAreaName, _getRegionName;
      const data = yield api.post({
        action: "query",
        title: storePageTitle,
        format: "json",
        formatversion: 2,
        prop: ["revisions"],
        rvprop: ["content"],
        rvslots: "main"
      });
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
      appendIcon($body, {
        icon: "globe",
        indicatorText: countryOrAreaName + regionName,
        spanClass: "green"
      });
    } catch (error) {
      console.error("[GeoLocationReader] Ajax error in `appendGeoIcon` method:", error);
      appendIcon($body, {
        icon: "helpNotice",
        indicatorText: getMessage("Unknown"),
        spanClass: "orange"
      });
    }
  });
  return function appendGeoIcon2(_x) {
    return _ref.apply(this, arguments);
  };
}();
//! src/GeoLocationReader/modules/addElement.ts
var import_ext_gadget4 = require("ext.gadget.Util");
var addElement = /* @__PURE__ */ function() {
  var _ref3 = _asyncToGenerator(function* () {
    const queryUserGroupsParams = {
      action: "query",
      format: "json",
      formatversion: "2",
      list: "users",
      ususers: WG_RELEVANT_USER_NAME,
      usprop: "groups"
    };
    try {
      const {
        query: {
          users: [{
            groups
          }]
        }
      } = yield api.get(queryUserGroupsParams);
      const $body = yield (0, import_ext_gadget4.getBody)();
      if (groups.includes("bot") || groups.includes("qiuwen")) {
      } else {
        void appendGeoIcon($body);
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
  if (SYSTEM_SCRIPT_LIST.includes(WG_RELEVANT_USER_NAME) || WEBMASTER_LIST.includes(WG_RELEVANT_USER_NAME) || !WG_RELEVANT_USER_NAME || !IS_USER_PAGE || !IS_WG_ACTION_VIEW) {
    return;
  }
  const pageName = new mw.Title(WG_PAGE_NAME).toText();
  const relevantUserPageName = new mw.Title(WG_RELEVANT_USER_NAME, userNameSpaceNumber).toText();
  if (pageName !== relevantUserPageName) {
    return;
  }
  void addElement();
})();

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0dlb0xvY2F0aW9uUmVhZGVyL29wdGlvbnMuanNvbiIsICJzcmMvR2VvTG9jYXRpb24vbW9kdWxlcy9jb25zdGFudC50cyIsICJzcmMvR2VvTG9jYXRpb25SZWFkZXIvbW9kdWxlcy9jb25zdGFudC50cyIsICJzcmMvR2VvTG9jYXRpb25SZWFkZXIvbW9kdWxlcy9hcGkudHMiLCAic3JjL0dlb0xvY2F0aW9uUmVhZGVyL21vZHVsZXMvdXRpbC9uYW1lLnRzIiwgInNyYy9HZW9Mb2NhdGlvblJlYWRlci9tb2R1bGVzL3V0aWwvZ2V0TmFtZS50cyIsICJzcmMvR2VvTG9jYXRpb25SZWFkZXIvbW9kdWxlcy9hcHBlbmRHZW9JY29uLnRzeCIsICJzcmMvR2VvTG9jYXRpb25SZWFkZXIvbW9kdWxlcy9pMThuLnRzIiwgInNyYy9HZW9Mb2NhdGlvblJlYWRlci9tb2R1bGVzL2FkZEVsZW1lbnQudHMiLCAic3JjL0dlb0xvY2F0aW9uUmVhZGVyL0dlb0xvY2F0aW9uUmVhZGVyLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJ7XG5cdFwibW91bnRQb2ludFNlbGVjdG9yXCI6IFwiI2Zvb3Rlci1pbmZvLC5wYWdlLWluZm9cIixcblx0XCJ1c2VyTmFtZVNwYWNlTnVtYmVyXCI6IDIsXG5cdFwidmVyc2lvblwiOiBcIjIuMFwiXG59XG4iLCAiY29uc3QgU1lTVEVNX1NDUklQVF9MSVNUOiBzdHJpbmdbXSA9IFtcblx0J+a7peeUqOi/h+a7pOWZqCcsXG5cdCfmsYLpl7vnvJbogIUnLFxuXHQn5rGC6Ze755m+56eR56S+5Yy6Jyxcblx0J0V4YW1wbGUnLFxuXHQnRXh0ZXJuYWwgY29udHJpYnV0b3JzJyxcblx0J01haW50ZW5hbmNlIHNjcmlwdCcsXG5cdCdNZWRpYVdpa2kgZGVmYXVsdCcsXG5cdCdNZWRpYVdpa2kgbWVzc2FnZSBkZWxpdmVyeScsXG5cdCdOZXcgdXNlciBwYWdlJyxcbl07XG5jb25zdCBXRUJNQVNURVJfTElTVDogc3RyaW5nW10gPSBbJ1FpdVdlbicsICdRaXVXZW4gZm9yIEFjY291bnRzJywgJ1FpdXdlblNvY2lhbE1lZGlhJ107XG5cbmNvbnN0IFdHX1NDUklQVDogc3RyaW5nID0gbXcuY29uZmlnLmdldCgnd2dTY3JpcHQnKTtcbmNvbnN0IFdHX1VTRVJfR1JPVVBTOiBzdHJpbmdbXSA9IG13LmNvbmZpZy5nZXQoJ3dnVXNlckdyb3VwcycpID8/IFtdO1xuY29uc3QgV0dfVVNFUl9OQU1FOiBzdHJpbmcgPSBtdy5jb25maWcuZ2V0KCd3Z1VzZXJOYW1lJykgPz8gJyc7XG5jb25zdCBXR19VU0VSX0VESVRfQ09VTlQ6IG51bWJlciA9IG13LmNvbmZpZy5nZXQoJ3dnVXNlckVkaXRDb3VudCcpID8/IDA7XG5cbmV4cG9ydCB7U1lTVEVNX1NDUklQVF9MSVNULCBXRUJNQVNURVJfTElTVCwgV0dfU0NSSVBULCBXR19VU0VSX0VESVRfQ09VTlQsIFdHX1VTRVJfR1JPVVBTLCBXR19VU0VSX05BTUV9O1xuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vb3B0aW9ucy5qc29uJztcblxuY29uc3QgQ0xBU1NfTkFNRTogc3RyaW5nID0gJ2dhZGdldC1nZW9fbG9jYXRpb25fcmVhZGVyJztcbmNvbnN0IENMQVNTX05BTUVfSUNPTjogc3RyaW5nID0gYCR7Q0xBU1NfTkFNRX1fX2ljb25gO1xuY29uc3QgQ0xBU1NfTkFNRV9URVhUOiBzdHJpbmcgPSBgJHtDTEFTU19OQU1FfV9fdGV4dGA7XG5cbmNvbnN0IElTX1VTRVJfUEFHRTogYm9vbGVhbiA9IG13LmNvbmZpZy5nZXQoJ3dnTmFtZXNwYWNlTnVtYmVyJykgPT09IE9QVElPTlMudXNlck5hbWVTcGFjZU51bWJlcjtcbmNvbnN0IElTX1dHX0FDVElPTl9WSUVXOiBib29sZWFuID0gbXcuY29uZmlnLmdldCgnd2dBY3Rpb24nKSA9PT0gJ3ZpZXcnO1xuXG5jb25zdCBXR19QQUdFX05BTUU6IHN0cmluZyA9IG13LmNvbmZpZy5nZXQoJ3dnUGFnZU5hbWUnKTtcbmNvbnN0IFdHX1JFTEVWQU5UX1VTRVJfTkFNRTogc3RyaW5nID0gbXcuY29uZmlnLmdldCgnd2dSZWxldmFudFVzZXJOYW1lJykgPz8gJyc7XG5jb25zdCBXR19TQ1JJUFQ6IHN0cmluZyA9IG13LmNvbmZpZy5nZXQoJ3dnU2NyaXB0Jyk7XG5jb25zdCBXR19TS0lOOiBzdHJpbmcgPSBtdy5jb25maWcuZ2V0KCdza2luJyk7XG5jb25zdCBXR19VU0VSX0xBTkdVQUdFOiBzdHJpbmcgPSBtdy5jb25maWcuZ2V0KCd3Z1VzZXJMYW5ndWFnZScpO1xuXG5leHBvcnQge1NZU1RFTV9TQ1JJUFRfTElTVCwgV0VCTUFTVEVSX0xJU1R9IGZyb20gJ34vR2VvTG9jYXRpb24vbW9kdWxlcy9jb25zdGFudCc7XG5leHBvcnQge1xuXHRDTEFTU19OQU1FLFxuXHRDTEFTU19OQU1FX0lDT04sXG5cdENMQVNTX05BTUVfVEVYVCxcblx0SVNfVVNFUl9QQUdFLFxuXHRJU19XR19BQ1RJT05fVklFVyxcblx0V0dfUEFHRV9OQU1FLFxuXHRXR19SRUxFVkFOVF9VU0VSX05BTUUsXG5cdFdHX1NDUklQVCxcblx0V0dfU0tJTixcblx0V0dfVVNFUl9MQU5HVUFHRSxcbn07XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtpbml0TXdBcGl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmNvbnN0IGFwaTogbXcuQXBpID0gaW5pdE13QXBpKGBHZW9Mb2NhdGlvblJlYWRlci8ke09QVElPTlMudmVyc2lvbn1gKTtcblxuZXhwb3J0IHthcGl9O1xuIiwgImltcG9ydCB7V0dfVVNFUl9MQU5HVUFHRX0gZnJvbSAnLi4vY29uc3RhbnQnO1xuXG5jb25zdCBnZXRDb3VudHJ5T3JBcmVhTmFtZUxpc3QgPSAoKSA9PiB7XG5cdGlmIChbJ3poLWhhbnQnLCAnemgtaGsnLCAnemgtbW8nXS5pbmNsdWRlcyhXR19VU0VSX0xBTkdVQUdFKSkge1xuXHRcdHJldHVybiB7XG5cdFx0XHRBRjogJ+mYv+WvjOaxlycsXG5cdFx0XHRBWDogJ+Wlp+iYrScsXG5cdFx0XHRBTDogJ+mYv+eIvuW3tOWwvOS6nicsXG5cdFx0XHREWjogJ+mYv+eIvuWPiuWIqeS6nicsXG5cdFx0XHRBUzogJ+e+juWxrOiWqeaRqeS6nicsXG5cdFx0XHRBRDogJ+WuiemBk+eIvicsXG5cdFx0XHRBTzogJ+WuieWTpeaLiScsXG5cdFx0XHRBSTogJ+WuieWcreaLiScsXG5cdFx0XHRBUTogJ+WNl+altea0sicsXG5cdFx0XHRBRzogJ+WuieaPkOeTnOWSjOW3tOW4g+mBlCcsXG5cdFx0XHRBUjogJ+mYv+agueW7tycsXG5cdFx0XHRBTTogJ+S6nue+juWwvOS6nicsXG5cdFx0XHRBVzogJ+mYv+mtr+W3tCcsXG5cdFx0XHRBVTogJ+a+s+a0sicsXG5cdFx0XHRBVDogJ+Wlp+WcsOWIqScsXG5cdFx0XHRBWjogJ+mYv+WhnuaLnOeWhicsXG5cdFx0XHRCUzogJ+W3tOWTiOmmrCcsXG5cdFx0XHRCSDogJ+W3tOaelycsXG5cdFx0XHRCRDogJ+Wtn+WKoOaLieWciycsXG5cdFx0XHRCQjogJ+W3tOW3tOWkmuaWrycsXG5cdFx0XHRCWTogJ+eZveS/hOe+heaWrycsXG5cdFx0XHRCRTogJ+avlOWIqeaZgicsXG5cdFx0XHRCWjogJ+S8r+WIqeiMsicsXG5cdFx0XHRCSjogJ+iyneWvpycsXG5cdFx0XHRCTTogJ+eZvuaFlemBlCcsXG5cdFx0XHRCVDogJ+S4jeS4uScsXG5cdFx0XHRCTzogJ+eOu+WIqee2reS6nicsXG5cdFx0XHRCUTogJ+iNt+iYreWKoOWLkuavlOWNgCcsXG5cdFx0XHRCQTogJ+azoum7kScsXG5cdFx0XHRCVzogJ+WNmuiMqOeTpue0jScsXG5cdFx0XHRCVjogJ+W4g+mfi+WzticsXG5cdFx0XHRCUjogJ+W3tOilvycsXG5cdFx0XHRJTzogJ+iLseWxrOWNsOW6pua0i+mgmOWcsCcsXG5cdFx0XHRCTjogJ+axtuiQiicsXG5cdFx0XHRCRzogJ+S/neWKoOWIqeS6nicsXG5cdFx0XHRCRjogJ+W4g+Wfuue0jeazlee0oicsXG5cdFx0XHRCSTogJ+W4g+mahui/qicsXG5cdFx0XHRDVjogJ+S9m+W+l+inkicsXG5cdFx0XHRLSDogJ+afrOWflOWvqCcsXG5cdFx0XHRDTTogJ+WWgOm6pemahicsXG5cdFx0XHRDQTogJ+WKoOaLv+WkpycsXG5cdFx0XHRLWTogJ+mWi+abvOe+pOWzticsXG5cdFx0XHRDRjogJ+S4remdnicsXG5cdFx0XHRURDogJ+S5jeW+lycsXG5cdFx0XHRDTDogJ+aZuuWIqScsXG5cdFx0XHRDTjogJ+S4reWciycsXG5cdFx0XHRDWDogJ+iBluiqleWzticsXG5cdFx0XHRDQzogJ+enkeenkeaWr++8iOWfuuael++8iee+pOWzticsXG5cdFx0XHRDTzogJ+WTpeWAq+avlOS6nicsXG5cdFx0XHRLTTogJ+enkeaRqee+hScsXG5cdFx0XHRDRzogJ+WJm+aenOWFseWSjOWciycsXG5cdFx0XHRDRDogJ+WJm+aenOawkeS4u+WFseWSjOWciycsXG5cdFx0XHRDSzogJ+W6q+WFi+e+pOWzticsXG5cdFx0XHRDUjogJ+WTpeaWr+mBlOm7juWKoCcsXG5cdFx0XHRDSTogJ+enkeeJuei/queTpicsXG5cdFx0XHRIUjogJ+WFi+e+heWcsOS6nicsXG5cdFx0XHRDVTogJ+WPpOW3tCcsXG5cdFx0XHRDVzogJ+W6q+aLiee0oicsXG5cdFx0XHRDWTogJ+Whnua1pui3r+aWrycsXG5cdFx0XHRDWjogJ+aNt+WFiycsXG5cdFx0XHRESzogJ+S4uem6pScsXG5cdFx0XHRESjogJ+WQieW4g+aPkCcsXG5cdFx0XHRETTogJ+Wkmuexs+WwvOWFiycsXG5cdFx0XHRETzogJ+Wkmuexs+WwvOWKoCcsXG5cdFx0XHRFQzogJ+WOhOeTnOWkmueIvicsXG5cdFx0XHRFRzogJ+Wfg+WPiicsXG5cdFx0XHRTVjogJ+iWqeeIvueTpuWkmicsXG5cdFx0XHRHUTogJ+i1pOmBk+eVv+WFp+S6nicsXG5cdFx0XHRFUjogJ+WOhOeri+eJuemHjOS6nicsXG5cdFx0XHRFRTogJ+aEm+aymeWwvOS6nicsXG5cdFx0XHRTWjogJ+aWr+WogeWjq+iYrScsXG5cdFx0XHRFVDogJ+Wfg+WhnuS/hOavlOS6nicsXG5cdFx0XHRGSzogJ+emj+WFi+iYree+pOWzticsXG5cdFx0XHRGTzogJ+azlee+hee+pOWzticsXG5cdFx0XHRGSjogJ+aWkOa/nycsXG5cdFx0XHRGSTogJ+iKrOiYrScsXG5cdFx0XHRGUjogJ+azleWciycsXG5cdFx0XHRHRjogJ+azleWxrOWcreS6numCoycsXG5cdFx0XHRQRjogJ+azleWxrOazouWIqeWwvOilv+S6nicsXG5cdFx0XHRURjogJ+azleWxrOWNl+mDqOWSjOWNl+altemgmOWcsCcsXG5cdFx0XHRHQTogJ+WKoOiTrCcsXG5cdFx0XHRHTTogJ+WyoeavlOS6nicsXG5cdFx0XHRHRTogJ+agvOmtr+WQieS6nicsXG5cdFx0XHRERTogJ+W+t+WciycsXG5cdFx0XHRHSDogJ+WKoOe0jScsXG5cdFx0XHRHSTogJ+ebtOW4g+e+hemZgCcsXG5cdFx0XHRHUjogJ+W4jOiHmCcsXG5cdFx0XHRHTDogJ+agvOmZteiYrScsXG5cdFx0XHRHRDogJ+agvOael+e0jemBlCcsXG5cdFx0XHRHUDogJ+eTnOW+t+e+heaZricsXG5cdFx0XHRHVTogJ+mXnOWzticsXG5cdFx0XHRHVDogJ+WNseWcsOmmrOaLiScsXG5cdFx0XHRHRzogJ+agueilvycsXG5cdFx0XHRHTjogJ+eVv+WFp+S6nicsXG5cdFx0XHRHVzogJ+eVv+WFp+S6nuavlOe0uScsXG5cdFx0XHRHWTogJ+WcreS6numCoycsXG5cdFx0XHRIVDogJ+a1t+WcsCcsXG5cdFx0XHRITTogJ+i1q+W+t+WztuWSjOm6peWFi+WUkOe0jee+pOWzticsXG5cdFx0XHRWQTogJ+aiteiSguWyoScsXG5cdFx0XHRITjogJ+a0qumDveaLieaWrycsXG5cdFx0XHRISzogJ+S4reWci+mmmea4rycsXG5cdFx0XHRIVTogJ+WMiOeJmeWIqScsXG5cdFx0XHRJUzogJ+WGsOWzticsXG5cdFx0XHRJTjogJ+WNsOW6picsXG5cdFx0XHRJRDogJ+WNsOWwvCcsXG5cdFx0XHRJUjogJ+S8iuaclycsXG5cdFx0XHRJUTogJ+S8iuaLieWFiycsXG5cdFx0XHRJRTogJ+aEm+eIvuiYrScsXG5cdFx0XHRJTTogJ+S6uuWzticsXG5cdFx0XHRJTDogJ+S7peiJsuWIlycsXG5cdFx0XHRJVDogJ+aEj+Wkp+WIqScsXG5cdFx0XHRKTTogJ+eJmeiyt+WKoCcsXG5cdFx0XHRKUDogJ+aXpeacrCcsXG5cdFx0XHRKRTogJ+a+pOilvycsXG5cdFx0XHRKTzogJ+e0hOaXpicsXG5cdFx0XHRLWjogJ+WTiOiWqeWFiycsXG5cdFx0XHRLRTogJ+iCr+mbhScsXG5cdFx0XHRLSTogJ+WfuumHjOW3tOaWrycsXG5cdFx0XHRLUDogJ+WMl+mfkycsXG5cdFx0XHRLUjogJ+mfk+WciycsXG5cdFx0XHRLVzogJ+enkeWogeeJuScsXG5cdFx0XHRLRzogJ+WQieeIvuWQieaWrycsXG5cdFx0XHRMQTogJ+iAgeaSvicsXG5cdFx0XHRMVjogJ+aLieiEq+e2reS6nicsXG5cdFx0XHRMQjogJ+m7juW3tOWrqScsXG5cdFx0XHRMUzogJ+iQiue0ouaJmCcsXG5cdFx0XHRMUjogJ+WIqeavlOmHjOS6nicsXG5cdFx0XHRMWTogJ+WIqeavlOS6nicsXG5cdFx0XHRMSTogJ+WIl+aUr+aVpuWjq+eZuycsXG5cdFx0XHRMVDogJ+eri+mZtuWumycsXG5cdFx0XHRMVTogJ+ebp+ajruWgoScsXG5cdFx0XHRNTzogJ+S4reWci+a+s+mWgCcsXG5cdFx0XHRNRzogJ+mmrOmBlOWKoOaWr+WKoCcsXG5cdFx0XHRNVzogJ+mmrOaLiee2rScsXG5cdFx0XHRNWTogJ+mmrOS+huilv+S6nicsXG5cdFx0XHRNVjogJ+mmrOeIvuS7o+WkqycsXG5cdFx0XHRNTDogJ+mmrOmHjCcsXG5cdFx0XHRNVDogJ+mmrOiAs+S7licsXG5cdFx0XHRNSDogJ+mmrOe0ueeIvue+pOWzticsXG5cdFx0XHRNUTogJ+mmrOaPkOWwvOWFiycsXG5cdFx0XHRNUjogJ+avm+mHjOWhlOWwvOS6nicsXG5cdFx0XHRNVTogJ+avm+mHjOijmOaWrycsXG5cdFx0XHRZVDogJ+mmrOe0hOeJuScsXG5cdFx0XHRNWDogJ+WiqOilv+WTpScsXG5cdFx0XHRGTTogJ+WvhuWFi+e+heWwvOilv+S6nuiBr+mCpicsXG5cdFx0XHRNRDogJ+aRqeeIvuWkmueTpicsXG5cdFx0XHRNQzogJ+aRqee0jeWTpScsXG5cdFx0XHRNTjogJ+iSmeWPpCcsXG5cdFx0XHRNRTogJ+m7keWxsScsXG5cdFx0XHRNUzogJ+iSmeeJueWhnuaLieeJuScsXG5cdFx0XHRNQTogJ+aRqea0m+WTpScsXG5cdFx0XHRNWjogJ+iOq+ahkeavlOWFiycsXG5cdFx0XHRNTTogJ+e3rOeUuCcsXG5cdFx0XHROQTogJ+e0jeexs+avlOS6nicsXG5cdFx0XHROUjogJ+eRmemtrycsXG5cdFx0XHROUDogJ+WwvOaziueIvicsXG5cdFx0XHROTDogJ+iNt+iYrScsXG5cdFx0XHROQzogJ+aWsOWWgOmHjOWkmuWwvOS6nicsXG5cdFx0XHROWjogJ+aWsOilv+iYrScsXG5cdFx0XHROSTogJ+WwvOWKoOaLieeTnCcsXG5cdFx0XHRORTogJ+WwvOaXpeeIvicsXG5cdFx0XHRORzogJ+WwvOaXpeWIqeS6nicsXG5cdFx0XHROVTogJ+e0kOWfgycsXG5cdFx0XHRORjogJ+irvuemj+WFi+WzticsXG5cdFx0XHRNSzogJ+WMl+mmrOWFtumgkycsXG5cdFx0XHRNUDogJ+WMl+mmrOWIqeWuiee0jee+pOWzticsXG5cdFx0XHROTzogJ+aMquWogScsXG5cdFx0XHRPTTogJ+mYv+abvCcsXG5cdFx0XHRQSzogJ+W3tOWfuuaWr+WdpicsXG5cdFx0XHRQVzogJ+W4leWLnicsXG5cdFx0XHRQUzogJ+W3tOWLkuaWr+WdpicsXG5cdFx0XHRQQTogJ+W3tOaLv+mmrCcsXG5cdFx0XHRQRzogJ+W3tOW4g+S6nuaWsOeVv+WFp+S6nicsXG5cdFx0XHRQWTogJ+W3tOaLieWcrScsXG5cdFx0XHRQRTogJ+enmOmtrycsXG5cdFx0XHRQSDogJ+iPsuW+i+izkycsXG5cdFx0XHRQTjogJ+earueJueiCr+e+pOWzticsXG5cdFx0XHRQTDogJ+azouiYrScsXG5cdFx0XHRQVDogJ+iRoeiQhOeJmScsXG5cdFx0XHRQUjogJ+azouWkmum7juWQhCcsXG5cdFx0XHRRQTogJ+WNoeWhlOeIvicsXG5cdFx0XHRSRTogJ+eVmeWwvOaxqicsXG5cdFx0XHRSTzogJ+e+hemmrOWwvOS6nicsXG5cdFx0XHRSVTogJ+S/hOe+heaWrycsXG5cdFx0XHRSVzogJ+ebp+aXuumBlCcsXG5cdFx0XHRCTDogJ+iBluW3tOazsOWLkuexsycsXG5cdFx0XHRTSDogJ+iBlua1t+WAq+WonOOAgemYv+ajruadvuWSjOeJuemHjOaWr+Wdpi3pgZTluqvlsLzkup4nLFxuXHRcdFx0S046ICfogZbln7rojKjlkozlsLzntq3mlq8nLFxuXHRcdFx0TEM6ICfogZbnm6fopb/kup4nLFxuXHRcdFx0TUY6ICfms5XlsazogZbppqzkuIEnLFxuXHRcdFx0UE06ICfogZbnmq7ln4PniL7lkozlr4blhYvpmoYnLFxuXHRcdFx0VkM6ICfogZbmlofmo67nibnlkozmoLzmnpfntI3kuIHmlq8nLFxuXHRcdFx0V1M6ICfolqnmkankup4nLFxuXHRcdFx0U006ICfogZbppqzlipvoq74nLFxuXHRcdFx0U1Q6ICfogZblpJrnvo7lkozmma7mnpfopb/mr5QnLFxuXHRcdFx0U0E6ICfmspnlnLDpmL/mi4nkvK8nLFxuXHRcdFx0U046ICfloZ7lhafliqDniL4nLFxuXHRcdFx0UlM6ICfloZ7niL7ntq3kup4nLFxuXHRcdFx0U0M6ICfloZ7oiIzniL4nLFxuXHRcdFx0U0w6ICfloZ7mi4nliKnmmIInLFxuXHRcdFx0U0c6ICfmlrDliqDlnaEnLFxuXHRcdFx0U1g6ICfojbflsazogZbppqzkuIEnLFxuXHRcdFx0U0s6ICfmlq/mtJvkvJDlhYsnLFxuXHRcdFx0U0k6ICfmlq/mtJvmloflsLzkup4nLFxuXHRcdFx0U0I6ICfmiYDnvoXploDnvqTls7YnLFxuXHRcdFx0U086ICfntKLppqzph4wnLFxuXHRcdFx0WkE6ICfljZfpnZ4nLFxuXHRcdFx0R1M6ICfljZfllqzmsrvkup7lkozljZfmoZHlqIHlpYfnvqTls7YnLFxuXHRcdFx0U1M6ICfljZfomIfkuLknLFxuXHRcdFx0RVM6ICfopb/nj63niZknLFxuXHRcdFx0TEs6ICfmlq/ph4zomK3ljaEnLFxuXHRcdFx0U0Q6ICfomIfkuLknLFxuXHRcdFx0U1I6ICfomIfph4zljZcnLFxuXHRcdFx0U0o6ICfmlq/nk6bniL7lt7Tlkozmj5rppqzlu7YnLFxuXHRcdFx0U0U6ICfnkZ7lhbgnLFxuXHRcdFx0Q0g6ICfnkZ7lo6snLFxuXHRcdFx0U1k6ICfmlZjliKnkup4nLFxuXHRcdFx0VFc6ICfkuK3lnIvoh7rngaMnLFxuXHRcdFx0VEo6ICfloZTlkInlhYsnLFxuXHRcdFx0VFo6ICflnabmoZHlsLzkup4nLFxuXHRcdFx0VEg6ICfms7DlnIsnLFxuXHRcdFx0VEw6ICfmnbHluJ3msbYnLFxuXHRcdFx0VEc6ICflpJrlk6UnLFxuXHRcdFx0VEs6ICfmiZjlhYvli54nLFxuXHRcdFx0VE86ICfmua/liqAnLFxuXHRcdFx0VFQ6ICfljYPph4zpgZTlkozlpJrlt7Tlk6UnLFxuXHRcdFx0VE46ICfnqoHlsLzopb/kup4nLFxuXHRcdFx0VFI6ICflnJ/ogLPlhbYnLFxuXHRcdFx0VE06ICflnJ/luqvmm7wnLFxuXHRcdFx0VEM6ICfnibnlhYvmlq/lkozlh7Hnp5Hmlq/nvqTls7YnLFxuXHRcdFx0VFY6ICflnJbnk6bnm6cnLFxuXHRcdFx0VUc6ICfng4/lubLpgZQnLFxuXHRcdFx0VUE6ICfng4/lhYvomK0nLFxuXHRcdFx0QUU6ICfpmL/oga/phYsnLFxuXHRcdFx0R0I6ICfoi7HlnIsnLFxuXHRcdFx0VVM6ICfnvo7lnIsnLFxuXHRcdFx0VU06ICfnvo7lnIvmnKzlnJ/lpJblsI/ls7bltrwnLFxuXHRcdFx0VVk6ICfng4/mi4nlnK0nLFxuXHRcdFx0VVo6ICfng4/ojLLliKXlhYsnLFxuXHRcdFx0VlU6ICfnk6bliqrpmL/lnJYnLFxuXHRcdFx0VkU6ICflp5TlhafnkZ7mi4knLFxuXHRcdFx0Vk46ICfotorljZcnLFxuXHRcdFx0Vkc6ICfoi7HlsazomZXlpbPnvqTls7YnLFxuXHRcdFx0Vkk6ICfnvo7lsazomZXlpbPnvqTls7YnLFxuXHRcdFx0V0Y6ICfnk6bliKnmlq/lkozlr4zlnJbntI0nLFxuXHRcdFx0RUg6ICfopb/mkpLlk4jmi4knLFxuXHRcdFx0WUU6ICfkuZ/ploAnLFxuXHRcdFx0Wk06ICfotIrmr5Tkup4nLFxuXHRcdFx0Wlc6ICfmtKXlt7TluIPpn4snLFxuXHRcdH07XG5cdH0gZWxzZSBpZiAoWyd6aC10dyddLmluY2x1ZGVzKFdHX1VTRVJfTEFOR1VBR0UpKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdEFGOiAn6Zi/5a+M5rGXJyxcblx0XHRcdEFYOiAn5aWn6JitJyxcblx0XHRcdEFMOiAn6Zi/54i+5be05bC85LqeJyxcblx0XHRcdERaOiAn6Zi/54i+5Y+K5Yip5LqeJyxcblx0XHRcdEFTOiAn576O5bGs6Jap5pGp5LqeJyxcblx0XHRcdEFEOiAn5a6J6YGT54i+Jyxcblx0XHRcdEFPOiAn5a6J5ZOl5ouJJyxcblx0XHRcdEFJOiAn5a6J5Zyt5ouJJyxcblx0XHRcdEFROiAn5Y2X5qW15rSyJyxcblx0XHRcdEFHOiAn5a6J5Zyw5Y2h5Y+K5be05biD6YGUJyxcblx0XHRcdEFSOiAn6Zi/5qC55bu3Jyxcblx0XHRcdEFNOiAn5Lqe576O5bC85LqeJyxcblx0XHRcdEFXOiAn6Zi/6a2v5be0Jyxcblx0XHRcdEFVOiAn5r6z5rSyJyxcblx0XHRcdEFUOiAn5aWn5Zyw5YipJyxcblx0XHRcdEFaOiAn5Lqe5aGe5ouc54S2Jyxcblx0XHRcdEJTOiAn5be05ZOI6aasJyxcblx0XHRcdEJIOiAn5be05p6XJyxcblx0XHRcdEJEOiAn5a2f5Yqg5ouJ5ZyLJyxcblx0XHRcdEJCOiAn5be06LKd5aSaJyxcblx0XHRcdEJZOiAn55m95L+E576F5pavJyxcblx0XHRcdEJFOiAn5q+U5Yip5pmCJyxcblx0XHRcdEJaOiAn6LKd6YeM5pavJyxcblx0XHRcdEJKOiAn6LKd5Y2XJyxcblx0XHRcdEJNOiAn55m+5oWV6YGUJyxcblx0XHRcdEJUOiAn5LiN5Li5Jyxcblx0XHRcdEJPOiAn54675Yip57at5LqeJyxcblx0XHRcdEJROiAn6I236Jit5Yqg5YuS5q+U5Y2AJyxcblx0XHRcdEJBOiAn5rOi6LWrJyxcblx0XHRcdEJXOiAn5rOi5pyt6YKjJyxcblx0XHRcdEJWOiAn5biD6Z+L5bO2Jyxcblx0XHRcdEJSOiAn5be06KW/Jyxcblx0XHRcdElPOiAn6Iux5bGs5Y2w5bqm5rSL6aCY5ZywJyxcblx0XHRcdEJOOiAn5rG26JCKJyxcblx0XHRcdEJHOiAn5L+d5Yqg5Yip5LqeJyxcblx0XHRcdEJGOiAn5biD5ZCJ57SN5rOV57SiJyxcblx0XHRcdEJJOiAn6JKy6ZqG5ZywJyxcblx0XHRcdENWOiAn57at5b636KeSJyxcblx0XHRcdEtIOiAn5p+s5Z+U5a+oJyxcblx0XHRcdENNOiAn5ZaA6bql6ZqGJyxcblx0XHRcdENBOiAn5Yqg5ou/5aSnJyxcblx0XHRcdEtZOiAn6ZaL5pu8576k5bO2Jyxcblx0XHRcdENGOiAn5Lit6Z2eJyxcblx0XHRcdFREOiAn5p+l5b63Jyxcblx0XHRcdENMOiAn5pm65YipJyxcblx0XHRcdENOOiAn5Lit5ZyLJyxcblx0XHRcdENYOiAn6IGW6KqV5bO2Jyxcblx0XHRcdENDOiAn56eR56eR5pav77yI5Z+65p6X77yJ576k5bO2Jyxcblx0XHRcdENPOiAn5ZOl5YCr5q+U5LqeJyxcblx0XHRcdEtNOiAn6JGb5pGpJyxcblx0XHRcdENHOiAn5Ymb5p6c5YWx5ZKM5ZyLJyxcblx0XHRcdENEOiAn5Ymb5p6c5rCR5Li75YWx5ZKM5ZyLJyxcblx0XHRcdENLOiAn5bqr5YWL576k5bO2Jyxcblx0XHRcdENSOiAn5ZOl5pav5aSn6buO5YqgJyxcblx0XHRcdENJOiAn6LGh54mZ5rW35bK4Jyxcblx0XHRcdEhSOiAn5YWL576F5Z+D6KW/5LqeJyxcblx0XHRcdENVOiAn5Y+k5be0Jyxcblx0XHRcdENXOiAn5Y+k5ouJ57SiJyxcblx0XHRcdENZOiAn6LO95pmu5YuS5pavJyxcblx0XHRcdENaOiAn5o235YWLJyxcblx0XHRcdERLOiAn5Li56bqlJyxcblx0XHRcdERKOiAn5ZCJ5biD5ZywJyxcblx0XHRcdERNOiAn5aSa57Gz5bC85YWLJyxcblx0XHRcdERPOiAn5aSa5piO5bC85YqgJyxcblx0XHRcdEVDOiAn5Y6E55Oc5aSaJyxcblx0XHRcdEVHOiAn5Z+D5Y+KJyxcblx0XHRcdFNWOiAn6Jap54i+55Om5aSaJyxcblx0XHRcdEdROiAn6LWk6YGT5bm+5YWn5LqeJyxcblx0XHRcdEVSOiAn5Y6E5Yip5Z6C5LqeJyxcblx0XHRcdEVFOiAn5oSb5rKZ5bC85LqeJyxcblx0XHRcdFNaOiAn5Y+y55Om5bid5bC8Jyxcblx0XHRcdEVUOiAn6KGj57Si5q+U5LqeJyxcblx0XHRcdEZLOiAn56aP5YWL6Jit576k5bO2Jyxcblx0XHRcdEZPOiAn5rOV576F576k5bO2Jyxcblx0XHRcdEZKOiAn5paQ5r+fJyxcblx0XHRcdEZJOiAn6Iqs6JitJyxcblx0XHRcdEZSOiAn5rOV5ZyLJyxcblx0XHRcdEdGOiAn5rOV5bGs5Zyt5Lqe6YKjJyxcblx0XHRcdFBGOiAn5rOV5bGs54676YeM5bC86KW/5LqeJyxcblx0XHRcdFRGOiAn5rOV5bGs5Y2X6YOo5ZKM5Y2X5qW16aCY5ZywJyxcblx0XHRcdEdBOiAn5Yqg5b2tJyxcblx0XHRcdEdNOiAn55SY5q+U5LqeJyxcblx0XHRcdEdFOiAn5Zas5rK75LqeJyxcblx0XHRcdERFOiAn5b635ZyLJyxcblx0XHRcdEdIOiAn6L+m57SNJyxcblx0XHRcdEdJOiAn55u05biD576F6ZmAJyxcblx0XHRcdEdSOiAn5biM6IeYJyxcblx0XHRcdEdMOiAn5qC86Zm16JitJyxcblx0XHRcdEdEOiAn5qC855Ge6YKj6YGUJyxcblx0XHRcdEdQOiAn55Oc5b63576F5pmuJyxcblx0XHRcdEdVOiAn6Zec5bO2Jyxcblx0XHRcdEdUOiAn55Oc5Zyw6aas5ouJJyxcblx0XHRcdEdHOiAn5qC56KW/Jyxcblx0XHRcdEdOOiAn5bm+5YWn5LqeJyxcblx0XHRcdEdXOiAn5bm+5YWn5Lqe5q+U57SiJyxcblx0XHRcdEdZOiAn6JOL5Lqe6YKjJyxcblx0XHRcdEhUOiAn5rW35ZywJyxcblx0XHRcdEhNOiAn6LWr5b635bO25ZKM6bql5YWL5ZSQ57SN576k5bO2Jyxcblx0XHRcdFZBOiAn5qK16JKC5bKhJyxcblx0XHRcdEhOOiAn5a6P6YO95ouJ5pavJyxcblx0XHRcdEhLOiAn5Lit5ZyL6aaZ5rivJyxcblx0XHRcdEhVOiAn5YyI54mZ5YipJyxcblx0XHRcdElTOiAn5Yaw5bO2Jyxcblx0XHRcdElOOiAn5Y2w5bqmJyxcblx0XHRcdElEOiAn5Y2w5bC8Jyxcblx0XHRcdElSOiAn5LyK5pyXJyxcblx0XHRcdElROiAn5LyK5ouJ5YWLJyxcblx0XHRcdElFOiAn5oSb54i+6JitJyxcblx0XHRcdElNOiAn5pu85bO2Jyxcblx0XHRcdElMOiAn5Lul6Imy5YiXJyxcblx0XHRcdElUOiAn576p5aSn5YipJyxcblx0XHRcdEpNOiAn54mZ6LK35YqgJyxcblx0XHRcdEpQOiAn5pel5pysJyxcblx0XHRcdEpFOiAn5r6k6KW/Jyxcblx0XHRcdEpPOiAn57SE5pemJyxcblx0XHRcdEtaOiAn5ZOI6Jap5YWLJyxcblx0XHRcdEtFOiAn6IKv5LqeJyxcblx0XHRcdEtJOiAn5ZCJ6YeM5be05pavJyxcblx0XHRcdEtQOiAn5YyX6Z+TJyxcblx0XHRcdEtSOiAn6Z+T5ZyLJyxcblx0XHRcdEtXOiAn56eR5aiB54m5Jyxcblx0XHRcdEtHOiAn5ZCJ54i+5ZCJ5pavJyxcblx0XHRcdExBOiAn6ICB5pK+Jyxcblx0XHRcdExWOiAn5ouJ6ISr57at5LqeJyxcblx0XHRcdExCOiAn6buO5be05aupJyxcblx0XHRcdExTOiAn6LO057Si5omYJyxcblx0XHRcdExSOiAn6LO05q+U55Ge5LqeJyxcblx0XHRcdExZOiAn5Yip5q+U5LqeJyxcblx0XHRcdExJOiAn5YiX5pSv5pWm5pav55m7Jyxcblx0XHRcdExUOiAn56uL6Zm25a6bJyxcblx0XHRcdExVOiAn55un5qOu5aChJyxcblx0XHRcdE1POiAn5Lit5ZyL5r6z6ZaAJyxcblx0XHRcdE1HOiAn6aas6YGU5Yqg5pav5YqgJyxcblx0XHRcdE1XOiAn6aas5ouJ5aiBJyxcblx0XHRcdE1ZOiAn6aas5L6G6KW/5LqeJyxcblx0XHRcdE1WOiAn6aas54i+5Zyw5aSrJyxcblx0XHRcdE1MOiAn6aas6YeMJyxcblx0XHRcdE1UOiAn6aas54i+5LuWJyxcblx0XHRcdE1IOiAn6aas57S554i+576k5bO2Jyxcblx0XHRcdE1ROiAn6aas5o+Q5bC85YWLJyxcblx0XHRcdE1SOiAn6IyF5Yip5aGU5bC85LqeJyxcblx0XHRcdE1VOiAn5qih6YeM6KW/5pavJyxcblx0XHRcdFlUOiAn6aas57SE54m5Jyxcblx0XHRcdE1YOiAn5aKo6KW/5ZOlJyxcblx0XHRcdEZNOiAn5a+G5YWL576F5bC86KW/5Lqe6IGv6YKmJyxcblx0XHRcdE1EOiAn5pGp54i+5aSa55OmJyxcblx0XHRcdE1DOiAn5pGp57SN5ZOlJyxcblx0XHRcdE1OOiAn6JKZ5Y+kJyxcblx0XHRcdE1FOiAn6JKZ54m55YWn5ZOl576FJyxcblx0XHRcdE1TOiAn6JKZ5ZOy6IeYJyxcblx0XHRcdE1BOiAn5pGp5rSb5ZOlJyxcblx0XHRcdE1aOiAn6I6r5LiJ5q+U5YWLJyxcblx0XHRcdE1NOiAn57es55S4Jyxcblx0XHRcdE5BOiAn57SN57Gz5q+U5LqeJyxcblx0XHRcdE5SOiAn6Ku+6a2vJyxcblx0XHRcdE5QOiAn5bC85rOK54i+Jyxcblx0XHRcdE5MOiAn6I236JitJyxcblx0XHRcdE5DOiAn5paw5ZaA6YeM5aSa5bC85LqeJyxcblx0XHRcdE5aOiAn57SQ6KW/6JitJyxcblx0XHRcdE5JOiAn5bC85Yqg5ouJ55OcJyxcblx0XHRcdE5FOiAn5bC85pelJyxcblx0XHRcdE5HOiAn5aWI5Y+K5Yip5LqeJyxcblx0XHRcdE5VOiAn57SQ5Z+DJyxcblx0XHRcdE5GOiAn6Ku+56aP5YWL5bO2Jyxcblx0XHRcdE1LOiAn5YyX6aas5YW26aCTJyxcblx0XHRcdE1QOiAn5YyX6aas5Yip5a6J57SN576k5bO2Jyxcblx0XHRcdE5POiAn5oyq5aiBJyxcblx0XHRcdE9NOiAn6Zi/5pu8Jyxcblx0XHRcdFBLOiAn5be05Z+65pav5Z2mJyxcblx0XHRcdFBXOiAn5bib55CJJyxcblx0XHRcdFBTOiAn5be05YuS5pav5Z2mJyxcblx0XHRcdFBBOiAn5be05ou/6aasJyxcblx0XHRcdFBHOiAn5be05biD5Lqe57SQ5bm+5YWn5LqeJyxcblx0XHRcdFBZOiAn5be05ouJ5ZytJyxcblx0XHRcdFBFOiAn56eY6a2vJyxcblx0XHRcdFBIOiAn6I+y5b6L6LOTJyxcblx0XHRcdFBOOiAn55qu54m56IKv576k5bO2Jyxcblx0XHRcdFBMOiAn5rOi6JitJyxcblx0XHRcdFBUOiAn6JGh6JCE54mZJyxcblx0XHRcdFBSOiAn5rOi5aSa6buO5ZCEJyxcblx0XHRcdFFBOiAn5Y2h6YGUJyxcblx0XHRcdFJFOiAn55WZ5bC85pe6Jyxcblx0XHRcdFJPOiAn576F6aas5bC85LqeJyxcblx0XHRcdFJVOiAn5L+E576F5pavJyxcblx0XHRcdFJXOiAn55un5a6J6YGUJyxcblx0XHRcdEJMOiAn6IGW5be05rOw5YuS57GzJyxcblx0XHRcdFNIOiAn6IGW5rW36JOu5aic44CB6Zi/5qOu5p2+5ZKM54m56YeM5pav5Z2mLemBlOW6q+WwvOS6nicsXG5cdFx0XHRLTjogJ+iBluWFi+mHjOaWr+Wkmuemj+WPiuWwvOe2reaWrycsXG5cdFx0XHRMQzogJ+iBlumcsuilv+S6nicsXG5cdFx0XHRNRjogJ+azleWxrOiBlummrOS4gScsXG5cdFx0XHRQTTogJ+iBluearuiAtuiIh+WvhuWFi+mahicsXG5cdFx0XHRWQzogJ+iBluaWh+ajruWPiuagvOeRnumCo+S4gScsXG5cdFx0XHRXUzogJ+iWqeaRqeS6nicsXG5cdFx0XHRTTTogJ+iBlummrOWIqeirvicsXG5cdFx0XHRTVDogJ+iBluWkmue+juaZruael+ilv+avlCcsXG5cdFx0XHRTQTogJ+aymeeDj+WcsOmYv+aLieS8rycsXG5cdFx0XHRTTjogJ+WhnuWFp+WKoOeIvicsXG5cdFx0XHRSUzogJ+WhnueIvue2reS6nicsXG5cdFx0XHRTQzogJ+WhnuW4reeIvicsXG5cdFx0XHRTTDogJ+eNheWtkOWxsScsXG5cdFx0XHRTRzogJ+aWsOWKoOWdoScsXG5cdFx0XHRTWDogJ+iNt+WxrOiBlummrOS4gScsXG5cdFx0XHRTSzogJ+aWr+a0m+S8kOWFiycsXG5cdFx0XHRTSTogJ+aWr+a0m+e2reWwvOS6nicsXG5cdFx0XHRTQjogJ+e0oue+hemWgOe+pOWzticsXG5cdFx0XHRTTzogJ+e0oummrOWIqeS6nicsXG5cdFx0XHRaQTogJ+WNl+mdnicsXG5cdFx0XHRHUzogJ+WNl+WWrOayu+S6nuWSjOWNl+ahkeWogeWlh+e+pOWzticsXG5cdFx0XHRTUzogJ+WNl+iYh+S4uScsXG5cdFx0XHRFUzogJ+ilv+ePreeJmScsXG5cdFx0XHRMSzogJ+aWr+mHjOiYreWNoScsXG5cdFx0XHRTRDogJ+iYh+S4uScsXG5cdFx0XHRTUjogJ+iYh+WIqeWNlycsXG5cdFx0XHRTSjogJ+aWr+eTpueIvuW3tOWSjOaPmummrOW7ticsXG5cdFx0XHRTRTogJ+eRnuWFuCcsXG5cdFx0XHRDSDogJ+eRnuWjqycsXG5cdFx0XHRTWTogJ+aVmOWIqeS6nicsXG5cdFx0XHRUVzogJ+S4reWci+iHuueBoycsXG5cdFx0XHRUSjogJ+WhlOWQieWFiycsXG5cdFx0XHRUWjogJ+WdpuWwmuWwvOS6nicsXG5cdFx0XHRUSDogJ+azsOWciycsXG5cdFx0XHRUTDogJ+adseW4neaxticsXG5cdFx0XHRURzogJ+WkmuWTpScsXG5cdFx0XHRUSzogJ+aJmOWFi+WLnicsXG5cdFx0XHRUTzogJ+adseWKoCcsXG5cdFx0XHRUVDogJ+WNg+mHjOmBlOWPiuaJmOW3tOWTpScsXG5cdFx0XHRUTjogJ+eqgeWwvOilv+S6nicsXG5cdFx0XHRUUjogJ+Wcn+iAs+WFticsXG5cdFx0XHRUTTogJ+Wcn+W6q+abvCcsXG5cdFx0XHRUQzogJ+Wcn+WFi+WHseWPr+e+pOWzticsXG5cdFx0XHRUVjogJ+WQkOeTpumtrycsXG5cdFx0XHRVRzogJ+eDj+W5sumBlCcsXG5cdFx0XHRVQTogJ+eDj+WFi+iYrScsXG5cdFx0XHRBRTogJ+mYv+iBrycsXG5cdFx0XHRHQjogJ+iLseWciycsXG5cdFx0XHRVUzogJ+e+juWciycsXG5cdFx0XHRVTTogJ+e+juWci+acrOWcn+WkluWwj+WztuW2vCcsXG5cdFx0XHRVWTogJ+eDj+aLieWcrScsXG5cdFx0XHRVWjogJ+eDj+iMsuWIpeWFiycsXG5cdFx0XHRWVTogJ+iQrOmCo+adnCcsXG5cdFx0XHRWRTogJ+WnlOWFp+eRnuaLiScsXG5cdFx0XHRWTjogJ+i2iuWNlycsXG5cdFx0XHRWRzogJ+iLseWxrOe2reS6rOe+pOWzticsXG5cdFx0XHRWSTogJ+e+juWxrOe2reS6rOe+pOWzticsXG5cdFx0XHRXRjogJ+eTpuWIqeaWr+WSjOWvjOWclue0jScsXG5cdFx0XHRFSDogJ+ilv+aSkuWTiOaLiScsXG5cdFx0XHRZRTogJ+iRiemWgCcsXG5cdFx0XHRaTTogJ+WwmuavlOS6nicsXG5cdFx0XHRaVzogJ+i+m+W3tOWogScsXG5cdFx0fTtcblx0fSBlbHNlIGlmIChbJ3poLW15JywgJ3poLXNnJ10uaW5jbHVkZXMoV0dfVVNFUl9MQU5HVUFHRSkpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0QUY6ICfpmL/lr4zmsZcnLFxuXHRcdFx0QVg6ICflpaXlhbAnLFxuXHRcdFx0QUw6ICfpmL/lsJTlt7TlsLzkuponLFxuXHRcdFx0RFo6ICfpmL/lsJTlj4rliKnkuponLFxuXHRcdFx0QVM6ICfnvo7lsZ7okKjmkankuponLFxuXHRcdFx0QUQ6ICflronpgZPlsJQnLFxuXHRcdFx0QU86ICflronlk6Xmi4knLFxuXHRcdFx0QUk6ICflronlnK3mi4knLFxuXHRcdFx0QVE6ICfljZfmnoHmtLInLFxuXHRcdFx0QUc6ICflronmj5Dnk5zlkozlt7TluIPovr4nLFxuXHRcdFx0QVI6ICfpmL/moLnlu7cnLFxuXHRcdFx0QU06ICfkuprnvo7lsLzkuponLFxuXHRcdFx0QVc6ICfpmL/psoHlt7QnLFxuXHRcdFx0QVU6ICfmvrPlpKfliKnkuponLFxuXHRcdFx0QVQ6ICflpaXlnLDliKknLFxuXHRcdFx0QVo6ICfpmL/loZ7mi5znloYnLFxuXHRcdFx0QlM6ICflt7Tlk4jpqawnLFxuXHRcdFx0Qkg6ICflt7TmnpcnLFxuXHRcdFx0QkQ6ICflrZ/liqDmi4nlm70nLFxuXHRcdFx0QkI6ICflt7Tlt7TlpJrmlq8nLFxuXHRcdFx0Qlk6ICfnmb3kv4TnvZfmlq8nLFxuXHRcdFx0QkU6ICfmr5TliKnml7YnLFxuXHRcdFx0Qlo6ICfkvK/liKnlhbknLFxuXHRcdFx0Qko6ICfotJ3lroEnLFxuXHRcdFx0Qk06ICfnmb7mhZXlpKcnLFxuXHRcdFx0QlQ6ICfkuI3kuLknLFxuXHRcdFx0Qk86ICfnjrvliKnnu7TkuponLFxuXHRcdFx0QlE6ICfojbflhbDliqDli5Lmr5TljLonLFxuXHRcdFx0QkE6ICfms6Lpu5EnLFxuXHRcdFx0Qlc6ICfljZrojKjnk6bnurMnLFxuXHRcdFx0QlY6ICfluIPpn6blspsnLFxuXHRcdFx0QlI6ICflt7Topb8nLFxuXHRcdFx0SU86ICfoi7HlsZ7ljbDluqbmtIvpooblnLAnLFxuXHRcdFx0Qk46ICfmsbbojrEnLFxuXHRcdFx0Qkc6ICfkv53liqDliKnkuponLFxuXHRcdFx0QkY6ICfluIPln7rnurPms5XntKInLFxuXHRcdFx0Qkk6ICfluIPpmobov6onLFxuXHRcdFx0Q1Y6ICfkvZvlvpfop5InLFxuXHRcdFx0S0g6ICfmn6zln5Tlr6gnLFxuXHRcdFx0Q006ICflloDpuqbpmoYnLFxuXHRcdFx0Q0E6ICfliqDmi7/lpKcnLFxuXHRcdFx0S1k6ICflvIDmm7znvqTlspsnLFxuXHRcdFx0Q0Y6ICfkuK3pnZ4nLFxuXHRcdFx0VEQ6ICfkuY3lvpcnLFxuXHRcdFx0Q0w6ICfmmbrliKknLFxuXHRcdFx0Q046ICfkuK3lm70nLFxuXHRcdFx0Q1g6ICflnKPor57lspsnLFxuXHRcdFx0Q0M6ICfnp5Hnp5Hmlq/vvIjln7rmnpfvvInnvqTlspsnLFxuXHRcdFx0Q086ICflk6XkvKbmr5TkuponLFxuXHRcdFx0S006ICfnp5HmkannvZcnLFxuXHRcdFx0Q0c6ICfliJrmnpzlhbHlkozlm70nLFxuXHRcdFx0Q0Q6ICfliJrmnpzmsJHkuLvlhbHlkozlm70nLFxuXHRcdFx0Q0s6ICflupPlhYvnvqTlspsnLFxuXHRcdFx0Q1I6ICflk6Xmlq/ovr7pu47liqAnLFxuXHRcdFx0Q0k6ICfosaHniZnmtbflsrgnLFxuXHRcdFx0SFI6ICflhYvnvZflnLDkuponLFxuXHRcdFx0Q1U6ICflj6Tlt7QnLFxuXHRcdFx0Q1c6ICflupPmi4nntKInLFxuXHRcdFx0Q1k6ICfloZ7mtabot6/mlq8nLFxuXHRcdFx0Q1o6ICfmjbflhYsnLFxuXHRcdFx0REs6ICfkuLnpuqYnLFxuXHRcdFx0REo6ICflkInluIPmj5AnLFxuXHRcdFx0RE06ICflpJrnsbPlsLzlhYsnLFxuXHRcdFx0RE86ICflpJrnsbPlsLzliqAnLFxuXHRcdFx0RUM6ICfljoTnk5zlpJrlsJQnLFxuXHRcdFx0RUc6ICfln4Plj4onLFxuXHRcdFx0U1Y6ICfokKjlsJTnk6blpJonLFxuXHRcdFx0R1E6ICfotaTpgZPlh6DlhoXkuponLFxuXHRcdFx0RVI6ICfljoTnq4vnibnph4zkuponLFxuXHRcdFx0RUU6ICfniLHmspnlsLzkuponLFxuXHRcdFx0U1o6ICfmlq/lqIHlo6vlhbAnLFxuXHRcdFx0RVQ6ICfln4PloZ7kv4Tmr5TkuponLFxuXHRcdFx0Rks6ICfnpo/lhYvlhbDnvqTlspsnLFxuXHRcdFx0Rk86ICfms5XnvZfnvqTlspsnLFxuXHRcdFx0Rko6ICfmlpDmtY4nLFxuXHRcdFx0Rkk6ICfoiqzlhbAnLFxuXHRcdFx0RlI6ICfms5Xlm70nLFxuXHRcdFx0R0Y6ICfms5XlsZ7lnK3kuprpgqMnLFxuXHRcdFx0UEY6ICfms5XlsZ7ms6LliKnlsLzopb/kuponLFxuXHRcdFx0VEY6ICfms5XlsZ7ljZfpg6jlkozljZfmnoHpooblnLAnLFxuXHRcdFx0R0E6ICfliqDok6wnLFxuXHRcdFx0R006ICflhojmr5TkuponLFxuXHRcdFx0R0U6ICfmoLzpsoHlkInkuponLFxuXHRcdFx0REU6ICflvrflm70nLFxuXHRcdFx0R0g6ICfliqDnurMnLFxuXHRcdFx0R0k6ICfnm7TluIPnvZfpmYAnLFxuXHRcdFx0R1I6ICfluIzohYonLFxuXHRcdFx0R0w6ICfmoLzpmbXlhbAnLFxuXHRcdFx0R0Q6ICfmoLzmnpfnurPovr4nLFxuXHRcdFx0R1A6ICfnk5zlvrfnvZfmma4nLFxuXHRcdFx0R1U6ICflhbPlspsnLFxuXHRcdFx0R1Q6ICfljbHlnLDpqazmi4knLFxuXHRcdFx0R0c6ICfmoLnopb8nLFxuXHRcdFx0R046ICflh6DlhoXkuponLFxuXHRcdFx0R1c6ICflh6DlhoXkuprmr5Tnu40nLFxuXHRcdFx0R1k6ICflnK3kuprpgqMnLFxuXHRcdFx0SFQ6ICfmtbflnLAnLFxuXHRcdFx0SE06ICfotavlvrflspvlkozpuqblhYvllJDnurPnvqTlspsnLFxuXHRcdFx0VkE6ICfmorXokoLlhognLFxuXHRcdFx0SE46ICfmtKrpg73mi4nmlq8nLFxuXHRcdFx0SEs6ICfkuK3lm73pppnmuK8nLFxuXHRcdFx0SFU6ICfljIjniZnliKknLFxuXHRcdFx0SVM6ICflhrDlspsnLFxuXHRcdFx0SU46ICfljbDluqYnLFxuXHRcdFx0SUQ6ICfljbDlsLwnLFxuXHRcdFx0SVI6ICfkvIrmnJcnLFxuXHRcdFx0SVE6ICfkvIrmi4nlhYsnLFxuXHRcdFx0SUU6ICfniLHlsJTlhbAnLFxuXHRcdFx0SU06ICfpqazmganlspsnLFxuXHRcdFx0SUw6ICfku6XoibLliJcnLFxuXHRcdFx0SVQ6ICfmhI/lpKfliKknLFxuXHRcdFx0Sk06ICfniZnkubDliqAnLFxuXHRcdFx0SlA6ICfml6XmnKwnLFxuXHRcdFx0SkU6ICfms73opb8nLFxuXHRcdFx0Sk86ICfnuqbml6YnLFxuXHRcdFx0S1o6ICflk4jokKjlhYvmlq/lnaYnLFxuXHRcdFx0S0U6ICfogq/lsLzkuponLFxuXHRcdFx0S0k6ICfln7rph4zlt7Tmlq8nLFxuXHRcdFx0S1A6ICfljJfpn6knLFxuXHRcdFx0S1I6ICfpn6nlm70nLFxuXHRcdFx0S1c6ICfnp5HlqIHnibknLFxuXHRcdFx0S0c6ICflkInlsJTlkInmlq/mlq/lnaYnLFxuXHRcdFx0TEE6ICfogIHmjJ0nLFxuXHRcdFx0TFY6ICfmi4nohLHnu7TkuponLFxuXHRcdFx0TEI6ICfpu47lt7Tlq6knLFxuXHRcdFx0TFM6ICfojrHntKLmiZgnLFxuXHRcdFx0TFI6ICfliKnmr5Tph4zkuponLFxuXHRcdFx0TFk6ICfliKnmr5TkuponLFxuXHRcdFx0TEk6ICfliJfmlK/mlablo6vnmbsnLFxuXHRcdFx0TFQ6ICfnq4vpmbblrpsnLFxuXHRcdFx0TFU6ICfljaLmo67loKEnLFxuXHRcdFx0TU86ICfkuK3lm73mvrPpl6gnLFxuXHRcdFx0TUc6ICfpqazovr7liqDmlq/liqAnLFxuXHRcdFx0TVc6ICfpqazmi4nnu7QnLFxuXHRcdFx0TVk6ICfpqazmnaXopb/kuponLFxuXHRcdFx0TVY6ICfpqazlsJTku6PlpKsnLFxuXHRcdFx0TUw6ICfpqazph4wnLFxuXHRcdFx0TVQ6ICfpqazogLPku5YnLFxuXHRcdFx0TUg6ICfpqaznu43lsJTnvqTlspsnLFxuXHRcdFx0TVE6ICfpqazmj5DlsLzlhYsnLFxuXHRcdFx0TVI6ICfmr5vph4zloZTlsLzkuponLFxuXHRcdFx0TVU6ICfmr5vph4zmsYLmlq8nLFxuXHRcdFx0WVQ6ICfpqaznuqbnibknLFxuXHRcdFx0TVg6ICfloqjopb/lk6UnLFxuXHRcdFx0Rk06ICflr4blhYvnvZflsLzopb/kuprogZTpgqYnLFxuXHRcdFx0TUQ6ICfmkanlsJTlpJrnk6YnLFxuXHRcdFx0TUM6ICfmkannurPlk6UnLFxuXHRcdFx0TU46ICfokpnlj6QnLFxuXHRcdFx0TUU6ICfpu5HlsbEnLFxuXHRcdFx0TVM6ICfokpnnibnloZ7mi4nnibknLFxuXHRcdFx0TUE6ICfmkanmtJvlk6UnLFxuXHRcdFx0TVo6ICfojqvmoZHmr5TlhYsnLFxuXHRcdFx0TU06ICfnvIXnlLgnLFxuXHRcdFx0TkE6ICfpgqPnsbPmr5TkuponLFxuXHRcdFx0TlI6ICfnkZnpsoEnLFxuXHRcdFx0TlA6ICflsLzms4rlsJQnLFxuXHRcdFx0Tkw6ICfojbflhbAnLFxuXHRcdFx0TkM6ICfmlrDlloDph4zlpJrlsLzkuponLFxuXHRcdFx0Tlo6ICfmlrDopb/lhbAnLFxuXHRcdFx0Tkk6ICflsLzliqDmi4nnk5wnLFxuXHRcdFx0TkU6ICflsLzml6XlsJQnLFxuXHRcdFx0Tkc6ICflsLzml6XliKnkuponLFxuXHRcdFx0TlU6ICfnur3ln4MnLFxuXHRcdFx0TkY6ICfor7rnpo/lhYvlspsnLFxuXHRcdFx0TUs6ICfljJfpqazlhbbpob8nLFxuXHRcdFx0TVA6ICfljJfpqazph4zkuprnurPnvqTlspsnLFxuXHRcdFx0Tk86ICfmjKrlqIEnLFxuXHRcdFx0T006ICfpmL/mm7wnLFxuXHRcdFx0UEs6ICflt7Tln7rmlq/lnaYnLFxuXHRcdFx0UFc6ICfluJXlirMnLFxuXHRcdFx0UFM6ICflt7Tli5Lmlq/lnaYnLFxuXHRcdFx0UEE6ICflt7Tmi7/pqawnLFxuXHRcdFx0UEc6ICflt7TluIPkuprmlrDlh6DlhoXkuponLFxuXHRcdFx0UFk6ICflt7Tmi4nlnK0nLFxuXHRcdFx0UEU6ICfnp5jpsoEnLFxuXHRcdFx0UEg6ICfoj7Llvovlrr4nLFxuXHRcdFx0UE46ICfnmq7nibnlh6/mgannvqTlspsnLFxuXHRcdFx0UEw6ICfms6LlhbAnLFxuXHRcdFx0UFQ6ICfokaHokITniZknLFxuXHRcdFx0UFI6ICfms6LlpJrpu47lkIQnLFxuXHRcdFx0UUE6ICfljaHloZTlsJQnLFxuXHRcdFx0UkU6ICfnlZnlsLzmsaonLFxuXHRcdFx0Uk86ICfnvZfpqazlsLzkuponLFxuXHRcdFx0UlU6ICfkv4TnvZfmlq8nLFxuXHRcdFx0Ulc6ICfljaLml7rovr4nLFxuXHRcdFx0Qkw6ICflnKPlt7Tms7Dli5LnsbMnLFxuXHRcdFx0U0g6ICflnKPotavli5Lmi7/jgIHpmL/mo67mnb7lkoznibnph4zmlq/lnaYt6L6+5bqT5bC85LqaJyxcblx0XHRcdEtOOiAn5Zyj5Z+66Iyo5ZKM5bC857u05pavJyxcblx0XHRcdExDOiAn5Zyj5Y2i6KW/5LqaJyxcblx0XHRcdE1GOiAn5rOV5bGe5Zyj6ams5LiBJyxcblx0XHRcdFBNOiAn5Zyj55qu5Z+D5bCU5ZKM5a+G5YWL6ZqGJyxcblx0XHRcdFZDOiAn5Zyj5paH5qOu54m55ZKM5qC85p6X57qz5LiB5pavJyxcblx0XHRcdFdTOiAn6JCo5pGp5LqaJyxcblx0XHRcdFNNOiAn5Zyj6ams5Yqb6K+6Jyxcblx0XHRcdFNUOiAn5Zyj5aSa576O5ZKM5pmu5p6X6KW/5q+UJyxcblx0XHRcdFNBOiAn5rKZ54m56Zi/5ouJ5LyvJyxcblx0XHRcdFNOOiAn5aGe5YaF5Yqg5bCUJyxcblx0XHRcdFJTOiAn5aGe5bCU57u05LqaJyxcblx0XHRcdFNDOiAn5aGe6IiM5bCUJyxcblx0XHRcdFNMOiAn5aGe5ouJ5Yip5piCJyxcblx0XHRcdFNHOiAn5paw5Yqg5Z2hJyxcblx0XHRcdFNYOiAn6I235bGe5Zyj6ams5LiBJyxcblx0XHRcdFNLOiAn5pav5rSb5LyQ5YWLJyxcblx0XHRcdFNJOiAn5pav5rSb5paH5bC85LqaJyxcblx0XHRcdFNCOiAn5omA572X6Zeo576k5bKbJyxcblx0XHRcdFNPOiAn57Si6ams6YeMJyxcblx0XHRcdFpBOiAn5Y2X6Z2eJyxcblx0XHRcdEdTOiAn5Y2X5LmU5rK75Lqa5ZKM5Y2X5qGR5aiB5aWH576k5bKbJyxcblx0XHRcdFNTOiAn5Y2X6IuP5Li5Jyxcblx0XHRcdEVTOiAn6KW/54+t54mZJyxcblx0XHRcdExLOiAn5pav6YeM5YWw5Y2hJyxcblx0XHRcdFNEOiAn6IuP5Li5Jyxcblx0XHRcdFNSOiAn6IuP6YeM5Y2XJyxcblx0XHRcdFNKOiAn5pav55Om5bCU5be05ZKM5oms6ams5bu2Jyxcblx0XHRcdFNFOiAn55Ge5YW4Jyxcblx0XHRcdENIOiAn55Ge5aOrJyxcblx0XHRcdFNZOiAn5Y+Z5Yip5LqaJyxcblx0XHRcdFRXOiAn5Lit5Zu95Y+w5rm+Jyxcblx0XHRcdFRKOiAn5aGU5ZCJ5YWL5pav5Z2mJyxcblx0XHRcdFRaOiAn5Z2m5qGR5bC85LqaJyxcblx0XHRcdFRIOiAn5rOw5Zu9Jyxcblx0XHRcdFRMOiAn5Lic5bid5rG2Jyxcblx0XHRcdFRHOiAn5aSa5ZOlJyxcblx0XHRcdFRLOiAn5omY5YWL5YqzJyxcblx0XHRcdFRPOiAn5rGk5YqgJyxcblx0XHRcdFRUOiAn54m556uL5bC86L6+5ZKM5aSa5be05ZOlJyxcblx0XHRcdFROOiAn56qB5bC85pavJyxcblx0XHRcdFRSOiAn5Zyf6ICz5YW2Jyxcblx0XHRcdFRNOiAn5Zyf5bqT5pu85pav5Z2mJyxcblx0XHRcdFRDOiAn54m55YWL5pav5ZKM5Yev56eR5pav576k5bKbJyxcblx0XHRcdFRWOiAn5Zu+55Om5Y2iJyxcblx0XHRcdFVHOiAn5LmM5bmy6L6+Jyxcblx0XHRcdFVBOiAn5LmM5YWL5YWwJyxcblx0XHRcdEFFOiAn6Zi/6IGU6YWLJyxcblx0XHRcdEdCOiAn6Iux5Zu9Jyxcblx0XHRcdFVTOiAn576O5Zu9Jyxcblx0XHRcdFVNOiAn576O5Zu95pys5Zyf5aSW5bCP5bKb5bG/Jyxcblx0XHRcdFVZOiAn5LmM5ouJ5ZytJyxcblx0XHRcdFVaOiAn5LmM5YW55Yir5YWL5pav5Z2mJyxcblx0XHRcdFZVOiAn55Om5Yqq6Zi/5Zu+Jyxcblx0XHRcdFZFOiAn5aeU5YaF55Ge5ouJJyxcblx0XHRcdFZOOiAn6LaK5Y2XJyxcblx0XHRcdFZHOiAn6Iux5bGe57u05bCU5Lqs576k5bKbJyxcblx0XHRcdFZJOiAn576O5bGe57u05bCU5Lqs576k5bKbJyxcblx0XHRcdFdGOiAn55Om5Yip5pav5ZKM5a+M5Zu+57qzJyxcblx0XHRcdEVIOiAn6KW/5pKS5ZOI5ouJJyxcblx0XHRcdFlFOiAn5Lmf6ZeoJyxcblx0XHRcdFpNOiAn6LWe5q+U5LqaJyxcblx0XHRcdFpXOiAn5rSl5be05biD6Z+mJyxcblx0XHR9O1xuXHR9XG5cblx0cmV0dXJuIHtcblx0XHRBRjogJ+mYv+WvjOaxlycsXG5cdFx0QVg6ICflpaXlhbAnLFxuXHRcdEFMOiAn6Zi/5bCU5be05bC85LqaJyxcblx0XHREWjogJ+mYv+WwlOWPiuWIqeS6micsXG5cdFx0QVM6ICfnvo7lsZ7okKjmkankuponLFxuXHRcdEFEOiAn5a6J6YGT5bCUJyxcblx0XHRBTzogJ+WuieWTpeaLiScsXG5cdFx0QUk6ICflronlnK3mi4knLFxuXHRcdEFROiAn5Y2X5p6B5rSyJyxcblx0XHRBRzogJ+WuieaPkOeTnOWSjOW3tOW4g+i+vicsXG5cdFx0QVI6ICfpmL/moLnlu7cnLFxuXHRcdEFNOiAn5Lqa576O5bC85LqaJyxcblx0XHRBVzogJ+mYv+mygeW3tCcsXG5cdFx0QVU6ICfmvrPlpKfliKnkuponLFxuXHRcdEFUOiAn5aWl5Zyw5YipJyxcblx0XHRBWjogJ+mYv+WhnuaLnOeWhicsXG5cdFx0QlM6ICflt7Tlk4jpqawnLFxuXHRcdEJIOiAn5be05p6XJyxcblx0XHRCRDogJ+Wtn+WKoOaLieWbvScsXG5cdFx0QkI6ICflt7Tlt7TlpJrmlq8nLFxuXHRcdEJZOiAn55m95L+E572X5pavJyxcblx0XHRCRTogJ+avlOWIqeaXticsXG5cdFx0Qlo6ICfkvK/liKnlhbknLFxuXHRcdEJKOiAn6LSd5a6BJyxcblx0XHRCTTogJ+eZvuaFleWkpycsXG5cdFx0QlQ6ICfkuI3kuLknLFxuXHRcdEJPOiAn54675Yip57u05LqaJyxcblx0XHRCUTogJ+iNt+WFsOWKoOWLkuavlOWMuicsXG5cdFx0QkE6ICfms6Lpu5EnLFxuXHRcdEJXOiAn5Y2a6Iyo55Om57qzJyxcblx0XHRCVjogJ+W4g+mfpuWymycsXG5cdFx0QlI6ICflt7Topb8nLFxuXHRcdElPOiAn6Iux5bGe5Y2w5bqm5rSL6aKG5ZywJyxcblx0XHRCTjogJ+aWh+iOsScsXG5cdFx0Qkc6ICfkv53liqDliKnkuponLFxuXHRcdEJGOiAn5biD5Z+657qz5rOV57SiJyxcblx0XHRCSTogJ+W4g+mahui/qicsXG5cdFx0Q1Y6ICfkvZvlvpfop5InLFxuXHRcdEtIOiAn5p+s5Z+U5a+oJyxcblx0XHRDTTogJ+WWgOm6pumahicsXG5cdFx0Q0E6ICfliqDmi7/lpKcnLFxuXHRcdEtZOiAn5byA5pu8576k5bKbJyxcblx0XHRDRjogJ+S4remdnicsXG5cdFx0VEQ6ICfkuY3lvpcnLFxuXHRcdENMOiAn5pm65YipJyxcblx0XHRDTjogJ+S4reWbvScsXG5cdFx0Q1g6ICflnKPor57lspsnLFxuXHRcdENDOiAn56eR56eR5pav77yI5Z+65p6X77yJ576k5bKbJyxcblx0XHRDTzogJ+WTpeS8puavlOS6micsXG5cdFx0S006ICfnp5HmkannvZcnLFxuXHRcdENHOiAn5Yia5p6c5YWx5ZKM5Zu9Jyxcblx0XHRDRDogJ+WImuaenOawkeS4u+WFseWSjOWbvScsXG5cdFx0Q0s6ICflupPlhYvnvqTlspsnLFxuXHRcdENSOiAn5ZOl5pav6L6+6buO5YqgJyxcblx0XHRDSTogJ+enkeeJuei/queTpicsXG5cdFx0SFI6ICflhYvnvZflnLDkuponLFxuXHRcdENVOiAn5Y+k5be0Jyxcblx0XHRDVzogJ+W6k+aLiee0oicsXG5cdFx0Q1k6ICfloZ7mtabot6/mlq8nLFxuXHRcdENaOiAn5o235YWLJyxcblx0XHRESzogJ+S4uem6picsXG5cdFx0REo6ICflkInluIPmj5AnLFxuXHRcdERNOiAn5aSa57Gz5bC85YWLJyxcblx0XHRETzogJ+Wkmuexs+WwvOWKoCcsXG5cdFx0RUM6ICfljoTnk5zlpJrlsJQnLFxuXHRcdEVHOiAn5Z+D5Y+KJyxcblx0XHRTVjogJ+iQqOWwlOeTpuWkmicsXG5cdFx0R1E6ICfotaTpgZPlh6DlhoXkuponLFxuXHRcdEVSOiAn5Y6E56uL54m56YeM5LqaJyxcblx0XHRFRTogJ+eIseaymeWwvOS6micsXG5cdFx0U1o6ICfmlq/lqIHlo6vlhbAnLFxuXHRcdEVUOiAn5Z+D5aGe5L+E5q+U5LqaJyxcblx0XHRGSzogJ+emj+WFi+WFsOe+pOWymycsXG5cdFx0Rk86ICfms5XnvZfnvqTlspsnLFxuXHRcdEZKOiAn5paQ5rWOJyxcblx0XHRGSTogJ+iKrOWFsCcsXG5cdFx0RlI6ICfms5Xlm70nLFxuXHRcdEdGOiAn5rOV5bGe5Zyt5Lqa6YKjJyxcblx0XHRQRjogJ+azleWxnuazouWIqeWwvOilv+S6micsXG5cdFx0VEY6ICfms5XlsZ7ljZfpg6jlkozljZfmnoHpooblnLAnLFxuXHRcdEdBOiAn5Yqg6JOsJyxcblx0XHRHTTogJ+WGiOavlOS6micsXG5cdFx0R0U6ICfmoLzpsoHlkInkuponLFxuXHRcdERFOiAn5b635Zu9Jyxcblx0XHRHSDogJ+WKoOe6sycsXG5cdFx0R0k6ICfnm7TluIPnvZfpmYAnLFxuXHRcdEdSOiAn5biM6IWKJyxcblx0XHRHTDogJ+agvOmZteWFsCcsXG5cdFx0R0Q6ICfmoLzmnpfnurPovr4nLFxuXHRcdEdQOiAn55Oc5b63572X5pmuJyxcblx0XHRHVTogJ+WFs+WymycsXG5cdFx0R1Q6ICfljbHlnLDpqazmi4knLFxuXHRcdEdHOiAn5qC56KW/Jyxcblx0XHRHTjogJ+WHoOWGheS6micsXG5cdFx0R1c6ICflh6DlhoXkuprmr5Tnu40nLFxuXHRcdEdZOiAn5Zyt5Lqa6YKjJyxcblx0XHRIVDogJ+a1t+WcsCcsXG5cdFx0SE06ICfotavlvrflspvlkozpuqblhYvllJDnurPnvqTlspsnLFxuXHRcdFZBOiAn5qK16JKC5YaIJyxcblx0XHRITjogJ+a0qumDveaLieaWrycsXG5cdFx0SEs6ICfkuK3lm73pppnmuK8nLFxuXHRcdEhVOiAn5YyI54mZ5YipJyxcblx0XHRJUzogJ+WGsOWymycsXG5cdFx0SU46ICfljbDluqYnLFxuXHRcdElEOiAn5Y2w5bC8Jyxcblx0XHRJUjogJ+S8iuaclycsXG5cdFx0SVE6ICfkvIrmi4nlhYsnLFxuXHRcdElFOiAn54ix5bCU5YWwJyxcblx0XHRJTTogJ+mprOaBqeWymycsXG5cdFx0SUw6ICfku6XoibLliJcnLFxuXHRcdElUOiAn5oSP5aSn5YipJyxcblx0XHRKTTogJ+eJmeS5sOWKoCcsXG5cdFx0SlA6ICfml6XmnKwnLFxuXHRcdEpFOiAn5rO96KW/Jyxcblx0XHRKTzogJ+e6puaXpicsXG5cdFx0S1o6ICflk4jokKjlhYvmlq/lnaYnLFxuXHRcdEtFOiAn6IKv5bC85LqaJyxcblx0XHRLSTogJ+WfuumHjOW3tOaWrycsXG5cdFx0S1A6ICfmnJ3pspwnLFxuXHRcdEtSOiAn6Z+p5Zu9Jyxcblx0XHRLVzogJ+enkeWogeeJuScsXG5cdFx0S0c6ICflkInlsJTlkInmlq/mlq/lnaYnLFxuXHRcdExBOiAn6ICB5oydJyxcblx0XHRMVjogJ+aLieiEsee7tOS6micsXG5cdFx0TEI6ICfpu47lt7Tlq6knLFxuXHRcdExTOiAn6I6x57Si5omYJyxcblx0XHRMUjogJ+WIqeavlOmHjOS6micsXG5cdFx0TFk6ICfliKnmr5TkuponLFxuXHRcdExJOiAn5YiX5pSv5pWm5aOr55m7Jyxcblx0XHRMVDogJ+eri+mZtuWumycsXG5cdFx0TFU6ICfljaLmo67loKEnLFxuXHRcdE1POiAn5Lit5Zu95r6z6ZeoJyxcblx0XHRNRzogJ+mprOi+vuWKoOaWr+WKoCcsXG5cdFx0TVc6ICfpqazmi4nnu7QnLFxuXHRcdE1ZOiAn6ams5p2l6KW/5LqaJyxcblx0XHRNVjogJ+mprOWwlOS7o+WkqycsXG5cdFx0TUw6ICfpqazph4wnLFxuXHRcdE1UOiAn6ams6ICz5LuWJyxcblx0XHRNSDogJ+mprOe7jeWwlOe+pOWymycsXG5cdFx0TVE6ICfpqazmj5DlsLzlhYsnLFxuXHRcdE1SOiAn5q+b6YeM5aGU5bC85LqaJyxcblx0XHRNVTogJ+avm+mHjOaxguaWrycsXG5cdFx0WVQ6ICfpqaznuqbnibknLFxuXHRcdE1YOiAn5aKo6KW/5ZOlJyxcblx0XHRGTTogJ+WvhuWFi+e9l+WwvOilv+S6muiBlOmCpicsXG5cdFx0TUQ6ICfmkanlsJTlpJrnk6YnLFxuXHRcdE1DOiAn5pGp57qz5ZOlJyxcblx0XHRNTjogJ+iSmeWPpCcsXG5cdFx0TUU6ICfpu5HlsbEnLFxuXHRcdE1TOiAn6JKZ54m55aGe5ouJ54m5Jyxcblx0XHRNQTogJ+aRqea0m+WTpScsXG5cdFx0TVo6ICfojqvmoZHmr5TlhYsnLFxuXHRcdE1NOiAn57yF55S4Jyxcblx0XHROQTogJ+e6s+exs+avlOS6micsXG5cdFx0TlI6ICfnkZnpsoEnLFxuXHRcdE5QOiAn5bC85rOK5bCUJyxcblx0XHROTDogJ+iNt+WFsCcsXG5cdFx0TkM6ICfmlrDlloDph4zlpJrlsLzkuponLFxuXHRcdE5aOiAn5paw6KW/5YWwJyxcblx0XHROSTogJ+WwvOWKoOaLieeTnCcsXG5cdFx0TkU6ICflsLzml6XlsJQnLFxuXHRcdE5HOiAn5bC85pel5Yip5LqaJyxcblx0XHROVTogJ+e6veWfgycsXG5cdFx0TkY6ICfor7rnpo/lhYvlspsnLFxuXHRcdE1LOiAn5YyX6ams5YW26aG/Jyxcblx0XHRNUDogJ+WMl+mprOmHjOS6mue6s+e+pOWymycsXG5cdFx0Tk86ICfmjKrlqIEnLFxuXHRcdE9NOiAn6Zi/5pu8Jyxcblx0XHRQSzogJ+W3tOWfuuaWr+WdpicsXG5cdFx0UFc6ICfluJXlirMnLFxuXHRcdFBTOiAn5be05YuS5pav5Z2mJyxcblx0XHRQQTogJ+W3tOaLv+mprCcsXG5cdFx0UEc6ICflt7TluIPkuprmlrDlh6DlhoXkuponLFxuXHRcdFBZOiAn5be05ouJ5ZytJyxcblx0XHRQRTogJ+enmOmygScsXG5cdFx0UEg6ICfoj7Llvovlrr4nLFxuXHRcdFBOOiAn55qu54m55Yev5oGp576k5bKbJyxcblx0XHRQTDogJ+azouWFsCcsXG5cdFx0UFQ6ICfokaHokITniZknLFxuXHRcdFBSOiAn5rOi5aSa6buO5ZCEJyxcblx0XHRRQTogJ+WNoeWhlOWwlCcsXG5cdFx0UkU6ICfnlZnlsLzmsaonLFxuXHRcdFJPOiAn572X6ams5bC85LqaJyxcblx0XHRSVTogJ+S/hOe9l+aWrycsXG5cdFx0Ulc6ICfljaLml7rovr4nLFxuXHRcdEJMOiAn5Zyj5be05rOw5YuS57GzJyxcblx0XHRTSDogJ+Wco+i1q+WLkuaLv+OAgemYv+ajruadvuWSjOeJuemHjOaWr+Wdpi3ovr7lupPlsLzkuponLFxuXHRcdEtOOiAn5Zyj5Z+66Iyo5ZKM5bC857u05pavJyxcblx0XHRMQzogJ+Wco+WNouilv+S6micsXG5cdFx0TUY6ICfms5XlsZ7lnKPpqazkuIEnLFxuXHRcdFBNOiAn5Zyj55qu5Z+D5bCU5ZKM5a+G5YWL6ZqGJyxcblx0XHRWQzogJ+Wco+aWh+ajrueJueWSjOagvOael+e6s+S4geaWrycsXG5cdFx0V1M6ICfokKjmkankuponLFxuXHRcdFNNOiAn5Zyj6ams5Yqb6K+6Jyxcblx0XHRTVDogJ+Wco+Wkmue+juWSjOaZruael+ilv+avlCcsXG5cdFx0U0E6ICfmspnnibnpmL/mi4nkvK8nLFxuXHRcdFNOOiAn5aGe5YaF5Yqg5bCUJyxcblx0XHRSUzogJ+WhnuWwlOe7tOS6micsXG5cdFx0U0M6ICfloZ7oiIzlsJQnLFxuXHRcdFNMOiAn5aGe5ouJ5Yip5piCJyxcblx0XHRTRzogJ+aWsOWKoOWdoScsXG5cdFx0U1g6ICfojbflsZ7lnKPpqazkuIEnLFxuXHRcdFNLOiAn5pav5rSb5LyQ5YWLJyxcblx0XHRTSTogJ+aWr+a0m+aWh+WwvOS6micsXG5cdFx0U0I6ICfmiYDnvZfpl6jnvqTlspsnLFxuXHRcdFNPOiAn57Si6ams6YeMJyxcblx0XHRaQTogJ+WNl+mdnicsXG5cdFx0R1M6ICfljZfkuZTmsrvkuprlkozljZfmoZHlqIHlpYfnvqTlspsnLFxuXHRcdFNTOiAn5Y2X6IuP5Li5Jyxcblx0XHRFUzogJ+ilv+ePreeJmScsXG5cdFx0TEs6ICfmlq/ph4zlhbDljaEnLFxuXHRcdFNEOiAn6IuP5Li5Jyxcblx0XHRTUjogJ+iLj+mHjOWNlycsXG5cdFx0U0o6ICfmlq/nk6blsJTlt7Tlkozmiazpqazlu7YnLFxuXHRcdFNFOiAn55Ge5YW4Jyxcblx0XHRDSDogJ+eRnuWjqycsXG5cdFx0U1k6ICflj5nliKnkuponLFxuXHRcdFRXOiAn5Lit5Zu96Ie65rm+Jyxcblx0XHRUSjogJ+WhlOWQieWFi+aWr+WdpicsXG5cdFx0VFo6ICflnabmoZHlsLzkuponLFxuXHRcdFRIOiAn5rOw5Zu9Jyxcblx0XHRUTDogJ+S4nOW4neaxticsXG5cdFx0VEc6ICflpJrlk6UnLFxuXHRcdFRLOiAn5omY5YWL5YqzJyxcblx0XHRUTzogJ+axpOWKoCcsXG5cdFx0VFQ6ICfnibnnq4vlsLzovr7lkozlpJrlt7Tlk6UnLFxuXHRcdFROOiAn56qB5bC85pavJyxcblx0XHRUUjogJ+Wcn+iAs+WFticsXG5cdFx0VE06ICflnJ/lupPmm7zmlq/lnaYnLFxuXHRcdFRDOiAn54m55YWL5pav5ZKM5Yev56eR5pav576k5bKbJyxcblx0XHRUVjogJ+WbvueTpuWNoicsXG5cdFx0VUc6ICfkuYzlubLovr4nLFxuXHRcdFVBOiAn5LmM5YWL5YWwJyxcblx0XHRBRTogJ+mYv+iBlOmFiycsXG5cdFx0R0I6ICfoi7Hlm70nLFxuXHRcdFVTOiAn576O5Zu9Jyxcblx0XHRVTTogJ+e+juWbveacrOWcn+WkluWwj+Wym+WxvycsXG5cdFx0VVk6ICfkuYzmi4nlnK0nLFxuXHRcdFVaOiAn5LmM5YW55Yir5YWL5pav5Z2mJyxcblx0XHRWVTogJ+eTpuWKqumYv+WbvicsXG5cdFx0VkU6ICflp5TlhoXnkZ7mi4knLFxuXHRcdFZOOiAn6LaK5Y2XJyxcblx0XHRWRzogJ+iLseWxnue7tOWwlOS6rOe+pOWymycsXG5cdFx0Vkk6ICfnvo7lsZ7nu7TlsJTkuqznvqTlspsnLFxuXHRcdFdGOiAn55Om5Yip5pav5ZKM5a+M5Zu+57qzJyxcblx0XHRFSDogJ+ilv+aSkuWTiOaLiScsXG5cdFx0WUU6ICfkuZ/pl6gnLFxuXHRcdFpNOiAn6LWe5q+U5LqaJyxcblx0XHRaVzogJ+a0peW3tOW4g+mfpicsXG5cdH07XG59O1xuXG5jb25zdCBnZXRSZWdpb25OYW1lTGlzdCA9ICgpID0+IHtcblx0aWYgKFsnemgtaGFudCcsICd6aC1oaycsICd6aC1tbycsICd6aC10dyddLmluY2x1ZGVzKFdHX1VTRVJfTEFOR1VBR0UpKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdEFIOiAn5a6J5b69Jyxcblx0XHRcdEJKOiAn5YyX5LqsJyxcblx0XHRcdENROiAn6YeN5oW2Jyxcblx0XHRcdEZKOiAn56aP5bu6Jyxcblx0XHRcdEdEOiAn5buj5p2xJyxcblx0XHRcdEdTOiAn55SY6IKFJyxcblx0XHRcdEdYOiAn5buj6KW/Jyxcblx0XHRcdEdaOiAn6LK05beeJyxcblx0XHRcdEhBOiAn5rKz5Y2XJyxcblx0XHRcdEhCOiAn5rmW5YyXJyxcblx0XHRcdEhFOiAn5rKz5YyXJyxcblx0XHRcdEhJOiAn5rW35Y2XJyxcblx0XHRcdEhMOiAn6buR6b6N5rGfJyxcblx0XHRcdEhOOiAn5rmW5Y2XJyxcblx0XHRcdEpMOiAn5ZCJ5p6XJyxcblx0XHRcdEpTOiAn5rGf6JiHJyxcblx0XHRcdEpYOiAn5rGf6KW/Jyxcblx0XHRcdExOOiAn6YG85a+nJyxcblx0XHRcdE5NOiAn5YWn6JKZ5Y+kJyxcblx0XHRcdE5YOiAn5a+n5aSPJyxcblx0XHRcdFFIOiAn6Z2S5rW3Jyxcblx0XHRcdFNDOiAn5Zub5bedJyxcblx0XHRcdFNEOiAn5bGx5p2xJyxcblx0XHRcdFNIOiAn5LiK5rW3Jyxcblx0XHRcdFNOOiAn6Zmd6KW/Jyxcblx0XHRcdFNYOiAn5bGx6KW/Jyxcblx0XHRcdFRKOiAn5aSp5rSlJyxcblx0XHRcdFhKOiAn5paw55aGJyxcblx0XHRcdFhaOiAn6KW/6JePJyxcblx0XHRcdFlOOiAn6Zuy5Y2XJyxcblx0XHRcdFpKOiAn5rWZ5rGfJyxcblx0XHR9O1xuXHR9XG5cblx0cmV0dXJuIHtcblx0XHRBSDogJ+WuieW+vScsXG5cdFx0Qko6ICfljJfkuqwnLFxuXHRcdENROiAn6YeN5bqGJyxcblx0XHRGSjogJ+emj+W7uicsXG5cdFx0R0Q6ICflub/kuJwnLFxuXHRcdEdTOiAn55SY6IKDJyxcblx0XHRHWDogJ+W5v+ilvycsXG5cdFx0R1o6ICfotLXlt54nLFxuXHRcdEhBOiAn5rKz5Y2XJyxcblx0XHRIQjogJ+a5luWMlycsXG5cdFx0SEU6ICfmsrPljJcnLFxuXHRcdEhJOiAn5rW35Y2XJyxcblx0XHRITDogJ+m7kem+meaxnycsXG5cdFx0SE46ICfmuZbljZcnLFxuXHRcdEpMOiAn5ZCJ5p6XJyxcblx0XHRKUzogJ+axn+iLjycsXG5cdFx0Slg6ICfmsZ/opb8nLFxuXHRcdExOOiAn6L695a6BJyxcblx0XHROTTogJ+WGheiSmeWPpCcsXG5cdFx0Tlg6ICflroHlpI8nLFxuXHRcdFFIOiAn6Z2S5rW3Jyxcblx0XHRTQzogJ+Wbm+W3nScsXG5cdFx0U0Q6ICflsbHkuJwnLFxuXHRcdFNIOiAn5LiK5rW3Jyxcblx0XHRTTjogJ+mZleilvycsXG5cdFx0U1g6ICflsbHopb8nLFxuXHRcdFRKOiAn5aSp5rSlJyxcblx0XHRYSjogJ+aWsOeWhicsXG5cdFx0WFo6ICfopb/ol48nLFxuXHRcdFlOOiAn5LqR5Y2XJyxcblx0XHRaSjogJ+a1meaxnycsXG5cdH07XG59O1xuXG5leHBvcnQge2dldENvdW50cnlPckFyZWFOYW1lTGlzdCwgZ2V0UmVnaW9uTmFtZUxpc3R9O1xuIiwgImltcG9ydCB7Z2V0Q291bnRyeU9yQXJlYU5hbWVMaXN0LCBnZXRSZWdpb25OYW1lTGlzdH0gZnJvbSAnLi9uYW1lJztcblxudHlwZSBDb3VudHJ5T3JBcmVhTmFtZUxpc3QgPSBSZXR1cm5UeXBlPHR5cGVvZiBnZXRDb3VudHJ5T3JBcmVhTmFtZUxpc3Q+O1xudHlwZSBSZWdpb25OYW1lTGlzdCA9IFJldHVyblR5cGU8dHlwZW9mIGdldFJlZ2lvbk5hbWVMaXN0PjtcblxuY29uc3QgY291bnRyeU9yQXJlYUxpc3Q6IENvdW50cnlPckFyZWFOYW1lTGlzdCA9IGdldENvdW50cnlPckFyZWFOYW1lTGlzdCgpO1xuY29uc3QgcmVnaW9uTGlzdDogUmVnaW9uTmFtZUxpc3QgPSBnZXRSZWdpb25OYW1lTGlzdCgpO1xuXG5jb25zdCBnZXRDb3VudHJ5T3JBcmVhTmFtZSA9IDxUIGV4dGVuZHMga2V5b2YgQ291bnRyeU9yQXJlYU5hbWVMaXN0PihrZXk6IFQpOiBDb3VudHJ5T3JBcmVhTmFtZUxpc3RbVF0gfCB1bmRlZmluZWQgPT4ge1xuXHRyZXR1cm4gY291bnRyeU9yQXJlYUxpc3Rba2V5XTtcbn07XG5cbmNvbnN0IGdldFJlZ2lvbk5hbWUgPSA8VCBleHRlbmRzIGtleW9mIFJlZ2lvbk5hbWVMaXN0PihrZXk6IFQpOiBSZWdpb25OYW1lTGlzdFtUXSB8IHVuZGVmaW5lZCA9PiB7XG5cdHJldHVybiByZWdpb25MaXN0W2tleV07XG59O1xuXG5leHBvcnQge3R5cGUgQ291bnRyeU9yQXJlYU5hbWVMaXN0LCB0eXBlIFJlZ2lvbk5hbWVMaXN0LCBnZXRDb3VudHJ5T3JBcmVhTmFtZSwgZ2V0UmVnaW9uTmFtZX07XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtDTEFTU19OQU1FLCBDTEFTU19OQU1FX0lDT04sIENMQVNTX05BTUVfVEVYVCwgV0dfUkVMRVZBTlRfVVNFUl9OQU1FLCBXR19TS0lOfSBmcm9tICcuL2NvbnN0YW50JztcbmltcG9ydCB7dHlwZSBDb3VudHJ5T3JBcmVhTmFtZUxpc3QsIHR5cGUgUmVnaW9uTmFtZUxpc3QsIGdldENvdW50cnlPckFyZWFOYW1lLCBnZXRSZWdpb25OYW1lfSBmcm9tICcuL3V0aWwvZ2V0TmFtZSc7XG5pbXBvcnQgUmVhY3QgZnJvbSAnZXh0LmdhZGdldC5SZWFjdCc7XG5pbXBvcnQgdHlwZSB7U3RvcmVHZW9JbmZvfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7YXBpfSBmcm9tICcuL2FwaSc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vaTE4bic7XG5cbmNvbnN0IGFwcGVuZEljb24gPSAoXG5cdCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pixcblx0e1xuXHRcdGljb24sXG5cdFx0aW5kaWNhdG9yVGV4dCxcblx0XHRzcGFuQ2xhc3MsXG5cdH06IHtcblx0XHRpY29uOiAnZ2xvYmUnIHwgJ2hlbHBOb3RpY2UnO1xuXHRcdGluZGljYXRvclRleHQ6IHN0cmluZztcblx0XHRzcGFuQ2xhc3M6ICdncmVlbicgfCAnb3JhbmdlJztcblx0fVxuKTogdm9pZCA9PiB7XG5cdGNvbnN0IGlwTG9jYXRpb25EZXNjOiBzdHJpbmcgPSBnZXRNZXNzYWdlKCdMb2NhdGlvbicpICsgZ2V0TWVzc2FnZSgnOicpO1xuXHRjb25zdCB0ZXh0OiBzdHJpbmcgPSBpY29uID09PSAnZ2xvYmUnID8gaXBMb2NhdGlvbkRlc2MgKyBpbmRpY2F0b3JUZXh0IDogaW5kaWNhdG9yVGV4dCA/PyAnJztcblxuXHRjb25zdCB0YWcgPVxuXHRcdFdHX1NLSU4gPT09ICdjaXRpemVuJyA/IChcblx0XHRcdDxzZWN0aW9uIGNsYXNzTmFtZT17W0NMQVNTX05BTUUsIGAke0NMQVNTX05BTUV9LSR7c3BhbkNsYXNzfWBdfSAvPlxuXHRcdCkgOiBbJ3ZlY3RvcicsICd2ZWN0b3ItMjAyMicsICdnb25nYmknXS5pbmNsdWRlcyhXR19TS0lOKSA/IChcblx0XHRcdDxsaSBjbGFzc05hbWU9e1tDTEFTU19OQU1FLCBgJHtDTEFTU19OQU1FfS0ke3NwYW5DbGFzc31gXX0gLz5cblx0XHQpIDogKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e1tDTEFTU19OQU1FLCBgJHtDTEFTU19OQU1FfS0ke3NwYW5DbGFzc31gXX0gLz5cblx0XHQpO1xuXHRjb25zdCBpbmRpY2F0b3JJbm5lciA9IChcblx0XHQ8PlxuXHRcdFx0PHNwYW4gY2xhc3NOYW1lPXtbQ0xBU1NfTkFNRV9JQ09OLCBgJHtDTEFTU19OQU1FX0lDT059LSR7aWNvbn1gXX0gYXJpYS1sYWJlbD17dGV4dH0+PC9zcGFuPlxuXHRcdFx0PHNwYW4gY2xhc3NOYW1lPXtDTEFTU19OQU1FX1RFWFR9Pnt0ZXh0fTwvc3Bhbj5cblx0XHQ8Lz5cblx0KTtcblxuXHRjb25zdCAkdGFyZ2V0OiBKUXVlcnkgPSAkYm9keS5maW5kKE9QVElPTlMubW91bnRQb2ludFNlbGVjdG9yKTtcblx0JCh0YWcpLmFwcGVuZChpbmRpY2F0b3JJbm5lcikucHJlcGVuZFRvKCR0YXJnZXQpO1xufTtcblxuY29uc3QgYXBwZW5kR2VvSWNvbiA9IGFzeW5jICgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0Y29uc3Qgc3RvcmVQYWdlVGl0bGU6IHN0cmluZyA9IGBVc2VyOiR7V0dfUkVMRVZBTlRfVVNFUl9OQU1FfS9HZW9JUC5qc29uYDtcblxuXHR0cnkge1xuXHRcdGNvbnN0IGRhdGEgPSBhd2FpdCBhcGkucG9zdCh7XG5cdFx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0XHR0aXRsZTogc3RvcmVQYWdlVGl0bGUsXG5cdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdGZvcm1hdHZlcnNpb246IDIsXG5cdFx0XHRwcm9wOiBbJ3JldmlzaW9ucyddLFxuXHRcdFx0cnZwcm9wOiBbJ2NvbnRlbnQnXSxcblx0XHRcdHJ2c2xvdHM6ICdtYWluJyxcblx0XHR9KTtcblxuXHRcdGNvbnN0IHtcblx0XHRcdGNvdW50cnksXG5cdFx0XHRjb3VudHJ5T3JBcmVhLFxuXHRcdFx0cmVnaW9uLFxuXHRcdH06IFN0b3JlR2VvSW5mbyAmIHtcblx0XHRcdGNvdW50cnk/OiBzdHJpbmc7XG5cdFx0fSA9IEpTT04ucGFyc2UoXG5cdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVuc2FmZS1hcmd1bWVudFxuXHRcdFx0ZGF0YVsncXVlcnknXS5wYWdlc1swXS5yZXZpc2lvbnNbMF0uc2xvdHMubWFpbi5jb250ZW50XG5cdFx0KTtcblxuXHRcdGNvbnN0IGxvY2F0aW9uOiBTdG9yZUdlb0luZm9bJ2NvdW50cnlPckFyZWEnXSA9IGNvdW50cnkgPz8gY291bnRyeU9yQXJlYSA/PyAnJztcblx0XHRjb25zdCBjb3VudHJ5T3JBcmVhTmFtZTogc3RyaW5nID1cblx0XHRcdGdldENvdW50cnlPckFyZWFOYW1lKGxvY2F0aW9uIGFzIGtleW9mIENvdW50cnlPckFyZWFOYW1lTGlzdCkgPz8gZ2V0TWVzc2FnZSgnVW5rbm93bicpO1xuXHRcdGNvbnN0IHJlZ2lvbk5hbWU6IHN0cmluZyA9IGxvY2F0aW9uID09PSAnQ04nID8gZ2V0UmVnaW9uTmFtZShyZWdpb24gYXMga2V5b2YgUmVnaW9uTmFtZUxpc3QpID8/ICcnIDogJyc7XG5cblx0XHRhcHBlbmRJY29uKCRib2R5LCB7XG5cdFx0XHRpY29uOiAnZ2xvYmUnLFxuXHRcdFx0aW5kaWNhdG9yVGV4dDogY291bnRyeU9yQXJlYU5hbWUgKyByZWdpb25OYW1lLFxuXHRcdFx0c3BhbkNsYXNzOiAnZ3JlZW4nLFxuXHRcdH0pO1xuXHR9IGNhdGNoIChlcnJvcjogdW5rbm93bikge1xuXHRcdGNvbnNvbGUuZXJyb3IoJ1tHZW9Mb2NhdGlvblJlYWRlcl0gQWpheCBlcnJvciBpbiBgYXBwZW5kR2VvSWNvbmAgbWV0aG9kOicsIGVycm9yKTtcblx0XHRhcHBlbmRJY29uKCRib2R5LCB7XG5cdFx0XHRpY29uOiAnaGVscE5vdGljZScsXG5cdFx0XHRpbmRpY2F0b3JUZXh0OiBnZXRNZXNzYWdlKCdVbmtub3duJyksXG5cdFx0XHRzcGFuQ2xhc3M6ICdvcmFuZ2UnLFxuXHRcdH0pO1xuXHR9XG59O1xuXG5leHBvcnQge2FwcGVuZEdlb0ljb24sIGFwcGVuZEljb259O1xuIiwgImltcG9ydCB7bG9jYWxpemV9IGZyb20gJ2V4dC5nYWRnZXQuaTE4bic7XG5cbmNvbnN0IGdldEkxOG5NZXNzYWdlcyA9ICgpID0+IHtcblx0cmV0dXJuIHtcblx0XHQnOic6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnOiAnLFxuXHRcdFx0amE6ICfvvJonLFxuXHRcdFx0emg6ICfvvJonLFxuXHRcdH0pLFxuXHRcdFVua25vd246IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnVW5rbm93biBMb2NhdGlvbicsXG5cdFx0XHRqYTogJ+acquefpUlQ5Zyw5Z+fJyxcblx0XHRcdCd6aC1oYW5zJzogJ+acquefpUlQ5bGe5ZywJyxcblx0XHRcdCd6aC1oYW50JzogJ+acquefpUlQ5bGs5ZywJyxcblx0XHR9KSxcblx0XHRMb2NhdGlvbjogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdJUCBMb2NhdGlvbicsXG5cdFx0XHRqYTogJ0lQ5Zyw5Z+fJyxcblx0XHRcdCd6aC1oYW5zJzogJ0lQ5bGe5ZywJyxcblx0XHRcdCd6aC1oYW50JzogJ0lQ5bGs5ZywJyxcblx0XHR9KSxcblx0fTtcbn07XG5cbmNvbnN0IGkxOG5NZXNzYWdlcyA9IGdldEkxOG5NZXNzYWdlcygpO1xuXG5jb25zdCBnZXRNZXNzYWdlOiBHZXRNZXNzYWdlczx0eXBlb2YgaTE4bk1lc3NhZ2VzPiA9IChrZXkpID0+IHtcblx0cmV0dXJuIGkxOG5NZXNzYWdlc1trZXldIHx8IGtleTtcbn07XG5cbmV4cG9ydCB7Z2V0TWVzc2FnZX07XG4iLCAiaW1wb3J0IHtXR19SRUxFVkFOVF9VU0VSX05BTUV9IGZyb20gJy4vY29uc3RhbnQnO1xuaW1wb3J0IHthcGl9IGZyb20gJy4vYXBpJztcbmltcG9ydCB7YXBwZW5kR2VvSWNvbn0gZnJvbSAnLi9hcHBlbmRHZW9JY29uJztcbmltcG9ydCB7Z2V0Qm9keX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxuY29uc3QgYWRkRWxlbWVudCA9IGFzeW5jICgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0Y29uc3QgcXVlcnlVc2VyR3JvdXBzUGFyYW1zOiBBcGlRdWVyeVVzZXJzUGFyYW1zID0ge1xuXHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0bGlzdDogJ3VzZXJzJyxcblx0XHR1c3VzZXJzOiBXR19SRUxFVkFOVF9VU0VSX05BTUUsXG5cdFx0dXNwcm9wOiAnZ3JvdXBzJyxcblx0fTtcblxuXHR0cnkge1xuXHRcdGNvbnN0IHtcblx0XHRcdHF1ZXJ5OiB7XG5cdFx0XHRcdHVzZXJzOiBbe2dyb3Vwc31dLFxuXHRcdFx0fSxcblx0XHR9OiB7XG5cdFx0XHRxdWVyeToge1xuXHRcdFx0XHR1c2VyczogW1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdGdyb3Vwczogc3RyaW5nW107XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XTtcblx0XHRcdH07XG5cdFx0fSA9IChhd2FpdCBhcGkuZ2V0KHF1ZXJ5VXNlckdyb3Vwc1BhcmFtcykpIGFzIG5ldmVyO1xuXG5cdFx0Y29uc3QgJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+ID0gYXdhaXQgZ2V0Qm9keSgpO1xuXG5cdFx0aWYgKGdyb3Vwcy5pbmNsdWRlcygnYm90JykgfHwgZ3JvdXBzLmluY2x1ZGVzKCdxaXV3ZW4nKSkge1xuXHRcdFx0LyogZW1wdHkgKi9cblx0XHRcdC8vIEFscmVhZHkgc2hvd24gaW4gTWFya1JpZ2h0cy1Vc2VycGFnZVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR2b2lkIGFwcGVuZEdlb0ljb24oJGJvZHkpO1xuXHRcdH1cblx0fSBjYXRjaCAoZXJyb3I6IHVua25vd24pIHtcblx0XHRjb25zb2xlLmVycm9yKCdbR2VvTG9jYXRpb25SZWFkZXJdIEFqYXggZXJyb3IgaW4gYGFkZEVsZW1lbnRgIG1ldGhvZDonLCBlcnJvcik7XG5cdH1cbn07XG5cbmV4cG9ydCB7YWRkRWxlbWVudH07XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuL29wdGlvbnMuanNvbic7XG5pbXBvcnQge1xuXHRJU19VU0VSX1BBR0UsXG5cdElTX1dHX0FDVElPTl9WSUVXLFxuXHRTWVNURU1fU0NSSVBUX0xJU1QsXG5cdFdFQk1BU1RFUl9MSVNULFxuXHRXR19QQUdFX05BTUUsXG5cdFdHX1JFTEVWQU5UX1VTRVJfTkFNRSxcbn0gZnJvbSAnLi9tb2R1bGVzL2NvbnN0YW50JztcbmltcG9ydCB7YWRkRWxlbWVudH0gZnJvbSAnLi9tb2R1bGVzL2FkZEVsZW1lbnQnO1xuXG4oZnVuY3Rpb24gZ2VvTG9jYXRpb25SZWFkZXIoKTogdm9pZCB7XG5cdGlmIChcblx0XHRTWVNURU1fU0NSSVBUX0xJU1QuaW5jbHVkZXMoV0dfUkVMRVZBTlRfVVNFUl9OQU1FKSB8fFxuXHRcdFdFQk1BU1RFUl9MSVNULmluY2x1ZGVzKFdHX1JFTEVWQU5UX1VTRVJfTkFNRSkgfHxcblx0XHQhV0dfUkVMRVZBTlRfVVNFUl9OQU1FIHx8XG5cdFx0IUlTX1VTRVJfUEFHRSB8fFxuXHRcdCFJU19XR19BQ1RJT05fVklFV1xuXHQpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBwYWdlTmFtZTogc3RyaW5nID0gbmV3IG13LlRpdGxlKFdHX1BBR0VfTkFNRSkudG9UZXh0KCk7XG5cdGNvbnN0IHJlbGV2YW50VXNlclBhZ2VOYW1lOiBzdHJpbmcgPSBuZXcgbXcuVGl0bGUoV0dfUkVMRVZBTlRfVVNFUl9OQU1FLCBPUFRJT05TLnVzZXJOYW1lU3BhY2VOdW1iZXIpLnRvVGV4dCgpO1xuXHRpZiAocGFnZU5hbWUgIT09IHJlbGV2YW50VXNlclBhZ2VOYW1lKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0dm9pZCBhZGRFbGVtZW50KCk7XG59KSgpO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNDLElBQUFBLHFCQUFzQjtBQUN0QixJQUFBQyxzQkFBdUI7QUFDdkIsSUFBQUMsVUFBVzs7QUNIWixJQUFNQyxxQkFBK0IsQ0FDcEMsU0FDQSxRQUNBLFVBQ0EsV0FDQSx5QkFDQSxzQkFDQSxxQkFDQSw4QkFDQSxlQUFBO0FBRUQsSUFBTUMsaUJBQTJCLENBQUMsVUFBVSx1QkFBdUIsbUJBQW1CO0FBRXRGLElBQU1DLFlBQW9CQyxHQUFHQyxPQUFPQyxJQUFJLFVBQVU7QUFDbEQsSUFBTUMsa0JBQUFDLGlCQUEyQkosR0FBR0MsT0FBT0MsSUFBSSxjQUFjLE9BQUEsUUFBQUUsbUJBQUEsU0FBQUEsaUJBQUssQ0FBQTtBQUNsRSxJQUFNQyxnQkFBQUMsa0JBQXVCTixHQUFHQyxPQUFPQyxJQUFJLFlBQVksT0FBQSxRQUFBSSxvQkFBQSxTQUFBQSxrQkFBSztBQUM1RCxJQUFNQyxzQkFBQUMsa0JBQTZCUixHQUFHQyxPQUFPQyxJQUFJLGlCQUFpQixPQUFBLFFBQUFNLG9CQUFBLFNBQUFBLGtCQUFLOztBQ2R2RSxJQUFNQyxhQUFxQjtBQUMzQixJQUFNQyxrQkFBQSxHQUFBQyxPQUE2QkYsWUFBVSxRQUFBO0FBQzdDLElBQU1HLGtCQUFBLEdBQUFELE9BQTZCRixZQUFVLFFBQUE7QUFFN0MsSUFBTUksZUFBd0JiLEdBQUdDLE9BQU9DLElBQUksbUJBQW1CLE1BQWNQO0FBQzdFLElBQU1tQixvQkFBNkJkLEdBQUdDLE9BQU9DLElBQUksVUFBVSxNQUFNO0FBRWpFLElBQU1hLGVBQXVCZixHQUFHQyxPQUFPQyxJQUFJLFlBQVk7QUFDdkQsSUFBTWMseUJBQUFDLGtCQUFnQ2pCLEdBQUdDLE9BQU9DLElBQUksb0JBQW9CLE9BQUEsUUFBQWUsb0JBQUEsU0FBQUEsa0JBQUs7QUFDN0UsSUFBTUMsYUFBb0JsQixHQUFHQyxPQUFPQyxJQUFJLFVBQVU7QUFDbEQsSUFBTWlCLFVBQWtCbkIsR0FBR0MsT0FBT0MsSUFBSSxNQUFNO0FBQzVDLElBQU1rQixtQkFBMkJwQixHQUFHQyxPQUFPQyxJQUFJLGdCQUFnQjs7QUNaL0QsSUFBQW1CLG9CQUF3QkMsUUFBQSxpQkFBQTtBQUV4QixJQUFNQyxPQUFBLEdBQWNGLGtCQUFBRyxXQUFBLHFCQUFBYixPQUF1Q2YsT0FBTyxDQUFFOztBQ0RwRSxJQUFNNkIsMkJBQTJCQSxNQUFNO0FBQ3RDLE1BQUksQ0FBQyxXQUFXLFNBQVMsT0FBTyxFQUFFQyxTQUFTTixnQkFBZ0IsR0FBRztBQUM3RCxXQUFPO01BQ05PLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO0lBQ0w7RUFDRCxXQUFXLENBQUMsT0FBTyxFQUFFelAsU0FBU04sZ0JBQWdCLEdBQUc7QUFDaEQsV0FBTztNQUNOTyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtJQUNMO0VBQ0QsV0FBVyxDQUFDLFNBQVMsT0FBTyxFQUFFelAsU0FBU04sZ0JBQWdCLEdBQUc7QUFDekQsV0FBTztNQUNOTyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtJQUNMO0VBQ0Q7QUFFQSxTQUFPO0lBQ054UCxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtFQUNMO0FBQ0Q7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SUFBSXJCLElBQUkrVyxxQkFBcUI7QUFFeEMsWUFBTXRELFFBQUEsT0FBaUMsR0FBTW1ELG1CQUFBVSxTQUFRO0FBRXJELFVBQUlELE9BQU83VixTQUFTLEtBQUssS0FBSzZWLE9BQU83VixTQUFTLFFBQVEsR0FBRztNQUd6RCxPQUFPO0FBQ04sYUFBS2tULGNBQWNqQixLQUFLO01BQ3pCO0lBQ0QsU0FBUzhDLE9BQWdCO0FBQ3hCQyxjQUFRRCxNQUFNLDBEQUEwREEsS0FBSztJQUM5RTtFQUNELENBQUE7QUFBQSxTQUFBLFNBcENNTSxjQUFBO0FBQUEsV0FBQUMsTUFBQUosTUFBQSxNQUFBQyxTQUFBO0VBQUE7QUFBQSxFQUFBOztDQ01MLFNBQVNZLG9CQUEwQjtBQUNuQyxNQUNDNVgsbUJBQW1CNkIsU0FBU1YscUJBQXFCLEtBQ2pEbEIsZUFBZTRCLFNBQVNWLHFCQUFxQixLQUM3QyxDQUFDQSx5QkFDRCxDQUFDSCxnQkFDRCxDQUFDQyxtQkFDQTtBQUNEO0VBQ0Q7QUFFQSxRQUFNNFcsV0FBbUIsSUFBSTFYLEdBQUcyWCxNQUFNNVcsWUFBWSxFQUFFNlcsT0FBTztBQUMzRCxRQUFNQyx1QkFBK0IsSUFBSTdYLEdBQUcyWCxNQUFNM1csdUJBQStCckIsbUJBQW1CLEVBQUVpWSxPQUFPO0FBQzdHLE1BQUlGLGFBQWFHLHNCQUFzQjtBQUN0QztFQUNEO0FBRUEsT0FBS2QsV0FBVztBQUNqQixHQUFHOyIsCiAgIm5hbWVzIjogWyJtb3VudFBvaW50U2VsZWN0b3IiLCAidXNlck5hbWVTcGFjZU51bWJlciIsICJ2ZXJzaW9uIiwgIlNZU1RFTV9TQ1JJUFRfTElTVCIsICJXRUJNQVNURVJfTElTVCIsICJXR19TQ1JJUFQiLCAibXciLCAiY29uZmlnIiwgImdldCIsICJXR19VU0VSX0dST1VQUyIsICJfbXckY29uZmlnJGdldCIsICJXR19VU0VSX05BTUUiLCAiX213JGNvbmZpZyRnZXQyIiwgIldHX1VTRVJfRURJVF9DT1VOVCIsICJfbXckY29uZmlnJGdldDMiLCAiQ0xBU1NfTkFNRSIsICJDTEFTU19OQU1FX0lDT04iLCAiY29uY2F0IiwgIkNMQVNTX05BTUVfVEVYVCIsICJJU19VU0VSX1BBR0UiLCAiSVNfV0dfQUNUSU9OX1ZJRVciLCAiV0dfUEFHRV9OQU1FIiwgIldHX1JFTEVWQU5UX1VTRVJfTkFNRSIsICJfbXckY29uZmlnJGdldDQiLCAiV0dfU0NSSVBUMiIsICJXR19TS0lOIiwgIldHX1VTRVJfTEFOR1VBR0UiLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAicmVxdWlyZSIsICJhcGkiLCAiaW5pdE13QXBpIiwgImdldENvdW50cnlPckFyZWFOYW1lTGlzdCIsICJpbmNsdWRlcyIsICJBRiIsICJBWCIsICJBTCIsICJEWiIsICJBUyIsICJBRCIsICJBTyIsICJBSSIsICJBUSIsICJBRyIsICJBUiIsICJBTSIsICJBVyIsICJBVSIsICJBVCIsICJBWiIsICJCUyIsICJCSCIsICJCRCIsICJCQiIsICJCWSIsICJCRSIsICJCWiIsICJCSiIsICJCTSIsICJCVCIsICJCTyIsICJCUSIsICJCQSIsICJCVyIsICJCViIsICJCUiIsICJJTyIsICJCTiIsICJCRyIsICJCRiIsICJCSSIsICJDViIsICJLSCIsICJDTSIsICJDQSIsICJLWSIsICJDRiIsICJURCIsICJDTCIsICJDTiIsICJDWCIsICJDQyIsICJDTyIsICJLTSIsICJDRyIsICJDRCIsICJDSyIsICJDUiIsICJDSSIsICJIUiIsICJDVSIsICJDVyIsICJDWSIsICJDWiIsICJESyIsICJESiIsICJETSIsICJETyIsICJFQyIsICJFRyIsICJTViIsICJHUSIsICJFUiIsICJFRSIsICJTWiIsICJFVCIsICJGSyIsICJGTyIsICJGSiIsICJGSSIsICJGUiIsICJHRiIsICJQRiIsICJURiIsICJHQSIsICJHTSIsICJHRSIsICJERSIsICJHSCIsICJHSSIsICJHUiIsICJHTCIsICJHRCIsICJHUCIsICJHVSIsICJHVCIsICJHRyIsICJHTiIsICJHVyIsICJHWSIsICJIVCIsICJITSIsICJWQSIsICJITiIsICJISyIsICJIVSIsICJJUyIsICJJTiIsICJJRCIsICJJUiIsICJJUSIsICJJRSIsICJJTSIsICJJTCIsICJJVCIsICJKTSIsICJKUCIsICJKRSIsICJKTyIsICJLWiIsICJLRSIsICJLSSIsICJLUCIsICJLUiIsICJLVyIsICJLRyIsICJMQSIsICJMViIsICJMQiIsICJMUyIsICJMUiIsICJMWSIsICJMSSIsICJMVCIsICJMVSIsICJNTyIsICJNRyIsICJNVyIsICJNWSIsICJNViIsICJNTCIsICJNVCIsICJNSCIsICJNUSIsICJNUiIsICJNVSIsICJZVCIsICJNWCIsICJGTSIsICJNRCIsICJNQyIsICJNTiIsICJNRSIsICJNUyIsICJNQSIsICJNWiIsICJNTSIsICJOQSIsICJOUiIsICJOUCIsICJOTCIsICJOQyIsICJOWiIsICJOSSIsICJORSIsICJORyIsICJOVSIsICJORiIsICJNSyIsICJNUCIsICJOTyIsICJPTSIsICJQSyIsICJQVyIsICJQUyIsICJQQSIsICJQRyIsICJQWSIsICJQRSIsICJQSCIsICJQTiIsICJQTCIsICJQVCIsICJQUiIsICJRQSIsICJSRSIsICJSTyIsICJSVSIsICJSVyIsICJCTCIsICJTSCIsICJLTiIsICJMQyIsICJNRiIsICJQTSIsICJWQyIsICJXUyIsICJTTSIsICJTVCIsICJTQSIsICJTTiIsICJSUyIsICJTQyIsICJTTCIsICJTRyIsICJTWCIsICJTSyIsICJTSSIsICJTQiIsICJTTyIsICJaQSIsICJHUyIsICJTUyIsICJFUyIsICJMSyIsICJTRCIsICJTUiIsICJTSiIsICJTRSIsICJDSCIsICJTWSIsICJUVyIsICJUSiIsICJUWiIsICJUSCIsICJUTCIsICJURyIsICJUSyIsICJUTyIsICJUVCIsICJUTiIsICJUUiIsICJUTSIsICJUQyIsICJUViIsICJVRyIsICJVQSIsICJBRSIsICJHQiIsICJVUyIsICJVTSIsICJVWSIsICJVWiIsICJWVSIsICJWRSIsICJWTiIsICJWRyIsICJWSSIsICJXRiIsICJFSCIsICJZRSIsICJaTSIsICJaVyIsICJnZXRSZWdpb25OYW1lTGlzdCIsICJBSCIsICJDUSIsICJHWCIsICJHWiIsICJIQSIsICJIQiIsICJIRSIsICJISSIsICJITCIsICJKTCIsICJKUyIsICJKWCIsICJMTiIsICJOTSIsICJOWCIsICJRSCIsICJYSiIsICJYWiIsICJZTiIsICJaSiIsICJjb3VudHJ5T3JBcmVhTGlzdCIsICJyZWdpb25MaXN0IiwgImdldENvdW50cnlPckFyZWFOYW1lIiwgImtleSIsICJnZXRSZWdpb25OYW1lIiwgImltcG9ydF9leHRfZ2FkZ2V0MyIsICJfX3RvRVNNIiwgImltcG9ydF9leHRfZ2FkZ2V0MiIsICJnZXRJMThuTWVzc2FnZXMiLCAibG9jYWxpemUiLCAiZW4iLCAiamEiLCAiemgiLCAiVW5rbm93biIsICJMb2NhdGlvbiIsICJpMThuTWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJhcHBlbmRJY29uIiwgIiRib2R5IiwgImljb24iLCAiaW5kaWNhdG9yVGV4dCIsICJzcGFuQ2xhc3MiLCAiaXBMb2NhdGlvbkRlc2MiLCAidGV4dCIsICJ0YWciLCAiZGVmYXVsdCIsICJjcmVhdGVFbGVtZW50IiwgImNsYXNzTmFtZSIsICJpbmRpY2F0b3JJbm5lciIsICJGcmFnbWVudCIsICIkdGFyZ2V0IiwgImZpbmQiLCAiJCIsICJhcHBlbmQiLCAicHJlcGVuZFRvIiwgImFwcGVuZEdlb0ljb24iLCAiX3JlZiIsICJfYXN5bmNUb0dlbmVyYXRvciIsICJzdG9yZVBhZ2VUaXRsZSIsICJfcmVmMiIsICJfZ2V0Q291bnRyeU9yQXJlYU5hbWUiLCAiX2dldFJlZ2lvbk5hbWUiLCAiZGF0YSIsICJwb3N0IiwgImFjdGlvbiIsICJ0aXRsZSIsICJmb3JtYXQiLCAiZm9ybWF0dmVyc2lvbiIsICJwcm9wIiwgInJ2cHJvcCIsICJydnNsb3RzIiwgImNvdW50cnkiLCAiY291bnRyeU9yQXJlYSIsICJyZWdpb24iLCAiSlNPTiIsICJwYXJzZSIsICJwYWdlcyIsICJyZXZpc2lvbnMiLCAic2xvdHMiLCAibWFpbiIsICJjb250ZW50IiwgImxvY2F0aW9uIiwgImNvdW50cnlPckFyZWFOYW1lIiwgInJlZ2lvbk5hbWUiLCAiZXJyb3IiLCAiY29uc29sZSIsICJfeCIsICJhcHBseSIsICJhcmd1bWVudHMiLCAiaW1wb3J0X2V4dF9nYWRnZXQ0IiwgImFkZEVsZW1lbnQiLCAiX3JlZjMiLCAicXVlcnlVc2VyR3JvdXBzUGFyYW1zIiwgImxpc3QiLCAidXN1c2VycyIsICJ1c3Byb3AiLCAicXVlcnkiLCAidXNlcnMiLCAiZ3JvdXBzIiwgImdldEJvZHkiLCAiZ2VvTG9jYXRpb25SZWFkZXIiLCAicGFnZU5hbWUiLCAiVGl0bGUiLCAidG9UZXh0IiwgInJlbGV2YW50VXNlclBhZ2VOYW1lIl0KfQo=

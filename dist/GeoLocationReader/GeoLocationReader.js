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
var USER_SCRIPT_LIST = ["滥用过滤器", "求闻编者", "求闻百科社区", "Example", "External contributors", "Maintenance script", "MediaWiki default", "MediaWiki message delivery", "New user page"];
var USER_WEBMASTER_LIST = ["QiuWen", "QiuWen for Accounts", "QiuwenSocialMedia"];
var WG_SCRIPT = mw.config.get("wgScript");
var WG_USER_GROUPS = (_mw$config$get = mw.config.get("wgUserGroups")) !== null && _mw$config$get !== void 0 ? _mw$config$get : [];
var WG_USER_NAME = (_mw$config$get2 = mw.config.get("wgUserName")) !== null && _mw$config$get2 !== void 0 ? _mw$config$get2 : "";
//! src/GeoLocationReader/modules/constant.ts
var CLASS_NAME = "gadget-geo_location_reader";
var CLASS_NAME_ICON = "".concat(CLASS_NAME, "__icon");
var CLASS_NAME_TEXT = "".concat(CLASS_NAME, "__text");
var IS_USER_PAGE = mw.config.get("wgNamespaceNumber") === userNameSpaceNumber;
var IS_WG_ACTION_VIEW = mw.config.get("wgAction") === "view";
var WG_PAGE_NAME = mw.config.get("wgPageName");
var WG_RELEVANT_USER_NAME = (_mw$config$get3 = mw.config.get("wgRelevantUserName")) !== null && _mw$config$get3 !== void 0 ? _mw$config$get3 : "";
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
      const {
        country,
        countryOrArea,
        region
      } = yield $.getJSON(new mw.Uri(WG_SCRIPT2).extend({
        action: "raw",
        title: storePageTitle
      }).toString());
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
      if (USER_SCRIPT_LIST.includes(WG_RELEVANT_USER_NAME) || groups.includes("bot")) {
      } else if (USER_WEBMASTER_LIST.includes(WG_RELEVANT_USER_NAME) || groups.includes("qiuwen")) {
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
  if (!WG_RELEVANT_USER_NAME || !IS_USER_PAGE || !IS_WG_ACTION_VIEW) {
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0dlb0xvY2F0aW9uUmVhZGVyL29wdGlvbnMuanNvbiIsICJzcmMvR2VvTG9jYXRpb24vbW9kdWxlcy9jb25zdGFudC50cyIsICJzcmMvR2VvTG9jYXRpb25SZWFkZXIvbW9kdWxlcy9jb25zdGFudC50cyIsICJzcmMvR2VvTG9jYXRpb25SZWFkZXIvbW9kdWxlcy9hcGkudHMiLCAic3JjL0dlb0xvY2F0aW9uUmVhZGVyL21vZHVsZXMvdXRpbC9uYW1lLnRzIiwgInNyYy9HZW9Mb2NhdGlvblJlYWRlci9tb2R1bGVzL3V0aWwvZ2V0TmFtZS50cyIsICJzcmMvR2VvTG9jYXRpb25SZWFkZXIvbW9kdWxlcy9hcHBlbmRHZW9JY29uLnRzeCIsICJzcmMvR2VvTG9jYXRpb25SZWFkZXIvbW9kdWxlcy9pMThuLnRzIiwgInNyYy9HZW9Mb2NhdGlvblJlYWRlci9tb2R1bGVzL2FkZEVsZW1lbnQudHMiLCAic3JjL0dlb0xvY2F0aW9uUmVhZGVyL0dlb0xvY2F0aW9uUmVhZGVyLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJ7XG5cdFwibW91bnRQb2ludFNlbGVjdG9yXCI6IFwiI2Zvb3Rlci1pbmZvLC5wYWdlLWluZm9cIixcblx0XCJ1c2VyTmFtZVNwYWNlTnVtYmVyXCI6IDIsXG5cdFwidmVyc2lvblwiOiBcIjIuMFwiXG59XG4iLCAiY29uc3QgVVNFUl9TQ1JJUFRfTElTVDogc3RyaW5nW10gPSBbXG5cdCfmu6XnlKjov4fmu6TlmagnLFxuXHQn5rGC6Ze757yW6ICFJyxcblx0J+axgumXu+eZvuenkeekvuWMuicsXG5cdCdFeGFtcGxlJyxcblx0J0V4dGVybmFsIGNvbnRyaWJ1dG9ycycsXG5cdCdNYWludGVuYW5jZSBzY3JpcHQnLFxuXHQnTWVkaWFXaWtpIGRlZmF1bHQnLFxuXHQnTWVkaWFXaWtpIG1lc3NhZ2UgZGVsaXZlcnknLFxuXHQnTmV3IHVzZXIgcGFnZScsXG5dO1xuY29uc3QgVVNFUl9XRUJNQVNURVJfTElTVDogc3RyaW5nW10gPSBbJ1FpdVdlbicsICdRaXVXZW4gZm9yIEFjY291bnRzJywgJ1FpdXdlblNvY2lhbE1lZGlhJ107XG5cbmNvbnN0IFdHX1NDUklQVDogc3RyaW5nID0gbXcuY29uZmlnLmdldCgnd2dTY3JpcHQnKTtcbmNvbnN0IFdHX1VTRVJfR1JPVVBTOiBzdHJpbmdbXSA9IG13LmNvbmZpZy5nZXQoJ3dnVXNlckdyb3VwcycpID8/IFtdO1xuY29uc3QgV0dfVVNFUl9OQU1FOiBzdHJpbmcgPSBtdy5jb25maWcuZ2V0KCd3Z1VzZXJOYW1lJykgPz8gJyc7XG5cbmV4cG9ydCB7VVNFUl9TQ1JJUFRfTElTVCwgVVNFUl9XRUJNQVNURVJfTElTVCwgV0dfU0NSSVBULCBXR19VU0VSX0dST1VQUywgV0dfVVNFUl9OQU1FfTtcbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uL29wdGlvbnMuanNvbic7XG5cbmNvbnN0IENMQVNTX05BTUU6IHN0cmluZyA9ICdnYWRnZXQtZ2VvX2xvY2F0aW9uX3JlYWRlcic7XG5jb25zdCBDTEFTU19OQU1FX0lDT046IHN0cmluZyA9IGAke0NMQVNTX05BTUV9X19pY29uYDtcbmNvbnN0IENMQVNTX05BTUVfVEVYVDogc3RyaW5nID0gYCR7Q0xBU1NfTkFNRX1fX3RleHRgO1xuXG5jb25zdCBJU19VU0VSX1BBR0U6IGJvb2xlYW4gPSBtdy5jb25maWcuZ2V0KCd3Z05hbWVzcGFjZU51bWJlcicpID09PSBPUFRJT05TLnVzZXJOYW1lU3BhY2VOdW1iZXI7XG5jb25zdCBJU19XR19BQ1RJT05fVklFVzogYm9vbGVhbiA9IG13LmNvbmZpZy5nZXQoJ3dnQWN0aW9uJykgPT09ICd2aWV3JztcblxuY29uc3QgV0dfUEFHRV9OQU1FOiBzdHJpbmcgPSBtdy5jb25maWcuZ2V0KCd3Z1BhZ2VOYW1lJyk7XG5jb25zdCBXR19SRUxFVkFOVF9VU0VSX05BTUU6IHN0cmluZyA9IG13LmNvbmZpZy5nZXQoJ3dnUmVsZXZhbnRVc2VyTmFtZScpID8/ICcnO1xuY29uc3QgV0dfU0NSSVBUOiBzdHJpbmcgPSBtdy5jb25maWcuZ2V0KCd3Z1NjcmlwdCcpO1xuY29uc3QgV0dfU0tJTjogc3RyaW5nID0gbXcuY29uZmlnLmdldCgnc2tpbicpO1xuY29uc3QgV0dfVVNFUl9MQU5HVUFHRTogc3RyaW5nID0gbXcuY29uZmlnLmdldCgnd2dVc2VyTGFuZ3VhZ2UnKTtcblxuZXhwb3J0IHtVU0VSX1NDUklQVF9MSVNULCBVU0VSX1dFQk1BU1RFUl9MSVNUfSBmcm9tICd+L0dlb0xvY2F0aW9uL21vZHVsZXMvY29uc3RhbnQnO1xuZXhwb3J0IHtcblx0Q0xBU1NfTkFNRSxcblx0Q0xBU1NfTkFNRV9JQ09OLFxuXHRDTEFTU19OQU1FX1RFWFQsXG5cdElTX1VTRVJfUEFHRSxcblx0SVNfV0dfQUNUSU9OX1ZJRVcsXG5cdFdHX1BBR0VfTkFNRSxcblx0V0dfUkVMRVZBTlRfVVNFUl9OQU1FLFxuXHRXR19TQ1JJUFQsXG5cdFdHX1NLSU4sXG5cdFdHX1VTRVJfTEFOR1VBR0UsXG59O1xuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7aW5pdE13QXBpfSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG5jb25zdCBhcGk6IG13LkFwaSA9IGluaXRNd0FwaShgR2VvTG9jYXRpb25SZWFkZXIvJHtPUFRJT05TLnZlcnNpb259YCk7XG5cbmV4cG9ydCB7YXBpfTtcbiIsICJpbXBvcnQge1dHX1VTRVJfTEFOR1VBR0V9IGZyb20gJy4uL2NvbnN0YW50JztcblxuY29uc3QgZ2V0Q291bnRyeU9yQXJlYU5hbWVMaXN0ID0gKCkgPT4ge1xuXHRpZiAoWyd6aC1oYW50JywgJ3poLWhrJywgJ3poLW1vJ10uaW5jbHVkZXMoV0dfVVNFUl9MQU5HVUFHRSkpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0QUY6ICfpmL/lr4zmsZcnLFxuXHRcdFx0QVg6ICflpafomK0nLFxuXHRcdFx0QUw6ICfpmL/niL7lt7TlsLzkup4nLFxuXHRcdFx0RFo6ICfpmL/niL7lj4rliKnkup4nLFxuXHRcdFx0QVM6ICfnvo7lsazolqnmkankup4nLFxuXHRcdFx0QUQ6ICflronpgZPniL4nLFxuXHRcdFx0QU86ICflronlk6Xmi4knLFxuXHRcdFx0QUk6ICflronlnK3mi4knLFxuXHRcdFx0QVE6ICfljZfmpbXmtLInLFxuXHRcdFx0QUc6ICflronmj5Dnk5zlkozlt7TluIPpgZQnLFxuXHRcdFx0QVI6ICfpmL/moLnlu7cnLFxuXHRcdFx0QU06ICfkup7nvo7lsLzkup4nLFxuXHRcdFx0QVc6ICfpmL/pra/lt7QnLFxuXHRcdFx0QVU6ICfmvrPmtLInLFxuXHRcdFx0QVQ6ICflpaflnLDliKknLFxuXHRcdFx0QVo6ICfpmL/loZ7mi5znloYnLFxuXHRcdFx0QlM6ICflt7Tlk4jppqwnLFxuXHRcdFx0Qkg6ICflt7TmnpcnLFxuXHRcdFx0QkQ6ICflrZ/liqDmi4nlnIsnLFxuXHRcdFx0QkI6ICflt7Tlt7TlpJrmlq8nLFxuXHRcdFx0Qlk6ICfnmb3kv4TnvoXmlq8nLFxuXHRcdFx0QkU6ICfmr5TliKnmmYInLFxuXHRcdFx0Qlo6ICfkvK/liKnojLInLFxuXHRcdFx0Qko6ICfosp3lr6cnLFxuXHRcdFx0Qk06ICfnmb7mhZXpgZQnLFxuXHRcdFx0QlQ6ICfkuI3kuLknLFxuXHRcdFx0Qk86ICfnjrvliKnntq3kup4nLFxuXHRcdFx0QlE6ICfojbfomK3liqDli5Lmr5TljYAnLFxuXHRcdFx0QkE6ICfms6Lpu5EnLFxuXHRcdFx0Qlc6ICfljZrojKjnk6bntI0nLFxuXHRcdFx0QlY6ICfluIPpn4vls7YnLFxuXHRcdFx0QlI6ICflt7Topb8nLFxuXHRcdFx0SU86ICfoi7HlsazljbDluqbmtIvpoJjlnLAnLFxuXHRcdFx0Qk46ICfmsbbokIonLFxuXHRcdFx0Qkc6ICfkv53liqDliKnkup4nLFxuXHRcdFx0QkY6ICfluIPln7rntI3ms5XntKInLFxuXHRcdFx0Qkk6ICfluIPpmobov6onLFxuXHRcdFx0Q1Y6ICfkvZvlvpfop5InLFxuXHRcdFx0S0g6ICfmn6zln5Tlr6gnLFxuXHRcdFx0Q006ICflloDpuqXpmoYnLFxuXHRcdFx0Q0E6ICfliqDmi7/lpKcnLFxuXHRcdFx0S1k6ICfplovmm7znvqTls7YnLFxuXHRcdFx0Q0Y6ICfkuK3pnZ4nLFxuXHRcdFx0VEQ6ICfkuY3lvpcnLFxuXHRcdFx0Q0w6ICfmmbrliKknLFxuXHRcdFx0Q046ICfkuK3lnIsnLFxuXHRcdFx0Q1g6ICfogZboqpXls7YnLFxuXHRcdFx0Q0M6ICfnp5Hnp5Hmlq/vvIjln7rmnpfvvInnvqTls7YnLFxuXHRcdFx0Q086ICflk6XlgKvmr5Tkup4nLFxuXHRcdFx0S006ICfnp5HmkannvoUnLFxuXHRcdFx0Q0c6ICfliZvmnpzlhbHlkozlnIsnLFxuXHRcdFx0Q0Q6ICfliZvmnpzmsJHkuLvlhbHlkozlnIsnLFxuXHRcdFx0Q0s6ICfluqvlhYvnvqTls7YnLFxuXHRcdFx0Q1I6ICflk6Xmlq/pgZTpu47liqAnLFxuXHRcdFx0Q0k6ICfnp5Hnibnov6rnk6YnLFxuXHRcdFx0SFI6ICflhYvnvoXlnLDkup4nLFxuXHRcdFx0Q1U6ICflj6Tlt7QnLFxuXHRcdFx0Q1c6ICfluqvmi4nntKInLFxuXHRcdFx0Q1k6ICfloZ7mtabot6/mlq8nLFxuXHRcdFx0Q1o6ICfmjbflhYsnLFxuXHRcdFx0REs6ICfkuLnpuqUnLFxuXHRcdFx0REo6ICflkInluIPmj5AnLFxuXHRcdFx0RE06ICflpJrnsbPlsLzlhYsnLFxuXHRcdFx0RE86ICflpJrnsbPlsLzliqAnLFxuXHRcdFx0RUM6ICfljoTnk5zlpJrniL4nLFxuXHRcdFx0RUc6ICfln4Plj4onLFxuXHRcdFx0U1Y6ICfolqnniL7nk6blpJonLFxuXHRcdFx0R1E6ICfotaTpgZPnlb/lhafkup4nLFxuXHRcdFx0RVI6ICfljoTnq4vnibnph4zkup4nLFxuXHRcdFx0RUU6ICfmhJvmspnlsLzkup4nLFxuXHRcdFx0U1o6ICfmlq/lqIHlo6vomK0nLFxuXHRcdFx0RVQ6ICfln4PloZ7kv4Tmr5Tkup4nLFxuXHRcdFx0Rks6ICfnpo/lhYvomK3nvqTls7YnLFxuXHRcdFx0Rk86ICfms5XnvoXnvqTls7YnLFxuXHRcdFx0Rko6ICfmlpDmv58nLFxuXHRcdFx0Rkk6ICfoiqzomK0nLFxuXHRcdFx0RlI6ICfms5XlnIsnLFxuXHRcdFx0R0Y6ICfms5XlsazlnK3kup7pgqMnLFxuXHRcdFx0UEY6ICfms5Xlsazms6LliKnlsLzopb/kup4nLFxuXHRcdFx0VEY6ICfms5XlsazljZfpg6jlkozljZfmpbXpoJjlnLAnLFxuXHRcdFx0R0E6ICfliqDok6wnLFxuXHRcdFx0R006ICflsqHmr5Tkup4nLFxuXHRcdFx0R0U6ICfmoLzpra/lkInkup4nLFxuXHRcdFx0REU6ICflvrflnIsnLFxuXHRcdFx0R0g6ICfliqDntI0nLFxuXHRcdFx0R0k6ICfnm7TluIPnvoXpmYAnLFxuXHRcdFx0R1I6ICfluIzoh5gnLFxuXHRcdFx0R0w6ICfmoLzpmbXomK0nLFxuXHRcdFx0R0Q6ICfmoLzmnpfntI3pgZQnLFxuXHRcdFx0R1A6ICfnk5zlvrfnvoXmma4nLFxuXHRcdFx0R1U6ICfpl5zls7YnLFxuXHRcdFx0R1Q6ICfljbHlnLDppqzmi4knLFxuXHRcdFx0R0c6ICfmoLnopb8nLFxuXHRcdFx0R046ICfnlb/lhafkup4nLFxuXHRcdFx0R1c6ICfnlb/lhafkup7mr5TntLknLFxuXHRcdFx0R1k6ICflnK3kup7pgqMnLFxuXHRcdFx0SFQ6ICfmtbflnLAnLFxuXHRcdFx0SE06ICfotavlvrfls7blkozpuqXlhYvllJDntI3nvqTls7YnLFxuXHRcdFx0VkE6ICfmorXokoLlsqEnLFxuXHRcdFx0SE46ICfmtKrpg73mi4nmlq8nLFxuXHRcdFx0SEs6ICfkuK3lnIvpppnmuK8nLFxuXHRcdFx0SFU6ICfljIjniZnliKknLFxuXHRcdFx0SVM6ICflhrDls7YnLFxuXHRcdFx0SU46ICfljbDluqYnLFxuXHRcdFx0SUQ6ICfljbDlsLwnLFxuXHRcdFx0SVI6ICfkvIrmnJcnLFxuXHRcdFx0SVE6ICfkvIrmi4nlhYsnLFxuXHRcdFx0SUU6ICfmhJvniL7omK0nLFxuXHRcdFx0SU06ICfkurrls7YnLFxuXHRcdFx0SUw6ICfku6XoibLliJcnLFxuXHRcdFx0SVQ6ICfmhI/lpKfliKknLFxuXHRcdFx0Sk06ICfniZnosrfliqAnLFxuXHRcdFx0SlA6ICfml6XmnKwnLFxuXHRcdFx0SkU6ICfmvqTopb8nLFxuXHRcdFx0Sk86ICfntITml6YnLFxuXHRcdFx0S1o6ICflk4jolqnlhYsnLFxuXHRcdFx0S0U6ICfogq/pm4UnLFxuXHRcdFx0S0k6ICfln7rph4zlt7Tmlq8nLFxuXHRcdFx0S1A6ICfljJfpn5MnLFxuXHRcdFx0S1I6ICfpn5PlnIsnLFxuXHRcdFx0S1c6ICfnp5HlqIHnibknLFxuXHRcdFx0S0c6ICflkInniL7lkInmlq8nLFxuXHRcdFx0TEE6ICfogIHmkr4nLFxuXHRcdFx0TFY6ICfmi4nohKvntq3kup4nLFxuXHRcdFx0TEI6ICfpu47lt7Tlq6knLFxuXHRcdFx0TFM6ICfokIrntKLmiZgnLFxuXHRcdFx0TFI6ICfliKnmr5Tph4zkup4nLFxuXHRcdFx0TFk6ICfliKnmr5Tkup4nLFxuXHRcdFx0TEk6ICfliJfmlK/mlablo6vnmbsnLFxuXHRcdFx0TFQ6ICfnq4vpmbblrpsnLFxuXHRcdFx0TFU6ICfnm6fmo67loKEnLFxuXHRcdFx0TU86ICfkuK3lnIvmvrPploAnLFxuXHRcdFx0TUc6ICfppqzpgZTliqDmlq/liqAnLFxuXHRcdFx0TVc6ICfppqzmi4nntq0nLFxuXHRcdFx0TVk6ICfppqzkvobopb/kup4nLFxuXHRcdFx0TVY6ICfppqzniL7ku6PlpKsnLFxuXHRcdFx0TUw6ICfppqzph4wnLFxuXHRcdFx0TVQ6ICfppqzogLPku5YnLFxuXHRcdFx0TUg6ICfppqzntLnniL7nvqTls7YnLFxuXHRcdFx0TVE6ICfppqzmj5DlsLzlhYsnLFxuXHRcdFx0TVI6ICfmr5vph4zloZTlsLzkup4nLFxuXHRcdFx0TVU6ICfmr5vph4zoo5jmlq8nLFxuXHRcdFx0WVQ6ICfppqzntITnibknLFxuXHRcdFx0TVg6ICfloqjopb/lk6UnLFxuXHRcdFx0Rk06ICflr4blhYvnvoXlsLzopb/kup7oga/pgqYnLFxuXHRcdFx0TUQ6ICfmkanniL7lpJrnk6YnLFxuXHRcdFx0TUM6ICfmkanntI3lk6UnLFxuXHRcdFx0TU46ICfokpnlj6QnLFxuXHRcdFx0TUU6ICfpu5HlsbEnLFxuXHRcdFx0TVM6ICfokpnnibnloZ7mi4nnibknLFxuXHRcdFx0TUE6ICfmkanmtJvlk6UnLFxuXHRcdFx0TVo6ICfojqvmoZHmr5TlhYsnLFxuXHRcdFx0TU06ICfnt6znlLgnLFxuXHRcdFx0TkE6ICfntI3nsbPmr5Tkup4nLFxuXHRcdFx0TlI6ICfnkZnpra8nLFxuXHRcdFx0TlA6ICflsLzms4rniL4nLFxuXHRcdFx0Tkw6ICfojbfomK0nLFxuXHRcdFx0TkM6ICfmlrDlloDph4zlpJrlsLzkup4nLFxuXHRcdFx0Tlo6ICfmlrDopb/omK0nLFxuXHRcdFx0Tkk6ICflsLzliqDmi4nnk5wnLFxuXHRcdFx0TkU6ICflsLzml6XniL4nLFxuXHRcdFx0Tkc6ICflsLzml6XliKnkup4nLFxuXHRcdFx0TlU6ICfntJDln4MnLFxuXHRcdFx0TkY6ICfoq77npo/lhYvls7YnLFxuXHRcdFx0TUs6ICfljJfppqzlhbbpoJMnLFxuXHRcdFx0TVA6ICfljJfppqzliKnlronntI3nvqTls7YnLFxuXHRcdFx0Tk86ICfmjKrlqIEnLFxuXHRcdFx0T006ICfpmL/mm7wnLFxuXHRcdFx0UEs6ICflt7Tln7rmlq/lnaYnLFxuXHRcdFx0UFc6ICfluJXli54nLFxuXHRcdFx0UFM6ICflt7Tli5Lmlq/lnaYnLFxuXHRcdFx0UEE6ICflt7Tmi7/ppqwnLFxuXHRcdFx0UEc6ICflt7TluIPkup7mlrDnlb/lhafkup4nLFxuXHRcdFx0UFk6ICflt7Tmi4nlnK0nLFxuXHRcdFx0UEU6ICfnp5jpra8nLFxuXHRcdFx0UEg6ICfoj7Llvovos5MnLFxuXHRcdFx0UE46ICfnmq7nibnogq/nvqTls7YnLFxuXHRcdFx0UEw6ICfms6LomK0nLFxuXHRcdFx0UFQ6ICfokaHokITniZknLFxuXHRcdFx0UFI6ICfms6LlpJrpu47lkIQnLFxuXHRcdFx0UUE6ICfljaHloZTniL4nLFxuXHRcdFx0UkU6ICfnlZnlsLzmsaonLFxuXHRcdFx0Uk86ICfnvoXppqzlsLzkup4nLFxuXHRcdFx0UlU6ICfkv4TnvoXmlq8nLFxuXHRcdFx0Ulc6ICfnm6fml7rpgZQnLFxuXHRcdFx0Qkw6ICfogZblt7Tms7Dli5LnsbMnLFxuXHRcdFx0U0g6ICfogZbmtbflgKvlqJzjgIHpmL/mo67mnb7lkoznibnph4zmlq/lnaYt6YGU5bqr5bC85LqeJyxcblx0XHRcdEtOOiAn6IGW5Z+66Iyo5ZKM5bC857at5pavJyxcblx0XHRcdExDOiAn6IGW55un6KW/5LqeJyxcblx0XHRcdE1GOiAn5rOV5bGs6IGW6aas5LiBJyxcblx0XHRcdFBNOiAn6IGW55qu5Z+D54i+5ZKM5a+G5YWL6ZqGJyxcblx0XHRcdFZDOiAn6IGW5paH5qOu54m55ZKM5qC85p6X57SN5LiB5pavJyxcblx0XHRcdFdTOiAn6Jap5pGp5LqeJyxcblx0XHRcdFNNOiAn6IGW6aas5Yqb6Ku+Jyxcblx0XHRcdFNUOiAn6IGW5aSa576O5ZKM5pmu5p6X6KW/5q+UJyxcblx0XHRcdFNBOiAn5rKZ5Zyw6Zi/5ouJ5LyvJyxcblx0XHRcdFNOOiAn5aGe5YWn5Yqg54i+Jyxcblx0XHRcdFJTOiAn5aGe54i+57at5LqeJyxcblx0XHRcdFNDOiAn5aGe6IiM54i+Jyxcblx0XHRcdFNMOiAn5aGe5ouJ5Yip5piCJyxcblx0XHRcdFNHOiAn5paw5Yqg5Z2hJyxcblx0XHRcdFNYOiAn6I235bGs6IGW6aas5LiBJyxcblx0XHRcdFNLOiAn5pav5rSb5LyQ5YWLJyxcblx0XHRcdFNJOiAn5pav5rSb5paH5bC85LqeJyxcblx0XHRcdFNCOiAn5omA576F6ZaA576k5bO2Jyxcblx0XHRcdFNPOiAn57Si6aas6YeMJyxcblx0XHRcdFpBOiAn5Y2X6Z2eJyxcblx0XHRcdEdTOiAn5Y2X5Zas5rK75Lqe5ZKM5Y2X5qGR5aiB5aWH576k5bO2Jyxcblx0XHRcdFNTOiAn5Y2X6JiH5Li5Jyxcblx0XHRcdEVTOiAn6KW/54+t54mZJyxcblx0XHRcdExLOiAn5pav6YeM6Jit5Y2hJyxcblx0XHRcdFNEOiAn6JiH5Li5Jyxcblx0XHRcdFNSOiAn6JiH6YeM5Y2XJyxcblx0XHRcdFNKOiAn5pav55Om54i+5be05ZKM5o+a6aas5bu2Jyxcblx0XHRcdFNFOiAn55Ge5YW4Jyxcblx0XHRcdENIOiAn55Ge5aOrJyxcblx0XHRcdFNZOiAn5pWY5Yip5LqeJyxcblx0XHRcdFRXOiAn5Lit5ZyL6Ie654GjJyxcblx0XHRcdFRKOiAn5aGU5ZCJ5YWLJyxcblx0XHRcdFRaOiAn5Z2m5qGR5bC85LqeJyxcblx0XHRcdFRIOiAn5rOw5ZyLJyxcblx0XHRcdFRMOiAn5p2x5bid5rG2Jyxcblx0XHRcdFRHOiAn5aSa5ZOlJyxcblx0XHRcdFRLOiAn5omY5YWL5YueJyxcblx0XHRcdFRPOiAn5rmv5YqgJyxcblx0XHRcdFRUOiAn5Y2D6YeM6YGU5ZKM5aSa5be05ZOlJyxcblx0XHRcdFROOiAn56qB5bC86KW/5LqeJyxcblx0XHRcdFRSOiAn5Zyf6ICz5YW2Jyxcblx0XHRcdFRNOiAn5Zyf5bqr5pu8Jyxcblx0XHRcdFRDOiAn54m55YWL5pav5ZKM5Yex56eR5pav576k5bO2Jyxcblx0XHRcdFRWOiAn5ZyW55Om55unJyxcblx0XHRcdFVHOiAn54OP5bmy6YGUJyxcblx0XHRcdFVBOiAn54OP5YWL6JitJyxcblx0XHRcdEFFOiAn6Zi/6IGv6YWLJyxcblx0XHRcdEdCOiAn6Iux5ZyLJyxcblx0XHRcdFVTOiAn576O5ZyLJyxcblx0XHRcdFVNOiAn576O5ZyL5pys5Zyf5aSW5bCP5bO25ba8Jyxcblx0XHRcdFVZOiAn54OP5ouJ5ZytJyxcblx0XHRcdFVaOiAn54OP6Iyy5Yil5YWLJyxcblx0XHRcdFZVOiAn55Om5Yqq6Zi/5ZyWJyxcblx0XHRcdFZFOiAn5aeU5YWn55Ge5ouJJyxcblx0XHRcdFZOOiAn6LaK5Y2XJyxcblx0XHRcdFZHOiAn6Iux5bGs6JmV5aWz576k5bO2Jyxcblx0XHRcdFZJOiAn576O5bGs6JmV5aWz576k5bO2Jyxcblx0XHRcdFdGOiAn55Om5Yip5pav5ZKM5a+M5ZyW57SNJyxcblx0XHRcdEVIOiAn6KW/5pKS5ZOI5ouJJyxcblx0XHRcdFlFOiAn5Lmf6ZaAJyxcblx0XHRcdFpNOiAn6LSK5q+U5LqeJyxcblx0XHRcdFpXOiAn5rSl5be05biD6Z+LJyxcblx0XHR9O1xuXHR9IGVsc2UgaWYgKFsnemgtdHcnXS5pbmNsdWRlcyhXR19VU0VSX0xBTkdVQUdFKSkge1xuXHRcdHJldHVybiB7XG5cdFx0XHRBRjogJ+mYv+WvjOaxlycsXG5cdFx0XHRBWDogJ+Wlp+iYrScsXG5cdFx0XHRBTDogJ+mYv+eIvuW3tOWwvOS6nicsXG5cdFx0XHREWjogJ+mYv+eIvuWPiuWIqeS6nicsXG5cdFx0XHRBUzogJ+e+juWxrOiWqeaRqeS6nicsXG5cdFx0XHRBRDogJ+WuiemBk+eIvicsXG5cdFx0XHRBTzogJ+WuieWTpeaLiScsXG5cdFx0XHRBSTogJ+WuieWcreaLiScsXG5cdFx0XHRBUTogJ+WNl+altea0sicsXG5cdFx0XHRBRzogJ+WuieWcsOWNoeWPiuW3tOW4g+mBlCcsXG5cdFx0XHRBUjogJ+mYv+agueW7tycsXG5cdFx0XHRBTTogJ+S6nue+juWwvOS6nicsXG5cdFx0XHRBVzogJ+mYv+mtr+W3tCcsXG5cdFx0XHRBVTogJ+a+s+a0sicsXG5cdFx0XHRBVDogJ+Wlp+WcsOWIqScsXG5cdFx0XHRBWjogJ+S6nuWhnuaLnOeEticsXG5cdFx0XHRCUzogJ+W3tOWTiOmmrCcsXG5cdFx0XHRCSDogJ+W3tOaelycsXG5cdFx0XHRCRDogJ+Wtn+WKoOaLieWciycsXG5cdFx0XHRCQjogJ+W3tOiyneWkmicsXG5cdFx0XHRCWTogJ+eZveS/hOe+heaWrycsXG5cdFx0XHRCRTogJ+avlOWIqeaZgicsXG5cdFx0XHRCWjogJ+iynemHjOaWrycsXG5cdFx0XHRCSjogJ+iyneWNlycsXG5cdFx0XHRCTTogJ+eZvuaFlemBlCcsXG5cdFx0XHRCVDogJ+S4jeS4uScsXG5cdFx0XHRCTzogJ+eOu+WIqee2reS6nicsXG5cdFx0XHRCUTogJ+iNt+iYreWKoOWLkuavlOWNgCcsXG5cdFx0XHRCQTogJ+azoui1qycsXG5cdFx0XHRCVzogJ+azouacremCoycsXG5cdFx0XHRCVjogJ+W4g+mfi+WzticsXG5cdFx0XHRCUjogJ+W3tOilvycsXG5cdFx0XHRJTzogJ+iLseWxrOWNsOW6pua0i+mgmOWcsCcsXG5cdFx0XHRCTjogJ+axtuiQiicsXG5cdFx0XHRCRzogJ+S/neWKoOWIqeS6nicsXG5cdFx0XHRCRjogJ+W4g+WQiee0jeazlee0oicsXG5cdFx0XHRCSTogJ+iSsumahuWcsCcsXG5cdFx0XHRDVjogJ+e2reW+t+inkicsXG5cdFx0XHRLSDogJ+afrOWflOWvqCcsXG5cdFx0XHRDTTogJ+WWgOm6pemahicsXG5cdFx0XHRDQTogJ+WKoOaLv+WkpycsXG5cdFx0XHRLWTogJ+mWi+abvOe+pOWzticsXG5cdFx0XHRDRjogJ+S4remdnicsXG5cdFx0XHRURDogJ+afpeW+tycsXG5cdFx0XHRDTDogJ+aZuuWIqScsXG5cdFx0XHRDTjogJ+S4reWciycsXG5cdFx0XHRDWDogJ+iBluiqleWzticsXG5cdFx0XHRDQzogJ+enkeenkeaWr++8iOWfuuael++8iee+pOWzticsXG5cdFx0XHRDTzogJ+WTpeWAq+avlOS6nicsXG5cdFx0XHRLTTogJ+iRm+aRqScsXG5cdFx0XHRDRzogJ+WJm+aenOWFseWSjOWciycsXG5cdFx0XHRDRDogJ+WJm+aenOawkeS4u+WFseWSjOWciycsXG5cdFx0XHRDSzogJ+W6q+WFi+e+pOWzticsXG5cdFx0XHRDUjogJ+WTpeaWr+Wkp+m7juWKoCcsXG5cdFx0XHRDSTogJ+ixoeeJmea1t+WyuCcsXG5cdFx0XHRIUjogJ+WFi+e+heWfg+ilv+S6nicsXG5cdFx0XHRDVTogJ+WPpOW3tCcsXG5cdFx0XHRDVzogJ+WPpOaLiee0oicsXG5cdFx0XHRDWTogJ+izveaZruWLkuaWrycsXG5cdFx0XHRDWjogJ+aNt+WFiycsXG5cdFx0XHRESzogJ+S4uem6pScsXG5cdFx0XHRESjogJ+WQieW4g+WcsCcsXG5cdFx0XHRETTogJ+Wkmuexs+WwvOWFiycsXG5cdFx0XHRETzogJ+WkmuaYjuWwvOWKoCcsXG5cdFx0XHRFQzogJ+WOhOeTnOWkmicsXG5cdFx0XHRFRzogJ+Wfg+WPiicsXG5cdFx0XHRTVjogJ+iWqeeIvueTpuWkmicsXG5cdFx0XHRHUTogJ+i1pOmBk+W5vuWFp+S6nicsXG5cdFx0XHRFUjogJ+WOhOWIqeWeguS6nicsXG5cdFx0XHRFRTogJ+aEm+aymeWwvOS6nicsXG5cdFx0XHRTWjogJ+WPsueTpuW4neWwvCcsXG5cdFx0XHRFVDogJ+iho+e0ouavlOS6nicsXG5cdFx0XHRGSzogJ+emj+WFi+iYree+pOWzticsXG5cdFx0XHRGTzogJ+azlee+hee+pOWzticsXG5cdFx0XHRGSjogJ+aWkOa/nycsXG5cdFx0XHRGSTogJ+iKrOiYrScsXG5cdFx0XHRGUjogJ+azleWciycsXG5cdFx0XHRHRjogJ+azleWxrOWcreS6numCoycsXG5cdFx0XHRQRjogJ+azleWxrOeOu+mHjOWwvOilv+S6nicsXG5cdFx0XHRURjogJ+azleWxrOWNl+mDqOWSjOWNl+altemgmOWcsCcsXG5cdFx0XHRHQTogJ+WKoOW9rScsXG5cdFx0XHRHTTogJ+eUmOavlOS6nicsXG5cdFx0XHRHRTogJ+WWrOayu+S6nicsXG5cdFx0XHRERTogJ+W+t+WciycsXG5cdFx0XHRHSDogJ+i/pue0jScsXG5cdFx0XHRHSTogJ+ebtOW4g+e+hemZgCcsXG5cdFx0XHRHUjogJ+W4jOiHmCcsXG5cdFx0XHRHTDogJ+agvOmZteiYrScsXG5cdFx0XHRHRDogJ+agvOeRnumCo+mBlCcsXG5cdFx0XHRHUDogJ+eTnOW+t+e+heaZricsXG5cdFx0XHRHVTogJ+mXnOWzticsXG5cdFx0XHRHVDogJ+eTnOWcsOmmrOaLiScsXG5cdFx0XHRHRzogJ+agueilvycsXG5cdFx0XHRHTjogJ+W5vuWFp+S6nicsXG5cdFx0XHRHVzogJ+W5vuWFp+S6nuavlOe0oicsXG5cdFx0XHRHWTogJ+iTi+S6numCoycsXG5cdFx0XHRIVDogJ+a1t+WcsCcsXG5cdFx0XHRITTogJ+i1q+W+t+WztuWSjOm6peWFi+WUkOe0jee+pOWzticsXG5cdFx0XHRWQTogJ+aiteiSguWyoScsXG5cdFx0XHRITjogJ+Wuj+mDveaLieaWrycsXG5cdFx0XHRISzogJ+S4reWci+mmmea4rycsXG5cdFx0XHRIVTogJ+WMiOeJmeWIqScsXG5cdFx0XHRJUzogJ+WGsOWzticsXG5cdFx0XHRJTjogJ+WNsOW6picsXG5cdFx0XHRJRDogJ+WNsOWwvCcsXG5cdFx0XHRJUjogJ+S8iuaclycsXG5cdFx0XHRJUTogJ+S8iuaLieWFiycsXG5cdFx0XHRJRTogJ+aEm+eIvuiYrScsXG5cdFx0XHRJTTogJ+abvOWzticsXG5cdFx0XHRJTDogJ+S7peiJsuWIlycsXG5cdFx0XHRJVDogJ+e+qeWkp+WIqScsXG5cdFx0XHRKTTogJ+eJmeiyt+WKoCcsXG5cdFx0XHRKUDogJ+aXpeacrCcsXG5cdFx0XHRKRTogJ+a+pOilvycsXG5cdFx0XHRKTzogJ+e0hOaXpicsXG5cdFx0XHRLWjogJ+WTiOiWqeWFiycsXG5cdFx0XHRLRTogJ+iCr+S6nicsXG5cdFx0XHRLSTogJ+WQiemHjOW3tOaWrycsXG5cdFx0XHRLUDogJ+WMl+mfkycsXG5cdFx0XHRLUjogJ+mfk+WciycsXG5cdFx0XHRLVzogJ+enkeWogeeJuScsXG5cdFx0XHRLRzogJ+WQieeIvuWQieaWrycsXG5cdFx0XHRMQTogJ+iAgeaSvicsXG5cdFx0XHRMVjogJ+aLieiEq+e2reS6nicsXG5cdFx0XHRMQjogJ+m7juW3tOWrqScsXG5cdFx0XHRMUzogJ+iztOe0ouaJmCcsXG5cdFx0XHRMUjogJ+iztOavlOeRnuS6nicsXG5cdFx0XHRMWTogJ+WIqeavlOS6nicsXG5cdFx0XHRMSTogJ+WIl+aUr+aVpuaWr+eZuycsXG5cdFx0XHRMVDogJ+eri+mZtuWumycsXG5cdFx0XHRMVTogJ+ebp+ajruWgoScsXG5cdFx0XHRNTzogJ+S4reWci+a+s+mWgCcsXG5cdFx0XHRNRzogJ+mmrOmBlOWKoOaWr+WKoCcsXG5cdFx0XHRNVzogJ+mmrOaLieWogScsXG5cdFx0XHRNWTogJ+mmrOS+huilv+S6nicsXG5cdFx0XHRNVjogJ+mmrOeIvuWcsOWkqycsXG5cdFx0XHRNTDogJ+mmrOmHjCcsXG5cdFx0XHRNVDogJ+mmrOeIvuS7licsXG5cdFx0XHRNSDogJ+mmrOe0ueeIvue+pOWzticsXG5cdFx0XHRNUTogJ+mmrOaPkOWwvOWFiycsXG5cdFx0XHRNUjogJ+iMheWIqeWhlOWwvOS6nicsXG5cdFx0XHRNVTogJ+aooemHjOilv+aWrycsXG5cdFx0XHRZVDogJ+mmrOe0hOeJuScsXG5cdFx0XHRNWDogJ+WiqOilv+WTpScsXG5cdFx0XHRGTTogJ+WvhuWFi+e+heWwvOilv+S6nuiBr+mCpicsXG5cdFx0XHRNRDogJ+aRqeeIvuWkmueTpicsXG5cdFx0XHRNQzogJ+aRqee0jeWTpScsXG5cdFx0XHRNTjogJ+iSmeWPpCcsXG5cdFx0XHRNRTogJ+iSmeeJueWFp+WTpee+hScsXG5cdFx0XHRNUzogJ+iSmeWTsuiHmCcsXG5cdFx0XHRNQTogJ+aRqea0m+WTpScsXG5cdFx0XHRNWjogJ+iOq+S4ieavlOWFiycsXG5cdFx0XHRNTTogJ+e3rOeUuCcsXG5cdFx0XHROQTogJ+e0jeexs+avlOS6nicsXG5cdFx0XHROUjogJ+irvumtrycsXG5cdFx0XHROUDogJ+WwvOaziueIvicsXG5cdFx0XHROTDogJ+iNt+iYrScsXG5cdFx0XHROQzogJ+aWsOWWgOmHjOWkmuWwvOS6nicsXG5cdFx0XHROWjogJ+e0kOilv+iYrScsXG5cdFx0XHROSTogJ+WwvOWKoOaLieeTnCcsXG5cdFx0XHRORTogJ+WwvOaXpScsXG5cdFx0XHRORzogJ+WliOWPiuWIqeS6nicsXG5cdFx0XHROVTogJ+e0kOWfgycsXG5cdFx0XHRORjogJ+irvuemj+WFi+WzticsXG5cdFx0XHRNSzogJ+WMl+mmrOWFtumgkycsXG5cdFx0XHRNUDogJ+WMl+mmrOWIqeWuiee0jee+pOWzticsXG5cdFx0XHROTzogJ+aMquWogScsXG5cdFx0XHRPTTogJ+mYv+abvCcsXG5cdFx0XHRQSzogJ+W3tOWfuuaWr+WdpicsXG5cdFx0XHRQVzogJ+W4m+eQiScsXG5cdFx0XHRQUzogJ+W3tOWLkuaWr+WdpicsXG5cdFx0XHRQQTogJ+W3tOaLv+mmrCcsXG5cdFx0XHRQRzogJ+W3tOW4g+S6nue0kOW5vuWFp+S6nicsXG5cdFx0XHRQWTogJ+W3tOaLieWcrScsXG5cdFx0XHRQRTogJ+enmOmtrycsXG5cdFx0XHRQSDogJ+iPsuW+i+izkycsXG5cdFx0XHRQTjogJ+earueJueiCr+e+pOWzticsXG5cdFx0XHRQTDogJ+azouiYrScsXG5cdFx0XHRQVDogJ+iRoeiQhOeJmScsXG5cdFx0XHRQUjogJ+azouWkmum7juWQhCcsXG5cdFx0XHRRQTogJ+WNoemBlCcsXG5cdFx0XHRSRTogJ+eVmeWwvOaXuicsXG5cdFx0XHRSTzogJ+e+hemmrOWwvOS6nicsXG5cdFx0XHRSVTogJ+S/hOe+heaWrycsXG5cdFx0XHRSVzogJ+ebp+WuiemBlCcsXG5cdFx0XHRCTDogJ+iBluW3tOazsOWLkuexsycsXG5cdFx0XHRTSDogJ+iBlua1t+iTruWonOOAgemYv+ajruadvuWSjOeJuemHjOaWr+Wdpi3pgZTluqvlsLzkup4nLFxuXHRcdFx0S046ICfogZblhYvph4zmlq/lpJrnpo/lj4rlsLzntq3mlq8nLFxuXHRcdFx0TEM6ICfogZbpnLLopb/kup4nLFxuXHRcdFx0TUY6ICfms5XlsazogZbppqzkuIEnLFxuXHRcdFx0UE06ICfogZbnmq7ogLboiIflr4blhYvpmoYnLFxuXHRcdFx0VkM6ICfogZbmlofmo67lj4rmoLznkZ7pgqPkuIEnLFxuXHRcdFx0V1M6ICfolqnmkankup4nLFxuXHRcdFx0U006ICfogZbppqzliKnoq74nLFxuXHRcdFx0U1Q6ICfogZblpJrnvo7mma7mnpfopb/mr5QnLFxuXHRcdFx0U0E6ICfmspnng4/lnLDpmL/mi4nkvK8nLFxuXHRcdFx0U046ICfloZ7lhafliqDniL4nLFxuXHRcdFx0UlM6ICfloZ7niL7ntq3kup4nLFxuXHRcdFx0U0M6ICfloZ7luK3niL4nLFxuXHRcdFx0U0w6ICfnjYXlrZDlsbEnLFxuXHRcdFx0U0c6ICfmlrDliqDlnaEnLFxuXHRcdFx0U1g6ICfojbflsazogZbppqzkuIEnLFxuXHRcdFx0U0s6ICfmlq/mtJvkvJDlhYsnLFxuXHRcdFx0U0k6ICfmlq/mtJvntq3lsLzkup4nLFxuXHRcdFx0U0I6ICfntKLnvoXploDnvqTls7YnLFxuXHRcdFx0U086ICfntKLppqzliKnkup4nLFxuXHRcdFx0WkE6ICfljZfpnZ4nLFxuXHRcdFx0R1M6ICfljZfllqzmsrvkup7lkozljZfmoZHlqIHlpYfnvqTls7YnLFxuXHRcdFx0U1M6ICfljZfomIfkuLknLFxuXHRcdFx0RVM6ICfopb/nj63niZknLFxuXHRcdFx0TEs6ICfmlq/ph4zomK3ljaEnLFxuXHRcdFx0U0Q6ICfomIfkuLknLFxuXHRcdFx0U1I6ICfomIfliKnljZcnLFxuXHRcdFx0U0o6ICfmlq/nk6bniL7lt7Tlkozmj5rppqzlu7YnLFxuXHRcdFx0U0U6ICfnkZ7lhbgnLFxuXHRcdFx0Q0g6ICfnkZ7lo6snLFxuXHRcdFx0U1k6ICfmlZjliKnkup4nLFxuXHRcdFx0VFc6ICfkuK3lnIvoh7rngaMnLFxuXHRcdFx0VEo6ICfloZTlkInlhYsnLFxuXHRcdFx0VFo6ICflnablsJrlsLzkup4nLFxuXHRcdFx0VEg6ICfms7DlnIsnLFxuXHRcdFx0VEw6ICfmnbHluJ3msbYnLFxuXHRcdFx0VEc6ICflpJrlk6UnLFxuXHRcdFx0VEs6ICfmiZjlhYvli54nLFxuXHRcdFx0VE86ICfmnbHliqAnLFxuXHRcdFx0VFQ6ICfljYPph4zpgZTlj4rmiZjlt7Tlk6UnLFxuXHRcdFx0VE46ICfnqoHlsLzopb/kup4nLFxuXHRcdFx0VFI6ICflnJ/ogLPlhbYnLFxuXHRcdFx0VE06ICflnJ/luqvmm7wnLFxuXHRcdFx0VEM6ICflnJ/lhYvlh7Hlj6/nvqTls7YnLFxuXHRcdFx0VFY6ICflkJDnk6bpra8nLFxuXHRcdFx0VUc6ICfng4/lubLpgZQnLFxuXHRcdFx0VUE6ICfng4/lhYvomK0nLFxuXHRcdFx0QUU6ICfpmL/oga8nLFxuXHRcdFx0R0I6ICfoi7HlnIsnLFxuXHRcdFx0VVM6ICfnvo7lnIsnLFxuXHRcdFx0VU06ICfnvo7lnIvmnKzlnJ/lpJblsI/ls7bltrwnLFxuXHRcdFx0VVk6ICfng4/mi4nlnK0nLFxuXHRcdFx0VVo6ICfng4/ojLLliKXlhYsnLFxuXHRcdFx0VlU6ICfokKzpgqPmnZwnLFxuXHRcdFx0VkU6ICflp5TlhafnkZ7mi4knLFxuXHRcdFx0Vk46ICfotorljZcnLFxuXHRcdFx0Vkc6ICfoi7Hlsazntq3kuqznvqTls7YnLFxuXHRcdFx0Vkk6ICfnvo7lsazntq3kuqznvqTls7YnLFxuXHRcdFx0V0Y6ICfnk6bliKnmlq/lkozlr4zlnJbntI0nLFxuXHRcdFx0RUg6ICfopb/mkpLlk4jmi4knLFxuXHRcdFx0WUU6ICfokYnploAnLFxuXHRcdFx0Wk06ICflsJrmr5Tkup4nLFxuXHRcdFx0Wlc6ICfovpvlt7TlqIEnLFxuXHRcdH07XG5cdH0gZWxzZSBpZiAoWyd6aC1teScsICd6aC1zZyddLmluY2x1ZGVzKFdHX1VTRVJfTEFOR1VBR0UpKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdEFGOiAn6Zi/5a+M5rGXJyxcblx0XHRcdEFYOiAn5aWl5YWwJyxcblx0XHRcdEFMOiAn6Zi/5bCU5be05bC85LqaJyxcblx0XHRcdERaOiAn6Zi/5bCU5Y+K5Yip5LqaJyxcblx0XHRcdEFTOiAn576O5bGe6JCo5pGp5LqaJyxcblx0XHRcdEFEOiAn5a6J6YGT5bCUJyxcblx0XHRcdEFPOiAn5a6J5ZOl5ouJJyxcblx0XHRcdEFJOiAn5a6J5Zyt5ouJJyxcblx0XHRcdEFROiAn5Y2X5p6B5rSyJyxcblx0XHRcdEFHOiAn5a6J5o+Q55Oc5ZKM5be05biD6L6+Jyxcblx0XHRcdEFSOiAn6Zi/5qC55bu3Jyxcblx0XHRcdEFNOiAn5Lqa576O5bC85LqaJyxcblx0XHRcdEFXOiAn6Zi/6bKB5be0Jyxcblx0XHRcdEFVOiAn5r6z5aSn5Yip5LqaJyxcblx0XHRcdEFUOiAn5aWl5Zyw5YipJyxcblx0XHRcdEFaOiAn6Zi/5aGe5ouc55aGJyxcblx0XHRcdEJTOiAn5be05ZOI6amsJyxcblx0XHRcdEJIOiAn5be05p6XJyxcblx0XHRcdEJEOiAn5a2f5Yqg5ouJ5Zu9Jyxcblx0XHRcdEJCOiAn5be05be05aSa5pavJyxcblx0XHRcdEJZOiAn55m95L+E572X5pavJyxcblx0XHRcdEJFOiAn5q+U5Yip5pe2Jyxcblx0XHRcdEJaOiAn5Lyv5Yip5YW5Jyxcblx0XHRcdEJKOiAn6LSd5a6BJyxcblx0XHRcdEJNOiAn55m+5oWV5aSnJyxcblx0XHRcdEJUOiAn5LiN5Li5Jyxcblx0XHRcdEJPOiAn54675Yip57u05LqaJyxcblx0XHRcdEJROiAn6I235YWw5Yqg5YuS5q+U5Yy6Jyxcblx0XHRcdEJBOiAn5rOi6buRJyxcblx0XHRcdEJXOiAn5Y2a6Iyo55Om57qzJyxcblx0XHRcdEJWOiAn5biD6Z+m5bKbJyxcblx0XHRcdEJSOiAn5be06KW/Jyxcblx0XHRcdElPOiAn6Iux5bGe5Y2w5bqm5rSL6aKG5ZywJyxcblx0XHRcdEJOOiAn5rG26I6xJyxcblx0XHRcdEJHOiAn5L+d5Yqg5Yip5LqaJyxcblx0XHRcdEJGOiAn5biD5Z+657qz5rOV57SiJyxcblx0XHRcdEJJOiAn5biD6ZqG6L+qJyxcblx0XHRcdENWOiAn5L2b5b6X6KeSJyxcblx0XHRcdEtIOiAn5p+s5Z+U5a+oJyxcblx0XHRcdENNOiAn5ZaA6bqm6ZqGJyxcblx0XHRcdENBOiAn5Yqg5ou/5aSnJyxcblx0XHRcdEtZOiAn5byA5pu8576k5bKbJyxcblx0XHRcdENGOiAn5Lit6Z2eJyxcblx0XHRcdFREOiAn5LmN5b6XJyxcblx0XHRcdENMOiAn5pm65YipJyxcblx0XHRcdENOOiAn5Lit5Zu9Jyxcblx0XHRcdENYOiAn5Zyj6K+e5bKbJyxcblx0XHRcdENDOiAn56eR56eR5pav77yI5Z+65p6X77yJ576k5bKbJyxcblx0XHRcdENPOiAn5ZOl5Lym5q+U5LqaJyxcblx0XHRcdEtNOiAn56eR5pGp572XJyxcblx0XHRcdENHOiAn5Yia5p6c5YWx5ZKM5Zu9Jyxcblx0XHRcdENEOiAn5Yia5p6c5rCR5Li75YWx5ZKM5Zu9Jyxcblx0XHRcdENLOiAn5bqT5YWL576k5bKbJyxcblx0XHRcdENSOiAn5ZOl5pav6L6+6buO5YqgJyxcblx0XHRcdENJOiAn6LGh54mZ5rW35bK4Jyxcblx0XHRcdEhSOiAn5YWL572X5Zyw5LqaJyxcblx0XHRcdENVOiAn5Y+k5be0Jyxcblx0XHRcdENXOiAn5bqT5ouJ57SiJyxcblx0XHRcdENZOiAn5aGe5rWm6Lev5pavJyxcblx0XHRcdENaOiAn5o235YWLJyxcblx0XHRcdERLOiAn5Li56bqmJyxcblx0XHRcdERKOiAn5ZCJ5biD5o+QJyxcblx0XHRcdERNOiAn5aSa57Gz5bC85YWLJyxcblx0XHRcdERPOiAn5aSa57Gz5bC85YqgJyxcblx0XHRcdEVDOiAn5Y6E55Oc5aSa5bCUJyxcblx0XHRcdEVHOiAn5Z+D5Y+KJyxcblx0XHRcdFNWOiAn6JCo5bCU55Om5aSaJyxcblx0XHRcdEdROiAn6LWk6YGT5Yeg5YaF5LqaJyxcblx0XHRcdEVSOiAn5Y6E56uL54m56YeM5LqaJyxcblx0XHRcdEVFOiAn54ix5rKZ5bC85LqaJyxcblx0XHRcdFNaOiAn5pav5aiB5aOr5YWwJyxcblx0XHRcdEVUOiAn5Z+D5aGe5L+E5q+U5LqaJyxcblx0XHRcdEZLOiAn56aP5YWL5YWw576k5bKbJyxcblx0XHRcdEZPOiAn5rOV572X576k5bKbJyxcblx0XHRcdEZKOiAn5paQ5rWOJyxcblx0XHRcdEZJOiAn6Iqs5YWwJyxcblx0XHRcdEZSOiAn5rOV5Zu9Jyxcblx0XHRcdEdGOiAn5rOV5bGe5Zyt5Lqa6YKjJyxcblx0XHRcdFBGOiAn5rOV5bGe5rOi5Yip5bC86KW/5LqaJyxcblx0XHRcdFRGOiAn5rOV5bGe5Y2X6YOo5ZKM5Y2X5p6B6aKG5ZywJyxcblx0XHRcdEdBOiAn5Yqg6JOsJyxcblx0XHRcdEdNOiAn5YaI5q+U5LqaJyxcblx0XHRcdEdFOiAn5qC86bKB5ZCJ5LqaJyxcblx0XHRcdERFOiAn5b635Zu9Jyxcblx0XHRcdEdIOiAn5Yqg57qzJyxcblx0XHRcdEdJOiAn55u05biD572X6ZmAJyxcblx0XHRcdEdSOiAn5biM6IWKJyxcblx0XHRcdEdMOiAn5qC86Zm15YWwJyxcblx0XHRcdEdEOiAn5qC85p6X57qz6L6+Jyxcblx0XHRcdEdQOiAn55Oc5b63572X5pmuJyxcblx0XHRcdEdVOiAn5YWz5bKbJyxcblx0XHRcdEdUOiAn5Y2x5Zyw6ams5ouJJyxcblx0XHRcdEdHOiAn5qC56KW/Jyxcblx0XHRcdEdOOiAn5Yeg5YaF5LqaJyxcblx0XHRcdEdXOiAn5Yeg5YaF5Lqa5q+U57uNJyxcblx0XHRcdEdZOiAn5Zyt5Lqa6YKjJyxcblx0XHRcdEhUOiAn5rW35ZywJyxcblx0XHRcdEhNOiAn6LWr5b635bKb5ZKM6bqm5YWL5ZSQ57qz576k5bKbJyxcblx0XHRcdFZBOiAn5qK16JKC5YaIJyxcblx0XHRcdEhOOiAn5rSq6YO95ouJ5pavJyxcblx0XHRcdEhLOiAn5Lit5Zu96aaZ5rivJyxcblx0XHRcdEhVOiAn5YyI54mZ5YipJyxcblx0XHRcdElTOiAn5Yaw5bKbJyxcblx0XHRcdElOOiAn5Y2w5bqmJyxcblx0XHRcdElEOiAn5Y2w5bC8Jyxcblx0XHRcdElSOiAn5LyK5pyXJyxcblx0XHRcdElROiAn5LyK5ouJ5YWLJyxcblx0XHRcdElFOiAn54ix5bCU5YWwJyxcblx0XHRcdElNOiAn6ams5oGp5bKbJyxcblx0XHRcdElMOiAn5Lul6Imy5YiXJyxcblx0XHRcdElUOiAn5oSP5aSn5YipJyxcblx0XHRcdEpNOiAn54mZ5Lmw5YqgJyxcblx0XHRcdEpQOiAn5pel5pysJyxcblx0XHRcdEpFOiAn5rO96KW/Jyxcblx0XHRcdEpPOiAn57qm5pemJyxcblx0XHRcdEtaOiAn5ZOI6JCo5YWL5pav5Z2mJyxcblx0XHRcdEtFOiAn6IKv5bC85LqaJyxcblx0XHRcdEtJOiAn5Z+66YeM5be05pavJyxcblx0XHRcdEtQOiAn5YyX6Z+pJyxcblx0XHRcdEtSOiAn6Z+p5Zu9Jyxcblx0XHRcdEtXOiAn56eR5aiB54m5Jyxcblx0XHRcdEtHOiAn5ZCJ5bCU5ZCJ5pav5pav5Z2mJyxcblx0XHRcdExBOiAn6ICB5oydJyxcblx0XHRcdExWOiAn5ouJ6ISx57u05LqaJyxcblx0XHRcdExCOiAn6buO5be05aupJyxcblx0XHRcdExTOiAn6I6x57Si5omYJyxcblx0XHRcdExSOiAn5Yip5q+U6YeM5LqaJyxcblx0XHRcdExZOiAn5Yip5q+U5LqaJyxcblx0XHRcdExJOiAn5YiX5pSv5pWm5aOr55m7Jyxcblx0XHRcdExUOiAn56uL6Zm25a6bJyxcblx0XHRcdExVOiAn5Y2i5qOu5aChJyxcblx0XHRcdE1POiAn5Lit5Zu95r6z6ZeoJyxcblx0XHRcdE1HOiAn6ams6L6+5Yqg5pav5YqgJyxcblx0XHRcdE1XOiAn6ams5ouJ57u0Jyxcblx0XHRcdE1ZOiAn6ams5p2l6KW/5LqaJyxcblx0XHRcdE1WOiAn6ams5bCU5Luj5aSrJyxcblx0XHRcdE1MOiAn6ams6YeMJyxcblx0XHRcdE1UOiAn6ams6ICz5LuWJyxcblx0XHRcdE1IOiAn6ams57uN5bCU576k5bKbJyxcblx0XHRcdE1ROiAn6ams5o+Q5bC85YWLJyxcblx0XHRcdE1SOiAn5q+b6YeM5aGU5bC85LqaJyxcblx0XHRcdE1VOiAn5q+b6YeM5rGC5pavJyxcblx0XHRcdFlUOiAn6ams57qm54m5Jyxcblx0XHRcdE1YOiAn5aKo6KW/5ZOlJyxcblx0XHRcdEZNOiAn5a+G5YWL572X5bC86KW/5Lqa6IGU6YKmJyxcblx0XHRcdE1EOiAn5pGp5bCU5aSa55OmJyxcblx0XHRcdE1DOiAn5pGp57qz5ZOlJyxcblx0XHRcdE1OOiAn6JKZ5Y+kJyxcblx0XHRcdE1FOiAn6buR5bGxJyxcblx0XHRcdE1TOiAn6JKZ54m55aGe5ouJ54m5Jyxcblx0XHRcdE1BOiAn5pGp5rSb5ZOlJyxcblx0XHRcdE1aOiAn6I6r5qGR5q+U5YWLJyxcblx0XHRcdE1NOiAn57yF55S4Jyxcblx0XHRcdE5BOiAn6YKj57Gz5q+U5LqaJyxcblx0XHRcdE5SOiAn55GZ6bKBJyxcblx0XHRcdE5QOiAn5bC85rOK5bCUJyxcblx0XHRcdE5MOiAn6I235YWwJyxcblx0XHRcdE5DOiAn5paw5ZaA6YeM5aSa5bC85LqaJyxcblx0XHRcdE5aOiAn5paw6KW/5YWwJyxcblx0XHRcdE5JOiAn5bC85Yqg5ouJ55OcJyxcblx0XHRcdE5FOiAn5bC85pel5bCUJyxcblx0XHRcdE5HOiAn5bC85pel5Yip5LqaJyxcblx0XHRcdE5VOiAn57q95Z+DJyxcblx0XHRcdE5GOiAn6K+656aP5YWL5bKbJyxcblx0XHRcdE1LOiAn5YyX6ams5YW26aG/Jyxcblx0XHRcdE1QOiAn5YyX6ams6YeM5Lqa57qz576k5bKbJyxcblx0XHRcdE5POiAn5oyq5aiBJyxcblx0XHRcdE9NOiAn6Zi/5pu8Jyxcblx0XHRcdFBLOiAn5be05Z+65pav5Z2mJyxcblx0XHRcdFBXOiAn5biV5YqzJyxcblx0XHRcdFBTOiAn5be05YuS5pav5Z2mJyxcblx0XHRcdFBBOiAn5be05ou/6amsJyxcblx0XHRcdFBHOiAn5be05biD5Lqa5paw5Yeg5YaF5LqaJyxcblx0XHRcdFBZOiAn5be05ouJ5ZytJyxcblx0XHRcdFBFOiAn56eY6bKBJyxcblx0XHRcdFBIOiAn6I+y5b6L5a6+Jyxcblx0XHRcdFBOOiAn55qu54m55Yev5oGp576k5bKbJyxcblx0XHRcdFBMOiAn5rOi5YWwJyxcblx0XHRcdFBUOiAn6JGh6JCE54mZJyxcblx0XHRcdFBSOiAn5rOi5aSa6buO5ZCEJyxcblx0XHRcdFFBOiAn5Y2h5aGU5bCUJyxcblx0XHRcdFJFOiAn55WZ5bC85rGqJyxcblx0XHRcdFJPOiAn572X6ams5bC85LqaJyxcblx0XHRcdFJVOiAn5L+E572X5pavJyxcblx0XHRcdFJXOiAn5Y2i5pe66L6+Jyxcblx0XHRcdEJMOiAn5Zyj5be05rOw5YuS57GzJyxcblx0XHRcdFNIOiAn5Zyj6LWr5YuS5ou/44CB6Zi/5qOu5p2+5ZKM54m56YeM5pav5Z2mLei+vuW6k+WwvOS6micsXG5cdFx0XHRLTjogJ+Wco+WfuuiMqOWSjOWwvOe7tOaWrycsXG5cdFx0XHRMQzogJ+Wco+WNouilv+S6micsXG5cdFx0XHRNRjogJ+azleWxnuWco+mprOS4gScsXG5cdFx0XHRQTTogJ+Wco+earuWfg+WwlOWSjOWvhuWFi+mahicsXG5cdFx0XHRWQzogJ+Wco+aWh+ajrueJueWSjOagvOael+e6s+S4geaWrycsXG5cdFx0XHRXUzogJ+iQqOaRqeS6micsXG5cdFx0XHRTTTogJ+Wco+mprOWKm+ivuicsXG5cdFx0XHRTVDogJ+Wco+Wkmue+juWSjOaZruael+ilv+avlCcsXG5cdFx0XHRTQTogJ+aymeeJuemYv+aLieS8rycsXG5cdFx0XHRTTjogJ+WhnuWGheWKoOWwlCcsXG5cdFx0XHRSUzogJ+WhnuWwlOe7tOS6micsXG5cdFx0XHRTQzogJ+WhnuiIjOWwlCcsXG5cdFx0XHRTTDogJ+WhnuaLieWIqeaYgicsXG5cdFx0XHRTRzogJ+aWsOWKoOWdoScsXG5cdFx0XHRTWDogJ+iNt+WxnuWco+mprOS4gScsXG5cdFx0XHRTSzogJ+aWr+a0m+S8kOWFiycsXG5cdFx0XHRTSTogJ+aWr+a0m+aWh+WwvOS6micsXG5cdFx0XHRTQjogJ+aJgOe9l+mXqOe+pOWymycsXG5cdFx0XHRTTzogJ+e0oumprOmHjCcsXG5cdFx0XHRaQTogJ+WNl+mdnicsXG5cdFx0XHRHUzogJ+WNl+S5lOayu+S6muWSjOWNl+ahkeWogeWlh+e+pOWymycsXG5cdFx0XHRTUzogJ+WNl+iLj+S4uScsXG5cdFx0XHRFUzogJ+ilv+ePreeJmScsXG5cdFx0XHRMSzogJ+aWr+mHjOWFsOWNoScsXG5cdFx0XHRTRDogJ+iLj+S4uScsXG5cdFx0XHRTUjogJ+iLj+mHjOWNlycsXG5cdFx0XHRTSjogJ+aWr+eTpuWwlOW3tOWSjOaJrOmprOW7ticsXG5cdFx0XHRTRTogJ+eRnuWFuCcsXG5cdFx0XHRDSDogJ+eRnuWjqycsXG5cdFx0XHRTWTogJ+WPmeWIqeS6micsXG5cdFx0XHRUVzogJ+S4reWbveWPsOa5vicsXG5cdFx0XHRUSjogJ+WhlOWQieWFi+aWr+WdpicsXG5cdFx0XHRUWjogJ+WdpuahkeWwvOS6micsXG5cdFx0XHRUSDogJ+azsOWbvScsXG5cdFx0XHRUTDogJ+S4nOW4neaxticsXG5cdFx0XHRURzogJ+WkmuWTpScsXG5cdFx0XHRUSzogJ+aJmOWFi+WKsycsXG5cdFx0XHRUTzogJ+axpOWKoCcsXG5cdFx0XHRUVDogJ+eJueeri+WwvOi+vuWSjOWkmuW3tOWTpScsXG5cdFx0XHRUTjogJ+eqgeWwvOaWrycsXG5cdFx0XHRUUjogJ+Wcn+iAs+WFticsXG5cdFx0XHRUTTogJ+Wcn+W6k+abvOaWr+WdpicsXG5cdFx0XHRUQzogJ+eJueWFi+aWr+WSjOWHr+enkeaWr+e+pOWymycsXG5cdFx0XHRUVjogJ+WbvueTpuWNoicsXG5cdFx0XHRVRzogJ+S5jOW5sui+vicsXG5cdFx0XHRVQTogJ+S5jOWFi+WFsCcsXG5cdFx0XHRBRTogJ+mYv+iBlOmFiycsXG5cdFx0XHRHQjogJ+iLseWbvScsXG5cdFx0XHRVUzogJ+e+juWbvScsXG5cdFx0XHRVTTogJ+e+juWbveacrOWcn+WkluWwj+Wym+WxvycsXG5cdFx0XHRVWTogJ+S5jOaLieWcrScsXG5cdFx0XHRVWjogJ+S5jOWFueWIq+WFi+aWr+WdpicsXG5cdFx0XHRWVTogJ+eTpuWKqumYv+WbvicsXG5cdFx0XHRWRTogJ+WnlOWGheeRnuaLiScsXG5cdFx0XHRWTjogJ+i2iuWNlycsXG5cdFx0XHRWRzogJ+iLseWxnue7tOWwlOS6rOe+pOWymycsXG5cdFx0XHRWSTogJ+e+juWxnue7tOWwlOS6rOe+pOWymycsXG5cdFx0XHRXRjogJ+eTpuWIqeaWr+WSjOWvjOWbvue6sycsXG5cdFx0XHRFSDogJ+ilv+aSkuWTiOaLiScsXG5cdFx0XHRZRTogJ+S5n+mXqCcsXG5cdFx0XHRaTTogJ+i1nuavlOS6micsXG5cdFx0XHRaVzogJ+a0peW3tOW4g+mfpicsXG5cdFx0fTtcblx0fVxuXG5cdHJldHVybiB7XG5cdFx0QUY6ICfpmL/lr4zmsZcnLFxuXHRcdEFYOiAn5aWl5YWwJyxcblx0XHRBTDogJ+mYv+WwlOW3tOWwvOS6micsXG5cdFx0RFo6ICfpmL/lsJTlj4rliKnkuponLFxuXHRcdEFTOiAn576O5bGe6JCo5pGp5LqaJyxcblx0XHRBRDogJ+WuiemBk+WwlCcsXG5cdFx0QU86ICflronlk6Xmi4knLFxuXHRcdEFJOiAn5a6J5Zyt5ouJJyxcblx0XHRBUTogJ+WNl+aegea0sicsXG5cdFx0QUc6ICflronmj5Dnk5zlkozlt7TluIPovr4nLFxuXHRcdEFSOiAn6Zi/5qC55bu3Jyxcblx0XHRBTTogJ+S6mue+juWwvOS6micsXG5cdFx0QVc6ICfpmL/psoHlt7QnLFxuXHRcdEFVOiAn5r6z5aSn5Yip5LqaJyxcblx0XHRBVDogJ+WlpeWcsOWIqScsXG5cdFx0QVo6ICfpmL/loZ7mi5znloYnLFxuXHRcdEJTOiAn5be05ZOI6amsJyxcblx0XHRCSDogJ+W3tOaelycsXG5cdFx0QkQ6ICflrZ/liqDmi4nlm70nLFxuXHRcdEJCOiAn5be05be05aSa5pavJyxcblx0XHRCWTogJ+eZveS/hOe9l+aWrycsXG5cdFx0QkU6ICfmr5TliKnml7YnLFxuXHRcdEJaOiAn5Lyv5Yip5YW5Jyxcblx0XHRCSjogJ+i0neWugScsXG5cdFx0Qk06ICfnmb7mhZXlpKcnLFxuXHRcdEJUOiAn5LiN5Li5Jyxcblx0XHRCTzogJ+eOu+WIqee7tOS6micsXG5cdFx0QlE6ICfojbflhbDliqDli5Lmr5TljLonLFxuXHRcdEJBOiAn5rOi6buRJyxcblx0XHRCVzogJ+WNmuiMqOeTpue6sycsXG5cdFx0QlY6ICfluIPpn6blspsnLFxuXHRcdEJSOiAn5be06KW/Jyxcblx0XHRJTzogJ+iLseWxnuWNsOW6pua0i+mihuWcsCcsXG5cdFx0Qk46ICfmlofojrEnLFxuXHRcdEJHOiAn5L+d5Yqg5Yip5LqaJyxcblx0XHRCRjogJ+W4g+Wfuue6s+azlee0oicsXG5cdFx0Qkk6ICfluIPpmobov6onLFxuXHRcdENWOiAn5L2b5b6X6KeSJyxcblx0XHRLSDogJ+afrOWflOWvqCcsXG5cdFx0Q006ICflloDpuqbpmoYnLFxuXHRcdENBOiAn5Yqg5ou/5aSnJyxcblx0XHRLWTogJ+W8gOabvOe+pOWymycsXG5cdFx0Q0Y6ICfkuK3pnZ4nLFxuXHRcdFREOiAn5LmN5b6XJyxcblx0XHRDTDogJ+aZuuWIqScsXG5cdFx0Q046ICfkuK3lm70nLFxuXHRcdENYOiAn5Zyj6K+e5bKbJyxcblx0XHRDQzogJ+enkeenkeaWr++8iOWfuuael++8iee+pOWymycsXG5cdFx0Q086ICflk6XkvKbmr5TkuponLFxuXHRcdEtNOiAn56eR5pGp572XJyxcblx0XHRDRzogJ+WImuaenOWFseWSjOWbvScsXG5cdFx0Q0Q6ICfliJrmnpzmsJHkuLvlhbHlkozlm70nLFxuXHRcdENLOiAn5bqT5YWL576k5bKbJyxcblx0XHRDUjogJ+WTpeaWr+i+vum7juWKoCcsXG5cdFx0Q0k6ICfnp5Hnibnov6rnk6YnLFxuXHRcdEhSOiAn5YWL572X5Zyw5LqaJyxcblx0XHRDVTogJ+WPpOW3tCcsXG5cdFx0Q1c6ICflupPmi4nntKInLFxuXHRcdENZOiAn5aGe5rWm6Lev5pavJyxcblx0XHRDWjogJ+aNt+WFiycsXG5cdFx0REs6ICfkuLnpuqYnLFxuXHRcdERKOiAn5ZCJ5biD5o+QJyxcblx0XHRETTogJ+Wkmuexs+WwvOWFiycsXG5cdFx0RE86ICflpJrnsbPlsLzliqAnLFxuXHRcdEVDOiAn5Y6E55Oc5aSa5bCUJyxcblx0XHRFRzogJ+Wfg+WPiicsXG5cdFx0U1Y6ICfokKjlsJTnk6blpJonLFxuXHRcdEdROiAn6LWk6YGT5Yeg5YaF5LqaJyxcblx0XHRFUjogJ+WOhOeri+eJuemHjOS6micsXG5cdFx0RUU6ICfniLHmspnlsLzkuponLFxuXHRcdFNaOiAn5pav5aiB5aOr5YWwJyxcblx0XHRFVDogJ+Wfg+WhnuS/hOavlOS6micsXG5cdFx0Rks6ICfnpo/lhYvlhbDnvqTlspsnLFxuXHRcdEZPOiAn5rOV572X576k5bKbJyxcblx0XHRGSjogJ+aWkOa1jicsXG5cdFx0Rkk6ICfoiqzlhbAnLFxuXHRcdEZSOiAn5rOV5Zu9Jyxcblx0XHRHRjogJ+azleWxnuWcreS6mumCoycsXG5cdFx0UEY6ICfms5XlsZ7ms6LliKnlsLzopb/kuponLFxuXHRcdFRGOiAn5rOV5bGe5Y2X6YOo5ZKM5Y2X5p6B6aKG5ZywJyxcblx0XHRHQTogJ+WKoOiTrCcsXG5cdFx0R006ICflhojmr5TkuponLFxuXHRcdEdFOiAn5qC86bKB5ZCJ5LqaJyxcblx0XHRERTogJ+W+t+WbvScsXG5cdFx0R0g6ICfliqDnurMnLFxuXHRcdEdJOiAn55u05biD572X6ZmAJyxcblx0XHRHUjogJ+W4jOiFiicsXG5cdFx0R0w6ICfmoLzpmbXlhbAnLFxuXHRcdEdEOiAn5qC85p6X57qz6L6+Jyxcblx0XHRHUDogJ+eTnOW+t+e9l+aZricsXG5cdFx0R1U6ICflhbPlspsnLFxuXHRcdEdUOiAn5Y2x5Zyw6ams5ouJJyxcblx0XHRHRzogJ+agueilvycsXG5cdFx0R046ICflh6DlhoXkuponLFxuXHRcdEdXOiAn5Yeg5YaF5Lqa5q+U57uNJyxcblx0XHRHWTogJ+WcreS6mumCoycsXG5cdFx0SFQ6ICfmtbflnLAnLFxuXHRcdEhNOiAn6LWr5b635bKb5ZKM6bqm5YWL5ZSQ57qz576k5bKbJyxcblx0XHRWQTogJ+aiteiSguWGiCcsXG5cdFx0SE46ICfmtKrpg73mi4nmlq8nLFxuXHRcdEhLOiAn5Lit5Zu96aaZ5rivJyxcblx0XHRIVTogJ+WMiOeJmeWIqScsXG5cdFx0SVM6ICflhrDlspsnLFxuXHRcdElOOiAn5Y2w5bqmJyxcblx0XHRJRDogJ+WNsOWwvCcsXG5cdFx0SVI6ICfkvIrmnJcnLFxuXHRcdElROiAn5LyK5ouJ5YWLJyxcblx0XHRJRTogJ+eIseWwlOWFsCcsXG5cdFx0SU06ICfpqazmganlspsnLFxuXHRcdElMOiAn5Lul6Imy5YiXJyxcblx0XHRJVDogJ+aEj+Wkp+WIqScsXG5cdFx0Sk06ICfniZnkubDliqAnLFxuXHRcdEpQOiAn5pel5pysJyxcblx0XHRKRTogJ+azveilvycsXG5cdFx0Sk86ICfnuqbml6YnLFxuXHRcdEtaOiAn5ZOI6JCo5YWL5pav5Z2mJyxcblx0XHRLRTogJ+iCr+WwvOS6micsXG5cdFx0S0k6ICfln7rph4zlt7Tmlq8nLFxuXHRcdEtQOiAn5pyd6bKcJyxcblx0XHRLUjogJ+mfqeWbvScsXG5cdFx0S1c6ICfnp5HlqIHnibknLFxuXHRcdEtHOiAn5ZCJ5bCU5ZCJ5pav5pav5Z2mJyxcblx0XHRMQTogJ+iAgeaMnScsXG5cdFx0TFY6ICfmi4nohLHnu7TkuponLFxuXHRcdExCOiAn6buO5be05aupJyxcblx0XHRMUzogJ+iOsee0ouaJmCcsXG5cdFx0TFI6ICfliKnmr5Tph4zkuponLFxuXHRcdExZOiAn5Yip5q+U5LqaJyxcblx0XHRMSTogJ+WIl+aUr+aVpuWjq+eZuycsXG5cdFx0TFQ6ICfnq4vpmbblrpsnLFxuXHRcdExVOiAn5Y2i5qOu5aChJyxcblx0XHRNTzogJ+S4reWbvea+s+mXqCcsXG5cdFx0TUc6ICfpqazovr7liqDmlq/liqAnLFxuXHRcdE1XOiAn6ams5ouJ57u0Jyxcblx0XHRNWTogJ+mprOadpeilv+S6micsXG5cdFx0TVY6ICfpqazlsJTku6PlpKsnLFxuXHRcdE1MOiAn6ams6YeMJyxcblx0XHRNVDogJ+mprOiAs+S7licsXG5cdFx0TUg6ICfpqaznu43lsJTnvqTlspsnLFxuXHRcdE1ROiAn6ams5o+Q5bC85YWLJyxcblx0XHRNUjogJ+avm+mHjOWhlOWwvOS6micsXG5cdFx0TVU6ICfmr5vph4zmsYLmlq8nLFxuXHRcdFlUOiAn6ams57qm54m5Jyxcblx0XHRNWDogJ+WiqOilv+WTpScsXG5cdFx0Rk06ICflr4blhYvnvZflsLzopb/kuprogZTpgqYnLFxuXHRcdE1EOiAn5pGp5bCU5aSa55OmJyxcblx0XHRNQzogJ+aRqee6s+WTpScsXG5cdFx0TU46ICfokpnlj6QnLFxuXHRcdE1FOiAn6buR5bGxJyxcblx0XHRNUzogJ+iSmeeJueWhnuaLieeJuScsXG5cdFx0TUE6ICfmkanmtJvlk6UnLFxuXHRcdE1aOiAn6I6r5qGR5q+U5YWLJyxcblx0XHRNTTogJ+e8heeUuCcsXG5cdFx0TkE6ICfnurPnsbPmr5TkuponLFxuXHRcdE5SOiAn55GZ6bKBJyxcblx0XHROUDogJ+WwvOaziuWwlCcsXG5cdFx0Tkw6ICfojbflhbAnLFxuXHRcdE5DOiAn5paw5ZaA6YeM5aSa5bC85LqaJyxcblx0XHROWjogJ+aWsOilv+WFsCcsXG5cdFx0Tkk6ICflsLzliqDmi4nnk5wnLFxuXHRcdE5FOiAn5bC85pel5bCUJyxcblx0XHRORzogJ+WwvOaXpeWIqeS6micsXG5cdFx0TlU6ICfnur3ln4MnLFxuXHRcdE5GOiAn6K+656aP5YWL5bKbJyxcblx0XHRNSzogJ+WMl+mprOWFtumhvycsXG5cdFx0TVA6ICfljJfpqazph4zkuprnurPnvqTlspsnLFxuXHRcdE5POiAn5oyq5aiBJyxcblx0XHRPTTogJ+mYv+abvCcsXG5cdFx0UEs6ICflt7Tln7rmlq/lnaYnLFxuXHRcdFBXOiAn5biV5YqzJyxcblx0XHRQUzogJ+W3tOWLkuaWr+WdpicsXG5cdFx0UEE6ICflt7Tmi7/pqawnLFxuXHRcdFBHOiAn5be05biD5Lqa5paw5Yeg5YaF5LqaJyxcblx0XHRQWTogJ+W3tOaLieWcrScsXG5cdFx0UEU6ICfnp5jpsoEnLFxuXHRcdFBIOiAn6I+y5b6L5a6+Jyxcblx0XHRQTjogJ+earueJueWHr+aBqee+pOWymycsXG5cdFx0UEw6ICfms6LlhbAnLFxuXHRcdFBUOiAn6JGh6JCE54mZJyxcblx0XHRQUjogJ+azouWkmum7juWQhCcsXG5cdFx0UUE6ICfljaHloZTlsJQnLFxuXHRcdFJFOiAn55WZ5bC85rGqJyxcblx0XHRSTzogJ+e9l+mprOWwvOS6micsXG5cdFx0UlU6ICfkv4TnvZfmlq8nLFxuXHRcdFJXOiAn5Y2i5pe66L6+Jyxcblx0XHRCTDogJ+Wco+W3tOazsOWLkuexsycsXG5cdFx0U0g6ICflnKPotavli5Lmi7/jgIHpmL/mo67mnb7lkoznibnph4zmlq/lnaYt6L6+5bqT5bC85LqaJyxcblx0XHRLTjogJ+Wco+WfuuiMqOWSjOWwvOe7tOaWrycsXG5cdFx0TEM6ICflnKPljaLopb/kuponLFxuXHRcdE1GOiAn5rOV5bGe5Zyj6ams5LiBJyxcblx0XHRQTTogJ+Wco+earuWfg+WwlOWSjOWvhuWFi+mahicsXG5cdFx0VkM6ICflnKPmlofmo67nibnlkozmoLzmnpfnurPkuIHmlq8nLFxuXHRcdFdTOiAn6JCo5pGp5LqaJyxcblx0XHRTTTogJ+Wco+mprOWKm+ivuicsXG5cdFx0U1Q6ICflnKPlpJrnvo7lkozmma7mnpfopb/mr5QnLFxuXHRcdFNBOiAn5rKZ54m56Zi/5ouJ5LyvJyxcblx0XHRTTjogJ+WhnuWGheWKoOWwlCcsXG5cdFx0UlM6ICfloZ7lsJTnu7TkuponLFxuXHRcdFNDOiAn5aGe6IiM5bCUJyxcblx0XHRTTDogJ+WhnuaLieWIqeaYgicsXG5cdFx0U0c6ICfmlrDliqDlnaEnLFxuXHRcdFNYOiAn6I235bGe5Zyj6ams5LiBJyxcblx0XHRTSzogJ+aWr+a0m+S8kOWFiycsXG5cdFx0U0k6ICfmlq/mtJvmloflsLzkuponLFxuXHRcdFNCOiAn5omA572X6Zeo576k5bKbJyxcblx0XHRTTzogJ+e0oumprOmHjCcsXG5cdFx0WkE6ICfljZfpnZ4nLFxuXHRcdEdTOiAn5Y2X5LmU5rK75Lqa5ZKM5Y2X5qGR5aiB5aWH576k5bKbJyxcblx0XHRTUzogJ+WNl+iLj+S4uScsXG5cdFx0RVM6ICfopb/nj63niZknLFxuXHRcdExLOiAn5pav6YeM5YWw5Y2hJyxcblx0XHRTRDogJ+iLj+S4uScsXG5cdFx0U1I6ICfoi4/ph4zljZcnLFxuXHRcdFNKOiAn5pav55Om5bCU5be05ZKM5oms6ams5bu2Jyxcblx0XHRTRTogJ+eRnuWFuCcsXG5cdFx0Q0g6ICfnkZ7lo6snLFxuXHRcdFNZOiAn5Y+Z5Yip5LqaJyxcblx0XHRUVzogJ+S4reWbveiHuua5vicsXG5cdFx0VEo6ICfloZTlkInlhYvmlq/lnaYnLFxuXHRcdFRaOiAn5Z2m5qGR5bC85LqaJyxcblx0XHRUSDogJ+azsOWbvScsXG5cdFx0VEw6ICfkuJzluJ3msbYnLFxuXHRcdFRHOiAn5aSa5ZOlJyxcblx0XHRUSzogJ+aJmOWFi+WKsycsXG5cdFx0VE86ICfmsaTliqAnLFxuXHRcdFRUOiAn54m556uL5bC86L6+5ZKM5aSa5be05ZOlJyxcblx0XHRUTjogJ+eqgeWwvOaWrycsXG5cdFx0VFI6ICflnJ/ogLPlhbYnLFxuXHRcdFRNOiAn5Zyf5bqT5pu85pav5Z2mJyxcblx0XHRUQzogJ+eJueWFi+aWr+WSjOWHr+enkeaWr+e+pOWymycsXG5cdFx0VFY6ICflm77nk6bljaInLFxuXHRcdFVHOiAn5LmM5bmy6L6+Jyxcblx0XHRVQTogJ+S5jOWFi+WFsCcsXG5cdFx0QUU6ICfpmL/ogZTphYsnLFxuXHRcdEdCOiAn6Iux5Zu9Jyxcblx0XHRVUzogJ+e+juWbvScsXG5cdFx0VU06ICfnvo7lm73mnKzlnJ/lpJblsI/lspvlsb8nLFxuXHRcdFVZOiAn5LmM5ouJ5ZytJyxcblx0XHRVWjogJ+S5jOWFueWIq+WFi+aWr+WdpicsXG5cdFx0VlU6ICfnk6bliqrpmL/lm74nLFxuXHRcdFZFOiAn5aeU5YaF55Ge5ouJJyxcblx0XHRWTjogJ+i2iuWNlycsXG5cdFx0Vkc6ICfoi7HlsZ7nu7TlsJTkuqznvqTlspsnLFxuXHRcdFZJOiAn576O5bGe57u05bCU5Lqs576k5bKbJyxcblx0XHRXRjogJ+eTpuWIqeaWr+WSjOWvjOWbvue6sycsXG5cdFx0RUg6ICfopb/mkpLlk4jmi4knLFxuXHRcdFlFOiAn5Lmf6ZeoJyxcblx0XHRaTTogJ+i1nuavlOS6micsXG5cdFx0Wlc6ICfmtKXlt7TluIPpn6YnLFxuXHR9O1xufTtcblxuY29uc3QgZ2V0UmVnaW9uTmFtZUxpc3QgPSAoKSA9PiB7XG5cdGlmIChbJ3poLWhhbnQnLCAnemgtaGsnLCAnemgtbW8nLCAnemgtdHcnXS5pbmNsdWRlcyhXR19VU0VSX0xBTkdVQUdFKSkge1xuXHRcdHJldHVybiB7XG5cdFx0XHRBSDogJ+WuieW+vScsXG5cdFx0XHRCSjogJ+WMl+S6rCcsXG5cdFx0XHRDUTogJ+mHjeaFticsXG5cdFx0XHRGSjogJ+emj+W7uicsXG5cdFx0XHRHRDogJ+W7o+adsScsXG5cdFx0XHRHUzogJ+eUmOiChScsXG5cdFx0XHRHWDogJ+W7o+ilvycsXG5cdFx0XHRHWjogJ+iytOW3nicsXG5cdFx0XHRIQTogJ+ays+WNlycsXG5cdFx0XHRIQjogJ+a5luWMlycsXG5cdFx0XHRIRTogJ+ays+WMlycsXG5cdFx0XHRISTogJ+a1t+WNlycsXG5cdFx0XHRITDogJ+m7kem+jeaxnycsXG5cdFx0XHRITjogJ+a5luWNlycsXG5cdFx0XHRKTDogJ+WQieaelycsXG5cdFx0XHRKUzogJ+axn+iYhycsXG5cdFx0XHRKWDogJ+axn+ilvycsXG5cdFx0XHRMTjogJ+mBvOWvpycsXG5cdFx0XHROTTogJ+WFp+iSmeWPpCcsXG5cdFx0XHROWDogJ+Wvp+WkjycsXG5cdFx0XHRRSDogJ+mdkua1tycsXG5cdFx0XHRTQzogJ+Wbm+W3nScsXG5cdFx0XHRTRDogJ+WxseadsScsXG5cdFx0XHRTSDogJ+S4iua1tycsXG5cdFx0XHRTTjogJ+mZneilvycsXG5cdFx0XHRTWDogJ+WxseilvycsXG5cdFx0XHRUSjogJ+Wkqea0pScsXG5cdFx0XHRYSjogJ+aWsOeWhicsXG5cdFx0XHRYWjogJ+ilv+iXjycsXG5cdFx0XHRZTjogJ+mbsuWNlycsXG5cdFx0XHRaSjogJ+a1meaxnycsXG5cdFx0fTtcblx0fVxuXG5cdHJldHVybiB7XG5cdFx0QUg6ICflronlvr0nLFxuXHRcdEJKOiAn5YyX5LqsJyxcblx0XHRDUTogJ+mHjeW6hicsXG5cdFx0Rko6ICfnpo/lu7onLFxuXHRcdEdEOiAn5bm/5LicJyxcblx0XHRHUzogJ+eUmOiCgycsXG5cdFx0R1g6ICflub/opb8nLFxuXHRcdEdaOiAn6LS15beeJyxcblx0XHRIQTogJ+ays+WNlycsXG5cdFx0SEI6ICfmuZbljJcnLFxuXHRcdEhFOiAn5rKz5YyXJyxcblx0XHRISTogJ+a1t+WNlycsXG5cdFx0SEw6ICfpu5HpvpnmsZ8nLFxuXHRcdEhOOiAn5rmW5Y2XJyxcblx0XHRKTDogJ+WQieaelycsXG5cdFx0SlM6ICfmsZ/oi48nLFxuXHRcdEpYOiAn5rGf6KW/Jyxcblx0XHRMTjogJ+i+veWugScsXG5cdFx0Tk06ICflhoXokpnlj6QnLFxuXHRcdE5YOiAn5a6B5aSPJyxcblx0XHRRSDogJ+mdkua1tycsXG5cdFx0U0M6ICflm5vlt50nLFxuXHRcdFNEOiAn5bGx5LicJyxcblx0XHRTSDogJ+S4iua1tycsXG5cdFx0U046ICfpmZXopb8nLFxuXHRcdFNYOiAn5bGx6KW/Jyxcblx0XHRUSjogJ+Wkqea0pScsXG5cdFx0WEo6ICfmlrDnloYnLFxuXHRcdFhaOiAn6KW/6JePJyxcblx0XHRZTjogJ+S6keWNlycsXG5cdFx0Wko6ICfmtZnmsZ8nLFxuXHR9O1xufTtcblxuZXhwb3J0IHtnZXRDb3VudHJ5T3JBcmVhTmFtZUxpc3QsIGdldFJlZ2lvbk5hbWVMaXN0fTtcbiIsICJpbXBvcnQge2dldENvdW50cnlPckFyZWFOYW1lTGlzdCwgZ2V0UmVnaW9uTmFtZUxpc3R9IGZyb20gJy4vbmFtZSc7XG5cbnR5cGUgQ291bnRyeU9yQXJlYU5hbWVMaXN0ID0gUmV0dXJuVHlwZTx0eXBlb2YgZ2V0Q291bnRyeU9yQXJlYU5hbWVMaXN0PjtcbnR5cGUgUmVnaW9uTmFtZUxpc3QgPSBSZXR1cm5UeXBlPHR5cGVvZiBnZXRSZWdpb25OYW1lTGlzdD47XG5cbmNvbnN0IGNvdW50cnlPckFyZWFMaXN0OiBDb3VudHJ5T3JBcmVhTmFtZUxpc3QgPSBnZXRDb3VudHJ5T3JBcmVhTmFtZUxpc3QoKTtcbmNvbnN0IHJlZ2lvbkxpc3Q6IFJlZ2lvbk5hbWVMaXN0ID0gZ2V0UmVnaW9uTmFtZUxpc3QoKTtcblxuY29uc3QgZ2V0Q291bnRyeU9yQXJlYU5hbWUgPSA8VCBleHRlbmRzIGtleW9mIENvdW50cnlPckFyZWFOYW1lTGlzdD4oa2V5OiBUKTogQ291bnRyeU9yQXJlYU5hbWVMaXN0W1RdIHwgdW5kZWZpbmVkID0+IHtcblx0cmV0dXJuIGNvdW50cnlPckFyZWFMaXN0W2tleV07XG59O1xuXG5jb25zdCBnZXRSZWdpb25OYW1lID0gPFQgZXh0ZW5kcyBrZXlvZiBSZWdpb25OYW1lTGlzdD4oa2V5OiBUKTogUmVnaW9uTmFtZUxpc3RbVF0gfCB1bmRlZmluZWQgPT4ge1xuXHRyZXR1cm4gcmVnaW9uTGlzdFtrZXldO1xufTtcblxuZXhwb3J0IHt0eXBlIENvdW50cnlPckFyZWFOYW1lTGlzdCwgdHlwZSBSZWdpb25OYW1lTGlzdCwgZ2V0Q291bnRyeU9yQXJlYU5hbWUsIGdldFJlZ2lvbk5hbWV9O1xuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7Q0xBU1NfTkFNRSwgQ0xBU1NfTkFNRV9JQ09OLCBDTEFTU19OQU1FX1RFWFQsIFdHX1JFTEVWQU5UX1VTRVJfTkFNRSwgV0dfU0NSSVBULCBXR19TS0lOfSBmcm9tICcuL2NvbnN0YW50JztcbmltcG9ydCB7dHlwZSBDb3VudHJ5T3JBcmVhTmFtZUxpc3QsIHR5cGUgUmVnaW9uTmFtZUxpc3QsIGdldENvdW50cnlPckFyZWFOYW1lLCBnZXRSZWdpb25OYW1lfSBmcm9tICcuL3V0aWwvZ2V0TmFtZSc7XG5pbXBvcnQgUmVhY3QgZnJvbSAnZXh0LmdhZGdldC5SZWFjdCc7XG5pbXBvcnQgdHlwZSB7U3RvcmVHZW9JbmZvfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9pMThuJztcblxuY29uc3QgYXBwZW5kSWNvbiA9IChcblx0JGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+LFxuXHR7XG5cdFx0aWNvbixcblx0XHRpbmRpY2F0b3JUZXh0LFxuXHRcdHNwYW5DbGFzcyxcblx0fToge1xuXHRcdGljb246ICdnbG9iZScgfCAnaGVscE5vdGljZSc7XG5cdFx0aW5kaWNhdG9yVGV4dDogc3RyaW5nO1xuXHRcdHNwYW5DbGFzczogJ2dyZWVuJyB8ICdvcmFuZ2UnO1xuXHR9XG4pOiB2b2lkID0+IHtcblx0Y29uc3QgaXBMb2NhdGlvbkRlc2M6IHN0cmluZyA9IGdldE1lc3NhZ2UoJ0xvY2F0aW9uJykgKyBnZXRNZXNzYWdlKCc6Jyk7XG5cdGNvbnN0IHRleHQ6IHN0cmluZyA9IGljb24gPT09ICdnbG9iZScgPyBpcExvY2F0aW9uRGVzYyArIGluZGljYXRvclRleHQgOiBpbmRpY2F0b3JUZXh0ID8/ICcnO1xuXG5cdGNvbnN0IHRhZyA9XG5cdFx0V0dfU0tJTiA9PT0gJ2NpdGl6ZW4nID8gKFxuXHRcdFx0PHNlY3Rpb24gY2xhc3NOYW1lPXtbQ0xBU1NfTkFNRSwgYCR7Q0xBU1NfTkFNRX0tJHtzcGFuQ2xhc3N9YF19IC8+XG5cdFx0KSA6IFsndmVjdG9yJywgJ3ZlY3Rvci0yMDIyJywgJ2dvbmdiaSddLmluY2x1ZGVzKFdHX1NLSU4pID8gKFxuXHRcdFx0PGxpIGNsYXNzTmFtZT17W0NMQVNTX05BTUUsIGAke0NMQVNTX05BTUV9LSR7c3BhbkNsYXNzfWBdfSAvPlxuXHRcdCkgOiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17W0NMQVNTX05BTUUsIGAke0NMQVNTX05BTUV9LSR7c3BhbkNsYXNzfWBdfSAvPlxuXHRcdCk7XG5cdGNvbnN0IGluZGljYXRvcklubmVyID0gKFxuXHRcdDw+XG5cdFx0XHQ8c3BhbiBjbGFzc05hbWU9e1tDTEFTU19OQU1FX0lDT04sIGAke0NMQVNTX05BTUVfSUNPTn0tJHtpY29ufWBdfSBhcmlhLWxhYmVsPXt0ZXh0fT48L3NwYW4+XG5cdFx0XHQ8c3BhbiBjbGFzc05hbWU9e0NMQVNTX05BTUVfVEVYVH0+e3RleHR9PC9zcGFuPlxuXHRcdDwvPlxuXHQpO1xuXG5cdGNvbnN0ICR0YXJnZXQ6IEpRdWVyeSA9ICRib2R5LmZpbmQoT1BUSU9OUy5tb3VudFBvaW50U2VsZWN0b3IpO1xuXHQkKHRhZykuYXBwZW5kKGluZGljYXRvcklubmVyKS5wcmVwZW5kVG8oJHRhcmdldCk7XG59O1xuXG5jb25zdCBhcHBlbmRHZW9JY29uID0gYXN5bmMgKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IFByb21pc2U8dm9pZD4gPT4ge1xuXHRjb25zdCBzdG9yZVBhZ2VUaXRsZTogc3RyaW5nID0gYFVzZXI6JHtXR19SRUxFVkFOVF9VU0VSX05BTUV9L0dlb0lQLmpzb25gO1xuXG5cdHRyeSB7XG5cdFx0Y29uc3Qge2NvdW50cnksIGNvdW50cnlPckFyZWEsIHJlZ2lvbn0gPSAoYXdhaXQgJC5nZXRKU09OKFxuXHRcdFx0bmV3IG13LlVyaShXR19TQ1JJUFQpXG5cdFx0XHRcdC5leHRlbmQoe1xuXHRcdFx0XHRcdGFjdGlvbjogJ3JhdycsXG5cdFx0XHRcdFx0dGl0bGU6IHN0b3JlUGFnZVRpdGxlLFxuXHRcdFx0XHR9KVxuXHRcdFx0XHQudG9TdHJpbmcoKVxuXHRcdCkpIGFzIFN0b3JlR2VvSW5mbyAmIHtcblx0XHRcdGNvdW50cnk/OiBzdHJpbmc7XG5cdFx0fTtcblx0XHRjb25zdCBsb2NhdGlvbjogU3RvcmVHZW9JbmZvWydjb3VudHJ5T3JBcmVhJ10gPSBjb3VudHJ5ID8/IGNvdW50cnlPckFyZWEgPz8gJyc7XG5cblx0XHRjb25zdCBjb3VudHJ5T3JBcmVhTmFtZTogc3RyaW5nID1cblx0XHRcdGdldENvdW50cnlPckFyZWFOYW1lKGxvY2F0aW9uIGFzIGtleW9mIENvdW50cnlPckFyZWFOYW1lTGlzdCkgPz8gZ2V0TWVzc2FnZSgnVW5rbm93bicpO1xuXHRcdGNvbnN0IHJlZ2lvbk5hbWU6IHN0cmluZyA9IGxvY2F0aW9uID09PSAnQ04nID8gZ2V0UmVnaW9uTmFtZShyZWdpb24gYXMga2V5b2YgUmVnaW9uTmFtZUxpc3QpID8/ICcnIDogJyc7XG5cblx0XHRhcHBlbmRJY29uKCRib2R5LCB7XG5cdFx0XHRpY29uOiAnZ2xvYmUnLFxuXHRcdFx0aW5kaWNhdG9yVGV4dDogY291bnRyeU9yQXJlYU5hbWUgKyByZWdpb25OYW1lLFxuXHRcdFx0c3BhbkNsYXNzOiAnZ3JlZW4nLFxuXHRcdH0pO1xuXHR9IGNhdGNoIChlcnJvcjogdW5rbm93bikge1xuXHRcdGNvbnNvbGUuZXJyb3IoJ1tHZW9Mb2NhdGlvblJlYWRlcl0gQWpheCBlcnJvciBpbiBgYXBwZW5kR2VvSWNvbmAgbWV0aG9kOicsIGVycm9yKTtcblx0XHRhcHBlbmRJY29uKCRib2R5LCB7XG5cdFx0XHRpY29uOiAnaGVscE5vdGljZScsXG5cdFx0XHRpbmRpY2F0b3JUZXh0OiBnZXRNZXNzYWdlKCdVbmtub3duJyksXG5cdFx0XHRzcGFuQ2xhc3M6ICdvcmFuZ2UnLFxuXHRcdH0pO1xuXHR9XG59O1xuXG5leHBvcnQge2FwcGVuZEdlb0ljb24sIGFwcGVuZEljb259O1xuIiwgImltcG9ydCB7bG9jYWxpemV9IGZyb20gJ2V4dC5nYWRnZXQuaTE4bic7XG5cbmNvbnN0IGdldEkxOG5NZXNzYWdlcyA9ICgpID0+IHtcblx0cmV0dXJuIHtcblx0XHQnOic6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnOiAnLFxuXHRcdFx0amE6ICfvvJonLFxuXHRcdFx0emg6ICfvvJonLFxuXHRcdH0pLFxuXHRcdFVua25vd246IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnVW5rbm93biBMb2NhdGlvbicsXG5cdFx0XHRqYTogJ+acquefpUlQ5Zyw5Z+fJyxcblx0XHRcdCd6aC1oYW5zJzogJ+acquefpUlQ5bGe5ZywJyxcblx0XHRcdCd6aC1oYW50JzogJ+acquefpUlQ5bGs5ZywJyxcblx0XHR9KSxcblx0XHRMb2NhdGlvbjogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdJUCBMb2NhdGlvbicsXG5cdFx0XHRqYTogJ0lQ5Zyw5Z+fJyxcblx0XHRcdCd6aC1oYW5zJzogJ0lQ5bGe5ZywJyxcblx0XHRcdCd6aC1oYW50JzogJ0lQ5bGs5ZywJyxcblx0XHR9KSxcblx0fTtcbn07XG5cbmNvbnN0IGkxOG5NZXNzYWdlcyA9IGdldEkxOG5NZXNzYWdlcygpO1xuXG5jb25zdCBnZXRNZXNzYWdlOiBHZXRNZXNzYWdlczx0eXBlb2YgaTE4bk1lc3NhZ2VzPiA9IChrZXkpID0+IHtcblx0cmV0dXJuIGkxOG5NZXNzYWdlc1trZXldIHx8IGtleTtcbn07XG5cbmV4cG9ydCB7Z2V0TWVzc2FnZX07XG4iLCAiaW1wb3J0IHtVU0VSX1NDUklQVF9MSVNULCBVU0VSX1dFQk1BU1RFUl9MSVNULCBXR19SRUxFVkFOVF9VU0VSX05BTUV9IGZyb20gJy4vY29uc3RhbnQnO1xuaW1wb3J0IHthcGl9IGZyb20gJy4vYXBpJztcbmltcG9ydCB7YXBwZW5kR2VvSWNvbn0gZnJvbSAnLi9hcHBlbmRHZW9JY29uJztcbmltcG9ydCB7Z2V0Qm9keX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxuY29uc3QgYWRkRWxlbWVudCA9IGFzeW5jICgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0Y29uc3QgcXVlcnlVc2VyR3JvdXBzUGFyYW1zOiBBcGlRdWVyeVVzZXJzUGFyYW1zID0ge1xuXHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0bGlzdDogJ3VzZXJzJyxcblx0XHR1c3VzZXJzOiBXR19SRUxFVkFOVF9VU0VSX05BTUUsXG5cdFx0dXNwcm9wOiAnZ3JvdXBzJyxcblx0fTtcblxuXHR0cnkge1xuXHRcdGNvbnN0IHtcblx0XHRcdHF1ZXJ5OiB7XG5cdFx0XHRcdHVzZXJzOiBbe2dyb3Vwc31dLFxuXHRcdFx0fSxcblx0XHR9OiB7XG5cdFx0XHRxdWVyeToge1xuXHRcdFx0XHR1c2VyczogW1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdGdyb3Vwczogc3RyaW5nW107XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XTtcblx0XHRcdH07XG5cdFx0fSA9IChhd2FpdCBhcGkuZ2V0KHF1ZXJ5VXNlckdyb3Vwc1BhcmFtcykpIGFzIG5ldmVyO1xuXG5cdFx0Y29uc3QgJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+ID0gYXdhaXQgZ2V0Qm9keSgpO1xuXG5cdFx0aWYgKFVTRVJfU0NSSVBUX0xJU1QuaW5jbHVkZXMoV0dfUkVMRVZBTlRfVVNFUl9OQU1FKSB8fCBncm91cHMuaW5jbHVkZXMoJ2JvdCcpKSB7XG5cdFx0XHQvKiBlbXB0eSAqL1xuXHRcdFx0Ly8gQWxyZWFkeSBzaG93biBpbiBNYXJrUmlnaHRzLVVzZXJwYWdlXG5cdFx0fSBlbHNlIGlmIChVU0VSX1dFQk1BU1RFUl9MSVNULmluY2x1ZGVzKFdHX1JFTEVWQU5UX1VTRVJfTkFNRSkgfHwgZ3JvdXBzLmluY2x1ZGVzKCdxaXV3ZW4nKSkge1xuXHRcdFx0LyogZW1wdHkgKi9cblx0XHRcdC8vIEFscmVhZHkgc2hvd24gaW4gTWFya1JpZ2h0cy1Vc2VycGFnZVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR2b2lkIGFwcGVuZEdlb0ljb24oJGJvZHkpO1xuXHRcdH1cblx0fSBjYXRjaCAoZXJyb3I6IHVua25vd24pIHtcblx0XHRjb25zb2xlLmVycm9yKCdbR2VvTG9jYXRpb25SZWFkZXJdIEFqYXggZXJyb3IgaW4gYGFkZEVsZW1lbnRgIG1ldGhvZDonLCBlcnJvcik7XG5cdH1cbn07XG5cbmV4cG9ydCB7YWRkRWxlbWVudH07XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuL29wdGlvbnMuanNvbic7XG5pbXBvcnQge0lTX1VTRVJfUEFHRSwgSVNfV0dfQUNUSU9OX1ZJRVcsIFdHX1BBR0VfTkFNRSwgV0dfUkVMRVZBTlRfVVNFUl9OQU1FfSBmcm9tICcuL21vZHVsZXMvY29uc3RhbnQnO1xuaW1wb3J0IHthZGRFbGVtZW50fSBmcm9tICcuL21vZHVsZXMvYWRkRWxlbWVudCc7XG5cbihmdW5jdGlvbiBnZW9Mb2NhdGlvblJlYWRlcigpOiB2b2lkIHtcblx0aWYgKCFXR19SRUxFVkFOVF9VU0VSX05BTUUgfHwgIUlTX1VTRVJfUEFHRSB8fCAhSVNfV0dfQUNUSU9OX1ZJRVcpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBwYWdlTmFtZTogc3RyaW5nID0gbmV3IG13LlRpdGxlKFdHX1BBR0VfTkFNRSkudG9UZXh0KCk7XG5cdGNvbnN0IHJlbGV2YW50VXNlclBhZ2VOYW1lOiBzdHJpbmcgPSBuZXcgbXcuVGl0bGUoV0dfUkVMRVZBTlRfVVNFUl9OQU1FLCBPUFRJT05TLnVzZXJOYW1lU3BhY2VOdW1iZXIpLnRvVGV4dCgpO1xuXHRpZiAocGFnZU5hbWUgIT09IHJlbGV2YW50VXNlclBhZ2VOYW1lKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0dm9pZCBhZGRFbGVtZW50KCk7XG59KSgpO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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LElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtJQUNMO0VBQ0QsV0FBVyxDQUFDLE9BQU8sRUFBRXpQLFNBQVNOLGdCQUFnQixHQUFHO0FBQ2hELFdBQU87TUFDTk8sSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7SUFDTDtFQUNELFdBQVcsQ0FBQyxTQUFTLE9BQU8sRUFBRXpQLFNBQVNOLGdCQUFnQixHQUFHO0FBQ3pELFdBQU87TUFDTk8sSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7SUFDTDtFQUNEO0FBRUEsU0FBTztJQUNOeFAsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7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QixJQUFJblgsR0FBR2lYLE1BQU1uVyx1QkFBK0JuQixtQkFBbUIsRUFBRXVYLE9BQU87QUFDN0csTUFBSUYsYUFBYUcsc0JBQXNCO0FBQ3RDO0VBQ0Q7QUFFQSxPQUFLaEIsV0FBVztBQUNqQixHQUFHOyIsCiAgIm5hbWVzIjogWyJtb3VudFBvaW50U2VsZWN0b3IiLCAidXNlck5hbWVTcGFjZU51bWJlciIsICJ2ZXJzaW9uIiwgIlVTRVJfU0NSSVBUX0xJU1QiLCAiVVNFUl9XRUJNQVNURVJfTElTVCIsICJXR19TQ1JJUFQiLCAibXciLCAiY29uZmlnIiwgImdldCIsICJXR19VU0VSX0dST1VQUyIsICJfbXckY29uZmlnJGdldCIsICJXR19VU0VSX05BTUUiLCAiX213JGNvbmZpZyRnZXQyIiwgIkNMQVNTX05BTUUiLCAiQ0xBU1NfTkFNRV9JQ09OIiwgImNvbmNhdCIsICJDTEFTU19OQU1FX1RFWFQiLCAiSVNfVVNFUl9QQUdFIiwgIklTX1dHX0FDVElPTl9WSUVXIiwgIldHX1BBR0VfTkFNRSIsICJXR19SRUxFVkFOVF9VU0VSX05BTUUiLCAiX213JGNvbmZpZyRnZXQzIiwgIldHX1NDUklQVDIiLCAiV0dfU0tJTiIsICJXR19VU0VSX0xBTkdVQUdFIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgInJlcXVpcmUiLCAiYXBpIiwgImluaXRNd0FwaSIsICJnZXRDb3VudHJ5T3JBcmVhTmFtZUxpc3QiLCAiaW5jbHVkZXMiLCAiQUYiLCAiQVgiLCAiQUwiLCAiRFoiLCAiQVMiLCAiQUQiLCAiQU8iLCAiQUkiLCAiQVEiLCAiQUciLCAiQVIiLCAiQU0iLCAiQVciLCAiQVUiLCAiQVQiLCAiQVoiLCAiQlMiLCAiQkgiLCAiQkQiLCAiQkIiLCAiQlkiLCAiQkUiLCAiQloiLCAiQkoiLCAiQk0iLCAiQlQiLCAiQk8iLCAiQlEiLCAiQkEiLCAiQlciLCAiQlYiLCAiQlIiLCAiSU8iLCAiQk4iLCAiQkciLCAiQkYiLCAiQkkiLCAiQ1YiLCAiS0giLCAiQ00iLCAiQ0EiLCAiS1kiLCAiQ0YiLCAiVEQiLCAiQ0wiLCAiQ04iLCAiQ1giLCAiQ0MiLCAiQ08iLCAiS00iLCAiQ0ciLCAiQ0QiLCAiQ0siLCAiQ1IiLCAiQ0kiLCAiSFIiLCAiQ1UiLCAiQ1ciLCAiQ1kiLCAiQ1oiLCAiREsiLCAiREoiLCAiRE0iLCAiRE8iLCAiRUMiLCAiRUciLCAiU1YiLCAiR1EiLCAiRVIiLCAiRUUiLCAiU1oiLCAiRVQiLCAiRksiLCAiRk8iLCAiRkoiLCAiRkkiLCAiRlIiLCAiR0YiLCAiUEYiLCAiVEYiLCAiR0EiLCAiR00iLCAiR0UiLCAiREUiLCAiR0giLCAiR0kiLCAiR1IiLCAiR0wiLCAiR0QiLCAiR1AiLCAiR1UiLCAiR1QiLCAiR0ciLCAiR04iLCAiR1ciLCAiR1kiLCAiSFQiLCAiSE0iLCAiVkEiLCAiSE4iLCAiSEsiLCAiSFUiLCAiSVMiLCAiSU4iLCAiSUQiLCAiSVIiLCAiSVEiLCAiSUUiLCAiSU0iLCAiSUwiLCAiSVQiLCAiSk0iLCAiSlAiLCAiSkUiLCAiSk8iLCAiS1oiLCAiS0UiLCAiS0kiLCAiS1AiLCAiS1IiLCAiS1ciLCAiS0ciLCAiTEEiLCAiTFYiLCAiTEIiLCAiTFMiLCAiTFIiLCAiTFkiLCAiTEkiLCAiTFQiLCAiTFUiLCAiTU8iLCAiTUciLCAiTVciLCAiTVkiLCAiTVYiLCAiTUwiLCAiTVQiLCAiTUgiLCAiTVEiLCAiTVIiLCAiTVUiLCAiWVQiLCAiTVgiLCAiRk0iLCAiTUQiLCAiTUMiLCAiTU4iLCAiTUUiLCAiTVMiLCAiTUEiLCAiTVoiLCAiTU0iLCAiTkEiLCAiTlIiLCAiTlAiLCAiTkwiLCAiTkMiLCAiTloiLCAiTkkiLCAiTkUiLCAiTkciLCAiTlUiLCAiTkYiLCAiTUsiLCAiTVAiLCAiTk8iLCAiT00iLCAiUEsiLCAiUFciLCAiUFMiLCAiUEEiLCAiUEciLCAiUFkiLCAiUEUiLCAiUEgiLCAiUE4iLCAiUEwiLCAiUFQiLCAiUFIiLCAiUUEiLCAiUkUiLCAiUk8iLCAiUlUiLCAiUlciLCAiQkwiLCAiU0giLCAiS04iLCAiTEMiLCAiTUYiLCAiUE0iLCAiVkMiLCAiV1MiLCAiU00iLCAiU1QiLCAiU0EiLCAiU04iLCAiUlMiLCAiU0MiLCAiU0wiLCAiU0ciLCAiU1giLCAiU0siLCAiU0kiLCAiU0IiLCAiU08iLCAiWkEiLCAiR1MiLCAiU1MiLCAiRVMiLCAiTEsiLCAiU0QiLCAiU1IiLCAiU0oiLCAiU0UiLCAiQ0giLCAiU1kiLCAiVFciLCAiVEoiLCAiVFoiLCAiVEgiLCAiVEwiLCAiVEciLCAiVEsiLCAiVE8iLCAiVFQiLCAiVE4iLCAiVFIiLCAiVE0iLCAiVEMiLCAiVFYiLCAiVUciLCAiVUEiLCAiQUUiLCAiR0IiLCAiVVMiLCAiVU0iLCAiVVkiLCAiVVoiLCAiVlUiLCAiVkUiLCAiVk4iLCAiVkciLCAiVkkiLCAiV0YiLCAiRUgiLCAiWUUiLCAiWk0iLCAiWlciLCAiZ2V0UmVnaW9uTmFtZUxpc3QiLCAiQUgiLCAiQ1EiLCAiR1giLCAiR1oiLCAiSEEiLCAiSEIiLCAiSEUiLCAiSEkiLCAiSEwiLCAiSkwiLCAiSlMiLCAiSlgiLCAiTE4iLCAiTk0iLCAiTlgiLCAiUUgiLCAiWEoiLCAiWFoiLCAiWU4iLCAiWkoiLCAiY291bnRyeU9yQXJlYUxpc3QiLCAicmVnaW9uTGlzdCIsICJnZXRDb3VudHJ5T3JBcmVhTmFtZSIsICJrZXkiLCAiZ2V0UmVnaW9uTmFtZSIsICJpbXBvcnRfZXh0X2dhZGdldDMiLCAiX190b0VTTSIsICJpbXBvcnRfZXh0X2dhZGdldDIiLCAiZ2V0STE4bk1lc3NhZ2VzIiwgImxvY2FsaXplIiwgImVuIiwgImphIiwgInpoIiwgIlVua25vd24iLCAiTG9jYXRpb24iLCAiaTE4bk1lc3NhZ2VzIiwgImdldE1lc3NhZ2UiLCAiYXBwZW5kSWNvbiIsICIkYm9keSIsICJpY29uIiwgImluZGljYXRvclRleHQiLCAic3BhbkNsYXNzIiwgImlwTG9jYXRpb25EZXNjIiwgInRleHQiLCAidGFnIiwgImRlZmF1bHQiLCAiY3JlYXRlRWxlbWVudCIsICJjbGFzc05hbWUiLCAiaW5kaWNhdG9ySW5uZXIiLCAiRnJhZ21lbnQiLCAiJHRhcmdldCIsICJmaW5kIiwgIiQiLCAiYXBwZW5kIiwgInByZXBlbmRUbyIsICJhcHBlbmRHZW9JY29uIiwgIl9yZWYiLCAiX2FzeW5jVG9HZW5lcmF0b3IiLCAic3RvcmVQYWdlVGl0bGUiLCAiX3JlZjIiLCAiX2dldENvdW50cnlPckFyZWFOYW1lIiwgIl9nZXRSZWdpb25OYW1lIiwgImNvdW50cnkiLCAiY291bnRyeU9yQXJlYSIsICJyZWdpb24iLCAiZ2V0SlNPTiIsICJVcmkiLCAiZXh0ZW5kIiwgImFjdGlvbiIsICJ0aXRsZSIsICJ0b1N0cmluZyIsICJsb2NhdGlvbiIsICJjb3VudHJ5T3JBcmVhTmFtZSIsICJyZWdpb25OYW1lIiwgImVycm9yIiwgImNvbnNvbGUiLCAiX3giLCAiYXBwbHkiLCAiYXJndW1lbnRzIiwgImltcG9ydF9leHRfZ2FkZ2V0NCIsICJhZGRFbGVtZW50IiwgIl9yZWYzIiwgInF1ZXJ5VXNlckdyb3Vwc1BhcmFtcyIsICJmb3JtYXQiLCAiZm9ybWF0dmVyc2lvbiIsICJsaXN0IiwgInVzdXNlcnMiLCAidXNwcm9wIiwgInF1ZXJ5IiwgInVzZXJzIiwgImdyb3VwcyIsICJnZXRCb2R5IiwgImdlb0xvY2F0aW9uUmVhZGVyIiwgInBhZ2VOYW1lIiwgIlRpdGxlIiwgInRvVGV4dCIsICJyZWxldmFudFVzZXJQYWdlTmFtZSJdCn0K

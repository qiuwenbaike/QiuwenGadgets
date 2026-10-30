/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|title=GeoLocationReader|license=CC-BY-SA-4.0}}'
 *
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/GeoLocationReader}
 * @license CC-BY-SA-4.0 {@link https://www.qiuwenbaike.cn/wiki/H:CC-BY-SA-4.0}
 */

/**
 * SPDX-License-Identifier: MIT
 *
 * - The "globe" icon from @wikimedia/codex-icons
 * - The "help-notice" icon from @wikimedia/codex-icons
 *
 * @license MIT
 */

/**
 * Copyright 2011-2022 Codex Team and other contributors.
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
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
//! src/GeoLocationReader/options.json
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
var elementId = "gadget-geo_location_reader";
var mountPointSelector = "#footer-info,.page-info";
var storageKey = "ext.gadget.MarkRights_GeoLocationReader-";
var userNameSpaceNumber = 2;
var version = "3.0";
//! src/GeoLocation/modules/constant.ts
var SYSTEM_SCRIPT_LIST = ["滥用过滤器", "求闻编者", "求闻百科社区", "Example", "External contributors", "Maintenance script", "MediaWiki default", "MediaWiki message delivery", "New user page"];
var WEBMASTER_LIST = ["QiuWen", "QiuWen for Accounts", "QiuwenSocialMedia"];
//! src/GeoLocationReader/modules/constant.ts
var CLASS_NAME = "gadget-geo_location_reader";
var import_vue = require("vue");
var import_codex = require("@wikimedia/codex");
var import_vue2 = require("vue");
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
var App_default = /* @__PURE__ */ (0, import_vue.defineComponent)({
  __name: "App",
  props: {
    icon: {
      type: String,
      required: true
    },
    indicatorText: {
      type: String,
      required: true
    },
    status: {
      type: String,
      required: true
    }
  },
  setup(__props, {
    expose: __expose
  }) {
    __expose();
    const props = __props;
    const cdxIconGlobe = {
      path: "M10 1a9 9 0 110 18 9 9 0 010-18M8.028 11c.1 1.846.473 3.431.97 4.552.295.661.594 1.073.824 1.292.081.077.14.117.178.138a1 1 0 00.178-.138c.23-.22.529-.63.823-1.292.498-1.12.87-2.706.97-4.552zm-4.956 0a7 7 0 004.122 5.413C6.557 15.001 6.13 13.11 6.025 11zm10.903 0c-.104 2.11-.533 4-1.17 5.413A7 7 0 0016.928 11zm-6.78-7.414A7 7 0 003.071 9h2.953c.104-2.11.531-4.001 1.17-5.414ZM10 3.016a1 1 0 00-.178.14c-.23.22-.53.63-.823 1.292-.498 1.12-.87 2.706-.97 4.552h3.943c-.101-1.846-.473-3.431-.971-4.552-.294-.661-.593-1.073-.823-1.292a1 1 0 00-.178-.14m2.805.57c.638 1.413 1.066 3.303 1.17 5.414h2.953a7 7 0 00-4.123-5.414"
    };
    const cdxIconHelpNotice = {
      path: "M11 15.5H9v-2h2zm-1-11c1.015 0 1.787.469 2.283 1.074.473.576.717 1.299.717 1.926 0 .68-.174 1.242-.467 1.706-.283.448-.646.753-.933.969-.136.101-.29.208-.385.276a3 3 0 00-.215.166v.883H9v-1c0-.645.346-1.08.637-1.347a4 4 0 01.414-.327c.139-.1.235-.165.35-.25.212-.16.349-.293.44-.438.083-.13.159-.319.159-.638 0-.152-.076-.43-.264-.658A.9.9 0 0010 6.5c-.282 0-.518.133-.714.375C9.066 7.146 9 7.43 9 7.5H7c0-.611.28-1.327.733-1.886C8.211 5.026 8.975 4.5 10 4.5M10 1a9 9 0 110 18 9 9 0 010-18m0 2a7 7 0 100 14 7 7 0 000-14",
      shouldFlip: true
    };
    const icons = {
      globe: cdxIconGlobe,
      helpNotice: cdxIconHelpNotice
    };
    const icon = (0, import_vue2.computed)(() => {
      return icons[props.icon];
    });
    const text = (0, import_vue2.computed)(() => {
      return props.icon === "globe" ? "".concat(getMessage("Location")).concat(getMessage(":")).concat(props.indicatorText) : props.indicatorText;
    });
    const __returned__ = {
      props,
      cdxIconGlobe,
      cdxIconHelpNotice,
      icons,
      icon,
      text,
      get CdxIcon() {
        return import_codex.CdxIcon;
      }
    };
    Object.defineProperty(__returned__, "__isScriptSetup", {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});
var import_vue3 = require("vue");
var _hoisted_1 = {
  class: "gadget-geo_location_reader__text"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0, import_vue3.openBlock)(), (0, import_vue3.createElementBlock)(
    "span",
    {
      class: (0, import_vue3.normalizeClass)(["gadget-geo_location_reader__badge", "gadget-geo_location_reader__badge--".concat($setup.props.status)])
    },
    [(0, import_vue3.createVNode)($setup["CdxIcon"], {
      class: "gadget-geo_location_reader__icon",
      icon: $setup.icon,
      size: "small"
    }, null, 8, ["icon"]), (0, import_vue3.createElementVNode)(
      "span",
      _hoisted_1,
      (0, import_vue3.toDisplayString)($setup.text),
      1
      /* TEXT */
    )],
    2
    /* CLASS */
  );
}
//! src/GeoLocationReader/modules/App.vue
App_default.render = render;
App_default.__file = "src\\GeoLocationReader\\modules\\App.vue";
App_default.__scopeId = "data-v-7d9fc70e";
var App_default2 = App_default;
//! src/GeoLocationReader/modules/appendGeoIcon.ts
var import_vue4 = require("vue");
//! src/GeoLocationReader/modules/util/createFooterRoot.ts
var createFooterRoot = (mountPoint) => {
  const {
    skin
  } = mw.config.get();
  const isCitizen = skin === "citizen";
  const isListItem = ["gongbi", "vector", "vector-2022"].includes(skin) || Boolean(document.querySelector("ul#footer-info"));
  const root = document.createElement(isCitizen ? "section" : isListItem ? "li" : "div");
  root.id = elementId;
  root.classList.add(CLASS_NAME, "noprint");
  if (isCitizen) {
    root.classList.add("page-info__item", "citizen-footer__pageinfo-item");
  }
  mountPoint.prepend(root);
  return root;
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
var import_ext_gadget2 = require("ext.gadget.Util");
var api = (0, import_ext_gadget2.initMwApi)("GeoLocationReader/".concat(version));
//! src/GeoLocationReader/modules/util/getLocation.ts
var getLocation = /* @__PURE__ */ (function() {
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
        var _data$query$pages$, _data$query;
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
        const content = ((_data$query$pages$ = data["query"].pages[0]) !== null && _data$query$pages$ !== void 0 && _data$query$pages$.missing ? "" : (_data$query = data["query"]) === null || _data$query === void 0 || (_data$query = _data$query.pages[0]) === null || _data$query === void 0 || (_data$query = _data$query.revisions) === null || _data$query === void 0 ? void 0 : _data$query[0].slots.main.content) || "";
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
})();
//! src/GeoLocationReader/modules/appendGeoIcon.ts
var appendGeoIcon = /* @__PURE__ */ (function() {
  var _ref2 = _asyncToGenerator(function* () {
    const {
      wgRelevantUserName
    } = mw.config.get();
    if (!wgRelevantUserName) {
      return;
    }
    const mountPoint = document.querySelector(mountPointSelector);
    if (!mountPoint) {
      return;
    }
    const mountApp = (icon, indicatorText, status) => {
      const app = (0, import_vue4.createApp)(App_default2, {
        icon,
        indicatorText,
        status
      });
      app.mount(createFooterRoot(mountPoint));
    };
    try {
      var _response$countryOrAr, _response$regionName;
      const response = yield getLocation(wgRelevantUserName);
      const indicatorText = "".concat((_response$countryOrAr = response === null || response === void 0 ? void 0 : response.countryOrAreaName) !== null && _response$countryOrAr !== void 0 ? _response$countryOrAr : "").concat((_response$regionName = response === null || response === void 0 ? void 0 : response.regionName) !== null && _response$regionName !== void 0 ? _response$regionName : "");
      if (!indicatorText) {
        return;
      }
      mountApp("globe", indicatorText, "success");
    } catch (error) {
      console.error("[GeoLocationReader] Ajax error in `appendGeoIcon` method:", error);
      mountApp("helpNotice", getMessage("Unknown"), "warning");
    }
  });
  return function appendGeoIcon2() {
    return _ref2.apply(this, arguments);
  };
})();
//! src/GeoLocationReader/modules/addElement.ts
var import_ext_gadget3 = require("ext.gadget.MarkRights");
var addElement = /* @__PURE__ */ (function() {
  var _ref3 = _asyncToGenerator(function* () {
    const {
      wgRelevantUserName
    } = mw.config.get();
    if (!wgRelevantUserName) {
      return;
    }
    try {
      var _groupsMap$wgRelevant;
      const groupsMap = yield (0, import_ext_gadget3.getLocalUserGroups)([wgRelevantUserName]);
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
})();
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0dlb0xvY2F0aW9uUmVhZGVyL29wdGlvbnMuanNvbiIsICJzcmMvR2VvTG9jYXRpb24vbW9kdWxlcy9jb25zdGFudC50cyIsICJzcmMvR2VvTG9jYXRpb25SZWFkZXIvbW9kdWxlcy9jb25zdGFudC50cyIsICJkaXN0L0dlb0xvY2F0aW9uUmVhZGVyL3NyYy9HZW9Mb2NhdGlvblJlYWRlci9tb2R1bGVzL0FwcC52dWUiLCAic3JjL0dlb0xvY2F0aW9uUmVhZGVyL21vZHVsZXMvaTE4bi50cyIsICJzZmMtdGVtcGxhdGU6RDpcXEdpdFJlcG9zaXRvcnlcXFFpdXdlbkdhZGdldHNcXHNyY1xcR2VvTG9jYXRpb25SZWFkZXJcXG1vZHVsZXNcXEFwcC52dWU/dHlwZT10ZW1wbGF0ZSIsICJzcmMvR2VvTG9jYXRpb25SZWFkZXIvbW9kdWxlcy9BcHAudnVlIiwgInNyYy9HZW9Mb2NhdGlvblJlYWRlci9tb2R1bGVzL2FwcGVuZEdlb0ljb24udHMiLCAic3JjL0dlb0xvY2F0aW9uUmVhZGVyL21vZHVsZXMvdXRpbC9jcmVhdGVGb290ZXJSb290LnRzIiwgInNyYy9HZW9Mb2NhdGlvblJlYWRlci9tb2R1bGVzL3V0aWwvbmFtZS50cyIsICJzcmMvR2VvTG9jYXRpb25SZWFkZXIvbW9kdWxlcy91dGlsL2dldE5hbWUudHMiLCAic3JjL0dlb0xvY2F0aW9uUmVhZGVyL21vZHVsZXMvYXBpLnRzIiwgInNyYy9HZW9Mb2NhdGlvblJlYWRlci9tb2R1bGVzL3V0aWwvZ2V0TG9jYXRpb24udHMiLCAic3JjL0dlb0xvY2F0aW9uUmVhZGVyL21vZHVsZXMvYWRkRWxlbWVudC50cyIsICJzcmMvR2VvTG9jYXRpb25SZWFkZXIvR2VvTG9jYXRpb25SZWFkZXIudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIntcblx0XCJlbGVtZW50SWRcIjogXCJnYWRnZXQtZ2VvX2xvY2F0aW9uX3JlYWRlclwiLFxuXHRcIm1vdW50UG9pbnRTZWxlY3RvclwiOiBcIiNmb290ZXItaW5mbywucGFnZS1pbmZvXCIsXG5cdFwic3RvcmFnZUtleVwiOiBcImV4dC5nYWRnZXQuTWFya1JpZ2h0c19HZW9Mb2NhdGlvblJlYWRlci1cIixcblx0XCJ1c2VyTmFtZVNwYWNlTnVtYmVyXCI6IDIsXG5cdFwidmVyc2lvblwiOiBcIjMuMFwiXG59XG4iLCAiY29uc3QgU1lTVEVNX1NDUklQVF9MSVNUOiBzdHJpbmdbXSA9IFtcblx0J+a7peeUqOi/h+a7pOWZqCcsXG5cdCfmsYLpl7vnvJbogIUnLFxuXHQn5rGC6Ze755m+56eR56S+5Yy6Jyxcblx0J0V4YW1wbGUnLFxuXHQnRXh0ZXJuYWwgY29udHJpYnV0b3JzJyxcblx0J01haW50ZW5hbmNlIHNjcmlwdCcsXG5cdCdNZWRpYVdpa2kgZGVmYXVsdCcsXG5cdCdNZWRpYVdpa2kgbWVzc2FnZSBkZWxpdmVyeScsXG5cdCdOZXcgdXNlciBwYWdlJyxcbl07XG5jb25zdCBXRUJNQVNURVJfTElTVDogc3RyaW5nW10gPSBbJ1FpdVdlbicsICdRaXVXZW4gZm9yIEFjY291bnRzJywgJ1FpdXdlblNvY2lhbE1lZGlhJ107XG5cbmV4cG9ydCB7U1lTVEVNX1NDUklQVF9MSVNULCBXRUJNQVNURVJfTElTVH07XG4iLCAiY29uc3QgQ0xBU1NfTkFNRTogc3RyaW5nID0gJ2dhZGdldC1nZW9fbG9jYXRpb25fcmVhZGVyJztcblxuZXhwb3J0IHtTWVNURU1fU0NSSVBUX0xJU1QsIFdFQk1BU1RFUl9MSVNUfSBmcm9tICd+L0dlb0xvY2F0aW9uL21vZHVsZXMvY29uc3RhbnQnO1xuZXhwb3J0IHtDTEFTU19OQU1FfTtcbiIsICI8c2NyaXB0IHNldHVwIGxhbmc9XCJ0c1wiPlxuaW1wb3J0IHtDZHhJY29ufSBmcm9tICdAd2lraW1lZGlhL2NvZGV4JztcbmltcG9ydCB0eXBlIHtHZW9Mb2NhdGlvblByb3BzfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7Y29tcHV0ZWR9IGZyb20gJ3Z1ZSc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vaTE4bic7XG5cbmNvbnN0IHByb3BzID0gZGVmaW5lUHJvcHM8R2VvTG9jYXRpb25Qcm9wcz4oKTtcblxuLyoqXG4gKiBTVkcgcGF0aHMgaW5saW5lZCBmcm9tIGBAd2lraW1lZGlhL2NvZGV4LWljb25zYCB2Mi43LjAuXG4gKlxuICogTWVkaWFXaWtpIGRvZXMgbm90IHNoaXAgYSBSZXNvdXJjZUxvYWRlciBtb2R1bGUgdGhhdCBidW5kbGVzXG4gKiBgQHdpa2ltZWRpYS9jb2RleC1pY29uc2AgKHNlZSBodHRwczovL3d3dy5tZWRpYXdpa2kub3JnL3dpa2kvQ29kZXgpLFxuICogc28gdGhlIHBhdGggZGF0YSBpcyBjb3BpZWQgaGVyZSB2ZXJiYXRpbSBhbmQgcmVuZGVyZWQgYXMgaW5saW5lIFNWR1xuICogdG8ga2VlcCB0aGUgZ2FkZ2V0IHNlbGYtY29udGFpbmVkIHdoaWxlIHN0aWxsIHNvdXJjaW5nIHRoZSBpY29uc1xuICogZnJvbSBgQHdpa2ltZWRpYS9jb2RleC1pY29uc2AuXG4gKlxuICogQHNlZSB7QGxpbmsgaHR0cHM6Ly9kb2Mud2lraW1lZGlhLm9yZy9jb2RleC9sYXRlc3QvaWNvbnMvfVxuICovXG5cbi8qKiBQYXRoIGZvciBgY2R4SWNvbkdsb2JlYC4gKi9cbmNvbnN0IGNkeEljb25HbG9iZSA9IHtcblx0cGF0aDogJ00xMCAxYTkgOSAwIDExMCAxOCA5IDkgMCAwMTAtMThNOC4wMjggMTFjLjEgMS44NDYuNDczIDMuNDMxLjk3IDQuNTUyLjI5NS42NjEuNTk0IDEuMDczLjgyNCAxLjI5Mi4wODEuMDc3LjE0LjExNy4xNzguMTM4YTEgMSAwIDAwLjE3OC0uMTM4Yy4yMy0uMjIuNTI5LS42My44MjMtMS4yOTIuNDk4LTEuMTIuODctMi43MDYuOTctNC41NTJ6bS00Ljk1NiAwYTcgNyAwIDAwNC4xMjIgNS40MTNDNi41NTcgMTUuMDAxIDYuMTMgMTMuMTEgNi4wMjUgMTF6bTEwLjkwMyAwYy0uMTA0IDIuMTEtLjUzMyA0LTEuMTcgNS40MTNBNyA3IDAgMDAxNi45MjggMTF6bS02Ljc4LTcuNDE0QTcgNyAwIDAwMy4wNzEgOWgyLjk1M2MuMTA0LTIuMTEuNTMxLTQuMDAxIDEuMTctNS40MTRaTTEwIDMuMDE2YTEgMSAwIDAwLS4xNzguMTRjLS4yMy4yMi0uNTMuNjMtLjgyMyAxLjI5Mi0uNDk4IDEuMTItLjg3IDIuNzA2LS45NyA0LjU1MmgzLjk0M2MtLjEwMS0xLjg0Ni0uNDczLTMuNDMxLS45NzEtNC41NTItLjI5NC0uNjYxLS41OTMtMS4wNzMtLjgyMy0xLjI5MmExIDEgMCAwMC0uMTc4LS4xNG0yLjgwNS41N2MuNjM4IDEuNDEzIDEuMDY2IDMuMzAzIDEuMTcgNS40MTRoMi45NTNhNyA3IDAgMDAtNC4xMjMtNS40MTQnLFxufTtcblxuLyoqIFBhdGggZm9yIGBjZHhJY29uSGVscE5vdGljZWAuICovXG5jb25zdCBjZHhJY29uSGVscE5vdGljZSA9IHtcblx0cGF0aDogJ00xMSAxNS41SDl2LTJoMnptLTEtMTFjMS4wMTUgMCAxLjc4Ny40NjkgMi4yODMgMS4wNzQuNDczLjU3Ni43MTcgMS4yOTkuNzE3IDEuOTI2IDAgLjY4LS4xNzQgMS4yNDItLjQ2NyAxLjcwNi0uMjgzLjQ0OC0uNjQ2Ljc1My0uOTMzLjk2OS0uMTM2LjEwMS0uMjkuMjA4LS4zODUuMjc2YTMgMyAwIDAwLS4yMTUuMTY2di44ODNIOXYtMWMwLS42NDUuMzQ2LTEuMDguNjM3LTEuMzQ3YTQgNCAwIDAxLjQxNC0uMzI3Yy4xMzktLjEuMjM1LS4xNjUuMzUtLjI1LjIxMi0uMTYuMzQ5LS4yOTMuNDQtLjQzOC4wODMtLjEzLjE1OS0uMzE5LjE1OS0uNjM4IDAtLjE1Mi0uMDc2LS40My0uMjY0LS42NThBLjkuOSAwIDAwMTAgNi41Yy0uMjgyIDAtLjUxOC4xMzMtLjcxNC4zNzVDOS4wNjYgNy4xNDYgOSA3LjQzIDkgNy41SDdjMC0uNjExLjI4LTEuMzI3LjczMy0xLjg4NkM4LjIxMSA1LjAyNiA4Ljk3NSA0LjUgMTAgNC41TTEwIDFhOSA5IDAgMTEwIDE4IDkgOSAwIDAxMC0xOG0wIDJhNyA3IDAgMTAwIDE0IDcgNyAwIDAwMC0xNCcsXG5cdHNob3VsZEZsaXA6IHRydWUsXG59O1xuXG5jb25zdCBpY29ucyA9IHtcblx0Z2xvYmU6IGNkeEljb25HbG9iZSxcblx0aGVscE5vdGljZTogY2R4SWNvbkhlbHBOb3RpY2UsXG59O1xuXG5jb25zdCBpY29uID0gY29tcHV0ZWQoKCkgPT4ge1xuXHRyZXR1cm4gaWNvbnNbcHJvcHMuaWNvbl07XG59KTtcblxuY29uc3QgdGV4dCA9IGNvbXB1dGVkKCgpID0+IHtcblx0cmV0dXJuIHByb3BzLmljb24gPT09ICdnbG9iZSdcblx0XHQ/IGAke2dldE1lc3NhZ2UoJ0xvY2F0aW9uJyl9JHtnZXRNZXNzYWdlKCc6Jyl9JHtwcm9wcy5pbmRpY2F0b3JUZXh0fWBcblx0XHQ6IHByb3BzLmluZGljYXRvclRleHQ7XG59KTtcbjwvc2NyaXB0PlxuXG48dGVtcGxhdGU+XG5cdDxzcGFuIGNsYXNzPVwiZ2FkZ2V0LWdlb19sb2NhdGlvbl9yZWFkZXJfX2JhZGdlXCIgOmNsYXNzPVwiYGdhZGdldC1nZW9fbG9jYXRpb25fcmVhZGVyX19iYWRnZS0tJHtwcm9wcy5zdGF0dXN9YFwiPlxuXHRcdDxjZHgtaWNvbiBjbGFzcz1cImdhZGdldC1nZW9fbG9jYXRpb25fcmVhZGVyX19pY29uXCIgOmljb249XCJpY29uXCIgc2l6ZT1cInNtYWxsXCIgLz5cblx0XHQ8c3BhbiBjbGFzcz1cImdhZGdldC1nZW9fbG9jYXRpb25fcmVhZGVyX190ZXh0XCI+e3sgdGV4dCB9fTwvc3Bhbj5cblx0PC9zcGFuPlxuPC90ZW1wbGF0ZT5cblxuPHN0eWxlIHNjb3BlZCBsYW5nPVwibGVzc1wiPlxuQGltcG9ydCAocmVmZXJlbmNlKSAnLi4vLi4vbWl4aW5zLmxlc3MnO1xuQGltcG9ydCAocmVmZXJlbmNlKSAnLi4vLi4vdmFyaWFibGVzLmxlc3MnO1xuXG4uZ2FkZ2V0LWdlb19sb2NhdGlvbl9yZWFkZXJfX2JhZGdlIHtcblx0ZGlzcGxheTogaW5saW5lLWZsZXg7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGdhcDogMC4yNWVtO1xuXHRtYXJnaW46IDAgMC4yNWVtICFpbXBvcnRhbnQ7XG5cdHBhZGRpbmc6IDAgMC41ZW0gIWltcG9ydGFudDtcblx0Ym9yZGVyOiAxcHggc29saWQgQGNvbnN0LWNvbG9yLWdyYXk7XG5cdGJvcmRlci1yYWRpdXM6IEBib3JkZXItcmFkaXVzLS1zbWFsbDtcblx0Zm9udC1zaXplOiAwLjllbTtcblx0d2hpdGUtc3BhY2U6IG5vd3JhcDtcblx0dXNlci1zZWxlY3Q6IG5vbmU7XG5cblx0Lm13LWZvb3RlciAmIHtcblx0XHRtYXJnaW4tYm90dG9tOiAwLjI1ZW07XG5cdH1cblxuXHQmLS1zdWNjZXNzIHtcblx0XHRib3JkZXItY29sb3I6IEBjb2xvci0tc3VjY2Vzcztcblx0XHRjb2xvcjogQGNvbG9yLS1zdWNjZXNzO1xuXHR9XG5cblx0Ji0td2FybmluZyB7XG5cdFx0Ym9yZGVyLWNvbG9yOiBAY29sb3ItLXdhcm5pbmc7XG5cdFx0Y29sb3I6IEBjb2xvci0td2FybmluZztcblx0fVxufVxuXG4uZ2FkZ2V0LWdlb19sb2NhdGlvbl9yZWFkZXJfX2ljb24ge1xuXHRjb2xvcjogaW5oZXJpdDtcbn1cbjwvc3R5bGU+XG4iLCAiaW1wb3J0IHtsb2NhbGl6ZX0gZnJvbSAnZXh0LmdhZGdldC5pMThuJztcblxuY29uc3QgZ2V0STE4bk1lc3NhZ2VzID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdCc6JzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICc6ICcsXG5cdFx0XHRqYTogJ++8micsXG5cdFx0XHR6aDogJ++8micsXG5cdFx0fSksXG5cdFx0VW5rbm93bjogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdVbmtub3duIExvY2F0aW9uJyxcblx0XHRcdGphOiAn5pyq55+lSVDlnLDln58nLFxuXHRcdFx0J3poLWhhbnMnOiAn5pyq55+lSVDlsZ7lnLAnLFxuXHRcdFx0J3poLWhhbnQnOiAn5pyq55+lSVDlsazlnLAnLFxuXHRcdH0pLFxuXHRcdExvY2F0aW9uOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0lQIExvY2F0aW9uJyxcblx0XHRcdGphOiAnSVDlnLDln58nLFxuXHRcdFx0J3poLWhhbnMnOiAnSVDlsZ7lnLAnLFxuXHRcdFx0J3poLWhhbnQnOiAnSVDlsazlnLAnLFxuXHRcdH0pLFxuXHR9O1xufTtcblxuY29uc3QgaTE4bk1lc3NhZ2VzID0gZ2V0STE4bk1lc3NhZ2VzKCk7XG5cbmNvbnN0IGdldE1lc3NhZ2U6IEdldE1lc3NhZ2VzPHR5cGVvZiBpMThuTWVzc2FnZXM+ID0gKGtleSkgPT4ge1xuXHRyZXR1cm4gaTE4bk1lc3NhZ2VzW2tleV0gfHwga2V5O1xufTtcblxuZXhwb3J0IHtnZXRNZXNzYWdlfTtcbiIsICJpbXBvcnQgeyBjcmVhdGVWTm9kZSBhcyBfY3JlYXRlVk5vZGUsIHRvRGlzcGxheVN0cmluZyBhcyBfdG9EaXNwbGF5U3RyaW5nLCBjcmVhdGVFbGVtZW50Vk5vZGUgYXMgX2NyZWF0ZUVsZW1lbnRWTm9kZSwgbm9ybWFsaXplQ2xhc3MgYXMgX25vcm1hbGl6ZUNsYXNzLCBvcGVuQmxvY2sgYXMgX29wZW5CbG9jaywgY3JlYXRlRWxlbWVudEJsb2NrIGFzIF9jcmVhdGVFbGVtZW50QmxvY2sgfSBmcm9tIFwidnVlXCJcblxuY29uc3QgX2hvaXN0ZWRfMSA9IHsgY2xhc3M6IFwiZ2FkZ2V0LWdlb19sb2NhdGlvbl9yZWFkZXJfX3RleHRcIiB9XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXIoX2N0eCwgX2NhY2hlLCAkcHJvcHMsICRzZXR1cCwgJGRhdGEsICRvcHRpb25zKSB7XG4gIHJldHVybiAoX29wZW5CbG9jaygpLCBfY3JlYXRlRWxlbWVudEJsb2NrKFwic3BhblwiLCB7XG4gICAgY2xhc3M6IF9ub3JtYWxpemVDbGFzcyhbXCJnYWRnZXQtZ2VvX2xvY2F0aW9uX3JlYWRlcl9fYmFkZ2VcIiwgYGdhZGdldC1nZW9fbG9jYXRpb25fcmVhZGVyX19iYWRnZS0tJHskc2V0dXAucHJvcHMuc3RhdHVzfWBdKVxuICB9LCBbXG4gICAgX2NyZWF0ZVZOb2RlKCRzZXR1cFtcIkNkeEljb25cIl0sIHtcbiAgICAgIGNsYXNzOiBcImdhZGdldC1nZW9fbG9jYXRpb25fcmVhZGVyX19pY29uXCIsXG4gICAgICBpY29uOiAkc2V0dXAuaWNvbixcbiAgICAgIHNpemU6IFwic21hbGxcIlxuICAgIH0sIG51bGwsIDggLyogUFJPUFMgKi8sIFtcImljb25cIl0pLFxuICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJzcGFuXCIsIF9ob2lzdGVkXzEsIF90b0Rpc3BsYXlTdHJpbmcoJHNldHVwLnRleHQpLCAxIC8qIFRFWFQgKi8pXG4gIF0sIDIgLyogQ0xBU1MgKi8pKVxufSIsICJpbXBvcnQgc2NyaXB0IGZyb20gXCJEOlxcXFxHaXRSZXBvc2l0b3J5XFxcXFFpdXdlbkdhZGdldHNcXFxcc3JjXFxcXEdlb0xvY2F0aW9uUmVhZGVyXFxcXG1vZHVsZXNcXFxcQXBwLnZ1ZT90eXBlPXNjcmlwdFwiO2ltcG9ydCBcIkQ6XFxcXEdpdFJlcG9zaXRvcnlcXFxcUWl1d2VuR2FkZ2V0c1xcXFxzcmNcXFxcR2VvTG9jYXRpb25SZWFkZXJcXFxcbW9kdWxlc1xcXFxBcHAudnVlP3R5cGU9c3R5bGUmaW5kZXg9MFwiO2ltcG9ydCB7IHJlbmRlciB9IGZyb20gXCJEOlxcXFxHaXRSZXBvc2l0b3J5XFxcXFFpdXdlbkdhZGdldHNcXFxcc3JjXFxcXEdlb0xvY2F0aW9uUmVhZGVyXFxcXG1vZHVsZXNcXFxcQXBwLnZ1ZT90eXBlPXRlbXBsYXRlXCI7IHNjcmlwdC5yZW5kZXIgPSByZW5kZXI7c2NyaXB0Ll9fZmlsZSA9IFwic3JjXFxcXEdlb0xvY2F0aW9uUmVhZGVyXFxcXG1vZHVsZXNcXFxcQXBwLnZ1ZVwiO3NjcmlwdC5fX3Njb3BlSWQgPSBcImRhdGEtdi03ZDlmYzcwZVwiO2V4cG9ydCBkZWZhdWx0IHNjcmlwdDsiLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHR5cGUge0dlb0xvY2F0aW9uSWNvbiwgR2VvTG9jYXRpb25TdGF0dXN9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IEFwcCBmcm9tICcuL0FwcC52dWUnO1xuaW1wb3J0IHtjcmVhdGVBcHB9IGZyb20gJ3Z1ZSc7XG5pbXBvcnQge2NyZWF0ZUZvb3RlclJvb3R9IGZyb20gJy4vdXRpbC9jcmVhdGVGb290ZXJSb290JztcbmltcG9ydCB7Z2V0TG9jYXRpb259IGZyb20gJy4vdXRpbC9nZXRMb2NhdGlvbic7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vaTE4bic7XG5cbmNvbnN0IGFwcGVuZEdlb0ljb24gPSBhc3luYyAoKTogUHJvbWlzZTx2b2lkPiA9PiB7XG5cdGNvbnN0IHt3Z1JlbGV2YW50VXNlck5hbWV9ID0gbXcuY29uZmlnLmdldCgpO1xuXHRpZiAoIXdnUmVsZXZhbnRVc2VyTmFtZSkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IG1vdW50UG9pbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxFbGVtZW50PihPUFRJT05TLm1vdW50UG9pbnRTZWxlY3Rvcik7XG5cdGlmICghbW91bnRQb2ludCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IG1vdW50QXBwID0gKGljb246IEdlb0xvY2F0aW9uSWNvbiwgaW5kaWNhdG9yVGV4dDogc3RyaW5nLCBzdGF0dXM6IEdlb0xvY2F0aW9uU3RhdHVzKTogdm9pZCA9PiB7XG5cdFx0Y29uc3QgYXBwID0gY3JlYXRlQXBwKEFwcCwge1xuXHRcdFx0aWNvbixcblx0XHRcdGluZGljYXRvclRleHQsXG5cdFx0XHRzdGF0dXMsXG5cdFx0fSk7XG5cdFx0YXBwLm1vdW50KGNyZWF0ZUZvb3RlclJvb3QobW91bnRQb2ludCkpO1xuXHR9O1xuXG5cdHRyeSB7XG5cdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBnZXRMb2NhdGlvbih3Z1JlbGV2YW50VXNlck5hbWUpO1xuXHRcdGNvbnN0IGluZGljYXRvclRleHQgPSBgJHtyZXNwb25zZT8uY291bnRyeU9yQXJlYU5hbWUgPz8gJyd9JHtyZXNwb25zZT8ucmVnaW9uTmFtZSA/PyAnJ31gO1xuXHRcdGlmICghaW5kaWNhdG9yVGV4dCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdG1vdW50QXBwKCdnbG9iZScsIGluZGljYXRvclRleHQsICdzdWNjZXNzJyk7XG5cdH0gY2F0Y2ggKGVycm9yOiB1bmtub3duKSB7XG5cdFx0Y29uc29sZS5lcnJvcignW0dlb0xvY2F0aW9uUmVhZGVyXSBBamF4IGVycm9yIGluIGBhcHBlbmRHZW9JY29uYCBtZXRob2Q6JywgZXJyb3IpO1xuXHRcdG1vdW50QXBwKCdoZWxwTm90aWNlJywgZ2V0TWVzc2FnZSgnVW5rbm93bicpLCAnd2FybmluZycpO1xuXHR9XG59O1xuXG5leHBvcnQge2FwcGVuZEdlb0ljb259O1xuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7Q0xBU1NfTkFNRX0gZnJvbSAnLi4vY29uc3RhbnQnO1xuXG5jb25zdCBjcmVhdGVGb290ZXJSb290ID0gKG1vdW50UG9pbnQ6IEhUTUxFbGVtZW50KTogSFRNTEVsZW1lbnQgPT4ge1xuXHRjb25zdCB7c2tpbn0gPSBtdy5jb25maWcuZ2V0KCk7XG5cdGNvbnN0IGlzQ2l0aXplbiA9IHNraW4gPT09ICdjaXRpemVuJztcblx0Y29uc3QgaXNMaXN0SXRlbSA9XG5cdFx0Wydnb25nYmknLCAndmVjdG9yJywgJ3ZlY3Rvci0yMDIyJ10uaW5jbHVkZXMoc2tpbikgfHwgQm9vbGVhbihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCd1bCNmb290ZXItaW5mbycpKTtcblx0Y29uc3Qgcm9vdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoaXNDaXRpemVuID8gJ3NlY3Rpb24nIDogaXNMaXN0SXRlbSA/ICdsaScgOiAnZGl2Jyk7XG5cblx0cm9vdC5pZCA9IE9QVElPTlMuZWxlbWVudElkO1xuXHRyb290LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRSwgJ25vcHJpbnQnKTtcblx0aWYgKGlzQ2l0aXplbikge1xuXHRcdHJvb3QuY2xhc3NMaXN0LmFkZCgncGFnZS1pbmZvX19pdGVtJywgJ2NpdGl6ZW4tZm9vdGVyX19wYWdlaW5mby1pdGVtJyk7XG5cdH1cblx0bW91bnRQb2ludC5wcmVwZW5kKHJvb3QpO1xuXG5cdHJldHVybiByb290O1xufTtcblxuZXhwb3J0IHtjcmVhdGVGb290ZXJSb290fTtcbiIsICJjb25zdCBnZXRDb3VudHJ5T3JBcmVhTmFtZUxpc3QgPSAoKSA9PiB7XG5cdGNvbnN0IHt3Z1VzZXJMYW5ndWFnZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cblx0aWYgKFsnemgtaGFudCcsICd6aC1oaycsICd6aC1tbyddLmluY2x1ZGVzKHdnVXNlckxhbmd1YWdlKSkge1xuXHRcdHJldHVybiB7XG5cdFx0XHRBRjogJ+mYv+WvjOaxlycsXG5cdFx0XHRBWDogJ+Wlp+iYrScsXG5cdFx0XHRBTDogJ+mYv+eIvuW3tOWwvOS6nicsXG5cdFx0XHREWjogJ+mYv+eIvuWPiuWIqeS6nicsXG5cdFx0XHRBUzogJ+e+juWxrOiWqeaRqeS6nicsXG5cdFx0XHRBRDogJ+WuiemBk+eIvicsXG5cdFx0XHRBTzogJ+WuieWTpeaLiScsXG5cdFx0XHRBSTogJ+WuieWcreaLiScsXG5cdFx0XHRBUTogJ+WNl+altea0sicsXG5cdFx0XHRBRzogJ+WuieaPkOeTnOWSjOW3tOW4g+mBlCcsXG5cdFx0XHRBUjogJ+mYv+agueW7tycsXG5cdFx0XHRBTTogJ+S6nue+juWwvOS6nicsXG5cdFx0XHRBVzogJ+mYv+mtr+W3tCcsXG5cdFx0XHRBVTogJ+a+s+a0sicsXG5cdFx0XHRBVDogJ+Wlp+WcsOWIqScsXG5cdFx0XHRBWjogJ+mYv+WhnuaLnOeWhicsXG5cdFx0XHRCUzogJ+W3tOWTiOmmrCcsXG5cdFx0XHRCSDogJ+W3tOaelycsXG5cdFx0XHRCRDogJ+Wtn+WKoOaLieWciycsXG5cdFx0XHRCQjogJ+W3tOW3tOWkmuaWrycsXG5cdFx0XHRCWTogJ+eZveS/hOe+heaWrycsXG5cdFx0XHRCRTogJ+avlOWIqeaZgicsXG5cdFx0XHRCWjogJ+S8r+WIqeiMsicsXG5cdFx0XHRCSjogJ+iyneWvpycsXG5cdFx0XHRCTTogJ+eZvuaFlemBlCcsXG5cdFx0XHRCVDogJ+S4jeS4uScsXG5cdFx0XHRCTzogJ+eOu+WIqee2reS6nicsXG5cdFx0XHRCUTogJ+iNt+iYreWKoOWLkuavlOWNgCcsXG5cdFx0XHRCQTogJ+azoum7kScsXG5cdFx0XHRCVzogJ+WNmuiMqOeTpue0jScsXG5cdFx0XHRCVjogJ+W4g+mfi+WzticsXG5cdFx0XHRCUjogJ+W3tOilvycsXG5cdFx0XHRJTzogJ+iLseWxrOWNsOW6pua0i+mgmOWcsCcsXG5cdFx0XHRCTjogJ+axtuiQiicsXG5cdFx0XHRCRzogJ+S/neWKoOWIqeS6nicsXG5cdFx0XHRCRjogJ+W4g+Wfuue0jeazlee0oicsXG5cdFx0XHRCSTogJ+W4g+mahui/qicsXG5cdFx0XHRDVjogJ+S9m+W+l+inkicsXG5cdFx0XHRLSDogJ+afrOWflOWvqCcsXG5cdFx0XHRDTTogJ+WWgOm6pemahicsXG5cdFx0XHRDQTogJ+WKoOaLv+WkpycsXG5cdFx0XHRLWTogJ+mWi+abvOe+pOWzticsXG5cdFx0XHRDRjogJ+S4remdnicsXG5cdFx0XHRURDogJ+S5jeW+lycsXG5cdFx0XHRDTDogJ+aZuuWIqScsXG5cdFx0XHRDTjogJ+S4reWciycsXG5cdFx0XHRDWDogJ+iBluiqleWzticsXG5cdFx0XHRDQzogJ+enkeenkeaWr++8iOWfuuael++8iee+pOWzticsXG5cdFx0XHRDTzogJ+WTpeWAq+avlOS6nicsXG5cdFx0XHRLTTogJ+enkeaRqee+hScsXG5cdFx0XHRDRzogJ+WJm+aenOWFseWSjOWciycsXG5cdFx0XHRDRDogJ+WJm+aenOawkeS4u+WFseWSjOWciycsXG5cdFx0XHRDSzogJ+W6q+WFi+e+pOWzticsXG5cdFx0XHRDUjogJ+WTpeaWr+mBlOm7juWKoCcsXG5cdFx0XHRDSTogJ+enkeeJuei/queTpicsXG5cdFx0XHRIUjogJ+WFi+e+heWcsOS6nicsXG5cdFx0XHRDVTogJ+WPpOW3tCcsXG5cdFx0XHRDVzogJ+W6q+aLiee0oicsXG5cdFx0XHRDWTogJ+Whnua1pui3r+aWrycsXG5cdFx0XHRDWjogJ+aNt+WFiycsXG5cdFx0XHRESzogJ+S4uem6pScsXG5cdFx0XHRESjogJ+WQieW4g+aPkCcsXG5cdFx0XHRETTogJ+Wkmuexs+WwvOWFiycsXG5cdFx0XHRETzogJ+Wkmuexs+WwvOWKoCcsXG5cdFx0XHRFQzogJ+WOhOeTnOWkmueIvicsXG5cdFx0XHRFRzogJ+Wfg+WPiicsXG5cdFx0XHRTVjogJ+iWqeeIvueTpuWkmicsXG5cdFx0XHRHUTogJ+i1pOmBk+eVv+WFp+S6nicsXG5cdFx0XHRFUjogJ+WOhOeri+eJuemHjOS6nicsXG5cdFx0XHRFRTogJ+aEm+aymeWwvOS6nicsXG5cdFx0XHRTWjogJ+aWr+WogeWjq+iYrScsXG5cdFx0XHRFVDogJ+Wfg+WhnuS/hOavlOS6nicsXG5cdFx0XHRGSzogJ+emj+WFi+iYree+pOWzticsXG5cdFx0XHRGTzogJ+azlee+hee+pOWzticsXG5cdFx0XHRGSjogJ+aWkOa/nycsXG5cdFx0XHRGSTogJ+iKrOiYrScsXG5cdFx0XHRGUjogJ+azleWciycsXG5cdFx0XHRHRjogJ+azleWxrOWcreS6numCoycsXG5cdFx0XHRQRjogJ+azleWxrOazouWIqeWwvOilv+S6nicsXG5cdFx0XHRURjogJ+azleWxrOWNl+mDqOWSjOWNl+altemgmOWcsCcsXG5cdFx0XHRHQTogJ+WKoOiTrCcsXG5cdFx0XHRHTTogJ+WyoeavlOS6nicsXG5cdFx0XHRHRTogJ+agvOmtr+WQieS6nicsXG5cdFx0XHRERTogJ+W+t+WciycsXG5cdFx0XHRHSDogJ+WKoOe0jScsXG5cdFx0XHRHSTogJ+ebtOW4g+e+hemZgCcsXG5cdFx0XHRHUjogJ+W4jOiHmCcsXG5cdFx0XHRHTDogJ+agvOmZteiYrScsXG5cdFx0XHRHRDogJ+agvOael+e0jemBlCcsXG5cdFx0XHRHUDogJ+eTnOW+t+e+heaZricsXG5cdFx0XHRHVTogJ+mXnOWzticsXG5cdFx0XHRHVDogJ+WNseWcsOmmrOaLiScsXG5cdFx0XHRHRzogJ+agueilvycsXG5cdFx0XHRHTjogJ+eVv+WFp+S6nicsXG5cdFx0XHRHVzogJ+eVv+WFp+S6nuavlOe0uScsXG5cdFx0XHRHWTogJ+WcreS6numCoycsXG5cdFx0XHRIVDogJ+a1t+WcsCcsXG5cdFx0XHRITTogJ+i1q+W+t+WztuWSjOm6peWFi+WUkOe0jee+pOWzticsXG5cdFx0XHRWQTogJ+aiteiSguWyoScsXG5cdFx0XHRITjogJ+a0qumDveaLieaWrycsXG5cdFx0XHRISzogJ+S4reWci+mmmea4rycsXG5cdFx0XHRIVTogJ+WMiOeJmeWIqScsXG5cdFx0XHRJUzogJ+WGsOWzticsXG5cdFx0XHRJTjogJ+WNsOW6picsXG5cdFx0XHRJRDogJ+WNsOWwvCcsXG5cdFx0XHRJUjogJ+S8iuaclycsXG5cdFx0XHRJUTogJ+S8iuaLieWFiycsXG5cdFx0XHRJRTogJ+aEm+eIvuiYrScsXG5cdFx0XHRJTTogJ+S6uuWzticsXG5cdFx0XHRJTDogJ+S7peiJsuWIlycsXG5cdFx0XHRJVDogJ+aEj+Wkp+WIqScsXG5cdFx0XHRKTTogJ+eJmeiyt+WKoCcsXG5cdFx0XHRKUDogJ+aXpeacrCcsXG5cdFx0XHRKRTogJ+a+pOilvycsXG5cdFx0XHRKTzogJ+e0hOaXpicsXG5cdFx0XHRLWjogJ+WTiOiWqeWFiycsXG5cdFx0XHRLRTogJ+iCr+mbhScsXG5cdFx0XHRLSTogJ+WfuumHjOW3tOaWrycsXG5cdFx0XHRLUDogJ+WMl+mfkycsXG5cdFx0XHRLUjogJ+mfk+WciycsXG5cdFx0XHRLVzogJ+enkeWogeeJuScsXG5cdFx0XHRLRzogJ+WQieeIvuWQieaWrycsXG5cdFx0XHRMQTogJ+iAgeaSvicsXG5cdFx0XHRMVjogJ+aLieiEq+e2reS6nicsXG5cdFx0XHRMQjogJ+m7juW3tOWrqScsXG5cdFx0XHRMUzogJ+iQiue0ouaJmCcsXG5cdFx0XHRMUjogJ+WIqeavlOmHjOS6nicsXG5cdFx0XHRMWTogJ+WIqeavlOS6nicsXG5cdFx0XHRMSTogJ+WIl+aUr+aVpuWjq+eZuycsXG5cdFx0XHRMVDogJ+eri+mZtuWumycsXG5cdFx0XHRMVTogJ+ebp+ajruWgoScsXG5cdFx0XHRNTzogJ+S4reWci+a+s+mWgCcsXG5cdFx0XHRNRzogJ+mmrOmBlOWKoOaWr+WKoCcsXG5cdFx0XHRNVzogJ+mmrOaLiee2rScsXG5cdFx0XHRNWTogJ+mmrOS+huilv+S6nicsXG5cdFx0XHRNVjogJ+mmrOeIvuS7o+WkqycsXG5cdFx0XHRNTDogJ+mmrOmHjCcsXG5cdFx0XHRNVDogJ+mmrOiAs+S7licsXG5cdFx0XHRNSDogJ+mmrOe0ueeIvue+pOWzticsXG5cdFx0XHRNUTogJ+mmrOaPkOWwvOWFiycsXG5cdFx0XHRNUjogJ+avm+mHjOWhlOWwvOS6nicsXG5cdFx0XHRNVTogJ+avm+mHjOijmOaWrycsXG5cdFx0XHRZVDogJ+mmrOe0hOeJuScsXG5cdFx0XHRNWDogJ+WiqOilv+WTpScsXG5cdFx0XHRGTTogJ+WvhuWFi+e+heWwvOilv+S6nuiBr+mCpicsXG5cdFx0XHRNRDogJ+aRqeeIvuWkmueTpicsXG5cdFx0XHRNQzogJ+aRqee0jeWTpScsXG5cdFx0XHRNTjogJ+iSmeWPpCcsXG5cdFx0XHRNRTogJ+m7keWxsScsXG5cdFx0XHRNUzogJ+iSmeeJueWhnuaLieeJuScsXG5cdFx0XHRNQTogJ+aRqea0m+WTpScsXG5cdFx0XHRNWjogJ+iOq+ahkeavlOWFiycsXG5cdFx0XHRNTTogJ+e3rOeUuCcsXG5cdFx0XHROQTogJ+e0jeexs+avlOS6nicsXG5cdFx0XHROUjogJ+eRmemtrycsXG5cdFx0XHROUDogJ+WwvOaziueIvicsXG5cdFx0XHROTDogJ+iNt+iYrScsXG5cdFx0XHROQzogJ+aWsOWWgOmHjOWkmuWwvOS6nicsXG5cdFx0XHROWjogJ+aWsOilv+iYrScsXG5cdFx0XHROSTogJ+WwvOWKoOaLieeTnCcsXG5cdFx0XHRORTogJ+WwvOaXpeeIvicsXG5cdFx0XHRORzogJ+WwvOaXpeWIqeS6nicsXG5cdFx0XHROVTogJ+e0kOWfgycsXG5cdFx0XHRORjogJ+irvuemj+WFi+WzticsXG5cdFx0XHRNSzogJ+WMl+mmrOWFtumgkycsXG5cdFx0XHRNUDogJ+WMl+mmrOWIqeWuiee0jee+pOWzticsXG5cdFx0XHROTzogJ+aMquWogScsXG5cdFx0XHRPTTogJ+mYv+abvCcsXG5cdFx0XHRQSzogJ+W3tOWfuuaWr+WdpicsXG5cdFx0XHRQVzogJ+W4leWLnicsXG5cdFx0XHRQUzogJ+W3tOWLkuaWr+WdpicsXG5cdFx0XHRQQTogJ+W3tOaLv+mmrCcsXG5cdFx0XHRQRzogJ+W3tOW4g+S6nuaWsOeVv+WFp+S6nicsXG5cdFx0XHRQWTogJ+W3tOaLieWcrScsXG5cdFx0XHRQRTogJ+enmOmtrycsXG5cdFx0XHRQSDogJ+iPsuW+i+izkycsXG5cdFx0XHRQTjogJ+earueJueiCr+e+pOWzticsXG5cdFx0XHRQTDogJ+azouiYrScsXG5cdFx0XHRQVDogJ+iRoeiQhOeJmScsXG5cdFx0XHRQUjogJ+azouWkmum7juWQhCcsXG5cdFx0XHRRQTogJ+WNoeWhlOeIvicsXG5cdFx0XHRSRTogJ+eVmeWwvOaxqicsXG5cdFx0XHRSTzogJ+e+hemmrOWwvOS6nicsXG5cdFx0XHRSVTogJ+S/hOe+heaWrycsXG5cdFx0XHRSVzogJ+ebp+aXuumBlCcsXG5cdFx0XHRCTDogJ+iBluW3tOazsOWLkuexsycsXG5cdFx0XHRTSDogJ+iBlua1t+WAq+WonOOAgemYv+ajruadvuWSjOeJuemHjOaWr+Wdpi3pgZTluqvlsLzkup4nLFxuXHRcdFx0S046ICfogZbln7rojKjlkozlsLzntq3mlq8nLFxuXHRcdFx0TEM6ICfogZbnm6fopb/kup4nLFxuXHRcdFx0TUY6ICfms5XlsazogZbppqzkuIEnLFxuXHRcdFx0UE06ICfogZbnmq7ln4PniL7lkozlr4blhYvpmoYnLFxuXHRcdFx0VkM6ICfogZbmlofmo67nibnlkozmoLzmnpfntI3kuIHmlq8nLFxuXHRcdFx0V1M6ICfolqnmkankup4nLFxuXHRcdFx0U006ICfogZbppqzlipvoq74nLFxuXHRcdFx0U1Q6ICfogZblpJrnvo7lkozmma7mnpfopb/mr5QnLFxuXHRcdFx0U0E6ICfmspnlnLDpmL/mi4nkvK8nLFxuXHRcdFx0U046ICfloZ7lhafliqDniL4nLFxuXHRcdFx0UlM6ICfloZ7niL7ntq3kup4nLFxuXHRcdFx0U0M6ICfloZ7oiIzniL4nLFxuXHRcdFx0U0w6ICfloZ7mi4nliKnmmIInLFxuXHRcdFx0U0c6ICfmlrDliqDlnaEnLFxuXHRcdFx0U1g6ICfojbflsazogZbppqzkuIEnLFxuXHRcdFx0U0s6ICfmlq/mtJvkvJDlhYsnLFxuXHRcdFx0U0k6ICfmlq/mtJvmloflsLzkup4nLFxuXHRcdFx0U0I6ICfmiYDnvoXploDnvqTls7YnLFxuXHRcdFx0U086ICfntKLppqzph4wnLFxuXHRcdFx0WkE6ICfljZfpnZ4nLFxuXHRcdFx0R1M6ICfljZfllqzmsrvkup7lkozljZfmoZHlqIHlpYfnvqTls7YnLFxuXHRcdFx0U1M6ICfljZfomIfkuLknLFxuXHRcdFx0RVM6ICfopb/nj63niZknLFxuXHRcdFx0TEs6ICfmlq/ph4zomK3ljaEnLFxuXHRcdFx0U0Q6ICfomIfkuLknLFxuXHRcdFx0U1I6ICfomIfph4zljZcnLFxuXHRcdFx0U0o6ICfmlq/nk6bniL7lt7Tlkozmj5rppqzlu7YnLFxuXHRcdFx0U0U6ICfnkZ7lhbgnLFxuXHRcdFx0Q0g6ICfnkZ7lo6snLFxuXHRcdFx0U1k6ICfmlZjliKnkup4nLFxuXHRcdFx0VFc6ICfkuK3lnIvoh7rngaMnLFxuXHRcdFx0VEo6ICfloZTlkInlhYsnLFxuXHRcdFx0VFo6ICflnabmoZHlsLzkup4nLFxuXHRcdFx0VEg6ICfms7DlnIsnLFxuXHRcdFx0VEw6ICfmnbHluJ3msbYnLFxuXHRcdFx0VEc6ICflpJrlk6UnLFxuXHRcdFx0VEs6ICfmiZjlhYvli54nLFxuXHRcdFx0VE86ICfmua/liqAnLFxuXHRcdFx0VFQ6ICfljYPph4zpgZTlkozlpJrlt7Tlk6UnLFxuXHRcdFx0VE46ICfnqoHlsLzopb/kup4nLFxuXHRcdFx0VFI6ICflnJ/ogLPlhbYnLFxuXHRcdFx0VE06ICflnJ/luqvmm7wnLFxuXHRcdFx0VEM6ICfnibnlhYvmlq/lkozlh7Hnp5Hmlq/nvqTls7YnLFxuXHRcdFx0VFY6ICflnJbnk6bnm6cnLFxuXHRcdFx0VUc6ICfng4/lubLpgZQnLFxuXHRcdFx0VUE6ICfng4/lhYvomK0nLFxuXHRcdFx0QUU6ICfpmL/oga/phYsnLFxuXHRcdFx0R0I6ICfoi7HlnIsnLFxuXHRcdFx0VVM6ICfnvo7lnIsnLFxuXHRcdFx0VU06ICfnvo7lnIvmnKzlnJ/lpJblsI/ls7bltrwnLFxuXHRcdFx0VVk6ICfng4/mi4nlnK0nLFxuXHRcdFx0VVo6ICfng4/ojLLliKXlhYsnLFxuXHRcdFx0VlU6ICfnk6bliqrpmL/lnJYnLFxuXHRcdFx0VkU6ICflp5TlhafnkZ7mi4knLFxuXHRcdFx0Vk46ICfotorljZcnLFxuXHRcdFx0Vkc6ICfoi7HlsazomZXlpbPnvqTls7YnLFxuXHRcdFx0Vkk6ICfnvo7lsazomZXlpbPnvqTls7YnLFxuXHRcdFx0V0Y6ICfnk6bliKnmlq/lkozlr4zlnJbntI0nLFxuXHRcdFx0RUg6ICfopb/mkpLlk4jmi4knLFxuXHRcdFx0WUU6ICfkuZ/ploAnLFxuXHRcdFx0Wk06ICfotIrmr5Tkup4nLFxuXHRcdFx0Wlc6ICfmtKXlt7TluIPpn4snLFxuXHRcdH07XG5cdH0gZWxzZSBpZiAoWyd6aC10dyddLmluY2x1ZGVzKHdnVXNlckxhbmd1YWdlKSkge1xuXHRcdHJldHVybiB7XG5cdFx0XHRBRjogJ+mYv+WvjOaxlycsXG5cdFx0XHRBWDogJ+Wlp+iYrScsXG5cdFx0XHRBTDogJ+mYv+eIvuW3tOWwvOS6nicsXG5cdFx0XHREWjogJ+mYv+eIvuWPiuWIqeS6nicsXG5cdFx0XHRBUzogJ+e+juWxrOiWqeaRqeS6nicsXG5cdFx0XHRBRDogJ+WuiemBk+eIvicsXG5cdFx0XHRBTzogJ+WuieWTpeaLiScsXG5cdFx0XHRBSTogJ+WuieWcreaLiScsXG5cdFx0XHRBUTogJ+WNl+altea0sicsXG5cdFx0XHRBRzogJ+WuieWcsOWNoeWPiuW3tOW4g+mBlCcsXG5cdFx0XHRBUjogJ+mYv+agueW7tycsXG5cdFx0XHRBTTogJ+S6nue+juWwvOS6nicsXG5cdFx0XHRBVzogJ+mYv+mtr+W3tCcsXG5cdFx0XHRBVTogJ+a+s+a0sicsXG5cdFx0XHRBVDogJ+Wlp+WcsOWIqScsXG5cdFx0XHRBWjogJ+S6nuWhnuaLnOeEticsXG5cdFx0XHRCUzogJ+W3tOWTiOmmrCcsXG5cdFx0XHRCSDogJ+W3tOaelycsXG5cdFx0XHRCRDogJ+Wtn+WKoOaLieWciycsXG5cdFx0XHRCQjogJ+W3tOiyneWkmicsXG5cdFx0XHRCWTogJ+eZveS/hOe+heaWrycsXG5cdFx0XHRCRTogJ+avlOWIqeaZgicsXG5cdFx0XHRCWjogJ+iynemHjOaWrycsXG5cdFx0XHRCSjogJ+iyneWNlycsXG5cdFx0XHRCTTogJ+eZvuaFlemBlCcsXG5cdFx0XHRCVDogJ+S4jeS4uScsXG5cdFx0XHRCTzogJ+eOu+WIqee2reS6nicsXG5cdFx0XHRCUTogJ+iNt+iYreWKoOWLkuavlOWNgCcsXG5cdFx0XHRCQTogJ+azoui1qycsXG5cdFx0XHRCVzogJ+azouacremCoycsXG5cdFx0XHRCVjogJ+W4g+mfi+WzticsXG5cdFx0XHRCUjogJ+W3tOilvycsXG5cdFx0XHRJTzogJ+iLseWxrOWNsOW6pua0i+mgmOWcsCcsXG5cdFx0XHRCTjogJ+axtuiQiicsXG5cdFx0XHRCRzogJ+S/neWKoOWIqeS6nicsXG5cdFx0XHRCRjogJ+W4g+WQiee0jeazlee0oicsXG5cdFx0XHRCSTogJ+iSsumahuWcsCcsXG5cdFx0XHRDVjogJ+e2reW+t+inkicsXG5cdFx0XHRLSDogJ+afrOWflOWvqCcsXG5cdFx0XHRDTTogJ+WWgOm6pemahicsXG5cdFx0XHRDQTogJ+WKoOaLv+WkpycsXG5cdFx0XHRLWTogJ+mWi+abvOe+pOWzticsXG5cdFx0XHRDRjogJ+S4remdnicsXG5cdFx0XHRURDogJ+afpeW+tycsXG5cdFx0XHRDTDogJ+aZuuWIqScsXG5cdFx0XHRDTjogJ+S4reWciycsXG5cdFx0XHRDWDogJ+iBluiqleWzticsXG5cdFx0XHRDQzogJ+enkeenkeaWr++8iOWfuuael++8iee+pOWzticsXG5cdFx0XHRDTzogJ+WTpeWAq+avlOS6nicsXG5cdFx0XHRLTTogJ+iRm+aRqScsXG5cdFx0XHRDRzogJ+WJm+aenOWFseWSjOWciycsXG5cdFx0XHRDRDogJ+WJm+aenOawkeS4u+WFseWSjOWciycsXG5cdFx0XHRDSzogJ+W6q+WFi+e+pOWzticsXG5cdFx0XHRDUjogJ+WTpeaWr+Wkp+m7juWKoCcsXG5cdFx0XHRDSTogJ+ixoeeJmea1t+WyuCcsXG5cdFx0XHRIUjogJ+WFi+e+heWfg+ilv+S6nicsXG5cdFx0XHRDVTogJ+WPpOW3tCcsXG5cdFx0XHRDVzogJ+WPpOaLiee0oicsXG5cdFx0XHRDWTogJ+izveaZruWLkuaWrycsXG5cdFx0XHRDWjogJ+aNt+WFiycsXG5cdFx0XHRESzogJ+S4uem6pScsXG5cdFx0XHRESjogJ+WQieW4g+WcsCcsXG5cdFx0XHRETTogJ+Wkmuexs+WwvOWFiycsXG5cdFx0XHRETzogJ+WkmuaYjuWwvOWKoCcsXG5cdFx0XHRFQzogJ+WOhOeTnOWkmicsXG5cdFx0XHRFRzogJ+Wfg+WPiicsXG5cdFx0XHRTVjogJ+iWqeeIvueTpuWkmicsXG5cdFx0XHRHUTogJ+i1pOmBk+W5vuWFp+S6nicsXG5cdFx0XHRFUjogJ+WOhOWIqeWeguS6nicsXG5cdFx0XHRFRTogJ+aEm+aymeWwvOS6nicsXG5cdFx0XHRTWjogJ+WPsueTpuW4neWwvCcsXG5cdFx0XHRFVDogJ+iho+e0ouavlOS6nicsXG5cdFx0XHRGSzogJ+emj+WFi+iYree+pOWzticsXG5cdFx0XHRGTzogJ+azlee+hee+pOWzticsXG5cdFx0XHRGSjogJ+aWkOa/nycsXG5cdFx0XHRGSTogJ+iKrOiYrScsXG5cdFx0XHRGUjogJ+azleWciycsXG5cdFx0XHRHRjogJ+azleWxrOWcreS6numCoycsXG5cdFx0XHRQRjogJ+azleWxrOeOu+mHjOWwvOilv+S6nicsXG5cdFx0XHRURjogJ+azleWxrOWNl+mDqOWSjOWNl+altemgmOWcsCcsXG5cdFx0XHRHQTogJ+WKoOW9rScsXG5cdFx0XHRHTTogJ+eUmOavlOS6nicsXG5cdFx0XHRHRTogJ+WWrOayu+S6nicsXG5cdFx0XHRERTogJ+W+t+WciycsXG5cdFx0XHRHSDogJ+i/pue0jScsXG5cdFx0XHRHSTogJ+ebtOW4g+e+hemZgCcsXG5cdFx0XHRHUjogJ+W4jOiHmCcsXG5cdFx0XHRHTDogJ+agvOmZteiYrScsXG5cdFx0XHRHRDogJ+agvOeRnumCo+mBlCcsXG5cdFx0XHRHUDogJ+eTnOW+t+e+heaZricsXG5cdFx0XHRHVTogJ+mXnOWzticsXG5cdFx0XHRHVDogJ+eTnOWcsOmmrOaLiScsXG5cdFx0XHRHRzogJ+agueilvycsXG5cdFx0XHRHTjogJ+W5vuWFp+S6nicsXG5cdFx0XHRHVzogJ+W5vuWFp+S6nuavlOe0oicsXG5cdFx0XHRHWTogJ+iTi+S6numCoycsXG5cdFx0XHRIVDogJ+a1t+WcsCcsXG5cdFx0XHRITTogJ+i1q+W+t+WztuWSjOm6peWFi+WUkOe0jee+pOWzticsXG5cdFx0XHRWQTogJ+aiteiSguWyoScsXG5cdFx0XHRITjogJ+Wuj+mDveaLieaWrycsXG5cdFx0XHRISzogJ+S4reWci+mmmea4rycsXG5cdFx0XHRIVTogJ+WMiOeJmeWIqScsXG5cdFx0XHRJUzogJ+WGsOWzticsXG5cdFx0XHRJTjogJ+WNsOW6picsXG5cdFx0XHRJRDogJ+WNsOWwvCcsXG5cdFx0XHRJUjogJ+S8iuaclycsXG5cdFx0XHRJUTogJ+S8iuaLieWFiycsXG5cdFx0XHRJRTogJ+aEm+eIvuiYrScsXG5cdFx0XHRJTTogJ+abvOWzticsXG5cdFx0XHRJTDogJ+S7peiJsuWIlycsXG5cdFx0XHRJVDogJ+e+qeWkp+WIqScsXG5cdFx0XHRKTTogJ+eJmeiyt+WKoCcsXG5cdFx0XHRKUDogJ+aXpeacrCcsXG5cdFx0XHRKRTogJ+a+pOilvycsXG5cdFx0XHRKTzogJ+e0hOaXpicsXG5cdFx0XHRLWjogJ+WTiOiWqeWFiycsXG5cdFx0XHRLRTogJ+iCr+S6nicsXG5cdFx0XHRLSTogJ+WQiemHjOW3tOaWrycsXG5cdFx0XHRLUDogJ+WMl+mfkycsXG5cdFx0XHRLUjogJ+mfk+WciycsXG5cdFx0XHRLVzogJ+enkeWogeeJuScsXG5cdFx0XHRLRzogJ+WQieeIvuWQieaWrycsXG5cdFx0XHRMQTogJ+iAgeaSvicsXG5cdFx0XHRMVjogJ+aLieiEq+e2reS6nicsXG5cdFx0XHRMQjogJ+m7juW3tOWrqScsXG5cdFx0XHRMUzogJ+iztOe0ouaJmCcsXG5cdFx0XHRMUjogJ+iztOavlOeRnuS6nicsXG5cdFx0XHRMWTogJ+WIqeavlOS6nicsXG5cdFx0XHRMSTogJ+WIl+aUr+aVpuaWr+eZuycsXG5cdFx0XHRMVDogJ+eri+mZtuWumycsXG5cdFx0XHRMVTogJ+ebp+ajruWgoScsXG5cdFx0XHRNTzogJ+S4reWci+a+s+mWgCcsXG5cdFx0XHRNRzogJ+mmrOmBlOWKoOaWr+WKoCcsXG5cdFx0XHRNVzogJ+mmrOaLieWogScsXG5cdFx0XHRNWTogJ+mmrOS+huilv+S6nicsXG5cdFx0XHRNVjogJ+mmrOeIvuWcsOWkqycsXG5cdFx0XHRNTDogJ+mmrOmHjCcsXG5cdFx0XHRNVDogJ+mmrOeIvuS7licsXG5cdFx0XHRNSDogJ+mmrOe0ueeIvue+pOWzticsXG5cdFx0XHRNUTogJ+mmrOaPkOWwvOWFiycsXG5cdFx0XHRNUjogJ+iMheWIqeWhlOWwvOS6nicsXG5cdFx0XHRNVTogJ+aooemHjOilv+aWrycsXG5cdFx0XHRZVDogJ+mmrOe0hOeJuScsXG5cdFx0XHRNWDogJ+WiqOilv+WTpScsXG5cdFx0XHRGTTogJ+WvhuWFi+e+heWwvOilv+S6nuiBr+mCpicsXG5cdFx0XHRNRDogJ+aRqeeIvuWkmueTpicsXG5cdFx0XHRNQzogJ+aRqee0jeWTpScsXG5cdFx0XHRNTjogJ+iSmeWPpCcsXG5cdFx0XHRNRTogJ+iSmeeJueWFp+WTpee+hScsXG5cdFx0XHRNUzogJ+iSmeWTsuiHmCcsXG5cdFx0XHRNQTogJ+aRqea0m+WTpScsXG5cdFx0XHRNWjogJ+iOq+S4ieavlOWFiycsXG5cdFx0XHRNTTogJ+e3rOeUuCcsXG5cdFx0XHROQTogJ+e0jeexs+avlOS6nicsXG5cdFx0XHROUjogJ+irvumtrycsXG5cdFx0XHROUDogJ+WwvOaziueIvicsXG5cdFx0XHROTDogJ+iNt+iYrScsXG5cdFx0XHROQzogJ+aWsOWWgOmHjOWkmuWwvOS6nicsXG5cdFx0XHROWjogJ+e0kOilv+iYrScsXG5cdFx0XHROSTogJ+WwvOWKoOaLieeTnCcsXG5cdFx0XHRORTogJ+WwvOaXpScsXG5cdFx0XHRORzogJ+WliOWPiuWIqeS6nicsXG5cdFx0XHROVTogJ+e0kOWfgycsXG5cdFx0XHRORjogJ+irvuemj+WFi+WzticsXG5cdFx0XHRNSzogJ+WMl+mmrOWFtumgkycsXG5cdFx0XHRNUDogJ+WMl+mmrOWIqeWuiee0jee+pOWzticsXG5cdFx0XHROTzogJ+aMquWogScsXG5cdFx0XHRPTTogJ+mYv+abvCcsXG5cdFx0XHRQSzogJ+W3tOWfuuaWr+WdpicsXG5cdFx0XHRQVzogJ+W4m+eQiScsXG5cdFx0XHRQUzogJ+W3tOWLkuaWr+WdpicsXG5cdFx0XHRQQTogJ+W3tOaLv+mmrCcsXG5cdFx0XHRQRzogJ+W3tOW4g+S6nue0kOW5vuWFp+S6nicsXG5cdFx0XHRQWTogJ+W3tOaLieWcrScsXG5cdFx0XHRQRTogJ+enmOmtrycsXG5cdFx0XHRQSDogJ+iPsuW+i+izkycsXG5cdFx0XHRQTjogJ+earueJueiCr+e+pOWzticsXG5cdFx0XHRQTDogJ+azouiYrScsXG5cdFx0XHRQVDogJ+iRoeiQhOeJmScsXG5cdFx0XHRQUjogJ+azouWkmum7juWQhCcsXG5cdFx0XHRRQTogJ+WNoemBlCcsXG5cdFx0XHRSRTogJ+eVmeWwvOaXuicsXG5cdFx0XHRSTzogJ+e+hemmrOWwvOS6nicsXG5cdFx0XHRSVTogJ+S/hOe+heaWrycsXG5cdFx0XHRSVzogJ+ebp+WuiemBlCcsXG5cdFx0XHRCTDogJ+iBluW3tOazsOWLkuexsycsXG5cdFx0XHRTSDogJ+iBlua1t+iTruWonOOAgemYv+ajruadvuWSjOeJuemHjOaWr+Wdpi3pgZTluqvlsLzkup4nLFxuXHRcdFx0S046ICfogZblhYvph4zmlq/lpJrnpo/lj4rlsLzntq3mlq8nLFxuXHRcdFx0TEM6ICfogZbpnLLopb/kup4nLFxuXHRcdFx0TUY6ICfms5XlsazogZbppqzkuIEnLFxuXHRcdFx0UE06ICfogZbnmq7ogLboiIflr4blhYvpmoYnLFxuXHRcdFx0VkM6ICfogZbmlofmo67lj4rmoLznkZ7pgqPkuIEnLFxuXHRcdFx0V1M6ICfolqnmkankup4nLFxuXHRcdFx0U006ICfogZbppqzliKnoq74nLFxuXHRcdFx0U1Q6ICfogZblpJrnvo7mma7mnpfopb/mr5QnLFxuXHRcdFx0U0E6ICfmspnng4/lnLDpmL/mi4nkvK8nLFxuXHRcdFx0U046ICfloZ7lhafliqDniL4nLFxuXHRcdFx0UlM6ICfloZ7niL7ntq3kup4nLFxuXHRcdFx0U0M6ICfloZ7luK3niL4nLFxuXHRcdFx0U0w6ICfnjYXlrZDlsbEnLFxuXHRcdFx0U0c6ICfmlrDliqDlnaEnLFxuXHRcdFx0U1g6ICfojbflsazogZbppqzkuIEnLFxuXHRcdFx0U0s6ICfmlq/mtJvkvJDlhYsnLFxuXHRcdFx0U0k6ICfmlq/mtJvntq3lsLzkup4nLFxuXHRcdFx0U0I6ICfntKLnvoXploDnvqTls7YnLFxuXHRcdFx0U086ICfntKLppqzliKnkup4nLFxuXHRcdFx0WkE6ICfljZfpnZ4nLFxuXHRcdFx0R1M6ICfljZfllqzmsrvkup7lkozljZfmoZHlqIHlpYfnvqTls7YnLFxuXHRcdFx0U1M6ICfljZfomIfkuLknLFxuXHRcdFx0RVM6ICfopb/nj63niZknLFxuXHRcdFx0TEs6ICfmlq/ph4zomK3ljaEnLFxuXHRcdFx0U0Q6ICfomIfkuLknLFxuXHRcdFx0U1I6ICfomIfliKnljZcnLFxuXHRcdFx0U0o6ICfmlq/nk6bniL7lt7Tlkozmj5rppqzlu7YnLFxuXHRcdFx0U0U6ICfnkZ7lhbgnLFxuXHRcdFx0Q0g6ICfnkZ7lo6snLFxuXHRcdFx0U1k6ICfmlZjliKnkup4nLFxuXHRcdFx0VFc6ICfkuK3lnIvoh7rngaMnLFxuXHRcdFx0VEo6ICfloZTlkInlhYsnLFxuXHRcdFx0VFo6ICflnablsJrlsLzkup4nLFxuXHRcdFx0VEg6ICfms7DlnIsnLFxuXHRcdFx0VEw6ICfmnbHluJ3msbYnLFxuXHRcdFx0VEc6ICflpJrlk6UnLFxuXHRcdFx0VEs6ICfmiZjlhYvli54nLFxuXHRcdFx0VE86ICfmnbHliqAnLFxuXHRcdFx0VFQ6ICfljYPph4zpgZTlj4rmiZjlt7Tlk6UnLFxuXHRcdFx0VE46ICfnqoHlsLzopb/kup4nLFxuXHRcdFx0VFI6ICflnJ/ogLPlhbYnLFxuXHRcdFx0VE06ICflnJ/luqvmm7wnLFxuXHRcdFx0VEM6ICflnJ/lhYvlh7Hlj6/nvqTls7YnLFxuXHRcdFx0VFY6ICflkJDnk6bpra8nLFxuXHRcdFx0VUc6ICfng4/lubLpgZQnLFxuXHRcdFx0VUE6ICfng4/lhYvomK0nLFxuXHRcdFx0QUU6ICfpmL/oga8nLFxuXHRcdFx0R0I6ICfoi7HlnIsnLFxuXHRcdFx0VVM6ICfnvo7lnIsnLFxuXHRcdFx0VU06ICfnvo7lnIvmnKzlnJ/lpJblsI/ls7bltrwnLFxuXHRcdFx0VVk6ICfng4/mi4nlnK0nLFxuXHRcdFx0VVo6ICfng4/ojLLliKXlhYsnLFxuXHRcdFx0VlU6ICfokKzpgqPmnZwnLFxuXHRcdFx0VkU6ICflp5TlhafnkZ7mi4knLFxuXHRcdFx0Vk46ICfotorljZcnLFxuXHRcdFx0Vkc6ICfoi7Hlsazntq3kuqznvqTls7YnLFxuXHRcdFx0Vkk6ICfnvo7lsazntq3kuqznvqTls7YnLFxuXHRcdFx0V0Y6ICfnk6bliKnmlq/lkozlr4zlnJbntI0nLFxuXHRcdFx0RUg6ICfopb/mkpLlk4jmi4knLFxuXHRcdFx0WUU6ICfokYnploAnLFxuXHRcdFx0Wk06ICflsJrmr5Tkup4nLFxuXHRcdFx0Wlc6ICfovpvlt7TlqIEnLFxuXHRcdH07XG5cdH0gZWxzZSBpZiAoWyd6aC1teScsICd6aC1zZyddLmluY2x1ZGVzKHdnVXNlckxhbmd1YWdlKSkge1xuXHRcdHJldHVybiB7XG5cdFx0XHRBRjogJ+mYv+WvjOaxlycsXG5cdFx0XHRBWDogJ+WlpeWFsCcsXG5cdFx0XHRBTDogJ+mYv+WwlOW3tOWwvOS6micsXG5cdFx0XHREWjogJ+mYv+WwlOWPiuWIqeS6micsXG5cdFx0XHRBUzogJ+e+juWxnuiQqOaRqeS6micsXG5cdFx0XHRBRDogJ+WuiemBk+WwlCcsXG5cdFx0XHRBTzogJ+WuieWTpeaLiScsXG5cdFx0XHRBSTogJ+WuieWcreaLiScsXG5cdFx0XHRBUTogJ+WNl+aegea0sicsXG5cdFx0XHRBRzogJ+WuieaPkOeTnOWSjOW3tOW4g+i+vicsXG5cdFx0XHRBUjogJ+mYv+agueW7tycsXG5cdFx0XHRBTTogJ+S6mue+juWwvOS6micsXG5cdFx0XHRBVzogJ+mYv+mygeW3tCcsXG5cdFx0XHRBVTogJ+a+s+Wkp+WIqeS6micsXG5cdFx0XHRBVDogJ+WlpeWcsOWIqScsXG5cdFx0XHRBWjogJ+mYv+WhnuaLnOeWhicsXG5cdFx0XHRCUzogJ+W3tOWTiOmprCcsXG5cdFx0XHRCSDogJ+W3tOaelycsXG5cdFx0XHRCRDogJ+Wtn+WKoOaLieWbvScsXG5cdFx0XHRCQjogJ+W3tOW3tOWkmuaWrycsXG5cdFx0XHRCWTogJ+eZveS/hOe9l+aWrycsXG5cdFx0XHRCRTogJ+avlOWIqeaXticsXG5cdFx0XHRCWjogJ+S8r+WIqeWFuScsXG5cdFx0XHRCSjogJ+i0neWugScsXG5cdFx0XHRCTTogJ+eZvuaFleWkpycsXG5cdFx0XHRCVDogJ+S4jeS4uScsXG5cdFx0XHRCTzogJ+eOu+WIqee7tOS6micsXG5cdFx0XHRCUTogJ+iNt+WFsOWKoOWLkuavlOWMuicsXG5cdFx0XHRCQTogJ+azoum7kScsXG5cdFx0XHRCVzogJ+WNmuiMqOeTpue6sycsXG5cdFx0XHRCVjogJ+W4g+mfpuWymycsXG5cdFx0XHRCUjogJ+W3tOilvycsXG5cdFx0XHRJTzogJ+iLseWxnuWNsOW6pua0i+mihuWcsCcsXG5cdFx0XHRCTjogJ+axtuiOsScsXG5cdFx0XHRCRzogJ+S/neWKoOWIqeS6micsXG5cdFx0XHRCRjogJ+W4g+Wfuue6s+azlee0oicsXG5cdFx0XHRCSTogJ+W4g+mahui/qicsXG5cdFx0XHRDVjogJ+S9m+W+l+inkicsXG5cdFx0XHRLSDogJ+afrOWflOWvqCcsXG5cdFx0XHRDTTogJ+WWgOm6pumahicsXG5cdFx0XHRDQTogJ+WKoOaLv+WkpycsXG5cdFx0XHRLWTogJ+W8gOabvOe+pOWymycsXG5cdFx0XHRDRjogJ+S4remdnicsXG5cdFx0XHRURDogJ+S5jeW+lycsXG5cdFx0XHRDTDogJ+aZuuWIqScsXG5cdFx0XHRDTjogJ+S4reWbvScsXG5cdFx0XHRDWDogJ+Wco+ivnuWymycsXG5cdFx0XHRDQzogJ+enkeenkeaWr++8iOWfuuael++8iee+pOWymycsXG5cdFx0XHRDTzogJ+WTpeS8puavlOS6micsXG5cdFx0XHRLTTogJ+enkeaRqee9lycsXG5cdFx0XHRDRzogJ+WImuaenOWFseWSjOWbvScsXG5cdFx0XHRDRDogJ+WImuaenOawkeS4u+WFseWSjOWbvScsXG5cdFx0XHRDSzogJ+W6k+WFi+e+pOWymycsXG5cdFx0XHRDUjogJ+WTpeaWr+i+vum7juWKoCcsXG5cdFx0XHRDSTogJ+ixoeeJmea1t+WyuCcsXG5cdFx0XHRIUjogJ+WFi+e9l+WcsOS6micsXG5cdFx0XHRDVTogJ+WPpOW3tCcsXG5cdFx0XHRDVzogJ+W6k+aLiee0oicsXG5cdFx0XHRDWTogJ+Whnua1pui3r+aWrycsXG5cdFx0XHRDWjogJ+aNt+WFiycsXG5cdFx0XHRESzogJ+S4uem6picsXG5cdFx0XHRESjogJ+WQieW4g+aPkCcsXG5cdFx0XHRETTogJ+Wkmuexs+WwvOWFiycsXG5cdFx0XHRETzogJ+Wkmuexs+WwvOWKoCcsXG5cdFx0XHRFQzogJ+WOhOeTnOWkmuWwlCcsXG5cdFx0XHRFRzogJ+Wfg+WPiicsXG5cdFx0XHRTVjogJ+iQqOWwlOeTpuWkmicsXG5cdFx0XHRHUTogJ+i1pOmBk+WHoOWGheS6micsXG5cdFx0XHRFUjogJ+WOhOeri+eJuemHjOS6micsXG5cdFx0XHRFRTogJ+eIseaymeWwvOS6micsXG5cdFx0XHRTWjogJ+aWr+WogeWjq+WFsCcsXG5cdFx0XHRFVDogJ+Wfg+WhnuS/hOavlOS6micsXG5cdFx0XHRGSzogJ+emj+WFi+WFsOe+pOWymycsXG5cdFx0XHRGTzogJ+azlee9l+e+pOWymycsXG5cdFx0XHRGSjogJ+aWkOa1jicsXG5cdFx0XHRGSTogJ+iKrOWFsCcsXG5cdFx0XHRGUjogJ+azleWbvScsXG5cdFx0XHRHRjogJ+azleWxnuWcreS6mumCoycsXG5cdFx0XHRQRjogJ+azleWxnuazouWIqeWwvOilv+S6micsXG5cdFx0XHRURjogJ+azleWxnuWNl+mDqOWSjOWNl+aegemihuWcsCcsXG5cdFx0XHRHQTogJ+WKoOiTrCcsXG5cdFx0XHRHTTogJ+WGiOavlOS6micsXG5cdFx0XHRHRTogJ+agvOmygeWQieS6micsXG5cdFx0XHRERTogJ+W+t+WbvScsXG5cdFx0XHRHSDogJ+WKoOe6sycsXG5cdFx0XHRHSTogJ+ebtOW4g+e9l+mZgCcsXG5cdFx0XHRHUjogJ+W4jOiFiicsXG5cdFx0XHRHTDogJ+agvOmZteWFsCcsXG5cdFx0XHRHRDogJ+agvOael+e6s+i+vicsXG5cdFx0XHRHUDogJ+eTnOW+t+e9l+aZricsXG5cdFx0XHRHVTogJ+WFs+WymycsXG5cdFx0XHRHVDogJ+WNseWcsOmprOaLiScsXG5cdFx0XHRHRzogJ+agueilvycsXG5cdFx0XHRHTjogJ+WHoOWGheS6micsXG5cdFx0XHRHVzogJ+WHoOWGheS6muavlOe7jScsXG5cdFx0XHRHWTogJ+WcreS6mumCoycsXG5cdFx0XHRIVDogJ+a1t+WcsCcsXG5cdFx0XHRITTogJ+i1q+W+t+Wym+WSjOm6puWFi+WUkOe6s+e+pOWymycsXG5cdFx0XHRWQTogJ+aiteiSguWGiCcsXG5cdFx0XHRITjogJ+a0qumDveaLieaWrycsXG5cdFx0XHRISzogJ+S4reWbvemmmea4rycsXG5cdFx0XHRIVTogJ+WMiOeJmeWIqScsXG5cdFx0XHRJUzogJ+WGsOWymycsXG5cdFx0XHRJTjogJ+WNsOW6picsXG5cdFx0XHRJRDogJ+WNsOWwvCcsXG5cdFx0XHRJUjogJ+S8iuaclycsXG5cdFx0XHRJUTogJ+S8iuaLieWFiycsXG5cdFx0XHRJRTogJ+eIseWwlOWFsCcsXG5cdFx0XHRJTTogJ+mprOaBqeWymycsXG5cdFx0XHRJTDogJ+S7peiJsuWIlycsXG5cdFx0XHRJVDogJ+aEj+Wkp+WIqScsXG5cdFx0XHRKTTogJ+eJmeS5sOWKoCcsXG5cdFx0XHRKUDogJ+aXpeacrCcsXG5cdFx0XHRKRTogJ+azveilvycsXG5cdFx0XHRKTzogJ+e6puaXpicsXG5cdFx0XHRLWjogJ+WTiOiQqOWFi+aWr+WdpicsXG5cdFx0XHRLRTogJ+iCr+WwvOS6micsXG5cdFx0XHRLSTogJ+WfuumHjOW3tOaWrycsXG5cdFx0XHRLUDogJ+WMl+mfqScsXG5cdFx0XHRLUjogJ+mfqeWbvScsXG5cdFx0XHRLVzogJ+enkeWogeeJuScsXG5cdFx0XHRLRzogJ+WQieWwlOWQieaWr+aWr+WdpicsXG5cdFx0XHRMQTogJ+iAgeaMnScsXG5cdFx0XHRMVjogJ+aLieiEsee7tOS6micsXG5cdFx0XHRMQjogJ+m7juW3tOWrqScsXG5cdFx0XHRMUzogJ+iOsee0ouaJmCcsXG5cdFx0XHRMUjogJ+WIqeavlOmHjOS6micsXG5cdFx0XHRMWTogJ+WIqeavlOS6micsXG5cdFx0XHRMSTogJ+WIl+aUr+aVpuWjq+eZuycsXG5cdFx0XHRMVDogJ+eri+mZtuWumycsXG5cdFx0XHRMVTogJ+WNouajruWgoScsXG5cdFx0XHRNTzogJ+S4reWbvea+s+mXqCcsXG5cdFx0XHRNRzogJ+mprOi+vuWKoOaWr+WKoCcsXG5cdFx0XHRNVzogJ+mprOaLiee7tCcsXG5cdFx0XHRNWTogJ+mprOadpeilv+S6micsXG5cdFx0XHRNVjogJ+mprOWwlOS7o+WkqycsXG5cdFx0XHRNTDogJ+mprOmHjCcsXG5cdFx0XHRNVDogJ+mprOiAs+S7licsXG5cdFx0XHRNSDogJ+mprOe7jeWwlOe+pOWymycsXG5cdFx0XHRNUTogJ+mprOaPkOWwvOWFiycsXG5cdFx0XHRNUjogJ+avm+mHjOWhlOWwvOS6micsXG5cdFx0XHRNVTogJ+avm+mHjOaxguaWrycsXG5cdFx0XHRZVDogJ+mprOe6pueJuScsXG5cdFx0XHRNWDogJ+WiqOilv+WTpScsXG5cdFx0XHRGTTogJ+WvhuWFi+e9l+WwvOilv+S6muiBlOmCpicsXG5cdFx0XHRNRDogJ+aRqeWwlOWkmueTpicsXG5cdFx0XHRNQzogJ+aRqee6s+WTpScsXG5cdFx0XHRNTjogJ+iSmeWPpCcsXG5cdFx0XHRNRTogJ+m7keWxsScsXG5cdFx0XHRNUzogJ+iSmeeJueWhnuaLieeJuScsXG5cdFx0XHRNQTogJ+aRqea0m+WTpScsXG5cdFx0XHRNWjogJ+iOq+ahkeavlOWFiycsXG5cdFx0XHRNTTogJ+e8heeUuCcsXG5cdFx0XHROQTogJ+mCo+exs+avlOS6micsXG5cdFx0XHROUjogJ+eRmemygScsXG5cdFx0XHROUDogJ+WwvOaziuWwlCcsXG5cdFx0XHROTDogJ+iNt+WFsCcsXG5cdFx0XHROQzogJ+aWsOWWgOmHjOWkmuWwvOS6micsXG5cdFx0XHROWjogJ+aWsOilv+WFsCcsXG5cdFx0XHROSTogJ+WwvOWKoOaLieeTnCcsXG5cdFx0XHRORTogJ+WwvOaXpeWwlCcsXG5cdFx0XHRORzogJ+WwvOaXpeWIqeS6micsXG5cdFx0XHROVTogJ+e6veWfgycsXG5cdFx0XHRORjogJ+ivuuemj+WFi+WymycsXG5cdFx0XHRNSzogJ+WMl+mprOWFtumhvycsXG5cdFx0XHRNUDogJ+WMl+mprOmHjOS6mue6s+e+pOWymycsXG5cdFx0XHROTzogJ+aMquWogScsXG5cdFx0XHRPTTogJ+mYv+abvCcsXG5cdFx0XHRQSzogJ+W3tOWfuuaWr+WdpicsXG5cdFx0XHRQVzogJ+W4leWKsycsXG5cdFx0XHRQUzogJ+W3tOWLkuaWr+WdpicsXG5cdFx0XHRQQTogJ+W3tOaLv+mprCcsXG5cdFx0XHRQRzogJ+W3tOW4g+S6muaWsOWHoOWGheS6micsXG5cdFx0XHRQWTogJ+W3tOaLieWcrScsXG5cdFx0XHRQRTogJ+enmOmygScsXG5cdFx0XHRQSDogJ+iPsuW+i+WuvicsXG5cdFx0XHRQTjogJ+earueJueWHr+aBqee+pOWymycsXG5cdFx0XHRQTDogJ+azouWFsCcsXG5cdFx0XHRQVDogJ+iRoeiQhOeJmScsXG5cdFx0XHRQUjogJ+azouWkmum7juWQhCcsXG5cdFx0XHRRQTogJ+WNoeWhlOWwlCcsXG5cdFx0XHRSRTogJ+eVmeWwvOaxqicsXG5cdFx0XHRSTzogJ+e9l+mprOWwvOS6micsXG5cdFx0XHRSVTogJ+S/hOe9l+aWrycsXG5cdFx0XHRSVzogJ+WNouaXuui+vicsXG5cdFx0XHRCTDogJ+Wco+W3tOazsOWLkuexsycsXG5cdFx0XHRTSDogJ+Wco+i1q+WLkuaLv+OAgemYv+ajruadvuWSjOeJuemHjOaWr+Wdpi3ovr7lupPlsLzkuponLFxuXHRcdFx0S046ICflnKPln7rojKjlkozlsLznu7Tmlq8nLFxuXHRcdFx0TEM6ICflnKPljaLopb/kuponLFxuXHRcdFx0TUY6ICfms5XlsZ7lnKPpqazkuIEnLFxuXHRcdFx0UE06ICflnKPnmq7ln4PlsJTlkozlr4blhYvpmoYnLFxuXHRcdFx0VkM6ICflnKPmlofmo67nibnlkozmoLzmnpfnurPkuIHmlq8nLFxuXHRcdFx0V1M6ICfokKjmkankuponLFxuXHRcdFx0U006ICflnKPpqazlipvor7onLFxuXHRcdFx0U1Q6ICflnKPlpJrnvo7lkozmma7mnpfopb/mr5QnLFxuXHRcdFx0U0E6ICfmspnnibnpmL/mi4nkvK8nLFxuXHRcdFx0U046ICfloZ7lhoXliqDlsJQnLFxuXHRcdFx0UlM6ICfloZ7lsJTnu7TkuponLFxuXHRcdFx0U0M6ICfloZ7oiIzlsJQnLFxuXHRcdFx0U0w6ICfloZ7mi4nliKnmmIInLFxuXHRcdFx0U0c6ICfmlrDliqDlnaEnLFxuXHRcdFx0U1g6ICfojbflsZ7lnKPpqazkuIEnLFxuXHRcdFx0U0s6ICfmlq/mtJvkvJDlhYsnLFxuXHRcdFx0U0k6ICfmlq/mtJvmloflsLzkuponLFxuXHRcdFx0U0I6ICfmiYDnvZfpl6jnvqTlspsnLFxuXHRcdFx0U086ICfntKLpqazph4wnLFxuXHRcdFx0WkE6ICfljZfpnZ4nLFxuXHRcdFx0R1M6ICfljZfkuZTmsrvkuprlkozljZfmoZHlqIHlpYfnvqTlspsnLFxuXHRcdFx0U1M6ICfljZfoi4/kuLknLFxuXHRcdFx0RVM6ICfopb/nj63niZknLFxuXHRcdFx0TEs6ICfmlq/ph4zlhbDljaEnLFxuXHRcdFx0U0Q6ICfoi4/kuLknLFxuXHRcdFx0U1I6ICfoi4/ph4zljZcnLFxuXHRcdFx0U0o6ICfmlq/nk6blsJTlt7Tlkozmiazpqazlu7YnLFxuXHRcdFx0U0U6ICfnkZ7lhbgnLFxuXHRcdFx0Q0g6ICfnkZ7lo6snLFxuXHRcdFx0U1k6ICflj5nliKnkuponLFxuXHRcdFx0VFc6ICfkuK3lm73lj7Dmub4nLFxuXHRcdFx0VEo6ICfloZTlkInlhYvmlq/lnaYnLFxuXHRcdFx0VFo6ICflnabmoZHlsLzkuponLFxuXHRcdFx0VEg6ICfms7Dlm70nLFxuXHRcdFx0VEw6ICfkuJzluJ3msbYnLFxuXHRcdFx0VEc6ICflpJrlk6UnLFxuXHRcdFx0VEs6ICfmiZjlhYvlirMnLFxuXHRcdFx0VE86ICfmsaTliqAnLFxuXHRcdFx0VFQ6ICfnibnnq4vlsLzovr7lkozlpJrlt7Tlk6UnLFxuXHRcdFx0VE46ICfnqoHlsLzmlq8nLFxuXHRcdFx0VFI6ICflnJ/ogLPlhbYnLFxuXHRcdFx0VE06ICflnJ/lupPmm7zmlq/lnaYnLFxuXHRcdFx0VEM6ICfnibnlhYvmlq/lkozlh6/np5Hmlq/nvqTlspsnLFxuXHRcdFx0VFY6ICflm77nk6bljaInLFxuXHRcdFx0VUc6ICfkuYzlubLovr4nLFxuXHRcdFx0VUE6ICfkuYzlhYvlhbAnLFxuXHRcdFx0QUU6ICfpmL/ogZTphYsnLFxuXHRcdFx0R0I6ICfoi7Hlm70nLFxuXHRcdFx0VVM6ICfnvo7lm70nLFxuXHRcdFx0VU06ICfnvo7lm73mnKzlnJ/lpJblsI/lspvlsb8nLFxuXHRcdFx0VVk6ICfkuYzmi4nlnK0nLFxuXHRcdFx0VVo6ICfkuYzlhbnliKvlhYvmlq/lnaYnLFxuXHRcdFx0VlU6ICfnk6bliqrpmL/lm74nLFxuXHRcdFx0VkU6ICflp5TlhoXnkZ7mi4knLFxuXHRcdFx0Vk46ICfotorljZcnLFxuXHRcdFx0Vkc6ICfoi7HlsZ7nu7TlsJTkuqznvqTlspsnLFxuXHRcdFx0Vkk6ICfnvo7lsZ7nu7TlsJTkuqznvqTlspsnLFxuXHRcdFx0V0Y6ICfnk6bliKnmlq/lkozlr4zlm77nurMnLFxuXHRcdFx0RUg6ICfopb/mkpLlk4jmi4knLFxuXHRcdFx0WUU6ICfkuZ/pl6gnLFxuXHRcdFx0Wk06ICfotZ7mr5TkuponLFxuXHRcdFx0Wlc6ICfmtKXlt7TluIPpn6YnLFxuXHRcdH07XG5cdH1cblxuXHRyZXR1cm4ge1xuXHRcdEFGOiAn6Zi/5a+M5rGXJyxcblx0XHRBWDogJ+WlpeWFsCcsXG5cdFx0QUw6ICfpmL/lsJTlt7TlsLzkuponLFxuXHRcdERaOiAn6Zi/5bCU5Y+K5Yip5LqaJyxcblx0XHRBUzogJ+e+juWxnuiQqOaRqeS6micsXG5cdFx0QUQ6ICflronpgZPlsJQnLFxuXHRcdEFPOiAn5a6J5ZOl5ouJJyxcblx0XHRBSTogJ+WuieWcreaLiScsXG5cdFx0QVE6ICfljZfmnoHmtLInLFxuXHRcdEFHOiAn5a6J5o+Q55Oc5ZKM5be05biD6L6+Jyxcblx0XHRBUjogJ+mYv+agueW7tycsXG5cdFx0QU06ICfkuprnvo7lsLzkuponLFxuXHRcdEFXOiAn6Zi/6bKB5be0Jyxcblx0XHRBVTogJ+a+s+Wkp+WIqeS6micsXG5cdFx0QVQ6ICflpaXlnLDliKknLFxuXHRcdEFaOiAn6Zi/5aGe5ouc55aGJyxcblx0XHRCUzogJ+W3tOWTiOmprCcsXG5cdFx0Qkg6ICflt7TmnpcnLFxuXHRcdEJEOiAn5a2f5Yqg5ouJ5Zu9Jyxcblx0XHRCQjogJ+W3tOW3tOWkmuaWrycsXG5cdFx0Qlk6ICfnmb3kv4TnvZfmlq8nLFxuXHRcdEJFOiAn5q+U5Yip5pe2Jyxcblx0XHRCWjogJ+S8r+WIqeWFuScsXG5cdFx0Qko6ICfotJ3lroEnLFxuXHRcdEJNOiAn55m+5oWV5aSnJyxcblx0XHRCVDogJ+S4jeS4uScsXG5cdFx0Qk86ICfnjrvliKnnu7TkuponLFxuXHRcdEJROiAn6I235YWw5Yqg5YuS5q+U5Yy6Jyxcblx0XHRCQTogJ+azoum7kScsXG5cdFx0Qlc6ICfljZrojKjnk6bnurMnLFxuXHRcdEJWOiAn5biD6Z+m5bKbJyxcblx0XHRCUjogJ+W3tOilvycsXG5cdFx0SU86ICfoi7HlsZ7ljbDluqbmtIvpooblnLAnLFxuXHRcdEJOOiAn5paH6I6xJyxcblx0XHRCRzogJ+S/neWKoOWIqeS6micsXG5cdFx0QkY6ICfluIPln7rnurPms5XntKInLFxuXHRcdEJJOiAn5biD6ZqG6L+qJyxcblx0XHRDVjogJ+S9m+W+l+inkicsXG5cdFx0S0g6ICfmn6zln5Tlr6gnLFxuXHRcdENNOiAn5ZaA6bqm6ZqGJyxcblx0XHRDQTogJ+WKoOaLv+WkpycsXG5cdFx0S1k6ICflvIDmm7znvqTlspsnLFxuXHRcdENGOiAn5Lit6Z2eJyxcblx0XHRURDogJ+S5jeW+lycsXG5cdFx0Q0w6ICfmmbrliKknLFxuXHRcdENOOiAn5Lit5Zu9Jyxcblx0XHRDWDogJ+Wco+ivnuWymycsXG5cdFx0Q0M6ICfnp5Hnp5Hmlq/vvIjln7rmnpfvvInnvqTlspsnLFxuXHRcdENPOiAn5ZOl5Lym5q+U5LqaJyxcblx0XHRLTTogJ+enkeaRqee9lycsXG5cdFx0Q0c6ICfliJrmnpzlhbHlkozlm70nLFxuXHRcdENEOiAn5Yia5p6c5rCR5Li75YWx5ZKM5Zu9Jyxcblx0XHRDSzogJ+W6k+WFi+e+pOWymycsXG5cdFx0Q1I6ICflk6Xmlq/ovr7pu47liqAnLFxuXHRcdENJOiAn56eR54m56L+q55OmJyxcblx0XHRIUjogJ+WFi+e9l+WcsOS6micsXG5cdFx0Q1U6ICflj6Tlt7QnLFxuXHRcdENXOiAn5bqT5ouJ57SiJyxcblx0XHRDWTogJ+Whnua1pui3r+aWrycsXG5cdFx0Q1o6ICfmjbflhYsnLFxuXHRcdERLOiAn5Li56bqmJyxcblx0XHRESjogJ+WQieW4g+aPkCcsXG5cdFx0RE06ICflpJrnsbPlsLzlhYsnLFxuXHRcdERPOiAn5aSa57Gz5bC85YqgJyxcblx0XHRFQzogJ+WOhOeTnOWkmuWwlCcsXG5cdFx0RUc6ICfln4Plj4onLFxuXHRcdFNWOiAn6JCo5bCU55Om5aSaJyxcblx0XHRHUTogJ+i1pOmBk+WHoOWGheS6micsXG5cdFx0RVI6ICfljoTnq4vnibnph4zkuponLFxuXHRcdEVFOiAn54ix5rKZ5bC85LqaJyxcblx0XHRTWjogJ+aWr+WogeWjq+WFsCcsXG5cdFx0RVQ6ICfln4PloZ7kv4Tmr5TkuponLFxuXHRcdEZLOiAn56aP5YWL5YWw576k5bKbJyxcblx0XHRGTzogJ+azlee9l+e+pOWymycsXG5cdFx0Rko6ICfmlpDmtY4nLFxuXHRcdEZJOiAn6Iqs5YWwJyxcblx0XHRGUjogJ+azleWbvScsXG5cdFx0R0Y6ICfms5XlsZ7lnK3kuprpgqMnLFxuXHRcdFBGOiAn5rOV5bGe5rOi5Yip5bC86KW/5LqaJyxcblx0XHRURjogJ+azleWxnuWNl+mDqOWSjOWNl+aegemihuWcsCcsXG5cdFx0R0E6ICfliqDok6wnLFxuXHRcdEdNOiAn5YaI5q+U5LqaJyxcblx0XHRHRTogJ+agvOmygeWQieS6micsXG5cdFx0REU6ICflvrflm70nLFxuXHRcdEdIOiAn5Yqg57qzJyxcblx0XHRHSTogJ+ebtOW4g+e9l+mZgCcsXG5cdFx0R1I6ICfluIzohYonLFxuXHRcdEdMOiAn5qC86Zm15YWwJyxcblx0XHRHRDogJ+agvOael+e6s+i+vicsXG5cdFx0R1A6ICfnk5zlvrfnvZfmma4nLFxuXHRcdEdVOiAn5YWz5bKbJyxcblx0XHRHVDogJ+WNseWcsOmprOaLiScsXG5cdFx0R0c6ICfmoLnopb8nLFxuXHRcdEdOOiAn5Yeg5YaF5LqaJyxcblx0XHRHVzogJ+WHoOWGheS6muavlOe7jScsXG5cdFx0R1k6ICflnK3kuprpgqMnLFxuXHRcdEhUOiAn5rW35ZywJyxcblx0XHRITTogJ+i1q+W+t+Wym+WSjOm6puWFi+WUkOe6s+e+pOWymycsXG5cdFx0VkE6ICfmorXokoLlhognLFxuXHRcdEhOOiAn5rSq6YO95ouJ5pavJyxcblx0XHRISzogJ+S4reWbvemmmea4rycsXG5cdFx0SFU6ICfljIjniZnliKknLFxuXHRcdElTOiAn5Yaw5bKbJyxcblx0XHRJTjogJ+WNsOW6picsXG5cdFx0SUQ6ICfljbDlsLwnLFxuXHRcdElSOiAn5LyK5pyXJyxcblx0XHRJUTogJ+S8iuaLieWFiycsXG5cdFx0SUU6ICfniLHlsJTlhbAnLFxuXHRcdElNOiAn6ams5oGp5bKbJyxcblx0XHRJTDogJ+S7peiJsuWIlycsXG5cdFx0SVQ6ICfmhI/lpKfliKknLFxuXHRcdEpNOiAn54mZ5Lmw5YqgJyxcblx0XHRKUDogJ+aXpeacrCcsXG5cdFx0SkU6ICfms73opb8nLFxuXHRcdEpPOiAn57qm5pemJyxcblx0XHRLWjogJ+WTiOiQqOWFi+aWr+WdpicsXG5cdFx0S0U6ICfogq/lsLzkuponLFxuXHRcdEtJOiAn5Z+66YeM5be05pavJyxcblx0XHRLUDogJ+acnemynCcsXG5cdFx0S1I6ICfpn6nlm70nLFxuXHRcdEtXOiAn56eR5aiB54m5Jyxcblx0XHRLRzogJ+WQieWwlOWQieaWr+aWr+WdpicsXG5cdFx0TEE6ICfogIHmjJ0nLFxuXHRcdExWOiAn5ouJ6ISx57u05LqaJyxcblx0XHRMQjogJ+m7juW3tOWrqScsXG5cdFx0TFM6ICfojrHntKLmiZgnLFxuXHRcdExSOiAn5Yip5q+U6YeM5LqaJyxcblx0XHRMWTogJ+WIqeavlOS6micsXG5cdFx0TEk6ICfliJfmlK/mlablo6vnmbsnLFxuXHRcdExUOiAn56uL6Zm25a6bJyxcblx0XHRMVTogJ+WNouajruWgoScsXG5cdFx0TU86ICfkuK3lm73mvrPpl6gnLFxuXHRcdE1HOiAn6ams6L6+5Yqg5pav5YqgJyxcblx0XHRNVzogJ+mprOaLiee7tCcsXG5cdFx0TVk6ICfpqazmnaXopb/kuponLFxuXHRcdE1WOiAn6ams5bCU5Luj5aSrJyxcblx0XHRNTDogJ+mprOmHjCcsXG5cdFx0TVQ6ICfpqazogLPku5YnLFxuXHRcdE1IOiAn6ams57uN5bCU576k5bKbJyxcblx0XHRNUTogJ+mprOaPkOWwvOWFiycsXG5cdFx0TVI6ICfmr5vph4zloZTlsLzkuponLFxuXHRcdE1VOiAn5q+b6YeM5rGC5pavJyxcblx0XHRZVDogJ+mprOe6pueJuScsXG5cdFx0TVg6ICfloqjopb/lk6UnLFxuXHRcdEZNOiAn5a+G5YWL572X5bC86KW/5Lqa6IGU6YKmJyxcblx0XHRNRDogJ+aRqeWwlOWkmueTpicsXG5cdFx0TUM6ICfmkannurPlk6UnLFxuXHRcdE1OOiAn6JKZ5Y+kJyxcblx0XHRNRTogJ+m7keWxsScsXG5cdFx0TVM6ICfokpnnibnloZ7mi4nnibknLFxuXHRcdE1BOiAn5pGp5rSb5ZOlJyxcblx0XHRNWjogJ+iOq+ahkeavlOWFiycsXG5cdFx0TU06ICfnvIXnlLgnLFxuXHRcdE5BOiAn57qz57Gz5q+U5LqaJyxcblx0XHROUjogJ+eRmemygScsXG5cdFx0TlA6ICflsLzms4rlsJQnLFxuXHRcdE5MOiAn6I235YWwJyxcblx0XHROQzogJ+aWsOWWgOmHjOWkmuWwvOS6micsXG5cdFx0Tlo6ICfmlrDopb/lhbAnLFxuXHRcdE5JOiAn5bC85Yqg5ouJ55OcJyxcblx0XHRORTogJ+WwvOaXpeWwlCcsXG5cdFx0Tkc6ICflsLzml6XliKnkuponLFxuXHRcdE5VOiAn57q95Z+DJyxcblx0XHRORjogJ+ivuuemj+WFi+WymycsXG5cdFx0TUs6ICfljJfpqazlhbbpob8nLFxuXHRcdE1QOiAn5YyX6ams6YeM5Lqa57qz576k5bKbJyxcblx0XHROTzogJ+aMquWogScsXG5cdFx0T006ICfpmL/mm7wnLFxuXHRcdFBLOiAn5be05Z+65pav5Z2mJyxcblx0XHRQVzogJ+W4leWKsycsXG5cdFx0UFM6ICflt7Tli5Lmlq/lnaYnLFxuXHRcdFBBOiAn5be05ou/6amsJyxcblx0XHRQRzogJ+W3tOW4g+S6muaWsOWHoOWGheS6micsXG5cdFx0UFk6ICflt7Tmi4nlnK0nLFxuXHRcdFBFOiAn56eY6bKBJyxcblx0XHRQSDogJ+iPsuW+i+WuvicsXG5cdFx0UE46ICfnmq7nibnlh6/mgannvqTlspsnLFxuXHRcdFBMOiAn5rOi5YWwJyxcblx0XHRQVDogJ+iRoeiQhOeJmScsXG5cdFx0UFI6ICfms6LlpJrpu47lkIQnLFxuXHRcdFFBOiAn5Y2h5aGU5bCUJyxcblx0XHRSRTogJ+eVmeWwvOaxqicsXG5cdFx0Uk86ICfnvZfpqazlsLzkuponLFxuXHRcdFJVOiAn5L+E572X5pavJyxcblx0XHRSVzogJ+WNouaXuui+vicsXG5cdFx0Qkw6ICflnKPlt7Tms7Dli5LnsbMnLFxuXHRcdFNIOiAn5Zyj6LWr5YuS5ou/44CB6Zi/5qOu5p2+5ZKM54m56YeM5pav5Z2mLei+vuW6k+WwvOS6micsXG5cdFx0S046ICflnKPln7rojKjlkozlsLznu7Tmlq8nLFxuXHRcdExDOiAn5Zyj5Y2i6KW/5LqaJyxcblx0XHRNRjogJ+azleWxnuWco+mprOS4gScsXG5cdFx0UE06ICflnKPnmq7ln4PlsJTlkozlr4blhYvpmoYnLFxuXHRcdFZDOiAn5Zyj5paH5qOu54m55ZKM5qC85p6X57qz5LiB5pavJyxcblx0XHRXUzogJ+iQqOaRqeS6micsXG5cdFx0U006ICflnKPpqazlipvor7onLFxuXHRcdFNUOiAn5Zyj5aSa576O5ZKM5pmu5p6X6KW/5q+UJyxcblx0XHRTQTogJ+aymeeJuemYv+aLieS8rycsXG5cdFx0U046ICfloZ7lhoXliqDlsJQnLFxuXHRcdFJTOiAn5aGe5bCU57u05LqaJyxcblx0XHRTQzogJ+WhnuiIjOWwlCcsXG5cdFx0U0w6ICfloZ7mi4nliKnmmIInLFxuXHRcdFNHOiAn5paw5Yqg5Z2hJyxcblx0XHRTWDogJ+iNt+WxnuWco+mprOS4gScsXG5cdFx0U0s6ICfmlq/mtJvkvJDlhYsnLFxuXHRcdFNJOiAn5pav5rSb5paH5bC85LqaJyxcblx0XHRTQjogJ+aJgOe9l+mXqOe+pOWymycsXG5cdFx0U086ICfntKLpqazph4wnLFxuXHRcdFpBOiAn5Y2X6Z2eJyxcblx0XHRHUzogJ+WNl+S5lOayu+S6muWSjOWNl+ahkeWogeWlh+e+pOWymycsXG5cdFx0U1M6ICfljZfoi4/kuLknLFxuXHRcdEVTOiAn6KW/54+t54mZJyxcblx0XHRMSzogJ+aWr+mHjOWFsOWNoScsXG5cdFx0U0Q6ICfoi4/kuLknLFxuXHRcdFNSOiAn6IuP6YeM5Y2XJyxcblx0XHRTSjogJ+aWr+eTpuWwlOW3tOWSjOaJrOmprOW7ticsXG5cdFx0U0U6ICfnkZ7lhbgnLFxuXHRcdENIOiAn55Ge5aOrJyxcblx0XHRTWTogJ+WPmeWIqeS6micsXG5cdFx0VFc6ICfkuK3lm73oh7rmub4nLFxuXHRcdFRKOiAn5aGU5ZCJ5YWL5pav5Z2mJyxcblx0XHRUWjogJ+WdpuahkeWwvOS6micsXG5cdFx0VEg6ICfms7Dlm70nLFxuXHRcdFRMOiAn5Lic5bid5rG2Jyxcblx0XHRURzogJ+WkmuWTpScsXG5cdFx0VEs6ICfmiZjlhYvlirMnLFxuXHRcdFRPOiAn5rGk5YqgJyxcblx0XHRUVDogJ+eJueeri+WwvOi+vuWSjOWkmuW3tOWTpScsXG5cdFx0VE46ICfnqoHlsLzmlq8nLFxuXHRcdFRSOiAn5Zyf6ICz5YW2Jyxcblx0XHRUTTogJ+Wcn+W6k+abvOaWr+WdpicsXG5cdFx0VEM6ICfnibnlhYvmlq/lkozlh6/np5Hmlq/nvqTlspsnLFxuXHRcdFRWOiAn5Zu+55Om5Y2iJyxcblx0XHRVRzogJ+S5jOW5sui+vicsXG5cdFx0VUE6ICfkuYzlhYvlhbAnLFxuXHRcdEFFOiAn6Zi/6IGU6YWLJyxcblx0XHRHQjogJ+iLseWbvScsXG5cdFx0VVM6ICfnvo7lm70nLFxuXHRcdFVNOiAn576O5Zu95pys5Zyf5aSW5bCP5bKb5bG/Jyxcblx0XHRVWTogJ+S5jOaLieWcrScsXG5cdFx0VVo6ICfkuYzlhbnliKvlhYvmlq/lnaYnLFxuXHRcdFZVOiAn55Om5Yqq6Zi/5Zu+Jyxcblx0XHRWRTogJ+WnlOWGheeRnuaLiScsXG5cdFx0Vk46ICfotorljZcnLFxuXHRcdFZHOiAn6Iux5bGe57u05bCU5Lqs576k5bKbJyxcblx0XHRWSTogJ+e+juWxnue7tOWwlOS6rOe+pOWymycsXG5cdFx0V0Y6ICfnk6bliKnmlq/lkozlr4zlm77nurMnLFxuXHRcdEVIOiAn6KW/5pKS5ZOI5ouJJyxcblx0XHRZRTogJ+S5n+mXqCcsXG5cdFx0Wk06ICfotZ7mr5TkuponLFxuXHRcdFpXOiAn5rSl5be05biD6Z+mJyxcblx0fTtcbn07XG5cbmNvbnN0IGdldFJlZ2lvbk5hbWVMaXN0ID0gKCkgPT4ge1xuXHRjb25zdCB7d2dVc2VyTGFuZ3VhZ2V9ID0gbXcuY29uZmlnLmdldCgpO1xuXG5cdGlmIChbJ3poLWhhbnQnLCAnemgtaGsnLCAnemgtbW8nLCAnemgtdHcnXS5pbmNsdWRlcyh3Z1VzZXJMYW5ndWFnZSkpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0QUg6ICflronlvr0nLFxuXHRcdFx0Qko6ICfljJfkuqwnLFxuXHRcdFx0Q1E6ICfph43mhbYnLFxuXHRcdFx0Rko6ICfnpo/lu7onLFxuXHRcdFx0R0Q6ICflu6PmnbEnLFxuXHRcdFx0R1M6ICfnlJjogoUnLFxuXHRcdFx0R1g6ICflu6Popb8nLFxuXHRcdFx0R1o6ICfosrTlt54nLFxuXHRcdFx0SEE6ICfmsrPljZcnLFxuXHRcdFx0SEI6ICfmuZbljJcnLFxuXHRcdFx0SEU6ICfmsrPljJcnLFxuXHRcdFx0SEk6ICfmtbfljZcnLFxuXHRcdFx0SEw6ICfpu5Hpvo3msZ8nLFxuXHRcdFx0SE46ICfmuZbljZcnLFxuXHRcdFx0Skw6ICflkInmnpcnLFxuXHRcdFx0SlM6ICfmsZ/omIcnLFxuXHRcdFx0Slg6ICfmsZ/opb8nLFxuXHRcdFx0TE46ICfpgbzlr6cnLFxuXHRcdFx0Tk06ICflhafokpnlj6QnLFxuXHRcdFx0Tlg6ICflr6flpI8nLFxuXHRcdFx0UUg6ICfpnZLmtbcnLFxuXHRcdFx0U0M6ICflm5vlt50nLFxuXHRcdFx0U0Q6ICflsbHmnbEnLFxuXHRcdFx0U0g6ICfkuIrmtbcnLFxuXHRcdFx0U046ICfpmZ3opb8nLFxuXHRcdFx0U1g6ICflsbHopb8nLFxuXHRcdFx0VEo6ICflpKnmtKUnLFxuXHRcdFx0WEo6ICfmlrDnloYnLFxuXHRcdFx0WFo6ICfopb/ol48nLFxuXHRcdFx0WU46ICfpm7LljZcnLFxuXHRcdFx0Wko6ICfmtZnmsZ8nLFxuXHRcdH07XG5cdH1cblxuXHRyZXR1cm4ge1xuXHRcdEFIOiAn5a6J5b69Jyxcblx0XHRCSjogJ+WMl+S6rCcsXG5cdFx0Q1E6ICfph43luoYnLFxuXHRcdEZKOiAn56aP5bu6Jyxcblx0XHRHRDogJ+W5v+S4nCcsXG5cdFx0R1M6ICfnlJjogoMnLFxuXHRcdEdYOiAn5bm/6KW/Jyxcblx0XHRHWjogJ+i0teW3nicsXG5cdFx0SEE6ICfmsrPljZcnLFxuXHRcdEhCOiAn5rmW5YyXJyxcblx0XHRIRTogJ+ays+WMlycsXG5cdFx0SEk6ICfmtbfljZcnLFxuXHRcdEhMOiAn6buR6b6Z5rGfJyxcblx0XHRITjogJ+a5luWNlycsXG5cdFx0Skw6ICflkInmnpcnLFxuXHRcdEpTOiAn5rGf6IuPJyxcblx0XHRKWDogJ+axn+ilvycsXG5cdFx0TE46ICfovr3lroEnLFxuXHRcdE5NOiAn5YaF6JKZ5Y+kJyxcblx0XHROWDogJ+WugeWkjycsXG5cdFx0UUg6ICfpnZLmtbcnLFxuXHRcdFNDOiAn5Zub5bedJyxcblx0XHRTRDogJ+WxseS4nCcsXG5cdFx0U0g6ICfkuIrmtbcnLFxuXHRcdFNOOiAn6ZmV6KW/Jyxcblx0XHRTWDogJ+WxseilvycsXG5cdFx0VEo6ICflpKnmtKUnLFxuXHRcdFhKOiAn5paw55aGJyxcblx0XHRYWjogJ+ilv+iXjycsXG5cdFx0WU46ICfkupHljZcnLFxuXHRcdFpKOiAn5rWZ5rGfJyxcblx0fTtcbn07XG5cbmV4cG9ydCB7Z2V0Q291bnRyeU9yQXJlYU5hbWVMaXN0LCBnZXRSZWdpb25OYW1lTGlzdH07XG4iLCAiaW1wb3J0IHtnZXRDb3VudHJ5T3JBcmVhTmFtZUxpc3QsIGdldFJlZ2lvbk5hbWVMaXN0fSBmcm9tICcuL25hbWUnO1xuXG50eXBlIENvdW50cnlPckFyZWFOYW1lTGlzdCA9IFJldHVyblR5cGU8dHlwZW9mIGdldENvdW50cnlPckFyZWFOYW1lTGlzdD47XG50eXBlIFJlZ2lvbk5hbWVMaXN0ID0gUmV0dXJuVHlwZTx0eXBlb2YgZ2V0UmVnaW9uTmFtZUxpc3Q+O1xuXG5jb25zdCBjb3VudHJ5T3JBcmVhTGlzdDogQ291bnRyeU9yQXJlYU5hbWVMaXN0ID0gZ2V0Q291bnRyeU9yQXJlYU5hbWVMaXN0KCk7XG5jb25zdCByZWdpb25MaXN0OiBSZWdpb25OYW1lTGlzdCA9IGdldFJlZ2lvbk5hbWVMaXN0KCk7XG5cbmNvbnN0IGdldENvdW50cnlPckFyZWFOYW1lID0gPFQgZXh0ZW5kcyBrZXlvZiBDb3VudHJ5T3JBcmVhTmFtZUxpc3Q+KGtleTogVCk6IENvdW50cnlPckFyZWFOYW1lTGlzdFtUXSB8IHVuZGVmaW5lZCA9PiB7XG5cdHJldHVybiBjb3VudHJ5T3JBcmVhTGlzdFtrZXldO1xufTtcblxuY29uc3QgZ2V0UmVnaW9uTmFtZSA9IDxUIGV4dGVuZHMga2V5b2YgUmVnaW9uTmFtZUxpc3Q+KGtleTogVCk6IFJlZ2lvbk5hbWVMaXN0W1RdIHwgdW5kZWZpbmVkID0+IHtcblx0cmV0dXJuIHJlZ2lvbkxpc3Rba2V5XTtcbn07XG5cbmV4cG9ydCB7dHlwZSBDb3VudHJ5T3JBcmVhTmFtZUxpc3QsIHR5cGUgUmVnaW9uTmFtZUxpc3QsIGdldENvdW50cnlPckFyZWFOYW1lLCBnZXRSZWdpb25OYW1lfTtcbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge2luaXRNd0FwaX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxuY29uc3QgYXBpOiBtdy5BcGkgPSBpbml0TXdBcGkoYEdlb0xvY2F0aW9uUmVhZGVyLyR7T1BUSU9OUy52ZXJzaW9ufWApO1xuXG5leHBvcnQge2FwaX07XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi8uLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHt0eXBlIENvdW50cnlPckFyZWFOYW1lTGlzdCwgdHlwZSBSZWdpb25OYW1lTGlzdCwgZ2V0Q291bnRyeU9yQXJlYU5hbWUsIGdldFJlZ2lvbk5hbWV9IGZyb20gJy4vZ2V0TmFtZSc7XG5pbXBvcnQgdHlwZSB7U3RvcmVHZW9JbmZvfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQge2FwaX0gZnJvbSAnLi4vYXBpJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi4vaTE4bic7XG5cbmNvbnN0IGdldExvY2F0aW9uID0gYXN5bmMgKHdnUmVsZXZhbnRVc2VyTmFtZTogc3RyaW5nKSA9PiB7XG5cdGNvbnN0IHN0b3JlUGFnZVRpdGxlOiBzdHJpbmcgPSBgVXNlcjoke3dnUmVsZXZhbnRVc2VyTmFtZX0vR2VvSVAuanNvbmA7XG5cblx0bGV0IGNvdW50cnlPckFyZWFOYW1lOiBzdHJpbmcgPSBnZXRNZXNzYWdlKCdVbmtub3duJyk7XG5cdGxldCByZWdpb25OYW1lOiBzdHJpbmcgPSAnJztcblxuXHRpZiAobXcuc3RvcmFnZS5nZXRPYmplY3QoT1BUSU9OUy5zdG9yYWdlS2V5ICsgd2dSZWxldmFudFVzZXJOYW1lKSkge1xuXHRcdCh7Y291bnRyeU9yQXJlYU5hbWUsIHJlZ2lvbk5hbWV9ID0gbXcuc3RvcmFnZS5nZXRPYmplY3QoT1BUSU9OUy5zdG9yYWdlS2V5ICsgd2dSZWxldmFudFVzZXJOYW1lKSBhcyB7XG5cdFx0XHRjb3VudHJ5T3JBcmVhTmFtZTogc3RyaW5nO1xuXHRcdFx0cmVnaW9uTmFtZTogc3RyaW5nO1xuXHRcdH0pO1xuXHR9IGVsc2Uge1xuXHRcdHRyeSB7XG5cdFx0XHRjb25zdCBwYXJhbXM6IEFwaVF1ZXJ5UmV2aXNpb25zUGFyYW1zID0ge1xuXHRcdFx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0XHRcdHRpdGxlczogW3N0b3JlUGFnZVRpdGxlXSxcblx0XHRcdFx0cHJvcDogWydyZXZpc2lvbnMnXSxcblx0XHRcdFx0cnZwcm9wOiBbJ2NvbnRlbnQnXSxcblx0XHRcdFx0cnZzbG90czogJ21haW4nLFxuXHRcdFx0XHRzbWF4YWdlOiA2MDAsXG5cdFx0XHRcdG1heGFnZTogNjAwLFxuXHRcdFx0fTtcblxuXHRcdFx0Y29uc3QgZGF0YSA9IGF3YWl0IGFwaS5nZXQocGFyYW1zKTtcblxuXHRcdFx0Y29uc3QgY29udGVudCA9XG5cdFx0XHRcdChkYXRhWydxdWVyeSddLnBhZ2VzWzBdPy5taXNzaW5nXG5cdFx0XHRcdFx0PyAnJ1xuXHRcdFx0XHRcdDogKGRhdGFbJ3F1ZXJ5J10/LnBhZ2VzWzBdPy5yZXZpc2lvbnM/LlswXS5zbG90cy5tYWluLmNvbnRlbnQgYXMgc3RyaW5nKSkgfHwgJyc7XG5cblx0XHRcdGNvbnN0IHJlc3BvbnNlID0gSlNPTi5wYXJzZShjb250ZW50KSBhcyBTdG9yZUdlb0luZm8gJiB7XG5cdFx0XHRcdGNvdW50cnk/OiBzdHJpbmc7XG5cdFx0XHR9O1xuXG5cdFx0XHRpZiAoIShyZXNwb25zZS5jb3VudHJ5IHx8IHJlc3BvbnNlLmNvdW50cnlPckFyZWEpICYmICFyZXNwb25zZS5yZWdpb24pIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCB7Y291bnRyeSwgY291bnRyeU9yQXJlYSwgcmVnaW9ufSA9IHJlc3BvbnNlO1xuXG5cdFx0XHRsZXQgbG9jYXRpb246IFN0b3JlR2VvSW5mb1snY291bnRyeU9yQXJlYSddID0gJyc7XG5cblx0XHRcdGlmIChjb3VudHJ5IHx8IGNvdW50cnlPckFyZWEpIHtcblx0XHRcdFx0bG9jYXRpb24gPSBjb3VudHJ5IHx8IGNvdW50cnlPckFyZWE7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChnZXRDb3VudHJ5T3JBcmVhTmFtZShsb2NhdGlvbiBhcyBrZXlvZiBDb3VudHJ5T3JBcmVhTmFtZUxpc3QpKSB7XG5cdFx0XHRcdGNvdW50cnlPckFyZWFOYW1lID1cblx0XHRcdFx0XHRnZXRDb3VudHJ5T3JBcmVhTmFtZShsb2NhdGlvbiBhcyBrZXlvZiBDb3VudHJ5T3JBcmVhTmFtZUxpc3QpIHx8IGdldE1lc3NhZ2UoJ1Vua25vd24nKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKGxvY2F0aW9uICYmIGxvY2F0aW9uID09PSAnQ04nKSB7XG5cdFx0XHRcdHJlZ2lvbk5hbWUgPSBnZXRSZWdpb25OYW1lKHJlZ2lvbiBhcyBrZXlvZiBSZWdpb25OYW1lTGlzdCkgfHwgJyc7XG5cdFx0XHR9XG5cblx0XHRcdG13LnN0b3JhZ2Uuc2V0T2JqZWN0KE9QVElPTlMuc3RvcmFnZUtleSArIHdnUmVsZXZhbnRVc2VyTmFtZSwge2NvdW50cnlPckFyZWFOYW1lLCByZWdpb25OYW1lfSwgNjAgKiA2MCk7XG5cdFx0fSBjYXRjaCAoZXJyb3I6IHVua25vd24pIHtcblx0XHRcdGNvbnNvbGUuZXJyb3IoJ1tHZW9Mb2NhdGlvblJlYWRlcl0gQWpheCBlcnJvciBpbiBgZ2V0TG9jYXRpb25gIG1ldGhvZDonLCBlcnJvcik7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHtjb3VudHJ5T3JBcmVhTmFtZSwgcmVnaW9uTmFtZX07XG59O1xuXG5leHBvcnQge2dldExvY2F0aW9ufTtcbiIsICJpbXBvcnQge2FwcGVuZEdlb0ljb259IGZyb20gJy4vYXBwZW5kR2VvSWNvbic7XG5pbXBvcnQge2dldExvY2FsVXNlckdyb3Vwc30gZnJvbSAnZXh0LmdhZGdldC5NYXJrUmlnaHRzJztcblxuY29uc3QgYWRkRWxlbWVudCA9IGFzeW5jICgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0Y29uc3Qge3dnUmVsZXZhbnRVc2VyTmFtZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cblx0aWYgKCF3Z1JlbGV2YW50VXNlck5hbWUpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHR0cnkge1xuXHRcdGNvbnN0IGdyb3Vwc01hcCA9IGF3YWl0IGdldExvY2FsVXNlckdyb3Vwcyhbd2dSZWxldmFudFVzZXJOYW1lXSk7XG5cdFx0Y29uc3QgZ3JvdXBzID0gZ3JvdXBzTWFwW3dnUmVsZXZhbnRVc2VyTmFtZV0gPz8gW107XG5cblx0XHRpZiAoZ3JvdXBzLmluY2x1ZGVzKCdib3QnKSB8fCBncm91cHMuaW5jbHVkZXMoJ3FpdXdlbicpKSB7XG5cdFx0XHQvKiBlbXB0eSAqL1xuXHRcdFx0Ly8gQWxyZWFkeSBzaG93biBpbiBNYXJrUmlnaHRzLVVzZXJwYWdlXG5cdFx0fSBlbHNlIHtcblx0XHRcdHZvaWQgYXBwZW5kR2VvSWNvbigpO1xuXHRcdH1cblx0fSBjYXRjaCAoZXJyb3I6IHVua25vd24pIHtcblx0XHRjb25zb2xlLmVycm9yKCdbR2VvTG9jYXRpb25SZWFkZXJdIEFqYXggZXJyb3IgaW4gYGFkZEVsZW1lbnRgIG1ldGhvZDonLCBlcnJvcik7XG5cdH1cbn07XG5cbmV4cG9ydCB7YWRkRWxlbWVudH07XG4iLCAiaW1wb3J0ICcuL0dlb0xvY2F0aW9uUmVhZGVyLmxlc3MnO1xuaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuL29wdGlvbnMuanNvbic7XG5pbXBvcnQge1NZU1RFTV9TQ1JJUFRfTElTVCwgV0VCTUFTVEVSX0xJU1R9IGZyb20gJy4vbW9kdWxlcy9jb25zdGFudCc7XG5pbXBvcnQge2FkZEVsZW1lbnR9IGZyb20gJy4vbW9kdWxlcy9hZGRFbGVtZW50JztcblxuKGZ1bmN0aW9uIGdlb0xvY2F0aW9uUmVhZGVyKCk6IHZvaWQge1xuXHRjb25zdCB7d2dBY3Rpb24sIHdnTmFtZXNwYWNlTnVtYmVyLCB3Z1BhZ2VOYW1lLCB3Z1JlbGV2YW50VXNlck5hbWV9ID0gbXcuY29uZmlnLmdldCgpO1xuXHRpZiAoXG5cdFx0IXdnUmVsZXZhbnRVc2VyTmFtZSB8fFxuXHRcdFNZU1RFTV9TQ1JJUFRfTElTVC5pbmNsdWRlcyh3Z1JlbGV2YW50VXNlck5hbWUpIHx8XG5cdFx0V0VCTUFTVEVSX0xJU1QuaW5jbHVkZXMod2dSZWxldmFudFVzZXJOYW1lKSB8fFxuXHRcdCEod2dOYW1lc3BhY2VOdW1iZXIgPT09IE9QVElPTlMudXNlck5hbWVTcGFjZU51bWJlcikgfHxcblx0XHQhKHdnQWN0aW9uID09PSAndmlldycpXG5cdCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IHBhZ2VOYW1lOiBzdHJpbmcgPSBuZXcgbXcuVGl0bGUod2dQYWdlTmFtZSkudG9UZXh0KCk7XG5cdGNvbnN0IHJlbGV2YW50VXNlclBhZ2VOYW1lOiBzdHJpbmcgPSBuZXcgbXcuVGl0bGUod2dSZWxldmFudFVzZXJOYW1lLCBPUFRJT05TLnVzZXJOYW1lU3BhY2VOdW1iZXIpLnRvVGV4dCgpO1xuXHRpZiAocGFnZU5hbWUgIT09IHJlbGV2YW50VXNlclBhZ2VOYW1lKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0dm9pZCBhZGRFbGVtZW50KCk7XG59KSgpO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0MsSUFBQUEsWUFBYTtBQUNiLElBQUFDLHFCQUFzQjtBQUN0QixJQUFBQyxhQUFjO0FBQ2QsSUFBQUMsc0JBQXVCO0FBQ3ZCLElBQUFDLFVBQVc7O0FDTFosSUFBTUMscUJBQStCLENBQ3BDLFNBQ0EsUUFDQSxVQUNBLFdBQ0EseUJBQ0Esc0JBQ0EscUJBQ0EsOEJBQ0EsZUFBQTtBQUVELElBQU1DLGlCQUEyQixDQUFDLFVBQVUsdUJBQXVCLG1CQUFtQjs7QUNYdEYsSUFBTUMsYUFBcUI7O0FDQzNCLElBQUFDLGVBQXNCQyxRQUFBLGtCQUFBO0FBRXRCLElBQUFDLGNBQXVCRCxRQUFBLEtBQUE7O0FDSHZCLElBQUFFLG9CQUF1QkYsUUFBQSxpQkFBQTtBQUV2QixJQUFNRyxrQkFBa0JBLE1BQU07QUFDN0IsU0FBTztJQUNOLE1BQUEsR0FBS0Qsa0JBQUFFLFVBQVM7TUFDYkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7SUFDTCxDQUFDO0lBQ0RDLFVBQUEsR0FBU04sa0JBQUFFLFVBQVM7TUFDakJDLElBQUk7TUFDSkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNERyxXQUFBLEdBQVVQLGtCQUFBRSxVQUFTO01BQ2xCQyxJQUFJO01BQ0pDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7RUFDRjtBQUNEO0FBRUEsSUFBTUksZUFBZVAsZ0JBQWdCO0FBRXJDLElBQU1RLGFBQWdEQyxT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LElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO0lBQ0w7RUFDRCxXQUFXLENBQUMsT0FBTyxFQUFFcFEsU0FBU1csY0FBYyxHQUFHO0FBQzlDLFdBQU87TUFDTkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7SUFDTDtFQUNELFdBQVcsQ0FBQyxTQUFTLE9BQU8sRUFBRXBRLFNBQVNXLGNBQWMsR0FBRztBQUN2RCxXQUFPO01BQ05DLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO0lBQ0w7RUFDRDtBQUVBLFNBQU87SUFDTnhQLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0VBQ0w7QUFDRDtBQUVBLElBQU1DLG9CQUFvQkEsTUFBTTtBQUMvQixRQUFNO0lBQUMxUDtFQUFjLElBQUloQixHQUFHQyxPQUFPQyxJQUFJO0FBRXZDLE1BQUksQ0FBQyxXQUFXLFNBQVMsU0FBUyxPQUFPLEVBQUVHLFNBQVNXLGNBQWMsR0FBRztBQUNwRSxXQUFPO01BQ04yUCxJQUFJO01BQ0puTyxJQUFJO01BQ0pvTyxJQUFJO01BQ0pqTCxJQUFJO01BQ0pjLElBQUk7TUFDSnVILElBQUk7TUFDSjZDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSi9KLElBQUk7TUFDSmdLLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSm5FLElBQUk7TUFDSmEsSUFBSTtNQUNKekIsSUFBSTtNQUNKVSxJQUFJO01BQ0pLLElBQUk7TUFDSmlCLElBQUk7TUFDSmdELElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7SUFDTDtFQUNEO0FBRUEsU0FBTztJQUNObkIsSUFBSTtJQUNKbk8sSUFBSTtJQUNKb08sSUFBSTtJQUNKakwsSUFBSTtJQUNKYyxJQUFJO0lBQ0p1SCxJQUFJO0lBQ0o2QyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0ovSixJQUFJO0lBQ0pnSyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0puRSxJQUFJO0lBQ0phLElBQUk7SUFDSnpCLElBQUk7SUFDSlUsSUFBSTtJQUNKSyxJQUFJO0lBQ0ppQixJQUFJO0lBQ0pnRCxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0VBQ0w7QUFDRDs7QUN6akNBLElBQU1DLG9CQUEyQ2hSLHlCQUF5QjtBQUMxRSxJQUFNaVIsYUFBNkJ0QixrQkFBa0I7QUFFckQsSUFBTXVCLHVCQUErRDFVLFNBQWlEO0FBQ3JILFNBQU93VSxrQkFBa0J4VSxHQUFHO0FBQzdCO0FBRUEsSUFBTTJVLGdCQUFpRDNVLFNBQTBDO0FBQ2hHLFNBQU95VSxXQUFXelUsR0FBRztBQUN0Qjs7QUNiQSxJQUFBNFUscUJBQXdCeFYsUUFBQSxpQkFBQTtBQUV4QixJQUFNeVYsT0FBQSxHQUFjRCxtQkFBQUUsV0FBQSxxQkFBQWpVLE9BQXVDOUIsT0FBTyxDQUFFOztBQ0dwRSxJQUFNZ1csY0FBQSw0QkFBQTtBQUFBLE1BQUFDLE9BQUFDLGtCQUFjLFdBQU9DLG9CQUErQjtBQUN6RCxVQUFNQyxpQkFBQSxRQUFBdFUsT0FBaUNxVSxvQkFBa0IsYUFBQTtBQUV6RCxRQUFJRSxvQkFBNEJyVixXQUFXLFNBQVM7QUFDcEQsUUFBSXNWLGFBQXFCO0FBRXpCLFFBQUk1UyxHQUFHNlMsUUFBUUMsVUFBa0IxVyxhQUFhcVcsa0JBQWtCLEdBQUc7QUFDbEUsT0FBQztRQUFDRTtRQUFtQkM7TUFBVSxJQUFJNVMsR0FBRzZTLFFBQVFDLFVBQWtCMVcsYUFBYXFXLGtCQUFrQjtJQUloRyxPQUFPO0FBQ04sVUFBSTtBQUFBLFlBQUFNLG9CQUFBQztBQUNILGNBQU1DLFNBQWtDO1VBQ3ZDQyxRQUFRO1VBQ1JDLFFBQVE7VUFDUkMsZUFBZTtVQUNmQyxRQUFRLENBQUNYLGNBQWM7VUFDdkJZLE1BQU0sQ0FBQyxXQUFXO1VBQ2xCQyxRQUFRLENBQUMsU0FBUztVQUNsQkMsU0FBUztVQUNUQyxTQUFTO1VBQ1RDLFFBQVE7UUFDVDtBQUVBLGNBQU1DLE9BQUEsTUFBYXZCLElBQUlsUyxJQUFJK1MsTUFBTTtBQUVqQyxjQUFNVyxZQUNKYixxQkFBQVksS0FBSyxPQUFPLEVBQUVFLE1BQU0sQ0FBQyxPQUFBLFFBQUFkLHVCQUFBLFVBQXJCQSxtQkFBd0JlLFVBQ3RCLE1BQUFkLGNBQ0NXLEtBQUssT0FBTyxPQUFBLFFBQUFYLGdCQUFBLFdBQUFBLGNBQVpBLFlBQWVhLE1BQU0sQ0FBQyxPQUFBLFFBQUFiLGdCQUFBLFdBQUFBLGNBQXRCQSxZQUF5QmUsZUFBQSxRQUFBZixnQkFBQSxTQUFBLFNBQXpCQSxZQUFxQyxDQUFDLEVBQUVnQixNQUFNQyxLQUFLTCxZQUF1QjtBQUUvRSxjQUFNTSxXQUFXQyxLQUFLQyxNQUFNUixPQUFPO0FBSW5DLFlBQUksRUFBRU0sU0FBU0csV0FBV0gsU0FBU0ksa0JBQWtCLENBQUNKLFNBQVNLLFFBQVE7QUFDdEU7UUFDRDtBQUVBLGNBQU07VUFBQ0Y7VUFBU0M7VUFBZUM7UUFBTSxJQUFJTDtBQUV6QyxZQUFJTSxXQUEwQztBQUU5QyxZQUFJSCxXQUFXQyxlQUFlO0FBQzdCRSxxQkFBV0gsV0FBV0M7UUFDdkI7QUFFQSxZQUFJckMscUJBQXFCdUMsUUFBdUMsR0FBRztBQUNsRTdCLDhCQUNDVixxQkFBcUJ1QyxRQUF1QyxLQUFLbFgsV0FBVyxTQUFTO1FBQ3ZGO0FBRUEsWUFBSWtYLFlBQVlBLGFBQWEsTUFBTTtBQUNsQzVCLHVCQUFhVixjQUFjcUMsTUFBOEIsS0FBSztRQUMvRDtBQUVBdlUsV0FBRzZTLFFBQVE0QixVQUFrQnJZLGFBQWFxVyxvQkFBb0I7VUFBQ0U7VUFBbUJDO1FBQVUsR0FBRyxLQUFLLEVBQUU7TUFDdkcsU0FBUzhCLE9BQWdCO0FBQ3hCQyxnQkFBUUQsTUFBTSwyREFBMkRBLEtBQUs7TUFDL0U7SUFDRDtBQUVBLFdBQU87TUFBQy9CO01BQW1CQztJQUFVO0VBQ3RDLENBQUE7QUFBQSxTQUFBLFNBaEVNTixhQUFBc0MsSUFBQTtBQUFBLFdBQUFyQyxLQUFBc0MsTUFBQSxNQUFBQyxTQUFBO0VBQUE7QUFBQSxHQUFBOztBTEVOLElBQU1DLGdCQUFBLDRCQUFBO0FBQUEsTUFBQUMsUUFBQXhDLGtCQUFnQixhQUEyQjtBQUNoRCxVQUFNO01BQUNDO0lBQWtCLElBQUl6UyxHQUFHQyxPQUFPQyxJQUFJO0FBQzNDLFFBQUksQ0FBQ3VTLG9CQUFvQjtBQUN4QjtJQUNEO0FBRUEsVUFBTTNTLGFBQWFTLFNBQVNDLGNBQW1DckUsa0JBQWtCO0FBQ2pGLFFBQUksQ0FBQzJELFlBQVk7QUFDaEI7SUFDRDtBQUVBLFVBQU1tVixXQUFXQSxDQUFDaFgsTUFBdUJJLGVBQXVCYyxXQUFvQztBQUNuRyxZQUFNK1YsT0FBQSxHQUFNdFYsWUFBQXVWLFdBQVV4VixjQUFLO1FBQzFCMUI7UUFDQUk7UUFDQWM7TUFDRCxDQUFDO0FBQ0QrVixVQUFJRSxNQUFNdlYsaUJBQWlCQyxVQUFVLENBQUM7SUFDdkM7QUFFQSxRQUFJO0FBQUEsVUFBQXVWLHVCQUFBQztBQUNILFlBQU1wQixXQUFBLE1BQWlCNUIsWUFBWUcsa0JBQWtCO0FBQ3JELFlBQU1wVSxnQkFBQSxHQUFBRCxRQUFBaVgsd0JBQW1CbkIsYUFBQSxRQUFBQSxhQUFBLFNBQUEsU0FBQUEsU0FBVXZCLHVCQUFBLFFBQUEwQywwQkFBQSxTQUFBQSx3QkFBcUIsRUFBRSxFQUFBalgsUUFBQWtYLHVCQUFHcEIsYUFBQSxRQUFBQSxhQUFBLFNBQUEsU0FBQUEsU0FBVXRCLGdCQUFBLFFBQUEwQyx5QkFBQSxTQUFBQSx1QkFBYyxFQUFFO0FBQ3ZGLFVBQUksQ0FBQ2pYLGVBQWU7QUFDbkI7TUFDRDtBQUVBNFcsZUFBUyxTQUFTNVcsZUFBZSxTQUFTO0lBQzNDLFNBQVNxVyxPQUFnQjtBQUN4QkMsY0FBUUQsTUFBTSw2REFBNkRBLEtBQUs7QUFDaEZPLGVBQVMsY0FBYzNYLFdBQVcsU0FBUyxHQUFHLFNBQVM7SUFDeEQ7RUFDRCxDQUFBO0FBQUEsU0FBQSxTQWhDTXlYLGlCQUFBO0FBQUEsV0FBQUMsTUFBQUgsTUFBQSxNQUFBQyxTQUFBO0VBQUE7QUFBQSxHQUFBOztBTVBOLElBQUFTLHFCQUFpQzVZLFFBQUEsdUJBQUE7QUFFakMsSUFBTTZZLGFBQUEsNEJBQUE7QUFBQSxNQUFBQyxRQUFBakQsa0JBQWEsYUFBMkI7QUFDN0MsVUFBTTtNQUFDQztJQUFrQixJQUFJelMsR0FBR0MsT0FBT0MsSUFBSTtBQUUzQyxRQUFJLENBQUN1UyxvQkFBb0I7QUFDeEI7SUFDRDtBQUVBLFFBQUk7QUFBQSxVQUFBaUQ7QUFDSCxZQUFNQyxZQUFBLE9BQVksR0FBTUosbUJBQUFLLG9CQUFtQixDQUFDbkQsa0JBQWtCLENBQUM7QUFDL0QsWUFBTW9ELFVBQUFILHdCQUFTQyxVQUFVbEQsa0JBQWtCLE9BQUEsUUFBQWlELDBCQUFBLFNBQUFBLHdCQUFLLENBQUE7QUFFaEQsVUFBSUcsT0FBT3hWLFNBQVMsS0FBSyxLQUFLd1YsT0FBT3hWLFNBQVMsUUFBUSxHQUFHO01BR3pELE9BQU87QUFDTixhQUFLMFUsY0FBYztNQUNwQjtJQUNELFNBQVNMLE9BQWdCO0FBQ3hCQyxjQUFRRCxNQUFNLDBEQUEwREEsS0FBSztJQUM5RTtFQUNELENBQUE7QUFBQSxTQUFBLFNBcEJNYyxjQUFBO0FBQUEsV0FBQUMsTUFBQVosTUFBQSxNQUFBQyxTQUFBO0VBQUE7QUFBQSxHQUFBOztDQ0VMLFNBQVNnQixvQkFBMEI7QUFDbkMsUUFBTTtJQUFDQztJQUFVQztJQUFtQkM7SUFBWXhEO0VBQWtCLElBQUl6UyxHQUFHQyxPQUFPQyxJQUFJO0FBQ3BGLE1BQ0MsQ0FBQ3VTLHNCQUNEbFcsbUJBQW1COEQsU0FBU29TLGtCQUFrQixLQUM5Q2pXLGVBQWU2RCxTQUFTb1Msa0JBQWtCLEtBQzFDLEVBQUV1RCxzQkFBOEIzWix3QkFDaEMsRUFBRTBaLGFBQWEsU0FDZDtBQUNEO0VBQ0Q7QUFFQSxRQUFNRyxXQUFtQixJQUFJbFcsR0FBR21XLE1BQU1GLFVBQVUsRUFBRUcsT0FBTztBQUN6RCxRQUFNQyx1QkFBK0IsSUFBSXJXLEdBQUdtVyxNQUFNMUQsb0JBQTRCcFcsbUJBQW1CLEVBQUUrWixPQUFPO0FBQzFHLE1BQUlGLGFBQWFHLHNCQUFzQjtBQUN0QztFQUNEO0FBRUEsT0FBS2IsV0FBVztBQUNqQixHQUFHOyIsCiAgIm5hbWVzIjogWyJlbGVtZW50SWQiLCAibW91bnRQb2ludFNlbGVjdG9yIiwgInN0b3JhZ2VLZXkiLCAidXNlck5hbWVTcGFjZU51bWJlciIsICJ2ZXJzaW9uIiwgIlNZU1RFTV9TQ1JJUFRfTElTVCIsICJXRUJNQVNURVJfTElTVCIsICJDTEFTU19OQU1FIiwgImltcG9ydF9jb2RleCIsICJyZXF1aXJlIiwgImltcG9ydF92dWUyIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgImdldEkxOG5NZXNzYWdlcyIsICJsb2NhbGl6ZSIsICJlbiIsICJqYSIsICJ6aCIsICJVbmtub3duIiwgIkxvY2F0aW9uIiwgImkxOG5NZXNzYWdlcyIsICJnZXRNZXNzYWdlIiwgImtleSIsICJwcm9wcyIsICJfX3Byb3BzIiwgImNkeEljb25HbG9iZSIsICJwYXRoIiwgImNkeEljb25IZWxwTm90aWNlIiwgInNob3VsZEZsaXAiLCAiaWNvbnMiLCAiZ2xvYmUiLCAiaGVscE5vdGljZSIsICJpY29uIiwgImNvbXB1dGVkIiwgInRleHQiLCAiY29uY2F0IiwgImluZGljYXRvclRleHQiLCAiaW1wb3J0X3Z1ZTMiLCAiX2hvaXN0ZWRfMSIsICJjbGFzcyIsICJyZW5kZXIiLCAiX2N0eCIsICJfY2FjaGUiLCAiJHByb3BzIiwgIiRzZXR1cCIsICIkZGF0YSIsICIkb3B0aW9ucyIsICJvcGVuQmxvY2siLCAiY3JlYXRlRWxlbWVudEJsb2NrIiwgIm5vcm1hbGl6ZUNsYXNzIiwgInN0YXR1cyIsICJjcmVhdGVWTm9kZSIsICJzaXplIiwgImNyZWF0ZUVsZW1lbnRWTm9kZSIsICJ0b0Rpc3BsYXlTdHJpbmciLCAiQXBwX2RlZmF1bHQiLCAiX19maWxlIiwgIl9fc2NvcGVJZCIsICJBcHBfZGVmYXVsdDIiLCAiaW1wb3J0X3Z1ZTQiLCAiY3JlYXRlRm9vdGVyUm9vdCIsICJtb3VudFBvaW50IiwgInNraW4iLCAibXciLCAiY29uZmlnIiwgImdldCIsICJpc0NpdGl6ZW4iLCAiaXNMaXN0SXRlbSIsICJpbmNsdWRlcyIsICJCb29sZWFuIiwgImRvY3VtZW50IiwgInF1ZXJ5U2VsZWN0b3IiLCAicm9vdCIsICJjcmVhdGVFbGVtZW50IiwgImlkIiwgImNsYXNzTGlzdCIsICJhZGQiLCAicHJlcGVuZCIsICJnZXRDb3VudHJ5T3JBcmVhTmFtZUxpc3QiLCAid2dVc2VyTGFuZ3VhZ2UiLCAiQUYiLCAiQVgiLCAiQUwiLCAiRFoiLCAiQVMiLCAiQUQiLCAiQU8iLCAiQUkiLCAiQVEiLCAiQUciLCAiQVIiLCAiQU0iLCAiQVciLCAiQVUiLCAiQVQiLCAiQVoiLCAiQlMiLCAiQkgiLCAiQkQiLCAiQkIiLCAiQlkiLCAiQkUiLCAiQloiLCAiQkoiLCAiQk0iLCAiQlQiLCAiQk8iLCAiQlEiLCAiQkEiLCAiQlciLCAiQlYiLCAiQlIiLCAiSU8iLCAiQk4iLCAiQkciLCAiQkYiLCAiQkkiLCAiQ1YiLCAiS0giLCAiQ00iLCAiQ0EiLCAiS1kiLCAiQ0YiLCAiVEQiLCAiQ0wiLCAiQ04iLCAiQ1giLCAiQ0MiLCAiQ08iLCAiS00iLCAiQ0ciLCAiQ0QiLCAiQ0siLCAiQ1IiLCAiQ0kiLCAiSFIiLCAiQ1UiLCAiQ1ciLCAiQ1kiLCAiQ1oiLCAiREsiLCAiREoiLCAiRE0iLCAiRE8iLCAiRUMiLCAiRUciLCAiU1YiLCAiR1EiLCAiRVIiLCAiRUUiLCAiU1oiLCAiRVQiLCAiRksiLCAiRk8iLCAiRkoiLCAiRkkiLCAiRlIiLCAiR0YiLCAiUEYiLCAiVEYiLCAiR0EiLCAiR00iLCAiR0UiLCAiREUiLCAiR0giLCAiR0kiLCAiR1IiLCAiR0wiLCAiR0QiLCAiR1AiLCAiR1UiLCAiR1QiLCAiR0ciLCAiR04iLCAiR1ciLCAiR1kiLCAiSFQiLCAiSE0iLCAiVkEiLCAiSE4iLCAiSEsiLCAiSFUiLCAiSVMiLCAiSU4iLCAiSUQiLCAiSVIiLCAiSVEiLCAiSUUiLCAiSU0iLCAiSUwiLCAiSVQiLCAiSk0iLCAiSlAiLCAiSkUiLCAiSk8iLCAiS1oiLCAiS0UiLCAiS0kiLCAiS1AiLCAiS1IiLCAiS1ciLCAiS0ciLCAiTEEiLCAiTFYiLCAiTEIiLCAiTFMiLCAiTFIiLCAiTFkiLCAiTEkiLCAiTFQiLCAiTFUiLCAiTU8iLCAiTUciLCAiTVciLCAiTVkiLCAiTVYiLCAiTUwiLCAiTVQiLCAiTUgiLCAiTVEiLCAiTVIiLCAiTVUiLCAiWVQiLCAiTVgiLCAiRk0iLCAiTUQiLCAiTUMiLCAiTU4iLCAiTUUiLCAiTVMiLCAiTUEiLCAiTVoiLCAiTU0iLCAiTkEiLCAiTlIiLCAiTlAiLCAiTkwiLCAiTkMiLCAiTloiLCAiTkkiLCAiTkUiLCAiTkciLCAiTlUiLCAiTkYiLCAiTUsiLCAiTVAiLCAiTk8iLCAiT00iLCAiUEsiLCAiUFciLCAiUFMiLCAiUEEiLCAiUEciLCAiUFkiLCAiUEUiLCAiUEgiLCAiUE4iLCAiUEwiLCAiUFQiLCAiUFIiLCAiUUEiLCAiUkUiLCAiUk8iLCAiUlUiLCAiUlciLCAiQkwiLCAiU0giLCAiS04iLCAiTEMiLCAiTUYiLCAiUE0iLCAiVkMiLCAiV1MiLCAiU00iLCAiU1QiLCAiU0EiLCAiU04iLCAiUlMiLCAiU0MiLCAiU0wiLCAiU0ciLCAiU1giLCAiU0siLCAiU0kiLCAiU0IiLCAiU08iLCAiWkEiLCAiR1MiLCAiU1MiLCAiRVMiLCAiTEsiLCAiU0QiLCAiU1IiLCAiU0oiLCAiU0UiLCAiQ0giLCAiU1kiLCAiVFciLCAiVEoiLCAiVFoiLCAiVEgiLCAiVEwiLCAiVEciLCAiVEsiLCAiVE8iLCAiVFQiLCAiVE4iLCAiVFIiLCAiVE0iLCAiVEMiLCAiVFYiLCAiVUciLCAiVUEiLCAiQUUiLCAiR0IiLCAiVVMiLCAiVU0iLCAiVVkiLCAiVVoiLCAiVlUiLCAiVkUiLCAiVk4iLCAiVkciLCAiVkkiLCAiV0YiLCAiRUgiLCAiWUUiLCAiWk0iLCAiWlciLCAiZ2V0UmVnaW9uTmFtZUxpc3QiLCAiQUgiLCAiQ1EiLCAiR1giLCAiR1oiLCAiSEEiLCAiSEIiLCAiSEUiLCAiSEkiLCAiSEwiLCAiSkwiLCAiSlMiLCAiSlgiLCAiTE4iLCAiTk0iLCAiTlgiLCAiUUgiLCAiWEoiLCAiWFoiLCAiWU4iLCAiWkoiLCAiY291bnRyeU9yQXJlYUxpc3QiLCAicmVnaW9uTGlzdCIsICJnZXRDb3VudHJ5T3JBcmVhTmFtZSIsICJnZXRSZWdpb25OYW1lIiwgImltcG9ydF9leHRfZ2FkZ2V0MiIsICJhcGkiLCAiaW5pdE13QXBpIiwgImdldExvY2F0aW9uIiwgIl9yZWYiLCAiX2FzeW5jVG9HZW5lcmF0b3IiLCAid2dSZWxldmFudFVzZXJOYW1lIiwgInN0b3JlUGFnZVRpdGxlIiwgImNvdW50cnlPckFyZWFOYW1lIiwgInJlZ2lvbk5hbWUiLCAic3RvcmFnZSIsICJnZXRPYmplY3QiLCAiX2RhdGEkcXVlcnkkcGFnZXMkIiwgIl9kYXRhJHF1ZXJ5IiwgInBhcmFtcyIsICJhY3Rpb24iLCAiZm9ybWF0IiwgImZvcm1hdHZlcnNpb24iLCAidGl0bGVzIiwgInByb3AiLCAicnZwcm9wIiwgInJ2c2xvdHMiLCAic21heGFnZSIsICJtYXhhZ2UiLCAiZGF0YSIsICJjb250ZW50IiwgInBhZ2VzIiwgIm1pc3NpbmciLCAicmV2aXNpb25zIiwgInNsb3RzIiwgIm1haW4iLCAicmVzcG9uc2UiLCAiSlNPTiIsICJwYXJzZSIsICJjb3VudHJ5IiwgImNvdW50cnlPckFyZWEiLCAicmVnaW9uIiwgImxvY2F0aW9uIiwgInNldE9iamVjdCIsICJlcnJvciIsICJjb25zb2xlIiwgIl94IiwgImFwcGx5IiwgImFyZ3VtZW50cyIsICJhcHBlbmRHZW9JY29uIiwgIl9yZWYyIiwgIm1vdW50QXBwIiwgImFwcCIsICJjcmVhdGVBcHAiLCAibW91bnQiLCAiX3Jlc3BvbnNlJGNvdW50cnlPckFyIiwgIl9yZXNwb25zZSRyZWdpb25OYW1lIiwgImltcG9ydF9leHRfZ2FkZ2V0MyIsICJhZGRFbGVtZW50IiwgIl9yZWYzIiwgIl9ncm91cHNNYXAkd2dSZWxldmFudCIsICJncm91cHNNYXAiLCAiZ2V0TG9jYWxVc2VyR3JvdXBzIiwgImdyb3VwcyIsICJnZW9Mb2NhdGlvblJlYWRlciIsICJ3Z0FjdGlvbiIsICJ3Z05hbWVzcGFjZU51bWJlciIsICJ3Z1BhZ2VOYW1lIiwgInBhZ2VOYW1lIiwgIlRpdGxlIiwgInRvVGV4dCIsICJyZWxldmFudFVzZXJQYWdlTmFtZSJdCn0K

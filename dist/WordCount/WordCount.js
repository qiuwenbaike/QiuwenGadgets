/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://zh.wikipedia.org/wiki/MediaWiki:Gadget-Wordcount.js}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/WordCount}
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

// dist/WordCount/WordCount.js
//! src/WordCount/modules/util/countLength.ts
var countLength = (text) => {
  return text.length;
};
//! src/WordCount/modules/util/countByte.ts
var countByte = (text) => {
  return countLength(text.replace(/[\u0000-\u007F]/g, ".").replace(/[\u0080-\u07FF\uD800-\uDFFF]/g, "..").replace(/[\u0800-\uD7FF\uE000-\uFFFF]/g, "..."));
};
//! src/WordCount/modules/util/countCJK.ts
var countCJK = (text) => {
  return countLength(text.replace(/\./g, "").replace(/[\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3005\u3007\u3021-\u3029\u3038-\u303B\u3400-\u4DB5\u4E00-\u9FCC\uF900-\uFA6D\uFA70-\uFAD9]|[\uD840-\uD868][\uDC00-\uDFFF]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|[\uD86A-\uD86C][\uDC00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D]|\uD87E[\uDC00-\uDE1D]/g, ".").replace(/[^.]/g, ""));
};
//! src/WordCount/modules/i18n.ts
var import_ext_gadget = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    "character(s)": (0, import_ext_gadget.localize)({
      en: " character(s)",
      "zh-hans": "字符",
      "zh-hant": "字元"
    }),
    "(": (0, import_ext_gadget.localize)({
      en: " (",
      zh: "（"
    }),
    ")": (0, import_ext_gadget.localize)({
      en: ") ",
      zh: "）"
    }),
    CJK: (0, import_ext_gadget.localize)({
      en: " CJK",
      "zh-hans": "个CJK字符",
      "zh-hant": "个CJK字元"
    }),
    "byte(s) in UTF-8 encoding": (0, import_ext_gadget.localize)({
      en: "byte(s) in UTF-8 encoding",
      "zh-hans": "字节（UTF-8编码）",
      "zh-hant": "位元組（UTF-8編碼）"
    })
  };
};
var i18nMessages = getI18nMessages();
var getMessage = (key) => {
  return i18nMessages[key] || key;
};
//! src/WordCount/modules/getCount.ts
var getCountByTextLength = (text) => {
  return `${countLength(text)}${getMessage("character(s)")}`;
};
var getCJKCountByTextLength = (text) => {
  return `${getMessage("(")}${countCJK(text)}${getMessage("CJK")}${getMessage(")")}`;
};
var getUTF8CountByTextLength = (text) => {
  return `${countByte(text)}${getMessage("byte(s) in UTF-8 encoding")}`;
};
//! src/WordCount/components/WordCount.module.less
var tip = "WordCount-module__tip_HBDn5a__4100";
//! src/WordCount/components/WordCount.ts
var $wordCount = (text) => {
  return $("<div>").addClass([tip, "noprint"]).attr("id", "gadget-word_count-tip").append(getCountByTextLength(text), getCJKCountByTextLength(text), $("<br>"), getUTF8CountByTextLength(text));
};
//! src/WordCount/modules/wordCount.ts
var wordCount = ($body) => {
  var _window$getSelection;
  $body.find(`.${tip}`).remove();
  const text = (_window$getSelection = window.getSelection()) === null || _window$getSelection === void 0 ? void 0 : _window$getSelection.toString();
  if (!text) {
    return;
  }
  const $element = $wordCount(text);
  $element.appendTo($body);
  setTimeout(() => {
    $element.fadeOut("slow", () => {
      $element.remove();
    });
  }, 5 * 1e3);
};
//! src/WordCount/modules/addListener.ts
var addListener = ($body) => {
  if ("ontouchstart" in document) {
    $body.on("touchstart touchend", {
      passive: true
    }, () => {
      wordCount($body);
    });
  } else {
    $body.on("mouseup keyup", () => {
      wordCount($body);
    });
  }
};
//! src/WordCount/WordCount.ts
var import_ext_gadget2 = require("ext.gadget.Util");
void (0, import_ext_gadget2.getBody)().then(addListener);

})();

/* </nowiki> */


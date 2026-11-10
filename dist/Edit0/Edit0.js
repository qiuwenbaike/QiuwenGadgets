/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/Edit0|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://zh.wikipedia.org/wiki/MediaWiki:Gadget-edit0.css}
 * @base {@link https://zh.wikipedia.org/wiki/MediaWiki:Gadget-edit0.js}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/Edit0}
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

// dist/Edit0/Edit0.js
//! src/Edit0/modules/core.ts
var import_ext_gadget2 = require("ext.gadget.Util");
//! src/Edit0/modules/i18n.ts
var import_ext_gadget = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    Edit0: (0, import_ext_gadget.localize)({
      en: "Edit lead section",
      ja: "最初の段落を編集",
      "zh-hans": "编辑首段",
      "zh-hant": "編輯首段"
    })
  };
};
var i18nMessages = getI18nMessages();
var getMessage = (key) => {
  return i18nMessages[key] || key;
};
//! src/Edit0/modules/core.ts
var edit0 = ($body) => {
  const $content = $body.find("#content, #mw_content").first();
  const $span1 = $content.find("span.mw-editsection:not(.plainlinks)").first();
  if (!$span1.length) {
    return;
  }
  const $span0 = $span1.clone();
  $span0.removeClass("mw-editsection").addClass("mw-editsection-section-0");
  if ($span0.find(".easy-archive-link").length) {
    $span0.find(".easy-archive-link").remove();
  }
  const {
    skin
  } = mw.config.get();
  switch (skin) {
    case "citizen":
      $body.find(".mw-indicators").prepend($span0);
      break;
    default:
      $body.find("#content h1#firstHeading").append($span0);
  }
  $span0.addClass("mw-editsection");
  for (const element of $span0.find("a")) {
    element.title = getMessage("Edit0");
    const {
      href
    } = element;
    let urlSearch = {
      summary: "/* top */ ",
      section: "0"
    };
    if (!/&(?:ve)?section=T/.test(href)) {
    } else if (/&vesection=/.test(href)) {
      urlSearch = {
        ...urlSearch,
        veaction: "edit",
        vesection: "0"
      };
    } else {
      urlSearch = {
        ...urlSearch,
        action: "edit"
      };
    }
    element.href = new import_ext_gadget2.MwUri(href).extend(urlSearch).toString();
  }
};
//! src/Edit0/Edit0.ts
var import_ext_gadget3 = require("ext.gadget.Util");
var {
  wgNamespaceNumber
} = mw.config.get();
if (wgNamespaceNumber >= 0) {
  void (0, import_ext_gadget3.getBody)().then(edit0);
}

})();

/* </nowiki> */


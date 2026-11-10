/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://meta.wikimedia.org/wiki/MediaWiki:Gadget-autolink.js}
 * @base {@link https://en.wikipedia.org/wiki/Wikipedia:WikiProject_User_scripts/Scripts/Autolink}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/AutoLink}
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

// dist/AutoLink/AutoLink.js
//! src/AutoLink/modules/util/isDiff.ts
var isDiff = () => {
  return !!mw.util.getParamValue("diff");
};
//! src/AutoLink/modules/util/isTargetSpecialPage.ts
var isTargetSpecialPage = () => {
  const {
    wgCanonicalSpecialPageName
  } = mw.config.get();
  return ["Contributions", "Log", "Newpages", "Recentchanges", "Recentchangeslinked", "Watchlist"].includes(wgCanonicalSpecialPageName.toString());
};
//! src/AutoLink/modules/util/getTargetElements.ts
var getTargetElements = ($content) => {
  let color = "";
  let targetElements = [];
  const {
    wgAction
  } = mw.config.get();
  if (isDiff()) {
    color = "inherit";
    targetElements = [...$content.find([".diff", ".firstrevisionheader"].join(","))];
  } else if (["edit", "submit", "history"].includes(wgAction) || isTargetSpecialPage()) {
    targetElements = [...$content.find(".comment")];
  } else {
    targetElements = [...$content.find(["source", ".css", ".source-css", ".javascript", ".source-javascript"].join(","))];
  }
  return {
    color,
    targetElements
  };
};
//! src/AutoLink/AutoLink.ts
var import_ext_gadget = require("ext.gadget.Util");
//! src/AutoLink/modules/util/isInTargetSpecialPage.ts
var isInTargetSpecialPage = () => {
  const {
    wgCanonicalNamespace
  } = mw.config.get();
  return wgCanonicalNamespace === "Special" && isTargetSpecialPage();
};
//! src/AutoLink/modules/constant.ts
var REGEX_INTERNAL_URL = /([^=])([\s"'])((?:\/?w\/index\.php\?|\/?index\.php\?|\/?wiki\/)[\w!#%&()+./:=?@\\~-]+)\2/g;
var REGEX_IMPORT_SCRIPT = /([Ii]mport[Ss]cript(?:<span class="br0">)?\((?:<\/span><span class="st0">)?)('|")([^\n<>[\]{|}]+?)(\2(?:<\/span><span class="br0">)?\)(?:<\/span>)?)/g;
var REGEX_TL = /([^{]{{2}\s*[Tt]l\|)([^\n:<>[\]{|}]+)/g;
var REGEX_URL = /((?:[^"[]|[^=]")(?:<span class="diffchange">)?)((?:https?|ftps?):\/\/[\w!#%&()+./:=?@\\~-]+?)(?=(?:<\/span>)?[\s"')\]|}])/g;
//! src/AutoLink/modules/processElement.ts
var processElement = ({
  color,
  targetElements
}) => {
  let isActivateHTML = false;
  let regexURLinWikicodeWithoutLabel = /((?:[^[]|^)\[\s*(?:<\/span>)?\s*(?:<span class="diffchange">)?\s*)((?:https?|ftps?):\/\/[\w!#%&()+./:=?@\\~-]+)((?:<\/span>)?(?:<span class="diffchange">)?)([\w!#%&()+./:=?@\\~-]*)((?:<\/span>)?(?:<span class="diffchange">)?)([\w!#%&()+./:=?@\\~-]*)([^\n\]]*])/gm;
  let regexSubstinWikicodeWithoutLabel = `$1<a class="external autolink" style="color:${color}" href="$2$4$6">$2</a>$3<a class="external autolink" style="color:${color}" href="$2$4$6">$4</a>$5<a class="external autolink" style="color:${color}" href="$2$4$6">$6</a>$7`;
  let regexURLinWikicodeWithLabel = regexURLinWikicodeWithoutLabel;
  let regexSubstinWikicodeWithLabel = regexSubstinWikicodeWithoutLabel;
  let regexOtherPages = /((?:[^{]|^){{2}\s*(?:<\/span>)?\s*(?:<span class="diffchange">)?\s*(?:(?:[Ss][Uu][Bb][Ss][Tt]|[Mm][Ss][Gg]|[Mm][Ss][Gg][Nn][Ww])\s*:)?\s*(?:<\/span>)?\s*(?:<span class="diffchange">)?\s*)((?:[Ss]peciale?|[Qq](?:iuwen|[Ww])|[Ww][Pp]|[Tt]emplate|[Uu]ser)?\s*(?: ?[Tt]alk)?\s*:[^\n:<>[\]{|}]+)((?:<\/span>)?(?:<span class="diffchange">)?)([^\n:<>[\]{|}]*)((?:<\/span>)?(?:<span class="diffchange">)?)([^\n:<>[\]{|}]*)(\||}{2})/gm;
  let regexSubstinOtherPages = `$1<a class="autolink" style="color:${color}" href="/wiki/$2$4$6">$2</a>$3<a class="autolink" style="color:${color}" href="/wiki/$2$4$6">$4</a>$5<a class="autolink" style="color:${color}" href="/wiki/$2$4$6">$6</a>$7`;
  let regexTemplate = /((?:[^{]|^){{2}\s*(?:<\/span>)?\s*(?:<span class="diffchange">)?\s*(?:(?:[Ss][Uu][Bb][Ss][Tt]|[Mm][Ss][Gg]|[Mm][Ss][Gg][Nn][Ww])\s*:)?\s*(?:<\/span>)?\s*(?:<span class="diffchange">)?)(?![Ii][Nn][Tt]\s*:)([^\n:<>[\]{|}]+)((?:<\/span>)?(?:<span class="diffchange">)?)([^\n:<>[\]{|}]*)((?:<\/span>)?(?:<span class="diffchange">)?)([^\n:<>[\]{|}]*)(\||}{2}|:)/gm;
  let regexSubstinTemplate = `$1<a class="autolink" style="color:${color}" href="/wiki/Template:$2$4$6">$2</a>$3<a class="autolink" style="color:${color}" href="/wiki/Template:$2$4$6">$4</a>$5<a class="autolink" style="color:${color}" href="/wiki/Template:$2$4$6">$6</a>$7`;
  let regexWikilink1 = /(\[{2}\s*(?:<\/span>)?\s*(?:<span class="diffchange">)?\s*)([^\n<>[\]{|}]+)((?:<\/span>)?(?:<span class="diffchange">)?)([^\n<>[\]{|}]*)((?:<\/span>)?(?:<span class="diffchange">)?)([^\n<>[\]{|}]*)((?:[^\n\]]|][^\]])*]{2})/g;
  let regexSubstinWikilink1 = `$1<a class="autolink" style="color:${color}" href="/wiki/$2$4$6">$2</a>$3<a class="autolink" style="color:${color}" href="/wiki/$2$4$6">$4</a>$5<a class="autolink" style="color:${color}" href="/wiki/$2$4$6">$6</a>$7`;
  let regexWikilink2 = regexWikilink1;
  let regexSubstinWikilink2 = regexSubstinWikilink1;
  if (!isDiff()) {
    isActivateHTML = true;
    regexURLinWikicodeWithoutLabel = /([^[]|^)\[\s*((?:https?|ftps?):\/\/[\w!#%&()+./:=?@\\~-]+)\s*]/gm;
    regexSubstinWikicodeWithoutLabel = `$1<a class="external autolink" style="color:${color}" href="$2">$2</a>`;
    regexURLinWikicodeWithLabel = /([^[]|^)\[\s*((?:https?|ftps?):\/\/[\w!#%&()+./:=?@\\~-]+)\s+([^\n]+?)\s*]/gm;
    regexSubstinWikicodeWithLabel = `$1<a class="external autolink" style="color:${color}" href="$2">$3</a>`;
    regexOtherPages = /((?:[^{]|^){{2}\s*(?:(?:[Ss][Uu][Bb][Ss][Tt]|[Mm][Ss][Gg]|[Mm][Ss][Gg][Nn][Ww])\s*:)?\s*)((?:[Ss]pecial|[Qq](?:iuwen|Q)|[Ww][Pp]|[Tt]emplate|[Uu]ser)?\s*(?: ?[Tt]alk)?\s*:[^\n:<>[\]{|}]+)(\||}{2})/gm;
    regexSubstinOtherPages = `$1<a class="autolink" style="color:${color}" href="/wiki/$2">$2</a>$3`;
    regexTemplate = /((?:[^{]|^){{2}\s*(?:(?:[Ss][Uu][Bb][Ss][Tt]|[Mm][Ss][Gg]|[Mm][Ss][Gg][Nn][Ww])\s*:)?\s*)(?![Ii][Nn][Tt]\s*:)([^\n:<>[\]{|}]+)(\||}{2}|:)/gm;
    regexSubstinTemplate = `$1<a class="autolink" style="color:${color}" href="/wiki/Template:$2">$2</a>$3`;
    regexWikilink1 = /\[{2}\s*([^\n<>[\]{|}]+?)\s*\|\s*(.+?)\s*]{2}/g;
    regexSubstinWikilink1 = `<a class="autolink" style="color:${color}" href="/wiki/$1">$2</a>`;
    regexWikilink2 = /\[{2}\s*([^\n<>[\]{|}]+?)\s*\|?\s*]{2}/g;
    regexSubstinWikilink2 = `<a class="autolink" style="color:${color}" href="/wiki/$1">$1</a>`;
  }
  for (const element of targetElements) {
    const {
      innerHTML: originHtml
    } = element;
    let html = originHtml;
    const existingAnchors = [];
    html = html.replace(/<a\b[^>]*>[\s\S]*?<\/a>/gi, (anchor) => {
      existingAnchors.push(anchor);
      return `<!--autolink${existingAnchors.length - 1}-->`;
    });
    html = html.replace(/&lt;/g, "&shy;<&shy;");
    html = html.replace(/&gt;/g, "&shy;>&shy;");
    html = html.replace(/&amp;/g, "&");
    html = html.replace(REGEX_TL, `$1<a class="autolink" style="color:${color}" href="/wiki/Template:$2">$2</a>`);
    html = html.replace(REGEX_URL, `$1<a class="external autolink" style="color:${color}" href="$2">$2</a>`);
    html = html.replace(regexURLinWikicodeWithoutLabel, regexSubstinWikicodeWithoutLabel);
    html = html.replace(regexURLinWikicodeWithLabel, regexSubstinWikicodeWithLabel);
    html = html.replace(regexOtherPages, regexSubstinOtherPages);
    html = html.replace(regexTemplate, regexSubstinTemplate);
    html = html.replace(/href="\/wiki\/Template:#/g, 'href="/wiki/Help:');
    html = html.replace(regexWikilink1, regexSubstinWikilink1);
    html = html.replace(regexWikilink2, regexSubstinWikilink2);
    html = html.replace(REGEX_INTERNAL_URL, `$1$2<a class="external autolink" style="color:${color}" href="$3">$3</a>$2`);
    html = html.replace(REGEX_IMPORT_SCRIPT, `$1$2<a class="autolink" style="color:${color}" href="/wiki/$3">$3</a>$4`);
    html = html.replace(/<!--autolink(\d+)-->/g, (_, index) => existingAnchors[Number(index)] ?? "");
    html = html.replace(/&shy;<&shy;/g, "&lt;");
    html = html.replace(/&shy;>&shy;/g, "&gt;");
    if (isActivateHTML) {
      html = html.replace(/&lt;(span|b|i|strong|small|tt|del|s|u|sub|sup)&gt;(.*?)&lt;\/(\1)&gt;/g, "<$1>$2</$3>");
      html = html.replace(/([^']|^)'{3}(.+?)'{3}([^']|$)/gm, "$1<b>$2</b>$3");
      html = html.replace(/([^']|^)'{2}(.+?)'{2}([^']|$)/gm, "$1<i>$2</i>$3");
      const {
        wgAction
      } = mw.config.get();
      if (["edit", "submit", "history"].includes(wgAction) || isTargetSpecialPage()) {
        html = html.replace(/<i>(.*?)<\/i>/g, '<span title="italic" style="border:1px solid #c0c0c0;padding:2px">$1</span>');
      }
    }
    if (isDiff()) {
      html = html.replace(/<a [^>]+><\/a>/g, "");
      html = html.replace(/([^[]|^)\[\s*(<a [^>]+>)(?:https?|ftps?):\/\/[\w!#%&()+./:=?@\\~-]+(<\/a>)\s+([^\n\]]+)]/gm, "$1$2$4$3");
      html = html.replace(/([^[]|^)\[\s*(<a [^>]+>)((?:https?|ftps?):\/\/[\w!#%&()+./:=?@\\~-]+)(<\/a>)\s*]/gm, "$1$2$3$4");
    }
    if (html !== originHtml) {
      requestAnimationFrame(() => {
        element.innerHTML = html;
      });
    }
  }
};
//! src/AutoLink/AutoLink.ts
void (0, import_ext_gadget.getBody)().then(function autoLink() {
  if (!isInTargetSpecialPage()) {
    return;
  }
  mw.hook("wikipage.content").add(function($content) {
    const targetElements = getTargetElements($content);
    processElement(targetElements);
  });
});

})();

/* </nowiki> */


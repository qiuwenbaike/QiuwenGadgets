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
function _createForOfIteratorHelper(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;
      var F = function() {
      };
      return { s: F, n: function() {
        if (i >= o.length) return { done: true };
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
      if (!normalCompletion && it.return != null) it.return();
    } finally {
      if (didErr) throw err;
    }
  } };
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
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
var getTargetElements = ($body) => {
  let color = "";
  let targetElements = [];
  const {
    wgAction
  } = mw.config.get();
  if (isDiff()) {
    color = "inherit";
    targetElements = [...$body.find([".diff", ".firstrevisionheader"].join(","))];
  } else if (["edit", "submit", "history"].includes(wgAction) || isTargetSpecialPage()) {
    targetElements = [...$body.find(".comment")];
  } else {
    targetElements = [...$body.find(["source", ".css", ".source-css", ".javascript", ".source-javascript"].join(","))];
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
  let regexSubstinWikicodeWithoutLabel = '$1<a class="external autolink" style="color:'.concat(color, '" href="$2$4$6">$2</a>$3<a class="external autolink" style="color:').concat(color, '" href="$2$4$6">$4</a>$5<a class="external autolink" style="color:').concat(color, '" href="$2$4$6">$6</a>$7');
  let regexURLinWikicodeWithLabel = regexURLinWikicodeWithoutLabel;
  let regexSubstinWikicodeWithLabel = regexSubstinWikicodeWithoutLabel;
  let regexOtherPages = /((?:[^{]|^){{2}\s*(?:<\/span>)?\s*(?:<span class="diffchange">)?\s*(?:(?:[Ss][Uu][Bb][Ss][Tt]|[Mm][Ss][Gg]|[Mm][Ss][Gg][Nn][Ww])\s*:)?\s*(?:<\/span>)?\s*(?:<span class="diffchange">)?\s*)((?:[Ss]peciale?|[Qq](?:iuwen|[Ww])|[Ww][Pp]|[Tt]emplate|[Uu]ser)?\s*(?: ?[Tt]alk)?\s*:[^\n:<>[\]{|}]+)((?:<\/span>)?(?:<span class="diffchange">)?)([^\n:<>[\]{|}]*)((?:<\/span>)?(?:<span class="diffchange">)?)([^\n:<>[\]{|}]*)(\||}{2})/gm;
  let regexSubstinOtherPages = '$1<a class="autolink" style="color:'.concat(color, '" href="/wiki/$2$4$6">$2</a>$3<a class="autolink" style="color:').concat(color, '" href="/wiki/$2$4$6">$4</a>$5<a class="autolink" style="color:').concat(color, '" href="/wiki/$2$4$6">$6</a>$7');
  let regexTemplate = /((?:[^{]|^){{2}\s*(?:<\/span>)?\s*(?:<span class="diffchange">)?\s*(?:(?:[Ss][Uu][Bb][Ss][Tt]|[Mm][Ss][Gg]|[Mm][Ss][Gg][Nn][Ww])\s*:)?\s*(?:<\/span>)?\s*(?:<span class="diffchange">)?)([^\n:<>[\]{|}]+)((?:<\/span>)?(?:<span class="diffchange">)?)([^\n:<>[\]{|}]*)((?:<\/span>)?(?:<span class="diffchange">)?)([^\n:<>[\]{|}]*)(\||}{2}|:)/gm;
  let regexSubstinTemplate = '$1<a class="autolink" style="color:'.concat(color, '" href="/wiki/Template:$2$4$6">$2</a>$3<a class="autolink" style="color:').concat(color, '" href="/wiki/Template:$2$4$6">$4</a>$5<a class="autolink" style="color:').concat(color, '" href="/wiki/Template:$2$4$6">$6</a>$7');
  let regexWikilink1 = /(\[{2}\s*(?:<\/span>)?\s*(?:<span class="diffchange">)?\s*)([^\n<>[\]{|}]+)((?:<\/span>)?(?:<span class="diffchange">)?)([^\n<>[\]{|}]*)((?:<\/span>)?(?:<span class="diffchange">)?)([^\n<>[\]{|}]*)((?:[^\n\]]|][^\]])*]{2})/g;
  let regexSubstinWikilink1 = '$1<a class="autolink" style="color:'.concat(color, '" href="/wiki/$2$4$6">$2</a>$3<a class="autolink" style="color:').concat(color, '" href="/wiki/$2$4$6">$4</a>$5<a class="autolink" style="color:').concat(color, '" href="/wiki/$2$4$6">$6</a>$7');
  let regexWikilink2 = regexWikilink1;
  let regexSubstinWikilink2 = regexSubstinWikilink1;
  if (!isDiff()) {
    isActivateHTML = true;
    regexURLinWikicodeWithoutLabel = /([^[]|^)\[\s*((?:https?|ftps?):\/\/[\w!#%&()+./:=?@\\~-]+)\s*]/gm;
    regexSubstinWikicodeWithoutLabel = '$1<a class="external autolink" style="color:'.concat(color, '" href="$2">$2</a>');
    regexURLinWikicodeWithLabel = /([^[]|^)\[\s*((?:https?|ftps?):\/\/[\w!#%&()+./:=?@\\~-]+)\s+([^\n]+?)\s*]/gm;
    regexSubstinWikicodeWithLabel = '$1<a class="external autolink" style="color:'.concat(color, '" href="$2">$3</a>');
    regexOtherPages = /((?:[^{]|^){{2}\s*(?:(?:[Ss][Uu][Bb][Ss][Tt]|[Mm][Ss][Gg]|[Mm][Ss][Gg][Nn][Ww])\s*:)?\s*)((?:[Ss]pecial|[Qq](?:iuwen|Q)|[Ww][Pp]|[Tt]emplate|[Uu]ser)?\s*(?: ?[Tt]alk)?\s*:[^\n:<>[\]{|}]+)(\||}{2})/gm;
    regexSubstinOtherPages = '$1<a class="autolink" style="color:'.concat(color, '" href="/wiki/$2">$2</a>$3');
    regexTemplate = /((?:[^{]|^){{2}\s*(?:(?:[Ss][Uu][Bb][Ss][Tt]|[Mm][Ss][Gg]|[Mm][Ss][Gg][Nn][Ww])\s*:)?\s*)([^\n:<>[\]{|}]+)(\||}{2}|:)/gm;
    regexSubstinTemplate = '$1<a class="autolink" style="color:'.concat(color, '" href="/wiki/Template:$2">$2</a>$3');
    regexWikilink1 = /\[{2}\s*([^\n<>[\]{|}]+?)\s*\|\s*(.+?)\s*]{2}/g;
    regexSubstinWikilink1 = '<a class="autolink" style="color:'.concat(color, '" href="/wiki/$1">$2</a>');
    regexWikilink2 = /\[{2}\s*([^\n<>[\]{|}]+?)\s*\|?\s*]{2}/g;
    regexSubstinWikilink2 = '<a class="autolink" style="color:'.concat(color, '" href="/wiki/$1">$1</a>');
  }
  var _iterator = _createForOfIteratorHelper(targetElements), _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done; ) {
      const element = _step.value;
      const {
        innerHTML: originHtml
      } = element;
      let html = originHtml;
      html = html.replace(/&lt;/g, "&shy;<&shy;");
      html = html.replace(/&gt;/g, "&shy;>&shy;");
      html = html.replace(/&amp;/g, "&");
      html = html.replace(REGEX_TL, '$1<a class="autolink" style="color:'.concat(color, '" href="/wiki/Template:$2">$2</a>'));
      html = html.replace(REGEX_URL, '$1<a class="external autolink" style="color:'.concat(color, '" href="$2">$2</a>'));
      html = html.replace(regexURLinWikicodeWithoutLabel, regexSubstinWikicodeWithoutLabel);
      html = html.replace(regexURLinWikicodeWithLabel, regexSubstinWikicodeWithLabel);
      html = html.replace(regexOtherPages, regexSubstinOtherPages);
      html = html.replace(regexTemplate, regexSubstinTemplate);
      html = html.replace(/href="\/wiki\/Template:#/g, 'href="/wiki/Help:');
      html = html.replace(regexWikilink1, regexSubstinWikilink1);
      html = html.replace(regexWikilink2, regexSubstinWikilink2);
      html = html.replace(REGEX_INTERNAL_URL, '$1$2<a class="external autolink" style="color:'.concat(color, '" href="$3">$3</a>$2'));
      html = html.replace(REGEX_IMPORT_SCRIPT, '$1$2<a class="autolink" style="color:'.concat(color, '" href="/wiki/$3">$3</a>$4'));
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
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
};
//! src/AutoLink/AutoLink.ts
void (0, import_ext_gadget.getBody)().then(function autoLink($body) {
  if (!isInTargetSpecialPage()) {
    return;
  }
  const targetElements = getTargetElements($body);
  processElement(targetElements);
});

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0F1dG9MaW5rL21vZHVsZXMvdXRpbC9pc0RpZmYudHMiLCAic3JjL0F1dG9MaW5rL21vZHVsZXMvdXRpbC9pc1RhcmdldFNwZWNpYWxQYWdlLnRzIiwgInNyYy9BdXRvTGluay9tb2R1bGVzL3V0aWwvZ2V0VGFyZ2V0RWxlbWVudHMudHMiLCAic3JjL0F1dG9MaW5rL0F1dG9MaW5rLnRzIiwgInNyYy9BdXRvTGluay9tb2R1bGVzL3V0aWwvaXNJblRhcmdldFNwZWNpYWxQYWdlLnRzIiwgInNyYy9BdXRvTGluay9tb2R1bGVzL2NvbnN0YW50LnRzIiwgInNyYy9BdXRvTGluay9tb2R1bGVzL3Byb2Nlc3NFbGVtZW50LnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBpc0RpZmYgPSAoKSA9PiB7XG5cdHJldHVybiAhIW13LnV0aWwuZ2V0UGFyYW1WYWx1ZSgnZGlmZicpO1xufTtcblxuZXhwb3J0IHtpc0RpZmZ9O1xuIiwgIi8vIFNwZWNpYWwgY3Jvbm8gcGFnZXMgd2hlcmUgdGhpcyBzY3JpcHQgaXMgZW5hYmxlZFxuY29uc3QgaXNUYXJnZXRTcGVjaWFsUGFnZSA9ICgpOiBib29sZWFuID0+IHtcblx0Y29uc3Qge3dnQ2Fub25pY2FsU3BlY2lhbFBhZ2VOYW1lfSA9IG13LmNvbmZpZy5nZXQoKTtcblx0cmV0dXJuIFsnQ29udHJpYnV0aW9ucycsICdMb2cnLCAnTmV3cGFnZXMnLCAnUmVjZW50Y2hhbmdlcycsICdSZWNlbnRjaGFuZ2VzbGlua2VkJywgJ1dhdGNobGlzdCddLmluY2x1ZGVzKFxuXHRcdHdnQ2Fub25pY2FsU3BlY2lhbFBhZ2VOYW1lLnRvU3RyaW5nKClcblx0KTtcbn07XG5cbmV4cG9ydCB7aXNUYXJnZXRTcGVjaWFsUGFnZX07XG4iLCAiaW1wb3J0IHtpc0RpZmZ9IGZyb20gJy4vaXNEaWZmJztcbmltcG9ydCB7aXNUYXJnZXRTcGVjaWFsUGFnZX0gZnJvbSAnLi9pc1RhcmdldFNwZWNpYWxQYWdlJztcblxuaW50ZXJmYWNlIFRhcmdldEVsZW1lbnRzIHtcblx0Y29sb3I6IHN0cmluZztcblx0dGFyZ2V0RWxlbWVudHM6IEhUTUxFbGVtZW50W107XG59XG5cbmNvbnN0IGdldFRhcmdldEVsZW1lbnRzID0gKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IFRhcmdldEVsZW1lbnRzID0+IHtcblx0bGV0IGNvbG9yOiBzdHJpbmcgPSAnJzsgLy8gbGlua3MgY29sb3IgKGNvbG91cmVkIGxpbmtzKVxuXHRsZXQgdGFyZ2V0RWxlbWVudHM6IEhUTUxFbGVtZW50W10gPSBbXTtcblx0Y29uc3Qge3dnQWN0aW9ufSA9IG13LmNvbmZpZy5nZXQoKTtcblxuXHRpZiAoaXNEaWZmKCkpIHtcblx0XHQvLyBpbiBkaWZmIHBhZ2VzXG5cdFx0Y29sb3IgPSAnaW5oZXJpdCc7IC8vIG5vdCBjb2xvdXJlZCBsaW5rc1xuXHRcdHRhcmdldEVsZW1lbnRzID0gWy4uLiRib2R5LmZpbmQoWycuZGlmZicsICcuZmlyc3RyZXZpc2lvbmhlYWRlciddLmpvaW4oJywnKSldO1xuXHR9IGVsc2UgaWYgKFsnZWRpdCcsICdzdWJtaXQnLCAnaGlzdG9yeSddLmluY2x1ZGVzKHdnQWN0aW9uKSB8fCBpc1RhcmdldFNwZWNpYWxQYWdlKCkpIHtcblx0XHQvLyBpbiBjb21tZW50c1xuXHRcdHRhcmdldEVsZW1lbnRzID0gWy4uLiRib2R5LmZpbmQoJy5jb21tZW50JyldO1xuXHR9IGVsc2Uge1xuXHRcdC8vIGluIGNvZGUgc2VjdGlvbnNcblx0XHR0YXJnZXRFbGVtZW50cyA9IFtcblx0XHRcdC4uLiRib2R5LmZpbmQoWydzb3VyY2UnLCAnLmNzcycsICcuc291cmNlLWNzcycsICcuamF2YXNjcmlwdCcsICcuc291cmNlLWphdmFzY3JpcHQnXS5qb2luKCcsJykpLFxuXHRcdF07XG5cdH1cblxuXHRyZXR1cm4ge1xuXHRcdGNvbG9yLFxuXHRcdHRhcmdldEVsZW1lbnRzLFxuXHR9O1xufTtcblxuZXhwb3J0IHt0eXBlIFRhcmdldEVsZW1lbnRzLCBnZXRUYXJnZXRFbGVtZW50c307XG4iLCAiaW1wb3J0IHt0eXBlIFRhcmdldEVsZW1lbnRzLCBnZXRUYXJnZXRFbGVtZW50c30gZnJvbSAnLi9tb2R1bGVzL3V0aWwvZ2V0VGFyZ2V0RWxlbWVudHMnO1xuaW1wb3J0IHtnZXRCb2R5fSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuaW1wb3J0IHtpc0luVGFyZ2V0U3BlY2lhbFBhZ2V9IGZyb20gJy4vbW9kdWxlcy91dGlsL2lzSW5UYXJnZXRTcGVjaWFsUGFnZSc7XG5pbXBvcnQge3Byb2Nlc3NFbGVtZW50fSBmcm9tICcuL21vZHVsZXMvcHJvY2Vzc0VsZW1lbnQnO1xuXG52b2lkIGdldEJvZHkoKS50aGVuKGZ1bmN0aW9uIGF1dG9MaW5rKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQge1xuXHRpZiAoIWlzSW5UYXJnZXRTcGVjaWFsUGFnZSgpKSB7XG5cdFx0cmV0dXJuOyAvLyBEaXNhYmxlZCBpbiB0aGUgb3RoZXIgc3BlY2lhbCBwYWdlc1xuXHR9XG5cblx0Y29uc3QgdGFyZ2V0RWxlbWVudHM6IFRhcmdldEVsZW1lbnRzID0gZ2V0VGFyZ2V0RWxlbWVudHMoJGJvZHkpO1xuXG5cdHByb2Nlc3NFbGVtZW50KHRhcmdldEVsZW1lbnRzKTtcbn0pO1xuIiwgImltcG9ydCB7aXNUYXJnZXRTcGVjaWFsUGFnZX0gZnJvbSAnLi9pc1RhcmdldFNwZWNpYWxQYWdlJztcblxuLy8gU3BlY2lhbCBjcm9ubyBwYWdlcyB3aGVyZSB0aGlzIHNjcmlwdCBpcyBlbmFibGVkXG5jb25zdCBpc0luVGFyZ2V0U3BlY2lhbFBhZ2UgPSAoKTogYm9vbGVhbiA9PiB7XG5cdGNvbnN0IHt3Z0Nhbm9uaWNhbE5hbWVzcGFjZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cdHJldHVybiB3Z0Nhbm9uaWNhbE5hbWVzcGFjZSA9PT0gJ1NwZWNpYWwnICYmIGlzVGFyZ2V0U3BlY2lhbFBhZ2UoKTtcbn07XG5cbmV4cG9ydCB7aXNJblRhcmdldFNwZWNpYWxQYWdlfTtcbiIsICJjb25zdCBSRUdFWF9JTlRFUk5BTF9VUkw6IFJlZ0V4cCA9XG5cdC8oW149XSkoW1xcc1wiJ10pKCg/OlxcLz93XFwvaW5kZXhcXC5waHBcXD98XFwvP2luZGV4XFwucGhwXFw/fFxcLz93aWtpXFwvKVtcXHchIyUmKCkrLi86PT9AXFxcXH4tXSspXFwyL2c7XG4vLyBFeHRlcm5hbCBsaW5rcyAobm8gd2lraWNvZGUpXG5jb25zdCBSRUdFWF9JTVBPUlRfU0NSSVBUOiBSZWdFeHAgPVxuXHQvKFtJaV1tcG9ydFtTc11jcmlwdCg/OjxzcGFuIGNsYXNzPVwiYnIwXCI+KT9cXCgoPzo8XFwvc3Bhbj48c3BhbiBjbGFzcz1cInN0MFwiPik/KSgnfFwiKShbXlxcbjw+W1xcXXt8fV0rPykoXFwyKD86PFxcL3NwYW4+PHNwYW4gY2xhc3M9XCJicjBcIj4pP1xcKSg/OjxcXC9zcGFuPik/KS9nO1xuLy8gSW1wb3J0U2NyaXB0XG5jb25zdCBSRUdFWF9UTDogUmVnRXhwID0gLyhbXntde3syfVxccypbVHRdbFxcfCkoW15cXG46PD5bXFxde3x9XSspL2c7XG4vLyBGb3Ige3t0bH19XG5jb25zdCBSRUdFWF9VUkw6IFJlZ0V4cCA9XG5cdC8oKD86W15cIltdfFtePV1cIikoPzo8c3BhbiBjbGFzcz1cImRpZmZjaGFuZ2VcIj4pPykoKD86aHR0cHM/fGZ0cHM/KTpcXC9cXC9bXFx3ISMlJigpKy4vOj0/QFxcXFx+LV0rPykoPz0oPzo8XFwvc3Bhbj4pP1tcXHNcIicpXFxdfH1dKS9nO1xuXG5leHBvcnQge1JFR0VYX0lOVEVSTkFMX1VSTCwgUkVHRVhfSU1QT1JUX1NDUklQVCwgUkVHRVhfVEwsIFJFR0VYX1VSTH07XG4iLCAiLyoqXG4gKiBBdXRvbGluayBbW3dpa2lsaW5rc11dLCBbZXh0ZXJuYWwgbGlua3NdIGFuZCB7e3RlbXBsYXRlc319XG4gKi9cbmltcG9ydCB7UkVHRVhfSU1QT1JUX1NDUklQVCwgUkVHRVhfSU5URVJOQUxfVVJMLCBSRUdFWF9UTCwgUkVHRVhfVVJMfSBmcm9tICcuL2NvbnN0YW50JztcbmltcG9ydCB0eXBlIHtUYXJnZXRFbGVtZW50c30gZnJvbSAnLi91dGlsL2dldFRhcmdldEVsZW1lbnRzJztcbmltcG9ydCB7aXNEaWZmfSBmcm9tICcuL3V0aWwvaXNEaWZmJztcbmltcG9ydCB7aXNUYXJnZXRTcGVjaWFsUGFnZX0gZnJvbSAnLi91dGlsL2lzVGFyZ2V0U3BlY2lhbFBhZ2UnO1xuXG5jb25zdCBwcm9jZXNzRWxlbWVudCA9ICh7Y29sb3IsIHRhcmdldEVsZW1lbnRzfTogVGFyZ2V0RWxlbWVudHMpOiB2b2lkID0+IHtcblx0bGV0IGlzQWN0aXZhdGVIVE1MOiBib29sZWFuID0gZmFsc2U7XG5cdC8qIFJlZ2V4IChkZWZhdWx0IGZvciBkaWZmcykgKi9cblx0Ly8gUmVnZXggZm9yIGRpZmZzXG5cdGxldCByZWdleFVSTGluV2lraWNvZGVXaXRob3V0TGFiZWw6IFJlZ0V4cCA9XG5cdFx0LygoPzpbXltdfF4pXFxbXFxzKig/OjxcXC9zcGFuPik/XFxzKig/OjxzcGFuIGNsYXNzPVwiZGlmZmNoYW5nZVwiPik/XFxzKikoKD86aHR0cHM/fGZ0cHM/KTpcXC9cXC9bXFx3ISMlJigpKy4vOj0/QFxcXFx+LV0rKSgoPzo8XFwvc3Bhbj4pPyg/OjxzcGFuIGNsYXNzPVwiZGlmZmNoYW5nZVwiPik/KShbXFx3ISMlJigpKy4vOj0/QFxcXFx+LV0qKSgoPzo8XFwvc3Bhbj4pPyg/OjxzcGFuIGNsYXNzPVwiZGlmZmNoYW5nZVwiPik/KShbXFx3ISMlJigpKy4vOj0/QFxcXFx+LV0qKShbXlxcblxcXV0qXSkvZ207XG5cdC8vIEV4dGVybmFsIGxpbmtzIChubyB3aWtpY29kZSlcblx0bGV0IHJlZ2V4U3Vic3Rpbldpa2ljb2RlV2l0aG91dExhYmVsOiBzdHJpbmcgPSBgJDE8YSBjbGFzcz1cImV4dGVybmFsIGF1dG9saW5rXCIgc3R5bGU9XCJjb2xvcjoke2NvbG9yfVwiIGhyZWY9XCIkMiQ0JDZcIj4kMjwvYT4kMzxhIGNsYXNzPVwiZXh0ZXJuYWwgYXV0b2xpbmtcIiBzdHlsZT1cImNvbG9yOiR7Y29sb3J9XCIgaHJlZj1cIiQyJDQkNlwiPiQ0PC9hPiQ1PGEgY2xhc3M9XCJleHRlcm5hbCBhdXRvbGlua1wiIHN0eWxlPVwiY29sb3I6JHtjb2xvcn1cIiBocmVmPVwiJDIkNCQ2XCI+JDY8L2E+JDdgO1xuXHQvLyBFeHRlcm5hbCBsaW5rcyBpbiBkaWZmIHBhZ2VzLCB3aWtpY29kZSB3aXRob3V0IGxhYmVsXG5cdGxldCByZWdleFVSTGluV2lraWNvZGVXaXRoTGFiZWw6IFJlZ0V4cCA9IHJlZ2V4VVJMaW5XaWtpY29kZVdpdGhvdXRMYWJlbDtcblx0Ly8gRXh0ZXJuYWwgbGlua3MgaW4gZGlmZiBwYWdlcywgd2lraWNvZGUgd2l0aCBsYWJlbFxuXHRsZXQgcmVnZXhTdWJzdGluV2lraWNvZGVXaXRoTGFiZWw6IHN0cmluZyA9IHJlZ2V4U3Vic3Rpbldpa2ljb2RlV2l0aG91dExhYmVsO1xuXHQvLyBPdGhlciBwYWdlcyBpbmNsdWRlZCBpbiBkaWZmIHBhZ2VzXG5cdGxldCByZWdleE90aGVyUGFnZXM6IFJlZ0V4cCA9XG5cdFx0LygoPzpbXntdfF4pe3syfVxccyooPzo8XFwvc3Bhbj4pP1xccyooPzo8c3BhbiBjbGFzcz1cImRpZmZjaGFuZ2VcIj4pP1xccyooPzooPzpbU3NdW1V1XVtCYl1bU3NdW1R0XXxbTW1dW1NzXVtHZ118W01tXVtTc11bR2ddW05uXVtXd10pXFxzKjopP1xccyooPzo8XFwvc3Bhbj4pP1xccyooPzo8c3BhbiBjbGFzcz1cImRpZmZjaGFuZ2VcIj4pP1xccyopKCg/OltTc11wZWNpYWxlP3xbUXFdKD86aXV3ZW58W1d3XSl8W1d3XVtQcF18W1R0XWVtcGxhdGV8W1V1XXNlcik/XFxzKig/OiA/W1R0XWFsayk/XFxzKjpbXlxcbjo8PltcXF17fH1dKykoKD86PFxcL3NwYW4+KT8oPzo8c3BhbiBjbGFzcz1cImRpZmZjaGFuZ2VcIj4pPykoW15cXG46PD5bXFxde3x9XSopKCg/OjxcXC9zcGFuPik/KD86PHNwYW4gY2xhc3M9XCJkaWZmY2hhbmdlXCI+KT8pKFteXFxuOjw+W1xcXXt8fV0qKShcXHx8fXsyfSkvZ207XG5cdGxldCByZWdleFN1YnN0aW5PdGhlclBhZ2VzOiBzdHJpbmcgPSBgJDE8YSBjbGFzcz1cImF1dG9saW5rXCIgc3R5bGU9XCJjb2xvcjoke2NvbG9yfVwiIGhyZWY9XCIvd2lraS8kMiQ0JDZcIj4kMjwvYT4kMzxhIGNsYXNzPVwiYXV0b2xpbmtcIiBzdHlsZT1cImNvbG9yOiR7Y29sb3J9XCIgaHJlZj1cIi93aWtpLyQyJDQkNlwiPiQ0PC9hPiQ1PGEgY2xhc3M9XCJhdXRvbGlua1wiIHN0eWxlPVwiY29sb3I6JHtjb2xvcn1cIiBocmVmPVwiL3dpa2kvJDIkNCQ2XCI+JDY8L2E+JDdgO1xuXHQvLyBUZW1wbGF0ZXMgaW4gZGlmZiBwYWdlc1xuXHRsZXQgcmVnZXhUZW1wbGF0ZTogUmVnRXhwID1cblx0XHQvKCg/Oltee118Xil7ezJ9XFxzKig/OjxcXC9zcGFuPik/XFxzKig/OjxzcGFuIGNsYXNzPVwiZGlmZmNoYW5nZVwiPik/XFxzKig/Oig/OltTc11bVXVdW0JiXVtTc11bVHRdfFtNbV1bU3NdW0dnXXxbTW1dW1NzXVtHZ11bTm5dW1d3XSlcXHMqOik/XFxzKig/OjxcXC9zcGFuPik/XFxzKig/OjxzcGFuIGNsYXNzPVwiZGlmZmNoYW5nZVwiPik/KShbXlxcbjo8PltcXF17fH1dKykoKD86PFxcL3NwYW4+KT8oPzo8c3BhbiBjbGFzcz1cImRpZmZjaGFuZ2VcIj4pPykoW15cXG46PD5bXFxde3x9XSopKCg/OjxcXC9zcGFuPik/KD86PHNwYW4gY2xhc3M9XCJkaWZmY2hhbmdlXCI+KT8pKFteXFxuOjw+W1xcXXt8fV0qKShcXHx8fXsyfXw6KS9nbTtcblx0bGV0IHJlZ2V4U3Vic3RpblRlbXBsYXRlOiBzdHJpbmcgPSBgJDE8YSBjbGFzcz1cImF1dG9saW5rXCIgc3R5bGU9XCJjb2xvcjoke2NvbG9yfVwiIGhyZWY9XCIvd2lraS9UZW1wbGF0ZTokMiQ0JDZcIj4kMjwvYT4kMzxhIGNsYXNzPVwiYXV0b2xpbmtcIiBzdHlsZT1cImNvbG9yOiR7Y29sb3J9XCIgaHJlZj1cIi93aWtpL1RlbXBsYXRlOiQyJDQkNlwiPiQ0PC9hPiQ1PGEgY2xhc3M9XCJhdXRvbGlua1wiIHN0eWxlPVwiY29sb3I6JHtjb2xvcn1cIiBocmVmPVwiL3dpa2kvVGVtcGxhdGU6JDIkNCQ2XCI+JDY8L2E+JDdgO1xuXHQvLyBXaWtpbGlua3MgaW4gZGlmZiBwYWdlc1xuXHRsZXQgcmVnZXhXaWtpbGluazE6IFJlZ0V4cCA9XG5cdFx0LyhcXFt7Mn1cXHMqKD86PFxcL3NwYW4+KT9cXHMqKD86PHNwYW4gY2xhc3M9XCJkaWZmY2hhbmdlXCI+KT9cXHMqKShbXlxcbjw+W1xcXXt8fV0rKSgoPzo8XFwvc3Bhbj4pPyg/OjxzcGFuIGNsYXNzPVwiZGlmZmNoYW5nZVwiPik/KShbXlxcbjw+W1xcXXt8fV0qKSgoPzo8XFwvc3Bhbj4pPyg/OjxzcGFuIGNsYXNzPVwiZGlmZmNoYW5nZVwiPik/KShbXlxcbjw+W1xcXXt8fV0qKSgoPzpbXlxcblxcXV18XVteXFxdXSkqXXsyfSkvZztcblx0bGV0IHJlZ2V4U3Vic3Rpbldpa2lsaW5rMTogc3RyaW5nID0gYCQxPGEgY2xhc3M9XCJhdXRvbGlua1wiIHN0eWxlPVwiY29sb3I6JHtjb2xvcn1cIiBocmVmPVwiL3dpa2kvJDIkNCQ2XCI+JDI8L2E+JDM8YSBjbGFzcz1cImF1dG9saW5rXCIgc3R5bGU9XCJjb2xvcjoke2NvbG9yfVwiIGhyZWY9XCIvd2lraS8kMiQ0JDZcIj4kNDwvYT4kNTxhIGNsYXNzPVwiYXV0b2xpbmtcIiBzdHlsZT1cImNvbG9yOiR7Y29sb3J9XCIgaHJlZj1cIi93aWtpLyQyJDQkNlwiPiQ2PC9hPiQ3YDtcblx0bGV0IHJlZ2V4V2lraWxpbmsyOiBSZWdFeHAgPSByZWdleFdpa2lsaW5rMTtcblx0bGV0IHJlZ2V4U3Vic3Rpbldpa2lsaW5rMjogc3RyaW5nID0gcmVnZXhTdWJzdGluV2lraWxpbmsxO1xuXHQvLyBSZWdleCBmb3IgY29tbWVudHMgb3IgY29kZSBzZWN0aW9uc1xuXHRpZiAoIWlzRGlmZigpKSB7XG5cdFx0Ly8gQWN0aXZhdGUgc29tZSBIVE1MIChpbmxpbmUpIGFuZCB3aWtpY29kZSBmb3IgYm9sZCBhbmQgaXRhbGljXG5cdFx0aXNBY3RpdmF0ZUhUTUwgPSB0cnVlO1xuXHRcdC8vIEV4dGVybmFsIGxpbmtzIGluIGNvbW1lbnRzIG9yIGNvZGUgc2VjdGlvbnMsIHdpa2ljb2RlIHdpdGhvdXQgbGFiZWxcblx0XHRyZWdleFVSTGluV2lraWNvZGVXaXRob3V0TGFiZWwgPSAvKFteW118XilcXFtcXHMqKCg/Omh0dHBzP3xmdHBzPyk6XFwvXFwvW1xcdyEjJSYoKSsuLzo9P0BcXFxcfi1dKylcXHMqXS9nbTtcblx0XHRyZWdleFN1YnN0aW5XaWtpY29kZVdpdGhvdXRMYWJlbCA9IGAkMTxhIGNsYXNzPVwiZXh0ZXJuYWwgYXV0b2xpbmtcIiBzdHlsZT1cImNvbG9yOiR7Y29sb3J9XCIgaHJlZj1cIiQyXCI+JDI8L2E+YDtcblx0XHQvLyBFeHRlcm5hbCBsaW5rcyBpbiBjb21tZW50cyBvciBjb2RlIHNlY3Rpb25zLCB3aWtpY29kZSB3aXRoIGxhYmVsICh0aGUgVVJMIHdpbGwgbm90IGJlIHZpc2libGUpXG5cdFx0cmVnZXhVUkxpbldpa2ljb2RlV2l0aExhYmVsID0gLyhbXltdfF4pXFxbXFxzKigoPzpodHRwcz98ZnRwcz8pOlxcL1xcL1tcXHchIyUmKCkrLi86PT9AXFxcXH4tXSspXFxzKyhbXlxcbl0rPylcXHMqXS9nbTtcblx0XHRyZWdleFN1YnN0aW5XaWtpY29kZVdpdGhMYWJlbCA9IGAkMTxhIGNsYXNzPVwiZXh0ZXJuYWwgYXV0b2xpbmtcIiBzdHlsZT1cImNvbG9yOiR7Y29sb3J9XCIgaHJlZj1cIiQyXCI+JDM8L2E+YDtcblx0XHQvLyBPdGhlciBwYWdlcyBpbmNsdWRlZCBpbiBjb21tZW50cyBvciBjb2RlIHNlY3Rpb25zXG5cdFx0cmVnZXhPdGhlclBhZ2VzID1cblx0XHRcdC8oKD86W157XXxeKXt7Mn1cXHMqKD86KD86W1NzXVtVdV1bQmJdW1NzXVtUdF18W01tXVtTc11bR2ddfFtNbV1bU3NdW0dnXVtObl1bV3ddKVxccyo6KT9cXHMqKSgoPzpbU3NdcGVjaWFsfFtRcV0oPzppdXdlbnxRKXxbV3ddW1BwXXxbVHRdZW1wbGF0ZXxbVXVdc2VyKT9cXHMqKD86ID9bVHRdYWxrKT9cXHMqOlteXFxuOjw+W1xcXXt8fV0rKShcXHx8fXsyfSkvZ207XG5cdFx0cmVnZXhTdWJzdGluT3RoZXJQYWdlcyA9IGAkMTxhIGNsYXNzPVwiYXV0b2xpbmtcIiBzdHlsZT1cImNvbG9yOiR7Y29sb3J9XCIgaHJlZj1cIi93aWtpLyQyXCI+JDI8L2E+JDNgO1xuXHRcdC8vIFRlbXBsYXRlcyBpbiBjb21tZW50cyBvciBjb2RlIHNlY3Rpb25zXG5cdFx0cmVnZXhUZW1wbGF0ZSA9XG5cdFx0XHQvKCg/Oltee118Xil7ezJ9XFxzKig/Oig/OltTc11bVXVdW0JiXVtTc11bVHRdfFtNbV1bU3NdW0dnXXxbTW1dW1NzXVtHZ11bTm5dW1d3XSlcXHMqOik/XFxzKikoW15cXG46PD5bXFxde3x9XSspKFxcfHx9ezJ9fDopL2dtO1xuXHRcdHJlZ2V4U3Vic3RpblRlbXBsYXRlID0gYCQxPGEgY2xhc3M9XCJhdXRvbGlua1wiIHN0eWxlPVwiY29sb3I6JHtjb2xvcn1cIiBocmVmPVwiL3dpa2kvVGVtcGxhdGU6JDJcIj4kMjwvYT4kM2A7XG5cdFx0Ly8gV2lraWxpbmtzIGluIGNvZGUgc2VjdGlvbnMsIHdpdGggbGFiZWxcblx0XHRyZWdleFdpa2lsaW5rMSA9IC9cXFt7Mn1cXHMqKFteXFxuPD5bXFxde3x9XSs/KVxccypcXHxcXHMqKC4rPylcXHMqXXsyfS9nO1xuXHRcdHJlZ2V4U3Vic3Rpbldpa2lsaW5rMSA9IGA8YSBjbGFzcz1cImF1dG9saW5rXCIgc3R5bGU9XCJjb2xvcjoke2NvbG9yfVwiIGhyZWY9XCIvd2lraS8kMVwiPiQyPC9hPmA7XG5cdFx0Ly8gV2lraWxpbmtzIGluIGNvZGUgc2VjdGlvbnMsIHdpdGhvdXQgbGFiZWxcblx0XHRyZWdleFdpa2lsaW5rMiA9IC9cXFt7Mn1cXHMqKFteXFxuPD5bXFxde3x9XSs/KVxccypcXHw/XFxzKl17Mn0vZztcblx0XHRyZWdleFN1YnN0aW5XaWtpbGluazIgPSBgPGEgY2xhc3M9XCJhdXRvbGlua1wiIHN0eWxlPVwiY29sb3I6JHtjb2xvcn1cIiBocmVmPVwiL3dpa2kvJDFcIj4kMTwvYT5gO1xuXHR9XG5cblx0Zm9yIChjb25zdCBlbGVtZW50IG9mIHRhcmdldEVsZW1lbnRzKSB7XG5cdFx0Y29uc3Qge2lubmVySFRNTDogb3JpZ2luSHRtbH0gPSBlbGVtZW50O1xuXHRcdGxldCBodG1sOiBzdHJpbmcgPSBvcmlnaW5IdG1sO1xuXG5cdFx0aHRtbCA9IGh0bWwucmVwbGFjZSgvJmx0Oy9nLCAnJnNoeTs8JnNoeTsnKTtcblx0XHRodG1sID0gaHRtbC5yZXBsYWNlKC8mZ3Q7L2csICcmc2h5Oz4mc2h5OycpO1xuXHRcdC8vICZhbXA7bHQ7IHRvICZhbXA7c2h5OzwmYW1wO3NoeTsgYW5kICZhbXA7Z3Q7IHRvICZhbXA7c2h5Oz4mYW1wO3NoeTsgKCZhbXA7c2h5OyBpcyBhIG1hcmtlcilcblx0XHRodG1sID0gaHRtbC5yZXBsYWNlKC8mYW1wOy9nLCAnJicpO1xuXHRcdC8vICZhbXA7YW1wOyB0byAmXG5cdFx0LyogLS0tICovXG5cdFx0aHRtbCA9IGh0bWwucmVwbGFjZShSRUdFWF9UTCwgYCQxPGEgY2xhc3M9XCJhdXRvbGlua1wiIHN0eWxlPVwiY29sb3I6JHtjb2xvcn1cIiBocmVmPVwiL3dpa2kvVGVtcGxhdGU6JDJcIj4kMjwvYT5gKTtcblx0XHQvLyBGb3Ige3t0bH19OiBtYWtlIGhpcyBhcmd1bWVudCBpbnRvIGxpbmtcblx0XHRodG1sID0gaHRtbC5yZXBsYWNlKFJFR0VYX1VSTCwgYCQxPGEgY2xhc3M9XCJleHRlcm5hbCBhdXRvbGlua1wiIHN0eWxlPVwiY29sb3I6JHtjb2xvcn1cIiBocmVmPVwiJDJcIj4kMjwvYT5gKTtcblx0XHQvLyBQYXJzZSBpbmFjdGl2ZSBleHRlcm5hbCBsaW5rcyAobm8gd2lraWNvZGUpXG5cdFx0aHRtbCA9IGh0bWwucmVwbGFjZShyZWdleFVSTGluV2lraWNvZGVXaXRob3V0TGFiZWwsIHJlZ2V4U3Vic3Rpbldpa2ljb2RlV2l0aG91dExhYmVsKTtcblx0XHQvLyBNYWtlIGV4dGVybmFsIGxpbmtzIGluIHdpa2ljb2RlIHdpdGhvdXQgbGFiZWwgaW50byBsaW5rc1xuXHRcdGh0bWwgPSBodG1sLnJlcGxhY2UocmVnZXhVUkxpbldpa2ljb2RlV2l0aExhYmVsLCByZWdleFN1YnN0aW5XaWtpY29kZVdpdGhMYWJlbCk7XG5cdFx0Ly8gTWFrZSBleHRlcm5hbCBsaW5rcyBpbiB3aWtpY29kZSB3aXRoIGxhYmVsIGludG8gbGlua3Ncblx0XHRodG1sID0gaHRtbC5yZXBsYWNlKHJlZ2V4T3RoZXJQYWdlcywgcmVnZXhTdWJzdGluT3RoZXJQYWdlcyk7XG5cdFx0Ly8gTWFrZSBvdGhlciBwYWdlcyBpbmNsdWRlZCBjb2RlIGludG8gbGlua3Ncblx0XHRodG1sID0gaHRtbC5yZXBsYWNlKHJlZ2V4VGVtcGxhdGUsIHJlZ2V4U3Vic3RpblRlbXBsYXRlKTtcblx0XHRodG1sID0gaHRtbC5yZXBsYWNlKC9ocmVmPVwiXFwvd2lraVxcL1RlbXBsYXRlOiMvZywgJ2hyZWY9XCIvd2lraS9IZWxwOicpO1xuXHRcdC8vIE1ha2UgdGVtcGxhdGUgY29kZSBpbnRvIGxpbmtzXG5cdFx0aHRtbCA9IGh0bWwucmVwbGFjZShyZWdleFdpa2lsaW5rMSwgcmVnZXhTdWJzdGluV2lraWxpbmsxKTtcblx0XHRodG1sID0gaHRtbC5yZXBsYWNlKHJlZ2V4V2lraWxpbmsyLCByZWdleFN1YnN0aW5XaWtpbGluazIpO1xuXHRcdC8vIE1ha2Ugd2lraWxpbmsgY29kZSBpbnRvIGxpbmtzXG5cdFx0aHRtbCA9IGh0bWwucmVwbGFjZShcblx0XHRcdFJFR0VYX0lOVEVSTkFMX1VSTCxcblx0XHRcdGAkMSQyPGEgY2xhc3M9XCJleHRlcm5hbCBhdXRvbGlua1wiIHN0eWxlPVwiY29sb3I6JHtjb2xvcn1cIiBocmVmPVwiJDNcIj4kMzwvYT4kMmBcblx0XHQpO1xuXHRcdC8vIFBhcnNlIGluYWN0aXZlIGV4dGVybmFsIGxpbmtzIChubyB3aWtpY29kZSlcblx0XHRodG1sID0gaHRtbC5yZXBsYWNlKFxuXHRcdFx0UkVHRVhfSU1QT1JUX1NDUklQVCxcblx0XHRcdGAkMSQyPGEgY2xhc3M9XCJhdXRvbGlua1wiIHN0eWxlPVwiY29sb3I6JHtjb2xvcn1cIiBocmVmPVwiL3dpa2kvJDNcIj4kMzwvYT4kNGBcblx0XHQpO1xuXHRcdC8vIFBhcnNlIEltcG9ydFNjcmlwdFxuXHRcdGh0bWwgPSBodG1sLnJlcGxhY2UoLyZzaHk7PCZzaHk7L2csICcmbHQ7Jyk7XG5cdFx0aHRtbCA9IGh0bWwucmVwbGFjZSgvJnNoeTs+JnNoeTsvZywgJyZndDsnKTtcblx0XHQvLyAmYW1wO3NoeTs8JmFtcDtzaHk7IHRvICZhbXA7bHQ7IGFuZCAmYW1wO3NoeTs+JmFtcDtzaHk7IHRvICZhbXA7Z3Q7IChyZXZlcnQpXG5cdFx0aWYgKGlzQWN0aXZhdGVIVE1MKSB7XG5cdFx0XHRodG1sID0gaHRtbC5yZXBsYWNlKFxuXHRcdFx0XHQvJmx0OyhzcGFufGJ8aXxzdHJvbmd8c21hbGx8dHR8ZGVsfHN8dXxzdWJ8c3VwKSZndDsoLio/KSZsdDtcXC8oXFwxKSZndDsvZyxcblx0XHRcdFx0JzwkMT4kMjwvJDM+J1xuXHRcdFx0KTtcblx0XHRcdGh0bWwgPSBodG1sLnJlcGxhY2UoLyhbXiddfF4pJ3szfSguKz8pJ3szfShbXiddfCQpL2dtLCAnJDE8Yj4kMjwvYj4kMycpO1xuXHRcdFx0aHRtbCA9IGh0bWwucmVwbGFjZSgvKFteJ118XiknezJ9KC4rPyknezJ9KFteJ118JCkvZ20sICckMTxpPiQyPC9pPiQzJyk7XG5cdFx0XHRjb25zdCB7d2dBY3Rpb259ID0gbXcuY29uZmlnLmdldCgpO1xuXHRcdFx0aWYgKFsnZWRpdCcsICdzdWJtaXQnLCAnaGlzdG9yeSddLmluY2x1ZGVzKHdnQWN0aW9uKSB8fCBpc1RhcmdldFNwZWNpYWxQYWdlKCkpIHtcblx0XHRcdFx0aHRtbCA9IGh0bWwucmVwbGFjZShcblx0XHRcdFx0XHQvPGk+KC4qPyk8XFwvaT4vZyxcblx0XHRcdFx0XHQnPHNwYW4gdGl0bGU9XCJpdGFsaWNcIiBzdHlsZT1cImJvcmRlcjoxcHggc29saWQgI2MwYzBjMDtwYWRkaW5nOjJweFwiPiQxPC9zcGFuPidcblx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHRcdC8vIEknbSBpbiBhIGNvbW1lbnQgZmllbGQgKGl0YWxpYylcblx0XHR9XG5cdFx0aWYgKGlzRGlmZigpKSB7XG5cdFx0XHRodG1sID0gaHRtbC5yZXBsYWNlKC88YSBbXj5dKz48XFwvYT4vZywgJycpOyAvLyBDbGVhblxuXHRcdFx0aHRtbCA9IGh0bWwucmVwbGFjZShcblx0XHRcdFx0LyhbXltdfF4pXFxbXFxzKig8YSBbXj5dKz4pKD86aHR0cHM/fGZ0cHM/KTpcXC9cXC9bXFx3ISMlJigpKy4vOj0/QFxcXFx+LV0rKDxcXC9hPilcXHMrKFteXFxuXFxdXSspXS9nbSxcblx0XHRcdFx0JyQxJDIkNCQzJ1xuXHRcdFx0KTtcblx0XHRcdGh0bWwgPSBodG1sLnJlcGxhY2UoXG5cdFx0XHRcdC8oW15bXXxeKVxcW1xccyooPGEgW14+XSs+KSgoPzpodHRwcz98ZnRwcz8pOlxcL1xcL1tcXHchIyUmKCkrLi86PT9AXFxcXH4tXSspKDxcXC9hPilcXHMqXS9nbSxcblx0XHRcdFx0JyQxJDIkMyQ0J1xuXHRcdFx0KTtcblx0XHR9XG5cblx0XHRpZiAoaHRtbCAhPT0gb3JpZ2luSHRtbCkge1xuXHRcdFx0cmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpOiB2b2lkID0+IHtcblx0XHRcdFx0ZWxlbWVudC5pbm5lckhUTUwgPSBodG1sOyAvLyBXcml0ZSBpdCBiYWNrXG5cdFx0XHR9KTtcblx0XHR9XG5cdH1cbn07XG5cbmV4cG9ydCB7cHJvY2Vzc0VsZW1lbnR9O1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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LCAibXciLCAidXRpbCIsICJnZXRQYXJhbVZhbHVlIiwgImlzVGFyZ2V0U3BlY2lhbFBhZ2UiLCAid2dDYW5vbmljYWxTcGVjaWFsUGFnZU5hbWUiLCAiY29uZmlnIiwgImdldCIsICJpbmNsdWRlcyIsICJ0b1N0cmluZyIsICJnZXRUYXJnZXRFbGVtZW50cyIsICIkYm9keSIsICJjb2xvciIsICJ0YXJnZXRFbGVtZW50cyIsICJ3Z0FjdGlvbiIsICJmaW5kIiwgImpvaW4iLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAicmVxdWlyZSIsICJpc0luVGFyZ2V0U3BlY2lhbFBhZ2UiLCAid2dDYW5vbmljYWxOYW1lc3BhY2UiLCAiUkVHRVhfSU5URVJOQUxfVVJMIiwgIlJFR0VYX0lNUE9SVF9TQ1JJUFQiLCAiUkVHRVhfVEwiLCAiUkVHRVhfVVJMIiwgInByb2Nlc3NFbGVtZW50IiwgImlzQWN0aXZhdGVIVE1MIiwgInJlZ2V4VVJMaW5XaWtpY29kZVdpdGhvdXRMYWJlbCIsICJyZWdleFN1YnN0aW5XaWtpY29kZVdpdGhvdXRMYWJlbCIsICJjb25jYXQiLCAicmVnZXhVUkxpbldpa2ljb2RlV2l0aExhYmVsIiwgInJlZ2V4U3Vic3Rpbldpa2ljb2RlV2l0aExhYmVsIiwgInJlZ2V4T3RoZXJQYWdlcyIsICJyZWdleFN1YnN0aW5PdGhlclBhZ2VzIiwgInJlZ2V4VGVtcGxhdGUiLCAicmVnZXhTdWJzdGluVGVtcGxhdGUiLCAicmVnZXhXaWtpbGluazEiLCAicmVnZXhTdWJzdGluV2lraWxpbmsxIiwgInJlZ2V4V2lraWxpbmsyIiwgInJlZ2V4U3Vic3Rpbldpa2lsaW5rMiIsICJfaXRlcmF0b3IiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAiX3N0ZXAiLCAicyIsICJuIiwgImRvbmUiLCAiZWxlbWVudCIsICJ2YWx1ZSIsICJpbm5lckhUTUwiLCAib3JpZ2luSHRtbCIsICJodG1sIiwgInJlcGxhY2UiLCAicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwgImVyciIsICJlIiwgImYiLCAiZ2V0Qm9keSIsICJ0aGVuIiwgImF1dG9MaW5rIl0KfQo=

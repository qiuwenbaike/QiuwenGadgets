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
  let regexSubstinWikicodeWithoutLabel = '$1<a class="external autolink" style="color:'.concat(color, '" href="$2$4$6">$2</a>$3<a class="external autolink" style="color:').concat(color, '" href="$2$4$6">$4</a>$5<a class="external autolink" style="color:').concat(color, '" href="$2$4$6">$6</a>$7');
  let regexURLinWikicodeWithLabel = regexURLinWikicodeWithoutLabel;
  let regexSubstinWikicodeWithLabel = regexSubstinWikicodeWithoutLabel;
  let regexOtherPages = /((?:[^{]|^){{2}\s*(?:<\/span>)?\s*(?:<span class="diffchange">)?\s*(?:(?:[Ss][Uu][Bb][Ss][Tt]|[Mm][Ss][Gg]|[Mm][Ss][Gg][Nn][Ww])\s*:)?\s*(?:<\/span>)?\s*(?:<span class="diffchange">)?\s*)((?:[Ss]peciale?|[Qq](?:iuwen|[Ww])|[Ww][Pp]|[Tt]emplate|[Uu]ser)?\s*(?: ?[Tt]alk)?\s*:[^\n:<>[\]{|}]+)((?:<\/span>)?(?:<span class="diffchange">)?)([^\n:<>[\]{|}]*)((?:<\/span>)?(?:<span class="diffchange">)?)([^\n:<>[\]{|}]*)(\||}{2})/gm;
  let regexSubstinOtherPages = '$1<a class="autolink" style="color:'.concat(color, '" href="/wiki/$2$4$6">$2</a>$3<a class="autolink" style="color:').concat(color, '" href="/wiki/$2$4$6">$4</a>$5<a class="autolink" style="color:').concat(color, '" href="/wiki/$2$4$6">$6</a>$7');
  let regexTemplate = /((?:[^{]|^){{2}\s*(?:<\/span>)?\s*(?:<span class="diffchange">)?\s*(?:(?:[Ss][Uu][Bb][Ss][Tt]|[Mm][Ss][Gg]|[Mm][Ss][Gg][Nn][Ww])\s*:)?\s*(?:<\/span>)?\s*(?:<span class="diffchange">)?)(?![Ii][Nn][Tt]\s*:)([^\n:<>[\]{|}]+)((?:<\/span>)?(?:<span class="diffchange">)?)([^\n:<>[\]{|}]*)((?:<\/span>)?(?:<span class="diffchange">)?)([^\n:<>[\]{|}]*)(\||}{2}|:)/gm;
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
    regexTemplate = /((?:[^{]|^){{2}\s*(?:(?:[Ss][Uu][Bb][Ss][Tt]|[Mm][Ss][Gg]|[Mm][Ss][Gg][Nn][Ww])\s*:)?\s*)(?![Ii][Nn][Tt]\s*:)([^\n:<>[\]{|}]+)(\||}{2}|:)/gm;
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0F1dG9MaW5rL21vZHVsZXMvdXRpbC9pc0RpZmYudHMiLCAic3JjL0F1dG9MaW5rL21vZHVsZXMvdXRpbC9pc1RhcmdldFNwZWNpYWxQYWdlLnRzIiwgInNyYy9BdXRvTGluay9tb2R1bGVzL3V0aWwvZ2V0VGFyZ2V0RWxlbWVudHMudHMiLCAic3JjL0F1dG9MaW5rL0F1dG9MaW5rLnRzIiwgInNyYy9BdXRvTGluay9tb2R1bGVzL3V0aWwvaXNJblRhcmdldFNwZWNpYWxQYWdlLnRzIiwgInNyYy9BdXRvTGluay9tb2R1bGVzL2NvbnN0YW50LnRzIiwgInNyYy9BdXRvTGluay9tb2R1bGVzL3Byb2Nlc3NFbGVtZW50LnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBpc0RpZmYgPSAoKSA9PiB7XG5cdHJldHVybiAhIW13LnV0aWwuZ2V0UGFyYW1WYWx1ZSgnZGlmZicpO1xufTtcblxuZXhwb3J0IHtpc0RpZmZ9O1xuIiwgIi8vIFNwZWNpYWwgY3Jvbm8gcGFnZXMgd2hlcmUgdGhpcyBzY3JpcHQgaXMgZW5hYmxlZFxuY29uc3QgaXNUYXJnZXRTcGVjaWFsUGFnZSA9ICgpOiBib29sZWFuID0+IHtcblx0Y29uc3Qge3dnQ2Fub25pY2FsU3BlY2lhbFBhZ2VOYW1lfSA9IG13LmNvbmZpZy5nZXQoKTtcblx0cmV0dXJuIFsnQ29udHJpYnV0aW9ucycsICdMb2cnLCAnTmV3cGFnZXMnLCAnUmVjZW50Y2hhbmdlcycsICdSZWNlbnRjaGFuZ2VzbGlua2VkJywgJ1dhdGNobGlzdCddLmluY2x1ZGVzKFxuXHRcdHdnQ2Fub25pY2FsU3BlY2lhbFBhZ2VOYW1lLnRvU3RyaW5nKClcblx0KTtcbn07XG5cbmV4cG9ydCB7aXNUYXJnZXRTcGVjaWFsUGFnZX07XG4iLCAiaW1wb3J0IHtpc0RpZmZ9IGZyb20gJy4vaXNEaWZmJztcbmltcG9ydCB7aXNUYXJnZXRTcGVjaWFsUGFnZX0gZnJvbSAnLi9pc1RhcmdldFNwZWNpYWxQYWdlJztcblxuaW50ZXJmYWNlIFRhcmdldEVsZW1lbnRzIHtcblx0Y29sb3I6IHN0cmluZztcblx0dGFyZ2V0RWxlbWVudHM6IEhUTUxFbGVtZW50W107XG59XG5cbmNvbnN0IGdldFRhcmdldEVsZW1lbnRzID0gKCRjb250ZW50OiBKUXVlcnk8SFRNTEVsZW1lbnQ+KTogVGFyZ2V0RWxlbWVudHMgPT4ge1xuXHRsZXQgY29sb3I6IHN0cmluZyA9ICcnOyAvLyBsaW5rcyBjb2xvciAoY29sb3VyZWQgbGlua3MpXG5cdGxldCB0YXJnZXRFbGVtZW50czogSFRNTEVsZW1lbnRbXSA9IFtdO1xuXHRjb25zdCB7d2dBY3Rpb259ID0gbXcuY29uZmlnLmdldCgpO1xuXG5cdGlmIChpc0RpZmYoKSkge1xuXHRcdC8vIGluIGRpZmYgcGFnZXNcblx0XHRjb2xvciA9ICdpbmhlcml0JzsgLy8gbm90IGNvbG91cmVkIGxpbmtzXG5cdFx0dGFyZ2V0RWxlbWVudHMgPSBbLi4uJGNvbnRlbnQuZmluZChbJy5kaWZmJywgJy5maXJzdHJldmlzaW9uaGVhZGVyJ10uam9pbignLCcpKV07XG5cdH0gZWxzZSBpZiAoWydlZGl0JywgJ3N1Ym1pdCcsICdoaXN0b3J5J10uaW5jbHVkZXMod2dBY3Rpb24pIHx8IGlzVGFyZ2V0U3BlY2lhbFBhZ2UoKSkge1xuXHRcdC8vIGluIGNvbW1lbnRzXG5cdFx0dGFyZ2V0RWxlbWVudHMgPSBbLi4uJGNvbnRlbnQuZmluZCgnLmNvbW1lbnQnKV07XG5cdH0gZWxzZSB7XG5cdFx0Ly8gaW4gY29kZSBzZWN0aW9uc1xuXHRcdHRhcmdldEVsZW1lbnRzID0gW1xuXHRcdFx0Li4uJGNvbnRlbnQuZmluZChbJ3NvdXJjZScsICcuY3NzJywgJy5zb3VyY2UtY3NzJywgJy5qYXZhc2NyaXB0JywgJy5zb3VyY2UtamF2YXNjcmlwdCddLmpvaW4oJywnKSksXG5cdFx0XTtcblx0fVxuXG5cdHJldHVybiB7XG5cdFx0Y29sb3IsXG5cdFx0dGFyZ2V0RWxlbWVudHMsXG5cdH07XG59O1xuXG5leHBvcnQge3R5cGUgVGFyZ2V0RWxlbWVudHMsIGdldFRhcmdldEVsZW1lbnRzfTtcbiIsICJpbXBvcnQge3R5cGUgVGFyZ2V0RWxlbWVudHMsIGdldFRhcmdldEVsZW1lbnRzfSBmcm9tICcuL21vZHVsZXMvdXRpbC9nZXRUYXJnZXRFbGVtZW50cyc7XG5pbXBvcnQge2dldEJvZHl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5pbXBvcnQge2lzSW5UYXJnZXRTcGVjaWFsUGFnZX0gZnJvbSAnLi9tb2R1bGVzL3V0aWwvaXNJblRhcmdldFNwZWNpYWxQYWdlJztcbmltcG9ydCB7cHJvY2Vzc0VsZW1lbnR9IGZyb20gJy4vbW9kdWxlcy9wcm9jZXNzRWxlbWVudCc7XG5cbnZvaWQgZ2V0Qm9keSgpLnRoZW4oZnVuY3Rpb24gYXV0b0xpbmsoKTogdm9pZCB7XG5cdGlmICghaXNJblRhcmdldFNwZWNpYWxQYWdlKCkpIHtcblx0XHRyZXR1cm47IC8vIERpc2FibGVkIGluIHRoZSBvdGhlciBzcGVjaWFsIHBhZ2VzXG5cdH1cblxuXHRtdy5ob29rKCd3aWtpcGFnZS5jb250ZW50JykuYWRkKGZ1bmN0aW9uICgkY29udGVudCk6IHZvaWQge1xuXHRcdGNvbnN0IHRhcmdldEVsZW1lbnRzOiBUYXJnZXRFbGVtZW50cyA9IGdldFRhcmdldEVsZW1lbnRzKCRjb250ZW50KTtcblx0XHRwcm9jZXNzRWxlbWVudCh0YXJnZXRFbGVtZW50cyk7XG5cdH0pO1xufSk7XG4iLCAiaW1wb3J0IHtpc1RhcmdldFNwZWNpYWxQYWdlfSBmcm9tICcuL2lzVGFyZ2V0U3BlY2lhbFBhZ2UnO1xuXG4vLyBTcGVjaWFsIGNyb25vIHBhZ2VzIHdoZXJlIHRoaXMgc2NyaXB0IGlzIGVuYWJsZWRcbmNvbnN0IGlzSW5UYXJnZXRTcGVjaWFsUGFnZSA9ICgpOiBib29sZWFuID0+IHtcblx0Y29uc3Qge3dnQ2Fub25pY2FsTmFtZXNwYWNlfSA9IG13LmNvbmZpZy5nZXQoKTtcblx0cmV0dXJuIHdnQ2Fub25pY2FsTmFtZXNwYWNlID09PSAnU3BlY2lhbCcgJiYgaXNUYXJnZXRTcGVjaWFsUGFnZSgpO1xufTtcblxuZXhwb3J0IHtpc0luVGFyZ2V0U3BlY2lhbFBhZ2V9O1xuIiwgImNvbnN0IFJFR0VYX0lOVEVSTkFMX1VSTDogUmVnRXhwID1cblx0LyhbXj1dKShbXFxzXCInXSkoKD86XFwvP3dcXC9pbmRleFxcLnBocFxcP3xcXC8/aW5kZXhcXC5waHBcXD98XFwvP3dpa2lcXC8pW1xcdyEjJSYoKSsuLzo9P0BcXFxcfi1dKylcXDIvZztcbi8vIEV4dGVybmFsIGxpbmtzIChubyB3aWtpY29kZSlcbmNvbnN0IFJFR0VYX0lNUE9SVF9TQ1JJUFQ6IFJlZ0V4cCA9XG5cdC8oW0lpXW1wb3J0W1NzXWNyaXB0KD86PHNwYW4gY2xhc3M9XCJicjBcIj4pP1xcKCg/OjxcXC9zcGFuPjxzcGFuIGNsYXNzPVwic3QwXCI+KT8pKCd8XCIpKFteXFxuPD5bXFxde3x9XSs/KShcXDIoPzo8XFwvc3Bhbj48c3BhbiBjbGFzcz1cImJyMFwiPik/XFwpKD86PFxcL3NwYW4+KT8pL2c7XG4vLyBJbXBvcnRTY3JpcHRcbmNvbnN0IFJFR0VYX1RMOiBSZWdFeHAgPSAvKFtee117ezJ9XFxzKltUdF1sXFx8KShbXlxcbjo8PltcXF17fH1dKykvZztcbi8vIEZvciB7e3RsfX1cbmNvbnN0IFJFR0VYX1VSTDogUmVnRXhwID1cblx0LygoPzpbXlwiW118W149XVwiKSg/OjxzcGFuIGNsYXNzPVwiZGlmZmNoYW5nZVwiPik/KSgoPzpodHRwcz98ZnRwcz8pOlxcL1xcL1tcXHchIyUmKCkrLi86PT9AXFxcXH4tXSs/KSg/PSg/OjxcXC9zcGFuPik/W1xcc1wiJylcXF18fV0pL2c7XG5cbmV4cG9ydCB7UkVHRVhfSU5URVJOQUxfVVJMLCBSRUdFWF9JTVBPUlRfU0NSSVBULCBSRUdFWF9UTCwgUkVHRVhfVVJMfTtcbiIsICIvKipcbiAqIEF1dG9saW5rIFtbd2lraWxpbmtzXV0sIFtleHRlcm5hbCBsaW5rc10gYW5kIHt7dGVtcGxhdGVzfX1cbiAqL1xuaW1wb3J0IHtSRUdFWF9JTVBPUlRfU0NSSVBULCBSRUdFWF9JTlRFUk5BTF9VUkwsIFJFR0VYX1RMLCBSRUdFWF9VUkx9IGZyb20gJy4vY29uc3RhbnQnO1xuaW1wb3J0IHR5cGUge1RhcmdldEVsZW1lbnRzfSBmcm9tICcuL3V0aWwvZ2V0VGFyZ2V0RWxlbWVudHMnO1xuaW1wb3J0IHtpc0RpZmZ9IGZyb20gJy4vdXRpbC9pc0RpZmYnO1xuaW1wb3J0IHtpc1RhcmdldFNwZWNpYWxQYWdlfSBmcm9tICcuL3V0aWwvaXNUYXJnZXRTcGVjaWFsUGFnZSc7XG5cbmNvbnN0IHByb2Nlc3NFbGVtZW50ID0gKHtjb2xvciwgdGFyZ2V0RWxlbWVudHN9OiBUYXJnZXRFbGVtZW50cyk6IHZvaWQgPT4ge1xuXHRsZXQgaXNBY3RpdmF0ZUhUTUw6IGJvb2xlYW4gPSBmYWxzZTtcblx0LyogUmVnZXggKGRlZmF1bHQgZm9yIGRpZmZzKSAqL1xuXHQvLyBSZWdleCBmb3IgZGlmZnNcblx0bGV0IHJlZ2V4VVJMaW5XaWtpY29kZVdpdGhvdXRMYWJlbDogUmVnRXhwID1cblx0XHQvKCg/OlteW118XilcXFtcXHMqKD86PFxcL3NwYW4+KT9cXHMqKD86PHNwYW4gY2xhc3M9XCJkaWZmY2hhbmdlXCI+KT9cXHMqKSgoPzpodHRwcz98ZnRwcz8pOlxcL1xcL1tcXHchIyUmKCkrLi86PT9AXFxcXH4tXSspKCg/OjxcXC9zcGFuPik/KD86PHNwYW4gY2xhc3M9XCJkaWZmY2hhbmdlXCI+KT8pKFtcXHchIyUmKCkrLi86PT9AXFxcXH4tXSopKCg/OjxcXC9zcGFuPik/KD86PHNwYW4gY2xhc3M9XCJkaWZmY2hhbmdlXCI+KT8pKFtcXHchIyUmKCkrLi86PT9AXFxcXH4tXSopKFteXFxuXFxdXSpdKS9nbTtcblx0Ly8gRXh0ZXJuYWwgbGlua3MgKG5vIHdpa2ljb2RlKVxuXHRsZXQgcmVnZXhTdWJzdGluV2lraWNvZGVXaXRob3V0TGFiZWw6IHN0cmluZyA9IGAkMTxhIGNsYXNzPVwiZXh0ZXJuYWwgYXV0b2xpbmtcIiBzdHlsZT1cImNvbG9yOiR7Y29sb3J9XCIgaHJlZj1cIiQyJDQkNlwiPiQyPC9hPiQzPGEgY2xhc3M9XCJleHRlcm5hbCBhdXRvbGlua1wiIHN0eWxlPVwiY29sb3I6JHtjb2xvcn1cIiBocmVmPVwiJDIkNCQ2XCI+JDQ8L2E+JDU8YSBjbGFzcz1cImV4dGVybmFsIGF1dG9saW5rXCIgc3R5bGU9XCJjb2xvcjoke2NvbG9yfVwiIGhyZWY9XCIkMiQ0JDZcIj4kNjwvYT4kN2A7XG5cdC8vIEV4dGVybmFsIGxpbmtzIGluIGRpZmYgcGFnZXMsIHdpa2ljb2RlIHdpdGhvdXQgbGFiZWxcblx0bGV0IHJlZ2V4VVJMaW5XaWtpY29kZVdpdGhMYWJlbDogUmVnRXhwID0gcmVnZXhVUkxpbldpa2ljb2RlV2l0aG91dExhYmVsO1xuXHQvLyBFeHRlcm5hbCBsaW5rcyBpbiBkaWZmIHBhZ2VzLCB3aWtpY29kZSB3aXRoIGxhYmVsXG5cdGxldCByZWdleFN1YnN0aW5XaWtpY29kZVdpdGhMYWJlbDogc3RyaW5nID0gcmVnZXhTdWJzdGluV2lraWNvZGVXaXRob3V0TGFiZWw7XG5cdC8vIE90aGVyIHBhZ2VzIGluY2x1ZGVkIGluIGRpZmYgcGFnZXNcblx0bGV0IHJlZ2V4T3RoZXJQYWdlczogUmVnRXhwID1cblx0XHQvKCg/Oltee118Xil7ezJ9XFxzKig/OjxcXC9zcGFuPik/XFxzKig/OjxzcGFuIGNsYXNzPVwiZGlmZmNoYW5nZVwiPik/XFxzKig/Oig/OltTc11bVXVdW0JiXVtTc11bVHRdfFtNbV1bU3NdW0dnXXxbTW1dW1NzXVtHZ11bTm5dW1d3XSlcXHMqOik/XFxzKig/OjxcXC9zcGFuPik/XFxzKig/OjxzcGFuIGNsYXNzPVwiZGlmZmNoYW5nZVwiPik/XFxzKikoKD86W1NzXXBlY2lhbGU/fFtRcV0oPzppdXdlbnxbV3ddKXxbV3ddW1BwXXxbVHRdZW1wbGF0ZXxbVXVdc2VyKT9cXHMqKD86ID9bVHRdYWxrKT9cXHMqOlteXFxuOjw+W1xcXXt8fV0rKSgoPzo8XFwvc3Bhbj4pPyg/OjxzcGFuIGNsYXNzPVwiZGlmZmNoYW5nZVwiPik/KShbXlxcbjo8PltcXF17fH1dKikoKD86PFxcL3NwYW4+KT8oPzo8c3BhbiBjbGFzcz1cImRpZmZjaGFuZ2VcIj4pPykoW15cXG46PD5bXFxde3x9XSopKFxcfHx9ezJ9KS9nbTtcblx0bGV0IHJlZ2V4U3Vic3Rpbk90aGVyUGFnZXM6IHN0cmluZyA9IGAkMTxhIGNsYXNzPVwiYXV0b2xpbmtcIiBzdHlsZT1cImNvbG9yOiR7Y29sb3J9XCIgaHJlZj1cIi93aWtpLyQyJDQkNlwiPiQyPC9hPiQzPGEgY2xhc3M9XCJhdXRvbGlua1wiIHN0eWxlPVwiY29sb3I6JHtjb2xvcn1cIiBocmVmPVwiL3dpa2kvJDIkNCQ2XCI+JDQ8L2E+JDU8YSBjbGFzcz1cImF1dG9saW5rXCIgc3R5bGU9XCJjb2xvcjoke2NvbG9yfVwiIGhyZWY9XCIvd2lraS8kMiQ0JDZcIj4kNjwvYT4kN2A7XG5cdC8vIFRlbXBsYXRlcyBpbiBkaWZmIHBhZ2VzXG5cdGxldCByZWdleFRlbXBsYXRlOiBSZWdFeHAgPVxuXHRcdC8oKD86W157XXxeKXt7Mn1cXHMqKD86PFxcL3NwYW4+KT9cXHMqKD86PHNwYW4gY2xhc3M9XCJkaWZmY2hhbmdlXCI+KT9cXHMqKD86KD86W1NzXVtVdV1bQmJdW1NzXVtUdF18W01tXVtTc11bR2ddfFtNbV1bU3NdW0dnXVtObl1bV3ddKVxccyo6KT9cXHMqKD86PFxcL3NwYW4+KT9cXHMqKD86PHNwYW4gY2xhc3M9XCJkaWZmY2hhbmdlXCI+KT8pKD8hW0lpXVtObl1bVHRdXFxzKjopKFteXFxuOjw+W1xcXXt8fV0rKSgoPzo8XFwvc3Bhbj4pPyg/OjxzcGFuIGNsYXNzPVwiZGlmZmNoYW5nZVwiPik/KShbXlxcbjo8PltcXF17fH1dKikoKD86PFxcL3NwYW4+KT8oPzo8c3BhbiBjbGFzcz1cImRpZmZjaGFuZ2VcIj4pPykoW15cXG46PD5bXFxde3x9XSopKFxcfHx9ezJ9fDopL2dtO1xuXHRsZXQgcmVnZXhTdWJzdGluVGVtcGxhdGU6IHN0cmluZyA9IGAkMTxhIGNsYXNzPVwiYXV0b2xpbmtcIiBzdHlsZT1cImNvbG9yOiR7Y29sb3J9XCIgaHJlZj1cIi93aWtpL1RlbXBsYXRlOiQyJDQkNlwiPiQyPC9hPiQzPGEgY2xhc3M9XCJhdXRvbGlua1wiIHN0eWxlPVwiY29sb3I6JHtjb2xvcn1cIiBocmVmPVwiL3dpa2kvVGVtcGxhdGU6JDIkNCQ2XCI+JDQ8L2E+JDU8YSBjbGFzcz1cImF1dG9saW5rXCIgc3R5bGU9XCJjb2xvcjoke2NvbG9yfVwiIGhyZWY9XCIvd2lraS9UZW1wbGF0ZTokMiQ0JDZcIj4kNjwvYT4kN2A7XG5cdC8vIFdpa2lsaW5rcyBpbiBkaWZmIHBhZ2VzXG5cdGxldCByZWdleFdpa2lsaW5rMTogUmVnRXhwID1cblx0XHQvKFxcW3syfVxccyooPzo8XFwvc3Bhbj4pP1xccyooPzo8c3BhbiBjbGFzcz1cImRpZmZjaGFuZ2VcIj4pP1xccyopKFteXFxuPD5bXFxde3x9XSspKCg/OjxcXC9zcGFuPik/KD86PHNwYW4gY2xhc3M9XCJkaWZmY2hhbmdlXCI+KT8pKFteXFxuPD5bXFxde3x9XSopKCg/OjxcXC9zcGFuPik/KD86PHNwYW4gY2xhc3M9XCJkaWZmY2hhbmdlXCI+KT8pKFteXFxuPD5bXFxde3x9XSopKCg/OlteXFxuXFxdXXxdW15cXF1dKSpdezJ9KS9nO1xuXHRsZXQgcmVnZXhTdWJzdGluV2lraWxpbmsxOiBzdHJpbmcgPSBgJDE8YSBjbGFzcz1cImF1dG9saW5rXCIgc3R5bGU9XCJjb2xvcjoke2NvbG9yfVwiIGhyZWY9XCIvd2lraS8kMiQ0JDZcIj4kMjwvYT4kMzxhIGNsYXNzPVwiYXV0b2xpbmtcIiBzdHlsZT1cImNvbG9yOiR7Y29sb3J9XCIgaHJlZj1cIi93aWtpLyQyJDQkNlwiPiQ0PC9hPiQ1PGEgY2xhc3M9XCJhdXRvbGlua1wiIHN0eWxlPVwiY29sb3I6JHtjb2xvcn1cIiBocmVmPVwiL3dpa2kvJDIkNCQ2XCI+JDY8L2E+JDdgO1xuXHRsZXQgcmVnZXhXaWtpbGluazI6IFJlZ0V4cCA9IHJlZ2V4V2lraWxpbmsxO1xuXHRsZXQgcmVnZXhTdWJzdGluV2lraWxpbmsyOiBzdHJpbmcgPSByZWdleFN1YnN0aW5XaWtpbGluazE7XG5cdC8vIFJlZ2V4IGZvciBjb21tZW50cyBvciBjb2RlIHNlY3Rpb25zXG5cdGlmICghaXNEaWZmKCkpIHtcblx0XHQvLyBBY3RpdmF0ZSBzb21lIEhUTUwgKGlubGluZSkgYW5kIHdpa2ljb2RlIGZvciBib2xkIGFuZCBpdGFsaWNcblx0XHRpc0FjdGl2YXRlSFRNTCA9IHRydWU7XG5cdFx0Ly8gRXh0ZXJuYWwgbGlua3MgaW4gY29tbWVudHMgb3IgY29kZSBzZWN0aW9ucywgd2lraWNvZGUgd2l0aG91dCBsYWJlbFxuXHRcdHJlZ2V4VVJMaW5XaWtpY29kZVdpdGhvdXRMYWJlbCA9IC8oW15bXXxeKVxcW1xccyooKD86aHR0cHM/fGZ0cHM/KTpcXC9cXC9bXFx3ISMlJigpKy4vOj0/QFxcXFx+LV0rKVxccypdL2dtO1xuXHRcdHJlZ2V4U3Vic3Rpbldpa2ljb2RlV2l0aG91dExhYmVsID0gYCQxPGEgY2xhc3M9XCJleHRlcm5hbCBhdXRvbGlua1wiIHN0eWxlPVwiY29sb3I6JHtjb2xvcn1cIiBocmVmPVwiJDJcIj4kMjwvYT5gO1xuXHRcdC8vIEV4dGVybmFsIGxpbmtzIGluIGNvbW1lbnRzIG9yIGNvZGUgc2VjdGlvbnMsIHdpa2ljb2RlIHdpdGggbGFiZWwgKHRoZSBVUkwgd2lsbCBub3QgYmUgdmlzaWJsZSlcblx0XHRyZWdleFVSTGluV2lraWNvZGVXaXRoTGFiZWwgPSAvKFteW118XilcXFtcXHMqKCg/Omh0dHBzP3xmdHBzPyk6XFwvXFwvW1xcdyEjJSYoKSsuLzo9P0BcXFxcfi1dKylcXHMrKFteXFxuXSs/KVxccypdL2dtO1xuXHRcdHJlZ2V4U3Vic3Rpbldpa2ljb2RlV2l0aExhYmVsID0gYCQxPGEgY2xhc3M9XCJleHRlcm5hbCBhdXRvbGlua1wiIHN0eWxlPVwiY29sb3I6JHtjb2xvcn1cIiBocmVmPVwiJDJcIj4kMzwvYT5gO1xuXHRcdC8vIE90aGVyIHBhZ2VzIGluY2x1ZGVkIGluIGNvbW1lbnRzIG9yIGNvZGUgc2VjdGlvbnNcblx0XHRyZWdleE90aGVyUGFnZXMgPVxuXHRcdFx0LygoPzpbXntdfF4pe3syfVxccyooPzooPzpbU3NdW1V1XVtCYl1bU3NdW1R0XXxbTW1dW1NzXVtHZ118W01tXVtTc11bR2ddW05uXVtXd10pXFxzKjopP1xccyopKCg/OltTc11wZWNpYWx8W1FxXSg/Oml1d2VufFEpfFtXd11bUHBdfFtUdF1lbXBsYXRlfFtVdV1zZXIpP1xccyooPzogP1tUdF1hbGspP1xccyo6W15cXG46PD5bXFxde3x9XSspKFxcfHx9ezJ9KS9nbTtcblx0XHRyZWdleFN1YnN0aW5PdGhlclBhZ2VzID0gYCQxPGEgY2xhc3M9XCJhdXRvbGlua1wiIHN0eWxlPVwiY29sb3I6JHtjb2xvcn1cIiBocmVmPVwiL3dpa2kvJDJcIj4kMjwvYT4kM2A7XG5cdFx0Ly8gVGVtcGxhdGVzIGluIGNvbW1lbnRzIG9yIGNvZGUgc2VjdGlvbnNcblx0XHRyZWdleFRlbXBsYXRlID1cblx0XHRcdC8oKD86W157XXxeKXt7Mn1cXHMqKD86KD86W1NzXVtVdV1bQmJdW1NzXVtUdF18W01tXVtTc11bR2ddfFtNbV1bU3NdW0dnXVtObl1bV3ddKVxccyo6KT9cXHMqKSg/IVtJaV1bTm5dW1R0XVxccyo6KShbXlxcbjo8PltcXF17fH1dKykoXFx8fH17Mn18OikvZ207XG5cdFx0cmVnZXhTdWJzdGluVGVtcGxhdGUgPSBgJDE8YSBjbGFzcz1cImF1dG9saW5rXCIgc3R5bGU9XCJjb2xvcjoke2NvbG9yfVwiIGhyZWY9XCIvd2lraS9UZW1wbGF0ZTokMlwiPiQyPC9hPiQzYDtcblx0XHQvLyBXaWtpbGlua3MgaW4gY29kZSBzZWN0aW9ucywgd2l0aCBsYWJlbFxuXHRcdHJlZ2V4V2lraWxpbmsxID0gL1xcW3syfVxccyooW15cXG48PltcXF17fH1dKz8pXFxzKlxcfFxccyooLis/KVxccypdezJ9L2c7XG5cdFx0cmVnZXhTdWJzdGluV2lraWxpbmsxID0gYDxhIGNsYXNzPVwiYXV0b2xpbmtcIiBzdHlsZT1cImNvbG9yOiR7Y29sb3J9XCIgaHJlZj1cIi93aWtpLyQxXCI+JDI8L2E+YDtcblx0XHQvLyBXaWtpbGlua3MgaW4gY29kZSBzZWN0aW9ucywgd2l0aG91dCBsYWJlbFxuXHRcdHJlZ2V4V2lraWxpbmsyID0gL1xcW3syfVxccyooW15cXG48PltcXF17fH1dKz8pXFxzKlxcfD9cXHMqXXsyfS9nO1xuXHRcdHJlZ2V4U3Vic3Rpbldpa2lsaW5rMiA9IGA8YSBjbGFzcz1cImF1dG9saW5rXCIgc3R5bGU9XCJjb2xvcjoke2NvbG9yfVwiIGhyZWY9XCIvd2lraS8kMVwiPiQxPC9hPmA7XG5cdH1cblxuXHRmb3IgKGNvbnN0IGVsZW1lbnQgb2YgdGFyZ2V0RWxlbWVudHMpIHtcblx0XHRjb25zdCB7aW5uZXJIVE1MOiBvcmlnaW5IdG1sfSA9IGVsZW1lbnQ7XG5cdFx0bGV0IGh0bWw6IHN0cmluZyA9IG9yaWdpbkh0bWw7XG5cblx0XHRodG1sID0gaHRtbC5yZXBsYWNlKC8mbHQ7L2csICcmc2h5Ozwmc2h5OycpO1xuXHRcdGh0bWwgPSBodG1sLnJlcGxhY2UoLyZndDsvZywgJyZzaHk7PiZzaHk7Jyk7XG5cdFx0Ly8gJmFtcDtsdDsgdG8gJmFtcDtzaHk7PCZhbXA7c2h5OyBhbmQgJmFtcDtndDsgdG8gJmFtcDtzaHk7PiZhbXA7c2h5OyAoJmFtcDtzaHk7IGlzIGEgbWFya2VyKVxuXHRcdGh0bWwgPSBodG1sLnJlcGxhY2UoLyZhbXA7L2csICcmJyk7XG5cdFx0Ly8gJmFtcDthbXA7IHRvICZcblx0XHQvKiAtLS0gKi9cblx0XHRodG1sID0gaHRtbC5yZXBsYWNlKFJFR0VYX1RMLCBgJDE8YSBjbGFzcz1cImF1dG9saW5rXCIgc3R5bGU9XCJjb2xvcjoke2NvbG9yfVwiIGhyZWY9XCIvd2lraS9UZW1wbGF0ZTokMlwiPiQyPC9hPmApO1xuXHRcdC8vIEZvciB7e3RsfX06IG1ha2UgaGlzIGFyZ3VtZW50IGludG8gbGlua1xuXHRcdGh0bWwgPSBodG1sLnJlcGxhY2UoUkVHRVhfVVJMLCBgJDE8YSBjbGFzcz1cImV4dGVybmFsIGF1dG9saW5rXCIgc3R5bGU9XCJjb2xvcjoke2NvbG9yfVwiIGhyZWY9XCIkMlwiPiQyPC9hPmApO1xuXHRcdC8vIFBhcnNlIGluYWN0aXZlIGV4dGVybmFsIGxpbmtzIChubyB3aWtpY29kZSlcblx0XHRodG1sID0gaHRtbC5yZXBsYWNlKHJlZ2V4VVJMaW5XaWtpY29kZVdpdGhvdXRMYWJlbCwgcmVnZXhTdWJzdGluV2lraWNvZGVXaXRob3V0TGFiZWwpO1xuXHRcdC8vIE1ha2UgZXh0ZXJuYWwgbGlua3MgaW4gd2lraWNvZGUgd2l0aG91dCBsYWJlbCBpbnRvIGxpbmtzXG5cdFx0aHRtbCA9IGh0bWwucmVwbGFjZShyZWdleFVSTGluV2lraWNvZGVXaXRoTGFiZWwsIHJlZ2V4U3Vic3Rpbldpa2ljb2RlV2l0aExhYmVsKTtcblx0XHQvLyBNYWtlIGV4dGVybmFsIGxpbmtzIGluIHdpa2ljb2RlIHdpdGggbGFiZWwgaW50byBsaW5rc1xuXHRcdGh0bWwgPSBodG1sLnJlcGxhY2UocmVnZXhPdGhlclBhZ2VzLCByZWdleFN1YnN0aW5PdGhlclBhZ2VzKTtcblx0XHQvLyBNYWtlIG90aGVyIHBhZ2VzIGluY2x1ZGVkIGNvZGUgaW50byBsaW5rc1xuXHRcdGh0bWwgPSBodG1sLnJlcGxhY2UocmVnZXhUZW1wbGF0ZSwgcmVnZXhTdWJzdGluVGVtcGxhdGUpO1xuXHRcdGh0bWwgPSBodG1sLnJlcGxhY2UoL2hyZWY9XCJcXC93aWtpXFwvVGVtcGxhdGU6Iy9nLCAnaHJlZj1cIi93aWtpL0hlbHA6Jyk7XG5cdFx0Ly8gTWFrZSB0ZW1wbGF0ZSBjb2RlIGludG8gbGlua3Ncblx0XHRodG1sID0gaHRtbC5yZXBsYWNlKHJlZ2V4V2lraWxpbmsxLCByZWdleFN1YnN0aW5XaWtpbGluazEpO1xuXHRcdGh0bWwgPSBodG1sLnJlcGxhY2UocmVnZXhXaWtpbGluazIsIHJlZ2V4U3Vic3Rpbldpa2lsaW5rMik7XG5cdFx0Ly8gTWFrZSB3aWtpbGluayBjb2RlIGludG8gbGlua3Ncblx0XHRodG1sID0gaHRtbC5yZXBsYWNlKFxuXHRcdFx0UkVHRVhfSU5URVJOQUxfVVJMLFxuXHRcdFx0YCQxJDI8YSBjbGFzcz1cImV4dGVybmFsIGF1dG9saW5rXCIgc3R5bGU9XCJjb2xvcjoke2NvbG9yfVwiIGhyZWY9XCIkM1wiPiQzPC9hPiQyYFxuXHRcdCk7XG5cdFx0Ly8gUGFyc2UgaW5hY3RpdmUgZXh0ZXJuYWwgbGlua3MgKG5vIHdpa2ljb2RlKVxuXHRcdGh0bWwgPSBodG1sLnJlcGxhY2UoXG5cdFx0XHRSRUdFWF9JTVBPUlRfU0NSSVBULFxuXHRcdFx0YCQxJDI8YSBjbGFzcz1cImF1dG9saW5rXCIgc3R5bGU9XCJjb2xvcjoke2NvbG9yfVwiIGhyZWY9XCIvd2lraS8kM1wiPiQzPC9hPiQ0YFxuXHRcdCk7XG5cdFx0Ly8gUGFyc2UgSW1wb3J0U2NyaXB0XG5cdFx0aHRtbCA9IGh0bWwucmVwbGFjZSgvJnNoeTs8JnNoeTsvZywgJyZsdDsnKTtcblx0XHRodG1sID0gaHRtbC5yZXBsYWNlKC8mc2h5Oz4mc2h5Oy9nLCAnJmd0OycpO1xuXHRcdC8vICZhbXA7c2h5OzwmYW1wO3NoeTsgdG8gJmFtcDtsdDsgYW5kICZhbXA7c2h5Oz4mYW1wO3NoeTsgdG8gJmFtcDtndDsgKHJldmVydClcblx0XHRpZiAoaXNBY3RpdmF0ZUhUTUwpIHtcblx0XHRcdGh0bWwgPSBodG1sLnJlcGxhY2UoXG5cdFx0XHRcdC8mbHQ7KHNwYW58YnxpfHN0cm9uZ3xzbWFsbHx0dHxkZWx8c3x1fHN1YnxzdXApJmd0OyguKj8pJmx0O1xcLyhcXDEpJmd0Oy9nLFxuXHRcdFx0XHQnPCQxPiQyPC8kMz4nXG5cdFx0XHQpO1xuXHRcdFx0aHRtbCA9IGh0bWwucmVwbGFjZSgvKFteJ118XiknezN9KC4rPyknezN9KFteJ118JCkvZ20sICckMTxiPiQyPC9iPiQzJyk7XG5cdFx0XHRodG1sID0gaHRtbC5yZXBsYWNlKC8oW14nXXxeKSd7Mn0oLis/KSd7Mn0oW14nXXwkKS9nbSwgJyQxPGk+JDI8L2k+JDMnKTtcblx0XHRcdGNvbnN0IHt3Z0FjdGlvbn0gPSBtdy5jb25maWcuZ2V0KCk7XG5cdFx0XHRpZiAoWydlZGl0JywgJ3N1Ym1pdCcsICdoaXN0b3J5J10uaW5jbHVkZXMod2dBY3Rpb24pIHx8IGlzVGFyZ2V0U3BlY2lhbFBhZ2UoKSkge1xuXHRcdFx0XHRodG1sID0gaHRtbC5yZXBsYWNlKFxuXHRcdFx0XHRcdC88aT4oLio/KTxcXC9pPi9nLFxuXHRcdFx0XHRcdCc8c3BhbiB0aXRsZT1cIml0YWxpY1wiIHN0eWxlPVwiYm9yZGVyOjFweCBzb2xpZCAjYzBjMGMwO3BhZGRpbmc6MnB4XCI+JDE8L3NwYW4+J1xuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXHRcdFx0Ly8gSSdtIGluIGEgY29tbWVudCBmaWVsZCAoaXRhbGljKVxuXHRcdH1cblx0XHRpZiAoaXNEaWZmKCkpIHtcblx0XHRcdGh0bWwgPSBodG1sLnJlcGxhY2UoLzxhIFtePl0rPjxcXC9hPi9nLCAnJyk7IC8vIENsZWFuXG5cdFx0XHRodG1sID0gaHRtbC5yZXBsYWNlKFxuXHRcdFx0XHQvKFteW118XilcXFtcXHMqKDxhIFtePl0rPikoPzpodHRwcz98ZnRwcz8pOlxcL1xcL1tcXHchIyUmKCkrLi86PT9AXFxcXH4tXSsoPFxcL2E+KVxccysoW15cXG5cXF1dKyldL2dtLFxuXHRcdFx0XHQnJDEkMiQ0JDMnXG5cdFx0XHQpO1xuXHRcdFx0aHRtbCA9IGh0bWwucmVwbGFjZShcblx0XHRcdFx0LyhbXltdfF4pXFxbXFxzKig8YSBbXj5dKz4pKCg/Omh0dHBzP3xmdHBzPyk6XFwvXFwvW1xcdyEjJSYoKSsuLzo9P0BcXFxcfi1dKykoPFxcL2E+KVxccypdL2dtLFxuXHRcdFx0XHQnJDEkMiQzJDQnXG5cdFx0XHQpO1xuXHRcdH1cblxuXHRcdGlmIChodG1sICE9PSBvcmlnaW5IdG1sKSB7XG5cdFx0XHRyZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCk6IHZvaWQgPT4ge1xuXHRcdFx0XHRlbGVtZW50LmlubmVySFRNTCA9IGh0bWw7IC8vIFdyaXRlIGl0IGJhY2tcblx0XHRcdH0pO1xuXHRcdH1c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QUVBbEIsS0FBRzBELEtBQUssa0JBQWtCLEVBQUVDLElBQUksU0FBVWpELFVBQWdCO0FBQ3pELFVBQU1FLGlCQUFpQ0gsa0JBQWtCQyxRQUFRO0FBQ2pFYyxtQkFBZVosY0FBYztFQUM5QixDQUFDO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFsiaXNEaWZmIiwgIm13IiwgInV0aWwiLCAiZ2V0UGFyYW1WYWx1ZSIsICJpc1RhcmdldFNwZWNpYWxQYWdlIiwgIndnQ2Fub25pY2FsU3BlY2lhbFBhZ2VOYW1lIiwgImNvbmZpZyIsICJnZXQiLCAiaW5jbHVkZXMiLCAidG9TdHJpbmciLCAiZ2V0VGFyZ2V0RWxlbWVudHMiLCAiJGNvbnRlbnQiLCAiY29sb3IiLCAidGFyZ2V0RWxlbWVudHMiLCAid2dBY3Rpb24iLCAiZmluZCIsICJqb2luIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgInJlcXVpcmUiLCAiaXNJblRhcmdldFNwZWNpYWxQYWdlIiwgIndnQ2Fub25pY2FsTmFtZXNwYWNlIiwgIlJFR0VYX0lOVEVSTkFMX1VSTCIsICJSRUdFWF9JTVBPUlRfU0NSSVBUIiwgIlJFR0VYX1RMIiwgIlJFR0VYX1VSTCIsICJwcm9jZXNzRWxlbWVudCIsICJpc0FjdGl2YXRlSFRNTCIsICJyZWdleFVSTGluV2lraWNvZGVXaXRob3V0TGFiZWwiLCAicmVnZXhTdWJzdGluV2lraWNvZGVXaXRob3V0TGFiZWwiLCAiY29uY2F0IiwgInJlZ2V4VVJMaW5XaWtpY29kZVdpdGhMYWJlbCIsICJyZWdleFN1YnN0aW5XaWtpY29kZVdpdGhMYWJlbCIsICJyZWdleE90aGVyUGFnZXMiLCAicmVnZXhTdWJzdGluT3RoZXJQYWdlcyIsICJyZWdleFRlbXBsYXRlIiwgInJlZ2V4U3Vic3RpblRlbXBsYXRlIiwgInJlZ2V4V2lraWxpbmsxIiwgInJlZ2V4U3Vic3Rpbldpa2lsaW5rMSIsICJyZWdleFdpa2lsaW5rMiIsICJyZWdleFN1YnN0aW5XaWtpbGluazIiLCAiX2l0ZXJhdG9yIiwgIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwgIl9zdGVwIiwgInMiLCAibiIsICJkb25lIiwgImVsZW1lbnQiLCAidmFsdWUiLCAiaW5uZXJIVE1MIiwgIm9yaWdpbkh0bWwiLCAiaHRtbCIsICJyZXBsYWNlIiwgInJlcXVlc3RBbmltYXRpb25GcmFtZSIsICJlcnIiLCAiZSIsICJmIiwgImdldEJvZHkiLCAidGhlbiIsICJhdXRvTGluayIsICJob29rIiwgImFkZCJdCn0K

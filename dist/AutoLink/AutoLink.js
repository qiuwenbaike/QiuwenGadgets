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
      const existingAnchors = [];
      html = html.replace(/<a\b[^>]*>[\s\S]*?<\/a>/gi, (anchor) => {
        existingAnchors.push(anchor);
        return "<!--autolink".concat(existingAnchors.length - 1, "-->");
      });
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
      html = html.replace(/<!--autolink(\d+)-->/g, (_, index) => {
        var _existingAnchors$Numb;
        return (_existingAnchors$Numb = existingAnchors[Number(index)]) !== null && _existingAnchors$Numb !== void 0 ? _existingAnchors$Numb : "";
      });
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0F1dG9MaW5rL21vZHVsZXMvdXRpbC9pc0RpZmYudHMiLCAic3JjL0F1dG9MaW5rL21vZHVsZXMvdXRpbC9pc1RhcmdldFNwZWNpYWxQYWdlLnRzIiwgInNyYy9BdXRvTGluay9tb2R1bGVzL3V0aWwvZ2V0VGFyZ2V0RWxlbWVudHMudHMiLCAic3JjL0F1dG9MaW5rL0F1dG9MaW5rLnRzIiwgInNyYy9BdXRvTGluay9tb2R1bGVzL3V0aWwvaXNJblRhcmdldFNwZWNpYWxQYWdlLnRzIiwgInNyYy9BdXRvTGluay9tb2R1bGVzL2NvbnN0YW50LnRzIiwgInNyYy9BdXRvTGluay9tb2R1bGVzL3Byb2Nlc3NFbGVtZW50LnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBpc0RpZmYgPSAoKSA9PiB7XG5cdHJldHVybiAhIW13LnV0aWwuZ2V0UGFyYW1WYWx1ZSgnZGlmZicpO1xufTtcblxuZXhwb3J0IHtpc0RpZmZ9O1xuIiwgIi8vIFNwZWNpYWwgY3Jvbm8gcGFnZXMgd2hlcmUgdGhpcyBzY3JpcHQgaXMgZW5hYmxlZFxuY29uc3QgaXNUYXJnZXRTcGVjaWFsUGFnZSA9ICgpOiBib29sZWFuID0+IHtcblx0Y29uc3Qge3dnQ2Fub25pY2FsU3BlY2lhbFBhZ2VOYW1lfSA9IG13LmNvbmZpZy5nZXQoKTtcblx0cmV0dXJuIFsnQ29udHJpYnV0aW9ucycsICdMb2cnLCAnTmV3cGFnZXMnLCAnUmVjZW50Y2hhbmdlcycsICdSZWNlbnRjaGFuZ2VzbGlua2VkJywgJ1dhdGNobGlzdCddLmluY2x1ZGVzKFxuXHRcdHdnQ2Fub25pY2FsU3BlY2lhbFBhZ2VOYW1lLnRvU3RyaW5nKClcblx0KTtcbn07XG5cbmV4cG9ydCB7aXNUYXJnZXRTcGVjaWFsUGFnZX07XG4iLCAiaW1wb3J0IHtpc0RpZmZ9IGZyb20gJy4vaXNEaWZmJztcbmltcG9ydCB7aXNUYXJnZXRTcGVjaWFsUGFnZX0gZnJvbSAnLi9pc1RhcmdldFNwZWNpYWxQYWdlJztcblxuaW50ZXJmYWNlIFRhcmdldEVsZW1lbnRzIHtcblx0Y29sb3I6IHN0cmluZztcblx0dGFyZ2V0RWxlbWVudHM6IEhUTUxFbGVtZW50W107XG59XG5cbmNvbnN0IGdldFRhcmdldEVsZW1lbnRzID0gKCRjb250ZW50OiBKUXVlcnk8SFRNTEVsZW1lbnQ+KTogVGFyZ2V0RWxlbWVudHMgPT4ge1xuXHRsZXQgY29sb3I6IHN0cmluZyA9ICcnOyAvLyBsaW5rcyBjb2xvciAoY29sb3VyZWQgbGlua3MpXG5cdGxldCB0YXJnZXRFbGVtZW50czogSFRNTEVsZW1lbnRbXSA9IFtdO1xuXHRjb25zdCB7d2dBY3Rpb259ID0gbXcuY29uZmlnLmdldCgpO1xuXG5cdGlmIChpc0RpZmYoKSkge1xuXHRcdC8vIGluIGRpZmYgcGFnZXNcblx0XHRjb2xvciA9ICdpbmhlcml0JzsgLy8gbm90IGNvbG91cmVkIGxpbmtzXG5cdFx0dGFyZ2V0RWxlbWVudHMgPSBbLi4uJGNvbnRlbnQuZmluZChbJy5kaWZmJywgJy5maXJzdHJldmlzaW9uaGVhZGVyJ10uam9pbignLCcpKV07XG5cdH0gZWxzZSBpZiAoWydlZGl0JywgJ3N1Ym1pdCcsICdoaXN0b3J5J10uaW5jbHVkZXMod2dBY3Rpb24pIHx8IGlzVGFyZ2V0U3BlY2lhbFBhZ2UoKSkge1xuXHRcdC8vIGluIGNvbW1lbnRzXG5cdFx0dGFyZ2V0RWxlbWVudHMgPSBbLi4uJGNvbnRlbnQuZmluZCgnLmNvbW1lbnQnKV07XG5cdH0gZWxzZSB7XG5cdFx0Ly8gaW4gY29kZSBzZWN0aW9uc1xuXHRcdHRhcmdldEVsZW1lbnRzID0gW1xuXHRcdFx0Li4uJGNvbnRlbnQuZmluZChbJ3NvdXJjZScsICcuY3NzJywgJy5zb3VyY2UtY3NzJywgJy5qYXZhc2NyaXB0JywgJy5zb3VyY2UtamF2YXNjcmlwdCddLmpvaW4oJywnKSksXG5cdFx0XTtcblx0fVxuXG5cdHJldHVybiB7XG5cdFx0Y29sb3IsXG5cdFx0dGFyZ2V0RWxlbWVudHMsXG5cdH07XG59O1xuXG5leHBvcnQge3R5cGUgVGFyZ2V0RWxlbWVudHMsIGdldFRhcmdldEVsZW1lbnRzfTtcbiIsICJpbXBvcnQge3R5cGUgVGFyZ2V0RWxlbWVudHMsIGdldFRhcmdldEVsZW1lbnRzfSBmcm9tICcuL21vZHVsZXMvdXRpbC9nZXRUYXJnZXRFbGVtZW50cyc7XG5pbXBvcnQge2dldEJvZHl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5pbXBvcnQge2lzSW5UYXJnZXRTcGVjaWFsUGFnZX0gZnJvbSAnLi9tb2R1bGVzL3V0aWwvaXNJblRhcmdldFNwZWNpYWxQYWdlJztcbmltcG9ydCB7cHJvY2Vzc0VsZW1lbnR9IGZyb20gJy4vbW9kdWxlcy9wcm9jZXNzRWxlbWVudCc7XG5cbnZvaWQgZ2V0Qm9keSgpLnRoZW4oZnVuY3Rpb24gYXV0b0xpbmsoKTogdm9pZCB7XG5cdGlmICghaXNJblRhcmdldFNwZWNpYWxQYWdlKCkpIHtcblx0XHRyZXR1cm47IC8vIERpc2FibGVkIGluIHRoZSBvdGhlciBzcGVjaWFsIHBhZ2VzXG5cdH1cblxuXHRtdy5ob29rKCd3aWtpcGFnZS5jb250ZW50JykuYWRkKGZ1bmN0aW9uICgkY29udGVudCk6IHZvaWQge1xuXHRcdGNvbnN0IHRhcmdldEVsZW1lbnRzOiBUYXJnZXRFbGVtZW50cyA9IGdldFRhcmdldEVsZW1lbnRzKCRjb250ZW50KTtcblx0XHRwcm9jZXNzRWxlbWVudCh0YXJnZXRFbGVtZW50cyk7XG5cdH0pO1xufSk7XG4iLCAiaW1wb3J0IHtpc1RhcmdldFNwZWNpYWxQYWdlfSBmcm9tICcuL2lzVGFyZ2V0U3BlY2lhbFBhZ2UnO1xuXG4vLyBTcGVjaWFsIGNyb25vIHBhZ2VzIHdoZXJlIHRoaXMgc2NyaXB0IGlzIGVuYWJsZWRcbmNvbnN0IGlzSW5UYXJnZXRTcGVjaWFsUGFnZSA9ICgpOiBib29sZWFuID0+IHtcblx0Y29uc3Qge3dnQ2Fub25pY2FsTmFtZXNwYWNlfSA9IG13LmNvbmZpZy5nZXQoKTtcblx0cmV0dXJuIHdnQ2Fub25pY2FsTmFtZXNwYWNlID09PSAnU3BlY2lhbCcgJiYgaXNUYXJnZXRTcGVjaWFsUGFnZSgpO1xufTtcblxuZXhwb3J0IHtpc0luVGFyZ2V0U3BlY2lhbFBhZ2V9O1xuIiwgImNvbnN0IFJFR0VYX0lOVEVSTkFMX1VSTDogUmVnRXhwID1cblx0LyhbXj1dKShbXFxzXCInXSkoKD86XFwvP3dcXC9pbmRleFxcLnBocFxcP3xcXC8/aW5kZXhcXC5waHBcXD98XFwvP3dpa2lcXC8pW1xcdyEjJSYoKSsuLzo9P0BcXFxcfi1dKylcXDIvZztcbi8vIEV4dGVybmFsIGxpbmtzIChubyB3aWtpY29kZSlcbmNvbnN0IFJFR0VYX0lNUE9SVF9TQ1JJUFQ6IFJlZ0V4cCA9XG5cdC8oW0lpXW1wb3J0W1NzXWNyaXB0KD86PHNwYW4gY2xhc3M9XCJicjBcIj4pP1xcKCg/OjxcXC9zcGFuPjxzcGFuIGNsYXNzPVwic3QwXCI+KT8pKCd8XCIpKFteXFxuPD5bXFxde3x9XSs/KShcXDIoPzo8XFwvc3Bhbj48c3BhbiBjbGFzcz1cImJyMFwiPik/XFwpKD86PFxcL3NwYW4+KT8pL2c7XG4vLyBJbXBvcnRTY3JpcHRcbmNvbnN0IFJFR0VYX1RMOiBSZWdFeHAgPSAvKFtee117ezJ9XFxzKltUdF1sXFx8KShbXlxcbjo8PltcXF17fH1dKykvZztcbi8vIEZvciB7e3RsfX1cbmNvbnN0IFJFR0VYX1VSTDogUmVnRXhwID1cblx0LygoPzpbXlwiW118W149XVwiKSg/OjxzcGFuIGNsYXNzPVwiZGlmZmNoYW5nZVwiPik/KSgoPzpodHRwcz98ZnRwcz8pOlxcL1xcL1tcXHchIyUmKCkrLi86PT9AXFxcXH4tXSs/KSg/PSg/OjxcXC9zcGFuPik/W1xcc1wiJylcXF18fV0pL2c7XG5cbmV4cG9ydCB7UkVHRVhfSU5URVJOQUxfVVJMLCBSRUdFWF9JTVBPUlRfU0NSSVBULCBSRUdFWF9UTCwgUkVHRVhfVVJMfTtcbiIsICIvKipcbiAqIEF1dG9saW5rIFtbd2lraWxpbmtzXV0sIFtleHRlcm5hbCBsaW5rc10gYW5kIHt7dGVtcGxhdGVzfX1cbiAqL1xuaW1wb3J0IHtSRUdFWF9JTVBPUlRfU0NSSVBULCBSRUdFWF9JTlRFUk5BTF9VUkwsIFJFR0VYX1RMLCBSRUdFWF9VUkx9IGZyb20gJy4vY29uc3RhbnQnO1xuaW1wb3J0IHR5cGUge1RhcmdldEVsZW1lbnRzfSBmcm9tICcuL3V0aWwvZ2V0VGFyZ2V0RWxlbWVudHMnO1xuaW1wb3J0IHtpc0RpZmZ9IGZyb20gJy4vdXRpbC9pc0RpZmYnO1xuaW1wb3J0IHtpc1RhcmdldFNwZWNpYWxQYWdlfSBmcm9tICcuL3V0aWwvaXNUYXJnZXRTcGVjaWFsUGFnZSc7XG5cbmNvbnN0IHByb2Nlc3NFbGVtZW50ID0gKHtjb2xvciwgdGFyZ2V0RWxlbWVudHN9OiBUYXJnZXRFbGVtZW50cyk6IHZvaWQgPT4ge1xuXHRsZXQgaXNBY3RpdmF0ZUhUTUw6IGJvb2xlYW4gPSBmYWxzZTtcblx0LyogUmVnZXggKGRlZmF1bHQgZm9yIGRpZmZzKSAqL1xuXHQvLyBSZWdleCBmb3IgZGlmZnNcblx0bGV0IHJlZ2V4VVJMaW5XaWtpY29kZVdpdGhvdXRMYWJlbDogUmVnRXhwID1cblx0XHQvKCg/OlteW118XilcXFtcXHMqKD86PFxcL3NwYW4+KT9cXHMqKD86PHNwYW4gY2xhc3M9XCJkaWZmY2hhbmdlXCI+KT9cXHMqKSgoPzpodHRwcz98ZnRwcz8pOlxcL1xcL1tcXHchIyUmKCkrLi86PT9AXFxcXH4tXSspKCg/OjxcXC9zcGFuPik/KD86PHNwYW4gY2xhc3M9XCJkaWZmY2hhbmdlXCI+KT8pKFtcXHchIyUmKCkrLi86PT9AXFxcXH4tXSopKCg/OjxcXC9zcGFuPik/KD86PHNwYW4gY2xhc3M9XCJkaWZmY2hhbmdlXCI+KT8pKFtcXHchIyUmKCkrLi86PT9AXFxcXH4tXSopKFteXFxuXFxdXSpdKS9nbTtcblx0Ly8gRXh0ZXJuYWwgbGlua3MgKG5vIHdpa2ljb2RlKVxuXHRsZXQgcmVnZXhTdWJzdGluV2lraWNvZGVXaXRob3V0TGFiZWw6IHN0cmluZyA9IGAkMTxhIGNsYXNzPVwiZXh0ZXJuYWwgYXV0b2xpbmtcIiBzdHlsZT1cImNvbG9yOiR7Y29sb3J9XCIgaHJlZj1cIiQyJDQkNlwiPiQyPC9hPiQzPGEgY2xhc3M9XCJleHRlcm5hbCBhdXRvbGlua1wiIHN0eWxlPVwiY29sb3I6JHtjb2xvcn1cIiBocmVmPVwiJDIkNCQ2XCI+JDQ8L2E+JDU8YSBjbGFzcz1cImV4dGVybmFsIGF1dG9saW5rXCIgc3R5bGU9XCJjb2xvcjoke2NvbG9yfVwiIGhyZWY9XCIkMiQ0JDZcIj4kNjwvYT4kN2A7XG5cdC8vIEV4dGVybmFsIGxpbmtzIGluIGRpZmYgcGFnZXMsIHdpa2ljb2RlIHdpdGhvdXQgbGFiZWxcblx0bGV0IHJlZ2V4VVJMaW5XaWtpY29kZVdpdGhMYWJlbDogUmVnRXhwID0gcmVnZXhVUkxpbldpa2ljb2RlV2l0aG91dExhYmVsO1xuXHQvLyBFeHRlcm5hbCBsaW5rcyBpbiBkaWZmIHBhZ2VzLCB3aWtpY29kZSB3aXRoIGxhYmVsXG5cdGxldCByZWdleFN1YnN0aW5XaWtpY29kZVdpdGhMYWJlbDogc3RyaW5nID0gcmVnZXhTdWJzdGluV2lraWNvZGVXaXRob3V0TGFiZWw7XG5cdC8vIE90aGVyIHBhZ2VzIGluY2x1ZGVkIGluIGRpZmYgcGFnZXNcblx0bGV0IHJlZ2V4T3RoZXJQYWdlczogUmVnRXhwID1cblx0XHQvKCg/Oltee118Xil7ezJ9XFxzKig/OjxcXC9zcGFuPik/XFxzKig/OjxzcGFuIGNsYXNzPVwiZGlmZmNoYW5nZVwiPik/XFxzKig/Oig/OltTc11bVXVdW0JiXVtTc11bVHRdfFtNbV1bU3NdW0dnXXxbTW1dW1NzXVtHZ11bTm5dW1d3XSlcXHMqOik/XFxzKig/OjxcXC9zcGFuPik/XFxzKig/OjxzcGFuIGNsYXNzPVwiZGlmZmNoYW5nZVwiPik/XFxzKikoKD86W1NzXXBlY2lhbGU/fFtRcV0oPzppdXdlbnxbV3ddKXxbV3ddW1BwXXxbVHRdZW1wbGF0ZXxbVXVdc2VyKT9cXHMqKD86ID9bVHRdYWxrKT9cXHMqOlteXFxuOjw+W1xcXXt8fV0rKSgoPzo8XFwvc3Bhbj4pPyg/OjxzcGFuIGNsYXNzPVwiZGlmZmNoYW5nZVwiPik/KShbXlxcbjo8PltcXF17fH1dKikoKD86PFxcL3NwYW4+KT8oPzo8c3BhbiBjbGFzcz1cImRpZmZjaGFuZ2VcIj4pPykoW15cXG46PD5bXFxde3x9XSopKFxcfHx9ezJ9KS9nbTtcblx0bGV0IHJlZ2V4U3Vic3Rpbk90aGVyUGFnZXM6IHN0cmluZyA9IGAkMTxhIGNsYXNzPVwiYXV0b2xpbmtcIiBzdHlsZT1cImNvbG9yOiR7Y29sb3J9XCIgaHJlZj1cIi93aWtpLyQyJDQkNlwiPiQyPC9hPiQzPGEgY2xhc3M9XCJhdXRvbGlua1wiIHN0eWxlPVwiY29sb3I6JHtjb2xvcn1cIiBocmVmPVwiL3dpa2kvJDIkNCQ2XCI+JDQ8L2E+JDU8YSBjbGFzcz1cImF1dG9saW5rXCIgc3R5bGU9XCJjb2xvcjoke2NvbG9yfVwiIGhyZWY9XCIvd2lraS8kMiQ0JDZcIj4kNjwvYT4kN2A7XG5cdC8vIFRlbXBsYXRlcyBpbiBkaWZmIHBhZ2VzXG5cdGxldCByZWdleFRlbXBsYXRlOiBSZWdFeHAgPVxuXHRcdC8oKD86W157XXxeKXt7Mn1cXHMqKD86PFxcL3NwYW4+KT9cXHMqKD86PHNwYW4gY2xhc3M9XCJkaWZmY2hhbmdlXCI+KT9cXHMqKD86KD86W1NzXVtVdV1bQmJdW1NzXVtUdF18W01tXVtTc11bR2ddfFtNbV1bU3NdW0dnXVtObl1bV3ddKVxccyo6KT9cXHMqKD86PFxcL3NwYW4+KT9cXHMqKD86PHNwYW4gY2xhc3M9XCJkaWZmY2hhbmdlXCI+KT8pKD8hW0lpXVtObl1bVHRdXFxzKjopKFteXFxuOjw+W1xcXXt8fV0rKSgoPzo8XFwvc3Bhbj4pPyg/OjxzcGFuIGNsYXNzPVwiZGlmZmNoYW5nZVwiPik/KShbXlxcbjo8PltcXF17fH1dKikoKD86PFxcL3NwYW4+KT8oPzo8c3BhbiBjbGFzcz1cImRpZmZjaGFuZ2VcIj4pPykoW15cXG46PD5bXFxde3x9XSopKFxcfHx9ezJ9fDopL2dtO1xuXHRsZXQgcmVnZXhTdWJzdGluVGVtcGxhdGU6IHN0cmluZyA9IGAkMTxhIGNsYXNzPVwiYXV0b2xpbmtcIiBzdHlsZT1cImNvbG9yOiR7Y29sb3J9XCIgaHJlZj1cIi93aWtpL1RlbXBsYXRlOiQyJDQkNlwiPiQyPC9hPiQzPGEgY2xhc3M9XCJhdXRvbGlua1wiIHN0eWxlPVwiY29sb3I6JHtjb2xvcn1cIiBocmVmPVwiL3dpa2kvVGVtcGxhdGU6JDIkNCQ2XCI+JDQ8L2E+JDU8YSBjbGFzcz1cImF1dG9saW5rXCIgc3R5bGU9XCJjb2xvcjoke2NvbG9yfVwiIGhyZWY9XCIvd2lraS9UZW1wbGF0ZTokMiQ0JDZcIj4kNjwvYT4kN2A7XG5cdC8vIFdpa2lsaW5rcyBpbiBkaWZmIHBhZ2VzXG5cdGxldCByZWdleFdpa2lsaW5rMTogUmVnRXhwID1cblx0XHQvKFxcW3syfVxccyooPzo8XFwvc3Bhbj4pP1xccyooPzo8c3BhbiBjbGFzcz1cImRpZmZjaGFuZ2VcIj4pP1xccyopKFteXFxuPD5bXFxde3x9XSspKCg/OjxcXC9zcGFuPik/KD86PHNwYW4gY2xhc3M9XCJkaWZmY2hhbmdlXCI+KT8pKFteXFxuPD5bXFxde3x9XSopKCg/OjxcXC9zcGFuPik/KD86PHNwYW4gY2xhc3M9XCJkaWZmY2hhbmdlXCI+KT8pKFteXFxuPD5bXFxde3x9XSopKCg/OlteXFxuXFxdXXxdW15cXF1dKSpdezJ9KS9nO1xuXHRsZXQgcmVnZXhTdWJzdGluV2lraWxpbmsxOiBzdHJpbmcgPSBgJDE8YSBjbGFzcz1cImF1dG9saW5rXCIgc3R5bGU9XCJjb2xvcjoke2NvbG9yfVwiIGhyZWY9XCIvd2lraS8kMiQ0JDZcIj4kMjwvYT4kMzxhIGNsYXNzPVwiYXV0b2xpbmtcIiBzdHlsZT1cImNvbG9yOiR7Y29sb3J9XCIgaHJlZj1cIi93aWtpLyQyJDQkNlwiPiQ0PC9hPiQ1PGEgY2xhc3M9XCJhdXRvbGlua1wiIHN0eWxlPVwiY29sb3I6JHtjb2xvcn1cIiBocmVmPVwiL3dpa2kvJDIkNCQ2XCI+JDY8L2E+JDdgO1xuXHRsZXQgcmVnZXhXaWtpbGluazI6IFJlZ0V4cCA9IHJlZ2V4V2lraWxpbmsxO1xuXHRsZXQgcmVnZXhTdWJzdGluV2lraWxpbmsyOiBzdHJpbmcgPSByZWdleFN1YnN0aW5XaWtpbGluazE7XG5cdC8vIFJlZ2V4IGZvciBjb21tZW50cyBvciBjb2RlIHNlY3Rpb25zXG5cdGlmICghaXNEaWZmKCkpIHtcblx0XHQvLyBBY3RpdmF0ZSBzb21lIEhUTUwgKGlubGluZSkgYW5kIHdpa2ljb2RlIGZvciBib2xkIGFuZCBpdGFsaWNcblx0XHRpc0FjdGl2YXRlSFRNTCA9IHRydWU7XG5cdFx0Ly8gRXh0ZXJuYWwgbGlua3MgaW4gY29tbWVudHMgb3IgY29kZSBzZWN0aW9ucywgd2lraWNvZGUgd2l0aG91dCBsYWJlbFxuXHRcdHJlZ2V4VVJMaW5XaWtpY29kZVdpdGhvdXRMYWJlbCA9IC8oW15bXXxeKVxcW1xccyooKD86aHR0cHM/fGZ0cHM/KTpcXC9cXC9bXFx3ISMlJigpKy4vOj0/QFxcXFx+LV0rKVxccypdL2dtO1xuXHRcdHJlZ2V4U3Vic3Rpbldpa2ljb2RlV2l0aG91dExhYmVsID0gYCQxPGEgY2xhc3M9XCJleHRlcm5hbCBhdXRvbGlua1wiIHN0eWxlPVwiY29sb3I6JHtjb2xvcn1cIiBocmVmPVwiJDJcIj4kMjwvYT5gO1xuXHRcdC8vIEV4dGVybmFsIGxpbmtzIGluIGNvbW1lbnRzIG9yIGNvZGUgc2VjdGlvbnMsIHdpa2ljb2RlIHdpdGggbGFiZWwgKHRoZSBVUkwgd2lsbCBub3QgYmUgdmlzaWJsZSlcblx0XHRyZWdleFVSTGluV2lraWNvZGVXaXRoTGFiZWwgPSAvKFteW118XilcXFtcXHMqKCg/Omh0dHBzP3xmdHBzPyk6XFwvXFwvW1xcdyEjJSYoKSsuLzo9P0BcXFxcfi1dKylcXHMrKFteXFxuXSs/KVxccypdL2dtO1xuXHRcdHJlZ2V4U3Vic3Rpbldpa2ljb2RlV2l0aExhYmVsID0gYCQxPGEgY2xhc3M9XCJleHRlcm5hbCBhdXRvbGlua1wiIHN0eWxlPVwiY29sb3I6JHtjb2xvcn1cIiBocmVmPVwiJDJcIj4kMzwvYT5gO1xuXHRcdC8vIE90aGVyIHBhZ2VzIGluY2x1ZGVkIGluIGNvbW1lbnRzIG9yIGNvZGUgc2VjdGlvbnNcblx0XHRyZWdleE90aGVyUGFnZXMgPVxuXHRcdFx0LygoPzpbXntdfF4pe3syfVxccyooPzooPzpbU3NdW1V1XVtCYl1bU3NdW1R0XXxbTW1dW1NzXVtHZ118W01tXVtTc11bR2ddW05uXVtXd10pXFxzKjopP1xccyopKCg/OltTc11wZWNpYWx8W1FxXSg/Oml1d2VufFEpfFtXd11bUHBdfFtUdF1lbXBsYXRlfFtVdV1zZXIpP1xccyooPzogP1tUdF1hbGspP1xccyo6W15cXG46PD5bXFxde3x9XSspKFxcfHx9ezJ9KS9nbTtcblx0XHRyZWdleFN1YnN0aW5PdGhlclBhZ2VzID0gYCQxPGEgY2xhc3M9XCJhdXRvbGlua1wiIHN0eWxlPVwiY29sb3I6JHtjb2xvcn1cIiBocmVmPVwiL3dpa2kvJDJcIj4kMjwvYT4kM2A7XG5cdFx0Ly8gVGVtcGxhdGVzIGluIGNvbW1lbnRzIG9yIGNvZGUgc2VjdGlvbnNcblx0XHRyZWdleFRlbXBsYXRlID1cblx0XHRcdC8oKD86W157XXxeKXt7Mn1cXHMqKD86KD86W1NzXVtVdV1bQmJdW1NzXVtUdF18W01tXVtTc11bR2ddfFtNbV1bU3NdW0dnXVtObl1bV3ddKVxccyo6KT9cXHMqKSg/IVtJaV1bTm5dW1R0XVxccyo6KShbXlxcbjo8PltcXF17fH1dKykoXFx8fH17Mn18OikvZ207XG5cdFx0cmVnZXhTdWJzdGluVGVtcGxhdGUgPSBgJDE8YSBjbGFzcz1cImF1dG9saW5rXCIgc3R5bGU9XCJjb2xvcjoke2NvbG9yfVwiIGhyZWY9XCIvd2lraS9UZW1wbGF0ZTokMlwiPiQyPC9hPiQzYDtcblx0XHQvLyBXaWtpbGlua3MgaW4gY29kZSBzZWN0aW9ucywgd2l0aCBsYWJlbFxuXHRcdHJlZ2V4V2lraWxpbmsxID0gL1xcW3syfVxccyooW15cXG48PltcXF17fH1dKz8pXFxzKlxcfFxccyooLis/KVxccypdezJ9L2c7XG5cdFx0cmVnZXhTdWJzdGluV2lraWxpbmsxID0gYDxhIGNsYXNzPVwiYXV0b2xpbmtcIiBzdHlsZT1cImNvbG9yOiR7Y29sb3J9XCIgaHJlZj1cIi93aWtpLyQxXCI+JDI8L2E+YDtcblx0XHQvLyBXaWtpbGlua3MgaW4gY29kZSBzZWN0aW9ucywgd2l0aG91dCBsYWJlbFxuXHRcdHJlZ2V4V2lraWxpbmsyID0gL1xcW3syfVxccyooW15cXG48PltcXF17fH1dKz8pXFxzKlxcfD9cXHMqXXsyfS9nO1xuXHRcdHJlZ2V4U3Vic3Rpbldpa2lsaW5rMiA9IGA8YSBjbGFzcz1cImF1dG9saW5rXCIgc3R5bGU9XCJjb2xvcjoke2NvbG9yfVwiIGhyZWY9XCIvd2lraS8kMVwiPiQxPC9hPmA7XG5cdH1cblxuXHRmb3IgKGNvbnN0IGVsZW1lbnQgb2YgdGFyZ2V0RWxlbWVudHMpIHtcblx0XHRjb25zdCB7aW5uZXJIVE1MOiBvcmlnaW5IdG1sfSA9IGVsZW1lbnQ7XG5cdFx0bGV0IGh0bWw6IHN0cmluZyA9IG9yaWdpbkh0bWw7XG5cblx0XHQvLyBFeHRyYWN0IGV4aXN0aW5nIDxhPiB0YWdzIChlLmcuIGF1dG9jb21tZW50IGxpbmtzKSBhcyBwbGFjZWhvbGRlcnMgYmVmb3JlIHBhcnNpbmdcblx0XHQvLyB3aWtpY29kZS4gVGhlaXIgaHJlZi90aXRsZSBhdHRyaWJ1dGVzIG9yIHRleHQgbWF5IGNvbnRhaW4gdGVtcGxhdGVzICh7ey4uLn19KSxcblx0XHQvLyBhbmQgcmUtcGFyc2luZyB0aGVtIHdvdWxkIGdlbmVyYXRlIG5lc3RlZCA8YT4gdGFncywgYnJlYWtpbmcgdGhlIHN1bW1hcnlcblx0XHRjb25zdCBleGlzdGluZ0FuY2hvcnM6IHN0cmluZ1tdID0gW107XG5cdFx0aHRtbCA9IGh0bWwucmVwbGFjZSgvPGFcXGJbXj5dKj5bXFxzXFxTXSo/PFxcL2E+L2dpLCAoYW5jaG9yOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuXHRcdFx0ZXhpc3RpbmdBbmNob3JzLnB1c2goYW5jaG9yKTtcblx0XHRcdHJldHVybiBgPCEtLWF1dG9saW5rJHtleGlzdGluZ0FuY2hvcnMubGVuZ3RoIC0gMX0tLT5gO1xuXHRcdH0pO1xuXG5cdFx0aHRtbCA9IGh0bWwucmVwbGFjZSgvJmx0Oy9nLCAnJnNoeTs8JnNoeTsnKTtcblx0XHRodG1sID0gaHRtbC5yZXBsYWNlKC8mZ3Q7L2csICcmc2h5Oz4mc2h5OycpO1xuXHRcdC8vICZhbXA7bHQ7IHRvICZhbXA7c2h5OzwmYW1wO3NoeTsgYW5kICZhbXA7Z3Q7IHRvICZhbXA7c2h5Oz4mYW1wO3NoeTsgKCZhbXA7c2h5OyBpcyBhIG1hcmtlcilcblx0XHRodG1sID0gaHRtbC5yZXBsYWNlKC8mYW1wOy9nLCAnJicpO1xuXHRcdC8vICZhbXA7YW1wOyB0byAmXG5cdFx0LyogLS0tICovXG5cdFx0aHRtbCA9IGh0bWwucmVwbGFjZShSRUdFWF9UTCwgYCQxPGEgY2xhc3M9XCJhdXRvbGlua1wiIHN0eWxlPVwiY29sb3I6JHtjb2xvcn1cIiBocmVmPVwiL3dpa2kvVGVtcGxhdGU6JDJcIj4kMjwvYT5gKTtcblx0XHQvLyBGb3Ige3t0bH19OiBtYWtlIGhpcyBhcmd1bWVudCBpbnRvIGxpbmtcblx0XHRodG1sID0gaHRtbC5yZXBsYWNlKFJFR0VYX1VSTCwgYCQxPGEgY2xhc3M9XCJleHRlcm5hbCBhdXRvbGlua1wiIHN0eWxlPVwiY29sb3I6JHtjb2xvcn1cIiBocmVmPVwiJDJcIj4kMjwvYT5gKTtcblx0XHQvLyBQYXJzZSBpbmFjdGl2ZSBleHRlcm5hbCBsaW5rcyAobm8gd2lraWNvZGUpXG5cdFx0aHRtbCA9IGh0bWwucmVwbGFjZShyZWdleFVSTGluV2lraWNvZGVXaXRob3V0TGFiZWwsIHJlZ2V4U3Vic3Rpbldpa2ljb2RlV2l0aG91dExhYmVsKTtcblx0XHQvLyBNYWtlIGV4dGVybmFsIGxpbmtzIGluIHdpa2ljb2RlIHdpdGhvdXQgbGFiZWwgaW50byBsaW5rc1xuXHRcdGh0bWwgPSBodG1sLnJlcGxhY2UocmVnZXhVUkxpbldpa2ljb2RlV2l0aExhYmVsLCByZWdleFN1YnN0aW5XaWtpY29kZVdpdGhMYWJlbCk7XG5cdFx0Ly8gTWFrZSBleHRlcm5hbCBsaW5rcyBpbiB3aWtpY29kZSB3aXRoIGxhYmVsIGludG8gbGlua3Ncblx0XHRodG1sID0gaHRtbC5yZXBsYWNlKHJlZ2V4T3RoZXJQYWdlcywgcmVnZXhTdWJzdGluT3RoZXJQYWdlcyk7XG5cdFx0Ly8gTWFrZSBvdGhlciBwYWdlcyBpbmNsdWRlZCBjb2RlIGludG8gbGlua3Ncblx0XHRodG1sID0gaHRtbC5yZXBsYWNlKHJlZ2V4VGVtcGxhdGUsIHJlZ2V4U3Vic3RpblRlbXBsYXRlKTtcblx0XHRodG1sID0gaHRtbC5yZXBsYWNlKC9ocmVmPVwiXFwvd2lraVxcL1RlbXBsYXRlOiMvZywgJ2hyZWY9XCIvd2lraS9IZWxwOicpO1xuXHRcdC8vIE1ha2UgdGVtcGxhdGUgY29kZSBpbnRvIGxpbmtzXG5cdFx0aHRtbCA9IGh0bWwucmVwbGFjZShyZWdleFdpa2lsaW5rMSwgcmVnZXhTdWJzdGluV2lraWxpbmsxKTtcblx0XHRodG1sID0gaHRtbC5yZXBsYWNlKHJlZ2V4V2lraWxpbmsyLCByZWdleFN1YnN0aW5XaWtpbGluazIpO1xuXHRcdC8vIE1ha2Ugd2lraWxpbmsgY29kZSBpbnRvIGxpbmtzXG5cdFx0aHRtbCA9IGh0bWwucmVwbGFjZShcblx0XHRcdFJFR0VYX0lOVEVSTkFMX1VSTCxcblx0XHRcdGAkMSQyPGEgY2xhc3M9XCJleHRlcm5hbCBhdXRvbGlua1wiIHN0eWxlPVwiY29sb3I6JHtjb2xvcn1cIiBocmVmPVwiJDNcIj4kMzwvYT4kMmBcblx0XHQpO1xuXHRcdC8vIFBhcnNlIGluYWN0aXZlIGV4dGVybmFsIGxpbmtzIChubyB3aWtpY29kZSlcblx0XHRodG1sID0gaHRtbC5yZXBsYWNlKFxuXHRcdFx0UkVHRVhfSU1QT1JUX1NDUklQVCxcblx0XHRcdGAkMSQyPGEgY2xhc3M9XCJhdXRvbGlua1wiIHN0eWxlPVwiY29sb3I6JHtjb2xvcn1cIiBocmVmPVwiL3dpa2kvJDNcIj4kMzwvYT4kNGBcblx0XHQpO1xuXHRcdC8vIFBhcnNlIEltcG9ydFNjcmlwdFxuXHRcdGh0bWwgPSBodG1sLnJlcGxhY2UoXG5cdFx0XHQvPCEtLWF1dG9saW5rKFxcZCspLS0+L2csXG5cdFx0XHQoXywgaW5kZXg6IHN0cmluZyk6IHN0cmluZyA9PiBleGlzdGluZ0FuY2hvcnNbTnVtYmVyKGluZGV4KV0gPz8gJydcblx0XHQpO1xuXHRcdC8vIFJlc3RvcmUgdGhlIHByb3RlY3RlZCA8YT4gdGFnc1xuXHRcdGh0bWwgPSBodG1sLnJlcGxhY2UoLyZzaHk7PCZzaHk7L2csICcmbHQ7Jyk7XG5cdFx0aHRtbCA9IGh0bWwucmVwbGFjZSgvJnNoeTs+JnNoeTsvZywgJyZndDsnKTtcblx0XHQvLyAmYW1wO3NoeTs8JmFtcDtzaHk7IHRvICZhbXA7bHQ7IGFuZCAmYW1wO3NoeTs+JmFtcDtzaHk7IHRvICZhbXA7Z3Q7IChyZXZlcnQpXG5cdFx0aWYgKGlzQWN0aXZhdGVIVE1MKSB7XG5cdFx0XHRodG1sID0gaHRtbC5yZXBsYWNlKFxuXHRcdFx0XHQvJmx0OyhzcGFufGJ8aXxzdHJvbmd8c21hbGx8dHR8ZGVsfHN8dXxzdWJ8c3VwKSZndDsoLio/KSZsdDtcXC8oXFwxKSZndDsvZyxcblx0XHRcdFx0JzwkMT4kMjwvJDM+J1xuXHRcdFx0KTtcblx0XHRcdGh0bWwgPSBodG1sLnJlcGxhY2UoLyhbXiddfF4pJ3szfSguKz8pJ3szfShbXiddfCQpL2dtLCAnJDE8Yj4kMjwvYj4kMycpO1xuXHRcdFx0aHRtbCA9IGh0bWwucmVwbGFjZSgvKFteJ118XiknezJ9KC4rPyknezJ9KFteJ118JCkvZ20sICckMTxpPiQyPC9pPiQzJyk7XG5cdFx0XHRjb25zdCB7d2dBY3Rpb259ID0gbXcuY29uZmlnLmdldCgpO1xuXHRcdFx0aWYgKFsnZWRpdCcsICdzdWJtaXQnLCAnaGlzdG9yeSddLmluY2x1ZGVzKHdnQWN0aW9uKSB8fCBpc1RhcmdldFNwZWNpYWxQYWdlKCkpIHtcblx0XHRcdFx0aHRtbCA9IGh0bWwucmVwbGFjZShcblx0XHRcdFx0XHQvPGk+KC4qPyk8XFwvaT4vZyxcblx0XHRcdFx0XHQnPHNwYW4gdGl0bGU9XCJpdGFsaWNcIiBzdHlsZT1cImJvcmRlcjoxcHggc29saWQgI2MwYzBjMDtwYWRkaW5nOjJweFwiPiQxPC9zcGFuPidcblx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHRcdC8vIEknbSBpbiBhIGNvbW1lbnQgZmllbGQgKGl0YWxpYylcblx0XHR9XG5cdFx0aWYgKGlzRGlmZigpKSB7XG5cdFx0XHRodG1sID0gaHRtbC5yZXBsYWNlKC88YSBbXj5dKz48XFwvYT4vZywgJycpOyAvLyBDbGVhblxuXHRcdFx0aHRtbCA9IGh0bWwucmVwbGFjZShcblx0XHRcdFx0LyhbXltdfF4pXFxbXFxzKig8YSBbXj5dKz4pKD86aHR0cHM/fGZ0cHM/KTpcXC9cXC9bXFx3ISMlJigpKy4vOj0/QFxcXFx+LV0rKDxcXC9hPilcXHMrKFteXFxuXFxdXSspXS9nbSxcblx0XHRcdFx0JyQxJDIkNCQzJ1xuXHRcdFx0KTtcblx0XHRcdGh0bWwgPSBodG1sLnJlcGxhY2UoXG5cdFx0XHRcdC8oW15bXXxeKVxcW1xccyooPGEgW14+XSs+KSgoPzpodHRwcz98ZnRwcz8pOlxcL1xcL1tcXHchIyUmKCkrLi86PT9AXFxcXH4tXSspKDxcXC9hPilcXHMqXS9nbSxcblx0XHRcdFx0JyQxJDIkMyQ0J1xuXHRcdFx0KTtcblx0XHR9XG5cblx0XHRpZiAoaHRtbCAhPT0gb3JpZ2luSHRtbCkge1xuXHRcdFx0cmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpOiB2b2lkID0+IHtcblx0XHRcdFx0ZWxlbWVudC5pbm5lckhUTUwgPSBodG1sOyAvLyBXcml0ZSBpdCBiYWNrXG5cdFx0XHR9KTtcblx0XHR9XG5cdH1cbn07XG5cbmV4cG9ydCB7cHJvY2Vzc0VsZW1lbnR9O1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFNQSxTQUFTQSxNQUFNO0FBQ3BCLFNBQU8sQ0FBQyxDQUFDQyxHQUFHQyxLQUFLQyxjQUFjLE1BQU07QUFDdEM7O0FDREEsSUFBTUMsc0JBQXNC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QyxTQUFRLEVBQUVDLEtBQUssU0FBU0MsV0FBaUI7QUFDN0MsTUFBSSxDQUFDL0Msc0JBQXNCLEdBQUc7QUFDN0I7RUFDRDtBQUVBbEIsS0FBR2tFLEtBQUssa0JBQWtCLEVBQUVDLElBQUksU0FBVXpELFVBQWdCO0FBQ3pELFVBQU1FLGlCQUFpQ0gsa0JBQWtCQyxRQUFRO0FBQ2pFYyxtQkFBZVosY0FBYztFQUM5QixDQUFDO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFsiaXNEaWZmIiwgIm13IiwgInV0aWwiLCAiZ2V0UGFyYW1WYWx1ZSIsICJpc1RhcmdldFNwZWNpYWxQYWdlIiwgIndnQ2Fub25pY2FsU3BlY2lhbFBhZ2VOYW1lIiwgImNvbmZpZyIsICJnZXQiLCAiaW5jbHVkZXMiLCAidG9TdHJpbmciLCAiZ2V0VGFyZ2V0RWxlbWVudHMiLCAiJGNvbnRlbnQiLCAiY29sb3IiLCAidGFyZ2V0RWxlbWVudHMiLCAid2dBY3Rpb24iLCAiZmluZCIsICJqb2luIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgInJlcXVpcmUiLCAiaXNJblRhcmdldFNwZWNpYWxQYWdlIiwgIndnQ2Fub25pY2FsTmFtZXNwYWNlIiwgIlJFR0VYX0lOVEVSTkFMX1VSTCIsICJSRUdFWF9JTVBPUlRfU0NSSVBUIiwgIlJFR0VYX1RMIiwgIlJFR0VYX1VSTCIsICJwcm9jZXNzRWxlbWVudCIsICJpc0FjdGl2YXRlSFRNTCIsICJyZWdleFVSTGluV2lraWNvZGVXaXRob3V0TGFiZWwiLCAicmVnZXhTdWJzdGluV2lraWNvZGVXaXRob3V0TGFiZWwiLCAiY29uY2F0IiwgInJlZ2V4VVJMaW5XaWtpY29kZVdpdGhMYWJlbCIsICJyZWdleFN1YnN0aW5XaWtpY29kZVdpdGhMYWJlbCIsICJyZWdleE90aGVyUGFnZXMiLCAicmVnZXhTdWJzdGluT3RoZXJQYWdlcyIsICJyZWdleFRlbXBsYXRlIiwgInJlZ2V4U3Vic3RpblRlbXBsYXRlIiwgInJlZ2V4V2lraWxpbmsxIiwgInJlZ2V4U3Vic3Rpbldpa2lsaW5rMSIsICJyZWdleFdpa2lsaW5rMiIsICJyZWdleFN1YnN0aW5XaWtpbGluazIiLCAiX2l0ZXJhdG9yIiwgIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwgIl9zdGVwIiwgInMiLCAibiIsICJkb25lIiwgImVsZW1lbnQiLCAidmFsdWUiLCAiaW5uZXJIVE1MIiwgIm9yaWdpbkh0bWwiLCAiaHRtbCIsICJleGlzdGluZ0FuY2hvcnMiLCAicmVwbGFjZSIsICJhbmNob3IiLCAicHVzaCIsICJsZW5ndGgiLCAiXyIsICJpbmRleCIsICJfZXhpc3RpbmdBbmNob3JzJE51bWIiLCAiTnVtYmVyIiwgInJlcXVlc3RBbmltYXRpb25GcmFtZSIsICJlcnIiLCAiZSIsICJmIiwgImdldEJvZHkiLCAidGhlbiIsICJhdXRvTGluayIsICJob29rIiwgImFkZCJdCn0K

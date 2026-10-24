/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://en.wiktionary.org/wiki/MediaWiki:Gadget-CodeLinks.js}
 * @base {@link https://zh.wiktionary.org/wiki/MediaWiki:Gadget-CodeLinks.js}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/CodeLinks}
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

// dist/CodeLinks/CodeLinks.js
//! src/CodeLinks/modules/addLink.ts
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
var addLink = (element, targetTitle) => {
  if (!(element instanceof Element)) {
    throw new TypeError("Expected Element interface");
  }
  const link = document.createElement("a");
  link.href = mw.util.getUrl(targetTitle);
  const {
    firstChild
  } = element;
  if (!(firstChild instanceof Text)) {
    throw new TypeError("Expected Text interface");
  }
  link.append(firstChild);
  element.append(link);
};
//! src/CodeLinks/CodeLinks.ts
var import_ext_gadget = require("ext.gadget.Util");
//! src/CodeLinks/modules/constant.ts
/*!
 * @author John Gruber
 * @copyright 2002–2023 The Daring Fireball Company LLC.
 * @see {@link https://daringfireball.net/2010/07/improved_regex_for_matching_urls}
 */
var REGEX_URL = /\b((?:https?:\/\/|www\d{0,3}[.]|[a-z0-9.-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()[\]{};:'".,<>?«»“”‘’]))/i;
//! src/CodeLinks/modules/processComment.ts
var processComment = (element) => {
  var _index, _ref;
  const {
    firstChild
  } = element;
  if (!(firstChild instanceof Text)) {
    throw new TypeError("Expected Text interface");
  }
  const {
    textContent
  } = firstChild;
  if (!textContent) {
    return;
  }
  const templateMatch = /(\{\{(?:#invoke:)?)([^|{}[\]\n#]+)(?=\||}})/i.exec(textContent);
  const wikilinkMatch = /\[\[([^|{}[\]\n]+)?(?:\|.*?)?]]/.exec(textContent);
  const urlMatch = REGEX_URL.exec(textContent);
  if (!(templateMatch || wikilinkMatch || urlMatch)) {
    return;
  }
  const link = document.createElement("a");
  link.className = "code-link";
  let linkText = "";
  let start = (_index = (_ref = wikilinkMatch || templateMatch || urlMatch) === null || _ref === void 0 ? void 0 : _ref.index) !== null && _index !== void 0 ? _index : 0;
  if (urlMatch) {
    const [url] = urlMatch;
    linkText = url;
    link.href = url;
  } else {
    let fullPageName = "";
    if (wikilinkMatch) {
      [linkText] = wikilinkMatch;
      fullPageName = wikilinkMatch[1];
    } else if (templateMatch) {
      const prefix = templateMatch[1];
      const pageName = templateMatch[2];
      fullPageName = "".concat(prefix === "{{#invoke:" ? "Module:" : "Template:").concat(pageName);
      linkText = pageName;
      link.title = fullPageName;
      start += prefix.length;
    }
    link.href = mw.util.getUrl(fullPageName);
  }
  link.append(document.createTextNode(linkText));
  firstChild.before(link);
  const afterLink = textContent.slice(Math.max(0, start + linkText.length));
  firstChild.textContent = afterLink;
  const beforeLink = textContent.slice(0, Math.max(0, start));
  element.insertBefore(document.createTextNode(beforeLink), link);
};
//! src/CodeLinks/CodeLinks.ts
void (0, import_ext_gadget.getBody)().then(function codeLinks($body) {
  var _iterator = _createForOfIteratorHelper($body.find(".mw-highlight")), _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done; ) {
      const codeBlock = _step.value;
      for (var _i2 = 0, _arr2 = ["c", "c1", "cm"]; _i2 < _arr2.length; _i2++) {
        const commentClass = _arr2[_i2];
        var _iterator4 = _createForOfIteratorHelper(codeBlock.querySelectorAll(".".concat(commentClass))), _step4;
        try {
          for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
            const comment = _step4.value;
            processComment(comment);
          }
        } catch (err) {
          _iterator4.e(err);
        } finally {
          _iterator4.f();
        }
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  const classes = {
    identifier: "n",
    functionName: "nb",
    singleQuoteString: "s1",
    doubleQuoteString: "s2"
  };
  const moduleNameElementArray = [];
  var _iterator2 = _createForOfIteratorHelper($body.find(".".concat(classes.functionName))), _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
      var _functionNameElement$, _nextElement$firstChi, _nextElement$firstChi3, _nextElementFirstValu;
      const functionNameElement = _step2.value;
      const text = (_functionNameElement$ = functionNameElement.firstChild) === null || _functionNameElement$ === void 0 ? void 0 : _functionNameElement$.nodeValue;
      if (text !== "require") {
        continue;
      }
      let nextElement = functionNameElement.nextElementSibling;
      if (!nextElement) {
        continue;
      }
      let nextElementFirstValue = (_nextElement$firstChi = nextElement.firstChild) === null || _nextElement$firstChi === void 0 ? void 0 : _nextElement$firstChi.nodeValue;
      const hasParenthesis = nextElementFirstValue === "(";
      if (hasParenthesis) {
        var _nextElement$firstChi2;
        nextElement = nextElement.nextElementSibling;
        if (!nextElement) {
          continue;
        }
        nextElementFirstValue = (_nextElement$firstChi2 = nextElement.firstChild) === null || _nextElement$firstChi2 === void 0 ? void 0 : _nextElement$firstChi2.nodeValue;
      }
      const {
        classList
      } = nextElement;
      if (!(classList.contains(classes.singleQuoteString) || classList.contains(classes.doubleQuoteString))) {
        continue;
      }
      const element = nextElement;
      const elementValue = nextElementFirstValue;
      if (!elementValue) {
        continue;
      }
      nextElement = nextElement.nextElementSibling;
      if (!nextElement) {
        continue;
      }
      nextElementFirstValue = (_nextElement$firstChi3 = nextElement.firstChild) === null || _nextElement$firstChi3 === void 0 ? void 0 : _nextElement$firstChi3.nodeValue;
      if (hasParenthesis && ((_nextElementFirstValu = nextElementFirstValue) === null || _nextElementFirstValu === void 0 ? void 0 : _nextElementFirstValu[0]) !== ")") {
        continue;
      }
      moduleNameElementArray[moduleNameElementArray.length] = element;
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
  const dataModuleNameElementArray = [];
  var _iterator3 = _createForOfIteratorHelper($body.find(".".concat(classes.singleQuoteString, ",.").concat(classes.doubleQuoteString))), _step3;
  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
      var _element$firstChild2, _prevElement$firstChi, _prevElement$firstChi3, _prevElement$firstChi4;
      const element = _step3.value;
      if (moduleNameElementArray.includes(element)) {
        continue;
      }
      const elementFirstValue = (_element$firstChild2 = element.firstChild) === null || _element$firstChild2 === void 0 ? void 0 : _element$firstChild2.nodeValue;
      if (!elementFirstValue || !/^["'](?:module|模[组組块]):/i.test(elementFirstValue)) {
        continue;
      }
      let prevElement = element.previousElementSibling;
      if (!prevElement) {
        continue;
      }
      let prevElementFirstValue = (_prevElement$firstChi = prevElement.firstChild) === null || _prevElement$firstChi === void 0 ? void 0 : _prevElement$firstChi.nodeValue;
      if (prevElementFirstValue === "(") {
        var _nextElement$firstChi4, _prevElement$firstChi2;
        const nextElement = element.nextElementSibling;
        if (!nextElement) {
          continue;
        }
        const nextElementFirstValue = (_nextElement$firstChi4 = nextElement.firstChild) === null || _nextElement$firstChi4 === void 0 ? void 0 : _nextElement$firstChi4.nodeValue;
        if ((nextElementFirstValue === null || nextElementFirstValue === void 0 ? void 0 : nextElementFirstValue[0]) !== ")") {
          continue;
        }
        prevElement = prevElement.previousElementSibling;
        if (!prevElement) {
          continue;
        }
        prevElementFirstValue = (_prevElement$firstChi2 = prevElement.firstChild) === null || _prevElement$firstChi2 === void 0 ? void 0 : _prevElement$firstChi2.nodeValue;
      }
      if (prevElementFirstValue !== "loadData") {
        continue;
      }
      prevElement = prevElement.previousElementSibling;
      if (!prevElement) {
        continue;
      }
      prevElementFirstValue = (_prevElement$firstChi3 = prevElement.firstChild) === null || _prevElement$firstChi3 === void 0 ? void 0 : _prevElement$firstChi3.nodeValue;
      if (prevElementFirstValue !== ".") {
        continue;
      }
      prevElement = prevElement.previousElementSibling;
      if (!prevElement) {
        continue;
      }
      prevElementFirstValue = (_prevElement$firstChi4 = prevElement.firstChild) === null || _prevElement$firstChi4 === void 0 ? void 0 : _prevElement$firstChi4.nodeValue;
      if (prevElementFirstValue !== "mw") {
        continue;
      }
      dataModuleNameElementArray[dataModuleNameElementArray.length] = element;
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }
  for (var _i = 0, _arr = [...moduleNameElementArray, ...dataModuleNameElementArray]; _i < _arr.length; _i++) {
    var _element$firstChild;
    const element = _arr[_i];
    const elementFirstValue = (_element$firstChild = element.firstChild) === null || _element$firstChild === void 0 ? void 0 : _element$firstChild.nodeValue;
    if (!elementFirstValue) {
      continue;
    }
    const moduleName = elementFirstValue.slice(1, -1);
    const targetTitle = /^(?:module|模[组組块])?:/i.test(moduleName) ? moduleName : "Help:Lua#".concat(moduleName);
    addLink(element, targetTitle);
  }
});

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0NvZGVMaW5rcy9tb2R1bGVzL2FkZExpbmsudHMiLCAic3JjL0NvZGVMaW5rcy9Db2RlTGlua3MudHMiLCAic3JjL0NvZGVMaW5rcy9tb2R1bGVzL2NvbnN0YW50LnRzIiwgInNyYy9Db2RlTGlua3MvbW9kdWxlcy9wcm9jZXNzQ29tbWVudC50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgYWRkTGluayA9IChlbGVtZW50OiBFbGVtZW50LCB0YXJnZXRUaXRsZTogc3RyaW5nKTogdm9pZCA9PiB7XG5cdGlmICghKGVsZW1lbnQgaW5zdGFuY2VvZiBFbGVtZW50KSkge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ0V4cGVjdGVkIEVsZW1lbnQgaW50ZXJmYWNlJyk7XG5cdH1cblxuXHRjb25zdCBsaW5rOiBIVE1MQW5jaG9yRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcblx0bGluay5ocmVmID0gbXcudXRpbC5nZXRVcmwodGFyZ2V0VGl0bGUpO1xuXG5cdGNvbnN0IHtmaXJzdENoaWxkfSA9IGVsZW1lbnQ7XG5cdGlmICghKGZpcnN0Q2hpbGQgaW5zdGFuY2VvZiBUZXh0KSkge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ0V4cGVjdGVkIFRleHQgaW50ZXJmYWNlJyk7XG5cdH1cblxuXHRsaW5rLmFwcGVuZChmaXJzdENoaWxkKTtcblx0ZWxlbWVudC5hcHBlbmQobGluayk7XG59O1xuXG5leHBvcnQge2FkZExpbmt9O1xuIiwgImltcG9ydCB7YWRkTGlua30gZnJvbSAnLi9tb2R1bGVzL2FkZExpbmsnO1xuaW1wb3J0IHtnZXRCb2R5fSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuaW1wb3J0IHtwcm9jZXNzQ29tbWVudH0gZnJvbSAnLi9tb2R1bGVzL3Byb2Nlc3NDb21tZW50Jztcblxudm9pZCBnZXRCb2R5KCkudGhlbihmdW5jdGlvbiBjb2RlTGlua3MoJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KTogdm9pZCB7XG5cdGZvciAoY29uc3QgY29kZUJsb2NrIG9mICRib2R5LmZpbmQoJy5tdy1oaWdobGlnaHQnKSkge1xuXHRcdGZvciAoY29uc3QgY29tbWVudENsYXNzIG9mIFsnYycsICdjMScsICdjbSddKSB7XG5cdFx0XHRmb3IgKGNvbnN0IGNvbW1lbnQgb2YgY29kZUJsb2NrLnF1ZXJ5U2VsZWN0b3JBbGwoYC4ke2NvbW1lbnRDbGFzc31gKSkge1xuXHRcdFx0XHRwcm9jZXNzQ29tbWVudChjb21tZW50KTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQvLyBMaW5rIG1vZHVsZSBuYW1lcyBhZnRlciBgcmVxdWlyZWAgYW5kIGBtdy5sb2FkRGF0YWAsIGFuZCB0cmFja2luZyB0ZW1wbGF0ZVxuXHQvLyBuYW1lcyBhZnRlciBgcmVxdWlyZShcIk1vZHVsZTpkZWJ1Z1wiKS50cmFja2AuXG5cdGNvbnN0IGNsYXNzZXMgPSB7XG5cdFx0aWRlbnRpZmllcjogJ24nLFxuXHRcdGZ1bmN0aW9uTmFtZTogJ25iJyxcblx0XHRzaW5nbGVRdW90ZVN0cmluZzogJ3MxJyxcblx0XHRkb3VibGVRdW90ZVN0cmluZzogJ3MyJyxcblx0fSBhcyBjb25zdCBzYXRpc2ZpZXMgUmVjb3JkPHN0cmluZywgc3RyaW5nPjtcblxuXHRjb25zdCBtb2R1bGVOYW1lRWxlbWVudEFycmF5OiBFbGVtZW50W10gPSBbXTtcblx0Zm9yIChjb25zdCBmdW5jdGlvbk5hbWVFbGVtZW50IG9mICRib2R5LmZpbmQoYC4ke2NsYXNzZXMuZnVuY3Rpb25OYW1lfWApKSB7XG5cdFx0Y29uc3QgdGV4dDogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCA9IGZ1bmN0aW9uTmFtZUVsZW1lbnQuZmlyc3RDaGlsZD8ubm9kZVZhbHVlO1xuXHRcdGlmICh0ZXh0ICE9PSAncmVxdWlyZScpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGxldCBuZXh0RWxlbWVudDogRWxlbWVudCB8IG51bGwgPSBmdW5jdGlvbk5hbWVFbGVtZW50Lm5leHRFbGVtZW50U2libGluZztcblx0XHRpZiAoIW5leHRFbGVtZW50KSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRsZXQgbmV4dEVsZW1lbnRGaXJzdFZhbHVlOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkID0gbmV4dEVsZW1lbnQuZmlyc3RDaGlsZD8ubm9kZVZhbHVlO1xuXHRcdGNvbnN0IGhhc1BhcmVudGhlc2lzOiBib29sZWFuID0gbmV4dEVsZW1lbnRGaXJzdFZhbHVlID09PSAnKCc7XG5cdFx0aWYgKGhhc1BhcmVudGhlc2lzKSB7XG5cdFx0XHRuZXh0RWxlbWVudCA9IG5leHRFbGVtZW50Lm5leHRFbGVtZW50U2libGluZztcblx0XHRcdGlmICghbmV4dEVsZW1lbnQpIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cdFx0XHRuZXh0RWxlbWVudEZpcnN0VmFsdWUgPSBuZXh0RWxlbWVudC5maXJzdENoaWxkPy5ub2RlVmFsdWU7XG5cdFx0fVxuXG5cdFx0Y29uc3Qge2NsYXNzTGlzdH0gPSBuZXh0RWxlbWVudDtcblx0XHRpZiAoIShjbGFzc0xpc3QuY29udGFpbnMoY2xhc3Nlcy5zaW5nbGVRdW90ZVN0cmluZykgfHwgY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzZXMuZG91YmxlUXVvdGVTdHJpbmcpKSkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0Y29uc3QgZWxlbWVudDogRWxlbWVudCA9IG5leHRFbGVtZW50O1xuXHRcdGNvbnN0IGVsZW1lbnRWYWx1ZTogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCA9IG5leHRFbGVtZW50Rmlyc3RWYWx1ZTtcblx0XHRpZiAoIWVsZW1lbnRWYWx1ZSkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0bmV4dEVsZW1lbnQgPSBuZXh0RWxlbWVudC5uZXh0RWxlbWVudFNpYmxpbmc7XG5cdFx0aWYgKCFuZXh0RWxlbWVudCkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0bmV4dEVsZW1lbnRGaXJzdFZhbHVlID0gbmV4dEVsZW1lbnQuZmlyc3RDaGlsZD8ubm9kZVZhbHVlO1xuXHRcdGlmIChoYXNQYXJlbnRoZXNpcyAmJiBuZXh0RWxlbWVudEZpcnN0VmFsdWU/LlswXSAhPT0gJyknKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRtb2R1bGVOYW1lRWxlbWVudEFycmF5W21vZHVsZU5hbWVFbGVtZW50QXJyYXkubGVuZ3RoXSA9IGVsZW1lbnQ7XG5cdH1cblxuXHRjb25zdCBkYXRhTW9kdWxlTmFtZUVsZW1lbnRBcnJheTogRWxlbWVudFtdID0gW107XG5cdGZvciAoY29uc3QgZWxlbWVudCBvZiAkYm9keS5maW5kKGAuJHtjbGFzc2VzLnNpbmdsZVF1b3RlU3RyaW5nfSwuJHtjbGFzc2VzLmRvdWJsZVF1b3RlU3RyaW5nfWApKSB7XG5cdFx0aWYgKG1vZHVsZU5hbWVFbGVtZW50QXJyYXkuaW5jbHVkZXMoZWxlbWVudCkpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGNvbnN0IGVsZW1lbnRGaXJzdFZhbHVlOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkID0gZWxlbWVudC5maXJzdENoaWxkPy5ub2RlVmFsdWU7XG5cdFx0aWYgKCFlbGVtZW50Rmlyc3RWYWx1ZSB8fCAhL15bXCInXSg/Om1vZHVsZXzmqKFb57uE57WE5Z2XXSk6L2kudGVzdChlbGVtZW50Rmlyc3RWYWx1ZSkpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGxldCBwcmV2RWxlbWVudDogRWxlbWVudCB8IG51bGwgPSBlbGVtZW50LnByZXZpb3VzRWxlbWVudFNpYmxpbmc7XG5cdFx0aWYgKCFwcmV2RWxlbWVudCkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0bGV0IHByZXZFbGVtZW50Rmlyc3RWYWx1ZTogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCA9IHByZXZFbGVtZW50LmZpcnN0Q2hpbGQ/Lm5vZGVWYWx1ZTtcblx0XHRpZiAocHJldkVsZW1lbnRGaXJzdFZhbHVlID09PSAnKCcpIHtcblx0XHRcdGNvbnN0IG5leHRFbGVtZW50OiBFbGVtZW50IHwgbnVsbCA9IGVsZW1lbnQubmV4dEVsZW1lbnRTaWJsaW5nO1xuXHRcdFx0aWYgKCFuZXh0RWxlbWVudCkge1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblx0XHRcdGNvbnN0IG5leHRFbGVtZW50Rmlyc3RWYWx1ZTogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCA9IG5leHRFbGVtZW50LmZpcnN0Q2hpbGQ/Lm5vZGVWYWx1ZTtcblx0XHRcdGlmIChuZXh0RWxlbWVudEZpcnN0VmFsdWU/LlswXSAhPT0gJyknKSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXHRcdFx0cHJldkVsZW1lbnQgPSBwcmV2RWxlbWVudC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nO1xuXHRcdFx0aWYgKCFwcmV2RWxlbWVudCkge1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblx0XHRcdHByZXZFbGVtZW50Rmlyc3RWYWx1ZSA9IHByZXZFbGVtZW50LmZpcnN0Q2hpbGQ/Lm5vZGVWYWx1ZTtcblx0XHR9XG5cdFx0aWYgKHByZXZFbGVtZW50Rmlyc3RWYWx1ZSAhPT0gJ2xvYWREYXRhJykge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0cHJldkVsZW1lbnQgPSBwcmV2RWxlbWVudC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nO1xuXHRcdGlmICghcHJldkVsZW1lbnQpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdHByZXZFbGVtZW50Rmlyc3RWYWx1ZSA9IHByZXZFbGVtZW50LmZpcnN0Q2hpbGQ/Lm5vZGVWYWx1ZTtcblx0XHRpZiAocHJldkVsZW1lbnRGaXJzdFZhbHVlICE9PSAnLicpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdHByZXZFbGVtZW50ID0gcHJldkVsZW1lbnQucHJldmlvdXNFbGVtZW50U2libGluZztcblx0XHRpZiAoIXByZXZFbGVtZW50KSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRwcmV2RWxlbWVudEZpcnN0VmFsdWUgPSBwcmV2RWxlbWVudC5maXJzdENoaWxkPy5ub2RlVmFsdWU7XG5cdFx0aWYgKHByZXZFbGVtZW50Rmlyc3RWYWx1ZSAhPT0gJ213Jykge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0ZGF0YU1vZHVsZU5hbWVFbGVtZW50QXJyYXlbZGF0YU1vZHVsZU5hbWVFbGVtZW50QXJyYXkubGVuZ3RoXSA9IGVsZW1lbnQ7XG5cdH1cblxuXHQvLyBMaW5rIG1vZHVsZSBuYW1lcyB0byBtb2R1bGUgcGFnZXMsXG5cdC8vIG9yIHRvIHRoZSBzZWN0aW9uIGluIHRoZSBTY3JpYnVudG8gbWFudWFsLlxuXHRmb3IgKGNvbnN0IGVsZW1lbnQgb2YgWy4uLm1vZHVsZU5hbWVFbGVtZW50QXJyYXksIC4uLmRhdGFNb2R1bGVOYW1lRWxlbWVudEFycmF5XSkge1xuXHRcdGNvbnN0IGVsZW1lbnRGaXJzdFZhbHVlOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkID0gZWxlbWVudC5maXJzdENoaWxkPy5ub2RlVmFsdWU7XG5cdFx0aWYgKCFlbGVtZW50Rmlyc3RWYWx1ZSkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0Y29uc3QgbW9kdWxlTmFtZTogc3RyaW5nID0gZWxlbWVudEZpcnN0VmFsdWUuc2xpY2UoMSwgLTEpO1xuXHRcdGNvbnN0IHRhcmdldFRpdGxlOiBzdHJpbmcgPSAvXig/Om1vZHVsZXzmqKFb57uE57WE5Z2XXSk/Oi9pLnRlc3QobW9kdWxlTmFtZSlcblx0XHRcdD8gbW9kdWxlTmFtZVxuXHRcdFx0OiBgSGVscDpMdWEjJHttb2R1bGVOYW1lfWA7XG5cdFx0YWRkTGluayhlbGVtZW50LCB0YXJnZXRUaXRsZSk7XG5cdH1cbn0pO1xuIiwgIi8qIVxuICogQGF1dGhvciBKb2huIEdydWJlclxuICogQGNvcHlyaWdodCAyMDAy4oCTMjAyMyBUaGUgRGFyaW5nIEZpcmViYWxsIENvbXBhbnkgTExDLlxuICogQHNlZSB7QGxpbmsgaHR0cHM6Ly9kYXJpbmdmaXJlYmFsbC5uZXQvMjAxMC8wNy9pbXByb3ZlZF9yZWdleF9mb3JfbWF0Y2hpbmdfdXJsc31cbiAqL1xuY29uc3QgUkVHRVhfVVJMOiBSZWdFeHAgPVxuXHQvXFxiKCg/Omh0dHBzPzpcXC9cXC98d3d3XFxkezAsM31bLl18W2EtejAtOS4tXStbLl1bYS16XXsyLDR9XFwvKSg/OlteXFxzKCk8Pl0rfFxcKChbXlxccygpPD5dK3woXFwoW15cXHMoKTw+XStcXCkpKSpcXCkpKyg/OlxcKChbXlxccygpPD5dK3woXFwoW15cXHMoKTw+XStcXCkpKSpcXCl8W15cXHNgISgpW1xcXXt9OzonXCIuLDw+P8KrwrvigJzigJ3igJjigJldKSkvaTtcblxuZXhwb3J0IHtSRUdFWF9VUkx9O1xuIiwgImltcG9ydCB7UkVHRVhfVVJMfSBmcm9tICcuL2NvbnN0YW50JztcblxuY29uc3QgcHJvY2Vzc0NvbW1lbnQgPSAoZWxlbWVudDogRWxlbWVudCk6IHZvaWQgPT4ge1xuXHRjb25zdCB7Zmlyc3RDaGlsZH0gPSBlbGVtZW50O1xuXHRpZiAoIShmaXJzdENoaWxkIGluc3RhbmNlb2YgVGV4dCkpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdFeHBlY3RlZCBUZXh0IGludGVyZmFjZScpO1xuXHR9XG5cblx0Y29uc3Qge3RleHRDb250ZW50fSA9IGZpcnN0Q2hpbGQ7XG5cdGlmICghdGV4dENvbnRlbnQpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCB0ZW1wbGF0ZU1hdGNoOiBSZWdFeHBFeGVjQXJyYXkgfCBudWxsID0gLyhcXHtcXHsoPzojaW52b2tlOik/KShbXnx7fVtcXF1cXG4jXSspKD89XFx8fH19KS9pLmV4ZWModGV4dENvbnRlbnQpO1xuXHRjb25zdCB3aWtpbGlua01hdGNoOiBSZWdFeHBFeGVjQXJyYXkgfCBudWxsID0gL1xcW1xcWyhbXnx7fVtcXF1cXG5dKyk/KD86XFx8Lio/KT9dXS8uZXhlYyh0ZXh0Q29udGVudCk7XG5cdGNvbnN0IHVybE1hdGNoOiBSZWdFeHBFeGVjQXJyYXkgfCBudWxsID0gUkVHRVhfVVJMLmV4ZWModGV4dENvbnRlbnQpO1xuXHRpZiAoISh0ZW1wbGF0ZU1hdGNoIHx8IHdpa2lsaW5rTWF0Y2ggfHwgdXJsTWF0Y2gpKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgbGluazogSFRNTEFuY2hvckVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG5cdGxpbmsuY2xhc3NOYW1lID0gJ2NvZGUtbGluayc7XG5cblx0bGV0IGxpbmtUZXh0OiBzdHJpbmcgPSAnJztcblx0bGV0IHN0YXJ0OiBudW1iZXIgPSAod2lraWxpbmtNYXRjaCB8fCB0ZW1wbGF0ZU1hdGNoIHx8IHVybE1hdGNoKT8uaW5kZXggPz8gMDtcblx0aWYgKHVybE1hdGNoKSB7XG5cdFx0Y29uc3QgW3VybF0gPSB1cmxNYXRjaDtcblx0XHRsaW5rVGV4dCA9IHVybDtcblx0XHRsaW5rLmhyZWYgPSB1cmw7XG5cdH0gZWxzZSB7XG5cdFx0bGV0IGZ1bGxQYWdlTmFtZTogc3RyaW5nID0gJyc7XG5cdFx0aWYgKHdpa2lsaW5rTWF0Y2gpIHtcblx0XHRcdFtsaW5rVGV4dF0gPSB3aWtpbGlua01hdGNoO1xuXHRcdFx0ZnVsbFBhZ2VOYW1lID0gd2lraWxpbmtNYXRjaFsxXSBhcyBzdHJpbmc7XG5cdFx0fSBlbHNlIGlmICh0ZW1wbGF0ZU1hdGNoKSB7XG5cdFx0XHRjb25zdCBwcmVmaXg6IHN0cmluZyA9IHRlbXBsYXRlTWF0Y2hbMV0gYXMgc3RyaW5nO1xuXHRcdFx0Y29uc3QgcGFnZU5hbWU6IHN0cmluZyA9IHRlbXBsYXRlTWF0Y2hbMl0gYXMgc3RyaW5nO1xuXHRcdFx0ZnVsbFBhZ2VOYW1lID0gYCR7cHJlZml4ID09PSAne3sjaW52b2tlOicgPyAnTW9kdWxlOicgOiAnVGVtcGxhdGU6J30ke3BhZ2VOYW1lfWA7XG5cdFx0XHRsaW5rVGV4dCA9IHBhZ2VOYW1lO1xuXHRcdFx0bGluay50aXRsZSA9IGZ1bGxQYWdlTmFtZTtcblx0XHRcdHN0YXJ0ICs9IHByZWZpeC5sZW5ndGg7XG5cdFx0fVxuXHRcdGxpbmsuaHJlZiA9IG13LnV0aWwuZ2V0VXJsKGZ1bGxQYWdlTmFtZSk7XG5cdH1cblxuXHRsaW5rLmFwcGVuZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShsaW5rVGV4dCkpO1xuXHRmaXJzdENoaWxkLmJlZm9yZShsaW5rKTtcblxuXHRjb25zdCBhZnRlckxpbms6IHN0cmluZyA9IHRleHRDb250ZW50LnNsaWNlKE1hdGgubWF4KDAsIHN0YXJ0ICsgbGlua1RleHQubGVuZ3RoKSk7XG5cdGZpcnN0Q2hpbGQudGV4dENvbnRlbnQgPSBhZnRlckxpbms7XG5cblx0Y29uc3QgYmVmb3JlTGluazogc3RyaW5nID0gdGV4dENvbnRlbnQuc2xpY2UoMCwgTWF0aC5tYXgoMCwgc3RhcnQpKTtcblx0ZWxlbWVudC5pbnNlcnRCZWZvcmUoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoYmVmb3JlTGluayksIGxpbmspO1xufTtcblxuZXhwb3J0IHtwcm9jZXNzQ29tbWVudH07XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLFVBQVVBLENBQUNDLFNBQWtCQyxnQkFBOEI7QUFDaEUsTUFBSSxFQUFFRCxtQkFBbUJFLFVBQVU7QUFDbEMsVUFBTSxJQUFJQyxVQUFVLDRCQUE0QjtFQUNqRDtBQUVBLFFBQU1DLE9BQTBCQyxTQUFTQyxjQUFjLEdBQUc7QUFDMURGLE9BQUtHLE9BQU9DLEdBQUdDLEtBQUtDLE9BQU9ULFdBQVc7QUFFdEMsUUFBTTtJQUFDVTtFQUFVLElBQUlYO0FBQ3JCLE1BQUksRUFBRVcsc0JBQXNCQyxPQUFPO0FBQ2xDLFVBQU0sSUFBSVQsVUFBVSx5QkFBeUI7RUFDOUM7QUFFQUMsT0FBS1MsT0FBT0YsVUFBVTtBQUN0Qlgs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QUFDaEQsVUFBSXFCLDBCQUEwQixNQUFNO0FBQ25DO01BQ0Q7QUFFQVosaUNBQTJCQSwyQkFBMkJ2RCxNQUFNLElBQUluQztJQUNqRTtFQUFBLFNBQUFnRSxLQUFBO0FBQUEyQixlQUFBMUIsRUFBQUQsR0FBQTtFQUFBLFVBQUE7QUFBQTJCLGVBQUF6QixFQUFBO0VBQUE7QUFJQSxXQUFBdUMsS0FBQSxHQUFBQyxPQUFzQixDQUFDLEdBQUdsQyx3QkFBd0IsR0FBR2tCLDBCQUEwQixHQUFBZSxLQUFBQyxLQUFBdkUsUUFBQXNFLE1BQUc7QUFBQSxRQUFBRTtBQUFsRixVQUFXM0csVUFBQTBHLEtBQUFELEVBQUE7QUFDVixVQUFNUCxxQkFBQVMsc0JBQStDM0csUUFBUVcsZ0JBQUEsUUFBQWdHLHdCQUFBLFNBQUEsU0FBUkEsb0JBQW9CMUI7QUFDekUsUUFBSSxDQUFDaUIsbUJBQW1CO0FBQ3ZCO0lBQ0Q7QUFFQSxVQUFNVSxhQUFxQlYsa0JBQWtCM0QsTUFBTSxHQUFHLEVBQUU7QUFDeEQsVUFBTXRDLGNBQXNCLHdCQUF3QmtHLEtBQUtTLFVBQVUsSUFDaEVBLGFBQUEsWUFBQTNFLE9BQ1kyRSxVQUFVO0FBQ3pCN0csWUFBUUMsU0FBU0MsV0FBVztFQUM3QjtBQUNELENBQUM7IiwKICAibmFtZXMiOiBbImFkZExpbmsiLCAiZWxlbWVudCIsICJ0YXJnZXRUaXRsZSIsICJFbGVtZW50IiwgIlR5cGVFcnJvciIsICJsaW5rIiwgImRvY3VtZW50IiwgImNyZWF0ZUVsZW1lbnQiLCAiaHJlZiIsICJtdyIsICJ1dGlsIiwgImdldFVybCIsICJmaXJzdENoaWxkIiwgIlRleHQiLCAiYXBwZW5kIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgInJlcXVpcmUiLCAiUkVHRVhfVVJMIiwgInByb2Nlc3NDb21tZW50IiwgIl9pbmRleCIsICJfcmVmIiwgInRleHRDb250ZW50IiwgInRlbXBsYXRlTWF0Y2giLCAiZXhlYyIsICJ3aWtpbGlua01hdGNoIiwgInVybE1hdGNoIiwgImNsYXNzTmFtZSIsICJsaW5rVGV4dCIsICJzdGFydCIsICJpbmRleCIsICJ1cmwiLCAiZnVsbFBhZ2VOYW1lIiwgInByZWZpeCIsICJwYWdlTmFtZSIsICJjb25jYXQiLCAidGl0bGUiLCAibGVuZ3RoIiwgImNyZWF0ZVRleHROb2RlIiwgImJlZm9yZSIsICJhZnRlckxpbmsiLCAic2xpY2UiLCAiTWF0aCIsICJtYXgiLCAiYmVmb3JlTGluayIsICJpbnNlcnRCZWZvcmUiLCAiZ2V0Qm9keSIsICJ0aGVuIiwgImNvZGVMaW5rcyIsICIkYm9keSIsICJfaXRlcmF0b3IiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAiZmluZCIsICJfc3RlcCIsICJzIiwgIm4iLCAiZG9uZSIsICJjb2RlQmxvY2siLCAidmFsdWUiLCAiX2kyIiwgIl9hcnIyIiwgImNvbW1lbnRDbGFzcyIsICJfaXRlcmF0b3I0IiwgInF1ZXJ5U2VsZWN0b3JBbGwiLCAiX3N0ZXA0IiwgImNvbW1lbnQiLCAiZXJyIiwgImUiLCAiZiIsICJjbGFzc2VzIiwgImlkZW50aWZpZXIiLCAiZnVuY3Rpb25OYW1lIiwgInNpbmdsZVF1b3RlU3RyaW5nIiwgImRvdWJsZVF1b3RlU3RyaW5nIiwgIm1vZHVsZU5hbWVFbGVtZW50QXJyYXkiLCAiX2l0ZXJhdG9yMiIsICJfc3RlcDIiLCAiX2Z1bmN0aW9uTmFtZUVsZW1lbnQkIiwgIl9uZXh0RWxlbWVudCRmaXJzdENoaSIsICJfbmV4dEVsZW1lbnQkZmlyc3RDaGkzIiwgIl9uZXh0RWxlbWVudEZpcnN0VmFsdSIsICJmdW5jdGlvbk5hbWVFbGVtZW50IiwgInRleHQiLCAibm9kZVZhbHVlIiwgIm5leHRFbGVtZW50IiwgIm5leHRFbGVtZW50U2libGluZyIsICJuZXh0RWxlbWVudEZpcnN0VmFsdWUiLCAiaGFzUGFyZW50aGVzaXMiLCAiX25leHRFbGVtZW50JGZpcnN0Q2hpMiIsICJjbGFzc0xpc3QiLCAiY29udGFpbnMiLCAiZWxlbWVudFZhbHVlIiwgImRhdGFNb2R1bGVOYW1lRWxlbWVudEFycmF5IiwgIl9pdGVyYXRvcjMiLCAiX3N0ZXAzIiwgIl9lbGVtZW50JGZpcnN0Q2hpbGQyIiwgIl9wcmV2RWxlbWVudCRmaXJzdENoaSIsICJfcHJldkVsZW1lbnQkZmlyc3RDaGkzIiwgIl9wcmV2RWxlbWVudCRmaXJzdENoaTQiLCAiaW5jbHVkZXMiLCAiZWxlbWVudEZpcnN0VmFsdWUiLCAidGVzdCIsICJwcmV2RWxlbWVudCIsICJwcmV2aW91c0VsZW1lbnRTaWJsaW5nIiwgInByZXZFbGVtZW50Rmlyc3RWYWx1ZSIsICJfbmV4dEVsZW1lbnQkZmlyc3RDaGk0IiwgIl9wcmV2RWxlbWVudCRmaXJzdENoaTIiLCAiX2kiLCAiX2FyciIsICJfZWxlbWVudCRmaXJzdENoaWxkIiwgIm1vZHVsZU5hbWUiXQp9Cg==

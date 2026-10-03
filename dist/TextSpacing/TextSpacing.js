/**
 * SPDX-License-Identifier: BSD-3-Clause
 * _addText: '{{Gadget Header|license=BSD}}'
 *
 * @base {@link https://github.com/diskdance/gadget-text-spacing}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/TextSpacing}
 * @license BSD-3-Clause {@link https://github.com/diskdance/gadget-text-spacing/blob/main/LICENSE}
 */

/**
 * BSD 3-Clause License
 *
 * Copyright 2023 diskdance
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are
 * met:
 *
 * 1. Redistributions of source code must retain the above copyright
 *    notice, this list of conditions and the following disclaimer.
 *
 * 2. Redistributions in binary form must reproduce the above copyright
 *    notice, this list of conditions and the following disclaimer in
 *    the documentation and/or other materials provided with the
 *    distribution.
 *
 * 3. The name of the author may not be used to
 *    endorse or promote products derived from this software without
 *    specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE AUTHOR “AS IS” AND ANY EXPRESS OR
 * IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY DIRECT,
 * INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
 * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION)
 * HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT,
 * STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING
 * IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 * POSSIBILITY OF SUCH DAMAGE.
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

// dist/TextSpacing/TextSpacing.js
//! src/TextSpacing/modules/util.ts
var _templateObject;
var _templateObject2;
var _templateObject3;
function _taggedTemplateLiteral(e, t) {
  return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } }));
}
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
var import_ext_gadget = require("ext.gadget.Util");
var isInlineHTMLElement = (node) => {
  return node instanceof HTMLElement && window.getComputedStyle(node).display.includes("inline");
};
var isTextNode = (node) => {
  return node.nodeType === Node.TEXT_NODE;
};
var isVisible = (element) => {
  const style = window.getComputedStyle(element);
  return style.display !== "none" && !["hidden", "collapse"].includes(style.visibility) && Number.parseFloat(style.opacity) > 0;
};
var getNodeText = (node) => {
  return node instanceof HTMLElement ? node.innerText : node.data;
};
var splitAtIndexes = (str, indexes) => {
  const result = [];
  const normalizedIndexes = [
    // Remove duplications and sort in ascending order
    ...(0, import_ext_gadget.uniqueArray)(
      // Replace Set with uniqueArray, avoiding core-js polyfilling
      indexes.sort((a, b) => {
        return a - b;
      }).filter((i) => {
        return i >= 0 && i <= str.length;
      })
    ),
    str.length
  ];
  for (let i = 0; i < normalizedIndexes.length; i++) {
    const slice = str.slice(normalizedIndexes[i - 1], normalizedIndexes[i]);
    result[result.length] = slice;
  }
  return result;
};
//! src/TextSpacing/modules/queue.ts
var pendingActions = /* @__PURE__ */ new WeakMap();
var onIntersection = (entries) => {
  var _iterator = _createForOfIteratorHelper(entries), _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done; ) {
      const entry = _step.value;
      if (!entry.isIntersecting) {
        continue;
      }
      const element = entry.target;
      observer.unobserve(element);
      const callbacks = pendingActions.get(element);
      if (!callbacks) {
        continue;
      }
      while (true) {
        const callback = callbacks.shift();
        if (!callback) {
          break;
        }
        callback(element);
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
};
var observer = new IntersectionObserver(onIntersection);
var queueDomMutation = (element, callback) => {
  if (!pendingActions.has(element)) {
    pendingActions.set(element, []);
  }
  if (pendingActions.get(element) !== void 0) {
    pendingActions.get(element)[pendingActions.get(element).length] = callback;
  }
  observer.observe(element);
};
//! src/TextSpacing/modules/spacing.ts
var REGEX_RANGE_CHINESE = String.raw(_templateObject || (_templateObject = _taggedTemplateLiteral(["(?:[⺀-⺙⺛-⻳⼀-⿕々〇〡-〩〸-〻㐀-䶿一-鿿豈-舘並-龎]|\uD81B[\uDFE2\uDFE3\uDFF0\uDFF1]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF38\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A])"], ["(?:[\\u2E80-\\u2E99\\u2E9B-\\u2EF3\\u2F00-\\u2FD5\\u3005\\u3007\\u3021-\\u3029\\u3038-\\u303B\\u3400-\\u4DBF\\u4E00-\\u9FFF\\uF900-\\uFA6D\\uFA70-\\uFAD9]|\\uD81B[\\uDFE2\\uDFE3\\uDFF0\\uDFF1]|[\\uD840-\\uD868\\uD86A-\\uD86C\\uD86F-\\uD872\\uD874-\\uD879\\uD880-\\uD883][\\uDC00-\\uDFFF]|\\uD869[\\uDC00-\\uDEDF\\uDF00-\\uDFFF]|\\uD86D[\\uDC00-\\uDF38\\uDF40-\\uDFFF]|\\uD86E[\\uDC00-\\uDC1D\\uDC20-\\uDFFF]|\\uD873[\\uDC00-\\uDEA1\\uDEB0-\\uDFFF]|\\uD87A[\\uDC00-\\uDFE0]|\\uD87E[\\uDC00-\\uDE1D]|\\uD884[\\uDC00-\\uDF4A])"])));
var REGEX_RANGE_OTHER_LEFT = String.raw(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["[A-Za-z0-9@~%+=|±)}#$¥€£₤]"], ["[A-Za-z0-9@~%+=|±\\)}#$¥€£₤]"])));
var REGEX_RANGE_OTHER_RIGHT = String.raw(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["[A-Za-z0-9@~%+=|±({#$¥€£₤]"], ["[A-Za-z0-9@~%+=|±\\({#$¥€£₤]"])));
var REGEX_STR_INTER_SCRIPT = "(?:(".concat(REGEX_RANGE_CHINESE, ")(?=").concat(REGEX_RANGE_OTHER_RIGHT, ")|(").concat(REGEX_RANGE_OTHER_LEFT, ")(?=").concat(REGEX_RANGE_CHINESE, "))");
var SPACE = " ";
var WRAPPER_CLASS = "gadget-text_spacing";
var SELECTOR_ALLOWED = ["a", "abbr", "article", "aside", "b", "bdi", "big", "blockquote", "button", "caption", "center", "cite", "data", "dd", "del", "details", "dfn", "div", "dt", "em", "figcaption", "footer", "h1", "h2", "h3", "h4", "h5", "header", "i", "ins", "label", "legend", "li", "main", "mark", "option", "p", "q", "ruby", "s", "section", "small", "span", "strike", "strong", "sub", "summary", "sup", "td", "th", "time", "u"];
var SELECTOR_BLOCKED = [
  "code",
  "kbd",
  "pre",
  "rp",
  "rt",
  "samp",
  "textarea",
  "var",
  // Elements with this class are excluded
  ".gadget-nospace",
  // Editable elements
  '[contenteditable="true"]',
  // ACE editor content
  ".ace_editor",
  // Visual Editor (and 2017 Wikitext Editor) content & diff
  ".ve-ui-surface",
  ".ve-init-mw-diffPage-diff",
  // Diff
  ".diff-context",
  ".diff-addedline",
  ".diff-deletedline",
  // Diff (inline mode)
  ".mw-diff-inline-added",
  ".mw-diff-inline-deleted",
  ".mw-diff-inline-moved",
  ".mw-diff-inline-changed",
  ".mw-diff-inline-context"
];
var SELECTOR = SELECTOR_ALLOWED.map((allowed) => {
  return "".concat(allowed, ":not(").concat(SELECTOR_BLOCKED.flatMap((blocked) => {
    return blocked[0].match(/[a-z]/i) ? "".concat(blocked, " *") : [blocked, "".concat(blocked, " *")];
  }).join(","), ")");
}).join(",");
var getLeafElements = (parent) => {
  const candidates = parent.querySelectorAll(SELECTOR);
  const result = [];
  if (parent.matches(SELECTOR)) {
    result[result.length] = parent;
  }
  var _iterator2 = _createForOfIteratorHelper(candidates), _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
      const candidate = _step2.value;
      var _iterator3 = _createForOfIteratorHelper(candidate.childNodes), _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
          const childNode = _step3.value;
          if (isTextNode(childNode)) {
            result[result.length] = candidate;
            break;
          }
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
  return result;
};
var getNextVisibleSibling = (node) => {
  let currentNode = node;
  while (true) {
    const candidate = currentNode.nextSibling;
    if (!candidate) {
      const parent = currentNode.parentElement;
      if (!parent) {
        return null;
      }
      currentNode = parent;
      continue;
    }
    if (!(candidate instanceof HTMLElement || candidate instanceof Text)) {
      currentNode = candidate;
      continue;
    }
    if (candidate instanceof HTMLElement) {
      if (!isVisible(candidate)) {
        currentNode = candidate;
        continue;
      }
      if (!isInlineHTMLElement(candidate)) {
        return null;
      }
    }
    if (candidate instanceof Text && !candidate.data.trim()) {
      currentNode = candidate;
      continue;
    }
    return candidate;
  }
};
var createSpacingWrapper = (str) => {
  const span = document.createElement("span");
  span.className = WRAPPER_CLASS;
  span.textContent = str.slice(-1);
  return [str.slice(0, -1), span];
};
var adjustSpacing = (element) => {
  const childNodes = [...element.childNodes];
  const textSpacingPosMap = /* @__PURE__ */ new Map();
  for (var _i = 0, _childNodes = childNodes; _i < _childNodes.length; _i++) {
    const child = _childNodes[_i];
    if (!(child instanceof Text)) {
      continue;
    }
    const nextSibling = getNextVisibleSibling(child);
    let testString = getNodeText(child);
    if (nextSibling) {
      var _getNodeText$;
      testString += (_getNodeText$ = getNodeText(nextSibling)[0]) !== null && _getNodeText$ !== void 0 ? _getNodeText$ : "";
    }
    const indexes = [];
    const regexTextNodeData = new RegExp(REGEX_STR_INTER_SCRIPT, "g");
    while (true) {
      const match = regexTextNodeData.exec(testString);
      if (!match) {
        break;
      }
      indexes[indexes.length] = match.index + 1;
    }
    if (!indexes.length) {
      continue;
    }
    textSpacingPosMap.set(child, indexes);
  }
  queueDomMutation(element, () => {
    var _iterator4 = _createForOfIteratorHelper(textSpacingPosMap), _step4;
    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
        const [node, indexes] = _step4.value;
        const text = node.data;
        const fragments = splitAtIndexes(text, indexes);
        const replacement = fragments.slice(0, -1).flatMap((fragment) => {
          return createSpacingWrapper(fragment);
        });
        replacement[replacement.length] = fragments.at(-1);
        requestAnimationFrame(() => {
          node.replaceWith(...replacement);
        });
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }
  });
};
var addSpaceToString = (str) => {
  const regex = new RegExp(REGEX_STR_INTER_SCRIPT, "g");
  return str.replace(regex, "$1$2".concat(SPACE));
};
//! src/TextSpacing/modules/supportsTextAutospace.ts
var supportsTextAutospace = () => {
  if (typeof CSS !== "undefined" && typeof CSS.supports === "function") {
    if (CSS.supports("text-autospace", "normal")) {
      return true;
    }
    return false;
  }
  return false;
};
//! src/TextSpacing/TextSpacing.ts
var run = (element) => {
  const leaves = getLeafElements(element);
  var _iterator5 = _createForOfIteratorHelper(leaves), _step5;
  try {
    for (_iterator5.s(); !(_step5 = _iterator5.n()).done; ) {
      const leaf = _step5.value;
      adjustSpacing(leaf);
    }
  } catch (err) {
    _iterator5.e(err);
  } finally {
    _iterator5.f();
  }
};
var mutationObserver = new MutationObserver((records) => {
  var _iterator6 = _createForOfIteratorHelper(records), _step6;
  try {
    for (_iterator6.s(); !(_step6 = _iterator6.n()).done; ) {
      const record = _step6.value;
      if (record.type !== "childList") {
        continue;
      }
      const addedNodes = [...record.addedNodes];
      if (addedNodes.some((node) => {
        return node instanceof HTMLElement && node.classList.contains(WRAPPER_CLASS);
      })) {
        continue;
      }
      for (var _i2 = 0, _addedNodes = addedNodes; _i2 < _addedNodes.length; _i2++) {
        const node = _addedNodes[_i2];
        if (node instanceof HTMLElement) {
          run(node);
        } else if (node instanceof Text) {
          const {
            parentElement
          } = node;
          if (parentElement) {
            run(parentElement);
          }
        }
      }
    }
  } catch (err) {
    _iterator6.e(err);
  } finally {
    _iterator6.f();
  }
});
var main = () => {
  document.title = addSpaceToString(document.title);
  const output = document.querySelector(".mw-parser-output");
  if (!output) {
    return;
  }
  mutationObserver.observe(output, {
    subtree: true,
    childList: true
  });
  run(output);
};
if (supportsTextAutospace()) {
  console.info("[TextSpacing] text-autospace is supported natively; no need to run the script.");
} else {
  $(main);
}

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1RleHRTcGFjaW5nL21vZHVsZXMvdXRpbC50cyIsICJzcmMvVGV4dFNwYWNpbmcvbW9kdWxlcy9xdWV1ZS50cyIsICJzcmMvVGV4dFNwYWNpbmcvbW9kdWxlcy9zcGFjaW5nLnRzIiwgInNyYy9UZXh0U3BhY2luZy9tb2R1bGVzL3N1cHBvcnRzVGV4dEF1dG9zcGFjZS50cyIsICJzcmMvVGV4dFNwYWNpbmcvVGV4dFNwYWNpbmcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7dW5pcXVlQXJyYXl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmNvbnN0IGlzSW5saW5lSFRNTEVsZW1lbnQgPSAobm9kZTogTm9kZSk6IG5vZGUgaXMgSFRNTEVsZW1lbnQgPT4ge1xuXHRyZXR1cm4gbm9kZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50ICYmIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKG5vZGUpLmRpc3BsYXkuaW5jbHVkZXMoJ2lubGluZScpO1xufTtcblxuY29uc3QgaXNUZXh0Tm9kZSA9IChub2RlOiBOb2RlKTogbm9kZSBpcyBUZXh0ID0+IHtcblx0cmV0dXJuIG5vZGUubm9kZVR5cGUgPT09IE5vZGUuVEVYVF9OT0RFO1xufTtcblxuY29uc3QgaXNWaXNpYmxlID0gKGVsZW1lbnQ6IEVsZW1lbnQpOiBib29sZWFuID0+IHtcblx0Y29uc3Qgc3R5bGU6IENTU1N0eWxlRGVjbGFyYXRpb24gPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KTtcblxuXHRyZXR1cm4gKFxuXHRcdHN0eWxlLmRpc3BsYXkgIT09ICdub25lJyAmJlxuXHRcdCFbJ2hpZGRlbicsICdjb2xsYXBzZSddLmluY2x1ZGVzKHN0eWxlLnZpc2liaWxpdHkpICYmXG5cdFx0TnVtYmVyLnBhcnNlRmxvYXQoc3R5bGUub3BhY2l0eSkgPiAwXG5cdCk7XG59O1xuXG5jb25zdCBnZXROb2RlVGV4dCA9IChub2RlOiBIVE1MRWxlbWVudCB8IFRleHQpOiBzdHJpbmcgPT4ge1xuXHRyZXR1cm4gbm9kZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50ID8gbm9kZS5pbm5lclRleHQgOiBub2RlLmRhdGE7XG59O1xuXG4vKipcbiAqIFNwbGl0IGEgc3RyaW5nIGJlZm9yZSBhbiBhcnJheSBvZiBpbmRleGVzLlxuICpcbiAqIEZvciBleGFtcGxlLFxuICogYGBgXG4gKiBzcGxpdEF0SW5kZXhlcygnMTIzNDU2Nzg5JywgWzMsIDUsIDddKTtcbiAqIGBgYFxuICogcmVzdWx0cyBpblxuICogYGBgXG4gKiBbJzEyMycsICc0NScsICc2NycsICc4OSddXG4gKiBgYGBcbiAqXG4gKiBOb3RlIHRoYXQgZW1wdHkgc3RyaW5nIGFyZSBpbmNsdWRlZDpcbiAqIGBgYFxuICogc3BsaXRBdEluZGV4ZXMoJzEyMzQ1Njc4OScsIFswLCA5XSk7XG4gKiBgYGBcbiAqIHJlc3VsdHMgaW5cbiAqIGBgYFxuICogWycnLCAnMTIzNDU2Nzg5JywgJyddXG4gKiBgYGBcbiAqXG4gKiBJbmRleGVzIHRoYXQgYXJlIG5lZ2F0aXZlIG9yIGdyZWF0ZXIgdGhhbiB0aGUgbGVuZ3RoIG9mIHRoZSBzdHJpbmcgYXJlIGlnbm9yZWQuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHN0ciBzdHJpbmcgdG8gc3BsaXRcbiAqIEBwYXJhbSB7bnVtYmVyW119IGluZGV4ZXMgaW5kZXhlc1xuICogQHJldHVybiB7c3RyaW5nW119IHNwbGl0dGVkIHN0cmluZyBmcmFnbWVudHNcbiAqL1xuY29uc3Qgc3BsaXRBdEluZGV4ZXMgPSAoc3RyOiBzdHJpbmcsIGluZGV4ZXM6IG51bWJlcltdKTogc3RyaW5nW10gPT4ge1xuXHRjb25zdCByZXN1bHQ6IHN0cmluZ1tdID0gW107XG5cblx0Y29uc3Qgbm9ybWFsaXplZEluZGV4ZXM6IG51bWJlcltdID0gW1xuXHRcdC8vIFJlbW92ZSBkdXBsaWNhdGlvbnMgYW5kIHNvcnQgaW4gYXNjZW5kaW5nIG9yZGVyXG5cdFx0Li4udW5pcXVlQXJyYXkoXG5cdFx0XHQvLyBSZXBsYWNlIFNldCB3aXRoIHVuaXF1ZUFycmF5LCBhdm9pZGluZyBjb3JlLWpzIHBvbHlmaWxsaW5nXG5cdFx0XHRpbmRleGVzXG5cdFx0XHRcdC5zb3J0KChhOiBudW1iZXIsIGI6IG51bWJlcik6IG51bWJlciA9PiB7XG5cdFx0XHRcdFx0cmV0dXJuIGEgLSBiO1xuXHRcdFx0XHR9KVxuXHRcdFx0XHQuZmlsdGVyKChpOiBudW1iZXIpOiBib29sZWFuID0+IHtcblx0XHRcdFx0XHRyZXR1cm4gaSA+PSAwICYmIGkgPD0gc3RyLmxlbmd0aDtcblx0XHRcdFx0fSlcblx0XHQpLFxuXHRcdHN0ci5sZW5ndGgsXG5cdF07XG5cblx0Zm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IG5vcm1hbGl6ZWRJbmRleGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y29uc3Qgc2xpY2U6IHN0cmluZyA9IHN0ci5zbGljZShub3JtYWxpemVkSW5kZXhlc1tpIC0gMV0sIG5vcm1hbGl6ZWRJbmRleGVzW2ldKTtcblx0XHRyZXN1bHRbcmVzdWx0Lmxlbmd0aF0gPSBzbGljZTsgLy8gUmVwbGFjZSBBcnJheSNwdXNoIHRvIGF2b2lkIGNvcmUtanMgcG9seWZpbGxpbmdcblx0fVxuXG5cdHJldHVybiByZXN1bHQ7XG59O1xuXG5leHBvcnQge2lzSW5saW5lSFRNTEVsZW1lbnQsIGlzVGV4dE5vZGUsIGlzVmlzaWJsZSwgZ2V0Tm9kZVRleHQsIHNwbGl0QXRJbmRleGVzfTtcbiIsICJ0eXBlIERvbU11dGF0aW9uRnVuYyA9IChlbGVtZW50OiBFbGVtZW50KSA9PiB2b2lkO1xuXG5jb25zdCBwZW5kaW5nQWN0aW9uczogV2Vha01hcDxFbGVtZW50LCBEb21NdXRhdGlvbkZ1bmNbXT4gPSBuZXcgV2Vha01hcDxFbGVtZW50LCBEb21NdXRhdGlvbkZ1bmNbXT4oKTtcblxuY29uc3Qgb25JbnRlcnNlY3Rpb24gPSAoZW50cmllczogSW50ZXJzZWN0aW9uT2JzZXJ2ZXJFbnRyeVtdKTogdm9pZCA9PiB7XG5cdGZvciAoY29uc3QgZW50cnkgb2YgZW50cmllcykge1xuXHRcdGlmICghZW50cnkuaXNJbnRlcnNlY3RpbmcpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGNvbnN0IGVsZW1lbnQ6IEVsZW1lbnQgPSBlbnRyeS50YXJnZXQ7XG5cdFx0b2JzZXJ2ZXIudW5vYnNlcnZlKGVsZW1lbnQpO1xuXG5cdFx0Y29uc3QgY2FsbGJhY2tzOiBEb21NdXRhdGlvbkZ1bmNbXSB8IHVuZGVmaW5lZCA9IHBlbmRpbmdBY3Rpb25zLmdldChlbGVtZW50KTtcblx0XHRpZiAoIWNhbGxiYWNrcykge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0d2hpbGUgKHRydWUpIHtcblx0XHRcdGNvbnN0IGNhbGxiYWNrOiBEb21NdXRhdGlvbkZ1bmMgfCB1bmRlZmluZWQgPSBjYWxsYmFja3Muc2hpZnQoKTsgLy8gRklGT1xuXHRcdFx0aWYgKCFjYWxsYmFjaykge1xuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHRcdGNhbGxiYWNrKGVsZW1lbnQpO1xuXHRcdH1cblx0fVxufTtcblxuLy8gT3B0aW1pemF0aW9uOiBsYXppbHkgZXhlY3V0ZSBwZW5kaW5nIGFjdGlvbnMgb25jZSBhbiBlbGVtZW50IGlzIHZpc2libGVcbmNvbnN0IG9ic2VydmVyOiBJbnRlcnNlY3Rpb25PYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihvbkludGVyc2VjdGlvbik7XG5cbmNvbnN0IHF1ZXVlRG9tTXV0YXRpb24gPSAoZWxlbWVudDogRWxlbWVudCwgY2FsbGJhY2s6IERvbU11dGF0aW9uRnVuYyk6IHZvaWQgPT4ge1xuXHRpZiAoIXBlbmRpbmdBY3Rpb25zLmhhcyhlbGVtZW50KSkge1xuXHRcdHBlbmRpbmdBY3Rpb25zLnNldChlbGVtZW50LCBbXSk7XG5cdH1cblxuXHRpZiAocGVuZGluZ0FjdGlvbnMuZ2V0KGVsZW1lbnQpICE9PSB1bmRlZmluZWQpIHtcblx0XHQocGVuZGluZ0FjdGlvbnMuZ2V0KGVsZW1lbnQpIGFzIERvbU11dGF0aW9uRnVuY1tdKVsocGVuZGluZ0FjdGlvbnMuZ2V0KGVsZW1lbnQpIGFzIERvbU11dGF0aW9uRnVuY1tdKS5sZW5ndGhdID1cblx0XHRcdGNhbGxiYWNrO1xuXHR9XG5cdG9ic2VydmVyLm9ic2VydmUoZWxlbWVudCk7XG59O1xuXG5leHBvcnQge3F1ZXVlRG9tTXV0YXRpb259O1xuIiwgImltcG9ydCB7Z2V0Tm9kZVRleHQsIGlzSW5saW5lSFRNTEVsZW1lbnQsIGlzVGV4dE5vZGUsIGlzVmlzaWJsZSwgc3BsaXRBdEluZGV4ZXN9IGZyb20gJy4vdXRpbCc7XG5pbXBvcnQge3F1ZXVlRG9tTXV0YXRpb259IGZyb20gJy4vcXVldWUnO1xuXG5jb25zdCBSRUdFWF9SQU5HRV9DSElORVNFOiBzdHJpbmcgPSBTdHJpbmcucmF3YCg/OltcXHUyRTgwLVxcdTJFOTlcXHUyRTlCLVxcdTJFRjNcXHUyRjAwLVxcdTJGRDVcXHUzMDA1XFx1MzAwN1xcdTMwMjEtXFx1MzAyOVxcdTMwMzgtXFx1MzAzQlxcdTM0MDAtXFx1NERCRlxcdTRFMDAtXFx1OUZGRlxcdUY5MDAtXFx1RkE2RFxcdUZBNzAtXFx1RkFEOV18XFx1RDgxQltcXHVERkUyXFx1REZFM1xcdURGRjBcXHVERkYxXXxbXFx1RDg0MC1cXHVEODY4XFx1RDg2QS1cXHVEODZDXFx1RDg2Ri1cXHVEODcyXFx1RDg3NC1cXHVEODc5XFx1RDg4MC1cXHVEODgzXVtcXHVEQzAwLVxcdURGRkZdfFxcdUQ4NjlbXFx1REMwMC1cXHVERURGXFx1REYwMC1cXHVERkZGXXxcXHVEODZEW1xcdURDMDAtXFx1REYzOFxcdURGNDAtXFx1REZGRl18XFx1RDg2RVtcXHVEQzAwLVxcdURDMURcXHVEQzIwLVxcdURGRkZdfFxcdUQ4NzNbXFx1REMwMC1cXHVERUExXFx1REVCMC1cXHVERkZGXXxcXHVEODdBW1xcdURDMDAtXFx1REZFMF18XFx1RDg3RVtcXHVEQzAwLVxcdURFMURdfFxcdUQ4ODRbXFx1REMwMC1cXHVERjRBXSlgO1xuY29uc3QgUkVHRVhfUkFOR0VfT1RIRVJfTEVGVDogc3RyaW5nID0gU3RyaW5nLnJhd2BbQS1aYS16MC05QH4lKz18wrFcXCl9IyTCpeKCrMKj4oKkXWA7XG5jb25zdCBSRUdFWF9SQU5HRV9PVEhFUl9SSUdIVDogc3RyaW5nID0gU3RyaW5nLnJhd2BbQS1aYS16MC05QH4lKz18wrFcXCh7IyTCpeKCrMKj4oKkXWA7XG5jb25zdCBSRUdFWF9TVFJfSU5URVJfU0NSSVBUOiBzdHJpbmcgPSBgKD86KCR7UkVHRVhfUkFOR0VfQ0hJTkVTRX0pKD89JHtSRUdFWF9SQU5HRV9PVEhFUl9SSUdIVH0pfCgke1JFR0VYX1JBTkdFX09USEVSX0xFRlR9KSg/PSR7UkVHRVhfUkFOR0VfQ0hJTkVTRX0pKWA7XG5cbmNvbnN0IFNQQUNFOiBzdHJpbmcgPSAnXFx1MjAwQSc7XG5cbmNvbnN0IFdSQVBQRVJfQ0xBU1M6IHN0cmluZyA9ICdnYWRnZXQtdGV4dF9zcGFjaW5nJztcblxuY29uc3QgU0VMRUNUT1JfQUxMT1dFRDogc3RyaW5nW10gPSBbXG5cdCdhJyxcblx0J2FiYnInLFxuXHQnYXJ0aWNsZScsXG5cdCdhc2lkZScsXG5cdCdiJyxcblx0J2JkaScsXG5cdCdiaWcnLFxuXHQnYmxvY2txdW90ZScsXG5cdCdidXR0b24nLFxuXHQnY2FwdGlvbicsXG5cdCdjZW50ZXInLFxuXHQnY2l0ZScsXG5cdCdkYXRhJyxcblx0J2RkJyxcblx0J2RlbCcsXG5cdCdkZXRhaWxzJyxcblx0J2RmbicsXG5cdCdkaXYnLFxuXHQnZHQnLFxuXHQnZW0nLFxuXHQnZmlnY2FwdGlvbicsXG5cdCdmb290ZXInLFxuXHQnaDEnLFxuXHQnaDInLFxuXHQnaDMnLFxuXHQnaDQnLFxuXHQnaDUnLFxuXHQnaGVhZGVyJyxcblx0J2knLFxuXHQnaW5zJyxcblx0J2xhYmVsJyxcblx0J2xlZ2VuZCcsXG5cdCdsaScsXG5cdCdtYWluJyxcblx0J21hcmsnLFxuXHQnb3B0aW9uJyxcblx0J3AnLFxuXHQncScsXG5cdCdydWJ5Jyxcblx0J3MnLFxuXHQnc2VjdGlvbicsXG5cdCdzbWFsbCcsXG5cdCdzcGFuJyxcblx0J3N0cmlrZScsXG5cdCdzdHJvbmcnLFxuXHQnc3ViJyxcblx0J3N1bW1hcnknLFxuXHQnc3VwJyxcblx0J3RkJyxcblx0J3RoJyxcblx0J3RpbWUnLFxuXHQndScsXG5dO1xuY29uc3QgU0VMRUNUT1JfQkxPQ0tFRDogc3RyaW5nW10gPSBbXG5cdCdjb2RlJyxcblx0J2tiZCcsXG5cdCdwcmUnLFxuXHQncnAnLFxuXHQncnQnLFxuXHQnc2FtcCcsXG5cdCd0ZXh0YXJlYScsXG5cdCd2YXInLFxuXHQvLyBFbGVtZW50cyB3aXRoIHRoaXMgY2xhc3MgYXJlIGV4Y2x1ZGVkXG5cdCcuZ2FkZ2V0LW5vc3BhY2UnLFxuXHQvLyBFZGl0YWJsZSBlbGVtZW50c1xuXHQnW2NvbnRlbnRlZGl0YWJsZT1cInRydWVcIl0nLFxuXHQvLyBBQ0UgZWRpdG9yIGNvbnRlbnRcblx0Jy5hY2VfZWRpdG9yJyxcblx0Ly8gVmlzdWFsIEVkaXRvciAoYW5kIDIwMTcgV2lraXRleHQgRWRpdG9yKSBjb250ZW50ICYgZGlmZlxuXHQnLnZlLXVpLXN1cmZhY2UnLFxuXHQnLnZlLWluaXQtbXctZGlmZlBhZ2UtZGlmZicsXG5cdC8vIERpZmZcblx0Jy5kaWZmLWNvbnRleHQnLFxuXHQnLmRpZmYtYWRkZWRsaW5lJyxcblx0Jy5kaWZmLWRlbGV0ZWRsaW5lJyxcblx0Ly8gRGlmZiAoaW5saW5lIG1vZGUpXG5cdCcubXctZGlmZi1pbmxpbmUtYWRkZWQnLFxuXHQnLm13LWRpZmYtaW5saW5lLWRlbGV0ZWQnLFxuXHQnLm13LWRpZmYtaW5saW5lLW1vdmVkJyxcblx0Jy5tdy1kaWZmLWlubGluZS1jaGFuZ2VkJyxcblx0Jy5tdy1kaWZmLWlubGluZS1jb250ZXh0Jyxcbl07XG5cbi8vIEZJWE1FOiBVc2UgOmlzKCkgaW4gdGhlIGZ1dHVyZSBvbmNlIGl0IGhhcyBiZXR0ZXIgYnJvd3NlciBjb21wYXRpYmlsaXR5XG5jb25zdCBTRUxFQ1RPUjogc3RyaW5nID0gU0VMRUNUT1JfQUxMT1dFRC5tYXAoKGFsbG93ZWQ6IHN0cmluZyk6IHN0cmluZyA9PiB7XG5cdHJldHVybiBgJHthbGxvd2VkfTpub3QoJHtTRUxFQ1RPUl9CTE9DS0VELmZsYXRNYXAoKGJsb2NrZWQ6IHN0cmluZyk6IHN0cmluZyB8IHN0cmluZ1tdID0+IHtcblx0XHQvLyBOb3QgaW5jbHVkZSBpdHNlbGYgaWYgaXQgaXMgYSB0YWcgc2VsZWN0b3Jcblx0XHRyZXR1cm4gKGJsb2NrZWRbMF0gYXMgc3RyaW5nKS5tYXRjaCgvW2Etel0vaSkgPyBgJHtibG9ja2VkfSAqYCA6IFtibG9ja2VkLCBgJHtibG9ja2VkfSAqYF07XG5cdH0pLmpvaW4oJywnKX0pYDtcbn0pLmpvaW4oJywnKTtcblxuY29uc3QgZ2V0TGVhZkVsZW1lbnRzID0gKHBhcmVudDogSFRNTEVsZW1lbnQpOiBIVE1MRWxlbWVudFtdID0+IHtcblx0Y29uc3QgY2FuZGlkYXRlczogTm9kZUxpc3RPZjxIVE1MRWxlbWVudD4gPSBwYXJlbnQucXVlcnlTZWxlY3RvckFsbChTRUxFQ1RPUik7XG5cdGNvbnN0IHJlc3VsdDogSFRNTEVsZW1lbnRbXSA9IFtdO1xuXG5cdGlmIChwYXJlbnQubWF0Y2hlcyhTRUxFQ1RPUikpIHtcblx0XHRyZXN1bHRbcmVzdWx0Lmxlbmd0aF0gPSBwYXJlbnQ7IC8vIFJlcGxhY2UgQXJyYXkjcHVzaCB0byBhdm9pZCBjb3JlLWpzIHBvbHlmaWxsaW5nXG5cdH1cblxuXHRmb3IgKGNvbnN0IGNhbmRpZGF0ZSBvZiBjYW5kaWRhdGVzKSB7XG5cdFx0Zm9yIChjb25zdCBjaGlsZE5vZGUgb2YgY2FuZGlkYXRlLmNoaWxkTm9kZXMpIHtcblx0XHRcdGlmIChpc1RleHROb2RlKGNoaWxkTm9kZSkpIHtcblx0XHRcdFx0cmVzdWx0W3Jlc3VsdC5sZW5ndGhdID0gY2FuZGlkYXRlOyAvLyBSZXBsYWNlIEFycmF5I3B1c2ggdG8gYXZvaWQgY29yZS1qcyBwb2x5ZmlsbGluZ1xuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gcmVzdWx0O1xufTtcblxuY29uc3QgZ2V0TmV4dFZpc2libGVTaWJsaW5nID0gKG5vZGU6IE5vZGUpOiBIVE1MRWxlbWVudCB8IFRleHQgfCBudWxsID0+IHtcblx0bGV0IGN1cnJlbnROb2RlOiBOb2RlID0gbm9kZTtcblxuXHQvLyBVc2UgbG9vcHMgcmF0aGVyIHRoYW4gcmVjdXJzaW9uIGZvciBiZXR0ZXIgcGVyZm9ybWFuY2Vcblx0d2hpbGUgKHRydWUpIHtcblx0XHRjb25zdCBjYW5kaWRhdGU6IENoaWxkTm9kZSB8IG51bGwgPSBjdXJyZW50Tm9kZS5uZXh0U2libGluZztcblxuXHRcdGlmICghY2FuZGlkYXRlKSB7XG5cdFx0XHRjb25zdCBwYXJlbnQ6IEhUTUxFbGVtZW50IHwgbnVsbCA9IGN1cnJlbnROb2RlLnBhcmVudEVsZW1lbnQ7XG5cdFx0XHRpZiAoIXBhcmVudCkge1xuXHRcdFx0XHQvLyBQYXJlbnQgaXMgRG9jdW1lbnQsIHNvIG5vIHZpc2libGUgc2libGluZ1xuXHRcdFx0XHRyZXR1cm4gbnVsbDtcblx0XHRcdH1cblx0XHRcdC8vIEJ1YmJsZSB1cCB0byBpdHMgcGFyZW50IGFuZCBnZXQgaXRzIHNpYmxpbmdcblx0XHRcdGN1cnJlbnROb2RlID0gcGFyZW50O1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0aWYgKCEoY2FuZGlkYXRlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgfHwgY2FuZGlkYXRlIGluc3RhbmNlb2YgVGV4dCkpIHtcblx0XHRcdC8vIENvbW1lbnRzLCBTVkdzLCBldGMuOiBnZXQgaXRzIHNpYmxpbmcgYXMgcmVzdWx0XG5cdFx0XHRjdXJyZW50Tm9kZSA9IGNhbmRpZGF0ZTtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGlmIChjYW5kaWRhdGUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuXHRcdFx0aWYgKCFpc1Zpc2libGUoY2FuZGlkYXRlKSkge1xuXHRcdFx0XHQvLyBJbnZpc2libGU6IHJlY3Vyc2l2ZWx5IGdldCB0aGlzIGVsZW1lbnQncyBuZXh0IHNpYmxpbmdcblx0XHRcdFx0Y3VycmVudE5vZGUgPSBjYW5kaWRhdGU7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIWlzSW5saW5lSFRNTEVsZW1lbnQoY2FuZGlkYXRlKSkge1xuXHRcdFx0XHQvLyBOZXh0IHNpYmxpbmcgaXMgbm90IGlubGluZSAoYXQgbmV4dCBsaW5lKSwgc28gbm8gc2libGluZ3Ncblx0XHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKGNhbmRpZGF0ZSBpbnN0YW5jZW9mIFRleHQgJiYgIWNhbmRpZGF0ZS5kYXRhLnRyaW0oKSkge1xuXHRcdFx0Ly8gU2tpcCBlbXB0eSBUZXh0IG5vZGVzIChlLmcuIGxpbmUgYnJlYWtzKVxuXHRcdFx0Y3VycmVudE5vZGUgPSBjYW5kaWRhdGU7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gY2FuZGlkYXRlO1xuXHR9XG59O1xuXG5jb25zdCBjcmVhdGVTcGFjaW5nV3JhcHBlciA9IChzdHI6IHN0cmluZyk6IFtzdHJpbmcsIEhUTUxTcGFuRWxlbWVudF0gPT4ge1xuXHRjb25zdCBzcGFuOiBIVE1MU3BhbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5cdC8vIE1lc3NhZ2VzIHRoYXQgY2FuIGJlIHVzZWQgaGVyZTpcblx0Ly8gKiBzZWUgYWJvdmUgY29kZVxuXHQvLyAqIGZvciBtb3JlIGluZm9ybWF0aW9uXG5cdHNwYW4uY2xhc3NOYW1lID0gV1JBUFBFUl9DTEFTUztcblx0c3Bhbi50ZXh0Q29udGVudCA9IHN0ci5zbGljZSgtMSk7XG5cblx0cmV0dXJuIFtzdHIuc2xpY2UoMCwgLTEpLCBzcGFuXTtcbn07XG5cbmNvbnN0IGFkanVzdFNwYWNpbmcgPSAoZWxlbWVudDogSFRNTEVsZW1lbnQpOiB2b2lkID0+IHtcblx0Ly8gRnJlZXplIE5vZGVMaXN0IGluIGFkdmFuY2Vcblx0Y29uc3QgY2hpbGROb2RlczogQ2hpbGROb2RlW10gPSBbLi4uZWxlbWVudC5jaGlsZE5vZGVzXTtcblx0Y29uc3QgdGV4dFNwYWNpbmdQb3NNYXA6IE1hcDxUZXh0LCBudW1iZXJbXT4gPSBuZXcgTWFwPFRleHQsIG51bWJlcltdPigpO1xuXG5cdGZvciAoY29uc3QgY2hpbGQgb2YgY2hpbGROb2Rlcykge1xuXHRcdGlmICghKGNoaWxkIGluc3RhbmNlb2YgVGV4dCkpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGNvbnN0IG5leHRTaWJsaW5nOiBIVE1MRWxlbWVudCB8IFRleHQgfCBudWxsID0gZ2V0TmV4dFZpc2libGVTaWJsaW5nKGNoaWxkKTtcblxuXHRcdGxldCB0ZXN0U3RyaW5nOiBzdHJpbmcgPSBnZXROb2RlVGV4dChjaGlsZCk7XG5cdFx0aWYgKG5leHRTaWJsaW5nKSB7XG5cdFx0XHQvLyBBcHBlbmQgZmlyc3QgY2hhcmFjdGVyIHRvIGRldGVjdCBzY3JpcHQgaW50ZXJzZWN0aW9uXG5cdFx0XHR0ZXN0U3RyaW5nICs9IGdldE5vZGVUZXh0KG5leHRTaWJsaW5nKVswXSA/PyAnJztcblx0XHR9XG5cblx0XHRjb25zdCBpbmRleGVzOiBudW1iZXJbXSA9IFtdO1xuXHRcdC8vIEdsb2JhbCByZWdleHBzIGFyZSBzdGF0ZWZ1bCBzbyBkbyBpbml0aWFsaXphdGlvbiBpbiBlYWNoIGxvb3Bcblx0XHRjb25zdCByZWdleFRleHROb2RlRGF0YTogUmVnRXhwID0gbmV3IFJlZ0V4cChSRUdFWF9TVFJfSU5URVJfU0NSSVBULCAnZycpO1xuXG5cdFx0d2hpbGUgKHRydWUpIHtcblx0XHRcdGNvbnN0IG1hdGNoOiBSZWdFeHBFeGVjQXJyYXkgfCBudWxsID0gcmVnZXhUZXh0Tm9kZURhdGEuZXhlYyh0ZXN0U3RyaW5nKTtcblx0XHRcdGlmICghbWF0Y2gpIHtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0XHRpbmRleGVzW2luZGV4ZXMubGVuZ3RoXSA9IG1hdGNoLmluZGV4ICsgMTsgLy8gUmVwbGFjZSBBcnJheSNwdXNoIHRvIGF2b2lkIGNvcmUtanMgcG9seWZpbGxpbmdcblx0XHR9XG5cblx0XHRpZiAoIWluZGV4ZXMubGVuZ3RoKSB7XG5cdFx0XHQvLyBPcHRpbWl6YXRpb246IHNraXAgZnVydGhlciBzdGVwc1xuXHRcdFx0Ly8gQWxzbyBwcmV2ZW50IHVubmVjZXNzYXJ5IG11dGF0aW9uLCB3aGljaCB3aWxsIGJlIGRldGVjdGVkIGJ5IE11dGF0aW9uT2JzZXJ2ZXIsXG5cdFx0XHQvLyByZXN1bHRpbmcgaW4gaW5maW5pdGUgbG9vcHNcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdHRleHRTcGFjaW5nUG9zTWFwLnNldChjaGlsZCwgaW5kZXhlcyk7XG5cdH1cblxuXHQvLyBTY2hlZHVsZSBET00gbXV0YXRpb24gdG8gcHJldmVudCBmb3JjZWQgcmVmbG93c1xuXHRxdWV1ZURvbU11dGF0aW9uKGVsZW1lbnQsICgpOiB2b2lkID0+IHtcblx0XHRmb3IgKGNvbnN0IFtub2RlLCBpbmRleGVzXSBvZiB0ZXh0U3BhY2luZ1Bvc01hcCkge1xuXHRcdFx0Y29uc3QgdGV4dDogc3RyaW5nID0gbm9kZS5kYXRhO1xuXHRcdFx0Y29uc3QgZnJhZ21lbnRzOiBzdHJpbmdbXSA9IHNwbGl0QXRJbmRleGVzKHRleHQsIGluZGV4ZXMpO1xuXG5cdFx0XHRjb25zdCByZXBsYWNlbWVudDogKHN0cmluZyB8IEhUTUxTcGFuRWxlbWVudClbXSA9IGZyYWdtZW50c1xuXHRcdFx0XHQuc2xpY2UoMCwgLTEpXG5cdFx0XHRcdC5mbGF0TWFwKChmcmFnbWVudDogc3RyaW5nKTogW3N0cmluZywgSFRNTFNwYW5FbGVtZW50XSA9PiB7XG5cdFx0XHRcdFx0cmV0dXJuIGNyZWF0ZVNwYWNpbmdXcmFwcGVyKGZyYWdtZW50KTtcblx0XHRcdFx0fSk7XG5cdFx0XHRyZXBsYWNlbWVudFtyZXBsYWNlbWVudC5sZW5ndGhdID0gZnJhZ21lbnRzLmF0KC0xKSBhcyBzdHJpbmc7IC8vIFJlcGxhY2UgQXJyYXkjcHVzaCB0byBhdm9pZCBjb3JlLWpzIHBvbHlmaWxsaW5nXG5cblx0XHRcdC8vIE9wdGltaXphdGlvbjogcHJldmVudCBmb3JjZWQgcmVmbG93c1xuXHRcdFx0cmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcblx0XHRcdFx0bm9kZS5yZXBsYWNlV2l0aCguLi5yZXBsYWNlbWVudCk7XG5cdFx0XHR9KTtcblx0XHR9XG5cdH0pO1xufTtcblxuY29uc3QgYWRkU3BhY2VUb1N0cmluZyA9IChzdHI6IHN0cmluZyk6IHN0cmluZyA9PiB7XG5cdGNvbnN0IHJlZ2V4OiBSZWdFeHAgPSBuZXcgUmVnRXhwKFJFR0VYX1NUUl9JTlRFUl9TQ1JJUFQsICdnJyk7XG5cblx0cmV0dXJuIHN0ci5yZXBsYWNlKHJlZ2V4LCBgJDEkMiR7U1BBQ0V9YCk7XG59O1xuXG5leHBvcnQge2dldExlYWZFbGVtZW50cywgYWRqdXN0U3BhY2luZywgYWRkU3BhY2VUb1N0cmluZywgV1JBUFBFUl9DTEFTU307XG4iLCAiY29uc3Qgc3VwcG9ydHNUZXh0QXV0b3NwYWNlID0gKCk6IGJvb2xlYW4gPT4ge1xuXHRpZiAodHlwZW9mIENTUyAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIENTUy5zdXBwb3J0cyA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdGlmIChDU1Muc3VwcG9ydHMoJ3RleHQtYXV0b3NwYWNlJywgJ25vcm1hbCcpKSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cdHJldHVybiBmYWxzZTtcbn07XG5cbmV4cG9ydCB7c3VwcG9ydHNUZXh0QXV0b3NwYWNlfTtcbiIsICJpbXBvcnQgJy4vVGV4dFNwYWNpbmcubGVzcyc7XG5pbXBvcnQge1dSQVBQRVJfQ0xBU1MsIGFkZFNwYWNlVG9TdHJpbmcsIGFkanVzdFNwYWNpbmcsIGdldExlYWZFbGVtZW50c30gZnJvbSAnLi9tb2R1bGVzL3NwYWNpbmcnO1xuaW1wb3J0IHtzdXBwb3J0c1RleHRBdXRvc3BhY2V9IGZyb20gJy4vbW9kdWxlcy9zdXBwb3J0c1RleHRBdXRvc3BhY2UnO1xuXG5jb25zdCBydW4gPSAoZWxlbWVudDogSFRNTEVsZW1lbnQpOiB2b2lkID0+IHtcblx0Y29uc3QgbGVhdmVzOiBIVE1MRWxlbWVudFtdID0gZ2V0TGVhZkVsZW1lbnRzKGVsZW1lbnQpO1xuXHRmb3IgKGNvbnN0IGxlYWYgb2YgbGVhdmVzKSB7XG5cdFx0YWRqdXN0U3BhY2luZyhsZWFmKTtcblx0fVxufTtcblxuY29uc3QgbXV0YXRpb25PYnNlcnZlcjogTXV0YXRpb25PYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKChyZWNvcmRzOiBNdXRhdGlvblJlY29yZFtdKTogdm9pZCA9PiB7XG5cdGZvciAoY29uc3QgcmVjb3JkIG9mIHJlY29yZHMpIHtcblx0XHRpZiAocmVjb3JkLnR5cGUgIT09ICdjaGlsZExpc3QnKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRjb25zdCBhZGRlZE5vZGVzOiBOb2RlW10gPSBbLi4ucmVjb3JkLmFkZGVkTm9kZXNdO1xuXG5cdFx0Ly8gRXhjbHVkZSBtdXRhdGlvbnMgY2F1c2VkIGJ5IGFkanVzdFNwYWNpbmcoKSB0byBwcmV2ZW50IGluZmluaXRlIGxvb3BzXG5cdFx0Ly8gVHlwaWNhbGx5IHRoZXkgd2lsbCBjb250YWluIG5vZGVzIHdpdGggY2xhc3MgV1JBUFBFUl9DTEFTU1xuXHRcdGlmIChcblx0XHRcdGFkZGVkTm9kZXMuc29tZSgobm9kZTogTm9kZSk6IGJvb2xlYW4gPT4ge1xuXHRcdFx0XHRyZXR1cm4gbm9kZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50ICYmIG5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKFdSQVBQRVJfQ0xBU1MpO1xuXHRcdFx0fSlcblx0XHQpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGZvciAoY29uc3Qgbm9kZSBvZiBhZGRlZE5vZGVzKSB7XG5cdFx0XHRpZiAobm9kZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG5cdFx0XHRcdHJ1bihub2RlKTtcblx0XHRcdH0gZWxzZSBpZiAobm9kZSBpbnN0YW5jZW9mIFRleHQpIHtcblx0XHRcdFx0Y29uc3Qge3BhcmVudEVsZW1lbnR9ID0gbm9kZTtcblx0XHRcdFx0aWYgKHBhcmVudEVsZW1lbnQpIHtcblx0XHRcdFx0XHRydW4ocGFyZW50RWxlbWVudCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cbn0pO1xuXG5jb25zdCBtYWluID0gKCk6IHZvaWQgPT4ge1xuXHRkb2N1bWVudC50aXRsZSA9IGFkZFNwYWNlVG9TdHJpbmcoZG9jdW1lbnQudGl0bGUpO1xuXHRjb25zdCBvdXRwdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxFbGVtZW50PignLm13LXBhcnNlci1vdXRwdXQnKTtcblx0aWYgKCFvdXRwdXQpIHtcblx0XHRyZXR1cm47XG5cdH1cblx0Ly8gV2F0Y2ggZm9yIGFkZGVkIG5vZGVzXG5cdG11dGF0aW9uT2JzZXJ2ZXIub2JzZXJ2ZShvdXRwdXQsIHtcblx0XHRzdWJ0cmVlOiB0cnVlLFxuXHRcdGNoaWxkTGlzdDogdHJ1ZSxcblx0fSk7XG5cdHJ1bihvdXRwdXQpO1xufTtcblxuaWYgKHN1cHBvcnRzVGV4dEF1dG9zcGFjZSgpKSB7XG5cdGNvbnNvbGUuaW5mbygnW1RleHRTcGFjaW5nXSB0ZXh0LWF1dG9zcGFjZSBpcyBzdXBwb3J0ZWQgbmF0aXZlbHk7IG5vIG5lZWQgdG8gcnVuIHRoZSBzY3JpcHQuJyk7XG59IGVsc2Uge1xuXHQkKG1haW4pO1xufVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxvQkFBMEJDLFFBQUEsaUJBQUE7QUFFMUIsSUFBTUMsc0JBQXVCQyxVQUFvQztBQUNoRSxTQUFPQSxnQkFBZ0JDLGVBQWVD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QyxlQUFlRCxLQUFLb0osVUFBVUMsU0FBUzVFLGFBQWE7TUFDNUUsQ0FBQyxHQUNBO0FBQ0Q7TUFDRDtBQUVBLGVBQUE2RSxNQUFBLEdBQUFDLGNBQW1CTCxZQUFBSSxNQUFBQyxZQUFBeEgsUUFBQXVILE9BQVk7QUFBL0IsY0FBV3RKLE9BQUF1SixZQUFBRCxHQUFBO0FBQ1YsWUFBSXRKLGdCQUFnQkMsYUFBYTtBQUNoQ3FJLGNBQUl0SSxJQUFJO1FBQ1QsV0FBV0EsZ0JBQWdCbUcsTUFBTTtBQUNoQyxnQkFBTTtZQUFDRDtVQUFhLElBQUlsRztBQUN4QixjQUFJa0csZUFBZTtBQUNsQm9DLGdCQUFJcEMsYUFBYTtVQUNsQjtRQUNEO01BQ0Q7SUFDRDtFQUFBLFNBQUE3QyxLQUFBO0FBQUF5RixlQUFBeEYsRUFBQUQsR0FBQTtFQUFBLFVBQUE7QUFBQXlGLGVBQUF2RixFQUFBO0VBQUE7QUFDRCxDQUFDO0FBRUQsSUFBTWlHLE9BQU9BLE1BQVk7QUFDeEJqRCxXQUFTa0QsUUFBUXpCLGlCQUFpQnpCLFNBQVNrRCxLQUFLO0FBQ2hELFFBQU1DLFNBQVNuRCxTQUFTb0QsY0FBMkIsbUJBQW1CO0FBQ3RFLE1BQUksQ0FBQ0QsUUFBUTtBQUNaO0VBQ0Q7QUFFQWYsbUJBQWlCL0UsUUFBUThGLFFBQVE7SUFDaENFLFNBQVM7SUFDVEMsV0FBVztFQUNaLENBQUM7QUFDRHZCLE1BQUlvQixNQUFNO0FBQ1g7QUFFQSxJQUFJdkIsc0JBQXNCLEdBQUc7QUFDNUIyQixVQUFRQyxLQUFLLGdGQUFnRjtBQUM5RixPQUFPO0FBQ05DLElBQUVSLElBQUk7QUFDUDsiLAogICJuYW1lcyI6IFsiaW1wb3J0X2V4dF9nYWRnZXQiLCAicmVxdWlyZSIsICJpc0lubGluZUhUTUxFbGVtZW50IiwgIm5vZGUiLCAiSFRNTEVsZW1lbnQiLCAid2luZG93IiwgImdldENvbXB1dGVkU3R5bGUiLCAiZGlzcGxheSIsICJpbmNsdWRlcyIsICJpc1RleHROb2RlIiwgIm5vZGVUeXBlIiwgIk5vZGUiLCAiVEVYVF9OT0RFIiwgImlzVmlzaWJsZSIsICJlbGVtZW50IiwgInN0eWxlIiwgInZpc2liaWxpdHkiLCAiTnVtYmVyIiwgInBhcnNlRmxvYXQiLCAib3BhY2l0eSIsICJnZXROb2RlVGV4dCIsICJpbm5lclRleHQiLCAiZGF0YSIsICJzcGxpdEF0SW5kZXhlcyIsICJzdHIiLCAiaW5kZXhlcyIsICJyZXN1bHQiLCAibm9ybWFsaXplZEluZGV4ZXMiLCAidW5pcXVlQXJyYXkiLCAic29ydCIsICJhIiwgImIiLCAiZmlsdGVyIiwgImkiLCAibGVuZ3RoIiwgInNsaWNlIiwgInBlbmRpbmdBY3Rpb25zIiwgIldlYWtNYXAiLCAib25JbnRlcnNlY3Rpb24iLCAiZW50cmllcyIsICJfaXRlcmF0b3IiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAiX3N0ZXAiLCAicyIsICJuIiwgImRvbmUiLCAiZW50cnkiLCAidmFsdWUiLCAiaXNJbnRlcnNlY3RpbmciLCAidGFyZ2V0IiwgIm9ic2VydmVyIiwgInVub2JzZXJ2ZSIsICJjYWxsYmFja3MiLCAiZ2V0IiwgImNhbGxiYWNrIiwgInNoaWZ0IiwgImVyciIsICJlIiwgImYiLCAiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCAicXVldWVEb21NdXRhdGlvbiIsICJoYXMiLCAic2V0IiwgIm9ic2VydmUiLCAiUkVHRVhfUkFOR0VfQ0hJTkVTRSIsICJTdHJpbmciLCAicmF3IiwgIl90ZW1wbGF0ZU9iamVjdCIsICJfdGFnZ2VkVGVtcGxhdGVMaXRlcmFsIiwgIlJFR0VYX1JBTkdFX09USEVSX0xFRlQiLCAiX3RlbXBsYXRlT2JqZWN0MiIsICJSRUdFWF9SQU5HRV9PVEhFUl9SSUdIVCIsICJfdGVtcGxhdGVPYmplY3QzIiwgIlJFR0VYX1NUUl9JTlRFUl9TQ1JJUFQiLCAiY29uY2F0IiwgIlNQQUNFIiwgIldSQVBQRVJfQ0xBU1MiLCAiU0VMRUNUT1JfQUxMT1dFRCIsICJTRUxFQ1RPUl9CTE9DS0VEIiwgIlNFTEVDVE9SIiwgIm1hcCIsICJhbGxvd2VkIiwgImZsYXRNYXAiLCAiYmxvY2tlZCIsICJtYXRjaCIsICJqb2luIiwgImdldExlYWZFbGVtZW50cyIsICJwYXJlbnQiLCAiY2FuZGlkYXRlcyIsICJxdWVyeVNlbGVjdG9yQWxsIiwgIm1hdGNoZXMiLCAiX2l0ZXJhdG9yMiIsICJfc3RlcDIiLCAiY2FuZGlkYXRlIiwgIl9pdGVyYXRvcjMiLCAiY2hpbGROb2RlcyIsICJfc3RlcDMiLCAiY2hpbGROb2RlIiwgImdldE5leHRWaXNpYmxlU2libGluZyIsICJjdXJyZW50Tm9kZSIsICJuZXh0U2libGluZyIsICJwYXJlbnRFbGVtZW50IiwgIlRleHQiLCAidHJpbSIsICJjcmVhdGVTcGFjaW5nV3JhcHBlciIsICJzcGFuIiwgImRvY3VtZW50IiwgImNyZWF0ZUVsZW1lbnQiLCAiY2xhc3NOYW1lIiwgInRleHRDb250ZW50IiwgImFkanVzdFNwYWNpbmciLCAidGV4dFNwYWNpbmdQb3NNYXAiLCAiTWFwIiwgIl9pIiwgIl9jaGlsZE5vZGVzIiwgImNoaWxkIiwgInRlc3RTdHJpbmciLCAiX2dldE5vZGVUZXh0JCIsICJyZWdleFRleHROb2RlRGF0YSIsICJSZWdFeHAiLCAiZXhlYyIsICJpbmRleCIsICJfaXRlcmF0b3I0IiwgIl9zdGVwNCIsICJ0ZXh0IiwgImZyYWdtZW50cyIsICJyZXBsYWNlbWVudCIsICJmcmFnbWVudCIsICJhdCIsICJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCAicmVwbGFjZVdpdGgiLCAiYWRkU3BhY2VUb1N0cmluZyIsICJyZWdleCIsICJyZXBsYWNlIiwgInN1cHBvcnRzVGV4dEF1dG9zcGFjZSIsICJDU1MiLCAic3VwcG9ydHMiLCAicnVuIiwgImxlYXZlcyIsICJfaXRlcmF0b3I1IiwgIl9zdGVwNSIsICJsZWFmIiwgIm11dGF0aW9uT2JzZXJ2ZXIiLCAiTXV0YXRpb25PYnNlcnZlciIsICJyZWNvcmRzIiwgIl9pdGVyYXRvcjYiLCAiX3N0ZXA2IiwgInJlY29yZCIsICJ0eXBlIiwgImFkZGVkTm9kZXMiLCAic29tZSIsICJjbGFzc0xpc3QiLCAiY29udGFpbnMiLCAiX2kyIiwgIl9hZGRlZE5vZGVzIiwgIm1haW4iLCAidGl0bGUiLCAib3V0cHV0IiwgInF1ZXJ5U2VsZWN0b3IiLCAic3VidHJlZSIsICJjaGlsZExpc3QiLCAiY29uc29sZSIsICJpbmZvIiwgIiQiXQp9Cg==

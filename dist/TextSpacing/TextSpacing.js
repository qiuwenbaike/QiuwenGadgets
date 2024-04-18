/**
 * SPDX-License-Identifier: BSD-3-Clause
 * _addText: '{{Gadget Header|license=BSD}}'
 *
 * @base {@link https://github.com/diskdance/gadget-text-spacing}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/TextSpacing}
 * @license BSD-3-Clause {@link https://github.com/diskdance/gadget-text-spacing/blob/main/LICENSE}
 */

/**
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
var __getOwnPropNames = Object.getOwnPropertyNames;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};

// node_modules/.pnpm/@mrhenry+core-web@1.2.2/node_modules/@mrhenry/core-web/modules/IntersectionObserver.js
var require_IntersectionObserver = __commonJS({
  "node_modules/.pnpm/@mrhenry+core-web@1.2.2/node_modules/@mrhenry/core-web/modules/IntersectionObserver.js"() {
    (function(undefined) {
      if (!("IntersectionObserver" in window && "IntersectionObserverEntry" in window && "intersectionRatio" in window.IntersectionObserverEntry.prototype)) {
        (function(window2, document2) {
          "use strict";
          var supportedNatively = "IntersectionObserver" in window2 && "IntersectionObserverEntry" in window2 && "intersectionRatio" in window2.IntersectionObserverEntry.prototype;
          if (supportedNatively) {
            return;
          }
          var registry = [];
          function IntersectionObserverEntry(entry) {
            this.time = entry.time;
            this.target = entry.target;
            this.rootBounds = entry.rootBounds;
            this.boundingClientRect = entry.boundingClientRect;
            this.intersectionRect = entry.intersectionRect || getEmptyRect();
            try {
              this.isIntersecting = !!entry.intersectionRect;
            } catch (err) {
            }
            var targetRect = this.boundingClientRect;
            var targetArea = targetRect.width * targetRect.height;
            var intersectionRect = this.intersectionRect;
            var intersectionArea = intersectionRect.width * intersectionRect.height;
            if (targetArea) {
              this.intersectionRatio = Number((intersectionArea / targetArea).toFixed(4));
            } else {
              this.intersectionRatio = this.isIntersecting ? 1 : 0;
            }
          }
          IntersectionObserverEntry.prototype.intersectionRatio = 0;
          function IntersectionObserver2(callback, opt_options) {
            var options = opt_options || {};
            if (typeof callback != "function") {
              throw new Error("callback must be a function");
            }
            if (options.root && options.root.nodeType != 1) {
              throw new Error("root must be an Element");
            }
            this._checkForIntersections = throttle(
              this._checkForIntersections.bind(this),
              this.THROTTLE_TIMEOUT
            );
            this._callback = callback;
            this._observationTargets = [];
            this._queuedEntries = [];
            this._rootMarginValues = this._parseRootMargin(options.rootMargin);
            this.thresholds = this._initThresholds(options.threshold);
            this.root = options.root || null;
            this.rootMargin = this._rootMarginValues.map(function(margin) {
              return margin.value + margin.unit;
            }).join(" ");
          }
          IntersectionObserver2.prototype.THROTTLE_TIMEOUT = 100;
          IntersectionObserver2.prototype.POLL_INTERVAL = null;
          IntersectionObserver2.prototype.USE_MUTATION_OBSERVER = true;
          IntersectionObserver2.prototype.observe = function(target) {
            var isTargetAlreadyObserved = this._observationTargets.some(function(item) {
              return item.element == target;
            });
            if (isTargetAlreadyObserved) {
              return;
            }
            if (!(target && target.nodeType == 1)) {
              throw new Error("target must be an Element");
            }
            this._registerInstance();
            this._observationTargets.push({ element: target, entry: null });
            this._monitorIntersections();
            this._checkForIntersections();
          };
          IntersectionObserver2.prototype.unobserve = function(target) {
            this._observationTargets = this._observationTargets.filter(function(item) {
              return item.element != target;
            });
            if (!this._observationTargets.length) {
              this._unmonitorIntersections();
              this._unregisterInstance();
            }
          };
          IntersectionObserver2.prototype.disconnect = function() {
            this._observationTargets = [];
            this._unmonitorIntersections();
            this._unregisterInstance();
          };
          IntersectionObserver2.prototype.takeRecords = function() {
            var records = this._queuedEntries.slice();
            this._queuedEntries = [];
            return records;
          };
          IntersectionObserver2.prototype._initThresholds = function(opt_threshold) {
            var threshold = opt_threshold || [0];
            if (!Array.isArray(threshold))
              threshold = [threshold];
            return threshold.sort().filter(function(t, i, a) {
              if (typeof t != "number" || isNaN(t) || t < 0 || t > 1) {
                throw new Error("threshold must be a number between 0 and 1 inclusively");
              }
              return t !== a[i - 1];
            });
          };
          IntersectionObserver2.prototype._parseRootMargin = function(opt_rootMargin) {
            var marginString = opt_rootMargin || "0px";
            var margins = marginString.split(/\s+/).map(function(margin) {
              var parts = /^(-?\d*\.?\d+)(px|%)$/.exec(margin);
              if (!parts) {
                throw new Error("rootMargin must be specified in pixels or percent");
              }
              return { value: parseFloat(parts[1]), unit: parts[2] };
            });
            margins[1] = margins[1] || margins[0];
            margins[2] = margins[2] || margins[0];
            margins[3] = margins[3] || margins[1];
            return margins;
          };
          IntersectionObserver2.prototype._monitorIntersections = function() {
            if (!this._monitoringIntersections) {
              this._monitoringIntersections = true;
              if (this.POLL_INTERVAL) {
                this._monitoringInterval = setInterval(
                  this._checkForIntersections,
                  this.POLL_INTERVAL
                );
              } else {
                addEvent(window2, "resize", this._checkForIntersections, true);
                addEvent(document2, "scroll", this._checkForIntersections, true);
                if (this.USE_MUTATION_OBSERVER && "MutationObserver" in window2) {
                  this._domObserver = new MutationObserver(this._checkForIntersections);
                  this._domObserver.observe(document2, {
                    attributes: true,
                    childList: true,
                    characterData: true,
                    subtree: true
                  });
                }
              }
            }
          };
          IntersectionObserver2.prototype._unmonitorIntersections = function() {
            if (this._monitoringIntersections) {
              this._monitoringIntersections = false;
              clearInterval(this._monitoringInterval);
              this._monitoringInterval = null;
              removeEvent(window2, "resize", this._checkForIntersections, true);
              removeEvent(document2, "scroll", this._checkForIntersections, true);
              if (this._domObserver) {
                this._domObserver.disconnect();
                this._domObserver = null;
              }
            }
          };
          IntersectionObserver2.prototype._checkForIntersections = function() {
            var rootIsInDom = this._rootIsInDom();
            var rootRect = rootIsInDom ? this._getRootRect() : getEmptyRect();
            this._observationTargets.forEach(function(item) {
              var target = item.element;
              var targetRect = getBoundingClientRect(target);
              var rootContainsTarget = this._rootContainsTarget(target);
              var oldEntry = item.entry;
              var intersectionRect = rootIsInDom && rootContainsTarget && this._computeTargetAndRootIntersection(target, rootRect);
              var newEntry = item.entry = new IntersectionObserverEntry({
                time: now(),
                target,
                boundingClientRect: targetRect,
                rootBounds: rootRect,
                intersectionRect
              });
              if (!oldEntry) {
                this._queuedEntries.push(newEntry);
              } else if (rootIsInDom && rootContainsTarget) {
                if (this._hasCrossedThreshold(oldEntry, newEntry)) {
                  this._queuedEntries.push(newEntry);
                }
              } else {
                if (oldEntry && oldEntry.isIntersecting) {
                  this._queuedEntries.push(newEntry);
                }
              }
            }, this);
            if (this._queuedEntries.length) {
              this._callback(this.takeRecords(), this);
            }
          };
          IntersectionObserver2.prototype._computeTargetAndRootIntersection = function(target, rootRect) {
            if (window2.getComputedStyle(target).display == "none")
              return;
            var targetRect = getBoundingClientRect(target);
            var intersectionRect = targetRect;
            var parent = getParentNode(target);
            var atRoot = false;
            while (!atRoot) {
              var parentRect = null;
              var parentComputedStyle = parent.nodeType == 1 ? window2.getComputedStyle(parent) : {};
              if (parentComputedStyle.display == "none")
                return;
              if (parent == this.root || parent == document2) {
                atRoot = true;
                parentRect = rootRect;
              } else {
                if (parent != document2.body && parent != document2.documentElement && parentComputedStyle.overflow != "visible") {
                  parentRect = getBoundingClientRect(parent);
                }
              }
              if (parentRect) {
                intersectionRect = computeRectIntersection(parentRect, intersectionRect);
                if (!intersectionRect)
                  break;
              }
              parent = getParentNode(parent);
            }
            return intersectionRect;
          };
          IntersectionObserver2.prototype._getRootRect = function() {
            var rootRect;
            if (this.root) {
              rootRect = getBoundingClientRect(this.root);
            } else {
              var html = document2.documentElement;
              var body = document2.body;
              rootRect = {
                x: 0,
                y: 0,
                top: 0,
                left: 0,
                right: html.clientWidth || body.clientWidth,
                width: html.clientWidth || body.clientWidth,
                bottom: html.clientHeight || body.clientHeight,
                height: html.clientHeight || body.clientHeight
              };
            }
            return this._expandRectByRootMargin(rootRect);
          };
          IntersectionObserver2.prototype._expandRectByRootMargin = function(rect) {
            var margins = this._rootMarginValues.map(function(margin, i) {
              return margin.unit == "px" ? margin.value : margin.value * (i % 2 ? rect.width : rect.height) / 100;
            });
            var newRect = {
              top: rect.top - margins[0],
              right: rect.right + margins[1],
              bottom: rect.bottom + margins[2],
              left: rect.left - margins[3]
            };
            newRect.width = newRect.right - newRect.left;
            newRect.height = newRect.bottom - newRect.top;
            newRect.x = newRect.left;
            newRect.y = newRect.top;
            return newRect;
          };
          IntersectionObserver2.prototype._hasCrossedThreshold = function(oldEntry, newEntry) {
            var oldRatio = oldEntry && oldEntry.isIntersecting ? oldEntry.intersectionRatio || 0 : -1;
            var newRatio = newEntry.isIntersecting ? newEntry.intersectionRatio || 0 : -1;
            if (oldRatio === newRatio)
              return;
            for (var i = 0; i < this.thresholds.length; i++) {
              var threshold = this.thresholds[i];
              if (threshold == oldRatio || threshold == newRatio || threshold < oldRatio !== threshold < newRatio) {
                return true;
              }
            }
          };
          IntersectionObserver2.prototype._rootIsInDom = function() {
            return !this.root || containsDeep(document2, this.root);
          };
          IntersectionObserver2.prototype._rootContainsTarget = function(target) {
            return containsDeep(this.root || document2, target);
          };
          IntersectionObserver2.prototype._registerInstance = function() {
            if (registry.indexOf(this) < 0) {
              registry.push(this);
            }
          };
          IntersectionObserver2.prototype._unregisterInstance = function() {
            var index = registry.indexOf(this);
            if (index != -1)
              registry.splice(index, 1);
          };
          function now() {
            return window2.performance && performance.now && performance.now();
          }
          function throttle(fn, timeout) {
            var timer = null;
            return function() {
              if (!timer) {
                timer = setTimeout(function() {
                  fn();
                  timer = null;
                }, timeout);
              }
            };
          }
          function addEvent(node, event, fn, opt_useCapture) {
            if (typeof node.addEventListener == "function") {
              node.addEventListener(event, fn, opt_useCapture || false);
            } else if (typeof node.attachEvent == "function") {
              node.attachEvent("on" + event, fn);
            }
          }
          function removeEvent(node, event, fn, opt_useCapture) {
            if (typeof node.removeEventListener == "function") {
              node.removeEventListener(event, fn, opt_useCapture || false);
            } else if (typeof node.detatchEvent == "function") {
              node.detatchEvent("on" + event, fn);
            }
          }
          function computeRectIntersection(rect1, rect2) {
            var top = Math.max(rect1.top, rect2.top);
            var bottom = Math.min(rect1.bottom, rect2.bottom);
            var left = Math.max(rect1.left, rect2.left);
            var right = Math.min(rect1.right, rect2.right);
            var width = right - left;
            var height = bottom - top;
            return width >= 0 && height >= 0 && {
              x: left,
              y: top,
              top,
              bottom,
              left,
              right,
              width,
              height
            };
          }
          function getBoundingClientRect(el) {
            var rect;
            try {
              rect = el.getBoundingClientRect();
            } catch (err) {
            }
            if (!rect)
              return getEmptyRect();
            if (!(rect.width && rect.height && rect.x && rect.y)) {
              rect = {
                x: rect.left,
                y: rect.top,
                top: rect.top,
                right: rect.right,
                bottom: rect.bottom,
                left: rect.left,
                width: rect.right - rect.left,
                height: rect.bottom - rect.top
              };
            }
            return rect;
          }
          function getEmptyRect() {
            return {
              x: 0,
              y: 0,
              top: 0,
              bottom: 0,
              left: 0,
              right: 0,
              width: 0,
              height: 0
            };
          }
          function containsDeep(parent, child) {
            var node = child;
            while (node) {
              if (node == parent)
                return true;
              node = getParentNode(node);
            }
            return false;
          }
          function getParentNode(node) {
            var parent = node.parentNode;
            if (parent && parent.nodeType == 11 && parent.host) {
              return parent.host;
            }
            if (parent && parent.assignedSlot) {
              return parent.assignedSlot.parentNode;
            }
            return parent;
          }
          window2.IntersectionObserver = IntersectionObserver2;
          window2.IntersectionObserverEntry = IntersectionObserverEntry;
        })(window, document);
      }
    }).call("object" === typeof window && window || "object" === typeof self && self || "object" === typeof global && global || {});
  }
});

// dist/TextSpacing/TextSpacing.js
require_IntersectionObserver();
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
//! src/TextSpacing/modules/util.ts
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
    ...new Set(indexes.sort((a, b) => {
      return a - b;
    }).filter((i) => {
      return i >= 0 && i <= str.length;
    })),
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
var REGEX_RANGE_CHINESE = "(?:[\\u2E80-\\u2E99\\u2E9B-\\u2EF3\\u2F00-\\u2FD5\\u3005\\u3007\\u3021-\\u3029\\u3038-\\u303B\\u3400-\\u4DBF\\u4E00-\\u9FFF\\uF900-\\uFA6D\\uFA70-\\uFAD9]|\\uD81B[\\uDFE2\\uDFE3\\uDFF0\\uDFF1]|[\\uD840-\\uD868\\uD86A-\\uD86C\\uD86F-\\uD872\\uD874-\\uD879\\uD880-\\uD883][\\uDC00-\\uDFFF]|\\uD869[\\uDC00-\\uDEDF\\uDF00-\\uDFFF]|\\uD86D[\\uDC00-\\uDF38\\uDF40-\\uDFFF]|\\uD86E[\\uDC00-\\uDC1D\\uDC20-\\uDFFF]|\\uD873[\\uDC00-\\uDEA1\\uDEB0-\\uDFFF]|\\uD87A[\\uDC00-\\uDFE0]|\\uD87E[\\uDC00-\\uDE1D]|\\uD884[\\uDC00-\\uDF4A])";
var REGEX_RANGE_OTHER_LEFT = "[A-Za-z0-9@~%+=|±\\)}#$¥€£₤]";
var REGEX_RANGE_OTHER_RIGHT = "[A-Za-z0-9@~%+=|±\\({#$¥€£₤]";
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
  mutationObserver.observe(document.body, {
    subtree: true,
    childList: true
  });
  run(document.body);
};
$(main);

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibm9kZV9tb2R1bGVzLy5wbnBtL0BtcmhlbnJ5K2NvcmUtd2ViQDEuMi4yL25vZGVfbW9kdWxlcy9AbXJoZW5yeS9jb3JlLXdlYi9tb2R1bGVzL0ludGVyc2VjdGlvbk9ic2VydmVyLmpzIiwgInNyYy9UZXh0U3BhY2luZy9tb2R1bGVzL3V0aWwudHMiLCAic3JjL1RleHRTcGFjaW5nL21vZHVsZXMvcXVldWUudHMiLCAic3JjL1RleHRTcGFjaW5nL21vZHVsZXMvc3BhY2luZy50cyIsICJzcmMvVGV4dFNwYWNpbmcvVGV4dFNwYWNpbmcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIihmdW5jdGlvbih1bmRlZmluZWQpIHtcbmlmICghKFwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcImluIHdpbmRvdyYmXCJJbnRlcnNlY3Rpb25PYnNlcnZlckVudHJ5XCJpbiB3aW5kb3cmJlwiaW50ZXJzZWN0aW9uUmF0aW9cImluIHdpbmRvdy5JbnRlcnNlY3Rpb25PYnNlcnZlckVudHJ5LnByb3RvdHlwZVxuKSkge1xuLy8gSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcbi8qKlxuICogQ29weXJpZ2h0IDIwMTYgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgVzNDIFNPRlRXQVJFIEFORCBET0NVTUVOVCBOT1RJQ0UgQU5EIExJQ0VOU0UuXG4gKlxuICogIGh0dHBzOi8vd3d3LnczLm9yZy9Db25zb3J0aXVtL0xlZ2FsLzIwMTUvY29weXJpZ2h0LXNvZnR3YXJlLWFuZC1kb2N1bWVudFxuICpcbiAqL1xuXG4oZnVuY3Rpb24od2luZG93LCBkb2N1bWVudCkge1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgc3VwcG9ydGVkTmF0aXZlbHkgPSAnSW50ZXJzZWN0aW9uT2JzZXJ2ZXInIGluIHdpbmRvdyAmJlxuJ0ludGVyc2VjdGlvbk9ic2VydmVyRW50cnknIGluIHdpbmRvdyAmJlxuJ2ludGVyc2VjdGlvblJhdGlvJyBpbiB3aW5kb3cuSW50ZXJzZWN0aW9uT2JzZXJ2ZXJFbnRyeS5wcm90b3R5cGU7XG5cbmlmIChzdXBwb3J0ZWROYXRpdmVseSkge1xuXHRyZXR1cm47XG59XG4vKipcbiAqIEFuIEludGVyc2VjdGlvbk9ic2VydmVyIHJlZ2lzdHJ5LiBUaGlzIHJlZ2lzdHJ5IGV4aXN0cyB0byBob2xkIGEgc3Ryb25nXG4gKiByZWZlcmVuY2UgdG8gSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaW5zdGFuY2VzIGN1cnJlbnRseSBvYnNlcnZpbmcgYSB0YXJnZXRcbiAqIGVsZW1lbnQuIFdpdGhvdXQgdGhpcyByZWdpc3RyeSwgaW5zdGFuY2VzIHdpdGhvdXQgYW5vdGhlciByZWZlcmVuY2UgbWF5IGJlXG4gKiBnYXJiYWdlIGNvbGxlY3RlZC5cbiAqL1xudmFyIHJlZ2lzdHJ5ID0gW107XG5cblxuLyoqXG4gKiBDcmVhdGVzIHRoZSBnbG9iYWwgSW50ZXJzZWN0aW9uT2JzZXJ2ZXJFbnRyeSBjb25zdHJ1Y3Rvci5cbiAqIGh0dHBzOi8vdzNjLmdpdGh1Yi5pby9JbnRlcnNlY3Rpb25PYnNlcnZlci8jaW50ZXJzZWN0aW9uLW9ic2VydmVyLWVudHJ5XG4gKiBAcGFyYW0ge09iamVjdH0gZW50cnkgQSBkaWN0aW9uYXJ5IG9mIGluc3RhbmNlIHByb3BlcnRpZXMuXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuZnVuY3Rpb24gSW50ZXJzZWN0aW9uT2JzZXJ2ZXJFbnRyeShlbnRyeSkge1xuXHR0aGlzLnRpbWUgPSBlbnRyeS50aW1lO1xuXHR0aGlzLnRhcmdldCA9IGVudHJ5LnRhcmdldDtcblx0dGhpcy5yb290Qm91bmRzID0gZW50cnkucm9vdEJvdW5kcztcblx0dGhpcy5ib3VuZGluZ0NsaWVudFJlY3QgPSBlbnRyeS5ib3VuZGluZ0NsaWVudFJlY3Q7XG5cdHRoaXMuaW50ZXJzZWN0aW9uUmVjdCA9IGVudHJ5LmludGVyc2VjdGlvblJlY3QgfHwgZ2V0RW1wdHlSZWN0KCk7XG5cdHRyeSB7XG5cdFx0dGhpcy5pc0ludGVyc2VjdGluZyA9ICEhZW50cnkuaW50ZXJzZWN0aW9uUmVjdDtcblx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0Ly8gVGhpcyBtZWFucyB3ZSBhcmUgdXNpbmcgdGhlIEludGVyc2VjdGlvbk9ic2VydmVyRW50cnkgcG9seWZpbGwgd2hpY2ggaGFzIG9ubHkgZGVmaW5lZCBhIGdldHRlclxuXHR9XG5cblx0Ly8gQ2FsY3VsYXRlcyB0aGUgaW50ZXJzZWN0aW9uIHJhdGlvLlxuXHR2YXIgdGFyZ2V0UmVjdCA9IHRoaXMuYm91bmRpbmdDbGllbnRSZWN0O1xuXHR2YXIgdGFyZ2V0QXJlYSA9IHRhcmdldFJlY3Qud2lkdGggKiB0YXJnZXRSZWN0LmhlaWdodDtcblx0dmFyIGludGVyc2VjdGlvblJlY3QgPSB0aGlzLmludGVyc2VjdGlvblJlY3Q7XG5cdHZhciBpbnRlcnNlY3Rpb25BcmVhID0gaW50ZXJzZWN0aW9uUmVjdC53aWR0aCAqIGludGVyc2VjdGlvblJlY3QuaGVpZ2h0O1xuXG5cdC8vIFNldHMgaW50ZXJzZWN0aW9uIHJhdGlvLlxuXHRpZiAodGFyZ2V0QXJlYSkge1xuXHRcdC8vIFJvdW5kIHRoZSBpbnRlcnNlY3Rpb24gcmF0aW8gdG8gYXZvaWQgZmxvYXRpbmcgcG9pbnQgbWF0aCBpc3N1ZXM6XG5cdFx0Ly8gaHR0cHM6Ly9naXRodWIuY29tL3czYy9JbnRlcnNlY3Rpb25PYnNlcnZlci9pc3N1ZXMvMzI0XG5cdFx0dGhpcy5pbnRlcnNlY3Rpb25SYXRpbyA9IE51bWJlcigoaW50ZXJzZWN0aW9uQXJlYSAvIHRhcmdldEFyZWEpLnRvRml4ZWQoNCkpO1xuXHR9IGVsc2Uge1xuXHRcdC8vIElmIGFyZWEgaXMgemVybyBhbmQgaXMgaW50ZXJzZWN0aW5nLCBzZXRzIHRvIDEsIG90aGVyd2lzZSB0byAwXG5cdFx0dGhpcy5pbnRlcnNlY3Rpb25SYXRpbyA9IHRoaXMuaXNJbnRlcnNlY3RpbmcgPyAxIDogMDtcblx0fVxufVxuXG5JbnRlcnNlY3Rpb25PYnNlcnZlckVudHJ5LnByb3RvdHlwZS5pbnRlcnNlY3Rpb25SYXRpbyA9IDA7XG5cbi8qKlxuICogQ3JlYXRlcyB0aGUgZ2xvYmFsIEludGVyc2VjdGlvbk9ic2VydmVyIGNvbnN0cnVjdG9yLlxuICogaHR0cHM6Ly93M2MuZ2l0aHViLmlvL0ludGVyc2VjdGlvbk9ic2VydmVyLyNpbnRlcnNlY3Rpb24tb2JzZXJ2ZXItaW50ZXJmYWNlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayBUaGUgZnVuY3Rpb24gdG8gYmUgaW52b2tlZCBhZnRlciBpbnRlcnNlY3Rpb25cbiAqICAgICBjaGFuZ2VzIGhhdmUgcXVldWVkLiBUaGUgZnVuY3Rpb24gaXMgbm90IGludm9rZWQgaWYgdGhlIHF1ZXVlIGhhc1xuICogICAgIGJlZW4gZW1wdGllZCBieSBjYWxsaW5nIHRoZSBgdGFrZVJlY29yZHNgIG1ldGhvZC5cbiAqIEBwYXJhbSB7T2JqZWN0PX0gb3B0X29wdGlvbnMgT3B0aW9uYWwgY29uZmlndXJhdGlvbiBvcHRpb25zLlxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmZ1bmN0aW9uIEludGVyc2VjdGlvbk9ic2VydmVyKGNhbGxiYWNrLCBvcHRfb3B0aW9ucykge1xuXG5cdHZhciBvcHRpb25zID0gb3B0X29wdGlvbnMgfHwge307XG5cblx0aWYgKHR5cGVvZiBjYWxsYmFjayAhPSAnZnVuY3Rpb24nKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCdjYWxsYmFjayBtdXN0IGJlIGEgZnVuY3Rpb24nKTtcblx0fVxuXG5cdGlmIChvcHRpb25zLnJvb3QgJiYgb3B0aW9ucy5yb290Lm5vZGVUeXBlICE9IDEpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoJ3Jvb3QgbXVzdCBiZSBhbiBFbGVtZW50Jyk7XG5cdH1cblxuXHQvLyBCaW5kcyBhbmQgdGhyb3R0bGVzIGB0aGlzLl9jaGVja0ZvckludGVyc2VjdGlvbnNgLlxuXHR0aGlzLl9jaGVja0ZvckludGVyc2VjdGlvbnMgPSB0aHJvdHRsZShcblx0XHRcdHRoaXMuX2NoZWNrRm9ySW50ZXJzZWN0aW9ucy5iaW5kKHRoaXMpLCB0aGlzLlRIUk9UVExFX1RJTUVPVVQpO1xuXG5cdC8vIFByaXZhdGUgcHJvcGVydGllcy5cblx0dGhpcy5fY2FsbGJhY2sgPSBjYWxsYmFjaztcblx0dGhpcy5fb2JzZXJ2YXRpb25UYXJnZXRzID0gW107XG5cdHRoaXMuX3F1ZXVlZEVudHJpZXMgPSBbXTtcblx0dGhpcy5fcm9vdE1hcmdpblZhbHVlcyA9IHRoaXMuX3BhcnNlUm9vdE1hcmdpbihvcHRpb25zLnJvb3RNYXJnaW4pO1xuXG5cdC8vIFB1YmxpYyBwcm9wZXJ0aWVzLlxuXHR0aGlzLnRocmVzaG9sZHMgPSB0aGlzLl9pbml0VGhyZXNob2xkcyhvcHRpb25zLnRocmVzaG9sZCk7XG5cdHRoaXMucm9vdCA9IG9wdGlvbnMucm9vdCB8fCBudWxsO1xuXHR0aGlzLnJvb3RNYXJnaW4gPSB0aGlzLl9yb290TWFyZ2luVmFsdWVzLm1hcChmdW5jdGlvbihtYXJnaW4pIHtcblx0XHRyZXR1cm4gbWFyZ2luLnZhbHVlICsgbWFyZ2luLnVuaXQ7XG5cdH0pLmpvaW4oJyAnKTtcbn1cblxuXG4vKipcbiAqIFRoZSBtaW5pbXVtIGludGVydmFsIHdpdGhpbiB3aGljaCB0aGUgZG9jdW1lbnQgd2lsbCBiZSBjaGVja2VkIGZvclxuICogaW50ZXJzZWN0aW9uIGNoYW5nZXMuXG4gKi9cbkludGVyc2VjdGlvbk9ic2VydmVyLnByb3RvdHlwZS5USFJPVFRMRV9USU1FT1VUID0gMTAwO1xuXG5cbi8qKlxuICogVGhlIGZyZXF1ZW5jeSBpbiB3aGljaCB0aGUgcG9seWZpbGwgcG9sbHMgZm9yIGludGVyc2VjdGlvbiBjaGFuZ2VzLlxuICogdGhpcyBjYW4gYmUgdXBkYXRlZCBvbiBhIHBlciBpbnN0YW5jZSBiYXNpcyBhbmQgbXVzdCBiZSBzZXQgcHJpb3IgdG9cbiAqIGNhbGxpbmcgYG9ic2VydmVgIG9uIHRoZSBmaXJzdCB0YXJnZXQuXG4gKi9cbkludGVyc2VjdGlvbk9ic2VydmVyLnByb3RvdHlwZS5QT0xMX0lOVEVSVkFMID0gbnVsbDtcblxuLyoqXG4gKiBVc2UgYSBtdXRhdGlvbiBvYnNlcnZlciBvbiB0aGUgcm9vdCBlbGVtZW50XG4gKiB0byBkZXRlY3QgaW50ZXJzZWN0aW9uIGNoYW5nZXMuXG4gKi9cbkludGVyc2VjdGlvbk9ic2VydmVyLnByb3RvdHlwZS5VU0VfTVVUQVRJT05fT0JTRVJWRVIgPSB0cnVlO1xuXG5cbi8qKlxuICogU3RhcnRzIG9ic2VydmluZyBhIHRhcmdldCBlbGVtZW50IGZvciBpbnRlcnNlY3Rpb24gY2hhbmdlcyBiYXNlZCBvblxuICogdGhlIHRocmVzaG9sZHMgdmFsdWVzLlxuICogQHBhcmFtIHtFbGVtZW50fSB0YXJnZXQgVGhlIERPTSBlbGVtZW50IHRvIG9ic2VydmUuXG4gKi9cbkludGVyc2VjdGlvbk9ic2VydmVyLnByb3RvdHlwZS5vYnNlcnZlID0gZnVuY3Rpb24odGFyZ2V0KSB7XG5cdHZhciBpc1RhcmdldEFscmVhZHlPYnNlcnZlZCA9IHRoaXMuX29ic2VydmF0aW9uVGFyZ2V0cy5zb21lKGZ1bmN0aW9uKGl0ZW0pIHtcblx0XHRyZXR1cm4gaXRlbS5lbGVtZW50ID09IHRhcmdldDtcblx0fSk7XG5cblx0aWYgKGlzVGFyZ2V0QWxyZWFkeU9ic2VydmVkKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0aWYgKCEodGFyZ2V0ICYmIHRhcmdldC5ub2RlVHlwZSA9PSAxKSkge1xuXHRcdHRocm93IG5ldyBFcnJvcigndGFyZ2V0IG11c3QgYmUgYW4gRWxlbWVudCcpO1xuXHR9XG5cblx0dGhpcy5fcmVnaXN0ZXJJbnN0YW5jZSgpO1xuXHR0aGlzLl9vYnNlcnZhdGlvblRhcmdldHMucHVzaCh7ZWxlbWVudDogdGFyZ2V0LCBlbnRyeTogbnVsbH0pO1xuXHR0aGlzLl9tb25pdG9ySW50ZXJzZWN0aW9ucygpO1xuXHR0aGlzLl9jaGVja0ZvckludGVyc2VjdGlvbnMoKTtcbn07XG5cblxuLyoqXG4gKiBTdG9wcyBvYnNlcnZpbmcgYSB0YXJnZXQgZWxlbWVudCBmb3IgaW50ZXJzZWN0aW9uIGNoYW5nZXMuXG4gKiBAcGFyYW0ge0VsZW1lbnR9IHRhcmdldCBUaGUgRE9NIGVsZW1lbnQgdG8gb2JzZXJ2ZS5cbiAqL1xuSW50ZXJzZWN0aW9uT2JzZXJ2ZXIucHJvdG90eXBlLnVub2JzZXJ2ZSA9IGZ1bmN0aW9uKHRhcmdldCkge1xuXHR0aGlzLl9vYnNlcnZhdGlvblRhcmdldHMgPVxuXHRcdFx0dGhpcy5fb2JzZXJ2YXRpb25UYXJnZXRzLmZpbHRlcihmdW5jdGlvbihpdGVtKSB7XG5cblx0XHRyZXR1cm4gaXRlbS5lbGVtZW50ICE9IHRhcmdldDtcblx0fSk7XG5cdGlmICghdGhpcy5fb2JzZXJ2YXRpb25UYXJnZXRzLmxlbmd0aCkge1xuXHRcdHRoaXMuX3VubW9uaXRvckludGVyc2VjdGlvbnMoKTtcblx0XHR0aGlzLl91bnJlZ2lzdGVySW5zdGFuY2UoKTtcblx0fVxufTtcblxuXG4vKipcbiAqIFN0b3BzIG9ic2VydmluZyBhbGwgdGFyZ2V0IGVsZW1lbnRzIGZvciBpbnRlcnNlY3Rpb24gY2hhbmdlcy5cbiAqL1xuSW50ZXJzZWN0aW9uT2JzZXJ2ZXIucHJvdG90eXBlLmRpc2Nvbm5lY3QgPSBmdW5jdGlvbigpIHtcblx0dGhpcy5fb2JzZXJ2YXRpb25UYXJnZXRzID0gW107XG5cdHRoaXMuX3VubW9uaXRvckludGVyc2VjdGlvbnMoKTtcblx0dGhpcy5fdW5yZWdpc3Rlckluc3RhbmNlKCk7XG59O1xuXG5cbi8qKlxuICogUmV0dXJucyBhbnkgcXVldWUgZW50cmllcyB0aGF0IGhhdmUgbm90IHlldCBiZWVuIHJlcG9ydGVkIHRvIHRoZVxuICogY2FsbGJhY2sgYW5kIGNsZWFycyB0aGUgcXVldWUuIFRoaXMgY2FuIGJlIHVzZWQgaW4gY29uanVuY3Rpb24gd2l0aCB0aGVcbiAqIGNhbGxiYWNrIHRvIG9idGFpbiB0aGUgYWJzb2x1dGUgbW9zdCB1cC10by1kYXRlIGludGVyc2VjdGlvbiBpbmZvcm1hdGlvbi5cbiAqIEByZXR1cm4ge0FycmF5fSBUaGUgY3VycmVudGx5IHF1ZXVlZCBlbnRyaWVzLlxuICovXG5JbnRlcnNlY3Rpb25PYnNlcnZlci5wcm90b3R5cGUudGFrZVJlY29yZHMgPSBmdW5jdGlvbigpIHtcblx0dmFyIHJlY29yZHMgPSB0aGlzLl9xdWV1ZWRFbnRyaWVzLnNsaWNlKCk7XG5cdHRoaXMuX3F1ZXVlZEVudHJpZXMgPSBbXTtcblx0cmV0dXJuIHJlY29yZHM7XG59O1xuXG5cbi8qKlxuICogQWNjZXB0cyB0aGUgdGhyZXNob2xkIHZhbHVlIGZyb20gdGhlIHVzZXIgY29uZmlndXJhdGlvbiBvYmplY3QgYW5kXG4gKiByZXR1cm5zIGEgc29ydGVkIGFycmF5IG9mIHVuaXF1ZSB0aHJlc2hvbGQgdmFsdWVzLiBJZiBhIHZhbHVlIGlzIG5vdFxuICogYmV0d2VlbiAwIGFuZCAxIGFuZCBlcnJvciBpcyB0aHJvd24uXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheXxudW1iZXI9fSBvcHRfdGhyZXNob2xkIEFuIG9wdGlvbmFsIHRocmVzaG9sZCB2YWx1ZSBvclxuICogICAgIGEgbGlzdCBvZiB0aHJlc2hvbGQgdmFsdWVzLCBkZWZhdWx0aW5nIHRvIFswXS5cbiAqIEByZXR1cm4ge0FycmF5fSBBIHNvcnRlZCBsaXN0IG9mIHVuaXF1ZSBhbmQgdmFsaWQgdGhyZXNob2xkIHZhbHVlcy5cbiAqL1xuSW50ZXJzZWN0aW9uT2JzZXJ2ZXIucHJvdG90eXBlLl9pbml0VGhyZXNob2xkcyA9IGZ1bmN0aW9uKG9wdF90aHJlc2hvbGQpIHtcblx0dmFyIHRocmVzaG9sZCA9IG9wdF90aHJlc2hvbGQgfHwgWzBdO1xuXHRpZiAoIUFycmF5LmlzQXJyYXkodGhyZXNob2xkKSkgdGhyZXNob2xkID0gW3RocmVzaG9sZF07XG5cblx0cmV0dXJuIHRocmVzaG9sZC5zb3J0KCkuZmlsdGVyKGZ1bmN0aW9uKHQsIGksIGEpIHtcblx0XHRpZiAodHlwZW9mIHQgIT0gJ251bWJlcicgfHwgaXNOYU4odCkgfHwgdCA8IDAgfHwgdCA+IDEpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcigndGhyZXNob2xkIG11c3QgYmUgYSBudW1iZXIgYmV0d2VlbiAwIGFuZCAxIGluY2x1c2l2ZWx5Jyk7XG5cdFx0fVxuXHRcdHJldHVybiB0ICE9PSBhW2kgLSAxXTtcblx0fSk7XG59O1xuXG5cbi8qKlxuICogQWNjZXB0cyB0aGUgcm9vdE1hcmdpbiB2YWx1ZSBmcm9tIHRoZSB1c2VyIGNvbmZpZ3VyYXRpb24gb2JqZWN0XG4gKiBhbmQgcmV0dXJucyBhbiBhcnJheSBvZiB0aGUgZm91ciBtYXJnaW4gdmFsdWVzIGFzIGFuIG9iamVjdCBjb250YWluaW5nXG4gKiB0aGUgdmFsdWUgYW5kIHVuaXQgcHJvcGVydGllcy4gSWYgYW55IG9mIHRoZSB2YWx1ZXMgYXJlIG5vdCBwcm9wZXJseVxuICogZm9ybWF0dGVkIG9yIHVzZSBhIHVuaXQgb3RoZXIgdGhhbiBweCBvciAlLCBhbmQgZXJyb3IgaXMgdGhyb3duLlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7c3RyaW5nPX0gb3B0X3Jvb3RNYXJnaW4gQW4gb3B0aW9uYWwgcm9vdE1hcmdpbiB2YWx1ZSxcbiAqICAgICBkZWZhdWx0aW5nIHRvICcwcHgnLlxuICogQHJldHVybiB7QXJyYXk8T2JqZWN0Pn0gQW4gYXJyYXkgb2YgbWFyZ2luIG9iamVjdHMgd2l0aCB0aGUga2V5c1xuICogICAgIHZhbHVlIGFuZCB1bml0LlxuICovXG5JbnRlcnNlY3Rpb25PYnNlcnZlci5wcm90b3R5cGUuX3BhcnNlUm9vdE1hcmdpbiA9IGZ1bmN0aW9uKG9wdF9yb290TWFyZ2luKSB7XG5cdHZhciBtYXJnaW5TdHJpbmcgPSBvcHRfcm9vdE1hcmdpbiB8fCAnMHB4Jztcblx0dmFyIG1hcmdpbnMgPSBtYXJnaW5TdHJpbmcuc3BsaXQoL1xccysvKS5tYXAoZnVuY3Rpb24obWFyZ2luKSB7XG5cdFx0dmFyIHBhcnRzID0gL14oLT9cXGQqXFwuP1xcZCspKHB4fCUpJC8uZXhlYyhtYXJnaW4pO1xuXHRcdGlmICghcGFydHMpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcigncm9vdE1hcmdpbiBtdXN0IGJlIHNwZWNpZmllZCBpbiBwaXhlbHMgb3IgcGVyY2VudCcpO1xuXHRcdH1cblx0XHRyZXR1cm4ge3ZhbHVlOiBwYXJzZUZsb2F0KHBhcnRzWzFdKSwgdW5pdDogcGFydHNbMl19O1xuXHR9KTtcblxuXHQvLyBIYW5kbGVzIHNob3J0aGFuZC5cblx0bWFyZ2luc1sxXSA9IG1hcmdpbnNbMV0gfHwgbWFyZ2luc1swXTtcblx0bWFyZ2luc1syXSA9IG1hcmdpbnNbMl0gfHwgbWFyZ2luc1swXTtcblx0bWFyZ2luc1szXSA9IG1hcmdpbnNbM10gfHwgbWFyZ2luc1sxXTtcblxuXHRyZXR1cm4gbWFyZ2lucztcbn07XG5cblxuLyoqXG4gKiBTdGFydHMgcG9sbGluZyBmb3IgaW50ZXJzZWN0aW9uIGNoYW5nZXMgaWYgdGhlIHBvbGxpbmcgaXMgbm90IGFscmVhZHlcbiAqIGhhcHBlbmluZywgYW5kIGlmIHRoZSBwYWdlJ3MgdmlzaWJpbGl0eSBzdGF0ZSBpcyB2aXNpYmxlLlxuICogQHByaXZhdGVcbiAqL1xuSW50ZXJzZWN0aW9uT2JzZXJ2ZXIucHJvdG90eXBlLl9tb25pdG9ySW50ZXJzZWN0aW9ucyA9IGZ1bmN0aW9uKCkge1xuXHRpZiAoIXRoaXMuX21vbml0b3JpbmdJbnRlcnNlY3Rpb25zKSB7XG5cdFx0dGhpcy5fbW9uaXRvcmluZ0ludGVyc2VjdGlvbnMgPSB0cnVlO1xuXG5cdFx0Ly8gSWYgYSBwb2xsIGludGVydmFsIGlzIHNldCwgdXNlIHBvbGxpbmcgaW5zdGVhZCBvZiBsaXN0ZW5pbmcgdG9cblx0XHQvLyByZXNpemUgYW5kIHNjcm9sbCBldmVudHMgb3IgRE9NIG11dGF0aW9ucy5cblx0XHRpZiAodGhpcy5QT0xMX0lOVEVSVkFMKSB7XG5cdFx0XHR0aGlzLl9tb25pdG9yaW5nSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChcblx0XHRcdFx0XHR0aGlzLl9jaGVja0ZvckludGVyc2VjdGlvbnMsIHRoaXMuUE9MTF9JTlRFUlZBTCk7XG5cdFx0fVxuXHRcdGVsc2Uge1xuXHRcdFx0YWRkRXZlbnQod2luZG93LCAncmVzaXplJywgdGhpcy5fY2hlY2tGb3JJbnRlcnNlY3Rpb25zLCB0cnVlKTtcblx0XHRcdGFkZEV2ZW50KGRvY3VtZW50LCAnc2Nyb2xsJywgdGhpcy5fY2hlY2tGb3JJbnRlcnNlY3Rpb25zLCB0cnVlKTtcblxuXHRcdFx0aWYgKHRoaXMuVVNFX01VVEFUSU9OX09CU0VSVkVSICYmICdNdXRhdGlvbk9ic2VydmVyJyBpbiB3aW5kb3cpIHtcblx0XHRcdFx0dGhpcy5fZG9tT2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcih0aGlzLl9jaGVja0ZvckludGVyc2VjdGlvbnMpO1xuXHRcdFx0XHR0aGlzLl9kb21PYnNlcnZlci5vYnNlcnZlKGRvY3VtZW50LCB7XG5cdFx0XHRcdFx0YXR0cmlidXRlczogdHJ1ZSxcblx0XHRcdFx0XHRjaGlsZExpc3Q6IHRydWUsXG5cdFx0XHRcdFx0Y2hhcmFjdGVyRGF0YTogdHJ1ZSxcblx0XHRcdFx0XHRzdWJ0cmVlOiB0cnVlXG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufTtcblxuXG4vKipcbiAqIFN0b3BzIHBvbGxpbmcgZm9yIGludGVyc2VjdGlvbiBjaGFuZ2VzLlxuICogQHByaXZhdGVcbiAqL1xuSW50ZXJzZWN0aW9uT2JzZXJ2ZXIucHJvdG90eXBlLl91bm1vbml0b3JJbnRlcnNlY3Rpb25zID0gZnVuY3Rpb24oKSB7XG5cdGlmICh0aGlzLl9tb25pdG9yaW5nSW50ZXJzZWN0aW9ucykge1xuXHRcdHRoaXMuX21vbml0b3JpbmdJbnRlcnNlY3Rpb25zID0gZmFsc2U7XG5cblx0XHRjbGVhckludGVydmFsKHRoaXMuX21vbml0b3JpbmdJbnRlcnZhbCk7XG5cdFx0dGhpcy5fbW9uaXRvcmluZ0ludGVydmFsID0gbnVsbDtcblxuXHRcdHJlbW92ZUV2ZW50KHdpbmRvdywgJ3Jlc2l6ZScsIHRoaXMuX2NoZWNrRm9ySW50ZXJzZWN0aW9ucywgdHJ1ZSk7XG5cdFx0cmVtb3ZlRXZlbnQoZG9jdW1lbnQsICdzY3JvbGwnLCB0aGlzLl9jaGVja0ZvckludGVyc2VjdGlvbnMsIHRydWUpO1xuXG5cdFx0aWYgKHRoaXMuX2RvbU9ic2VydmVyKSB7XG5cdFx0XHR0aGlzLl9kb21PYnNlcnZlci5kaXNjb25uZWN0KCk7XG5cdFx0XHR0aGlzLl9kb21PYnNlcnZlciA9IG51bGw7XG5cdFx0fVxuXHR9XG59O1xuXG5cbi8qKlxuICogU2NhbnMgZWFjaCBvYnNlcnZhdGlvbiB0YXJnZXQgZm9yIGludGVyc2VjdGlvbiBjaGFuZ2VzIGFuZCBhZGRzIHRoZW1cbiAqIHRvIHRoZSBpbnRlcm5hbCBlbnRyaWVzIHF1ZXVlLiBJZiBuZXcgZW50cmllcyBhcmUgZm91bmQsIGl0XG4gKiBzY2hlZHVsZXMgdGhlIGNhbGxiYWNrIHRvIGJlIGludm9rZWQuXG4gKiBAcHJpdmF0ZVxuICovXG5JbnRlcnNlY3Rpb25PYnNlcnZlci5wcm90b3R5cGUuX2NoZWNrRm9ySW50ZXJzZWN0aW9ucyA9IGZ1bmN0aW9uKCkge1xuXHR2YXIgcm9vdElzSW5Eb20gPSB0aGlzLl9yb290SXNJbkRvbSgpO1xuXHR2YXIgcm9vdFJlY3QgPSByb290SXNJbkRvbSA/IHRoaXMuX2dldFJvb3RSZWN0KCkgOiBnZXRFbXB0eVJlY3QoKTtcblxuXHR0aGlzLl9vYnNlcnZhdGlvblRhcmdldHMuZm9yRWFjaChmdW5jdGlvbihpdGVtKSB7XG5cdFx0dmFyIHRhcmdldCA9IGl0ZW0uZWxlbWVudDtcblx0XHR2YXIgdGFyZ2V0UmVjdCA9IGdldEJvdW5kaW5nQ2xpZW50UmVjdCh0YXJnZXQpO1xuXHRcdHZhciByb290Q29udGFpbnNUYXJnZXQgPSB0aGlzLl9yb290Q29udGFpbnNUYXJnZXQodGFyZ2V0KTtcblx0XHR2YXIgb2xkRW50cnkgPSBpdGVtLmVudHJ5O1xuXHRcdHZhciBpbnRlcnNlY3Rpb25SZWN0ID0gcm9vdElzSW5Eb20gJiYgcm9vdENvbnRhaW5zVGFyZ2V0ICYmXG5cdFx0XHRcdHRoaXMuX2NvbXB1dGVUYXJnZXRBbmRSb290SW50ZXJzZWN0aW9uKHRhcmdldCwgcm9vdFJlY3QpO1xuXG5cdFx0dmFyIG5ld0VudHJ5ID0gaXRlbS5lbnRyeSA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlckVudHJ5KHtcblx0XHRcdHRpbWU6IG5vdygpLFxuXHRcdFx0dGFyZ2V0OiB0YXJnZXQsXG5cdFx0XHRib3VuZGluZ0NsaWVudFJlY3Q6IHRhcmdldFJlY3QsXG5cdFx0XHRyb290Qm91bmRzOiByb290UmVjdCxcblx0XHRcdGludGVyc2VjdGlvblJlY3Q6IGludGVyc2VjdGlvblJlY3Rcblx0XHR9KTtcblxuXHRcdGlmICghb2xkRW50cnkpIHtcblx0XHRcdHRoaXMuX3F1ZXVlZEVudHJpZXMucHVzaChuZXdFbnRyeSk7XG5cdFx0fSBlbHNlIGlmIChyb290SXNJbkRvbSAmJiByb290Q29udGFpbnNUYXJnZXQpIHtcblx0XHRcdC8vIElmIHRoZSBuZXcgZW50cnkgaW50ZXJzZWN0aW9uIHJhdGlvIGhhcyBjcm9zc2VkIGFueSBvZiB0aGVcblx0XHRcdC8vIHRocmVzaG9sZHMsIGFkZCBhIG5ldyBlbnRyeS5cblx0XHRcdGlmICh0aGlzLl9oYXNDcm9zc2VkVGhyZXNob2xkKG9sZEVudHJ5LCBuZXdFbnRyeSkpIHtcblx0XHRcdFx0dGhpcy5fcXVldWVkRW50cmllcy5wdXNoKG5ld0VudHJ5KTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gSWYgdGhlIHJvb3QgaXMgbm90IGluIHRoZSBET00gb3IgdGFyZ2V0IGlzIG5vdCBjb250YWluZWQgd2l0aGluXG5cdFx0XHQvLyByb290IGJ1dCB0aGUgcHJldmlvdXMgZW50cnkgZm9yIHRoaXMgdGFyZ2V0IGhhZCBhbiBpbnRlcnNlY3Rpb24sXG5cdFx0XHQvLyBhZGQgYSBuZXcgcmVjb3JkIGluZGljYXRpbmcgcmVtb3ZhbC5cblx0XHRcdGlmIChvbGRFbnRyeSAmJiBvbGRFbnRyeS5pc0ludGVyc2VjdGluZykge1xuXHRcdFx0XHR0aGlzLl9xdWV1ZWRFbnRyaWVzLnB1c2gobmV3RW50cnkpO1xuXHRcdFx0fVxuXHRcdH1cblx0fSwgdGhpcyk7XG5cblx0aWYgKHRoaXMuX3F1ZXVlZEVudHJpZXMubGVuZ3RoKSB7XG5cdFx0dGhpcy5fY2FsbGJhY2sodGhpcy50YWtlUmVjb3JkcygpLCB0aGlzKTtcblx0fVxufTtcblxuXG4vKipcbiAqIEFjY2VwdHMgYSB0YXJnZXQgYW5kIHJvb3QgcmVjdCBjb21wdXRlcyB0aGUgaW50ZXJzZWN0aW9uIGJldHdlZW4gdGhlblxuICogZm9sbG93aW5nIHRoZSBhbGdvcml0aG0gaW4gdGhlIHNwZWMuXG4gKiBUT0RPKHBoaWxpcHdhbHRvbik6IGF0IHRoaXMgdGltZSBjbGlwLXBhdGggaXMgbm90IGNvbnNpZGVyZWQuXG4gKiBodHRwczovL3czYy5naXRodWIuaW8vSW50ZXJzZWN0aW9uT2JzZXJ2ZXIvI2NhbGN1bGF0ZS1pbnRlcnNlY3Rpb24tcmVjdC1hbGdvXG4gKiBAcGFyYW0ge0VsZW1lbnR9IHRhcmdldCBUaGUgdGFyZ2V0IERPTSBlbGVtZW50XG4gKiBAcGFyYW0ge09iamVjdH0gcm9vdFJlY3QgVGhlIGJvdW5kaW5nIHJlY3Qgb2YgdGhlIHJvb3QgYWZ0ZXIgYmVpbmdcbiAqICAgICBleHBhbmRlZCBieSB0aGUgcm9vdE1hcmdpbiB2YWx1ZS5cbiAqIEByZXR1cm4gez9PYmplY3R9IFRoZSBmaW5hbCBpbnRlcnNlY3Rpb24gcmVjdCBvYmplY3Qgb3IgdW5kZWZpbmVkIGlmIG5vXG4gKiAgICAgaW50ZXJzZWN0aW9uIGlzIGZvdW5kLlxuICogQHByaXZhdGVcbiAqL1xuSW50ZXJzZWN0aW9uT2JzZXJ2ZXIucHJvdG90eXBlLl9jb21wdXRlVGFyZ2V0QW5kUm9vdEludGVyc2VjdGlvbiA9XG5cdFx0ZnVuY3Rpb24odGFyZ2V0LCByb290UmVjdCkge1xuXG5cdC8vIElmIHRoZSBlbGVtZW50IGlzbid0IGRpc3BsYXllZCwgYW4gaW50ZXJzZWN0aW9uIGNhbid0IGhhcHBlbi5cblx0aWYgKHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRhcmdldCkuZGlzcGxheSA9PSAnbm9uZScpIHJldHVybjtcblxuXHR2YXIgdGFyZ2V0UmVjdCA9IGdldEJvdW5kaW5nQ2xpZW50UmVjdCh0YXJnZXQpO1xuXHR2YXIgaW50ZXJzZWN0aW9uUmVjdCA9IHRhcmdldFJlY3Q7XG5cdHZhciBwYXJlbnQgPSBnZXRQYXJlbnROb2RlKHRhcmdldCk7XG5cdHZhciBhdFJvb3QgPSBmYWxzZTtcblxuXHR3aGlsZSAoIWF0Um9vdCkge1xuXHRcdHZhciBwYXJlbnRSZWN0ID0gbnVsbDtcblx0XHR2YXIgcGFyZW50Q29tcHV0ZWRTdHlsZSA9IHBhcmVudC5ub2RlVHlwZSA9PSAxID9cblx0XHRcdFx0d2luZG93LmdldENvbXB1dGVkU3R5bGUocGFyZW50KSA6IHt9O1xuXG5cdFx0Ly8gSWYgdGhlIHBhcmVudCBpc24ndCBkaXNwbGF5ZWQsIGFuIGludGVyc2VjdGlvbiBjYW4ndCBoYXBwZW4uXG5cdFx0aWYgKHBhcmVudENvbXB1dGVkU3R5bGUuZGlzcGxheSA9PSAnbm9uZScpIHJldHVybjtcblxuXHRcdGlmIChwYXJlbnQgPT0gdGhpcy5yb290IHx8IHBhcmVudCA9PSBkb2N1bWVudCkge1xuXHRcdFx0YXRSb290ID0gdHJ1ZTtcblx0XHRcdHBhcmVudFJlY3QgPSByb290UmVjdDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gSWYgdGhlIGVsZW1lbnQgaGFzIGEgbm9uLXZpc2libGUgb3ZlcmZsb3csIGFuZCBpdCdzIG5vdCB0aGUgPGJvZHk+XG5cdFx0XHQvLyBvciA8aHRtbD4gZWxlbWVudCwgdXBkYXRlIHRoZSBpbnRlcnNlY3Rpb24gcmVjdC5cblx0XHRcdC8vIE5vdGU6IDxib2R5PiBhbmQgPGh0bWw+IGNhbm5vdCBiZSBjbGlwcGVkIHRvIGEgcmVjdCB0aGF0J3Mgbm90IGFsc29cblx0XHRcdC8vIHRoZSBkb2N1bWVudCByZWN0LCBzbyBubyBuZWVkIHRvIGNvbXB1dGUgYSBuZXcgaW50ZXJzZWN0aW9uLlxuXHRcdFx0aWYgKHBhcmVudCAhPSBkb2N1bWVudC5ib2R5ICYmXG5cdFx0XHRcdFx0cGFyZW50ICE9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCAmJlxuXHRcdFx0XHRcdHBhcmVudENvbXB1dGVkU3R5bGUub3ZlcmZsb3cgIT0gJ3Zpc2libGUnKSB7XG5cdFx0XHRcdHBhcmVudFJlY3QgPSBnZXRCb3VuZGluZ0NsaWVudFJlY3QocGFyZW50KTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBJZiBlaXRoZXIgb2YgdGhlIGFib3ZlIGNvbmRpdGlvbmFscyBzZXQgYSBuZXcgcGFyZW50UmVjdCxcblx0XHQvLyBjYWxjdWxhdGUgbmV3IGludGVyc2VjdGlvbiBkYXRhLlxuXHRcdGlmIChwYXJlbnRSZWN0KSB7XG5cdFx0XHRpbnRlcnNlY3Rpb25SZWN0ID0gY29tcHV0ZVJlY3RJbnRlcnNlY3Rpb24ocGFyZW50UmVjdCwgaW50ZXJzZWN0aW9uUmVjdCk7XG5cblx0XHRcdGlmICghaW50ZXJzZWN0aW9uUmVjdCkgYnJlYWs7XG5cdFx0fVxuXHRcdHBhcmVudCA9IGdldFBhcmVudE5vZGUocGFyZW50KTtcblx0fVxuXHRyZXR1cm4gaW50ZXJzZWN0aW9uUmVjdDtcbn07XG5cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSByb290IHJlY3QgYWZ0ZXIgYmVpbmcgZXhwYW5kZWQgYnkgdGhlIHJvb3RNYXJnaW4gdmFsdWUuXG4gKiBAcmV0dXJuIHtPYmplY3R9IFRoZSBleHBhbmRlZCByb290IHJlY3QuXG4gKiBAcHJpdmF0ZVxuICovXG5JbnRlcnNlY3Rpb25PYnNlcnZlci5wcm90b3R5cGUuX2dldFJvb3RSZWN0ID0gZnVuY3Rpb24oKSB7XG5cdHZhciByb290UmVjdDtcblx0aWYgKHRoaXMucm9vdCkge1xuXHRcdHJvb3RSZWN0ID0gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KHRoaXMucm9vdCk7XG5cdH0gZWxzZSB7XG5cdFx0Ly8gVXNlIDxodG1sPi88Ym9keT4gaW5zdGVhZCBvZiB3aW5kb3cgc2luY2Ugc2Nyb2xsIGJhcnMgYWZmZWN0IHNpemUuXG5cdFx0dmFyIGh0bWwgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG5cdFx0dmFyIGJvZHkgPSBkb2N1bWVudC5ib2R5O1xuXHRcdHJvb3RSZWN0ID0ge1xuXHRcdFx0eDogMCxcblx0XHRcdHk6IDAsXG5cdFx0XHR0b3A6IDAsXG5cdFx0XHRsZWZ0OiAwLFxuXHRcdFx0cmlnaHQ6IGh0bWwuY2xpZW50V2lkdGggfHwgYm9keS5jbGllbnRXaWR0aCxcblx0XHRcdHdpZHRoOiBodG1sLmNsaWVudFdpZHRoIHx8IGJvZHkuY2xpZW50V2lkdGgsXG5cdFx0XHRib3R0b206IGh0bWwuY2xpZW50SGVpZ2h0IHx8IGJvZHkuY2xpZW50SGVpZ2h0LFxuXHRcdFx0aGVpZ2h0OiBodG1sLmNsaWVudEhlaWdodCB8fCBib2R5LmNsaWVudEhlaWdodFxuXHRcdH07XG5cdH1cblx0cmV0dXJuIHRoaXMuX2V4cGFuZFJlY3RCeVJvb3RNYXJnaW4ocm9vdFJlY3QpO1xufTtcblxuXG4vKipcbiAqIEFjY2VwdHMgYSByZWN0IGFuZCBleHBhbmRzIGl0IGJ5IHRoZSByb290TWFyZ2luIHZhbHVlLlxuICogQHBhcmFtIHtPYmplY3R9IHJlY3QgVGhlIHJlY3Qgb2JqZWN0IHRvIGV4cGFuZC5cbiAqIEByZXR1cm4ge09iamVjdH0gVGhlIGV4cGFuZGVkIHJlY3QuXG4gKiBAcHJpdmF0ZVxuICovXG5JbnRlcnNlY3Rpb25PYnNlcnZlci5wcm90b3R5cGUuX2V4cGFuZFJlY3RCeVJvb3RNYXJnaW4gPSBmdW5jdGlvbihyZWN0KSB7XG5cdHZhciBtYXJnaW5zID0gdGhpcy5fcm9vdE1hcmdpblZhbHVlcy5tYXAoZnVuY3Rpb24obWFyZ2luLCBpKSB7XG5cdFx0cmV0dXJuIG1hcmdpbi51bml0ID09ICdweCcgPyBtYXJnaW4udmFsdWUgOlxuXHRcdFx0XHRtYXJnaW4udmFsdWUgKiAoaSAlIDIgPyByZWN0LndpZHRoIDogcmVjdC5oZWlnaHQpIC8gMTAwO1xuXHR9KTtcblx0dmFyIG5ld1JlY3QgPSB7XG5cdFx0dG9wOiByZWN0LnRvcCAtIG1hcmdpbnNbMF0sXG5cdFx0cmlnaHQ6IHJlY3QucmlnaHQgKyBtYXJnaW5zWzFdLFxuXHRcdGJvdHRvbTogcmVjdC5ib3R0b20gKyBtYXJnaW5zWzJdLFxuXHRcdGxlZnQ6IHJlY3QubGVmdCAtIG1hcmdpbnNbM11cblx0fTtcblx0bmV3UmVjdC53aWR0aCA9IG5ld1JlY3QucmlnaHQgLSBuZXdSZWN0LmxlZnQ7XG5cdG5ld1JlY3QuaGVpZ2h0ID0gbmV3UmVjdC5ib3R0b20gLSBuZXdSZWN0LnRvcDtcblx0bmV3UmVjdC54ID0gbmV3UmVjdC5sZWZ0O1xuXHRuZXdSZWN0LnkgPSBuZXdSZWN0LnRvcDtcblxuXHRyZXR1cm4gbmV3UmVjdDtcbn07XG5cblxuLyoqXG4gKiBBY2NlcHRzIGFuIG9sZCBhbmQgbmV3IGVudHJ5IGFuZCByZXR1cm5zIHRydWUgaWYgYXQgbGVhc3Qgb25lIG9mIHRoZVxuICogdGhyZXNob2xkIHZhbHVlcyBoYXMgYmVlbiBjcm9zc2VkLlxuICogQHBhcmFtIHs/SW50ZXJzZWN0aW9uT2JzZXJ2ZXJFbnRyeX0gb2xkRW50cnkgVGhlIHByZXZpb3VzIGVudHJ5IGZvciBhXG4gKiAgICBwYXJ0aWN1bGFyIHRhcmdldCBlbGVtZW50IG9yIG51bGwgaWYgbm8gcHJldmlvdXMgZW50cnkgZXhpc3RzLlxuICogQHBhcmFtIHtJbnRlcnNlY3Rpb25PYnNlcnZlckVudHJ5fSBuZXdFbnRyeSBUaGUgY3VycmVudCBlbnRyeSBmb3IgYVxuICogICAgcGFydGljdWxhciB0YXJnZXQgZWxlbWVudC5cbiAqIEByZXR1cm4ge2Jvb2xlYW59IFJldHVybnMgdHJ1ZSBpZiBhIGFueSB0aHJlc2hvbGQgaGFzIGJlZW4gY3Jvc3NlZC5cbiAqIEBwcml2YXRlXG4gKi9cbkludGVyc2VjdGlvbk9ic2VydmVyLnByb3RvdHlwZS5faGFzQ3Jvc3NlZFRocmVzaG9sZCA9XG5cdFx0ZnVuY3Rpb24ob2xkRW50cnksIG5ld0VudHJ5KSB7XG5cblx0Ly8gVG8gbWFrZSBjb21wYXJpbmcgZWFzaWVyLCBhbiBlbnRyeSB0aGF0IGhhcyBhIHJhdGlvIG9mIDBcblx0Ly8gYnV0IGRvZXMgbm90IGFjdHVhbGx5IGludGVyc2VjdCBpcyBnaXZlbiBhIHZhbHVlIG9mIC0xXG5cdHZhciBvbGRSYXRpbyA9IG9sZEVudHJ5ICYmIG9sZEVudHJ5LmlzSW50ZXJzZWN0aW5nID9cblx0XHRcdG9sZEVudHJ5LmludGVyc2VjdGlvblJhdGlvIHx8IDAgOiAtMTtcblx0dmFyIG5ld1JhdGlvID0gbmV3RW50cnkuaXNJbnRlcnNlY3RpbmcgP1xuXHRcdFx0bmV3RW50cnkuaW50ZXJzZWN0aW9uUmF0aW8gfHwgMCA6IC0xO1xuXG5cdC8vIElnbm9yZSB1bmNoYW5nZWQgcmF0aW9zXG5cdGlmIChvbGRSYXRpbyA9PT0gbmV3UmF0aW8pIHJldHVybjtcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMudGhyZXNob2xkcy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciB0aHJlc2hvbGQgPSB0aGlzLnRocmVzaG9sZHNbaV07XG5cblx0XHQvLyBSZXR1cm4gdHJ1ZSBpZiBhbiBlbnRyeSBtYXRjaGVzIGEgdGhyZXNob2xkIG9yIGlmIHRoZSBuZXcgcmF0aW9cblx0XHQvLyBhbmQgdGhlIG9sZCByYXRpbyBhcmUgb24gdGhlIG9wcG9zaXRlIHNpZGVzIG9mIGEgdGhyZXNob2xkLlxuXHRcdGlmICh0aHJlc2hvbGQgPT0gb2xkUmF0aW8gfHwgdGhyZXNob2xkID09IG5ld1JhdGlvIHx8XG5cdFx0XHRcdHRocmVzaG9sZCA8IG9sZFJhdGlvICE9PSB0aHJlc2hvbGQgPCBuZXdSYXRpbykge1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXHR9XG59O1xuXG5cbi8qKlxuICogUmV0dXJucyB3aGV0aGVyIG9yIG5vdCB0aGUgcm9vdCBlbGVtZW50IGlzIGFuIGVsZW1lbnQgYW5kIGlzIGluIHRoZSBET00uXG4gKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIHRoZSByb290IGVsZW1lbnQgaXMgYW4gZWxlbWVudCBhbmQgaXMgaW4gdGhlIERPTS5cbiAqIEBwcml2YXRlXG4gKi9cbkludGVyc2VjdGlvbk9ic2VydmVyLnByb3RvdHlwZS5fcm9vdElzSW5Eb20gPSBmdW5jdGlvbigpIHtcblx0cmV0dXJuICF0aGlzLnJvb3QgfHwgY29udGFpbnNEZWVwKGRvY3VtZW50LCB0aGlzLnJvb3QpO1xufTtcblxuXG4vKipcbiAqIFJldHVybnMgd2hldGhlciBvciBub3QgdGhlIHRhcmdldCBlbGVtZW50IGlzIGEgY2hpbGQgb2Ygcm9vdC5cbiAqIEBwYXJhbSB7RWxlbWVudH0gdGFyZ2V0IFRoZSB0YXJnZXQgZWxlbWVudCB0byBjaGVjay5cbiAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgdGhlIHRhcmdldCBlbGVtZW50IGlzIGEgY2hpbGQgb2Ygcm9vdC5cbiAqIEBwcml2YXRlXG4gKi9cbkludGVyc2VjdGlvbk9ic2VydmVyLnByb3RvdHlwZS5fcm9vdENvbnRhaW5zVGFyZ2V0ID0gZnVuY3Rpb24odGFyZ2V0KSB7XG5cdHJldHVybiBjb250YWluc0RlZXAodGhpcy5yb290IHx8IGRvY3VtZW50LCB0YXJnZXQpO1xufTtcblxuXG4vKipcbiAqIEFkZHMgdGhlIGluc3RhbmNlIHRvIHRoZSBnbG9iYWwgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgcmVnaXN0cnkgaWYgaXQgaXNuJ3RcbiAqIGFscmVhZHkgcHJlc2VudC5cbiAqIEBwcml2YXRlXG4gKi9cbkludGVyc2VjdGlvbk9ic2VydmVyLnByb3RvdHlwZS5fcmVnaXN0ZXJJbnN0YW5jZSA9IGZ1bmN0aW9uKCkge1xuXHRpZiAocmVnaXN0cnkuaW5kZXhPZih0aGlzKSA8IDApIHtcblx0XHRyZWdpc3RyeS5wdXNoKHRoaXMpO1xuXHR9XG59O1xuXG5cbi8qKlxuICogUmVtb3ZlcyB0aGUgaW5zdGFuY2UgZnJvbSB0aGUgZ2xvYmFsIEludGVyc2VjdGlvbk9ic2VydmVyIHJlZ2lzdHJ5LlxuICogQHByaXZhdGVcbiAqL1xuSW50ZXJzZWN0aW9uT2JzZXJ2ZXIucHJvdG90eXBlLl91bnJlZ2lzdGVySW5zdGFuY2UgPSBmdW5jdGlvbigpIHtcblx0dmFyIGluZGV4ID0gcmVnaXN0cnkuaW5kZXhPZih0aGlzKTtcblx0aWYgKGluZGV4ICE9IC0xKSByZWdpc3RyeS5zcGxpY2UoaW5kZXgsIDEpO1xufTtcblxuXG4vKipcbiAqIFJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgcGVyZm9ybWFuY2Uubm93KCkgbWV0aG9kIG9yIG51bGwgaW4gYnJvd3NlcnNcbiAqIHRoYXQgZG9uJ3Qgc3VwcG9ydCB0aGUgQVBJLlxuICogQHJldHVybiB7bnVtYmVyfSBUaGUgZWxhcHNlZCB0aW1lIHNpbmNlIHRoZSBwYWdlIHdhcyByZXF1ZXN0ZWQuXG4gKi9cbmZ1bmN0aW9uIG5vdygpIHtcblx0cmV0dXJuIHdpbmRvdy5wZXJmb3JtYW5jZSAmJiBwZXJmb3JtYW5jZS5ub3cgJiYgcGVyZm9ybWFuY2Uubm93KCk7XG59XG5cblxuLyoqXG4gKiBUaHJvdHRsZXMgYSBmdW5jdGlvbiBhbmQgZGVsYXlzIGl0cyBleGVjdXRpb24sIHNvIGl0J3Mgb25seSBjYWxsZWQgYXQgbW9zdFxuICogb25jZSB3aXRoaW4gYSBnaXZlbiB0aW1lIHBlcmlvZC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBmdW5jdGlvbiB0byB0aHJvdHRsZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSB0aW1lb3V0IFRoZSBhbW91bnQgb2YgdGltZSB0aGF0IG11c3QgcGFzcyBiZWZvcmUgdGhlXG4gKiAgICAgZnVuY3Rpb24gY2FuIGJlIGNhbGxlZCBhZ2Fpbi5cbiAqIEByZXR1cm4ge0Z1bmN0aW9ufSBUaGUgdGhyb3R0bGVkIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiB0aHJvdHRsZShmbiwgdGltZW91dCkge1xuXHR2YXIgdGltZXIgPSBudWxsO1xuXHRyZXR1cm4gZnVuY3Rpb24gKCkge1xuXHRcdGlmICghdGltZXIpIHtcblx0XHRcdHRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHRcdFx0Zm4oKTtcblx0XHRcdFx0dGltZXIgPSBudWxsO1xuXHRcdFx0fSwgdGltZW91dCk7XG5cdFx0fVxuXHR9O1xufVxuXG5cbi8qKlxuICogQWRkcyBhbiBldmVudCBoYW5kbGVyIHRvIGEgRE9NIG5vZGUgZW5zdXJpbmcgY3Jvc3MtYnJvd3NlciBjb21wYXRpYmlsaXR5LlxuICogQHBhcmFtIHtOb2RlfSBub2RlIFRoZSBET00gbm9kZSB0byBhZGQgdGhlIGV2ZW50IGhhbmRsZXIgdG8uXG4gKiBAcGFyYW0ge3N0cmluZ30gZXZlbnQgVGhlIGV2ZW50IG5hbWUuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgZXZlbnQgaGFuZGxlciB0byBhZGQuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IG9wdF91c2VDYXB0dXJlIE9wdGlvbmFsbHkgYWRkcyB0aGUgZXZlbiB0byB0aGUgY2FwdHVyZVxuICogICAgIHBoYXNlLiBOb3RlOiB0aGlzIG9ubHkgd29ya3MgaW4gbW9kZXJuIGJyb3dzZXJzLlxuICovXG5mdW5jdGlvbiBhZGRFdmVudChub2RlLCBldmVudCwgZm4sIG9wdF91c2VDYXB0dXJlKSB7XG5cdGlmICh0eXBlb2Ygbm9kZS5hZGRFdmVudExpc3RlbmVyID09ICdmdW5jdGlvbicpIHtcblx0XHRub2RlLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGZuLCBvcHRfdXNlQ2FwdHVyZSB8fCBmYWxzZSk7XG5cdH1cblx0ZWxzZSBpZiAodHlwZW9mIG5vZGUuYXR0YWNoRXZlbnQgPT0gJ2Z1bmN0aW9uJykge1xuXHRcdG5vZGUuYXR0YWNoRXZlbnQoJ29uJyArIGV2ZW50LCBmbik7XG5cdH1cbn1cblxuXG4vKipcbiAqIFJlbW92ZXMgYSBwcmV2aW91c2x5IGFkZGVkIGV2ZW50IGhhbmRsZXIgZnJvbSBhIERPTSBub2RlLlxuICogQHBhcmFtIHtOb2RlfSBub2RlIFRoZSBET00gbm9kZSB0byByZW1vdmUgdGhlIGV2ZW50IGhhbmRsZXIgZnJvbS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBldmVudCBUaGUgZXZlbnQgbmFtZS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBldmVudCBoYW5kbGVyIHRvIHJlbW92ZS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gb3B0X3VzZUNhcHR1cmUgSWYgdGhlIGV2ZW50IGhhbmRsZXIgd2FzIGFkZGVkIHdpdGggdGhpc1xuICogICAgIGZsYWcgc2V0IHRvIHRydWUsIGl0IHNob3VsZCBiZSBzZXQgdG8gdHJ1ZSBoZXJlIGluIG9yZGVyIHRvIHJlbW92ZSBpdC5cbiAqL1xuZnVuY3Rpb24gcmVtb3ZlRXZlbnQobm9kZSwgZXZlbnQsIGZuLCBvcHRfdXNlQ2FwdHVyZSkge1xuXHRpZiAodHlwZW9mIG5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lciA9PSAnZnVuY3Rpb24nKSB7XG5cdFx0bm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBmbiwgb3B0X3VzZUNhcHR1cmUgfHwgZmFsc2UpO1xuXHR9XG5cdGVsc2UgaWYgKHR5cGVvZiBub2RlLmRldGF0Y2hFdmVudCA9PSAnZnVuY3Rpb24nKSB7XG5cdFx0bm9kZS5kZXRhdGNoRXZlbnQoJ29uJyArIGV2ZW50LCBmbik7XG5cdH1cbn1cblxuXG4vKipcbiAqIFJldHVybnMgdGhlIGludGVyc2VjdGlvbiBiZXR3ZWVuIHR3byByZWN0IG9iamVjdHMuXG4gKiBAcGFyYW0ge09iamVjdH0gcmVjdDEgVGhlIGZpcnN0IHJlY3QuXG4gKiBAcGFyYW0ge09iamVjdH0gcmVjdDIgVGhlIHNlY29uZCByZWN0LlxuICogQHJldHVybiB7P09iamVjdH0gVGhlIGludGVyc2VjdGlvbiByZWN0IG9yIHVuZGVmaW5lZCBpZiBubyBpbnRlcnNlY3Rpb25cbiAqICAgICBpcyBmb3VuZC5cbiAqL1xuZnVuY3Rpb24gY29tcHV0ZVJlY3RJbnRlcnNlY3Rpb24ocmVjdDEsIHJlY3QyKSB7XG5cdHZhciB0b3AgPSBNYXRoLm1heChyZWN0MS50b3AsIHJlY3QyLnRvcCk7XG5cdHZhciBib3R0b20gPSBNYXRoLm1pbihyZWN0MS5ib3R0b20sIHJlY3QyLmJvdHRvbSk7XG5cdHZhciBsZWZ0ID0gTWF0aC5tYXgocmVjdDEubGVmdCwgcmVjdDIubGVmdCk7XG5cdHZhciByaWdodCA9IE1hdGgubWluKHJlY3QxLnJpZ2h0LCByZWN0Mi5yaWdodCk7XG5cdHZhciB3aWR0aCA9IHJpZ2h0IC0gbGVmdDtcblx0dmFyIGhlaWdodCA9IGJvdHRvbSAtIHRvcDtcblxuXHRyZXR1cm4gKHdpZHRoID49IDAgJiYgaGVpZ2h0ID49IDApICYmIHtcblx0XHR4OiBsZWZ0LFxuXHRcdHk6IHRvcCxcblx0XHR0b3A6IHRvcCxcblx0XHRib3R0b206IGJvdHRvbSxcblx0XHRsZWZ0OiBsZWZ0LFxuXHRcdHJpZ2h0OiByaWdodCxcblx0XHR3aWR0aDogd2lkdGgsXG5cdFx0aGVpZ2h0OiBoZWlnaHRcblx0fTtcbn1cblxuXG4vKipcbiAqIFNoaW1zIHRoZSBuYXRpdmUgZ2V0Qm91bmRpbmdDbGllbnRSZWN0IGZvciBjb21wYXRpYmlsaXR5IHdpdGggb2xkZXIgSUUuXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsIFRoZSBlbGVtZW50IHdob3NlIGJvdW5kaW5nIHJlY3QgdG8gZ2V0LlxuICogQHJldHVybiB7T2JqZWN0fSBUaGUgKHBvc3NpYmx5IHNoaW1tZWQpIHJlY3Qgb2YgdGhlIGVsZW1lbnQuXG4gKi9cbmZ1bmN0aW9uIGdldEJvdW5kaW5nQ2xpZW50UmVjdChlbCkge1xuXHR2YXIgcmVjdDtcblxuXHR0cnkge1xuXHRcdHJlY3QgPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0Ly8gSWdub3JlIFdpbmRvd3MgNyBJRTExIFwiVW5zcGVjaWZpZWQgZXJyb3JcIlxuXHRcdC8vIGh0dHBzOi8vZ2l0aHViLmNvbS93M2MvSW50ZXJzZWN0aW9uT2JzZXJ2ZXIvcHVsbC8yMDVcblx0fVxuXG5cdGlmICghcmVjdCkgcmV0dXJuIGdldEVtcHR5UmVjdCgpO1xuXG5cdC8vIE9sZGVyIElFXG5cdGlmICghKHJlY3Qud2lkdGggJiYgcmVjdC5oZWlnaHQgJiYgcmVjdC54ICYmIHJlY3QueSkpIHtcblx0XHRyZWN0ID0ge1xuXHRcdFx0eDogcmVjdC5sZWZ0LFxuXHRcdFx0eTogcmVjdC50b3AsXG5cdFx0XHR0b3A6IHJlY3QudG9wLFxuXHRcdFx0cmlnaHQ6IHJlY3QucmlnaHQsXG5cdFx0XHRib3R0b206IHJlY3QuYm90dG9tLFxuXHRcdFx0bGVmdDogcmVjdC5sZWZ0LFxuXHRcdFx0d2lkdGg6IHJlY3QucmlnaHQgLSByZWN0LmxlZnQsXG5cdFx0XHRoZWlnaHQ6IHJlY3QuYm90dG9tIC0gcmVjdC50b3Bcblx0XHR9O1xuXHR9XG5cdHJldHVybiByZWN0O1xufVxuXG5cbi8qKlxuICogUmV0dXJucyBhbiBlbXB0eSByZWN0IG9iamVjdC4gQW4gZW1wdHkgcmVjdCBpcyByZXR1cm5lZCB3aGVuIGFuIGVsZW1lbnRcbiAqIGlzIG5vdCBpbiB0aGUgRE9NLlxuICogQHJldHVybiB7T2JqZWN0fSBUaGUgZW1wdHkgcmVjdC5cbiAqL1xuZnVuY3Rpb24gZ2V0RW1wdHlSZWN0KCkge1xuXHRyZXR1cm4ge1xuXHRcdHg6IDAsXG5cdFx0eTogMCxcblx0XHR0b3A6IDAsXG5cdFx0Ym90dG9tOiAwLFxuXHRcdGxlZnQ6IDAsXG5cdFx0cmlnaHQ6IDAsXG5cdFx0d2lkdGg6IDAsXG5cdFx0aGVpZ2h0OiAwXG5cdH07XG59XG5cbi8qKlxuICogQ2hlY2tzIHRvIHNlZSBpZiBhIHBhcmVudCBlbGVtZW50IGNvbnRhaW5zIGEgY2hpbGQgZWxlbWVudCAoaW5jbHVkaW5nIGluc2lkZVxuICogc2hhZG93IERPTSkuXG4gKiBAcGFyYW0ge05vZGV9IHBhcmVudCBUaGUgcGFyZW50IGVsZW1lbnQuXG4gKiBAcGFyYW0ge05vZGV9IGNoaWxkIFRoZSBjaGlsZCBlbGVtZW50LlxuICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgcGFyZW50IG5vZGUgY29udGFpbnMgdGhlIGNoaWxkIG5vZGUuXG4gKi9cbmZ1bmN0aW9uIGNvbnRhaW5zRGVlcChwYXJlbnQsIGNoaWxkKSB7XG5cdHZhciBub2RlID0gY2hpbGQ7XG5cdHdoaWxlIChub2RlKSB7XG5cdFx0aWYgKG5vZGUgPT0gcGFyZW50KSByZXR1cm4gdHJ1ZTtcblxuXHRcdG5vZGUgPSBnZXRQYXJlbnROb2RlKG5vZGUpO1xuXHR9XG5cdHJldHVybiBmYWxzZTtcbn1cblxuXG4vKipcbiAqIEdldHMgdGhlIHBhcmVudCBub2RlIG9mIGFuIGVsZW1lbnQgb3IgaXRzIGhvc3QgZWxlbWVudCBpZiB0aGUgcGFyZW50IG5vZGVcbiAqIGlzIGEgc2hhZG93IHJvb3QuXG4gKiBAcGFyYW0ge05vZGV9IG5vZGUgVGhlIG5vZGUgd2hvc2UgcGFyZW50IHRvIGdldC5cbiAqIEByZXR1cm4ge05vZGV8bnVsbH0gVGhlIHBhcmVudCBub2RlIG9yIG51bGwgaWYgbm8gcGFyZW50IGV4aXN0cy5cbiAqL1xuZnVuY3Rpb24gZ2V0UGFyZW50Tm9kZShub2RlKSB7XG5cdHZhciBwYXJlbnQgPSBub2RlLnBhcmVudE5vZGU7XG5cblx0aWYgKHBhcmVudCAmJiBwYXJlbnQubm9kZVR5cGUgPT0gMTEgJiYgcGFyZW50Lmhvc3QpIHtcblx0XHQvLyBJZiB0aGUgcGFyZW50IGlzIGEgc2hhZG93IHJvb3QsIHJldHVybiB0aGUgaG9zdCBlbGVtZW50LlxuXHRcdHJldHVybiBwYXJlbnQuaG9zdDtcblx0fVxuXG5cdGlmIChwYXJlbnQgJiYgcGFyZW50LmFzc2lnbmVkU2xvdCkge1xuXHRcdC8vIElmIHRoZSBwYXJlbnQgaXMgZGlzdHJpYnV0ZWQgaW4gYSA8c2xvdD4sIHJldHVybiB0aGUgcGFyZW50IG9mIGEgc2xvdC5cblx0XHRyZXR1cm4gcGFyZW50LmFzc2lnbmVkU2xvdC5wYXJlbnROb2RlO1xuXHR9XG5cblx0cmV0dXJuIHBhcmVudDtcbn1cblxuXG4vLyBFeHBvc2VzIHRoZSBjb25zdHJ1Y3RvcnMgZ2xvYmFsbHkuXG53aW5kb3cuSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPSBJbnRlcnNlY3Rpb25PYnNlcnZlcjtcbndpbmRvdy5JbnRlcnNlY3Rpb25PYnNlcnZlckVudHJ5ID0gSW50ZXJzZWN0aW9uT2JzZXJ2ZXJFbnRyeTtcblxufSh3aW5kb3csIGRvY3VtZW50KSk7XG59fSkuY2FsbCgnb2JqZWN0JyA9PT0gdHlwZW9mIHdpbmRvdyAmJiB3aW5kb3cgfHwgJ29iamVjdCcgPT09IHR5cGVvZiBzZWxmICYmIHNlbGYgfHwgJ29iamVjdCcgPT09IHR5cGVvZiBnbG9iYWwgJiYgZ2xvYmFsIHx8IHt9KTtcbiIsICJjb25zdCBpc0lubGluZUhUTUxFbGVtZW50ID0gKG5vZGU6IE5vZGUpOiBub2RlIGlzIEhUTUxFbGVtZW50ID0+IHtcblx0cmV0dXJuIG5vZGUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCAmJiB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShub2RlKS5kaXNwbGF5LmluY2x1ZGVzKCdpbmxpbmUnKTtcbn07XG5cbmNvbnN0IGlzVGV4dE5vZGUgPSAobm9kZTogTm9kZSk6IG5vZGUgaXMgVGV4dCA9PiB7XG5cdHJldHVybiBub2RlLm5vZGVUeXBlID09PSBOb2RlLlRFWFRfTk9ERTtcbn07XG5cbmNvbnN0IGlzVmlzaWJsZSA9IChlbGVtZW50OiBFbGVtZW50KTogYm9vbGVhbiA9PiB7XG5cdGNvbnN0IHN0eWxlOiBDU1NTdHlsZURlY2xhcmF0aW9uID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudCk7XG5cblx0cmV0dXJuIChcblx0XHRzdHlsZS5kaXNwbGF5ICE9PSAnbm9uZScgJiZcblx0XHQhWydoaWRkZW4nLCAnY29sbGFwc2UnXS5pbmNsdWRlcyhzdHlsZS52aXNpYmlsaXR5KSAmJlxuXHRcdE51bWJlci5wYXJzZUZsb2F0KHN0eWxlLm9wYWNpdHkpID4gMFxuXHQpO1xufTtcblxuY29uc3QgZ2V0Tm9kZVRleHQgPSAobm9kZTogSFRNTEVsZW1lbnQgfCBUZXh0KTogc3RyaW5nID0+IHtcblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHVuaWNvcm4vcHJlZmVyLWRvbS1ub2RlLXRleHQtY29udGVudFxuXHRyZXR1cm4gbm9kZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50ID8gbm9kZS5pbm5lclRleHQgOiBub2RlLmRhdGE7XG59O1xuXG4vKipcbiAqIFNwbGl0IGEgc3RyaW5nIGJlZm9yZSBhbiBhcnJheSBvZiBpbmRleGVzLlxuICpcbiAqIEZvciBleGFtcGxlLFxuICogYGBgXG4gKiBzcGxpdEF0SW5kZXhlcygnMTIzNDU2Nzg5JywgWzMsIDUsIDddKTtcbiAqIGBgYFxuICogcmVzdWx0cyBpblxuICogYGBgXG4gKiBbJzEyMycsICc0NScsICc2NycsICc4OSddXG4gKiBgYGBcbiAqXG4gKiBOb3RlIHRoYXQgZW1wdHkgc3RyaW5nIGFyZSBpbmNsdWRlZDpcbiAqIGBgYFxuICogc3BsaXRBdEluZGV4ZXMoJzEyMzQ1Njc4OScsIFswLCA5XSk7XG4gKiBgYGBcbiAqIHJlc3VsdHMgaW5cbiAqIGBgYFxuICogWycnLCAnMTIzNDU2Nzg5JywgJyddXG4gKiBgYGBcbiAqXG4gKiBJbmRleGVzIHRoYXQgYXJlIG5lZ2F0aXZlIG9yIGdyZWF0ZXIgdGhhbiB0aGUgbGVuZ3RoIG9mIHRoZSBzdHJpbmcgYXJlIGlnbm9yZWQuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHN0ciBzdHJpbmcgdG8gc3BsaXRcbiAqIEBwYXJhbSB7bnVtYmVyW119IGluZGV4ZXMgaW5kZXhlc1xuICogQHJldHVybiB7c3RyaW5nW119IHNwbGl0dGVkIHN0cmluZyBmcmFnbWVudHNcbiAqL1xuY29uc3Qgc3BsaXRBdEluZGV4ZXMgPSAoc3RyOiBzdHJpbmcsIGluZGV4ZXM6IG51bWJlcltdKTogc3RyaW5nW10gPT4ge1xuXHRjb25zdCByZXN1bHQ6IHN0cmluZ1tdID0gW107XG5cblx0Y29uc3Qgbm9ybWFsaXplZEluZGV4ZXM6IG51bWJlcltdID0gW1xuXHRcdC8vIFJlbW92ZSBkdXBsaWNhdGlvbnMgYW5kIHNvcnQgaW4gYXNjZW5kaW5nIG9yZGVyXG5cdFx0Li4ubmV3IFNldChcblx0XHRcdGluZGV4ZXNcblx0XHRcdFx0LnNvcnQoKGE6IG51bWJlciwgYjogbnVtYmVyKTogbnVtYmVyID0+IHtcblx0XHRcdFx0XHRyZXR1cm4gYSAtIGI7XG5cdFx0XHRcdH0pXG5cdFx0XHRcdC5maWx0ZXIoKGk6IG51bWJlcik6IGJvb2xlYW4gPT4ge1xuXHRcdFx0XHRcdHJldHVybiBpID49IDAgJiYgaSA8PSBzdHIubGVuZ3RoO1xuXHRcdFx0XHR9KVxuXHRcdCksXG5cdFx0c3RyLmxlbmd0aCxcblx0XTtcblxuXHRmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgbm9ybWFsaXplZEluZGV4ZXMubGVuZ3RoOyBpKyspIHtcblx0XHRjb25zdCBzbGljZTogc3RyaW5nID0gc3RyLnNsaWNlKG5vcm1hbGl6ZWRJbmRleGVzW2kgLSAxXSwgbm9ybWFsaXplZEluZGV4ZXNbaV0pO1xuXHRcdHJlc3VsdFtyZXN1bHQubGVuZ3RoXSA9IHNsaWNlOyAvLyBSZXBsYWNlIGByZXN1bHQucHVzaChzbGljZSlgIHRvIGF2b2lkIHBvbHlmaWxsaW5nIGNvcmUtanNcblx0fVxuXG5cdHJldHVybiByZXN1bHQ7XG59O1xuXG5leHBvcnQge2lzSW5saW5lSFRNTEVsZW1lbnQsIGlzVGV4dE5vZGUsIGlzVmlzaWJsZSwgZ2V0Tm9kZVRleHQsIHNwbGl0QXRJbmRleGVzfTtcbiIsICJ0eXBlIERvbU11dGF0aW9uRnVuYyA9IChlbGVtZW50OiBFbGVtZW50KSA9PiB2b2lkO1xuXG5jb25zdCBwZW5kaW5nQWN0aW9uczogV2Vha01hcDxFbGVtZW50LCBEb21NdXRhdGlvbkZ1bmNbXT4gPSBuZXcgV2Vha01hcDxFbGVtZW50LCBEb21NdXRhdGlvbkZ1bmNbXT4oKTtcblxuY29uc3Qgb25JbnRlcnNlY3Rpb24gPSAoZW50cmllczogSW50ZXJzZWN0aW9uT2JzZXJ2ZXJFbnRyeVtdKTogdm9pZCA9PiB7XG5cdGZvciAoY29uc3QgZW50cnkgb2YgZW50cmllcykge1xuXHRcdGlmICghZW50cnkuaXNJbnRlcnNlY3RpbmcpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGNvbnN0IGVsZW1lbnQ6IEVsZW1lbnQgPSBlbnRyeS50YXJnZXQ7XG5cdFx0b2JzZXJ2ZXIudW5vYnNlcnZlKGVsZW1lbnQpO1xuXG5cdFx0Y29uc3QgY2FsbGJhY2tzOiBEb21NdXRhdGlvbkZ1bmNbXSB8IHVuZGVmaW5lZCA9IHBlbmRpbmdBY3Rpb25zLmdldChlbGVtZW50KTtcblx0XHRpZiAoIWNhbGxiYWNrcykge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0d2hpbGUgKHRydWUpIHtcblx0XHRcdGNvbnN0IGNhbGxiYWNrOiBEb21NdXRhdGlvbkZ1bmMgfCB1bmRlZmluZWQgPSBjYWxsYmFja3Muc2hpZnQoKTsgLy8gRklGT1xuXHRcdFx0aWYgKCFjYWxsYmFjaykge1xuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHRcdGNhbGxiYWNrKGVsZW1lbnQpO1xuXHRcdH1cblx0fVxufTtcblxuLy8gT3B0aW1pemF0aW9uOiBsYXppbHkgZXhlY3V0ZSBwZW5kaW5nIGFjdGlvbnMgb25jZSBhbiBlbGVtZW50IGlzIHZpc2libGVcbmNvbnN0IG9ic2VydmVyOiBJbnRlcnNlY3Rpb25PYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihvbkludGVyc2VjdGlvbik7XG5cbmNvbnN0IHF1ZXVlRG9tTXV0YXRpb24gPSAoZWxlbWVudDogRWxlbWVudCwgY2FsbGJhY2s6IERvbU11dGF0aW9uRnVuYyk6IHZvaWQgPT4ge1xuXHRpZiAoIXBlbmRpbmdBY3Rpb25zLmhhcyhlbGVtZW50KSkge1xuXHRcdHBlbmRpbmdBY3Rpb25zLnNldChlbGVtZW50LCBbXSk7XG5cdH1cblxuXHRpZiAocGVuZGluZ0FjdGlvbnMuZ2V0KGVsZW1lbnQpICE9PSB1bmRlZmluZWQpIHtcblx0XHQocGVuZGluZ0FjdGlvbnMuZ2V0KGVsZW1lbnQpIGFzIERvbU11dGF0aW9uRnVuY1tdKVsocGVuZGluZ0FjdGlvbnMuZ2V0KGVsZW1lbnQpIGFzIERvbU11dGF0aW9uRnVuY1tdKS5sZW5ndGhdID1cblx0XHRcdGNhbGxiYWNrO1xuXHR9XG5cdG9ic2VydmVyLm9ic2VydmUoZWxlbWVudCk7XG59O1xuXG5leHBvcnQge3F1ZXVlRG9tTXV0YXRpb259O1xuIiwgImltcG9ydCB7Z2V0Tm9kZVRleHQsIGlzSW5saW5lSFRNTEVsZW1lbnQsIGlzVGV4dE5vZGUsIGlzVmlzaWJsZSwgc3BsaXRBdEluZGV4ZXN9IGZyb20gJy4vdXRpbCc7XG5pbXBvcnQge3F1ZXVlRG9tTXV0YXRpb259IGZyb20gJy4vcXVldWUnO1xuXG5jb25zdCBSRUdFWF9SQU5HRV9DSElORVNFOiBzdHJpbmcgPVxuXHQnKD86W1xcXFx1MkU4MC1cXFxcdTJFOTlcXFxcdTJFOUItXFxcXHUyRUYzXFxcXHUyRjAwLVxcXFx1MkZENVxcXFx1MzAwNVxcXFx1MzAwN1xcXFx1MzAyMS1cXFxcdTMwMjlcXFxcdTMwMzgtXFxcXHUzMDNCXFxcXHUzNDAwLVxcXFx1NERCRlxcXFx1NEUwMC1cXFxcdTlGRkZcXFxcdUY5MDAtXFxcXHVGQTZEXFxcXHVGQTcwLVxcXFx1RkFEOV18XFxcXHVEODFCW1xcXFx1REZFMlxcXFx1REZFM1xcXFx1REZGMFxcXFx1REZGMV18W1xcXFx1RDg0MC1cXFxcdUQ4NjhcXFxcdUQ4NkEtXFxcXHVEODZDXFxcXHVEODZGLVxcXFx1RDg3MlxcXFx1RDg3NC1cXFxcdUQ4NzlcXFxcdUQ4ODAtXFxcXHVEODgzXVtcXFxcdURDMDAtXFxcXHVERkZGXXxcXFxcdUQ4NjlbXFxcXHVEQzAwLVxcXFx1REVERlxcXFx1REYwMC1cXFxcdURGRkZdfFxcXFx1RDg2RFtcXFxcdURDMDAtXFxcXHVERjM4XFxcXHVERjQwLVxcXFx1REZGRl18XFxcXHVEODZFW1xcXFx1REMwMC1cXFxcdURDMURcXFxcdURDMjAtXFxcXHVERkZGXXxcXFxcdUQ4NzNbXFxcXHVEQzAwLVxcXFx1REVBMVxcXFx1REVCMC1cXFxcdURGRkZdfFxcXFx1RDg3QVtcXFxcdURDMDAtXFxcXHVERkUwXXxcXFxcdUQ4N0VbXFxcXHVEQzAwLVxcXFx1REUxRF18XFxcXHVEODg0W1xcXFx1REMwMC1cXFxcdURGNEFdKSc7XG5jb25zdCBSRUdFWF9SQU5HRV9PVEhFUl9MRUZUOiBzdHJpbmcgPSAnW0EtWmEtejAtOUB+JSs9fMKxXFxcXCl9IyTCpeKCrMKj4oKkXSc7XG5jb25zdCBSRUdFWF9SQU5HRV9PVEhFUl9SSUdIVDogc3RyaW5nID0gJ1tBLVphLXowLTlAfiUrPXzCsVxcXFwoeyMkwqXigqzCo+KCpF0nO1xuY29uc3QgUkVHRVhfU1RSX0lOVEVSX1NDUklQVDogc3RyaW5nID0gYCg/Oigke1JFR0VYX1JBTkdFX0NISU5FU0V9KSg/PSR7UkVHRVhfUkFOR0VfT1RIRVJfUklHSFR9KXwoJHtSRUdFWF9SQU5HRV9PVEhFUl9MRUZUfSkoPz0ke1JFR0VYX1JBTkdFX0NISU5FU0V9KSlgO1xuXG5jb25zdCBTUEFDRTogc3RyaW5nID0gJ1xcdTIwMEEnO1xuXG5jb25zdCBXUkFQUEVSX0NMQVNTOiBzdHJpbmcgPSAnZ2FkZ2V0LXRleHRfc3BhY2luZyc7XG5cbmNvbnN0IFNFTEVDVE9SX0FMTE9XRUQ6IHN0cmluZ1tdID0gW1xuXHQnYScsXG5cdCdhYmJyJyxcblx0J2FydGljbGUnLFxuXHQnYXNpZGUnLFxuXHQnYicsXG5cdCdiZGknLFxuXHQnYmlnJyxcblx0J2Jsb2NrcXVvdGUnLFxuXHQnYnV0dG9uJyxcblx0J2NhcHRpb24nLFxuXHQnY2VudGVyJyxcblx0J2NpdGUnLFxuXHQnZGF0YScsXG5cdCdkZCcsXG5cdCdkZWwnLFxuXHQnZGV0YWlscycsXG5cdCdkZm4nLFxuXHQnZGl2Jyxcblx0J2R0Jyxcblx0J2VtJyxcblx0J2ZpZ2NhcHRpb24nLFxuXHQnZm9vdGVyJyxcblx0J2gxJyxcblx0J2gyJyxcblx0J2gzJyxcblx0J2g0Jyxcblx0J2g1Jyxcblx0J2hlYWRlcicsXG5cdCdpJyxcblx0J2lucycsXG5cdCdsYWJlbCcsXG5cdCdsZWdlbmQnLFxuXHQnbGknLFxuXHQnbWFpbicsXG5cdCdtYXJrJyxcblx0J29wdGlvbicsXG5cdCdwJyxcblx0J3EnLFxuXHQncnVieScsXG5cdCdzJyxcblx0J3NlY3Rpb24nLFxuXHQnc21hbGwnLFxuXHQnc3BhbicsXG5cdCdzdHJpa2UnLFxuXHQnc3Ryb25nJyxcblx0J3N1YicsXG5cdCdzdW1tYXJ5Jyxcblx0J3N1cCcsXG5cdCd0ZCcsXG5cdCd0aCcsXG5cdCd0aW1lJyxcblx0J3UnLFxuXTtcbmNvbnN0IFNFTEVDVE9SX0JMT0NLRUQ6IHN0cmluZ1tdID0gW1xuXHQnY29kZScsXG5cdCdrYmQnLFxuXHQncHJlJyxcblx0J3JwJyxcblx0J3J0Jyxcblx0J3NhbXAnLFxuXHQndGV4dGFyZWEnLFxuXHQndmFyJyxcblx0Ly8gRWxlbWVudHMgd2l0aCB0aGlzIGNsYXNzIGFyZSBleGNsdWRlZFxuXHQnLmdhZGdldC1ub3NwYWNlJyxcblx0Ly8gRWRpdGFibGUgZWxlbWVudHNcblx0J1tjb250ZW50ZWRpdGFibGU9XCJ0cnVlXCJdJyxcblx0Ly8gQUNFIGVkaXRvciBjb250ZW50XG5cdCcuYWNlX2VkaXRvcicsXG5cdC8vIFZpc3VhbCBFZGl0b3IgKGFuZCAyMDE3IFdpa2l0ZXh0IEVkaXRvcikgY29udGVudCAmIGRpZmZcblx0Jy52ZS11aS1zdXJmYWNlJyxcblx0Jy52ZS1pbml0LW13LWRpZmZQYWdlLWRpZmYnLFxuXHQvLyBEaWZmXG5cdCcuZGlmZi1jb250ZXh0Jyxcblx0Jy5kaWZmLWFkZGVkbGluZScsXG5cdCcuZGlmZi1kZWxldGVkbGluZScsXG5cdC8vIERpZmYgKGlubGluZSBtb2RlKVxuXHQnLm13LWRpZmYtaW5saW5lLWFkZGVkJyxcblx0Jy5tdy1kaWZmLWlubGluZS1kZWxldGVkJyxcblx0Jy5tdy1kaWZmLWlubGluZS1tb3ZlZCcsXG5cdCcubXctZGlmZi1pbmxpbmUtY2hhbmdlZCcsXG5cdCcubXctZGlmZi1pbmxpbmUtY29udGV4dCcsXG5dO1xuXG4vLyBGSVhNRTogVXNlIDppcygpIGluIHRoZSBmdXR1cmUgb25jZSBpdCBoYXMgYmV0dGVyIGJyb3dzZXIgY29tcGF0aWJpbGl0eVxuY29uc3QgU0VMRUNUT1I6IHN0cmluZyA9IFNFTEVDVE9SX0FMTE9XRUQubWFwKChhbGxvd2VkOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuXHRyZXR1cm4gYCR7YWxsb3dlZH06bm90KCR7U0VMRUNUT1JfQkxPQ0tFRC5mbGF0TWFwKChibG9ja2VkOiBzdHJpbmcpOiBzdHJpbmcgfCBzdHJpbmdbXSA9PiB7XG5cdFx0Ly8gTm90IGluY2x1ZGUgaXRzZWxmIGlmIGl0IGlzIGEgdGFnIHNlbGVjdG9yXG5cdFx0cmV0dXJuIChibG9ja2VkWzBdIGFzIHN0cmluZykubWF0Y2goL1thLXpdL2kpID8gYCR7YmxvY2tlZH0gKmAgOiBbYmxvY2tlZCwgYCR7YmxvY2tlZH0gKmBdO1xuXHR9KS5qb2luKCcsJyl9KWA7XG59KS5qb2luKCcsJyk7XG5cbmNvbnN0IGdldExlYWZFbGVtZW50cyA9IChwYXJlbnQ6IEhUTUxFbGVtZW50KTogSFRNTEVsZW1lbnRbXSA9PiB7XG5cdGNvbnN0IGNhbmRpZGF0ZXM6IE5vZGVMaXN0T2Y8SFRNTEVsZW1lbnQ+ID0gcGFyZW50LnF1ZXJ5U2VsZWN0b3JBbGwoU0VMRUNUT1IpO1xuXHRjb25zdCByZXN1bHQ6IEhUTUxFbGVtZW50W10gPSBbXTtcblxuXHRpZiAocGFyZW50Lm1hdGNoZXMoU0VMRUNUT1IpKSB7XG5cdFx0cmVzdWx0W3Jlc3VsdC5sZW5ndGhdID0gcGFyZW50OyAvLyBSZXBsYWNlIGByZXN1bHQucHVzaCgpYCB0byBhdm9pZCBwb2x5ZmlsbGluZyBjb3JlLWpzXG5cdH1cblxuXHRmb3IgKGNvbnN0IGNhbmRpZGF0ZSBvZiBjYW5kaWRhdGVzKSB7XG5cdFx0Zm9yIChjb25zdCBjaGlsZE5vZGUgb2YgY2FuZGlkYXRlLmNoaWxkTm9kZXMpIHtcblx0XHRcdGlmIChpc1RleHROb2RlKGNoaWxkTm9kZSkpIHtcblx0XHRcdFx0cmVzdWx0W3Jlc3VsdC5sZW5ndGhdID0gY2FuZGlkYXRlOyAvLyBSZXBsYWNlIGByZXN1bHQucHVzaCgpYCB0byBhdm9pZCBwb2x5ZmlsbGluZyBjb3JlLWpzXG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiByZXN1bHQ7XG59O1xuXG5jb25zdCBnZXROZXh0VmlzaWJsZVNpYmxpbmcgPSAobm9kZTogTm9kZSk6IEhUTUxFbGVtZW50IHwgVGV4dCB8IG51bGwgPT4ge1xuXHRsZXQgY3VycmVudE5vZGU6IE5vZGUgPSBub2RlO1xuXG5cdC8vIFVzZSBsb29wcyByYXRoZXIgdGhhbiByZWN1cnNpb24gZm9yIGJldHRlciBwZXJmb3JtYW5jZVxuXHR3aGlsZSAodHJ1ZSkge1xuXHRcdGNvbnN0IGNhbmRpZGF0ZTogQ2hpbGROb2RlIHwgbnVsbCA9IGN1cnJlbnROb2RlLm5leHRTaWJsaW5nO1xuXG5cdFx0aWYgKCFjYW5kaWRhdGUpIHtcblx0XHRcdGNvbnN0IHBhcmVudDogSFRNTEVsZW1lbnQgfCBudWxsID0gY3VycmVudE5vZGUucGFyZW50RWxlbWVudDtcblx0XHRcdGlmICghcGFyZW50KSB7XG5cdFx0XHRcdC8vIFBhcmVudCBpcyBEb2N1bWVudCwgc28gbm8gdmlzaWJsZSBzaWJsaW5nXG5cdFx0XHRcdHJldHVybiBudWxsO1xuXHRcdFx0fVxuXHRcdFx0Ly8gQnViYmxlIHVwIHRvIGl0cyBwYXJlbnQgYW5kIGdldCBpdHMgc2libGluZ1xuXHRcdFx0Y3VycmVudE5vZGUgPSBwYXJlbnQ7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRpZiAoIShjYW5kaWRhdGUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCB8fCBjYW5kaWRhdGUgaW5zdGFuY2VvZiBUZXh0KSkge1xuXHRcdFx0Ly8gQ29tbWVudHMsIFNWR3MsIGV0Yy46IGdldCBpdHMgc2libGluZyBhcyByZXN1bHRcblx0XHRcdGN1cnJlbnROb2RlID0gY2FuZGlkYXRlO1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0aWYgKGNhbmRpZGF0ZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG5cdFx0XHRpZiAoIWlzVmlzaWJsZShjYW5kaWRhdGUpKSB7XG5cdFx0XHRcdC8vIEludmlzaWJsZTogcmVjdXJzaXZlbHkgZ2V0IHRoaXMgZWxlbWVudCdzIG5leHQgc2libGluZ1xuXHRcdFx0XHRjdXJyZW50Tm9kZSA9IGNhbmRpZGF0ZTtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cblx0XHRcdGlmICghaXNJbmxpbmVIVE1MRWxlbWVudChjYW5kaWRhdGUpKSB7XG5cdFx0XHRcdC8vIE5leHQgc2libGluZyBpcyBub3QgaW5saW5lIChhdCBuZXh0IGxpbmUpLCBzbyBubyBzaWJsaW5nc1xuXHRcdFx0XHRyZXR1cm4gbnVsbDtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoY2FuZGlkYXRlIGluc3RhbmNlb2YgVGV4dCAmJiAhY2FuZGlkYXRlLmRhdGEudHJpbSgpKSB7XG5cdFx0XHQvLyBTa2lwIGVtcHR5IFRleHQgbm9kZXMgKGUuZy4gbGluZSBicmVha3MpXG5cdFx0XHRjdXJyZW50Tm9kZSA9IGNhbmRpZGF0ZTtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdHJldHVybiBjYW5kaWRhdGU7XG5cdH1cbn07XG5cbmNvbnN0IGNyZWF0ZVNwYWNpbmdXcmFwcGVyID0gKHN0cjogc3RyaW5nKTogW3N0cmluZywgSFRNTFNwYW5FbGVtZW50XSA9PiB7XG5cdGNvbnN0IHNwYW46IEhUTUxTcGFuRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1lZGlhd2lraS9jbGFzcy1kb2Ncblx0c3Bhbi5jbGFzc05hbWUgPSBXUkFQUEVSX0NMQVNTO1xuXHRzcGFuLnRleHRDb250ZW50ID0gc3RyLnNsaWNlKC0xKTtcblxuXHRyZXR1cm4gW3N0ci5zbGljZSgwLCAtMSksIHNwYW5dO1xufTtcblxuY29uc3QgYWRqdXN0U3BhY2luZyA9IChlbGVtZW50OiBIVE1MRWxlbWVudCk6IHZvaWQgPT4ge1xuXHQvLyBGcmVlemUgTm9kZUxpc3QgaW4gYWR2YW5jZVxuXHRjb25zdCBjaGlsZE5vZGVzOiBDaGlsZE5vZGVbXSA9IFsuLi5lbGVtZW50LmNoaWxkTm9kZXNdO1xuXHRjb25zdCB0ZXh0U3BhY2luZ1Bvc01hcDogTWFwPFRleHQsIG51bWJlcltdPiA9IG5ldyBNYXA8VGV4dCwgbnVtYmVyW10+KCk7XG5cblx0Zm9yIChjb25zdCBjaGlsZCBvZiBjaGlsZE5vZGVzKSB7XG5cdFx0aWYgKCEoY2hpbGQgaW5zdGFuY2VvZiBUZXh0KSkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0Y29uc3QgbmV4dFNpYmxpbmc6IEhUTUxFbGVtZW50IHwgVGV4dCB8IG51bGwgPSBnZXROZXh0VmlzaWJsZVNpYmxpbmcoY2hpbGQpO1xuXG5cdFx0bGV0IHRlc3RTdHJpbmc6IHN0cmluZyA9IGdldE5vZGVUZXh0KGNoaWxkKTtcblx0XHRpZiAobmV4dFNpYmxpbmcpIHtcblx0XHRcdC8vIEFwcGVuZCBmaXJzdCBjaGFyYWN0ZXIgdG8gZGV0ZWN0IHNjcmlwdCBpbnRlcnNlY3Rpb25cblx0XHRcdHRlc3RTdHJpbmcgKz0gZ2V0Tm9kZVRleHQobmV4dFNpYmxpbmcpWzBdID8/ICcnO1xuXHRcdH1cblxuXHRcdGNvbnN0IGluZGV4ZXM6IG51bWJlcltdID0gW107XG5cdFx0Ly8gR2xvYmFsIHJlZ2V4cHMgYXJlIHN0YXRlZnVsIHNvIGRvIGluaXRpYWxpemF0aW9uIGluIGVhY2ggbG9vcFxuXHRcdGNvbnN0IHJlZ2V4VGV4dE5vZGVEYXRhOiBSZWdFeHAgPSBuZXcgUmVnRXhwKFJFR0VYX1NUUl9JTlRFUl9TQ1JJUFQsICdnJyk7XG5cblx0XHR3aGlsZSAodHJ1ZSkge1xuXHRcdFx0Y29uc3QgbWF0Y2g6IFJlZ0V4cEV4ZWNBcnJheSB8IG51bGwgPSByZWdleFRleHROb2RlRGF0YS5leGVjKHRlc3RTdHJpbmcpO1xuXHRcdFx0aWYgKCFtYXRjaCkge1xuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHRcdGluZGV4ZXNbaW5kZXhlcy5sZW5ndGhdID0gbWF0Y2guaW5kZXggKyAxOyAvLyBSZXBsYWNlIGBpbmRleGVzLnB1c2goKWAgdG8gYXZvaWQgcG9seWZpbGxpbmcgY29yZS1qc1xuXHRcdH1cblxuXHRcdGlmICghaW5kZXhlcy5sZW5ndGgpIHtcblx0XHRcdC8vIE9wdGltaXphdGlvbjogc2tpcCBmdXJ0aGVyIHN0ZXBzXG5cdFx0XHQvLyBBbHNvIHByZXZlbnQgdW5uZWNlc3NhcnkgbXV0YXRpb24sIHdoaWNoIHdpbGwgYmUgZGV0ZWN0ZWQgYnkgTXV0YXRpb25PYnNlcnZlcixcblx0XHRcdC8vIHJlc3VsdGluZyBpbiBpbmZpbml0ZSBsb29wc1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0dGV4dFNwYWNpbmdQb3NNYXAuc2V0KGNoaWxkLCBpbmRleGVzKTtcblx0fVxuXG5cdC8vIFNjaGVkdWxlIERPTSBtdXRhdGlvbiB0byBwcmV2ZW50IGZvcmNlZCByZWZsb3dzXG5cdHF1ZXVlRG9tTXV0YXRpb24oZWxlbWVudCwgKCk6IHZvaWQgPT4ge1xuXHRcdGZvciAoY29uc3QgW25vZGUsIGluZGV4ZXNdIG9mIHRleHRTcGFjaW5nUG9zTWFwKSB7XG5cdFx0XHRjb25zdCB0ZXh0OiBzdHJpbmcgPSBub2RlLmRhdGE7XG5cdFx0XHRjb25zdCBmcmFnbWVudHM6IHN0cmluZ1tdID0gc3BsaXRBdEluZGV4ZXModGV4dCwgaW5kZXhlcyk7XG5cblx0XHRcdGNvbnN0IHJlcGxhY2VtZW50OiAoc3RyaW5nIHwgSFRNTFNwYW5FbGVtZW50KVtdID0gZnJhZ21lbnRzXG5cdFx0XHRcdC5zbGljZSgwLCAtMSlcblx0XHRcdFx0LmZsYXRNYXAoKGZyYWdtZW50OiBzdHJpbmcpOiBbc3RyaW5nLCBIVE1MU3BhbkVsZW1lbnRdID0+IHtcblx0XHRcdFx0XHRyZXR1cm4gY3JlYXRlU3BhY2luZ1dyYXBwZXIoZnJhZ21lbnQpO1xuXHRcdFx0XHR9KTtcblx0XHRcdHJlcGxhY2VtZW50W3JlcGxhY2VtZW50Lmxlbmd0aF0gPSBmcmFnbWVudHMuYXQoLTEpIGFzIHN0cmluZzsgLy8gUmVwbGFjZSBgcmVwbGFjZW1lbnQucHVzaCgpYCB0byBhdm9pZCBwb2x5ZmlsbGluZyBjb3JlLWpzXG5cblx0XHRcdC8vIE9wdGltaXphdGlvbjogcHJldmVudCBmb3JjZWQgcmVmbG93c1xuXHRcdFx0cmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcblx0XHRcdFx0bm9kZS5yZXBsYWNlV2l0aCguLi5yZXBsYWNlbWVudCk7XG5cdFx0XHR9KTtcblx0XHR9XG5cdH0pO1xufTtcblxuY29uc3QgYWRkU3BhY2VUb1N0cmluZyA9IChzdHI6IHN0cmluZyk6IHN0cmluZyA9PiB7XG5cdGNvbnN0IHJlZ2V4OiBSZWdFeHAgPSBuZXcgUmVnRXhwKFJFR0VYX1NUUl9JTlRFUl9TQ1JJUFQsICdnJyk7XG5cblx0cmV0dXJuIHN0ci5yZXBsYWNlKHJlZ2V4LCBgJDEkMiR7U1BBQ0V9YCk7XG59O1xuXG5leHBvcnQge2dldExlYWZFbGVtZW50cywgYWRqdXN0U3BhY2luZywgYWRkU3BhY2VUb1N0cmluZywgV1JBUFBFUl9DTEFTU307XG4iLCAiaW1wb3J0ICcuL1RleHRTcGFjaW5nLmxlc3MnO1xuaW1wb3J0IHtXUkFQUEVSX0NMQVNTLCBhZGRTcGFjZVRvU3RyaW5nLCBhZGp1c3RTcGFjaW5nLCBnZXRMZWFmRWxlbWVudHN9IGZyb20gJy4vbW9kdWxlcy9zcGFjaW5nJztcblxuY29uc3QgcnVuID0gKGVsZW1lbnQ6IEhUTUxFbGVtZW50KTogdm9pZCA9PiB7XG5cdGNvbnN0IGxlYXZlczogSFRNTEVsZW1lbnRbXSA9IGdldExlYWZFbGVtZW50cyhlbGVtZW50KTtcblx0Zm9yIChjb25zdCBsZWFmIG9mIGxlYXZlcykge1xuXHRcdGFkanVzdFNwYWNpbmcobGVhZik7XG5cdH1cbn07XG5cbmNvbnN0IG11dGF0aW9uT2JzZXJ2ZXI6IE11dGF0aW9uT2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcigocmVjb3JkczogTXV0YXRpb25SZWNvcmRbXSk6IHZvaWQgPT4ge1xuXHRmb3IgKGNvbnN0IHJlY29yZCBvZiByZWNvcmRzKSB7XG5cdFx0aWYgKHJlY29yZC50eXBlICE9PSAnY2hpbGRMaXN0Jykge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0Y29uc3QgYWRkZWROb2RlczogTm9kZVtdID0gWy4uLnJlY29yZC5hZGRlZE5vZGVzXTtcblxuXHRcdC8vIEV4Y2x1ZGUgbXV0YXRpb25zIGNhdXNlZCBieSBhZGp1c3RTcGFjaW5nKCkgdG8gcHJldmVudCBpbmZpbml0ZSBsb29wc1xuXHRcdC8vIFR5cGljYWxseSB0aGV5IHdpbGwgY29udGFpbiBub2RlcyB3aXRoIGNsYXNzIFdSQVBQRVJfQ0xBU1Ncblx0XHRpZiAoXG5cdFx0XHRhZGRlZE5vZGVzLnNvbWUoKG5vZGU6IE5vZGUpOiBib29sZWFuID0+IHtcblx0XHRcdFx0cmV0dXJuIG5vZGUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCAmJiBub2RlLmNsYXNzTGlzdC5jb250YWlucyhXUkFQUEVSX0NMQVNTKTtcblx0XHRcdH0pXG5cdFx0KSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRmb3IgKGNvbnN0IG5vZGUgb2YgYWRkZWROb2Rlcykge1xuXHRcdFx0aWYgKG5vZGUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuXHRcdFx0XHRydW4obm9kZSk7XG5cdFx0XHR9IGVsc2UgaWYgKG5vZGUgaW5zdGFuY2VvZiBUZXh0KSB7XG5cdFx0XHRcdGNvbnN0IHtwYXJlbnRFbGVtZW50fSA9IG5vZGU7XG5cdFx0XHRcdGlmIChwYXJlbnRFbGVtZW50KSB7XG5cdFx0XHRcdFx0cnVuKHBhcmVudEVsZW1lbnQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59KTtcblxuY29uc3QgbWFpbiA9ICgpOiB2b2lkID0+IHtcblx0ZG9jdW1lbnQudGl0bGUgPSBhZGRTcGFjZVRvU3RyaW5nKGRvY3VtZW50LnRpdGxlKTtcblx0Ly8gV2F0Y2ggZm9yIGFkZGVkIG5vZGVzXG5cdG11dGF0aW9uT2JzZXJ2ZXIub2JzZXJ2ZShkb2N1bWVudC5ib2R5LCB7XG5cdFx0c3VidHJlZTogdHJ1ZSxcblx0XHRjaGlsZExpc3Q6IHRydWUsXG5cdH0pO1xuXHRydW4oZG9jdW1lbnQuYm9keSk7XG59O1xuXG4kKG1haW4pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUEsS0FBQyxTQUFTLFdBQVc7QUFDckIsVUFBSSxFQUFFLDBCQUF5QixVQUFRLCtCQUE4QixVQUFRLHVCQUFzQixPQUFPLDBCQUEwQixZQUNqSTtBQVdILFNBQUMsU0FBU0EsU0FBUUMsV0FBVTtBQUM1QjtBQUVBLGNBQUksb0JBQW9CLDBCQUEwQkQsV0FDbEQsK0JBQStCQSxXQUMvQix1QkFBdUJBLFFBQU8sMEJBQTBCO0FBRXhELGNBQUksbUJBQW1CO0FBQ3RCO0FBQUEsVUFDRDtBQU9BLGNBQUksV0FBVyxDQUFDO0FBU2hCLG1CQUFTLDBCQUEwQixPQUFPO0FBQ3pDLGlCQUFLLE9BQU8sTUFBTTtBQUNsQixpQkFBSyxTQUFTLE1BQU07QUFDcEIsaUJBQUssYUFBYSxNQUFNO0FBQ3hCLGlCQUFLLHFCQUFxQixNQUFNO0FBQ2hDLGlCQUFLLG1CQUFtQixNQUFNLG9CQUFvQixhQUFhO0FBQy9ELGdCQUFJO0FBQ0gsbUJBQUssaUJBQWlCLENBQUMsQ0FBQyxNQUFNO0FBQUEsWUFDL0IsU0FBUyxLQUFLO0FBQUEsWUFFZDtBQUdBLGdCQUFJLGFBQWEsS0FBSztBQUN0QixnQkFBSSxhQUFhLFdBQVcsUUFBUSxXQUFXO0FBQy9DLGdCQUFJLG1CQUFtQixLQUFLO0FBQzVCLGdCQUFJLG1CQUFtQixpQkFBaUIsUUFBUSxpQkFBaUI7QUFHakUsZ0JBQUksWUFBWTtBQUdmLG1CQUFLLG9CQUFvQixRQUFRLG1CQUFtQixZQUFZLFFBQVEsQ0FBQyxDQUFDO0FBQUEsWUFDM0UsT0FBTztBQUVOLG1CQUFLLG9CQUFvQixLQUFLLGlCQUFpQixJQUFJO0FBQUEsWUFDcEQ7QUFBQSxVQUNE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QUFDLGNBQW1CTCxZQUFBSSxNQUFBQyxZQUFBL0csUUFBQThHLE9BQVk7QUFBL0IsY0FBVzdJLE9BQUE4SSxZQUFBRCxHQUFBO0FBQ1YsWUFBSTdJLGdCQUFnQkMsYUFBYTtBQUNoQzRILGNBQUk3SCxJQUFJO1FBQ1QsV0FBV0EsZ0JBQWdCNkYsTUFBTTtBQUNoQyxnQkFBTTtZQUFDRDtVQUFhLElBQUk1RjtBQUN4QixjQUFJNEYsZUFBZTtBQUNsQmlDLGdCQUFJakMsYUFBYTtVQUNsQjtRQUNEO01BQ0Q7SUFDRDtFQUFBLFNBQUF2QyxLQUFBO0FBQUFnRixlQUFBL0UsRUFBQUQsR0FBQTtFQUFBLFVBQUE7QUFBQWdGLGVBQUE5RSxFQUFBO0VBQUE7QUFDRCxDQUFDO0FBRUQsSUFBTXdGLE9BQU9BLE1BQVk7QUFDeEI5QyxXQUFTK0MsUUFBUXRCLGlCQUFpQnpCLFNBQVMrQyxLQUFLO0FBRWhEZCxtQkFBaUJ0RSxRQUFRcUMsU0FBU2dELE1BQU07SUFDdkNDLFNBQVM7SUFDVEMsV0FBVztFQUNaLENBQUM7QUFDRHRCLE1BQUk1QixTQUFTZ0QsSUFBSTtBQUNsQjtBQUVBRyxFQUFFTCxJQUFJOyIsCiAgIm5hbWVzIjogWyJ3aW5kb3ciLCAiZG9jdW1lbnQiLCAiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCAiaXNJbmxpbmVIVE1MRWxlbWVudCIsICJub2RlIiwgIkhUTUxFbGVtZW50IiwgIndpbmRvdyIsICJnZXRDb21wdXRlZFN0eWxlIiwgImRpc3BsYXkiLCAiaW5jbHVkZXMiLCAiaXNUZXh0Tm9kZSIsICJub2RlVHlwZSIsICJOb2RlIiwgIlRFWFRfTk9ERSIsICJpc1Zpc2libGUiLCAiZWxlbWVudCIsICJzdHlsZSIsICJ2aXNpYmlsaXR5IiwgIk51bWJlciIsICJwYXJzZUZsb2F0IiwgIm9wYWNpdHkiLCAiZ2V0Tm9kZVRleHQiLCAiaW5uZXJUZXh0IiwgImRhdGEiLCAic3BsaXRBdEluZGV4ZXMiLCAic3RyIiwgImluZGV4ZXMiLCAicmVzdWx0IiwgIm5vcm1hbGl6ZWRJbmRleGVzIiwgIlNldCIsICJzb3J0IiwgImEiLCAiYiIsICJmaWx0ZXIiLCAiaSIsICJsZW5ndGgiLCAic2xpY2UiLCAicGVuZGluZ0FjdGlvbnMiLCAiV2Vha01hcCIsICJvbkludGVyc2VjdGlvbiIsICJlbnRyaWVzIiwgIl9pdGVyYXRvciIsICJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsICJfc3RlcCIsICJzIiwgIm4iLCAiZG9uZSIsICJlbnRyeSIsICJ2YWx1ZSIsICJpc0ludGVyc2VjdGluZyIsICJ0YXJnZXQiLCAib2JzZXJ2ZXIiLCAidW5vYnNlcnZlIiwgImNhbGxiYWNrcyIsICJnZXQiLCAiY2FsbGJhY2siLCAic2hpZnQiLCAiZXJyIiwgImUiLCAiZiIsICJJbnRlcnNlY3Rpb25PYnNlcnZlciIsICJxdWV1ZURvbU11dGF0aW9uIiwgImhhcyIsICJzZXQiLCAib2JzZXJ2ZSIsICJSRUdFWF9SQU5HRV9DSElORVNFIiwgIlJFR0VYX1JBTkdFX09USEVSX0xFRlQiLCAiUkVHRVhfUkFOR0VfT1RIRVJfUklHSFQiLCAiUkVHRVhfU1RSX0lOVEVSX1NDUklQVCIsICJjb25jYXQiLCAiU1BBQ0UiLCAiV1JBUFBFUl9DTEFTUyIsICJTRUxFQ1RPUl9BTExPV0VEIiwgIlNFTEVDVE9SX0JMT0NLRUQiLCAiU0VMRUNUT1IiLCAibWFwIiwgImFsbG93ZWQiLCAiZmxhdE1hcCIsICJibG9ja2VkIiwgIm1hdGNoIiwgImpvaW4iLCAiZ2V0TGVhZkVsZW1lbnRzIiwgInBhcmVudCIsICJjYW5kaWRhdGVzIiwgInF1ZXJ5U2VsZWN0b3JBbGwiLCAibWF0Y2hlcyIsICJfaXRlcmF0b3IyIiwgIl9zdGVwMiIsICJjYW5kaWRhdGUiLCAiX2l0ZXJhdG9yMyIsICJjaGlsZE5vZGVzIiwgIl9zdGVwMyIsICJjaGlsZE5vZGUiLCAiZ2V0TmV4dFZpc2libGVTaWJsaW5nIiwgImN1cnJlbnROb2RlIiwgIm5leHRTaWJsaW5nIiwgInBhcmVudEVsZW1lbnQiLCAiVGV4dCIsICJ0cmltIiwgImNyZWF0ZVNwYWNpbmdXcmFwcGVyIiwgInNwYW4iLCAiZG9jdW1lbnQiLCAiY3JlYXRlRWxlbWVudCIsICJjbGFzc05hbWUiLCAidGV4dENvbnRlbnQiLCAiYWRqdXN0U3BhY2luZyIsICJ0ZXh0U3BhY2luZ1Bvc01hcCIsICJNYXAiLCAiX2kiLCAiX2NoaWxkTm9kZXMiLCAiY2hpbGQiLCAidGVzdFN0cmluZyIsICJfZ2V0Tm9kZVRleHQkIiwgInJlZ2V4VGV4dE5vZGVEYXRhIiwgIlJlZ0V4cCIsICJleGVjIiwgImluZGV4IiwgIl9pdGVyYXRvcjQiLCAiX3N0ZXA0IiwgInRleHQiLCAiZnJhZ21lbnRzIiwgInJlcGxhY2VtZW50IiwgImZyYWdtZW50IiwgImF0IiwgInJlcXVlc3RBbmltYXRpb25GcmFtZSIsICJyZXBsYWNlV2l0aCIsICJhZGRTcGFjZVRvU3RyaW5nIiwgInJlZ2V4IiwgInJlcGxhY2UiLCAicnVuIiwgImxlYXZlcyIsICJfaXRlcmF0b3I1IiwgIl9zdGVwNSIsICJsZWFmIiwgIm11dGF0aW9uT2JzZXJ2ZXIiLCAiTXV0YXRpb25PYnNlcnZlciIsICJyZWNvcmRzIiwgIl9pdGVyYXRvcjYiLCAiX3N0ZXA2IiwgInJlY29yZCIsICJ0eXBlIiwgImFkZGVkTm9kZXMiLCAic29tZSIsICJjbGFzc0xpc3QiLCAiY29udGFpbnMiLCAiX2kyIiwgIl9hZGRlZE5vZGVzIiwgIm1haW4iLCAidGl0bGUiLCAiYm9keSIsICJzdWJ0cmVlIiwgImNoaWxkTGlzdCIsICIkIl0KfQo=

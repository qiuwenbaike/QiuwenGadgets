/**
 * SPDX-License-Identifier: BSD-3-Clause
 * _addText: '{{Gadget Header|license=BSD}}'
 *
 * @base {@link https://github.com/diskdance/gadget-text-spacing}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/TextSpacing}
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

// node_modules/.pnpm/@mrhenry+core-web@1.2.1/node_modules/@mrhenry/core-web/modules/IntersectionObserver.js
var require_IntersectionObserver = __commonJS({
  "node_modules/.pnpm/@mrhenry+core-web@1.2.1/node_modules/@mrhenry/core-web/modules/IntersectionObserver.js"() {
    (function(undefined2) {
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

// node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/global.js
var require_global = __commonJS({
  "node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/global.js"(exports, module2) {
    "use strict";
    var check = function(it) {
      return it && it.Math === Math && it;
    };
    module2.exports = // eslint-disable-next-line es/no-global-this -- safe
    check(typeof globalThis == "object" && globalThis) || check(typeof window == "object" && window) || // eslint-disable-next-line no-restricted-globals -- safe
    check(typeof self == "object" && self) || check(typeof global == "object" && global) || check(typeof exports == "object" && exports) || // eslint-disable-next-line no-new-func -- fallback
    /* @__PURE__ */ function() {
      return this;
    }() || Function("return this")();
  }
});

// node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/fails.js
var require_fails = __commonJS({
  "node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/fails.js"(exports, module2) {
    "use strict";
    module2.exports = function(exec) {
      try {
        return !!exec();
      } catch (error) {
        return true;
      }
    };
  }
});

// node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/descriptors.js
var require_descriptors = __commonJS({
  "node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/descriptors.js"(exports, module2) {
    "use strict";
    var fails = require_fails();
    module2.exports = !fails(function() {
      return Object.defineProperty({}, 1, { get: function() {
        return 7;
      } })[1] !== 7;
    });
  }
});

// node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/function-bind-native.js
var require_function_bind_native = __commonJS({
  "node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/function-bind-native.js"(exports, module2) {
    "use strict";
    var fails = require_fails();
    module2.exports = !fails(function() {
      var test = function() {
      }.bind();
      return typeof test != "function" || test.hasOwnProperty("prototype");
    });
  }
});

// node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/function-call.js
var require_function_call = __commonJS({
  "node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/function-call.js"(exports, module2) {
    "use strict";
    var NATIVE_BIND = require_function_bind_native();
    var call = Function.prototype.call;
    module2.exports = NATIVE_BIND ? call.bind(call) : function() {
      return call.apply(call, arguments);
    };
  }
});

// node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/object-property-is-enumerable.js
var require_object_property_is_enumerable = __commonJS({
  "node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/object-property-is-enumerable.js"(exports) {
    "use strict";
    var $propertyIsEnumerable = {}.propertyIsEnumerable;
    var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({ 1: 2 }, 1);
    exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
      var descriptor = getOwnPropertyDescriptor(this, V);
      return !!descriptor && descriptor.enumerable;
    } : $propertyIsEnumerable;
  }
});

// node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/create-property-descriptor.js
var require_create_property_descriptor = __commonJS({
  "node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/create-property-descriptor.js"(exports, module2) {
    "use strict";
    module2.exports = function(bitmap, value) {
      return {
        enumerable: !(bitmap & 1),
        configurable: !(bitmap & 2),
        writable: !(bitmap & 4),
        value
      };
    };
  }
});

// node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/function-uncurry-this.js
var require_function_uncurry_this = __commonJS({
  "node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/function-uncurry-this.js"(exports, module2) {
    "use strict";
    var NATIVE_BIND = require_function_bind_native();
    var FunctionPrototype = Function.prototype;
    var call = FunctionPrototype.call;
    var uncurryThisWithBind = NATIVE_BIND && FunctionPrototype.bind.bind(call, call);
    module2.exports = NATIVE_BIND ? uncurryThisWithBind : function(fn) {
      return function() {
        return call.apply(fn, arguments);
      };
    };
  }
});

// node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/classof-raw.js
var require_classof_raw = __commonJS({
  "node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/classof-raw.js"(exports, module2) {
    "use strict";
    var uncurryThis = require_function_uncurry_this();
    var toString = uncurryThis({}.toString);
    var stringSlice = uncurryThis("".slice);
    module2.exports = function(it) {
      return stringSlice(toString(it), 8, -1);
    };
  }
});

// node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/indexed-object.js
var require_indexed_object = __commonJS({
  "node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/indexed-object.js"(exports, module2) {
    "use strict";
    var uncurryThis = require_function_uncurry_this();
    var fails = require_fails();
    var classof = require_classof_raw();
    var $Object = Object;
    var split = uncurryThis("".split);
    module2.exports = fails(function() {
      return !$Object("z").propertyIsEnumerable(0);
    }) ? function(it) {
      return classof(it) === "String" ? split(it, "") : $Object(it);
    } : $Object;
  }
});

// node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/is-null-or-undefined.js
var require_is_null_or_undefined = __commonJS({
  "node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/is-null-or-undefined.js"(exports, module2) {
    "use strict";
    module2.exports = function(it) {
      return it === null || it === void 0;
    };
  }
});

// node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/require-object-coercible.js
var require_require_object_coercible = __commonJS({
  "node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/require-object-coercible.js"(exports, module2) {
    "use strict";
    var isNullOrUndefined = require_is_null_or_undefined();
    var $TypeError = TypeError;
    module2.exports = function(it) {
      if (isNullOrUndefined(it))
        throw new $TypeError("Can't call method on " + it);
      return it;
    };
  }
});

// node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/to-indexed-object.js
var require_to_indexed_object = __commonJS({
  "node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/to-indexed-object.js"(exports, module2) {
    "use strict";
    var IndexedObject = require_indexed_object();
    var requireObjectCoercible = require_require_object_coercible();
    module2.exports = function(it) {
      return IndexedObject(requireObjectCoercible(it));
    };
  }
});

// node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/is-callable.js
var require_is_callable = __commonJS({
  "node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/is-callable.js"(exports, module2) {
    "use strict";
    var documentAll = typeof document == "object" && document.all;
    module2.exports = typeof documentAll == "undefined" && documentAll !== void 0 ? function(argument) {
      return typeof argument == "function" || argument === documentAll;
    } : function(argument) {
      return typeof argument == "function";
    };
  }
});

// node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/is-object.js
var require_is_object = __commonJS({
  "node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/is-object.js"(exports, module2) {
    "use strict";
    var isCallable = require_is_callable();
    module2.exports = function(it) {
      return typeof it == "object" ? it !== null : isCallable(it);
    };
  }
});

// node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/get-built-in.js
var require_get_built_in = __commonJS({
  "node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/get-built-in.js"(exports, module2) {
    "use strict";
    var global2 = require_global();
    var isCallable = require_is_callable();
    var aFunction = function(argument) {
      return isCallable(argument) ? argument : void 0;
    };
    module2.exports = function(namespace, method) {
      return arguments.length < 2 ? aFunction(global2[namespace]) : global2[namespace] && global2[namespace][method];
    };
  }
});

// node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/object-is-prototype-of.js
var require_object_is_prototype_of = __commonJS({
  "node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/object-is-prototype-of.js"(exports, module2) {
    "use strict";
    var uncurryThis = require_function_uncurry_this();
    module2.exports = uncurryThis({}.isPrototypeOf);
  }
});

// node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/engine-user-agent.js
var require_engine_user_agent = __commonJS({
  "node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/engine-user-agent.js"(exports, module2) {
    "use strict";
    module2.exports = typeof navigator != "undefined" && String(navigator.userAgent) || "";
  }
});

// node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/engine-v8-version.js
var require_engine_v8_version = __commonJS({
  "node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/engine-v8-version.js"(exports, module2) {
    "use strict";
    var global2 = require_global();
    var userAgent = require_engine_user_agent();
    var process = global2.process;
    var Deno = global2.Deno;
    var versions = process && process.versions || Deno && Deno.version;
    var v8 = versions && versions.v8;
    var match;
    var version;
    if (v8) {
      match = v8.split(".");
      version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
    }
    if (!version && userAgent) {
      match = userAgent.match(/Edge\/(\d+)/);
      if (!match || match[1] >= 74) {
        match = userAgent.match(/Chrome\/(\d+)/);
        if (match)
          version = +match[1];
      }
    }
    module2.exports = version;
  }
});

// node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/symbol-constructor-detection.js
var require_symbol_constructor_detection = __commonJS({
  "node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/symbol-constructor-detection.js"(exports, module2) {
    "use strict";
    var V8_VERSION = require_engine_v8_version();
    var fails = require_fails();
    var global2 = require_global();
    var $String = global2.String;
    module2.exports = !!Object.getOwnPropertySymbols && !fails(function() {
      var symbol = Symbol("symbol detection");
      return !$String(symbol) || !(Object(symbol) instanceof Symbol) || // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
      !Symbol.sham && V8_VERSION && V8_VERSION < 41;
    });
  }
});

// node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/use-symbol-as-uid.js
var require_use_symbol_as_uid = __commonJS({
  "node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/use-symbol-as-uid.js"(exports, module2) {
    "use strict";
    var NATIVE_SYMBOL = require_symbol_constructor_detection();
    module2.exports = NATIVE_SYMBOL && !Symbol.sham && typeof Symbol.iterator == "symbol";
  }
});

// node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/is-symbol.js
var require_is_symbol = __commonJS({
  "node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/is-symbol.js"(exports, module2) {
    "use strict";
    var getBuiltIn = require_get_built_in();
    var isCallable = require_is_callable();
    var isPrototypeOf = require_object_is_prototype_of();
    var USE_SYMBOL_AS_UID = require_use_symbol_as_uid();
    var $Object = Object;
    module2.exports = USE_SYMBOL_AS_UID ? function(it) {
      return typeof it == "symbol";
    } : function(it) {
      var $Symbol = getBuiltIn("Symbol");
      return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, $Object(it));
    };
  }
});

// node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/try-to-string.js
var require_try_to_string = __commonJS({
  "node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/try-to-string.js"(exports, module2) {
    "use strict";
    var $String = String;
    module2.exports = function(argument) {
      try {
        return $String(argument);
      } catch (error) {
        return "Object";
      }
    };
  }
});

// node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/a-callable.js
var require_a_callable = __commonJS({
  "node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/a-callable.js"(exports, module2) {
    "use strict";
    var isCallable = require_is_callable();
    var tryToString = require_try_to_string();
    var $TypeError = TypeError;
    module2.exports = function(argument) {
      if (isCallable(argument))
        return argument;
      throw new $TypeError(tryToString(argument) + " is not a function");
    };
  }
});

// node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/get-method.js
var require_get_method = __commonJS({
  "node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/get-method.js"(exports, module2) {
    "use strict";
    var aCallable = require_a_callable();
    var isNullOrUndefined = require_is_null_or_undefined();
    module2.exports = function(V, P) {
      var func = V[P];
      return isNullOrUndefined(func) ? void 0 : aCallable(func);
    };
  }
});

// node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/ordinary-to-primitive.js
var require_ordinary_to_primitive = __commonJS({
  "node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/ordinary-to-primitive.js"(exports, module2) {
    "use strict";
    var call = require_function_call();
    var isCallable = require_is_callable();
    var isObject = require_is_object();
    var $TypeError = TypeError;
    module2.exports = function(input, pref) {
      var fn, val;
      if (pref === "string" && isCallable(fn = input.toString) && !isObject(val = call(fn, input)))
        return val;
      if (isCallable(fn = input.valueOf) && !isObject(val = call(fn, input)))
        return val;
      if (pref !== "string" && isCallable(fn = input.toString) && !isObject(val = call(fn, input)))
        return val;
      throw new $TypeError("Can't convert object to primitive value");
    };
  }
});

// node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/is-pure.js
var require_is_pure = __commonJS({
  "node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/is-pure.js"(exports, module2) {
    "use strict";
    module2.exports = false;
  }
});

// node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/define-global-property.js
var require_define_global_property = __commonJS({
  "node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/define-global-property.js"(exports, module2) {
    "use strict";
    var global2 = require_global();
    var defineProperty = Object.defineProperty;
    module2.exports = function(key, value) {
      try {
        defineProperty(global2, key, { value, configurable: true, writable: true });
      } catch (error) {
        global2[key] = value;
      }
      return value;
    };
  }
});

// node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/shared-store.js
var require_shared_store = __commonJS({
  "node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/shared-store.js"(exports, module2) {
    "use strict";
    var global2 = require_global();
    var defineGlobalProperty = require_define_global_property();
    var SHARED = "__core-js_shared__";
    var store = global2[SHARED] || defineGlobalProperty(SHARED, {});
    module2.exports = store;
  }
});

// node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/shared.js
var require_shared = __commonJS({
  "node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/shared.js"(exports, module2) {
    "use strict";
    var IS_PURE = require_is_pure();
    var store = require_shared_store();
    (module2.exports = function(key, value) {
      return store[key] || (store[key] = value !== void 0 ? value : {});
    })("versions", []).push({
      version: "3.35.0",
      mode: IS_PURE ? "pure" : "global",
      copyright: "© 2014-2023 Denis Pushkarev (zloirock.ru)",
      license: "https://github.com/zloirock/core-js/blob/v3.35.0/LICENSE",
      source: "https://github.com/zloirock/core-js"
    });
  }
});

// node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/to-object.js
var require_to_object = __commonJS({
  "node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/to-object.js"(exports, module2) {
    "use strict";
    var requireObjectCoercible = require_require_object_coercible();
    var $Object = Object;
    module2.exports = function(argument) {
      return $Object(requireObjectCoercible(argument));
    };
  }
});

// node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/has-own-property.js
var require_has_own_property = __commonJS({
  "node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/has-own-property.js"(exports, module2) {
    "use strict";
    var uncurryThis = require_function_uncurry_this();
    var toObject = require_to_object();
    var hasOwnProperty = uncurryThis({}.hasOwnProperty);
    module2.exports = Object.hasOwn || function hasOwn(it, key) {
      return hasOwnProperty(toObject(it), key);
    };
  }
});

// node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/uid.js
var require_uid = __commonJS({
  "node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/uid.js"(exports, module2) {
    "use strict";
    var uncurryThis = require_function_uncurry_this();
    var id = 0;
    var postfix = Math.random();
    var toString = uncurryThis(1 .toString);
    module2.exports = function(key) {
      return "Symbol(" + (key === void 0 ? "" : key) + ")_" + toString(++id + postfix, 36);
    };
  }
});

// node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/well-known-symbol.js
var require_well_known_symbol = __commonJS({
  "node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/well-known-symbol.js"(exports, module2) {
    "use strict";
    var global2 = require_global();
    var shared = require_shared();
    var hasOwn = require_has_own_property();
    var uid = require_uid();
    var NATIVE_SYMBOL = require_symbol_constructor_detection();
    var USE_SYMBOL_AS_UID = require_use_symbol_as_uid();
    var Symbol2 = global2.Symbol;
    var WellKnownSymbolsStore = shared("wks");
    var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol2["for"] || Symbol2 : Symbol2 && Symbol2.withoutSetter || uid;
    module2.exports = function(name) {
      if (!hasOwn(WellKnownSymbolsStore, name)) {
        WellKnownSymbolsStore[name] = NATIVE_SYMBOL && hasOwn(Symbol2, name) ? Symbol2[name] : createWellKnownSymbol("Symbol." + name);
      }
      return WellKnownSymbolsStore[name];
    };
  }
});

// node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/to-primitive.js
var require_to_primitive = __commonJS({
  "node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/to-primitive.js"(exports, module2) {
    "use strict";
    var call = require_function_call();
    var isObject = require_is_object();
    var isSymbol = require_is_symbol();
    var getMethod = require_get_method();
    var ordinaryToPrimitive = require_ordinary_to_primitive();
    var wellKnownSymbol = require_well_known_symbol();
    var $TypeError = TypeError;
    var TO_PRIMITIVE = wellKnownSymbol("toPrimitive");
    module2.exports = function(input, pref) {
      if (!isObject(input) || isSymbol(input))
        return input;
      var exoticToPrim = getMethod(input, TO_PRIMITIVE);
      var result;
      if (exoticToPrim) {
        if (pref === void 0)
          pref = "default";
        result = call(exoticToPrim, input, pref);
        if (!isObject(result) || isSymbol(result))
          return result;
        throw new $TypeError("Can't convert object to primitive value");
      }
      if (pref === void 0)
        pref = "number";
      return ordinaryToPrimitive(input, pref);
    };
  }
});

// node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/to-property-key.js
var require_to_property_key = __commonJS({
  "node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/to-property-key.js"(exports, module2) {
    "use strict";
    var toPrimitive = require_to_primitive();
    var isSymbol = require_is_symbol();
    module2.exports = function(argument) {
      var key = toPrimitive(argument, "string");
      return isSymbol(key) ? key : key + "";
    };
  }
});

// node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/document-create-element.js
var require_document_create_element = __commonJS({
  "node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/document-create-element.js"(exports, module2) {
    "use strict";
    var global2 = require_global();
    var isObject = require_is_object();
    var document2 = global2.document;
    var EXISTS = isObject(document2) && isObject(document2.createElement);
    module2.exports = function(it) {
      return EXISTS ? document2.createElement(it) : {};
    };
  }
});

// node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/ie8-dom-define.js
var require_ie8_dom_define = __commonJS({
  "node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/ie8-dom-define.js"(exports, module2) {
    "use strict";
    var DESCRIPTORS = require_descriptors();
    var fails = require_fails();
    var createElement = require_document_create_element();
    module2.exports = !DESCRIPTORS && !fails(function() {
      return Object.defineProperty(createElement("div"), "a", {
        get: function() {
          return 7;
        }
      }).a !== 7;
    });
  }
});

// node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/object-get-own-property-descriptor.js
var require_object_get_own_property_descriptor = __commonJS({
  "node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/object-get-own-property-descriptor.js"(exports) {
    "use strict";
    var DESCRIPTORS = require_descriptors();
    var call = require_function_call();
    var propertyIsEnumerableModule = require_object_property_is_enumerable();
    var createPropertyDescriptor = require_create_property_descriptor();
    var toIndexedObject = require_to_indexed_object();
    var toPropertyKey = require_to_property_key();
    var hasOwn = require_has_own_property();
    var IE8_DOM_DEFINE = require_ie8_dom_define();
    var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
      O = toIndexedObject(O);
      P = toPropertyKey(P);
      if (IE8_DOM_DEFINE)
        try {
          return $getOwnPropertyDescriptor(O, P);
        } catch (error) {
        }
      if (hasOwn(O, P))
        return createPropertyDescriptor(!call(propertyIsEnumerableModule.f, O, P), O[P]);
    };
  }
});

// node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/v8-prototype-define-bug.js
var require_v8_prototype_define_bug = __commonJS({
  "node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/v8-prototype-define-bug.js"(exports, module2) {
    "use strict";
    var DESCRIPTORS = require_descriptors();
    var fails = require_fails();
    module2.exports = DESCRIPTORS && fails(function() {
      return Object.defineProperty(function() {
      }, "prototype", {
        value: 42,
        writable: false
      }).prototype !== 42;
    });
  }
});

// node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/an-object.js
var require_an_object = __commonJS({
  "node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/an-object.js"(exports, module2) {
    "use strict";
    var isObject = require_is_object();
    var $String = String;
    var $TypeError = TypeError;
    module2.exports = function(argument) {
      if (isObject(argument))
        return argument;
      throw new $TypeError($String(argument) + " is not an object");
    };
  }
});

// node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/object-define-property.js
var require_object_define_property = __commonJS({
  "node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/object-define-property.js"(exports) {
    "use strict";
    var DESCRIPTORS = require_descriptors();
    var IE8_DOM_DEFINE = require_ie8_dom_define();
    var V8_PROTOTYPE_DEFINE_BUG = require_v8_prototype_define_bug();
    var anObject = require_an_object();
    var toPropertyKey = require_to_property_key();
    var $TypeError = TypeError;
    var $defineProperty = Object.defineProperty;
    var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    var ENUMERABLE = "enumerable";
    var CONFIGURABLE = "configurable";
    var WRITABLE = "writable";
    exports.f = DESCRIPTORS ? V8_PROTOTYPE_DEFINE_BUG ? function defineProperty(O, P, Attributes) {
      anObject(O);
      P = toPropertyKey(P);
      anObject(Attributes);
      if (typeof O === "function" && P === "prototype" && "value" in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
        var current = $getOwnPropertyDescriptor(O, P);
        if (current && current[WRITABLE]) {
          O[P] = Attributes.value;
          Attributes = {
            configurable: CONFIGURABLE in Attributes ? Attributes[CONFIGURABLE] : current[CONFIGURABLE],
            enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
            writable: false
          };
        }
      }
      return $defineProperty(O, P, Attributes);
    } : $defineProperty : function defineProperty(O, P, Attributes) {
      anObject(O);
      P = toPropertyKey(P);
      anObject(Attributes);
      if (IE8_DOM_DEFINE)
        try {
          return $defineProperty(O, P, Attributes);
        } catch (error) {
        }
      if ("get" in Attributes || "set" in Attributes)
        throw new $TypeError("Accessors not supported");
      if ("value" in Attributes)
        O[P] = Attributes.value;
      return O;
    };
  }
});

// node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/create-non-enumerable-property.js
var require_create_non_enumerable_property = __commonJS({
  "node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/create-non-enumerable-property.js"(exports, module2) {
    "use strict";
    var DESCRIPTORS = require_descriptors();
    var definePropertyModule = require_object_define_property();
    var createPropertyDescriptor = require_create_property_descriptor();
    module2.exports = DESCRIPTORS ? function(object, key, value) {
      return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
    } : function(object, key, value) {
      object[key] = value;
      return object;
    };
  }
});

// node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/function-name.js
var require_function_name = __commonJS({
  "node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/function-name.js"(exports, module2) {
    "use strict";
    var DESCRIPTORS = require_descriptors();
    var hasOwn = require_has_own_property();
    var FunctionPrototype = Function.prototype;
    var getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor;
    var EXISTS = hasOwn(FunctionPrototype, "name");
    var PROPER = EXISTS && function something() {
    }.name === "something";
    var CONFIGURABLE = EXISTS && (!DESCRIPTORS || DESCRIPTORS && getDescriptor(FunctionPrototype, "name").configurable);
    module2.exports = {
      EXISTS,
      PROPER,
      CONFIGURABLE
    };
  }
});

// node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/inspect-source.js
var require_inspect_source = __commonJS({
  "node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/inspect-source.js"(exports, module2) {
    "use strict";
    var uncurryThis = require_function_uncurry_this();
    var isCallable = require_is_callable();
    var store = require_shared_store();
    var functionToString = uncurryThis(Function.toString);
    if (!isCallable(store.inspectSource)) {
      store.inspectSource = function(it) {
        return functionToString(it);
      };
    }
    module2.exports = store.inspectSource;
  }
});

// node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/weak-map-basic-detection.js
var require_weak_map_basic_detection = __commonJS({
  "node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/weak-map-basic-detection.js"(exports, module2) {
    "use strict";
    var global2 = require_global();
    var isCallable = require_is_callable();
    var WeakMap2 = global2.WeakMap;
    module2.exports = isCallable(WeakMap2) && /native code/.test(String(WeakMap2));
  }
});

// node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/shared-key.js
var require_shared_key = __commonJS({
  "node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/shared-key.js"(exports, module2) {
    "use strict";
    var shared = require_shared();
    var uid = require_uid();
    var keys = shared("keys");
    module2.exports = function(key) {
      return keys[key] || (keys[key] = uid(key));
    };
  }
});

// node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/hidden-keys.js
var require_hidden_keys = __commonJS({
  "node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/hidden-keys.js"(exports, module2) {
    "use strict";
    module2.exports = {};
  }
});

// node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/internal-state.js
var require_internal_state = __commonJS({
  "node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/internal-state.js"(exports, module2) {
    "use strict";
    var NATIVE_WEAK_MAP = require_weak_map_basic_detection();
    var global2 = require_global();
    var isObject = require_is_object();
    var createNonEnumerableProperty = require_create_non_enumerable_property();
    var hasOwn = require_has_own_property();
    var shared = require_shared_store();
    var sharedKey = require_shared_key();
    var hiddenKeys = require_hidden_keys();
    var OBJECT_ALREADY_INITIALIZED = "Object already initialized";
    var TypeError2 = global2.TypeError;
    var WeakMap2 = global2.WeakMap;
    var set;
    var get;
    var has;
    var enforce = function(it) {
      return has(it) ? get(it) : set(it, {});
    };
    var getterFor = function(TYPE) {
      return function(it) {
        var state;
        if (!isObject(it) || (state = get(it)).type !== TYPE) {
          throw new TypeError2("Incompatible receiver, " + TYPE + " required");
        }
        return state;
      };
    };
    if (NATIVE_WEAK_MAP || shared.state) {
      store = shared.state || (shared.state = new WeakMap2());
      store.get = store.get;
      store.has = store.has;
      store.set = store.set;
      set = function(it, metadata) {
        if (store.has(it))
          throw new TypeError2(OBJECT_ALREADY_INITIALIZED);
        metadata.facade = it;
        store.set(it, metadata);
        return metadata;
      };
      get = function(it) {
        return store.get(it) || {};
      };
      has = function(it) {
        return store.has(it);
      };
    } else {
      STATE = sharedKey("state");
      hiddenKeys[STATE] = true;
      set = function(it, metadata) {
        if (hasOwn(it, STATE))
          throw new TypeError2(OBJECT_ALREADY_INITIALIZED);
        metadata.facade = it;
        createNonEnumerableProperty(it, STATE, metadata);
        return metadata;
      };
      get = function(it) {
        return hasOwn(it, STATE) ? it[STATE] : {};
      };
      has = function(it) {
        return hasOwn(it, STATE);
      };
    }
    var store;
    var STATE;
    module2.exports = {
      set,
      get,
      has,
      enforce,
      getterFor
    };
  }
});

// node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/make-built-in.js
var require_make_built_in = __commonJS({
  "node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/make-built-in.js"(exports, module2) {
    "use strict";
    var uncurryThis = require_function_uncurry_this();
    var fails = require_fails();
    var isCallable = require_is_callable();
    var hasOwn = require_has_own_property();
    var DESCRIPTORS = require_descriptors();
    var CONFIGURABLE_FUNCTION_NAME = require_function_name().CONFIGURABLE;
    var inspectSource = require_inspect_source();
    var InternalStateModule = require_internal_state();
    var enforceInternalState = InternalStateModule.enforce;
    var getInternalState = InternalStateModule.get;
    var $String = String;
    var defineProperty = Object.defineProperty;
    var stringSlice = uncurryThis("".slice);
    var replace = uncurryThis("".replace);
    var join = uncurryThis([].join);
    var CONFIGURABLE_LENGTH = DESCRIPTORS && !fails(function() {
      return defineProperty(function() {
      }, "length", { value: 8 }).length !== 8;
    });
    var TEMPLATE = String(String).split("String");
    var makeBuiltIn = module2.exports = function(value, name, options) {
      if (stringSlice($String(name), 0, 7) === "Symbol(") {
        name = "[" + replace($String(name), /^Symbol\(([^)]*)\)/, "$1") + "]";
      }
      if (options && options.getter)
        name = "get " + name;
      if (options && options.setter)
        name = "set " + name;
      if (!hasOwn(value, "name") || CONFIGURABLE_FUNCTION_NAME && value.name !== name) {
        if (DESCRIPTORS)
          defineProperty(value, "name", { value: name, configurable: true });
        else
          value.name = name;
      }
      if (CONFIGURABLE_LENGTH && options && hasOwn(options, "arity") && value.length !== options.arity) {
        defineProperty(value, "length", { value: options.arity });
      }
      try {
        if (options && hasOwn(options, "constructor") && options.constructor) {
          if (DESCRIPTORS)
            defineProperty(value, "prototype", { writable: false });
        } else if (value.prototype)
          value.prototype = void 0;
      } catch (error) {
      }
      var state = enforceInternalState(value);
      if (!hasOwn(state, "source")) {
        state.source = join(TEMPLATE, typeof name == "string" ? name : "");
      }
      return value;
    };
    Function.prototype.toString = makeBuiltIn(function toString() {
      return isCallable(this) && getInternalState(this).source || inspectSource(this);
    }, "toString");
  }
});

// node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/define-built-in.js
var require_define_built_in = __commonJS({
  "node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/define-built-in.js"(exports, module2) {
    "use strict";
    var isCallable = require_is_callable();
    var definePropertyModule = require_object_define_property();
    var makeBuiltIn = require_make_built_in();
    var defineGlobalProperty = require_define_global_property();
    module2.exports = function(O, key, value, options) {
      if (!options)
        options = {};
      var simple = options.enumerable;
      var name = options.name !== void 0 ? options.name : key;
      if (isCallable(value))
        makeBuiltIn(value, name, options);
      if (options.global) {
        if (simple)
          O[key] = value;
        else
          defineGlobalProperty(key, value);
      } else {
        try {
          if (!options.unsafe)
            delete O[key];
          else if (O[key])
            simple = true;
        } catch (error) {
        }
        if (simple)
          O[key] = value;
        else
          definePropertyModule.f(O, key, {
            value,
            enumerable: false,
            configurable: !options.nonConfigurable,
            writable: !options.nonWritable
          });
      }
      return O;
    };
  }
});

// node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/math-trunc.js
var require_math_trunc = __commonJS({
  "node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/math-trunc.js"(exports, module2) {
    "use strict";
    var ceil = Math.ceil;
    var floor = Math.floor;
    module2.exports = Math.trunc || function trunc(x) {
      var n = +x;
      return (n > 0 ? floor : ceil)(n);
    };
  }
});

// node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/to-integer-or-infinity.js
var require_to_integer_or_infinity = __commonJS({
  "node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/to-integer-or-infinity.js"(exports, module2) {
    "use strict";
    var trunc = require_math_trunc();
    module2.exports = function(argument) {
      var number = +argument;
      return number !== number || number === 0 ? 0 : trunc(number);
    };
  }
});

// node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/to-absolute-index.js
var require_to_absolute_index = __commonJS({
  "node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/to-absolute-index.js"(exports, module2) {
    "use strict";
    var toIntegerOrInfinity = require_to_integer_or_infinity();
    var max = Math.max;
    var min = Math.min;
    module2.exports = function(index, length) {
      var integer = toIntegerOrInfinity(index);
      return integer < 0 ? max(integer + length, 0) : min(integer, length);
    };
  }
});

// node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/to-length.js
var require_to_length = __commonJS({
  "node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/to-length.js"(exports, module2) {
    "use strict";
    var toIntegerOrInfinity = require_to_integer_or_infinity();
    var min = Math.min;
    module2.exports = function(argument) {
      return argument > 0 ? min(toIntegerOrInfinity(argument), 9007199254740991) : 0;
    };
  }
});

// node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/length-of-array-like.js
var require_length_of_array_like = __commonJS({
  "node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/length-of-array-like.js"(exports, module2) {
    "use strict";
    var toLength = require_to_length();
    module2.exports = function(obj) {
      return toLength(obj.length);
    };
  }
});

// node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/array-includes.js
var require_array_includes = __commonJS({
  "node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/array-includes.js"(exports, module2) {
    "use strict";
    var toIndexedObject = require_to_indexed_object();
    var toAbsoluteIndex = require_to_absolute_index();
    var lengthOfArrayLike = require_length_of_array_like();
    var createMethod = function(IS_INCLUDES) {
      return function($this, el, fromIndex) {
        var O = toIndexedObject($this);
        var length = lengthOfArrayLike(O);
        var index = toAbsoluteIndex(fromIndex, length);
        var value;
        if (IS_INCLUDES && el !== el)
          while (length > index) {
            value = O[index++];
            if (value !== value)
              return true;
          }
        else
          for (; length > index; index++) {
            if ((IS_INCLUDES || index in O) && O[index] === el)
              return IS_INCLUDES || index || 0;
          }
        return !IS_INCLUDES && -1;
      };
    };
    module2.exports = {
      // `Array.prototype.includes` method
      // https://tc39.es/ecma262/#sec-array.prototype.includes
      includes: createMethod(true),
      // `Array.prototype.indexOf` method
      // https://tc39.es/ecma262/#sec-array.prototype.indexof
      indexOf: createMethod(false)
    };
  }
});

// node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/object-keys-internal.js
var require_object_keys_internal = __commonJS({
  "node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/object-keys-internal.js"(exports, module2) {
    "use strict";
    var uncurryThis = require_function_uncurry_this();
    var hasOwn = require_has_own_property();
    var toIndexedObject = require_to_indexed_object();
    var indexOf = require_array_includes().indexOf;
    var hiddenKeys = require_hidden_keys();
    var push = uncurryThis([].push);
    module2.exports = function(object, names) {
      var O = toIndexedObject(object);
      var i = 0;
      var result = [];
      var key;
      for (key in O)
        !hasOwn(hiddenKeys, key) && hasOwn(O, key) && push(result, key);
      while (names.length > i)
        if (hasOwn(O, key = names[i++])) {
          ~indexOf(result, key) || push(result, key);
        }
      return result;
    };
  }
});

// node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/enum-bug-keys.js
var require_enum_bug_keys = __commonJS({
  "node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/enum-bug-keys.js"(exports, module2) {
    "use strict";
    module2.exports = [
      "constructor",
      "hasOwnProperty",
      "isPrototypeOf",
      "propertyIsEnumerable",
      "toLocaleString",
      "toString",
      "valueOf"
    ];
  }
});

// node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/object-get-own-property-names.js
var require_object_get_own_property_names = __commonJS({
  "node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/object-get-own-property-names.js"(exports) {
    "use strict";
    var internalObjectKeys = require_object_keys_internal();
    var enumBugKeys = require_enum_bug_keys();
    var hiddenKeys = enumBugKeys.concat("length", "prototype");
    exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
      return internalObjectKeys(O, hiddenKeys);
    };
  }
});

// node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/object-get-own-property-symbols.js
var require_object_get_own_property_symbols = __commonJS({
  "node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/object-get-own-property-symbols.js"(exports) {
    "use strict";
    exports.f = Object.getOwnPropertySymbols;
  }
});

// node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/own-keys.js
var require_own_keys = __commonJS({
  "node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/own-keys.js"(exports, module2) {
    "use strict";
    var getBuiltIn = require_get_built_in();
    var uncurryThis = require_function_uncurry_this();
    var getOwnPropertyNamesModule = require_object_get_own_property_names();
    var getOwnPropertySymbolsModule = require_object_get_own_property_symbols();
    var anObject = require_an_object();
    var concat = uncurryThis([].concat);
    module2.exports = getBuiltIn("Reflect", "ownKeys") || function ownKeys(it) {
      var keys = getOwnPropertyNamesModule.f(anObject(it));
      var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
      return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
    };
  }
});

// node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/copy-constructor-properties.js
var require_copy_constructor_properties = __commonJS({
  "node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/copy-constructor-properties.js"(exports, module2) {
    "use strict";
    var hasOwn = require_has_own_property();
    var ownKeys = require_own_keys();
    var getOwnPropertyDescriptorModule = require_object_get_own_property_descriptor();
    var definePropertyModule = require_object_define_property();
    module2.exports = function(target, source, exceptions) {
      var keys = ownKeys(source);
      var defineProperty = definePropertyModule.f;
      var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
      for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        if (!hasOwn(target, key) && !(exceptions && hasOwn(exceptions, key))) {
          defineProperty(target, key, getOwnPropertyDescriptor(source, key));
        }
      }
    };
  }
});

// node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/is-forced.js
var require_is_forced = __commonJS({
  "node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/is-forced.js"(exports, module2) {
    "use strict";
    var fails = require_fails();
    var isCallable = require_is_callable();
    var replacement = /#|\.prototype\./;
    var isForced = function(feature, detection) {
      var value = data[normalize(feature)];
      return value === POLYFILL ? true : value === NATIVE ? false : isCallable(detection) ? fails(detection) : !!detection;
    };
    var normalize = isForced.normalize = function(string) {
      return String(string).replace(replacement, ".").toLowerCase();
    };
    var data = isForced.data = {};
    var NATIVE = isForced.NATIVE = "N";
    var POLYFILL = isForced.POLYFILL = "P";
    module2.exports = isForced;
  }
});

// node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/export.js
var require_export = __commonJS({
  "node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/export.js"(exports, module2) {
    "use strict";
    var global2 = require_global();
    var getOwnPropertyDescriptor = require_object_get_own_property_descriptor().f;
    var createNonEnumerableProperty = require_create_non_enumerable_property();
    var defineBuiltIn = require_define_built_in();
    var defineGlobalProperty = require_define_global_property();
    var copyConstructorProperties = require_copy_constructor_properties();
    var isForced = require_is_forced();
    module2.exports = function(options, source) {
      var TARGET = options.target;
      var GLOBAL = options.global;
      var STATIC = options.stat;
      var FORCED, target, key, targetProperty, sourceProperty, descriptor;
      if (GLOBAL) {
        target = global2;
      } else if (STATIC) {
        target = global2[TARGET] || defineGlobalProperty(TARGET, {});
      } else {
        target = (global2[TARGET] || {}).prototype;
      }
      if (target)
        for (key in source) {
          sourceProperty = source[key];
          if (options.dontCallGetSet) {
            descriptor = getOwnPropertyDescriptor(target, key);
            targetProperty = descriptor && descriptor.value;
          } else
            targetProperty = target[key];
          FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? "." : "#") + key, options.forced);
          if (!FORCED && targetProperty !== void 0) {
            if (typeof sourceProperty == typeof targetProperty)
              continue;
            copyConstructorProperties(sourceProperty, targetProperty);
          }
          if (options.sham || targetProperty && targetProperty.sham) {
            createNonEnumerableProperty(sourceProperty, "sham", true);
          }
          defineBuiltIn(target, key, sourceProperty, options);
        }
    };
  }
});

// node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/is-array.js
var require_is_array = __commonJS({
  "node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/is-array.js"(exports, module2) {
    "use strict";
    var classof = require_classof_raw();
    module2.exports = Array.isArray || function isArray(argument) {
      return classof(argument) === "Array";
    };
  }
});

// node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/array-set-length.js
var require_array_set_length = __commonJS({
  "node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/array-set-length.js"(exports, module2) {
    "use strict";
    var DESCRIPTORS = require_descriptors();
    var isArray = require_is_array();
    var $TypeError = TypeError;
    var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    var SILENT_ON_NON_WRITABLE_LENGTH_SET = DESCRIPTORS && !function() {
      if (this !== void 0)
        return true;
      try {
        Object.defineProperty([], "length", { writable: false }).length = 1;
      } catch (error) {
        return error instanceof TypeError;
      }
    }();
    module2.exports = SILENT_ON_NON_WRITABLE_LENGTH_SET ? function(O, length) {
      if (isArray(O) && !getOwnPropertyDescriptor(O, "length").writable) {
        throw new $TypeError("Cannot set read only .length");
      }
      return O.length = length;
    } : function(O, length) {
      return O.length = length;
    };
  }
});

// node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/does-not-exceed-safe-integer.js
var require_does_not_exceed_safe_integer = __commonJS({
  "node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/does-not-exceed-safe-integer.js"(exports, module2) {
    "use strict";
    var $TypeError = TypeError;
    var MAX_SAFE_INTEGER = 9007199254740991;
    module2.exports = function(it) {
      if (it > MAX_SAFE_INTEGER)
        throw $TypeError("Maximum allowed index exceeded");
      return it;
    };
  }
});

// node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/modules/es.array.push.js
var require_es_array_push = __commonJS({
  "node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/modules/es.array.push.js"() {
    "use strict";
    var $2 = require_export();
    var toObject = require_to_object();
    var lengthOfArrayLike = require_length_of_array_like();
    var setArrayLength = require_array_set_length();
    var doesNotExceedSafeInteger = require_does_not_exceed_safe_integer();
    var fails = require_fails();
    var INCORRECT_TO_LENGTH = fails(function() {
      return [].push.call({ length: 4294967296 }, 1) !== 4294967297;
    });
    var properErrorOnNonWritableLength = function() {
      try {
        Object.defineProperty([], "length", { writable: false }).push();
      } catch (error) {
        return error instanceof TypeError;
      }
    };
    var FORCED = INCORRECT_TO_LENGTH || !properErrorOnNonWritableLength();
    $2({ target: "Array", proto: true, arity: 1, forced: FORCED }, {
      // eslint-disable-next-line no-unused-vars -- required for `.length`
      push: function push(item) {
        var O = toObject(this);
        var len = lengthOfArrayLike(O);
        var argCount = arguments.length;
        doesNotExceedSafeInteger(len + argCount);
        for (var i = 0; i < argCount; i++) {
          O[len] = arguments[i];
          len++;
        }
        setArrayLength(O, len);
        return len;
      }
    });
  }
});

// dist/TextSpacing/TextSpacing.js
//! src/TextSpacing/modules/util.ts
require_IntersectionObserver();
require_es_array_push();
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
    result.push(slice);
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
  var _pendingActions$get;
  if (!pendingActions.has(element)) {
    pendingActions.set(element, []);
  }
  (_pendingActions$get = pendingActions.get(element)) === null || _pendingActions$get === void 0 || _pendingActions$get.push(callback);
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
    result.push(parent);
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
            result.push(candidate);
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
      indexes.push(match.index + 1);
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
        replacement.push(fragments.at(-1));
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibm9kZV9tb2R1bGVzLy5wbnBtL0BtcmhlbnJ5K2NvcmUtd2ViQDEuMi4xL25vZGVfbW9kdWxlcy9AbXJoZW5yeS9jb3JlLXdlYi9tb2R1bGVzL0ludGVyc2VjdGlvbk9ic2VydmVyLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZ2xvYmFsLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZmFpbHMuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9kZXNjcmlwdG9ycy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2Z1bmN0aW9uLWJpbmQtbmF0aXZlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZnVuY3Rpb24tY2FsbC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1wcm9wZXJ0eS1pcy1lbnVtZXJhYmxlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5LWRlc2NyaXB0b3IuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jbGFzc29mLXJhdy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2luZGV4ZWQtb2JqZWN0LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXMtbnVsbC1vci11bmRlZmluZWQuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9yZXF1aXJlLW9iamVjdC1jb2VyY2libGUuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy90by1pbmRleGVkLW9iamVjdC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLWNhbGxhYmxlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXMtb2JqZWN0LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZ2V0LWJ1aWx0LWluLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LWlzLXByb3RvdHlwZS1vZi5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2VuZ2luZS11c2VyLWFnZW50LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZW5naW5lLXY4LXZlcnNpb24uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zeW1ib2wtY29uc3RydWN0b3ItZGV0ZWN0aW9uLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdXNlLXN5bWJvbC1hcy11aWQuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pcy1zeW1ib2wuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy90cnktdG8tc3RyaW5nLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvYS1jYWxsYWJsZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2dldC1tZXRob2QuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vcmRpbmFyeS10by1wcmltaXRpdmUuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pcy1wdXJlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZGVmaW5lLWdsb2JhbC1wcm9wZXJ0eS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3NoYXJlZC1zdG9yZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3NoYXJlZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RvLW9iamVjdC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2hhcy1vd24tcHJvcGVydHkuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy91aWQuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RvLXByaW1pdGl2ZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RvLXByb3BlcnR5LWtleS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2RvY3VtZW50LWNyZWF0ZS1lbGVtZW50LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaWU4LWRvbS1kZWZpbmUuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdjgtcHJvdG90eXBlLWRlZmluZS1idWcuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hbi1vYmplY3QuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY3JlYXRlLW5vbi1lbnVtZXJhYmxlLXByb3BlcnR5LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZnVuY3Rpb24tbmFtZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2luc3BlY3Qtc291cmNlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvd2Vhay1tYXAtYmFzaWMtZGV0ZWN0aW9uLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2hhcmVkLWtleS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2hpZGRlbi1rZXlzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaW50ZXJuYWwtc3RhdGUuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9tYWtlLWJ1aWx0LWluLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZGVmaW5lLWJ1aWx0LWluLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvbWF0aC10cnVuYy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RvLWludGVnZXItb3ItaW5maW5pdHkuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy90by1hYnNvbHV0ZS1pbmRleC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RvLWxlbmd0aC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2xlbmd0aC1vZi1hcnJheS1saWtlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvYXJyYXktaW5jbHVkZXMuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3Qta2V5cy1pbnRlcm5hbC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2VudW0tYnVnLWtleXMuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1uYW1lcy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LXN5bWJvbHMuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vd24ta2V5cy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2NvcHktY29uc3RydWN0b3ItcHJvcGVydGllcy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLWZvcmNlZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2V4cG9ydC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLWFycmF5LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvYXJyYXktc2V0LWxlbmd0aC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2RvZXMtbm90LWV4Y2VlZC1zYWZlLWludGVnZXIuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkucHVzaC5qcyIsICJzcmMvVGV4dFNwYWNpbmcvbW9kdWxlcy91dGlsLnRzIiwgInNyYy9UZXh0U3BhY2luZy9tb2R1bGVzL3F1ZXVlLnRzIiwgInNyYy9UZXh0U3BhY2luZy9tb2R1bGVzL3NwYWNpbmcudHMiLCAic3JjL1RleHRTcGFjaW5nL1RleHRTcGFjaW5nLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyIoZnVuY3Rpb24odW5kZWZpbmVkKSB7XG5pZiAoIShcIkludGVyc2VjdGlvbk9ic2VydmVyXCJpbiB3aW5kb3cmJlwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXJFbnRyeVwiaW4gd2luZG93JiZcImludGVyc2VjdGlvblJhdGlvXCJpbiB3aW5kb3cuSW50ZXJzZWN0aW9uT2JzZXJ2ZXJFbnRyeS5wcm90b3R5cGVcbikpIHtcbi8vIEludGVyc2VjdGlvbk9ic2VydmVyXG4vKipcbiAqIENvcHlyaWdodCAyMDE2IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIFczQyBTT0ZUV0FSRSBBTkQgRE9DVU1FTlQgTk9USUNFIEFORCBMSUNFTlNFLlxuICpcbiAqICBodHRwczovL3d3dy53My5vcmcvQ29uc29ydGl1bS9MZWdhbC8yMDE1L2NvcHlyaWdodC1zb2Z0d2FyZS1hbmQtZG9jdW1lbnRcbiAqXG4gKi9cblxuKGZ1bmN0aW9uKHdpbmRvdywgZG9jdW1lbnQpIHtcbid1c2Ugc3RyaWN0JztcblxudmFyIHN1cHBvcnRlZE5hdGl2ZWx5ID0gJ0ludGVyc2VjdGlvbk9ic2VydmVyJyBpbiB3aW5kb3cgJiZcbidJbnRlcnNlY3Rpb25PYnNlcnZlckVudHJ5JyBpbiB3aW5kb3cgJiZcbidpbnRlcnNlY3Rpb25SYXRpbycgaW4gd2luZG93LkludGVyc2VjdGlvbk9ic2VydmVyRW50cnkucHJvdG90eXBlO1xuXG5pZiAoc3VwcG9ydGVkTmF0aXZlbHkpIHtcblx0cmV0dXJuO1xufVxuLyoqXG4gKiBBbiBJbnRlcnNlY3Rpb25PYnNlcnZlciByZWdpc3RyeS4gVGhpcyByZWdpc3RyeSBleGlzdHMgdG8gaG9sZCBhIHN0cm9uZ1xuICogcmVmZXJlbmNlIHRvIEludGVyc2VjdGlvbk9ic2VydmVyIGluc3RhbmNlcyBjdXJyZW50bHkgb2JzZXJ2aW5nIGEgdGFyZ2V0XG4gKiBlbGVtZW50LiBXaXRob3V0IHRoaXMgcmVnaXN0cnksIGluc3RhbmNlcyB3aXRob3V0IGFub3RoZXIgcmVmZXJlbmNlIG1heSBiZVxuICogZ2FyYmFnZSBjb2xsZWN0ZWQuXG4gKi9cbnZhciByZWdpc3RyeSA9IFtdO1xuXG5cbi8qKlxuICogQ3JlYXRlcyB0aGUgZ2xvYmFsIEludGVyc2VjdGlvbk9ic2VydmVyRW50cnkgY29uc3RydWN0b3IuXG4gKiBodHRwczovL3czYy5naXRodWIuaW8vSW50ZXJzZWN0aW9uT2JzZXJ2ZXIvI2ludGVyc2VjdGlvbi1vYnNlcnZlci1lbnRyeVxuICogQHBhcmFtIHtPYmplY3R9IGVudHJ5IEEgZGljdGlvbmFyeSBvZiBpbnN0YW5jZSBwcm9wZXJ0aWVzLlxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmZ1bmN0aW9uIEludGVyc2VjdGlvbk9ic2VydmVyRW50cnkoZW50cnkpIHtcblx0dGhpcy50aW1lID0gZW50cnkudGltZTtcblx0dGhpcy50YXJnZXQgPSBlbnRyeS50YXJnZXQ7XG5cdHRoaXMucm9vdEJvdW5kcyA9IGVudHJ5LnJvb3RCb3VuZHM7XG5cdHRoaXMuYm91bmRpbmdDbGllbnRSZWN0ID0gZW50cnkuYm91bmRpbmdDbGllbnRSZWN0O1xuXHR0aGlzLmludGVyc2VjdGlvblJlY3QgPSBlbnRyeS5pbnRlcnNlY3Rpb25SZWN0IHx8IGdldEVtcHR5UmVjdCgpO1xuXHR0cnkge1xuXHRcdHRoaXMuaXNJbnRlcnNlY3RpbmcgPSAhIWVudHJ5LmludGVyc2VjdGlvblJlY3Q7XG5cdH0gY2F0Y2ggKGVycikge1xuXHRcdC8vIFRoaXMgbWVhbnMgd2UgYXJlIHVzaW5nIHRoZSBJbnRlcnNlY3Rpb25PYnNlcnZlckVudHJ5IHBvbHlmaWxsIHdoaWNoIGhhcyBvbmx5IGRlZmluZWQgYSBnZXR0ZXJcblx0fVxuXG5cdC8vIENhbGN1bGF0ZXMgdGhlIGludGVyc2VjdGlvbiByYXRpby5cblx0dmFyIHRhcmdldFJlY3QgPSB0aGlzLmJvdW5kaW5nQ2xpZW50UmVjdDtcblx0dmFyIHRhcmdldEFyZWEgPSB0YXJnZXRSZWN0LndpZHRoICogdGFyZ2V0UmVjdC5oZWlnaHQ7XG5cdHZhciBpbnRlcnNlY3Rpb25SZWN0ID0gdGhpcy5pbnRlcnNlY3Rpb25SZWN0O1xuXHR2YXIgaW50ZXJzZWN0aW9uQXJlYSA9IGludGVyc2VjdGlvblJlY3Qud2lkdGggKiBpbnRlcnNlY3Rpb25SZWN0LmhlaWdodDtcblxuXHQvLyBTZXRzIGludGVyc2VjdGlvbiByYXRpby5cblx0aWYgKHRhcmdldEFyZWEpIHtcblx0XHQvLyBSb3VuZCB0aGUgaW50ZXJzZWN0aW9uIHJhdGlvIHRvIGF2b2lkIGZsb2F0aW5nIHBvaW50IG1hdGggaXNzdWVzOlxuXHRcdC8vIGh0dHBzOi8vZ2l0aHViLmNvbS93M2MvSW50ZXJzZWN0aW9uT2JzZXJ2ZXIvaXNzdWVzLzMyNFxuXHRcdHRoaXMuaW50ZXJzZWN0aW9uUmF0aW8gPSBOdW1iZXIoKGludGVyc2VjdGlvbkFyZWEgLyB0YXJnZXRBcmVhKS50b0ZpeGVkKDQpKTtcblx0fSBlbHNlIHtcblx0XHQvLyBJZiBhcmVhIGlzIHplcm8gYW5kIGlzIGludGVyc2VjdGluZywgc2V0cyB0byAxLCBvdGhlcndpc2UgdG8gMFxuXHRcdHRoaXMuaW50ZXJzZWN0aW9uUmF0aW8gPSB0aGlzLmlzSW50ZXJzZWN0aW5nID8gMSA6IDA7XG5cdH1cbn1cblxuSW50ZXJzZWN0aW9uT2JzZXJ2ZXJFbnRyeS5wcm90b3R5cGUuaW50ZXJzZWN0aW9uUmF0aW8gPSAwO1xuXG4vKipcbiAqIENyZWF0ZXMgdGhlIGdsb2JhbCBJbnRlcnNlY3Rpb25PYnNlcnZlciBjb25zdHJ1Y3Rvci5cbiAqIGh0dHBzOi8vdzNjLmdpdGh1Yi5pby9JbnRlcnNlY3Rpb25PYnNlcnZlci8jaW50ZXJzZWN0aW9uLW9ic2VydmVyLWludGVyZmFjZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sgVGhlIGZ1bmN0aW9uIHRvIGJlIGludm9rZWQgYWZ0ZXIgaW50ZXJzZWN0aW9uXG4gKiAgICAgY2hhbmdlcyBoYXZlIHF1ZXVlZC4gVGhlIGZ1bmN0aW9uIGlzIG5vdCBpbnZva2VkIGlmIHRoZSBxdWV1ZSBoYXNcbiAqICAgICBiZWVuIGVtcHRpZWQgYnkgY2FsbGluZyB0aGUgYHRha2VSZWNvcmRzYCBtZXRob2QuXG4gKiBAcGFyYW0ge09iamVjdD19IG9wdF9vcHRpb25zIE9wdGlvbmFsIGNvbmZpZ3VyYXRpb24gb3B0aW9ucy5cbiAqIEBjb25zdHJ1Y3RvclxuICovXG5mdW5jdGlvbiBJbnRlcnNlY3Rpb25PYnNlcnZlcihjYWxsYmFjaywgb3B0X29wdGlvbnMpIHtcblxuXHR2YXIgb3B0aW9ucyA9IG9wdF9vcHRpb25zIHx8IHt9O1xuXG5cdGlmICh0eXBlb2YgY2FsbGJhY2sgIT0gJ2Z1bmN0aW9uJykge1xuXHRcdHRocm93IG5ldyBFcnJvcignY2FsbGJhY2sgbXVzdCBiZSBhIGZ1bmN0aW9uJyk7XG5cdH1cblxuXHRpZiAob3B0aW9ucy5yb290ICYmIG9wdGlvbnMucm9vdC5ub2RlVHlwZSAhPSAxKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCdyb290IG11c3QgYmUgYW4gRWxlbWVudCcpO1xuXHR9XG5cblx0Ly8gQmluZHMgYW5kIHRocm90dGxlcyBgdGhpcy5fY2hlY2tGb3JJbnRlcnNlY3Rpb25zYC5cblx0dGhpcy5fY2hlY2tGb3JJbnRlcnNlY3Rpb25zID0gdGhyb3R0bGUoXG5cdFx0XHR0aGlzLl9jaGVja0ZvckludGVyc2VjdGlvbnMuYmluZCh0aGlzKSwgdGhpcy5USFJPVFRMRV9USU1FT1VUKTtcblxuXHQvLyBQcml2YXRlIHByb3BlcnRpZXMuXG5cdHRoaXMuX2NhbGxiYWNrID0gY2FsbGJhY2s7XG5cdHRoaXMuX29ic2VydmF0aW9uVGFyZ2V0cyA9IFtdO1xuXHR0aGlzLl9xdWV1ZWRFbnRyaWVzID0gW107XG5cdHRoaXMuX3Jvb3RNYXJnaW5WYWx1ZXMgPSB0aGlzLl9wYXJzZVJvb3RNYXJnaW4ob3B0aW9ucy5yb290TWFyZ2luKTtcblxuXHQvLyBQdWJsaWMgcHJvcGVydGllcy5cblx0dGhpcy50aHJlc2hvbGRzID0gdGhpcy5faW5pdFRocmVzaG9sZHMob3B0aW9ucy50aHJlc2hvbGQpO1xuXHR0aGlzLnJvb3QgPSBvcHRpb25zLnJvb3QgfHwgbnVsbDtcblx0dGhpcy5yb290TWFyZ2luID0gdGhpcy5fcm9vdE1hcmdpblZhbHVlcy5tYXAoZnVuY3Rpb24obWFyZ2luKSB7XG5cdFx0cmV0dXJuIG1hcmdpbi52YWx1ZSArIG1hcmdpbi51bml0O1xuXHR9KS5qb2luKCcgJyk7XG59XG5cblxuLyoqXG4gKiBUaGUgbWluaW11bSBpbnRlcnZhbCB3aXRoaW4gd2hpY2ggdGhlIGRvY3VtZW50IHdpbGwgYmUgY2hlY2tlZCBmb3JcbiAqIGludGVyc2VjdGlvbiBjaGFuZ2VzLlxuICovXG5JbnRlcnNlY3Rpb25PYnNlcnZlci5wcm90b3R5cGUuVEhST1RUTEVfVElNRU9VVCA9IDEwMDtcblxuXG4vKipcbiAqIFRoZSBmcmVxdWVuY3kgaW4gd2hpY2ggdGhlIHBvbHlmaWxsIHBvbGxzIGZvciBpbnRlcnNlY3Rpb24gY2hhbmdlcy5cbiAqIHRoaXMgY2FuIGJlIHVwZGF0ZWQgb24gYSBwZXIgaW5zdGFuY2UgYmFzaXMgYW5kIG11c3QgYmUgc2V0IHByaW9yIHRvXG4gKiBjYWxsaW5nIGBvYnNlcnZlYCBvbiB0aGUgZmlyc3QgdGFyZ2V0LlxuICovXG5JbnRlcnNlY3Rpb25PYnNlcnZlci5wcm90b3R5cGUuUE9MTF9JTlRFUlZBTCA9IG51bGw7XG5cbi8qKlxuICogVXNlIGEgbXV0YXRpb24gb2JzZXJ2ZXIgb24gdGhlIHJvb3QgZWxlbWVudFxuICogdG8gZGV0ZWN0IGludGVyc2VjdGlvbiBjaGFuZ2VzLlxuICovXG5JbnRlcnNlY3Rpb25PYnNlcnZlci5wcm90b3R5cGUuVVNFX01VVEFUSU9OX09CU0VSVkVSID0gdHJ1ZTtcblxuXG4vKipcbiAqIFN0YXJ0cyBvYnNlcnZpbmcgYSB0YXJnZXQgZWxlbWVudCBmb3IgaW50ZXJzZWN0aW9uIGNoYW5nZXMgYmFzZWQgb25cbiAqIHRoZSB0aHJlc2hvbGRzIHZhbHVlcy5cbiAqIEBwYXJhbSB7RWxlbWVudH0gdGFyZ2V0IFRoZSBET00gZWxlbWVudCB0byBvYnNlcnZlLlxuICovXG5JbnRlcnNlY3Rpb25PYnNlcnZlci5wcm90b3R5cGUub2JzZXJ2ZSA9IGZ1bmN0aW9uKHRhcmdldCkge1xuXHR2YXIgaXNUYXJnZXRBbHJlYWR5T2JzZXJ2ZWQgPSB0aGlzLl9vYnNlcnZhdGlvblRhcmdldHMuc29tZShmdW5jdGlvbihpdGVtKSB7XG5cdFx0cmV0dXJuIGl0ZW0uZWxlbWVudCA9PSB0YXJnZXQ7XG5cdH0pO1xuXG5cdGlmIChpc1RhcmdldEFscmVhZHlPYnNlcnZlZCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGlmICghKHRhcmdldCAmJiB0YXJnZXQubm9kZVR5cGUgPT0gMSkpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoJ3RhcmdldCBtdXN0IGJlIGFuIEVsZW1lbnQnKTtcblx0fVxuXG5cdHRoaXMuX3JlZ2lzdGVySW5zdGFuY2UoKTtcblx0dGhpcy5fb2JzZXJ2YXRpb25UYXJnZXRzLnB1c2goe2VsZW1lbnQ6IHRhcmdldCwgZW50cnk6IG51bGx9KTtcblx0dGhpcy5fbW9uaXRvckludGVyc2VjdGlvbnMoKTtcblx0dGhpcy5fY2hlY2tGb3JJbnRlcnNlY3Rpb25zKCk7XG59O1xuXG5cbi8qKlxuICogU3RvcHMgb2JzZXJ2aW5nIGEgdGFyZ2V0IGVsZW1lbnQgZm9yIGludGVyc2VjdGlvbiBjaGFuZ2VzLlxuICogQHBhcmFtIHtFbGVtZW50fSB0YXJnZXQgVGhlIERPTSBlbGVtZW50IHRvIG9ic2VydmUuXG4gKi9cbkludGVyc2VjdGlvbk9ic2VydmVyLnByb3RvdHlwZS51bm9ic2VydmUgPSBmdW5jdGlvbih0YXJnZXQpIHtcblx0dGhpcy5fb2JzZXJ2YXRpb25UYXJnZXRzID1cblx0XHRcdHRoaXMuX29ic2VydmF0aW9uVGFyZ2V0cy5maWx0ZXIoZnVuY3Rpb24oaXRlbSkge1xuXG5cdFx0cmV0dXJuIGl0ZW0uZWxlbWVudCAhPSB0YXJnZXQ7XG5cdH0pO1xuXHRpZiAoIXRoaXMuX29ic2VydmF0aW9uVGFyZ2V0cy5sZW5ndGgpIHtcblx0XHR0aGlzLl91bm1vbml0b3JJbnRlcnNlY3Rpb25zKCk7XG5cdFx0dGhpcy5fdW5yZWdpc3Rlckluc3RhbmNlKCk7XG5cdH1cbn07XG5cblxuLyoqXG4gKiBTdG9wcyBvYnNlcnZpbmcgYWxsIHRhcmdldCBlbGVtZW50cyBmb3IgaW50ZXJzZWN0aW9uIGNoYW5nZXMuXG4gKi9cbkludGVyc2VjdGlvbk9ic2VydmVyLnByb3RvdHlwZS5kaXNjb25uZWN0ID0gZnVuY3Rpb24oKSB7XG5cdHRoaXMuX29ic2VydmF0aW9uVGFyZ2V0cyA9IFtdO1xuXHR0aGlzLl91bm1vbml0b3JJbnRlcnNlY3Rpb25zKCk7XG5cdHRoaXMuX3VucmVnaXN0ZXJJbnN0YW5jZSgpO1xufTtcblxuXG4vKipcbiAqIFJldHVybnMgYW55IHF1ZXVlIGVudHJpZXMgdGhhdCBoYXZlIG5vdCB5ZXQgYmVlbiByZXBvcnRlZCB0byB0aGVcbiAqIGNhbGxiYWNrIGFuZCBjbGVhcnMgdGhlIHF1ZXVlLiBUaGlzIGNhbiBiZSB1c2VkIGluIGNvbmp1bmN0aW9uIHdpdGggdGhlXG4gKiBjYWxsYmFjayB0byBvYnRhaW4gdGhlIGFic29sdXRlIG1vc3QgdXAtdG8tZGF0ZSBpbnRlcnNlY3Rpb24gaW5mb3JtYXRpb24uXG4gKiBAcmV0dXJuIHtBcnJheX0gVGhlIGN1cnJlbnRseSBxdWV1ZWQgZW50cmllcy5cbiAqL1xuSW50ZXJzZWN0aW9uT2JzZXJ2ZXIucHJvdG90eXBlLnRha2VSZWNvcmRzID0gZnVuY3Rpb24oKSB7XG5cdHZhciByZWNvcmRzID0gdGhpcy5fcXVldWVkRW50cmllcy5zbGljZSgpO1xuXHR0aGlzLl9xdWV1ZWRFbnRyaWVzID0gW107XG5cdHJldHVybiByZWNvcmRzO1xufTtcblxuXG4vKipcbiAqIEFjY2VwdHMgdGhlIHRocmVzaG9sZCB2YWx1ZSBmcm9tIHRoZSB1c2VyIGNvbmZpZ3VyYXRpb24gb2JqZWN0IGFuZFxuICogcmV0dXJucyBhIHNvcnRlZCBhcnJheSBvZiB1bmlxdWUgdGhyZXNob2xkIHZhbHVlcy4gSWYgYSB2YWx1ZSBpcyBub3RcbiAqIGJldHdlZW4gMCBhbmQgMSBhbmQgZXJyb3IgaXMgdGhyb3duLlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl8bnVtYmVyPX0gb3B0X3RocmVzaG9sZCBBbiBvcHRpb25hbCB0aHJlc2hvbGQgdmFsdWUgb3JcbiAqICAgICBhIGxpc3Qgb2YgdGhyZXNob2xkIHZhbHVlcywgZGVmYXVsdGluZyB0byBbMF0uXG4gKiBAcmV0dXJuIHtBcnJheX0gQSBzb3J0ZWQgbGlzdCBvZiB1bmlxdWUgYW5kIHZhbGlkIHRocmVzaG9sZCB2YWx1ZXMuXG4gKi9cbkludGVyc2VjdGlvbk9ic2VydmVyLnByb3RvdHlwZS5faW5pdFRocmVzaG9sZHMgPSBmdW5jdGlvbihvcHRfdGhyZXNob2xkKSB7XG5cdHZhciB0aHJlc2hvbGQgPSBvcHRfdGhyZXNob2xkIHx8IFswXTtcblx0aWYgKCFBcnJheS5pc0FycmF5KHRocmVzaG9sZCkpIHRocmVzaG9sZCA9IFt0aHJlc2hvbGRdO1xuXG5cdHJldHVybiB0aHJlc2hvbGQuc29ydCgpLmZpbHRlcihmdW5jdGlvbih0LCBpLCBhKSB7XG5cdFx0aWYgKHR5cGVvZiB0ICE9ICdudW1iZXInIHx8IGlzTmFOKHQpIHx8IHQgPCAwIHx8IHQgPiAxKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ3RocmVzaG9sZCBtdXN0IGJlIGEgbnVtYmVyIGJldHdlZW4gMCBhbmQgMSBpbmNsdXNpdmVseScpO1xuXHRcdH1cblx0XHRyZXR1cm4gdCAhPT0gYVtpIC0gMV07XG5cdH0pO1xufTtcblxuXG4vKipcbiAqIEFjY2VwdHMgdGhlIHJvb3RNYXJnaW4gdmFsdWUgZnJvbSB0aGUgdXNlciBjb25maWd1cmF0aW9uIG9iamVjdFxuICogYW5kIHJldHVybnMgYW4gYXJyYXkgb2YgdGhlIGZvdXIgbWFyZ2luIHZhbHVlcyBhcyBhbiBvYmplY3QgY29udGFpbmluZ1xuICogdGhlIHZhbHVlIGFuZCB1bml0IHByb3BlcnRpZXMuIElmIGFueSBvZiB0aGUgdmFsdWVzIGFyZSBub3QgcHJvcGVybHlcbiAqIGZvcm1hdHRlZCBvciB1c2UgYSB1bml0IG90aGVyIHRoYW4gcHggb3IgJSwgYW5kIGVycm9yIGlzIHRocm93bi5cbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge3N0cmluZz19IG9wdF9yb290TWFyZ2luIEFuIG9wdGlvbmFsIHJvb3RNYXJnaW4gdmFsdWUsXG4gKiAgICAgZGVmYXVsdGluZyB0byAnMHB4Jy5cbiAqIEByZXR1cm4ge0FycmF5PE9iamVjdD59IEFuIGFycmF5IG9mIG1hcmdpbiBvYmplY3RzIHdpdGggdGhlIGtleXNcbiAqICAgICB2YWx1ZSBhbmQgdW5pdC5cbiAqL1xuSW50ZXJzZWN0aW9uT2JzZXJ2ZXIucHJvdG90eXBlLl9wYXJzZVJvb3RNYXJnaW4gPSBmdW5jdGlvbihvcHRfcm9vdE1hcmdpbikge1xuXHR2YXIgbWFyZ2luU3RyaW5nID0gb3B0X3Jvb3RNYXJnaW4gfHwgJzBweCc7XG5cdHZhciBtYXJnaW5zID0gbWFyZ2luU3RyaW5nLnNwbGl0KC9cXHMrLykubWFwKGZ1bmN0aW9uKG1hcmdpbikge1xuXHRcdHZhciBwYXJ0cyA9IC9eKC0/XFxkKlxcLj9cXGQrKShweHwlKSQvLmV4ZWMobWFyZ2luKTtcblx0XHRpZiAoIXBhcnRzKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ3Jvb3RNYXJnaW4gbXVzdCBiZSBzcGVjaWZpZWQgaW4gcGl4ZWxzIG9yIHBlcmNlbnQnKTtcblx0XHR9XG5cdFx0cmV0dXJuIHt2YWx1ZTogcGFyc2VGbG9hdChwYXJ0c1sxXSksIHVuaXQ6IHBhcnRzWzJdfTtcblx0fSk7XG5cblx0Ly8gSGFuZGxlcyBzaG9ydGhhbmQuXG5cdG1hcmdpbnNbMV0gPSBtYXJnaW5zWzFdIHx8IG1hcmdpbnNbMF07XG5cdG1hcmdpbnNbMl0gPSBtYXJnaW5zWzJdIHx8IG1hcmdpbnNbMF07XG5cdG1hcmdpbnNbM10gPSBtYXJnaW5zWzNdIHx8IG1hcmdpbnNbMV07XG5cblx0cmV0dXJuIG1hcmdpbnM7XG59O1xuXG5cbi8qKlxuICogU3RhcnRzIHBvbGxpbmcgZm9yIGludGVyc2VjdGlvbiBjaGFuZ2VzIGlmIHRoZSBwb2xsaW5nIGlzIG5vdCBhbHJlYWR5XG4gKiBoYXBwZW5pbmcsIGFuZCBpZiB0aGUgcGFnZSdzIHZpc2liaWxpdHkgc3RhdGUgaXMgdmlzaWJsZS5cbiAqIEBwcml2YXRlXG4gKi9cbkludGVyc2VjdGlvbk9ic2VydmVyLnByb3RvdHlwZS5fbW9uaXRvckludGVyc2VjdGlvbnMgPSBmdW5jdGlvbigpIHtcblx0aWYgKCF0aGlzLl9tb25pdG9yaW5nSW50ZXJzZWN0aW9ucykge1xuXHRcdHRoaXMuX21vbml0b3JpbmdJbnRlcnNlY3Rpb25zID0gdHJ1ZTtcblxuXHRcdC8vIElmIGEgcG9sbCBpbnRlcnZhbCBpcyBzZXQsIHVzZSBwb2xsaW5nIGluc3RlYWQgb2YgbGlzdGVuaW5nIHRvXG5cdFx0Ly8gcmVzaXplIGFuZCBzY3JvbGwgZXZlbnRzIG9yIERPTSBtdXRhdGlvbnMuXG5cdFx0aWYgKHRoaXMuUE9MTF9JTlRFUlZBTCkge1xuXHRcdFx0dGhpcy5fbW9uaXRvcmluZ0ludGVydmFsID0gc2V0SW50ZXJ2YWwoXG5cdFx0XHRcdFx0dGhpcy5fY2hlY2tGb3JJbnRlcnNlY3Rpb25zLCB0aGlzLlBPTExfSU5URVJWQUwpO1xuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdGFkZEV2ZW50KHdpbmRvdywgJ3Jlc2l6ZScsIHRoaXMuX2NoZWNrRm9ySW50ZXJzZWN0aW9ucywgdHJ1ZSk7XG5cdFx0XHRhZGRFdmVudChkb2N1bWVudCwgJ3Njcm9sbCcsIHRoaXMuX2NoZWNrRm9ySW50ZXJzZWN0aW9ucywgdHJ1ZSk7XG5cblx0XHRcdGlmICh0aGlzLlVTRV9NVVRBVElPTl9PQlNFUlZFUiAmJiAnTXV0YXRpb25PYnNlcnZlcicgaW4gd2luZG93KSB7XG5cdFx0XHRcdHRoaXMuX2RvbU9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIodGhpcy5fY2hlY2tGb3JJbnRlcnNlY3Rpb25zKTtcblx0XHRcdFx0dGhpcy5fZG9tT2JzZXJ2ZXIub2JzZXJ2ZShkb2N1bWVudCwge1xuXHRcdFx0XHRcdGF0dHJpYnV0ZXM6IHRydWUsXG5cdFx0XHRcdFx0Y2hpbGRMaXN0OiB0cnVlLFxuXHRcdFx0XHRcdGNoYXJhY3RlckRhdGE6IHRydWUsXG5cdFx0XHRcdFx0c3VidHJlZTogdHJ1ZVxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9XG5cdH1cbn07XG5cblxuLyoqXG4gKiBTdG9wcyBwb2xsaW5nIGZvciBpbnRlcnNlY3Rpb24gY2hhbmdlcy5cbiAqIEBwcml2YXRlXG4gKi9cbkludGVyc2VjdGlvbk9ic2VydmVyLnByb3RvdHlwZS5fdW5tb25pdG9ySW50ZXJzZWN0aW9ucyA9IGZ1bmN0aW9uKCkge1xuXHRpZiAodGhpcy5fbW9uaXRvcmluZ0ludGVyc2VjdGlvbnMpIHtcblx0XHR0aGlzLl9tb25pdG9yaW5nSW50ZXJzZWN0aW9ucyA9IGZhbHNlO1xuXG5cdFx0Y2xlYXJJbnRlcnZhbCh0aGlzLl9tb25pdG9yaW5nSW50ZXJ2YWwpO1xuXHRcdHRoaXMuX21vbml0b3JpbmdJbnRlcnZhbCA9IG51bGw7XG5cblx0XHRyZW1vdmVFdmVudCh3aW5kb3csICdyZXNpemUnLCB0aGlzLl9jaGVja0ZvckludGVyc2VjdGlvbnMsIHRydWUpO1xuXHRcdHJlbW92ZUV2ZW50KGRvY3VtZW50LCAnc2Nyb2xsJywgdGhpcy5fY2hlY2tGb3JJbnRlcnNlY3Rpb25zLCB0cnVlKTtcblxuXHRcdGlmICh0aGlzLl9kb21PYnNlcnZlcikge1xuXHRcdFx0dGhpcy5fZG9tT2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuXHRcdFx0dGhpcy5fZG9tT2JzZXJ2ZXIgPSBudWxsO1xuXHRcdH1cblx0fVxufTtcblxuXG4vKipcbiAqIFNjYW5zIGVhY2ggb2JzZXJ2YXRpb24gdGFyZ2V0IGZvciBpbnRlcnNlY3Rpb24gY2hhbmdlcyBhbmQgYWRkcyB0aGVtXG4gKiB0byB0aGUgaW50ZXJuYWwgZW50cmllcyBxdWV1ZS4gSWYgbmV3IGVudHJpZXMgYXJlIGZvdW5kLCBpdFxuICogc2NoZWR1bGVzIHRoZSBjYWxsYmFjayB0byBiZSBpbnZva2VkLlxuICogQHByaXZhdGVcbiAqL1xuSW50ZXJzZWN0aW9uT2JzZXJ2ZXIucHJvdG90eXBlLl9jaGVja0ZvckludGVyc2VjdGlvbnMgPSBmdW5jdGlvbigpIHtcblx0dmFyIHJvb3RJc0luRG9tID0gdGhpcy5fcm9vdElzSW5Eb20oKTtcblx0dmFyIHJvb3RSZWN0ID0gcm9vdElzSW5Eb20gPyB0aGlzLl9nZXRSb290UmVjdCgpIDogZ2V0RW1wdHlSZWN0KCk7XG5cblx0dGhpcy5fb2JzZXJ2YXRpb25UYXJnZXRzLmZvckVhY2goZnVuY3Rpb24oaXRlbSkge1xuXHRcdHZhciB0YXJnZXQgPSBpdGVtLmVsZW1lbnQ7XG5cdFx0dmFyIHRhcmdldFJlY3QgPSBnZXRCb3VuZGluZ0NsaWVudFJlY3QodGFyZ2V0KTtcblx0XHR2YXIgcm9vdENvbnRhaW5zVGFyZ2V0ID0gdGhpcy5fcm9vdENvbnRhaW5zVGFyZ2V0KHRhcmdldCk7XG5cdFx0dmFyIG9sZEVudHJ5ID0gaXRlbS5lbnRyeTtcblx0XHR2YXIgaW50ZXJzZWN0aW9uUmVjdCA9IHJvb3RJc0luRG9tICYmIHJvb3RDb250YWluc1RhcmdldCAmJlxuXHRcdFx0XHR0aGlzLl9jb21wdXRlVGFyZ2V0QW5kUm9vdEludGVyc2VjdGlvbih0YXJnZXQsIHJvb3RSZWN0KTtcblxuXHRcdHZhciBuZXdFbnRyeSA9IGl0ZW0uZW50cnkgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXJFbnRyeSh7XG5cdFx0XHR0aW1lOiBub3coKSxcblx0XHRcdHRhcmdldDogdGFyZ2V0LFxuXHRcdFx0Ym91bmRpbmdDbGllbnRSZWN0OiB0YXJnZXRSZWN0LFxuXHRcdFx0cm9vdEJvdW5kczogcm9vdFJlY3QsXG5cdFx0XHRpbnRlcnNlY3Rpb25SZWN0OiBpbnRlcnNlY3Rpb25SZWN0XG5cdFx0fSk7XG5cblx0XHRpZiAoIW9sZEVudHJ5KSB7XG5cdFx0XHR0aGlzLl9xdWV1ZWRFbnRyaWVzLnB1c2gobmV3RW50cnkpO1xuXHRcdH0gZWxzZSBpZiAocm9vdElzSW5Eb20gJiYgcm9vdENvbnRhaW5zVGFyZ2V0KSB7XG5cdFx0XHQvLyBJZiB0aGUgbmV3IGVudHJ5IGludGVyc2VjdGlvbiByYXRpbyBoYXMgY3Jvc3NlZCBhbnkgb2YgdGhlXG5cdFx0XHQvLyB0aHJlc2hvbGRzLCBhZGQgYSBuZXcgZW50cnkuXG5cdFx0XHRpZiAodGhpcy5faGFzQ3Jvc3NlZFRocmVzaG9sZChvbGRFbnRyeSwgbmV3RW50cnkpKSB7XG5cdFx0XHRcdHRoaXMuX3F1ZXVlZEVudHJpZXMucHVzaChuZXdFbnRyeSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIElmIHRoZSByb290IGlzIG5vdCBpbiB0aGUgRE9NIG9yIHRhcmdldCBpcyBub3QgY29udGFpbmVkIHdpdGhpblxuXHRcdFx0Ly8gcm9vdCBidXQgdGhlIHByZXZpb3VzIGVudHJ5IGZvciB0aGlzIHRhcmdldCBoYWQgYW4gaW50ZXJzZWN0aW9uLFxuXHRcdFx0Ly8gYWRkIGEgbmV3IHJlY29yZCBpbmRpY2F0aW5nIHJlbW92YWwuXG5cdFx0XHRpZiAob2xkRW50cnkgJiYgb2xkRW50cnkuaXNJbnRlcnNlY3RpbmcpIHtcblx0XHRcdFx0dGhpcy5fcXVldWVkRW50cmllcy5wdXNoKG5ld0VudHJ5KTtcblx0XHRcdH1cblx0XHR9XG5cdH0sIHRoaXMpO1xuXG5cdGlmICh0aGlzLl9xdWV1ZWRFbnRyaWVzLmxlbmd0aCkge1xuXHRcdHRoaXMuX2NhbGxiYWNrKHRoaXMudGFrZVJlY29yZHMoKSwgdGhpcyk7XG5cdH1cbn07XG5cblxuLyoqXG4gKiBBY2NlcHRzIGEgdGFyZ2V0IGFuZCByb290IHJlY3QgY29tcHV0ZXMgdGhlIGludGVyc2VjdGlvbiBiZXR3ZWVuIHRoZW5cbiAqIGZvbGxvd2luZyB0aGUgYWxnb3JpdGhtIGluIHRoZSBzcGVjLlxuICogVE9ETyhwaGlsaXB3YWx0b24pOiBhdCB0aGlzIHRpbWUgY2xpcC1wYXRoIGlzIG5vdCBjb25zaWRlcmVkLlxuICogaHR0cHM6Ly93M2MuZ2l0aHViLmlvL0ludGVyc2VjdGlvbk9ic2VydmVyLyNjYWxjdWxhdGUtaW50ZXJzZWN0aW9uLXJlY3QtYWxnb1xuICogQHBhcmFtIHtFbGVtZW50fSB0YXJnZXQgVGhlIHRhcmdldCBET00gZWxlbWVudFxuICogQHBhcmFtIHtPYmplY3R9IHJvb3RSZWN0IFRoZSBib3VuZGluZyByZWN0IG9mIHRoZSByb290IGFmdGVyIGJlaW5nXG4gKiAgICAgZXhwYW5kZWQgYnkgdGhlIHJvb3RNYXJnaW4gdmFsdWUuXG4gKiBAcmV0dXJuIHs/T2JqZWN0fSBUaGUgZmluYWwgaW50ZXJzZWN0aW9uIHJlY3Qgb2JqZWN0IG9yIHVuZGVmaW5lZCBpZiBub1xuICogICAgIGludGVyc2VjdGlvbiBpcyBmb3VuZC5cbiAqIEBwcml2YXRlXG4gKi9cbkludGVyc2VjdGlvbk9ic2VydmVyLnByb3RvdHlwZS5fY29tcHV0ZVRhcmdldEFuZFJvb3RJbnRlcnNlY3Rpb24gPVxuXHRcdGZ1bmN0aW9uKHRhcmdldCwgcm9vdFJlY3QpIHtcblxuXHQvLyBJZiB0aGUgZWxlbWVudCBpc24ndCBkaXNwbGF5ZWQsIGFuIGludGVyc2VjdGlvbiBjYW4ndCBoYXBwZW4uXG5cdGlmICh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0YXJnZXQpLmRpc3BsYXkgPT0gJ25vbmUnKSByZXR1cm47XG5cblx0dmFyIHRhcmdldFJlY3QgPSBnZXRCb3VuZGluZ0NsaWVudFJlY3QodGFyZ2V0KTtcblx0dmFyIGludGVyc2VjdGlvblJlY3QgPSB0YXJnZXRSZWN0O1xuXHR2YXIgcGFyZW50ID0gZ2V0UGFyZW50Tm9kZSh0YXJnZXQpO1xuXHR2YXIgYXRSb290ID0gZmFsc2U7XG5cblx0d2hpbGUgKCFhdFJvb3QpIHtcblx0XHR2YXIgcGFyZW50UmVjdCA9IG51bGw7XG5cdFx0dmFyIHBhcmVudENvbXB1dGVkU3R5bGUgPSBwYXJlbnQubm9kZVR5cGUgPT0gMSA/XG5cdFx0XHRcdHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHBhcmVudCkgOiB7fTtcblxuXHRcdC8vIElmIHRoZSBwYXJlbnQgaXNuJ3QgZGlzcGxheWVkLCBhbiBpbnRlcnNlY3Rpb24gY2FuJ3QgaGFwcGVuLlxuXHRcdGlmIChwYXJlbnRDb21wdXRlZFN0eWxlLmRpc3BsYXkgPT0gJ25vbmUnKSByZXR1cm47XG5cblx0XHRpZiAocGFyZW50ID09IHRoaXMucm9vdCB8fCBwYXJlbnQgPT0gZG9jdW1lbnQpIHtcblx0XHRcdGF0Um9vdCA9IHRydWU7XG5cdFx0XHRwYXJlbnRSZWN0ID0gcm9vdFJlY3Q7XG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIElmIHRoZSBlbGVtZW50IGhhcyBhIG5vbi12aXNpYmxlIG92ZXJmbG93LCBhbmQgaXQncyBub3QgdGhlIDxib2R5PlxuXHRcdFx0Ly8gb3IgPGh0bWw+IGVsZW1lbnQsIHVwZGF0ZSB0aGUgaW50ZXJzZWN0aW9uIHJlY3QuXG5cdFx0XHQvLyBOb3RlOiA8Ym9keT4gYW5kIDxodG1sPiBjYW5ub3QgYmUgY2xpcHBlZCB0byBhIHJlY3QgdGhhdCdzIG5vdCBhbHNvXG5cdFx0XHQvLyB0aGUgZG9jdW1lbnQgcmVjdCwgc28gbm8gbmVlZCB0byBjb21wdXRlIGEgbmV3IGludGVyc2VjdGlvbi5cblx0XHRcdGlmIChwYXJlbnQgIT0gZG9jdW1lbnQuYm9keSAmJlxuXHRcdFx0XHRcdHBhcmVudCAhPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgJiZcblx0XHRcdFx0XHRwYXJlbnRDb21wdXRlZFN0eWxlLm92ZXJmbG93ICE9ICd2aXNpYmxlJykge1xuXHRcdFx0XHRwYXJlbnRSZWN0ID0gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KHBhcmVudCk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gSWYgZWl0aGVyIG9mIHRoZSBhYm92ZSBjb25kaXRpb25hbHMgc2V0IGEgbmV3IHBhcmVudFJlY3QsXG5cdFx0Ly8gY2FsY3VsYXRlIG5ldyBpbnRlcnNlY3Rpb24gZGF0YS5cblx0XHRpZiAocGFyZW50UmVjdCkge1xuXHRcdFx0aW50ZXJzZWN0aW9uUmVjdCA9IGNvbXB1dGVSZWN0SW50ZXJzZWN0aW9uKHBhcmVudFJlY3QsIGludGVyc2VjdGlvblJlY3QpO1xuXG5cdFx0XHRpZiAoIWludGVyc2VjdGlvblJlY3QpIGJyZWFrO1xuXHRcdH1cblx0XHRwYXJlbnQgPSBnZXRQYXJlbnROb2RlKHBhcmVudCk7XG5cdH1cblx0cmV0dXJuIGludGVyc2VjdGlvblJlY3Q7XG59O1xuXG5cbi8qKlxuICogUmV0dXJucyB0aGUgcm9vdCByZWN0IGFmdGVyIGJlaW5nIGV4cGFuZGVkIGJ5IHRoZSByb290TWFyZ2luIHZhbHVlLlxuICogQHJldHVybiB7T2JqZWN0fSBUaGUgZXhwYW5kZWQgcm9vdCByZWN0LlxuICogQHByaXZhdGVcbiAqL1xuSW50ZXJzZWN0aW9uT2JzZXJ2ZXIucHJvdG90eXBlLl9nZXRSb290UmVjdCA9IGZ1bmN0aW9uKCkge1xuXHR2YXIgcm9vdFJlY3Q7XG5cdGlmICh0aGlzLnJvb3QpIHtcblx0XHRyb290UmVjdCA9IGdldEJvdW5kaW5nQ2xpZW50UmVjdCh0aGlzLnJvb3QpO1xuXHR9IGVsc2Uge1xuXHRcdC8vIFVzZSA8aHRtbD4vPGJvZHk+IGluc3RlYWQgb2Ygd2luZG93IHNpbmNlIHNjcm9sbCBiYXJzIGFmZmVjdCBzaXplLlxuXHRcdHZhciBodG1sID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuXHRcdHZhciBib2R5ID0gZG9jdW1lbnQuYm9keTtcblx0XHRyb290UmVjdCA9IHtcblx0XHRcdHg6IDAsXG5cdFx0XHR5OiAwLFxuXHRcdFx0dG9wOiAwLFxuXHRcdFx0bGVmdDogMCxcblx0XHRcdHJpZ2h0OiBodG1sLmNsaWVudFdpZHRoIHx8IGJvZHkuY2xpZW50V2lkdGgsXG5cdFx0XHR3aWR0aDogaHRtbC5jbGllbnRXaWR0aCB8fCBib2R5LmNsaWVudFdpZHRoLFxuXHRcdFx0Ym90dG9tOiBodG1sLmNsaWVudEhlaWdodCB8fCBib2R5LmNsaWVudEhlaWdodCxcblx0XHRcdGhlaWdodDogaHRtbC5jbGllbnRIZWlnaHQgfHwgYm9keS5jbGllbnRIZWlnaHRcblx0XHR9O1xuXHR9XG5cdHJldHVybiB0aGlzLl9leHBhbmRSZWN0QnlSb290TWFyZ2luKHJvb3RSZWN0KTtcbn07XG5cblxuLyoqXG4gKiBBY2NlcHRzIGEgcmVjdCBhbmQgZXhwYW5kcyBpdCBieSB0aGUgcm9vdE1hcmdpbiB2YWx1ZS5cbiAqIEBwYXJhbSB7T2JqZWN0fSByZWN0IFRoZSByZWN0IG9iamVjdCB0byBleHBhbmQuXG4gKiBAcmV0dXJuIHtPYmplY3R9IFRoZSBleHBhbmRlZCByZWN0LlxuICogQHByaXZhdGVcbiAqL1xuSW50ZXJzZWN0aW9uT2JzZXJ2ZXIucHJvdG90eXBlLl9leHBhbmRSZWN0QnlSb290TWFyZ2luID0gZnVuY3Rpb24ocmVjdCkge1xuXHR2YXIgbWFyZ2lucyA9IHRoaXMuX3Jvb3RNYXJnaW5WYWx1ZXMubWFwKGZ1bmN0aW9uKG1hcmdpbiwgaSkge1xuXHRcdHJldHVybiBtYXJnaW4udW5pdCA9PSAncHgnID8gbWFyZ2luLnZhbHVlIDpcblx0XHRcdFx0bWFyZ2luLnZhbHVlICogKGkgJSAyID8gcmVjdC53aWR0aCA6IHJlY3QuaGVpZ2h0KSAvIDEwMDtcblx0fSk7XG5cdHZhciBuZXdSZWN0ID0ge1xuXHRcdHRvcDogcmVjdC50b3AgLSBtYXJnaW5zWzBdLFxuXHRcdHJpZ2h0OiByZWN0LnJpZ2h0ICsgbWFyZ2luc1sxXSxcblx0XHRib3R0b206IHJlY3QuYm90dG9tICsgbWFyZ2luc1syXSxcblx0XHRsZWZ0OiByZWN0LmxlZnQgLSBtYXJnaW5zWzNdXG5cdH07XG5cdG5ld1JlY3Qud2lkdGggPSBuZXdSZWN0LnJpZ2h0IC0gbmV3UmVjdC5sZWZ0O1xuXHRuZXdSZWN0LmhlaWdodCA9IG5ld1JlY3QuYm90dG9tIC0gbmV3UmVjdC50b3A7XG5cdG5ld1JlY3QueCA9IG5ld1JlY3QubGVmdDtcblx0bmV3UmVjdC55ID0gbmV3UmVjdC50b3A7XG5cblx0cmV0dXJuIG5ld1JlY3Q7XG59O1xuXG5cbi8qKlxuICogQWNjZXB0cyBhbiBvbGQgYW5kIG5ldyBlbnRyeSBhbmQgcmV0dXJucyB0cnVlIGlmIGF0IGxlYXN0IG9uZSBvZiB0aGVcbiAqIHRocmVzaG9sZCB2YWx1ZXMgaGFzIGJlZW4gY3Jvc3NlZC5cbiAqIEBwYXJhbSB7P0ludGVyc2VjdGlvbk9ic2VydmVyRW50cnl9IG9sZEVudHJ5IFRoZSBwcmV2aW91cyBlbnRyeSBmb3IgYVxuICogICAgcGFydGljdWxhciB0YXJnZXQgZWxlbWVudCBvciBudWxsIGlmIG5vIHByZXZpb3VzIGVudHJ5IGV4aXN0cy5cbiAqIEBwYXJhbSB7SW50ZXJzZWN0aW9uT2JzZXJ2ZXJFbnRyeX0gbmV3RW50cnkgVGhlIGN1cnJlbnQgZW50cnkgZm9yIGFcbiAqICAgIHBhcnRpY3VsYXIgdGFyZ2V0IGVsZW1lbnQuXG4gKiBAcmV0dXJuIHtib29sZWFufSBSZXR1cm5zIHRydWUgaWYgYSBhbnkgdGhyZXNob2xkIGhhcyBiZWVuIGNyb3NzZWQuXG4gKiBAcHJpdmF0ZVxuICovXG5JbnRlcnNlY3Rpb25PYnNlcnZlci5wcm90b3R5cGUuX2hhc0Nyb3NzZWRUaHJlc2hvbGQgPVxuXHRcdGZ1bmN0aW9uKG9sZEVudHJ5LCBuZXdFbnRyeSkge1xuXG5cdC8vIFRvIG1ha2UgY29tcGFyaW5nIGVhc2llciwgYW4gZW50cnkgdGhhdCBoYXMgYSByYXRpbyBvZiAwXG5cdC8vIGJ1dCBkb2VzIG5vdCBhY3R1YWxseSBpbnRlcnNlY3QgaXMgZ2l2ZW4gYSB2YWx1ZSBvZiAtMVxuXHR2YXIgb2xkUmF0aW8gPSBvbGRFbnRyeSAmJiBvbGRFbnRyeS5pc0ludGVyc2VjdGluZyA/XG5cdFx0XHRvbGRFbnRyeS5pbnRlcnNlY3Rpb25SYXRpbyB8fCAwIDogLTE7XG5cdHZhciBuZXdSYXRpbyA9IG5ld0VudHJ5LmlzSW50ZXJzZWN0aW5nID9cblx0XHRcdG5ld0VudHJ5LmludGVyc2VjdGlvblJhdGlvIHx8IDAgOiAtMTtcblxuXHQvLyBJZ25vcmUgdW5jaGFuZ2VkIHJhdGlvc1xuXHRpZiAob2xkUmF0aW8gPT09IG5ld1JhdGlvKSByZXR1cm47XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnRocmVzaG9sZHMubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgdGhyZXNob2xkID0gdGhpcy50aHJlc2hvbGRzW2ldO1xuXG5cdFx0Ly8gUmV0dXJuIHRydWUgaWYgYW4gZW50cnkgbWF0Y2hlcyBhIHRocmVzaG9sZCBvciBpZiB0aGUgbmV3IHJhdGlvXG5cdFx0Ly8gYW5kIHRoZSBvbGQgcmF0aW8gYXJlIG9uIHRoZSBvcHBvc2l0ZSBzaWRlcyBvZiBhIHRocmVzaG9sZC5cblx0XHRpZiAodGhyZXNob2xkID09IG9sZFJhdGlvIHx8IHRocmVzaG9sZCA9PSBuZXdSYXRpbyB8fFxuXHRcdFx0XHR0aHJlc2hvbGQgPCBvbGRSYXRpbyAhPT0gdGhyZXNob2xkIDwgbmV3UmF0aW8pIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblx0fVxufTtcblxuXG4vKipcbiAqIFJldHVybnMgd2hldGhlciBvciBub3QgdGhlIHJvb3QgZWxlbWVudCBpcyBhbiBlbGVtZW50IGFuZCBpcyBpbiB0aGUgRE9NLlxuICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgcm9vdCBlbGVtZW50IGlzIGFuIGVsZW1lbnQgYW5kIGlzIGluIHRoZSBET00uXG4gKiBAcHJpdmF0ZVxuICovXG5JbnRlcnNlY3Rpb25PYnNlcnZlci5wcm90b3R5cGUuX3Jvb3RJc0luRG9tID0gZnVuY3Rpb24oKSB7XG5cdHJldHVybiAhdGhpcy5yb290IHx8IGNvbnRhaW5zRGVlcChkb2N1bWVudCwgdGhpcy5yb290KTtcbn07XG5cblxuLyoqXG4gKiBSZXR1cm5zIHdoZXRoZXIgb3Igbm90IHRoZSB0YXJnZXQgZWxlbWVudCBpcyBhIGNoaWxkIG9mIHJvb3QuXG4gKiBAcGFyYW0ge0VsZW1lbnR9IHRhcmdldCBUaGUgdGFyZ2V0IGVsZW1lbnQgdG8gY2hlY2suXG4gKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIHRoZSB0YXJnZXQgZWxlbWVudCBpcyBhIGNoaWxkIG9mIHJvb3QuXG4gKiBAcHJpdmF0ZVxuICovXG5JbnRlcnNlY3Rpb25PYnNlcnZlci5wcm90b3R5cGUuX3Jvb3RDb250YWluc1RhcmdldCA9IGZ1bmN0aW9uKHRhcmdldCkge1xuXHRyZXR1cm4gY29udGFpbnNEZWVwKHRoaXMucm9vdCB8fCBkb2N1bWVudCwgdGFyZ2V0KTtcbn07XG5cblxuLyoqXG4gKiBBZGRzIHRoZSBpbnN0YW5jZSB0byB0aGUgZ2xvYmFsIEludGVyc2VjdGlvbk9ic2VydmVyIHJlZ2lzdHJ5IGlmIGl0IGlzbid0XG4gKiBhbHJlYWR5IHByZXNlbnQuXG4gKiBAcHJpdmF0ZVxuICovXG5JbnRlcnNlY3Rpb25PYnNlcnZlci5wcm90b3R5cGUuX3JlZ2lzdGVySW5zdGFuY2UgPSBmdW5jdGlvbigpIHtcblx0aWYgKHJlZ2lzdHJ5LmluZGV4T2YodGhpcykgPCAwKSB7XG5cdFx0cmVnaXN0cnkucHVzaCh0aGlzKTtcblx0fVxufTtcblxuXG4vKipcbiAqIFJlbW92ZXMgdGhlIGluc3RhbmNlIGZyb20gdGhlIGdsb2JhbCBJbnRlcnNlY3Rpb25PYnNlcnZlciByZWdpc3RyeS5cbiAqIEBwcml2YXRlXG4gKi9cbkludGVyc2VjdGlvbk9ic2VydmVyLnByb3RvdHlwZS5fdW5yZWdpc3Rlckluc3RhbmNlID0gZnVuY3Rpb24oKSB7XG5cdHZhciBpbmRleCA9IHJlZ2lzdHJ5LmluZGV4T2YodGhpcyk7XG5cdGlmIChpbmRleCAhPSAtMSkgcmVnaXN0cnkuc3BsaWNlKGluZGV4LCAxKTtcbn07XG5cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHBlcmZvcm1hbmNlLm5vdygpIG1ldGhvZCBvciBudWxsIGluIGJyb3dzZXJzXG4gKiB0aGF0IGRvbid0IHN1cHBvcnQgdGhlIEFQSS5cbiAqIEByZXR1cm4ge251bWJlcn0gVGhlIGVsYXBzZWQgdGltZSBzaW5jZSB0aGUgcGFnZSB3YXMgcmVxdWVzdGVkLlxuICovXG5mdW5jdGlvbiBub3coKSB7XG5cdHJldHVybiB3aW5kb3cucGVyZm9ybWFuY2UgJiYgcGVyZm9ybWFuY2Uubm93ICYmIHBlcmZvcm1hbmNlLm5vdygpO1xufVxuXG5cbi8qKlxuICogVGhyb3R0bGVzIGEgZnVuY3Rpb24gYW5kIGRlbGF5cyBpdHMgZXhlY3V0aW9uLCBzbyBpdCdzIG9ubHkgY2FsbGVkIGF0IG1vc3RcbiAqIG9uY2Ugd2l0aGluIGEgZ2l2ZW4gdGltZSBwZXJpb2QuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgZnVuY3Rpb24gdG8gdGhyb3R0bGUuXG4gKiBAcGFyYW0ge251bWJlcn0gdGltZW91dCBUaGUgYW1vdW50IG9mIHRpbWUgdGhhdCBtdXN0IHBhc3MgYmVmb3JlIHRoZVxuICogICAgIGZ1bmN0aW9uIGNhbiBiZSBjYWxsZWQgYWdhaW4uXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn0gVGhlIHRocm90dGxlZCBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gdGhyb3R0bGUoZm4sIHRpbWVvdXQpIHtcblx0dmFyIHRpbWVyID0gbnVsbDtcblx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcblx0XHRpZiAoIXRpbWVyKSB7XG5cdFx0XHR0aW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGZuKCk7XG5cdFx0XHRcdHRpbWVyID0gbnVsbDtcblx0XHRcdH0sIHRpbWVvdXQpO1xuXHRcdH1cblx0fTtcbn1cblxuXG4vKipcbiAqIEFkZHMgYW4gZXZlbnQgaGFuZGxlciB0byBhIERPTSBub2RlIGVuc3VyaW5nIGNyb3NzLWJyb3dzZXIgY29tcGF0aWJpbGl0eS5cbiAqIEBwYXJhbSB7Tm9kZX0gbm9kZSBUaGUgRE9NIG5vZGUgdG8gYWRkIHRoZSBldmVudCBoYW5kbGVyIHRvLlxuICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50IFRoZSBldmVudCBuYW1lLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGV2ZW50IGhhbmRsZXIgdG8gYWRkLlxuICogQHBhcmFtIHtib29sZWFufSBvcHRfdXNlQ2FwdHVyZSBPcHRpb25hbGx5IGFkZHMgdGhlIGV2ZW4gdG8gdGhlIGNhcHR1cmVcbiAqICAgICBwaGFzZS4gTm90ZTogdGhpcyBvbmx5IHdvcmtzIGluIG1vZGVybiBicm93c2Vycy5cbiAqL1xuZnVuY3Rpb24gYWRkRXZlbnQobm9kZSwgZXZlbnQsIGZuLCBvcHRfdXNlQ2FwdHVyZSkge1xuXHRpZiAodHlwZW9mIG5vZGUuYWRkRXZlbnRMaXN0ZW5lciA9PSAnZnVuY3Rpb24nKSB7XG5cdFx0bm9kZS5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBmbiwgb3B0X3VzZUNhcHR1cmUgfHwgZmFsc2UpO1xuXHR9XG5cdGVsc2UgaWYgKHR5cGVvZiBub2RlLmF0dGFjaEV2ZW50ID09ICdmdW5jdGlvbicpIHtcblx0XHRub2RlLmF0dGFjaEV2ZW50KCdvbicgKyBldmVudCwgZm4pO1xuXHR9XG59XG5cblxuLyoqXG4gKiBSZW1vdmVzIGEgcHJldmlvdXNseSBhZGRlZCBldmVudCBoYW5kbGVyIGZyb20gYSBET00gbm9kZS5cbiAqIEBwYXJhbSB7Tm9kZX0gbm9kZSBUaGUgRE9NIG5vZGUgdG8gcmVtb3ZlIHRoZSBldmVudCBoYW5kbGVyIGZyb20uXG4gKiBAcGFyYW0ge3N0cmluZ30gZXZlbnQgVGhlIGV2ZW50IG5hbWUuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgZXZlbnQgaGFuZGxlciB0byByZW1vdmUuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IG9wdF91c2VDYXB0dXJlIElmIHRoZSBldmVudCBoYW5kbGVyIHdhcyBhZGRlZCB3aXRoIHRoaXNcbiAqICAgICBmbGFnIHNldCB0byB0cnVlLCBpdCBzaG91bGQgYmUgc2V0IHRvIHRydWUgaGVyZSBpbiBvcmRlciB0byByZW1vdmUgaXQuXG4gKi9cbmZ1bmN0aW9uIHJlbW92ZUV2ZW50KG5vZGUsIGV2ZW50LCBmbiwgb3B0X3VzZUNhcHR1cmUpIHtcblx0aWYgKHR5cGVvZiBub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIgPT0gJ2Z1bmN0aW9uJykge1xuXHRcdG5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgZm4sIG9wdF91c2VDYXB0dXJlIHx8IGZhbHNlKTtcblx0fVxuXHRlbHNlIGlmICh0eXBlb2Ygbm9kZS5kZXRhdGNoRXZlbnQgPT0gJ2Z1bmN0aW9uJykge1xuXHRcdG5vZGUuZGV0YXRjaEV2ZW50KCdvbicgKyBldmVudCwgZm4pO1xuXHR9XG59XG5cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBpbnRlcnNlY3Rpb24gYmV0d2VlbiB0d28gcmVjdCBvYmplY3RzLlxuICogQHBhcmFtIHtPYmplY3R9IHJlY3QxIFRoZSBmaXJzdCByZWN0LlxuICogQHBhcmFtIHtPYmplY3R9IHJlY3QyIFRoZSBzZWNvbmQgcmVjdC5cbiAqIEByZXR1cm4gez9PYmplY3R9IFRoZSBpbnRlcnNlY3Rpb24gcmVjdCBvciB1bmRlZmluZWQgaWYgbm8gaW50ZXJzZWN0aW9uXG4gKiAgICAgaXMgZm91bmQuXG4gKi9cbmZ1bmN0aW9uIGNvbXB1dGVSZWN0SW50ZXJzZWN0aW9uKHJlY3QxLCByZWN0Mikge1xuXHR2YXIgdG9wID0gTWF0aC5tYXgocmVjdDEudG9wLCByZWN0Mi50b3ApO1xuXHR2YXIgYm90dG9tID0gTWF0aC5taW4ocmVjdDEuYm90dG9tLCByZWN0Mi5ib3R0b20pO1xuXHR2YXIgbGVmdCA9IE1hdGgubWF4KHJlY3QxLmxlZnQsIHJlY3QyLmxlZnQpO1xuXHR2YXIgcmlnaHQgPSBNYXRoLm1pbihyZWN0MS5yaWdodCwgcmVjdDIucmlnaHQpO1xuXHR2YXIgd2lkdGggPSByaWdodCAtIGxlZnQ7XG5cdHZhciBoZWlnaHQgPSBib3R0b20gLSB0b3A7XG5cblx0cmV0dXJuICh3aWR0aCA+PSAwICYmIGhlaWdodCA+PSAwKSAmJiB7XG5cdFx0eDogbGVmdCxcblx0XHR5OiB0b3AsXG5cdFx0dG9wOiB0b3AsXG5cdFx0Ym90dG9tOiBib3R0b20sXG5cdFx0bGVmdDogbGVmdCxcblx0XHRyaWdodDogcmlnaHQsXG5cdFx0d2lkdGg6IHdpZHRoLFxuXHRcdGhlaWdodDogaGVpZ2h0XG5cdH07XG59XG5cblxuLyoqXG4gKiBTaGltcyB0aGUgbmF0aXZlIGdldEJvdW5kaW5nQ2xpZW50UmVjdCBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG9sZGVyIElFLlxuICogQHBhcmFtIHtFbGVtZW50fSBlbCBUaGUgZWxlbWVudCB3aG9zZSBib3VuZGluZyByZWN0IHRvIGdldC5cbiAqIEByZXR1cm4ge09iamVjdH0gVGhlIChwb3NzaWJseSBzaGltbWVkKSByZWN0IG9mIHRoZSBlbGVtZW50LlxuICovXG5mdW5jdGlvbiBnZXRCb3VuZGluZ0NsaWVudFJlY3QoZWwpIHtcblx0dmFyIHJlY3Q7XG5cblx0dHJ5IHtcblx0XHRyZWN0ID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cdH0gY2F0Y2ggKGVycikge1xuXHRcdC8vIElnbm9yZSBXaW5kb3dzIDcgSUUxMSBcIlVuc3BlY2lmaWVkIGVycm9yXCJcblx0XHQvLyBodHRwczovL2dpdGh1Yi5jb20vdzNjL0ludGVyc2VjdGlvbk9ic2VydmVyL3B1bGwvMjA1XG5cdH1cblxuXHRpZiAoIXJlY3QpIHJldHVybiBnZXRFbXB0eVJlY3QoKTtcblxuXHQvLyBPbGRlciBJRVxuXHRpZiAoIShyZWN0LndpZHRoICYmIHJlY3QuaGVpZ2h0ICYmIHJlY3QueCAmJiByZWN0LnkpKSB7XG5cdFx0cmVjdCA9IHtcblx0XHRcdHg6IHJlY3QubGVmdCxcblx0XHRcdHk6IHJlY3QudG9wLFxuXHRcdFx0dG9wOiByZWN0LnRvcCxcblx0XHRcdHJpZ2h0OiByZWN0LnJpZ2h0LFxuXHRcdFx0Ym90dG9tOiByZWN0LmJvdHRvbSxcblx0XHRcdGxlZnQ6IHJlY3QubGVmdCxcblx0XHRcdHdpZHRoOiByZWN0LnJpZ2h0IC0gcmVjdC5sZWZ0LFxuXHRcdFx0aGVpZ2h0OiByZWN0LmJvdHRvbSAtIHJlY3QudG9wXG5cdFx0fTtcblx0fVxuXHRyZXR1cm4gcmVjdDtcbn1cblxuXG4vKipcbiAqIFJldHVybnMgYW4gZW1wdHkgcmVjdCBvYmplY3QuIEFuIGVtcHR5IHJlY3QgaXMgcmV0dXJuZWQgd2hlbiBhbiBlbGVtZW50XG4gKiBpcyBub3QgaW4gdGhlIERPTS5cbiAqIEByZXR1cm4ge09iamVjdH0gVGhlIGVtcHR5IHJlY3QuXG4gKi9cbmZ1bmN0aW9uIGdldEVtcHR5UmVjdCgpIHtcblx0cmV0dXJuIHtcblx0XHR4OiAwLFxuXHRcdHk6IDAsXG5cdFx0dG9wOiAwLFxuXHRcdGJvdHRvbTogMCxcblx0XHRsZWZ0OiAwLFxuXHRcdHJpZ2h0OiAwLFxuXHRcdHdpZHRoOiAwLFxuXHRcdGhlaWdodDogMFxuXHR9O1xufVxuXG4vKipcbiAqIENoZWNrcyB0byBzZWUgaWYgYSBwYXJlbnQgZWxlbWVudCBjb250YWlucyBhIGNoaWxkIGVsZW1lbnQgKGluY2x1ZGluZyBpbnNpZGVcbiAqIHNoYWRvdyBET00pLlxuICogQHBhcmFtIHtOb2RlfSBwYXJlbnQgVGhlIHBhcmVudCBlbGVtZW50LlxuICogQHBhcmFtIHtOb2RlfSBjaGlsZCBUaGUgY2hpbGQgZWxlbWVudC5cbiAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgdGhlIHBhcmVudCBub2RlIGNvbnRhaW5zIHRoZSBjaGlsZCBub2RlLlxuICovXG5mdW5jdGlvbiBjb250YWluc0RlZXAocGFyZW50LCBjaGlsZCkge1xuXHR2YXIgbm9kZSA9IGNoaWxkO1xuXHR3aGlsZSAobm9kZSkge1xuXHRcdGlmIChub2RlID09IHBhcmVudCkgcmV0dXJuIHRydWU7XG5cblx0XHRub2RlID0gZ2V0UGFyZW50Tm9kZShub2RlKTtcblx0fVxuXHRyZXR1cm4gZmFsc2U7XG59XG5cblxuLyoqXG4gKiBHZXRzIHRoZSBwYXJlbnQgbm9kZSBvZiBhbiBlbGVtZW50IG9yIGl0cyBob3N0IGVsZW1lbnQgaWYgdGhlIHBhcmVudCBub2RlXG4gKiBpcyBhIHNoYWRvdyByb290LlxuICogQHBhcmFtIHtOb2RlfSBub2RlIFRoZSBub2RlIHdob3NlIHBhcmVudCB0byBnZXQuXG4gKiBAcmV0dXJuIHtOb2RlfG51bGx9IFRoZSBwYXJlbnQgbm9kZSBvciBudWxsIGlmIG5vIHBhcmVudCBleGlzdHMuXG4gKi9cbmZ1bmN0aW9uIGdldFBhcmVudE5vZGUobm9kZSkge1xuXHR2YXIgcGFyZW50ID0gbm9kZS5wYXJlbnROb2RlO1xuXG5cdGlmIChwYXJlbnQgJiYgcGFyZW50Lm5vZGVUeXBlID09IDExICYmIHBhcmVudC5ob3N0KSB7XG5cdFx0Ly8gSWYgdGhlIHBhcmVudCBpcyBhIHNoYWRvdyByb290LCByZXR1cm4gdGhlIGhvc3QgZWxlbWVudC5cblx0XHRyZXR1cm4gcGFyZW50Lmhvc3Q7XG5cdH1cblxuXHRpZiAocGFyZW50ICYmIHBhcmVudC5hc3NpZ25lZFNsb3QpIHtcblx0XHQvLyBJZiB0aGUgcGFyZW50IGlzIGRpc3RyaWJ1dGVkIGluIGEgPHNsb3Q+LCByZXR1cm4gdGhlIHBhcmVudCBvZiBhIHNsb3QuXG5cdFx0cmV0dXJuIHBhcmVudC5hc3NpZ25lZFNsb3QucGFyZW50Tm9kZTtcblx0fVxuXG5cdHJldHVybiBwYXJlbnQ7XG59XG5cblxuLy8gRXhwb3NlcyB0aGUgY29uc3RydWN0b3JzIGdsb2JhbGx5Llxud2luZG93LkludGVyc2VjdGlvbk9ic2VydmVyID0gSW50ZXJzZWN0aW9uT2JzZXJ2ZXI7XG53aW5kb3cuSW50ZXJzZWN0aW9uT2JzZXJ2ZXJFbnRyeSA9IEludGVyc2VjdGlvbk9ic2VydmVyRW50cnk7XG5cbn0od2luZG93LCBkb2N1bWVudCkpO1xufX0pLmNhbGwoJ29iamVjdCcgPT09IHR5cGVvZiB3aW5kb3cgJiYgd2luZG93IHx8ICdvYmplY3QnID09PSB0eXBlb2Ygc2VsZiAmJiBzZWxmIHx8ICdvYmplY3QnID09PSB0eXBlb2YgZ2xvYmFsICYmIGdsb2JhbCB8fCB7fSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGNoZWNrID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpdCAmJiBpdC5NYXRoID09PSBNYXRoICYmIGl0O1xufTtcblxuLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzg2I2lzc3VlY29tbWVudC0xMTU3NTkwMjhcbm1vZHVsZS5leHBvcnRzID1cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLWdsb2JhbC10aGlzIC0tIHNhZmVcbiAgY2hlY2sodHlwZW9mIGdsb2JhbFRoaXMgPT0gJ29iamVjdCcgJiYgZ2xvYmFsVGhpcykgfHxcbiAgY2hlY2sodHlwZW9mIHdpbmRvdyA9PSAnb2JqZWN0JyAmJiB3aW5kb3cpIHx8XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZXN0cmljdGVkLWdsb2JhbHMgLS0gc2FmZVxuICBjaGVjayh0eXBlb2Ygc2VsZiA9PSAnb2JqZWN0JyAmJiBzZWxmKSB8fFxuICBjaGVjayh0eXBlb2YgZ2xvYmFsID09ICdvYmplY3QnICYmIGdsb2JhbCkgfHxcbiAgY2hlY2sodHlwZW9mIHRoaXMgPT0gJ29iamVjdCcgJiYgdGhpcykgfHxcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5ldy1mdW5jIC0tIGZhbGxiYWNrXG4gIChmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9KSgpIHx8IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZXhlYykge1xuICB0cnkge1xuICAgIHJldHVybiAhIWV4ZWMoKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcblxuLy8gRGV0ZWN0IElFOCdzIGluY29tcGxldGUgZGVmaW5lUHJvcGVydHkgaW1wbGVtZW50YXRpb25cbm1vZHVsZS5leHBvcnRzID0gIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1kZWZpbmVwcm9wZXJ0eSAtLSByZXF1aXJlZCBmb3IgdGVzdGluZ1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAxLCB7IGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gNzsgfSB9KVsxXSAhPT0gNztcbn0pO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9ICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1mdW5jdGlvbi1wcm90b3R5cGUtYmluZCAtLSBzYWZlXG4gIHZhciB0ZXN0ID0gKGZ1bmN0aW9uICgpIHsgLyogZW1wdHkgKi8gfSkuYmluZCgpO1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcHJvdG90eXBlLWJ1aWx0aW5zIC0tIHNhZmVcbiAgcmV0dXJuIHR5cGVvZiB0ZXN0ICE9ICdmdW5jdGlvbicgfHwgdGVzdC5oYXNPd25Qcm9wZXJ0eSgncHJvdG90eXBlJyk7XG59KTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgTkFUSVZFX0JJTkQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tYmluZC1uYXRpdmUnKTtcblxudmFyIGNhbGwgPSBGdW5jdGlvbi5wcm90b3R5cGUuY2FsbDtcblxubW9kdWxlLmV4cG9ydHMgPSBOQVRJVkVfQklORCA/IGNhbGwuYmluZChjYWxsKSA6IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGNhbGwuYXBwbHkoY2FsbCwgYXJndW1lbnRzKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyICRwcm9wZXJ0eUlzRW51bWVyYWJsZSA9IHt9LnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1nZXRvd25wcm9wZXJ0eWRlc2NyaXB0b3IgLS0gc2FmZVxudmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbi8vIE5hc2hvcm4gfiBKREs4IGJ1Z1xudmFyIE5BU0hPUk5fQlVHID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yICYmICEkcHJvcGVydHlJc0VudW1lcmFibGUuY2FsbCh7IDE6IDIgfSwgMSk7XG5cbi8vIGBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlYCBtZXRob2QgaW1wbGVtZW50YXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eWlzZW51bWVyYWJsZVxuZXhwb3J0cy5mID0gTkFTSE9STl9CVUcgPyBmdW5jdGlvbiBwcm9wZXJ0eUlzRW51bWVyYWJsZShWKSB7XG4gIHZhciBkZXNjcmlwdG9yID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRoaXMsIFYpO1xuICByZXR1cm4gISFkZXNjcmlwdG9yICYmIGRlc2NyaXB0b3IuZW51bWVyYWJsZTtcbn0gOiAkcHJvcGVydHlJc0VudW1lcmFibGU7XG4iLCAiJ3VzZSBzdHJpY3QnO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYml0bWFwLCB2YWx1ZSkge1xuICByZXR1cm4ge1xuICAgIGVudW1lcmFibGU6ICEoYml0bWFwICYgMSksXG4gICAgY29uZmlndXJhYmxlOiAhKGJpdG1hcCAmIDIpLFxuICAgIHdyaXRhYmxlOiAhKGJpdG1hcCAmIDQpLFxuICAgIHZhbHVlOiB2YWx1ZVxuICB9O1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgTkFUSVZFX0JJTkQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tYmluZC1uYXRpdmUnKTtcblxudmFyIEZ1bmN0aW9uUHJvdG90eXBlID0gRnVuY3Rpb24ucHJvdG90eXBlO1xudmFyIGNhbGwgPSBGdW5jdGlvblByb3RvdHlwZS5jYWxsO1xudmFyIHVuY3VycnlUaGlzV2l0aEJpbmQgPSBOQVRJVkVfQklORCAmJiBGdW5jdGlvblByb3RvdHlwZS5iaW5kLmJpbmQoY2FsbCwgY2FsbCk7XG5cbm1vZHVsZS5leHBvcnRzID0gTkFUSVZFX0JJTkQgPyB1bmN1cnJ5VGhpc1dpdGhCaW5kIDogZnVuY3Rpb24gKGZuKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGNhbGwuYXBwbHkoZm4sIGFyZ3VtZW50cyk7XG4gIH07XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcblxudmFyIHRvU3RyaW5nID0gdW5jdXJyeVRoaXMoe30udG9TdHJpbmcpO1xudmFyIHN0cmluZ1NsaWNlID0gdW5jdXJyeVRoaXMoJycuc2xpY2UpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gc3RyaW5nU2xpY2UodG9TdHJpbmcoaXQpLCA4LCAtMSk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY2xhc3NvZi1yYXcnKTtcblxudmFyICRPYmplY3QgPSBPYmplY3Q7XG52YXIgc3BsaXQgPSB1bmN1cnJ5VGhpcygnJy5zcGxpdCk7XG5cbi8vIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgYW5kIG5vbi1lbnVtZXJhYmxlIG9sZCBWOCBzdHJpbmdzXG5tb2R1bGUuZXhwb3J0cyA9IGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgLy8gdGhyb3dzIGFuIGVycm9yIGluIHJoaW5vLCBzZWUgaHR0cHM6Ly9naXRodWIuY29tL21vemlsbGEvcmhpbm8vaXNzdWVzLzM0NlxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcHJvdG90eXBlLWJ1aWx0aW5zIC0tIHNhZmVcbiAgcmV0dXJuICEkT2JqZWN0KCd6JykucHJvcGVydHlJc0VudW1lcmFibGUoMCk7XG59KSA/IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gY2xhc3NvZihpdCkgPT09ICdTdHJpbmcnID8gc3BsaXQoaXQsICcnKSA6ICRPYmplY3QoaXQpO1xufSA6ICRPYmplY3Q7XG4iLCAiJ3VzZSBzdHJpY3QnO1xuLy8gd2UgY2FuJ3QgdXNlIGp1c3QgYGl0ID09IG51bGxgIHNpbmNlIG9mIGBkb2N1bWVudC5hbGxgIHNwZWNpYWwgY2FzZVxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1Jc0hUTUxEREEtaW50ZXJuYWwtc2xvdC1hZWNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpdCA9PT0gbnVsbCB8fCBpdCA9PT0gdW5kZWZpbmVkO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgaXNOdWxsT3JVbmRlZmluZWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtbnVsbC1vci11bmRlZmluZWQnKTtcblxudmFyICRUeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG5cbi8vIGBSZXF1aXJlT2JqZWN0Q29lcmNpYmxlYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtcmVxdWlyZW9iamVjdGNvZXJjaWJsZVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKGlzTnVsbE9yVW5kZWZpbmVkKGl0KSkgdGhyb3cgbmV3ICRUeXBlRXJyb3IoXCJDYW4ndCBjYWxsIG1ldGhvZCBvbiBcIiArIGl0KTtcbiAgcmV0dXJuIGl0O1xufTtcbiIsICIndXNlIHN0cmljdCc7XG4vLyB0b09iamVjdCB3aXRoIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgc3RyaW5nc1xudmFyIEluZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaW5kZXhlZC1vYmplY3QnKTtcbnZhciByZXF1aXJlT2JqZWN0Q29lcmNpYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gSW5kZXhlZE9iamVjdChyZXF1aXJlT2JqZWN0Q29lcmNpYmxlKGl0KSk7XG59O1xuIiwgIid1c2Ugc3RyaWN0Jztcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtSXNIVE1MRERBLWludGVybmFsLXNsb3RcbnZhciBkb2N1bWVudEFsbCA9IHR5cGVvZiBkb2N1bWVudCA9PSAnb2JqZWN0JyAmJiBkb2N1bWVudC5hbGw7XG5cbi8vIGBJc0NhbGxhYmxlYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtaXNjYWxsYWJsZVxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHVuaWNvcm4vbm8tdHlwZW9mLXVuZGVmaW5lZCAtLSByZXF1aXJlZCBmb3IgdGVzdGluZ1xubW9kdWxlLmV4cG9ydHMgPSB0eXBlb2YgZG9jdW1lbnRBbGwgPT0gJ3VuZGVmaW5lZCcgJiYgZG9jdW1lbnRBbGwgIT09IHVuZGVmaW5lZCA/IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICByZXR1cm4gdHlwZW9mIGFyZ3VtZW50ID09ICdmdW5jdGlvbicgfHwgYXJndW1lbnQgPT09IGRvY3VtZW50QWxsO1xufSA6IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICByZXR1cm4gdHlwZW9mIGFyZ3VtZW50ID09ICdmdW5jdGlvbic7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiB0eXBlb2YgaXQgPT0gJ29iamVjdCcgPyBpdCAhPT0gbnVsbCA6IGlzQ2FsbGFibGUoaXQpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcblxudmFyIGFGdW5jdGlvbiA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICByZXR1cm4gaXNDYWxsYWJsZShhcmd1bWVudCkgPyBhcmd1bWVudCA6IHVuZGVmaW5lZDtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG5hbWVzcGFjZSwgbWV0aG9kKSB7XG4gIHJldHVybiBhcmd1bWVudHMubGVuZ3RoIDwgMiA/IGFGdW5jdGlvbihnbG9iYWxbbmFtZXNwYWNlXSkgOiBnbG9iYWxbbmFtZXNwYWNlXSAmJiBnbG9iYWxbbmFtZXNwYWNlXVttZXRob2RdO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gdW5jdXJyeVRoaXMoe30uaXNQcm90b3R5cGVPZik7XG4iLCAiJ3VzZSBzdHJpY3QnO1xubW9kdWxlLmV4cG9ydHMgPSB0eXBlb2YgbmF2aWdhdG9yICE9ICd1bmRlZmluZWQnICYmIFN0cmluZyhuYXZpZ2F0b3IudXNlckFnZW50KSB8fCAnJztcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIHVzZXJBZ2VudCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbmdpbmUtdXNlci1hZ2VudCcpO1xuXG52YXIgcHJvY2VzcyA9IGdsb2JhbC5wcm9jZXNzO1xudmFyIERlbm8gPSBnbG9iYWwuRGVubztcbnZhciB2ZXJzaW9ucyA9IHByb2Nlc3MgJiYgcHJvY2Vzcy52ZXJzaW9ucyB8fCBEZW5vICYmIERlbm8udmVyc2lvbjtcbnZhciB2OCA9IHZlcnNpb25zICYmIHZlcnNpb25zLnY4O1xudmFyIG1hdGNoLCB2ZXJzaW9uO1xuXG5pZiAodjgpIHtcbiAgbWF0Y2ggPSB2OC5zcGxpdCgnLicpO1xuICAvLyBpbiBvbGQgQ2hyb21lLCB2ZXJzaW9ucyBvZiBWOCBpc24ndCBWOCA9IENocm9tZSAvIDEwXG4gIC8vIGJ1dCB0aGVpciBjb3JyZWN0IHZlcnNpb25zIGFyZSBub3QgaW50ZXJlc3RpbmcgZm9yIHVzXG4gIHZlcnNpb24gPSBtYXRjaFswXSA+IDAgJiYgbWF0Y2hbMF0gPCA0ID8gMSA6ICsobWF0Y2hbMF0gKyBtYXRjaFsxXSk7XG59XG5cbi8vIEJyb3dzZXJGUyBOb2RlSlMgYHByb2Nlc3NgIHBvbHlmaWxsIGluY29ycmVjdGx5IHNldCBgLnY4YCB0byBgMC4wYFxuLy8gc28gY2hlY2sgYHVzZXJBZ2VudGAgZXZlbiBpZiBgLnY4YCBleGlzdHMsIGJ1dCAwXG5pZiAoIXZlcnNpb24gJiYgdXNlckFnZW50KSB7XG4gIG1hdGNoID0gdXNlckFnZW50Lm1hdGNoKC9FZGdlXFwvKFxcZCspLyk7XG4gIGlmICghbWF0Y2ggfHwgbWF0Y2hbMV0gPj0gNzQpIHtcbiAgICBtYXRjaCA9IHVzZXJBZ2VudC5tYXRjaCgvQ2hyb21lXFwvKFxcZCspLyk7XG4gICAgaWYgKG1hdGNoKSB2ZXJzaW9uID0gK21hdGNoWzFdO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdmVyc2lvbjtcbiIsICIndXNlIHN0cmljdCc7XG4vKiBlc2xpbnQtZGlzYWJsZSBlcy9uby1zeW1ib2wgLS0gcmVxdWlyZWQgZm9yIHRlc3RpbmcgKi9cbnZhciBWOF9WRVJTSU9OID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2VuZ2luZS12OC12ZXJzaW9uJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG5cbnZhciAkU3RyaW5nID0gZ2xvYmFsLlN0cmluZztcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1nZXRvd25wcm9wZXJ0eXN5bWJvbHMgLS0gcmVxdWlyZWQgZm9yIHRlc3Rpbmdcbm1vZHVsZS5leHBvcnRzID0gISFPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzICYmICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gIHZhciBzeW1ib2wgPSBTeW1ib2woJ3N5bWJvbCBkZXRlY3Rpb24nKTtcbiAgLy8gQ2hyb21lIDM4IFN5bWJvbCBoYXMgaW5jb3JyZWN0IHRvU3RyaW5nIGNvbnZlcnNpb25cbiAgLy8gYGdldC1vd24tcHJvcGVydHktc3ltYm9sc2AgcG9seWZpbGwgc3ltYm9scyBjb252ZXJ0ZWQgdG8gb2JqZWN0IGFyZSBub3QgU3ltYm9sIGluc3RhbmNlc1xuICAvLyBuYjogRG8gbm90IGNhbGwgYFN0cmluZ2AgZGlyZWN0bHkgdG8gYXZvaWQgdGhpcyBiZWluZyBvcHRpbWl6ZWQgb3V0IHRvIGBzeW1ib2wrJydgIHdoaWNoIHdpbGwsXG4gIC8vIG9mIGNvdXJzZSwgZmFpbC5cbiAgcmV0dXJuICEkU3RyaW5nKHN5bWJvbCkgfHwgIShPYmplY3Qoc3ltYm9sKSBpbnN0YW5jZW9mIFN5bWJvbCkgfHxcbiAgICAvLyBDaHJvbWUgMzgtNDAgc3ltYm9scyBhcmUgbm90IGluaGVyaXRlZCBmcm9tIERPTSBjb2xsZWN0aW9ucyBwcm90b3R5cGVzIHRvIGluc3RhbmNlc1xuICAgICFTeW1ib2wuc2hhbSAmJiBWOF9WRVJTSU9OICYmIFY4X1ZFUlNJT04gPCA0MTtcbn0pO1xuIiwgIid1c2Ugc3RyaWN0Jztcbi8qIGVzbGludC1kaXNhYmxlIGVzL25vLXN5bWJvbCAtLSByZXF1aXJlZCBmb3IgdGVzdGluZyAqL1xudmFyIE5BVElWRV9TWU1CT0wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc3ltYm9sLWNvbnN0cnVjdG9yLWRldGVjdGlvbicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE5BVElWRV9TWU1CT0xcbiAgJiYgIVN5bWJvbC5zaGFtXG4gICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT0gJ3N5bWJvbCc7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGdldEJ1aWx0SW4gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LWJ1aWx0LWluJyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xudmFyIGlzUHJvdG90eXBlT2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWlzLXByb3RvdHlwZS1vZicpO1xudmFyIFVTRV9TWU1CT0xfQVNfVUlEID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3VzZS1zeW1ib2wtYXMtdWlkJyk7XG5cbnZhciAkT2JqZWN0ID0gT2JqZWN0O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFVTRV9TWU1CT0xfQVNfVUlEID8gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiB0eXBlb2YgaXQgPT0gJ3N5bWJvbCc7XG59IDogZnVuY3Rpb24gKGl0KSB7XG4gIHZhciAkU3ltYm9sID0gZ2V0QnVpbHRJbignU3ltYm9sJyk7XG4gIHJldHVybiBpc0NhbGxhYmxlKCRTeW1ib2wpICYmIGlzUHJvdG90eXBlT2YoJFN5bWJvbC5wcm90b3R5cGUsICRPYmplY3QoaXQpKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyICRTdHJpbmcgPSBTdHJpbmc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuICRTdHJpbmcoYXJndW1lbnQpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiAnT2JqZWN0JztcbiAgfVxufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xudmFyIHRyeVRvU3RyaW5nID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RyeS10by1zdHJpbmcnKTtcblxudmFyICRUeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG5cbi8vIGBBc3NlcnQ6IElzQ2FsbGFibGUoYXJndW1lbnQpIGlzIHRydWVgXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICBpZiAoaXNDYWxsYWJsZShhcmd1bWVudCkpIHJldHVybiBhcmd1bWVudDtcbiAgdGhyb3cgbmV3ICRUeXBlRXJyb3IodHJ5VG9TdHJpbmcoYXJndW1lbnQpICsgJyBpcyBub3QgYSBmdW5jdGlvbicpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgYUNhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2EtY2FsbGFibGUnKTtcbnZhciBpc051bGxPclVuZGVmaW5lZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1udWxsLW9yLXVuZGVmaW5lZCcpO1xuXG4vLyBgR2V0TWV0aG9kYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtZ2V0bWV0aG9kXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChWLCBQKSB7XG4gIHZhciBmdW5jID0gVltQXTtcbiAgcmV0dXJuIGlzTnVsbE9yVW5kZWZpbmVkKGZ1bmMpID8gdW5kZWZpbmVkIDogYUNhbGxhYmxlKGZ1bmMpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgY2FsbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1jYWxsJyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xuXG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcblxuLy8gYE9yZGluYXJ5VG9QcmltaXRpdmVgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vcmRpbmFyeXRvcHJpbWl0aXZlXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpbnB1dCwgcHJlZikge1xuICB2YXIgZm4sIHZhbDtcbiAgaWYgKHByZWYgPT09ICdzdHJpbmcnICYmIGlzQ2FsbGFibGUoZm4gPSBpbnB1dC50b1N0cmluZykgJiYgIWlzT2JqZWN0KHZhbCA9IGNhbGwoZm4sIGlucHV0KSkpIHJldHVybiB2YWw7XG4gIGlmIChpc0NhbGxhYmxlKGZuID0gaW5wdXQudmFsdWVPZikgJiYgIWlzT2JqZWN0KHZhbCA9IGNhbGwoZm4sIGlucHV0KSkpIHJldHVybiB2YWw7XG4gIGlmIChwcmVmICE9PSAnc3RyaW5nJyAmJiBpc0NhbGxhYmxlKGZuID0gaW5wdXQudG9TdHJpbmcpICYmICFpc09iamVjdCh2YWwgPSBjYWxsKGZuLCBpbnB1dCkpKSByZXR1cm4gdmFsO1xuICB0aHJvdyBuZXcgJFR5cGVFcnJvcihcIkNhbid0IGNvbnZlcnQgb2JqZWN0IHRvIHByaW1pdGl2ZSB2YWx1ZVwiKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xubW9kdWxlLmV4cG9ydHMgPSBmYWxzZTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWRlZmluZXByb3BlcnR5IC0tIHNhZmVcbnZhciBkZWZpbmVQcm9wZXJ0eSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICB0cnkge1xuICAgIGRlZmluZVByb3BlcnR5KGdsb2JhbCwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBnbG9iYWxba2V5XSA9IHZhbHVlO1xuICB9IHJldHVybiB2YWx1ZTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBkZWZpbmVHbG9iYWxQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZWZpbmUtZ2xvYmFsLXByb3BlcnR5Jyk7XG5cbnZhciBTSEFSRUQgPSAnX19jb3JlLWpzX3NoYXJlZF9fJztcbnZhciBzdG9yZSA9IGdsb2JhbFtTSEFSRURdIHx8IGRlZmluZUdsb2JhbFByb3BlcnR5KFNIQVJFRCwge30pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHN0b3JlO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBJU19QVVJFID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLXB1cmUnKTtcbnZhciBzdG9yZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQtc3RvcmUnKTtcblxuKG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgcmV0dXJuIHN0b3JlW2tleV0gfHwgKHN0b3JlW2tleV0gPSB2YWx1ZSAhPT0gdW5kZWZpbmVkID8gdmFsdWUgOiB7fSk7XG59KSgndmVyc2lvbnMnLCBbXSkucHVzaCh7XG4gIHZlcnNpb246ICczLjM1LjAnLFxuICBtb2RlOiBJU19QVVJFID8gJ3B1cmUnIDogJ2dsb2JhbCcsXG4gIGNvcHlyaWdodDogJ8KpIDIwMTQtMjAyMyBEZW5pcyBQdXNoa2FyZXYgKHpsb2lyb2NrLnJ1KScsXG4gIGxpY2Vuc2U6ICdodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9ibG9iL3YzLjM1LjAvTElDRU5TRScsXG4gIHNvdXJjZTogJ2h0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzJ1xufSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHJlcXVpcmVPYmplY3RDb2VyY2libGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlJyk7XG5cbnZhciAkT2JqZWN0ID0gT2JqZWN0O1xuXG4vLyBgVG9PYmplY3RgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy10b29iamVjdFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgcmV0dXJuICRPYmplY3QocmVxdWlyZU9iamVjdENvZXJjaWJsZShhcmd1bWVudCkpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tb2JqZWN0Jyk7XG5cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IHVuY3VycnlUaGlzKHt9Lmhhc093blByb3BlcnR5KTtcblxuLy8gYEhhc093blByb3BlcnR5YCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtaGFzb3ducHJvcGVydHlcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtaGFzb3duIC0tIHNhZmVcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0Lmhhc093biB8fCBmdW5jdGlvbiBoYXNPd24oaXQsIGtleSkge1xuICByZXR1cm4gaGFzT3duUHJvcGVydHkodG9PYmplY3QoaXQpLCBrZXkpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG5cbnZhciBpZCA9IDA7XG52YXIgcG9zdGZpeCA9IE1hdGgucmFuZG9tKCk7XG52YXIgdG9TdHJpbmcgPSB1bmN1cnJ5VGhpcygxLjAudG9TdHJpbmcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuICdTeW1ib2woJyArIChrZXkgPT09IHVuZGVmaW5lZCA/ICcnIDoga2V5KSArICcpXycgKyB0b1N0cmluZygrK2lkICsgcG9zdGZpeCwgMzYpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQnKTtcbnZhciBoYXNPd24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eScpO1xudmFyIHVpZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy91aWQnKTtcbnZhciBOQVRJVkVfU1lNQk9MID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3N5bWJvbC1jb25zdHJ1Y3Rvci1kZXRlY3Rpb24nKTtcbnZhciBVU0VfU1lNQk9MX0FTX1VJRCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy91c2Utc3ltYm9sLWFzLXVpZCcpO1xuXG52YXIgU3ltYm9sID0gZ2xvYmFsLlN5bWJvbDtcbnZhciBXZWxsS25vd25TeW1ib2xzU3RvcmUgPSBzaGFyZWQoJ3drcycpO1xudmFyIGNyZWF0ZVdlbGxLbm93blN5bWJvbCA9IFVTRV9TWU1CT0xfQVNfVUlEID8gU3ltYm9sWydmb3InXSB8fCBTeW1ib2wgOiBTeW1ib2wgJiYgU3ltYm9sLndpdGhvdXRTZXR0ZXIgfHwgdWlkO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIGlmICghaGFzT3duKFdlbGxLbm93blN5bWJvbHNTdG9yZSwgbmFtZSkpIHtcbiAgICBXZWxsS25vd25TeW1ib2xzU3RvcmVbbmFtZV0gPSBOQVRJVkVfU1lNQk9MICYmIGhhc093bihTeW1ib2wsIG5hbWUpXG4gICAgICA/IFN5bWJvbFtuYW1lXVxuICAgICAgOiBjcmVhdGVXZWxsS25vd25TeW1ib2woJ1N5bWJvbC4nICsgbmFtZSk7XG4gIH0gcmV0dXJuIFdlbGxLbm93blN5bWJvbHNTdG9yZVtuYW1lXTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGNhbGwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tY2FsbCcpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xudmFyIGlzU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLXN5bWJvbCcpO1xudmFyIGdldE1ldGhvZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtbWV0aG9kJyk7XG52YXIgb3JkaW5hcnlUb1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vcmRpbmFyeS10by1wcmltaXRpdmUnKTtcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcblxudmFyICRUeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG52YXIgVE9fUFJJTUlUSVZFID0gd2VsbEtub3duU3ltYm9sKCd0b1ByaW1pdGl2ZScpO1xuXG4vLyBgVG9QcmltaXRpdmVgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy10b3ByaW1pdGl2ZVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaW5wdXQsIHByZWYpIHtcbiAgaWYgKCFpc09iamVjdChpbnB1dCkgfHwgaXNTeW1ib2woaW5wdXQpKSByZXR1cm4gaW5wdXQ7XG4gIHZhciBleG90aWNUb1ByaW0gPSBnZXRNZXRob2QoaW5wdXQsIFRPX1BSSU1JVElWRSk7XG4gIHZhciByZXN1bHQ7XG4gIGlmIChleG90aWNUb1ByaW0pIHtcbiAgICBpZiAocHJlZiA9PT0gdW5kZWZpbmVkKSBwcmVmID0gJ2RlZmF1bHQnO1xuICAgIHJlc3VsdCA9IGNhbGwoZXhvdGljVG9QcmltLCBpbnB1dCwgcHJlZik7XG4gICAgaWYgKCFpc09iamVjdChyZXN1bHQpIHx8IGlzU3ltYm9sKHJlc3VsdCkpIHJldHVybiByZXN1bHQ7XG4gICAgdGhyb3cgbmV3ICRUeXBlRXJyb3IoXCJDYW4ndCBjb252ZXJ0IG9iamVjdCB0byBwcmltaXRpdmUgdmFsdWVcIik7XG4gIH1cbiAgaWYgKHByZWYgPT09IHVuZGVmaW5lZCkgcHJlZiA9ICdudW1iZXInO1xuICByZXR1cm4gb3JkaW5hcnlUb1ByaW1pdGl2ZShpbnB1dCwgcHJlZik7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB0b1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1wcmltaXRpdmUnKTtcbnZhciBpc1N5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1zeW1ib2wnKTtcblxuLy8gYFRvUHJvcGVydHlLZXlgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy10b3Byb3BlcnR5a2V5XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICB2YXIga2V5ID0gdG9QcmltaXRpdmUoYXJndW1lbnQsICdzdHJpbmcnKTtcbiAgcmV0dXJuIGlzU3ltYm9sKGtleSkgPyBrZXkgOiBrZXkgKyAnJztcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcblxudmFyIGRvY3VtZW50ID0gZ2xvYmFsLmRvY3VtZW50O1xuLy8gdHlwZW9mIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgaXMgJ29iamVjdCcgaW4gb2xkIElFXG52YXIgRVhJU1RTID0gaXNPYmplY3QoZG9jdW1lbnQpICYmIGlzT2JqZWN0KGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gRVhJU1RTID8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChpdCkgOiB7fTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBjcmVhdGVFbGVtZW50ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RvY3VtZW50LWNyZWF0ZS1lbGVtZW50Jyk7XG5cbi8vIFRoYW5rcyB0byBJRTggZm9yIGl0cyBmdW5ueSBkZWZpbmVQcm9wZXJ0eVxubW9kdWxlLmV4cG9ydHMgPSAhREVTQ1JJUFRPUlMgJiYgIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1kZWZpbmVwcm9wZXJ0eSAtLSByZXF1aXJlZCBmb3IgdGVzdGluZ1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGNyZWF0ZUVsZW1lbnQoJ2RpdicpLCAnYScsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDc7IH1cbiAgfSkuYSAhPT0gNztcbn0pO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIGNhbGwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tY2FsbCcpO1xudmFyIHByb3BlcnR5SXNFbnVtZXJhYmxlTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1wcm9wZXJ0eS1pcy1lbnVtZXJhYmxlJyk7XG52YXIgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eS1kZXNjcmlwdG9yJyk7XG52YXIgdG9JbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWluZGV4ZWQtb2JqZWN0Jyk7XG52YXIgdG9Qcm9wZXJ0eUtleSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1wcm9wZXJ0eS1rZXknKTtcbnZhciBoYXNPd24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eScpO1xudmFyIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2llOC1kb20tZGVmaW5lJyk7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZ2V0b3ducHJvcGVydHlkZXNjcmlwdG9yIC0tIHNhZmVcbnZhciAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuLy8gYE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vYmplY3QuZ2V0b3ducHJvcGVydHlkZXNjcmlwdG9yXG5leHBvcnRzLmYgPSBERVNDUklQVE9SUyA/ICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgOiBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUCkge1xuICBPID0gdG9JbmRleGVkT2JqZWN0KE8pO1xuICBQID0gdG9Qcm9wZXJ0eUtleShQKTtcbiAgaWYgKElFOF9ET01fREVGSU5FKSB0cnkge1xuICAgIHJldHVybiAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApO1xuICB9IGNhdGNoIChlcnJvcikgeyAvKiBlbXB0eSAqLyB9XG4gIGlmIChoYXNPd24oTywgUCkpIHJldHVybiBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IoIWNhbGwocHJvcGVydHlJc0VudW1lcmFibGVNb2R1bGUuZiwgTywgUCksIE9bUF0pO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xuXG4vLyBWOCB+IENocm9tZSAzNi1cbi8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTMzMzRcbm1vZHVsZS5leHBvcnRzID0gREVTQ1JJUFRPUlMgJiYgZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWRlZmluZXByb3BlcnR5IC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nXG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9LCAncHJvdG90eXBlJywge1xuICAgIHZhbHVlOiA0MixcbiAgICB3cml0YWJsZTogZmFsc2VcbiAgfSkucHJvdG90eXBlICE9PSA0Mjtcbn0pO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcblxudmFyICRTdHJpbmcgPSBTdHJpbmc7XG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcblxuLy8gYEFzc2VydDogVHlwZShhcmd1bWVudCkgaXMgT2JqZWN0YFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgaWYgKGlzT2JqZWN0KGFyZ3VtZW50KSkgcmV0dXJuIGFyZ3VtZW50O1xuICB0aHJvdyBuZXcgJFR5cGVFcnJvcigkU3RyaW5nKGFyZ3VtZW50KSArICcgaXMgbm90IGFuIG9iamVjdCcpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pZTgtZG9tLWRlZmluZScpO1xudmFyIFY4X1BST1RPVFlQRV9ERUZJTkVfQlVHID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3Y4LXByb3RvdHlwZS1kZWZpbmUtYnVnJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgdG9Qcm9wZXJ0eUtleSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1wcm9wZXJ0eS1rZXknKTtcblxudmFyICRUeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWRlZmluZXByb3BlcnR5IC0tIHNhZmVcbnZhciAkZGVmaW5lUHJvcGVydHkgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5ZGVzY3JpcHRvciAtLSBzYWZlXG52YXIgJGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG52YXIgRU5VTUVSQUJMRSA9ICdlbnVtZXJhYmxlJztcbnZhciBDT05GSUdVUkFCTEUgPSAnY29uZmlndXJhYmxlJztcbnZhciBXUklUQUJMRSA9ICd3cml0YWJsZSc7XG5cbi8vIGBPYmplY3QuZGVmaW5lUHJvcGVydHlgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vYmplY3QuZGVmaW5lcHJvcGVydHlcbmV4cG9ydHMuZiA9IERFU0NSSVBUT1JTID8gVjhfUFJPVE9UWVBFX0RFRklORV9CVUcgPyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKSB7XG4gIGFuT2JqZWN0KE8pO1xuICBQID0gdG9Qcm9wZXJ0eUtleShQKTtcbiAgYW5PYmplY3QoQXR0cmlidXRlcyk7XG4gIGlmICh0eXBlb2YgTyA9PT0gJ2Z1bmN0aW9uJyAmJiBQID09PSAncHJvdG90eXBlJyAmJiAndmFsdWUnIGluIEF0dHJpYnV0ZXMgJiYgV1JJVEFCTEUgaW4gQXR0cmlidXRlcyAmJiAhQXR0cmlidXRlc1tXUklUQUJMRV0pIHtcbiAgICB2YXIgY3VycmVudCA9ICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUCk7XG4gICAgaWYgKGN1cnJlbnQgJiYgY3VycmVudFtXUklUQUJMRV0pIHtcbiAgICAgIE9bUF0gPSBBdHRyaWJ1dGVzLnZhbHVlO1xuICAgICAgQXR0cmlidXRlcyA9IHtcbiAgICAgICAgY29uZmlndXJhYmxlOiBDT05GSUdVUkFCTEUgaW4gQXR0cmlidXRlcyA/IEF0dHJpYnV0ZXNbQ09ORklHVVJBQkxFXSA6IGN1cnJlbnRbQ09ORklHVVJBQkxFXSxcbiAgICAgICAgZW51bWVyYWJsZTogRU5VTUVSQUJMRSBpbiBBdHRyaWJ1dGVzID8gQXR0cmlidXRlc1tFTlVNRVJBQkxFXSA6IGN1cnJlbnRbRU5VTUVSQUJMRV0sXG4gICAgICAgIHdyaXRhYmxlOiBmYWxzZVxuICAgICAgfTtcbiAgICB9XG4gIH0gcmV0dXJuICRkZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKTtcbn0gOiAkZGVmaW5lUHJvcGVydHkgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKSB7XG4gIGFuT2JqZWN0KE8pO1xuICBQID0gdG9Qcm9wZXJ0eUtleShQKTtcbiAgYW5PYmplY3QoQXR0cmlidXRlcyk7XG4gIGlmIChJRThfRE9NX0RFRklORSkgdHJ5IHtcbiAgICByZXR1cm4gJGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpO1xuICB9IGNhdGNoIChlcnJvcikgeyAvKiBlbXB0eSAqLyB9XG4gIGlmICgnZ2V0JyBpbiBBdHRyaWJ1dGVzIHx8ICdzZXQnIGluIEF0dHJpYnV0ZXMpIHRocm93IG5ldyAkVHlwZUVycm9yKCdBY2Nlc3NvcnMgbm90IHN1cHBvcnRlZCcpO1xuICBpZiAoJ3ZhbHVlJyBpbiBBdHRyaWJ1dGVzKSBPW1BdID0gQXR0cmlidXRlcy52YWx1ZTtcbiAgcmV0dXJuIE87XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIGRlZmluZVByb3BlcnR5TW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHknKTtcbnZhciBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5LWRlc2NyaXB0b3InKTtcblxubW9kdWxlLmV4cG9ydHMgPSBERVNDUklQVE9SUyA/IGZ1bmN0aW9uIChvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgcmV0dXJuIGRlZmluZVByb3BlcnR5TW9kdWxlLmYob2JqZWN0LCBrZXksIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvcigxLCB2YWx1ZSkpO1xufSA6IGZ1bmN0aW9uIChvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgb2JqZWN0W2tleV0gPSB2YWx1ZTtcbiAgcmV0dXJuIG9iamVjdDtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgaGFzT3duID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcy1vd24tcHJvcGVydHknKTtcblxudmFyIEZ1bmN0aW9uUHJvdG90eXBlID0gRnVuY3Rpb24ucHJvdG90eXBlO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1nZXRvd25wcm9wZXJ0eWRlc2NyaXB0b3IgLS0gc2FmZVxudmFyIGdldERlc2NyaXB0b3IgPSBERVNDUklQVE9SUyAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG52YXIgRVhJU1RTID0gaGFzT3duKEZ1bmN0aW9uUHJvdG90eXBlLCAnbmFtZScpO1xuLy8gYWRkaXRpb25hbCBwcm90ZWN0aW9uIGZyb20gbWluaWZpZWQgLyBtYW5nbGVkIC8gZHJvcHBlZCBmdW5jdGlvbiBuYW1lc1xudmFyIFBST1BFUiA9IEVYSVNUUyAmJiAoZnVuY3Rpb24gc29tZXRoaW5nKCkgeyAvKiBlbXB0eSAqLyB9KS5uYW1lID09PSAnc29tZXRoaW5nJztcbnZhciBDT05GSUdVUkFCTEUgPSBFWElTVFMgJiYgKCFERVNDUklQVE9SUyB8fCAoREVTQ1JJUFRPUlMgJiYgZ2V0RGVzY3JpcHRvcihGdW5jdGlvblByb3RvdHlwZSwgJ25hbWUnKS5jb25maWd1cmFibGUpKTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIEVYSVNUUzogRVhJU1RTLFxuICBQUk9QRVI6IFBST1BFUixcbiAgQ09ORklHVVJBQkxFOiBDT05GSUdVUkFCTEVcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcbnZhciBzdG9yZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQtc3RvcmUnKTtcblxudmFyIGZ1bmN0aW9uVG9TdHJpbmcgPSB1bmN1cnJ5VGhpcyhGdW5jdGlvbi50b1N0cmluZyk7XG5cbi8vIHRoaXMgaGVscGVyIGJyb2tlbiBpbiBgY29yZS1qc0AzLjQuMS0zLjQuNGAsIHNvIHdlIGNhbid0IHVzZSBgc2hhcmVkYCBoZWxwZXJcbmlmICghaXNDYWxsYWJsZShzdG9yZS5pbnNwZWN0U291cmNlKSkge1xuICBzdG9yZS5pbnNwZWN0U291cmNlID0gZnVuY3Rpb24gKGl0KSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uVG9TdHJpbmcoaXQpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0b3JlLmluc3BlY3RTb3VyY2U7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG5cbnZhciBXZWFrTWFwID0gZ2xvYmFsLldlYWtNYXA7XG5cbm1vZHVsZS5leHBvcnRzID0gaXNDYWxsYWJsZShXZWFrTWFwKSAmJiAvbmF0aXZlIGNvZGUvLnRlc3QoU3RyaW5nKFdlYWtNYXApKTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgc2hhcmVkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZCcpO1xudmFyIHVpZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy91aWQnKTtcblxudmFyIGtleXMgPSBzaGFyZWQoJ2tleXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHJldHVybiBrZXlzW2tleV0gfHwgKGtleXNba2V5XSA9IHVpZChrZXkpKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xubW9kdWxlLmV4cG9ydHMgPSB7fTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgTkFUSVZFX1dFQUtfTUFQID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlYWstbWFwLWJhc2ljLWRldGVjdGlvbicpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcbnZhciBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLW5vbi1lbnVtZXJhYmxlLXByb3BlcnR5Jyk7XG52YXIgaGFzT3duID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcy1vd24tcHJvcGVydHknKTtcbnZhciBzaGFyZWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkLXN0b3JlJyk7XG52YXIgc2hhcmVkS2V5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZC1rZXknKTtcbnZhciBoaWRkZW5LZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hpZGRlbi1rZXlzJyk7XG5cbnZhciBPQkpFQ1RfQUxSRUFEWV9JTklUSUFMSVpFRCA9ICdPYmplY3QgYWxyZWFkeSBpbml0aWFsaXplZCc7XG52YXIgVHlwZUVycm9yID0gZ2xvYmFsLlR5cGVFcnJvcjtcbnZhciBXZWFrTWFwID0gZ2xvYmFsLldlYWtNYXA7XG52YXIgc2V0LCBnZXQsIGhhcztcblxudmFyIGVuZm9yY2UgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGhhcyhpdCkgPyBnZXQoaXQpIDogc2V0KGl0LCB7fSk7XG59O1xuXG52YXIgZ2V0dGVyRm9yID0gZnVuY3Rpb24gKFRZUEUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChpdCkge1xuICAgIHZhciBzdGF0ZTtcbiAgICBpZiAoIWlzT2JqZWN0KGl0KSB8fCAoc3RhdGUgPSBnZXQoaXQpKS50eXBlICE9PSBUWVBFKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdJbmNvbXBhdGlibGUgcmVjZWl2ZXIsICcgKyBUWVBFICsgJyByZXF1aXJlZCcpO1xuICAgIH0gcmV0dXJuIHN0YXRlO1xuICB9O1xufTtcblxuaWYgKE5BVElWRV9XRUFLX01BUCB8fCBzaGFyZWQuc3RhdGUpIHtcbiAgdmFyIHN0b3JlID0gc2hhcmVkLnN0YXRlIHx8IChzaGFyZWQuc3RhdGUgPSBuZXcgV2Vha01hcCgpKTtcbiAgLyogZXNsaW50LWRpc2FibGUgbm8tc2VsZi1hc3NpZ24gLS0gcHJvdG90eXBlIG1ldGhvZHMgcHJvdGVjdGlvbiAqL1xuICBzdG9yZS5nZXQgPSBzdG9yZS5nZXQ7XG4gIHN0b3JlLmhhcyA9IHN0b3JlLmhhcztcbiAgc3RvcmUuc2V0ID0gc3RvcmUuc2V0O1xuICAvKiBlc2xpbnQtZW5hYmxlIG5vLXNlbGYtYXNzaWduIC0tIHByb3RvdHlwZSBtZXRob2RzIHByb3RlY3Rpb24gKi9cbiAgc2V0ID0gZnVuY3Rpb24gKGl0LCBtZXRhZGF0YSkge1xuICAgIGlmIChzdG9yZS5oYXMoaXQpKSB0aHJvdyBuZXcgVHlwZUVycm9yKE9CSkVDVF9BTFJFQURZX0lOSVRJQUxJWkVEKTtcbiAgICBtZXRhZGF0YS5mYWNhZGUgPSBpdDtcbiAgICBzdG9yZS5zZXQoaXQsIG1ldGFkYXRhKTtcbiAgICByZXR1cm4gbWV0YWRhdGE7XG4gIH07XG4gIGdldCA9IGZ1bmN0aW9uIChpdCkge1xuICAgIHJldHVybiBzdG9yZS5nZXQoaXQpIHx8IHt9O1xuICB9O1xuICBoYXMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgICByZXR1cm4gc3RvcmUuaGFzKGl0KTtcbiAgfTtcbn0gZWxzZSB7XG4gIHZhciBTVEFURSA9IHNoYXJlZEtleSgnc3RhdGUnKTtcbiAgaGlkZGVuS2V5c1tTVEFURV0gPSB0cnVlO1xuICBzZXQgPSBmdW5jdGlvbiAoaXQsIG1ldGFkYXRhKSB7XG4gICAgaWYgKGhhc093bihpdCwgU1RBVEUpKSB0aHJvdyBuZXcgVHlwZUVycm9yKE9CSkVDVF9BTFJFQURZX0lOSVRJQUxJWkVEKTtcbiAgICBtZXRhZGF0YS5mYWNhZGUgPSBpdDtcbiAgICBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkoaXQsIFNUQVRFLCBtZXRhZGF0YSk7XG4gICAgcmV0dXJuIG1ldGFkYXRhO1xuICB9O1xuICBnZXQgPSBmdW5jdGlvbiAoaXQpIHtcbiAgICByZXR1cm4gaGFzT3duKGl0LCBTVEFURSkgPyBpdFtTVEFURV0gOiB7fTtcbiAgfTtcbiAgaGFzID0gZnVuY3Rpb24gKGl0KSB7XG4gICAgcmV0dXJuIGhhc093bihpdCwgU1RBVEUpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgc2V0OiBzZXQsXG4gIGdldDogZ2V0LFxuICBoYXM6IGhhcyxcbiAgZW5mb3JjZTogZW5mb3JjZSxcbiAgZ2V0dGVyRm9yOiBnZXR0ZXJGb3Jcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xudmFyIGhhc093biA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMtb3duLXByb3BlcnR5Jyk7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBDT05GSUdVUkFCTEVfRlVOQ1RJT05fTkFNRSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1uYW1lJykuQ09ORklHVVJBQkxFO1xudmFyIGluc3BlY3RTb3VyY2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaW5zcGVjdC1zb3VyY2UnKTtcbnZhciBJbnRlcm5hbFN0YXRlTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ludGVybmFsLXN0YXRlJyk7XG5cbnZhciBlbmZvcmNlSW50ZXJuYWxTdGF0ZSA9IEludGVybmFsU3RhdGVNb2R1bGUuZW5mb3JjZTtcbnZhciBnZXRJbnRlcm5hbFN0YXRlID0gSW50ZXJuYWxTdGF0ZU1vZHVsZS5nZXQ7XG52YXIgJFN0cmluZyA9IFN0cmluZztcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZGVmaW5lcHJvcGVydHkgLS0gc2FmZVxudmFyIGRlZmluZVByb3BlcnR5ID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xudmFyIHN0cmluZ1NsaWNlID0gdW5jdXJyeVRoaXMoJycuc2xpY2UpO1xudmFyIHJlcGxhY2UgPSB1bmN1cnJ5VGhpcygnJy5yZXBsYWNlKTtcbnZhciBqb2luID0gdW5jdXJyeVRoaXMoW10uam9pbik7XG5cbnZhciBDT05GSUdVUkFCTEVfTEVOR1RIID0gREVTQ1JJUFRPUlMgJiYgIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGRlZmluZVByb3BlcnR5KGZ1bmN0aW9uICgpIHsgLyogZW1wdHkgKi8gfSwgJ2xlbmd0aCcsIHsgdmFsdWU6IDggfSkubGVuZ3RoICE9PSA4O1xufSk7XG5cbnZhciBURU1QTEFURSA9IFN0cmluZyhTdHJpbmcpLnNwbGl0KCdTdHJpbmcnKTtcblxudmFyIG1ha2VCdWlsdEluID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodmFsdWUsIG5hbWUsIG9wdGlvbnMpIHtcbiAgaWYgKHN0cmluZ1NsaWNlKCRTdHJpbmcobmFtZSksIDAsIDcpID09PSAnU3ltYm9sKCcpIHtcbiAgICBuYW1lID0gJ1snICsgcmVwbGFjZSgkU3RyaW5nKG5hbWUpLCAvXlN5bWJvbFxcKChbXildKilcXCkvLCAnJDEnKSArICddJztcbiAgfVxuICBpZiAob3B0aW9ucyAmJiBvcHRpb25zLmdldHRlcikgbmFtZSA9ICdnZXQgJyArIG5hbWU7XG4gIGlmIChvcHRpb25zICYmIG9wdGlvbnMuc2V0dGVyKSBuYW1lID0gJ3NldCAnICsgbmFtZTtcbiAgaWYgKCFoYXNPd24odmFsdWUsICduYW1lJykgfHwgKENPTkZJR1VSQUJMRV9GVU5DVElPTl9OQU1FICYmIHZhbHVlLm5hbWUgIT09IG5hbWUpKSB7XG4gICAgaWYgKERFU0NSSVBUT1JTKSBkZWZpbmVQcm9wZXJ0eSh2YWx1ZSwgJ25hbWUnLCB7IHZhbHVlOiBuYW1lLCBjb25maWd1cmFibGU6IHRydWUgfSk7XG4gICAgZWxzZSB2YWx1ZS5uYW1lID0gbmFtZTtcbiAgfVxuICBpZiAoQ09ORklHVVJBQkxFX0xFTkdUSCAmJiBvcHRpb25zICYmIGhhc093bihvcHRpb25zLCAnYXJpdHknKSAmJiB2YWx1ZS5sZW5ndGggIT09IG9wdGlvbnMuYXJpdHkpIHtcbiAgICBkZWZpbmVQcm9wZXJ0eSh2YWx1ZSwgJ2xlbmd0aCcsIHsgdmFsdWU6IG9wdGlvbnMuYXJpdHkgfSk7XG4gIH1cbiAgdHJ5IHtcbiAgICBpZiAob3B0aW9ucyAmJiBoYXNPd24ob3B0aW9ucywgJ2NvbnN0cnVjdG9yJykgJiYgb3B0aW9ucy5jb25zdHJ1Y3Rvcikge1xuICAgICAgaWYgKERFU0NSSVBUT1JTKSBkZWZpbmVQcm9wZXJ0eSh2YWx1ZSwgJ3Byb3RvdHlwZScsIHsgd3JpdGFibGU6IGZhbHNlIH0pO1xuICAgIC8vIGluIFY4IH4gQ2hyb21lIDUzLCBwcm90b3R5cGVzIG9mIHNvbWUgbWV0aG9kcywgbGlrZSBgQXJyYXkucHJvdG90eXBlLnZhbHVlc2AsIGFyZSBub24td3JpdGFibGVcbiAgICB9IGVsc2UgaWYgKHZhbHVlLnByb3RvdHlwZSkgdmFsdWUucHJvdG90eXBlID0gdW5kZWZpbmVkO1xuICB9IGNhdGNoIChlcnJvcikgeyAvKiBlbXB0eSAqLyB9XG4gIHZhciBzdGF0ZSA9IGVuZm9yY2VJbnRlcm5hbFN0YXRlKHZhbHVlKTtcbiAgaWYgKCFoYXNPd24oc3RhdGUsICdzb3VyY2UnKSkge1xuICAgIHN0YXRlLnNvdXJjZSA9IGpvaW4oVEVNUExBVEUsIHR5cGVvZiBuYW1lID09ICdzdHJpbmcnID8gbmFtZSA6ICcnKTtcbiAgfSByZXR1cm4gdmFsdWU7XG59O1xuXG4vLyBhZGQgZmFrZSBGdW5jdGlvbiN0b1N0cmluZyBmb3IgY29ycmVjdCB3b3JrIHdyYXBwZWQgbWV0aG9kcyAvIGNvbnN0cnVjdG9ycyB3aXRoIG1ldGhvZHMgbGlrZSBMb0Rhc2ggaXNOYXRpdmVcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1leHRlbmQtbmF0aXZlIC0tIHJlcXVpcmVkXG5GdW5jdGlvbi5wcm90b3R5cGUudG9TdHJpbmcgPSBtYWtlQnVpbHRJbihmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgcmV0dXJuIGlzQ2FsbGFibGUodGhpcykgJiYgZ2V0SW50ZXJuYWxTdGF0ZSh0aGlzKS5zb3VyY2UgfHwgaW5zcGVjdFNvdXJjZSh0aGlzKTtcbn0sICd0b1N0cmluZycpO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgZGVmaW5lUHJvcGVydHlNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpO1xudmFyIG1ha2VCdWlsdEluID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL21ha2UtYnVpbHQtaW4nKTtcbnZhciBkZWZpbmVHbG9iYWxQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZWZpbmUtZ2xvYmFsLXByb3BlcnR5Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKE8sIGtleSwgdmFsdWUsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSBvcHRpb25zID0ge307XG4gIHZhciBzaW1wbGUgPSBvcHRpb25zLmVudW1lcmFibGU7XG4gIHZhciBuYW1lID0gb3B0aW9ucy5uYW1lICE9PSB1bmRlZmluZWQgPyBvcHRpb25zLm5hbWUgOiBrZXk7XG4gIGlmIChpc0NhbGxhYmxlKHZhbHVlKSkgbWFrZUJ1aWx0SW4odmFsdWUsIG5hbWUsIG9wdGlvbnMpO1xuICBpZiAob3B0aW9ucy5nbG9iYWwpIHtcbiAgICBpZiAoc2ltcGxlKSBPW2tleV0gPSB2YWx1ZTtcbiAgICBlbHNlIGRlZmluZUdsb2JhbFByb3BlcnR5KGtleSwgdmFsdWUpO1xuICB9IGVsc2Uge1xuICAgIHRyeSB7XG4gICAgICBpZiAoIW9wdGlvbnMudW5zYWZlKSBkZWxldGUgT1trZXldO1xuICAgICAgZWxzZSBpZiAoT1trZXldKSBzaW1wbGUgPSB0cnVlO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGVtcHR5ICovIH1cbiAgICBpZiAoc2ltcGxlKSBPW2tleV0gPSB2YWx1ZTtcbiAgICBlbHNlIGRlZmluZVByb3BlcnR5TW9kdWxlLmYoTywga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogIW9wdGlvbnMubm9uQ29uZmlndXJhYmxlLFxuICAgICAgd3JpdGFibGU6ICFvcHRpb25zLm5vbldyaXRhYmxlXG4gICAgfSk7XG4gIH0gcmV0dXJuIE87XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBjZWlsID0gTWF0aC5jZWlsO1xudmFyIGZsb29yID0gTWF0aC5mbG9vcjtcblxuLy8gYE1hdGgudHJ1bmNgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1tYXRoLnRydW5jXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tbWF0aC10cnVuYyAtLSBzYWZlXG5tb2R1bGUuZXhwb3J0cyA9IE1hdGgudHJ1bmMgfHwgZnVuY3Rpb24gdHJ1bmMoeCkge1xuICB2YXIgbiA9ICt4O1xuICByZXR1cm4gKG4gPiAwID8gZmxvb3IgOiBjZWlsKShuKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHRydW5jID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL21hdGgtdHJ1bmMnKTtcblxuLy8gYFRvSW50ZWdlck9ySW5maW5pdHlgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy10b2ludGVnZXJvcmluZmluaXR5XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICB2YXIgbnVtYmVyID0gK2FyZ3VtZW50O1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlIC0tIE5hTiBjaGVja1xuICByZXR1cm4gbnVtYmVyICE9PSBudW1iZXIgfHwgbnVtYmVyID09PSAwID8gMCA6IHRydW5jKG51bWJlcik7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB0b0ludGVnZXJPckluZmluaXR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWludGVnZXItb3ItaW5maW5pdHknKTtcblxudmFyIG1heCA9IE1hdGgubWF4O1xudmFyIG1pbiA9IE1hdGgubWluO1xuXG4vLyBIZWxwZXIgZm9yIGEgcG9wdWxhciByZXBlYXRpbmcgY2FzZSBvZiB0aGUgc3BlYzpcbi8vIExldCBpbnRlZ2VyIGJlID8gVG9JbnRlZ2VyKGluZGV4KS5cbi8vIElmIGludGVnZXIgPCAwLCBsZXQgcmVzdWx0IGJlIG1heCgobGVuZ3RoICsgaW50ZWdlciksIDApOyBlbHNlIGxldCByZXN1bHQgYmUgbWluKGludGVnZXIsIGxlbmd0aCkuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpbmRleCwgbGVuZ3RoKSB7XG4gIHZhciBpbnRlZ2VyID0gdG9JbnRlZ2VyT3JJbmZpbml0eShpbmRleCk7XG4gIHJldHVybiBpbnRlZ2VyIDwgMCA/IG1heChpbnRlZ2VyICsgbGVuZ3RoLCAwKSA6IG1pbihpbnRlZ2VyLCBsZW5ndGgpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdG9JbnRlZ2VyT3JJbmZpbml0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbnRlZ2VyLW9yLWluZmluaXR5Jyk7XG5cbnZhciBtaW4gPSBNYXRoLm1pbjtcblxuLy8gYFRvTGVuZ3RoYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtdG9sZW5ndGhcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHJldHVybiBhcmd1bWVudCA+IDAgPyBtaW4odG9JbnRlZ2VyT3JJbmZpbml0eShhcmd1bWVudCksIDB4MUZGRkZGRkZGRkZGRkYpIDogMDsgLy8gMiAqKiA1MyAtIDEgPT0gOTAwNzE5OTI1NDc0MDk5MVxufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tbGVuZ3RoJyk7XG5cbi8vIGBMZW5ndGhPZkFycmF5TGlrZWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWxlbmd0aG9mYXJyYXlsaWtlXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIHRvTGVuZ3RoKG9iai5sZW5ndGgpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdG9JbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWluZGV4ZWQtb2JqZWN0Jyk7XG52YXIgdG9BYnNvbHV0ZUluZGV4ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWFic29sdXRlLWluZGV4Jyk7XG52YXIgbGVuZ3RoT2ZBcnJheUxpa2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbGVuZ3RoLW9mLWFycmF5LWxpa2UnKTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS57IGluZGV4T2YsIGluY2x1ZGVzIH1gIG1ldGhvZHMgaW1wbGVtZW50YXRpb25cbnZhciBjcmVhdGVNZXRob2QgPSBmdW5jdGlvbiAoSVNfSU5DTFVERVMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgkdGhpcywgZWwsIGZyb21JbmRleCkge1xuICAgIHZhciBPID0gdG9JbmRleGVkT2JqZWN0KCR0aGlzKTtcbiAgICB2YXIgbGVuZ3RoID0gbGVuZ3RoT2ZBcnJheUxpa2UoTyk7XG4gICAgdmFyIGluZGV4ID0gdG9BYnNvbHV0ZUluZGV4KGZyb21JbmRleCwgbGVuZ3RoKTtcbiAgICB2YXIgdmFsdWU7XG4gICAgLy8gQXJyYXkjaW5jbHVkZXMgdXNlcyBTYW1lVmFsdWVaZXJvIGVxdWFsaXR5IGFsZ29yaXRobVxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmUgLS0gTmFOIGNoZWNrXG4gICAgaWYgKElTX0lOQ0xVREVTICYmIGVsICE9PSBlbCkgd2hpbGUgKGxlbmd0aCA+IGluZGV4KSB7XG4gICAgICB2YWx1ZSA9IE9baW5kZXgrK107XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlIC0tIE5hTiBjaGVja1xuICAgICAgaWYgKHZhbHVlICE9PSB2YWx1ZSkgcmV0dXJuIHRydWU7XG4gICAgLy8gQXJyYXkjaW5kZXhPZiBpZ25vcmVzIGhvbGVzLCBBcnJheSNpbmNsdWRlcyAtIG5vdFxuICAgIH0gZWxzZSBmb3IgKDtsZW5ndGggPiBpbmRleDsgaW5kZXgrKykge1xuICAgICAgaWYgKChJU19JTkNMVURFUyB8fCBpbmRleCBpbiBPKSAmJiBPW2luZGV4XSA9PT0gZWwpIHJldHVybiBJU19JTkNMVURFUyB8fCBpbmRleCB8fCAwO1xuICAgIH0gcmV0dXJuICFJU19JTkNMVURFUyAmJiAtMTtcbiAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAvLyBgQXJyYXkucHJvdG90eXBlLmluY2x1ZGVzYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuaW5jbHVkZXNcbiAgaW5jbHVkZXM6IGNyZWF0ZU1ldGhvZCh0cnVlKSxcbiAgLy8gYEFycmF5LnByb3RvdHlwZS5pbmRleE9mYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuaW5kZXhvZlxuICBpbmRleE9mOiBjcmVhdGVNZXRob2QoZmFsc2UpXG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcbnZhciBoYXNPd24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eScpO1xudmFyIHRvSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbmRleGVkLW9iamVjdCcpO1xudmFyIGluZGV4T2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktaW5jbHVkZXMnKS5pbmRleE9mO1xudmFyIGhpZGRlbktleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGlkZGVuLWtleXMnKTtcblxudmFyIHB1c2ggPSB1bmN1cnJ5VGhpcyhbXS5wdXNoKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob2JqZWN0LCBuYW1lcykge1xuICB2YXIgTyA9IHRvSW5kZXhlZE9iamVjdChvYmplY3QpO1xuICB2YXIgaSA9IDA7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgdmFyIGtleTtcbiAgZm9yIChrZXkgaW4gTykgIWhhc093bihoaWRkZW5LZXlzLCBrZXkpICYmIGhhc093bihPLCBrZXkpICYmIHB1c2gocmVzdWx0LCBrZXkpO1xuICAvLyBEb24ndCBlbnVtIGJ1ZyAmIGhpZGRlbiBrZXlzXG4gIHdoaWxlIChuYW1lcy5sZW5ndGggPiBpKSBpZiAoaGFzT3duKE8sIGtleSA9IG5hbWVzW2krK10pKSB7XG4gICAgfmluZGV4T2YocmVzdWx0LCBrZXkpIHx8IHB1c2gocmVzdWx0LCBrZXkpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuIiwgIid1c2Ugc3RyaWN0Jztcbi8vIElFOC0gZG9uJ3QgZW51bSBidWcga2V5c1xubW9kdWxlLmV4cG9ydHMgPSBbXG4gICdjb25zdHJ1Y3RvcicsXG4gICdoYXNPd25Qcm9wZXJ0eScsXG4gICdpc1Byb3RvdHlwZU9mJyxcbiAgJ3Byb3BlcnR5SXNFbnVtZXJhYmxlJyxcbiAgJ3RvTG9jYWxlU3RyaW5nJyxcbiAgJ3RvU3RyaW5nJyxcbiAgJ3ZhbHVlT2YnXG5dO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBpbnRlcm5hbE9iamVjdEtleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWtleXMtaW50ZXJuYWwnKTtcbnZhciBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbnVtLWJ1Zy1rZXlzJyk7XG5cbnZhciBoaWRkZW5LZXlzID0gZW51bUJ1Z0tleXMuY29uY2F0KCdsZW5ndGgnLCAncHJvdG90eXBlJyk7XG5cbi8vIGBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lc2AgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5nZXRvd25wcm9wZXJ0eW5hbWVzXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5bmFtZXMgLS0gc2FmZVxuZXhwb3J0cy5mID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMgfHwgZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhPKSB7XG4gIHJldHVybiBpbnRlcm5hbE9iamVjdEtleXMoTywgaGlkZGVuS2V5cyk7XG59O1xuIiwgIid1c2Ugc3RyaWN0Jztcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZ2V0b3ducHJvcGVydHlzeW1ib2xzIC0tIHNhZmVcbmV4cG9ydHMuZiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGdldEJ1aWx0SW4gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LWJ1aWx0LWluJyk7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgZ2V0T3duUHJvcGVydHlOYW1lc01vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1uYW1lcycpO1xudmFyIGdldE93blByb3BlcnR5U3ltYm9sc01vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1zeW1ib2xzJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG5cbnZhciBjb25jYXQgPSB1bmN1cnJ5VGhpcyhbXS5jb25jYXQpO1xuXG4vLyBhbGwgb2JqZWN0IGtleXMsIGluY2x1ZGVzIG5vbi1lbnVtZXJhYmxlIGFuZCBzeW1ib2xzXG5tb2R1bGUuZXhwb3J0cyA9IGdldEJ1aWx0SW4oJ1JlZmxlY3QnLCAnb3duS2V5cycpIHx8IGZ1bmN0aW9uIG93bktleXMoaXQpIHtcbiAgdmFyIGtleXMgPSBnZXRPd25Qcm9wZXJ0eU5hbWVzTW9kdWxlLmYoYW5PYmplY3QoaXQpKTtcbiAgdmFyIGdldE93blByb3BlcnR5U3ltYm9scyA9IGdldE93blByb3BlcnR5U3ltYm9sc01vZHVsZS5mO1xuICByZXR1cm4gZ2V0T3duUHJvcGVydHlTeW1ib2xzID8gY29uY2F0KGtleXMsIGdldE93blByb3BlcnR5U3ltYm9scyhpdCkpIDoga2V5cztcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGhhc093biA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMtb3duLXByb3BlcnR5Jyk7XG52YXIgb3duS2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vd24ta2V5cycpO1xudmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvck1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yJyk7XG52YXIgZGVmaW5lUHJvcGVydHlNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh0YXJnZXQsIHNvdXJjZSwgZXhjZXB0aW9ucykge1xuICB2YXIga2V5cyA9IG93bktleXMoc291cmNlKTtcbiAgdmFyIGRlZmluZVByb3BlcnR5ID0gZGVmaW5lUHJvcGVydHlNb2R1bGUuZjtcbiAgdmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvck1vZHVsZS5mO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIga2V5ID0ga2V5c1tpXTtcbiAgICBpZiAoIWhhc093bih0YXJnZXQsIGtleSkgJiYgIShleGNlcHRpb25zICYmIGhhc093bihleGNlcHRpb25zLCBrZXkpKSkge1xuICAgICAgZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpO1xuICAgIH1cbiAgfVxufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG5cbnZhciByZXBsYWNlbWVudCA9IC8jfFxcLnByb3RvdHlwZVxcLi87XG5cbnZhciBpc0ZvcmNlZCA9IGZ1bmN0aW9uIChmZWF0dXJlLCBkZXRlY3Rpb24pIHtcbiAgdmFyIHZhbHVlID0gZGF0YVtub3JtYWxpemUoZmVhdHVyZSldO1xuICByZXR1cm4gdmFsdWUgPT09IFBPTFlGSUxMID8gdHJ1ZVxuICAgIDogdmFsdWUgPT09IE5BVElWRSA/IGZhbHNlXG4gICAgOiBpc0NhbGxhYmxlKGRldGVjdGlvbikgPyBmYWlscyhkZXRlY3Rpb24pXG4gICAgOiAhIWRldGVjdGlvbjtcbn07XG5cbnZhciBub3JtYWxpemUgPSBpc0ZvcmNlZC5ub3JtYWxpemUgPSBmdW5jdGlvbiAoc3RyaW5nKSB7XG4gIHJldHVybiBTdHJpbmcoc3RyaW5nKS5yZXBsYWNlKHJlcGxhY2VtZW50LCAnLicpLnRvTG93ZXJDYXNlKCk7XG59O1xuXG52YXIgZGF0YSA9IGlzRm9yY2VkLmRhdGEgPSB7fTtcbnZhciBOQVRJVkUgPSBpc0ZvcmNlZC5OQVRJVkUgPSAnTic7XG52YXIgUE9MWUZJTEwgPSBpc0ZvcmNlZC5QT0xZRklMTCA9ICdQJztcblxubW9kdWxlLmV4cG9ydHMgPSBpc0ZvcmNlZDtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yJykuZjtcbnZhciBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLW5vbi1lbnVtZXJhYmxlLXByb3BlcnR5Jyk7XG52YXIgZGVmaW5lQnVpbHRJbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZWZpbmUtYnVpbHQtaW4nKTtcbnZhciBkZWZpbmVHbG9iYWxQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZWZpbmUtZ2xvYmFsLXByb3BlcnR5Jyk7XG52YXIgY29weUNvbnN0cnVjdG9yUHJvcGVydGllcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jb3B5LWNvbnN0cnVjdG9yLXByb3BlcnRpZXMnKTtcbnZhciBpc0ZvcmNlZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1mb3JjZWQnKTtcblxuLypcbiAgb3B0aW9ucy50YXJnZXQgICAgICAgICAtIG5hbWUgb2YgdGhlIHRhcmdldCBvYmplY3RcbiAgb3B0aW9ucy5nbG9iYWwgICAgICAgICAtIHRhcmdldCBpcyB0aGUgZ2xvYmFsIG9iamVjdFxuICBvcHRpb25zLnN0YXQgICAgICAgICAgIC0gZXhwb3J0IGFzIHN0YXRpYyBtZXRob2RzIG9mIHRhcmdldFxuICBvcHRpb25zLnByb3RvICAgICAgICAgIC0gZXhwb3J0IGFzIHByb3RvdHlwZSBtZXRob2RzIG9mIHRhcmdldFxuICBvcHRpb25zLnJlYWwgICAgICAgICAgIC0gcmVhbCBwcm90b3R5cGUgbWV0aG9kIGZvciB0aGUgYHB1cmVgIHZlcnNpb25cbiAgb3B0aW9ucy5mb3JjZWQgICAgICAgICAtIGV4cG9ydCBldmVuIGlmIHRoZSBuYXRpdmUgZmVhdHVyZSBpcyBhdmFpbGFibGVcbiAgb3B0aW9ucy5iaW5kICAgICAgICAgICAtIGJpbmQgbWV0aG9kcyB0byB0aGUgdGFyZ2V0LCByZXF1aXJlZCBmb3IgdGhlIGBwdXJlYCB2ZXJzaW9uXG4gIG9wdGlvbnMud3JhcCAgICAgICAgICAgLSB3cmFwIGNvbnN0cnVjdG9ycyB0byBwcmV2ZW50aW5nIGdsb2JhbCBwb2xsdXRpb24sIHJlcXVpcmVkIGZvciB0aGUgYHB1cmVgIHZlcnNpb25cbiAgb3B0aW9ucy51bnNhZmUgICAgICAgICAtIHVzZSB0aGUgc2ltcGxlIGFzc2lnbm1lbnQgb2YgcHJvcGVydHkgaW5zdGVhZCBvZiBkZWxldGUgKyBkZWZpbmVQcm9wZXJ0eVxuICBvcHRpb25zLnNoYW0gICAgICAgICAgIC0gYWRkIGEgZmxhZyB0byBub3QgY29tcGxldGVseSBmdWxsIHBvbHlmaWxsc1xuICBvcHRpb25zLmVudW1lcmFibGUgICAgIC0gZXhwb3J0IGFzIGVudW1lcmFibGUgcHJvcGVydHlcbiAgb3B0aW9ucy5kb250Q2FsbEdldFNldCAtIHByZXZlbnQgY2FsbGluZyBhIGdldHRlciBvbiB0YXJnZXRcbiAgb3B0aW9ucy5uYW1lICAgICAgICAgICAtIHRoZSAubmFtZSBvZiB0aGUgZnVuY3Rpb24gaWYgaXQgZG9lcyBub3QgbWF0Y2ggdGhlIGtleVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9wdGlvbnMsIHNvdXJjZSkge1xuICB2YXIgVEFSR0VUID0gb3B0aW9ucy50YXJnZXQ7XG4gIHZhciBHTE9CQUwgPSBvcHRpb25zLmdsb2JhbDtcbiAgdmFyIFNUQVRJQyA9IG9wdGlvbnMuc3RhdDtcbiAgdmFyIEZPUkNFRCwgdGFyZ2V0LCBrZXksIHRhcmdldFByb3BlcnR5LCBzb3VyY2VQcm9wZXJ0eSwgZGVzY3JpcHRvcjtcbiAgaWYgKEdMT0JBTCkge1xuICAgIHRhcmdldCA9IGdsb2JhbDtcbiAgfSBlbHNlIGlmIChTVEFUSUMpIHtcbiAgICB0YXJnZXQgPSBnbG9iYWxbVEFSR0VUXSB8fCBkZWZpbmVHbG9iYWxQcm9wZXJ0eShUQVJHRVQsIHt9KTtcbiAgfSBlbHNlIHtcbiAgICB0YXJnZXQgPSAoZ2xvYmFsW1RBUkdFVF0gfHwge30pLnByb3RvdHlwZTtcbiAgfVxuICBpZiAodGFyZ2V0KSBmb3IgKGtleSBpbiBzb3VyY2UpIHtcbiAgICBzb3VyY2VQcm9wZXJ0eSA9IHNvdXJjZVtrZXldO1xuICAgIGlmIChvcHRpb25zLmRvbnRDYWxsR2V0U2V0KSB7XG4gICAgICBkZXNjcmlwdG9yID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KTtcbiAgICAgIHRhcmdldFByb3BlcnR5ID0gZGVzY3JpcHRvciAmJiBkZXNjcmlwdG9yLnZhbHVlO1xuICAgIH0gZWxzZSB0YXJnZXRQcm9wZXJ0eSA9IHRhcmdldFtrZXldO1xuICAgIEZPUkNFRCA9IGlzRm9yY2VkKEdMT0JBTCA/IGtleSA6IFRBUkdFVCArIChTVEFUSUMgPyAnLicgOiAnIycpICsga2V5LCBvcHRpb25zLmZvcmNlZCk7XG4gICAgLy8gY29udGFpbmVkIGluIHRhcmdldFxuICAgIGlmICghRk9SQ0VEICYmIHRhcmdldFByb3BlcnR5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGlmICh0eXBlb2Ygc291cmNlUHJvcGVydHkgPT0gdHlwZW9mIHRhcmdldFByb3BlcnR5KSBjb250aW51ZTtcbiAgICAgIGNvcHlDb25zdHJ1Y3RvclByb3BlcnRpZXMoc291cmNlUHJvcGVydHksIHRhcmdldFByb3BlcnR5KTtcbiAgICB9XG4gICAgLy8gYWRkIGEgZmxhZyB0byBub3QgY29tcGxldGVseSBmdWxsIHBvbHlmaWxsc1xuICAgIGlmIChvcHRpb25zLnNoYW0gfHwgKHRhcmdldFByb3BlcnR5ICYmIHRhcmdldFByb3BlcnR5LnNoYW0pKSB7XG4gICAgICBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkoc291cmNlUHJvcGVydHksICdzaGFtJywgdHJ1ZSk7XG4gICAgfVxuICAgIGRlZmluZUJ1aWx0SW4odGFyZ2V0LCBrZXksIHNvdXJjZVByb3BlcnR5LCBvcHRpb25zKTtcbiAgfVxufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jbGFzc29mLXJhdycpO1xuXG4vLyBgSXNBcnJheWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWlzYXJyYXlcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1hcnJheS1pc2FycmF5IC0tIHNhZmVcbm1vZHVsZS5leHBvcnRzID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiBpc0FycmF5KGFyZ3VtZW50KSB7XG4gIHJldHVybiBjbGFzc29mKGFyZ3VtZW50KSA9PT0gJ0FycmF5Jztcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgaXNBcnJheSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1hcnJheScpO1xuXG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZ2V0b3ducHJvcGVydHlkZXNjcmlwdG9yIC0tIHNhZmVcbnZhciBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4vLyBTYWZhcmkgPCAxMyBkb2VzIG5vdCB0aHJvdyBhbiBlcnJvciBpbiB0aGlzIGNhc2VcbnZhciBTSUxFTlRfT05fTk9OX1dSSVRBQkxFX0xFTkdUSF9TRVQgPSBERVNDUklQVE9SUyAmJiAhZnVuY3Rpb24gKCkge1xuICAvLyBtYWtlcyBubyBzZW5zZSB3aXRob3V0IHByb3BlciBzdHJpY3QgbW9kZSBzdXBwb3J0XG4gIGlmICh0aGlzICE9PSB1bmRlZmluZWQpIHJldHVybiB0cnVlO1xuICB0cnkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZGVmaW5lcHJvcGVydHkgLS0gc2FmZVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShbXSwgJ2xlbmd0aCcsIHsgd3JpdGFibGU6IGZhbHNlIH0pLmxlbmd0aCA9IDE7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIGVycm9yIGluc3RhbmNlb2YgVHlwZUVycm9yO1xuICB9XG59KCk7XG5cbm1vZHVsZS5leHBvcnRzID0gU0lMRU5UX09OX05PTl9XUklUQUJMRV9MRU5HVEhfU0VUID8gZnVuY3Rpb24gKE8sIGxlbmd0aCkge1xuICBpZiAoaXNBcnJheShPKSAmJiAhZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sICdsZW5ndGgnKS53cml0YWJsZSkge1xuICAgIHRocm93IG5ldyAkVHlwZUVycm9yKCdDYW5ub3Qgc2V0IHJlYWQgb25seSAubGVuZ3RoJyk7XG4gIH0gcmV0dXJuIE8ubGVuZ3RoID0gbGVuZ3RoO1xufSA6IGZ1bmN0aW9uIChPLCBsZW5ndGgpIHtcbiAgcmV0dXJuIE8ubGVuZ3RoID0gbGVuZ3RoO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcbnZhciBNQVhfU0FGRV9JTlRFR0VSID0gMHgxRkZGRkZGRkZGRkZGRjsgLy8gMiAqKiA1MyAtIDEgPT0gOTAwNzE5OTI1NDc0MDk5MVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoaXQgPiBNQVhfU0FGRV9JTlRFR0VSKSB0aHJvdyAkVHlwZUVycm9yKCdNYXhpbXVtIGFsbG93ZWQgaW5kZXggZXhjZWVkZWQnKTtcbiAgcmV0dXJuIGl0O1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1vYmplY3QnKTtcbnZhciBsZW5ndGhPZkFycmF5TGlrZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9sZW5ndGgtb2YtYXJyYXktbGlrZScpO1xudmFyIHNldEFycmF5TGVuZ3RoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LXNldC1sZW5ndGgnKTtcbnZhciBkb2VzTm90RXhjZWVkU2FmZUludGVnZXIgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZG9lcy1ub3QtZXhjZWVkLXNhZmUtaW50ZWdlcicpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG5cbnZhciBJTkNPUlJFQ1RfVE9fTEVOR1RIID0gZmFpbHMoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gW10ucHVzaC5jYWxsKHsgbGVuZ3RoOiAweDEwMDAwMDAwMCB9LCAxKSAhPT0gNDI5NDk2NzI5Nztcbn0pO1xuXG4vLyBWOCA8PSAxMjEgYW5kIFNhZmFyaSA8PSAxNS40OyBGRiA8IDIzIHRocm93cyBJbnRlcm5hbEVycm9yXG4vLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0xMjY4MVxudmFyIHByb3BlckVycm9yT25Ob25Xcml0YWJsZUxlbmd0aCA9IGZ1bmN0aW9uICgpIHtcbiAgdHJ5IHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWRlZmluZXByb3BlcnR5IC0tIHNhZmVcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoW10sICdsZW5ndGgnLCB7IHdyaXRhYmxlOiBmYWxzZSB9KS5wdXNoKCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIGVycm9yIGluc3RhbmNlb2YgVHlwZUVycm9yO1xuICB9XG59O1xuXG52YXIgRk9SQ0VEID0gSU5DT1JSRUNUX1RPX0xFTkdUSCB8fCAhcHJvcGVyRXJyb3JPbk5vbldyaXRhYmxlTGVuZ3RoKCk7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUucHVzaGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5wdXNoXG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBwcm90bzogdHJ1ZSwgYXJpdHk6IDEsIGZvcmNlZDogRk9SQ0VEIH0sIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzIC0tIHJlcXVpcmVkIGZvciBgLmxlbmd0aGBcbiAgcHVzaDogZnVuY3Rpb24gcHVzaChpdGVtKSB7XG4gICAgdmFyIE8gPSB0b09iamVjdCh0aGlzKTtcbiAgICB2YXIgbGVuID0gbGVuZ3RoT2ZBcnJheUxpa2UoTyk7XG4gICAgdmFyIGFyZ0NvdW50ID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICBkb2VzTm90RXhjZWVkU2FmZUludGVnZXIobGVuICsgYXJnQ291bnQpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJnQ291bnQ7IGkrKykge1xuICAgICAgT1tsZW5dID0gYXJndW1lbnRzW2ldO1xuICAgICAgbGVuKys7XG4gICAgfVxuICAgIHNldEFycmF5TGVuZ3RoKE8sIGxlbik7XG4gICAgcmV0dXJuIGxlbjtcbiAgfVxufSk7XG4iLCAiY29uc3QgaXNJbmxpbmVIVE1MRWxlbWVudCA9IChub2RlOiBOb2RlKTogbm9kZSBpcyBIVE1MRWxlbWVudCA9PiB7XG5cdHJldHVybiBub2RlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgJiYgd2luZG93LmdldENvbXB1dGVkU3R5bGUobm9kZSkuZGlzcGxheS5pbmNsdWRlcygnaW5saW5lJyk7XG59O1xuXG5jb25zdCBpc1RleHROb2RlID0gKG5vZGU6IE5vZGUpOiBub2RlIGlzIFRleHQgPT4ge1xuXHRyZXR1cm4gbm9kZS5ub2RlVHlwZSA9PT0gTm9kZS5URVhUX05PREU7XG59O1xuXG5jb25zdCBpc1Zpc2libGUgPSAoZWxlbWVudDogRWxlbWVudCk6IGJvb2xlYW4gPT4ge1xuXHRjb25zdCBzdHlsZTogQ1NTU3R5bGVEZWNsYXJhdGlvbiA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpO1xuXG5cdHJldHVybiAoXG5cdFx0c3R5bGUuZGlzcGxheSAhPT0gJ25vbmUnICYmXG5cdFx0IVsnaGlkZGVuJywgJ2NvbGxhcHNlJ10uaW5jbHVkZXMoc3R5bGUudmlzaWJpbGl0eSkgJiZcblx0XHROdW1iZXIucGFyc2VGbG9hdChzdHlsZS5vcGFjaXR5KSA+IDBcblx0KTtcbn07XG5cbmNvbnN0IGdldE5vZGVUZXh0ID0gKG5vZGU6IEhUTUxFbGVtZW50IHwgVGV4dCk6IHN0cmluZyA9PiB7XG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSB1bmljb3JuL3ByZWZlci1kb20tbm9kZS10ZXh0LWNvbnRlbnRcblx0cmV0dXJuIG5vZGUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCA/IG5vZGUuaW5uZXJUZXh0IDogbm9kZS5kYXRhO1xufTtcblxuLyoqXG4gKiBTcGxpdCBhIHN0cmluZyBiZWZvcmUgYW4gYXJyYXkgb2YgaW5kZXhlcy5cbiAqXG4gKiBGb3IgZXhhbXBsZSxcbiAqIGBgYFxuICogc3BsaXRBdEluZGV4ZXMoJzEyMzQ1Njc4OScsIFszLCA1LCA3XSk7XG4gKiBgYGBcbiAqIHJlc3VsdHMgaW5cbiAqIGBgYFxuICogWycxMjMnLCAnNDUnLCAnNjcnLCAnODknXVxuICogYGBgXG4gKlxuICogTm90ZSB0aGF0IGVtcHR5IHN0cmluZyBhcmUgaW5jbHVkZWQ6XG4gKiBgYGBcbiAqIHNwbGl0QXRJbmRleGVzKCcxMjM0NTY3ODknLCBbMCwgOV0pO1xuICogYGBgXG4gKiByZXN1bHRzIGluXG4gKiBgYGBcbiAqIFsnJywgJzEyMzQ1Njc4OScsICcnXVxuICogYGBgXG4gKlxuICogSW5kZXhlcyB0aGF0IGFyZSBuZWdhdGl2ZSBvciBncmVhdGVyIHRoYW4gdGhlIGxlbmd0aCBvZiB0aGUgc3RyaW5nIGFyZSBpZ25vcmVkLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHIgc3RyaW5nIHRvIHNwbGl0XG4gKiBAcGFyYW0ge251bWJlcltdfSBpbmRleGVzIGluZGV4ZXNcbiAqIEByZXR1cm4ge3N0cmluZ1tdfSBzcGxpdHRlZCBzdHJpbmcgZnJhZ21lbnRzXG4gKi9cbmNvbnN0IHNwbGl0QXRJbmRleGVzID0gKHN0cjogc3RyaW5nLCBpbmRleGVzOiBudW1iZXJbXSk6IHN0cmluZ1tdID0+IHtcblx0Y29uc3QgcmVzdWx0OiBzdHJpbmdbXSA9IFtdO1xuXG5cdGNvbnN0IG5vcm1hbGl6ZWRJbmRleGVzOiBudW1iZXJbXSA9IFtcblx0XHQvLyBSZW1vdmUgZHVwbGljYXRpb25zIGFuZCBzb3J0IGluIGFzY2VuZGluZyBvcmRlclxuXHRcdC4uLm5ldyBTZXQoXG5cdFx0XHRpbmRleGVzXG5cdFx0XHRcdC5zb3J0KChhOiBudW1iZXIsIGI6IG51bWJlcik6IG51bWJlciA9PiB7XG5cdFx0XHRcdFx0cmV0dXJuIGEgLSBiO1xuXHRcdFx0XHR9KVxuXHRcdFx0XHQuZmlsdGVyKChpOiBudW1iZXIpOiBib29sZWFuID0+IHtcblx0XHRcdFx0XHRyZXR1cm4gaSA+PSAwICYmIGkgPD0gc3RyLmxlbmd0aDtcblx0XHRcdFx0fSlcblx0XHQpLFxuXHRcdHN0ci5sZW5ndGgsXG5cdF07XG5cblx0Zm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IG5vcm1hbGl6ZWRJbmRleGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y29uc3Qgc2xpY2U6IHN0cmluZyA9IHN0ci5zbGljZShub3JtYWxpemVkSW5kZXhlc1tpIC0gMV0sIG5vcm1hbGl6ZWRJbmRleGVzW2ldKTtcblx0XHRyZXN1bHQucHVzaChzbGljZSk7XG5cdH1cblxuXHRyZXR1cm4gcmVzdWx0O1xufTtcblxuZXhwb3J0IHtpc0lubGluZUhUTUxFbGVtZW50LCBpc1RleHROb2RlLCBpc1Zpc2libGUsIGdldE5vZGVUZXh0LCBzcGxpdEF0SW5kZXhlc307XG4iLCAidHlwZSBEb21NdXRhdGlvbkZ1bmMgPSAoZWxlbWVudDogRWxlbWVudCkgPT4gdm9pZDtcblxuY29uc3QgcGVuZGluZ0FjdGlvbnM6IFdlYWtNYXA8RWxlbWVudCwgRG9tTXV0YXRpb25GdW5jW10+ID0gbmV3IFdlYWtNYXA8RWxlbWVudCwgRG9tTXV0YXRpb25GdW5jW10+KCk7XG5cbmNvbnN0IG9uSW50ZXJzZWN0aW9uID0gKGVudHJpZXM6IEludGVyc2VjdGlvbk9ic2VydmVyRW50cnlbXSk6IHZvaWQgPT4ge1xuXHRmb3IgKGNvbnN0IGVudHJ5IG9mIGVudHJpZXMpIHtcblx0XHRpZiAoIWVudHJ5LmlzSW50ZXJzZWN0aW5nKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRjb25zdCBlbGVtZW50OiBFbGVtZW50ID0gZW50cnkudGFyZ2V0O1xuXHRcdG9ic2VydmVyLnVub2JzZXJ2ZShlbGVtZW50KTtcblxuXHRcdGNvbnN0IGNhbGxiYWNrczogRG9tTXV0YXRpb25GdW5jW10gfCB1bmRlZmluZWQgPSBwZW5kaW5nQWN0aW9ucy5nZXQoZWxlbWVudCk7XG5cdFx0aWYgKCFjYWxsYmFja3MpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdHdoaWxlICh0cnVlKSB7XG5cdFx0XHRjb25zdCBjYWxsYmFjazogRG9tTXV0YXRpb25GdW5jIHwgdW5kZWZpbmVkID0gY2FsbGJhY2tzLnNoaWZ0KCk7IC8vIEZJRk9cblx0XHRcdGlmICghY2FsbGJhY2spIHtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0XHRjYWxsYmFjayhlbGVtZW50KTtcblx0XHR9XG5cdH1cbn07XG5cbi8vIE9wdGltaXphdGlvbjogbGF6aWx5IGV4ZWN1dGUgcGVuZGluZyBhY3Rpb25zIG9uY2UgYW4gZWxlbWVudCBpcyB2aXNpYmxlXG5jb25zdCBvYnNlcnZlcjogSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIob25JbnRlcnNlY3Rpb24pO1xuXG5jb25zdCBxdWV1ZURvbU11dGF0aW9uID0gKGVsZW1lbnQ6IEVsZW1lbnQsIGNhbGxiYWNrOiBEb21NdXRhdGlvbkZ1bmMpOiB2b2lkID0+IHtcblx0aWYgKCFwZW5kaW5nQWN0aW9ucy5oYXMoZWxlbWVudCkpIHtcblx0XHRwZW5kaW5nQWN0aW9ucy5zZXQoZWxlbWVudCwgW10pO1xuXHR9XG5cblx0cGVuZGluZ0FjdGlvbnMuZ2V0KGVsZW1lbnQpPy5wdXNoKGNhbGxiYWNrKTtcblx0b2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50KTtcbn07XG5cbmV4cG9ydCB7cXVldWVEb21NdXRhdGlvbn07XG4iLCAiaW1wb3J0IHtnZXROb2RlVGV4dCwgaXNJbmxpbmVIVE1MRWxlbWVudCwgaXNUZXh0Tm9kZSwgaXNWaXNpYmxlLCBzcGxpdEF0SW5kZXhlc30gZnJvbSAnLi91dGlsJztcbmltcG9ydCB7cXVldWVEb21NdXRhdGlvbn0gZnJvbSAnLi9xdWV1ZSc7XG5cbmNvbnN0IFJFR0VYX1JBTkdFX0NISU5FU0U6IHN0cmluZyA9XG5cdCcoPzpbXFxcXHUyRTgwLVxcXFx1MkU5OVxcXFx1MkU5Qi1cXFxcdTJFRjNcXFxcdTJGMDAtXFxcXHUyRkQ1XFxcXHUzMDA1XFxcXHUzMDA3XFxcXHUzMDIxLVxcXFx1MzAyOVxcXFx1MzAzOC1cXFxcdTMwM0JcXFxcdTM0MDAtXFxcXHU0REJGXFxcXHU0RTAwLVxcXFx1OUZGRlxcXFx1RjkwMC1cXFxcdUZBNkRcXFxcdUZBNzAtXFxcXHVGQUQ5XXxcXFxcdUQ4MUJbXFxcXHVERkUyXFxcXHVERkUzXFxcXHVERkYwXFxcXHVERkYxXXxbXFxcXHVEODQwLVxcXFx1RDg2OFxcXFx1RDg2QS1cXFxcdUQ4NkNcXFxcdUQ4NkYtXFxcXHVEODcyXFxcXHVEODc0LVxcXFx1RDg3OVxcXFx1RDg4MC1cXFxcdUQ4ODNdW1xcXFx1REMwMC1cXFxcdURGRkZdfFxcXFx1RDg2OVtcXFxcdURDMDAtXFxcXHVERURGXFxcXHVERjAwLVxcXFx1REZGRl18XFxcXHVEODZEW1xcXFx1REMwMC1cXFxcdURGMzhcXFxcdURGNDAtXFxcXHVERkZGXXxcXFxcdUQ4NkVbXFxcXHVEQzAwLVxcXFx1REMxRFxcXFx1REMyMC1cXFxcdURGRkZdfFxcXFx1RDg3M1tcXFxcdURDMDAtXFxcXHVERUExXFxcXHVERUIwLVxcXFx1REZGRl18XFxcXHVEODdBW1xcXFx1REMwMC1cXFxcdURGRTBdfFxcXFx1RDg3RVtcXFxcdURDMDAtXFxcXHVERTFEXXxcXFxcdUQ4ODRbXFxcXHVEQzAwLVxcXFx1REY0QV0pJztcbmNvbnN0IFJFR0VYX1JBTkdFX09USEVSX0xFRlQ6IHN0cmluZyA9ICdbQS1aYS16MC05QH4lKz18wrFcXFxcKX0jJMKl4oKswqPigqRdJztcbmNvbnN0IFJFR0VYX1JBTkdFX09USEVSX1JJR0hUOiBzdHJpbmcgPSAnW0EtWmEtejAtOUB+JSs9fMKxXFxcXCh7IyTCpeKCrMKj4oKkXSc7XG5jb25zdCBSRUdFWF9TVFJfSU5URVJfU0NSSVBUOiBzdHJpbmcgPSBgKD86KCR7UkVHRVhfUkFOR0VfQ0hJTkVTRX0pKD89JHtSRUdFWF9SQU5HRV9PVEhFUl9SSUdIVH0pfCgke1JFR0VYX1JBTkdFX09USEVSX0xFRlR9KSg/PSR7UkVHRVhfUkFOR0VfQ0hJTkVTRX0pKWA7XG5cbmNvbnN0IFNQQUNFOiBzdHJpbmcgPSAnXFx1MjAwQSc7XG5cbmNvbnN0IFdSQVBQRVJfQ0xBU1M6IHN0cmluZyA9ICdnYWRnZXQtdGV4dF9zcGFjaW5nJztcblxuY29uc3QgU0VMRUNUT1JfQUxMT1dFRDogc3RyaW5nW10gPSBbXG5cdCdhJyxcblx0J2FiYnInLFxuXHQnYXJ0aWNsZScsXG5cdCdhc2lkZScsXG5cdCdiJyxcblx0J2JkaScsXG5cdCdiaWcnLFxuXHQnYmxvY2txdW90ZScsXG5cdCdidXR0b24nLFxuXHQnY2FwdGlvbicsXG5cdCdjZW50ZXInLFxuXHQnY2l0ZScsXG5cdCdkYXRhJyxcblx0J2RkJyxcblx0J2RlbCcsXG5cdCdkZXRhaWxzJyxcblx0J2RmbicsXG5cdCdkaXYnLFxuXHQnZHQnLFxuXHQnZW0nLFxuXHQnZmlnY2FwdGlvbicsXG5cdCdmb290ZXInLFxuXHQnaDEnLFxuXHQnaDInLFxuXHQnaDMnLFxuXHQnaDQnLFxuXHQnaDUnLFxuXHQnaGVhZGVyJyxcblx0J2knLFxuXHQnaW5zJyxcblx0J2xhYmVsJyxcblx0J2xlZ2VuZCcsXG5cdCdsaScsXG5cdCdtYWluJyxcblx0J21hcmsnLFxuXHQnb3B0aW9uJyxcblx0J3AnLFxuXHQncScsXG5cdCdydWJ5Jyxcblx0J3MnLFxuXHQnc2VjdGlvbicsXG5cdCdzbWFsbCcsXG5cdCdzcGFuJyxcblx0J3N0cmlrZScsXG5cdCdzdHJvbmcnLFxuXHQnc3ViJyxcblx0J3N1bW1hcnknLFxuXHQnc3VwJyxcblx0J3RkJyxcblx0J3RoJyxcblx0J3RpbWUnLFxuXHQndScsXG5dO1xuY29uc3QgU0VMRUNUT1JfQkxPQ0tFRDogc3RyaW5nW10gPSBbXG5cdCdjb2RlJyxcblx0J2tiZCcsXG5cdCdwcmUnLFxuXHQncnAnLFxuXHQncnQnLFxuXHQnc2FtcCcsXG5cdCd0ZXh0YXJlYScsXG5cdCd2YXInLFxuXHQvLyBFbGVtZW50cyB3aXRoIHRoaXMgY2xhc3MgYXJlIGV4Y2x1ZGVkXG5cdCcuZ2FkZ2V0LW5vc3BhY2UnLFxuXHQvLyBFZGl0YWJsZSBlbGVtZW50c1xuXHQnW2NvbnRlbnRlZGl0YWJsZT1cInRydWVcIl0nLFxuXHQvLyBBQ0UgZWRpdG9yIGNvbnRlbnRcblx0Jy5hY2VfZWRpdG9yJyxcblx0Ly8gVmlzdWFsIEVkaXRvciAoYW5kIDIwMTcgV2lraXRleHQgRWRpdG9yKSBjb250ZW50ICYgZGlmZlxuXHQnLnZlLXVpLXN1cmZhY2UnLFxuXHQnLnZlLWluaXQtbXctZGlmZlBhZ2UtZGlmZicsXG5cdC8vIERpZmZcblx0Jy5kaWZmLWNvbnRleHQnLFxuXHQnLmRpZmYtYWRkZWRsaW5lJyxcblx0Jy5kaWZmLWRlbGV0ZWRsaW5lJyxcblx0Ly8gRGlmZiAoaW5saW5lIG1vZGUpXG5cdCcubXctZGlmZi1pbmxpbmUtYWRkZWQnLFxuXHQnLm13LWRpZmYtaW5saW5lLWRlbGV0ZWQnLFxuXHQnLm13LWRpZmYtaW5saW5lLW1vdmVkJyxcblx0Jy5tdy1kaWZmLWlubGluZS1jaGFuZ2VkJyxcblx0Jy5tdy1kaWZmLWlubGluZS1jb250ZXh0Jyxcbl07XG5cbi8vIEZJWE1FOiBVc2UgOmlzKCkgaW4gdGhlIGZ1dHVyZSBvbmNlIGl0IGhhcyBiZXR0ZXIgYnJvd3NlciBjb21wYXRpYmlsaXR5XG5jb25zdCBTRUxFQ1RPUjogc3RyaW5nID0gU0VMRUNUT1JfQUxMT1dFRC5tYXAoKGFsbG93ZWQ6IHN0cmluZyk6IHN0cmluZyA9PiB7XG5cdHJldHVybiBgJHthbGxvd2VkfTpub3QoJHtTRUxFQ1RPUl9CTE9DS0VELmZsYXRNYXAoKGJsb2NrZWQ6IHN0cmluZyk6IHN0cmluZyB8IHN0cmluZ1tdID0+IHtcblx0XHQvLyBOb3QgaW5jbHVkZSBpdHNlbGYgaWYgaXQgaXMgYSB0YWcgc2VsZWN0b3Jcblx0XHRyZXR1cm4gKGJsb2NrZWRbMF0gYXMgc3RyaW5nKS5tYXRjaCgvW2Etel0vaSkgPyBgJHtibG9ja2VkfSAqYCA6IFtibG9ja2VkLCBgJHtibG9ja2VkfSAqYF07XG5cdH0pLmpvaW4oJywnKX0pYDtcbn0pLmpvaW4oJywnKTtcblxuY29uc3QgZ2V0TGVhZkVsZW1lbnRzID0gKHBhcmVudDogSFRNTEVsZW1lbnQpOiBIVE1MRWxlbWVudFtdID0+IHtcblx0Y29uc3QgY2FuZGlkYXRlczogTm9kZUxpc3RPZjxIVE1MRWxlbWVudD4gPSBwYXJlbnQucXVlcnlTZWxlY3RvckFsbChTRUxFQ1RPUik7XG5cdGNvbnN0IHJlc3VsdDogSFRNTEVsZW1lbnRbXSA9IFtdO1xuXG5cdGlmIChwYXJlbnQubWF0Y2hlcyhTRUxFQ1RPUikpIHtcblx0XHRyZXN1bHQucHVzaChwYXJlbnQpO1xuXHR9XG5cblx0Zm9yIChjb25zdCBjYW5kaWRhdGUgb2YgY2FuZGlkYXRlcykge1xuXHRcdGZvciAoY29uc3QgY2hpbGROb2RlIG9mIGNhbmRpZGF0ZS5jaGlsZE5vZGVzKSB7XG5cdFx0XHRpZiAoaXNUZXh0Tm9kZShjaGlsZE5vZGUpKSB7XG5cdFx0XHRcdHJlc3VsdC5wdXNoKGNhbmRpZGF0ZSk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiByZXN1bHQ7XG59O1xuXG5jb25zdCBnZXROZXh0VmlzaWJsZVNpYmxpbmcgPSAobm9kZTogTm9kZSk6IEhUTUxFbGVtZW50IHwgVGV4dCB8IG51bGwgPT4ge1xuXHRsZXQgY3VycmVudE5vZGU6IE5vZGUgPSBub2RlO1xuXG5cdC8vIFVzZSBsb29wcyByYXRoZXIgdGhhbiByZWN1cnNpb24gZm9yIGJldHRlciBwZXJmb3JtYW5jZVxuXHR3aGlsZSAodHJ1ZSkge1xuXHRcdGNvbnN0IGNhbmRpZGF0ZTogQ2hpbGROb2RlIHwgbnVsbCA9IGN1cnJlbnROb2RlLm5leHRTaWJsaW5nO1xuXG5cdFx0aWYgKCFjYW5kaWRhdGUpIHtcblx0XHRcdGNvbnN0IHBhcmVudDogSFRNTEVsZW1lbnQgfCBudWxsID0gY3VycmVudE5vZGUucGFyZW50RWxlbWVudDtcblx0XHRcdGlmICghcGFyZW50KSB7XG5cdFx0XHRcdC8vIFBhcmVudCBpcyBEb2N1bWVudCwgc28gbm8gdmlzaWJsZSBzaWJsaW5nXG5cdFx0XHRcdHJldHVybiBudWxsO1xuXHRcdFx0fVxuXHRcdFx0Ly8gQnViYmxlIHVwIHRvIGl0cyBwYXJlbnQgYW5kIGdldCBpdHMgc2libGluZ1xuXHRcdFx0Y3VycmVudE5vZGUgPSBwYXJlbnQ7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRpZiAoIShjYW5kaWRhdGUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCB8fCBjYW5kaWRhdGUgaW5zdGFuY2VvZiBUZXh0KSkge1xuXHRcdFx0Ly8gQ29tbWVudHMsIFNWR3MsIGV0Yy46IGdldCBpdHMgc2libGluZyBhcyByZXN1bHRcblx0XHRcdGN1cnJlbnROb2RlID0gY2FuZGlkYXRlO1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0aWYgKGNhbmRpZGF0ZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG5cdFx0XHRpZiAoIWlzVmlzaWJsZShjYW5kaWRhdGUpKSB7XG5cdFx0XHRcdC8vIEludmlzaWJsZTogcmVjdXJzaXZlbHkgZ2V0IHRoaXMgZWxlbWVudCdzIG5leHQgc2libGluZ1xuXHRcdFx0XHRjdXJyZW50Tm9kZSA9IGNhbmRpZGF0ZTtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cblx0XHRcdGlmICghaXNJbmxpbmVIVE1MRWxlbWVudChjYW5kaWRhdGUpKSB7XG5cdFx0XHRcdC8vIE5leHQgc2libGluZyBpcyBub3QgaW5saW5lIChhdCBuZXh0IGxpbmUpLCBzbyBubyBzaWJsaW5nc1xuXHRcdFx0XHRyZXR1cm4gbnVsbDtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoY2FuZGlkYXRlIGluc3RhbmNlb2YgVGV4dCAmJiAhY2FuZGlkYXRlLmRhdGEudHJpbSgpKSB7XG5cdFx0XHQvLyBTa2lwIGVtcHR5IFRleHQgbm9kZXMgKGUuZy4gbGluZSBicmVha3MpXG5cdFx0XHRjdXJyZW50Tm9kZSA9IGNhbmRpZGF0ZTtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdHJldHVybiBjYW5kaWRhdGU7XG5cdH1cbn07XG5cbmNvbnN0IGNyZWF0ZVNwYWNpbmdXcmFwcGVyID0gKHN0cjogc3RyaW5nKTogW3N0cmluZywgSFRNTFNwYW5FbGVtZW50XSA9PiB7XG5cdGNvbnN0IHNwYW46IEhUTUxTcGFuRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1lZGlhd2lraS9jbGFzcy1kb2Ncblx0c3Bhbi5jbGFzc05hbWUgPSBXUkFQUEVSX0NMQVNTO1xuXHRzcGFuLnRleHRDb250ZW50ID0gc3RyLnNsaWNlKC0xKTtcblxuXHRyZXR1cm4gW3N0ci5zbGljZSgwLCAtMSksIHNwYW5dO1xufTtcblxuY29uc3QgYWRqdXN0U3BhY2luZyA9IChlbGVtZW50OiBIVE1MRWxlbWVudCk6IHZvaWQgPT4ge1xuXHQvLyBGcmVlemUgTm9kZUxpc3QgaW4gYWR2YW5jZVxuXHRjb25zdCBjaGlsZE5vZGVzOiBDaGlsZE5vZGVbXSA9IFsuLi5lbGVtZW50LmNoaWxkTm9kZXNdO1xuXHRjb25zdCB0ZXh0U3BhY2luZ1Bvc01hcDogTWFwPFRleHQsIG51bWJlcltdPiA9IG5ldyBNYXA8VGV4dCwgbnVtYmVyW10+KCk7XG5cblx0Zm9yIChjb25zdCBjaGlsZCBvZiBjaGlsZE5vZGVzKSB7XG5cdFx0aWYgKCEoY2hpbGQgaW5zdGFuY2VvZiBUZXh0KSkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0Y29uc3QgbmV4dFNpYmxpbmc6IEhUTUxFbGVtZW50IHwgVGV4dCB8IG51bGwgPSBnZXROZXh0VmlzaWJsZVNpYmxpbmcoY2hpbGQpO1xuXG5cdFx0bGV0IHRlc3RTdHJpbmc6IHN0cmluZyA9IGdldE5vZGVUZXh0KGNoaWxkKTtcblx0XHRpZiAobmV4dFNpYmxpbmcpIHtcblx0XHRcdC8vIEFwcGVuZCBmaXJzdCBjaGFyYWN0ZXIgdG8gZGV0ZWN0IHNjcmlwdCBpbnRlcnNlY3Rpb25cblx0XHRcdHRlc3RTdHJpbmcgKz0gZ2V0Tm9kZVRleHQobmV4dFNpYmxpbmcpWzBdID8/ICcnO1xuXHRcdH1cblxuXHRcdGNvbnN0IGluZGV4ZXM6IG51bWJlcltdID0gW107XG5cdFx0Ly8gR2xvYmFsIHJlZ2V4cHMgYXJlIHN0YXRlZnVsIHNvIGRvIGluaXRpYWxpemF0aW9uIGluIGVhY2ggbG9vcFxuXHRcdGNvbnN0IHJlZ2V4VGV4dE5vZGVEYXRhOiBSZWdFeHAgPSBuZXcgUmVnRXhwKFJFR0VYX1NUUl9JTlRFUl9TQ1JJUFQsICdnJyk7XG5cblx0XHR3aGlsZSAodHJ1ZSkge1xuXHRcdFx0Y29uc3QgbWF0Y2g6IFJlZ0V4cEV4ZWNBcnJheSB8IG51bGwgPSByZWdleFRleHROb2RlRGF0YS5leGVjKHRlc3RTdHJpbmcpO1xuXHRcdFx0aWYgKCFtYXRjaCkge1xuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHRcdGluZGV4ZXMucHVzaChtYXRjaC5pbmRleCArIDEpOyAvLyArMSB0byBtYXRjaCBzY3JpcHQgYm91bmRhcnlcblx0XHR9XG5cblx0XHRpZiAoIWluZGV4ZXMubGVuZ3RoKSB7XG5cdFx0XHQvLyBPcHRpbWl6YXRpb246IHNraXAgZnVydGhlciBzdGVwc1xuXHRcdFx0Ly8gQWxzbyBwcmV2ZW50IHVubmVjZXNzYXJ5IG11dGF0aW9uLCB3aGljaCB3aWxsIGJlIGRldGVjdGVkIGJ5IE11dGF0aW9uT2JzZXJ2ZXIsXG5cdFx0XHQvLyByZXN1bHRpbmcgaW4gaW5maW5pdGUgbG9vcHNcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdHRleHRTcGFjaW5nUG9zTWFwLnNldChjaGlsZCwgaW5kZXhlcyk7XG5cdH1cblxuXHQvLyBTY2hlZHVsZSBET00gbXV0YXRpb24gdG8gcHJldmVudCBmb3JjZWQgcmVmbG93c1xuXHRxdWV1ZURvbU11dGF0aW9uKGVsZW1lbnQsICgpOiB2b2lkID0+IHtcblx0XHRmb3IgKGNvbnN0IFtub2RlLCBpbmRleGVzXSBvZiB0ZXh0U3BhY2luZ1Bvc01hcCkge1xuXHRcdFx0Y29uc3QgdGV4dDogc3RyaW5nID0gbm9kZS5kYXRhO1xuXHRcdFx0Y29uc3QgZnJhZ21lbnRzOiBzdHJpbmdbXSA9IHNwbGl0QXRJbmRleGVzKHRleHQsIGluZGV4ZXMpO1xuXG5cdFx0XHRjb25zdCByZXBsYWNlbWVudDogKHN0cmluZyB8IEhUTUxTcGFuRWxlbWVudClbXSA9IGZyYWdtZW50c1xuXHRcdFx0XHQuc2xpY2UoMCwgLTEpXG5cdFx0XHRcdC5mbGF0TWFwKChmcmFnbWVudDogc3RyaW5nKTogW3N0cmluZywgSFRNTFNwYW5FbGVtZW50XSA9PiB7XG5cdFx0XHRcdFx0cmV0dXJuIGNyZWF0ZVNwYWNpbmdXcmFwcGVyKGZyYWdtZW50KTtcblx0XHRcdFx0fSk7XG5cdFx0XHRyZXBsYWNlbWVudC5wdXNoKGZyYWdtZW50cy5hdCgtMSkgYXMgc3RyaW5nKTtcblxuXHRcdFx0Ly8gT3B0aW1pemF0aW9uOiBwcmV2ZW50IGZvcmNlZCByZWZsb3dzXG5cdFx0XHRyZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuXHRcdFx0XHRub2RlLnJlcGxhY2VXaXRoKC4uLnJlcGxhY2VtZW50KTtcblx0XHRcdH0pO1xuXHRcdH1cblx0fSk7XG59O1xuXG5jb25zdCBhZGRTcGFjZVRvU3RyaW5nID0gKHN0cjogc3RyaW5nKTogc3RyaW5nID0+IHtcblx0Y29uc3QgcmVnZXg6IFJlZ0V4cCA9IG5ldyBSZWdFeHAoUkVHRVhfU1RSX0lOVEVSX1NDUklQVCwgJ2cnKTtcblxuXHRyZXR1cm4gc3RyLnJlcGxhY2UocmVnZXgsIGAkMSQyJHtTUEFDRX1gKTtcbn07XG5cbmV4cG9ydCB7Z2V0TGVhZkVsZW1lbnRzLCBhZGp1c3RTcGFjaW5nLCBhZGRTcGFjZVRvU3RyaW5nLCBXUkFQUEVSX0NMQVNTfTtcbiIsICJpbXBvcnQge1dSQVBQRVJfQ0xBU1MsIGFkZFNwYWNlVG9TdHJpbmcsIGFkanVzdFNwYWNpbmcsIGdldExlYWZFbGVtZW50c30gZnJvbSAnLi9tb2R1bGVzL3NwYWNpbmcnO1xuXG5jb25zdCBydW4gPSAoZWxlbWVudDogSFRNTEVsZW1lbnQpOiB2b2lkID0+IHtcblx0Y29uc3QgbGVhdmVzOiBIVE1MRWxlbWVudFtdID0gZ2V0TGVhZkVsZW1lbnRzKGVsZW1lbnQpO1xuXHRmb3IgKGNvbnN0IGxlYWYgb2YgbGVhdmVzKSB7XG5cdFx0YWRqdXN0U3BhY2luZyhsZWFmKTtcblx0fVxufTtcblxuY29uc3QgbXV0YXRpb25PYnNlcnZlcjogTXV0YXRpb25PYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKChyZWNvcmRzOiBNdXRhdGlvblJlY29yZFtdKTogdm9pZCA9PiB7XG5cdGZvciAoY29uc3QgcmVjb3JkIG9mIHJlY29yZHMpIHtcblx0XHRpZiAocmVjb3JkLnR5cGUgIT09ICdjaGlsZExpc3QnKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRjb25zdCBhZGRlZE5vZGVzOiBOb2RlW10gPSBbLi4ucmVjb3JkLmFkZGVkTm9kZXNdO1xuXG5cdFx0Ly8gRXhjbHVkZSBtdXRhdGlvbnMgY2F1c2VkIGJ5IGFkanVzdFNwYWNpbmcoKSB0byBwcmV2ZW50IGluZmluaXRlIGxvb3BzXG5cdFx0Ly8gVHlwaWNhbGx5IHRoZXkgd2lsbCBjb250YWluIG5vZGVzIHdpdGggY2xhc3MgV1JBUFBFUl9DTEFTU1xuXHRcdGlmIChcblx0XHRcdGFkZGVkTm9kZXMuc29tZSgobm9kZTogTm9kZSk6IGJvb2xlYW4gPT4ge1xuXHRcdFx0XHRyZXR1cm4gbm9kZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50ICYmIG5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKFdSQVBQRVJfQ0xBU1MpO1xuXHRcdFx0fSlcblx0XHQpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGZvciAoY29uc3Qgbm9kZSBvZiBhZGRlZE5vZGVzKSB7XG5cdFx0XHRpZiAobm9kZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG5cdFx0XHRcdHJ1bihub2RlKTtcblx0XHRcdH0gZWxzZSBpZiAobm9kZSBpbnN0YW5jZW9mIFRleHQpIHtcblx0XHRcdFx0Y29uc3Qge3BhcmVudEVsZW1lbnR9ID0gbm9kZTtcblx0XHRcdFx0aWYgKHBhcmVudEVsZW1lbnQpIHtcblx0XHRcdFx0XHRydW4ocGFyZW50RWxlbWVudCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cbn0pO1xuXG5jb25zdCBtYWluID0gKCk6IHZvaWQgPT4ge1xuXHRkb2N1bWVudC50aXRsZSA9IGFkZFNwYWNlVG9TdHJpbmcoZG9jdW1lbnQudGl0bGUpO1xuXHQvLyBXYXRjaCBmb3IgYWRkZWQgbm9kZXNcblx0bXV0YXRpb25PYnNlcnZlci5vYnNlcnZlKGRvY3VtZW50LmJvZHksIHtcblx0XHRzdWJ0cmVlOiB0cnVlLFxuXHRcdGNoaWxkTGlzdDogdHJ1ZSxcblx0fSk7XG5cdHJ1bihkb2N1bWVudC5ib2R5KTtcbn07XG5cbiQobWFpbik7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7O0FBQUE7QUFBQTtBQUFBLEtBQUMsU0FBU0EsWUFBVztBQUNyQixVQUFJLEVBQUUsMEJBQXlCLFVBQVEsK0JBQThCLFVBQVEsdUJBQXNCLE9BQU8sMEJBQTBCLFlBQ2pJO0FBV0gsU0FBQyxTQUFTQyxTQUFRQyxXQUFVO0FBQzVCO0FBRUEsY0FBSSxvQkFBb0IsMEJBQTBCRCxXQUNsRCwrQkFBK0JBLFdBQy9CLHVCQUF1QkEsUUFBTywwQkFBMEI7QUFFeEQsY0FBSSxtQkFBbUI7QUFDdEI7QUFBQSxVQUNEO0FBT0EsY0FBSSxXQUFXLENBQUM7QUFTaEIsbUJBQVMsMEJBQTBCLE9BQU87QUFDekMsaUJBQUssT0FBTyxNQUFNO0FBQ2xCLGlCQUFLLFNBQVMsTUFBTTtBQUNwQixpQkFBSyxhQUFhLE1BQU07QUFDeEIsaUJBQUsscUJBQXFCLE1BQU07QUFDaEMsaUJBQUssbUJBQW1CLE1BQU0sb0JBQW9CLGFBQWE7QUFDL0QsZ0JBQUk7QUFDSCxtQkFBSyxpQkFBaUIsQ0FBQyxDQUFDLE1BQU07QUFBQSxZQUMvQixTQUFTLEtBQUs7QUFBQSxZQUVkO0FBR0EsZ0JBQUksYUFBYSxLQUFLO0FBQ3RCLGdCQUFJLGFBQWEsV0FBVyxRQUFRLFdBQVc7QUFDL0MsZ0JBQUksbUJBQW1CLEtBQUs7QUFDNUIsZ0JBQUksbUJBQW1CLGlCQUFpQixRQUFRLGlCQUFpQjtBQUdqRSxnQkFBSSxZQUFZO0FBR2YsbUJBQUssb0JBQW9CLFFB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Q0NBLFdBQVdDLEtBQU01SSxVQUF3QjtBQUN4QyxlQUFPQSxnQkFBZ0JDLGVBQWVELEtBQUs2SSxVQUFVQyxTQUFTekUsYUFBYTtNQUM1RSxDQUFDLEdBQ0E7QUFDRDtNQUNEO0FBRUEsZUFBQTBFLE1BQUEsR0FBQUMsY0FBbUJMLFlBQUFJLE1BQUFDLFlBQUFqSCxRQUFBZ0gsT0FBWTtBQUEvQixjQUFXL0ksT0FBQWdKLFlBQUFELEdBQUE7QUFDVixZQUFJL0ksZ0JBQWdCQyxhQUFhO0FBQ2hDOEgsY0FBSS9ILElBQUk7UUFDVCxXQUFXQSxnQkFBZ0IrRixNQUFNO0FBQ2hDLGdCQUFNO1lBQUNEO1VBQWEsSUFBSTlGO0FBQ3hCLGNBQUk4RixlQUFlO0FBQ2xCaUMsZ0JBQUlqQyxhQUFhO1VBQ2xCO1FBQ0Q7TUFDRDtJQUNEO0VBQUEsU0FBQXhDLEtBQUE7QUFBQWlGLGVBQUFoRixFQUFBRCxHQUFBO0VBQUEsVUFBQTtBQUFBaUYsZUFBQS9FLEVBQUE7RUFBQTtBQUNELENBQUM7QUFFRCxJQUFNeUYsT0FBT0EsTUFBWTtBQUN4QjlDLFdBQVMrQyxRQUFRdEIsaUJBQWlCekIsU0FBUytDLEtBQUs7QUFFaERkLG1CQUFpQnRFLFFBQVFxQyxTQUFTZ0QsTUFBTTtJQUN2Q0MsU0FBUztJQUNUQyxXQUFXO0VBQ1osQ0FBQztBQUNEdEIsTUFBSTVCLFNBQVNnRCxJQUFJO0FBQ2xCO0FBRUFHLEVBQUVMLElBQUk7IiwKICAibmFtZXMiOiBbInVuZGVmaW5lZCIsICJ3aW5kb3ciLCAiZG9jdW1lbnQiLCAiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAiZ2xvYmFsIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgImdsb2JhbCIsICJtb2R1bGUiLCAiZ2xvYmFsIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAiZ2xvYmFsIiwgIm1vZHVsZSIsICJnbG9iYWwiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJnbG9iYWwiLCAiU3ltYm9sIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgImdsb2JhbCIsICJkb2N1bWVudCIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAiZ2xvYmFsIiwgIldlYWtNYXAiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAiZ2xvYmFsIiwgIlR5cGVFcnJvciIsICJXZWFrTWFwIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAiZ2xvYmFsIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIiQiLCAiaXNJbmxpbmVIVE1MRWxlbWVudCIsICJub2RlIiwgIkhUTUxFbGVtZW50IiwgIndpbmRvdyIsICJnZXRDb21wdXRlZFN0eWxlIiwgImRpc3BsYXkiLCAiaW5jbHVkZXMiLCAiaXNUZXh0Tm9kZSIsICJub2RlVHlwZSIsICJOb2RlIiwgIlRFWFRfTk9ERSIsICJpc1Zpc2libGUiLCAiZWxlbWVudCIsICJzdHlsZSIsICJ2aXNpYmlsaXR5IiwgIk51bWJlciIsICJwYXJzZUZsb2F0IiwgIm9wYWNpdHkiLCAiZ2V0Tm9kZVRleHQiLCAiaW5uZXJUZXh0IiwgImRhdGEiLCAic3BsaXRBdEluZGV4ZXMiLCAic3RyIiwgImluZGV4ZXMiLCAicmVzdWx0IiwgIm5vcm1hbGl6ZWRJbmRleGVzIiwgIlNldCIsICJzb3J0IiwgImEiLCAiYiIsICJmaWx0ZXIiLCAiaSIsICJsZW5ndGgiLCAic2xpY2UiLCAicHVzaCIsICJwZW5kaW5nQWN0aW9ucyIsICJXZWFrTWFwIiwgIm9uSW50ZXJzZWN0aW9uIiwgImVudHJpZXMiLCAiX2l0ZXJhdG9yIiwgIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwgIl9zdGVwIiwgInMiLCAibiIsICJkb25lIiwgImVudHJ5IiwgInZhbHVlIiwgImlzSW50ZXJzZWN0aW5nIiwgInRhcmdldCIsICJvYnNlcnZlciIsICJ1bm9ic2VydmUiLCAiY2FsbGJhY2tzIiwgImdldCIsICJjYWxsYmFjayIsICJzaGlmdCIsICJlcnIiLCAiZSIsICJmIiwgIkludGVyc2VjdGlvbk9ic2VydmVyIiwgInF1ZXVlRG9tTXV0YXRpb24iLCAiX3BlbmRpbmdBY3Rpb25zJGdldCIsICJoYXMiLCAic2V0IiwgIm9ic2VydmUiLCAiUkVHRVhfUkFOR0VfQ0hJTkVTRSIsICJSRUdFWF9SQU5HRV9PVEhFUl9MRUZUIiwgIlJFR0VYX1JBTkdFX09USEVSX1JJR0hUIiwgIlJFR0VYX1NUUl9JTlRFUl9TQ1JJUFQiLCAiY29uY2F0IiwgIlNQQUNFIiwgIldSQVBQRVJfQ0xBU1MiLCAiU0VMRUNUT1JfQUxMT1dFRCIsICJTRUxFQ1RPUl9CTE9DS0VEIiwgIlNFTEVDVE9SIiwgIm1hcCIsICJhbGxvd2VkIiwgImZsYXRNYXAiLCAiYmxvY2tlZCIsICJtYXRjaCIsICJqb2luIiwgImdldExlYWZFbGVtZW50cyIsICJwYXJlbnQiLCAiY2FuZGlkYXRlcyIsICJxdWVyeVNlbGVjdG9yQWxsIiwgIm1hdGNoZXMiLCAiX2l0ZXJhdG9yMiIsICJfc3RlcDIiLCAiY2FuZGlkYXRlIiwgIl9pdGVyYXRvcjMiLCAiY2hpbGROb2RlcyIsICJfc3RlcDMiLCAiY2hpbGROb2RlIiwgImdldE5leHRWaXNpYmxlU2libGluZyIsICJjdXJyZW50Tm9kZSIsICJuZXh0U2libGluZyIsICJwYXJlbnRFbGVtZW50IiwgIlRleHQiLCAidHJpbSIsICJjcmVhdGVTcGFjaW5nV3JhcHBlciIsICJzcGFuIiwgImRvY3VtZW50IiwgImNyZWF0ZUVsZW1lbnQiLCAiY2xhc3NOYW1lIiwgInRleHRDb250ZW50IiwgImFkanVzdFNwYWNpbmciLCAidGV4dFNwYWNpbmdQb3NNYXAiLCAiTWFwIiwgIl9pIiwgIl9jaGlsZE5vZGVzIiwgImNoaWxkIiwgInRlc3RTdHJpbmciLCAiX2dldE5vZGVUZXh0JCIsICJyZWdleFRleHROb2RlRGF0YSIsICJSZWdFeHAiLCAiZXhlYyIsICJpbmRleCIsICJfaXRlcmF0b3I0IiwgIl9zdGVwNCIsICJ0ZXh0IiwgImZyYWdtZW50cyIsICJyZXBsYWNlbWVudCIsICJmcmFnbWVudCIsICJhdCIsICJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCAicmVwbGFjZVdpdGgiLCAiYWRkU3BhY2VUb1N0cmluZyIsICJyZWdleCIsICJyZXBsYWNlIiwgInJ1biIsICJsZWF2ZXMiLCAiX2l0ZXJhdG9yNSIsICJfc3RlcDUiLCAibGVhZiIsICJtdXRhdGlvbk9ic2VydmVyIiwgIk11dGF0aW9uT2JzZXJ2ZXIiLCAicmVjb3JkcyIsICJfaXRlcmF0b3I2IiwgIl9zdGVwNiIsICJyZWNvcmQiLCAidHlwZSIsICJhZGRlZE5vZGVzIiwgInNvbWUiLCAiY2xhc3NMaXN0IiwgImNvbnRhaW5zIiwgIl9pMiIsICJfYWRkZWROb2RlcyIsICJtYWluIiwgInRpdGxlIiwgImJvZHkiLCAic3VidHJlZSIsICJjaGlsZExpc3QiLCAiJCJdCn0K

})();

/* </nowiki> */

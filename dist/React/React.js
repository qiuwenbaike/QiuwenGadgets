/**
 * SPDX-License-Identifier: BSD-3-Clause
 * _addText: '{{Gadget Header|license=BSD|attribution=proteriax}}'
 *
 * @base {@link https://github.com/alex-kinokon/jsx-dom}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/React}
 * @license BSD-3-Clause {@link https://github.com/alex-kinokon/jsx-dom/blob/master/LICENSE}
 */

/**
 * BSD 3-Clause License
 *
 * Copyright (c) proteriax
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 *    list of conditions and the following disclaimer.
 *
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 *    this list of conditions and the following disclaimer in the documentation
 *    and/or other materials provided with the distribution.
 *
 * 3. Neither the name of the copyright holder nor the names of its
 *    contributors may be used to endorse or promote products derived from
 *    this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
 * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
 * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
 * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
 * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
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

// node_modules/.pnpm/proxy-polyfill@0.3.2/node_modules/proxy-polyfill/proxy.min.js
var require_proxy_min = __commonJS({
  "node_modules/.pnpm/proxy-polyfill@0.3.2/node_modules/proxy-polyfill/proxy.min.js"() {
    (function() {
      function n() {
        function v() {
          return null;
        }
        function l(a) {
          return a ? "object" === typeof a || "function" === typeof a : false;
        }
        function p(a) {
          if (null !== a && !l(a)) throw new TypeError("Object prototype may only be an Object or null: " + a);
        }
        var q = null, e = Object, w = !!e.create || !({ __proto__: null } instanceof e), A = e.create || (w ? function(a) {
          p(a);
          return { __proto__: a };
        } : function(a) {
          function c() {
          }
          p(a);
          if (null === a) throw new SyntaxError("Native Object.create is required to create objects with null prototype");
          c.prototype = a;
          return new c();
        }), B = e.getPrototypeOf || ([].__proto__ === Array.prototype ? function(a) {
          a = a.__proto__;
          return l(a) ? a : null;
        } : v);
        var m = function(a, c) {
          function k() {
          }
          if (void 0 === (this && this instanceof m ? this.constructor : void 0)) throw new TypeError("Constructor Proxy requires 'new'");
          if (!l(a) || !l(c)) throw new TypeError("Cannot create proxy with a non-object as target or handler");
          q = function() {
            a = null;
            k = function(b) {
              throw new TypeError("Cannot perform '" + b + "' on a proxy that has been revoked");
            };
          };
          setTimeout(function() {
            q = null;
          }, 0);
          var g = c;
          c = { get: null, set: null, apply: null, construct: null };
          for (var h in g) {
            if (!(h in c)) throw new TypeError("Proxy polyfill does not support trap '" + h + "'");
            c[h] = g[h];
          }
          "function" === typeof g && (c.apply = g.apply.bind(g));
          g = B(a);
          var r = false, t = false;
          if ("function" === typeof a) {
            var f = function() {
              var b = this && this.constructor === f, d = Array.prototype.slice.call(arguments);
              k(b ? "construct" : "apply");
              return b && c.construct ? c.construct.call(this, a, d) : !b && c.apply ? c.apply(a, this, d) : b ? (d.unshift(a), new (a.bind.apply(a, d))()) : a.apply(
                this,
                d
              );
            };
            r = true;
          } else a instanceof Array ? (f = [], t = true) : f = w || null !== g ? A(g) : {};
          var x = c.get ? function(b) {
            k("get");
            return c.get(this, b, f);
          } : function(b) {
            k("get");
            return this[b];
          }, C = c.set ? function(b, d) {
            k("set");
            c.set(this, b, d, f);
          } : function(b, d) {
            k("set");
            this[b] = d;
          }, y = {};
          e.getOwnPropertyNames(a).forEach(function(b) {
            if (!((r || t) && b in f)) {
              var d = e.getOwnPropertyDescriptor(a, b);
              e.defineProperty(f, b, { enumerable: !!d.enumerable, get: x.bind(a, b), set: C.bind(a, b) });
              y[b] = true;
            }
          });
          h = true;
          if (r || t) {
            var D = e.setPrototypeOf || ([].__proto__ === Array.prototype ? function(b, d) {
              p(d);
              b.__proto__ = d;
              return b;
            } : v);
            g && D(f, g) || (h = false);
          }
          if (c.get || !h) for (var u in a) y[u] || e.defineProperty(f, u, { get: x.bind(a, u) });
          e.seal(a);
          e.seal(f);
          return f;
        };
        m.revocable = function(a, c) {
          return { proxy: new m(a, c), revoke: q };
        };
        return m;
      }
      ;
      var z = "undefined" !== typeof process && "[object process]" === {}.toString.call(process) || "undefined" !== typeof navigator && "ReactNative" === navigator.product ? global : self;
      z.Proxy || (z.Proxy = n(), z.Proxy.revocable = z.Proxy.revocable);
    })();
  }
});

// dist/React/React.js
require_proxy_min();
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
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames2 = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all) __defProp(target, name, {
    get: all[name],
    enumerable: true
  });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    var _iterator = _createForOfIteratorHelper(__getOwnPropNames2(from)), _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done; ) {
        let key = _step.value;
        if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
          get: () => from[key],
          enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
        });
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", {
  value: true
}), mod);
//! src/React/React.ts
var React_exports = {};
__export(React_exports, {
  Component: () => Component,
  Fragment: () => Fragment,
  PureComponent: () => Component,
  SVGNamespace: () => SVGNamespace,
  ShadowRoot: () => ShadowRoot,
  StrictMode: () => Fragment,
  className: () => className,
  createElement: () => createElement,
  createFactory: () => createFactory,
  createRef: () => createRef,
  forwardRef: () => forwardRef,
  h: () => createElement,
  isRef: () => isRef,
  jsx: () => jsx,
  jsxs: () => jsx,
  memo: () => identity,
  preventDefault: () => preventDefault,
  stopPropagation: () => stopPropagation,
  styled: () => styled,
  useCallback: () => identity,
  useClassList: () => useClassList,
  useImperativeHandle: () => useImperativeHandle,
  useMemo: () => useMemo,
  useRef: () => createRef,
  useText: () => useText
});
module.exports = __toCommonJS(React_exports);
var keys = Object.keys;
function identity(value) {
  return value;
}
function isBoolean(val) {
  return typeof val === "boolean";
}
function isElement(val) {
  return val && typeof val.nodeType === "number";
}
function isString(val) {
  return typeof val === "string";
}
function isNumber(val) {
  return typeof val === "number";
}
function isObject(val) {
  return typeof val === "object" ? val !== null : isFunction(val);
}
function isFunction(val) {
  return typeof val === "function";
}
function isComponentClass(Component2) {
  return !!(Component2 && Component2.isComponent);
}
function isArrayLike(obj) {
  return isObject(obj) && typeof obj.length === "number" && typeof obj.nodeType !== "number";
}
function forEach(value, fn) {
  if (!value) return;
  var _iterator2 = _createForOfIteratorHelper(keys(value)), _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
      const key = _step2.value;
      fn(value[key], key);
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
}
function createRef() {
  return Object.seal({
    current: null
  });
}
function isRef(maybeRef) {
  return isObject(maybeRef) && "current" in maybeRef;
}
var isUnitlessNumber = {
  animationIterationCount: 0,
  borderImageOutset: 0,
  borderImageSlice: 0,
  borderImageWidth: 0,
  boxFlex: 0,
  boxFlexGroup: 0,
  boxOrdinalGroup: 0,
  columnCount: 0,
  columns: 0,
  flex: 0,
  flexGrow: 0,
  flexPositive: 0,
  flexShrink: 0,
  flexNegative: 0,
  flexOrder: 0,
  gridArea: 0,
  gridRow: 0,
  gridRowEnd: 0,
  gridRowSpan: 0,
  gridRowStart: 0,
  gridColumn: 0,
  gridColumnEnd: 0,
  gridColumnSpan: 0,
  gridColumnStart: 0,
  fontWeight: 0,
  lineClamp: 0,
  lineHeight: 0,
  opacity: 0,
  order: 0,
  orphans: 0,
  tabSize: 0,
  widows: 0,
  zIndex: 0,
  zoom: 0,
  // SVG-related properties
  fillOpacity: 0,
  floodOpacity: 0,
  stopOpacity: 0,
  strokeDasharray: 0,
  strokeDashoffset: 0,
  strokeMiterlimit: 0,
  strokeOpacity: 0,
  strokeWidth: 0
};
function prefixKey(prefix, key) {
  return prefix + key.charAt(0).toUpperCase() + key.substring(1);
}
var prefixes = ["Webkit", "ms", "Moz", "O"];
keys(isUnitlessNumber).forEach((prop) => {
  prefixes.forEach((prefix) => {
    isUnitlessNumber[prefixKey(prefix, prop)] = 0;
  });
});
var jsxDomType = Symbol.for("jsx-dom:type");
var JsxDomType = /* @__PURE__ */ function(JsxDomType2) {
  JsxDomType2["ShadowRoot"] = "ShadowRoot";
  return JsxDomType2;
}(JsxDomType || {});
function ShadowRoot(_ref) {
  let {
    children,
    ref,
    ...attr2
  } = _ref;
  return {
    [jsxDomType]: JsxDomType.ShadowRoot,
    ref,
    attr: attr2,
    children
  };
}
function isShadowRoot(el) {
  return el != null && el[jsxDomType] === JsxDomType.ShadowRoot;
}
var SVGNamespace = "http://www.w3.org/2000/svg";
var XLinkNamespace = "http://www.w3.org/1999/xlink";
var XMLNamespace = "http://www.w3.org/XML/1998/namespace";
function isVisibleChild(value) {
  return !isBoolean(value) && value != null;
}
function className(value) {
  if (Array.isArray(value)) {
    return value.map(className).filter(Boolean).join(" ");
  } else if (isObject(value)) {
    if (Symbol.iterator in value) {
      return className(Array.from(value));
    }
    return keys(value).filter((k) => value[k]).join(" ");
  } else if (isVisibleChild(value)) {
    return "" + value;
  } else {
    return "";
  }
}
var svg = {
  animate: 0,
  circle: 0,
  clipPath: 0,
  defs: 0,
  desc: 0,
  ellipse: 0,
  feBlend: 0,
  feColorMatrix: 0,
  feComponentTransfer: 0,
  feComposite: 0,
  feConvolveMatrix: 0,
  feDiffuseLighting: 0,
  feDisplacementMap: 0,
  feDistantLight: 0,
  feFlood: 0,
  feFuncA: 0,
  feFuncB: 0,
  feFuncG: 0,
  feFuncR: 0,
  feGaussianBlur: 0,
  feImage: 0,
  feMerge: 0,
  feMergeNode: 0,
  feMorphology: 0,
  feOffset: 0,
  fePointLight: 0,
  feSpecularLighting: 0,
  feSpotLight: 0,
  feTile: 0,
  feTurbulence: 0,
  filter: 0,
  foreignObject: 0,
  g: 0,
  image: 0,
  line: 0,
  linearGradient: 0,
  marker: 0,
  mask: 0,
  metadata: 0,
  path: 0,
  pattern: 0,
  polygon: 0,
  polyline: 0,
  radialGradient: 0,
  rect: 0,
  stop: 0,
  svg: 0,
  switch: 0,
  symbol: 0,
  text: 0,
  textPath: 0,
  tspan: 0,
  use: 0,
  view: 0
};
var nonPresentationSVGAttributes = /^(a(ll|t|u)|base[FP]|c(al|lipPathU|on)|di|ed|ex|filter[RU]|g(lyphR|r)|ke|l(en|im)|ma(rker[HUW]|s)|n|pat|pr|point[^e]|re[^n]|s[puy]|st[^or]|ta|textL|vi|xC|y|z)/;
function createFactory(tag) {
  return createElement.bind(null, tag);
}
function Fragment(attr2) {
  const fragment = document.createDocumentFragment();
  appendChild(attr2.children, fragment);
  return fragment;
}
var Component = class {
  static isComponent = true;
  constructor(props) {
    this.props = props;
  }
  render() {
    return null;
  }
};
function initComponentClass(Class, attr2, children) {
  attr2 = {
    ...attr2,
    children
  };
  const instance = new Class(attr2);
  const node = instance.render();
  if ("ref" in attr2) {
    attachRef(attr2.ref, instance);
  }
  return node;
}
function jsx(tag, _ref) {
  let {
    children,
    ...attr2
  } = _ref;
  if (!attr2.namespaceURI && svg[tag] === 0) {
    attr2 = {
      ...attr2,
      namespaceURI: SVGNamespace
    };
  }
  let node;
  if (isString(tag)) {
    node = attr2.namespaceURI ? document.createElementNS(attr2.namespaceURI, tag) : document.createElement(tag);
    attributes(attr2, node);
    appendChild(children, node);
    if (node instanceof window.HTMLSelectElement && attr2.value != null) {
      if (attr2.multiple === true && Array.isArray(attr2.value)) {
        const values = attr2.value.map((value) => String(value));
        node.querySelectorAll("option").forEach((option) => option.selected = values.includes(option.value));
      } else {
        node.value = attr2.value;
      }
    }
    attachRef(attr2.ref, node);
  } else if (isFunction(tag)) {
    if (isObject(tag.defaultProps)) {
      attr2 = {
        ...tag.defaultProps,
        ...attr2
      };
    }
    node = isComponentClass(tag) ? initComponentClass(tag, attr2, children) : tag({
      ...attr2,
      children
    });
  } else {
    throw new TypeError("Invalid JSX element type: ".concat(tag));
  }
  return node;
}
function createElement(tag, attr2) {
  for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key2 = 2; _key2 < _len; _key2++) {
    children[_key2 - 2] = arguments[_key2];
  }
  if (isString(attr2) || Array.isArray(attr2)) {
    children.unshift(attr2);
    attr2 = {};
  }
  attr2 = attr2 || {};
  if (attr2.children != null && !children.length) {
    ({
      children,
      ...attr2
    } = attr2);
  }
  return jsx(tag, {
    ...attr2,
    children
  }, attr2.key);
}
function attachRef(ref, node) {
  if (isRef(ref)) {
    ref.current = node;
  } else if (isFunction(ref)) {
    ref(node);
  }
}
function appendChild(child, node) {
  if (isArrayLike(child)) {
    appendChildren(child, node);
  } else if (isString(child) || isNumber(child)) {
    appendChildToNode(document.createTextNode(child), node);
  } else if (child === null) {
    appendChildToNode(document.createComment(""), node);
  } else if (isElement(child)) {
    appendChildToNode(child, node);
  } else if (isShadowRoot(child)) {
    const shadowRoot = node.attachShadow(child.attr);
    appendChild(child.children, shadowRoot);
    attachRef(child.ref, shadowRoot);
  }
}
function appendChildren(children, node) {
  for (var _i = 0, _arr = [...children]; _i < _arr.length; _i++) {
    const child = _arr[_i];
    appendChild(child, node);
  }
  return node;
}
function appendChildToNode(child, node) {
  if (node instanceof window.HTMLTemplateElement) {
    node.content.appendChild(child);
  } else {
    node.appendChild(child);
  }
}
function normalizeAttribute(s, separator) {
  return s.replace(/[A-Z]/g, (match) => separator + match.toLowerCase());
}
function style(node, value) {
  if (value == null || value === false) ;
  else if (Array.isArray(value)) {
    value.forEach((v) => style(node, v));
  } else if (isString(value)) {
    node.setAttribute("style", value);
  } else if (isObject(value)) {
    forEach(value, (val, key) => {
      if (key.indexOf("-") === 0) {
        node.style.setProperty(key, val);
      } else if (isNumber(val) && isUnitlessNumber[key] !== 0) {
        node.style[key] = val + "px";
      } else {
        node.style[key] = val;
      }
    });
  }
}
function attribute(key, value, node) {
  switch (key) {
    case "xlinkActuate":
    case "xlinkArcrole":
    case "xlinkHref":
    case "xlinkRole":
    case "xlinkShow":
    case "xlinkTitle":
    case "xlinkType":
      attrNS(node, XLinkNamespace, normalizeAttribute(key, ":"), value);
      return;
    case "xmlnsXlink":
      attr(node, normalizeAttribute(key, ":"), value);
      return;
    case "xmlBase":
    case "xmlLang":
    case "xmlSpace":
      attrNS(node, XMLNamespace, normalizeAttribute(key, ":"), value);
      return;
  }
  switch (key) {
    case "htmlFor":
      attr(node, "for", value);
      return;
    case "dataset":
      forEach(value, (dataValue, dataKey) => {
        if (dataValue != null) {
          node.dataset[dataKey] = dataValue;
        }
      });
      return;
    case "innerHTML":
    case "innerText":
    case "textContent":
      if (isVisibleChild(value)) {
        node[key] = value;
      }
      return;
    case "dangerouslySetInnerHTML":
      if (isObject(value)) {
        node.innerHTML = value["__html"];
      }
      return;
    case "value":
      if (value == null || node instanceof window.HTMLSelectElement) {
        return;
      } else if (node instanceof window.HTMLTextAreaElement) {
        node.value = value;
        return;
      }
      break;
    case "spellCheck":
      node.spellcheck = value;
      return;
    case "class":
    case "className":
      if (isFunction(value)) {
        value(node);
      } else {
        attr(node, "class", className(value));
      }
      return;
    case "ref":
    case "namespaceURI":
      return;
    case "style":
      style(node, value);
      return;
    case "on":
    case "onCapture":
      forEach(value, (eventHandler, eventName) => {
        node.addEventListener(eventName, eventHandler, key === "onCapture");
      });
      return;
  }
  if (isFunction(value)) {
    if (key[0] === "o" && key[1] === "n") {
      let attribute2 = key.toLowerCase();
      const useCapture = attribute2.endsWith("capture");
      if (attribute2 === "ondoubleclick") {
        attribute2 = "ondblclick";
      } else if (useCapture && attribute2 === "ondoubleclickcapture") {
        attribute2 = "ondblclickcapture";
      }
      if (!useCapture && node[attribute2] === null) {
        node[attribute2] = value;
      } else if (useCapture) {
        node.addEventListener(attribute2.substring(2, attribute2.length - 7), value, true);
      } else {
        let eventName;
        if (attribute2 in window) {
          const standardEventName = attribute2.substring(2);
          eventName = standardEventName;
        } else {
          const customEventName = attribute2[2] + key.slice(3);
          eventName = customEventName;
        }
        node.addEventListener(eventName, value);
      }
    }
  } else if (isObject(value)) {
    node[key] = value;
  } else if (value === true) {
    attr(node, key, "");
  } else if (value !== false && value != null) {
    if (node instanceof SVGElement && !nonPresentationSVGAttributes.test(key)) {
      attr(node, normalizeAttribute(key, "-"), value);
    } else {
      attr(node, key, value);
    }
  }
}
function attr(node, key, value) {
  node.setAttribute(key, value);
}
function attrNS(node, namespace, key, value) {
  node.setAttributeNS(namespace, key, value);
}
function attributes(attr2, node) {
  var _iterator3 = _createForOfIteratorHelper(keys(attr2)), _step3;
  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
      const key = _step3.value;
      attribute(key, attr2[key], node);
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }
  return node;
}
function useText(initialValue) {
  const text = new Text();
  Object.defineProperty(text, "toString", {
    value() {
      return this.textContent;
    }
  });
  function setText(value) {
    text.textContent = value;
  }
  if (initialValue != null) {
    setText(initialValue);
  }
  return [text, setText];
}
function useClassList(initialValue) {
  const div = document.createElement("div");
  if (initialValue != null) {
    div.className = className(initialValue);
  }
  let list = div.classList;
  function ClassList(value) {
    value.setAttribute("class", list.value);
    list = value.classList;
  }
  Object.defineProperties(ClassList, Object.getOwnPropertyDescriptors({
    get size() {
      return list.length;
    },
    get value() {
      return list.value;
    },
    add() {
      list.add(...arguments);
    },
    remove() {
      list.remove(...arguments);
    },
    toggle(token, force) {
      list.toggle(token, force);
    },
    contains(token) {
      return list.contains(token);
    }
  }));
  return ClassList;
}
function useMemo(factory) {
  return factory();
}
function forwardRef(render) {
  return (_ref) => {
    let {
      ref,
      ...props
    } = _ref;
    return render(props, ref !== null && ref !== void 0 ? ref : createRef());
  };
}
function useImperativeHandle(ref, init) {
  attachRef(ref, init());
}
var cache = /* @__PURE__ */ new Map();
var createStyledComponent = (name) => function(list) {
  for (var _len = arguments.length, interpolations = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    interpolations[_key - 1] = arguments[_key];
  }
  return (_ref) => {
    let {
      style: style2,
      ...props
    } = _ref;
    const lastIndex = list.length - 1;
    const css = list.slice(0, lastIndex).reduce((p, s, i) => {
      const interpolation = interpolations[i];
      const current = typeof interpolation === "function" ? interpolation(props) : interpolation;
      return p + s + current;
    }, "") + list[lastIndex];
    return createElement(name, {
      style: [css, style2],
      ...props
    });
  };
};
var baseStyled = (customComponent) => createStyledComponent(customComponent);
var styled = /* @__PURE__ */ new Proxy(baseStyled, {
  get(_, name) {
    return setIfAbsent(cache, name, () => createStyledComponent(name));
  }
});
function setIfAbsent(map, key, getValue) {
  if (map.has(key)) {
    return map.get(key);
  } else {
    const value = getValue(key);
    map.set(key, value);
    return value;
  }
}
function preventDefault(event) {
  event.preventDefault();
  return event;
}
function stopPropagation(event) {
  event.stopPropagation();
  return event;
}

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibm9kZV9tb2R1bGVzLy5wbnBtL3Byb3h5LXBvbHlmaWxsQDAuMy4yL25vZGVfbW9kdWxlcy9wcm94eS1wb2x5ZmlsbC9wcm94eS5taW4uanMiLCAic3JjL1JlYWN0L1JlYWN0LnRzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9qc3gtZG9tQDguMS42L25vZGVfbW9kdWxlcy9qc3gtZG9tL2luZGV4LmpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyIoZnVuY3Rpb24oKXtmdW5jdGlvbiBuKCl7ZnVuY3Rpb24gdigpe3JldHVybiBudWxsfWZ1bmN0aW9uIGwoYSl7cmV0dXJuIGE/XCJvYmplY3RcIj09PXR5cGVvZiBhfHxcImZ1bmN0aW9uXCI9PT10eXBlb2YgYTohMX1mdW5jdGlvbiBwKGEpe2lmKG51bGwhPT1hJiYhbChhKSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiT2JqZWN0IHByb3RvdHlwZSBtYXkgb25seSBiZSBhbiBPYmplY3Qgb3IgbnVsbDogXCIrYSk7fXZhciBxPW51bGwsZT1PYmplY3Qsdz0hIWUuY3JlYXRlfHwhKHtfX3Byb3RvX186bnVsbH1pbnN0YW5jZW9mIGUpLEE9ZS5jcmVhdGV8fCh3P2Z1bmN0aW9uKGEpe3AoYSk7cmV0dXJue19fcHJvdG9fXzphfX06ZnVuY3Rpb24oYSl7ZnVuY3Rpb24gYygpe31wKGEpO2lmKG51bGw9PT1hKXRocm93IG5ldyBTeW50YXhFcnJvcihcIk5hdGl2ZSBPYmplY3QuY3JlYXRlIGlzIHJlcXVpcmVkIHRvIGNyZWF0ZSBvYmplY3RzIHdpdGggbnVsbCBwcm90b3R5cGVcIik7Yy5wcm90b3R5cGU9YTtyZXR1cm4gbmV3IGN9KSxcbkI9ZS5nZXRQcm90b3R5cGVPZnx8KFtdLl9fcHJvdG9fXz09PUFycmF5LnByb3RvdHlwZT9mdW5jdGlvbihhKXthPWEuX19wcm90b19fO3JldHVybiBsKGEpP2E6bnVsbH06dik7dmFyIG09ZnVuY3Rpb24oYSxjKXtmdW5jdGlvbiBrKCl7fWlmKHZvaWQgMD09PSh0aGlzJiZ0aGlzIGluc3RhbmNlb2YgbT90aGlzLmNvbnN0cnVjdG9yOnZvaWQgMCkpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNvbnN0cnVjdG9yIFByb3h5IHJlcXVpcmVzICduZXcnXCIpO2lmKCFsKGEpfHwhbChjKSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNyZWF0ZSBwcm94eSB3aXRoIGEgbm9uLW9iamVjdCBhcyB0YXJnZXQgb3IgaGFuZGxlclwiKTtxPWZ1bmN0aW9uKCl7YT1udWxsO2s9ZnVuY3Rpb24oYil7dGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBwZXJmb3JtICdcIitiK1wiJyBvbiBhIHByb3h5IHRoYXQgaGFzIGJlZW4gcmV2b2tlZFwiKTt9fTtzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7cT1udWxsfSwwKTt2YXIgZz1cbmM7Yz17Z2V0Om51bGwsc2V0Om51bGwsYXBwbHk6bnVsbCxjb25zdHJ1Y3Q6bnVsbH07Zm9yKHZhciBoIGluIGcpe2lmKCEoaCBpbiBjKSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJveHkgcG9seWZpbGwgZG9lcyBub3Qgc3VwcG9ydCB0cmFwICdcIitoK1wiJ1wiKTtjW2hdPWdbaF19XCJmdW5jdGlvblwiPT09dHlwZW9mIGcmJihjLmFwcGx5PWcuYXBwbHkuYmluZChnKSk7Zz1CKGEpO3ZhciByPSExLHQ9ITE7aWYoXCJmdW5jdGlvblwiPT09dHlwZW9mIGEpe3ZhciBmPWZ1bmN0aW9uKCl7dmFyIGI9dGhpcyYmdGhpcy5jb25zdHJ1Y3Rvcj09PWYsZD1BcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpO2soYj9cImNvbnN0cnVjdFwiOlwiYXBwbHlcIik7cmV0dXJuIGImJmMuY29uc3RydWN0P2MuY29uc3RydWN0LmNhbGwodGhpcyxhLGQpOiFiJiZjLmFwcGx5P2MuYXBwbHkoYSx0aGlzLGQpOmI/KGQudW5zaGlmdChhKSxuZXcgKGEuYmluZC5hcHBseShhLGQpKSk6YS5hcHBseSh0aGlzLFxuZCl9O3I9ITB9ZWxzZSBhIGluc3RhbmNlb2YgQXJyYXk/KGY9W10sdD0hMCk6Zj13fHxudWxsIT09Zz9BKGcpOnt9O3ZhciB4PWMuZ2V0P2Z1bmN0aW9uKGIpe2soXCJnZXRcIik7cmV0dXJuIGMuZ2V0KHRoaXMsYixmKX06ZnVuY3Rpb24oYil7ayhcImdldFwiKTtyZXR1cm4gdGhpc1tiXX0sQz1jLnNldD9mdW5jdGlvbihiLGQpe2soXCJzZXRcIik7Yy5zZXQodGhpcyxiLGQsZil9OmZ1bmN0aW9uKGIsZCl7ayhcInNldFwiKTt0aGlzW2JdPWR9LHk9e307ZS5nZXRPd25Qcm9wZXJ0eU5hbWVzKGEpLmZvckVhY2goZnVuY3Rpb24oYil7aWYoISgocnx8dCkmJmIgaW4gZikpe3ZhciBkPWUuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGEsYik7ZS5kZWZpbmVQcm9wZXJ0eShmLGIse2VudW1lcmFibGU6ISFkLmVudW1lcmFibGUsZ2V0OnguYmluZChhLGIpLHNldDpDLmJpbmQoYSxiKX0pO3lbYl09ITB9fSk7aD0hMDtpZihyfHx0KXt2YXIgRD1lLnNldFByb3RvdHlwZU9mfHwoW10uX19wcm90b19fPT09XG5BcnJheS5wcm90b3R5cGU/ZnVuY3Rpb24oYixkKXtwKGQpO2IuX19wcm90b19fPWQ7cmV0dXJuIGJ9OnYpO2cmJkQoZixnKXx8KGg9ITEpfWlmKGMuZ2V0fHwhaClmb3IodmFyIHUgaW4gYSl5W3VdfHxlLmRlZmluZVByb3BlcnR5KGYsdSx7Z2V0OnguYmluZChhLHUpfSk7ZS5zZWFsKGEpO2Uuc2VhbChmKTtyZXR1cm4gZn07bS5yZXZvY2FibGU9ZnVuY3Rpb24oYSxjKXtyZXR1cm57cHJveHk6bmV3IG0oYSxjKSxyZXZva2U6cX19O3JldHVybiBtfTt2YXIgej1cInVuZGVmaW5lZFwiIT09dHlwZW9mIHByb2Nlc3MmJlwiW29iamVjdCBwcm9jZXNzXVwiPT09e30udG9TdHJpbmcuY2FsbChwcm9jZXNzKXx8XCJ1bmRlZmluZWRcIiE9PXR5cGVvZiBuYXZpZ2F0b3ImJlwiUmVhY3ROYXRpdmVcIj09PW5hdmlnYXRvci5wcm9kdWN0P2dsb2JhbDpzZWxmO3ouUHJveHl8fCh6LlByb3h5PW4oKSx6LlByb3h5LnJldm9jYWJsZT16LlByb3h5LnJldm9jYWJsZSk7fSkoKTtcbiIsICIvLyDlpoLmnpzkvb/nlKgganN4LWRvbe+8jOWImeWPlua2iOazqOmHiuS7peS4i+ihjCAvIFRvIFVzZSBqc3gtZG9tLCB1bmNvbW1lbnQgdGhlIGZvbGxvd2luZyBsaW5lXG5leHBvcnQgKiBmcm9tICdqc3gtZG9tJztcbiIsICIvKiBlc2xpbnQtZGlzYWJsZSAqL1xuY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzO1xuZnVuY3Rpb24gaWRlbnRpdHkodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlO1xufVxuZnVuY3Rpb24gaXNCb29sZWFuKHZhbCkge1xuICByZXR1cm4gdHlwZW9mIHZhbCA9PT0gXCJib29sZWFuXCI7XG59XG5mdW5jdGlvbiBpc0VsZW1lbnQodmFsKSB7XG4gIHJldHVybiB2YWwgJiYgdHlwZW9mIHZhbC5ub2RlVHlwZSA9PT0gXCJudW1iZXJcIjtcbn1cbmZ1bmN0aW9uIGlzU3RyaW5nKHZhbCkge1xuICByZXR1cm4gdHlwZW9mIHZhbCA9PT0gXCJzdHJpbmdcIjtcbn1cbmZ1bmN0aW9uIGlzTnVtYmVyKHZhbCkge1xuICByZXR1cm4gdHlwZW9mIHZhbCA9PT0gXCJudW1iZXJcIjtcbn1cbmZ1bmN0aW9uIGlzT2JqZWN0KHZhbCkge1xuICByZXR1cm4gdHlwZW9mIHZhbCA9PT0gXCJvYmplY3RcIiA/IHZhbCAhPT0gbnVsbCA6IGlzRnVuY3Rpb24odmFsKTtcbn1cbmZ1bmN0aW9uIGlzRnVuY3Rpb24odmFsKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsID09PSBcImZ1bmN0aW9uXCI7XG59XG5mdW5jdGlvbiBpc0NvbXBvbmVudENsYXNzKENvbXBvbmVudCkge1xuICByZXR1cm4gISEoQ29tcG9uZW50ICYmIENvbXBvbmVudC5pc0NvbXBvbmVudCk7XG59XG5mdW5jdGlvbiBpc0FycmF5TGlrZShvYmopIHtcbiAgcmV0dXJuIChcbiAgICBpc09iamVjdChvYmopICYmXG4gICAgdHlwZW9mIG9iai5sZW5ndGggPT09IFwibnVtYmVyXCIgJiZcbiAgICB0eXBlb2Ygb2JqLm5vZGVUeXBlICE9PSBcIm51bWJlclwiXG4gICk7XG59XG5mdW5jdGlvbiBmb3JFYWNoKHZhbHVlLCBmbikge1xuICBpZiAoIXZhbHVlKSByZXR1cm47XG4gIGZvciAoY29uc3Qga2V5IG9mIGtleXModmFsdWUpKSB7XG4gICAgZm4odmFsdWVba2V5XSwga2V5KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVSZWYoKSB7XG4gIHJldHVybiBPYmplY3Quc2VhbCh7XG4gICAgY3VycmVudDogbnVsbCxcbiAgfSk7XG59XG5mdW5jdGlvbiBpc1JlZihtYXliZVJlZikge1xuICByZXR1cm4gaXNPYmplY3QobWF5YmVSZWYpICYmIFwiY3VycmVudFwiIGluIG1heWJlUmVmO1xufVxuXG4vKipcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIG9uXG4gKiBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvYmxvYi9iODdhYWJkZmUxYjc0NjFlNzMzMWFiYjM2MDFkOWU2YmIyNzU0NGJjL0xJQ0VOU0VcbiAqL1xuXG4vKipcbiAqIENTUyBwcm9wZXJ0aWVzIHdoaWNoIGFjY2VwdCBudW1iZXJzIGJ1dCBhcmUgbm90IGluIHVuaXRzIG9mIFwicHhcIi5cbiAqL1xuY29uc3QgaXNVbml0bGVzc051bWJlciA9IHtcbiAgYW5pbWF0aW9uSXRlcmF0aW9uQ291bnQ6IDAsXG4gIGJvcmRlckltYWdlT3V0c2V0OiAwLFxuICBib3JkZXJJbWFnZVNsaWNlOiAwLFxuICBib3JkZXJJbWFnZVdpZHRoOiAwLFxuICBib3hGbGV4OiAwLFxuICBib3hGbGV4R3JvdXA6IDAsXG4gIGJveE9yZGluYWxHcm91cDogMCxcbiAgY29sdW1uQ291bnQ6IDAsXG4gIGNvbHVtbnM6IDAsXG4gIGZsZXg6IDAsXG4gIGZsZXhHcm93OiAwLFxuICBmbGV4UG9zaXRpdmU6IDAsXG4gIGZsZXhTaHJpbms6IDAsXG4gIGZsZXhOZWdhdGl2ZTogMCxcbiAgZmxleE9yZGVyOiAwLFxuICBncmlkQXJlYTogMCxcbiAgZ3JpZFJvdzogMCxcbiAgZ3JpZFJvd0VuZDogMCxcbiAgZ3JpZFJvd1NwYW46IDAsXG4gIGdyaWRSb3dTdGFydDogMCxcbiAgZ3JpZENvbHVtbjogMCxcbiAgZ3JpZENvbHVtbkVuZDogMCxcbiAgZ3JpZENvbHVtblNwYW46IDAsXG4gIGdyaWRDb2x1bW5TdGFydDogMCxcbiAgZm9udFdlaWdodDogMCxcbiAgbGluZUNsYW1wOiAwLFxuICBsaW5lSGVpZ2h0OiAwLFxuICBvcGFjaXR5OiAwLFxuICBvcmRlcjogMCxcbiAgb3JwaGFuczogMCxcbiAgdGFiU2l6ZTogMCxcbiAgd2lkb3dzOiAwLFxuICB6SW5kZXg6IDAsXG4gIHpvb206IDAsXG4gIC8vIFNWRy1yZWxhdGVkIHByb3BlcnRpZXNcbiAgZmlsbE9wYWNpdHk6IDAsXG4gIGZsb29kT3BhY2l0eTogMCxcbiAgc3RvcE9wYWNpdHk6IDAsXG4gIHN0cm9rZURhc2hhcnJheTogMCxcbiAgc3Ryb2tlRGFzaG9mZnNldDogMCxcbiAgc3Ryb2tlTWl0ZXJsaW1pdDogMCxcbiAgc3Ryb2tlT3BhY2l0eTogMCxcbiAgc3Ryb2tlV2lkdGg6IDAsXG59O1xuXG4vKipcbiAqIEBwYXJhbSBwcmVmaXggdmVuZG9yLXNwZWNpZmljIHByZWZpeCwgZWc6IFdlYmtpdFxuICogQHBhcmFtIGtleSBzdHlsZSBuYW1lLCBlZzogdHJhbnNpdGlvbkR1cmF0aW9uXG4gKiBAcmV0dXJuIHN0eWxlIG5hbWUgcHJlZml4ZWQgd2l0aCBgcHJlZml4YCwgcHJvcGVybHkgY2FtZWxDYXNlZCwgZWc6XG4gKiBXZWJraXRUcmFuc2l0aW9uRHVyYXRpb25cbiAqL1xuZnVuY3Rpb24gcHJlZml4S2V5KHByZWZpeCwga2V5KSB7XG4gIHJldHVybiBwcmVmaXggKyBrZXkuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBrZXkuc3Vic3RyaW5nKDEpO1xufVxuXG4vKipcbiAqIFN1cHBvcnQgc3R5bGUgbmFtZXMgdGhhdCBtYXkgY29tZSBwYXNzZWQgaW4gcHJlZml4ZWQgYnkgYWRkaW5nIHBlcm11dGF0aW9uc1xuICogb2YgdmVuZG9yIHByZWZpeGVzLlxuICovXG5jb25zdCBwcmVmaXhlcyA9IFtcIldlYmtpdFwiLCBcIm1zXCIsIFwiTW96XCIsIFwiT1wiXTtcbi8vIFVzaW5nIE9iamVjdC5rZXlzIGhlcmUsIG9yIGVsc2UgdGhlIHZhbmlsbGEgZm9yLWluIGxvb3AgbWFrZXMgSUU4IGdvIGludG8gYW5cbi8vIGluZmluaXRlIGxvb3AsIGJlY2F1c2UgaXQgaXRlcmF0ZXMgb3ZlciB0aGUgbmV3bHkgYWRkZWQgcHJvcHMgdG9vLlxua2V5cyhpc1VuaXRsZXNzTnVtYmVyKS5mb3JFYWNoKChwcm9wKSA9PiB7XG4gIHByZWZpeGVzLmZvckVhY2goKHByZWZpeCkgPT4ge1xuICAgIGlzVW5pdGxlc3NOdW1iZXJbcHJlZml4S2V5KHByZWZpeCwgcHJvcCldID0gMDsgLy8gaXNVbml0bGVzc051bWJlcltwcm9wXVxuICB9KTtcbn0pO1xuXG5jb25zdCBqc3hEb21UeXBlID0gU3ltYm9sLmZvcihcImpzeC1kb206dHlwZVwiKTtcbnZhciBKc3hEb21UeXBlID0gLyojX19QVVJFX18qLyAoZnVuY3Rpb24gKEpzeERvbVR5cGUpIHtcbiAgSnN4RG9tVHlwZVtcIlNoYWRvd1Jvb3RcIl0gPSBcIlNoYWRvd1Jvb3RcIjtcbiAgcmV0dXJuIEpzeERvbVR5cGU7XG59KShKc3hEb21UeXBlIHx8IHt9KTtcbmZ1bmN0aW9uIFNoYWRvd1Jvb3QoX3JlZikge1xuICBsZXQgeyBjaGlsZHJlbiwgcmVmLCAuLi5hdHRyIH0gPSBfcmVmO1xuICByZXR1cm4ge1xuICAgIFtqc3hEb21UeXBlXTogSnN4RG9tVHlwZS5TaGFkb3dSb290LFxuICAgIHJlZixcbiAgICBhdHRyLFxuICAgIGNoaWxkcmVuLFxuICB9O1xufVxuZnVuY3Rpb24gaXNTaGFkb3dSb290KGVsKSB7XG4gIHJldHVybiBlbCAhPSBudWxsICYmIGVsW2pzeERvbVR5cGVdID09PSBKc3hEb21UeXBlLlNoYWRvd1Jvb3Q7XG59XG5cbmNvbnN0IFNWR05hbWVzcGFjZSA9IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIjtcbmNvbnN0IFhMaW5rTmFtZXNwYWNlID0gXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCI7XG5jb25zdCBYTUxOYW1lc3BhY2UgPSBcImh0dHA6Ly93d3cudzMub3JnL1hNTC8xOTk4L25hbWVzcGFjZVwiO1xuXG4vLyBodHRwczovL2ZhY2Vib29rLmdpdGh1Yi5pby9yZWFjdC9kb2NzL2pzeC1pbi1kZXB0aC5odG1sI2Jvb2xlYW5zLW51bGwtYW5kLXVuZGVmaW5lZC1hcmUtaWdub3JlZFxuLy8gRW11bGF0ZSBKU1ggRXhwcmVzc2lvbiBsb2dpYyB0byBpZ25vcmUgY2VydGFpbiB0eXBlIG9mIGNoaWxkcmVuIG9yIGNsYXNzTmFtZS5cbmZ1bmN0aW9uIGlzVmlzaWJsZUNoaWxkKHZhbHVlKSB7XG4gIHJldHVybiAhaXNCb29sZWFuKHZhbHVlKSAmJiB2YWx1ZSAhPSBudWxsO1xufVxuXG4vKipcbiAqIENvbnZlcnQgYSBgdmFsdWVgIHRvIGEgY2xhc3NOYW1lIHN0cmluZy5cbiAqIGB2YWx1ZWAgY2FuIGJlIGEgc3RyaW5nLCBhbiBhcnJheSBvciBhIGBEaWN0aW9uYXJ5PGJvb2xlYW4+YC5cbiAqL1xuZnVuY3Rpb24gY2xhc3NOYW1lKHZhbHVlKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgIHJldHVybiB2YWx1ZS5tYXAoY2xhc3NOYW1lKS5maWx0ZXIoQm9vbGVhbikuam9pbihcIiBcIik7XG4gIH0gZWxzZSBpZiAoaXNPYmplY3QodmFsdWUpKSB7XG4gICAgaWYgKFN5bWJvbC5pdGVyYXRvciBpbiB2YWx1ZSkge1xuICAgICAgcmV0dXJuIGNsYXNzTmFtZShBcnJheS5mcm9tKHZhbHVlKSk7XG4gICAgfVxuICAgIHJldHVybiBrZXlzKHZhbHVlKVxuICAgICAgLmZpbHRlcigoaykgPT4gdmFsdWVba10pXG4gICAgICAuam9pbihcIiBcIik7XG4gIH0gZWxzZSBpZiAoaXNWaXNpYmxlQ2hpbGQodmFsdWUpKSB7XG4gICAgcmV0dXJuIFwiXCIgKyB2YWx1ZTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gXCJcIjtcbiAgfVxufVxuY29uc3Qgc3ZnID0ge1xuICBhbmltYXRlOiAwLFxuICBjaXJjbGU6IDAsXG4gIGNsaXBQYXRoOiAwLFxuICBkZWZzOiAwLFxuICBkZXNjOiAwLFxuICBlbGxpcHNlOiAwLFxuICBmZUJsZW5kOiAwLFxuICBmZUNvbG9yTWF0cml4OiAwLFxuICBmZUNvbXBvbmVudFRyYW5zZmVyOiAwLFxuICBmZUNvbXBvc2l0ZTogMCxcbiAgZmVDb252b2x2ZU1hdHJpeDogMCxcbiAgZmVEaWZmdXNlTGlnaHRpbmc6IDAsXG4gIGZlRGlzcGxhY2VtZW50TWFwOiAwLFxuICBmZURpc3RhbnRMaWdodDogMCxcbiAgZmVGbG9vZDogMCxcbiAgZmVGdW5jQTogMCxcbiAgZmVGdW5jQjogMCxcbiAgZmVGdW5jRzogMCxcbiAgZmVGdW5jUjogMCxcbiAgZmVHYXVzc2lhbkJsdXI6IDAsXG4gIGZlSW1hZ2U6IDAsXG4gIGZlTWVyZ2U6IDAsXG4gIGZlTWVyZ2VOb2RlOiAwLFxuICBmZU1vcnBob2xvZ3k6IDAsXG4gIGZlT2Zmc2V0OiAwLFxuICBmZVBvaW50TGlnaHQ6IDAsXG4gIGZlU3BlY3VsYXJMaWdodGluZzogMCxcbiAgZmVTcG90TGlnaHQ6IDAsXG4gIGZlVGlsZTogMCxcbiAgZmVUdXJidWxlbmNlOiAwLFxuICBmaWx0ZXI6IDAsXG4gIGZvcmVpZ25PYmplY3Q6IDAsXG4gIGc6IDAsXG4gIGltYWdlOiAwLFxuICBsaW5lOiAwLFxuICBsaW5lYXJHcmFkaWVudDogMCxcbiAgbWFya2VyOiAwLFxuICBtYXNrOiAwLFxuICBtZXRhZGF0YTogMCxcbiAgcGF0aDogMCxcbiAgcGF0dGVybjogMCxcbiAgcG9seWdvbjogMCxcbiAgcG9seWxpbmU6IDAsXG4gIHJhZGlhbEdyYWRpZW50OiAwLFxuICByZWN0OiAwLFxuICBzdG9wOiAwLFxuICBzdmc6IDAsXG4gIHN3aXRjaDogMCxcbiAgc3ltYm9sOiAwLFxuICB0ZXh0OiAwLFxuICB0ZXh0UGF0aDogMCxcbiAgdHNwYW46IDAsXG4gIHVzZTogMCxcbiAgdmlldzogMCxcbn07XG5jb25zdCBub25QcmVzZW50YXRpb25TVkdBdHRyaWJ1dGVzID1cbiAgL14oYShsbHx0fHUpfGJhc2VbRlBdfGMoYWx8bGlwUGF0aFV8b24pfGRpfGVkfGV4fGZpbHRlcltSVV18ZyhseXBoUnxyKXxrZXxsKGVufGltKXxtYShya2VyW0hVV118cyl8bnxwYXR8cHJ8cG9pbnRbXmVdfHJlW15uXXxzW3B1eV18c3RbXm9yXXx0YXx0ZXh0THx2aXx4Q3x5fHopLztcbmZ1bmN0aW9uIGNyZWF0ZUZhY3RvcnkodGFnKSB7XG4gIHJldHVybiBjcmVhdGVFbGVtZW50LmJpbmQobnVsbCwgdGFnKTtcbn1cbmZ1bmN0aW9uIEZyYWdtZW50KGF0dHIpIHtcbiAgY29uc3QgZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG4gIGFwcGVuZENoaWxkKGF0dHIuY2hpbGRyZW4sIGZyYWdtZW50KTtcbiAgcmV0dXJuIGZyYWdtZW50O1xufVxuY2xhc3MgQ29tcG9uZW50IHtcbiAgc3RhdGljIGlzQ29tcG9uZW50ID0gdHJ1ZTtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICB0aGlzLnByb3BzID0gcHJvcHM7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG59XG5mdW5jdGlvbiBpbml0Q29tcG9uZW50Q2xhc3MoQ2xhc3MsIGF0dHIsIGNoaWxkcmVuKSB7XG4gIGF0dHIgPSB7XG4gICAgLi4uYXR0cixcbiAgICBjaGlsZHJlbixcbiAgfTtcbiAgY29uc3QgaW5zdGFuY2UgPSBuZXcgQ2xhc3MoYXR0cik7XG4gIGNvbnN0IG5vZGUgPSBpbnN0YW5jZS5yZW5kZXIoKTtcbiAgaWYgKFwicmVmXCIgaW4gYXR0cikge1xuICAgIGF0dGFjaFJlZihhdHRyLnJlZiwgaW5zdGFuY2UpO1xuICB9XG4gIHJldHVybiBub2RlO1xufVxuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG5mdW5jdGlvbiBqc3godGFnLCBfcmVmKSB7XG4gIGxldCB7IGNoaWxkcmVuLCAuLi5hdHRyIH0gPSBfcmVmO1xuICBpZiAoIWF0dHIubmFtZXNwYWNlVVJJICYmIHN2Z1t0YWddID09PSAwKSB7XG4gICAgYXR0ciA9IHtcbiAgICAgIC4uLmF0dHIsXG4gICAgICBuYW1lc3BhY2VVUkk6IFNWR05hbWVzcGFjZSxcbiAgICB9O1xuICB9XG4gIGxldCBub2RlO1xuICBpZiAoaXNTdHJpbmcodGFnKSkge1xuICAgIG5vZGUgPSBhdHRyLm5hbWVzcGFjZVVSSVxuICAgICAgPyBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoYXR0ci5uYW1lc3BhY2VVUkksIHRhZylcbiAgICAgIDogZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcpO1xuICAgIGF0dHJpYnV0ZXMoYXR0ciwgbm9kZSk7XG4gICAgYXBwZW5kQ2hpbGQoY2hpbGRyZW4sIG5vZGUpO1xuXG4gICAgLy8gU2VsZWN0IGBvcHRpb25gIGVsZW1lbnRzIGluIGBzZWxlY3RgXG4gICAgaWYgKG5vZGUgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTFNlbGVjdEVsZW1lbnQgJiYgYXR0ci52YWx1ZSAhPSBudWxsKSB7XG4gICAgICBpZiAoYXR0ci5tdWx0aXBsZSA9PT0gdHJ1ZSAmJiBBcnJheS5pc0FycmF5KGF0dHIudmFsdWUpKSB7XG4gICAgICAgIGNvbnN0IHZhbHVlcyA9IGF0dHIudmFsdWUubWFwKCh2YWx1ZSkgPT4gU3RyaW5nKHZhbHVlKSk7XG4gICAgICAgIG5vZGVcbiAgICAgICAgICAucXVlcnlTZWxlY3RvckFsbChcIm9wdGlvblwiKVxuICAgICAgICAgIC5mb3JFYWNoKFxuICAgICAgICAgICAgKG9wdGlvbikgPT4gKG9wdGlvbi5zZWxlY3RlZCA9IHZhbHVlcy5pbmNsdWRlcyhvcHRpb24udmFsdWUpKSxcbiAgICAgICAgICApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbm9kZS52YWx1ZSA9IGF0dHIudmFsdWU7XG4gICAgICB9XG4gICAgfVxuICAgIGF0dGFjaFJlZihhdHRyLnJlZiwgbm9kZSk7XG4gIH0gZWxzZSBpZiAoaXNGdW5jdGlvbih0YWcpKSB7XG4gICAgLy8gQ3VzdG9tIGVsZW1lbnRzLlxuICAgIGlmIChpc09iamVjdCh0YWcuZGVmYXVsdFByb3BzKSkge1xuICAgICAgYXR0ciA9IHtcbiAgICAgICAgLi4udGFnLmRlZmF1bHRQcm9wcyxcbiAgICAgICAgLi4uYXR0cixcbiAgICAgIH07XG4gICAgfVxuICAgIG5vZGUgPSBpc0NvbXBvbmVudENsYXNzKHRhZylcbiAgICAgID8gaW5pdENvbXBvbmVudENsYXNzKHRhZywgYXR0ciwgY2hpbGRyZW4pXG4gICAgICA6IHRhZyh7XG4gICAgICAgICAgLi4uYXR0cixcbiAgICAgICAgICBjaGlsZHJlbixcbiAgICAgICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgSW52YWxpZCBKU1ggZWxlbWVudCB0eXBlOiAke3RhZ31gKTtcbiAgfVxuICByZXR1cm4gbm9kZTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQodGFnLCBhdHRyKSB7XG4gIGZvciAoXG4gICAgdmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLFxuICAgICAgY2hpbGRyZW4gPSBuZXcgQXJyYXkoX2xlbiA+IDIgPyBfbGVuIC0gMiA6IDApLFxuICAgICAgX2tleTIgPSAyO1xuICAgIF9rZXkyIDwgX2xlbjtcbiAgICBfa2V5MisrXG4gICkge1xuICAgIGNoaWxkcmVuW19rZXkyIC0gMl0gPSBhcmd1bWVudHNbX2tleTJdO1xuICB9XG4gIGlmIChpc1N0cmluZyhhdHRyKSB8fCBBcnJheS5pc0FycmF5KGF0dHIpKSB7XG4gICAgY2hpbGRyZW4udW5zaGlmdChhdHRyKTtcbiAgICBhdHRyID0ge307XG4gIH1cbiAgYXR0ciA9IGF0dHIgfHwge307XG4gIGlmIChhdHRyLmNoaWxkcmVuICE9IG51bGwgJiYgIWNoaWxkcmVuLmxlbmd0aCkge1xuICAgICh7IGNoaWxkcmVuLCAuLi5hdHRyIH0gPSBhdHRyKTtcbiAgfVxuICByZXR1cm4ganN4KFxuICAgIHRhZyxcbiAgICB7XG4gICAgICAuLi5hdHRyLFxuICAgICAgY2hpbGRyZW4sXG4gICAgfSxcbiAgICBhdHRyLmtleSxcbiAgKTtcbn1cbmZ1bmN0aW9uIGF0dGFjaFJlZihyZWYsIG5vZGUpIHtcbiAgaWYgKGlzUmVmKHJlZikpIHtcbiAgICByZWYuY3VycmVudCA9IG5vZGU7XG4gIH0gZWxzZSBpZiAoaXNGdW5jdGlvbihyZWYpKSB7XG4gICAgcmVmKG5vZGUpO1xuICB9XG59XG5mdW5jdGlvbiBhcHBlbmRDaGlsZChjaGlsZCwgbm9kZSkge1xuICBpZiAoaXNBcnJheUxpa2UoY2hpbGQpKSB7XG4gICAgYXBwZW5kQ2hpbGRyZW4oY2hpbGQsIG5vZGUpO1xuICB9IGVsc2UgaWYgKGlzU3RyaW5nKGNoaWxkKSB8fCBpc051bWJlcihjaGlsZCkpIHtcbiAgICBhcHBlbmRDaGlsZFRvTm9kZShkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjaGlsZCksIG5vZGUpO1xuICB9IGVsc2UgaWYgKGNoaWxkID09PSBudWxsKSB7XG4gICAgYXBwZW5kQ2hpbGRUb05vZGUoZG9jdW1lbnQuY3JlYXRlQ29tbWVudChcIlwiKSwgbm9kZSk7XG4gIH0gZWxzZSBpZiAoaXNFbGVtZW50KGNoaWxkKSkge1xuICAgIGFwcGVuZENoaWxkVG9Ob2RlKGNoaWxkLCBub2RlKTtcbiAgfSBlbHNlIGlmIChpc1NoYWRvd1Jvb3QoY2hpbGQpKSB7XG4gICAgY29uc3Qgc2hhZG93Um9vdCA9IG5vZGUuYXR0YWNoU2hhZG93KGNoaWxkLmF0dHIpO1xuICAgIGFwcGVuZENoaWxkKGNoaWxkLmNoaWxkcmVuLCBzaGFkb3dSb290KTtcbiAgICBhdHRhY2hSZWYoY2hpbGQucmVmLCBzaGFkb3dSb290KTtcbiAgfVxufVxuZnVuY3Rpb24gYXBwZW5kQ2hpbGRyZW4oY2hpbGRyZW4sIG5vZGUpIHtcbiAgZm9yIChjb25zdCBjaGlsZCBvZiBbLi4uY2hpbGRyZW5dKSB7XG4gICAgYXBwZW5kQ2hpbGQoY2hpbGQsIG5vZGUpO1xuICB9XG4gIHJldHVybiBub2RlO1xufVxuZnVuY3Rpb24gYXBwZW5kQ2hpbGRUb05vZGUoY2hpbGQsIG5vZGUpIHtcbiAgaWYgKG5vZGUgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTFRlbXBsYXRlRWxlbWVudCkge1xuICAgIG5vZGUuY29udGVudC5hcHBlbmRDaGlsZChjaGlsZCk7XG4gIH0gZWxzZSB7XG4gICAgbm9kZS5hcHBlbmRDaGlsZChjaGlsZCk7XG4gIH1cbn1cbmZ1bmN0aW9uIG5vcm1hbGl6ZUF0dHJpYnV0ZShzLCBzZXBhcmF0b3IpIHtcbiAgcmV0dXJuIHMucmVwbGFjZSgvW0EtWl0vZywgKG1hdGNoKSA9PiBzZXBhcmF0b3IgKyBtYXRjaC50b0xvd2VyQ2FzZSgpKTtcbn1cbmZ1bmN0aW9uIHN0eWxlKG5vZGUsIHZhbHVlKSB7XG4gIGlmICh2YWx1ZSA9PSBudWxsIHx8IHZhbHVlID09PSBmYWxzZSk7XG4gIGVsc2UgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgdmFsdWUuZm9yRWFjaCgodikgPT4gc3R5bGUobm9kZSwgdikpO1xuICB9IGVsc2UgaWYgKGlzU3RyaW5nKHZhbHVlKSkge1xuICAgIG5vZGUuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgdmFsdWUpO1xuICB9IGVsc2UgaWYgKGlzT2JqZWN0KHZhbHVlKSkge1xuICAgIGZvckVhY2godmFsdWUsICh2YWwsIGtleSkgPT4ge1xuICAgICAgaWYgKGtleS5pbmRleE9mKFwiLVwiKSA9PT0gMCkge1xuICAgICAgICAvLyBDU1MgY3VzdG9tIHByb3BlcnRpZXMgKHZhcmlhYmxlcykgc3RhcnQgd2l0aCBgLWAgKGUuZy4gYC0tbXktdmFyaWFibGVgKVxuICAgICAgICAvLyBhbmQgbXVzdCBiZSBhc3NpZ25lZCB2aWEgYHNldFByb3BlcnR5YC5cbiAgICAgICAgbm9kZS5zdHlsZS5zZXRQcm9wZXJ0eShrZXksIHZhbCk7XG4gICAgICB9IGVsc2UgaWYgKGlzTnVtYmVyKHZhbCkgJiYgaXNVbml0bGVzc051bWJlcltrZXldICE9PSAwKSB7XG4gICAgICAgIG5vZGUuc3R5bGVba2V5XSA9IHZhbCArIFwicHhcIjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5vZGUuc3R5bGVba2V5XSA9IHZhbDtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuZnVuY3Rpb24gYXR0cmlidXRlKGtleSwgdmFsdWUsIG5vZGUpIHtcbiAgc3dpdGNoIChrZXkpIHtcbiAgICBjYXNlIFwieGxpbmtBY3R1YXRlXCI6XG4gICAgY2FzZSBcInhsaW5rQXJjcm9sZVwiOlxuICAgIGNhc2UgXCJ4bGlua0hyZWZcIjpcbiAgICBjYXNlIFwieGxpbmtSb2xlXCI6XG4gICAgY2FzZSBcInhsaW5rU2hvd1wiOlxuICAgIGNhc2UgXCJ4bGlua1RpdGxlXCI6XG4gICAgY2FzZSBcInhsaW5rVHlwZVwiOlxuICAgICAgYXR0ck5TKG5vZGUsIFhMaW5rTmFtZXNwYWNlLCBub3JtYWxpemVBdHRyaWJ1dGUoa2V5LCBcIjpcIiksIHZhbHVlKTtcbiAgICAgIHJldHVybjtcbiAgICBjYXNlIFwieG1sbnNYbGlua1wiOlxuICAgICAgYXR0cihub2RlLCBub3JtYWxpemVBdHRyaWJ1dGUoa2V5LCBcIjpcIiksIHZhbHVlKTtcbiAgICAgIHJldHVybjtcbiAgICBjYXNlIFwieG1sQmFzZVwiOlxuICAgIGNhc2UgXCJ4bWxMYW5nXCI6XG4gICAgY2FzZSBcInhtbFNwYWNlXCI6XG4gICAgICBhdHRyTlMobm9kZSwgWE1MTmFtZXNwYWNlLCBub3JtYWxpemVBdHRyaWJ1dGUoa2V5LCBcIjpcIiksIHZhbHVlKTtcbiAgICAgIHJldHVybjtcbiAgfVxuICBzd2l0Y2ggKGtleSkge1xuICAgIGNhc2UgXCJodG1sRm9yXCI6XG4gICAgICBhdHRyKG5vZGUsIFwiZm9yXCIsIHZhbHVlKTtcbiAgICAgIHJldHVybjtcbiAgICBjYXNlIFwiZGF0YXNldFwiOlxuICAgICAgZm9yRWFjaCh2YWx1ZSwgKGRhdGFWYWx1ZSwgZGF0YUtleSkgPT4ge1xuICAgICAgICBpZiAoZGF0YVZhbHVlICE9IG51bGwpIHtcbiAgICAgICAgICBub2RlLmRhdGFzZXRbZGF0YUtleV0gPSBkYXRhVmFsdWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIGNhc2UgXCJpbm5lckhUTUxcIjpcbiAgICBjYXNlIFwiaW5uZXJUZXh0XCI6XG4gICAgY2FzZSBcInRleHRDb250ZW50XCI6XG4gICAgICBpZiAoaXNWaXNpYmxlQ2hpbGQodmFsdWUpKSB7XG4gICAgICAgIG5vZGVba2V5XSA9IHZhbHVlO1xuICAgICAgfVxuICAgICAgcmV0dXJuO1xuICAgIGNhc2UgXCJkYW5nZXJvdXNseVNldElubmVySFRNTFwiOlxuICAgICAgaWYgKGlzT2JqZWN0KHZhbHVlKSkge1xuICAgICAgICBub2RlLmlubmVySFRNTCA9IHZhbHVlW1wiX19odG1sXCJdO1xuICAgICAgfVxuICAgICAgcmV0dXJuO1xuICAgIGNhc2UgXCJ2YWx1ZVwiOlxuICAgICAgaWYgKHZhbHVlID09IG51bGwgfHwgbm9kZSBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MU2VsZWN0RWxlbWVudCkge1xuICAgICAgICAvLyBza2lwIG51bGxpc2ggdmFsdWVzXG4gICAgICAgIC8vIGZvciBgPHNlbGVjdD5gIGFwcGx5IHZhbHVlIGFmdGVyIGFwcGVuZGluZyBgPG9wdGlvbj5gIGVsZW1lbnRzXG4gICAgICAgIHJldHVybjtcbiAgICAgIH0gZWxzZSBpZiAobm9kZSBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MVGV4dEFyZWFFbGVtZW50KSB7XG4gICAgICAgIG5vZGUudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgLy8gdXNlIGF0dHJpYnV0ZSBmb3Igb3RoZXIgZWxlbWVudHNcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJzcGVsbENoZWNrXCI6XG4gICAgICBub2RlLnNwZWxsY2hlY2sgPSB2YWx1ZTtcbiAgICAgIHJldHVybjtcbiAgICBjYXNlIFwiY2xhc3NcIjpcbiAgICBjYXNlIFwiY2xhc3NOYW1lXCI6XG4gICAgICBpZiAoaXNGdW5jdGlvbih2YWx1ZSkpIHtcbiAgICAgICAgdmFsdWUobm9kZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhdHRyKG5vZGUsIFwiY2xhc3NcIiwgY2xhc3NOYW1lKHZhbHVlKSk7XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgY2FzZSBcInJlZlwiOlxuICAgIGNhc2UgXCJuYW1lc3BhY2VVUklcIjpcbiAgICAgIHJldHVybjtcbiAgICBjYXNlIFwic3R5bGVcIjpcbiAgICAgIHN0eWxlKG5vZGUsIHZhbHVlKTtcbiAgICAgIHJldHVybjtcbiAgICBjYXNlIFwib25cIjpcbiAgICBjYXNlIFwib25DYXB0dXJlXCI6XG4gICAgICBmb3JFYWNoKHZhbHVlLCAoZXZlbnRIYW5kbGVyLCBldmVudE5hbWUpID0+IHtcbiAgICAgICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgZXZlbnRIYW5kbGVyLCBrZXkgPT09IFwib25DYXB0dXJlXCIpO1xuICAgICAgfSk7XG4gICAgICByZXR1cm47XG4gICAgLy8gZmFsbHRocm91Z2hcbiAgfVxuICBpZiAoaXNGdW5jdGlvbih2YWx1ZSkpIHtcbiAgICBpZiAoa2V5WzBdID09PSBcIm9cIiAmJiBrZXlbMV0gPT09IFwiblwiKSB7XG4gICAgICBsZXQgYXR0cmlidXRlID0ga2V5LnRvTG93ZXJDYXNlKCk7XG4gICAgICBjb25zdCB1c2VDYXB0dXJlID0gYXR0cmlidXRlLmVuZHNXaXRoKFwiY2FwdHVyZVwiKTtcbiAgICAgIGlmIChhdHRyaWJ1dGUgPT09IFwib25kb3VibGVjbGlja1wiKSB7XG4gICAgICAgIGF0dHJpYnV0ZSA9IFwib25kYmxjbGlja1wiO1xuICAgICAgfSBlbHNlIGlmICh1c2VDYXB0dXJlICYmIGF0dHJpYnV0ZSA9PT0gXCJvbmRvdWJsZWNsaWNrY2FwdHVyZVwiKSB7XG4gICAgICAgIGF0dHJpYnV0ZSA9IFwib25kYmxjbGlja2NhcHR1cmVcIjtcbiAgICAgIH1cbiAgICAgIGlmICghdXNlQ2FwdHVyZSAmJiBub2RlW2F0dHJpYnV0ZV0gPT09IG51bGwpIHtcbiAgICAgICAgLy8gdXNlIHByb3BlcnR5IHdoZW4gcG9zc2libGUgUFIgIzE3XG4gICAgICAgIG5vZGVbYXR0cmlidXRlXSA9IHZhbHVlO1xuICAgICAgfSBlbHNlIGlmICh1c2VDYXB0dXJlKSB7XG4gICAgICAgIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICBhdHRyaWJ1dGUuc3Vic3RyaW5nKDIsIGF0dHJpYnV0ZS5sZW5ndGggLSA3KSxcbiAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICB0cnVlLFxuICAgICAgICApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IGV2ZW50TmFtZTtcbiAgICAgICAgaWYgKGF0dHJpYnV0ZSBpbiB3aW5kb3cpIHtcbiAgICAgICAgICAvLyBzdGFuZGFyZCBldmVudFxuICAgICAgICAgIC8vIHRoZSBKU1ggYXR0cmlidXRlIGNvdWxkIGhhdmUgYmVlbiBcIm9uTW91c2VPdmVyXCIgYW5kIHRoZVxuICAgICAgICAgIC8vIG1lbWJlciBuYW1lIFwib25tb3VzZW92ZXJcIiBpcyBvbiB0aGUgd2luZG93J3MgcHJvdG90eXBlXG4gICAgICAgICAgLy8gc28gbGV0J3MgYWRkIHRoZSBsaXN0ZW5lciBcIm1vdXNlb3ZlclwiLCB3aGljaCBpcyBhbGwgbG93ZXJjYXNlZFxuICAgICAgICAgIGNvbnN0IHN0YW5kYXJkRXZlbnROYW1lID0gYXR0cmlidXRlLnN1YnN0cmluZygyKTtcbiAgICAgICAgICBldmVudE5hbWUgPSBzdGFuZGFyZEV2ZW50TmFtZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBjdXN0b20gZXZlbnRcbiAgICAgICAgICAvLyB0aGUgSlNYIGF0dHJpYnV0ZSBjb3VsZCBoYXZlIGJlZW4gXCJvbk15Q3VzdG9tRXZlbnRcIlxuICAgICAgICAgIC8vIHNvIGxldCdzIHRyaW0gb2ZmIHRoZSBcIm9uXCIgcHJlZml4IGFuZCBsb3dlcmNhc2UgdGhlIGZpcnN0IGNoYXJhY3RlclxuICAgICAgICAgIC8vIGFuZCBhZGQgdGhlIGxpc3RlbmVyIFwibXlDdXN0b21FdmVudFwiXG4gICAgICAgICAgLy8gZXhjZXB0IGZvciB0aGUgZmlyc3QgY2hhcmFjdGVyLCB3ZSBrZWVwIHRoZSBldmVudCBuYW1lIGNhc2VcbiAgICAgICAgICBjb25zdCBjdXN0b21FdmVudE5hbWUgPSBhdHRyaWJ1dGVbMl0gKyBrZXkuc2xpY2UoMyk7XG4gICAgICAgICAgZXZlbnROYW1lID0gY3VzdG9tRXZlbnROYW1lO1xuICAgICAgICB9XG4gICAgICAgIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIHZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSBpZiAoaXNPYmplY3QodmFsdWUpKSB7XG4gICAgbm9kZVtrZXldID0gdmFsdWU7XG4gIH0gZWxzZSBpZiAodmFsdWUgPT09IHRydWUpIHtcbiAgICBhdHRyKG5vZGUsIGtleSwgXCJcIik7XG4gIH0gZWxzZSBpZiAodmFsdWUgIT09IGZhbHNlICYmIHZhbHVlICE9IG51bGwpIHtcbiAgICBpZiAobm9kZSBpbnN0YW5jZW9mIFNWR0VsZW1lbnQgJiYgIW5vblByZXNlbnRhdGlvblNWR0F0dHJpYnV0ZXMudGVzdChrZXkpKSB7XG4gICAgICBhdHRyKG5vZGUsIG5vcm1hbGl6ZUF0dHJpYnV0ZShrZXksIFwiLVwiKSwgdmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBhdHRyKG5vZGUsIGtleSwgdmFsdWUpO1xuICAgIH1cbiAgfVxufVxuZnVuY3Rpb24gYXR0cihub2RlLCBrZXksIHZhbHVlKSB7XG4gIG5vZGUuc2V0QXR0cmlidXRlKGtleSwgdmFsdWUpO1xufVxuZnVuY3Rpb24gYXR0ck5TKG5vZGUsIG5hbWVzcGFjZSwga2V5LCB2YWx1ZSkge1xuICBub2RlLnNldEF0dHJpYnV0ZU5TKG5hbWVzcGFjZSwga2V5LCB2YWx1ZSk7XG59XG5mdW5jdGlvbiBhdHRyaWJ1dGVzKGF0dHIsIG5vZGUpIHtcbiAgZm9yIChjb25zdCBrZXkgb2Yga2V5cyhhdHRyKSkge1xuICAgIGF0dHJpYnV0ZShrZXksIGF0dHJba2V5XSwgbm9kZSk7XG4gIH1cbiAgcmV0dXJuIG5vZGU7XG59XG5cbmZ1bmN0aW9uIHVzZVRleHQoaW5pdGlhbFZhbHVlKSB7XG4gIGNvbnN0IHRleHQgPSBuZXcgVGV4dCgpO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGV4dCwgXCJ0b1N0cmluZ1wiLCB7XG4gICAgdmFsdWUoKSB7XG4gICAgICByZXR1cm4gdGhpcy50ZXh0Q29udGVudDtcbiAgICB9LFxuICB9KTtcbiAgZnVuY3Rpb24gc2V0VGV4dCh2YWx1ZSkge1xuICAgIHRleHQudGV4dENvbnRlbnQgPSB2YWx1ZTtcbiAgfVxuICBpZiAoaW5pdGlhbFZhbHVlICE9IG51bGwpIHtcbiAgICBzZXRUZXh0KGluaXRpYWxWYWx1ZSk7XG4gIH1cbiAgcmV0dXJuIFt0ZXh0LCBzZXRUZXh0XTtcbn1cbmZ1bmN0aW9uIHVzZUNsYXNzTGlzdChpbml0aWFsVmFsdWUpIHtcbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaWYgKGluaXRpYWxWYWx1ZSAhPSBudWxsKSB7XG4gICAgZGl2LmNsYXNzTmFtZSA9IGNsYXNzTmFtZShpbml0aWFsVmFsdWUpO1xuICB9XG4gIGxldCBsaXN0ID0gZGl2LmNsYXNzTGlzdDtcbiAgZnVuY3Rpb24gQ2xhc3NMaXN0KHZhbHVlKSB7XG4gICAgdmFsdWUuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgbGlzdC52YWx1ZSk7XG4gICAgbGlzdCA9IHZhbHVlLmNsYXNzTGlzdDtcbiAgfVxuICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhcbiAgICBDbGFzc0xpc3QsXG4gICAgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoe1xuICAgICAgZ2V0IHNpemUoKSB7XG4gICAgICAgIHJldHVybiBsaXN0Lmxlbmd0aDtcbiAgICAgIH0sXG4gICAgICBnZXQgdmFsdWUoKSB7XG4gICAgICAgIHJldHVybiBsaXN0LnZhbHVlO1xuICAgICAgfSxcbiAgICAgIGFkZCgpIHtcbiAgICAgICAgbGlzdC5hZGQoLi4uYXJndW1lbnRzKTtcbiAgICAgIH0sXG4gICAgICByZW1vdmUoKSB7XG4gICAgICAgIGxpc3QucmVtb3ZlKC4uLmFyZ3VtZW50cyk7XG4gICAgICB9LFxuICAgICAgdG9nZ2xlKHRva2VuLCBmb3JjZSkge1xuICAgICAgICBsaXN0LnRvZ2dsZSh0b2tlbiwgZm9yY2UpO1xuICAgICAgfSxcbiAgICAgIGNvbnRhaW5zKHRva2VuKSB7XG4gICAgICAgIHJldHVybiBsaXN0LmNvbnRhaW5zKHRva2VuKTtcbiAgICAgIH0sXG4gICAgfSksXG4gICk7XG4gIHJldHVybiBDbGFzc0xpc3Q7XG59XG5cbmZ1bmN0aW9uIHVzZU1lbW8oZmFjdG9yeSkge1xuICByZXR1cm4gZmFjdG9yeSgpO1xufVxuZnVuY3Rpb24gZm9yd2FyZFJlZihyZW5kZXIpIHtcbiAgcmV0dXJuIChfcmVmKSA9PiB7XG4gICAgbGV0IHsgcmVmLCAuLi5wcm9wcyB9ID0gX3JlZjtcbiAgICByZXR1cm4gcmVuZGVyKHByb3BzLCByZWYgPz8gY3JlYXRlUmVmKCkpO1xuICB9O1xufVxuZnVuY3Rpb24gdXNlSW1wZXJhdGl2ZUhhbmRsZShyZWYsIGluaXQpIHtcbiAgYXR0YWNoUmVmKHJlZiwgaW5pdCgpKTtcbn1cblxuY29uc3QgY2FjaGUgPSAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpO1xuY29uc3QgY3JlYXRlU3R5bGVkQ29tcG9uZW50ID0gKG5hbWUpID0+XG4gIGZ1bmN0aW9uIChsaXN0KSB7XG4gICAgZm9yIChcbiAgICAgIHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCxcbiAgICAgICAgaW50ZXJwb2xhdGlvbnMgPSBuZXcgQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLFxuICAgICAgICBfa2V5ID0gMTtcbiAgICAgIF9rZXkgPCBfbGVuO1xuICAgICAgX2tleSsrXG4gICAgKSB7XG4gICAgICBpbnRlcnBvbGF0aW9uc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuICAgIHJldHVybiAoX3JlZikgPT4ge1xuICAgICAgbGV0IHsgc3R5bGUsIC4uLnByb3BzIH0gPSBfcmVmO1xuICAgICAgY29uc3QgbGFzdEluZGV4ID0gbGlzdC5sZW5ndGggLSAxO1xuICAgICAgY29uc3QgY3NzID1cbiAgICAgICAgbGlzdC5zbGljZSgwLCBsYXN0SW5kZXgpLnJlZHVjZSgocCwgcywgaSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGludGVycG9sYXRpb24gPSBpbnRlcnBvbGF0aW9uc1tpXTtcbiAgICAgICAgICBjb25zdCBjdXJyZW50ID1cbiAgICAgICAgICAgIHR5cGVvZiBpbnRlcnBvbGF0aW9uID09PSBcImZ1bmN0aW9uXCJcbiAgICAgICAgICAgICAgPyBpbnRlcnBvbGF0aW9uKHByb3BzKVxuICAgICAgICAgICAgICA6IGludGVycG9sYXRpb247XG4gICAgICAgICAgcmV0dXJuIHAgKyBzICsgY3VycmVudDtcbiAgICAgICAgfSwgXCJcIikgKyBsaXN0W2xhc3RJbmRleF07XG4gICAgICByZXR1cm4gY3JlYXRlRWxlbWVudChuYW1lLCB7XG4gICAgICAgIHN0eWxlOiBbY3NzLCBzdHlsZV0sXG4gICAgICAgIC4uLnByb3BzLFxuICAgICAgfSk7XG4gICAgfTtcbiAgfTtcbmNvbnN0IGJhc2VTdHlsZWQgPSAoY3VzdG9tQ29tcG9uZW50KSA9PiBjcmVhdGVTdHlsZWRDb21wb25lbnQoY3VzdG9tQ29tcG9uZW50KTtcbmNvbnN0IHN0eWxlZCA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgUHJveHkoYmFzZVN0eWxlZCwge1xuICBnZXQoXywgbmFtZSkge1xuICAgIHJldHVybiBzZXRJZkFic2VudChjYWNoZSwgbmFtZSwgKCkgPT4gY3JlYXRlU3R5bGVkQ29tcG9uZW50KG5hbWUpKTtcbiAgfSxcbn0pO1xuZnVuY3Rpb24gc2V0SWZBYnNlbnQobWFwLCBrZXksIGdldFZhbHVlKSB7XG4gIGlmIChtYXAuaGFzKGtleSkpIHtcbiAgICByZXR1cm4gbWFwLmdldChrZXkpO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IHZhbHVlID0gZ2V0VmFsdWUoa2V5KTtcbiAgICBtYXAuc2V0KGtleSwgdmFsdWUpO1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxufVxuXG52YXIgaW5kZXggPSB7XG4gIENvbXBvbmVudCxcbiAgUHVyZUNvbXBvbmVudDogQ29tcG9uZW50LFxuICBjcmVhdGVFbGVtZW50LFxuICBGcmFnbWVudCxcbiAgU2hhZG93Um9vdCxcbn07XG5mdW5jdGlvbiBwcmV2ZW50RGVmYXVsdChldmVudCkge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICByZXR1cm4gZXZlbnQ7XG59XG5mdW5jdGlvbiBzdG9wUHJvcGFnYXRpb24oZXZlbnQpIHtcbiAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIHJldHVybiBldmVudDtcbn1cblxuZXhwb3J0IHtcbiAgQ29tcG9uZW50LFxuICBGcmFnbWVudCxcbiAgQ29tcG9uZW50IGFzIFB1cmVDb21wb25lbnQsXG4gIFNWR05hbWVzcGFjZSxcbiAgU2hhZG93Um9vdCxcbiAgRnJhZ21lbnQgYXMgU3RyaWN0TW9kZSxcbiAgY2xhc3NOYW1lLFxuICBjcmVhdGVFbGVtZW50LFxuICBjcmVhdGVGYWN0b3J5LFxuICBjcmVhdGVSZWYsXG4gIGluZGV4IGFzIGRlZmF1bHQsXG4gIGZvcndhcmRSZWYsXG4gIGNyZWF0ZUVsZW1lbnQgYXMgaCxcbiAgaXNSZWYsXG4gIGpzeCxcbiAganN4IGFzIGpzeHMsXG4gIGlkZW50aXR5IGFzIG1lbW8sXG4gIHByZXZlbnREZWZhdWx0LFxuICBzdG9wUHJvcGFnYXRpb24sXG4gIHN0eWxlZCxcbiAgaWRlbnRpdHkgYXMgdXNlQ2FsbGJhY2ssXG4gIHVzZUNsYXNzTGlzdCxcbiAgdXNlSW1wZXJhdGl2ZUhhbmRsZSxcbiAgdXNlTWVtbyxcbiAgY3JlYXRlUmVmIGFzIHVzZVJlZixcbiAgdXNlVGV4dCxcbn07XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQSxLQUFDLFdBQVU7QUFBQyxlQUFTLElBQUc7QUFBQyxpQkFBUyxJQUFHO0FBQUMsaUJBQU87QUFBQSxRQUFJO0FBQUMsaUJBQVMsRUFBRSxHQUFFO0FBQUMsaUJBQU8sSUFBRSxhQUFXLE9BQU8sS0FBRyxlQUFhLE9BQU8sSUFBRTtBQUFBLFFBQUU7QUFBQyxpQkFBUyxFQUFFLEdBQUU7QUFBQyxjQUFHLFNBQU8sS0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLE9BQU0sSUFBSSxVQUFVLHFEQUFtRCxDQUFDO0FBQUEsUUFBRTtBQUFDLFlBQUksSUFBRSxNQUFLLElBQUUsUUFBTyxJQUFFLENBQUMsQ0FBQyxFQUFFLFVBQVEsRUFBRSxFQUFDLFdBQVUsS0FBSSxhQUFZLElBQUcsSUFBRSxFQUFFLFdBQVMsSUFBRSxTQUFTLEdBQUU7QUFBQyxZQUFFLENBQUM7QUFBRSxpQkFBTSxFQUFDLFdBQVUsRUFBQztBQUFBLFFBQUMsSUFBRSxTQUFTLEdBQUU7QUFBQyxtQkFBUyxJQUFHO0FBQUEsVUFBQztBQUFDLFlBQUUsQ0FBQztBQUFFLGNBQUcsU0FBTyxFQUFFLE9BQU0sSUFBSSxZQUFZLHdFQUF3RTtBQUFFLFlBQUUsWUFBVTtBQUFFLGlCQUFPLElBQUk7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QUNMLENBQUM7RUFDSDtBQUNGO0FBQ0YsSUFBTXVHLGFBQWNDLHFCQUFvQlosc0JBQXNCWSxlQUFlO0FBQzdFLElBQU16UixTQUF5QixvQkFBSTBSLE1BQU1GLFlBQVk7RUFDbkRHLElBQUlDLEdBQUdkLE1BQU07QUFDWCxXQUFPZSxZQUFZbEIsT0FBT0csTUFBTSxNQUFNRCxzQkFBc0JDLElBQUksQ0FBQztFQUNuRTtBQUNGLENBQUM7QUFDRCxTQUFTZSxZQUFZaEwsS0FBSzFFLEtBQUsyUCxVQUFVO0FBQ3ZDLE1BQUlqTCxJQUFJa0wsSUFBSTVQLEdBQUcsR0FBRztBQUNoQixXQUFPMEUsSUFBSThLLElBQUl4UCxHQUFHO0VBQ3BCLE9BQU87QUFDTCxVQUFNdkIsUUFBUWtSLFNBQVMzUCxHQUFHO0FBQzFCMEUsUUFBSW1MLElBQUk3UCxLQUFLdkIsS0FBSztBQUNsQixXQUFPQTtFQUNUO0FBQ0Y7QUFTQSxTQUFTZCxlQUFlbVMsT0FBTztBQUM3QkEsUUFBTW5TLGVBQWU7QUFDckIsU0FBT21TO0FBQ1Q7QUFDQSxTQUFTbFMsZ0JBQWdCa1MsT0FBTztBQUM5QkEsUUFBTWxTLGdCQUFnQjtBQUN0QixTQUFPa1M7QUFDVDsiLAogICJuYW1lcyI6IFsiUmVhY3RfZXhwb3J0cyIsICJfX2V4cG9ydCIsICJDb21wb25lbnQiLCAiRnJhZ21lbnQiLCAiUHVyZUNvbXBvbmVudCIsICJTVkdOYW1lc3BhY2UiLCAiU2hhZG93Um9vdCIsICJTdHJpY3RNb2RlIiwgImNsYXNzTmFtZSIsICJjcmVhdGVFbGVtZW50IiwgImNyZWF0ZUZhY3RvcnkiLCAiY3JlYXRlUmVmIiwgImZvcndhcmRSZWYiLCAiaCIsICJpc1JlZiIsICJqc3giLCAianN4cyIsICJtZW1vIiwgImlkZW50aXR5IiwgInByZXZlbnREZWZhdWx0IiwgInN0b3BQcm9wYWdhdGlvbiIsICJzdHlsZWQiLCAidXNlQ2FsbGJhY2siLCAidXNlQ2xhc3NMaXN0IiwgInVzZUltcGVyYXRpdmVIYW5kbGUiLCAidXNlTWVtbyIsICJ1c2VSZWYiLCAidXNlVGV4dCIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJfX3RvQ29tbW9uSlMiLCAia2V5cyIsICJPYmplY3QiLCAidmFsdWUiLCAiaXNCb29sZWFuIiwgInZhbCIsICJpc0VsZW1lbnQiLCAibm9kZVR5cGUiLCAiaXNTdHJpbmciLCAiaXNOdW1iZXIiLCAiaXNPYmplY3QiLCAiaXNGdW5jdGlvbiIsICJpc0NvbXBvbmVudENsYXNzIiwgIkNvbXBvbmVudDIiLCAiaXNDb21wb25lbnQiLCAiaXNBcnJheUxpa2UiLCAib2JqIiwgImxlbmd0aCIsICJmb3JFYWNoIiwgImZuIiwgIl9pdGVyYXRvcjIiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAiX3N0ZXAyIiwgInMiLCAibiIsICJkb25lIiwgImtleSIsICJlcnIiLCAiZSIsICJmIiwgInNlYWwiLCAiY3VycmVudCIsICJtYXliZVJlZiIsICJpc1VuaXRsZXNzTnVtYmVyIiwgImFuaW1hdGlvbkl0ZXJhdGlvbkNvdW50IiwgImJvcmRlckltYWdlT3V0c2V0IiwgImJvcmRlckltYWdlU2xpY2UiLCAiYm9yZGVySW1hZ2VXaWR0aCIsICJib3hGbGV4IiwgImJveEZsZXhHcm91cCIsICJib3hPcmRpbmFsR3JvdXAiLCAiY29sdW1uQ291bnQiLCAiY29sdW1ucyIsICJmbGV4IiwgImZsZXhHcm93IiwgImZsZXhQb3NpdGl2ZSIsICJmbGV4U2hyaW5rIiwgImZsZXhOZWdhdGl2ZSIsICJmbGV4T3JkZXIiLCAiZ3JpZEFyZWEiLCAiZ3JpZFJvdyIsICJncmlkUm93RW5kIiwgImdyaWRSb3dTcGFuIiwgImdyaWRSb3dTdGFydCIsICJncmlkQ29sdW1uIiwgImdyaWRDb2x1bW5FbmQiLCAiZ3JpZENvbHVtblNwYW4iLCAiZ3JpZENvbHVtblN0YXJ0IiwgImZvbnRXZWlnaHQiLCAibGluZUNsYW1wIiwgImxpbmVIZWlnaHQiLCAib3BhY2l0eSIsICJvcmRlciIsICJvcnBoYW5zIiwgInRhYlNpemUiLCAid2lkb3dzIiwgInpJbmRleCIsICJ6b29tIiwgImZpbGxPcGFjaXR5IiwgImZsb29kT3BhY2l0eSIsICJzdG9wT3BhY2l0eSIsICJzdHJva2VEYXNoYXJyYXkiLCAic3Ryb2tlRGFzaG9mZnNldCIsICJzdHJva2VNaXRlcmxpbWl0IiwgInN0cm9rZU9wYWNpdHkiLCAic3Ryb2tlV2lkdGgiLCAicHJlZml4S2V5IiwgInByZWZpeCIsICJjaGFyQXQiLCAidG9VcHBlckNhc2UiLCAic3Vic3RyaW5nIiwgInByZWZpeGVzIiwgInByb3AiLCAianN4RG9tVHlwZSIsICJTeW1ib2wiLCAiZm9yIiwgIkpzeERvbVR5cGUiLCAiSnN4RG9tVHlwZTIiLCAiX3JlZiIsICJjaGlsZHJlbiIsICJyZWYiLCAiYXR0cjIiLCAiYXR0ciIsICJpc1NoYWRvd1Jvb3QiLCAiZWwiLCAiWExpbmtOYW1lc3BhY2UiLCAiWE1MTmFtZXNwYWNlIiwgImlzVmlzaWJsZUNoaWxkIiwgIkFycmF5IiwgImlzQXJyYXkiLCAibWFwIiwgImZpbHRlciIsICJCb29sZWFuIiwgImpvaW4iLCAiaXRlcmF0b3IiLCAiZnJvbSIsICJrIiwgInN2ZyIsICJhbmltYXRlIiwgImNpcmNsZSIsICJjbGlwUGF0aCIsICJkZWZzIiwgImRlc2MiLCAiZWxsaXBzZSIsICJmZUJsZW5kIiwgImZlQ29sb3JNYXRyaXgiLCAiZmVDb21wb25lbnRUcmFuc2ZlciIsICJmZUNvbXBvc2l0ZSIsICJmZUNvbnZvbHZlTWF0cml4IiwgImZlRGlmZnVzZUxpZ2h0aW5nIiwgImZlRGlzcGxhY2VtZW50TWFwIiwgImZlRGlzdGFudExpZ2h0IiwgImZlRmxvb2QiLCAiZmVGdW5jQSIsICJmZUZ1bmNCIiwgImZlRnVuY0ciLCAiZmVGdW5jUiIsICJmZUdhdXNzaWFuQmx1ciIsICJmZUltYWdlIiwgImZlTWVyZ2UiLCAiZmVNZXJnZU5vZGUiLCAiZmVNb3JwaG9sb2d5IiwgImZlT2Zmc2V0IiwgImZlUG9pbnRMaWdodCIsICJmZVNwZWN1bGFyTGlnaHRpbmciLCAiZmVTcG90TGlnaHQiLCAiZmVUaWxlIiwgImZlVHVyYnVsZW5jZSIsICJmb3JlaWduT2JqZWN0IiwgImciLCAiaW1hZ2UiLCAibGluZSIsICJsaW5lYXJHcmFkaWVudCIsICJtYXJrZXIiLCAibWFzayIsICJtZXRhZGF0YSIsICJwYXRoIiwgInBhdHRlcm4iLCAicG9seWdvbiIsICJwb2x5bGluZSIsICJyYWRpYWxHcmFkaWVudCIsICJyZWN0IiwgInN0b3AiLCAic3dpdGNoIiwgInN5bWJvbCIsICJ0ZXh0IiwgInRleHRQYXRoIiwgInRzcGFuIiwgInVzZSIsICJ2aWV3IiwgIm5vblByZXNlbnRhdGlvblNWR0F0dHJpYnV0ZXMiLCAidGFnIiwgImJpbmQiLCAiZnJhZ21lbnQiLCAiZG9jdW1lbnQiLCAiY3JlYXRlRG9jdW1lbnRGcmFnbWVudCIsICJhcHBlbmRDaGlsZCIsICJjb25zdHJ1Y3RvciIsICJwcm9wcyIsICJyZW5kZXIiLCAiaW5pdENvbXBvbmVudENsYXNzIiwgIkNsYXNzIiwgImluc3RhbmNlIiwgIm5vZGUiLCAiYXR0YWNoUmVmIiwgIm5hbWVzcGFjZVVSSSIsICJjcmVhdGVFbGVtZW50TlMiLCAiYXR0cmlidXRlcyIsICJ3aW5kb3ciLCAiSFRNTFNlbGVjdEVsZW1lbnQiLCAibXVsdGlwbGUiLCAidmFsdWVzIiwgIlN0cmluZyIsICJxdWVyeVNlbGVjdG9yQWxsIiwgIm9wdGlvbiIsICJzZWxlY3RlZCIsICJpbmNsdWRlcyIsICJkZWZhdWx0UHJvcHMiLCAiVHlwZUVycm9yIiwgImNvbmNhdCIsICJfbGVuIiwgImFyZ3VtZW50cyIsICJfa2V5MiIsICJ1bnNoaWZ0IiwgImNoaWxkIiwgImFwcGVuZENoaWxkcmVuIiwgImFwcGVuZENoaWxkVG9Ob2RlIiwgImNyZWF0ZVRleHROb2RlIiwgImNyZWF0ZUNvbW1lbnQiLCAic2hhZG93Um9vdCIsICJhdHRhY2hTaGFkb3ciLCAiX2kiLCAiX2FyciIsICJIVE1MVGVtcGxhdGVFbGVtZW50IiwgImNvbnRlbnQiLCAibm9ybWFsaXplQXR0cmlidXRlIiwgInNlcGFyYXRvciIsICJyZXBsYWNlIiwgIm1hdGNoIiwgInRvTG93ZXJDYXNlIiwgInN0eWxlIiwgInYiLCAic2V0QXR0cmlidXRlIiwgImluZGV4T2YiLCAic2V0UHJvcGVydHkiLCAiYXR0cmlidXRlIiwgImF0dHJOUyIsICJkYXRhVmFsdWUiLCAiZGF0YUtleSIsICJkYXRhc2V0IiwgImlubmVySFRNTCIsICJIVE1MVGV4dEFyZWFFbGVtZW50IiwgInNwZWxsY2hlY2siLCAiZXZlbnRIYW5kbGVyIiwgImV2ZW50TmFtZSIsICJhZGRFdmVudExpc3RlbmVyIiwgImF0dHJpYnV0ZTIiLCAidXNlQ2FwdHVyZSIsICJlbmRzV2l0aCIsICJzdGFuZGFyZEV2ZW50TmFtZSIsICJjdXN0b21FdmVudE5hbWUiLCAic2xpY2UiLCAiU1ZHRWxlbWVudCIsICJ0ZXN0IiwgIm5hbWVzcGFjZSIsICJzZXRBdHRyaWJ1dGVOUyIsICJfaXRlcmF0b3IzIiwgIl9zdGVwMyIsICJpbml0aWFsVmFsdWUiLCAiVGV4dCIsICJkZWZpbmVQcm9wZXJ0eSIsICJ0ZXh0Q29udGVudCIsICJzZXRUZXh0IiwgImRpdiIsICJsaXN0IiwgImNsYXNzTGlzdCIsICJDbGFzc0xpc3QiLCAiZGVmaW5lUHJvcGVydGllcyIsICJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzIiwgInNpemUiLCAiYWRkIiwgInJlbW92ZSIsICJ0b2dnbGUiLCAidG9rZW4iLCAiZm9yY2UiLCAiY29udGFpbnMiLCAiZmFjdG9yeSIsICJpbml0IiwgImNhY2hlIiwgIk1hcCIsICJjcmVhdGVTdHlsZWRDb21wb25lbnQiLCAibmFtZSIsICJpbnRlcnBvbGF0aW9ucyIsICJfa2V5IiwgInN0eWxlMiIsICJsYXN0SW5kZXgiLCAiY3NzIiwgInJlZHVjZSIsICJwIiwgImkiLCAiaW50ZXJwb2xhdGlvbiIsICJiYXNlU3R5bGVkIiwgImN1c3RvbUNvbXBvbmVudCIsICJQcm94eSIsICJnZXQiLCAiXyIsICJzZXRJZkFic2VudCIsICJnZXRWYWx1ZSIsICJoYXMiLCAic2V0IiwgImV2ZW50Il0KfQo=

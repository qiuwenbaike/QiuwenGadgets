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
  try {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  } catch (e) {
    throw mod = 0, e;
  }
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

// dist/JSX/JSX.js
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
//! src/JSX/JSX.ts
var JSX_exports = {};
__export(JSX_exports, {
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
module.exports = __toCommonJS(JSX_exports);
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
var jsxDomType = /* @__PURE__ */ Symbol.for("jsx-dom:type");
var JsxDomType = /* @__PURE__ */ (function(JsxDomType2) {
  JsxDomType2["ShadowRoot"] = "ShadowRoot";
  return JsxDomType2;
})(JsxDomType || {});
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibm9kZV9tb2R1bGVzLy5wbnBtL3Byb3h5LXBvbHlmaWxsQDAuMy4yL25vZGVfbW9kdWxlcy9wcm94eS1wb2x5ZmlsbC9wcm94eS5taW4uanMiLCAic3JjL0pTWC9KU1gudHMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2pzeC1kb21AOC4xLjYvbm9kZV9tb2R1bGVzL2pzeC1kb20vaW5kZXguanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIihmdW5jdGlvbigpe2Z1bmN0aW9uIG4oKXtmdW5jdGlvbiB2KCl7cmV0dXJuIG51bGx9ZnVuY3Rpb24gbChhKXtyZXR1cm4gYT9cIm9iamVjdFwiPT09dHlwZW9mIGF8fFwiZnVuY3Rpb25cIj09PXR5cGVvZiBhOiExfWZ1bmN0aW9uIHAoYSl7aWYobnVsbCE9PWEmJiFsKGEpKXRocm93IG5ldyBUeXBlRXJyb3IoXCJPYmplY3QgcHJvdG90eXBlIG1heSBvbmx5IGJlIGFuIE9iamVjdCBvciBudWxsOiBcIithKTt9dmFyIHE9bnVsbCxlPU9iamVjdCx3PSEhZS5jcmVhdGV8fCEoe19fcHJvdG9fXzpudWxsfWluc3RhbmNlb2YgZSksQT1lLmNyZWF0ZXx8KHc/ZnVuY3Rpb24oYSl7cChhKTtyZXR1cm57X19wcm90b19fOmF9fTpmdW5jdGlvbihhKXtmdW5jdGlvbiBjKCl7fXAoYSk7aWYobnVsbD09PWEpdGhyb3cgbmV3IFN5bnRheEVycm9yKFwiTmF0aXZlIE9iamVjdC5jcmVhdGUgaXMgcmVxdWlyZWQgdG8gY3JlYXRlIG9iamVjdHMgd2l0aCBudWxsIHByb3RvdHlwZVwiKTtjLnByb3RvdHlwZT1hO3JldHVybiBuZXcgY30pLFxuQj1lLmdldFByb3RvdHlwZU9mfHwoW10uX19wcm90b19fPT09QXJyYXkucHJvdG90eXBlP2Z1bmN0aW9uKGEpe2E9YS5fX3Byb3RvX187cmV0dXJuIGwoYSk/YTpudWxsfTp2KTt2YXIgbT1mdW5jdGlvbihhLGMpe2Z1bmN0aW9uIGsoKXt9aWYodm9pZCAwPT09KHRoaXMmJnRoaXMgaW5zdGFuY2VvZiBtP3RoaXMuY29uc3RydWN0b3I6dm9pZCAwKSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ29uc3RydWN0b3IgUHJveHkgcmVxdWlyZXMgJ25ldydcIik7aWYoIWwoYSl8fCFsKGMpKXRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY3JlYXRlIHByb3h5IHdpdGggYSBub24tb2JqZWN0IGFzIHRhcmdldCBvciBoYW5kbGVyXCIpO3E9ZnVuY3Rpb24oKXthPW51bGw7az1mdW5jdGlvbihiKXt0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHBlcmZvcm0gJ1wiK2IrXCInIG9uIGEgcHJveHkgdGhhdCBoYXMgYmVlbiByZXZva2VkXCIpO319O3NldFRpbWVvdXQoZnVuY3Rpb24oKXtxPW51bGx9LDApO3ZhciBnPVxuYztjPXtnZXQ6bnVsbCxzZXQ6bnVsbCxhcHBseTpudWxsLGNvbnN0cnVjdDpudWxsfTtmb3IodmFyIGggaW4gZyl7aWYoIShoIGluIGMpKXRocm93IG5ldyBUeXBlRXJyb3IoXCJQcm94eSBwb2x5ZmlsbCBkb2VzIG5vdCBzdXBwb3J0IHRyYXAgJ1wiK2grXCInXCIpO2NbaF09Z1toXX1cImZ1bmN0aW9uXCI9PT10eXBlb2YgZyYmKGMuYXBwbHk9Zy5hcHBseS5iaW5kKGcpKTtnPUIoYSk7dmFyIHI9ITEsdD0hMTtpZihcImZ1bmN0aW9uXCI9PT10eXBlb2YgYSl7dmFyIGY9ZnVuY3Rpb24oKXt2YXIgYj10aGlzJiZ0aGlzLmNvbnN0cnVjdG9yPT09ZixkPUFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7ayhiP1wiY29uc3RydWN0XCI6XCJhcHBseVwiKTtyZXR1cm4gYiYmYy5jb25zdHJ1Y3Q/Yy5jb25zdHJ1Y3QuY2FsbCh0aGlzLGEsZCk6IWImJmMuYXBwbHk/Yy5hcHBseShhLHRoaXMsZCk6Yj8oZC51bnNoaWZ0KGEpLG5ldyAoYS5iaW5kLmFwcGx5KGEsZCkpKTphLmFwcGx5KHRoaXMsXG5kKX07cj0hMH1lbHNlIGEgaW5zdGFuY2VvZiBBcnJheT8oZj1bXSx0PSEwKTpmPXd8fG51bGwhPT1nP0EoZyk6e307dmFyIHg9Yy5nZXQ/ZnVuY3Rpb24oYil7ayhcImdldFwiKTtyZXR1cm4gYy5nZXQodGhpcyxiLGYpfTpmdW5jdGlvbihiKXtrKFwiZ2V0XCIpO3JldHVybiB0aGlzW2JdfSxDPWMuc2V0P2Z1bmN0aW9uKGIsZCl7ayhcInNldFwiKTtjLnNldCh0aGlzLGIsZCxmKX06ZnVuY3Rpb24oYixkKXtrKFwic2V0XCIpO3RoaXNbYl09ZH0seT17fTtlLmdldE93blByb3BlcnR5TmFtZXMoYSkuZm9yRWFjaChmdW5jdGlvbihiKXtpZighKChyfHx0KSYmYiBpbiBmKSl7dmFyIGQ9ZS5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoYSxiKTtlLmRlZmluZVByb3BlcnR5KGYsYix7ZW51bWVyYWJsZTohIWQuZW51bWVyYWJsZSxnZXQ6eC5iaW5kKGEsYiksc2V0OkMuYmluZChhLGIpfSk7eVtiXT0hMH19KTtoPSEwO2lmKHJ8fHQpe3ZhciBEPWUuc2V0UHJvdG90eXBlT2Z8fChbXS5fX3Byb3RvX189PT1cbkFycmF5LnByb3RvdHlwZT9mdW5jdGlvbihiLGQpe3AoZCk7Yi5fX3Byb3RvX189ZDtyZXR1cm4gYn06dik7ZyYmRChmLGcpfHwoaD0hMSl9aWYoYy5nZXR8fCFoKWZvcih2YXIgdSBpbiBhKXlbdV18fGUuZGVmaW5lUHJvcGVydHkoZix1LHtnZXQ6eC5iaW5kKGEsdSl9KTtlLnNlYWwoYSk7ZS5zZWFsKGYpO3JldHVybiBmfTttLnJldm9jYWJsZT1mdW5jdGlvbihhLGMpe3JldHVybntwcm94eTpuZXcgbShhLGMpLHJldm9rZTpxfX07cmV0dXJuIG19O3ZhciB6PVwidW5kZWZpbmVkXCIhPT10eXBlb2YgcHJvY2VzcyYmXCJbb2JqZWN0IHByb2Nlc3NdXCI9PT17fS50b1N0cmluZy5jYWxsKHByb2Nlc3MpfHxcInVuZGVmaW5lZFwiIT09dHlwZW9mIG5hdmlnYXRvciYmXCJSZWFjdE5hdGl2ZVwiPT09bmF2aWdhdG9yLnByb2R1Y3Q/Z2xvYmFsOnNlbGY7ei5Qcm94eXx8KHouUHJveHk9bigpLHouUHJveHkucmV2b2NhYmxlPXouUHJveHkucmV2b2NhYmxlKTt9KSgpO1xuIiwgIi8vIOWmguaenOS9v+eUqCBqc3gtZG9t77yM5YiZ5Y+W5raI5rOo6YeK5Lul5LiL6KGMIC8gVG8gVXNlIGpzeC1kb20sIHVuY29tbWVudCB0aGUgZm9sbG93aW5nIGxpbmVcbmV4cG9ydCAqIGZyb20gJ2pzeC1kb20nO1xuIiwgIi8qIGVzbGludC1kaXNhYmxlICovXG5jb25zdCBrZXlzID0gT2JqZWN0LmtleXM7XG5mdW5jdGlvbiBpZGVudGl0eSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWU7XG59XG5mdW5jdGlvbiBpc0Jvb2xlYW4odmFsKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsID09PSBcImJvb2xlYW5cIjtcbn1cbmZ1bmN0aW9uIGlzRWxlbWVudCh2YWwpIHtcbiAgcmV0dXJuIHZhbCAmJiB0eXBlb2YgdmFsLm5vZGVUeXBlID09PSBcIm51bWJlclwiO1xufVxuZnVuY3Rpb24gaXNTdHJpbmcodmFsKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsID09PSBcInN0cmluZ1wiO1xufVxuZnVuY3Rpb24gaXNOdW1iZXIodmFsKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsID09PSBcIm51bWJlclwiO1xufVxuZnVuY3Rpb24gaXNPYmplY3QodmFsKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsID09PSBcIm9iamVjdFwiID8gdmFsICE9PSBudWxsIDogaXNGdW5jdGlvbih2YWwpO1xufVxuZnVuY3Rpb24gaXNGdW5jdGlvbih2YWwpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWwgPT09IFwiZnVuY3Rpb25cIjtcbn1cbmZ1bmN0aW9uIGlzQ29tcG9uZW50Q2xhc3MoQ29tcG9uZW50KSB7XG4gIHJldHVybiAhIShDb21wb25lbnQgJiYgQ29tcG9uZW50LmlzQ29tcG9uZW50KTtcbn1cbmZ1bmN0aW9uIGlzQXJyYXlMaWtlKG9iaikge1xuICByZXR1cm4gKFxuICAgIGlzT2JqZWN0KG9iaikgJiZcbiAgICB0eXBlb2Ygb2JqLmxlbmd0aCA9PT0gXCJudW1iZXJcIiAmJlxuICAgIHR5cGVvZiBvYmoubm9kZVR5cGUgIT09IFwibnVtYmVyXCJcbiAgKTtcbn1cbmZ1bmN0aW9uIGZvckVhY2godmFsdWUsIGZuKSB7XG4gIGlmICghdmFsdWUpIHJldHVybjtcbiAgZm9yIChjb25zdCBrZXkgb2Yga2V5cyh2YWx1ZSkpIHtcbiAgICBmbih2YWx1ZVtrZXldLCBrZXkpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVJlZigpIHtcbiAgcmV0dXJuIE9iamVjdC5zZWFsKHtcbiAgICBjdXJyZW50OiBudWxsLFxuICB9KTtcbn1cbmZ1bmN0aW9uIGlzUmVmKG1heWJlUmVmKSB7XG4gIHJldHVybiBpc09iamVjdChtYXliZVJlZikgJiYgXCJjdXJyZW50XCIgaW4gbWF5YmVSZWY7XG59XG5cbi8qKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgb25cbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9ibG9iL2I4N2FhYmRmZTFiNzQ2MWU3MzMxYWJiMzYwMWQ5ZTZiYjI3NTQ0YmMvTElDRU5TRVxuICovXG5cbi8qKlxuICogQ1NTIHByb3BlcnRpZXMgd2hpY2ggYWNjZXB0IG51bWJlcnMgYnV0IGFyZSBub3QgaW4gdW5pdHMgb2YgXCJweFwiLlxuICovXG5jb25zdCBpc1VuaXRsZXNzTnVtYmVyID0ge1xuICBhbmltYXRpb25JdGVyYXRpb25Db3VudDogMCxcbiAgYm9yZGVySW1hZ2VPdXRzZXQ6IDAsXG4gIGJvcmRlckltYWdlU2xpY2U6IDAsXG4gIGJvcmRlckltYWdlV2lkdGg6IDAsXG4gIGJveEZsZXg6IDAsXG4gIGJveEZsZXhHcm91cDogMCxcbiAgYm94T3JkaW5hbEdyb3VwOiAwLFxuICBjb2x1bW5Db3VudDogMCxcbiAgY29sdW1uczogMCxcbiAgZmxleDogMCxcbiAgZmxleEdyb3c6IDAsXG4gIGZsZXhQb3NpdGl2ZTogMCxcbiAgZmxleFNocmluazogMCxcbiAgZmxleE5lZ2F0aXZlOiAwLFxuICBmbGV4T3JkZXI6IDAsXG4gIGdyaWRBcmVhOiAwLFxuICBncmlkUm93OiAwLFxuICBncmlkUm93RW5kOiAwLFxuICBncmlkUm93U3BhbjogMCxcbiAgZ3JpZFJvd1N0YXJ0OiAwLFxuICBncmlkQ29sdW1uOiAwLFxuICBncmlkQ29sdW1uRW5kOiAwLFxuICBncmlkQ29sdW1uU3BhbjogMCxcbiAgZ3JpZENvbHVtblN0YXJ0OiAwLFxuICBmb250V2VpZ2h0OiAwLFxuICBsaW5lQ2xhbXA6IDAsXG4gIGxpbmVIZWlnaHQ6IDAsXG4gIG9wYWNpdHk6IDAsXG4gIG9yZGVyOiAwLFxuICBvcnBoYW5zOiAwLFxuICB0YWJTaXplOiAwLFxuICB3aWRvd3M6IDAsXG4gIHpJbmRleDogMCxcbiAgem9vbTogMCxcbiAgLy8gU1ZHLXJlbGF0ZWQgcHJvcGVydGllc1xuICBmaWxsT3BhY2l0eTogMCxcbiAgZmxvb2RPcGFjaXR5OiAwLFxuICBzdG9wT3BhY2l0eTogMCxcbiAgc3Ryb2tlRGFzaGFycmF5OiAwLFxuICBzdHJva2VEYXNob2Zmc2V0OiAwLFxuICBzdHJva2VNaXRlcmxpbWl0OiAwLFxuICBzdHJva2VPcGFjaXR5OiAwLFxuICBzdHJva2VXaWR0aDogMCxcbn07XG5cbi8qKlxuICogQHBhcmFtIHByZWZpeCB2ZW5kb3Itc3BlY2lmaWMgcHJlZml4LCBlZzogV2Via2l0XG4gKiBAcGFyYW0ga2V5IHN0eWxlIG5hbWUsIGVnOiB0cmFuc2l0aW9uRHVyYXRpb25cbiAqIEByZXR1cm4gc3R5bGUgbmFtZSBwcmVmaXhlZCB3aXRoIGBwcmVmaXhgLCBwcm9wZXJseSBjYW1lbENhc2VkLCBlZzpcbiAqIFdlYmtpdFRyYW5zaXRpb25EdXJhdGlvblxuICovXG5mdW5jdGlvbiBwcmVmaXhLZXkocHJlZml4LCBrZXkpIHtcbiAgcmV0dXJuIHByZWZpeCArIGtleS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIGtleS5zdWJzdHJpbmcoMSk7XG59XG5cbi8qKlxuICogU3VwcG9ydCBzdHlsZSBuYW1lcyB0aGF0IG1heSBjb21lIHBhc3NlZCBpbiBwcmVmaXhlZCBieSBhZGRpbmcgcGVybXV0YXRpb25zXG4gKiBvZiB2ZW5kb3IgcHJlZml4ZXMuXG4gKi9cbmNvbnN0IHByZWZpeGVzID0gW1wiV2Via2l0XCIsIFwibXNcIiwgXCJNb3pcIiwgXCJPXCJdO1xuLy8gVXNpbmcgT2JqZWN0LmtleXMgaGVyZSwgb3IgZWxzZSB0aGUgdmFuaWxsYSBmb3ItaW4gbG9vcCBtYWtlcyBJRTggZ28gaW50byBhblxuLy8gaW5maW5pdGUgbG9vcCwgYmVjYXVzZSBpdCBpdGVyYXRlcyBvdmVyIHRoZSBuZXdseSBhZGRlZCBwcm9wcyB0b28uXG5rZXlzKGlzVW5pdGxlc3NOdW1iZXIpLmZvckVhY2goKHByb3ApID0+IHtcbiAgcHJlZml4ZXMuZm9yRWFjaCgocHJlZml4KSA9PiB7XG4gICAgaXNVbml0bGVzc051bWJlcltwcmVmaXhLZXkocHJlZml4LCBwcm9wKV0gPSAwOyAvLyBpc1VuaXRsZXNzTnVtYmVyW3Byb3BdXG4gIH0pO1xufSk7XG5cbmNvbnN0IGpzeERvbVR5cGUgPSBTeW1ib2wuZm9yKFwianN4LWRvbTp0eXBlXCIpO1xudmFyIEpzeERvbVR5cGUgPSAvKiNfX1BVUkVfXyovIChmdW5jdGlvbiAoSnN4RG9tVHlwZSkge1xuICBKc3hEb21UeXBlW1wiU2hhZG93Um9vdFwiXSA9IFwiU2hhZG93Um9vdFwiO1xuICByZXR1cm4gSnN4RG9tVHlwZTtcbn0pKEpzeERvbVR5cGUgfHwge30pO1xuZnVuY3Rpb24gU2hhZG93Um9vdChfcmVmKSB7XG4gIGxldCB7IGNoaWxkcmVuLCByZWYsIC4uLmF0dHIgfSA9IF9yZWY7XG4gIHJldHVybiB7XG4gICAgW2pzeERvbVR5cGVdOiBKc3hEb21UeXBlLlNoYWRvd1Jvb3QsXG4gICAgcmVmLFxuICAgIGF0dHIsXG4gICAgY2hpbGRyZW4sXG4gIH07XG59XG5mdW5jdGlvbiBpc1NoYWRvd1Jvb3QoZWwpIHtcbiAgcmV0dXJuIGVsICE9IG51bGwgJiYgZWxbanN4RG9tVHlwZV0gPT09IEpzeERvbVR5cGUuU2hhZG93Um9vdDtcbn1cblxuY29uc3QgU1ZHTmFtZXNwYWNlID0gXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiO1xuY29uc3QgWExpbmtOYW1lc3BhY2UgPSBcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIjtcbmNvbnN0IFhNTE5hbWVzcGFjZSA9IFwiaHR0cDovL3d3dy53My5vcmcvWE1MLzE5OTgvbmFtZXNwYWNlXCI7XG5cbi8vIGh0dHBzOi8vZmFjZWJvb2suZ2l0aHViLmlvL3JlYWN0L2RvY3MvanN4LWluLWRlcHRoLmh0bWwjYm9vbGVhbnMtbnVsbC1hbmQtdW5kZWZpbmVkLWFyZS1pZ25vcmVkXG4vLyBFbXVsYXRlIEpTWCBFeHByZXNzaW9uIGxvZ2ljIHRvIGlnbm9yZSBjZXJ0YWluIHR5cGUgb2YgY2hpbGRyZW4gb3IgY2xhc3NOYW1lLlxuZnVuY3Rpb24gaXNWaXNpYmxlQ2hpbGQodmFsdWUpIHtcbiAgcmV0dXJuICFpc0Jvb2xlYW4odmFsdWUpICYmIHZhbHVlICE9IG51bGw7XG59XG5cbi8qKlxuICogQ29udmVydCBhIGB2YWx1ZWAgdG8gYSBjbGFzc05hbWUgc3RyaW5nLlxuICogYHZhbHVlYCBjYW4gYmUgYSBzdHJpbmcsIGFuIGFycmF5IG9yIGEgYERpY3Rpb25hcnk8Ym9vbGVhbj5gLlxuICovXG5mdW5jdGlvbiBjbGFzc05hbWUodmFsdWUpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgcmV0dXJuIHZhbHVlLm1hcChjbGFzc05hbWUpLmZpbHRlcihCb29sZWFuKS5qb2luKFwiIFwiKTtcbiAgfSBlbHNlIGlmIChpc09iamVjdCh2YWx1ZSkpIHtcbiAgICBpZiAoU3ltYm9sLml0ZXJhdG9yIGluIHZhbHVlKSB7XG4gICAgICByZXR1cm4gY2xhc3NOYW1lKEFycmF5LmZyb20odmFsdWUpKTtcbiAgICB9XG4gICAgcmV0dXJuIGtleXModmFsdWUpXG4gICAgICAuZmlsdGVyKChrKSA9PiB2YWx1ZVtrXSlcbiAgICAgIC5qb2luKFwiIFwiKTtcbiAgfSBlbHNlIGlmIChpc1Zpc2libGVDaGlsZCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gXCJcIiArIHZhbHVlO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBcIlwiO1xuICB9XG59XG5jb25zdCBzdmcgPSB7XG4gIGFuaW1hdGU6IDAsXG4gIGNpcmNsZTogMCxcbiAgY2xpcFBhdGg6IDAsXG4gIGRlZnM6IDAsXG4gIGRlc2M6IDAsXG4gIGVsbGlwc2U6IDAsXG4gIGZlQmxlbmQ6IDAsXG4gIGZlQ29sb3JNYXRyaXg6IDAsXG4gIGZlQ29tcG9uZW50VHJhbnNmZXI6IDAsXG4gIGZlQ29tcG9zaXRlOiAwLFxuICBmZUNvbnZvbHZlTWF0cml4OiAwLFxuICBmZURpZmZ1c2VMaWdodGluZzogMCxcbiAgZmVEaXNwbGFjZW1lbnRNYXA6IDAsXG4gIGZlRGlzdGFudExpZ2h0OiAwLFxuICBmZUZsb29kOiAwLFxuICBmZUZ1bmNBOiAwLFxuICBmZUZ1bmNCOiAwLFxuICBmZUZ1bmNHOiAwLFxuICBmZUZ1bmNSOiAwLFxuICBmZUdhdXNzaWFuQmx1cjogMCxcbiAgZmVJbWFnZTogMCxcbiAgZmVNZXJnZTogMCxcbiAgZmVNZXJnZU5vZGU6IDAsXG4gIGZlTW9ycGhvbG9neTogMCxcbiAgZmVPZmZzZXQ6IDAsXG4gIGZlUG9pbnRMaWdodDogMCxcbiAgZmVTcGVjdWxhckxpZ2h0aW5nOiAwLFxuICBmZVNwb3RMaWdodDogMCxcbiAgZmVUaWxlOiAwLFxuICBmZVR1cmJ1bGVuY2U6IDAsXG4gIGZpbHRlcjogMCxcbiAgZm9yZWlnbk9iamVjdDogMCxcbiAgZzogMCxcbiAgaW1hZ2U6IDAsXG4gIGxpbmU6IDAsXG4gIGxpbmVhckdyYWRpZW50OiAwLFxuICBtYXJrZXI6IDAsXG4gIG1hc2s6IDAsXG4gIG1ldGFkYXRhOiAwLFxuICBwYXRoOiAwLFxuICBwYXR0ZXJuOiAwLFxuICBwb2x5Z29uOiAwLFxuICBwb2x5bGluZTogMCxcbiAgcmFkaWFsR3JhZGllbnQ6IDAsXG4gIHJlY3Q6IDAsXG4gIHN0b3A6IDAsXG4gIHN2ZzogMCxcbiAgc3dpdGNoOiAwLFxuICBzeW1ib2w6IDAsXG4gIHRleHQ6IDAsXG4gIHRleHRQYXRoOiAwLFxuICB0c3BhbjogMCxcbiAgdXNlOiAwLFxuICB2aWV3OiAwLFxufTtcbmNvbnN0IG5vblByZXNlbnRhdGlvblNWR0F0dHJpYnV0ZXMgPVxuICAvXihhKGxsfHR8dSl8YmFzZVtGUF18YyhhbHxsaXBQYXRoVXxvbil8ZGl8ZWR8ZXh8ZmlsdGVyW1JVXXxnKGx5cGhSfHIpfGtlfGwoZW58aW0pfG1hKHJrZXJbSFVXXXxzKXxufHBhdHxwcnxwb2ludFteZV18cmVbXm5dfHNbcHV5XXxzdFteb3JdfHRhfHRleHRMfHZpfHhDfHl8eikvO1xuZnVuY3Rpb24gY3JlYXRlRmFjdG9yeSh0YWcpIHtcbiAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQuYmluZChudWxsLCB0YWcpO1xufVxuZnVuY3Rpb24gRnJhZ21lbnQoYXR0cikge1xuICBjb25zdCBmcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcbiAgYXBwZW5kQ2hpbGQoYXR0ci5jaGlsZHJlbiwgZnJhZ21lbnQpO1xuICByZXR1cm4gZnJhZ21lbnQ7XG59XG5jbGFzcyBDb21wb25lbnQge1xuICBzdGF0aWMgaXNDb21wb25lbnQgPSB0cnVlO1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHRoaXMucHJvcHMgPSBwcm9wcztcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cbmZ1bmN0aW9uIGluaXRDb21wb25lbnRDbGFzcyhDbGFzcywgYXR0ciwgY2hpbGRyZW4pIHtcbiAgYXR0ciA9IHtcbiAgICAuLi5hdHRyLFxuICAgIGNoaWxkcmVuLFxuICB9O1xuICBjb25zdCBpbnN0YW5jZSA9IG5ldyBDbGFzcyhhdHRyKTtcbiAgY29uc3Qgbm9kZSA9IGluc3RhbmNlLnJlbmRlcigpO1xuICBpZiAoXCJyZWZcIiBpbiBhdHRyKSB7XG4gICAgYXR0YWNoUmVmKGF0dHIucmVmLCBpbnN0YW5jZSk7XG4gIH1cbiAgcmV0dXJuIG5vZGU7XG59XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbmZ1bmN0aW9uIGpzeCh0YWcsIF9yZWYpIHtcbiAgbGV0IHsgY2hpbGRyZW4sIC4uLmF0dHIgfSA9IF9yZWY7XG4gIGlmICghYXR0ci5uYW1lc3BhY2VVUkkgJiYgc3ZnW3RhZ10gPT09IDApIHtcbiAgICBhdHRyID0ge1xuICAgICAgLi4uYXR0cixcbiAgICAgIG5hbWVzcGFjZVVSSTogU1ZHTmFtZXNwYWNlLFxuICAgIH07XG4gIH1cbiAgbGV0IG5vZGU7XG4gIGlmIChpc1N0cmluZyh0YWcpKSB7XG4gICAgbm9kZSA9IGF0dHIubmFtZXNwYWNlVVJJXG4gICAgICA/IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhhdHRyLm5hbWVzcGFjZVVSSSwgdGFnKVxuICAgICAgOiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZyk7XG4gICAgYXR0cmlidXRlcyhhdHRyLCBub2RlKTtcbiAgICBhcHBlbmRDaGlsZChjaGlsZHJlbiwgbm9kZSk7XG5cbiAgICAvLyBTZWxlY3QgYG9wdGlvbmAgZWxlbWVudHMgaW4gYHNlbGVjdGBcbiAgICBpZiAobm9kZSBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MU2VsZWN0RWxlbWVudCAmJiBhdHRyLnZhbHVlICE9IG51bGwpIHtcbiAgICAgIGlmIChhdHRyLm11bHRpcGxlID09PSB0cnVlICYmIEFycmF5LmlzQXJyYXkoYXR0ci52YWx1ZSkpIHtcbiAgICAgICAgY29uc3QgdmFsdWVzID0gYXR0ci52YWx1ZS5tYXAoKHZhbHVlKSA9PiBTdHJpbmcodmFsdWUpKTtcbiAgICAgICAgbm9kZVxuICAgICAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKFwib3B0aW9uXCIpXG4gICAgICAgICAgLmZvckVhY2goXG4gICAgICAgICAgICAob3B0aW9uKSA9PiAob3B0aW9uLnNlbGVjdGVkID0gdmFsdWVzLmluY2x1ZGVzKG9wdGlvbi52YWx1ZSkpLFxuICAgICAgICAgICk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBub2RlLnZhbHVlID0gYXR0ci52YWx1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgYXR0YWNoUmVmKGF0dHIucmVmLCBub2RlKTtcbiAgfSBlbHNlIGlmIChpc0Z1bmN0aW9uKHRhZykpIHtcbiAgICAvLyBDdXN0b20gZWxlbWVudHMuXG4gICAgaWYgKGlzT2JqZWN0KHRhZy5kZWZhdWx0UHJvcHMpKSB7XG4gICAgICBhdHRyID0ge1xuICAgICAgICAuLi50YWcuZGVmYXVsdFByb3BzLFxuICAgICAgICAuLi5hdHRyLFxuICAgICAgfTtcbiAgICB9XG4gICAgbm9kZSA9IGlzQ29tcG9uZW50Q2xhc3ModGFnKVxuICAgICAgPyBpbml0Q29tcG9uZW50Q2xhc3ModGFnLCBhdHRyLCBjaGlsZHJlbilcbiAgICAgIDogdGFnKHtcbiAgICAgICAgICAuLi5hdHRyLFxuICAgICAgICAgIGNoaWxkcmVuLFxuICAgICAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBJbnZhbGlkIEpTWCBlbGVtZW50IHR5cGU6ICR7dGFnfWApO1xuICB9XG4gIHJldHVybiBub2RlO1xufVxuZnVuY3Rpb24gY3JlYXRlRWxlbWVudCh0YWcsIGF0dHIpIHtcbiAgZm9yIChcbiAgICB2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsXG4gICAgICBjaGlsZHJlbiA9IG5ldyBBcnJheShfbGVuID4gMiA/IF9sZW4gLSAyIDogMCksXG4gICAgICBfa2V5MiA9IDI7XG4gICAgX2tleTIgPCBfbGVuO1xuICAgIF9rZXkyKytcbiAgKSB7XG4gICAgY2hpbGRyZW5bX2tleTIgLSAyXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gIH1cbiAgaWYgKGlzU3RyaW5nKGF0dHIpIHx8IEFycmF5LmlzQXJyYXkoYXR0cikpIHtcbiAgICBjaGlsZHJlbi51bnNoaWZ0KGF0dHIpO1xuICAgIGF0dHIgPSB7fTtcbiAgfVxuICBhdHRyID0gYXR0ciB8fCB7fTtcbiAgaWYgKGF0dHIuY2hpbGRyZW4gIT0gbnVsbCAmJiAhY2hpbGRyZW4ubGVuZ3RoKSB7XG4gICAgKHsgY2hpbGRyZW4sIC4uLmF0dHIgfSA9IGF0dHIpO1xuICB9XG4gIHJldHVybiBqc3goXG4gICAgdGFnLFxuICAgIHtcbiAgICAgIC4uLmF0dHIsXG4gICAgICBjaGlsZHJlbixcbiAgICB9LFxuICAgIGF0dHIua2V5LFxuICApO1xufVxuZnVuY3Rpb24gYXR0YWNoUmVmKHJlZiwgbm9kZSkge1xuICBpZiAoaXNSZWYocmVmKSkge1xuICAgIHJlZi5jdXJyZW50ID0gbm9kZTtcbiAgfSBlbHNlIGlmIChpc0Z1bmN0aW9uKHJlZikpIHtcbiAgICByZWYobm9kZSk7XG4gIH1cbn1cbmZ1bmN0aW9uIGFwcGVuZENoaWxkKGNoaWxkLCBub2RlKSB7XG4gIGlmIChpc0FycmF5TGlrZShjaGlsZCkpIHtcbiAgICBhcHBlbmRDaGlsZHJlbihjaGlsZCwgbm9kZSk7XG4gIH0gZWxzZSBpZiAoaXNTdHJpbmcoY2hpbGQpIHx8IGlzTnVtYmVyKGNoaWxkKSkge1xuICAgIGFwcGVuZENoaWxkVG9Ob2RlKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNoaWxkKSwgbm9kZSk7XG4gIH0gZWxzZSBpZiAoY2hpbGQgPT09IG51bGwpIHtcbiAgICBhcHBlbmRDaGlsZFRvTm9kZShkb2N1bWVudC5jcmVhdGVDb21tZW50KFwiXCIpLCBub2RlKTtcbiAgfSBlbHNlIGlmIChpc0VsZW1lbnQoY2hpbGQpKSB7XG4gICAgYXBwZW5kQ2hpbGRUb05vZGUoY2hpbGQsIG5vZGUpO1xuICB9IGVsc2UgaWYgKGlzU2hhZG93Um9vdChjaGlsZCkpIHtcbiAgICBjb25zdCBzaGFkb3dSb290ID0gbm9kZS5hdHRhY2hTaGFkb3coY2hpbGQuYXR0cik7XG4gICAgYXBwZW5kQ2hpbGQoY2hpbGQuY2hpbGRyZW4sIHNoYWRvd1Jvb3QpO1xuICAgIGF0dGFjaFJlZihjaGlsZC5yZWYsIHNoYWRvd1Jvb3QpO1xuICB9XG59XG5mdW5jdGlvbiBhcHBlbmRDaGlsZHJlbihjaGlsZHJlbiwgbm9kZSkge1xuICBmb3IgKGNvbnN0IGNoaWxkIG9mIFsuLi5jaGlsZHJlbl0pIHtcbiAgICBhcHBlbmRDaGlsZChjaGlsZCwgbm9kZSk7XG4gIH1cbiAgcmV0dXJuIG5vZGU7XG59XG5mdW5jdGlvbiBhcHBlbmRDaGlsZFRvTm9kZShjaGlsZCwgbm9kZSkge1xuICBpZiAobm9kZSBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MVGVtcGxhdGVFbGVtZW50KSB7XG4gICAgbm9kZS5jb250ZW50LmFwcGVuZENoaWxkKGNoaWxkKTtcbiAgfSBlbHNlIHtcbiAgICBub2RlLmFwcGVuZENoaWxkKGNoaWxkKTtcbiAgfVxufVxuZnVuY3Rpb24gbm9ybWFsaXplQXR0cmlidXRlKHMsIHNlcGFyYXRvcikge1xuICByZXR1cm4gcy5yZXBsYWNlKC9bQS1aXS9nLCAobWF0Y2gpID0+IHNlcGFyYXRvciArIG1hdGNoLnRvTG93ZXJDYXNlKCkpO1xufVxuZnVuY3Rpb24gc3R5bGUobm9kZSwgdmFsdWUpIHtcbiAgaWYgKHZhbHVlID09IG51bGwgfHwgdmFsdWUgPT09IGZhbHNlKTtcbiAgZWxzZSBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICB2YWx1ZS5mb3JFYWNoKCh2KSA9PiBzdHlsZShub2RlLCB2KSk7XG4gIH0gZWxzZSBpZiAoaXNTdHJpbmcodmFsdWUpKSB7XG4gICAgbm9kZS5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCB2YWx1ZSk7XG4gIH0gZWxzZSBpZiAoaXNPYmplY3QodmFsdWUpKSB7XG4gICAgZm9yRWFjaCh2YWx1ZSwgKHZhbCwga2V5KSA9PiB7XG4gICAgICBpZiAoa2V5LmluZGV4T2YoXCItXCIpID09PSAwKSB7XG4gICAgICAgIC8vIENTUyBjdXN0b20gcHJvcGVydGllcyAodmFyaWFibGVzKSBzdGFydCB3aXRoIGAtYCAoZS5nLiBgLS1teS12YXJpYWJsZWApXG4gICAgICAgIC8vIGFuZCBtdXN0IGJlIGFzc2lnbmVkIHZpYSBgc2V0UHJvcGVydHlgLlxuICAgICAgICBub2RlLnN0eWxlLnNldFByb3BlcnR5KGtleSwgdmFsKTtcbiAgICAgIH0gZWxzZSBpZiAoaXNOdW1iZXIodmFsKSAmJiBpc1VuaXRsZXNzTnVtYmVyW2tleV0gIT09IDApIHtcbiAgICAgICAgbm9kZS5zdHlsZVtrZXldID0gdmFsICsgXCJweFwiO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbm9kZS5zdHlsZVtrZXldID0gdmFsO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG5mdW5jdGlvbiBhdHRyaWJ1dGUoa2V5LCB2YWx1ZSwgbm9kZSkge1xuICBzd2l0Y2ggKGtleSkge1xuICAgIGNhc2UgXCJ4bGlua0FjdHVhdGVcIjpcbiAgICBjYXNlIFwieGxpbmtBcmNyb2xlXCI6XG4gICAgY2FzZSBcInhsaW5rSHJlZlwiOlxuICAgIGNhc2UgXCJ4bGlua1JvbGVcIjpcbiAgICBjYXNlIFwieGxpbmtTaG93XCI6XG4gICAgY2FzZSBcInhsaW5rVGl0bGVcIjpcbiAgICBjYXNlIFwieGxpbmtUeXBlXCI6XG4gICAgICBhdHRyTlMobm9kZSwgWExpbmtOYW1lc3BhY2UsIG5vcm1hbGl6ZUF0dHJpYnV0ZShrZXksIFwiOlwiKSwgdmFsdWUpO1xuICAgICAgcmV0dXJuO1xuICAgIGNhc2UgXCJ4bWxuc1hsaW5rXCI6XG4gICAgICBhdHRyKG5vZGUsIG5vcm1hbGl6ZUF0dHJpYnV0ZShrZXksIFwiOlwiKSwgdmFsdWUpO1xuICAgICAgcmV0dXJuO1xuICAgIGNhc2UgXCJ4bWxCYXNlXCI6XG4gICAgY2FzZSBcInhtbExhbmdcIjpcbiAgICBjYXNlIFwieG1sU3BhY2VcIjpcbiAgICAgIGF0dHJOUyhub2RlLCBYTUxOYW1lc3BhY2UsIG5vcm1hbGl6ZUF0dHJpYnV0ZShrZXksIFwiOlwiKSwgdmFsdWUpO1xuICAgICAgcmV0dXJuO1xuICB9XG4gIHN3aXRjaCAoa2V5KSB7XG4gICAgY2FzZSBcImh0bWxGb3JcIjpcbiAgICAgIGF0dHIobm9kZSwgXCJmb3JcIiwgdmFsdWUpO1xuICAgICAgcmV0dXJuO1xuICAgIGNhc2UgXCJkYXRhc2V0XCI6XG4gICAgICBmb3JFYWNoKHZhbHVlLCAoZGF0YVZhbHVlLCBkYXRhS2V5KSA9PiB7XG4gICAgICAgIGlmIChkYXRhVmFsdWUgIT0gbnVsbCkge1xuICAgICAgICAgIG5vZGUuZGF0YXNldFtkYXRhS2V5XSA9IGRhdGFWYWx1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXR1cm47XG4gICAgY2FzZSBcImlubmVySFRNTFwiOlxuICAgIGNhc2UgXCJpbm5lclRleHRcIjpcbiAgICBjYXNlIFwidGV4dENvbnRlbnRcIjpcbiAgICAgIGlmIChpc1Zpc2libGVDaGlsZCh2YWx1ZSkpIHtcbiAgICAgICAgbm9kZVtrZXldID0gdmFsdWU7XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgY2FzZSBcImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MXCI6XG4gICAgICBpZiAoaXNPYmplY3QodmFsdWUpKSB7XG4gICAgICAgIG5vZGUuaW5uZXJIVE1MID0gdmFsdWVbXCJfX2h0bWxcIl07XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgY2FzZSBcInZhbHVlXCI6XG4gICAgICBpZiAodmFsdWUgPT0gbnVsbCB8fCBub2RlIGluc3RhbmNlb2Ygd2luZG93LkhUTUxTZWxlY3RFbGVtZW50KSB7XG4gICAgICAgIC8vIHNraXAgbnVsbGlzaCB2YWx1ZXNcbiAgICAgICAgLy8gZm9yIGA8c2VsZWN0PmAgYXBwbHkgdmFsdWUgYWZ0ZXIgYXBwZW5kaW5nIGA8b3B0aW9uPmAgZWxlbWVudHNcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSBlbHNlIGlmIChub2RlIGluc3RhbmNlb2Ygd2luZG93LkhUTUxUZXh0QXJlYUVsZW1lbnQpIHtcbiAgICAgICAgbm9kZS52YWx1ZSA9IHZhbHVlO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICAvLyB1c2UgYXR0cmlidXRlIGZvciBvdGhlciBlbGVtZW50c1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcInNwZWxsQ2hlY2tcIjpcbiAgICAgIG5vZGUuc3BlbGxjaGVjayA9IHZhbHVlO1xuICAgICAgcmV0dXJuO1xuICAgIGNhc2UgXCJjbGFzc1wiOlxuICAgIGNhc2UgXCJjbGFzc05hbWVcIjpcbiAgICAgIGlmIChpc0Z1bmN0aW9uKHZhbHVlKSkge1xuICAgICAgICB2YWx1ZShub2RlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGF0dHIobm9kZSwgXCJjbGFzc1wiLCBjbGFzc05hbWUodmFsdWUpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybjtcbiAgICBjYXNlIFwicmVmXCI6XG4gICAgY2FzZSBcIm5hbWVzcGFjZVVSSVwiOlxuICAgICAgcmV0dXJuO1xuICAgIGNhc2UgXCJzdHlsZVwiOlxuICAgICAgc3R5bGUobm9kZSwgdmFsdWUpO1xuICAgICAgcmV0dXJuO1xuICAgIGNhc2UgXCJvblwiOlxuICAgIGNhc2UgXCJvbkNhcHR1cmVcIjpcbiAgICAgIGZvckVhY2godmFsdWUsIChldmVudEhhbmRsZXIsIGV2ZW50TmFtZSkgPT4ge1xuICAgICAgICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBldmVudEhhbmRsZXIsIGtleSA9PT0gXCJvbkNhcHR1cmVcIik7XG4gICAgICB9KTtcbiAgICAgIHJldHVybjtcbiAgICAvLyBmYWxsdGhyb3VnaFxuICB9XG4gIGlmIChpc0Z1bmN0aW9uKHZhbHVlKSkge1xuICAgIGlmIChrZXlbMF0gPT09IFwib1wiICYmIGtleVsxXSA9PT0gXCJuXCIpIHtcbiAgICAgIGxldCBhdHRyaWJ1dGUgPSBrZXkudG9Mb3dlckNhc2UoKTtcbiAgICAgIGNvbnN0IHVzZUNhcHR1cmUgPSBhdHRyaWJ1dGUuZW5kc1dpdGgoXCJjYXB0dXJlXCIpO1xuICAgICAgaWYgKGF0dHJpYnV0ZSA9PT0gXCJvbmRvdWJsZWNsaWNrXCIpIHtcbiAgICAgICAgYXR0cmlidXRlID0gXCJvbmRibGNsaWNrXCI7XG4gICAgICB9IGVsc2UgaWYgKHVzZUNhcHR1cmUgJiYgYXR0cmlidXRlID09PSBcIm9uZG91YmxlY2xpY2tjYXB0dXJlXCIpIHtcbiAgICAgICAgYXR0cmlidXRlID0gXCJvbmRibGNsaWNrY2FwdHVyZVwiO1xuICAgICAgfVxuICAgICAgaWYgKCF1c2VDYXB0dXJlICYmIG5vZGVbYXR0cmlidXRlXSA9PT0gbnVsbCkge1xuICAgICAgICAvLyB1c2UgcHJvcGVydHkgd2hlbiBwb3NzaWJsZSBQUiAjMTdcbiAgICAgICAgbm9kZVthdHRyaWJ1dGVdID0gdmFsdWU7XG4gICAgICB9IGVsc2UgaWYgKHVzZUNhcHR1cmUpIHtcbiAgICAgICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgIGF0dHJpYnV0ZS5zdWJzdHJpbmcoMiwgYXR0cmlidXRlLmxlbmd0aCAtIDcpLFxuICAgICAgICAgIHZhbHVlLFxuICAgICAgICAgIHRydWUsXG4gICAgICAgICk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgZXZlbnROYW1lO1xuICAgICAgICBpZiAoYXR0cmlidXRlIGluIHdpbmRvdykge1xuICAgICAgICAgIC8vIHN0YW5kYXJkIGV2ZW50XG4gICAgICAgICAgLy8gdGhlIEpTWCBhdHRyaWJ1dGUgY291bGQgaGF2ZSBiZWVuIFwib25Nb3VzZU92ZXJcIiBhbmQgdGhlXG4gICAgICAgICAgLy8gbWVtYmVyIG5hbWUgXCJvbm1vdXNlb3ZlclwiIGlzIG9uIHRoZSB3aW5kb3cncyBwcm90b3R5cGVcbiAgICAgICAgICAvLyBzbyBsZXQncyBhZGQgdGhlIGxpc3RlbmVyIFwibW91c2VvdmVyXCIsIHdoaWNoIGlzIGFsbCBsb3dlcmNhc2VkXG4gICAgICAgICAgY29uc3Qgc3RhbmRhcmRFdmVudE5hbWUgPSBhdHRyaWJ1dGUuc3Vic3RyaW5nKDIpO1xuICAgICAgICAgIGV2ZW50TmFtZSA9IHN0YW5kYXJkRXZlbnROYW1lO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIGN1c3RvbSBldmVudFxuICAgICAgICAgIC8vIHRoZSBKU1ggYXR0cmlidXRlIGNvdWxkIGhhdmUgYmVlbiBcIm9uTXlDdXN0b21FdmVudFwiXG4gICAgICAgICAgLy8gc28gbGV0J3MgdHJpbSBvZmYgdGhlIFwib25cIiBwcmVmaXggYW5kIGxvd2VyY2FzZSB0aGUgZmlyc3QgY2hhcmFjdGVyXG4gICAgICAgICAgLy8gYW5kIGFkZCB0aGUgbGlzdGVuZXIgXCJteUN1c3RvbUV2ZW50XCJcbiAgICAgICAgICAvLyBleGNlcHQgZm9yIHRoZSBmaXJzdCBjaGFyYWN0ZXIsIHdlIGtlZXAgdGhlIGV2ZW50IG5hbWUgY2FzZVxuICAgICAgICAgIGNvbnN0IGN1c3RvbUV2ZW50TmFtZSA9IGF0dHJpYnV0ZVsyXSArIGtleS5zbGljZSgzKTtcbiAgICAgICAgICBldmVudE5hbWUgPSBjdXN0b21FdmVudE5hbWU7XG4gICAgICAgIH1cbiAgICAgICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgdmFsdWUpO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIGlmIChpc09iamVjdCh2YWx1ZSkpIHtcbiAgICBub2RlW2tleV0gPSB2YWx1ZTtcbiAgfSBlbHNlIGlmICh2YWx1ZSA9PT0gdHJ1ZSkge1xuICAgIGF0dHIobm9kZSwga2V5LCBcIlwiKTtcbiAgfSBlbHNlIGlmICh2YWx1ZSAhPT0gZmFsc2UgJiYgdmFsdWUgIT0gbnVsbCkge1xuICAgIGlmIChub2RlIGluc3RhbmNlb2YgU1ZHRWxlbWVudCAmJiAhbm9uUHJlc2VudGF0aW9uU1ZHQXR0cmlidXRlcy50ZXN0KGtleSkpIHtcbiAgICAgIGF0dHIobm9kZSwgbm9ybWFsaXplQXR0cmlidXRlKGtleSwgXCItXCIpLCB2YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGF0dHIobm9kZSwga2V5LCB2YWx1ZSk7XG4gICAgfVxuICB9XG59XG5mdW5jdGlvbiBhdHRyKG5vZGUsIGtleSwgdmFsdWUpIHtcbiAgbm9kZS5zZXRBdHRyaWJ1dGUoa2V5LCB2YWx1ZSk7XG59XG5mdW5jdGlvbiBhdHRyTlMobm9kZSwgbmFtZXNwYWNlLCBrZXksIHZhbHVlKSB7XG4gIG5vZGUuc2V0QXR0cmlidXRlTlMobmFtZXNwYWNlLCBrZXksIHZhbHVlKTtcbn1cbmZ1bmN0aW9uIGF0dHJpYnV0ZXMoYXR0ciwgbm9kZSkge1xuICBmb3IgKGNvbnN0IGtleSBvZiBrZXlzKGF0dHIpKSB7XG4gICAgYXR0cmlidXRlKGtleSwgYXR0cltrZXldLCBub2RlKTtcbiAgfVxuICByZXR1cm4gbm9kZTtcbn1cblxuZnVuY3Rpb24gdXNlVGV4dChpbml0aWFsVmFsdWUpIHtcbiAgY29uc3QgdGV4dCA9IG5ldyBUZXh0KCk7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0ZXh0LCBcInRvU3RyaW5nXCIsIHtcbiAgICB2YWx1ZSgpIHtcbiAgICAgIHJldHVybiB0aGlzLnRleHRDb250ZW50O1xuICAgIH0sXG4gIH0pO1xuICBmdW5jdGlvbiBzZXRUZXh0KHZhbHVlKSB7XG4gICAgdGV4dC50ZXh0Q29udGVudCA9IHZhbHVlO1xuICB9XG4gIGlmIChpbml0aWFsVmFsdWUgIT0gbnVsbCkge1xuICAgIHNldFRleHQoaW5pdGlhbFZhbHVlKTtcbiAgfVxuICByZXR1cm4gW3RleHQsIHNldFRleHRdO1xufVxuZnVuY3Rpb24gdXNlQ2xhc3NMaXN0KGluaXRpYWxWYWx1ZSkge1xuICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBpZiAoaW5pdGlhbFZhbHVlICE9IG51bGwpIHtcbiAgICBkaXYuY2xhc3NOYW1lID0gY2xhc3NOYW1lKGluaXRpYWxWYWx1ZSk7XG4gIH1cbiAgbGV0IGxpc3QgPSBkaXYuY2xhc3NMaXN0O1xuICBmdW5jdGlvbiBDbGFzc0xpc3QodmFsdWUpIHtcbiAgICB2YWx1ZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBsaXN0LnZhbHVlKTtcbiAgICBsaXN0ID0gdmFsdWUuY2xhc3NMaXN0O1xuICB9XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKFxuICAgIENsYXNzTGlzdCxcbiAgICBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyh7XG4gICAgICBnZXQgc2l6ZSgpIHtcbiAgICAgICAgcmV0dXJuIGxpc3QubGVuZ3RoO1xuICAgICAgfSxcbiAgICAgIGdldCB2YWx1ZSgpIHtcbiAgICAgICAgcmV0dXJuIGxpc3QudmFsdWU7XG4gICAgICB9LFxuICAgICAgYWRkKCkge1xuICAgICAgICBsaXN0LmFkZCguLi5hcmd1bWVudHMpO1xuICAgICAgfSxcbiAgICAgIHJlbW92ZSgpIHtcbiAgICAgICAgbGlzdC5yZW1vdmUoLi4uYXJndW1lbnRzKTtcbiAgICAgIH0sXG4gICAgICB0b2dnbGUodG9rZW4sIGZvcmNlKSB7XG4gICAgICAgIGxpc3QudG9nZ2xlKHRva2VuLCBmb3JjZSk7XG4gICAgICB9LFxuICAgICAgY29udGFpbnModG9rZW4pIHtcbiAgICAgICAgcmV0dXJuIGxpc3QuY29udGFpbnModG9rZW4pO1xuICAgICAgfSxcbiAgICB9KSxcbiAgKTtcbiAgcmV0dXJuIENsYXNzTGlzdDtcbn1cblxuZnVuY3Rpb24gdXNlTWVtbyhmYWN0b3J5KSB7XG4gIHJldHVybiBmYWN0b3J5KCk7XG59XG5mdW5jdGlvbiBmb3J3YXJkUmVmKHJlbmRlcikge1xuICByZXR1cm4gKF9yZWYpID0+IHtcbiAgICBsZXQgeyByZWYsIC4uLnByb3BzIH0gPSBfcmVmO1xuICAgIHJldHVybiByZW5kZXIocHJvcHMsIHJlZiA/PyBjcmVhdGVSZWYoKSk7XG4gIH07XG59XG5mdW5jdGlvbiB1c2VJbXBlcmF0aXZlSGFuZGxlKHJlZiwgaW5pdCkge1xuICBhdHRhY2hSZWYocmVmLCBpbml0KCkpO1xufVxuXG5jb25zdCBjYWNoZSA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCk7XG5jb25zdCBjcmVhdGVTdHlsZWRDb21wb25lbnQgPSAobmFtZSkgPT5cbiAgZnVuY3Rpb24gKGxpc3QpIHtcbiAgICBmb3IgKFxuICAgICAgdmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLFxuICAgICAgICBpbnRlcnBvbGF0aW9ucyA9IG5ldyBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksXG4gICAgICAgIF9rZXkgPSAxO1xuICAgICAgX2tleSA8IF9sZW47XG4gICAgICBfa2V5KytcbiAgICApIHtcbiAgICAgIGludGVycG9sYXRpb25zW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG4gICAgcmV0dXJuIChfcmVmKSA9PiB7XG4gICAgICBsZXQgeyBzdHlsZSwgLi4ucHJvcHMgfSA9IF9yZWY7XG4gICAgICBjb25zdCBsYXN0SW5kZXggPSBsaXN0Lmxlbmd0aCAtIDE7XG4gICAgICBjb25zdCBjc3MgPVxuICAgICAgICBsaXN0LnNsaWNlKDAsIGxhc3RJbmRleCkucmVkdWNlKChwLCBzLCBpKSA9PiB7XG4gICAgICAgICAgY29uc3QgaW50ZXJwb2xhdGlvbiA9IGludGVycG9sYXRpb25zW2ldO1xuICAgICAgICAgIGNvbnN0IGN1cnJlbnQgPVxuICAgICAgICAgICAgdHlwZW9mIGludGVycG9sYXRpb24gPT09IFwiZnVuY3Rpb25cIlxuICAgICAgICAgICAgICA/IGludGVycG9sYXRpb24ocHJvcHMpXG4gICAgICAgICAgICAgIDogaW50ZXJwb2xhdGlvbjtcbiAgICAgICAgICByZXR1cm4gcCArIHMgKyBjdXJyZW50O1xuICAgICAgICB9LCBcIlwiKSArIGxpc3RbbGFzdEluZGV4XTtcbiAgICAgIHJldHVybiBjcmVhdGVFbGVtZW50KG5hbWUsIHtcbiAgICAgICAgc3R5bGU6IFtjc3MsIHN0eWxlXSxcbiAgICAgICAgLi4ucHJvcHMsXG4gICAgICB9KTtcbiAgICB9O1xuICB9O1xuY29uc3QgYmFzZVN0eWxlZCA9IChjdXN0b21Db21wb25lbnQpID0+IGNyZWF0ZVN0eWxlZENvbXBvbmVudChjdXN0b21Db21wb25lbnQpO1xuY29uc3Qgc3R5bGVkID0gLyogQF9fUFVSRV9fICovIG5ldyBQcm94eShiYXNlU3R5bGVkLCB7XG4gIGdldChfLCBuYW1lKSB7XG4gICAgcmV0dXJuIHNldElmQWJzZW50KGNhY2hlLCBuYW1lLCAoKSA9PiBjcmVhdGVTdHlsZWRDb21wb25lbnQobmFtZSkpO1xuICB9LFxufSk7XG5mdW5jdGlvbiBzZXRJZkFic2VudChtYXAsIGtleSwgZ2V0VmFsdWUpIHtcbiAgaWYgKG1hcC5oYXMoa2V5KSkge1xuICAgIHJldHVybiBtYXAuZ2V0KGtleSk7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgdmFsdWUgPSBnZXRWYWx1ZShrZXkpO1xuICAgIG1hcC5zZXQoa2V5LCB2YWx1ZSk7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG59XG5cbnZhciBpbmRleCA9IHtcbiAgQ29tcG9uZW50LFxuICBQdXJlQ29tcG9uZW50OiBDb21wb25lbnQsXG4gIGNyZWF0ZUVsZW1lbnQsXG4gIEZyYWdtZW50LFxuICBTaGFkb3dSb290LFxufTtcbmZ1bmN0aW9uIHByZXZlbnREZWZhdWx0KGV2ZW50KSB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIHJldHVybiBldmVudDtcbn1cbmZ1bmN0aW9uIHN0b3BQcm9wYWdhdGlvbihldmVudCkge1xuICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgcmV0dXJuIGV2ZW50O1xufVxuXG5leHBvcnQge1xuICBDb21wb25lbnQsXG4gIEZyYWdtZW50LFxuICBDb21wb25lbnQgYXMgUHVyZUNvbXBvbmVudCxcbiAgU1ZHTmFtZXNwYWNlLFxuICBTaGFkb3dSb290LFxuICBGcmFnbWVudCBhcyBTdHJpY3RNb2RlLFxuICBjbGFzc05hbWUsXG4gIGNyZWF0ZUVsZW1lbnQsXG4gIGNyZWF0ZUZhY3RvcnksXG4gIGNyZWF0ZVJlZixcbiAgaW5kZXggYXMgZGVmYXVsdCxcbiAgZm9yd2FyZFJlZixcbiAgY3JlYXRlRWxlbWVudCBhcyBoLFxuICBpc1JlZixcbiAganN4LFxuICBqc3ggYXMganN4cyxcbiAgaWRlbnRpdHkgYXMgbWVtbyxcbiAgcHJldmVudERlZmF1bHQsXG4gIHN0b3BQcm9wYWdhdGlvbixcbiAgc3R5bGVkLFxuICBpZGVudGl0eSBhcyB1c2VDYWxsYmFjayxcbiAgdXNlQ2xhc3NMaXN0LFxuICB1c2VJbXBlcmF0aXZlSGFuZGxlLFxuICB1c2VNZW1vLFxuICBjcmVhdGVSZWYgYXMgdXNlUmVmLFxuICB1c2VUZXh0LFxufTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQSxLQUFDLFdBQVU7QUFBQyxlQUFTLElBQUc7QUFBQyxpQkFBUyxJQUFHO0FBQUMsaUJBQU87QUFBQSxRQUFJO0FBQUMsaUJBQVMsRUFBRSxHQUFFO0FBQUMsaUJBQU8sSUFBRSxhQUFXLE9BQU8sS0FBRyxlQUFhLE9BQU8sSUFBRTtBQUFBLFFBQUU7QUFBQyxpQkFBUyxFQUFFLEdBQUU7QUFBQyxjQUFHLFNBQU8sS0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLE9BQU0sSUFBSSxVQUFVLHFEQUFtRCxDQUFDO0FBQUEsUUFBRTtBQUFDLFlBQUksSUFBRSxNQUFLLElBQUUsUUFBTyxJQUFFLENBQUMsQ0FBQyxFQUFFLFVBQVEsRUFBRSxFQUFDLFdBQVUsS0FBSSxhQUFZLElBQUcsSUFBRSxFQUFFLFdBQVMsSUFBRSxTQUFTLEdBQUU7QUFBQyxZQUFFLENBQUM7QUFBRSxpQkFBTSxFQUFDLFdBQVUsRUFBQztBQUFBLFFBQUMsSUFBRSxTQUFTLEdBQUU7QUFBQyxtQkFBUyxJQUFHO0FBQUEsVUFBQztBQUFDLFlBQUUsQ0FBQztBQUFFLGNBQUcsU0FBTyxFQUFFLE9BQU0sSUFBSSxZQUFZLHdFQUF3RTtBQUFFLFlBQUUsWUFBVTtBQUFFLGlCQUFPLElBQUk7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O0lBQ0wsQ0FBQztFQUNIO0FBQ0Y7QUFDRixJQUFNdUcsYUFBY0MscUJBQW9CWixzQkFBc0JZLGVBQWU7QUFDN0UsSUFBTXpSLFNBQXlCLG9CQUFJMFIsTUFBTUYsWUFBWTtFQUNuREcsSUFBSUMsR0FBR2QsTUFBTTtBQUNYLFdBQU9lLFlBQVlsQixPQUFPRyxNQUFNLE1BQU1ELHNCQUFzQkMsSUFBSSxDQUFDO0VBQ25FO0FBQ0YsQ0FBQztBQUNELFNBQVNlLFlBQVloTCxLQUFLMUUsS0FBSzJQLFVBQVU7QUFDdkMsTUFBSWpMLElBQUlrTCxJQUFJNVAsR0FBRyxHQUFHO0FBQ2hCLFdBQU8wRSxJQUFJOEssSUFBSXhQLEdBQUc7RUFDcEIsT0FBTztBQUNMLFVBQU12QixRQUFRa1IsU0FBUzNQLEdBQUc7QUFDMUIwRSxRQUFJbUwsSUFBSTdQLEtBQUt2QixLQUFLO0FBQ2xCLFdBQU9BO0VBQ1Q7QUFDRjtBQVNBLFNBQVNkLGVBQWVtUyxPQUFPO0FBQzdCQSxRQUFNblMsZUFBZTtBQUNyQixTQUFPbVM7QUFDVDtBQUNBLFNBQVNsUyxnQkFBZ0JrUyxPQUFPO0FBQzlCQSxRQUFNbFMsZ0JBQWdCO0FBQ3RCLFNBQU9rUztBQUNUOyIsCiAgIm5hbWVzIjogWyJKU1hfZXhwb3J0cyIsICJfX2V4cG9ydCIsICJDb21wb25lbnQiLCAiRnJhZ21lbnQiLCAiUHVyZUNvbXBvbmVudCIsICJTVkdOYW1lc3BhY2UiLCAiU2hhZG93Um9vdCIsICJTdHJpY3RNb2RlIiwgImNsYXNzTmFtZSIsICJjcmVhdGVFbGVtZW50IiwgImNyZWF0ZUZhY3RvcnkiLCAiY3JlYXRlUmVmIiwgImZvcndhcmRSZWYiLCAiaCIsICJpc1JlZiIsICJqc3giLCAianN4cyIsICJtZW1vIiwgImlkZW50aXR5IiwgInByZXZlbnREZWZhdWx0IiwgInN0b3BQcm9wYWdhdGlvbiIsICJzdHlsZWQiLCAidXNlQ2FsbGJhY2siLCAidXNlQ2xhc3NMaXN0IiwgInVzZUltcGVyYXRpdmVIYW5kbGUiLCAidXNlTWVtbyIsICJ1c2VSZWYiLCAidXNlVGV4dCIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJfX3RvQ29tbW9uSlMiLCAia2V5cyIsICJPYmplY3QiLCAidmFsdWUiLCAiaXNCb29sZWFuIiwgInZhbCIsICJpc0VsZW1lbnQiLCAibm9kZVR5cGUiLCAiaXNTdHJpbmciLCAiaXNOdW1iZXIiLCAiaXNPYmplY3QiLCAiaXNGdW5jdGlvbiIsICJpc0NvbXBvbmVudENsYXNzIiwgIkNvbXBvbmVudDIiLCAiaXNDb21wb25lbnQiLCAiaXNBcnJheUxpa2UiLCAib2JqIiwgImxlbmd0aCIsICJmb3JFYWNoIiwgImZuIiwgIl9pdGVyYXRvcjIiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAiX3N0ZXAyIiwgInMiLCAibiIsICJkb25lIiwgImtleSIsICJlcnIiLCAiZSIsICJmIiwgInNlYWwiLCAiY3VycmVudCIsICJtYXliZVJlZiIsICJpc1VuaXRsZXNzTnVtYmVyIiwgImFuaW1hdGlvbkl0ZXJhdGlvbkNvdW50IiwgImJvcmRlckltYWdlT3V0c2V0IiwgImJvcmRlckltYWdlU2xpY2UiLCAiYm9yZGVySW1hZ2VXaWR0aCIsICJib3hGbGV4IiwgImJveEZsZXhHcm91cCIsICJib3hPcmRpbmFsR3JvdXAiLCAiY29sdW1uQ291bnQiLCAiY29sdW1ucyIsICJmbGV4IiwgImZsZXhHcm93IiwgImZsZXhQb3NpdGl2ZSIsICJmbGV4U2hyaW5rIiwgImZsZXhOZWdhdGl2ZSIsICJmbGV4T3JkZXIiLCAiZ3JpZEFyZWEiLCAiZ3JpZFJvdyIsICJncmlkUm93RW5kIiwgImdyaWRSb3dTcGFuIiwgImdyaWRSb3dTdGFydCIsICJncmlkQ29sdW1uIiwgImdyaWRDb2x1bW5FbmQiLCAiZ3JpZENvbHVtblNwYW4iLCAiZ3JpZENvbHVtblN0YXJ0IiwgImZvbnRXZWlnaHQiLCAibGluZUNsYW1wIiwgImxpbmVIZWlnaHQiLCAib3BhY2l0eSIsICJvcmRlciIsICJvcnBoYW5zIiwgInRhYlNpemUiLCAid2lkb3dzIiwgInpJbmRleCIsICJ6b29tIiwgImZpbGxPcGFjaXR5IiwgImZsb29kT3BhY2l0eSIsICJzdG9wT3BhY2l0eSIsICJzdHJva2VEYXNoYXJyYXkiLCAic3Ryb2tlRGFzaG9mZnNldCIsICJzdHJva2VNaXRlcmxpbWl0IiwgInN0cm9rZU9wYWNpdHkiLCAic3Ryb2tlV2lkdGgiLCAicHJlZml4S2V5IiwgInByZWZpeCIsICJjaGFyQXQiLCAidG9VcHBlckNhc2UiLCAic3Vic3RyaW5nIiwgInByZWZpeGVzIiwgInByb3AiLCAianN4RG9tVHlwZSIsICJTeW1ib2wiLCAiZm9yIiwgIkpzeERvbVR5cGUiLCAiSnN4RG9tVHlwZTIiLCAiX3JlZiIsICJjaGlsZHJlbiIsICJyZWYiLCAiYXR0ciIsICJhdHRyMiIsICJpc1NoYWRvd1Jvb3QiLCAiZWwiLCAiWExpbmtOYW1lc3BhY2UiLCAiWE1MTmFtZXNwYWNlIiwgImlzVmlzaWJsZUNoaWxkIiwgIkFycmF5IiwgImlzQXJyYXkiLCAibWFwIiwgImZpbHRlciIsICJCb29sZWFuIiwgImpvaW4iLCAiaXRlcmF0b3IiLCAiZnJvbSIsICJrIiwgInN2ZyIsICJhbmltYXRlIiwgImNpcmNsZSIsICJjbGlwUGF0aCIsICJkZWZzIiwgImRlc2MiLCAiZWxsaXBzZSIsICJmZUJsZW5kIiwgImZlQ29sb3JNYXRyaXgiLCAiZmVDb21wb25lbnRUcmFuc2ZlciIsICJmZUNvbXBvc2l0ZSIsICJmZUNvbnZvbHZlTWF0cml4IiwgImZlRGlmZnVzZUxpZ2h0aW5nIiwgImZlRGlzcGxhY2VtZW50TWFwIiwgImZlRGlzdGFudExpZ2h0IiwgImZlRmxvb2QiLCAiZmVGdW5jQSIsICJmZUZ1bmNCIiwgImZlRnVuY0ciLCAiZmVGdW5jUiIsICJmZUdhdXNzaWFuQmx1ciIsICJmZUltYWdlIiwgImZlTWVyZ2UiLCAiZmVNZXJnZU5vZGUiLCAiZmVNb3JwaG9sb2d5IiwgImZlT2Zmc2V0IiwgImZlUG9pbnRMaWdodCIsICJmZVNwZWN1bGFyTGlnaHRpbmciLCAiZmVTcG90TGlnaHQiLCAiZmVUaWxlIiwgImZlVHVyYnVsZW5jZSIsICJmb3JlaWduT2JqZWN0IiwgImciLCAiaW1hZ2UiLCAibGluZSIsICJsaW5lYXJHcmFkaWVudCIsICJtYXJrZXIiLCAibWFzayIsICJtZXRhZGF0YSIsICJwYXRoIiwgInBhdHRlcm4iLCAicG9seWdvbiIsICJwb2x5bGluZSIsICJyYWRpYWxHcmFkaWVudCIsICJyZWN0IiwgInN0b3AiLCAic3dpdGNoIiwgInN5bWJvbCIsICJ0ZXh0IiwgInRleHRQYXRoIiwgInRzcGFuIiwgInVzZSIsICJ2aWV3IiwgIm5vblByZXNlbnRhdGlvblNWR0F0dHJpYnV0ZXMiLCAidGFnIiwgImJpbmQiLCAiZnJhZ21lbnQiLCAiZG9jdW1lbnQiLCAiY3JlYXRlRG9jdW1lbnRGcmFnbWVudCIsICJhcHBlbmRDaGlsZCIsICJjb25zdHJ1Y3RvciIsICJwcm9wcyIsICJyZW5kZXIiLCAiaW5pdENvbXBvbmVudENsYXNzIiwgIkNsYXNzIiwgImluc3RhbmNlIiwgIm5vZGUiLCAiYXR0YWNoUmVmIiwgIm5hbWVzcGFjZVVSSSIsICJjcmVhdGVFbGVtZW50TlMiLCAiYXR0cmlidXRlcyIsICJ3aW5kb3ciLCAiSFRNTFNlbGVjdEVsZW1lbnQiLCAibXVsdGlwbGUiLCAidmFsdWVzIiwgIlN0cmluZyIsICJxdWVyeVNlbGVjdG9yQWxsIiwgIm9wdGlvbiIsICJzZWxlY3RlZCIsICJpbmNsdWRlcyIsICJkZWZhdWx0UHJvcHMiLCAiVHlwZUVycm9yIiwgImNvbmNhdCIsICJfbGVuIiwgImFyZ3VtZW50cyIsICJfa2V5MiIsICJ1bnNoaWZ0IiwgImNoaWxkIiwgImFwcGVuZENoaWxkcmVuIiwgImFwcGVuZENoaWxkVG9Ob2RlIiwgImNyZWF0ZVRleHROb2RlIiwgImNyZWF0ZUNvbW1lbnQiLCAic2hhZG93Um9vdCIsICJhdHRhY2hTaGFkb3ciLCAiX2kiLCAiX2FyciIsICJIVE1MVGVtcGxhdGVFbGVtZW50IiwgImNvbnRlbnQiLCAibm9ybWFsaXplQXR0cmlidXRlIiwgInNlcGFyYXRvciIsICJyZXBsYWNlIiwgIm1hdGNoIiwgInRvTG93ZXJDYXNlIiwgInN0eWxlIiwgInYiLCAic2V0QXR0cmlidXRlIiwgImluZGV4T2YiLCAic2V0UHJvcGVydHkiLCAiYXR0cmlidXRlIiwgImF0dHJOUyIsICJkYXRhVmFsdWUiLCAiZGF0YUtleSIsICJkYXRhc2V0IiwgImlubmVySFRNTCIsICJIVE1MVGV4dEFyZWFFbGVtZW50IiwgInNwZWxsY2hlY2siLCAiZXZlbnRIYW5kbGVyIiwgImV2ZW50TmFtZSIsICJhZGRFdmVudExpc3RlbmVyIiwgInVzZUNhcHR1cmUiLCAiZW5kc1dpdGgiLCAiYXR0cmlidXRlMiIsICJzdGFuZGFyZEV2ZW50TmFtZSIsICJjdXN0b21FdmVudE5hbWUiLCAic2xpY2UiLCAiU1ZHRWxlbWVudCIsICJ0ZXN0IiwgIm5hbWVzcGFjZSIsICJzZXRBdHRyaWJ1dGVOUyIsICJfaXRlcmF0b3IzIiwgIl9zdGVwMyIsICJpbml0aWFsVmFsdWUiLCAiVGV4dCIsICJkZWZpbmVQcm9wZXJ0eSIsICJ0ZXh0Q29udGVudCIsICJzZXRUZXh0IiwgImRpdiIsICJsaXN0IiwgImNsYXNzTGlzdCIsICJDbGFzc0xpc3QiLCAiZGVmaW5lUHJvcGVydGllcyIsICJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzIiwgInNpemUiLCAiYWRkIiwgInJlbW92ZSIsICJ0b2dnbGUiLCAidG9rZW4iLCAiZm9yY2UiLCAiY29udGFpbnMiLCAiZmFjdG9yeSIsICJpbml0IiwgImNhY2hlIiwgIk1hcCIsICJjcmVhdGVTdHlsZWRDb21wb25lbnQiLCAibmFtZSIsICJpbnRlcnBvbGF0aW9ucyIsICJfa2V5IiwgInN0eWxlMiIsICJsYXN0SW5kZXgiLCAiY3NzIiwgInJlZHVjZSIsICJwIiwgImkiLCAiaW50ZXJwb2xhdGlvbiIsICJiYXNlU3R5bGVkIiwgImN1c3RvbUNvbXBvbmVudCIsICJQcm94eSIsICJnZXQiLCAiXyIsICJzZXRJZkFic2VudCIsICJnZXRWYWx1ZSIsICJoYXMiLCAic2V0IiwgImV2ZW50Il0KfQo=

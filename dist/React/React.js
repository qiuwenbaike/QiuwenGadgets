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
  const {
    prototype
  } = Component2;
  return !!(prototype && prototype.isReactComponent);
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
  constructor(props) {
    this.props = props;
  }
  render() {
    return null;
  }
};
/* @__PURE__ */ Object.defineProperties(Component.prototype, {
  isReactComponent: {
    value: true
  }
});
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibm9kZV9tb2R1bGVzLy5wbnBtL3Byb3h5LXBvbHlmaWxsQDAuMy4yL25vZGVfbW9kdWxlcy9wcm94eS1wb2x5ZmlsbC9wcm94eS5taW4uanMiLCAic3JjL1JlYWN0L1JlYWN0LnRzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9qc3gtZG9tQDguMS40L25vZGVfbW9kdWxlcy9qc3gtZG9tL2luZGV4LmpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyIoZnVuY3Rpb24oKXtmdW5jdGlvbiBuKCl7ZnVuY3Rpb24gdigpe3JldHVybiBudWxsfWZ1bmN0aW9uIGwoYSl7cmV0dXJuIGE/XCJvYmplY3RcIj09PXR5cGVvZiBhfHxcImZ1bmN0aW9uXCI9PT10eXBlb2YgYTohMX1mdW5jdGlvbiBwKGEpe2lmKG51bGwhPT1hJiYhbChhKSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiT2JqZWN0IHByb3RvdHlwZSBtYXkgb25seSBiZSBhbiBPYmplY3Qgb3IgbnVsbDogXCIrYSk7fXZhciBxPW51bGwsZT1PYmplY3Qsdz0hIWUuY3JlYXRlfHwhKHtfX3Byb3RvX186bnVsbH1pbnN0YW5jZW9mIGUpLEE9ZS5jcmVhdGV8fCh3P2Z1bmN0aW9uKGEpe3AoYSk7cmV0dXJue19fcHJvdG9fXzphfX06ZnVuY3Rpb24oYSl7ZnVuY3Rpb24gYygpe31wKGEpO2lmKG51bGw9PT1hKXRocm93IG5ldyBTeW50YXhFcnJvcihcIk5hdGl2ZSBPYmplY3QuY3JlYXRlIGlzIHJlcXVpcmVkIHRvIGNyZWF0ZSBvYmplY3RzIHdpdGggbnVsbCBwcm90b3R5cGVcIik7Yy5wcm90b3R5cGU9YTtyZXR1cm4gbmV3IGN9KSxcbkI9ZS5nZXRQcm90b3R5cGVPZnx8KFtdLl9fcHJvdG9fXz09PUFycmF5LnByb3RvdHlwZT9mdW5jdGlvbihhKXthPWEuX19wcm90b19fO3JldHVybiBsKGEpP2E6bnVsbH06dik7dmFyIG09ZnVuY3Rpb24oYSxjKXtmdW5jdGlvbiBrKCl7fWlmKHZvaWQgMD09PSh0aGlzJiZ0aGlzIGluc3RhbmNlb2YgbT90aGlzLmNvbnN0cnVjdG9yOnZvaWQgMCkpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNvbnN0cnVjdG9yIFByb3h5IHJlcXVpcmVzICduZXcnXCIpO2lmKCFsKGEpfHwhbChjKSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNyZWF0ZSBwcm94eSB3aXRoIGEgbm9uLW9iamVjdCBhcyB0YXJnZXQgb3IgaGFuZGxlclwiKTtxPWZ1bmN0aW9uKCl7YT1udWxsO2s9ZnVuY3Rpb24oYil7dGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBwZXJmb3JtICdcIitiK1wiJyBvbiBhIHByb3h5IHRoYXQgaGFzIGJlZW4gcmV2b2tlZFwiKTt9fTtzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7cT1udWxsfSwwKTt2YXIgZz1cbmM7Yz17Z2V0Om51bGwsc2V0Om51bGwsYXBwbHk6bnVsbCxjb25zdHJ1Y3Q6bnVsbH07Zm9yKHZhciBoIGluIGcpe2lmKCEoaCBpbiBjKSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJveHkgcG9seWZpbGwgZG9lcyBub3Qgc3VwcG9ydCB0cmFwICdcIitoK1wiJ1wiKTtjW2hdPWdbaF19XCJmdW5jdGlvblwiPT09dHlwZW9mIGcmJihjLmFwcGx5PWcuYXBwbHkuYmluZChnKSk7Zz1CKGEpO3ZhciByPSExLHQ9ITE7aWYoXCJmdW5jdGlvblwiPT09dHlwZW9mIGEpe3ZhciBmPWZ1bmN0aW9uKCl7dmFyIGI9dGhpcyYmdGhpcy5jb25zdHJ1Y3Rvcj09PWYsZD1BcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpO2soYj9cImNvbnN0cnVjdFwiOlwiYXBwbHlcIik7cmV0dXJuIGImJmMuY29uc3RydWN0P2MuY29uc3RydWN0LmNhbGwodGhpcyxhLGQpOiFiJiZjLmFwcGx5P2MuYXBwbHkoYSx0aGlzLGQpOmI/KGQudW5zaGlmdChhKSxuZXcgKGEuYmluZC5hcHBseShhLGQpKSk6YS5hcHBseSh0aGlzLFxuZCl9O3I9ITB9ZWxzZSBhIGluc3RhbmNlb2YgQXJyYXk/KGY9W10sdD0hMCk6Zj13fHxudWxsIT09Zz9BKGcpOnt9O3ZhciB4PWMuZ2V0P2Z1bmN0aW9uKGIpe2soXCJnZXRcIik7cmV0dXJuIGMuZ2V0KHRoaXMsYixmKX06ZnVuY3Rpb24oYil7ayhcImdldFwiKTtyZXR1cm4gdGhpc1tiXX0sQz1jLnNldD9mdW5jdGlvbihiLGQpe2soXCJzZXRcIik7Yy5zZXQodGhpcyxiLGQsZil9OmZ1bmN0aW9uKGIsZCl7ayhcInNldFwiKTt0aGlzW2JdPWR9LHk9e307ZS5nZXRPd25Qcm9wZXJ0eU5hbWVzKGEpLmZvckVhY2goZnVuY3Rpb24oYil7aWYoISgocnx8dCkmJmIgaW4gZikpe3ZhciBkPWUuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGEsYik7ZS5kZWZpbmVQcm9wZXJ0eShmLGIse2VudW1lcmFibGU6ISFkLmVudW1lcmFibGUsZ2V0OnguYmluZChhLGIpLHNldDpDLmJpbmQoYSxiKX0pO3lbYl09ITB9fSk7aD0hMDtpZihyfHx0KXt2YXIgRD1lLnNldFByb3RvdHlwZU9mfHwoW10uX19wcm90b19fPT09XG5BcnJheS5wcm90b3R5cGU/ZnVuY3Rpb24oYixkKXtwKGQpO2IuX19wcm90b19fPWQ7cmV0dXJuIGJ9OnYpO2cmJkQoZixnKXx8KGg9ITEpfWlmKGMuZ2V0fHwhaClmb3IodmFyIHUgaW4gYSl5W3VdfHxlLmRlZmluZVByb3BlcnR5KGYsdSx7Z2V0OnguYmluZChhLHUpfSk7ZS5zZWFsKGEpO2Uuc2VhbChmKTtyZXR1cm4gZn07bS5yZXZvY2FibGU9ZnVuY3Rpb24oYSxjKXtyZXR1cm57cHJveHk6bmV3IG0oYSxjKSxyZXZva2U6cX19O3JldHVybiBtfTt2YXIgej1cInVuZGVmaW5lZFwiIT09dHlwZW9mIHByb2Nlc3MmJlwiW29iamVjdCBwcm9jZXNzXVwiPT09e30udG9TdHJpbmcuY2FsbChwcm9jZXNzKXx8XCJ1bmRlZmluZWRcIiE9PXR5cGVvZiBuYXZpZ2F0b3ImJlwiUmVhY3ROYXRpdmVcIj09PW5hdmlnYXRvci5wcm9kdWN0P2dsb2JhbDpzZWxmO3ouUHJveHl8fCh6LlByb3h5PW4oKSx6LlByb3h5LnJldm9jYWJsZT16LlByb3h5LnJldm9jYWJsZSk7fSkoKTtcbiIsICIvLyDlpoLmnpzkvb/nlKgganN4LWRvbe+8jOWImeWPlua2iOazqOmHiuS7peS4i+ihjCAvIFRvIFVzZSBqc3gtZG9tLCB1bmNvbW1lbnQgdGhlIGZvbGxvd2luZyBsaW5lXG5leHBvcnQgKiBmcm9tICdqc3gtZG9tJztcbiIsICIvKiBlc2xpbnQtZGlzYWJsZSAqL1xuY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzO1xuZnVuY3Rpb24gaWRlbnRpdHkodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlO1xufVxuZnVuY3Rpb24gaXNCb29sZWFuKHZhbCkge1xuICByZXR1cm4gdHlwZW9mIHZhbCA9PT0gXCJib29sZWFuXCI7XG59XG5mdW5jdGlvbiBpc0VsZW1lbnQodmFsKSB7XG4gIHJldHVybiB2YWwgJiYgdHlwZW9mIHZhbC5ub2RlVHlwZSA9PT0gXCJudW1iZXJcIjtcbn1cbmZ1bmN0aW9uIGlzU3RyaW5nKHZhbCkge1xuICByZXR1cm4gdHlwZW9mIHZhbCA9PT0gXCJzdHJpbmdcIjtcbn1cbmZ1bmN0aW9uIGlzTnVtYmVyKHZhbCkge1xuICByZXR1cm4gdHlwZW9mIHZhbCA9PT0gXCJudW1iZXJcIjtcbn1cbmZ1bmN0aW9uIGlzT2JqZWN0KHZhbCkge1xuICByZXR1cm4gdHlwZW9mIHZhbCA9PT0gXCJvYmplY3RcIiA/IHZhbCAhPT0gbnVsbCA6IGlzRnVuY3Rpb24odmFsKTtcbn1cbmZ1bmN0aW9uIGlzRnVuY3Rpb24odmFsKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsID09PSBcImZ1bmN0aW9uXCI7XG59XG5mdW5jdGlvbiBpc0NvbXBvbmVudENsYXNzKENvbXBvbmVudCkge1xuICBjb25zdCB7IHByb3RvdHlwZSB9ID0gQ29tcG9uZW50O1xuICByZXR1cm4gISEocHJvdG90eXBlICYmIHByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50KTtcbn1cbmZ1bmN0aW9uIGlzQXJyYXlMaWtlKG9iaikge1xuICByZXR1cm4gKFxuICAgIGlzT2JqZWN0KG9iaikgJiZcbiAgICB0eXBlb2Ygb2JqLmxlbmd0aCA9PT0gXCJudW1iZXJcIiAmJlxuICAgIHR5cGVvZiBvYmoubm9kZVR5cGUgIT09IFwibnVtYmVyXCJcbiAgKTtcbn1cbmZ1bmN0aW9uIGZvckVhY2godmFsdWUsIGZuKSB7XG4gIGlmICghdmFsdWUpIHJldHVybjtcbiAgZm9yIChjb25zdCBrZXkgb2Yga2V5cyh2YWx1ZSkpIHtcbiAgICBmbih2YWx1ZVtrZXldLCBrZXkpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVJlZigpIHtcbiAgcmV0dXJuIE9iamVjdC5zZWFsKHtcbiAgICBjdXJyZW50OiBudWxsLFxuICB9KTtcbn1cbmZ1bmN0aW9uIGlzUmVmKG1heWJlUmVmKSB7XG4gIHJldHVybiBpc09iamVjdChtYXliZVJlZikgJiYgXCJjdXJyZW50XCIgaW4gbWF5YmVSZWY7XG59XG5cbi8qKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgb25cbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9ibG9iL2I4N2FhYmRmZTFiNzQ2MWU3MzMxYWJiMzYwMWQ5ZTZiYjI3NTQ0YmMvTElDRU5TRVxuICovXG5cbi8qKlxuICogQ1NTIHByb3BlcnRpZXMgd2hpY2ggYWNjZXB0IG51bWJlcnMgYnV0IGFyZSBub3QgaW4gdW5pdHMgb2YgXCJweFwiLlxuICovXG5jb25zdCBpc1VuaXRsZXNzTnVtYmVyID0ge1xuICBhbmltYXRpb25JdGVyYXRpb25Db3VudDogMCxcbiAgYm9yZGVySW1hZ2VPdXRzZXQ6IDAsXG4gIGJvcmRlckltYWdlU2xpY2U6IDAsXG4gIGJvcmRlckltYWdlV2lkdGg6IDAsXG4gIGJveEZsZXg6IDAsXG4gIGJveEZsZXhHcm91cDogMCxcbiAgYm94T3JkaW5hbEdyb3VwOiAwLFxuICBjb2x1bW5Db3VudDogMCxcbiAgY29sdW1uczogMCxcbiAgZmxleDogMCxcbiAgZmxleEdyb3c6IDAsXG4gIGZsZXhQb3NpdGl2ZTogMCxcbiAgZmxleFNocmluazogMCxcbiAgZmxleE5lZ2F0aXZlOiAwLFxuICBmbGV4T3JkZXI6IDAsXG4gIGdyaWRBcmVhOiAwLFxuICBncmlkUm93OiAwLFxuICBncmlkUm93RW5kOiAwLFxuICBncmlkUm93U3BhbjogMCxcbiAgZ3JpZFJvd1N0YXJ0OiAwLFxuICBncmlkQ29sdW1uOiAwLFxuICBncmlkQ29sdW1uRW5kOiAwLFxuICBncmlkQ29sdW1uU3BhbjogMCxcbiAgZ3JpZENvbHVtblN0YXJ0OiAwLFxuICBmb250V2VpZ2h0OiAwLFxuICBsaW5lQ2xhbXA6IDAsXG4gIGxpbmVIZWlnaHQ6IDAsXG4gIG9wYWNpdHk6IDAsXG4gIG9yZGVyOiAwLFxuICBvcnBoYW5zOiAwLFxuICB0YWJTaXplOiAwLFxuICB3aWRvd3M6IDAsXG4gIHpJbmRleDogMCxcbiAgem9vbTogMCxcbiAgLy8gU1ZHLXJlbGF0ZWQgcHJvcGVydGllc1xuICBmaWxsT3BhY2l0eTogMCxcbiAgZmxvb2RPcGFjaXR5OiAwLFxuICBzdG9wT3BhY2l0eTogMCxcbiAgc3Ryb2tlRGFzaGFycmF5OiAwLFxuICBzdHJva2VEYXNob2Zmc2V0OiAwLFxuICBzdHJva2VNaXRlcmxpbWl0OiAwLFxuICBzdHJva2VPcGFjaXR5OiAwLFxuICBzdHJva2VXaWR0aDogMCxcbn07XG5cbi8qKlxuICogQHBhcmFtIHByZWZpeCB2ZW5kb3Itc3BlY2lmaWMgcHJlZml4LCBlZzogV2Via2l0XG4gKiBAcGFyYW0ga2V5IHN0eWxlIG5hbWUsIGVnOiB0cmFuc2l0aW9uRHVyYXRpb25cbiAqIEByZXR1cm4gc3R5bGUgbmFtZSBwcmVmaXhlZCB3aXRoIGBwcmVmaXhgLCBwcm9wZXJseSBjYW1lbENhc2VkLCBlZzpcbiAqIFdlYmtpdFRyYW5zaXRpb25EdXJhdGlvblxuICovXG5mdW5jdGlvbiBwcmVmaXhLZXkocHJlZml4LCBrZXkpIHtcbiAgcmV0dXJuIHByZWZpeCArIGtleS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIGtleS5zdWJzdHJpbmcoMSk7XG59XG5cbi8qKlxuICogU3VwcG9ydCBzdHlsZSBuYW1lcyB0aGF0IG1heSBjb21lIHBhc3NlZCBpbiBwcmVmaXhlZCBieSBhZGRpbmcgcGVybXV0YXRpb25zXG4gKiBvZiB2ZW5kb3IgcHJlZml4ZXMuXG4gKi9cbmNvbnN0IHByZWZpeGVzID0gW1wiV2Via2l0XCIsIFwibXNcIiwgXCJNb3pcIiwgXCJPXCJdO1xuLy8gVXNpbmcgT2JqZWN0LmtleXMgaGVyZSwgb3IgZWxzZSB0aGUgdmFuaWxsYSBmb3ItaW4gbG9vcCBtYWtlcyBJRTggZ28gaW50byBhblxuLy8gaW5maW5pdGUgbG9vcCwgYmVjYXVzZSBpdCBpdGVyYXRlcyBvdmVyIHRoZSBuZXdseSBhZGRlZCBwcm9wcyB0b28uXG5rZXlzKGlzVW5pdGxlc3NOdW1iZXIpLmZvckVhY2goKHByb3ApID0+IHtcbiAgcHJlZml4ZXMuZm9yRWFjaCgocHJlZml4KSA9PiB7XG4gICAgaXNVbml0bGVzc051bWJlcltwcmVmaXhLZXkocHJlZml4LCBwcm9wKV0gPSAwOyAvLyBpc1VuaXRsZXNzTnVtYmVyW3Byb3BdXG4gIH0pO1xufSk7XG5cbmNvbnN0IGpzeERvbVR5cGUgPSBTeW1ib2wuZm9yKFwianN4LWRvbTp0eXBlXCIpO1xudmFyIEpzeERvbVR5cGUgPSAvKiNfX1BVUkVfXyovIChmdW5jdGlvbiAoSnN4RG9tVHlwZSkge1xuICBKc3hEb21UeXBlW1wiU2hhZG93Um9vdFwiXSA9IFwiU2hhZG93Um9vdFwiO1xuICByZXR1cm4gSnN4RG9tVHlwZTtcbn0pKEpzeERvbVR5cGUgfHwge30pO1xuZnVuY3Rpb24gU2hhZG93Um9vdChfcmVmKSB7XG4gIGxldCB7IGNoaWxkcmVuLCByZWYsIC4uLmF0dHIgfSA9IF9yZWY7XG4gIHJldHVybiB7XG4gICAgW2pzeERvbVR5cGVdOiBKc3hEb21UeXBlLlNoYWRvd1Jvb3QsXG4gICAgcmVmLFxuICAgIGF0dHIsXG4gICAgY2hpbGRyZW4sXG4gIH07XG59XG5mdW5jdGlvbiBpc1NoYWRvd1Jvb3QoZWwpIHtcbiAgcmV0dXJuIGVsICE9IG51bGwgJiYgZWxbanN4RG9tVHlwZV0gPT09IEpzeERvbVR5cGUuU2hhZG93Um9vdDtcbn1cblxuY29uc3QgU1ZHTmFtZXNwYWNlID0gXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiO1xuY29uc3QgWExpbmtOYW1lc3BhY2UgPSBcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIjtcbmNvbnN0IFhNTE5hbWVzcGFjZSA9IFwiaHR0cDovL3d3dy53My5vcmcvWE1MLzE5OTgvbmFtZXNwYWNlXCI7XG5cbi8vIGh0dHBzOi8vZmFjZWJvb2suZ2l0aHViLmlvL3JlYWN0L2RvY3MvanN4LWluLWRlcHRoLmh0bWwjYm9vbGVhbnMtbnVsbC1hbmQtdW5kZWZpbmVkLWFyZS1pZ25vcmVkXG4vLyBFbXVsYXRlIEpTWCBFeHByZXNzaW9uIGxvZ2ljIHRvIGlnbm9yZSBjZXJ0YWluIHR5cGUgb2YgY2hpbGRyZW4gb3IgY2xhc3NOYW1lLlxuZnVuY3Rpb24gaXNWaXNpYmxlQ2hpbGQodmFsdWUpIHtcbiAgcmV0dXJuICFpc0Jvb2xlYW4odmFsdWUpICYmIHZhbHVlICE9IG51bGw7XG59XG5cbi8qKlxuICogQ29udmVydCBhIGB2YWx1ZWAgdG8gYSBjbGFzc05hbWUgc3RyaW5nLlxuICogYHZhbHVlYCBjYW4gYmUgYSBzdHJpbmcsIGFuIGFycmF5IG9yIGEgYERpY3Rpb25hcnk8Ym9vbGVhbj5gLlxuICovXG5mdW5jdGlvbiBjbGFzc05hbWUodmFsdWUpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgcmV0dXJuIHZhbHVlLm1hcChjbGFzc05hbWUpLmZpbHRlcihCb29sZWFuKS5qb2luKFwiIFwiKTtcbiAgfSBlbHNlIGlmIChpc09iamVjdCh2YWx1ZSkpIHtcbiAgICBpZiAoU3ltYm9sLml0ZXJhdG9yIGluIHZhbHVlKSB7XG4gICAgICByZXR1cm4gY2xhc3NOYW1lKEFycmF5LmZyb20odmFsdWUpKTtcbiAgICB9XG4gICAgcmV0dXJuIGtleXModmFsdWUpXG4gICAgICAuZmlsdGVyKChrKSA9PiB2YWx1ZVtrXSlcbiAgICAgIC5qb2luKFwiIFwiKTtcbiAgfSBlbHNlIGlmIChpc1Zpc2libGVDaGlsZCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gXCJcIiArIHZhbHVlO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBcIlwiO1xuICB9XG59XG5jb25zdCBzdmcgPSB7XG4gIGFuaW1hdGU6IDAsXG4gIGNpcmNsZTogMCxcbiAgY2xpcFBhdGg6IDAsXG4gIGRlZnM6IDAsXG4gIGRlc2M6IDAsXG4gIGVsbGlwc2U6IDAsXG4gIGZlQmxlbmQ6IDAsXG4gIGZlQ29sb3JNYXRyaXg6IDAsXG4gIGZlQ29tcG9uZW50VHJhbnNmZXI6IDAsXG4gIGZlQ29tcG9zaXRlOiAwLFxuICBmZUNvbnZvbHZlTWF0cml4OiAwLFxuICBmZURpZmZ1c2VMaWdodGluZzogMCxcbiAgZmVEaXNwbGFjZW1lbnRNYXA6IDAsXG4gIGZlRGlzdGFudExpZ2h0OiAwLFxuICBmZUZsb29kOiAwLFxuICBmZUZ1bmNBOiAwLFxuICBmZUZ1bmNCOiAwLFxuICBmZUZ1bmNHOiAwLFxuICBmZUZ1bmNSOiAwLFxuICBmZUdhdXNzaWFuQmx1cjogMCxcbiAgZmVJbWFnZTogMCxcbiAgZmVNZXJnZTogMCxcbiAgZmVNZXJnZU5vZGU6IDAsXG4gIGZlTW9ycGhvbG9neTogMCxcbiAgZmVPZmZzZXQ6IDAsXG4gIGZlUG9pbnRMaWdodDogMCxcbiAgZmVTcGVjdWxhckxpZ2h0aW5nOiAwLFxuICBmZVNwb3RMaWdodDogMCxcbiAgZmVUaWxlOiAwLFxuICBmZVR1cmJ1bGVuY2U6IDAsXG4gIGZpbHRlcjogMCxcbiAgZm9yZWlnbk9iamVjdDogMCxcbiAgZzogMCxcbiAgaW1hZ2U6IDAsXG4gIGxpbmU6IDAsXG4gIGxpbmVhckdyYWRpZW50OiAwLFxuICBtYXJrZXI6IDAsXG4gIG1hc2s6IDAsXG4gIG1ldGFkYXRhOiAwLFxuICBwYXRoOiAwLFxuICBwYXR0ZXJuOiAwLFxuICBwb2x5Z29uOiAwLFxuICBwb2x5bGluZTogMCxcbiAgcmFkaWFsR3JhZGllbnQ6IDAsXG4gIHJlY3Q6IDAsXG4gIHN0b3A6IDAsXG4gIHN2ZzogMCxcbiAgc3dpdGNoOiAwLFxuICBzeW1ib2w6IDAsXG4gIHRleHQ6IDAsXG4gIHRleHRQYXRoOiAwLFxuICB0c3BhbjogMCxcbiAgdXNlOiAwLFxuICB2aWV3OiAwLFxufTtcbmNvbnN0IG5vblByZXNlbnRhdGlvblNWR0F0dHJpYnV0ZXMgPVxuICAvXihhKGxsfHR8dSl8YmFzZVtGUF18YyhhbHxsaXBQYXRoVXxvbil8ZGl8ZWR8ZXh8ZmlsdGVyW1JVXXxnKGx5cGhSfHIpfGtlfGwoZW58aW0pfG1hKHJrZXJbSFVXXXxzKXxufHBhdHxwcnxwb2ludFteZV18cmVbXm5dfHNbcHV5XXxzdFteb3JdfHRhfHRleHRMfHZpfHhDfHl8eikvO1xuZnVuY3Rpb24gY3JlYXRlRmFjdG9yeSh0YWcpIHtcbiAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQuYmluZChudWxsLCB0YWcpO1xufVxuZnVuY3Rpb24gRnJhZ21lbnQoYXR0cikge1xuICBjb25zdCBmcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcbiAgYXBwZW5kQ2hpbGQoYXR0ci5jaGlsZHJlbiwgZnJhZ21lbnQpO1xuICByZXR1cm4gZnJhZ21lbnQ7XG59XG5jbGFzcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHRoaXMucHJvcHMgPSBwcm9wcztcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuLyogQF9fUFVSRV9fICovXG5PYmplY3QuZGVmaW5lUHJvcGVydGllcyhDb21wb25lbnQucHJvdG90eXBlLCB7XG4gIGlzUmVhY3RDb21wb25lbnQ6IHtcbiAgICB2YWx1ZTogdHJ1ZSxcbiAgfSxcbn0pO1xuZnVuY3Rpb24gaW5pdENvbXBvbmVudENsYXNzKENsYXNzLCBhdHRyLCBjaGlsZHJlbikge1xuICBhdHRyID0ge1xuICAgIC4uLmF0dHIsXG4gICAgY2hpbGRyZW4sXG4gIH07XG4gIGNvbnN0IGluc3RhbmNlID0gbmV3IENsYXNzKGF0dHIpO1xuICBjb25zdCBub2RlID0gaW5zdGFuY2UucmVuZGVyKCk7XG4gIGlmIChcInJlZlwiIGluIGF0dHIpIHtcbiAgICBhdHRhY2hSZWYoYXR0ci5yZWYsIGluc3RhbmNlKTtcbiAgfVxuICByZXR1cm4gbm9kZTtcbn1cblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuZnVuY3Rpb24ganN4KHRhZywgX3JlZikge1xuICBsZXQgeyBjaGlsZHJlbiwgLi4uYXR0ciB9ID0gX3JlZjtcbiAgaWYgKCFhdHRyLm5hbWVzcGFjZVVSSSAmJiBzdmdbdGFnXSA9PT0gMCkge1xuICAgIGF0dHIgPSB7XG4gICAgICAuLi5hdHRyLFxuICAgICAgbmFtZXNwYWNlVVJJOiBTVkdOYW1lc3BhY2UsXG4gICAgfTtcbiAgfVxuICBsZXQgbm9kZTtcbiAgaWYgKGlzU3RyaW5nKHRhZykpIHtcbiAgICBub2RlID0gYXR0ci5uYW1lc3BhY2VVUklcbiAgICAgID8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKGF0dHIubmFtZXNwYWNlVVJJLCB0YWcpXG4gICAgICA6IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnKTtcbiAgICBhdHRyaWJ1dGVzKGF0dHIsIG5vZGUpO1xuICAgIGFwcGVuZENoaWxkKGNoaWxkcmVuLCBub2RlKTtcblxuICAgIC8vIFNlbGVjdCBgb3B0aW9uYCBlbGVtZW50cyBpbiBgc2VsZWN0YFxuICAgIGlmIChub2RlIGluc3RhbmNlb2Ygd2luZG93LkhUTUxTZWxlY3RFbGVtZW50ICYmIGF0dHIudmFsdWUgIT0gbnVsbCkge1xuICAgICAgaWYgKGF0dHIubXVsdGlwbGUgPT09IHRydWUgJiYgQXJyYXkuaXNBcnJheShhdHRyLnZhbHVlKSkge1xuICAgICAgICBjb25zdCB2YWx1ZXMgPSBhdHRyLnZhbHVlLm1hcCgodmFsdWUpID0+IFN0cmluZyh2YWx1ZSkpO1xuICAgICAgICBub2RlXG4gICAgICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoXCJvcHRpb25cIilcbiAgICAgICAgICAuZm9yRWFjaChcbiAgICAgICAgICAgIChvcHRpb24pID0+IChvcHRpb24uc2VsZWN0ZWQgPSB2YWx1ZXMuaW5jbHVkZXMob3B0aW9uLnZhbHVlKSksXG4gICAgICAgICAgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5vZGUudmFsdWUgPSBhdHRyLnZhbHVlO1xuICAgICAgfVxuICAgIH1cbiAgICBhdHRhY2hSZWYoYXR0ci5yZWYsIG5vZGUpO1xuICB9IGVsc2UgaWYgKGlzRnVuY3Rpb24odGFnKSkge1xuICAgIC8vIEN1c3RvbSBlbGVtZW50cy5cbiAgICBpZiAoaXNPYmplY3QodGFnLmRlZmF1bHRQcm9wcykpIHtcbiAgICAgIGF0dHIgPSB7XG4gICAgICAgIC4uLnRhZy5kZWZhdWx0UHJvcHMsXG4gICAgICAgIC4uLmF0dHIsXG4gICAgICB9O1xuICAgIH1cbiAgICBub2RlID0gaXNDb21wb25lbnRDbGFzcyh0YWcpXG4gICAgICA/IGluaXRDb21wb25lbnRDbGFzcyh0YWcsIGF0dHIsIGNoaWxkcmVuKVxuICAgICAgOiB0YWcoe1xuICAgICAgICAgIC4uLmF0dHIsXG4gICAgICAgICAgY2hpbGRyZW4sXG4gICAgICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYEludmFsaWQgSlNYIGVsZW1lbnQgdHlwZTogJHt0YWd9YCk7XG4gIH1cbiAgcmV0dXJuIG5vZGU7XG59XG5mdW5jdGlvbiBjcmVhdGVFbGVtZW50KHRhZywgYXR0cikge1xuICBmb3IgKFxuICAgIHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCxcbiAgICAgIGNoaWxkcmVuID0gbmV3IEFycmF5KF9sZW4gPiAyID8gX2xlbiAtIDIgOiAwKSxcbiAgICAgIF9rZXkyID0gMjtcbiAgICBfa2V5MiA8IF9sZW47XG4gICAgX2tleTIrK1xuICApIHtcbiAgICBjaGlsZHJlbltfa2V5MiAtIDJdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgfVxuICBpZiAoaXNTdHJpbmcoYXR0cikgfHwgQXJyYXkuaXNBcnJheShhdHRyKSkge1xuICAgIGNoaWxkcmVuLnVuc2hpZnQoYXR0cik7XG4gICAgYXR0ciA9IHt9O1xuICB9XG4gIGF0dHIgPSBhdHRyIHx8IHt9O1xuICBpZiAoYXR0ci5jaGlsZHJlbiAhPSBudWxsICYmICFjaGlsZHJlbi5sZW5ndGgpIHtcbiAgICAoeyBjaGlsZHJlbiwgLi4uYXR0ciB9ID0gYXR0cik7XG4gIH1cbiAgcmV0dXJuIGpzeChcbiAgICB0YWcsXG4gICAge1xuICAgICAgLi4uYXR0cixcbiAgICAgIGNoaWxkcmVuLFxuICAgIH0sXG4gICAgYXR0ci5rZXksXG4gICk7XG59XG5mdW5jdGlvbiBhdHRhY2hSZWYocmVmLCBub2RlKSB7XG4gIGlmIChpc1JlZihyZWYpKSB7XG4gICAgcmVmLmN1cnJlbnQgPSBub2RlO1xuICB9IGVsc2UgaWYgKGlzRnVuY3Rpb24ocmVmKSkge1xuICAgIHJlZihub2RlKTtcbiAgfVxufVxuZnVuY3Rpb24gYXBwZW5kQ2hpbGQoY2hpbGQsIG5vZGUpIHtcbiAgaWYgKGlzQXJyYXlMaWtlKGNoaWxkKSkge1xuICAgIGFwcGVuZENoaWxkcmVuKGNoaWxkLCBub2RlKTtcbiAgfSBlbHNlIGlmIChpc1N0cmluZyhjaGlsZCkgfHwgaXNOdW1iZXIoY2hpbGQpKSB7XG4gICAgYXBwZW5kQ2hpbGRUb05vZGUoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY2hpbGQpLCBub2RlKTtcbiAgfSBlbHNlIGlmIChjaGlsZCA9PT0gbnVsbCkge1xuICAgIGFwcGVuZENoaWxkVG9Ob2RlKGRvY3VtZW50LmNyZWF0ZUNvbW1lbnQoXCJcIiksIG5vZGUpO1xuICB9IGVsc2UgaWYgKGlzRWxlbWVudChjaGlsZCkpIHtcbiAgICBhcHBlbmRDaGlsZFRvTm9kZShjaGlsZCwgbm9kZSk7XG4gIH0gZWxzZSBpZiAoaXNTaGFkb3dSb290KGNoaWxkKSkge1xuICAgIGNvbnN0IHNoYWRvd1Jvb3QgPSBub2RlLmF0dGFjaFNoYWRvdyhjaGlsZC5hdHRyKTtcbiAgICBhcHBlbmRDaGlsZChjaGlsZC5jaGlsZHJlbiwgc2hhZG93Um9vdCk7XG4gICAgYXR0YWNoUmVmKGNoaWxkLnJlZiwgc2hhZG93Um9vdCk7XG4gIH1cbn1cbmZ1bmN0aW9uIGFwcGVuZENoaWxkcmVuKGNoaWxkcmVuLCBub2RlKSB7XG4gIGZvciAoY29uc3QgY2hpbGQgb2YgWy4uLmNoaWxkcmVuXSkge1xuICAgIGFwcGVuZENoaWxkKGNoaWxkLCBub2RlKTtcbiAgfVxuICByZXR1cm4gbm9kZTtcbn1cbmZ1bmN0aW9uIGFwcGVuZENoaWxkVG9Ob2RlKGNoaWxkLCBub2RlKSB7XG4gIGlmIChub2RlIGluc3RhbmNlb2Ygd2luZG93LkhUTUxUZW1wbGF0ZUVsZW1lbnQpIHtcbiAgICBub2RlLmNvbnRlbnQuYXBwZW5kQ2hpbGQoY2hpbGQpO1xuICB9IGVsc2Uge1xuICAgIG5vZGUuYXBwZW5kQ2hpbGQoY2hpbGQpO1xuICB9XG59XG5mdW5jdGlvbiBub3JtYWxpemVBdHRyaWJ1dGUocywgc2VwYXJhdG9yKSB7XG4gIHJldHVybiBzLnJlcGxhY2UoL1tBLVpdL2csIChtYXRjaCkgPT4gc2VwYXJhdG9yICsgbWF0Y2gudG9Mb3dlckNhc2UoKSk7XG59XG5mdW5jdGlvbiBzdHlsZShub2RlLCB2YWx1ZSkge1xuICBpZiAodmFsdWUgPT0gbnVsbCB8fCB2YWx1ZSA9PT0gZmFsc2UpO1xuICBlbHNlIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgIHZhbHVlLmZvckVhY2goKHYpID0+IHN0eWxlKG5vZGUsIHYpKTtcbiAgfSBlbHNlIGlmIChpc1N0cmluZyh2YWx1ZSkpIHtcbiAgICBub2RlLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIHZhbHVlKTtcbiAgfSBlbHNlIGlmIChpc09iamVjdCh2YWx1ZSkpIHtcbiAgICBmb3JFYWNoKHZhbHVlLCAodmFsLCBrZXkpID0+IHtcbiAgICAgIGlmIChrZXkuaW5kZXhPZihcIi1cIikgPT09IDApIHtcbiAgICAgICAgLy8gQ1NTIGN1c3RvbSBwcm9wZXJ0aWVzICh2YXJpYWJsZXMpIHN0YXJ0IHdpdGggYC1gIChlLmcuIGAtLW15LXZhcmlhYmxlYClcbiAgICAgICAgLy8gYW5kIG11c3QgYmUgYXNzaWduZWQgdmlhIGBzZXRQcm9wZXJ0eWAuXG4gICAgICAgIG5vZGUuc3R5bGUuc2V0UHJvcGVydHkoa2V5LCB2YWwpO1xuICAgICAgfSBlbHNlIGlmIChpc051bWJlcih2YWwpICYmIGlzVW5pdGxlc3NOdW1iZXJba2V5XSAhPT0gMCkge1xuICAgICAgICBub2RlLnN0eWxlW2tleV0gPSB2YWwgKyBcInB4XCI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBub2RlLnN0eWxlW2tleV0gPSB2YWw7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cbmZ1bmN0aW9uIGF0dHJpYnV0ZShrZXksIHZhbHVlLCBub2RlKSB7XG4gIHN3aXRjaCAoa2V5KSB7XG4gICAgY2FzZSBcInhsaW5rQWN0dWF0ZVwiOlxuICAgIGNhc2UgXCJ4bGlua0FyY3JvbGVcIjpcbiAgICBjYXNlIFwieGxpbmtIcmVmXCI6XG4gICAgY2FzZSBcInhsaW5rUm9sZVwiOlxuICAgIGNhc2UgXCJ4bGlua1Nob3dcIjpcbiAgICBjYXNlIFwieGxpbmtUaXRsZVwiOlxuICAgIGNhc2UgXCJ4bGlua1R5cGVcIjpcbiAgICAgIGF0dHJOUyhub2RlLCBYTGlua05hbWVzcGFjZSwgbm9ybWFsaXplQXR0cmlidXRlKGtleSwgXCI6XCIpLCB2YWx1ZSk7XG4gICAgICByZXR1cm47XG4gICAgY2FzZSBcInhtbG5zWGxpbmtcIjpcbiAgICAgIGF0dHIobm9kZSwgbm9ybWFsaXplQXR0cmlidXRlKGtleSwgXCI6XCIpLCB2YWx1ZSk7XG4gICAgICByZXR1cm47XG4gICAgY2FzZSBcInhtbEJhc2VcIjpcbiAgICBjYXNlIFwieG1sTGFuZ1wiOlxuICAgIGNhc2UgXCJ4bWxTcGFjZVwiOlxuICAgICAgYXR0ck5TKG5vZGUsIFhNTE5hbWVzcGFjZSwgbm9ybWFsaXplQXR0cmlidXRlKGtleSwgXCI6XCIpLCB2YWx1ZSk7XG4gICAgICByZXR1cm47XG4gIH1cbiAgc3dpdGNoIChrZXkpIHtcbiAgICBjYXNlIFwiaHRtbEZvclwiOlxuICAgICAgYXR0cihub2RlLCBcImZvclwiLCB2YWx1ZSk7XG4gICAgICByZXR1cm47XG4gICAgY2FzZSBcImRhdGFzZXRcIjpcbiAgICAgIGZvckVhY2godmFsdWUsIChkYXRhVmFsdWUsIGRhdGFLZXkpID0+IHtcbiAgICAgICAgaWYgKGRhdGFWYWx1ZSAhPSBudWxsKSB7XG4gICAgICAgICAgbm9kZS5kYXRhc2V0W2RhdGFLZXldID0gZGF0YVZhbHVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHJldHVybjtcbiAgICBjYXNlIFwiaW5uZXJIVE1MXCI6XG4gICAgY2FzZSBcImlubmVyVGV4dFwiOlxuICAgIGNhc2UgXCJ0ZXh0Q29udGVudFwiOlxuICAgICAgaWYgKGlzVmlzaWJsZUNoaWxkKHZhbHVlKSkge1xuICAgICAgICBub2RlW2tleV0gPSB2YWx1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybjtcbiAgICBjYXNlIFwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUxcIjpcbiAgICAgIGlmIChpc09iamVjdCh2YWx1ZSkpIHtcbiAgICAgICAgbm9kZS5pbm5lckhUTUwgPSB2YWx1ZVtcIl9faHRtbFwiXTtcbiAgICAgIH1cbiAgICAgIHJldHVybjtcbiAgICBjYXNlIFwidmFsdWVcIjpcbiAgICAgIGlmICh2YWx1ZSA9PSBudWxsIHx8IG5vZGUgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTFNlbGVjdEVsZW1lbnQpIHtcbiAgICAgICAgLy8gc2tpcCBudWxsaXNoIHZhbHVlc1xuICAgICAgICAvLyBmb3IgYDxzZWxlY3Q+YCBhcHBseSB2YWx1ZSBhZnRlciBhcHBlbmRpbmcgYDxvcHRpb24+YCBlbGVtZW50c1xuICAgICAgICByZXR1cm47XG4gICAgICB9IGVsc2UgaWYgKG5vZGUgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTFRleHRBcmVhRWxlbWVudCkge1xuICAgICAgICBub2RlLnZhbHVlID0gdmFsdWU7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIC8vIHVzZSBhdHRyaWJ1dGUgZm9yIG90aGVyIGVsZW1lbnRzXG4gICAgICBicmVhaztcbiAgICBjYXNlIFwic3BlbGxDaGVja1wiOlxuICAgICAgbm9kZS5zcGVsbGNoZWNrID0gdmFsdWU7XG4gICAgICByZXR1cm47XG4gICAgY2FzZSBcImNsYXNzXCI6XG4gICAgY2FzZSBcImNsYXNzTmFtZVwiOlxuICAgICAgaWYgKGlzRnVuY3Rpb24odmFsdWUpKSB7XG4gICAgICAgIHZhbHVlKG5vZGUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYXR0cihub2RlLCBcImNsYXNzXCIsIGNsYXNzTmFtZSh2YWx1ZSkpO1xuICAgICAgfVxuICAgICAgcmV0dXJuO1xuICAgIGNhc2UgXCJyZWZcIjpcbiAgICBjYXNlIFwibmFtZXNwYWNlVVJJXCI6XG4gICAgICByZXR1cm47XG4gICAgY2FzZSBcInN0eWxlXCI6XG4gICAgICBzdHlsZShub2RlLCB2YWx1ZSk7XG4gICAgICByZXR1cm47XG4gICAgY2FzZSBcIm9uXCI6XG4gICAgY2FzZSBcIm9uQ2FwdHVyZVwiOlxuICAgICAgZm9yRWFjaCh2YWx1ZSwgKGV2ZW50SGFuZGxlciwgZXZlbnROYW1lKSA9PiB7XG4gICAgICAgIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGV2ZW50SGFuZGxlciwga2V5ID09PSBcIm9uQ2FwdHVyZVwiKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIC8vIGZhbGx0aHJvdWdoXG4gIH1cbiAgaWYgKGlzRnVuY3Rpb24odmFsdWUpKSB7XG4gICAgaWYgKGtleVswXSA9PT0gXCJvXCIgJiYga2V5WzFdID09PSBcIm5cIikge1xuICAgICAgbGV0IGF0dHJpYnV0ZSA9IGtleS50b0xvd2VyQ2FzZSgpO1xuICAgICAgY29uc3QgdXNlQ2FwdHVyZSA9IGF0dHJpYnV0ZS5lbmRzV2l0aChcImNhcHR1cmVcIik7XG4gICAgICBpZiAoYXR0cmlidXRlID09PSBcIm9uZG91YmxlY2xpY2tcIikge1xuICAgICAgICBhdHRyaWJ1dGUgPSBcIm9uZGJsY2xpY2tcIjtcbiAgICAgIH0gZWxzZSBpZiAodXNlQ2FwdHVyZSAmJiBhdHRyaWJ1dGUgPT09IFwib25kb3VibGVjbGlja2NhcHR1cmVcIikge1xuICAgICAgICBhdHRyaWJ1dGUgPSBcIm9uZGJsY2xpY2tjYXB0dXJlXCI7XG4gICAgICB9XG4gICAgICBpZiAoIXVzZUNhcHR1cmUgJiYgbm9kZVthdHRyaWJ1dGVdID09PSBudWxsKSB7XG4gICAgICAgIC8vIHVzZSBwcm9wZXJ0eSB3aGVuIHBvc3NpYmxlIFBSICMxN1xuICAgICAgICBub2RlW2F0dHJpYnV0ZV0gPSB2YWx1ZTtcbiAgICAgIH0gZWxzZSBpZiAodXNlQ2FwdHVyZSkge1xuICAgICAgICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgYXR0cmlidXRlLnN1YnN0cmluZygyLCBhdHRyaWJ1dGUubGVuZ3RoIC0gNyksXG4gICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgdHJ1ZSxcbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCBldmVudE5hbWU7XG4gICAgICAgIGlmIChhdHRyaWJ1dGUgaW4gd2luZG93KSB7XG4gICAgICAgICAgLy8gc3RhbmRhcmQgZXZlbnRcbiAgICAgICAgICAvLyB0aGUgSlNYIGF0dHJpYnV0ZSBjb3VsZCBoYXZlIGJlZW4gXCJvbk1vdXNlT3ZlclwiIGFuZCB0aGVcbiAgICAgICAgICAvLyBtZW1iZXIgbmFtZSBcIm9ubW91c2VvdmVyXCIgaXMgb24gdGhlIHdpbmRvdydzIHByb3RvdHlwZVxuICAgICAgICAgIC8vIHNvIGxldCdzIGFkZCB0aGUgbGlzdGVuZXIgXCJtb3VzZW92ZXJcIiwgd2hpY2ggaXMgYWxsIGxvd2VyY2FzZWRcbiAgICAgICAgICBjb25zdCBzdGFuZGFyZEV2ZW50TmFtZSA9IGF0dHJpYnV0ZS5zdWJzdHJpbmcoMik7XG4gICAgICAgICAgZXZlbnROYW1lID0gc3RhbmRhcmRFdmVudE5hbWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gY3VzdG9tIGV2ZW50XG4gICAgICAgICAgLy8gdGhlIEpTWCBhdHRyaWJ1dGUgY291bGQgaGF2ZSBiZWVuIFwib25NeUN1c3RvbUV2ZW50XCJcbiAgICAgICAgICAvLyBzbyBsZXQncyB0cmltIG9mZiB0aGUgXCJvblwiIHByZWZpeCBhbmQgbG93ZXJjYXNlIHRoZSBmaXJzdCBjaGFyYWN0ZXJcbiAgICAgICAgICAvLyBhbmQgYWRkIHRoZSBsaXN0ZW5lciBcIm15Q3VzdG9tRXZlbnRcIlxuICAgICAgICAgIC8vIGV4Y2VwdCBmb3IgdGhlIGZpcnN0IGNoYXJhY3Rlciwgd2Uga2VlcCB0aGUgZXZlbnQgbmFtZSBjYXNlXG4gICAgICAgICAgY29uc3QgY3VzdG9tRXZlbnROYW1lID0gYXR0cmlidXRlWzJdICsga2V5LnNsaWNlKDMpO1xuICAgICAgICAgIGV2ZW50TmFtZSA9IGN1c3RvbUV2ZW50TmFtZTtcbiAgICAgICAgfVxuICAgICAgICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCB2YWx1ZSk7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2UgaWYgKGlzT2JqZWN0KHZhbHVlKSkge1xuICAgIG5vZGVba2V5XSA9IHZhbHVlO1xuICB9IGVsc2UgaWYgKHZhbHVlID09PSB0cnVlKSB7XG4gICAgYXR0cihub2RlLCBrZXksIFwiXCIpO1xuICB9IGVsc2UgaWYgKHZhbHVlICE9PSBmYWxzZSAmJiB2YWx1ZSAhPSBudWxsKSB7XG4gICAgaWYgKG5vZGUgaW5zdGFuY2VvZiBTVkdFbGVtZW50ICYmICFub25QcmVzZW50YXRpb25TVkdBdHRyaWJ1dGVzLnRlc3Qoa2V5KSkge1xuICAgICAgYXR0cihub2RlLCBub3JtYWxpemVBdHRyaWJ1dGUoa2V5LCBcIi1cIiksIHZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXR0cihub2RlLCBrZXksIHZhbHVlKTtcbiAgICB9XG4gIH1cbn1cbmZ1bmN0aW9uIGF0dHIobm9kZSwga2V5LCB2YWx1ZSkge1xuICBub2RlLnNldEF0dHJpYnV0ZShrZXksIHZhbHVlKTtcbn1cbmZ1bmN0aW9uIGF0dHJOUyhub2RlLCBuYW1lc3BhY2UsIGtleSwgdmFsdWUpIHtcbiAgbm9kZS5zZXRBdHRyaWJ1dGVOUyhuYW1lc3BhY2UsIGtleSwgdmFsdWUpO1xufVxuZnVuY3Rpb24gYXR0cmlidXRlcyhhdHRyLCBub2RlKSB7XG4gIGZvciAoY29uc3Qga2V5IG9mIGtleXMoYXR0cikpIHtcbiAgICBhdHRyaWJ1dGUoa2V5LCBhdHRyW2tleV0sIG5vZGUpO1xuICB9XG4gIHJldHVybiBub2RlO1xufVxuXG5mdW5jdGlvbiB1c2VUZXh0KGluaXRpYWxWYWx1ZSkge1xuICBjb25zdCB0ZXh0ID0gbmV3IFRleHQoKTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRleHQsIFwidG9TdHJpbmdcIiwge1xuICAgIHZhbHVlKCkge1xuICAgICAgcmV0dXJuIHRoaXMudGV4dENvbnRlbnQ7XG4gICAgfSxcbiAgfSk7XG4gIGZ1bmN0aW9uIHNldFRleHQodmFsdWUpIHtcbiAgICB0ZXh0LnRleHRDb250ZW50ID0gdmFsdWU7XG4gIH1cbiAgaWYgKGluaXRpYWxWYWx1ZSAhPSBudWxsKSB7XG4gICAgc2V0VGV4dChpbml0aWFsVmFsdWUpO1xuICB9XG4gIHJldHVybiBbdGV4dCwgc2V0VGV4dF07XG59XG5mdW5jdGlvbiB1c2VDbGFzc0xpc3QoaW5pdGlhbFZhbHVlKSB7XG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGlmIChpbml0aWFsVmFsdWUgIT0gbnVsbCkge1xuICAgIGRpdi5jbGFzc05hbWUgPSBjbGFzc05hbWUoaW5pdGlhbFZhbHVlKTtcbiAgfVxuICBsZXQgbGlzdCA9IGRpdi5jbGFzc0xpc3Q7XG4gIGZ1bmN0aW9uIENsYXNzTGlzdCh2YWx1ZSkge1xuICAgIHZhbHVlLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIGxpc3QudmFsdWUpO1xuICAgIGxpc3QgPSB2YWx1ZS5jbGFzc0xpc3Q7XG4gIH1cbiAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoXG4gICAgQ2xhc3NMaXN0LFxuICAgIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHtcbiAgICAgIGdldCBzaXplKCkge1xuICAgICAgICByZXR1cm4gbGlzdC5sZW5ndGg7XG4gICAgICB9LFxuICAgICAgZ2V0IHZhbHVlKCkge1xuICAgICAgICByZXR1cm4gbGlzdC52YWx1ZTtcbiAgICAgIH0sXG4gICAgICBhZGQoKSB7XG4gICAgICAgIGxpc3QuYWRkKC4uLmFyZ3VtZW50cyk7XG4gICAgICB9LFxuICAgICAgcmVtb3ZlKCkge1xuICAgICAgICBsaXN0LnJlbW92ZSguLi5hcmd1bWVudHMpO1xuICAgICAgfSxcbiAgICAgIHRvZ2dsZSh0b2tlbiwgZm9yY2UpIHtcbiAgICAgICAgbGlzdC50b2dnbGUodG9rZW4sIGZvcmNlKTtcbiAgICAgIH0sXG4gICAgICBjb250YWlucyh0b2tlbikge1xuICAgICAgICByZXR1cm4gbGlzdC5jb250YWlucyh0b2tlbik7XG4gICAgICB9LFxuICAgIH0pLFxuICApO1xuICByZXR1cm4gQ2xhc3NMaXN0O1xufVxuXG5mdW5jdGlvbiB1c2VNZW1vKGZhY3RvcnkpIHtcbiAgcmV0dXJuIGZhY3RvcnkoKTtcbn1cbmZ1bmN0aW9uIGZvcndhcmRSZWYocmVuZGVyKSB7XG4gIHJldHVybiAoX3JlZikgPT4ge1xuICAgIGxldCB7IHJlZiwgLi4ucHJvcHMgfSA9IF9yZWY7XG4gICAgcmV0dXJuIHJlbmRlcihwcm9wcywgcmVmID8/IGNyZWF0ZVJlZigpKTtcbiAgfTtcbn1cbmZ1bmN0aW9uIHVzZUltcGVyYXRpdmVIYW5kbGUocmVmLCBpbml0KSB7XG4gIGF0dGFjaFJlZihyZWYsIGluaXQoKSk7XG59XG5cbmNvbnN0IGNhY2hlID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKTtcbmNvbnN0IGNyZWF0ZVN0eWxlZENvbXBvbmVudCA9IChuYW1lKSA9PlxuICBmdW5jdGlvbiAobGlzdCkge1xuICAgIGZvciAoXG4gICAgICB2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsXG4gICAgICAgIGludGVycG9sYXRpb25zID0gbmV3IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSxcbiAgICAgICAgX2tleSA9IDE7XG4gICAgICBfa2V5IDwgX2xlbjtcbiAgICAgIF9rZXkrK1xuICAgICkge1xuICAgICAgaW50ZXJwb2xhdGlvbnNbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cbiAgICByZXR1cm4gKF9yZWYpID0+IHtcbiAgICAgIGxldCB7IHN0eWxlLCAuLi5wcm9wcyB9ID0gX3JlZjtcbiAgICAgIGNvbnN0IGxhc3RJbmRleCA9IGxpc3QubGVuZ3RoIC0gMTtcbiAgICAgIGNvbnN0IGNzcyA9XG4gICAgICAgIGxpc3Quc2xpY2UoMCwgbGFzdEluZGV4KS5yZWR1Y2UoKHAsIHMsIGkpID0+IHtcbiAgICAgICAgICBjb25zdCBpbnRlcnBvbGF0aW9uID0gaW50ZXJwb2xhdGlvbnNbaV07XG4gICAgICAgICAgY29uc3QgY3VycmVudCA9XG4gICAgICAgICAgICB0eXBlb2YgaW50ZXJwb2xhdGlvbiA9PT0gXCJmdW5jdGlvblwiXG4gICAgICAgICAgICAgID8gaW50ZXJwb2xhdGlvbihwcm9wcylcbiAgICAgICAgICAgICAgOiBpbnRlcnBvbGF0aW9uO1xuICAgICAgICAgIHJldHVybiBwICsgcyArIGN1cnJlbnQ7XG4gICAgICAgIH0sIFwiXCIpICsgbGlzdFtsYXN0SW5kZXhdO1xuICAgICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQobmFtZSwge1xuICAgICAgICBzdHlsZTogW2Nzcywgc3R5bGVdLFxuICAgICAgICAuLi5wcm9wcyxcbiAgICAgIH0pO1xuICAgIH07XG4gIH07XG5jb25zdCBiYXNlU3R5bGVkID0gKGN1c3RvbUNvbXBvbmVudCkgPT4gY3JlYXRlU3R5bGVkQ29tcG9uZW50KGN1c3RvbUNvbXBvbmVudCk7XG5jb25zdCBzdHlsZWQgPSAvKiBAX19QVVJFX18gKi8gbmV3IFByb3h5KGJhc2VTdHlsZWQsIHtcbiAgZ2V0KF8sIG5hbWUpIHtcbiAgICByZXR1cm4gc2V0SWZBYnNlbnQoY2FjaGUsIG5hbWUsICgpID0+IGNyZWF0ZVN0eWxlZENvbXBvbmVudChuYW1lKSk7XG4gIH0sXG59KTtcbmZ1bmN0aW9uIHNldElmQWJzZW50KG1hcCwga2V5LCBnZXRWYWx1ZSkge1xuICBpZiAobWFwLmhhcyhrZXkpKSB7XG4gICAgcmV0dXJuIG1hcC5nZXQoa2V5KTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCB2YWx1ZSA9IGdldFZhbHVlKGtleSk7XG4gICAgbWFwLnNldChrZXksIHZhbHVlKTtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbn1cblxudmFyIGluZGV4ID0ge1xuICBDb21wb25lbnQsXG4gIFB1cmVDb21wb25lbnQ6IENvbXBvbmVudCxcbiAgY3JlYXRlRWxlbWVudCxcbiAgRnJhZ21lbnQsXG4gIFNoYWRvd1Jvb3QsXG59O1xuZnVuY3Rpb24gcHJldmVudERlZmF1bHQoZXZlbnQpIHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgcmV0dXJuIGV2ZW50O1xufVxuZnVuY3Rpb24gc3RvcFByb3BhZ2F0aW9uKGV2ZW50KSB7XG4gIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICByZXR1cm4gZXZlbnQ7XG59XG5cbmV4cG9ydCB7XG4gIENvbXBvbmVudCxcbiAgRnJhZ21lbnQsXG4gIENvbXBvbmVudCBhcyBQdXJlQ29tcG9uZW50LFxuICBTVkdOYW1lc3BhY2UsXG4gIFNoYWRvd1Jvb3QsXG4gIEZyYWdtZW50IGFzIFN0cmljdE1vZGUsXG4gIGNsYXNzTmFtZSxcbiAgY3JlYXRlRWxlbWVudCxcbiAgY3JlYXRlRmFjdG9yeSxcbiAgY3JlYXRlUmVmLFxuICBpbmRleCBhcyBkZWZhdWx0LFxuICBmb3J3YXJkUmVmLFxuICBjcmVhdGVFbGVtZW50IGFzIGgsXG4gIGlzUmVmLFxuICBqc3gsXG4gIGpzeCBhcyBqc3hzLFxuICBpZGVudGl0eSBhcyBtZW1vLFxuICBwcmV2ZW50RGVmYXVsdCxcbiAgc3RvcFByb3BhZ2F0aW9uLFxuICBzdHlsZWQsXG4gIGlkZW50aXR5IGFzIHVzZUNhbGxiYWNrLFxuICB1c2VDbGFzc0xpc3QsXG4gIHVzZUltcGVyYXRpdmVIYW5kbGUsXG4gIHVzZU1lbW8sXG4gIGNyZWF0ZVJlZiBhcyB1c2VSZWYsXG4gIHVzZVRleHQsXG59O1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUEsS0FBQyxXQUFVO0FBQUMsZUFBUyxJQUFHO0FBQUMsaUJBQVMsSUFBRztBQUFDLGlCQUFPO0FBQUEsUUFBSTtBQUFDLGlCQUFTLEVBQUUsR0FBRTtBQUFDLGlCQUFPLElBQUUsYUFBVyxPQUFPLEtBQUcsZUFBYSxPQUFPLElBQUU7QUFBQSxRQUFFO0FBQUMsaUJBQVMsRUFBRSxHQUFFO0FBQUMsY0FBRyxTQUFPLEtBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxPQUFNLElBQUksVUFBVSxxREFBbUQsQ0FBQztBQUFBLFFBQUU7QUFBQyxZQUFJLElBQUUsTUFBSyxJQUFFLFFBQU8sSUFBRSxDQUFDLENBQUMsRUFBRSxVQUFRLEVBQUUsRUFBQyxXQUFVLEtBQUksYUFBWSxJQUFHLElBQUUsRUFBRSxXQUFTLElBQUUsU0FBUyxHQUFFO0FBQUMsWUFBRSxDQUFDO0FBQUUsaUJBQU0sRUFBQyxXQUFVLEVBQUM7QUFBQSxRQUFD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R3NQLE1BQU07QUFDM0MsWUFBTUMsZ0JBQWdCUixlQUFlTyxDQUFDO0FBQ3RDLFlBQU05TyxVQUNKLE9BQU8rTyxrQkFBa0IsYUFDckJBLGNBQWN0RyxLQUFLLElBQ25Cc0c7QUFDTixhQUFPRixJQUFJclAsSUFBSVE7SUFDakIsR0FBRyxFQUFFLElBQUlzTixLQUFLb0IsU0FBUztBQUN6QixXQUFPL1IsY0FBYzJSLE1BQU07TUFDekJsRCxPQUFPLENBQUN1RCxLQUFLRixNQUFLO01BQ2xCLEdBQUdoRztJQUNMLENBQUM7RUFDSDtBQUNGO0FBQ0YsSUFBTXVHLGFBQWNDLHFCQUFvQlosc0JBQXNCWSxlQUFlO0FBQzdFLElBQU0xUixTQUF5QixvQkFBSTJSLE1BQU1GLFlBQVk7RUFDbkRHLElBQUlDLEdBQUdkLE1BQU07QUFDWCxXQUFPZSxZQUFZbEIsT0FBT0csTUFBTSxNQUFNRCxzQkFBc0JDLElBQUksQ0FBQztFQUNuRTtBQUNGLENBQUM7QUFDRCxTQUFTZSxZQUFZaEwsS0FBSzFFLEtBQUsyUCxVQUFVO0FBQ3ZDLE1BQUlqTCxJQUFJa0wsSUFBSTVQLEdBQUcsR0FBRztBQUNoQixXQUFPMEUsSUFBSThLLElBQUl4UCxHQUFHO0VBQ3BCLE9BQU87QUFDTCxVQUFNeEIsUUFBUW1SLFNBQVMzUCxHQUFHO0FBQzFCMEUsUUFBSW1MLElBQUk3UCxLQUFLeEIsS0FBSztBQUNsQixXQUFPQTtFQUNUO0FBQ0Y7QUFTQSxTQUFTZCxlQUFlb1MsT0FBTztBQUM3QkEsUUFBTXBTLGVBQWU7QUFDckIsU0FBT29TO0FBQ1Q7QUFDQSxTQUFTblMsZ0JBQWdCbVMsT0FBTztBQUM5QkEsUUFBTW5TLGdCQUFnQjtBQUN0QixTQUFPbVM7QUFDVDsiLAogICJuYW1lcyI6IFsiUmVhY3RfZXhwb3J0cyIsICJfX2V4cG9ydCIsICJDb21wb25lbnQiLCAiRnJhZ21lbnQiLCAiUHVyZUNvbXBvbmVudCIsICJTVkdOYW1lc3BhY2UiLCAiU2hhZG93Um9vdCIsICJTdHJpY3RNb2RlIiwgImNsYXNzTmFtZSIsICJjcmVhdGVFbGVtZW50IiwgImNyZWF0ZUZhY3RvcnkiLCAiY3JlYXRlUmVmIiwgImZvcndhcmRSZWYiLCAiaCIsICJpc1JlZiIsICJqc3giLCAianN4cyIsICJtZW1vIiwgImlkZW50aXR5IiwgInByZXZlbnREZWZhdWx0IiwgInN0b3BQcm9wYWdhdGlvbiIsICJzdHlsZWQiLCAidXNlQ2FsbGJhY2siLCAidXNlQ2xhc3NMaXN0IiwgInVzZUltcGVyYXRpdmVIYW5kbGUiLCAidXNlTWVtbyIsICJ1c2VSZWYiLCAidXNlVGV4dCIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJfX3RvQ29tbW9uSlMiLCAia2V5cyIsICJPYmplY3QiLCAidmFsdWUiLCAiaXNCb29sZWFuIiwgInZhbCIsICJpc0VsZW1lbnQiLCAibm9kZVR5cGUiLCAiaXNTdHJpbmciLCAiaXNOdW1iZXIiLCAiaXNPYmplY3QiLCAiaXNGdW5jdGlvbiIsICJpc0NvbXBvbmVudENsYXNzIiwgIkNvbXBvbmVudDIiLCAicHJvdG90eXBlIiwgImlzUmVhY3RDb21wb25lbnQiLCAiaXNBcnJheUxpa2UiLCAib2JqIiwgImxlbmd0aCIsICJmb3JFYWNoIiwgImZuIiwgIl9pdGVyYXRvcjIiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAiX3N0ZXAyIiwgInMiLCAibiIsICJkb25lIiwgImtleSIsICJlcnIiLCAiZSIsICJmIiwgInNlYWwiLCAiY3VycmVudCIsICJtYXliZVJlZiIsICJpc1VuaXRsZXNzTnVtYmVyIiwgImFuaW1hdGlvbkl0ZXJhdGlvbkNvdW50IiwgImJvcmRlckltYWdlT3V0c2V0IiwgImJvcmRlckltYWdlU2xpY2UiLCAiYm9yZGVySW1hZ2VXaWR0aCIsICJib3hGbGV4IiwgImJveEZsZXhHcm91cCIsICJib3hPcmRpbmFsR3JvdXAiLCAiY29sdW1uQ291bnQiLCAiY29sdW1ucyIsICJmbGV4IiwgImZsZXhHcm93IiwgImZsZXhQb3NpdGl2ZSIsICJmbGV4U2hyaW5rIiwgImZsZXhOZWdhdGl2ZSIsICJmbGV4T3JkZXIiLCAiZ3JpZEFyZWEiLCAiZ3JpZFJvdyIsICJncmlkUm93RW5kIiwgImdyaWRSb3dTcGFuIiwgImdyaWRSb3dTdGFydCIsICJncmlkQ29sdW1uIiwgImdyaWRDb2x1bW5FbmQiLCAiZ3JpZENvbHVtblNwYW4iLCAiZ3JpZENvbHVtblN0YXJ0IiwgImZvbnRXZWlnaHQiLCAibGluZUNsYW1wIiwgImxpbmVIZWlnaHQiLCAib3BhY2l0eSIsICJvcmRlciIsICJvcnBoYW5zIiwgInRhYlNpemUiLCAid2lkb3dzIiwgInpJbmRleCIsICJ6b29tIiwgImZpbGxPcGFjaXR5IiwgImZsb29kT3BhY2l0eSIsICJzdG9wT3BhY2l0eSIsICJzdHJva2VEYXNoYXJyYXkiLCAic3Ryb2tlRGFzaG9mZnNldCIsICJzdHJva2VNaXRlcmxpbWl0IiwgInN0cm9rZU9wYWNpdHkiLCAic3Ryb2tlV2lkdGgiLCAicHJlZml4S2V5IiwgInByZWZpeCIsICJjaGFyQXQiLCAidG9VcHBlckNhc2UiLCAic3Vic3RyaW5nIiwgInByZWZpeGVzIiwgInByb3AiLCAianN4RG9tVHlwZSIsICJTeW1ib2wiLCAiZm9yIiwgIkpzeERvbVR5cGUiLCAiSnN4RG9tVHlwZTIiLCAiX3JlZiIsICJjaGlsZHJlbiIsICJyZWYiLCAiYXR0cjIiLCAiYXR0ciIsICJpc1NoYWRvd1Jvb3QiLCAiZWwiLCAiWExpbmtOYW1lc3BhY2UiLCAiWE1MTmFtZXNwYWNlIiwgImlzVmlzaWJsZUNoaWxkIiwgIkFycmF5IiwgImlzQXJyYXkiLCAibWFwIiwgImZpbHRlciIsICJCb29sZWFuIiwgImpvaW4iLCAiaXRlcmF0b3IiLCAiZnJvbSIsICJrIiwgInN2ZyIsICJhbmltYXRlIiwgImNpcmNsZSIsICJjbGlwUGF0aCIsICJkZWZzIiwgImRlc2MiLCAiZWxsaXBzZSIsICJmZUJsZW5kIiwgImZlQ29sb3JNYXRyaXgiLCAiZmVDb21wb25lbnRUcmFuc2ZlciIsICJmZUNvbXBvc2l0ZSIsICJmZUNvbnZvbHZlTWF0cml4IiwgImZlRGlmZnVzZUxpZ2h0aW5nIiwgImZlRGlzcGxhY2VtZW50TWFwIiwgImZlRGlzdGFudExpZ2h0IiwgImZlRmxvb2QiLCAiZmVGdW5jQSIsICJmZUZ1bmNCIiwgImZlRnVuY0ciLCAiZmVGdW5jUiIsICJmZUdhdXNzaWFuQmx1ciIsICJmZUltYWdlIiwgImZlTWVyZ2UiLCAiZmVNZXJnZU5vZGUiLCAiZmVNb3JwaG9sb2d5IiwgImZlT2Zmc2V0IiwgImZlUG9pbnRMaWdodCIsICJmZVNwZWN1bGFyTGlnaHRpbmciLCAiZmVTcG90TGlnaHQiLCAiZmVUaWxlIiwgImZlVHVyYnVsZW5jZSIsICJmb3JlaWduT2JqZWN0IiwgImciLCAiaW1hZ2UiLCAibGluZSIsICJsaW5lYXJHcmFkaWVudCIsICJtYXJrZXIiLCAibWFzayIsICJtZXRhZGF0YSIsICJwYXRoIiwgInBhdHRlcm4iLCAicG9seWdvbiIsICJwb2x5bGluZSIsICJyYWRpYWxHcmFkaWVudCIsICJyZWN0IiwgInN0b3AiLCAic3dpdGNoIiwgInN5bWJvbCIsICJ0ZXh0IiwgInRleHRQYXRoIiwgInRzcGFuIiwgInVzZSIsICJ2aWV3IiwgIm5vblByZXNlbnRhdGlvblNWR0F0dHJpYnV0ZXMiLCAidGFnIiwgImJpbmQiLCAiZnJhZ21lbnQiLCAiZG9jdW1lbnQiLCAiY3JlYXRlRG9jdW1lbnRGcmFnbWVudCIsICJhcHBlbmRDaGlsZCIsICJjb25zdHJ1Y3RvciIsICJwcm9wcyIsICJyZW5kZXIiLCAiZGVmaW5lUHJvcGVydGllcyIsICJpbml0Q29tcG9uZW50Q2xhc3MiLCAiQ2xhc3MiLCAiaW5zdGFuY2UiLCAibm9kZSIsICJhdHRhY2hSZWYiLCAibmFtZXNwYWNlVVJJIiwgImNyZWF0ZUVsZW1lbnROUyIsICJhdHRyaWJ1dGVzIiwgIndpbmRvdyIsICJIVE1MU2VsZWN0RWxlbWVudCIsICJtdWx0aXBsZSIsICJ2YWx1ZXMiLCAiU3RyaW5nIiwgInF1ZXJ5U2VsZWN0b3JBbGwiLCAib3B0aW9uIiwgInNlbGVjdGVkIiwgImluY2x1ZGVzIiwgImRlZmF1bHRQcm9wcyIsICJUeXBlRXJyb3IiLCAiY29uY2F0IiwgIl9sZW4iLCAiYXJndW1lbnRzIiwgIl9rZXkyIiwgInVuc2hpZnQiLCAiY2hpbGQiLCAiYXBwZW5kQ2hpbGRyZW4iLCAiYXBwZW5kQ2hpbGRUb05vZGUiLCAiY3JlYXRlVGV4dE5vZGUiLCAiY3JlYXRlQ29tbWVudCIsICJzaGFkb3dSb290IiwgImF0dGFjaFNoYWRvdyIsICJfaSIsICJfYXJyIiwgIkhUTUxUZW1wbGF0ZUVsZW1lbnQiLCAiY29udGVudCIsICJub3JtYWxpemVBdHRyaWJ1dGUiLCAic2VwYXJhdG9yIiwgInJlcGxhY2UiLCAibWF0Y2giLCAidG9Mb3dlckNhc2UiLCAic3R5bGUiLCAidiIsICJzZXRBdHRyaWJ1dGUiLCAiaW5kZXhPZiIsICJzZXRQcm9wZXJ0eSIsICJhdHRyaWJ1dGUiLCAiYXR0ck5TIiwgImRhdGFWYWx1ZSIsICJkYXRhS2V5IiwgImRhdGFzZXQiLCAiaW5uZXJIVE1MIiwgIkhUTUxUZXh0QXJlYUVsZW1lbnQiLCAic3BlbGxjaGVjayIsICJldmVudEhhbmRsZXIiLCAiZXZlbnROYW1lIiwgImFkZEV2ZW50TGlzdGVuZXIiLCAiYXR0cmlidXRlMiIsICJ1c2VDYXB0dXJlIiwgImVuZHNXaXRoIiwgInN0YW5kYXJkRXZlbnROYW1lIiwgImN1c3RvbUV2ZW50TmFtZSIsICJzbGljZSIsICJTVkdFbGVtZW50IiwgInRlc3QiLCAibmFtZXNwYWNlIiwgInNldEF0dHJpYnV0ZU5TIiwgIl9pdGVyYXRvcjMiLCAiX3N0ZXAzIiwgImluaXRpYWxWYWx1ZSIsICJUZXh0IiwgImRlZmluZVByb3BlcnR5IiwgInRleHRDb250ZW50IiwgInNldFRleHQiLCAiZGl2IiwgImxpc3QiLCAiY2xhc3NMaXN0IiwgIkNsYXNzTGlzdCIsICJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzIiwgInNpemUiLCAiYWRkIiwgInJlbW92ZSIsICJ0b2dnbGUiLCAidG9rZW4iLCAiZm9yY2UiLCAiY29udGFpbnMiLCAiZmFjdG9yeSIsICJpbml0IiwgImNhY2hlIiwgIk1hcCIsICJjcmVhdGVTdHlsZWRDb21wb25lbnQiLCAibmFtZSIsICJpbnRlcnBvbGF0aW9ucyIsICJfa2V5IiwgInN0eWxlMiIsICJsYXN0SW5kZXgiLCAiY3NzIiwgInJlZHVjZSIsICJwIiwgImkiLCAiaW50ZXJwb2xhdGlvbiIsICJiYXNlU3R5bGVkIiwgImN1c3RvbUNvbXBvbmVudCIsICJQcm94eSIsICJnZXQiLCAiXyIsICJzZXRJZkFic2VudCIsICJnZXRWYWx1ZSIsICJoYXMiLCAic2V0IiwgImV2ZW50Il0KfQo=

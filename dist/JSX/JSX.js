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
    for (let key of __getOwnPropNames2(from)) if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
      get: () => from[key],
      enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
    });
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
  for (const key of keys(value)) {
    fn(value[key], key);
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
    throw new TypeError(`Invalid JSX element type: ${tag}`);
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
  for (const child of [...children]) {
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
  for (const key of keys(attr2)) {
    attribute(key, attr2[key], node);
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
    return render(props, ref ?? createRef());
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


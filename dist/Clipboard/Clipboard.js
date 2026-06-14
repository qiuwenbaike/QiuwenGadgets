/**
 * SPDX-License-Identifier: MIT
 * _addText: '{{Gadget Header|license=MIT}}'
 *
 * @base {@link https://github.com/zenorocha/clipboard.js}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/Clipboard}
 * @license MIT {@link https://github.com/zenorocha/clipboard.js/blob/master/LICENSE}
 */

/**
 * Copyright (c) Zeno Rocha
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
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

// dist/Clipboard/Clipboard.js
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
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  try {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = {
      exports: {}
    }).exports, mod), mod.exports;
  } catch (e) {
    throw mod = 0, e;
  }
};
var __export = (target, all) => {
  for (var name in all) __defProp(target, name, {
    get: all[name],
    enumerable: true
  });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    var _iterator = _createForOfIteratorHelper(__getOwnPropNames(from)), _step;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
    value: mod,
    enumerable: true
  }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", {
  value: true
}), mod);
var require_clipboard = __commonJS({
  "node_modules/.pnpm/clipboard@2.0.11/node_modules/clipboard/dist/clipboard.js"(exports2, module2) {
    /*!
     * clipboard.js v2.0.11
     * https://clipboardjs.com/
     *
     * Licensed MIT © Zeno Rocha
     */
    (function webpackUniversalModuleDefinition(root, factory) {
      if (typeof exports2 === "object" && typeof module2 === "object") module2.exports = factory();
      else if (typeof define === "function" && define.amd) define([], factory);
      else if (typeof exports2 === "object") exports2["ClipboardJS"] = factory();
      else root["ClipboardJS"] = factory();
    })(exports2, function() {
      return (
        /******/
        (function() {
          var __webpack_modules__ = {
            /***/
            686: (
              /***/
              (function(__unused_webpack_module, __webpack_exports__, __webpack_require__2) {
                "use strict";
                __webpack_require__2.d(__webpack_exports__, {
                  "default": function() {
                    return (
                      /* binding */
                      clipboard
                    );
                  }
                });
                var tiny_emitter = __webpack_require__2(279);
                var tiny_emitter_default = /* @__PURE__ */ __webpack_require__2.n(tiny_emitter);
                var listen = __webpack_require__2(370);
                var listen_default = /* @__PURE__ */ __webpack_require__2.n(listen);
                var src_select = __webpack_require__2(817);
                var select_default = /* @__PURE__ */ __webpack_require__2.n(src_select);
                ;
                function command(type) {
                  try {
                    return document.execCommand(type);
                  } catch (err) {
                    return false;
                  }
                }
                ;
                var ClipboardActionCut = function ClipboardActionCut2(target) {
                  var selectedText = select_default()(target);
                  command("cut");
                  return selectedText;
                };
                var actions_cut = ClipboardActionCut;
                ;
                function createFakeElement(value) {
                  var isRTL = document.documentElement.getAttribute("dir") === "rtl";
                  var fakeElement = document.createElement("textarea");
                  fakeElement.style.fontSize = "12pt";
                  fakeElement.style.border = "0";
                  fakeElement.style.padding = "0";
                  fakeElement.style.margin = "0";
                  fakeElement.style.position = "absolute";
                  fakeElement.style[isRTL ? "right" : "left"] = "-9999px";
                  var yPosition = window.pageYOffset || document.documentElement.scrollTop;
                  fakeElement.style.top = "".concat(yPosition, "px");
                  fakeElement.setAttribute("readonly", "");
                  fakeElement.value = value;
                  return fakeElement;
                }
                ;
                var fakeCopyAction = function fakeCopyAction2(value, options) {
                  var fakeElement = createFakeElement(value);
                  options.container.appendChild(fakeElement);
                  var selectedText = select_default()(fakeElement);
                  command("copy");
                  fakeElement.remove();
                  return selectedText;
                };
                var ClipboardActionCopy = function ClipboardActionCopy2(target) {
                  var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
                    container: document.body
                  };
                  var selectedText = "";
                  if (typeof target === "string") {
                    selectedText = fakeCopyAction(target, options);
                  } else if (target instanceof HTMLInputElement && !["text", "search", "url", "tel", "password"].includes(target === null || target === void 0 ? void 0 : target.type)) {
                    selectedText = fakeCopyAction(target.value, options);
                  } else {
                    selectedText = select_default()(target);
                    command("copy");
                  }
                  return selectedText;
                };
                var actions_copy = ClipboardActionCopy;
                ;
                function _typeof(obj) {
                  "@babel/helpers - typeof";
                  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
                    _typeof = function _typeof2(obj2) {
                      return typeof obj2;
                    };
                  } else {
                    _typeof = function _typeof2(obj2) {
                      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
                    };
                  }
                  return _typeof(obj);
                }
                var ClipboardActionDefault = function ClipboardActionDefault2() {
                  var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                  var _options$action = options.action, action = _options$action === void 0 ? "copy" : _options$action, container = options.container, target = options.target, text = options.text;
                  if (action !== "copy" && action !== "cut") {
                    throw new Error('Invalid "action" value, use either "copy" or "cut"');
                  }
                  if (target !== void 0) {
                    if (target && _typeof(target) === "object" && target.nodeType === 1) {
                      if (action === "copy" && target.hasAttribute("disabled")) {
                        throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
                      }
                      if (action === "cut" && (target.hasAttribute("readonly") || target.hasAttribute("disabled"))) {
                        throw new Error(`Invalid "target" attribute. You can't cut text from elements with "readonly" or "disabled" attributes`);
                      }
                    } else {
                      throw new Error('Invalid "target" value, use a valid Element');
                    }
                  }
                  if (text) {
                    return actions_copy(text, {
                      container
                    });
                  }
                  if (target) {
                    return action === "cut" ? actions_cut(target) : actions_copy(target, {
                      container
                    });
                  }
                };
                var actions_default = ClipboardActionDefault;
                ;
                function clipboard_typeof(obj) {
                  "@babel/helpers - typeof";
                  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
                    clipboard_typeof = function _typeof2(obj2) {
                      return typeof obj2;
                    };
                  } else {
                    clipboard_typeof = function _typeof2(obj2) {
                      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
                    };
                  }
                  return clipboard_typeof(obj);
                }
                function _classCallCheck(instance, Constructor) {
                  if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                  }
                }
                function _defineProperties(target, props) {
                  for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || false;
                    descriptor.configurable = true;
                    if ("value" in descriptor) descriptor.writable = true;
                    Object.defineProperty(target, descriptor.key, descriptor);
                  }
                }
                function _createClass(Constructor, protoProps, staticProps) {
                  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
                  if (staticProps) _defineProperties(Constructor, staticProps);
                  return Constructor;
                }
                function _inherits(subClass, superClass) {
                  if (typeof superClass !== "function" && superClass !== null) {
                    throw new TypeError("Super expression must either be null or a function");
                  }
                  subClass.prototype = Object.create(superClass && superClass.prototype, {
                    constructor: {
                      value: subClass,
                      writable: true,
                      configurable: true
                    }
                  });
                  if (superClass) _setPrototypeOf(subClass, superClass);
                }
                function _setPrototypeOf(o, p) {
                  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
                    o2.__proto__ = p2;
                    return o2;
                  };
                  return _setPrototypeOf(o, p);
                }
                function _createSuper(Derived) {
                  var hasNativeReflectConstruct = _isNativeReflectConstruct();
                  return function _createSuperInternal() {
                    var Super = _getPrototypeOf(Derived), result;
                    if (hasNativeReflectConstruct) {
                      var NewTarget = _getPrototypeOf(this).constructor;
                      result = Reflect.construct(Super, arguments, NewTarget);
                    } else {
                      result = Super.apply(this, arguments);
                    }
                    return _possibleConstructorReturn(this, result);
                  };
                }
                function _possibleConstructorReturn(self, call) {
                  if (call && (clipboard_typeof(call) === "object" || typeof call === "function")) {
                    return call;
                  }
                  return _assertThisInitialized(self);
                }
                function _assertThisInitialized(self) {
                  if (self === void 0) {
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                  }
                  return self;
                }
                function _isNativeReflectConstruct() {
                  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
                  if (Reflect.construct.sham) return false;
                  if (typeof Proxy === "function") return true;
                  try {
                    Date.prototype.toString.call(Reflect.construct(Date, [], function() {
                    }));
                    return true;
                  } catch (e) {
                    return false;
                  }
                }
                function _getPrototypeOf(o) {
                  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
                    return o2.__proto__ || Object.getPrototypeOf(o2);
                  };
                  return _getPrototypeOf(o);
                }
                function getAttributeValue(suffix, element) {
                  var attribute = "data-clipboard-".concat(suffix);
                  if (!element.hasAttribute(attribute)) {
                    return;
                  }
                  return element.getAttribute(attribute);
                }
                var Clipboard = /* @__PURE__ */ (function(_Emitter) {
                  _inherits(Clipboard2, _Emitter);
                  var _super = _createSuper(Clipboard2);
                  function Clipboard2(trigger, options) {
                    var _this;
                    _classCallCheck(this, Clipboard2);
                    _this = _super.call(this);
                    _this.resolveOptions(options);
                    _this.listenClick(trigger);
                    return _this;
                  }
                  _createClass(Clipboard2, [{
                    key: "resolveOptions",
                    value: function resolveOptions() {
                      var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                      this.action = typeof options.action === "function" ? options.action : this.defaultAction;
                      this.target = typeof options.target === "function" ? options.target : this.defaultTarget;
                      this.text = typeof options.text === "function" ? options.text : this.defaultText;
                      this.container = clipboard_typeof(options.container) === "object" ? options.container : document.body;
                    }
                    /**
                     * Adds a click event listener to the passed trigger.
                     * @param {String|HTMLElement|HTMLCollection|NodeList} trigger
                     */
                  }, {
                    key: "listenClick",
                    value: function listenClick(trigger) {
                      var _this2 = this;
                      this.listener = listen_default()(trigger, "click", function(e) {
                        return _this2.onClick(e);
                      });
                    }
                    /**
                     * Defines a new `ClipboardAction` on each click event.
                     * @param {Event} e
                     */
                  }, {
                    key: "onClick",
                    value: function onClick(e) {
                      var trigger = e.delegateTarget || e.currentTarget;
                      var action = this.action(trigger) || "copy";
                      var text = actions_default({
                        action,
                        container: this.container,
                        target: this.target(trigger),
                        text: this.text(trigger)
                      });
                      this.emit(text ? "success" : "error", {
                        action,
                        text,
                        trigger,
                        clearSelection: function clearSelection() {
                          if (trigger) {
                            trigger.focus();
                          }
                          window.getSelection().removeAllRanges();
                        }
                      });
                    }
                    /**
                     * Default `action` lookup function.
                     * @param {Element} trigger
                     */
                  }, {
                    key: "defaultAction",
                    value: function defaultAction(trigger) {
                      return getAttributeValue("action", trigger);
                    }
                    /**
                     * Default `target` lookup function.
                     * @param {Element} trigger
                     */
                  }, {
                    key: "defaultTarget",
                    value: function defaultTarget(trigger) {
                      var selector = getAttributeValue("target", trigger);
                      if (selector) {
                        return document.querySelector(selector);
                      }
                    }
                    /**
                     * Allow fire programmatically a copy action
                     * @param {String|HTMLElement} target
                     * @param {Object} options
                     * @returns Text copied.
                     */
                  }, {
                    key: "defaultText",
                    /**
                     * Default `text` lookup function.
                     * @param {Element} trigger
                     */
                    value: function defaultText(trigger) {
                      return getAttributeValue("text", trigger);
                    }
                    /**
                     * Destroy lifecycle.
                     */
                  }, {
                    key: "destroy",
                    value: function destroy() {
                      this.listener.destroy();
                    }
                  }], [{
                    key: "copy",
                    value: function copy(target) {
                      var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
                        container: document.body
                      };
                      return actions_copy(target, options);
                    }
                    /**
                     * Allow fire programmatically a cut action
                     * @param {String|HTMLElement} target
                     * @returns Text cutted.
                     */
                  }, {
                    key: "cut",
                    value: function cut(target) {
                      return actions_cut(target);
                    }
                    /**
                     * Returns the support of the given action, or all actions if no action is
                     * given.
                     * @param {String} [action]
                     */
                  }, {
                    key: "isSupported",
                    value: function isSupported() {
                      var action = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ["copy", "cut"];
                      var actions = typeof action === "string" ? [action] : action;
                      var support = !!document.queryCommandSupported;
                      actions.forEach(function(action2) {
                        support = support && !!document.queryCommandSupported(action2);
                      });
                      return support;
                    }
                  }]);
                  return Clipboard2;
                })(tiny_emitter_default());
                var clipboard = Clipboard;
              })
            ),
            /***/
            828: (
              /***/
              (function(module3) {
                var DOCUMENT_NODE_TYPE = 9;
                if (typeof Element !== "undefined" && !Element.prototype.matches) {
                  var proto = Element.prototype;
                  proto.matches = proto.matchesSelector || proto.mozMatchesSelector || proto.msMatchesSelector || proto.oMatchesSelector || proto.webkitMatchesSelector;
                }
                function closest(element, selector) {
                  while (element && element.nodeType !== DOCUMENT_NODE_TYPE) {
                    if (typeof element.matches === "function" && element.matches(selector)) {
                      return element;
                    }
                    element = element.parentNode;
                  }
                }
                module3.exports = closest;
              })
            ),
            /***/
            438: (
              /***/
              (function(module3, __unused_webpack_exports, __webpack_require__2) {
                var closest = __webpack_require__2(828);
                function _delegate(element, selector, type, callback, useCapture) {
                  var listenerFn = listener.apply(this, arguments);
                  element.addEventListener(type, listenerFn, useCapture);
                  return {
                    destroy: function() {
                      element.removeEventListener(type, listenerFn, useCapture);
                    }
                  };
                }
                function delegate(elements, selector, type, callback, useCapture) {
                  if (typeof elements.addEventListener === "function") {
                    return _delegate.apply(null, arguments);
                  }
                  if (typeof type === "function") {
                    return _delegate.bind(null, document).apply(null, arguments);
                  }
                  if (typeof elements === "string") {
                    elements = document.querySelectorAll(elements);
                  }
                  return Array.prototype.map.call(elements, function(element) {
                    return _delegate(element, selector, type, callback, useCapture);
                  });
                }
                function listener(element, selector, type, callback) {
                  return function(e) {
                    e.delegateTarget = closest(e.target, selector);
                    if (e.delegateTarget) {
                      callback.call(element, e);
                    }
                  };
                }
                module3.exports = delegate;
              })
            ),
            /***/
            879: (
              /***/
              (function(__unused_webpack_module, exports22) {
                exports22.node = function(value) {
                  return value !== void 0 && value instanceof HTMLElement && value.nodeType === 1;
                };
                exports22.nodeList = function(value) {
                  var type = Object.prototype.toString.call(value);
                  return value !== void 0 && (type === "[object NodeList]" || type === "[object HTMLCollection]") && "length" in value && (value.length === 0 || exports22.node(value[0]));
                };
                exports22.string = function(value) {
                  return typeof value === "string" || value instanceof String;
                };
                exports22.fn = function(value) {
                  var type = Object.prototype.toString.call(value);
                  return type === "[object Function]";
                };
              })
            ),
            /***/
            370: (
              /***/
              (function(module3, __unused_webpack_exports, __webpack_require__2) {
                var is = __webpack_require__2(879);
                var delegate = __webpack_require__2(438);
                function listen(target, type, callback) {
                  if (!target && !type && !callback) {
                    throw new Error("Missing required arguments");
                  }
                  if (!is.string(type)) {
                    throw new TypeError("Second argument must be a String");
                  }
                  if (!is.fn(callback)) {
                    throw new TypeError("Third argument must be a Function");
                  }
                  if (is.node(target)) {
                    return listenNode(target, type, callback);
                  } else if (is.nodeList(target)) {
                    return listenNodeList(target, type, callback);
                  } else if (is.string(target)) {
                    return listenSelector(target, type, callback);
                  } else {
                    throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList");
                  }
                }
                function listenNode(node, type, callback) {
                  node.addEventListener(type, callback);
                  return {
                    destroy: function() {
                      node.removeEventListener(type, callback);
                    }
                  };
                }
                function listenNodeList(nodeList, type, callback) {
                  Array.prototype.forEach.call(nodeList, function(node) {
                    node.addEventListener(type, callback);
                  });
                  return {
                    destroy: function() {
                      Array.prototype.forEach.call(nodeList, function(node) {
                        node.removeEventListener(type, callback);
                      });
                    }
                  };
                }
                function listenSelector(selector, type, callback) {
                  return delegate(document.body, selector, type, callback);
                }
                module3.exports = listen;
              })
            ),
            /***/
            817: (
              /***/
              (function(module3) {
                function select(element) {
                  var selectedText;
                  if (element.nodeName === "SELECT") {
                    element.focus();
                    selectedText = element.value;
                  } else if (element.nodeName === "INPUT" || element.nodeName === "TEXTAREA") {
                    var isReadOnly = element.hasAttribute("readonly");
                    if (!isReadOnly) {
                      element.setAttribute("readonly", "");
                    }
                    element.select();
                    element.setSelectionRange(0, element.value.length);
                    if (!isReadOnly) {
                      element.removeAttribute("readonly");
                    }
                    selectedText = element.value;
                  } else {
                    if (element.hasAttribute("contenteditable")) {
                      element.focus();
                    }
                    var selection = window.getSelection();
                    var range = document.createRange();
                    range.selectNodeContents(element);
                    selection.removeAllRanges();
                    selection.addRange(range);
                    selectedText = selection.toString();
                  }
                  return selectedText;
                }
                module3.exports = select;
              })
            ),
            /***/
            279: (
              /***/
              (function(module3) {
                function E() {
                }
                E.prototype = {
                  on: function(name, callback, ctx) {
                    var e = this.e || (this.e = {});
                    (e[name] || (e[name] = [])).push({
                      fn: callback,
                      ctx
                    });
                    return this;
                  },
                  once: function(name, callback, ctx) {
                    var self = this;
                    function listener() {
                      self.off(name, listener);
                      callback.apply(ctx, arguments);
                    }
                    ;
                    listener._ = callback;
                    return this.on(name, listener, ctx);
                  },
                  emit: function(name) {
                    var data = [].slice.call(arguments, 1);
                    var evtArr = ((this.e || (this.e = {}))[name] || []).slice();
                    var i = 0;
                    var len = evtArr.length;
                    for (i; i < len; i++) {
                      evtArr[i].fn.apply(evtArr[i].ctx, data);
                    }
                    return this;
                  },
                  off: function(name, callback) {
                    var e = this.e || (this.e = {});
                    var evts = e[name];
                    var liveEvents = [];
                    if (evts && callback) {
                      for (var i = 0, len = evts.length; i < len; i++) {
                        if (evts[i].fn !== callback && evts[i].fn._ !== callback) liveEvents.push(evts[i]);
                      }
                    }
                    liveEvents.length ? e[name] = liveEvents : delete e[name];
                    return this;
                  }
                };
                module3.exports = E;
                module3.exports.TinyEmitter = E;
              })
            )
            /******/
          };
          var __webpack_module_cache__ = {};
          function __webpack_require__(moduleId) {
            if (__webpack_module_cache__[moduleId]) {
              return __webpack_module_cache__[moduleId].exports;
            }
            var module3 = __webpack_module_cache__[moduleId] = {
              /******/
              // no module.id needed
              /******/
              // no module.loaded needed
              /******/
              exports: {}
              /******/
            };
            __webpack_modules__[moduleId](module3, module3.exports, __webpack_require__);
            return module3.exports;
          }
          !(function() {
            __webpack_require__.n = function(module3) {
              var getter = module3 && module3.__esModule ? (
                /******/
                (function() {
                  return module3["default"];
                })
              ) : (
                /******/
                (function() {
                  return module3;
                })
              );
              __webpack_require__.d(getter, {
                a: getter
              });
              return getter;
            };
          })();
          !(function() {
            __webpack_require__.d = function(exports22, definition) {
              for (var key in definition) {
                if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports22, key)) {
                  Object.defineProperty(exports22, key, {
                    enumerable: true,
                    get: definition[key]
                  });
                }
              }
            };
          })();
          !(function() {
            __webpack_require__.o = function(obj, prop) {
              return Object.prototype.hasOwnProperty.call(obj, prop);
            };
          })();
          return __webpack_require__(686);
        })().default
      );
    });
  }
});
//! src/Clipboard/Clipboard.ts
var Clipboard_exports = {};
__export(Clipboard_exports, {
  Clipboard: () => import_clipboard.default
});
module.exports = __toCommonJS(Clipboard_exports);
var import_clipboard = __toESM(require_clipboard(), 1);

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibm9kZV9tb2R1bGVzLy5wbnBtL2NsaXBib2FyZEAyLjAuMTEvbm9kZV9tb2R1bGVzL2NsaXBib2FyZC9kaXN0L2NsaXBib2FyZC5qcyIsICJzcmMvQ2xpcGJvYXJkL0NsaXBib2FyZC50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiLyohXG4gKiBjbGlwYm9hcmQuanMgdjIuMC4xMVxuICogaHR0cHM6Ly9jbGlwYm9hcmRqcy5jb20vXG4gKlxuICogTGljZW5zZWQgTUlUIMKpIFplbm8gUm9jaGFcbiAqL1xuKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiQ2xpcGJvYXJkSlNcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiQ2xpcGJvYXJkSlNcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAvKioqKioqLyAoZnVuY3Rpb24oKSB7IC8vIHdlYnBhY2tCb290c3RyYXBcbi8qKioqKiovIFx0dmFyIF9fd2VicGFja19tb2R1bGVzX18gPSAoe1xuXG4vKioqLyA2ODY6XG4vKioqLyAoZnVuY3Rpb24oX191bnVzZWRfd2VicGFja19tb2R1bGUsIF9fd2VicGFja19leHBvcnRzX18sIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbi8vIEVYUE9SVFNcbl9fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCB7XG4gIFwiZGVmYXVsdFwiOiBmdW5jdGlvbigpIHsgcmV0dXJuIC8qIGJpbmRpbmcgKi8gY2xpcGJvYXJkOyB9XG59KTtcblxuLy8gRVhURVJOQUwgTU9EVUxFOiAuL25vZGVfbW9kdWxlcy90aW55LWVtaXR0ZXIvaW5kZXguanNcbnZhciB0aW55X2VtaXR0ZXIgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDI3OSk7XG52YXIgdGlueV9lbWl0dGVyX2RlZmF1bHQgPSAvKiNfX1BVUkVfXyovX193ZWJwYWNrX3JlcXVpcmVfXy5uKHRpbnlfZW1pdHRlcik7XG4vLyBFWFRFUk5BTCBNT0RVTEU6IC4vbm9kZV9tb2R1bGVzL2dvb2QtbGlzdGVuZXIvc3JjL2xpc3Rlbi5qc1xudmFyIGxpc3RlbiA9IF9fd2VicGFja19yZXF1aXJlX18oMzcwKTtcbnZhciBsaXN0ZW5fZGVmYXVsdCA9IC8qI19fUFVSRV9fKi9fX3dlYnBhY2tfcmVxdWlyZV9fLm4obGlzdGVuKTtcbi8vIEVYVEVSTkFMIE1PRFVMRTogLi9ub2RlX21vZHVsZXMvc2VsZWN0L3NyYy9zZWxlY3QuanNcbnZhciBzcmNfc2VsZWN0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyg4MTcpO1xudmFyIHNlbGVjdF9kZWZhdWx0ID0gLyojX19QVVJFX18qL19fd2VicGFja19yZXF1aXJlX18ubihzcmNfc2VsZWN0KTtcbjsvLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9jb21tb24vY29tbWFuZC5qc1xuLyoqXG4gKiBFeGVjdXRlcyBhIGdpdmVuIG9wZXJhdGlvbiB0eXBlLlxuICogQHBhcmFtIHtTdHJpbmd9IHR5cGVcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIGNvbW1hbmQodHlwZSkge1xuICB0cnkge1xuICAgIHJldHVybiBkb2N1bWVudC5leGVjQ29tbWFuZCh0eXBlKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG47Ly8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvYWN0aW9ucy9jdXQuanNcblxuXG4vKipcbiAqIEN1dCBhY3Rpb24gd3JhcHBlci5cbiAqIEBwYXJhbSB7U3RyaW5nfEhUTUxFbGVtZW50fSB0YXJnZXRcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xuXG52YXIgQ2xpcGJvYXJkQWN0aW9uQ3V0ID0gZnVuY3Rpb24gQ2xpcGJvYXJkQWN0aW9uQ3V0KHRhcmdldCkge1xuICB2YXIgc2VsZWN0ZWRUZXh0ID0gc2VsZWN0X2RlZmF1bHQoKSh0YXJnZXQpO1xuICBjb21tYW5kKCdjdXQnKTtcbiAgcmV0dXJuIHNlbGVjdGVkVGV4dDtcbn07XG5cbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gdmFyIGFjdGlvbnNfY3V0ID0gKENsaXBib2FyZEFjdGlvbkN1dCk7XG47Ly8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvY29tbW9uL2NyZWF0ZS1mYWtlLWVsZW1lbnQuanNcbi8qKlxuICogQ3JlYXRlcyBhIGZha2UgdGV4dGFyZWEgZWxlbWVudCB3aXRoIGEgdmFsdWUuXG4gKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcbiAqIEByZXR1cm4ge0hUTUxFbGVtZW50fVxuICovXG5mdW5jdGlvbiBjcmVhdGVGYWtlRWxlbWVudCh2YWx1ZSkge1xuICB2YXIgaXNSVEwgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkaXInKSA9PT0gJ3J0bCc7XG4gIHZhciBmYWtlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7IC8vIFByZXZlbnQgem9vbWluZyBvbiBpT1NcblxuICBmYWtlRWxlbWVudC5zdHlsZS5mb250U2l6ZSA9ICcxMnB0JzsgLy8gUmVzZXQgYm94IG1vZGVsXG5cbiAgZmFrZUVsZW1lbnQuc3R5bGUuYm9yZGVyID0gJzAnO1xuICBmYWtlRWxlbWVudC5zdHlsZS5wYWRkaW5nID0gJzAnO1xuICBmYWtlRWxlbWVudC5zdHlsZS5tYXJnaW4gPSAnMCc7IC8vIE1vdmUgZWxlbWVudCBvdXQgb2Ygc2NyZWVuIGhvcml6b250YWxseVxuXG4gIGZha2VFbGVtZW50LnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgZmFrZUVsZW1lbnQuc3R5bGVbaXNSVEwgPyAncmlnaHQnIDogJ2xlZnQnXSA9ICctOTk5OXB4JzsgLy8gTW92ZSBlbGVtZW50IHRvIHRoZSBzYW1lIHBvc2l0aW9uIHZlcnRpY2FsbHlcblxuICB2YXIgeVBvc2l0aW9uID0gd2luZG93LnBhZ2VZT2Zmc2V0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3A7XG4gIGZha2VFbGVtZW50LnN0eWxlLnRvcCA9IFwiXCIuY29uY2F0KHlQb3NpdGlvbiwgXCJweFwiKTtcbiAgZmFrZUVsZW1lbnQuc2V0QXR0cmlidXRlKCdyZWFkb25seScsICcnKTtcbiAgZmFrZUVsZW1lbnQudmFsdWUgPSB2YWx1ZTtcbiAgcmV0dXJuIGZha2VFbGVtZW50O1xufVxuOy8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL2FjdGlvbnMvY29weS5qc1xuXG5cblxuLyoqXG4gKiBDcmVhdGUgZmFrZSBjb3B5IGFjdGlvbiB3cmFwcGVyIHVzaW5nIGEgZmFrZSBlbGVtZW50LlxuICogQHBhcmFtIHtTdHJpbmd9IHRhcmdldFxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xuXG52YXIgZmFrZUNvcHlBY3Rpb24gPSBmdW5jdGlvbiBmYWtlQ29weUFjdGlvbih2YWx1ZSwgb3B0aW9ucykge1xuICB2YXIgZmFrZUVsZW1lbnQgPSBjcmVhdGVGYWtlRWxlbWVudCh2YWx1ZSk7XG4gIG9wdGlvbnMuY29udGFpbmVyLmFwcGVuZENoaWxkKGZha2VFbGVtZW50KTtcbiAgdmFyIHNlbGVjdGVkVGV4dCA9IHNlbGVjdF9kZWZhdWx0KCkoZmFrZUVsZW1lbnQpO1xuICBjb21tYW5kKCdjb3B5Jyk7XG4gIGZha2VFbGVtZW50LnJlbW92ZSgpO1xuICByZXR1cm4gc2VsZWN0ZWRUZXh0O1xufTtcbi8qKlxuICogQ29weSBhY3Rpb24gd3JhcHBlci5cbiAqIEBwYXJhbSB7U3RyaW5nfEhUTUxFbGVtZW50fSB0YXJnZXRcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKi9cblxuXG52YXIgQ2xpcGJvYXJkQWN0aW9uQ29weSA9IGZ1bmN0aW9uIENsaXBib2FyZEFjdGlvbkNvcHkodGFyZ2V0KSB7XG4gIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7XG4gICAgY29udGFpbmVyOiBkb2N1bWVudC5ib2R5XG4gIH07XG4gIHZhciBzZWxlY3RlZFRleHQgPSAnJztcblxuICBpZiAodHlwZW9mIHRhcmdldCA9PT0gJ3N0cmluZycpIHtcbiAgICBzZWxlY3RlZFRleHQgPSBmYWtlQ29weUFjdGlvbih0YXJnZXQsIG9wdGlvbnMpO1xuICB9IGVsc2UgaWYgKHRhcmdldCBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQgJiYgIVsndGV4dCcsICdzZWFyY2gnLCAndXJsJywgJ3RlbCcsICdwYXNzd29yZCddLmluY2x1ZGVzKHRhcmdldCA9PT0gbnVsbCB8fCB0YXJnZXQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHRhcmdldC50eXBlKSkge1xuICAgIC8vIElmIGlucHV0IHR5cGUgZG9lc24ndCBzdXBwb3J0IGBzZXRTZWxlY3Rpb25SYW5nZWAuIFNpbXVsYXRlIGl0LiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSFRNTElucHV0RWxlbWVudC9zZXRTZWxlY3Rpb25SYW5nZVxuICAgIHNlbGVjdGVkVGV4dCA9IGZha2VDb3B5QWN0aW9uKHRhcmdldC52YWx1ZSwgb3B0aW9ucyk7XG4gIH0gZWxzZSB7XG4gICAgc2VsZWN0ZWRUZXh0ID0gc2VsZWN0X2RlZmF1bHQoKSh0YXJnZXQpO1xuICAgIGNvbW1hbmQoJ2NvcHknKTtcbiAgfVxuXG4gIHJldHVybiBzZWxlY3RlZFRleHQ7XG59O1xuXG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIHZhciBhY3Rpb25zX2NvcHkgPSAoQ2xpcGJvYXJkQWN0aW9uQ29weSk7XG47Ly8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvYWN0aW9ucy9kZWZhdWx0LmpzXG5mdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cblxuXG4vKipcbiAqIElubmVyIGZ1bmN0aW9uIHdoaWNoIHBlcmZvcm1zIHNlbGVjdGlvbiBmcm9tIGVpdGhlciBgdGV4dGAgb3IgYHRhcmdldGBcbiAqIHByb3BlcnRpZXMgYW5kIHRoZW4gZXhlY3V0ZXMgY29weSBvciBjdXQgb3BlcmF0aW9ucy5cbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gKi9cblxudmFyIENsaXBib2FyZEFjdGlvbkRlZmF1bHQgPSBmdW5jdGlvbiBDbGlwYm9hcmRBY3Rpb25EZWZhdWx0KCkge1xuICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG4gIC8vIERlZmluZXMgYmFzZSBwcm9wZXJ0aWVzIHBhc3NlZCBmcm9tIGNvbnN0cnVjdG9yLlxuICB2YXIgX29wdGlvbnMkYWN0aW9uID0gb3B0aW9ucy5hY3Rpb24sXG4gICAgICBhY3Rpb24gPSBfb3B0aW9ucyRhY3Rpb24gPT09IHZvaWQgMCA/ICdjb3B5JyA6IF9vcHRpb25zJGFjdGlvbixcbiAgICAgIGNvbnRhaW5lciA9IG9wdGlvbnMuY29udGFpbmVyLFxuICAgICAgdGFyZ2V0ID0gb3B0aW9ucy50YXJnZXQsXG4gICAgICB0ZXh0ID0gb3B0aW9ucy50ZXh0OyAvLyBTZXRzIHRoZSBgYWN0aW9uYCB0byBiZSBwZXJmb3JtZWQgd2hpY2ggY2FuIGJlIGVpdGhlciAnY29weScgb3IgJ2N1dCcuXG5cbiAgaWYgKGFjdGlvbiAhPT0gJ2NvcHknICYmIGFjdGlvbiAhPT0gJ2N1dCcpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgXCJhY3Rpb25cIiB2YWx1ZSwgdXNlIGVpdGhlciBcImNvcHlcIiBvciBcImN1dFwiJyk7XG4gIH0gLy8gU2V0cyB0aGUgYHRhcmdldGAgcHJvcGVydHkgdXNpbmcgYW4gZWxlbWVudCB0aGF0IHdpbGwgYmUgaGF2ZSBpdHMgY29udGVudCBjb3BpZWQuXG5cblxuICBpZiAodGFyZ2V0ICE9PSB1bmRlZmluZWQpIHtcbiAgICBpZiAodGFyZ2V0ICYmIF90eXBlb2YodGFyZ2V0KSA9PT0gJ29iamVjdCcgJiYgdGFyZ2V0Lm5vZGVUeXBlID09PSAxKSB7XG4gICAgICBpZiAoYWN0aW9uID09PSAnY29weScgJiYgdGFyZ2V0Lmhhc0F0dHJpYnV0ZSgnZGlzYWJsZWQnKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgXCJ0YXJnZXRcIiBhdHRyaWJ1dGUuIFBsZWFzZSB1c2UgXCJyZWFkb25seVwiIGluc3RlYWQgb2YgXCJkaXNhYmxlZFwiIGF0dHJpYnV0ZScpO1xuICAgICAgfVxuXG4gICAgICBpZiAoYWN0aW9uID09PSAnY3V0JyAmJiAodGFyZ2V0Lmhhc0F0dHJpYnV0ZSgncmVhZG9ubHknKSB8fCB0YXJnZXQuaGFzQXR0cmlidXRlKCdkaXNhYmxlZCcpKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgXCJ0YXJnZXRcIiBhdHRyaWJ1dGUuIFlvdSBjYW5cXCd0IGN1dCB0ZXh0IGZyb20gZWxlbWVudHMgd2l0aCBcInJlYWRvbmx5XCIgb3IgXCJkaXNhYmxlZFwiIGF0dHJpYnV0ZXMnKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIFwidGFyZ2V0XCIgdmFsdWUsIHVzZSBhIHZhbGlkIEVsZW1lbnQnKTtcbiAgICB9XG4gIH0gLy8gRGVmaW5lIHNlbGVjdGlvbiBzdHJhdGVneSBiYXNlZCBvbiBgdGV4dGAgcHJvcGVydHkuXG5cblxuICBpZiAodGV4dCkge1xuICAgIHJldHVybiBhY3Rpb25zX2NvcHkodGV4dCwge1xuICAgICAgY29udGFpbmVyOiBjb250YWluZXJcbiAgICB9KTtcbiAgfSAvLyBEZWZpbmVzIHdoaWNoIHNlbGVjdGlvbiBzdHJhdGVneSBiYXNlZCBvbiBgdGFyZ2V0YCBwcm9wZXJ0eS5cblxuXG4gIGlmICh0YXJnZXQpIHtcbiAgICByZXR1cm4gYWN0aW9uID09PSAnY3V0JyA/IGFjdGlvbnNfY3V0KHRhcmdldCkgOiBhY3Rpb25zX2NvcHkodGFyZ2V0LCB7XG4gICAgICBjb250YWluZXI6IGNvbnRhaW5lclxuICAgIH0pO1xuICB9XG59O1xuXG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIHZhciBhY3Rpb25zX2RlZmF1bHQgPSAoQ2xpcGJvYXJkQWN0aW9uRGVmYXVsdCk7XG47Ly8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvY2xpcGJvYXJkLmpzXG5mdW5jdGlvbiBjbGlwYm9hcmRfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBjbGlwYm9hcmRfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IGNsaXBib2FyZF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gY2xpcGJvYXJkX3R5cGVvZihvYmopOyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7IH1cblxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IG8uX19wcm90b19fID0gcDsgcmV0dXJuIG87IH07IHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7IH1cblxuZnVuY3Rpb24gX2NyZWF0ZVN1cGVyKERlcml2ZWQpIHsgdmFyIGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QgPSBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCk7IHJldHVybiBmdW5jdGlvbiBfY3JlYXRlU3VwZXJJbnRlcm5hbCgpIHsgdmFyIFN1cGVyID0gX2dldFByb3RvdHlwZU9mKERlcml2ZWQpLCByZXN1bHQ7IGlmIChoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KSB7IHZhciBOZXdUYXJnZXQgPSBfZ2V0UHJvdG90eXBlT2YodGhpcykuY29uc3RydWN0b3I7IHJlc3VsdCA9IFJlZmxlY3QuY29uc3RydWN0KFN1cGVyLCBhcmd1bWVudHMsIE5ld1RhcmdldCk7IH0gZWxzZSB7IHJlc3VsdCA9IFN1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH0gcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIHJlc3VsdCk7IH07IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoY2FsbCAmJiAoY2xpcGJvYXJkX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkgeyByZXR1cm4gY2FsbDsgfSByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTsgfVxuXG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cblxuZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHsgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcInVuZGVmaW5lZFwiIHx8ICFSZWZsZWN0LmNvbnN0cnVjdCkgcmV0dXJuIGZhbHNlOyBpZiAoUmVmbGVjdC5jb25zdHJ1Y3Quc2hhbSkgcmV0dXJuIGZhbHNlOyBpZiAodHlwZW9mIFByb3h5ID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiB0cnVlOyB0cnkgeyBEYXRlLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKFJlZmxlY3QuY29uc3RydWN0KERhdGUsIFtdLCBmdW5jdGlvbiAoKSB7fSkpOyByZXR1cm4gdHJ1ZTsgfSBjYXRjaCAoZSkgeyByZXR1cm4gZmFsc2U7IH0gfVxuXG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pOyB9OyByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pOyB9XG5cblxuXG5cblxuXG4vKipcbiAqIEhlbHBlciBmdW5jdGlvbiB0byByZXRyaWV2ZSBhdHRyaWJ1dGUgdmFsdWUuXG4gKiBAcGFyYW0ge1N0cmluZ30gc3VmZml4XG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW1lbnRcbiAqL1xuXG5mdW5jdGlvbiBnZXRBdHRyaWJ1dGVWYWx1ZShzdWZmaXgsIGVsZW1lbnQpIHtcbiAgdmFyIGF0dHJpYnV0ZSA9IFwiZGF0YS1jbGlwYm9hcmQtXCIuY29uY2F0KHN1ZmZpeCk7XG5cbiAgaWYgKCFlbGVtZW50Lmhhc0F0dHJpYnV0ZShhdHRyaWJ1dGUpKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnQuZ2V0QXR0cmlidXRlKGF0dHJpYnV0ZSk7XG59XG4vKipcbiAqIEJhc2UgY2xhc3Mgd2hpY2ggdGFrZXMgb25lIG9yIG1vcmUgZWxlbWVudHMsIGFkZHMgZXZlbnQgbGlzdGVuZXJzIHRvIHRoZW0sXG4gKiBhbmQgaW5zdGFudGlhdGVzIGEgbmV3IGBDbGlwYm9hcmRBY3Rpb25gIG9uIGVhY2ggY2xpY2suXG4gKi9cblxuXG52YXIgQ2xpcGJvYXJkID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfRW1pdHRlcikge1xuICBfaW5oZXJpdHMoQ2xpcGJvYXJkLCBfRW1pdHRlcik7XG5cbiAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihDbGlwYm9hcmQpO1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge1N0cmluZ3xIVE1MRWxlbWVudHxIVE1MQ29sbGVjdGlvbnxOb2RlTGlzdH0gdHJpZ2dlclxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICAgKi9cbiAgZnVuY3Rpb24gQ2xpcGJvYXJkKHRyaWdnZXIsIG9wdGlvbnMpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQ2xpcGJvYXJkKTtcblxuICAgIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcyk7XG5cbiAgICBfdGhpcy5yZXNvbHZlT3B0aW9ucyhvcHRpb25zKTtcblxuICAgIF90aGlzLmxpc3RlbkNsaWNrKHRyaWdnZXIpO1xuXG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG4gIC8qKlxuICAgKiBEZWZpbmVzIGlmIGF0dHJpYnV0ZXMgd291bGQgYmUgcmVzb2x2ZWQgdXNpbmcgaW50ZXJuYWwgc2V0dGVyIGZ1bmN0aW9uc1xuICAgKiBvciBjdXN0b20gZnVuY3Rpb25zIHRoYXQgd2VyZSBwYXNzZWQgaW4gdGhlIGNvbnN0cnVjdG9yLlxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICAgKi9cblxuXG4gIF9jcmVhdGVDbGFzcyhDbGlwYm9hcmQsIFt7XG4gICAga2V5OiBcInJlc29sdmVPcHRpb25zXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlc29sdmVPcHRpb25zKCkge1xuICAgICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuICAgICAgdGhpcy5hY3Rpb24gPSB0eXBlb2Ygb3B0aW9ucy5hY3Rpb24gPT09ICdmdW5jdGlvbicgPyBvcHRpb25zLmFjdGlvbiA6IHRoaXMuZGVmYXVsdEFjdGlvbjtcbiAgICAgIHRoaXMudGFyZ2V0ID0gdHlwZW9mIG9wdGlvbnMudGFyZ2V0ID09PSAnZnVuY3Rpb24nID8gb3B0aW9ucy50YXJnZXQgOiB0aGlzLmRlZmF1bHRUYXJnZXQ7XG4gICAgICB0aGlzLnRleHQgPSB0eXBlb2Ygb3B0aW9ucy50ZXh0ID09PSAnZnVuY3Rpb24nID8gb3B0aW9ucy50ZXh0IDogdGhpcy5kZWZhdWx0VGV4dDtcbiAgICAgIHRoaXMuY29udGFpbmVyID0gY2xpcGJvYXJkX3R5cGVvZihvcHRpb25zLmNvbnRhaW5lcikgPT09ICdvYmplY3QnID8gb3B0aW9ucy5jb250YWluZXIgOiBkb2N1bWVudC5ib2R5O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBZGRzIGEgY2xpY2sgZXZlbnQgbGlzdGVuZXIgdG8gdGhlIHBhc3NlZCB0cmlnZ2VyLlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfEhUTUxFbGVtZW50fEhUTUxDb2xsZWN0aW9ufE5vZGVMaXN0fSB0cmlnZ2VyXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJsaXN0ZW5DbGlja1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBsaXN0ZW5DbGljayh0cmlnZ2VyKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgdGhpcy5saXN0ZW5lciA9IGxpc3Rlbl9kZWZhdWx0KCkodHJpZ2dlciwgJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzMi5vbkNsaWNrKGUpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIERlZmluZXMgYSBuZXcgYENsaXBib2FyZEFjdGlvbmAgb24gZWFjaCBjbGljayBldmVudC5cbiAgICAgKiBAcGFyYW0ge0V2ZW50fSBlXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJvbkNsaWNrXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uQ2xpY2soZSkge1xuICAgICAgdmFyIHRyaWdnZXIgPSBlLmRlbGVnYXRlVGFyZ2V0IHx8IGUuY3VycmVudFRhcmdldDtcbiAgICAgIHZhciBhY3Rpb24gPSB0aGlzLmFjdGlvbih0cmlnZ2VyKSB8fCAnY29weSc7XG4gICAgICB2YXIgdGV4dCA9IGFjdGlvbnNfZGVmYXVsdCh7XG4gICAgICAgIGFjdGlvbjogYWN0aW9uLFxuICAgICAgICBjb250YWluZXI6IHRoaXMuY29udGFpbmVyLFxuICAgICAgICB0YXJnZXQ6IHRoaXMudGFyZ2V0KHRyaWdnZXIpLFxuICAgICAgICB0ZXh0OiB0aGlzLnRleHQodHJpZ2dlcilcbiAgICAgIH0pOyAvLyBGaXJlcyBhbiBldmVudCBiYXNlZCBvbiB0aGUgY29weSBvcGVyYXRpb24gcmVzdWx0LlxuXG4gICAgICB0aGlzLmVtaXQodGV4dCA/ICdzdWNjZXNzJyA6ICdlcnJvcicsIHtcbiAgICAgICAgYWN0aW9uOiBhY3Rpb24sXG4gICAgICAgIHRleHQ6IHRleHQsXG4gICAgICAgIHRyaWdnZXI6IHRyaWdnZXIsXG4gICAgICAgIGNsZWFyU2VsZWN0aW9uOiBmdW5jdGlvbiBjbGVhclNlbGVjdGlvbigpIHtcbiAgICAgICAgICBpZiAodHJpZ2dlcikge1xuICAgICAgICAgICAgdHJpZ2dlci5mb2N1cygpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHdpbmRvdy5nZXRTZWxlY3Rpb24oKS5yZW1vdmVBbGxSYW5nZXMoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIERlZmF1bHQgYGFjdGlvbmAgbG9va3VwIGZ1bmN0aW9uLlxuICAgICAqIEBwYXJhbSB7RWxlbWVudH0gdHJpZ2dlclxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZGVmYXVsdEFjdGlvblwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBkZWZhdWx0QWN0aW9uKHRyaWdnZXIpIHtcbiAgICAgIHJldHVybiBnZXRBdHRyaWJ1dGVWYWx1ZSgnYWN0aW9uJywgdHJpZ2dlcik7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIERlZmF1bHQgYHRhcmdldGAgbG9va3VwIGZ1bmN0aW9uLlxuICAgICAqIEBwYXJhbSB7RWxlbWVudH0gdHJpZ2dlclxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZGVmYXVsdFRhcmdldFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBkZWZhdWx0VGFyZ2V0KHRyaWdnZXIpIHtcbiAgICAgIHZhciBzZWxlY3RvciA9IGdldEF0dHJpYnV0ZVZhbHVlKCd0YXJnZXQnLCB0cmlnZ2VyKTtcblxuICAgICAgaWYgKHNlbGVjdG9yKSB7XG4gICAgICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbiAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogQWxsb3cgZmlyZSBwcm9ncmFtbWF0aWNhbGx5IGEgY29weSBhY3Rpb25cbiAgICAgKiBAcGFyYW0ge1N0cmluZ3xIVE1MRWxlbWVudH0gdGFyZ2V0XG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAgICAgKiBAcmV0dXJucyBUZXh0IGNvcGllZC5cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImRlZmF1bHRUZXh0XCIsXG5cbiAgICAvKipcbiAgICAgKiBEZWZhdWx0IGB0ZXh0YCBsb29rdXAgZnVuY3Rpb24uXG4gICAgICogQHBhcmFtIHtFbGVtZW50fSB0cmlnZ2VyXG4gICAgICovXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGRlZmF1bHRUZXh0KHRyaWdnZXIpIHtcbiAgICAgIHJldHVybiBnZXRBdHRyaWJ1dGVWYWx1ZSgndGV4dCcsIHRyaWdnZXIpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBEZXN0cm95IGxpZmVjeWNsZS5cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImRlc3Ryb3lcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICAgIHRoaXMubGlzdGVuZXIuZGVzdHJveSgpO1xuICAgIH1cbiAgfV0sIFt7XG4gICAga2V5OiBcImNvcHlcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29weSh0YXJnZXQpIHtcbiAgICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7XG4gICAgICAgIGNvbnRhaW5lcjogZG9jdW1lbnQuYm9keVxuICAgICAgfTtcbiAgICAgIHJldHVybiBhY3Rpb25zX2NvcHkodGFyZ2V0LCBvcHRpb25zKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQWxsb3cgZmlyZSBwcm9ncmFtbWF0aWNhbGx5IGEgY3V0IGFjdGlvblxuICAgICAqIEBwYXJhbSB7U3RyaW5nfEhUTUxFbGVtZW50fSB0YXJnZXRcbiAgICAgKiBAcmV0dXJucyBUZXh0IGN1dHRlZC5cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImN1dFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjdXQodGFyZ2V0KSB7XG4gICAgICByZXR1cm4gYWN0aW9uc19jdXQodGFyZ2V0KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgc3VwcG9ydCBvZiB0aGUgZ2l2ZW4gYWN0aW9uLCBvciBhbGwgYWN0aW9ucyBpZiBubyBhY3Rpb24gaXNcbiAgICAgKiBnaXZlbi5cbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gW2FjdGlvbl1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImlzU3VwcG9ydGVkXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGlzU3VwcG9ydGVkKCkge1xuICAgICAgdmFyIGFjdGlvbiA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogWydjb3B5JywgJ2N1dCddO1xuICAgICAgdmFyIGFjdGlvbnMgPSB0eXBlb2YgYWN0aW9uID09PSAnc3RyaW5nJyA/IFthY3Rpb25dIDogYWN0aW9uO1xuICAgICAgdmFyIHN1cHBvcnQgPSAhIWRvY3VtZW50LnF1ZXJ5Q29tbWFuZFN1cHBvcnRlZDtcbiAgICAgIGFjdGlvbnMuZm9yRWFjaChmdW5jdGlvbiAoYWN0aW9uKSB7XG4gICAgICAgIHN1cHBvcnQgPSBzdXBwb3J0ICYmICEhZG9jdW1lbnQucXVlcnlDb21tYW5kU3VwcG9ydGVkKGFjdGlvbik7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBzdXBwb3J0O1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBDbGlwYm9hcmQ7XG59KCh0aW55X2VtaXR0ZXJfZGVmYXVsdCgpKSk7XG5cbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gdmFyIGNsaXBib2FyZCA9IChDbGlwYm9hcmQpO1xuXG4vKioqLyB9KSxcblxuLyoqKi8gODI4OlxuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSkge1xuXG52YXIgRE9DVU1FTlRfTk9ERV9UWVBFID0gOTtcblxuLyoqXG4gKiBBIHBvbHlmaWxsIGZvciBFbGVtZW50Lm1hdGNoZXMoKVxuICovXG5pZiAodHlwZW9mIEVsZW1lbnQgIT09ICd1bmRlZmluZWQnICYmICFFbGVtZW50LnByb3RvdHlwZS5tYXRjaGVzKSB7XG4gICAgdmFyIHByb3RvID0gRWxlbWVudC5wcm90b3R5cGU7XG5cbiAgICBwcm90by5tYXRjaGVzID0gcHJvdG8ubWF0Y2hlc1NlbGVjdG9yIHx8XG4gICAgICAgICAgICAgICAgICAgIHByb3RvLm1vek1hdGNoZXNTZWxlY3RvciB8fFxuICAgICAgICAgICAgICAgICAgICBwcm90by5tc01hdGNoZXNTZWxlY3RvciB8fFxuICAgICAgICAgICAgICAgICAgICBwcm90by5vTWF0Y2hlc1NlbGVjdG9yIHx8XG4gICAgICAgICAgICAgICAgICAgIHByb3RvLndlYmtpdE1hdGNoZXNTZWxlY3Rvcjtcbn1cblxuLyoqXG4gKiBGaW5kcyB0aGUgY2xvc2VzdCBwYXJlbnQgdGhhdCBtYXRjaGVzIGEgc2VsZWN0b3IuXG4gKlxuICogQHBhcmFtIHtFbGVtZW50fSBlbGVtZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gc2VsZWN0b3JcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufVxuICovXG5mdW5jdGlvbiBjbG9zZXN0IChlbGVtZW50LCBzZWxlY3Rvcikge1xuICAgIHdoaWxlIChlbGVtZW50ICYmIGVsZW1lbnQubm9kZVR5cGUgIT09IERPQ1VNRU5UX05PREVfVFlQRSkge1xuICAgICAgICBpZiAodHlwZW9mIGVsZW1lbnQubWF0Y2hlcyA9PT0gJ2Z1bmN0aW9uJyAmJlxuICAgICAgICAgICAgZWxlbWVudC5tYXRjaGVzKHNlbGVjdG9yKSkge1xuICAgICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgICAgICB9XG4gICAgICAgIGVsZW1lbnQgPSBlbGVtZW50LnBhcmVudE5vZGU7XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNsb3Nlc3Q7XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIDQzODpcbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIF9fdW51c2VkX3dlYnBhY2tfZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG52YXIgY2xvc2VzdCA9IF9fd2VicGFja19yZXF1aXJlX18oODI4KTtcblxuLyoqXG4gKiBEZWxlZ2F0ZXMgZXZlbnQgdG8gYSBzZWxlY3Rvci5cbiAqXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW1lbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBzZWxlY3RvclxuICogQHBhcmFtIHtTdHJpbmd9IHR5cGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gKiBAcGFyYW0ge0Jvb2xlYW59IHVzZUNhcHR1cmVcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqL1xuZnVuY3Rpb24gX2RlbGVnYXRlKGVsZW1lbnQsIHNlbGVjdG9yLCB0eXBlLCBjYWxsYmFjaywgdXNlQ2FwdHVyZSkge1xuICAgIHZhciBsaXN0ZW5lckZuID0gbGlzdGVuZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblxuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lckZuLCB1c2VDYXB0dXJlKTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIGRlc3Ryb3k6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHR5cGUsIGxpc3RlbmVyRm4sIHVzZUNhcHR1cmUpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4vKipcbiAqIERlbGVnYXRlcyBldmVudCB0byBhIHNlbGVjdG9yLlxuICpcbiAqIEBwYXJhbSB7RWxlbWVudHxTdHJpbmd8QXJyYXl9IFtlbGVtZW50c11cbiAqIEBwYXJhbSB7U3RyaW5nfSBzZWxlY3RvclxuICogQHBhcmFtIHtTdHJpbmd9IHR5cGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gKiBAcGFyYW0ge0Jvb2xlYW59IHVzZUNhcHR1cmVcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqL1xuZnVuY3Rpb24gZGVsZWdhdGUoZWxlbWVudHMsIHNlbGVjdG9yLCB0eXBlLCBjYWxsYmFjaywgdXNlQ2FwdHVyZSkge1xuICAgIC8vIEhhbmRsZSB0aGUgcmVndWxhciBFbGVtZW50IHVzYWdlXG4gICAgaWYgKHR5cGVvZiBlbGVtZW50cy5hZGRFdmVudExpc3RlbmVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBfZGVsZWdhdGUuYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcbiAgICB9XG5cbiAgICAvLyBIYW5kbGUgRWxlbWVudC1sZXNzIHVzYWdlLCBpdCBkZWZhdWx0cyB0byBnbG9iYWwgZGVsZWdhdGlvblxuICAgIGlmICh0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAvLyBVc2UgYGRvY3VtZW50YCBhcyB0aGUgZmlyc3QgcGFyYW1ldGVyLCB0aGVuIGFwcGx5IGFyZ3VtZW50c1xuICAgICAgICAvLyBUaGlzIGlzIGEgc2hvcnQgd2F5IHRvIC51bnNoaWZ0IGBhcmd1bWVudHNgIHdpdGhvdXQgcnVubmluZyBpbnRvIGRlb3B0aW1pemF0aW9uc1xuICAgICAgICByZXR1cm4gX2RlbGVnYXRlLmJpbmQobnVsbCwgZG9jdW1lbnQpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XG4gICAgfVxuXG4gICAgLy8gSGFuZGxlIFNlbGVjdG9yLWJhc2VkIHVzYWdlXG4gICAgaWYgKHR5cGVvZiBlbGVtZW50cyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgZWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGVsZW1lbnRzKTtcbiAgICB9XG5cbiAgICAvLyBIYW5kbGUgQXJyYXktbGlrZSBiYXNlZCB1c2FnZVxuICAgIHJldHVybiBBcnJheS5wcm90b3R5cGUubWFwLmNhbGwoZWxlbWVudHMsIGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgIHJldHVybiBfZGVsZWdhdGUoZWxlbWVudCwgc2VsZWN0b3IsIHR5cGUsIGNhbGxiYWNrLCB1c2VDYXB0dXJlKTtcbiAgICB9KTtcbn1cblxuLyoqXG4gKiBGaW5kcyBjbG9zZXN0IG1hdGNoIGFuZCBpbnZva2VzIGNhbGxiYWNrLlxuICpcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbWVudFxuICogQHBhcmFtIHtTdHJpbmd9IHNlbGVjdG9yXG4gKiBAcGFyYW0ge1N0cmluZ30gdHlwZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufVxuICovXG5mdW5jdGlvbiBsaXN0ZW5lcihlbGVtZW50LCBzZWxlY3RvciwgdHlwZSwgY2FsbGJhY2spIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oZSkge1xuICAgICAgICBlLmRlbGVnYXRlVGFyZ2V0ID0gY2xvc2VzdChlLnRhcmdldCwgc2VsZWN0b3IpO1xuXG4gICAgICAgIGlmIChlLmRlbGVnYXRlVGFyZ2V0KSB7XG4gICAgICAgICAgICBjYWxsYmFjay5jYWxsKGVsZW1lbnQsIGUpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRlbGVnYXRlO1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyA4Nzk6XG4vKioqLyAoZnVuY3Rpb24oX191bnVzZWRfd2VicGFja19tb2R1bGUsIGV4cG9ydHMpIHtcblxuLyoqXG4gKiBDaGVjayBpZiBhcmd1bWVudCBpcyBhIEhUTUwgZWxlbWVudC5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsdWVcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKi9cbmV4cG9ydHMubm9kZSA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlICE9PSB1bmRlZmluZWRcbiAgICAgICAgJiYgdmFsdWUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudFxuICAgICAgICAmJiB2YWx1ZS5ub2RlVHlwZSA9PT0gMTtcbn07XG5cbi8qKlxuICogQ2hlY2sgaWYgYXJndW1lbnQgaXMgYSBsaXN0IG9mIEhUTUwgZWxlbWVudHMuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbHVlXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICovXG5leHBvcnRzLm5vZGVMaXN0ID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICB2YXIgdHlwZSA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG5cbiAgICByZXR1cm4gdmFsdWUgIT09IHVuZGVmaW5lZFxuICAgICAgICAmJiAodHlwZSA9PT0gJ1tvYmplY3QgTm9kZUxpc3RdJyB8fCB0eXBlID09PSAnW29iamVjdCBIVE1MQ29sbGVjdGlvbl0nKVxuICAgICAgICAmJiAoJ2xlbmd0aCcgaW4gdmFsdWUpXG4gICAgICAgICYmICh2YWx1ZS5sZW5ndGggPT09IDAgfHwgZXhwb3J0cy5ub2RlKHZhbHVlWzBdKSk7XG59O1xuXG4vKipcbiAqIENoZWNrIGlmIGFyZ3VtZW50IGlzIGEgc3RyaW5nLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWx1ZVxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuZXhwb3J0cy5zdHJpbmcgPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnXG4gICAgICAgIHx8IHZhbHVlIGluc3RhbmNlb2YgU3RyaW5nO1xufTtcblxuLyoqXG4gKiBDaGVjayBpZiBhcmd1bWVudCBpcyBhIGZ1bmN0aW9uLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWx1ZVxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuZXhwb3J0cy5mbiA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgdmFyIHR5cGUgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpO1xuXG4gICAgcmV0dXJuIHR5cGUgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXSc7XG59O1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyAzNzA6XG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBfX3VudXNlZF93ZWJwYWNrX2V4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxudmFyIGlzID0gX193ZWJwYWNrX3JlcXVpcmVfXyg4NzkpO1xudmFyIGRlbGVnYXRlID0gX193ZWJwYWNrX3JlcXVpcmVfXyg0MzgpO1xuXG4vKipcbiAqIFZhbGlkYXRlcyBhbGwgcGFyYW1zIGFuZCBjYWxscyB0aGUgcmlnaHRcbiAqIGxpc3RlbmVyIGZ1bmN0aW9uIGJhc2VkIG9uIGl0cyB0YXJnZXQgdHlwZS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ3xIVE1MRWxlbWVudHxIVE1MQ29sbGVjdGlvbnxOb2RlTGlzdH0gdGFyZ2V0XG4gKiBAcGFyYW0ge1N0cmluZ30gdHlwZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqL1xuZnVuY3Rpb24gbGlzdGVuKHRhcmdldCwgdHlwZSwgY2FsbGJhY2spIHtcbiAgICBpZiAoIXRhcmdldCAmJiAhdHlwZSAmJiAhY2FsbGJhY2spIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIHJlcXVpcmVkIGFyZ3VtZW50cycpO1xuICAgIH1cblxuICAgIGlmICghaXMuc3RyaW5nKHR5cGUpKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1NlY29uZCBhcmd1bWVudCBtdXN0IGJlIGEgU3RyaW5nJyk7XG4gICAgfVxuXG4gICAgaWYgKCFpcy5mbihjYWxsYmFjaykpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVGhpcmQgYXJndW1lbnQgbXVzdCBiZSBhIEZ1bmN0aW9uJyk7XG4gICAgfVxuXG4gICAgaWYgKGlzLm5vZGUodGFyZ2V0KSkge1xuICAgICAgICByZXR1cm4gbGlzdGVuTm9kZSh0YXJnZXQsIHR5cGUsIGNhbGxiYWNrKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoaXMubm9kZUxpc3QodGFyZ2V0KSkge1xuICAgICAgICByZXR1cm4gbGlzdGVuTm9kZUxpc3QodGFyZ2V0LCB0eXBlLCBjYWxsYmFjayk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGlzLnN0cmluZyh0YXJnZXQpKSB7XG4gICAgICAgIHJldHVybiBsaXN0ZW5TZWxlY3Rvcih0YXJnZXQsIHR5cGUsIGNhbGxiYWNrKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ZpcnN0IGFyZ3VtZW50IG11c3QgYmUgYSBTdHJpbmcsIEhUTUxFbGVtZW50LCBIVE1MQ29sbGVjdGlvbiwgb3IgTm9kZUxpc3QnKTtcbiAgICB9XG59XG5cbi8qKlxuICogQWRkcyBhbiBldmVudCBsaXN0ZW5lciB0byBhIEhUTUwgZWxlbWVudFxuICogYW5kIHJldHVybnMgYSByZW1vdmUgbGlzdGVuZXIgZnVuY3Rpb24uXG4gKlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gbm9kZVxuICogQHBhcmFtIHtTdHJpbmd9IHR5cGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cbmZ1bmN0aW9uIGxpc3Rlbk5vZGUobm9kZSwgdHlwZSwgY2FsbGJhY2spIHtcbiAgICBub2RlLmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgY2FsbGJhY2spO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZGVzdHJveTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIodHlwZSwgY2FsbGJhY2spO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4vKipcbiAqIEFkZCBhbiBldmVudCBsaXN0ZW5lciB0byBhIGxpc3Qgb2YgSFRNTCBlbGVtZW50c1xuICogYW5kIHJldHVybnMgYSByZW1vdmUgbGlzdGVuZXIgZnVuY3Rpb24uXG4gKlxuICogQHBhcmFtIHtOb2RlTGlzdHxIVE1MQ29sbGVjdGlvbn0gbm9kZUxpc3RcbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICogQHJldHVybiB7T2JqZWN0fVxuICovXG5mdW5jdGlvbiBsaXN0ZW5Ob2RlTGlzdChub2RlTGlzdCwgdHlwZSwgY2FsbGJhY2spIHtcbiAgICBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKG5vZGVMaXN0LCBmdW5jdGlvbihub2RlKSB7XG4gICAgICAgIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBjYWxsYmFjayk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBkZXN0cm95OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwobm9kZUxpc3QsIGZ1bmN0aW9uKG5vZGUpIHtcbiAgICAgICAgICAgICAgICBub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIodHlwZSwgY2FsbGJhY2spO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8qKlxuICogQWRkIGFuIGV2ZW50IGxpc3RlbmVyIHRvIGEgc2VsZWN0b3JcbiAqIGFuZCByZXR1cm5zIGEgcmVtb3ZlIGxpc3RlbmVyIGZ1bmN0aW9uLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzZWxlY3RvclxuICogQHBhcmFtIHtTdHJpbmd9IHR5cGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cbmZ1bmN0aW9uIGxpc3RlblNlbGVjdG9yKHNlbGVjdG9yLCB0eXBlLCBjYWxsYmFjaykge1xuICAgIHJldHVybiBkZWxlZ2F0ZShkb2N1bWVudC5ib2R5LCBzZWxlY3RvciwgdHlwZSwgY2FsbGJhY2spO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGxpc3RlbjtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gODE3OlxuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSkge1xuXG5mdW5jdGlvbiBzZWxlY3QoZWxlbWVudCkge1xuICAgIHZhciBzZWxlY3RlZFRleHQ7XG5cbiAgICBpZiAoZWxlbWVudC5ub2RlTmFtZSA9PT0gJ1NFTEVDVCcpIHtcbiAgICAgICAgZWxlbWVudC5mb2N1cygpO1xuXG4gICAgICAgIHNlbGVjdGVkVGV4dCA9IGVsZW1lbnQudmFsdWU7XG4gICAgfVxuICAgIGVsc2UgaWYgKGVsZW1lbnQubm9kZU5hbWUgPT09ICdJTlBVVCcgfHwgZWxlbWVudC5ub2RlTmFtZSA9PT0gJ1RFWFRBUkVBJykge1xuICAgICAgICB2YXIgaXNSZWFkT25seSA9IGVsZW1lbnQuaGFzQXR0cmlidXRlKCdyZWFkb25seScpO1xuXG4gICAgICAgIGlmICghaXNSZWFkT25seSkge1xuICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3JlYWRvbmx5JywgJycpO1xuICAgICAgICB9XG5cbiAgICAgICAgZWxlbWVudC5zZWxlY3QoKTtcbiAgICAgICAgZWxlbWVudC5zZXRTZWxlY3Rpb25SYW5nZSgwLCBlbGVtZW50LnZhbHVlLmxlbmd0aCk7XG5cbiAgICAgICAgaWYgKCFpc1JlYWRPbmx5KSB7XG4gICAgICAgICAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgncmVhZG9ubHknKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNlbGVjdGVkVGV4dCA9IGVsZW1lbnQudmFsdWU7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBpZiAoZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2NvbnRlbnRlZGl0YWJsZScpKSB7XG4gICAgICAgICAgICBlbGVtZW50LmZvY3VzKCk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgc2VsZWN0aW9uID0gd2luZG93LmdldFNlbGVjdGlvbigpO1xuICAgICAgICB2YXIgcmFuZ2UgPSBkb2N1bWVudC5jcmVhdGVSYW5nZSgpO1xuXG4gICAgICAgIHJhbmdlLnNlbGVjdE5vZGVDb250ZW50cyhlbGVtZW50KTtcbiAgICAgICAgc2VsZWN0aW9uLnJlbW92ZUFsbFJhbmdlcygpO1xuICAgICAgICBzZWxlY3Rpb24uYWRkUmFuZ2UocmFuZ2UpO1xuXG4gICAgICAgIHNlbGVjdGVkVGV4dCA9IHNlbGVjdGlvbi50b1N0cmluZygpO1xuICAgIH1cblxuICAgIHJldHVybiBzZWxlY3RlZFRleHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2VsZWN0O1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyAyNzk6XG4vKioqLyAoZnVuY3Rpb24obW9kdWxlKSB7XG5cbmZ1bmN0aW9uIEUgKCkge1xuICAvLyBLZWVwIHRoaXMgZW1wdHkgc28gaXQncyBlYXNpZXIgdG8gaW5oZXJpdCBmcm9tXG4gIC8vICh2aWEgaHR0cHM6Ly9naXRodWIuY29tL2xpcHNtYWNrIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL3Njb3R0Y29yZ2FuL3RpbnktZW1pdHRlci9pc3N1ZXMvMylcbn1cblxuRS5wcm90b3R5cGUgPSB7XG4gIG9uOiBmdW5jdGlvbiAobmFtZSwgY2FsbGJhY2ssIGN0eCkge1xuICAgIHZhciBlID0gdGhpcy5lIHx8ICh0aGlzLmUgPSB7fSk7XG5cbiAgICAoZVtuYW1lXSB8fCAoZVtuYW1lXSA9IFtdKSkucHVzaCh7XG4gICAgICBmbjogY2FsbGJhY2ssXG4gICAgICBjdHg6IGN0eFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH0sXG5cbiAgb25jZTogZnVuY3Rpb24gKG5hbWUsIGNhbGxiYWNrLCBjdHgpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgZnVuY3Rpb24gbGlzdGVuZXIgKCkge1xuICAgICAgc2VsZi5vZmYobmFtZSwgbGlzdGVuZXIpO1xuICAgICAgY2FsbGJhY2suYXBwbHkoY3R4LCBhcmd1bWVudHMpO1xuICAgIH07XG5cbiAgICBsaXN0ZW5lci5fID0gY2FsbGJhY2tcbiAgICByZXR1cm4gdGhpcy5vbihuYW1lLCBsaXN0ZW5lciwgY3R4KTtcbiAgfSxcblxuICBlbWl0OiBmdW5jdGlvbiAobmFtZSkge1xuICAgIHZhciBkYXRhID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuICAgIHZhciBldnRBcnIgPSAoKHRoaXMuZSB8fCAodGhpcy5lID0ge30pKVtuYW1lXSB8fCBbXSkuc2xpY2UoKTtcbiAgICB2YXIgaSA9IDA7XG4gICAgdmFyIGxlbiA9IGV2dEFyci5sZW5ndGg7XG5cbiAgICBmb3IgKGk7IGkgPCBsZW47IGkrKykge1xuICAgICAgZXZ0QXJyW2ldLmZuLmFwcGx5KGV2dEFycltpXS5jdHgsIGRhdGEpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9LFxuXG4gIG9mZjogZnVuY3Rpb24gKG5hbWUsIGNhbGxiYWNrKSB7XG4gICAgdmFyIGUgPSB0aGlzLmUgfHwgKHRoaXMuZSA9IHt9KTtcbiAgICB2YXIgZXZ0cyA9IGVbbmFtZV07XG4gICAgdmFyIGxpdmVFdmVudHMgPSBbXTtcblxuICAgIGlmIChldnRzICYmIGNhbGxiYWNrKSB7XG4gICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gZXZ0cy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICBpZiAoZXZ0c1tpXS5mbiAhPT0gY2FsbGJhY2sgJiYgZXZ0c1tpXS5mbi5fICE9PSBjYWxsYmFjaylcbiAgICAgICAgICBsaXZlRXZlbnRzLnB1c2goZXZ0c1tpXSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmVtb3ZlIGV2ZW50IGZyb20gcXVldWUgdG8gcHJldmVudCBtZW1vcnkgbGVha1xuICAgIC8vIFN1Z2dlc3RlZCBieSBodHRwczovL2dpdGh1Yi5jb20vbGF6ZFxuICAgIC8vIFJlZjogaHR0cHM6Ly9naXRodWIuY29tL3Njb3R0Y29yZ2FuL3RpbnktZW1pdHRlci9jb21taXQvYzZlYmZhYTliYzk3M2IzM2QxMTBhODRhMzA3NzQyYjdjZjk0Yzk1MyNjb21taXRjb21tZW50LTUwMjQ5MTBcblxuICAgIChsaXZlRXZlbnRzLmxlbmd0aClcbiAgICAgID8gZVtuYW1lXSA9IGxpdmVFdmVudHNcbiAgICAgIDogZGVsZXRlIGVbbmFtZV07XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBFO1xubW9kdWxlLmV4cG9ydHMuVGlueUVtaXR0ZXIgPSBFO1xuXG5cbi8qKiovIH0pXG5cbi8qKioqKiovIFx0fSk7XG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKi8gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdHZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcbi8qKioqKiovIFx0XG4vKioqKioqLyBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4vKioqKioqLyBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcbi8qKioqKiovIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbi8qKioqKiovIFx0XHRpZihfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdKSB7XG4vKioqKioqLyBcdFx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuLyoqKioqKi8gXHRcdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuLyoqKioqKi8gXHRcdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuLyoqKioqKi8gXHRcdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcbi8qKioqKiovIFx0XHRcdGV4cG9ydHM6IHt9XG4vKioqKioqLyBcdFx0fTtcbi8qKioqKiovIFx0XG4vKioqKioqLyBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4vKioqKioqLyBcdFx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4vKioqKioqLyBcdFxuLyoqKioqKi8gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4vKioqKioqLyBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuLyoqKioqKi8gXHR9XG4vKioqKioqLyBcdFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKiovIFx0Lyogd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQgKi9cbi8qKioqKiovIFx0IWZ1bmN0aW9uKCkge1xuLyoqKioqKi8gXHRcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4vKioqKioqLyBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4vKioqKioqLyBcdFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbi8qKioqKiovIFx0XHRcdFx0ZnVuY3Rpb24oKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4vKioqKioqLyBcdFx0XHRcdGZ1bmN0aW9uKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuLyoqKioqKi8gXHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG4vKioqKioqLyBcdFx0XHRyZXR1cm4gZ2V0dGVyO1xuLyoqKioqKi8gXHRcdH07XG4vKioqKioqLyBcdH0oKTtcbi8qKioqKiovIFx0XG4vKioqKioqLyBcdC8qIHdlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyAqL1xuLyoqKioqKi8gXHQhZnVuY3Rpb24oKSB7XG4vKioqKioqLyBcdFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuLyoqKioqKi8gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIGRlZmluaXRpb24pIHtcbi8qKioqKiovIFx0XHRcdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcbi8qKioqKiovIFx0XHRcdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG4vKioqKioqLyBcdFx0XHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcbi8qKioqKiovIFx0XHRcdFx0fVxuLyoqKioqKi8gXHRcdFx0fVxuLyoqKioqKi8gXHRcdH07XG4vKioqKioqLyBcdH0oKTtcbi8qKioqKiovIFx0XG4vKioqKioqLyBcdC8qIHdlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQgKi9cbi8qKioqKiovIFx0IWZ1bmN0aW9uKCkge1xuLyoqKioqKi8gXHRcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iaiwgcHJvcCkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCk7IH1cbi8qKioqKiovIFx0fSgpO1xuLyoqKioqKi8gXHRcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqLyBcdC8vIG1vZHVsZSBleHBvcnRzIG11c3QgYmUgcmV0dXJuZWQgZnJvbSBydW50aW1lIHNvIGVudHJ5IGlubGluaW5nIGlzIGRpc2FibGVkXG4vKioqKioqLyBcdC8vIHN0YXJ0dXBcbi8qKioqKiovIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vKioqKioqLyBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDY4Nik7XG4vKioqKioqLyB9KSgpXG4uZGVmYXVsdDtcbn0pOyIsICJleHBvcnQge2RlZmF1bHQgYXMgQ2xpcGJvYXJkfSBmcm9tICdjbGlwYm9hcmQnO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxvQkFBQUMsV0FBQTtFQUFBLCtFQUFBQyxVQUFBQyxTQUFBO0lBQUE7Ozs7OztBQU1BLEtBQUMsU0FBU0MsaUNBQWlDQyxNQUFNQyxTQUFTO0FBQ3pELFVBQUcsT0FBT0osYUFBWSxZQUFZLE9BQU9DLFlBQVcsU0FDbkRBLFNBQU9ELFVBQVVJLFFBQVE7ZUFDbEIsT0FBT0MsV0FBVyxjQUFjQSxPQUFPQyxJQUM5Q0QsUUFBTyxDQUFBLEdBQUlELE9BQU87ZUFDWCxPQUFPSixhQUFZLFNBQzFCQSxDQUFBQSxTQUFRLGFBQWEsSUFBSUksUUFBUTtVQUVqQ0QsTUFBSyxhQUFhLElBQUlDLFFBQVE7SUFDaEMsR0FBR0osVUFBTSxXQUFXO0FBQ3BCOztTQUFpQixXQUFXO0FBQ2xCLGNBQUlPLHNCQUF1Qjs7WUFFL0I7O2VBQ0MsU0FBU0MseUJBQXlCQyxxQkFBcUJDLHNCQUFxQjtBQUVuRjtBQUdBQSxxQ0FBb0JDLEVBQUVGLHFCQUFxQjtrQkFDekMsV0FBVyxXQUFXO0FBQUU7O3NCQUFxQkc7O2tCQUFXO2dCQUMxRCxDQUFDO0FBR0Qsb0JBQUlDLGVBQWVILHFCQUFvQixHQUFHO0FB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S0QsV0FBVy9JLEdBQUc7a0JBQUUsQ0FBQztnQkFDL0U7Y0FDRDtZQUNEO1VBQ0QsR0FBRTtBQUdGLFlBQUMsV0FBVztBQUNYMEksZ0NBQW9CakksSUFBSSxTQUFTdkMsS0FBSytLLE1BQU07QUFBRSxxQkFBT25KLE9BQU90QixVQUFVMEssZUFBZXBILEtBQUs1RCxLQUFLK0ssSUFBSTtZQUFHO1VBQ3ZHLEdBQUU7QUFNRixpQkFBT1Asb0JBQW9CLEdBQUc7UUFDL0IsR0FBRyxFQUNYUzs7SUFDRCxDQUFDO0VBQUE7QUFBQSxDQUFBOztBQ3ozQkQsSUFBQUMsb0JBQUEsQ0FBQTtBQUFBQyxTQUFBRCxtQkFBQTtFQUFBeEcsV0FBQUEsTUFBQTBHLGlCQUFBSDtBQUFBLENBQUE7QUFBQUksT0FBQXRQLFVBQUF1UCxhQUFBSixpQkFBQTtBQUFBLElBQUFFLG1CQUFtQ0csUUFBQTFQLGtCQUFBLEdBQUEsQ0FBQTsiLAogICJuYW1lcyI6IFsicmVxdWlyZV9jbGlwYm9hcmQiLCAiX19jb21tb25KUyIsICJleHBvcnRzIiwgIm1vZHVsZTIiLCAid2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCAicm9vdCIsICJmYWN0b3J5IiwgImRlZmluZSIsICJhbWQiLCAiX193ZWJwYWNrX21vZHVsZXNfXyIsICJfX3VudXNlZF93ZWJwYWNrX21vZHVsZSIsICJfX3dlYnBhY2tfZXhwb3J0c19fIiwgIl9fd2VicGFja19yZXF1aXJlX18yIiwgImQiLCAiY2xpcGJvYXJkIiwgInRpbnlfZW1pdHRlciIsICJ0aW55X2VtaXR0ZXJfZGVmYXVsdCIsICJuIiwgImxpc3RlbiIsICJsaXN0ZW5fZGVmYXVsdCIsICJzcmNfc2VsZWN0IiwgInNlbGVjdF9kZWZhdWx0IiwgImNvbW1hbmQiLCAidHlwZSIsICJkb2N1bWVudCIsICJleGVjQ29tbWFuZCIsICJlcnIiLCAiQ2xpcGJvYXJkQWN0aW9uQ3V0IiwgIkNsaXBib2FyZEFjdGlvbkN1dDIiLCAidGFyZ2V0IiwgInNlbGVjdGVkVGV4dCIsICJhY3Rpb25zX2N1dCIsICJjcmVhdGVGYWtlRWxlbWVudCIsICJ2YWx1ZSIsICJpc1JUTCIsICJkb2N1bWVudEVsZW1lbnQiLCAiZ2V0QXR0cmlidXRlIiwgImZha2VFbGVtZW50IiwgImNyZWF0ZUVsZW1lbnQiLCAic3R5bGUiLCAiZm9udFNpemUiLCAiYm9yZGVyIiwgInBhZGRpbmciLCAibWFyZ2luIiwgInBvc2l0aW9uIiwgInlQb3NpdGlvbiIsICJ3aW5kb3ciLCAicGFnZVlPZmZzZXQiLCAic2Nyb2xsVG9wIiwgInRvcCIsICJjb25jYXQiLCAic2V0QXR0cmlidXRlIiwgImZha2VDb3B5QWN0aW9uIiwgImZha2VDb3B5QWN0aW9uMiIsICJvcHRpb25zIiwgImNvbnRhaW5lciIsICJhcHBlbmRDaGlsZCIsICJyZW1vdmUiLCAiQ2xpcGJvYXJkQWN0aW9uQ29weSIsICJDbGlwYm9hcmRBY3Rpb25Db3B5MiIsICJhcmd1bWVudHMiLCAibGVuZ3RoIiwgImJvZHkiLCAiSFRNTElucHV0RWxlbWVudCIsICJpbmNsdWRlcyIsICJhY3Rpb25zX2NvcHkiLCAiX3R5cGVvZiIsICJvYmoiLCAiU3ltYm9sIiwgIml0ZXJhdG9yIiwgIl90eXBlb2YyIiwgIm9iajIiLCAiY29uc3RydWN0b3IiLCAicHJvdG90eXBlIiwgIkNsaXBib2FyZEFjdGlvbkRlZmF1bHQiLCAiQ2xpcGJvYXJkQWN0aW9uRGVmYXVsdDIiLCAiX29wdGlvbnMkYWN0aW9uIiwgImFjdGlvbiIsICJ0ZXh0IiwgIkVycm9yIiwgIm5vZGVUeXBlIiwgImhhc0F0dHJpYnV0ZSIsICJhY3Rpb25zX2RlZmF1bHQiLCAiY2xpcGJvYXJkX3R5cGVvZiIsICJfY2xhc3NDYWxsQ2hlY2siLCAiaW5zdGFuY2UiLCAiQ29uc3RydWN0b3IiLCAiVHlwZUVycm9yIiwgIl9kZWZpbmVQcm9wZXJ0aWVzIiwgInByb3BzIiwgImkiLCAiZGVzY3JpcHRvciIsICJlbnVtZXJhYmxlIiwgImNvbmZpZ3VyYWJsZSIsICJ3cml0YWJsZSIsICJPYmplY3QiLCAiZGVmaW5lUHJvcGVydHkiLCAia2V5IiwgIl9jcmVhdGVDbGFzcyIsICJwcm90b1Byb3BzIiwgInN0YXRpY1Byb3BzIiwgIl9pbmhlcml0cyIsICJzdWJDbGFzcyIsICJzdXBlckNsYXNzIiwgImNyZWF0ZSIsICJfc2V0UHJvdG90eXBlT2YiLCAibyIsICJwIiwgInNldFByb3RvdHlwZU9mIiwgIl9zZXRQcm90b3R5cGVPZjIiLCAibzIiLCAicDIiLCAiX19wcm90b19fIiwgIl9jcmVhdGVTdXBlciIsICJEZXJpdmVkIiwgImhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QiLCAiX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCIsICJfY3JlYXRlU3VwZXJJbnRlcm5hbCIsICJTdXBlciIsICJfZ2V0UHJvdG90eXBlT2YiLCAicmVzdWx0IiwgIk5ld1RhcmdldCIsICJSZWZsZWN0IiwgImNvbnN0cnVjdCIsICJhcHBseSIsICJfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiIsICJzZWxmIiwgImNhbGwiLCAiX2Fzc2VydFRoaXNJbml0aWFsaXplZCIsICJSZWZlcmVuY2VFcnJvciIsICJzaGFtIiwgIlByb3h5IiwgIkRhdGUiLCAidG9TdHJpbmciLCAiZSIsICJnZXRQcm90b3R5cGVPZiIsICJfZ2V0UHJvdG90eXBlT2YyIiwgImdldEF0dHJpYnV0ZVZhbHVlIiwgInN1ZmZpeCIsICJlbGVtZW50IiwgImF0dHJpYnV0ZSIsICJDbGlwYm9hcmQiLCAiX0VtaXR0ZXIiLCAiQ2xpcGJvYXJkMiIsICJfc3VwZXIiLCAidHJpZ2dlciIsICJfdGhpcyIsICJyZXNvbHZlT3B0aW9ucyIsICJsaXN0ZW5DbGljayIsICJkZWZhdWx0QWN0aW9uIiwgImRlZmF1bHRUYXJnZXQiLCAiZGVmYXVsdFRleHQiLCAiX3RoaXMyIiwgImxpc3RlbmVyIiwgIm9uQ2xpY2siLCAiZGVsZWdhdGVUYXJnZXQiLCAiY3VycmVudFRhcmdldCIsICJlbWl0IiwgImNsZWFyU2VsZWN0aW9uIiwgImZvY3VzIiwgImdldFNlbGVjdGlvbiIsICJyZW1vdmVBbGxSYW5nZXMiLCAic2VsZWN0b3IiLCAicXVlcnlTZWxlY3RvciIsICJkZXN0cm95IiwgImNvcHkiLCAiY3V0IiwgImlzU3VwcG9ydGVkIiwgImFjdGlvbnMiLCAic3VwcG9ydCIsICJxdWVyeUNvbW1hbmRTdXBwb3J0ZWQiLCAiZm9yRWFjaCIsICJhY3Rpb24yIiwgIm1vZHVsZTMiLCAiRE9DVU1FTlRfTk9ERV9UWVBFIiwgIkVsZW1lbnQiLCAibWF0Y2hlcyIsICJwcm90byIsICJtYXRjaGVzU2VsZWN0b3IiLCAibW96TWF0Y2hlc1NlbGVjdG9yIiwgIm1zTWF0Y2hlc1NlbGVjdG9yIiwgIm9NYXRjaGVzU2VsZWN0b3IiLCAid2Via2l0TWF0Y2hlc1NlbGVjdG9yIiwgImNsb3Nlc3QiLCAicGFyZW50Tm9kZSIsICJfX3VudXNlZF93ZWJwYWNrX2V4cG9ydHMiLCAiX2RlbGVnYXRlIiwgImNhbGxiYWNrIiwgInVzZUNhcHR1cmUiLCAibGlzdGVuZXJGbiIsICJhZGRFdmVudExpc3RlbmVyIiwgInJlbW92ZUV2ZW50TGlzdGVuZXIiLCAiZGVsZWdhdGUiLCAiZWxlbWVudHMiLCAiYmluZCIsICJxdWVyeVNlbGVjdG9yQWxsIiwgIkFycmF5IiwgIm1hcCIsICJleHBvcnRzMiIsICJub2RlIiwgIkhUTUxFbGVtZW50IiwgIm5vZGVMaXN0IiwgInN0cmluZyIsICJTdHJpbmciLCAiZm4iLCAiaXMiLCAibGlzdGVuTm9kZSIsICJsaXN0ZW5Ob2RlTGlzdCIsICJsaXN0ZW5TZWxlY3RvciIsICJzZWxlY3QiLCAibm9kZU5hbWUiLCAiaXNSZWFkT25seSIsICJzZXRTZWxlY3Rpb25SYW5nZSIsICJyZW1vdmVBdHRyaWJ1dGUiLCAic2VsZWN0aW9uIiwgInJhbmdlIiwgImNyZWF0ZVJhbmdlIiwgInNlbGVjdE5vZGVDb250ZW50cyIsICJhZGRSYW5nZSIsICJFIiwgIm9uIiwgIm5hbWUiLCAiY3R4IiwgInB1c2giLCAib25jZSIsICJvZmYiLCAiXyIsICJkYXRhIiwgInNsaWNlIiwgImV2dEFyciIsICJsZW4iLCAiZXZ0cyIsICJsaXZlRXZlbnRzIiwgIlRpbnlFbWl0dGVyIiwgIl9fd2VicGFja19tb2R1bGVfY2FjaGVfXyIsICJfX3dlYnBhY2tfcmVxdWlyZV9fIiwgIm1vZHVsZUlkIiwgImdldHRlciIsICJfX2VzTW9kdWxlIiwgImEiLCAiZGVmaW5pdGlvbiIsICJnZXQiLCAicHJvcCIsICJoYXNPd25Qcm9wZXJ0eSIsICJkZWZhdWx0IiwgIkNsaXBib2FyZF9leHBvcnRzIiwgIl9fZXhwb3J0IiwgImltcG9ydF9jbGlwYm9hcmQiLCAibW9kdWxlIiwgIl9fdG9Db21tb25KUyIsICJfX3RvRVNNIl0KfQo=

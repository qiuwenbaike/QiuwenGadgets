/**
 * SPDX-License-Identifier: MIT
 * _addText: '{{Gadget Header|license=MIT}}'
 *
 * @base {@link https://github.com/atomiks/tippyjs}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/Tippy}
 * @license MIT {@link https://github.com/atomiks/tippyjs/blob/master/LICENSE}
 */

/**
 * Copyright (c) 2017-present atomiks
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
var __getOwnPropNames = Object.getOwnPropertyNames;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/global.js
var require_global = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/global.js"(exports2, module2) {
    "use strict";
    var check = function(it) {
      return it && it.Math === Math && it;
    };
    module2.exports = // eslint-disable-next-line es/no-global-this -- safe
    check(typeof globalThis == "object" && globalThis) || check(typeof window == "object" && window) || // eslint-disable-next-line no-restricted-globals -- safe
    check(typeof self == "object" && self) || check(typeof global == "object" && global) || check(typeof exports2 == "object" && exports2) || // eslint-disable-next-line no-new-func -- fallback
    /* @__PURE__ */ function() {
      return this;
    }() || Function("return this")();
  }
});

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/fails.js
var require_fails = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/fails.js"(exports2, module2) {
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

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/descriptors.js
var require_descriptors = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/descriptors.js"(exports2, module2) {
    "use strict";
    var fails = require_fails();
    module2.exports = !fails(function() {
      return Object.defineProperty({}, 1, { get: function() {
        return 7;
      } })[1] !== 7;
    });
  }
});

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/function-bind-native.js
var require_function_bind_native = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/function-bind-native.js"(exports2, module2) {
    "use strict";
    var fails = require_fails();
    module2.exports = !fails(function() {
      var test = function() {
      }.bind();
      return typeof test != "function" || test.hasOwnProperty("prototype");
    });
  }
});

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/function-call.js
var require_function_call = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/function-call.js"(exports2, module2) {
    "use strict";
    var NATIVE_BIND = require_function_bind_native();
    var call = Function.prototype.call;
    module2.exports = NATIVE_BIND ? call.bind(call) : function() {
      return call.apply(call, arguments);
    };
  }
});

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/object-property-is-enumerable.js
var require_object_property_is_enumerable = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/object-property-is-enumerable.js"(exports2) {
    "use strict";
    var $propertyIsEnumerable = {}.propertyIsEnumerable;
    var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({ 1: 2 }, 1);
    exports2.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
      var descriptor = getOwnPropertyDescriptor(this, V);
      return !!descriptor && descriptor.enumerable;
    } : $propertyIsEnumerable;
  }
});

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/create-property-descriptor.js
var require_create_property_descriptor = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/create-property-descriptor.js"(exports2, module2) {
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

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/function-uncurry-this.js
var require_function_uncurry_this = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/function-uncurry-this.js"(exports2, module2) {
    "use strict";
    var NATIVE_BIND = require_function_bind_native();
    var FunctionPrototype = Function.prototype;
    var call = FunctionPrototype.call;
    var uncurryThisWithBind = NATIVE_BIND && FunctionPrototype.bind.bind(call, call);
    module2.exports = NATIVE_BIND ? uncurryThisWithBind : function(fn2) {
      return function() {
        return call.apply(fn2, arguments);
      };
    };
  }
});

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/classof-raw.js
var require_classof_raw = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/classof-raw.js"(exports2, module2) {
    "use strict";
    var uncurryThis = require_function_uncurry_this();
    var toString = uncurryThis({}.toString);
    var stringSlice = uncurryThis("".slice);
    module2.exports = function(it) {
      return stringSlice(toString(it), 8, -1);
    };
  }
});

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/indexed-object.js
var require_indexed_object = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/indexed-object.js"(exports2, module2) {
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

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/is-null-or-undefined.js
var require_is_null_or_undefined = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/is-null-or-undefined.js"(exports2, module2) {
    "use strict";
    module2.exports = function(it) {
      return it === null || it === void 0;
    };
  }
});

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/require-object-coercible.js
var require_require_object_coercible = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/require-object-coercible.js"(exports2, module2) {
    "use strict";
    var isNullOrUndefined = require_is_null_or_undefined();
    var $TypeError = TypeError;
    module2.exports = function(it) {
      if (isNullOrUndefined(it)) throw new $TypeError("Can't call method on " + it);
      return it;
    };
  }
});

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/to-indexed-object.js
var require_to_indexed_object = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/to-indexed-object.js"(exports2, module2) {
    "use strict";
    var IndexedObject = require_indexed_object();
    var requireObjectCoercible = require_require_object_coercible();
    module2.exports = function(it) {
      return IndexedObject(requireObjectCoercible(it));
    };
  }
});

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/is-callable.js
var require_is_callable = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/is-callable.js"(exports2, module2) {
    "use strict";
    var documentAll = typeof document == "object" && document.all;
    module2.exports = typeof documentAll == "undefined" && documentAll !== void 0 ? function(argument) {
      return typeof argument == "function" || argument === documentAll;
    } : function(argument) {
      return typeof argument == "function";
    };
  }
});

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/is-object.js
var require_is_object = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/is-object.js"(exports2, module2) {
    "use strict";
    var isCallable = require_is_callable();
    module2.exports = function(it) {
      return typeof it == "object" ? it !== null : isCallable(it);
    };
  }
});

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/get-built-in.js
var require_get_built_in = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/get-built-in.js"(exports2, module2) {
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

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/object-is-prototype-of.js
var require_object_is_prototype_of = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/object-is-prototype-of.js"(exports2, module2) {
    "use strict";
    var uncurryThis = require_function_uncurry_this();
    module2.exports = uncurryThis({}.isPrototypeOf);
  }
});

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/engine-user-agent.js
var require_engine_user_agent = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/engine-user-agent.js"(exports2, module2) {
    "use strict";
    module2.exports = typeof navigator != "undefined" && String(navigator.userAgent) || "";
  }
});

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/engine-v8-version.js
var require_engine_v8_version = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/engine-v8-version.js"(exports2, module2) {
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
        if (match) version = +match[1];
      }
    }
    module2.exports = version;
  }
});

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/symbol-constructor-detection.js
var require_symbol_constructor_detection = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/symbol-constructor-detection.js"(exports2, module2) {
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

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/use-symbol-as-uid.js
var require_use_symbol_as_uid = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/use-symbol-as-uid.js"(exports2, module2) {
    "use strict";
    var NATIVE_SYMBOL = require_symbol_constructor_detection();
    module2.exports = NATIVE_SYMBOL && !Symbol.sham && typeof Symbol.iterator == "symbol";
  }
});

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/is-symbol.js
var require_is_symbol = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/is-symbol.js"(exports2, module2) {
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

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/try-to-string.js
var require_try_to_string = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/try-to-string.js"(exports2, module2) {
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

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/a-callable.js
var require_a_callable = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/a-callable.js"(exports2, module2) {
    "use strict";
    var isCallable = require_is_callable();
    var tryToString = require_try_to_string();
    var $TypeError = TypeError;
    module2.exports = function(argument) {
      if (isCallable(argument)) return argument;
      throw new $TypeError(tryToString(argument) + " is not a function");
    };
  }
});

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/get-method.js
var require_get_method = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/get-method.js"(exports2, module2) {
    "use strict";
    var aCallable = require_a_callable();
    var isNullOrUndefined = require_is_null_or_undefined();
    module2.exports = function(V, P) {
      var func = V[P];
      return isNullOrUndefined(func) ? void 0 : aCallable(func);
    };
  }
});

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/ordinary-to-primitive.js
var require_ordinary_to_primitive = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/ordinary-to-primitive.js"(exports2, module2) {
    "use strict";
    var call = require_function_call();
    var isCallable = require_is_callable();
    var isObject = require_is_object();
    var $TypeError = TypeError;
    module2.exports = function(input, pref) {
      var fn2, val;
      if (pref === "string" && isCallable(fn2 = input.toString) && !isObject(val = call(fn2, input))) return val;
      if (isCallable(fn2 = input.valueOf) && !isObject(val = call(fn2, input))) return val;
      if (pref !== "string" && isCallable(fn2 = input.toString) && !isObject(val = call(fn2, input))) return val;
      throw new $TypeError("Can't convert object to primitive value");
    };
  }
});

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/is-pure.js
var require_is_pure = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/is-pure.js"(exports2, module2) {
    "use strict";
    module2.exports = false;
  }
});

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/define-global-property.js
var require_define_global_property = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/define-global-property.js"(exports2, module2) {
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

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/shared-store.js
var require_shared_store = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/shared-store.js"(exports2, module2) {
    "use strict";
    var IS_PURE = require_is_pure();
    var globalThis2 = require_global();
    var defineGlobalProperty = require_define_global_property();
    var SHARED = "__core-js_shared__";
    var store = module2.exports = globalThis2[SHARED] || defineGlobalProperty(SHARED, {});
    (store.versions || (store.versions = [])).push({
      version: "3.37.1",
      mode: IS_PURE ? "pure" : "global",
      copyright: "© 2014-2024 Denis Pushkarev (zloirock.ru)",
      license: "https://github.com/zloirock/core-js/blob/v3.37.1/LICENSE",
      source: "https://github.com/zloirock/core-js"
    });
  }
});

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/shared.js
var require_shared = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/shared.js"(exports2, module2) {
    "use strict";
    var store = require_shared_store();
    module2.exports = function(key, value) {
      return store[key] || (store[key] = value || {});
    };
  }
});

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/to-object.js
var require_to_object = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/to-object.js"(exports2, module2) {
    "use strict";
    var requireObjectCoercible = require_require_object_coercible();
    var $Object = Object;
    module2.exports = function(argument) {
      return $Object(requireObjectCoercible(argument));
    };
  }
});

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/has-own-property.js
var require_has_own_property = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/has-own-property.js"(exports2, module2) {
    "use strict";
    var uncurryThis = require_function_uncurry_this();
    var toObject = require_to_object();
    var hasOwnProperty = uncurryThis({}.hasOwnProperty);
    module2.exports = Object.hasOwn || function hasOwn(it, key) {
      return hasOwnProperty(toObject(it), key);
    };
  }
});

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/uid.js
var require_uid = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/uid.js"(exports2, module2) {
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

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/well-known-symbol.js
var require_well_known_symbol = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/well-known-symbol.js"(exports2, module2) {
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

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/to-primitive.js
var require_to_primitive = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/to-primitive.js"(exports2, module2) {
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
      if (!isObject(input) || isSymbol(input)) return input;
      var exoticToPrim = getMethod(input, TO_PRIMITIVE);
      var result;
      if (exoticToPrim) {
        if (pref === void 0) pref = "default";
        result = call(exoticToPrim, input, pref);
        if (!isObject(result) || isSymbol(result)) return result;
        throw new $TypeError("Can't convert object to primitive value");
      }
      if (pref === void 0) pref = "number";
      return ordinaryToPrimitive(input, pref);
    };
  }
});

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/to-property-key.js
var require_to_property_key = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/to-property-key.js"(exports2, module2) {
    "use strict";
    var toPrimitive = require_to_primitive();
    var isSymbol = require_is_symbol();
    module2.exports = function(argument) {
      var key = toPrimitive(argument, "string");
      return isSymbol(key) ? key : key + "";
    };
  }
});

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/document-create-element.js
var require_document_create_element = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/document-create-element.js"(exports2, module2) {
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

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/ie8-dom-define.js
var require_ie8_dom_define = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/ie8-dom-define.js"(exports2, module2) {
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

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/object-get-own-property-descriptor.js
var require_object_get_own_property_descriptor = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/object-get-own-property-descriptor.js"(exports2) {
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
    exports2.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
      O = toIndexedObject(O);
      P = toPropertyKey(P);
      if (IE8_DOM_DEFINE) try {
        return $getOwnPropertyDescriptor(O, P);
      } catch (error) {
      }
      if (hasOwn(O, P)) return createPropertyDescriptor(!call(propertyIsEnumerableModule.f, O, P), O[P]);
    };
  }
});

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/v8-prototype-define-bug.js
var require_v8_prototype_define_bug = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/v8-prototype-define-bug.js"(exports2, module2) {
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

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/an-object.js
var require_an_object = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/an-object.js"(exports2, module2) {
    "use strict";
    var isObject = require_is_object();
    var $String = String;
    var $TypeError = TypeError;
    module2.exports = function(argument) {
      if (isObject(argument)) return argument;
      throw new $TypeError($String(argument) + " is not an object");
    };
  }
});

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/object-define-property.js
var require_object_define_property = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/object-define-property.js"(exports2) {
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
    exports2.f = DESCRIPTORS ? V8_PROTOTYPE_DEFINE_BUG ? function defineProperty(O, P, Attributes) {
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
      if (IE8_DOM_DEFINE) try {
        return $defineProperty(O, P, Attributes);
      } catch (error) {
      }
      if ("get" in Attributes || "set" in Attributes) throw new $TypeError("Accessors not supported");
      if ("value" in Attributes) O[P] = Attributes.value;
      return O;
    };
  }
});

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/create-non-enumerable-property.js
var require_create_non_enumerable_property = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/create-non-enumerable-property.js"(exports2, module2) {
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

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/function-name.js
var require_function_name = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/function-name.js"(exports2, module2) {
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

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/inspect-source.js
var require_inspect_source = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/inspect-source.js"(exports2, module2) {
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

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/weak-map-basic-detection.js
var require_weak_map_basic_detection = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/weak-map-basic-detection.js"(exports2, module2) {
    "use strict";
    var global2 = require_global();
    var isCallable = require_is_callable();
    var WeakMap = global2.WeakMap;
    module2.exports = isCallable(WeakMap) && /native code/.test(String(WeakMap));
  }
});

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/shared-key.js
var require_shared_key = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/shared-key.js"(exports2, module2) {
    "use strict";
    var shared = require_shared();
    var uid = require_uid();
    var keys = shared("keys");
    module2.exports = function(key) {
      return keys[key] || (keys[key] = uid(key));
    };
  }
});

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/hidden-keys.js
var require_hidden_keys = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/hidden-keys.js"(exports2, module2) {
    "use strict";
    module2.exports = {};
  }
});

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/internal-state.js
var require_internal_state = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/internal-state.js"(exports2, module2) {
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
    var WeakMap = global2.WeakMap;
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
      store = shared.state || (shared.state = new WeakMap());
      store.get = store.get;
      store.has = store.has;
      store.set = store.set;
      set = function(it, metadata) {
        if (store.has(it)) throw new TypeError2(OBJECT_ALREADY_INITIALIZED);
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
        if (hasOwn(it, STATE)) throw new TypeError2(OBJECT_ALREADY_INITIALIZED);
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

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/make-built-in.js
var require_make_built_in = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/make-built-in.js"(exports2, module2) {
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
        name = "[" + replace($String(name), /^Symbol\(([^)]*)\).*$/, "$1") + "]";
      }
      if (options && options.getter) name = "get " + name;
      if (options && options.setter) name = "set " + name;
      if (!hasOwn(value, "name") || CONFIGURABLE_FUNCTION_NAME && value.name !== name) {
        if (DESCRIPTORS) defineProperty(value, "name", { value: name, configurable: true });
        else value.name = name;
      }
      if (CONFIGURABLE_LENGTH && options && hasOwn(options, "arity") && value.length !== options.arity) {
        defineProperty(value, "length", { value: options.arity });
      }
      try {
        if (options && hasOwn(options, "constructor") && options.constructor) {
          if (DESCRIPTORS) defineProperty(value, "prototype", { writable: false });
        } else if (value.prototype) value.prototype = void 0;
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

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/define-built-in.js
var require_define_built_in = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/define-built-in.js"(exports2, module2) {
    "use strict";
    var isCallable = require_is_callable();
    var definePropertyModule = require_object_define_property();
    var makeBuiltIn = require_make_built_in();
    var defineGlobalProperty = require_define_global_property();
    module2.exports = function(O, key, value, options) {
      if (!options) options = {};
      var simple = options.enumerable;
      var name = options.name !== void 0 ? options.name : key;
      if (isCallable(value)) makeBuiltIn(value, name, options);
      if (options.global) {
        if (simple) O[key] = value;
        else defineGlobalProperty(key, value);
      } else {
        try {
          if (!options.unsafe) delete O[key];
          else if (O[key]) simple = true;
        } catch (error) {
        }
        if (simple) O[key] = value;
        else definePropertyModule.f(O, key, {
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

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/math-trunc.js
var require_math_trunc = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/math-trunc.js"(exports2, module2) {
    "use strict";
    var ceil = Math.ceil;
    var floor = Math.floor;
    module2.exports = Math.trunc || function trunc(x) {
      var n = +x;
      return (n > 0 ? floor : ceil)(n);
    };
  }
});

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/to-integer-or-infinity.js
var require_to_integer_or_infinity = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/to-integer-or-infinity.js"(exports2, module2) {
    "use strict";
    var trunc = require_math_trunc();
    module2.exports = function(argument) {
      var number = +argument;
      return number !== number || number === 0 ? 0 : trunc(number);
    };
  }
});

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/to-absolute-index.js
var require_to_absolute_index = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/to-absolute-index.js"(exports2, module2) {
    "use strict";
    var toIntegerOrInfinity = require_to_integer_or_infinity();
    var max2 = Math.max;
    var min2 = Math.min;
    module2.exports = function(index, length) {
      var integer = toIntegerOrInfinity(index);
      return integer < 0 ? max2(integer + length, 0) : min2(integer, length);
    };
  }
});

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/to-length.js
var require_to_length = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/to-length.js"(exports2, module2) {
    "use strict";
    var toIntegerOrInfinity = require_to_integer_or_infinity();
    var min2 = Math.min;
    module2.exports = function(argument) {
      var len = toIntegerOrInfinity(argument);
      return len > 0 ? min2(len, 9007199254740991) : 0;
    };
  }
});

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/length-of-array-like.js
var require_length_of_array_like = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/length-of-array-like.js"(exports2, module2) {
    "use strict";
    var toLength = require_to_length();
    module2.exports = function(obj) {
      return toLength(obj.length);
    };
  }
});

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/array-includes.js
var require_array_includes = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/array-includes.js"(exports2, module2) {
    "use strict";
    var toIndexedObject = require_to_indexed_object();
    var toAbsoluteIndex = require_to_absolute_index();
    var lengthOfArrayLike = require_length_of_array_like();
    var createMethod = function(IS_INCLUDES) {
      return function($this, el, fromIndex) {
        var O = toIndexedObject($this);
        var length = lengthOfArrayLike(O);
        if (length === 0) return !IS_INCLUDES && -1;
        var index = toAbsoluteIndex(fromIndex, length);
        var value;
        if (IS_INCLUDES && el !== el) while (length > index) {
          value = O[index++];
          if (value !== value) return true;
        }
        else for (; length > index; index++) {
          if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
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

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/object-keys-internal.js
var require_object_keys_internal = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/object-keys-internal.js"(exports2, module2) {
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
      for (key in O) !hasOwn(hiddenKeys, key) && hasOwn(O, key) && push(result, key);
      while (names.length > i) if (hasOwn(O, key = names[i++])) {
        ~indexOf(result, key) || push(result, key);
      }
      return result;
    };
  }
});

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/enum-bug-keys.js
var require_enum_bug_keys = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/enum-bug-keys.js"(exports2, module2) {
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

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/object-get-own-property-names.js
var require_object_get_own_property_names = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/object-get-own-property-names.js"(exports2) {
    "use strict";
    var internalObjectKeys = require_object_keys_internal();
    var enumBugKeys = require_enum_bug_keys();
    var hiddenKeys = enumBugKeys.concat("length", "prototype");
    exports2.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
      return internalObjectKeys(O, hiddenKeys);
    };
  }
});

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/object-get-own-property-symbols.js
var require_object_get_own_property_symbols = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/object-get-own-property-symbols.js"(exports2) {
    "use strict";
    exports2.f = Object.getOwnPropertySymbols;
  }
});

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/own-keys.js
var require_own_keys = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/own-keys.js"(exports2, module2) {
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

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/copy-constructor-properties.js
var require_copy_constructor_properties = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/copy-constructor-properties.js"(exports2, module2) {
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

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/is-forced.js
var require_is_forced = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/is-forced.js"(exports2, module2) {
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

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/export.js
var require_export = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/export.js"(exports2, module2) {
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
        target = global2[TARGET] && global2[TARGET].prototype;
      }
      if (target) for (key in source) {
        sourceProperty = source[key];
        if (options.dontCallGetSet) {
          descriptor = getOwnPropertyDescriptor(target, key);
          targetProperty = descriptor && descriptor.value;
        } else targetProperty = target[key];
        FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? "." : "#") + key, options.forced);
        if (!FORCED && targetProperty !== void 0) {
          if (typeof sourceProperty == typeof targetProperty) continue;
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

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/set-helpers.js
var require_set_helpers = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/set-helpers.js"(exports2, module2) {
    "use strict";
    var uncurryThis = require_function_uncurry_this();
    var SetPrototype = Set.prototype;
    module2.exports = {
      // eslint-disable-next-line es/no-set -- safe
      Set,
      add: uncurryThis(SetPrototype.add),
      has: uncurryThis(SetPrototype.has),
      remove: uncurryThis(SetPrototype["delete"]),
      proto: SetPrototype
    };
  }
});

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/a-set.js
var require_a_set = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/a-set.js"(exports2, module2) {
    "use strict";
    var has = require_set_helpers().has;
    module2.exports = function(it) {
      has(it);
      return it;
    };
  }
});

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/iterate-simple.js
var require_iterate_simple = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/iterate-simple.js"(exports2, module2) {
    "use strict";
    var call = require_function_call();
    module2.exports = function(record, fn2, ITERATOR_INSTEAD_OF_RECORD) {
      var iterator = ITERATOR_INSTEAD_OF_RECORD ? record : record.iterator;
      var next = record.next;
      var step, result;
      while (!(step = call(next, iterator)).done) {
        result = fn2(step.value);
        if (result !== void 0) return result;
      }
    };
  }
});

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/set-iterate.js
var require_set_iterate = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/set-iterate.js"(exports2, module2) {
    "use strict";
    var uncurryThis = require_function_uncurry_this();
    var iterateSimple = require_iterate_simple();
    var SetHelpers = require_set_helpers();
    var Set2 = SetHelpers.Set;
    var SetPrototype = SetHelpers.proto;
    var forEach = uncurryThis(SetPrototype.forEach);
    var keys = uncurryThis(SetPrototype.keys);
    var next = keys(new Set2()).next;
    module2.exports = function(set, fn2, interruptible) {
      return interruptible ? iterateSimple({ iterator: keys(set), next }, fn2) : forEach(set, fn2);
    };
  }
});

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/set-clone.js
var require_set_clone = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/set-clone.js"(exports2, module2) {
    "use strict";
    var SetHelpers = require_set_helpers();
    var iterate = require_set_iterate();
    var Set2 = SetHelpers.Set;
    var add = SetHelpers.add;
    module2.exports = function(set) {
      var result = new Set2();
      iterate(set, function(it) {
        add(result, it);
      });
      return result;
    };
  }
});

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/function-uncurry-this-accessor.js
var require_function_uncurry_this_accessor = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/function-uncurry-this-accessor.js"(exports2, module2) {
    "use strict";
    var uncurryThis = require_function_uncurry_this();
    var aCallable = require_a_callable();
    module2.exports = function(object, key, method) {
      try {
        return uncurryThis(aCallable(Object.getOwnPropertyDescriptor(object, key)[method]));
      } catch (error) {
      }
    };
  }
});

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/set-size.js
var require_set_size = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/set-size.js"(exports2, module2) {
    "use strict";
    var uncurryThisAccessor = require_function_uncurry_this_accessor();
    var SetHelpers = require_set_helpers();
    module2.exports = uncurryThisAccessor(SetHelpers.proto, "size", "get") || function(set) {
      return set.size;
    };
  }
});

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/get-iterator-direct.js
var require_get_iterator_direct = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/get-iterator-direct.js"(exports2, module2) {
    "use strict";
    module2.exports = function(obj) {
      return {
        iterator: obj,
        next: obj.next,
        done: false
      };
    };
  }
});

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/get-set-record.js
var require_get_set_record = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/get-set-record.js"(exports2, module2) {
    "use strict";
    var aCallable = require_a_callable();
    var anObject = require_an_object();
    var call = require_function_call();
    var toIntegerOrInfinity = require_to_integer_or_infinity();
    var getIteratorDirect = require_get_iterator_direct();
    var INVALID_SIZE = "Invalid size";
    var $RangeError = RangeError;
    var $TypeError = TypeError;
    var max2 = Math.max;
    var SetRecord = function(set, intSize) {
      this.set = set;
      this.size = max2(intSize, 0);
      this.has = aCallable(set.has);
      this.keys = aCallable(set.keys);
    };
    SetRecord.prototype = {
      getIterator: function() {
        return getIteratorDirect(anObject(call(this.keys, this.set)));
      },
      includes: function(it) {
        return call(this.has, this.set, it);
      }
    };
    module2.exports = function(obj) {
      anObject(obj);
      var numSize = +obj.size;
      if (numSize !== numSize) throw new $TypeError(INVALID_SIZE);
      var intSize = toIntegerOrInfinity(numSize);
      if (intSize < 0) throw new $RangeError(INVALID_SIZE);
      return new SetRecord(obj, intSize);
    };
  }
});

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/set-difference.js
var require_set_difference = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/set-difference.js"(exports2, module2) {
    "use strict";
    var aSet = require_a_set();
    var SetHelpers = require_set_helpers();
    var clone = require_set_clone();
    var size = require_set_size();
    var getSetRecord = require_get_set_record();
    var iterateSet = require_set_iterate();
    var iterateSimple = require_iterate_simple();
    var has = SetHelpers.has;
    var remove = SetHelpers.remove;
    module2.exports = function difference(other) {
      var O = aSet(this);
      var otherRec = getSetRecord(other);
      var result = clone(O);
      if (size(O) <= otherRec.size) iterateSet(O, function(e) {
        if (otherRec.includes(e)) remove(result, e);
      });
      else iterateSimple(otherRec.getIterator(), function(e) {
        if (has(O, e)) remove(result, e);
      });
      return result;
    };
  }
});

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/set-method-accept-set-like.js
var require_set_method_accept_set_like = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/set-method-accept-set-like.js"(exports2, module2) {
    "use strict";
    var getBuiltIn = require_get_built_in();
    var createSetLike = function(size) {
      return {
        size,
        has: function() {
          return false;
        },
        keys: function() {
          return {
            next: function() {
              return { done: true };
            }
          };
        }
      };
    };
    module2.exports = function(name) {
      var Set2 = getBuiltIn("Set");
      try {
        new Set2()[name](createSetLike(0));
        try {
          new Set2()[name](createSetLike(-1));
          return false;
        } catch (error2) {
          return true;
        }
      } catch (error) {
        return false;
      }
    };
  }
});

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/modules/es.set.difference.v2.js
var require_es_set_difference_v2 = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/modules/es.set.difference.v2.js"() {
    "use strict";
    var $ = require_export();
    var difference = require_set_difference();
    var setMethodAcceptSetLike = require_set_method_accept_set_like();
    $({ target: "Set", proto: true, real: true, forced: !setMethodAcceptSetLike("difference") }, {
      difference
    });
  }
});

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/modules/esnext.set.difference.v2.js
var require_esnext_set_difference_v2 = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/modules/esnext.set.difference.v2.js"() {
    "use strict";
    require_es_set_difference_v2();
  }
});

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/set-intersection.js
var require_set_intersection = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/set-intersection.js"(exports2, module2) {
    "use strict";
    var aSet = require_a_set();
    var SetHelpers = require_set_helpers();
    var size = require_set_size();
    var getSetRecord = require_get_set_record();
    var iterateSet = require_set_iterate();
    var iterateSimple = require_iterate_simple();
    var Set2 = SetHelpers.Set;
    var add = SetHelpers.add;
    var has = SetHelpers.has;
    module2.exports = function intersection(other) {
      var O = aSet(this);
      var otherRec = getSetRecord(other);
      var result = new Set2();
      if (size(O) > otherRec.size) {
        iterateSimple(otherRec.getIterator(), function(e) {
          if (has(O, e)) add(result, e);
        });
      } else {
        iterateSet(O, function(e) {
          if (otherRec.includes(e)) add(result, e);
        });
      }
      return result;
    };
  }
});

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/modules/es.set.intersection.v2.js
var require_es_set_intersection_v2 = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/modules/es.set.intersection.v2.js"() {
    "use strict";
    var $ = require_export();
    var fails = require_fails();
    var intersection = require_set_intersection();
    var setMethodAcceptSetLike = require_set_method_accept_set_like();
    var INCORRECT = !setMethodAcceptSetLike("intersection") || fails(function() {
      return String(Array.from((/* @__PURE__ */ new Set([1, 2, 3])).intersection(/* @__PURE__ */ new Set([3, 2])))) !== "3,2";
    });
    $({ target: "Set", proto: true, real: true, forced: INCORRECT }, {
      intersection
    });
  }
});

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/modules/esnext.set.intersection.v2.js
var require_esnext_set_intersection_v2 = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/modules/esnext.set.intersection.v2.js"() {
    "use strict";
    require_es_set_intersection_v2();
  }
});

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/iterator-close.js
var require_iterator_close = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/iterator-close.js"(exports2, module2) {
    "use strict";
    var call = require_function_call();
    var anObject = require_an_object();
    var getMethod = require_get_method();
    module2.exports = function(iterator, kind, value) {
      var innerResult, innerError;
      anObject(iterator);
      try {
        innerResult = getMethod(iterator, "return");
        if (!innerResult) {
          if (kind === "throw") throw value;
          return value;
        }
        innerResult = call(innerResult, iterator);
      } catch (error) {
        innerError = true;
        innerResult = error;
      }
      if (kind === "throw") throw value;
      if (innerError) throw innerResult;
      anObject(innerResult);
      return value;
    };
  }
});

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/set-is-disjoint-from.js
var require_set_is_disjoint_from = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/set-is-disjoint-from.js"(exports2, module2) {
    "use strict";
    var aSet = require_a_set();
    var has = require_set_helpers().has;
    var size = require_set_size();
    var getSetRecord = require_get_set_record();
    var iterateSet = require_set_iterate();
    var iterateSimple = require_iterate_simple();
    var iteratorClose = require_iterator_close();
    module2.exports = function isDisjointFrom(other) {
      var O = aSet(this);
      var otherRec = getSetRecord(other);
      if (size(O) <= otherRec.size) return iterateSet(O, function(e) {
        if (otherRec.includes(e)) return false;
      }, true) !== false;
      var iterator = otherRec.getIterator();
      return iterateSimple(iterator, function(e) {
        if (has(O, e)) return iteratorClose(iterator, "normal", false);
      }) !== false;
    };
  }
});

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/modules/es.set.is-disjoint-from.v2.js
var require_es_set_is_disjoint_from_v2 = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/modules/es.set.is-disjoint-from.v2.js"() {
    "use strict";
    var $ = require_export();
    var isDisjointFrom = require_set_is_disjoint_from();
    var setMethodAcceptSetLike = require_set_method_accept_set_like();
    $({ target: "Set", proto: true, real: true, forced: !setMethodAcceptSetLike("isDisjointFrom") }, {
      isDisjointFrom
    });
  }
});

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/modules/esnext.set.is-disjoint-from.v2.js
var require_esnext_set_is_disjoint_from_v2 = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/modules/esnext.set.is-disjoint-from.v2.js"() {
    "use strict";
    require_es_set_is_disjoint_from_v2();
  }
});

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/set-is-subset-of.js
var require_set_is_subset_of = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/set-is-subset-of.js"(exports2, module2) {
    "use strict";
    var aSet = require_a_set();
    var size = require_set_size();
    var iterate = require_set_iterate();
    var getSetRecord = require_get_set_record();
    module2.exports = function isSubsetOf(other) {
      var O = aSet(this);
      var otherRec = getSetRecord(other);
      if (size(O) > otherRec.size) return false;
      return iterate(O, function(e) {
        if (!otherRec.includes(e)) return false;
      }, true) !== false;
    };
  }
});

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/modules/es.set.is-subset-of.v2.js
var require_es_set_is_subset_of_v2 = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/modules/es.set.is-subset-of.v2.js"() {
    "use strict";
    var $ = require_export();
    var isSubsetOf = require_set_is_subset_of();
    var setMethodAcceptSetLike = require_set_method_accept_set_like();
    $({ target: "Set", proto: true, real: true, forced: !setMethodAcceptSetLike("isSubsetOf") }, {
      isSubsetOf
    });
  }
});

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/modules/esnext.set.is-subset-of.v2.js
var require_esnext_set_is_subset_of_v2 = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/modules/esnext.set.is-subset-of.v2.js"() {
    "use strict";
    require_es_set_is_subset_of_v2();
  }
});

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/set-is-superset-of.js
var require_set_is_superset_of = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/set-is-superset-of.js"(exports2, module2) {
    "use strict";
    var aSet = require_a_set();
    var has = require_set_helpers().has;
    var size = require_set_size();
    var getSetRecord = require_get_set_record();
    var iterateSimple = require_iterate_simple();
    var iteratorClose = require_iterator_close();
    module2.exports = function isSupersetOf(other) {
      var O = aSet(this);
      var otherRec = getSetRecord(other);
      if (size(O) < otherRec.size) return false;
      var iterator = otherRec.getIterator();
      return iterateSimple(iterator, function(e) {
        if (!has(O, e)) return iteratorClose(iterator, "normal", false);
      }) !== false;
    };
  }
});

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/modules/es.set.is-superset-of.v2.js
var require_es_set_is_superset_of_v2 = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/modules/es.set.is-superset-of.v2.js"() {
    "use strict";
    var $ = require_export();
    var isSupersetOf = require_set_is_superset_of();
    var setMethodAcceptSetLike = require_set_method_accept_set_like();
    $({ target: "Set", proto: true, real: true, forced: !setMethodAcceptSetLike("isSupersetOf") }, {
      isSupersetOf
    });
  }
});

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/modules/esnext.set.is-superset-of.v2.js
var require_esnext_set_is_superset_of_v2 = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/modules/esnext.set.is-superset-of.v2.js"() {
    "use strict";
    require_es_set_is_superset_of_v2();
  }
});

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/set-symmetric-difference.js
var require_set_symmetric_difference = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/set-symmetric-difference.js"(exports2, module2) {
    "use strict";
    var aSet = require_a_set();
    var SetHelpers = require_set_helpers();
    var clone = require_set_clone();
    var getSetRecord = require_get_set_record();
    var iterateSimple = require_iterate_simple();
    var add = SetHelpers.add;
    var has = SetHelpers.has;
    var remove = SetHelpers.remove;
    module2.exports = function symmetricDifference(other) {
      var O = aSet(this);
      var keysIter = getSetRecord(other).getIterator();
      var result = clone(O);
      iterateSimple(keysIter, function(e) {
        if (has(O, e)) remove(result, e);
        else add(result, e);
      });
      return result;
    };
  }
});

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/modules/es.set.symmetric-difference.v2.js
var require_es_set_symmetric_difference_v2 = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/modules/es.set.symmetric-difference.v2.js"() {
    "use strict";
    var $ = require_export();
    var symmetricDifference = require_set_symmetric_difference();
    var setMethodAcceptSetLike = require_set_method_accept_set_like();
    $({ target: "Set", proto: true, real: true, forced: !setMethodAcceptSetLike("symmetricDifference") }, {
      symmetricDifference
    });
  }
});

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/modules/esnext.set.symmetric-difference.v2.js
var require_esnext_set_symmetric_difference_v2 = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/modules/esnext.set.symmetric-difference.v2.js"() {
    "use strict";
    require_es_set_symmetric_difference_v2();
  }
});

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/set-union.js
var require_set_union = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/set-union.js"(exports2, module2) {
    "use strict";
    var aSet = require_a_set();
    var add = require_set_helpers().add;
    var clone = require_set_clone();
    var getSetRecord = require_get_set_record();
    var iterateSimple = require_iterate_simple();
    module2.exports = function union(other) {
      var O = aSet(this);
      var keysIter = getSetRecord(other).getIterator();
      var result = clone(O);
      iterateSimple(keysIter, function(it) {
        add(result, it);
      });
      return result;
    };
  }
});

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/modules/es.set.union.v2.js
var require_es_set_union_v2 = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/modules/es.set.union.v2.js"() {
    "use strict";
    var $ = require_export();
    var union = require_set_union();
    var setMethodAcceptSetLike = require_set_method_accept_set_like();
    $({ target: "Set", proto: true, real: true, forced: !setMethodAcceptSetLike("union") }, {
      union
    });
  }
});

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/modules/esnext.set.union.v2.js
var require_esnext_set_union_v2 = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/modules/esnext.set.union.v2.js"() {
    "use strict";
    require_es_set_union_v2();
  }
});

// dist/Tippy/Tippy.js
require_esnext_set_difference_v2();
require_esnext_set_intersection_v2();
require_esnext_set_is_disjoint_from_v2();
require_esnext_set_is_subset_of_v2();
require_esnext_set_is_superset_of_v2();
require_esnext_set_symmetric_difference_v2();
require_esnext_set_union_v2();
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
//! src/Tippy/Tippy.ts
var Tippy_exports = {};
__export(Tippy_exports, {
  tippy: () => tippy_esm_default
});
module.exports = __toCommonJS(Tippy_exports);
var top = "top";
var bottom = "bottom";
var right = "right";
var left = "left";
var auto = "auto";
var basePlacements = [top, bottom, right, left];
var start = "start";
var end = "end";
var clippingParents = "clippingParents";
var viewport = "viewport";
var popper = "popper";
var reference = "reference";
var variationPlacements = /* @__PURE__ */ basePlacements.reduce(function(acc, placement) {
  return acc.concat([placement + "-" + start, placement + "-" + end]);
}, []);
var placements = /* @__PURE__ */ [].concat(basePlacements, [auto]).reduce(function(acc, placement) {
  return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
}, []);
var beforeRead = "beforeRead";
var read = "read";
var afterRead = "afterRead";
var beforeMain = "beforeMain";
var main = "main";
var afterMain = "afterMain";
var beforeWrite = "beforeWrite";
var write = "write";
var afterWrite = "afterWrite";
var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];
function getNodeName(element) {
  return element ? (element.nodeName || "").toLowerCase() : null;
}
function getWindow(node) {
  if (node == null) {
    return window;
  }
  if (node.toString() !== "[object Window]") {
    var ownerDocument = node.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView || window : window;
  }
  return node;
}
function isElement(node) {
  var OwnElement = getWindow(node).Element;
  return node instanceof OwnElement || node instanceof Element;
}
function isHTMLElement(node) {
  var OwnElement = getWindow(node).HTMLElement;
  return node instanceof OwnElement || node instanceof HTMLElement;
}
function isShadowRoot(node) {
  if (typeof ShadowRoot === "undefined") {
    return false;
  }
  var OwnElement = getWindow(node).ShadowRoot;
  return node instanceof OwnElement || node instanceof ShadowRoot;
}
function applyStyles(_ref) {
  var state = _ref.state;
  Object.keys(state.elements).forEach(function(name) {
    var style = state.styles[name] || {};
    var attributes = state.attributes[name] || {};
    var element = state.elements[name];
    if (!isHTMLElement(element) || !getNodeName(element)) {
      return;
    }
    Object.assign(element.style, style);
    Object.keys(attributes).forEach(function(name2) {
      var value = attributes[name2];
      if (value === false) {
        element.removeAttribute(name2);
      } else {
        element.setAttribute(name2, value === true ? "" : value);
      }
    });
  });
}
function effect(_ref2) {
  var state = _ref2.state;
  var initialStyles = {
    popper: {
      position: state.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  Object.assign(state.elements.popper.style, initialStyles.popper);
  state.styles = initialStyles;
  if (state.elements.arrow) {
    Object.assign(state.elements.arrow.style, initialStyles.arrow);
  }
  return function() {
    Object.keys(state.elements).forEach(function(name) {
      var element = state.elements[name];
      var attributes = state.attributes[name] || {};
      var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]);
      var style = styleProperties.reduce(function(style2, property) {
        style2[property] = "";
        return style2;
      }, {});
      if (!isHTMLElement(element) || !getNodeName(element)) {
        return;
      }
      Object.assign(element.style, style);
      Object.keys(attributes).forEach(function(attribute) {
        element.removeAttribute(attribute);
      });
    });
  };
}
var applyStyles_default = {
  name: "applyStyles",
  enabled: true,
  phase: "write",
  fn: applyStyles,
  effect,
  requires: ["computeStyles"]
};
function getBasePlacement(placement) {
  return placement.split("-")[0];
}
var max = Math.max;
var min = Math.min;
var round = Math.round;
function getUAString() {
  var uaData = navigator.userAgentData;
  if (uaData != null && uaData.brands && Array.isArray(uaData.brands)) {
    return uaData.brands.map(function(item) {
      return item.brand + "/" + item.version;
    }).join(" ");
  }
  return navigator.userAgent;
}
function isLayoutViewport() {
  return !/^((?!chrome|android).)*safari/i.test(getUAString());
}
function getBoundingClientRect(element, includeScale, isFixedStrategy) {
  if (includeScale === void 0) {
    includeScale = false;
  }
  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }
  var clientRect = element.getBoundingClientRect();
  var scaleX = 1;
  var scaleY = 1;
  if (includeScale && isHTMLElement(element)) {
    scaleX = element.offsetWidth > 0 ? round(clientRect.width) / element.offsetWidth || 1 : 1;
    scaleY = element.offsetHeight > 0 ? round(clientRect.height) / element.offsetHeight || 1 : 1;
  }
  var _ref = isElement(element) ? getWindow(element) : window, visualViewport = _ref.visualViewport;
  var addVisualOffsets = !isLayoutViewport() && isFixedStrategy;
  var x = (clientRect.left + (addVisualOffsets && visualViewport ? visualViewport.offsetLeft : 0)) / scaleX;
  var y = (clientRect.top + (addVisualOffsets && visualViewport ? visualViewport.offsetTop : 0)) / scaleY;
  var width = clientRect.width / scaleX;
  var height = clientRect.height / scaleY;
  return {
    width,
    height,
    top: y,
    right: x + width,
    bottom: y + height,
    left: x,
    x,
    y
  };
}
function getLayoutRect(element) {
  var clientRect = getBoundingClientRect(element);
  var width = element.offsetWidth;
  var height = element.offsetHeight;
  if (Math.abs(clientRect.width - width) <= 1) {
    width = clientRect.width;
  }
  if (Math.abs(clientRect.height - height) <= 1) {
    height = clientRect.height;
  }
  return {
    x: element.offsetLeft,
    y: element.offsetTop,
    width,
    height
  };
}
function contains(parent, child) {
  var rootNode = child.getRootNode && child.getRootNode();
  if (parent.contains(child)) {
    return true;
  } else if (rootNode && isShadowRoot(rootNode)) {
    var next = child;
    do {
      if (next && parent.isSameNode(next)) {
        return true;
      }
      next = next.parentNode || next.host;
    } while (next);
  }
  return false;
}
function getComputedStyle(element) {
  return getWindow(element).getComputedStyle(element);
}
function isTableElement(element) {
  return ["table", "td", "th"].indexOf(getNodeName(element)) >= 0;
}
function getDocumentElement(element) {
  return ((isElement(element) ? element.ownerDocument : (
    // $FlowFixMe[prop-missing]
    element.document
  )) || window.document).documentElement;
}
function getParentNode(element) {
  if (getNodeName(element) === "html") {
    return element;
  }
  return (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    element.parentNode || // DOM Element detected
    (isShadowRoot(element) ? element.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    getDocumentElement(element)
  );
}
function getTrueOffsetParent(element) {
  if (!isHTMLElement(element) || // https://github.com/popperjs/popper-core/issues/837
  getComputedStyle(element).position === "fixed") {
    return null;
  }
  return element.offsetParent;
}
function getContainingBlock(element) {
  var isFirefox = /firefox/i.test(getUAString());
  var isIE = /Trident/i.test(getUAString());
  if (isIE && isHTMLElement(element)) {
    var elementCss = getComputedStyle(element);
    if (elementCss.position === "fixed") {
      return null;
    }
  }
  var currentNode = getParentNode(element);
  if (isShadowRoot(currentNode)) {
    currentNode = currentNode.host;
  }
  while (isHTMLElement(currentNode) && ["html", "body"].indexOf(getNodeName(currentNode)) < 0) {
    var css = getComputedStyle(currentNode);
    if (css.transform !== "none" || css.perspective !== "none" || css.contain === "paint" || ["transform", "perspective"].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === "filter" || isFirefox && css.filter && css.filter !== "none") {
      return currentNode;
    } else {
      currentNode = currentNode.parentNode;
    }
  }
  return null;
}
function getOffsetParent(element) {
  var window2 = getWindow(element);
  var offsetParent = getTrueOffsetParent(element);
  while (offsetParent && isTableElement(offsetParent) && getComputedStyle(offsetParent).position === "static") {
    offsetParent = getTrueOffsetParent(offsetParent);
  }
  if (offsetParent && (getNodeName(offsetParent) === "html" || getNodeName(offsetParent) === "body" && getComputedStyle(offsetParent).position === "static")) {
    return window2;
  }
  return offsetParent || getContainingBlock(element) || window2;
}
function getMainAxisFromPlacement(placement) {
  return ["top", "bottom"].indexOf(placement) >= 0 ? "x" : "y";
}
function within(min2, value, max2) {
  return max(min2, min(value, max2));
}
function withinMaxClamp(min2, value, max2) {
  var v = within(min2, value, max2);
  return v > max2 ? max2 : v;
}
function getFreshSideObject() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function mergePaddingObject(paddingObject) {
  return Object.assign({}, getFreshSideObject(), paddingObject);
}
function expandToHashMap(value, keys) {
  return keys.reduce(function(hashMap, key) {
    hashMap[key] = value;
    return hashMap;
  }, {});
}
var toPaddingObject = function toPaddingObject2(padding, state) {
  padding = typeof padding === "function" ? padding(Object.assign({}, state.rects, {
    placement: state.placement
  })) : padding;
  return mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
};
function arrow(_ref) {
  var _state$modifiersData$;
  var state = _ref.state, name = _ref.name, options = _ref.options;
  var arrowElement = state.elements.arrow;
  var popperOffsets2 = state.modifiersData.popperOffsets;
  var basePlacement = getBasePlacement(state.placement);
  var axis = getMainAxisFromPlacement(basePlacement);
  var isVertical = [left, right].indexOf(basePlacement) >= 0;
  var len = isVertical ? "height" : "width";
  if (!arrowElement || !popperOffsets2) {
    return;
  }
  var paddingObject = toPaddingObject(options.padding, state);
  var arrowRect = getLayoutRect(arrowElement);
  var minProp = axis === "y" ? top : left;
  var maxProp = axis === "y" ? bottom : right;
  var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets2[axis] - state.rects.popper[len];
  var startDiff = popperOffsets2[axis] - state.rects.reference[axis];
  var arrowOffsetParent = getOffsetParent(arrowElement);
  var clientSize = arrowOffsetParent ? axis === "y" ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
  var centerToReference = endDiff / 2 - startDiff / 2;
  var min2 = paddingObject[minProp];
  var max2 = clientSize - arrowRect[len] - paddingObject[maxProp];
  var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
  var offset2 = within(min2, center, max2);
  var axisProp = axis;
  state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset2, _state$modifiersData$.centerOffset = offset2 - center, _state$modifiersData$);
}
function effect2(_ref2) {
  var state = _ref2.state, options = _ref2.options;
  var _options$element = options.element, arrowElement = _options$element === void 0 ? "[data-popper-arrow]" : _options$element;
  if (arrowElement == null) {
    return;
  }
  if (typeof arrowElement === "string") {
    arrowElement = state.elements.popper.querySelector(arrowElement);
    if (!arrowElement) {
      return;
    }
  }
  if (!contains(state.elements.popper, arrowElement)) {
    return;
  }
  state.elements.arrow = arrowElement;
}
var arrow_default = {
  name: "arrow",
  enabled: true,
  phase: "main",
  fn: arrow,
  effect: effect2,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function getVariation(placement) {
  return placement.split("-")[1];
}
var unsetSides = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function roundOffsetsByDPR(_ref, win) {
  var x = _ref.x, y = _ref.y;
  var dpr = win.devicePixelRatio || 1;
  return {
    x: round(x * dpr) / dpr || 0,
    y: round(y * dpr) / dpr || 0
  };
}
function mapToStyles(_ref2) {
  var _Object$assign2;
  var popper2 = _ref2.popper, popperRect = _ref2.popperRect, placement = _ref2.placement, variation = _ref2.variation, offsets = _ref2.offsets, position = _ref2.position, gpuAcceleration = _ref2.gpuAcceleration, adaptive = _ref2.adaptive, roundOffsets = _ref2.roundOffsets, isFixed = _ref2.isFixed;
  var _offsets$x = offsets.x, x = _offsets$x === void 0 ? 0 : _offsets$x, _offsets$y = offsets.y, y = _offsets$y === void 0 ? 0 : _offsets$y;
  var _ref3 = typeof roundOffsets === "function" ? roundOffsets({
    x,
    y
  }) : {
    x,
    y
  };
  x = _ref3.x;
  y = _ref3.y;
  var hasX = offsets.hasOwnProperty("x");
  var hasY = offsets.hasOwnProperty("y");
  var sideX = left;
  var sideY = top;
  var win = window;
  if (adaptive) {
    var offsetParent = getOffsetParent(popper2);
    var heightProp = "clientHeight";
    var widthProp = "clientWidth";
    if (offsetParent === getWindow(popper2)) {
      offsetParent = getDocumentElement(popper2);
      if (getComputedStyle(offsetParent).position !== "static" && position === "absolute") {
        heightProp = "scrollHeight";
        widthProp = "scrollWidth";
      }
    }
    offsetParent = offsetParent;
    if (placement === top || (placement === left || placement === right) && variation === end) {
      sideY = bottom;
      var offsetY = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        offsetParent[heightProp]
      );
      y -= offsetY - popperRect.height;
      y *= gpuAcceleration ? 1 : -1;
    }
    if (placement === left || (placement === top || placement === bottom) && variation === end) {
      sideX = right;
      var offsetX = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        offsetParent[widthProp]
      );
      x -= offsetX - popperRect.width;
      x *= gpuAcceleration ? 1 : -1;
    }
  }
  var commonStyles = Object.assign({
    position
  }, adaptive && unsetSides);
  var _ref4 = roundOffsets === true ? roundOffsetsByDPR({
    x,
    y
  }, getWindow(popper2)) : {
    x,
    y
  };
  x = _ref4.x;
  y = _ref4.y;
  if (gpuAcceleration) {
    var _Object$assign;
    return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? "0" : "", _Object$assign[sideX] = hasX ? "0" : "", _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
  }
  return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : "", _Object$assign2[sideX] = hasX ? x + "px" : "", _Object$assign2.transform = "", _Object$assign2));
}
function computeStyles(_ref5) {
  var state = _ref5.state, options = _ref5.options;
  var _options$gpuAccelerat = options.gpuAcceleration, gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat, _options$adaptive = options.adaptive, adaptive = _options$adaptive === void 0 ? true : _options$adaptive, _options$roundOffsets = options.roundOffsets, roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;
  var commonStyles = {
    placement: getBasePlacement(state.placement),
    variation: getVariation(state.placement),
    popper: state.elements.popper,
    popperRect: state.rects.popper,
    gpuAcceleration,
    isFixed: state.options.strategy === "fixed"
  };
  if (state.modifiersData.popperOffsets != null) {
    state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.popperOffsets,
      position: state.options.strategy,
      adaptive,
      roundOffsets
    })));
  }
  if (state.modifiersData.arrow != null) {
    state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.arrow,
      position: "absolute",
      adaptive: false,
      roundOffsets
    })));
  }
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    "data-popper-placement": state.placement
  });
}
var computeStyles_default = {
  name: "computeStyles",
  enabled: true,
  phase: "beforeWrite",
  fn: computeStyles,
  data: {}
};
var passive = {
  passive: true
};
function effect3(_ref) {
  var state = _ref.state, instance = _ref.instance, options = _ref.options;
  var _options$scroll = options.scroll, scroll = _options$scroll === void 0 ? true : _options$scroll, _options$resize = options.resize, resize = _options$resize === void 0 ? true : _options$resize;
  var window2 = getWindow(state.elements.popper);
  var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);
  if (scroll) {
    scrollParents.forEach(function(scrollParent) {
      scrollParent.addEventListener("scroll", instance.update, passive);
    });
  }
  if (resize) {
    window2.addEventListener("resize", instance.update, passive);
  }
  return function() {
    if (scroll) {
      scrollParents.forEach(function(scrollParent) {
        scrollParent.removeEventListener("scroll", instance.update, passive);
      });
    }
    if (resize) {
      window2.removeEventListener("resize", instance.update, passive);
    }
  };
}
var eventListeners_default = {
  name: "eventListeners",
  enabled: true,
  phase: "write",
  fn: function fn() {
  },
  effect: effect3,
  data: {}
};
var hash = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, function(matched) {
    return hash[matched];
  });
}
var hash2 = {
  start: "end",
  end: "start"
};
function getOppositeVariationPlacement(placement) {
  return placement.replace(/start|end/g, function(matched) {
    return hash2[matched];
  });
}
function getWindowScroll(node) {
  var win = getWindow(node);
  var scrollLeft = win.pageXOffset;
  var scrollTop = win.pageYOffset;
  return {
    scrollLeft,
    scrollTop
  };
}
function getWindowScrollBarX(element) {
  return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
}
function getViewportRect(element, strategy) {
  var win = getWindow(element);
  var html = getDocumentElement(element);
  var visualViewport = win.visualViewport;
  var width = html.clientWidth;
  var height = html.clientHeight;
  var x = 0;
  var y = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    var layoutViewport = isLayoutViewport();
    if (layoutViewport || !layoutViewport && strategy === "fixed") {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }
  return {
    width,
    height,
    x: x + getWindowScrollBarX(element),
    y
  };
}
function getDocumentRect(element) {
  var _element$ownerDocumen;
  var html = getDocumentElement(element);
  var winScroll = getWindowScroll(element);
  var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
  var width = max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
  var height = max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
  var x = -winScroll.scrollLeft + getWindowScrollBarX(element);
  var y = -winScroll.scrollTop;
  if (getComputedStyle(body || html).direction === "rtl") {
    x += max(html.clientWidth, body ? body.clientWidth : 0) - width;
  }
  return {
    width,
    height,
    x,
    y
  };
}
function isScrollParent(element) {
  var _getComputedStyle = getComputedStyle(element), overflow = _getComputedStyle.overflow, overflowX = _getComputedStyle.overflowX, overflowY = _getComputedStyle.overflowY;
  return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}
function getScrollParent(node) {
  if (["html", "body", "#document"].indexOf(getNodeName(node)) >= 0) {
    return node.ownerDocument.body;
  }
  if (isHTMLElement(node) && isScrollParent(node)) {
    return node;
  }
  return getScrollParent(getParentNode(node));
}
function listScrollParents(element, list) {
  var _element$ownerDocumen;
  if (list === void 0) {
    list = [];
  }
  var scrollParent = getScrollParent(element);
  var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
  var win = getWindow(scrollParent);
  var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
  var updatedList = list.concat(target);
  return isBody ? updatedList : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    updatedList.concat(listScrollParents(getParentNode(target)))
  );
}
function rectToClientRect(rect) {
  return Object.assign({}, rect, {
    left: rect.x,
    top: rect.y,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  });
}
function getInnerBoundingClientRect(element, strategy) {
  var rect = getBoundingClientRect(element, false, strategy === "fixed");
  rect.top = rect.top + element.clientTop;
  rect.left = rect.left + element.clientLeft;
  rect.bottom = rect.top + element.clientHeight;
  rect.right = rect.left + element.clientWidth;
  rect.width = element.clientWidth;
  rect.height = element.clientHeight;
  rect.x = rect.left;
  rect.y = rect.top;
  return rect;
}
function getClientRectFromMixedType(element, clippingParent, strategy) {
  return clippingParent === viewport ? rectToClientRect(getViewportRect(element, strategy)) : isElement(clippingParent) ? getInnerBoundingClientRect(clippingParent, strategy) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
}
function getClippingParents(element) {
  var clippingParents2 = listScrollParents(getParentNode(element));
  var canEscapeClipping = ["absolute", "fixed"].indexOf(getComputedStyle(element).position) >= 0;
  var clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;
  if (!isElement(clipperElement)) {
    return [];
  }
  return clippingParents2.filter(function(clippingParent) {
    return isElement(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== "body";
  });
}
function getClippingRect(element, boundary, rootBoundary, strategy) {
  var mainClippingParents = boundary === "clippingParents" ? getClippingParents(element) : [].concat(boundary);
  var clippingParents2 = [].concat(mainClippingParents, [rootBoundary]);
  var firstClippingParent = clippingParents2[0];
  var clippingRect = clippingParents2.reduce(function(accRect, clippingParent) {
    var rect = getClientRectFromMixedType(element, clippingParent, strategy);
    accRect.top = max(rect.top, accRect.top);
    accRect.right = min(rect.right, accRect.right);
    accRect.bottom = min(rect.bottom, accRect.bottom);
    accRect.left = max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromMixedType(element, firstClippingParent, strategy));
  clippingRect.width = clippingRect.right - clippingRect.left;
  clippingRect.height = clippingRect.bottom - clippingRect.top;
  clippingRect.x = clippingRect.left;
  clippingRect.y = clippingRect.top;
  return clippingRect;
}
function computeOffsets(_ref) {
  var reference2 = _ref.reference, element = _ref.element, placement = _ref.placement;
  var basePlacement = placement ? getBasePlacement(placement) : null;
  var variation = placement ? getVariation(placement) : null;
  var commonX = reference2.x + reference2.width / 2 - element.width / 2;
  var commonY = reference2.y + reference2.height / 2 - element.height / 2;
  var offsets;
  switch (basePlacement) {
    case top:
      offsets = {
        x: commonX,
        y: reference2.y - element.height
      };
      break;
    case bottom:
      offsets = {
        x: commonX,
        y: reference2.y + reference2.height
      };
      break;
    case right:
      offsets = {
        x: reference2.x + reference2.width,
        y: commonY
      };
      break;
    case left:
      offsets = {
        x: reference2.x - element.width,
        y: commonY
      };
      break;
    default:
      offsets = {
        x: reference2.x,
        y: reference2.y
      };
  }
  var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;
  if (mainAxis != null) {
    var len = mainAxis === "y" ? "height" : "width";
    switch (variation) {
      case start:
        offsets[mainAxis] = offsets[mainAxis] - (reference2[len] / 2 - element[len] / 2);
        break;
      case end:
        offsets[mainAxis] = offsets[mainAxis] + (reference2[len] / 2 - element[len] / 2);
        break;
      default:
    }
  }
  return offsets;
}
function detectOverflow(state, options) {
  if (options === void 0) {
    options = {};
  }
  var _options = options, _options$placement = _options.placement, placement = _options$placement === void 0 ? state.placement : _options$placement, _options$strategy = _options.strategy, strategy = _options$strategy === void 0 ? state.strategy : _options$strategy, _options$boundary = _options.boundary, boundary = _options$boundary === void 0 ? clippingParents : _options$boundary, _options$rootBoundary = _options.rootBoundary, rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary, _options$elementConte = _options.elementContext, elementContext = _options$elementConte === void 0 ? popper : _options$elementConte, _options$altBoundary = _options.altBoundary, altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary, _options$padding = _options.padding, padding = _options$padding === void 0 ? 0 : _options$padding;
  var paddingObject = mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
  var altContext = elementContext === popper ? reference : popper;
  var popperRect = state.rects.popper;
  var element = state.elements[altBoundary ? altContext : elementContext];
  var clippingClientRect = getClippingRect(isElement(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary, strategy);
  var referenceClientRect = getBoundingClientRect(state.elements.reference);
  var popperOffsets2 = computeOffsets({
    reference: referenceClientRect,
    element: popperRect,
    strategy: "absolute",
    placement
  });
  var popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets2));
  var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect;
  var overflowOffsets = {
    top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
    bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
    left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
    right: elementClientRect.right - clippingClientRect.right + paddingObject.right
  };
  var offsetData = state.modifiersData.offset;
  if (elementContext === popper && offsetData) {
    var offset2 = offsetData[placement];
    Object.keys(overflowOffsets).forEach(function(key) {
      var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
      var axis = [top, bottom].indexOf(key) >= 0 ? "y" : "x";
      overflowOffsets[key] += offset2[axis] * multiply;
    });
  }
  return overflowOffsets;
}
function computeAutoPlacement(state, options) {
  if (options === void 0) {
    options = {};
  }
  var _options = options, placement = _options.placement, boundary = _options.boundary, rootBoundary = _options.rootBoundary, padding = _options.padding, flipVariations = _options.flipVariations, _options$allowedAutoP = _options.allowedAutoPlacements, allowedAutoPlacements = _options$allowedAutoP === void 0 ? placements : _options$allowedAutoP;
  var variation = getVariation(placement);
  var placements2 = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function(placement2) {
    return getVariation(placement2) === variation;
  }) : basePlacements;
  var allowedPlacements = placements2.filter(function(placement2) {
    return allowedAutoPlacements.indexOf(placement2) >= 0;
  });
  if (allowedPlacements.length === 0) {
    allowedPlacements = placements2;
  }
  var overflows = allowedPlacements.reduce(function(acc, placement2) {
    acc[placement2] = detectOverflow(state, {
      placement: placement2,
      boundary,
      rootBoundary,
      padding
    })[getBasePlacement(placement2)];
    return acc;
  }, {});
  return Object.keys(overflows).sort(function(a, b) {
    return overflows[a] - overflows[b];
  });
}
function getExpandedFallbackPlacements(placement) {
  if (getBasePlacement(placement) === auto) {
    return [];
  }
  var oppositePlacement = getOppositePlacement(placement);
  return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
}
function flip(_ref) {
  var state = _ref.state, options = _ref.options, name = _ref.name;
  if (state.modifiersData[name]._skip) {
    return;
  }
  var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis, specifiedFallbackPlacements = options.fallbackPlacements, padding = options.padding, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, _options$flipVariatio = options.flipVariations, flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio, allowedAutoPlacements = options.allowedAutoPlacements;
  var preferredPlacement = state.options.placement;
  var basePlacement = getBasePlacement(preferredPlacement);
  var isBasePlacement = basePlacement === preferredPlacement;
  var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
  var placements2 = [preferredPlacement].concat(fallbackPlacements).reduce(function(acc, placement2) {
    return acc.concat(getBasePlacement(placement2) === auto ? computeAutoPlacement(state, {
      placement: placement2,
      boundary,
      rootBoundary,
      padding,
      flipVariations,
      allowedAutoPlacements
    }) : placement2);
  }, []);
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var checksMap = /* @__PURE__ */ new Map();
  var makeFallbackChecks = true;
  var firstFittingPlacement = placements2[0];
  for (var i = 0; i < placements2.length; i++) {
    var placement = placements2[i];
    var _basePlacement = getBasePlacement(placement);
    var isStartVariation = getVariation(placement) === start;
    var isVertical = [top, bottom].indexOf(_basePlacement) >= 0;
    var len = isVertical ? "width" : "height";
    var overflow = detectOverflow(state, {
      placement,
      boundary,
      rootBoundary,
      altBoundary,
      padding
    });
    var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : top;
    if (referenceRect[len] > popperRect[len]) {
      mainVariationSide = getOppositePlacement(mainVariationSide);
    }
    var altVariationSide = getOppositePlacement(mainVariationSide);
    var checks = [];
    if (checkMainAxis) {
      checks.push(overflow[_basePlacement] <= 0);
    }
    if (checkAltAxis) {
      checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
    }
    if (checks.every(function(check) {
      return check;
    })) {
      firstFittingPlacement = placement;
      makeFallbackChecks = false;
      break;
    }
    checksMap.set(placement, checks);
  }
  if (makeFallbackChecks) {
    var numberOfChecks = flipVariations ? 3 : 1;
    var _loop = function _loop2(_i2) {
      var fittingPlacement = placements2.find(function(placement2) {
        var checks2 = checksMap.get(placement2);
        if (checks2) {
          return checks2.slice(0, _i2).every(function(check) {
            return check;
          });
        }
      });
      if (fittingPlacement) {
        firstFittingPlacement = fittingPlacement;
        return "break";
      }
    };
    for (var _i = numberOfChecks; _i > 0; _i--) {
      var _ret = _loop(_i);
      if (_ret === "break") break;
    }
  }
  if (state.placement !== firstFittingPlacement) {
    state.modifiersData[name]._skip = true;
    state.placement = firstFittingPlacement;
    state.reset = true;
  }
}
var flip_default = {
  name: "flip",
  enabled: true,
  phase: "main",
  fn: flip,
  requiresIfExists: ["offset"],
  data: {
    _skip: false
  }
};
function getSideOffsets(overflow, rect, preventedOffsets) {
  if (preventedOffsets === void 0) {
    preventedOffsets = {
      x: 0,
      y: 0
    };
  }
  return {
    top: overflow.top - rect.height - preventedOffsets.y,
    right: overflow.right - rect.width + preventedOffsets.x,
    bottom: overflow.bottom - rect.height + preventedOffsets.y,
    left: overflow.left - rect.width - preventedOffsets.x
  };
}
function isAnySideFullyClipped(overflow) {
  return [top, right, bottom, left].some(function(side) {
    return overflow[side] >= 0;
  });
}
function hide(_ref) {
  var state = _ref.state, name = _ref.name;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var preventedOffsets = state.modifiersData.preventOverflow;
  var referenceOverflow = detectOverflow(state, {
    elementContext: "reference"
  });
  var popperAltOverflow = detectOverflow(state, {
    altBoundary: true
  });
  var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
  var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
  var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
  var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
  state.modifiersData[name] = {
    referenceClippingOffsets,
    popperEscapeOffsets,
    isReferenceHidden,
    hasPopperEscaped
  };
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    "data-popper-reference-hidden": isReferenceHidden,
    "data-popper-escaped": hasPopperEscaped
  });
}
var hide_default = {
  name: "hide",
  enabled: true,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: hide
};
function distanceAndSkiddingToXY(placement, rects, offset2) {
  var basePlacement = getBasePlacement(placement);
  var invertDistance = [left, top].indexOf(basePlacement) >= 0 ? -1 : 1;
  var _ref = typeof offset2 === "function" ? offset2(Object.assign({}, rects, {
    placement
  })) : offset2, skidding = _ref[0], distance = _ref[1];
  skidding = skidding || 0;
  distance = (distance || 0) * invertDistance;
  return [left, right].indexOf(basePlacement) >= 0 ? {
    x: distance,
    y: skidding
  } : {
    x: skidding,
    y: distance
  };
}
function offset(_ref2) {
  var state = _ref2.state, options = _ref2.options, name = _ref2.name;
  var _options$offset = options.offset, offset2 = _options$offset === void 0 ? [0, 0] : _options$offset;
  var data = placements.reduce(function(acc, placement) {
    acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset2);
    return acc;
  }, {});
  var _data$state$placement = data[state.placement], x = _data$state$placement.x, y = _data$state$placement.y;
  if (state.modifiersData.popperOffsets != null) {
    state.modifiersData.popperOffsets.x += x;
    state.modifiersData.popperOffsets.y += y;
  }
  state.modifiersData[name] = data;
}
var offset_default = {
  name: "offset",
  enabled: true,
  phase: "main",
  requires: ["popperOffsets"],
  fn: offset
};
function popperOffsets(_ref) {
  var state = _ref.state, name = _ref.name;
  state.modifiersData[name] = computeOffsets({
    reference: state.rects.reference,
    element: state.rects.popper,
    strategy: "absolute",
    placement: state.placement
  });
}
var popperOffsets_default = {
  name: "popperOffsets",
  enabled: true,
  phase: "read",
  fn: popperOffsets,
  data: {}
};
function getAltAxis(axis) {
  return axis === "x" ? "y" : "x";
}
function preventOverflow(_ref) {
  var state = _ref.state, options = _ref.options, name = _ref.name;
  var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, padding = options.padding, _options$tether = options.tether, tether = _options$tether === void 0 ? true : _options$tether, _options$tetherOffset = options.tetherOffset, tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
  var overflow = detectOverflow(state, {
    boundary,
    rootBoundary,
    padding,
    altBoundary
  });
  var basePlacement = getBasePlacement(state.placement);
  var variation = getVariation(state.placement);
  var isBasePlacement = !variation;
  var mainAxis = getMainAxisFromPlacement(basePlacement);
  var altAxis = getAltAxis(mainAxis);
  var popperOffsets2 = state.modifiersData.popperOffsets;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var tetherOffsetValue = typeof tetherOffset === "function" ? tetherOffset(Object.assign({}, state.rects, {
    placement: state.placement
  })) : tetherOffset;
  var normalizedTetherOffsetValue = typeof tetherOffsetValue === "number" ? {
    mainAxis: tetherOffsetValue,
    altAxis: tetherOffsetValue
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, tetherOffsetValue);
  var offsetModifierState = state.modifiersData.offset ? state.modifiersData.offset[state.placement] : null;
  var data = {
    x: 0,
    y: 0
  };
  if (!popperOffsets2) {
    return;
  }
  if (checkMainAxis) {
    var _offsetModifierState$;
    var mainSide = mainAxis === "y" ? top : left;
    var altSide = mainAxis === "y" ? bottom : right;
    var len = mainAxis === "y" ? "height" : "width";
    var offset2 = popperOffsets2[mainAxis];
    var min2 = offset2 + overflow[mainSide];
    var max2 = offset2 - overflow[altSide];
    var additive = tether ? -popperRect[len] / 2 : 0;
    var minLen = variation === start ? referenceRect[len] : popperRect[len];
    var maxLen = variation === start ? -popperRect[len] : -referenceRect[len];
    var arrowElement = state.elements.arrow;
    var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
      width: 0,
      height: 0
    };
    var arrowPaddingObject = state.modifiersData["arrow#persistent"] ? state.modifiersData["arrow#persistent"].padding : getFreshSideObject();
    var arrowPaddingMin = arrowPaddingObject[mainSide];
    var arrowPaddingMax = arrowPaddingObject[altSide];
    var arrowLen = within(0, referenceRect[len], arrowRect[len]);
    var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis;
    var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis;
    var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
    var clientOffset = arrowOffsetParent ? mainAxis === "y" ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
    var offsetModifierValue = (_offsetModifierState$ = offsetModifierState == null ? void 0 : offsetModifierState[mainAxis]) != null ? _offsetModifierState$ : 0;
    var tetherMin = offset2 + minOffset - offsetModifierValue - clientOffset;
    var tetherMax = offset2 + maxOffset - offsetModifierValue;
    var preventedOffset = within(tether ? min(min2, tetherMin) : min2, offset2, tether ? max(max2, tetherMax) : max2);
    popperOffsets2[mainAxis] = preventedOffset;
    data[mainAxis] = preventedOffset - offset2;
  }
  if (checkAltAxis) {
    var _offsetModifierState$2;
    var _mainSide = mainAxis === "x" ? top : left;
    var _altSide = mainAxis === "x" ? bottom : right;
    var _offset = popperOffsets2[altAxis];
    var _len = altAxis === "y" ? "height" : "width";
    var _min = _offset + overflow[_mainSide];
    var _max = _offset - overflow[_altSide];
    var isOriginSide = [top, left].indexOf(basePlacement) !== -1;
    var _offsetModifierValue = (_offsetModifierState$2 = offsetModifierState == null ? void 0 : offsetModifierState[altAxis]) != null ? _offsetModifierState$2 : 0;
    var _tetherMin = isOriginSide ? _min : _offset - referenceRect[_len] - popperRect[_len] - _offsetModifierValue + normalizedTetherOffsetValue.altAxis;
    var _tetherMax = isOriginSide ? _offset + referenceRect[_len] + popperRect[_len] - _offsetModifierValue - normalizedTetherOffsetValue.altAxis : _max;
    var _preventedOffset = tether && isOriginSide ? withinMaxClamp(_tetherMin, _offset, _tetherMax) : within(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);
    popperOffsets2[altAxis] = _preventedOffset;
    data[altAxis] = _preventedOffset - _offset;
  }
  state.modifiersData[name] = data;
}
var preventOverflow_default = {
  name: "preventOverflow",
  enabled: true,
  phase: "main",
  fn: preventOverflow,
  requiresIfExists: ["offset"]
};
function getHTMLElementScroll(element) {
  return {
    scrollLeft: element.scrollLeft,
    scrollTop: element.scrollTop
  };
}
function getNodeScroll(node) {
  if (node === getWindow(node) || !isHTMLElement(node)) {
    return getWindowScroll(node);
  } else {
    return getHTMLElementScroll(node);
  }
}
function isElementScaled(element) {
  var rect = element.getBoundingClientRect();
  var scaleX = round(rect.width) / element.offsetWidth || 1;
  var scaleY = round(rect.height) / element.offsetHeight || 1;
  return scaleX !== 1 || scaleY !== 1;
}
function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
  if (isFixed === void 0) {
    isFixed = false;
  }
  var isOffsetParentAnElement = isHTMLElement(offsetParent);
  var offsetParentIsScaled = isHTMLElement(offsetParent) && isElementScaled(offsetParent);
  var documentElement = getDocumentElement(offsetParent);
  var rect = getBoundingClientRect(elementOrVirtualElement, offsetParentIsScaled, isFixed);
  var scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  var offsets = {
    x: 0,
    y: 0
  };
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
    isScrollParent(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      offsets = getBoundingClientRect(offsetParent, true);
      offsets.x += offsetParent.clientLeft;
      offsets.y += offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }
  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}
function order(modifiers) {
  var map = /* @__PURE__ */ new Map();
  var visited = /* @__PURE__ */ new Set();
  var result = [];
  modifiers.forEach(function(modifier) {
    map.set(modifier.name, modifier);
  });
  function sort(modifier) {
    visited.add(modifier.name);
    var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
    requires.forEach(function(dep) {
      if (!visited.has(dep)) {
        var depModifier = map.get(dep);
        if (depModifier) {
          sort(depModifier);
        }
      }
    });
    result.push(modifier);
  }
  modifiers.forEach(function(modifier) {
    if (!visited.has(modifier.name)) {
      sort(modifier);
    }
  });
  return result;
}
function orderModifiers(modifiers) {
  var orderedModifiers = order(modifiers);
  return modifierPhases.reduce(function(acc, phase) {
    return acc.concat(orderedModifiers.filter(function(modifier) {
      return modifier.phase === phase;
    }));
  }, []);
}
function debounce(fn2) {
  var pending;
  return function() {
    if (!pending) {
      pending = new Promise(function(resolve) {
        Promise.resolve().then(function() {
          pending = void 0;
          resolve(fn2());
        });
      });
    }
    return pending;
  };
}
function mergeByName(modifiers) {
  var merged = modifiers.reduce(function(merged2, current) {
    var existing = merged2[current.name];
    merged2[current.name] = existing ? Object.assign({}, existing, current, {
      options: Object.assign({}, existing.options, current.options),
      data: Object.assign({}, existing.data, current.data)
    }) : current;
    return merged2;
  }, {});
  return Object.keys(merged).map(function(key) {
    return merged[key];
  });
}
var DEFAULT_OPTIONS = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function areValidElements() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  return !args.some(function(element) {
    return !(element && typeof element.getBoundingClientRect === "function");
  });
}
function popperGenerator(generatorOptions) {
  if (generatorOptions === void 0) {
    generatorOptions = {};
  }
  var _generatorOptions = generatorOptions, _generatorOptions$def = _generatorOptions.defaultModifiers, defaultModifiers2 = _generatorOptions$def === void 0 ? [] : _generatorOptions$def, _generatorOptions$def2 = _generatorOptions.defaultOptions, defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
  return function createPopper2(reference2, popper2, options) {
    if (options === void 0) {
      options = defaultOptions;
    }
    var state = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
      modifiersData: {},
      elements: {
        reference: reference2,
        popper: popper2
      },
      attributes: {},
      styles: {}
    };
    var effectCleanupFns = [];
    var isDestroyed = false;
    var instance = {
      state,
      setOptions: function setOptions(setOptionsAction) {
        var options2 = typeof setOptionsAction === "function" ? setOptionsAction(state.options) : setOptionsAction;
        cleanupModifierEffects();
        state.options = Object.assign({}, defaultOptions, state.options, options2);
        state.scrollParents = {
          reference: isElement(reference2) ? listScrollParents(reference2) : reference2.contextElement ? listScrollParents(reference2.contextElement) : [],
          popper: listScrollParents(popper2)
        };
        var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers2, state.options.modifiers)));
        state.orderedModifiers = orderedModifiers.filter(function(m) {
          return m.enabled;
        });
        runModifierEffects();
        return instance.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function forceUpdate() {
        if (isDestroyed) {
          return;
        }
        var _state$elements = state.elements, reference3 = _state$elements.reference, popper3 = _state$elements.popper;
        if (!areValidElements(reference3, popper3)) {
          return;
        }
        state.rects = {
          reference: getCompositeRect(reference3, getOffsetParent(popper3), state.options.strategy === "fixed"),
          popper: getLayoutRect(popper3)
        };
        state.reset = false;
        state.placement = state.options.placement;
        state.orderedModifiers.forEach(function(modifier) {
          return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
        });
        for (var index = 0; index < state.orderedModifiers.length; index++) {
          if (state.reset === true) {
            state.reset = false;
            index = -1;
            continue;
          }
          var _state$orderedModifie = state.orderedModifiers[index], fn2 = _state$orderedModifie.fn, _state$orderedModifie2 = _state$orderedModifie.options, _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2, name = _state$orderedModifie.name;
          if (typeof fn2 === "function") {
            state = fn2({
              state,
              options: _options,
              name,
              instance
            }) || state;
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: debounce(function() {
        return new Promise(function(resolve) {
          instance.forceUpdate();
          resolve(state);
        });
      }),
      destroy: function destroy() {
        cleanupModifierEffects();
        isDestroyed = true;
      }
    };
    if (!areValidElements(reference2, popper2)) {
      return instance;
    }
    instance.setOptions(options).then(function(state2) {
      if (!isDestroyed && options.onFirstUpdate) {
        options.onFirstUpdate(state2);
      }
    });
    function runModifierEffects() {
      state.orderedModifiers.forEach(function(_ref) {
        var name = _ref.name, _ref$options = _ref.options, options2 = _ref$options === void 0 ? {} : _ref$options, effect5 = _ref.effect;
        if (typeof effect5 === "function") {
          var cleanupFn = effect5({
            state,
            name,
            instance,
            options: options2
          });
          var noopFn = function noopFn2() {
          };
          effectCleanupFns.push(cleanupFn || noopFn);
        }
      });
    }
    function cleanupModifierEffects() {
      effectCleanupFns.forEach(function(fn2) {
        return fn2();
      });
      effectCleanupFns = [];
    }
    return instance;
  };
}
var defaultModifiers = [eventListeners_default, popperOffsets_default, computeStyles_default, applyStyles_default, offset_default, flip_default, preventOverflow_default, arrow_default, hide_default];
var createPopper = /* @__PURE__ */ popperGenerator({
  defaultModifiers
});
var BOX_CLASS = "tippy-box";
var CONTENT_CLASS = "tippy-content";
var BACKDROP_CLASS = "tippy-backdrop";
var ARROW_CLASS = "tippy-arrow";
var SVG_ARROW_CLASS = "tippy-svg-arrow";
var TOUCH_OPTIONS = {
  passive: true,
  capture: true
};
var TIPPY_DEFAULT_APPEND_TO = function TIPPY_DEFAULT_APPEND_TO2() {
  return document.body;
};
function getValueAtIndexOrReturn(value, index, defaultValue) {
  if (Array.isArray(value)) {
    var v = value[index];
    return v == null ? Array.isArray(defaultValue) ? defaultValue[index] : defaultValue : v;
  }
  return value;
}
function isType(value, type) {
  var str = {}.toString.call(value);
  return str.indexOf("[object") === 0 && str.indexOf(type + "]") > -1;
}
function invokeWithArgsOrReturn(value, args) {
  return typeof value === "function" ? value.apply(void 0, args) : value;
}
function debounce2(fn2, ms) {
  if (ms === 0) {
    return fn2;
  }
  var timeout;
  return function(arg) {
    clearTimeout(timeout);
    timeout = setTimeout(function() {
      fn2(arg);
    }, ms);
  };
}
function splitBySpaces(value) {
  return value.split(/\s+/).filter(Boolean);
}
function normalizeToArray(value) {
  return [].concat(value);
}
function pushIfUnique(arr, value) {
  if (arr.indexOf(value) === -1) {
    arr.push(value);
  }
}
function unique(arr) {
  return arr.filter(function(item, index) {
    return arr.indexOf(item) === index;
  });
}
function getBasePlacement2(placement) {
  return placement.split("-")[0];
}
function arrayFrom(value) {
  return [].slice.call(value);
}
function removeUndefinedProps(obj) {
  return Object.keys(obj).reduce(function(acc, key) {
    if (obj[key] !== void 0) {
      acc[key] = obj[key];
    }
    return acc;
  }, {});
}
function div() {
  return document.createElement("div");
}
function isElement2(value) {
  return ["Element", "Fragment"].some(function(type) {
    return isType(value, type);
  });
}
function isNodeList(value) {
  return isType(value, "NodeList");
}
function isMouseEvent(value) {
  return isType(value, "MouseEvent");
}
function isReferenceElement(value) {
  return !!(value && value._tippy && value._tippy.reference === value);
}
function getArrayOfElements(value) {
  if (isElement2(value)) {
    return [value];
  }
  if (isNodeList(value)) {
    return arrayFrom(value);
  }
  if (Array.isArray(value)) {
    return value;
  }
  return arrayFrom(document.querySelectorAll(value));
}
function setTransitionDuration(els, value) {
  els.forEach(function(el) {
    if (el) {
      el.style.transitionDuration = value + "ms";
    }
  });
}
function setVisibilityState(els, state) {
  els.forEach(function(el) {
    if (el) {
      el.setAttribute("data-state", state);
    }
  });
}
function getOwnerDocument(elementOrElements) {
  var _element$ownerDocumen;
  var _normalizeToArray = normalizeToArray(elementOrElements), element = _normalizeToArray[0];
  return element != null && (_element$ownerDocumen = element.ownerDocument) != null && _element$ownerDocumen.body ? element.ownerDocument : document;
}
function isCursorOutsideInteractiveBorder(popperTreeData, event) {
  var clientX = event.clientX, clientY = event.clientY;
  return popperTreeData.every(function(_ref) {
    var popperRect = _ref.popperRect, popperState = _ref.popperState, props = _ref.props;
    var interactiveBorder = props.interactiveBorder;
    var basePlacement = getBasePlacement2(popperState.placement);
    var offsetData = popperState.modifiersData.offset;
    if (!offsetData) {
      return true;
    }
    var topDistance = basePlacement === "bottom" ? offsetData.top.y : 0;
    var bottomDistance = basePlacement === "top" ? offsetData.bottom.y : 0;
    var leftDistance = basePlacement === "right" ? offsetData.left.x : 0;
    var rightDistance = basePlacement === "left" ? offsetData.right.x : 0;
    var exceedsTop = popperRect.top - clientY + topDistance > interactiveBorder;
    var exceedsBottom = clientY - popperRect.bottom - bottomDistance > interactiveBorder;
    var exceedsLeft = popperRect.left - clientX + leftDistance > interactiveBorder;
    var exceedsRight = clientX - popperRect.right - rightDistance > interactiveBorder;
    return exceedsTop || exceedsBottom || exceedsLeft || exceedsRight;
  });
}
function updateTransitionEndListener(box, action, listener) {
  var method = action + "EventListener";
  ["transitionend", "webkitTransitionEnd"].forEach(function(event) {
    box[method](event, listener);
  });
}
function actualContains(parent, child) {
  var target = child;
  while (target) {
    var _target$getRootNode;
    if (parent.contains(target)) {
      return true;
    }
    target = target.getRootNode == null ? void 0 : (_target$getRootNode = target.getRootNode()) == null ? void 0 : _target$getRootNode.host;
  }
  return false;
}
var currentInput = {
  isTouch: false
};
var lastMouseMoveTime = 0;
function onDocumentTouchStart() {
  if (currentInput.isTouch) {
    return;
  }
  currentInput.isTouch = true;
  if (window.performance) {
    document.addEventListener("mousemove", onDocumentMouseMove);
  }
}
function onDocumentMouseMove() {
  var now = performance.now();
  if (now - lastMouseMoveTime < 20) {
    currentInput.isTouch = false;
    document.removeEventListener("mousemove", onDocumentMouseMove);
  }
  lastMouseMoveTime = now;
}
function onWindowBlur() {
  var activeElement = document.activeElement;
  if (isReferenceElement(activeElement)) {
    var instance = activeElement._tippy;
    if (activeElement.blur && !instance.state.isVisible) {
      activeElement.blur();
    }
  }
}
function bindGlobalEventListeners() {
  document.addEventListener("touchstart", onDocumentTouchStart, TOUCH_OPTIONS);
  window.addEventListener("blur", onWindowBlur);
}
var isBrowser = typeof window !== "undefined" && typeof document !== "undefined";
var isIE11 = isBrowser ? (
  // @ts-ignore
  !!window.msCrypto
) : false;
if (false) {
  resetVisitedMessages();
}
var pluginProps = {
  animateFill: false,
  followCursor: false,
  inlinePositioning: false,
  sticky: false
};
var renderProps = {
  allowHTML: false,
  animation: "fade",
  arrow: true,
  content: "",
  inertia: false,
  maxWidth: 350,
  role: "tooltip",
  theme: "",
  zIndex: 9999
};
var defaultProps = Object.assign({
  appendTo: TIPPY_DEFAULT_APPEND_TO,
  aria: {
    content: "auto",
    expanded: "auto"
  },
  delay: 0,
  duration: [300, 250],
  getReferenceClientRect: null,
  hideOnClick: true,
  ignoreAttributes: false,
  interactive: false,
  interactiveBorder: 2,
  interactiveDebounce: 0,
  moveTransition: "",
  offset: [0, 10],
  onAfterUpdate: function onAfterUpdate() {
  },
  onBeforeUpdate: function onBeforeUpdate() {
  },
  onCreate: function onCreate() {
  },
  onDestroy: function onDestroy() {
  },
  onHidden: function onHidden() {
  },
  onHide: function onHide() {
  },
  onMount: function onMount() {
  },
  onShow: function onShow() {
  },
  onShown: function onShown() {
  },
  onTrigger: function onTrigger() {
  },
  onUntrigger: function onUntrigger() {
  },
  onClickOutside: function onClickOutside() {
  },
  placement: "top",
  plugins: [],
  popperOptions: {},
  render: null,
  showOnCreate: false,
  touch: true,
  trigger: "mouseenter focus",
  triggerTarget: null
}, pluginProps, renderProps);
var defaultKeys = Object.keys(defaultProps);
var setDefaultProps = function setDefaultProps2(partialProps) {
  if (false) {
    validateProps(partialProps, []);
  }
  var keys = Object.keys(partialProps);
  keys.forEach(function(key) {
    defaultProps[key] = partialProps[key];
  });
};
function getExtendedPassedProps(passedProps) {
  var plugins = passedProps.plugins || [];
  var pluginProps2 = plugins.reduce(function(acc, plugin) {
    var name = plugin.name, defaultValue = plugin.defaultValue;
    if (name) {
      var _name;
      acc[name] = passedProps[name] !== void 0 ? passedProps[name] : (_name = defaultProps[name]) != null ? _name : defaultValue;
    }
    return acc;
  }, {});
  return Object.assign({}, passedProps, pluginProps2);
}
function getDataAttributeProps(reference2, plugins) {
  var propKeys = plugins ? Object.keys(getExtendedPassedProps(Object.assign({}, defaultProps, {
    plugins
  }))) : defaultKeys;
  var props = propKeys.reduce(function(acc, key) {
    var valueAsString = (reference2.getAttribute("data-tippy-" + key) || "").trim();
    if (!valueAsString) {
      return acc;
    }
    if (key === "content") {
      acc[key] = valueAsString;
    } else {
      try {
        acc[key] = JSON.parse(valueAsString);
      } catch (e) {
        acc[key] = valueAsString;
      }
    }
    return acc;
  }, {});
  return props;
}
function evaluateProps(reference2, props) {
  var out = Object.assign({}, props, {
    content: invokeWithArgsOrReturn(props.content, [reference2])
  }, props.ignoreAttributes ? {} : getDataAttributeProps(reference2, props.plugins));
  out.aria = Object.assign({}, defaultProps.aria, out.aria);
  out.aria = {
    expanded: out.aria.expanded === "auto" ? props.interactive : out.aria.expanded,
    content: out.aria.content === "auto" ? props.interactive ? null : "describedby" : out.aria.content
  };
  return out;
}
var innerHTML = function innerHTML2() {
  return "innerHTML";
};
function dangerouslySetInnerHTML(element, html) {
  element[innerHTML()] = html;
}
function createArrowElement(value) {
  var arrow2 = div();
  if (value === true) {
    arrow2.className = ARROW_CLASS;
  } else {
    arrow2.className = SVG_ARROW_CLASS;
    if (isElement2(value)) {
      arrow2.appendChild(value);
    } else {
      dangerouslySetInnerHTML(arrow2, value);
    }
  }
  return arrow2;
}
function setContent(content, props) {
  if (isElement2(props.content)) {
    dangerouslySetInnerHTML(content, "");
    content.appendChild(props.content);
  } else if (typeof props.content !== "function") {
    if (props.allowHTML) {
      dangerouslySetInnerHTML(content, props.content);
    } else {
      content.textContent = props.content;
    }
  }
}
function getChildren(popper2) {
  var box = popper2.firstElementChild;
  var boxChildren = arrayFrom(box.children);
  return {
    box,
    content: boxChildren.find(function(node) {
      return node.classList.contains(CONTENT_CLASS);
    }),
    arrow: boxChildren.find(function(node) {
      return node.classList.contains(ARROW_CLASS) || node.classList.contains(SVG_ARROW_CLASS);
    }),
    backdrop: boxChildren.find(function(node) {
      return node.classList.contains(BACKDROP_CLASS);
    })
  };
}
function render(instance) {
  var popper2 = div();
  var box = div();
  box.className = BOX_CLASS;
  box.setAttribute("data-state", "hidden");
  box.setAttribute("tabindex", "-1");
  var content = div();
  content.className = CONTENT_CLASS;
  content.setAttribute("data-state", "hidden");
  setContent(content, instance.props);
  popper2.appendChild(box);
  box.appendChild(content);
  onUpdate(instance.props, instance.props);
  function onUpdate(prevProps, nextProps) {
    var _getChildren = getChildren(popper2), box2 = _getChildren.box, content2 = _getChildren.content, arrow2 = _getChildren.arrow;
    if (nextProps.theme) {
      box2.setAttribute("data-theme", nextProps.theme);
    } else {
      box2.removeAttribute("data-theme");
    }
    if (typeof nextProps.animation === "string") {
      box2.setAttribute("data-animation", nextProps.animation);
    } else {
      box2.removeAttribute("data-animation");
    }
    if (nextProps.inertia) {
      box2.setAttribute("data-inertia", "");
    } else {
      box2.removeAttribute("data-inertia");
    }
    box2.style.maxWidth = typeof nextProps.maxWidth === "number" ? nextProps.maxWidth + "px" : nextProps.maxWidth;
    if (nextProps.role) {
      box2.setAttribute("role", nextProps.role);
    } else {
      box2.removeAttribute("role");
    }
    if (prevProps.content !== nextProps.content || prevProps.allowHTML !== nextProps.allowHTML) {
      setContent(content2, instance.props);
    }
    if (nextProps.arrow) {
      if (!arrow2) {
        box2.appendChild(createArrowElement(nextProps.arrow));
      } else if (prevProps.arrow !== nextProps.arrow) {
        box2.removeChild(arrow2);
        box2.appendChild(createArrowElement(nextProps.arrow));
      }
    } else if (arrow2) {
      box2.removeChild(arrow2);
    }
  }
  return {
    popper: popper2,
    onUpdate
  };
}
render.$$tippy = true;
var idCounter = 1;
var mouseMoveListeners = [];
var mountedInstances = [];
function createTippy(reference2, passedProps) {
  var props = evaluateProps(reference2, Object.assign({}, defaultProps, getExtendedPassedProps(removeUndefinedProps(passedProps))));
  var showTimeout;
  var hideTimeout;
  var scheduleHideAnimationFrame;
  var isVisibleFromClick = false;
  var didHideDueToDocumentMouseDown = false;
  var didTouchMove = false;
  var ignoreOnFirstUpdate = false;
  var lastTriggerEvent;
  var currentTransitionEndListener;
  var onFirstUpdate;
  var listeners = [];
  var debouncedOnMouseMove = debounce2(onMouseMove, props.interactiveDebounce);
  var currentTarget;
  var id = idCounter++;
  var popperInstance = null;
  var plugins = unique(props.plugins);
  var state = {
    // Is the instance currently enabled?
    isEnabled: true,
    // Is the tippy currently showing and not transitioning out?
    isVisible: false,
    // Has the instance been destroyed?
    isDestroyed: false,
    // Is the tippy currently mounted to the DOM?
    isMounted: false,
    // Has the tippy finished transitioning in?
    isShown: false
  };
  var instance = {
    // properties
    id,
    reference: reference2,
    popper: div(),
    popperInstance,
    props,
    state,
    plugins,
    // methods
    clearDelayTimeouts,
    setProps,
    setContent: setContent2,
    show,
    hide: hide2,
    hideWithInteractivity,
    enable,
    disable,
    unmount,
    destroy
  };
  if (!props.render) {
    if (false) {
      errorWhen(true, "render() function has not been supplied.");
    }
    return instance;
  }
  var _props$render = props.render(instance), popper2 = _props$render.popper, onUpdate = _props$render.onUpdate;
  popper2.setAttribute("data-tippy-root", "");
  popper2.id = "tippy-" + instance.id;
  instance.popper = popper2;
  reference2._tippy = instance;
  popper2._tippy = instance;
  var pluginsHooks = plugins.map(function(plugin) {
    return plugin.fn(instance);
  });
  var hasAriaExpanded = reference2.hasAttribute("aria-expanded");
  addListeners();
  handleAriaExpandedAttribute();
  handleStyles();
  invokeHook("onCreate", [instance]);
  if (props.showOnCreate) {
    scheduleShow();
  }
  popper2.addEventListener("mouseenter", function() {
    if (instance.props.interactive && instance.state.isVisible) {
      instance.clearDelayTimeouts();
    }
  });
  popper2.addEventListener("mouseleave", function() {
    if (instance.props.interactive && instance.props.trigger.indexOf("mouseenter") >= 0) {
      getDocument().addEventListener("mousemove", debouncedOnMouseMove);
    }
  });
  return instance;
  function getNormalizedTouchSettings() {
    var touch = instance.props.touch;
    return Array.isArray(touch) ? touch : [touch, 0];
  }
  function getIsCustomTouchBehavior() {
    return getNormalizedTouchSettings()[0] === "hold";
  }
  function getIsDefaultRenderFn() {
    var _instance$props$rende;
    return !!((_instance$props$rende = instance.props.render) != null && _instance$props$rende.$$tippy);
  }
  function getCurrentTarget() {
    return currentTarget || reference2;
  }
  function getDocument() {
    var parent = getCurrentTarget().parentNode;
    return parent ? getOwnerDocument(parent) : document;
  }
  function getDefaultTemplateChildren() {
    return getChildren(popper2);
  }
  function getDelay(isShow) {
    if (instance.state.isMounted && !instance.state.isVisible || currentInput.isTouch || lastTriggerEvent && lastTriggerEvent.type === "focus") {
      return 0;
    }
    return getValueAtIndexOrReturn(instance.props.delay, isShow ? 0 : 1, defaultProps.delay);
  }
  function handleStyles(fromHide) {
    if (fromHide === void 0) {
      fromHide = false;
    }
    popper2.style.pointerEvents = instance.props.interactive && !fromHide ? "" : "none";
    popper2.style.zIndex = "" + instance.props.zIndex;
  }
  function invokeHook(hook, args, shouldInvokePropsHook) {
    if (shouldInvokePropsHook === void 0) {
      shouldInvokePropsHook = true;
    }
    pluginsHooks.forEach(function(pluginHooks) {
      if (pluginHooks[hook]) {
        pluginHooks[hook].apply(pluginHooks, args);
      }
    });
    if (shouldInvokePropsHook) {
      var _instance$props;
      (_instance$props = instance.props)[hook].apply(_instance$props, args);
    }
  }
  function handleAriaContentAttribute() {
    var aria = instance.props.aria;
    if (!aria.content) {
      return;
    }
    var attr = "aria-" + aria.content;
    var id2 = popper2.id;
    var nodes = normalizeToArray(instance.props.triggerTarget || reference2);
    nodes.forEach(function(node) {
      var currentValue = node.getAttribute(attr);
      if (instance.state.isVisible) {
        node.setAttribute(attr, currentValue ? currentValue + " " + id2 : id2);
      } else {
        var nextValue = currentValue && currentValue.replace(id2, "").trim();
        if (nextValue) {
          node.setAttribute(attr, nextValue);
        } else {
          node.removeAttribute(attr);
        }
      }
    });
  }
  function handleAriaExpandedAttribute() {
    if (hasAriaExpanded || !instance.props.aria.expanded) {
      return;
    }
    var nodes = normalizeToArray(instance.props.triggerTarget || reference2);
    nodes.forEach(function(node) {
      if (instance.props.interactive) {
        node.setAttribute("aria-expanded", instance.state.isVisible && node === getCurrentTarget() ? "true" : "false");
      } else {
        node.removeAttribute("aria-expanded");
      }
    });
  }
  function cleanupInteractiveMouseListeners() {
    getDocument().removeEventListener("mousemove", debouncedOnMouseMove);
    mouseMoveListeners = mouseMoveListeners.filter(function(listener) {
      return listener !== debouncedOnMouseMove;
    });
  }
  function onDocumentPress(event) {
    if (currentInput.isTouch) {
      if (didTouchMove || event.type === "mousedown") {
        return;
      }
    }
    var actualTarget = event.composedPath && event.composedPath()[0] || event.target;
    if (instance.props.interactive && actualContains(popper2, actualTarget)) {
      return;
    }
    if (normalizeToArray(instance.props.triggerTarget || reference2).some(function(el) {
      return actualContains(el, actualTarget);
    })) {
      if (currentInput.isTouch) {
        return;
      }
      if (instance.state.isVisible && instance.props.trigger.indexOf("click") >= 0) {
        return;
      }
    } else {
      invokeHook("onClickOutside", [instance, event]);
    }
    if (instance.props.hideOnClick === true) {
      instance.clearDelayTimeouts();
      instance.hide();
      didHideDueToDocumentMouseDown = true;
      setTimeout(function() {
        didHideDueToDocumentMouseDown = false;
      });
      if (!instance.state.isMounted) {
        removeDocumentPress();
      }
    }
  }
  function onTouchMove() {
    didTouchMove = true;
  }
  function onTouchStart() {
    didTouchMove = false;
  }
  function addDocumentPress() {
    var doc = getDocument();
    doc.addEventListener("mousedown", onDocumentPress, true);
    doc.addEventListener("touchend", onDocumentPress, TOUCH_OPTIONS);
    doc.addEventListener("touchstart", onTouchStart, TOUCH_OPTIONS);
    doc.addEventListener("touchmove", onTouchMove, TOUCH_OPTIONS);
  }
  function removeDocumentPress() {
    var doc = getDocument();
    doc.removeEventListener("mousedown", onDocumentPress, true);
    doc.removeEventListener("touchend", onDocumentPress, TOUCH_OPTIONS);
    doc.removeEventListener("touchstart", onTouchStart, TOUCH_OPTIONS);
    doc.removeEventListener("touchmove", onTouchMove, TOUCH_OPTIONS);
  }
  function onTransitionedOut(duration, callback) {
    onTransitionEnd(duration, function() {
      if (!instance.state.isVisible && popper2.parentNode && popper2.parentNode.contains(popper2)) {
        callback();
      }
    });
  }
  function onTransitionedIn(duration, callback) {
    onTransitionEnd(duration, callback);
  }
  function onTransitionEnd(duration, callback) {
    var box = getDefaultTemplateChildren().box;
    function listener(event) {
      if (event.target === box) {
        updateTransitionEndListener(box, "remove", listener);
        callback();
      }
    }
    if (duration === 0) {
      return callback();
    }
    updateTransitionEndListener(box, "remove", currentTransitionEndListener);
    updateTransitionEndListener(box, "add", listener);
    currentTransitionEndListener = listener;
  }
  function on(eventType, handler, options) {
    if (options === void 0) {
      options = false;
    }
    var nodes = normalizeToArray(instance.props.triggerTarget || reference2);
    nodes.forEach(function(node) {
      node.addEventListener(eventType, handler, options);
      listeners.push({
        node,
        eventType,
        handler,
        options
      });
    });
  }
  function addListeners() {
    if (getIsCustomTouchBehavior()) {
      on("touchstart", onTrigger2, {
        passive: true
      });
      on("touchend", onMouseLeave, {
        passive: true
      });
    }
    splitBySpaces(instance.props.trigger).forEach(function(eventType) {
      if (eventType === "manual") {
        return;
      }
      on(eventType, onTrigger2);
      switch (eventType) {
        case "mouseenter":
          on("mouseleave", onMouseLeave);
          break;
        case "focus":
          on(isIE11 ? "focusout" : "blur", onBlurOrFocusOut);
          break;
        case "focusin":
          on("focusout", onBlurOrFocusOut);
          break;
      }
    });
  }
  function removeListeners() {
    listeners.forEach(function(_ref) {
      var node = _ref.node, eventType = _ref.eventType, handler = _ref.handler, options = _ref.options;
      node.removeEventListener(eventType, handler, options);
    });
    listeners = [];
  }
  function onTrigger2(event) {
    var _lastTriggerEvent;
    var shouldScheduleClickHide = false;
    if (!instance.state.isEnabled || isEventListenerStopped(event) || didHideDueToDocumentMouseDown) {
      return;
    }
    var wasFocused = ((_lastTriggerEvent = lastTriggerEvent) == null ? void 0 : _lastTriggerEvent.type) === "focus";
    lastTriggerEvent = event;
    currentTarget = event.currentTarget;
    handleAriaExpandedAttribute();
    if (!instance.state.isVisible && isMouseEvent(event)) {
      mouseMoveListeners.forEach(function(listener) {
        return listener(event);
      });
    }
    if (event.type === "click" && (instance.props.trigger.indexOf("mouseenter") < 0 || isVisibleFromClick) && instance.props.hideOnClick !== false && instance.state.isVisible) {
      shouldScheduleClickHide = true;
    } else {
      scheduleShow(event);
    }
    if (event.type === "click") {
      isVisibleFromClick = !shouldScheduleClickHide;
    }
    if (shouldScheduleClickHide && !wasFocused) {
      scheduleHide(event);
    }
  }
  function onMouseMove(event) {
    var target = event.target;
    var isCursorOverReferenceOrPopper = getCurrentTarget().contains(target) || popper2.contains(target);
    if (event.type === "mousemove" && isCursorOverReferenceOrPopper) {
      return;
    }
    var popperTreeData = getNestedPopperTree().concat(popper2).map(function(popper3) {
      var _instance$popperInsta;
      var instance2 = popper3._tippy;
      var state2 = (_instance$popperInsta = instance2.popperInstance) == null ? void 0 : _instance$popperInsta.state;
      if (state2) {
        return {
          popperRect: popper3.getBoundingClientRect(),
          popperState: state2,
          props
        };
      }
      return null;
    }).filter(Boolean);
    if (isCursorOutsideInteractiveBorder(popperTreeData, event)) {
      cleanupInteractiveMouseListeners();
      scheduleHide(event);
    }
  }
  function onMouseLeave(event) {
    var shouldBail = isEventListenerStopped(event) || instance.props.trigger.indexOf("click") >= 0 && isVisibleFromClick;
    if (shouldBail) {
      return;
    }
    if (instance.props.interactive) {
      instance.hideWithInteractivity(event);
      return;
    }
    scheduleHide(event);
  }
  function onBlurOrFocusOut(event) {
    if (instance.props.trigger.indexOf("focusin") < 0 && event.target !== getCurrentTarget()) {
      return;
    }
    if (instance.props.interactive && event.relatedTarget && popper2.contains(event.relatedTarget)) {
      return;
    }
    scheduleHide(event);
  }
  function isEventListenerStopped(event) {
    return currentInput.isTouch ? getIsCustomTouchBehavior() !== event.type.indexOf("touch") >= 0 : false;
  }
  function createPopperInstance() {
    destroyPopperInstance();
    var _instance$props2 = instance.props, popperOptions = _instance$props2.popperOptions, placement = _instance$props2.placement, offset2 = _instance$props2.offset, getReferenceClientRect = _instance$props2.getReferenceClientRect, moveTransition = _instance$props2.moveTransition;
    var arrow2 = getIsDefaultRenderFn() ? getChildren(popper2).arrow : null;
    var computedReference = getReferenceClientRect ? {
      getBoundingClientRect: getReferenceClientRect,
      contextElement: getReferenceClientRect.contextElement || getCurrentTarget()
    } : reference2;
    var tippyModifier = {
      name: "$$tippy",
      enabled: true,
      phase: "beforeWrite",
      requires: ["computeStyles"],
      fn: function fn2(_ref2) {
        var state2 = _ref2.state;
        if (getIsDefaultRenderFn()) {
          var _getDefaultTemplateCh = getDefaultTemplateChildren(), box = _getDefaultTemplateCh.box;
          ["placement", "reference-hidden", "escaped"].forEach(function(attr) {
            if (attr === "placement") {
              box.setAttribute("data-placement", state2.placement);
            } else {
              if (state2.attributes.popper["data-popper-" + attr]) {
                box.setAttribute("data-" + attr, "");
              } else {
                box.removeAttribute("data-" + attr);
              }
            }
          });
          state2.attributes.popper = {};
        }
      }
    };
    var modifiers = [{
      name: "offset",
      options: {
        offset: offset2
      }
    }, {
      name: "preventOverflow",
      options: {
        padding: {
          top: 2,
          bottom: 2,
          left: 5,
          right: 5
        }
      }
    }, {
      name: "flip",
      options: {
        padding: 5
      }
    }, {
      name: "computeStyles",
      options: {
        adaptive: !moveTransition
      }
    }, tippyModifier];
    if (getIsDefaultRenderFn() && arrow2) {
      modifiers.push({
        name: "arrow",
        options: {
          element: arrow2,
          padding: 3
        }
      });
    }
    modifiers.push.apply(modifiers, (popperOptions == null ? void 0 : popperOptions.modifiers) || []);
    instance.popperInstance = createPopper(computedReference, popper2, Object.assign({}, popperOptions, {
      placement,
      onFirstUpdate,
      modifiers
    }));
  }
  function destroyPopperInstance() {
    if (instance.popperInstance) {
      instance.popperInstance.destroy();
      instance.popperInstance = null;
    }
  }
  function mount() {
    var appendTo = instance.props.appendTo;
    var parentNode;
    var node = getCurrentTarget();
    if (instance.props.interactive && appendTo === TIPPY_DEFAULT_APPEND_TO || appendTo === "parent") {
      parentNode = node.parentNode;
    } else {
      parentNode = invokeWithArgsOrReturn(appendTo, [node]);
    }
    if (!parentNode.contains(popper2)) {
      parentNode.appendChild(popper2);
    }
    instance.state.isMounted = true;
    createPopperInstance();
    if (false) {
      warnWhen(instance.props.interactive && appendTo === defaultProps.appendTo && node.nextElementSibling !== popper2, ["Interactive tippy element may not be accessible via keyboard", "navigation because it is not directly after the reference element", "in the DOM source order.", "\n\n", "Using a wrapper <div> or <span> tag around the reference element", "solves this by creating a new parentNode context.", "\n\n", "Specifying `appendTo: document.body` silences this warning, but it", "assumes you are using a focus management solution to handle", "keyboard navigation.", "\n\n", "See: https://atomiks.github.io/tippyjs/v6/accessibility/#interactivity"].join(" "));
    }
  }
  function getNestedPopperTree() {
    return arrayFrom(popper2.querySelectorAll("[data-tippy-root]"));
  }
  function scheduleShow(event) {
    instance.clearDelayTimeouts();
    if (event) {
      invokeHook("onTrigger", [instance, event]);
    }
    addDocumentPress();
    var delay = getDelay(true);
    var _getNormalizedTouchSe = getNormalizedTouchSettings(), touchValue = _getNormalizedTouchSe[0], touchDelay = _getNormalizedTouchSe[1];
    if (currentInput.isTouch && touchValue === "hold" && touchDelay) {
      delay = touchDelay;
    }
    if (delay) {
      showTimeout = setTimeout(function() {
        instance.show();
      }, delay);
    } else {
      instance.show();
    }
  }
  function scheduleHide(event) {
    instance.clearDelayTimeouts();
    invokeHook("onUntrigger", [instance, event]);
    if (!instance.state.isVisible) {
      removeDocumentPress();
      return;
    }
    if (instance.props.trigger.indexOf("mouseenter") >= 0 && instance.props.trigger.indexOf("click") >= 0 && ["mouseleave", "mousemove"].indexOf(event.type) >= 0 && isVisibleFromClick) {
      return;
    }
    var delay = getDelay(false);
    if (delay) {
      hideTimeout = setTimeout(function() {
        if (instance.state.isVisible) {
          instance.hide();
        }
      }, delay);
    } else {
      scheduleHideAnimationFrame = requestAnimationFrame(function() {
        instance.hide();
      });
    }
  }
  function enable() {
    instance.state.isEnabled = true;
  }
  function disable() {
    instance.hide();
    instance.state.isEnabled = false;
  }
  function clearDelayTimeouts() {
    clearTimeout(showTimeout);
    clearTimeout(hideTimeout);
    cancelAnimationFrame(scheduleHideAnimationFrame);
  }
  function setProps(partialProps) {
    if (false) {
      warnWhen(instance.state.isDestroyed, createMemoryLeakWarning("setProps"));
    }
    if (instance.state.isDestroyed) {
      return;
    }
    invokeHook("onBeforeUpdate", [instance, partialProps]);
    removeListeners();
    var prevProps = instance.props;
    var nextProps = evaluateProps(reference2, Object.assign({}, prevProps, removeUndefinedProps(partialProps), {
      ignoreAttributes: true
    }));
    instance.props = nextProps;
    addListeners();
    if (prevProps.interactiveDebounce !== nextProps.interactiveDebounce) {
      cleanupInteractiveMouseListeners();
      debouncedOnMouseMove = debounce2(onMouseMove, nextProps.interactiveDebounce);
    }
    if (prevProps.triggerTarget && !nextProps.triggerTarget) {
      normalizeToArray(prevProps.triggerTarget).forEach(function(node) {
        node.removeAttribute("aria-expanded");
      });
    } else if (nextProps.triggerTarget) {
      reference2.removeAttribute("aria-expanded");
    }
    handleAriaExpandedAttribute();
    handleStyles();
    if (onUpdate) {
      onUpdate(prevProps, nextProps);
    }
    if (instance.popperInstance) {
      createPopperInstance();
      getNestedPopperTree().forEach(function(nestedPopper) {
        requestAnimationFrame(nestedPopper._tippy.popperInstance.forceUpdate);
      });
    }
    invokeHook("onAfterUpdate", [instance, partialProps]);
  }
  function setContent2(content) {
    instance.setProps({
      content
    });
  }
  function show() {
    if (false) {
      warnWhen(instance.state.isDestroyed, createMemoryLeakWarning("show"));
    }
    var isAlreadyVisible = instance.state.isVisible;
    var isDestroyed = instance.state.isDestroyed;
    var isDisabled = !instance.state.isEnabled;
    var isTouchAndTouchDisabled = currentInput.isTouch && !instance.props.touch;
    var duration = getValueAtIndexOrReturn(instance.props.duration, 0, defaultProps.duration);
    if (isAlreadyVisible || isDestroyed || isDisabled || isTouchAndTouchDisabled) {
      return;
    }
    if (getCurrentTarget().hasAttribute("disabled")) {
      return;
    }
    invokeHook("onShow", [instance], false);
    if (instance.props.onShow(instance) === false) {
      return;
    }
    instance.state.isVisible = true;
    if (getIsDefaultRenderFn()) {
      popper2.style.visibility = "visible";
    }
    handleStyles();
    addDocumentPress();
    if (!instance.state.isMounted) {
      popper2.style.transition = "none";
    }
    if (getIsDefaultRenderFn()) {
      var _getDefaultTemplateCh2 = getDefaultTemplateChildren(), box = _getDefaultTemplateCh2.box, content = _getDefaultTemplateCh2.content;
      setTransitionDuration([box, content], 0);
    }
    onFirstUpdate = function onFirstUpdate2() {
      var _instance$popperInsta2;
      if (!instance.state.isVisible || ignoreOnFirstUpdate) {
        return;
      }
      ignoreOnFirstUpdate = true;
      void popper2.offsetHeight;
      popper2.style.transition = instance.props.moveTransition;
      if (getIsDefaultRenderFn() && instance.props.animation) {
        var _getDefaultTemplateCh3 = getDefaultTemplateChildren(), _box = _getDefaultTemplateCh3.box, _content = _getDefaultTemplateCh3.content;
        setTransitionDuration([_box, _content], duration);
        setVisibilityState([_box, _content], "visible");
      }
      handleAriaContentAttribute();
      handleAriaExpandedAttribute();
      pushIfUnique(mountedInstances, instance);
      (_instance$popperInsta2 = instance.popperInstance) == null ? void 0 : _instance$popperInsta2.forceUpdate();
      invokeHook("onMount", [instance]);
      if (instance.props.animation && getIsDefaultRenderFn()) {
        onTransitionedIn(duration, function() {
          instance.state.isShown = true;
          invokeHook("onShown", [instance]);
        });
      }
    };
    mount();
  }
  function hide2() {
    if (false) {
      warnWhen(instance.state.isDestroyed, createMemoryLeakWarning("hide"));
    }
    var isAlreadyHidden = !instance.state.isVisible;
    var isDestroyed = instance.state.isDestroyed;
    var isDisabled = !instance.state.isEnabled;
    var duration = getValueAtIndexOrReturn(instance.props.duration, 1, defaultProps.duration);
    if (isAlreadyHidden || isDestroyed || isDisabled) {
      return;
    }
    invokeHook("onHide", [instance], false);
    if (instance.props.onHide(instance) === false) {
      return;
    }
    instance.state.isVisible = false;
    instance.state.isShown = false;
    ignoreOnFirstUpdate = false;
    isVisibleFromClick = false;
    if (getIsDefaultRenderFn()) {
      popper2.style.visibility = "hidden";
    }
    cleanupInteractiveMouseListeners();
    removeDocumentPress();
    handleStyles(true);
    if (getIsDefaultRenderFn()) {
      var _getDefaultTemplateCh4 = getDefaultTemplateChildren(), box = _getDefaultTemplateCh4.box, content = _getDefaultTemplateCh4.content;
      if (instance.props.animation) {
        setTransitionDuration([box, content], duration);
        setVisibilityState([box, content], "hidden");
      }
    }
    handleAriaContentAttribute();
    handleAriaExpandedAttribute();
    if (instance.props.animation) {
      if (getIsDefaultRenderFn()) {
        onTransitionedOut(duration, instance.unmount);
      }
    } else {
      instance.unmount();
    }
  }
  function hideWithInteractivity(event) {
    if (false) {
      warnWhen(instance.state.isDestroyed, createMemoryLeakWarning("hideWithInteractivity"));
    }
    getDocument().addEventListener("mousemove", debouncedOnMouseMove);
    pushIfUnique(mouseMoveListeners, debouncedOnMouseMove);
    debouncedOnMouseMove(event);
  }
  function unmount() {
    if (false) {
      warnWhen(instance.state.isDestroyed, createMemoryLeakWarning("unmount"));
    }
    if (instance.state.isVisible) {
      instance.hide();
    }
    if (!instance.state.isMounted) {
      return;
    }
    destroyPopperInstance();
    getNestedPopperTree().forEach(function(nestedPopper) {
      nestedPopper._tippy.unmount();
    });
    if (popper2.parentNode) {
      popper2.parentNode.removeChild(popper2);
    }
    mountedInstances = mountedInstances.filter(function(i) {
      return i !== instance;
    });
    instance.state.isMounted = false;
    invokeHook("onHidden", [instance]);
  }
  function destroy() {
    if (false) {
      warnWhen(instance.state.isDestroyed, createMemoryLeakWarning("destroy"));
    }
    if (instance.state.isDestroyed) {
      return;
    }
    instance.clearDelayTimeouts();
    instance.unmount();
    removeListeners();
    delete reference2._tippy;
    instance.state.isDestroyed = true;
    invokeHook("onDestroy", [instance]);
  }
}
function tippy(targets, optionalProps) {
  if (optionalProps === void 0) {
    optionalProps = {};
  }
  var plugins = defaultProps.plugins.concat(optionalProps.plugins || []);
  if (false) {
    validateTargets(targets);
    validateProps(optionalProps, plugins);
  }
  bindGlobalEventListeners();
  var passedProps = Object.assign({}, optionalProps, {
    plugins
  });
  var elements = getArrayOfElements(targets);
  if (false) {
    var isSingleContentElement = isElement2(passedProps.content);
    var isMoreThanOneReferenceElement = elements.length > 1;
    warnWhen(isSingleContentElement && isMoreThanOneReferenceElement, ["tippy() was passed an Element as the `content` prop, but more than", "one tippy instance was created by this invocation. This means the", "content element will only be appended to the last tippy instance.", "\n\n", "Instead, pass the .innerHTML of the element, or use a function that", "returns a cloned version of the element instead.", "\n\n", "1) content: element.innerHTML\n", "2) content: () => element.cloneNode(true)"].join(" "));
  }
  var instances = elements.reduce(function(acc, reference2) {
    var instance = reference2 && createTippy(reference2, passedProps);
    if (instance) {
      acc.push(instance);
    }
    return acc;
  }, []);
  return isElement2(targets) ? instances[0] : instances;
}
tippy.defaultProps = defaultProps;
tippy.setDefaultProps = setDefaultProps;
tippy.currentInput = currentInput;
var applyStylesModifier = Object.assign({}, applyStyles_default, {
  effect: function effect4(_ref) {
    var state = _ref.state;
    var initialStyles = {
      popper: {
        position: state.options.strategy,
        left: "0",
        top: "0",
        margin: "0"
      },
      arrow: {
        position: "absolute"
      },
      reference: {}
    };
    Object.assign(state.elements.popper.style, initialStyles.popper);
    state.styles = initialStyles;
    if (state.elements.arrow) {
      Object.assign(state.elements.arrow.style, initialStyles.arrow);
    }
  }
});
tippy.setDefaultProps({
  render
});
var tippy_esm_default = tippy;

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9nbG9iYWwuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mYWlscy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM3LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2Rlc2NyaXB0b3JzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZnVuY3Rpb24tYmluZC1uYXRpdmUuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mdW5jdGlvbi1jYWxsLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LXByb3BlcnR5LWlzLWVudW1lcmFibGUuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHktZGVzY3JpcHRvci5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM3LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM3LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2NsYXNzb2YtcmF3LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaW5kZXhlZC1vYmplY3QuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pcy1udWxsLW9yLXVuZGVmaW5lZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM3LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM3LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RvLWluZGV4ZWQtb2JqZWN0LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXMtY2FsbGFibGUuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pcy1vYmplY3QuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9nZXQtYnVpbHQtaW4uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3QtaXMtcHJvdG90eXBlLW9mLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZW5naW5lLXVzZXItYWdlbnQuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9lbmdpbmUtdjgtdmVyc2lvbi5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM3LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3N5bWJvbC1jb25zdHJ1Y3Rvci1kZXRlY3Rpb24uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy91c2Utc3ltYm9sLWFzLXVpZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM3LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLXN5bWJvbC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM3LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RyeS10by1zdHJpbmcuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hLWNhbGxhYmxlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZ2V0LW1ldGhvZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM3LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29yZGluYXJ5LXRvLXByaW1pdGl2ZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM3LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLXB1cmUuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9kZWZpbmUtZ2xvYmFsLXByb3BlcnR5LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2hhcmVkLXN0b3JlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2hhcmVkLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tb2JqZWN0LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM3LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3VpZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM3LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tcHJpbWl0aXZlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tcHJvcGVydHkta2V5LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZG9jdW1lbnQtY3JlYXRlLWVsZW1lbnQuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pZTgtZG9tLWRlZmluZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM3LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3IuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy92OC1wcm90b3R5cGUtZGVmaW5lLWJ1Zy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM3LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FuLW9iamVjdC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM3LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHkuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHkuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mdW5jdGlvbi1uYW1lLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaW5zcGVjdC1zb3VyY2UuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy93ZWFrLW1hcC1iYXNpYy1kZXRlY3Rpb24uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zaGFyZWQta2V5LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaGlkZGVuLWtleXMuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pbnRlcm5hbC1zdGF0ZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM3LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL21ha2UtYnVpbHQtaW4uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9kZWZpbmUtYnVpbHQtaW4uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9tYXRoLXRydW5jLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8taW50ZWdlci1vci1pbmZpbml0eS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM3LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RvLWFic29sdXRlLWluZGV4LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tbGVuZ3RoLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvbGVuZ3RoLW9mLWFycmF5LWxpa2UuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1pbmNsdWRlcy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM3LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1rZXlzLWludGVybmFsLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZW51bS1idWcta2V5cy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM3LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LW5hbWVzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktc3ltYm9scy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM3LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL293bi1rZXlzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY29weS1jb25zdHJ1Y3Rvci1wcm9wZXJ0aWVzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXMtZm9yY2VkLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZXhwb3J0LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2V0LWhlbHBlcnMuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hLXNldC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM3LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2l0ZXJhdGUtc2ltcGxlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2V0LWl0ZXJhdGUuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zZXQtY2xvbmUuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMtYWNjZXNzb3IuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zZXQtc2l6ZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM3LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2dldC1pdGVyYXRvci1kaXJlY3QuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9nZXQtc2V0LXJlY29yZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM3LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3NldC1kaWZmZXJlbmNlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2V0LW1ldGhvZC1hY2NlcHQtc2V0LWxpa2UuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuc2V0LmRpZmZlcmVuY2UudjIuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXNuZXh0LnNldC5kaWZmZXJlbmNlLnYyLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2V0LWludGVyc2VjdGlvbi5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM3LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5zZXQuaW50ZXJzZWN0aW9uLnYyLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzbmV4dC5zZXQuaW50ZXJzZWN0aW9uLnYyLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXRlcmF0b3ItY2xvc2UuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zZXQtaXMtZGlzam9pbnQtZnJvbS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM3LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5zZXQuaXMtZGlzam9pbnQtZnJvbS52Mi5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM3LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lc25leHQuc2V0LmlzLWRpc2pvaW50LWZyb20udjIuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zZXQtaXMtc3Vic2V0LW9mLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLnNldC5pcy1zdWJzZXQtb2YudjIuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXNuZXh0LnNldC5pcy1zdWJzZXQtb2YudjIuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zZXQtaXMtc3VwZXJzZXQtb2YuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuc2V0LmlzLXN1cGVyc2V0LW9mLnYyLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzbmV4dC5zZXQuaXMtc3VwZXJzZXQtb2YudjIuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zZXQtc3ltbWV0cmljLWRpZmZlcmVuY2UuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuc2V0LnN5bW1ldHJpYy1kaWZmZXJlbmNlLnYyLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzbmV4dC5zZXQuc3ltbWV0cmljLWRpZmZlcmVuY2UudjIuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zZXQtdW5pb24uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuc2V0LnVuaW9uLnYyLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzbmV4dC5zZXQudW5pb24udjIuanMiLCAic3JjL1RpcHB5L1RpcHB5LnRzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9AcG9wcGVyanMrY29yZUAyLjExLjgvbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9lbnVtcy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vQHBvcHBlcmpzK2NvcmVAMi4xMS44L25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2dldE5vZGVOYW1lLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9AcG9wcGVyanMrY29yZUAyLjExLjgvbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9kb20tdXRpbHMvZ2V0V2luZG93LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9AcG9wcGVyanMrY29yZUAyLjExLjgvbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9kb20tdXRpbHMvaW5zdGFuY2VPZi5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vQHBvcHBlcmpzK2NvcmVAMi4xMS44L25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvbW9kaWZpZXJzL2FwcGx5U3R5bGVzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9AcG9wcGVyanMrY29yZUAyLjExLjgvbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi91dGlscy9nZXRCYXNlUGxhY2VtZW50LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9AcG9wcGVyanMrY29yZUAyLjExLjgvbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi91dGlscy9tYXRoLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9AcG9wcGVyanMrY29yZUAyLjExLjgvbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi91dGlscy91c2VyQWdlbnQuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL0Bwb3BwZXJqcytjb3JlQDIuMTEuOC9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9pc0xheW91dFZpZXdwb3J0LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9AcG9wcGVyanMrY29yZUAyLjExLjgvbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9kb20tdXRpbHMvZ2V0Qm91bmRpbmdDbGllbnRSZWN0LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9AcG9wcGVyanMrY29yZUAyLjExLjgvbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9kb20tdXRpbHMvZ2V0TGF5b3V0UmVjdC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vQHBvcHBlcmpzK2NvcmVAMi4xMS44L25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2NvbnRhaW5zLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9AcG9wcGVyanMrY29yZUAyLjExLjgvbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9kb20tdXRpbHMvZ2V0Q29tcHV0ZWRTdHlsZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vQHBvcHBlcmpzK2NvcmVAMi4xMS44L25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2lzVGFibGVFbGVtZW50LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9AcG9wcGVyanMrY29yZUAyLjExLjgvbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9kb20tdXRpbHMvZ2V0RG9jdW1lbnRFbGVtZW50LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9AcG9wcGVyanMrY29yZUAyLjExLjgvbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9kb20tdXRpbHMvZ2V0UGFyZW50Tm9kZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vQHBvcHBlcmpzK2NvcmVAMi4xMS44L25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2dldE9mZnNldFBhcmVudC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vQHBvcHBlcmpzK2NvcmVAMi4xMS44L25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvdXRpbHMvZ2V0TWFpbkF4aXNGcm9tUGxhY2VtZW50LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9AcG9wcGVyanMrY29yZUAyLjExLjgvbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi91dGlscy93aXRoaW4uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL0Bwb3BwZXJqcytjb3JlQDIuMTEuOC9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL2dldEZyZXNoU2lkZU9iamVjdC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vQHBvcHBlcmpzK2NvcmVAMi4xMS44L25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvdXRpbHMvbWVyZ2VQYWRkaW5nT2JqZWN0LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9AcG9wcGVyanMrY29yZUAyLjExLjgvbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi91dGlscy9leHBhbmRUb0hhc2hNYXAuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL0Bwb3BwZXJqcytjb3JlQDIuMTEuOC9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL21vZGlmaWVycy9hcnJvdy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vQHBvcHBlcmpzK2NvcmVAMi4xMS44L25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvdXRpbHMvZ2V0VmFyaWF0aW9uLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9AcG9wcGVyanMrY29yZUAyLjExLjgvbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9tb2RpZmllcnMvY29tcHV0ZVN0eWxlcy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vQHBvcHBlcmpzK2NvcmVAMi4xMS44L25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvbW9kaWZpZXJzL2V2ZW50TGlzdGVuZXJzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9AcG9wcGVyanMrY29yZUAyLjExLjgvbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi91dGlscy9nZXRPcHBvc2l0ZVBsYWNlbWVudC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vQHBvcHBlcmpzK2NvcmVAMi4xMS44L25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvdXRpbHMvZ2V0T3Bwb3NpdGVWYXJpYXRpb25QbGFjZW1lbnQuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL0Bwb3BwZXJqcytjb3JlQDIuMTEuOC9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9nZXRXaW5kb3dTY3JvbGwuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL0Bwb3BwZXJqcytjb3JlQDIuMTEuOC9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9nZXRXaW5kb3dTY3JvbGxCYXJYLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9AcG9wcGVyanMrY29yZUAyLjExLjgvbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9kb20tdXRpbHMvZ2V0Vmlld3BvcnRSZWN0LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9AcG9wcGVyanMrY29yZUAyLjExLjgvbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9kb20tdXRpbHMvZ2V0RG9jdW1lbnRSZWN0LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9AcG9wcGVyanMrY29yZUAyLjExLjgvbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9kb20tdXRpbHMvaXNTY3JvbGxQYXJlbnQuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL0Bwb3BwZXJqcytjb3JlQDIuMTEuOC9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9nZXRTY3JvbGxQYXJlbnQuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL0Bwb3BwZXJqcytjb3JlQDIuMTEuOC9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9saXN0U2Nyb2xsUGFyZW50cy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vQHBvcHBlcmpzK2NvcmVAMi4xMS44L25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvdXRpbHMvcmVjdFRvQ2xpZW50UmVjdC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vQHBvcHBlcmpzK2NvcmVAMi4xMS44L25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2dldENsaXBwaW5nUmVjdC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vQHBvcHBlcmpzK2NvcmVAMi4xMS44L25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvdXRpbHMvY29tcHV0ZU9mZnNldHMuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL0Bwb3BwZXJqcytjb3JlQDIuMTEuOC9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL2RldGVjdE92ZXJmbG93LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9AcG9wcGVyanMrY29yZUAyLjExLjgvbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi91dGlscy9jb21wdXRlQXV0b1BsYWNlbWVudC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vQHBvcHBlcmpzK2NvcmVAMi4xMS44L25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvbW9kaWZpZXJzL2ZsaXAuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL0Bwb3BwZXJqcytjb3JlQDIuMTEuOC9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL21vZGlmaWVycy9oaWRlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9AcG9wcGVyanMrY29yZUAyLjExLjgvbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9tb2RpZmllcnMvb2Zmc2V0LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9AcG9wcGVyanMrY29yZUAyLjExLjgvbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9tb2RpZmllcnMvcG9wcGVyT2Zmc2V0cy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vQHBvcHBlcmpzK2NvcmVAMi4xMS44L25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvdXRpbHMvZ2V0QWx0QXhpcy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vQHBvcHBlcmpzK2NvcmVAMi4xMS44L25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvbW9kaWZpZXJzL3ByZXZlbnRPdmVyZmxvdy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vQHBvcHBlcmpzK2NvcmVAMi4xMS44L25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2dldEhUTUxFbGVtZW50U2Nyb2xsLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9AcG9wcGVyanMrY29yZUAyLjExLjgvbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9kb20tdXRpbHMvZ2V0Tm9kZVNjcm9sbC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vQHBvcHBlcmpzK2NvcmVAMi4xMS44L25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2dldENvbXBvc2l0ZVJlY3QuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL0Bwb3BwZXJqcytjb3JlQDIuMTEuOC9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL29yZGVyTW9kaWZpZXJzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9AcG9wcGVyanMrY29yZUAyLjExLjgvbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi91dGlscy9kZWJvdW5jZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vQHBvcHBlcmpzK2NvcmVAMi4xMS44L25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvdXRpbHMvbWVyZ2VCeU5hbWUuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL0Bwb3BwZXJqcytjb3JlQDIuMTEuOC9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2NyZWF0ZVBvcHBlci5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vQHBvcHBlcmpzK2NvcmVAMi4xMS44L25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvcG9wcGVyLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS90aXBweS5qc0A2LjMuNy9ub2RlX21vZHVsZXMvdGlwcHkuanMvc3JjL2NvbnN0YW50cy50cyIsICJub2RlX21vZHVsZXMvLnBucG0vdGlwcHkuanNANi4zLjcvbm9kZV9tb2R1bGVzL3RpcHB5LmpzL3NyYy91dGlscy50cyIsICJub2RlX21vZHVsZXMvLnBucG0vdGlwcHkuanNANi4zLjcvbm9kZV9tb2R1bGVzL3RpcHB5LmpzL3NyYy9kb20tdXRpbHMudHMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL3RpcHB5LmpzQDYuMy43L25vZGVfbW9kdWxlcy90aXBweS5qcy9zcmMvYmluZEdsb2JhbEV2ZW50TGlzdGVuZXJzLnRzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS90aXBweS5qc0A2LjMuNy9ub2RlX21vZHVsZXMvdGlwcHkuanMvc3JjL2Jyb3dzZXIudHMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL3RpcHB5LmpzQDYuMy43L25vZGVfbW9kdWxlcy90aXBweS5qcy9zcmMvdmFsaWRhdGlvbi50cyIsICJub2RlX21vZHVsZXMvLnBucG0vdGlwcHkuanNANi4zLjcvbm9kZV9tb2R1bGVzL3RpcHB5LmpzL3NyYy9wcm9wcy50cyIsICJub2RlX21vZHVsZXMvLnBucG0vdGlwcHkuanNANi4zLjcvbm9kZV9tb2R1bGVzL3RpcHB5LmpzL3NyYy90ZW1wbGF0ZS50cyIsICJub2RlX21vZHVsZXMvLnBucG0vdGlwcHkuanNANi4zLjcvbm9kZV9tb2R1bGVzL3RpcHB5LmpzL3NyYy9jcmVhdGVUaXBweS50cyIsICJub2RlX21vZHVsZXMvLnBucG0vdGlwcHkuanNANi4zLjcvbm9kZV9tb2R1bGVzL3RpcHB5LmpzL3NyYy9pbmRleC50cyIsICJub2RlX21vZHVsZXMvLnBucG0vdGlwcHkuanNANi4zLjcvbm9kZV9tb2R1bGVzL3RpcHB5LmpzL3NyYy9hZGRvbnMvY3JlYXRlU2luZ2xldG9uLnRzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS90aXBweS5qc0A2LjMuNy9ub2RlX21vZHVsZXMvdGlwcHkuanMvc3JjL2FkZG9ucy9kZWxlZ2F0ZS50cyIsICJub2RlX21vZHVsZXMvLnBucG0vdGlwcHkuanNANi4zLjcvbm9kZV9tb2R1bGVzL3RpcHB5LmpzL3NyYy9wbHVnaW5zL2FuaW1hdGVGaWxsLnRzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS90aXBweS5qc0A2LjMuNy9ub2RlX21vZHVsZXMvdGlwcHkuanMvc3JjL3BsdWdpbnMvZm9sbG93Q3Vyc29yLnRzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS90aXBweS5qc0A2LjMuNy9ub2RlX21vZHVsZXMvdGlwcHkuanMvc3JjL3BsdWdpbnMvaW5saW5lUG9zaXRpb25pbmcudHMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL3RpcHB5LmpzQDYuMy43L25vZGVfbW9kdWxlcy90aXBweS5qcy9zcmMvcGx1Z2lucy9zdGlja3kudHMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL3RpcHB5LmpzQDYuMy43L25vZGVfbW9kdWxlcy90aXBweS5qcy9idWlsZC9iYXNlLmpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyIndXNlIHN0cmljdCc7XG52YXIgY2hlY2sgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGl0ICYmIGl0Lk1hdGggPT09IE1hdGggJiYgaXQ7XG59O1xuXG4vLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvODYjaXNzdWVjb21tZW50LTExNTc1OTAyOFxubW9kdWxlLmV4cG9ydHMgPVxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tZ2xvYmFsLXRoaXMgLS0gc2FmZVxuICBjaGVjayh0eXBlb2YgZ2xvYmFsVGhpcyA9PSAnb2JqZWN0JyAmJiBnbG9iYWxUaGlzKSB8fFxuICBjaGVjayh0eXBlb2Ygd2luZG93ID09ICdvYmplY3QnICYmIHdpbmRvdykgfHxcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlc3RyaWN0ZWQtZ2xvYmFscyAtLSBzYWZlXG4gIGNoZWNrKHR5cGVvZiBzZWxmID09ICdvYmplY3QnICYmIHNlbGYpIHx8XG4gIGNoZWNrKHR5cGVvZiBnbG9iYWwgPT0gJ29iamVjdCcgJiYgZ2xvYmFsKSB8fFxuICBjaGVjayh0eXBlb2YgdGhpcyA9PSAnb2JqZWN0JyAmJiB0aGlzKSB8fFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmV3LWZ1bmMgLS0gZmFsbGJhY2tcbiAgKGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0pKCkgfHwgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcbiIsICIndXNlIHN0cmljdCc7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChleGVjKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuICEhZXhlYygpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xuXG4vLyBEZXRlY3QgSUU4J3MgaW5jb21wbGV0ZSBkZWZpbmVQcm9wZXJ0eSBpbXBsZW1lbnRhdGlvblxubW9kdWxlLmV4cG9ydHMgPSAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWRlZmluZXByb3BlcnR5IC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nXG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sIDEsIHsgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9IH0pWzFdICE9PSA3O1xufSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLWZ1bmN0aW9uLXByb3RvdHlwZS1iaW5kIC0tIHNhZmVcbiAgdmFyIHRlc3QgPSAoZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9KS5iaW5kKCk7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnMgLS0gc2FmZVxuICByZXR1cm4gdHlwZW9mIHRlc3QgIT0gJ2Z1bmN0aW9uJyB8fCB0ZXN0Lmhhc093blByb3BlcnR5KCdwcm90b3R5cGUnKTtcbn0pO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBOQVRJVkVfQklORCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1iaW5kLW5hdGl2ZScpO1xuXG52YXIgY2FsbCA9IEZ1bmN0aW9uLnByb3RvdHlwZS5jYWxsO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE5BVElWRV9CSU5EID8gY2FsbC5iaW5kKGNhbGwpIDogZnVuY3Rpb24gKCkge1xuICByZXR1cm4gY2FsbC5hcHBseShjYWxsLCBhcmd1bWVudHMpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgJHByb3BlcnR5SXNFbnVtZXJhYmxlID0ge30ucHJvcGVydHlJc0VudW1lcmFibGU7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5ZGVzY3JpcHRvciAtLSBzYWZlXG52YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuLy8gTmFzaG9ybiB+IEpESzggYnVnXG52YXIgTkFTSE9STl9CVUcgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgJiYgISRwcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHsgMTogMiB9LCAxKTtcblxuLy8gYE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGVgIG1ldGhvZCBpbXBsZW1lbnRhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vYmplY3QucHJvdG90eXBlLnByb3BlcnR5aXNlbnVtZXJhYmxlXG5leHBvcnRzLmYgPSBOQVNIT1JOX0JVRyA/IGZ1bmN0aW9uIHByb3BlcnR5SXNFbnVtZXJhYmxlKFYpIHtcbiAgdmFyIGRlc2NyaXB0b3IgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGhpcywgVik7XG4gIHJldHVybiAhIWRlc2NyaXB0b3IgJiYgZGVzY3JpcHRvci5lbnVtZXJhYmxlO1xufSA6ICRwcm9wZXJ0eUlzRW51bWVyYWJsZTtcbiIsICIndXNlIHN0cmljdCc7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChiaXRtYXAsIHZhbHVlKSB7XG4gIHJldHVybiB7XG4gICAgZW51bWVyYWJsZTogIShiaXRtYXAgJiAxKSxcbiAgICBjb25maWd1cmFibGU6ICEoYml0bWFwICYgMiksXG4gICAgd3JpdGFibGU6ICEoYml0bWFwICYgNCksXG4gICAgdmFsdWU6IHZhbHVlXG4gIH07XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBOQVRJVkVfQklORCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1iaW5kLW5hdGl2ZScpO1xuXG52YXIgRnVuY3Rpb25Qcm90b3R5cGUgPSBGdW5jdGlvbi5wcm90b3R5cGU7XG52YXIgY2FsbCA9IEZ1bmN0aW9uUHJvdG90eXBlLmNhbGw7XG52YXIgdW5jdXJyeVRoaXNXaXRoQmluZCA9IE5BVElWRV9CSU5EICYmIEZ1bmN0aW9uUHJvdG90eXBlLmJpbmQuYmluZChjYWxsLCBjYWxsKTtcblxubW9kdWxlLmV4cG9ydHMgPSBOQVRJVkVfQklORCA/IHVuY3VycnlUaGlzV2l0aEJpbmQgOiBmdW5jdGlvbiAoZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gY2FsbC5hcHBseShmbiwgYXJndW1lbnRzKTtcbiAgfTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xuXG52YXIgdG9TdHJpbmcgPSB1bmN1cnJ5VGhpcyh7fS50b1N0cmluZyk7XG52YXIgc3RyaW5nU2xpY2UgPSB1bmN1cnJ5VGhpcygnJy5zbGljZSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBzdHJpbmdTbGljZSh0b1N0cmluZyhpdCksIDgsIC0xKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jbGFzc29mLXJhdycpO1xuXG52YXIgJE9iamVjdCA9IE9iamVjdDtcbnZhciBzcGxpdCA9IHVuY3VycnlUaGlzKCcnLnNwbGl0KTtcblxuLy8gZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBhbmQgbm9uLWVudW1lcmFibGUgb2xkIFY4IHN0cmluZ3Ncbm1vZHVsZS5leHBvcnRzID0gZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyB0aHJvd3MgYW4gZXJyb3IgaW4gcmhpbm8sIHNlZSBodHRwczovL2dpdGh1Yi5jb20vbW96aWxsYS9yaGluby9pc3N1ZXMvMzQ2XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnMgLS0gc2FmZVxuICByZXR1cm4gISRPYmplY3QoJ3onKS5wcm9wZXJ0eUlzRW51bWVyYWJsZSgwKTtcbn0pID8gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBjbGFzc29mKGl0KSA9PT0gJ1N0cmluZycgPyBzcGxpdChpdCwgJycpIDogJE9iamVjdChpdCk7XG59IDogJE9iamVjdDtcbiIsICIndXNlIHN0cmljdCc7XG4vLyB3ZSBjYW4ndCB1c2UganVzdCBgaXQgPT0gbnVsbGAgc2luY2Ugb2YgYGRvY3VtZW50LmFsbGAgc3BlY2lhbCBjYXNlXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLUlzSFRNTEREQS1pbnRlcm5hbC1zbG90LWFlY1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGl0ID09PSBudWxsIHx8IGl0ID09PSB1bmRlZmluZWQ7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBpc051bGxPclVuZGVmaW5lZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1udWxsLW9yLXVuZGVmaW5lZCcpO1xuXG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcblxuLy8gYFJlcXVpcmVPYmplY3RDb2VyY2libGVgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1yZXF1aXJlb2JqZWN0Y29lcmNpYmxlXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoaXNOdWxsT3JVbmRlZmluZWQoaXQpKSB0aHJvdyBuZXcgJFR5cGVFcnJvcihcIkNhbid0IGNhbGwgbWV0aG9kIG9uIFwiICsgaXQpO1xuICByZXR1cm4gaXQ7XG59O1xuIiwgIid1c2Ugc3RyaWN0Jztcbi8vIHRvT2JqZWN0IHdpdGggZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBzdHJpbmdzXG52YXIgSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbmRleGVkLW9iamVjdCcpO1xudmFyIHJlcXVpcmVPYmplY3RDb2VyY2libGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBJbmRleGVkT2JqZWN0KHJlcXVpcmVPYmplY3RDb2VyY2libGUoaXQpKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1Jc0hUTUxEREEtaW50ZXJuYWwtc2xvdFxudmFyIGRvY3VtZW50QWxsID0gdHlwZW9mIGRvY3VtZW50ID09ICdvYmplY3QnICYmIGRvY3VtZW50LmFsbDtcblxuLy8gYElzQ2FsbGFibGVgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1pc2NhbGxhYmxlXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgdW5pY29ybi9uby10eXBlb2YtdW5kZWZpbmVkIC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nXG5tb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiBkb2N1bWVudEFsbCA9PSAndW5kZWZpbmVkJyAmJiBkb2N1bWVudEFsbCAhPT0gdW5kZWZpbmVkID8gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHJldHVybiB0eXBlb2YgYXJndW1lbnQgPT0gJ2Z1bmN0aW9uJyB8fCBhcmd1bWVudCA9PT0gZG9jdW1lbnRBbGw7XG59IDogZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHJldHVybiB0eXBlb2YgYXJndW1lbnQgPT0gJ2Z1bmN0aW9uJztcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PSAnb2JqZWN0JyA/IGl0ICE9PSBudWxsIDogaXNDYWxsYWJsZShpdCk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xuXG52YXIgYUZ1bmN0aW9uID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHJldHVybiBpc0NhbGxhYmxlKGFyZ3VtZW50KSA/IGFyZ3VtZW50IDogdW5kZWZpbmVkO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobmFtZXNwYWNlLCBtZXRob2QpIHtcbiAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPCAyID8gYUZ1bmN0aW9uKGdsb2JhbFtuYW1lc3BhY2VdKSA6IGdsb2JhbFtuYW1lc3BhY2VdICYmIGdsb2JhbFtuYW1lc3BhY2VdW21ldGhvZF07XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSB1bmN1cnJ5VGhpcyh7fS5pc1Byb3RvdHlwZU9mKTtcbiIsICIndXNlIHN0cmljdCc7XG5tb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiBuYXZpZ2F0b3IgIT0gJ3VuZGVmaW5lZCcgJiYgU3RyaW5nKG5hdmlnYXRvci51c2VyQWdlbnQpIHx8ICcnO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgdXNlckFnZW50ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2VuZ2luZS11c2VyLWFnZW50Jyk7XG5cbnZhciBwcm9jZXNzID0gZ2xvYmFsLnByb2Nlc3M7XG52YXIgRGVubyA9IGdsb2JhbC5EZW5vO1xudmFyIHZlcnNpb25zID0gcHJvY2VzcyAmJiBwcm9jZXNzLnZlcnNpb25zIHx8IERlbm8gJiYgRGVuby52ZXJzaW9uO1xudmFyIHY4ID0gdmVyc2lvbnMgJiYgdmVyc2lvbnMudjg7XG52YXIgbWF0Y2gsIHZlcnNpb247XG5cbmlmICh2OCkge1xuICBtYXRjaCA9IHY4LnNwbGl0KCcuJyk7XG4gIC8vIGluIG9sZCBDaHJvbWUsIHZlcnNpb25zIG9mIFY4IGlzbid0IFY4ID0gQ2hyb21lIC8gMTBcbiAgLy8gYnV0IHRoZWlyIGNvcnJlY3QgdmVyc2lvbnMgYXJlIG5vdCBpbnRlcmVzdGluZyBmb3IgdXNcbiAgdmVyc2lvbiA9IG1hdGNoWzBdID4gMCAmJiBtYXRjaFswXSA8IDQgPyAxIDogKyhtYXRjaFswXSArIG1hdGNoWzFdKTtcbn1cblxuLy8gQnJvd3NlckZTIE5vZGVKUyBgcHJvY2Vzc2AgcG9seWZpbGwgaW5jb3JyZWN0bHkgc2V0IGAudjhgIHRvIGAwLjBgXG4vLyBzbyBjaGVjayBgdXNlckFnZW50YCBldmVuIGlmIGAudjhgIGV4aXN0cywgYnV0IDBcbmlmICghdmVyc2lvbiAmJiB1c2VyQWdlbnQpIHtcbiAgbWF0Y2ggPSB1c2VyQWdlbnQubWF0Y2goL0VkZ2VcXC8oXFxkKykvKTtcbiAgaWYgKCFtYXRjaCB8fCBtYXRjaFsxXSA+PSA3NCkge1xuICAgIG1hdGNoID0gdXNlckFnZW50Lm1hdGNoKC9DaHJvbWVcXC8oXFxkKykvKTtcbiAgICBpZiAobWF0Y2gpIHZlcnNpb24gPSArbWF0Y2hbMV07XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSB2ZXJzaW9uO1xuIiwgIid1c2Ugc3RyaWN0Jztcbi8qIGVzbGludC1kaXNhYmxlIGVzL25vLXN5bWJvbCAtLSByZXF1aXJlZCBmb3IgdGVzdGluZyAqL1xudmFyIFY4X1ZFUlNJT04gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW5naW5lLXY4LXZlcnNpb24nKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcblxudmFyICRTdHJpbmcgPSBnbG9iYWwuU3RyaW5nO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5c3ltYm9scyAtLSByZXF1aXJlZCBmb3IgdGVzdGluZ1xubW9kdWxlLmV4cG9ydHMgPSAhIU9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgJiYgIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgdmFyIHN5bWJvbCA9IFN5bWJvbCgnc3ltYm9sIGRldGVjdGlvbicpO1xuICAvLyBDaHJvbWUgMzggU3ltYm9sIGhhcyBpbmNvcnJlY3QgdG9TdHJpbmcgY29udmVyc2lvblxuICAvLyBgZ2V0LW93bi1wcm9wZXJ0eS1zeW1ib2xzYCBwb2x5ZmlsbCBzeW1ib2xzIGNvbnZlcnRlZCB0byBvYmplY3QgYXJlIG5vdCBTeW1ib2wgaW5zdGFuY2VzXG4gIC8vIG5iOiBEbyBub3QgY2FsbCBgU3RyaW5nYCBkaXJlY3RseSB0byBhdm9pZCB0aGlzIGJlaW5nIG9wdGltaXplZCBvdXQgdG8gYHN5bWJvbCsnJ2Agd2hpY2ggd2lsbCxcbiAgLy8gb2YgY291cnNlLCBmYWlsLlxuICByZXR1cm4gISRTdHJpbmcoc3ltYm9sKSB8fCAhKE9iamVjdChzeW1ib2wpIGluc3RhbmNlb2YgU3ltYm9sKSB8fFxuICAgIC8vIENocm9tZSAzOC00MCBzeW1ib2xzIGFyZSBub3QgaW5oZXJpdGVkIGZyb20gRE9NIGNvbGxlY3Rpb25zIHByb3RvdHlwZXMgdG8gaW5zdGFuY2VzXG4gICAgIVN5bWJvbC5zaGFtICYmIFY4X1ZFUlNJT04gJiYgVjhfVkVSU0lPTiA8IDQxO1xufSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xuLyogZXNsaW50LWRpc2FibGUgZXMvbm8tc3ltYm9sIC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nICovXG52YXIgTkFUSVZFX1NZTUJPTCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zeW1ib2wtY29uc3RydWN0b3ItZGV0ZWN0aW9uJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gTkFUSVZFX1NZTUJPTFxuICAmJiAhU3ltYm9sLnNoYW1cbiAgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PSAnc3ltYm9sJztcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2V0QnVpbHRJbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtYnVpbHQtaW4nKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgaXNQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtaXMtcHJvdG90eXBlLW9mJyk7XG52YXIgVVNFX1NZTUJPTF9BU19VSUQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdXNlLXN5bWJvbC1hcy11aWQnKTtcblxudmFyICRPYmplY3QgPSBPYmplY3Q7XG5cbm1vZHVsZS5leHBvcnRzID0gVVNFX1NZTUJPTF9BU19VSUQgPyBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PSAnc3ltYm9sJztcbn0gOiBmdW5jdGlvbiAoaXQpIHtcbiAgdmFyICRTeW1ib2wgPSBnZXRCdWlsdEluKCdTeW1ib2wnKTtcbiAgcmV0dXJuIGlzQ2FsbGFibGUoJFN5bWJvbCkgJiYgaXNQcm90b3R5cGVPZigkU3ltYm9sLnByb3RvdHlwZSwgJE9iamVjdChpdCkpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgJFN0cmluZyA9IFN0cmluZztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gJFN0cmluZyhhcmd1bWVudCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuICdPYmplY3QnO1xuICB9XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgdHJ5VG9TdHJpbmcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdHJ5LXRvLXN0cmluZycpO1xuXG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcblxuLy8gYEFzc2VydDogSXNDYWxsYWJsZShhcmd1bWVudCkgaXMgdHJ1ZWBcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIGlmIChpc0NhbGxhYmxlKGFyZ3VtZW50KSkgcmV0dXJuIGFyZ3VtZW50O1xuICB0aHJvdyBuZXcgJFR5cGVFcnJvcih0cnlUb1N0cmluZyhhcmd1bWVudCkgKyAnIGlzIG5vdCBhIGZ1bmN0aW9uJyk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBhQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYS1jYWxsYWJsZScpO1xudmFyIGlzTnVsbE9yVW5kZWZpbmVkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW51bGwtb3ItdW5kZWZpbmVkJyk7XG5cbi8vIGBHZXRNZXRob2RgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1nZXRtZXRob2Rcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKFYsIFApIHtcbiAgdmFyIGZ1bmMgPSBWW1BdO1xuICByZXR1cm4gaXNOdWxsT3JVbmRlZmluZWQoZnVuYykgPyB1bmRlZmluZWQgOiBhQ2FsbGFibGUoZnVuYyk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBjYWxsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWNhbGwnKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG5cbnZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xuXG4vLyBgT3JkaW5hcnlUb1ByaW1pdGl2ZWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9yZGluYXJ5dG9wcmltaXRpdmVcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGlucHV0LCBwcmVmKSB7XG4gIHZhciBmbiwgdmFsO1xuICBpZiAocHJlZiA9PT0gJ3N0cmluZycgJiYgaXNDYWxsYWJsZShmbiA9IGlucHV0LnRvU3RyaW5nKSAmJiAhaXNPYmplY3QodmFsID0gY2FsbChmbiwgaW5wdXQpKSkgcmV0dXJuIHZhbDtcbiAgaWYgKGlzQ2FsbGFibGUoZm4gPSBpbnB1dC52YWx1ZU9mKSAmJiAhaXNPYmplY3QodmFsID0gY2FsbChmbiwgaW5wdXQpKSkgcmV0dXJuIHZhbDtcbiAgaWYgKHByZWYgIT09ICdzdHJpbmcnICYmIGlzQ2FsbGFibGUoZm4gPSBpbnB1dC50b1N0cmluZykgJiYgIWlzT2JqZWN0KHZhbCA9IGNhbGwoZm4sIGlucHV0KSkpIHJldHVybiB2YWw7XG4gIHRocm93IG5ldyAkVHlwZUVycm9yKFwiQ2FuJ3QgY29udmVydCBvYmplY3QgdG8gcHJpbWl0aXZlIHZhbHVlXCIpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG5tb2R1bGUuZXhwb3J0cyA9IGZhbHNlO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZGVmaW5lcHJvcGVydHkgLS0gc2FmZVxudmFyIGRlZmluZVByb3BlcnR5ID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gIHRyeSB7XG4gICAgZGVmaW5lUHJvcGVydHkoZ2xvYmFsLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGdsb2JhbFtrZXldID0gdmFsdWU7XG4gIH0gcmV0dXJuIHZhbHVlO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgSVNfUFVSRSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1wdXJlJyk7XG52YXIgZ2xvYmFsVGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBkZWZpbmVHbG9iYWxQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZWZpbmUtZ2xvYmFsLXByb3BlcnR5Jyk7XG5cbnZhciBTSEFSRUQgPSAnX19jb3JlLWpzX3NoYXJlZF9fJztcbnZhciBzdG9yZSA9IG1vZHVsZS5leHBvcnRzID0gZ2xvYmFsVGhpc1tTSEFSRURdIHx8IGRlZmluZUdsb2JhbFByb3BlcnR5KFNIQVJFRCwge30pO1xuXG4oc3RvcmUudmVyc2lvbnMgfHwgKHN0b3JlLnZlcnNpb25zID0gW10pKS5wdXNoKHtcbiAgdmVyc2lvbjogJzMuMzcuMScsXG4gIG1vZGU6IElTX1BVUkUgPyAncHVyZScgOiAnZ2xvYmFsJyxcbiAgY29weXJpZ2h0OiAnwqkgMjAxNC0yMDI0IERlbmlzIFB1c2hrYXJldiAoemxvaXJvY2sucnUpJyxcbiAgbGljZW5zZTogJ2h0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2Jsb2IvdjMuMzcuMS9MSUNFTlNFJyxcbiAgc291cmNlOiAnaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMnXG59KTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgc3RvcmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkLXN0b3JlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgcmV0dXJuIHN0b3JlW2tleV0gfHwgKHN0b3JlW2tleV0gPSB2YWx1ZSB8fCB7fSk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciByZXF1aXJlT2JqZWN0Q29lcmNpYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZScpO1xuXG52YXIgJE9iamVjdCA9IE9iamVjdDtcblxuLy8gYFRvT2JqZWN0YCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtdG9vYmplY3Rcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHJldHVybiAkT2JqZWN0KHJlcXVpcmVPYmplY3RDb2VyY2libGUoYXJndW1lbnQpKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLW9iamVjdCcpO1xuXG52YXIgaGFzT3duUHJvcGVydHkgPSB1bmN1cnJ5VGhpcyh7fS5oYXNPd25Qcm9wZXJ0eSk7XG5cbi8vIGBIYXNPd25Qcm9wZXJ0eWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWhhc293bnByb3BlcnR5XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWhhc293biAtLSBzYWZlXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5oYXNPd24gfHwgZnVuY3Rpb24gaGFzT3duKGl0LCBrZXkpIHtcbiAgcmV0dXJuIGhhc093blByb3BlcnR5KHRvT2JqZWN0KGl0KSwga2V5KTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xuXG52YXIgaWQgPSAwO1xudmFyIHBvc3RmaXggPSBNYXRoLnJhbmRvbSgpO1xudmFyIHRvU3RyaW5nID0gdW5jdXJyeVRoaXMoMS4wLnRvU3RyaW5nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHJldHVybiAnU3ltYm9sKCcgKyAoa2V5ID09PSB1bmRlZmluZWQgPyAnJyA6IGtleSkgKyAnKV8nICsgdG9TdHJpbmcoKytpZCArIHBvc3RmaXgsIDM2KTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBzaGFyZWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkJyk7XG52YXIgaGFzT3duID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcy1vd24tcHJvcGVydHknKTtcbnZhciB1aWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdWlkJyk7XG52YXIgTkFUSVZFX1NZTUJPTCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zeW1ib2wtY29uc3RydWN0b3ItZGV0ZWN0aW9uJyk7XG52YXIgVVNFX1NZTUJPTF9BU19VSUQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdXNlLXN5bWJvbC1hcy11aWQnKTtcblxudmFyIFN5bWJvbCA9IGdsb2JhbC5TeW1ib2w7XG52YXIgV2VsbEtub3duU3ltYm9sc1N0b3JlID0gc2hhcmVkKCd3a3MnKTtcbnZhciBjcmVhdGVXZWxsS25vd25TeW1ib2wgPSBVU0VfU1lNQk9MX0FTX1VJRCA/IFN5bWJvbFsnZm9yJ10gfHwgU3ltYm9sIDogU3ltYm9sICYmIFN5bWJvbC53aXRob3V0U2V0dGVyIHx8IHVpZDtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobmFtZSkge1xuICBpZiAoIWhhc093bihXZWxsS25vd25TeW1ib2xzU3RvcmUsIG5hbWUpKSB7XG4gICAgV2VsbEtub3duU3ltYm9sc1N0b3JlW25hbWVdID0gTkFUSVZFX1NZTUJPTCAmJiBoYXNPd24oU3ltYm9sLCBuYW1lKVxuICAgICAgPyBTeW1ib2xbbmFtZV1cbiAgICAgIDogY3JlYXRlV2VsbEtub3duU3ltYm9sKCdTeW1ib2wuJyArIG5hbWUpO1xuICB9IHJldHVybiBXZWxsS25vd25TeW1ib2xzU3RvcmVbbmFtZV07XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBjYWxsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWNhbGwnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcbnZhciBpc1N5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1zeW1ib2wnKTtcbnZhciBnZXRNZXRob2QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LW1ldGhvZCcpO1xudmFyIG9yZGluYXJ5VG9QcmltaXRpdmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb3JkaW5hcnktdG8tcHJpbWl0aXZlJyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG5cbnZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xudmFyIFRPX1BSSU1JVElWRSA9IHdlbGxLbm93blN5bWJvbCgndG9QcmltaXRpdmUnKTtcblxuLy8gYFRvUHJpbWl0aXZlYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtdG9wcmltaXRpdmVcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGlucHV0LCBwcmVmKSB7XG4gIGlmICghaXNPYmplY3QoaW5wdXQpIHx8IGlzU3ltYm9sKGlucHV0KSkgcmV0dXJuIGlucHV0O1xuICB2YXIgZXhvdGljVG9QcmltID0gZ2V0TWV0aG9kKGlucHV0LCBUT19QUklNSVRJVkUpO1xuICB2YXIgcmVzdWx0O1xuICBpZiAoZXhvdGljVG9QcmltKSB7XG4gICAgaWYgKHByZWYgPT09IHVuZGVmaW5lZCkgcHJlZiA9ICdkZWZhdWx0JztcbiAgICByZXN1bHQgPSBjYWxsKGV4b3RpY1RvUHJpbSwgaW5wdXQsIHByZWYpO1xuICAgIGlmICghaXNPYmplY3QocmVzdWx0KSB8fCBpc1N5bWJvbChyZXN1bHQpKSByZXR1cm4gcmVzdWx0O1xuICAgIHRocm93IG5ldyAkVHlwZUVycm9yKFwiQ2FuJ3QgY29udmVydCBvYmplY3QgdG8gcHJpbWl0aXZlIHZhbHVlXCIpO1xuICB9XG4gIGlmIChwcmVmID09PSB1bmRlZmluZWQpIHByZWYgPSAnbnVtYmVyJztcbiAgcmV0dXJuIG9yZGluYXJ5VG9QcmltaXRpdmUoaW5wdXQsIHByZWYpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tcHJpbWl0aXZlJyk7XG52YXIgaXNTeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtc3ltYm9sJyk7XG5cbi8vIGBUb1Byb3BlcnR5S2V5YCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtdG9wcm9wZXJ0eWtleVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgdmFyIGtleSA9IHRvUHJpbWl0aXZlKGFyZ3VtZW50LCAnc3RyaW5nJyk7XG4gIHJldHVybiBpc1N5bWJvbChrZXkpID8ga2V5IDoga2V5ICsgJyc7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG5cbnZhciBkb2N1bWVudCA9IGdsb2JhbC5kb2N1bWVudDtcbi8vIHR5cGVvZiBkb2N1bWVudC5jcmVhdGVFbGVtZW50IGlzICdvYmplY3QnIGluIG9sZCBJRVxudmFyIEVYSVNUUyA9IGlzT2JqZWN0KGRvY3VtZW50KSAmJiBpc09iamVjdChkb2N1bWVudC5jcmVhdGVFbGVtZW50KTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIEVYSVNUUyA/IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoaXQpIDoge307XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgY3JlYXRlRWxlbWVudCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kb2N1bWVudC1jcmVhdGUtZWxlbWVudCcpO1xuXG4vLyBUaGFua3MgdG8gSUU4IGZvciBpdHMgZnVubnkgZGVmaW5lUHJvcGVydHlcbm1vZHVsZS5leHBvcnRzID0gIURFU0NSSVBUT1JTICYmICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZGVmaW5lcHJvcGVydHkgLS0gcmVxdWlyZWQgZm9yIHRlc3RpbmdcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjcmVhdGVFbGVtZW50KCdkaXYnKSwgJ2EnLCB7XG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9XG4gIH0pLmEgIT09IDc7XG59KTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBjYWxsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWNhbGwnKTtcbnZhciBwcm9wZXJ0eUlzRW51bWVyYWJsZU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtcHJvcGVydHktaXMtZW51bWVyYWJsZScpO1xudmFyIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHktZGVzY3JpcHRvcicpO1xudmFyIHRvSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbmRleGVkLW9iamVjdCcpO1xudmFyIHRvUHJvcGVydHlLZXkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tcHJvcGVydHkta2V5Jyk7XG52YXIgaGFzT3duID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcy1vd24tcHJvcGVydHknKTtcbnZhciBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pZTgtZG9tLWRlZmluZScpO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5ZGVzY3JpcHRvciAtLSBzYWZlXG52YXIgJGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbi8vIGBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb2JqZWN0LmdldG93bnByb3BlcnR5ZGVzY3JpcHRvclxuZXhwb3J0cy5mID0gREVTQ1JJUFRPUlMgPyAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIDogZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApIHtcbiAgTyA9IHRvSW5kZXhlZE9iamVjdChPKTtcbiAgUCA9IHRvUHJvcGVydHlLZXkoUCk7XG4gIGlmIChJRThfRE9NX0RFRklORSkgdHJ5IHtcbiAgICByZXR1cm4gJGdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHsgLyogZW1wdHkgKi8gfVxuICBpZiAoaGFzT3duKE8sIFApKSByZXR1cm4gY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yKCFjYWxsKHByb3BlcnR5SXNFbnVtZXJhYmxlTW9kdWxlLmYsIE8sIFApLCBPW1BdKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcblxuLy8gVjggfiBDaHJvbWUgMzYtXG4vLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0zMzM0XG5tb2R1bGUuZXhwb3J0cyA9IERFU0NSSVBUT1JTICYmIGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1kZWZpbmVwcm9wZXJ0eSAtLSByZXF1aXJlZCBmb3IgdGVzdGluZ1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGZ1bmN0aW9uICgpIHsgLyogZW1wdHkgKi8gfSwgJ3Byb3RvdHlwZScsIHtcbiAgICB2YWx1ZTogNDIsXG4gICAgd3JpdGFibGU6IGZhbHNlXG4gIH0pLnByb3RvdHlwZSAhPT0gNDI7XG59KTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG5cbnZhciAkU3RyaW5nID0gU3RyaW5nO1xudmFyICRUeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG5cbi8vIGBBc3NlcnQ6IFR5cGUoYXJndW1lbnQpIGlzIE9iamVjdGBcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIGlmIChpc09iamVjdChhcmd1bWVudCkpIHJldHVybiBhcmd1bWVudDtcbiAgdGhyb3cgbmV3ICRUeXBlRXJyb3IoJFN0cmluZyhhcmd1bWVudCkgKyAnIGlzIG5vdCBhbiBvYmplY3QnKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaWU4LWRvbS1kZWZpbmUnKTtcbnZhciBWOF9QUk9UT1RZUEVfREVGSU5FX0JVRyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy92OC1wcm90b3R5cGUtZGVmaW5lLWJ1ZycpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xudmFyIHRvUHJvcGVydHlLZXkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tcHJvcGVydHkta2V5Jyk7XG5cbnZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1kZWZpbmVwcm9wZXJ0eSAtLSBzYWZlXG52YXIgJGRlZmluZVByb3BlcnR5ID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1nZXRvd25wcm9wZXJ0eWRlc2NyaXB0b3IgLS0gc2FmZVxudmFyICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xudmFyIEVOVU1FUkFCTEUgPSAnZW51bWVyYWJsZSc7XG52YXIgQ09ORklHVVJBQkxFID0gJ2NvbmZpZ3VyYWJsZSc7XG52YXIgV1JJVEFCTEUgPSAnd3JpdGFibGUnO1xuXG4vLyBgT2JqZWN0LmRlZmluZVByb3BlcnR5YCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb2JqZWN0LmRlZmluZXByb3BlcnR5XG5leHBvcnRzLmYgPSBERVNDUklQVE9SUyA/IFY4X1BST1RPVFlQRV9ERUZJTkVfQlVHID8gZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcykge1xuICBhbk9iamVjdChPKTtcbiAgUCA9IHRvUHJvcGVydHlLZXkoUCk7XG4gIGFuT2JqZWN0KEF0dHJpYnV0ZXMpO1xuICBpZiAodHlwZW9mIE8gPT09ICdmdW5jdGlvbicgJiYgUCA9PT0gJ3Byb3RvdHlwZScgJiYgJ3ZhbHVlJyBpbiBBdHRyaWJ1dGVzICYmIFdSSVRBQkxFIGluIEF0dHJpYnV0ZXMgJiYgIUF0dHJpYnV0ZXNbV1JJVEFCTEVdKSB7XG4gICAgdmFyIGN1cnJlbnQgPSAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApO1xuICAgIGlmIChjdXJyZW50ICYmIGN1cnJlbnRbV1JJVEFCTEVdKSB7XG4gICAgICBPW1BdID0gQXR0cmlidXRlcy52YWx1ZTtcbiAgICAgIEF0dHJpYnV0ZXMgPSB7XG4gICAgICAgIGNvbmZpZ3VyYWJsZTogQ09ORklHVVJBQkxFIGluIEF0dHJpYnV0ZXMgPyBBdHRyaWJ1dGVzW0NPTkZJR1VSQUJMRV0gOiBjdXJyZW50W0NPTkZJR1VSQUJMRV0sXG4gICAgICAgIGVudW1lcmFibGU6IEVOVU1FUkFCTEUgaW4gQXR0cmlidXRlcyA/IEF0dHJpYnV0ZXNbRU5VTUVSQUJMRV0gOiBjdXJyZW50W0VOVU1FUkFCTEVdLFxuICAgICAgICB3cml0YWJsZTogZmFsc2VcbiAgICAgIH07XG4gICAgfVxuICB9IHJldHVybiAkZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcyk7XG59IDogJGRlZmluZVByb3BlcnR5IDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcykge1xuICBhbk9iamVjdChPKTtcbiAgUCA9IHRvUHJvcGVydHlLZXkoUCk7XG4gIGFuT2JqZWN0KEF0dHJpYnV0ZXMpO1xuICBpZiAoSUU4X0RPTV9ERUZJTkUpIHRyeSB7XG4gICAgcmV0dXJuICRkZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHsgLyogZW1wdHkgKi8gfVxuICBpZiAoJ2dldCcgaW4gQXR0cmlidXRlcyB8fCAnc2V0JyBpbiBBdHRyaWJ1dGVzKSB0aHJvdyBuZXcgJFR5cGVFcnJvcignQWNjZXNzb3JzIG5vdCBzdXBwb3J0ZWQnKTtcbiAgaWYgKCd2YWx1ZScgaW4gQXR0cmlidXRlcykgT1tQXSA9IEF0dHJpYnV0ZXMudmFsdWU7XG4gIHJldHVybiBPO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBkZWZpbmVQcm9wZXJ0eU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5Jyk7XG52YXIgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eS1kZXNjcmlwdG9yJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gREVTQ1JJUFRPUlMgPyBmdW5jdGlvbiAob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIHJldHVybiBkZWZpbmVQcm9wZXJ0eU1vZHVsZS5mKG9iamVjdCwga2V5LCBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IoMSwgdmFsdWUpKTtcbn0gOiBmdW5jdGlvbiAob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIG9iamVjdFtrZXldID0gdmFsdWU7XG4gIHJldHVybiBvYmplY3Q7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIGhhc093biA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMtb3duLXByb3BlcnR5Jyk7XG5cbnZhciBGdW5jdGlvblByb3RvdHlwZSA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZ2V0b3ducHJvcGVydHlkZXNjcmlwdG9yIC0tIHNhZmVcbnZhciBnZXREZXNjcmlwdG9yID0gREVTQ1JJUFRPUlMgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxudmFyIEVYSVNUUyA9IGhhc093bihGdW5jdGlvblByb3RvdHlwZSwgJ25hbWUnKTtcbi8vIGFkZGl0aW9uYWwgcHJvdGVjdGlvbiBmcm9tIG1pbmlmaWVkIC8gbWFuZ2xlZCAvIGRyb3BwZWQgZnVuY3Rpb24gbmFtZXNcbnZhciBQUk9QRVIgPSBFWElTVFMgJiYgKGZ1bmN0aW9uIHNvbWV0aGluZygpIHsgLyogZW1wdHkgKi8gfSkubmFtZSA9PT0gJ3NvbWV0aGluZyc7XG52YXIgQ09ORklHVVJBQkxFID0gRVhJU1RTICYmICghREVTQ1JJUFRPUlMgfHwgKERFU0NSSVBUT1JTICYmIGdldERlc2NyaXB0b3IoRnVuY3Rpb25Qcm90b3R5cGUsICduYW1lJykuY29uZmlndXJhYmxlKSk7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBFWElTVFM6IEVYSVNUUyxcbiAgUFJPUEVSOiBQUk9QRVIsXG4gIENPTkZJR1VSQUJMRTogQ09ORklHVVJBQkxFXG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgc3RvcmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkLXN0b3JlJyk7XG5cbnZhciBmdW5jdGlvblRvU3RyaW5nID0gdW5jdXJyeVRoaXMoRnVuY3Rpb24udG9TdHJpbmcpO1xuXG4vLyB0aGlzIGhlbHBlciBicm9rZW4gaW4gYGNvcmUtanNAMy40LjEtMy40LjRgLCBzbyB3ZSBjYW4ndCB1c2UgYHNoYXJlZGAgaGVscGVyXG5pZiAoIWlzQ2FsbGFibGUoc3RvcmUuaW5zcGVjdFNvdXJjZSkpIHtcbiAgc3RvcmUuaW5zcGVjdFNvdXJjZSA9IGZ1bmN0aW9uIChpdCkge1xuICAgIHJldHVybiBmdW5jdGlvblRvU3RyaW5nKGl0KTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdG9yZS5pbnNwZWN0U291cmNlO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xuXG52YXIgV2Vha01hcCA9IGdsb2JhbC5XZWFrTWFwO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzQ2FsbGFibGUoV2Vha01hcCkgJiYgL25hdGl2ZSBjb2RlLy50ZXN0KFN0cmluZyhXZWFrTWFwKSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQnKTtcbnZhciB1aWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdWlkJyk7XG5cbnZhciBrZXlzID0gc2hhcmVkKCdrZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4ga2V5c1trZXldIHx8IChrZXlzW2tleV0gPSB1aWQoa2V5KSk7XG59O1xuIiwgIid1c2Ugc3RyaWN0Jztcbm1vZHVsZS5leHBvcnRzID0ge307XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIE5BVElWRV9XRUFLX01BUCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWFrLW1hcC1iYXNpYy1kZXRlY3Rpb24nKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG52YXIgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1ub24tZW51bWVyYWJsZS1wcm9wZXJ0eScpO1xudmFyIGhhc093biA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMtb3duLXByb3BlcnR5Jyk7XG52YXIgc2hhcmVkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZC1zdG9yZScpO1xudmFyIHNoYXJlZEtleSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQta2V5Jyk7XG52YXIgaGlkZGVuS2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oaWRkZW4ta2V5cycpO1xuXG52YXIgT0JKRUNUX0FMUkVBRFlfSU5JVElBTElaRUQgPSAnT2JqZWN0IGFscmVhZHkgaW5pdGlhbGl6ZWQnO1xudmFyIFR5cGVFcnJvciA9IGdsb2JhbC5UeXBlRXJyb3I7XG52YXIgV2Vha01hcCA9IGdsb2JhbC5XZWFrTWFwO1xudmFyIHNldCwgZ2V0LCBoYXM7XG5cbnZhciBlbmZvcmNlID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBoYXMoaXQpID8gZ2V0KGl0KSA6IHNldChpdCwge30pO1xufTtcblxudmFyIGdldHRlckZvciA9IGZ1bmN0aW9uIChUWVBFKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoaXQpIHtcbiAgICB2YXIgc3RhdGU7XG4gICAgaWYgKCFpc09iamVjdChpdCkgfHwgKHN0YXRlID0gZ2V0KGl0KSkudHlwZSAhPT0gVFlQRSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignSW5jb21wYXRpYmxlIHJlY2VpdmVyLCAnICsgVFlQRSArICcgcmVxdWlyZWQnKTtcbiAgICB9IHJldHVybiBzdGF0ZTtcbiAgfTtcbn07XG5cbmlmIChOQVRJVkVfV0VBS19NQVAgfHwgc2hhcmVkLnN0YXRlKSB7XG4gIHZhciBzdG9yZSA9IHNoYXJlZC5zdGF0ZSB8fCAoc2hhcmVkLnN0YXRlID0gbmV3IFdlYWtNYXAoKSk7XG4gIC8qIGVzbGludC1kaXNhYmxlIG5vLXNlbGYtYXNzaWduIC0tIHByb3RvdHlwZSBtZXRob2RzIHByb3RlY3Rpb24gKi9cbiAgc3RvcmUuZ2V0ID0gc3RvcmUuZ2V0O1xuICBzdG9yZS5oYXMgPSBzdG9yZS5oYXM7XG4gIHN0b3JlLnNldCA9IHN0b3JlLnNldDtcbiAgLyogZXNsaW50LWVuYWJsZSBuby1zZWxmLWFzc2lnbiAtLSBwcm90b3R5cGUgbWV0aG9kcyBwcm90ZWN0aW9uICovXG4gIHNldCA9IGZ1bmN0aW9uIChpdCwgbWV0YWRhdGEpIHtcbiAgICBpZiAoc3RvcmUuaGFzKGl0KSkgdGhyb3cgbmV3IFR5cGVFcnJvcihPQkpFQ1RfQUxSRUFEWV9JTklUSUFMSVpFRCk7XG4gICAgbWV0YWRhdGEuZmFjYWRlID0gaXQ7XG4gICAgc3RvcmUuc2V0KGl0LCBtZXRhZGF0YSk7XG4gICAgcmV0dXJuIG1ldGFkYXRhO1xuICB9O1xuICBnZXQgPSBmdW5jdGlvbiAoaXQpIHtcbiAgICByZXR1cm4gc3RvcmUuZ2V0KGl0KSB8fCB7fTtcbiAgfTtcbiAgaGFzID0gZnVuY3Rpb24gKGl0KSB7XG4gICAgcmV0dXJuIHN0b3JlLmhhcyhpdCk7XG4gIH07XG59IGVsc2Uge1xuICB2YXIgU1RBVEUgPSBzaGFyZWRLZXkoJ3N0YXRlJyk7XG4gIGhpZGRlbktleXNbU1RBVEVdID0gdHJ1ZTtcbiAgc2V0ID0gZnVuY3Rpb24gKGl0LCBtZXRhZGF0YSkge1xuICAgIGlmIChoYXNPd24oaXQsIFNUQVRFKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihPQkpFQ1RfQUxSRUFEWV9JTklUSUFMSVpFRCk7XG4gICAgbWV0YWRhdGEuZmFjYWRlID0gaXQ7XG4gICAgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5KGl0LCBTVEFURSwgbWV0YWRhdGEpO1xuICAgIHJldHVybiBtZXRhZGF0YTtcbiAgfTtcbiAgZ2V0ID0gZnVuY3Rpb24gKGl0KSB7XG4gICAgcmV0dXJuIGhhc093bihpdCwgU1RBVEUpID8gaXRbU1RBVEVdIDoge307XG4gIH07XG4gIGhhcyA9IGZ1bmN0aW9uIChpdCkge1xuICAgIHJldHVybiBoYXNPd24oaXQsIFNUQVRFKTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHNldDogc2V0LFxuICBnZXQ6IGdldCxcbiAgaGFzOiBoYXMsXG4gIGVuZm9yY2U6IGVuZm9yY2UsXG4gIGdldHRlckZvcjogZ2V0dGVyRm9yXG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcbnZhciBoYXNPd24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eScpO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgQ09ORklHVVJBQkxFX0ZVTkNUSU9OX05BTUUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tbmFtZScpLkNPTkZJR1VSQUJMRTtcbnZhciBpbnNwZWN0U291cmNlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2luc3BlY3Qtc291cmNlJyk7XG52YXIgSW50ZXJuYWxTdGF0ZU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbnRlcm5hbC1zdGF0ZScpO1xuXG52YXIgZW5mb3JjZUludGVybmFsU3RhdGUgPSBJbnRlcm5hbFN0YXRlTW9kdWxlLmVuZm9yY2U7XG52YXIgZ2V0SW50ZXJuYWxTdGF0ZSA9IEludGVybmFsU3RhdGVNb2R1bGUuZ2V0O1xudmFyICRTdHJpbmcgPSBTdHJpbmc7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWRlZmluZXByb3BlcnR5IC0tIHNhZmVcbnZhciBkZWZpbmVQcm9wZXJ0eSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcbnZhciBzdHJpbmdTbGljZSA9IHVuY3VycnlUaGlzKCcnLnNsaWNlKTtcbnZhciByZXBsYWNlID0gdW5jdXJyeVRoaXMoJycucmVwbGFjZSk7XG52YXIgam9pbiA9IHVuY3VycnlUaGlzKFtdLmpvaW4pO1xuXG52YXIgQ09ORklHVVJBQkxFX0xFTkdUSCA9IERFU0NSSVBUT1JTICYmICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBkZWZpbmVQcm9wZXJ0eShmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH0sICdsZW5ndGgnLCB7IHZhbHVlOiA4IH0pLmxlbmd0aCAhPT0gODtcbn0pO1xuXG52YXIgVEVNUExBVEUgPSBTdHJpbmcoU3RyaW5nKS5zcGxpdCgnU3RyaW5nJyk7XG5cbnZhciBtYWtlQnVpbHRJbiA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHZhbHVlLCBuYW1lLCBvcHRpb25zKSB7XG4gIGlmIChzdHJpbmdTbGljZSgkU3RyaW5nKG5hbWUpLCAwLCA3KSA9PT0gJ1N5bWJvbCgnKSB7XG4gICAgbmFtZSA9ICdbJyArIHJlcGxhY2UoJFN0cmluZyhuYW1lKSwgL15TeW1ib2xcXCgoW14pXSopXFwpLiokLywgJyQxJykgKyAnXSc7XG4gIH1cbiAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5nZXR0ZXIpIG5hbWUgPSAnZ2V0ICcgKyBuYW1lO1xuICBpZiAob3B0aW9ucyAmJiBvcHRpb25zLnNldHRlcikgbmFtZSA9ICdzZXQgJyArIG5hbWU7XG4gIGlmICghaGFzT3duKHZhbHVlLCAnbmFtZScpIHx8IChDT05GSUdVUkFCTEVfRlVOQ1RJT05fTkFNRSAmJiB2YWx1ZS5uYW1lICE9PSBuYW1lKSkge1xuICAgIGlmIChERVNDUklQVE9SUykgZGVmaW5lUHJvcGVydHkodmFsdWUsICduYW1lJywgeyB2YWx1ZTogbmFtZSwgY29uZmlndXJhYmxlOiB0cnVlIH0pO1xuICAgIGVsc2UgdmFsdWUubmFtZSA9IG5hbWU7XG4gIH1cbiAgaWYgKENPTkZJR1VSQUJMRV9MRU5HVEggJiYgb3B0aW9ucyAmJiBoYXNPd24ob3B0aW9ucywgJ2FyaXR5JykgJiYgdmFsdWUubGVuZ3RoICE9PSBvcHRpb25zLmFyaXR5KSB7XG4gICAgZGVmaW5lUHJvcGVydHkodmFsdWUsICdsZW5ndGgnLCB7IHZhbHVlOiBvcHRpb25zLmFyaXR5IH0pO1xuICB9XG4gIHRyeSB7XG4gICAgaWYgKG9wdGlvbnMgJiYgaGFzT3duKG9wdGlvbnMsICdjb25zdHJ1Y3RvcicpICYmIG9wdGlvbnMuY29uc3RydWN0b3IpIHtcbiAgICAgIGlmIChERVNDUklQVE9SUykgZGVmaW5lUHJvcGVydHkodmFsdWUsICdwcm90b3R5cGUnLCB7IHdyaXRhYmxlOiBmYWxzZSB9KTtcbiAgICAvLyBpbiBWOCB+IENocm9tZSA1MywgcHJvdG90eXBlcyBvZiBzb21lIG1ldGhvZHMsIGxpa2UgYEFycmF5LnByb3RvdHlwZS52YWx1ZXNgLCBhcmUgbm9uLXdyaXRhYmxlXG4gICAgfSBlbHNlIGlmICh2YWx1ZS5wcm90b3R5cGUpIHZhbHVlLnByb3RvdHlwZSA9IHVuZGVmaW5lZDtcbiAgfSBjYXRjaCAoZXJyb3IpIHsgLyogZW1wdHkgKi8gfVxuICB2YXIgc3RhdGUgPSBlbmZvcmNlSW50ZXJuYWxTdGF0ZSh2YWx1ZSk7XG4gIGlmICghaGFzT3duKHN0YXRlLCAnc291cmNlJykpIHtcbiAgICBzdGF0ZS5zb3VyY2UgPSBqb2luKFRFTVBMQVRFLCB0eXBlb2YgbmFtZSA9PSAnc3RyaW5nJyA/IG5hbWUgOiAnJyk7XG4gIH0gcmV0dXJuIHZhbHVlO1xufTtcblxuLy8gYWRkIGZha2UgRnVuY3Rpb24jdG9TdHJpbmcgZm9yIGNvcnJlY3Qgd29yayB3cmFwcGVkIG1ldGhvZHMgLyBjb25zdHJ1Y3RvcnMgd2l0aCBtZXRob2RzIGxpa2UgTG9EYXNoIGlzTmF0aXZlXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tZXh0ZW5kLW5hdGl2ZSAtLSByZXF1aXJlZFxuRnVuY3Rpb24ucHJvdG90eXBlLnRvU3RyaW5nID0gbWFrZUJ1aWx0SW4oZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gIHJldHVybiBpc0NhbGxhYmxlKHRoaXMpICYmIGdldEludGVybmFsU3RhdGUodGhpcykuc291cmNlIHx8IGluc3BlY3RTb3VyY2UodGhpcyk7XG59LCAndG9TdHJpbmcnKTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xudmFyIGRlZmluZVByb3BlcnR5TW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHknKTtcbnZhciBtYWtlQnVpbHRJbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9tYWtlLWJ1aWx0LWluJyk7XG52YXIgZGVmaW5lR2xvYmFsUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVmaW5lLWdsb2JhbC1wcm9wZXJ0eScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChPLCBrZXksIHZhbHVlLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykgb3B0aW9ucyA9IHt9O1xuICB2YXIgc2ltcGxlID0gb3B0aW9ucy5lbnVtZXJhYmxlO1xuICB2YXIgbmFtZSA9IG9wdGlvbnMubmFtZSAhPT0gdW5kZWZpbmVkID8gb3B0aW9ucy5uYW1lIDoga2V5O1xuICBpZiAoaXNDYWxsYWJsZSh2YWx1ZSkpIG1ha2VCdWlsdEluKHZhbHVlLCBuYW1lLCBvcHRpb25zKTtcbiAgaWYgKG9wdGlvbnMuZ2xvYmFsKSB7XG4gICAgaWYgKHNpbXBsZSkgT1trZXldID0gdmFsdWU7XG4gICAgZWxzZSBkZWZpbmVHbG9iYWxQcm9wZXJ0eShrZXksIHZhbHVlKTtcbiAgfSBlbHNlIHtcbiAgICB0cnkge1xuICAgICAgaWYgKCFvcHRpb25zLnVuc2FmZSkgZGVsZXRlIE9ba2V5XTtcbiAgICAgIGVsc2UgaWYgKE9ba2V5XSkgc2ltcGxlID0gdHJ1ZTtcbiAgICB9IGNhdGNoIChlcnJvcikgeyAvKiBlbXB0eSAqLyB9XG4gICAgaWYgKHNpbXBsZSkgT1trZXldID0gdmFsdWU7XG4gICAgZWxzZSBkZWZpbmVQcm9wZXJ0eU1vZHVsZS5mKE8sIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICBjb25maWd1cmFibGU6ICFvcHRpb25zLm5vbkNvbmZpZ3VyYWJsZSxcbiAgICAgIHdyaXRhYmxlOiAhb3B0aW9ucy5ub25Xcml0YWJsZVxuICAgIH0pO1xuICB9IHJldHVybiBPO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgY2VpbCA9IE1hdGguY2VpbDtcbnZhciBmbG9vciA9IE1hdGguZmxvb3I7XG5cbi8vIGBNYXRoLnRydW5jYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtbWF0aC50cnVuY1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW1hdGgtdHJ1bmMgLS0gc2FmZVxubW9kdWxlLmV4cG9ydHMgPSBNYXRoLnRydW5jIHx8IGZ1bmN0aW9uIHRydW5jKHgpIHtcbiAgdmFyIG4gPSAreDtcbiAgcmV0dXJuIChuID4gMCA/IGZsb29yIDogY2VpbCkobik7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB0cnVuYyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9tYXRoLXRydW5jJyk7XG5cbi8vIGBUb0ludGVnZXJPckluZmluaXR5YCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtdG9pbnRlZ2Vyb3JpbmZpbml0eVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgdmFyIG51bWJlciA9ICthcmd1bWVudDtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZSAtLSBOYU4gY2hlY2tcbiAgcmV0dXJuIG51bWJlciAhPT0gbnVtYmVyIHx8IG51bWJlciA9PT0gMCA/IDAgOiB0cnVuYyhudW1iZXIpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdG9JbnRlZ2VyT3JJbmZpbml0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbnRlZ2VyLW9yLWluZmluaXR5Jyk7XG5cbnZhciBtYXggPSBNYXRoLm1heDtcbnZhciBtaW4gPSBNYXRoLm1pbjtcblxuLy8gSGVscGVyIGZvciBhIHBvcHVsYXIgcmVwZWF0aW5nIGNhc2Ugb2YgdGhlIHNwZWM6XG4vLyBMZXQgaW50ZWdlciBiZSA/IFRvSW50ZWdlcihpbmRleCkuXG4vLyBJZiBpbnRlZ2VyIDwgMCwgbGV0IHJlc3VsdCBiZSBtYXgoKGxlbmd0aCArIGludGVnZXIpLCAwKTsgZWxzZSBsZXQgcmVzdWx0IGJlIG1pbihpbnRlZ2VyLCBsZW5ndGgpLlxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaW5kZXgsIGxlbmd0aCkge1xuICB2YXIgaW50ZWdlciA9IHRvSW50ZWdlck9ySW5maW5pdHkoaW5kZXgpO1xuICByZXR1cm4gaW50ZWdlciA8IDAgPyBtYXgoaW50ZWdlciArIGxlbmd0aCwgMCkgOiBtaW4oaW50ZWdlciwgbGVuZ3RoKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHRvSW50ZWdlck9ySW5maW5pdHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW50ZWdlci1vci1pbmZpbml0eScpO1xuXG52YXIgbWluID0gTWF0aC5taW47XG5cbi8vIGBUb0xlbmd0aGAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXRvbGVuZ3RoXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICB2YXIgbGVuID0gdG9JbnRlZ2VyT3JJbmZpbml0eShhcmd1bWVudCk7XG4gIHJldHVybiBsZW4gPiAwID8gbWluKGxlbiwgMHgxRkZGRkZGRkZGRkZGRikgOiAwOyAvLyAyICoqIDUzIC0gMSA9PSA5MDA3MTk5MjU0NzQwOTkxXG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1sZW5ndGgnKTtcblxuLy8gYExlbmd0aE9mQXJyYXlMaWtlYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtbGVuZ3Rob2ZhcnJheWxpa2Vcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gdG9MZW5ndGgob2JqLmxlbmd0aCk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB0b0luZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QnKTtcbnZhciB0b0Fic29sdXRlSW5kZXggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tYWJzb2x1dGUtaW5kZXgnKTtcbnZhciBsZW5ndGhPZkFycmF5TGlrZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9sZW5ndGgtb2YtYXJyYXktbGlrZScpO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLnsgaW5kZXhPZiwgaW5jbHVkZXMgfWAgbWV0aG9kcyBpbXBsZW1lbnRhdGlvblxudmFyIGNyZWF0ZU1ldGhvZCA9IGZ1bmN0aW9uIChJU19JTkNMVURFUykge1xuICByZXR1cm4gZnVuY3Rpb24gKCR0aGlzLCBlbCwgZnJvbUluZGV4KSB7XG4gICAgdmFyIE8gPSB0b0luZGV4ZWRPYmplY3QoJHRoaXMpO1xuICAgIHZhciBsZW5ndGggPSBsZW5ndGhPZkFycmF5TGlrZShPKTtcbiAgICBpZiAobGVuZ3RoID09PSAwKSByZXR1cm4gIUlTX0lOQ0xVREVTICYmIC0xO1xuICAgIHZhciBpbmRleCA9IHRvQWJzb2x1dGVJbmRleChmcm9tSW5kZXgsIGxlbmd0aCk7XG4gICAgdmFyIHZhbHVlO1xuICAgIC8vIEFycmF5I2luY2x1ZGVzIHVzZXMgU2FtZVZhbHVlWmVybyBlcXVhbGl0eSBhbGdvcml0aG1cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlIC0tIE5hTiBjaGVja1xuICAgIGlmIChJU19JTkNMVURFUyAmJiBlbCAhPT0gZWwpIHdoaWxlIChsZW5ndGggPiBpbmRleCkge1xuICAgICAgdmFsdWUgPSBPW2luZGV4KytdO1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZSAtLSBOYU4gY2hlY2tcbiAgICAgIGlmICh2YWx1ZSAhPT0gdmFsdWUpIHJldHVybiB0cnVlO1xuICAgIC8vIEFycmF5I2luZGV4T2YgaWdub3JlcyBob2xlcywgQXJyYXkjaW5jbHVkZXMgLSBub3RcbiAgICB9IGVsc2UgZm9yICg7bGVuZ3RoID4gaW5kZXg7IGluZGV4KyspIHtcbiAgICAgIGlmICgoSVNfSU5DTFVERVMgfHwgaW5kZXggaW4gTykgJiYgT1tpbmRleF0gPT09IGVsKSByZXR1cm4gSVNfSU5DTFVERVMgfHwgaW5kZXggfHwgMDtcbiAgICB9IHJldHVybiAhSVNfSU5DTFVERVMgJiYgLTE7XG4gIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgLy8gYEFycmF5LnByb3RvdHlwZS5pbmNsdWRlc2AgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmluY2x1ZGVzXG4gIGluY2x1ZGVzOiBjcmVhdGVNZXRob2QodHJ1ZSksXG4gIC8vIGBBcnJheS5wcm90b3R5cGUuaW5kZXhPZmAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmluZGV4b2ZcbiAgaW5kZXhPZjogY3JlYXRlTWV0aG9kKGZhbHNlKVxufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgaGFzT3duID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcy1vd24tcHJvcGVydHknKTtcbnZhciB0b0luZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QnKTtcbnZhciBpbmRleE9mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWluY2x1ZGVzJykuaW5kZXhPZjtcbnZhciBoaWRkZW5LZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hpZGRlbi1rZXlzJyk7XG5cbnZhciBwdXNoID0gdW5jdXJyeVRoaXMoW10ucHVzaCk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iamVjdCwgbmFtZXMpIHtcbiAgdmFyIE8gPSB0b0luZGV4ZWRPYmplY3Qob2JqZWN0KTtcbiAgdmFyIGkgPSAwO1xuICB2YXIgcmVzdWx0ID0gW107XG4gIHZhciBrZXk7XG4gIGZvciAoa2V5IGluIE8pICFoYXNPd24oaGlkZGVuS2V5cywga2V5KSAmJiBoYXNPd24oTywga2V5KSAmJiBwdXNoKHJlc3VsdCwga2V5KTtcbiAgLy8gRG9uJ3QgZW51bSBidWcgJiBoaWRkZW4ga2V5c1xuICB3aGlsZSAobmFtZXMubGVuZ3RoID4gaSkgaWYgKGhhc093bihPLCBrZXkgPSBuYW1lc1tpKytdKSkge1xuICAgIH5pbmRleE9mKHJlc3VsdCwga2V5KSB8fCBwdXNoKHJlc3VsdCwga2V5KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcbiIsICIndXNlIHN0cmljdCc7XG4vLyBJRTgtIGRvbid0IGVudW0gYnVnIGtleXNcbm1vZHVsZS5leHBvcnRzID0gW1xuICAnY29uc3RydWN0b3InLFxuICAnaGFzT3duUHJvcGVydHknLFxuICAnaXNQcm90b3R5cGVPZicsXG4gICdwcm9wZXJ0eUlzRW51bWVyYWJsZScsXG4gICd0b0xvY2FsZVN0cmluZycsXG4gICd0b1N0cmluZycsXG4gICd2YWx1ZU9mJ1xuXTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgaW50ZXJuYWxPYmplY3RLZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1rZXlzLWludGVybmFsJyk7XG52YXIgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW51bS1idWcta2V5cycpO1xuXG52YXIgaGlkZGVuS2V5cyA9IGVudW1CdWdLZXlzLmNvbmNhdCgnbGVuZ3RoJywgJ3Byb3RvdHlwZScpO1xuXG4vLyBgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXNgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vYmplY3QuZ2V0b3ducHJvcGVydHluYW1lc1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1nZXRvd25wcm9wZXJ0eW5hbWVzIC0tIHNhZmVcbmV4cG9ydHMuZiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzIHx8IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoTykge1xuICByZXR1cm4gaW50ZXJuYWxPYmplY3RLZXlzKE8sIGhpZGRlbktleXMpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5c3ltYm9scyAtLSBzYWZlXG5leHBvcnRzLmYgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnZXRCdWlsdEluID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1idWlsdC1pbicpO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIGdldE93blByb3BlcnR5TmFtZXNNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktbmFtZXMnKTtcbnZhciBnZXRPd25Qcm9wZXJ0eVN5bWJvbHNNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktc3ltYm9scycpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xuXG52YXIgY29uY2F0ID0gdW5jdXJyeVRoaXMoW10uY29uY2F0KTtcblxuLy8gYWxsIG9iamVjdCBrZXlzLCBpbmNsdWRlcyBub24tZW51bWVyYWJsZSBhbmQgc3ltYm9sc1xubW9kdWxlLmV4cG9ydHMgPSBnZXRCdWlsdEluKCdSZWZsZWN0JywgJ293bktleXMnKSB8fCBmdW5jdGlvbiBvd25LZXlzKGl0KSB7XG4gIHZhciBrZXlzID0gZ2V0T3duUHJvcGVydHlOYW1lc01vZHVsZS5mKGFuT2JqZWN0KGl0KSk7XG4gIHZhciBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBnZXRPd25Qcm9wZXJ0eVN5bWJvbHNNb2R1bGUuZjtcbiAgcmV0dXJuIGdldE93blByb3BlcnR5U3ltYm9scyA/IGNvbmNhdChrZXlzLCBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoaXQpKSA6IGtleXM7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBoYXNPd24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eScpO1xudmFyIG93bktleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb3duLWtleXMnKTtcbnZhciBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktZGVzY3JpcHRvcicpO1xudmFyIGRlZmluZVByb3BlcnR5TW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHknKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodGFyZ2V0LCBzb3VyY2UsIGV4Y2VwdGlvbnMpIHtcbiAgdmFyIGtleXMgPSBvd25LZXlzKHNvdXJjZSk7XG4gIHZhciBkZWZpbmVQcm9wZXJ0eSA9IGRlZmluZVByb3BlcnR5TW9kdWxlLmY7XG4gIHZhciBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JNb2R1bGUuZjtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGtleSA9IGtleXNbaV07XG4gICAgaWYgKCFoYXNPd24odGFyZ2V0LCBrZXkpICYmICEoZXhjZXB0aW9ucyAmJiBoYXNPd24oZXhjZXB0aW9ucywga2V5KSkpIHtcbiAgICAgIGRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTtcbiAgICB9XG4gIH1cbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xuXG52YXIgcmVwbGFjZW1lbnQgPSAvI3xcXC5wcm90b3R5cGVcXC4vO1xuXG52YXIgaXNGb3JjZWQgPSBmdW5jdGlvbiAoZmVhdHVyZSwgZGV0ZWN0aW9uKSB7XG4gIHZhciB2YWx1ZSA9IGRhdGFbbm9ybWFsaXplKGZlYXR1cmUpXTtcbiAgcmV0dXJuIHZhbHVlID09PSBQT0xZRklMTCA/IHRydWVcbiAgICA6IHZhbHVlID09PSBOQVRJVkUgPyBmYWxzZVxuICAgIDogaXNDYWxsYWJsZShkZXRlY3Rpb24pID8gZmFpbHMoZGV0ZWN0aW9uKVxuICAgIDogISFkZXRlY3Rpb247XG59O1xuXG52YXIgbm9ybWFsaXplID0gaXNGb3JjZWQubm9ybWFsaXplID0gZnVuY3Rpb24gKHN0cmluZykge1xuICByZXR1cm4gU3RyaW5nKHN0cmluZykucmVwbGFjZShyZXBsYWNlbWVudCwgJy4nKS50b0xvd2VyQ2FzZSgpO1xufTtcblxudmFyIGRhdGEgPSBpc0ZvcmNlZC5kYXRhID0ge307XG52YXIgTkFUSVZFID0gaXNGb3JjZWQuTkFUSVZFID0gJ04nO1xudmFyIFBPTFlGSUxMID0gaXNGb3JjZWQuUE9MWUZJTEwgPSAnUCc7XG5cbm1vZHVsZS5leHBvcnRzID0gaXNGb3JjZWQ7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktZGVzY3JpcHRvcicpLmY7XG52YXIgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1ub24tZW51bWVyYWJsZS1wcm9wZXJ0eScpO1xudmFyIGRlZmluZUJ1aWx0SW4gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVmaW5lLWJ1aWx0LWluJyk7XG52YXIgZGVmaW5lR2xvYmFsUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVmaW5lLWdsb2JhbC1wcm9wZXJ0eScpO1xudmFyIGNvcHlDb25zdHJ1Y3RvclByb3BlcnRpZXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY29weS1jb25zdHJ1Y3Rvci1wcm9wZXJ0aWVzJyk7XG52YXIgaXNGb3JjZWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtZm9yY2VkJyk7XG5cbi8qXG4gIG9wdGlvbnMudGFyZ2V0ICAgICAgICAgLSBuYW1lIG9mIHRoZSB0YXJnZXQgb2JqZWN0XG4gIG9wdGlvbnMuZ2xvYmFsICAgICAgICAgLSB0YXJnZXQgaXMgdGhlIGdsb2JhbCBvYmplY3RcbiAgb3B0aW9ucy5zdGF0ICAgICAgICAgICAtIGV4cG9ydCBhcyBzdGF0aWMgbWV0aG9kcyBvZiB0YXJnZXRcbiAgb3B0aW9ucy5wcm90byAgICAgICAgICAtIGV4cG9ydCBhcyBwcm90b3R5cGUgbWV0aG9kcyBvZiB0YXJnZXRcbiAgb3B0aW9ucy5yZWFsICAgICAgICAgICAtIHJlYWwgcHJvdG90eXBlIG1ldGhvZCBmb3IgdGhlIGBwdXJlYCB2ZXJzaW9uXG4gIG9wdGlvbnMuZm9yY2VkICAgICAgICAgLSBleHBvcnQgZXZlbiBpZiB0aGUgbmF0aXZlIGZlYXR1cmUgaXMgYXZhaWxhYmxlXG4gIG9wdGlvbnMuYmluZCAgICAgICAgICAgLSBiaW5kIG1ldGhvZHMgdG8gdGhlIHRhcmdldCwgcmVxdWlyZWQgZm9yIHRoZSBgcHVyZWAgdmVyc2lvblxuICBvcHRpb25zLndyYXAgICAgICAgICAgIC0gd3JhcCBjb25zdHJ1Y3RvcnMgdG8gcHJldmVudGluZyBnbG9iYWwgcG9sbHV0aW9uLCByZXF1aXJlZCBmb3IgdGhlIGBwdXJlYCB2ZXJzaW9uXG4gIG9wdGlvbnMudW5zYWZlICAgICAgICAgLSB1c2UgdGhlIHNpbXBsZSBhc3NpZ25tZW50IG9mIHByb3BlcnR5IGluc3RlYWQgb2YgZGVsZXRlICsgZGVmaW5lUHJvcGVydHlcbiAgb3B0aW9ucy5zaGFtICAgICAgICAgICAtIGFkZCBhIGZsYWcgdG8gbm90IGNvbXBsZXRlbHkgZnVsbCBwb2x5ZmlsbHNcbiAgb3B0aW9ucy5lbnVtZXJhYmxlICAgICAtIGV4cG9ydCBhcyBlbnVtZXJhYmxlIHByb3BlcnR5XG4gIG9wdGlvbnMuZG9udENhbGxHZXRTZXQgLSBwcmV2ZW50IGNhbGxpbmcgYSBnZXR0ZXIgb24gdGFyZ2V0XG4gIG9wdGlvbnMubmFtZSAgICAgICAgICAgLSB0aGUgLm5hbWUgb2YgdGhlIGZ1bmN0aW9uIGlmIGl0IGRvZXMgbm90IG1hdGNoIHRoZSBrZXlcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvcHRpb25zLCBzb3VyY2UpIHtcbiAgdmFyIFRBUkdFVCA9IG9wdGlvbnMudGFyZ2V0O1xuICB2YXIgR0xPQkFMID0gb3B0aW9ucy5nbG9iYWw7XG4gIHZhciBTVEFUSUMgPSBvcHRpb25zLnN0YXQ7XG4gIHZhciBGT1JDRUQsIHRhcmdldCwga2V5LCB0YXJnZXRQcm9wZXJ0eSwgc291cmNlUHJvcGVydHksIGRlc2NyaXB0b3I7XG4gIGlmIChHTE9CQUwpIHtcbiAgICB0YXJnZXQgPSBnbG9iYWw7XG4gIH0gZWxzZSBpZiAoU1RBVElDKSB7XG4gICAgdGFyZ2V0ID0gZ2xvYmFsW1RBUkdFVF0gfHwgZGVmaW5lR2xvYmFsUHJvcGVydHkoVEFSR0VULCB7fSk7XG4gIH0gZWxzZSB7XG4gICAgdGFyZ2V0ID0gZ2xvYmFsW1RBUkdFVF0gJiYgZ2xvYmFsW1RBUkdFVF0ucHJvdG90eXBlO1xuICB9XG4gIGlmICh0YXJnZXQpIGZvciAoa2V5IGluIHNvdXJjZSkge1xuICAgIHNvdXJjZVByb3BlcnR5ID0gc291cmNlW2tleV07XG4gICAgaWYgKG9wdGlvbnMuZG9udENhbGxHZXRTZXQpIHtcbiAgICAgIGRlc2NyaXB0b3IgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpO1xuICAgICAgdGFyZ2V0UHJvcGVydHkgPSBkZXNjcmlwdG9yICYmIGRlc2NyaXB0b3IudmFsdWU7XG4gICAgfSBlbHNlIHRhcmdldFByb3BlcnR5ID0gdGFyZ2V0W2tleV07XG4gICAgRk9SQ0VEID0gaXNGb3JjZWQoR0xPQkFMID8ga2V5IDogVEFSR0VUICsgKFNUQVRJQyA/ICcuJyA6ICcjJykgKyBrZXksIG9wdGlvbnMuZm9yY2VkKTtcbiAgICAvLyBjb250YWluZWQgaW4gdGFyZ2V0XG4gICAgaWYgKCFGT1JDRUQgJiYgdGFyZ2V0UHJvcGVydHkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaWYgKHR5cGVvZiBzb3VyY2VQcm9wZXJ0eSA9PSB0eXBlb2YgdGFyZ2V0UHJvcGVydHkpIGNvbnRpbnVlO1xuICAgICAgY29weUNvbnN0cnVjdG9yUHJvcGVydGllcyhzb3VyY2VQcm9wZXJ0eSwgdGFyZ2V0UHJvcGVydHkpO1xuICAgIH1cbiAgICAvLyBhZGQgYSBmbGFnIHRvIG5vdCBjb21wbGV0ZWx5IGZ1bGwgcG9seWZpbGxzXG4gICAgaWYgKG9wdGlvbnMuc2hhbSB8fCAodGFyZ2V0UHJvcGVydHkgJiYgdGFyZ2V0UHJvcGVydHkuc2hhbSkpIHtcbiAgICAgIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eShzb3VyY2VQcm9wZXJ0eSwgJ3NoYW0nLCB0cnVlKTtcbiAgICB9XG4gICAgZGVmaW5lQnVpbHRJbih0YXJnZXQsIGtleSwgc291cmNlUHJvcGVydHksIG9wdGlvbnMpO1xuICB9XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLXNldCAtLSBzYWZlXG52YXIgU2V0UHJvdG90eXBlID0gU2V0LnByb3RvdHlwZTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1zZXQgLS0gc2FmZVxuICBTZXQ6IFNldCxcbiAgYWRkOiB1bmN1cnJ5VGhpcyhTZXRQcm90b3R5cGUuYWRkKSxcbiAgaGFzOiB1bmN1cnJ5VGhpcyhTZXRQcm90b3R5cGUuaGFzKSxcbiAgcmVtb3ZlOiB1bmN1cnJ5VGhpcyhTZXRQcm90b3R5cGVbJ2RlbGV0ZSddKSxcbiAgcHJvdG86IFNldFByb3RvdHlwZVxufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgaGFzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NldC1oZWxwZXJzJykuaGFzO1xuXG4vLyBQZXJmb3JtID8gUmVxdWlyZUludGVybmFsU2xvdChNLCBbW1NldERhdGFdXSlcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGhhcyhpdCk7XG4gIHJldHVybiBpdDtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGNhbGwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tY2FsbCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChyZWNvcmQsIGZuLCBJVEVSQVRPUl9JTlNURUFEX09GX1JFQ09SRCkge1xuICB2YXIgaXRlcmF0b3IgPSBJVEVSQVRPUl9JTlNURUFEX09GX1JFQ09SRCA/IHJlY29yZCA6IHJlY29yZC5pdGVyYXRvcjtcbiAgdmFyIG5leHQgPSByZWNvcmQubmV4dDtcbiAgdmFyIHN0ZXAsIHJlc3VsdDtcbiAgd2hpbGUgKCEoc3RlcCA9IGNhbGwobmV4dCwgaXRlcmF0b3IpKS5kb25lKSB7XG4gICAgcmVzdWx0ID0gZm4oc3RlcC52YWx1ZSk7XG4gICAgaWYgKHJlc3VsdCAhPT0gdW5kZWZpbmVkKSByZXR1cm4gcmVzdWx0O1xuICB9XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcbnZhciBpdGVyYXRlU2ltcGxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2l0ZXJhdGUtc2ltcGxlJyk7XG52YXIgU2V0SGVscGVycyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zZXQtaGVscGVycycpO1xuXG52YXIgU2V0ID0gU2V0SGVscGVycy5TZXQ7XG52YXIgU2V0UHJvdG90eXBlID0gU2V0SGVscGVycy5wcm90bztcbnZhciBmb3JFYWNoID0gdW5jdXJyeVRoaXMoU2V0UHJvdG90eXBlLmZvckVhY2gpO1xudmFyIGtleXMgPSB1bmN1cnJ5VGhpcyhTZXRQcm90b3R5cGUua2V5cyk7XG52YXIgbmV4dCA9IGtleXMobmV3IFNldCgpKS5uZXh0O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChzZXQsIGZuLCBpbnRlcnJ1cHRpYmxlKSB7XG4gIHJldHVybiBpbnRlcnJ1cHRpYmxlID8gaXRlcmF0ZVNpbXBsZSh7IGl0ZXJhdG9yOiBrZXlzKHNldCksIG5leHQ6IG5leHQgfSwgZm4pIDogZm9yRWFjaChzZXQsIGZuKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIFNldEhlbHBlcnMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2V0LWhlbHBlcnMnKTtcbnZhciBpdGVyYXRlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NldC1pdGVyYXRlJyk7XG5cbnZhciBTZXQgPSBTZXRIZWxwZXJzLlNldDtcbnZhciBhZGQgPSBTZXRIZWxwZXJzLmFkZDtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoc2V0KSB7XG4gIHZhciByZXN1bHQgPSBuZXcgU2V0KCk7XG4gIGl0ZXJhdGUoc2V0LCBmdW5jdGlvbiAoaXQpIHtcbiAgICBhZGQocmVzdWx0LCBpdCk7XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgYUNhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2EtY2FsbGFibGUnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob2JqZWN0LCBrZXksIG1ldGhvZCkge1xuICB0cnkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZ2V0b3ducHJvcGVydHlkZXNjcmlwdG9yIC0tIHNhZmVcbiAgICByZXR1cm4gdW5jdXJyeVRoaXMoYUNhbGxhYmxlKE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBrZXkpW21ldGhvZF0pKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHsgLyogZW1wdHkgKi8gfVxufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdW5jdXJyeVRoaXNBY2Nlc3NvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMtYWNjZXNzb3InKTtcbnZhciBTZXRIZWxwZXJzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NldC1oZWxwZXJzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gdW5jdXJyeVRoaXNBY2Nlc3NvcihTZXRIZWxwZXJzLnByb3RvLCAnc2l6ZScsICdnZXQnKSB8fCBmdW5jdGlvbiAoc2V0KSB7XG4gIHJldHVybiBzZXQuc2l6ZTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xuLy8gYEdldEl0ZXJhdG9yRGlyZWN0KG9iailgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL3Byb3Bvc2FsLWl0ZXJhdG9yLWhlbHBlcnMvI3NlYy1nZXRpdGVyYXRvcmRpcmVjdFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiB7XG4gICAgaXRlcmF0b3I6IG9iaixcbiAgICBuZXh0OiBvYmoubmV4dCxcbiAgICBkb25lOiBmYWxzZVxuICB9O1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgYUNhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2EtY2FsbGFibGUnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcbnZhciBjYWxsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWNhbGwnKTtcbnZhciB0b0ludGVnZXJPckluZmluaXR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWludGVnZXItb3ItaW5maW5pdHknKTtcbnZhciBnZXRJdGVyYXRvckRpcmVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtaXRlcmF0b3ItZGlyZWN0Jyk7XG5cbnZhciBJTlZBTElEX1NJWkUgPSAnSW52YWxpZCBzaXplJztcbnZhciAkUmFuZ2VFcnJvciA9IFJhbmdlRXJyb3I7XG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcbnZhciBtYXggPSBNYXRoLm1heDtcblxudmFyIFNldFJlY29yZCA9IGZ1bmN0aW9uIChzZXQsIGludFNpemUpIHtcbiAgdGhpcy5zZXQgPSBzZXQ7XG4gIHRoaXMuc2l6ZSA9IG1heChpbnRTaXplLCAwKTtcbiAgdGhpcy5oYXMgPSBhQ2FsbGFibGUoc2V0Lmhhcyk7XG4gIHRoaXMua2V5cyA9IGFDYWxsYWJsZShzZXQua2V5cyk7XG59O1xuXG5TZXRSZWNvcmQucHJvdG90eXBlID0ge1xuICBnZXRJdGVyYXRvcjogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBnZXRJdGVyYXRvckRpcmVjdChhbk9iamVjdChjYWxsKHRoaXMua2V5cywgdGhpcy5zZXQpKSk7XG4gIH0sXG4gIGluY2x1ZGVzOiBmdW5jdGlvbiAoaXQpIHtcbiAgICByZXR1cm4gY2FsbCh0aGlzLmhhcywgdGhpcy5zZXQsIGl0KTtcbiAgfVxufTtcblxuLy8gYEdldFNldFJlY29yZGAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvcHJvcG9zYWwtc2V0LW1ldGhvZHMvI3NlYy1nZXRzZXRyZWNvcmRcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iaikge1xuICBhbk9iamVjdChvYmopO1xuICB2YXIgbnVtU2l6ZSA9ICtvYmouc2l6ZTtcbiAgLy8gTk9URTogSWYgc2l6ZSBpcyB1bmRlZmluZWQsIHRoZW4gbnVtU2l6ZSB3aWxsIGJlIE5hTlxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlIC0tIE5hTiBjaGVja1xuICBpZiAobnVtU2l6ZSAhPT0gbnVtU2l6ZSkgdGhyb3cgbmV3ICRUeXBlRXJyb3IoSU5WQUxJRF9TSVpFKTtcbiAgdmFyIGludFNpemUgPSB0b0ludGVnZXJPckluZmluaXR5KG51bVNpemUpO1xuICBpZiAoaW50U2l6ZSA8IDApIHRocm93IG5ldyAkUmFuZ2VFcnJvcihJTlZBTElEX1NJWkUpO1xuICByZXR1cm4gbmV3IFNldFJlY29yZChvYmosIGludFNpemUpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgYVNldCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hLXNldCcpO1xudmFyIFNldEhlbHBlcnMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2V0LWhlbHBlcnMnKTtcbnZhciBjbG9uZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zZXQtY2xvbmUnKTtcbnZhciBzaXplID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NldC1zaXplJyk7XG52YXIgZ2V0U2V0UmVjb3JkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1zZXQtcmVjb3JkJyk7XG52YXIgaXRlcmF0ZVNldCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zZXQtaXRlcmF0ZScpO1xudmFyIGl0ZXJhdGVTaW1wbGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXRlcmF0ZS1zaW1wbGUnKTtcblxudmFyIGhhcyA9IFNldEhlbHBlcnMuaGFzO1xudmFyIHJlbW92ZSA9IFNldEhlbHBlcnMucmVtb3ZlO1xuXG4vLyBgU2V0LnByb3RvdHlwZS5kaWZmZXJlbmNlYCBtZXRob2Rcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLXNldC1tZXRob2RzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGRpZmZlcmVuY2Uob3RoZXIpIHtcbiAgdmFyIE8gPSBhU2V0KHRoaXMpO1xuICB2YXIgb3RoZXJSZWMgPSBnZXRTZXRSZWNvcmQob3RoZXIpO1xuICB2YXIgcmVzdWx0ID0gY2xvbmUoTyk7XG4gIGlmIChzaXplKE8pIDw9IG90aGVyUmVjLnNpemUpIGl0ZXJhdGVTZXQoTywgZnVuY3Rpb24gKGUpIHtcbiAgICBpZiAob3RoZXJSZWMuaW5jbHVkZXMoZSkpIHJlbW92ZShyZXN1bHQsIGUpO1xuICB9KTtcbiAgZWxzZSBpdGVyYXRlU2ltcGxlKG90aGVyUmVjLmdldEl0ZXJhdG9yKCksIGZ1bmN0aW9uIChlKSB7XG4gICAgaWYgKGhhcyhPLCBlKSkgcmVtb3ZlKHJlc3VsdCwgZSk7XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2V0QnVpbHRJbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtYnVpbHQtaW4nKTtcblxudmFyIGNyZWF0ZVNldExpa2UgPSBmdW5jdGlvbiAoc2l6ZSkge1xuICByZXR1cm4ge1xuICAgIHNpemU6IHNpemUsXG4gICAgaGFzOiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSxcbiAgICBrZXlzOiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIHsgZG9uZTogdHJ1ZSB9O1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cbiAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgdmFyIFNldCA9IGdldEJ1aWx0SW4oJ1NldCcpO1xuICB0cnkge1xuICAgIG5ldyBTZXQoKVtuYW1lXShjcmVhdGVTZXRMaWtlKDApKTtcbiAgICB0cnkge1xuICAgICAgLy8gbGF0ZSBzcGVjIGNoYW5nZSwgZWFybHkgV2ViS2l0IH4gU2FmYXJpIDE3LjAgYmV0YSBpbXBsZW1lbnRhdGlvbiBkb2VzIG5vdCBwYXNzIGl0XG4gICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9wcm9wb3NhbC1zZXQtbWV0aG9kcy9wdWxsLzg4XG4gICAgICBuZXcgU2V0KClbbmFtZV0oY3JlYXRlU2V0TGlrZSgtMSkpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gY2F0Y2ggKGVycm9yMikge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBkaWZmZXJlbmNlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NldC1kaWZmZXJlbmNlJyk7XG52YXIgc2V0TWV0aG9kQWNjZXB0U2V0TGlrZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zZXQtbWV0aG9kLWFjY2VwdC1zZXQtbGlrZScpO1xuXG4vLyBgU2V0LnByb3RvdHlwZS5kaWZmZXJlbmNlYCBtZXRob2Rcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLXNldC1tZXRob2RzXG4kKHsgdGFyZ2V0OiAnU2V0JywgcHJvdG86IHRydWUsIHJlYWw6IHRydWUsIGZvcmNlZDogIXNldE1ldGhvZEFjY2VwdFNldExpa2UoJ2RpZmZlcmVuY2UnKSB9LCB7XG4gIGRpZmZlcmVuY2U6IGRpZmZlcmVuY2Vcbn0pO1xuIiwgIid1c2Ugc3RyaWN0Jztcbi8vIFRPRE86IFJlbW92ZSBmcm9tIGBjb3JlLWpzQDRgXG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzLnNldC5kaWZmZXJlbmNlLnYyJyk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGFTZXQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYS1zZXQnKTtcbnZhciBTZXRIZWxwZXJzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NldC1oZWxwZXJzJyk7XG52YXIgc2l6ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zZXQtc2l6ZScpO1xudmFyIGdldFNldFJlY29yZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtc2V0LXJlY29yZCcpO1xudmFyIGl0ZXJhdGVTZXQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2V0LWl0ZXJhdGUnKTtcbnZhciBpdGVyYXRlU2ltcGxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2l0ZXJhdGUtc2ltcGxlJyk7XG5cbnZhciBTZXQgPSBTZXRIZWxwZXJzLlNldDtcbnZhciBhZGQgPSBTZXRIZWxwZXJzLmFkZDtcbnZhciBoYXMgPSBTZXRIZWxwZXJzLmhhcztcblxuLy8gYFNldC5wcm90b3R5cGUuaW50ZXJzZWN0aW9uYCBtZXRob2Rcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLXNldC1tZXRob2RzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGludGVyc2VjdGlvbihvdGhlcikge1xuICB2YXIgTyA9IGFTZXQodGhpcyk7XG4gIHZhciBvdGhlclJlYyA9IGdldFNldFJlY29yZChvdGhlcik7XG4gIHZhciByZXN1bHQgPSBuZXcgU2V0KCk7XG5cbiAgaWYgKHNpemUoTykgPiBvdGhlclJlYy5zaXplKSB7XG4gICAgaXRlcmF0ZVNpbXBsZShvdGhlclJlYy5nZXRJdGVyYXRvcigpLCBmdW5jdGlvbiAoZSkge1xuICAgICAgaWYgKGhhcyhPLCBlKSkgYWRkKHJlc3VsdCwgZSk7XG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgaXRlcmF0ZVNldChPLCBmdW5jdGlvbiAoZSkge1xuICAgICAgaWYgKG90aGVyUmVjLmluY2x1ZGVzKGUpKSBhZGQocmVzdWx0LCBlKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgaW50ZXJzZWN0aW9uID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NldC1pbnRlcnNlY3Rpb24nKTtcbnZhciBzZXRNZXRob2RBY2NlcHRTZXRMaWtlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NldC1tZXRob2QtYWNjZXB0LXNldC1saWtlJyk7XG5cbnZhciBJTkNPUlJFQ1QgPSAhc2V0TWV0aG9kQWNjZXB0U2V0TGlrZSgnaW50ZXJzZWN0aW9uJykgfHwgZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tYXJyYXktZnJvbSwgZXMvbm8tc2V0IC0tIHRlc3RpbmdcbiAgcmV0dXJuIFN0cmluZyhBcnJheS5mcm9tKG5ldyBTZXQoWzEsIDIsIDNdKS5pbnRlcnNlY3Rpb24obmV3IFNldChbMywgMl0pKSkpICE9PSAnMywyJztcbn0pO1xuXG4vLyBgU2V0LnByb3RvdHlwZS5pbnRlcnNlY3Rpb25gIG1ldGhvZFxuLy8gaHR0cHM6Ly9naXRodWIuY29tL3RjMzkvcHJvcG9zYWwtc2V0LW1ldGhvZHNcbiQoeyB0YXJnZXQ6ICdTZXQnLCBwcm90bzogdHJ1ZSwgcmVhbDogdHJ1ZSwgZm9yY2VkOiBJTkNPUlJFQ1QgfSwge1xuICBpbnRlcnNlY3Rpb246IGludGVyc2VjdGlvblxufSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xuLy8gVE9ETzogUmVtb3ZlIGZyb20gYGNvcmUtanNANGBcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXMuc2V0LmludGVyc2VjdGlvbi52MicpO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBjYWxsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWNhbGwnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcbnZhciBnZXRNZXRob2QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LW1ldGhvZCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVyYXRvciwga2luZCwgdmFsdWUpIHtcbiAgdmFyIGlubmVyUmVzdWx0LCBpbm5lckVycm9yO1xuICBhbk9iamVjdChpdGVyYXRvcik7XG4gIHRyeSB7XG4gICAgaW5uZXJSZXN1bHQgPSBnZXRNZXRob2QoaXRlcmF0b3IsICdyZXR1cm4nKTtcbiAgICBpZiAoIWlubmVyUmVzdWx0KSB7XG4gICAgICBpZiAoa2luZCA9PT0gJ3Rocm93JykgdGhyb3cgdmFsdWU7XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuICAgIGlubmVyUmVzdWx0ID0gY2FsbChpbm5lclJlc3VsdCwgaXRlcmF0b3IpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGlubmVyRXJyb3IgPSB0cnVlO1xuICAgIGlubmVyUmVzdWx0ID0gZXJyb3I7XG4gIH1cbiAgaWYgKGtpbmQgPT09ICd0aHJvdycpIHRocm93IHZhbHVlO1xuICBpZiAoaW5uZXJFcnJvcikgdGhyb3cgaW5uZXJSZXN1bHQ7XG4gIGFuT2JqZWN0KGlubmVyUmVzdWx0KTtcbiAgcmV0dXJuIHZhbHVlO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgYVNldCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hLXNldCcpO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zZXQtaGVscGVycycpLmhhcztcbnZhciBzaXplID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NldC1zaXplJyk7XG52YXIgZ2V0U2V0UmVjb3JkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1zZXQtcmVjb3JkJyk7XG52YXIgaXRlcmF0ZVNldCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zZXQtaXRlcmF0ZScpO1xudmFyIGl0ZXJhdGVTaW1wbGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXRlcmF0ZS1zaW1wbGUnKTtcbnZhciBpdGVyYXRvckNsb3NlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2l0ZXJhdG9yLWNsb3NlJyk7XG5cbi8vIGBTZXQucHJvdG90eXBlLmlzRGlzam9pbnRGcm9tYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vcHJvcG9zYWwtc2V0LW1ldGhvZHMvI1NldC5wcm90b3R5cGUuaXNEaXNqb2ludEZyb21cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNEaXNqb2ludEZyb20ob3RoZXIpIHtcbiAgdmFyIE8gPSBhU2V0KHRoaXMpO1xuICB2YXIgb3RoZXJSZWMgPSBnZXRTZXRSZWNvcmQob3RoZXIpO1xuICBpZiAoc2l6ZShPKSA8PSBvdGhlclJlYy5zaXplKSByZXR1cm4gaXRlcmF0ZVNldChPLCBmdW5jdGlvbiAoZSkge1xuICAgIGlmIChvdGhlclJlYy5pbmNsdWRlcyhlKSkgcmV0dXJuIGZhbHNlO1xuICB9LCB0cnVlKSAhPT0gZmFsc2U7XG4gIHZhciBpdGVyYXRvciA9IG90aGVyUmVjLmdldEl0ZXJhdG9yKCk7XG4gIHJldHVybiBpdGVyYXRlU2ltcGxlKGl0ZXJhdG9yLCBmdW5jdGlvbiAoZSkge1xuICAgIGlmIChoYXMoTywgZSkpIHJldHVybiBpdGVyYXRvckNsb3NlKGl0ZXJhdG9yLCAnbm9ybWFsJywgZmFsc2UpO1xuICB9KSAhPT0gZmFsc2U7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIGlzRGlzam9pbnRGcm9tID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NldC1pcy1kaXNqb2ludC1mcm9tJyk7XG52YXIgc2V0TWV0aG9kQWNjZXB0U2V0TGlrZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zZXQtbWV0aG9kLWFjY2VwdC1zZXQtbGlrZScpO1xuXG4vLyBgU2V0LnByb3RvdHlwZS5pc0Rpc2pvaW50RnJvbWAgbWV0aG9kXG4vLyBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9wcm9wb3NhbC1zZXQtbWV0aG9kc1xuJCh7IHRhcmdldDogJ1NldCcsIHByb3RvOiB0cnVlLCByZWFsOiB0cnVlLCBmb3JjZWQ6ICFzZXRNZXRob2RBY2NlcHRTZXRMaWtlKCdpc0Rpc2pvaW50RnJvbScpIH0sIHtcbiAgaXNEaXNqb2ludEZyb206IGlzRGlzam9pbnRGcm9tXG59KTtcbiIsICIndXNlIHN0cmljdCc7XG4vLyBUT0RPOiBSZW1vdmUgZnJvbSBgY29yZS1qc0A0YFxucmVxdWlyZSgnLi4vbW9kdWxlcy9lcy5zZXQuaXMtZGlzam9pbnQtZnJvbS52MicpO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBhU2V0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Etc2V0Jyk7XG52YXIgc2l6ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zZXQtc2l6ZScpO1xudmFyIGl0ZXJhdGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2V0LWl0ZXJhdGUnKTtcbnZhciBnZXRTZXRSZWNvcmQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LXNldC1yZWNvcmQnKTtcblxuLy8gYFNldC5wcm90b3R5cGUuaXNTdWJzZXRPZmAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL3Byb3Bvc2FsLXNldC1tZXRob2RzLyNTZXQucHJvdG90eXBlLmlzU3Vic2V0T2Zcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNTdWJzZXRPZihvdGhlcikge1xuICB2YXIgTyA9IGFTZXQodGhpcyk7XG4gIHZhciBvdGhlclJlYyA9IGdldFNldFJlY29yZChvdGhlcik7XG4gIGlmIChzaXplKE8pID4gb3RoZXJSZWMuc2l6ZSkgcmV0dXJuIGZhbHNlO1xuICByZXR1cm4gaXRlcmF0ZShPLCBmdW5jdGlvbiAoZSkge1xuICAgIGlmICghb3RoZXJSZWMuaW5jbHVkZXMoZSkpIHJldHVybiBmYWxzZTtcbiAgfSwgdHJ1ZSkgIT09IGZhbHNlO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBpc1N1YnNldE9mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NldC1pcy1zdWJzZXQtb2YnKTtcbnZhciBzZXRNZXRob2RBY2NlcHRTZXRMaWtlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NldC1tZXRob2QtYWNjZXB0LXNldC1saWtlJyk7XG5cbi8vIGBTZXQucHJvdG90eXBlLmlzU3Vic2V0T2ZgIG1ldGhvZFxuLy8gaHR0cHM6Ly9naXRodWIuY29tL3RjMzkvcHJvcG9zYWwtc2V0LW1ldGhvZHNcbiQoeyB0YXJnZXQ6ICdTZXQnLCBwcm90bzogdHJ1ZSwgcmVhbDogdHJ1ZSwgZm9yY2VkOiAhc2V0TWV0aG9kQWNjZXB0U2V0TGlrZSgnaXNTdWJzZXRPZicpIH0sIHtcbiAgaXNTdWJzZXRPZjogaXNTdWJzZXRPZlxufSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xuLy8gVE9ETzogUmVtb3ZlIGZyb20gYGNvcmUtanNANGBcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXMuc2V0LmlzLXN1YnNldC1vZi52MicpO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBhU2V0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Etc2V0Jyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NldC1oZWxwZXJzJykuaGFzO1xudmFyIHNpemUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2V0LXNpemUnKTtcbnZhciBnZXRTZXRSZWNvcmQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LXNldC1yZWNvcmQnKTtcbnZhciBpdGVyYXRlU2ltcGxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2l0ZXJhdGUtc2ltcGxlJyk7XG52YXIgaXRlcmF0b3JDbG9zZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pdGVyYXRvci1jbG9zZScpO1xuXG4vLyBgU2V0LnByb3RvdHlwZS5pc1N1cGVyc2V0T2ZgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9wcm9wb3NhbC1zZXQtbWV0aG9kcy8jU2V0LnByb3RvdHlwZS5pc1N1cGVyc2V0T2Zcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNTdXBlcnNldE9mKG90aGVyKSB7XG4gIHZhciBPID0gYVNldCh0aGlzKTtcbiAgdmFyIG90aGVyUmVjID0gZ2V0U2V0UmVjb3JkKG90aGVyKTtcbiAgaWYgKHNpemUoTykgPCBvdGhlclJlYy5zaXplKSByZXR1cm4gZmFsc2U7XG4gIHZhciBpdGVyYXRvciA9IG90aGVyUmVjLmdldEl0ZXJhdG9yKCk7XG4gIHJldHVybiBpdGVyYXRlU2ltcGxlKGl0ZXJhdG9yLCBmdW5jdGlvbiAoZSkge1xuICAgIGlmICghaGFzKE8sIGUpKSByZXR1cm4gaXRlcmF0b3JDbG9zZShpdGVyYXRvciwgJ25vcm1hbCcsIGZhbHNlKTtcbiAgfSkgIT09IGZhbHNlO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBpc1N1cGVyc2V0T2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2V0LWlzLXN1cGVyc2V0LW9mJyk7XG52YXIgc2V0TWV0aG9kQWNjZXB0U2V0TGlrZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zZXQtbWV0aG9kLWFjY2VwdC1zZXQtbGlrZScpO1xuXG4vLyBgU2V0LnByb3RvdHlwZS5pc1N1cGVyc2V0T2ZgIG1ldGhvZFxuLy8gaHR0cHM6Ly9naXRodWIuY29tL3RjMzkvcHJvcG9zYWwtc2V0LW1ldGhvZHNcbiQoeyB0YXJnZXQ6ICdTZXQnLCBwcm90bzogdHJ1ZSwgcmVhbDogdHJ1ZSwgZm9yY2VkOiAhc2V0TWV0aG9kQWNjZXB0U2V0TGlrZSgnaXNTdXBlcnNldE9mJykgfSwge1xuICBpc1N1cGVyc2V0T2Y6IGlzU3VwZXJzZXRPZlxufSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xuLy8gVE9ETzogUmVtb3ZlIGZyb20gYGNvcmUtanNANGBcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXMuc2V0LmlzLXN1cGVyc2V0LW9mLnYyJyk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGFTZXQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYS1zZXQnKTtcbnZhciBTZXRIZWxwZXJzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NldC1oZWxwZXJzJyk7XG52YXIgY2xvbmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2V0LWNsb25lJyk7XG52YXIgZ2V0U2V0UmVjb3JkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1zZXQtcmVjb3JkJyk7XG52YXIgaXRlcmF0ZVNpbXBsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pdGVyYXRlLXNpbXBsZScpO1xuXG52YXIgYWRkID0gU2V0SGVscGVycy5hZGQ7XG52YXIgaGFzID0gU2V0SGVscGVycy5oYXM7XG52YXIgcmVtb3ZlID0gU2V0SGVscGVycy5yZW1vdmU7XG5cbi8vIGBTZXQucHJvdG90eXBlLnN5bW1ldHJpY0RpZmZlcmVuY2VgIG1ldGhvZFxuLy8gaHR0cHM6Ly9naXRodWIuY29tL3RjMzkvcHJvcG9zYWwtc2V0LW1ldGhvZHNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gc3ltbWV0cmljRGlmZmVyZW5jZShvdGhlcikge1xuICB2YXIgTyA9IGFTZXQodGhpcyk7XG4gIHZhciBrZXlzSXRlciA9IGdldFNldFJlY29yZChvdGhlcikuZ2V0SXRlcmF0b3IoKTtcbiAgdmFyIHJlc3VsdCA9IGNsb25lKE8pO1xuICBpdGVyYXRlU2ltcGxlKGtleXNJdGVyLCBmdW5jdGlvbiAoZSkge1xuICAgIGlmIChoYXMoTywgZSkpIHJlbW92ZShyZXN1bHQsIGUpO1xuICAgIGVsc2UgYWRkKHJlc3VsdCwgZSk7XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBzeW1tZXRyaWNEaWZmZXJlbmNlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NldC1zeW1tZXRyaWMtZGlmZmVyZW5jZScpO1xudmFyIHNldE1ldGhvZEFjY2VwdFNldExpa2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2V0LW1ldGhvZC1hY2NlcHQtc2V0LWxpa2UnKTtcblxuLy8gYFNldC5wcm90b3R5cGUuc3ltbWV0cmljRGlmZmVyZW5jZWAgbWV0aG9kXG4vLyBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9wcm9wb3NhbC1zZXQtbWV0aG9kc1xuJCh7IHRhcmdldDogJ1NldCcsIHByb3RvOiB0cnVlLCByZWFsOiB0cnVlLCBmb3JjZWQ6ICFzZXRNZXRob2RBY2NlcHRTZXRMaWtlKCdzeW1tZXRyaWNEaWZmZXJlbmNlJykgfSwge1xuICBzeW1tZXRyaWNEaWZmZXJlbmNlOiBzeW1tZXRyaWNEaWZmZXJlbmNlXG59KTtcbiIsICIndXNlIHN0cmljdCc7XG4vLyBUT0RPOiBSZW1vdmUgZnJvbSBgY29yZS1qc0A0YFxucmVxdWlyZSgnLi4vbW9kdWxlcy9lcy5zZXQuc3ltbWV0cmljLWRpZmZlcmVuY2UudjInKTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgYVNldCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hLXNldCcpO1xudmFyIGFkZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zZXQtaGVscGVycycpLmFkZDtcbnZhciBjbG9uZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zZXQtY2xvbmUnKTtcbnZhciBnZXRTZXRSZWNvcmQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LXNldC1yZWNvcmQnKTtcbnZhciBpdGVyYXRlU2ltcGxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2l0ZXJhdGUtc2ltcGxlJyk7XG5cbi8vIGBTZXQucHJvdG90eXBlLnVuaW9uYCBtZXRob2Rcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLXNldC1tZXRob2RzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHVuaW9uKG90aGVyKSB7XG4gIHZhciBPID0gYVNldCh0aGlzKTtcbiAgdmFyIGtleXNJdGVyID0gZ2V0U2V0UmVjb3JkKG90aGVyKS5nZXRJdGVyYXRvcigpO1xuICB2YXIgcmVzdWx0ID0gY2xvbmUoTyk7XG4gIGl0ZXJhdGVTaW1wbGUoa2V5c0l0ZXIsIGZ1bmN0aW9uIChpdCkge1xuICAgIGFkZChyZXN1bHQsIGl0KTtcbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIHVuaW9uID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NldC11bmlvbicpO1xudmFyIHNldE1ldGhvZEFjY2VwdFNldExpa2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2V0LW1ldGhvZC1hY2NlcHQtc2V0LWxpa2UnKTtcblxuLy8gYFNldC5wcm90b3R5cGUudW5pb25gIG1ldGhvZFxuLy8gaHR0cHM6Ly9naXRodWIuY29tL3RjMzkvcHJvcG9zYWwtc2V0LW1ldGhvZHNcbiQoeyB0YXJnZXQ6ICdTZXQnLCBwcm90bzogdHJ1ZSwgcmVhbDogdHJ1ZSwgZm9yY2VkOiAhc2V0TWV0aG9kQWNjZXB0U2V0TGlrZSgndW5pb24nKSB9LCB7XG4gIHVuaW9uOiB1bmlvblxufSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xuLy8gVE9ETzogUmVtb3ZlIGZyb20gYGNvcmUtanNANGBcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXMuc2V0LnVuaW9uLnYyJyk7XG4iLCAiaW1wb3J0ICd0aXBweS5qcy9kaXN0L3RpcHB5LmNzcyc7XG5cbmV4cG9ydCB7ZGVmYXVsdCBhcyB0aXBweX0gZnJvbSAndGlwcHkuanMnO1xuIiwgImV4cG9ydCB2YXIgdG9wID0gJ3RvcCc7XG5leHBvcnQgdmFyIGJvdHRvbSA9ICdib3R0b20nO1xuZXhwb3J0IHZhciByaWdodCA9ICdyaWdodCc7XG5leHBvcnQgdmFyIGxlZnQgPSAnbGVmdCc7XG5leHBvcnQgdmFyIGF1dG8gPSAnYXV0byc7XG5leHBvcnQgdmFyIGJhc2VQbGFjZW1lbnRzID0gW3RvcCwgYm90dG9tLCByaWdodCwgbGVmdF07XG5leHBvcnQgdmFyIHN0YXJ0ID0gJ3N0YXJ0JztcbmV4cG9ydCB2YXIgZW5kID0gJ2VuZCc7XG5leHBvcnQgdmFyIGNsaXBwaW5nUGFyZW50cyA9ICdjbGlwcGluZ1BhcmVudHMnO1xuZXhwb3J0IHZhciB2aWV3cG9ydCA9ICd2aWV3cG9ydCc7XG5leHBvcnQgdmFyIHBvcHBlciA9ICdwb3BwZXInO1xuZXhwb3J0IHZhciByZWZlcmVuY2UgPSAncmVmZXJlbmNlJztcbmV4cG9ydCB2YXIgdmFyaWF0aW9uUGxhY2VtZW50cyA9IC8qI19fUFVSRV9fKi9iYXNlUGxhY2VtZW50cy5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgcGxhY2VtZW50KSB7XG4gIHJldHVybiBhY2MuY29uY2F0KFtwbGFjZW1lbnQgKyBcIi1cIiArIHN0YXJ0LCBwbGFjZW1lbnQgKyBcIi1cIiArIGVuZF0pO1xufSwgW10pO1xuZXhwb3J0IHZhciBwbGFjZW1lbnRzID0gLyojX19QVVJFX18qL1tdLmNvbmNhdChiYXNlUGxhY2VtZW50cywgW2F1dG9dKS5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgcGxhY2VtZW50KSB7XG4gIHJldHVybiBhY2MuY29uY2F0KFtwbGFjZW1lbnQsIHBsYWNlbWVudCArIFwiLVwiICsgc3RhcnQsIHBsYWNlbWVudCArIFwiLVwiICsgZW5kXSk7XG59LCBbXSk7IC8vIG1vZGlmaWVycyB0aGF0IG5lZWQgdG8gcmVhZCB0aGUgRE9NXG5cbmV4cG9ydCB2YXIgYmVmb3JlUmVhZCA9ICdiZWZvcmVSZWFkJztcbmV4cG9ydCB2YXIgcmVhZCA9ICdyZWFkJztcbmV4cG9ydCB2YXIgYWZ0ZXJSZWFkID0gJ2FmdGVyUmVhZCc7IC8vIHB1cmUtbG9naWMgbW9kaWZpZXJzXG5cbmV4cG9ydCB2YXIgYmVmb3JlTWFpbiA9ICdiZWZvcmVNYWluJztcbmV4cG9ydCB2YXIgbWFpbiA9ICdtYWluJztcbmV4cG9ydCB2YXIgYWZ0ZXJNYWluID0gJ2FmdGVyTWFpbic7IC8vIG1vZGlmaWVyIHdpdGggdGhlIHB1cnBvc2UgdG8gd3JpdGUgdG8gdGhlIERPTSAob3Igd3JpdGUgaW50byBhIGZyYW1ld29yayBzdGF0ZSlcblxuZXhwb3J0IHZhciBiZWZvcmVXcml0ZSA9ICdiZWZvcmVXcml0ZSc7XG5leHBvcnQgdmFyIHdyaXRlID0gJ3dyaXRlJztcbmV4cG9ydCB2YXIgYWZ0ZXJXcml0ZSA9ICdhZnRlcldyaXRlJztcbmV4cG9ydCB2YXIgbW9kaWZpZXJQaGFzZXMgPSBbYmVmb3JlUmVhZCwgcmVhZCwgYWZ0ZXJSZWFkLCBiZWZvcmVNYWluLCBtYWluLCBhZnRlck1haW4sIGJlZm9yZVdyaXRlLCB3cml0ZSwgYWZ0ZXJXcml0ZV07IiwgImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldE5vZGVOYW1lKGVsZW1lbnQpIHtcbiAgcmV0dXJuIGVsZW1lbnQgPyAoZWxlbWVudC5ub2RlTmFtZSB8fCAnJykudG9Mb3dlckNhc2UoKSA6IG51bGw7XG59IiwgImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFdpbmRvdyhub2RlKSB7XG4gIGlmIChub2RlID09IG51bGwpIHtcbiAgICByZXR1cm4gd2luZG93O1xuICB9XG5cbiAgaWYgKG5vZGUudG9TdHJpbmcoKSAhPT0gJ1tvYmplY3QgV2luZG93XScpIHtcbiAgICB2YXIgb3duZXJEb2N1bWVudCA9IG5vZGUub3duZXJEb2N1bWVudDtcbiAgICByZXR1cm4gb3duZXJEb2N1bWVudCA/IG93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXcgfHwgd2luZG93IDogd2luZG93O1xuICB9XG5cbiAgcmV0dXJuIG5vZGU7XG59IiwgImltcG9ydCBnZXRXaW5kb3cgZnJvbSBcIi4vZ2V0V2luZG93LmpzXCI7XG5cbmZ1bmN0aW9uIGlzRWxlbWVudChub2RlKSB7XG4gIHZhciBPd25FbGVtZW50ID0gZ2V0V2luZG93KG5vZGUpLkVsZW1lbnQ7XG4gIHJldHVybiBub2RlIGluc3RhbmNlb2YgT3duRWxlbWVudCB8fCBub2RlIGluc3RhbmNlb2YgRWxlbWVudDtcbn1cblxuZnVuY3Rpb24gaXNIVE1MRWxlbWVudChub2RlKSB7XG4gIHZhciBPd25FbGVtZW50ID0gZ2V0V2luZG93KG5vZGUpLkhUTUxFbGVtZW50O1xuICByZXR1cm4gbm9kZSBpbnN0YW5jZW9mIE93bkVsZW1lbnQgfHwgbm9kZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50O1xufVxuXG5mdW5jdGlvbiBpc1NoYWRvd1Jvb3Qobm9kZSkge1xuICAvLyBJRSAxMSBoYXMgbm8gU2hhZG93Um9vdFxuICBpZiAodHlwZW9mIFNoYWRvd1Jvb3QgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIE93bkVsZW1lbnQgPSBnZXRXaW5kb3cobm9kZSkuU2hhZG93Um9vdDtcbiAgcmV0dXJuIG5vZGUgaW5zdGFuY2VvZiBPd25FbGVtZW50IHx8IG5vZGUgaW5zdGFuY2VvZiBTaGFkb3dSb290O1xufVxuXG5leHBvcnQgeyBpc0VsZW1lbnQsIGlzSFRNTEVsZW1lbnQsIGlzU2hhZG93Um9vdCB9OyIsICJpbXBvcnQgZ2V0Tm9kZU5hbWUgZnJvbSBcIi4uL2RvbS11dGlscy9nZXROb2RlTmFtZS5qc1wiO1xuaW1wb3J0IHsgaXNIVE1MRWxlbWVudCB9IGZyb20gXCIuLi9kb20tdXRpbHMvaW5zdGFuY2VPZi5qc1wiOyAvLyBUaGlzIG1vZGlmaWVyIHRha2VzIHRoZSBzdHlsZXMgcHJlcGFyZWQgYnkgdGhlIGBjb21wdXRlU3R5bGVzYCBtb2RpZmllclxuLy8gYW5kIGFwcGxpZXMgdGhlbSB0byB0aGUgSFRNTEVsZW1lbnRzIHN1Y2ggYXMgcG9wcGVyIGFuZCBhcnJvd1xuXG5mdW5jdGlvbiBhcHBseVN0eWxlcyhfcmVmKSB7XG4gIHZhciBzdGF0ZSA9IF9yZWYuc3RhdGU7XG4gIE9iamVjdC5rZXlzKHN0YXRlLmVsZW1lbnRzKS5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdmFyIHN0eWxlID0gc3RhdGUuc3R5bGVzW25hbWVdIHx8IHt9O1xuICAgIHZhciBhdHRyaWJ1dGVzID0gc3RhdGUuYXR0cmlidXRlc1tuYW1lXSB8fCB7fTtcbiAgICB2YXIgZWxlbWVudCA9IHN0YXRlLmVsZW1lbnRzW25hbWVdOyAvLyBhcnJvdyBpcyBvcHRpb25hbCArIHZpcnR1YWwgZWxlbWVudHNcblxuICAgIGlmICghaXNIVE1MRWxlbWVudChlbGVtZW50KSB8fCAhZ2V0Tm9kZU5hbWUoZWxlbWVudCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9IC8vIEZsb3cgZG9lc24ndCBzdXBwb3J0IHRvIGV4dGVuZCB0aGlzIHByb3BlcnR5LCBidXQgaXQncyB0aGUgbW9zdFxuICAgIC8vIGVmZmVjdGl2ZSB3YXkgdG8gYXBwbHkgc3R5bGVzIHRvIGFuIEhUTUxFbGVtZW50XG4gICAgLy8gJEZsb3dGaXhNZVtjYW5ub3Qtd3JpdGVdXG5cblxuICAgIE9iamVjdC5hc3NpZ24oZWxlbWVudC5zdHlsZSwgc3R5bGUpO1xuICAgIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgIHZhciB2YWx1ZSA9IGF0dHJpYnV0ZXNbbmFtZV07XG5cbiAgICAgIGlmICh2YWx1ZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUobmFtZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSA9PT0gdHJ1ZSA/ICcnIDogdmFsdWUpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZWZmZWN0KF9yZWYyKSB7XG4gIHZhciBzdGF0ZSA9IF9yZWYyLnN0YXRlO1xuICB2YXIgaW5pdGlhbFN0eWxlcyA9IHtcbiAgICBwb3BwZXI6IHtcbiAgICAgIHBvc2l0aW9uOiBzdGF0ZS5vcHRpb25zLnN0cmF0ZWd5LFxuICAgICAgbGVmdDogJzAnLFxuICAgICAgdG9wOiAnMCcsXG4gICAgICBtYXJnaW46ICcwJ1xuICAgIH0sXG4gICAgYXJyb3c6IHtcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnXG4gICAgfSxcbiAgICByZWZlcmVuY2U6IHt9XG4gIH07XG4gIE9iamVjdC5hc3NpZ24oc3RhdGUuZWxlbWVudHMucG9wcGVyLnN0eWxlLCBpbml0aWFsU3R5bGVzLnBvcHBlcik7XG4gIHN0YXRlLnN0eWxlcyA9IGluaXRpYWxTdHlsZXM7XG5cbiAgaWYgKHN0YXRlLmVsZW1lbnRzLmFycm93KSB7XG4gICAgT2JqZWN0LmFzc2lnbihzdGF0ZS5lbGVtZW50cy5hcnJvdy5zdHlsZSwgaW5pdGlhbFN0eWxlcy5hcnJvdyk7XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIE9iamVjdC5rZXlzKHN0YXRlLmVsZW1lbnRzKS5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICB2YXIgZWxlbWVudCA9IHN0YXRlLmVsZW1lbnRzW25hbWVdO1xuICAgICAgdmFyIGF0dHJpYnV0ZXMgPSBzdGF0ZS5hdHRyaWJ1dGVzW25hbWVdIHx8IHt9O1xuICAgICAgdmFyIHN0eWxlUHJvcGVydGllcyA9IE9iamVjdC5rZXlzKHN0YXRlLnN0eWxlcy5oYXNPd25Qcm9wZXJ0eShuYW1lKSA/IHN0YXRlLnN0eWxlc1tuYW1lXSA6IGluaXRpYWxTdHlsZXNbbmFtZV0pOyAvLyBTZXQgYWxsIHZhbHVlcyB0byBhbiBlbXB0eSBzdHJpbmcgdG8gdW5zZXQgdGhlbVxuXG4gICAgICB2YXIgc3R5bGUgPSBzdHlsZVByb3BlcnRpZXMucmVkdWNlKGZ1bmN0aW9uIChzdHlsZSwgcHJvcGVydHkpIHtcbiAgICAgICAgc3R5bGVbcHJvcGVydHldID0gJyc7XG4gICAgICAgIHJldHVybiBzdHlsZTtcbiAgICAgIH0sIHt9KTsgLy8gYXJyb3cgaXMgb3B0aW9uYWwgKyB2aXJ0dWFsIGVsZW1lbnRzXG5cbiAgICAgIGlmICghaXNIVE1MRWxlbWVudChlbGVtZW50KSB8fCAhZ2V0Tm9kZU5hbWUoZWxlbWVudCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBPYmplY3QuYXNzaWduKGVsZW1lbnQuc3R5bGUsIHN0eWxlKTtcbiAgICAgIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGF0dHJpYnV0ZSkge1xuICAgICAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShhdHRyaWJ1dGUpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG59IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdhcHBseVN0eWxlcycsXG4gIGVuYWJsZWQ6IHRydWUsXG4gIHBoYXNlOiAnd3JpdGUnLFxuICBmbjogYXBwbHlTdHlsZXMsXG4gIGVmZmVjdDogZWZmZWN0LFxuICByZXF1aXJlczogWydjb21wdXRlU3R5bGVzJ11cbn07IiwgImltcG9ydCB7IGF1dG8gfSBmcm9tIFwiLi4vZW51bXMuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldEJhc2VQbGFjZW1lbnQocGxhY2VtZW50KSB7XG4gIHJldHVybiBwbGFjZW1lbnQuc3BsaXQoJy0nKVswXTtcbn0iLCAiZXhwb3J0IHZhciBtYXggPSBNYXRoLm1heDtcbmV4cG9ydCB2YXIgbWluID0gTWF0aC5taW47XG5leHBvcnQgdmFyIHJvdW5kID0gTWF0aC5yb3VuZDsiLCAiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VUFTdHJpbmcoKSB7XG4gIHZhciB1YURhdGEgPSBuYXZpZ2F0b3IudXNlckFnZW50RGF0YTtcblxuICBpZiAodWFEYXRhICE9IG51bGwgJiYgdWFEYXRhLmJyYW5kcyAmJiBBcnJheS5pc0FycmF5KHVhRGF0YS5icmFuZHMpKSB7XG4gICAgcmV0dXJuIHVhRGF0YS5icmFuZHMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICByZXR1cm4gaXRlbS5icmFuZCArIFwiL1wiICsgaXRlbS52ZXJzaW9uO1xuICAgIH0pLmpvaW4oJyAnKTtcbiAgfVxuXG4gIHJldHVybiBuYXZpZ2F0b3IudXNlckFnZW50O1xufSIsICJpbXBvcnQgZ2V0VUFTdHJpbmcgZnJvbSBcIi4uL3V0aWxzL3VzZXJBZ2VudC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNMYXlvdXRWaWV3cG9ydCgpIHtcbiAgcmV0dXJuICEvXigoPyFjaHJvbWV8YW5kcm9pZCkuKSpzYWZhcmkvaS50ZXN0KGdldFVBU3RyaW5nKCkpO1xufSIsICJpbXBvcnQgeyBpc0VsZW1lbnQsIGlzSFRNTEVsZW1lbnQgfSBmcm9tIFwiLi9pbnN0YW5jZU9mLmpzXCI7XG5pbXBvcnQgeyByb3VuZCB9IGZyb20gXCIuLi91dGlscy9tYXRoLmpzXCI7XG5pbXBvcnQgZ2V0V2luZG93IGZyb20gXCIuL2dldFdpbmRvdy5qc1wiO1xuaW1wb3J0IGlzTGF5b3V0Vmlld3BvcnQgZnJvbSBcIi4vaXNMYXlvdXRWaWV3cG9ydC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KGVsZW1lbnQsIGluY2x1ZGVTY2FsZSwgaXNGaXhlZFN0cmF0ZWd5KSB7XG4gIGlmIChpbmNsdWRlU2NhbGUgPT09IHZvaWQgMCkge1xuICAgIGluY2x1ZGVTY2FsZSA9IGZhbHNlO1xuICB9XG5cbiAgaWYgKGlzRml4ZWRTdHJhdGVneSA9PT0gdm9pZCAwKSB7XG4gICAgaXNGaXhlZFN0cmF0ZWd5ID0gZmFsc2U7XG4gIH1cblxuICB2YXIgY2xpZW50UmVjdCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gIHZhciBzY2FsZVggPSAxO1xuICB2YXIgc2NhbGVZID0gMTtcblxuICBpZiAoaW5jbHVkZVNjYWxlICYmIGlzSFRNTEVsZW1lbnQoZWxlbWVudCkpIHtcbiAgICBzY2FsZVggPSBlbGVtZW50Lm9mZnNldFdpZHRoID4gMCA/IHJvdW5kKGNsaWVudFJlY3Qud2lkdGgpIC8gZWxlbWVudC5vZmZzZXRXaWR0aCB8fCAxIDogMTtcbiAgICBzY2FsZVkgPSBlbGVtZW50Lm9mZnNldEhlaWdodCA+IDAgPyByb3VuZChjbGllbnRSZWN0LmhlaWdodCkgLyBlbGVtZW50Lm9mZnNldEhlaWdodCB8fCAxIDogMTtcbiAgfVxuXG4gIHZhciBfcmVmID0gaXNFbGVtZW50KGVsZW1lbnQpID8gZ2V0V2luZG93KGVsZW1lbnQpIDogd2luZG93LFxuICAgICAgdmlzdWFsVmlld3BvcnQgPSBfcmVmLnZpc3VhbFZpZXdwb3J0O1xuXG4gIHZhciBhZGRWaXN1YWxPZmZzZXRzID0gIWlzTGF5b3V0Vmlld3BvcnQoKSAmJiBpc0ZpeGVkU3RyYXRlZ3k7XG4gIHZhciB4ID0gKGNsaWVudFJlY3QubGVmdCArIChhZGRWaXN1YWxPZmZzZXRzICYmIHZpc3VhbFZpZXdwb3J0ID8gdmlzdWFsVmlld3BvcnQub2Zmc2V0TGVmdCA6IDApKSAvIHNjYWxlWDtcbiAgdmFyIHkgPSAoY2xpZW50UmVjdC50b3AgKyAoYWRkVmlzdWFsT2Zmc2V0cyAmJiB2aXN1YWxWaWV3cG9ydCA/IHZpc3VhbFZpZXdwb3J0Lm9mZnNldFRvcCA6IDApKSAvIHNjYWxlWTtcbiAgdmFyIHdpZHRoID0gY2xpZW50UmVjdC53aWR0aCAvIHNjYWxlWDtcbiAgdmFyIGhlaWdodCA9IGNsaWVudFJlY3QuaGVpZ2h0IC8gc2NhbGVZO1xuICByZXR1cm4ge1xuICAgIHdpZHRoOiB3aWR0aCxcbiAgICBoZWlnaHQ6IGhlaWdodCxcbiAgICB0b3A6IHksXG4gICAgcmlnaHQ6IHggKyB3aWR0aCxcbiAgICBib3R0b206IHkgKyBoZWlnaHQsXG4gICAgbGVmdDogeCxcbiAgICB4OiB4LFxuICAgIHk6IHlcbiAgfTtcbn0iLCAiaW1wb3J0IGdldEJvdW5kaW5nQ2xpZW50UmVjdCBmcm9tIFwiLi9nZXRCb3VuZGluZ0NsaWVudFJlY3QuanNcIjsgLy8gUmV0dXJucyB0aGUgbGF5b3V0IHJlY3Qgb2YgYW4gZWxlbWVudCByZWxhdGl2ZSB0byBpdHMgb2Zmc2V0UGFyZW50LiBMYXlvdXRcbi8vIG1lYW5zIGl0IGRvZXNuJ3QgdGFrZSBpbnRvIGFjY291bnQgdHJhbnNmb3Jtcy5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0TGF5b3V0UmVjdChlbGVtZW50KSB7XG4gIHZhciBjbGllbnRSZWN0ID0gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KGVsZW1lbnQpOyAvLyBVc2UgdGhlIGNsaWVudFJlY3Qgc2l6ZXMgaWYgaXQncyBub3QgYmVlbiB0cmFuc2Zvcm1lZC5cbiAgLy8gRml4ZXMgaHR0cHM6Ly9naXRodWIuY29tL3BvcHBlcmpzL3BvcHBlci1jb3JlL2lzc3Vlcy8xMjIzXG5cbiAgdmFyIHdpZHRoID0gZWxlbWVudC5vZmZzZXRXaWR0aDtcbiAgdmFyIGhlaWdodCA9IGVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xuXG4gIGlmIChNYXRoLmFicyhjbGllbnRSZWN0LndpZHRoIC0gd2lkdGgpIDw9IDEpIHtcbiAgICB3aWR0aCA9IGNsaWVudFJlY3Qud2lkdGg7XG4gIH1cblxuICBpZiAoTWF0aC5hYnMoY2xpZW50UmVjdC5oZWlnaHQgLSBoZWlnaHQpIDw9IDEpIHtcbiAgICBoZWlnaHQgPSBjbGllbnRSZWN0LmhlaWdodDtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgeDogZWxlbWVudC5vZmZzZXRMZWZ0LFxuICAgIHk6IGVsZW1lbnQub2Zmc2V0VG9wLFxuICAgIHdpZHRoOiB3aWR0aCxcbiAgICBoZWlnaHQ6IGhlaWdodFxuICB9O1xufSIsICJpbXBvcnQgeyBpc1NoYWRvd1Jvb3QgfSBmcm9tIFwiLi9pbnN0YW5jZU9mLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb250YWlucyhwYXJlbnQsIGNoaWxkKSB7XG4gIHZhciByb290Tm9kZSA9IGNoaWxkLmdldFJvb3ROb2RlICYmIGNoaWxkLmdldFJvb3ROb2RlKCk7IC8vIEZpcnN0LCBhdHRlbXB0IHdpdGggZmFzdGVyIG5hdGl2ZSBtZXRob2RcblxuICBpZiAocGFyZW50LmNvbnRhaW5zKGNoaWxkKSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9IC8vIHRoZW4gZmFsbGJhY2sgdG8gY3VzdG9tIGltcGxlbWVudGF0aW9uIHdpdGggU2hhZG93IERPTSBzdXBwb3J0XG4gIGVsc2UgaWYgKHJvb3ROb2RlICYmIGlzU2hhZG93Um9vdChyb290Tm9kZSkpIHtcbiAgICAgIHZhciBuZXh0ID0gY2hpbGQ7XG5cbiAgICAgIGRvIHtcbiAgICAgICAgaWYgKG5leHQgJiYgcGFyZW50LmlzU2FtZU5vZGUobmV4dCkpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSAvLyAkRmxvd0ZpeE1lW3Byb3AtbWlzc2luZ106IG5lZWQgYSBiZXR0ZXIgd2F5IHRvIGhhbmRsZSB0aGlzLi4uXG5cblxuICAgICAgICBuZXh0ID0gbmV4dC5wYXJlbnROb2RlIHx8IG5leHQuaG9zdDtcbiAgICAgIH0gd2hpbGUgKG5leHQpO1xuICAgIH0gLy8gR2l2ZSB1cCwgdGhlIHJlc3VsdCBpcyBmYWxzZVxuXG5cbiAgcmV0dXJuIGZhbHNlO1xufSIsICJpbXBvcnQgZ2V0V2luZG93IGZyb20gXCIuL2dldFdpbmRvdy5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KSB7XG4gIHJldHVybiBnZXRXaW5kb3coZWxlbWVudCkuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KTtcbn0iLCAiaW1wb3J0IGdldE5vZGVOYW1lIGZyb20gXCIuL2dldE5vZGVOYW1lLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1RhYmxlRWxlbWVudChlbGVtZW50KSB7XG4gIHJldHVybiBbJ3RhYmxlJywgJ3RkJywgJ3RoJ10uaW5kZXhPZihnZXROb2RlTmFtZShlbGVtZW50KSkgPj0gMDtcbn0iLCAiaW1wb3J0IHsgaXNFbGVtZW50IH0gZnJvbSBcIi4vaW5zdGFuY2VPZi5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0RG9jdW1lbnRFbGVtZW50KGVsZW1lbnQpIHtcbiAgLy8gJEZsb3dGaXhNZVtpbmNvbXBhdGlibGUtcmV0dXJuXTogYXNzdW1lIGJvZHkgaXMgYWx3YXlzIGF2YWlsYWJsZVxuICByZXR1cm4gKChpc0VsZW1lbnQoZWxlbWVudCkgPyBlbGVtZW50Lm93bmVyRG9jdW1lbnQgOiAvLyAkRmxvd0ZpeE1lW3Byb3AtbWlzc2luZ11cbiAgZWxlbWVudC5kb2N1bWVudCkgfHwgd2luZG93LmRvY3VtZW50KS5kb2N1bWVudEVsZW1lbnQ7XG59IiwgImltcG9ydCBnZXROb2RlTmFtZSBmcm9tIFwiLi9nZXROb2RlTmFtZS5qc1wiO1xuaW1wb3J0IGdldERvY3VtZW50RWxlbWVudCBmcm9tIFwiLi9nZXREb2N1bWVudEVsZW1lbnQuanNcIjtcbmltcG9ydCB7IGlzU2hhZG93Um9vdCB9IGZyb20gXCIuL2luc3RhbmNlT2YuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFBhcmVudE5vZGUoZWxlbWVudCkge1xuICBpZiAoZ2V0Tm9kZU5hbWUoZWxlbWVudCkgPT09ICdodG1sJykge1xuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG5cbiAgcmV0dXJuICgvLyB0aGlzIGlzIGEgcXVpY2tlciAoYnV0IGxlc3MgdHlwZSBzYWZlKSB3YXkgdG8gc2F2ZSBxdWl0ZSBzb21lIGJ5dGVzIGZyb20gdGhlIGJ1bmRsZVxuICAgIC8vICRGbG93Rml4TWVbaW5jb21wYXRpYmxlLXJldHVybl1cbiAgICAvLyAkRmxvd0ZpeE1lW3Byb3AtbWlzc2luZ11cbiAgICBlbGVtZW50LmFzc2lnbmVkU2xvdCB8fCAvLyBzdGVwIGludG8gdGhlIHNoYWRvdyBET00gb2YgdGhlIHBhcmVudCBvZiBhIHNsb3R0ZWQgbm9kZVxuICAgIGVsZW1lbnQucGFyZW50Tm9kZSB8fCAoIC8vIERPTSBFbGVtZW50IGRldGVjdGVkXG4gICAgaXNTaGFkb3dSb290KGVsZW1lbnQpID8gZWxlbWVudC5ob3N0IDogbnVsbCkgfHwgLy8gU2hhZG93Um9vdCBkZXRlY3RlZFxuICAgIC8vICRGbG93Rml4TWVbaW5jb21wYXRpYmxlLWNhbGxdOiBIVE1MRWxlbWVudCBpcyBhIE5vZGVcbiAgICBnZXREb2N1bWVudEVsZW1lbnQoZWxlbWVudCkgLy8gZmFsbGJhY2tcblxuICApO1xufSIsICJpbXBvcnQgZ2V0V2luZG93IGZyb20gXCIuL2dldFdpbmRvdy5qc1wiO1xuaW1wb3J0IGdldE5vZGVOYW1lIGZyb20gXCIuL2dldE5vZGVOYW1lLmpzXCI7XG5pbXBvcnQgZ2V0Q29tcHV0ZWRTdHlsZSBmcm9tIFwiLi9nZXRDb21wdXRlZFN0eWxlLmpzXCI7XG5pbXBvcnQgeyBpc0hUTUxFbGVtZW50LCBpc1NoYWRvd1Jvb3QgfSBmcm9tIFwiLi9pbnN0YW5jZU9mLmpzXCI7XG5pbXBvcnQgaXNUYWJsZUVsZW1lbnQgZnJvbSBcIi4vaXNUYWJsZUVsZW1lbnQuanNcIjtcbmltcG9ydCBnZXRQYXJlbnROb2RlIGZyb20gXCIuL2dldFBhcmVudE5vZGUuanNcIjtcbmltcG9ydCBnZXRVQVN0cmluZyBmcm9tIFwiLi4vdXRpbHMvdXNlckFnZW50LmpzXCI7XG5cbmZ1bmN0aW9uIGdldFRydWVPZmZzZXRQYXJlbnQoZWxlbWVudCkge1xuICBpZiAoIWlzSFRNTEVsZW1lbnQoZWxlbWVudCkgfHwgLy8gaHR0cHM6Ly9naXRodWIuY29tL3BvcHBlcmpzL3BvcHBlci1jb3JlL2lzc3Vlcy84MzdcbiAgZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KS5wb3NpdGlvbiA9PT0gJ2ZpeGVkJykge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnQub2Zmc2V0UGFyZW50O1xufSAvLyBgLm9mZnNldFBhcmVudGAgcmVwb3J0cyBgbnVsbGAgZm9yIGZpeGVkIGVsZW1lbnRzLCB3aGlsZSBhYnNvbHV0ZSBlbGVtZW50c1xuLy8gcmV0dXJuIHRoZSBjb250YWluaW5nIGJsb2NrXG5cblxuZnVuY3Rpb24gZ2V0Q29udGFpbmluZ0Jsb2NrKGVsZW1lbnQpIHtcbiAgdmFyIGlzRmlyZWZveCA9IC9maXJlZm94L2kudGVzdChnZXRVQVN0cmluZygpKTtcbiAgdmFyIGlzSUUgPSAvVHJpZGVudC9pLnRlc3QoZ2V0VUFTdHJpbmcoKSk7XG5cbiAgaWYgKGlzSUUgJiYgaXNIVE1MRWxlbWVudChlbGVtZW50KSkge1xuICAgIC8vIEluIElFIDksIDEwIGFuZCAxMSBmaXhlZCBlbGVtZW50cyBjb250YWluaW5nIGJsb2NrIGlzIGFsd2F5cyBlc3RhYmxpc2hlZCBieSB0aGUgdmlld3BvcnRcbiAgICB2YXIgZWxlbWVudENzcyA9IGdldENvbXB1dGVkU3R5bGUoZWxlbWVudCk7XG5cbiAgICBpZiAoZWxlbWVudENzcy5wb3NpdGlvbiA9PT0gJ2ZpeGVkJykge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG5cbiAgdmFyIGN1cnJlbnROb2RlID0gZ2V0UGFyZW50Tm9kZShlbGVtZW50KTtcblxuICBpZiAoaXNTaGFkb3dSb290KGN1cnJlbnROb2RlKSkge1xuICAgIGN1cnJlbnROb2RlID0gY3VycmVudE5vZGUuaG9zdDtcbiAgfVxuXG4gIHdoaWxlIChpc0hUTUxFbGVtZW50KGN1cnJlbnROb2RlKSAmJiBbJ2h0bWwnLCAnYm9keSddLmluZGV4T2YoZ2V0Tm9kZU5hbWUoY3VycmVudE5vZGUpKSA8IDApIHtcbiAgICB2YXIgY3NzID0gZ2V0Q29tcHV0ZWRTdHlsZShjdXJyZW50Tm9kZSk7IC8vIFRoaXMgaXMgbm9uLWV4aGF1c3RpdmUgYnV0IGNvdmVycyB0aGUgbW9zdCBjb21tb24gQ1NTIHByb3BlcnRpZXMgdGhhdFxuICAgIC8vIGNyZWF0ZSBhIGNvbnRhaW5pbmcgYmxvY2suXG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL0NvbnRhaW5pbmdfYmxvY2sjaWRlbnRpZnlpbmdfdGhlX2NvbnRhaW5pbmdfYmxvY2tcblxuICAgIGlmIChjc3MudHJhbnNmb3JtICE9PSAnbm9uZScgfHwgY3NzLnBlcnNwZWN0aXZlICE9PSAnbm9uZScgfHwgY3NzLmNvbnRhaW4gPT09ICdwYWludCcgfHwgWyd0cmFuc2Zvcm0nLCAncGVyc3BlY3RpdmUnXS5pbmRleE9mKGNzcy53aWxsQ2hhbmdlKSAhPT0gLTEgfHwgaXNGaXJlZm94ICYmIGNzcy53aWxsQ2hhbmdlID09PSAnZmlsdGVyJyB8fCBpc0ZpcmVmb3ggJiYgY3NzLmZpbHRlciAmJiBjc3MuZmlsdGVyICE9PSAnbm9uZScpIHtcbiAgICAgIHJldHVybiBjdXJyZW50Tm9kZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY3VycmVudE5vZGUgPSBjdXJyZW50Tm9kZS5wYXJlbnROb2RlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBudWxsO1xufSAvLyBHZXRzIHRoZSBjbG9zZXN0IGFuY2VzdG9yIHBvc2l0aW9uZWQgZWxlbWVudC4gSGFuZGxlcyBzb21lIGVkZ2UgY2FzZXMsXG4vLyBzdWNoIGFzIHRhYmxlIGFuY2VzdG9ycyBhbmQgY3Jvc3MgYnJvd3NlciBidWdzLlxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldE9mZnNldFBhcmVudChlbGVtZW50KSB7XG4gIHZhciB3aW5kb3cgPSBnZXRXaW5kb3coZWxlbWVudCk7XG4gIHZhciBvZmZzZXRQYXJlbnQgPSBnZXRUcnVlT2Zmc2V0UGFyZW50KGVsZW1lbnQpO1xuXG4gIHdoaWxlIChvZmZzZXRQYXJlbnQgJiYgaXNUYWJsZUVsZW1lbnQob2Zmc2V0UGFyZW50KSAmJiBnZXRDb21wdXRlZFN0eWxlKG9mZnNldFBhcmVudCkucG9zaXRpb24gPT09ICdzdGF0aWMnKSB7XG4gICAgb2Zmc2V0UGFyZW50ID0gZ2V0VHJ1ZU9mZnNldFBhcmVudChvZmZzZXRQYXJlbnQpO1xuICB9XG5cbiAgaWYgKG9mZnNldFBhcmVudCAmJiAoZ2V0Tm9kZU5hbWUob2Zmc2V0UGFyZW50KSA9PT0gJ2h0bWwnIHx8IGdldE5vZGVOYW1lKG9mZnNldFBhcmVudCkgPT09ICdib2R5JyAmJiBnZXRDb21wdXRlZFN0eWxlKG9mZnNldFBhcmVudCkucG9zaXRpb24gPT09ICdzdGF0aWMnKSkge1xuICAgIHJldHVybiB3aW5kb3c7XG4gIH1cblxuICByZXR1cm4gb2Zmc2V0UGFyZW50IHx8IGdldENvbnRhaW5pbmdCbG9jayhlbGVtZW50KSB8fCB3aW5kb3c7XG59IiwgImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldE1haW5BeGlzRnJvbVBsYWNlbWVudChwbGFjZW1lbnQpIHtcbiAgcmV0dXJuIFsndG9wJywgJ2JvdHRvbSddLmluZGV4T2YocGxhY2VtZW50KSA+PSAwID8gJ3gnIDogJ3knO1xufSIsICJpbXBvcnQgeyBtYXggYXMgbWF0aE1heCwgbWluIGFzIG1hdGhNaW4gfSBmcm9tIFwiLi9tYXRoLmpzXCI7XG5leHBvcnQgZnVuY3Rpb24gd2l0aGluKG1pbiwgdmFsdWUsIG1heCkge1xuICByZXR1cm4gbWF0aE1heChtaW4sIG1hdGhNaW4odmFsdWUsIG1heCkpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHdpdGhpbk1heENsYW1wKG1pbiwgdmFsdWUsIG1heCkge1xuICB2YXIgdiA9IHdpdGhpbihtaW4sIHZhbHVlLCBtYXgpO1xuICByZXR1cm4gdiA+IG1heCA/IG1heCA6IHY7XG59IiwgImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldEZyZXNoU2lkZU9iamVjdCgpIHtcbiAgcmV0dXJuIHtcbiAgICB0b3A6IDAsXG4gICAgcmlnaHQ6IDAsXG4gICAgYm90dG9tOiAwLFxuICAgIGxlZnQ6IDBcbiAgfTtcbn0iLCAiaW1wb3J0IGdldEZyZXNoU2lkZU9iamVjdCBmcm9tIFwiLi9nZXRGcmVzaFNpZGVPYmplY3QuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1lcmdlUGFkZGluZ09iamVjdChwYWRkaW5nT2JqZWN0KSB7XG4gIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBnZXRGcmVzaFNpZGVPYmplY3QoKSwgcGFkZGluZ09iamVjdCk7XG59IiwgImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGV4cGFuZFRvSGFzaE1hcCh2YWx1ZSwga2V5cykge1xuICByZXR1cm4ga2V5cy5yZWR1Y2UoZnVuY3Rpb24gKGhhc2hNYXAsIGtleSkge1xuICAgIGhhc2hNYXBba2V5XSA9IHZhbHVlO1xuICAgIHJldHVybiBoYXNoTWFwO1xuICB9LCB7fSk7XG59IiwgImltcG9ydCBnZXRCYXNlUGxhY2VtZW50IGZyb20gXCIuLi91dGlscy9nZXRCYXNlUGxhY2VtZW50LmpzXCI7XG5pbXBvcnQgZ2V0TGF5b3V0UmVjdCBmcm9tIFwiLi4vZG9tLXV0aWxzL2dldExheW91dFJlY3QuanNcIjtcbmltcG9ydCBjb250YWlucyBmcm9tIFwiLi4vZG9tLXV0aWxzL2NvbnRhaW5zLmpzXCI7XG5pbXBvcnQgZ2V0T2Zmc2V0UGFyZW50IGZyb20gXCIuLi9kb20tdXRpbHMvZ2V0T2Zmc2V0UGFyZW50LmpzXCI7XG5pbXBvcnQgZ2V0TWFpbkF4aXNGcm9tUGxhY2VtZW50IGZyb20gXCIuLi91dGlscy9nZXRNYWluQXhpc0Zyb21QbGFjZW1lbnQuanNcIjtcbmltcG9ydCB7IHdpdGhpbiB9IGZyb20gXCIuLi91dGlscy93aXRoaW4uanNcIjtcbmltcG9ydCBtZXJnZVBhZGRpbmdPYmplY3QgZnJvbSBcIi4uL3V0aWxzL21lcmdlUGFkZGluZ09iamVjdC5qc1wiO1xuaW1wb3J0IGV4cGFuZFRvSGFzaE1hcCBmcm9tIFwiLi4vdXRpbHMvZXhwYW5kVG9IYXNoTWFwLmpzXCI7XG5pbXBvcnQgeyBsZWZ0LCByaWdodCwgYmFzZVBsYWNlbWVudHMsIHRvcCwgYm90dG9tIH0gZnJvbSBcIi4uL2VudW1zLmpzXCI7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxudmFyIHRvUGFkZGluZ09iamVjdCA9IGZ1bmN0aW9uIHRvUGFkZGluZ09iamVjdChwYWRkaW5nLCBzdGF0ZSkge1xuICBwYWRkaW5nID0gdHlwZW9mIHBhZGRpbmcgPT09ICdmdW5jdGlvbicgPyBwYWRkaW5nKE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLnJlY3RzLCB7XG4gICAgcGxhY2VtZW50OiBzdGF0ZS5wbGFjZW1lbnRcbiAgfSkpIDogcGFkZGluZztcbiAgcmV0dXJuIG1lcmdlUGFkZGluZ09iamVjdCh0eXBlb2YgcGFkZGluZyAhPT0gJ251bWJlcicgPyBwYWRkaW5nIDogZXhwYW5kVG9IYXNoTWFwKHBhZGRpbmcsIGJhc2VQbGFjZW1lbnRzKSk7XG59O1xuXG5mdW5jdGlvbiBhcnJvdyhfcmVmKSB7XG4gIHZhciBfc3RhdGUkbW9kaWZpZXJzRGF0YSQ7XG5cbiAgdmFyIHN0YXRlID0gX3JlZi5zdGF0ZSxcbiAgICAgIG5hbWUgPSBfcmVmLm5hbWUsXG4gICAgICBvcHRpb25zID0gX3JlZi5vcHRpb25zO1xuICB2YXIgYXJyb3dFbGVtZW50ID0gc3RhdGUuZWxlbWVudHMuYXJyb3c7XG4gIHZhciBwb3BwZXJPZmZzZXRzID0gc3RhdGUubW9kaWZpZXJzRGF0YS5wb3BwZXJPZmZzZXRzO1xuICB2YXIgYmFzZVBsYWNlbWVudCA9IGdldEJhc2VQbGFjZW1lbnQoc3RhdGUucGxhY2VtZW50KTtcbiAgdmFyIGF4aXMgPSBnZXRNYWluQXhpc0Zyb21QbGFjZW1lbnQoYmFzZVBsYWNlbWVudCk7XG4gIHZhciBpc1ZlcnRpY2FsID0gW2xlZnQsIHJpZ2h0XS5pbmRleE9mKGJhc2VQbGFjZW1lbnQpID49IDA7XG4gIHZhciBsZW4gPSBpc1ZlcnRpY2FsID8gJ2hlaWdodCcgOiAnd2lkdGgnO1xuXG4gIGlmICghYXJyb3dFbGVtZW50IHx8ICFwb3BwZXJPZmZzZXRzKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIHBhZGRpbmdPYmplY3QgPSB0b1BhZGRpbmdPYmplY3Qob3B0aW9ucy5wYWRkaW5nLCBzdGF0ZSk7XG4gIHZhciBhcnJvd1JlY3QgPSBnZXRMYXlvdXRSZWN0KGFycm93RWxlbWVudCk7XG4gIHZhciBtaW5Qcm9wID0gYXhpcyA9PT0gJ3knID8gdG9wIDogbGVmdDtcbiAgdmFyIG1heFByb3AgPSBheGlzID09PSAneScgPyBib3R0b20gOiByaWdodDtcbiAgdmFyIGVuZERpZmYgPSBzdGF0ZS5yZWN0cy5yZWZlcmVuY2VbbGVuXSArIHN0YXRlLnJlY3RzLnJlZmVyZW5jZVtheGlzXSAtIHBvcHBlck9mZnNldHNbYXhpc10gLSBzdGF0ZS5yZWN0cy5wb3BwZXJbbGVuXTtcbiAgdmFyIHN0YXJ0RGlmZiA9IHBvcHBlck9mZnNldHNbYXhpc10gLSBzdGF0ZS5yZWN0cy5yZWZlcmVuY2VbYXhpc107XG4gIHZhciBhcnJvd09mZnNldFBhcmVudCA9IGdldE9mZnNldFBhcmVudChhcnJvd0VsZW1lbnQpO1xuICB2YXIgY2xpZW50U2l6ZSA9IGFycm93T2Zmc2V0UGFyZW50ID8gYXhpcyA9PT0gJ3knID8gYXJyb3dPZmZzZXRQYXJlbnQuY2xpZW50SGVpZ2h0IHx8IDAgOiBhcnJvd09mZnNldFBhcmVudC5jbGllbnRXaWR0aCB8fCAwIDogMDtcbiAgdmFyIGNlbnRlclRvUmVmZXJlbmNlID0gZW5kRGlmZiAvIDIgLSBzdGFydERpZmYgLyAyOyAvLyBNYWtlIHN1cmUgdGhlIGFycm93IGRvZXNuJ3Qgb3ZlcmZsb3cgdGhlIHBvcHBlciBpZiB0aGUgY2VudGVyIHBvaW50IGlzXG4gIC8vIG91dHNpZGUgb2YgdGhlIHBvcHBlciBib3VuZHNcblxuICB2YXIgbWluID0gcGFkZGluZ09iamVjdFttaW5Qcm9wXTtcbiAgdmFyIG1heCA9IGNsaWVudFNpemUgLSBhcnJvd1JlY3RbbGVuXSAtIHBhZGRpbmdPYmplY3RbbWF4UHJvcF07XG4gIHZhciBjZW50ZXIgPSBjbGllbnRTaXplIC8gMiAtIGFycm93UmVjdFtsZW5dIC8gMiArIGNlbnRlclRvUmVmZXJlbmNlO1xuICB2YXIgb2Zmc2V0ID0gd2l0aGluKG1pbiwgY2VudGVyLCBtYXgpOyAvLyBQcmV2ZW50cyBicmVha2luZyBzeW50YXggaGlnaGxpZ2h0aW5nLi4uXG5cbiAgdmFyIGF4aXNQcm9wID0gYXhpcztcbiAgc3RhdGUubW9kaWZpZXJzRGF0YVtuYW1lXSA9IChfc3RhdGUkbW9kaWZpZXJzRGF0YSQgPSB7fSwgX3N0YXRlJG1vZGlmaWVyc0RhdGEkW2F4aXNQcm9wXSA9IG9mZnNldCwgX3N0YXRlJG1vZGlmaWVyc0RhdGEkLmNlbnRlck9mZnNldCA9IG9mZnNldCAtIGNlbnRlciwgX3N0YXRlJG1vZGlmaWVyc0RhdGEkKTtcbn1cblxuZnVuY3Rpb24gZWZmZWN0KF9yZWYyKSB7XG4gIHZhciBzdGF0ZSA9IF9yZWYyLnN0YXRlLFxuICAgICAgb3B0aW9ucyA9IF9yZWYyLm9wdGlvbnM7XG4gIHZhciBfb3B0aW9ucyRlbGVtZW50ID0gb3B0aW9ucy5lbGVtZW50LFxuICAgICAgYXJyb3dFbGVtZW50ID0gX29wdGlvbnMkZWxlbWVudCA9PT0gdm9pZCAwID8gJ1tkYXRhLXBvcHBlci1hcnJvd10nIDogX29wdGlvbnMkZWxlbWVudDtcblxuICBpZiAoYXJyb3dFbGVtZW50ID09IG51bGwpIHtcbiAgICByZXR1cm47XG4gIH0gLy8gQ1NTIHNlbGVjdG9yXG5cblxuICBpZiAodHlwZW9mIGFycm93RWxlbWVudCA9PT0gJ3N0cmluZycpIHtcbiAgICBhcnJvd0VsZW1lbnQgPSBzdGF0ZS5lbGVtZW50cy5wb3BwZXIucXVlcnlTZWxlY3RvcihhcnJvd0VsZW1lbnQpO1xuXG4gICAgaWYgKCFhcnJvd0VsZW1lbnQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cblxuICBpZiAoIWNvbnRhaW5zKHN0YXRlLmVsZW1lbnRzLnBvcHBlciwgYXJyb3dFbGVtZW50KSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHN0YXRlLmVsZW1lbnRzLmFycm93ID0gYXJyb3dFbGVtZW50O1xufSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnYXJyb3cnLFxuICBlbmFibGVkOiB0cnVlLFxuICBwaGFzZTogJ21haW4nLFxuICBmbjogYXJyb3csXG4gIGVmZmVjdDogZWZmZWN0LFxuICByZXF1aXJlczogWydwb3BwZXJPZmZzZXRzJ10sXG4gIHJlcXVpcmVzSWZFeGlzdHM6IFsncHJldmVudE92ZXJmbG93J11cbn07IiwgImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFZhcmlhdGlvbihwbGFjZW1lbnQpIHtcbiAgcmV0dXJuIHBsYWNlbWVudC5zcGxpdCgnLScpWzFdO1xufSIsICJpbXBvcnQgeyB0b3AsIGxlZnQsIHJpZ2h0LCBib3R0b20sIGVuZCB9IGZyb20gXCIuLi9lbnVtcy5qc1wiO1xuaW1wb3J0IGdldE9mZnNldFBhcmVudCBmcm9tIFwiLi4vZG9tLXV0aWxzL2dldE9mZnNldFBhcmVudC5qc1wiO1xuaW1wb3J0IGdldFdpbmRvdyBmcm9tIFwiLi4vZG9tLXV0aWxzL2dldFdpbmRvdy5qc1wiO1xuaW1wb3J0IGdldERvY3VtZW50RWxlbWVudCBmcm9tIFwiLi4vZG9tLXV0aWxzL2dldERvY3VtZW50RWxlbWVudC5qc1wiO1xuaW1wb3J0IGdldENvbXB1dGVkU3R5bGUgZnJvbSBcIi4uL2RvbS11dGlscy9nZXRDb21wdXRlZFN0eWxlLmpzXCI7XG5pbXBvcnQgZ2V0QmFzZVBsYWNlbWVudCBmcm9tIFwiLi4vdXRpbHMvZ2V0QmFzZVBsYWNlbWVudC5qc1wiO1xuaW1wb3J0IGdldFZhcmlhdGlvbiBmcm9tIFwiLi4vdXRpbHMvZ2V0VmFyaWF0aW9uLmpzXCI7XG5pbXBvcnQgeyByb3VuZCB9IGZyb20gXCIuLi91dGlscy9tYXRoLmpzXCI7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxudmFyIHVuc2V0U2lkZXMgPSB7XG4gIHRvcDogJ2F1dG8nLFxuICByaWdodDogJ2F1dG8nLFxuICBib3R0b206ICdhdXRvJyxcbiAgbGVmdDogJ2F1dG8nXG59OyAvLyBSb3VuZCB0aGUgb2Zmc2V0cyB0byB0aGUgbmVhcmVzdCBzdWl0YWJsZSBzdWJwaXhlbCBiYXNlZCBvbiB0aGUgRFBSLlxuLy8gWm9vbWluZyBjYW4gY2hhbmdlIHRoZSBEUFIsIGJ1dCBpdCBzZWVtcyB0byByZXBvcnQgYSB2YWx1ZSB0aGF0IHdpbGxcbi8vIGNsZWFubHkgZGl2aWRlIHRoZSB2YWx1ZXMgaW50byB0aGUgYXBwcm9wcmlhdGUgc3VicGl4ZWxzLlxuXG5mdW5jdGlvbiByb3VuZE9mZnNldHNCeURQUihfcmVmLCB3aW4pIHtcbiAgdmFyIHggPSBfcmVmLngsXG4gICAgICB5ID0gX3JlZi55O1xuICB2YXIgZHByID0gd2luLmRldmljZVBpeGVsUmF0aW8gfHwgMTtcbiAgcmV0dXJuIHtcbiAgICB4OiByb3VuZCh4ICogZHByKSAvIGRwciB8fCAwLFxuICAgIHk6IHJvdW5kKHkgKiBkcHIpIC8gZHByIHx8IDBcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1hcFRvU3R5bGVzKF9yZWYyKSB7XG4gIHZhciBfT2JqZWN0JGFzc2lnbjI7XG5cbiAgdmFyIHBvcHBlciA9IF9yZWYyLnBvcHBlcixcbiAgICAgIHBvcHBlclJlY3QgPSBfcmVmMi5wb3BwZXJSZWN0LFxuICAgICAgcGxhY2VtZW50ID0gX3JlZjIucGxhY2VtZW50LFxuICAgICAgdmFyaWF0aW9uID0gX3JlZjIudmFyaWF0aW9uLFxuICAgICAgb2Zmc2V0cyA9IF9yZWYyLm9mZnNldHMsXG4gICAgICBwb3NpdGlvbiA9IF9yZWYyLnBvc2l0aW9uLFxuICAgICAgZ3B1QWNjZWxlcmF0aW9uID0gX3JlZjIuZ3B1QWNjZWxlcmF0aW9uLFxuICAgICAgYWRhcHRpdmUgPSBfcmVmMi5hZGFwdGl2ZSxcbiAgICAgIHJvdW5kT2Zmc2V0cyA9IF9yZWYyLnJvdW5kT2Zmc2V0cyxcbiAgICAgIGlzRml4ZWQgPSBfcmVmMi5pc0ZpeGVkO1xuICB2YXIgX29mZnNldHMkeCA9IG9mZnNldHMueCxcbiAgICAgIHggPSBfb2Zmc2V0cyR4ID09PSB2b2lkIDAgPyAwIDogX29mZnNldHMkeCxcbiAgICAgIF9vZmZzZXRzJHkgPSBvZmZzZXRzLnksXG4gICAgICB5ID0gX29mZnNldHMkeSA9PT0gdm9pZCAwID8gMCA6IF9vZmZzZXRzJHk7XG5cbiAgdmFyIF9yZWYzID0gdHlwZW9mIHJvdW5kT2Zmc2V0cyA9PT0gJ2Z1bmN0aW9uJyA/IHJvdW5kT2Zmc2V0cyh7XG4gICAgeDogeCxcbiAgICB5OiB5XG4gIH0pIDoge1xuICAgIHg6IHgsXG4gICAgeTogeVxuICB9O1xuXG4gIHggPSBfcmVmMy54O1xuICB5ID0gX3JlZjMueTtcbiAgdmFyIGhhc1ggPSBvZmZzZXRzLmhhc093blByb3BlcnR5KCd4Jyk7XG4gIHZhciBoYXNZID0gb2Zmc2V0cy5oYXNPd25Qcm9wZXJ0eSgneScpO1xuICB2YXIgc2lkZVggPSBsZWZ0O1xuICB2YXIgc2lkZVkgPSB0b3A7XG4gIHZhciB3aW4gPSB3aW5kb3c7XG5cbiAgaWYgKGFkYXB0aXZlKSB7XG4gICAgdmFyIG9mZnNldFBhcmVudCA9IGdldE9mZnNldFBhcmVudChwb3BwZXIpO1xuICAgIHZhciBoZWlnaHRQcm9wID0gJ2NsaWVudEhlaWdodCc7XG4gICAgdmFyIHdpZHRoUHJvcCA9ICdjbGllbnRXaWR0aCc7XG5cbiAgICBpZiAob2Zmc2V0UGFyZW50ID09PSBnZXRXaW5kb3cocG9wcGVyKSkge1xuICAgICAgb2Zmc2V0UGFyZW50ID0gZ2V0RG9jdW1lbnRFbGVtZW50KHBvcHBlcik7XG5cbiAgICAgIGlmIChnZXRDb21wdXRlZFN0eWxlKG9mZnNldFBhcmVudCkucG9zaXRpb24gIT09ICdzdGF0aWMnICYmIHBvc2l0aW9uID09PSAnYWJzb2x1dGUnKSB7XG4gICAgICAgIGhlaWdodFByb3AgPSAnc2Nyb2xsSGVpZ2h0JztcbiAgICAgICAgd2lkdGhQcm9wID0gJ3Njcm9sbFdpZHRoJztcbiAgICAgIH1cbiAgICB9IC8vICRGbG93Rml4TWVbaW5jb21wYXRpYmxlLWNhc3RdOiBmb3JjZSB0eXBlIHJlZmluZW1lbnQsIHdlIGNvbXBhcmUgb2Zmc2V0UGFyZW50IHdpdGggd2luZG93IGFib3ZlLCBidXQgRmxvdyBkb2Vzbid0IGRldGVjdCBpdFxuXG5cbiAgICBvZmZzZXRQYXJlbnQgPSBvZmZzZXRQYXJlbnQ7XG5cbiAgICBpZiAocGxhY2VtZW50ID09PSB0b3AgfHwgKHBsYWNlbWVudCA9PT0gbGVmdCB8fCBwbGFjZW1lbnQgPT09IHJpZ2h0KSAmJiB2YXJpYXRpb24gPT09IGVuZCkge1xuICAgICAgc2lkZVkgPSBib3R0b207XG4gICAgICB2YXIgb2Zmc2V0WSA9IGlzRml4ZWQgJiYgb2Zmc2V0UGFyZW50ID09PSB3aW4gJiYgd2luLnZpc3VhbFZpZXdwb3J0ID8gd2luLnZpc3VhbFZpZXdwb3J0LmhlaWdodCA6IC8vICRGbG93Rml4TWVbcHJvcC1taXNzaW5nXVxuICAgICAgb2Zmc2V0UGFyZW50W2hlaWdodFByb3BdO1xuICAgICAgeSAtPSBvZmZzZXRZIC0gcG9wcGVyUmVjdC5oZWlnaHQ7XG4gICAgICB5ICo9IGdwdUFjY2VsZXJhdGlvbiA/IDEgOiAtMTtcbiAgICB9XG5cbiAgICBpZiAocGxhY2VtZW50ID09PSBsZWZ0IHx8IChwbGFjZW1lbnQgPT09IHRvcCB8fCBwbGFjZW1lbnQgPT09IGJvdHRvbSkgJiYgdmFyaWF0aW9uID09PSBlbmQpIHtcbiAgICAgIHNpZGVYID0gcmlnaHQ7XG4gICAgICB2YXIgb2Zmc2V0WCA9IGlzRml4ZWQgJiYgb2Zmc2V0UGFyZW50ID09PSB3aW4gJiYgd2luLnZpc3VhbFZpZXdwb3J0ID8gd2luLnZpc3VhbFZpZXdwb3J0LndpZHRoIDogLy8gJEZsb3dGaXhNZVtwcm9wLW1pc3NpbmddXG4gICAgICBvZmZzZXRQYXJlbnRbd2lkdGhQcm9wXTtcbiAgICAgIHggLT0gb2Zmc2V0WCAtIHBvcHBlclJlY3Qud2lkdGg7XG4gICAgICB4ICo9IGdwdUFjY2VsZXJhdGlvbiA/IDEgOiAtMTtcbiAgICB9XG4gIH1cblxuICB2YXIgY29tbW9uU3R5bGVzID0gT2JqZWN0LmFzc2lnbih7XG4gICAgcG9zaXRpb246IHBvc2l0aW9uXG4gIH0sIGFkYXB0aXZlICYmIHVuc2V0U2lkZXMpO1xuXG4gIHZhciBfcmVmNCA9IHJvdW5kT2Zmc2V0cyA9PT0gdHJ1ZSA/IHJvdW5kT2Zmc2V0c0J5RFBSKHtcbiAgICB4OiB4LFxuICAgIHk6IHlcbiAgfSwgZ2V0V2luZG93KHBvcHBlcikpIDoge1xuICAgIHg6IHgsXG4gICAgeTogeVxuICB9O1xuXG4gIHggPSBfcmVmNC54O1xuICB5ID0gX3JlZjQueTtcblxuICBpZiAoZ3B1QWNjZWxlcmF0aW9uKSB7XG4gICAgdmFyIF9PYmplY3QkYXNzaWduO1xuXG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIGNvbW1vblN0eWxlcywgKF9PYmplY3QkYXNzaWduID0ge30sIF9PYmplY3QkYXNzaWduW3NpZGVZXSA9IGhhc1kgPyAnMCcgOiAnJywgX09iamVjdCRhc3NpZ25bc2lkZVhdID0gaGFzWCA/ICcwJyA6ICcnLCBfT2JqZWN0JGFzc2lnbi50cmFuc2Zvcm0gPSAod2luLmRldmljZVBpeGVsUmF0aW8gfHwgMSkgPD0gMSA/IFwidHJhbnNsYXRlKFwiICsgeCArIFwicHgsIFwiICsgeSArIFwicHgpXCIgOiBcInRyYW5zbGF0ZTNkKFwiICsgeCArIFwicHgsIFwiICsgeSArIFwicHgsIDApXCIsIF9PYmplY3QkYXNzaWduKSk7XG4gIH1cblxuICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgY29tbW9uU3R5bGVzLCAoX09iamVjdCRhc3NpZ24yID0ge30sIF9PYmplY3QkYXNzaWduMltzaWRlWV0gPSBoYXNZID8geSArIFwicHhcIiA6ICcnLCBfT2JqZWN0JGFzc2lnbjJbc2lkZVhdID0gaGFzWCA/IHggKyBcInB4XCIgOiAnJywgX09iamVjdCRhc3NpZ24yLnRyYW5zZm9ybSA9ICcnLCBfT2JqZWN0JGFzc2lnbjIpKTtcbn1cblxuZnVuY3Rpb24gY29tcHV0ZVN0eWxlcyhfcmVmNSkge1xuICB2YXIgc3RhdGUgPSBfcmVmNS5zdGF0ZSxcbiAgICAgIG9wdGlvbnMgPSBfcmVmNS5vcHRpb25zO1xuICB2YXIgX29wdGlvbnMkZ3B1QWNjZWxlcmF0ID0gb3B0aW9ucy5ncHVBY2NlbGVyYXRpb24sXG4gICAgICBncHVBY2NlbGVyYXRpb24gPSBfb3B0aW9ucyRncHVBY2NlbGVyYXQgPT09IHZvaWQgMCA/IHRydWUgOiBfb3B0aW9ucyRncHVBY2NlbGVyYXQsXG4gICAgICBfb3B0aW9ucyRhZGFwdGl2ZSA9IG9wdGlvbnMuYWRhcHRpdmUsXG4gICAgICBhZGFwdGl2ZSA9IF9vcHRpb25zJGFkYXB0aXZlID09PSB2b2lkIDAgPyB0cnVlIDogX29wdGlvbnMkYWRhcHRpdmUsXG4gICAgICBfb3B0aW9ucyRyb3VuZE9mZnNldHMgPSBvcHRpb25zLnJvdW5kT2Zmc2V0cyxcbiAgICAgIHJvdW5kT2Zmc2V0cyA9IF9vcHRpb25zJHJvdW5kT2Zmc2V0cyA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9vcHRpb25zJHJvdW5kT2Zmc2V0cztcbiAgdmFyIGNvbW1vblN0eWxlcyA9IHtcbiAgICBwbGFjZW1lbnQ6IGdldEJhc2VQbGFjZW1lbnQoc3RhdGUucGxhY2VtZW50KSxcbiAgICB2YXJpYXRpb246IGdldFZhcmlhdGlvbihzdGF0ZS5wbGFjZW1lbnQpLFxuICAgIHBvcHBlcjogc3RhdGUuZWxlbWVudHMucG9wcGVyLFxuICAgIHBvcHBlclJlY3Q6IHN0YXRlLnJlY3RzLnBvcHBlcixcbiAgICBncHVBY2NlbGVyYXRpb246IGdwdUFjY2VsZXJhdGlvbixcbiAgICBpc0ZpeGVkOiBzdGF0ZS5vcHRpb25zLnN0cmF0ZWd5ID09PSAnZml4ZWQnXG4gIH07XG5cbiAgaWYgKHN0YXRlLm1vZGlmaWVyc0RhdGEucG9wcGVyT2Zmc2V0cyAhPSBudWxsKSB7XG4gICAgc3RhdGUuc3R5bGVzLnBvcHBlciA9IE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLnN0eWxlcy5wb3BwZXIsIG1hcFRvU3R5bGVzKE9iamVjdC5hc3NpZ24oe30sIGNvbW1vblN0eWxlcywge1xuICAgICAgb2Zmc2V0czogc3RhdGUubW9kaWZpZXJzRGF0YS5wb3BwZXJPZmZzZXRzLFxuICAgICAgcG9zaXRpb246IHN0YXRlLm9wdGlvbnMuc3RyYXRlZ3ksXG4gICAgICBhZGFwdGl2ZTogYWRhcHRpdmUsXG4gICAgICByb3VuZE9mZnNldHM6IHJvdW5kT2Zmc2V0c1xuICAgIH0pKSk7XG4gIH1cblxuICBpZiAoc3RhdGUubW9kaWZpZXJzRGF0YS5hcnJvdyAhPSBudWxsKSB7XG4gICAgc3RhdGUuc3R5bGVzLmFycm93ID0gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUuc3R5bGVzLmFycm93LCBtYXBUb1N0eWxlcyhPYmplY3QuYXNzaWduKHt9LCBjb21tb25TdHlsZXMsIHtcbiAgICAgIG9mZnNldHM6IHN0YXRlLm1vZGlmaWVyc0RhdGEuYXJyb3csXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIGFkYXB0aXZlOiBmYWxzZSxcbiAgICAgIHJvdW5kT2Zmc2V0czogcm91bmRPZmZzZXRzXG4gICAgfSkpKTtcbiAgfVxuXG4gIHN0YXRlLmF0dHJpYnV0ZXMucG9wcGVyID0gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUuYXR0cmlidXRlcy5wb3BwZXIsIHtcbiAgICAnZGF0YS1wb3BwZXItcGxhY2VtZW50Jzogc3RhdGUucGxhY2VtZW50XG4gIH0pO1xufSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnY29tcHV0ZVN0eWxlcycsXG4gIGVuYWJsZWQ6IHRydWUsXG4gIHBoYXNlOiAnYmVmb3JlV3JpdGUnLFxuICBmbjogY29tcHV0ZVN0eWxlcyxcbiAgZGF0YToge31cbn07IiwgImltcG9ydCBnZXRXaW5kb3cgZnJvbSBcIi4uL2RvbS11dGlscy9nZXRXaW5kb3cuanNcIjsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG52YXIgcGFzc2l2ZSA9IHtcbiAgcGFzc2l2ZTogdHJ1ZVxufTtcblxuZnVuY3Rpb24gZWZmZWN0KF9yZWYpIHtcbiAgdmFyIHN0YXRlID0gX3JlZi5zdGF0ZSxcbiAgICAgIGluc3RhbmNlID0gX3JlZi5pbnN0YW5jZSxcbiAgICAgIG9wdGlvbnMgPSBfcmVmLm9wdGlvbnM7XG4gIHZhciBfb3B0aW9ucyRzY3JvbGwgPSBvcHRpb25zLnNjcm9sbCxcbiAgICAgIHNjcm9sbCA9IF9vcHRpb25zJHNjcm9sbCA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9vcHRpb25zJHNjcm9sbCxcbiAgICAgIF9vcHRpb25zJHJlc2l6ZSA9IG9wdGlvbnMucmVzaXplLFxuICAgICAgcmVzaXplID0gX29wdGlvbnMkcmVzaXplID09PSB2b2lkIDAgPyB0cnVlIDogX29wdGlvbnMkcmVzaXplO1xuICB2YXIgd2luZG93ID0gZ2V0V2luZG93KHN0YXRlLmVsZW1lbnRzLnBvcHBlcik7XG4gIHZhciBzY3JvbGxQYXJlbnRzID0gW10uY29uY2F0KHN0YXRlLnNjcm9sbFBhcmVudHMucmVmZXJlbmNlLCBzdGF0ZS5zY3JvbGxQYXJlbnRzLnBvcHBlcik7XG5cbiAgaWYgKHNjcm9sbCkge1xuICAgIHNjcm9sbFBhcmVudHMuZm9yRWFjaChmdW5jdGlvbiAoc2Nyb2xsUGFyZW50KSB7XG4gICAgICBzY3JvbGxQYXJlbnQuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaW5zdGFuY2UudXBkYXRlLCBwYXNzaXZlKTtcbiAgICB9KTtcbiAgfVxuXG4gIGlmIChyZXNpemUpIHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaW5zdGFuY2UudXBkYXRlLCBwYXNzaXZlKTtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHNjcm9sbCkge1xuICAgICAgc2Nyb2xsUGFyZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChzY3JvbGxQYXJlbnQpIHtcbiAgICAgICAgc2Nyb2xsUGFyZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGluc3RhbmNlLnVwZGF0ZSwgcGFzc2l2ZSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAocmVzaXplKSB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaW5zdGFuY2UudXBkYXRlLCBwYXNzaXZlKTtcbiAgICB9XG4gIH07XG59IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdldmVudExpc3RlbmVycycsXG4gIGVuYWJsZWQ6IHRydWUsXG4gIHBoYXNlOiAnd3JpdGUnLFxuICBmbjogZnVuY3Rpb24gZm4oKSB7fSxcbiAgZWZmZWN0OiBlZmZlY3QsXG4gIGRhdGE6IHt9XG59OyIsICJ2YXIgaGFzaCA9IHtcbiAgbGVmdDogJ3JpZ2h0JyxcbiAgcmlnaHQ6ICdsZWZ0JyxcbiAgYm90dG9tOiAndG9wJyxcbiAgdG9wOiAnYm90dG9tJ1xufTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldE9wcG9zaXRlUGxhY2VtZW50KHBsYWNlbWVudCkge1xuICByZXR1cm4gcGxhY2VtZW50LnJlcGxhY2UoL2xlZnR8cmlnaHR8Ym90dG9tfHRvcC9nLCBmdW5jdGlvbiAobWF0Y2hlZCkge1xuICAgIHJldHVybiBoYXNoW21hdGNoZWRdO1xuICB9KTtcbn0iLCAidmFyIGhhc2ggPSB7XG4gIHN0YXJ0OiAnZW5kJyxcbiAgZW5kOiAnc3RhcnQnXG59O1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0T3Bwb3NpdGVWYXJpYXRpb25QbGFjZW1lbnQocGxhY2VtZW50KSB7XG4gIHJldHVybiBwbGFjZW1lbnQucmVwbGFjZSgvc3RhcnR8ZW5kL2csIGZ1bmN0aW9uIChtYXRjaGVkKSB7XG4gICAgcmV0dXJuIGhhc2hbbWF0Y2hlZF07XG4gIH0pO1xufSIsICJpbXBvcnQgZ2V0V2luZG93IGZyb20gXCIuL2dldFdpbmRvdy5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0V2luZG93U2Nyb2xsKG5vZGUpIHtcbiAgdmFyIHdpbiA9IGdldFdpbmRvdyhub2RlKTtcbiAgdmFyIHNjcm9sbExlZnQgPSB3aW4ucGFnZVhPZmZzZXQ7XG4gIHZhciBzY3JvbGxUb3AgPSB3aW4ucGFnZVlPZmZzZXQ7XG4gIHJldHVybiB7XG4gICAgc2Nyb2xsTGVmdDogc2Nyb2xsTGVmdCxcbiAgICBzY3JvbGxUb3A6IHNjcm9sbFRvcFxuICB9O1xufSIsICJpbXBvcnQgZ2V0Qm91bmRpbmdDbGllbnRSZWN0IGZyb20gXCIuL2dldEJvdW5kaW5nQ2xpZW50UmVjdC5qc1wiO1xuaW1wb3J0IGdldERvY3VtZW50RWxlbWVudCBmcm9tIFwiLi9nZXREb2N1bWVudEVsZW1lbnQuanNcIjtcbmltcG9ydCBnZXRXaW5kb3dTY3JvbGwgZnJvbSBcIi4vZ2V0V2luZG93U2Nyb2xsLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRXaW5kb3dTY3JvbGxCYXJYKGVsZW1lbnQpIHtcbiAgLy8gSWYgPGh0bWw+IGhhcyBhIENTUyB3aWR0aCBncmVhdGVyIHRoYW4gdGhlIHZpZXdwb3J0LCB0aGVuIHRoaXMgd2lsbCBiZVxuICAvLyBpbmNvcnJlY3QgZm9yIFJUTC5cbiAgLy8gUG9wcGVyIDEgaXMgYnJva2VuIGluIHRoaXMgY2FzZSBhbmQgbmV2ZXIgaGFkIGEgYnVnIHJlcG9ydCBzbyBsZXQncyBhc3N1bWVcbiAgLy8gaXQncyBub3QgYW4gaXNzdWUuIEkgZG9uJ3QgdGhpbmsgYW55b25lIGV2ZXIgc3BlY2lmaWVzIHdpZHRoIG9uIDxodG1sPlxuICAvLyBhbnl3YXkuXG4gIC8vIEJyb3dzZXJzIHdoZXJlIHRoZSBsZWZ0IHNjcm9sbGJhciBkb2Vzbid0IGNhdXNlIGFuIGlzc3VlIHJlcG9ydCBgMGAgZm9yXG4gIC8vIHRoaXMgKGUuZy4gRWRnZSAyMDE5LCBJRTExLCBTYWZhcmkpXG4gIHJldHVybiBnZXRCb3VuZGluZ0NsaWVudFJlY3QoZ2V0RG9jdW1lbnRFbGVtZW50KGVsZW1lbnQpKS5sZWZ0ICsgZ2V0V2luZG93U2Nyb2xsKGVsZW1lbnQpLnNjcm9sbExlZnQ7XG59IiwgImltcG9ydCBnZXRXaW5kb3cgZnJvbSBcIi4vZ2V0V2luZG93LmpzXCI7XG5pbXBvcnQgZ2V0RG9jdW1lbnRFbGVtZW50IGZyb20gXCIuL2dldERvY3VtZW50RWxlbWVudC5qc1wiO1xuaW1wb3J0IGdldFdpbmRvd1Njcm9sbEJhclggZnJvbSBcIi4vZ2V0V2luZG93U2Nyb2xsQmFyWC5qc1wiO1xuaW1wb3J0IGlzTGF5b3V0Vmlld3BvcnQgZnJvbSBcIi4vaXNMYXlvdXRWaWV3cG9ydC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0Vmlld3BvcnRSZWN0KGVsZW1lbnQsIHN0cmF0ZWd5KSB7XG4gIHZhciB3aW4gPSBnZXRXaW5kb3coZWxlbWVudCk7XG4gIHZhciBodG1sID0gZ2V0RG9jdW1lbnRFbGVtZW50KGVsZW1lbnQpO1xuICB2YXIgdmlzdWFsVmlld3BvcnQgPSB3aW4udmlzdWFsVmlld3BvcnQ7XG4gIHZhciB3aWR0aCA9IGh0bWwuY2xpZW50V2lkdGg7XG4gIHZhciBoZWlnaHQgPSBodG1sLmNsaWVudEhlaWdodDtcbiAgdmFyIHggPSAwO1xuICB2YXIgeSA9IDA7XG5cbiAgaWYgKHZpc3VhbFZpZXdwb3J0KSB7XG4gICAgd2lkdGggPSB2aXN1YWxWaWV3cG9ydC53aWR0aDtcbiAgICBoZWlnaHQgPSB2aXN1YWxWaWV3cG9ydC5oZWlnaHQ7XG4gICAgdmFyIGxheW91dFZpZXdwb3J0ID0gaXNMYXlvdXRWaWV3cG9ydCgpO1xuXG4gICAgaWYgKGxheW91dFZpZXdwb3J0IHx8ICFsYXlvdXRWaWV3cG9ydCAmJiBzdHJhdGVneSA9PT0gJ2ZpeGVkJykge1xuICAgICAgeCA9IHZpc3VhbFZpZXdwb3J0Lm9mZnNldExlZnQ7XG4gICAgICB5ID0gdmlzdWFsVmlld3BvcnQub2Zmc2V0VG9wO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgd2lkdGg6IHdpZHRoLFxuICAgIGhlaWdodDogaGVpZ2h0LFxuICAgIHg6IHggKyBnZXRXaW5kb3dTY3JvbGxCYXJYKGVsZW1lbnQpLFxuICAgIHk6IHlcbiAgfTtcbn0iLCAiaW1wb3J0IGdldERvY3VtZW50RWxlbWVudCBmcm9tIFwiLi9nZXREb2N1bWVudEVsZW1lbnQuanNcIjtcbmltcG9ydCBnZXRDb21wdXRlZFN0eWxlIGZyb20gXCIuL2dldENvbXB1dGVkU3R5bGUuanNcIjtcbmltcG9ydCBnZXRXaW5kb3dTY3JvbGxCYXJYIGZyb20gXCIuL2dldFdpbmRvd1Njcm9sbEJhclguanNcIjtcbmltcG9ydCBnZXRXaW5kb3dTY3JvbGwgZnJvbSBcIi4vZ2V0V2luZG93U2Nyb2xsLmpzXCI7XG5pbXBvcnQgeyBtYXggfSBmcm9tIFwiLi4vdXRpbHMvbWF0aC5qc1wiOyAvLyBHZXRzIHRoZSBlbnRpcmUgc2l6ZSBvZiB0aGUgc2Nyb2xsYWJsZSBkb2N1bWVudCBhcmVhLCBldmVuIGV4dGVuZGluZyBvdXRzaWRlXG4vLyBvZiB0aGUgYDxodG1sPmAgYW5kIGA8Ym9keT5gIHJlY3QgYm91bmRzIGlmIGhvcml6b250YWxseSBzY3JvbGxhYmxlXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldERvY3VtZW50UmVjdChlbGVtZW50KSB7XG4gIHZhciBfZWxlbWVudCRvd25lckRvY3VtZW47XG5cbiAgdmFyIGh0bWwgPSBnZXREb2N1bWVudEVsZW1lbnQoZWxlbWVudCk7XG4gIHZhciB3aW5TY3JvbGwgPSBnZXRXaW5kb3dTY3JvbGwoZWxlbWVudCk7XG4gIHZhciBib2R5ID0gKF9lbGVtZW50JG93bmVyRG9jdW1lbiA9IGVsZW1lbnQub3duZXJEb2N1bWVudCkgPT0gbnVsbCA/IHZvaWQgMCA6IF9lbGVtZW50JG93bmVyRG9jdW1lbi5ib2R5O1xuICB2YXIgd2lkdGggPSBtYXgoaHRtbC5zY3JvbGxXaWR0aCwgaHRtbC5jbGllbnRXaWR0aCwgYm9keSA/IGJvZHkuc2Nyb2xsV2lkdGggOiAwLCBib2R5ID8gYm9keS5jbGllbnRXaWR0aCA6IDApO1xuICB2YXIgaGVpZ2h0ID0gbWF4KGh0bWwuc2Nyb2xsSGVpZ2h0LCBodG1sLmNsaWVudEhlaWdodCwgYm9keSA/IGJvZHkuc2Nyb2xsSGVpZ2h0IDogMCwgYm9keSA/IGJvZHkuY2xpZW50SGVpZ2h0IDogMCk7XG4gIHZhciB4ID0gLXdpblNjcm9sbC5zY3JvbGxMZWZ0ICsgZ2V0V2luZG93U2Nyb2xsQmFyWChlbGVtZW50KTtcbiAgdmFyIHkgPSAtd2luU2Nyb2xsLnNjcm9sbFRvcDtcblxuICBpZiAoZ2V0Q29tcHV0ZWRTdHlsZShib2R5IHx8IGh0bWwpLmRpcmVjdGlvbiA9PT0gJ3J0bCcpIHtcbiAgICB4ICs9IG1heChodG1sLmNsaWVudFdpZHRoLCBib2R5ID8gYm9keS5jbGllbnRXaWR0aCA6IDApIC0gd2lkdGg7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHdpZHRoOiB3aWR0aCxcbiAgICBoZWlnaHQ6IGhlaWdodCxcbiAgICB4OiB4LFxuICAgIHk6IHlcbiAgfTtcbn0iLCAiaW1wb3J0IGdldENvbXB1dGVkU3R5bGUgZnJvbSBcIi4vZ2V0Q29tcHV0ZWRTdHlsZS5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNTY3JvbGxQYXJlbnQoZWxlbWVudCkge1xuICAvLyBGaXJlZm94IHdhbnRzIHVzIHRvIGNoZWNrIGAteGAgYW5kIGAteWAgdmFyaWF0aW9ucyBhcyB3ZWxsXG4gIHZhciBfZ2V0Q29tcHV0ZWRTdHlsZSA9IGdldENvbXB1dGVkU3R5bGUoZWxlbWVudCksXG4gICAgICBvdmVyZmxvdyA9IF9nZXRDb21wdXRlZFN0eWxlLm92ZXJmbG93LFxuICAgICAgb3ZlcmZsb3dYID0gX2dldENvbXB1dGVkU3R5bGUub3ZlcmZsb3dYLFxuICAgICAgb3ZlcmZsb3dZID0gX2dldENvbXB1dGVkU3R5bGUub3ZlcmZsb3dZO1xuXG4gIHJldHVybiAvYXV0b3xzY3JvbGx8b3ZlcmxheXxoaWRkZW4vLnRlc3Qob3ZlcmZsb3cgKyBvdmVyZmxvd1kgKyBvdmVyZmxvd1gpO1xufSIsICJpbXBvcnQgZ2V0UGFyZW50Tm9kZSBmcm9tIFwiLi9nZXRQYXJlbnROb2RlLmpzXCI7XG5pbXBvcnQgaXNTY3JvbGxQYXJlbnQgZnJvbSBcIi4vaXNTY3JvbGxQYXJlbnQuanNcIjtcbmltcG9ydCBnZXROb2RlTmFtZSBmcm9tIFwiLi9nZXROb2RlTmFtZS5qc1wiO1xuaW1wb3J0IHsgaXNIVE1MRWxlbWVudCB9IGZyb20gXCIuL2luc3RhbmNlT2YuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFNjcm9sbFBhcmVudChub2RlKSB7XG4gIGlmIChbJ2h0bWwnLCAnYm9keScsICcjZG9jdW1lbnQnXS5pbmRleE9mKGdldE5vZGVOYW1lKG5vZGUpKSA+PSAwKSB7XG4gICAgLy8gJEZsb3dGaXhNZVtpbmNvbXBhdGlibGUtcmV0dXJuXTogYXNzdW1lIGJvZHkgaXMgYWx3YXlzIGF2YWlsYWJsZVxuICAgIHJldHVybiBub2RlLm93bmVyRG9jdW1lbnQuYm9keTtcbiAgfVxuXG4gIGlmIChpc0hUTUxFbGVtZW50KG5vZGUpICYmIGlzU2Nyb2xsUGFyZW50KG5vZGUpKSB7XG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuICByZXR1cm4gZ2V0U2Nyb2xsUGFyZW50KGdldFBhcmVudE5vZGUobm9kZSkpO1xufSIsICJpbXBvcnQgZ2V0U2Nyb2xsUGFyZW50IGZyb20gXCIuL2dldFNjcm9sbFBhcmVudC5qc1wiO1xuaW1wb3J0IGdldFBhcmVudE5vZGUgZnJvbSBcIi4vZ2V0UGFyZW50Tm9kZS5qc1wiO1xuaW1wb3J0IGdldFdpbmRvdyBmcm9tIFwiLi9nZXRXaW5kb3cuanNcIjtcbmltcG9ydCBpc1Njcm9sbFBhcmVudCBmcm9tIFwiLi9pc1Njcm9sbFBhcmVudC5qc1wiO1xuLypcbmdpdmVuIGEgRE9NIGVsZW1lbnQsIHJldHVybiB0aGUgbGlzdCBvZiBhbGwgc2Nyb2xsIHBhcmVudHMsIHVwIHRoZSBsaXN0IG9mIGFuY2Vzb3JzXG51bnRpbCB3ZSBnZXQgdG8gdGhlIHRvcCB3aW5kb3cgb2JqZWN0LiBUaGlzIGxpc3QgaXMgd2hhdCB3ZSBhdHRhY2ggc2Nyb2xsIGxpc3RlbmVyc1xudG8sIGJlY2F1c2UgaWYgYW55IG9mIHRoZXNlIHBhcmVudCBlbGVtZW50cyBzY3JvbGwsIHdlJ2xsIG5lZWQgdG8gcmUtY2FsY3VsYXRlIHRoZVxucmVmZXJlbmNlIGVsZW1lbnQncyBwb3NpdGlvbi5cbiovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxpc3RTY3JvbGxQYXJlbnRzKGVsZW1lbnQsIGxpc3QpIHtcbiAgdmFyIF9lbGVtZW50JG93bmVyRG9jdW1lbjtcblxuICBpZiAobGlzdCA9PT0gdm9pZCAwKSB7XG4gICAgbGlzdCA9IFtdO1xuICB9XG5cbiAgdmFyIHNjcm9sbFBhcmVudCA9IGdldFNjcm9sbFBhcmVudChlbGVtZW50KTtcbiAgdmFyIGlzQm9keSA9IHNjcm9sbFBhcmVudCA9PT0gKChfZWxlbWVudCRvd25lckRvY3VtZW4gPSBlbGVtZW50Lm93bmVyRG9jdW1lbnQpID09IG51bGwgPyB2b2lkIDAgOiBfZWxlbWVudCRvd25lckRvY3VtZW4uYm9keSk7XG4gIHZhciB3aW4gPSBnZXRXaW5kb3coc2Nyb2xsUGFyZW50KTtcbiAgdmFyIHRhcmdldCA9IGlzQm9keSA/IFt3aW5dLmNvbmNhdCh3aW4udmlzdWFsVmlld3BvcnQgfHwgW10sIGlzU2Nyb2xsUGFyZW50KHNjcm9sbFBhcmVudCkgPyBzY3JvbGxQYXJlbnQgOiBbXSkgOiBzY3JvbGxQYXJlbnQ7XG4gIHZhciB1cGRhdGVkTGlzdCA9IGxpc3QuY29uY2F0KHRhcmdldCk7XG4gIHJldHVybiBpc0JvZHkgPyB1cGRhdGVkTGlzdCA6IC8vICRGbG93Rml4TWVbaW5jb21wYXRpYmxlLWNhbGxdOiBpc0JvZHkgdGVsbHMgdXMgdGFyZ2V0IHdpbGwgYmUgYW4gSFRNTEVsZW1lbnQgaGVyZVxuICB1cGRhdGVkTGlzdC5jb25jYXQobGlzdFNjcm9sbFBhcmVudHMoZ2V0UGFyZW50Tm9kZSh0YXJnZXQpKSk7XG59IiwgImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlY3RUb0NsaWVudFJlY3QocmVjdCkge1xuICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgcmVjdCwge1xuICAgIGxlZnQ6IHJlY3QueCxcbiAgICB0b3A6IHJlY3QueSxcbiAgICByaWdodDogcmVjdC54ICsgcmVjdC53aWR0aCxcbiAgICBib3R0b206IHJlY3QueSArIHJlY3QuaGVpZ2h0XG4gIH0pO1xufSIsICJpbXBvcnQgeyB2aWV3cG9ydCB9IGZyb20gXCIuLi9lbnVtcy5qc1wiO1xuaW1wb3J0IGdldFZpZXdwb3J0UmVjdCBmcm9tIFwiLi9nZXRWaWV3cG9ydFJlY3QuanNcIjtcbmltcG9ydCBnZXREb2N1bWVudFJlY3QgZnJvbSBcIi4vZ2V0RG9jdW1lbnRSZWN0LmpzXCI7XG5pbXBvcnQgbGlzdFNjcm9sbFBhcmVudHMgZnJvbSBcIi4vbGlzdFNjcm9sbFBhcmVudHMuanNcIjtcbmltcG9ydCBnZXRPZmZzZXRQYXJlbnQgZnJvbSBcIi4vZ2V0T2Zmc2V0UGFyZW50LmpzXCI7XG5pbXBvcnQgZ2V0RG9jdW1lbnRFbGVtZW50IGZyb20gXCIuL2dldERvY3VtZW50RWxlbWVudC5qc1wiO1xuaW1wb3J0IGdldENvbXB1dGVkU3R5bGUgZnJvbSBcIi4vZ2V0Q29tcHV0ZWRTdHlsZS5qc1wiO1xuaW1wb3J0IHsgaXNFbGVtZW50LCBpc0hUTUxFbGVtZW50IH0gZnJvbSBcIi4vaW5zdGFuY2VPZi5qc1wiO1xuaW1wb3J0IGdldEJvdW5kaW5nQ2xpZW50UmVjdCBmcm9tIFwiLi9nZXRCb3VuZGluZ0NsaWVudFJlY3QuanNcIjtcbmltcG9ydCBnZXRQYXJlbnROb2RlIGZyb20gXCIuL2dldFBhcmVudE5vZGUuanNcIjtcbmltcG9ydCBjb250YWlucyBmcm9tIFwiLi9jb250YWlucy5qc1wiO1xuaW1wb3J0IGdldE5vZGVOYW1lIGZyb20gXCIuL2dldE5vZGVOYW1lLmpzXCI7XG5pbXBvcnQgcmVjdFRvQ2xpZW50UmVjdCBmcm9tIFwiLi4vdXRpbHMvcmVjdFRvQ2xpZW50UmVjdC5qc1wiO1xuaW1wb3J0IHsgbWF4LCBtaW4gfSBmcm9tIFwiLi4vdXRpbHMvbWF0aC5qc1wiO1xuXG5mdW5jdGlvbiBnZXRJbm5lckJvdW5kaW5nQ2xpZW50UmVjdChlbGVtZW50LCBzdHJhdGVneSkge1xuICB2YXIgcmVjdCA9IGdldEJvdW5kaW5nQ2xpZW50UmVjdChlbGVtZW50LCBmYWxzZSwgc3RyYXRlZ3kgPT09ICdmaXhlZCcpO1xuICByZWN0LnRvcCA9IHJlY3QudG9wICsgZWxlbWVudC5jbGllbnRUb3A7XG4gIHJlY3QubGVmdCA9IHJlY3QubGVmdCArIGVsZW1lbnQuY2xpZW50TGVmdDtcbiAgcmVjdC5ib3R0b20gPSByZWN0LnRvcCArIGVsZW1lbnQuY2xpZW50SGVpZ2h0O1xuICByZWN0LnJpZ2h0ID0gcmVjdC5sZWZ0ICsgZWxlbWVudC5jbGllbnRXaWR0aDtcbiAgcmVjdC53aWR0aCA9IGVsZW1lbnQuY2xpZW50V2lkdGg7XG4gIHJlY3QuaGVpZ2h0ID0gZWxlbWVudC5jbGllbnRIZWlnaHQ7XG4gIHJlY3QueCA9IHJlY3QubGVmdDtcbiAgcmVjdC55ID0gcmVjdC50b3A7XG4gIHJldHVybiByZWN0O1xufVxuXG5mdW5jdGlvbiBnZXRDbGllbnRSZWN0RnJvbU1peGVkVHlwZShlbGVtZW50LCBjbGlwcGluZ1BhcmVudCwgc3RyYXRlZ3kpIHtcbiAgcmV0dXJuIGNsaXBwaW5nUGFyZW50ID09PSB2aWV3cG9ydCA/IHJlY3RUb0NsaWVudFJlY3QoZ2V0Vmlld3BvcnRSZWN0KGVsZW1lbnQsIHN0cmF0ZWd5KSkgOiBpc0VsZW1lbnQoY2xpcHBpbmdQYXJlbnQpID8gZ2V0SW5uZXJCb3VuZGluZ0NsaWVudFJlY3QoY2xpcHBpbmdQYXJlbnQsIHN0cmF0ZWd5KSA6IHJlY3RUb0NsaWVudFJlY3QoZ2V0RG9jdW1lbnRSZWN0KGdldERvY3VtZW50RWxlbWVudChlbGVtZW50KSkpO1xufSAvLyBBIFwiY2xpcHBpbmcgcGFyZW50XCIgaXMgYW4gb3ZlcmZsb3dhYmxlIGNvbnRhaW5lciB3aXRoIHRoZSBjaGFyYWN0ZXJpc3RpYyBvZlxuLy8gY2xpcHBpbmcgKG9yIGhpZGluZykgb3ZlcmZsb3dpbmcgZWxlbWVudHMgd2l0aCBhIHBvc2l0aW9uIGRpZmZlcmVudCBmcm9tXG4vLyBgaW5pdGlhbGBcblxuXG5mdW5jdGlvbiBnZXRDbGlwcGluZ1BhcmVudHMoZWxlbWVudCkge1xuICB2YXIgY2xpcHBpbmdQYXJlbnRzID0gbGlzdFNjcm9sbFBhcmVudHMoZ2V0UGFyZW50Tm9kZShlbGVtZW50KSk7XG4gIHZhciBjYW5Fc2NhcGVDbGlwcGluZyA9IFsnYWJzb2x1dGUnLCAnZml4ZWQnXS5pbmRleE9mKGdldENvbXB1dGVkU3R5bGUoZWxlbWVudCkucG9zaXRpb24pID49IDA7XG4gIHZhciBjbGlwcGVyRWxlbWVudCA9IGNhbkVzY2FwZUNsaXBwaW5nICYmIGlzSFRNTEVsZW1lbnQoZWxlbWVudCkgPyBnZXRPZmZzZXRQYXJlbnQoZWxlbWVudCkgOiBlbGVtZW50O1xuXG4gIGlmICghaXNFbGVtZW50KGNsaXBwZXJFbGVtZW50KSkge1xuICAgIHJldHVybiBbXTtcbiAgfSAvLyAkRmxvd0ZpeE1lW2luY29tcGF0aWJsZS1yZXR1cm5dOiBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svZmxvdy9pc3N1ZXMvMTQxNFxuXG5cbiAgcmV0dXJuIGNsaXBwaW5nUGFyZW50cy5maWx0ZXIoZnVuY3Rpb24gKGNsaXBwaW5nUGFyZW50KSB7XG4gICAgcmV0dXJuIGlzRWxlbWVudChjbGlwcGluZ1BhcmVudCkgJiYgY29udGFpbnMoY2xpcHBpbmdQYXJlbnQsIGNsaXBwZXJFbGVtZW50KSAmJiBnZXROb2RlTmFtZShjbGlwcGluZ1BhcmVudCkgIT09ICdib2R5JztcbiAgfSk7XG59IC8vIEdldHMgdGhlIG1heGltdW0gYXJlYSB0aGF0IHRoZSBlbGVtZW50IGlzIHZpc2libGUgaW4gZHVlIHRvIGFueSBudW1iZXIgb2Zcbi8vIGNsaXBwaW5nIHBhcmVudHNcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRDbGlwcGluZ1JlY3QoZWxlbWVudCwgYm91bmRhcnksIHJvb3RCb3VuZGFyeSwgc3RyYXRlZ3kpIHtcbiAgdmFyIG1haW5DbGlwcGluZ1BhcmVudHMgPSBib3VuZGFyeSA9PT0gJ2NsaXBwaW5nUGFyZW50cycgPyBnZXRDbGlwcGluZ1BhcmVudHMoZWxlbWVudCkgOiBbXS5jb25jYXQoYm91bmRhcnkpO1xuICB2YXIgY2xpcHBpbmdQYXJlbnRzID0gW10uY29uY2F0KG1haW5DbGlwcGluZ1BhcmVudHMsIFtyb290Qm91bmRhcnldKTtcbiAgdmFyIGZpcnN0Q2xpcHBpbmdQYXJlbnQgPSBjbGlwcGluZ1BhcmVudHNbMF07XG4gIHZhciBjbGlwcGluZ1JlY3QgPSBjbGlwcGluZ1BhcmVudHMucmVkdWNlKGZ1bmN0aW9uIChhY2NSZWN0LCBjbGlwcGluZ1BhcmVudCkge1xuICAgIHZhciByZWN0ID0gZ2V0Q2xpZW50UmVjdEZyb21NaXhlZFR5cGUoZWxlbWVudCwgY2xpcHBpbmdQYXJlbnQsIHN0cmF0ZWd5KTtcbiAgICBhY2NSZWN0LnRvcCA9IG1heChyZWN0LnRvcCwgYWNjUmVjdC50b3ApO1xuICAgIGFjY1JlY3QucmlnaHQgPSBtaW4ocmVjdC5yaWdodCwgYWNjUmVjdC5yaWdodCk7XG4gICAgYWNjUmVjdC5ib3R0b20gPSBtaW4ocmVjdC5ib3R0b20sIGFjY1JlY3QuYm90dG9tKTtcbiAgICBhY2NSZWN0LmxlZnQgPSBtYXgocmVjdC5sZWZ0LCBhY2NSZWN0LmxlZnQpO1xuICAgIHJldHVybiBhY2NSZWN0O1xuICB9LCBnZXRDbGllbnRSZWN0RnJvbU1peGVkVHlwZShlbGVtZW50LCBmaXJzdENsaXBwaW5nUGFyZW50LCBzdHJhdGVneSkpO1xuICBjbGlwcGluZ1JlY3Qud2lkdGggPSBjbGlwcGluZ1JlY3QucmlnaHQgLSBjbGlwcGluZ1JlY3QubGVmdDtcbiAgY2xpcHBpbmdSZWN0LmhlaWdodCA9IGNsaXBwaW5nUmVjdC5ib3R0b20gLSBjbGlwcGluZ1JlY3QudG9wO1xuICBjbGlwcGluZ1JlY3QueCA9IGNsaXBwaW5nUmVjdC5sZWZ0O1xuICBjbGlwcGluZ1JlY3QueSA9IGNsaXBwaW5nUmVjdC50b3A7XG4gIHJldHVybiBjbGlwcGluZ1JlY3Q7XG59IiwgImltcG9ydCBnZXRCYXNlUGxhY2VtZW50IGZyb20gXCIuL2dldEJhc2VQbGFjZW1lbnQuanNcIjtcbmltcG9ydCBnZXRWYXJpYXRpb24gZnJvbSBcIi4vZ2V0VmFyaWF0aW9uLmpzXCI7XG5pbXBvcnQgZ2V0TWFpbkF4aXNGcm9tUGxhY2VtZW50IGZyb20gXCIuL2dldE1haW5BeGlzRnJvbVBsYWNlbWVudC5qc1wiO1xuaW1wb3J0IHsgdG9wLCByaWdodCwgYm90dG9tLCBsZWZ0LCBzdGFydCwgZW5kIH0gZnJvbSBcIi4uL2VudW1zLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb21wdXRlT2Zmc2V0cyhfcmVmKSB7XG4gIHZhciByZWZlcmVuY2UgPSBfcmVmLnJlZmVyZW5jZSxcbiAgICAgIGVsZW1lbnQgPSBfcmVmLmVsZW1lbnQsXG4gICAgICBwbGFjZW1lbnQgPSBfcmVmLnBsYWNlbWVudDtcbiAgdmFyIGJhc2VQbGFjZW1lbnQgPSBwbGFjZW1lbnQgPyBnZXRCYXNlUGxhY2VtZW50KHBsYWNlbWVudCkgOiBudWxsO1xuICB2YXIgdmFyaWF0aW9uID0gcGxhY2VtZW50ID8gZ2V0VmFyaWF0aW9uKHBsYWNlbWVudCkgOiBudWxsO1xuICB2YXIgY29tbW9uWCA9IHJlZmVyZW5jZS54ICsgcmVmZXJlbmNlLndpZHRoIC8gMiAtIGVsZW1lbnQud2lkdGggLyAyO1xuICB2YXIgY29tbW9uWSA9IHJlZmVyZW5jZS55ICsgcmVmZXJlbmNlLmhlaWdodCAvIDIgLSBlbGVtZW50LmhlaWdodCAvIDI7XG4gIHZhciBvZmZzZXRzO1xuXG4gIHN3aXRjaCAoYmFzZVBsYWNlbWVudCkge1xuICAgIGNhc2UgdG9wOlxuICAgICAgb2Zmc2V0cyA9IHtcbiAgICAgICAgeDogY29tbW9uWCxcbiAgICAgICAgeTogcmVmZXJlbmNlLnkgLSBlbGVtZW50LmhlaWdodFxuICAgICAgfTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBib3R0b206XG4gICAgICBvZmZzZXRzID0ge1xuICAgICAgICB4OiBjb21tb25YLFxuICAgICAgICB5OiByZWZlcmVuY2UueSArIHJlZmVyZW5jZS5oZWlnaHRcbiAgICAgIH07XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgcmlnaHQ6XG4gICAgICBvZmZzZXRzID0ge1xuICAgICAgICB4OiByZWZlcmVuY2UueCArIHJlZmVyZW5jZS53aWR0aCxcbiAgICAgICAgeTogY29tbW9uWVxuICAgICAgfTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBsZWZ0OlxuICAgICAgb2Zmc2V0cyA9IHtcbiAgICAgICAgeDogcmVmZXJlbmNlLnggLSBlbGVtZW50LndpZHRoLFxuICAgICAgICB5OiBjb21tb25ZXG4gICAgICB9O1xuICAgICAgYnJlYWs7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgb2Zmc2V0cyA9IHtcbiAgICAgICAgeDogcmVmZXJlbmNlLngsXG4gICAgICAgIHk6IHJlZmVyZW5jZS55XG4gICAgICB9O1xuICB9XG5cbiAgdmFyIG1haW5BeGlzID0gYmFzZVBsYWNlbWVudCA/IGdldE1haW5BeGlzRnJvbVBsYWNlbWVudChiYXNlUGxhY2VtZW50KSA6IG51bGw7XG5cbiAgaWYgKG1haW5BeGlzICE9IG51bGwpIHtcbiAgICB2YXIgbGVuID0gbWFpbkF4aXMgPT09ICd5JyA/ICdoZWlnaHQnIDogJ3dpZHRoJztcblxuICAgIHN3aXRjaCAodmFyaWF0aW9uKSB7XG4gICAgICBjYXNlIHN0YXJ0OlxuICAgICAgICBvZmZzZXRzW21haW5BeGlzXSA9IG9mZnNldHNbbWFpbkF4aXNdIC0gKHJlZmVyZW5jZVtsZW5dIC8gMiAtIGVsZW1lbnRbbGVuXSAvIDIpO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBlbmQ6XG4gICAgICAgIG9mZnNldHNbbWFpbkF4aXNdID0gb2Zmc2V0c1ttYWluQXhpc10gKyAocmVmZXJlbmNlW2xlbl0gLyAyIC0gZWxlbWVudFtsZW5dIC8gMik7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBkZWZhdWx0OlxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBvZmZzZXRzO1xufSIsICJpbXBvcnQgZ2V0Q2xpcHBpbmdSZWN0IGZyb20gXCIuLi9kb20tdXRpbHMvZ2V0Q2xpcHBpbmdSZWN0LmpzXCI7XG5pbXBvcnQgZ2V0RG9jdW1lbnRFbGVtZW50IGZyb20gXCIuLi9kb20tdXRpbHMvZ2V0RG9jdW1lbnRFbGVtZW50LmpzXCI7XG5pbXBvcnQgZ2V0Qm91bmRpbmdDbGllbnRSZWN0IGZyb20gXCIuLi9kb20tdXRpbHMvZ2V0Qm91bmRpbmdDbGllbnRSZWN0LmpzXCI7XG5pbXBvcnQgY29tcHV0ZU9mZnNldHMgZnJvbSBcIi4vY29tcHV0ZU9mZnNldHMuanNcIjtcbmltcG9ydCByZWN0VG9DbGllbnRSZWN0IGZyb20gXCIuL3JlY3RUb0NsaWVudFJlY3QuanNcIjtcbmltcG9ydCB7IGNsaXBwaW5nUGFyZW50cywgcmVmZXJlbmNlLCBwb3BwZXIsIGJvdHRvbSwgdG9wLCByaWdodCwgYmFzZVBsYWNlbWVudHMsIHZpZXdwb3J0IH0gZnJvbSBcIi4uL2VudW1zLmpzXCI7XG5pbXBvcnQgeyBpc0VsZW1lbnQgfSBmcm9tIFwiLi4vZG9tLXV0aWxzL2luc3RhbmNlT2YuanNcIjtcbmltcG9ydCBtZXJnZVBhZGRpbmdPYmplY3QgZnJvbSBcIi4vbWVyZ2VQYWRkaW5nT2JqZWN0LmpzXCI7XG5pbXBvcnQgZXhwYW5kVG9IYXNoTWFwIGZyb20gXCIuL2V4cGFuZFRvSGFzaE1hcC5qc1wiOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRldGVjdE92ZXJmbG93KHN0YXRlLCBvcHRpb25zKSB7XG4gIGlmIChvcHRpb25zID09PSB2b2lkIDApIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICB2YXIgX29wdGlvbnMgPSBvcHRpb25zLFxuICAgICAgX29wdGlvbnMkcGxhY2VtZW50ID0gX29wdGlvbnMucGxhY2VtZW50LFxuICAgICAgcGxhY2VtZW50ID0gX29wdGlvbnMkcGxhY2VtZW50ID09PSB2b2lkIDAgPyBzdGF0ZS5wbGFjZW1lbnQgOiBfb3B0aW9ucyRwbGFjZW1lbnQsXG4gICAgICBfb3B0aW9ucyRzdHJhdGVneSA9IF9vcHRpb25zLnN0cmF0ZWd5LFxuICAgICAgc3RyYXRlZ3kgPSBfb3B0aW9ucyRzdHJhdGVneSA9PT0gdm9pZCAwID8gc3RhdGUuc3RyYXRlZ3kgOiBfb3B0aW9ucyRzdHJhdGVneSxcbiAgICAgIF9vcHRpb25zJGJvdW5kYXJ5ID0gX29wdGlvbnMuYm91bmRhcnksXG4gICAgICBib3VuZGFyeSA9IF9vcHRpb25zJGJvdW5kYXJ5ID09PSB2b2lkIDAgPyBjbGlwcGluZ1BhcmVudHMgOiBfb3B0aW9ucyRib3VuZGFyeSxcbiAgICAgIF9vcHRpb25zJHJvb3RCb3VuZGFyeSA9IF9vcHRpb25zLnJvb3RCb3VuZGFyeSxcbiAgICAgIHJvb3RCb3VuZGFyeSA9IF9vcHRpb25zJHJvb3RCb3VuZGFyeSA9PT0gdm9pZCAwID8gdmlld3BvcnQgOiBfb3B0aW9ucyRyb290Qm91bmRhcnksXG4gICAgICBfb3B0aW9ucyRlbGVtZW50Q29udGUgPSBfb3B0aW9ucy5lbGVtZW50Q29udGV4dCxcbiAgICAgIGVsZW1lbnRDb250ZXh0ID0gX29wdGlvbnMkZWxlbWVudENvbnRlID09PSB2b2lkIDAgPyBwb3BwZXIgOiBfb3B0aW9ucyRlbGVtZW50Q29udGUsXG4gICAgICBfb3B0aW9ucyRhbHRCb3VuZGFyeSA9IF9vcHRpb25zLmFsdEJvdW5kYXJ5LFxuICAgICAgYWx0Qm91bmRhcnkgPSBfb3B0aW9ucyRhbHRCb3VuZGFyeSA9PT0gdm9pZCAwID8gZmFsc2UgOiBfb3B0aW9ucyRhbHRCb3VuZGFyeSxcbiAgICAgIF9vcHRpb25zJHBhZGRpbmcgPSBfb3B0aW9ucy5wYWRkaW5nLFxuICAgICAgcGFkZGluZyA9IF9vcHRpb25zJHBhZGRpbmcgPT09IHZvaWQgMCA/IDAgOiBfb3B0aW9ucyRwYWRkaW5nO1xuICB2YXIgcGFkZGluZ09iamVjdCA9IG1lcmdlUGFkZGluZ09iamVjdCh0eXBlb2YgcGFkZGluZyAhPT0gJ251bWJlcicgPyBwYWRkaW5nIDogZXhwYW5kVG9IYXNoTWFwKHBhZGRpbmcsIGJhc2VQbGFjZW1lbnRzKSk7XG4gIHZhciBhbHRDb250ZXh0ID0gZWxlbWVudENvbnRleHQgPT09IHBvcHBlciA/IHJlZmVyZW5jZSA6IHBvcHBlcjtcbiAgdmFyIHBvcHBlclJlY3QgPSBzdGF0ZS5yZWN0cy5wb3BwZXI7XG4gIHZhciBlbGVtZW50ID0gc3RhdGUuZWxlbWVudHNbYWx0Qm91bmRhcnkgPyBhbHRDb250ZXh0IDogZWxlbWVudENvbnRleHRdO1xuICB2YXIgY2xpcHBpbmdDbGllbnRSZWN0ID0gZ2V0Q2xpcHBpbmdSZWN0KGlzRWxlbWVudChlbGVtZW50KSA/IGVsZW1lbnQgOiBlbGVtZW50LmNvbnRleHRFbGVtZW50IHx8IGdldERvY3VtZW50RWxlbWVudChzdGF0ZS5lbGVtZW50cy5wb3BwZXIpLCBib3VuZGFyeSwgcm9vdEJvdW5kYXJ5LCBzdHJhdGVneSk7XG4gIHZhciByZWZlcmVuY2VDbGllbnRSZWN0ID0gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KHN0YXRlLmVsZW1lbnRzLnJlZmVyZW5jZSk7XG4gIHZhciBwb3BwZXJPZmZzZXRzID0gY29tcHV0ZU9mZnNldHMoe1xuICAgIHJlZmVyZW5jZTogcmVmZXJlbmNlQ2xpZW50UmVjdCxcbiAgICBlbGVtZW50OiBwb3BwZXJSZWN0LFxuICAgIHN0cmF0ZWd5OiAnYWJzb2x1dGUnLFxuICAgIHBsYWNlbWVudDogcGxhY2VtZW50XG4gIH0pO1xuICB2YXIgcG9wcGVyQ2xpZW50UmVjdCA9IHJlY3RUb0NsaWVudFJlY3QoT2JqZWN0LmFzc2lnbih7fSwgcG9wcGVyUmVjdCwgcG9wcGVyT2Zmc2V0cykpO1xuICB2YXIgZWxlbWVudENsaWVudFJlY3QgPSBlbGVtZW50Q29udGV4dCA9PT0gcG9wcGVyID8gcG9wcGVyQ2xpZW50UmVjdCA6IHJlZmVyZW5jZUNsaWVudFJlY3Q7IC8vIHBvc2l0aXZlID0gb3ZlcmZsb3dpbmcgdGhlIGNsaXBwaW5nIHJlY3RcbiAgLy8gMCBvciBuZWdhdGl2ZSA9IHdpdGhpbiB0aGUgY2xpcHBpbmcgcmVjdFxuXG4gIHZhciBvdmVyZmxvd09mZnNldHMgPSB7XG4gICAgdG9wOiBjbGlwcGluZ0NsaWVudFJlY3QudG9wIC0gZWxlbWVudENsaWVudFJlY3QudG9wICsgcGFkZGluZ09iamVjdC50b3AsXG4gICAgYm90dG9tOiBlbGVtZW50Q2xpZW50UmVjdC5ib3R0b20gLSBjbGlwcGluZ0NsaWVudFJlY3QuYm90dG9tICsgcGFkZGluZ09iamVjdC5ib3R0b20sXG4gICAgbGVmdDogY2xpcHBpbmdDbGllbnRSZWN0LmxlZnQgLSBlbGVtZW50Q2xpZW50UmVjdC5sZWZ0ICsgcGFkZGluZ09iamVjdC5sZWZ0LFxuICAgIHJpZ2h0OiBlbGVtZW50Q2xpZW50UmVjdC5yaWdodCAtIGNsaXBwaW5nQ2xpZW50UmVjdC5yaWdodCArIHBhZGRpbmdPYmplY3QucmlnaHRcbiAgfTtcbiAgdmFyIG9mZnNldERhdGEgPSBzdGF0ZS5tb2RpZmllcnNEYXRhLm9mZnNldDsgLy8gT2Zmc2V0cyBjYW4gYmUgYXBwbGllZCBvbmx5IHRvIHRoZSBwb3BwZXIgZWxlbWVudFxuXG4gIGlmIChlbGVtZW50Q29udGV4dCA9PT0gcG9wcGVyICYmIG9mZnNldERhdGEpIHtcbiAgICB2YXIgb2Zmc2V0ID0gb2Zmc2V0RGF0YVtwbGFjZW1lbnRdO1xuICAgIE9iamVjdC5rZXlzKG92ZXJmbG93T2Zmc2V0cykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICB2YXIgbXVsdGlwbHkgPSBbcmlnaHQsIGJvdHRvbV0uaW5kZXhPZihrZXkpID49IDAgPyAxIDogLTE7XG4gICAgICB2YXIgYXhpcyA9IFt0b3AsIGJvdHRvbV0uaW5kZXhPZihrZXkpID49IDAgPyAneScgOiAneCc7XG4gICAgICBvdmVyZmxvd09mZnNldHNba2V5XSArPSBvZmZzZXRbYXhpc10gKiBtdWx0aXBseTtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBvdmVyZmxvd09mZnNldHM7XG59IiwgImltcG9ydCBnZXRWYXJpYXRpb24gZnJvbSBcIi4vZ2V0VmFyaWF0aW9uLmpzXCI7XG5pbXBvcnQgeyB2YXJpYXRpb25QbGFjZW1lbnRzLCBiYXNlUGxhY2VtZW50cywgcGxhY2VtZW50cyBhcyBhbGxQbGFjZW1lbnRzIH0gZnJvbSBcIi4uL2VudW1zLmpzXCI7XG5pbXBvcnQgZGV0ZWN0T3ZlcmZsb3cgZnJvbSBcIi4vZGV0ZWN0T3ZlcmZsb3cuanNcIjtcbmltcG9ydCBnZXRCYXNlUGxhY2VtZW50IGZyb20gXCIuL2dldEJhc2VQbGFjZW1lbnQuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbXB1dGVBdXRvUGxhY2VtZW50KHN0YXRlLCBvcHRpb25zKSB7XG4gIGlmIChvcHRpb25zID09PSB2b2lkIDApIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICB2YXIgX29wdGlvbnMgPSBvcHRpb25zLFxuICAgICAgcGxhY2VtZW50ID0gX29wdGlvbnMucGxhY2VtZW50LFxuICAgICAgYm91bmRhcnkgPSBfb3B0aW9ucy5ib3VuZGFyeSxcbiAgICAgIHJvb3RCb3VuZGFyeSA9IF9vcHRpb25zLnJvb3RCb3VuZGFyeSxcbiAgICAgIHBhZGRpbmcgPSBfb3B0aW9ucy5wYWRkaW5nLFxuICAgICAgZmxpcFZhcmlhdGlvbnMgPSBfb3B0aW9ucy5mbGlwVmFyaWF0aW9ucyxcbiAgICAgIF9vcHRpb25zJGFsbG93ZWRBdXRvUCA9IF9vcHRpb25zLmFsbG93ZWRBdXRvUGxhY2VtZW50cyxcbiAgICAgIGFsbG93ZWRBdXRvUGxhY2VtZW50cyA9IF9vcHRpb25zJGFsbG93ZWRBdXRvUCA9PT0gdm9pZCAwID8gYWxsUGxhY2VtZW50cyA6IF9vcHRpb25zJGFsbG93ZWRBdXRvUDtcbiAgdmFyIHZhcmlhdGlvbiA9IGdldFZhcmlhdGlvbihwbGFjZW1lbnQpO1xuICB2YXIgcGxhY2VtZW50cyA9IHZhcmlhdGlvbiA/IGZsaXBWYXJpYXRpb25zID8gdmFyaWF0aW9uUGxhY2VtZW50cyA6IHZhcmlhdGlvblBsYWNlbWVudHMuZmlsdGVyKGZ1bmN0aW9uIChwbGFjZW1lbnQpIHtcbiAgICByZXR1cm4gZ2V0VmFyaWF0aW9uKHBsYWNlbWVudCkgPT09IHZhcmlhdGlvbjtcbiAgfSkgOiBiYXNlUGxhY2VtZW50cztcbiAgdmFyIGFsbG93ZWRQbGFjZW1lbnRzID0gcGxhY2VtZW50cy5maWx0ZXIoZnVuY3Rpb24gKHBsYWNlbWVudCkge1xuICAgIHJldHVybiBhbGxvd2VkQXV0b1BsYWNlbWVudHMuaW5kZXhPZihwbGFjZW1lbnQpID49IDA7XG4gIH0pO1xuXG4gIGlmIChhbGxvd2VkUGxhY2VtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICBhbGxvd2VkUGxhY2VtZW50cyA9IHBsYWNlbWVudHM7XG4gIH0gLy8gJEZsb3dGaXhNZVtpbmNvbXBhdGlibGUtdHlwZV06IEZsb3cgc2VlbXMgdG8gaGF2ZSBwcm9ibGVtcyB3aXRoIHR3byBhcnJheSB1bmlvbnMuLi5cblxuXG4gIHZhciBvdmVyZmxvd3MgPSBhbGxvd2VkUGxhY2VtZW50cy5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgcGxhY2VtZW50KSB7XG4gICAgYWNjW3BsYWNlbWVudF0gPSBkZXRlY3RPdmVyZmxvdyhzdGF0ZSwge1xuICAgICAgcGxhY2VtZW50OiBwbGFjZW1lbnQsXG4gICAgICBib3VuZGFyeTogYm91bmRhcnksXG4gICAgICByb290Qm91bmRhcnk6IHJvb3RCb3VuZGFyeSxcbiAgICAgIHBhZGRpbmc6IHBhZGRpbmdcbiAgICB9KVtnZXRCYXNlUGxhY2VtZW50KHBsYWNlbWVudCldO1xuICAgIHJldHVybiBhY2M7XG4gIH0sIHt9KTtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKG92ZXJmbG93cykuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgIHJldHVybiBvdmVyZmxvd3NbYV0gLSBvdmVyZmxvd3NbYl07XG4gIH0pO1xufSIsICJpbXBvcnQgZ2V0T3Bwb3NpdGVQbGFjZW1lbnQgZnJvbSBcIi4uL3V0aWxzL2dldE9wcG9zaXRlUGxhY2VtZW50LmpzXCI7XG5pbXBvcnQgZ2V0QmFzZVBsYWNlbWVudCBmcm9tIFwiLi4vdXRpbHMvZ2V0QmFzZVBsYWNlbWVudC5qc1wiO1xuaW1wb3J0IGdldE9wcG9zaXRlVmFyaWF0aW9uUGxhY2VtZW50IGZyb20gXCIuLi91dGlscy9nZXRPcHBvc2l0ZVZhcmlhdGlvblBsYWNlbWVudC5qc1wiO1xuaW1wb3J0IGRldGVjdE92ZXJmbG93IGZyb20gXCIuLi91dGlscy9kZXRlY3RPdmVyZmxvdy5qc1wiO1xuaW1wb3J0IGNvbXB1dGVBdXRvUGxhY2VtZW50IGZyb20gXCIuLi91dGlscy9jb21wdXRlQXV0b1BsYWNlbWVudC5qc1wiO1xuaW1wb3J0IHsgYm90dG9tLCB0b3AsIHN0YXJ0LCByaWdodCwgbGVmdCwgYXV0byB9IGZyb20gXCIuLi9lbnVtcy5qc1wiO1xuaW1wb3J0IGdldFZhcmlhdGlvbiBmcm9tIFwiLi4vdXRpbHMvZ2V0VmFyaWF0aW9uLmpzXCI7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuZnVuY3Rpb24gZ2V0RXhwYW5kZWRGYWxsYmFja1BsYWNlbWVudHMocGxhY2VtZW50KSB7XG4gIGlmIChnZXRCYXNlUGxhY2VtZW50KHBsYWNlbWVudCkgPT09IGF1dG8pIHtcbiAgICByZXR1cm4gW107XG4gIH1cblxuICB2YXIgb3Bwb3NpdGVQbGFjZW1lbnQgPSBnZXRPcHBvc2l0ZVBsYWNlbWVudChwbGFjZW1lbnQpO1xuICByZXR1cm4gW2dldE9wcG9zaXRlVmFyaWF0aW9uUGxhY2VtZW50KHBsYWNlbWVudCksIG9wcG9zaXRlUGxhY2VtZW50LCBnZXRPcHBvc2l0ZVZhcmlhdGlvblBsYWNlbWVudChvcHBvc2l0ZVBsYWNlbWVudCldO1xufVxuXG5mdW5jdGlvbiBmbGlwKF9yZWYpIHtcbiAgdmFyIHN0YXRlID0gX3JlZi5zdGF0ZSxcbiAgICAgIG9wdGlvbnMgPSBfcmVmLm9wdGlvbnMsXG4gICAgICBuYW1lID0gX3JlZi5uYW1lO1xuXG4gIGlmIChzdGF0ZS5tb2RpZmllcnNEYXRhW25hbWVdLl9za2lwKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIF9vcHRpb25zJG1haW5BeGlzID0gb3B0aW9ucy5tYWluQXhpcyxcbiAgICAgIGNoZWNrTWFpbkF4aXMgPSBfb3B0aW9ucyRtYWluQXhpcyA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9vcHRpb25zJG1haW5BeGlzLFxuICAgICAgX29wdGlvbnMkYWx0QXhpcyA9IG9wdGlvbnMuYWx0QXhpcyxcbiAgICAgIGNoZWNrQWx0QXhpcyA9IF9vcHRpb25zJGFsdEF4aXMgPT09IHZvaWQgMCA/IHRydWUgOiBfb3B0aW9ucyRhbHRBeGlzLFxuICAgICAgc3BlY2lmaWVkRmFsbGJhY2tQbGFjZW1lbnRzID0gb3B0aW9ucy5mYWxsYmFja1BsYWNlbWVudHMsXG4gICAgICBwYWRkaW5nID0gb3B0aW9ucy5wYWRkaW5nLFxuICAgICAgYm91bmRhcnkgPSBvcHRpb25zLmJvdW5kYXJ5LFxuICAgICAgcm9vdEJvdW5kYXJ5ID0gb3B0aW9ucy5yb290Qm91bmRhcnksXG4gICAgICBhbHRCb3VuZGFyeSA9IG9wdGlvbnMuYWx0Qm91bmRhcnksXG4gICAgICBfb3B0aW9ucyRmbGlwVmFyaWF0aW8gPSBvcHRpb25zLmZsaXBWYXJpYXRpb25zLFxuICAgICAgZmxpcFZhcmlhdGlvbnMgPSBfb3B0aW9ucyRmbGlwVmFyaWF0aW8gPT09IHZvaWQgMCA/IHRydWUgOiBfb3B0aW9ucyRmbGlwVmFyaWF0aW8sXG4gICAgICBhbGxvd2VkQXV0b1BsYWNlbWVudHMgPSBvcHRpb25zLmFsbG93ZWRBdXRvUGxhY2VtZW50cztcbiAgdmFyIHByZWZlcnJlZFBsYWNlbWVudCA9IHN0YXRlLm9wdGlvbnMucGxhY2VtZW50O1xuICB2YXIgYmFzZVBsYWNlbWVudCA9IGdldEJhc2VQbGFjZW1lbnQocHJlZmVycmVkUGxhY2VtZW50KTtcbiAgdmFyIGlzQmFzZVBsYWNlbWVudCA9IGJhc2VQbGFjZW1lbnQgPT09IHByZWZlcnJlZFBsYWNlbWVudDtcbiAgdmFyIGZhbGxiYWNrUGxhY2VtZW50cyA9IHNwZWNpZmllZEZhbGxiYWNrUGxhY2VtZW50cyB8fCAoaXNCYXNlUGxhY2VtZW50IHx8ICFmbGlwVmFyaWF0aW9ucyA/IFtnZXRPcHBvc2l0ZVBsYWNlbWVudChwcmVmZXJyZWRQbGFjZW1lbnQpXSA6IGdldEV4cGFuZGVkRmFsbGJhY2tQbGFjZW1lbnRzKHByZWZlcnJlZFBsYWNlbWVudCkpO1xuICB2YXIgcGxhY2VtZW50cyA9IFtwcmVmZXJyZWRQbGFjZW1lbnRdLmNvbmNhdChmYWxsYmFja1BsYWNlbWVudHMpLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBwbGFjZW1lbnQpIHtcbiAgICByZXR1cm4gYWNjLmNvbmNhdChnZXRCYXNlUGxhY2VtZW50KHBsYWNlbWVudCkgPT09IGF1dG8gPyBjb21wdXRlQXV0b1BsYWNlbWVudChzdGF0ZSwge1xuICAgICAgcGxhY2VtZW50OiBwbGFjZW1lbnQsXG4gICAgICBib3VuZGFyeTogYm91bmRhcnksXG4gICAgICByb290Qm91bmRhcnk6IHJvb3RCb3VuZGFyeSxcbiAgICAgIHBhZGRpbmc6IHBhZGRpbmcsXG4gICAgICBmbGlwVmFyaWF0aW9uczogZmxpcFZhcmlhdGlvbnMsXG4gICAgICBhbGxvd2VkQXV0b1BsYWNlbWVudHM6IGFsbG93ZWRBdXRvUGxhY2VtZW50c1xuICAgIH0pIDogcGxhY2VtZW50KTtcbiAgfSwgW10pO1xuICB2YXIgcmVmZXJlbmNlUmVjdCA9IHN0YXRlLnJlY3RzLnJlZmVyZW5jZTtcbiAgdmFyIHBvcHBlclJlY3QgPSBzdGF0ZS5yZWN0cy5wb3BwZXI7XG4gIHZhciBjaGVja3NNYXAgPSBuZXcgTWFwKCk7XG4gIHZhciBtYWtlRmFsbGJhY2tDaGVja3MgPSB0cnVlO1xuICB2YXIgZmlyc3RGaXR0aW5nUGxhY2VtZW50ID0gcGxhY2VtZW50c1swXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHBsYWNlbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgcGxhY2VtZW50ID0gcGxhY2VtZW50c1tpXTtcblxuICAgIHZhciBfYmFzZVBsYWNlbWVudCA9IGdldEJhc2VQbGFjZW1lbnQocGxhY2VtZW50KTtcblxuICAgIHZhciBpc1N0YXJ0VmFyaWF0aW9uID0gZ2V0VmFyaWF0aW9uKHBsYWNlbWVudCkgPT09IHN0YXJ0O1xuICAgIHZhciBpc1ZlcnRpY2FsID0gW3RvcCwgYm90dG9tXS5pbmRleE9mKF9iYXNlUGxhY2VtZW50KSA+PSAwO1xuICAgIHZhciBsZW4gPSBpc1ZlcnRpY2FsID8gJ3dpZHRoJyA6ICdoZWlnaHQnO1xuICAgIHZhciBvdmVyZmxvdyA9IGRldGVjdE92ZXJmbG93KHN0YXRlLCB7XG4gICAgICBwbGFjZW1lbnQ6IHBsYWNlbWVudCxcbiAgICAgIGJvdW5kYXJ5OiBib3VuZGFyeSxcbiAgICAgIHJvb3RCb3VuZGFyeTogcm9vdEJvdW5kYXJ5LFxuICAgICAgYWx0Qm91bmRhcnk6IGFsdEJvdW5kYXJ5LFxuICAgICAgcGFkZGluZzogcGFkZGluZ1xuICAgIH0pO1xuICAgIHZhciBtYWluVmFyaWF0aW9uU2lkZSA9IGlzVmVydGljYWwgPyBpc1N0YXJ0VmFyaWF0aW9uID8gcmlnaHQgOiBsZWZ0IDogaXNTdGFydFZhcmlhdGlvbiA/IGJvdHRvbSA6IHRvcDtcblxuICAgIGlmIChyZWZlcmVuY2VSZWN0W2xlbl0gPiBwb3BwZXJSZWN0W2xlbl0pIHtcbiAgICAgIG1haW5WYXJpYXRpb25TaWRlID0gZ2V0T3Bwb3NpdGVQbGFjZW1lbnQobWFpblZhcmlhdGlvblNpZGUpO1xuICAgIH1cblxuICAgIHZhciBhbHRWYXJpYXRpb25TaWRlID0gZ2V0T3Bwb3NpdGVQbGFjZW1lbnQobWFpblZhcmlhdGlvblNpZGUpO1xuICAgIHZhciBjaGVja3MgPSBbXTtcblxuICAgIGlmIChjaGVja01haW5BeGlzKSB7XG4gICAgICBjaGVja3MucHVzaChvdmVyZmxvd1tfYmFzZVBsYWNlbWVudF0gPD0gMCk7XG4gICAgfVxuXG4gICAgaWYgKGNoZWNrQWx0QXhpcykge1xuICAgICAgY2hlY2tzLnB1c2gob3ZlcmZsb3dbbWFpblZhcmlhdGlvblNpZGVdIDw9IDAsIG92ZXJmbG93W2FsdFZhcmlhdGlvblNpZGVdIDw9IDApO1xuICAgIH1cblxuICAgIGlmIChjaGVja3MuZXZlcnkoZnVuY3Rpb24gKGNoZWNrKSB7XG4gICAgICByZXR1cm4gY2hlY2s7XG4gICAgfSkpIHtcbiAgICAgIGZpcnN0Rml0dGluZ1BsYWNlbWVudCA9IHBsYWNlbWVudDtcbiAgICAgIG1ha2VGYWxsYmFja0NoZWNrcyA9IGZhbHNlO1xuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgY2hlY2tzTWFwLnNldChwbGFjZW1lbnQsIGNoZWNrcyk7XG4gIH1cblxuICBpZiAobWFrZUZhbGxiYWNrQ2hlY2tzKSB7XG4gICAgLy8gYDJgIG1heSBiZSBkZXNpcmVkIGluIHNvbWUgY2FzZXMg4oCTIHJlc2VhcmNoIGxhdGVyXG4gICAgdmFyIG51bWJlck9mQ2hlY2tzID0gZmxpcFZhcmlhdGlvbnMgPyAzIDogMTtcblxuICAgIHZhciBfbG9vcCA9IGZ1bmN0aW9uIF9sb29wKF9pKSB7XG4gICAgICB2YXIgZml0dGluZ1BsYWNlbWVudCA9IHBsYWNlbWVudHMuZmluZChmdW5jdGlvbiAocGxhY2VtZW50KSB7XG4gICAgICAgIHZhciBjaGVja3MgPSBjaGVja3NNYXAuZ2V0KHBsYWNlbWVudCk7XG5cbiAgICAgICAgaWYgKGNoZWNrcykge1xuICAgICAgICAgIHJldHVybiBjaGVja3Muc2xpY2UoMCwgX2kpLmV2ZXJ5KGZ1bmN0aW9uIChjaGVjaykge1xuICAgICAgICAgICAgcmV0dXJuIGNoZWNrO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgaWYgKGZpdHRpbmdQbGFjZW1lbnQpIHtcbiAgICAgICAgZmlyc3RGaXR0aW5nUGxhY2VtZW50ID0gZml0dGluZ1BsYWNlbWVudDtcbiAgICAgICAgcmV0dXJuIFwiYnJlYWtcIjtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgZm9yICh2YXIgX2kgPSBudW1iZXJPZkNoZWNrczsgX2kgPiAwOyBfaS0tKSB7XG4gICAgICB2YXIgX3JldCA9IF9sb29wKF9pKTtcblxuICAgICAgaWYgKF9yZXQgPT09IFwiYnJlYWtcIikgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgaWYgKHN0YXRlLnBsYWNlbWVudCAhPT0gZmlyc3RGaXR0aW5nUGxhY2VtZW50KSB7XG4gICAgc3RhdGUubW9kaWZpZXJzRGF0YVtuYW1lXS5fc2tpcCA9IHRydWU7XG4gICAgc3RhdGUucGxhY2VtZW50ID0gZmlyc3RGaXR0aW5nUGxhY2VtZW50O1xuICAgIHN0YXRlLnJlc2V0ID0gdHJ1ZTtcbiAgfVxufSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnZmxpcCcsXG4gIGVuYWJsZWQ6IHRydWUsXG4gIHBoYXNlOiAnbWFpbicsXG4gIGZuOiBmbGlwLFxuICByZXF1aXJlc0lmRXhpc3RzOiBbJ29mZnNldCddLFxuICBkYXRhOiB7XG4gICAgX3NraXA6IGZhbHNlXG4gIH1cbn07IiwgImltcG9ydCB7IHRvcCwgYm90dG9tLCBsZWZ0LCByaWdodCB9IGZyb20gXCIuLi9lbnVtcy5qc1wiO1xuaW1wb3J0IGRldGVjdE92ZXJmbG93IGZyb20gXCIuLi91dGlscy9kZXRlY3RPdmVyZmxvdy5qc1wiO1xuXG5mdW5jdGlvbiBnZXRTaWRlT2Zmc2V0cyhvdmVyZmxvdywgcmVjdCwgcHJldmVudGVkT2Zmc2V0cykge1xuICBpZiAocHJldmVudGVkT2Zmc2V0cyA9PT0gdm9pZCAwKSB7XG4gICAgcHJldmVudGVkT2Zmc2V0cyA9IHtcbiAgICAgIHg6IDAsXG4gICAgICB5OiAwXG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgdG9wOiBvdmVyZmxvdy50b3AgLSByZWN0LmhlaWdodCAtIHByZXZlbnRlZE9mZnNldHMueSxcbiAgICByaWdodDogb3ZlcmZsb3cucmlnaHQgLSByZWN0LndpZHRoICsgcHJldmVudGVkT2Zmc2V0cy54LFxuICAgIGJvdHRvbTogb3ZlcmZsb3cuYm90dG9tIC0gcmVjdC5oZWlnaHQgKyBwcmV2ZW50ZWRPZmZzZXRzLnksXG4gICAgbGVmdDogb3ZlcmZsb3cubGVmdCAtIHJlY3Qud2lkdGggLSBwcmV2ZW50ZWRPZmZzZXRzLnhcbiAgfTtcbn1cblxuZnVuY3Rpb24gaXNBbnlTaWRlRnVsbHlDbGlwcGVkKG92ZXJmbG93KSB7XG4gIHJldHVybiBbdG9wLCByaWdodCwgYm90dG9tLCBsZWZ0XS5zb21lKGZ1bmN0aW9uIChzaWRlKSB7XG4gICAgcmV0dXJuIG92ZXJmbG93W3NpZGVdID49IDA7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBoaWRlKF9yZWYpIHtcbiAgdmFyIHN0YXRlID0gX3JlZi5zdGF0ZSxcbiAgICAgIG5hbWUgPSBfcmVmLm5hbWU7XG4gIHZhciByZWZlcmVuY2VSZWN0ID0gc3RhdGUucmVjdHMucmVmZXJlbmNlO1xuICB2YXIgcG9wcGVyUmVjdCA9IHN0YXRlLnJlY3RzLnBvcHBlcjtcbiAgdmFyIHByZXZlbnRlZE9mZnNldHMgPSBzdGF0ZS5tb2RpZmllcnNEYXRhLnByZXZlbnRPdmVyZmxvdztcbiAgdmFyIHJlZmVyZW5jZU92ZXJmbG93ID0gZGV0ZWN0T3ZlcmZsb3coc3RhdGUsIHtcbiAgICBlbGVtZW50Q29udGV4dDogJ3JlZmVyZW5jZSdcbiAgfSk7XG4gIHZhciBwb3BwZXJBbHRPdmVyZmxvdyA9IGRldGVjdE92ZXJmbG93KHN0YXRlLCB7XG4gICAgYWx0Qm91bmRhcnk6IHRydWVcbiAgfSk7XG4gIHZhciByZWZlcmVuY2VDbGlwcGluZ09mZnNldHMgPSBnZXRTaWRlT2Zmc2V0cyhyZWZlcmVuY2VPdmVyZmxvdywgcmVmZXJlbmNlUmVjdCk7XG4gIHZhciBwb3BwZXJFc2NhcGVPZmZzZXRzID0gZ2V0U2lkZU9mZnNldHMocG9wcGVyQWx0T3ZlcmZsb3csIHBvcHBlclJlY3QsIHByZXZlbnRlZE9mZnNldHMpO1xuICB2YXIgaXNSZWZlcmVuY2VIaWRkZW4gPSBpc0FueVNpZGVGdWxseUNsaXBwZWQocmVmZXJlbmNlQ2xpcHBpbmdPZmZzZXRzKTtcbiAgdmFyIGhhc1BvcHBlckVzY2FwZWQgPSBpc0FueVNpZGVGdWxseUNsaXBwZWQocG9wcGVyRXNjYXBlT2Zmc2V0cyk7XG4gIHN0YXRlLm1vZGlmaWVyc0RhdGFbbmFtZV0gPSB7XG4gICAgcmVmZXJlbmNlQ2xpcHBpbmdPZmZzZXRzOiByZWZlcmVuY2VDbGlwcGluZ09mZnNldHMsXG4gICAgcG9wcGVyRXNjYXBlT2Zmc2V0czogcG9wcGVyRXNjYXBlT2Zmc2V0cyxcbiAgICBpc1JlZmVyZW5jZUhpZGRlbjogaXNSZWZlcmVuY2VIaWRkZW4sXG4gICAgaGFzUG9wcGVyRXNjYXBlZDogaGFzUG9wcGVyRXNjYXBlZFxuICB9O1xuICBzdGF0ZS5hdHRyaWJ1dGVzLnBvcHBlciA9IE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLmF0dHJpYnV0ZXMucG9wcGVyLCB7XG4gICAgJ2RhdGEtcG9wcGVyLXJlZmVyZW5jZS1oaWRkZW4nOiBpc1JlZmVyZW5jZUhpZGRlbixcbiAgICAnZGF0YS1wb3BwZXItZXNjYXBlZCc6IGhhc1BvcHBlckVzY2FwZWRcbiAgfSk7XG59IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdoaWRlJyxcbiAgZW5hYmxlZDogdHJ1ZSxcbiAgcGhhc2U6ICdtYWluJyxcbiAgcmVxdWlyZXNJZkV4aXN0czogWydwcmV2ZW50T3ZlcmZsb3cnXSxcbiAgZm46IGhpZGVcbn07IiwgImltcG9ydCBnZXRCYXNlUGxhY2VtZW50IGZyb20gXCIuLi91dGlscy9nZXRCYXNlUGxhY2VtZW50LmpzXCI7XG5pbXBvcnQgeyB0b3AsIGxlZnQsIHJpZ2h0LCBwbGFjZW1lbnRzIH0gZnJvbSBcIi4uL2VudW1zLmpzXCI7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuZXhwb3J0IGZ1bmN0aW9uIGRpc3RhbmNlQW5kU2tpZGRpbmdUb1hZKHBsYWNlbWVudCwgcmVjdHMsIG9mZnNldCkge1xuICB2YXIgYmFzZVBsYWNlbWVudCA9IGdldEJhc2VQbGFjZW1lbnQocGxhY2VtZW50KTtcbiAgdmFyIGludmVydERpc3RhbmNlID0gW2xlZnQsIHRvcF0uaW5kZXhPZihiYXNlUGxhY2VtZW50KSA+PSAwID8gLTEgOiAxO1xuXG4gIHZhciBfcmVmID0gdHlwZW9mIG9mZnNldCA9PT0gJ2Z1bmN0aW9uJyA/IG9mZnNldChPYmplY3QuYXNzaWduKHt9LCByZWN0cywge1xuICAgIHBsYWNlbWVudDogcGxhY2VtZW50XG4gIH0pKSA6IG9mZnNldCxcbiAgICAgIHNraWRkaW5nID0gX3JlZlswXSxcbiAgICAgIGRpc3RhbmNlID0gX3JlZlsxXTtcblxuICBza2lkZGluZyA9IHNraWRkaW5nIHx8IDA7XG4gIGRpc3RhbmNlID0gKGRpc3RhbmNlIHx8IDApICogaW52ZXJ0RGlzdGFuY2U7XG4gIHJldHVybiBbbGVmdCwgcmlnaHRdLmluZGV4T2YoYmFzZVBsYWNlbWVudCkgPj0gMCA/IHtcbiAgICB4OiBkaXN0YW5jZSxcbiAgICB5OiBza2lkZGluZ1xuICB9IDoge1xuICAgIHg6IHNraWRkaW5nLFxuICAgIHk6IGRpc3RhbmNlXG4gIH07XG59XG5cbmZ1bmN0aW9uIG9mZnNldChfcmVmMikge1xuICB2YXIgc3RhdGUgPSBfcmVmMi5zdGF0ZSxcbiAgICAgIG9wdGlvbnMgPSBfcmVmMi5vcHRpb25zLFxuICAgICAgbmFtZSA9IF9yZWYyLm5hbWU7XG4gIHZhciBfb3B0aW9ucyRvZmZzZXQgPSBvcHRpb25zLm9mZnNldCxcbiAgICAgIG9mZnNldCA9IF9vcHRpb25zJG9mZnNldCA9PT0gdm9pZCAwID8gWzAsIDBdIDogX29wdGlvbnMkb2Zmc2V0O1xuICB2YXIgZGF0YSA9IHBsYWNlbWVudHMucmVkdWNlKGZ1bmN0aW9uIChhY2MsIHBsYWNlbWVudCkge1xuICAgIGFjY1twbGFjZW1lbnRdID0gZGlzdGFuY2VBbmRTa2lkZGluZ1RvWFkocGxhY2VtZW50LCBzdGF0ZS5yZWN0cywgb2Zmc2V0KTtcbiAgICByZXR1cm4gYWNjO1xuICB9LCB7fSk7XG4gIHZhciBfZGF0YSRzdGF0ZSRwbGFjZW1lbnQgPSBkYXRhW3N0YXRlLnBsYWNlbWVudF0sXG4gICAgICB4ID0gX2RhdGEkc3RhdGUkcGxhY2VtZW50LngsXG4gICAgICB5ID0gX2RhdGEkc3RhdGUkcGxhY2VtZW50Lnk7XG5cbiAgaWYgKHN0YXRlLm1vZGlmaWVyc0RhdGEucG9wcGVyT2Zmc2V0cyAhPSBudWxsKSB7XG4gICAgc3RhdGUubW9kaWZpZXJzRGF0YS5wb3BwZXJPZmZzZXRzLnggKz0geDtcbiAgICBzdGF0ZS5tb2RpZmllcnNEYXRhLnBvcHBlck9mZnNldHMueSArPSB5O1xuICB9XG5cbiAgc3RhdGUubW9kaWZpZXJzRGF0YVtuYW1lXSA9IGRhdGE7XG59IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdvZmZzZXQnLFxuICBlbmFibGVkOiB0cnVlLFxuICBwaGFzZTogJ21haW4nLFxuICByZXF1aXJlczogWydwb3BwZXJPZmZzZXRzJ10sXG4gIGZuOiBvZmZzZXRcbn07IiwgImltcG9ydCBjb21wdXRlT2Zmc2V0cyBmcm9tIFwiLi4vdXRpbHMvY29tcHV0ZU9mZnNldHMuanNcIjtcblxuZnVuY3Rpb24gcG9wcGVyT2Zmc2V0cyhfcmVmKSB7XG4gIHZhciBzdGF0ZSA9IF9yZWYuc3RhdGUsXG4gICAgICBuYW1lID0gX3JlZi5uYW1lO1xuICAvLyBPZmZzZXRzIGFyZSB0aGUgYWN0dWFsIHBvc2l0aW9uIHRoZSBwb3BwZXIgbmVlZHMgdG8gaGF2ZSB0byBiZVxuICAvLyBwcm9wZXJseSBwb3NpdGlvbmVkIG5lYXIgaXRzIHJlZmVyZW5jZSBlbGVtZW50XG4gIC8vIFRoaXMgaXMgdGhlIG1vc3QgYmFzaWMgcGxhY2VtZW50LCBhbmQgd2lsbCBiZSBhZGp1c3RlZCBieVxuICAvLyB0aGUgbW9kaWZpZXJzIGluIHRoZSBuZXh0IHN0ZXBcbiAgc3RhdGUubW9kaWZpZXJzRGF0YVtuYW1lXSA9IGNvbXB1dGVPZmZzZXRzKHtcbiAgICByZWZlcmVuY2U6IHN0YXRlLnJlY3RzLnJlZmVyZW5jZSxcbiAgICBlbGVtZW50OiBzdGF0ZS5yZWN0cy5wb3BwZXIsXG4gICAgc3RyYXRlZ3k6ICdhYnNvbHV0ZScsXG4gICAgcGxhY2VtZW50OiBzdGF0ZS5wbGFjZW1lbnRcbiAgfSk7XG59IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdwb3BwZXJPZmZzZXRzJyxcbiAgZW5hYmxlZDogdHJ1ZSxcbiAgcGhhc2U6ICdyZWFkJyxcbiAgZm46IHBvcHBlck9mZnNldHMsXG4gIGRhdGE6IHt9XG59OyIsICJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRBbHRBeGlzKGF4aXMpIHtcbiAgcmV0dXJuIGF4aXMgPT09ICd4JyA/ICd5JyA6ICd4Jztcbn0iLCAiaW1wb3J0IHsgdG9wLCBsZWZ0LCByaWdodCwgYm90dG9tLCBzdGFydCB9IGZyb20gXCIuLi9lbnVtcy5qc1wiO1xuaW1wb3J0IGdldEJhc2VQbGFjZW1lbnQgZnJvbSBcIi4uL3V0aWxzL2dldEJhc2VQbGFjZW1lbnQuanNcIjtcbmltcG9ydCBnZXRNYWluQXhpc0Zyb21QbGFjZW1lbnQgZnJvbSBcIi4uL3V0aWxzL2dldE1haW5BeGlzRnJvbVBsYWNlbWVudC5qc1wiO1xuaW1wb3J0IGdldEFsdEF4aXMgZnJvbSBcIi4uL3V0aWxzL2dldEFsdEF4aXMuanNcIjtcbmltcG9ydCB7IHdpdGhpbiwgd2l0aGluTWF4Q2xhbXAgfSBmcm9tIFwiLi4vdXRpbHMvd2l0aGluLmpzXCI7XG5pbXBvcnQgZ2V0TGF5b3V0UmVjdCBmcm9tIFwiLi4vZG9tLXV0aWxzL2dldExheW91dFJlY3QuanNcIjtcbmltcG9ydCBnZXRPZmZzZXRQYXJlbnQgZnJvbSBcIi4uL2RvbS11dGlscy9nZXRPZmZzZXRQYXJlbnQuanNcIjtcbmltcG9ydCBkZXRlY3RPdmVyZmxvdyBmcm9tIFwiLi4vdXRpbHMvZGV0ZWN0T3ZlcmZsb3cuanNcIjtcbmltcG9ydCBnZXRWYXJpYXRpb24gZnJvbSBcIi4uL3V0aWxzL2dldFZhcmlhdGlvbi5qc1wiO1xuaW1wb3J0IGdldEZyZXNoU2lkZU9iamVjdCBmcm9tIFwiLi4vdXRpbHMvZ2V0RnJlc2hTaWRlT2JqZWN0LmpzXCI7XG5pbXBvcnQgeyBtaW4gYXMgbWF0aE1pbiwgbWF4IGFzIG1hdGhNYXggfSBmcm9tIFwiLi4vdXRpbHMvbWF0aC5qc1wiO1xuXG5mdW5jdGlvbiBwcmV2ZW50T3ZlcmZsb3coX3JlZikge1xuICB2YXIgc3RhdGUgPSBfcmVmLnN0YXRlLFxuICAgICAgb3B0aW9ucyA9IF9yZWYub3B0aW9ucyxcbiAgICAgIG5hbWUgPSBfcmVmLm5hbWU7XG4gIHZhciBfb3B0aW9ucyRtYWluQXhpcyA9IG9wdGlvbnMubWFpbkF4aXMsXG4gICAgICBjaGVja01haW5BeGlzID0gX29wdGlvbnMkbWFpbkF4aXMgPT09IHZvaWQgMCA/IHRydWUgOiBfb3B0aW9ucyRtYWluQXhpcyxcbiAgICAgIF9vcHRpb25zJGFsdEF4aXMgPSBvcHRpb25zLmFsdEF4aXMsXG4gICAgICBjaGVja0FsdEF4aXMgPSBfb3B0aW9ucyRhbHRBeGlzID09PSB2b2lkIDAgPyBmYWxzZSA6IF9vcHRpb25zJGFsdEF4aXMsXG4gICAgICBib3VuZGFyeSA9IG9wdGlvbnMuYm91bmRhcnksXG4gICAgICByb290Qm91bmRhcnkgPSBvcHRpb25zLnJvb3RCb3VuZGFyeSxcbiAgICAgIGFsdEJvdW5kYXJ5ID0gb3B0aW9ucy5hbHRCb3VuZGFyeSxcbiAgICAgIHBhZGRpbmcgPSBvcHRpb25zLnBhZGRpbmcsXG4gICAgICBfb3B0aW9ucyR0ZXRoZXIgPSBvcHRpb25zLnRldGhlcixcbiAgICAgIHRldGhlciA9IF9vcHRpb25zJHRldGhlciA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9vcHRpb25zJHRldGhlcixcbiAgICAgIF9vcHRpb25zJHRldGhlck9mZnNldCA9IG9wdGlvbnMudGV0aGVyT2Zmc2V0LFxuICAgICAgdGV0aGVyT2Zmc2V0ID0gX29wdGlvbnMkdGV0aGVyT2Zmc2V0ID09PSB2b2lkIDAgPyAwIDogX29wdGlvbnMkdGV0aGVyT2Zmc2V0O1xuICB2YXIgb3ZlcmZsb3cgPSBkZXRlY3RPdmVyZmxvdyhzdGF0ZSwge1xuICAgIGJvdW5kYXJ5OiBib3VuZGFyeSxcbiAgICByb290Qm91bmRhcnk6IHJvb3RCb3VuZGFyeSxcbiAgICBwYWRkaW5nOiBwYWRkaW5nLFxuICAgIGFsdEJvdW5kYXJ5OiBhbHRCb3VuZGFyeVxuICB9KTtcbiAgdmFyIGJhc2VQbGFjZW1lbnQgPSBnZXRCYXNlUGxhY2VtZW50KHN0YXRlLnBsYWNlbWVudCk7XG4gIHZhciB2YXJpYXRpb24gPSBnZXRWYXJpYXRpb24oc3RhdGUucGxhY2VtZW50KTtcbiAgdmFyIGlzQmFzZVBsYWNlbWVudCA9ICF2YXJpYXRpb247XG4gIHZhciBtYWluQXhpcyA9IGdldE1haW5BeGlzRnJvbVBsYWNlbWVudChiYXNlUGxhY2VtZW50KTtcbiAgdmFyIGFsdEF4aXMgPSBnZXRBbHRBeGlzKG1haW5BeGlzKTtcbiAgdmFyIHBvcHBlck9mZnNldHMgPSBzdGF0ZS5tb2RpZmllcnNEYXRhLnBvcHBlck9mZnNldHM7XG4gIHZhciByZWZlcmVuY2VSZWN0ID0gc3RhdGUucmVjdHMucmVmZXJlbmNlO1xuICB2YXIgcG9wcGVyUmVjdCA9IHN0YXRlLnJlY3RzLnBvcHBlcjtcbiAgdmFyIHRldGhlck9mZnNldFZhbHVlID0gdHlwZW9mIHRldGhlck9mZnNldCA9PT0gJ2Z1bmN0aW9uJyA/IHRldGhlck9mZnNldChPYmplY3QuYXNzaWduKHt9LCBzdGF0ZS5yZWN0cywge1xuICAgIHBsYWNlbWVudDogc3RhdGUucGxhY2VtZW50XG4gIH0pKSA6IHRldGhlck9mZnNldDtcbiAgdmFyIG5vcm1hbGl6ZWRUZXRoZXJPZmZzZXRWYWx1ZSA9IHR5cGVvZiB0ZXRoZXJPZmZzZXRWYWx1ZSA9PT0gJ251bWJlcicgPyB7XG4gICAgbWFpbkF4aXM6IHRldGhlck9mZnNldFZhbHVlLFxuICAgIGFsdEF4aXM6IHRldGhlck9mZnNldFZhbHVlXG4gIH0gOiBPYmplY3QuYXNzaWduKHtcbiAgICBtYWluQXhpczogMCxcbiAgICBhbHRBeGlzOiAwXG4gIH0sIHRldGhlck9mZnNldFZhbHVlKTtcbiAgdmFyIG9mZnNldE1vZGlmaWVyU3RhdGUgPSBzdGF0ZS5tb2RpZmllcnNEYXRhLm9mZnNldCA/IHN0YXRlLm1vZGlmaWVyc0RhdGEub2Zmc2V0W3N0YXRlLnBsYWNlbWVudF0gOiBudWxsO1xuICB2YXIgZGF0YSA9IHtcbiAgICB4OiAwLFxuICAgIHk6IDBcbiAgfTtcblxuICBpZiAoIXBvcHBlck9mZnNldHMpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoY2hlY2tNYWluQXhpcykge1xuICAgIHZhciBfb2Zmc2V0TW9kaWZpZXJTdGF0ZSQ7XG5cbiAgICB2YXIgbWFpblNpZGUgPSBtYWluQXhpcyA9PT0gJ3knID8gdG9wIDogbGVmdDtcbiAgICB2YXIgYWx0U2lkZSA9IG1haW5BeGlzID09PSAneScgPyBib3R0b20gOiByaWdodDtcbiAgICB2YXIgbGVuID0gbWFpbkF4aXMgPT09ICd5JyA/ICdoZWlnaHQnIDogJ3dpZHRoJztcbiAgICB2YXIgb2Zmc2V0ID0gcG9wcGVyT2Zmc2V0c1ttYWluQXhpc107XG4gICAgdmFyIG1pbiA9IG9mZnNldCArIG92ZXJmbG93W21haW5TaWRlXTtcbiAgICB2YXIgbWF4ID0gb2Zmc2V0IC0gb3ZlcmZsb3dbYWx0U2lkZV07XG4gICAgdmFyIGFkZGl0aXZlID0gdGV0aGVyID8gLXBvcHBlclJlY3RbbGVuXSAvIDIgOiAwO1xuICAgIHZhciBtaW5MZW4gPSB2YXJpYXRpb24gPT09IHN0YXJ0ID8gcmVmZXJlbmNlUmVjdFtsZW5dIDogcG9wcGVyUmVjdFtsZW5dO1xuICAgIHZhciBtYXhMZW4gPSB2YXJpYXRpb24gPT09IHN0YXJ0ID8gLXBvcHBlclJlY3RbbGVuXSA6IC1yZWZlcmVuY2VSZWN0W2xlbl07IC8vIFdlIG5lZWQgdG8gaW5jbHVkZSB0aGUgYXJyb3cgaW4gdGhlIGNhbGN1bGF0aW9uIHNvIHRoZSBhcnJvdyBkb2Vzbid0IGdvXG4gICAgLy8gb3V0c2lkZSB0aGUgcmVmZXJlbmNlIGJvdW5kc1xuXG4gICAgdmFyIGFycm93RWxlbWVudCA9IHN0YXRlLmVsZW1lbnRzLmFycm93O1xuICAgIHZhciBhcnJvd1JlY3QgPSB0ZXRoZXIgJiYgYXJyb3dFbGVtZW50ID8gZ2V0TGF5b3V0UmVjdChhcnJvd0VsZW1lbnQpIDoge1xuICAgICAgd2lkdGg6IDAsXG4gICAgICBoZWlnaHQ6IDBcbiAgICB9O1xuICAgIHZhciBhcnJvd1BhZGRpbmdPYmplY3QgPSBzdGF0ZS5tb2RpZmllcnNEYXRhWydhcnJvdyNwZXJzaXN0ZW50J10gPyBzdGF0ZS5tb2RpZmllcnNEYXRhWydhcnJvdyNwZXJzaXN0ZW50J10ucGFkZGluZyA6IGdldEZyZXNoU2lkZU9iamVjdCgpO1xuICAgIHZhciBhcnJvd1BhZGRpbmdNaW4gPSBhcnJvd1BhZGRpbmdPYmplY3RbbWFpblNpZGVdO1xuICAgIHZhciBhcnJvd1BhZGRpbmdNYXggPSBhcnJvd1BhZGRpbmdPYmplY3RbYWx0U2lkZV07IC8vIElmIHRoZSByZWZlcmVuY2UgbGVuZ3RoIGlzIHNtYWxsZXIgdGhhbiB0aGUgYXJyb3cgbGVuZ3RoLCB3ZSBkb24ndCB3YW50XG4gICAgLy8gdG8gaW5jbHVkZSBpdHMgZnVsbCBzaXplIGluIHRoZSBjYWxjdWxhdGlvbi4gSWYgdGhlIHJlZmVyZW5jZSBpcyBzbWFsbFxuICAgIC8vIGFuZCBuZWFyIHRoZSBlZGdlIG9mIGEgYm91bmRhcnksIHRoZSBwb3BwZXIgY2FuIG92ZXJmbG93IGV2ZW4gaWYgdGhlXG4gICAgLy8gcmVmZXJlbmNlIGlzIG5vdCBvdmVyZmxvd2luZyBhcyB3ZWxsIChlLmcuIHZpcnR1YWwgZWxlbWVudHMgd2l0aCBub1xuICAgIC8vIHdpZHRoIG9yIGhlaWdodClcblxuICAgIHZhciBhcnJvd0xlbiA9IHdpdGhpbigwLCByZWZlcmVuY2VSZWN0W2xlbl0sIGFycm93UmVjdFtsZW5dKTtcbiAgICB2YXIgbWluT2Zmc2V0ID0gaXNCYXNlUGxhY2VtZW50ID8gcmVmZXJlbmNlUmVjdFtsZW5dIC8gMiAtIGFkZGl0aXZlIC0gYXJyb3dMZW4gLSBhcnJvd1BhZGRpbmdNaW4gLSBub3JtYWxpemVkVGV0aGVyT2Zmc2V0VmFsdWUubWFpbkF4aXMgOiBtaW5MZW4gLSBhcnJvd0xlbiAtIGFycm93UGFkZGluZ01pbiAtIG5vcm1hbGl6ZWRUZXRoZXJPZmZzZXRWYWx1ZS5tYWluQXhpcztcbiAgICB2YXIgbWF4T2Zmc2V0ID0gaXNCYXNlUGxhY2VtZW50ID8gLXJlZmVyZW5jZVJlY3RbbGVuXSAvIDIgKyBhZGRpdGl2ZSArIGFycm93TGVuICsgYXJyb3dQYWRkaW5nTWF4ICsgbm9ybWFsaXplZFRldGhlck9mZnNldFZhbHVlLm1haW5BeGlzIDogbWF4TGVuICsgYXJyb3dMZW4gKyBhcnJvd1BhZGRpbmdNYXggKyBub3JtYWxpemVkVGV0aGVyT2Zmc2V0VmFsdWUubWFpbkF4aXM7XG4gICAgdmFyIGFycm93T2Zmc2V0UGFyZW50ID0gc3RhdGUuZWxlbWVudHMuYXJyb3cgJiYgZ2V0T2Zmc2V0UGFyZW50KHN0YXRlLmVsZW1lbnRzLmFycm93KTtcbiAgICB2YXIgY2xpZW50T2Zmc2V0ID0gYXJyb3dPZmZzZXRQYXJlbnQgPyBtYWluQXhpcyA9PT0gJ3knID8gYXJyb3dPZmZzZXRQYXJlbnQuY2xpZW50VG9wIHx8IDAgOiBhcnJvd09mZnNldFBhcmVudC5jbGllbnRMZWZ0IHx8IDAgOiAwO1xuICAgIHZhciBvZmZzZXRNb2RpZmllclZhbHVlID0gKF9vZmZzZXRNb2RpZmllclN0YXRlJCA9IG9mZnNldE1vZGlmaWVyU3RhdGUgPT0gbnVsbCA/IHZvaWQgMCA6IG9mZnNldE1vZGlmaWVyU3RhdGVbbWFpbkF4aXNdKSAhPSBudWxsID8gX29mZnNldE1vZGlmaWVyU3RhdGUkIDogMDtcbiAgICB2YXIgdGV0aGVyTWluID0gb2Zmc2V0ICsgbWluT2Zmc2V0IC0gb2Zmc2V0TW9kaWZpZXJWYWx1ZSAtIGNsaWVudE9mZnNldDtcbiAgICB2YXIgdGV0aGVyTWF4ID0gb2Zmc2V0ICsgbWF4T2Zmc2V0IC0gb2Zmc2V0TW9kaWZpZXJWYWx1ZTtcbiAgICB2YXIgcHJldmVudGVkT2Zmc2V0ID0gd2l0aGluKHRldGhlciA/IG1hdGhNaW4obWluLCB0ZXRoZXJNaW4pIDogbWluLCBvZmZzZXQsIHRldGhlciA/IG1hdGhNYXgobWF4LCB0ZXRoZXJNYXgpIDogbWF4KTtcbiAgICBwb3BwZXJPZmZzZXRzW21haW5BeGlzXSA9IHByZXZlbnRlZE9mZnNldDtcbiAgICBkYXRhW21haW5BeGlzXSA9IHByZXZlbnRlZE9mZnNldCAtIG9mZnNldDtcbiAgfVxuXG4gIGlmIChjaGVja0FsdEF4aXMpIHtcbiAgICB2YXIgX29mZnNldE1vZGlmaWVyU3RhdGUkMjtcblxuICAgIHZhciBfbWFpblNpZGUgPSBtYWluQXhpcyA9PT0gJ3gnID8gdG9wIDogbGVmdDtcblxuICAgIHZhciBfYWx0U2lkZSA9IG1haW5BeGlzID09PSAneCcgPyBib3R0b20gOiByaWdodDtcblxuICAgIHZhciBfb2Zmc2V0ID0gcG9wcGVyT2Zmc2V0c1thbHRBeGlzXTtcblxuICAgIHZhciBfbGVuID0gYWx0QXhpcyA9PT0gJ3knID8gJ2hlaWdodCcgOiAnd2lkdGgnO1xuXG4gICAgdmFyIF9taW4gPSBfb2Zmc2V0ICsgb3ZlcmZsb3dbX21haW5TaWRlXTtcblxuICAgIHZhciBfbWF4ID0gX29mZnNldCAtIG92ZXJmbG93W19hbHRTaWRlXTtcblxuICAgIHZhciBpc09yaWdpblNpZGUgPSBbdG9wLCBsZWZ0XS5pbmRleE9mKGJhc2VQbGFjZW1lbnQpICE9PSAtMTtcblxuICAgIHZhciBfb2Zmc2V0TW9kaWZpZXJWYWx1ZSA9IChfb2Zmc2V0TW9kaWZpZXJTdGF0ZSQyID0gb2Zmc2V0TW9kaWZpZXJTdGF0ZSA9PSBudWxsID8gdm9pZCAwIDogb2Zmc2V0TW9kaWZpZXJTdGF0ZVthbHRBeGlzXSkgIT0gbnVsbCA/IF9vZmZzZXRNb2RpZmllclN0YXRlJDIgOiAwO1xuXG4gICAgdmFyIF90ZXRoZXJNaW4gPSBpc09yaWdpblNpZGUgPyBfbWluIDogX29mZnNldCAtIHJlZmVyZW5jZVJlY3RbX2xlbl0gLSBwb3BwZXJSZWN0W19sZW5dIC0gX29mZnNldE1vZGlmaWVyVmFsdWUgKyBub3JtYWxpemVkVGV0aGVyT2Zmc2V0VmFsdWUuYWx0QXhpcztcblxuICAgIHZhciBfdGV0aGVyTWF4ID0gaXNPcmlnaW5TaWRlID8gX29mZnNldCArIHJlZmVyZW5jZVJlY3RbX2xlbl0gKyBwb3BwZXJSZWN0W19sZW5dIC0gX29mZnNldE1vZGlmaWVyVmFsdWUgLSBub3JtYWxpemVkVGV0aGVyT2Zmc2V0VmFsdWUuYWx0QXhpcyA6IF9tYXg7XG5cbiAgICB2YXIgX3ByZXZlbnRlZE9mZnNldCA9IHRldGhlciAmJiBpc09yaWdpblNpZGUgPyB3aXRoaW5NYXhDbGFtcChfdGV0aGVyTWluLCBfb2Zmc2V0LCBfdGV0aGVyTWF4KSA6IHdpdGhpbih0ZXRoZXIgPyBfdGV0aGVyTWluIDogX21pbiwgX29mZnNldCwgdGV0aGVyID8gX3RldGhlck1heCA6IF9tYXgpO1xuXG4gICAgcG9wcGVyT2Zmc2V0c1thbHRBeGlzXSA9IF9wcmV2ZW50ZWRPZmZzZXQ7XG4gICAgZGF0YVthbHRBeGlzXSA9IF9wcmV2ZW50ZWRPZmZzZXQgLSBfb2Zmc2V0O1xuICB9XG5cbiAgc3RhdGUubW9kaWZpZXJzRGF0YVtuYW1lXSA9IGRhdGE7XG59IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdwcmV2ZW50T3ZlcmZsb3cnLFxuICBlbmFibGVkOiB0cnVlLFxuICBwaGFzZTogJ21haW4nLFxuICBmbjogcHJldmVudE92ZXJmbG93LFxuICByZXF1aXJlc0lmRXhpc3RzOiBbJ29mZnNldCddXG59OyIsICJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRIVE1MRWxlbWVudFNjcm9sbChlbGVtZW50KSB7XG4gIHJldHVybiB7XG4gICAgc2Nyb2xsTGVmdDogZWxlbWVudC5zY3JvbGxMZWZ0LFxuICAgIHNjcm9sbFRvcDogZWxlbWVudC5zY3JvbGxUb3BcbiAgfTtcbn0iLCAiaW1wb3J0IGdldFdpbmRvd1Njcm9sbCBmcm9tIFwiLi9nZXRXaW5kb3dTY3JvbGwuanNcIjtcbmltcG9ydCBnZXRXaW5kb3cgZnJvbSBcIi4vZ2V0V2luZG93LmpzXCI7XG5pbXBvcnQgeyBpc0hUTUxFbGVtZW50IH0gZnJvbSBcIi4vaW5zdGFuY2VPZi5qc1wiO1xuaW1wb3J0IGdldEhUTUxFbGVtZW50U2Nyb2xsIGZyb20gXCIuL2dldEhUTUxFbGVtZW50U2Nyb2xsLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXROb2RlU2Nyb2xsKG5vZGUpIHtcbiAgaWYgKG5vZGUgPT09IGdldFdpbmRvdyhub2RlKSB8fCAhaXNIVE1MRWxlbWVudChub2RlKSkge1xuICAgIHJldHVybiBnZXRXaW5kb3dTY3JvbGwobm9kZSk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGdldEhUTUxFbGVtZW50U2Nyb2xsKG5vZGUpO1xuICB9XG59IiwgImltcG9ydCBnZXRCb3VuZGluZ0NsaWVudFJlY3QgZnJvbSBcIi4vZ2V0Qm91bmRpbmdDbGllbnRSZWN0LmpzXCI7XG5pbXBvcnQgZ2V0Tm9kZVNjcm9sbCBmcm9tIFwiLi9nZXROb2RlU2Nyb2xsLmpzXCI7XG5pbXBvcnQgZ2V0Tm9kZU5hbWUgZnJvbSBcIi4vZ2V0Tm9kZU5hbWUuanNcIjtcbmltcG9ydCB7IGlzSFRNTEVsZW1lbnQgfSBmcm9tIFwiLi9pbnN0YW5jZU9mLmpzXCI7XG5pbXBvcnQgZ2V0V2luZG93U2Nyb2xsQmFyWCBmcm9tIFwiLi9nZXRXaW5kb3dTY3JvbGxCYXJYLmpzXCI7XG5pbXBvcnQgZ2V0RG9jdW1lbnRFbGVtZW50IGZyb20gXCIuL2dldERvY3VtZW50RWxlbWVudC5qc1wiO1xuaW1wb3J0IGlzU2Nyb2xsUGFyZW50IGZyb20gXCIuL2lzU2Nyb2xsUGFyZW50LmpzXCI7XG5pbXBvcnQgeyByb3VuZCB9IGZyb20gXCIuLi91dGlscy9tYXRoLmpzXCI7XG5cbmZ1bmN0aW9uIGlzRWxlbWVudFNjYWxlZChlbGVtZW50KSB7XG4gIHZhciByZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgdmFyIHNjYWxlWCA9IHJvdW5kKHJlY3Qud2lkdGgpIC8gZWxlbWVudC5vZmZzZXRXaWR0aCB8fCAxO1xuICB2YXIgc2NhbGVZID0gcm91bmQocmVjdC5oZWlnaHQpIC8gZWxlbWVudC5vZmZzZXRIZWlnaHQgfHwgMTtcbiAgcmV0dXJuIHNjYWxlWCAhPT0gMSB8fCBzY2FsZVkgIT09IDE7XG59IC8vIFJldHVybnMgdGhlIGNvbXBvc2l0ZSByZWN0IG9mIGFuIGVsZW1lbnQgcmVsYXRpdmUgdG8gaXRzIG9mZnNldFBhcmVudC5cbi8vIENvbXBvc2l0ZSBtZWFucyBpdCB0YWtlcyBpbnRvIGFjY291bnQgdHJhbnNmb3JtcyBhcyB3ZWxsIGFzIGxheW91dC5cblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRDb21wb3NpdGVSZWN0KGVsZW1lbnRPclZpcnR1YWxFbGVtZW50LCBvZmZzZXRQYXJlbnQsIGlzRml4ZWQpIHtcbiAgaWYgKGlzRml4ZWQgPT09IHZvaWQgMCkge1xuICAgIGlzRml4ZWQgPSBmYWxzZTtcbiAgfVxuXG4gIHZhciBpc09mZnNldFBhcmVudEFuRWxlbWVudCA9IGlzSFRNTEVsZW1lbnQob2Zmc2V0UGFyZW50KTtcbiAgdmFyIG9mZnNldFBhcmVudElzU2NhbGVkID0gaXNIVE1MRWxlbWVudChvZmZzZXRQYXJlbnQpICYmIGlzRWxlbWVudFNjYWxlZChvZmZzZXRQYXJlbnQpO1xuICB2YXIgZG9jdW1lbnRFbGVtZW50ID0gZ2V0RG9jdW1lbnRFbGVtZW50KG9mZnNldFBhcmVudCk7XG4gIHZhciByZWN0ID0gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KGVsZW1lbnRPclZpcnR1YWxFbGVtZW50LCBvZmZzZXRQYXJlbnRJc1NjYWxlZCwgaXNGaXhlZCk7XG4gIHZhciBzY3JvbGwgPSB7XG4gICAgc2Nyb2xsTGVmdDogMCxcbiAgICBzY3JvbGxUb3A6IDBcbiAgfTtcbiAgdmFyIG9mZnNldHMgPSB7XG4gICAgeDogMCxcbiAgICB5OiAwXG4gIH07XG5cbiAgaWYgKGlzT2Zmc2V0UGFyZW50QW5FbGVtZW50IHx8ICFpc09mZnNldFBhcmVudEFuRWxlbWVudCAmJiAhaXNGaXhlZCkge1xuICAgIGlmIChnZXROb2RlTmFtZShvZmZzZXRQYXJlbnQpICE9PSAnYm9keScgfHwgLy8gaHR0cHM6Ly9naXRodWIuY29tL3BvcHBlcmpzL3BvcHBlci1jb3JlL2lzc3Vlcy8xMDc4XG4gICAgaXNTY3JvbGxQYXJlbnQoZG9jdW1lbnRFbGVtZW50KSkge1xuICAgICAgc2Nyb2xsID0gZ2V0Tm9kZVNjcm9sbChvZmZzZXRQYXJlbnQpO1xuICAgIH1cblxuICAgIGlmIChpc0hUTUxFbGVtZW50KG9mZnNldFBhcmVudCkpIHtcbiAgICAgIG9mZnNldHMgPSBnZXRCb3VuZGluZ0NsaWVudFJlY3Qob2Zmc2V0UGFyZW50LCB0cnVlKTtcbiAgICAgIG9mZnNldHMueCArPSBvZmZzZXRQYXJlbnQuY2xpZW50TGVmdDtcbiAgICAgIG9mZnNldHMueSArPSBvZmZzZXRQYXJlbnQuY2xpZW50VG9wO1xuICAgIH0gZWxzZSBpZiAoZG9jdW1lbnRFbGVtZW50KSB7XG4gICAgICBvZmZzZXRzLnggPSBnZXRXaW5kb3dTY3JvbGxCYXJYKGRvY3VtZW50RWxlbWVudCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB4OiByZWN0LmxlZnQgKyBzY3JvbGwuc2Nyb2xsTGVmdCAtIG9mZnNldHMueCxcbiAgICB5OiByZWN0LnRvcCArIHNjcm9sbC5zY3JvbGxUb3AgLSBvZmZzZXRzLnksXG4gICAgd2lkdGg6IHJlY3Qud2lkdGgsXG4gICAgaGVpZ2h0OiByZWN0LmhlaWdodFxuICB9O1xufSIsICJpbXBvcnQgeyBtb2RpZmllclBoYXNlcyB9IGZyb20gXCIuLi9lbnVtcy5qc1wiOyAvLyBzb3VyY2U6IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzQ5ODc1MjU1XG5cbmZ1bmN0aW9uIG9yZGVyKG1vZGlmaWVycykge1xuICB2YXIgbWFwID0gbmV3IE1hcCgpO1xuICB2YXIgdmlzaXRlZCA9IG5ldyBTZXQoKTtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICBtb2RpZmllcnMuZm9yRWFjaChmdW5jdGlvbiAobW9kaWZpZXIpIHtcbiAgICBtYXAuc2V0KG1vZGlmaWVyLm5hbWUsIG1vZGlmaWVyKTtcbiAgfSk7IC8vIE9uIHZpc2l0aW5nIG9iamVjdCwgY2hlY2sgZm9yIGl0cyBkZXBlbmRlbmNpZXMgYW5kIHZpc2l0IHRoZW0gcmVjdXJzaXZlbHlcblxuICBmdW5jdGlvbiBzb3J0KG1vZGlmaWVyKSB7XG4gICAgdmlzaXRlZC5hZGQobW9kaWZpZXIubmFtZSk7XG4gICAgdmFyIHJlcXVpcmVzID0gW10uY29uY2F0KG1vZGlmaWVyLnJlcXVpcmVzIHx8IFtdLCBtb2RpZmllci5yZXF1aXJlc0lmRXhpc3RzIHx8IFtdKTtcbiAgICByZXF1aXJlcy5mb3JFYWNoKGZ1bmN0aW9uIChkZXApIHtcbiAgICAgIGlmICghdmlzaXRlZC5oYXMoZGVwKSkge1xuICAgICAgICB2YXIgZGVwTW9kaWZpZXIgPSBtYXAuZ2V0KGRlcCk7XG5cbiAgICAgICAgaWYgKGRlcE1vZGlmaWVyKSB7XG4gICAgICAgICAgc29ydChkZXBNb2RpZmllcik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXN1bHQucHVzaChtb2RpZmllcik7XG4gIH1cblxuICBtb2RpZmllcnMuZm9yRWFjaChmdW5jdGlvbiAobW9kaWZpZXIpIHtcbiAgICBpZiAoIXZpc2l0ZWQuaGFzKG1vZGlmaWVyLm5hbWUpKSB7XG4gICAgICAvLyBjaGVjayBmb3IgdmlzaXRlZCBvYmplY3RcbiAgICAgIHNvcnQobW9kaWZpZXIpO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG9yZGVyTW9kaWZpZXJzKG1vZGlmaWVycykge1xuICAvLyBvcmRlciBiYXNlZCBvbiBkZXBlbmRlbmNpZXNcbiAgdmFyIG9yZGVyZWRNb2RpZmllcnMgPSBvcmRlcihtb2RpZmllcnMpOyAvLyBvcmRlciBiYXNlZCBvbiBwaGFzZVxuXG4gIHJldHVybiBtb2RpZmllclBoYXNlcy5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgcGhhc2UpIHtcbiAgICByZXR1cm4gYWNjLmNvbmNhdChvcmRlcmVkTW9kaWZpZXJzLmZpbHRlcihmdW5jdGlvbiAobW9kaWZpZXIpIHtcbiAgICAgIHJldHVybiBtb2RpZmllci5waGFzZSA9PT0gcGhhc2U7XG4gICAgfSkpO1xuICB9LCBbXSk7XG59IiwgImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRlYm91bmNlKGZuKSB7XG4gIHZhciBwZW5kaW5nO1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIGlmICghcGVuZGluZykge1xuICAgICAgcGVuZGluZyA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gICAgICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHBlbmRpbmcgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgcmVzb2x2ZShmbigpKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcGVuZGluZztcbiAgfTtcbn0iLCAiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWVyZ2VCeU5hbWUobW9kaWZpZXJzKSB7XG4gIHZhciBtZXJnZWQgPSBtb2RpZmllcnMucmVkdWNlKGZ1bmN0aW9uIChtZXJnZWQsIGN1cnJlbnQpIHtcbiAgICB2YXIgZXhpc3RpbmcgPSBtZXJnZWRbY3VycmVudC5uYW1lXTtcbiAgICBtZXJnZWRbY3VycmVudC5uYW1lXSA9IGV4aXN0aW5nID8gT2JqZWN0LmFzc2lnbih7fSwgZXhpc3RpbmcsIGN1cnJlbnQsIHtcbiAgICAgIG9wdGlvbnM6IE9iamVjdC5hc3NpZ24oe30sIGV4aXN0aW5nLm9wdGlvbnMsIGN1cnJlbnQub3B0aW9ucyksXG4gICAgICBkYXRhOiBPYmplY3QuYXNzaWduKHt9LCBleGlzdGluZy5kYXRhLCBjdXJyZW50LmRhdGEpXG4gICAgfSkgOiBjdXJyZW50O1xuICAgIHJldHVybiBtZXJnZWQ7XG4gIH0sIHt9KTsgLy8gSUUxMSBkb2VzIG5vdCBzdXBwb3J0IE9iamVjdC52YWx1ZXNcblxuICByZXR1cm4gT2JqZWN0LmtleXMobWVyZ2VkKS5tYXAoZnVuY3Rpb24gKGtleSkge1xuICAgIHJldHVybiBtZXJnZWRba2V5XTtcbiAgfSk7XG59IiwgImltcG9ydCBnZXRDb21wb3NpdGVSZWN0IGZyb20gXCIuL2RvbS11dGlscy9nZXRDb21wb3NpdGVSZWN0LmpzXCI7XG5pbXBvcnQgZ2V0TGF5b3V0UmVjdCBmcm9tIFwiLi9kb20tdXRpbHMvZ2V0TGF5b3V0UmVjdC5qc1wiO1xuaW1wb3J0IGxpc3RTY3JvbGxQYXJlbnRzIGZyb20gXCIuL2RvbS11dGlscy9saXN0U2Nyb2xsUGFyZW50cy5qc1wiO1xuaW1wb3J0IGdldE9mZnNldFBhcmVudCBmcm9tIFwiLi9kb20tdXRpbHMvZ2V0T2Zmc2V0UGFyZW50LmpzXCI7XG5pbXBvcnQgb3JkZXJNb2RpZmllcnMgZnJvbSBcIi4vdXRpbHMvb3JkZXJNb2RpZmllcnMuanNcIjtcbmltcG9ydCBkZWJvdW5jZSBmcm9tIFwiLi91dGlscy9kZWJvdW5jZS5qc1wiO1xuaW1wb3J0IG1lcmdlQnlOYW1lIGZyb20gXCIuL3V0aWxzL21lcmdlQnlOYW1lLmpzXCI7XG5pbXBvcnQgZGV0ZWN0T3ZlcmZsb3cgZnJvbSBcIi4vdXRpbHMvZGV0ZWN0T3ZlcmZsb3cuanNcIjtcbmltcG9ydCB7IGlzRWxlbWVudCB9IGZyb20gXCIuL2RvbS11dGlscy9pbnN0YW5jZU9mLmpzXCI7XG52YXIgREVGQVVMVF9PUFRJT05TID0ge1xuICBwbGFjZW1lbnQ6ICdib3R0b20nLFxuICBtb2RpZmllcnM6IFtdLFxuICBzdHJhdGVneTogJ2Fic29sdXRlJ1xufTtcblxuZnVuY3Rpb24gYXJlVmFsaWRFbGVtZW50cygpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIHJldHVybiAhYXJncy5zb21lKGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgcmV0dXJuICEoZWxlbWVudCAmJiB0eXBlb2YgZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QgPT09ICdmdW5jdGlvbicpO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBvcHBlckdlbmVyYXRvcihnZW5lcmF0b3JPcHRpb25zKSB7XG4gIGlmIChnZW5lcmF0b3JPcHRpb25zID09PSB2b2lkIDApIHtcbiAgICBnZW5lcmF0b3JPcHRpb25zID0ge307XG4gIH1cblxuICB2YXIgX2dlbmVyYXRvck9wdGlvbnMgPSBnZW5lcmF0b3JPcHRpb25zLFxuICAgICAgX2dlbmVyYXRvck9wdGlvbnMkZGVmID0gX2dlbmVyYXRvck9wdGlvbnMuZGVmYXVsdE1vZGlmaWVycyxcbiAgICAgIGRlZmF1bHRNb2RpZmllcnMgPSBfZ2VuZXJhdG9yT3B0aW9ucyRkZWYgPT09IHZvaWQgMCA/IFtdIDogX2dlbmVyYXRvck9wdGlvbnMkZGVmLFxuICAgICAgX2dlbmVyYXRvck9wdGlvbnMkZGVmMiA9IF9nZW5lcmF0b3JPcHRpb25zLmRlZmF1bHRPcHRpb25zLFxuICAgICAgZGVmYXVsdE9wdGlvbnMgPSBfZ2VuZXJhdG9yT3B0aW9ucyRkZWYyID09PSB2b2lkIDAgPyBERUZBVUxUX09QVElPTlMgOiBfZ2VuZXJhdG9yT3B0aW9ucyRkZWYyO1xuICByZXR1cm4gZnVuY3Rpb24gY3JlYXRlUG9wcGVyKHJlZmVyZW5jZSwgcG9wcGVyLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkge1xuICAgICAgb3B0aW9ucyA9IGRlZmF1bHRPcHRpb25zO1xuICAgIH1cblxuICAgIHZhciBzdGF0ZSA9IHtcbiAgICAgIHBsYWNlbWVudDogJ2JvdHRvbScsXG4gICAgICBvcmRlcmVkTW9kaWZpZXJzOiBbXSxcbiAgICAgIG9wdGlvbnM6IE9iamVjdC5hc3NpZ24oe30sIERFRkFVTFRfT1BUSU9OUywgZGVmYXVsdE9wdGlvbnMpLFxuICAgICAgbW9kaWZpZXJzRGF0YToge30sXG4gICAgICBlbGVtZW50czoge1xuICAgICAgICByZWZlcmVuY2U6IHJlZmVyZW5jZSxcbiAgICAgICAgcG9wcGVyOiBwb3BwZXJcbiAgICAgIH0sXG4gICAgICBhdHRyaWJ1dGVzOiB7fSxcbiAgICAgIHN0eWxlczoge31cbiAgICB9O1xuICAgIHZhciBlZmZlY3RDbGVhbnVwRm5zID0gW107XG4gICAgdmFyIGlzRGVzdHJveWVkID0gZmFsc2U7XG4gICAgdmFyIGluc3RhbmNlID0ge1xuICAgICAgc3RhdGU6IHN0YXRlLFxuICAgICAgc2V0T3B0aW9uczogZnVuY3Rpb24gc2V0T3B0aW9ucyhzZXRPcHRpb25zQWN0aW9uKSB7XG4gICAgICAgIHZhciBvcHRpb25zID0gdHlwZW9mIHNldE9wdGlvbnNBY3Rpb24gPT09ICdmdW5jdGlvbicgPyBzZXRPcHRpb25zQWN0aW9uKHN0YXRlLm9wdGlvbnMpIDogc2V0T3B0aW9uc0FjdGlvbjtcbiAgICAgICAgY2xlYW51cE1vZGlmaWVyRWZmZWN0cygpO1xuICAgICAgICBzdGF0ZS5vcHRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwgZGVmYXVsdE9wdGlvbnMsIHN0YXRlLm9wdGlvbnMsIG9wdGlvbnMpO1xuICAgICAgICBzdGF0ZS5zY3JvbGxQYXJlbnRzID0ge1xuICAgICAgICAgIHJlZmVyZW5jZTogaXNFbGVtZW50KHJlZmVyZW5jZSkgPyBsaXN0U2Nyb2xsUGFyZW50cyhyZWZlcmVuY2UpIDogcmVmZXJlbmNlLmNvbnRleHRFbGVtZW50ID8gbGlzdFNjcm9sbFBhcmVudHMocmVmZXJlbmNlLmNvbnRleHRFbGVtZW50KSA6IFtdLFxuICAgICAgICAgIHBvcHBlcjogbGlzdFNjcm9sbFBhcmVudHMocG9wcGVyKVxuICAgICAgICB9OyAvLyBPcmRlcnMgdGhlIG1vZGlmaWVycyBiYXNlZCBvbiB0aGVpciBkZXBlbmRlbmNpZXMgYW5kIGBwaGFzZWBcbiAgICAgICAgLy8gcHJvcGVydGllc1xuXG4gICAgICAgIHZhciBvcmRlcmVkTW9kaWZpZXJzID0gb3JkZXJNb2RpZmllcnMobWVyZ2VCeU5hbWUoW10uY29uY2F0KGRlZmF1bHRNb2RpZmllcnMsIHN0YXRlLm9wdGlvbnMubW9kaWZpZXJzKSkpOyAvLyBTdHJpcCBvdXQgZGlzYWJsZWQgbW9kaWZpZXJzXG5cbiAgICAgICAgc3RhdGUub3JkZXJlZE1vZGlmaWVycyA9IG9yZGVyZWRNb2RpZmllcnMuZmlsdGVyKGZ1bmN0aW9uIChtKSB7XG4gICAgICAgICAgcmV0dXJuIG0uZW5hYmxlZDtcbiAgICAgICAgfSk7XG4gICAgICAgIHJ1bk1vZGlmaWVyRWZmZWN0cygpO1xuICAgICAgICByZXR1cm4gaW5zdGFuY2UudXBkYXRlKCk7XG4gICAgICB9LFxuICAgICAgLy8gU3luYyB1cGRhdGUg4oCTIGl0IHdpbGwgYWx3YXlzIGJlIGV4ZWN1dGVkLCBldmVuIGlmIG5vdCBuZWNlc3NhcnkuIFRoaXNcbiAgICAgIC8vIGlzIHVzZWZ1bCBmb3IgbG93IGZyZXF1ZW5jeSB1cGRhdGVzIHdoZXJlIHN5bmMgYmVoYXZpb3Igc2ltcGxpZmllcyB0aGVcbiAgICAgIC8vIGxvZ2ljLlxuICAgICAgLy8gRm9yIGhpZ2ggZnJlcXVlbmN5IHVwZGF0ZXMgKGUuZy4gYHJlc2l6ZWAgYW5kIGBzY3JvbGxgIGV2ZW50cyksIGFsd2F5c1xuICAgICAgLy8gcHJlZmVyIHRoZSBhc3luYyBQb3BwZXIjdXBkYXRlIG1ldGhvZFxuICAgICAgZm9yY2VVcGRhdGU6IGZ1bmN0aW9uIGZvcmNlVXBkYXRlKCkge1xuICAgICAgICBpZiAoaXNEZXN0cm95ZWQpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgX3N0YXRlJGVsZW1lbnRzID0gc3RhdGUuZWxlbWVudHMsXG4gICAgICAgICAgICByZWZlcmVuY2UgPSBfc3RhdGUkZWxlbWVudHMucmVmZXJlbmNlLFxuICAgICAgICAgICAgcG9wcGVyID0gX3N0YXRlJGVsZW1lbnRzLnBvcHBlcjsgLy8gRG9uJ3QgcHJvY2VlZCBpZiBgcmVmZXJlbmNlYCBvciBgcG9wcGVyYCBhcmUgbm90IHZhbGlkIGVsZW1lbnRzXG4gICAgICAgIC8vIGFueW1vcmVcblxuICAgICAgICBpZiAoIWFyZVZhbGlkRWxlbWVudHMocmVmZXJlbmNlLCBwb3BwZXIpKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IC8vIFN0b3JlIHRoZSByZWZlcmVuY2UgYW5kIHBvcHBlciByZWN0cyB0byBiZSByZWFkIGJ5IG1vZGlmaWVyc1xuXG5cbiAgICAgICAgc3RhdGUucmVjdHMgPSB7XG4gICAgICAgICAgcmVmZXJlbmNlOiBnZXRDb21wb3NpdGVSZWN0KHJlZmVyZW5jZSwgZ2V0T2Zmc2V0UGFyZW50KHBvcHBlciksIHN0YXRlLm9wdGlvbnMuc3RyYXRlZ3kgPT09ICdmaXhlZCcpLFxuICAgICAgICAgIHBvcHBlcjogZ2V0TGF5b3V0UmVjdChwb3BwZXIpXG4gICAgICAgIH07IC8vIE1vZGlmaWVycyBoYXZlIHRoZSBhYmlsaXR5IHRvIHJlc2V0IHRoZSBjdXJyZW50IHVwZGF0ZSBjeWNsZS4gVGhlXG4gICAgICAgIC8vIG1vc3QgY29tbW9uIHVzZSBjYXNlIGZvciB0aGlzIGlzIHRoZSBgZmxpcGAgbW9kaWZpZXIgY2hhbmdpbmcgdGhlXG4gICAgICAgIC8vIHBsYWNlbWVudCwgd2hpY2ggdGhlbiBuZWVkcyB0byByZS1ydW4gYWxsIHRoZSBtb2RpZmllcnMsIGJlY2F1c2UgdGhlXG4gICAgICAgIC8vIGxvZ2ljIHdhcyBwcmV2aW91c2x5IHJhbiBmb3IgdGhlIHByZXZpb3VzIHBsYWNlbWVudCBhbmQgaXMgdGhlcmVmb3JlXG4gICAgICAgIC8vIHN0YWxlL2luY29ycmVjdFxuXG4gICAgICAgIHN0YXRlLnJlc2V0ID0gZmFsc2U7XG4gICAgICAgIHN0YXRlLnBsYWNlbWVudCA9IHN0YXRlLm9wdGlvbnMucGxhY2VtZW50OyAvLyBPbiBlYWNoIHVwZGF0ZSBjeWNsZSwgdGhlIGBtb2RpZmllcnNEYXRhYCBwcm9wZXJ0eSBmb3IgZWFjaCBtb2RpZmllclxuICAgICAgICAvLyBpcyBmaWxsZWQgd2l0aCB0aGUgaW5pdGlhbCBkYXRhIHNwZWNpZmllZCBieSB0aGUgbW9kaWZpZXIuIFRoaXMgbWVhbnNcbiAgICAgICAgLy8gaXQgZG9lc24ndCBwZXJzaXN0IGFuZCBpcyBmcmVzaCBvbiBlYWNoIHVwZGF0ZS5cbiAgICAgICAgLy8gVG8gZW5zdXJlIHBlcnNpc3RlbnQgZGF0YSwgdXNlIGAke25hbWV9I3BlcnNpc3RlbnRgXG5cbiAgICAgICAgc3RhdGUub3JkZXJlZE1vZGlmaWVycy5mb3JFYWNoKGZ1bmN0aW9uIChtb2RpZmllcikge1xuICAgICAgICAgIHJldHVybiBzdGF0ZS5tb2RpZmllcnNEYXRhW21vZGlmaWVyLm5hbWVdID0gT2JqZWN0LmFzc2lnbih7fSwgbW9kaWZpZXIuZGF0YSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCBzdGF0ZS5vcmRlcmVkTW9kaWZpZXJzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgIGlmIChzdGF0ZS5yZXNldCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgc3RhdGUucmVzZXQgPSBmYWxzZTtcbiAgICAgICAgICAgIGluZGV4ID0gLTE7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB2YXIgX3N0YXRlJG9yZGVyZWRNb2RpZmllID0gc3RhdGUub3JkZXJlZE1vZGlmaWVyc1tpbmRleF0sXG4gICAgICAgICAgICAgIGZuID0gX3N0YXRlJG9yZGVyZWRNb2RpZmllLmZuLFxuICAgICAgICAgICAgICBfc3RhdGUkb3JkZXJlZE1vZGlmaWUyID0gX3N0YXRlJG9yZGVyZWRNb2RpZmllLm9wdGlvbnMsXG4gICAgICAgICAgICAgIF9vcHRpb25zID0gX3N0YXRlJG9yZGVyZWRNb2RpZmllMiA9PT0gdm9pZCAwID8ge30gOiBfc3RhdGUkb3JkZXJlZE1vZGlmaWUyLFxuICAgICAgICAgICAgICBuYW1lID0gX3N0YXRlJG9yZGVyZWRNb2RpZmllLm5hbWU7XG5cbiAgICAgICAgICBpZiAodHlwZW9mIGZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBzdGF0ZSA9IGZuKHtcbiAgICAgICAgICAgICAgc3RhdGU6IHN0YXRlLFxuICAgICAgICAgICAgICBvcHRpb25zOiBfb3B0aW9ucyxcbiAgICAgICAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgICAgICAgaW5zdGFuY2U6IGluc3RhbmNlXG4gICAgICAgICAgICB9KSB8fCBzdGF0ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAvLyBBc3luYyBhbmQgb3B0aW1pc3RpY2FsbHkgb3B0aW1pemVkIHVwZGF0ZSDigJMgaXQgd2lsbCBub3QgYmUgZXhlY3V0ZWQgaWZcbiAgICAgIC8vIG5vdCBuZWNlc3NhcnkgKGRlYm91bmNlZCB0byBydW4gYXQgbW9zdCBvbmNlLXBlci10aWNrKVxuICAgICAgdXBkYXRlOiBkZWJvdW5jZShmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xuICAgICAgICAgIGluc3RhbmNlLmZvcmNlVXBkYXRlKCk7XG4gICAgICAgICAgcmVzb2x2ZShzdGF0ZSk7XG4gICAgICAgIH0pO1xuICAgICAgfSksXG4gICAgICBkZXN0cm95OiBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgICAgICBjbGVhbnVwTW9kaWZpZXJFZmZlY3RzKCk7XG4gICAgICAgIGlzRGVzdHJveWVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgaWYgKCFhcmVWYWxpZEVsZW1lbnRzKHJlZmVyZW5jZSwgcG9wcGVyKSkge1xuICAgICAgcmV0dXJuIGluc3RhbmNlO1xuICAgIH1cblxuICAgIGluc3RhbmNlLnNldE9wdGlvbnMob3B0aW9ucykudGhlbihmdW5jdGlvbiAoc3RhdGUpIHtcbiAgICAgIGlmICghaXNEZXN0cm95ZWQgJiYgb3B0aW9ucy5vbkZpcnN0VXBkYXRlKSB7XG4gICAgICAgIG9wdGlvbnMub25GaXJzdFVwZGF0ZShzdGF0ZSk7XG4gICAgICB9XG4gICAgfSk7IC8vIE1vZGlmaWVycyBoYXZlIHRoZSBhYmlsaXR5IHRvIGV4ZWN1dGUgYXJiaXRyYXJ5IGNvZGUgYmVmb3JlIHRoZSBmaXJzdFxuICAgIC8vIHVwZGF0ZSBjeWNsZSBydW5zLiBUaGV5IHdpbGwgYmUgZXhlY3V0ZWQgaW4gdGhlIHNhbWUgb3JkZXIgYXMgdGhlIHVwZGF0ZVxuICAgIC8vIGN5Y2xlLiBUaGlzIGlzIHVzZWZ1bCB3aGVuIGEgbW9kaWZpZXIgYWRkcyBzb21lIHBlcnNpc3RlbnQgZGF0YSB0aGF0XG4gICAgLy8gb3RoZXIgbW9kaWZpZXJzIG5lZWQgdG8gdXNlLCBidXQgdGhlIG1vZGlmaWVyIGlzIHJ1biBhZnRlciB0aGUgZGVwZW5kZW50XG4gICAgLy8gb25lLlxuXG4gICAgZnVuY3Rpb24gcnVuTW9kaWZpZXJFZmZlY3RzKCkge1xuICAgICAgc3RhdGUub3JkZXJlZE1vZGlmaWVycy5mb3JFYWNoKGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgICAgIHZhciBuYW1lID0gX3JlZi5uYW1lLFxuICAgICAgICAgICAgX3JlZiRvcHRpb25zID0gX3JlZi5vcHRpb25zLFxuICAgICAgICAgICAgb3B0aW9ucyA9IF9yZWYkb3B0aW9ucyA9PT0gdm9pZCAwID8ge30gOiBfcmVmJG9wdGlvbnMsXG4gICAgICAgICAgICBlZmZlY3QgPSBfcmVmLmVmZmVjdDtcblxuICAgICAgICBpZiAodHlwZW9mIGVmZmVjdCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIHZhciBjbGVhbnVwRm4gPSBlZmZlY3Qoe1xuICAgICAgICAgICAgc3RhdGU6IHN0YXRlLFxuICAgICAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgICAgIGluc3RhbmNlOiBpbnN0YW5jZSxcbiAgICAgICAgICAgIG9wdGlvbnM6IG9wdGlvbnNcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIHZhciBub29wRm4gPSBmdW5jdGlvbiBub29wRm4oKSB7fTtcblxuICAgICAgICAgIGVmZmVjdENsZWFudXBGbnMucHVzaChjbGVhbnVwRm4gfHwgbm9vcEZuKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2xlYW51cE1vZGlmaWVyRWZmZWN0cygpIHtcbiAgICAgIGVmZmVjdENsZWFudXBGbnMuZm9yRWFjaChmdW5jdGlvbiAoZm4pIHtcbiAgICAgICAgcmV0dXJuIGZuKCk7XG4gICAgICB9KTtcbiAgICAgIGVmZmVjdENsZWFudXBGbnMgPSBbXTtcbiAgICB9XG5cbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH07XG59XG5leHBvcnQgdmFyIGNyZWF0ZVBvcHBlciA9IC8qI19fUFVSRV9fKi9wb3BwZXJHZW5lcmF0b3IoKTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5leHBvcnQgeyBkZXRlY3RPdmVyZmxvdyB9OyIsICJpbXBvcnQgeyBwb3BwZXJHZW5lcmF0b3IsIGRldGVjdE92ZXJmbG93IH0gZnJvbSBcIi4vY3JlYXRlUG9wcGVyLmpzXCI7XG5pbXBvcnQgZXZlbnRMaXN0ZW5lcnMgZnJvbSBcIi4vbW9kaWZpZXJzL2V2ZW50TGlzdGVuZXJzLmpzXCI7XG5pbXBvcnQgcG9wcGVyT2Zmc2V0cyBmcm9tIFwiLi9tb2RpZmllcnMvcG9wcGVyT2Zmc2V0cy5qc1wiO1xuaW1wb3J0IGNvbXB1dGVTdHlsZXMgZnJvbSBcIi4vbW9kaWZpZXJzL2NvbXB1dGVTdHlsZXMuanNcIjtcbmltcG9ydCBhcHBseVN0eWxlcyBmcm9tIFwiLi9tb2RpZmllcnMvYXBwbHlTdHlsZXMuanNcIjtcbmltcG9ydCBvZmZzZXQgZnJvbSBcIi4vbW9kaWZpZXJzL29mZnNldC5qc1wiO1xuaW1wb3J0IGZsaXAgZnJvbSBcIi4vbW9kaWZpZXJzL2ZsaXAuanNcIjtcbmltcG9ydCBwcmV2ZW50T3ZlcmZsb3cgZnJvbSBcIi4vbW9kaWZpZXJzL3ByZXZlbnRPdmVyZmxvdy5qc1wiO1xuaW1wb3J0IGFycm93IGZyb20gXCIuL21vZGlmaWVycy9hcnJvdy5qc1wiO1xuaW1wb3J0IGhpZGUgZnJvbSBcIi4vbW9kaWZpZXJzL2hpZGUuanNcIjtcbnZhciBkZWZhdWx0TW9kaWZpZXJzID0gW2V2ZW50TGlzdGVuZXJzLCBwb3BwZXJPZmZzZXRzLCBjb21wdXRlU3R5bGVzLCBhcHBseVN0eWxlcywgb2Zmc2V0LCBmbGlwLCBwcmV2ZW50T3ZlcmZsb3csIGFycm93LCBoaWRlXTtcbnZhciBjcmVhdGVQb3BwZXIgPSAvKiNfX1BVUkVfXyovcG9wcGVyR2VuZXJhdG9yKHtcbiAgZGVmYXVsdE1vZGlmaWVyczogZGVmYXVsdE1vZGlmaWVyc1xufSk7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuZXhwb3J0IHsgY3JlYXRlUG9wcGVyLCBwb3BwZXJHZW5lcmF0b3IsIGRlZmF1bHRNb2RpZmllcnMsIGRldGVjdE92ZXJmbG93IH07IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuZXhwb3J0IHsgY3JlYXRlUG9wcGVyIGFzIGNyZWF0ZVBvcHBlckxpdGUgfSBmcm9tIFwiLi9wb3BwZXItbGl0ZS5qc1wiOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cbmV4cG9ydCAqIGZyb20gXCIuL21vZGlmaWVycy9pbmRleC5qc1wiOyIsICJleHBvcnQgY29uc3QgUk9VTkRfQVJST1cgPVxuICAnPHN2ZyB3aWR0aD1cIjE2XCIgaGVpZ2h0PVwiNlwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48cGF0aCBkPVwiTTAgNnMxLjc5Ni0uMDEzIDQuNjctMy42MTVDNS44NTEuOSA2LjkzLjAwNiA4IDBjMS4wNy0uMDA2IDIuMTQ4Ljg4NyAzLjM0MyAyLjM4NUMxNC4yMzMgNi4wMDUgMTYgNiAxNiA2SDB6XCI+PC9zdmc+JztcblxuZXhwb3J0IGNvbnN0IEJPWF9DTEFTUyA9IGBfX05BTUVTUEFDRV9QUkVGSVhfXy1ib3hgO1xuZXhwb3J0IGNvbnN0IENPTlRFTlRfQ0xBU1MgPSBgX19OQU1FU1BBQ0VfUFJFRklYX18tY29udGVudGA7XG5leHBvcnQgY29uc3QgQkFDS0RST1BfQ0xBU1MgPSBgX19OQU1FU1BBQ0VfUFJFRklYX18tYmFja2Ryb3BgO1xuZXhwb3J0IGNvbnN0IEFSUk9XX0NMQVNTID0gYF9fTkFNRVNQQUNFX1BSRUZJWF9fLWFycm93YDtcbmV4cG9ydCBjb25zdCBTVkdfQVJST1dfQ0xBU1MgPSBgX19OQU1FU1BBQ0VfUFJFRklYX18tc3ZnLWFycm93YDtcblxuZXhwb3J0IGNvbnN0IFRPVUNIX09QVElPTlMgPSB7cGFzc2l2ZTogdHJ1ZSwgY2FwdHVyZTogdHJ1ZX07XG5cbmV4cG9ydCBjb25zdCBUSVBQWV9ERUZBVUxUX0FQUEVORF9UTyA9ICgpID0+IGRvY3VtZW50LmJvZHk7XG4iLCAiaW1wb3J0IHtCYXNlUGxhY2VtZW50LCBQbGFjZW1lbnR9IGZyb20gJy4vdHlwZXMnO1xuXG5leHBvcnQgZnVuY3Rpb24gaGFzT3duUHJvcGVydHkoXG4gIG9iajogUmVjb3JkPHN0cmluZywgdW5rbm93bj4sXG4gIGtleTogc3RyaW5nXG4pOiBib29sZWFuIHtcbiAgcmV0dXJuIHt9Lmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VmFsdWVBdEluZGV4T3JSZXR1cm48VD4oXG4gIHZhbHVlOiBUIHwgW1QgfCBudWxsLCBUIHwgbnVsbF0sXG4gIGluZGV4OiBudW1iZXIsXG4gIGRlZmF1bHRWYWx1ZTogVCB8IFtULCBUXVxuKTogVCB7XG4gIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgIGNvbnN0IHYgPSB2YWx1ZVtpbmRleF07XG4gICAgcmV0dXJuIHYgPT0gbnVsbFxuICAgICAgPyBBcnJheS5pc0FycmF5KGRlZmF1bHRWYWx1ZSlcbiAgICAgICAgPyBkZWZhdWx0VmFsdWVbaW5kZXhdXG4gICAgICAgIDogZGVmYXVsdFZhbHVlXG4gICAgICA6IHY7XG4gIH1cblxuICByZXR1cm4gdmFsdWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1R5cGUodmFsdWU6IGFueSwgdHlwZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gIGNvbnN0IHN0ciA9IHt9LnRvU3RyaW5nLmNhbGwodmFsdWUpO1xuICByZXR1cm4gc3RyLmluZGV4T2YoJ1tvYmplY3QnKSA9PT0gMCAmJiBzdHIuaW5kZXhPZihgJHt0eXBlfV1gKSA+IC0xO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW52b2tlV2l0aEFyZ3NPclJldHVybih2YWx1ZTogYW55LCBhcmdzOiBhbnlbXSk6IGFueSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicgPyB2YWx1ZSguLi5hcmdzKSA6IHZhbHVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVib3VuY2U8VD4oXG4gIGZuOiAoYXJnOiBUKSA9PiB2b2lkLFxuICBtczogbnVtYmVyXG4pOiAoYXJnOiBUKSA9PiB2b2lkIHtcbiAgLy8gQXZvaWQgd3JhcHBpbmcgaW4gYHNldFRpbWVvdXRgIGlmIG1zIGlzIDAgYW55d2F5XG4gIGlmIChtcyA9PT0gMCkge1xuICAgIHJldHVybiBmbjtcbiAgfVxuXG4gIGxldCB0aW1lb3V0OiBhbnk7XG5cbiAgcmV0dXJuIChhcmcpOiB2b2lkID0+IHtcbiAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgdGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgZm4oYXJnKTtcbiAgICB9LCBtcyk7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVQcm9wZXJ0aWVzPFQ+KG9iajogVCwga2V5czogc3RyaW5nW10pOiBQYXJ0aWFsPFQ+IHtcbiAgY29uc3QgY2xvbmUgPSB7Li4ub2JqfTtcbiAga2V5cy5mb3JFYWNoKChrZXkpID0+IHtcbiAgICBkZWxldGUgKGNsb25lIGFzIGFueSlba2V5XTtcbiAgfSk7XG4gIHJldHVybiBjbG9uZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNwbGl0QnlTcGFjZXModmFsdWU6IHN0cmluZyk6IHN0cmluZ1tdIHtcbiAgcmV0dXJuIHZhbHVlLnNwbGl0KC9cXHMrLykuZmlsdGVyKEJvb2xlYW4pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplVG9BcnJheTxUPih2YWx1ZTogVCB8IFRbXSk6IFRbXSB7XG4gIHJldHVybiAoW10gYXMgVFtdKS5jb25jYXQodmFsdWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHVzaElmVW5pcXVlPFQ+KGFycjogVFtdLCB2YWx1ZTogVCk6IHZvaWQge1xuICBpZiAoYXJyLmluZGV4T2YodmFsdWUpID09PSAtMSkge1xuICAgIGFyci5wdXNoKHZhbHVlKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYXBwZW5kUHhJZk51bWJlcih2YWx1ZTogc3RyaW5nIHwgbnVtYmVyKTogc3RyaW5nIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgPyBgJHt2YWx1ZX1weGAgOiB2YWx1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVuaXF1ZTxUPihhcnI6IFRbXSk6IFRbXSB7XG4gIHJldHVybiBhcnIuZmlsdGVyKChpdGVtLCBpbmRleCkgPT4gYXJyLmluZGV4T2YoaXRlbSkgPT09IGluZGV4KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldE51bWJlcih2YWx1ZTogc3RyaW5nIHwgbnVtYmVyKTogbnVtYmVyIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgPyB2YWx1ZSA6IHBhcnNlRmxvYXQodmFsdWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QmFzZVBsYWNlbWVudChwbGFjZW1lbnQ6IFBsYWNlbWVudCk6IEJhc2VQbGFjZW1lbnQge1xuICByZXR1cm4gcGxhY2VtZW50LnNwbGl0KCctJylbMF0gYXMgQmFzZVBsYWNlbWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFycmF5RnJvbSh2YWx1ZTogQXJyYXlMaWtlPGFueT4pOiBhbnlbXSB7XG4gIHJldHVybiBbXS5zbGljZS5jYWxsKHZhbHVlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVVuZGVmaW5lZFByb3BzKFxuICBvYmo6IFJlY29yZDxzdHJpbmcsIHVua25vd24+XG4pOiBQYXJ0aWFsPFJlY29yZDxzdHJpbmcsIHVua25vd24+PiB7XG4gIHJldHVybiBPYmplY3Qua2V5cyhvYmopLnJlZHVjZSgoYWNjLCBrZXkpID0+IHtcbiAgICBpZiAob2JqW2tleV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgKGFjYyBhcyBhbnkpW2tleV0gPSBvYmpba2V5XTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWNjO1xuICB9LCB7fSk7XG59XG4iLCAiaW1wb3J0IHtSZWZlcmVuY2VFbGVtZW50LCBUYXJnZXRzfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7UG9wcGVyVHJlZURhdGF9IGZyb20gJy4vdHlwZXMtaW50ZXJuYWwnO1xuaW1wb3J0IHthcnJheUZyb20sIGlzVHlwZSwgbm9ybWFsaXplVG9BcnJheSwgZ2V0QmFzZVBsYWNlbWVudH0gZnJvbSAnLi91dGlscyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBkaXYoKTogSFRNTERpdkVsZW1lbnQge1xuICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0VsZW1lbnQodmFsdWU6IHVua25vd24pOiB2YWx1ZSBpcyBFbGVtZW50IHwgRG9jdW1lbnRGcmFnbWVudCB7XG4gIHJldHVybiBbJ0VsZW1lbnQnLCAnRnJhZ21lbnQnXS5zb21lKCh0eXBlKSA9PiBpc1R5cGUodmFsdWUsIHR5cGUpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzTm9kZUxpc3QodmFsdWU6IHVua25vd24pOiB2YWx1ZSBpcyBOb2RlTGlzdCB7XG4gIHJldHVybiBpc1R5cGUodmFsdWUsICdOb2RlTGlzdCcpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNNb3VzZUV2ZW50KHZhbHVlOiB1bmtub3duKTogdmFsdWUgaXMgTW91c2VFdmVudCB7XG4gIHJldHVybiBpc1R5cGUodmFsdWUsICdNb3VzZUV2ZW50Jyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1JlZmVyZW5jZUVsZW1lbnQodmFsdWU6IGFueSk6IHZhbHVlIGlzIFJlZmVyZW5jZUVsZW1lbnQge1xuICByZXR1cm4gISEodmFsdWUgJiYgdmFsdWUuX3RpcHB5ICYmIHZhbHVlLl90aXBweS5yZWZlcmVuY2UgPT09IHZhbHVlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEFycmF5T2ZFbGVtZW50cyh2YWx1ZTogVGFyZ2V0cyk6IEVsZW1lbnRbXSB7XG4gIGlmIChpc0VsZW1lbnQodmFsdWUpKSB7XG4gICAgcmV0dXJuIFt2YWx1ZV07XG4gIH1cblxuICBpZiAoaXNOb2RlTGlzdCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gYXJyYXlGcm9tKHZhbHVlKTtcbiAgfVxuXG4gIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBhcnJheUZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCh2YWx1ZSkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0VHJhbnNpdGlvbkR1cmF0aW9uKFxuICBlbHM6IChIVE1MRGl2RWxlbWVudCB8IG51bGwpW10sXG4gIHZhbHVlOiBudW1iZXJcbik6IHZvaWQge1xuICBlbHMuZm9yRWFjaCgoZWwpID0+IHtcbiAgICBpZiAoZWwpIHtcbiAgICAgIGVsLnN0eWxlLnRyYW5zaXRpb25EdXJhdGlvbiA9IGAke3ZhbHVlfW1zYDtcbiAgICB9XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0VmlzaWJpbGl0eVN0YXRlKFxuICBlbHM6IChIVE1MRGl2RWxlbWVudCB8IG51bGwpW10sXG4gIHN0YXRlOiAndmlzaWJsZScgfCAnaGlkZGVuJ1xuKTogdm9pZCB7XG4gIGVscy5mb3JFYWNoKChlbCkgPT4ge1xuICAgIGlmIChlbCkge1xuICAgICAgZWwuc2V0QXR0cmlidXRlKCdkYXRhLXN0YXRlJywgc3RhdGUpO1xuICAgIH1cbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRPd25lckRvY3VtZW50KFxuICBlbGVtZW50T3JFbGVtZW50czogRWxlbWVudCB8IEVsZW1lbnRbXVxuKTogRG9jdW1lbnQge1xuICBjb25zdCBbZWxlbWVudF0gPSBub3JtYWxpemVUb0FycmF5KGVsZW1lbnRPckVsZW1lbnRzKTtcblxuICAvLyBFbGVtZW50cyBjcmVhdGVkIHZpYSBhIDx0ZW1wbGF0ZT4gaGF2ZSBhbiBvd25lckRvY3VtZW50IHdpdGggbm8gcmVmZXJlbmNlIHRvIHRoZSBib2R5XG4gIHJldHVybiBlbGVtZW50Py5vd25lckRvY3VtZW50Py5ib2R5ID8gZWxlbWVudC5vd25lckRvY3VtZW50IDogZG9jdW1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0N1cnNvck91dHNpZGVJbnRlcmFjdGl2ZUJvcmRlcihcbiAgcG9wcGVyVHJlZURhdGE6IFBvcHBlclRyZWVEYXRhW10sXG4gIGV2ZW50OiBNb3VzZUV2ZW50XG4pOiBib29sZWFuIHtcbiAgY29uc3Qge2NsaWVudFgsIGNsaWVudFl9ID0gZXZlbnQ7XG5cbiAgcmV0dXJuIHBvcHBlclRyZWVEYXRhLmV2ZXJ5KCh7cG9wcGVyUmVjdCwgcG9wcGVyU3RhdGUsIHByb3BzfSkgPT4ge1xuICAgIGNvbnN0IHtpbnRlcmFjdGl2ZUJvcmRlcn0gPSBwcm9wcztcbiAgICBjb25zdCBiYXNlUGxhY2VtZW50ID0gZ2V0QmFzZVBsYWNlbWVudChwb3BwZXJTdGF0ZS5wbGFjZW1lbnQpO1xuICAgIGNvbnN0IG9mZnNldERhdGEgPSBwb3BwZXJTdGF0ZS5tb2RpZmllcnNEYXRhLm9mZnNldDtcblxuICAgIGlmICghb2Zmc2V0RGF0YSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgY29uc3QgdG9wRGlzdGFuY2UgPSBiYXNlUGxhY2VtZW50ID09PSAnYm90dG9tJyA/IG9mZnNldERhdGEudG9wIS55IDogMDtcbiAgICBjb25zdCBib3R0b21EaXN0YW5jZSA9IGJhc2VQbGFjZW1lbnQgPT09ICd0b3AnID8gb2Zmc2V0RGF0YS5ib3R0b20hLnkgOiAwO1xuICAgIGNvbnN0IGxlZnREaXN0YW5jZSA9IGJhc2VQbGFjZW1lbnQgPT09ICdyaWdodCcgPyBvZmZzZXREYXRhLmxlZnQhLnggOiAwO1xuICAgIGNvbnN0IHJpZ2h0RGlzdGFuY2UgPSBiYXNlUGxhY2VtZW50ID09PSAnbGVmdCcgPyBvZmZzZXREYXRhLnJpZ2h0IS54IDogMDtcblxuICAgIGNvbnN0IGV4Y2VlZHNUb3AgPVxuICAgICAgcG9wcGVyUmVjdC50b3AgLSBjbGllbnRZICsgdG9wRGlzdGFuY2UgPiBpbnRlcmFjdGl2ZUJvcmRlcjtcbiAgICBjb25zdCBleGNlZWRzQm90dG9tID1cbiAgICAgIGNsaWVudFkgLSBwb3BwZXJSZWN0LmJvdHRvbSAtIGJvdHRvbURpc3RhbmNlID4gaW50ZXJhY3RpdmVCb3JkZXI7XG4gICAgY29uc3QgZXhjZWVkc0xlZnQgPVxuICAgICAgcG9wcGVyUmVjdC5sZWZ0IC0gY2xpZW50WCArIGxlZnREaXN0YW5jZSA+IGludGVyYWN0aXZlQm9yZGVyO1xuICAgIGNvbnN0IGV4Y2VlZHNSaWdodCA9XG4gICAgICBjbGllbnRYIC0gcG9wcGVyUmVjdC5yaWdodCAtIHJpZ2h0RGlzdGFuY2UgPiBpbnRlcmFjdGl2ZUJvcmRlcjtcblxuICAgIHJldHVybiBleGNlZWRzVG9wIHx8IGV4Y2VlZHNCb3R0b20gfHwgZXhjZWVkc0xlZnQgfHwgZXhjZWVkc1JpZ2h0O1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZVRyYW5zaXRpb25FbmRMaXN0ZW5lcihcbiAgYm94OiBIVE1MRGl2RWxlbWVudCxcbiAgYWN0aW9uOiAnYWRkJyB8ICdyZW1vdmUnLFxuICBsaXN0ZW5lcjogKGV2ZW50OiBUcmFuc2l0aW9uRXZlbnQpID0+IHZvaWRcbik6IHZvaWQge1xuICBjb25zdCBtZXRob2QgPSBgJHthY3Rpb259RXZlbnRMaXN0ZW5lcmAgYXNcbiAgICB8ICdhZGRFdmVudExpc3RlbmVyJ1xuICAgIHwgJ3JlbW92ZUV2ZW50TGlzdGVuZXInO1xuXG4gIC8vIHNvbWUgYnJvd3NlcnMgYXBwYXJlbnRseSBzdXBwb3J0IGB0cmFuc2l0aW9uYCAodW5wcmVmaXhlZCkgYnV0IG9ubHkgZmlyZVxuICAvLyBgd2Via2l0VHJhbnNpdGlvbkVuZGAuLi5cbiAgWyd0cmFuc2l0aW9uZW5kJywgJ3dlYmtpdFRyYW5zaXRpb25FbmQnXS5mb3JFYWNoKChldmVudCkgPT4ge1xuICAgIGJveFttZXRob2RdKGV2ZW50LCBsaXN0ZW5lciBhcyBFdmVudExpc3RlbmVyKTtcbiAgfSk7XG59XG5cbi8qKlxuICogQ29tcGFyZWQgdG8geHh4LmNvbnRhaW5zLCB0aGlzIGZ1bmN0aW9uIHdvcmtzIGZvciBkb20gc3RydWN0dXJlcyB3aXRoIHNoYWRvd1xuICogZG9tXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhY3R1YWxDb250YWlucyhwYXJlbnQ6IEVsZW1lbnQsIGNoaWxkOiBFbGVtZW50KTogYm9vbGVhbiB7XG4gIGxldCB0YXJnZXQgPSBjaGlsZDtcbiAgd2hpbGUgKHRhcmdldCkge1xuICAgIGlmIChwYXJlbnQuY29udGFpbnModGFyZ2V0KSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHRhcmdldCA9ICh0YXJnZXQuZ2V0Um9vdE5vZGU/LigpIGFzIGFueSk/Lmhvc3Q7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuIiwgImltcG9ydCB7VE9VQ0hfT1BUSU9OU30gZnJvbSAnLi9jb25zdGFudHMnO1xuaW1wb3J0IHtpc1JlZmVyZW5jZUVsZW1lbnR9IGZyb20gJy4vZG9tLXV0aWxzJztcblxuZXhwb3J0IGNvbnN0IGN1cnJlbnRJbnB1dCA9IHtpc1RvdWNoOiBmYWxzZX07XG5sZXQgbGFzdE1vdXNlTW92ZVRpbWUgPSAwO1xuXG4vKipcbiAqIFdoZW4gYSBgdG91Y2hzdGFydGAgZXZlbnQgaXMgZmlyZWQsIGl0J3MgYXNzdW1lZCB0aGUgdXNlciBpcyB1c2luZyB0b3VjaFxuICogaW5wdXQuIFdlJ2xsIGJpbmQgYSBgbW91c2Vtb3ZlYCBldmVudCBsaXN0ZW5lciB0byBsaXN0ZW4gZm9yIG1vdXNlIGlucHV0IGluXG4gKiB0aGUgZnV0dXJlLiBUaGlzIHdheSwgdGhlIGBpc1RvdWNoYCBwcm9wZXJ0eSBpcyBmdWxseSBkeW5hbWljIGFuZCB3aWxsIGhhbmRsZVxuICogaHlicmlkIGRldmljZXMgdGhhdCB1c2UgYSBtaXggb2YgdG91Y2ggKyBtb3VzZSBpbnB1dC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG9uRG9jdW1lbnRUb3VjaFN0YXJ0KCk6IHZvaWQge1xuICBpZiAoY3VycmVudElucHV0LmlzVG91Y2gpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBjdXJyZW50SW5wdXQuaXNUb3VjaCA9IHRydWU7XG5cbiAgaWYgKHdpbmRvdy5wZXJmb3JtYW5jZSkge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG9uRG9jdW1lbnRNb3VzZU1vdmUpO1xuICB9XG59XG5cbi8qKlxuICogV2hlbiB0d28gYG1vdXNlbW92ZWAgZXZlbnQgYXJlIGZpcmVkIGNvbnNlY3V0aXZlbHkgd2l0aGluIDIwbXMsIGl0J3MgYXNzdW1lZFxuICogdGhlIHVzZXIgaXMgdXNpbmcgbW91c2UgaW5wdXQgYWdhaW4uIGBtb3VzZW1vdmVgIGNhbiBmaXJlIG9uIHRvdWNoIGRldmljZXMgYXNcbiAqIHdlbGwsIGJ1dCB2ZXJ5IHJhcmVseSB0aGF0IHF1aWNrbHkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBvbkRvY3VtZW50TW91c2VNb3ZlKCk6IHZvaWQge1xuICBjb25zdCBub3cgPSBwZXJmb3JtYW5jZS5ub3coKTtcblxuICBpZiAobm93IC0gbGFzdE1vdXNlTW92ZVRpbWUgPCAyMCkge1xuICAgIGN1cnJlbnRJbnB1dC5pc1RvdWNoID0gZmFsc2U7XG5cbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBvbkRvY3VtZW50TW91c2VNb3ZlKTtcbiAgfVxuXG4gIGxhc3RNb3VzZU1vdmVUaW1lID0gbm93O1xufVxuXG4vKipcbiAqIFdoZW4gYW4gZWxlbWVudCBpcyBpbiBmb2N1cyBhbmQgaGFzIGEgdGlwcHksIGxlYXZpbmcgdGhlIHRhYi93aW5kb3cgYW5kXG4gKiByZXR1cm5pbmcgY2F1c2VzIGl0IHRvIHNob3cgYWdhaW4uIEZvciBtb3VzZSB1c2VycyB0aGlzIGlzIHVuZXhwZWN0ZWQsIGJ1dFxuICogZm9yIGtleWJvYXJkIHVzZSBpdCBtYWtlcyBzZW5zZS5cbiAqIFRPRE86IGZpbmQgYSBiZXR0ZXIgdGVjaG5pcXVlIHRvIHNvbHZlIHRoaXMgcHJvYmxlbVxuICovXG5leHBvcnQgZnVuY3Rpb24gb25XaW5kb3dCbHVyKCk6IHZvaWQge1xuICBjb25zdCBhY3RpdmVFbGVtZW50ID0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudCB8IG51bGw7XG5cbiAgaWYgKGlzUmVmZXJlbmNlRWxlbWVudChhY3RpdmVFbGVtZW50KSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gYWN0aXZlRWxlbWVudC5fdGlwcHkhO1xuXG4gICAgaWYgKGFjdGl2ZUVsZW1lbnQuYmx1ciAmJiAhaW5zdGFuY2Uuc3RhdGUuaXNWaXNpYmxlKSB7XG4gICAgICBhY3RpdmVFbGVtZW50LmJsdXIoKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYmluZEdsb2JhbEV2ZW50TGlzdGVuZXJzKCk6IHZvaWQge1xuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0Jywgb25Eb2N1bWVudFRvdWNoU3RhcnQsIFRPVUNIX09QVElPTlMpO1xuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIG9uV2luZG93Qmx1cik7XG59XG4iLCAiZXhwb3J0IGNvbnN0IGlzQnJvd3NlciA9XG4gIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCc7XG5cbmV4cG9ydCBjb25zdCBpc0lFMTEgPSBpc0Jyb3dzZXJcbiAgPyAvLyBAdHMtaWdub3JlXG4gICAgISF3aW5kb3cubXNDcnlwdG9cbiAgOiBmYWxzZTtcbiIsICJpbXBvcnQge1RhcmdldHN9IGZyb20gJy4vdHlwZXMnO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTWVtb3J5TGVha1dhcm5pbmcobWV0aG9kOiBzdHJpbmcpOiBzdHJpbmcge1xuICBjb25zdCB0eHQgPSBtZXRob2QgPT09ICdkZXN0cm95JyA/ICduIGFscmVhZHktJyA6ICcgJztcblxuICByZXR1cm4gW1xuICAgIGAke21ldGhvZH0oKSB3YXMgY2FsbGVkIG9uIGEke3R4dH1kZXN0cm95ZWQgaW5zdGFuY2UuIFRoaXMgaXMgYSBuby1vcCBidXRgLFxuICAgICdpbmRpY2F0ZXMgYSBwb3RlbnRpYWwgbWVtb3J5IGxlYWsuJyxcbiAgXS5qb2luKCcgJyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbGVhbih2YWx1ZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgY29uc3Qgc3BhY2VzQW5kVGFicyA9IC9bIFxcdF17Mix9L2c7XG4gIGNvbnN0IGxpbmVTdGFydFdpdGhTcGFjZXMgPSAvXlsgXFx0XSovZ207XG5cbiAgcmV0dXJuIHZhbHVlXG4gICAgLnJlcGxhY2Uoc3BhY2VzQW5kVGFicywgJyAnKVxuICAgIC5yZXBsYWNlKGxpbmVTdGFydFdpdGhTcGFjZXMsICcnKVxuICAgIC50cmltKCk7XG59XG5cbmZ1bmN0aW9uIGdldERldk1lc3NhZ2UobWVzc2FnZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIGNsZWFuKGBcbiAgJWN0aXBweS5qc1xuXG4gICVjJHtjbGVhbihtZXNzYWdlKX1cblxuICAlY/CfkbfigI0gVGhpcyBpcyBhIGRldmVsb3BtZW50LW9ubHkgbWVzc2FnZS4gSXQgd2lsbCBiZSByZW1vdmVkIGluIHByb2R1Y3Rpb24uXG4gIGApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Rm9ybWF0dGVkTWVzc2FnZShtZXNzYWdlOiBzdHJpbmcpOiBzdHJpbmdbXSB7XG4gIHJldHVybiBbXG4gICAgZ2V0RGV2TWVzc2FnZShtZXNzYWdlKSxcbiAgICAvLyB0aXRsZVxuICAgICdjb2xvcjogIzAwQzU4NDsgZm9udC1zaXplOiAxLjNlbTsgZm9udC13ZWlnaHQ6IGJvbGQ7JyxcbiAgICAvLyBtZXNzYWdlXG4gICAgJ2xpbmUtaGVpZ2h0OiAxLjUnLFxuICAgIC8vIGZvb3RlclxuICAgICdjb2xvcjogI2E2YTA5NTsnLFxuICBdO1xufVxuXG4vLyBBc3N1bWUgd2FybmluZ3MgYW5kIGVycm9ycyBuZXZlciBoYXZlIHRoZSBzYW1lIG1lc3NhZ2VcbmxldCB2aXNpdGVkTWVzc2FnZXM6IFNldDxzdHJpbmc+O1xuaWYgKF9fREVWX18pIHtcbiAgcmVzZXRWaXNpdGVkTWVzc2FnZXMoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlc2V0VmlzaXRlZE1lc3NhZ2VzKCk6IHZvaWQge1xuICB2aXNpdGVkTWVzc2FnZXMgPSBuZXcgU2V0KCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB3YXJuV2hlbihjb25kaXRpb246IGJvb2xlYW4sIG1lc3NhZ2U6IHN0cmluZyk6IHZvaWQge1xuICBpZiAoY29uZGl0aW9uICYmICF2aXNpdGVkTWVzc2FnZXMuaGFzKG1lc3NhZ2UpKSB7XG4gICAgdmlzaXRlZE1lc3NhZ2VzLmFkZChtZXNzYWdlKTtcbiAgICBjb25zb2xlLndhcm4oLi4uZ2V0Rm9ybWF0dGVkTWVzc2FnZShtZXNzYWdlKSk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVycm9yV2hlbihjb25kaXRpb246IGJvb2xlYW4sIG1lc3NhZ2U6IHN0cmluZyk6IHZvaWQge1xuICBpZiAoY29uZGl0aW9uICYmICF2aXNpdGVkTWVzc2FnZXMuaGFzKG1lc3NhZ2UpKSB7XG4gICAgdmlzaXRlZE1lc3NhZ2VzLmFkZChtZXNzYWdlKTtcbiAgICBjb25zb2xlLmVycm9yKC4uLmdldEZvcm1hdHRlZE1lc3NhZ2UobWVzc2FnZSkpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YWxpZGF0ZVRhcmdldHModGFyZ2V0czogVGFyZ2V0cyk6IHZvaWQge1xuICBjb25zdCBkaWRQYXNzRmFsc3lWYWx1ZSA9ICF0YXJnZXRzO1xuICBjb25zdCBkaWRQYXNzUGxhaW5PYmplY3QgPVxuICAgIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh0YXJnZXRzKSA9PT0gJ1tvYmplY3QgT2JqZWN0XScgJiZcbiAgICAhKHRhcmdldHMgYXMgYW55KS5hZGRFdmVudExpc3RlbmVyO1xuXG4gIGVycm9yV2hlbihcbiAgICBkaWRQYXNzRmFsc3lWYWx1ZSxcbiAgICBbXG4gICAgICAndGlwcHkoKSB3YXMgcGFzc2VkJyxcbiAgICAgICdgJyArIFN0cmluZyh0YXJnZXRzKSArICdgJyxcbiAgICAgICdhcyBpdHMgdGFyZ2V0cyAoZmlyc3QpIGFyZ3VtZW50LiBWYWxpZCB0eXBlcyBhcmU6IFN0cmluZywgRWxlbWVudCwnLFxuICAgICAgJ0VsZW1lbnRbXSwgb3IgTm9kZUxpc3QuJyxcbiAgICBdLmpvaW4oJyAnKVxuICApO1xuXG4gIGVycm9yV2hlbihcbiAgICBkaWRQYXNzUGxhaW5PYmplY3QsXG4gICAgW1xuICAgICAgJ3RpcHB5KCkgd2FzIHBhc3NlZCBhIHBsYWluIG9iamVjdCB3aGljaCBpcyBub3Qgc3VwcG9ydGVkIGFzIGFuIGFyZ3VtZW50JyxcbiAgICAgICdmb3IgdmlydHVhbCBwb3NpdGlvbmluZy4gVXNlIHByb3BzLmdldFJlZmVyZW5jZUNsaWVudFJlY3QgaW5zdGVhZC4nLFxuICAgIF0uam9pbignICcpXG4gICk7XG59XG4iLCAiaW1wb3J0IHtEZWZhdWx0UHJvcHMsIFBsdWdpbiwgUHJvcHMsIFJlZmVyZW5jZUVsZW1lbnQsIFRpcHB5fSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7XG4gIGhhc093blByb3BlcnR5LFxuICByZW1vdmVQcm9wZXJ0aWVzLFxuICBpbnZva2VXaXRoQXJnc09yUmV0dXJuLFxufSBmcm9tICcuL3V0aWxzJztcbmltcG9ydCB7d2FybldoZW59IGZyb20gJy4vdmFsaWRhdGlvbic7XG5pbXBvcnQge1RJUFBZX0RFRkFVTFRfQVBQRU5EX1RPfSBmcm9tICcuL2NvbnN0YW50cyc7XG5cbmNvbnN0IHBsdWdpblByb3BzID0ge1xuICBhbmltYXRlRmlsbDogZmFsc2UsXG4gIGZvbGxvd0N1cnNvcjogZmFsc2UsXG4gIGlubGluZVBvc2l0aW9uaW5nOiBmYWxzZSxcbiAgc3RpY2t5OiBmYWxzZSxcbn07XG5cbmNvbnN0IHJlbmRlclByb3BzID0ge1xuICBhbGxvd0hUTUw6IGZhbHNlLFxuICBhbmltYXRpb246ICdmYWRlJyxcbiAgYXJyb3c6IHRydWUsXG4gIGNvbnRlbnQ6ICcnLFxuICBpbmVydGlhOiBmYWxzZSxcbiAgbWF4V2lkdGg6IDM1MCxcbiAgcm9sZTogJ3Rvb2x0aXAnLFxuICB0aGVtZTogJycsXG4gIHpJbmRleDogOTk5OSxcbn07XG5cbmV4cG9ydCBjb25zdCBkZWZhdWx0UHJvcHM6IERlZmF1bHRQcm9wcyA9IHtcbiAgYXBwZW5kVG86IFRJUFBZX0RFRkFVTFRfQVBQRU5EX1RPLFxuICBhcmlhOiB7XG4gICAgY29udGVudDogJ2F1dG8nLFxuICAgIGV4cGFuZGVkOiAnYXV0bycsXG4gIH0sXG4gIGRlbGF5OiAwLFxuICBkdXJhdGlvbjogWzMwMCwgMjUwXSxcbiAgZ2V0UmVmZXJlbmNlQ2xpZW50UmVjdDogbnVsbCxcbiAgaGlkZU9uQ2xpY2s6IHRydWUsXG4gIGlnbm9yZUF0dHJpYnV0ZXM6IGZhbHNlLFxuICBpbnRlcmFjdGl2ZTogZmFsc2UsXG4gIGludGVyYWN0aXZlQm9yZGVyOiAyLFxuICBpbnRlcmFjdGl2ZURlYm91bmNlOiAwLFxuICBtb3ZlVHJhbnNpdGlvbjogJycsXG4gIG9mZnNldDogWzAsIDEwXSxcbiAgb25BZnRlclVwZGF0ZSgpIHt9LFxuICBvbkJlZm9yZVVwZGF0ZSgpIHt9LFxuICBvbkNyZWF0ZSgpIHt9LFxuICBvbkRlc3Ryb3koKSB7fSxcbiAgb25IaWRkZW4oKSB7fSxcbiAgb25IaWRlKCkge30sXG4gIG9uTW91bnQoKSB7fSxcbiAgb25TaG93KCkge30sXG4gIG9uU2hvd24oKSB7fSxcbiAgb25UcmlnZ2VyKCkge30sXG4gIG9uVW50cmlnZ2VyKCkge30sXG4gIG9uQ2xpY2tPdXRzaWRlKCkge30sXG4gIHBsYWNlbWVudDogJ3RvcCcsXG4gIHBsdWdpbnM6IFtdLFxuICBwb3BwZXJPcHRpb25zOiB7fSxcbiAgcmVuZGVyOiBudWxsLFxuICBzaG93T25DcmVhdGU6IGZhbHNlLFxuICB0b3VjaDogdHJ1ZSxcbiAgdHJpZ2dlcjogJ21vdXNlZW50ZXIgZm9jdXMnLFxuICB0cmlnZ2VyVGFyZ2V0OiBudWxsLFxuICAuLi5wbHVnaW5Qcm9wcyxcbiAgLi4ucmVuZGVyUHJvcHMsXG59O1xuXG5jb25zdCBkZWZhdWx0S2V5cyA9IE9iamVjdC5rZXlzKGRlZmF1bHRQcm9wcyk7XG5cbmV4cG9ydCBjb25zdCBzZXREZWZhdWx0UHJvcHM6IFRpcHB5WydzZXREZWZhdWx0UHJvcHMnXSA9IChwYXJ0aWFsUHJvcHMpID0+IHtcbiAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgaWYgKF9fREVWX18pIHtcbiAgICB2YWxpZGF0ZVByb3BzKHBhcnRpYWxQcm9wcywgW10pO1xuICB9XG5cbiAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHBhcnRpYWxQcm9wcykgYXMgQXJyYXk8a2V5b2YgRGVmYXVsdFByb3BzPjtcbiAga2V5cy5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAoZGVmYXVsdFByb3BzIGFzIGFueSlba2V5XSA9IHBhcnRpYWxQcm9wc1trZXldO1xuICB9KTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRFeHRlbmRlZFBhc3NlZFByb3BzKFxuICBwYXNzZWRQcm9wczogUGFydGlhbDxQcm9wcz4gJiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPlxuKTogUGFydGlhbDxQcm9wcz4ge1xuICBjb25zdCBwbHVnaW5zID0gcGFzc2VkUHJvcHMucGx1Z2lucyB8fCBbXTtcbiAgY29uc3QgcGx1Z2luUHJvcHMgPSBwbHVnaW5zLnJlZHVjZTxSZWNvcmQ8c3RyaW5nLCB1bmtub3duPj4oKGFjYywgcGx1Z2luKSA9PiB7XG4gICAgY29uc3Qge25hbWUsIGRlZmF1bHRWYWx1ZX0gPSBwbHVnaW47XG5cbiAgICBpZiAobmFtZSkge1xuICAgICAgYWNjW25hbWVdID1cbiAgICAgICAgcGFzc2VkUHJvcHNbbmFtZV0gIT09IHVuZGVmaW5lZFxuICAgICAgICAgID8gcGFzc2VkUHJvcHNbbmFtZV1cbiAgICAgICAgICA6IChkZWZhdWx0UHJvcHMgYXMgYW55KVtuYW1lXSA/PyBkZWZhdWx0VmFsdWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFjYztcbiAgfSwge30pO1xuXG4gIHJldHVybiB7XG4gICAgLi4ucGFzc2VkUHJvcHMsXG4gICAgLi4ucGx1Z2luUHJvcHMsXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREYXRhQXR0cmlidXRlUHJvcHMoXG4gIHJlZmVyZW5jZTogUmVmZXJlbmNlRWxlbWVudCxcbiAgcGx1Z2luczogUGx1Z2luW11cbik6IFJlY29yZDxzdHJpbmcsIHVua25vd24+IHtcbiAgY29uc3QgcHJvcEtleXMgPSBwbHVnaW5zXG4gICAgPyBPYmplY3Qua2V5cyhnZXRFeHRlbmRlZFBhc3NlZFByb3BzKHsuLi5kZWZhdWx0UHJvcHMsIHBsdWdpbnN9KSlcbiAgICA6IGRlZmF1bHRLZXlzO1xuXG4gIGNvbnN0IHByb3BzID0gcHJvcEtleXMucmVkdWNlKFxuICAgIChhY2M6IFBhcnRpYWw8UHJvcHM+ICYgUmVjb3JkPHN0cmluZywgdW5rbm93bj4sIGtleSkgPT4ge1xuICAgICAgY29uc3QgdmFsdWVBc1N0cmluZyA9IChcbiAgICAgICAgcmVmZXJlbmNlLmdldEF0dHJpYnV0ZShgZGF0YS10aXBweS0ke2tleX1gKSB8fCAnJ1xuICAgICAgKS50cmltKCk7XG5cbiAgICAgIGlmICghdmFsdWVBc1N0cmluZykge1xuICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgfVxuXG4gICAgICBpZiAoa2V5ID09PSAnY29udGVudCcpIHtcbiAgICAgICAgYWNjW2tleV0gPSB2YWx1ZUFzU3RyaW5nO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBhY2Nba2V5XSA9IEpTT04ucGFyc2UodmFsdWVBc1N0cmluZyk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICBhY2Nba2V5XSA9IHZhbHVlQXNTdHJpbmc7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGFjYztcbiAgICB9LFxuICAgIHt9XG4gICk7XG5cbiAgcmV0dXJuIHByb3BzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXZhbHVhdGVQcm9wcyhcbiAgcmVmZXJlbmNlOiBSZWZlcmVuY2VFbGVtZW50LFxuICBwcm9wczogUHJvcHNcbik6IFByb3BzIHtcbiAgY29uc3Qgb3V0ID0ge1xuICAgIC4uLnByb3BzLFxuICAgIGNvbnRlbnQ6IGludm9rZVdpdGhBcmdzT3JSZXR1cm4ocHJvcHMuY29udGVudCwgW3JlZmVyZW5jZV0pLFxuICAgIC4uLihwcm9wcy5pZ25vcmVBdHRyaWJ1dGVzXG4gICAgICA/IHt9XG4gICAgICA6IGdldERhdGFBdHRyaWJ1dGVQcm9wcyhyZWZlcmVuY2UsIHByb3BzLnBsdWdpbnMpKSxcbiAgfTtcblxuICBvdXQuYXJpYSA9IHtcbiAgICAuLi5kZWZhdWx0UHJvcHMuYXJpYSxcbiAgICAuLi5vdXQuYXJpYSxcbiAgfTtcblxuICBvdXQuYXJpYSA9IHtcbiAgICBleHBhbmRlZDpcbiAgICAgIG91dC5hcmlhLmV4cGFuZGVkID09PSAnYXV0bycgPyBwcm9wcy5pbnRlcmFjdGl2ZSA6IG91dC5hcmlhLmV4cGFuZGVkLFxuICAgIGNvbnRlbnQ6XG4gICAgICBvdXQuYXJpYS5jb250ZW50ID09PSAnYXV0bydcbiAgICAgICAgPyBwcm9wcy5pbnRlcmFjdGl2ZVxuICAgICAgICAgID8gbnVsbFxuICAgICAgICAgIDogJ2Rlc2NyaWJlZGJ5J1xuICAgICAgICA6IG91dC5hcmlhLmNvbnRlbnQsXG4gIH07XG5cbiAgcmV0dXJuIG91dDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhbGlkYXRlUHJvcHMoXG4gIHBhcnRpYWxQcm9wczogUGFydGlhbDxQcm9wcz4gPSB7fSxcbiAgcGx1Z2luczogUGx1Z2luW10gPSBbXVxuKTogdm9pZCB7XG4gIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhwYXJ0aWFsUHJvcHMpIGFzIEFycmF5PGtleW9mIFByb3BzPjtcbiAga2V5cy5mb3JFYWNoKChwcm9wKSA9PiB7XG4gICAgY29uc3Qgbm9uUGx1Z2luUHJvcHMgPSByZW1vdmVQcm9wZXJ0aWVzKFxuICAgICAgZGVmYXVsdFByb3BzLFxuICAgICAgT2JqZWN0LmtleXMocGx1Z2luUHJvcHMpXG4gICAgKTtcblxuICAgIGxldCBkaWRQYXNzVW5rbm93blByb3AgPSAhaGFzT3duUHJvcGVydHkobm9uUGx1Z2luUHJvcHMsIHByb3ApO1xuXG4gICAgLy8gQ2hlY2sgaWYgdGhlIHByb3AgZXhpc3RzIGluIGBwbHVnaW5zYFxuICAgIGlmIChkaWRQYXNzVW5rbm93blByb3ApIHtcbiAgICAgIGRpZFBhc3NVbmtub3duUHJvcCA9XG4gICAgICAgIHBsdWdpbnMuZmlsdGVyKChwbHVnaW4pID0+IHBsdWdpbi5uYW1lID09PSBwcm9wKS5sZW5ndGggPT09IDA7XG4gICAgfVxuXG4gICAgd2FybldoZW4oXG4gICAgICBkaWRQYXNzVW5rbm93blByb3AsXG4gICAgICBbXG4gICAgICAgIGBcXGAke3Byb3B9XFxgYCxcbiAgICAgICAgXCJpcyBub3QgYSB2YWxpZCBwcm9wLiBZb3UgbWF5IGhhdmUgc3BlbGxlZCBpdCBpbmNvcnJlY3RseSwgb3IgaWYgaXQnc1wiLFxuICAgICAgICAnYSBwbHVnaW4sIGZvcmdvdCB0byBwYXNzIGl0IGluIGFuIGFycmF5IGFzIHByb3BzLnBsdWdpbnMuJyxcbiAgICAgICAgJ1xcblxcbicsXG4gICAgICAgICdBbGwgcHJvcHM6IGh0dHBzOi8vYXRvbWlrcy5naXRodWIuaW8vdGlwcHlqcy92Ni9hbGwtcHJvcHMvXFxuJyxcbiAgICAgICAgJ1BsdWdpbnM6IGh0dHBzOi8vYXRvbWlrcy5naXRodWIuaW8vdGlwcHlqcy92Ni9wbHVnaW5zLycsXG4gICAgICBdLmpvaW4oJyAnKVxuICAgICk7XG4gIH0pO1xufVxuIiwgImltcG9ydCB7XG4gIEFSUk9XX0NMQVNTLFxuICBCQUNLRFJPUF9DTEFTUyxcbiAgQk9YX0NMQVNTLFxuICBDT05URU5UX0NMQVNTLFxuICBTVkdfQVJST1dfQ0xBU1MsXG59IGZyb20gJy4vY29uc3RhbnRzJztcbmltcG9ydCB7ZGl2LCBpc0VsZW1lbnR9IGZyb20gJy4vZG9tLXV0aWxzJztcbmltcG9ydCB7SW5zdGFuY2UsIFBvcHBlckVsZW1lbnQsIFByb3BzfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7UG9wcGVyQ2hpbGRyZW59IGZyb20gJy4vdHlwZXMtaW50ZXJuYWwnO1xuaW1wb3J0IHthcnJheUZyb219IGZyb20gJy4vdXRpbHMnO1xuXG4vLyBGaXJlZm94IGV4dGVuc2lvbnMgZG9uJ3QgYWxsb3cgLmlubmVySFRNTCA9IFwiLi4uXCIgcHJvcGVydHkuIFRoaXMgdHJpY2tzIGl0LlxuY29uc3QgaW5uZXJIVE1MID0gKCk6ICdpbm5lckhUTUwnID0+ICdpbm5lckhUTUwnO1xuXG5mdW5jdGlvbiBkYW5nZXJvdXNseVNldElubmVySFRNTChlbGVtZW50OiBFbGVtZW50LCBodG1sOiBzdHJpbmcpOiB2b2lkIHtcbiAgZWxlbWVudFtpbm5lckhUTUwoKV0gPSBodG1sO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVBcnJvd0VsZW1lbnQodmFsdWU6IFByb3BzWydhcnJvdyddKTogSFRNTERpdkVsZW1lbnQge1xuICBjb25zdCBhcnJvdyA9IGRpdigpO1xuXG4gIGlmICh2YWx1ZSA9PT0gdHJ1ZSkge1xuICAgIGFycm93LmNsYXNzTmFtZSA9IEFSUk9XX0NMQVNTO1xuICB9IGVsc2Uge1xuICAgIGFycm93LmNsYXNzTmFtZSA9IFNWR19BUlJPV19DTEFTUztcblxuICAgIGlmIChpc0VsZW1lbnQodmFsdWUpKSB7XG4gICAgICBhcnJvdy5hcHBlbmRDaGlsZCh2YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MKGFycm93LCB2YWx1ZSBhcyBzdHJpbmcpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBhcnJvdztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldENvbnRlbnQoY29udGVudDogSFRNTERpdkVsZW1lbnQsIHByb3BzOiBQcm9wcyk6IHZvaWQge1xuICBpZiAoaXNFbGVtZW50KHByb3BzLmNvbnRlbnQpKSB7XG4gICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwoY29udGVudCwgJycpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQocHJvcHMuY29udGVudCk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIHByb3BzLmNvbnRlbnQgIT09ICdmdW5jdGlvbicpIHtcbiAgICBpZiAocHJvcHMuYWxsb3dIVE1MKSB7XG4gICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTChjb250ZW50LCBwcm9wcy5jb250ZW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29udGVudC50ZXh0Q29udGVudCA9IHByb3BzLmNvbnRlbnQ7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDaGlsZHJlbihwb3BwZXI6IFBvcHBlckVsZW1lbnQpOiBQb3BwZXJDaGlsZHJlbiB7XG4gIGNvbnN0IGJveCA9IHBvcHBlci5maXJzdEVsZW1lbnRDaGlsZCBhcyBIVE1MRGl2RWxlbWVudDtcbiAgY29uc3QgYm94Q2hpbGRyZW4gPSBhcnJheUZyb20oYm94LmNoaWxkcmVuKTtcblxuICByZXR1cm4ge1xuICAgIGJveCxcbiAgICBjb250ZW50OiBib3hDaGlsZHJlbi5maW5kKChub2RlKSA9PiBub2RlLmNsYXNzTGlzdC5jb250YWlucyhDT05URU5UX0NMQVNTKSksXG4gICAgYXJyb3c6IGJveENoaWxkcmVuLmZpbmQoXG4gICAgICAobm9kZSkgPT5cbiAgICAgICAgbm9kZS5jbGFzc0xpc3QuY29udGFpbnMoQVJST1dfQ0xBU1MpIHx8XG4gICAgICAgIG5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKFNWR19BUlJPV19DTEFTUylcbiAgICApLFxuICAgIGJhY2tkcm9wOiBib3hDaGlsZHJlbi5maW5kKChub2RlKSA9PlxuICAgICAgbm9kZS5jbGFzc0xpc3QuY29udGFpbnMoQkFDS0RST1BfQ0xBU1MpXG4gICAgKSxcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlcihcbiAgaW5zdGFuY2U6IEluc3RhbmNlXG4pOiB7XG4gIHBvcHBlcjogUG9wcGVyRWxlbWVudDtcbiAgb25VcGRhdGU/OiAocHJldlByb3BzOiBQcm9wcywgbmV4dFByb3BzOiBQcm9wcykgPT4gdm9pZDtcbn0ge1xuICBjb25zdCBwb3BwZXIgPSBkaXYoKTtcblxuICBjb25zdCBib3ggPSBkaXYoKTtcbiAgYm94LmNsYXNzTmFtZSA9IEJPWF9DTEFTUztcbiAgYm94LnNldEF0dHJpYnV0ZSgnZGF0YS1zdGF0ZScsICdoaWRkZW4nKTtcbiAgYm94LnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAnLTEnKTtcblxuICBjb25zdCBjb250ZW50ID0gZGl2KCk7XG4gIGNvbnRlbnQuY2xhc3NOYW1lID0gQ09OVEVOVF9DTEFTUztcbiAgY29udGVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtc3RhdGUnLCAnaGlkZGVuJyk7XG5cbiAgc2V0Q29udGVudChjb250ZW50LCBpbnN0YW5jZS5wcm9wcyk7XG5cbiAgcG9wcGVyLmFwcGVuZENoaWxkKGJveCk7XG4gIGJveC5hcHBlbmRDaGlsZChjb250ZW50KTtcblxuICBvblVwZGF0ZShpbnN0YW5jZS5wcm9wcywgaW5zdGFuY2UucHJvcHMpO1xuXG4gIGZ1bmN0aW9uIG9uVXBkYXRlKHByZXZQcm9wczogUHJvcHMsIG5leHRQcm9wczogUHJvcHMpOiB2b2lkIHtcbiAgICBjb25zdCB7Ym94LCBjb250ZW50LCBhcnJvd30gPSBnZXRDaGlsZHJlbihwb3BwZXIpO1xuXG4gICAgaWYgKG5leHRQcm9wcy50aGVtZSkge1xuICAgICAgYm94LnNldEF0dHJpYnV0ZSgnZGF0YS10aGVtZScsIG5leHRQcm9wcy50aGVtZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGJveC5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtdGhlbWUnKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIG5leHRQcm9wcy5hbmltYXRpb24gPT09ICdzdHJpbmcnKSB7XG4gICAgICBib3guc2V0QXR0cmlidXRlKCdkYXRhLWFuaW1hdGlvbicsIG5leHRQcm9wcy5hbmltYXRpb24pO1xuICAgIH0gZWxzZSB7XG4gICAgICBib3gucmVtb3ZlQXR0cmlidXRlKCdkYXRhLWFuaW1hdGlvbicpO1xuICAgIH1cblxuICAgIGlmIChuZXh0UHJvcHMuaW5lcnRpYSkge1xuICAgICAgYm94LnNldEF0dHJpYnV0ZSgnZGF0YS1pbmVydGlhJywgJycpO1xuICAgIH0gZWxzZSB7XG4gICAgICBib3gucmVtb3ZlQXR0cmlidXRlKCdkYXRhLWluZXJ0aWEnKTtcbiAgICB9XG5cbiAgICBib3guc3R5bGUubWF4V2lkdGggPVxuICAgICAgdHlwZW9mIG5leHRQcm9wcy5tYXhXaWR0aCA9PT0gJ251bWJlcidcbiAgICAgICAgPyBgJHtuZXh0UHJvcHMubWF4V2lkdGh9cHhgXG4gICAgICAgIDogbmV4dFByb3BzLm1heFdpZHRoO1xuXG4gICAgaWYgKG5leHRQcm9wcy5yb2xlKSB7XG4gICAgICBib3guc2V0QXR0cmlidXRlKCdyb2xlJywgbmV4dFByb3BzLnJvbGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBib3gucmVtb3ZlQXR0cmlidXRlKCdyb2xlJyk7XG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgcHJldlByb3BzLmNvbnRlbnQgIT09IG5leHRQcm9wcy5jb250ZW50IHx8XG4gICAgICBwcmV2UHJvcHMuYWxsb3dIVE1MICE9PSBuZXh0UHJvcHMuYWxsb3dIVE1MXG4gICAgKSB7XG4gICAgICBzZXRDb250ZW50KGNvbnRlbnQsIGluc3RhbmNlLnByb3BzKTtcbiAgICB9XG5cbiAgICBpZiAobmV4dFByb3BzLmFycm93KSB7XG4gICAgICBpZiAoIWFycm93KSB7XG4gICAgICAgIGJveC5hcHBlbmRDaGlsZChjcmVhdGVBcnJvd0VsZW1lbnQobmV4dFByb3BzLmFycm93KSk7XG4gICAgICB9IGVsc2UgaWYgKHByZXZQcm9wcy5hcnJvdyAhPT0gbmV4dFByb3BzLmFycm93KSB7XG4gICAgICAgIGJveC5yZW1vdmVDaGlsZChhcnJvdyk7XG4gICAgICAgIGJveC5hcHBlbmRDaGlsZChjcmVhdGVBcnJvd0VsZW1lbnQobmV4dFByb3BzLmFycm93KSk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChhcnJvdykge1xuICAgICAgYm94LnJlbW92ZUNoaWxkKGFycm93ISk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBwb3BwZXIsXG4gICAgb25VcGRhdGUsXG4gIH07XG59XG5cbi8vIFJ1bnRpbWUgY2hlY2sgdG8gaWRlbnRpZnkgaWYgdGhlIHJlbmRlciBmdW5jdGlvbiBpcyB0aGUgZGVmYXVsdCBvbmU7IHRoaXNcbi8vIHdheSB3ZSBjYW4gYXBwbHkgZGVmYXVsdCBDU1MgdHJhbnNpdGlvbnMgbG9naWMgYW5kIGl0IGNhbiBiZSB0cmVlLXNoYWtlbiBhd2F5XG5yZW5kZXIuJCR0aXBweSA9IHRydWU7XG4iLCAiaW1wb3J0IHtjcmVhdGVQb3BwZXIsIFN0cmljdE1vZGlmaWVycywgTW9kaWZpZXJ9IGZyb20gJ0Bwb3BwZXJqcy9jb3JlJztcbmltcG9ydCB7Y3VycmVudElucHV0fSBmcm9tICcuL2JpbmRHbG9iYWxFdmVudExpc3RlbmVycyc7XG5pbXBvcnQge2lzSUUxMX0gZnJvbSAnLi9icm93c2VyJztcbmltcG9ydCB7VElQUFlfREVGQVVMVF9BUFBFTkRfVE8sIFRPVUNIX09QVElPTlN9IGZyb20gJy4vY29uc3RhbnRzJztcbmltcG9ydCB7XG4gIGFjdHVhbENvbnRhaW5zLFxuICBkaXYsXG4gIGdldE93bmVyRG9jdW1lbnQsXG4gIGlzQ3Vyc29yT3V0c2lkZUludGVyYWN0aXZlQm9yZGVyLFxuICBpc01vdXNlRXZlbnQsXG4gIHNldFRyYW5zaXRpb25EdXJhdGlvbixcbiAgc2V0VmlzaWJpbGl0eVN0YXRlLFxuICB1cGRhdGVUcmFuc2l0aW9uRW5kTGlzdGVuZXIsXG59IGZyb20gJy4vZG9tLXV0aWxzJztcbmltcG9ydCB7ZGVmYXVsdFByb3BzLCBldmFsdWF0ZVByb3BzLCBnZXRFeHRlbmRlZFBhc3NlZFByb3BzfSBmcm9tICcuL3Byb3BzJztcbmltcG9ydCB7Z2V0Q2hpbGRyZW59IGZyb20gJy4vdGVtcGxhdGUnO1xuaW1wb3J0IHtcbiAgQ29udGVudCxcbiAgSW5zdGFuY2UsXG4gIExpZmVjeWNsZUhvb2tzLFxuICBQb3BwZXJFbGVtZW50LFxuICBQcm9wcyxcbiAgUmVmZXJlbmNlRWxlbWVudCxcbn0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQge0xpc3RlbmVyT2JqZWN0LCBQb3BwZXJUcmVlRGF0YSwgUG9wcGVyQ2hpbGRyZW59IGZyb20gJy4vdHlwZXMtaW50ZXJuYWwnO1xuaW1wb3J0IHtcbiAgYXJyYXlGcm9tLFxuICBkZWJvdW5jZSxcbiAgZ2V0VmFsdWVBdEluZGV4T3JSZXR1cm4sXG4gIGludm9rZVdpdGhBcmdzT3JSZXR1cm4sXG4gIG5vcm1hbGl6ZVRvQXJyYXksXG4gIHB1c2hJZlVuaXF1ZSxcbiAgc3BsaXRCeVNwYWNlcyxcbiAgdW5pcXVlLFxuICByZW1vdmVVbmRlZmluZWRQcm9wcyxcbn0gZnJvbSAnLi91dGlscyc7XG5pbXBvcnQge2NyZWF0ZU1lbW9yeUxlYWtXYXJuaW5nLCBlcnJvcldoZW4sIHdhcm5XaGVufSBmcm9tICcuL3ZhbGlkYXRpb24nO1xuXG5sZXQgaWRDb3VudGVyID0gMTtcbmxldCBtb3VzZU1vdmVMaXN0ZW5lcnM6ICgoZXZlbnQ6IE1vdXNlRXZlbnQpID0+IHZvaWQpW10gPSBbXTtcblxuLy8gVXNlZCBieSBgaGlkZUFsbCgpYFxuZXhwb3J0IGxldCBtb3VudGVkSW5zdGFuY2VzOiBJbnN0YW5jZVtdID0gW107XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVRpcHB5KFxuICByZWZlcmVuY2U6IFJlZmVyZW5jZUVsZW1lbnQsXG4gIHBhc3NlZFByb3BzOiBQYXJ0aWFsPFByb3BzPlxuKTogSW5zdGFuY2Uge1xuICBjb25zdCBwcm9wcyA9IGV2YWx1YXRlUHJvcHMocmVmZXJlbmNlLCB7XG4gICAgLi4uZGVmYXVsdFByb3BzLFxuICAgIC4uLmdldEV4dGVuZGVkUGFzc2VkUHJvcHMocmVtb3ZlVW5kZWZpbmVkUHJvcHMocGFzc2VkUHJvcHMpKSxcbiAgfSk7XG5cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIC8vIPCflJIgUHJpdmF0ZSBtZW1iZXJzXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICBsZXQgc2hvd1RpbWVvdXQ6IGFueTtcbiAgbGV0IGhpZGVUaW1lb3V0OiBhbnk7XG4gIGxldCBzY2hlZHVsZUhpZGVBbmltYXRpb25GcmFtZTogbnVtYmVyO1xuICBsZXQgaXNWaXNpYmxlRnJvbUNsaWNrID0gZmFsc2U7XG4gIGxldCBkaWRIaWRlRHVlVG9Eb2N1bWVudE1vdXNlRG93biA9IGZhbHNlO1xuICBsZXQgZGlkVG91Y2hNb3ZlID0gZmFsc2U7XG4gIGxldCBpZ25vcmVPbkZpcnN0VXBkYXRlID0gZmFsc2U7XG4gIGxldCBsYXN0VHJpZ2dlckV2ZW50OiBFdmVudCB8IHVuZGVmaW5lZDtcbiAgbGV0IGN1cnJlbnRUcmFuc2l0aW9uRW5kTGlzdGVuZXI6IChldmVudDogVHJhbnNpdGlvbkV2ZW50KSA9PiB2b2lkO1xuICBsZXQgb25GaXJzdFVwZGF0ZTogKCkgPT4gdm9pZDtcbiAgbGV0IGxpc3RlbmVyczogTGlzdGVuZXJPYmplY3RbXSA9IFtdO1xuICBsZXQgZGVib3VuY2VkT25Nb3VzZU1vdmUgPSBkZWJvdW5jZShvbk1vdXNlTW92ZSwgcHJvcHMuaW50ZXJhY3RpdmVEZWJvdW5jZSk7XG4gIGxldCBjdXJyZW50VGFyZ2V0OiBFbGVtZW50O1xuXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAvLyDwn5SRIFB1YmxpYyBtZW1iZXJzXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICBjb25zdCBpZCA9IGlkQ291bnRlcisrO1xuICBjb25zdCBwb3BwZXJJbnN0YW5jZSA9IG51bGw7XG4gIGNvbnN0IHBsdWdpbnMgPSB1bmlxdWUocHJvcHMucGx1Z2lucyk7XG5cbiAgY29uc3Qgc3RhdGUgPSB7XG4gICAgLy8gSXMgdGhlIGluc3RhbmNlIGN1cnJlbnRseSBlbmFibGVkP1xuICAgIGlzRW5hYmxlZDogdHJ1ZSxcbiAgICAvLyBJcyB0aGUgdGlwcHkgY3VycmVudGx5IHNob3dpbmcgYW5kIG5vdCB0cmFuc2l0aW9uaW5nIG91dD9cbiAgICBpc1Zpc2libGU6IGZhbHNlLFxuICAgIC8vIEhhcyB0aGUgaW5zdGFuY2UgYmVlbiBkZXN0cm95ZWQ/XG4gICAgaXNEZXN0cm95ZWQ6IGZhbHNlLFxuICAgIC8vIElzIHRoZSB0aXBweSBjdXJyZW50bHkgbW91bnRlZCB0byB0aGUgRE9NP1xuICAgIGlzTW91bnRlZDogZmFsc2UsXG4gICAgLy8gSGFzIHRoZSB0aXBweSBmaW5pc2hlZCB0cmFuc2l0aW9uaW5nIGluP1xuICAgIGlzU2hvd246IGZhbHNlLFxuICB9O1xuXG4gIGNvbnN0IGluc3RhbmNlOiBJbnN0YW5jZSA9IHtcbiAgICAvLyBwcm9wZXJ0aWVzXG4gICAgaWQsXG4gICAgcmVmZXJlbmNlLFxuICAgIHBvcHBlcjogZGl2KCksXG4gICAgcG9wcGVySW5zdGFuY2UsXG4gICAgcHJvcHMsXG4gICAgc3RhdGUsXG4gICAgcGx1Z2lucyxcbiAgICAvLyBtZXRob2RzXG4gICAgY2xlYXJEZWxheVRpbWVvdXRzLFxuICAgIHNldFByb3BzLFxuICAgIHNldENvbnRlbnQsXG4gICAgc2hvdyxcbiAgICBoaWRlLFxuICAgIGhpZGVXaXRoSW50ZXJhY3Rpdml0eSxcbiAgICBlbmFibGUsXG4gICAgZGlzYWJsZSxcbiAgICB1bm1vdW50LFxuICAgIGRlc3Ryb3ksXG4gIH07XG5cbiAgLy8gVE9ETzogSW52ZXN0aWdhdGUgd2h5IHRoaXMgZWFybHkgcmV0dXJuIGNhdXNlcyBhIFREWiBlcnJvciBpbiB0aGUgdGVzdHMg4oCUXG4gIC8vIGl0IGRvZXNuJ3Qgc2VlbSB0byBoYXBwZW4gaW4gdGhlIGJyb3dzZXJcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gIGlmICghcHJvcHMucmVuZGVyKSB7XG4gICAgaWYgKF9fREVWX18pIHtcbiAgICAgIGVycm9yV2hlbih0cnVlLCAncmVuZGVyKCkgZnVuY3Rpb24gaGFzIG5vdCBiZWVuIHN1cHBsaWVkLicpO1xuICAgIH1cblxuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAvLyBJbml0aWFsIG11dGF0aW9uc1xuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgY29uc3Qge3BvcHBlciwgb25VcGRhdGV9ID0gcHJvcHMucmVuZGVyKGluc3RhbmNlKTtcblxuICBwb3BwZXIuc2V0QXR0cmlidXRlKCdkYXRhLV9fTkFNRVNQQUNFX1BSRUZJWF9fLXJvb3QnLCAnJyk7XG4gIHBvcHBlci5pZCA9IGBfX05BTUVTUEFDRV9QUkVGSVhfXy0ke2luc3RhbmNlLmlkfWA7XG5cbiAgaW5zdGFuY2UucG9wcGVyID0gcG9wcGVyO1xuICByZWZlcmVuY2UuX3RpcHB5ID0gaW5zdGFuY2U7XG4gIHBvcHBlci5fdGlwcHkgPSBpbnN0YW5jZTtcblxuICBjb25zdCBwbHVnaW5zSG9va3MgPSBwbHVnaW5zLm1hcCgocGx1Z2luKSA9PiBwbHVnaW4uZm4oaW5zdGFuY2UpKTtcbiAgY29uc3QgaGFzQXJpYUV4cGFuZGVkID0gcmVmZXJlbmNlLmhhc0F0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcpO1xuXG4gIGFkZExpc3RlbmVycygpO1xuICBoYW5kbGVBcmlhRXhwYW5kZWRBdHRyaWJ1dGUoKTtcbiAgaGFuZGxlU3R5bGVzKCk7XG5cbiAgaW52b2tlSG9vaygnb25DcmVhdGUnLCBbaW5zdGFuY2VdKTtcblxuICBpZiAocHJvcHMuc2hvd09uQ3JlYXRlKSB7XG4gICAgc2NoZWR1bGVTaG93KCk7XG4gIH1cblxuICAvLyBQcmV2ZW50IGEgdGlwcHkgd2l0aCBhIGRlbGF5IGZyb20gaGlkaW5nIGlmIHRoZSBjdXJzb3IgbGVmdCB0aGVuIHJldHVybmVkXG4gIC8vIGJlZm9yZSBpdCBzdGFydGVkIGhpZGluZ1xuICBwb3BwZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsICgpID0+IHtcbiAgICBpZiAoaW5zdGFuY2UucHJvcHMuaW50ZXJhY3RpdmUgJiYgaW5zdGFuY2Uuc3RhdGUuaXNWaXNpYmxlKSB7XG4gICAgICBpbnN0YW5jZS5jbGVhckRlbGF5VGltZW91dHMoKTtcbiAgICB9XG4gIH0pO1xuXG4gIHBvcHBlci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgKCkgPT4ge1xuICAgIGlmIChcbiAgICAgIGluc3RhbmNlLnByb3BzLmludGVyYWN0aXZlICYmXG4gICAgICBpbnN0YW5jZS5wcm9wcy50cmlnZ2VyLmluZGV4T2YoJ21vdXNlZW50ZXInKSA+PSAwXG4gICAgKSB7XG4gICAgICBnZXREb2N1bWVudCgpLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGRlYm91bmNlZE9uTW91c2VNb3ZlKTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBpbnN0YW5jZTtcblxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgLy8g8J+UkiBQcml2YXRlIG1ldGhvZHNcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIGZ1bmN0aW9uIGdldE5vcm1hbGl6ZWRUb3VjaFNldHRpbmdzKCk6IFtzdHJpbmcgfCBib29sZWFuLCBudW1iZXJdIHtcbiAgICBjb25zdCB7dG91Y2h9ID0gaW5zdGFuY2UucHJvcHM7XG4gICAgcmV0dXJuIEFycmF5LmlzQXJyYXkodG91Y2gpID8gdG91Y2ggOiBbdG91Y2gsIDBdO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0SXNDdXN0b21Ub3VjaEJlaGF2aW9yKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBnZXROb3JtYWxpemVkVG91Y2hTZXR0aW5ncygpWzBdID09PSAnaG9sZCc7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRJc0RlZmF1bHRSZW5kZXJGbigpOiBib29sZWFuIHtcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgcmV0dXJuICEhaW5zdGFuY2UucHJvcHMucmVuZGVyPy4kJHRpcHB5O1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0Q3VycmVudFRhcmdldCgpOiBFbGVtZW50IHtcbiAgICByZXR1cm4gY3VycmVudFRhcmdldCB8fCByZWZlcmVuY2U7XG4gIH1cblxuICBmdW5jdGlvbiBnZXREb2N1bWVudCgpOiBEb2N1bWVudCB7XG4gICAgY29uc3QgcGFyZW50ID0gZ2V0Q3VycmVudFRhcmdldCgpLnBhcmVudE5vZGUgYXMgRWxlbWVudDtcbiAgICByZXR1cm4gcGFyZW50ID8gZ2V0T3duZXJEb2N1bWVudChwYXJlbnQpIDogZG9jdW1lbnQ7XG4gIH1cblxuICBmdW5jdGlvbiBnZXREZWZhdWx0VGVtcGxhdGVDaGlsZHJlbigpOiBQb3BwZXJDaGlsZHJlbiB7XG4gICAgcmV0dXJuIGdldENoaWxkcmVuKHBvcHBlcik7XG4gIH1cblxuICBmdW5jdGlvbiBnZXREZWxheShpc1Nob3c6IGJvb2xlYW4pOiBudW1iZXIge1xuICAgIC8vIEZvciB0b3VjaCBvciBrZXlib2FyZCBpbnB1dCwgZm9yY2UgYDBgIGRlbGF5IGZvciBVWCByZWFzb25zXG4gICAgLy8gQWxzbyBpZiB0aGUgaW5zdGFuY2UgaXMgbW91bnRlZCBidXQgbm90IHZpc2libGUgKHRyYW5zaXRpb25pbmcgb3V0KSxcbiAgICAvLyBpZ25vcmUgZGVsYXlcbiAgICBpZiAoXG4gICAgICAoaW5zdGFuY2Uuc3RhdGUuaXNNb3VudGVkICYmICFpbnN0YW5jZS5zdGF0ZS5pc1Zpc2libGUpIHx8XG4gICAgICBjdXJyZW50SW5wdXQuaXNUb3VjaCB8fFxuICAgICAgKGxhc3RUcmlnZ2VyRXZlbnQgJiYgbGFzdFRyaWdnZXJFdmVudC50eXBlID09PSAnZm9jdXMnKVxuICAgICkge1xuICAgICAgcmV0dXJuIDA7XG4gICAgfVxuXG4gICAgcmV0dXJuIGdldFZhbHVlQXRJbmRleE9yUmV0dXJuKFxuICAgICAgaW5zdGFuY2UucHJvcHMuZGVsYXksXG4gICAgICBpc1Nob3cgPyAwIDogMSxcbiAgICAgIGRlZmF1bHRQcm9wcy5kZWxheVxuICAgICk7XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVTdHlsZXMoZnJvbUhpZGUgPSBmYWxzZSk6IHZvaWQge1xuICAgIHBvcHBlci5zdHlsZS5wb2ludGVyRXZlbnRzID1cbiAgICAgIGluc3RhbmNlLnByb3BzLmludGVyYWN0aXZlICYmICFmcm9tSGlkZSA/ICcnIDogJ25vbmUnO1xuICAgIHBvcHBlci5zdHlsZS56SW5kZXggPSBgJHtpbnN0YW5jZS5wcm9wcy56SW5kZXh9YDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGludm9rZUhvb2soXG4gICAgaG9vazoga2V5b2YgTGlmZWN5Y2xlSG9va3MsXG4gICAgYXJnczogW0luc3RhbmNlLCBhbnk/XSxcbiAgICBzaG91bGRJbnZva2VQcm9wc0hvb2sgPSB0cnVlXG4gICk6IHZvaWQge1xuICAgIHBsdWdpbnNIb29rcy5mb3JFYWNoKChwbHVnaW5Ib29rcykgPT4ge1xuICAgICAgaWYgKHBsdWdpbkhvb2tzW2hvb2tdKSB7XG4gICAgICAgIHBsdWdpbkhvb2tzW2hvb2tdISguLi5hcmdzKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChzaG91bGRJbnZva2VQcm9wc0hvb2spIHtcbiAgICAgIGluc3RhbmNlLnByb3BzW2hvb2tdKC4uLmFyZ3MpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZUFyaWFDb250ZW50QXR0cmlidXRlKCk6IHZvaWQge1xuICAgIGNvbnN0IHthcmlhfSA9IGluc3RhbmNlLnByb3BzO1xuXG4gICAgaWYgKCFhcmlhLmNvbnRlbnQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBhdHRyID0gYGFyaWEtJHthcmlhLmNvbnRlbnR9YDtcbiAgICBjb25zdCBpZCA9IHBvcHBlci5pZDtcbiAgICBjb25zdCBub2RlcyA9IG5vcm1hbGl6ZVRvQXJyYXkoaW5zdGFuY2UucHJvcHMudHJpZ2dlclRhcmdldCB8fCByZWZlcmVuY2UpO1xuXG4gICAgbm9kZXMuZm9yRWFjaCgobm9kZSkgPT4ge1xuICAgICAgY29uc3QgY3VycmVudFZhbHVlID0gbm9kZS5nZXRBdHRyaWJ1dGUoYXR0cik7XG5cbiAgICAgIGlmIChpbnN0YW5jZS5zdGF0ZS5pc1Zpc2libGUpIHtcbiAgICAgICAgbm9kZS5zZXRBdHRyaWJ1dGUoYXR0ciwgY3VycmVudFZhbHVlID8gYCR7Y3VycmVudFZhbHVlfSAke2lkfWAgOiBpZCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBuZXh0VmFsdWUgPSBjdXJyZW50VmFsdWUgJiYgY3VycmVudFZhbHVlLnJlcGxhY2UoaWQsICcnKS50cmltKCk7XG5cbiAgICAgICAgaWYgKG5leHRWYWx1ZSkge1xuICAgICAgICAgIG5vZGUuc2V0QXR0cmlidXRlKGF0dHIsIG5leHRWYWx1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbm9kZS5yZW1vdmVBdHRyaWJ1dGUoYXR0cik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZUFyaWFFeHBhbmRlZEF0dHJpYnV0ZSgpOiB2b2lkIHtcbiAgICBpZiAoaGFzQXJpYUV4cGFuZGVkIHx8ICFpbnN0YW5jZS5wcm9wcy5hcmlhLmV4cGFuZGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgbm9kZXMgPSBub3JtYWxpemVUb0FycmF5KGluc3RhbmNlLnByb3BzLnRyaWdnZXJUYXJnZXQgfHwgcmVmZXJlbmNlKTtcblxuICAgIG5vZGVzLmZvckVhY2goKG5vZGUpID0+IHtcbiAgICAgIGlmIChpbnN0YW5jZS5wcm9wcy5pbnRlcmFjdGl2ZSkge1xuICAgICAgICBub2RlLnNldEF0dHJpYnV0ZShcbiAgICAgICAgICAnYXJpYS1leHBhbmRlZCcsXG4gICAgICAgICAgaW5zdGFuY2Uuc3RhdGUuaXNWaXNpYmxlICYmIG5vZGUgPT09IGdldEN1cnJlbnRUYXJnZXQoKVxuICAgICAgICAgICAgPyAndHJ1ZSdcbiAgICAgICAgICAgIDogJ2ZhbHNlJ1xuICAgICAgICApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbm9kZS5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNsZWFudXBJbnRlcmFjdGl2ZU1vdXNlTGlzdGVuZXJzKCk6IHZvaWQge1xuICAgIGdldERvY3VtZW50KCkucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgZGVib3VuY2VkT25Nb3VzZU1vdmUpO1xuICAgIG1vdXNlTW92ZUxpc3RlbmVycyA9IG1vdXNlTW92ZUxpc3RlbmVycy5maWx0ZXIoXG4gICAgICAobGlzdGVuZXIpID0+IGxpc3RlbmVyICE9PSBkZWJvdW5jZWRPbk1vdXNlTW92ZVxuICAgICk7XG4gIH1cblxuICBmdW5jdGlvbiBvbkRvY3VtZW50UHJlc3MoZXZlbnQ6IE1vdXNlRXZlbnQgfCBUb3VjaEV2ZW50KTogdm9pZCB7XG4gICAgLy8gTW92ZWQgZmluZ2VyIHRvIHNjcm9sbCBpbnN0ZWFkIG9mIGFuIGludGVudGlvbmFsIHRhcCBvdXRzaWRlXG4gICAgaWYgKGN1cnJlbnRJbnB1dC5pc1RvdWNoKSB7XG4gICAgICBpZiAoZGlkVG91Y2hNb3ZlIHx8IGV2ZW50LnR5cGUgPT09ICdtb3VzZWRvd24nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBhY3R1YWxUYXJnZXQgPVxuICAgICAgKGV2ZW50LmNvbXBvc2VkUGF0aCAmJiBldmVudC5jb21wb3NlZFBhdGgoKVswXSkgfHwgZXZlbnQudGFyZ2V0O1xuXG4gICAgLy8gQ2xpY2tlZCBvbiBpbnRlcmFjdGl2ZSBwb3BwZXJcbiAgICBpZiAoXG4gICAgICBpbnN0YW5jZS5wcm9wcy5pbnRlcmFjdGl2ZSAmJlxuICAgICAgYWN0dWFsQ29udGFpbnMocG9wcGVyLCBhY3R1YWxUYXJnZXQgYXMgRWxlbWVudClcbiAgICApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBDbGlja2VkIG9uIHRoZSBldmVudCBsaXN0ZW5lcnMgdGFyZ2V0XG4gICAgaWYgKFxuICAgICAgbm9ybWFsaXplVG9BcnJheShpbnN0YW5jZS5wcm9wcy50cmlnZ2VyVGFyZ2V0IHx8IHJlZmVyZW5jZSkuc29tZSgoZWwpID0+XG4gICAgICAgIGFjdHVhbENvbnRhaW5zKGVsLCBhY3R1YWxUYXJnZXQgYXMgRWxlbWVudClcbiAgICAgIClcbiAgICApIHtcbiAgICAgIGlmIChjdXJyZW50SW5wdXQuaXNUb3VjaCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmIChcbiAgICAgICAgaW5zdGFuY2Uuc3RhdGUuaXNWaXNpYmxlICYmXG4gICAgICAgIGluc3RhbmNlLnByb3BzLnRyaWdnZXIuaW5kZXhPZignY2xpY2snKSA+PSAwXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpbnZva2VIb29rKCdvbkNsaWNrT3V0c2lkZScsIFtpbnN0YW5jZSwgZXZlbnRdKTtcbiAgICB9XG5cbiAgICBpZiAoaW5zdGFuY2UucHJvcHMuaGlkZU9uQ2xpY2sgPT09IHRydWUpIHtcbiAgICAgIGluc3RhbmNlLmNsZWFyRGVsYXlUaW1lb3V0cygpO1xuICAgICAgaW5zdGFuY2UuaGlkZSgpO1xuXG4gICAgICAvLyBgbW91c2Vkb3duYCBldmVudCBpcyBmaXJlZCByaWdodCBiZWZvcmUgYGZvY3VzYCBpZiBwcmVzc2luZyB0aGVcbiAgICAgIC8vIGN1cnJlbnRUYXJnZXQuIFRoaXMgbGV0cyBhIHRpcHB5IHdpdGggYGZvY3VzYCB0cmlnZ2VyIGtub3cgdGhhdCBpdFxuICAgICAgLy8gc2hvdWxkIG5vdCBzaG93XG4gICAgICBkaWRIaWRlRHVlVG9Eb2N1bWVudE1vdXNlRG93biA9IHRydWU7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgZGlkSGlkZUR1ZVRvRG9jdW1lbnRNb3VzZURvd24gPSBmYWxzZTtcbiAgICAgIH0pO1xuXG4gICAgICAvLyBUaGUgbGlzdGVuZXIgZ2V0cyBhZGRlZCBpbiBgc2NoZWR1bGVTaG93KClgLCBidXQgdGhpcyBtYXkgYmUgaGlkaW5nIGl0XG4gICAgICAvLyBiZWZvcmUgaXQgc2hvd3MsIGFuZCBoaWRlKCkncyBlYXJseSBiYWlsLW91dCBiZWhhdmlvciBjYW4gcHJldmVudCBpdFxuICAgICAgLy8gZnJvbSBiZWluZyBjbGVhbmVkIHVwXG4gICAgICBpZiAoIWluc3RhbmNlLnN0YXRlLmlzTW91bnRlZCkge1xuICAgICAgICByZW1vdmVEb2N1bWVudFByZXNzKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gb25Ub3VjaE1vdmUoKTogdm9pZCB7XG4gICAgZGlkVG91Y2hNb3ZlID0gdHJ1ZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uVG91Y2hTdGFydCgpOiB2b2lkIHtcbiAgICBkaWRUb3VjaE1vdmUgPSBmYWxzZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZERvY3VtZW50UHJlc3MoKTogdm9pZCB7XG4gICAgY29uc3QgZG9jID0gZ2V0RG9jdW1lbnQoKTtcbiAgICBkb2MuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgb25Eb2N1bWVudFByZXNzLCB0cnVlKTtcbiAgICBkb2MuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCBvbkRvY3VtZW50UHJlc3MsIFRPVUNIX09QVElPTlMpO1xuICAgIGRvYy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0Jywgb25Ub3VjaFN0YXJ0LCBUT1VDSF9PUFRJT05TKTtcbiAgICBkb2MuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgb25Ub3VjaE1vdmUsIFRPVUNIX09QVElPTlMpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVtb3ZlRG9jdW1lbnRQcmVzcygpOiB2b2lkIHtcbiAgICBjb25zdCBkb2MgPSBnZXREb2N1bWVudCgpO1xuICAgIGRvYy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBvbkRvY3VtZW50UHJlc3MsIHRydWUpO1xuICAgIGRvYy5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIG9uRG9jdW1lbnRQcmVzcywgVE9VQ0hfT1BUSU9OUyk7XG4gICAgZG9jLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBvblRvdWNoU3RhcnQsIFRPVUNIX09QVElPTlMpO1xuICAgIGRvYy5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCBvblRvdWNoTW92ZSwgVE9VQ0hfT1BUSU9OUyk7XG4gIH1cblxuICBmdW5jdGlvbiBvblRyYW5zaXRpb25lZE91dChkdXJhdGlvbjogbnVtYmVyLCBjYWxsYmFjazogKCkgPT4gdm9pZCk6IHZvaWQge1xuICAgIG9uVHJhbnNpdGlvbkVuZChkdXJhdGlvbiwgKCkgPT4ge1xuICAgICAgaWYgKFxuICAgICAgICAhaW5zdGFuY2Uuc3RhdGUuaXNWaXNpYmxlICYmXG4gICAgICAgIHBvcHBlci5wYXJlbnROb2RlICYmXG4gICAgICAgIHBvcHBlci5wYXJlbnROb2RlLmNvbnRhaW5zKHBvcHBlcilcbiAgICAgICkge1xuICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gb25UcmFuc2l0aW9uZWRJbihkdXJhdGlvbjogbnVtYmVyLCBjYWxsYmFjazogKCkgPT4gdm9pZCk6IHZvaWQge1xuICAgIG9uVHJhbnNpdGlvbkVuZChkdXJhdGlvbiwgY2FsbGJhY2spO1xuICB9XG5cbiAgZnVuY3Rpb24gb25UcmFuc2l0aW9uRW5kKGR1cmF0aW9uOiBudW1iZXIsIGNhbGxiYWNrOiAoKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgY29uc3QgYm94ID0gZ2V0RGVmYXVsdFRlbXBsYXRlQ2hpbGRyZW4oKS5ib3g7XG5cbiAgICBmdW5jdGlvbiBsaXN0ZW5lcihldmVudDogVHJhbnNpdGlvbkV2ZW50KTogdm9pZCB7XG4gICAgICBpZiAoZXZlbnQudGFyZ2V0ID09PSBib3gpIHtcbiAgICAgICAgdXBkYXRlVHJhbnNpdGlvbkVuZExpc3RlbmVyKGJveCwgJ3JlbW92ZScsIGxpc3RlbmVyKTtcbiAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBNYWtlIGNhbGxiYWNrIHN5bmNocm9ub3VzIGlmIGR1cmF0aW9uIGlzIDBcbiAgICAvLyBgdHJhbnNpdGlvbmVuZGAgd29uJ3QgZmlyZSBvdGhlcndpc2VcbiAgICBpZiAoZHVyYXRpb24gPT09IDApIHtcbiAgICAgIHJldHVybiBjYWxsYmFjaygpO1xuICAgIH1cblxuICAgIHVwZGF0ZVRyYW5zaXRpb25FbmRMaXN0ZW5lcihib3gsICdyZW1vdmUnLCBjdXJyZW50VHJhbnNpdGlvbkVuZExpc3RlbmVyKTtcbiAgICB1cGRhdGVUcmFuc2l0aW9uRW5kTGlzdGVuZXIoYm94LCAnYWRkJywgbGlzdGVuZXIpO1xuXG4gICAgY3VycmVudFRyYW5zaXRpb25FbmRMaXN0ZW5lciA9IGxpc3RlbmVyO1xuICB9XG5cbiAgZnVuY3Rpb24gb24oXG4gICAgZXZlbnRUeXBlOiBzdHJpbmcsXG4gICAgaGFuZGxlcjogRXZlbnRMaXN0ZW5lcixcbiAgICBvcHRpb25zOiBib29sZWFuIHwgUmVjb3JkPHN0cmluZywgdW5rbm93bj4gPSBmYWxzZVxuICApOiB2b2lkIHtcbiAgICBjb25zdCBub2RlcyA9IG5vcm1hbGl6ZVRvQXJyYXkoaW5zdGFuY2UucHJvcHMudHJpZ2dlclRhcmdldCB8fCByZWZlcmVuY2UpO1xuICAgIG5vZGVzLmZvckVhY2goKG5vZGUpID0+IHtcbiAgICAgIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGhhbmRsZXIsIG9wdGlvbnMpO1xuICAgICAgbGlzdGVuZXJzLnB1c2goe25vZGUsIGV2ZW50VHlwZSwgaGFuZGxlciwgb3B0aW9uc30pO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gYWRkTGlzdGVuZXJzKCk6IHZvaWQge1xuICAgIGlmIChnZXRJc0N1c3RvbVRvdWNoQmVoYXZpb3IoKSkge1xuICAgICAgb24oJ3RvdWNoc3RhcnQnLCBvblRyaWdnZXIsIHtwYXNzaXZlOiB0cnVlfSk7XG4gICAgICBvbigndG91Y2hlbmQnLCBvbk1vdXNlTGVhdmUgYXMgRXZlbnRMaXN0ZW5lciwge3Bhc3NpdmU6IHRydWV9KTtcbiAgICB9XG5cbiAgICBzcGxpdEJ5U3BhY2VzKGluc3RhbmNlLnByb3BzLnRyaWdnZXIpLmZvckVhY2goKGV2ZW50VHlwZSkgPT4ge1xuICAgICAgaWYgKGV2ZW50VHlwZSA9PT0gJ21hbnVhbCcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBvbihldmVudFR5cGUsIG9uVHJpZ2dlcik7XG5cbiAgICAgIHN3aXRjaCAoZXZlbnRUeXBlKSB7XG4gICAgICAgIGNhc2UgJ21vdXNlZW50ZXInOlxuICAgICAgICAgIG9uKCdtb3VzZWxlYXZlJywgb25Nb3VzZUxlYXZlIGFzIEV2ZW50TGlzdGVuZXIpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdmb2N1cyc6XG4gICAgICAgICAgb24oaXNJRTExID8gJ2ZvY3Vzb3V0JyA6ICdibHVyJywgb25CbHVyT3JGb2N1c091dCBhcyBFdmVudExpc3RlbmVyKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnZm9jdXNpbic6XG4gICAgICAgICAgb24oJ2ZvY3Vzb3V0Jywgb25CbHVyT3JGb2N1c091dCBhcyBFdmVudExpc3RlbmVyKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbW92ZUxpc3RlbmVycygpOiB2b2lkIHtcbiAgICBsaXN0ZW5lcnMuZm9yRWFjaCgoe25vZGUsIGV2ZW50VHlwZSwgaGFuZGxlciwgb3B0aW9uc306IExpc3RlbmVyT2JqZWN0KSA9PiB7XG4gICAgICBub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBoYW5kbGVyLCBvcHRpb25zKTtcbiAgICB9KTtcbiAgICBsaXN0ZW5lcnMgPSBbXTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uVHJpZ2dlcihldmVudDogRXZlbnQpOiB2b2lkIHtcbiAgICBsZXQgc2hvdWxkU2NoZWR1bGVDbGlja0hpZGUgPSBmYWxzZTtcblxuICAgIGlmIChcbiAgICAgICFpbnN0YW5jZS5zdGF0ZS5pc0VuYWJsZWQgfHxcbiAgICAgIGlzRXZlbnRMaXN0ZW5lclN0b3BwZWQoZXZlbnQpIHx8XG4gICAgICBkaWRIaWRlRHVlVG9Eb2N1bWVudE1vdXNlRG93blxuICAgICkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHdhc0ZvY3VzZWQgPSBsYXN0VHJpZ2dlckV2ZW50Py50eXBlID09PSAnZm9jdXMnO1xuXG4gICAgbGFzdFRyaWdnZXJFdmVudCA9IGV2ZW50O1xuICAgIGN1cnJlbnRUYXJnZXQgPSBldmVudC5jdXJyZW50VGFyZ2V0IGFzIEVsZW1lbnQ7XG5cbiAgICBoYW5kbGVBcmlhRXhwYW5kZWRBdHRyaWJ1dGUoKTtcblxuICAgIGlmICghaW5zdGFuY2Uuc3RhdGUuaXNWaXNpYmxlICYmIGlzTW91c2VFdmVudChldmVudCkpIHtcbiAgICAgIC8vIElmIHNjcm9sbGluZywgYG1vdXNlZW50ZXJgIGV2ZW50cyBjYW4gYmUgZmlyZWQgaWYgdGhlIGN1cnNvciBsYW5kc1xuICAgICAgLy8gb3ZlciBhIG5ldyB0YXJnZXQsIGJ1dCBgbW91c2Vtb3ZlYCBldmVudHMgZG9uJ3QgZ2V0IGZpcmVkLiBUaGlzXG4gICAgICAvLyBjYXVzZXMgaW50ZXJhY3RpdmUgdG9vbHRpcHMgdG8gZ2V0IHN0dWNrIG9wZW4gdW50aWwgdGhlIGN1cnNvciBpc1xuICAgICAgLy8gbW92ZWRcbiAgICAgIG1vdXNlTW92ZUxpc3RlbmVycy5mb3JFYWNoKChsaXN0ZW5lcikgPT4gbGlzdGVuZXIoZXZlbnQpKTtcbiAgICB9XG5cbiAgICAvLyBUb2dnbGUgc2hvdy9oaWRlIHdoZW4gY2xpY2tpbmcgY2xpY2stdHJpZ2dlcmVkIHRvb2x0aXBzXG4gICAgaWYgKFxuICAgICAgZXZlbnQudHlwZSA9PT0gJ2NsaWNrJyAmJlxuICAgICAgKGluc3RhbmNlLnByb3BzLnRyaWdnZXIuaW5kZXhPZignbW91c2VlbnRlcicpIDwgMCB8fFxuICAgICAgICBpc1Zpc2libGVGcm9tQ2xpY2spICYmXG4gICAgICBpbnN0YW5jZS5wcm9wcy5oaWRlT25DbGljayAhPT0gZmFsc2UgJiZcbiAgICAgIGluc3RhbmNlLnN0YXRlLmlzVmlzaWJsZVxuICAgICkge1xuICAgICAgc2hvdWxkU2NoZWR1bGVDbGlja0hpZGUgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBzY2hlZHVsZVNob3coZXZlbnQpO1xuICAgIH1cblxuICAgIGlmIChldmVudC50eXBlID09PSAnY2xpY2snKSB7XG4gICAgICBpc1Zpc2libGVGcm9tQ2xpY2sgPSAhc2hvdWxkU2NoZWR1bGVDbGlja0hpZGU7XG4gICAgfVxuXG4gICAgaWYgKHNob3VsZFNjaGVkdWxlQ2xpY2tIaWRlICYmICF3YXNGb2N1c2VkKSB7XG4gICAgICBzY2hlZHVsZUhpZGUoZXZlbnQpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIG9uTW91c2VNb3ZlKGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0IGFzIE5vZGU7XG4gICAgY29uc3QgaXNDdXJzb3JPdmVyUmVmZXJlbmNlT3JQb3BwZXIgPVxuICAgICAgZ2V0Q3VycmVudFRhcmdldCgpLmNvbnRhaW5zKHRhcmdldCkgfHwgcG9wcGVyLmNvbnRhaW5zKHRhcmdldCk7XG5cbiAgICBpZiAoZXZlbnQudHlwZSA9PT0gJ21vdXNlbW92ZScgJiYgaXNDdXJzb3JPdmVyUmVmZXJlbmNlT3JQb3BwZXIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBwb3BwZXJUcmVlRGF0YSA9IGdldE5lc3RlZFBvcHBlclRyZWUoKVxuICAgICAgLmNvbmNhdChwb3BwZXIpXG4gICAgICAubWFwKChwb3BwZXIpID0+IHtcbiAgICAgICAgY29uc3QgaW5zdGFuY2UgPSBwb3BwZXIuX3RpcHB5ITtcbiAgICAgICAgY29uc3Qgc3RhdGUgPSBpbnN0YW5jZS5wb3BwZXJJbnN0YW5jZT8uc3RhdGU7XG5cbiAgICAgICAgaWYgKHN0YXRlKSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHBvcHBlclJlY3Q6IHBvcHBlci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcbiAgICAgICAgICAgIHBvcHBlclN0YXRlOiBzdGF0ZSxcbiAgICAgICAgICAgIHByb3BzLFxuICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH0pXG4gICAgICAuZmlsdGVyKEJvb2xlYW4pIGFzIFBvcHBlclRyZWVEYXRhW107XG5cbiAgICBpZiAoaXNDdXJzb3JPdXRzaWRlSW50ZXJhY3RpdmVCb3JkZXIocG9wcGVyVHJlZURhdGEsIGV2ZW50KSkge1xuICAgICAgY2xlYW51cEludGVyYWN0aXZlTW91c2VMaXN0ZW5lcnMoKTtcbiAgICAgIHNjaGVkdWxlSGlkZShldmVudCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gb25Nb3VzZUxlYXZlKGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgY29uc3Qgc2hvdWxkQmFpbCA9XG4gICAgICBpc0V2ZW50TGlzdGVuZXJTdG9wcGVkKGV2ZW50KSB8fFxuICAgICAgKGluc3RhbmNlLnByb3BzLnRyaWdnZXIuaW5kZXhPZignY2xpY2snKSA+PSAwICYmIGlzVmlzaWJsZUZyb21DbGljayk7XG5cbiAgICBpZiAoc2hvdWxkQmFpbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChpbnN0YW5jZS5wcm9wcy5pbnRlcmFjdGl2ZSkge1xuICAgICAgaW5zdGFuY2UuaGlkZVdpdGhJbnRlcmFjdGl2aXR5KGV2ZW50KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBzY2hlZHVsZUhpZGUoZXZlbnQpO1xuICB9XG5cbiAgZnVuY3Rpb24gb25CbHVyT3JGb2N1c091dChldmVudDogRm9jdXNFdmVudCk6IHZvaWQge1xuICAgIGlmIChcbiAgICAgIGluc3RhbmNlLnByb3BzLnRyaWdnZXIuaW5kZXhPZignZm9jdXNpbicpIDwgMCAmJlxuICAgICAgZXZlbnQudGFyZ2V0ICE9PSBnZXRDdXJyZW50VGFyZ2V0KClcbiAgICApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBJZiBmb2N1cyB3YXMgbW92ZWQgdG8gd2l0aGluIHRoZSBwb3BwZXJcbiAgICBpZiAoXG4gICAgICBpbnN0YW5jZS5wcm9wcy5pbnRlcmFjdGl2ZSAmJlxuICAgICAgZXZlbnQucmVsYXRlZFRhcmdldCAmJlxuICAgICAgcG9wcGVyLmNvbnRhaW5zKGV2ZW50LnJlbGF0ZWRUYXJnZXQgYXMgRWxlbWVudClcbiAgICApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBzY2hlZHVsZUhpZGUoZXZlbnQpO1xuICB9XG5cbiAgZnVuY3Rpb24gaXNFdmVudExpc3RlbmVyU3RvcHBlZChldmVudDogRXZlbnQpOiBib29sZWFuIHtcbiAgICByZXR1cm4gY3VycmVudElucHV0LmlzVG91Y2hcbiAgICAgID8gZ2V0SXNDdXN0b21Ub3VjaEJlaGF2aW9yKCkgIT09IGV2ZW50LnR5cGUuaW5kZXhPZigndG91Y2gnKSA+PSAwXG4gICAgICA6IGZhbHNlO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlUG9wcGVySW5zdGFuY2UoKTogdm9pZCB7XG4gICAgZGVzdHJveVBvcHBlckluc3RhbmNlKCk7XG5cbiAgICBjb25zdCB7XG4gICAgICBwb3BwZXJPcHRpb25zLFxuICAgICAgcGxhY2VtZW50LFxuICAgICAgb2Zmc2V0LFxuICAgICAgZ2V0UmVmZXJlbmNlQ2xpZW50UmVjdCxcbiAgICAgIG1vdmVUcmFuc2l0aW9uLFxuICAgIH0gPSBpbnN0YW5jZS5wcm9wcztcblxuICAgIGNvbnN0IGFycm93ID0gZ2V0SXNEZWZhdWx0UmVuZGVyRm4oKSA/IGdldENoaWxkcmVuKHBvcHBlcikuYXJyb3cgOiBudWxsO1xuXG4gICAgY29uc3QgY29tcHV0ZWRSZWZlcmVuY2UgPSBnZXRSZWZlcmVuY2VDbGllbnRSZWN0XG4gICAgICA/IHtcbiAgICAgICAgICBnZXRCb3VuZGluZ0NsaWVudFJlY3Q6IGdldFJlZmVyZW5jZUNsaWVudFJlY3QsXG4gICAgICAgICAgY29udGV4dEVsZW1lbnQ6XG4gICAgICAgICAgICBnZXRSZWZlcmVuY2VDbGllbnRSZWN0LmNvbnRleHRFbGVtZW50IHx8IGdldEN1cnJlbnRUYXJnZXQoKSxcbiAgICAgICAgfVxuICAgICAgOiByZWZlcmVuY2U7XG5cbiAgICBjb25zdCB0aXBweU1vZGlmaWVyOiBNb2RpZmllcjwnJCR0aXBweScsIFJlY29yZDxzdHJpbmcsIHVua25vd24+PiA9IHtcbiAgICAgIG5hbWU6ICckJHRpcHB5JyxcbiAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICBwaGFzZTogJ2JlZm9yZVdyaXRlJyxcbiAgICAgIHJlcXVpcmVzOiBbJ2NvbXB1dGVTdHlsZXMnXSxcbiAgICAgIGZuKHtzdGF0ZX0pIHtcbiAgICAgICAgaWYgKGdldElzRGVmYXVsdFJlbmRlckZuKCkpIHtcbiAgICAgICAgICBjb25zdCB7Ym94fSA9IGdldERlZmF1bHRUZW1wbGF0ZUNoaWxkcmVuKCk7XG5cbiAgICAgICAgICBbJ3BsYWNlbWVudCcsICdyZWZlcmVuY2UtaGlkZGVuJywgJ2VzY2FwZWQnXS5mb3JFYWNoKChhdHRyKSA9PiB7XG4gICAgICAgICAgICBpZiAoYXR0ciA9PT0gJ3BsYWNlbWVudCcpIHtcbiAgICAgICAgICAgICAgYm94LnNldEF0dHJpYnV0ZSgnZGF0YS1wbGFjZW1lbnQnLCBzdGF0ZS5wbGFjZW1lbnQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgaWYgKHN0YXRlLmF0dHJpYnV0ZXMucG9wcGVyW2BkYXRhLXBvcHBlci0ke2F0dHJ9YF0pIHtcbiAgICAgICAgICAgICAgICBib3guc2V0QXR0cmlidXRlKGBkYXRhLSR7YXR0cn1gLCAnJyk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYm94LnJlbW92ZUF0dHJpYnV0ZShgZGF0YS0ke2F0dHJ9YCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIHN0YXRlLmF0dHJpYnV0ZXMucG9wcGVyID0ge307XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgfTtcblxuICAgIHR5cGUgVGlwcHlNb2RpZmllciA9IE1vZGlmaWVyPCckJHRpcHB5JywgUmVjb3JkPHN0cmluZywgdW5rbm93bj4+O1xuICAgIHR5cGUgRXh0ZW5kZWRNb2RpZmllcnMgPSBTdHJpY3RNb2RpZmllcnMgfCBQYXJ0aWFsPFRpcHB5TW9kaWZpZXI+O1xuXG4gICAgY29uc3QgbW9kaWZpZXJzOiBBcnJheTxFeHRlbmRlZE1vZGlmaWVycz4gPSBbXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdvZmZzZXQnLFxuICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgb2Zmc2V0LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ3ByZXZlbnRPdmVyZmxvdycsXG4gICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICBwYWRkaW5nOiB7XG4gICAgICAgICAgICB0b3A6IDIsXG4gICAgICAgICAgICBib3R0b206IDIsXG4gICAgICAgICAgICBsZWZ0OiA1LFxuICAgICAgICAgICAgcmlnaHQ6IDUsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdmbGlwJyxcbiAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgIHBhZGRpbmc6IDUsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnY29tcHV0ZVN0eWxlcycsXG4gICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICBhZGFwdGl2ZTogIW1vdmVUcmFuc2l0aW9uLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIHRpcHB5TW9kaWZpZXIsXG4gICAgXTtcblxuICAgIGlmIChnZXRJc0RlZmF1bHRSZW5kZXJGbigpICYmIGFycm93KSB7XG4gICAgICBtb2RpZmllcnMucHVzaCh7XG4gICAgICAgIG5hbWU6ICdhcnJvdycsXG4gICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICBlbGVtZW50OiBhcnJvdyxcbiAgICAgICAgICBwYWRkaW5nOiAzLFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgbW9kaWZpZXJzLnB1c2goLi4uKHBvcHBlck9wdGlvbnM/Lm1vZGlmaWVycyB8fCBbXSkpO1xuXG4gICAgaW5zdGFuY2UucG9wcGVySW5zdGFuY2UgPSBjcmVhdGVQb3BwZXI8RXh0ZW5kZWRNb2RpZmllcnM+KFxuICAgICAgY29tcHV0ZWRSZWZlcmVuY2UsXG4gICAgICBwb3BwZXIsXG4gICAgICB7XG4gICAgICAgIC4uLnBvcHBlck9wdGlvbnMsXG4gICAgICAgIHBsYWNlbWVudCxcbiAgICAgICAgb25GaXJzdFVwZGF0ZSxcbiAgICAgICAgbW9kaWZpZXJzLFxuICAgICAgfVxuICAgICk7XG4gIH1cblxuICBmdW5jdGlvbiBkZXN0cm95UG9wcGVySW5zdGFuY2UoKTogdm9pZCB7XG4gICAgaWYgKGluc3RhbmNlLnBvcHBlckluc3RhbmNlKSB7XG4gICAgICBpbnN0YW5jZS5wb3BwZXJJbnN0YW5jZS5kZXN0cm95KCk7XG4gICAgICBpbnN0YW5jZS5wb3BwZXJJbnN0YW5jZSA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gbW91bnQoKTogdm9pZCB7XG4gICAgY29uc3Qge2FwcGVuZFRvfSA9IGluc3RhbmNlLnByb3BzO1xuXG4gICAgbGV0IHBhcmVudE5vZGU6IGFueTtcblxuICAgIC8vIEJ5IGRlZmF1bHQsIHdlJ2xsIGFwcGVuZCB0aGUgcG9wcGVyIHRvIHRoZSB0cmlnZ2VyVGFyZ2V0cydzIHBhcmVudE5vZGUgc29cbiAgICAvLyBpdCdzIGRpcmVjdGx5IGFmdGVyIHRoZSByZWZlcmVuY2UgZWxlbWVudCBzbyB0aGUgZWxlbWVudHMgaW5zaWRlIHRoZVxuICAgIC8vIHRpcHB5IGNhbiBiZSB0YWJiZWQgdG9cbiAgICAvLyBJZiB0aGVyZSBhcmUgY2xpcHBpbmcgaXNzdWVzLCB0aGUgdXNlciBjYW4gc3BlY2lmeSBhIGRpZmZlcmVudCBhcHBlbmRUb1xuICAgIC8vIGFuZCBlbnN1cmUgZm9jdXMgbWFuYWdlbWVudCBpcyBoYW5kbGVkIGNvcnJlY3RseSBtYW51YWxseVxuICAgIGNvbnN0IG5vZGUgPSBnZXRDdXJyZW50VGFyZ2V0KCk7XG5cbiAgICBpZiAoXG4gICAgICAoaW5zdGFuY2UucHJvcHMuaW50ZXJhY3RpdmUgJiYgYXBwZW5kVG8gPT09IFRJUFBZX0RFRkFVTFRfQVBQRU5EX1RPKSB8fFxuICAgICAgYXBwZW5kVG8gPT09ICdwYXJlbnQnXG4gICAgKSB7XG4gICAgICBwYXJlbnROb2RlID0gbm9kZS5wYXJlbnROb2RlO1xuICAgIH0gZWxzZSB7XG4gICAgICBwYXJlbnROb2RlID0gaW52b2tlV2l0aEFyZ3NPclJldHVybihhcHBlbmRUbywgW25vZGVdKTtcbiAgICB9XG5cbiAgICAvLyBUaGUgcG9wcGVyIGVsZW1lbnQgbmVlZHMgdG8gZXhpc3Qgb24gdGhlIERPTSBiZWZvcmUgaXRzIHBvc2l0aW9uIGNhbiBiZVxuICAgIC8vIHVwZGF0ZWQgYXMgUG9wcGVyIG5lZWRzIHRvIHJlYWQgaXRzIGRpbWVuc2lvbnNcbiAgICBpZiAoIXBhcmVudE5vZGUuY29udGFpbnMocG9wcGVyKSkge1xuICAgICAgcGFyZW50Tm9kZS5hcHBlbmRDaGlsZChwb3BwZXIpO1xuICAgIH1cblxuICAgIGluc3RhbmNlLnN0YXRlLmlzTW91bnRlZCA9IHRydWU7XG5cbiAgICBjcmVhdGVQb3BwZXJJbnN0YW5jZSgpO1xuXG4gICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgICBpZiAoX19ERVZfXykge1xuICAgICAgLy8gQWNjZXNzaWJpbGl0eSBjaGVja1xuICAgICAgd2FybldoZW4oXG4gICAgICAgIGluc3RhbmNlLnByb3BzLmludGVyYWN0aXZlICYmXG4gICAgICAgICAgYXBwZW5kVG8gPT09IGRlZmF1bHRQcm9wcy5hcHBlbmRUbyAmJlxuICAgICAgICAgIG5vZGUubmV4dEVsZW1lbnRTaWJsaW5nICE9PSBwb3BwZXIsXG4gICAgICAgIFtcbiAgICAgICAgICAnSW50ZXJhY3RpdmUgdGlwcHkgZWxlbWVudCBtYXkgbm90IGJlIGFjY2Vzc2libGUgdmlhIGtleWJvYXJkJyxcbiAgICAgICAgICAnbmF2aWdhdGlvbiBiZWNhdXNlIGl0IGlzIG5vdCBkaXJlY3RseSBhZnRlciB0aGUgcmVmZXJlbmNlIGVsZW1lbnQnLFxuICAgICAgICAgICdpbiB0aGUgRE9NIHNvdXJjZSBvcmRlci4nLFxuICAgICAgICAgICdcXG5cXG4nLFxuICAgICAgICAgICdVc2luZyBhIHdyYXBwZXIgPGRpdj4gb3IgPHNwYW4+IHRhZyBhcm91bmQgdGhlIHJlZmVyZW5jZSBlbGVtZW50JyxcbiAgICAgICAgICAnc29sdmVzIHRoaXMgYnkgY3JlYXRpbmcgYSBuZXcgcGFyZW50Tm9kZSBjb250ZXh0LicsXG4gICAgICAgICAgJ1xcblxcbicsXG4gICAgICAgICAgJ1NwZWNpZnlpbmcgYGFwcGVuZFRvOiBkb2N1bWVudC5ib2R5YCBzaWxlbmNlcyB0aGlzIHdhcm5pbmcsIGJ1dCBpdCcsXG4gICAgICAgICAgJ2Fzc3VtZXMgeW91IGFyZSB1c2luZyBhIGZvY3VzIG1hbmFnZW1lbnQgc29sdXRpb24gdG8gaGFuZGxlJyxcbiAgICAgICAgICAna2V5Ym9hcmQgbmF2aWdhdGlvbi4nLFxuICAgICAgICAgICdcXG5cXG4nLFxuICAgICAgICAgICdTZWU6IGh0dHBzOi8vYXRvbWlrcy5naXRodWIuaW8vdGlwcHlqcy92Ni9hY2Nlc3NpYmlsaXR5LyNpbnRlcmFjdGl2aXR5JyxcbiAgICAgICAgXS5qb2luKCcgJylcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0TmVzdGVkUG9wcGVyVHJlZSgpOiBQb3BwZXJFbGVtZW50W10ge1xuICAgIHJldHVybiBhcnJheUZyb20oXG4gICAgICBwb3BwZXIucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtX19OQU1FU1BBQ0VfUFJFRklYX18tcm9vdF0nKVxuICAgICk7XG4gIH1cblxuICBmdW5jdGlvbiBzY2hlZHVsZVNob3coZXZlbnQ/OiBFdmVudCk6IHZvaWQge1xuICAgIGluc3RhbmNlLmNsZWFyRGVsYXlUaW1lb3V0cygpO1xuXG4gICAgaWYgKGV2ZW50KSB7XG4gICAgICBpbnZva2VIb29rKCdvblRyaWdnZXInLCBbaW5zdGFuY2UsIGV2ZW50XSk7XG4gICAgfVxuXG4gICAgYWRkRG9jdW1lbnRQcmVzcygpO1xuXG4gICAgbGV0IGRlbGF5ID0gZ2V0RGVsYXkodHJ1ZSk7XG4gICAgY29uc3QgW3RvdWNoVmFsdWUsIHRvdWNoRGVsYXldID0gZ2V0Tm9ybWFsaXplZFRvdWNoU2V0dGluZ3MoKTtcblxuICAgIGlmIChjdXJyZW50SW5wdXQuaXNUb3VjaCAmJiB0b3VjaFZhbHVlID09PSAnaG9sZCcgJiYgdG91Y2hEZWxheSkge1xuICAgICAgZGVsYXkgPSB0b3VjaERlbGF5O1xuICAgIH1cblxuICAgIGlmIChkZWxheSkge1xuICAgICAgc2hvd1RpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgaW5zdGFuY2Uuc2hvdygpO1xuICAgICAgfSwgZGVsYXkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpbnN0YW5jZS5zaG93KCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gc2NoZWR1bGVIaWRlKGV2ZW50OiBFdmVudCk6IHZvaWQge1xuICAgIGluc3RhbmNlLmNsZWFyRGVsYXlUaW1lb3V0cygpO1xuXG4gICAgaW52b2tlSG9vaygnb25VbnRyaWdnZXInLCBbaW5zdGFuY2UsIGV2ZW50XSk7XG5cbiAgICBpZiAoIWluc3RhbmNlLnN0YXRlLmlzVmlzaWJsZSkge1xuICAgICAgcmVtb3ZlRG9jdW1lbnRQcmVzcygpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gRm9yIGludGVyYWN0aXZlIHRpcHBpZXMsIHNjaGVkdWxlSGlkZSBpcyBhZGRlZCB0byBhIGRvY3VtZW50LmJvZHkgaGFuZGxlclxuICAgIC8vIGZyb20gb25Nb3VzZUxlYXZlIHNvIG11c3QgaW50ZXJjZXB0IHNjaGVkdWxlZCBoaWRlcyBmcm9tIG1vdXNlbW92ZS9sZWF2ZVxuICAgIC8vIGV2ZW50cyB3aGVuIHRyaWdnZXIgY29udGFpbnMgbW91c2VlbnRlciBhbmQgY2xpY2ssIGFuZCB0aGUgdGlwIGlzXG4gICAgLy8gY3VycmVudGx5IHNob3duIGFzIGEgcmVzdWx0IG9mIGEgY2xpY2suXG4gICAgaWYgKFxuICAgICAgaW5zdGFuY2UucHJvcHMudHJpZ2dlci5pbmRleE9mKCdtb3VzZWVudGVyJykgPj0gMCAmJlxuICAgICAgaW5zdGFuY2UucHJvcHMudHJpZ2dlci5pbmRleE9mKCdjbGljaycpID49IDAgJiZcbiAgICAgIFsnbW91c2VsZWF2ZScsICdtb3VzZW1vdmUnXS5pbmRleE9mKGV2ZW50LnR5cGUpID49IDAgJiZcbiAgICAgIGlzVmlzaWJsZUZyb21DbGlja1xuICAgICkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGRlbGF5ID0gZ2V0RGVsYXkoZmFsc2UpO1xuXG4gICAgaWYgKGRlbGF5KSB7XG4gICAgICBoaWRlVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBpZiAoaW5zdGFuY2Uuc3RhdGUuaXNWaXNpYmxlKSB7XG4gICAgICAgICAgaW5zdGFuY2UuaGlkZSgpO1xuICAgICAgICB9XG4gICAgICB9LCBkZWxheSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIEZpeGVzIGEgYHRyYW5zaXRpb25lbmRgIHByb2JsZW0gd2hlbiBpdCBmaXJlcyAxIGZyYW1lIHRvb1xuICAgICAgLy8gbGF0ZSBzb21ldGltZXMsIHdlIGRvbid0IHdhbnQgaGlkZSgpIHRvIGJlIGNhbGxlZC5cbiAgICAgIHNjaGVkdWxlSGlkZUFuaW1hdGlvbkZyYW1lID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgaW5zdGFuY2UuaGlkZSgpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIC8vIPCflJEgUHVibGljIG1ldGhvZHNcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIGZ1bmN0aW9uIGVuYWJsZSgpOiB2b2lkIHtcbiAgICBpbnN0YW5jZS5zdGF0ZS5pc0VuYWJsZWQgPSB0cnVlO1xuICB9XG5cbiAgZnVuY3Rpb24gZGlzYWJsZSgpOiB2b2lkIHtcbiAgICAvLyBEaXNhYmxpbmcgdGhlIGluc3RhbmNlIHNob3VsZCBhbHNvIGhpZGUgaXRcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vYXRvbWlrcy90aXBweS5qcy1yZWFjdC9pc3N1ZXMvMTA2XG4gICAgaW5zdGFuY2UuaGlkZSgpO1xuICAgIGluc3RhbmNlLnN0YXRlLmlzRW5hYmxlZCA9IGZhbHNlO1xuICB9XG5cbiAgZnVuY3Rpb24gY2xlYXJEZWxheVRpbWVvdXRzKCk6IHZvaWQge1xuICAgIGNsZWFyVGltZW91dChzaG93VGltZW91dCk7XG4gICAgY2xlYXJUaW1lb3V0KGhpZGVUaW1lb3V0KTtcbiAgICBjYW5jZWxBbmltYXRpb25GcmFtZShzY2hlZHVsZUhpZGVBbmltYXRpb25GcmFtZSk7XG4gIH1cblxuICBmdW5jdGlvbiBzZXRQcm9wcyhwYXJ0aWFsUHJvcHM6IFBhcnRpYWw8UHJvcHM+KTogdm9pZCB7XG4gICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgICBpZiAoX19ERVZfXykge1xuICAgICAgd2FybldoZW4oaW5zdGFuY2Uuc3RhdGUuaXNEZXN0cm95ZWQsIGNyZWF0ZU1lbW9yeUxlYWtXYXJuaW5nKCdzZXRQcm9wcycpKTtcbiAgICB9XG5cbiAgICBpZiAoaW5zdGFuY2Uuc3RhdGUuaXNEZXN0cm95ZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpbnZva2VIb29rKCdvbkJlZm9yZVVwZGF0ZScsIFtpbnN0YW5jZSwgcGFydGlhbFByb3BzXSk7XG5cbiAgICByZW1vdmVMaXN0ZW5lcnMoKTtcblxuICAgIGNvbnN0IHByZXZQcm9wcyA9IGluc3RhbmNlLnByb3BzO1xuICAgIGNvbnN0IG5leHRQcm9wcyA9IGV2YWx1YXRlUHJvcHMocmVmZXJlbmNlLCB7XG4gICAgICAuLi5wcmV2UHJvcHMsXG4gICAgICAuLi5yZW1vdmVVbmRlZmluZWRQcm9wcyhwYXJ0aWFsUHJvcHMpLFxuICAgICAgaWdub3JlQXR0cmlidXRlczogdHJ1ZSxcbiAgICB9KTtcblxuICAgIGluc3RhbmNlLnByb3BzID0gbmV4dFByb3BzO1xuXG4gICAgYWRkTGlzdGVuZXJzKCk7XG5cbiAgICBpZiAocHJldlByb3BzLmludGVyYWN0aXZlRGVib3VuY2UgIT09IG5leHRQcm9wcy5pbnRlcmFjdGl2ZURlYm91bmNlKSB7XG4gICAgICBjbGVhbnVwSW50ZXJhY3RpdmVNb3VzZUxpc3RlbmVycygpO1xuICAgICAgZGVib3VuY2VkT25Nb3VzZU1vdmUgPSBkZWJvdW5jZShcbiAgICAgICAgb25Nb3VzZU1vdmUsXG4gICAgICAgIG5leHRQcm9wcy5pbnRlcmFjdGl2ZURlYm91bmNlXG4gICAgICApO1xuICAgIH1cblxuICAgIC8vIEVuc3VyZSBzdGFsZSBhcmlhLWV4cGFuZGVkIGF0dHJpYnV0ZXMgYXJlIHJlbW92ZWRcbiAgICBpZiAocHJldlByb3BzLnRyaWdnZXJUYXJnZXQgJiYgIW5leHRQcm9wcy50cmlnZ2VyVGFyZ2V0KSB7XG4gICAgICBub3JtYWxpemVUb0FycmF5KHByZXZQcm9wcy50cmlnZ2VyVGFyZ2V0KS5mb3JFYWNoKChub2RlKSA9PiB7XG4gICAgICAgIG5vZGUucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJyk7XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKG5leHRQcm9wcy50cmlnZ2VyVGFyZ2V0KSB7XG4gICAgICByZWZlcmVuY2UucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJyk7XG4gICAgfVxuXG4gICAgaGFuZGxlQXJpYUV4cGFuZGVkQXR0cmlidXRlKCk7XG4gICAgaGFuZGxlU3R5bGVzKCk7XG5cbiAgICBpZiAob25VcGRhdGUpIHtcbiAgICAgIG9uVXBkYXRlKHByZXZQcm9wcywgbmV4dFByb3BzKTtcbiAgICB9XG5cbiAgICBpZiAoaW5zdGFuY2UucG9wcGVySW5zdGFuY2UpIHtcbiAgICAgIGNyZWF0ZVBvcHBlckluc3RhbmNlKCk7XG5cbiAgICAgIC8vIEZpeGVzIGFuIGlzc3VlIHdpdGggbmVzdGVkIHRpcHBpZXMgaWYgdGhleSBhcmUgYWxsIGdldHRpbmcgcmUtcmVuZGVyZWQsXG4gICAgICAvLyBhbmQgdGhlIG5lc3RlZCBvbmVzIGdldCByZS1yZW5kZXJlZCBmaXJzdC5cbiAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hdG9taWtzL3RpcHB5anMtcmVhY3QvaXNzdWVzLzE3N1xuICAgICAgLy8gVE9ETzogZmluZCBhIGNsZWFuZXIgLyBtb3JlIGVmZmljaWVudCBzb2x1dGlvbighKVxuICAgICAgZ2V0TmVzdGVkUG9wcGVyVHJlZSgpLmZvckVhY2goKG5lc3RlZFBvcHBlcikgPT4ge1xuICAgICAgICAvLyBSZWFjdCAoYW5kIG90aGVyIFVJIGxpYnMgbGlrZWx5KSByZXF1aXJlcyBhIHJBRiB3cmFwcGVyIGFzIGl0IGZsdXNoZXNcbiAgICAgICAgLy8gaXRzIHdvcmsgaW4gb25lXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShuZXN0ZWRQb3BwZXIuX3RpcHB5IS5wb3BwZXJJbnN0YW5jZSEuZm9yY2VVcGRhdGUpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaW52b2tlSG9vaygnb25BZnRlclVwZGF0ZScsIFtpbnN0YW5jZSwgcGFydGlhbFByb3BzXSk7XG4gIH1cblxuICBmdW5jdGlvbiBzZXRDb250ZW50KGNvbnRlbnQ6IENvbnRlbnQpOiB2b2lkIHtcbiAgICBpbnN0YW5jZS5zZXRQcm9wcyh7Y29udGVudH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gc2hvdygpOiB2b2lkIHtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgIGlmIChfX0RFVl9fKSB7XG4gICAgICB3YXJuV2hlbihpbnN0YW5jZS5zdGF0ZS5pc0Rlc3Ryb3llZCwgY3JlYXRlTWVtb3J5TGVha1dhcm5pbmcoJ3Nob3cnKSk7XG4gICAgfVxuXG4gICAgLy8gRWFybHkgYmFpbC1vdXRcbiAgICBjb25zdCBpc0FscmVhZHlWaXNpYmxlID0gaW5zdGFuY2Uuc3RhdGUuaXNWaXNpYmxlO1xuICAgIGNvbnN0IGlzRGVzdHJveWVkID0gaW5zdGFuY2Uuc3RhdGUuaXNEZXN0cm95ZWQ7XG4gICAgY29uc3QgaXNEaXNhYmxlZCA9ICFpbnN0YW5jZS5zdGF0ZS5pc0VuYWJsZWQ7XG4gICAgY29uc3QgaXNUb3VjaEFuZFRvdWNoRGlzYWJsZWQgPVxuICAgICAgY3VycmVudElucHV0LmlzVG91Y2ggJiYgIWluc3RhbmNlLnByb3BzLnRvdWNoO1xuICAgIGNvbnN0IGR1cmF0aW9uID0gZ2V0VmFsdWVBdEluZGV4T3JSZXR1cm4oXG4gICAgICBpbnN0YW5jZS5wcm9wcy5kdXJhdGlvbixcbiAgICAgIDAsXG4gICAgICBkZWZhdWx0UHJvcHMuZHVyYXRpb25cbiAgICApO1xuXG4gICAgaWYgKFxuICAgICAgaXNBbHJlYWR5VmlzaWJsZSB8fFxuICAgICAgaXNEZXN0cm95ZWQgfHxcbiAgICAgIGlzRGlzYWJsZWQgfHxcbiAgICAgIGlzVG91Y2hBbmRUb3VjaERpc2FibGVkXG4gICAgKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gTm9ybWFsaXplIGBkaXNhYmxlZGAgYmVoYXZpb3IgYWNyb3NzIGJyb3dzZXJzLlxuICAgIC8vIEZpcmVmb3ggYWxsb3dzIGV2ZW50cyBvbiBkaXNhYmxlZCBlbGVtZW50cywgYnV0IENocm9tZSBkb2Vzbid0LlxuICAgIC8vIFVzaW5nIGEgd3JhcHBlciBlbGVtZW50IChpLmUuIDxzcGFuPikgaXMgcmVjb21tZW5kZWQuXG4gICAgaWYgKGdldEN1cnJlbnRUYXJnZXQoKS5oYXNBdHRyaWJ1dGUoJ2Rpc2FibGVkJykpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpbnZva2VIb29rKCdvblNob3cnLCBbaW5zdGFuY2VdLCBmYWxzZSk7XG4gICAgaWYgKGluc3RhbmNlLnByb3BzLm9uU2hvdyhpbnN0YW5jZSkgPT09IGZhbHNlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaW5zdGFuY2Uuc3RhdGUuaXNWaXNpYmxlID0gdHJ1ZTtcblxuICAgIGlmIChnZXRJc0RlZmF1bHRSZW5kZXJGbigpKSB7XG4gICAgICBwb3BwZXIuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcbiAgICB9XG5cbiAgICBoYW5kbGVTdHlsZXMoKTtcbiAgICBhZGREb2N1bWVudFByZXNzKCk7XG5cbiAgICBpZiAoIWluc3RhbmNlLnN0YXRlLmlzTW91bnRlZCkge1xuICAgICAgcG9wcGVyLnN0eWxlLnRyYW5zaXRpb24gPSAnbm9uZSc7XG4gICAgfVxuXG4gICAgLy8gSWYgZmxpcHBpbmcgdG8gdGhlIG9wcG9zaXRlIHNpZGUgYWZ0ZXIgaGlkaW5nIGF0IGxlYXN0IG9uY2UsIHRoZVxuICAgIC8vIGFuaW1hdGlvbiB3aWxsIHVzZSB0aGUgd3JvbmcgcGxhY2VtZW50IHdpdGhvdXQgcmVzZXR0aW5nIHRoZSBkdXJhdGlvblxuICAgIGlmIChnZXRJc0RlZmF1bHRSZW5kZXJGbigpKSB7XG4gICAgICBjb25zdCB7Ym94LCBjb250ZW50fSA9IGdldERlZmF1bHRUZW1wbGF0ZUNoaWxkcmVuKCk7XG4gICAgICBzZXRUcmFuc2l0aW9uRHVyYXRpb24oW2JveCwgY29udGVudF0sIDApO1xuICAgIH1cblxuICAgIG9uRmlyc3RVcGRhdGUgPSAoKTogdm9pZCA9PiB7XG4gICAgICBpZiAoIWluc3RhbmNlLnN0YXRlLmlzVmlzaWJsZSB8fCBpZ25vcmVPbkZpcnN0VXBkYXRlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWdub3JlT25GaXJzdFVwZGF0ZSA9IHRydWU7XG5cbiAgICAgIC8vIHJlZmxvd1xuICAgICAgdm9pZCBwb3BwZXIub2Zmc2V0SGVpZ2h0O1xuXG4gICAgICBwb3BwZXIuc3R5bGUudHJhbnNpdGlvbiA9IGluc3RhbmNlLnByb3BzLm1vdmVUcmFuc2l0aW9uO1xuXG4gICAgICBpZiAoZ2V0SXNEZWZhdWx0UmVuZGVyRm4oKSAmJiBpbnN0YW5jZS5wcm9wcy5hbmltYXRpb24pIHtcbiAgICAgICAgY29uc3Qge2JveCwgY29udGVudH0gPSBnZXREZWZhdWx0VGVtcGxhdGVDaGlsZHJlbigpO1xuICAgICAgICBzZXRUcmFuc2l0aW9uRHVyYXRpb24oW2JveCwgY29udGVudF0sIGR1cmF0aW9uKTtcbiAgICAgICAgc2V0VmlzaWJpbGl0eVN0YXRlKFtib3gsIGNvbnRlbnRdLCAndmlzaWJsZScpO1xuICAgICAgfVxuXG4gICAgICBoYW5kbGVBcmlhQ29udGVudEF0dHJpYnV0ZSgpO1xuICAgICAgaGFuZGxlQXJpYUV4cGFuZGVkQXR0cmlidXRlKCk7XG5cbiAgICAgIHB1c2hJZlVuaXF1ZShtb3VudGVkSW5zdGFuY2VzLCBpbnN0YW5jZSk7XG5cbiAgICAgIC8vIGNlcnRhaW4gbW9kaWZpZXJzIChlLmcuIGBtYXhTaXplYCkgcmVxdWlyZSBhIHNlY29uZCB1cGRhdGUgYWZ0ZXIgdGhlXG4gICAgICAvLyBwb3BwZXIgaGFzIGJlZW4gcG9zaXRpb25lZCBmb3IgdGhlIGZpcnN0IHRpbWVcbiAgICAgIGluc3RhbmNlLnBvcHBlckluc3RhbmNlPy5mb3JjZVVwZGF0ZSgpO1xuXG4gICAgICBpbnZva2VIb29rKCdvbk1vdW50JywgW2luc3RhbmNlXSk7XG5cbiAgICAgIGlmIChpbnN0YW5jZS5wcm9wcy5hbmltYXRpb24gJiYgZ2V0SXNEZWZhdWx0UmVuZGVyRm4oKSkge1xuICAgICAgICBvblRyYW5zaXRpb25lZEluKGR1cmF0aW9uLCAoKSA9PiB7XG4gICAgICAgICAgaW5zdGFuY2Uuc3RhdGUuaXNTaG93biA9IHRydWU7XG4gICAgICAgICAgaW52b2tlSG9vaygnb25TaG93bicsIFtpbnN0YW5jZV0pO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgbW91bnQoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhpZGUoKTogdm9pZCB7XG4gICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgICBpZiAoX19ERVZfXykge1xuICAgICAgd2FybldoZW4oaW5zdGFuY2Uuc3RhdGUuaXNEZXN0cm95ZWQsIGNyZWF0ZU1lbW9yeUxlYWtXYXJuaW5nKCdoaWRlJykpO1xuICAgIH1cblxuICAgIC8vIEVhcmx5IGJhaWwtb3V0XG4gICAgY29uc3QgaXNBbHJlYWR5SGlkZGVuID0gIWluc3RhbmNlLnN0YXRlLmlzVmlzaWJsZTtcbiAgICBjb25zdCBpc0Rlc3Ryb3llZCA9IGluc3RhbmNlLnN0YXRlLmlzRGVzdHJveWVkO1xuICAgIGNvbnN0IGlzRGlzYWJsZWQgPSAhaW5zdGFuY2Uuc3RhdGUuaXNFbmFibGVkO1xuICAgIGNvbnN0IGR1cmF0aW9uID0gZ2V0VmFsdWVBdEluZGV4T3JSZXR1cm4oXG4gICAgICBpbnN0YW5jZS5wcm9wcy5kdXJhdGlvbixcbiAgICAgIDEsXG4gICAgICBkZWZhdWx0UHJvcHMuZHVyYXRpb25cbiAgICApO1xuXG4gICAgaWYgKGlzQWxyZWFkeUhpZGRlbiB8fCBpc0Rlc3Ryb3llZCB8fCBpc0Rpc2FibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaW52b2tlSG9vaygnb25IaWRlJywgW2luc3RhbmNlXSwgZmFsc2UpO1xuICAgIGlmIChpbnN0YW5jZS5wcm9wcy5vbkhpZGUoaW5zdGFuY2UpID09PSBmYWxzZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGluc3RhbmNlLnN0YXRlLmlzVmlzaWJsZSA9IGZhbHNlO1xuICAgIGluc3RhbmNlLnN0YXRlLmlzU2hvd24gPSBmYWxzZTtcbiAgICBpZ25vcmVPbkZpcnN0VXBkYXRlID0gZmFsc2U7XG4gICAgaXNWaXNpYmxlRnJvbUNsaWNrID0gZmFsc2U7XG5cbiAgICBpZiAoZ2V0SXNEZWZhdWx0UmVuZGVyRm4oKSkge1xuICAgICAgcG9wcGVyLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgICB9XG5cbiAgICBjbGVhbnVwSW50ZXJhY3RpdmVNb3VzZUxpc3RlbmVycygpO1xuICAgIHJlbW92ZURvY3VtZW50UHJlc3MoKTtcbiAgICBoYW5kbGVTdHlsZXModHJ1ZSk7XG5cbiAgICBpZiAoZ2V0SXNEZWZhdWx0UmVuZGVyRm4oKSkge1xuICAgICAgY29uc3Qge2JveCwgY29udGVudH0gPSBnZXREZWZhdWx0VGVtcGxhdGVDaGlsZHJlbigpO1xuXG4gICAgICBpZiAoaW5zdGFuY2UucHJvcHMuYW5pbWF0aW9uKSB7XG4gICAgICAgIHNldFRyYW5zaXRpb25EdXJhdGlvbihbYm94LCBjb250ZW50XSwgZHVyYXRpb24pO1xuICAgICAgICBzZXRWaXNpYmlsaXR5U3RhdGUoW2JveCwgY29udGVudF0sICdoaWRkZW4nKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBoYW5kbGVBcmlhQ29udGVudEF0dHJpYnV0ZSgpO1xuICAgIGhhbmRsZUFyaWFFeHBhbmRlZEF0dHJpYnV0ZSgpO1xuXG4gICAgaWYgKGluc3RhbmNlLnByb3BzLmFuaW1hdGlvbikge1xuICAgICAgaWYgKGdldElzRGVmYXVsdFJlbmRlckZuKCkpIHtcbiAgICAgICAgb25UcmFuc2l0aW9uZWRPdXQoZHVyYXRpb24sIGluc3RhbmNlLnVubW91bnQpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpbnN0YW5jZS51bm1vdW50KCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaGlkZVdpdGhJbnRlcmFjdGl2aXR5KGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgICBpZiAoX19ERVZfXykge1xuICAgICAgd2FybldoZW4oXG4gICAgICAgIGluc3RhbmNlLnN0YXRlLmlzRGVzdHJveWVkLFxuICAgICAgICBjcmVhdGVNZW1vcnlMZWFrV2FybmluZygnaGlkZVdpdGhJbnRlcmFjdGl2aXR5JylcbiAgICAgICk7XG4gICAgfVxuXG4gICAgZ2V0RG9jdW1lbnQoKS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBkZWJvdW5jZWRPbk1vdXNlTW92ZSk7XG4gICAgcHVzaElmVW5pcXVlKG1vdXNlTW92ZUxpc3RlbmVycywgZGVib3VuY2VkT25Nb3VzZU1vdmUpO1xuICAgIGRlYm91bmNlZE9uTW91c2VNb3ZlKGV2ZW50KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHVubW91bnQoKTogdm9pZCB7XG4gICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgICBpZiAoX19ERVZfXykge1xuICAgICAgd2FybldoZW4oaW5zdGFuY2Uuc3RhdGUuaXNEZXN0cm95ZWQsIGNyZWF0ZU1lbW9yeUxlYWtXYXJuaW5nKCd1bm1vdW50JykpO1xuICAgIH1cblxuICAgIGlmIChpbnN0YW5jZS5zdGF0ZS5pc1Zpc2libGUpIHtcbiAgICAgIGluc3RhbmNlLmhpZGUoKTtcbiAgICB9XG5cbiAgICBpZiAoIWluc3RhbmNlLnN0YXRlLmlzTW91bnRlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGRlc3Ryb3lQb3BwZXJJbnN0YW5jZSgpO1xuXG4gICAgLy8gSWYgYSBwb3BwZXIgaXMgbm90IGludGVyYWN0aXZlLCBpdCB3aWxsIGJlIGFwcGVuZGVkIG91dHNpZGUgdGhlIHBvcHBlclxuICAgIC8vIHRyZWUgYnkgZGVmYXVsdC4gVGhpcyBzZWVtcyBtYWlubHkgZm9yIGludGVyYWN0aXZlIHRpcHBpZXMsIGJ1dCB3ZSBzaG91bGRcbiAgICAvLyBmaW5kIGEgd29ya2Fyb3VuZCBpZiBwb3NzaWJsZVxuICAgIGdldE5lc3RlZFBvcHBlclRyZWUoKS5mb3JFYWNoKChuZXN0ZWRQb3BwZXIpID0+IHtcbiAgICAgIG5lc3RlZFBvcHBlci5fdGlwcHkhLnVubW91bnQoKTtcbiAgICB9KTtcblxuICAgIGlmIChwb3BwZXIucGFyZW50Tm9kZSkge1xuICAgICAgcG9wcGVyLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQocG9wcGVyKTtcbiAgICB9XG5cbiAgICBtb3VudGVkSW5zdGFuY2VzID0gbW91bnRlZEluc3RhbmNlcy5maWx0ZXIoKGkpID0+IGkgIT09IGluc3RhbmNlKTtcblxuICAgIGluc3RhbmNlLnN0YXRlLmlzTW91bnRlZCA9IGZhbHNlO1xuICAgIGludm9rZUhvb2soJ29uSGlkZGVuJywgW2luc3RhbmNlXSk7XG4gIH1cblxuICBmdW5jdGlvbiBkZXN0cm95KCk6IHZvaWQge1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gICAgaWYgKF9fREVWX18pIHtcbiAgICAgIHdhcm5XaGVuKGluc3RhbmNlLnN0YXRlLmlzRGVzdHJveWVkLCBjcmVhdGVNZW1vcnlMZWFrV2FybmluZygnZGVzdHJveScpKTtcbiAgICB9XG5cbiAgICBpZiAoaW5zdGFuY2Uuc3RhdGUuaXNEZXN0cm95ZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpbnN0YW5jZS5jbGVhckRlbGF5VGltZW91dHMoKTtcbiAgICBpbnN0YW5jZS51bm1vdW50KCk7XG5cbiAgICByZW1vdmVMaXN0ZW5lcnMoKTtcblxuICAgIGRlbGV0ZSByZWZlcmVuY2UuX3RpcHB5O1xuXG4gICAgaW5zdGFuY2Uuc3RhdGUuaXNEZXN0cm95ZWQgPSB0cnVlO1xuXG4gICAgaW52b2tlSG9vaygnb25EZXN0cm95JywgW2luc3RhbmNlXSk7XG4gIH1cbn1cbiIsICJpbXBvcnQgYmluZEdsb2JhbEV2ZW50TGlzdGVuZXJzLCB7XG4gIGN1cnJlbnRJbnB1dCxcbn0gZnJvbSAnLi9iaW5kR2xvYmFsRXZlbnRMaXN0ZW5lcnMnO1xuaW1wb3J0IGNyZWF0ZVRpcHB5LCB7bW91bnRlZEluc3RhbmNlc30gZnJvbSAnLi9jcmVhdGVUaXBweSc7XG5pbXBvcnQge2dldEFycmF5T2ZFbGVtZW50cywgaXNFbGVtZW50LCBpc1JlZmVyZW5jZUVsZW1lbnR9IGZyb20gJy4vZG9tLXV0aWxzJztcbmltcG9ydCB7ZGVmYXVsdFByb3BzLCBzZXREZWZhdWx0UHJvcHMsIHZhbGlkYXRlUHJvcHN9IGZyb20gJy4vcHJvcHMnO1xuaW1wb3J0IHtIaWRlQWxsLCBIaWRlQWxsT3B0aW9ucywgSW5zdGFuY2UsIFByb3BzLCBUYXJnZXRzfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7dmFsaWRhdGVUYXJnZXRzLCB3YXJuV2hlbn0gZnJvbSAnLi92YWxpZGF0aW9uJztcblxuZnVuY3Rpb24gdGlwcHkoXG4gIHRhcmdldHM6IFRhcmdldHMsXG4gIG9wdGlvbmFsUHJvcHM6IFBhcnRpYWw8UHJvcHM+ID0ge31cbik6IEluc3RhbmNlIHwgSW5zdGFuY2VbXSB7XG4gIGNvbnN0IHBsdWdpbnMgPSBkZWZhdWx0UHJvcHMucGx1Z2lucy5jb25jYXQob3B0aW9uYWxQcm9wcy5wbHVnaW5zIHx8IFtdKTtcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICBpZiAoX19ERVZfXykge1xuICAgIHZhbGlkYXRlVGFyZ2V0cyh0YXJnZXRzKTtcbiAgICB2YWxpZGF0ZVByb3BzKG9wdGlvbmFsUHJvcHMsIHBsdWdpbnMpO1xuICB9XG5cbiAgYmluZEdsb2JhbEV2ZW50TGlzdGVuZXJzKCk7XG5cbiAgY29uc3QgcGFzc2VkUHJvcHM6IFBhcnRpYWw8UHJvcHM+ID0gey4uLm9wdGlvbmFsUHJvcHMsIHBsdWdpbnN9O1xuXG4gIGNvbnN0IGVsZW1lbnRzID0gZ2V0QXJyYXlPZkVsZW1lbnRzKHRhcmdldHMpO1xuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gIGlmIChfX0RFVl9fKSB7XG4gICAgY29uc3QgaXNTaW5nbGVDb250ZW50RWxlbWVudCA9IGlzRWxlbWVudChwYXNzZWRQcm9wcy5jb250ZW50KTtcbiAgICBjb25zdCBpc01vcmVUaGFuT25lUmVmZXJlbmNlRWxlbWVudCA9IGVsZW1lbnRzLmxlbmd0aCA+IDE7XG4gICAgd2FybldoZW4oXG4gICAgICBpc1NpbmdsZUNvbnRlbnRFbGVtZW50ICYmIGlzTW9yZVRoYW5PbmVSZWZlcmVuY2VFbGVtZW50LFxuICAgICAgW1xuICAgICAgICAndGlwcHkoKSB3YXMgcGFzc2VkIGFuIEVsZW1lbnQgYXMgdGhlIGBjb250ZW50YCBwcm9wLCBidXQgbW9yZSB0aGFuJyxcbiAgICAgICAgJ29uZSB0aXBweSBpbnN0YW5jZSB3YXMgY3JlYXRlZCBieSB0aGlzIGludm9jYXRpb24uIFRoaXMgbWVhbnMgdGhlJyxcbiAgICAgICAgJ2NvbnRlbnQgZWxlbWVudCB3aWxsIG9ubHkgYmUgYXBwZW5kZWQgdG8gdGhlIGxhc3QgdGlwcHkgaW5zdGFuY2UuJyxcbiAgICAgICAgJ1xcblxcbicsXG4gICAgICAgICdJbnN0ZWFkLCBwYXNzIHRoZSAuaW5uZXJIVE1MIG9mIHRoZSBlbGVtZW50LCBvciB1c2UgYSBmdW5jdGlvbiB0aGF0JyxcbiAgICAgICAgJ3JldHVybnMgYSBjbG9uZWQgdmVyc2lvbiBvZiB0aGUgZWxlbWVudCBpbnN0ZWFkLicsXG4gICAgICAgICdcXG5cXG4nLFxuICAgICAgICAnMSkgY29udGVudDogZWxlbWVudC5pbm5lckhUTUxcXG4nLFxuICAgICAgICAnMikgY29udGVudDogKCkgPT4gZWxlbWVudC5jbG9uZU5vZGUodHJ1ZSknLFxuICAgICAgXS5qb2luKCcgJylcbiAgICApO1xuICB9XG5cbiAgY29uc3QgaW5zdGFuY2VzID0gZWxlbWVudHMucmVkdWNlPEluc3RhbmNlW10+KFxuICAgIChhY2MsIHJlZmVyZW5jZSk6IEluc3RhbmNlW10gPT4ge1xuICAgICAgY29uc3QgaW5zdGFuY2UgPSByZWZlcmVuY2UgJiYgY3JlYXRlVGlwcHkocmVmZXJlbmNlLCBwYXNzZWRQcm9wcyk7XG5cbiAgICAgIGlmIChpbnN0YW5jZSkge1xuICAgICAgICBhY2MucHVzaChpbnN0YW5jZSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBhY2M7XG4gICAgfSxcbiAgICBbXVxuICApO1xuXG4gIHJldHVybiBpc0VsZW1lbnQodGFyZ2V0cykgPyBpbnN0YW5jZXNbMF0gOiBpbnN0YW5jZXM7XG59XG5cbnRpcHB5LmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcztcbnRpcHB5LnNldERlZmF1bHRQcm9wcyA9IHNldERlZmF1bHRQcm9wcztcbnRpcHB5LmN1cnJlbnRJbnB1dCA9IGN1cnJlbnRJbnB1dDtcblxuZXhwb3J0IGRlZmF1bHQgdGlwcHk7XG5cbmV4cG9ydCBjb25zdCBoaWRlQWxsOiBIaWRlQWxsID0gKHtcbiAgZXhjbHVkZTogZXhjbHVkZWRSZWZlcmVuY2VPckluc3RhbmNlLFxuICBkdXJhdGlvbixcbn06IEhpZGVBbGxPcHRpb25zID0ge30pID0+IHtcbiAgbW91bnRlZEluc3RhbmNlcy5mb3JFYWNoKChpbnN0YW5jZSkgPT4ge1xuICAgIGxldCBpc0V4Y2x1ZGVkID0gZmFsc2U7XG5cbiAgICBpZiAoZXhjbHVkZWRSZWZlcmVuY2VPckluc3RhbmNlKSB7XG4gICAgICBpc0V4Y2x1ZGVkID0gaXNSZWZlcmVuY2VFbGVtZW50KGV4Y2x1ZGVkUmVmZXJlbmNlT3JJbnN0YW5jZSlcbiAgICAgICAgPyBpbnN0YW5jZS5yZWZlcmVuY2UgPT09IGV4Y2x1ZGVkUmVmZXJlbmNlT3JJbnN0YW5jZVxuICAgICAgICA6IGluc3RhbmNlLnBvcHBlciA9PT0gKGV4Y2x1ZGVkUmVmZXJlbmNlT3JJbnN0YW5jZSBhcyBJbnN0YW5jZSkucG9wcGVyO1xuICAgIH1cblxuICAgIGlmICghaXNFeGNsdWRlZCkge1xuICAgICAgY29uc3Qgb3JpZ2luYWxEdXJhdGlvbiA9IGluc3RhbmNlLnByb3BzLmR1cmF0aW9uO1xuXG4gICAgICBpbnN0YW5jZS5zZXRQcm9wcyh7ZHVyYXRpb259KTtcbiAgICAgIGluc3RhbmNlLmhpZGUoKTtcblxuICAgICAgaWYgKCFpbnN0YW5jZS5zdGF0ZS5pc0Rlc3Ryb3llZCkge1xuICAgICAgICBpbnN0YW5jZS5zZXRQcm9wcyh7ZHVyYXRpb246IG9yaWdpbmFsRHVyYXRpb259KTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufTtcbiIsICJpbXBvcnQgdGlwcHkgZnJvbSAnLi4nO1xuaW1wb3J0IHtkaXZ9IGZyb20gJy4uL2RvbS11dGlscyc7XG5pbXBvcnQge1xuICBDcmVhdGVTaW5nbGV0b24sXG4gIFBsdWdpbixcbiAgQ3JlYXRlU2luZ2xldG9uUHJvcHMsXG4gIFJlZmVyZW5jZUVsZW1lbnQsXG4gIENyZWF0ZVNpbmdsZXRvbkluc3RhbmNlLFxuICBJbnN0YW5jZSxcbiAgUHJvcHMsXG59IGZyb20gJy4uL3R5cGVzJztcbmltcG9ydCB7bm9ybWFsaXplVG9BcnJheSwgcmVtb3ZlUHJvcGVydGllc30gZnJvbSAnLi4vdXRpbHMnO1xuaW1wb3J0IHtlcnJvcldoZW59IGZyb20gJy4uL3ZhbGlkYXRpb24nO1xuaW1wb3J0IHthcHBseVN0eWxlcywgTW9kaWZpZXJ9IGZyb20gJ0Bwb3BwZXJqcy9jb3JlJztcblxuLy8gVGhlIGRlZmF1bHQgYGFwcGx5U3R5bGVzYCBtb2RpZmllciBoYXMgYSBjbGVhbnVwIGZ1bmN0aW9uIHRoYXQgZ2V0cyBjYWxsZWRcbi8vIGV2ZXJ5IHRpbWUgdGhlIHBvcHBlciBpcyBkZXN0cm95ZWQgKGkuZS4gYSBuZXcgdGFyZ2V0KSwgcmVtb3ZpbmcgdGhlIHN0eWxlc1xuLy8gYW5kIGNhdXNpbmcgdHJhbnNpdGlvbnMgdG8gYnJlYWsgZm9yIHNpbmdsZXRvbnMgd2hlbiB0aGUgY29uc29sZSBpcyBvcGVuLCBidXRcbi8vIG1vc3Qgbm90YWJseSBmb3Igbm9uLXRyYW5zZm9ybSBzdHlsZXMgYmVpbmcgdXNlZCwgYGdwdUFjY2VsZXJhdGlvbjogZmFsc2VgLlxuY29uc3QgYXBwbHlTdHlsZXNNb2RpZmllcjogTW9kaWZpZXI8J2FwcGx5U3R5bGVzJywgUmVjb3JkPHN0cmluZywgdW5rbm93bj4+ID0ge1xuICAuLi5hcHBseVN0eWxlcyxcbiAgZWZmZWN0KHtzdGF0ZX0pIHtcbiAgICBjb25zdCBpbml0aWFsU3R5bGVzID0ge1xuICAgICAgcG9wcGVyOiB7XG4gICAgICAgIHBvc2l0aW9uOiBzdGF0ZS5vcHRpb25zLnN0cmF0ZWd5LFxuICAgICAgICBsZWZ0OiAnMCcsXG4gICAgICAgIHRvcDogJzAnLFxuICAgICAgICBtYXJnaW46ICcwJyxcbiAgICAgIH0sXG4gICAgICBhcnJvdzoge1xuICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIH0sXG4gICAgICByZWZlcmVuY2U6IHt9LFxuICAgIH07XG5cbiAgICBPYmplY3QuYXNzaWduKHN0YXRlLmVsZW1lbnRzLnBvcHBlci5zdHlsZSwgaW5pdGlhbFN0eWxlcy5wb3BwZXIpO1xuICAgIHN0YXRlLnN0eWxlcyA9IGluaXRpYWxTdHlsZXM7XG5cbiAgICBpZiAoc3RhdGUuZWxlbWVudHMuYXJyb3cpIHtcbiAgICAgIE9iamVjdC5hc3NpZ24oc3RhdGUuZWxlbWVudHMuYXJyb3cuc3R5bGUsIGluaXRpYWxTdHlsZXMuYXJyb3cpO1xuICAgIH1cblxuICAgIC8vIGludGVudGlvbmFsbHkgcmV0dXJuIG5vIGNsZWFudXAgZnVuY3Rpb25cbiAgICAvLyByZXR1cm4gKCkgPT4geyAuLi4gfVxuICB9LFxufTtcblxuY29uc3QgY3JlYXRlU2luZ2xldG9uOiBDcmVhdGVTaW5nbGV0b24gPSAoXG4gIHRpcHB5SW5zdGFuY2VzLFxuICBvcHRpb25hbFByb3BzID0ge31cbikgPT4ge1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICBpZiAoX19ERVZfXykge1xuICAgIGVycm9yV2hlbihcbiAgICAgICFBcnJheS5pc0FycmF5KHRpcHB5SW5zdGFuY2VzKSxcbiAgICAgIFtcbiAgICAgICAgJ1RoZSBmaXJzdCBhcmd1bWVudCBwYXNzZWQgdG8gY3JlYXRlU2luZ2xldG9uKCkgbXVzdCBiZSBhbiBhcnJheSBvZicsXG4gICAgICAgICd0aXBweSBpbnN0YW5jZXMuIFRoZSBwYXNzZWQgdmFsdWUgd2FzJyxcbiAgICAgICAgU3RyaW5nKHRpcHB5SW5zdGFuY2VzKSxcbiAgICAgIF0uam9pbignICcpXG4gICAgKTtcbiAgfVxuXG4gIGxldCBpbmRpdmlkdWFsSW5zdGFuY2VzID0gdGlwcHlJbnN0YW5jZXM7XG4gIGxldCByZWZlcmVuY2VzOiBBcnJheTxSZWZlcmVuY2VFbGVtZW50PiA9IFtdO1xuICBsZXQgdHJpZ2dlclRhcmdldHM6IEFycmF5PEVsZW1lbnQ+ID0gW107XG4gIGxldCBjdXJyZW50VGFyZ2V0OiBFbGVtZW50IHwgbnVsbDtcbiAgbGV0IG92ZXJyaWRlcyA9IG9wdGlvbmFsUHJvcHMub3ZlcnJpZGVzO1xuICBsZXQgaW50ZXJjZXB0U2V0UHJvcHNDbGVhbnVwczogQXJyYXk8KCkgPT4gdm9pZD4gPSBbXTtcbiAgbGV0IHNob3duT25DcmVhdGUgPSBmYWxzZTtcblxuICBmdW5jdGlvbiBzZXRUcmlnZ2VyVGFyZ2V0cygpOiB2b2lkIHtcbiAgICB0cmlnZ2VyVGFyZ2V0cyA9IGluZGl2aWR1YWxJbnN0YW5jZXNcbiAgICAgIC5tYXAoKGluc3RhbmNlKSA9PlxuICAgICAgICBub3JtYWxpemVUb0FycmF5KGluc3RhbmNlLnByb3BzLnRyaWdnZXJUYXJnZXQgfHwgaW5zdGFuY2UucmVmZXJlbmNlKVxuICAgICAgKVxuICAgICAgLnJlZHVjZSgoYWNjLCBpdGVtKSA9PiBhY2MuY29uY2F0KGl0ZW0pLCBbXSk7XG4gIH1cblxuICBmdW5jdGlvbiBzZXRSZWZlcmVuY2VzKCk6IHZvaWQge1xuICAgIHJlZmVyZW5jZXMgPSBpbmRpdmlkdWFsSW5zdGFuY2VzLm1hcCgoaW5zdGFuY2UpID0+IGluc3RhbmNlLnJlZmVyZW5jZSk7XG4gIH1cblxuICBmdW5jdGlvbiBlbmFibGVJbnN0YW5jZXMoaXNFbmFibGVkOiBib29sZWFuKTogdm9pZCB7XG4gICAgaW5kaXZpZHVhbEluc3RhbmNlcy5mb3JFYWNoKChpbnN0YW5jZSkgPT4ge1xuICAgICAgaWYgKGlzRW5hYmxlZCkge1xuICAgICAgICBpbnN0YW5jZS5lbmFibGUoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGluc3RhbmNlLmRpc2FibGUoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGludGVyY2VwdFNldFByb3BzKHNpbmdsZXRvbjogSW5zdGFuY2UpOiBBcnJheTwoKSA9PiB2b2lkPiB7XG4gICAgcmV0dXJuIGluZGl2aWR1YWxJbnN0YW5jZXMubWFwKChpbnN0YW5jZSkgPT4ge1xuICAgICAgY29uc3Qgb3JpZ2luYWxTZXRQcm9wcyA9IGluc3RhbmNlLnNldFByb3BzO1xuXG4gICAgICBpbnN0YW5jZS5zZXRQcm9wcyA9IChwcm9wcyk6IHZvaWQgPT4ge1xuICAgICAgICBvcmlnaW5hbFNldFByb3BzKHByb3BzKTtcblxuICAgICAgICBpZiAoaW5zdGFuY2UucmVmZXJlbmNlID09PSBjdXJyZW50VGFyZ2V0KSB7XG4gICAgICAgICAgc2luZ2xldG9uLnNldFByb3BzKHByb3BzKTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgcmV0dXJuICgpOiB2b2lkID0+IHtcbiAgICAgICAgaW5zdGFuY2Uuc2V0UHJvcHMgPSBvcmlnaW5hbFNldFByb3BzO1xuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIGhhdmUgdG8gcGFzcyBzaW5nbGV0b24sIGFzIGl0IG1heWJlIHVuZGVmaW5lZCBvbiBmaXJzdCBjYWxsXG4gIGZ1bmN0aW9uIHByZXBhcmVJbnN0YW5jZShcbiAgICBzaW5nbGV0b246IEluc3RhbmNlLFxuICAgIHRhcmdldDogUmVmZXJlbmNlRWxlbWVudFxuICApOiB2b2lkIHtcbiAgICBjb25zdCBpbmRleCA9IHRyaWdnZXJUYXJnZXRzLmluZGV4T2YodGFyZ2V0KTtcblxuICAgIC8vIGJhaWwtb3V0XG4gICAgaWYgKHRhcmdldCA9PT0gY3VycmVudFRhcmdldCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGN1cnJlbnRUYXJnZXQgPSB0YXJnZXQ7XG5cbiAgICBjb25zdCBvdmVycmlkZVByb3BzOiBQYXJ0aWFsPFByb3BzPiA9IChvdmVycmlkZXMgfHwgW10pXG4gICAgICAuY29uY2F0KCdjb250ZW50JylcbiAgICAgIC5yZWR1Y2UoKGFjYywgcHJvcCkgPT4ge1xuICAgICAgICAoYWNjIGFzIGFueSlbcHJvcF0gPSBpbmRpdmlkdWFsSW5zdGFuY2VzW2luZGV4XS5wcm9wc1twcm9wXTtcbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgIH0sIHt9KTtcblxuICAgIHNpbmdsZXRvbi5zZXRQcm9wcyh7XG4gICAgICAuLi5vdmVycmlkZVByb3BzLFxuICAgICAgZ2V0UmVmZXJlbmNlQ2xpZW50UmVjdDpcbiAgICAgICAgdHlwZW9mIG92ZXJyaWRlUHJvcHMuZ2V0UmVmZXJlbmNlQ2xpZW50UmVjdCA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICAgID8gb3ZlcnJpZGVQcm9wcy5nZXRSZWZlcmVuY2VDbGllbnRSZWN0XG4gICAgICAgICAgOiAoKTogQ2xpZW50UmVjdCA9PiByZWZlcmVuY2VzW2luZGV4XT8uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG4gICAgfSk7XG4gIH1cblxuICBlbmFibGVJbnN0YW5jZXMoZmFsc2UpO1xuICBzZXRSZWZlcmVuY2VzKCk7XG4gIHNldFRyaWdnZXJUYXJnZXRzKCk7XG5cbiAgY29uc3QgcGx1Z2luOiBQbHVnaW4gPSB7XG4gICAgZm4oKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBvbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgICAgICAgZW5hYmxlSW5zdGFuY2VzKHRydWUpO1xuICAgICAgICB9LFxuICAgICAgICBvbkhpZGRlbigpOiB2b2lkIHtcbiAgICAgICAgICBjdXJyZW50VGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfSxcbiAgICAgICAgb25DbGlja091dHNpZGUoaW5zdGFuY2UpOiB2b2lkIHtcbiAgICAgICAgICBpZiAoaW5zdGFuY2UucHJvcHMuc2hvd09uQ3JlYXRlICYmICFzaG93bk9uQ3JlYXRlKSB7XG4gICAgICAgICAgICBzaG93bk9uQ3JlYXRlID0gdHJ1ZTtcbiAgICAgICAgICAgIGN1cnJlbnRUYXJnZXQgPSBudWxsO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgb25TaG93KGluc3RhbmNlKTogdm9pZCB7XG4gICAgICAgICAgaWYgKGluc3RhbmNlLnByb3BzLnNob3dPbkNyZWF0ZSAmJiAhc2hvd25PbkNyZWF0ZSkge1xuICAgICAgICAgICAgc2hvd25PbkNyZWF0ZSA9IHRydWU7XG4gICAgICAgICAgICBwcmVwYXJlSW5zdGFuY2UoaW5zdGFuY2UsIHJlZmVyZW5jZXNbMF0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgb25UcmlnZ2VyKGluc3RhbmNlLCBldmVudCk6IHZvaWQge1xuICAgICAgICAgIHByZXBhcmVJbnN0YW5jZShpbnN0YW5jZSwgZXZlbnQuY3VycmVudFRhcmdldCBhcyBFbGVtZW50KTtcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgfSxcbiAgfTtcblxuICBjb25zdCBzaW5nbGV0b24gPSB0aXBweShkaXYoKSwge1xuICAgIC4uLnJlbW92ZVByb3BlcnRpZXMob3B0aW9uYWxQcm9wcywgWydvdmVycmlkZXMnXSksXG4gICAgcGx1Z2luczogW3BsdWdpbiwgLi4uKG9wdGlvbmFsUHJvcHMucGx1Z2lucyB8fCBbXSldLFxuICAgIHRyaWdnZXJUYXJnZXQ6IHRyaWdnZXJUYXJnZXRzLFxuICAgIHBvcHBlck9wdGlvbnM6IHtcbiAgICAgIC4uLm9wdGlvbmFsUHJvcHMucG9wcGVyT3B0aW9ucyxcbiAgICAgIG1vZGlmaWVyczogW1xuICAgICAgICAuLi4ob3B0aW9uYWxQcm9wcy5wb3BwZXJPcHRpb25zPy5tb2RpZmllcnMgfHwgW10pLFxuICAgICAgICBhcHBseVN0eWxlc01vZGlmaWVyLFxuICAgICAgXSxcbiAgICB9LFxuICB9KSBhcyBDcmVhdGVTaW5nbGV0b25JbnN0YW5jZTxDcmVhdGVTaW5nbGV0b25Qcm9wcz47XG5cbiAgY29uc3Qgb3JpZ2luYWxTaG93ID0gc2luZ2xldG9uLnNob3c7XG5cbiAgc2luZ2xldG9uLnNob3cgPSAodGFyZ2V0PzogUmVmZXJlbmNlRWxlbWVudCB8IEluc3RhbmNlIHwgbnVtYmVyKTogdm9pZCA9PiB7XG4gICAgb3JpZ2luYWxTaG93KCk7XG5cbiAgICAvLyBmaXJzdCB0aW1lLCBzaG93T25DcmVhdGUgb3IgcHJvZ3JhbW1hdGljIGNhbGwgd2l0aCBubyBwYXJhbXNcbiAgICAvLyBkZWZhdWx0IHRvIHNob3dpbmcgZmlyc3QgaW5zdGFuY2VcbiAgICBpZiAoIWN1cnJlbnRUYXJnZXQgJiYgdGFyZ2V0ID09IG51bGwpIHtcbiAgICAgIHJldHVybiBwcmVwYXJlSW5zdGFuY2Uoc2luZ2xldG9uLCByZWZlcmVuY2VzWzBdKTtcbiAgICB9XG5cbiAgICAvLyB0cmlnZ2VyZWQgZnJvbSBldmVudCAoZG8gbm90aGluZyBhcyBwcmVwYXJlSW5zdGFuY2UgYWxyZWFkeSBjYWxsZWQgYnkgb25UcmlnZ2VyKVxuICAgIC8vIHByb2dyYW1tYXRpYyBjYWxsIHdpdGggbm8gcGFyYW1zIHdoZW4gYWxyZWFkeSB2aXNpYmxlIChkbyBub3RoaW5nIGFnYWluKVxuICAgIGlmIChjdXJyZW50VGFyZ2V0ICYmIHRhcmdldCA9PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gdGFyZ2V0IGlzIGluZGV4IG9mIGluc3RhbmNlXG4gICAgaWYgKHR5cGVvZiB0YXJnZXQgPT09ICdudW1iZXInKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICByZWZlcmVuY2VzW3RhcmdldF0gJiYgcHJlcGFyZUluc3RhbmNlKHNpbmdsZXRvbiwgcmVmZXJlbmNlc1t0YXJnZXRdKVxuICAgICAgKTtcbiAgICB9XG5cbiAgICAvLyB0YXJnZXQgaXMgYSBjaGlsZCB0aXBweSBpbnN0YW5jZVxuICAgIGlmIChpbmRpdmlkdWFsSW5zdGFuY2VzLmluZGV4T2YodGFyZ2V0IGFzIEluc3RhbmNlKSA+PSAwKSB7XG4gICAgICBjb25zdCByZWYgPSAodGFyZ2V0IGFzIEluc3RhbmNlKS5yZWZlcmVuY2U7XG4gICAgICByZXR1cm4gcHJlcGFyZUluc3RhbmNlKHNpbmdsZXRvbiwgcmVmKTtcbiAgICB9XG5cbiAgICAvLyB0YXJnZXQgaXMgYSBSZWZlcmVuY2VFbGVtZW50XG4gICAgaWYgKHJlZmVyZW5jZXMuaW5kZXhPZih0YXJnZXQgYXMgUmVmZXJlbmNlRWxlbWVudCkgPj0gMCkge1xuICAgICAgcmV0dXJuIHByZXBhcmVJbnN0YW5jZShzaW5nbGV0b24sIHRhcmdldCBhcyBSZWZlcmVuY2VFbGVtZW50KTtcbiAgICB9XG4gIH07XG5cbiAgc2luZ2xldG9uLnNob3dOZXh0ID0gKCk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IGZpcnN0ID0gcmVmZXJlbmNlc1swXTtcbiAgICBpZiAoIWN1cnJlbnRUYXJnZXQpIHtcbiAgICAgIHJldHVybiBzaW5nbGV0b24uc2hvdygwKTtcbiAgICB9XG4gICAgY29uc3QgaW5kZXggPSByZWZlcmVuY2VzLmluZGV4T2YoY3VycmVudFRhcmdldCk7XG4gICAgc2luZ2xldG9uLnNob3cocmVmZXJlbmNlc1tpbmRleCArIDFdIHx8IGZpcnN0KTtcbiAgfTtcblxuICBzaW5nbGV0b24uc2hvd1ByZXZpb3VzID0gKCk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IGxhc3QgPSByZWZlcmVuY2VzW3JlZmVyZW5jZXMubGVuZ3RoIC0gMV07XG4gICAgaWYgKCFjdXJyZW50VGFyZ2V0KSB7XG4gICAgICByZXR1cm4gc2luZ2xldG9uLnNob3cobGFzdCk7XG4gICAgfVxuICAgIGNvbnN0IGluZGV4ID0gcmVmZXJlbmNlcy5pbmRleE9mKGN1cnJlbnRUYXJnZXQpO1xuICAgIGNvbnN0IHRhcmdldCA9IHJlZmVyZW5jZXNbaW5kZXggLSAxXSB8fCBsYXN0O1xuICAgIHNpbmdsZXRvbi5zaG93KHRhcmdldCk7XG4gIH07XG5cbiAgY29uc3Qgb3JpZ2luYWxTZXRQcm9wcyA9IHNpbmdsZXRvbi5zZXRQcm9wcztcblxuICBzaW5nbGV0b24uc2V0UHJvcHMgPSAocHJvcHMpOiB2b2lkID0+IHtcbiAgICBvdmVycmlkZXMgPSBwcm9wcy5vdmVycmlkZXMgfHwgb3ZlcnJpZGVzO1xuICAgIG9yaWdpbmFsU2V0UHJvcHMocHJvcHMpO1xuICB9O1xuXG4gIHNpbmdsZXRvbi5zZXRJbnN0YW5jZXMgPSAobmV4dEluc3RhbmNlcyk6IHZvaWQgPT4ge1xuICAgIGVuYWJsZUluc3RhbmNlcyh0cnVlKTtcbiAgICBpbnRlcmNlcHRTZXRQcm9wc0NsZWFudXBzLmZvckVhY2goKGZuKSA9PiBmbigpKTtcblxuICAgIGluZGl2aWR1YWxJbnN0YW5jZXMgPSBuZXh0SW5zdGFuY2VzO1xuXG4gICAgZW5hYmxlSW5zdGFuY2VzKGZhbHNlKTtcbiAgICBzZXRSZWZlcmVuY2VzKCk7XG4gICAgc2V0VHJpZ2dlclRhcmdldHMoKTtcbiAgICBpbnRlcmNlcHRTZXRQcm9wc0NsZWFudXBzID0gaW50ZXJjZXB0U2V0UHJvcHMoc2luZ2xldG9uKTtcblxuICAgIHNpbmdsZXRvbi5zZXRQcm9wcyh7dHJpZ2dlclRhcmdldDogdHJpZ2dlclRhcmdldHN9KTtcbiAgfTtcblxuICBpbnRlcmNlcHRTZXRQcm9wc0NsZWFudXBzID0gaW50ZXJjZXB0U2V0UHJvcHMoc2luZ2xldG9uKTtcblxuICByZXR1cm4gc2luZ2xldG9uO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlU2luZ2xldG9uO1xuIiwgImltcG9ydCB0aXBweSBmcm9tICcuLic7XG5pbXBvcnQge1RPVUNIX09QVElPTlN9IGZyb20gJy4uL2NvbnN0YW50cyc7XG5pbXBvcnQge2RlZmF1bHRQcm9wc30gZnJvbSAnLi4vcHJvcHMnO1xuaW1wb3J0IHtJbnN0YW5jZSwgUHJvcHMsIFRhcmdldHN9IGZyb20gJy4uL3R5cGVzJztcbmltcG9ydCB7TGlzdGVuZXJPYmplY3R9IGZyb20gJy4uL3R5cGVzLWludGVybmFsJztcbmltcG9ydCB7bm9ybWFsaXplVG9BcnJheSwgcmVtb3ZlUHJvcGVydGllc30gZnJvbSAnLi4vdXRpbHMnO1xuaW1wb3J0IHtlcnJvcldoZW59IGZyb20gJy4uL3ZhbGlkYXRpb24nO1xuXG5jb25zdCBCVUJCTElOR19FVkVOVFNfTUFQID0ge1xuICBtb3VzZW92ZXI6ICdtb3VzZWVudGVyJyxcbiAgZm9jdXNpbjogJ2ZvY3VzJyxcbiAgY2xpY2s6ICdjbGljaycsXG59O1xuXG4vKipcbiAqIENyZWF0ZXMgYSBkZWxlZ2F0ZSBpbnN0YW5jZSB0aGF0IGNvbnRyb2xzIHRoZSBjcmVhdGlvbiBvZiB0aXBweSBpbnN0YW5jZXNcbiAqIGZvciBjaGlsZCBlbGVtZW50cyAoYHRhcmdldGAgQ1NTIHNlbGVjdG9yKS5cbiAqL1xuZnVuY3Rpb24gZGVsZWdhdGUoXG4gIHRhcmdldHM6IFRhcmdldHMsXG4gIHByb3BzOiBQYXJ0aWFsPFByb3BzPiAmIHt0YXJnZXQ6IHN0cmluZ31cbik6IEluc3RhbmNlIHwgSW5zdGFuY2VbXSB7XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gIGlmIChfX0RFVl9fKSB7XG4gICAgZXJyb3JXaGVuKFxuICAgICAgIShwcm9wcyAmJiBwcm9wcy50YXJnZXQpLFxuICAgICAgW1xuICAgICAgICAnWW91IG11c3Qgc3BlY2l0eSBhIGB0YXJnZXRgIHByb3AgaW5kaWNhdGluZyBhIENTUyBzZWxlY3RvciBzdHJpbmcgbWF0Y2hpbmcnLFxuICAgICAgICAndGhlIHRhcmdldCBlbGVtZW50cyB0aGF0IHNob3VsZCByZWNlaXZlIGEgdGlwcHkuJyxcbiAgICAgIF0uam9pbignICcpXG4gICAgKTtcbiAgfVxuXG4gIGxldCBsaXN0ZW5lcnM6IExpc3RlbmVyT2JqZWN0W10gPSBbXTtcbiAgbGV0IGNoaWxkVGlwcHlJbnN0YW5jZXM6IEluc3RhbmNlW10gPSBbXTtcbiAgbGV0IGRpc2FibGVkID0gZmFsc2U7XG5cbiAgY29uc3Qge3RhcmdldH0gPSBwcm9wcztcblxuICBjb25zdCBuYXRpdmVQcm9wcyA9IHJlbW92ZVByb3BlcnRpZXMocHJvcHMsIFsndGFyZ2V0J10pO1xuICBjb25zdCBwYXJlbnRQcm9wcyA9IHsuLi5uYXRpdmVQcm9wcywgdHJpZ2dlcjogJ21hbnVhbCcsIHRvdWNoOiBmYWxzZX07XG4gIGNvbnN0IGNoaWxkUHJvcHMgPSB7XG4gICAgdG91Y2g6IGRlZmF1bHRQcm9wcy50b3VjaCxcbiAgICAuLi5uYXRpdmVQcm9wcyxcbiAgICBzaG93T25DcmVhdGU6IHRydWUsXG4gIH07XG5cbiAgY29uc3QgcmV0dXJuVmFsdWUgPSB0aXBweSh0YXJnZXRzLCBwYXJlbnRQcm9wcyk7XG4gIGNvbnN0IG5vcm1hbGl6ZWRSZXR1cm5WYWx1ZSA9IG5vcm1hbGl6ZVRvQXJyYXkocmV0dXJuVmFsdWUpO1xuXG4gIGZ1bmN0aW9uIG9uVHJpZ2dlcihldmVudDogRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAoIWV2ZW50LnRhcmdldCB8fCBkaXNhYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHRhcmdldE5vZGUgPSAoZXZlbnQudGFyZ2V0IGFzIEVsZW1lbnQpLmNsb3Nlc3QodGFyZ2V0KTtcblxuICAgIGlmICghdGFyZ2V0Tm9kZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIEdldCByZWxldmFudCB0cmlnZ2VyIHdpdGggZmFsbGJhY2tzOlxuICAgIC8vIDEuIENoZWNrIGBkYXRhLXRpcHB5LXRyaWdnZXJgIGF0dHJpYnV0ZSBvbiB0YXJnZXQgbm9kZVxuICAgIC8vIDIuIEZhbGxiYWNrIHRvIGB0cmlnZ2VyYCBwYXNzZWQgdG8gYGRlbGVnYXRlKClgXG4gICAgLy8gMy4gRmFsbGJhY2sgdG8gYGRlZmF1bHRQcm9wcy50cmlnZ2VyYFxuICAgIGNvbnN0IHRyaWdnZXIgPVxuICAgICAgdGFyZ2V0Tm9kZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGlwcHktdHJpZ2dlcicpIHx8XG4gICAgICBwcm9wcy50cmlnZ2VyIHx8XG4gICAgICBkZWZhdWx0UHJvcHMudHJpZ2dlcjtcblxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBpZiAodGFyZ2V0Tm9kZS5fdGlwcHkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoZXZlbnQudHlwZSA9PT0gJ3RvdWNoc3RhcnQnICYmIHR5cGVvZiBjaGlsZFByb3BzLnRvdWNoID09PSAnYm9vbGVhbicpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICBldmVudC50eXBlICE9PSAndG91Y2hzdGFydCcgJiZcbiAgICAgIHRyaWdnZXIuaW5kZXhPZigoQlVCQkxJTkdfRVZFTlRTX01BUCBhcyBhbnkpW2V2ZW50LnR5cGVdKSA8IDBcbiAgICApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBpbnN0YW5jZSA9IHRpcHB5KHRhcmdldE5vZGUsIGNoaWxkUHJvcHMpO1xuXG4gICAgaWYgKGluc3RhbmNlKSB7XG4gICAgICBjaGlsZFRpcHB5SW5zdGFuY2VzID0gY2hpbGRUaXBweUluc3RhbmNlcy5jb25jYXQoaW5zdGFuY2UpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIG9uKFxuICAgIG5vZGU6IEVsZW1lbnQsXG4gICAgZXZlbnRUeXBlOiBzdHJpbmcsXG4gICAgaGFuZGxlcjogRXZlbnRMaXN0ZW5lcixcbiAgICBvcHRpb25zOiBib29sZWFuIHwgUmVjb3JkPHN0cmluZywgdW5rbm93bj4gPSBmYWxzZVxuICApOiB2b2lkIHtcbiAgICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBoYW5kbGVyLCBvcHRpb25zKTtcbiAgICBsaXN0ZW5lcnMucHVzaCh7bm9kZSwgZXZlbnRUeXBlLCBoYW5kbGVyLCBvcHRpb25zfSk7XG4gIH1cblxuICBmdW5jdGlvbiBhZGRFdmVudExpc3RlbmVycyhpbnN0YW5jZTogSW5zdGFuY2UpOiB2b2lkIHtcbiAgICBjb25zdCB7cmVmZXJlbmNlfSA9IGluc3RhbmNlO1xuXG4gICAgb24ocmVmZXJlbmNlLCAndG91Y2hzdGFydCcsIG9uVHJpZ2dlciwgVE9VQ0hfT1BUSU9OUyk7XG4gICAgb24ocmVmZXJlbmNlLCAnbW91c2VvdmVyJywgb25UcmlnZ2VyKTtcbiAgICBvbihyZWZlcmVuY2UsICdmb2N1c2luJywgb25UcmlnZ2VyKTtcbiAgICBvbihyZWZlcmVuY2UsICdjbGljaycsIG9uVHJpZ2dlcik7XG4gIH1cblxuICBmdW5jdGlvbiByZW1vdmVFdmVudExpc3RlbmVycygpOiB2b2lkIHtcbiAgICBsaXN0ZW5lcnMuZm9yRWFjaCgoe25vZGUsIGV2ZW50VHlwZSwgaGFuZGxlciwgb3B0aW9uc306IExpc3RlbmVyT2JqZWN0KSA9PiB7XG4gICAgICBub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBoYW5kbGVyLCBvcHRpb25zKTtcbiAgICB9KTtcbiAgICBsaXN0ZW5lcnMgPSBbXTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFwcGx5TXV0YXRpb25zKGluc3RhbmNlOiBJbnN0YW5jZSk6IHZvaWQge1xuICAgIGNvbnN0IG9yaWdpbmFsRGVzdHJveSA9IGluc3RhbmNlLmRlc3Ryb3k7XG4gICAgY29uc3Qgb3JpZ2luYWxFbmFibGUgPSBpbnN0YW5jZS5lbmFibGU7XG4gICAgY29uc3Qgb3JpZ2luYWxEaXNhYmxlID0gaW5zdGFuY2UuZGlzYWJsZTtcblxuICAgIGluc3RhbmNlLmRlc3Ryb3kgPSAoc2hvdWxkRGVzdHJveUNoaWxkSW5zdGFuY2VzID0gdHJ1ZSk6IHZvaWQgPT4ge1xuICAgICAgaWYgKHNob3VsZERlc3Ryb3lDaGlsZEluc3RhbmNlcykge1xuICAgICAgICBjaGlsZFRpcHB5SW5zdGFuY2VzLmZvckVhY2goKGluc3RhbmNlKSA9PiB7XG4gICAgICAgICAgaW5zdGFuY2UuZGVzdHJveSgpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgY2hpbGRUaXBweUluc3RhbmNlcyA9IFtdO1xuXG4gICAgICByZW1vdmVFdmVudExpc3RlbmVycygpO1xuICAgICAgb3JpZ2luYWxEZXN0cm95KCk7XG4gICAgfTtcblxuICAgIGluc3RhbmNlLmVuYWJsZSA9ICgpOiB2b2lkID0+IHtcbiAgICAgIG9yaWdpbmFsRW5hYmxlKCk7XG4gICAgICBjaGlsZFRpcHB5SW5zdGFuY2VzLmZvckVhY2goKGluc3RhbmNlKSA9PiBpbnN0YW5jZS5lbmFibGUoKSk7XG4gICAgICBkaXNhYmxlZCA9IGZhbHNlO1xuICAgIH07XG5cbiAgICBpbnN0YW5jZS5kaXNhYmxlID0gKCk6IHZvaWQgPT4ge1xuICAgICAgb3JpZ2luYWxEaXNhYmxlKCk7XG4gICAgICBjaGlsZFRpcHB5SW5zdGFuY2VzLmZvckVhY2goKGluc3RhbmNlKSA9PiBpbnN0YW5jZS5kaXNhYmxlKCkpO1xuICAgICAgZGlzYWJsZWQgPSB0cnVlO1xuICAgIH07XG5cbiAgICBhZGRFdmVudExpc3RlbmVycyhpbnN0YW5jZSk7XG4gIH1cblxuICBub3JtYWxpemVkUmV0dXJuVmFsdWUuZm9yRWFjaChhcHBseU11dGF0aW9ucyk7XG5cbiAgcmV0dXJuIHJldHVyblZhbHVlO1xufVxuXG5leHBvcnQgZGVmYXVsdCBkZWxlZ2F0ZTtcbiIsICJpbXBvcnQge0JBQ0tEUk9QX0NMQVNTfSBmcm9tICcuLi9jb25zdGFudHMnO1xuaW1wb3J0IHtkaXYsIHNldFZpc2liaWxpdHlTdGF0ZX0gZnJvbSAnLi4vZG9tLXV0aWxzJztcbmltcG9ydCB7Z2V0Q2hpbGRyZW59IGZyb20gJy4uL3RlbXBsYXRlJztcbmltcG9ydCB7QW5pbWF0ZUZpbGx9IGZyb20gJy4uL3R5cGVzJztcbmltcG9ydCB7ZXJyb3JXaGVufSBmcm9tICcuLi92YWxpZGF0aW9uJztcblxuY29uc3QgYW5pbWF0ZUZpbGw6IEFuaW1hdGVGaWxsID0ge1xuICBuYW1lOiAnYW5pbWF0ZUZpbGwnLFxuICBkZWZhdWx0VmFsdWU6IGZhbHNlLFxuICBmbihpbnN0YW5jZSkge1xuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBpZiAoIWluc3RhbmNlLnByb3BzLnJlbmRlcj8uJCR0aXBweSkge1xuICAgICAgaWYgKF9fREVWX18pIHtcbiAgICAgICAgZXJyb3JXaGVuKFxuICAgICAgICAgIGluc3RhbmNlLnByb3BzLmFuaW1hdGVGaWxsLFxuICAgICAgICAgICdUaGUgYGFuaW1hdGVGaWxsYCBwbHVnaW4gcmVxdWlyZXMgdGhlIGRlZmF1bHQgcmVuZGVyIGZ1bmN0aW9uLidcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHt9O1xuICAgIH1cblxuICAgIGNvbnN0IHtib3gsIGNvbnRlbnR9ID0gZ2V0Q2hpbGRyZW4oaW5zdGFuY2UucG9wcGVyKTtcblxuICAgIGNvbnN0IGJhY2tkcm9wID0gaW5zdGFuY2UucHJvcHMuYW5pbWF0ZUZpbGxcbiAgICAgID8gY3JlYXRlQmFja2Ryb3BFbGVtZW50KClcbiAgICAgIDogbnVsbDtcblxuICAgIHJldHVybiB7XG4gICAgICBvbkNyZWF0ZSgpOiB2b2lkIHtcbiAgICAgICAgaWYgKGJhY2tkcm9wKSB7XG4gICAgICAgICAgYm94Lmluc2VydEJlZm9yZShiYWNrZHJvcCwgYm94LmZpcnN0RWxlbWVudENoaWxkISk7XG4gICAgICAgICAgYm94LnNldEF0dHJpYnV0ZSgnZGF0YS1hbmltYXRlZmlsbCcsICcnKTtcbiAgICAgICAgICBib3guc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcblxuICAgICAgICAgIGluc3RhbmNlLnNldFByb3BzKHthcnJvdzogZmFsc2UsIGFuaW1hdGlvbjogJ3NoaWZ0LWF3YXknfSk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBvbk1vdW50KCk6IHZvaWQge1xuICAgICAgICBpZiAoYmFja2Ryb3ApIHtcbiAgICAgICAgICBjb25zdCB7dHJhbnNpdGlvbkR1cmF0aW9ufSA9IGJveC5zdHlsZTtcbiAgICAgICAgICBjb25zdCBkdXJhdGlvbiA9IE51bWJlcih0cmFuc2l0aW9uRHVyYXRpb24ucmVwbGFjZSgnbXMnLCAnJykpO1xuXG4gICAgICAgICAgLy8gVGhlIGNvbnRlbnQgc2hvdWxkIGZhZGUgaW4gYWZ0ZXIgdGhlIGJhY2tkcm9wIGhhcyBtb3N0bHkgZmlsbGVkIHRoZVxuICAgICAgICAgIC8vIHRvb2x0aXAgZWxlbWVudC4gYGNsaXAtcGF0aGAgaXMgdGhlIG90aGVyIGFsdGVybmF0aXZlIGJ1dCBpcyBub3RcbiAgICAgICAgICAvLyB3ZWxsLXN1cHBvcnRlZCBhbmQgaXMgYnVnZ3kgb24gc29tZSBkZXZpY2VzLlxuICAgICAgICAgIGNvbnRlbnQuc3R5bGUudHJhbnNpdGlvbkRlbGF5ID0gYCR7TWF0aC5yb3VuZChkdXJhdGlvbiAvIDEwKX1tc2A7XG5cbiAgICAgICAgICBiYWNrZHJvcC5zdHlsZS50cmFuc2l0aW9uRHVyYXRpb24gPSB0cmFuc2l0aW9uRHVyYXRpb247XG4gICAgICAgICAgc2V0VmlzaWJpbGl0eVN0YXRlKFtiYWNrZHJvcF0sICd2aXNpYmxlJyk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBvblNob3coKTogdm9pZCB7XG4gICAgICAgIGlmIChiYWNrZHJvcCkge1xuICAgICAgICAgIGJhY2tkcm9wLnN0eWxlLnRyYW5zaXRpb25EdXJhdGlvbiA9ICcwbXMnO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgb25IaWRlKCk6IHZvaWQge1xuICAgICAgICBpZiAoYmFja2Ryb3ApIHtcbiAgICAgICAgICBzZXRWaXNpYmlsaXR5U3RhdGUoW2JhY2tkcm9wXSwgJ2hpZGRlbicpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgIH07XG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBhbmltYXRlRmlsbDtcblxuZnVuY3Rpb24gY3JlYXRlQmFja2Ryb3BFbGVtZW50KCk6IEhUTUxEaXZFbGVtZW50IHtcbiAgY29uc3QgYmFja2Ryb3AgPSBkaXYoKTtcbiAgYmFja2Ryb3AuY2xhc3NOYW1lID0gQkFDS0RST1BfQ0xBU1M7XG4gIHNldFZpc2liaWxpdHlTdGF0ZShbYmFja2Ryb3BdLCAnaGlkZGVuJyk7XG4gIHJldHVybiBiYWNrZHJvcDtcbn1cbiIsICJpbXBvcnQge2dldE93bmVyRG9jdW1lbnQsIGlzTW91c2VFdmVudH0gZnJvbSAnLi4vZG9tLXV0aWxzJztcbmltcG9ydCB7Rm9sbG93Q3Vyc29yLCBJbnN0YW5jZX0gZnJvbSAnLi4vdHlwZXMnO1xuXG5sZXQgbW91c2VDb29yZHMgPSB7Y2xpZW50WDogMCwgY2xpZW50WTogMH07XG5sZXQgYWN0aXZlSW5zdGFuY2VzOiBBcnJheTx7aW5zdGFuY2U6IEluc3RhbmNlOyBkb2M6IERvY3VtZW50fT4gPSBbXTtcblxuZnVuY3Rpb24gc3RvcmVNb3VzZUNvb3Jkcyh7Y2xpZW50WCwgY2xpZW50WX06IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgbW91c2VDb29yZHMgPSB7Y2xpZW50WCwgY2xpZW50WX07XG59XG5cbmZ1bmN0aW9uIGFkZE1vdXNlQ29vcmRzTGlzdGVuZXIoZG9jOiBEb2N1bWVudCk6IHZvaWQge1xuICBkb2MuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgc3RvcmVNb3VzZUNvb3Jkcyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZU1vdXNlQ29vcmRzTGlzdGVuZXIoZG9jOiBEb2N1bWVudCk6IHZvaWQge1xuICBkb2MucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgc3RvcmVNb3VzZUNvb3Jkcyk7XG59XG5cbmNvbnN0IGZvbGxvd0N1cnNvcjogRm9sbG93Q3Vyc29yID0ge1xuICBuYW1lOiAnZm9sbG93Q3Vyc29yJyxcbiAgZGVmYXVsdFZhbHVlOiBmYWxzZSxcbiAgZm4oaW5zdGFuY2UpIHtcbiAgICBjb25zdCByZWZlcmVuY2UgPSBpbnN0YW5jZS5yZWZlcmVuY2U7XG4gICAgY29uc3QgZG9jID0gZ2V0T3duZXJEb2N1bWVudChpbnN0YW5jZS5wcm9wcy50cmlnZ2VyVGFyZ2V0IHx8IHJlZmVyZW5jZSk7XG5cbiAgICBsZXQgaXNJbnRlcm5hbFVwZGF0ZSA9IGZhbHNlO1xuICAgIGxldCB3YXNGb2N1c0V2ZW50ID0gZmFsc2U7XG4gICAgbGV0IGlzVW5tb3VudGVkID0gdHJ1ZTtcbiAgICBsZXQgcHJldlByb3BzID0gaW5zdGFuY2UucHJvcHM7XG5cbiAgICBmdW5jdGlvbiBnZXRJc0luaXRpYWxCZWhhdmlvcigpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIGluc3RhbmNlLnByb3BzLmZvbGxvd0N1cnNvciA9PT0gJ2luaXRpYWwnICYmIGluc3RhbmNlLnN0YXRlLmlzVmlzaWJsZVxuICAgICAgKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhZGRMaXN0ZW5lcigpOiB2b2lkIHtcbiAgICAgIGRvYy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBvbk1vdXNlTW92ZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVtb3ZlTGlzdGVuZXIoKTogdm9pZCB7XG4gICAgICBkb2MucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgb25Nb3VzZU1vdmUpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVuc2V0R2V0UmVmZXJlbmNlQ2xpZW50UmVjdCgpOiB2b2lkIHtcbiAgICAgIGlzSW50ZXJuYWxVcGRhdGUgPSB0cnVlO1xuICAgICAgaW5zdGFuY2Uuc2V0UHJvcHMoe2dldFJlZmVyZW5jZUNsaWVudFJlY3Q6IG51bGx9KTtcbiAgICAgIGlzSW50ZXJuYWxVcGRhdGUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvbk1vdXNlTW92ZShldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xuICAgICAgLy8gSWYgdGhlIGluc3RhbmNlIGlzIGludGVyYWN0aXZlLCBhdm9pZCB1cGRhdGluZyB0aGUgcG9zaXRpb24gdW5sZXNzIGl0J3NcbiAgICAgIC8vIG92ZXIgdGhlIHJlZmVyZW5jZSBlbGVtZW50XG4gICAgICBjb25zdCBpc0N1cnNvck92ZXJSZWZlcmVuY2UgPSBldmVudC50YXJnZXRcbiAgICAgICAgPyByZWZlcmVuY2UuY29udGFpbnMoZXZlbnQudGFyZ2V0IGFzIE5vZGUpXG4gICAgICAgIDogdHJ1ZTtcbiAgICAgIGNvbnN0IHtmb2xsb3dDdXJzb3J9ID0gaW5zdGFuY2UucHJvcHM7XG4gICAgICBjb25zdCB7Y2xpZW50WCwgY2xpZW50WX0gPSBldmVudDtcblxuICAgICAgY29uc3QgcmVjdCA9IHJlZmVyZW5jZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgIGNvbnN0IHJlbGF0aXZlWCA9IGNsaWVudFggLSByZWN0LmxlZnQ7XG4gICAgICBjb25zdCByZWxhdGl2ZVkgPSBjbGllbnRZIC0gcmVjdC50b3A7XG5cbiAgICAgIGlmIChpc0N1cnNvck92ZXJSZWZlcmVuY2UgfHwgIWluc3RhbmNlLnByb3BzLmludGVyYWN0aXZlKSB7XG4gICAgICAgIGluc3RhbmNlLnNldFByb3BzKHtcbiAgICAgICAgICAvLyBAdHMtaWdub3JlIC0gdW5uZWVkZWQgRE9NUmVjdCBwcm9wZXJ0aWVzXG4gICAgICAgICAgZ2V0UmVmZXJlbmNlQ2xpZW50UmVjdCgpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlY3QgPSByZWZlcmVuY2UuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICAgICAgICAgIGxldCB4ID0gY2xpZW50WDtcbiAgICAgICAgICAgIGxldCB5ID0gY2xpZW50WTtcblxuICAgICAgICAgICAgaWYgKGZvbGxvd0N1cnNvciA9PT0gJ2luaXRpYWwnKSB7XG4gICAgICAgICAgICAgIHggPSByZWN0LmxlZnQgKyByZWxhdGl2ZVg7XG4gICAgICAgICAgICAgIHkgPSByZWN0LnRvcCArIHJlbGF0aXZlWTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgdG9wID0gZm9sbG93Q3Vyc29yID09PSAnaG9yaXpvbnRhbCcgPyByZWN0LnRvcCA6IHk7XG4gICAgICAgICAgICBjb25zdCByaWdodCA9IGZvbGxvd0N1cnNvciA9PT0gJ3ZlcnRpY2FsJyA/IHJlY3QucmlnaHQgOiB4O1xuICAgICAgICAgICAgY29uc3QgYm90dG9tID0gZm9sbG93Q3Vyc29yID09PSAnaG9yaXpvbnRhbCcgPyByZWN0LmJvdHRvbSA6IHk7XG4gICAgICAgICAgICBjb25zdCBsZWZ0ID0gZm9sbG93Q3Vyc29yID09PSAndmVydGljYWwnID8gcmVjdC5sZWZ0IDogeDtcblxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgd2lkdGg6IHJpZ2h0IC0gbGVmdCxcbiAgICAgICAgICAgICAgaGVpZ2h0OiBib3R0b20gLSB0b3AsXG4gICAgICAgICAgICAgIHRvcCxcbiAgICAgICAgICAgICAgcmlnaHQsXG4gICAgICAgICAgICAgIGJvdHRvbSxcbiAgICAgICAgICAgICAgbGVmdCxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlKCk6IHZvaWQge1xuICAgICAgaWYgKGluc3RhbmNlLnByb3BzLmZvbGxvd0N1cnNvcikge1xuICAgICAgICBhY3RpdmVJbnN0YW5jZXMucHVzaCh7aW5zdGFuY2UsIGRvY30pO1xuICAgICAgICBhZGRNb3VzZUNvb3Jkc0xpc3RlbmVyKGRvYyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGVzdHJveSgpOiB2b2lkIHtcbiAgICAgIGFjdGl2ZUluc3RhbmNlcyA9IGFjdGl2ZUluc3RhbmNlcy5maWx0ZXIoXG4gICAgICAgIChkYXRhKSA9PiBkYXRhLmluc3RhbmNlICE9PSBpbnN0YW5jZVxuICAgICAgKTtcblxuICAgICAgaWYgKGFjdGl2ZUluc3RhbmNlcy5maWx0ZXIoKGRhdGEpID0+IGRhdGEuZG9jID09PSBkb2MpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZW1vdmVNb3VzZUNvb3Jkc0xpc3RlbmVyKGRvYyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIG9uQ3JlYXRlOiBjcmVhdGUsXG4gICAgICBvbkRlc3Ryb3k6IGRlc3Ryb3ksXG4gICAgICBvbkJlZm9yZVVwZGF0ZSgpOiB2b2lkIHtcbiAgICAgICAgcHJldlByb3BzID0gaW5zdGFuY2UucHJvcHM7XG4gICAgICB9LFxuICAgICAgb25BZnRlclVwZGF0ZShfLCB7Zm9sbG93Q3Vyc29yfSk6IHZvaWQge1xuICAgICAgICBpZiAoaXNJbnRlcm5hbFVwZGF0ZSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChcbiAgICAgICAgICBmb2xsb3dDdXJzb3IgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgICAgIHByZXZQcm9wcy5mb2xsb3dDdXJzb3IgIT09IGZvbGxvd0N1cnNvclxuICAgICAgICApIHtcbiAgICAgICAgICBkZXN0cm95KCk7XG5cbiAgICAgICAgICBpZiAoZm9sbG93Q3Vyc29yKSB7XG4gICAgICAgICAgICBjcmVhdGUoKTtcblxuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICBpbnN0YW5jZS5zdGF0ZS5pc01vdW50ZWQgJiZcbiAgICAgICAgICAgICAgIXdhc0ZvY3VzRXZlbnQgJiZcbiAgICAgICAgICAgICAgIWdldElzSW5pdGlhbEJlaGF2aW9yKClcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICBhZGRMaXN0ZW5lcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZW1vdmVMaXN0ZW5lcigpO1xuICAgICAgICAgICAgdW5zZXRHZXRSZWZlcmVuY2VDbGllbnRSZWN0KCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgb25Nb3VudCgpOiB2b2lkIHtcbiAgICAgICAgaWYgKGluc3RhbmNlLnByb3BzLmZvbGxvd0N1cnNvciAmJiAhd2FzRm9jdXNFdmVudCkge1xuICAgICAgICAgIGlmIChpc1VubW91bnRlZCkge1xuICAgICAgICAgICAgb25Nb3VzZU1vdmUobW91c2VDb29yZHMgYXMgTW91c2VFdmVudCk7XG4gICAgICAgICAgICBpc1VubW91bnRlZCA9IGZhbHNlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICghZ2V0SXNJbml0aWFsQmVoYXZpb3IoKSkge1xuICAgICAgICAgICAgYWRkTGlzdGVuZXIoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBvblRyaWdnZXIoXywgZXZlbnQpOiB2b2lkIHtcbiAgICAgICAgaWYgKGlzTW91c2VFdmVudChldmVudCkpIHtcbiAgICAgICAgICBtb3VzZUNvb3JkcyA9IHtjbGllbnRYOiBldmVudC5jbGllbnRYLCBjbGllbnRZOiBldmVudC5jbGllbnRZfTtcbiAgICAgICAgfVxuICAgICAgICB3YXNGb2N1c0V2ZW50ID0gZXZlbnQudHlwZSA9PT0gJ2ZvY3VzJztcbiAgICAgIH0sXG4gICAgICBvbkhpZGRlbigpOiB2b2lkIHtcbiAgICAgICAgaWYgKGluc3RhbmNlLnByb3BzLmZvbGxvd0N1cnNvcikge1xuICAgICAgICAgIHVuc2V0R2V0UmVmZXJlbmNlQ2xpZW50UmVjdCgpO1xuICAgICAgICAgIHJlbW92ZUxpc3RlbmVyKCk7XG4gICAgICAgICAgaXNVbm1vdW50ZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgIH07XG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmb2xsb3dDdXJzb3I7XG4iLCAiaW1wb3J0IHtNb2RpZmllciwgUGxhY2VtZW50fSBmcm9tICdAcG9wcGVyanMvY29yZSc7XG5pbXBvcnQge2lzTW91c2VFdmVudH0gZnJvbSAnLi4vZG9tLXV0aWxzJztcbmltcG9ydCB7QmFzZVBsYWNlbWVudCwgSW5saW5lUG9zaXRpb25pbmcsIFByb3BzfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQge2FycmF5RnJvbSwgZ2V0QmFzZVBsYWNlbWVudH0gZnJvbSAnLi4vdXRpbHMnO1xuXG5mdW5jdGlvbiBnZXRQcm9wcyhwcm9wczogUHJvcHMsIG1vZGlmaWVyOiBNb2RpZmllcjxhbnksIGFueT4pOiBQYXJ0aWFsPFByb3BzPiB7XG4gIHJldHVybiB7XG4gICAgcG9wcGVyT3B0aW9uczoge1xuICAgICAgLi4ucHJvcHMucG9wcGVyT3B0aW9ucyxcbiAgICAgIG1vZGlmaWVyczogW1xuICAgICAgICAuLi4ocHJvcHMucG9wcGVyT3B0aW9ucz8ubW9kaWZpZXJzIHx8IFtdKS5maWx0ZXIoXG4gICAgICAgICAgKHtuYW1lfSkgPT4gbmFtZSAhPT0gbW9kaWZpZXIubmFtZVxuICAgICAgICApLFxuICAgICAgICBtb2RpZmllcixcbiAgICAgIF0sXG4gICAgfSxcbiAgfTtcbn1cblxuY29uc3QgaW5saW5lUG9zaXRpb25pbmc6IElubGluZVBvc2l0aW9uaW5nID0ge1xuICBuYW1lOiAnaW5saW5lUG9zaXRpb25pbmcnLFxuICBkZWZhdWx0VmFsdWU6IGZhbHNlLFxuICBmbihpbnN0YW5jZSkge1xuICAgIGNvbnN0IHtyZWZlcmVuY2V9ID0gaW5zdGFuY2U7XG5cbiAgICBmdW5jdGlvbiBpc0VuYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgICByZXR1cm4gISFpbnN0YW5jZS5wcm9wcy5pbmxpbmVQb3NpdGlvbmluZztcbiAgICB9XG5cbiAgICBsZXQgcGxhY2VtZW50OiBQbGFjZW1lbnQ7XG4gICAgbGV0IGN1cnNvclJlY3RJbmRleCA9IC0xO1xuICAgIGxldCBpc0ludGVybmFsVXBkYXRlID0gZmFsc2U7XG4gICAgbGV0IHRyaWVkUGxhY2VtZW50czogQXJyYXk8c3RyaW5nPiA9IFtdO1xuXG4gICAgY29uc3QgbW9kaWZpZXI6IE1vZGlmaWVyPFxuICAgICAgJ3RpcHB5SW5saW5lUG9zaXRpb25pbmcnLFxuICAgICAgUmVjb3JkPHN0cmluZywgdW5rbm93bj5cbiAgICA+ID0ge1xuICAgICAgbmFtZTogJ3RpcHB5SW5saW5lUG9zaXRpb25pbmcnLFxuICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgIHBoYXNlOiAnYWZ0ZXJXcml0ZScsXG4gICAgICBmbih7c3RhdGV9KSB7XG4gICAgICAgIGlmIChpc0VuYWJsZWQoKSkge1xuICAgICAgICAgIGlmICh0cmllZFBsYWNlbWVudHMuaW5kZXhPZihzdGF0ZS5wbGFjZW1lbnQpICE9PSAtMSkge1xuICAgICAgICAgICAgdHJpZWRQbGFjZW1lbnRzID0gW107XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgcGxhY2VtZW50ICE9PSBzdGF0ZS5wbGFjZW1lbnQgJiZcbiAgICAgICAgICAgIHRyaWVkUGxhY2VtZW50cy5pbmRleE9mKHN0YXRlLnBsYWNlbWVudCkgPT09IC0xXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICB0cmllZFBsYWNlbWVudHMucHVzaChzdGF0ZS5wbGFjZW1lbnQpO1xuICAgICAgICAgICAgaW5zdGFuY2Uuc2V0UHJvcHMoe1xuICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlIC0gdW5uZWVkZWQgRE9NUmVjdCBwcm9wZXJ0aWVzXG4gICAgICAgICAgICAgIGdldFJlZmVyZW5jZUNsaWVudFJlY3Q6ICgpID0+XG4gICAgICAgICAgICAgICAgZ2V0UmVmZXJlbmNlQ2xpZW50UmVjdChzdGF0ZS5wbGFjZW1lbnQpLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcGxhY2VtZW50ID0gc3RhdGUucGxhY2VtZW50O1xuICAgICAgICB9XG4gICAgICB9LFxuICAgIH07XG5cbiAgICBmdW5jdGlvbiBnZXRSZWZlcmVuY2VDbGllbnRSZWN0KHBsYWNlbWVudDogUGxhY2VtZW50KTogUGFydGlhbDxET01SZWN0PiB7XG4gICAgICByZXR1cm4gZ2V0SW5saW5lQm91bmRpbmdDbGllbnRSZWN0KFxuICAgICAgICBnZXRCYXNlUGxhY2VtZW50KHBsYWNlbWVudCksXG4gICAgICAgIHJlZmVyZW5jZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcbiAgICAgICAgYXJyYXlGcm9tKHJlZmVyZW5jZS5nZXRDbGllbnRSZWN0cygpKSxcbiAgICAgICAgY3Vyc29yUmVjdEluZGV4XG4gICAgICApO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNldEludGVybmFsUHJvcHMocGFydGlhbFByb3BzOiBQYXJ0aWFsPFByb3BzPik6IHZvaWQge1xuICAgICAgaXNJbnRlcm5hbFVwZGF0ZSA9IHRydWU7XG4gICAgICBpbnN0YW5jZS5zZXRQcm9wcyhwYXJ0aWFsUHJvcHMpO1xuICAgICAgaXNJbnRlcm5hbFVwZGF0ZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFkZE1vZGlmaWVyKCk6IHZvaWQge1xuICAgICAgaWYgKCFpc0ludGVybmFsVXBkYXRlKSB7XG4gICAgICAgIHNldEludGVybmFsUHJvcHMoZ2V0UHJvcHMoaW5zdGFuY2UucHJvcHMsIG1vZGlmaWVyKSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIG9uQ3JlYXRlOiBhZGRNb2RpZmllcixcbiAgICAgIG9uQWZ0ZXJVcGRhdGU6IGFkZE1vZGlmaWVyLFxuICAgICAgb25UcmlnZ2VyKF8sIGV2ZW50KTogdm9pZCB7XG4gICAgICAgIGlmIChpc01vdXNlRXZlbnQoZXZlbnQpKSB7XG4gICAgICAgICAgY29uc3QgcmVjdHMgPSBhcnJheUZyb20oaW5zdGFuY2UucmVmZXJlbmNlLmdldENsaWVudFJlY3RzKCkpO1xuICAgICAgICAgIGNvbnN0IGN1cnNvclJlY3QgPSByZWN0cy5maW5kKFxuICAgICAgICAgICAgKHJlY3QpID0+XG4gICAgICAgICAgICAgIHJlY3QubGVmdCAtIDIgPD0gZXZlbnQuY2xpZW50WCAmJlxuICAgICAgICAgICAgICByZWN0LnJpZ2h0ICsgMiA+PSBldmVudC5jbGllbnRYICYmXG4gICAgICAgICAgICAgIHJlY3QudG9wIC0gMiA8PSBldmVudC5jbGllbnRZICYmXG4gICAgICAgICAgICAgIHJlY3QuYm90dG9tICsgMiA+PSBldmVudC5jbGllbnRZXG4gICAgICAgICAgKTtcbiAgICAgICAgICBjb25zdCBpbmRleCA9IHJlY3RzLmluZGV4T2YoY3Vyc29yUmVjdCk7XG4gICAgICAgICAgY3Vyc29yUmVjdEluZGV4ID0gaW5kZXggPiAtMSA/IGluZGV4IDogY3Vyc29yUmVjdEluZGV4O1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgb25IaWRkZW4oKTogdm9pZCB7XG4gICAgICAgIGN1cnNvclJlY3RJbmRleCA9IC0xO1xuICAgICAgfSxcbiAgICB9O1xuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgaW5saW5lUG9zaXRpb25pbmc7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRJbmxpbmVCb3VuZGluZ0NsaWVudFJlY3QoXG4gIGN1cnJlbnRCYXNlUGxhY2VtZW50OiBCYXNlUGxhY2VtZW50IHwgbnVsbCxcbiAgYm91bmRpbmdSZWN0OiBET01SZWN0LFxuICBjbGllbnRSZWN0czogRE9NUmVjdFtdLFxuICBjdXJzb3JSZWN0SW5kZXg6IG51bWJlclxuKToge1xuICB0b3A6IG51bWJlcjtcbiAgYm90dG9tOiBudW1iZXI7XG4gIGxlZnQ6IG51bWJlcjtcbiAgcmlnaHQ6IG51bWJlcjtcbiAgd2lkdGg6IG51bWJlcjtcbiAgaGVpZ2h0OiBudW1iZXI7XG59IHtcbiAgLy8gTm90IGFuIGlubGluZSBlbGVtZW50LCBvciBwbGFjZW1lbnQgaXMgbm90IHlldCBrbm93blxuICBpZiAoY2xpZW50UmVjdHMubGVuZ3RoIDwgMiB8fCBjdXJyZW50QmFzZVBsYWNlbWVudCA9PT0gbnVsbCkge1xuICAgIHJldHVybiBib3VuZGluZ1JlY3Q7XG4gIH1cblxuICAvLyBUaGVyZSBhcmUgdHdvIHJlY3RzIGFuZCB0aGV5IGFyZSBkaXNqb2luZWRcbiAgaWYgKFxuICAgIGNsaWVudFJlY3RzLmxlbmd0aCA9PT0gMiAmJlxuICAgIGN1cnNvclJlY3RJbmRleCA+PSAwICYmXG4gICAgY2xpZW50UmVjdHNbMF0ubGVmdCA+IGNsaWVudFJlY3RzWzFdLnJpZ2h0XG4gICkge1xuICAgIHJldHVybiBjbGllbnRSZWN0c1tjdXJzb3JSZWN0SW5kZXhdIHx8IGJvdW5kaW5nUmVjdDtcbiAgfVxuXG4gIHN3aXRjaCAoY3VycmVudEJhc2VQbGFjZW1lbnQpIHtcbiAgICBjYXNlICd0b3AnOlxuICAgIGNhc2UgJ2JvdHRvbSc6IHtcbiAgICAgIGNvbnN0IGZpcnN0UmVjdCA9IGNsaWVudFJlY3RzWzBdO1xuICAgICAgY29uc3QgbGFzdFJlY3QgPSBjbGllbnRSZWN0c1tjbGllbnRSZWN0cy5sZW5ndGggLSAxXTtcbiAgICAgIGNvbnN0IGlzVG9wID0gY3VycmVudEJhc2VQbGFjZW1lbnQgPT09ICd0b3AnO1xuXG4gICAgICBjb25zdCB0b3AgPSBmaXJzdFJlY3QudG9wO1xuICAgICAgY29uc3QgYm90dG9tID0gbGFzdFJlY3QuYm90dG9tO1xuICAgICAgY29uc3QgbGVmdCA9IGlzVG9wID8gZmlyc3RSZWN0LmxlZnQgOiBsYXN0UmVjdC5sZWZ0O1xuICAgICAgY29uc3QgcmlnaHQgPSBpc1RvcCA/IGZpcnN0UmVjdC5yaWdodCA6IGxhc3RSZWN0LnJpZ2h0O1xuICAgICAgY29uc3Qgd2lkdGggPSByaWdodCAtIGxlZnQ7XG4gICAgICBjb25zdCBoZWlnaHQgPSBib3R0b20gLSB0b3A7XG5cbiAgICAgIHJldHVybiB7dG9wLCBib3R0b20sIGxlZnQsIHJpZ2h0LCB3aWR0aCwgaGVpZ2h0fTtcbiAgICB9XG4gICAgY2FzZSAnbGVmdCc6XG4gICAgY2FzZSAncmlnaHQnOiB7XG4gICAgICBjb25zdCBtaW5MZWZ0ID0gTWF0aC5taW4oLi4uY2xpZW50UmVjdHMubWFwKChyZWN0cykgPT4gcmVjdHMubGVmdCkpO1xuICAgICAgY29uc3QgbWF4UmlnaHQgPSBNYXRoLm1heCguLi5jbGllbnRSZWN0cy5tYXAoKHJlY3RzKSA9PiByZWN0cy5yaWdodCkpO1xuICAgICAgY29uc3QgbWVhc3VyZVJlY3RzID0gY2xpZW50UmVjdHMuZmlsdGVyKChyZWN0KSA9PlxuICAgICAgICBjdXJyZW50QmFzZVBsYWNlbWVudCA9PT0gJ2xlZnQnXG4gICAgICAgICAgPyByZWN0LmxlZnQgPT09IG1pbkxlZnRcbiAgICAgICAgICA6IHJlY3QucmlnaHQgPT09IG1heFJpZ2h0XG4gICAgICApO1xuXG4gICAgICBjb25zdCB0b3AgPSBtZWFzdXJlUmVjdHNbMF0udG9wO1xuICAgICAgY29uc3QgYm90dG9tID0gbWVhc3VyZVJlY3RzW21lYXN1cmVSZWN0cy5sZW5ndGggLSAxXS5ib3R0b207XG4gICAgICBjb25zdCBsZWZ0ID0gbWluTGVmdDtcbiAgICAgIGNvbnN0IHJpZ2h0ID0gbWF4UmlnaHQ7XG4gICAgICBjb25zdCB3aWR0aCA9IHJpZ2h0IC0gbGVmdDtcbiAgICAgIGNvbnN0IGhlaWdodCA9IGJvdHRvbSAtIHRvcDtcblxuICAgICAgcmV0dXJuIHt0b3AsIGJvdHRvbSwgbGVmdCwgcmlnaHQsIHdpZHRoLCBoZWlnaHR9O1xuICAgIH1cbiAgICBkZWZhdWx0OiB7XG4gICAgICByZXR1cm4gYm91bmRpbmdSZWN0O1xuICAgIH1cbiAgfVxufVxuIiwgImltcG9ydCB7VmlydHVhbEVsZW1lbnR9IGZyb20gJ0Bwb3BwZXJqcy9jb3JlJztcbmltcG9ydCB7UmVmZXJlbmNlRWxlbWVudCwgU3RpY2t5fSBmcm9tICcuLi90eXBlcyc7XG5cbmNvbnN0IHN0aWNreTogU3RpY2t5ID0ge1xuICBuYW1lOiAnc3RpY2t5JyxcbiAgZGVmYXVsdFZhbHVlOiBmYWxzZSxcbiAgZm4oaW5zdGFuY2UpIHtcbiAgICBjb25zdCB7cmVmZXJlbmNlLCBwb3BwZXJ9ID0gaW5zdGFuY2U7XG5cbiAgICBmdW5jdGlvbiBnZXRSZWZlcmVuY2UoKTogUmVmZXJlbmNlRWxlbWVudCB8IFZpcnR1YWxFbGVtZW50IHtcbiAgICAgIHJldHVybiBpbnN0YW5jZS5wb3BwZXJJbnN0YW5jZVxuICAgICAgICA/IGluc3RhbmNlLnBvcHBlckluc3RhbmNlLnN0YXRlLmVsZW1lbnRzLnJlZmVyZW5jZVxuICAgICAgICA6IHJlZmVyZW5jZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzaG91bGRDaGVjayh2YWx1ZTogJ3JlZmVyZW5jZScgfCAncG9wcGVyJyk6IGJvb2xlYW4ge1xuICAgICAgcmV0dXJuIGluc3RhbmNlLnByb3BzLnN0aWNreSA9PT0gdHJ1ZSB8fCBpbnN0YW5jZS5wcm9wcy5zdGlja3kgPT09IHZhbHVlO1xuICAgIH1cblxuICAgIGxldCBwcmV2UmVmUmVjdDogQ2xpZW50UmVjdCB8IG51bGwgPSBudWxsO1xuICAgIGxldCBwcmV2UG9wUmVjdDogQ2xpZW50UmVjdCB8IG51bGwgPSBudWxsO1xuXG4gICAgZnVuY3Rpb24gdXBkYXRlUG9zaXRpb24oKTogdm9pZCB7XG4gICAgICBjb25zdCBjdXJyZW50UmVmUmVjdCA9IHNob3VsZENoZWNrKCdyZWZlcmVuY2UnKVxuICAgICAgICA/IGdldFJlZmVyZW5jZSgpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgICAgIDogbnVsbDtcbiAgICAgIGNvbnN0IGN1cnJlbnRQb3BSZWN0ID0gc2hvdWxkQ2hlY2soJ3BvcHBlcicpXG4gICAgICAgID8gcG9wcGVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgICAgIDogbnVsbDtcblxuICAgICAgaWYgKFxuICAgICAgICAoY3VycmVudFJlZlJlY3QgJiYgYXJlUmVjdHNEaWZmZXJlbnQocHJldlJlZlJlY3QsIGN1cnJlbnRSZWZSZWN0KSkgfHxcbiAgICAgICAgKGN1cnJlbnRQb3BSZWN0ICYmIGFyZVJlY3RzRGlmZmVyZW50KHByZXZQb3BSZWN0LCBjdXJyZW50UG9wUmVjdCkpXG4gICAgICApIHtcbiAgICAgICAgaWYgKGluc3RhbmNlLnBvcHBlckluc3RhbmNlKSB7XG4gICAgICAgICAgaW5zdGFuY2UucG9wcGVySW5zdGFuY2UudXBkYXRlKCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcHJldlJlZlJlY3QgPSBjdXJyZW50UmVmUmVjdDtcbiAgICAgIHByZXZQb3BSZWN0ID0gY3VycmVudFBvcFJlY3Q7XG5cbiAgICAgIGlmIChpbnN0YW5jZS5zdGF0ZS5pc01vdW50ZWQpIHtcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHVwZGF0ZVBvc2l0aW9uKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgb25Nb3VudCgpOiB2b2lkIHtcbiAgICAgICAgaWYgKGluc3RhbmNlLnByb3BzLnN0aWNreSkge1xuICAgICAgICAgIHVwZGF0ZVBvc2l0aW9uKCk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgfTtcbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHN0aWNreTtcblxuZnVuY3Rpb24gYXJlUmVjdHNEaWZmZXJlbnQoXG4gIHJlY3RBOiBDbGllbnRSZWN0IHwgbnVsbCxcbiAgcmVjdEI6IENsaWVudFJlY3QgfCBudWxsXG4pOiBib29sZWFuIHtcbiAgaWYgKHJlY3RBICYmIHJlY3RCKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIHJlY3RBLnRvcCAhPT0gcmVjdEIudG9wIHx8XG4gICAgICByZWN0QS5yaWdodCAhPT0gcmVjdEIucmlnaHQgfHxcbiAgICAgIHJlY3RBLmJvdHRvbSAhPT0gcmVjdEIuYm90dG9tIHx8XG4gICAgICByZWN0QS5sZWZ0ICE9PSByZWN0Qi5sZWZ0XG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuIiwgImltcG9ydCB0aXBweSBmcm9tICcuLi9zcmMnO1xuaW1wb3J0IHtyZW5kZXJ9IGZyb20gJy4uL3NyYy90ZW1wbGF0ZSc7XG5cbnRpcHB5LnNldERlZmF1bHRQcm9wcyh7cmVuZGVyfSk7XG5cbmV4cG9ydCB7ZGVmYXVsdCwgaGlkZUFsbH0gZnJvbSAnLi4vc3JjJztcbmV4cG9ydCB7ZGVmYXVsdCBhcyBjcmVhdGVTaW5nbGV0b259IGZyb20gJy4uL3NyYy9hZGRvbnMvY3JlYXRlU2luZ2xldG9uJztcbmV4cG9ydCB7ZGVmYXVsdCBhcyBkZWxlZ2F0ZX0gZnJvbSAnLi4vc3JjL2FkZG9ucy9kZWxlZ2F0ZSc7XG5leHBvcnQge2RlZmF1bHQgYXMgYW5pbWF0ZUZpbGx9IGZyb20gJy4uL3NyYy9wbHVnaW5zL2FuaW1hdGVGaWxsJztcbmV4cG9ydCB7ZGVmYXVsdCBhcyBmb2xsb3dDdXJzb3J9IGZyb20gJy4uL3NyYy9wbHVnaW5zL2ZvbGxvd0N1cnNvcic7XG5leHBvcnQge2RlZmF1bHQgYXMgaW5saW5lUG9zaXRpb25pbmd9IGZyb20gJy4uL3NyYy9wbHVnaW5zL2lubGluZVBvc2l0aW9uaW5nJztcbmV4cG9ydCB7ZGVmYXVsdCBhcyBzdGlja3l9IGZyb20gJy4uL3NyYy9wbHVnaW5zL3N0aWNreSc7XG5leHBvcnQge1JPVU5EX0FSUk9XIGFzIHJvdW5kQXJyb3d9IGZyb20gJy4uL3NyYy9jb25zdGFudHMnO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBLCtFQUFBQSxVQUFBQyxTQUFBO0FBQUE7QUFDQSxRQUFJLFFBQVEsU0FBVSxJQUFJO0FBQ3hCLGFBQU8sTUFBTSxHQUFHLFNBQVMsUUFBUTtBQUFBLElBQ25DO0FBR0EsSUFBQUEsUUFBTztBQUFBLElBRUwsTUFBTSxPQUFPLGNBQWMsWUFBWSxVQUFVLEtBQ2pELE1BQU0sT0FBTyxVQUFVLFlBQVksTUFBTTtBQUFBLElBRXpDLE1BQU0sT0FBTyxRQUFRLFlBQVksSUFBSSxLQUNyQyxNQUFNLE9BQU8sVUFBVSxZQUFZLE1BQU0sS0FDekMsTUFBTSxPQUFPRCxZQUFRLFlBQVlBLFFBQUk7QUFBQSxJQUVwQywyQkFBWTtBQUFFLGFBQU87QUFBQSxJQUFNLEVBQUcsS0FBSyxTQUFTLGFBQWEsRUFBRTtBQUFBO0FBQUE7OztBQ2Y5RDtBQUFBLDhFQUFBRSxVQUFBQyxTQUFBO0FBQUE7QUFDQSxJQUFBQSxRQUFPLFVBQVUsU0FBVSxNQUFNO0FBQy9CLFVBQUk7QUFDRixlQUFPLENBQUMsQ0FBQyxLQUFLO0FBQUEsTUFDaEIsU0FBUyxPQUFPO0FBQ2QsZUFBTztBQUFBLE1BQ1Q7QUFBQSxJQUNGO0FBQUE7QUFBQTs7O0FDUEE7QUFBQSxvRkFB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QU9ULE1BQU1HLFNBQVNrQixNQUFNZixPQUFPVSxjQUFjSyxLQUF4RDtJQUNEO0VBSUY7QUF6QndFLENBQUE7QU1oQjNFekUsTUFBTW1vQixnQkFBZ0I7RUFBQ047QUFBRCxDQUF0Qjs7IiwKICAibmFtZXMiOiBbImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZm4iLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZ2xvYmFsIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImdsb2JhbCIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJnbG9iYWwiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZm4iLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZ2xvYmFsIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImdsb2JhbFRoaXMiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZ2xvYmFsIiwgIlN5bWJvbCIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJnbG9iYWwiLCAiZG9jdW1lbnQiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImdsb2JhbCIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJnbG9iYWwiLCAiVHlwZUVycm9yIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgIm1heCIsICJtaW4iLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAibWluIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAiZXhwb3J0cyIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJnbG9iYWwiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZm4iLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiU2V0IiwgImZuIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgIlNldCIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJtYXgiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiU2V0IiwgImV4cG9ydHMiLCAibW9kdWxlIiwgIlNldCIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJUaXBweV9leHBvcnRzIiwgIl9fZXhwb3J0IiwgInRpcHB5IiwgInRpcHB5X2VzbV9kZWZhdWx0IiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIl9fdG9Db21tb25KUyIsICJ0b3AiLCAiYm90dG9tIiwgInJpZ2h0IiwgImxlZnQiLCAiYXV0byIsICJiYXNlUGxhY2VtZW50cyIsICJzdGFydCIsICJlbmQiLCAiY2xpcHBpbmdQYXJlbnRzIiwgInZpZXdwb3J0IiwgInBvcHBlciIsICJyZWZlcmVuY2UiLCAidmFyaWF0aW9uUGxhY2VtZW50cyIsICJyZWR1Y2UiLCAiYWNjIiwgInBsYWNlbWVudCIsICJjb25jYXQiLCAicGxhY2VtZW50cyIsICJiZWZvcmVSZWFkIiwgInJlYWQiLCAiYWZ0ZXJSZWFkIiwgImJlZm9yZU1haW4iLCAibWFpbiIsICJhZnRlck1haW4iLCAiYmVmb3JlV3JpdGUiLCAid3JpdGUiLCAiYWZ0ZXJXcml0ZSIsICJtb2RpZmllclBoYXNlcyIsICJnZXROb2RlTmFtZSIsICJlbGVtZW50IiwgIm5vZGVOYW1lIiwgInRvTG93ZXJDYXNlIiwgImdldFdpbmRvdyIsICJub2RlIiwgIndpbmRvdyIsICJ0b1N0cmluZyIsICJvd25lckRvY3VtZW50IiwgImRlZmF1bHRWaWV3IiwgImlzRWxlbWVudCIsICJPd25FbGVtZW50IiwgIkVsZW1lbnQiLCAiaXNIVE1MRWxlbWVudCIsICJIVE1MRWxlbWVudCIsICJpc1NoYWRvd1Jvb3QiLCAiU2hhZG93Um9vdCIsICJhcHBseVN0eWxlcyIsICJfcmVmIiwgInN0YXRlIiwgIk9iamVjdCIsICJrZXlzIiwgImVsZW1lbnRzIiwgImZvckVhY2giLCAibmFtZSIsICJzdHlsZSIsICJzdHlsZXMiLCAiYXR0cmlidXRlcyIsICJhc3NpZ24iLCAibmFtZTIiLCAidmFsdWUiLCAicmVtb3ZlQXR0cmlidXRlIiwgInNldEF0dHJpYnV0ZSIsICJlZmZlY3QiLCAiX3JlZjIiLCAiaW5pdGlhbFN0eWxlcyIsICJwb3NpdGlvbiIsICJvcHRpb25zIiwgInN0cmF0ZWd5IiwgIm1hcmdpbiIsICJhcnJvdyIsICJzdHlsZVByb3BlcnRpZXMiLCAiaGFzT3duUHJvcGVydHkiLCAic3R5bGUyIiwgInByb3BlcnR5IiwgImF0dHJpYnV0ZSIsICJhcHBseVN0eWxlc19kZWZhdWx0IiwgImVuYWJsZWQiLCAicGhhc2UiLCAiZm4iLCAicmVxdWlyZXMiLCAiZ2V0QmFzZVBsYWNlbWVudCIsICJzcGxpdCIsICJtYXgiLCAiTWF0aCIsICJtaW4iLCAicm91bmQiLCAiZ2V0VUFTdHJpbmciLCAidWFEYXRhIiwgIm5hdmlnYXRvciIsICJ1c2VyQWdlbnREYXRhIiwgImJyYW5kcyIsICJBcnJheSIsICJpc0FycmF5IiwgIm1hcCIsICJpdGVtIiwgImJyYW5kIiwgInZlcnNpb24iLCAiam9pbiIsICJ1c2VyQWdlbnQiLCAiaXNMYXlvdXRWaWV3cG9ydCIsICJ0ZXN0IiwgImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsICJpbmNsdWRlU2NhbGUiLCAiaXNGaXhlZFN0cmF0ZWd5IiwgImNsaWVudFJlY3QiLCAic2NhbGVYIiwgInNjYWxlWSIsICJvZmZzZXRXaWR0aCIsICJ3aWR0aCIsICJvZmZzZXRIZWlnaHQiLCAiaGVpZ2h0IiwgInZpc3VhbFZpZXdwb3J0IiwgImFkZFZpc3VhbE9mZnNldHMiLCAieCIsICJvZmZzZXRMZWZ0IiwgInkiLCAib2Zmc2V0VG9wIiwgImdldExheW91dFJlY3QiLCAiYWJzIiwgImNvbnRhaW5zIiwgInBhcmVudCIsICJjaGlsZCIsICJyb290Tm9kZSIsICJnZXRSb290Tm9kZSIsICJuZXh0IiwgImlzU2FtZU5vZGUiLCAicGFyZW50Tm9kZSIsICJob3N0IiwgImdldENvbXB1dGVkU3R5bGUiLCAiaXNUYWJsZUVsZW1lbnQiLCAiaW5kZXhPZiIsICJnZXREb2N1bWVudEVsZW1lbnQiLCAiZG9jdW1lbnQiLCAiZG9jdW1lbnRFbGVtZW50IiwgImdldFBhcmVudE5vZGUiLCAiYXNzaWduZWRTbG90IiwgImdldFRydWVPZmZzZXRQYXJlbnQiLCAib2Zmc2V0UGFyZW50IiwgImdldENvbnRhaW5pbmdCbG9jayIsICJpc0ZpcmVmb3giLCAiaXNJRSIsICJlbGVtZW50Q3NzIiwgImN1cnJlbnROb2RlIiwgImNzcyIsICJ0cmFuc2Zvcm0iLCAicGVyc3BlY3RpdmUiLCAiY29udGFpbiIsICJ3aWxsQ2hhbmdlIiwgImZpbHRlciIsICJnZXRPZmZzZXRQYXJlbnQiLCAid2luZG93MiIsICJnZXRNYWluQXhpc0Zyb21QbGFjZW1lbnQiLCAid2l0aGluIiwgIm1pbjIiLCAibWF4MiIsICJ3aXRoaW5NYXhDbGFtcCIsICJ2IiwgImdldEZyZXNoU2lkZU9iamVjdCIsICJtZXJnZVBhZGRpbmdPYmplY3QiLCAicGFkZGluZ09iamVjdCIsICJleHBhbmRUb0hhc2hNYXAiLCAiaGFzaE1hcCIsICJrZXkiLCAidG9QYWRkaW5nT2JqZWN0IiwgInRvUGFkZGluZ09iamVjdDIiLCAicGFkZGluZyIsICJyZWN0cyIsICJfc3RhdGUkbW9kaWZpZXJzRGF0YSQiLCAiYXJyb3dFbGVtZW50IiwgInBvcHBlck9mZnNldHMyIiwgIm1vZGlmaWVyc0RhdGEiLCAicG9wcGVyT2Zmc2V0cyIsICJiYXNlUGxhY2VtZW50IiwgImF4aXMiLCAiaXNWZXJ0aWNhbCIsICJsZW4iLCAiYXJyb3dSZWN0IiwgIm1pblByb3AiLCAibWF4UHJvcCIsICJlbmREaWZmIiwgInN0YXJ0RGlmZiIsICJhcnJvd09mZnNldFBhcmVudCIsICJjbGllbnRTaXplIiwgImNsaWVudEhlaWdodCIsICJjbGllbnRXaWR0aCIsICJjZW50ZXJUb1JlZmVyZW5jZSIsICJjZW50ZXIiLCAib2Zmc2V0MiIsICJheGlzUHJvcCIsICJjZW50ZXJPZmZzZXQiLCAiZWZmZWN0MiIsICJfb3B0aW9ucyRlbGVtZW50IiwgInF1ZXJ5U2VsZWN0b3IiLCAiYXJyb3dfZGVmYXVsdCIsICJyZXF1aXJlc0lmRXhpc3RzIiwgImdldFZhcmlhdGlvbiIsICJ1bnNldFNpZGVzIiwgInJvdW5kT2Zmc2V0c0J5RFBSIiwgIndpbiIsICJkcHIiLCAiZGV2aWNlUGl4ZWxSYXRpbyIsICJtYXBUb1N0eWxlcyIsICJfT2JqZWN0JGFzc2lnbjIiLCAicG9wcGVyMiIsICJwb3BwZXJSZWN0IiwgInZhcmlhdGlvbiIsICJvZmZzZXRzIiwgImdwdUFjY2VsZXJhdGlvbiIsICJhZGFwdGl2ZSIsICJyb3VuZE9mZnNldHMiLCAiaXNGaXhlZCIsICJfb2Zmc2V0cyR4IiwgIl9vZmZzZXRzJHkiLCAiX3JlZjMiLCAiaGFzWCIsICJoYXNZIiwgInNpZGVYIiwgInNpZGVZIiwgImhlaWdodFByb3AiLCAid2lkdGhQcm9wIiwgIm9mZnNldFkiLCAib2Zmc2V0WCIsICJjb21tb25TdHlsZXMiLCAiX3JlZjQiLCAiX09iamVjdCRhc3NpZ24iLCAiY29tcHV0ZVN0eWxlcyIsICJfcmVmNSIsICJfb3B0aW9ucyRncHVBY2NlbGVyYXQiLCAiX29wdGlvbnMkYWRhcHRpdmUiLCAiX29wdGlvbnMkcm91bmRPZmZzZXRzIiwgImNvbXB1dGVTdHlsZXNfZGVmYXVsdCIsICJkYXRhIiwgInBhc3NpdmUiLCAiZWZmZWN0MyIsICJpbnN0YW5jZSIsICJfb3B0aW9ucyRzY3JvbGwiLCAic2Nyb2xsIiwgIl9vcHRpb25zJHJlc2l6ZSIsICJyZXNpemUiLCAic2Nyb2xsUGFyZW50cyIsICJzY3JvbGxQYXJlbnQiLCAiYWRkRXZlbnRMaXN0ZW5lciIsICJ1cGRhdGUiLCAicmVtb3ZlRXZlbnRMaXN0ZW5lciIsICJldmVudExpc3RlbmVyc19kZWZhdWx0IiwgImhhc2giLCAiZ2V0T3Bwb3NpdGVQbGFjZW1lbnQiLCAicmVwbGFjZSIsICJtYXRjaGVkIiwgImhhc2gyIiwgImdldE9wcG9zaXRlVmFyaWF0aW9uUGxhY2VtZW50IiwgImdldFdpbmRvd1Njcm9sbCIsICJzY3JvbGxMZWZ0IiwgInBhZ2VYT2Zmc2V0IiwgInNjcm9sbFRvcCIsICJwYWdlWU9mZnNldCIsICJnZXRXaW5kb3dTY3JvbGxCYXJYIiwgImdldFZpZXdwb3J0UmVjdCIsICJodG1sIiwgImxheW91dFZpZXdwb3J0IiwgImdldERvY3VtZW50UmVjdCIsICJfZWxlbWVudCRvd25lckRvY3VtZW4iLCAid2luU2Nyb2xsIiwgImJvZHkiLCAic2Nyb2xsV2lkdGgiLCAic2Nyb2xsSGVpZ2h0IiwgImRpcmVjdGlvbiIsICJpc1Njcm9sbFBhcmVudCIsICJfZ2V0Q29tcHV0ZWRTdHlsZSIsICJvdmVyZmxvdyIsICJvdmVyZmxvd1giLCAib3ZlcmZsb3dZIiwgImdldFNjcm9sbFBhcmVudCIsICJsaXN0U2Nyb2xsUGFyZW50cyIsICJsaXN0IiwgImlzQm9keSIsICJ0YXJnZXQiLCAidXBkYXRlZExpc3QiLCAicmVjdFRvQ2xpZW50UmVjdCIsICJyZWN0IiwgImdldElubmVyQm91bmRpbmdDbGllbnRSZWN0IiwgImNsaWVudFRvcCIsICJjbGllbnRMZWZ0IiwgImdldENsaWVudFJlY3RGcm9tTWl4ZWRUeXBlIiwgImNsaXBwaW5nUGFyZW50IiwgImdldENsaXBwaW5nUGFyZW50cyIsICJjbGlwcGluZ1BhcmVudHMyIiwgImNhbkVzY2FwZUNsaXBwaW5nIiwgImNsaXBwZXJFbGVtZW50IiwgImdldENsaXBwaW5nUmVjdCIsICJib3VuZGFyeSIsICJyb290Qm91bmRhcnkiLCAibWFpbkNsaXBwaW5nUGFyZW50cyIsICJmaXJzdENsaXBwaW5nUGFyZW50IiwgImNsaXBwaW5nUmVjdCIsICJhY2NSZWN0IiwgImNvbXB1dGVPZmZzZXRzIiwgInJlZmVyZW5jZTIiLCAiY29tbW9uWCIsICJjb21tb25ZIiwgIm1haW5BeGlzIiwgImRldGVjdE92ZXJmbG93IiwgIl9vcHRpb25zIiwgIl9vcHRpb25zJHBsYWNlbWVudCIsICJfb3B0aW9ucyRzdHJhdGVneSIsICJfb3B0aW9ucyRib3VuZGFyeSIsICJfb3B0aW9ucyRyb290Qm91bmRhcnkiLCAiX29wdGlvbnMkZWxlbWVudENvbnRlIiwgImVsZW1lbnRDb250ZXh0IiwgIl9vcHRpb25zJGFsdEJvdW5kYXJ5IiwgImFsdEJvdW5kYXJ5IiwgIl9vcHRpb25zJHBhZGRpbmciLCAiYWx0Q29udGV4dCIsICJjbGlwcGluZ0NsaWVudFJlY3QiLCAiY29udGV4dEVsZW1lbnQiLCAicmVmZXJlbmNlQ2xpZW50UmVjdCIsICJwb3BwZXJDbGllbnRSZWN0IiwgImVsZW1lbnRDbGllbnRSZWN0IiwgIm92ZXJmbG93T2Zmc2V0cyIsICJvZmZzZXREYXRhIiwgIm9mZnNldCIsICJtdWx0aXBseSIsICJjb21wdXRlQXV0b1BsYWNlbWVudCIsICJmbGlwVmFyaWF0aW9ucyIsICJfb3B0aW9ucyRhbGxvd2VkQXV0b1AiLCAiYWxsb3dlZEF1dG9QbGFjZW1lbnRzIiwgInBsYWNlbWVudHMyIiwgInBsYWNlbWVudDIiLCAiYWxsb3dlZFBsYWNlbWVudHMiLCAibGVuZ3RoIiwgIm92ZXJmbG93cyIsICJzb3J0IiwgImEiLCAiYiIsICJnZXRFeHBhbmRlZEZhbGxiYWNrUGxhY2VtZW50cyIsICJvcHBvc2l0ZVBsYWNlbWVudCIsICJmbGlwIiwgIl9za2lwIiwgIl9vcHRpb25zJG1haW5BeGlzIiwgImNoZWNrTWFpbkF4aXMiLCAiX29wdGlvbnMkYWx0QXhpcyIsICJhbHRBeGlzIiwgImNoZWNrQWx0QXhpcyIsICJzcGVjaWZpZWRGYWxsYmFja1BsYWNlbWVudHMiLCAiZmFsbGJhY2tQbGFjZW1lbnRzIiwgIl9vcHRpb25zJGZsaXBWYXJpYXRpbyIsICJwcmVmZXJyZWRQbGFjZW1lbnQiLCAiaXNCYXNlUGxhY2VtZW50IiwgInJlZmVyZW5jZVJlY3QiLCAiY2hlY2tzTWFwIiwgIk1hcCIsICJtYWtlRmFsbGJhY2tDaGVja3MiLCAiZmlyc3RGaXR0aW5nUGxhY2VtZW50IiwgImkiLCAiX2Jhc2VQbGFjZW1lbnQiLCAiaXNTdGFydFZhcmlhdGlvbiIsICJtYWluVmFyaWF0aW9uU2lkZSIsICJhbHRWYXJpYXRpb25TaWRlIiwgImNoZWNrcyIsICJwdXNoIiwgImV2ZXJ5IiwgImNoZWNrIiwgInNldCIsICJudW1iZXJPZkNoZWNrcyIsICJfbG9vcCIsICJfbG9vcDIiLCAiX2kyIiwgImZpdHRpbmdQbGFjZW1lbnQiLCAiZmluZCIsICJjaGVja3MyIiwgImdldCIsICJzbGljZSIsICJfaSIsICJfcmV0IiwgInJlc2V0IiwgImZsaXBfZGVmYXVsdCIsICJnZXRTaWRlT2Zmc2V0cyIsICJwcmV2ZW50ZWRPZmZzZXRzIiwgImlzQW55U2lkZUZ1bGx5Q2xpcHBlZCIsICJzb21lIiwgInNpZGUiLCAiaGlkZSIsICJwcmV2ZW50T3ZlcmZsb3ciLCAicmVmZXJlbmNlT3ZlcmZsb3ciLCAicG9wcGVyQWx0T3ZlcmZsb3ciLCAicmVmZXJlbmNlQ2xpcHBpbmdPZmZzZXRzIiwgInBvcHBlckVzY2FwZU9mZnNldHMiLCAiaXNSZWZlcmVuY2VIaWRkZW4iLCAiaGFzUG9wcGVyRXNjYXBlZCIsICJoaWRlX2RlZmF1bHQiLCAiZGlzdGFuY2VBbmRTa2lkZGluZ1RvWFkiLCAiaW52ZXJ0RGlzdGFuY2UiLCAic2tpZGRpbmciLCAiZGlzdGFuY2UiLCAiX29wdGlvbnMkb2Zmc2V0IiwgIl9kYXRhJHN0YXRlJHBsYWNlbWVudCIsICJvZmZzZXRfZGVmYXVsdCIsICJwb3BwZXJPZmZzZXRzX2RlZmF1bHQiLCAiZ2V0QWx0QXhpcyIsICJfb3B0aW9ucyR0ZXRoZXIiLCAidGV0aGVyIiwgIl9vcHRpb25zJHRldGhlck9mZnNldCIsICJ0ZXRoZXJPZmZzZXQiLCAidGV0aGVyT2Zmc2V0VmFsdWUiLCAibm9ybWFsaXplZFRldGhlck9mZnNldFZhbHVlIiwgIm9mZnNldE1vZGlmaWVyU3RhdGUiLCAiX29mZnNldE1vZGlmaWVyU3RhdGUkIiwgIm1haW5TaWRlIiwgImFsdFNpZGUiLCAiYWRkaXRpdmUiLCAibWluTGVuIiwgIm1heExlbiIsICJhcnJvd1BhZGRpbmdPYmplY3QiLCAiYXJyb3dQYWRkaW5nTWluIiwgImFycm93UGFkZGluZ01heCIsICJhcnJvd0xlbiIsICJtaW5PZmZzZXQiLCAibWF4T2Zmc2V0IiwgImNsaWVudE9mZnNldCIsICJvZmZzZXRNb2RpZmllclZhbHVlIiwgInRldGhlck1pbiIsICJ0ZXRoZXJNYXgiLCAicHJldmVudGVkT2Zmc2V0IiwgIl9vZmZzZXRNb2RpZmllclN0YXRlJDIiLCAiX21haW5TaWRlIiwgIl9hbHRTaWRlIiwgIl9vZmZzZXQiLCAiX2xlbiIsICJfbWluIiwgIl9tYXgiLCAiaXNPcmlnaW5TaWRlIiwgIl9vZmZzZXRNb2RpZmllclZhbHVlIiwgIl90ZXRoZXJNaW4iLCAiX3RldGhlck1heCIsICJfcHJldmVudGVkT2Zmc2V0IiwgInByZXZlbnRPdmVyZmxvd19kZWZhdWx0IiwgImdldEhUTUxFbGVtZW50U2Nyb2xsIiwgImdldE5vZGVTY3JvbGwiLCAiaXNFbGVtZW50U2NhbGVkIiwgImdldENvbXBvc2l0ZVJlY3QiLCAiZWxlbWVudE9yVmlydHVhbEVsZW1lbnQiLCAiaXNPZmZzZXRQYXJlbnRBbkVsZW1lbnQiLCAib2Zmc2V0UGFyZW50SXNTY2FsZWQiLCAib3JkZXIiLCAibW9kaWZpZXJzIiwgInZpc2l0ZWQiLCAiU2V0IiwgInJlc3VsdCIsICJtb2RpZmllciIsICJhZGQiLCAiZGVwIiwgImhhcyIsICJkZXBNb2RpZmllciIsICJvcmRlck1vZGlmaWVycyIsICJvcmRlcmVkTW9kaWZpZXJzIiwgImRlYm91bmNlIiwgImZuMiIsICJwZW5kaW5nIiwgIlByb21pc2UiLCAicmVzb2x2ZSIsICJ0aGVuIiwgIm1lcmdlQnlOYW1lIiwgIm1lcmdlZCIsICJtZXJnZWQyIiwgImN1cnJlbnQiLCAiZXhpc3RpbmciLCAiREVGQVVMVF9PUFRJT05TIiwgImFyZVZhbGlkRWxlbWVudHMiLCAiYXJndW1lbnRzIiwgImFyZ3MiLCAiX2tleSIsICJwb3BwZXJHZW5lcmF0b3IiLCAiZ2VuZXJhdG9yT3B0aW9ucyIsICJfZ2VuZXJhdG9yT3B0aW9ucyIsICJfZ2VuZXJhdG9yT3B0aW9ucyRkZWYiLCAiZGVmYXVsdE1vZGlmaWVycyIsICJkZWZhdWx0TW9kaWZpZXJzMiIsICJfZ2VuZXJhdG9yT3B0aW9ucyRkZWYyIiwgImRlZmF1bHRPcHRpb25zIiwgImNyZWF0ZVBvcHBlcjIiLCAiZWZmZWN0Q2xlYW51cEZucyIsICJpc0Rlc3Ryb3llZCIsICJzZXRPcHRpb25zIiwgInNldE9wdGlvbnNBY3Rpb24iLCAib3B0aW9uczIiLCAiY2xlYW51cE1vZGlmaWVyRWZmZWN0cyIsICJtIiwgInJ1bk1vZGlmaWVyRWZmZWN0cyIsICJmb3JjZVVwZGF0ZSIsICJfc3RhdGUkZWxlbWVudHMiLCAicmVmZXJlbmNlMyIsICJwb3BwZXIzIiwgImluZGV4IiwgIl9zdGF0ZSRvcmRlcmVkTW9kaWZpZSIsICJfc3RhdGUkb3JkZXJlZE1vZGlmaWUyIiwgImRlc3Ryb3kiLCAic3RhdGUyIiwgIm9uRmlyc3RVcGRhdGUiLCAiX3JlZiRvcHRpb25zIiwgImVmZmVjdDUiLCAiY2xlYW51cEZuIiwgIm5vb3BGbiIsICJub29wRm4yIiwgImNyZWF0ZVBvcHBlciIsICJCT1hfQ0xBU1MiLCAiQ09OVEVOVF9DTEFTUyIsICJCQUNLRFJPUF9DTEFTUyIsICJBUlJPV19DTEFTUyIsICJTVkdfQVJST1dfQ0xBU1MiLCAiVE9VQ0hfT1BUSU9OUyIsICJjYXB0dXJlIiwgIlRJUFBZX0RFRkFVTFRfQVBQRU5EX1RPIiwgIlRJUFBZX0RFRkFVTFRfQVBQRU5EX1RPMiIsICJnZXRWYWx1ZUF0SW5kZXhPclJldHVybiIsICJkZWZhdWx0VmFsdWUiLCAiaXNUeXBlIiwgInR5cGUiLCAic3RyIiwgImNhbGwiLCAiaW52b2tlV2l0aEFyZ3NPclJldHVybiIsICJhcHBseSIsICJkZWJvdW5jZTIiLCAibXMiLCAidGltZW91dCIsICJhcmciLCAiY2xlYXJUaW1lb3V0IiwgInNldFRpbWVvdXQiLCAic3BsaXRCeVNwYWNlcyIsICJCb29sZWFuIiwgIm5vcm1hbGl6ZVRvQXJyYXkiLCAicHVzaElmVW5pcXVlIiwgImFyciIsICJ1bmlxdWUiLCAiZ2V0QmFzZVBsYWNlbWVudDIiLCAiYXJyYXlGcm9tIiwgInJlbW92ZVVuZGVmaW5lZFByb3BzIiwgIm9iaiIsICJkaXYiLCAiY3JlYXRlRWxlbWVudCIsICJpc0VsZW1lbnQyIiwgImlzTm9kZUxpc3QiLCAiaXNNb3VzZUV2ZW50IiwgImlzUmVmZXJlbmNlRWxlbWVudCIsICJfdGlwcHkiLCAiZ2V0QXJyYXlPZkVsZW1lbnRzIiwgInF1ZXJ5U2VsZWN0b3JBbGwiLCAic2V0VHJhbnNpdGlvbkR1cmF0aW9uIiwgImVscyIsICJlbCIsICJ0cmFuc2l0aW9uRHVyYXRpb24iLCAic2V0VmlzaWJpbGl0eVN0YXRlIiwgImdldE93bmVyRG9jdW1lbnQiLCAiZWxlbWVudE9yRWxlbWVudHMiLCAiX25vcm1hbGl6ZVRvQXJyYXkiLCAiaXNDdXJzb3JPdXRzaWRlSW50ZXJhY3RpdmVCb3JkZXIiLCAicG9wcGVyVHJlZURhdGEiLCAiZXZlbnQiLCAiY2xpZW50WCIsICJjbGllbnRZIiwgInBvcHBlclN0YXRlIiwgInByb3BzIiwgImludGVyYWN0aXZlQm9yZGVyIiwgInRvcERpc3RhbmNlIiwgImJvdHRvbURpc3RhbmNlIiwgImxlZnREaXN0YW5jZSIsICJyaWdodERpc3RhbmNlIiwgImV4Y2VlZHNUb3AiLCAiZXhjZWVkc0JvdHRvbSIsICJleGNlZWRzTGVmdCIsICJleGNlZWRzUmlnaHQiLCAidXBkYXRlVHJhbnNpdGlvbkVuZExpc3RlbmVyIiwgImJveCIsICJhY3Rpb24iLCAibGlzdGVuZXIiLCAibWV0aG9kIiwgImFjdHVhbENvbnRhaW5zIiwgIl90YXJnZXQkZ2V0Um9vdE5vZGUiLCAiY3VycmVudElucHV0IiwgImlzVG91Y2giLCAibGFzdE1vdXNlTW92ZVRpbWUiLCAib25Eb2N1bWVudFRvdWNoU3RhcnQiLCAicGVyZm9ybWFuY2UiLCAib25Eb2N1bWVudE1vdXNlTW92ZSIsICJub3ciLCAib25XaW5kb3dCbHVyIiwgImFjdGl2ZUVsZW1lbnQiLCAiYmx1ciIsICJpc1Zpc2libGUiLCAiYmluZEdsb2JhbEV2ZW50TGlzdGVuZXJzIiwgImlzQnJvd3NlciIsICJpc0lFMTEiLCAibXNDcnlwdG8iLCAicmVzZXRWaXNpdGVkTWVzc2FnZXMiLCAicGx1Z2luUHJvcHMiLCAiYW5pbWF0ZUZpbGwiLCAiZm9sbG93Q3Vyc29yIiwgImlubGluZVBvc2l0aW9uaW5nIiwgInN0aWNreSIsICJyZW5kZXJQcm9wcyIsICJhbGxvd0hUTUwiLCAiYW5pbWF0aW9uIiwgImNvbnRlbnQiLCAiaW5lcnRpYSIsICJtYXhXaWR0aCIsICJyb2xlIiwgInRoZW1lIiwgInpJbmRleCIsICJkZWZhdWx0UHJvcHMiLCAiYXBwZW5kVG8iLCAiYXJpYSIsICJleHBhbmRlZCIsICJkZWxheSIsICJkdXJhdGlvbiIsICJnZXRSZWZlcmVuY2VDbGllbnRSZWN0IiwgImhpZGVPbkNsaWNrIiwgImlnbm9yZUF0dHJpYnV0ZXMiLCAiaW50ZXJhY3RpdmUiLCAiaW50ZXJhY3RpdmVEZWJvdW5jZSIsICJtb3ZlVHJhbnNpdGlvbiIsICJvbkFmdGVyVXBkYXRlIiwgIm9uQmVmb3JlVXBkYXRlIiwgIm9uQ3JlYXRlIiwgIm9uRGVzdHJveSIsICJvbkhpZGRlbiIsICJvbkhpZGUiLCAib25Nb3VudCIsICJvblNob3ciLCAib25TaG93biIsICJvblRyaWdnZXIiLCAib25VbnRyaWdnZXIiLCAib25DbGlja091dHNpZGUiLCAicGx1Z2lucyIsICJwb3BwZXJPcHRpb25zIiwgInJlbmRlciIsICJzaG93T25DcmVhdGUiLCAidG91Y2giLCAidHJpZ2dlciIsICJ0cmlnZ2VyVGFyZ2V0IiwgImRlZmF1bHRLZXlzIiwgInNldERlZmF1bHRQcm9wcyIsICJzZXREZWZhdWx0UHJvcHMyIiwgInBhcnRpYWxQcm9wcyIsICJ2YWxpZGF0ZVByb3BzIiwgImdldEV4dGVuZGVkUGFzc2VkUHJvcHMiLCAicGFzc2VkUHJvcHMiLCAicGx1Z2luUHJvcHMyIiwgInBsdWdpbiIsICJfbmFtZSIsICJnZXREYXRhQXR0cmlidXRlUHJvcHMiLCAicHJvcEtleXMiLCAidmFsdWVBc1N0cmluZyIsICJnZXRBdHRyaWJ1dGUiLCAidHJpbSIsICJKU09OIiwgInBhcnNlIiwgImUiLCAiZXZhbHVhdGVQcm9wcyIsICJvdXQiLCAiaW5uZXJIVE1MIiwgImlubmVySFRNTDIiLCAiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCAiY3JlYXRlQXJyb3dFbGVtZW50IiwgImFycm93MiIsICJjbGFzc05hbWUiLCAiYXBwZW5kQ2hpbGQiLCAic2V0Q29udGVudCIsICJ0ZXh0Q29udGVudCIsICJnZXRDaGlsZHJlbiIsICJmaXJzdEVsZW1lbnRDaGlsZCIsICJib3hDaGlsZHJlbiIsICJjaGlsZHJlbiIsICJjbGFzc0xpc3QiLCAiYmFja2Ryb3AiLCAib25VcGRhdGUiLCAicHJldlByb3BzIiwgIm5leHRQcm9wcyIsICJfZ2V0Q2hpbGRyZW4iLCAiYm94MiIsICJjb250ZW50MiIsICJyZW1vdmVDaGlsZCIsICIkJHRpcHB5IiwgImlkQ291bnRlciIsICJtb3VzZU1vdmVMaXN0ZW5lcnMiLCAibW91bnRlZEluc3RhbmNlcyIsICJjcmVhdGVUaXBweSIsICJzaG93VGltZW91dCIsICJoaWRlVGltZW91dCIsICJzY2hlZHVsZUhpZGVBbmltYXRpb25GcmFtZSIsICJpc1Zpc2libGVGcm9tQ2xpY2siLCAiZGlkSGlkZUR1ZVRvRG9jdW1lbnRNb3VzZURvd24iLCAiZGlkVG91Y2hNb3ZlIiwgImlnbm9yZU9uRmlyc3RVcGRhdGUiLCAibGFzdFRyaWdnZXJFdmVudCIsICJjdXJyZW50VHJhbnNpdGlvbkVuZExpc3RlbmVyIiwgImxpc3RlbmVycyIsICJkZWJvdW5jZWRPbk1vdXNlTW92ZSIsICJvbk1vdXNlTW92ZSIsICJjdXJyZW50VGFyZ2V0IiwgImlkIiwgInBvcHBlckluc3RhbmNlIiwgImlzRW5hYmxlZCIsICJpc01vdW50ZWQiLCAiaXNTaG93biIsICJjbGVhckRlbGF5VGltZW91dHMiLCAic2V0UHJvcHMiLCAic2V0Q29udGVudDIiLCAic2hvdyIsICJoaWRlMiIsICJoaWRlV2l0aEludGVyYWN0aXZpdHkiLCAiZW5hYmxlIiwgImRpc2FibGUiLCAidW5tb3VudCIsICJlcnJvcldoZW4iLCAiX3Byb3BzJHJlbmRlciIsICJwbHVnaW5zSG9va3MiLCAiaGFzQXJpYUV4cGFuZGVkIiwgImhhc0F0dHJpYnV0ZSIsICJhZGRMaXN0ZW5lcnMiLCAiaGFuZGxlQXJpYUV4cGFuZGVkQXR0cmlidXRlIiwgImhhbmRsZVN0eWxlcyIsICJpbnZva2VIb29rIiwgInNjaGVkdWxlU2hvdyIsICJnZXREb2N1bWVudCIsICJnZXROb3JtYWxpemVkVG91Y2hTZXR0aW5ncyIsICJnZXRJc0N1c3RvbVRvdWNoQmVoYXZpb3IiLCAiZ2V0SXNEZWZhdWx0UmVuZGVyRm4iLCAiX2luc3RhbmNlJHByb3BzJHJlbmRlIiwgImdldEN1cnJlbnRUYXJnZXQiLCAiZ2V0RGVmYXVsdFRlbXBsYXRlQ2hpbGRyZW4iLCAiZ2V0RGVsYXkiLCAiaXNTaG93IiwgImZyb21IaWRlIiwgInBvaW50ZXJFdmVudHMiLCAiaG9vayIsICJzaG91bGRJbnZva2VQcm9wc0hvb2siLCAicGx1Z2luSG9va3MiLCAiX2luc3RhbmNlJHByb3BzIiwgImhhbmRsZUFyaWFDb250ZW50QXR0cmlidXRlIiwgImF0dHIiLCAiaWQyIiwgIm5vZGVzIiwgImN1cnJlbnRWYWx1ZSIsICJuZXh0VmFsdWUiLCAiY2xlYW51cEludGVyYWN0aXZlTW91c2VMaXN0ZW5lcnMiLCAib25Eb2N1bWVudFByZXNzIiwgImFjdHVhbFRhcmdldCIsICJjb21wb3NlZFBhdGgiLCAicmVtb3ZlRG9jdW1lbnRQcmVzcyIsICJvblRvdWNoTW92ZSIsICJvblRvdWNoU3RhcnQiLCAiYWRkRG9jdW1lbnRQcmVzcyIsICJkb2MiLCAib25UcmFuc2l0aW9uZWRPdXQiLCAiY2FsbGJhY2siLCAib25UcmFuc2l0aW9uRW5kIiwgIm9uVHJhbnNpdGlvbmVkSW4iLCAib24iLCAiZXZlbnRUeXBlIiwgImhhbmRsZXIiLCAib25UcmlnZ2VyMiIsICJvbk1vdXNlTGVhdmUiLCAib25CbHVyT3JGb2N1c091dCIsICJyZW1vdmVMaXN0ZW5lcnMiLCAiX2xhc3RUcmlnZ2VyRXZlbnQiLCAic2hvdWxkU2NoZWR1bGVDbGlja0hpZGUiLCAiaXNFdmVudExpc3RlbmVyU3RvcHBlZCIsICJ3YXNGb2N1c2VkIiwgInNjaGVkdWxlSGlkZSIsICJpc0N1cnNvck92ZXJSZWZlcmVuY2VPclBvcHBlciIsICJnZXROZXN0ZWRQb3BwZXJUcmVlIiwgIl9pbnN0YW5jZSRwb3BwZXJJbnN0YSIsICJpbnN0YW5jZTIiLCAic2hvdWxkQmFpbCIsICJyZWxhdGVkVGFyZ2V0IiwgImNyZWF0ZVBvcHBlckluc3RhbmNlIiwgImRlc3Ryb3lQb3BwZXJJbnN0YW5jZSIsICJfaW5zdGFuY2UkcHJvcHMyIiwgImNvbXB1dGVkUmVmZXJlbmNlIiwgInRpcHB5TW9kaWZpZXIiLCAiX2dldERlZmF1bHRUZW1wbGF0ZUNoIiwgIm1vdW50IiwgIndhcm5XaGVuIiwgIm5leHRFbGVtZW50U2libGluZyIsICJfZ2V0Tm9ybWFsaXplZFRvdWNoU2UiLCAidG91Y2hWYWx1ZSIsICJ0b3VjaERlbGF5IiwgInJlcXVlc3RBbmltYXRpb25GcmFtZSIsICJjYW5jZWxBbmltYXRpb25GcmFtZSIsICJjcmVhdGVNZW1vcnlMZWFrV2FybmluZyIsICJuZXN0ZWRQb3BwZXIiLCAiaXNBbHJlYWR5VmlzaWJsZSIsICJpc0Rpc2FibGVkIiwgImlzVG91Y2hBbmRUb3VjaERpc2FibGVkIiwgInZpc2liaWxpdHkiLCAidHJhbnNpdGlvbiIsICJfZ2V0RGVmYXVsdFRlbXBsYXRlQ2gyIiwgIm9uRmlyc3RVcGRhdGUyIiwgIl9pbnN0YW5jZSRwb3BwZXJJbnN0YTIiLCAiX2dldERlZmF1bHRUZW1wbGF0ZUNoMyIsICJfYm94IiwgIl9jb250ZW50IiwgImlzQWxyZWFkeUhpZGRlbiIsICJfZ2V0RGVmYXVsdFRlbXBsYXRlQ2g0IiwgInRhcmdldHMiLCAib3B0aW9uYWxQcm9wcyIsICJ2YWxpZGF0ZVRhcmdldHMiLCAiaXNTaW5nbGVDb250ZW50RWxlbWVudCIsICJpc01vcmVUaGFuT25lUmVmZXJlbmNlRWxlbWVudCIsICJpbnN0YW5jZXMiLCAiYXBwbHlTdHlsZXNNb2RpZmllciIsICJlZmZlY3Q0Il0KfQo=

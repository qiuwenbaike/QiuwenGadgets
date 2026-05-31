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

// node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/global-this.js
var require_global_this = __commonJS({
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/global-this.js"(exports2, module2) {
    "use strict";
    var check = function(it) {
      return it && it.Math === Math && it;
    };
    module2.exports = // eslint-disable-next-line es/no-global-this -- safe
    check(typeof globalThis == "object" && globalThis) || check(typeof window == "object" && window) || // eslint-disable-next-line no-restricted-globals -- safe
    check(typeof self == "object" && self) || check(typeof global == "object" && global) || check(typeof exports2 == "object" && exports2) || // eslint-disable-next-line no-new-func -- fallback
    /* @__PURE__ */ (function() {
      return this;
    })() || Function("return this")();
  }
});

// node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/fails.js
var require_fails = __commonJS({
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/fails.js"(exports2, module2) {
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

// node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/descriptors.js
var require_descriptors = __commonJS({
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/descriptors.js"(exports2, module2) {
    "use strict";
    var fails = require_fails();
    module2.exports = !fails(function() {
      return Object.defineProperty({}, 1, { get: function() {
        return 7;
      } })[1] !== 7;
    });
  }
});

// node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/function-bind-native.js
var require_function_bind_native = __commonJS({
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/function-bind-native.js"(exports2, module2) {
    "use strict";
    var fails = require_fails();
    module2.exports = !fails(function() {
      var test = function() {
      }.bind();
      return typeof test != "function" || test.hasOwnProperty("prototype");
    });
  }
});

// node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/function-call.js
var require_function_call = __commonJS({
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/function-call.js"(exports2, module2) {
    "use strict";
    var NATIVE_BIND = require_function_bind_native();
    var call = Function.prototype.call;
    module2.exports = NATIVE_BIND ? call.bind(call) : function() {
      return call.apply(call, arguments);
    };
  }
});

// node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/object-property-is-enumerable.js
var require_object_property_is_enumerable = __commonJS({
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/object-property-is-enumerable.js"(exports2) {
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

// node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/create-property-descriptor.js
var require_create_property_descriptor = __commonJS({
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/create-property-descriptor.js"(exports2, module2) {
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

// node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/function-uncurry-this.js
var require_function_uncurry_this = __commonJS({
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/function-uncurry-this.js"(exports2, module2) {
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

// node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/classof-raw.js
var require_classof_raw = __commonJS({
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/classof-raw.js"(exports2, module2) {
    "use strict";
    var uncurryThis = require_function_uncurry_this();
    var toString = uncurryThis({}.toString);
    var stringSlice = uncurryThis("".slice);
    module2.exports = function(it) {
      return stringSlice(toString(it), 8, -1);
    };
  }
});

// node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/indexed-object.js
var require_indexed_object = __commonJS({
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/indexed-object.js"(exports2, module2) {
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

// node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/is-null-or-undefined.js
var require_is_null_or_undefined = __commonJS({
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/is-null-or-undefined.js"(exports2, module2) {
    "use strict";
    module2.exports = function(it) {
      return it === null || it === void 0;
    };
  }
});

// node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/require-object-coercible.js
var require_require_object_coercible = __commonJS({
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/require-object-coercible.js"(exports2, module2) {
    "use strict";
    var isNullOrUndefined = require_is_null_or_undefined();
    var $TypeError = TypeError;
    module2.exports = function(it) {
      if (isNullOrUndefined(it)) throw new $TypeError("Can't call method on " + it);
      return it;
    };
  }
});

// node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/to-indexed-object.js
var require_to_indexed_object = __commonJS({
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/to-indexed-object.js"(exports2, module2) {
    "use strict";
    var IndexedObject = require_indexed_object();
    var requireObjectCoercible = require_require_object_coercible();
    module2.exports = function(it) {
      return IndexedObject(requireObjectCoercible(it));
    };
  }
});

// node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/is-callable.js
var require_is_callable = __commonJS({
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/is-callable.js"(exports2, module2) {
    "use strict";
    var documentAll = typeof document == "object" && document.all;
    module2.exports = typeof documentAll == "undefined" && documentAll !== void 0 ? function(argument) {
      return typeof argument == "function" || argument === documentAll;
    } : function(argument) {
      return typeof argument == "function";
    };
  }
});

// node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/is-object.js
var require_is_object = __commonJS({
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/is-object.js"(exports2, module2) {
    "use strict";
    var isCallable = require_is_callable();
    module2.exports = function(it) {
      return typeof it == "object" ? it !== null : isCallable(it);
    };
  }
});

// node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/get-built-in.js
var require_get_built_in = __commonJS({
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/get-built-in.js"(exports2, module2) {
    "use strict";
    var globalThis2 = require_global_this();
    var isCallable = require_is_callable();
    var aFunction = function(argument) {
      return isCallable(argument) ? argument : void 0;
    };
    module2.exports = function(namespace, method) {
      return arguments.length < 2 ? aFunction(globalThis2[namespace]) : globalThis2[namespace] && globalThis2[namespace][method];
    };
  }
});

// node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/object-is-prototype-of.js
var require_object_is_prototype_of = __commonJS({
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/object-is-prototype-of.js"(exports2, module2) {
    "use strict";
    var uncurryThis = require_function_uncurry_this();
    module2.exports = uncurryThis({}.isPrototypeOf);
  }
});

// node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/environment-user-agent.js
var require_environment_user_agent = __commonJS({
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/environment-user-agent.js"(exports2, module2) {
    "use strict";
    var globalThis2 = require_global_this();
    var navigator2 = globalThis2.navigator;
    var userAgent = navigator2 && navigator2.userAgent;
    module2.exports = userAgent ? String(userAgent) : "";
  }
});

// node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/environment-v8-version.js
var require_environment_v8_version = __commonJS({
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/environment-v8-version.js"(exports2, module2) {
    "use strict";
    var globalThis2 = require_global_this();
    var userAgent = require_environment_user_agent();
    var process = globalThis2.process;
    var Deno = globalThis2.Deno;
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

// node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/symbol-constructor-detection.js
var require_symbol_constructor_detection = __commonJS({
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/symbol-constructor-detection.js"(exports2, module2) {
    "use strict";
    var V8_VERSION = require_environment_v8_version();
    var fails = require_fails();
    var globalThis2 = require_global_this();
    var $String = globalThis2.String;
    module2.exports = !!Object.getOwnPropertySymbols && !fails(function() {
      var symbol = /* @__PURE__ */ Symbol("symbol detection");
      return !$String(symbol) || !(Object(symbol) instanceof Symbol) || // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
      !Symbol.sham && V8_VERSION && V8_VERSION < 41;
    });
  }
});

// node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/use-symbol-as-uid.js
var require_use_symbol_as_uid = __commonJS({
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/use-symbol-as-uid.js"(exports2, module2) {
    "use strict";
    var NATIVE_SYMBOL = require_symbol_constructor_detection();
    module2.exports = NATIVE_SYMBOL && !Symbol.sham && typeof Symbol.iterator == "symbol";
  }
});

// node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/is-symbol.js
var require_is_symbol = __commonJS({
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/is-symbol.js"(exports2, module2) {
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

// node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/try-to-string.js
var require_try_to_string = __commonJS({
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/try-to-string.js"(exports2, module2) {
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

// node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/a-callable.js
var require_a_callable = __commonJS({
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/a-callable.js"(exports2, module2) {
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

// node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/get-method.js
var require_get_method = __commonJS({
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/get-method.js"(exports2, module2) {
    "use strict";
    var aCallable = require_a_callable();
    var isNullOrUndefined = require_is_null_or_undefined();
    module2.exports = function(V, P) {
      var func = V[P];
      return isNullOrUndefined(func) ? void 0 : aCallable(func);
    };
  }
});

// node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/ordinary-to-primitive.js
var require_ordinary_to_primitive = __commonJS({
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/ordinary-to-primitive.js"(exports2, module2) {
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

// node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/is-pure.js
var require_is_pure = __commonJS({
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/is-pure.js"(exports2, module2) {
    "use strict";
    module2.exports = false;
  }
});

// node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/define-global-property.js
var require_define_global_property = __commonJS({
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/define-global-property.js"(exports2, module2) {
    "use strict";
    var globalThis2 = require_global_this();
    var defineProperty = Object.defineProperty;
    module2.exports = function(key, value) {
      try {
        defineProperty(globalThis2, key, { value, configurable: true, writable: true });
      } catch (error) {
        globalThis2[key] = value;
      }
      return value;
    };
  }
});

// node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/shared-store.js
var require_shared_store = __commonJS({
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/shared-store.js"(exports2, module2) {
    "use strict";
    var IS_PURE = require_is_pure();
    var globalThis2 = require_global_this();
    var defineGlobalProperty = require_define_global_property();
    var SHARED = "__core-js_shared__";
    var store = module2.exports = globalThis2[SHARED] || defineGlobalProperty(SHARED, {});
    (store.versions || (store.versions = [])).push({
      version: "3.49.0",
      mode: IS_PURE ? "pure" : "global",
      copyright: "© 2013–2025 Denis Pushkarev (zloirock.ru), 2025–2026 CoreJS Company (core-js.io). All rights reserved.",
      license: "https://github.com/zloirock/core-js/blob/v3.49.0/LICENSE",
      source: "https://github.com/zloirock/core-js"
    });
  }
});

// node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/shared.js
var require_shared = __commonJS({
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/shared.js"(exports2, module2) {
    "use strict";
    var store = require_shared_store();
    module2.exports = function(key, value) {
      return store[key] || (store[key] = value || {});
    };
  }
});

// node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/to-object.js
var require_to_object = __commonJS({
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/to-object.js"(exports2, module2) {
    "use strict";
    var requireObjectCoercible = require_require_object_coercible();
    var $Object = Object;
    module2.exports = function(argument) {
      return $Object(requireObjectCoercible(argument));
    };
  }
});

// node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/has-own-property.js
var require_has_own_property = __commonJS({
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/has-own-property.js"(exports2, module2) {
    "use strict";
    var uncurryThis = require_function_uncurry_this();
    var toObject = require_to_object();
    var hasOwnProperty = uncurryThis({}.hasOwnProperty);
    module2.exports = Object.hasOwn || function hasOwn(it, key) {
      return hasOwnProperty(toObject(it), key);
    };
  }
});

// node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/uid.js
var require_uid = __commonJS({
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/uid.js"(exports2, module2) {
    "use strict";
    var uncurryThis = require_function_uncurry_this();
    var id = 0;
    var postfix = Math.random();
    var toString = uncurryThis(1.1.toString);
    module2.exports = function(key) {
      return "Symbol(" + (key === void 0 ? "" : key) + ")_" + toString(++id + postfix, 36);
    };
  }
});

// node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/well-known-symbol.js
var require_well_known_symbol = __commonJS({
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/well-known-symbol.js"(exports2, module2) {
    "use strict";
    var globalThis2 = require_global_this();
    var shared = require_shared();
    var hasOwn = require_has_own_property();
    var uid = require_uid();
    var NATIVE_SYMBOL = require_symbol_constructor_detection();
    var USE_SYMBOL_AS_UID = require_use_symbol_as_uid();
    var Symbol2 = globalThis2.Symbol;
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

// node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/to-primitive.js
var require_to_primitive = __commonJS({
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/to-primitive.js"(exports2, module2) {
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

// node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/to-property-key.js
var require_to_property_key = __commonJS({
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/to-property-key.js"(exports2, module2) {
    "use strict";
    var toPrimitive = require_to_primitive();
    var isSymbol = require_is_symbol();
    module2.exports = function(argument) {
      var key = toPrimitive(argument, "string");
      return isSymbol(key) ? key : key + "";
    };
  }
});

// node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/document-create-element.js
var require_document_create_element = __commonJS({
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/document-create-element.js"(exports2, module2) {
    "use strict";
    var globalThis2 = require_global_this();
    var isObject = require_is_object();
    var document2 = globalThis2.document;
    var EXISTS = isObject(document2) && isObject(document2.createElement);
    module2.exports = function(it) {
      return EXISTS ? document2.createElement(it) : {};
    };
  }
});

// node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/ie8-dom-define.js
var require_ie8_dom_define = __commonJS({
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/ie8-dom-define.js"(exports2, module2) {
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

// node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/object-get-own-property-descriptor.js
var require_object_get_own_property_descriptor = __commonJS({
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/object-get-own-property-descriptor.js"(exports2) {
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

// node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/v8-prototype-define-bug.js
var require_v8_prototype_define_bug = __commonJS({
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/v8-prototype-define-bug.js"(exports2, module2) {
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

// node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/an-object.js
var require_an_object = __commonJS({
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/an-object.js"(exports2, module2) {
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

// node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/object-define-property.js
var require_object_define_property = __commonJS({
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/object-define-property.js"(exports2) {
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

// node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/create-non-enumerable-property.js
var require_create_non_enumerable_property = __commonJS({
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/create-non-enumerable-property.js"(exports2, module2) {
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

// node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/function-name.js
var require_function_name = __commonJS({
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/function-name.js"(exports2, module2) {
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

// node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/inspect-source.js
var require_inspect_source = __commonJS({
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/inspect-source.js"(exports2, module2) {
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

// node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/weak-map-basic-detection.js
var require_weak_map_basic_detection = __commonJS({
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/weak-map-basic-detection.js"(exports2, module2) {
    "use strict";
    var globalThis2 = require_global_this();
    var isCallable = require_is_callable();
    var WeakMap = globalThis2.WeakMap;
    module2.exports = isCallable(WeakMap) && /native code/.test(String(WeakMap));
  }
});

// node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/shared-key.js
var require_shared_key = __commonJS({
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/shared-key.js"(exports2, module2) {
    "use strict";
    var shared = require_shared();
    var uid = require_uid();
    var keys = shared("keys");
    module2.exports = function(key) {
      return keys[key] || (keys[key] = uid(key));
    };
  }
});

// node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/hidden-keys.js
var require_hidden_keys = __commonJS({
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/hidden-keys.js"(exports2, module2) {
    "use strict";
    module2.exports = {};
  }
});

// node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/internal-state.js
var require_internal_state = __commonJS({
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/internal-state.js"(exports2, module2) {
    "use strict";
    var NATIVE_WEAK_MAP = require_weak_map_basic_detection();
    var globalThis2 = require_global_this();
    var isObject = require_is_object();
    var createNonEnumerableProperty = require_create_non_enumerable_property();
    var hasOwn = require_has_own_property();
    var shared = require_shared_store();
    var sharedKey = require_shared_key();
    var hiddenKeys = require_hidden_keys();
    var OBJECT_ALREADY_INITIALIZED = "Object already initialized";
    var TypeError2 = globalThis2.TypeError;
    var WeakMap = globalThis2.WeakMap;
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

// node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/make-built-in.js
var require_make_built_in = __commonJS({
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/make-built-in.js"(exports2, module2) {
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

// node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/define-built-in.js
var require_define_built_in = __commonJS({
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/define-built-in.js"(exports2, module2) {
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

// node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/math-trunc.js
var require_math_trunc = __commonJS({
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/math-trunc.js"(exports2, module2) {
    "use strict";
    var ceil = Math.ceil;
    var floor = Math.floor;
    module2.exports = Math.trunc || function trunc(x) {
      var n = +x;
      return (n > 0 ? floor : ceil)(n);
    };
  }
});

// node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/to-integer-or-infinity.js
var require_to_integer_or_infinity = __commonJS({
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/to-integer-or-infinity.js"(exports2, module2) {
    "use strict";
    var trunc = require_math_trunc();
    module2.exports = function(argument) {
      var number = +argument;
      return number !== number || number === 0 ? 0 : trunc(number);
    };
  }
});

// node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/to-absolute-index.js
var require_to_absolute_index = __commonJS({
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/to-absolute-index.js"(exports2, module2) {
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

// node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/to-length.js
var require_to_length = __commonJS({
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/to-length.js"(exports2, module2) {
    "use strict";
    var toIntegerOrInfinity = require_to_integer_or_infinity();
    var min2 = Math.min;
    module2.exports = function(argument) {
      var len = toIntegerOrInfinity(argument);
      return len > 0 ? min2(len, 9007199254740991) : 0;
    };
  }
});

// node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/length-of-array-like.js
var require_length_of_array_like = __commonJS({
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/length-of-array-like.js"(exports2, module2) {
    "use strict";
    var toLength = require_to_length();
    module2.exports = function(obj) {
      return toLength(obj.length);
    };
  }
});

// node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/array-includes.js
var require_array_includes = __commonJS({
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/array-includes.js"(exports2, module2) {
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

// node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/object-keys-internal.js
var require_object_keys_internal = __commonJS({
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/object-keys-internal.js"(exports2, module2) {
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

// node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/enum-bug-keys.js
var require_enum_bug_keys = __commonJS({
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/enum-bug-keys.js"(exports2, module2) {
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

// node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/object-get-own-property-names.js
var require_object_get_own_property_names = __commonJS({
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/object-get-own-property-names.js"(exports2) {
    "use strict";
    var internalObjectKeys = require_object_keys_internal();
    var enumBugKeys = require_enum_bug_keys();
    var hiddenKeys = enumBugKeys.concat("length", "prototype");
    exports2.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
      return internalObjectKeys(O, hiddenKeys);
    };
  }
});

// node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/object-get-own-property-symbols.js
var require_object_get_own_property_symbols = __commonJS({
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/object-get-own-property-symbols.js"(exports2) {
    "use strict";
    exports2.f = Object.getOwnPropertySymbols;
  }
});

// node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/own-keys.js
var require_own_keys = __commonJS({
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/own-keys.js"(exports2, module2) {
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

// node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/copy-constructor-properties.js
var require_copy_constructor_properties = __commonJS({
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/copy-constructor-properties.js"(exports2, module2) {
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

// node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/is-forced.js
var require_is_forced = __commonJS({
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/is-forced.js"(exports2, module2) {
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

// node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/export.js
var require_export = __commonJS({
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/export.js"(exports2, module2) {
    "use strict";
    var globalThis2 = require_global_this();
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
        target = globalThis2;
      } else if (STATIC) {
        target = globalThis2[TARGET] || defineGlobalProperty(TARGET, {});
      } else {
        target = globalThis2[TARGET] && globalThis2[TARGET].prototype;
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

// node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/is-array.js
var require_is_array = __commonJS({
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/is-array.js"(exports2, module2) {
    "use strict";
    var classof = require_classof_raw();
    module2.exports = Array.isArray || function isArray(argument) {
      return classof(argument) === "Array";
    };
  }
});

// node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/to-string-tag-support.js
var require_to_string_tag_support = __commonJS({
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/to-string-tag-support.js"(exports2, module2) {
    "use strict";
    var wellKnownSymbol = require_well_known_symbol();
    var TO_STRING_TAG = wellKnownSymbol("toStringTag");
    var test = {};
    test[TO_STRING_TAG] = "z";
    module2.exports = String(test) === "[object z]";
  }
});

// node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/classof.js
var require_classof = __commonJS({
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/classof.js"(exports2, module2) {
    "use strict";
    var TO_STRING_TAG_SUPPORT = require_to_string_tag_support();
    var isCallable = require_is_callable();
    var classofRaw = require_classof_raw();
    var wellKnownSymbol = require_well_known_symbol();
    var TO_STRING_TAG = wellKnownSymbol("toStringTag");
    var $Object = Object;
    var CORRECT_ARGUMENTS = classofRaw(/* @__PURE__ */ (function() {
      return arguments;
    })()) === "Arguments";
    var tryGet = function(it, key) {
      try {
        return it[key];
      } catch (error) {
      }
    };
    module2.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function(it) {
      var O, tag, result;
      return it === void 0 ? "Undefined" : it === null ? "Null" : typeof (tag = tryGet(O = $Object(it), TO_STRING_TAG)) == "string" ? tag : CORRECT_ARGUMENTS ? classofRaw(O) : (result = classofRaw(O)) === "Object" && isCallable(O.callee) ? "Arguments" : result;
    };
  }
});

// node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/to-string.js
var require_to_string = __commonJS({
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/to-string.js"(exports2, module2) {
    "use strict";
    var classof = require_classof();
    var $String = String;
    module2.exports = function(argument) {
      if (classof(argument) === "Symbol") throw new TypeError("Cannot convert a Symbol value to a string");
      return $String(argument);
    };
  }
});

// node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/create-property.js
var require_create_property = __commonJS({
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/create-property.js"(exports2, module2) {
    "use strict";
    var DESCRIPTORS = require_descriptors();
    var definePropertyModule = require_object_define_property();
    var createPropertyDescriptor = require_create_property_descriptor();
    module2.exports = function(object, key, value) {
      if (DESCRIPTORS) definePropertyModule.f(object, key, createPropertyDescriptor(0, value));
      else object[key] = value;
    };
  }
});

// node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/parse-json-string.js
var require_parse_json_string = __commonJS({
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/parse-json-string.js"(exports2, module2) {
    "use strict";
    var uncurryThis = require_function_uncurry_this();
    var hasOwn = require_has_own_property();
    var $SyntaxError = SyntaxError;
    var $parseInt = parseInt;
    var fromCharCode = String.fromCharCode;
    var at = uncurryThis("".charAt);
    var slice = uncurryThis("".slice);
    var exec = uncurryThis(/./.exec);
    var codePoints = {
      '\\"': '"',
      "\\\\": "\\",
      "\\/": "/",
      "\\b": "\b",
      "\\f": "\f",
      "\\n": "\n",
      "\\r": "\r",
      "\\t": "	"
    };
    var IS_4_HEX_DIGITS = /^[\da-f]{4}$/i;
    var IS_C0_CONTROL_CODE = /^[\u0000-\u001F]$/;
    module2.exports = function(source, i) {
      var unterminated = true;
      var value = "";
      while (i < source.length) {
        var chr = at(source, i);
        if (chr === "\\") {
          var twoChars = slice(source, i, i + 2);
          if (hasOwn(codePoints, twoChars)) {
            value += codePoints[twoChars];
            i += 2;
          } else if (twoChars === "\\u") {
            i += 2;
            var fourHexDigits = slice(source, i, i + 4);
            if (!exec(IS_4_HEX_DIGITS, fourHexDigits)) throw new $SyntaxError("Bad Unicode escape at: " + i);
            value += fromCharCode($parseInt(fourHexDigits, 16));
            i += 4;
          } else throw new $SyntaxError('Unknown escape sequence: "' + twoChars + '"');
        } else if (chr === '"') {
          unterminated = false;
          i++;
          break;
        } else {
          if (exec(IS_C0_CONTROL_CODE, chr)) throw new $SyntaxError("Bad control character in string literal at: " + i);
          value += chr;
          i++;
        }
      }
      if (unterminated) throw new $SyntaxError("Unterminated string at: " + i);
      return { value, end: i };
    };
  }
});

// node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/modules/es.json.parse.js
var require_es_json_parse = __commonJS({
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/modules/es.json.parse.js"() {
    "use strict";
    var $ = require_export();
    var DESCRIPTORS = require_descriptors();
    var globalThis2 = require_global_this();
    var getBuiltIn = require_get_built_in();
    var uncurryThis = require_function_uncurry_this();
    var call = require_function_call();
    var isCallable = require_is_callable();
    var isObject = require_is_object();
    var isArray = require_is_array();
    var hasOwn = require_has_own_property();
    var toString = require_to_string();
    var lengthOfArrayLike = require_length_of_array_like();
    var createProperty = require_create_property();
    var fails = require_fails();
    var parseJSONString = require_parse_json_string();
    var NATIVE_SYMBOL = require_symbol_constructor_detection();
    var JSON2 = globalThis2.JSON;
    var Number = globalThis2.Number;
    var SyntaxError2 = globalThis2.SyntaxError;
    var nativeParse = JSON2 && JSON2.parse;
    var enumerableOwnProperties = getBuiltIn("Object", "keys");
    var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    var at = uncurryThis("".charAt);
    var slice = uncurryThis("".slice);
    var exec = uncurryThis(/./.exec);
    var push = uncurryThis([].push);
    var IS_DIGIT = /^\d$/;
    var IS_NON_ZERO_DIGIT = /^[1-9]$/;
    var IS_NUMBER_START = /^[\d-]$/;
    var IS_WHITESPACE = /^[\t\n\r ]$/;
    var PRIMITIVE = 0;
    var OBJECT = 1;
    var $parse = function(source, reviver) {
      source = toString(source);
      var context = new Context(source, 0, "");
      var root = context.parse();
      var value = root.value;
      var endIndex = context.skip(IS_WHITESPACE, root.end);
      if (endIndex < source.length) {
        throw new SyntaxError2('Unexpected extra character: "' + at(source, endIndex) + '" after the parsed data at: ' + endIndex);
      }
      return isCallable(reviver) ? internalize({ "": value }, "", reviver, root) : value;
    };
    var internalize = function(holder, name, reviver, node) {
      var val = holder[name];
      var unmodified = node && val === node.value;
      var context = unmodified && typeof node.source == "string" ? { source: node.source } : {};
      var elementRecordsLen, keys, len, i, P;
      if (isObject(val)) {
        var nodeIsArray = isArray(val);
        var nodes = unmodified ? node.nodes : nodeIsArray ? [] : {};
        if (nodeIsArray) {
          elementRecordsLen = nodes.length;
          len = lengthOfArrayLike(val);
          for (i = 0; i < len; i++) {
            internalizeProperty(val, i, internalize(val, "" + i, reviver, i < elementRecordsLen ? nodes[i] : void 0));
          }
        } else {
          keys = enumerableOwnProperties(val);
          len = lengthOfArrayLike(keys);
          for (i = 0; i < len; i++) {
            P = keys[i];
            internalizeProperty(val, P, internalize(val, P, reviver, hasOwn(nodes, P) ? nodes[P] : void 0));
          }
        }
      }
      return call(reviver, holder, name, val, context);
    };
    var internalizeProperty = function(object, key, value) {
      if (DESCRIPTORS) {
        var descriptor = getOwnPropertyDescriptor(object, key);
        if (descriptor && !descriptor.configurable) return;
      }
      if (value === void 0) delete object[key];
      else createProperty(object, key, value);
    };
    var Node = function(value, end2, source, nodes) {
      this.value = value;
      this.end = end2;
      this.source = source;
      this.nodes = nodes;
    };
    var Context = function(source, index) {
      this.source = source;
      this.index = index;
    };
    Context.prototype = {
      fork: function(nextIndex) {
        return new Context(this.source, nextIndex);
      },
      parse: function() {
        var source = this.source;
        var i = this.skip(IS_WHITESPACE, this.index);
        var fork = this.fork(i);
        var chr = at(source, i);
        if (exec(IS_NUMBER_START, chr)) return fork.number();
        switch (chr) {
          case "{":
            return fork.object();
          case "[":
            return fork.array();
          case '"':
            return fork.string();
          case "t":
            return fork.keyword(true);
          case "f":
            return fork.keyword(false);
          case "n":
            return fork.keyword(null);
        }
        throw new SyntaxError2('Unexpected character: "' + chr + '" at: ' + i);
      },
      node: function(type, value, start2, end2, nodes) {
        return new Node(value, end2, type ? null : slice(this.source, start2, end2), nodes);
      },
      object: function() {
        var source = this.source;
        var i = this.index + 1;
        var expectKeypair = false;
        var object = {};
        var nodes = {};
        var closed = false;
        while (i < source.length) {
          i = this.until(['"', "}"], i);
          if (at(source, i) === "}" && !expectKeypair) {
            i++;
            closed = true;
            break;
          }
          var result = this.fork(i).string();
          var key = result.value;
          i = result.end;
          i = this.until([":"], i) + 1;
          i = this.skip(IS_WHITESPACE, i);
          result = this.fork(i).parse();
          createProperty(nodes, key, result);
          createProperty(object, key, result.value);
          i = this.until([",", "}"], result.end);
          var chr = at(source, i);
          if (chr === ",") {
            expectKeypair = true;
            i++;
          } else if (chr === "}") {
            i++;
            closed = true;
            break;
          }
        }
        if (!closed) throw new SyntaxError2("Unterminated object at: " + i);
        return this.node(OBJECT, object, this.index, i, nodes);
      },
      array: function() {
        var source = this.source;
        var i = this.index + 1;
        var expectElement = false;
        var array = [];
        var nodes = [];
        var closed = false;
        while (i < source.length) {
          i = this.skip(IS_WHITESPACE, i);
          if (at(source, i) === "]" && !expectElement) {
            i++;
            closed = true;
            break;
          }
          var result = this.fork(i).parse();
          push(nodes, result);
          push(array, result.value);
          i = this.until([",", "]"], result.end);
          if (at(source, i) === ",") {
            expectElement = true;
            i++;
          } else if (at(source, i) === "]") {
            i++;
            closed = true;
            break;
          }
        }
        if (!closed) throw new SyntaxError2("Unterminated array at: " + i);
        return this.node(OBJECT, array, this.index, i, nodes);
      },
      string: function() {
        var index = this.index;
        var parsed = parseJSONString(this.source, this.index + 1);
        return this.node(PRIMITIVE, parsed.value, index, parsed.end);
      },
      number: function() {
        var source = this.source;
        var startIndex = this.index;
        var i = startIndex;
        if (at(source, i) === "-") i++;
        if (at(source, i) === "0") i++;
        else if (exec(IS_NON_ZERO_DIGIT, at(source, i))) i = this.skip(IS_DIGIT, i + 1);
        else throw new SyntaxError2("Failed to parse number at: " + i);
        if (at(source, i) === ".") {
          var fractionStartIndex = i + 1;
          i = this.skip(IS_DIGIT, fractionStartIndex);
          if (fractionStartIndex === i) throw new SyntaxError2("Failed to parse number's fraction at: " + i);
        }
        if (at(source, i) === "e" || at(source, i) === "E") {
          i++;
          if (at(source, i) === "+" || at(source, i) === "-") i++;
          var exponentStartIndex = i;
          i = this.skip(IS_DIGIT, i);
          if (exponentStartIndex === i) throw new SyntaxError2("Failed to parse number's exponent value at: " + i);
        }
        return this.node(PRIMITIVE, Number(slice(source, startIndex, i)), startIndex, i);
      },
      keyword: function(value) {
        var keyword = "" + value;
        var index = this.index;
        var endIndex = index + keyword.length;
        if (slice(this.source, index, endIndex) !== keyword) throw new SyntaxError2("Failed to parse value at: " + index);
        return this.node(PRIMITIVE, value, index, endIndex);
      },
      skip: function(regex, i) {
        var source = this.source;
        for (; i < source.length; i++) if (!exec(regex, at(source, i))) break;
        return i;
      },
      until: function(array, i) {
        i = this.skip(IS_WHITESPACE, i);
        var chr = at(this.source, i);
        for (var j = 0; j < array.length; j++) if (array[j] === chr) return i;
        throw new SyntaxError2('Unexpected character: "' + chr + '" at: ' + i);
      }
    };
    var NO_SOURCE_SUPPORT = fails(function() {
      var unsafeInt = "9007199254740993";
      var source;
      nativeParse(unsafeInt, function(key, value, context) {
        source = context.source;
      });
      return source !== unsafeInt;
    });
    var PROPER_BASE_PARSE = NATIVE_SYMBOL && !fails(function() {
      return 1 / nativeParse("-0 	") !== -Infinity;
    });
    $({ target: "JSON", stat: true, forced: NO_SOURCE_SUPPORT }, {
      parse: function parse(text, reviver) {
        return PROPER_BASE_PARSE && !isCallable(reviver) ? nativeParse(text) : $parse(text, reviver);
      }
    });
  }
});

// node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/map-helpers.js
var require_map_helpers = __commonJS({
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/map-helpers.js"(exports2, module2) {
    "use strict";
    var uncurryThis = require_function_uncurry_this();
    var MapPrototype = Map.prototype;
    module2.exports = {
      // eslint-disable-next-line es/no-map -- safe
      Map,
      set: uncurryThis(MapPrototype.set),
      get: uncurryThis(MapPrototype.get),
      has: uncurryThis(MapPrototype.has),
      remove: uncurryThis(MapPrototype["delete"]),
      proto: MapPrototype
    };
  }
});

// node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/modules/es.map.get-or-insert.js
var require_es_map_get_or_insert = __commonJS({
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/modules/es.map.get-or-insert.js"() {
    "use strict";
    var $ = require_export();
    var MapHelpers = require_map_helpers();
    var IS_PURE = require_is_pure();
    var get = MapHelpers.get;
    var has = MapHelpers.has;
    var set = MapHelpers.set;
    $({ target: "Map", proto: true, real: true, forced: IS_PURE }, {
      getOrInsert: function getOrInsert(key, value) {
        if (has(this, key)) return get(this, key);
        set(this, key, value);
        return value;
      }
    });
  }
});

// node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/modules/es.map.get-or-insert-computed.js
var require_es_map_get_or_insert_computed = __commonJS({
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/modules/es.map.get-or-insert-computed.js"() {
    "use strict";
    var $ = require_export();
    var aCallable = require_a_callable();
    var MapHelpers = require_map_helpers();
    var IS_PURE = require_is_pure();
    var get = MapHelpers.get;
    var has = MapHelpers.has;
    var set = MapHelpers.set;
    $({ target: "Map", proto: true, real: true, forced: IS_PURE }, {
      getOrInsertComputed: function getOrInsertComputed(key, callbackfn) {
        var hasKey = has(this, key);
        aCallable(callbackfn);
        if (hasKey) return get(this, key);
        if (key === 0 && 1 / key === -Infinity) key = 0;
        var value = callbackfn(key);
        set(this, key, value);
        return value;
      }
    });
  }
});

// dist/Tippy/Tippy.js
require_es_json_parse();
require_es_map_get_or_insert();
require_es_map_get_or_insert_computed();
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40OS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9nbG9iYWwtdGhpcy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ5LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2ZhaWxzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDkuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZGVzY3JpcHRvcnMuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40OS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mdW5jdGlvbi1iaW5kLW5hdGl2ZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ5LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2Z1bmN0aW9uLWNhbGwuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40OS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3QtcHJvcGVydHktaXMtZW51bWVyYWJsZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ5LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDkuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDkuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY2xhc3NvZi1yYXcuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40OS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pbmRleGVkLW9iamVjdC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ5LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLW51bGwtb3ItdW5kZWZpbmVkLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDkuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDkuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40OS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pcy1jYWxsYWJsZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ5LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLW9iamVjdC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ5LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2dldC1idWlsdC1pbi5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ5LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1pcy1wcm90b3R5cGUtb2YuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40OS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9lbnZpcm9ubWVudC11c2VyLWFnZW50LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDkuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZW52aXJvbm1lbnQtdjgtdmVyc2lvbi5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ5LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3N5bWJvbC1jb25zdHJ1Y3Rvci1kZXRlY3Rpb24uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40OS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy91c2Utc3ltYm9sLWFzLXVpZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ5LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLXN5bWJvbC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ5LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RyeS10by1zdHJpbmcuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40OS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hLWNhbGxhYmxlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDkuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZ2V0LW1ldGhvZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ5LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29yZGluYXJ5LXRvLXByaW1pdGl2ZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ5LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLXB1cmUuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40OS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9kZWZpbmUtZ2xvYmFsLXByb3BlcnR5LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDkuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2hhcmVkLXN0b3JlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDkuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2hhcmVkLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDkuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tb2JqZWN0LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDkuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ5LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3VpZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ5LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDkuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tcHJpbWl0aXZlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDkuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tcHJvcGVydHkta2V5LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDkuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZG9jdW1lbnQtY3JlYXRlLWVsZW1lbnQuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40OS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pZTgtZG9tLWRlZmluZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ5LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3IuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40OS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy92OC1wcm90b3R5cGUtZGVmaW5lLWJ1Zy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ5LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FuLW9iamVjdC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ5LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHkuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40OS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHkuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40OS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mdW5jdGlvbi1uYW1lLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDkuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaW5zcGVjdC1zb3VyY2UuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40OS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy93ZWFrLW1hcC1iYXNpYy1kZXRlY3Rpb24uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40OS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zaGFyZWQta2V5LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDkuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaGlkZGVuLWtleXMuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40OS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pbnRlcm5hbC1zdGF0ZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ5LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL21ha2UtYnVpbHQtaW4uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40OS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9kZWZpbmUtYnVpbHQtaW4uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40OS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9tYXRoLXRydW5jLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDkuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8taW50ZWdlci1vci1pbmZpbml0eS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ5LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RvLWFic29sdXRlLWluZGV4LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDkuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tbGVuZ3RoLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDkuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvbGVuZ3RoLW9mLWFycmF5LWxpa2UuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40OS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1pbmNsdWRlcy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ5LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1rZXlzLWludGVybmFsLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDkuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZW51bS1idWcta2V5cy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ5LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LW5hbWVzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDkuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktc3ltYm9scy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ5LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL293bi1rZXlzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDkuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY29weS1jb25zdHJ1Y3Rvci1wcm9wZXJ0aWVzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDkuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXMtZm9yY2VkLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDkuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZXhwb3J0LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDkuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXMtYXJyYXkuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40OS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy90by1zdHJpbmctdGFnLXN1cHBvcnQuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40OS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jbGFzc29mLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDkuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tc3RyaW5nLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDkuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDkuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvcGFyc2UtanNvbi1zdHJpbmcuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40OS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuanNvbi5wYXJzZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ5LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL21hcC1oZWxwZXJzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDkuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLm1hcC5nZXQtb3ItaW5zZXJ0LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDkuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLm1hcC5nZXQtb3ItaW5zZXJ0LWNvbXB1dGVkLmpzIiwgInNyYy9UaXBweS9UaXBweS50cyIsICJub2RlX21vZHVsZXMvLnBucG0vQHBvcHBlcmpzK2NvcmVAMi4xMS44L25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZW51bXMuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL0Bwb3BwZXJqcytjb3JlQDIuMTEuOC9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9nZXROb2RlTmFtZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vQHBvcHBlcmpzK2NvcmVAMi4xMS44L25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2dldFdpbmRvdy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vQHBvcHBlcmpzK2NvcmVAMi4xMS44L25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2luc3RhbmNlT2YuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL0Bwb3BwZXJqcytjb3JlQDIuMTEuOC9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL21vZGlmaWVycy9hcHBseVN0eWxlcy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vQHBvcHBlcmpzK2NvcmVAMi4xMS44L25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvdXRpbHMvZ2V0QmFzZVBsYWNlbWVudC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vQHBvcHBlcmpzK2NvcmVAMi4xMS44L25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvdXRpbHMvbWF0aC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vQHBvcHBlcmpzK2NvcmVAMi4xMS44L25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvdXRpbHMvdXNlckFnZW50LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9AcG9wcGVyanMrY29yZUAyLjExLjgvbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9kb20tdXRpbHMvaXNMYXlvdXRWaWV3cG9ydC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vQHBvcHBlcmpzK2NvcmVAMi4xMS44L25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2dldEJvdW5kaW5nQ2xpZW50UmVjdC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vQHBvcHBlcmpzK2NvcmVAMi4xMS44L25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2dldExheW91dFJlY3QuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL0Bwb3BwZXJqcytjb3JlQDIuMTEuOC9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9jb250YWlucy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vQHBvcHBlcmpzK2NvcmVAMi4xMS44L25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2dldENvbXB1dGVkU3R5bGUuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL0Bwb3BwZXJqcytjb3JlQDIuMTEuOC9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9pc1RhYmxlRWxlbWVudC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vQHBvcHBlcmpzK2NvcmVAMi4xMS44L25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2dldERvY3VtZW50RWxlbWVudC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vQHBvcHBlcmpzK2NvcmVAMi4xMS44L25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2dldFBhcmVudE5vZGUuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL0Bwb3BwZXJqcytjb3JlQDIuMTEuOC9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9nZXRPZmZzZXRQYXJlbnQuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL0Bwb3BwZXJqcytjb3JlQDIuMTEuOC9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL2dldE1haW5BeGlzRnJvbVBsYWNlbWVudC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vQHBvcHBlcmpzK2NvcmVAMi4xMS44L25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvdXRpbHMvd2l0aGluLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9AcG9wcGVyanMrY29yZUAyLjExLjgvbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi91dGlscy9nZXRGcmVzaFNpZGVPYmplY3QuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL0Bwb3BwZXJqcytjb3JlQDIuMTEuOC9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL21lcmdlUGFkZGluZ09iamVjdC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vQHBvcHBlcmpzK2NvcmVAMi4xMS44L25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvdXRpbHMvZXhwYW5kVG9IYXNoTWFwLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9AcG9wcGVyanMrY29yZUAyLjExLjgvbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9tb2RpZmllcnMvYXJyb3cuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL0Bwb3BwZXJqcytjb3JlQDIuMTEuOC9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL2dldFZhcmlhdGlvbi5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vQHBvcHBlcmpzK2NvcmVAMi4xMS44L25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvbW9kaWZpZXJzL2NvbXB1dGVTdHlsZXMuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL0Bwb3BwZXJqcytjb3JlQDIuMTEuOC9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL21vZGlmaWVycy9ldmVudExpc3RlbmVycy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vQHBvcHBlcmpzK2NvcmVAMi4xMS44L25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvdXRpbHMvZ2V0T3Bwb3NpdGVQbGFjZW1lbnQuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL0Bwb3BwZXJqcytjb3JlQDIuMTEuOC9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL2dldE9wcG9zaXRlVmFyaWF0aW9uUGxhY2VtZW50LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9AcG9wcGVyanMrY29yZUAyLjExLjgvbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9kb20tdXRpbHMvZ2V0V2luZG93U2Nyb2xsLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9AcG9wcGVyanMrY29yZUAyLjExLjgvbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9kb20tdXRpbHMvZ2V0V2luZG93U2Nyb2xsQmFyWC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vQHBvcHBlcmpzK2NvcmVAMi4xMS44L25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2dldFZpZXdwb3J0UmVjdC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vQHBvcHBlcmpzK2NvcmVAMi4xMS44L25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2dldERvY3VtZW50UmVjdC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vQHBvcHBlcmpzK2NvcmVAMi4xMS44L25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2lzU2Nyb2xsUGFyZW50LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9AcG9wcGVyanMrY29yZUAyLjExLjgvbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9kb20tdXRpbHMvZ2V0U2Nyb2xsUGFyZW50LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9AcG9wcGVyanMrY29yZUAyLjExLjgvbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9kb20tdXRpbHMvbGlzdFNjcm9sbFBhcmVudHMuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL0Bwb3BwZXJqcytjb3JlQDIuMTEuOC9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL3JlY3RUb0NsaWVudFJlY3QuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL0Bwb3BwZXJqcytjb3JlQDIuMTEuOC9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9nZXRDbGlwcGluZ1JlY3QuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL0Bwb3BwZXJqcytjb3JlQDIuMTEuOC9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL2NvbXB1dGVPZmZzZXRzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9AcG9wcGVyanMrY29yZUAyLjExLjgvbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi91dGlscy9kZXRlY3RPdmVyZmxvdy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vQHBvcHBlcmpzK2NvcmVAMi4xMS44L25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvdXRpbHMvY29tcHV0ZUF1dG9QbGFjZW1lbnQuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL0Bwb3BwZXJqcytjb3JlQDIuMTEuOC9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL21vZGlmaWVycy9mbGlwLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9AcG9wcGVyanMrY29yZUAyLjExLjgvbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9tb2RpZmllcnMvaGlkZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vQHBvcHBlcmpzK2NvcmVAMi4xMS44L25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvbW9kaWZpZXJzL29mZnNldC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vQHBvcHBlcmpzK2NvcmVAMi4xMS44L25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvbW9kaWZpZXJzL3BvcHBlck9mZnNldHMuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL0Bwb3BwZXJqcytjb3JlQDIuMTEuOC9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL2dldEFsdEF4aXMuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL0Bwb3BwZXJqcytjb3JlQDIuMTEuOC9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL21vZGlmaWVycy9wcmV2ZW50T3ZlcmZsb3cuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL0Bwb3BwZXJqcytjb3JlQDIuMTEuOC9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9nZXRIVE1MRWxlbWVudFNjcm9sbC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vQHBvcHBlcmpzK2NvcmVAMi4xMS44L25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2dldE5vZGVTY3JvbGwuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL0Bwb3BwZXJqcytjb3JlQDIuMTEuOC9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9nZXRDb21wb3NpdGVSZWN0LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9AcG9wcGVyanMrY29yZUAyLjExLjgvbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi91dGlscy9vcmRlck1vZGlmaWVycy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vQHBvcHBlcmpzK2NvcmVAMi4xMS44L25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvdXRpbHMvZGVib3VuY2UuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL0Bwb3BwZXJqcytjb3JlQDIuMTEuOC9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL21lcmdlQnlOYW1lLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9AcG9wcGVyanMrY29yZUAyLjExLjgvbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9jcmVhdGVQb3BwZXIuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL0Bwb3BwZXJqcytjb3JlQDIuMTEuOC9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3BvcHBlci5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vdGlwcHkuanNANi4zLjcvbm9kZV9tb2R1bGVzL3RpcHB5LmpzL3NyYy9jb25zdGFudHMudHMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL3RpcHB5LmpzQDYuMy43L25vZGVfbW9kdWxlcy90aXBweS5qcy9zcmMvdXRpbHMudHMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL3RpcHB5LmpzQDYuMy43L25vZGVfbW9kdWxlcy90aXBweS5qcy9zcmMvZG9tLXV0aWxzLnRzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS90aXBweS5qc0A2LjMuNy9ub2RlX21vZHVsZXMvdGlwcHkuanMvc3JjL2JpbmRHbG9iYWxFdmVudExpc3RlbmVycy50cyIsICJub2RlX21vZHVsZXMvLnBucG0vdGlwcHkuanNANi4zLjcvbm9kZV9tb2R1bGVzL3RpcHB5LmpzL3NyYy9icm93c2VyLnRzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS90aXBweS5qc0A2LjMuNy9ub2RlX21vZHVsZXMvdGlwcHkuanMvc3JjL3ZhbGlkYXRpb24udHMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL3RpcHB5LmpzQDYuMy43L25vZGVfbW9kdWxlcy90aXBweS5qcy9zcmMvcHJvcHMudHMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL3RpcHB5LmpzQDYuMy43L25vZGVfbW9kdWxlcy90aXBweS5qcy9zcmMvdGVtcGxhdGUudHMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL3RpcHB5LmpzQDYuMy43L25vZGVfbW9kdWxlcy90aXBweS5qcy9zcmMvY3JlYXRlVGlwcHkudHMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL3RpcHB5LmpzQDYuMy43L25vZGVfbW9kdWxlcy90aXBweS5qcy9zcmMvaW5kZXgudHMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL3RpcHB5LmpzQDYuMy43L25vZGVfbW9kdWxlcy90aXBweS5qcy9zcmMvYWRkb25zL2NyZWF0ZVNpbmdsZXRvbi50cyIsICJub2RlX21vZHVsZXMvLnBucG0vdGlwcHkuanNANi4zLjcvbm9kZV9tb2R1bGVzL3RpcHB5LmpzL3NyYy9hZGRvbnMvZGVsZWdhdGUudHMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL3RpcHB5LmpzQDYuMy43L25vZGVfbW9kdWxlcy90aXBweS5qcy9zcmMvcGx1Z2lucy9hbmltYXRlRmlsbC50cyIsICJub2RlX21vZHVsZXMvLnBucG0vdGlwcHkuanNANi4zLjcvbm9kZV9tb2R1bGVzL3RpcHB5LmpzL3NyYy9wbHVnaW5zL2ZvbGxvd0N1cnNvci50cyIsICJub2RlX21vZHVsZXMvLnBucG0vdGlwcHkuanNANi4zLjcvbm9kZV9tb2R1bGVzL3RpcHB5LmpzL3NyYy9wbHVnaW5zL2lubGluZVBvc2l0aW9uaW5nLnRzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS90aXBweS5qc0A2LjMuNy9ub2RlX21vZHVsZXMvdGlwcHkuanMvc3JjL3BsdWdpbnMvc3RpY2t5LnRzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS90aXBweS5qc0A2LjMuNy9ub2RlX21vZHVsZXMvdGlwcHkuanMvYnVpbGQvYmFzZS5qcyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiJ3VzZSBzdHJpY3QnO1xudmFyIGNoZWNrID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpdCAmJiBpdC5NYXRoID09PSBNYXRoICYmIGl0O1xufTtcblxuLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzg2I2lzc3VlY29tbWVudC0xMTU3NTkwMjhcbm1vZHVsZS5leHBvcnRzID1cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLWdsb2JhbC10aGlzIC0tIHNhZmVcbiAgY2hlY2sodHlwZW9mIGdsb2JhbFRoaXMgPT0gJ29iamVjdCcgJiYgZ2xvYmFsVGhpcykgfHxcbiAgY2hlY2sodHlwZW9mIHdpbmRvdyA9PSAnb2JqZWN0JyAmJiB3aW5kb3cpIHx8XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZXN0cmljdGVkLWdsb2JhbHMgLS0gc2FmZVxuICBjaGVjayh0eXBlb2Ygc2VsZiA9PSAnb2JqZWN0JyAmJiBzZWxmKSB8fFxuICBjaGVjayh0eXBlb2YgZ2xvYmFsID09ICdvYmplY3QnICYmIGdsb2JhbCkgfHxcbiAgY2hlY2sodHlwZW9mIHRoaXMgPT0gJ29iamVjdCcgJiYgdGhpcykgfHxcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5ldy1mdW5jIC0tIGZhbGxiYWNrXG4gIChmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9KSgpIHx8IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZXhlYykge1xuICB0cnkge1xuICAgIHJldHVybiAhIWV4ZWMoKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcblxuLy8gRGV0ZWN0IElFOCdzIGluY29tcGxldGUgZGVmaW5lUHJvcGVydHkgaW1wbGVtZW50YXRpb25cbm1vZHVsZS5leHBvcnRzID0gIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1kZWZpbmVwcm9wZXJ0eSAtLSByZXF1aXJlZCBmb3IgdGVzdGluZ1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAxLCB7IGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gNzsgfSB9KVsxXSAhPT0gNztcbn0pO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9ICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1mdW5jdGlvbi1wcm90b3R5cGUtYmluZCAtLSBzYWZlXG4gIHZhciB0ZXN0ID0gZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9LmJpbmQoKTtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXByb3RvdHlwZS1idWlsdGlucyAtLSBzYWZlXG4gIHJldHVybiB0eXBlb2YgdGVzdCAhPSAnZnVuY3Rpb24nIHx8IHRlc3QuaGFzT3duUHJvcGVydHkoJ3Byb3RvdHlwZScpO1xufSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIE5BVElWRV9CSU5EID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWJpbmQtbmF0aXZlJyk7XG5cbnZhciBjYWxsID0gRnVuY3Rpb24ucHJvdG90eXBlLmNhbGw7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tZnVuY3Rpb24tcHJvdG90eXBlLWJpbmQgLS0gc2FmZVxubW9kdWxlLmV4cG9ydHMgPSBOQVRJVkVfQklORCA/IGNhbGwuYmluZChjYWxsKSA6IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGNhbGwuYXBwbHkoY2FsbCwgYXJndW1lbnRzKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyICRwcm9wZXJ0eUlzRW51bWVyYWJsZSA9IHt9LnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1nZXRvd25wcm9wZXJ0eWRlc2NyaXB0b3IgLS0gc2FmZVxudmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbi8vIE5hc2hvcm4gfiBKREs4IGJ1Z1xudmFyIE5BU0hPUk5fQlVHID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yICYmICEkcHJvcGVydHlJc0VudW1lcmFibGUuY2FsbCh7IDE6IDIgfSwgMSk7XG5cbi8vIGBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlYCBtZXRob2QgaW1wbGVtZW50YXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eWlzZW51bWVyYWJsZVxuZXhwb3J0cy5mID0gTkFTSE9STl9CVUcgPyBmdW5jdGlvbiBwcm9wZXJ0eUlzRW51bWVyYWJsZShWKSB7XG4gIHZhciBkZXNjcmlwdG9yID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRoaXMsIFYpO1xuICByZXR1cm4gISFkZXNjcmlwdG9yICYmIGRlc2NyaXB0b3IuZW51bWVyYWJsZTtcbn0gOiAkcHJvcGVydHlJc0VudW1lcmFibGU7XG4iLCAiJ3VzZSBzdHJpY3QnO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYml0bWFwLCB2YWx1ZSkge1xuICByZXR1cm4ge1xuICAgIGVudW1lcmFibGU6ICEoYml0bWFwICYgMSksXG4gICAgY29uZmlndXJhYmxlOiAhKGJpdG1hcCAmIDIpLFxuICAgIHdyaXRhYmxlOiAhKGJpdG1hcCAmIDQpLFxuICAgIHZhbHVlOiB2YWx1ZVxuICB9O1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgTkFUSVZFX0JJTkQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tYmluZC1uYXRpdmUnKTtcblxudmFyIEZ1bmN0aW9uUHJvdG90eXBlID0gRnVuY3Rpb24ucHJvdG90eXBlO1xudmFyIGNhbGwgPSBGdW5jdGlvblByb3RvdHlwZS5jYWxsO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLWZ1bmN0aW9uLXByb3RvdHlwZS1iaW5kIC0tIHNhZmVcbnZhciB1bmN1cnJ5VGhpc1dpdGhCaW5kID0gTkFUSVZFX0JJTkQgJiYgRnVuY3Rpb25Qcm90b3R5cGUuYmluZC5iaW5kKGNhbGwsIGNhbGwpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE5BVElWRV9CSU5EID8gdW5jdXJyeVRoaXNXaXRoQmluZCA6IGZ1bmN0aW9uIChmbikge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBjYWxsLmFwcGx5KGZuLCBhcmd1bWVudHMpO1xuICB9O1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG5cbnZhciB0b1N0cmluZyA9IHVuY3VycnlUaGlzKHt9LnRvU3RyaW5nKTtcbnZhciBzdHJpbmdTbGljZSA9IHVuY3VycnlUaGlzKCcnLnNsaWNlKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHN0cmluZ1NsaWNlKHRvU3RyaW5nKGl0KSwgOCwgLTEpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBjbGFzc29mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NsYXNzb2YtcmF3Jyk7XG5cbnZhciAkT2JqZWN0ID0gT2JqZWN0O1xudmFyIHNwbGl0ID0gdW5jdXJyeVRoaXMoJycuc3BsaXQpO1xuXG4vLyBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIGFuZCBub24tZW51bWVyYWJsZSBvbGQgVjggc3RyaW5nc1xubW9kdWxlLmV4cG9ydHMgPSBmYWlscyhmdW5jdGlvbiAoKSB7XG4gIC8vIHRocm93cyBhbiBlcnJvciBpbiByaGlubywgc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9tb3ppbGxhL3JoaW5vL2lzc3Vlcy8zNDZcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXByb3RvdHlwZS1idWlsdGlucyAtLSBzYWZlXG4gIHJldHVybiAhJE9iamVjdCgneicpLnByb3BlcnR5SXNFbnVtZXJhYmxlKDApO1xufSkgPyBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGNsYXNzb2YoaXQpID09PSAnU3RyaW5nJyA/IHNwbGl0KGl0LCAnJykgOiAkT2JqZWN0KGl0KTtcbn0gOiAkT2JqZWN0O1xuIiwgIid1c2Ugc3RyaWN0Jztcbi8vIHdlIGNhbid0IHVzZSBqdXN0IGBpdCA9PSBudWxsYCBzaW5jZSBvZiBgZG9jdW1lbnQuYWxsYCBzcGVjaWFsIGNhc2Vcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtSXNIVE1MRERBLWludGVybmFsLXNsb3QtYWVjXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXQgPT09IG51bGwgfHwgaXQgPT09IHVuZGVmaW5lZDtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGlzTnVsbE9yVW5kZWZpbmVkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW51bGwtb3ItdW5kZWZpbmVkJyk7XG5cbnZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xuXG4vLyBgUmVxdWlyZU9iamVjdENvZXJjaWJsZWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXJlcXVpcmVvYmplY3Rjb2VyY2libGVcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmIChpc051bGxPclVuZGVmaW5lZChpdCkpIHRocm93IG5ldyAkVHlwZUVycm9yKFwiQ2FuJ3QgY2FsbCBtZXRob2Qgb24gXCIgKyBpdCk7XG4gIHJldHVybiBpdDtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xuLy8gdG9PYmplY3Qgd2l0aCBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIHN0cmluZ3NcbnZhciBJbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2luZGV4ZWQtb2JqZWN0Jyk7XG52YXIgcmVxdWlyZU9iamVjdENvZXJjaWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZXF1aXJlLW9iamVjdC1jb2VyY2libGUnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIEluZGV4ZWRPYmplY3QocmVxdWlyZU9iamVjdENvZXJjaWJsZShpdCkpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLUlzSFRNTEREQS1pbnRlcm5hbC1zbG90XG52YXIgZG9jdW1lbnRBbGwgPSB0eXBlb2YgZG9jdW1lbnQgPT0gJ29iamVjdCcgJiYgZG9jdW1lbnQuYWxsO1xuXG4vLyBgSXNDYWxsYWJsZWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWlzY2FsbGFibGVcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSB1bmljb3JuL25vLXR5cGVvZi11bmRlZmluZWQgLS0gcmVxdWlyZWQgZm9yIHRlc3Rpbmdcbm1vZHVsZS5leHBvcnRzID0gdHlwZW9mIGRvY3VtZW50QWxsID09ICd1bmRlZmluZWQnICYmIGRvY3VtZW50QWxsICE9PSB1bmRlZmluZWQgPyBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmd1bWVudCA9PSAnZnVuY3Rpb24nIHx8IGFyZ3VtZW50ID09PSBkb2N1bWVudEFsbDtcbn0gOiBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmd1bWVudCA9PSAnZnVuY3Rpb24nO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gdHlwZW9mIGl0ID09ICdvYmplY3QnID8gaXQgIT09IG51bGwgOiBpc0NhbGxhYmxlKGl0KTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbFRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsLXRoaXMnKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG5cbnZhciBhRnVuY3Rpb24gPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgcmV0dXJuIGlzQ2FsbGFibGUoYXJndW1lbnQpID8gYXJndW1lbnQgOiB1bmRlZmluZWQ7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChuYW1lc3BhY2UsIG1ldGhvZCkge1xuICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA8IDIgPyBhRnVuY3Rpb24oZ2xvYmFsVGhpc1tuYW1lc3BhY2VdKSA6IGdsb2JhbFRoaXNbbmFtZXNwYWNlXSAmJiBnbG9iYWxUaGlzW25hbWVzcGFjZV1bbWV0aG9kXTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHVuY3VycnlUaGlzKHt9LmlzUHJvdG90eXBlT2YpO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWxUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbC10aGlzJyk7XG5cbnZhciBuYXZpZ2F0b3IgPSBnbG9iYWxUaGlzLm5hdmlnYXRvcjtcbnZhciB1c2VyQWdlbnQgPSBuYXZpZ2F0b3IgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudDtcblxubW9kdWxlLmV4cG9ydHMgPSB1c2VyQWdlbnQgPyBTdHJpbmcodXNlckFnZW50KSA6ICcnO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWxUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbC10aGlzJyk7XG52YXIgdXNlckFnZW50ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Vudmlyb25tZW50LXVzZXItYWdlbnQnKTtcblxudmFyIHByb2Nlc3MgPSBnbG9iYWxUaGlzLnByb2Nlc3M7XG52YXIgRGVubyA9IGdsb2JhbFRoaXMuRGVubztcbnZhciB2ZXJzaW9ucyA9IHByb2Nlc3MgJiYgcHJvY2Vzcy52ZXJzaW9ucyB8fCBEZW5vICYmIERlbm8udmVyc2lvbjtcbnZhciB2OCA9IHZlcnNpb25zICYmIHZlcnNpb25zLnY4O1xudmFyIG1hdGNoLCB2ZXJzaW9uO1xuXG5pZiAodjgpIHtcbiAgbWF0Y2ggPSB2OC5zcGxpdCgnLicpO1xuICAvLyBpbiBvbGQgQ2hyb21lLCB2ZXJzaW9ucyBvZiBWOCBpc24ndCBWOCA9IENocm9tZSAvIDEwXG4gIC8vIGJ1dCB0aGVpciBjb3JyZWN0IHZlcnNpb25zIGFyZSBub3QgaW50ZXJlc3RpbmcgZm9yIHVzXG4gIHZlcnNpb24gPSBtYXRjaFswXSA+IDAgJiYgbWF0Y2hbMF0gPCA0ID8gMSA6ICsobWF0Y2hbMF0gKyBtYXRjaFsxXSk7XG59XG5cbi8vIEJyb3dzZXJGUyBOb2RlSlMgYHByb2Nlc3NgIHBvbHlmaWxsIGluY29ycmVjdGx5IHNldCBgLnY4YCB0byBgMC4wYFxuLy8gc28gY2hlY2sgYHVzZXJBZ2VudGAgZXZlbiBpZiBgLnY4YCBleGlzdHMsIGJ1dCAwXG5pZiAoIXZlcnNpb24gJiYgdXNlckFnZW50KSB7XG4gIG1hdGNoID0gdXNlckFnZW50Lm1hdGNoKC9FZGdlXFwvKFxcZCspLyk7XG4gIGlmICghbWF0Y2ggfHwgbWF0Y2hbMV0gPj0gNzQpIHtcbiAgICBtYXRjaCA9IHVzZXJBZ2VudC5tYXRjaCgvQ2hyb21lXFwvKFxcZCspLyk7XG4gICAgaWYgKG1hdGNoKSB2ZXJzaW9uID0gK21hdGNoWzFdO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdmVyc2lvbjtcbiIsICIndXNlIHN0cmljdCc7XG4vKiBlc2xpbnQtZGlzYWJsZSBlcy9uby1zeW1ib2wgLS0gcmVxdWlyZWQgZm9yIHRlc3RpbmcgKi9cbnZhciBWOF9WRVJTSU9OID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Vudmlyb25tZW50LXY4LXZlcnNpb24nKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGdsb2JhbFRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsLXRoaXMnKTtcblxudmFyICRTdHJpbmcgPSBnbG9iYWxUaGlzLlN0cmluZztcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1nZXRvd25wcm9wZXJ0eXN5bWJvbHMgLS0gcmVxdWlyZWQgZm9yIHRlc3Rpbmdcbm1vZHVsZS5leHBvcnRzID0gISFPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzICYmICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gIHZhciBzeW1ib2wgPSBTeW1ib2woJ3N5bWJvbCBkZXRlY3Rpb24nKTtcbiAgLy8gQ2hyb21lIDM4IFN5bWJvbCBoYXMgaW5jb3JyZWN0IHRvU3RyaW5nIGNvbnZlcnNpb25cbiAgLy8gYGdldC1vd24tcHJvcGVydHktc3ltYm9sc2AgcG9seWZpbGwgc3ltYm9scyBjb252ZXJ0ZWQgdG8gb2JqZWN0IGFyZSBub3QgU3ltYm9sIGluc3RhbmNlc1xuICAvLyBuYjogRG8gbm90IGNhbGwgYFN0cmluZ2AgZGlyZWN0bHkgdG8gYXZvaWQgdGhpcyBiZWluZyBvcHRpbWl6ZWQgb3V0IHRvIGBzeW1ib2wrJydgIHdoaWNoIHdpbGwsXG4gIC8vIG9mIGNvdXJzZSwgZmFpbC5cbiAgcmV0dXJuICEkU3RyaW5nKHN5bWJvbCkgfHwgIShPYmplY3Qoc3ltYm9sKSBpbnN0YW5jZW9mIFN5bWJvbCkgfHxcbiAgICAvLyBDaHJvbWUgMzgtNDAgc3ltYm9scyBhcmUgbm90IGluaGVyaXRlZCBmcm9tIERPTSBjb2xsZWN0aW9ucyBwcm90b3R5cGVzIHRvIGluc3RhbmNlc1xuICAgICFTeW1ib2wuc2hhbSAmJiBWOF9WRVJTSU9OICYmIFY4X1ZFUlNJT04gPCA0MTtcbn0pO1xuIiwgIid1c2Ugc3RyaWN0Jztcbi8qIGVzbGludC1kaXNhYmxlIGVzL25vLXN5bWJvbCAtLSByZXF1aXJlZCBmb3IgdGVzdGluZyAqL1xudmFyIE5BVElWRV9TWU1CT0wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc3ltYm9sLWNvbnN0cnVjdG9yLWRldGVjdGlvbicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE5BVElWRV9TWU1CT0wgJiZcbiAgIVN5bWJvbC5zaGFtICYmXG4gIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT0gJ3N5bWJvbCc7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGdldEJ1aWx0SW4gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LWJ1aWx0LWluJyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xudmFyIGlzUHJvdG90eXBlT2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWlzLXByb3RvdHlwZS1vZicpO1xudmFyIFVTRV9TWU1CT0xfQVNfVUlEID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3VzZS1zeW1ib2wtYXMtdWlkJyk7XG5cbnZhciAkT2JqZWN0ID0gT2JqZWN0O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFVTRV9TWU1CT0xfQVNfVUlEID8gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiB0eXBlb2YgaXQgPT0gJ3N5bWJvbCc7XG59IDogZnVuY3Rpb24gKGl0KSB7XG4gIHZhciAkU3ltYm9sID0gZ2V0QnVpbHRJbignU3ltYm9sJyk7XG4gIHJldHVybiBpc0NhbGxhYmxlKCRTeW1ib2wpICYmIGlzUHJvdG90eXBlT2YoJFN5bWJvbC5wcm90b3R5cGUsICRPYmplY3QoaXQpKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyICRTdHJpbmcgPSBTdHJpbmc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuICRTdHJpbmcoYXJndW1lbnQpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiAnT2JqZWN0JztcbiAgfVxufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xudmFyIHRyeVRvU3RyaW5nID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RyeS10by1zdHJpbmcnKTtcblxudmFyICRUeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG5cbi8vIGBBc3NlcnQ6IElzQ2FsbGFibGUoYXJndW1lbnQpIGlzIHRydWVgXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICBpZiAoaXNDYWxsYWJsZShhcmd1bWVudCkpIHJldHVybiBhcmd1bWVudDtcbiAgdGhyb3cgbmV3ICRUeXBlRXJyb3IodHJ5VG9TdHJpbmcoYXJndW1lbnQpICsgJyBpcyBub3QgYSBmdW5jdGlvbicpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgYUNhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2EtY2FsbGFibGUnKTtcbnZhciBpc051bGxPclVuZGVmaW5lZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1udWxsLW9yLXVuZGVmaW5lZCcpO1xuXG4vLyBgR2V0TWV0aG9kYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtZ2V0bWV0aG9kXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChWLCBQKSB7XG4gIHZhciBmdW5jID0gVltQXTtcbiAgcmV0dXJuIGlzTnVsbE9yVW5kZWZpbmVkKGZ1bmMpID8gdW5kZWZpbmVkIDogYUNhbGxhYmxlKGZ1bmMpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgY2FsbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1jYWxsJyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xuXG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcblxuLy8gYE9yZGluYXJ5VG9QcmltaXRpdmVgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vcmRpbmFyeXRvcHJpbWl0aXZlXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpbnB1dCwgcHJlZikge1xuICB2YXIgZm4sIHZhbDtcbiAgaWYgKHByZWYgPT09ICdzdHJpbmcnICYmIGlzQ2FsbGFibGUoZm4gPSBpbnB1dC50b1N0cmluZykgJiYgIWlzT2JqZWN0KHZhbCA9IGNhbGwoZm4sIGlucHV0KSkpIHJldHVybiB2YWw7XG4gIGlmIChpc0NhbGxhYmxlKGZuID0gaW5wdXQudmFsdWVPZikgJiYgIWlzT2JqZWN0KHZhbCA9IGNhbGwoZm4sIGlucHV0KSkpIHJldHVybiB2YWw7XG4gIGlmIChwcmVmICE9PSAnc3RyaW5nJyAmJiBpc0NhbGxhYmxlKGZuID0gaW5wdXQudG9TdHJpbmcpICYmICFpc09iamVjdCh2YWwgPSBjYWxsKGZuLCBpbnB1dCkpKSByZXR1cm4gdmFsO1xuICB0aHJvdyBuZXcgJFR5cGVFcnJvcihcIkNhbid0IGNvbnZlcnQgb2JqZWN0IHRvIHByaW1pdGl2ZSB2YWx1ZVwiKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xubW9kdWxlLmV4cG9ydHMgPSBmYWxzZTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsVGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwtdGhpcycpO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWRlZmluZXByb3BlcnR5IC0tIHNhZmVcbnZhciBkZWZpbmVQcm9wZXJ0eSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICB0cnkge1xuICAgIGRlZmluZVByb3BlcnR5KGdsb2JhbFRoaXMsIGtleSwgeyB2YWx1ZTogdmFsdWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgZ2xvYmFsVGhpc1trZXldID0gdmFsdWU7XG4gIH0gcmV0dXJuIHZhbHVlO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgSVNfUFVSRSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1wdXJlJyk7XG52YXIgZ2xvYmFsVGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwtdGhpcycpO1xudmFyIGRlZmluZUdsb2JhbFByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RlZmluZS1nbG9iYWwtcHJvcGVydHknKTtcblxudmFyIFNIQVJFRCA9ICdfX2NvcmUtanNfc2hhcmVkX18nO1xudmFyIHN0b3JlID0gbW9kdWxlLmV4cG9ydHMgPSBnbG9iYWxUaGlzW1NIQVJFRF0gfHwgZGVmaW5lR2xvYmFsUHJvcGVydHkoU0hBUkVELCB7fSk7XG5cbihzdG9yZS52ZXJzaW9ucyB8fCAoc3RvcmUudmVyc2lvbnMgPSBbXSkpLnB1c2goe1xuICB2ZXJzaW9uOiAnMy40OS4wJyxcbiAgbW9kZTogSVNfUFVSRSA/ICdwdXJlJyA6ICdnbG9iYWwnLFxuICBjb3B5cmlnaHQ6ICfCqSAyMDEz4oCTMjAyNSBEZW5pcyBQdXNoa2FyZXYgKHpsb2lyb2NrLnJ1KSwgMjAyNeKAkzIwMjYgQ29yZUpTIENvbXBhbnkgKGNvcmUtanMuaW8pLiBBbGwgcmlnaHRzIHJlc2VydmVkLicsXG4gIGxpY2Vuc2U6ICdodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9ibG9iL3YzLjQ5LjAvTElDRU5TRScsXG4gIHNvdXJjZTogJ2h0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzJ1xufSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHN0b3JlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZC1zdG9yZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gIHJldHVybiBzdG9yZVtrZXldIHx8IChzdG9yZVtrZXldID0gdmFsdWUgfHwge30pO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgcmVxdWlyZU9iamVjdENvZXJjaWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZXF1aXJlLW9iamVjdC1jb2VyY2libGUnKTtcblxudmFyICRPYmplY3QgPSBPYmplY3Q7XG5cbi8vIGBUb09iamVjdGAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXRvb2JqZWN0XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICByZXR1cm4gJE9iamVjdChyZXF1aXJlT2JqZWN0Q29lcmNpYmxlKGFyZ3VtZW50KSk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1vYmplY3QnKTtcblxudmFyIGhhc093blByb3BlcnR5ID0gdW5jdXJyeVRoaXMoe30uaGFzT3duUHJvcGVydHkpO1xuXG4vLyBgSGFzT3duUHJvcGVydHlgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1oYXNvd25wcm9wZXJ0eVxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1oYXNvd24gLS0gc2FmZVxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuaGFzT3duIHx8IGZ1bmN0aW9uIGhhc093bihpdCwga2V5KSB7XG4gIHJldHVybiBoYXNPd25Qcm9wZXJ0eSh0b09iamVjdChpdCksIGtleSk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcblxudmFyIGlkID0gMDtcbnZhciBwb3N0Zml4ID0gTWF0aC5yYW5kb20oKTtcbnZhciB0b1N0cmluZyA9IHVuY3VycnlUaGlzKDEuMS50b1N0cmluZyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4gJ1N5bWJvbCgnICsgKGtleSA9PT0gdW5kZWZpbmVkID8gJycgOiBrZXkpICsgJylfJyArIHRvU3RyaW5nKCsraWQgKyBwb3N0Zml4LCAzNik7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWxUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbC10aGlzJyk7XG52YXIgc2hhcmVkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZCcpO1xudmFyIGhhc093biA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMtb3duLXByb3BlcnR5Jyk7XG52YXIgdWlkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3VpZCcpO1xudmFyIE5BVElWRV9TWU1CT0wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc3ltYm9sLWNvbnN0cnVjdG9yLWRldGVjdGlvbicpO1xudmFyIFVTRV9TWU1CT0xfQVNfVUlEID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3VzZS1zeW1ib2wtYXMtdWlkJyk7XG5cbnZhciBTeW1ib2wgPSBnbG9iYWxUaGlzLlN5bWJvbDtcbnZhciBXZWxsS25vd25TeW1ib2xzU3RvcmUgPSBzaGFyZWQoJ3drcycpO1xudmFyIGNyZWF0ZVdlbGxLbm93blN5bWJvbCA9IFVTRV9TWU1CT0xfQVNfVUlEID8gU3ltYm9sWydmb3InXSB8fCBTeW1ib2wgOiBTeW1ib2wgJiYgU3ltYm9sLndpdGhvdXRTZXR0ZXIgfHwgdWlkO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIGlmICghaGFzT3duKFdlbGxLbm93blN5bWJvbHNTdG9yZSwgbmFtZSkpIHtcbiAgICBXZWxsS25vd25TeW1ib2xzU3RvcmVbbmFtZV0gPSBOQVRJVkVfU1lNQk9MICYmIGhhc093bihTeW1ib2wsIG5hbWUpXG4gICAgICA/IFN5bWJvbFtuYW1lXVxuICAgICAgOiBjcmVhdGVXZWxsS25vd25TeW1ib2woJ1N5bWJvbC4nICsgbmFtZSk7XG4gIH0gcmV0dXJuIFdlbGxLbm93blN5bWJvbHNTdG9yZVtuYW1lXTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGNhbGwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tY2FsbCcpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xudmFyIGlzU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLXN5bWJvbCcpO1xudmFyIGdldE1ldGhvZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtbWV0aG9kJyk7XG52YXIgb3JkaW5hcnlUb1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vcmRpbmFyeS10by1wcmltaXRpdmUnKTtcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcblxudmFyICRUeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG52YXIgVE9fUFJJTUlUSVZFID0gd2VsbEtub3duU3ltYm9sKCd0b1ByaW1pdGl2ZScpO1xuXG4vLyBgVG9QcmltaXRpdmVgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy10b3ByaW1pdGl2ZVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaW5wdXQsIHByZWYpIHtcbiAgaWYgKCFpc09iamVjdChpbnB1dCkgfHwgaXNTeW1ib2woaW5wdXQpKSByZXR1cm4gaW5wdXQ7XG4gIHZhciBleG90aWNUb1ByaW0gPSBnZXRNZXRob2QoaW5wdXQsIFRPX1BSSU1JVElWRSk7XG4gIHZhciByZXN1bHQ7XG4gIGlmIChleG90aWNUb1ByaW0pIHtcbiAgICBpZiAocHJlZiA9PT0gdW5kZWZpbmVkKSBwcmVmID0gJ2RlZmF1bHQnO1xuICAgIHJlc3VsdCA9IGNhbGwoZXhvdGljVG9QcmltLCBpbnB1dCwgcHJlZik7XG4gICAgaWYgKCFpc09iamVjdChyZXN1bHQpIHx8IGlzU3ltYm9sKHJlc3VsdCkpIHJldHVybiByZXN1bHQ7XG4gICAgdGhyb3cgbmV3ICRUeXBlRXJyb3IoXCJDYW4ndCBjb252ZXJ0IG9iamVjdCB0byBwcmltaXRpdmUgdmFsdWVcIik7XG4gIH1cbiAgaWYgKHByZWYgPT09IHVuZGVmaW5lZCkgcHJlZiA9ICdudW1iZXInO1xuICByZXR1cm4gb3JkaW5hcnlUb1ByaW1pdGl2ZShpbnB1dCwgcHJlZik7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB0b1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1wcmltaXRpdmUnKTtcbnZhciBpc1N5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1zeW1ib2wnKTtcblxuLy8gYFRvUHJvcGVydHlLZXlgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy10b3Byb3BlcnR5a2V5XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICB2YXIga2V5ID0gdG9QcmltaXRpdmUoYXJndW1lbnQsICdzdHJpbmcnKTtcbiAgcmV0dXJuIGlzU3ltYm9sKGtleSkgPyBrZXkgOiBrZXkgKyAnJztcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbFRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsLXRoaXMnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcblxudmFyIGRvY3VtZW50ID0gZ2xvYmFsVGhpcy5kb2N1bWVudDtcbi8vIHR5cGVvZiBkb2N1bWVudC5jcmVhdGVFbGVtZW50IGlzICdvYmplY3QnIGluIG9sZCBJRVxudmFyIEVYSVNUUyA9IGlzT2JqZWN0KGRvY3VtZW50KSAmJiBpc09iamVjdChkb2N1bWVudC5jcmVhdGVFbGVtZW50KTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIEVYSVNUUyA/IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoaXQpIDoge307XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgY3JlYXRlRWxlbWVudCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kb2N1bWVudC1jcmVhdGUtZWxlbWVudCcpO1xuXG4vLyBUaGFua3MgdG8gSUU4IGZvciBpdHMgZnVubnkgZGVmaW5lUHJvcGVydHlcbm1vZHVsZS5leHBvcnRzID0gIURFU0NSSVBUT1JTICYmICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZGVmaW5lcHJvcGVydHkgLS0gcmVxdWlyZWQgZm9yIHRlc3RpbmdcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjcmVhdGVFbGVtZW50KCdkaXYnKSwgJ2EnLCB7XG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9XG4gIH0pLmEgIT09IDc7XG59KTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBjYWxsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWNhbGwnKTtcbnZhciBwcm9wZXJ0eUlzRW51bWVyYWJsZU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtcHJvcGVydHktaXMtZW51bWVyYWJsZScpO1xudmFyIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHktZGVzY3JpcHRvcicpO1xudmFyIHRvSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbmRleGVkLW9iamVjdCcpO1xudmFyIHRvUHJvcGVydHlLZXkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tcHJvcGVydHkta2V5Jyk7XG52YXIgaGFzT3duID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcy1vd24tcHJvcGVydHknKTtcbnZhciBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pZTgtZG9tLWRlZmluZScpO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5ZGVzY3JpcHRvciAtLSBzYWZlXG52YXIgJGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbi8vIGBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb2JqZWN0LmdldG93bnByb3BlcnR5ZGVzY3JpcHRvclxuZXhwb3J0cy5mID0gREVTQ1JJUFRPUlMgPyAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIDogZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApIHtcbiAgTyA9IHRvSW5kZXhlZE9iamVjdChPKTtcbiAgUCA9IHRvUHJvcGVydHlLZXkoUCk7XG4gIGlmIChJRThfRE9NX0RFRklORSkgdHJ5IHtcbiAgICByZXR1cm4gJGdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHsgLyogZW1wdHkgKi8gfVxuICBpZiAoaGFzT3duKE8sIFApKSByZXR1cm4gY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yKCFjYWxsKHByb3BlcnR5SXNFbnVtZXJhYmxlTW9kdWxlLmYsIE8sIFApLCBPW1BdKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcblxuLy8gVjggfiBDaHJvbWUgMzYtXG4vLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0zMzM0XG5tb2R1bGUuZXhwb3J0cyA9IERFU0NSSVBUT1JTICYmIGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1kZWZpbmVwcm9wZXJ0eSAtLSByZXF1aXJlZCBmb3IgdGVzdGluZ1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGZ1bmN0aW9uICgpIHsgLyogZW1wdHkgKi8gfSwgJ3Byb3RvdHlwZScsIHtcbiAgICB2YWx1ZTogNDIsXG4gICAgd3JpdGFibGU6IGZhbHNlXG4gIH0pLnByb3RvdHlwZSAhPT0gNDI7XG59KTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG5cbnZhciAkU3RyaW5nID0gU3RyaW5nO1xudmFyICRUeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG5cbi8vIGBBc3NlcnQ6IFR5cGUoYXJndW1lbnQpIGlzIE9iamVjdGBcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIGlmIChpc09iamVjdChhcmd1bWVudCkpIHJldHVybiBhcmd1bWVudDtcbiAgdGhyb3cgbmV3ICRUeXBlRXJyb3IoJFN0cmluZyhhcmd1bWVudCkgKyAnIGlzIG5vdCBhbiBvYmplY3QnKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaWU4LWRvbS1kZWZpbmUnKTtcbnZhciBWOF9QUk9UT1RZUEVfREVGSU5FX0JVRyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy92OC1wcm90b3R5cGUtZGVmaW5lLWJ1ZycpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xudmFyIHRvUHJvcGVydHlLZXkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tcHJvcGVydHkta2V5Jyk7XG5cbnZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1kZWZpbmVwcm9wZXJ0eSAtLSBzYWZlXG52YXIgJGRlZmluZVByb3BlcnR5ID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1nZXRvd25wcm9wZXJ0eWRlc2NyaXB0b3IgLS0gc2FmZVxudmFyICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xudmFyIEVOVU1FUkFCTEUgPSAnZW51bWVyYWJsZSc7XG52YXIgQ09ORklHVVJBQkxFID0gJ2NvbmZpZ3VyYWJsZSc7XG52YXIgV1JJVEFCTEUgPSAnd3JpdGFibGUnO1xuXG4vLyBgT2JqZWN0LmRlZmluZVByb3BlcnR5YCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb2JqZWN0LmRlZmluZXByb3BlcnR5XG5leHBvcnRzLmYgPSBERVNDUklQVE9SUyA/IFY4X1BST1RPVFlQRV9ERUZJTkVfQlVHID8gZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcykge1xuICBhbk9iamVjdChPKTtcbiAgUCA9IHRvUHJvcGVydHlLZXkoUCk7XG4gIGFuT2JqZWN0KEF0dHJpYnV0ZXMpO1xuICBpZiAodHlwZW9mIE8gPT09ICdmdW5jdGlvbicgJiYgUCA9PT0gJ3Byb3RvdHlwZScgJiYgJ3ZhbHVlJyBpbiBBdHRyaWJ1dGVzICYmIFdSSVRBQkxFIGluIEF0dHJpYnV0ZXMgJiYgIUF0dHJpYnV0ZXNbV1JJVEFCTEVdKSB7XG4gICAgdmFyIGN1cnJlbnQgPSAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApO1xuICAgIGlmIChjdXJyZW50ICYmIGN1cnJlbnRbV1JJVEFCTEVdKSB7XG4gICAgICBPW1BdID0gQXR0cmlidXRlcy52YWx1ZTtcbiAgICAgIEF0dHJpYnV0ZXMgPSB7XG4gICAgICAgIGNvbmZpZ3VyYWJsZTogQ09ORklHVVJBQkxFIGluIEF0dHJpYnV0ZXMgPyBBdHRyaWJ1dGVzW0NPTkZJR1VSQUJMRV0gOiBjdXJyZW50W0NPTkZJR1VSQUJMRV0sXG4gICAgICAgIGVudW1lcmFibGU6IEVOVU1FUkFCTEUgaW4gQXR0cmlidXRlcyA/IEF0dHJpYnV0ZXNbRU5VTUVSQUJMRV0gOiBjdXJyZW50W0VOVU1FUkFCTEVdLFxuICAgICAgICB3cml0YWJsZTogZmFsc2VcbiAgICAgIH07XG4gICAgfVxuICB9IHJldHVybiAkZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcyk7XG59IDogJGRlZmluZVByb3BlcnR5IDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcykge1xuICBhbk9iamVjdChPKTtcbiAgUCA9IHRvUHJvcGVydHlLZXkoUCk7XG4gIGFuT2JqZWN0KEF0dHJpYnV0ZXMpO1xuICBpZiAoSUU4X0RPTV9ERUZJTkUpIHRyeSB7XG4gICAgcmV0dXJuICRkZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHsgLyogZW1wdHkgKi8gfVxuICBpZiAoJ2dldCcgaW4gQXR0cmlidXRlcyB8fCAnc2V0JyBpbiBBdHRyaWJ1dGVzKSB0aHJvdyBuZXcgJFR5cGVFcnJvcignQWNjZXNzb3JzIG5vdCBzdXBwb3J0ZWQnKTtcbiAgaWYgKCd2YWx1ZScgaW4gQXR0cmlidXRlcykgT1tQXSA9IEF0dHJpYnV0ZXMudmFsdWU7XG4gIHJldHVybiBPO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBkZWZpbmVQcm9wZXJ0eU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5Jyk7XG52YXIgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eS1kZXNjcmlwdG9yJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gREVTQ1JJUFRPUlMgPyBmdW5jdGlvbiAob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIHJldHVybiBkZWZpbmVQcm9wZXJ0eU1vZHVsZS5mKG9iamVjdCwga2V5LCBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IoMSwgdmFsdWUpKTtcbn0gOiBmdW5jdGlvbiAob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIG9iamVjdFtrZXldID0gdmFsdWU7XG4gIHJldHVybiBvYmplY3Q7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIGhhc093biA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMtb3duLXByb3BlcnR5Jyk7XG5cbnZhciBGdW5jdGlvblByb3RvdHlwZSA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZ2V0b3ducHJvcGVydHlkZXNjcmlwdG9yIC0tIHNhZmVcbnZhciBnZXREZXNjcmlwdG9yID0gREVTQ1JJUFRPUlMgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxudmFyIEVYSVNUUyA9IGhhc093bihGdW5jdGlvblByb3RvdHlwZSwgJ25hbWUnKTtcbi8vIGFkZGl0aW9uYWwgcHJvdGVjdGlvbiBmcm9tIG1pbmlmaWVkIC8gbWFuZ2xlZCAvIGRyb3BwZWQgZnVuY3Rpb24gbmFtZXNcbnZhciBQUk9QRVIgPSBFWElTVFMgJiYgZnVuY3Rpb24gc29tZXRoaW5nKCkgeyAvKiBlbXB0eSAqLyB9Lm5hbWUgPT09ICdzb21ldGhpbmcnO1xudmFyIENPTkZJR1VSQUJMRSA9IEVYSVNUUyAmJiAoIURFU0NSSVBUT1JTIHx8IChERVNDUklQVE9SUyAmJiBnZXREZXNjcmlwdG9yKEZ1bmN0aW9uUHJvdG90eXBlLCAnbmFtZScpLmNvbmZpZ3VyYWJsZSkpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgRVhJU1RTOiBFWElTVFMsXG4gIFBST1BFUjogUFJPUEVSLFxuICBDT05GSUdVUkFCTEU6IENPTkZJR1VSQUJMRVxufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xudmFyIHN0b3JlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZC1zdG9yZScpO1xuXG52YXIgZnVuY3Rpb25Ub1N0cmluZyA9IHVuY3VycnlUaGlzKEZ1bmN0aW9uLnRvU3RyaW5nKTtcblxuLy8gdGhpcyBoZWxwZXIgYnJva2VuIGluIGBjb3JlLWpzQDMuNC4xLTMuNC40YCwgc28gd2UgY2FuJ3QgdXNlIGBzaGFyZWRgIGhlbHBlclxuaWYgKCFpc0NhbGxhYmxlKHN0b3JlLmluc3BlY3RTb3VyY2UpKSB7XG4gIHN0b3JlLmluc3BlY3RTb3VyY2UgPSBmdW5jdGlvbiAoaXQpIHtcbiAgICByZXR1cm4gZnVuY3Rpb25Ub1N0cmluZyhpdCk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3RvcmUuaW5zcGVjdFNvdXJjZTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsVGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwtdGhpcycpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcblxudmFyIFdlYWtNYXAgPSBnbG9iYWxUaGlzLldlYWtNYXA7XG5cbm1vZHVsZS5leHBvcnRzID0gaXNDYWxsYWJsZShXZWFrTWFwKSAmJiAvbmF0aXZlIGNvZGUvLnRlc3QoU3RyaW5nKFdlYWtNYXApKTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgc2hhcmVkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZCcpO1xudmFyIHVpZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy91aWQnKTtcblxudmFyIGtleXMgPSBzaGFyZWQoJ2tleXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHJldHVybiBrZXlzW2tleV0gfHwgKGtleXNba2V5XSA9IHVpZChrZXkpKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xubW9kdWxlLmV4cG9ydHMgPSB7fTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgTkFUSVZFX1dFQUtfTUFQID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlYWstbWFwLWJhc2ljLWRldGVjdGlvbicpO1xudmFyIGdsb2JhbFRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsLXRoaXMnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcbnZhciBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLW5vbi1lbnVtZXJhYmxlLXByb3BlcnR5Jyk7XG52YXIgaGFzT3duID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcy1vd24tcHJvcGVydHknKTtcbnZhciBzaGFyZWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkLXN0b3JlJyk7XG52YXIgc2hhcmVkS2V5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZC1rZXknKTtcbnZhciBoaWRkZW5LZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hpZGRlbi1rZXlzJyk7XG5cbnZhciBPQkpFQ1RfQUxSRUFEWV9JTklUSUFMSVpFRCA9ICdPYmplY3QgYWxyZWFkeSBpbml0aWFsaXplZCc7XG52YXIgVHlwZUVycm9yID0gZ2xvYmFsVGhpcy5UeXBlRXJyb3I7XG52YXIgV2Vha01hcCA9IGdsb2JhbFRoaXMuV2Vha01hcDtcbnZhciBzZXQsIGdldCwgaGFzO1xuXG52YXIgZW5mb3JjZSA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaGFzKGl0KSA/IGdldChpdCkgOiBzZXQoaXQsIHt9KTtcbn07XG5cbnZhciBnZXR0ZXJGb3IgPSBmdW5jdGlvbiAoVFlQRSkge1xuICByZXR1cm4gZnVuY3Rpb24gKGl0KSB7XG4gICAgdmFyIHN0YXRlO1xuICAgIGlmICghaXNPYmplY3QoaXQpIHx8IChzdGF0ZSA9IGdldChpdCkpLnR5cGUgIT09IFRZUEUpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0luY29tcGF0aWJsZSByZWNlaXZlciwgJyArIFRZUEUgKyAnIHJlcXVpcmVkJyk7XG4gICAgfSByZXR1cm4gc3RhdGU7XG4gIH07XG59O1xuXG5pZiAoTkFUSVZFX1dFQUtfTUFQIHx8IHNoYXJlZC5zdGF0ZSkge1xuICB2YXIgc3RvcmUgPSBzaGFyZWQuc3RhdGUgfHwgKHNoYXJlZC5zdGF0ZSA9IG5ldyBXZWFrTWFwKCkpO1xuICAvKiBlc2xpbnQtZGlzYWJsZSBuby1zZWxmLWFzc2lnbiAtLSBwcm90b3R5cGUgbWV0aG9kcyBwcm90ZWN0aW9uICovXG4gIHN0b3JlLmdldCA9IHN0b3JlLmdldDtcbiAgc3RvcmUuaGFzID0gc3RvcmUuaGFzO1xuICBzdG9yZS5zZXQgPSBzdG9yZS5zZXQ7XG4gIC8qIGVzbGludC1lbmFibGUgbm8tc2VsZi1hc3NpZ24gLS0gcHJvdG90eXBlIG1ldGhvZHMgcHJvdGVjdGlvbiAqL1xuICBzZXQgPSBmdW5jdGlvbiAoaXQsIG1ldGFkYXRhKSB7XG4gICAgaWYgKHN0b3JlLmhhcyhpdCkpIHRocm93IG5ldyBUeXBlRXJyb3IoT0JKRUNUX0FMUkVBRFlfSU5JVElBTElaRUQpO1xuICAgIG1ldGFkYXRhLmZhY2FkZSA9IGl0O1xuICAgIHN0b3JlLnNldChpdCwgbWV0YWRhdGEpO1xuICAgIHJldHVybiBtZXRhZGF0YTtcbiAgfTtcbiAgZ2V0ID0gZnVuY3Rpb24gKGl0KSB7XG4gICAgcmV0dXJuIHN0b3JlLmdldChpdCkgfHwge307XG4gIH07XG4gIGhhcyA9IGZ1bmN0aW9uIChpdCkge1xuICAgIHJldHVybiBzdG9yZS5oYXMoaXQpO1xuICB9O1xufSBlbHNlIHtcbiAgdmFyIFNUQVRFID0gc2hhcmVkS2V5KCdzdGF0ZScpO1xuICBoaWRkZW5LZXlzW1NUQVRFXSA9IHRydWU7XG4gIHNldCA9IGZ1bmN0aW9uIChpdCwgbWV0YWRhdGEpIHtcbiAgICBpZiAoaGFzT3duKGl0LCBTVEFURSkpIHRocm93IG5ldyBUeXBlRXJyb3IoT0JKRUNUX0FMUkVBRFlfSU5JVElBTElaRUQpO1xuICAgIG1ldGFkYXRhLmZhY2FkZSA9IGl0O1xuICAgIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eShpdCwgU1RBVEUsIG1ldGFkYXRhKTtcbiAgICByZXR1cm4gbWV0YWRhdGE7XG4gIH07XG4gIGdldCA9IGZ1bmN0aW9uIChpdCkge1xuICAgIHJldHVybiBoYXNPd24oaXQsIFNUQVRFKSA/IGl0W1NUQVRFXSA6IHt9O1xuICB9O1xuICBoYXMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgICByZXR1cm4gaGFzT3duKGl0LCBTVEFURSk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBzZXQ6IHNldCxcbiAgZ2V0OiBnZXQsXG4gIGhhczogaGFzLFxuICBlbmZvcmNlOiBlbmZvcmNlLFxuICBnZXR0ZXJGb3I6IGdldHRlckZvclxufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgaGFzT3duID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcy1vd24tcHJvcGVydHknKTtcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIENPTkZJR1VSQUJMRV9GVU5DVElPTl9OQU1FID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLW5hbWUnKS5DT05GSUdVUkFCTEU7XG52YXIgaW5zcGVjdFNvdXJjZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbnNwZWN0LXNvdXJjZScpO1xudmFyIEludGVybmFsU3RhdGVNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaW50ZXJuYWwtc3RhdGUnKTtcblxudmFyIGVuZm9yY2VJbnRlcm5hbFN0YXRlID0gSW50ZXJuYWxTdGF0ZU1vZHVsZS5lbmZvcmNlO1xudmFyIGdldEludGVybmFsU3RhdGUgPSBJbnRlcm5hbFN0YXRlTW9kdWxlLmdldDtcbnZhciAkU3RyaW5nID0gU3RyaW5nO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1kZWZpbmVwcm9wZXJ0eSAtLSBzYWZlXG52YXIgZGVmaW5lUHJvcGVydHkgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG52YXIgc3RyaW5nU2xpY2UgPSB1bmN1cnJ5VGhpcygnJy5zbGljZSk7XG52YXIgcmVwbGFjZSA9IHVuY3VycnlUaGlzKCcnLnJlcGxhY2UpO1xudmFyIGpvaW4gPSB1bmN1cnJ5VGhpcyhbXS5qb2luKTtcblxudmFyIENPTkZJR1VSQUJMRV9MRU5HVEggPSBERVNDUklQVE9SUyAmJiAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gZGVmaW5lUHJvcGVydHkoZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9LCAnbGVuZ3RoJywgeyB2YWx1ZTogOCB9KS5sZW5ndGggIT09IDg7XG59KTtcblxudmFyIFRFTVBMQVRFID0gU3RyaW5nKFN0cmluZykuc3BsaXQoJ1N0cmluZycpO1xuXG52YXIgbWFrZUJ1aWx0SW4gPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh2YWx1ZSwgbmFtZSwgb3B0aW9ucykge1xuICBpZiAoc3RyaW5nU2xpY2UoJFN0cmluZyhuYW1lKSwgMCwgNykgPT09ICdTeW1ib2woJykge1xuICAgIG5hbWUgPSAnWycgKyByZXBsYWNlKCRTdHJpbmcobmFtZSksIC9eU3ltYm9sXFwoKFteKV0qKVxcKS4qJC8sICckMScpICsgJ10nO1xuICB9XG4gIGlmIChvcHRpb25zICYmIG9wdGlvbnMuZ2V0dGVyKSBuYW1lID0gJ2dldCAnICsgbmFtZTtcbiAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5zZXR0ZXIpIG5hbWUgPSAnc2V0ICcgKyBuYW1lO1xuICBpZiAoIWhhc093bih2YWx1ZSwgJ25hbWUnKSB8fCAoQ09ORklHVVJBQkxFX0ZVTkNUSU9OX05BTUUgJiYgdmFsdWUubmFtZSAhPT0gbmFtZSkpIHtcbiAgICBpZiAoREVTQ1JJUFRPUlMpIGRlZmluZVByb3BlcnR5KHZhbHVlLCAnbmFtZScsIHsgdmFsdWU6IG5hbWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9KTtcbiAgICBlbHNlIHZhbHVlLm5hbWUgPSBuYW1lO1xuICB9XG4gIGlmIChDT05GSUdVUkFCTEVfTEVOR1RIICYmIG9wdGlvbnMgJiYgaGFzT3duKG9wdGlvbnMsICdhcml0eScpICYmIHZhbHVlLmxlbmd0aCAhPT0gb3B0aW9ucy5hcml0eSkge1xuICAgIGRlZmluZVByb3BlcnR5KHZhbHVlLCAnbGVuZ3RoJywgeyB2YWx1ZTogb3B0aW9ucy5hcml0eSB9KTtcbiAgfVxuICB0cnkge1xuICAgIGlmIChvcHRpb25zICYmIGhhc093bihvcHRpb25zLCAnY29uc3RydWN0b3InKSAmJiBvcHRpb25zLmNvbnN0cnVjdG9yKSB7XG4gICAgICBpZiAoREVTQ1JJUFRPUlMpIGRlZmluZVByb3BlcnR5KHZhbHVlLCAncHJvdG90eXBlJywgeyB3cml0YWJsZTogZmFsc2UgfSk7XG4gICAgLy8gaW4gVjggfiBDaHJvbWUgNTMsIHByb3RvdHlwZXMgb2Ygc29tZSBtZXRob2RzLCBsaWtlIGBBcnJheS5wcm90b3R5cGUudmFsdWVzYCwgYXJlIG5vbi13cml0YWJsZVxuICAgIH0gZWxzZSBpZiAodmFsdWUucHJvdG90eXBlKSB2YWx1ZS5wcm90b3R5cGUgPSB1bmRlZmluZWQ7XG4gIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGVtcHR5ICovIH1cbiAgdmFyIHN0YXRlID0gZW5mb3JjZUludGVybmFsU3RhdGUodmFsdWUpO1xuICBpZiAoIWhhc093bihzdGF0ZSwgJ3NvdXJjZScpKSB7XG4gICAgc3RhdGUuc291cmNlID0gam9pbihURU1QTEFURSwgdHlwZW9mIG5hbWUgPT0gJ3N0cmluZycgPyBuYW1lIDogJycpO1xuICB9IHJldHVybiB2YWx1ZTtcbn07XG5cbi8vIGFkZCBmYWtlIEZ1bmN0aW9uI3RvU3RyaW5nIGZvciBjb3JyZWN0IHdvcmsgd3JhcHBlZCBtZXRob2RzIC8gY29uc3RydWN0b3JzIHdpdGggbWV0aG9kcyBsaWtlIExvRGFzaCBpc05hdGl2ZVxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWV4dGVuZC1uYXRpdmUgLS0gcmVxdWlyZWRcbkZ1bmN0aW9uLnByb3RvdHlwZS50b1N0cmluZyA9IG1ha2VCdWlsdEluKGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICByZXR1cm4gaXNDYWxsYWJsZSh0aGlzKSAmJiBnZXRJbnRlcm5hbFN0YXRlKHRoaXMpLnNvdXJjZSB8fCBpbnNwZWN0U291cmNlKHRoaXMpO1xufSwgJ3RvU3RyaW5nJyk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcbnZhciBkZWZpbmVQcm9wZXJ0eU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5Jyk7XG52YXIgbWFrZUJ1aWx0SW4gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbWFrZS1idWlsdC1pbicpO1xudmFyIGRlZmluZUdsb2JhbFByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RlZmluZS1nbG9iYWwtcHJvcGVydHknKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoTywga2V5LCB2YWx1ZSwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIG9wdGlvbnMgPSB7fTtcbiAgdmFyIHNpbXBsZSA9IG9wdGlvbnMuZW51bWVyYWJsZTtcbiAgdmFyIG5hbWUgPSBvcHRpb25zLm5hbWUgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMubmFtZSA6IGtleTtcbiAgaWYgKGlzQ2FsbGFibGUodmFsdWUpKSBtYWtlQnVpbHRJbih2YWx1ZSwgbmFtZSwgb3B0aW9ucyk7XG4gIGlmIChvcHRpb25zLmdsb2JhbCkge1xuICAgIGlmIChzaW1wbGUpIE9ba2V5XSA9IHZhbHVlO1xuICAgIGVsc2UgZGVmaW5lR2xvYmFsUHJvcGVydHkoa2V5LCB2YWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICghb3B0aW9ucy51bnNhZmUpIGRlbGV0ZSBPW2tleV07XG4gICAgICBlbHNlIGlmIChPW2tleV0pIHNpbXBsZSA9IHRydWU7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHsgLyogZW1wdHkgKi8gfVxuICAgIGlmIChzaW1wbGUpIE9ba2V5XSA9IHZhbHVlO1xuICAgIGVsc2UgZGVmaW5lUHJvcGVydHlNb2R1bGUuZihPLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgY29uZmlndXJhYmxlOiAhb3B0aW9ucy5ub25Db25maWd1cmFibGUsXG4gICAgICB3cml0YWJsZTogIW9wdGlvbnMubm9uV3JpdGFibGVcbiAgICB9KTtcbiAgfSByZXR1cm4gTztcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGNlaWwgPSBNYXRoLmNlaWw7XG52YXIgZmxvb3IgPSBNYXRoLmZsb29yO1xuXG4vLyBgTWF0aC50cnVuY2AgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW1hdGgudHJ1bmNcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1tYXRoLXRydW5jIC0tIHNhZmVcbm1vZHVsZS5leHBvcnRzID0gTWF0aC50cnVuYyB8fCBmdW5jdGlvbiB0cnVuYyh4KSB7XG4gIHZhciBuID0gK3g7XG4gIHJldHVybiAobiA+IDAgPyBmbG9vciA6IGNlaWwpKG4pO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdHJ1bmMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbWF0aC10cnVuYycpO1xuXG4vLyBgVG9JbnRlZ2VyT3JJbmZpbml0eWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXRvaW50ZWdlcm9yaW5maW5pdHlcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHZhciBudW1iZXIgPSArYXJndW1lbnQ7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmUgLS0gTmFOIGNoZWNrXG4gIHJldHVybiBudW1iZXIgIT09IG51bWJlciB8fCBudW1iZXIgPT09IDAgPyAwIDogdHJ1bmMobnVtYmVyKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHRvSW50ZWdlck9ySW5maW5pdHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW50ZWdlci1vci1pbmZpbml0eScpO1xuXG52YXIgbWF4ID0gTWF0aC5tYXg7XG52YXIgbWluID0gTWF0aC5taW47XG5cbi8vIEhlbHBlciBmb3IgYSBwb3B1bGFyIHJlcGVhdGluZyBjYXNlIG9mIHRoZSBzcGVjOlxuLy8gTGV0IGludGVnZXIgYmUgPyBUb0ludGVnZXIoaW5kZXgpLlxuLy8gSWYgaW50ZWdlciA8IDAsIGxldCByZXN1bHQgYmUgbWF4KChsZW5ndGggKyBpbnRlZ2VyKSwgMCk7IGVsc2UgbGV0IHJlc3VsdCBiZSBtaW4oaW50ZWdlciwgbGVuZ3RoKS5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGluZGV4LCBsZW5ndGgpIHtcbiAgdmFyIGludGVnZXIgPSB0b0ludGVnZXJPckluZmluaXR5KGluZGV4KTtcbiAgcmV0dXJuIGludGVnZXIgPCAwID8gbWF4KGludGVnZXIgKyBsZW5ndGgsIDApIDogbWluKGludGVnZXIsIGxlbmd0aCk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB0b0ludGVnZXJPckluZmluaXR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWludGVnZXItb3ItaW5maW5pdHknKTtcblxudmFyIG1pbiA9IE1hdGgubWluO1xuXG4vLyBgVG9MZW5ndGhgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy10b2xlbmd0aFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgdmFyIGxlbiA9IHRvSW50ZWdlck9ySW5maW5pdHkoYXJndW1lbnQpO1xuICByZXR1cm4gbGVuID4gMCA/IG1pbihsZW4sIDB4MUZGRkZGRkZGRkZGRkYpIDogMDsgLy8gMiAqKiA1MyAtIDEgPT0gOTAwNzE5OTI1NDc0MDk5MVxufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tbGVuZ3RoJyk7XG5cbi8vIGBMZW5ndGhPZkFycmF5TGlrZWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWxlbmd0aG9mYXJyYXlsaWtlXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIHRvTGVuZ3RoKG9iai5sZW5ndGgpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdG9JbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWluZGV4ZWQtb2JqZWN0Jyk7XG52YXIgdG9BYnNvbHV0ZUluZGV4ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWFic29sdXRlLWluZGV4Jyk7XG52YXIgbGVuZ3RoT2ZBcnJheUxpa2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbGVuZ3RoLW9mLWFycmF5LWxpa2UnKTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS57IGluZGV4T2YsIGluY2x1ZGVzIH1gIG1ldGhvZHMgaW1wbGVtZW50YXRpb25cbnZhciBjcmVhdGVNZXRob2QgPSBmdW5jdGlvbiAoSVNfSU5DTFVERVMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgkdGhpcywgZWwsIGZyb21JbmRleCkge1xuICAgIHZhciBPID0gdG9JbmRleGVkT2JqZWN0KCR0aGlzKTtcbiAgICB2YXIgbGVuZ3RoID0gbGVuZ3RoT2ZBcnJheUxpa2UoTyk7XG4gICAgaWYgKGxlbmd0aCA9PT0gMCkgcmV0dXJuICFJU19JTkNMVURFUyAmJiAtMTtcbiAgICB2YXIgaW5kZXggPSB0b0Fic29sdXRlSW5kZXgoZnJvbUluZGV4LCBsZW5ndGgpO1xuICAgIHZhciB2YWx1ZTtcbiAgICAvLyBBcnJheSNpbmNsdWRlcyB1c2VzIFNhbWVWYWx1ZVplcm8gZXF1YWxpdHkgYWxnb3JpdGhtXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZSAtLSBOYU4gY2hlY2tcbiAgICBpZiAoSVNfSU5DTFVERVMgJiYgZWwgIT09IGVsKSB3aGlsZSAobGVuZ3RoID4gaW5kZXgpIHtcbiAgICAgIHZhbHVlID0gT1tpbmRleCsrXTtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmUgLS0gTmFOIGNoZWNrXG4gICAgICBpZiAodmFsdWUgIT09IHZhbHVlKSByZXR1cm4gdHJ1ZTtcbiAgICAvLyBBcnJheSNpbmRleE9mIGlnbm9yZXMgaG9sZXMsIEFycmF5I2luY2x1ZGVzIC0gbm90XG4gICAgfSBlbHNlIGZvciAoO2xlbmd0aCA+IGluZGV4OyBpbmRleCsrKSB7XG4gICAgICBpZiAoKElTX0lOQ0xVREVTIHx8IGluZGV4IGluIE8pICYmIE9baW5kZXhdID09PSBlbCkgcmV0dXJuIElTX0lOQ0xVREVTIHx8IGluZGV4IHx8IDA7XG4gICAgfSByZXR1cm4gIUlTX0lOQ0xVREVTICYmIC0xO1xuICB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIC8vIGBBcnJheS5wcm90b3R5cGUuaW5jbHVkZXNgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5pbmNsdWRlc1xuICBpbmNsdWRlczogY3JlYXRlTWV0aG9kKHRydWUpLFxuICAvLyBgQXJyYXkucHJvdG90eXBlLmluZGV4T2ZgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5pbmRleG9mXG4gIGluZGV4T2Y6IGNyZWF0ZU1ldGhvZChmYWxzZSlcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIGhhc093biA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMtb3duLXByb3BlcnR5Jyk7XG52YXIgdG9JbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWluZGV4ZWQtb2JqZWN0Jyk7XG52YXIgaW5kZXhPZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1pbmNsdWRlcycpLmluZGV4T2Y7XG52YXIgaGlkZGVuS2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oaWRkZW4ta2V5cycpO1xuXG52YXIgcHVzaCA9IHVuY3VycnlUaGlzKFtdLnB1c2gpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmplY3QsIG5hbWVzKSB7XG4gIHZhciBPID0gdG9JbmRleGVkT2JqZWN0KG9iamVjdCk7XG4gIHZhciBpID0gMDtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICB2YXIga2V5O1xuICBmb3IgKGtleSBpbiBPKSAhaGFzT3duKGhpZGRlbktleXMsIGtleSkgJiYgaGFzT3duKE8sIGtleSkgJiYgcHVzaChyZXN1bHQsIGtleSk7XG4gIC8vIERvbid0IGVudW0gYnVnICYgaGlkZGVuIGtleXNcbiAgd2hpbGUgKG5hbWVzLmxlbmd0aCA+IGkpIGlmIChoYXNPd24oTywga2V5ID0gbmFtZXNbaSsrXSkpIHtcbiAgICB+aW5kZXhPZihyZXN1bHQsIGtleSkgfHwgcHVzaChyZXN1bHQsIGtleSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xuLy8gSUU4LSBkb24ndCBlbnVtIGJ1ZyBrZXlzXG5tb2R1bGUuZXhwb3J0cyA9IFtcbiAgJ2NvbnN0cnVjdG9yJyxcbiAgJ2hhc093blByb3BlcnR5JyxcbiAgJ2lzUHJvdG90eXBlT2YnLFxuICAncHJvcGVydHlJc0VudW1lcmFibGUnLFxuICAndG9Mb2NhbGVTdHJpbmcnLFxuICAndG9TdHJpbmcnLFxuICAndmFsdWVPZidcbl07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGludGVybmFsT2JqZWN0S2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3Qta2V5cy1pbnRlcm5hbCcpO1xudmFyIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2VudW0tYnVnLWtleXMnKTtcblxudmFyIGhpZGRlbktleXMgPSBlbnVtQnVnS2V5cy5jb25jYXQoJ2xlbmd0aCcsICdwcm90b3R5cGUnKTtcblxuLy8gYE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb2JqZWN0LmdldG93bnByb3BlcnR5bmFtZXNcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZ2V0b3ducHJvcGVydHluYW1lcyAtLSBzYWZlXG5leHBvcnRzLmYgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyB8fCBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKE8pIHtcbiAgcmV0dXJuIGludGVybmFsT2JqZWN0S2V5cyhPLCBoaWRkZW5LZXlzKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1nZXRvd25wcm9wZXJ0eXN5bWJvbHMgLS0gc2FmZVxuZXhwb3J0cy5mID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2V0QnVpbHRJbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtYnVpbHQtaW4nKTtcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcbnZhciBnZXRPd25Qcm9wZXJ0eU5hbWVzTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LW5hbWVzJyk7XG52YXIgZ2V0T3duUHJvcGVydHlTeW1ib2xzTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LXN5bWJvbHMnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcblxudmFyIGNvbmNhdCA9IHVuY3VycnlUaGlzKFtdLmNvbmNhdCk7XG5cbi8vIGFsbCBvYmplY3Qga2V5cywgaW5jbHVkZXMgbm9uLWVudW1lcmFibGUgYW5kIHN5bWJvbHNcbm1vZHVsZS5leHBvcnRzID0gZ2V0QnVpbHRJbignUmVmbGVjdCcsICdvd25LZXlzJykgfHwgZnVuY3Rpb24gb3duS2V5cyhpdCkge1xuICB2YXIga2V5cyA9IGdldE93blByb3BlcnR5TmFtZXNNb2R1bGUuZihhbk9iamVjdChpdCkpO1xuICB2YXIgZ2V0T3duUHJvcGVydHlTeW1ib2xzID0gZ2V0T3duUHJvcGVydHlTeW1ib2xzTW9kdWxlLmY7XG4gIHJldHVybiBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPyBjb25jYXQoa2V5cywgZ2V0T3duUHJvcGVydHlTeW1ib2xzKGl0KSkgOiBrZXlzO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgaGFzT3duID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcy1vd24tcHJvcGVydHknKTtcbnZhciBvd25LZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL293bi1rZXlzJyk7XG52YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3InKTtcbnZhciBkZWZpbmVQcm9wZXJ0eU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHRhcmdldCwgc291cmNlLCBleGNlcHRpb25zKSB7XG4gIHZhciBrZXlzID0gb3duS2V5cyhzb3VyY2UpO1xuICB2YXIgZGVmaW5lUHJvcGVydHkgPSBkZWZpbmVQcm9wZXJ0eU1vZHVsZS5mO1xuICB2YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yTW9kdWxlLmY7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuICAgIGlmICghaGFzT3duKHRhcmdldCwga2V5KSAmJiAhKGV4Y2VwdGlvbnMgJiYgaGFzT3duKGV4Y2VwdGlvbnMsIGtleSkpKSB7XG4gICAgICBkZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7XG4gICAgfVxuICB9XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcblxudmFyIHJlcGxhY2VtZW50ID0gLyN8XFwucHJvdG90eXBlXFwuLztcblxudmFyIGlzRm9yY2VkID0gZnVuY3Rpb24gKGZlYXR1cmUsIGRldGVjdGlvbikge1xuICB2YXIgdmFsdWUgPSBkYXRhW25vcm1hbGl6ZShmZWF0dXJlKV07XG4gIHJldHVybiB2YWx1ZSA9PT0gUE9MWUZJTEwgPyB0cnVlXG4gICAgOiB2YWx1ZSA9PT0gTkFUSVZFID8gZmFsc2VcbiAgICA6IGlzQ2FsbGFibGUoZGV0ZWN0aW9uKSA/IGZhaWxzKGRldGVjdGlvbilcbiAgICA6ICEhZGV0ZWN0aW9uO1xufTtcblxudmFyIG5vcm1hbGl6ZSA9IGlzRm9yY2VkLm5vcm1hbGl6ZSA9IGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgcmV0dXJuIFN0cmluZyhzdHJpbmcpLnJlcGxhY2UocmVwbGFjZW1lbnQsICcuJykudG9Mb3dlckNhc2UoKTtcbn07XG5cbnZhciBkYXRhID0gaXNGb3JjZWQuZGF0YSA9IHt9O1xudmFyIE5BVElWRSA9IGlzRm9yY2VkLk5BVElWRSA9ICdOJztcbnZhciBQT0xZRklMTCA9IGlzRm9yY2VkLlBPTFlGSUxMID0gJ1AnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzRm9yY2VkO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWxUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbC10aGlzJyk7XG52YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3InKS5mO1xudmFyIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHknKTtcbnZhciBkZWZpbmVCdWlsdEluID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RlZmluZS1idWlsdC1pbicpO1xudmFyIGRlZmluZUdsb2JhbFByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RlZmluZS1nbG9iYWwtcHJvcGVydHknKTtcbnZhciBjb3B5Q29uc3RydWN0b3JQcm9wZXJ0aWVzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NvcHktY29uc3RydWN0b3ItcHJvcGVydGllcycpO1xudmFyIGlzRm9yY2VkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWZvcmNlZCcpO1xuXG4vKlxuICBvcHRpb25zLnRhcmdldCAgICAgICAgIC0gbmFtZSBvZiB0aGUgdGFyZ2V0IG9iamVjdFxuICBvcHRpb25zLmdsb2JhbCAgICAgICAgIC0gdGFyZ2V0IGlzIHRoZSBnbG9iYWwgb2JqZWN0XG4gIG9wdGlvbnMuc3RhdCAgICAgICAgICAgLSBleHBvcnQgYXMgc3RhdGljIG1ldGhvZHMgb2YgdGFyZ2V0XG4gIG9wdGlvbnMucHJvdG8gICAgICAgICAgLSBleHBvcnQgYXMgcHJvdG90eXBlIG1ldGhvZHMgb2YgdGFyZ2V0XG4gIG9wdGlvbnMucmVhbCAgICAgICAgICAgLSByZWFsIHByb3RvdHlwZSBtZXRob2QgZm9yIHRoZSBgcHVyZWAgdmVyc2lvblxuICBvcHRpb25zLmZvcmNlZCAgICAgICAgIC0gZXhwb3J0IGV2ZW4gaWYgdGhlIG5hdGl2ZSBmZWF0dXJlIGlzIGF2YWlsYWJsZVxuICBvcHRpb25zLmJpbmQgICAgICAgICAgIC0gYmluZCBtZXRob2RzIHRvIHRoZSB0YXJnZXQsIHJlcXVpcmVkIGZvciB0aGUgYHB1cmVgIHZlcnNpb25cbiAgb3B0aW9ucy53cmFwICAgICAgICAgICAtIHdyYXAgY29uc3RydWN0b3JzIHRvIHByZXZlbnRpbmcgZ2xvYmFsIHBvbGx1dGlvbiwgcmVxdWlyZWQgZm9yIHRoZSBgcHVyZWAgdmVyc2lvblxuICBvcHRpb25zLnVuc2FmZSAgICAgICAgIC0gdXNlIHRoZSBzaW1wbGUgYXNzaWdubWVudCBvZiBwcm9wZXJ0eSBpbnN0ZWFkIG9mIGRlbGV0ZSArIGRlZmluZVByb3BlcnR5XG4gIG9wdGlvbnMuc2hhbSAgICAgICAgICAgLSBhZGQgYSBmbGFnIHRvIG5vdCBjb21wbGV0ZWx5IGZ1bGwgcG9seWZpbGxzXG4gIG9wdGlvbnMuZW51bWVyYWJsZSAgICAgLSBleHBvcnQgYXMgZW51bWVyYWJsZSBwcm9wZXJ0eVxuICBvcHRpb25zLmRvbnRDYWxsR2V0U2V0IC0gcHJldmVudCBjYWxsaW5nIGEgZ2V0dGVyIG9uIHRhcmdldFxuICBvcHRpb25zLm5hbWUgICAgICAgICAgIC0gdGhlIC5uYW1lIG9mIHRoZSBmdW5jdGlvbiBpZiBpdCBkb2VzIG5vdCBtYXRjaCB0aGUga2V5XG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob3B0aW9ucywgc291cmNlKSB7XG4gIHZhciBUQVJHRVQgPSBvcHRpb25zLnRhcmdldDtcbiAgdmFyIEdMT0JBTCA9IG9wdGlvbnMuZ2xvYmFsO1xuICB2YXIgU1RBVElDID0gb3B0aW9ucy5zdGF0O1xuICB2YXIgRk9SQ0VELCB0YXJnZXQsIGtleSwgdGFyZ2V0UHJvcGVydHksIHNvdXJjZVByb3BlcnR5LCBkZXNjcmlwdG9yO1xuICBpZiAoR0xPQkFMKSB7XG4gICAgdGFyZ2V0ID0gZ2xvYmFsVGhpcztcbiAgfSBlbHNlIGlmIChTVEFUSUMpIHtcbiAgICB0YXJnZXQgPSBnbG9iYWxUaGlzW1RBUkdFVF0gfHwgZGVmaW5lR2xvYmFsUHJvcGVydHkoVEFSR0VULCB7fSk7XG4gIH0gZWxzZSB7XG4gICAgdGFyZ2V0ID0gZ2xvYmFsVGhpc1tUQVJHRVRdICYmIGdsb2JhbFRoaXNbVEFSR0VUXS5wcm90b3R5cGU7XG4gIH1cbiAgaWYgKHRhcmdldCkgZm9yIChrZXkgaW4gc291cmNlKSB7XG4gICAgc291cmNlUHJvcGVydHkgPSBzb3VyY2Vba2V5XTtcbiAgICBpZiAob3B0aW9ucy5kb250Q2FsbEdldFNldCkge1xuICAgICAgZGVzY3JpcHRvciA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSk7XG4gICAgICB0YXJnZXRQcm9wZXJ0eSA9IGRlc2NyaXB0b3IgJiYgZGVzY3JpcHRvci52YWx1ZTtcbiAgICB9IGVsc2UgdGFyZ2V0UHJvcGVydHkgPSB0YXJnZXRba2V5XTtcbiAgICBGT1JDRUQgPSBpc0ZvcmNlZChHTE9CQUwgPyBrZXkgOiBUQVJHRVQgKyAoU1RBVElDID8gJy4nIDogJyMnKSArIGtleSwgb3B0aW9ucy5mb3JjZWQpO1xuICAgIC8vIGNvbnRhaW5lZCBpbiB0YXJnZXRcbiAgICBpZiAoIUZPUkNFRCAmJiB0YXJnZXRQcm9wZXJ0eSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBpZiAodHlwZW9mIHNvdXJjZVByb3BlcnR5ID09IHR5cGVvZiB0YXJnZXRQcm9wZXJ0eSkgY29udGludWU7XG4gICAgICBjb3B5Q29uc3RydWN0b3JQcm9wZXJ0aWVzKHNvdXJjZVByb3BlcnR5LCB0YXJnZXRQcm9wZXJ0eSk7XG4gICAgfVxuICAgIC8vIGFkZCBhIGZsYWcgdG8gbm90IGNvbXBsZXRlbHkgZnVsbCBwb2x5ZmlsbHNcbiAgICBpZiAob3B0aW9ucy5zaGFtIHx8ICh0YXJnZXRQcm9wZXJ0eSAmJiB0YXJnZXRQcm9wZXJ0eS5zaGFtKSkge1xuICAgICAgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5KHNvdXJjZVByb3BlcnR5LCAnc2hhbScsIHRydWUpO1xuICAgIH1cbiAgICBkZWZpbmVCdWlsdEluKHRhcmdldCwga2V5LCBzb3VyY2VQcm9wZXJ0eSwgb3B0aW9ucyk7XG4gIH1cbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY2xhc3NvZi1yYXcnKTtcblxuLy8gYElzQXJyYXlgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1pc2FycmF5XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tYXJyYXktaXNhcnJheSAtLSBzYWZlXG5tb2R1bGUuZXhwb3J0cyA9IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24gaXNBcnJheShhcmd1bWVudCkge1xuICByZXR1cm4gY2xhc3NvZihhcmd1bWVudCkgPT09ICdBcnJheSc7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcblxudmFyIFRPX1NUUklOR19UQUcgPSB3ZWxsS25vd25TeW1ib2woJ3RvU3RyaW5nVGFnJyk7XG52YXIgdGVzdCA9IHt9O1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHVuaWNvcm4vbm8taW1tZWRpYXRlLW11dGF0aW9uIC0tIEVTMyBzeW50YXggbGltaXRhdGlvblxudGVzdFtUT19TVFJJTkdfVEFHXSA9ICd6JztcblxubW9kdWxlLmV4cG9ydHMgPSBTdHJpbmcodGVzdCkgPT09ICdbb2JqZWN0IHpdJztcbiIsICIndXNlIHN0cmljdCc7XG52YXIgVE9fU1RSSU5HX1RBR19TVVBQT1JUID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXN0cmluZy10YWctc3VwcG9ydCcpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcbnZhciBjbGFzc29mUmF3ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NsYXNzb2YtcmF3Jyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG5cbnZhciBUT19TVFJJTkdfVEFHID0gd2VsbEtub3duU3ltYm9sKCd0b1N0cmluZ1RhZycpO1xudmFyICRPYmplY3QgPSBPYmplY3Q7XG5cbi8vIEVTMyB3cm9uZyBoZXJlXG52YXIgQ09SUkVDVF9BUkdVTUVOVFMgPSBjbGFzc29mUmF3KGZ1bmN0aW9uICgpIHsgcmV0dXJuIGFyZ3VtZW50czsgfSgpKSA9PT0gJ0FyZ3VtZW50cyc7XG5cbi8vIGZhbGxiYWNrIGZvciBJRTExIFNjcmlwdCBBY2Nlc3MgRGVuaWVkIGVycm9yXG52YXIgdHJ5R2V0ID0gZnVuY3Rpb24gKGl0LCBrZXkpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gaXRba2V5XTtcbiAgfSBjYXRjaCAoZXJyb3IpIHsgLyogZW1wdHkgKi8gfVxufTtcblxuLy8gZ2V0dGluZyB0YWcgZnJvbSBFUzYrIGBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nYFxubW9kdWxlLmV4cG9ydHMgPSBUT19TVFJJTkdfVEFHX1NVUFBPUlQgPyBjbGFzc29mUmF3IDogZnVuY3Rpb24gKGl0KSB7XG4gIHZhciBPLCB0YWcsIHJlc3VsdDtcbiAgcmV0dXJuIGl0ID09PSB1bmRlZmluZWQgPyAnVW5kZWZpbmVkJyA6IGl0ID09PSBudWxsID8gJ051bGwnXG4gICAgLy8gQEB0b1N0cmluZ1RhZyBjYXNlXG4gICAgOiB0eXBlb2YgKHRhZyA9IHRyeUdldChPID0gJE9iamVjdChpdCksIFRPX1NUUklOR19UQUcpKSA9PSAnc3RyaW5nJyA/IHRhZ1xuICAgIC8vIGJ1aWx0aW5UYWcgY2FzZVxuICAgIDogQ09SUkVDVF9BUkdVTUVOVFMgPyBjbGFzc29mUmF3KE8pXG4gICAgLy8gRVMzIGFyZ3VtZW50cyBmYWxsYmFja1xuICAgIDogKHJlc3VsdCA9IGNsYXNzb2ZSYXcoTykpID09PSAnT2JqZWN0JyAmJiBpc0NhbGxhYmxlKE8uY2FsbGVlKSA/ICdBcmd1bWVudHMnIDogcmVzdWx0O1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jbGFzc29mJyk7XG5cbnZhciAkU3RyaW5nID0gU3RyaW5nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICBpZiAoY2xhc3NvZihhcmd1bWVudCkgPT09ICdTeW1ib2wnKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY29udmVydCBhIFN5bWJvbCB2YWx1ZSB0byBhIHN0cmluZycpO1xuICByZXR1cm4gJFN0cmluZyhhcmd1bWVudCk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIGRlZmluZVByb3BlcnR5TW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHknKTtcbnZhciBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5LWRlc2NyaXB0b3InKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIGlmIChERVNDUklQVE9SUykgZGVmaW5lUHJvcGVydHlNb2R1bGUuZihvYmplY3QsIGtleSwgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yKDAsIHZhbHVlKSk7XG4gIGVsc2Ugb2JqZWN0W2tleV0gPSB2YWx1ZTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIGhhc093biA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMtb3duLXByb3BlcnR5Jyk7XG5cbnZhciAkU3ludGF4RXJyb3IgPSBTeW50YXhFcnJvcjtcbnZhciAkcGFyc2VJbnQgPSBwYXJzZUludDtcbnZhciBmcm9tQ2hhckNvZGUgPSBTdHJpbmcuZnJvbUNoYXJDb2RlO1xudmFyIGF0ID0gdW5jdXJyeVRoaXMoJycuY2hhckF0KTtcbnZhciBzbGljZSA9IHVuY3VycnlUaGlzKCcnLnNsaWNlKTtcbnZhciBleGVjID0gdW5jdXJyeVRoaXMoLy4vLmV4ZWMpO1xuXG52YXIgY29kZVBvaW50cyA9IHtcbiAgJ1xcXFxcIic6ICdcIicsXG4gICdcXFxcXFxcXCc6ICdcXFxcJyxcbiAgJ1xcXFwvJzogJy8nLFxuICAnXFxcXGInOiAnXFxiJyxcbiAgJ1xcXFxmJzogJ1xcZicsXG4gICdcXFxcbic6ICdcXG4nLFxuICAnXFxcXHInOiAnXFxyJyxcbiAgJ1xcXFx0JzogJ1xcdCdcbn07XG5cbnZhciBJU180X0hFWF9ESUdJVFMgPSAvXltcXGRhLWZdezR9JC9pO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlZ2V4cC9uby1jb250cm9sLWNoYXJhY3RlciAtLSBzYWZlXG52YXIgSVNfQzBfQ09OVFJPTF9DT0RFID0gL15bXFx1MDAwMC1cXHUwMDFGXSQvO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChzb3VyY2UsIGkpIHtcbiAgdmFyIHVudGVybWluYXRlZCA9IHRydWU7XG4gIHZhciB2YWx1ZSA9ICcnO1xuICB3aGlsZSAoaSA8IHNvdXJjZS5sZW5ndGgpIHtcbiAgICB2YXIgY2hyID0gYXQoc291cmNlLCBpKTtcbiAgICBpZiAoY2hyID09PSAnXFxcXCcpIHtcbiAgICAgIHZhciB0d29DaGFycyA9IHNsaWNlKHNvdXJjZSwgaSwgaSArIDIpO1xuICAgICAgaWYgKGhhc093bihjb2RlUG9pbnRzLCB0d29DaGFycykpIHtcbiAgICAgICAgdmFsdWUgKz0gY29kZVBvaW50c1t0d29DaGFyc107XG4gICAgICAgIGkgKz0gMjtcbiAgICAgIH0gZWxzZSBpZiAodHdvQ2hhcnMgPT09ICdcXFxcdScpIHtcbiAgICAgICAgaSArPSAyO1xuICAgICAgICB2YXIgZm91ckhleERpZ2l0cyA9IHNsaWNlKHNvdXJjZSwgaSwgaSArIDQpO1xuICAgICAgICBpZiAoIWV4ZWMoSVNfNF9IRVhfRElHSVRTLCBmb3VySGV4RGlnaXRzKSkgdGhyb3cgbmV3ICRTeW50YXhFcnJvcignQmFkIFVuaWNvZGUgZXNjYXBlIGF0OiAnICsgaSk7XG4gICAgICAgIHZhbHVlICs9IGZyb21DaGFyQ29kZSgkcGFyc2VJbnQoZm91ckhleERpZ2l0cywgMTYpKTtcbiAgICAgICAgaSArPSA0O1xuICAgICAgfSBlbHNlIHRocm93IG5ldyAkU3ludGF4RXJyb3IoJ1Vua25vd24gZXNjYXBlIHNlcXVlbmNlOiBcIicgKyB0d29DaGFycyArICdcIicpO1xuICAgIH0gZWxzZSBpZiAoY2hyID09PSAnXCInKSB7XG4gICAgICB1bnRlcm1pbmF0ZWQgPSBmYWxzZTtcbiAgICAgIGkrKztcbiAgICAgIGJyZWFrO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoZXhlYyhJU19DMF9DT05UUk9MX0NPREUsIGNocikpIHRocm93IG5ldyAkU3ludGF4RXJyb3IoJ0JhZCBjb250cm9sIGNoYXJhY3RlciBpbiBzdHJpbmcgbGl0ZXJhbCBhdDogJyArIGkpO1xuICAgICAgdmFsdWUgKz0gY2hyO1xuICAgICAgaSsrO1xuICAgIH1cbiAgfVxuICBpZiAodW50ZXJtaW5hdGVkKSB0aHJvdyBuZXcgJFN5bnRheEVycm9yKCdVbnRlcm1pbmF0ZWQgc3RyaW5nIGF0OiAnICsgaSk7XG4gIHJldHVybiB7IHZhbHVlOiB2YWx1ZSwgZW5kOiBpIH07XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgZ2xvYmFsVGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwtdGhpcycpO1xudmFyIGdldEJ1aWx0SW4gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LWJ1aWx0LWluJyk7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgY2FsbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1jYWxsJyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xudmFyIGlzQXJyYXkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtYXJyYXknKTtcbnZhciBoYXNPd24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eScpO1xudmFyIHRvU3RyaW5nID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXN0cmluZycpO1xudmFyIGxlbmd0aE9mQXJyYXlMaWtlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2xlbmd0aC1vZi1hcnJheS1saWtlJyk7XG52YXIgY3JlYXRlUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5Jyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBwYXJzZUpTT05TdHJpbmcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcGFyc2UtanNvbi1zdHJpbmcnKTtcbnZhciBOQVRJVkVfU1lNQk9MID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3N5bWJvbC1jb25zdHJ1Y3Rvci1kZXRlY3Rpb24nKTtcblxudmFyIEpTT04gPSBnbG9iYWxUaGlzLkpTT047XG52YXIgTnVtYmVyID0gZ2xvYmFsVGhpcy5OdW1iZXI7XG52YXIgU3ludGF4RXJyb3IgPSBnbG9iYWxUaGlzLlN5bnRheEVycm9yO1xudmFyIG5hdGl2ZVBhcnNlID0gSlNPTiAmJiBKU09OLnBhcnNlO1xudmFyIGVudW1lcmFibGVPd25Qcm9wZXJ0aWVzID0gZ2V0QnVpbHRJbignT2JqZWN0JywgJ2tleXMnKTtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZ2V0b3ducHJvcGVydHlkZXNjcmlwdG9yIC0tIHNhZmVcbnZhciBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xudmFyIGF0ID0gdW5jdXJyeVRoaXMoJycuY2hhckF0KTtcbnZhciBzbGljZSA9IHVuY3VycnlUaGlzKCcnLnNsaWNlKTtcbnZhciBleGVjID0gdW5jdXJyeVRoaXMoLy4vLmV4ZWMpO1xudmFyIHB1c2ggPSB1bmN1cnJ5VGhpcyhbXS5wdXNoKTtcblxudmFyIElTX0RJR0lUID0gL15cXGQkLztcbnZhciBJU19OT05fWkVST19ESUdJVCA9IC9eWzEtOV0kLztcbnZhciBJU19OVU1CRVJfU1RBUlQgPSAvXltcXGQtXSQvO1xudmFyIElTX1dISVRFU1BBQ0UgPSAvXltcXHRcXG5cXHIgXSQvO1xuXG52YXIgUFJJTUlUSVZFID0gMDtcbnZhciBPQkpFQ1QgPSAxO1xuXG52YXIgJHBhcnNlID0gZnVuY3Rpb24gKHNvdXJjZSwgcmV2aXZlcikge1xuICBzb3VyY2UgPSB0b1N0cmluZyhzb3VyY2UpO1xuICB2YXIgY29udGV4dCA9IG5ldyBDb250ZXh0KHNvdXJjZSwgMCwgJycpO1xuICB2YXIgcm9vdCA9IGNvbnRleHQucGFyc2UoKTtcbiAgdmFyIHZhbHVlID0gcm9vdC52YWx1ZTtcbiAgdmFyIGVuZEluZGV4ID0gY29udGV4dC5za2lwKElTX1dISVRFU1BBQ0UsIHJvb3QuZW5kKTtcbiAgaWYgKGVuZEluZGV4IDwgc291cmNlLmxlbmd0aCkge1xuICAgIHRocm93IG5ldyBTeW50YXhFcnJvcignVW5leHBlY3RlZCBleHRyYSBjaGFyYWN0ZXI6IFwiJyArIGF0KHNvdXJjZSwgZW5kSW5kZXgpICsgJ1wiIGFmdGVyIHRoZSBwYXJzZWQgZGF0YSBhdDogJyArIGVuZEluZGV4KTtcbiAgfVxuICByZXR1cm4gaXNDYWxsYWJsZShyZXZpdmVyKSA/IGludGVybmFsaXplKHsgJyc6IHZhbHVlIH0sICcnLCByZXZpdmVyLCByb290KSA6IHZhbHVlO1xufTtcblxudmFyIGludGVybmFsaXplID0gZnVuY3Rpb24gKGhvbGRlciwgbmFtZSwgcmV2aXZlciwgbm9kZSkge1xuICB2YXIgdmFsID0gaG9sZGVyW25hbWVdO1xuICB2YXIgdW5tb2RpZmllZCA9IG5vZGUgJiYgdmFsID09PSBub2RlLnZhbHVlO1xuICB2YXIgY29udGV4dCA9IHVubW9kaWZpZWQgJiYgdHlwZW9mIG5vZGUuc291cmNlID09ICdzdHJpbmcnID8geyBzb3VyY2U6IG5vZGUuc291cmNlIH0gOiB7fTtcbiAgdmFyIGVsZW1lbnRSZWNvcmRzTGVuLCBrZXlzLCBsZW4sIGksIFA7XG4gIGlmIChpc09iamVjdCh2YWwpKSB7XG4gICAgdmFyIG5vZGVJc0FycmF5ID0gaXNBcnJheSh2YWwpO1xuICAgIHZhciBub2RlcyA9IHVubW9kaWZpZWQgPyBub2RlLm5vZGVzIDogbm9kZUlzQXJyYXkgPyBbXSA6IHt9O1xuICAgIGlmIChub2RlSXNBcnJheSkge1xuICAgICAgZWxlbWVudFJlY29yZHNMZW4gPSBub2Rlcy5sZW5ndGg7XG4gICAgICBsZW4gPSBsZW5ndGhPZkFycmF5TGlrZSh2YWwpO1xuICAgICAgZm9yIChpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIGludGVybmFsaXplUHJvcGVydHkodmFsLCBpLCBpbnRlcm5hbGl6ZSh2YWwsICcnICsgaSwgcmV2aXZlciwgaSA8IGVsZW1lbnRSZWNvcmRzTGVuID8gbm9kZXNbaV0gOiB1bmRlZmluZWQpKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAga2V5cyA9IGVudW1lcmFibGVPd25Qcm9wZXJ0aWVzKHZhbCk7XG4gICAgICBsZW4gPSBsZW5ndGhPZkFycmF5TGlrZShrZXlzKTtcbiAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICBQID0ga2V5c1tpXTtcbiAgICAgICAgaW50ZXJuYWxpemVQcm9wZXJ0eSh2YWwsIFAsIGludGVybmFsaXplKHZhbCwgUCwgcmV2aXZlciwgaGFzT3duKG5vZGVzLCBQKSA/IG5vZGVzW1BdIDogdW5kZWZpbmVkKSk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBjYWxsKHJldml2ZXIsIGhvbGRlciwgbmFtZSwgdmFsLCBjb250ZXh0KTtcbn07XG5cbnZhciBpbnRlcm5hbGl6ZVByb3BlcnR5ID0gZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICBpZiAoREVTQ1JJUFRPUlMpIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIGtleSk7XG4gICAgaWYgKGRlc2NyaXB0b3IgJiYgIWRlc2NyaXB0b3IuY29uZmlndXJhYmxlKSByZXR1cm47XG4gIH1cbiAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIGRlbGV0ZSBvYmplY3Rba2V5XTtcbiAgZWxzZSBjcmVhdGVQcm9wZXJ0eShvYmplY3QsIGtleSwgdmFsdWUpO1xufTtcblxudmFyIE5vZGUgPSBmdW5jdGlvbiAodmFsdWUsIGVuZCwgc291cmNlLCBub2Rlcykge1xuICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gIHRoaXMuZW5kID0gZW5kO1xuICB0aGlzLnNvdXJjZSA9IHNvdXJjZTtcbiAgdGhpcy5ub2RlcyA9IG5vZGVzO1xufTtcblxudmFyIENvbnRleHQgPSBmdW5jdGlvbiAoc291cmNlLCBpbmRleCkge1xuICB0aGlzLnNvdXJjZSA9IHNvdXJjZTtcbiAgdGhpcy5pbmRleCA9IGluZGV4O1xufTtcblxuLy8gaHR0cHM6Ly93d3cuanNvbi5vcmcvanNvbi1lbi5odG1sXG5Db250ZXh0LnByb3RvdHlwZSA9IHtcbiAgZm9yazogZnVuY3Rpb24gKG5leHRJbmRleCkge1xuICAgIHJldHVybiBuZXcgQ29udGV4dCh0aGlzLnNvdXJjZSwgbmV4dEluZGV4KTtcbiAgfSxcbiAgcGFyc2U6IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc291cmNlID0gdGhpcy5zb3VyY2U7XG4gICAgdmFyIGkgPSB0aGlzLnNraXAoSVNfV0hJVEVTUEFDRSwgdGhpcy5pbmRleCk7XG4gICAgdmFyIGZvcmsgPSB0aGlzLmZvcmsoaSk7XG4gICAgdmFyIGNociA9IGF0KHNvdXJjZSwgaSk7XG4gICAgaWYgKGV4ZWMoSVNfTlVNQkVSX1NUQVJULCBjaHIpKSByZXR1cm4gZm9yay5udW1iZXIoKTtcbiAgICBzd2l0Y2ggKGNocikge1xuICAgICAgY2FzZSAneyc6XG4gICAgICAgIHJldHVybiBmb3JrLm9iamVjdCgpO1xuICAgICAgY2FzZSAnWyc6XG4gICAgICAgIHJldHVybiBmb3JrLmFycmF5KCk7XG4gICAgICBjYXNlICdcIic6XG4gICAgICAgIHJldHVybiBmb3JrLnN0cmluZygpO1xuICAgICAgY2FzZSAndCc6XG4gICAgICAgIHJldHVybiBmb3JrLmtleXdvcmQodHJ1ZSk7XG4gICAgICBjYXNlICdmJzpcbiAgICAgICAgcmV0dXJuIGZvcmsua2V5d29yZChmYWxzZSk7XG4gICAgICBjYXNlICduJzpcbiAgICAgICAgcmV0dXJuIGZvcmsua2V5d29yZChudWxsKTtcbiAgICB9IHRocm93IG5ldyBTeW50YXhFcnJvcignVW5leHBlY3RlZCBjaGFyYWN0ZXI6IFwiJyArIGNociArICdcIiBhdDogJyArIGkpO1xuICB9LFxuICBub2RlOiBmdW5jdGlvbiAodHlwZSwgdmFsdWUsIHN0YXJ0LCBlbmQsIG5vZGVzKSB7XG4gICAgcmV0dXJuIG5ldyBOb2RlKHZhbHVlLCBlbmQsIHR5cGUgPyBudWxsIDogc2xpY2UodGhpcy5zb3VyY2UsIHN0YXJ0LCBlbmQpLCBub2Rlcyk7XG4gIH0sXG4gIG9iamVjdDogZnVuY3Rpb24gKCkge1xuICAgIHZhciBzb3VyY2UgPSB0aGlzLnNvdXJjZTtcbiAgICB2YXIgaSA9IHRoaXMuaW5kZXggKyAxO1xuICAgIHZhciBleHBlY3RLZXlwYWlyID0gZmFsc2U7XG4gICAgdmFyIG9iamVjdCA9IHt9O1xuICAgIHZhciBub2RlcyA9IHt9O1xuICAgIHZhciBjbG9zZWQgPSBmYWxzZTtcbiAgICB3aGlsZSAoaSA8IHNvdXJjZS5sZW5ndGgpIHtcbiAgICAgIGkgPSB0aGlzLnVudGlsKFsnXCInLCAnfSddLCBpKTtcbiAgICAgIGlmIChhdChzb3VyY2UsIGkpID09PSAnfScgJiYgIWV4cGVjdEtleXBhaXIpIHtcbiAgICAgICAgaSsrO1xuICAgICAgICBjbG9zZWQgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIC8vIFBhcnNpbmcgdGhlIGtleVxuICAgICAgdmFyIHJlc3VsdCA9IHRoaXMuZm9yayhpKS5zdHJpbmcoKTtcbiAgICAgIHZhciBrZXkgPSByZXN1bHQudmFsdWU7XG4gICAgICBpID0gcmVzdWx0LmVuZDtcbiAgICAgIGkgPSB0aGlzLnVudGlsKFsnOiddLCBpKSArIDE7XG4gICAgICAvLyBQYXJzaW5nIHZhbHVlXG4gICAgICBpID0gdGhpcy5za2lwKElTX1dISVRFU1BBQ0UsIGkpO1xuICAgICAgcmVzdWx0ID0gdGhpcy5mb3JrKGkpLnBhcnNlKCk7XG4gICAgICBjcmVhdGVQcm9wZXJ0eShub2Rlcywga2V5LCByZXN1bHQpO1xuICAgICAgY3JlYXRlUHJvcGVydHkob2JqZWN0LCBrZXksIHJlc3VsdC52YWx1ZSk7XG4gICAgICBpID0gdGhpcy51bnRpbChbJywnLCAnfSddLCByZXN1bHQuZW5kKTtcbiAgICAgIHZhciBjaHIgPSBhdChzb3VyY2UsIGkpO1xuICAgICAgaWYgKGNociA9PT0gJywnKSB7XG4gICAgICAgIGV4cGVjdEtleXBhaXIgPSB0cnVlO1xuICAgICAgICBpKys7XG4gICAgICB9IGVsc2UgaWYgKGNociA9PT0gJ30nKSB7XG4gICAgICAgIGkrKztcbiAgICAgICAgY2xvc2VkID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICghY2xvc2VkKSB0aHJvdyBuZXcgU3ludGF4RXJyb3IoJ1VudGVybWluYXRlZCBvYmplY3QgYXQ6ICcgKyBpKTtcbiAgICByZXR1cm4gdGhpcy5ub2RlKE9CSkVDVCwgb2JqZWN0LCB0aGlzLmluZGV4LCBpLCBub2Rlcyk7XG4gIH0sXG4gIGFycmF5OiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHNvdXJjZSA9IHRoaXMuc291cmNlO1xuICAgIHZhciBpID0gdGhpcy5pbmRleCArIDE7XG4gICAgdmFyIGV4cGVjdEVsZW1lbnQgPSBmYWxzZTtcbiAgICB2YXIgYXJyYXkgPSBbXTtcbiAgICB2YXIgbm9kZXMgPSBbXTtcbiAgICB2YXIgY2xvc2VkID0gZmFsc2U7XG4gICAgd2hpbGUgKGkgPCBzb3VyY2UubGVuZ3RoKSB7XG4gICAgICBpID0gdGhpcy5za2lwKElTX1dISVRFU1BBQ0UsIGkpO1xuICAgICAgaWYgKGF0KHNvdXJjZSwgaSkgPT09ICddJyAmJiAhZXhwZWN0RWxlbWVudCkge1xuICAgICAgICBpKys7XG4gICAgICAgIGNsb3NlZCA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgdmFyIHJlc3VsdCA9IHRoaXMuZm9yayhpKS5wYXJzZSgpO1xuICAgICAgcHVzaChub2RlcywgcmVzdWx0KTtcbiAgICAgIHB1c2goYXJyYXksIHJlc3VsdC52YWx1ZSk7XG4gICAgICBpID0gdGhpcy51bnRpbChbJywnLCAnXSddLCByZXN1bHQuZW5kKTtcbiAgICAgIGlmIChhdChzb3VyY2UsIGkpID09PSAnLCcpIHtcbiAgICAgICAgZXhwZWN0RWxlbWVudCA9IHRydWU7XG4gICAgICAgIGkrKztcbiAgICAgIH0gZWxzZSBpZiAoYXQoc291cmNlLCBpKSA9PT0gJ10nKSB7XG4gICAgICAgIGkrKztcbiAgICAgICAgY2xvc2VkID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICghY2xvc2VkKSB0aHJvdyBuZXcgU3ludGF4RXJyb3IoJ1VudGVybWluYXRlZCBhcnJheSBhdDogJyArIGkpO1xuICAgIHJldHVybiB0aGlzLm5vZGUoT0JKRUNULCBhcnJheSwgdGhpcy5pbmRleCwgaSwgbm9kZXMpO1xuICB9LFxuICBzdHJpbmc6IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgaW5kZXggPSB0aGlzLmluZGV4O1xuICAgIHZhciBwYXJzZWQgPSBwYXJzZUpTT05TdHJpbmcodGhpcy5zb3VyY2UsIHRoaXMuaW5kZXggKyAxKTtcbiAgICByZXR1cm4gdGhpcy5ub2RlKFBSSU1JVElWRSwgcGFyc2VkLnZhbHVlLCBpbmRleCwgcGFyc2VkLmVuZCk7XG4gIH0sXG4gIG51bWJlcjogZnVuY3Rpb24gKCkge1xuICAgIHZhciBzb3VyY2UgPSB0aGlzLnNvdXJjZTtcbiAgICB2YXIgc3RhcnRJbmRleCA9IHRoaXMuaW5kZXg7XG4gICAgdmFyIGkgPSBzdGFydEluZGV4O1xuICAgIGlmIChhdChzb3VyY2UsIGkpID09PSAnLScpIGkrKztcbiAgICBpZiAoYXQoc291cmNlLCBpKSA9PT0gJzAnKSBpKys7XG4gICAgZWxzZSBpZiAoZXhlYyhJU19OT05fWkVST19ESUdJVCwgYXQoc291cmNlLCBpKSkpIGkgPSB0aGlzLnNraXAoSVNfRElHSVQsIGkgKyAxKTtcbiAgICBlbHNlIHRocm93IG5ldyBTeW50YXhFcnJvcignRmFpbGVkIHRvIHBhcnNlIG51bWJlciBhdDogJyArIGkpO1xuICAgIGlmIChhdChzb3VyY2UsIGkpID09PSAnLicpIHtcbiAgICAgIHZhciBmcmFjdGlvblN0YXJ0SW5kZXggPSBpICsgMTtcbiAgICAgIGkgPSB0aGlzLnNraXAoSVNfRElHSVQsIGZyYWN0aW9uU3RhcnRJbmRleCk7XG4gICAgICBpZiAoZnJhY3Rpb25TdGFydEluZGV4ID09PSBpKSB0aHJvdyBuZXcgU3ludGF4RXJyb3IoXCJGYWlsZWQgdG8gcGFyc2UgbnVtYmVyJ3MgZnJhY3Rpb24gYXQ6IFwiICsgaSk7XG4gICAgfVxuICAgIGlmIChhdChzb3VyY2UsIGkpID09PSAnZScgfHwgYXQoc291cmNlLCBpKSA9PT0gJ0UnKSB7XG4gICAgICBpKys7XG4gICAgICBpZiAoYXQoc291cmNlLCBpKSA9PT0gJysnIHx8IGF0KHNvdXJjZSwgaSkgPT09ICctJykgaSsrO1xuICAgICAgdmFyIGV4cG9uZW50U3RhcnRJbmRleCA9IGk7XG4gICAgICBpID0gdGhpcy5za2lwKElTX0RJR0lULCBpKTtcbiAgICAgIGlmIChleHBvbmVudFN0YXJ0SW5kZXggPT09IGkpIHRocm93IG5ldyBTeW50YXhFcnJvcihcIkZhaWxlZCB0byBwYXJzZSBudW1iZXIncyBleHBvbmVudCB2YWx1ZSBhdDogXCIgKyBpKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMubm9kZShQUklNSVRJVkUsIE51bWJlcihzbGljZShzb3VyY2UsIHN0YXJ0SW5kZXgsIGkpKSwgc3RhcnRJbmRleCwgaSk7XG4gIH0sXG4gIGtleXdvcmQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHZhciBrZXl3b3JkID0gJycgKyB2YWx1ZTtcbiAgICB2YXIgaW5kZXggPSB0aGlzLmluZGV4O1xuICAgIHZhciBlbmRJbmRleCA9IGluZGV4ICsga2V5d29yZC5sZW5ndGg7XG4gICAgaWYgKHNsaWNlKHRoaXMuc291cmNlLCBpbmRleCwgZW5kSW5kZXgpICE9PSBrZXl3b3JkKSB0aHJvdyBuZXcgU3ludGF4RXJyb3IoJ0ZhaWxlZCB0byBwYXJzZSB2YWx1ZSBhdDogJyArIGluZGV4KTtcbiAgICByZXR1cm4gdGhpcy5ub2RlKFBSSU1JVElWRSwgdmFsdWUsIGluZGV4LCBlbmRJbmRleCk7XG4gIH0sXG4gIHNraXA6IGZ1bmN0aW9uIChyZWdleCwgaSkge1xuICAgIHZhciBzb3VyY2UgPSB0aGlzLnNvdXJjZTtcbiAgICBmb3IgKDsgaSA8IHNvdXJjZS5sZW5ndGg7IGkrKykgaWYgKCFleGVjKHJlZ2V4LCBhdChzb3VyY2UsIGkpKSkgYnJlYWs7XG4gICAgcmV0dXJuIGk7XG4gIH0sXG4gIHVudGlsOiBmdW5jdGlvbiAoYXJyYXksIGkpIHtcbiAgICBpID0gdGhpcy5za2lwKElTX1dISVRFU1BBQ0UsIGkpO1xuICAgIHZhciBjaHIgPSBhdCh0aGlzLnNvdXJjZSwgaSk7XG4gICAgZm9yICh2YXIgaiA9IDA7IGogPCBhcnJheS5sZW5ndGg7IGorKykgaWYgKGFycmF5W2pdID09PSBjaHIpIHJldHVybiBpO1xuICAgIHRocm93IG5ldyBTeW50YXhFcnJvcignVW5leHBlY3RlZCBjaGFyYWN0ZXI6IFwiJyArIGNociArICdcIiBhdDogJyArIGkpO1xuICB9XG59O1xuXG52YXIgTk9fU09VUkNFX1NVUFBPUlQgPSBmYWlscyhmdW5jdGlvbiAoKSB7XG4gIHZhciB1bnNhZmVJbnQgPSAnOTAwNzE5OTI1NDc0MDk5Myc7XG4gIHZhciBzb3VyY2U7XG4gIG5hdGl2ZVBhcnNlKHVuc2FmZUludCwgZnVuY3Rpb24gKGtleSwgdmFsdWUsIGNvbnRleHQpIHtcbiAgICBzb3VyY2UgPSBjb250ZXh0LnNvdXJjZTtcbiAgfSk7XG4gIHJldHVybiBzb3VyY2UgIT09IHVuc2FmZUludDtcbn0pO1xuXG52YXIgUFJPUEVSX0JBU0VfUEFSU0UgPSBOQVRJVkVfU1lNQk9MICYmICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gIC8vIFNhZmFyaSA5IGJ1Z1xuICByZXR1cm4gMSAvIG5hdGl2ZVBhcnNlKCctMCBcXHQnKSAhPT0gLUluZmluaXR5O1xufSk7XG5cbi8vIGBKU09OLnBhcnNlYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtanNvbi5wYXJzZVxuLy8gaHR0cHM6Ly9naXRodWIuY29tL3RjMzkvcHJvcG9zYWwtanNvbi1wYXJzZS13aXRoLXNvdXJjZVxuJCh7IHRhcmdldDogJ0pTT04nLCBzdGF0OiB0cnVlLCBmb3JjZWQ6IE5PX1NPVVJDRV9TVVBQT1JUIH0sIHtcbiAgcGFyc2U6IGZ1bmN0aW9uIHBhcnNlKHRleHQsIHJldml2ZXIpIHtcbiAgICByZXR1cm4gUFJPUEVSX0JBU0VfUEFSU0UgJiYgIWlzQ2FsbGFibGUocmV2aXZlcikgPyBuYXRpdmVQYXJzZSh0ZXh0KSA6ICRwYXJzZSh0ZXh0LCByZXZpdmVyKTtcbiAgfVxufSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tbWFwIC0tIHNhZmVcbnZhciBNYXBQcm90b3R5cGUgPSBNYXAucHJvdG90eXBlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW1hcCAtLSBzYWZlXG4gIE1hcDogTWFwLFxuICBzZXQ6IHVuY3VycnlUaGlzKE1hcFByb3RvdHlwZS5zZXQpLFxuICBnZXQ6IHVuY3VycnlUaGlzKE1hcFByb3RvdHlwZS5nZXQpLFxuICBoYXM6IHVuY3VycnlUaGlzKE1hcFByb3RvdHlwZS5oYXMpLFxuICByZW1vdmU6IHVuY3VycnlUaGlzKE1hcFByb3RvdHlwZVsnZGVsZXRlJ10pLFxuICBwcm90bzogTWFwUHJvdG90eXBlXG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIE1hcEhlbHBlcnMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbWFwLWhlbHBlcnMnKTtcbnZhciBJU19QVVJFID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLXB1cmUnKTtcblxudmFyIGdldCA9IE1hcEhlbHBlcnMuZ2V0O1xudmFyIGhhcyA9IE1hcEhlbHBlcnMuaGFzO1xudmFyIHNldCA9IE1hcEhlbHBlcnMuc2V0O1xuXG4vLyBgTWFwLnByb3RvdHlwZS5nZXRPckluc2VydGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW1hcC5wcm90b3R5cGUuZ2V0b3JpbnNlcnRcbiQoeyB0YXJnZXQ6ICdNYXAnLCBwcm90bzogdHJ1ZSwgcmVhbDogdHJ1ZSwgZm9yY2VkOiBJU19QVVJFIH0sIHtcbiAgZ2V0T3JJbnNlcnQ6IGZ1bmN0aW9uIGdldE9ySW5zZXJ0KGtleSwgdmFsdWUpIHtcbiAgICBpZiAoaGFzKHRoaXMsIGtleSkpIHJldHVybiBnZXQodGhpcywga2V5KTtcbiAgICBzZXQodGhpcywga2V5LCB2YWx1ZSk7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG59KTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBhQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYS1jYWxsYWJsZScpO1xudmFyIE1hcEhlbHBlcnMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbWFwLWhlbHBlcnMnKTtcbnZhciBJU19QVVJFID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLXB1cmUnKTtcblxudmFyIGdldCA9IE1hcEhlbHBlcnMuZ2V0O1xudmFyIGhhcyA9IE1hcEhlbHBlcnMuaGFzO1xudmFyIHNldCA9IE1hcEhlbHBlcnMuc2V0O1xuXG4vLyBgTWFwLnByb3RvdHlwZS5nZXRPckluc2VydENvbXB1dGVkYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtbWFwLnByb3RvdHlwZS5nZXRvcmluc2VydGNvbXB1dGVkXG4kKHsgdGFyZ2V0OiAnTWFwJywgcHJvdG86IHRydWUsIHJlYWw6IHRydWUsIGZvcmNlZDogSVNfUFVSRSB9LCB7XG4gIGdldE9ySW5zZXJ0Q29tcHV0ZWQ6IGZ1bmN0aW9uIGdldE9ySW5zZXJ0Q29tcHV0ZWQoa2V5LCBjYWxsYmFja2ZuKSB7XG4gICAgdmFyIGhhc0tleSA9IGhhcyh0aGlzLCBrZXkpO1xuICAgIGFDYWxsYWJsZShjYWxsYmFja2ZuKTtcbiAgICBpZiAoaGFzS2V5KSByZXR1cm4gZ2V0KHRoaXMsIGtleSk7XG4gICAgLy8gQ2Fub25pY2FsaXplS2V5ZWRDb2xsZWN0aW9uS2V5XG4gICAgaWYgKGtleSA9PT0gMCAmJiAxIC8ga2V5ID09PSAtSW5maW5pdHkpIGtleSA9IDA7XG4gICAgdmFyIHZhbHVlID0gY2FsbGJhY2tmbihrZXkpO1xuICAgIHNldCh0aGlzLCBrZXksIHZhbHVlKTtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbn0pO1xuIiwgImltcG9ydCAndGlwcHkuanMvZGlzdC90aXBweS5jc3MnO1xuXG5leHBvcnQge2RlZmF1bHQgYXMgdGlwcHl9IGZyb20gJ3RpcHB5LmpzJztcbiIsICJleHBvcnQgdmFyIHRvcCA9ICd0b3AnO1xuZXhwb3J0IHZhciBib3R0b20gPSAnYm90dG9tJztcbmV4cG9ydCB2YXIgcmlnaHQgPSAncmlnaHQnO1xuZXhwb3J0IHZhciBsZWZ0ID0gJ2xlZnQnO1xuZXhwb3J0IHZhciBhdXRvID0gJ2F1dG8nO1xuZXhwb3J0IHZhciBiYXNlUGxhY2VtZW50cyA9IFt0b3AsIGJvdHRvbSwgcmlnaHQsIGxlZnRdO1xuZXhwb3J0IHZhciBzdGFydCA9ICdzdGFydCc7XG5leHBvcnQgdmFyIGVuZCA9ICdlbmQnO1xuZXhwb3J0IHZhciBjbGlwcGluZ1BhcmVudHMgPSAnY2xpcHBpbmdQYXJlbnRzJztcbmV4cG9ydCB2YXIgdmlld3BvcnQgPSAndmlld3BvcnQnO1xuZXhwb3J0IHZhciBwb3BwZXIgPSAncG9wcGVyJztcbmV4cG9ydCB2YXIgcmVmZXJlbmNlID0gJ3JlZmVyZW5jZSc7XG5leHBvcnQgdmFyIHZhcmlhdGlvblBsYWNlbWVudHMgPSAvKiNfX1BVUkVfXyovYmFzZVBsYWNlbWVudHMucmVkdWNlKGZ1bmN0aW9uIChhY2MsIHBsYWNlbWVudCkge1xuICByZXR1cm4gYWNjLmNvbmNhdChbcGxhY2VtZW50ICsgXCItXCIgKyBzdGFydCwgcGxhY2VtZW50ICsgXCItXCIgKyBlbmRdKTtcbn0sIFtdKTtcbmV4cG9ydCB2YXIgcGxhY2VtZW50cyA9IC8qI19fUFVSRV9fKi9bXS5jb25jYXQoYmFzZVBsYWNlbWVudHMsIFthdXRvXSkucmVkdWNlKGZ1bmN0aW9uIChhY2MsIHBsYWNlbWVudCkge1xuICByZXR1cm4gYWNjLmNvbmNhdChbcGxhY2VtZW50LCBwbGFjZW1lbnQgKyBcIi1cIiArIHN0YXJ0LCBwbGFjZW1lbnQgKyBcIi1cIiArIGVuZF0pO1xufSwgW10pOyAvLyBtb2RpZmllcnMgdGhhdCBuZWVkIHRvIHJlYWQgdGhlIERPTVxuXG5leHBvcnQgdmFyIGJlZm9yZVJlYWQgPSAnYmVmb3JlUmVhZCc7XG5leHBvcnQgdmFyIHJlYWQgPSAncmVhZCc7XG5leHBvcnQgdmFyIGFmdGVyUmVhZCA9ICdhZnRlclJlYWQnOyAvLyBwdXJlLWxvZ2ljIG1vZGlmaWVyc1xuXG5leHBvcnQgdmFyIGJlZm9yZU1haW4gPSAnYmVmb3JlTWFpbic7XG5leHBvcnQgdmFyIG1haW4gPSAnbWFpbic7XG5leHBvcnQgdmFyIGFmdGVyTWFpbiA9ICdhZnRlck1haW4nOyAvLyBtb2RpZmllciB3aXRoIHRoZSBwdXJwb3NlIHRvIHdyaXRlIHRvIHRoZSBET00gKG9yIHdyaXRlIGludG8gYSBmcmFtZXdvcmsgc3RhdGUpXG5cbmV4cG9ydCB2YXIgYmVmb3JlV3JpdGUgPSAnYmVmb3JlV3JpdGUnO1xuZXhwb3J0IHZhciB3cml0ZSA9ICd3cml0ZSc7XG5leHBvcnQgdmFyIGFmdGVyV3JpdGUgPSAnYWZ0ZXJXcml0ZSc7XG5leHBvcnQgdmFyIG1vZGlmaWVyUGhhc2VzID0gW2JlZm9yZVJlYWQsIHJlYWQsIGFmdGVyUmVhZCwgYmVmb3JlTWFpbiwgbWFpbiwgYWZ0ZXJNYWluLCBiZWZvcmVXcml0ZSwgd3JpdGUsIGFmdGVyV3JpdGVdOyIsICJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXROb2RlTmFtZShlbGVtZW50KSB7XG4gIHJldHVybiBlbGVtZW50ID8gKGVsZW1lbnQubm9kZU5hbWUgfHwgJycpLnRvTG93ZXJDYXNlKCkgOiBudWxsO1xufSIsICJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRXaW5kb3cobm9kZSkge1xuICBpZiAobm9kZSA9PSBudWxsKSB7XG4gICAgcmV0dXJuIHdpbmRvdztcbiAgfVxuXG4gIGlmIChub2RlLnRvU3RyaW5nKCkgIT09ICdbb2JqZWN0IFdpbmRvd10nKSB7XG4gICAgdmFyIG93bmVyRG9jdW1lbnQgPSBub2RlLm93bmVyRG9jdW1lbnQ7XG4gICAgcmV0dXJuIG93bmVyRG9jdW1lbnQgPyBvd25lckRvY3VtZW50LmRlZmF1bHRWaWV3IHx8IHdpbmRvdyA6IHdpbmRvdztcbiAgfVxuXG4gIHJldHVybiBub2RlO1xufSIsICJpbXBvcnQgZ2V0V2luZG93IGZyb20gXCIuL2dldFdpbmRvdy5qc1wiO1xuXG5mdW5jdGlvbiBpc0VsZW1lbnQobm9kZSkge1xuICB2YXIgT3duRWxlbWVudCA9IGdldFdpbmRvdyhub2RlKS5FbGVtZW50O1xuICByZXR1cm4gbm9kZSBpbnN0YW5jZW9mIE93bkVsZW1lbnQgfHwgbm9kZSBpbnN0YW5jZW9mIEVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIGlzSFRNTEVsZW1lbnQobm9kZSkge1xuICB2YXIgT3duRWxlbWVudCA9IGdldFdpbmRvdyhub2RlKS5IVE1MRWxlbWVudDtcbiAgcmV0dXJuIG5vZGUgaW5zdGFuY2VvZiBPd25FbGVtZW50IHx8IG5vZGUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudDtcbn1cblxuZnVuY3Rpb24gaXNTaGFkb3dSb290KG5vZGUpIHtcbiAgLy8gSUUgMTEgaGFzIG5vIFNoYWRvd1Jvb3RcbiAgaWYgKHR5cGVvZiBTaGFkb3dSb290ID09PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBPd25FbGVtZW50ID0gZ2V0V2luZG93KG5vZGUpLlNoYWRvd1Jvb3Q7XG4gIHJldHVybiBub2RlIGluc3RhbmNlb2YgT3duRWxlbWVudCB8fCBub2RlIGluc3RhbmNlb2YgU2hhZG93Um9vdDtcbn1cblxuZXhwb3J0IHsgaXNFbGVtZW50LCBpc0hUTUxFbGVtZW50LCBpc1NoYWRvd1Jvb3QgfTsiLCAiaW1wb3J0IGdldE5vZGVOYW1lIGZyb20gXCIuLi9kb20tdXRpbHMvZ2V0Tm9kZU5hbWUuanNcIjtcbmltcG9ydCB7IGlzSFRNTEVsZW1lbnQgfSBmcm9tIFwiLi4vZG9tLXV0aWxzL2luc3RhbmNlT2YuanNcIjsgLy8gVGhpcyBtb2RpZmllciB0YWtlcyB0aGUgc3R5bGVzIHByZXBhcmVkIGJ5IHRoZSBgY29tcHV0ZVN0eWxlc2AgbW9kaWZpZXJcbi8vIGFuZCBhcHBsaWVzIHRoZW0gdG8gdGhlIEhUTUxFbGVtZW50cyBzdWNoIGFzIHBvcHBlciBhbmQgYXJyb3dcblxuZnVuY3Rpb24gYXBwbHlTdHlsZXMoX3JlZikge1xuICB2YXIgc3RhdGUgPSBfcmVmLnN0YXRlO1xuICBPYmplY3Qua2V5cyhzdGF0ZS5lbGVtZW50cykuZm9yRWFjaChmdW5jdGlvbiAobmFtZSkge1xuICAgIHZhciBzdHlsZSA9IHN0YXRlLnN0eWxlc1tuYW1lXSB8fCB7fTtcbiAgICB2YXIgYXR0cmlidXRlcyA9IHN0YXRlLmF0dHJpYnV0ZXNbbmFtZV0gfHwge307XG4gICAgdmFyIGVsZW1lbnQgPSBzdGF0ZS5lbGVtZW50c1tuYW1lXTsgLy8gYXJyb3cgaXMgb3B0aW9uYWwgKyB2aXJ0dWFsIGVsZW1lbnRzXG5cbiAgICBpZiAoIWlzSFRNTEVsZW1lbnQoZWxlbWVudCkgfHwgIWdldE5vZGVOYW1lKGVsZW1lbnQpKSB7XG4gICAgICByZXR1cm47XG4gICAgfSAvLyBGbG93IGRvZXNuJ3Qgc3VwcG9ydCB0byBleHRlbmQgdGhpcyBwcm9wZXJ0eSwgYnV0IGl0J3MgdGhlIG1vc3RcbiAgICAvLyBlZmZlY3RpdmUgd2F5IHRvIGFwcGx5IHN0eWxlcyB0byBhbiBIVE1MRWxlbWVudFxuICAgIC8vICRGbG93Rml4TWVbY2Fubm90LXdyaXRlXVxuXG5cbiAgICBPYmplY3QuYXNzaWduKGVsZW1lbnQuc3R5bGUsIHN0eWxlKTtcbiAgICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICB2YXIgdmFsdWUgPSBhdHRyaWJ1dGVzW25hbWVdO1xuXG4gICAgICBpZiAodmFsdWUgPT09IGZhbHNlKSB7XG4gICAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKG5hbWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUgPT09IHRydWUgPyAnJyA6IHZhbHVlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGVmZmVjdChfcmVmMikge1xuICB2YXIgc3RhdGUgPSBfcmVmMi5zdGF0ZTtcbiAgdmFyIGluaXRpYWxTdHlsZXMgPSB7XG4gICAgcG9wcGVyOiB7XG4gICAgICBwb3NpdGlvbjogc3RhdGUub3B0aW9ucy5zdHJhdGVneSxcbiAgICAgIGxlZnQ6ICcwJyxcbiAgICAgIHRvcDogJzAnLFxuICAgICAgbWFyZ2luOiAnMCdcbiAgICB9LFxuICAgIGFycm93OiB7XG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJ1xuICAgIH0sXG4gICAgcmVmZXJlbmNlOiB7fVxuICB9O1xuICBPYmplY3QuYXNzaWduKHN0YXRlLmVsZW1lbnRzLnBvcHBlci5zdHlsZSwgaW5pdGlhbFN0eWxlcy5wb3BwZXIpO1xuICBzdGF0ZS5zdHlsZXMgPSBpbml0aWFsU3R5bGVzO1xuXG4gIGlmIChzdGF0ZS5lbGVtZW50cy5hcnJvdykge1xuICAgIE9iamVjdC5hc3NpZ24oc3RhdGUuZWxlbWVudHMuYXJyb3cuc3R5bGUsIGluaXRpYWxTdHlsZXMuYXJyb3cpO1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICBPYmplY3Qua2V5cyhzdGF0ZS5lbGVtZW50cykuZm9yRWFjaChmdW5jdGlvbiAobmFtZSkge1xuICAgICAgdmFyIGVsZW1lbnQgPSBzdGF0ZS5lbGVtZW50c1tuYW1lXTtcbiAgICAgIHZhciBhdHRyaWJ1dGVzID0gc3RhdGUuYXR0cmlidXRlc1tuYW1lXSB8fCB7fTtcbiAgICAgIHZhciBzdHlsZVByb3BlcnRpZXMgPSBPYmplY3Qua2V5cyhzdGF0ZS5zdHlsZXMuaGFzT3duUHJvcGVydHkobmFtZSkgPyBzdGF0ZS5zdHlsZXNbbmFtZV0gOiBpbml0aWFsU3R5bGVzW25hbWVdKTsgLy8gU2V0IGFsbCB2YWx1ZXMgdG8gYW4gZW1wdHkgc3RyaW5nIHRvIHVuc2V0IHRoZW1cblxuICAgICAgdmFyIHN0eWxlID0gc3R5bGVQcm9wZXJ0aWVzLnJlZHVjZShmdW5jdGlvbiAoc3R5bGUsIHByb3BlcnR5KSB7XG4gICAgICAgIHN0eWxlW3Byb3BlcnR5XSA9ICcnO1xuICAgICAgICByZXR1cm4gc3R5bGU7XG4gICAgICB9LCB7fSk7IC8vIGFycm93IGlzIG9wdGlvbmFsICsgdmlydHVhbCBlbGVtZW50c1xuXG4gICAgICBpZiAoIWlzSFRNTEVsZW1lbnQoZWxlbWVudCkgfHwgIWdldE5vZGVOYW1lKGVsZW1lbnQpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgT2JqZWN0LmFzc2lnbihlbGVtZW50LnN0eWxlLCBzdHlsZSk7XG4gICAgICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChhdHRyaWJ1dGUpIHtcbiAgICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoYXR0cmlidXRlKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xufSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnYXBwbHlTdHlsZXMnLFxuICBlbmFibGVkOiB0cnVlLFxuICBwaGFzZTogJ3dyaXRlJyxcbiAgZm46IGFwcGx5U3R5bGVzLFxuICBlZmZlY3Q6IGVmZmVjdCxcbiAgcmVxdWlyZXM6IFsnY29tcHV0ZVN0eWxlcyddXG59OyIsICJpbXBvcnQgeyBhdXRvIH0gZnJvbSBcIi4uL2VudW1zLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRCYXNlUGxhY2VtZW50KHBsYWNlbWVudCkge1xuICByZXR1cm4gcGxhY2VtZW50LnNwbGl0KCctJylbMF07XG59IiwgImV4cG9ydCB2YXIgbWF4ID0gTWF0aC5tYXg7XG5leHBvcnQgdmFyIG1pbiA9IE1hdGgubWluO1xuZXhwb3J0IHZhciByb3VuZCA9IE1hdGgucm91bmQ7IiwgImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFVBU3RyaW5nKCkge1xuICB2YXIgdWFEYXRhID0gbmF2aWdhdG9yLnVzZXJBZ2VudERhdGE7XG5cbiAgaWYgKHVhRGF0YSAhPSBudWxsICYmIHVhRGF0YS5icmFuZHMgJiYgQXJyYXkuaXNBcnJheSh1YURhdGEuYnJhbmRzKSkge1xuICAgIHJldHVybiB1YURhdGEuYnJhbmRzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgcmV0dXJuIGl0ZW0uYnJhbmQgKyBcIi9cIiArIGl0ZW0udmVyc2lvbjtcbiAgICB9KS5qb2luKCcgJyk7XG4gIH1cblxuICByZXR1cm4gbmF2aWdhdG9yLnVzZXJBZ2VudDtcbn0iLCAiaW1wb3J0IGdldFVBU3RyaW5nIGZyb20gXCIuLi91dGlscy91c2VyQWdlbnQuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzTGF5b3V0Vmlld3BvcnQoKSB7XG4gIHJldHVybiAhL14oKD8hY2hyb21lfGFuZHJvaWQpLikqc2FmYXJpL2kudGVzdChnZXRVQVN0cmluZygpKTtcbn0iLCAiaW1wb3J0IHsgaXNFbGVtZW50LCBpc0hUTUxFbGVtZW50IH0gZnJvbSBcIi4vaW5zdGFuY2VPZi5qc1wiO1xuaW1wb3J0IHsgcm91bmQgfSBmcm9tIFwiLi4vdXRpbHMvbWF0aC5qc1wiO1xuaW1wb3J0IGdldFdpbmRvdyBmcm9tIFwiLi9nZXRXaW5kb3cuanNcIjtcbmltcG9ydCBpc0xheW91dFZpZXdwb3J0IGZyb20gXCIuL2lzTGF5b3V0Vmlld3BvcnQuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldEJvdW5kaW5nQ2xpZW50UmVjdChlbGVtZW50LCBpbmNsdWRlU2NhbGUsIGlzRml4ZWRTdHJhdGVneSkge1xuICBpZiAoaW5jbHVkZVNjYWxlID09PSB2b2lkIDApIHtcbiAgICBpbmNsdWRlU2NhbGUgPSBmYWxzZTtcbiAgfVxuXG4gIGlmIChpc0ZpeGVkU3RyYXRlZ3kgPT09IHZvaWQgMCkge1xuICAgIGlzRml4ZWRTdHJhdGVneSA9IGZhbHNlO1xuICB9XG5cbiAgdmFyIGNsaWVudFJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICB2YXIgc2NhbGVYID0gMTtcbiAgdmFyIHNjYWxlWSA9IDE7XG5cbiAgaWYgKGluY2x1ZGVTY2FsZSAmJiBpc0hUTUxFbGVtZW50KGVsZW1lbnQpKSB7XG4gICAgc2NhbGVYID0gZWxlbWVudC5vZmZzZXRXaWR0aCA+IDAgPyByb3VuZChjbGllbnRSZWN0LndpZHRoKSAvIGVsZW1lbnQub2Zmc2V0V2lkdGggfHwgMSA6IDE7XG4gICAgc2NhbGVZID0gZWxlbWVudC5vZmZzZXRIZWlnaHQgPiAwID8gcm91bmQoY2xpZW50UmVjdC5oZWlnaHQpIC8gZWxlbWVudC5vZmZzZXRIZWlnaHQgfHwgMSA6IDE7XG4gIH1cblxuICB2YXIgX3JlZiA9IGlzRWxlbWVudChlbGVtZW50KSA/IGdldFdpbmRvdyhlbGVtZW50KSA6IHdpbmRvdyxcbiAgICAgIHZpc3VhbFZpZXdwb3J0ID0gX3JlZi52aXN1YWxWaWV3cG9ydDtcblxuICB2YXIgYWRkVmlzdWFsT2Zmc2V0cyA9ICFpc0xheW91dFZpZXdwb3J0KCkgJiYgaXNGaXhlZFN0cmF0ZWd5O1xuICB2YXIgeCA9IChjbGllbnRSZWN0LmxlZnQgKyAoYWRkVmlzdWFsT2Zmc2V0cyAmJiB2aXN1YWxWaWV3cG9ydCA/IHZpc3VhbFZpZXdwb3J0Lm9mZnNldExlZnQgOiAwKSkgLyBzY2FsZVg7XG4gIHZhciB5ID0gKGNsaWVudFJlY3QudG9wICsgKGFkZFZpc3VhbE9mZnNldHMgJiYgdmlzdWFsVmlld3BvcnQgPyB2aXN1YWxWaWV3cG9ydC5vZmZzZXRUb3AgOiAwKSkgLyBzY2FsZVk7XG4gIHZhciB3aWR0aCA9IGNsaWVudFJlY3Qud2lkdGggLyBzY2FsZVg7XG4gIHZhciBoZWlnaHQgPSBjbGllbnRSZWN0LmhlaWdodCAvIHNjYWxlWTtcbiAgcmV0dXJuIHtcbiAgICB3aWR0aDogd2lkdGgsXG4gICAgaGVpZ2h0OiBoZWlnaHQsXG4gICAgdG9wOiB5LFxuICAgIHJpZ2h0OiB4ICsgd2lkdGgsXG4gICAgYm90dG9tOiB5ICsgaGVpZ2h0LFxuICAgIGxlZnQ6IHgsXG4gICAgeDogeCxcbiAgICB5OiB5XG4gIH07XG59IiwgImltcG9ydCBnZXRCb3VuZGluZ0NsaWVudFJlY3QgZnJvbSBcIi4vZ2V0Qm91bmRpbmdDbGllbnRSZWN0LmpzXCI7IC8vIFJldHVybnMgdGhlIGxheW91dCByZWN0IG9mIGFuIGVsZW1lbnQgcmVsYXRpdmUgdG8gaXRzIG9mZnNldFBhcmVudC4gTGF5b3V0XG4vLyBtZWFucyBpdCBkb2Vzbid0IHRha2UgaW50byBhY2NvdW50IHRyYW5zZm9ybXMuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldExheW91dFJlY3QoZWxlbWVudCkge1xuICB2YXIgY2xpZW50UmVjdCA9IGdldEJvdW5kaW5nQ2xpZW50UmVjdChlbGVtZW50KTsgLy8gVXNlIHRoZSBjbGllbnRSZWN0IHNpemVzIGlmIGl0J3Mgbm90IGJlZW4gdHJhbnNmb3JtZWQuXG4gIC8vIEZpeGVzIGh0dHBzOi8vZ2l0aHViLmNvbS9wb3BwZXJqcy9wb3BwZXItY29yZS9pc3N1ZXMvMTIyM1xuXG4gIHZhciB3aWR0aCA9IGVsZW1lbnQub2Zmc2V0V2lkdGg7XG4gIHZhciBoZWlnaHQgPSBlbGVtZW50Lm9mZnNldEhlaWdodDtcblxuICBpZiAoTWF0aC5hYnMoY2xpZW50UmVjdC53aWR0aCAtIHdpZHRoKSA8PSAxKSB7XG4gICAgd2lkdGggPSBjbGllbnRSZWN0LndpZHRoO1xuICB9XG5cbiAgaWYgKE1hdGguYWJzKGNsaWVudFJlY3QuaGVpZ2h0IC0gaGVpZ2h0KSA8PSAxKSB7XG4gICAgaGVpZ2h0ID0gY2xpZW50UmVjdC5oZWlnaHQ7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHg6IGVsZW1lbnQub2Zmc2V0TGVmdCxcbiAgICB5OiBlbGVtZW50Lm9mZnNldFRvcCxcbiAgICB3aWR0aDogd2lkdGgsXG4gICAgaGVpZ2h0OiBoZWlnaHRcbiAgfTtcbn0iLCAiaW1wb3J0IHsgaXNTaGFkb3dSb290IH0gZnJvbSBcIi4vaW5zdGFuY2VPZi5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29udGFpbnMocGFyZW50LCBjaGlsZCkge1xuICB2YXIgcm9vdE5vZGUgPSBjaGlsZC5nZXRSb290Tm9kZSAmJiBjaGlsZC5nZXRSb290Tm9kZSgpOyAvLyBGaXJzdCwgYXR0ZW1wdCB3aXRoIGZhc3RlciBuYXRpdmUgbWV0aG9kXG5cbiAgaWYgKHBhcmVudC5jb250YWlucyhjaGlsZCkpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSAvLyB0aGVuIGZhbGxiYWNrIHRvIGN1c3RvbSBpbXBsZW1lbnRhdGlvbiB3aXRoIFNoYWRvdyBET00gc3VwcG9ydFxuICBlbHNlIGlmIChyb290Tm9kZSAmJiBpc1NoYWRvd1Jvb3Qocm9vdE5vZGUpKSB7XG4gICAgICB2YXIgbmV4dCA9IGNoaWxkO1xuXG4gICAgICBkbyB7XG4gICAgICAgIGlmIChuZXh0ICYmIHBhcmVudC5pc1NhbWVOb2RlKG5leHQpKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gLy8gJEZsb3dGaXhNZVtwcm9wLW1pc3NpbmddOiBuZWVkIGEgYmV0dGVyIHdheSB0byBoYW5kbGUgdGhpcy4uLlxuXG5cbiAgICAgICAgbmV4dCA9IG5leHQucGFyZW50Tm9kZSB8fCBuZXh0Lmhvc3Q7XG4gICAgICB9IHdoaWxlIChuZXh0KTtcbiAgICB9IC8vIEdpdmUgdXAsIHRoZSByZXN1bHQgaXMgZmFsc2VcblxuXG4gIHJldHVybiBmYWxzZTtcbn0iLCAiaW1wb3J0IGdldFdpbmRvdyBmcm9tIFwiLi9nZXRXaW5kb3cuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldENvbXB1dGVkU3R5bGUoZWxlbWVudCkge1xuICByZXR1cm4gZ2V0V2luZG93KGVsZW1lbnQpLmdldENvbXB1dGVkU3R5bGUoZWxlbWVudCk7XG59IiwgImltcG9ydCBnZXROb2RlTmFtZSBmcm9tIFwiLi9nZXROb2RlTmFtZS5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNUYWJsZUVsZW1lbnQoZWxlbWVudCkge1xuICByZXR1cm4gWyd0YWJsZScsICd0ZCcsICd0aCddLmluZGV4T2YoZ2V0Tm9kZU5hbWUoZWxlbWVudCkpID49IDA7XG59IiwgImltcG9ydCB7IGlzRWxlbWVudCB9IGZyb20gXCIuL2luc3RhbmNlT2YuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldERvY3VtZW50RWxlbWVudChlbGVtZW50KSB7XG4gIC8vICRGbG93Rml4TWVbaW5jb21wYXRpYmxlLXJldHVybl06IGFzc3VtZSBib2R5IGlzIGFsd2F5cyBhdmFpbGFibGVcbiAgcmV0dXJuICgoaXNFbGVtZW50KGVsZW1lbnQpID8gZWxlbWVudC5vd25lckRvY3VtZW50IDogLy8gJEZsb3dGaXhNZVtwcm9wLW1pc3NpbmddXG4gIGVsZW1lbnQuZG9jdW1lbnQpIHx8IHdpbmRvdy5kb2N1bWVudCkuZG9jdW1lbnRFbGVtZW50O1xufSIsICJpbXBvcnQgZ2V0Tm9kZU5hbWUgZnJvbSBcIi4vZ2V0Tm9kZU5hbWUuanNcIjtcbmltcG9ydCBnZXREb2N1bWVudEVsZW1lbnQgZnJvbSBcIi4vZ2V0RG9jdW1lbnRFbGVtZW50LmpzXCI7XG5pbXBvcnQgeyBpc1NoYWRvd1Jvb3QgfSBmcm9tIFwiLi9pbnN0YW5jZU9mLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRQYXJlbnROb2RlKGVsZW1lbnQpIHtcbiAgaWYgKGdldE5vZGVOYW1lKGVsZW1lbnQpID09PSAnaHRtbCcpIHtcbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxuXG4gIHJldHVybiAoLy8gdGhpcyBpcyBhIHF1aWNrZXIgKGJ1dCBsZXNzIHR5cGUgc2FmZSkgd2F5IHRvIHNhdmUgcXVpdGUgc29tZSBieXRlcyBmcm9tIHRoZSBidW5kbGVcbiAgICAvLyAkRmxvd0ZpeE1lW2luY29tcGF0aWJsZS1yZXR1cm5dXG4gICAgLy8gJEZsb3dGaXhNZVtwcm9wLW1pc3NpbmddXG4gICAgZWxlbWVudC5hc3NpZ25lZFNsb3QgfHwgLy8gc3RlcCBpbnRvIHRoZSBzaGFkb3cgRE9NIG9mIHRoZSBwYXJlbnQgb2YgYSBzbG90dGVkIG5vZGVcbiAgICBlbGVtZW50LnBhcmVudE5vZGUgfHwgKCAvLyBET00gRWxlbWVudCBkZXRlY3RlZFxuICAgIGlzU2hhZG93Um9vdChlbGVtZW50KSA/IGVsZW1lbnQuaG9zdCA6IG51bGwpIHx8IC8vIFNoYWRvd1Jvb3QgZGV0ZWN0ZWRcbiAgICAvLyAkRmxvd0ZpeE1lW2luY29tcGF0aWJsZS1jYWxsXTogSFRNTEVsZW1lbnQgaXMgYSBOb2RlXG4gICAgZ2V0RG9jdW1lbnRFbGVtZW50KGVsZW1lbnQpIC8vIGZhbGxiYWNrXG5cbiAgKTtcbn0iLCAiaW1wb3J0IGdldFdpbmRvdyBmcm9tIFwiLi9nZXRXaW5kb3cuanNcIjtcbmltcG9ydCBnZXROb2RlTmFtZSBmcm9tIFwiLi9nZXROb2RlTmFtZS5qc1wiO1xuaW1wb3J0IGdldENvbXB1dGVkU3R5bGUgZnJvbSBcIi4vZ2V0Q29tcHV0ZWRTdHlsZS5qc1wiO1xuaW1wb3J0IHsgaXNIVE1MRWxlbWVudCwgaXNTaGFkb3dSb290IH0gZnJvbSBcIi4vaW5zdGFuY2VPZi5qc1wiO1xuaW1wb3J0IGlzVGFibGVFbGVtZW50IGZyb20gXCIuL2lzVGFibGVFbGVtZW50LmpzXCI7XG5pbXBvcnQgZ2V0UGFyZW50Tm9kZSBmcm9tIFwiLi9nZXRQYXJlbnROb2RlLmpzXCI7XG5pbXBvcnQgZ2V0VUFTdHJpbmcgZnJvbSBcIi4uL3V0aWxzL3VzZXJBZ2VudC5qc1wiO1xuXG5mdW5jdGlvbiBnZXRUcnVlT2Zmc2V0UGFyZW50KGVsZW1lbnQpIHtcbiAgaWYgKCFpc0hUTUxFbGVtZW50KGVsZW1lbnQpIHx8IC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9wb3BwZXJqcy9wb3BwZXItY29yZS9pc3N1ZXMvODM3XG4gIGdldENvbXB1dGVkU3R5bGUoZWxlbWVudCkucG9zaXRpb24gPT09ICdmaXhlZCcpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJldHVybiBlbGVtZW50Lm9mZnNldFBhcmVudDtcbn0gLy8gYC5vZmZzZXRQYXJlbnRgIHJlcG9ydHMgYG51bGxgIGZvciBmaXhlZCBlbGVtZW50cywgd2hpbGUgYWJzb2x1dGUgZWxlbWVudHNcbi8vIHJldHVybiB0aGUgY29udGFpbmluZyBibG9ja1xuXG5cbmZ1bmN0aW9uIGdldENvbnRhaW5pbmdCbG9jayhlbGVtZW50KSB7XG4gIHZhciBpc0ZpcmVmb3ggPSAvZmlyZWZveC9pLnRlc3QoZ2V0VUFTdHJpbmcoKSk7XG4gIHZhciBpc0lFID0gL1RyaWRlbnQvaS50ZXN0KGdldFVBU3RyaW5nKCkpO1xuXG4gIGlmIChpc0lFICYmIGlzSFRNTEVsZW1lbnQoZWxlbWVudCkpIHtcbiAgICAvLyBJbiBJRSA5LCAxMCBhbmQgMTEgZml4ZWQgZWxlbWVudHMgY29udGFpbmluZyBibG9jayBpcyBhbHdheXMgZXN0YWJsaXNoZWQgYnkgdGhlIHZpZXdwb3J0XG4gICAgdmFyIGVsZW1lbnRDc3MgPSBnZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpO1xuXG4gICAgaWYgKGVsZW1lbnRDc3MucG9zaXRpb24gPT09ICdmaXhlZCcpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfVxuXG4gIHZhciBjdXJyZW50Tm9kZSA9IGdldFBhcmVudE5vZGUoZWxlbWVudCk7XG5cbiAgaWYgKGlzU2hhZG93Um9vdChjdXJyZW50Tm9kZSkpIHtcbiAgICBjdXJyZW50Tm9kZSA9IGN1cnJlbnROb2RlLmhvc3Q7XG4gIH1cblxuICB3aGlsZSAoaXNIVE1MRWxlbWVudChjdXJyZW50Tm9kZSkgJiYgWydodG1sJywgJ2JvZHknXS5pbmRleE9mKGdldE5vZGVOYW1lKGN1cnJlbnROb2RlKSkgPCAwKSB7XG4gICAgdmFyIGNzcyA9IGdldENvbXB1dGVkU3R5bGUoY3VycmVudE5vZGUpOyAvLyBUaGlzIGlzIG5vbi1leGhhdXN0aXZlIGJ1dCBjb3ZlcnMgdGhlIG1vc3QgY29tbW9uIENTUyBwcm9wZXJ0aWVzIHRoYXRcbiAgICAvLyBjcmVhdGUgYSBjb250YWluaW5nIGJsb2NrLlxuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9Db250YWluaW5nX2Jsb2NrI2lkZW50aWZ5aW5nX3RoZV9jb250YWluaW5nX2Jsb2NrXG5cbiAgICBpZiAoY3NzLnRyYW5zZm9ybSAhPT0gJ25vbmUnIHx8IGNzcy5wZXJzcGVjdGl2ZSAhPT0gJ25vbmUnIHx8IGNzcy5jb250YWluID09PSAncGFpbnQnIHx8IFsndHJhbnNmb3JtJywgJ3BlcnNwZWN0aXZlJ10uaW5kZXhPZihjc3Mud2lsbENoYW5nZSkgIT09IC0xIHx8IGlzRmlyZWZveCAmJiBjc3Mud2lsbENoYW5nZSA9PT0gJ2ZpbHRlcicgfHwgaXNGaXJlZm94ICYmIGNzcy5maWx0ZXIgJiYgY3NzLmZpbHRlciAhPT0gJ25vbmUnKSB7XG4gICAgICByZXR1cm4gY3VycmVudE5vZGU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGN1cnJlbnROb2RlID0gY3VycmVudE5vZGUucGFyZW50Tm9kZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn0gLy8gR2V0cyB0aGUgY2xvc2VzdCBhbmNlc3RvciBwb3NpdGlvbmVkIGVsZW1lbnQuIEhhbmRsZXMgc29tZSBlZGdlIGNhc2VzLFxuLy8gc3VjaCBhcyB0YWJsZSBhbmNlc3RvcnMgYW5kIGNyb3NzIGJyb3dzZXIgYnVncy5cblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRPZmZzZXRQYXJlbnQoZWxlbWVudCkge1xuICB2YXIgd2luZG93ID0gZ2V0V2luZG93KGVsZW1lbnQpO1xuICB2YXIgb2Zmc2V0UGFyZW50ID0gZ2V0VHJ1ZU9mZnNldFBhcmVudChlbGVtZW50KTtcblxuICB3aGlsZSAob2Zmc2V0UGFyZW50ICYmIGlzVGFibGVFbGVtZW50KG9mZnNldFBhcmVudCkgJiYgZ2V0Q29tcHV0ZWRTdHlsZShvZmZzZXRQYXJlbnQpLnBvc2l0aW9uID09PSAnc3RhdGljJykge1xuICAgIG9mZnNldFBhcmVudCA9IGdldFRydWVPZmZzZXRQYXJlbnQob2Zmc2V0UGFyZW50KTtcbiAgfVxuXG4gIGlmIChvZmZzZXRQYXJlbnQgJiYgKGdldE5vZGVOYW1lKG9mZnNldFBhcmVudCkgPT09ICdodG1sJyB8fCBnZXROb2RlTmFtZShvZmZzZXRQYXJlbnQpID09PSAnYm9keScgJiYgZ2V0Q29tcHV0ZWRTdHlsZShvZmZzZXRQYXJlbnQpLnBvc2l0aW9uID09PSAnc3RhdGljJykpIHtcbiAgICByZXR1cm4gd2luZG93O1xuICB9XG5cbiAgcmV0dXJuIG9mZnNldFBhcmVudCB8fCBnZXRDb250YWluaW5nQmxvY2soZWxlbWVudCkgfHwgd2luZG93O1xufSIsICJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRNYWluQXhpc0Zyb21QbGFjZW1lbnQocGxhY2VtZW50KSB7XG4gIHJldHVybiBbJ3RvcCcsICdib3R0b20nXS5pbmRleE9mKHBsYWNlbWVudCkgPj0gMCA/ICd4JyA6ICd5Jztcbn0iLCAiaW1wb3J0IHsgbWF4IGFzIG1hdGhNYXgsIG1pbiBhcyBtYXRoTWluIH0gZnJvbSBcIi4vbWF0aC5qc1wiO1xuZXhwb3J0IGZ1bmN0aW9uIHdpdGhpbihtaW4sIHZhbHVlLCBtYXgpIHtcbiAgcmV0dXJuIG1hdGhNYXgobWluLCBtYXRoTWluKHZhbHVlLCBtYXgpKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiB3aXRoaW5NYXhDbGFtcChtaW4sIHZhbHVlLCBtYXgpIHtcbiAgdmFyIHYgPSB3aXRoaW4obWluLCB2YWx1ZSwgbWF4KTtcbiAgcmV0dXJuIHYgPiBtYXggPyBtYXggOiB2O1xufSIsICJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRGcmVzaFNpZGVPYmplY3QoKSB7XG4gIHJldHVybiB7XG4gICAgdG9wOiAwLFxuICAgIHJpZ2h0OiAwLFxuICAgIGJvdHRvbTogMCxcbiAgICBsZWZ0OiAwXG4gIH07XG59IiwgImltcG9ydCBnZXRGcmVzaFNpZGVPYmplY3QgZnJvbSBcIi4vZ2V0RnJlc2hTaWRlT2JqZWN0LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtZXJnZVBhZGRpbmdPYmplY3QocGFkZGluZ09iamVjdCkge1xuICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgZ2V0RnJlc2hTaWRlT2JqZWN0KCksIHBhZGRpbmdPYmplY3QpO1xufSIsICJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBleHBhbmRUb0hhc2hNYXAodmFsdWUsIGtleXMpIHtcbiAgcmV0dXJuIGtleXMucmVkdWNlKGZ1bmN0aW9uIChoYXNoTWFwLCBrZXkpIHtcbiAgICBoYXNoTWFwW2tleV0gPSB2YWx1ZTtcbiAgICByZXR1cm4gaGFzaE1hcDtcbiAgfSwge30pO1xufSIsICJpbXBvcnQgZ2V0QmFzZVBsYWNlbWVudCBmcm9tIFwiLi4vdXRpbHMvZ2V0QmFzZVBsYWNlbWVudC5qc1wiO1xuaW1wb3J0IGdldExheW91dFJlY3QgZnJvbSBcIi4uL2RvbS11dGlscy9nZXRMYXlvdXRSZWN0LmpzXCI7XG5pbXBvcnQgY29udGFpbnMgZnJvbSBcIi4uL2RvbS11dGlscy9jb250YWlucy5qc1wiO1xuaW1wb3J0IGdldE9mZnNldFBhcmVudCBmcm9tIFwiLi4vZG9tLXV0aWxzL2dldE9mZnNldFBhcmVudC5qc1wiO1xuaW1wb3J0IGdldE1haW5BeGlzRnJvbVBsYWNlbWVudCBmcm9tIFwiLi4vdXRpbHMvZ2V0TWFpbkF4aXNGcm9tUGxhY2VtZW50LmpzXCI7XG5pbXBvcnQgeyB3aXRoaW4gfSBmcm9tIFwiLi4vdXRpbHMvd2l0aGluLmpzXCI7XG5pbXBvcnQgbWVyZ2VQYWRkaW5nT2JqZWN0IGZyb20gXCIuLi91dGlscy9tZXJnZVBhZGRpbmdPYmplY3QuanNcIjtcbmltcG9ydCBleHBhbmRUb0hhc2hNYXAgZnJvbSBcIi4uL3V0aWxzL2V4cGFuZFRvSGFzaE1hcC5qc1wiO1xuaW1wb3J0IHsgbGVmdCwgcmlnaHQsIGJhc2VQbGFjZW1lbnRzLCB0b3AsIGJvdHRvbSB9IGZyb20gXCIuLi9lbnVtcy5qc1wiOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cbnZhciB0b1BhZGRpbmdPYmplY3QgPSBmdW5jdGlvbiB0b1BhZGRpbmdPYmplY3QocGFkZGluZywgc3RhdGUpIHtcbiAgcGFkZGluZyA9IHR5cGVvZiBwYWRkaW5nID09PSAnZnVuY3Rpb24nID8gcGFkZGluZyhPYmplY3QuYXNzaWduKHt9LCBzdGF0ZS5yZWN0cywge1xuICAgIHBsYWNlbWVudDogc3RhdGUucGxhY2VtZW50XG4gIH0pKSA6IHBhZGRpbmc7XG4gIHJldHVybiBtZXJnZVBhZGRpbmdPYmplY3QodHlwZW9mIHBhZGRpbmcgIT09ICdudW1iZXInID8gcGFkZGluZyA6IGV4cGFuZFRvSGFzaE1hcChwYWRkaW5nLCBiYXNlUGxhY2VtZW50cykpO1xufTtcblxuZnVuY3Rpb24gYXJyb3coX3JlZikge1xuICB2YXIgX3N0YXRlJG1vZGlmaWVyc0RhdGEkO1xuXG4gIHZhciBzdGF0ZSA9IF9yZWYuc3RhdGUsXG4gICAgICBuYW1lID0gX3JlZi5uYW1lLFxuICAgICAgb3B0aW9ucyA9IF9yZWYub3B0aW9ucztcbiAgdmFyIGFycm93RWxlbWVudCA9IHN0YXRlLmVsZW1lbnRzLmFycm93O1xuICB2YXIgcG9wcGVyT2Zmc2V0cyA9IHN0YXRlLm1vZGlmaWVyc0RhdGEucG9wcGVyT2Zmc2V0cztcbiAgdmFyIGJhc2VQbGFjZW1lbnQgPSBnZXRCYXNlUGxhY2VtZW50KHN0YXRlLnBsYWNlbWVudCk7XG4gIHZhciBheGlzID0gZ2V0TWFpbkF4aXNGcm9tUGxhY2VtZW50KGJhc2VQbGFjZW1lbnQpO1xuICB2YXIgaXNWZXJ0aWNhbCA9IFtsZWZ0LCByaWdodF0uaW5kZXhPZihiYXNlUGxhY2VtZW50KSA+PSAwO1xuICB2YXIgbGVuID0gaXNWZXJ0aWNhbCA/ICdoZWlnaHQnIDogJ3dpZHRoJztcblxuICBpZiAoIWFycm93RWxlbWVudCB8fCAhcG9wcGVyT2Zmc2V0cykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciBwYWRkaW5nT2JqZWN0ID0gdG9QYWRkaW5nT2JqZWN0KG9wdGlvbnMucGFkZGluZywgc3RhdGUpO1xuICB2YXIgYXJyb3dSZWN0ID0gZ2V0TGF5b3V0UmVjdChhcnJvd0VsZW1lbnQpO1xuICB2YXIgbWluUHJvcCA9IGF4aXMgPT09ICd5JyA/IHRvcCA6IGxlZnQ7XG4gIHZhciBtYXhQcm9wID0gYXhpcyA9PT0gJ3knID8gYm90dG9tIDogcmlnaHQ7XG4gIHZhciBlbmREaWZmID0gc3RhdGUucmVjdHMucmVmZXJlbmNlW2xlbl0gKyBzdGF0ZS5yZWN0cy5yZWZlcmVuY2VbYXhpc10gLSBwb3BwZXJPZmZzZXRzW2F4aXNdIC0gc3RhdGUucmVjdHMucG9wcGVyW2xlbl07XG4gIHZhciBzdGFydERpZmYgPSBwb3BwZXJPZmZzZXRzW2F4aXNdIC0gc3RhdGUucmVjdHMucmVmZXJlbmNlW2F4aXNdO1xuICB2YXIgYXJyb3dPZmZzZXRQYXJlbnQgPSBnZXRPZmZzZXRQYXJlbnQoYXJyb3dFbGVtZW50KTtcbiAgdmFyIGNsaWVudFNpemUgPSBhcnJvd09mZnNldFBhcmVudCA/IGF4aXMgPT09ICd5JyA/IGFycm93T2Zmc2V0UGFyZW50LmNsaWVudEhlaWdodCB8fCAwIDogYXJyb3dPZmZzZXRQYXJlbnQuY2xpZW50V2lkdGggfHwgMCA6IDA7XG4gIHZhciBjZW50ZXJUb1JlZmVyZW5jZSA9IGVuZERpZmYgLyAyIC0gc3RhcnREaWZmIC8gMjsgLy8gTWFrZSBzdXJlIHRoZSBhcnJvdyBkb2Vzbid0IG92ZXJmbG93IHRoZSBwb3BwZXIgaWYgdGhlIGNlbnRlciBwb2ludCBpc1xuICAvLyBvdXRzaWRlIG9mIHRoZSBwb3BwZXIgYm91bmRzXG5cbiAgdmFyIG1pbiA9IHBhZGRpbmdPYmplY3RbbWluUHJvcF07XG4gIHZhciBtYXggPSBjbGllbnRTaXplIC0gYXJyb3dSZWN0W2xlbl0gLSBwYWRkaW5nT2JqZWN0W21heFByb3BdO1xuICB2YXIgY2VudGVyID0gY2xpZW50U2l6ZSAvIDIgLSBhcnJvd1JlY3RbbGVuXSAvIDIgKyBjZW50ZXJUb1JlZmVyZW5jZTtcbiAgdmFyIG9mZnNldCA9IHdpdGhpbihtaW4sIGNlbnRlciwgbWF4KTsgLy8gUHJldmVudHMgYnJlYWtpbmcgc3ludGF4IGhpZ2hsaWdodGluZy4uLlxuXG4gIHZhciBheGlzUHJvcCA9IGF4aXM7XG4gIHN0YXRlLm1vZGlmaWVyc0RhdGFbbmFtZV0gPSAoX3N0YXRlJG1vZGlmaWVyc0RhdGEkID0ge30sIF9zdGF0ZSRtb2RpZmllcnNEYXRhJFtheGlzUHJvcF0gPSBvZmZzZXQsIF9zdGF0ZSRtb2RpZmllcnNEYXRhJC5jZW50ZXJPZmZzZXQgPSBvZmZzZXQgLSBjZW50ZXIsIF9zdGF0ZSRtb2RpZmllcnNEYXRhJCk7XG59XG5cbmZ1bmN0aW9uIGVmZmVjdChfcmVmMikge1xuICB2YXIgc3RhdGUgPSBfcmVmMi5zdGF0ZSxcbiAgICAgIG9wdGlvbnMgPSBfcmVmMi5vcHRpb25zO1xuICB2YXIgX29wdGlvbnMkZWxlbWVudCA9IG9wdGlvbnMuZWxlbWVudCxcbiAgICAgIGFycm93RWxlbWVudCA9IF9vcHRpb25zJGVsZW1lbnQgPT09IHZvaWQgMCA/ICdbZGF0YS1wb3BwZXItYXJyb3ddJyA6IF9vcHRpb25zJGVsZW1lbnQ7XG5cbiAgaWYgKGFycm93RWxlbWVudCA9PSBudWxsKSB7XG4gICAgcmV0dXJuO1xuICB9IC8vIENTUyBzZWxlY3RvclxuXG5cbiAgaWYgKHR5cGVvZiBhcnJvd0VsZW1lbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgYXJyb3dFbGVtZW50ID0gc3RhdGUuZWxlbWVudHMucG9wcGVyLnF1ZXJ5U2VsZWN0b3IoYXJyb3dFbGVtZW50KTtcblxuICAgIGlmICghYXJyb3dFbGVtZW50KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG5cbiAgaWYgKCFjb250YWlucyhzdGF0ZS5lbGVtZW50cy5wb3BwZXIsIGFycm93RWxlbWVudCkpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBzdGF0ZS5lbGVtZW50cy5hcnJvdyA9IGFycm93RWxlbWVudDtcbn0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ2Fycm93JyxcbiAgZW5hYmxlZDogdHJ1ZSxcbiAgcGhhc2U6ICdtYWluJyxcbiAgZm46IGFycm93LFxuICBlZmZlY3Q6IGVmZmVjdCxcbiAgcmVxdWlyZXM6IFsncG9wcGVyT2Zmc2V0cyddLFxuICByZXF1aXJlc0lmRXhpc3RzOiBbJ3ByZXZlbnRPdmVyZmxvdyddXG59OyIsICJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRWYXJpYXRpb24ocGxhY2VtZW50KSB7XG4gIHJldHVybiBwbGFjZW1lbnQuc3BsaXQoJy0nKVsxXTtcbn0iLCAiaW1wb3J0IHsgdG9wLCBsZWZ0LCByaWdodCwgYm90dG9tLCBlbmQgfSBmcm9tIFwiLi4vZW51bXMuanNcIjtcbmltcG9ydCBnZXRPZmZzZXRQYXJlbnQgZnJvbSBcIi4uL2RvbS11dGlscy9nZXRPZmZzZXRQYXJlbnQuanNcIjtcbmltcG9ydCBnZXRXaW5kb3cgZnJvbSBcIi4uL2RvbS11dGlscy9nZXRXaW5kb3cuanNcIjtcbmltcG9ydCBnZXREb2N1bWVudEVsZW1lbnQgZnJvbSBcIi4uL2RvbS11dGlscy9nZXREb2N1bWVudEVsZW1lbnQuanNcIjtcbmltcG9ydCBnZXRDb21wdXRlZFN0eWxlIGZyb20gXCIuLi9kb20tdXRpbHMvZ2V0Q29tcHV0ZWRTdHlsZS5qc1wiO1xuaW1wb3J0IGdldEJhc2VQbGFjZW1lbnQgZnJvbSBcIi4uL3V0aWxzL2dldEJhc2VQbGFjZW1lbnQuanNcIjtcbmltcG9ydCBnZXRWYXJpYXRpb24gZnJvbSBcIi4uL3V0aWxzL2dldFZhcmlhdGlvbi5qc1wiO1xuaW1wb3J0IHsgcm91bmQgfSBmcm9tIFwiLi4vdXRpbHMvbWF0aC5qc1wiOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cbnZhciB1bnNldFNpZGVzID0ge1xuICB0b3A6ICdhdXRvJyxcbiAgcmlnaHQ6ICdhdXRvJyxcbiAgYm90dG9tOiAnYXV0bycsXG4gIGxlZnQ6ICdhdXRvJ1xufTsgLy8gUm91bmQgdGhlIG9mZnNldHMgdG8gdGhlIG5lYXJlc3Qgc3VpdGFibGUgc3VicGl4ZWwgYmFzZWQgb24gdGhlIERQUi5cbi8vIFpvb21pbmcgY2FuIGNoYW5nZSB0aGUgRFBSLCBidXQgaXQgc2VlbXMgdG8gcmVwb3J0IGEgdmFsdWUgdGhhdCB3aWxsXG4vLyBjbGVhbmx5IGRpdmlkZSB0aGUgdmFsdWVzIGludG8gdGhlIGFwcHJvcHJpYXRlIHN1YnBpeGVscy5cblxuZnVuY3Rpb24gcm91bmRPZmZzZXRzQnlEUFIoX3JlZiwgd2luKSB7XG4gIHZhciB4ID0gX3JlZi54LFxuICAgICAgeSA9IF9yZWYueTtcbiAgdmFyIGRwciA9IHdpbi5kZXZpY2VQaXhlbFJhdGlvIHx8IDE7XG4gIHJldHVybiB7XG4gICAgeDogcm91bmQoeCAqIGRwcikgLyBkcHIgfHwgMCxcbiAgICB5OiByb3VuZCh5ICogZHByKSAvIGRwciB8fCAwXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtYXBUb1N0eWxlcyhfcmVmMikge1xuICB2YXIgX09iamVjdCRhc3NpZ24yO1xuXG4gIHZhciBwb3BwZXIgPSBfcmVmMi5wb3BwZXIsXG4gICAgICBwb3BwZXJSZWN0ID0gX3JlZjIucG9wcGVyUmVjdCxcbiAgICAgIHBsYWNlbWVudCA9IF9yZWYyLnBsYWNlbWVudCxcbiAgICAgIHZhcmlhdGlvbiA9IF9yZWYyLnZhcmlhdGlvbixcbiAgICAgIG9mZnNldHMgPSBfcmVmMi5vZmZzZXRzLFxuICAgICAgcG9zaXRpb24gPSBfcmVmMi5wb3NpdGlvbixcbiAgICAgIGdwdUFjY2VsZXJhdGlvbiA9IF9yZWYyLmdwdUFjY2VsZXJhdGlvbixcbiAgICAgIGFkYXB0aXZlID0gX3JlZjIuYWRhcHRpdmUsXG4gICAgICByb3VuZE9mZnNldHMgPSBfcmVmMi5yb3VuZE9mZnNldHMsXG4gICAgICBpc0ZpeGVkID0gX3JlZjIuaXNGaXhlZDtcbiAgdmFyIF9vZmZzZXRzJHggPSBvZmZzZXRzLngsXG4gICAgICB4ID0gX29mZnNldHMkeCA9PT0gdm9pZCAwID8gMCA6IF9vZmZzZXRzJHgsXG4gICAgICBfb2Zmc2V0cyR5ID0gb2Zmc2V0cy55LFxuICAgICAgeSA9IF9vZmZzZXRzJHkgPT09IHZvaWQgMCA/IDAgOiBfb2Zmc2V0cyR5O1xuXG4gIHZhciBfcmVmMyA9IHR5cGVvZiByb3VuZE9mZnNldHMgPT09ICdmdW5jdGlvbicgPyByb3VuZE9mZnNldHMoe1xuICAgIHg6IHgsXG4gICAgeTogeVxuICB9KSA6IHtcbiAgICB4OiB4LFxuICAgIHk6IHlcbiAgfTtcblxuICB4ID0gX3JlZjMueDtcbiAgeSA9IF9yZWYzLnk7XG4gIHZhciBoYXNYID0gb2Zmc2V0cy5oYXNPd25Qcm9wZXJ0eSgneCcpO1xuICB2YXIgaGFzWSA9IG9mZnNldHMuaGFzT3duUHJvcGVydHkoJ3knKTtcbiAgdmFyIHNpZGVYID0gbGVmdDtcbiAgdmFyIHNpZGVZID0gdG9wO1xuICB2YXIgd2luID0gd2luZG93O1xuXG4gIGlmIChhZGFwdGl2ZSkge1xuICAgIHZhciBvZmZzZXRQYXJlbnQgPSBnZXRPZmZzZXRQYXJlbnQocG9wcGVyKTtcbiAgICB2YXIgaGVpZ2h0UHJvcCA9ICdjbGllbnRIZWlnaHQnO1xuICAgIHZhciB3aWR0aFByb3AgPSAnY2xpZW50V2lkdGgnO1xuXG4gICAgaWYgKG9mZnNldFBhcmVudCA9PT0gZ2V0V2luZG93KHBvcHBlcikpIHtcbiAgICAgIG9mZnNldFBhcmVudCA9IGdldERvY3VtZW50RWxlbWVudChwb3BwZXIpO1xuXG4gICAgICBpZiAoZ2V0Q29tcHV0ZWRTdHlsZShvZmZzZXRQYXJlbnQpLnBvc2l0aW9uICE9PSAnc3RhdGljJyAmJiBwb3NpdGlvbiA9PT0gJ2Fic29sdXRlJykge1xuICAgICAgICBoZWlnaHRQcm9wID0gJ3Njcm9sbEhlaWdodCc7XG4gICAgICAgIHdpZHRoUHJvcCA9ICdzY3JvbGxXaWR0aCc7XG4gICAgICB9XG4gICAgfSAvLyAkRmxvd0ZpeE1lW2luY29tcGF0aWJsZS1jYXN0XTogZm9yY2UgdHlwZSByZWZpbmVtZW50LCB3ZSBjb21wYXJlIG9mZnNldFBhcmVudCB3aXRoIHdpbmRvdyBhYm92ZSwgYnV0IEZsb3cgZG9lc24ndCBkZXRlY3QgaXRcblxuXG4gICAgb2Zmc2V0UGFyZW50ID0gb2Zmc2V0UGFyZW50O1xuXG4gICAgaWYgKHBsYWNlbWVudCA9PT0gdG9wIHx8IChwbGFjZW1lbnQgPT09IGxlZnQgfHwgcGxhY2VtZW50ID09PSByaWdodCkgJiYgdmFyaWF0aW9uID09PSBlbmQpIHtcbiAgICAgIHNpZGVZID0gYm90dG9tO1xuICAgICAgdmFyIG9mZnNldFkgPSBpc0ZpeGVkICYmIG9mZnNldFBhcmVudCA9PT0gd2luICYmIHdpbi52aXN1YWxWaWV3cG9ydCA/IHdpbi52aXN1YWxWaWV3cG9ydC5oZWlnaHQgOiAvLyAkRmxvd0ZpeE1lW3Byb3AtbWlzc2luZ11cbiAgICAgIG9mZnNldFBhcmVudFtoZWlnaHRQcm9wXTtcbiAgICAgIHkgLT0gb2Zmc2V0WSAtIHBvcHBlclJlY3QuaGVpZ2h0O1xuICAgICAgeSAqPSBncHVBY2NlbGVyYXRpb24gPyAxIDogLTE7XG4gICAgfVxuXG4gICAgaWYgKHBsYWNlbWVudCA9PT0gbGVmdCB8fCAocGxhY2VtZW50ID09PSB0b3AgfHwgcGxhY2VtZW50ID09PSBib3R0b20pICYmIHZhcmlhdGlvbiA9PT0gZW5kKSB7XG4gICAgICBzaWRlWCA9IHJpZ2h0O1xuICAgICAgdmFyIG9mZnNldFggPSBpc0ZpeGVkICYmIG9mZnNldFBhcmVudCA9PT0gd2luICYmIHdpbi52aXN1YWxWaWV3cG9ydCA/IHdpbi52aXN1YWxWaWV3cG9ydC53aWR0aCA6IC8vICRGbG93Rml4TWVbcHJvcC1taXNzaW5nXVxuICAgICAgb2Zmc2V0UGFyZW50W3dpZHRoUHJvcF07XG4gICAgICB4IC09IG9mZnNldFggLSBwb3BwZXJSZWN0LndpZHRoO1xuICAgICAgeCAqPSBncHVBY2NlbGVyYXRpb24gPyAxIDogLTE7XG4gICAgfVxuICB9XG5cbiAgdmFyIGNvbW1vblN0eWxlcyA9IE9iamVjdC5hc3NpZ24oe1xuICAgIHBvc2l0aW9uOiBwb3NpdGlvblxuICB9LCBhZGFwdGl2ZSAmJiB1bnNldFNpZGVzKTtcblxuICB2YXIgX3JlZjQgPSByb3VuZE9mZnNldHMgPT09IHRydWUgPyByb3VuZE9mZnNldHNCeURQUih7XG4gICAgeDogeCxcbiAgICB5OiB5XG4gIH0sIGdldFdpbmRvdyhwb3BwZXIpKSA6IHtcbiAgICB4OiB4LFxuICAgIHk6IHlcbiAgfTtcblxuICB4ID0gX3JlZjQueDtcbiAgeSA9IF9yZWY0Lnk7XG5cbiAgaWYgKGdwdUFjY2VsZXJhdGlvbikge1xuICAgIHZhciBfT2JqZWN0JGFzc2lnbjtcblxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBjb21tb25TdHlsZXMsIChfT2JqZWN0JGFzc2lnbiA9IHt9LCBfT2JqZWN0JGFzc2lnbltzaWRlWV0gPSBoYXNZID8gJzAnIDogJycsIF9PYmplY3QkYXNzaWduW3NpZGVYXSA9IGhhc1ggPyAnMCcgOiAnJywgX09iamVjdCRhc3NpZ24udHJhbnNmb3JtID0gKHdpbi5kZXZpY2VQaXhlbFJhdGlvIHx8IDEpIDw9IDEgPyBcInRyYW5zbGF0ZShcIiArIHggKyBcInB4LCBcIiArIHkgKyBcInB4KVwiIDogXCJ0cmFuc2xhdGUzZChcIiArIHggKyBcInB4LCBcIiArIHkgKyBcInB4LCAwKVwiLCBfT2JqZWN0JGFzc2lnbikpO1xuICB9XG5cbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIGNvbW1vblN0eWxlcywgKF9PYmplY3QkYXNzaWduMiA9IHt9LCBfT2JqZWN0JGFzc2lnbjJbc2lkZVldID0gaGFzWSA/IHkgKyBcInB4XCIgOiAnJywgX09iamVjdCRhc3NpZ24yW3NpZGVYXSA9IGhhc1ggPyB4ICsgXCJweFwiIDogJycsIF9PYmplY3QkYXNzaWduMi50cmFuc2Zvcm0gPSAnJywgX09iamVjdCRhc3NpZ24yKSk7XG59XG5cbmZ1bmN0aW9uIGNvbXB1dGVTdHlsZXMoX3JlZjUpIHtcbiAgdmFyIHN0YXRlID0gX3JlZjUuc3RhdGUsXG4gICAgICBvcHRpb25zID0gX3JlZjUub3B0aW9ucztcbiAgdmFyIF9vcHRpb25zJGdwdUFjY2VsZXJhdCA9IG9wdGlvbnMuZ3B1QWNjZWxlcmF0aW9uLFxuICAgICAgZ3B1QWNjZWxlcmF0aW9uID0gX29wdGlvbnMkZ3B1QWNjZWxlcmF0ID09PSB2b2lkIDAgPyB0cnVlIDogX29wdGlvbnMkZ3B1QWNjZWxlcmF0LFxuICAgICAgX29wdGlvbnMkYWRhcHRpdmUgPSBvcHRpb25zLmFkYXB0aXZlLFxuICAgICAgYWRhcHRpdmUgPSBfb3B0aW9ucyRhZGFwdGl2ZSA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9vcHRpb25zJGFkYXB0aXZlLFxuICAgICAgX29wdGlvbnMkcm91bmRPZmZzZXRzID0gb3B0aW9ucy5yb3VuZE9mZnNldHMsXG4gICAgICByb3VuZE9mZnNldHMgPSBfb3B0aW9ucyRyb3VuZE9mZnNldHMgPT09IHZvaWQgMCA/IHRydWUgOiBfb3B0aW9ucyRyb3VuZE9mZnNldHM7XG4gIHZhciBjb21tb25TdHlsZXMgPSB7XG4gICAgcGxhY2VtZW50OiBnZXRCYXNlUGxhY2VtZW50KHN0YXRlLnBsYWNlbWVudCksXG4gICAgdmFyaWF0aW9uOiBnZXRWYXJpYXRpb24oc3RhdGUucGxhY2VtZW50KSxcbiAgICBwb3BwZXI6IHN0YXRlLmVsZW1lbnRzLnBvcHBlcixcbiAgICBwb3BwZXJSZWN0OiBzdGF0ZS5yZWN0cy5wb3BwZXIsXG4gICAgZ3B1QWNjZWxlcmF0aW9uOiBncHVBY2NlbGVyYXRpb24sXG4gICAgaXNGaXhlZDogc3RhdGUub3B0aW9ucy5zdHJhdGVneSA9PT0gJ2ZpeGVkJ1xuICB9O1xuXG4gIGlmIChzdGF0ZS5tb2RpZmllcnNEYXRhLnBvcHBlck9mZnNldHMgIT0gbnVsbCkge1xuICAgIHN0YXRlLnN0eWxlcy5wb3BwZXIgPSBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZS5zdHlsZXMucG9wcGVyLCBtYXBUb1N0eWxlcyhPYmplY3QuYXNzaWduKHt9LCBjb21tb25TdHlsZXMsIHtcbiAgICAgIG9mZnNldHM6IHN0YXRlLm1vZGlmaWVyc0RhdGEucG9wcGVyT2Zmc2V0cyxcbiAgICAgIHBvc2l0aW9uOiBzdGF0ZS5vcHRpb25zLnN0cmF0ZWd5LFxuICAgICAgYWRhcHRpdmU6IGFkYXB0aXZlLFxuICAgICAgcm91bmRPZmZzZXRzOiByb3VuZE9mZnNldHNcbiAgICB9KSkpO1xuICB9XG5cbiAgaWYgKHN0YXRlLm1vZGlmaWVyc0RhdGEuYXJyb3cgIT0gbnVsbCkge1xuICAgIHN0YXRlLnN0eWxlcy5hcnJvdyA9IE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLnN0eWxlcy5hcnJvdywgbWFwVG9TdHlsZXMoT2JqZWN0LmFzc2lnbih7fSwgY29tbW9uU3R5bGVzLCB7XG4gICAgICBvZmZzZXRzOiBzdGF0ZS5tb2RpZmllcnNEYXRhLmFycm93LFxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICBhZGFwdGl2ZTogZmFsc2UsXG4gICAgICByb3VuZE9mZnNldHM6IHJvdW5kT2Zmc2V0c1xuICAgIH0pKSk7XG4gIH1cblxuICBzdGF0ZS5hdHRyaWJ1dGVzLnBvcHBlciA9IE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLmF0dHJpYnV0ZXMucG9wcGVyLCB7XG4gICAgJ2RhdGEtcG9wcGVyLXBsYWNlbWVudCc6IHN0YXRlLnBsYWNlbWVudFxuICB9KTtcbn0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ2NvbXB1dGVTdHlsZXMnLFxuICBlbmFibGVkOiB0cnVlLFxuICBwaGFzZTogJ2JlZm9yZVdyaXRlJyxcbiAgZm46IGNvbXB1dGVTdHlsZXMsXG4gIGRhdGE6IHt9XG59OyIsICJpbXBvcnQgZ2V0V2luZG93IGZyb20gXCIuLi9kb20tdXRpbHMvZ2V0V2luZG93LmpzXCI7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxudmFyIHBhc3NpdmUgPSB7XG4gIHBhc3NpdmU6IHRydWVcbn07XG5cbmZ1bmN0aW9uIGVmZmVjdChfcmVmKSB7XG4gIHZhciBzdGF0ZSA9IF9yZWYuc3RhdGUsXG4gICAgICBpbnN0YW5jZSA9IF9yZWYuaW5zdGFuY2UsXG4gICAgICBvcHRpb25zID0gX3JlZi5vcHRpb25zO1xuICB2YXIgX29wdGlvbnMkc2Nyb2xsID0gb3B0aW9ucy5zY3JvbGwsXG4gICAgICBzY3JvbGwgPSBfb3B0aW9ucyRzY3JvbGwgPT09IHZvaWQgMCA/IHRydWUgOiBfb3B0aW9ucyRzY3JvbGwsXG4gICAgICBfb3B0aW9ucyRyZXNpemUgPSBvcHRpb25zLnJlc2l6ZSxcbiAgICAgIHJlc2l6ZSA9IF9vcHRpb25zJHJlc2l6ZSA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9vcHRpb25zJHJlc2l6ZTtcbiAgdmFyIHdpbmRvdyA9IGdldFdpbmRvdyhzdGF0ZS5lbGVtZW50cy5wb3BwZXIpO1xuICB2YXIgc2Nyb2xsUGFyZW50cyA9IFtdLmNvbmNhdChzdGF0ZS5zY3JvbGxQYXJlbnRzLnJlZmVyZW5jZSwgc3RhdGUuc2Nyb2xsUGFyZW50cy5wb3BwZXIpO1xuXG4gIGlmIChzY3JvbGwpIHtcbiAgICBzY3JvbGxQYXJlbnRzLmZvckVhY2goZnVuY3Rpb24gKHNjcm9sbFBhcmVudCkge1xuICAgICAgc2Nyb2xsUGFyZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGluc3RhbmNlLnVwZGF0ZSwgcGFzc2l2ZSk7XG4gICAgfSk7XG4gIH1cblxuICBpZiAocmVzaXplKSB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGluc3RhbmNlLnVwZGF0ZSwgcGFzc2l2ZSk7XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIGlmIChzY3JvbGwpIHtcbiAgICAgIHNjcm9sbFBhcmVudHMuZm9yRWFjaChmdW5jdGlvbiAoc2Nyb2xsUGFyZW50KSB7XG4gICAgICAgIHNjcm9sbFBhcmVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBpbnN0YW5jZS51cGRhdGUsIHBhc3NpdmUpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKHJlc2l6ZSkge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGluc3RhbmNlLnVwZGF0ZSwgcGFzc2l2ZSk7XG4gICAgfVxuICB9O1xufSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnZXZlbnRMaXN0ZW5lcnMnLFxuICBlbmFibGVkOiB0cnVlLFxuICBwaGFzZTogJ3dyaXRlJyxcbiAgZm46IGZ1bmN0aW9uIGZuKCkge30sXG4gIGVmZmVjdDogZWZmZWN0LFxuICBkYXRhOiB7fVxufTsiLCAidmFyIGhhc2ggPSB7XG4gIGxlZnQ6ICdyaWdodCcsXG4gIHJpZ2h0OiAnbGVmdCcsXG4gIGJvdHRvbTogJ3RvcCcsXG4gIHRvcDogJ2JvdHRvbSdcbn07XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRPcHBvc2l0ZVBsYWNlbWVudChwbGFjZW1lbnQpIHtcbiAgcmV0dXJuIHBsYWNlbWVudC5yZXBsYWNlKC9sZWZ0fHJpZ2h0fGJvdHRvbXx0b3AvZywgZnVuY3Rpb24gKG1hdGNoZWQpIHtcbiAgICByZXR1cm4gaGFzaFttYXRjaGVkXTtcbiAgfSk7XG59IiwgInZhciBoYXNoID0ge1xuICBzdGFydDogJ2VuZCcsXG4gIGVuZDogJ3N0YXJ0J1xufTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldE9wcG9zaXRlVmFyaWF0aW9uUGxhY2VtZW50KHBsYWNlbWVudCkge1xuICByZXR1cm4gcGxhY2VtZW50LnJlcGxhY2UoL3N0YXJ0fGVuZC9nLCBmdW5jdGlvbiAobWF0Y2hlZCkge1xuICAgIHJldHVybiBoYXNoW21hdGNoZWRdO1xuICB9KTtcbn0iLCAiaW1wb3J0IGdldFdpbmRvdyBmcm9tIFwiLi9nZXRXaW5kb3cuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFdpbmRvd1Njcm9sbChub2RlKSB7XG4gIHZhciB3aW4gPSBnZXRXaW5kb3cobm9kZSk7XG4gIHZhciBzY3JvbGxMZWZ0ID0gd2luLnBhZ2VYT2Zmc2V0O1xuICB2YXIgc2Nyb2xsVG9wID0gd2luLnBhZ2VZT2Zmc2V0O1xuICByZXR1cm4ge1xuICAgIHNjcm9sbExlZnQ6IHNjcm9sbExlZnQsXG4gICAgc2Nyb2xsVG9wOiBzY3JvbGxUb3BcbiAgfTtcbn0iLCAiaW1wb3J0IGdldEJvdW5kaW5nQ2xpZW50UmVjdCBmcm9tIFwiLi9nZXRCb3VuZGluZ0NsaWVudFJlY3QuanNcIjtcbmltcG9ydCBnZXREb2N1bWVudEVsZW1lbnQgZnJvbSBcIi4vZ2V0RG9jdW1lbnRFbGVtZW50LmpzXCI7XG5pbXBvcnQgZ2V0V2luZG93U2Nyb2xsIGZyb20gXCIuL2dldFdpbmRvd1Njcm9sbC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0V2luZG93U2Nyb2xsQmFyWChlbGVtZW50KSB7XG4gIC8vIElmIDxodG1sPiBoYXMgYSBDU1Mgd2lkdGggZ3JlYXRlciB0aGFuIHRoZSB2aWV3cG9ydCwgdGhlbiB0aGlzIHdpbGwgYmVcbiAgLy8gaW5jb3JyZWN0IGZvciBSVEwuXG4gIC8vIFBvcHBlciAxIGlzIGJyb2tlbiBpbiB0aGlzIGNhc2UgYW5kIG5ldmVyIGhhZCBhIGJ1ZyByZXBvcnQgc28gbGV0J3MgYXNzdW1lXG4gIC8vIGl0J3Mgbm90IGFuIGlzc3VlLiBJIGRvbid0IHRoaW5rIGFueW9uZSBldmVyIHNwZWNpZmllcyB3aWR0aCBvbiA8aHRtbD5cbiAgLy8gYW55d2F5LlxuICAvLyBCcm93c2VycyB3aGVyZSB0aGUgbGVmdCBzY3JvbGxiYXIgZG9lc24ndCBjYXVzZSBhbiBpc3N1ZSByZXBvcnQgYDBgIGZvclxuICAvLyB0aGlzIChlLmcuIEVkZ2UgMjAxOSwgSUUxMSwgU2FmYXJpKVxuICByZXR1cm4gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KGdldERvY3VtZW50RWxlbWVudChlbGVtZW50KSkubGVmdCArIGdldFdpbmRvd1Njcm9sbChlbGVtZW50KS5zY3JvbGxMZWZ0O1xufSIsICJpbXBvcnQgZ2V0V2luZG93IGZyb20gXCIuL2dldFdpbmRvdy5qc1wiO1xuaW1wb3J0IGdldERvY3VtZW50RWxlbWVudCBmcm9tIFwiLi9nZXREb2N1bWVudEVsZW1lbnQuanNcIjtcbmltcG9ydCBnZXRXaW5kb3dTY3JvbGxCYXJYIGZyb20gXCIuL2dldFdpbmRvd1Njcm9sbEJhclguanNcIjtcbmltcG9ydCBpc0xheW91dFZpZXdwb3J0IGZyb20gXCIuL2lzTGF5b3V0Vmlld3BvcnQuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFZpZXdwb3J0UmVjdChlbGVtZW50LCBzdHJhdGVneSkge1xuICB2YXIgd2luID0gZ2V0V2luZG93KGVsZW1lbnQpO1xuICB2YXIgaHRtbCA9IGdldERvY3VtZW50RWxlbWVudChlbGVtZW50KTtcbiAgdmFyIHZpc3VhbFZpZXdwb3J0ID0gd2luLnZpc3VhbFZpZXdwb3J0O1xuICB2YXIgd2lkdGggPSBodG1sLmNsaWVudFdpZHRoO1xuICB2YXIgaGVpZ2h0ID0gaHRtbC5jbGllbnRIZWlnaHQ7XG4gIHZhciB4ID0gMDtcbiAgdmFyIHkgPSAwO1xuXG4gIGlmICh2aXN1YWxWaWV3cG9ydCkge1xuICAgIHdpZHRoID0gdmlzdWFsVmlld3BvcnQud2lkdGg7XG4gICAgaGVpZ2h0ID0gdmlzdWFsVmlld3BvcnQuaGVpZ2h0O1xuICAgIHZhciBsYXlvdXRWaWV3cG9ydCA9IGlzTGF5b3V0Vmlld3BvcnQoKTtcblxuICAgIGlmIChsYXlvdXRWaWV3cG9ydCB8fCAhbGF5b3V0Vmlld3BvcnQgJiYgc3RyYXRlZ3kgPT09ICdmaXhlZCcpIHtcbiAgICAgIHggPSB2aXN1YWxWaWV3cG9ydC5vZmZzZXRMZWZ0O1xuICAgICAgeSA9IHZpc3VhbFZpZXdwb3J0Lm9mZnNldFRvcDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHdpZHRoOiB3aWR0aCxcbiAgICBoZWlnaHQ6IGhlaWdodCxcbiAgICB4OiB4ICsgZ2V0V2luZG93U2Nyb2xsQmFyWChlbGVtZW50KSxcbiAgICB5OiB5XG4gIH07XG59IiwgImltcG9ydCBnZXREb2N1bWVudEVsZW1lbnQgZnJvbSBcIi4vZ2V0RG9jdW1lbnRFbGVtZW50LmpzXCI7XG5pbXBvcnQgZ2V0Q29tcHV0ZWRTdHlsZSBmcm9tIFwiLi9nZXRDb21wdXRlZFN0eWxlLmpzXCI7XG5pbXBvcnQgZ2V0V2luZG93U2Nyb2xsQmFyWCBmcm9tIFwiLi9nZXRXaW5kb3dTY3JvbGxCYXJYLmpzXCI7XG5pbXBvcnQgZ2V0V2luZG93U2Nyb2xsIGZyb20gXCIuL2dldFdpbmRvd1Njcm9sbC5qc1wiO1xuaW1wb3J0IHsgbWF4IH0gZnJvbSBcIi4uL3V0aWxzL21hdGguanNcIjsgLy8gR2V0cyB0aGUgZW50aXJlIHNpemUgb2YgdGhlIHNjcm9sbGFibGUgZG9jdW1lbnQgYXJlYSwgZXZlbiBleHRlbmRpbmcgb3V0c2lkZVxuLy8gb2YgdGhlIGA8aHRtbD5gIGFuZCBgPGJvZHk+YCByZWN0IGJvdW5kcyBpZiBob3Jpem9udGFsbHkgc2Nyb2xsYWJsZVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXREb2N1bWVudFJlY3QoZWxlbWVudCkge1xuICB2YXIgX2VsZW1lbnQkb3duZXJEb2N1bWVuO1xuXG4gIHZhciBodG1sID0gZ2V0RG9jdW1lbnRFbGVtZW50KGVsZW1lbnQpO1xuICB2YXIgd2luU2Nyb2xsID0gZ2V0V2luZG93U2Nyb2xsKGVsZW1lbnQpO1xuICB2YXIgYm9keSA9IChfZWxlbWVudCRvd25lckRvY3VtZW4gPSBlbGVtZW50Lm93bmVyRG9jdW1lbnQpID09IG51bGwgPyB2b2lkIDAgOiBfZWxlbWVudCRvd25lckRvY3VtZW4uYm9keTtcbiAgdmFyIHdpZHRoID0gbWF4KGh0bWwuc2Nyb2xsV2lkdGgsIGh0bWwuY2xpZW50V2lkdGgsIGJvZHkgPyBib2R5LnNjcm9sbFdpZHRoIDogMCwgYm9keSA/IGJvZHkuY2xpZW50V2lkdGggOiAwKTtcbiAgdmFyIGhlaWdodCA9IG1heChodG1sLnNjcm9sbEhlaWdodCwgaHRtbC5jbGllbnRIZWlnaHQsIGJvZHkgPyBib2R5LnNjcm9sbEhlaWdodCA6IDAsIGJvZHkgPyBib2R5LmNsaWVudEhlaWdodCA6IDApO1xuICB2YXIgeCA9IC13aW5TY3JvbGwuc2Nyb2xsTGVmdCArIGdldFdpbmRvd1Njcm9sbEJhclgoZWxlbWVudCk7XG4gIHZhciB5ID0gLXdpblNjcm9sbC5zY3JvbGxUb3A7XG5cbiAgaWYgKGdldENvbXB1dGVkU3R5bGUoYm9keSB8fCBodG1sKS5kaXJlY3Rpb24gPT09ICdydGwnKSB7XG4gICAgeCArPSBtYXgoaHRtbC5jbGllbnRXaWR0aCwgYm9keSA/IGJvZHkuY2xpZW50V2lkdGggOiAwKSAtIHdpZHRoO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB3aWR0aDogd2lkdGgsXG4gICAgaGVpZ2h0OiBoZWlnaHQsXG4gICAgeDogeCxcbiAgICB5OiB5XG4gIH07XG59IiwgImltcG9ydCBnZXRDb21wdXRlZFN0eWxlIGZyb20gXCIuL2dldENvbXB1dGVkU3R5bGUuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzU2Nyb2xsUGFyZW50KGVsZW1lbnQpIHtcbiAgLy8gRmlyZWZveCB3YW50cyB1cyB0byBjaGVjayBgLXhgIGFuZCBgLXlgIHZhcmlhdGlvbnMgYXMgd2VsbFxuICB2YXIgX2dldENvbXB1dGVkU3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpLFxuICAgICAgb3ZlcmZsb3cgPSBfZ2V0Q29tcHV0ZWRTdHlsZS5vdmVyZmxvdyxcbiAgICAgIG92ZXJmbG93WCA9IF9nZXRDb21wdXRlZFN0eWxlLm92ZXJmbG93WCxcbiAgICAgIG92ZXJmbG93WSA9IF9nZXRDb21wdXRlZFN0eWxlLm92ZXJmbG93WTtcblxuICByZXR1cm4gL2F1dG98c2Nyb2xsfG92ZXJsYXl8aGlkZGVuLy50ZXN0KG92ZXJmbG93ICsgb3ZlcmZsb3dZICsgb3ZlcmZsb3dYKTtcbn0iLCAiaW1wb3J0IGdldFBhcmVudE5vZGUgZnJvbSBcIi4vZ2V0UGFyZW50Tm9kZS5qc1wiO1xuaW1wb3J0IGlzU2Nyb2xsUGFyZW50IGZyb20gXCIuL2lzU2Nyb2xsUGFyZW50LmpzXCI7XG5pbXBvcnQgZ2V0Tm9kZU5hbWUgZnJvbSBcIi4vZ2V0Tm9kZU5hbWUuanNcIjtcbmltcG9ydCB7IGlzSFRNTEVsZW1lbnQgfSBmcm9tIFwiLi9pbnN0YW5jZU9mLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRTY3JvbGxQYXJlbnQobm9kZSkge1xuICBpZiAoWydodG1sJywgJ2JvZHknLCAnI2RvY3VtZW50J10uaW5kZXhPZihnZXROb2RlTmFtZShub2RlKSkgPj0gMCkge1xuICAgIC8vICRGbG93Rml4TWVbaW5jb21wYXRpYmxlLXJldHVybl06IGFzc3VtZSBib2R5IGlzIGFsd2F5cyBhdmFpbGFibGVcbiAgICByZXR1cm4gbm9kZS5vd25lckRvY3VtZW50LmJvZHk7XG4gIH1cblxuICBpZiAoaXNIVE1MRWxlbWVudChub2RlKSAmJiBpc1Njcm9sbFBhcmVudChub2RlKSkge1xuICAgIHJldHVybiBub2RlO1xuICB9XG5cbiAgcmV0dXJuIGdldFNjcm9sbFBhcmVudChnZXRQYXJlbnROb2RlKG5vZGUpKTtcbn0iLCAiaW1wb3J0IGdldFNjcm9sbFBhcmVudCBmcm9tIFwiLi9nZXRTY3JvbGxQYXJlbnQuanNcIjtcbmltcG9ydCBnZXRQYXJlbnROb2RlIGZyb20gXCIuL2dldFBhcmVudE5vZGUuanNcIjtcbmltcG9ydCBnZXRXaW5kb3cgZnJvbSBcIi4vZ2V0V2luZG93LmpzXCI7XG5pbXBvcnQgaXNTY3JvbGxQYXJlbnQgZnJvbSBcIi4vaXNTY3JvbGxQYXJlbnQuanNcIjtcbi8qXG5naXZlbiBhIERPTSBlbGVtZW50LCByZXR1cm4gdGhlIGxpc3Qgb2YgYWxsIHNjcm9sbCBwYXJlbnRzLCB1cCB0aGUgbGlzdCBvZiBhbmNlc29yc1xudW50aWwgd2UgZ2V0IHRvIHRoZSB0b3Agd2luZG93IG9iamVjdC4gVGhpcyBsaXN0IGlzIHdoYXQgd2UgYXR0YWNoIHNjcm9sbCBsaXN0ZW5lcnNcbnRvLCBiZWNhdXNlIGlmIGFueSBvZiB0aGVzZSBwYXJlbnQgZWxlbWVudHMgc2Nyb2xsLCB3ZSdsbCBuZWVkIHRvIHJlLWNhbGN1bGF0ZSB0aGVcbnJlZmVyZW5jZSBlbGVtZW50J3MgcG9zaXRpb24uXG4qL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsaXN0U2Nyb2xsUGFyZW50cyhlbGVtZW50LCBsaXN0KSB7XG4gIHZhciBfZWxlbWVudCRvd25lckRvY3VtZW47XG5cbiAgaWYgKGxpc3QgPT09IHZvaWQgMCkge1xuICAgIGxpc3QgPSBbXTtcbiAgfVxuXG4gIHZhciBzY3JvbGxQYXJlbnQgPSBnZXRTY3JvbGxQYXJlbnQoZWxlbWVudCk7XG4gIHZhciBpc0JvZHkgPSBzY3JvbGxQYXJlbnQgPT09ICgoX2VsZW1lbnQkb3duZXJEb2N1bWVuID0gZWxlbWVudC5vd25lckRvY3VtZW50KSA9PSBudWxsID8gdm9pZCAwIDogX2VsZW1lbnQkb3duZXJEb2N1bWVuLmJvZHkpO1xuICB2YXIgd2luID0gZ2V0V2luZG93KHNjcm9sbFBhcmVudCk7XG4gIHZhciB0YXJnZXQgPSBpc0JvZHkgPyBbd2luXS5jb25jYXQod2luLnZpc3VhbFZpZXdwb3J0IHx8IFtdLCBpc1Njcm9sbFBhcmVudChzY3JvbGxQYXJlbnQpID8gc2Nyb2xsUGFyZW50IDogW10pIDogc2Nyb2xsUGFyZW50O1xuICB2YXIgdXBkYXRlZExpc3QgPSBsaXN0LmNvbmNhdCh0YXJnZXQpO1xuICByZXR1cm4gaXNCb2R5ID8gdXBkYXRlZExpc3QgOiAvLyAkRmxvd0ZpeE1lW2luY29tcGF0aWJsZS1jYWxsXTogaXNCb2R5IHRlbGxzIHVzIHRhcmdldCB3aWxsIGJlIGFuIEhUTUxFbGVtZW50IGhlcmVcbiAgdXBkYXRlZExpc3QuY29uY2F0KGxpc3RTY3JvbGxQYXJlbnRzKGdldFBhcmVudE5vZGUodGFyZ2V0KSkpO1xufSIsICJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZWN0VG9DbGllbnRSZWN0KHJlY3QpIHtcbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHJlY3QsIHtcbiAgICBsZWZ0OiByZWN0LngsXG4gICAgdG9wOiByZWN0LnksXG4gICAgcmlnaHQ6IHJlY3QueCArIHJlY3Qud2lkdGgsXG4gICAgYm90dG9tOiByZWN0LnkgKyByZWN0LmhlaWdodFxuICB9KTtcbn0iLCAiaW1wb3J0IHsgdmlld3BvcnQgfSBmcm9tIFwiLi4vZW51bXMuanNcIjtcbmltcG9ydCBnZXRWaWV3cG9ydFJlY3QgZnJvbSBcIi4vZ2V0Vmlld3BvcnRSZWN0LmpzXCI7XG5pbXBvcnQgZ2V0RG9jdW1lbnRSZWN0IGZyb20gXCIuL2dldERvY3VtZW50UmVjdC5qc1wiO1xuaW1wb3J0IGxpc3RTY3JvbGxQYXJlbnRzIGZyb20gXCIuL2xpc3RTY3JvbGxQYXJlbnRzLmpzXCI7XG5pbXBvcnQgZ2V0T2Zmc2V0UGFyZW50IGZyb20gXCIuL2dldE9mZnNldFBhcmVudC5qc1wiO1xuaW1wb3J0IGdldERvY3VtZW50RWxlbWVudCBmcm9tIFwiLi9nZXREb2N1bWVudEVsZW1lbnQuanNcIjtcbmltcG9ydCBnZXRDb21wdXRlZFN0eWxlIGZyb20gXCIuL2dldENvbXB1dGVkU3R5bGUuanNcIjtcbmltcG9ydCB7IGlzRWxlbWVudCwgaXNIVE1MRWxlbWVudCB9IGZyb20gXCIuL2luc3RhbmNlT2YuanNcIjtcbmltcG9ydCBnZXRCb3VuZGluZ0NsaWVudFJlY3QgZnJvbSBcIi4vZ2V0Qm91bmRpbmdDbGllbnRSZWN0LmpzXCI7XG5pbXBvcnQgZ2V0UGFyZW50Tm9kZSBmcm9tIFwiLi9nZXRQYXJlbnROb2RlLmpzXCI7XG5pbXBvcnQgY29udGFpbnMgZnJvbSBcIi4vY29udGFpbnMuanNcIjtcbmltcG9ydCBnZXROb2RlTmFtZSBmcm9tIFwiLi9nZXROb2RlTmFtZS5qc1wiO1xuaW1wb3J0IHJlY3RUb0NsaWVudFJlY3QgZnJvbSBcIi4uL3V0aWxzL3JlY3RUb0NsaWVudFJlY3QuanNcIjtcbmltcG9ydCB7IG1heCwgbWluIH0gZnJvbSBcIi4uL3V0aWxzL21hdGguanNcIjtcblxuZnVuY3Rpb24gZ2V0SW5uZXJCb3VuZGluZ0NsaWVudFJlY3QoZWxlbWVudCwgc3RyYXRlZ3kpIHtcbiAgdmFyIHJlY3QgPSBnZXRCb3VuZGluZ0NsaWVudFJlY3QoZWxlbWVudCwgZmFsc2UsIHN0cmF0ZWd5ID09PSAnZml4ZWQnKTtcbiAgcmVjdC50b3AgPSByZWN0LnRvcCArIGVsZW1lbnQuY2xpZW50VG9wO1xuICByZWN0LmxlZnQgPSByZWN0LmxlZnQgKyBlbGVtZW50LmNsaWVudExlZnQ7XG4gIHJlY3QuYm90dG9tID0gcmVjdC50b3AgKyBlbGVtZW50LmNsaWVudEhlaWdodDtcbiAgcmVjdC5yaWdodCA9IHJlY3QubGVmdCArIGVsZW1lbnQuY2xpZW50V2lkdGg7XG4gIHJlY3Qud2lkdGggPSBlbGVtZW50LmNsaWVudFdpZHRoO1xuICByZWN0LmhlaWdodCA9IGVsZW1lbnQuY2xpZW50SGVpZ2h0O1xuICByZWN0LnggPSByZWN0LmxlZnQ7XG4gIHJlY3QueSA9IHJlY3QudG9wO1xuICByZXR1cm4gcmVjdDtcbn1cblxuZnVuY3Rpb24gZ2V0Q2xpZW50UmVjdEZyb21NaXhlZFR5cGUoZWxlbWVudCwgY2xpcHBpbmdQYXJlbnQsIHN0cmF0ZWd5KSB7XG4gIHJldHVybiBjbGlwcGluZ1BhcmVudCA9PT0gdmlld3BvcnQgPyByZWN0VG9DbGllbnRSZWN0KGdldFZpZXdwb3J0UmVjdChlbGVtZW50LCBzdHJhdGVneSkpIDogaXNFbGVtZW50KGNsaXBwaW5nUGFyZW50KSA/IGdldElubmVyQm91bmRpbmdDbGllbnRSZWN0KGNsaXBwaW5nUGFyZW50LCBzdHJhdGVneSkgOiByZWN0VG9DbGllbnRSZWN0KGdldERvY3VtZW50UmVjdChnZXREb2N1bWVudEVsZW1lbnQoZWxlbWVudCkpKTtcbn0gLy8gQSBcImNsaXBwaW5nIHBhcmVudFwiIGlzIGFuIG92ZXJmbG93YWJsZSBjb250YWluZXIgd2l0aCB0aGUgY2hhcmFjdGVyaXN0aWMgb2Zcbi8vIGNsaXBwaW5nIChvciBoaWRpbmcpIG92ZXJmbG93aW5nIGVsZW1lbnRzIHdpdGggYSBwb3NpdGlvbiBkaWZmZXJlbnQgZnJvbVxuLy8gYGluaXRpYWxgXG5cblxuZnVuY3Rpb24gZ2V0Q2xpcHBpbmdQYXJlbnRzKGVsZW1lbnQpIHtcbiAgdmFyIGNsaXBwaW5nUGFyZW50cyA9IGxpc3RTY3JvbGxQYXJlbnRzKGdldFBhcmVudE5vZGUoZWxlbWVudCkpO1xuICB2YXIgY2FuRXNjYXBlQ2xpcHBpbmcgPSBbJ2Fic29sdXRlJywgJ2ZpeGVkJ10uaW5kZXhPZihnZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpLnBvc2l0aW9uKSA+PSAwO1xuICB2YXIgY2xpcHBlckVsZW1lbnQgPSBjYW5Fc2NhcGVDbGlwcGluZyAmJiBpc0hUTUxFbGVtZW50KGVsZW1lbnQpID8gZ2V0T2Zmc2V0UGFyZW50KGVsZW1lbnQpIDogZWxlbWVudDtcblxuICBpZiAoIWlzRWxlbWVudChjbGlwcGVyRWxlbWVudCkpIHtcbiAgICByZXR1cm4gW107XG4gIH0gLy8gJEZsb3dGaXhNZVtpbmNvbXBhdGlibGUtcmV0dXJuXTogaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL2Zsb3cvaXNzdWVzLzE0MTRcblxuXG4gIHJldHVybiBjbGlwcGluZ1BhcmVudHMuZmlsdGVyKGZ1bmN0aW9uIChjbGlwcGluZ1BhcmVudCkge1xuICAgIHJldHVybiBpc0VsZW1lbnQoY2xpcHBpbmdQYXJlbnQpICYmIGNvbnRhaW5zKGNsaXBwaW5nUGFyZW50LCBjbGlwcGVyRWxlbWVudCkgJiYgZ2V0Tm9kZU5hbWUoY2xpcHBpbmdQYXJlbnQpICE9PSAnYm9keSc7XG4gIH0pO1xufSAvLyBHZXRzIHRoZSBtYXhpbXVtIGFyZWEgdGhhdCB0aGUgZWxlbWVudCBpcyB2aXNpYmxlIGluIGR1ZSB0byBhbnkgbnVtYmVyIG9mXG4vLyBjbGlwcGluZyBwYXJlbnRzXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0Q2xpcHBpbmdSZWN0KGVsZW1lbnQsIGJvdW5kYXJ5LCByb290Qm91bmRhcnksIHN0cmF0ZWd5KSB7XG4gIHZhciBtYWluQ2xpcHBpbmdQYXJlbnRzID0gYm91bmRhcnkgPT09ICdjbGlwcGluZ1BhcmVudHMnID8gZ2V0Q2xpcHBpbmdQYXJlbnRzKGVsZW1lbnQpIDogW10uY29uY2F0KGJvdW5kYXJ5KTtcbiAgdmFyIGNsaXBwaW5nUGFyZW50cyA9IFtdLmNvbmNhdChtYWluQ2xpcHBpbmdQYXJlbnRzLCBbcm9vdEJvdW5kYXJ5XSk7XG4gIHZhciBmaXJzdENsaXBwaW5nUGFyZW50ID0gY2xpcHBpbmdQYXJlbnRzWzBdO1xuICB2YXIgY2xpcHBpbmdSZWN0ID0gY2xpcHBpbmdQYXJlbnRzLnJlZHVjZShmdW5jdGlvbiAoYWNjUmVjdCwgY2xpcHBpbmdQYXJlbnQpIHtcbiAgICB2YXIgcmVjdCA9IGdldENsaWVudFJlY3RGcm9tTWl4ZWRUeXBlKGVsZW1lbnQsIGNsaXBwaW5nUGFyZW50LCBzdHJhdGVneSk7XG4gICAgYWNjUmVjdC50b3AgPSBtYXgocmVjdC50b3AsIGFjY1JlY3QudG9wKTtcbiAgICBhY2NSZWN0LnJpZ2h0ID0gbWluKHJlY3QucmlnaHQsIGFjY1JlY3QucmlnaHQpO1xuICAgIGFjY1JlY3QuYm90dG9tID0gbWluKHJlY3QuYm90dG9tLCBhY2NSZWN0LmJvdHRvbSk7XG4gICAgYWNjUmVjdC5sZWZ0ID0gbWF4KHJlY3QubGVmdCwgYWNjUmVjdC5sZWZ0KTtcbiAgICByZXR1cm4gYWNjUmVjdDtcbiAgfSwgZ2V0Q2xpZW50UmVjdEZyb21NaXhlZFR5cGUoZWxlbWVudCwgZmlyc3RDbGlwcGluZ1BhcmVudCwgc3RyYXRlZ3kpKTtcbiAgY2xpcHBpbmdSZWN0LndpZHRoID0gY2xpcHBpbmdSZWN0LnJpZ2h0IC0gY2xpcHBpbmdSZWN0LmxlZnQ7XG4gIGNsaXBwaW5nUmVjdC5oZWlnaHQgPSBjbGlwcGluZ1JlY3QuYm90dG9tIC0gY2xpcHBpbmdSZWN0LnRvcDtcbiAgY2xpcHBpbmdSZWN0LnggPSBjbGlwcGluZ1JlY3QubGVmdDtcbiAgY2xpcHBpbmdSZWN0LnkgPSBjbGlwcGluZ1JlY3QudG9wO1xuICByZXR1cm4gY2xpcHBpbmdSZWN0O1xufSIsICJpbXBvcnQgZ2V0QmFzZVBsYWNlbWVudCBmcm9tIFwiLi9nZXRCYXNlUGxhY2VtZW50LmpzXCI7XG5pbXBvcnQgZ2V0VmFyaWF0aW9uIGZyb20gXCIuL2dldFZhcmlhdGlvbi5qc1wiO1xuaW1wb3J0IGdldE1haW5BeGlzRnJvbVBsYWNlbWVudCBmcm9tIFwiLi9nZXRNYWluQXhpc0Zyb21QbGFjZW1lbnQuanNcIjtcbmltcG9ydCB7IHRvcCwgcmlnaHQsIGJvdHRvbSwgbGVmdCwgc3RhcnQsIGVuZCB9IGZyb20gXCIuLi9lbnVtcy5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29tcHV0ZU9mZnNldHMoX3JlZikge1xuICB2YXIgcmVmZXJlbmNlID0gX3JlZi5yZWZlcmVuY2UsXG4gICAgICBlbGVtZW50ID0gX3JlZi5lbGVtZW50LFxuICAgICAgcGxhY2VtZW50ID0gX3JlZi5wbGFjZW1lbnQ7XG4gIHZhciBiYXNlUGxhY2VtZW50ID0gcGxhY2VtZW50ID8gZ2V0QmFzZVBsYWNlbWVudChwbGFjZW1lbnQpIDogbnVsbDtcbiAgdmFyIHZhcmlhdGlvbiA9IHBsYWNlbWVudCA/IGdldFZhcmlhdGlvbihwbGFjZW1lbnQpIDogbnVsbDtcbiAgdmFyIGNvbW1vblggPSByZWZlcmVuY2UueCArIHJlZmVyZW5jZS53aWR0aCAvIDIgLSBlbGVtZW50LndpZHRoIC8gMjtcbiAgdmFyIGNvbW1vblkgPSByZWZlcmVuY2UueSArIHJlZmVyZW5jZS5oZWlnaHQgLyAyIC0gZWxlbWVudC5oZWlnaHQgLyAyO1xuICB2YXIgb2Zmc2V0cztcblxuICBzd2l0Y2ggKGJhc2VQbGFjZW1lbnQpIHtcbiAgICBjYXNlIHRvcDpcbiAgICAgIG9mZnNldHMgPSB7XG4gICAgICAgIHg6IGNvbW1vblgsXG4gICAgICAgIHk6IHJlZmVyZW5jZS55IC0gZWxlbWVudC5oZWlnaHRcbiAgICAgIH07XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgYm90dG9tOlxuICAgICAgb2Zmc2V0cyA9IHtcbiAgICAgICAgeDogY29tbW9uWCxcbiAgICAgICAgeTogcmVmZXJlbmNlLnkgKyByZWZlcmVuY2UuaGVpZ2h0XG4gICAgICB9O1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIHJpZ2h0OlxuICAgICAgb2Zmc2V0cyA9IHtcbiAgICAgICAgeDogcmVmZXJlbmNlLnggKyByZWZlcmVuY2Uud2lkdGgsXG4gICAgICAgIHk6IGNvbW1vbllcbiAgICAgIH07XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgbGVmdDpcbiAgICAgIG9mZnNldHMgPSB7XG4gICAgICAgIHg6IHJlZmVyZW5jZS54IC0gZWxlbWVudC53aWR0aCxcbiAgICAgICAgeTogY29tbW9uWVxuICAgICAgfTtcbiAgICAgIGJyZWFrO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIG9mZnNldHMgPSB7XG4gICAgICAgIHg6IHJlZmVyZW5jZS54LFxuICAgICAgICB5OiByZWZlcmVuY2UueVxuICAgICAgfTtcbiAgfVxuXG4gIHZhciBtYWluQXhpcyA9IGJhc2VQbGFjZW1lbnQgPyBnZXRNYWluQXhpc0Zyb21QbGFjZW1lbnQoYmFzZVBsYWNlbWVudCkgOiBudWxsO1xuXG4gIGlmIChtYWluQXhpcyAhPSBudWxsKSB7XG4gICAgdmFyIGxlbiA9IG1haW5BeGlzID09PSAneScgPyAnaGVpZ2h0JyA6ICd3aWR0aCc7XG5cbiAgICBzd2l0Y2ggKHZhcmlhdGlvbikge1xuICAgICAgY2FzZSBzdGFydDpcbiAgICAgICAgb2Zmc2V0c1ttYWluQXhpc10gPSBvZmZzZXRzW21haW5BeGlzXSAtIChyZWZlcmVuY2VbbGVuXSAvIDIgLSBlbGVtZW50W2xlbl0gLyAyKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgZW5kOlxuICAgICAgICBvZmZzZXRzW21haW5BeGlzXSA9IG9mZnNldHNbbWFpbkF4aXNdICsgKHJlZmVyZW5jZVtsZW5dIC8gMiAtIGVsZW1lbnRbbGVuXSAvIDIpO1xuICAgICAgICBicmVhaztcblxuICAgICAgZGVmYXVsdDpcbiAgICB9XG4gIH1cblxuICByZXR1cm4gb2Zmc2V0cztcbn0iLCAiaW1wb3J0IGdldENsaXBwaW5nUmVjdCBmcm9tIFwiLi4vZG9tLXV0aWxzL2dldENsaXBwaW5nUmVjdC5qc1wiO1xuaW1wb3J0IGdldERvY3VtZW50RWxlbWVudCBmcm9tIFwiLi4vZG9tLXV0aWxzL2dldERvY3VtZW50RWxlbWVudC5qc1wiO1xuaW1wb3J0IGdldEJvdW5kaW5nQ2xpZW50UmVjdCBmcm9tIFwiLi4vZG9tLXV0aWxzL2dldEJvdW5kaW5nQ2xpZW50UmVjdC5qc1wiO1xuaW1wb3J0IGNvbXB1dGVPZmZzZXRzIGZyb20gXCIuL2NvbXB1dGVPZmZzZXRzLmpzXCI7XG5pbXBvcnQgcmVjdFRvQ2xpZW50UmVjdCBmcm9tIFwiLi9yZWN0VG9DbGllbnRSZWN0LmpzXCI7XG5pbXBvcnQgeyBjbGlwcGluZ1BhcmVudHMsIHJlZmVyZW5jZSwgcG9wcGVyLCBib3R0b20sIHRvcCwgcmlnaHQsIGJhc2VQbGFjZW1lbnRzLCB2aWV3cG9ydCB9IGZyb20gXCIuLi9lbnVtcy5qc1wiO1xuaW1wb3J0IHsgaXNFbGVtZW50IH0gZnJvbSBcIi4uL2RvbS11dGlscy9pbnN0YW5jZU9mLmpzXCI7XG5pbXBvcnQgbWVyZ2VQYWRkaW5nT2JqZWN0IGZyb20gXCIuL21lcmdlUGFkZGluZ09iamVjdC5qc1wiO1xuaW1wb3J0IGV4cGFuZFRvSGFzaE1hcCBmcm9tIFwiLi9leHBhbmRUb0hhc2hNYXAuanNcIjsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkZXRlY3RPdmVyZmxvdyhzdGF0ZSwgb3B0aW9ucykge1xuICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgdmFyIF9vcHRpb25zID0gb3B0aW9ucyxcbiAgICAgIF9vcHRpb25zJHBsYWNlbWVudCA9IF9vcHRpb25zLnBsYWNlbWVudCxcbiAgICAgIHBsYWNlbWVudCA9IF9vcHRpb25zJHBsYWNlbWVudCA9PT0gdm9pZCAwID8gc3RhdGUucGxhY2VtZW50IDogX29wdGlvbnMkcGxhY2VtZW50LFxuICAgICAgX29wdGlvbnMkc3RyYXRlZ3kgPSBfb3B0aW9ucy5zdHJhdGVneSxcbiAgICAgIHN0cmF0ZWd5ID0gX29wdGlvbnMkc3RyYXRlZ3kgPT09IHZvaWQgMCA/IHN0YXRlLnN0cmF0ZWd5IDogX29wdGlvbnMkc3RyYXRlZ3ksXG4gICAgICBfb3B0aW9ucyRib3VuZGFyeSA9IF9vcHRpb25zLmJvdW5kYXJ5LFxuICAgICAgYm91bmRhcnkgPSBfb3B0aW9ucyRib3VuZGFyeSA9PT0gdm9pZCAwID8gY2xpcHBpbmdQYXJlbnRzIDogX29wdGlvbnMkYm91bmRhcnksXG4gICAgICBfb3B0aW9ucyRyb290Qm91bmRhcnkgPSBfb3B0aW9ucy5yb290Qm91bmRhcnksXG4gICAgICByb290Qm91bmRhcnkgPSBfb3B0aW9ucyRyb290Qm91bmRhcnkgPT09IHZvaWQgMCA/IHZpZXdwb3J0IDogX29wdGlvbnMkcm9vdEJvdW5kYXJ5LFxuICAgICAgX29wdGlvbnMkZWxlbWVudENvbnRlID0gX29wdGlvbnMuZWxlbWVudENvbnRleHQsXG4gICAgICBlbGVtZW50Q29udGV4dCA9IF9vcHRpb25zJGVsZW1lbnRDb250ZSA9PT0gdm9pZCAwID8gcG9wcGVyIDogX29wdGlvbnMkZWxlbWVudENvbnRlLFxuICAgICAgX29wdGlvbnMkYWx0Qm91bmRhcnkgPSBfb3B0aW9ucy5hbHRCb3VuZGFyeSxcbiAgICAgIGFsdEJvdW5kYXJ5ID0gX29wdGlvbnMkYWx0Qm91bmRhcnkgPT09IHZvaWQgMCA/IGZhbHNlIDogX29wdGlvbnMkYWx0Qm91bmRhcnksXG4gICAgICBfb3B0aW9ucyRwYWRkaW5nID0gX29wdGlvbnMucGFkZGluZyxcbiAgICAgIHBhZGRpbmcgPSBfb3B0aW9ucyRwYWRkaW5nID09PSB2b2lkIDAgPyAwIDogX29wdGlvbnMkcGFkZGluZztcbiAgdmFyIHBhZGRpbmdPYmplY3QgPSBtZXJnZVBhZGRpbmdPYmplY3QodHlwZW9mIHBhZGRpbmcgIT09ICdudW1iZXInID8gcGFkZGluZyA6IGV4cGFuZFRvSGFzaE1hcChwYWRkaW5nLCBiYXNlUGxhY2VtZW50cykpO1xuICB2YXIgYWx0Q29udGV4dCA9IGVsZW1lbnRDb250ZXh0ID09PSBwb3BwZXIgPyByZWZlcmVuY2UgOiBwb3BwZXI7XG4gIHZhciBwb3BwZXJSZWN0ID0gc3RhdGUucmVjdHMucG9wcGVyO1xuICB2YXIgZWxlbWVudCA9IHN0YXRlLmVsZW1lbnRzW2FsdEJvdW5kYXJ5ID8gYWx0Q29udGV4dCA6IGVsZW1lbnRDb250ZXh0XTtcbiAgdmFyIGNsaXBwaW5nQ2xpZW50UmVjdCA9IGdldENsaXBwaW5nUmVjdChpc0VsZW1lbnQoZWxlbWVudCkgPyBlbGVtZW50IDogZWxlbWVudC5jb250ZXh0RWxlbWVudCB8fCBnZXREb2N1bWVudEVsZW1lbnQoc3RhdGUuZWxlbWVudHMucG9wcGVyKSwgYm91bmRhcnksIHJvb3RCb3VuZGFyeSwgc3RyYXRlZ3kpO1xuICB2YXIgcmVmZXJlbmNlQ2xpZW50UmVjdCA9IGdldEJvdW5kaW5nQ2xpZW50UmVjdChzdGF0ZS5lbGVtZW50cy5yZWZlcmVuY2UpO1xuICB2YXIgcG9wcGVyT2Zmc2V0cyA9IGNvbXB1dGVPZmZzZXRzKHtcbiAgICByZWZlcmVuY2U6IHJlZmVyZW5jZUNsaWVudFJlY3QsXG4gICAgZWxlbWVudDogcG9wcGVyUmVjdCxcbiAgICBzdHJhdGVneTogJ2Fic29sdXRlJyxcbiAgICBwbGFjZW1lbnQ6IHBsYWNlbWVudFxuICB9KTtcbiAgdmFyIHBvcHBlckNsaWVudFJlY3QgPSByZWN0VG9DbGllbnRSZWN0KE9iamVjdC5hc3NpZ24oe30sIHBvcHBlclJlY3QsIHBvcHBlck9mZnNldHMpKTtcbiAgdmFyIGVsZW1lbnRDbGllbnRSZWN0ID0gZWxlbWVudENvbnRleHQgPT09IHBvcHBlciA/IHBvcHBlckNsaWVudFJlY3QgOiByZWZlcmVuY2VDbGllbnRSZWN0OyAvLyBwb3NpdGl2ZSA9IG92ZXJmbG93aW5nIHRoZSBjbGlwcGluZyByZWN0XG4gIC8vIDAgb3IgbmVnYXRpdmUgPSB3aXRoaW4gdGhlIGNsaXBwaW5nIHJlY3RcblxuICB2YXIgb3ZlcmZsb3dPZmZzZXRzID0ge1xuICAgIHRvcDogY2xpcHBpbmdDbGllbnRSZWN0LnRvcCAtIGVsZW1lbnRDbGllbnRSZWN0LnRvcCArIHBhZGRpbmdPYmplY3QudG9wLFxuICAgIGJvdHRvbTogZWxlbWVudENsaWVudFJlY3QuYm90dG9tIC0gY2xpcHBpbmdDbGllbnRSZWN0LmJvdHRvbSArIHBhZGRpbmdPYmplY3QuYm90dG9tLFxuICAgIGxlZnQ6IGNsaXBwaW5nQ2xpZW50UmVjdC5sZWZ0IC0gZWxlbWVudENsaWVudFJlY3QubGVmdCArIHBhZGRpbmdPYmplY3QubGVmdCxcbiAgICByaWdodDogZWxlbWVudENsaWVudFJlY3QucmlnaHQgLSBjbGlwcGluZ0NsaWVudFJlY3QucmlnaHQgKyBwYWRkaW5nT2JqZWN0LnJpZ2h0XG4gIH07XG4gIHZhciBvZmZzZXREYXRhID0gc3RhdGUubW9kaWZpZXJzRGF0YS5vZmZzZXQ7IC8vIE9mZnNldHMgY2FuIGJlIGFwcGxpZWQgb25seSB0byB0aGUgcG9wcGVyIGVsZW1lbnRcblxuICBpZiAoZWxlbWVudENvbnRleHQgPT09IHBvcHBlciAmJiBvZmZzZXREYXRhKSB7XG4gICAgdmFyIG9mZnNldCA9IG9mZnNldERhdGFbcGxhY2VtZW50XTtcbiAgICBPYmplY3Qua2V5cyhvdmVyZmxvd09mZnNldHMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgdmFyIG11bHRpcGx5ID0gW3JpZ2h0LCBib3R0b21dLmluZGV4T2Yoa2V5KSA+PSAwID8gMSA6IC0xO1xuICAgICAgdmFyIGF4aXMgPSBbdG9wLCBib3R0b21dLmluZGV4T2Yoa2V5KSA+PSAwID8gJ3knIDogJ3gnO1xuICAgICAgb3ZlcmZsb3dPZmZzZXRzW2tleV0gKz0gb2Zmc2V0W2F4aXNdICogbXVsdGlwbHk7XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gb3ZlcmZsb3dPZmZzZXRzO1xufSIsICJpbXBvcnQgZ2V0VmFyaWF0aW9uIGZyb20gXCIuL2dldFZhcmlhdGlvbi5qc1wiO1xuaW1wb3J0IHsgdmFyaWF0aW9uUGxhY2VtZW50cywgYmFzZVBsYWNlbWVudHMsIHBsYWNlbWVudHMgYXMgYWxsUGxhY2VtZW50cyB9IGZyb20gXCIuLi9lbnVtcy5qc1wiO1xuaW1wb3J0IGRldGVjdE92ZXJmbG93IGZyb20gXCIuL2RldGVjdE92ZXJmbG93LmpzXCI7XG5pbXBvcnQgZ2V0QmFzZVBsYWNlbWVudCBmcm9tIFwiLi9nZXRCYXNlUGxhY2VtZW50LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb21wdXRlQXV0b1BsYWNlbWVudChzdGF0ZSwgb3B0aW9ucykge1xuICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgdmFyIF9vcHRpb25zID0gb3B0aW9ucyxcbiAgICAgIHBsYWNlbWVudCA9IF9vcHRpb25zLnBsYWNlbWVudCxcbiAgICAgIGJvdW5kYXJ5ID0gX29wdGlvbnMuYm91bmRhcnksXG4gICAgICByb290Qm91bmRhcnkgPSBfb3B0aW9ucy5yb290Qm91bmRhcnksXG4gICAgICBwYWRkaW5nID0gX29wdGlvbnMucGFkZGluZyxcbiAgICAgIGZsaXBWYXJpYXRpb25zID0gX29wdGlvbnMuZmxpcFZhcmlhdGlvbnMsXG4gICAgICBfb3B0aW9ucyRhbGxvd2VkQXV0b1AgPSBfb3B0aW9ucy5hbGxvd2VkQXV0b1BsYWNlbWVudHMsXG4gICAgICBhbGxvd2VkQXV0b1BsYWNlbWVudHMgPSBfb3B0aW9ucyRhbGxvd2VkQXV0b1AgPT09IHZvaWQgMCA/IGFsbFBsYWNlbWVudHMgOiBfb3B0aW9ucyRhbGxvd2VkQXV0b1A7XG4gIHZhciB2YXJpYXRpb24gPSBnZXRWYXJpYXRpb24ocGxhY2VtZW50KTtcbiAgdmFyIHBsYWNlbWVudHMgPSB2YXJpYXRpb24gPyBmbGlwVmFyaWF0aW9ucyA/IHZhcmlhdGlvblBsYWNlbWVudHMgOiB2YXJpYXRpb25QbGFjZW1lbnRzLmZpbHRlcihmdW5jdGlvbiAocGxhY2VtZW50KSB7XG4gICAgcmV0dXJuIGdldFZhcmlhdGlvbihwbGFjZW1lbnQpID09PSB2YXJpYXRpb247XG4gIH0pIDogYmFzZVBsYWNlbWVudHM7XG4gIHZhciBhbGxvd2VkUGxhY2VtZW50cyA9IHBsYWNlbWVudHMuZmlsdGVyKGZ1bmN0aW9uIChwbGFjZW1lbnQpIHtcbiAgICByZXR1cm4gYWxsb3dlZEF1dG9QbGFjZW1lbnRzLmluZGV4T2YocGxhY2VtZW50KSA+PSAwO1xuICB9KTtcblxuICBpZiAoYWxsb3dlZFBsYWNlbWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgYWxsb3dlZFBsYWNlbWVudHMgPSBwbGFjZW1lbnRzO1xuICB9IC8vICRGbG93Rml4TWVbaW5jb21wYXRpYmxlLXR5cGVdOiBGbG93IHNlZW1zIHRvIGhhdmUgcHJvYmxlbXMgd2l0aCB0d28gYXJyYXkgdW5pb25zLi4uXG5cblxuICB2YXIgb3ZlcmZsb3dzID0gYWxsb3dlZFBsYWNlbWVudHMucmVkdWNlKGZ1bmN0aW9uIChhY2MsIHBsYWNlbWVudCkge1xuICAgIGFjY1twbGFjZW1lbnRdID0gZGV0ZWN0T3ZlcmZsb3coc3RhdGUsIHtcbiAgICAgIHBsYWNlbWVudDogcGxhY2VtZW50LFxuICAgICAgYm91bmRhcnk6IGJvdW5kYXJ5LFxuICAgICAgcm9vdEJvdW5kYXJ5OiByb290Qm91bmRhcnksXG4gICAgICBwYWRkaW5nOiBwYWRkaW5nXG4gICAgfSlbZ2V0QmFzZVBsYWNlbWVudChwbGFjZW1lbnQpXTtcbiAgICByZXR1cm4gYWNjO1xuICB9LCB7fSk7XG4gIHJldHVybiBPYmplY3Qua2V5cyhvdmVyZmxvd3MpLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICByZXR1cm4gb3ZlcmZsb3dzW2FdIC0gb3ZlcmZsb3dzW2JdO1xuICB9KTtcbn0iLCAiaW1wb3J0IGdldE9wcG9zaXRlUGxhY2VtZW50IGZyb20gXCIuLi91dGlscy9nZXRPcHBvc2l0ZVBsYWNlbWVudC5qc1wiO1xuaW1wb3J0IGdldEJhc2VQbGFjZW1lbnQgZnJvbSBcIi4uL3V0aWxzL2dldEJhc2VQbGFjZW1lbnQuanNcIjtcbmltcG9ydCBnZXRPcHBvc2l0ZVZhcmlhdGlvblBsYWNlbWVudCBmcm9tIFwiLi4vdXRpbHMvZ2V0T3Bwb3NpdGVWYXJpYXRpb25QbGFjZW1lbnQuanNcIjtcbmltcG9ydCBkZXRlY3RPdmVyZmxvdyBmcm9tIFwiLi4vdXRpbHMvZGV0ZWN0T3ZlcmZsb3cuanNcIjtcbmltcG9ydCBjb21wdXRlQXV0b1BsYWNlbWVudCBmcm9tIFwiLi4vdXRpbHMvY29tcHV0ZUF1dG9QbGFjZW1lbnQuanNcIjtcbmltcG9ydCB7IGJvdHRvbSwgdG9wLCBzdGFydCwgcmlnaHQsIGxlZnQsIGF1dG8gfSBmcm9tIFwiLi4vZW51bXMuanNcIjtcbmltcG9ydCBnZXRWYXJpYXRpb24gZnJvbSBcIi4uL3V0aWxzL2dldFZhcmlhdGlvbi5qc1wiOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cbmZ1bmN0aW9uIGdldEV4cGFuZGVkRmFsbGJhY2tQbGFjZW1lbnRzKHBsYWNlbWVudCkge1xuICBpZiAoZ2V0QmFzZVBsYWNlbWVudChwbGFjZW1lbnQpID09PSBhdXRvKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgdmFyIG9wcG9zaXRlUGxhY2VtZW50ID0gZ2V0T3Bwb3NpdGVQbGFjZW1lbnQocGxhY2VtZW50KTtcbiAgcmV0dXJuIFtnZXRPcHBvc2l0ZVZhcmlhdGlvblBsYWNlbWVudChwbGFjZW1lbnQpLCBvcHBvc2l0ZVBsYWNlbWVudCwgZ2V0T3Bwb3NpdGVWYXJpYXRpb25QbGFjZW1lbnQob3Bwb3NpdGVQbGFjZW1lbnQpXTtcbn1cblxuZnVuY3Rpb24gZmxpcChfcmVmKSB7XG4gIHZhciBzdGF0ZSA9IF9yZWYuc3RhdGUsXG4gICAgICBvcHRpb25zID0gX3JlZi5vcHRpb25zLFxuICAgICAgbmFtZSA9IF9yZWYubmFtZTtcblxuICBpZiAoc3RhdGUubW9kaWZpZXJzRGF0YVtuYW1lXS5fc2tpcCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciBfb3B0aW9ucyRtYWluQXhpcyA9IG9wdGlvbnMubWFpbkF4aXMsXG4gICAgICBjaGVja01haW5BeGlzID0gX29wdGlvbnMkbWFpbkF4aXMgPT09IHZvaWQgMCA/IHRydWUgOiBfb3B0aW9ucyRtYWluQXhpcyxcbiAgICAgIF9vcHRpb25zJGFsdEF4aXMgPSBvcHRpb25zLmFsdEF4aXMsXG4gICAgICBjaGVja0FsdEF4aXMgPSBfb3B0aW9ucyRhbHRBeGlzID09PSB2b2lkIDAgPyB0cnVlIDogX29wdGlvbnMkYWx0QXhpcyxcbiAgICAgIHNwZWNpZmllZEZhbGxiYWNrUGxhY2VtZW50cyA9IG9wdGlvbnMuZmFsbGJhY2tQbGFjZW1lbnRzLFxuICAgICAgcGFkZGluZyA9IG9wdGlvbnMucGFkZGluZyxcbiAgICAgIGJvdW5kYXJ5ID0gb3B0aW9ucy5ib3VuZGFyeSxcbiAgICAgIHJvb3RCb3VuZGFyeSA9IG9wdGlvbnMucm9vdEJvdW5kYXJ5LFxuICAgICAgYWx0Qm91bmRhcnkgPSBvcHRpb25zLmFsdEJvdW5kYXJ5LFxuICAgICAgX29wdGlvbnMkZmxpcFZhcmlhdGlvID0gb3B0aW9ucy5mbGlwVmFyaWF0aW9ucyxcbiAgICAgIGZsaXBWYXJpYXRpb25zID0gX29wdGlvbnMkZmxpcFZhcmlhdGlvID09PSB2b2lkIDAgPyB0cnVlIDogX29wdGlvbnMkZmxpcFZhcmlhdGlvLFxuICAgICAgYWxsb3dlZEF1dG9QbGFjZW1lbnRzID0gb3B0aW9ucy5hbGxvd2VkQXV0b1BsYWNlbWVudHM7XG4gIHZhciBwcmVmZXJyZWRQbGFjZW1lbnQgPSBzdGF0ZS5vcHRpb25zLnBsYWNlbWVudDtcbiAgdmFyIGJhc2VQbGFjZW1lbnQgPSBnZXRCYXNlUGxhY2VtZW50KHByZWZlcnJlZFBsYWNlbWVudCk7XG4gIHZhciBpc0Jhc2VQbGFjZW1lbnQgPSBiYXNlUGxhY2VtZW50ID09PSBwcmVmZXJyZWRQbGFjZW1lbnQ7XG4gIHZhciBmYWxsYmFja1BsYWNlbWVudHMgPSBzcGVjaWZpZWRGYWxsYmFja1BsYWNlbWVudHMgfHwgKGlzQmFzZVBsYWNlbWVudCB8fCAhZmxpcFZhcmlhdGlvbnMgPyBbZ2V0T3Bwb3NpdGVQbGFjZW1lbnQocHJlZmVycmVkUGxhY2VtZW50KV0gOiBnZXRFeHBhbmRlZEZhbGxiYWNrUGxhY2VtZW50cyhwcmVmZXJyZWRQbGFjZW1lbnQpKTtcbiAgdmFyIHBsYWNlbWVudHMgPSBbcHJlZmVycmVkUGxhY2VtZW50XS5jb25jYXQoZmFsbGJhY2tQbGFjZW1lbnRzKS5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgcGxhY2VtZW50KSB7XG4gICAgcmV0dXJuIGFjYy5jb25jYXQoZ2V0QmFzZVBsYWNlbWVudChwbGFjZW1lbnQpID09PSBhdXRvID8gY29tcHV0ZUF1dG9QbGFjZW1lbnQoc3RhdGUsIHtcbiAgICAgIHBsYWNlbWVudDogcGxhY2VtZW50LFxuICAgICAgYm91bmRhcnk6IGJvdW5kYXJ5LFxuICAgICAgcm9vdEJvdW5kYXJ5OiByb290Qm91bmRhcnksXG4gICAgICBwYWRkaW5nOiBwYWRkaW5nLFxuICAgICAgZmxpcFZhcmlhdGlvbnM6IGZsaXBWYXJpYXRpb25zLFxuICAgICAgYWxsb3dlZEF1dG9QbGFjZW1lbnRzOiBhbGxvd2VkQXV0b1BsYWNlbWVudHNcbiAgICB9KSA6IHBsYWNlbWVudCk7XG4gIH0sIFtdKTtcbiAgdmFyIHJlZmVyZW5jZVJlY3QgPSBzdGF0ZS5yZWN0cy5yZWZlcmVuY2U7XG4gIHZhciBwb3BwZXJSZWN0ID0gc3RhdGUucmVjdHMucG9wcGVyO1xuICB2YXIgY2hlY2tzTWFwID0gbmV3IE1hcCgpO1xuICB2YXIgbWFrZUZhbGxiYWNrQ2hlY2tzID0gdHJ1ZTtcbiAgdmFyIGZpcnN0Rml0dGluZ1BsYWNlbWVudCA9IHBsYWNlbWVudHNbMF07XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwbGFjZW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHBsYWNlbWVudCA9IHBsYWNlbWVudHNbaV07XG5cbiAgICB2YXIgX2Jhc2VQbGFjZW1lbnQgPSBnZXRCYXNlUGxhY2VtZW50KHBsYWNlbWVudCk7XG5cbiAgICB2YXIgaXNTdGFydFZhcmlhdGlvbiA9IGdldFZhcmlhdGlvbihwbGFjZW1lbnQpID09PSBzdGFydDtcbiAgICB2YXIgaXNWZXJ0aWNhbCA9IFt0b3AsIGJvdHRvbV0uaW5kZXhPZihfYmFzZVBsYWNlbWVudCkgPj0gMDtcbiAgICB2YXIgbGVuID0gaXNWZXJ0aWNhbCA/ICd3aWR0aCcgOiAnaGVpZ2h0JztcbiAgICB2YXIgb3ZlcmZsb3cgPSBkZXRlY3RPdmVyZmxvdyhzdGF0ZSwge1xuICAgICAgcGxhY2VtZW50OiBwbGFjZW1lbnQsXG4gICAgICBib3VuZGFyeTogYm91bmRhcnksXG4gICAgICByb290Qm91bmRhcnk6IHJvb3RCb3VuZGFyeSxcbiAgICAgIGFsdEJvdW5kYXJ5OiBhbHRCb3VuZGFyeSxcbiAgICAgIHBhZGRpbmc6IHBhZGRpbmdcbiAgICB9KTtcbiAgICB2YXIgbWFpblZhcmlhdGlvblNpZGUgPSBpc1ZlcnRpY2FsID8gaXNTdGFydFZhcmlhdGlvbiA/IHJpZ2h0IDogbGVmdCA6IGlzU3RhcnRWYXJpYXRpb24gPyBib3R0b20gOiB0b3A7XG5cbiAgICBpZiAocmVmZXJlbmNlUmVjdFtsZW5dID4gcG9wcGVyUmVjdFtsZW5dKSB7XG4gICAgICBtYWluVmFyaWF0aW9uU2lkZSA9IGdldE9wcG9zaXRlUGxhY2VtZW50KG1haW5WYXJpYXRpb25TaWRlKTtcbiAgICB9XG5cbiAgICB2YXIgYWx0VmFyaWF0aW9uU2lkZSA9IGdldE9wcG9zaXRlUGxhY2VtZW50KG1haW5WYXJpYXRpb25TaWRlKTtcbiAgICB2YXIgY2hlY2tzID0gW107XG5cbiAgICBpZiAoY2hlY2tNYWluQXhpcykge1xuICAgICAgY2hlY2tzLnB1c2gob3ZlcmZsb3dbX2Jhc2VQbGFjZW1lbnRdIDw9IDApO1xuICAgIH1cblxuICAgIGlmIChjaGVja0FsdEF4aXMpIHtcbiAgICAgIGNoZWNrcy5wdXNoKG92ZXJmbG93W21haW5WYXJpYXRpb25TaWRlXSA8PSAwLCBvdmVyZmxvd1thbHRWYXJpYXRpb25TaWRlXSA8PSAwKTtcbiAgICB9XG5cbiAgICBpZiAoY2hlY2tzLmV2ZXJ5KGZ1bmN0aW9uIChjaGVjaykge1xuICAgICAgcmV0dXJuIGNoZWNrO1xuICAgIH0pKSB7XG4gICAgICBmaXJzdEZpdHRpbmdQbGFjZW1lbnQgPSBwbGFjZW1lbnQ7XG4gICAgICBtYWtlRmFsbGJhY2tDaGVja3MgPSBmYWxzZTtcbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGNoZWNrc01hcC5zZXQocGxhY2VtZW50LCBjaGVja3MpO1xuICB9XG5cbiAgaWYgKG1ha2VGYWxsYmFja0NoZWNrcykge1xuICAgIC8vIGAyYCBtYXkgYmUgZGVzaXJlZCBpbiBzb21lIGNhc2VzIOKAkyByZXNlYXJjaCBsYXRlclxuICAgIHZhciBudW1iZXJPZkNoZWNrcyA9IGZsaXBWYXJpYXRpb25zID8gMyA6IDE7XG5cbiAgICB2YXIgX2xvb3AgPSBmdW5jdGlvbiBfbG9vcChfaSkge1xuICAgICAgdmFyIGZpdHRpbmdQbGFjZW1lbnQgPSBwbGFjZW1lbnRzLmZpbmQoZnVuY3Rpb24gKHBsYWNlbWVudCkge1xuICAgICAgICB2YXIgY2hlY2tzID0gY2hlY2tzTWFwLmdldChwbGFjZW1lbnQpO1xuXG4gICAgICAgIGlmIChjaGVja3MpIHtcbiAgICAgICAgICByZXR1cm4gY2hlY2tzLnNsaWNlKDAsIF9pKS5ldmVyeShmdW5jdGlvbiAoY2hlY2spIHtcbiAgICAgICAgICAgIHJldHVybiBjaGVjaztcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGlmIChmaXR0aW5nUGxhY2VtZW50KSB7XG4gICAgICAgIGZpcnN0Rml0dGluZ1BsYWNlbWVudCA9IGZpdHRpbmdQbGFjZW1lbnQ7XG4gICAgICAgIHJldHVybiBcImJyZWFrXCI7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGZvciAodmFyIF9pID0gbnVtYmVyT2ZDaGVja3M7IF9pID4gMDsgX2ktLSkge1xuICAgICAgdmFyIF9yZXQgPSBfbG9vcChfaSk7XG5cbiAgICAgIGlmIChfcmV0ID09PSBcImJyZWFrXCIpIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIGlmIChzdGF0ZS5wbGFjZW1lbnQgIT09IGZpcnN0Rml0dGluZ1BsYWNlbWVudCkge1xuICAgIHN0YXRlLm1vZGlmaWVyc0RhdGFbbmFtZV0uX3NraXAgPSB0cnVlO1xuICAgIHN0YXRlLnBsYWNlbWVudCA9IGZpcnN0Rml0dGluZ1BsYWNlbWVudDtcbiAgICBzdGF0ZS5yZXNldCA9IHRydWU7XG4gIH1cbn0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ2ZsaXAnLFxuICBlbmFibGVkOiB0cnVlLFxuICBwaGFzZTogJ21haW4nLFxuICBmbjogZmxpcCxcbiAgcmVxdWlyZXNJZkV4aXN0czogWydvZmZzZXQnXSxcbiAgZGF0YToge1xuICAgIF9za2lwOiBmYWxzZVxuICB9XG59OyIsICJpbXBvcnQgeyB0b3AsIGJvdHRvbSwgbGVmdCwgcmlnaHQgfSBmcm9tIFwiLi4vZW51bXMuanNcIjtcbmltcG9ydCBkZXRlY3RPdmVyZmxvdyBmcm9tIFwiLi4vdXRpbHMvZGV0ZWN0T3ZlcmZsb3cuanNcIjtcblxuZnVuY3Rpb24gZ2V0U2lkZU9mZnNldHMob3ZlcmZsb3csIHJlY3QsIHByZXZlbnRlZE9mZnNldHMpIHtcbiAgaWYgKHByZXZlbnRlZE9mZnNldHMgPT09IHZvaWQgMCkge1xuICAgIHByZXZlbnRlZE9mZnNldHMgPSB7XG4gICAgICB4OiAwLFxuICAgICAgeTogMFxuICAgIH07XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHRvcDogb3ZlcmZsb3cudG9wIC0gcmVjdC5oZWlnaHQgLSBwcmV2ZW50ZWRPZmZzZXRzLnksXG4gICAgcmlnaHQ6IG92ZXJmbG93LnJpZ2h0IC0gcmVjdC53aWR0aCArIHByZXZlbnRlZE9mZnNldHMueCxcbiAgICBib3R0b206IG92ZXJmbG93LmJvdHRvbSAtIHJlY3QuaGVpZ2h0ICsgcHJldmVudGVkT2Zmc2V0cy55LFxuICAgIGxlZnQ6IG92ZXJmbG93LmxlZnQgLSByZWN0LndpZHRoIC0gcHJldmVudGVkT2Zmc2V0cy54XG4gIH07XG59XG5cbmZ1bmN0aW9uIGlzQW55U2lkZUZ1bGx5Q2xpcHBlZChvdmVyZmxvdykge1xuICByZXR1cm4gW3RvcCwgcmlnaHQsIGJvdHRvbSwgbGVmdF0uc29tZShmdW5jdGlvbiAoc2lkZSkge1xuICAgIHJldHVybiBvdmVyZmxvd1tzaWRlXSA+PSAwO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gaGlkZShfcmVmKSB7XG4gIHZhciBzdGF0ZSA9IF9yZWYuc3RhdGUsXG4gICAgICBuYW1lID0gX3JlZi5uYW1lO1xuICB2YXIgcmVmZXJlbmNlUmVjdCA9IHN0YXRlLnJlY3RzLnJlZmVyZW5jZTtcbiAgdmFyIHBvcHBlclJlY3QgPSBzdGF0ZS5yZWN0cy5wb3BwZXI7XG4gIHZhciBwcmV2ZW50ZWRPZmZzZXRzID0gc3RhdGUubW9kaWZpZXJzRGF0YS5wcmV2ZW50T3ZlcmZsb3c7XG4gIHZhciByZWZlcmVuY2VPdmVyZmxvdyA9IGRldGVjdE92ZXJmbG93KHN0YXRlLCB7XG4gICAgZWxlbWVudENvbnRleHQ6ICdyZWZlcmVuY2UnXG4gIH0pO1xuICB2YXIgcG9wcGVyQWx0T3ZlcmZsb3cgPSBkZXRlY3RPdmVyZmxvdyhzdGF0ZSwge1xuICAgIGFsdEJvdW5kYXJ5OiB0cnVlXG4gIH0pO1xuICB2YXIgcmVmZXJlbmNlQ2xpcHBpbmdPZmZzZXRzID0gZ2V0U2lkZU9mZnNldHMocmVmZXJlbmNlT3ZlcmZsb3csIHJlZmVyZW5jZVJlY3QpO1xuICB2YXIgcG9wcGVyRXNjYXBlT2Zmc2V0cyA9IGdldFNpZGVPZmZzZXRzKHBvcHBlckFsdE92ZXJmbG93LCBwb3BwZXJSZWN0LCBwcmV2ZW50ZWRPZmZzZXRzKTtcbiAgdmFyIGlzUmVmZXJlbmNlSGlkZGVuID0gaXNBbnlTaWRlRnVsbHlDbGlwcGVkKHJlZmVyZW5jZUNsaXBwaW5nT2Zmc2V0cyk7XG4gIHZhciBoYXNQb3BwZXJFc2NhcGVkID0gaXNBbnlTaWRlRnVsbHlDbGlwcGVkKHBvcHBlckVzY2FwZU9mZnNldHMpO1xuICBzdGF0ZS5tb2RpZmllcnNEYXRhW25hbWVdID0ge1xuICAgIHJlZmVyZW5jZUNsaXBwaW5nT2Zmc2V0czogcmVmZXJlbmNlQ2xpcHBpbmdPZmZzZXRzLFxuICAgIHBvcHBlckVzY2FwZU9mZnNldHM6IHBvcHBlckVzY2FwZU9mZnNldHMsXG4gICAgaXNSZWZlcmVuY2VIaWRkZW46IGlzUmVmZXJlbmNlSGlkZGVuLFxuICAgIGhhc1BvcHBlckVzY2FwZWQ6IGhhc1BvcHBlckVzY2FwZWRcbiAgfTtcbiAgc3RhdGUuYXR0cmlidXRlcy5wb3BwZXIgPSBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZS5hdHRyaWJ1dGVzLnBvcHBlciwge1xuICAgICdkYXRhLXBvcHBlci1yZWZlcmVuY2UtaGlkZGVuJzogaXNSZWZlcmVuY2VIaWRkZW4sXG4gICAgJ2RhdGEtcG9wcGVyLWVzY2FwZWQnOiBoYXNQb3BwZXJFc2NhcGVkXG4gIH0pO1xufSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnaGlkZScsXG4gIGVuYWJsZWQ6IHRydWUsXG4gIHBoYXNlOiAnbWFpbicsXG4gIHJlcXVpcmVzSWZFeGlzdHM6IFsncHJldmVudE92ZXJmbG93J10sXG4gIGZuOiBoaWRlXG59OyIsICJpbXBvcnQgZ2V0QmFzZVBsYWNlbWVudCBmcm9tIFwiLi4vdXRpbHMvZ2V0QmFzZVBsYWNlbWVudC5qc1wiO1xuaW1wb3J0IHsgdG9wLCBsZWZ0LCByaWdodCwgcGxhY2VtZW50cyB9IGZyb20gXCIuLi9lbnVtcy5qc1wiOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cbmV4cG9ydCBmdW5jdGlvbiBkaXN0YW5jZUFuZFNraWRkaW5nVG9YWShwbGFjZW1lbnQsIHJlY3RzLCBvZmZzZXQpIHtcbiAgdmFyIGJhc2VQbGFjZW1lbnQgPSBnZXRCYXNlUGxhY2VtZW50KHBsYWNlbWVudCk7XG4gIHZhciBpbnZlcnREaXN0YW5jZSA9IFtsZWZ0LCB0b3BdLmluZGV4T2YoYmFzZVBsYWNlbWVudCkgPj0gMCA/IC0xIDogMTtcblxuICB2YXIgX3JlZiA9IHR5cGVvZiBvZmZzZXQgPT09ICdmdW5jdGlvbicgPyBvZmZzZXQoT2JqZWN0LmFzc2lnbih7fSwgcmVjdHMsIHtcbiAgICBwbGFjZW1lbnQ6IHBsYWNlbWVudFxuICB9KSkgOiBvZmZzZXQsXG4gICAgICBza2lkZGluZyA9IF9yZWZbMF0sXG4gICAgICBkaXN0YW5jZSA9IF9yZWZbMV07XG5cbiAgc2tpZGRpbmcgPSBza2lkZGluZyB8fCAwO1xuICBkaXN0YW5jZSA9IChkaXN0YW5jZSB8fCAwKSAqIGludmVydERpc3RhbmNlO1xuICByZXR1cm4gW2xlZnQsIHJpZ2h0XS5pbmRleE9mKGJhc2VQbGFjZW1lbnQpID49IDAgPyB7XG4gICAgeDogZGlzdGFuY2UsXG4gICAgeTogc2tpZGRpbmdcbiAgfSA6IHtcbiAgICB4OiBza2lkZGluZyxcbiAgICB5OiBkaXN0YW5jZVxuICB9O1xufVxuXG5mdW5jdGlvbiBvZmZzZXQoX3JlZjIpIHtcbiAgdmFyIHN0YXRlID0gX3JlZjIuc3RhdGUsXG4gICAgICBvcHRpb25zID0gX3JlZjIub3B0aW9ucyxcbiAgICAgIG5hbWUgPSBfcmVmMi5uYW1lO1xuICB2YXIgX29wdGlvbnMkb2Zmc2V0ID0gb3B0aW9ucy5vZmZzZXQsXG4gICAgICBvZmZzZXQgPSBfb3B0aW9ucyRvZmZzZXQgPT09IHZvaWQgMCA/IFswLCAwXSA6IF9vcHRpb25zJG9mZnNldDtcbiAgdmFyIGRhdGEgPSBwbGFjZW1lbnRzLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBwbGFjZW1lbnQpIHtcbiAgICBhY2NbcGxhY2VtZW50XSA9IGRpc3RhbmNlQW5kU2tpZGRpbmdUb1hZKHBsYWNlbWVudCwgc3RhdGUucmVjdHMsIG9mZnNldCk7XG4gICAgcmV0dXJuIGFjYztcbiAgfSwge30pO1xuICB2YXIgX2RhdGEkc3RhdGUkcGxhY2VtZW50ID0gZGF0YVtzdGF0ZS5wbGFjZW1lbnRdLFxuICAgICAgeCA9IF9kYXRhJHN0YXRlJHBsYWNlbWVudC54LFxuICAgICAgeSA9IF9kYXRhJHN0YXRlJHBsYWNlbWVudC55O1xuXG4gIGlmIChzdGF0ZS5tb2RpZmllcnNEYXRhLnBvcHBlck9mZnNldHMgIT0gbnVsbCkge1xuICAgIHN0YXRlLm1vZGlmaWVyc0RhdGEucG9wcGVyT2Zmc2V0cy54ICs9IHg7XG4gICAgc3RhdGUubW9kaWZpZXJzRGF0YS5wb3BwZXJPZmZzZXRzLnkgKz0geTtcbiAgfVxuXG4gIHN0YXRlLm1vZGlmaWVyc0RhdGFbbmFtZV0gPSBkYXRhO1xufSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnb2Zmc2V0JyxcbiAgZW5hYmxlZDogdHJ1ZSxcbiAgcGhhc2U6ICdtYWluJyxcbiAgcmVxdWlyZXM6IFsncG9wcGVyT2Zmc2V0cyddLFxuICBmbjogb2Zmc2V0XG59OyIsICJpbXBvcnQgY29tcHV0ZU9mZnNldHMgZnJvbSBcIi4uL3V0aWxzL2NvbXB1dGVPZmZzZXRzLmpzXCI7XG5cbmZ1bmN0aW9uIHBvcHBlck9mZnNldHMoX3JlZikge1xuICB2YXIgc3RhdGUgPSBfcmVmLnN0YXRlLFxuICAgICAgbmFtZSA9IF9yZWYubmFtZTtcbiAgLy8gT2Zmc2V0cyBhcmUgdGhlIGFjdHVhbCBwb3NpdGlvbiB0aGUgcG9wcGVyIG5lZWRzIHRvIGhhdmUgdG8gYmVcbiAgLy8gcHJvcGVybHkgcG9zaXRpb25lZCBuZWFyIGl0cyByZWZlcmVuY2UgZWxlbWVudFxuICAvLyBUaGlzIGlzIHRoZSBtb3N0IGJhc2ljIHBsYWNlbWVudCwgYW5kIHdpbGwgYmUgYWRqdXN0ZWQgYnlcbiAgLy8gdGhlIG1vZGlmaWVycyBpbiB0aGUgbmV4dCBzdGVwXG4gIHN0YXRlLm1vZGlmaWVyc0RhdGFbbmFtZV0gPSBjb21wdXRlT2Zmc2V0cyh7XG4gICAgcmVmZXJlbmNlOiBzdGF0ZS5yZWN0cy5yZWZlcmVuY2UsXG4gICAgZWxlbWVudDogc3RhdGUucmVjdHMucG9wcGVyLFxuICAgIHN0cmF0ZWd5OiAnYWJzb2x1dGUnLFxuICAgIHBsYWNlbWVudDogc3RhdGUucGxhY2VtZW50XG4gIH0pO1xufSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAncG9wcGVyT2Zmc2V0cycsXG4gIGVuYWJsZWQ6IHRydWUsXG4gIHBoYXNlOiAncmVhZCcsXG4gIGZuOiBwb3BwZXJPZmZzZXRzLFxuICBkYXRhOiB7fVxufTsiLCAiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0QWx0QXhpcyhheGlzKSB7XG4gIHJldHVybiBheGlzID09PSAneCcgPyAneScgOiAneCc7XG59IiwgImltcG9ydCB7IHRvcCwgbGVmdCwgcmlnaHQsIGJvdHRvbSwgc3RhcnQgfSBmcm9tIFwiLi4vZW51bXMuanNcIjtcbmltcG9ydCBnZXRCYXNlUGxhY2VtZW50IGZyb20gXCIuLi91dGlscy9nZXRCYXNlUGxhY2VtZW50LmpzXCI7XG5pbXBvcnQgZ2V0TWFpbkF4aXNGcm9tUGxhY2VtZW50IGZyb20gXCIuLi91dGlscy9nZXRNYWluQXhpc0Zyb21QbGFjZW1lbnQuanNcIjtcbmltcG9ydCBnZXRBbHRBeGlzIGZyb20gXCIuLi91dGlscy9nZXRBbHRBeGlzLmpzXCI7XG5pbXBvcnQgeyB3aXRoaW4sIHdpdGhpbk1heENsYW1wIH0gZnJvbSBcIi4uL3V0aWxzL3dpdGhpbi5qc1wiO1xuaW1wb3J0IGdldExheW91dFJlY3QgZnJvbSBcIi4uL2RvbS11dGlscy9nZXRMYXlvdXRSZWN0LmpzXCI7XG5pbXBvcnQgZ2V0T2Zmc2V0UGFyZW50IGZyb20gXCIuLi9kb20tdXRpbHMvZ2V0T2Zmc2V0UGFyZW50LmpzXCI7XG5pbXBvcnQgZGV0ZWN0T3ZlcmZsb3cgZnJvbSBcIi4uL3V0aWxzL2RldGVjdE92ZXJmbG93LmpzXCI7XG5pbXBvcnQgZ2V0VmFyaWF0aW9uIGZyb20gXCIuLi91dGlscy9nZXRWYXJpYXRpb24uanNcIjtcbmltcG9ydCBnZXRGcmVzaFNpZGVPYmplY3QgZnJvbSBcIi4uL3V0aWxzL2dldEZyZXNoU2lkZU9iamVjdC5qc1wiO1xuaW1wb3J0IHsgbWluIGFzIG1hdGhNaW4sIG1heCBhcyBtYXRoTWF4IH0gZnJvbSBcIi4uL3V0aWxzL21hdGguanNcIjtcblxuZnVuY3Rpb24gcHJldmVudE92ZXJmbG93KF9yZWYpIHtcbiAgdmFyIHN0YXRlID0gX3JlZi5zdGF0ZSxcbiAgICAgIG9wdGlvbnMgPSBfcmVmLm9wdGlvbnMsXG4gICAgICBuYW1lID0gX3JlZi5uYW1lO1xuICB2YXIgX29wdGlvbnMkbWFpbkF4aXMgPSBvcHRpb25zLm1haW5BeGlzLFxuICAgICAgY2hlY2tNYWluQXhpcyA9IF9vcHRpb25zJG1haW5BeGlzID09PSB2b2lkIDAgPyB0cnVlIDogX29wdGlvbnMkbWFpbkF4aXMsXG4gICAgICBfb3B0aW9ucyRhbHRBeGlzID0gb3B0aW9ucy5hbHRBeGlzLFxuICAgICAgY2hlY2tBbHRBeGlzID0gX29wdGlvbnMkYWx0QXhpcyA9PT0gdm9pZCAwID8gZmFsc2UgOiBfb3B0aW9ucyRhbHRBeGlzLFxuICAgICAgYm91bmRhcnkgPSBvcHRpb25zLmJvdW5kYXJ5LFxuICAgICAgcm9vdEJvdW5kYXJ5ID0gb3B0aW9ucy5yb290Qm91bmRhcnksXG4gICAgICBhbHRCb3VuZGFyeSA9IG9wdGlvbnMuYWx0Qm91bmRhcnksXG4gICAgICBwYWRkaW5nID0gb3B0aW9ucy5wYWRkaW5nLFxuICAgICAgX29wdGlvbnMkdGV0aGVyID0gb3B0aW9ucy50ZXRoZXIsXG4gICAgICB0ZXRoZXIgPSBfb3B0aW9ucyR0ZXRoZXIgPT09IHZvaWQgMCA/IHRydWUgOiBfb3B0aW9ucyR0ZXRoZXIsXG4gICAgICBfb3B0aW9ucyR0ZXRoZXJPZmZzZXQgPSBvcHRpb25zLnRldGhlck9mZnNldCxcbiAgICAgIHRldGhlck9mZnNldCA9IF9vcHRpb25zJHRldGhlck9mZnNldCA9PT0gdm9pZCAwID8gMCA6IF9vcHRpb25zJHRldGhlck9mZnNldDtcbiAgdmFyIG92ZXJmbG93ID0gZGV0ZWN0T3ZlcmZsb3coc3RhdGUsIHtcbiAgICBib3VuZGFyeTogYm91bmRhcnksXG4gICAgcm9vdEJvdW5kYXJ5OiByb290Qm91bmRhcnksXG4gICAgcGFkZGluZzogcGFkZGluZyxcbiAgICBhbHRCb3VuZGFyeTogYWx0Qm91bmRhcnlcbiAgfSk7XG4gIHZhciBiYXNlUGxhY2VtZW50ID0gZ2V0QmFzZVBsYWNlbWVudChzdGF0ZS5wbGFjZW1lbnQpO1xuICB2YXIgdmFyaWF0aW9uID0gZ2V0VmFyaWF0aW9uKHN0YXRlLnBsYWNlbWVudCk7XG4gIHZhciBpc0Jhc2VQbGFjZW1lbnQgPSAhdmFyaWF0aW9uO1xuICB2YXIgbWFpbkF4aXMgPSBnZXRNYWluQXhpc0Zyb21QbGFjZW1lbnQoYmFzZVBsYWNlbWVudCk7XG4gIHZhciBhbHRBeGlzID0gZ2V0QWx0QXhpcyhtYWluQXhpcyk7XG4gIHZhciBwb3BwZXJPZmZzZXRzID0gc3RhdGUubW9kaWZpZXJzRGF0YS5wb3BwZXJPZmZzZXRzO1xuICB2YXIgcmVmZXJlbmNlUmVjdCA9IHN0YXRlLnJlY3RzLnJlZmVyZW5jZTtcbiAgdmFyIHBvcHBlclJlY3QgPSBzdGF0ZS5yZWN0cy5wb3BwZXI7XG4gIHZhciB0ZXRoZXJPZmZzZXRWYWx1ZSA9IHR5cGVvZiB0ZXRoZXJPZmZzZXQgPT09ICdmdW5jdGlvbicgPyB0ZXRoZXJPZmZzZXQoT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUucmVjdHMsIHtcbiAgICBwbGFjZW1lbnQ6IHN0YXRlLnBsYWNlbWVudFxuICB9KSkgOiB0ZXRoZXJPZmZzZXQ7XG4gIHZhciBub3JtYWxpemVkVGV0aGVyT2Zmc2V0VmFsdWUgPSB0eXBlb2YgdGV0aGVyT2Zmc2V0VmFsdWUgPT09ICdudW1iZXInID8ge1xuICAgIG1haW5BeGlzOiB0ZXRoZXJPZmZzZXRWYWx1ZSxcbiAgICBhbHRBeGlzOiB0ZXRoZXJPZmZzZXRWYWx1ZVxuICB9IDogT2JqZWN0LmFzc2lnbih7XG4gICAgbWFpbkF4aXM6IDAsXG4gICAgYWx0QXhpczogMFxuICB9LCB0ZXRoZXJPZmZzZXRWYWx1ZSk7XG4gIHZhciBvZmZzZXRNb2RpZmllclN0YXRlID0gc3RhdGUubW9kaWZpZXJzRGF0YS5vZmZzZXQgPyBzdGF0ZS5tb2RpZmllcnNEYXRhLm9mZnNldFtzdGF0ZS5wbGFjZW1lbnRdIDogbnVsbDtcbiAgdmFyIGRhdGEgPSB7XG4gICAgeDogMCxcbiAgICB5OiAwXG4gIH07XG5cbiAgaWYgKCFwb3BwZXJPZmZzZXRzKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGNoZWNrTWFpbkF4aXMpIHtcbiAgICB2YXIgX29mZnNldE1vZGlmaWVyU3RhdGUkO1xuXG4gICAgdmFyIG1haW5TaWRlID0gbWFpbkF4aXMgPT09ICd5JyA/IHRvcCA6IGxlZnQ7XG4gICAgdmFyIGFsdFNpZGUgPSBtYWluQXhpcyA9PT0gJ3knID8gYm90dG9tIDogcmlnaHQ7XG4gICAgdmFyIGxlbiA9IG1haW5BeGlzID09PSAneScgPyAnaGVpZ2h0JyA6ICd3aWR0aCc7XG4gICAgdmFyIG9mZnNldCA9IHBvcHBlck9mZnNldHNbbWFpbkF4aXNdO1xuICAgIHZhciBtaW4gPSBvZmZzZXQgKyBvdmVyZmxvd1ttYWluU2lkZV07XG4gICAgdmFyIG1heCA9IG9mZnNldCAtIG92ZXJmbG93W2FsdFNpZGVdO1xuICAgIHZhciBhZGRpdGl2ZSA9IHRldGhlciA/IC1wb3BwZXJSZWN0W2xlbl0gLyAyIDogMDtcbiAgICB2YXIgbWluTGVuID0gdmFyaWF0aW9uID09PSBzdGFydCA/IHJlZmVyZW5jZVJlY3RbbGVuXSA6IHBvcHBlclJlY3RbbGVuXTtcbiAgICB2YXIgbWF4TGVuID0gdmFyaWF0aW9uID09PSBzdGFydCA/IC1wb3BwZXJSZWN0W2xlbl0gOiAtcmVmZXJlbmNlUmVjdFtsZW5dOyAvLyBXZSBuZWVkIHRvIGluY2x1ZGUgdGhlIGFycm93IGluIHRoZSBjYWxjdWxhdGlvbiBzbyB0aGUgYXJyb3cgZG9lc24ndCBnb1xuICAgIC8vIG91dHNpZGUgdGhlIHJlZmVyZW5jZSBib3VuZHNcblxuICAgIHZhciBhcnJvd0VsZW1lbnQgPSBzdGF0ZS5lbGVtZW50cy5hcnJvdztcbiAgICB2YXIgYXJyb3dSZWN0ID0gdGV0aGVyICYmIGFycm93RWxlbWVudCA/IGdldExheW91dFJlY3QoYXJyb3dFbGVtZW50KSA6IHtcbiAgICAgIHdpZHRoOiAwLFxuICAgICAgaGVpZ2h0OiAwXG4gICAgfTtcbiAgICB2YXIgYXJyb3dQYWRkaW5nT2JqZWN0ID0gc3RhdGUubW9kaWZpZXJzRGF0YVsnYXJyb3cjcGVyc2lzdGVudCddID8gc3RhdGUubW9kaWZpZXJzRGF0YVsnYXJyb3cjcGVyc2lzdGVudCddLnBhZGRpbmcgOiBnZXRGcmVzaFNpZGVPYmplY3QoKTtcbiAgICB2YXIgYXJyb3dQYWRkaW5nTWluID0gYXJyb3dQYWRkaW5nT2JqZWN0W21haW5TaWRlXTtcbiAgICB2YXIgYXJyb3dQYWRkaW5nTWF4ID0gYXJyb3dQYWRkaW5nT2JqZWN0W2FsdFNpZGVdOyAvLyBJZiB0aGUgcmVmZXJlbmNlIGxlbmd0aCBpcyBzbWFsbGVyIHRoYW4gdGhlIGFycm93IGxlbmd0aCwgd2UgZG9uJ3Qgd2FudFxuICAgIC8vIHRvIGluY2x1ZGUgaXRzIGZ1bGwgc2l6ZSBpbiB0aGUgY2FsY3VsYXRpb24uIElmIHRoZSByZWZlcmVuY2UgaXMgc21hbGxcbiAgICAvLyBhbmQgbmVhciB0aGUgZWRnZSBvZiBhIGJvdW5kYXJ5LCB0aGUgcG9wcGVyIGNhbiBvdmVyZmxvdyBldmVuIGlmIHRoZVxuICAgIC8vIHJlZmVyZW5jZSBpcyBub3Qgb3ZlcmZsb3dpbmcgYXMgd2VsbCAoZS5nLiB2aXJ0dWFsIGVsZW1lbnRzIHdpdGggbm9cbiAgICAvLyB3aWR0aCBvciBoZWlnaHQpXG5cbiAgICB2YXIgYXJyb3dMZW4gPSB3aXRoaW4oMCwgcmVmZXJlbmNlUmVjdFtsZW5dLCBhcnJvd1JlY3RbbGVuXSk7XG4gICAgdmFyIG1pbk9mZnNldCA9IGlzQmFzZVBsYWNlbWVudCA/IHJlZmVyZW5jZVJlY3RbbGVuXSAvIDIgLSBhZGRpdGl2ZSAtIGFycm93TGVuIC0gYXJyb3dQYWRkaW5nTWluIC0gbm9ybWFsaXplZFRldGhlck9mZnNldFZhbHVlLm1haW5BeGlzIDogbWluTGVuIC0gYXJyb3dMZW4gLSBhcnJvd1BhZGRpbmdNaW4gLSBub3JtYWxpemVkVGV0aGVyT2Zmc2V0VmFsdWUubWFpbkF4aXM7XG4gICAgdmFyIG1heE9mZnNldCA9IGlzQmFzZVBsYWNlbWVudCA/IC1yZWZlcmVuY2VSZWN0W2xlbl0gLyAyICsgYWRkaXRpdmUgKyBhcnJvd0xlbiArIGFycm93UGFkZGluZ01heCArIG5vcm1hbGl6ZWRUZXRoZXJPZmZzZXRWYWx1ZS5tYWluQXhpcyA6IG1heExlbiArIGFycm93TGVuICsgYXJyb3dQYWRkaW5nTWF4ICsgbm9ybWFsaXplZFRldGhlck9mZnNldFZhbHVlLm1haW5BeGlzO1xuICAgIHZhciBhcnJvd09mZnNldFBhcmVudCA9IHN0YXRlLmVsZW1lbnRzLmFycm93ICYmIGdldE9mZnNldFBhcmVudChzdGF0ZS5lbGVtZW50cy5hcnJvdyk7XG4gICAgdmFyIGNsaWVudE9mZnNldCA9IGFycm93T2Zmc2V0UGFyZW50ID8gbWFpbkF4aXMgPT09ICd5JyA/IGFycm93T2Zmc2V0UGFyZW50LmNsaWVudFRvcCB8fCAwIDogYXJyb3dPZmZzZXRQYXJlbnQuY2xpZW50TGVmdCB8fCAwIDogMDtcbiAgICB2YXIgb2Zmc2V0TW9kaWZpZXJWYWx1ZSA9IChfb2Zmc2V0TW9kaWZpZXJTdGF0ZSQgPSBvZmZzZXRNb2RpZmllclN0YXRlID09IG51bGwgPyB2b2lkIDAgOiBvZmZzZXRNb2RpZmllclN0YXRlW21haW5BeGlzXSkgIT0gbnVsbCA/IF9vZmZzZXRNb2RpZmllclN0YXRlJCA6IDA7XG4gICAgdmFyIHRldGhlck1pbiA9IG9mZnNldCArIG1pbk9mZnNldCAtIG9mZnNldE1vZGlmaWVyVmFsdWUgLSBjbGllbnRPZmZzZXQ7XG4gICAgdmFyIHRldGhlck1heCA9IG9mZnNldCArIG1heE9mZnNldCAtIG9mZnNldE1vZGlmaWVyVmFsdWU7XG4gICAgdmFyIHByZXZlbnRlZE9mZnNldCA9IHdpdGhpbih0ZXRoZXIgPyBtYXRoTWluKG1pbiwgdGV0aGVyTWluKSA6IG1pbiwgb2Zmc2V0LCB0ZXRoZXIgPyBtYXRoTWF4KG1heCwgdGV0aGVyTWF4KSA6IG1heCk7XG4gICAgcG9wcGVyT2Zmc2V0c1ttYWluQXhpc10gPSBwcmV2ZW50ZWRPZmZzZXQ7XG4gICAgZGF0YVttYWluQXhpc10gPSBwcmV2ZW50ZWRPZmZzZXQgLSBvZmZzZXQ7XG4gIH1cblxuICBpZiAoY2hlY2tBbHRBeGlzKSB7XG4gICAgdmFyIF9vZmZzZXRNb2RpZmllclN0YXRlJDI7XG5cbiAgICB2YXIgX21haW5TaWRlID0gbWFpbkF4aXMgPT09ICd4JyA/IHRvcCA6IGxlZnQ7XG5cbiAgICB2YXIgX2FsdFNpZGUgPSBtYWluQXhpcyA9PT0gJ3gnID8gYm90dG9tIDogcmlnaHQ7XG5cbiAgICB2YXIgX29mZnNldCA9IHBvcHBlck9mZnNldHNbYWx0QXhpc107XG5cbiAgICB2YXIgX2xlbiA9IGFsdEF4aXMgPT09ICd5JyA/ICdoZWlnaHQnIDogJ3dpZHRoJztcblxuICAgIHZhciBfbWluID0gX29mZnNldCArIG92ZXJmbG93W19tYWluU2lkZV07XG5cbiAgICB2YXIgX21heCA9IF9vZmZzZXQgLSBvdmVyZmxvd1tfYWx0U2lkZV07XG5cbiAgICB2YXIgaXNPcmlnaW5TaWRlID0gW3RvcCwgbGVmdF0uaW5kZXhPZihiYXNlUGxhY2VtZW50KSAhPT0gLTE7XG5cbiAgICB2YXIgX29mZnNldE1vZGlmaWVyVmFsdWUgPSAoX29mZnNldE1vZGlmaWVyU3RhdGUkMiA9IG9mZnNldE1vZGlmaWVyU3RhdGUgPT0gbnVsbCA/IHZvaWQgMCA6IG9mZnNldE1vZGlmaWVyU3RhdGVbYWx0QXhpc10pICE9IG51bGwgPyBfb2Zmc2V0TW9kaWZpZXJTdGF0ZSQyIDogMDtcblxuICAgIHZhciBfdGV0aGVyTWluID0gaXNPcmlnaW5TaWRlID8gX21pbiA6IF9vZmZzZXQgLSByZWZlcmVuY2VSZWN0W19sZW5dIC0gcG9wcGVyUmVjdFtfbGVuXSAtIF9vZmZzZXRNb2RpZmllclZhbHVlICsgbm9ybWFsaXplZFRldGhlck9mZnNldFZhbHVlLmFsdEF4aXM7XG5cbiAgICB2YXIgX3RldGhlck1heCA9IGlzT3JpZ2luU2lkZSA/IF9vZmZzZXQgKyByZWZlcmVuY2VSZWN0W19sZW5dICsgcG9wcGVyUmVjdFtfbGVuXSAtIF9vZmZzZXRNb2RpZmllclZhbHVlIC0gbm9ybWFsaXplZFRldGhlck9mZnNldFZhbHVlLmFsdEF4aXMgOiBfbWF4O1xuXG4gICAgdmFyIF9wcmV2ZW50ZWRPZmZzZXQgPSB0ZXRoZXIgJiYgaXNPcmlnaW5TaWRlID8gd2l0aGluTWF4Q2xhbXAoX3RldGhlck1pbiwgX29mZnNldCwgX3RldGhlck1heCkgOiB3aXRoaW4odGV0aGVyID8gX3RldGhlck1pbiA6IF9taW4sIF9vZmZzZXQsIHRldGhlciA/IF90ZXRoZXJNYXggOiBfbWF4KTtcblxuICAgIHBvcHBlck9mZnNldHNbYWx0QXhpc10gPSBfcHJldmVudGVkT2Zmc2V0O1xuICAgIGRhdGFbYWx0QXhpc10gPSBfcHJldmVudGVkT2Zmc2V0IC0gX29mZnNldDtcbiAgfVxuXG4gIHN0YXRlLm1vZGlmaWVyc0RhdGFbbmFtZV0gPSBkYXRhO1xufSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAncHJldmVudE92ZXJmbG93JyxcbiAgZW5hYmxlZDogdHJ1ZSxcbiAgcGhhc2U6ICdtYWluJyxcbiAgZm46IHByZXZlbnRPdmVyZmxvdyxcbiAgcmVxdWlyZXNJZkV4aXN0czogWydvZmZzZXQnXVxufTsiLCAiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0SFRNTEVsZW1lbnRTY3JvbGwoZWxlbWVudCkge1xuICByZXR1cm4ge1xuICAgIHNjcm9sbExlZnQ6IGVsZW1lbnQuc2Nyb2xsTGVmdCxcbiAgICBzY3JvbGxUb3A6IGVsZW1lbnQuc2Nyb2xsVG9wXG4gIH07XG59IiwgImltcG9ydCBnZXRXaW5kb3dTY3JvbGwgZnJvbSBcIi4vZ2V0V2luZG93U2Nyb2xsLmpzXCI7XG5pbXBvcnQgZ2V0V2luZG93IGZyb20gXCIuL2dldFdpbmRvdy5qc1wiO1xuaW1wb3J0IHsgaXNIVE1MRWxlbWVudCB9IGZyb20gXCIuL2luc3RhbmNlT2YuanNcIjtcbmltcG9ydCBnZXRIVE1MRWxlbWVudFNjcm9sbCBmcm9tIFwiLi9nZXRIVE1MRWxlbWVudFNjcm9sbC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0Tm9kZVNjcm9sbChub2RlKSB7XG4gIGlmIChub2RlID09PSBnZXRXaW5kb3cobm9kZSkgfHwgIWlzSFRNTEVsZW1lbnQobm9kZSkpIHtcbiAgICByZXR1cm4gZ2V0V2luZG93U2Nyb2xsKG5vZGUpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBnZXRIVE1MRWxlbWVudFNjcm9sbChub2RlKTtcbiAgfVxufSIsICJpbXBvcnQgZ2V0Qm91bmRpbmdDbGllbnRSZWN0IGZyb20gXCIuL2dldEJvdW5kaW5nQ2xpZW50UmVjdC5qc1wiO1xuaW1wb3J0IGdldE5vZGVTY3JvbGwgZnJvbSBcIi4vZ2V0Tm9kZVNjcm9sbC5qc1wiO1xuaW1wb3J0IGdldE5vZGVOYW1lIGZyb20gXCIuL2dldE5vZGVOYW1lLmpzXCI7XG5pbXBvcnQgeyBpc0hUTUxFbGVtZW50IH0gZnJvbSBcIi4vaW5zdGFuY2VPZi5qc1wiO1xuaW1wb3J0IGdldFdpbmRvd1Njcm9sbEJhclggZnJvbSBcIi4vZ2V0V2luZG93U2Nyb2xsQmFyWC5qc1wiO1xuaW1wb3J0IGdldERvY3VtZW50RWxlbWVudCBmcm9tIFwiLi9nZXREb2N1bWVudEVsZW1lbnQuanNcIjtcbmltcG9ydCBpc1Njcm9sbFBhcmVudCBmcm9tIFwiLi9pc1Njcm9sbFBhcmVudC5qc1wiO1xuaW1wb3J0IHsgcm91bmQgfSBmcm9tIFwiLi4vdXRpbHMvbWF0aC5qc1wiO1xuXG5mdW5jdGlvbiBpc0VsZW1lbnRTY2FsZWQoZWxlbWVudCkge1xuICB2YXIgcmVjdCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gIHZhciBzY2FsZVggPSByb3VuZChyZWN0LndpZHRoKSAvIGVsZW1lbnQub2Zmc2V0V2lkdGggfHwgMTtcbiAgdmFyIHNjYWxlWSA9IHJvdW5kKHJlY3QuaGVpZ2h0KSAvIGVsZW1lbnQub2Zmc2V0SGVpZ2h0IHx8IDE7XG4gIHJldHVybiBzY2FsZVggIT09IDEgfHwgc2NhbGVZICE9PSAxO1xufSAvLyBSZXR1cm5zIHRoZSBjb21wb3NpdGUgcmVjdCBvZiBhbiBlbGVtZW50IHJlbGF0aXZlIHRvIGl0cyBvZmZzZXRQYXJlbnQuXG4vLyBDb21wb3NpdGUgbWVhbnMgaXQgdGFrZXMgaW50byBhY2NvdW50IHRyYW5zZm9ybXMgYXMgd2VsbCBhcyBsYXlvdXQuXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0Q29tcG9zaXRlUmVjdChlbGVtZW50T3JWaXJ0dWFsRWxlbWVudCwgb2Zmc2V0UGFyZW50LCBpc0ZpeGVkKSB7XG4gIGlmIChpc0ZpeGVkID09PSB2b2lkIDApIHtcbiAgICBpc0ZpeGVkID0gZmFsc2U7XG4gIH1cblxuICB2YXIgaXNPZmZzZXRQYXJlbnRBbkVsZW1lbnQgPSBpc0hUTUxFbGVtZW50KG9mZnNldFBhcmVudCk7XG4gIHZhciBvZmZzZXRQYXJlbnRJc1NjYWxlZCA9IGlzSFRNTEVsZW1lbnQob2Zmc2V0UGFyZW50KSAmJiBpc0VsZW1lbnRTY2FsZWQob2Zmc2V0UGFyZW50KTtcbiAgdmFyIGRvY3VtZW50RWxlbWVudCA9IGdldERvY3VtZW50RWxlbWVudChvZmZzZXRQYXJlbnQpO1xuICB2YXIgcmVjdCA9IGdldEJvdW5kaW5nQ2xpZW50UmVjdChlbGVtZW50T3JWaXJ0dWFsRWxlbWVudCwgb2Zmc2V0UGFyZW50SXNTY2FsZWQsIGlzRml4ZWQpO1xuICB2YXIgc2Nyb2xsID0ge1xuICAgIHNjcm9sbExlZnQ6IDAsXG4gICAgc2Nyb2xsVG9wOiAwXG4gIH07XG4gIHZhciBvZmZzZXRzID0ge1xuICAgIHg6IDAsXG4gICAgeTogMFxuICB9O1xuXG4gIGlmIChpc09mZnNldFBhcmVudEFuRWxlbWVudCB8fCAhaXNPZmZzZXRQYXJlbnRBbkVsZW1lbnQgJiYgIWlzRml4ZWQpIHtcbiAgICBpZiAoZ2V0Tm9kZU5hbWUob2Zmc2V0UGFyZW50KSAhPT0gJ2JvZHknIHx8IC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9wb3BwZXJqcy9wb3BwZXItY29yZS9pc3N1ZXMvMTA3OFxuICAgIGlzU2Nyb2xsUGFyZW50KGRvY3VtZW50RWxlbWVudCkpIHtcbiAgICAgIHNjcm9sbCA9IGdldE5vZGVTY3JvbGwob2Zmc2V0UGFyZW50KTtcbiAgICB9XG5cbiAgICBpZiAoaXNIVE1MRWxlbWVudChvZmZzZXRQYXJlbnQpKSB7XG4gICAgICBvZmZzZXRzID0gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KG9mZnNldFBhcmVudCwgdHJ1ZSk7XG4gICAgICBvZmZzZXRzLnggKz0gb2Zmc2V0UGFyZW50LmNsaWVudExlZnQ7XG4gICAgICBvZmZzZXRzLnkgKz0gb2Zmc2V0UGFyZW50LmNsaWVudFRvcDtcbiAgICB9IGVsc2UgaWYgKGRvY3VtZW50RWxlbWVudCkge1xuICAgICAgb2Zmc2V0cy54ID0gZ2V0V2luZG93U2Nyb2xsQmFyWChkb2N1bWVudEVsZW1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgeDogcmVjdC5sZWZ0ICsgc2Nyb2xsLnNjcm9sbExlZnQgLSBvZmZzZXRzLngsXG4gICAgeTogcmVjdC50b3AgKyBzY3JvbGwuc2Nyb2xsVG9wIC0gb2Zmc2V0cy55LFxuICAgIHdpZHRoOiByZWN0LndpZHRoLFxuICAgIGhlaWdodDogcmVjdC5oZWlnaHRcbiAgfTtcbn0iLCAiaW1wb3J0IHsgbW9kaWZpZXJQaGFzZXMgfSBmcm9tIFwiLi4vZW51bXMuanNcIjsgLy8gc291cmNlOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy80OTg3NTI1NVxuXG5mdW5jdGlvbiBvcmRlcihtb2RpZmllcnMpIHtcbiAgdmFyIG1hcCA9IG5ldyBNYXAoKTtcbiAgdmFyIHZpc2l0ZWQgPSBuZXcgU2V0KCk7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgbW9kaWZpZXJzLmZvckVhY2goZnVuY3Rpb24gKG1vZGlmaWVyKSB7XG4gICAgbWFwLnNldChtb2RpZmllci5uYW1lLCBtb2RpZmllcik7XG4gIH0pOyAvLyBPbiB2aXNpdGluZyBvYmplY3QsIGNoZWNrIGZvciBpdHMgZGVwZW5kZW5jaWVzIGFuZCB2aXNpdCB0aGVtIHJlY3Vyc2l2ZWx5XG5cbiAgZnVuY3Rpb24gc29ydChtb2RpZmllcikge1xuICAgIHZpc2l0ZWQuYWRkKG1vZGlmaWVyLm5hbWUpO1xuICAgIHZhciByZXF1aXJlcyA9IFtdLmNvbmNhdChtb2RpZmllci5yZXF1aXJlcyB8fCBbXSwgbW9kaWZpZXIucmVxdWlyZXNJZkV4aXN0cyB8fCBbXSk7XG4gICAgcmVxdWlyZXMuZm9yRWFjaChmdW5jdGlvbiAoZGVwKSB7XG4gICAgICBpZiAoIXZpc2l0ZWQuaGFzKGRlcCkpIHtcbiAgICAgICAgdmFyIGRlcE1vZGlmaWVyID0gbWFwLmdldChkZXApO1xuXG4gICAgICAgIGlmIChkZXBNb2RpZmllcikge1xuICAgICAgICAgIHNvcnQoZGVwTW9kaWZpZXIpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmVzdWx0LnB1c2gobW9kaWZpZXIpO1xuICB9XG5cbiAgbW9kaWZpZXJzLmZvckVhY2goZnVuY3Rpb24gKG1vZGlmaWVyKSB7XG4gICAgaWYgKCF2aXNpdGVkLmhhcyhtb2RpZmllci5uYW1lKSkge1xuICAgICAgLy8gY2hlY2sgZm9yIHZpc2l0ZWQgb2JqZWN0XG4gICAgICBzb3J0KG1vZGlmaWVyKTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBvcmRlck1vZGlmaWVycyhtb2RpZmllcnMpIHtcbiAgLy8gb3JkZXIgYmFzZWQgb24gZGVwZW5kZW5jaWVzXG4gIHZhciBvcmRlcmVkTW9kaWZpZXJzID0gb3JkZXIobW9kaWZpZXJzKTsgLy8gb3JkZXIgYmFzZWQgb24gcGhhc2VcblxuICByZXR1cm4gbW9kaWZpZXJQaGFzZXMucmVkdWNlKGZ1bmN0aW9uIChhY2MsIHBoYXNlKSB7XG4gICAgcmV0dXJuIGFjYy5jb25jYXQob3JkZXJlZE1vZGlmaWVycy5maWx0ZXIoZnVuY3Rpb24gKG1vZGlmaWVyKSB7XG4gICAgICByZXR1cm4gbW9kaWZpZXIucGhhc2UgPT09IHBoYXNlO1xuICAgIH0pKTtcbiAgfSwgW10pO1xufSIsICJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkZWJvdW5jZShmbikge1xuICB2YXIgcGVuZGluZztcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIXBlbmRpbmcpIHtcbiAgICAgIHBlbmRpbmcgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xuICAgICAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBwZW5kaW5nID0gdW5kZWZpbmVkO1xuICAgICAgICAgIHJlc29sdmUoZm4oKSk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBlbmRpbmc7XG4gIH07XG59IiwgImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1lcmdlQnlOYW1lKG1vZGlmaWVycykge1xuICB2YXIgbWVyZ2VkID0gbW9kaWZpZXJzLnJlZHVjZShmdW5jdGlvbiAobWVyZ2VkLCBjdXJyZW50KSB7XG4gICAgdmFyIGV4aXN0aW5nID0gbWVyZ2VkW2N1cnJlbnQubmFtZV07XG4gICAgbWVyZ2VkW2N1cnJlbnQubmFtZV0gPSBleGlzdGluZyA/IE9iamVjdC5hc3NpZ24oe30sIGV4aXN0aW5nLCBjdXJyZW50LCB7XG4gICAgICBvcHRpb25zOiBPYmplY3QuYXNzaWduKHt9LCBleGlzdGluZy5vcHRpb25zLCBjdXJyZW50Lm9wdGlvbnMpLFxuICAgICAgZGF0YTogT2JqZWN0LmFzc2lnbih7fSwgZXhpc3RpbmcuZGF0YSwgY3VycmVudC5kYXRhKVxuICAgIH0pIDogY3VycmVudDtcbiAgICByZXR1cm4gbWVyZ2VkO1xuICB9LCB7fSk7IC8vIElFMTEgZG9lcyBub3Qgc3VwcG9ydCBPYmplY3QudmFsdWVzXG5cbiAgcmV0dXJuIE9iamVjdC5rZXlzKG1lcmdlZCkubWFwKGZ1bmN0aW9uIChrZXkpIHtcbiAgICByZXR1cm4gbWVyZ2VkW2tleV07XG4gIH0pO1xufSIsICJpbXBvcnQgZ2V0Q29tcG9zaXRlUmVjdCBmcm9tIFwiLi9kb20tdXRpbHMvZ2V0Q29tcG9zaXRlUmVjdC5qc1wiO1xuaW1wb3J0IGdldExheW91dFJlY3QgZnJvbSBcIi4vZG9tLXV0aWxzL2dldExheW91dFJlY3QuanNcIjtcbmltcG9ydCBsaXN0U2Nyb2xsUGFyZW50cyBmcm9tIFwiLi9kb20tdXRpbHMvbGlzdFNjcm9sbFBhcmVudHMuanNcIjtcbmltcG9ydCBnZXRPZmZzZXRQYXJlbnQgZnJvbSBcIi4vZG9tLXV0aWxzL2dldE9mZnNldFBhcmVudC5qc1wiO1xuaW1wb3J0IG9yZGVyTW9kaWZpZXJzIGZyb20gXCIuL3V0aWxzL29yZGVyTW9kaWZpZXJzLmpzXCI7XG5pbXBvcnQgZGVib3VuY2UgZnJvbSBcIi4vdXRpbHMvZGVib3VuY2UuanNcIjtcbmltcG9ydCBtZXJnZUJ5TmFtZSBmcm9tIFwiLi91dGlscy9tZXJnZUJ5TmFtZS5qc1wiO1xuaW1wb3J0IGRldGVjdE92ZXJmbG93IGZyb20gXCIuL3V0aWxzL2RldGVjdE92ZXJmbG93LmpzXCI7XG5pbXBvcnQgeyBpc0VsZW1lbnQgfSBmcm9tIFwiLi9kb20tdXRpbHMvaW5zdGFuY2VPZi5qc1wiO1xudmFyIERFRkFVTFRfT1BUSU9OUyA9IHtcbiAgcGxhY2VtZW50OiAnYm90dG9tJyxcbiAgbW9kaWZpZXJzOiBbXSxcbiAgc3RyYXRlZ3k6ICdhYnNvbHV0ZSdcbn07XG5cbmZ1bmN0aW9uIGFyZVZhbGlkRWxlbWVudHMoKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICByZXR1cm4gIWFyZ3Muc29tZShmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgIHJldHVybiAhKGVsZW1lbnQgJiYgdHlwZW9mIGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0ID09PSAnZnVuY3Rpb24nKTtcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwb3BwZXJHZW5lcmF0b3IoZ2VuZXJhdG9yT3B0aW9ucykge1xuICBpZiAoZ2VuZXJhdG9yT3B0aW9ucyA9PT0gdm9pZCAwKSB7XG4gICAgZ2VuZXJhdG9yT3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgdmFyIF9nZW5lcmF0b3JPcHRpb25zID0gZ2VuZXJhdG9yT3B0aW9ucyxcbiAgICAgIF9nZW5lcmF0b3JPcHRpb25zJGRlZiA9IF9nZW5lcmF0b3JPcHRpb25zLmRlZmF1bHRNb2RpZmllcnMsXG4gICAgICBkZWZhdWx0TW9kaWZpZXJzID0gX2dlbmVyYXRvck9wdGlvbnMkZGVmID09PSB2b2lkIDAgPyBbXSA6IF9nZW5lcmF0b3JPcHRpb25zJGRlZixcbiAgICAgIF9nZW5lcmF0b3JPcHRpb25zJGRlZjIgPSBfZ2VuZXJhdG9yT3B0aW9ucy5kZWZhdWx0T3B0aW9ucyxcbiAgICAgIGRlZmF1bHRPcHRpb25zID0gX2dlbmVyYXRvck9wdGlvbnMkZGVmMiA9PT0gdm9pZCAwID8gREVGQVVMVF9PUFRJT05TIDogX2dlbmVyYXRvck9wdGlvbnMkZGVmMjtcbiAgcmV0dXJuIGZ1bmN0aW9uIGNyZWF0ZVBvcHBlcihyZWZlcmVuY2UsIHBvcHBlciwgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHtcbiAgICAgIG9wdGlvbnMgPSBkZWZhdWx0T3B0aW9ucztcbiAgICB9XG5cbiAgICB2YXIgc3RhdGUgPSB7XG4gICAgICBwbGFjZW1lbnQ6ICdib3R0b20nLFxuICAgICAgb3JkZXJlZE1vZGlmaWVyczogW10sXG4gICAgICBvcHRpb25zOiBPYmplY3QuYXNzaWduKHt9LCBERUZBVUxUX09QVElPTlMsIGRlZmF1bHRPcHRpb25zKSxcbiAgICAgIG1vZGlmaWVyc0RhdGE6IHt9LFxuICAgICAgZWxlbWVudHM6IHtcbiAgICAgICAgcmVmZXJlbmNlOiByZWZlcmVuY2UsXG4gICAgICAgIHBvcHBlcjogcG9wcGVyXG4gICAgICB9LFxuICAgICAgYXR0cmlidXRlczoge30sXG4gICAgICBzdHlsZXM6IHt9XG4gICAgfTtcbiAgICB2YXIgZWZmZWN0Q2xlYW51cEZucyA9IFtdO1xuICAgIHZhciBpc0Rlc3Ryb3llZCA9IGZhbHNlO1xuICAgIHZhciBpbnN0YW5jZSA9IHtcbiAgICAgIHN0YXRlOiBzdGF0ZSxcbiAgICAgIHNldE9wdGlvbnM6IGZ1bmN0aW9uIHNldE9wdGlvbnMoc2V0T3B0aW9uc0FjdGlvbikge1xuICAgICAgICB2YXIgb3B0aW9ucyA9IHR5cGVvZiBzZXRPcHRpb25zQWN0aW9uID09PSAnZnVuY3Rpb24nID8gc2V0T3B0aW9uc0FjdGlvbihzdGF0ZS5vcHRpb25zKSA6IHNldE9wdGlvbnNBY3Rpb247XG4gICAgICAgIGNsZWFudXBNb2RpZmllckVmZmVjdHMoKTtcbiAgICAgICAgc3RhdGUub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIGRlZmF1bHRPcHRpb25zLCBzdGF0ZS5vcHRpb25zLCBvcHRpb25zKTtcbiAgICAgICAgc3RhdGUuc2Nyb2xsUGFyZW50cyA9IHtcbiAgICAgICAgICByZWZlcmVuY2U6IGlzRWxlbWVudChyZWZlcmVuY2UpID8gbGlzdFNjcm9sbFBhcmVudHMocmVmZXJlbmNlKSA6IHJlZmVyZW5jZS5jb250ZXh0RWxlbWVudCA/IGxpc3RTY3JvbGxQYXJlbnRzKHJlZmVyZW5jZS5jb250ZXh0RWxlbWVudCkgOiBbXSxcbiAgICAgICAgICBwb3BwZXI6IGxpc3RTY3JvbGxQYXJlbnRzKHBvcHBlcilcbiAgICAgICAgfTsgLy8gT3JkZXJzIHRoZSBtb2RpZmllcnMgYmFzZWQgb24gdGhlaXIgZGVwZW5kZW5jaWVzIGFuZCBgcGhhc2VgXG4gICAgICAgIC8vIHByb3BlcnRpZXNcblxuICAgICAgICB2YXIgb3JkZXJlZE1vZGlmaWVycyA9IG9yZGVyTW9kaWZpZXJzKG1lcmdlQnlOYW1lKFtdLmNvbmNhdChkZWZhdWx0TW9kaWZpZXJzLCBzdGF0ZS5vcHRpb25zLm1vZGlmaWVycykpKTsgLy8gU3RyaXAgb3V0IGRpc2FibGVkIG1vZGlmaWVyc1xuXG4gICAgICAgIHN0YXRlLm9yZGVyZWRNb2RpZmllcnMgPSBvcmRlcmVkTW9kaWZpZXJzLmZpbHRlcihmdW5jdGlvbiAobSkge1xuICAgICAgICAgIHJldHVybiBtLmVuYWJsZWQ7XG4gICAgICAgIH0pO1xuICAgICAgICBydW5Nb2RpZmllckVmZmVjdHMoKTtcbiAgICAgICAgcmV0dXJuIGluc3RhbmNlLnVwZGF0ZSgpO1xuICAgICAgfSxcbiAgICAgIC8vIFN5bmMgdXBkYXRlIOKAkyBpdCB3aWxsIGFsd2F5cyBiZSBleGVjdXRlZCwgZXZlbiBpZiBub3QgbmVjZXNzYXJ5LiBUaGlzXG4gICAgICAvLyBpcyB1c2VmdWwgZm9yIGxvdyBmcmVxdWVuY3kgdXBkYXRlcyB3aGVyZSBzeW5jIGJlaGF2aW9yIHNpbXBsaWZpZXMgdGhlXG4gICAgICAvLyBsb2dpYy5cbiAgICAgIC8vIEZvciBoaWdoIGZyZXF1ZW5jeSB1cGRhdGVzIChlLmcuIGByZXNpemVgIGFuZCBgc2Nyb2xsYCBldmVudHMpLCBhbHdheXNcbiAgICAgIC8vIHByZWZlciB0aGUgYXN5bmMgUG9wcGVyI3VwZGF0ZSBtZXRob2RcbiAgICAgIGZvcmNlVXBkYXRlOiBmdW5jdGlvbiBmb3JjZVVwZGF0ZSgpIHtcbiAgICAgICAgaWYgKGlzRGVzdHJveWVkKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIF9zdGF0ZSRlbGVtZW50cyA9IHN0YXRlLmVsZW1lbnRzLFxuICAgICAgICAgICAgcmVmZXJlbmNlID0gX3N0YXRlJGVsZW1lbnRzLnJlZmVyZW5jZSxcbiAgICAgICAgICAgIHBvcHBlciA9IF9zdGF0ZSRlbGVtZW50cy5wb3BwZXI7IC8vIERvbid0IHByb2NlZWQgaWYgYHJlZmVyZW5jZWAgb3IgYHBvcHBlcmAgYXJlIG5vdCB2YWxpZCBlbGVtZW50c1xuICAgICAgICAvLyBhbnltb3JlXG5cbiAgICAgICAgaWYgKCFhcmVWYWxpZEVsZW1lbnRzKHJlZmVyZW5jZSwgcG9wcGVyKSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSAvLyBTdG9yZSB0aGUgcmVmZXJlbmNlIGFuZCBwb3BwZXIgcmVjdHMgdG8gYmUgcmVhZCBieSBtb2RpZmllcnNcblxuXG4gICAgICAgIHN0YXRlLnJlY3RzID0ge1xuICAgICAgICAgIHJlZmVyZW5jZTogZ2V0Q29tcG9zaXRlUmVjdChyZWZlcmVuY2UsIGdldE9mZnNldFBhcmVudChwb3BwZXIpLCBzdGF0ZS5vcHRpb25zLnN0cmF0ZWd5ID09PSAnZml4ZWQnKSxcbiAgICAgICAgICBwb3BwZXI6IGdldExheW91dFJlY3QocG9wcGVyKVxuICAgICAgICB9OyAvLyBNb2RpZmllcnMgaGF2ZSB0aGUgYWJpbGl0eSB0byByZXNldCB0aGUgY3VycmVudCB1cGRhdGUgY3ljbGUuIFRoZVxuICAgICAgICAvLyBtb3N0IGNvbW1vbiB1c2UgY2FzZSBmb3IgdGhpcyBpcyB0aGUgYGZsaXBgIG1vZGlmaWVyIGNoYW5naW5nIHRoZVxuICAgICAgICAvLyBwbGFjZW1lbnQsIHdoaWNoIHRoZW4gbmVlZHMgdG8gcmUtcnVuIGFsbCB0aGUgbW9kaWZpZXJzLCBiZWNhdXNlIHRoZVxuICAgICAgICAvLyBsb2dpYyB3YXMgcHJldmlvdXNseSByYW4gZm9yIHRoZSBwcmV2aW91cyBwbGFjZW1lbnQgYW5kIGlzIHRoZXJlZm9yZVxuICAgICAgICAvLyBzdGFsZS9pbmNvcnJlY3RcblxuICAgICAgICBzdGF0ZS5yZXNldCA9IGZhbHNlO1xuICAgICAgICBzdGF0ZS5wbGFjZW1lbnQgPSBzdGF0ZS5vcHRpb25zLnBsYWNlbWVudDsgLy8gT24gZWFjaCB1cGRhdGUgY3ljbGUsIHRoZSBgbW9kaWZpZXJzRGF0YWAgcHJvcGVydHkgZm9yIGVhY2ggbW9kaWZpZXJcbiAgICAgICAgLy8gaXMgZmlsbGVkIHdpdGggdGhlIGluaXRpYWwgZGF0YSBzcGVjaWZpZWQgYnkgdGhlIG1vZGlmaWVyLiBUaGlzIG1lYW5zXG4gICAgICAgIC8vIGl0IGRvZXNuJ3QgcGVyc2lzdCBhbmQgaXMgZnJlc2ggb24gZWFjaCB1cGRhdGUuXG4gICAgICAgIC8vIFRvIGVuc3VyZSBwZXJzaXN0ZW50IGRhdGEsIHVzZSBgJHtuYW1lfSNwZXJzaXN0ZW50YFxuXG4gICAgICAgIHN0YXRlLm9yZGVyZWRNb2RpZmllcnMuZm9yRWFjaChmdW5jdGlvbiAobW9kaWZpZXIpIHtcbiAgICAgICAgICByZXR1cm4gc3RhdGUubW9kaWZpZXJzRGF0YVttb2RpZmllci5uYW1lXSA9IE9iamVjdC5hc3NpZ24oe30sIG1vZGlmaWVyLmRhdGEpO1xuICAgICAgICB9KTtcblxuICAgICAgICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgc3RhdGUub3JkZXJlZE1vZGlmaWVycy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICBpZiAoc3RhdGUucmVzZXQgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHN0YXRlLnJlc2V0ID0gZmFsc2U7XG4gICAgICAgICAgICBpbmRleCA9IC0xO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdmFyIF9zdGF0ZSRvcmRlcmVkTW9kaWZpZSA9IHN0YXRlLm9yZGVyZWRNb2RpZmllcnNbaW5kZXhdLFxuICAgICAgICAgICAgICBmbiA9IF9zdGF0ZSRvcmRlcmVkTW9kaWZpZS5mbixcbiAgICAgICAgICAgICAgX3N0YXRlJG9yZGVyZWRNb2RpZmllMiA9IF9zdGF0ZSRvcmRlcmVkTW9kaWZpZS5vcHRpb25zLFxuICAgICAgICAgICAgICBfb3B0aW9ucyA9IF9zdGF0ZSRvcmRlcmVkTW9kaWZpZTIgPT09IHZvaWQgMCA/IHt9IDogX3N0YXRlJG9yZGVyZWRNb2RpZmllMixcbiAgICAgICAgICAgICAgbmFtZSA9IF9zdGF0ZSRvcmRlcmVkTW9kaWZpZS5uYW1lO1xuXG4gICAgICAgICAgaWYgKHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgc3RhdGUgPSBmbih7XG4gICAgICAgICAgICAgIHN0YXRlOiBzdGF0ZSxcbiAgICAgICAgICAgICAgb3B0aW9uczogX29wdGlvbnMsXG4gICAgICAgICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgICAgICAgIGluc3RhbmNlOiBpbnN0YW5jZVxuICAgICAgICAgICAgfSkgfHwgc3RhdGU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgLy8gQXN5bmMgYW5kIG9wdGltaXN0aWNhbGx5IG9wdGltaXplZCB1cGRhdGUg4oCTIGl0IHdpbGwgbm90IGJlIGV4ZWN1dGVkIGlmXG4gICAgICAvLyBub3QgbmVjZXNzYXJ5IChkZWJvdW5jZWQgdG8gcnVuIGF0IG1vc3Qgb25jZS1wZXItdGljaylcbiAgICAgIHVwZGF0ZTogZGVib3VuY2UoZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgICAgICAgICBpbnN0YW5jZS5mb3JjZVVwZGF0ZSgpO1xuICAgICAgICAgIHJlc29sdmUoc3RhdGUpO1xuICAgICAgICB9KTtcbiAgICAgIH0pLFxuICAgICAgZGVzdHJveTogZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICAgICAgY2xlYW51cE1vZGlmaWVyRWZmZWN0cygpO1xuICAgICAgICBpc0Rlc3Ryb3llZCA9IHRydWU7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGlmICghYXJlVmFsaWRFbGVtZW50cyhyZWZlcmVuY2UsIHBvcHBlcikpIHtcbiAgICAgIHJldHVybiBpbnN0YW5jZTtcbiAgICB9XG5cbiAgICBpbnN0YW5jZS5zZXRPcHRpb25zKG9wdGlvbnMpLnRoZW4oZnVuY3Rpb24gKHN0YXRlKSB7XG4gICAgICBpZiAoIWlzRGVzdHJveWVkICYmIG9wdGlvbnMub25GaXJzdFVwZGF0ZSkge1xuICAgICAgICBvcHRpb25zLm9uRmlyc3RVcGRhdGUoc3RhdGUpO1xuICAgICAgfVxuICAgIH0pOyAvLyBNb2RpZmllcnMgaGF2ZSB0aGUgYWJpbGl0eSB0byBleGVjdXRlIGFyYml0cmFyeSBjb2RlIGJlZm9yZSB0aGUgZmlyc3RcbiAgICAvLyB1cGRhdGUgY3ljbGUgcnVucy4gVGhleSB3aWxsIGJlIGV4ZWN1dGVkIGluIHRoZSBzYW1lIG9yZGVyIGFzIHRoZSB1cGRhdGVcbiAgICAvLyBjeWNsZS4gVGhpcyBpcyB1c2VmdWwgd2hlbiBhIG1vZGlmaWVyIGFkZHMgc29tZSBwZXJzaXN0ZW50IGRhdGEgdGhhdFxuICAgIC8vIG90aGVyIG1vZGlmaWVycyBuZWVkIHRvIHVzZSwgYnV0IHRoZSBtb2RpZmllciBpcyBydW4gYWZ0ZXIgdGhlIGRlcGVuZGVudFxuICAgIC8vIG9uZS5cblxuICAgIGZ1bmN0aW9uIHJ1bk1vZGlmaWVyRWZmZWN0cygpIHtcbiAgICAgIHN0YXRlLm9yZGVyZWRNb2RpZmllcnMuZm9yRWFjaChmdW5jdGlvbiAoX3JlZikge1xuICAgICAgICB2YXIgbmFtZSA9IF9yZWYubmFtZSxcbiAgICAgICAgICAgIF9yZWYkb3B0aW9ucyA9IF9yZWYub3B0aW9ucyxcbiAgICAgICAgICAgIG9wdGlvbnMgPSBfcmVmJG9wdGlvbnMgPT09IHZvaWQgMCA/IHt9IDogX3JlZiRvcHRpb25zLFxuICAgICAgICAgICAgZWZmZWN0ID0gX3JlZi5lZmZlY3Q7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBlZmZlY3QgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICB2YXIgY2xlYW51cEZuID0gZWZmZWN0KHtcbiAgICAgICAgICAgIHN0YXRlOiBzdGF0ZSxcbiAgICAgICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgICAgICBpbnN0YW5jZTogaW5zdGFuY2UsXG4gICAgICAgICAgICBvcHRpb25zOiBvcHRpb25zXG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICB2YXIgbm9vcEZuID0gZnVuY3Rpb24gbm9vcEZuKCkge307XG5cbiAgICAgICAgICBlZmZlY3RDbGVhbnVwRm5zLnB1c2goY2xlYW51cEZuIHx8IG5vb3BGbik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNsZWFudXBNb2RpZmllckVmZmVjdHMoKSB7XG4gICAgICBlZmZlY3RDbGVhbnVwRm5zLmZvckVhY2goZnVuY3Rpb24gKGZuKSB7XG4gICAgICAgIHJldHVybiBmbigpO1xuICAgICAgfSk7XG4gICAgICBlZmZlY3RDbGVhbnVwRm5zID0gW107XG4gICAgfVxuXG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9O1xufVxuZXhwb3J0IHZhciBjcmVhdGVQb3BwZXIgPSAvKiNfX1BVUkVfXyovcG9wcGVyR2VuZXJhdG9yKCk7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuZXhwb3J0IHsgZGV0ZWN0T3ZlcmZsb3cgfTsiLCAiaW1wb3J0IHsgcG9wcGVyR2VuZXJhdG9yLCBkZXRlY3RPdmVyZmxvdyB9IGZyb20gXCIuL2NyZWF0ZVBvcHBlci5qc1wiO1xuaW1wb3J0IGV2ZW50TGlzdGVuZXJzIGZyb20gXCIuL21vZGlmaWVycy9ldmVudExpc3RlbmVycy5qc1wiO1xuaW1wb3J0IHBvcHBlck9mZnNldHMgZnJvbSBcIi4vbW9kaWZpZXJzL3BvcHBlck9mZnNldHMuanNcIjtcbmltcG9ydCBjb21wdXRlU3R5bGVzIGZyb20gXCIuL21vZGlmaWVycy9jb21wdXRlU3R5bGVzLmpzXCI7XG5pbXBvcnQgYXBwbHlTdHlsZXMgZnJvbSBcIi4vbW9kaWZpZXJzL2FwcGx5U3R5bGVzLmpzXCI7XG5pbXBvcnQgb2Zmc2V0IGZyb20gXCIuL21vZGlmaWVycy9vZmZzZXQuanNcIjtcbmltcG9ydCBmbGlwIGZyb20gXCIuL21vZGlmaWVycy9mbGlwLmpzXCI7XG5pbXBvcnQgcHJldmVudE92ZXJmbG93IGZyb20gXCIuL21vZGlmaWVycy9wcmV2ZW50T3ZlcmZsb3cuanNcIjtcbmltcG9ydCBhcnJvdyBmcm9tIFwiLi9tb2RpZmllcnMvYXJyb3cuanNcIjtcbmltcG9ydCBoaWRlIGZyb20gXCIuL21vZGlmaWVycy9oaWRlLmpzXCI7XG52YXIgZGVmYXVsdE1vZGlmaWVycyA9IFtldmVudExpc3RlbmVycywgcG9wcGVyT2Zmc2V0cywgY29tcHV0ZVN0eWxlcywgYXBwbHlTdHlsZXMsIG9mZnNldCwgZmxpcCwgcHJldmVudE92ZXJmbG93LCBhcnJvdywgaGlkZV07XG52YXIgY3JlYXRlUG9wcGVyID0gLyojX19QVVJFX18qL3BvcHBlckdlbmVyYXRvcih7XG4gIGRlZmF1bHRNb2RpZmllcnM6IGRlZmF1bHRNb2RpZmllcnNcbn0pOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cbmV4cG9ydCB7IGNyZWF0ZVBvcHBlciwgcG9wcGVyR2VuZXJhdG9yLCBkZWZhdWx0TW9kaWZpZXJzLCBkZXRlY3RPdmVyZmxvdyB9OyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cbmV4cG9ydCB7IGNyZWF0ZVBvcHBlciBhcyBjcmVhdGVQb3BwZXJMaXRlIH0gZnJvbSBcIi4vcG9wcGVyLWxpdGUuanNcIjsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5leHBvcnQgKiBmcm9tIFwiLi9tb2RpZmllcnMvaW5kZXguanNcIjsiLCAiZXhwb3J0IGNvbnN0IFJPVU5EX0FSUk9XID1cbiAgJzxzdmcgd2lkdGg9XCIxNlwiIGhlaWdodD1cIjZcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PHBhdGggZD1cIk0wIDZzMS43OTYtLjAxMyA0LjY3LTMuNjE1QzUuODUxLjkgNi45My4wMDYgOCAwYzEuMDctLjAwNiAyLjE0OC44ODcgMy4zNDMgMi4zODVDMTQuMjMzIDYuMDA1IDE2IDYgMTYgNkgwelwiPjwvc3ZnPic7XG5cbmV4cG9ydCBjb25zdCBCT1hfQ0xBU1MgPSBgX19OQU1FU1BBQ0VfUFJFRklYX18tYm94YDtcbmV4cG9ydCBjb25zdCBDT05URU5UX0NMQVNTID0gYF9fTkFNRVNQQUNFX1BSRUZJWF9fLWNvbnRlbnRgO1xuZXhwb3J0IGNvbnN0IEJBQ0tEUk9QX0NMQVNTID0gYF9fTkFNRVNQQUNFX1BSRUZJWF9fLWJhY2tkcm9wYDtcbmV4cG9ydCBjb25zdCBBUlJPV19DTEFTUyA9IGBfX05BTUVTUEFDRV9QUkVGSVhfXy1hcnJvd2A7XG5leHBvcnQgY29uc3QgU1ZHX0FSUk9XX0NMQVNTID0gYF9fTkFNRVNQQUNFX1BSRUZJWF9fLXN2Zy1hcnJvd2A7XG5cbmV4cG9ydCBjb25zdCBUT1VDSF9PUFRJT05TID0ge3Bhc3NpdmU6IHRydWUsIGNhcHR1cmU6IHRydWV9O1xuXG5leHBvcnQgY29uc3QgVElQUFlfREVGQVVMVF9BUFBFTkRfVE8gPSAoKSA9PiBkb2N1bWVudC5ib2R5O1xuIiwgImltcG9ydCB7QmFzZVBsYWNlbWVudCwgUGxhY2VtZW50fSBmcm9tICcuL3R5cGVzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGhhc093blByb3BlcnR5KFxuICBvYmo6IFJlY29yZDxzdHJpbmcsIHVua25vd24+LFxuICBrZXk6IHN0cmluZ1xuKTogYm9vbGVhbiB7XG4gIHJldHVybiB7fS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFZhbHVlQXRJbmRleE9yUmV0dXJuPFQ+KFxuICB2YWx1ZTogVCB8IFtUIHwgbnVsbCwgVCB8IG51bGxdLFxuICBpbmRleDogbnVtYmVyLFxuICBkZWZhdWx0VmFsdWU6IFQgfCBbVCwgVF1cbik6IFQge1xuICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICBjb25zdCB2ID0gdmFsdWVbaW5kZXhdO1xuICAgIHJldHVybiB2ID09IG51bGxcbiAgICAgID8gQXJyYXkuaXNBcnJheShkZWZhdWx0VmFsdWUpXG4gICAgICAgID8gZGVmYXVsdFZhbHVlW2luZGV4XVxuICAgICAgICA6IGRlZmF1bHRWYWx1ZVxuICAgICAgOiB2O1xuICB9XG5cbiAgcmV0dXJuIHZhbHVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNUeXBlKHZhbHVlOiBhbnksIHR5cGU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICBjb25zdCBzdHIgPSB7fS50b1N0cmluZy5jYWxsKHZhbHVlKTtcbiAgcmV0dXJuIHN0ci5pbmRleE9mKCdbb2JqZWN0JykgPT09IDAgJiYgc3RyLmluZGV4T2YoYCR7dHlwZX1dYCkgPiAtMTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGludm9rZVdpdGhBcmdzT3JSZXR1cm4odmFsdWU6IGFueSwgYXJnczogYW55W10pOiBhbnkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nID8gdmFsdWUoLi4uYXJncykgOiB2YWx1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlYm91bmNlPFQ+KFxuICBmbjogKGFyZzogVCkgPT4gdm9pZCxcbiAgbXM6IG51bWJlclxuKTogKGFyZzogVCkgPT4gdm9pZCB7XG4gIC8vIEF2b2lkIHdyYXBwaW5nIGluIGBzZXRUaW1lb3V0YCBpZiBtcyBpcyAwIGFueXdheVxuICBpZiAobXMgPT09IDApIHtcbiAgICByZXR1cm4gZm47XG4gIH1cblxuICBsZXQgdGltZW91dDogYW55O1xuXG4gIHJldHVybiAoYXJnKTogdm9pZCA9PiB7XG4gICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGZuKGFyZyk7XG4gICAgfSwgbXMpO1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlUHJvcGVydGllczxUPihvYmo6IFQsIGtleXM6IHN0cmluZ1tdKTogUGFydGlhbDxUPiB7XG4gIGNvbnN0IGNsb25lID0gey4uLm9ian07XG4gIGtleXMuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgZGVsZXRlIChjbG9uZSBhcyBhbnkpW2tleV07XG4gIH0pO1xuICByZXR1cm4gY2xvbmU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzcGxpdEJ5U3BhY2VzKHZhbHVlOiBzdHJpbmcpOiBzdHJpbmdbXSB7XG4gIHJldHVybiB2YWx1ZS5zcGxpdCgvXFxzKy8pLmZpbHRlcihCb29sZWFuKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGl6ZVRvQXJyYXk8VD4odmFsdWU6IFQgfCBUW10pOiBUW10ge1xuICByZXR1cm4gKFtdIGFzIFRbXSkuY29uY2F0KHZhbHVlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHB1c2hJZlVuaXF1ZTxUPihhcnI6IFRbXSwgdmFsdWU6IFQpOiB2b2lkIHtcbiAgaWYgKGFyci5pbmRleE9mKHZhbHVlKSA9PT0gLTEpIHtcbiAgICBhcnIucHVzaCh2YWx1ZSk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFwcGVuZFB4SWZOdW1iZXIodmFsdWU6IHN0cmluZyB8IG51bWJlcik6IHN0cmluZyB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInID8gYCR7dmFsdWV9cHhgIDogdmFsdWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1bmlxdWU8VD4oYXJyOiBUW10pOiBUW10ge1xuICByZXR1cm4gYXJyLmZpbHRlcigoaXRlbSwgaW5kZXgpID0+IGFyci5pbmRleE9mKGl0ZW0pID09PSBpbmRleCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXROdW1iZXIodmFsdWU6IHN0cmluZyB8IG51bWJlcik6IG51bWJlciB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInID8gdmFsdWUgOiBwYXJzZUZsb2F0KHZhbHVlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEJhc2VQbGFjZW1lbnQocGxhY2VtZW50OiBQbGFjZW1lbnQpOiBCYXNlUGxhY2VtZW50IHtcbiAgcmV0dXJuIHBsYWNlbWVudC5zcGxpdCgnLScpWzBdIGFzIEJhc2VQbGFjZW1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcnJheUZyb20odmFsdWU6IEFycmF5TGlrZTxhbnk+KTogYW55W10ge1xuICByZXR1cm4gW10uc2xpY2UuY2FsbCh2YWx1ZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVVbmRlZmluZWRQcm9wcyhcbiAgb2JqOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPlxuKTogUGFydGlhbDxSZWNvcmQ8c3RyaW5nLCB1bmtub3duPj4ge1xuICByZXR1cm4gT2JqZWN0LmtleXMob2JqKS5yZWR1Y2UoKGFjYywga2V5KSA9PiB7XG4gICAgaWYgKG9ialtrZXldICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIChhY2MgYXMgYW55KVtrZXldID0gb2JqW2tleV07XG4gICAgfVxuXG4gICAgcmV0dXJuIGFjYztcbiAgfSwge30pO1xufVxuIiwgImltcG9ydCB7UmVmZXJlbmNlRWxlbWVudCwgVGFyZ2V0c30gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQge1BvcHBlclRyZWVEYXRhfSBmcm9tICcuL3R5cGVzLWludGVybmFsJztcbmltcG9ydCB7YXJyYXlGcm9tLCBpc1R5cGUsIG5vcm1hbGl6ZVRvQXJyYXksIGdldEJhc2VQbGFjZW1lbnR9IGZyb20gJy4vdXRpbHMnO1xuXG5leHBvcnQgZnVuY3Rpb24gZGl2KCk6IEhUTUxEaXZFbGVtZW50IHtcbiAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNFbGVtZW50KHZhbHVlOiB1bmtub3duKTogdmFsdWUgaXMgRWxlbWVudCB8IERvY3VtZW50RnJhZ21lbnQge1xuICByZXR1cm4gWydFbGVtZW50JywgJ0ZyYWdtZW50J10uc29tZSgodHlwZSkgPT4gaXNUeXBlKHZhbHVlLCB0eXBlKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc05vZGVMaXN0KHZhbHVlOiB1bmtub3duKTogdmFsdWUgaXMgTm9kZUxpc3Qge1xuICByZXR1cm4gaXNUeXBlKHZhbHVlLCAnTm9kZUxpc3QnKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzTW91c2VFdmVudCh2YWx1ZTogdW5rbm93bik6IHZhbHVlIGlzIE1vdXNlRXZlbnQge1xuICByZXR1cm4gaXNUeXBlKHZhbHVlLCAnTW91c2VFdmVudCcpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNSZWZlcmVuY2VFbGVtZW50KHZhbHVlOiBhbnkpOiB2YWx1ZSBpcyBSZWZlcmVuY2VFbGVtZW50IHtcbiAgcmV0dXJuICEhKHZhbHVlICYmIHZhbHVlLl90aXBweSAmJiB2YWx1ZS5fdGlwcHkucmVmZXJlbmNlID09PSB2YWx1ZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRBcnJheU9mRWxlbWVudHModmFsdWU6IFRhcmdldHMpOiBFbGVtZW50W10ge1xuICBpZiAoaXNFbGVtZW50KHZhbHVlKSkge1xuICAgIHJldHVybiBbdmFsdWVdO1xuICB9XG5cbiAgaWYgKGlzTm9kZUxpc3QodmFsdWUpKSB7XG4gICAgcmV0dXJuIGFycmF5RnJvbSh2YWx1ZSk7XG4gIH1cblxuICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gYXJyYXlGcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwodmFsdWUpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldFRyYW5zaXRpb25EdXJhdGlvbihcbiAgZWxzOiAoSFRNTERpdkVsZW1lbnQgfCBudWxsKVtdLFxuICB2YWx1ZTogbnVtYmVyXG4pOiB2b2lkIHtcbiAgZWxzLmZvckVhY2goKGVsKSA9PiB7XG4gICAgaWYgKGVsKSB7XG4gICAgICBlbC5zdHlsZS50cmFuc2l0aW9uRHVyYXRpb24gPSBgJHt2YWx1ZX1tc2A7XG4gICAgfVxuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldFZpc2liaWxpdHlTdGF0ZShcbiAgZWxzOiAoSFRNTERpdkVsZW1lbnQgfCBudWxsKVtdLFxuICBzdGF0ZTogJ3Zpc2libGUnIHwgJ2hpZGRlbidcbik6IHZvaWQge1xuICBlbHMuZm9yRWFjaCgoZWwpID0+IHtcbiAgICBpZiAoZWwpIHtcbiAgICAgIGVsLnNldEF0dHJpYnV0ZSgnZGF0YS1zdGF0ZScsIHN0YXRlKTtcbiAgICB9XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0T3duZXJEb2N1bWVudChcbiAgZWxlbWVudE9yRWxlbWVudHM6IEVsZW1lbnQgfCBFbGVtZW50W11cbik6IERvY3VtZW50IHtcbiAgY29uc3QgW2VsZW1lbnRdID0gbm9ybWFsaXplVG9BcnJheShlbGVtZW50T3JFbGVtZW50cyk7XG5cbiAgLy8gRWxlbWVudHMgY3JlYXRlZCB2aWEgYSA8dGVtcGxhdGU+IGhhdmUgYW4gb3duZXJEb2N1bWVudCB3aXRoIG5vIHJlZmVyZW5jZSB0byB0aGUgYm9keVxuICByZXR1cm4gZWxlbWVudD8ub3duZXJEb2N1bWVudD8uYm9keSA/IGVsZW1lbnQub3duZXJEb2N1bWVudCA6IGRvY3VtZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNDdXJzb3JPdXRzaWRlSW50ZXJhY3RpdmVCb3JkZXIoXG4gIHBvcHBlclRyZWVEYXRhOiBQb3BwZXJUcmVlRGF0YVtdLFxuICBldmVudDogTW91c2VFdmVudFxuKTogYm9vbGVhbiB7XG4gIGNvbnN0IHtjbGllbnRYLCBjbGllbnRZfSA9IGV2ZW50O1xuXG4gIHJldHVybiBwb3BwZXJUcmVlRGF0YS5ldmVyeSgoe3BvcHBlclJlY3QsIHBvcHBlclN0YXRlLCBwcm9wc30pID0+IHtcbiAgICBjb25zdCB7aW50ZXJhY3RpdmVCb3JkZXJ9ID0gcHJvcHM7XG4gICAgY29uc3QgYmFzZVBsYWNlbWVudCA9IGdldEJhc2VQbGFjZW1lbnQocG9wcGVyU3RhdGUucGxhY2VtZW50KTtcbiAgICBjb25zdCBvZmZzZXREYXRhID0gcG9wcGVyU3RhdGUubW9kaWZpZXJzRGF0YS5vZmZzZXQ7XG5cbiAgICBpZiAoIW9mZnNldERhdGEpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGNvbnN0IHRvcERpc3RhbmNlID0gYmFzZVBsYWNlbWVudCA9PT0gJ2JvdHRvbScgPyBvZmZzZXREYXRhLnRvcCEueSA6IDA7XG4gICAgY29uc3QgYm90dG9tRGlzdGFuY2UgPSBiYXNlUGxhY2VtZW50ID09PSAndG9wJyA/IG9mZnNldERhdGEuYm90dG9tIS55IDogMDtcbiAgICBjb25zdCBsZWZ0RGlzdGFuY2UgPSBiYXNlUGxhY2VtZW50ID09PSAncmlnaHQnID8gb2Zmc2V0RGF0YS5sZWZ0IS54IDogMDtcbiAgICBjb25zdCByaWdodERpc3RhbmNlID0gYmFzZVBsYWNlbWVudCA9PT0gJ2xlZnQnID8gb2Zmc2V0RGF0YS5yaWdodCEueCA6IDA7XG5cbiAgICBjb25zdCBleGNlZWRzVG9wID1cbiAgICAgIHBvcHBlclJlY3QudG9wIC0gY2xpZW50WSArIHRvcERpc3RhbmNlID4gaW50ZXJhY3RpdmVCb3JkZXI7XG4gICAgY29uc3QgZXhjZWVkc0JvdHRvbSA9XG4gICAgICBjbGllbnRZIC0gcG9wcGVyUmVjdC5ib3R0b20gLSBib3R0b21EaXN0YW5jZSA+IGludGVyYWN0aXZlQm9yZGVyO1xuICAgIGNvbnN0IGV4Y2VlZHNMZWZ0ID1cbiAgICAgIHBvcHBlclJlY3QubGVmdCAtIGNsaWVudFggKyBsZWZ0RGlzdGFuY2UgPiBpbnRlcmFjdGl2ZUJvcmRlcjtcbiAgICBjb25zdCBleGNlZWRzUmlnaHQgPVxuICAgICAgY2xpZW50WCAtIHBvcHBlclJlY3QucmlnaHQgLSByaWdodERpc3RhbmNlID4gaW50ZXJhY3RpdmVCb3JkZXI7XG5cbiAgICByZXR1cm4gZXhjZWVkc1RvcCB8fCBleGNlZWRzQm90dG9tIHx8IGV4Y2VlZHNMZWZ0IHx8IGV4Y2VlZHNSaWdodDtcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVUcmFuc2l0aW9uRW5kTGlzdGVuZXIoXG4gIGJveDogSFRNTERpdkVsZW1lbnQsXG4gIGFjdGlvbjogJ2FkZCcgfCAncmVtb3ZlJyxcbiAgbGlzdGVuZXI6IChldmVudDogVHJhbnNpdGlvbkV2ZW50KSA9PiB2b2lkXG4pOiB2b2lkIHtcbiAgY29uc3QgbWV0aG9kID0gYCR7YWN0aW9ufUV2ZW50TGlzdGVuZXJgIGFzXG4gICAgfCAnYWRkRXZlbnRMaXN0ZW5lcidcbiAgICB8ICdyZW1vdmVFdmVudExpc3RlbmVyJztcblxuICAvLyBzb21lIGJyb3dzZXJzIGFwcGFyZW50bHkgc3VwcG9ydCBgdHJhbnNpdGlvbmAgKHVucHJlZml4ZWQpIGJ1dCBvbmx5IGZpcmVcbiAgLy8gYHdlYmtpdFRyYW5zaXRpb25FbmRgLi4uXG4gIFsndHJhbnNpdGlvbmVuZCcsICd3ZWJraXRUcmFuc2l0aW9uRW5kJ10uZm9yRWFjaCgoZXZlbnQpID0+IHtcbiAgICBib3hbbWV0aG9kXShldmVudCwgbGlzdGVuZXIgYXMgRXZlbnRMaXN0ZW5lcik7XG4gIH0pO1xufVxuXG4vKipcbiAqIENvbXBhcmVkIHRvIHh4eC5jb250YWlucywgdGhpcyBmdW5jdGlvbiB3b3JrcyBmb3IgZG9tIHN0cnVjdHVyZXMgd2l0aCBzaGFkb3dcbiAqIGRvbVxuICovXG5leHBvcnQgZnVuY3Rpb24gYWN0dWFsQ29udGFpbnMocGFyZW50OiBFbGVtZW50LCBjaGlsZDogRWxlbWVudCk6IGJvb2xlYW4ge1xuICBsZXQgdGFyZ2V0ID0gY2hpbGQ7XG4gIHdoaWxlICh0YXJnZXQpIHtcbiAgICBpZiAocGFyZW50LmNvbnRhaW5zKHRhcmdldCkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICB0YXJnZXQgPSAodGFyZ2V0LmdldFJvb3ROb2RlPy4oKSBhcyBhbnkpPy5ob3N0O1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cbiIsICJpbXBvcnQge1RPVUNIX09QVElPTlN9IGZyb20gJy4vY29uc3RhbnRzJztcbmltcG9ydCB7aXNSZWZlcmVuY2VFbGVtZW50fSBmcm9tICcuL2RvbS11dGlscyc7XG5cbmV4cG9ydCBjb25zdCBjdXJyZW50SW5wdXQgPSB7aXNUb3VjaDogZmFsc2V9O1xubGV0IGxhc3RNb3VzZU1vdmVUaW1lID0gMDtcblxuLyoqXG4gKiBXaGVuIGEgYHRvdWNoc3RhcnRgIGV2ZW50IGlzIGZpcmVkLCBpdCdzIGFzc3VtZWQgdGhlIHVzZXIgaXMgdXNpbmcgdG91Y2hcbiAqIGlucHV0LiBXZSdsbCBiaW5kIGEgYG1vdXNlbW92ZWAgZXZlbnQgbGlzdGVuZXIgdG8gbGlzdGVuIGZvciBtb3VzZSBpbnB1dCBpblxuICogdGhlIGZ1dHVyZS4gVGhpcyB3YXksIHRoZSBgaXNUb3VjaGAgcHJvcGVydHkgaXMgZnVsbHkgZHluYW1pYyBhbmQgd2lsbCBoYW5kbGVcbiAqIGh5YnJpZCBkZXZpY2VzIHRoYXQgdXNlIGEgbWl4IG9mIHRvdWNoICsgbW91c2UgaW5wdXQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBvbkRvY3VtZW50VG91Y2hTdGFydCgpOiB2b2lkIHtcbiAgaWYgKGN1cnJlbnRJbnB1dC5pc1RvdWNoKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY3VycmVudElucHV0LmlzVG91Y2ggPSB0cnVlO1xuXG4gIGlmICh3aW5kb3cucGVyZm9ybWFuY2UpIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBvbkRvY3VtZW50TW91c2VNb3ZlKTtcbiAgfVxufVxuXG4vKipcbiAqIFdoZW4gdHdvIGBtb3VzZW1vdmVgIGV2ZW50IGFyZSBmaXJlZCBjb25zZWN1dGl2ZWx5IHdpdGhpbiAyMG1zLCBpdCdzIGFzc3VtZWRcbiAqIHRoZSB1c2VyIGlzIHVzaW5nIG1vdXNlIGlucHV0IGFnYWluLiBgbW91c2Vtb3ZlYCBjYW4gZmlyZSBvbiB0b3VjaCBkZXZpY2VzIGFzXG4gKiB3ZWxsLCBidXQgdmVyeSByYXJlbHkgdGhhdCBxdWlja2x5LlxuICovXG5leHBvcnQgZnVuY3Rpb24gb25Eb2N1bWVudE1vdXNlTW92ZSgpOiB2b2lkIHtcbiAgY29uc3Qgbm93ID0gcGVyZm9ybWFuY2Uubm93KCk7XG5cbiAgaWYgKG5vdyAtIGxhc3RNb3VzZU1vdmVUaW1lIDwgMjApIHtcbiAgICBjdXJyZW50SW5wdXQuaXNUb3VjaCA9IGZhbHNlO1xuXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgb25Eb2N1bWVudE1vdXNlTW92ZSk7XG4gIH1cblxuICBsYXN0TW91c2VNb3ZlVGltZSA9IG5vdztcbn1cblxuLyoqXG4gKiBXaGVuIGFuIGVsZW1lbnQgaXMgaW4gZm9jdXMgYW5kIGhhcyBhIHRpcHB5LCBsZWF2aW5nIHRoZSB0YWIvd2luZG93IGFuZFxuICogcmV0dXJuaW5nIGNhdXNlcyBpdCB0byBzaG93IGFnYWluLiBGb3IgbW91c2UgdXNlcnMgdGhpcyBpcyB1bmV4cGVjdGVkLCBidXRcbiAqIGZvciBrZXlib2FyZCB1c2UgaXQgbWFrZXMgc2Vuc2UuXG4gKiBUT0RPOiBmaW5kIGEgYmV0dGVyIHRlY2huaXF1ZSB0byBzb2x2ZSB0aGlzIHByb2JsZW1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG9uV2luZG93Qmx1cigpOiB2b2lkIHtcbiAgY29uc3QgYWN0aXZlRWxlbWVudCA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQgfCBudWxsO1xuXG4gIGlmIChpc1JlZmVyZW5jZUVsZW1lbnQoYWN0aXZlRWxlbWVudCkpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IGFjdGl2ZUVsZW1lbnQuX3RpcHB5ITtcblxuICAgIGlmIChhY3RpdmVFbGVtZW50LmJsdXIgJiYgIWluc3RhbmNlLnN0YXRlLmlzVmlzaWJsZSkge1xuICAgICAgYWN0aXZlRWxlbWVudC5ibHVyKCk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJpbmRHbG9iYWxFdmVudExpc3RlbmVycygpOiB2b2lkIHtcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIG9uRG9jdW1lbnRUb3VjaFN0YXJ0LCBUT1VDSF9PUFRJT05TKTtcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCBvbldpbmRvd0JsdXIpO1xufVxuIiwgImV4cG9ydCBjb25zdCBpc0Jyb3dzZXIgPVxuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnO1xuXG5leHBvcnQgY29uc3QgaXNJRTExID0gaXNCcm93c2VyXG4gID8gLy8gQHRzLWlnbm9yZVxuICAgICEhd2luZG93Lm1zQ3J5cHRvXG4gIDogZmFsc2U7XG4iLCAiaW1wb3J0IHtUYXJnZXRzfSBmcm9tICcuL3R5cGVzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU1lbW9yeUxlYWtXYXJuaW5nKG1ldGhvZDogc3RyaW5nKTogc3RyaW5nIHtcbiAgY29uc3QgdHh0ID0gbWV0aG9kID09PSAnZGVzdHJveScgPyAnbiBhbHJlYWR5LScgOiAnICc7XG5cbiAgcmV0dXJuIFtcbiAgICBgJHttZXRob2R9KCkgd2FzIGNhbGxlZCBvbiBhJHt0eHR9ZGVzdHJveWVkIGluc3RhbmNlLiBUaGlzIGlzIGEgbm8tb3AgYnV0YCxcbiAgICAnaW5kaWNhdGVzIGEgcG90ZW50aWFsIG1lbW9yeSBsZWFrLicsXG4gIF0uam9pbignICcpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xlYW4odmFsdWU6IHN0cmluZyk6IHN0cmluZyB7XG4gIGNvbnN0IHNwYWNlc0FuZFRhYnMgPSAvWyBcXHRdezIsfS9nO1xuICBjb25zdCBsaW5lU3RhcnRXaXRoU3BhY2VzID0gL15bIFxcdF0qL2dtO1xuXG4gIHJldHVybiB2YWx1ZVxuICAgIC5yZXBsYWNlKHNwYWNlc0FuZFRhYnMsICcgJylcbiAgICAucmVwbGFjZShsaW5lU3RhcnRXaXRoU3BhY2VzLCAnJylcbiAgICAudHJpbSgpO1xufVxuXG5mdW5jdGlvbiBnZXREZXZNZXNzYWdlKG1lc3NhZ2U6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBjbGVhbihgXG4gICVjdGlwcHkuanNcblxuICAlYyR7Y2xlYW4obWVzc2FnZSl9XG5cbiAgJWPwn5G34oCNIFRoaXMgaXMgYSBkZXZlbG9wbWVudC1vbmx5IG1lc3NhZ2UuIEl0IHdpbGwgYmUgcmVtb3ZlZCBpbiBwcm9kdWN0aW9uLlxuICBgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEZvcm1hdHRlZE1lc3NhZ2UobWVzc2FnZTogc3RyaW5nKTogc3RyaW5nW10ge1xuICByZXR1cm4gW1xuICAgIGdldERldk1lc3NhZ2UobWVzc2FnZSksXG4gICAgLy8gdGl0bGVcbiAgICAnY29sb3I6ICMwMEM1ODQ7IGZvbnQtc2l6ZTogMS4zZW07IGZvbnQtd2VpZ2h0OiBib2xkOycsXG4gICAgLy8gbWVzc2FnZVxuICAgICdsaW5lLWhlaWdodDogMS41JyxcbiAgICAvLyBmb290ZXJcbiAgICAnY29sb3I6ICNhNmEwOTU7JyxcbiAgXTtcbn1cblxuLy8gQXNzdW1lIHdhcm5pbmdzIGFuZCBlcnJvcnMgbmV2ZXIgaGF2ZSB0aGUgc2FtZSBtZXNzYWdlXG5sZXQgdmlzaXRlZE1lc3NhZ2VzOiBTZXQ8c3RyaW5nPjtcbmlmIChfX0RFVl9fKSB7XG4gIHJlc2V0VmlzaXRlZE1lc3NhZ2VzKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXNldFZpc2l0ZWRNZXNzYWdlcygpOiB2b2lkIHtcbiAgdmlzaXRlZE1lc3NhZ2VzID0gbmV3IFNldCgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gd2FybldoZW4oY29uZGl0aW9uOiBib29sZWFuLCBtZXNzYWdlOiBzdHJpbmcpOiB2b2lkIHtcbiAgaWYgKGNvbmRpdGlvbiAmJiAhdmlzaXRlZE1lc3NhZ2VzLmhhcyhtZXNzYWdlKSkge1xuICAgIHZpc2l0ZWRNZXNzYWdlcy5hZGQobWVzc2FnZSk7XG4gICAgY29uc29sZS53YXJuKC4uLmdldEZvcm1hdHRlZE1lc3NhZ2UobWVzc2FnZSkpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlcnJvcldoZW4oY29uZGl0aW9uOiBib29sZWFuLCBtZXNzYWdlOiBzdHJpbmcpOiB2b2lkIHtcbiAgaWYgKGNvbmRpdGlvbiAmJiAhdmlzaXRlZE1lc3NhZ2VzLmhhcyhtZXNzYWdlKSkge1xuICAgIHZpc2l0ZWRNZXNzYWdlcy5hZGQobWVzc2FnZSk7XG4gICAgY29uc29sZS5lcnJvciguLi5nZXRGb3JtYXR0ZWRNZXNzYWdlKG1lc3NhZ2UpKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFsaWRhdGVUYXJnZXRzKHRhcmdldHM6IFRhcmdldHMpOiB2b2lkIHtcbiAgY29uc3QgZGlkUGFzc0ZhbHN5VmFsdWUgPSAhdGFyZ2V0cztcbiAgY29uc3QgZGlkUGFzc1BsYWluT2JqZWN0ID1cbiAgICBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodGFyZ2V0cykgPT09ICdbb2JqZWN0IE9iamVjdF0nICYmXG4gICAgISh0YXJnZXRzIGFzIGFueSkuYWRkRXZlbnRMaXN0ZW5lcjtcblxuICBlcnJvcldoZW4oXG4gICAgZGlkUGFzc0ZhbHN5VmFsdWUsXG4gICAgW1xuICAgICAgJ3RpcHB5KCkgd2FzIHBhc3NlZCcsXG4gICAgICAnYCcgKyBTdHJpbmcodGFyZ2V0cykgKyAnYCcsXG4gICAgICAnYXMgaXRzIHRhcmdldHMgKGZpcnN0KSBhcmd1bWVudC4gVmFsaWQgdHlwZXMgYXJlOiBTdHJpbmcsIEVsZW1lbnQsJyxcbiAgICAgICdFbGVtZW50W10sIG9yIE5vZGVMaXN0LicsXG4gICAgXS5qb2luKCcgJylcbiAgKTtcblxuICBlcnJvcldoZW4oXG4gICAgZGlkUGFzc1BsYWluT2JqZWN0LFxuICAgIFtcbiAgICAgICd0aXBweSgpIHdhcyBwYXNzZWQgYSBwbGFpbiBvYmplY3Qgd2hpY2ggaXMgbm90IHN1cHBvcnRlZCBhcyBhbiBhcmd1bWVudCcsXG4gICAgICAnZm9yIHZpcnR1YWwgcG9zaXRpb25pbmcuIFVzZSBwcm9wcy5nZXRSZWZlcmVuY2VDbGllbnRSZWN0IGluc3RlYWQuJyxcbiAgICBdLmpvaW4oJyAnKVxuICApO1xufVxuIiwgImltcG9ydCB7RGVmYXVsdFByb3BzLCBQbHVnaW4sIFByb3BzLCBSZWZlcmVuY2VFbGVtZW50LCBUaXBweX0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQge1xuICBoYXNPd25Qcm9wZXJ0eSxcbiAgcmVtb3ZlUHJvcGVydGllcyxcbiAgaW52b2tlV2l0aEFyZ3NPclJldHVybixcbn0gZnJvbSAnLi91dGlscyc7XG5pbXBvcnQge3dhcm5XaGVufSBmcm9tICcuL3ZhbGlkYXRpb24nO1xuaW1wb3J0IHtUSVBQWV9ERUZBVUxUX0FQUEVORF9UT30gZnJvbSAnLi9jb25zdGFudHMnO1xuXG5jb25zdCBwbHVnaW5Qcm9wcyA9IHtcbiAgYW5pbWF0ZUZpbGw6IGZhbHNlLFxuICBmb2xsb3dDdXJzb3I6IGZhbHNlLFxuICBpbmxpbmVQb3NpdGlvbmluZzogZmFsc2UsXG4gIHN0aWNreTogZmFsc2UsXG59O1xuXG5jb25zdCByZW5kZXJQcm9wcyA9IHtcbiAgYWxsb3dIVE1MOiBmYWxzZSxcbiAgYW5pbWF0aW9uOiAnZmFkZScsXG4gIGFycm93OiB0cnVlLFxuICBjb250ZW50OiAnJyxcbiAgaW5lcnRpYTogZmFsc2UsXG4gIG1heFdpZHRoOiAzNTAsXG4gIHJvbGU6ICd0b29sdGlwJyxcbiAgdGhlbWU6ICcnLFxuICB6SW5kZXg6IDk5OTksXG59O1xuXG5leHBvcnQgY29uc3QgZGVmYXVsdFByb3BzOiBEZWZhdWx0UHJvcHMgPSB7XG4gIGFwcGVuZFRvOiBUSVBQWV9ERUZBVUxUX0FQUEVORF9UTyxcbiAgYXJpYToge1xuICAgIGNvbnRlbnQ6ICdhdXRvJyxcbiAgICBleHBhbmRlZDogJ2F1dG8nLFxuICB9LFxuICBkZWxheTogMCxcbiAgZHVyYXRpb246IFszMDAsIDI1MF0sXG4gIGdldFJlZmVyZW5jZUNsaWVudFJlY3Q6IG51bGwsXG4gIGhpZGVPbkNsaWNrOiB0cnVlLFxuICBpZ25vcmVBdHRyaWJ1dGVzOiBmYWxzZSxcbiAgaW50ZXJhY3RpdmU6IGZhbHNlLFxuICBpbnRlcmFjdGl2ZUJvcmRlcjogMixcbiAgaW50ZXJhY3RpdmVEZWJvdW5jZTogMCxcbiAgbW92ZVRyYW5zaXRpb246ICcnLFxuICBvZmZzZXQ6IFswLCAxMF0sXG4gIG9uQWZ0ZXJVcGRhdGUoKSB7fSxcbiAgb25CZWZvcmVVcGRhdGUoKSB7fSxcbiAgb25DcmVhdGUoKSB7fSxcbiAgb25EZXN0cm95KCkge30sXG4gIG9uSGlkZGVuKCkge30sXG4gIG9uSGlkZSgpIHt9LFxuICBvbk1vdW50KCkge30sXG4gIG9uU2hvdygpIHt9LFxuICBvblNob3duKCkge30sXG4gIG9uVHJpZ2dlcigpIHt9LFxuICBvblVudHJpZ2dlcigpIHt9LFxuICBvbkNsaWNrT3V0c2lkZSgpIHt9LFxuICBwbGFjZW1lbnQ6ICd0b3AnLFxuICBwbHVnaW5zOiBbXSxcbiAgcG9wcGVyT3B0aW9uczoge30sXG4gIHJlbmRlcjogbnVsbCxcbiAgc2hvd09uQ3JlYXRlOiBmYWxzZSxcbiAgdG91Y2g6IHRydWUsXG4gIHRyaWdnZXI6ICdtb3VzZWVudGVyIGZvY3VzJyxcbiAgdHJpZ2dlclRhcmdldDogbnVsbCxcbiAgLi4ucGx1Z2luUHJvcHMsXG4gIC4uLnJlbmRlclByb3BzLFxufTtcblxuY29uc3QgZGVmYXVsdEtleXMgPSBPYmplY3Qua2V5cyhkZWZhdWx0UHJvcHMpO1xuXG5leHBvcnQgY29uc3Qgc2V0RGVmYXVsdFByb3BzOiBUaXBweVsnc2V0RGVmYXVsdFByb3BzJ10gPSAocGFydGlhbFByb3BzKSA9PiB7XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gIGlmIChfX0RFVl9fKSB7XG4gICAgdmFsaWRhdGVQcm9wcyhwYXJ0aWFsUHJvcHMsIFtdKTtcbiAgfVxuXG4gIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhwYXJ0aWFsUHJvcHMpIGFzIEFycmF5PGtleW9mIERlZmF1bHRQcm9wcz47XG4gIGtleXMuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgKGRlZmF1bHRQcm9wcyBhcyBhbnkpW2tleV0gPSBwYXJ0aWFsUHJvcHNba2V5XTtcbiAgfSk7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RXh0ZW5kZWRQYXNzZWRQcm9wcyhcbiAgcGFzc2VkUHJvcHM6IFBhcnRpYWw8UHJvcHM+ICYgUmVjb3JkPHN0cmluZywgdW5rbm93bj5cbik6IFBhcnRpYWw8UHJvcHM+IHtcbiAgY29uc3QgcGx1Z2lucyA9IHBhc3NlZFByb3BzLnBsdWdpbnMgfHwgW107XG4gIGNvbnN0IHBsdWdpblByb3BzID0gcGx1Z2lucy5yZWR1Y2U8UmVjb3JkPHN0cmluZywgdW5rbm93bj4+KChhY2MsIHBsdWdpbikgPT4ge1xuICAgIGNvbnN0IHtuYW1lLCBkZWZhdWx0VmFsdWV9ID0gcGx1Z2luO1xuXG4gICAgaWYgKG5hbWUpIHtcbiAgICAgIGFjY1tuYW1lXSA9XG4gICAgICAgIHBhc3NlZFByb3BzW25hbWVdICE9PSB1bmRlZmluZWRcbiAgICAgICAgICA/IHBhc3NlZFByb3BzW25hbWVdXG4gICAgICAgICAgOiAoZGVmYXVsdFByb3BzIGFzIGFueSlbbmFtZV0gPz8gZGVmYXVsdFZhbHVlO1xuICAgIH1cblxuICAgIHJldHVybiBhY2M7XG4gIH0sIHt9KTtcblxuICByZXR1cm4ge1xuICAgIC4uLnBhc3NlZFByb3BzLFxuICAgIC4uLnBsdWdpblByb3BzLFxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGF0YUF0dHJpYnV0ZVByb3BzKFxuICByZWZlcmVuY2U6IFJlZmVyZW5jZUVsZW1lbnQsXG4gIHBsdWdpbnM6IFBsdWdpbltdXG4pOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiB7XG4gIGNvbnN0IHByb3BLZXlzID0gcGx1Z2luc1xuICAgID8gT2JqZWN0LmtleXMoZ2V0RXh0ZW5kZWRQYXNzZWRQcm9wcyh7Li4uZGVmYXVsdFByb3BzLCBwbHVnaW5zfSkpXG4gICAgOiBkZWZhdWx0S2V5cztcblxuICBjb25zdCBwcm9wcyA9IHByb3BLZXlzLnJlZHVjZShcbiAgICAoYWNjOiBQYXJ0aWFsPFByb3BzPiAmIFJlY29yZDxzdHJpbmcsIHVua25vd24+LCBrZXkpID0+IHtcbiAgICAgIGNvbnN0IHZhbHVlQXNTdHJpbmcgPSAoXG4gICAgICAgIHJlZmVyZW5jZS5nZXRBdHRyaWJ1dGUoYGRhdGEtdGlwcHktJHtrZXl9YCkgfHwgJydcbiAgICAgICkudHJpbSgpO1xuXG4gICAgICBpZiAoIXZhbHVlQXNTdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgIH1cblxuICAgICAgaWYgKGtleSA9PT0gJ2NvbnRlbnQnKSB7XG4gICAgICAgIGFjY1trZXldID0gdmFsdWVBc1N0cmluZztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgYWNjW2tleV0gPSBKU09OLnBhcnNlKHZhbHVlQXNTdHJpbmcpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgYWNjW2tleV0gPSB2YWx1ZUFzU3RyaW5nO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBhY2M7XG4gICAgfSxcbiAgICB7fVxuICApO1xuXG4gIHJldHVybiBwcm9wcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV2YWx1YXRlUHJvcHMoXG4gIHJlZmVyZW5jZTogUmVmZXJlbmNlRWxlbWVudCxcbiAgcHJvcHM6IFByb3BzXG4pOiBQcm9wcyB7XG4gIGNvbnN0IG91dCA9IHtcbiAgICAuLi5wcm9wcyxcbiAgICBjb250ZW50OiBpbnZva2VXaXRoQXJnc09yUmV0dXJuKHByb3BzLmNvbnRlbnQsIFtyZWZlcmVuY2VdKSxcbiAgICAuLi4ocHJvcHMuaWdub3JlQXR0cmlidXRlc1xuICAgICAgPyB7fVxuICAgICAgOiBnZXREYXRhQXR0cmlidXRlUHJvcHMocmVmZXJlbmNlLCBwcm9wcy5wbHVnaW5zKSksXG4gIH07XG5cbiAgb3V0LmFyaWEgPSB7XG4gICAgLi4uZGVmYXVsdFByb3BzLmFyaWEsXG4gICAgLi4ub3V0LmFyaWEsXG4gIH07XG5cbiAgb3V0LmFyaWEgPSB7XG4gICAgZXhwYW5kZWQ6XG4gICAgICBvdXQuYXJpYS5leHBhbmRlZCA9PT0gJ2F1dG8nID8gcHJvcHMuaW50ZXJhY3RpdmUgOiBvdXQuYXJpYS5leHBhbmRlZCxcbiAgICBjb250ZW50OlxuICAgICAgb3V0LmFyaWEuY29udGVudCA9PT0gJ2F1dG8nXG4gICAgICAgID8gcHJvcHMuaW50ZXJhY3RpdmVcbiAgICAgICAgICA/IG51bGxcbiAgICAgICAgICA6ICdkZXNjcmliZWRieSdcbiAgICAgICAgOiBvdXQuYXJpYS5jb250ZW50LFxuICB9O1xuXG4gIHJldHVybiBvdXQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YWxpZGF0ZVByb3BzKFxuICBwYXJ0aWFsUHJvcHM6IFBhcnRpYWw8UHJvcHM+ID0ge30sXG4gIHBsdWdpbnM6IFBsdWdpbltdID0gW11cbik6IHZvaWQge1xuICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMocGFydGlhbFByb3BzKSBhcyBBcnJheTxrZXlvZiBQcm9wcz47XG4gIGtleXMuZm9yRWFjaCgocHJvcCkgPT4ge1xuICAgIGNvbnN0IG5vblBsdWdpblByb3BzID0gcmVtb3ZlUHJvcGVydGllcyhcbiAgICAgIGRlZmF1bHRQcm9wcyxcbiAgICAgIE9iamVjdC5rZXlzKHBsdWdpblByb3BzKVxuICAgICk7XG5cbiAgICBsZXQgZGlkUGFzc1Vua25vd25Qcm9wID0gIWhhc093blByb3BlcnR5KG5vblBsdWdpblByb3BzLCBwcm9wKTtcblxuICAgIC8vIENoZWNrIGlmIHRoZSBwcm9wIGV4aXN0cyBpbiBgcGx1Z2luc2BcbiAgICBpZiAoZGlkUGFzc1Vua25vd25Qcm9wKSB7XG4gICAgICBkaWRQYXNzVW5rbm93blByb3AgPVxuICAgICAgICBwbHVnaW5zLmZpbHRlcigocGx1Z2luKSA9PiBwbHVnaW4ubmFtZSA9PT0gcHJvcCkubGVuZ3RoID09PSAwO1xuICAgIH1cblxuICAgIHdhcm5XaGVuKFxuICAgICAgZGlkUGFzc1Vua25vd25Qcm9wLFxuICAgICAgW1xuICAgICAgICBgXFxgJHtwcm9wfVxcYGAsXG4gICAgICAgIFwiaXMgbm90IGEgdmFsaWQgcHJvcC4gWW91IG1heSBoYXZlIHNwZWxsZWQgaXQgaW5jb3JyZWN0bHksIG9yIGlmIGl0J3NcIixcbiAgICAgICAgJ2EgcGx1Z2luLCBmb3Jnb3QgdG8gcGFzcyBpdCBpbiBhbiBhcnJheSBhcyBwcm9wcy5wbHVnaW5zLicsXG4gICAgICAgICdcXG5cXG4nLFxuICAgICAgICAnQWxsIHByb3BzOiBodHRwczovL2F0b21pa3MuZ2l0aHViLmlvL3RpcHB5anMvdjYvYWxsLXByb3BzL1xcbicsXG4gICAgICAgICdQbHVnaW5zOiBodHRwczovL2F0b21pa3MuZ2l0aHViLmlvL3RpcHB5anMvdjYvcGx1Z2lucy8nLFxuICAgICAgXS5qb2luKCcgJylcbiAgICApO1xuICB9KTtcbn1cbiIsICJpbXBvcnQge1xuICBBUlJPV19DTEFTUyxcbiAgQkFDS0RST1BfQ0xBU1MsXG4gIEJPWF9DTEFTUyxcbiAgQ09OVEVOVF9DTEFTUyxcbiAgU1ZHX0FSUk9XX0NMQVNTLFxufSBmcm9tICcuL2NvbnN0YW50cyc7XG5pbXBvcnQge2RpdiwgaXNFbGVtZW50fSBmcm9tICcuL2RvbS11dGlscyc7XG5pbXBvcnQge0luc3RhbmNlLCBQb3BwZXJFbGVtZW50LCBQcm9wc30gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQge1BvcHBlckNoaWxkcmVufSBmcm9tICcuL3R5cGVzLWludGVybmFsJztcbmltcG9ydCB7YXJyYXlGcm9tfSBmcm9tICcuL3V0aWxzJztcblxuLy8gRmlyZWZveCBleHRlbnNpb25zIGRvbid0IGFsbG93IC5pbm5lckhUTUwgPSBcIi4uLlwiIHByb3BlcnR5LiBUaGlzIHRyaWNrcyBpdC5cbmNvbnN0IGlubmVySFRNTCA9ICgpOiAnaW5uZXJIVE1MJyA9PiAnaW5uZXJIVE1MJztcblxuZnVuY3Rpb24gZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwoZWxlbWVudDogRWxlbWVudCwgaHRtbDogc3RyaW5nKTogdm9pZCB7XG4gIGVsZW1lbnRbaW5uZXJIVE1MKCldID0gaHRtbDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQXJyb3dFbGVtZW50KHZhbHVlOiBQcm9wc1snYXJyb3cnXSk6IEhUTUxEaXZFbGVtZW50IHtcbiAgY29uc3QgYXJyb3cgPSBkaXYoKTtcblxuICBpZiAodmFsdWUgPT09IHRydWUpIHtcbiAgICBhcnJvdy5jbGFzc05hbWUgPSBBUlJPV19DTEFTUztcbiAgfSBlbHNlIHtcbiAgICBhcnJvdy5jbGFzc05hbWUgPSBTVkdfQVJST1dfQ0xBU1M7XG5cbiAgICBpZiAoaXNFbGVtZW50KHZhbHVlKSkge1xuICAgICAgYXJyb3cuYXBwZW5kQ2hpbGQodmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTChhcnJvdywgdmFsdWUgYXMgc3RyaW5nKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYXJyb3c7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRDb250ZW50KGNvbnRlbnQ6IEhUTUxEaXZFbGVtZW50LCBwcm9wczogUHJvcHMpOiB2b2lkIHtcbiAgaWYgKGlzRWxlbWVudChwcm9wcy5jb250ZW50KSkge1xuICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MKGNvbnRlbnQsICcnKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHByb3BzLmNvbnRlbnQpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBwcm9wcy5jb250ZW50ICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgaWYgKHByb3BzLmFsbG93SFRNTCkge1xuICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwoY29udGVudCwgcHJvcHMuY29udGVudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRlbnQudGV4dENvbnRlbnQgPSBwcm9wcy5jb250ZW50O1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2hpbGRyZW4ocG9wcGVyOiBQb3BwZXJFbGVtZW50KTogUG9wcGVyQ2hpbGRyZW4ge1xuICBjb25zdCBib3ggPSBwb3BwZXIuZmlyc3RFbGVtZW50Q2hpbGQgYXMgSFRNTERpdkVsZW1lbnQ7XG4gIGNvbnN0IGJveENoaWxkcmVuID0gYXJyYXlGcm9tKGJveC5jaGlsZHJlbik7XG5cbiAgcmV0dXJuIHtcbiAgICBib3gsXG4gICAgY29udGVudDogYm94Q2hpbGRyZW4uZmluZCgobm9kZSkgPT4gbm9kZS5jbGFzc0xpc3QuY29udGFpbnMoQ09OVEVOVF9DTEFTUykpLFxuICAgIGFycm93OiBib3hDaGlsZHJlbi5maW5kKFxuICAgICAgKG5vZGUpID0+XG4gICAgICAgIG5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKEFSUk9XX0NMQVNTKSB8fFxuICAgICAgICBub2RlLmNsYXNzTGlzdC5jb250YWlucyhTVkdfQVJST1dfQ0xBU1MpXG4gICAgKSxcbiAgICBiYWNrZHJvcDogYm94Q2hpbGRyZW4uZmluZCgobm9kZSkgPT5cbiAgICAgIG5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKEJBQ0tEUk9QX0NMQVNTKVxuICAgICksXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXIoXG4gIGluc3RhbmNlOiBJbnN0YW5jZVxuKToge1xuICBwb3BwZXI6IFBvcHBlckVsZW1lbnQ7XG4gIG9uVXBkYXRlPzogKHByZXZQcm9wczogUHJvcHMsIG5leHRQcm9wczogUHJvcHMpID0+IHZvaWQ7XG59IHtcbiAgY29uc3QgcG9wcGVyID0gZGl2KCk7XG5cbiAgY29uc3QgYm94ID0gZGl2KCk7XG4gIGJveC5jbGFzc05hbWUgPSBCT1hfQ0xBU1M7XG4gIGJveC5zZXRBdHRyaWJ1dGUoJ2RhdGEtc3RhdGUnLCAnaGlkZGVuJyk7XG4gIGJveC5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgJy0xJyk7XG5cbiAgY29uc3QgY29udGVudCA9IGRpdigpO1xuICBjb250ZW50LmNsYXNzTmFtZSA9IENPTlRFTlRfQ0xBU1M7XG4gIGNvbnRlbnQuc2V0QXR0cmlidXRlKCdkYXRhLXN0YXRlJywgJ2hpZGRlbicpO1xuXG4gIHNldENvbnRlbnQoY29udGVudCwgaW5zdGFuY2UucHJvcHMpO1xuXG4gIHBvcHBlci5hcHBlbmRDaGlsZChib3gpO1xuICBib3guYXBwZW5kQ2hpbGQoY29udGVudCk7XG5cbiAgb25VcGRhdGUoaW5zdGFuY2UucHJvcHMsIGluc3RhbmNlLnByb3BzKTtcblxuICBmdW5jdGlvbiBvblVwZGF0ZShwcmV2UHJvcHM6IFByb3BzLCBuZXh0UHJvcHM6IFByb3BzKTogdm9pZCB7XG4gICAgY29uc3Qge2JveCwgY29udGVudCwgYXJyb3d9ID0gZ2V0Q2hpbGRyZW4ocG9wcGVyKTtcblxuICAgIGlmIChuZXh0UHJvcHMudGhlbWUpIHtcbiAgICAgIGJveC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGhlbWUnLCBuZXh0UHJvcHMudGhlbWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBib3gucmVtb3ZlQXR0cmlidXRlKCdkYXRhLXRoZW1lJyk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBuZXh0UHJvcHMuYW5pbWF0aW9uID09PSAnc3RyaW5nJykge1xuICAgICAgYm94LnNldEF0dHJpYnV0ZSgnZGF0YS1hbmltYXRpb24nLCBuZXh0UHJvcHMuYW5pbWF0aW9uKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYm94LnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1hbmltYXRpb24nKTtcbiAgICB9XG5cbiAgICBpZiAobmV4dFByb3BzLmluZXJ0aWEpIHtcbiAgICAgIGJveC5zZXRBdHRyaWJ1dGUoJ2RhdGEtaW5lcnRpYScsICcnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYm94LnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1pbmVydGlhJyk7XG4gICAgfVxuXG4gICAgYm94LnN0eWxlLm1heFdpZHRoID1cbiAgICAgIHR5cGVvZiBuZXh0UHJvcHMubWF4V2lkdGggPT09ICdudW1iZXInXG4gICAgICAgID8gYCR7bmV4dFByb3BzLm1heFdpZHRofXB4YFxuICAgICAgICA6IG5leHRQcm9wcy5tYXhXaWR0aDtcblxuICAgIGlmIChuZXh0UHJvcHMucm9sZSkge1xuICAgICAgYm94LnNldEF0dHJpYnV0ZSgncm9sZScsIG5leHRQcm9wcy5yb2xlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYm94LnJlbW92ZUF0dHJpYnV0ZSgncm9sZScpO1xuICAgIH1cblxuICAgIGlmIChcbiAgICAgIHByZXZQcm9wcy5jb250ZW50ICE9PSBuZXh0UHJvcHMuY29udGVudCB8fFxuICAgICAgcHJldlByb3BzLmFsbG93SFRNTCAhPT0gbmV4dFByb3BzLmFsbG93SFRNTFxuICAgICkge1xuICAgICAgc2V0Q29udGVudChjb250ZW50LCBpbnN0YW5jZS5wcm9wcyk7XG4gICAgfVxuXG4gICAgaWYgKG5leHRQcm9wcy5hcnJvdykge1xuICAgICAgaWYgKCFhcnJvdykge1xuICAgICAgICBib3guYXBwZW5kQ2hpbGQoY3JlYXRlQXJyb3dFbGVtZW50KG5leHRQcm9wcy5hcnJvdykpO1xuICAgICAgfSBlbHNlIGlmIChwcmV2UHJvcHMuYXJyb3cgIT09IG5leHRQcm9wcy5hcnJvdykge1xuICAgICAgICBib3gucmVtb3ZlQ2hpbGQoYXJyb3cpO1xuICAgICAgICBib3guYXBwZW5kQ2hpbGQoY3JlYXRlQXJyb3dFbGVtZW50KG5leHRQcm9wcy5hcnJvdykpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoYXJyb3cpIHtcbiAgICAgIGJveC5yZW1vdmVDaGlsZChhcnJvdyEpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcG9wcGVyLFxuICAgIG9uVXBkYXRlLFxuICB9O1xufVxuXG4vLyBSdW50aW1lIGNoZWNrIHRvIGlkZW50aWZ5IGlmIHRoZSByZW5kZXIgZnVuY3Rpb24gaXMgdGhlIGRlZmF1bHQgb25lOyB0aGlzXG4vLyB3YXkgd2UgY2FuIGFwcGx5IGRlZmF1bHQgQ1NTIHRyYW5zaXRpb25zIGxvZ2ljIGFuZCBpdCBjYW4gYmUgdHJlZS1zaGFrZW4gYXdheVxucmVuZGVyLiQkdGlwcHkgPSB0cnVlO1xuIiwgImltcG9ydCB7Y3JlYXRlUG9wcGVyLCBTdHJpY3RNb2RpZmllcnMsIE1vZGlmaWVyfSBmcm9tICdAcG9wcGVyanMvY29yZSc7XG5pbXBvcnQge2N1cnJlbnRJbnB1dH0gZnJvbSAnLi9iaW5kR2xvYmFsRXZlbnRMaXN0ZW5lcnMnO1xuaW1wb3J0IHtpc0lFMTF9IGZyb20gJy4vYnJvd3Nlcic7XG5pbXBvcnQge1RJUFBZX0RFRkFVTFRfQVBQRU5EX1RPLCBUT1VDSF9PUFRJT05TfSBmcm9tICcuL2NvbnN0YW50cyc7XG5pbXBvcnQge1xuICBhY3R1YWxDb250YWlucyxcbiAgZGl2LFxuICBnZXRPd25lckRvY3VtZW50LFxuICBpc0N1cnNvck91dHNpZGVJbnRlcmFjdGl2ZUJvcmRlcixcbiAgaXNNb3VzZUV2ZW50LFxuICBzZXRUcmFuc2l0aW9uRHVyYXRpb24sXG4gIHNldFZpc2liaWxpdHlTdGF0ZSxcbiAgdXBkYXRlVHJhbnNpdGlvbkVuZExpc3RlbmVyLFxufSBmcm9tICcuL2RvbS11dGlscyc7XG5pbXBvcnQge2RlZmF1bHRQcm9wcywgZXZhbHVhdGVQcm9wcywgZ2V0RXh0ZW5kZWRQYXNzZWRQcm9wc30gZnJvbSAnLi9wcm9wcyc7XG5pbXBvcnQge2dldENoaWxkcmVufSBmcm9tICcuL3RlbXBsYXRlJztcbmltcG9ydCB7XG4gIENvbnRlbnQsXG4gIEluc3RhbmNlLFxuICBMaWZlY3ljbGVIb29rcyxcbiAgUG9wcGVyRWxlbWVudCxcbiAgUHJvcHMsXG4gIFJlZmVyZW5jZUVsZW1lbnQsXG59IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHtMaXN0ZW5lck9iamVjdCwgUG9wcGVyVHJlZURhdGEsIFBvcHBlckNoaWxkcmVufSBmcm9tICcuL3R5cGVzLWludGVybmFsJztcbmltcG9ydCB7XG4gIGFycmF5RnJvbSxcbiAgZGVib3VuY2UsXG4gIGdldFZhbHVlQXRJbmRleE9yUmV0dXJuLFxuICBpbnZva2VXaXRoQXJnc09yUmV0dXJuLFxuICBub3JtYWxpemVUb0FycmF5LFxuICBwdXNoSWZVbmlxdWUsXG4gIHNwbGl0QnlTcGFjZXMsXG4gIHVuaXF1ZSxcbiAgcmVtb3ZlVW5kZWZpbmVkUHJvcHMsXG59IGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IHtjcmVhdGVNZW1vcnlMZWFrV2FybmluZywgZXJyb3JXaGVuLCB3YXJuV2hlbn0gZnJvbSAnLi92YWxpZGF0aW9uJztcblxubGV0IGlkQ291bnRlciA9IDE7XG5sZXQgbW91c2VNb3ZlTGlzdGVuZXJzOiAoKGV2ZW50OiBNb3VzZUV2ZW50KSA9PiB2b2lkKVtdID0gW107XG5cbi8vIFVzZWQgYnkgYGhpZGVBbGwoKWBcbmV4cG9ydCBsZXQgbW91bnRlZEluc3RhbmNlczogSW5zdGFuY2VbXSA9IFtdO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVUaXBweShcbiAgcmVmZXJlbmNlOiBSZWZlcmVuY2VFbGVtZW50LFxuICBwYXNzZWRQcm9wczogUGFydGlhbDxQcm9wcz5cbik6IEluc3RhbmNlIHtcbiAgY29uc3QgcHJvcHMgPSBldmFsdWF0ZVByb3BzKHJlZmVyZW5jZSwge1xuICAgIC4uLmRlZmF1bHRQcm9wcyxcbiAgICAuLi5nZXRFeHRlbmRlZFBhc3NlZFByb3BzKHJlbW92ZVVuZGVmaW5lZFByb3BzKHBhc3NlZFByb3BzKSksXG4gIH0pO1xuXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAvLyDwn5SSIFByaXZhdGUgbWVtYmVyc1xuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgbGV0IHNob3dUaW1lb3V0OiBhbnk7XG4gIGxldCBoaWRlVGltZW91dDogYW55O1xuICBsZXQgc2NoZWR1bGVIaWRlQW5pbWF0aW9uRnJhbWU6IG51bWJlcjtcbiAgbGV0IGlzVmlzaWJsZUZyb21DbGljayA9IGZhbHNlO1xuICBsZXQgZGlkSGlkZUR1ZVRvRG9jdW1lbnRNb3VzZURvd24gPSBmYWxzZTtcbiAgbGV0IGRpZFRvdWNoTW92ZSA9IGZhbHNlO1xuICBsZXQgaWdub3JlT25GaXJzdFVwZGF0ZSA9IGZhbHNlO1xuICBsZXQgbGFzdFRyaWdnZXJFdmVudDogRXZlbnQgfCB1bmRlZmluZWQ7XG4gIGxldCBjdXJyZW50VHJhbnNpdGlvbkVuZExpc3RlbmVyOiAoZXZlbnQ6IFRyYW5zaXRpb25FdmVudCkgPT4gdm9pZDtcbiAgbGV0IG9uRmlyc3RVcGRhdGU6ICgpID0+IHZvaWQ7XG4gIGxldCBsaXN0ZW5lcnM6IExpc3RlbmVyT2JqZWN0W10gPSBbXTtcbiAgbGV0IGRlYm91bmNlZE9uTW91c2VNb3ZlID0gZGVib3VuY2Uob25Nb3VzZU1vdmUsIHByb3BzLmludGVyYWN0aXZlRGVib3VuY2UpO1xuICBsZXQgY3VycmVudFRhcmdldDogRWxlbWVudDtcblxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgLy8g8J+UkSBQdWJsaWMgbWVtYmVyc1xuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgY29uc3QgaWQgPSBpZENvdW50ZXIrKztcbiAgY29uc3QgcG9wcGVySW5zdGFuY2UgPSBudWxsO1xuICBjb25zdCBwbHVnaW5zID0gdW5pcXVlKHByb3BzLnBsdWdpbnMpO1xuXG4gIGNvbnN0IHN0YXRlID0ge1xuICAgIC8vIElzIHRoZSBpbnN0YW5jZSBjdXJyZW50bHkgZW5hYmxlZD9cbiAgICBpc0VuYWJsZWQ6IHRydWUsXG4gICAgLy8gSXMgdGhlIHRpcHB5IGN1cnJlbnRseSBzaG93aW5nIGFuZCBub3QgdHJhbnNpdGlvbmluZyBvdXQ/XG4gICAgaXNWaXNpYmxlOiBmYWxzZSxcbiAgICAvLyBIYXMgdGhlIGluc3RhbmNlIGJlZW4gZGVzdHJveWVkP1xuICAgIGlzRGVzdHJveWVkOiBmYWxzZSxcbiAgICAvLyBJcyB0aGUgdGlwcHkgY3VycmVudGx5IG1vdW50ZWQgdG8gdGhlIERPTT9cbiAgICBpc01vdW50ZWQ6IGZhbHNlLFxuICAgIC8vIEhhcyB0aGUgdGlwcHkgZmluaXNoZWQgdHJhbnNpdGlvbmluZyBpbj9cbiAgICBpc1Nob3duOiBmYWxzZSxcbiAgfTtcblxuICBjb25zdCBpbnN0YW5jZTogSW5zdGFuY2UgPSB7XG4gICAgLy8gcHJvcGVydGllc1xuICAgIGlkLFxuICAgIHJlZmVyZW5jZSxcbiAgICBwb3BwZXI6IGRpdigpLFxuICAgIHBvcHBlckluc3RhbmNlLFxuICAgIHByb3BzLFxuICAgIHN0YXRlLFxuICAgIHBsdWdpbnMsXG4gICAgLy8gbWV0aG9kc1xuICAgIGNsZWFyRGVsYXlUaW1lb3V0cyxcbiAgICBzZXRQcm9wcyxcbiAgICBzZXRDb250ZW50LFxuICAgIHNob3csXG4gICAgaGlkZSxcbiAgICBoaWRlV2l0aEludGVyYWN0aXZpdHksXG4gICAgZW5hYmxlLFxuICAgIGRpc2FibGUsXG4gICAgdW5tb3VudCxcbiAgICBkZXN0cm95LFxuICB9O1xuXG4gIC8vIFRPRE86IEludmVzdGlnYXRlIHdoeSB0aGlzIGVhcmx5IHJldHVybiBjYXVzZXMgYSBURFogZXJyb3IgaW4gdGhlIHRlc3RzIOKAlFxuICAvLyBpdCBkb2Vzbid0IHNlZW0gdG8gaGFwcGVuIGluIHRoZSBicm93c2VyXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICBpZiAoIXByb3BzLnJlbmRlcikge1xuICAgIGlmIChfX0RFVl9fKSB7XG4gICAgICBlcnJvcldoZW4odHJ1ZSwgJ3JlbmRlcigpIGZ1bmN0aW9uIGhhcyBub3QgYmVlbiBzdXBwbGllZC4nKTtcbiAgICB9XG5cbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgLy8gSW5pdGlhbCBtdXRhdGlvbnNcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIGNvbnN0IHtwb3BwZXIsIG9uVXBkYXRlfSA9IHByb3BzLnJlbmRlcihpbnN0YW5jZSk7XG5cbiAgcG9wcGVyLnNldEF0dHJpYnV0ZSgnZGF0YS1fX05BTUVTUEFDRV9QUkVGSVhfXy1yb290JywgJycpO1xuICBwb3BwZXIuaWQgPSBgX19OQU1FU1BBQ0VfUFJFRklYX18tJHtpbnN0YW5jZS5pZH1gO1xuXG4gIGluc3RhbmNlLnBvcHBlciA9IHBvcHBlcjtcbiAgcmVmZXJlbmNlLl90aXBweSA9IGluc3RhbmNlO1xuICBwb3BwZXIuX3RpcHB5ID0gaW5zdGFuY2U7XG5cbiAgY29uc3QgcGx1Z2luc0hvb2tzID0gcGx1Z2lucy5tYXAoKHBsdWdpbikgPT4gcGx1Z2luLmZuKGluc3RhbmNlKSk7XG4gIGNvbnN0IGhhc0FyaWFFeHBhbmRlZCA9IHJlZmVyZW5jZS5oYXNBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnKTtcblxuICBhZGRMaXN0ZW5lcnMoKTtcbiAgaGFuZGxlQXJpYUV4cGFuZGVkQXR0cmlidXRlKCk7XG4gIGhhbmRsZVN0eWxlcygpO1xuXG4gIGludm9rZUhvb2soJ29uQ3JlYXRlJywgW2luc3RhbmNlXSk7XG5cbiAgaWYgKHByb3BzLnNob3dPbkNyZWF0ZSkge1xuICAgIHNjaGVkdWxlU2hvdygpO1xuICB9XG5cbiAgLy8gUHJldmVudCBhIHRpcHB5IHdpdGggYSBkZWxheSBmcm9tIGhpZGluZyBpZiB0aGUgY3Vyc29yIGxlZnQgdGhlbiByZXR1cm5lZFxuICAvLyBiZWZvcmUgaXQgc3RhcnRlZCBoaWRpbmdcbiAgcG9wcGVyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCAoKSA9PiB7XG4gICAgaWYgKGluc3RhbmNlLnByb3BzLmludGVyYWN0aXZlICYmIGluc3RhbmNlLnN0YXRlLmlzVmlzaWJsZSkge1xuICAgICAgaW5zdGFuY2UuY2xlYXJEZWxheVRpbWVvdXRzKCk7XG4gICAgfVxuICB9KTtcblxuICBwb3BwZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsICgpID0+IHtcbiAgICBpZiAoXG4gICAgICBpbnN0YW5jZS5wcm9wcy5pbnRlcmFjdGl2ZSAmJlxuICAgICAgaW5zdGFuY2UucHJvcHMudHJpZ2dlci5pbmRleE9mKCdtb3VzZWVudGVyJykgPj0gMFxuICAgICkge1xuICAgICAgZ2V0RG9jdW1lbnQoKS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBkZWJvdW5jZWRPbk1vdXNlTW92ZSk7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gaW5zdGFuY2U7XG5cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIC8vIPCflJIgUHJpdmF0ZSBtZXRob2RzXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICBmdW5jdGlvbiBnZXROb3JtYWxpemVkVG91Y2hTZXR0aW5ncygpOiBbc3RyaW5nIHwgYm9vbGVhbiwgbnVtYmVyXSB7XG4gICAgY29uc3Qge3RvdWNofSA9IGluc3RhbmNlLnByb3BzO1xuICAgIHJldHVybiBBcnJheS5pc0FycmF5KHRvdWNoKSA/IHRvdWNoIDogW3RvdWNoLCAwXTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldElzQ3VzdG9tVG91Y2hCZWhhdmlvcigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gZ2V0Tm9ybWFsaXplZFRvdWNoU2V0dGluZ3MoKVswXSA9PT0gJ2hvbGQnO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0SXNEZWZhdWx0UmVuZGVyRm4oKTogYm9vbGVhbiB7XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIHJldHVybiAhIWluc3RhbmNlLnByb3BzLnJlbmRlcj8uJCR0aXBweTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEN1cnJlbnRUYXJnZXQoKTogRWxlbWVudCB7XG4gICAgcmV0dXJuIGN1cnJlbnRUYXJnZXQgfHwgcmVmZXJlbmNlO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0RG9jdW1lbnQoKTogRG9jdW1lbnQge1xuICAgIGNvbnN0IHBhcmVudCA9IGdldEN1cnJlbnRUYXJnZXQoKS5wYXJlbnROb2RlIGFzIEVsZW1lbnQ7XG4gICAgcmV0dXJuIHBhcmVudCA/IGdldE93bmVyRG9jdW1lbnQocGFyZW50KSA6IGRvY3VtZW50O1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0RGVmYXVsdFRlbXBsYXRlQ2hpbGRyZW4oKTogUG9wcGVyQ2hpbGRyZW4ge1xuICAgIHJldHVybiBnZXRDaGlsZHJlbihwb3BwZXIpO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0RGVsYXkoaXNTaG93OiBib29sZWFuKTogbnVtYmVyIHtcbiAgICAvLyBGb3IgdG91Y2ggb3Iga2V5Ym9hcmQgaW5wdXQsIGZvcmNlIGAwYCBkZWxheSBmb3IgVVggcmVhc29uc1xuICAgIC8vIEFsc28gaWYgdGhlIGluc3RhbmNlIGlzIG1vdW50ZWQgYnV0IG5vdCB2aXNpYmxlICh0cmFuc2l0aW9uaW5nIG91dCksXG4gICAgLy8gaWdub3JlIGRlbGF5XG4gICAgaWYgKFxuICAgICAgKGluc3RhbmNlLnN0YXRlLmlzTW91bnRlZCAmJiAhaW5zdGFuY2Uuc3RhdGUuaXNWaXNpYmxlKSB8fFxuICAgICAgY3VycmVudElucHV0LmlzVG91Y2ggfHxcbiAgICAgIChsYXN0VHJpZ2dlckV2ZW50ICYmIGxhc3RUcmlnZ2VyRXZlbnQudHlwZSA9PT0gJ2ZvY3VzJylcbiAgICApIHtcbiAgICAgIHJldHVybiAwO1xuICAgIH1cblxuICAgIHJldHVybiBnZXRWYWx1ZUF0SW5kZXhPclJldHVybihcbiAgICAgIGluc3RhbmNlLnByb3BzLmRlbGF5LFxuICAgICAgaXNTaG93ID8gMCA6IDEsXG4gICAgICBkZWZhdWx0UHJvcHMuZGVsYXlcbiAgICApO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlU3R5bGVzKGZyb21IaWRlID0gZmFsc2UpOiB2b2lkIHtcbiAgICBwb3BwZXIuc3R5bGUucG9pbnRlckV2ZW50cyA9XG4gICAgICBpbnN0YW5jZS5wcm9wcy5pbnRlcmFjdGl2ZSAmJiAhZnJvbUhpZGUgPyAnJyA6ICdub25lJztcbiAgICBwb3BwZXIuc3R5bGUuekluZGV4ID0gYCR7aW5zdGFuY2UucHJvcHMuekluZGV4fWA7XG4gIH1cblxuICBmdW5jdGlvbiBpbnZva2VIb29rKFxuICAgIGhvb2s6IGtleW9mIExpZmVjeWNsZUhvb2tzLFxuICAgIGFyZ3M6IFtJbnN0YW5jZSwgYW55P10sXG4gICAgc2hvdWxkSW52b2tlUHJvcHNIb29rID0gdHJ1ZVxuICApOiB2b2lkIHtcbiAgICBwbHVnaW5zSG9va3MuZm9yRWFjaCgocGx1Z2luSG9va3MpID0+IHtcbiAgICAgIGlmIChwbHVnaW5Ib29rc1tob29rXSkge1xuICAgICAgICBwbHVnaW5Ib29rc1tob29rXSEoLi4uYXJncyk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAoc2hvdWxkSW52b2tlUHJvcHNIb29rKSB7XG4gICAgICBpbnN0YW5jZS5wcm9wc1tob29rXSguLi5hcmdzKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVBcmlhQ29udGVudEF0dHJpYnV0ZSgpOiB2b2lkIHtcbiAgICBjb25zdCB7YXJpYX0gPSBpbnN0YW5jZS5wcm9wcztcblxuICAgIGlmICghYXJpYS5jb250ZW50KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgYXR0ciA9IGBhcmlhLSR7YXJpYS5jb250ZW50fWA7XG4gICAgY29uc3QgaWQgPSBwb3BwZXIuaWQ7XG4gICAgY29uc3Qgbm9kZXMgPSBub3JtYWxpemVUb0FycmF5KGluc3RhbmNlLnByb3BzLnRyaWdnZXJUYXJnZXQgfHwgcmVmZXJlbmNlKTtcblxuICAgIG5vZGVzLmZvckVhY2goKG5vZGUpID0+IHtcbiAgICAgIGNvbnN0IGN1cnJlbnRWYWx1ZSA9IG5vZGUuZ2V0QXR0cmlidXRlKGF0dHIpO1xuXG4gICAgICBpZiAoaW5zdGFuY2Uuc3RhdGUuaXNWaXNpYmxlKSB7XG4gICAgICAgIG5vZGUuc2V0QXR0cmlidXRlKGF0dHIsIGN1cnJlbnRWYWx1ZSA/IGAke2N1cnJlbnRWYWx1ZX0gJHtpZH1gIDogaWQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgbmV4dFZhbHVlID0gY3VycmVudFZhbHVlICYmIGN1cnJlbnRWYWx1ZS5yZXBsYWNlKGlkLCAnJykudHJpbSgpO1xuXG4gICAgICAgIGlmIChuZXh0VmFsdWUpIHtcbiAgICAgICAgICBub2RlLnNldEF0dHJpYnV0ZShhdHRyLCBuZXh0VmFsdWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG5vZGUucmVtb3ZlQXR0cmlidXRlKGF0dHIpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVBcmlhRXhwYW5kZWRBdHRyaWJ1dGUoKTogdm9pZCB7XG4gICAgaWYgKGhhc0FyaWFFeHBhbmRlZCB8fCAhaW5zdGFuY2UucHJvcHMuYXJpYS5leHBhbmRlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IG5vZGVzID0gbm9ybWFsaXplVG9BcnJheShpbnN0YW5jZS5wcm9wcy50cmlnZ2VyVGFyZ2V0IHx8IHJlZmVyZW5jZSk7XG5cbiAgICBub2Rlcy5mb3JFYWNoKChub2RlKSA9PiB7XG4gICAgICBpZiAoaW5zdGFuY2UucHJvcHMuaW50ZXJhY3RpdmUpIHtcbiAgICAgICAgbm9kZS5zZXRBdHRyaWJ1dGUoXG4gICAgICAgICAgJ2FyaWEtZXhwYW5kZWQnLFxuICAgICAgICAgIGluc3RhbmNlLnN0YXRlLmlzVmlzaWJsZSAmJiBub2RlID09PSBnZXRDdXJyZW50VGFyZ2V0KClcbiAgICAgICAgICAgID8gJ3RydWUnXG4gICAgICAgICAgICA6ICdmYWxzZSdcbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5vZGUucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBjbGVhbnVwSW50ZXJhY3RpdmVNb3VzZUxpc3RlbmVycygpOiB2b2lkIHtcbiAgICBnZXREb2N1bWVudCgpLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGRlYm91bmNlZE9uTW91c2VNb3ZlKTtcbiAgICBtb3VzZU1vdmVMaXN0ZW5lcnMgPSBtb3VzZU1vdmVMaXN0ZW5lcnMuZmlsdGVyKFxuICAgICAgKGxpc3RlbmVyKSA9PiBsaXN0ZW5lciAhPT0gZGVib3VuY2VkT25Nb3VzZU1vdmVcbiAgICApO1xuICB9XG5cbiAgZnVuY3Rpb24gb25Eb2N1bWVudFByZXNzKGV2ZW50OiBNb3VzZUV2ZW50IHwgVG91Y2hFdmVudCk6IHZvaWQge1xuICAgIC8vIE1vdmVkIGZpbmdlciB0byBzY3JvbGwgaW5zdGVhZCBvZiBhbiBpbnRlbnRpb25hbCB0YXAgb3V0c2lkZVxuICAgIGlmIChjdXJyZW50SW5wdXQuaXNUb3VjaCkge1xuICAgICAgaWYgKGRpZFRvdWNoTW92ZSB8fCBldmVudC50eXBlID09PSAnbW91c2Vkb3duJykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgYWN0dWFsVGFyZ2V0ID1cbiAgICAgIChldmVudC5jb21wb3NlZFBhdGggJiYgZXZlbnQuY29tcG9zZWRQYXRoKClbMF0pIHx8IGV2ZW50LnRhcmdldDtcblxuICAgIC8vIENsaWNrZWQgb24gaW50ZXJhY3RpdmUgcG9wcGVyXG4gICAgaWYgKFxuICAgICAgaW5zdGFuY2UucHJvcHMuaW50ZXJhY3RpdmUgJiZcbiAgICAgIGFjdHVhbENvbnRhaW5zKHBvcHBlciwgYWN0dWFsVGFyZ2V0IGFzIEVsZW1lbnQpXG4gICAgKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gQ2xpY2tlZCBvbiB0aGUgZXZlbnQgbGlzdGVuZXJzIHRhcmdldFxuICAgIGlmIChcbiAgICAgIG5vcm1hbGl6ZVRvQXJyYXkoaW5zdGFuY2UucHJvcHMudHJpZ2dlclRhcmdldCB8fCByZWZlcmVuY2UpLnNvbWUoKGVsKSA9PlxuICAgICAgICBhY3R1YWxDb250YWlucyhlbCwgYWN0dWFsVGFyZ2V0IGFzIEVsZW1lbnQpXG4gICAgICApXG4gICAgKSB7XG4gICAgICBpZiAoY3VycmVudElucHV0LmlzVG91Y2gpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoXG4gICAgICAgIGluc3RhbmNlLnN0YXRlLmlzVmlzaWJsZSAmJlxuICAgICAgICBpbnN0YW5jZS5wcm9wcy50cmlnZ2VyLmluZGV4T2YoJ2NsaWNrJykgPj0gMFxuICAgICAgKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaW52b2tlSG9vaygnb25DbGlja091dHNpZGUnLCBbaW5zdGFuY2UsIGV2ZW50XSk7XG4gICAgfVxuXG4gICAgaWYgKGluc3RhbmNlLnByb3BzLmhpZGVPbkNsaWNrID09PSB0cnVlKSB7XG4gICAgICBpbnN0YW5jZS5jbGVhckRlbGF5VGltZW91dHMoKTtcbiAgICAgIGluc3RhbmNlLmhpZGUoKTtcblxuICAgICAgLy8gYG1vdXNlZG93bmAgZXZlbnQgaXMgZmlyZWQgcmlnaHQgYmVmb3JlIGBmb2N1c2AgaWYgcHJlc3NpbmcgdGhlXG4gICAgICAvLyBjdXJyZW50VGFyZ2V0LiBUaGlzIGxldHMgYSB0aXBweSB3aXRoIGBmb2N1c2AgdHJpZ2dlciBrbm93IHRoYXQgaXRcbiAgICAgIC8vIHNob3VsZCBub3Qgc2hvd1xuICAgICAgZGlkSGlkZUR1ZVRvRG9jdW1lbnRNb3VzZURvd24gPSB0cnVlO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGRpZEhpZGVEdWVUb0RvY3VtZW50TW91c2VEb3duID0gZmFsc2U7XG4gICAgICB9KTtcblxuICAgICAgLy8gVGhlIGxpc3RlbmVyIGdldHMgYWRkZWQgaW4gYHNjaGVkdWxlU2hvdygpYCwgYnV0IHRoaXMgbWF5IGJlIGhpZGluZyBpdFxuICAgICAgLy8gYmVmb3JlIGl0IHNob3dzLCBhbmQgaGlkZSgpJ3MgZWFybHkgYmFpbC1vdXQgYmVoYXZpb3IgY2FuIHByZXZlbnQgaXRcbiAgICAgIC8vIGZyb20gYmVpbmcgY2xlYW5lZCB1cFxuICAgICAgaWYgKCFpbnN0YW5jZS5zdGF0ZS5pc01vdW50ZWQpIHtcbiAgICAgICAgcmVtb3ZlRG9jdW1lbnRQcmVzcygpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIG9uVG91Y2hNb3ZlKCk6IHZvaWQge1xuICAgIGRpZFRvdWNoTW92ZSA9IHRydWU7XG4gIH1cblxuICBmdW5jdGlvbiBvblRvdWNoU3RhcnQoKTogdm9pZCB7XG4gICAgZGlkVG91Y2hNb3ZlID0gZmFsc2U7XG4gIH1cblxuICBmdW5jdGlvbiBhZGREb2N1bWVudFByZXNzKCk6IHZvaWQge1xuICAgIGNvbnN0IGRvYyA9IGdldERvY3VtZW50KCk7XG4gICAgZG9jLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIG9uRG9jdW1lbnRQcmVzcywgdHJ1ZSk7XG4gICAgZG9jLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgb25Eb2N1bWVudFByZXNzLCBUT1VDSF9PUFRJT05TKTtcbiAgICBkb2MuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIG9uVG91Y2hTdGFydCwgVE9VQ0hfT1BUSU9OUyk7XG4gICAgZG9jLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIG9uVG91Y2hNb3ZlLCBUT1VDSF9PUFRJT05TKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbW92ZURvY3VtZW50UHJlc3MoKTogdm9pZCB7XG4gICAgY29uc3QgZG9jID0gZ2V0RG9jdW1lbnQoKTtcbiAgICBkb2MucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgb25Eb2N1bWVudFByZXNzLCB0cnVlKTtcbiAgICBkb2MucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCBvbkRvY3VtZW50UHJlc3MsIFRPVUNIX09QVElPTlMpO1xuICAgIGRvYy5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0Jywgb25Ub3VjaFN0YXJ0LCBUT1VDSF9PUFRJT05TKTtcbiAgICBkb2MucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgb25Ub3VjaE1vdmUsIFRPVUNIX09QVElPTlMpO1xuICB9XG5cbiAgZnVuY3Rpb24gb25UcmFuc2l0aW9uZWRPdXQoZHVyYXRpb246IG51bWJlciwgY2FsbGJhY2s6ICgpID0+IHZvaWQpOiB2b2lkIHtcbiAgICBvblRyYW5zaXRpb25FbmQoZHVyYXRpb24sICgpID0+IHtcbiAgICAgIGlmIChcbiAgICAgICAgIWluc3RhbmNlLnN0YXRlLmlzVmlzaWJsZSAmJlxuICAgICAgICBwb3BwZXIucGFyZW50Tm9kZSAmJlxuICAgICAgICBwb3BwZXIucGFyZW50Tm9kZS5jb250YWlucyhwb3BwZXIpXG4gICAgICApIHtcbiAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uVHJhbnNpdGlvbmVkSW4oZHVyYXRpb246IG51bWJlciwgY2FsbGJhY2s6ICgpID0+IHZvaWQpOiB2b2lkIHtcbiAgICBvblRyYW5zaXRpb25FbmQoZHVyYXRpb24sIGNhbGxiYWNrKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uVHJhbnNpdGlvbkVuZChkdXJhdGlvbjogbnVtYmVyLCBjYWxsYmFjazogKCkgPT4gdm9pZCk6IHZvaWQge1xuICAgIGNvbnN0IGJveCA9IGdldERlZmF1bHRUZW1wbGF0ZUNoaWxkcmVuKCkuYm94O1xuXG4gICAgZnVuY3Rpb24gbGlzdGVuZXIoZXZlbnQ6IFRyYW5zaXRpb25FdmVudCk6IHZvaWQge1xuICAgICAgaWYgKGV2ZW50LnRhcmdldCA9PT0gYm94KSB7XG4gICAgICAgIHVwZGF0ZVRyYW5zaXRpb25FbmRMaXN0ZW5lcihib3gsICdyZW1vdmUnLCBsaXN0ZW5lcik7XG4gICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gTWFrZSBjYWxsYmFjayBzeW5jaHJvbm91cyBpZiBkdXJhdGlvbiBpcyAwXG4gICAgLy8gYHRyYW5zaXRpb25lbmRgIHdvbid0IGZpcmUgb3RoZXJ3aXNlXG4gICAgaWYgKGR1cmF0aW9uID09PSAwKSB7XG4gICAgICByZXR1cm4gY2FsbGJhY2soKTtcbiAgICB9XG5cbiAgICB1cGRhdGVUcmFuc2l0aW9uRW5kTGlzdGVuZXIoYm94LCAncmVtb3ZlJywgY3VycmVudFRyYW5zaXRpb25FbmRMaXN0ZW5lcik7XG4gICAgdXBkYXRlVHJhbnNpdGlvbkVuZExpc3RlbmVyKGJveCwgJ2FkZCcsIGxpc3RlbmVyKTtcblxuICAgIGN1cnJlbnRUcmFuc2l0aW9uRW5kTGlzdGVuZXIgPSBsaXN0ZW5lcjtcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uKFxuICAgIGV2ZW50VHlwZTogc3RyaW5nLFxuICAgIGhhbmRsZXI6IEV2ZW50TGlzdGVuZXIsXG4gICAgb3B0aW9uczogYm9vbGVhbiB8IFJlY29yZDxzdHJpbmcsIHVua25vd24+ID0gZmFsc2VcbiAgKTogdm9pZCB7XG4gICAgY29uc3Qgbm9kZXMgPSBub3JtYWxpemVUb0FycmF5KGluc3RhbmNlLnByb3BzLnRyaWdnZXJUYXJnZXQgfHwgcmVmZXJlbmNlKTtcbiAgICBub2Rlcy5mb3JFYWNoKChub2RlKSA9PiB7XG4gICAgICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBoYW5kbGVyLCBvcHRpb25zKTtcbiAgICAgIGxpc3RlbmVycy5wdXNoKHtub2RlLCBldmVudFR5cGUsIGhhbmRsZXIsIG9wdGlvbnN9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZExpc3RlbmVycygpOiB2b2lkIHtcbiAgICBpZiAoZ2V0SXNDdXN0b21Ub3VjaEJlaGF2aW9yKCkpIHtcbiAgICAgIG9uKCd0b3VjaHN0YXJ0Jywgb25UcmlnZ2VyLCB7cGFzc2l2ZTogdHJ1ZX0pO1xuICAgICAgb24oJ3RvdWNoZW5kJywgb25Nb3VzZUxlYXZlIGFzIEV2ZW50TGlzdGVuZXIsIHtwYXNzaXZlOiB0cnVlfSk7XG4gICAgfVxuXG4gICAgc3BsaXRCeVNwYWNlcyhpbnN0YW5jZS5wcm9wcy50cmlnZ2VyKS5mb3JFYWNoKChldmVudFR5cGUpID0+IHtcbiAgICAgIGlmIChldmVudFR5cGUgPT09ICdtYW51YWwnKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgb24oZXZlbnRUeXBlLCBvblRyaWdnZXIpO1xuXG4gICAgICBzd2l0Y2ggKGV2ZW50VHlwZSkge1xuICAgICAgICBjYXNlICdtb3VzZWVudGVyJzpcbiAgICAgICAgICBvbignbW91c2VsZWF2ZScsIG9uTW91c2VMZWF2ZSBhcyBFdmVudExpc3RlbmVyKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnZm9jdXMnOlxuICAgICAgICAgIG9uKGlzSUUxMSA/ICdmb2N1c291dCcgOiAnYmx1cicsIG9uQmx1ck9yRm9jdXNPdXQgYXMgRXZlbnRMaXN0ZW5lcik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2ZvY3VzaW4nOlxuICAgICAgICAgIG9uKCdmb2N1c291dCcsIG9uQmx1ck9yRm9jdXNPdXQgYXMgRXZlbnRMaXN0ZW5lcik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiByZW1vdmVMaXN0ZW5lcnMoKTogdm9pZCB7XG4gICAgbGlzdGVuZXJzLmZvckVhY2goKHtub2RlLCBldmVudFR5cGUsIGhhbmRsZXIsIG9wdGlvbnN9OiBMaXN0ZW5lck9iamVjdCkgPT4ge1xuICAgICAgbm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgaGFuZGxlciwgb3B0aW9ucyk7XG4gICAgfSk7XG4gICAgbGlzdGVuZXJzID0gW107XG4gIH1cblxuICBmdW5jdGlvbiBvblRyaWdnZXIoZXZlbnQ6IEV2ZW50KTogdm9pZCB7XG4gICAgbGV0IHNob3VsZFNjaGVkdWxlQ2xpY2tIaWRlID0gZmFsc2U7XG5cbiAgICBpZiAoXG4gICAgICAhaW5zdGFuY2Uuc3RhdGUuaXNFbmFibGVkIHx8XG4gICAgICBpc0V2ZW50TGlzdGVuZXJTdG9wcGVkKGV2ZW50KSB8fFxuICAgICAgZGlkSGlkZUR1ZVRvRG9jdW1lbnRNb3VzZURvd25cbiAgICApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCB3YXNGb2N1c2VkID0gbGFzdFRyaWdnZXJFdmVudD8udHlwZSA9PT0gJ2ZvY3VzJztcblxuICAgIGxhc3RUcmlnZ2VyRXZlbnQgPSBldmVudDtcbiAgICBjdXJyZW50VGFyZ2V0ID0gZXZlbnQuY3VycmVudFRhcmdldCBhcyBFbGVtZW50O1xuXG4gICAgaGFuZGxlQXJpYUV4cGFuZGVkQXR0cmlidXRlKCk7XG5cbiAgICBpZiAoIWluc3RhbmNlLnN0YXRlLmlzVmlzaWJsZSAmJiBpc01vdXNlRXZlbnQoZXZlbnQpKSB7XG4gICAgICAvLyBJZiBzY3JvbGxpbmcsIGBtb3VzZWVudGVyYCBldmVudHMgY2FuIGJlIGZpcmVkIGlmIHRoZSBjdXJzb3IgbGFuZHNcbiAgICAgIC8vIG92ZXIgYSBuZXcgdGFyZ2V0LCBidXQgYG1vdXNlbW92ZWAgZXZlbnRzIGRvbid0IGdldCBmaXJlZC4gVGhpc1xuICAgICAgLy8gY2F1c2VzIGludGVyYWN0aXZlIHRvb2x0aXBzIHRvIGdldCBzdHVjayBvcGVuIHVudGlsIHRoZSBjdXJzb3IgaXNcbiAgICAgIC8vIG1vdmVkXG4gICAgICBtb3VzZU1vdmVMaXN0ZW5lcnMuZm9yRWFjaCgobGlzdGVuZXIpID0+IGxpc3RlbmVyKGV2ZW50KSk7XG4gICAgfVxuXG4gICAgLy8gVG9nZ2xlIHNob3cvaGlkZSB3aGVuIGNsaWNraW5nIGNsaWNrLXRyaWdnZXJlZCB0b29sdGlwc1xuICAgIGlmIChcbiAgICAgIGV2ZW50LnR5cGUgPT09ICdjbGljaycgJiZcbiAgICAgIChpbnN0YW5jZS5wcm9wcy50cmlnZ2VyLmluZGV4T2YoJ21vdXNlZW50ZXInKSA8IDAgfHxcbiAgICAgICAgaXNWaXNpYmxlRnJvbUNsaWNrKSAmJlxuICAgICAgaW5zdGFuY2UucHJvcHMuaGlkZU9uQ2xpY2sgIT09IGZhbHNlICYmXG4gICAgICBpbnN0YW5jZS5zdGF0ZS5pc1Zpc2libGVcbiAgICApIHtcbiAgICAgIHNob3VsZFNjaGVkdWxlQ2xpY2tIaWRlID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2NoZWR1bGVTaG93KGV2ZW50KTtcbiAgICB9XG5cbiAgICBpZiAoZXZlbnQudHlwZSA9PT0gJ2NsaWNrJykge1xuICAgICAgaXNWaXNpYmxlRnJvbUNsaWNrID0gIXNob3VsZFNjaGVkdWxlQ2xpY2tIaWRlO1xuICAgIH1cblxuICAgIGlmIChzaG91bGRTY2hlZHVsZUNsaWNrSGlkZSAmJiAhd2FzRm9jdXNlZCkge1xuICAgICAgc2NoZWR1bGVIaWRlKGV2ZW50KTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBvbk1vdXNlTW92ZShldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldCBhcyBOb2RlO1xuICAgIGNvbnN0IGlzQ3Vyc29yT3ZlclJlZmVyZW5jZU9yUG9wcGVyID1cbiAgICAgIGdldEN1cnJlbnRUYXJnZXQoKS5jb250YWlucyh0YXJnZXQpIHx8IHBvcHBlci5jb250YWlucyh0YXJnZXQpO1xuXG4gICAgaWYgKGV2ZW50LnR5cGUgPT09ICdtb3VzZW1vdmUnICYmIGlzQ3Vyc29yT3ZlclJlZmVyZW5jZU9yUG9wcGVyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgcG9wcGVyVHJlZURhdGEgPSBnZXROZXN0ZWRQb3BwZXJUcmVlKClcbiAgICAgIC5jb25jYXQocG9wcGVyKVxuICAgICAgLm1hcCgocG9wcGVyKSA9PiB7XG4gICAgICAgIGNvbnN0IGluc3RhbmNlID0gcG9wcGVyLl90aXBweSE7XG4gICAgICAgIGNvbnN0IHN0YXRlID0gaW5zdGFuY2UucG9wcGVySW5zdGFuY2U/LnN0YXRlO1xuXG4gICAgICAgIGlmIChzdGF0ZSkge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBwb3BwZXJSZWN0OiBwb3BwZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG4gICAgICAgICAgICBwb3BwZXJTdGF0ZTogc3RhdGUsXG4gICAgICAgICAgICBwcm9wcyxcbiAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9KVxuICAgICAgLmZpbHRlcihCb29sZWFuKSBhcyBQb3BwZXJUcmVlRGF0YVtdO1xuXG4gICAgaWYgKGlzQ3Vyc29yT3V0c2lkZUludGVyYWN0aXZlQm9yZGVyKHBvcHBlclRyZWVEYXRhLCBldmVudCkpIHtcbiAgICAgIGNsZWFudXBJbnRlcmFjdGl2ZU1vdXNlTGlzdGVuZXJzKCk7XG4gICAgICBzY2hlZHVsZUhpZGUoZXZlbnQpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIG9uTW91c2VMZWF2ZShldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIGNvbnN0IHNob3VsZEJhaWwgPVxuICAgICAgaXNFdmVudExpc3RlbmVyU3RvcHBlZChldmVudCkgfHxcbiAgICAgIChpbnN0YW5jZS5wcm9wcy50cmlnZ2VyLmluZGV4T2YoJ2NsaWNrJykgPj0gMCAmJiBpc1Zpc2libGVGcm9tQ2xpY2spO1xuXG4gICAgaWYgKHNob3VsZEJhaWwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoaW5zdGFuY2UucHJvcHMuaW50ZXJhY3RpdmUpIHtcbiAgICAgIGluc3RhbmNlLmhpZGVXaXRoSW50ZXJhY3Rpdml0eShldmVudCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgc2NoZWR1bGVIaWRlKGV2ZW50KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uQmx1ck9yRm9jdXNPdXQoZXZlbnQ6IEZvY3VzRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAoXG4gICAgICBpbnN0YW5jZS5wcm9wcy50cmlnZ2VyLmluZGV4T2YoJ2ZvY3VzaW4nKSA8IDAgJiZcbiAgICAgIGV2ZW50LnRhcmdldCAhPT0gZ2V0Q3VycmVudFRhcmdldCgpXG4gICAgKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gSWYgZm9jdXMgd2FzIG1vdmVkIHRvIHdpdGhpbiB0aGUgcG9wcGVyXG4gICAgaWYgKFxuICAgICAgaW5zdGFuY2UucHJvcHMuaW50ZXJhY3RpdmUgJiZcbiAgICAgIGV2ZW50LnJlbGF0ZWRUYXJnZXQgJiZcbiAgICAgIHBvcHBlci5jb250YWlucyhldmVudC5yZWxhdGVkVGFyZ2V0IGFzIEVsZW1lbnQpXG4gICAgKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgc2NoZWR1bGVIaWRlKGV2ZW50KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzRXZlbnRMaXN0ZW5lclN0b3BwZWQoZXZlbnQ6IEV2ZW50KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGN1cnJlbnRJbnB1dC5pc1RvdWNoXG4gICAgICA/IGdldElzQ3VzdG9tVG91Y2hCZWhhdmlvcigpICE9PSBldmVudC50eXBlLmluZGV4T2YoJ3RvdWNoJykgPj0gMFxuICAgICAgOiBmYWxzZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVBvcHBlckluc3RhbmNlKCk6IHZvaWQge1xuICAgIGRlc3Ryb3lQb3BwZXJJbnN0YW5jZSgpO1xuXG4gICAgY29uc3Qge1xuICAgICAgcG9wcGVyT3B0aW9ucyxcbiAgICAgIHBsYWNlbWVudCxcbiAgICAgIG9mZnNldCxcbiAgICAgIGdldFJlZmVyZW5jZUNsaWVudFJlY3QsXG4gICAgICBtb3ZlVHJhbnNpdGlvbixcbiAgICB9ID0gaW5zdGFuY2UucHJvcHM7XG5cbiAgICBjb25zdCBhcnJvdyA9IGdldElzRGVmYXVsdFJlbmRlckZuKCkgPyBnZXRDaGlsZHJlbihwb3BwZXIpLmFycm93IDogbnVsbDtcblxuICAgIGNvbnN0IGNvbXB1dGVkUmVmZXJlbmNlID0gZ2V0UmVmZXJlbmNlQ2xpZW50UmVjdFxuICAgICAgPyB7XG4gICAgICAgICAgZ2V0Qm91bmRpbmdDbGllbnRSZWN0OiBnZXRSZWZlcmVuY2VDbGllbnRSZWN0LFxuICAgICAgICAgIGNvbnRleHRFbGVtZW50OlxuICAgICAgICAgICAgZ2V0UmVmZXJlbmNlQ2xpZW50UmVjdC5jb250ZXh0RWxlbWVudCB8fCBnZXRDdXJyZW50VGFyZ2V0KCksXG4gICAgICAgIH1cbiAgICAgIDogcmVmZXJlbmNlO1xuXG4gICAgY29uc3QgdGlwcHlNb2RpZmllcjogTW9kaWZpZXI8JyQkdGlwcHknLCBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPj4gPSB7XG4gICAgICBuYW1lOiAnJCR0aXBweScsXG4gICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgcGhhc2U6ICdiZWZvcmVXcml0ZScsXG4gICAgICByZXF1aXJlczogWydjb21wdXRlU3R5bGVzJ10sXG4gICAgICBmbih7c3RhdGV9KSB7XG4gICAgICAgIGlmIChnZXRJc0RlZmF1bHRSZW5kZXJGbigpKSB7XG4gICAgICAgICAgY29uc3Qge2JveH0gPSBnZXREZWZhdWx0VGVtcGxhdGVDaGlsZHJlbigpO1xuXG4gICAgICAgICAgWydwbGFjZW1lbnQnLCAncmVmZXJlbmNlLWhpZGRlbicsICdlc2NhcGVkJ10uZm9yRWFjaCgoYXR0cikgPT4ge1xuICAgICAgICAgICAgaWYgKGF0dHIgPT09ICdwbGFjZW1lbnQnKSB7XG4gICAgICAgICAgICAgIGJveC5zZXRBdHRyaWJ1dGUoJ2RhdGEtcGxhY2VtZW50Jywgc3RhdGUucGxhY2VtZW50KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGlmIChzdGF0ZS5hdHRyaWJ1dGVzLnBvcHBlcltgZGF0YS1wb3BwZXItJHthdHRyfWBdKSB7XG4gICAgICAgICAgICAgICAgYm94LnNldEF0dHJpYnV0ZShgZGF0YS0ke2F0dHJ9YCwgJycpO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGJveC5yZW1vdmVBdHRyaWJ1dGUoYGRhdGEtJHthdHRyfWApO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICBzdGF0ZS5hdHRyaWJ1dGVzLnBvcHBlciA9IHt9O1xuICAgICAgICB9XG4gICAgICB9LFxuICAgIH07XG5cbiAgICB0eXBlIFRpcHB5TW9kaWZpZXIgPSBNb2RpZmllcjwnJCR0aXBweScsIFJlY29yZDxzdHJpbmcsIHVua25vd24+PjtcbiAgICB0eXBlIEV4dGVuZGVkTW9kaWZpZXJzID0gU3RyaWN0TW9kaWZpZXJzIHwgUGFydGlhbDxUaXBweU1vZGlmaWVyPjtcblxuICAgIGNvbnN0IG1vZGlmaWVyczogQXJyYXk8RXh0ZW5kZWRNb2RpZmllcnM+ID0gW1xuICAgICAge1xuICAgICAgICBuYW1lOiAnb2Zmc2V0JyxcbiAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgIG9mZnNldCxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdwcmV2ZW50T3ZlcmZsb3cnLFxuICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgcGFkZGluZzoge1xuICAgICAgICAgICAgdG9wOiAyLFxuICAgICAgICAgICAgYm90dG9tOiAyLFxuICAgICAgICAgICAgbGVmdDogNSxcbiAgICAgICAgICAgIHJpZ2h0OiA1LFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnZmxpcCcsXG4gICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICBwYWRkaW5nOiA1LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ2NvbXB1dGVTdHlsZXMnLFxuICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgYWRhcHRpdmU6ICFtb3ZlVHJhbnNpdGlvbixcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICB0aXBweU1vZGlmaWVyLFxuICAgIF07XG5cbiAgICBpZiAoZ2V0SXNEZWZhdWx0UmVuZGVyRm4oKSAmJiBhcnJvdykge1xuICAgICAgbW9kaWZpZXJzLnB1c2goe1xuICAgICAgICBuYW1lOiAnYXJyb3cnLFxuICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgZWxlbWVudDogYXJyb3csXG4gICAgICAgICAgcGFkZGluZzogMyxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIG1vZGlmaWVycy5wdXNoKC4uLihwb3BwZXJPcHRpb25zPy5tb2RpZmllcnMgfHwgW10pKTtcblxuICAgIGluc3RhbmNlLnBvcHBlckluc3RhbmNlID0gY3JlYXRlUG9wcGVyPEV4dGVuZGVkTW9kaWZpZXJzPihcbiAgICAgIGNvbXB1dGVkUmVmZXJlbmNlLFxuICAgICAgcG9wcGVyLFxuICAgICAge1xuICAgICAgICAuLi5wb3BwZXJPcHRpb25zLFxuICAgICAgICBwbGFjZW1lbnQsXG4gICAgICAgIG9uRmlyc3RVcGRhdGUsXG4gICAgICAgIG1vZGlmaWVycyxcbiAgICAgIH1cbiAgICApO1xuICB9XG5cbiAgZnVuY3Rpb24gZGVzdHJveVBvcHBlckluc3RhbmNlKCk6IHZvaWQge1xuICAgIGlmIChpbnN0YW5jZS5wb3BwZXJJbnN0YW5jZSkge1xuICAgICAgaW5zdGFuY2UucG9wcGVySW5zdGFuY2UuZGVzdHJveSgpO1xuICAgICAgaW5zdGFuY2UucG9wcGVySW5zdGFuY2UgPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIG1vdW50KCk6IHZvaWQge1xuICAgIGNvbnN0IHthcHBlbmRUb30gPSBpbnN0YW5jZS5wcm9wcztcblxuICAgIGxldCBwYXJlbnROb2RlOiBhbnk7XG5cbiAgICAvLyBCeSBkZWZhdWx0LCB3ZSdsbCBhcHBlbmQgdGhlIHBvcHBlciB0byB0aGUgdHJpZ2dlclRhcmdldHMncyBwYXJlbnROb2RlIHNvXG4gICAgLy8gaXQncyBkaXJlY3RseSBhZnRlciB0aGUgcmVmZXJlbmNlIGVsZW1lbnQgc28gdGhlIGVsZW1lbnRzIGluc2lkZSB0aGVcbiAgICAvLyB0aXBweSBjYW4gYmUgdGFiYmVkIHRvXG4gICAgLy8gSWYgdGhlcmUgYXJlIGNsaXBwaW5nIGlzc3VlcywgdGhlIHVzZXIgY2FuIHNwZWNpZnkgYSBkaWZmZXJlbnQgYXBwZW5kVG9cbiAgICAvLyBhbmQgZW5zdXJlIGZvY3VzIG1hbmFnZW1lbnQgaXMgaGFuZGxlZCBjb3JyZWN0bHkgbWFudWFsbHlcbiAgICBjb25zdCBub2RlID0gZ2V0Q3VycmVudFRhcmdldCgpO1xuXG4gICAgaWYgKFxuICAgICAgKGluc3RhbmNlLnByb3BzLmludGVyYWN0aXZlICYmIGFwcGVuZFRvID09PSBUSVBQWV9ERUZBVUxUX0FQUEVORF9UTykgfHxcbiAgICAgIGFwcGVuZFRvID09PSAncGFyZW50J1xuICAgICkge1xuICAgICAgcGFyZW50Tm9kZSA9IG5vZGUucGFyZW50Tm9kZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcGFyZW50Tm9kZSA9IGludm9rZVdpdGhBcmdzT3JSZXR1cm4oYXBwZW5kVG8sIFtub2RlXSk7XG4gICAgfVxuXG4gICAgLy8gVGhlIHBvcHBlciBlbGVtZW50IG5lZWRzIHRvIGV4aXN0IG9uIHRoZSBET00gYmVmb3JlIGl0cyBwb3NpdGlvbiBjYW4gYmVcbiAgICAvLyB1cGRhdGVkIGFzIFBvcHBlciBuZWVkcyB0byByZWFkIGl0cyBkaW1lbnNpb25zXG4gICAgaWYgKCFwYXJlbnROb2RlLmNvbnRhaW5zKHBvcHBlcikpIHtcbiAgICAgIHBhcmVudE5vZGUuYXBwZW5kQ2hpbGQocG9wcGVyKTtcbiAgICB9XG5cbiAgICBpbnN0YW5jZS5zdGF0ZS5pc01vdW50ZWQgPSB0cnVlO1xuXG4gICAgY3JlYXRlUG9wcGVySW5zdGFuY2UoKTtcblxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gICAgaWYgKF9fREVWX18pIHtcbiAgICAgIC8vIEFjY2Vzc2liaWxpdHkgY2hlY2tcbiAgICAgIHdhcm5XaGVuKFxuICAgICAgICBpbnN0YW5jZS5wcm9wcy5pbnRlcmFjdGl2ZSAmJlxuICAgICAgICAgIGFwcGVuZFRvID09PSBkZWZhdWx0UHJvcHMuYXBwZW5kVG8gJiZcbiAgICAgICAgICBub2RlLm5leHRFbGVtZW50U2libGluZyAhPT0gcG9wcGVyLFxuICAgICAgICBbXG4gICAgICAgICAgJ0ludGVyYWN0aXZlIHRpcHB5IGVsZW1lbnQgbWF5IG5vdCBiZSBhY2Nlc3NpYmxlIHZpYSBrZXlib2FyZCcsXG4gICAgICAgICAgJ25hdmlnYXRpb24gYmVjYXVzZSBpdCBpcyBub3QgZGlyZWN0bHkgYWZ0ZXIgdGhlIHJlZmVyZW5jZSBlbGVtZW50JyxcbiAgICAgICAgICAnaW4gdGhlIERPTSBzb3VyY2Ugb3JkZXIuJyxcbiAgICAgICAgICAnXFxuXFxuJyxcbiAgICAgICAgICAnVXNpbmcgYSB3cmFwcGVyIDxkaXY+IG9yIDxzcGFuPiB0YWcgYXJvdW5kIHRoZSByZWZlcmVuY2UgZWxlbWVudCcsXG4gICAgICAgICAgJ3NvbHZlcyB0aGlzIGJ5IGNyZWF0aW5nIGEgbmV3IHBhcmVudE5vZGUgY29udGV4dC4nLFxuICAgICAgICAgICdcXG5cXG4nLFxuICAgICAgICAgICdTcGVjaWZ5aW5nIGBhcHBlbmRUbzogZG9jdW1lbnQuYm9keWAgc2lsZW5jZXMgdGhpcyB3YXJuaW5nLCBidXQgaXQnLFxuICAgICAgICAgICdhc3N1bWVzIHlvdSBhcmUgdXNpbmcgYSBmb2N1cyBtYW5hZ2VtZW50IHNvbHV0aW9uIHRvIGhhbmRsZScsXG4gICAgICAgICAgJ2tleWJvYXJkIG5hdmlnYXRpb24uJyxcbiAgICAgICAgICAnXFxuXFxuJyxcbiAgICAgICAgICAnU2VlOiBodHRwczovL2F0b21pa3MuZ2l0aHViLmlvL3RpcHB5anMvdjYvYWNjZXNzaWJpbGl0eS8jaW50ZXJhY3Rpdml0eScsXG4gICAgICAgIF0uam9pbignICcpXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGdldE5lc3RlZFBvcHBlclRyZWUoKTogUG9wcGVyRWxlbWVudFtdIHtcbiAgICByZXR1cm4gYXJyYXlGcm9tKFxuICAgICAgcG9wcGVyLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLV9fTkFNRVNQQUNFX1BSRUZJWF9fLXJvb3RdJylcbiAgICApO1xuICB9XG5cbiAgZnVuY3Rpb24gc2NoZWR1bGVTaG93KGV2ZW50PzogRXZlbnQpOiB2b2lkIHtcbiAgICBpbnN0YW5jZS5jbGVhckRlbGF5VGltZW91dHMoKTtcblxuICAgIGlmIChldmVudCkge1xuICAgICAgaW52b2tlSG9vaygnb25UcmlnZ2VyJywgW2luc3RhbmNlLCBldmVudF0pO1xuICAgIH1cblxuICAgIGFkZERvY3VtZW50UHJlc3MoKTtcblxuICAgIGxldCBkZWxheSA9IGdldERlbGF5KHRydWUpO1xuICAgIGNvbnN0IFt0b3VjaFZhbHVlLCB0b3VjaERlbGF5XSA9IGdldE5vcm1hbGl6ZWRUb3VjaFNldHRpbmdzKCk7XG5cbiAgICBpZiAoY3VycmVudElucHV0LmlzVG91Y2ggJiYgdG91Y2hWYWx1ZSA9PT0gJ2hvbGQnICYmIHRvdWNoRGVsYXkpIHtcbiAgICAgIGRlbGF5ID0gdG91Y2hEZWxheTtcbiAgICB9XG5cbiAgICBpZiAoZGVsYXkpIHtcbiAgICAgIHNob3dUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGluc3RhbmNlLnNob3coKTtcbiAgICAgIH0sIGRlbGF5KTtcbiAgICB9IGVsc2Uge1xuICAgICAgaW5zdGFuY2Uuc2hvdygpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHNjaGVkdWxlSGlkZShldmVudDogRXZlbnQpOiB2b2lkIHtcbiAgICBpbnN0YW5jZS5jbGVhckRlbGF5VGltZW91dHMoKTtcblxuICAgIGludm9rZUhvb2soJ29uVW50cmlnZ2VyJywgW2luc3RhbmNlLCBldmVudF0pO1xuXG4gICAgaWYgKCFpbnN0YW5jZS5zdGF0ZS5pc1Zpc2libGUpIHtcbiAgICAgIHJlbW92ZURvY3VtZW50UHJlc3MoKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIEZvciBpbnRlcmFjdGl2ZSB0aXBwaWVzLCBzY2hlZHVsZUhpZGUgaXMgYWRkZWQgdG8gYSBkb2N1bWVudC5ib2R5IGhhbmRsZXJcbiAgICAvLyBmcm9tIG9uTW91c2VMZWF2ZSBzbyBtdXN0IGludGVyY2VwdCBzY2hlZHVsZWQgaGlkZXMgZnJvbSBtb3VzZW1vdmUvbGVhdmVcbiAgICAvLyBldmVudHMgd2hlbiB0cmlnZ2VyIGNvbnRhaW5zIG1vdXNlZW50ZXIgYW5kIGNsaWNrLCBhbmQgdGhlIHRpcCBpc1xuICAgIC8vIGN1cnJlbnRseSBzaG93biBhcyBhIHJlc3VsdCBvZiBhIGNsaWNrLlxuICAgIGlmIChcbiAgICAgIGluc3RhbmNlLnByb3BzLnRyaWdnZXIuaW5kZXhPZignbW91c2VlbnRlcicpID49IDAgJiZcbiAgICAgIGluc3RhbmNlLnByb3BzLnRyaWdnZXIuaW5kZXhPZignY2xpY2snKSA+PSAwICYmXG4gICAgICBbJ21vdXNlbGVhdmUnLCAnbW91c2Vtb3ZlJ10uaW5kZXhPZihldmVudC50eXBlKSA+PSAwICYmXG4gICAgICBpc1Zpc2libGVGcm9tQ2xpY2tcbiAgICApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBkZWxheSA9IGdldERlbGF5KGZhbHNlKTtcblxuICAgIGlmIChkZWxheSkge1xuICAgICAgaGlkZVRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgaWYgKGluc3RhbmNlLnN0YXRlLmlzVmlzaWJsZSkge1xuICAgICAgICAgIGluc3RhbmNlLmhpZGUoKTtcbiAgICAgICAgfVxuICAgICAgfSwgZGVsYXkpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBGaXhlcyBhIGB0cmFuc2l0aW9uZW5kYCBwcm9ibGVtIHdoZW4gaXQgZmlyZXMgMSBmcmFtZSB0b29cbiAgICAgIC8vIGxhdGUgc29tZXRpbWVzLCB3ZSBkb24ndCB3YW50IGhpZGUoKSB0byBiZSBjYWxsZWQuXG4gICAgICBzY2hlZHVsZUhpZGVBbmltYXRpb25GcmFtZSA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgIGluc3RhbmNlLmhpZGUoKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAvLyDwn5SRIFB1YmxpYyBtZXRob2RzXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICBmdW5jdGlvbiBlbmFibGUoKTogdm9pZCB7XG4gICAgaW5zdGFuY2Uuc3RhdGUuaXNFbmFibGVkID0gdHJ1ZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRpc2FibGUoKTogdm9pZCB7XG4gICAgLy8gRGlzYWJsaW5nIHRoZSBpbnN0YW5jZSBzaG91bGQgYWxzbyBoaWRlIGl0XG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2F0b21pa3MvdGlwcHkuanMtcmVhY3QvaXNzdWVzLzEwNlxuICAgIGluc3RhbmNlLmhpZGUoKTtcbiAgICBpbnN0YW5jZS5zdGF0ZS5pc0VuYWJsZWQgPSBmYWxzZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNsZWFyRGVsYXlUaW1lb3V0cygpOiB2b2lkIHtcbiAgICBjbGVhclRpbWVvdXQoc2hvd1RpbWVvdXQpO1xuICAgIGNsZWFyVGltZW91dChoaWRlVGltZW91dCk7XG4gICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUoc2NoZWR1bGVIaWRlQW5pbWF0aW9uRnJhbWUpO1xuICB9XG5cbiAgZnVuY3Rpb24gc2V0UHJvcHMocGFydGlhbFByb3BzOiBQYXJ0aWFsPFByb3BzPik6IHZvaWQge1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gICAgaWYgKF9fREVWX18pIHtcbiAgICAgIHdhcm5XaGVuKGluc3RhbmNlLnN0YXRlLmlzRGVzdHJveWVkLCBjcmVhdGVNZW1vcnlMZWFrV2FybmluZygnc2V0UHJvcHMnKSk7XG4gICAgfVxuXG4gICAgaWYgKGluc3RhbmNlLnN0YXRlLmlzRGVzdHJveWVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaW52b2tlSG9vaygnb25CZWZvcmVVcGRhdGUnLCBbaW5zdGFuY2UsIHBhcnRpYWxQcm9wc10pO1xuXG4gICAgcmVtb3ZlTGlzdGVuZXJzKCk7XG5cbiAgICBjb25zdCBwcmV2UHJvcHMgPSBpbnN0YW5jZS5wcm9wcztcbiAgICBjb25zdCBuZXh0UHJvcHMgPSBldmFsdWF0ZVByb3BzKHJlZmVyZW5jZSwge1xuICAgICAgLi4ucHJldlByb3BzLFxuICAgICAgLi4ucmVtb3ZlVW5kZWZpbmVkUHJvcHMocGFydGlhbFByb3BzKSxcbiAgICAgIGlnbm9yZUF0dHJpYnV0ZXM6IHRydWUsXG4gICAgfSk7XG5cbiAgICBpbnN0YW5jZS5wcm9wcyA9IG5leHRQcm9wcztcblxuICAgIGFkZExpc3RlbmVycygpO1xuXG4gICAgaWYgKHByZXZQcm9wcy5pbnRlcmFjdGl2ZURlYm91bmNlICE9PSBuZXh0UHJvcHMuaW50ZXJhY3RpdmVEZWJvdW5jZSkge1xuICAgICAgY2xlYW51cEludGVyYWN0aXZlTW91c2VMaXN0ZW5lcnMoKTtcbiAgICAgIGRlYm91bmNlZE9uTW91c2VNb3ZlID0gZGVib3VuY2UoXG4gICAgICAgIG9uTW91c2VNb3ZlLFxuICAgICAgICBuZXh0UHJvcHMuaW50ZXJhY3RpdmVEZWJvdW5jZVxuICAgICAgKTtcbiAgICB9XG5cbiAgICAvLyBFbnN1cmUgc3RhbGUgYXJpYS1leHBhbmRlZCBhdHRyaWJ1dGVzIGFyZSByZW1vdmVkXG4gICAgaWYgKHByZXZQcm9wcy50cmlnZ2VyVGFyZ2V0ICYmICFuZXh0UHJvcHMudHJpZ2dlclRhcmdldCkge1xuICAgICAgbm9ybWFsaXplVG9BcnJheShwcmV2UHJvcHMudHJpZ2dlclRhcmdldCkuZm9yRWFjaCgobm9kZSkgPT4ge1xuICAgICAgICBub2RlLnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChuZXh0UHJvcHMudHJpZ2dlclRhcmdldCkge1xuICAgICAgcmVmZXJlbmNlLnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcpO1xuICAgIH1cblxuICAgIGhhbmRsZUFyaWFFeHBhbmRlZEF0dHJpYnV0ZSgpO1xuICAgIGhhbmRsZVN0eWxlcygpO1xuXG4gICAgaWYgKG9uVXBkYXRlKSB7XG4gICAgICBvblVwZGF0ZShwcmV2UHJvcHMsIG5leHRQcm9wcyk7XG4gICAgfVxuXG4gICAgaWYgKGluc3RhbmNlLnBvcHBlckluc3RhbmNlKSB7XG4gICAgICBjcmVhdGVQb3BwZXJJbnN0YW5jZSgpO1xuXG4gICAgICAvLyBGaXhlcyBhbiBpc3N1ZSB3aXRoIG5lc3RlZCB0aXBwaWVzIGlmIHRoZXkgYXJlIGFsbCBnZXR0aW5nIHJlLXJlbmRlcmVkLFxuICAgICAgLy8gYW5kIHRoZSBuZXN0ZWQgb25lcyBnZXQgcmUtcmVuZGVyZWQgZmlyc3QuXG4gICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vYXRvbWlrcy90aXBweWpzLXJlYWN0L2lzc3Vlcy8xNzdcbiAgICAgIC8vIFRPRE86IGZpbmQgYSBjbGVhbmVyIC8gbW9yZSBlZmZpY2llbnQgc29sdXRpb24oISlcbiAgICAgIGdldE5lc3RlZFBvcHBlclRyZWUoKS5mb3JFYWNoKChuZXN0ZWRQb3BwZXIpID0+IHtcbiAgICAgICAgLy8gUmVhY3QgKGFuZCBvdGhlciBVSSBsaWJzIGxpa2VseSkgcmVxdWlyZXMgYSByQUYgd3JhcHBlciBhcyBpdCBmbHVzaGVzXG4gICAgICAgIC8vIGl0cyB3b3JrIGluIG9uZVxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUobmVzdGVkUG9wcGVyLl90aXBweSEucG9wcGVySW5zdGFuY2UhLmZvcmNlVXBkYXRlKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGludm9rZUhvb2soJ29uQWZ0ZXJVcGRhdGUnLCBbaW5zdGFuY2UsIHBhcnRpYWxQcm9wc10pO1xuICB9XG5cbiAgZnVuY3Rpb24gc2V0Q29udGVudChjb250ZW50OiBDb250ZW50KTogdm9pZCB7XG4gICAgaW5zdGFuY2Uuc2V0UHJvcHMoe2NvbnRlbnR9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNob3coKTogdm9pZCB7XG4gICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgICBpZiAoX19ERVZfXykge1xuICAgICAgd2FybldoZW4oaW5zdGFuY2Uuc3RhdGUuaXNEZXN0cm95ZWQsIGNyZWF0ZU1lbW9yeUxlYWtXYXJuaW5nKCdzaG93JykpO1xuICAgIH1cblxuICAgIC8vIEVhcmx5IGJhaWwtb3V0XG4gICAgY29uc3QgaXNBbHJlYWR5VmlzaWJsZSA9IGluc3RhbmNlLnN0YXRlLmlzVmlzaWJsZTtcbiAgICBjb25zdCBpc0Rlc3Ryb3llZCA9IGluc3RhbmNlLnN0YXRlLmlzRGVzdHJveWVkO1xuICAgIGNvbnN0IGlzRGlzYWJsZWQgPSAhaW5zdGFuY2Uuc3RhdGUuaXNFbmFibGVkO1xuICAgIGNvbnN0IGlzVG91Y2hBbmRUb3VjaERpc2FibGVkID1cbiAgICAgIGN1cnJlbnRJbnB1dC5pc1RvdWNoICYmICFpbnN0YW5jZS5wcm9wcy50b3VjaDtcbiAgICBjb25zdCBkdXJhdGlvbiA9IGdldFZhbHVlQXRJbmRleE9yUmV0dXJuKFxuICAgICAgaW5zdGFuY2UucHJvcHMuZHVyYXRpb24sXG4gICAgICAwLFxuICAgICAgZGVmYXVsdFByb3BzLmR1cmF0aW9uXG4gICAgKTtcblxuICAgIGlmIChcbiAgICAgIGlzQWxyZWFkeVZpc2libGUgfHxcbiAgICAgIGlzRGVzdHJveWVkIHx8XG4gICAgICBpc0Rpc2FibGVkIHx8XG4gICAgICBpc1RvdWNoQW5kVG91Y2hEaXNhYmxlZFxuICAgICkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIE5vcm1hbGl6ZSBgZGlzYWJsZWRgIGJlaGF2aW9yIGFjcm9zcyBicm93c2Vycy5cbiAgICAvLyBGaXJlZm94IGFsbG93cyBldmVudHMgb24gZGlzYWJsZWQgZWxlbWVudHMsIGJ1dCBDaHJvbWUgZG9lc24ndC5cbiAgICAvLyBVc2luZyBhIHdyYXBwZXIgZWxlbWVudCAoaS5lLiA8c3Bhbj4pIGlzIHJlY29tbWVuZGVkLlxuICAgIGlmIChnZXRDdXJyZW50VGFyZ2V0KCkuaGFzQXR0cmlidXRlKCdkaXNhYmxlZCcpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaW52b2tlSG9vaygnb25TaG93JywgW2luc3RhbmNlXSwgZmFsc2UpO1xuICAgIGlmIChpbnN0YW5jZS5wcm9wcy5vblNob3coaW5zdGFuY2UpID09PSBmYWxzZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGluc3RhbmNlLnN0YXRlLmlzVmlzaWJsZSA9IHRydWU7XG5cbiAgICBpZiAoZ2V0SXNEZWZhdWx0UmVuZGVyRm4oKSkge1xuICAgICAgcG9wcGVyLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XG4gICAgfVxuXG4gICAgaGFuZGxlU3R5bGVzKCk7XG4gICAgYWRkRG9jdW1lbnRQcmVzcygpO1xuXG4gICAgaWYgKCFpbnN0YW5jZS5zdGF0ZS5pc01vdW50ZWQpIHtcbiAgICAgIHBvcHBlci5zdHlsZS50cmFuc2l0aW9uID0gJ25vbmUnO1xuICAgIH1cblxuICAgIC8vIElmIGZsaXBwaW5nIHRvIHRoZSBvcHBvc2l0ZSBzaWRlIGFmdGVyIGhpZGluZyBhdCBsZWFzdCBvbmNlLCB0aGVcbiAgICAvLyBhbmltYXRpb24gd2lsbCB1c2UgdGhlIHdyb25nIHBsYWNlbWVudCB3aXRob3V0IHJlc2V0dGluZyB0aGUgZHVyYXRpb25cbiAgICBpZiAoZ2V0SXNEZWZhdWx0UmVuZGVyRm4oKSkge1xuICAgICAgY29uc3Qge2JveCwgY29udGVudH0gPSBnZXREZWZhdWx0VGVtcGxhdGVDaGlsZHJlbigpO1xuICAgICAgc2V0VHJhbnNpdGlvbkR1cmF0aW9uKFtib3gsIGNvbnRlbnRdLCAwKTtcbiAgICB9XG5cbiAgICBvbkZpcnN0VXBkYXRlID0gKCk6IHZvaWQgPT4ge1xuICAgICAgaWYgKCFpbnN0YW5jZS5zdGF0ZS5pc1Zpc2libGUgfHwgaWdub3JlT25GaXJzdFVwZGF0ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlnbm9yZU9uRmlyc3RVcGRhdGUgPSB0cnVlO1xuXG4gICAgICAvLyByZWZsb3dcbiAgICAgIHZvaWQgcG9wcGVyLm9mZnNldEhlaWdodDtcblxuICAgICAgcG9wcGVyLnN0eWxlLnRyYW5zaXRpb24gPSBpbnN0YW5jZS5wcm9wcy5tb3ZlVHJhbnNpdGlvbjtcblxuICAgICAgaWYgKGdldElzRGVmYXVsdFJlbmRlckZuKCkgJiYgaW5zdGFuY2UucHJvcHMuYW5pbWF0aW9uKSB7XG4gICAgICAgIGNvbnN0IHtib3gsIGNvbnRlbnR9ID0gZ2V0RGVmYXVsdFRlbXBsYXRlQ2hpbGRyZW4oKTtcbiAgICAgICAgc2V0VHJhbnNpdGlvbkR1cmF0aW9uKFtib3gsIGNvbnRlbnRdLCBkdXJhdGlvbik7XG4gICAgICAgIHNldFZpc2liaWxpdHlTdGF0ZShbYm94LCBjb250ZW50XSwgJ3Zpc2libGUnKTtcbiAgICAgIH1cblxuICAgICAgaGFuZGxlQXJpYUNvbnRlbnRBdHRyaWJ1dGUoKTtcbiAgICAgIGhhbmRsZUFyaWFFeHBhbmRlZEF0dHJpYnV0ZSgpO1xuXG4gICAgICBwdXNoSWZVbmlxdWUobW91bnRlZEluc3RhbmNlcywgaW5zdGFuY2UpO1xuXG4gICAgICAvLyBjZXJ0YWluIG1vZGlmaWVycyAoZS5nLiBgbWF4U2l6ZWApIHJlcXVpcmUgYSBzZWNvbmQgdXBkYXRlIGFmdGVyIHRoZVxuICAgICAgLy8gcG9wcGVyIGhhcyBiZWVuIHBvc2l0aW9uZWQgZm9yIHRoZSBmaXJzdCB0aW1lXG4gICAgICBpbnN0YW5jZS5wb3BwZXJJbnN0YW5jZT8uZm9yY2VVcGRhdGUoKTtcblxuICAgICAgaW52b2tlSG9vaygnb25Nb3VudCcsIFtpbnN0YW5jZV0pO1xuXG4gICAgICBpZiAoaW5zdGFuY2UucHJvcHMuYW5pbWF0aW9uICYmIGdldElzRGVmYXVsdFJlbmRlckZuKCkpIHtcbiAgICAgICAgb25UcmFuc2l0aW9uZWRJbihkdXJhdGlvbiwgKCkgPT4ge1xuICAgICAgICAgIGluc3RhbmNlLnN0YXRlLmlzU2hvd24gPSB0cnVlO1xuICAgICAgICAgIGludm9rZUhvb2soJ29uU2hvd24nLCBbaW5zdGFuY2VdKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIG1vdW50KCk7XG4gIH1cblxuICBmdW5jdGlvbiBoaWRlKCk6IHZvaWQge1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gICAgaWYgKF9fREVWX18pIHtcbiAgICAgIHdhcm5XaGVuKGluc3RhbmNlLnN0YXRlLmlzRGVzdHJveWVkLCBjcmVhdGVNZW1vcnlMZWFrV2FybmluZygnaGlkZScpKTtcbiAgICB9XG5cbiAgICAvLyBFYXJseSBiYWlsLW91dFxuICAgIGNvbnN0IGlzQWxyZWFkeUhpZGRlbiA9ICFpbnN0YW5jZS5zdGF0ZS5pc1Zpc2libGU7XG4gICAgY29uc3QgaXNEZXN0cm95ZWQgPSBpbnN0YW5jZS5zdGF0ZS5pc0Rlc3Ryb3llZDtcbiAgICBjb25zdCBpc0Rpc2FibGVkID0gIWluc3RhbmNlLnN0YXRlLmlzRW5hYmxlZDtcbiAgICBjb25zdCBkdXJhdGlvbiA9IGdldFZhbHVlQXRJbmRleE9yUmV0dXJuKFxuICAgICAgaW5zdGFuY2UucHJvcHMuZHVyYXRpb24sXG4gICAgICAxLFxuICAgICAgZGVmYXVsdFByb3BzLmR1cmF0aW9uXG4gICAgKTtcblxuICAgIGlmIChpc0FscmVhZHlIaWRkZW4gfHwgaXNEZXN0cm95ZWQgfHwgaXNEaXNhYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGludm9rZUhvb2soJ29uSGlkZScsIFtpbnN0YW5jZV0sIGZhbHNlKTtcbiAgICBpZiAoaW5zdGFuY2UucHJvcHMub25IaWRlKGluc3RhbmNlKSA9PT0gZmFsc2UpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpbnN0YW5jZS5zdGF0ZS5pc1Zpc2libGUgPSBmYWxzZTtcbiAgICBpbnN0YW5jZS5zdGF0ZS5pc1Nob3duID0gZmFsc2U7XG4gICAgaWdub3JlT25GaXJzdFVwZGF0ZSA9IGZhbHNlO1xuICAgIGlzVmlzaWJsZUZyb21DbGljayA9IGZhbHNlO1xuXG4gICAgaWYgKGdldElzRGVmYXVsdFJlbmRlckZuKCkpIHtcbiAgICAgIHBvcHBlci5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gICAgfVxuXG4gICAgY2xlYW51cEludGVyYWN0aXZlTW91c2VMaXN0ZW5lcnMoKTtcbiAgICByZW1vdmVEb2N1bWVudFByZXNzKCk7XG4gICAgaGFuZGxlU3R5bGVzKHRydWUpO1xuXG4gICAgaWYgKGdldElzRGVmYXVsdFJlbmRlckZuKCkpIHtcbiAgICAgIGNvbnN0IHtib3gsIGNvbnRlbnR9ID0gZ2V0RGVmYXVsdFRlbXBsYXRlQ2hpbGRyZW4oKTtcblxuICAgICAgaWYgKGluc3RhbmNlLnByb3BzLmFuaW1hdGlvbikge1xuICAgICAgICBzZXRUcmFuc2l0aW9uRHVyYXRpb24oW2JveCwgY29udGVudF0sIGR1cmF0aW9uKTtcbiAgICAgICAgc2V0VmlzaWJpbGl0eVN0YXRlKFtib3gsIGNvbnRlbnRdLCAnaGlkZGVuJyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaGFuZGxlQXJpYUNvbnRlbnRBdHRyaWJ1dGUoKTtcbiAgICBoYW5kbGVBcmlhRXhwYW5kZWRBdHRyaWJ1dGUoKTtcblxuICAgIGlmIChpbnN0YW5jZS5wcm9wcy5hbmltYXRpb24pIHtcbiAgICAgIGlmIChnZXRJc0RlZmF1bHRSZW5kZXJGbigpKSB7XG4gICAgICAgIG9uVHJhbnNpdGlvbmVkT3V0KGR1cmF0aW9uLCBpbnN0YW5jZS51bm1vdW50KTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaW5zdGFuY2UudW5tb3VudCgpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGhpZGVXaXRoSW50ZXJhY3Rpdml0eShldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gICAgaWYgKF9fREVWX18pIHtcbiAgICAgIHdhcm5XaGVuKFxuICAgICAgICBpbnN0YW5jZS5zdGF0ZS5pc0Rlc3Ryb3llZCxcbiAgICAgICAgY3JlYXRlTWVtb3J5TGVha1dhcm5pbmcoJ2hpZGVXaXRoSW50ZXJhY3Rpdml0eScpXG4gICAgICApO1xuICAgIH1cblxuICAgIGdldERvY3VtZW50KCkuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgZGVib3VuY2VkT25Nb3VzZU1vdmUpO1xuICAgIHB1c2hJZlVuaXF1ZShtb3VzZU1vdmVMaXN0ZW5lcnMsIGRlYm91bmNlZE9uTW91c2VNb3ZlKTtcbiAgICBkZWJvdW5jZWRPbk1vdXNlTW92ZShldmVudCk7XG4gIH1cblxuICBmdW5jdGlvbiB1bm1vdW50KCk6IHZvaWQge1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gICAgaWYgKF9fREVWX18pIHtcbiAgICAgIHdhcm5XaGVuKGluc3RhbmNlLnN0YXRlLmlzRGVzdHJveWVkLCBjcmVhdGVNZW1vcnlMZWFrV2FybmluZygndW5tb3VudCcpKTtcbiAgICB9XG5cbiAgICBpZiAoaW5zdGFuY2Uuc3RhdGUuaXNWaXNpYmxlKSB7XG4gICAgICBpbnN0YW5jZS5oaWRlKCk7XG4gICAgfVxuXG4gICAgaWYgKCFpbnN0YW5jZS5zdGF0ZS5pc01vdW50ZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBkZXN0cm95UG9wcGVySW5zdGFuY2UoKTtcblxuICAgIC8vIElmIGEgcG9wcGVyIGlzIG5vdCBpbnRlcmFjdGl2ZSwgaXQgd2lsbCBiZSBhcHBlbmRlZCBvdXRzaWRlIHRoZSBwb3BwZXJcbiAgICAvLyB0cmVlIGJ5IGRlZmF1bHQuIFRoaXMgc2VlbXMgbWFpbmx5IGZvciBpbnRlcmFjdGl2ZSB0aXBwaWVzLCBidXQgd2Ugc2hvdWxkXG4gICAgLy8gZmluZCBhIHdvcmthcm91bmQgaWYgcG9zc2libGVcbiAgICBnZXROZXN0ZWRQb3BwZXJUcmVlKCkuZm9yRWFjaCgobmVzdGVkUG9wcGVyKSA9PiB7XG4gICAgICBuZXN0ZWRQb3BwZXIuX3RpcHB5IS51bm1vdW50KCk7XG4gICAgfSk7XG5cbiAgICBpZiAocG9wcGVyLnBhcmVudE5vZGUpIHtcbiAgICAgIHBvcHBlci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHBvcHBlcik7XG4gICAgfVxuXG4gICAgbW91bnRlZEluc3RhbmNlcyA9IG1vdW50ZWRJbnN0YW5jZXMuZmlsdGVyKChpKSA9PiBpICE9PSBpbnN0YW5jZSk7XG5cbiAgICBpbnN0YW5jZS5zdGF0ZS5pc01vdW50ZWQgPSBmYWxzZTtcbiAgICBpbnZva2VIb29rKCdvbkhpZGRlbicsIFtpbnN0YW5jZV0pO1xuICB9XG5cbiAgZnVuY3Rpb24gZGVzdHJveSgpOiB2b2lkIHtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgIGlmIChfX0RFVl9fKSB7XG4gICAgICB3YXJuV2hlbihpbnN0YW5jZS5zdGF0ZS5pc0Rlc3Ryb3llZCwgY3JlYXRlTWVtb3J5TGVha1dhcm5pbmcoJ2Rlc3Ryb3knKSk7XG4gICAgfVxuXG4gICAgaWYgKGluc3RhbmNlLnN0YXRlLmlzRGVzdHJveWVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaW5zdGFuY2UuY2xlYXJEZWxheVRpbWVvdXRzKCk7XG4gICAgaW5zdGFuY2UudW5tb3VudCgpO1xuXG4gICAgcmVtb3ZlTGlzdGVuZXJzKCk7XG5cbiAgICBkZWxldGUgcmVmZXJlbmNlLl90aXBweTtcblxuICAgIGluc3RhbmNlLnN0YXRlLmlzRGVzdHJveWVkID0gdHJ1ZTtcblxuICAgIGludm9rZUhvb2soJ29uRGVzdHJveScsIFtpbnN0YW5jZV0pO1xuICB9XG59XG4iLCAiaW1wb3J0IGJpbmRHbG9iYWxFdmVudExpc3RlbmVycywge1xuICBjdXJyZW50SW5wdXQsXG59IGZyb20gJy4vYmluZEdsb2JhbEV2ZW50TGlzdGVuZXJzJztcbmltcG9ydCBjcmVhdGVUaXBweSwge21vdW50ZWRJbnN0YW5jZXN9IGZyb20gJy4vY3JlYXRlVGlwcHknO1xuaW1wb3J0IHtnZXRBcnJheU9mRWxlbWVudHMsIGlzRWxlbWVudCwgaXNSZWZlcmVuY2VFbGVtZW50fSBmcm9tICcuL2RvbS11dGlscyc7XG5pbXBvcnQge2RlZmF1bHRQcm9wcywgc2V0RGVmYXVsdFByb3BzLCB2YWxpZGF0ZVByb3BzfSBmcm9tICcuL3Byb3BzJztcbmltcG9ydCB7SGlkZUFsbCwgSGlkZUFsbE9wdGlvbnMsIEluc3RhbmNlLCBQcm9wcywgVGFyZ2V0c30gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQge3ZhbGlkYXRlVGFyZ2V0cywgd2FybldoZW59IGZyb20gJy4vdmFsaWRhdGlvbic7XG5cbmZ1bmN0aW9uIHRpcHB5KFxuICB0YXJnZXRzOiBUYXJnZXRzLFxuICBvcHRpb25hbFByb3BzOiBQYXJ0aWFsPFByb3BzPiA9IHt9XG4pOiBJbnN0YW5jZSB8IEluc3RhbmNlW10ge1xuICBjb25zdCBwbHVnaW5zID0gZGVmYXVsdFByb3BzLnBsdWdpbnMuY29uY2F0KG9wdGlvbmFsUHJvcHMucGx1Z2lucyB8fCBbXSk7XG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgaWYgKF9fREVWX18pIHtcbiAgICB2YWxpZGF0ZVRhcmdldHModGFyZ2V0cyk7XG4gICAgdmFsaWRhdGVQcm9wcyhvcHRpb25hbFByb3BzLCBwbHVnaW5zKTtcbiAgfVxuXG4gIGJpbmRHbG9iYWxFdmVudExpc3RlbmVycygpO1xuXG4gIGNvbnN0IHBhc3NlZFByb3BzOiBQYXJ0aWFsPFByb3BzPiA9IHsuLi5vcHRpb25hbFByb3BzLCBwbHVnaW5zfTtcblxuICBjb25zdCBlbGVtZW50cyA9IGdldEFycmF5T2ZFbGVtZW50cyh0YXJnZXRzKTtcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICBpZiAoX19ERVZfXykge1xuICAgIGNvbnN0IGlzU2luZ2xlQ29udGVudEVsZW1lbnQgPSBpc0VsZW1lbnQocGFzc2VkUHJvcHMuY29udGVudCk7XG4gICAgY29uc3QgaXNNb3JlVGhhbk9uZVJlZmVyZW5jZUVsZW1lbnQgPSBlbGVtZW50cy5sZW5ndGggPiAxO1xuICAgIHdhcm5XaGVuKFxuICAgICAgaXNTaW5nbGVDb250ZW50RWxlbWVudCAmJiBpc01vcmVUaGFuT25lUmVmZXJlbmNlRWxlbWVudCxcbiAgICAgIFtcbiAgICAgICAgJ3RpcHB5KCkgd2FzIHBhc3NlZCBhbiBFbGVtZW50IGFzIHRoZSBgY29udGVudGAgcHJvcCwgYnV0IG1vcmUgdGhhbicsXG4gICAgICAgICdvbmUgdGlwcHkgaW5zdGFuY2Ugd2FzIGNyZWF0ZWQgYnkgdGhpcyBpbnZvY2F0aW9uLiBUaGlzIG1lYW5zIHRoZScsXG4gICAgICAgICdjb250ZW50IGVsZW1lbnQgd2lsbCBvbmx5IGJlIGFwcGVuZGVkIHRvIHRoZSBsYXN0IHRpcHB5IGluc3RhbmNlLicsXG4gICAgICAgICdcXG5cXG4nLFxuICAgICAgICAnSW5zdGVhZCwgcGFzcyB0aGUgLmlubmVySFRNTCBvZiB0aGUgZWxlbWVudCwgb3IgdXNlIGEgZnVuY3Rpb24gdGhhdCcsXG4gICAgICAgICdyZXR1cm5zIGEgY2xvbmVkIHZlcnNpb24gb2YgdGhlIGVsZW1lbnQgaW5zdGVhZC4nLFxuICAgICAgICAnXFxuXFxuJyxcbiAgICAgICAgJzEpIGNvbnRlbnQ6IGVsZW1lbnQuaW5uZXJIVE1MXFxuJyxcbiAgICAgICAgJzIpIGNvbnRlbnQ6ICgpID0+IGVsZW1lbnQuY2xvbmVOb2RlKHRydWUpJyxcbiAgICAgIF0uam9pbignICcpXG4gICAgKTtcbiAgfVxuXG4gIGNvbnN0IGluc3RhbmNlcyA9IGVsZW1lbnRzLnJlZHVjZTxJbnN0YW5jZVtdPihcbiAgICAoYWNjLCByZWZlcmVuY2UpOiBJbnN0YW5jZVtdID0+IHtcbiAgICAgIGNvbnN0IGluc3RhbmNlID0gcmVmZXJlbmNlICYmIGNyZWF0ZVRpcHB5KHJlZmVyZW5jZSwgcGFzc2VkUHJvcHMpO1xuXG4gICAgICBpZiAoaW5zdGFuY2UpIHtcbiAgICAgICAgYWNjLnB1c2goaW5zdGFuY2UpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gYWNjO1xuICAgIH0sXG4gICAgW11cbiAgKTtcblxuICByZXR1cm4gaXNFbGVtZW50KHRhcmdldHMpID8gaW5zdGFuY2VzWzBdIDogaW5zdGFuY2VzO1xufVxuXG50aXBweS5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHM7XG50aXBweS5zZXREZWZhdWx0UHJvcHMgPSBzZXREZWZhdWx0UHJvcHM7XG50aXBweS5jdXJyZW50SW5wdXQgPSBjdXJyZW50SW5wdXQ7XG5cbmV4cG9ydCBkZWZhdWx0IHRpcHB5O1xuXG5leHBvcnQgY29uc3QgaGlkZUFsbDogSGlkZUFsbCA9ICh7XG4gIGV4Y2x1ZGU6IGV4Y2x1ZGVkUmVmZXJlbmNlT3JJbnN0YW5jZSxcbiAgZHVyYXRpb24sXG59OiBIaWRlQWxsT3B0aW9ucyA9IHt9KSA9PiB7XG4gIG1vdW50ZWRJbnN0YW5jZXMuZm9yRWFjaCgoaW5zdGFuY2UpID0+IHtcbiAgICBsZXQgaXNFeGNsdWRlZCA9IGZhbHNlO1xuXG4gICAgaWYgKGV4Y2x1ZGVkUmVmZXJlbmNlT3JJbnN0YW5jZSkge1xuICAgICAgaXNFeGNsdWRlZCA9IGlzUmVmZXJlbmNlRWxlbWVudChleGNsdWRlZFJlZmVyZW5jZU9ySW5zdGFuY2UpXG4gICAgICAgID8gaW5zdGFuY2UucmVmZXJlbmNlID09PSBleGNsdWRlZFJlZmVyZW5jZU9ySW5zdGFuY2VcbiAgICAgICAgOiBpbnN0YW5jZS5wb3BwZXIgPT09IChleGNsdWRlZFJlZmVyZW5jZU9ySW5zdGFuY2UgYXMgSW5zdGFuY2UpLnBvcHBlcjtcbiAgICB9XG5cbiAgICBpZiAoIWlzRXhjbHVkZWQpIHtcbiAgICAgIGNvbnN0IG9yaWdpbmFsRHVyYXRpb24gPSBpbnN0YW5jZS5wcm9wcy5kdXJhdGlvbjtcblxuICAgICAgaW5zdGFuY2Uuc2V0UHJvcHMoe2R1cmF0aW9ufSk7XG4gICAgICBpbnN0YW5jZS5oaWRlKCk7XG5cbiAgICAgIGlmICghaW5zdGFuY2Uuc3RhdGUuaXNEZXN0cm95ZWQpIHtcbiAgICAgICAgaW5zdGFuY2Uuc2V0UHJvcHMoe2R1cmF0aW9uOiBvcmlnaW5hbER1cmF0aW9ufSk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn07XG4iLCAiaW1wb3J0IHRpcHB5IGZyb20gJy4uJztcbmltcG9ydCB7ZGl2fSBmcm9tICcuLi9kb20tdXRpbHMnO1xuaW1wb3J0IHtcbiAgQ3JlYXRlU2luZ2xldG9uLFxuICBQbHVnaW4sXG4gIENyZWF0ZVNpbmdsZXRvblByb3BzLFxuICBSZWZlcmVuY2VFbGVtZW50LFxuICBDcmVhdGVTaW5nbGV0b25JbnN0YW5jZSxcbiAgSW5zdGFuY2UsXG4gIFByb3BzLFxufSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQge25vcm1hbGl6ZVRvQXJyYXksIHJlbW92ZVByb3BlcnRpZXN9IGZyb20gJy4uL3V0aWxzJztcbmltcG9ydCB7ZXJyb3JXaGVufSBmcm9tICcuLi92YWxpZGF0aW9uJztcbmltcG9ydCB7YXBwbHlTdHlsZXMsIE1vZGlmaWVyfSBmcm9tICdAcG9wcGVyanMvY29yZSc7XG5cbi8vIFRoZSBkZWZhdWx0IGBhcHBseVN0eWxlc2AgbW9kaWZpZXIgaGFzIGEgY2xlYW51cCBmdW5jdGlvbiB0aGF0IGdldHMgY2FsbGVkXG4vLyBldmVyeSB0aW1lIHRoZSBwb3BwZXIgaXMgZGVzdHJveWVkIChpLmUuIGEgbmV3IHRhcmdldCksIHJlbW92aW5nIHRoZSBzdHlsZXNcbi8vIGFuZCBjYXVzaW5nIHRyYW5zaXRpb25zIHRvIGJyZWFrIGZvciBzaW5nbGV0b25zIHdoZW4gdGhlIGNvbnNvbGUgaXMgb3BlbiwgYnV0XG4vLyBtb3N0IG5vdGFibHkgZm9yIG5vbi10cmFuc2Zvcm0gc3R5bGVzIGJlaW5nIHVzZWQsIGBncHVBY2NlbGVyYXRpb246IGZhbHNlYC5cbmNvbnN0IGFwcGx5U3R5bGVzTW9kaWZpZXI6IE1vZGlmaWVyPCdhcHBseVN0eWxlcycsIFJlY29yZDxzdHJpbmcsIHVua25vd24+PiA9IHtcbiAgLi4uYXBwbHlTdHlsZXMsXG4gIGVmZmVjdCh7c3RhdGV9KSB7XG4gICAgY29uc3QgaW5pdGlhbFN0eWxlcyA9IHtcbiAgICAgIHBvcHBlcjoge1xuICAgICAgICBwb3NpdGlvbjogc3RhdGUub3B0aW9ucy5zdHJhdGVneSxcbiAgICAgICAgbGVmdDogJzAnLFxuICAgICAgICB0b3A6ICcwJyxcbiAgICAgICAgbWFyZ2luOiAnMCcsXG4gICAgICB9LFxuICAgICAgYXJyb3c6IHtcbiAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICB9LFxuICAgICAgcmVmZXJlbmNlOiB7fSxcbiAgICB9O1xuXG4gICAgT2JqZWN0LmFzc2lnbihzdGF0ZS5lbGVtZW50cy5wb3BwZXIuc3R5bGUsIGluaXRpYWxTdHlsZXMucG9wcGVyKTtcbiAgICBzdGF0ZS5zdHlsZXMgPSBpbml0aWFsU3R5bGVzO1xuXG4gICAgaWYgKHN0YXRlLmVsZW1lbnRzLmFycm93KSB7XG4gICAgICBPYmplY3QuYXNzaWduKHN0YXRlLmVsZW1lbnRzLmFycm93LnN0eWxlLCBpbml0aWFsU3R5bGVzLmFycm93KTtcbiAgICB9XG5cbiAgICAvLyBpbnRlbnRpb25hbGx5IHJldHVybiBubyBjbGVhbnVwIGZ1bmN0aW9uXG4gICAgLy8gcmV0dXJuICgpID0+IHsgLi4uIH1cbiAgfSxcbn07XG5cbmNvbnN0IGNyZWF0ZVNpbmdsZXRvbjogQ3JlYXRlU2luZ2xldG9uID0gKFxuICB0aXBweUluc3RhbmNlcyxcbiAgb3B0aW9uYWxQcm9wcyA9IHt9XG4pID0+IHtcbiAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgaWYgKF9fREVWX18pIHtcbiAgICBlcnJvcldoZW4oXG4gICAgICAhQXJyYXkuaXNBcnJheSh0aXBweUluc3RhbmNlcyksXG4gICAgICBbXG4gICAgICAgICdUaGUgZmlyc3QgYXJndW1lbnQgcGFzc2VkIHRvIGNyZWF0ZVNpbmdsZXRvbigpIG11c3QgYmUgYW4gYXJyYXkgb2YnLFxuICAgICAgICAndGlwcHkgaW5zdGFuY2VzLiBUaGUgcGFzc2VkIHZhbHVlIHdhcycsXG4gICAgICAgIFN0cmluZyh0aXBweUluc3RhbmNlcyksXG4gICAgICBdLmpvaW4oJyAnKVxuICAgICk7XG4gIH1cblxuICBsZXQgaW5kaXZpZHVhbEluc3RhbmNlcyA9IHRpcHB5SW5zdGFuY2VzO1xuICBsZXQgcmVmZXJlbmNlczogQXJyYXk8UmVmZXJlbmNlRWxlbWVudD4gPSBbXTtcbiAgbGV0IHRyaWdnZXJUYXJnZXRzOiBBcnJheTxFbGVtZW50PiA9IFtdO1xuICBsZXQgY3VycmVudFRhcmdldDogRWxlbWVudCB8IG51bGw7XG4gIGxldCBvdmVycmlkZXMgPSBvcHRpb25hbFByb3BzLm92ZXJyaWRlcztcbiAgbGV0IGludGVyY2VwdFNldFByb3BzQ2xlYW51cHM6IEFycmF5PCgpID0+IHZvaWQ+ID0gW107XG4gIGxldCBzaG93bk9uQ3JlYXRlID0gZmFsc2U7XG5cbiAgZnVuY3Rpb24gc2V0VHJpZ2dlclRhcmdldHMoKTogdm9pZCB7XG4gICAgdHJpZ2dlclRhcmdldHMgPSBpbmRpdmlkdWFsSW5zdGFuY2VzXG4gICAgICAubWFwKChpbnN0YW5jZSkgPT5cbiAgICAgICAgbm9ybWFsaXplVG9BcnJheShpbnN0YW5jZS5wcm9wcy50cmlnZ2VyVGFyZ2V0IHx8IGluc3RhbmNlLnJlZmVyZW5jZSlcbiAgICAgIClcbiAgICAgIC5yZWR1Y2UoKGFjYywgaXRlbSkgPT4gYWNjLmNvbmNhdChpdGVtKSwgW10pO1xuICB9XG5cbiAgZnVuY3Rpb24gc2V0UmVmZXJlbmNlcygpOiB2b2lkIHtcbiAgICByZWZlcmVuY2VzID0gaW5kaXZpZHVhbEluc3RhbmNlcy5tYXAoKGluc3RhbmNlKSA9PiBpbnN0YW5jZS5yZWZlcmVuY2UpO1xuICB9XG5cbiAgZnVuY3Rpb24gZW5hYmxlSW5zdGFuY2VzKGlzRW5hYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIGluZGl2aWR1YWxJbnN0YW5jZXMuZm9yRWFjaCgoaW5zdGFuY2UpID0+IHtcbiAgICAgIGlmIChpc0VuYWJsZWQpIHtcbiAgICAgICAgaW5zdGFuY2UuZW5hYmxlKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpbnN0YW5jZS5kaXNhYmxlKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBpbnRlcmNlcHRTZXRQcm9wcyhzaW5nbGV0b246IEluc3RhbmNlKTogQXJyYXk8KCkgPT4gdm9pZD4ge1xuICAgIHJldHVybiBpbmRpdmlkdWFsSW5zdGFuY2VzLm1hcCgoaW5zdGFuY2UpID0+IHtcbiAgICAgIGNvbnN0IG9yaWdpbmFsU2V0UHJvcHMgPSBpbnN0YW5jZS5zZXRQcm9wcztcblxuICAgICAgaW5zdGFuY2Uuc2V0UHJvcHMgPSAocHJvcHMpOiB2b2lkID0+IHtcbiAgICAgICAgb3JpZ2luYWxTZXRQcm9wcyhwcm9wcyk7XG5cbiAgICAgICAgaWYgKGluc3RhbmNlLnJlZmVyZW5jZSA9PT0gY3VycmVudFRhcmdldCkge1xuICAgICAgICAgIHNpbmdsZXRvbi5zZXRQcm9wcyhwcm9wcyk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIHJldHVybiAoKTogdm9pZCA9PiB7XG4gICAgICAgIGluc3RhbmNlLnNldFByb3BzID0gb3JpZ2luYWxTZXRQcm9wcztcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuICAvLyBoYXZlIHRvIHBhc3Mgc2luZ2xldG9uLCBhcyBpdCBtYXliZSB1bmRlZmluZWQgb24gZmlyc3QgY2FsbFxuICBmdW5jdGlvbiBwcmVwYXJlSW5zdGFuY2UoXG4gICAgc2luZ2xldG9uOiBJbnN0YW5jZSxcbiAgICB0YXJnZXQ6IFJlZmVyZW5jZUVsZW1lbnRcbiAgKTogdm9pZCB7XG4gICAgY29uc3QgaW5kZXggPSB0cmlnZ2VyVGFyZ2V0cy5pbmRleE9mKHRhcmdldCk7XG5cbiAgICAvLyBiYWlsLW91dFxuICAgIGlmICh0YXJnZXQgPT09IGN1cnJlbnRUYXJnZXQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjdXJyZW50VGFyZ2V0ID0gdGFyZ2V0O1xuXG4gICAgY29uc3Qgb3ZlcnJpZGVQcm9wczogUGFydGlhbDxQcm9wcz4gPSAob3ZlcnJpZGVzIHx8IFtdKVxuICAgICAgLmNvbmNhdCgnY29udGVudCcpXG4gICAgICAucmVkdWNlKChhY2MsIHByb3ApID0+IHtcbiAgICAgICAgKGFjYyBhcyBhbnkpW3Byb3BdID0gaW5kaXZpZHVhbEluc3RhbmNlc1tpbmRleF0ucHJvcHNbcHJvcF07XG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgICB9LCB7fSk7XG5cbiAgICBzaW5nbGV0b24uc2V0UHJvcHMoe1xuICAgICAgLi4ub3ZlcnJpZGVQcm9wcyxcbiAgICAgIGdldFJlZmVyZW5jZUNsaWVudFJlY3Q6XG4gICAgICAgIHR5cGVvZiBvdmVycmlkZVByb3BzLmdldFJlZmVyZW5jZUNsaWVudFJlY3QgPT09ICdmdW5jdGlvbidcbiAgICAgICAgICA/IG92ZXJyaWRlUHJvcHMuZ2V0UmVmZXJlbmNlQ2xpZW50UmVjdFxuICAgICAgICAgIDogKCk6IENsaWVudFJlY3QgPT4gcmVmZXJlbmNlc1tpbmRleF0/LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuICAgIH0pO1xuICB9XG5cbiAgZW5hYmxlSW5zdGFuY2VzKGZhbHNlKTtcbiAgc2V0UmVmZXJlbmNlcygpO1xuICBzZXRUcmlnZ2VyVGFyZ2V0cygpO1xuXG4gIGNvbnN0IHBsdWdpbjogUGx1Z2luID0ge1xuICAgIGZuKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgb25EZXN0cm95KCk6IHZvaWQge1xuICAgICAgICAgIGVuYWJsZUluc3RhbmNlcyh0cnVlKTtcbiAgICAgICAgfSxcbiAgICAgICAgb25IaWRkZW4oKTogdm9pZCB7XG4gICAgICAgICAgY3VycmVudFRhcmdldCA9IG51bGw7XG4gICAgICAgIH0sXG4gICAgICAgIG9uQ2xpY2tPdXRzaWRlKGluc3RhbmNlKTogdm9pZCB7XG4gICAgICAgICAgaWYgKGluc3RhbmNlLnByb3BzLnNob3dPbkNyZWF0ZSAmJiAhc2hvd25PbkNyZWF0ZSkge1xuICAgICAgICAgICAgc2hvd25PbkNyZWF0ZSA9IHRydWU7XG4gICAgICAgICAgICBjdXJyZW50VGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG9uU2hvdyhpbnN0YW5jZSk6IHZvaWQge1xuICAgICAgICAgIGlmIChpbnN0YW5jZS5wcm9wcy5zaG93T25DcmVhdGUgJiYgIXNob3duT25DcmVhdGUpIHtcbiAgICAgICAgICAgIHNob3duT25DcmVhdGUgPSB0cnVlO1xuICAgICAgICAgICAgcHJlcGFyZUluc3RhbmNlKGluc3RhbmNlLCByZWZlcmVuY2VzWzBdKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG9uVHJpZ2dlcihpbnN0YW5jZSwgZXZlbnQpOiB2b2lkIHtcbiAgICAgICAgICBwcmVwYXJlSW5zdGFuY2UoaW5zdGFuY2UsIGV2ZW50LmN1cnJlbnRUYXJnZXQgYXMgRWxlbWVudCk7XG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgIH0sXG4gIH07XG5cbiAgY29uc3Qgc2luZ2xldG9uID0gdGlwcHkoZGl2KCksIHtcbiAgICAuLi5yZW1vdmVQcm9wZXJ0aWVzKG9wdGlvbmFsUHJvcHMsIFsnb3ZlcnJpZGVzJ10pLFxuICAgIHBsdWdpbnM6IFtwbHVnaW4sIC4uLihvcHRpb25hbFByb3BzLnBsdWdpbnMgfHwgW10pXSxcbiAgICB0cmlnZ2VyVGFyZ2V0OiB0cmlnZ2VyVGFyZ2V0cyxcbiAgICBwb3BwZXJPcHRpb25zOiB7XG4gICAgICAuLi5vcHRpb25hbFByb3BzLnBvcHBlck9wdGlvbnMsXG4gICAgICBtb2RpZmllcnM6IFtcbiAgICAgICAgLi4uKG9wdGlvbmFsUHJvcHMucG9wcGVyT3B0aW9ucz8ubW9kaWZpZXJzIHx8IFtdKSxcbiAgICAgICAgYXBwbHlTdHlsZXNNb2RpZmllcixcbiAgICAgIF0sXG4gICAgfSxcbiAgfSkgYXMgQ3JlYXRlU2luZ2xldG9uSW5zdGFuY2U8Q3JlYXRlU2luZ2xldG9uUHJvcHM+O1xuXG4gIGNvbnN0IG9yaWdpbmFsU2hvdyA9IHNpbmdsZXRvbi5zaG93O1xuXG4gIHNpbmdsZXRvbi5zaG93ID0gKHRhcmdldD86IFJlZmVyZW5jZUVsZW1lbnQgfCBJbnN0YW5jZSB8IG51bWJlcik6IHZvaWQgPT4ge1xuICAgIG9yaWdpbmFsU2hvdygpO1xuXG4gICAgLy8gZmlyc3QgdGltZSwgc2hvd09uQ3JlYXRlIG9yIHByb2dyYW1tYXRpYyBjYWxsIHdpdGggbm8gcGFyYW1zXG4gICAgLy8gZGVmYXVsdCB0byBzaG93aW5nIGZpcnN0IGluc3RhbmNlXG4gICAgaWYgKCFjdXJyZW50VGFyZ2V0ICYmIHRhcmdldCA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gcHJlcGFyZUluc3RhbmNlKHNpbmdsZXRvbiwgcmVmZXJlbmNlc1swXSk7XG4gICAgfVxuXG4gICAgLy8gdHJpZ2dlcmVkIGZyb20gZXZlbnQgKGRvIG5vdGhpbmcgYXMgcHJlcGFyZUluc3RhbmNlIGFscmVhZHkgY2FsbGVkIGJ5IG9uVHJpZ2dlcilcbiAgICAvLyBwcm9ncmFtbWF0aWMgY2FsbCB3aXRoIG5vIHBhcmFtcyB3aGVuIGFscmVhZHkgdmlzaWJsZSAoZG8gbm90aGluZyBhZ2FpbilcbiAgICBpZiAoY3VycmVudFRhcmdldCAmJiB0YXJnZXQgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIHRhcmdldCBpcyBpbmRleCBvZiBpbnN0YW5jZVxuICAgIGlmICh0eXBlb2YgdGFyZ2V0ID09PSAnbnVtYmVyJykge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgcmVmZXJlbmNlc1t0YXJnZXRdICYmIHByZXBhcmVJbnN0YW5jZShzaW5nbGV0b24sIHJlZmVyZW5jZXNbdGFyZ2V0XSlcbiAgICAgICk7XG4gICAgfVxuXG4gICAgLy8gdGFyZ2V0IGlzIGEgY2hpbGQgdGlwcHkgaW5zdGFuY2VcbiAgICBpZiAoaW5kaXZpZHVhbEluc3RhbmNlcy5pbmRleE9mKHRhcmdldCBhcyBJbnN0YW5jZSkgPj0gMCkge1xuICAgICAgY29uc3QgcmVmID0gKHRhcmdldCBhcyBJbnN0YW5jZSkucmVmZXJlbmNlO1xuICAgICAgcmV0dXJuIHByZXBhcmVJbnN0YW5jZShzaW5nbGV0b24sIHJlZik7XG4gICAgfVxuXG4gICAgLy8gdGFyZ2V0IGlzIGEgUmVmZXJlbmNlRWxlbWVudFxuICAgIGlmIChyZWZlcmVuY2VzLmluZGV4T2YodGFyZ2V0IGFzIFJlZmVyZW5jZUVsZW1lbnQpID49IDApIHtcbiAgICAgIHJldHVybiBwcmVwYXJlSW5zdGFuY2Uoc2luZ2xldG9uLCB0YXJnZXQgYXMgUmVmZXJlbmNlRWxlbWVudCk7XG4gICAgfVxuICB9O1xuXG4gIHNpbmdsZXRvbi5zaG93TmV4dCA9ICgpOiB2b2lkID0+IHtcbiAgICBjb25zdCBmaXJzdCA9IHJlZmVyZW5jZXNbMF07XG4gICAgaWYgKCFjdXJyZW50VGFyZ2V0KSB7XG4gICAgICByZXR1cm4gc2luZ2xldG9uLnNob3coMCk7XG4gICAgfVxuICAgIGNvbnN0IGluZGV4ID0gcmVmZXJlbmNlcy5pbmRleE9mKGN1cnJlbnRUYXJnZXQpO1xuICAgIHNpbmdsZXRvbi5zaG93KHJlZmVyZW5jZXNbaW5kZXggKyAxXSB8fCBmaXJzdCk7XG4gIH07XG5cbiAgc2luZ2xldG9uLnNob3dQcmV2aW91cyA9ICgpOiB2b2lkID0+IHtcbiAgICBjb25zdCBsYXN0ID0gcmVmZXJlbmNlc1tyZWZlcmVuY2VzLmxlbmd0aCAtIDFdO1xuICAgIGlmICghY3VycmVudFRhcmdldCkge1xuICAgICAgcmV0dXJuIHNpbmdsZXRvbi5zaG93KGxhc3QpO1xuICAgIH1cbiAgICBjb25zdCBpbmRleCA9IHJlZmVyZW5jZXMuaW5kZXhPZihjdXJyZW50VGFyZ2V0KTtcbiAgICBjb25zdCB0YXJnZXQgPSByZWZlcmVuY2VzW2luZGV4IC0gMV0gfHwgbGFzdDtcbiAgICBzaW5nbGV0b24uc2hvdyh0YXJnZXQpO1xuICB9O1xuXG4gIGNvbnN0IG9yaWdpbmFsU2V0UHJvcHMgPSBzaW5nbGV0b24uc2V0UHJvcHM7XG5cbiAgc2luZ2xldG9uLnNldFByb3BzID0gKHByb3BzKTogdm9pZCA9PiB7XG4gICAgb3ZlcnJpZGVzID0gcHJvcHMub3ZlcnJpZGVzIHx8IG92ZXJyaWRlcztcbiAgICBvcmlnaW5hbFNldFByb3BzKHByb3BzKTtcbiAgfTtcblxuICBzaW5nbGV0b24uc2V0SW5zdGFuY2VzID0gKG5leHRJbnN0YW5jZXMpOiB2b2lkID0+IHtcbiAgICBlbmFibGVJbnN0YW5jZXModHJ1ZSk7XG4gICAgaW50ZXJjZXB0U2V0UHJvcHNDbGVhbnVwcy5mb3JFYWNoKChmbikgPT4gZm4oKSk7XG5cbiAgICBpbmRpdmlkdWFsSW5zdGFuY2VzID0gbmV4dEluc3RhbmNlcztcblxuICAgIGVuYWJsZUluc3RhbmNlcyhmYWxzZSk7XG4gICAgc2V0UmVmZXJlbmNlcygpO1xuICAgIHNldFRyaWdnZXJUYXJnZXRzKCk7XG4gICAgaW50ZXJjZXB0U2V0UHJvcHNDbGVhbnVwcyA9IGludGVyY2VwdFNldFByb3BzKHNpbmdsZXRvbik7XG5cbiAgICBzaW5nbGV0b24uc2V0UHJvcHMoe3RyaWdnZXJUYXJnZXQ6IHRyaWdnZXJUYXJnZXRzfSk7XG4gIH07XG5cbiAgaW50ZXJjZXB0U2V0UHJvcHNDbGVhbnVwcyA9IGludGVyY2VwdFNldFByb3BzKHNpbmdsZXRvbik7XG5cbiAgcmV0dXJuIHNpbmdsZXRvbjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVNpbmdsZXRvbjtcbiIsICJpbXBvcnQgdGlwcHkgZnJvbSAnLi4nO1xuaW1wb3J0IHtUT1VDSF9PUFRJT05TfSBmcm9tICcuLi9jb25zdGFudHMnO1xuaW1wb3J0IHtkZWZhdWx0UHJvcHN9IGZyb20gJy4uL3Byb3BzJztcbmltcG9ydCB7SW5zdGFuY2UsIFByb3BzLCBUYXJnZXRzfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQge0xpc3RlbmVyT2JqZWN0fSBmcm9tICcuLi90eXBlcy1pbnRlcm5hbCc7XG5pbXBvcnQge25vcm1hbGl6ZVRvQXJyYXksIHJlbW92ZVByb3BlcnRpZXN9IGZyb20gJy4uL3V0aWxzJztcbmltcG9ydCB7ZXJyb3JXaGVufSBmcm9tICcuLi92YWxpZGF0aW9uJztcblxuY29uc3QgQlVCQkxJTkdfRVZFTlRTX01BUCA9IHtcbiAgbW91c2VvdmVyOiAnbW91c2VlbnRlcicsXG4gIGZvY3VzaW46ICdmb2N1cycsXG4gIGNsaWNrOiAnY2xpY2snLFxufTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgZGVsZWdhdGUgaW5zdGFuY2UgdGhhdCBjb250cm9scyB0aGUgY3JlYXRpb24gb2YgdGlwcHkgaW5zdGFuY2VzXG4gKiBmb3IgY2hpbGQgZWxlbWVudHMgKGB0YXJnZXRgIENTUyBzZWxlY3RvcikuXG4gKi9cbmZ1bmN0aW9uIGRlbGVnYXRlKFxuICB0YXJnZXRzOiBUYXJnZXRzLFxuICBwcm9wczogUGFydGlhbDxQcm9wcz4gJiB7dGFyZ2V0OiBzdHJpbmd9XG4pOiBJbnN0YW5jZSB8IEluc3RhbmNlW10ge1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICBpZiAoX19ERVZfXykge1xuICAgIGVycm9yV2hlbihcbiAgICAgICEocHJvcHMgJiYgcHJvcHMudGFyZ2V0KSxcbiAgICAgIFtcbiAgICAgICAgJ1lvdSBtdXN0IHNwZWNpdHkgYSBgdGFyZ2V0YCBwcm9wIGluZGljYXRpbmcgYSBDU1Mgc2VsZWN0b3Igc3RyaW5nIG1hdGNoaW5nJyxcbiAgICAgICAgJ3RoZSB0YXJnZXQgZWxlbWVudHMgdGhhdCBzaG91bGQgcmVjZWl2ZSBhIHRpcHB5LicsXG4gICAgICBdLmpvaW4oJyAnKVxuICAgICk7XG4gIH1cblxuICBsZXQgbGlzdGVuZXJzOiBMaXN0ZW5lck9iamVjdFtdID0gW107XG4gIGxldCBjaGlsZFRpcHB5SW5zdGFuY2VzOiBJbnN0YW5jZVtdID0gW107XG4gIGxldCBkaXNhYmxlZCA9IGZhbHNlO1xuXG4gIGNvbnN0IHt0YXJnZXR9ID0gcHJvcHM7XG5cbiAgY29uc3QgbmF0aXZlUHJvcHMgPSByZW1vdmVQcm9wZXJ0aWVzKHByb3BzLCBbJ3RhcmdldCddKTtcbiAgY29uc3QgcGFyZW50UHJvcHMgPSB7Li4ubmF0aXZlUHJvcHMsIHRyaWdnZXI6ICdtYW51YWwnLCB0b3VjaDogZmFsc2V9O1xuICBjb25zdCBjaGlsZFByb3BzID0ge1xuICAgIHRvdWNoOiBkZWZhdWx0UHJvcHMudG91Y2gsXG4gICAgLi4ubmF0aXZlUHJvcHMsXG4gICAgc2hvd09uQ3JlYXRlOiB0cnVlLFxuICB9O1xuXG4gIGNvbnN0IHJldHVyblZhbHVlID0gdGlwcHkodGFyZ2V0cywgcGFyZW50UHJvcHMpO1xuICBjb25zdCBub3JtYWxpemVkUmV0dXJuVmFsdWUgPSBub3JtYWxpemVUb0FycmF5KHJldHVyblZhbHVlKTtcblxuICBmdW5jdGlvbiBvblRyaWdnZXIoZXZlbnQ6IEV2ZW50KTogdm9pZCB7XG4gICAgaWYgKCFldmVudC50YXJnZXQgfHwgZGlzYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCB0YXJnZXROb2RlID0gKGV2ZW50LnRhcmdldCBhcyBFbGVtZW50KS5jbG9zZXN0KHRhcmdldCk7XG5cbiAgICBpZiAoIXRhcmdldE5vZGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBHZXQgcmVsZXZhbnQgdHJpZ2dlciB3aXRoIGZhbGxiYWNrczpcbiAgICAvLyAxLiBDaGVjayBgZGF0YS10aXBweS10cmlnZ2VyYCBhdHRyaWJ1dGUgb24gdGFyZ2V0IG5vZGVcbiAgICAvLyAyLiBGYWxsYmFjayB0byBgdHJpZ2dlcmAgcGFzc2VkIHRvIGBkZWxlZ2F0ZSgpYFxuICAgIC8vIDMuIEZhbGxiYWNrIHRvIGBkZWZhdWx0UHJvcHMudHJpZ2dlcmBcbiAgICBjb25zdCB0cmlnZ2VyID1cbiAgICAgIHRhcmdldE5vZGUuZ2V0QXR0cmlidXRlKCdkYXRhLXRpcHB5LXRyaWdnZXInKSB8fFxuICAgICAgcHJvcHMudHJpZ2dlciB8fFxuICAgICAgZGVmYXVsdFByb3BzLnRyaWdnZXI7XG5cbiAgICAvLyBAdHMtaWdub3JlXG4gICAgaWYgKHRhcmdldE5vZGUuX3RpcHB5KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGV2ZW50LnR5cGUgPT09ICd0b3VjaHN0YXJ0JyAmJiB0eXBlb2YgY2hpbGRQcm9wcy50b3VjaCA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgZXZlbnQudHlwZSAhPT0gJ3RvdWNoc3RhcnQnICYmXG4gICAgICB0cmlnZ2VyLmluZGV4T2YoKEJVQkJMSU5HX0VWRU5UU19NQVAgYXMgYW55KVtldmVudC50eXBlXSkgPCAwXG4gICAgKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgaW5zdGFuY2UgPSB0aXBweSh0YXJnZXROb2RlLCBjaGlsZFByb3BzKTtcblxuICAgIGlmIChpbnN0YW5jZSkge1xuICAgICAgY2hpbGRUaXBweUluc3RhbmNlcyA9IGNoaWxkVGlwcHlJbnN0YW5jZXMuY29uY2F0KGluc3RhbmNlKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBvbihcbiAgICBub2RlOiBFbGVtZW50LFxuICAgIGV2ZW50VHlwZTogc3RyaW5nLFxuICAgIGhhbmRsZXI6IEV2ZW50TGlzdGVuZXIsXG4gICAgb3B0aW9uczogYm9vbGVhbiB8IFJlY29yZDxzdHJpbmcsIHVua25vd24+ID0gZmFsc2VcbiAgKTogdm9pZCB7XG4gICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgaGFuZGxlciwgb3B0aW9ucyk7XG4gICAgbGlzdGVuZXJzLnB1c2goe25vZGUsIGV2ZW50VHlwZSwgaGFuZGxlciwgb3B0aW9uc30pO1xuICB9XG5cbiAgZnVuY3Rpb24gYWRkRXZlbnRMaXN0ZW5lcnMoaW5zdGFuY2U6IEluc3RhbmNlKTogdm9pZCB7XG4gICAgY29uc3Qge3JlZmVyZW5jZX0gPSBpbnN0YW5jZTtcblxuICAgIG9uKHJlZmVyZW5jZSwgJ3RvdWNoc3RhcnQnLCBvblRyaWdnZXIsIFRPVUNIX09QVElPTlMpO1xuICAgIG9uKHJlZmVyZW5jZSwgJ21vdXNlb3ZlcicsIG9uVHJpZ2dlcik7XG4gICAgb24ocmVmZXJlbmNlLCAnZm9jdXNpbicsIG9uVHJpZ2dlcik7XG4gICAgb24ocmVmZXJlbmNlLCAnY2xpY2snLCBvblRyaWdnZXIpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVtb3ZlRXZlbnRMaXN0ZW5lcnMoKTogdm9pZCB7XG4gICAgbGlzdGVuZXJzLmZvckVhY2goKHtub2RlLCBldmVudFR5cGUsIGhhbmRsZXIsIG9wdGlvbnN9OiBMaXN0ZW5lck9iamVjdCkgPT4ge1xuICAgICAgbm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgaGFuZGxlciwgb3B0aW9ucyk7XG4gICAgfSk7XG4gICAgbGlzdGVuZXJzID0gW107XG4gIH1cblxuICBmdW5jdGlvbiBhcHBseU11dGF0aW9ucyhpbnN0YW5jZTogSW5zdGFuY2UpOiB2b2lkIHtcbiAgICBjb25zdCBvcmlnaW5hbERlc3Ryb3kgPSBpbnN0YW5jZS5kZXN0cm95O1xuICAgIGNvbnN0IG9yaWdpbmFsRW5hYmxlID0gaW5zdGFuY2UuZW5hYmxlO1xuICAgIGNvbnN0IG9yaWdpbmFsRGlzYWJsZSA9IGluc3RhbmNlLmRpc2FibGU7XG5cbiAgICBpbnN0YW5jZS5kZXN0cm95ID0gKHNob3VsZERlc3Ryb3lDaGlsZEluc3RhbmNlcyA9IHRydWUpOiB2b2lkID0+IHtcbiAgICAgIGlmIChzaG91bGREZXN0cm95Q2hpbGRJbnN0YW5jZXMpIHtcbiAgICAgICAgY2hpbGRUaXBweUluc3RhbmNlcy5mb3JFYWNoKChpbnN0YW5jZSkgPT4ge1xuICAgICAgICAgIGluc3RhbmNlLmRlc3Ryb3koKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGNoaWxkVGlwcHlJbnN0YW5jZXMgPSBbXTtcblxuICAgICAgcmVtb3ZlRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICAgIG9yaWdpbmFsRGVzdHJveSgpO1xuICAgIH07XG5cbiAgICBpbnN0YW5jZS5lbmFibGUgPSAoKTogdm9pZCA9PiB7XG4gICAgICBvcmlnaW5hbEVuYWJsZSgpO1xuICAgICAgY2hpbGRUaXBweUluc3RhbmNlcy5mb3JFYWNoKChpbnN0YW5jZSkgPT4gaW5zdGFuY2UuZW5hYmxlKCkpO1xuICAgICAgZGlzYWJsZWQgPSBmYWxzZTtcbiAgICB9O1xuXG4gICAgaW5zdGFuY2UuZGlzYWJsZSA9ICgpOiB2b2lkID0+IHtcbiAgICAgIG9yaWdpbmFsRGlzYWJsZSgpO1xuICAgICAgY2hpbGRUaXBweUluc3RhbmNlcy5mb3JFYWNoKChpbnN0YW5jZSkgPT4gaW5zdGFuY2UuZGlzYWJsZSgpKTtcbiAgICAgIGRpc2FibGVkID0gdHJ1ZTtcbiAgICB9O1xuXG4gICAgYWRkRXZlbnRMaXN0ZW5lcnMoaW5zdGFuY2UpO1xuICB9XG5cbiAgbm9ybWFsaXplZFJldHVyblZhbHVlLmZvckVhY2goYXBwbHlNdXRhdGlvbnMpO1xuXG4gIHJldHVybiByZXR1cm5WYWx1ZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZGVsZWdhdGU7XG4iLCAiaW1wb3J0IHtCQUNLRFJPUF9DTEFTU30gZnJvbSAnLi4vY29uc3RhbnRzJztcbmltcG9ydCB7ZGl2LCBzZXRWaXNpYmlsaXR5U3RhdGV9IGZyb20gJy4uL2RvbS11dGlscyc7XG5pbXBvcnQge2dldENoaWxkcmVufSBmcm9tICcuLi90ZW1wbGF0ZSc7XG5pbXBvcnQge0FuaW1hdGVGaWxsfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQge2Vycm9yV2hlbn0gZnJvbSAnLi4vdmFsaWRhdGlvbic7XG5cbmNvbnN0IGFuaW1hdGVGaWxsOiBBbmltYXRlRmlsbCA9IHtcbiAgbmFtZTogJ2FuaW1hdGVGaWxsJyxcbiAgZGVmYXVsdFZhbHVlOiBmYWxzZSxcbiAgZm4oaW5zdGFuY2UpIHtcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgaWYgKCFpbnN0YW5jZS5wcm9wcy5yZW5kZXI/LiQkdGlwcHkpIHtcbiAgICAgIGlmIChfX0RFVl9fKSB7XG4gICAgICAgIGVycm9yV2hlbihcbiAgICAgICAgICBpbnN0YW5jZS5wcm9wcy5hbmltYXRlRmlsbCxcbiAgICAgICAgICAnVGhlIGBhbmltYXRlRmlsbGAgcGx1Z2luIHJlcXVpcmVzIHRoZSBkZWZhdWx0IHJlbmRlciBmdW5jdGlvbi4nXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7fTtcbiAgICB9XG5cbiAgICBjb25zdCB7Ym94LCBjb250ZW50fSA9IGdldENoaWxkcmVuKGluc3RhbmNlLnBvcHBlcik7XG5cbiAgICBjb25zdCBiYWNrZHJvcCA9IGluc3RhbmNlLnByb3BzLmFuaW1hdGVGaWxsXG4gICAgICA/IGNyZWF0ZUJhY2tkcm9wRWxlbWVudCgpXG4gICAgICA6IG51bGw7XG5cbiAgICByZXR1cm4ge1xuICAgICAgb25DcmVhdGUoKTogdm9pZCB7XG4gICAgICAgIGlmIChiYWNrZHJvcCkge1xuICAgICAgICAgIGJveC5pbnNlcnRCZWZvcmUoYmFja2Ryb3AsIGJveC5maXJzdEVsZW1lbnRDaGlsZCEpO1xuICAgICAgICAgIGJveC5zZXRBdHRyaWJ1dGUoJ2RhdGEtYW5pbWF0ZWZpbGwnLCAnJyk7XG4gICAgICAgICAgYm94LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG5cbiAgICAgICAgICBpbnN0YW5jZS5zZXRQcm9wcyh7YXJyb3c6IGZhbHNlLCBhbmltYXRpb246ICdzaGlmdC1hd2F5J30pO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgb25Nb3VudCgpOiB2b2lkIHtcbiAgICAgICAgaWYgKGJhY2tkcm9wKSB7XG4gICAgICAgICAgY29uc3Qge3RyYW5zaXRpb25EdXJhdGlvbn0gPSBib3guc3R5bGU7XG4gICAgICAgICAgY29uc3QgZHVyYXRpb24gPSBOdW1iZXIodHJhbnNpdGlvbkR1cmF0aW9uLnJlcGxhY2UoJ21zJywgJycpKTtcblxuICAgICAgICAgIC8vIFRoZSBjb250ZW50IHNob3VsZCBmYWRlIGluIGFmdGVyIHRoZSBiYWNrZHJvcCBoYXMgbW9zdGx5IGZpbGxlZCB0aGVcbiAgICAgICAgICAvLyB0b29sdGlwIGVsZW1lbnQuIGBjbGlwLXBhdGhgIGlzIHRoZSBvdGhlciBhbHRlcm5hdGl2ZSBidXQgaXMgbm90XG4gICAgICAgICAgLy8gd2VsbC1zdXBwb3J0ZWQgYW5kIGlzIGJ1Z2d5IG9uIHNvbWUgZGV2aWNlcy5cbiAgICAgICAgICBjb250ZW50LnN0eWxlLnRyYW5zaXRpb25EZWxheSA9IGAke01hdGgucm91bmQoZHVyYXRpb24gLyAxMCl9bXNgO1xuXG4gICAgICAgICAgYmFja2Ryb3Auc3R5bGUudHJhbnNpdGlvbkR1cmF0aW9uID0gdHJhbnNpdGlvbkR1cmF0aW9uO1xuICAgICAgICAgIHNldFZpc2liaWxpdHlTdGF0ZShbYmFja2Ryb3BdLCAndmlzaWJsZScpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgb25TaG93KCk6IHZvaWQge1xuICAgICAgICBpZiAoYmFja2Ryb3ApIHtcbiAgICAgICAgICBiYWNrZHJvcC5zdHlsZS50cmFuc2l0aW9uRHVyYXRpb24gPSAnMG1zJztcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIG9uSGlkZSgpOiB2b2lkIHtcbiAgICAgICAgaWYgKGJhY2tkcm9wKSB7XG4gICAgICAgICAgc2V0VmlzaWJpbGl0eVN0YXRlKFtiYWNrZHJvcF0sICdoaWRkZW4nKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICB9O1xuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgYW5pbWF0ZUZpbGw7XG5cbmZ1bmN0aW9uIGNyZWF0ZUJhY2tkcm9wRWxlbWVudCgpOiBIVE1MRGl2RWxlbWVudCB7XG4gIGNvbnN0IGJhY2tkcm9wID0gZGl2KCk7XG4gIGJhY2tkcm9wLmNsYXNzTmFtZSA9IEJBQ0tEUk9QX0NMQVNTO1xuICBzZXRWaXNpYmlsaXR5U3RhdGUoW2JhY2tkcm9wXSwgJ2hpZGRlbicpO1xuICByZXR1cm4gYmFja2Ryb3A7XG59XG4iLCAiaW1wb3J0IHtnZXRPd25lckRvY3VtZW50LCBpc01vdXNlRXZlbnR9IGZyb20gJy4uL2RvbS11dGlscyc7XG5pbXBvcnQge0ZvbGxvd0N1cnNvciwgSW5zdGFuY2V9IGZyb20gJy4uL3R5cGVzJztcblxubGV0IG1vdXNlQ29vcmRzID0ge2NsaWVudFg6IDAsIGNsaWVudFk6IDB9O1xubGV0IGFjdGl2ZUluc3RhbmNlczogQXJyYXk8e2luc3RhbmNlOiBJbnN0YW5jZTsgZG9jOiBEb2N1bWVudH0+ID0gW107XG5cbmZ1bmN0aW9uIHN0b3JlTW91c2VDb29yZHMoe2NsaWVudFgsIGNsaWVudFl9OiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gIG1vdXNlQ29vcmRzID0ge2NsaWVudFgsIGNsaWVudFl9O1xufVxuXG5mdW5jdGlvbiBhZGRNb3VzZUNvb3Jkc0xpc3RlbmVyKGRvYzogRG9jdW1lbnQpOiB2b2lkIHtcbiAgZG9jLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHN0b3JlTW91c2VDb29yZHMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVNb3VzZUNvb3Jkc0xpc3RlbmVyKGRvYzogRG9jdW1lbnQpOiB2b2lkIHtcbiAgZG9jLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHN0b3JlTW91c2VDb29yZHMpO1xufVxuXG5jb25zdCBmb2xsb3dDdXJzb3I6IEZvbGxvd0N1cnNvciA9IHtcbiAgbmFtZTogJ2ZvbGxvd0N1cnNvcicsXG4gIGRlZmF1bHRWYWx1ZTogZmFsc2UsXG4gIGZuKGluc3RhbmNlKSB7XG4gICAgY29uc3QgcmVmZXJlbmNlID0gaW5zdGFuY2UucmVmZXJlbmNlO1xuICAgIGNvbnN0IGRvYyA9IGdldE93bmVyRG9jdW1lbnQoaW5zdGFuY2UucHJvcHMudHJpZ2dlclRhcmdldCB8fCByZWZlcmVuY2UpO1xuXG4gICAgbGV0IGlzSW50ZXJuYWxVcGRhdGUgPSBmYWxzZTtcbiAgICBsZXQgd2FzRm9jdXNFdmVudCA9IGZhbHNlO1xuICAgIGxldCBpc1VubW91bnRlZCA9IHRydWU7XG4gICAgbGV0IHByZXZQcm9wcyA9IGluc3RhbmNlLnByb3BzO1xuXG4gICAgZnVuY3Rpb24gZ2V0SXNJbml0aWFsQmVoYXZpb3IoKTogYm9vbGVhbiB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICBpbnN0YW5jZS5wcm9wcy5mb2xsb3dDdXJzb3IgPT09ICdpbml0aWFsJyAmJiBpbnN0YW5jZS5zdGF0ZS5pc1Zpc2libGVcbiAgICAgICk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYWRkTGlzdGVuZXIoKTogdm9pZCB7XG4gICAgICBkb2MuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgb25Nb3VzZU1vdmUpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbW92ZUxpc3RlbmVyKCk6IHZvaWQge1xuICAgICAgZG9jLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG9uTW91c2VNb3ZlKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1bnNldEdldFJlZmVyZW5jZUNsaWVudFJlY3QoKTogdm9pZCB7XG4gICAgICBpc0ludGVybmFsVXBkYXRlID0gdHJ1ZTtcbiAgICAgIGluc3RhbmNlLnNldFByb3BzKHtnZXRSZWZlcmVuY2VDbGllbnRSZWN0OiBudWxsfSk7XG4gICAgICBpc0ludGVybmFsVXBkYXRlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25Nb3VzZU1vdmUoZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICAgIC8vIElmIHRoZSBpbnN0YW5jZSBpcyBpbnRlcmFjdGl2ZSwgYXZvaWQgdXBkYXRpbmcgdGhlIHBvc2l0aW9uIHVubGVzcyBpdCdzXG4gICAgICAvLyBvdmVyIHRoZSByZWZlcmVuY2UgZWxlbWVudFxuICAgICAgY29uc3QgaXNDdXJzb3JPdmVyUmVmZXJlbmNlID0gZXZlbnQudGFyZ2V0XG4gICAgICAgID8gcmVmZXJlbmNlLmNvbnRhaW5zKGV2ZW50LnRhcmdldCBhcyBOb2RlKVxuICAgICAgICA6IHRydWU7XG4gICAgICBjb25zdCB7Zm9sbG93Q3Vyc29yfSA9IGluc3RhbmNlLnByb3BzO1xuICAgICAgY29uc3Qge2NsaWVudFgsIGNsaWVudFl9ID0gZXZlbnQ7XG5cbiAgICAgIGNvbnN0IHJlY3QgPSByZWZlcmVuY2UuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICBjb25zdCByZWxhdGl2ZVggPSBjbGllbnRYIC0gcmVjdC5sZWZ0O1xuICAgICAgY29uc3QgcmVsYXRpdmVZID0gY2xpZW50WSAtIHJlY3QudG9wO1xuXG4gICAgICBpZiAoaXNDdXJzb3JPdmVyUmVmZXJlbmNlIHx8ICFpbnN0YW5jZS5wcm9wcy5pbnRlcmFjdGl2ZSkge1xuICAgICAgICBpbnN0YW5jZS5zZXRQcm9wcyh7XG4gICAgICAgICAgLy8gQHRzLWlnbm9yZSAtIHVubmVlZGVkIERPTVJlY3QgcHJvcGVydGllc1xuICAgICAgICAgIGdldFJlZmVyZW5jZUNsaWVudFJlY3QoKSB7XG4gICAgICAgICAgICBjb25zdCByZWN0ID0gcmVmZXJlbmNlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgICAgICAgICBsZXQgeCA9IGNsaWVudFg7XG4gICAgICAgICAgICBsZXQgeSA9IGNsaWVudFk7XG5cbiAgICAgICAgICAgIGlmIChmb2xsb3dDdXJzb3IgPT09ICdpbml0aWFsJykge1xuICAgICAgICAgICAgICB4ID0gcmVjdC5sZWZ0ICsgcmVsYXRpdmVYO1xuICAgICAgICAgICAgICB5ID0gcmVjdC50b3AgKyByZWxhdGl2ZVk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IHRvcCA9IGZvbGxvd0N1cnNvciA9PT0gJ2hvcml6b250YWwnID8gcmVjdC50b3AgOiB5O1xuICAgICAgICAgICAgY29uc3QgcmlnaHQgPSBmb2xsb3dDdXJzb3IgPT09ICd2ZXJ0aWNhbCcgPyByZWN0LnJpZ2h0IDogeDtcbiAgICAgICAgICAgIGNvbnN0IGJvdHRvbSA9IGZvbGxvd0N1cnNvciA9PT0gJ2hvcml6b250YWwnID8gcmVjdC5ib3R0b20gOiB5O1xuICAgICAgICAgICAgY29uc3QgbGVmdCA9IGZvbGxvd0N1cnNvciA9PT0gJ3ZlcnRpY2FsJyA/IHJlY3QubGVmdCA6IHg7XG5cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIHdpZHRoOiByaWdodCAtIGxlZnQsXG4gICAgICAgICAgICAgIGhlaWdodDogYm90dG9tIC0gdG9wLFxuICAgICAgICAgICAgICB0b3AsXG4gICAgICAgICAgICAgIHJpZ2h0LFxuICAgICAgICAgICAgICBib3R0b20sXG4gICAgICAgICAgICAgIGxlZnQsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZSgpOiB2b2lkIHtcbiAgICAgIGlmIChpbnN0YW5jZS5wcm9wcy5mb2xsb3dDdXJzb3IpIHtcbiAgICAgICAgYWN0aXZlSW5zdGFuY2VzLnB1c2goe2luc3RhbmNlLCBkb2N9KTtcbiAgICAgICAgYWRkTW91c2VDb29yZHNMaXN0ZW5lcihkb2MpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRlc3Ryb3koKTogdm9pZCB7XG4gICAgICBhY3RpdmVJbnN0YW5jZXMgPSBhY3RpdmVJbnN0YW5jZXMuZmlsdGVyKFxuICAgICAgICAoZGF0YSkgPT4gZGF0YS5pbnN0YW5jZSAhPT0gaW5zdGFuY2VcbiAgICAgICk7XG5cbiAgICAgIGlmIChhY3RpdmVJbnN0YW5jZXMuZmlsdGVyKChkYXRhKSA9PiBkYXRhLmRvYyA9PT0gZG9jKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmVtb3ZlTW91c2VDb29yZHNMaXN0ZW5lcihkb2MpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBvbkNyZWF0ZTogY3JlYXRlLFxuICAgICAgb25EZXN0cm95OiBkZXN0cm95LFxuICAgICAgb25CZWZvcmVVcGRhdGUoKTogdm9pZCB7XG4gICAgICAgIHByZXZQcm9wcyA9IGluc3RhbmNlLnByb3BzO1xuICAgICAgfSxcbiAgICAgIG9uQWZ0ZXJVcGRhdGUoXywge2ZvbGxvd0N1cnNvcn0pOiB2b2lkIHtcbiAgICAgICAgaWYgKGlzSW50ZXJuYWxVcGRhdGUpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXG4gICAgICAgICAgZm9sbG93Q3Vyc29yICE9PSB1bmRlZmluZWQgJiZcbiAgICAgICAgICBwcmV2UHJvcHMuZm9sbG93Q3Vyc29yICE9PSBmb2xsb3dDdXJzb3JcbiAgICAgICAgKSB7XG4gICAgICAgICAgZGVzdHJveSgpO1xuXG4gICAgICAgICAgaWYgKGZvbGxvd0N1cnNvcikge1xuICAgICAgICAgICAgY3JlYXRlKCk7XG5cbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgaW5zdGFuY2Uuc3RhdGUuaXNNb3VudGVkICYmXG4gICAgICAgICAgICAgICF3YXNGb2N1c0V2ZW50ICYmXG4gICAgICAgICAgICAgICFnZXRJc0luaXRpYWxCZWhhdmlvcigpXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgYWRkTGlzdGVuZXIoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVtb3ZlTGlzdGVuZXIoKTtcbiAgICAgICAgICAgIHVuc2V0R2V0UmVmZXJlbmNlQ2xpZW50UmVjdCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIG9uTW91bnQoKTogdm9pZCB7XG4gICAgICAgIGlmIChpbnN0YW5jZS5wcm9wcy5mb2xsb3dDdXJzb3IgJiYgIXdhc0ZvY3VzRXZlbnQpIHtcbiAgICAgICAgICBpZiAoaXNVbm1vdW50ZWQpIHtcbiAgICAgICAgICAgIG9uTW91c2VNb3ZlKG1vdXNlQ29vcmRzIGFzIE1vdXNlRXZlbnQpO1xuICAgICAgICAgICAgaXNVbm1vdW50ZWQgPSBmYWxzZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoIWdldElzSW5pdGlhbEJlaGF2aW9yKCkpIHtcbiAgICAgICAgICAgIGFkZExpc3RlbmVyKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgb25UcmlnZ2VyKF8sIGV2ZW50KTogdm9pZCB7XG4gICAgICAgIGlmIChpc01vdXNlRXZlbnQoZXZlbnQpKSB7XG4gICAgICAgICAgbW91c2VDb29yZHMgPSB7Y2xpZW50WDogZXZlbnQuY2xpZW50WCwgY2xpZW50WTogZXZlbnQuY2xpZW50WX07XG4gICAgICAgIH1cbiAgICAgICAgd2FzRm9jdXNFdmVudCA9IGV2ZW50LnR5cGUgPT09ICdmb2N1cyc7XG4gICAgICB9LFxuICAgICAgb25IaWRkZW4oKTogdm9pZCB7XG4gICAgICAgIGlmIChpbnN0YW5jZS5wcm9wcy5mb2xsb3dDdXJzb3IpIHtcbiAgICAgICAgICB1bnNldEdldFJlZmVyZW5jZUNsaWVudFJlY3QoKTtcbiAgICAgICAgICByZW1vdmVMaXN0ZW5lcigpO1xuICAgICAgICAgIGlzVW5tb3VudGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICB9O1xuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZm9sbG93Q3Vyc29yO1xuIiwgImltcG9ydCB7TW9kaWZpZXIsIFBsYWNlbWVudH0gZnJvbSAnQHBvcHBlcmpzL2NvcmUnO1xuaW1wb3J0IHtpc01vdXNlRXZlbnR9IGZyb20gJy4uL2RvbS11dGlscyc7XG5pbXBvcnQge0Jhc2VQbGFjZW1lbnQsIElubGluZVBvc2l0aW9uaW5nLCBQcm9wc30gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHthcnJheUZyb20sIGdldEJhc2VQbGFjZW1lbnR9IGZyb20gJy4uL3V0aWxzJztcblxuZnVuY3Rpb24gZ2V0UHJvcHMocHJvcHM6IFByb3BzLCBtb2RpZmllcjogTW9kaWZpZXI8YW55LCBhbnk+KTogUGFydGlhbDxQcm9wcz4ge1xuICByZXR1cm4ge1xuICAgIHBvcHBlck9wdGlvbnM6IHtcbiAgICAgIC4uLnByb3BzLnBvcHBlck9wdGlvbnMsXG4gICAgICBtb2RpZmllcnM6IFtcbiAgICAgICAgLi4uKHByb3BzLnBvcHBlck9wdGlvbnM/Lm1vZGlmaWVycyB8fCBbXSkuZmlsdGVyKFxuICAgICAgICAgICh7bmFtZX0pID0+IG5hbWUgIT09IG1vZGlmaWVyLm5hbWVcbiAgICAgICAgKSxcbiAgICAgICAgbW9kaWZpZXIsXG4gICAgICBdLFxuICAgIH0sXG4gIH07XG59XG5cbmNvbnN0IGlubGluZVBvc2l0aW9uaW5nOiBJbmxpbmVQb3NpdGlvbmluZyA9IHtcbiAgbmFtZTogJ2lubGluZVBvc2l0aW9uaW5nJyxcbiAgZGVmYXVsdFZhbHVlOiBmYWxzZSxcbiAgZm4oaW5zdGFuY2UpIHtcbiAgICBjb25zdCB7cmVmZXJlbmNlfSA9IGluc3RhbmNlO1xuXG4gICAgZnVuY3Rpb24gaXNFbmFibGVkKCk6IGJvb2xlYW4ge1xuICAgICAgcmV0dXJuICEhaW5zdGFuY2UucHJvcHMuaW5saW5lUG9zaXRpb25pbmc7XG4gICAgfVxuXG4gICAgbGV0IHBsYWNlbWVudDogUGxhY2VtZW50O1xuICAgIGxldCBjdXJzb3JSZWN0SW5kZXggPSAtMTtcbiAgICBsZXQgaXNJbnRlcm5hbFVwZGF0ZSA9IGZhbHNlO1xuICAgIGxldCB0cmllZFBsYWNlbWVudHM6IEFycmF5PHN0cmluZz4gPSBbXTtcblxuICAgIGNvbnN0IG1vZGlmaWVyOiBNb2RpZmllcjxcbiAgICAgICd0aXBweUlubGluZVBvc2l0aW9uaW5nJyxcbiAgICAgIFJlY29yZDxzdHJpbmcsIHVua25vd24+XG4gICAgPiA9IHtcbiAgICAgIG5hbWU6ICd0aXBweUlubGluZVBvc2l0aW9uaW5nJyxcbiAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICBwaGFzZTogJ2FmdGVyV3JpdGUnLFxuICAgICAgZm4oe3N0YXRlfSkge1xuICAgICAgICBpZiAoaXNFbmFibGVkKCkpIHtcbiAgICAgICAgICBpZiAodHJpZWRQbGFjZW1lbnRzLmluZGV4T2Yoc3RhdGUucGxhY2VtZW50KSAhPT0gLTEpIHtcbiAgICAgICAgICAgIHRyaWVkUGxhY2VtZW50cyA9IFtdO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIHBsYWNlbWVudCAhPT0gc3RhdGUucGxhY2VtZW50ICYmXG4gICAgICAgICAgICB0cmllZFBsYWNlbWVudHMuaW5kZXhPZihzdGF0ZS5wbGFjZW1lbnQpID09PSAtMVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgdHJpZWRQbGFjZW1lbnRzLnB1c2goc3RhdGUucGxhY2VtZW50KTtcbiAgICAgICAgICAgIGluc3RhbmNlLnNldFByb3BzKHtcbiAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZSAtIHVubmVlZGVkIERPTVJlY3QgcHJvcGVydGllc1xuICAgICAgICAgICAgICBnZXRSZWZlcmVuY2VDbGllbnRSZWN0OiAoKSA9PlxuICAgICAgICAgICAgICAgIGdldFJlZmVyZW5jZUNsaWVudFJlY3Qoc3RhdGUucGxhY2VtZW50KSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHBsYWNlbWVudCA9IHN0YXRlLnBsYWNlbWVudDtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gZ2V0UmVmZXJlbmNlQ2xpZW50UmVjdChwbGFjZW1lbnQ6IFBsYWNlbWVudCk6IFBhcnRpYWw8RE9NUmVjdD4ge1xuICAgICAgcmV0dXJuIGdldElubGluZUJvdW5kaW5nQ2xpZW50UmVjdChcbiAgICAgICAgZ2V0QmFzZVBsYWNlbWVudChwbGFjZW1lbnQpLFxuICAgICAgICByZWZlcmVuY2UuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG4gICAgICAgIGFycmF5RnJvbShyZWZlcmVuY2UuZ2V0Q2xpZW50UmVjdHMoKSksXG4gICAgICAgIGN1cnNvclJlY3RJbmRleFxuICAgICAgKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXRJbnRlcm5hbFByb3BzKHBhcnRpYWxQcm9wczogUGFydGlhbDxQcm9wcz4pOiB2b2lkIHtcbiAgICAgIGlzSW50ZXJuYWxVcGRhdGUgPSB0cnVlO1xuICAgICAgaW5zdGFuY2Uuc2V0UHJvcHMocGFydGlhbFByb3BzKTtcbiAgICAgIGlzSW50ZXJuYWxVcGRhdGUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhZGRNb2RpZmllcigpOiB2b2lkIHtcbiAgICAgIGlmICghaXNJbnRlcm5hbFVwZGF0ZSkge1xuICAgICAgICBzZXRJbnRlcm5hbFByb3BzKGdldFByb3BzKGluc3RhbmNlLnByb3BzLCBtb2RpZmllcikpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBvbkNyZWF0ZTogYWRkTW9kaWZpZXIsXG4gICAgICBvbkFmdGVyVXBkYXRlOiBhZGRNb2RpZmllcixcbiAgICAgIG9uVHJpZ2dlcihfLCBldmVudCk6IHZvaWQge1xuICAgICAgICBpZiAoaXNNb3VzZUV2ZW50KGV2ZW50KSkge1xuICAgICAgICAgIGNvbnN0IHJlY3RzID0gYXJyYXlGcm9tKGluc3RhbmNlLnJlZmVyZW5jZS5nZXRDbGllbnRSZWN0cygpKTtcbiAgICAgICAgICBjb25zdCBjdXJzb3JSZWN0ID0gcmVjdHMuZmluZChcbiAgICAgICAgICAgIChyZWN0KSA9PlxuICAgICAgICAgICAgICByZWN0LmxlZnQgLSAyIDw9IGV2ZW50LmNsaWVudFggJiZcbiAgICAgICAgICAgICAgcmVjdC5yaWdodCArIDIgPj0gZXZlbnQuY2xpZW50WCAmJlxuICAgICAgICAgICAgICByZWN0LnRvcCAtIDIgPD0gZXZlbnQuY2xpZW50WSAmJlxuICAgICAgICAgICAgICByZWN0LmJvdHRvbSArIDIgPj0gZXZlbnQuY2xpZW50WVxuICAgICAgICAgICk7XG4gICAgICAgICAgY29uc3QgaW5kZXggPSByZWN0cy5pbmRleE9mKGN1cnNvclJlY3QpO1xuICAgICAgICAgIGN1cnNvclJlY3RJbmRleCA9IGluZGV4ID4gLTEgPyBpbmRleCA6IGN1cnNvclJlY3RJbmRleDtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIG9uSGlkZGVuKCk6IHZvaWQge1xuICAgICAgICBjdXJzb3JSZWN0SW5kZXggPSAtMTtcbiAgICAgIH0sXG4gICAgfTtcbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGlubGluZVBvc2l0aW9uaW5nO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0SW5saW5lQm91bmRpbmdDbGllbnRSZWN0KFxuICBjdXJyZW50QmFzZVBsYWNlbWVudDogQmFzZVBsYWNlbWVudCB8IG51bGwsXG4gIGJvdW5kaW5nUmVjdDogRE9NUmVjdCxcbiAgY2xpZW50UmVjdHM6IERPTVJlY3RbXSxcbiAgY3Vyc29yUmVjdEluZGV4OiBudW1iZXJcbik6IHtcbiAgdG9wOiBudW1iZXI7XG4gIGJvdHRvbTogbnVtYmVyO1xuICBsZWZ0OiBudW1iZXI7XG4gIHJpZ2h0OiBudW1iZXI7XG4gIHdpZHRoOiBudW1iZXI7XG4gIGhlaWdodDogbnVtYmVyO1xufSB7XG4gIC8vIE5vdCBhbiBpbmxpbmUgZWxlbWVudCwgb3IgcGxhY2VtZW50IGlzIG5vdCB5ZXQga25vd25cbiAgaWYgKGNsaWVudFJlY3RzLmxlbmd0aCA8IDIgfHwgY3VycmVudEJhc2VQbGFjZW1lbnQgPT09IG51bGwpIHtcbiAgICByZXR1cm4gYm91bmRpbmdSZWN0O1xuICB9XG5cbiAgLy8gVGhlcmUgYXJlIHR3byByZWN0cyBhbmQgdGhleSBhcmUgZGlzam9pbmVkXG4gIGlmIChcbiAgICBjbGllbnRSZWN0cy5sZW5ndGggPT09IDIgJiZcbiAgICBjdXJzb3JSZWN0SW5kZXggPj0gMCAmJlxuICAgIGNsaWVudFJlY3RzWzBdLmxlZnQgPiBjbGllbnRSZWN0c1sxXS5yaWdodFxuICApIHtcbiAgICByZXR1cm4gY2xpZW50UmVjdHNbY3Vyc29yUmVjdEluZGV4XSB8fCBib3VuZGluZ1JlY3Q7XG4gIH1cblxuICBzd2l0Y2ggKGN1cnJlbnRCYXNlUGxhY2VtZW50KSB7XG4gICAgY2FzZSAndG9wJzpcbiAgICBjYXNlICdib3R0b20nOiB7XG4gICAgICBjb25zdCBmaXJzdFJlY3QgPSBjbGllbnRSZWN0c1swXTtcbiAgICAgIGNvbnN0IGxhc3RSZWN0ID0gY2xpZW50UmVjdHNbY2xpZW50UmVjdHMubGVuZ3RoIC0gMV07XG4gICAgICBjb25zdCBpc1RvcCA9IGN1cnJlbnRCYXNlUGxhY2VtZW50ID09PSAndG9wJztcblxuICAgICAgY29uc3QgdG9wID0gZmlyc3RSZWN0LnRvcDtcbiAgICAgIGNvbnN0IGJvdHRvbSA9IGxhc3RSZWN0LmJvdHRvbTtcbiAgICAgIGNvbnN0IGxlZnQgPSBpc1RvcCA/IGZpcnN0UmVjdC5sZWZ0IDogbGFzdFJlY3QubGVmdDtcbiAgICAgIGNvbnN0IHJpZ2h0ID0gaXNUb3AgPyBmaXJzdFJlY3QucmlnaHQgOiBsYXN0UmVjdC5yaWdodDtcbiAgICAgIGNvbnN0IHdpZHRoID0gcmlnaHQgLSBsZWZ0O1xuICAgICAgY29uc3QgaGVpZ2h0ID0gYm90dG9tIC0gdG9wO1xuXG4gICAgICByZXR1cm4ge3RvcCwgYm90dG9tLCBsZWZ0LCByaWdodCwgd2lkdGgsIGhlaWdodH07XG4gICAgfVxuICAgIGNhc2UgJ2xlZnQnOlxuICAgIGNhc2UgJ3JpZ2h0Jzoge1xuICAgICAgY29uc3QgbWluTGVmdCA9IE1hdGgubWluKC4uLmNsaWVudFJlY3RzLm1hcCgocmVjdHMpID0+IHJlY3RzLmxlZnQpKTtcbiAgICAgIGNvbnN0IG1heFJpZ2h0ID0gTWF0aC5tYXgoLi4uY2xpZW50UmVjdHMubWFwKChyZWN0cykgPT4gcmVjdHMucmlnaHQpKTtcbiAgICAgIGNvbnN0IG1lYXN1cmVSZWN0cyA9IGNsaWVudFJlY3RzLmZpbHRlcigocmVjdCkgPT5cbiAgICAgICAgY3VycmVudEJhc2VQbGFjZW1lbnQgPT09ICdsZWZ0J1xuICAgICAgICAgID8gcmVjdC5sZWZ0ID09PSBtaW5MZWZ0XG4gICAgICAgICAgOiByZWN0LnJpZ2h0ID09PSBtYXhSaWdodFxuICAgICAgKTtcblxuICAgICAgY29uc3QgdG9wID0gbWVhc3VyZVJlY3RzWzBdLnRvcDtcbiAgICAgIGNvbnN0IGJvdHRvbSA9IG1lYXN1cmVSZWN0c1ttZWFzdXJlUmVjdHMubGVuZ3RoIC0gMV0uYm90dG9tO1xuICAgICAgY29uc3QgbGVmdCA9IG1pbkxlZnQ7XG4gICAgICBjb25zdCByaWdodCA9IG1heFJpZ2h0O1xuICAgICAgY29uc3Qgd2lkdGggPSByaWdodCAtIGxlZnQ7XG4gICAgICBjb25zdCBoZWlnaHQgPSBib3R0b20gLSB0b3A7XG5cbiAgICAgIHJldHVybiB7dG9wLCBib3R0b20sIGxlZnQsIHJpZ2h0LCB3aWR0aCwgaGVpZ2h0fTtcbiAgICB9XG4gICAgZGVmYXVsdDoge1xuICAgICAgcmV0dXJuIGJvdW5kaW5nUmVjdDtcbiAgICB9XG4gIH1cbn1cbiIsICJpbXBvcnQge1ZpcnR1YWxFbGVtZW50fSBmcm9tICdAcG9wcGVyanMvY29yZSc7XG5pbXBvcnQge1JlZmVyZW5jZUVsZW1lbnQsIFN0aWNreX0gZnJvbSAnLi4vdHlwZXMnO1xuXG5jb25zdCBzdGlja3k6IFN0aWNreSA9IHtcbiAgbmFtZTogJ3N0aWNreScsXG4gIGRlZmF1bHRWYWx1ZTogZmFsc2UsXG4gIGZuKGluc3RhbmNlKSB7XG4gICAgY29uc3Qge3JlZmVyZW5jZSwgcG9wcGVyfSA9IGluc3RhbmNlO1xuXG4gICAgZnVuY3Rpb24gZ2V0UmVmZXJlbmNlKCk6IFJlZmVyZW5jZUVsZW1lbnQgfCBWaXJ0dWFsRWxlbWVudCB7XG4gICAgICByZXR1cm4gaW5zdGFuY2UucG9wcGVySW5zdGFuY2VcbiAgICAgICAgPyBpbnN0YW5jZS5wb3BwZXJJbnN0YW5jZS5zdGF0ZS5lbGVtZW50cy5yZWZlcmVuY2VcbiAgICAgICAgOiByZWZlcmVuY2U7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2hvdWxkQ2hlY2sodmFsdWU6ICdyZWZlcmVuY2UnIHwgJ3BvcHBlcicpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiBpbnN0YW5jZS5wcm9wcy5zdGlja3kgPT09IHRydWUgfHwgaW5zdGFuY2UucHJvcHMuc3RpY2t5ID09PSB2YWx1ZTtcbiAgICB9XG5cbiAgICBsZXQgcHJldlJlZlJlY3Q6IENsaWVudFJlY3QgfCBudWxsID0gbnVsbDtcbiAgICBsZXQgcHJldlBvcFJlY3Q6IENsaWVudFJlY3QgfCBudWxsID0gbnVsbDtcblxuICAgIGZ1bmN0aW9uIHVwZGF0ZVBvc2l0aW9uKCk6IHZvaWQge1xuICAgICAgY29uc3QgY3VycmVudFJlZlJlY3QgPSBzaG91bGRDaGVjaygncmVmZXJlbmNlJylcbiAgICAgICAgPyBnZXRSZWZlcmVuY2UoKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgICAgICA6IG51bGw7XG4gICAgICBjb25zdCBjdXJyZW50UG9wUmVjdCA9IHNob3VsZENoZWNrKCdwb3BwZXInKVxuICAgICAgICA/IHBvcHBlci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgICAgICA6IG51bGw7XG5cbiAgICAgIGlmIChcbiAgICAgICAgKGN1cnJlbnRSZWZSZWN0ICYmIGFyZVJlY3RzRGlmZmVyZW50KHByZXZSZWZSZWN0LCBjdXJyZW50UmVmUmVjdCkpIHx8XG4gICAgICAgIChjdXJyZW50UG9wUmVjdCAmJiBhcmVSZWN0c0RpZmZlcmVudChwcmV2UG9wUmVjdCwgY3VycmVudFBvcFJlY3QpKVxuICAgICAgKSB7XG4gICAgICAgIGlmIChpbnN0YW5jZS5wb3BwZXJJbnN0YW5jZSkge1xuICAgICAgICAgIGluc3RhbmNlLnBvcHBlckluc3RhbmNlLnVwZGF0ZSgpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHByZXZSZWZSZWN0ID0gY3VycmVudFJlZlJlY3Q7XG4gICAgICBwcmV2UG9wUmVjdCA9IGN1cnJlbnRQb3BSZWN0O1xuXG4gICAgICBpZiAoaW5zdGFuY2Uuc3RhdGUuaXNNb3VudGVkKSB7XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh1cGRhdGVQb3NpdGlvbik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIG9uTW91bnQoKTogdm9pZCB7XG4gICAgICAgIGlmIChpbnN0YW5jZS5wcm9wcy5zdGlja3kpIHtcbiAgICAgICAgICB1cGRhdGVQb3NpdGlvbigpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgIH07XG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBzdGlja3k7XG5cbmZ1bmN0aW9uIGFyZVJlY3RzRGlmZmVyZW50KFxuICByZWN0QTogQ2xpZW50UmVjdCB8IG51bGwsXG4gIHJlY3RCOiBDbGllbnRSZWN0IHwgbnVsbFxuKTogYm9vbGVhbiB7XG4gIGlmIChyZWN0QSAmJiByZWN0Qikge1xuICAgIHJldHVybiAoXG4gICAgICByZWN0QS50b3AgIT09IHJlY3RCLnRvcCB8fFxuICAgICAgcmVjdEEucmlnaHQgIT09IHJlY3RCLnJpZ2h0IHx8XG4gICAgICByZWN0QS5ib3R0b20gIT09IHJlY3RCLmJvdHRvbSB8fFxuICAgICAgcmVjdEEubGVmdCAhPT0gcmVjdEIubGVmdFxuICAgICk7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cbiIsICJpbXBvcnQgdGlwcHkgZnJvbSAnLi4vc3JjJztcbmltcG9ydCB7cmVuZGVyfSBmcm9tICcuLi9zcmMvdGVtcGxhdGUnO1xuXG50aXBweS5zZXREZWZhdWx0UHJvcHMoe3JlbmRlcn0pO1xuXG5leHBvcnQge2RlZmF1bHQsIGhpZGVBbGx9IGZyb20gJy4uL3NyYyc7XG5leHBvcnQge2RlZmF1bHQgYXMgY3JlYXRlU2luZ2xldG9ufSBmcm9tICcuLi9zcmMvYWRkb25zL2NyZWF0ZVNpbmdsZXRvbic7XG5leHBvcnQge2RlZmF1bHQgYXMgZGVsZWdhdGV9IGZyb20gJy4uL3NyYy9hZGRvbnMvZGVsZWdhdGUnO1xuZXhwb3J0IHtkZWZhdWx0IGFzIGFuaW1hdGVGaWxsfSBmcm9tICcuLi9zcmMvcGx1Z2lucy9hbmltYXRlRmlsbCc7XG5leHBvcnQge2RlZmF1bHQgYXMgZm9sbG93Q3Vyc29yfSBmcm9tICcuLi9zcmMvcGx1Z2lucy9mb2xsb3dDdXJzb3InO1xuZXhwb3J0IHtkZWZhdWx0IGFzIGlubGluZVBvc2l0aW9uaW5nfSBmcm9tICcuLi9zcmMvcGx1Z2lucy9pbmxpbmVQb3NpdGlvbmluZyc7XG5leHBvcnQge2RlZmF1bHQgYXMgc3RpY2t5fSBmcm9tICcuLi9zcmMvcGx1Z2lucy9zdGlja3knO1xuZXhwb3J0IHtST1VORF9BUlJPVyBhcyByb3VuZEFycm93fSBmcm9tICcuLi9zcmMvY29uc3RhbnRzJztcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQSxvRkFBQUEsVUFBQUMsU0FBQTtBQUFBO0FBQ0EsUUFBSSxRQUFRLFNBQVUsSUFBSTtBQUN4QixhQUFPLE1BQU0sR0FBRyxTQUFTLFFBQVE7QUFBQSxJQUNuQztBQUdBLElBQUFBLFFBQU87QUFBQSxJQUVMLE1BQU0sT0FBTyxjQUFjLFlB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QnBCLGFBQU9RLE9BQU9ULE1BQU1HLFNBQVNrQixNQUFNZixPQUFPVSxjQUFjSyxLQUF4RDtJQUNEO0VBSUY7QUF6QndFLENBQUE7QU1oQjNFekUsTUFBTXduQixnQkFBZ0I7RUFBQ047QUFBRCxDQUF0Qjs7IiwKICAibmFtZXMiOiBbImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZm4iLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZ2xvYmFsVGhpcyIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJnbG9iYWxUaGlzIiwgIm5hdmlnYXRvciIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJnbG9iYWxUaGlzIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImdsb2JhbFRoaXMiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZm4iLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZ2xvYmFsVGhpcyIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJnbG9iYWxUaGlzIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImdsb2JhbFRoaXMiLCAiU3ltYm9sIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImdsb2JhbFRoaXMiLCAiZG9jdW1lbnQiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImdsb2JhbFRoaXMiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZ2xvYmFsVGhpcyIsICJUeXBlRXJyb3IiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAibWF4IiwgIm1pbiIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJtaW4iLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJleHBvcnRzIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImdsb2JhbFRoaXMiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZ2xvYmFsVGhpcyIsICJKU09OIiwgIlN5bnRheEVycm9yIiwgImVuZCIsICJzdGFydCIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJUaXBweV9leHBvcnRzIiwgIl9fZXhwb3J0IiwgInRpcHB5IiwgInRpcHB5X2VzbV9kZWZhdWx0IiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIl9fdG9Db21tb25KUyIsICJ0b3AiLCAiYm90dG9tIiwgInJpZ2h0IiwgImxlZnQiLCAiYXV0byIsICJiYXNlUGxhY2VtZW50cyIsICJzdGFydCIsICJlbmQiLCAiY2xpcHBpbmdQYXJlbnRzIiwgInZpZXdwb3J0IiwgInBvcHBlciIsICJyZWZlcmVuY2UiLCAidmFyaWF0aW9uUGxhY2VtZW50cyIsICJyZWR1Y2UiLCAiYWNjIiwgInBsYWNlbWVudCIsICJjb25jYXQiLCAicGxhY2VtZW50cyIsICJiZWZvcmVSZWFkIiwgInJlYWQiLCAiYWZ0ZXJSZWFkIiwgImJlZm9yZU1haW4iLCAibWFpbiIsICJhZnRlck1haW4iLCAiYmVmb3JlV3JpdGUiLCAid3JpdGUiLCAiYWZ0ZXJXcml0ZSIsICJtb2RpZmllclBoYXNlcyIsICJnZXROb2RlTmFtZSIsICJlbGVtZW50IiwgIm5vZGVOYW1lIiwgInRvTG93ZXJDYXNlIiwgImdldFdpbmRvdyIsICJub2RlIiwgIndpbmRvdyIsICJ0b1N0cmluZyIsICJvd25lckRvY3VtZW50IiwgImRlZmF1bHRWaWV3IiwgImlzRWxlbWVudCIsICJPd25FbGVtZW50IiwgIkVsZW1lbnQiLCAiaXNIVE1MRWxlbWVudCIsICJIVE1MRWxlbWVudCIsICJpc1NoYWRvd1Jvb3QiLCAiU2hhZG93Um9vdCIsICJhcHBseVN0eWxlcyIsICJfcmVmIiwgInN0YXRlIiwgIk9iamVjdCIsICJrZXlzIiwgImVsZW1lbnRzIiwgImZvckVhY2giLCAibmFtZSIsICJzdHlsZSIsICJzdHlsZXMiLCAiYXR0cmlidXRlcyIsICJhc3NpZ24iLCAibmFtZTIiLCAidmFsdWUiLCAicmVtb3ZlQXR0cmlidXRlIiwgInNldEF0dHJpYnV0ZSIsICJlZmZlY3QiLCAiX3JlZjIiLCAiaW5pdGlhbFN0eWxlcyIsICJwb3NpdGlvbiIsICJvcHRpb25zIiwgInN0cmF0ZWd5IiwgIm1hcmdpbiIsICJhcnJvdyIsICJzdHlsZVByb3BlcnRpZXMiLCAiaGFzT3duUHJvcGVydHkiLCAic3R5bGUyIiwgInByb3BlcnR5IiwgImF0dHJpYnV0ZSIsICJhcHBseVN0eWxlc19kZWZhdWx0IiwgImVuYWJsZWQiLCAicGhhc2UiLCAiZm4iLCAicmVxdWlyZXMiLCAiZ2V0QmFzZVBsYWNlbWVudCIsICJzcGxpdCIsICJtYXgiLCAiTWF0aCIsICJtaW4iLCAicm91bmQiLCAiZ2V0VUFTdHJpbmciLCAidWFEYXRhIiwgIm5hdmlnYXRvciIsICJ1c2VyQWdlbnREYXRhIiwgImJyYW5kcyIsICJBcnJheSIsICJpc0FycmF5IiwgIm1hcCIsICJpdGVtIiwgImJyYW5kIiwgInZlcnNpb24iLCAiam9pbiIsICJ1c2VyQWdlbnQiLCAiaXNMYXlvdXRWaWV3cG9ydCIsICJ0ZXN0IiwgImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsICJpbmNsdWRlU2NhbGUiLCAiaXNGaXhlZFN0cmF0ZWd5IiwgImNsaWVudFJlY3QiLCAic2NhbGVYIiwgInNjYWxlWSIsICJvZmZzZXRXaWR0aCIsICJ3aWR0aCIsICJvZmZzZXRIZWlnaHQiLCAiaGVpZ2h0IiwgInZpc3VhbFZpZXdwb3J0IiwgImFkZFZpc3VhbE9mZnNldHMiLCAieCIsICJvZmZzZXRMZWZ0IiwgInkiLCAib2Zmc2V0VG9wIiwgImdldExheW91dFJlY3QiLCAiYWJzIiwgImNvbnRhaW5zIiwgInBhcmVudCIsICJjaGlsZCIsICJyb290Tm9kZSIsICJnZXRSb290Tm9kZSIsICJuZXh0IiwgImlzU2FtZU5vZGUiLCAicGFyZW50Tm9kZSIsICJob3N0IiwgImdldENvbXB1dGVkU3R5bGUiLCAiaXNUYWJsZUVsZW1lbnQiLCAiaW5kZXhPZiIsICJnZXREb2N1bWVudEVsZW1lbnQiLCAiZG9jdW1lbnQiLCAiZG9jdW1lbnRFbGVtZW50IiwgImdldFBhcmVudE5vZGUiLCAiYXNzaWduZWRTbG90IiwgImdldFRydWVPZmZzZXRQYXJlbnQiLCAib2Zmc2V0UGFyZW50IiwgImdldENvbnRhaW5pbmdCbG9jayIsICJpc0ZpcmVmb3giLCAiaXNJRSIsICJlbGVtZW50Q3NzIiwgImN1cnJlbnROb2RlIiwgImNzcyIsICJ0cmFuc2Zvcm0iLCAicGVyc3BlY3RpdmUiLCAiY29udGFpbiIsICJ3aWxsQ2hhbmdlIiwgImZpbHRlciIsICJnZXRPZmZzZXRQYXJlbnQiLCAiZ2V0TWFpbkF4aXNGcm9tUGxhY2VtZW50IiwgIndpdGhpbiIsICJtaW4yIiwgIm1heDIiLCAid2l0aGluTWF4Q2xhbXAiLCAidiIsICJnZXRGcmVzaFNpZGVPYmplY3QiLCAibWVyZ2VQYWRkaW5nT2JqZWN0IiwgInBhZGRpbmdPYmplY3QiLCAiZXhwYW5kVG9IYXNoTWFwIiwgImhhc2hNYXAiLCAia2V5IiwgInRvUGFkZGluZ09iamVjdCIsICJwYWRkaW5nIiwgInJlY3RzIiwgIl9zdGF0ZSRtb2RpZmllcnNEYXRhJCIsICJhcnJvd0VsZW1lbnQiLCAicG9wcGVyT2Zmc2V0cyIsICJtb2RpZmllcnNEYXRhIiwgImJhc2VQbGFjZW1lbnQiLCAiYXhpcyIsICJpc1ZlcnRpY2FsIiwgImxlbiIsICJhcnJvd1JlY3QiLCAibWluUHJvcCIsICJtYXhQcm9wIiwgImVuZERpZmYiLCAic3RhcnREaWZmIiwgImFycm93T2Zmc2V0UGFyZW50IiwgImNsaWVudFNpemUiLCAiY2xpZW50SGVpZ2h0IiwgImNsaWVudFdpZHRoIiwgImNlbnRlclRvUmVmZXJlbmNlIiwgImNlbnRlciIsICJvZmZzZXQiLCAiYXhpc1Byb3AiLCAiY2VudGVyT2Zmc2V0IiwgIm9mZnNldDIiLCAiX29wdGlvbnMkZWxlbWVudCIsICJxdWVyeVNlbGVjdG9yIiwgImFycm93X2RlZmF1bHQiLCAicmVxdWlyZXNJZkV4aXN0cyIsICJnZXRWYXJpYXRpb24iLCAidW5zZXRTaWRlcyIsICJyb3VuZE9mZnNldHNCeURQUiIsICJ3aW4iLCAiZHByIiwgImRldmljZVBpeGVsUmF0aW8iLCAibWFwVG9TdHlsZXMiLCAiX09iamVjdCRhc3NpZ24yIiwgInBvcHBlclJlY3QiLCAidmFyaWF0aW9uIiwgIm9mZnNldHMiLCAiZ3B1QWNjZWxlcmF0aW9uIiwgImFkYXB0aXZlIiwgInJvdW5kT2Zmc2V0cyIsICJpc0ZpeGVkIiwgIl9vZmZzZXRzJHgiLCAiX29mZnNldHMkeSIsICJfcmVmMyIsICJoYXNYIiwgImhhc1kiLCAic2lkZVgiLCAic2lkZVkiLCAiaGVpZ2h0UHJvcCIsICJ3aWR0aFByb3AiLCAib2Zmc2V0WSIsICJvZmZzZXRYIiwgImNvbW1vblN0eWxlcyIsICJfcmVmNCIsICJfT2JqZWN0JGFzc2lnbiIsICJjb21wdXRlU3R5bGVzIiwgIl9yZWY1IiwgIl9vcHRpb25zJGdwdUFjY2VsZXJhdCIsICJfb3B0aW9ucyRhZGFwdGl2ZSIsICJfb3B0aW9ucyRyb3VuZE9mZnNldHMiLCAiY29tcHV0ZVN0eWxlc19kZWZhdWx0IiwgImRhdGEiLCAicGFzc2l2ZSIsICJpbnN0YW5jZSIsICJfb3B0aW9ucyRzY3JvbGwiLCAic2Nyb2xsIiwgIl9vcHRpb25zJHJlc2l6ZSIsICJyZXNpemUiLCAic2Nyb2xsUGFyZW50cyIsICJzY3JvbGxQYXJlbnQiLCAiYWRkRXZlbnRMaXN0ZW5lciIsICJ1cGRhdGUiLCAicmVtb3ZlRXZlbnRMaXN0ZW5lciIsICJldmVudExpc3RlbmVyc19kZWZhdWx0IiwgImhhc2giLCAiZ2V0T3Bwb3NpdGVQbGFjZW1lbnQiLCAicmVwbGFjZSIsICJtYXRjaGVkIiwgImdldE9wcG9zaXRlVmFyaWF0aW9uUGxhY2VtZW50IiwgImdldFdpbmRvd1Njcm9sbCIsICJzY3JvbGxMZWZ0IiwgInBhZ2VYT2Zmc2V0IiwgInNjcm9sbFRvcCIsICJwYWdlWU9mZnNldCIsICJnZXRXaW5kb3dTY3JvbGxCYXJYIiwgImdldFZpZXdwb3J0UmVjdCIsICJodG1sIiwgImxheW91dFZpZXdwb3J0IiwgImdldERvY3VtZW50UmVjdCIsICJfZWxlbWVudCRvd25lckRvY3VtZW4iLCAid2luU2Nyb2xsIiwgImJvZHkiLCAic2Nyb2xsV2lkdGgiLCAic2Nyb2xsSGVpZ2h0IiwgImRpcmVjdGlvbiIsICJpc1Njcm9sbFBhcmVudCIsICJfZ2V0Q29tcHV0ZWRTdHlsZSIsICJvdmVyZmxvdyIsICJvdmVyZmxvd1giLCAib3ZlcmZsb3dZIiwgImdldFNjcm9sbFBhcmVudCIsICJsaXN0U2Nyb2xsUGFyZW50cyIsICJsaXN0IiwgImlzQm9keSIsICJ0YXJnZXQiLCAidXBkYXRlZExpc3QiLCAicmVjdFRvQ2xpZW50UmVjdCIsICJyZWN0IiwgImdldElubmVyQm91bmRpbmdDbGllbnRSZWN0IiwgImNsaWVudFRvcCIsICJjbGllbnRMZWZ0IiwgImdldENsaWVudFJlY3RGcm9tTWl4ZWRUeXBlIiwgImNsaXBwaW5nUGFyZW50IiwgImdldENsaXBwaW5nUGFyZW50cyIsICJjYW5Fc2NhcGVDbGlwcGluZyIsICJjbGlwcGVyRWxlbWVudCIsICJnZXRDbGlwcGluZ1JlY3QiLCAiYm91bmRhcnkiLCAicm9vdEJvdW5kYXJ5IiwgIm1haW5DbGlwcGluZ1BhcmVudHMiLCAiZmlyc3RDbGlwcGluZ1BhcmVudCIsICJjbGlwcGluZ1JlY3QiLCAiYWNjUmVjdCIsICJjb21wdXRlT2Zmc2V0cyIsICJjb21tb25YIiwgInJlZmVyZW5jZTIiLCAiY29tbW9uWSIsICJtYWluQXhpcyIsICJkZXRlY3RPdmVyZmxvdyIsICJfb3B0aW9ucyIsICJfb3B0aW9ucyRwbGFjZW1lbnQiLCAiX29wdGlvbnMkc3RyYXRlZ3kiLCAiX29wdGlvbnMkYm91bmRhcnkiLCAiX29wdGlvbnMkcm9vdEJvdW5kYXJ5IiwgIl9vcHRpb25zJGVsZW1lbnRDb250ZSIsICJlbGVtZW50Q29udGV4dCIsICJfb3B0aW9ucyRhbHRCb3VuZGFyeSIsICJhbHRCb3VuZGFyeSIsICJfb3B0aW9ucyRwYWRkaW5nIiwgImFsdENvbnRleHQiLCAiY2xpcHBpbmdDbGllbnRSZWN0IiwgImNvbnRleHRFbGVtZW50IiwgInJlZmVyZW5jZUNsaWVudFJlY3QiLCAicG9wcGVyQ2xpZW50UmVjdCIsICJlbGVtZW50Q2xpZW50UmVjdCIsICJvdmVyZmxvd09mZnNldHMiLCAib2Zmc2V0RGF0YSIsICJtdWx0aXBseSIsICJjb21wdXRlQXV0b1BsYWNlbWVudCIsICJmbGlwVmFyaWF0aW9ucyIsICJfb3B0aW9ucyRhbGxvd2VkQXV0b1AiLCAiYWxsb3dlZEF1dG9QbGFjZW1lbnRzIiwgImFsbG93ZWRQbGFjZW1lbnRzIiwgImxlbmd0aCIsICJvdmVyZmxvd3MiLCAicGxhY2VtZW50MiIsICJzb3J0IiwgImEiLCAiYiIsICJnZXRFeHBhbmRlZEZhbGxiYWNrUGxhY2VtZW50cyIsICJvcHBvc2l0ZVBsYWNlbWVudCIsICJmbGlwIiwgIl9za2lwIiwgIl9vcHRpb25zJG1haW5BeGlzIiwgImNoZWNrTWFpbkF4aXMiLCAiX29wdGlvbnMkYWx0QXhpcyIsICJhbHRBeGlzIiwgImNoZWNrQWx0QXhpcyIsICJzcGVjaWZpZWRGYWxsYmFja1BsYWNlbWVudHMiLCAiZmFsbGJhY2tQbGFjZW1lbnRzIiwgIl9vcHRpb25zJGZsaXBWYXJpYXRpbyIsICJwcmVmZXJyZWRQbGFjZW1lbnQiLCAiaXNCYXNlUGxhY2VtZW50IiwgInJlZmVyZW5jZVJlY3QiLCAiY2hlY2tzTWFwIiwgIk1hcCIsICJtYWtlRmFsbGJhY2tDaGVja3MiLCAiZmlyc3RGaXR0aW5nUGxhY2VtZW50IiwgImkiLCAiX2Jhc2VQbGFjZW1lbnQiLCAiaXNTdGFydFZhcmlhdGlvbiIsICJtYWluVmFyaWF0aW9uU2lkZSIsICJhbHRWYXJpYXRpb25TaWRlIiwgImNoZWNrcyIsICJwdXNoIiwgImV2ZXJ5IiwgImNoZWNrIiwgInNldCIsICJudW1iZXJPZkNoZWNrcyIsICJfbG9vcCIsICJfaTIiLCAiZml0dGluZ1BsYWNlbWVudCIsICJmaW5kIiwgImdldCIsICJzbGljZSIsICJfaSIsICJfcmV0IiwgInJlc2V0IiwgImZsaXBfZGVmYXVsdCIsICJnZXRTaWRlT2Zmc2V0cyIsICJwcmV2ZW50ZWRPZmZzZXRzIiwgImlzQW55U2lkZUZ1bGx5Q2xpcHBlZCIsICJzb21lIiwgInNpZGUiLCAiaGlkZSIsICJwcmV2ZW50T3ZlcmZsb3ciLCAicmVmZXJlbmNlT3ZlcmZsb3ciLCAicG9wcGVyQWx0T3ZlcmZsb3ciLCAicmVmZXJlbmNlQ2xpcHBpbmdPZmZzZXRzIiwgInBvcHBlckVzY2FwZU9mZnNldHMiLCAiaXNSZWZlcmVuY2VIaWRkZW4iLCAiaGFzUG9wcGVyRXNjYXBlZCIsICJoaWRlX2RlZmF1bHQiLCAiZGlzdGFuY2VBbmRTa2lkZGluZ1RvWFkiLCAiaW52ZXJ0RGlzdGFuY2UiLCAic2tpZGRpbmciLCAiZGlzdGFuY2UiLCAiX29wdGlvbnMkb2Zmc2V0IiwgIl9kYXRhJHN0YXRlJHBsYWNlbWVudCIsICJvZmZzZXRfZGVmYXVsdCIsICJwb3BwZXJPZmZzZXRzX2RlZmF1bHQiLCAiZ2V0QWx0QXhpcyIsICJfb3B0aW9ucyR0ZXRoZXIiLCAidGV0aGVyIiwgIl9vcHRpb25zJHRldGhlck9mZnNldCIsICJ0ZXRoZXJPZmZzZXQiLCAidGV0aGVyT2Zmc2V0VmFsdWUiLCAibm9ybWFsaXplZFRldGhlck9mZnNldFZhbHVlIiwgIm9mZnNldE1vZGlmaWVyU3RhdGUiLCAiX29mZnNldE1vZGlmaWVyU3RhdGUkIiwgIm1haW5TaWRlIiwgImFsdFNpZGUiLCAicG9wcGVyT2Zmc2V0czIiLCAiYWRkaXRpdmUiLCAibWluTGVuIiwgIm1heExlbiIsICJhcnJvd1BhZGRpbmdPYmplY3QiLCAiYXJyb3dQYWRkaW5nTWluIiwgImFycm93UGFkZGluZ01heCIsICJhcnJvd0xlbiIsICJtaW5PZmZzZXQiLCAibWF4T2Zmc2V0IiwgImNsaWVudE9mZnNldCIsICJvZmZzZXRNb2RpZmllclZhbHVlIiwgInRldGhlck1pbiIsICJ0ZXRoZXJNYXgiLCAicHJldmVudGVkT2Zmc2V0IiwgIl9vZmZzZXRNb2RpZmllclN0YXRlJDIiLCAiX21haW5TaWRlIiwgIl9hbHRTaWRlIiwgIl9vZmZzZXQiLCAiX2xlbiIsICJfbWluIiwgIl9tYXgiLCAiaXNPcmlnaW5TaWRlIiwgIl9vZmZzZXRNb2RpZmllclZhbHVlIiwgIl90ZXRoZXJNaW4iLCAiX3RldGhlck1heCIsICJfcHJldmVudGVkT2Zmc2V0IiwgInByZXZlbnRPdmVyZmxvd19kZWZhdWx0IiwgImdldEhUTUxFbGVtZW50U2Nyb2xsIiwgImdldE5vZGVTY3JvbGwiLCAiaXNFbGVtZW50U2NhbGVkIiwgImdldENvbXBvc2l0ZVJlY3QiLCAiZWxlbWVudE9yVmlydHVhbEVsZW1lbnQiLCAiaXNPZmZzZXRQYXJlbnRBbkVsZW1lbnQiLCAib2Zmc2V0UGFyZW50SXNTY2FsZWQiLCAib3JkZXIiLCAibW9kaWZpZXJzIiwgInZpc2l0ZWQiLCAiU2V0IiwgInJlc3VsdCIsICJtb2RpZmllciIsICJhZGQiLCAiZGVwIiwgImhhcyIsICJkZXBNb2RpZmllciIsICJvcmRlck1vZGlmaWVycyIsICJvcmRlcmVkTW9kaWZpZXJzIiwgImRlYm91bmNlIiwgImZuMiIsICJwZW5kaW5nIiwgIlByb21pc2UiLCAicmVzb2x2ZSIsICJ0aGVuIiwgIm1lcmdlQnlOYW1lIiwgIm1lcmdlZCIsICJtZXJnZWQyIiwgImN1cnJlbnQiLCAiZXhpc3RpbmciLCAiREVGQVVMVF9PUFRJT05TIiwgImFyZVZhbGlkRWxlbWVudHMiLCAiYXJndW1lbnRzIiwgImFyZ3MiLCAiX2tleSIsICJwb3BwZXJHZW5lcmF0b3IiLCAiZ2VuZXJhdG9yT3B0aW9ucyIsICJfZ2VuZXJhdG9yT3B0aW9ucyIsICJfZ2VuZXJhdG9yT3B0aW9ucyRkZWYiLCAiZGVmYXVsdE1vZGlmaWVycyIsICJkZWZhdWx0TW9kaWZpZXJzMiIsICJfZ2VuZXJhdG9yT3B0aW9ucyRkZWYyIiwgImRlZmF1bHRPcHRpb25zIiwgImNyZWF0ZVBvcHBlciIsICJwb3BwZXIyIiwgImVmZmVjdENsZWFudXBGbnMiLCAiaXNEZXN0cm95ZWQiLCAic2V0T3B0aW9ucyIsICJzZXRPcHRpb25zQWN0aW9uIiwgImNsZWFudXBNb2RpZmllckVmZmVjdHMiLCAibSIsICJydW5Nb2RpZmllckVmZmVjdHMiLCAiZm9yY2VVcGRhdGUiLCAiX3N0YXRlJGVsZW1lbnRzIiwgInJlZmVyZW5jZTMiLCAicG9wcGVyMyIsICJpbmRleCIsICJfc3RhdGUkb3JkZXJlZE1vZGlmaWUiLCAiX3N0YXRlJG9yZGVyZWRNb2RpZmllMiIsICJkZXN0cm95IiwgInN0YXRlMiIsICJvbkZpcnN0VXBkYXRlIiwgIl9yZWYkb3B0aW9ucyIsICJvcHRpb25zMiIsICJlZmZlY3Q1IiwgImNsZWFudXBGbiIsICJub29wRm4iLCAiQk9YX0NMQVNTIiwgIkNPTlRFTlRfQ0xBU1MiLCAiQkFDS0RST1BfQ0xBU1MiLCAiQVJST1dfQ0xBU1MiLCAiU1ZHX0FSUk9XX0NMQVNTIiwgIlRPVUNIX09QVElPTlMiLCAiY2FwdHVyZSIsICJUSVBQWV9ERUZBVUxUX0FQUEVORF9UTyIsICJUSVBQWV9ERUZBVUxUX0FQUEVORF9UTzIiLCAiZ2V0VmFsdWVBdEluZGV4T3JSZXR1cm4iLCAiZGVmYXVsdFZhbHVlIiwgImlzVHlwZSIsICJ0eXBlIiwgInN0ciIsICJjYWxsIiwgImludm9rZVdpdGhBcmdzT3JSZXR1cm4iLCAiYXBwbHkiLCAiZGVib3VuY2UyIiwgIm1zIiwgInRpbWVvdXQiLCAiYXJnIiwgImNsZWFyVGltZW91dCIsICJzZXRUaW1lb3V0IiwgInNwbGl0QnlTcGFjZXMiLCAiQm9vbGVhbiIsICJub3JtYWxpemVUb0FycmF5IiwgInB1c2hJZlVuaXF1ZSIsICJhcnIiLCAidW5pcXVlIiwgImdldEJhc2VQbGFjZW1lbnQyIiwgImFycmF5RnJvbSIsICJyZW1vdmVVbmRlZmluZWRQcm9wcyIsICJvYmoiLCAiZGl2IiwgImNyZWF0ZUVsZW1lbnQiLCAiaXNFbGVtZW50MiIsICJpc05vZGVMaXN0IiwgImlzTW91c2VFdmVudCIsICJpc1JlZmVyZW5jZUVsZW1lbnQiLCAiX3RpcHB5IiwgImdldEFycmF5T2ZFbGVtZW50cyIsICJxdWVyeVNlbGVjdG9yQWxsIiwgInNldFRyYW5zaXRpb25EdXJhdGlvbiIsICJlbHMiLCAiZWwiLCAidHJhbnNpdGlvbkR1cmF0aW9uIiwgInNldFZpc2liaWxpdHlTdGF0ZSIsICJnZXRPd25lckRvY3VtZW50IiwgImVsZW1lbnRPckVsZW1lbnRzIiwgIl9ub3JtYWxpemVUb0FycmF5IiwgImlzQ3Vyc29yT3V0c2lkZUludGVyYWN0aXZlQm9yZGVyIiwgInBvcHBlclRyZWVEYXRhIiwgImV2ZW50IiwgImNsaWVudFgiLCAiY2xpZW50WSIsICJwb3BwZXJTdGF0ZSIsICJwcm9wcyIsICJpbnRlcmFjdGl2ZUJvcmRlciIsICJ0b3BEaXN0YW5jZSIsICJib3R0b21EaXN0YW5jZSIsICJsZWZ0RGlzdGFuY2UiLCAicmlnaHREaXN0YW5jZSIsICJleGNlZWRzVG9wIiwgImV4Y2VlZHNCb3R0b20iLCAiZXhjZWVkc0xlZnQiLCAiZXhjZWVkc1JpZ2h0IiwgInVwZGF0ZVRyYW5zaXRpb25FbmRMaXN0ZW5lciIsICJib3giLCAiYWN0aW9uIiwgImxpc3RlbmVyIiwgIm1ldGhvZCIsICJhY3R1YWxDb250YWlucyIsICJfdGFyZ2V0JGdldFJvb3ROb2RlIiwgImN1cnJlbnRJbnB1dCIsICJpc1RvdWNoIiwgImxhc3RNb3VzZU1vdmVUaW1lIiwgIm9uRG9jdW1lbnRUb3VjaFN0YXJ0IiwgInBlcmZvcm1hbmNlIiwgIm9uRG9jdW1lbnRNb3VzZU1vdmUiLCAibm93IiwgIm9uV2luZG93Qmx1ciIsICJhY3RpdmVFbGVtZW50IiwgImJsdXIiLCAiaXNWaXNpYmxlIiwgImJpbmRHbG9iYWxFdmVudExpc3RlbmVycyIsICJpc0Jyb3dzZXIiLCAiaXNJRTExIiwgIm1zQ3J5cHRvIiwgInJlc2V0VmlzaXRlZE1lc3NhZ2VzIiwgInBsdWdpblByb3BzIiwgImFuaW1hdGVGaWxsIiwgImZvbGxvd0N1cnNvciIsICJpbmxpbmVQb3NpdGlvbmluZyIsICJzdGlja3kiLCAicmVuZGVyUHJvcHMiLCAiYWxsb3dIVE1MIiwgImFuaW1hdGlvbiIsICJjb250ZW50IiwgImluZXJ0aWEiLCAibWF4V2lkdGgiLCAicm9sZSIsICJ0aGVtZSIsICJ6SW5kZXgiLCAiZGVmYXVsdFByb3BzIiwgImFwcGVuZFRvIiwgImFyaWEiLCAiZXhwYW5kZWQiLCAiZGVsYXkiLCAiZHVyYXRpb24iLCAiZ2V0UmVmZXJlbmNlQ2xpZW50UmVjdCIsICJoaWRlT25DbGljayIsICJpZ25vcmVBdHRyaWJ1dGVzIiwgImludGVyYWN0aXZlIiwgImludGVyYWN0aXZlRGVib3VuY2UiLCAibW92ZVRyYW5zaXRpb24iLCAib25BZnRlclVwZGF0ZSIsICJvbkJlZm9yZVVwZGF0ZSIsICJvbkNyZWF0ZSIsICJvbkRlc3Ryb3kiLCAib25IaWRkZW4iLCAib25IaWRlIiwgIm9uTW91bnQiLCAib25TaG93IiwgIm9uU2hvd24iLCAib25UcmlnZ2VyIiwgIm9uVW50cmlnZ2VyIiwgIm9uQ2xpY2tPdXRzaWRlIiwgInBsdWdpbnMiLCAicG9wcGVyT3B0aW9ucyIsICJyZW5kZXIiLCAic2hvd09uQ3JlYXRlIiwgInRvdWNoIiwgInRyaWdnZXIiLCAidHJpZ2dlclRhcmdldCIsICJkZWZhdWx0S2V5cyIsICJzZXREZWZhdWx0UHJvcHMiLCAic2V0RGVmYXVsdFByb3BzMiIsICJwYXJ0aWFsUHJvcHMiLCAidmFsaWRhdGVQcm9wcyIsICJnZXRFeHRlbmRlZFBhc3NlZFByb3BzIiwgInBhc3NlZFByb3BzIiwgInBsdWdpblByb3BzMiIsICJwbHVnaW4iLCAiX25hbWUiLCAiZ2V0RGF0YUF0dHJpYnV0ZVByb3BzIiwgInByb3BLZXlzIiwgInZhbHVlQXNTdHJpbmciLCAiZ2V0QXR0cmlidXRlIiwgInRyaW0iLCAiSlNPTiIsICJwYXJzZSIsICJlIiwgImV2YWx1YXRlUHJvcHMiLCAib3V0IiwgImlubmVySFRNTCIsICJpbm5lckhUTUwyIiwgImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwgImNyZWF0ZUFycm93RWxlbWVudCIsICJhcnJvdzIiLCAiY2xhc3NOYW1lIiwgImFwcGVuZENoaWxkIiwgInNldENvbnRlbnQiLCAidGV4dENvbnRlbnQiLCAiZ2V0Q2hpbGRyZW4iLCAiZmlyc3RFbGVtZW50Q2hpbGQiLCAiYm94Q2hpbGRyZW4iLCAiY2hpbGRyZW4iLCAiY2xhc3NMaXN0IiwgImJhY2tkcm9wIiwgIm9uVXBkYXRlIiwgInByZXZQcm9wcyIsICJuZXh0UHJvcHMiLCAiX2dldENoaWxkcmVuIiwgImJveDIiLCAiY29udGVudDIiLCAicmVtb3ZlQ2hpbGQiLCAiJCR0aXBweSIsICJpZENvdW50ZXIiLCAibW91c2VNb3ZlTGlzdGVuZXJzIiwgIm1vdW50ZWRJbnN0YW5jZXMiLCAiY3JlYXRlVGlwcHkiLCAic2hvd1RpbWVvdXQiLCAiaGlkZVRpbWVvdXQiLCAic2NoZWR1bGVIaWRlQW5pbWF0aW9uRnJhbWUiLCAiaXNWaXNpYmxlRnJvbUNsaWNrIiwgImRpZEhpZGVEdWVUb0RvY3VtZW50TW91c2VEb3duIiwgImRpZFRvdWNoTW92ZSIsICJpZ25vcmVPbkZpcnN0VXBkYXRlIiwgImxhc3RUcmlnZ2VyRXZlbnQiLCAiY3VycmVudFRyYW5zaXRpb25FbmRMaXN0ZW5lciIsICJsaXN0ZW5lcnMiLCAiZGVib3VuY2VkT25Nb3VzZU1vdmUiLCAib25Nb3VzZU1vdmUiLCAiY3VycmVudFRhcmdldCIsICJpZCIsICJwb3BwZXJJbnN0YW5jZSIsICJpc0VuYWJsZWQiLCAiaXNNb3VudGVkIiwgImlzU2hvd24iLCAiY2xlYXJEZWxheVRpbWVvdXRzIiwgInNldFByb3BzIiwgInNldENvbnRlbnQyIiwgInNob3ciLCAiaGlkZTIiLCAiaGlkZVdpdGhJbnRlcmFjdGl2aXR5IiwgImVuYWJsZSIsICJkaXNhYmxlIiwgInVubW91bnQiLCAiZXJyb3JXaGVuIiwgIl9wcm9wcyRyZW5kZXIiLCAicGx1Z2luc0hvb2tzIiwgImhhc0FyaWFFeHBhbmRlZCIsICJoYXNBdHRyaWJ1dGUiLCAiYWRkTGlzdGVuZXJzIiwgImhhbmRsZUFyaWFFeHBhbmRlZEF0dHJpYnV0ZSIsICJoYW5kbGVTdHlsZXMiLCAiaW52b2tlSG9vayIsICJzY2hlZHVsZVNob3ciLCAiZ2V0RG9jdW1lbnQiLCAiZ2V0Tm9ybWFsaXplZFRvdWNoU2V0dGluZ3MiLCAiZ2V0SXNDdXN0b21Ub3VjaEJlaGF2aW9yIiwgImdldElzRGVmYXVsdFJlbmRlckZuIiwgIl9pbnN0YW5jZSRwcm9wcyRyZW5kZSIsICJnZXRDdXJyZW50VGFyZ2V0IiwgImdldERlZmF1bHRUZW1wbGF0ZUNoaWxkcmVuIiwgImdldERlbGF5IiwgImlzU2hvdyIsICJmcm9tSGlkZSIsICJwb2ludGVyRXZlbnRzIiwgImhvb2siLCAic2hvdWxkSW52b2tlUHJvcHNIb29rIiwgInBsdWdpbkhvb2tzIiwgIl9pbnN0YW5jZSRwcm9wcyIsICJoYW5kbGVBcmlhQ29udGVudEF0dHJpYnV0ZSIsICJhdHRyIiwgImlkMiIsICJub2RlcyIsICJjdXJyZW50VmFsdWUiLCAibmV4dFZhbHVlIiwgImNsZWFudXBJbnRlcmFjdGl2ZU1vdXNlTGlzdGVuZXJzIiwgIm9uRG9jdW1lbnRQcmVzcyIsICJhY3R1YWxUYXJnZXQiLCAiY29tcG9zZWRQYXRoIiwgInJlbW92ZURvY3VtZW50UHJlc3MiLCAib25Ub3VjaE1vdmUiLCAib25Ub3VjaFN0YXJ0IiwgImFkZERvY3VtZW50UHJlc3MiLCAiZG9jIiwgIm9uVHJhbnNpdGlvbmVkT3V0IiwgImNhbGxiYWNrIiwgIm9uVHJhbnNpdGlvbkVuZCIsICJvblRyYW5zaXRpb25lZEluIiwgIm9uIiwgImV2ZW50VHlwZSIsICJoYW5kbGVyIiwgIm9uTW91c2VMZWF2ZSIsICJvbkJsdXJPckZvY3VzT3V0IiwgInJlbW92ZUxpc3RlbmVycyIsICJfbGFzdFRyaWdnZXJFdmVudCIsICJzaG91bGRTY2hlZHVsZUNsaWNrSGlkZSIsICJpc0V2ZW50TGlzdGVuZXJTdG9wcGVkIiwgIndhc0ZvY3VzZWQiLCAic2NoZWR1bGVIaWRlIiwgImlzQ3Vyc29yT3ZlclJlZmVyZW5jZU9yUG9wcGVyIiwgImdldE5lc3RlZFBvcHBlclRyZWUiLCAiX2luc3RhbmNlJHBvcHBlckluc3RhIiwgImluc3RhbmNlMiIsICJzaG91bGRCYWlsIiwgInJlbGF0ZWRUYXJnZXQiLCAiY3JlYXRlUG9wcGVySW5zdGFuY2UiLCAiZGVzdHJveVBvcHBlckluc3RhbmNlIiwgIl9pbnN0YW5jZSRwcm9wczIiLCAiY29tcHV0ZWRSZWZlcmVuY2UiLCAidGlwcHlNb2RpZmllciIsICJfZ2V0RGVmYXVsdFRlbXBsYXRlQ2giLCAibW91bnQiLCAid2FybldoZW4iLCAibmV4dEVsZW1lbnRTaWJsaW5nIiwgIl9nZXROb3JtYWxpemVkVG91Y2hTZSIsICJ0b3VjaFZhbHVlIiwgInRvdWNoRGVsYXkiLCAicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwgImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwgImNyZWF0ZU1lbW9yeUxlYWtXYXJuaW5nIiwgIm5lc3RlZFBvcHBlciIsICJpc0FscmVhZHlWaXNpYmxlIiwgImlzRGlzYWJsZWQiLCAiaXNUb3VjaEFuZFRvdWNoRGlzYWJsZWQiLCAidmlzaWJpbGl0eSIsICJ0cmFuc2l0aW9uIiwgIl9nZXREZWZhdWx0VGVtcGxhdGVDaDIiLCAib25GaXJzdFVwZGF0ZTIiLCAiX2luc3RhbmNlJHBvcHBlckluc3RhMiIsICJfZ2V0RGVmYXVsdFRlbXBsYXRlQ2gzIiwgIl9ib3giLCAiX2NvbnRlbnQiLCAiaXNBbHJlYWR5SGlkZGVuIiwgIl9nZXREZWZhdWx0VGVtcGxhdGVDaDQiLCAidGFyZ2V0cyIsICJvcHRpb25hbFByb3BzIiwgInZhbGlkYXRlVGFyZ2V0cyIsICJpc1NpbmdsZUNvbnRlbnRFbGVtZW50IiwgImlzTW9yZVRoYW5PbmVSZWZlcmVuY2VFbGVtZW50IiwgImluc3RhbmNlcyIsICJhcHBseVN0eWxlc01vZGlmaWVyIiwgImVmZmVjdDQiXQp9Cg==

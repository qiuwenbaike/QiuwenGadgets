/**
 * SPDX-License-Identifier: MIT
 * _addText: '{{Gadget Header|license=MIT|attribution=2025-present dragon-fish}}'
 *
 * @base {@link hthttps://github.com/inpageedit/inpageedit-next/tree/master/packages/idb-plus}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/idb-plus}
 * @license MIT {@link https://github.com/inpageedit/inpageedit-next/blob/master/packages/idb-plus/LICENSE}
 */

/**
 * MIT License
 *
 * Copyright (c) 2025 dragon-fish
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
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

// node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/global-this.js
var require_global_this = __commonJS({
  "node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/global-this.js"(exports2, module2) {
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

// node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/fails.js
var require_fails = __commonJS({
  "node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/fails.js"(exports2, module2) {
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

// node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/descriptors.js
var require_descriptors = __commonJS({
  "node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/descriptors.js"(exports2, module2) {
    "use strict";
    var fails = require_fails();
    module2.exports = !fails(function() {
      return Object.defineProperty({}, 1, { get: function() {
        return 7;
      } })[1] !== 7;
    });
  }
});

// node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/function-bind-native.js
var require_function_bind_native = __commonJS({
  "node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/function-bind-native.js"(exports2, module2) {
    "use strict";
    var fails = require_fails();
    module2.exports = !fails(function() {
      var test = function() {
      }.bind();
      return typeof test != "function" || test.hasOwnProperty("prototype");
    });
  }
});

// node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/function-call.js
var require_function_call = __commonJS({
  "node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/function-call.js"(exports2, module2) {
    "use strict";
    var NATIVE_BIND = require_function_bind_native();
    var call = Function.prototype.call;
    module2.exports = NATIVE_BIND ? call.bind(call) : function() {
      return call.apply(call, arguments);
    };
  }
});

// node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/object-property-is-enumerable.js
var require_object_property_is_enumerable = __commonJS({
  "node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/object-property-is-enumerable.js"(exports2) {
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

// node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/create-property-descriptor.js
var require_create_property_descriptor = __commonJS({
  "node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/create-property-descriptor.js"(exports2, module2) {
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

// node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/function-uncurry-this.js
var require_function_uncurry_this = __commonJS({
  "node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/function-uncurry-this.js"(exports2, module2) {
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

// node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/classof-raw.js
var require_classof_raw = __commonJS({
  "node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/classof-raw.js"(exports2, module2) {
    "use strict";
    var uncurryThis = require_function_uncurry_this();
    var toString = uncurryThis({}.toString);
    var stringSlice = uncurryThis("".slice);
    module2.exports = function(it) {
      return stringSlice(toString(it), 8, -1);
    };
  }
});

// node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/indexed-object.js
var require_indexed_object = __commonJS({
  "node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/indexed-object.js"(exports2, module2) {
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

// node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/is-null-or-undefined.js
var require_is_null_or_undefined = __commonJS({
  "node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/is-null-or-undefined.js"(exports2, module2) {
    "use strict";
    module2.exports = function(it) {
      return it === null || it === void 0;
    };
  }
});

// node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/require-object-coercible.js
var require_require_object_coercible = __commonJS({
  "node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/require-object-coercible.js"(exports2, module2) {
    "use strict";
    var isNullOrUndefined = require_is_null_or_undefined();
    var $TypeError = TypeError;
    module2.exports = function(it) {
      if (isNullOrUndefined(it)) throw new $TypeError("Can't call method on " + it);
      return it;
    };
  }
});

// node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/to-indexed-object.js
var require_to_indexed_object = __commonJS({
  "node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/to-indexed-object.js"(exports2, module2) {
    "use strict";
    var IndexedObject = require_indexed_object();
    var requireObjectCoercible = require_require_object_coercible();
    module2.exports = function(it) {
      return IndexedObject(requireObjectCoercible(it));
    };
  }
});

// node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/is-callable.js
var require_is_callable = __commonJS({
  "node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/is-callable.js"(exports2, module2) {
    "use strict";
    var documentAll = typeof document == "object" && document.all;
    module2.exports = typeof documentAll == "undefined" && documentAll !== void 0 ? function(argument) {
      return typeof argument == "function" || argument === documentAll;
    } : function(argument) {
      return typeof argument == "function";
    };
  }
});

// node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/is-object.js
var require_is_object = __commonJS({
  "node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/is-object.js"(exports2, module2) {
    "use strict";
    var isCallable = require_is_callable();
    module2.exports = function(it) {
      return typeof it == "object" ? it !== null : isCallable(it);
    };
  }
});

// node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/get-built-in.js
var require_get_built_in = __commonJS({
  "node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/get-built-in.js"(exports2, module2) {
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

// node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/object-is-prototype-of.js
var require_object_is_prototype_of = __commonJS({
  "node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/object-is-prototype-of.js"(exports2, module2) {
    "use strict";
    var uncurryThis = require_function_uncurry_this();
    module2.exports = uncurryThis({}.isPrototypeOf);
  }
});

// node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/environment-user-agent.js
var require_environment_user_agent = __commonJS({
  "node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/environment-user-agent.js"(exports2, module2) {
    "use strict";
    var globalThis2 = require_global_this();
    var navigator = globalThis2.navigator;
    var userAgent = navigator && navigator.userAgent;
    module2.exports = userAgent ? String(userAgent) : "";
  }
});

// node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/environment-v8-version.js
var require_environment_v8_version = __commonJS({
  "node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/environment-v8-version.js"(exports2, module2) {
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

// node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/symbol-constructor-detection.js
var require_symbol_constructor_detection = __commonJS({
  "node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/symbol-constructor-detection.js"(exports2, module2) {
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

// node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/use-symbol-as-uid.js
var require_use_symbol_as_uid = __commonJS({
  "node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/use-symbol-as-uid.js"(exports2, module2) {
    "use strict";
    var NATIVE_SYMBOL = require_symbol_constructor_detection();
    module2.exports = NATIVE_SYMBOL && !Symbol.sham && typeof Symbol.iterator == "symbol";
  }
});

// node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/is-symbol.js
var require_is_symbol = __commonJS({
  "node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/is-symbol.js"(exports2, module2) {
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

// node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/try-to-string.js
var require_try_to_string = __commonJS({
  "node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/try-to-string.js"(exports2, module2) {
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

// node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/a-callable.js
var require_a_callable = __commonJS({
  "node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/a-callable.js"(exports2, module2) {
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

// node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/get-method.js
var require_get_method = __commonJS({
  "node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/get-method.js"(exports2, module2) {
    "use strict";
    var aCallable = require_a_callable();
    var isNullOrUndefined = require_is_null_or_undefined();
    module2.exports = function(V, P) {
      var func = V[P];
      return isNullOrUndefined(func) ? void 0 : aCallable(func);
    };
  }
});

// node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/ordinary-to-primitive.js
var require_ordinary_to_primitive = __commonJS({
  "node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/ordinary-to-primitive.js"(exports2, module2) {
    "use strict";
    var call = require_function_call();
    var isCallable = require_is_callable();
    var isObject = require_is_object();
    var $TypeError = TypeError;
    module2.exports = function(input, pref) {
      var fn, val;
      if (pref === "string" && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
      if (isCallable(fn = input.valueOf) && !isObject(val = call(fn, input))) return val;
      if (pref !== "string" && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
      throw new $TypeError("Can't convert object to primitive value");
    };
  }
});

// node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/is-pure.js
var require_is_pure = __commonJS({
  "node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/is-pure.js"(exports2, module2) {
    "use strict";
    module2.exports = false;
  }
});

// node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/define-global-property.js
var require_define_global_property = __commonJS({
  "node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/define-global-property.js"(exports2, module2) {
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

// node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/shared-store.js
var require_shared_store = __commonJS({
  "node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/shared-store.js"(exports2, module2) {
    "use strict";
    var IS_PURE = require_is_pure();
    var globalThis2 = require_global_this();
    var defineGlobalProperty = require_define_global_property();
    var SHARED = "__core-js_shared__";
    var store = module2.exports = globalThis2[SHARED] || defineGlobalProperty(SHARED, {});
    (store.versions || (store.versions = [])).push({
      version: "3.50.0",
      mode: IS_PURE ? "pure" : "global",
      copyright: "© 2013–2025 Denis Pushkarev (zloirock.ru), 2025–2026 CoreJS Company (core-js.io). All rights reserved.",
      license: "https://github.com/zloirock/core-js/blob/v3.50.0/LICENSE",
      source: "https://github.com/zloirock/core-js"
    });
  }
});

// node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/shared.js
var require_shared = __commonJS({
  "node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/shared.js"(exports2, module2) {
    "use strict";
    var store = require_shared_store();
    var create = Object.create || Object;
    module2.exports = function(key, value) {
      return store[key] || (store[key] = value || create(null));
    };
  }
});

// node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/to-object.js
var require_to_object = __commonJS({
  "node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/to-object.js"(exports2, module2) {
    "use strict";
    var requireObjectCoercible = require_require_object_coercible();
    var $Object = Object;
    module2.exports = function(argument) {
      return $Object(requireObjectCoercible(argument));
    };
  }
});

// node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/has-own-property.js
var require_has_own_property = __commonJS({
  "node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/has-own-property.js"(exports2, module2) {
    "use strict";
    var uncurryThis = require_function_uncurry_this();
    var toObject = require_to_object();
    var hasOwnProperty = uncurryThis({}.hasOwnProperty);
    module2.exports = Object.hasOwn || function hasOwn(it, key) {
      return hasOwnProperty(toObject(it), key);
    };
  }
});

// node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/uid.js
var require_uid = __commonJS({
  "node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/uid.js"(exports2, module2) {
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

// node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/well-known-symbol.js
var require_well_known_symbol = __commonJS({
  "node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/well-known-symbol.js"(exports2, module2) {
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

// node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/to-primitive.js
var require_to_primitive = __commonJS({
  "node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/to-primitive.js"(exports2, module2) {
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

// node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/to-property-key.js
var require_to_property_key = __commonJS({
  "node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/to-property-key.js"(exports2, module2) {
    "use strict";
    var toPrimitive = require_to_primitive();
    var isSymbol = require_is_symbol();
    module2.exports = function(argument) {
      var key = toPrimitive(argument, "string");
      return isSymbol(key) ? key : key + "";
    };
  }
});

// node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/document-create-element.js
var require_document_create_element = __commonJS({
  "node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/document-create-element.js"(exports2, module2) {
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

// node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/ie8-dom-define.js
var require_ie8_dom_define = __commonJS({
  "node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/ie8-dom-define.js"(exports2, module2) {
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

// node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/object-get-own-property-descriptor.js
var require_object_get_own_property_descriptor = __commonJS({
  "node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/object-get-own-property-descriptor.js"(exports2) {
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

// node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/v8-prototype-define-bug.js
var require_v8_prototype_define_bug = __commonJS({
  "node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/v8-prototype-define-bug.js"(exports2, module2) {
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

// node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/an-object.js
var require_an_object = __commonJS({
  "node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/an-object.js"(exports2, module2) {
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

// node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/object-define-property.js
var require_object_define_property = __commonJS({
  "node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/object-define-property.js"(exports2) {
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

// node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/create-non-enumerable-property.js
var require_create_non_enumerable_property = __commonJS({
  "node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/create-non-enumerable-property.js"(exports2, module2) {
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

// node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/function-name.js
var require_function_name = __commonJS({
  "node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/function-name.js"(exports2, module2) {
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

// node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/inspect-source.js
var require_inspect_source = __commonJS({
  "node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/inspect-source.js"(exports2, module2) {
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

// node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/weak-map-basic-detection.js
var require_weak_map_basic_detection = __commonJS({
  "node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/weak-map-basic-detection.js"(exports2, module2) {
    "use strict";
    var globalThis2 = require_global_this();
    var isCallable = require_is_callable();
    var WeakMap = globalThis2.WeakMap;
    module2.exports = isCallable(WeakMap) && /native code/.test(String(WeakMap));
  }
});

// node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/shared-key.js
var require_shared_key = __commonJS({
  "node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/shared-key.js"(exports2, module2) {
    "use strict";
    var shared = require_shared();
    var uid = require_uid();
    var keys = shared("keys");
    module2.exports = function(key) {
      return keys[key] || (keys[key] = uid(key));
    };
  }
});

// node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/hidden-keys.js
var require_hidden_keys = __commonJS({
  "node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/hidden-keys.js"(exports2, module2) {
    "use strict";
    module2.exports = {};
  }
});

// node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/internal-state.js
var require_internal_state = __commonJS({
  "node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/internal-state.js"(exports2, module2) {
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

// node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/make-built-in.js
var require_make_built_in = __commonJS({
  "node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/make-built-in.js"(exports2, module2) {
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

// node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/define-built-in.js
var require_define_built_in = __commonJS({
  "node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/define-built-in.js"(exports2, module2) {
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

// node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/math-trunc.js
var require_math_trunc = __commonJS({
  "node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/math-trunc.js"(exports2, module2) {
    "use strict";
    var ceil = Math.ceil;
    var floor = Math.floor;
    module2.exports = Math.trunc || function trunc(x2) {
      var n = +x2;
      return (n > 0 ? floor : ceil)(n);
    };
  }
});

// node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/to-integer-or-infinity.js
var require_to_integer_or_infinity = __commonJS({
  "node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/to-integer-or-infinity.js"(exports2, module2) {
    "use strict";
    var trunc = require_math_trunc();
    module2.exports = function(argument) {
      var number = +argument;
      return number !== number || number === 0 ? 0 : trunc(number);
    };
  }
});

// node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/to-absolute-index.js
var require_to_absolute_index = __commonJS({
  "node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/to-absolute-index.js"(exports2, module2) {
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

// node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/to-length.js
var require_to_length = __commonJS({
  "node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/to-length.js"(exports2, module2) {
    "use strict";
    var toIntegerOrInfinity = require_to_integer_or_infinity();
    var min = Math.min;
    module2.exports = function(argument) {
      var len = toIntegerOrInfinity(argument);
      return len > 0 ? min(len, 9007199254740991) : 0;
    };
  }
});

// node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/length-of-array-like.js
var require_length_of_array_like = __commonJS({
  "node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/length-of-array-like.js"(exports2, module2) {
    "use strict";
    var toLength = require_to_length();
    module2.exports = function(obj) {
      return toLength(obj.length);
    };
  }
});

// node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/array-includes.js
var require_array_includes = __commonJS({
  "node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/array-includes.js"(exports2, module2) {
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

// node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/object-keys-internal.js
var require_object_keys_internal = __commonJS({
  "node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/object-keys-internal.js"(exports2, module2) {
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

// node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/enum-bug-keys.js
var require_enum_bug_keys = __commonJS({
  "node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/enum-bug-keys.js"(exports2, module2) {
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

// node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/object-get-own-property-names.js
var require_object_get_own_property_names = __commonJS({
  "node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/object-get-own-property-names.js"(exports2) {
    "use strict";
    var internalObjectKeys = require_object_keys_internal();
    var enumBugKeys = require_enum_bug_keys();
    var hiddenKeys = enumBugKeys.concat("length", "prototype");
    exports2.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
      return internalObjectKeys(O, hiddenKeys);
    };
  }
});

// node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/object-get-own-property-symbols.js
var require_object_get_own_property_symbols = __commonJS({
  "node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/object-get-own-property-symbols.js"(exports2) {
    "use strict";
    exports2.f = Object.getOwnPropertySymbols;
  }
});

// node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/own-keys.js
var require_own_keys = __commonJS({
  "node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/own-keys.js"(exports2, module2) {
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

// node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/copy-constructor-properties.js
var require_copy_constructor_properties = __commonJS({
  "node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/copy-constructor-properties.js"(exports2, module2) {
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

// node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/is-forced.js
var require_is_forced = __commonJS({
  "node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/is-forced.js"(exports2, module2) {
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

// node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/export.js
var require_export = __commonJS({
  "node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/export.js"(exports2, module2) {
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

// node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/map-helpers.js
var require_map_helpers = __commonJS({
  "node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/map-helpers.js"(exports2, module2) {
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

// node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/modules/es.map.get-or-insert.js
var require_es_map_get_or_insert = __commonJS({
  "node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/modules/es.map.get-or-insert.js"() {
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

// node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/modules/es.map.get-or-insert-computed.js
var require_es_map_get_or_insert_computed = __commonJS({
  "node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/modules/es.map.get-or-insert-computed.js"() {
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

// node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/an-instance.js
var require_an_instance = __commonJS({
  "node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/an-instance.js"(exports2, module2) {
    "use strict";
    var isPrototypeOf = require_object_is_prototype_of();
    var $TypeError = TypeError;
    module2.exports = function(it, Prototype) {
      if (isPrototypeOf(Prototype, it)) return it;
      throw new $TypeError("Incorrect invocation");
    };
  }
});

// node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/function-uncurry-this-accessor.js
var require_function_uncurry_this_accessor = __commonJS({
  "node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/function-uncurry-this-accessor.js"(exports2, module2) {
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

// node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/is-possible-prototype.js
var require_is_possible_prototype = __commonJS({
  "node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/is-possible-prototype.js"(exports2, module2) {
    "use strict";
    var isObject = require_is_object();
    module2.exports = function(argument) {
      return isObject(argument) || argument === null;
    };
  }
});

// node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/a-possible-prototype.js
var require_a_possible_prototype = __commonJS({
  "node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/a-possible-prototype.js"(exports2, module2) {
    "use strict";
    var isPossiblePrototype = require_is_possible_prototype();
    var $String = String;
    var $TypeError = TypeError;
    module2.exports = function(argument) {
      if (isPossiblePrototype(argument)) return argument;
      throw new $TypeError("Can't set " + $String(argument) + " as a prototype");
    };
  }
});

// node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/object-set-prototype-of.js
var require_object_set_prototype_of = __commonJS({
  "node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/object-set-prototype-of.js"(exports2, module2) {
    "use strict";
    var uncurryThisAccessor = require_function_uncurry_this_accessor();
    var isObject = require_is_object();
    var requireObjectCoercible = require_require_object_coercible();
    var aPossiblePrototype = require_a_possible_prototype();
    module2.exports = Object.setPrototypeOf || ("__proto__" in {} ? (function() {
      var CORRECT_SETTER = false;
      var test = {};
      var setter;
      try {
        setter = uncurryThisAccessor(Object.prototype, "__proto__", "set");
        setter(test, []);
        CORRECT_SETTER = test instanceof Array;
      } catch (error) {
      }
      return function setPrototypeOf(O, proto) {
        requireObjectCoercible(O);
        aPossiblePrototype(proto);
        if (!isObject(O)) return O;
        if (CORRECT_SETTER) setter(O, proto);
        else O.__proto__ = proto;
        return O;
      };
    })() : void 0);
  }
});

// node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/inherit-if-required.js
var require_inherit_if_required = __commonJS({
  "node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/inherit-if-required.js"(exports2, module2) {
    "use strict";
    var isCallable = require_is_callable();
    var isObject = require_is_object();
    var setPrototypeOf = require_object_set_prototype_of();
    module2.exports = function($this, dummy, Wrapper) {
      var NewTarget, NewTargetPrototype;
      if (
        // it can work only with native `setPrototypeOf`
        setPrototypeOf && // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
        isCallable(NewTarget = dummy.constructor) && NewTarget !== Wrapper && isObject(NewTargetPrototype = NewTarget.prototype) && NewTargetPrototype !== Wrapper.prototype
      ) setPrototypeOf($this, NewTargetPrototype);
      return $this;
    };
  }
});

// node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/to-string-tag-support.js
var require_to_string_tag_support = __commonJS({
  "node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/to-string-tag-support.js"(exports2, module2) {
    "use strict";
    var wellKnownSymbol = require_well_known_symbol();
    var TO_STRING_TAG = wellKnownSymbol("toStringTag");
    var test = {};
    test[TO_STRING_TAG] = "z";
    module2.exports = String(test) === "[object z]";
  }
});

// node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/classof.js
var require_classof = __commonJS({
  "node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/classof.js"(exports2, module2) {
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

// node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/to-string.js
var require_to_string = __commonJS({
  "node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/to-string.js"(exports2, module2) {
    "use strict";
    var classof = require_classof();
    var $String = String;
    module2.exports = function(argument) {
      if (classof(argument) === "Symbol") throw new TypeError("Cannot convert a Symbol value to a string");
      return $String(argument);
    };
  }
});

// node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/normalize-string-argument.js
var require_normalize_string_argument = __commonJS({
  "node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/normalize-string-argument.js"(exports2, module2) {
    "use strict";
    var toString = require_to_string();
    module2.exports = function(argument, $default) {
      return argument === void 0 ? arguments.length < 2 ? "" : $default : toString(argument);
    };
  }
});

// node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/dom-exception-constants.js
var require_dom_exception_constants = __commonJS({
  "node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/dom-exception-constants.js"(exports2, module2) {
    "use strict";
    module2.exports = {
      IndexSizeError: { s: "INDEX_SIZE_ERR", c: 1, m: 1 },
      DOMStringSizeError: { s: "DOMSTRING_SIZE_ERR", c: 2, m: 0 },
      HierarchyRequestError: { s: "HIERARCHY_REQUEST_ERR", c: 3, m: 1 },
      WrongDocumentError: { s: "WRONG_DOCUMENT_ERR", c: 4, m: 1 },
      InvalidCharacterError: { s: "INVALID_CHARACTER_ERR", c: 5, m: 1 },
      NoDataAllowedError: { s: "NO_DATA_ALLOWED_ERR", c: 6, m: 0 },
      NoModificationAllowedError: { s: "NO_MODIFICATION_ALLOWED_ERR", c: 7, m: 1 },
      NotFoundError: { s: "NOT_FOUND_ERR", c: 8, m: 1 },
      NotSupportedError: { s: "NOT_SUPPORTED_ERR", c: 9, m: 1 },
      InUseAttributeError: { s: "INUSE_ATTRIBUTE_ERR", c: 10, m: 1 },
      InvalidStateError: { s: "INVALID_STATE_ERR", c: 11, m: 1 },
      SyntaxError: { s: "SYNTAX_ERR", c: 12, m: 1 },
      InvalidModificationError: { s: "INVALID_MODIFICATION_ERR", c: 13, m: 1 },
      NamespaceError: { s: "NAMESPACE_ERR", c: 14, m: 1 },
      InvalidAccessError: { s: "INVALID_ACCESS_ERR", c: 15, m: 1 },
      ValidationError: { s: "VALIDATION_ERR", c: 16, m: 0 },
      TypeMismatchError: { s: "TYPE_MISMATCH_ERR", c: 17, m: 1 },
      SecurityError: { s: "SECURITY_ERR", c: 18, m: 1 },
      NetworkError: { s: "NETWORK_ERR", c: 19, m: 1 },
      AbortError: { s: "ABORT_ERR", c: 20, m: 1 },
      URLMismatchError: { s: "URL_MISMATCH_ERR", c: 21, m: 1 },
      QuotaExceededError: { s: "QUOTA_EXCEEDED_ERR", c: 22, m: 1 },
      TimeoutError: { s: "TIMEOUT_ERR", c: 23, m: 1 },
      InvalidNodeTypeError: { s: "INVALID_NODE_TYPE_ERR", c: 24, m: 1 },
      DataCloneError: { s: "DATA_CLONE_ERR", c: 25, m: 1 }
    };
  }
});

// node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/error-stack-clear.js
var require_error_stack_clear = __commonJS({
  "node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/error-stack-clear.js"(exports2, module2) {
    "use strict";
    var uncurryThis = require_function_uncurry_this();
    var $Error = Error;
    var replace = uncurryThis("".replace);
    var TEST = (function(arg) {
      return String(new $Error(arg).stack);
    })("zxcasd");
    var V8_OR_CHAKRA_STACK_ENTRY = /\n\s*at [^:]*:[^\n]*/;
    var IS_V8_OR_CHAKRA_STACK = V8_OR_CHAKRA_STACK_ENTRY.test(TEST);
    module2.exports = function(stack, dropEntries) {
      if (IS_V8_OR_CHAKRA_STACK && typeof stack == "string" && !$Error.prepareStackTrace) {
        while (dropEntries--) stack = replace(stack, V8_OR_CHAKRA_STACK_ENTRY, "");
      }
      return stack;
    };
  }
});

// node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/modules/web.dom-exception.stack.js
var require_web_dom_exception_stack = __commonJS({
  "node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/modules/web.dom-exception.stack.js"() {
    "use strict";
    var $ = require_export();
    var globalThis2 = require_global_this();
    var getBuiltIn = require_get_built_in();
    var createPropertyDescriptor = require_create_property_descriptor();
    var defineProperty = require_object_define_property().f;
    var hasOwn = require_has_own_property();
    var anInstance = require_an_instance();
    var inheritIfRequired = require_inherit_if_required();
    var normalizeStringArgument = require_normalize_string_argument();
    var DOMExceptionConstants = require_dom_exception_constants();
    var clearErrorStack = require_error_stack_clear();
    var DESCRIPTORS = require_descriptors();
    var IS_PURE = require_is_pure();
    var DOM_EXCEPTION = "DOMException";
    var Error2 = getBuiltIn("Error");
    var NativeDOMException = getBuiltIn(DOM_EXCEPTION);
    var $DOMException = function DOMException2() {
      anInstance(this, DOMExceptionPrototype);
      var argumentsLength = arguments.length;
      var message = normalizeStringArgument(argumentsLength < 1 ? void 0 : arguments[0]);
      var name = normalizeStringArgument(argumentsLength < 2 ? void 0 : arguments[1], "Error");
      var that = new NativeDOMException(message, name);
      var error = new Error2(message);
      error.name = DOM_EXCEPTION;
      defineProperty(that, "stack", createPropertyDescriptor(1, clearErrorStack(error.stack, 1)));
      inheritIfRequired(that, this, $DOMException);
      return that;
    };
    var DOMExceptionPrototype = $DOMException.prototype = NativeDOMException.prototype;
    var ERROR_HAS_STACK = "stack" in new Error2(DOM_EXCEPTION);
    var DOM_EXCEPTION_HAS_STACK = "stack" in new NativeDOMException(1, 2);
    var descriptor = NativeDOMException && DESCRIPTORS && Object.getOwnPropertyDescriptor(globalThis2, DOM_EXCEPTION);
    var BUGGY_DESCRIPTOR = !!descriptor && !(descriptor.writable && descriptor.configurable);
    var FORCED_CONSTRUCTOR = ERROR_HAS_STACK && !BUGGY_DESCRIPTOR && !DOM_EXCEPTION_HAS_STACK;
    $({ global: true, constructor: true, forced: IS_PURE || FORCED_CONSTRUCTOR }, {
      // TODO: fix export logic
      DOMException: FORCED_CONSTRUCTOR ? $DOMException : NativeDOMException
    });
    var PolyfilledDOMException = getBuiltIn(DOM_EXCEPTION);
    var PolyfilledDOMExceptionPrototype = PolyfilledDOMException.prototype;
    if (PolyfilledDOMExceptionPrototype.constructor !== PolyfilledDOMException) {
      if (!IS_PURE) {
        defineProperty(PolyfilledDOMExceptionPrototype, "constructor", createPropertyDescriptor(1, PolyfilledDOMException));
      }
      for (key in DOMExceptionConstants) if (hasOwn(DOMExceptionConstants, key)) {
        constant = DOMExceptionConstants[key];
        constantName = constant.s;
        if (!hasOwn(PolyfilledDOMException, constantName)) {
          defineProperty(PolyfilledDOMException, constantName, createPropertyDescriptor(6, constant.c));
        }
      }
    }
    var constant;
    var constantName;
    var key;
  }
});

// dist/idb-plus/idb-plus.js
require_es_map_get_or_insert();
require_es_map_get_or_insert_computed();
require_web_dom_exception_stack();
function asyncGeneratorStep(n, t, e, r, o, a, c) {
  try {
    var i = n[a](c), u = i.value;
  } catch (n2) {
    return void e(n2);
  }
  i.done ? t(u) : Promise.resolve(u).then(r, o);
}
function _asyncToGenerator(n) {
  return function() {
    var t = this, e = arguments;
    return new Promise(function(r, o) {
      var a = n.apply(t, e);
      function _next(n2) {
        asyncGeneratorStep(a, r, o, _next, _throw, "next", n2);
      }
      function _throw(n2) {
        asyncGeneratorStep(a, r, o, _next, _throw, "throw", n2);
      }
      _next(void 0);
    });
  };
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
function _asyncIterator(r) {
  var n, t, o, e = 2;
  for ("undefined" != typeof Symbol && (t = Symbol.asyncIterator, o = Symbol.iterator); e--; ) {
    if (t && null != (n = r[t])) return n.call(r);
    if (o && null != (n = r[o])) return new AsyncFromSyncIterator(n.call(r));
    t = "@@asyncIterator", o = "@@iterator";
  }
  throw new TypeError("Object is not async iterable");
}
function AsyncFromSyncIterator(r) {
  function AsyncFromSyncIteratorContinuation(r2) {
    if (Object(r2) !== r2) return Promise.reject(new TypeError(r2 + " is not an object."));
    var n = r2.done;
    return Promise.resolve(r2.value).then(function(r3) {
      return { value: r3, done: n };
    });
  }
  return AsyncFromSyncIterator = function(r2) {
    this.s = r2, this.n = r2.next;
  }, AsyncFromSyncIterator.prototype = { s: null, n: null, next: function() {
    return AsyncFromSyncIteratorContinuation(this.n.apply(this.s, arguments));
  }, return: function(r2) {
    var n = this.s.return;
    return void 0 === n ? Promise.resolve({ value: r2, done: true }) : AsyncFromSyncIteratorContinuation(n.apply(this.s, arguments));
  }, throw: function(r2) {
    var n = this.s.return;
    return void 0 === n ? Promise.reject(r2) : AsyncFromSyncIteratorContinuation(n.apply(this.s, arguments));
  } }, new AsyncFromSyncIterator(r);
}
function _awaitAsyncGenerator(e) {
  return new _OverloadYield(e, 0);
}
function _wrapAsyncGenerator(e) {
  return function() {
    return new AsyncGenerator(e.apply(this, arguments));
  };
}
function AsyncGenerator(e) {
  var t, n;
  function resume(t2, n2) {
    try {
      var r = e[t2](n2), o = r.value, u = o instanceof _OverloadYield;
      Promise.resolve(u ? o.v : o).then(function(n3) {
        if (u) {
          var i = "return" === t2 && o.k ? t2 : "next";
          if (!o.k || n3.done) return resume(i, n3);
          n3 = e[i](n3).value;
        }
        settle(!!r.done, n3);
      }, function(e2) {
        resume("throw", e2);
      });
    } catch (e2) {
      settle(2, e2);
    }
  }
  function settle(e2, r) {
    2 === e2 ? t.reject(r) : t.resolve({ value: r, done: e2 }), (t = t.next) ? resume(t.key, t.arg) : n = null;
  }
  this._invoke = function(e2, r) {
    return new Promise(function(o, u) {
      var i = { key: e2, arg: r, resolve: o, reject: u, next: null };
      n ? n = n.next = i : (t = n = i, resume(e2, r));
    });
  }, "function" != typeof e.return && (this.return = void 0);
}
AsyncGenerator.prototype["function" == typeof Symbol && Symbol.asyncIterator || "@@asyncIterator"] = function() {
  return this;
}, AsyncGenerator.prototype.next = function(e) {
  return this._invoke("next", e);
}, AsyncGenerator.prototype.throw = function(e) {
  return this._invoke("throw", e);
}, AsyncGenerator.prototype.return = function(e) {
  return this._invoke("return", e);
};
function _OverloadYield(e, d) {
  this.v = e, this.k = d;
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
    var _iterator7 = _createForOfIteratorHelper(__getOwnPropNames2(from)), _step7;
    try {
      for (_iterator7.s(); !(_step7 = _iterator7.n()).done; ) {
        let key = _step7.value;
        if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
          get: () => from[key],
          enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
        });
      }
    } catch (err) {
      _iterator7.e(err);
    } finally {
      _iterator7.f();
    }
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", {
  value: true
}), mod);
//! src/idb-plus/idb-plus.ts
var idb_plus_exports = {};
__export(idb_plus_exports, {
  IDBPlus: () => x,
  IDBPlusHelper: () => s
});
module.exports = __toCommonJS(idb_plus_exports);
var s;
((i) => {
  i.cache = /* @__PURE__ */ new Map(), i.defaults = Object.freeze({
    iterBatch: 100,
    retry: {
      attempts: 3,
      baseDelayMs: 16
    }
  }), i.sleep = (e) => new Promise((n) => setTimeout(n, e));
  function t(e) {
    var _e$name;
    const n = (_e$name = e === null || e === void 0 ? void 0 : e.name) !== null && _e$name !== void 0 ? _e$name : "";
    return n === "AbortError" || n === "InvalidStateError" || n === "TransactionInactiveError" || n === "UnknownError";
  }
  i.shouldReconnect = t;
  function a(_x, _x2, _x3) {
    return _a.apply(this, arguments);
  }
  function _a() {
    _a = _asyncToGenerator(function* (e, n, r) {
      const w = Math.max(1, e.attempts);
      for (let y = 0; y < w; y++) try {
        return yield n(y);
      } catch (d) {
        if (y === w - 1) throw d;
        yield r === null || r === void 0 ? void 0 : r(d, y);
        const u = e.baseDelayMs * Math.pow(2, y) + Math.floor(Math.random() * 10);
        yield (0, i.sleep)(u);
      }
      throw new Error("withRetry exhausted unexpectedly");
    });
    return _a.apply(this, arguments);
  }
  i.withRetry = a;
  function o(e, n, r) {
    return new Promise((w, y) => {
      const d = indexedDB.open(e, n);
      d.onupgradeneeded = () => {
        try {
          const u = d.result, l = d.transaction;
          r === null || r === void 0 || r(u, l);
        } catch (u) {
          y(u);
        }
      }, d.onerror = () => y(d.error), d.onblocked = () => {
      }, d.onsuccess = () => {
        const u = d.result;
        u.onversionchange = () => {
          try {
            u.close();
          } finally {
            i.cache.delete(e);
          }
        }, w(u);
      };
    });
  }
  function h(_x4, _x5, _x6) {
    return _h.apply(this, arguments);
  }
  function _h() {
    _h = _asyncToGenerator(function* (e, n, r) {
      var _r$indexes;
      let w = !e.objectStoreNames.contains(n), y = [];
      if (!w && r !== null && r !== void 0 && (_r$indexes = r.indexes) !== null && _r$indexes !== void 0 && _r$indexes.length) {
        const l = e.transaction(n, "readonly"), p = l.objectStore(n), g = new Set(Array.from(p.indexNames));
        y = (r.indexes || []).filter((m) => !g.has(m.name)), yield new Promise((m, R) => {
          l.oncomplete = () => m(), l.onabort = () => R(l.error), l.onerror = () => R(l.error);
        });
      }
      if (!w && y.length === 0) return e;
      const d = e.version + 1;
      e.close();
      const u = yield o(e.name, d, (l, p) => {
        var _r$keyPath;
        let g;
        l.objectStoreNames.contains(n) ? g = p.objectStore(n) : g = l.createObjectStore(n, {
          keyPath: (_r$keyPath = r === null || r === void 0 ? void 0 : r.keyPath) !== null && _r$keyPath !== void 0 ? _r$keyPath : void 0,
          autoIncrement: !!(r !== null && r !== void 0 && r.autoIncrement)
        });
        var _iterator8 = _createForOfIteratorHelper(y), _step8;
        try {
          for (_iterator8.s(); !(_step8 = _iterator8.n()).done; ) {
            const m = _step8.value;
            g.indexNames.contains(m.name) || g.createIndex(m.name, m.keyPath, m.options);
          }
        } catch (err) {
          _iterator8.e(err);
        } finally {
          _iterator8.f();
        }
      });
      return u.onversionchange = () => {
        try {
          u.close();
        } finally {
          i.cache.delete(u.name);
        }
      }, u;
    });
    return _h.apply(this, arguments);
  }
  function c(_x7, _x8, _x9) {
    return _c.apply(this, arguments);
  }
  function _c() {
    _c = _asyncToGenerator(function* (e, n, r) {
      let w = i.cache.get(e);
      return w ? (w = w.then((y) => h(y, n, r)), i.cache.set(e, w)) : (w = _asyncToGenerator(function* () {
        const y = yield o(e);
        return h(y, n, r);
      })(), i.cache.set(e, w)), w;
    });
    return _c.apply(this, arguments);
  }
  i.getDB = c;
  function f(_x0) {
    return _f.apply(this, arguments);
  }
  function _f() {
    _f = _asyncToGenerator(function* (e) {
      const n = i.cache.get(e);
      if (i.cache.delete(e), n) try {
        (yield n).close();
      } catch {
      }
    });
    return _f.apply(this, arguments);
  }
  i.closeConnection = f;
  function v(e) {
    return new Promise((n, r) => {
      e.onsuccess = () => n(e.result), e.onerror = () => r(e.error);
    });
  }
  i.asyncRequest = v;
  function S(e) {
    return new Promise((n, r) => {
      e.oncomplete = () => n(), e.onabort = () => {
        var _e$error;
        return r((_e$error = e.error) !== null && _e$error !== void 0 ? _e$error : new DOMException("Aborted", "AbortError"));
      }, e.onerror = () => {
        var _e$error2;
        return r((_e$error2 = e.error) !== null && _e$error2 !== void 0 ? _e$error2 : new DOMException("TransactionError", "UnknownError"));
      };
    });
  }
  i.waitTx = S;
})(s || (s = {}));
/**
 * IDB Plus
 *
 * 🗄️ Minimal Promise based IndexedDB Wrapper with Map-like API
 *
 * @author dragon-fish <dragon-fish@qq.com>
 * @license MIT
 */
var x = class {
  constructor(t, a, o = {}) {
    this.dbName = t, this.storeName = a, this.options = o;
  }
  get _iterBatch() {
    var _this$options$iterBat;
    return (_this$options$iterBat = this.options.iterBatch) !== null && _this$options$iterBat !== void 0 ? _this$options$iterBat : s.defaults.iterBatch;
  }
  get _retryCfg() {
    var _this$options$retry, _t$attempts, _t$baseDelayMs;
    const t = (_this$options$retry = this.options.retry) !== null && _this$options$retry !== void 0 ? _this$options$retry : s.defaults.retry;
    return {
      attempts: (_t$attempts = t.attempts) !== null && _t$attempts !== void 0 ? _t$attempts : 3,
      baseDelayMs: (_t$baseDelayMs = t.baseDelayMs) !== null && _t$baseDelayMs !== void 0 ? _t$baseDelayMs : 16
    };
  }
  _withStore(t, a) {
    var _this4 = this;
    return _asyncToGenerator(function* () {
      const o = _this4._retryCfg;
      return s.withRetry(o, /* @__PURE__ */ _asyncToGenerator(function* () {
        const h = yield s.getDB(_this4.dbName, _this4.storeName, _this4.options.ensure);
        try {
          const c = h.transaction(_this4.storeName, t), f = c.objectStore(_this4.storeName), v = yield a(f);
          return yield s.waitTx(c), v;
        } catch (c) {
          throw c;
        }
      }), /* @__PURE__ */ (function() {
        var _ref3 = _asyncToGenerator(function* (h) {
          s.shouldReconnect(h) && (yield s.closeConnection(_this4.dbName));
        });
        return function(_x1) {
          return _ref3.apply(this, arguments);
        };
      })());
    })();
  }
  get(t) {
    var _this5 = this;
    return _asyncToGenerator(function* () {
      return _this5._withStore("readonly", /* @__PURE__ */ (function() {
        var _ref4 = _asyncToGenerator(function* (a) {
          const o = yield s.asyncRequest(a.get(t));
          return o === void 0 ? void 0 : o;
        });
        return function(_x10) {
          return _ref4.apply(this, arguments);
        };
      })());
    })();
  }
  set(t, a) {
    var _this6 = this;
    return _asyncToGenerator(function* () {
      return yield _this6._withStore("readwrite", /* @__PURE__ */ (function() {
        var _ref5 = _asyncToGenerator(function* (o) {
          var _this6$options$ensure;
          const c = ((_this6$options$ensure = _this6.options.ensure) === null || _this6$options$ensure === void 0 ? void 0 : _this6$options$ensure.keyPath) != null ? o.put(a) : o.put(a, t);
          yield s.asyncRequest(c);
        });
        return function(_x11) {
          return _ref5.apply(this, arguments);
        };
      })()), _this6;
    })();
  }
  delete(t) {
    var _this7 = this;
    return _asyncToGenerator(function* () {
      return _this7._withStore("readwrite", /* @__PURE__ */ (function() {
        var _ref6 = _asyncToGenerator(function* (a) {
          const o = (yield s.asyncRequest(a.get(t))) !== void 0;
          return yield s.asyncRequest(a.delete(t)), o;
        });
        return function(_x12) {
          return _ref6.apply(this, arguments);
        };
      })());
    })();
  }
  clear() {
    var _this8 = this;
    return _asyncToGenerator(function* () {
      yield _this8._withStore("readwrite", /* @__PURE__ */ (function() {
        var _ref7 = _asyncToGenerator(function* (t) {
          yield s.asyncRequest(t.clear());
        });
        return function(_x13) {
          return _ref7.apply(this, arguments);
        };
      })());
    })();
  }
  has(t) {
    var _this9 = this;
    return _asyncToGenerator(function* () {
      return (yield _this9.get(t)) !== void 0;
    })();
  }
  count() {
    var _this0 = this;
    return _asyncToGenerator(function* () {
      return _this0._withStore("readonly", /* @__PURE__ */ (function() {
        var _ref8 = _asyncToGenerator(function* (t) {
          var _yield$s$asyncRequest;
          return (_yield$s$asyncRequest = yield s.asyncRequest(t.count())) !== null && _yield$s$asyncRequest !== void 0 ? _yield$s$asyncRequest : 0;
        });
        return function(_x14) {
          return _ref8.apply(this, arguments);
        };
      })());
    })();
  }
  _iterateEntries() {
    var _this = this;
    return _wrapAsyncGenerator(function* () {
      let t = null, a = false;
      const o = Math.max(1, _this._iterBatch);
      for (; !a; ) {
        const h = yield _awaitAsyncGenerator(_this._withStore("readonly", /* @__PURE__ */ (function() {
          var _ref9 = _asyncToGenerator(function* (c) {
            const f = [], v = t === null ? void 0 : IDBKeyRange.lowerBound(t, true);
            return yield new Promise((S, e) => {
              const n = c.openCursor(v);
              n.onerror = () => e(n.error), n.onsuccess = () => {
                const r = n.result;
                if (!r) {
                  a = true, S();
                  return;
                }
                f.push([r.key, r.value]), t = r.key, f.length >= o ? S() : r.continue();
              };
            }), f;
          });
          return function(_x15) {
            return _ref9.apply(this, arguments);
          };
        })()));
        var _iterator9 = _createForOfIteratorHelper(h), _step9;
        try {
          for (_iterator9.s(); !(_step9 = _iterator9.n()).done; ) {
            const c = _step9.value;
            yield c;
          }
        } catch (err) {
          _iterator9.e(err);
        } finally {
          _iterator9.f();
        }
        if (h.length === 0) break;
      }
    })();
  }
  entries() {
    return this._iterateEntries();
  }
  keys() {
    var _this2 = this;
    return _wrapAsyncGenerator(function* () {
      var _iteratorAbruptCompletion = false;
      var _didIteratorError = false;
      var _iteratorError;
      try {
        for (var _iterator = _asyncIterator(_this2.entries()), _step; _iteratorAbruptCompletion = !(_step = yield _awaitAsyncGenerator(_iterator.next())).done; _iteratorAbruptCompletion = false) {
          const [t] = _step.value;
          {
            yield t;
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (_iteratorAbruptCompletion && _iterator.return != null) {
            yield _awaitAsyncGenerator(_iterator.return());
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    })();
  }
  values() {
    var _this3 = this;
    return _wrapAsyncGenerator(function* () {
      var _iteratorAbruptCompletion2 = false;
      var _didIteratorError2 = false;
      var _iteratorError2;
      try {
        for (var _iterator2 = _asyncIterator(_this3.entries()), _step2; _iteratorAbruptCompletion2 = !(_step2 = yield _awaitAsyncGenerator(_iterator2.next())).done; _iteratorAbruptCompletion2 = false) {
          const [, t] = _step2.value;
          {
            yield t;
          }
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (_iteratorAbruptCompletion2 && _iterator2.return != null) {
            yield _awaitAsyncGenerator(_iterator2.return());
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }
    })();
  }
  [Symbol.asyncIterator]() {
    return this.entries()[Symbol.asyncIterator]();
  }
  forEach(t) {
    var _this1 = this;
    return _asyncToGenerator(function* () {
      var _iteratorAbruptCompletion3 = false;
      var _didIteratorError3 = false;
      var _iteratorError3;
      try {
        for (var _iterator3 = _asyncIterator(_this1.entries()), _step3; _iteratorAbruptCompletion3 = !(_step3 = yield _iterator3.next()).done; _iteratorAbruptCompletion3 = false) {
          const [a, o] = _step3.value;
          {
            yield t(o, a, _this1);
          }
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (_iteratorAbruptCompletion3 && _iterator3.return != null) {
            yield _iterator3.return();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }
    })();
  }
  getMany(t) {
    var _this10 = this;
    return _asyncToGenerator(function* () {
      const a = /* @__PURE__ */ new Map();
      var _iteratorAbruptCompletion4 = false;
      var _didIteratorError4 = false;
      var _iteratorError4;
      try {
        for (var _iterator4 = _asyncIterator(t), _step4; _iteratorAbruptCompletion4 = !(_step4 = yield _iterator4.next()).done; _iteratorAbruptCompletion4 = false) {
          const o = _step4.value;
          {
            a.set(o, void 0);
          }
        }
      } catch (err) {
        _didIteratorError4 = true;
        _iteratorError4 = err;
      } finally {
        try {
          if (_iteratorAbruptCompletion4 && _iterator4.return != null) {
            yield _iterator4.return();
          }
        } finally {
          if (_didIteratorError4) {
            throw _iteratorError4;
          }
        }
      }
      return yield _this10._withStore("readonly", /* @__PURE__ */ (function() {
        var _ref0 = _asyncToGenerator(function* (o) {
          yield Promise.all(a.keys().map(/* @__PURE__ */ (function() {
            var _ref1 = _asyncToGenerator(function* (h) {
              const c = yield s.asyncRequest(o.get(h));
              a.set(h, c === void 0 ? void 0 : c);
            });
            return function(_x17) {
              return _ref1.apply(this, arguments);
            };
          })()));
        });
        return function(_x16) {
          return _ref0.apply(this, arguments);
        };
      })()), a;
    })();
  }
  setMany(t) {
    var _this11 = this;
    return _asyncToGenerator(function* () {
      var _this11$options$ensur;
      const a = ((_this11$options$ensur = _this11.options.ensure) === null || _this11$options$ensur === void 0 ? void 0 : _this11$options$ensur.keyPath) != null;
      return yield _this11._withStore("readwrite", /* @__PURE__ */ (function() {
        var _ref10 = _asyncToGenerator(function* (o) {
          var _iteratorAbruptCompletion5 = false;
          var _didIteratorError5 = false;
          var _iteratorError5;
          try {
            for (var _iterator5 = _asyncIterator(t), _step5; _iteratorAbruptCompletion5 = !(_step5 = yield _iterator5.next()).done; _iteratorAbruptCompletion5 = false) {
              const [h, c] = _step5.value;
              {
                const f = a ? o.put(c) : o.put(c, h);
                yield s.asyncRequest(f);
              }
            }
          } catch (err) {
            _didIteratorError5 = true;
            _iteratorError5 = err;
          } finally {
            try {
              if (_iteratorAbruptCompletion5 && _iterator5.return != null) {
                yield _iterator5.return();
              }
            } finally {
              if (_didIteratorError5) {
                throw _iteratorError5;
              }
            }
          }
        });
        return function(_x18) {
          return _ref10.apply(this, arguments);
        };
      })()), _this11;
    })();
  }
  deleteMany(t) {
    var _this12 = this;
    return _asyncToGenerator(function* () {
      let a = 0;
      return yield _this12._withStore("readwrite", /* @__PURE__ */ (function() {
        var _ref11 = _asyncToGenerator(function* (o) {
          var _iteratorAbruptCompletion6 = false;
          var _didIteratorError6 = false;
          var _iteratorError6;
          try {
            for (var _iterator6 = _asyncIterator(t), _step6; _iteratorAbruptCompletion6 = !(_step6 = yield _iterator6.next()).done; _iteratorAbruptCompletion6 = false) {
              const h = _step6.value;
              {
                (yield s.asyncRequest(o.get(h))) !== void 0 && a++, yield s.asyncRequest(o.delete(h));
              }
            }
          } catch (err) {
            _didIteratorError6 = true;
            _iteratorError6 = err;
          } finally {
            try {
              if (_iteratorAbruptCompletion6 && _iterator6.return != null) {
                yield _iterator6.return();
              }
            } finally {
              if (_didIteratorError6) {
                throw _iteratorError6;
              }
            }
          }
        });
        return function(_x19) {
          return _ref11.apply(this, arguments);
        };
      })()), a;
    })();
  }
  disconnect() {
    var _this13 = this;
    return _asyncToGenerator(function* () {
      yield s.closeConnection(_this13.dbName);
    })();
  }
};

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy41MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9nbG9iYWwtdGhpcy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjUwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2ZhaWxzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNTAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZGVzY3JpcHRvcnMuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy41MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mdW5jdGlvbi1iaW5kLW5hdGl2ZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjUwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2Z1bmN0aW9uLWNhbGwuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy41MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3QtcHJvcGVydHktaXMtZW51bWVyYWJsZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjUwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNTAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNTAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY2xhc3NvZi1yYXcuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy41MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pbmRleGVkLW9iamVjdC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjUwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLW51bGwtb3ItdW5kZWZpbmVkLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNTAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNTAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy41MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pcy1jYWxsYWJsZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjUwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLW9iamVjdC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjUwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2dldC1idWlsdC1pbi5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjUwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1pcy1wcm90b3R5cGUtb2YuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy41MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9lbnZpcm9ubWVudC11c2VyLWFnZW50LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNTAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZW52aXJvbm1lbnQtdjgtdmVyc2lvbi5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjUwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3N5bWJvbC1jb25zdHJ1Y3Rvci1kZXRlY3Rpb24uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy41MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy91c2Utc3ltYm9sLWFzLXVpZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjUwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLXN5bWJvbC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjUwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RyeS10by1zdHJpbmcuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy41MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hLWNhbGxhYmxlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNTAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZ2V0LW1ldGhvZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjUwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29yZGluYXJ5LXRvLXByaW1pdGl2ZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjUwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLXB1cmUuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy41MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9kZWZpbmUtZ2xvYmFsLXByb3BlcnR5LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNTAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2hhcmVkLXN0b3JlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNTAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2hhcmVkLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNTAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tb2JqZWN0LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNTAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjUwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3VpZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjUwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNTAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tcHJpbWl0aXZlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNTAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tcHJvcGVydHkta2V5LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNTAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZG9jdW1lbnQtY3JlYXRlLWVsZW1lbnQuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy41MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pZTgtZG9tLWRlZmluZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjUwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3IuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy41MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy92OC1wcm90b3R5cGUtZGVmaW5lLWJ1Zy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjUwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FuLW9iamVjdC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjUwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHkuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy41MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHkuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy41MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mdW5jdGlvbi1uYW1lLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNTAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaW5zcGVjdC1zb3VyY2UuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy41MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy93ZWFrLW1hcC1iYXNpYy1kZXRlY3Rpb24uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy41MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zaGFyZWQta2V5LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNTAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaGlkZGVuLWtleXMuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy41MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pbnRlcm5hbC1zdGF0ZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjUwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL21ha2UtYnVpbHQtaW4uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy41MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9kZWZpbmUtYnVpbHQtaW4uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy41MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9tYXRoLXRydW5jLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNTAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8taW50ZWdlci1vci1pbmZpbml0eS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjUwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RvLWFic29sdXRlLWluZGV4LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNTAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tbGVuZ3RoLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNTAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvbGVuZ3RoLW9mLWFycmF5LWxpa2UuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy41MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1pbmNsdWRlcy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjUwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1rZXlzLWludGVybmFsLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNTAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZW51bS1idWcta2V5cy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjUwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LW5hbWVzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNTAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktc3ltYm9scy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjUwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL293bi1rZXlzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNTAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY29weS1jb25zdHJ1Y3Rvci1wcm9wZXJ0aWVzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNTAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXMtZm9yY2VkLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNTAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZXhwb3J0LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNTAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvbWFwLWhlbHBlcnMuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy41MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMubWFwLmdldC1vci1pbnNlcnQuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy41MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMubWFwLmdldC1vci1pbnNlcnQtY29tcHV0ZWQuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy41MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hbi1pbnN0YW5jZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjUwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcy1hY2Nlc3Nvci5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjUwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLXBvc3NpYmxlLXByb3RvdHlwZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjUwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2EtcG9zc2libGUtcHJvdG90eXBlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNTAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LXNldC1wcm90b3R5cGUtb2YuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy41MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pbmhlcml0LWlmLXJlcXVpcmVkLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNTAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tc3RyaW5nLXRhZy1zdXBwb3J0LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNTAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY2xhc3NvZi5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjUwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RvLXN0cmluZy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjUwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL25vcm1hbGl6ZS1zdHJpbmctYXJndW1lbnQuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy41MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9kb20tZXhjZXB0aW9uLWNvbnN0YW50cy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjUwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2Vycm9yLXN0YWNrLWNsZWFyLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNTAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL3dlYi5kb20tZXhjZXB0aW9uLnN0YWNrLmpzIiwgInNyYy9pZGItcGx1cy9pZGItcGx1cy50cyIsICJub2RlX21vZHVsZXMvLnBucG0vaWRiLXBsdXNAMC4yLjAvbm9kZV9tb2R1bGVzL2lkYi1wbHVzL3NyYy9oZWxwZXIudHMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2lkYi1wbHVzQDAuMi4wL25vZGVfbW9kdWxlcy9pZGItcGx1cy9zcmMvaW5kZXgudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIid1c2Ugc3RyaWN0JztcbnZhciBjaGVjayA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXQgJiYgaXQuTWF0aCA9PT0gTWF0aCAmJiBpdDtcbn07XG5cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy84NiNpc3N1ZWNvbW1lbnQtMTE1NzU5MDI4XG5tb2R1bGUuZXhwb3J0cyA9XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1nbG9iYWwtdGhpcyAtLSBzYWZlXG4gIGNoZWNrKHR5cGVvZiBnbG9iYWxUaGlzID09ICdvYmplY3QnICYmIGdsb2JhbFRoaXMpIHx8XG4gIGNoZWNrKHR5cGVvZiB3aW5kb3cgPT0gJ29iamVjdCcgJiYgd2luZG93KSB8fFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVzdHJpY3RlZC1nbG9iYWxzIC0tIHNhZmVcbiAgY2hlY2sodHlwZW9mIHNlbGYgPT0gJ29iamVjdCcgJiYgc2VsZikgfHxcbiAgY2hlY2sodHlwZW9mIGdsb2JhbCA9PSAnb2JqZWN0JyAmJiBnbG9iYWwpIHx8XG4gIGNoZWNrKHR5cGVvZiB0aGlzID09ICdvYmplY3QnICYmIHRoaXMpIHx8XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1uZXctZnVuYyAtLSBmYWxsYmFja1xuICAoZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSkoKSB8fCBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuIiwgIid1c2Ugc3RyaWN0Jztcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGV4ZWMpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gISFleGVjKCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG5cbi8vIERldGVjdCBJRTgncyBpbmNvbXBsZXRlIGRlZmluZVByb3BlcnR5IGltcGxlbWVudGF0aW9uXG5tb2R1bGUuZXhwb3J0cyA9ICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZGVmaW5lcHJvcGVydHkgLS0gcmVxdWlyZWQgZm9yIHRlc3RpbmdcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgMSwgeyBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDc7IH0gfSlbMV0gIT09IDc7XG59KTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tZnVuY3Rpb24tcHJvdG90eXBlLWJpbmQgLS0gc2FmZVxuICB2YXIgdGVzdCA9IGZ1bmN0aW9uICgpIHsgLyogZW1wdHkgKi8gfS5iaW5kKCk7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnMgLS0gc2FmZVxuICByZXR1cm4gdHlwZW9mIHRlc3QgIT0gJ2Z1bmN0aW9uJyB8fCB0ZXN0Lmhhc093blByb3BlcnR5KCdwcm90b3R5cGUnKTtcbn0pO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBOQVRJVkVfQklORCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1iaW5kLW5hdGl2ZScpO1xuXG52YXIgY2FsbCA9IEZ1bmN0aW9uLnByb3RvdHlwZS5jYWxsO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLWZ1bmN0aW9uLXByb3RvdHlwZS1iaW5kIC0tIHNhZmVcbm1vZHVsZS5leHBvcnRzID0gTkFUSVZFX0JJTkQgPyBjYWxsLmJpbmQoY2FsbCkgOiBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBjYWxsLmFwcGx5KGNhbGwsIGFyZ3VtZW50cyk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciAkcHJvcGVydHlJc0VudW1lcmFibGUgPSB7fS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZ2V0b3ducHJvcGVydHlkZXNjcmlwdG9yIC0tIHNhZmVcbnZhciBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4vLyBOYXNob3JuIH4gSkRLOCBidWdcbnZhciBOQVNIT1JOX0JVRyA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvciAmJiAhJHByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwoeyAxOiAyIH0sIDEpO1xuXG4vLyBgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZWAgbWV0aG9kIGltcGxlbWVudGF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5wcm90b3R5cGUucHJvcGVydHlpc2VudW1lcmFibGVcbmV4cG9ydHMuZiA9IE5BU0hPUk5fQlVHID8gZnVuY3Rpb24gcHJvcGVydHlJc0VudW1lcmFibGUoVikge1xuICB2YXIgZGVzY3JpcHRvciA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvcih0aGlzLCBWKTtcbiAgcmV0dXJuICEhZGVzY3JpcHRvciAmJiBkZXNjcmlwdG9yLmVudW1lcmFibGU7XG59IDogJHByb3BlcnR5SXNFbnVtZXJhYmxlO1xuIiwgIid1c2Ugc3RyaWN0Jztcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGJpdG1hcCwgdmFsdWUpIHtcbiAgcmV0dXJuIHtcbiAgICBlbnVtZXJhYmxlOiAhKGJpdG1hcCAmIDEpLFxuICAgIGNvbmZpZ3VyYWJsZTogIShiaXRtYXAgJiAyKSxcbiAgICB3cml0YWJsZTogIShiaXRtYXAgJiA0KSxcbiAgICB2YWx1ZTogdmFsdWVcbiAgfTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIE5BVElWRV9CSU5EID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWJpbmQtbmF0aXZlJyk7XG5cbnZhciBGdW5jdGlvblByb3RvdHlwZSA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcbnZhciBjYWxsID0gRnVuY3Rpb25Qcm90b3R5cGUuY2FsbDtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1mdW5jdGlvbi1wcm90b3R5cGUtYmluZCAtLSBzYWZlXG52YXIgdW5jdXJyeVRoaXNXaXRoQmluZCA9IE5BVElWRV9CSU5EICYmIEZ1bmN0aW9uUHJvdG90eXBlLmJpbmQuYmluZChjYWxsLCBjYWxsKTtcblxubW9kdWxlLmV4cG9ydHMgPSBOQVRJVkVfQklORCA/IHVuY3VycnlUaGlzV2l0aEJpbmQgOiBmdW5jdGlvbiAoZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gY2FsbC5hcHBseShmbiwgYXJndW1lbnRzKTtcbiAgfTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xuXG52YXIgdG9TdHJpbmcgPSB1bmN1cnJ5VGhpcyh7fS50b1N0cmluZyk7XG52YXIgc3RyaW5nU2xpY2UgPSB1bmN1cnJ5VGhpcygnJy5zbGljZSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBzdHJpbmdTbGljZSh0b1N0cmluZyhpdCksIDgsIC0xKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jbGFzc29mLXJhdycpO1xuXG52YXIgJE9iamVjdCA9IE9iamVjdDtcbnZhciBzcGxpdCA9IHVuY3VycnlUaGlzKCcnLnNwbGl0KTtcblxuLy8gZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBhbmQgbm9uLWVudW1lcmFibGUgb2xkIFY4IHN0cmluZ3Ncbm1vZHVsZS5leHBvcnRzID0gZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyB0aHJvd3MgYW4gZXJyb3IgaW4gcmhpbm8sIHNlZSBodHRwczovL2dpdGh1Yi5jb20vbW96aWxsYS9yaGluby9pc3N1ZXMvMzQ2XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnMgLS0gc2FmZVxuICByZXR1cm4gISRPYmplY3QoJ3onKS5wcm9wZXJ0eUlzRW51bWVyYWJsZSgwKTtcbn0pID8gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBjbGFzc29mKGl0KSA9PT0gJ1N0cmluZycgPyBzcGxpdChpdCwgJycpIDogJE9iamVjdChpdCk7XG59IDogJE9iamVjdDtcbiIsICIndXNlIHN0cmljdCc7XG4vLyB3ZSBjYW4ndCB1c2UganVzdCBgaXQgPT0gbnVsbGAgc2luY2Ugb2YgYGRvY3VtZW50LmFsbGAgc3BlY2lhbCBjYXNlXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLUlzSFRNTEREQS1pbnRlcm5hbC1zbG90LWFlY1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGl0ID09PSBudWxsIHx8IGl0ID09PSB1bmRlZmluZWQ7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBpc051bGxPclVuZGVmaW5lZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1udWxsLW9yLXVuZGVmaW5lZCcpO1xuXG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcblxuLy8gYFJlcXVpcmVPYmplY3RDb2VyY2libGVgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1yZXF1aXJlb2JqZWN0Y29lcmNpYmxlXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoaXNOdWxsT3JVbmRlZmluZWQoaXQpKSB0aHJvdyBuZXcgJFR5cGVFcnJvcihcIkNhbid0IGNhbGwgbWV0aG9kIG9uIFwiICsgaXQpO1xuICByZXR1cm4gaXQ7XG59O1xuIiwgIid1c2Ugc3RyaWN0Jztcbi8vIHRvT2JqZWN0IHdpdGggZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBzdHJpbmdzXG52YXIgSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbmRleGVkLW9iamVjdCcpO1xudmFyIHJlcXVpcmVPYmplY3RDb2VyY2libGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBJbmRleGVkT2JqZWN0KHJlcXVpcmVPYmplY3RDb2VyY2libGUoaXQpKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1Jc0hUTUxEREEtaW50ZXJuYWwtc2xvdFxudmFyIGRvY3VtZW50QWxsID0gdHlwZW9mIGRvY3VtZW50ID09ICdvYmplY3QnICYmIGRvY3VtZW50LmFsbDtcblxuLy8gYElzQ2FsbGFibGVgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1pc2NhbGxhYmxlXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgdW5pY29ybi9uby10eXBlb2YtdW5kZWZpbmVkIC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nXG5tb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiBkb2N1bWVudEFsbCA9PSAndW5kZWZpbmVkJyAmJiBkb2N1bWVudEFsbCAhPT0gdW5kZWZpbmVkID8gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHJldHVybiB0eXBlb2YgYXJndW1lbnQgPT0gJ2Z1bmN0aW9uJyB8fCBhcmd1bWVudCA9PT0gZG9jdW1lbnRBbGw7XG59IDogZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHJldHVybiB0eXBlb2YgYXJndW1lbnQgPT0gJ2Z1bmN0aW9uJztcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PSAnb2JqZWN0JyA/IGl0ICE9PSBudWxsIDogaXNDYWxsYWJsZShpdCk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWxUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbC10aGlzJyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xuXG52YXIgYUZ1bmN0aW9uID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHJldHVybiBpc0NhbGxhYmxlKGFyZ3VtZW50KSA/IGFyZ3VtZW50IDogdW5kZWZpbmVkO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobmFtZXNwYWNlLCBtZXRob2QpIHtcbiAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPCAyID8gYUZ1bmN0aW9uKGdsb2JhbFRoaXNbbmFtZXNwYWNlXSkgOiBnbG9iYWxUaGlzW25hbWVzcGFjZV0gJiYgZ2xvYmFsVGhpc1tuYW1lc3BhY2VdW21ldGhvZF07XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSB1bmN1cnJ5VGhpcyh7fS5pc1Byb3RvdHlwZU9mKTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsVGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwtdGhpcycpO1xuXG52YXIgbmF2aWdhdG9yID0gZ2xvYmFsVGhpcy5uYXZpZ2F0b3I7XG52YXIgdXNlckFnZW50ID0gbmF2aWdhdG9yICYmIG5hdmlnYXRvci51c2VyQWdlbnQ7XG5cbm1vZHVsZS5leHBvcnRzID0gdXNlckFnZW50ID8gU3RyaW5nKHVzZXJBZ2VudCkgOiAnJztcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsVGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwtdGhpcycpO1xudmFyIHVzZXJBZ2VudCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbnZpcm9ubWVudC11c2VyLWFnZW50Jyk7XG5cbnZhciBwcm9jZXNzID0gZ2xvYmFsVGhpcy5wcm9jZXNzO1xudmFyIERlbm8gPSBnbG9iYWxUaGlzLkRlbm87XG52YXIgdmVyc2lvbnMgPSBwcm9jZXNzICYmIHByb2Nlc3MudmVyc2lvbnMgfHwgRGVubyAmJiBEZW5vLnZlcnNpb247XG52YXIgdjggPSB2ZXJzaW9ucyAmJiB2ZXJzaW9ucy52ODtcbnZhciBtYXRjaCwgdmVyc2lvbjtcblxuaWYgKHY4KSB7XG4gIG1hdGNoID0gdjguc3BsaXQoJy4nKTtcbiAgLy8gaW4gb2xkIENocm9tZSwgdmVyc2lvbnMgb2YgVjggaXNuJ3QgVjggPSBDaHJvbWUgLyAxMFxuICAvLyBidXQgdGhlaXIgY29ycmVjdCB2ZXJzaW9ucyBhcmUgbm90IGludGVyZXN0aW5nIGZvciB1c1xuICB2ZXJzaW9uID0gbWF0Y2hbMF0gPiAwICYmIG1hdGNoWzBdIDwgNCA/IDEgOiArKG1hdGNoWzBdICsgbWF0Y2hbMV0pO1xufVxuXG4vLyBCcm93c2VyRlMgTm9kZUpTIGBwcm9jZXNzYCBwb2x5ZmlsbCBpbmNvcnJlY3RseSBzZXQgYC52OGAgdG8gYDAuMGBcbi8vIHNvIGNoZWNrIGB1c2VyQWdlbnRgIGV2ZW4gaWYgYC52OGAgZXhpc3RzLCBidXQgMFxuaWYgKCF2ZXJzaW9uICYmIHVzZXJBZ2VudCkge1xuICBtYXRjaCA9IHVzZXJBZ2VudC5tYXRjaCgvRWRnZVxcLyhcXGQrKS8pO1xuICBpZiAoIW1hdGNoIHx8IG1hdGNoWzFdID49IDc0KSB7XG4gICAgbWF0Y2ggPSB1c2VyQWdlbnQubWF0Y2goL0Nocm9tZVxcLyhcXGQrKS8pO1xuICAgIGlmIChtYXRjaCkgdmVyc2lvbiA9ICttYXRjaFsxXTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHZlcnNpb247XG4iLCAiJ3VzZSBzdHJpY3QnO1xuLyogZXNsaW50LWRpc2FibGUgZXMvbm8tc3ltYm9sIC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nICovXG52YXIgVjhfVkVSU0lPTiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbnZpcm9ubWVudC12OC12ZXJzaW9uJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBnbG9iYWxUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbC10aGlzJyk7XG5cbnZhciAkU3RyaW5nID0gZ2xvYmFsVGhpcy5TdHJpbmc7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZ2V0b3ducHJvcGVydHlzeW1ib2xzIC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nXG5tb2R1bGUuZXhwb3J0cyA9ICEhT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyAmJiAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICB2YXIgc3ltYm9sID0gU3ltYm9sKCdzeW1ib2wgZGV0ZWN0aW9uJyk7XG4gIC8vIENocm9tZSAzOCBTeW1ib2wgaGFzIGluY29ycmVjdCB0b1N0cmluZyBjb252ZXJzaW9uXG4gIC8vIGBnZXQtb3duLXByb3BlcnR5LXN5bWJvbHNgIHBvbHlmaWxsIHN5bWJvbHMgY29udmVydGVkIHRvIG9iamVjdCBhcmUgbm90IFN5bWJvbCBpbnN0YW5jZXNcbiAgLy8gbmI6IERvIG5vdCBjYWxsIGBTdHJpbmdgIGRpcmVjdGx5IHRvIGF2b2lkIHRoaXMgYmVpbmcgb3B0aW1pemVkIG91dCB0byBgc3ltYm9sKycnYCB3aGljaCB3aWxsLFxuICAvLyBvZiBjb3Vyc2UsIGZhaWwuXG4gIHJldHVybiAhJFN0cmluZyhzeW1ib2wpIHx8ICEoT2JqZWN0KHN5bWJvbCkgaW5zdGFuY2VvZiBTeW1ib2wpIHx8XG4gICAgLy8gQ2hyb21lIDM4LTQwIHN5bWJvbHMgYXJlIG5vdCBpbmhlcml0ZWQgZnJvbSBET00gY29sbGVjdGlvbnMgcHJvdG90eXBlcyB0byBpbnN0YW5jZXNcbiAgICAhU3ltYm9sLnNoYW0gJiYgVjhfVkVSU0lPTiAmJiBWOF9WRVJTSU9OIDwgNDE7XG59KTtcbiIsICIndXNlIHN0cmljdCc7XG4vKiBlc2xpbnQtZGlzYWJsZSBlcy9uby1zeW1ib2wgLS0gcmVxdWlyZWQgZm9yIHRlc3RpbmcgKi9cbnZhciBOQVRJVkVfU1lNQk9MID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3N5bWJvbC1jb25zdHJ1Y3Rvci1kZXRlY3Rpb24nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBOQVRJVkVfU1lNQk9MICYmXG4gICFTeW1ib2wuc2hhbSAmJlxuICB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09ICdzeW1ib2wnO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnZXRCdWlsdEluID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1idWlsdC1pbicpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcbnZhciBpc1Byb3RvdHlwZU9mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1pcy1wcm90b3R5cGUtb2YnKTtcbnZhciBVU0VfU1lNQk9MX0FTX1VJRCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy91c2Utc3ltYm9sLWFzLXVpZCcpO1xuXG52YXIgJE9iamVjdCA9IE9iamVjdDtcblxubW9kdWxlLmV4cG9ydHMgPSBVU0VfU1lNQk9MX0FTX1VJRCA/IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gdHlwZW9mIGl0ID09ICdzeW1ib2wnO1xufSA6IGZ1bmN0aW9uIChpdCkge1xuICB2YXIgJFN5bWJvbCA9IGdldEJ1aWx0SW4oJ1N5bWJvbCcpO1xuICByZXR1cm4gaXNDYWxsYWJsZSgkU3ltYm9sKSAmJiBpc1Byb3RvdHlwZU9mKCRTeW1ib2wucHJvdG90eXBlLCAkT2JqZWN0KGl0KSk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciAkU3RyaW5nID0gU3RyaW5nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICB0cnkge1xuICAgIHJldHVybiAkU3RyaW5nKGFyZ3VtZW50KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4gJ09iamVjdCc7XG4gIH1cbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcbnZhciB0cnlUb1N0cmluZyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90cnktdG8tc3RyaW5nJyk7XG5cbnZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xuXG4vLyBgQXNzZXJ0OiBJc0NhbGxhYmxlKGFyZ3VtZW50KSBpcyB0cnVlYFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgaWYgKGlzQ2FsbGFibGUoYXJndW1lbnQpKSByZXR1cm4gYXJndW1lbnQ7XG4gIHRocm93IG5ldyAkVHlwZUVycm9yKHRyeVRvU3RyaW5nKGFyZ3VtZW50KSArICcgaXMgbm90IGEgZnVuY3Rpb24nKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGFDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hLWNhbGxhYmxlJyk7XG52YXIgaXNOdWxsT3JVbmRlZmluZWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtbnVsbC1vci11bmRlZmluZWQnKTtcblxuLy8gYEdldE1ldGhvZGAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWdldG1ldGhvZFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoViwgUCkge1xuICB2YXIgZnVuYyA9IFZbUF07XG4gIHJldHVybiBpc051bGxPclVuZGVmaW5lZChmdW5jKSA/IHVuZGVmaW5lZCA6IGFDYWxsYWJsZShmdW5jKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGNhbGwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tY2FsbCcpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcblxudmFyICRUeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG5cbi8vIGBPcmRpbmFyeVRvUHJpbWl0aXZlYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb3JkaW5hcnl0b3ByaW1pdGl2ZVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaW5wdXQsIHByZWYpIHtcbiAgdmFyIGZuLCB2YWw7XG4gIGlmIChwcmVmID09PSAnc3RyaW5nJyAmJiBpc0NhbGxhYmxlKGZuID0gaW5wdXQudG9TdHJpbmcpICYmICFpc09iamVjdCh2YWwgPSBjYWxsKGZuLCBpbnB1dCkpKSByZXR1cm4gdmFsO1xuICBpZiAoaXNDYWxsYWJsZShmbiA9IGlucHV0LnZhbHVlT2YpICYmICFpc09iamVjdCh2YWwgPSBjYWxsKGZuLCBpbnB1dCkpKSByZXR1cm4gdmFsO1xuICBpZiAocHJlZiAhPT0gJ3N0cmluZycgJiYgaXNDYWxsYWJsZShmbiA9IGlucHV0LnRvU3RyaW5nKSAmJiAhaXNPYmplY3QodmFsID0gY2FsbChmbiwgaW5wdXQpKSkgcmV0dXJuIHZhbDtcbiAgdGhyb3cgbmV3ICRUeXBlRXJyb3IoXCJDYW4ndCBjb252ZXJ0IG9iamVjdCB0byBwcmltaXRpdmUgdmFsdWVcIik7XG59O1xuIiwgIid1c2Ugc3RyaWN0Jztcbm1vZHVsZS5leHBvcnRzID0gZmFsc2U7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbFRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsLXRoaXMnKTtcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1kZWZpbmVwcm9wZXJ0eSAtLSBzYWZlXG52YXIgZGVmaW5lUHJvcGVydHkgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgdHJ5IHtcbiAgICBkZWZpbmVQcm9wZXJ0eShnbG9iYWxUaGlzLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGdsb2JhbFRoaXNba2V5XSA9IHZhbHVlO1xuICB9IHJldHVybiB2YWx1ZTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIElTX1BVUkUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtcHVyZScpO1xudmFyIGdsb2JhbFRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsLXRoaXMnKTtcbnZhciBkZWZpbmVHbG9iYWxQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZWZpbmUtZ2xvYmFsLXByb3BlcnR5Jyk7XG5cbnZhciBTSEFSRUQgPSAnX19jb3JlLWpzX3NoYXJlZF9fJztcbnZhciBzdG9yZSA9IG1vZHVsZS5leHBvcnRzID0gZ2xvYmFsVGhpc1tTSEFSRURdIHx8IGRlZmluZUdsb2JhbFByb3BlcnR5KFNIQVJFRCwge30pO1xuXG4oc3RvcmUudmVyc2lvbnMgfHwgKHN0b3JlLnZlcnNpb25zID0gW10pKS5wdXNoKHtcbiAgdmVyc2lvbjogJzMuNTAuMCcsXG4gIG1vZGU6IElTX1BVUkUgPyAncHVyZScgOiAnZ2xvYmFsJyxcbiAgY29weXJpZ2h0OiAnwqkgMjAxM+KAkzIwMjUgRGVuaXMgUHVzaGthcmV2ICh6bG9pcm9jay5ydSksIDIwMjXigJMyMDI2IENvcmVKUyBDb21wYW55IChjb3JlLWpzLmlvKS4gQWxsIHJpZ2h0cyByZXNlcnZlZC4nLFxuICBsaWNlbnNlOiAnaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvYmxvYi92My41MC4wL0xJQ0VOU0UnLFxuICBzb3VyY2U6ICdodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcydcbn0pO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBzdG9yZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQtc3RvcmUnKTtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtY3JlYXRlIC0tIHNhZmVcbnZhciBjcmVhdGUgPSBPYmplY3QuY3JlYXRlIHx8IE9iamVjdDtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICByZXR1cm4gc3RvcmVba2V5XSB8fCAoc3RvcmVba2V5XSA9IHZhbHVlIHx8IGNyZWF0ZShudWxsKSk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciByZXF1aXJlT2JqZWN0Q29lcmNpYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZScpO1xuXG52YXIgJE9iamVjdCA9IE9iamVjdDtcblxuLy8gYFRvT2JqZWN0YCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtdG9vYmplY3Rcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHJldHVybiAkT2JqZWN0KHJlcXVpcmVPYmplY3RDb2VyY2libGUoYXJndW1lbnQpKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLW9iamVjdCcpO1xuXG52YXIgaGFzT3duUHJvcGVydHkgPSB1bmN1cnJ5VGhpcyh7fS5oYXNPd25Qcm9wZXJ0eSk7XG5cbi8vIGBIYXNPd25Qcm9wZXJ0eWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWhhc293bnByb3BlcnR5XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWhhc293biAtLSBzYWZlXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5oYXNPd24gfHwgZnVuY3Rpb24gaGFzT3duKGl0LCBrZXkpIHtcbiAgcmV0dXJuIGhhc093blByb3BlcnR5KHRvT2JqZWN0KGl0KSwga2V5KTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xuXG52YXIgaWQgPSAwO1xudmFyIHBvc3RmaXggPSBNYXRoLnJhbmRvbSgpO1xudmFyIHRvU3RyaW5nID0gdW5jdXJyeVRoaXMoMS4xLnRvU3RyaW5nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHJldHVybiAnU3ltYm9sKCcgKyAoa2V5ID09PSB1bmRlZmluZWQgPyAnJyA6IGtleSkgKyAnKV8nICsgdG9TdHJpbmcoKytpZCArIHBvc3RmaXgsIDM2KTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbFRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsLXRoaXMnKTtcbnZhciBzaGFyZWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkJyk7XG52YXIgaGFzT3duID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcy1vd24tcHJvcGVydHknKTtcbnZhciB1aWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdWlkJyk7XG52YXIgTkFUSVZFX1NZTUJPTCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zeW1ib2wtY29uc3RydWN0b3ItZGV0ZWN0aW9uJyk7XG52YXIgVVNFX1NZTUJPTF9BU19VSUQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdXNlLXN5bWJvbC1hcy11aWQnKTtcblxudmFyIFN5bWJvbCA9IGdsb2JhbFRoaXMuU3ltYm9sO1xudmFyIFdlbGxLbm93blN5bWJvbHNTdG9yZSA9IHNoYXJlZCgnd2tzJyk7XG52YXIgY3JlYXRlV2VsbEtub3duU3ltYm9sID0gVVNFX1NZTUJPTF9BU19VSUQgPyBTeW1ib2xbJ2ZvciddIHx8IFN5bWJvbCA6IFN5bWJvbCAmJiBTeW1ib2wud2l0aG91dFNldHRlciB8fCB1aWQ7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgaWYgKCFoYXNPd24oV2VsbEtub3duU3ltYm9sc1N0b3JlLCBuYW1lKSkge1xuICAgIFdlbGxLbm93blN5bWJvbHNTdG9yZVtuYW1lXSA9IE5BVElWRV9TWU1CT0wgJiYgaGFzT3duKFN5bWJvbCwgbmFtZSlcbiAgICAgID8gU3ltYm9sW25hbWVdXG4gICAgICA6IGNyZWF0ZVdlbGxLbm93blN5bWJvbCgnU3ltYm9sLicgKyBuYW1lKTtcbiAgfSByZXR1cm4gV2VsbEtub3duU3ltYm9sc1N0b3JlW25hbWVdO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgY2FsbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1jYWxsJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG52YXIgaXNTeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtc3ltYm9sJyk7XG52YXIgZ2V0TWV0aG9kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1tZXRob2QnKTtcbnZhciBvcmRpbmFyeVRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29yZGluYXJ5LXRvLXByaW1pdGl2ZScpO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xuXG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcbnZhciBUT19QUklNSVRJVkUgPSB3ZWxsS25vd25TeW1ib2woJ3RvUHJpbWl0aXZlJyk7XG5cbi8vIGBUb1ByaW1pdGl2ZWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXRvcHJpbWl0aXZlXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpbnB1dCwgcHJlZikge1xuICBpZiAoIWlzT2JqZWN0KGlucHV0KSB8fCBpc1N5bWJvbChpbnB1dCkpIHJldHVybiBpbnB1dDtcbiAgdmFyIGV4b3RpY1RvUHJpbSA9IGdldE1ldGhvZChpbnB1dCwgVE9fUFJJTUlUSVZFKTtcbiAgdmFyIHJlc3VsdDtcbiAgaWYgKGV4b3RpY1RvUHJpbSkge1xuICAgIGlmIChwcmVmID09PSB1bmRlZmluZWQpIHByZWYgPSAnZGVmYXVsdCc7XG4gICAgcmVzdWx0ID0gY2FsbChleG90aWNUb1ByaW0sIGlucHV0LCBwcmVmKTtcbiAgICBpZiAoIWlzT2JqZWN0KHJlc3VsdCkgfHwgaXNTeW1ib2wocmVzdWx0KSkgcmV0dXJuIHJlc3VsdDtcbiAgICB0aHJvdyBuZXcgJFR5cGVFcnJvcihcIkNhbid0IGNvbnZlcnQgb2JqZWN0IHRvIHByaW1pdGl2ZSB2YWx1ZVwiKTtcbiAgfVxuICBpZiAocHJlZiA9PT0gdW5kZWZpbmVkKSBwcmVmID0gJ251bWJlcic7XG4gIHJldHVybiBvcmRpbmFyeVRvUHJpbWl0aXZlKGlucHV0LCBwcmVmKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXByaW1pdGl2ZScpO1xudmFyIGlzU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLXN5bWJvbCcpO1xuXG4vLyBgVG9Qcm9wZXJ0eUtleWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXRvcHJvcGVydHlrZXlcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHZhciBrZXkgPSB0b1ByaW1pdGl2ZShhcmd1bWVudCwgJ3N0cmluZycpO1xuICByZXR1cm4gaXNTeW1ib2woa2V5KSA/IGtleSA6IGtleSArICcnO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsVGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwtdGhpcycpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xuXG52YXIgZG9jdW1lbnQgPSBnbG9iYWxUaGlzLmRvY3VtZW50O1xuLy8gdHlwZW9mIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgaXMgJ29iamVjdCcgaW4gb2xkIElFXG52YXIgRVhJU1RTID0gaXNPYmplY3QoZG9jdW1lbnQpICYmIGlzT2JqZWN0KGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gRVhJU1RTID8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChpdCkgOiB7fTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBjcmVhdGVFbGVtZW50ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RvY3VtZW50LWNyZWF0ZS1lbGVtZW50Jyk7XG5cbi8vIFRoYW5rcyB0byBJRTggZm9yIGl0cyBmdW5ueSBkZWZpbmVQcm9wZXJ0eVxubW9kdWxlLmV4cG9ydHMgPSAhREVTQ1JJUFRPUlMgJiYgIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1kZWZpbmVwcm9wZXJ0eSAtLSByZXF1aXJlZCBmb3IgdGVzdGluZ1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGNyZWF0ZUVsZW1lbnQoJ2RpdicpLCAnYScsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDc7IH1cbiAgfSkuYSAhPT0gNztcbn0pO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIGNhbGwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tY2FsbCcpO1xudmFyIHByb3BlcnR5SXNFbnVtZXJhYmxlTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1wcm9wZXJ0eS1pcy1lbnVtZXJhYmxlJyk7XG52YXIgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eS1kZXNjcmlwdG9yJyk7XG52YXIgdG9JbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWluZGV4ZWQtb2JqZWN0Jyk7XG52YXIgdG9Qcm9wZXJ0eUtleSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1wcm9wZXJ0eS1rZXknKTtcbnZhciBoYXNPd24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eScpO1xudmFyIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2llOC1kb20tZGVmaW5lJyk7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZ2V0b3ducHJvcGVydHlkZXNjcmlwdG9yIC0tIHNhZmVcbnZhciAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuLy8gYE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vYmplY3QuZ2V0b3ducHJvcGVydHlkZXNjcmlwdG9yXG5leHBvcnRzLmYgPSBERVNDUklQVE9SUyA/ICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgOiBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUCkge1xuICBPID0gdG9JbmRleGVkT2JqZWN0KE8pO1xuICBQID0gdG9Qcm9wZXJ0eUtleShQKTtcbiAgaWYgKElFOF9ET01fREVGSU5FKSB0cnkge1xuICAgIHJldHVybiAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApO1xuICB9IGNhdGNoIChlcnJvcikgeyAvKiBlbXB0eSAqLyB9XG4gIGlmIChoYXNPd24oTywgUCkpIHJldHVybiBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IoIWNhbGwocHJvcGVydHlJc0VudW1lcmFibGVNb2R1bGUuZiwgTywgUCksIE9bUF0pO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xuXG4vLyBWOCB+IENocm9tZSAzNi1cbi8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTMzMzRcbm1vZHVsZS5leHBvcnRzID0gREVTQ1JJUFRPUlMgJiYgZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWRlZmluZXByb3BlcnR5IC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nXG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9LCAncHJvdG90eXBlJywge1xuICAgIHZhbHVlOiA0MixcbiAgICB3cml0YWJsZTogZmFsc2VcbiAgfSkucHJvdG90eXBlICE9PSA0Mjtcbn0pO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcblxudmFyICRTdHJpbmcgPSBTdHJpbmc7XG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcblxuLy8gYEFzc2VydDogVHlwZShhcmd1bWVudCkgaXMgT2JqZWN0YFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgaWYgKGlzT2JqZWN0KGFyZ3VtZW50KSkgcmV0dXJuIGFyZ3VtZW50O1xuICB0aHJvdyBuZXcgJFR5cGVFcnJvcigkU3RyaW5nKGFyZ3VtZW50KSArICcgaXMgbm90IGFuIG9iamVjdCcpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pZTgtZG9tLWRlZmluZScpO1xudmFyIFY4X1BST1RPVFlQRV9ERUZJTkVfQlVHID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3Y4LXByb3RvdHlwZS1kZWZpbmUtYnVnJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgdG9Qcm9wZXJ0eUtleSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1wcm9wZXJ0eS1rZXknKTtcblxudmFyICRUeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWRlZmluZXByb3BlcnR5IC0tIHNhZmVcbnZhciAkZGVmaW5lUHJvcGVydHkgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5ZGVzY3JpcHRvciAtLSBzYWZlXG52YXIgJGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG52YXIgRU5VTUVSQUJMRSA9ICdlbnVtZXJhYmxlJztcbnZhciBDT05GSUdVUkFCTEUgPSAnY29uZmlndXJhYmxlJztcbnZhciBXUklUQUJMRSA9ICd3cml0YWJsZSc7XG5cbi8vIGBPYmplY3QuZGVmaW5lUHJvcGVydHlgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vYmplY3QuZGVmaW5lcHJvcGVydHlcbmV4cG9ydHMuZiA9IERFU0NSSVBUT1JTID8gVjhfUFJPVE9UWVBFX0RFRklORV9CVUcgPyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKSB7XG4gIGFuT2JqZWN0KE8pO1xuICBQID0gdG9Qcm9wZXJ0eUtleShQKTtcbiAgYW5PYmplY3QoQXR0cmlidXRlcyk7XG4gIGlmICh0eXBlb2YgTyA9PT0gJ2Z1bmN0aW9uJyAmJiBQID09PSAncHJvdG90eXBlJyAmJiAndmFsdWUnIGluIEF0dHJpYnV0ZXMgJiYgV1JJVEFCTEUgaW4gQXR0cmlidXRlcyAmJiAhQXR0cmlidXRlc1tXUklUQUJMRV0pIHtcbiAgICB2YXIgY3VycmVudCA9ICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUCk7XG4gICAgaWYgKGN1cnJlbnQgJiYgY3VycmVudFtXUklUQUJMRV0pIHtcbiAgICAgIE9bUF0gPSBBdHRyaWJ1dGVzLnZhbHVlO1xuICAgICAgQXR0cmlidXRlcyA9IHtcbiAgICAgICAgY29uZmlndXJhYmxlOiBDT05GSUdVUkFCTEUgaW4gQXR0cmlidXRlcyA/IEF0dHJpYnV0ZXNbQ09ORklHVVJBQkxFXSA6IGN1cnJlbnRbQ09ORklHVVJBQkxFXSxcbiAgICAgICAgZW51bWVyYWJsZTogRU5VTUVSQUJMRSBpbiBBdHRyaWJ1dGVzID8gQXR0cmlidXRlc1tFTlVNRVJBQkxFXSA6IGN1cnJlbnRbRU5VTUVSQUJMRV0sXG4gICAgICAgIHdyaXRhYmxlOiBmYWxzZVxuICAgICAgfTtcbiAgICB9XG4gIH0gcmV0dXJuICRkZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKTtcbn0gOiAkZGVmaW5lUHJvcGVydHkgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKSB7XG4gIGFuT2JqZWN0KE8pO1xuICBQID0gdG9Qcm9wZXJ0eUtleShQKTtcbiAgYW5PYmplY3QoQXR0cmlidXRlcyk7XG4gIGlmIChJRThfRE9NX0RFRklORSkgdHJ5IHtcbiAgICByZXR1cm4gJGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpO1xuICB9IGNhdGNoIChlcnJvcikgeyAvKiBlbXB0eSAqLyB9XG4gIGlmICgnZ2V0JyBpbiBBdHRyaWJ1dGVzIHx8ICdzZXQnIGluIEF0dHJpYnV0ZXMpIHRocm93IG5ldyAkVHlwZUVycm9yKCdBY2Nlc3NvcnMgbm90IHN1cHBvcnRlZCcpO1xuICBpZiAoJ3ZhbHVlJyBpbiBBdHRyaWJ1dGVzKSBPW1BdID0gQXR0cmlidXRlcy52YWx1ZTtcbiAgcmV0dXJuIE87XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIGRlZmluZVByb3BlcnR5TW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHknKTtcbnZhciBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5LWRlc2NyaXB0b3InKTtcblxubW9kdWxlLmV4cG9ydHMgPSBERVNDUklQVE9SUyA/IGZ1bmN0aW9uIChvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgcmV0dXJuIGRlZmluZVByb3BlcnR5TW9kdWxlLmYob2JqZWN0LCBrZXksIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvcigxLCB2YWx1ZSkpO1xufSA6IGZ1bmN0aW9uIChvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgb2JqZWN0W2tleV0gPSB2YWx1ZTtcbiAgcmV0dXJuIG9iamVjdDtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgaGFzT3duID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcy1vd24tcHJvcGVydHknKTtcblxudmFyIEZ1bmN0aW9uUHJvdG90eXBlID0gRnVuY3Rpb24ucHJvdG90eXBlO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1nZXRvd25wcm9wZXJ0eWRlc2NyaXB0b3IgLS0gc2FmZVxudmFyIGdldERlc2NyaXB0b3IgPSBERVNDUklQVE9SUyAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG52YXIgRVhJU1RTID0gaGFzT3duKEZ1bmN0aW9uUHJvdG90eXBlLCAnbmFtZScpO1xuLy8gYWRkaXRpb25hbCBwcm90ZWN0aW9uIGZyb20gbWluaWZpZWQgLyBtYW5nbGVkIC8gZHJvcHBlZCBmdW5jdGlvbiBuYW1lc1xudmFyIFBST1BFUiA9IEVYSVNUUyAmJiBmdW5jdGlvbiBzb21ldGhpbmcoKSB7IC8qIGVtcHR5ICovIH0ubmFtZSA9PT0gJ3NvbWV0aGluZyc7XG52YXIgQ09ORklHVVJBQkxFID0gRVhJU1RTICYmICghREVTQ1JJUFRPUlMgfHwgKERFU0NSSVBUT1JTICYmIGdldERlc2NyaXB0b3IoRnVuY3Rpb25Qcm90b3R5cGUsICduYW1lJykuY29uZmlndXJhYmxlKSk7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBFWElTVFM6IEVYSVNUUyxcbiAgUFJPUEVSOiBQUk9QRVIsXG4gIENPTkZJR1VSQUJMRTogQ09ORklHVVJBQkxFXG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgc3RvcmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkLXN0b3JlJyk7XG5cbnZhciBmdW5jdGlvblRvU3RyaW5nID0gdW5jdXJyeVRoaXMoRnVuY3Rpb24udG9TdHJpbmcpO1xuXG4vLyB0aGlzIGhlbHBlciBicm9rZW4gaW4gYGNvcmUtanNAMy40LjEtMy40LjRgLCBzbyB3ZSBjYW4ndCB1c2UgYHNoYXJlZGAgaGVscGVyXG5pZiAoIWlzQ2FsbGFibGUoc3RvcmUuaW5zcGVjdFNvdXJjZSkpIHtcbiAgc3RvcmUuaW5zcGVjdFNvdXJjZSA9IGZ1bmN0aW9uIChpdCkge1xuICAgIHJldHVybiBmdW5jdGlvblRvU3RyaW5nKGl0KTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdG9yZS5pbnNwZWN0U291cmNlO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWxUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbC10aGlzJyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xuXG52YXIgV2Vha01hcCA9IGdsb2JhbFRoaXMuV2Vha01hcDtcblxubW9kdWxlLmV4cG9ydHMgPSBpc0NhbGxhYmxlKFdlYWtNYXApICYmIC9uYXRpdmUgY29kZS8udGVzdChTdHJpbmcoV2Vha01hcCkpO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBzaGFyZWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkJyk7XG52YXIgdWlkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3VpZCcpO1xuXG52YXIga2V5cyA9IHNoYXJlZCgna2V5cycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuIGtleXNba2V5XSB8fCAoa2V5c1trZXldID0gdWlkKGtleSkpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG5tb2R1bGUuZXhwb3J0cyA9IHt9O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBOQVRJVkVfV0VBS19NQVAgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2Vhay1tYXAtYmFzaWMtZGV0ZWN0aW9uJyk7XG52YXIgZ2xvYmFsVGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwtdGhpcycpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xudmFyIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHknKTtcbnZhciBoYXNPd24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eScpO1xudmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQtc3RvcmUnKTtcbnZhciBzaGFyZWRLZXkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkLWtleScpO1xudmFyIGhpZGRlbktleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGlkZGVuLWtleXMnKTtcblxudmFyIE9CSkVDVF9BTFJFQURZX0lOSVRJQUxJWkVEID0gJ09iamVjdCBhbHJlYWR5IGluaXRpYWxpemVkJztcbnZhciBUeXBlRXJyb3IgPSBnbG9iYWxUaGlzLlR5cGVFcnJvcjtcbnZhciBXZWFrTWFwID0gZ2xvYmFsVGhpcy5XZWFrTWFwO1xudmFyIHNldCwgZ2V0LCBoYXM7XG5cbnZhciBlbmZvcmNlID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBoYXMoaXQpID8gZ2V0KGl0KSA6IHNldChpdCwge30pO1xufTtcblxudmFyIGdldHRlckZvciA9IGZ1bmN0aW9uIChUWVBFKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoaXQpIHtcbiAgICB2YXIgc3RhdGU7XG4gICAgaWYgKCFpc09iamVjdChpdCkgfHwgKHN0YXRlID0gZ2V0KGl0KSkudHlwZSAhPT0gVFlQRSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignSW5jb21wYXRpYmxlIHJlY2VpdmVyLCAnICsgVFlQRSArICcgcmVxdWlyZWQnKTtcbiAgICB9IHJldHVybiBzdGF0ZTtcbiAgfTtcbn07XG5cbmlmIChOQVRJVkVfV0VBS19NQVAgfHwgc2hhcmVkLnN0YXRlKSB7XG4gIHZhciBzdG9yZSA9IHNoYXJlZC5zdGF0ZSB8fCAoc2hhcmVkLnN0YXRlID0gbmV3IFdlYWtNYXAoKSk7XG4gIC8qIGVzbGludC1kaXNhYmxlIG5vLXNlbGYtYXNzaWduIC0tIHByb3RvdHlwZSBtZXRob2RzIHByb3RlY3Rpb24gKi9cbiAgc3RvcmUuZ2V0ID0gc3RvcmUuZ2V0O1xuICBzdG9yZS5oYXMgPSBzdG9yZS5oYXM7XG4gIHN0b3JlLnNldCA9IHN0b3JlLnNldDtcbiAgLyogZXNsaW50LWVuYWJsZSBuby1zZWxmLWFzc2lnbiAtLSBwcm90b3R5cGUgbWV0aG9kcyBwcm90ZWN0aW9uICovXG4gIHNldCA9IGZ1bmN0aW9uIChpdCwgbWV0YWRhdGEpIHtcbiAgICBpZiAoc3RvcmUuaGFzKGl0KSkgdGhyb3cgbmV3IFR5cGVFcnJvcihPQkpFQ1RfQUxSRUFEWV9JTklUSUFMSVpFRCk7XG4gICAgbWV0YWRhdGEuZmFjYWRlID0gaXQ7XG4gICAgc3RvcmUuc2V0KGl0LCBtZXRhZGF0YSk7XG4gICAgcmV0dXJuIG1ldGFkYXRhO1xuICB9O1xuICBnZXQgPSBmdW5jdGlvbiAoaXQpIHtcbiAgICByZXR1cm4gc3RvcmUuZ2V0KGl0KSB8fCB7fTtcbiAgfTtcbiAgaGFzID0gZnVuY3Rpb24gKGl0KSB7XG4gICAgcmV0dXJuIHN0b3JlLmhhcyhpdCk7XG4gIH07XG59IGVsc2Uge1xuICB2YXIgU1RBVEUgPSBzaGFyZWRLZXkoJ3N0YXRlJyk7XG4gIGhpZGRlbktleXNbU1RBVEVdID0gdHJ1ZTtcbiAgc2V0ID0gZnVuY3Rpb24gKGl0LCBtZXRhZGF0YSkge1xuICAgIGlmIChoYXNPd24oaXQsIFNUQVRFKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihPQkpFQ1RfQUxSRUFEWV9JTklUSUFMSVpFRCk7XG4gICAgbWV0YWRhdGEuZmFjYWRlID0gaXQ7XG4gICAgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5KGl0LCBTVEFURSwgbWV0YWRhdGEpO1xuICAgIHJldHVybiBtZXRhZGF0YTtcbiAgfTtcbiAgZ2V0ID0gZnVuY3Rpb24gKGl0KSB7XG4gICAgcmV0dXJuIGhhc093bihpdCwgU1RBVEUpID8gaXRbU1RBVEVdIDoge307XG4gIH07XG4gIGhhcyA9IGZ1bmN0aW9uIChpdCkge1xuICAgIHJldHVybiBoYXNPd24oaXQsIFNUQVRFKTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHNldDogc2V0LFxuICBnZXQ6IGdldCxcbiAgaGFzOiBoYXMsXG4gIGVuZm9yY2U6IGVuZm9yY2UsXG4gIGdldHRlckZvcjogZ2V0dGVyRm9yXG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcbnZhciBoYXNPd24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eScpO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgQ09ORklHVVJBQkxFX0ZVTkNUSU9OX05BTUUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tbmFtZScpLkNPTkZJR1VSQUJMRTtcbnZhciBpbnNwZWN0U291cmNlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2luc3BlY3Qtc291cmNlJyk7XG52YXIgSW50ZXJuYWxTdGF0ZU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbnRlcm5hbC1zdGF0ZScpO1xuXG52YXIgZW5mb3JjZUludGVybmFsU3RhdGUgPSBJbnRlcm5hbFN0YXRlTW9kdWxlLmVuZm9yY2U7XG52YXIgZ2V0SW50ZXJuYWxTdGF0ZSA9IEludGVybmFsU3RhdGVNb2R1bGUuZ2V0O1xudmFyICRTdHJpbmcgPSBTdHJpbmc7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWRlZmluZXByb3BlcnR5IC0tIHNhZmVcbnZhciBkZWZpbmVQcm9wZXJ0eSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcbnZhciBzdHJpbmdTbGljZSA9IHVuY3VycnlUaGlzKCcnLnNsaWNlKTtcbnZhciByZXBsYWNlID0gdW5jdXJyeVRoaXMoJycucmVwbGFjZSk7XG52YXIgam9pbiA9IHVuY3VycnlUaGlzKFtdLmpvaW4pO1xuXG52YXIgQ09ORklHVVJBQkxFX0xFTkdUSCA9IERFU0NSSVBUT1JTICYmICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBkZWZpbmVQcm9wZXJ0eShmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH0sICdsZW5ndGgnLCB7IHZhbHVlOiA4IH0pLmxlbmd0aCAhPT0gODtcbn0pO1xuXG52YXIgVEVNUExBVEUgPSBTdHJpbmcoU3RyaW5nKS5zcGxpdCgnU3RyaW5nJyk7XG5cbnZhciBtYWtlQnVpbHRJbiA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHZhbHVlLCBuYW1lLCBvcHRpb25zKSB7XG4gIGlmIChzdHJpbmdTbGljZSgkU3RyaW5nKG5hbWUpLCAwLCA3KSA9PT0gJ1N5bWJvbCgnKSB7XG4gICAgbmFtZSA9ICdbJyArIHJlcGxhY2UoJFN0cmluZyhuYW1lKSwgL15TeW1ib2xcXCgoW14pXSopXFwpLiokLywgJyQxJykgKyAnXSc7XG4gIH1cbiAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5nZXR0ZXIpIG5hbWUgPSAnZ2V0ICcgKyBuYW1lO1xuICBpZiAob3B0aW9ucyAmJiBvcHRpb25zLnNldHRlcikgbmFtZSA9ICdzZXQgJyArIG5hbWU7XG4gIGlmICghaGFzT3duKHZhbHVlLCAnbmFtZScpIHx8IChDT05GSUdVUkFCTEVfRlVOQ1RJT05fTkFNRSAmJiB2YWx1ZS5uYW1lICE9PSBuYW1lKSkge1xuICAgIGlmIChERVNDUklQVE9SUykgZGVmaW5lUHJvcGVydHkodmFsdWUsICduYW1lJywgeyB2YWx1ZTogbmFtZSwgY29uZmlndXJhYmxlOiB0cnVlIH0pO1xuICAgIGVsc2UgdmFsdWUubmFtZSA9IG5hbWU7XG4gIH1cbiAgaWYgKENPTkZJR1VSQUJMRV9MRU5HVEggJiYgb3B0aW9ucyAmJiBoYXNPd24ob3B0aW9ucywgJ2FyaXR5JykgJiYgdmFsdWUubGVuZ3RoICE9PSBvcHRpb25zLmFyaXR5KSB7XG4gICAgZGVmaW5lUHJvcGVydHkodmFsdWUsICdsZW5ndGgnLCB7IHZhbHVlOiBvcHRpb25zLmFyaXR5IH0pO1xuICB9XG4gIHRyeSB7XG4gICAgaWYgKG9wdGlvbnMgJiYgaGFzT3duKG9wdGlvbnMsICdjb25zdHJ1Y3RvcicpICYmIG9wdGlvbnMuY29uc3RydWN0b3IpIHtcbiAgICAgIGlmIChERVNDUklQVE9SUykgZGVmaW5lUHJvcGVydHkodmFsdWUsICdwcm90b3R5cGUnLCB7IHdyaXRhYmxlOiBmYWxzZSB9KTtcbiAgICAvLyBpbiBWOCB+IENocm9tZSA1MywgcHJvdG90eXBlcyBvZiBzb21lIG1ldGhvZHMsIGxpa2UgYEFycmF5LnByb3RvdHlwZS52YWx1ZXNgLCBhcmUgbm9uLXdyaXRhYmxlXG4gICAgfSBlbHNlIGlmICh2YWx1ZS5wcm90b3R5cGUpIHZhbHVlLnByb3RvdHlwZSA9IHVuZGVmaW5lZDtcbiAgfSBjYXRjaCAoZXJyb3IpIHsgLyogZW1wdHkgKi8gfVxuICB2YXIgc3RhdGUgPSBlbmZvcmNlSW50ZXJuYWxTdGF0ZSh2YWx1ZSk7XG4gIGlmICghaGFzT3duKHN0YXRlLCAnc291cmNlJykpIHtcbiAgICBzdGF0ZS5zb3VyY2UgPSBqb2luKFRFTVBMQVRFLCB0eXBlb2YgbmFtZSA9PSAnc3RyaW5nJyA/IG5hbWUgOiAnJyk7XG4gIH0gcmV0dXJuIHZhbHVlO1xufTtcblxuLy8gYWRkIGZha2UgRnVuY3Rpb24jdG9TdHJpbmcgZm9yIGNvcnJlY3Qgd29yayB3cmFwcGVkIG1ldGhvZHMgLyBjb25zdHJ1Y3RvcnMgd2l0aCBtZXRob2RzIGxpa2UgTG9EYXNoIGlzTmF0aXZlXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tZXh0ZW5kLW5hdGl2ZSAtLSByZXF1aXJlZFxuRnVuY3Rpb24ucHJvdG90eXBlLnRvU3RyaW5nID0gbWFrZUJ1aWx0SW4oZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gIHJldHVybiBpc0NhbGxhYmxlKHRoaXMpICYmIGdldEludGVybmFsU3RhdGUodGhpcykuc291cmNlIHx8IGluc3BlY3RTb3VyY2UodGhpcyk7XG59LCAndG9TdHJpbmcnKTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xudmFyIGRlZmluZVByb3BlcnR5TW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHknKTtcbnZhciBtYWtlQnVpbHRJbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9tYWtlLWJ1aWx0LWluJyk7XG52YXIgZGVmaW5lR2xvYmFsUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVmaW5lLWdsb2JhbC1wcm9wZXJ0eScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChPLCBrZXksIHZhbHVlLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykgb3B0aW9ucyA9IHt9O1xuICB2YXIgc2ltcGxlID0gb3B0aW9ucy5lbnVtZXJhYmxlO1xuICB2YXIgbmFtZSA9IG9wdGlvbnMubmFtZSAhPT0gdW5kZWZpbmVkID8gb3B0aW9ucy5uYW1lIDoga2V5O1xuICBpZiAoaXNDYWxsYWJsZSh2YWx1ZSkpIG1ha2VCdWlsdEluKHZhbHVlLCBuYW1lLCBvcHRpb25zKTtcbiAgaWYgKG9wdGlvbnMuZ2xvYmFsKSB7XG4gICAgaWYgKHNpbXBsZSkgT1trZXldID0gdmFsdWU7XG4gICAgZWxzZSBkZWZpbmVHbG9iYWxQcm9wZXJ0eShrZXksIHZhbHVlKTtcbiAgfSBlbHNlIHtcbiAgICB0cnkge1xuICAgICAgaWYgKCFvcHRpb25zLnVuc2FmZSkgZGVsZXRlIE9ba2V5XTtcbiAgICAgIGVsc2UgaWYgKE9ba2V5XSkgc2ltcGxlID0gdHJ1ZTtcbiAgICB9IGNhdGNoIChlcnJvcikgeyAvKiBlbXB0eSAqLyB9XG4gICAgaWYgKHNpbXBsZSkgT1trZXldID0gdmFsdWU7XG4gICAgZWxzZSBkZWZpbmVQcm9wZXJ0eU1vZHVsZS5mKE8sIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICBjb25maWd1cmFibGU6ICFvcHRpb25zLm5vbkNvbmZpZ3VyYWJsZSxcbiAgICAgIHdyaXRhYmxlOiAhb3B0aW9ucy5ub25Xcml0YWJsZVxuICAgIH0pO1xuICB9IHJldHVybiBPO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgY2VpbCA9IE1hdGguY2VpbDtcbnZhciBmbG9vciA9IE1hdGguZmxvb3I7XG5cbi8vIGBNYXRoLnRydW5jYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtbWF0aC50cnVuY1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW1hdGgtdHJ1bmMgLS0gc2FmZVxubW9kdWxlLmV4cG9ydHMgPSBNYXRoLnRydW5jIHx8IGZ1bmN0aW9uIHRydW5jKHgpIHtcbiAgdmFyIG4gPSAreDtcbiAgcmV0dXJuIChuID4gMCA/IGZsb29yIDogY2VpbCkobik7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB0cnVuYyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9tYXRoLXRydW5jJyk7XG5cbi8vIGBUb0ludGVnZXJPckluZmluaXR5YCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtdG9pbnRlZ2Vyb3JpbmZpbml0eVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgdmFyIG51bWJlciA9ICthcmd1bWVudDtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZSAtLSBOYU4gY2hlY2tcbiAgcmV0dXJuIG51bWJlciAhPT0gbnVtYmVyIHx8IG51bWJlciA9PT0gMCA/IDAgOiB0cnVuYyhudW1iZXIpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdG9JbnRlZ2VyT3JJbmZpbml0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbnRlZ2VyLW9yLWluZmluaXR5Jyk7XG5cbnZhciBtYXggPSBNYXRoLm1heDtcbnZhciBtaW4gPSBNYXRoLm1pbjtcblxuLy8gSGVscGVyIGZvciBhIHBvcHVsYXIgcmVwZWF0aW5nIGNhc2Ugb2YgdGhlIHNwZWM6XG4vLyBMZXQgaW50ZWdlciBiZSA/IFRvSW50ZWdlcihpbmRleCkuXG4vLyBJZiBpbnRlZ2VyIDwgMCwgbGV0IHJlc3VsdCBiZSBtYXgoKGxlbmd0aCArIGludGVnZXIpLCAwKTsgZWxzZSBsZXQgcmVzdWx0IGJlIG1pbihpbnRlZ2VyLCBsZW5ndGgpLlxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaW5kZXgsIGxlbmd0aCkge1xuICB2YXIgaW50ZWdlciA9IHRvSW50ZWdlck9ySW5maW5pdHkoaW5kZXgpO1xuICByZXR1cm4gaW50ZWdlciA8IDAgPyBtYXgoaW50ZWdlciArIGxlbmd0aCwgMCkgOiBtaW4oaW50ZWdlciwgbGVuZ3RoKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHRvSW50ZWdlck9ySW5maW5pdHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW50ZWdlci1vci1pbmZpbml0eScpO1xuXG52YXIgbWluID0gTWF0aC5taW47XG5cbi8vIGBUb0xlbmd0aGAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXRvbGVuZ3RoXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICB2YXIgbGVuID0gdG9JbnRlZ2VyT3JJbmZpbml0eShhcmd1bWVudCk7XG4gIHJldHVybiBsZW4gPiAwID8gbWluKGxlbiwgMHgxRkZGRkZGRkZGRkZGRikgOiAwOyAvLyAyICoqIDUzIC0gMSA9PSA5MDA3MTk5MjU0NzQwOTkxXG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1sZW5ndGgnKTtcblxuLy8gYExlbmd0aE9mQXJyYXlMaWtlYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtbGVuZ3Rob2ZhcnJheWxpa2Vcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gdG9MZW5ndGgob2JqLmxlbmd0aCk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB0b0luZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QnKTtcbnZhciB0b0Fic29sdXRlSW5kZXggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tYWJzb2x1dGUtaW5kZXgnKTtcbnZhciBsZW5ndGhPZkFycmF5TGlrZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9sZW5ndGgtb2YtYXJyYXktbGlrZScpO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLnsgaW5kZXhPZiwgaW5jbHVkZXMgfWAgbWV0aG9kcyBpbXBsZW1lbnRhdGlvblxudmFyIGNyZWF0ZU1ldGhvZCA9IGZ1bmN0aW9uIChJU19JTkNMVURFUykge1xuICByZXR1cm4gZnVuY3Rpb24gKCR0aGlzLCBlbCwgZnJvbUluZGV4KSB7XG4gICAgdmFyIE8gPSB0b0luZGV4ZWRPYmplY3QoJHRoaXMpO1xuICAgIHZhciBsZW5ndGggPSBsZW5ndGhPZkFycmF5TGlrZShPKTtcbiAgICBpZiAobGVuZ3RoID09PSAwKSByZXR1cm4gIUlTX0lOQ0xVREVTICYmIC0xO1xuICAgIHZhciBpbmRleCA9IHRvQWJzb2x1dGVJbmRleChmcm9tSW5kZXgsIGxlbmd0aCk7XG4gICAgdmFyIHZhbHVlO1xuICAgIC8vIEFycmF5I2luY2x1ZGVzIHVzZXMgU2FtZVZhbHVlWmVybyBlcXVhbGl0eSBhbGdvcml0aG1cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlIC0tIE5hTiBjaGVja1xuICAgIGlmIChJU19JTkNMVURFUyAmJiBlbCAhPT0gZWwpIHdoaWxlIChsZW5ndGggPiBpbmRleCkge1xuICAgICAgdmFsdWUgPSBPW2luZGV4KytdO1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZSAtLSBOYU4gY2hlY2tcbiAgICAgIGlmICh2YWx1ZSAhPT0gdmFsdWUpIHJldHVybiB0cnVlO1xuICAgIC8vIEFycmF5I2luZGV4T2YgaWdub3JlcyBob2xlcywgQXJyYXkjaW5jbHVkZXMgLSBub3RcbiAgICB9IGVsc2UgZm9yICg7bGVuZ3RoID4gaW5kZXg7IGluZGV4KyspIHtcbiAgICAgIGlmICgoSVNfSU5DTFVERVMgfHwgaW5kZXggaW4gTykgJiYgT1tpbmRleF0gPT09IGVsKSByZXR1cm4gSVNfSU5DTFVERVMgfHwgaW5kZXggfHwgMDtcbiAgICB9IHJldHVybiAhSVNfSU5DTFVERVMgJiYgLTE7XG4gIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgLy8gYEFycmF5LnByb3RvdHlwZS5pbmNsdWRlc2AgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmluY2x1ZGVzXG4gIGluY2x1ZGVzOiBjcmVhdGVNZXRob2QodHJ1ZSksXG4gIC8vIGBBcnJheS5wcm90b3R5cGUuaW5kZXhPZmAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmluZGV4b2ZcbiAgaW5kZXhPZjogY3JlYXRlTWV0aG9kKGZhbHNlKVxufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgaGFzT3duID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcy1vd24tcHJvcGVydHknKTtcbnZhciB0b0luZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QnKTtcbnZhciBpbmRleE9mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWluY2x1ZGVzJykuaW5kZXhPZjtcbnZhciBoaWRkZW5LZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hpZGRlbi1rZXlzJyk7XG5cbnZhciBwdXNoID0gdW5jdXJyeVRoaXMoW10ucHVzaCk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iamVjdCwgbmFtZXMpIHtcbiAgdmFyIE8gPSB0b0luZGV4ZWRPYmplY3Qob2JqZWN0KTtcbiAgdmFyIGkgPSAwO1xuICB2YXIgcmVzdWx0ID0gW107XG4gIHZhciBrZXk7XG4gIGZvciAoa2V5IGluIE8pICFoYXNPd24oaGlkZGVuS2V5cywga2V5KSAmJiBoYXNPd24oTywga2V5KSAmJiBwdXNoKHJlc3VsdCwga2V5KTtcbiAgLy8gRG9uJ3QgZW51bSBidWcgJiBoaWRkZW4ga2V5c1xuICB3aGlsZSAobmFtZXMubGVuZ3RoID4gaSkgaWYgKGhhc093bihPLCBrZXkgPSBuYW1lc1tpKytdKSkge1xuICAgIH5pbmRleE9mKHJlc3VsdCwga2V5KSB8fCBwdXNoKHJlc3VsdCwga2V5KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcbiIsICIndXNlIHN0cmljdCc7XG4vLyBJRTgtIGRvbid0IGVudW0gYnVnIGtleXNcbm1vZHVsZS5leHBvcnRzID0gW1xuICAnY29uc3RydWN0b3InLFxuICAnaGFzT3duUHJvcGVydHknLFxuICAnaXNQcm90b3R5cGVPZicsXG4gICdwcm9wZXJ0eUlzRW51bWVyYWJsZScsXG4gICd0b0xvY2FsZVN0cmluZycsXG4gICd0b1N0cmluZycsXG4gICd2YWx1ZU9mJ1xuXTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgaW50ZXJuYWxPYmplY3RLZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1rZXlzLWludGVybmFsJyk7XG52YXIgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW51bS1idWcta2V5cycpO1xuXG52YXIgaGlkZGVuS2V5cyA9IGVudW1CdWdLZXlzLmNvbmNhdCgnbGVuZ3RoJywgJ3Byb3RvdHlwZScpO1xuXG4vLyBgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXNgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vYmplY3QuZ2V0b3ducHJvcGVydHluYW1lc1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1nZXRvd25wcm9wZXJ0eW5hbWVzIC0tIHNhZmVcbmV4cG9ydHMuZiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzIHx8IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoTykge1xuICByZXR1cm4gaW50ZXJuYWxPYmplY3RLZXlzKE8sIGhpZGRlbktleXMpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5c3ltYm9scyAtLSBzYWZlXG5leHBvcnRzLmYgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnZXRCdWlsdEluID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1idWlsdC1pbicpO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIGdldE93blByb3BlcnR5TmFtZXNNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktbmFtZXMnKTtcbnZhciBnZXRPd25Qcm9wZXJ0eVN5bWJvbHNNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktc3ltYm9scycpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xuXG52YXIgY29uY2F0ID0gdW5jdXJyeVRoaXMoW10uY29uY2F0KTtcblxuLy8gYWxsIG9iamVjdCBrZXlzLCBpbmNsdWRlcyBub24tZW51bWVyYWJsZSBhbmQgc3ltYm9sc1xubW9kdWxlLmV4cG9ydHMgPSBnZXRCdWlsdEluKCdSZWZsZWN0JywgJ293bktleXMnKSB8fCBmdW5jdGlvbiBvd25LZXlzKGl0KSB7XG4gIHZhciBrZXlzID0gZ2V0T3duUHJvcGVydHlOYW1lc01vZHVsZS5mKGFuT2JqZWN0KGl0KSk7XG4gIHZhciBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBnZXRPd25Qcm9wZXJ0eVN5bWJvbHNNb2R1bGUuZjtcbiAgcmV0dXJuIGdldE93blByb3BlcnR5U3ltYm9scyA/IGNvbmNhdChrZXlzLCBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoaXQpKSA6IGtleXM7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBoYXNPd24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eScpO1xudmFyIG93bktleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb3duLWtleXMnKTtcbnZhciBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktZGVzY3JpcHRvcicpO1xudmFyIGRlZmluZVByb3BlcnR5TW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHknKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodGFyZ2V0LCBzb3VyY2UsIGV4Y2VwdGlvbnMpIHtcbiAgdmFyIGtleXMgPSBvd25LZXlzKHNvdXJjZSk7XG4gIHZhciBkZWZpbmVQcm9wZXJ0eSA9IGRlZmluZVByb3BlcnR5TW9kdWxlLmY7XG4gIHZhciBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JNb2R1bGUuZjtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGtleSA9IGtleXNbaV07XG4gICAgaWYgKCFoYXNPd24odGFyZ2V0LCBrZXkpICYmICEoZXhjZXB0aW9ucyAmJiBoYXNPd24oZXhjZXB0aW9ucywga2V5KSkpIHtcbiAgICAgIGRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTtcbiAgICB9XG4gIH1cbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xuXG52YXIgcmVwbGFjZW1lbnQgPSAvI3xcXC5wcm90b3R5cGVcXC4vO1xuXG52YXIgaXNGb3JjZWQgPSBmdW5jdGlvbiAoZmVhdHVyZSwgZGV0ZWN0aW9uKSB7XG4gIHZhciB2YWx1ZSA9IGRhdGFbbm9ybWFsaXplKGZlYXR1cmUpXTtcbiAgcmV0dXJuIHZhbHVlID09PSBQT0xZRklMTCA/IHRydWVcbiAgICA6IHZhbHVlID09PSBOQVRJVkUgPyBmYWxzZVxuICAgIDogaXNDYWxsYWJsZShkZXRlY3Rpb24pID8gZmFpbHMoZGV0ZWN0aW9uKVxuICAgIDogISFkZXRlY3Rpb247XG59O1xuXG52YXIgbm9ybWFsaXplID0gaXNGb3JjZWQubm9ybWFsaXplID0gZnVuY3Rpb24gKHN0cmluZykge1xuICByZXR1cm4gU3RyaW5nKHN0cmluZykucmVwbGFjZShyZXBsYWNlbWVudCwgJy4nKS50b0xvd2VyQ2FzZSgpO1xufTtcblxudmFyIGRhdGEgPSBpc0ZvcmNlZC5kYXRhID0ge307XG52YXIgTkFUSVZFID0gaXNGb3JjZWQuTkFUSVZFID0gJ04nO1xudmFyIFBPTFlGSUxMID0gaXNGb3JjZWQuUE9MWUZJTEwgPSAnUCc7XG5cbm1vZHVsZS5leHBvcnRzID0gaXNGb3JjZWQ7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbFRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsLXRoaXMnKTtcbnZhciBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktZGVzY3JpcHRvcicpLmY7XG52YXIgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1ub24tZW51bWVyYWJsZS1wcm9wZXJ0eScpO1xudmFyIGRlZmluZUJ1aWx0SW4gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVmaW5lLWJ1aWx0LWluJyk7XG52YXIgZGVmaW5lR2xvYmFsUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVmaW5lLWdsb2JhbC1wcm9wZXJ0eScpO1xudmFyIGNvcHlDb25zdHJ1Y3RvclByb3BlcnRpZXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY29weS1jb25zdHJ1Y3Rvci1wcm9wZXJ0aWVzJyk7XG52YXIgaXNGb3JjZWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtZm9yY2VkJyk7XG5cbi8qXG4gIG9wdGlvbnMudGFyZ2V0ICAgICAgICAgLSBuYW1lIG9mIHRoZSB0YXJnZXQgb2JqZWN0XG4gIG9wdGlvbnMuZ2xvYmFsICAgICAgICAgLSB0YXJnZXQgaXMgdGhlIGdsb2JhbCBvYmplY3RcbiAgb3B0aW9ucy5zdGF0ICAgICAgICAgICAtIGV4cG9ydCBhcyBzdGF0aWMgbWV0aG9kcyBvZiB0YXJnZXRcbiAgb3B0aW9ucy5wcm90byAgICAgICAgICAtIGV4cG9ydCBhcyBwcm90b3R5cGUgbWV0aG9kcyBvZiB0YXJnZXRcbiAgb3B0aW9ucy5yZWFsICAgICAgICAgICAtIHJlYWwgcHJvdG90eXBlIG1ldGhvZCBmb3IgdGhlIGBwdXJlYCB2ZXJzaW9uXG4gIG9wdGlvbnMuZm9yY2VkICAgICAgICAgLSBleHBvcnQgZXZlbiBpZiB0aGUgbmF0aXZlIGZlYXR1cmUgaXMgYXZhaWxhYmxlXG4gIG9wdGlvbnMuYmluZCAgICAgICAgICAgLSBiaW5kIG1ldGhvZHMgdG8gdGhlIHRhcmdldCwgcmVxdWlyZWQgZm9yIHRoZSBgcHVyZWAgdmVyc2lvblxuICBvcHRpb25zLndyYXAgICAgICAgICAgIC0gd3JhcCBjb25zdHJ1Y3RvcnMgdG8gcHJldmVudGluZyBnbG9iYWwgcG9sbHV0aW9uLCByZXF1aXJlZCBmb3IgdGhlIGBwdXJlYCB2ZXJzaW9uXG4gIG9wdGlvbnMudW5zYWZlICAgICAgICAgLSB1c2UgdGhlIHNpbXBsZSBhc3NpZ25tZW50IG9mIHByb3BlcnR5IGluc3RlYWQgb2YgZGVsZXRlICsgZGVmaW5lUHJvcGVydHlcbiAgb3B0aW9ucy5zaGFtICAgICAgICAgICAtIGFkZCBhIGZsYWcgdG8gbm90IGNvbXBsZXRlbHkgZnVsbCBwb2x5ZmlsbHNcbiAgb3B0aW9ucy5lbnVtZXJhYmxlICAgICAtIGV4cG9ydCBhcyBlbnVtZXJhYmxlIHByb3BlcnR5XG4gIG9wdGlvbnMuZG9udENhbGxHZXRTZXQgLSBwcmV2ZW50IGNhbGxpbmcgYSBnZXR0ZXIgb24gdGFyZ2V0XG4gIG9wdGlvbnMubmFtZSAgICAgICAgICAgLSB0aGUgLm5hbWUgb2YgdGhlIGZ1bmN0aW9uIGlmIGl0IGRvZXMgbm90IG1hdGNoIHRoZSBrZXlcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvcHRpb25zLCBzb3VyY2UpIHtcbiAgdmFyIFRBUkdFVCA9IG9wdGlvbnMudGFyZ2V0O1xuICB2YXIgR0xPQkFMID0gb3B0aW9ucy5nbG9iYWw7XG4gIHZhciBTVEFUSUMgPSBvcHRpb25zLnN0YXQ7XG4gIHZhciBGT1JDRUQsIHRhcmdldCwga2V5LCB0YXJnZXRQcm9wZXJ0eSwgc291cmNlUHJvcGVydHksIGRlc2NyaXB0b3I7XG4gIGlmIChHTE9CQUwpIHtcbiAgICB0YXJnZXQgPSBnbG9iYWxUaGlzO1xuICB9IGVsc2UgaWYgKFNUQVRJQykge1xuICAgIHRhcmdldCA9IGdsb2JhbFRoaXNbVEFSR0VUXSB8fCBkZWZpbmVHbG9iYWxQcm9wZXJ0eShUQVJHRVQsIHt9KTtcbiAgfSBlbHNlIHtcbiAgICB0YXJnZXQgPSBnbG9iYWxUaGlzW1RBUkdFVF0gJiYgZ2xvYmFsVGhpc1tUQVJHRVRdLnByb3RvdHlwZTtcbiAgfVxuICBpZiAodGFyZ2V0KSBmb3IgKGtleSBpbiBzb3VyY2UpIHtcbiAgICBzb3VyY2VQcm9wZXJ0eSA9IHNvdXJjZVtrZXldO1xuICAgIGlmIChvcHRpb25zLmRvbnRDYWxsR2V0U2V0KSB7XG4gICAgICBkZXNjcmlwdG9yID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KTtcbiAgICAgIHRhcmdldFByb3BlcnR5ID0gZGVzY3JpcHRvciAmJiBkZXNjcmlwdG9yLnZhbHVlO1xuICAgIH0gZWxzZSB0YXJnZXRQcm9wZXJ0eSA9IHRhcmdldFtrZXldO1xuICAgIEZPUkNFRCA9IGlzRm9yY2VkKEdMT0JBTCA/IGtleSA6IFRBUkdFVCArIChTVEFUSUMgPyAnLicgOiAnIycpICsga2V5LCBvcHRpb25zLmZvcmNlZCk7XG4gICAgLy8gY29udGFpbmVkIGluIHRhcmdldFxuICAgIGlmICghRk9SQ0VEICYmIHRhcmdldFByb3BlcnR5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGlmICh0eXBlb2Ygc291cmNlUHJvcGVydHkgPT0gdHlwZW9mIHRhcmdldFByb3BlcnR5KSBjb250aW51ZTtcbiAgICAgIGNvcHlDb25zdHJ1Y3RvclByb3BlcnRpZXMoc291cmNlUHJvcGVydHksIHRhcmdldFByb3BlcnR5KTtcbiAgICB9XG4gICAgLy8gYWRkIGEgZmxhZyB0byBub3QgY29tcGxldGVseSBmdWxsIHBvbHlmaWxsc1xuICAgIGlmIChvcHRpb25zLnNoYW0gfHwgKHRhcmdldFByb3BlcnR5ICYmIHRhcmdldFByb3BlcnR5LnNoYW0pKSB7XG4gICAgICBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkoc291cmNlUHJvcGVydHksICdzaGFtJywgdHJ1ZSk7XG4gICAgfVxuICAgIGRlZmluZUJ1aWx0SW4odGFyZ2V0LCBrZXksIHNvdXJjZVByb3BlcnR5LCBvcHRpb25zKTtcbiAgfVxufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1tYXAgLS0gc2FmZVxudmFyIE1hcFByb3RvdHlwZSA9IE1hcC5wcm90b3R5cGU7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tbWFwIC0tIHNhZmVcbiAgTWFwOiBNYXAsXG4gIHNldDogdW5jdXJyeVRoaXMoTWFwUHJvdG90eXBlLnNldCksXG4gIGdldDogdW5jdXJyeVRoaXMoTWFwUHJvdG90eXBlLmdldCksXG4gIGhhczogdW5jdXJyeVRoaXMoTWFwUHJvdG90eXBlLmhhcyksXG4gIHJlbW92ZTogdW5jdXJyeVRoaXMoTWFwUHJvdG90eXBlWydkZWxldGUnXSksXG4gIHByb3RvOiBNYXBQcm90b3R5cGVcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgTWFwSGVscGVycyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9tYXAtaGVscGVycycpO1xudmFyIElTX1BVUkUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtcHVyZScpO1xuXG52YXIgZ2V0ID0gTWFwSGVscGVycy5nZXQ7XG52YXIgaGFzID0gTWFwSGVscGVycy5oYXM7XG52YXIgc2V0ID0gTWFwSGVscGVycy5zZXQ7XG5cbi8vIGBNYXAucHJvdG90eXBlLmdldE9ySW5zZXJ0YCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtbWFwLnByb3RvdHlwZS5nZXRvcmluc2VydFxuJCh7IHRhcmdldDogJ01hcCcsIHByb3RvOiB0cnVlLCByZWFsOiB0cnVlLCBmb3JjZWQ6IElTX1BVUkUgfSwge1xuICBnZXRPckluc2VydDogZnVuY3Rpb24gZ2V0T3JJbnNlcnQoa2V5LCB2YWx1ZSkge1xuICAgIGlmIChoYXModGhpcywga2V5KSkgcmV0dXJuIGdldCh0aGlzLCBrZXkpO1xuICAgIHNldCh0aGlzLCBrZXksIHZhbHVlKTtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbn0pO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIGFDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hLWNhbGxhYmxlJyk7XG52YXIgTWFwSGVscGVycyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9tYXAtaGVscGVycycpO1xudmFyIElTX1BVUkUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtcHVyZScpO1xuXG52YXIgZ2V0ID0gTWFwSGVscGVycy5nZXQ7XG52YXIgaGFzID0gTWFwSGVscGVycy5oYXM7XG52YXIgc2V0ID0gTWFwSGVscGVycy5zZXQ7XG5cbi8vIGBNYXAucHJvdG90eXBlLmdldE9ySW5zZXJ0Q29tcHV0ZWRgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1tYXAucHJvdG90eXBlLmdldG9yaW5zZXJ0Y29tcHV0ZWRcbiQoeyB0YXJnZXQ6ICdNYXAnLCBwcm90bzogdHJ1ZSwgcmVhbDogdHJ1ZSwgZm9yY2VkOiBJU19QVVJFIH0sIHtcbiAgZ2V0T3JJbnNlcnRDb21wdXRlZDogZnVuY3Rpb24gZ2V0T3JJbnNlcnRDb21wdXRlZChrZXksIGNhbGxiYWNrZm4pIHtcbiAgICB2YXIgaGFzS2V5ID0gaGFzKHRoaXMsIGtleSk7XG4gICAgYUNhbGxhYmxlKGNhbGxiYWNrZm4pO1xuICAgIGlmIChoYXNLZXkpIHJldHVybiBnZXQodGhpcywga2V5KTtcbiAgICAvLyBDYW5vbmljYWxpemVLZXllZENvbGxlY3Rpb25LZXlcbiAgICBpZiAoa2V5ID09PSAwICYmIDEgLyBrZXkgPT09IC1JbmZpbml0eSkga2V5ID0gMDtcbiAgICB2YXIgdmFsdWUgPSBjYWxsYmFja2ZuKGtleSk7XG4gICAgc2V0KHRoaXMsIGtleSwgdmFsdWUpO1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxufSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGlzUHJvdG90eXBlT2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWlzLXByb3RvdHlwZS1vZicpO1xuXG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIFByb3RvdHlwZSkge1xuICBpZiAoaXNQcm90b3R5cGVPZihQcm90b3R5cGUsIGl0KSkgcmV0dXJuIGl0O1xuICB0aHJvdyBuZXcgJFR5cGVFcnJvcignSW5jb3JyZWN0IGludm9jYXRpb24nKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIGFDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hLWNhbGxhYmxlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iamVjdCwga2V5LCBtZXRob2QpIHtcbiAgdHJ5IHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5ZGVzY3JpcHRvciAtLSBzYWZlXG4gICAgcmV0dXJuIHVuY3VycnlUaGlzKGFDYWxsYWJsZShPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwga2V5KVttZXRob2RdKSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGVtcHR5ICovIH1cbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICByZXR1cm4gaXNPYmplY3QoYXJndW1lbnQpIHx8IGFyZ3VtZW50ID09PSBudWxsO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgaXNQb3NzaWJsZVByb3RvdHlwZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1wb3NzaWJsZS1wcm90b3R5cGUnKTtcblxudmFyICRTdHJpbmcgPSBTdHJpbmc7XG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgaWYgKGlzUG9zc2libGVQcm90b3R5cGUoYXJndW1lbnQpKSByZXR1cm4gYXJndW1lbnQ7XG4gIHRocm93IG5ldyAkVHlwZUVycm9yKFwiQ2FuJ3Qgc2V0IFwiICsgJFN0cmluZyhhcmd1bWVudCkgKyAnIGFzIGEgcHJvdG90eXBlJyk7XG59O1xuIiwgIid1c2Ugc3RyaWN0Jztcbi8qIGVzbGludC1kaXNhYmxlIG5vLXByb3RvIC0tIHNhZmUgKi9cbnZhciB1bmN1cnJ5VGhpc0FjY2Vzc29yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcy1hY2Nlc3NvcicpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xudmFyIHJlcXVpcmVPYmplY3RDb2VyY2libGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlJyk7XG52YXIgYVBvc3NpYmxlUHJvdG90eXBlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2EtcG9zc2libGUtcHJvdG90eXBlJyk7XG5cbi8vIGBPYmplY3Quc2V0UHJvdG90eXBlT2ZgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vYmplY3Quc2V0cHJvdG90eXBlb2Zcbi8vIFdvcmtzIHdpdGggX19wcm90b19fIG9ubHkuIE9sZCB2OCBjYW4ndCB3b3JrIHdpdGggbnVsbCBwcm90byBvYmplY3RzLlxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1zZXRwcm90b3R5cGVvZiAtLSBzYWZlXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCAoJ19fcHJvdG9fXycgaW4ge30gPyBmdW5jdGlvbiAoKSB7XG4gIHZhciBDT1JSRUNUX1NFVFRFUiA9IGZhbHNlO1xuICB2YXIgdGVzdCA9IHt9O1xuICB2YXIgc2V0dGVyO1xuICB0cnkge1xuICAgIHNldHRlciA9IHVuY3VycnlUaGlzQWNjZXNzb3IoT2JqZWN0LnByb3RvdHlwZSwgJ19fcHJvdG9fXycsICdzZXQnKTtcbiAgICBzZXR0ZXIodGVzdCwgW10pO1xuICAgIENPUlJFQ1RfU0VUVEVSID0gdGVzdCBpbnN0YW5jZW9mIEFycmF5O1xuICB9IGNhdGNoIChlcnJvcikgeyAvKiBlbXB0eSAqLyB9XG4gIHJldHVybiBmdW5jdGlvbiBzZXRQcm90b3R5cGVPZihPLCBwcm90bykge1xuICAgIHJlcXVpcmVPYmplY3RDb2VyY2libGUoTyk7XG4gICAgYVBvc3NpYmxlUHJvdG90eXBlKHByb3RvKTtcbiAgICBpZiAoIWlzT2JqZWN0KE8pKSByZXR1cm4gTztcbiAgICBpZiAoQ09SUkVDVF9TRVRURVIpIHNldHRlcihPLCBwcm90byk7XG4gICAgZWxzZSBPLl9fcHJvdG9fXyA9IHByb3RvO1xuICAgIHJldHVybiBPO1xuICB9O1xufSgpIDogdW5kZWZpbmVkKTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xudmFyIHNldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1zZXQtcHJvdG90eXBlLW9mJyk7XG5cbi8vIG1ha2VzIHN1YmNsYXNzaW5nIHdvcmsgY29ycmVjdCBmb3Igd3JhcHBlZCBidWlsdC1pbnNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCR0aGlzLCBkdW1teSwgV3JhcHBlcikge1xuICB2YXIgTmV3VGFyZ2V0LCBOZXdUYXJnZXRQcm90b3R5cGU7XG4gIGlmIChcbiAgICAvLyBpdCBjYW4gd29yayBvbmx5IHdpdGggbmF0aXZlIGBzZXRQcm90b3R5cGVPZmBcbiAgICBzZXRQcm90b3R5cGVPZiAmJlxuICAgIC8vIHdlIGhhdmVuJ3QgY29tcGxldGVseSBjb3JyZWN0IHByZS1FUzYgd2F5IGZvciBnZXR0aW5nIGBuZXcudGFyZ2V0YCwgc28gdXNlIHRoaXNcbiAgICBpc0NhbGxhYmxlKE5ld1RhcmdldCA9IGR1bW15LmNvbnN0cnVjdG9yKSAmJlxuICAgIE5ld1RhcmdldCAhPT0gV3JhcHBlciAmJlxuICAgIGlzT2JqZWN0KE5ld1RhcmdldFByb3RvdHlwZSA9IE5ld1RhcmdldC5wcm90b3R5cGUpICYmXG4gICAgTmV3VGFyZ2V0UHJvdG90eXBlICE9PSBXcmFwcGVyLnByb3RvdHlwZVxuICApIHNldFByb3RvdHlwZU9mKCR0aGlzLCBOZXdUYXJnZXRQcm90b3R5cGUpO1xuICByZXR1cm4gJHRoaXM7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcblxudmFyIFRPX1NUUklOR19UQUcgPSB3ZWxsS25vd25TeW1ib2woJ3RvU3RyaW5nVGFnJyk7XG52YXIgdGVzdCA9IHt9O1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHVuaWNvcm4vbm8taW1tZWRpYXRlLW11dGF0aW9uIC0tIEVTMyBzeW50YXggbGltaXRhdGlvblxudGVzdFtUT19TVFJJTkdfVEFHXSA9ICd6JztcblxubW9kdWxlLmV4cG9ydHMgPSBTdHJpbmcodGVzdCkgPT09ICdbb2JqZWN0IHpdJztcbiIsICIndXNlIHN0cmljdCc7XG52YXIgVE9fU1RSSU5HX1RBR19TVVBQT1JUID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXN0cmluZy10YWctc3VwcG9ydCcpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcbnZhciBjbGFzc29mUmF3ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NsYXNzb2YtcmF3Jyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG5cbnZhciBUT19TVFJJTkdfVEFHID0gd2VsbEtub3duU3ltYm9sKCd0b1N0cmluZ1RhZycpO1xudmFyICRPYmplY3QgPSBPYmplY3Q7XG5cbi8vIEVTMyB3cm9uZyBoZXJlXG52YXIgQ09SUkVDVF9BUkdVTUVOVFMgPSBjbGFzc29mUmF3KGZ1bmN0aW9uICgpIHsgcmV0dXJuIGFyZ3VtZW50czsgfSgpKSA9PT0gJ0FyZ3VtZW50cyc7XG5cbi8vIGZhbGxiYWNrIGZvciBJRTExIFNjcmlwdCBBY2Nlc3MgRGVuaWVkIGVycm9yXG52YXIgdHJ5R2V0ID0gZnVuY3Rpb24gKGl0LCBrZXkpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gaXRba2V5XTtcbiAgfSBjYXRjaCAoZXJyb3IpIHsgLyogZW1wdHkgKi8gfVxufTtcblxuLy8gZ2V0dGluZyB0YWcgZnJvbSBFUzYrIGBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nYFxubW9kdWxlLmV4cG9ydHMgPSBUT19TVFJJTkdfVEFHX1NVUFBPUlQgPyBjbGFzc29mUmF3IDogZnVuY3Rpb24gKGl0KSB7XG4gIHZhciBPLCB0YWcsIHJlc3VsdDtcbiAgcmV0dXJuIGl0ID09PSB1bmRlZmluZWQgPyAnVW5kZWZpbmVkJyA6IGl0ID09PSBudWxsID8gJ051bGwnXG4gICAgLy8gQEB0b1N0cmluZ1RhZyBjYXNlXG4gICAgOiB0eXBlb2YgKHRhZyA9IHRyeUdldChPID0gJE9iamVjdChpdCksIFRPX1NUUklOR19UQUcpKSA9PSAnc3RyaW5nJyA/IHRhZ1xuICAgIC8vIGJ1aWx0aW5UYWcgY2FzZVxuICAgIDogQ09SUkVDVF9BUkdVTUVOVFMgPyBjbGFzc29mUmF3KE8pXG4gICAgLy8gRVMzIGFyZ3VtZW50cyBmYWxsYmFja1xuICAgIDogKHJlc3VsdCA9IGNsYXNzb2ZSYXcoTykpID09PSAnT2JqZWN0JyAmJiBpc0NhbGxhYmxlKE8uY2FsbGVlKSA/ICdBcmd1bWVudHMnIDogcmVzdWx0O1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jbGFzc29mJyk7XG5cbnZhciAkU3RyaW5nID0gU3RyaW5nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICBpZiAoY2xhc3NvZihhcmd1bWVudCkgPT09ICdTeW1ib2wnKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY29udmVydCBhIFN5bWJvbCB2YWx1ZSB0byBhIHN0cmluZycpO1xuICByZXR1cm4gJFN0cmluZyhhcmd1bWVudCk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB0b1N0cmluZyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1zdHJpbmcnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQsICRkZWZhdWx0KSB7XG4gIHJldHVybiBhcmd1bWVudCA9PT0gdW5kZWZpbmVkID8gYXJndW1lbnRzLmxlbmd0aCA8IDIgPyAnJyA6ICRkZWZhdWx0IDogdG9TdHJpbmcoYXJndW1lbnQpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgSW5kZXhTaXplRXJyb3I6IHsgczogJ0lOREVYX1NJWkVfRVJSJywgYzogMSwgbTogMSB9LFxuICBET01TdHJpbmdTaXplRXJyb3I6IHsgczogJ0RPTVNUUklOR19TSVpFX0VSUicsIGM6IDIsIG06IDAgfSxcbiAgSGllcmFyY2h5UmVxdWVzdEVycm9yOiB7IHM6ICdISUVSQVJDSFlfUkVRVUVTVF9FUlInLCBjOiAzLCBtOiAxIH0sXG4gIFdyb25nRG9jdW1lbnRFcnJvcjogeyBzOiAnV1JPTkdfRE9DVU1FTlRfRVJSJywgYzogNCwgbTogMSB9LFxuICBJbnZhbGlkQ2hhcmFjdGVyRXJyb3I6IHsgczogJ0lOVkFMSURfQ0hBUkFDVEVSX0VSUicsIGM6IDUsIG06IDEgfSxcbiAgTm9EYXRhQWxsb3dlZEVycm9yOiB7IHM6ICdOT19EQVRBX0FMTE9XRURfRVJSJywgYzogNiwgbTogMCB9LFxuICBOb01vZGlmaWNhdGlvbkFsbG93ZWRFcnJvcjogeyBzOiAnTk9fTU9ESUZJQ0FUSU9OX0FMTE9XRURfRVJSJywgYzogNywgbTogMSB9LFxuICBOb3RGb3VuZEVycm9yOiB7IHM6ICdOT1RfRk9VTkRfRVJSJywgYzogOCwgbTogMSB9LFxuICBOb3RTdXBwb3J0ZWRFcnJvcjogeyBzOiAnTk9UX1NVUFBPUlRFRF9FUlInLCBjOiA5LCBtOiAxIH0sXG4gIEluVXNlQXR0cmlidXRlRXJyb3I6IHsgczogJ0lOVVNFX0FUVFJJQlVURV9FUlInLCBjOiAxMCwgbTogMSB9LFxuICBJbnZhbGlkU3RhdGVFcnJvcjogeyBzOiAnSU5WQUxJRF9TVEFURV9FUlInLCBjOiAxMSwgbTogMSB9LFxuICBTeW50YXhFcnJvcjogeyBzOiAnU1lOVEFYX0VSUicsIGM6IDEyLCBtOiAxIH0sXG4gIEludmFsaWRNb2RpZmljYXRpb25FcnJvcjogeyBzOiAnSU5WQUxJRF9NT0RJRklDQVRJT05fRVJSJywgYzogMTMsIG06IDEgfSxcbiAgTmFtZXNwYWNlRXJyb3I6IHsgczogJ05BTUVTUEFDRV9FUlInLCBjOiAxNCwgbTogMSB9LFxuICBJbnZhbGlkQWNjZXNzRXJyb3I6IHsgczogJ0lOVkFMSURfQUNDRVNTX0VSUicsIGM6IDE1LCBtOiAxIH0sXG4gIFZhbGlkYXRpb25FcnJvcjogeyBzOiAnVkFMSURBVElPTl9FUlInLCBjOiAxNiwgbTogMCB9LFxuICBUeXBlTWlzbWF0Y2hFcnJvcjogeyBzOiAnVFlQRV9NSVNNQVRDSF9FUlInLCBjOiAxNywgbTogMSB9LFxuICBTZWN1cml0eUVycm9yOiB7IHM6ICdTRUNVUklUWV9FUlInLCBjOiAxOCwgbTogMSB9LFxuICBOZXR3b3JrRXJyb3I6IHsgczogJ05FVFdPUktfRVJSJywgYzogMTksIG06IDEgfSxcbiAgQWJvcnRFcnJvcjogeyBzOiAnQUJPUlRfRVJSJywgYzogMjAsIG06IDEgfSxcbiAgVVJMTWlzbWF0Y2hFcnJvcjogeyBzOiAnVVJMX01JU01BVENIX0VSUicsIGM6IDIxLCBtOiAxIH0sXG4gIFF1b3RhRXhjZWVkZWRFcnJvcjogeyBzOiAnUVVPVEFfRVhDRUVERURfRVJSJywgYzogMjIsIG06IDEgfSxcbiAgVGltZW91dEVycm9yOiB7IHM6ICdUSU1FT1VUX0VSUicsIGM6IDIzLCBtOiAxIH0sXG4gIEludmFsaWROb2RlVHlwZUVycm9yOiB7IHM6ICdJTlZBTElEX05PREVfVFlQRV9FUlInLCBjOiAyNCwgbTogMSB9LFxuICBEYXRhQ2xvbmVFcnJvcjogeyBzOiAnREFUQV9DTE9ORV9FUlInLCBjOiAyNSwgbTogMSB9XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcblxudmFyICRFcnJvciA9IEVycm9yO1xudmFyIHJlcGxhY2UgPSB1bmN1cnJ5VGhpcygnJy5yZXBsYWNlKTtcblxudmFyIFRFU1QgPSAoZnVuY3Rpb24gKGFyZykgeyByZXR1cm4gU3RyaW5nKG5ldyAkRXJyb3IoYXJnKS5zdGFjayk7IH0pKCd6eGNhc2QnKTtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWRvcy9uby12dWxuZXJhYmxlIC0tIHNhZmVcbnZhciBWOF9PUl9DSEFLUkFfU1RBQ0tfRU5UUlkgPSAvXFxuXFxzKmF0IFteOl0qOlteXFxuXSovO1xudmFyIElTX1Y4X09SX0NIQUtSQV9TVEFDSyA9IFY4X09SX0NIQUtSQV9TVEFDS19FTlRSWS50ZXN0KFRFU1QpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChzdGFjaywgZHJvcEVudHJpZXMpIHtcbiAgaWYgKElTX1Y4X09SX0NIQUtSQV9TVEFDSyAmJiB0eXBlb2Ygc3RhY2sgPT0gJ3N0cmluZycgJiYgISRFcnJvci5wcmVwYXJlU3RhY2tUcmFjZSkge1xuICAgIHdoaWxlIChkcm9wRW50cmllcy0tKSBzdGFjayA9IHJlcGxhY2Uoc3RhY2ssIFY4X09SX0NIQUtSQV9TVEFDS19FTlRSWSwgJycpO1xuICB9IHJldHVybiBzdGFjaztcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgZ2xvYmFsVGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwtdGhpcycpO1xudmFyIGdldEJ1aWx0SW4gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LWJ1aWx0LWluJyk7XG52YXIgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eS1kZXNjcmlwdG9yJyk7XG52YXIgZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpLmY7XG52YXIgaGFzT3duID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcy1vd24tcHJvcGVydHknKTtcbnZhciBhbkluc3RhbmNlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLWluc3RhbmNlJyk7XG52YXIgaW5oZXJpdElmUmVxdWlyZWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaW5oZXJpdC1pZi1yZXF1aXJlZCcpO1xudmFyIG5vcm1hbGl6ZVN0cmluZ0FyZ3VtZW50ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL25vcm1hbGl6ZS1zdHJpbmctYXJndW1lbnQnKTtcbnZhciBET01FeGNlcHRpb25Db25zdGFudHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZG9tLWV4Y2VwdGlvbi1jb25zdGFudHMnKTtcbnZhciBjbGVhckVycm9yU3RhY2sgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXJyb3Itc3RhY2stY2xlYXInKTtcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIElTX1BVUkUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtcHVyZScpO1xuXG52YXIgRE9NX0VYQ0VQVElPTiA9ICdET01FeGNlcHRpb24nO1xudmFyIEVycm9yID0gZ2V0QnVpbHRJbignRXJyb3InKTtcbnZhciBOYXRpdmVET01FeGNlcHRpb24gPSBnZXRCdWlsdEluKERPTV9FWENFUFRJT04pO1xuXG52YXIgJERPTUV4Y2VwdGlvbiA9IGZ1bmN0aW9uIERPTUV4Y2VwdGlvbigpIHtcbiAgYW5JbnN0YW5jZSh0aGlzLCBET01FeGNlcHRpb25Qcm90b3R5cGUpO1xuICB2YXIgYXJndW1lbnRzTGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgdmFyIG1lc3NhZ2UgPSBub3JtYWxpemVTdHJpbmdBcmd1bWVudChhcmd1bWVudHNMZW5ndGggPCAxID8gdW5kZWZpbmVkIDogYXJndW1lbnRzWzBdKTtcbiAgdmFyIG5hbWUgPSBub3JtYWxpemVTdHJpbmdBcmd1bWVudChhcmd1bWVudHNMZW5ndGggPCAyID8gdW5kZWZpbmVkIDogYXJndW1lbnRzWzFdLCAnRXJyb3InKTtcbiAgdmFyIHRoYXQgPSBuZXcgTmF0aXZlRE9NRXhjZXB0aW9uKG1lc3NhZ2UsIG5hbWUpO1xuICB2YXIgZXJyb3IgPSBuZXcgRXJyb3IobWVzc2FnZSk7XG4gIGVycm9yLm5hbWUgPSBET01fRVhDRVBUSU9OO1xuICBkZWZpbmVQcm9wZXJ0eSh0aGF0LCAnc3RhY2snLCBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IoMSwgY2xlYXJFcnJvclN0YWNrKGVycm9yLnN0YWNrLCAxKSkpO1xuICBpbmhlcml0SWZSZXF1aXJlZCh0aGF0LCB0aGlzLCAkRE9NRXhjZXB0aW9uKTtcbiAgcmV0dXJuIHRoYXQ7XG59O1xuXG52YXIgRE9NRXhjZXB0aW9uUHJvdG90eXBlID0gJERPTUV4Y2VwdGlvbi5wcm90b3R5cGUgPSBOYXRpdmVET01FeGNlcHRpb24ucHJvdG90eXBlO1xuXG52YXIgRVJST1JfSEFTX1NUQUNLID0gJ3N0YWNrJyBpbiBuZXcgRXJyb3IoRE9NX0VYQ0VQVElPTik7XG52YXIgRE9NX0VYQ0VQVElPTl9IQVNfU1RBQ0sgPSAnc3RhY2snIGluIG5ldyBOYXRpdmVET01FeGNlcHRpb24oMSwgMik7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZ2V0b3ducHJvcGVydHlkZXNjcmlwdG9yIC0tIHNhZmVcbnZhciBkZXNjcmlwdG9yID0gTmF0aXZlRE9NRXhjZXB0aW9uICYmIERFU0NSSVBUT1JTICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoZ2xvYmFsVGhpcywgRE9NX0VYQ0VQVElPTik7XG5cbi8vIEJ1biB+IDAuMS4xIERPTUV4Y2VwdGlvbiBoYXZlIGluY29ycmVjdCBkZXNjcmlwdG9yIGFuZCB3ZSBjYW4ndCByZWRlZmluZSBpdFxuLy8gaHR0cHM6Ly9naXRodWIuY29tL0phcnJlZC1TdW1uZXIvYnVuL2lzc3Vlcy8zOTlcbnZhciBCVUdHWV9ERVNDUklQVE9SID0gISFkZXNjcmlwdG9yICYmICEoZGVzY3JpcHRvci53cml0YWJsZSAmJiBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSk7XG5cbnZhciBGT1JDRURfQ09OU1RSVUNUT1IgPSBFUlJPUl9IQVNfU1RBQ0sgJiYgIUJVR0dZX0RFU0NSSVBUT1IgJiYgIURPTV9FWENFUFRJT05fSEFTX1NUQUNLO1xuXG4vLyBgRE9NRXhjZXB0aW9uYCBjb25zdHJ1Y3RvciBwYXRjaCBmb3IgYC5zdGFja2Agd2hlcmUgaXQncyByZXF1aXJlZFxuLy8gaHR0cHM6Ly93ZWJpZGwuc3BlYy53aGF0d2cub3JnLyNlcy1ET01FeGNlcHRpb24tc3BlY2lhbG5lc3NcbiQoeyBnbG9iYWw6IHRydWUsIGNvbnN0cnVjdG9yOiB0cnVlLCBmb3JjZWQ6IElTX1BVUkUgfHwgRk9SQ0VEX0NPTlNUUlVDVE9SIH0sIHsgLy8gVE9ETzogZml4IGV4cG9ydCBsb2dpY1xuICBET01FeGNlcHRpb246IEZPUkNFRF9DT05TVFJVQ1RPUiA/ICRET01FeGNlcHRpb24gOiBOYXRpdmVET01FeGNlcHRpb25cbn0pO1xuXG52YXIgUG9seWZpbGxlZERPTUV4Y2VwdGlvbiA9IGdldEJ1aWx0SW4oRE9NX0VYQ0VQVElPTik7XG52YXIgUG9seWZpbGxlZERPTUV4Y2VwdGlvblByb3RvdHlwZSA9IFBvbHlmaWxsZWRET01FeGNlcHRpb24ucHJvdG90eXBlO1xuXG5pZiAoUG9seWZpbGxlZERPTUV4Y2VwdGlvblByb3RvdHlwZS5jb25zdHJ1Y3RvciAhPT0gUG9seWZpbGxlZERPTUV4Y2VwdGlvbikge1xuICBpZiAoIUlTX1BVUkUpIHtcbiAgICBkZWZpbmVQcm9wZXJ0eShQb2x5ZmlsbGVkRE9NRXhjZXB0aW9uUHJvdG90eXBlLCAnY29uc3RydWN0b3InLCBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IoMSwgUG9seWZpbGxlZERPTUV4Y2VwdGlvbikpO1xuICB9XG5cbiAgZm9yICh2YXIga2V5IGluIERPTUV4Y2VwdGlvbkNvbnN0YW50cykgaWYgKGhhc093bihET01FeGNlcHRpb25Db25zdGFudHMsIGtleSkpIHtcbiAgICB2YXIgY29uc3RhbnQgPSBET01FeGNlcHRpb25Db25zdGFudHNba2V5XTtcbiAgICB2YXIgY29uc3RhbnROYW1lID0gY29uc3RhbnQucztcbiAgICBpZiAoIWhhc093bihQb2x5ZmlsbGVkRE9NRXhjZXB0aW9uLCBjb25zdGFudE5hbWUpKSB7XG4gICAgICBkZWZpbmVQcm9wZXJ0eShQb2x5ZmlsbGVkRE9NRXhjZXB0aW9uLCBjb25zdGFudE5hbWUsIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvcig2LCBjb25zdGFudC5jKSk7XG4gICAgfVxuICB9XG59XG4iLCAiZXhwb3J0ICogZnJvbSAnaWRiLXBsdXMnO1xuIiwgImV4cG9ydCBpbnRlcmZhY2UgRW5zdXJlU3RvcmVPcHRpb25zIHtcbiAgLyoqIGtleVBhdGggZm9yIG9iamVjdFN0b3JlOyBkZWZhdWx0IHVuZGVmaW5lZCAob3V0LW9mLWxpbmUga2V5cykgKi9cbiAga2V5UGF0aD86IHN0cmluZyB8IHN0cmluZ1tdIHwgbnVsbFxuICAvKiogYXV0b0luY3JlbWVudCBmb3Igb2JqZWN0U3RvcmU7IGRlZmF1bHQgZmFsc2UgKi9cbiAgYXV0b0luY3JlbWVudD86IGJvb2xlYW5cbiAgLyoqIGluZGV4ZXMgdG8gZW5zdXJlIGV4aXN0IG9uIHRoZSBzdG9yZSAobWlzc2luZyBvbmVzIHdpbGwgYmUgY3JlYXRlZCBvbiB1cGdyYWRlKSAqL1xuICBpbmRleGVzPzogSURCSW5kZXhEZWZbXVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIElEQkluZGV4RGVmIHtcbiAgbmFtZTogc3RyaW5nXG4gIGtleVBhdGg6IHN0cmluZyB8IHN0cmluZ1tdXG4gIG9wdGlvbnM/OiBJREJJbmRleFBhcmFtZXRlcnNcbn1cblxuZXhwb3J0IG5hbWVzcGFjZSBJREJQbHVzSGVscGVyIHtcbiAgLy8gTG9uZy1saXZlZCBjb25uZWN0aW9uIGNhY2hlIHBlciBEQiBuYW1lXG4gIGV4cG9ydCBjb25zdCBjYWNoZSA9IG5ldyBNYXA8c3RyaW5nLCBQcm9taXNlPElEQkRhdGFiYXNlPj4oKVxuXG4gIGV4cG9ydCBjb25zdCBkZWZhdWx0cyA9IE9iamVjdC5mcmVlemUoeyBpdGVyQmF0Y2g6IDEwMCwgcmV0cnk6IHsgYXR0ZW1wdHM6IDMsIGJhc2VEZWxheU1zOiAxNiB9IH0pXG5cbiAgZXhwb3J0IGNvbnN0IHNsZWVwID0gKG1zOiBudW1iZXIpID0+IG5ldyBQcm9taXNlPHZvaWQ+KChyKSA9PiBzZXRUaW1lb3V0KHIsIG1zKSlcblxuICBleHBvcnQgZnVuY3Rpb24gc2hvdWxkUmVjb25uZWN0KGVycjogdW5rbm93bik6IGJvb2xlYW4ge1xuICAgIGNvbnN0IG5hbWUgPSAoZXJyIGFzIGFueSk/Lm5hbWUgPz8gJydcbiAgICAvLyBIZXVyaXN0aWNzIGZvciBcImNvbm5lY3Rpb24gZHJvcHBlZFwiIHNjZW5hcmlvc1xuICAgIHJldHVybiAoXG4gICAgICBuYW1lID09PSAnQWJvcnRFcnJvcicgfHxcbiAgICAgIG5hbWUgPT09ICdJbnZhbGlkU3RhdGVFcnJvcicgfHxcbiAgICAgIG5hbWUgPT09ICdUcmFuc2FjdGlvbkluYWN0aXZlRXJyb3InIHx8XG4gICAgICBuYW1lID09PSAnVW5rbm93bkVycm9yJ1xuICAgIClcbiAgfVxuXG4gIGV4cG9ydCBhc3luYyBmdW5jdGlvbiB3aXRoUmV0cnk8VD4oXG4gICAgY2ZnOiB7IGF0dGVtcHRzOiBudW1iZXI7IGJhc2VEZWxheU1zOiBudW1iZXIgfSxcbiAgICBydW46IChhdHRlbXB0OiBudW1iZXIpID0+IFByb21pc2U8VD4sXG4gICAgb25GYWlsPzogKGVycjogdW5rbm93biwgYXR0ZW1wdDogbnVtYmVyKSA9PiBQcm9taXNlPHZvaWQ+IHwgdm9pZFxuICApOiBQcm9taXNlPFQ+IHtcbiAgICBjb25zdCBhdHRlbXB0cyA9IE1hdGgubWF4KDEsIGNmZy5hdHRlbXB0cylcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGF0dGVtcHRzOyBpKyspIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBhd2FpdCBydW4oaSlcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBpZiAoaSA9PT0gYXR0ZW1wdHMgLSAxKSB0aHJvdyBlcnJcbiAgICAgICAgYXdhaXQgb25GYWlsPy4oZXJyLCBpKVxuICAgICAgICBjb25zdCBiYWNrb2ZmID0gY2ZnLmJhc2VEZWxheU1zICogTWF0aC5wb3coMiwgaSkgKyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMClcbiAgICAgICAgYXdhaXQgc2xlZXAoYmFja29mZilcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gdW5yZWFjaGFibGVcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3dpdGhSZXRyeSBleGhhdXN0ZWQgdW5leHBlY3RlZGx5JylcbiAgfVxuXG4gIGZ1bmN0aW9uIG9wZW5SYXcoXG4gICAgZGJOYW1lOiBzdHJpbmcsXG4gICAgdmVyc2lvbj86IG51bWJlcixcbiAgICB1cGdyYWRlPzogKGRiOiBJREJEYXRhYmFzZSwgdHg6IElEQlRyYW5zYWN0aW9uKSA9PiB2b2lkXG4gICkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZTxJREJEYXRhYmFzZT4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgY29uc3QgcmVxID0gaW5kZXhlZERCLm9wZW4oZGJOYW1lLCB2ZXJzaW9uKVxuICAgICAgcmVxLm9udXBncmFkZW5lZWRlZCA9ICgpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjb25zdCBkYiA9IHJlcS5yZXN1bHRcbiAgICAgICAgICBjb25zdCB0eCA9IHJlcS50cmFuc2FjdGlvbiFcbiAgICAgICAgICB1cGdyYWRlPy4oZGIsIHR4KVxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgcmVqZWN0KGUpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJlcS5vbmVycm9yID0gKCkgPT4gcmVqZWN0KHJlcS5lcnJvcilcbiAgICAgIHJlcS5vbmJsb2NrZWQgPSAoKSA9PiB7XG4gICAgICAgIC8vIG5vLW9wOyBhbm90aGVyIHRhYiBob2xkcyBhbiBvbGRlciB2ZXJzaW9uIG9wZW5cbiAgICAgIH1cbiAgICAgIHJlcS5vbnN1Y2Nlc3MgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGRiID0gcmVxLnJlc3VsdFxuICAgICAgICBkYi5vbnZlcnNpb25jaGFuZ2UgPSAoKSA9PiB7XG4gICAgICAgICAgLy8gRm9yY2UgY2xpZW50cyB0byBsYXppbHkgcmVjb25uZWN0XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGRiLmNsb3NlKClcbiAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgY2FjaGUuZGVsZXRlKGRiTmFtZSlcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVzb2x2ZShkYilcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gZW5zdXJlU2NoZW1hKFxuICAgIGRiOiBJREJEYXRhYmFzZSxcbiAgICBzdG9yZU5hbWU6IHN0cmluZyxcbiAgICBlbnN1cmU/OiBFbnN1cmVTdG9yZU9wdGlvbnNcbiAgKTogUHJvbWlzZTxJREJEYXRhYmFzZT4ge1xuICAgIGxldCBuZWVkU3RvcmUgPSAhZGIub2JqZWN0U3RvcmVOYW1lcy5jb250YWlucyhzdG9yZU5hbWUpXG4gICAgbGV0IG1pc3NpbmdJZHg6IElEQkluZGV4RGVmW10gPSBbXVxuXG4gICAgaWYgKCFuZWVkU3RvcmUgJiYgZW5zdXJlPy5pbmRleGVzPy5sZW5ndGgpIHtcbiAgICAgIC8vIEluc3BlY3QgaW5kZXhlcyBvbiBhbiBleGlzdGluZyBzdG9yZVxuICAgICAgY29uc3QgdCA9IGRiLnRyYW5zYWN0aW9uKHN0b3JlTmFtZSwgJ3JlYWRvbmx5JylcbiAgICAgIGNvbnN0IHMgPSB0Lm9iamVjdFN0b3JlKHN0b3JlTmFtZSlcbiAgICAgIGNvbnN0IHNldCA9IG5ldyBTZXQoQXJyYXkuZnJvbShzLmluZGV4TmFtZXMpKVxuICAgICAgbWlzc2luZ0lkeCA9IChlbnN1cmUuaW5kZXhlcyB8fCBbXSkuZmlsdGVyKChkKSA9PiAhc2V0LmhhcyhkLm5hbWUpKVxuICAgICAgLy8gZmluYWxpemUgdGhlIHJlYWQtb25seSB0eFxuICAgICAgYXdhaXQgbmV3IFByb21pc2U8dm9pZD4oKHJlcywgcmVqKSA9PiB7XG4gICAgICAgIHQub25jb21wbGV0ZSA9ICgpID0+IHJlcygpXG4gICAgICAgIHQub25hYm9ydCA9ICgpID0+IHJlaih0LmVycm9yKVxuICAgICAgICB0Lm9uZXJyb3IgPSAoKSA9PiByZWoodC5lcnJvcilcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgaWYgKCFuZWVkU3RvcmUgJiYgbWlzc2luZ0lkeC5sZW5ndGggPT09IDApIHJldHVybiBkYlxuXG4gICAgLy8gQnVtcCB2ZXJzaW9uIHRvIHRyaWdnZXIgdXBncmFkZVxuICAgIGNvbnN0IG5leHRWZXIgPSBkYi52ZXJzaW9uICsgMVxuICAgIGRiLmNsb3NlKClcbiAgICBjb25zdCB1cGdyYWRlZCA9IGF3YWl0IG9wZW5SYXcoZGIubmFtZSwgbmV4dFZlciwgKG5kYiwgdnR4KSA9PiB7XG4gICAgICBsZXQgc3RvcmU6IElEQk9iamVjdFN0b3JlXG4gICAgICBpZiAoIW5kYi5vYmplY3RTdG9yZU5hbWVzLmNvbnRhaW5zKHN0b3JlTmFtZSkpIHtcbiAgICAgICAgc3RvcmUgPSBuZGIuY3JlYXRlT2JqZWN0U3RvcmUoc3RvcmVOYW1lLCB7XG4gICAgICAgICAga2V5UGF0aDogZW5zdXJlPy5rZXlQYXRoID8/IHVuZGVmaW5lZCxcbiAgICAgICAgICBhdXRvSW5jcmVtZW50OiAhIWVuc3VyZT8uYXV0b0luY3JlbWVudCxcbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN0b3JlID0gdnR4Lm9iamVjdFN0b3JlKHN0b3JlTmFtZSlcbiAgICAgIH1cbiAgICAgIGZvciAoY29uc3QgaWR4IG9mIG1pc3NpbmdJZHgpIHtcbiAgICAgICAgaWYgKCFzdG9yZS5pbmRleE5hbWVzLmNvbnRhaW5zKGlkeC5uYW1lKSkge1xuICAgICAgICAgIHN0b3JlLmNyZWF0ZUluZGV4KGlkeC5uYW1lLCBpZHgua2V5UGF0aCBhcyBhbnksIGlkeC5vcHRpb25zKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgICB1cGdyYWRlZC5vbnZlcnNpb25jaGFuZ2UgPSAoKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICB1cGdyYWRlZC5jbG9zZSgpXG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBjYWNoZS5kZWxldGUodXBncmFkZWQubmFtZSlcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHVwZ3JhZGVkXG4gIH1cblxuICBleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0REIoZGJOYW1lOiBzdHJpbmcsIHN0b3JlTmFtZTogc3RyaW5nLCBlbnN1cmU/OiBFbnN1cmVTdG9yZU9wdGlvbnMpIHtcbiAgICBsZXQgcCA9IGNhY2hlLmdldChkYk5hbWUpXG4gICAgaWYgKCFwKSB7XG4gICAgICBwID0gKGFzeW5jICgpID0+IHtcbiAgICAgICAgY29uc3QgZGIgPSBhd2FpdCBvcGVuUmF3KGRiTmFtZSlcbiAgICAgICAgcmV0dXJuIGVuc3VyZVNjaGVtYShkYiwgc3RvcmVOYW1lLCBlbnN1cmUpXG4gICAgICB9KSgpXG4gICAgICBjYWNoZS5zZXQoZGJOYW1lLCBwKVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBWZXJpZnkgc2NoZW1hIGxhemlseSBpbiBjYXNlIG9mIGZpcnN0LXRpbWUgY2FsbGVycyB3aXRoIGRpZmZlcmVudCBzdG9yZSByZXF1aXJlbWVudHNcbiAgICAgIHAgPSBwLnRoZW4oKGRiKSA9PiBlbnN1cmVTY2hlbWEoZGIsIHN0b3JlTmFtZSwgZW5zdXJlKSlcbiAgICAgIGNhY2hlLnNldChkYk5hbWUsIHApXG4gICAgfVxuICAgIHJldHVybiBwXG4gIH1cblxuICBleHBvcnQgYXN5bmMgZnVuY3Rpb24gY2xvc2VDb25uZWN0aW9uKGRiTmFtZTogc3RyaW5nKSB7XG4gICAgY29uc3QgcCA9IGNhY2hlLmdldChkYk5hbWUpXG4gICAgY2FjaGUuZGVsZXRlKGRiTmFtZSlcbiAgICBpZiAocCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgOyhhd2FpdCBwKS5jbG9zZSgpXG4gICAgICB9IGNhdGNoIHt9XG4gICAgfVxuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIGFzeW5jUmVxdWVzdDxUID0gYW55PihyZXE6IElEQlJlcXVlc3Q8VD4pOiBQcm9taXNlPFQ+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2U8VD4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgcmVxLm9uc3VjY2VzcyA9ICgpID0+IHJlc29sdmUocmVxLnJlc3VsdCBhcyBUKVxuICAgICAgcmVxLm9uZXJyb3IgPSAoKSA9PiByZWplY3QocmVxLmVycm9yKVxuICAgIH0pXG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gd2FpdFR4KHR4OiBJREJUcmFuc2FjdGlvbik6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZTx2b2lkPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB0eC5vbmNvbXBsZXRlID0gKCkgPT4gcmVzb2x2ZSgpXG4gICAgICB0eC5vbmFib3J0ID0gKCkgPT4gcmVqZWN0KHR4LmVycm9yID8/IG5ldyBET01FeGNlcHRpb24oJ0Fib3J0ZWQnLCAnQWJvcnRFcnJvcicpKVxuICAgICAgdHgub25lcnJvciA9ICgpID0+IHJlamVjdCh0eC5lcnJvciA/PyBuZXcgRE9NRXhjZXB0aW9uKCdUcmFuc2FjdGlvbkVycm9yJywgJ1Vua25vd25FcnJvcicpKVxuICAgIH0pXG4gIH1cbn1cbiIsICJpbXBvcnQgeyBFbnN1cmVTdG9yZU9wdGlvbnMsIElEQlBsdXNIZWxwZXIgfSBmcm9tICcuL2hlbHBlci5qcydcblxuZXhwb3J0ICogZnJvbSAnLi9oZWxwZXIuanMnXG5cbmV4cG9ydCBpbnRlcmZhY2UgSURCUGx1c09wdGlvbnMge1xuICAvKipcbiAgICogQmF0Y2ggc2l6ZSBmb3IgYXN5bmMgaXRlcmF0aW9uXG4gICAqIEBkZWZhdWx0IDEwMFxuICAgKi9cbiAgaXRlckJhdGNoPzogbnVtYmVyXG4gIC8qKiBDcmVhdGlvbiBvcHRpb25zIChzZWUgRW5zdXJlU3RvcmVPcHRpb25zKSAqL1xuICBlbnN1cmU/OiBFbnN1cmVTdG9yZU9wdGlvbnNcbiAgLyoqXG4gICAqIFJldHJ5IGNvbmZpZ1xuICAgKiBAZGVmYXVsdCB7IGF0dGVtcHRzOiAzLCBiYXNlRGVsYXlNczogMTYgfVxuICAgKi9cbiAgcmV0cnk/OiB7IGF0dGVtcHRzPzogbnVtYmVyOyBiYXNlRGVsYXlNcz86IG51bWJlciB9XG59XG5cbi8qKlxuICogSURCIFBsdXNcbiAqXG4gKiDwn5eE77iPIE1pbmltYWwgUHJvbWlzZSBiYXNlZCBJbmRleGVkREIgV3JhcHBlciB3aXRoIE1hcC1saWtlIEFQSVxuICpcbiAqIEBhdXRob3IgZHJhZ29uLWZpc2ggPGRyYWdvbi1maXNoQHFxLmNvbT5cbiAqIEBsaWNlbnNlIE1JVFxuICovXG5leHBvcnQgY2xhc3MgSURCUGx1czxLIGV4dGVuZHMgSURCVmFsaWRLZXkgPSBJREJWYWxpZEtleSwgViA9IGFueT5cbiAgaW1wbGVtZW50cyBBc3luY0l0ZXJhYmxlPFtLLCBWXT5cbntcbiAgY29uc3RydWN0b3IoXG4gICAgcmVhZG9ubHkgZGJOYW1lOiBzdHJpbmcsXG4gICAgcmVhZG9ubHkgc3RvcmVOYW1lOiBzdHJpbmcsXG4gICAgcmVhZG9ubHkgb3B0aW9uczogSURCUGx1c09wdGlvbnMgPSB7fVxuICApIHt9XG5cbiAgcHJpdmF0ZSBnZXQgX2l0ZXJCYXRjaCgpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLml0ZXJCYXRjaCA/PyBJREJQbHVzSGVscGVyLmRlZmF1bHRzLml0ZXJCYXRjaFxuICB9XG4gIHByaXZhdGUgZ2V0IF9yZXRyeUNmZygpIHtcbiAgICBjb25zdCByID0gdGhpcy5vcHRpb25zLnJldHJ5ID8/IElEQlBsdXNIZWxwZXIuZGVmYXVsdHMucmV0cnlcbiAgICByZXR1cm4geyBhdHRlbXB0czogci5hdHRlbXB0cyA/PyAzLCBiYXNlRGVsYXlNczogci5iYXNlRGVsYXlNcyA/PyAxNiB9XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIF93aXRoU3RvcmU8VD4oXG4gICAgbW9kZTogSURCVHJhbnNhY3Rpb25Nb2RlLFxuICAgIGZuOiAoc3RvcmU6IElEQk9iamVjdFN0b3JlKSA9PiBQcm9taXNlPFQ+XG4gICk6IFByb21pc2U8VD4ge1xuICAgIGNvbnN0IGNmZyA9IHRoaXMuX3JldHJ5Q2ZnXG4gICAgcmV0dXJuIElEQlBsdXNIZWxwZXIud2l0aFJldHJ5PFQ+KFxuICAgICAgY2ZnLFxuICAgICAgYXN5bmMgKCkgPT4ge1xuICAgICAgICBjb25zdCBkYiA9IGF3YWl0IElEQlBsdXNIZWxwZXIuZ2V0REIodGhpcy5kYk5hbWUsIHRoaXMuc3RvcmVOYW1lLCB0aGlzLm9wdGlvbnMuZW5zdXJlKVxuICAgICAgICB0cnkge1xuICAgICAgICAgIGNvbnN0IHR4ID0gZGIudHJhbnNhY3Rpb24odGhpcy5zdG9yZU5hbWUsIG1vZGUpXG4gICAgICAgICAgY29uc3Qgc3RvcmUgPSB0eC5vYmplY3RTdG9yZSh0aGlzLnN0b3JlTmFtZSlcbiAgICAgICAgICBjb25zdCBvdXQgPSBhd2FpdCBmbihzdG9yZSlcbiAgICAgICAgICBhd2FpdCBJREJQbHVzSGVscGVyLndhaXRUeCh0eClcbiAgICAgICAgICByZXR1cm4gb3V0XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBSZS10aHJvdyB0byBsZXQgd2l0aFJldHJ5IGRlY2lkZTsgdHggZXJyb3JzIG9mdGVuIG1lYW4gZGlzY29ubmVjdFxuICAgICAgICAgIHRocm93IGVcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGFzeW5jIChlcnIpID0+IHtcbiAgICAgICAgaWYgKElEQlBsdXNIZWxwZXIuc2hvdWxkUmVjb25uZWN0KGVycikpIHtcbiAgICAgICAgICBhd2FpdCBJREJQbHVzSGVscGVyLmNsb3NlQ29ubmVjdGlvbih0aGlzLmRiTmFtZSkgLy8gbGF6eSByZWNvbm5lY3Qgb24gbmV4dCBhdHRlbXB0XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBhc3luYyBnZXQoa2V5OiBLKTogUHJvbWlzZTxWIHwgdW5kZWZpbmVkPiB7XG4gICAgcmV0dXJuIHRoaXMuX3dpdGhTdG9yZSgncmVhZG9ubHknLCBhc3luYyAocykgPT4ge1xuICAgICAgY29uc3QgcmVzID0gYXdhaXQgSURCUGx1c0hlbHBlci5hc3luY1JlcXVlc3Q8YW55PihzLmdldChrZXkgYXMgSURCVmFsaWRLZXkpKVxuICAgICAgcmV0dXJuIHJlcyA9PT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkIDogKHJlcyBhcyBWKVxuICAgIH0pXG4gIH1cblxuICBhc3luYyBzZXQoa2V5OiBLLCB2YWx1ZTogVik6IFByb21pc2U8dGhpcz4ge1xuICAgIGF3YWl0IHRoaXMuX3dpdGhTdG9yZSgncmVhZHdyaXRlJywgYXN5bmMgKHMpID0+IHtcbiAgICAgIGNvbnN0IGhhc0tleVBhdGggPSB0aGlzLm9wdGlvbnMuZW5zdXJlPy5rZXlQYXRoICE9IG51bGxcbiAgICAgIGNvbnN0IHJlcSA9IGhhc0tleVBhdGggPyBzLnB1dCh2YWx1ZSBhcyBhbnkpIDogcy5wdXQodmFsdWUgYXMgYW55LCBrZXkgYXMgSURCVmFsaWRLZXkpXG4gICAgICBhd2FpdCBJREJQbHVzSGVscGVyLmFzeW5jUmVxdWVzdChyZXEpXG4gICAgICByZXR1cm5cbiAgICB9KVxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICBhc3luYyBkZWxldGUoa2V5OiBLKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuX3dpdGhTdG9yZSgncmVhZHdyaXRlJywgYXN5bmMgKHMpID0+IHtcbiAgICAgIC8vIENoZWNrIGV4aXN0ZW5jZSB0byByZXR1cm4gYSB0cnV0aGZ1bCBib29sZWFuXG4gICAgICBjb25zdCBleGlzdGVkID1cbiAgICAgICAgKGF3YWl0IElEQlBsdXNIZWxwZXIuYXN5bmNSZXF1ZXN0PGFueT4ocy5nZXQoa2V5IGFzIElEQlZhbGlkS2V5KSkpICE9PSB1bmRlZmluZWRcbiAgICAgIGF3YWl0IElEQlBsdXNIZWxwZXIuYXN5bmNSZXF1ZXN0KHMuZGVsZXRlKGtleSBhcyBJREJWYWxpZEtleSkpXG4gICAgICByZXR1cm4gZXhpc3RlZFxuICAgIH0pXG4gIH1cblxuICBhc3luYyBjbGVhcigpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBhd2FpdCB0aGlzLl93aXRoU3RvcmUoJ3JlYWR3cml0ZScsIGFzeW5jIChzKSA9PiB7XG4gICAgICBhd2FpdCBJREJQbHVzSGVscGVyLmFzeW5jUmVxdWVzdChzLmNsZWFyKCkpXG4gICAgfSlcbiAgfVxuXG4gIGFzeW5jIGhhcyhrZXk6IEspOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICBjb25zdCB2ID0gYXdhaXQgdGhpcy5nZXQoa2V5KVxuICAgIHJldHVybiB2ICE9PSB1bmRlZmluZWRcbiAgfVxuXG4gIGFzeW5jIGNvdW50KCk6IFByb21pc2U8bnVtYmVyPiB7XG4gICAgcmV0dXJuIHRoaXMuX3dpdGhTdG9yZSgncmVhZG9ubHknLCBhc3luYyAocykgPT4ge1xuICAgICAgY29uc3QgbiA9IGF3YWl0IElEQlBsdXNIZWxwZXIuYXN5bmNSZXF1ZXN0PG51bWJlcj4ocy5jb3VudCgpKVxuICAgICAgcmV0dXJuIG4gPz8gMFxuICAgIH0pXG4gIH1cblxuICBwcml2YXRlIGFzeW5jICpfaXRlcmF0ZUVudHJpZXMoKTogQXN5bmNJdGVyYWJsZTxbSywgVl0+IHtcbiAgICAvLyBSZXN0YXJ0IHRyYW5zYWN0aW9uIGV2ZXJ5IE4gaXRlbXMgdG8gYXZvaWQgbG9uZy1saXZlZCBjdXJzb3JzXG4gICAgbGV0IGxhc3RLZXk6IElEQlZhbGlkS2V5IHwgbnVsbCA9IG51bGxcbiAgICBsZXQgZG9uZSA9IGZhbHNlXG4gICAgY29uc3QgYmF0Y2ggPSBNYXRoLm1heCgxLCB0aGlzLl9pdGVyQmF0Y2gpXG5cbiAgICB3aGlsZSAoIWRvbmUpIHtcbiAgICAgIGNvbnN0IGNodW5rOiBBcnJheTxbSywgVl0+ID0gYXdhaXQgdGhpcy5fd2l0aFN0b3JlKCdyZWFkb25seScsIGFzeW5jIChzKSA9PiB7XG4gICAgICAgIGNvbnN0IG91dDogQXJyYXk8W0ssIFZdPiA9IFtdXG4gICAgICAgIGNvbnN0IHJhbmdlID0gbGFzdEtleSA9PT0gbnVsbCA/IHVuZGVmaW5lZCA6IElEQktleVJhbmdlLmxvd2VyQm91bmQobGFzdEtleSwgdHJ1ZSlcbiAgICAgICAgYXdhaXQgbmV3IFByb21pc2U8dm9pZD4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHJlcSA9IHMub3BlbkN1cnNvcihyYW5nZSlcbiAgICAgICAgICByZXEub25lcnJvciA9ICgpID0+IHJlamVjdChyZXEuZXJyb3IpXG4gICAgICAgICAgcmVxLm9uc3VjY2VzcyA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGN1ciA9IHJlcS5yZXN1bHQgYXMgSURCQ3Vyc29yV2l0aFZhbHVlIHwgbnVsbFxuICAgICAgICAgICAgaWYgKCFjdXIpIHtcbiAgICAgICAgICAgICAgZG9uZSA9IHRydWVcbiAgICAgICAgICAgICAgcmVzb2x2ZSgpXG4gICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb3V0LnB1c2goW2N1ci5rZXkgYXMgSywgY3VyLnZhbHVlIGFzIFZdKVxuICAgICAgICAgICAgbGFzdEtleSA9IGN1ci5rZXkgYXMgSURCVmFsaWRLZXlcbiAgICAgICAgICAgIGlmIChvdXQubGVuZ3RoID49IGJhdGNoKSB7XG4gICAgICAgICAgICAgIHJlc29sdmUoKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY3VyLmNvbnRpbnVlKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiBvdXRcbiAgICAgIH0pXG5cbiAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBjaHVuaykgeWllbGQgaXRlbVxuICAgICAgaWYgKGNodW5rLmxlbmd0aCA9PT0gMCkgYnJlYWtcbiAgICB9XG4gIH1cblxuICBlbnRyaWVzKCk6IEFzeW5jSXRlcmFibGU8W0ssIFZdPiB7XG4gICAgcmV0dXJuIHRoaXMuX2l0ZXJhdGVFbnRyaWVzKClcbiAgfVxuXG4gIGFzeW5jICprZXlzKCk6IEFzeW5jSXRlcmFibGU8Sz4ge1xuICAgIGZvciBhd2FpdCAoY29uc3QgW2tdIG9mIHRoaXMuZW50cmllcygpKSB5aWVsZCBrXG4gIH1cblxuICBhc3luYyAqdmFsdWVzKCk6IEFzeW5jSXRlcmFibGU8Vj4ge1xuICAgIGZvciBhd2FpdCAoY29uc3QgWywgdl0gb2YgdGhpcy5lbnRyaWVzKCkpIHlpZWxkIHZcbiAgfVxuXG4gIFtTeW1ib2wuYXN5bmNJdGVyYXRvcl0oKTogQXN5bmNJdGVyYXRvcjxbSywgVl0+IHtcbiAgICByZXR1cm4gdGhpcy5lbnRyaWVzKClbU3ltYm9sLmFzeW5jSXRlcmF0b3JdKClcbiAgfVxuXG4gIGFzeW5jIGZvckVhY2goXG4gICAgY2I6ICh2YWx1ZTogViwga2V5OiBLLCBzdG9yZTogSURCUGx1czxLLCBWPikgPT4gdm9pZCB8IFByb21pc2U8dm9pZD5cbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgZm9yIGF3YWl0IChjb25zdCBbaywgdl0gb2YgdGhpcy5lbnRyaWVzKCkpIHtcbiAgICAgIGF3YWl0IGNiKHYgYXMgViwgayBhcyBLLCB0aGlzKVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGdldE1hbnkoa2V5czogSXRlcmFibGU8Sz4gfCBBc3luY0l0ZXJhYmxlPEs+KTogUHJvbWlzZTxNYXA8SywgViB8IHVuZGVmaW5lZD4+IHtcbiAgICBjb25zdCBvdXQgPSBuZXcgTWFwPEssIFYgfCB1bmRlZmluZWQ+KClcbiAgICBmb3IgYXdhaXQgKGNvbnN0IGsgb2Yga2V5cykgb3V0LnNldChrLCB1bmRlZmluZWQpXG4gICAgYXdhaXQgdGhpcy5fd2l0aFN0b3JlKCdyZWFkb25seScsIGFzeW5jIChzKSA9PiB7XG4gICAgICBhd2FpdCBQcm9taXNlLmFsbChcbiAgICAgICAgb3V0LmtleXMoKS5tYXAoYXN5bmMgKGspID0+IHtcbiAgICAgICAgICBjb25zdCB2ID0gYXdhaXQgSURCUGx1c0hlbHBlci5hc3luY1JlcXVlc3Q8YW55PihzLmdldChrKSlcbiAgICAgICAgICBvdXQuc2V0KGssIHYgPT09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZCA6ICh2IGFzIFYpKVxuICAgICAgICB9KVxuICAgICAgKVxuICAgIH0pXG4gICAgcmV0dXJuIG91dFxuICB9XG5cbiAgYXN5bmMgc2V0TWFueShlbnRyaWVzOiBJdGVyYWJsZTxbSywgVl0+IHwgQXN5bmNJdGVyYWJsZTxbSywgVl0+KTogUHJvbWlzZTx0aGlzPiB7XG4gICAgY29uc3QgaGFzS2V5UGF0aCA9IHRoaXMub3B0aW9ucy5lbnN1cmU/LmtleVBhdGggIT0gbnVsbFxuICAgIGF3YWl0IHRoaXMuX3dpdGhTdG9yZSgncmVhZHdyaXRlJywgYXN5bmMgKHMpID0+IHtcbiAgICAgIGZvciBhd2FpdCAoY29uc3QgW2ssIHZdIG9mIGVudHJpZXMgYXMgYW55KSB7XG4gICAgICAgIGNvbnN0IHJlcSA9IGhhc0tleVBhdGggPyBzLnB1dCh2IGFzIGFueSkgOiBzLnB1dCh2IGFzIGFueSwgayBhcyBJREJWYWxpZEtleSlcbiAgICAgICAgYXdhaXQgSURCUGx1c0hlbHBlci5hc3luY1JlcXVlc3QocmVxKVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIGFzeW5jIGRlbGV0ZU1hbnkoa2V5czogSXRlcmFibGU8Sz4gfCBBc3luY0l0ZXJhYmxlPEs+KTogUHJvbWlzZTxudW1iZXI+IHtcbiAgICBsZXQgZGVsZXRlZCA9IDBcbiAgICBhd2FpdCB0aGlzLl93aXRoU3RvcmUoJ3JlYWR3cml0ZScsIGFzeW5jIChzKSA9PiB7XG4gICAgICBmb3IgYXdhaXQgKGNvbnN0IGsgb2Yga2V5cyBhcyBhbnkpIHtcbiAgICAgICAgY29uc3QgZXhpc3RlZCA9XG4gICAgICAgICAgKGF3YWl0IElEQlBsdXNIZWxwZXIuYXN5bmNSZXF1ZXN0PGFueT4ocy5nZXQoayBhcyBJREJWYWxpZEtleSkpKSAhPT0gdW5kZWZpbmVkXG4gICAgICAgIGlmIChleGlzdGVkKSBkZWxldGVkKytcbiAgICAgICAgYXdhaXQgSURCUGx1c0hlbHBlci5hc3luY1JlcXVlc3Qocy5kZWxldGUoayBhcyBJREJWYWxpZEtleSkpXG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gZGVsZXRlZFxuICB9XG5cbiAgYXN5bmMgZGlzY29ubmVjdCgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBhd2FpdCBJREJQbHVzSGVscGVyLmNsb3NlQ29ubmVjdGlvbih0aGlzLmRiTmFtZSlcbiAgfVxufVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUEsb0ZBQUFBLFVBQUFDLFNBQUE7QUFBQTtBQUNBLFFBQUksUUFBUSxTQUFVLElBQUk7QUFDeEIsYUFBTyxNQUFNLEdBQUcsU0FBUyxRQUFRO0FBQUEsSUFDbkM7QUFHQSxJQUFBQSxRQUFPO0FBQUEsSUFFTCxNQUFNLE9BQU8sY0FBYyxZQUFZLFVBQVUsS0FDakQsTUFBTSxPQUFPLFVBQVUsWUFBWSxNQUFNO0FBQUEsSUFFekMsTUFBTSxPQUFPLFFBQVEsWUFBWSxJQUFJLEtBQ3JDLE1BQU0sT0FBTyxVQUFVLFlBQVksTUFBTSxLQUN6QyxNQUFNLE9BQU9ELFlBQVEsWUFBWUEsUUFBSTtBQUFBLElBRXBDLDRCQUFZO0FBQUUsYUFBTztBQUFBLElBQU0sR0FBRyxLQUFLLFNBQVMsYUFBYSxFQUFFO0FBQUE7QUFBQTs7O0FDZjlEO0FBQUEsOEVBQUFFLFVBQUFDLFNBQUE7QUFBQTtBQUNBLElBQUFBLFFBQU8sVUFBVSxTQUFVLE1BQU07QUFDL0IsVUFBSTtBQUNGLGVBQU8sQ0FBQyxDQUFDLEtBQUs7QUFBQSxNQUNoQixTQUFTLE9BQU87QUFDZCxlQUFPO0FBQUEsTUFDVDtBQUFBLElBQ0Y7QUFBQTtBQUFBOzs7QUNQQTtBQUFBLG9G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QUFBO0FBQUEsc0JBQUFpRCxXQUFBakQsT0FBQTtjQUFBO1lBQUEsVUFBQTtBQUFBLGtCQUFBK0Msb0JBQUE7QUFBQSxzQkFBQUM7Y0FBQTtZQUFBO1VBQUE7UUFFL0QsQ0FBQztBQUFBLGVBQUEsU0FBQUcsTUFBQTtBQUFBLGlCQUFBTixPQUFBdk4sTUFBQSxNQUFBQyxTQUFBO1FBQUE7TUFBQSxHQUFBLENBQUEsR0FDTU47SUFBQSxDQUFBLEVBQUE7RUFDVDtFQUVNbU8sYUFBNEI7QUFBQSxRQUFBQyxVQUFBO0FBQUEsV0FBQTdOLGtCQUFBLGFBQUE7QUFDaEMsWUFBTS9CLEVBQWMwSCxnQkFBZ0JrSSxRQUFLeEgsTUFBTTtJQUFBLENBQUEsRUFBQTtFQUNqRDtBQUNGOyIsCiAgIm5hbWVzIjogWyJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImdsb2JhbFRoaXMiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZ2xvYmFsVGhpcyIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJnbG9iYWxUaGlzIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImdsb2JhbFRoaXMiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZ2xvYmFsVGhpcyIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJnbG9iYWxUaGlzIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImdsb2JhbFRoaXMiLCAiU3ltYm9sIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImdsb2JhbFRoaXMiLCAiZG9jdW1lbnQiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImdsb2JhbFRoaXMiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZ2xvYmFsVGhpcyIsICJUeXBlRXJyb3IiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAieCIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgImV4cG9ydHMiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZ2xvYmFsVGhpcyIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJnbG9iYWxUaGlzIiwgIkVycm9yIiwgIkRPTUV4Y2VwdGlvbiIsICJpZGJfcGx1c19leHBvcnRzIiwgIl9fZXhwb3J0IiwgIklEQlBsdXMiLCAieCIsICJJREJQbHVzSGVscGVyIiwgInMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAiX190b0NvbW1vbkpTIiwgImkiLCAiY2FjaGUiLCAiTWFwIiwgImRlZmF1bHRzIiwgIk9iamVjdCIsICJmcmVlemUiLCAiaXRlckJhdGNoIiwgInJldHJ5IiwgImF0dGVtcHRzIiwgImJhc2VEZWxheU1zIiwgInNsZWVwIiwgImUiLCAiUHJvbWlzZSIsICJuIiwgInNldFRpbWVvdXQiLCAidCIsICJfZSRuYW1lIiwgIm5hbWUiLCAic2hvdWxkUmVjb25uZWN0IiwgImEiLCAiX3giLCAiX3gyIiwgIl94MyIsICJfYSIsICJhcHBseSIsICJhcmd1bWVudHMiLCAiX2FzeW5jVG9HZW5lcmF0b3IiLCAiciIsICJNYXRoIiwgIm1heCIsICJ5IiwgInJ1biIsICJlcnIiLCAiZCIsICJvbkZhaWwiLCAiYmFja29mZiIsICJwb3ciLCAiZmxvb3IiLCAicmFuZG9tIiwgInUiLCAiRXJyb3IiLCAid2l0aFJldHJ5IiwgIm9wZW5SYXciLCAidyIsICJyZXEiLCAiaW5kZXhlZERCIiwgIm9wZW4iLCAib251cGdyYWRlbmVlZGVkIiwgImRiIiwgInJlc3VsdCIsICJsIiwgInRyYW5zYWN0aW9uIiwgInVwZ3JhZGUiLCAicmVqZWN0IiwgIm9uZXJyb3IiLCAiZXJyb3IiLCAib25ibG9ja2VkIiwgIm9uc3VjY2VzcyIsICJvbnZlcnNpb25jaGFuZ2UiLCAiY2xvc2UiLCAiZGVsZXRlIiwgImVuc3VyZVNjaGVtYSIsICJfeDQiLCAiX3g1IiwgIl94NiIsICJfaCIsICJfciRpbmRleGVzIiwgIm5lZWRTdG9yZSIsICJvYmplY3RTdG9yZU5hbWVzIiwgImNvbnRhaW5zIiwgImluZGV4ZXMiLCAibGVuZ3RoIiwgInAiLCAib2JqZWN0U3RvcmUiLCAiZyIsICJTZXQiLCAiQXJyYXkiLCAiZnJvbSIsICJpbmRleE5hbWVzIiwgIm1pc3NpbmdJZHgiLCAiZmlsdGVyIiwgIm0iLCAiaGFzIiwgIlIiLCAib25jb21wbGV0ZSIsICJyZXMiLCAib25hYm9ydCIsICJuZXh0VmVyIiwgInZlcnNpb24iLCAidXBncmFkZWQiLCAibyIsICJfciRrZXlQYXRoIiwgInN0b3JlIiwgImNyZWF0ZU9iamVjdFN0b3JlIiwgImtleVBhdGgiLCAiYXV0b0luY3JlbWVudCIsICJfaXRlcmF0b3I4IiwgIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwgIl9zdGVwOCIsICJkb25lIiwgImlkeCIsICJ2YWx1ZSIsICJjcmVhdGVJbmRleCIsICJvcHRpb25zIiwgImYiLCAiYyIsICJfeDciLCAiX3g4IiwgIl94OSIsICJfYyIsICJnZXQiLCAidGhlbiIsICJoIiwgInNldCIsICJnZXREQiIsICJfeDAiLCAiX2YiLCAiY2xvc2VDb25uZWN0aW9uIiwgInYiLCAiYXN5bmNSZXF1ZXN0IiwgIlMiLCAidHgiLCAiX2UkZXJyb3IiLCAiRE9NRXhjZXB0aW9uIiwgIl9lJGVycm9yMiIsICJ3YWl0VHgiLCAiY29uc3RydWN0b3IiLCAiZGJOYW1lIiwgInN0b3JlTmFtZSIsICJfaXRlckJhdGNoIiwgIl90aGlzJG9wdGlvbnMkaXRlckJhdCIsICJfcmV0cnlDZmciLCAiX3RoaXMkb3B0aW9ucyRyZXRyeSIsICJfdCRhdHRlbXB0cyIsICJfdCRiYXNlRGVsYXlNcyIsICJfd2l0aFN0b3JlIiwgIl90aGlzNCIsICJjZmciLCAiZW5zdXJlIiwgIl9yZWYzIiwgIl94MSIsICJrZXkiLCAiX3RoaXM1IiwgIl9yZWY0IiwgIl94MTAiLCAiX3RoaXM2IiwgIl9yZWY1IiwgIl90aGlzNiRvcHRpb25zJGVuc3VyZSIsICJwdXQiLCAiX3gxMSIsICJfdGhpczciLCAiX3JlZjYiLCAiZXhpc3RlZCIsICJfeDEyIiwgImNsZWFyIiwgIl90aGlzOCIsICJfcmVmNyIsICJfeDEzIiwgIl90aGlzOSIsICJjb3VudCIsICJfdGhpczAiLCAiX3JlZjgiLCAiX3lpZWxkJHMkYXN5bmNSZXF1ZXN0IiwgIl94MTQiLCAiX2l0ZXJhdGVFbnRyaWVzIiwgIl90aGlzIiwgIl93cmFwQXN5bmNHZW5lcmF0b3IiLCAibGFzdEtleSIsICJiYXRjaCIsICJjaHVuayIsICJfYXdhaXRBc3luY0dlbmVyYXRvciIsICJfcmVmOSIsICJvdXQiLCAiSURCS2V5UmFuZ2UiLCAibG93ZXJCb3VuZCIsICJvcGVuQ3Vyc29yIiwgImN1ciIsICJwdXNoIiwgImNvbnRpbnVlIiwgIl94MTUiLCAiX2l0ZXJhdG9yOSIsICJfc3RlcDkiLCAiaXRlbSIsICJlbnRyaWVzIiwgImtleXMiLCAiX3RoaXMyIiwgIl9pdGVyYXRvckFicnVwdENvbXBsZXRpb24iLCAiX2RpZEl0ZXJhdG9yRXJyb3IiLCAiX2l0ZXJhdG9yRXJyb3IiLCAiX2l0ZXJhdG9yIiwgIl9hc3luY0l0ZXJhdG9yIiwgIl9zdGVwIiwgIm5leHQiLCAiayIsICJyZXR1cm4iLCAidmFsdWVzIiwgIl90aGlzMyIsICJfaXRlcmF0b3JBYnJ1cHRDb21wbGV0aW9uMiIsICJfZGlkSXRlcmF0b3JFcnJvcjIiLCAiX2l0ZXJhdG9yRXJyb3IyIiwgIl9pdGVyYXRvcjIiLCAiX3N0ZXAyIiwgIlN5bWJvbCIsICJhc3luY0l0ZXJhdG9yIiwgImZvckVhY2giLCAiX3RoaXMxIiwgIl9pdGVyYXRvckFicnVwdENvbXBsZXRpb24zIiwgIl9kaWRJdGVyYXRvckVycm9yMyIsICJfaXRlcmF0b3JFcnJvcjMiLCAiX2l0ZXJhdG9yMyIsICJfc3RlcDMiLCAiY2IiLCAiZ2V0TWFueSIsICJfdGhpczEwIiwgIl9pdGVyYXRvckFicnVwdENvbXBsZXRpb240IiwgIl9kaWRJdGVyYXRvckVycm9yNCIsICJfaXRlcmF0b3JFcnJvcjQiLCAiX2l0ZXJhdG9yNCIsICJfc3RlcDQiLCAiX3JlZjAiLCAiYWxsIiwgIm1hcCIsICJfcmVmMSIsICJfeDE3IiwgIl94MTYiLCAic2V0TWFueSIsICJfdGhpczExIiwgIl90aGlzMTEkb3B0aW9ucyRlbnN1ciIsICJoYXNLZXlQYXRoIiwgIl9yZWYxMCIsICJfaXRlcmF0b3JBYnJ1cHRDb21wbGV0aW9uNSIsICJfZGlkSXRlcmF0b3JFcnJvcjUiLCAiX2l0ZXJhdG9yRXJyb3I1IiwgIl9pdGVyYXRvcjUiLCAiX3N0ZXA1IiwgIl94MTgiLCAiZGVsZXRlTWFueSIsICJfdGhpczEyIiwgImRlbGV0ZWQiLCAiX3JlZjExIiwgIl9pdGVyYXRvckFicnVwdENvbXBsZXRpb242IiwgIl9kaWRJdGVyYXRvckVycm9yNiIsICJfaXRlcmF0b3JFcnJvcjYiLCAiX2l0ZXJhdG9yNiIsICJfc3RlcDYiLCAiX3gxOSIsICJkaXNjb25uZWN0IiwgIl90aGlzMTMiXQp9Cg==

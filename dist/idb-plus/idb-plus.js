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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy41MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9nbG9iYWwtdGhpcy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjUwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2ZhaWxzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNTAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZGVzY3JpcHRvcnMuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy41MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mdW5jdGlvbi1iaW5kLW5hdGl2ZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjUwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2Z1bmN0aW9uLWNhbGwuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy41MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3QtcHJvcGVydHktaXMtZW51bWVyYWJsZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjUwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNTAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNTAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY2xhc3NvZi1yYXcuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy41MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pbmRleGVkLW9iamVjdC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjUwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLW51bGwtb3ItdW5kZWZpbmVkLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNTAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNTAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy41MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pcy1jYWxsYWJsZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjUwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLW9iamVjdC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjUwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2dldC1idWlsdC1pbi5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjUwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1pcy1wcm90b3R5cGUtb2YuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy41MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9lbnZpcm9ubWVudC11c2VyLWFnZW50LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNTAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZW52aXJvbm1lbnQtdjgtdmVyc2lvbi5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjUwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3N5bWJvbC1jb25zdHJ1Y3Rvci1kZXRlY3Rpb24uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy41MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy91c2Utc3ltYm9sLWFzLXVpZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjUwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLXN5bWJvbC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjUwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RyeS10by1zdHJpbmcuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy41MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hLWNhbGxhYmxlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNTAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZ2V0LW1ldGhvZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjUwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29yZGluYXJ5LXRvLXByaW1pdGl2ZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjUwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLXB1cmUuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy41MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9kZWZpbmUtZ2xvYmFsLXByb3BlcnR5LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNTAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2hhcmVkLXN0b3JlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNTAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2hhcmVkLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNTAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tb2JqZWN0LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNTAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjUwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3VpZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjUwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNTAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tcHJpbWl0aXZlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNTAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tcHJvcGVydHkta2V5LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNTAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZG9jdW1lbnQtY3JlYXRlLWVsZW1lbnQuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy41MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pZTgtZG9tLWRlZmluZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjUwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3IuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy41MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy92OC1wcm90b3R5cGUtZGVmaW5lLWJ1Zy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjUwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FuLW9iamVjdC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjUwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHkuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy41MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHkuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy41MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mdW5jdGlvbi1uYW1lLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNTAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaW5zcGVjdC1zb3VyY2UuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy41MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy93ZWFrLW1hcC1iYXNpYy1kZXRlY3Rpb24uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy41MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zaGFyZWQta2V5LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNTAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaGlkZGVuLWtleXMuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy41MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pbnRlcm5hbC1zdGF0ZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjUwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL21ha2UtYnVpbHQtaW4uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy41MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9kZWZpbmUtYnVpbHQtaW4uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy41MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9tYXRoLXRydW5jLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNTAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8taW50ZWdlci1vci1pbmZpbml0eS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjUwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RvLWFic29sdXRlLWluZGV4LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNTAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tbGVuZ3RoLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNTAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvbGVuZ3RoLW9mLWFycmF5LWxpa2UuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy41MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1pbmNsdWRlcy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjUwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1rZXlzLWludGVybmFsLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNTAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZW51bS1idWcta2V5cy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjUwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LW5hbWVzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNTAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktc3ltYm9scy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjUwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL293bi1rZXlzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNTAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY29weS1jb25zdHJ1Y3Rvci1wcm9wZXJ0aWVzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNTAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXMtZm9yY2VkLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNTAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZXhwb3J0LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNTAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvYW4taW5zdGFuY2UuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy41MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMtYWNjZXNzb3IuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy41MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pcy1wb3NzaWJsZS1wcm90b3R5cGUuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy41MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hLXBvc3NpYmxlLXByb3RvdHlwZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjUwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1zZXQtcHJvdG90eXBlLW9mLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNTAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaW5oZXJpdC1pZi1yZXF1aXJlZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjUwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RvLXN0cmluZy10YWctc3VwcG9ydC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjUwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2NsYXNzb2YuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy41MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy90by1zdHJpbmcuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy41MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9ub3JtYWxpemUtc3RyaW5nLWFyZ3VtZW50LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNTAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZG9tLWV4Y2VwdGlvbi1jb25zdGFudHMuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy41MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9lcnJvci1zdGFjay1jbGVhci5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjUwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy93ZWIuZG9tLWV4Y2VwdGlvbi5zdGFjay5qcyIsICJzcmMvaWRiLXBsdXMvaWRiLXBsdXMudHMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2lkYi1wbHVzQDAuMi4wL25vZGVfbW9kdWxlcy9pZGItcGx1cy9zcmMvaGVscGVyLnRzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9pZGItcGx1c0AwLjIuMC9ub2RlX21vZHVsZXMvaWRiLXBsdXMvc3JjL2luZGV4LnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyIndXNlIHN0cmljdCc7XG52YXIgY2hlY2sgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGl0ICYmIGl0Lk1hdGggPT09IE1hdGggJiYgaXQ7XG59O1xuXG4vLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvODYjaXNzdWVjb21tZW50LTExNTc1OTAyOFxubW9kdWxlLmV4cG9ydHMgPVxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tZ2xvYmFsLXRoaXMgLS0gc2FmZVxuICBjaGVjayh0eXBlb2YgZ2xvYmFsVGhpcyA9PSAnb2JqZWN0JyAmJiBnbG9iYWxUaGlzKSB8fFxuICBjaGVjayh0eXBlb2Ygd2luZG93ID09ICdvYmplY3QnICYmIHdpbmRvdykgfHxcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlc3RyaWN0ZWQtZ2xvYmFscyAtLSBzYWZlXG4gIGNoZWNrKHR5cGVvZiBzZWxmID09ICdvYmplY3QnICYmIHNlbGYpIHx8XG4gIGNoZWNrKHR5cGVvZiBnbG9iYWwgPT0gJ29iamVjdCcgJiYgZ2xvYmFsKSB8fFxuICBjaGVjayh0eXBlb2YgdGhpcyA9PSAnb2JqZWN0JyAmJiB0aGlzKSB8fFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmV3LWZ1bmMgLS0gZmFsbGJhY2tcbiAgKGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0pKCkgfHwgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcbiIsICIndXNlIHN0cmljdCc7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChleGVjKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuICEhZXhlYygpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xuXG4vLyBEZXRlY3QgSUU4J3MgaW5jb21wbGV0ZSBkZWZpbmVQcm9wZXJ0eSBpbXBsZW1lbnRhdGlvblxubW9kdWxlLmV4cG9ydHMgPSAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWRlZmluZXByb3BlcnR5IC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nXG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sIDEsIHsgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9IH0pWzFdICE9PSA3O1xufSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLWZ1bmN0aW9uLXByb3RvdHlwZS1iaW5kIC0tIHNhZmVcbiAgdmFyIHRlc3QgPSBmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH0uYmluZCgpO1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcHJvdG90eXBlLWJ1aWx0aW5zIC0tIHNhZmVcbiAgcmV0dXJuIHR5cGVvZiB0ZXN0ICE9ICdmdW5jdGlvbicgfHwgdGVzdC5oYXNPd25Qcm9wZXJ0eSgncHJvdG90eXBlJyk7XG59KTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgTkFUSVZFX0JJTkQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tYmluZC1uYXRpdmUnKTtcblxudmFyIGNhbGwgPSBGdW5jdGlvbi5wcm90b3R5cGUuY2FsbDtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1mdW5jdGlvbi1wcm90b3R5cGUtYmluZCAtLSBzYWZlXG5tb2R1bGUuZXhwb3J0cyA9IE5BVElWRV9CSU5EID8gY2FsbC5iaW5kKGNhbGwpIDogZnVuY3Rpb24gKCkge1xuICByZXR1cm4gY2FsbC5hcHBseShjYWxsLCBhcmd1bWVudHMpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgJHByb3BlcnR5SXNFbnVtZXJhYmxlID0ge30ucHJvcGVydHlJc0VudW1lcmFibGU7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5ZGVzY3JpcHRvciAtLSBzYWZlXG52YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuLy8gTmFzaG9ybiB+IEpESzggYnVnXG52YXIgTkFTSE9STl9CVUcgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgJiYgISRwcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHsgMTogMiB9LCAxKTtcblxuLy8gYE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGVgIG1ldGhvZCBpbXBsZW1lbnRhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vYmplY3QucHJvdG90eXBlLnByb3BlcnR5aXNlbnVtZXJhYmxlXG5leHBvcnRzLmYgPSBOQVNIT1JOX0JVRyA/IGZ1bmN0aW9uIHByb3BlcnR5SXNFbnVtZXJhYmxlKFYpIHtcbiAgdmFyIGRlc2NyaXB0b3IgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGhpcywgVik7XG4gIHJldHVybiAhIWRlc2NyaXB0b3IgJiYgZGVzY3JpcHRvci5lbnVtZXJhYmxlO1xufSA6ICRwcm9wZXJ0eUlzRW51bWVyYWJsZTtcbiIsICIndXNlIHN0cmljdCc7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChiaXRtYXAsIHZhbHVlKSB7XG4gIHJldHVybiB7XG4gICAgZW51bWVyYWJsZTogIShiaXRtYXAgJiAxKSxcbiAgICBjb25maWd1cmFibGU6ICEoYml0bWFwICYgMiksXG4gICAgd3JpdGFibGU6ICEoYml0bWFwICYgNCksXG4gICAgdmFsdWU6IHZhbHVlXG4gIH07XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBOQVRJVkVfQklORCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1iaW5kLW5hdGl2ZScpO1xuXG52YXIgRnVuY3Rpb25Qcm90b3R5cGUgPSBGdW5jdGlvbi5wcm90b3R5cGU7XG52YXIgY2FsbCA9IEZ1bmN0aW9uUHJvdG90eXBlLmNhbGw7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tZnVuY3Rpb24tcHJvdG90eXBlLWJpbmQgLS0gc2FmZVxudmFyIHVuY3VycnlUaGlzV2l0aEJpbmQgPSBOQVRJVkVfQklORCAmJiBGdW5jdGlvblByb3RvdHlwZS5iaW5kLmJpbmQoY2FsbCwgY2FsbCk7XG5cbm1vZHVsZS5leHBvcnRzID0gTkFUSVZFX0JJTkQgPyB1bmN1cnJ5VGhpc1dpdGhCaW5kIDogZnVuY3Rpb24gKGZuKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGNhbGwuYXBwbHkoZm4sIGFyZ3VtZW50cyk7XG4gIH07XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcblxudmFyIHRvU3RyaW5nID0gdW5jdXJyeVRoaXMoe30udG9TdHJpbmcpO1xudmFyIHN0cmluZ1NsaWNlID0gdW5jdXJyeVRoaXMoJycuc2xpY2UpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gc3RyaW5nU2xpY2UodG9TdHJpbmcoaXQpLCA4LCAtMSk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY2xhc3NvZi1yYXcnKTtcblxudmFyICRPYmplY3QgPSBPYmplY3Q7XG52YXIgc3BsaXQgPSB1bmN1cnJ5VGhpcygnJy5zcGxpdCk7XG5cbi8vIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgYW5kIG5vbi1lbnVtZXJhYmxlIG9sZCBWOCBzdHJpbmdzXG5tb2R1bGUuZXhwb3J0cyA9IGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgLy8gdGhyb3dzIGFuIGVycm9yIGluIHJoaW5vLCBzZWUgaHR0cHM6Ly9naXRodWIuY29tL21vemlsbGEvcmhpbm8vaXNzdWVzLzM0NlxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcHJvdG90eXBlLWJ1aWx0aW5zIC0tIHNhZmVcbiAgcmV0dXJuICEkT2JqZWN0KCd6JykucHJvcGVydHlJc0VudW1lcmFibGUoMCk7XG59KSA/IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gY2xhc3NvZihpdCkgPT09ICdTdHJpbmcnID8gc3BsaXQoaXQsICcnKSA6ICRPYmplY3QoaXQpO1xufSA6ICRPYmplY3Q7XG4iLCAiJ3VzZSBzdHJpY3QnO1xuLy8gd2UgY2FuJ3QgdXNlIGp1c3QgYGl0ID09IG51bGxgIHNpbmNlIG9mIGBkb2N1bWVudC5hbGxgIHNwZWNpYWwgY2FzZVxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1Jc0hUTUxEREEtaW50ZXJuYWwtc2xvdC1hZWNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpdCA9PT0gbnVsbCB8fCBpdCA9PT0gdW5kZWZpbmVkO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgaXNOdWxsT3JVbmRlZmluZWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtbnVsbC1vci11bmRlZmluZWQnKTtcblxudmFyICRUeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG5cbi8vIGBSZXF1aXJlT2JqZWN0Q29lcmNpYmxlYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtcmVxdWlyZW9iamVjdGNvZXJjaWJsZVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKGlzTnVsbE9yVW5kZWZpbmVkKGl0KSkgdGhyb3cgbmV3ICRUeXBlRXJyb3IoXCJDYW4ndCBjYWxsIG1ldGhvZCBvbiBcIiArIGl0KTtcbiAgcmV0dXJuIGl0O1xufTtcbiIsICIndXNlIHN0cmljdCc7XG4vLyB0b09iamVjdCB3aXRoIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgc3RyaW5nc1xudmFyIEluZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaW5kZXhlZC1vYmplY3QnKTtcbnZhciByZXF1aXJlT2JqZWN0Q29lcmNpYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gSW5kZXhlZE9iamVjdChyZXF1aXJlT2JqZWN0Q29lcmNpYmxlKGl0KSk7XG59O1xuIiwgIid1c2Ugc3RyaWN0Jztcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtSXNIVE1MRERBLWludGVybmFsLXNsb3RcbnZhciBkb2N1bWVudEFsbCA9IHR5cGVvZiBkb2N1bWVudCA9PSAnb2JqZWN0JyAmJiBkb2N1bWVudC5hbGw7XG5cbi8vIGBJc0NhbGxhYmxlYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtaXNjYWxsYWJsZVxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHVuaWNvcm4vbm8tdHlwZW9mLXVuZGVmaW5lZCAtLSByZXF1aXJlZCBmb3IgdGVzdGluZ1xubW9kdWxlLmV4cG9ydHMgPSB0eXBlb2YgZG9jdW1lbnRBbGwgPT0gJ3VuZGVmaW5lZCcgJiYgZG9jdW1lbnRBbGwgIT09IHVuZGVmaW5lZCA/IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICByZXR1cm4gdHlwZW9mIGFyZ3VtZW50ID09ICdmdW5jdGlvbicgfHwgYXJndW1lbnQgPT09IGRvY3VtZW50QWxsO1xufSA6IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICByZXR1cm4gdHlwZW9mIGFyZ3VtZW50ID09ICdmdW5jdGlvbic7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiB0eXBlb2YgaXQgPT0gJ29iamVjdCcgPyBpdCAhPT0gbnVsbCA6IGlzQ2FsbGFibGUoaXQpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsVGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwtdGhpcycpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcblxudmFyIGFGdW5jdGlvbiA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICByZXR1cm4gaXNDYWxsYWJsZShhcmd1bWVudCkgPyBhcmd1bWVudCA6IHVuZGVmaW5lZDtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG5hbWVzcGFjZSwgbWV0aG9kKSB7XG4gIHJldHVybiBhcmd1bWVudHMubGVuZ3RoIDwgMiA/IGFGdW5jdGlvbihnbG9iYWxUaGlzW25hbWVzcGFjZV0pIDogZ2xvYmFsVGhpc1tuYW1lc3BhY2VdICYmIGdsb2JhbFRoaXNbbmFtZXNwYWNlXVttZXRob2RdO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gdW5jdXJyeVRoaXMoe30uaXNQcm90b3R5cGVPZik7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbFRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsLXRoaXMnKTtcblxudmFyIG5hdmlnYXRvciA9IGdsb2JhbFRoaXMubmF2aWdhdG9yO1xudmFyIHVzZXJBZ2VudCA9IG5hdmlnYXRvciAmJiBuYXZpZ2F0b3IudXNlckFnZW50O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHVzZXJBZ2VudCA/IFN0cmluZyh1c2VyQWdlbnQpIDogJyc7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbFRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsLXRoaXMnKTtcbnZhciB1c2VyQWdlbnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW52aXJvbm1lbnQtdXNlci1hZ2VudCcpO1xuXG52YXIgcHJvY2VzcyA9IGdsb2JhbFRoaXMucHJvY2VzcztcbnZhciBEZW5vID0gZ2xvYmFsVGhpcy5EZW5vO1xudmFyIHZlcnNpb25zID0gcHJvY2VzcyAmJiBwcm9jZXNzLnZlcnNpb25zIHx8IERlbm8gJiYgRGVuby52ZXJzaW9uO1xudmFyIHY4ID0gdmVyc2lvbnMgJiYgdmVyc2lvbnMudjg7XG52YXIgbWF0Y2gsIHZlcnNpb247XG5cbmlmICh2OCkge1xuICBtYXRjaCA9IHY4LnNwbGl0KCcuJyk7XG4gIC8vIGluIG9sZCBDaHJvbWUsIHZlcnNpb25zIG9mIFY4IGlzbid0IFY4ID0gQ2hyb21lIC8gMTBcbiAgLy8gYnV0IHRoZWlyIGNvcnJlY3QgdmVyc2lvbnMgYXJlIG5vdCBpbnRlcmVzdGluZyBmb3IgdXNcbiAgdmVyc2lvbiA9IG1hdGNoWzBdID4gMCAmJiBtYXRjaFswXSA8IDQgPyAxIDogKyhtYXRjaFswXSArIG1hdGNoWzFdKTtcbn1cblxuLy8gQnJvd3NlckZTIE5vZGVKUyBgcHJvY2Vzc2AgcG9seWZpbGwgaW5jb3JyZWN0bHkgc2V0IGAudjhgIHRvIGAwLjBgXG4vLyBzbyBjaGVjayBgdXNlckFnZW50YCBldmVuIGlmIGAudjhgIGV4aXN0cywgYnV0IDBcbmlmICghdmVyc2lvbiAmJiB1c2VyQWdlbnQpIHtcbiAgbWF0Y2ggPSB1c2VyQWdlbnQubWF0Y2goL0VkZ2VcXC8oXFxkKykvKTtcbiAgaWYgKCFtYXRjaCB8fCBtYXRjaFsxXSA+PSA3NCkge1xuICAgIG1hdGNoID0gdXNlckFnZW50Lm1hdGNoKC9DaHJvbWVcXC8oXFxkKykvKTtcbiAgICBpZiAobWF0Y2gpIHZlcnNpb24gPSArbWF0Y2hbMV07XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSB2ZXJzaW9uO1xuIiwgIid1c2Ugc3RyaWN0Jztcbi8qIGVzbGludC1kaXNhYmxlIGVzL25vLXN5bWJvbCAtLSByZXF1aXJlZCBmb3IgdGVzdGluZyAqL1xudmFyIFY4X1ZFUlNJT04gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW52aXJvbm1lbnQtdjgtdmVyc2lvbicpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgZ2xvYmFsVGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwtdGhpcycpO1xuXG52YXIgJFN0cmluZyA9IGdsb2JhbFRoaXMuU3RyaW5nO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5c3ltYm9scyAtLSByZXF1aXJlZCBmb3IgdGVzdGluZ1xubW9kdWxlLmV4cG9ydHMgPSAhIU9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgJiYgIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgdmFyIHN5bWJvbCA9IFN5bWJvbCgnc3ltYm9sIGRldGVjdGlvbicpO1xuICAvLyBDaHJvbWUgMzggU3ltYm9sIGhhcyBpbmNvcnJlY3QgdG9TdHJpbmcgY29udmVyc2lvblxuICAvLyBgZ2V0LW93bi1wcm9wZXJ0eS1zeW1ib2xzYCBwb2x5ZmlsbCBzeW1ib2xzIGNvbnZlcnRlZCB0byBvYmplY3QgYXJlIG5vdCBTeW1ib2wgaW5zdGFuY2VzXG4gIC8vIG5iOiBEbyBub3QgY2FsbCBgU3RyaW5nYCBkaXJlY3RseSB0byBhdm9pZCB0aGlzIGJlaW5nIG9wdGltaXplZCBvdXQgdG8gYHN5bWJvbCsnJ2Agd2hpY2ggd2lsbCxcbiAgLy8gb2YgY291cnNlLCBmYWlsLlxuICByZXR1cm4gISRTdHJpbmcoc3ltYm9sKSB8fCAhKE9iamVjdChzeW1ib2wpIGluc3RhbmNlb2YgU3ltYm9sKSB8fFxuICAgIC8vIENocm9tZSAzOC00MCBzeW1ib2xzIGFyZSBub3QgaW5oZXJpdGVkIGZyb20gRE9NIGNvbGxlY3Rpb25zIHByb3RvdHlwZXMgdG8gaW5zdGFuY2VzXG4gICAgIVN5bWJvbC5zaGFtICYmIFY4X1ZFUlNJT04gJiYgVjhfVkVSU0lPTiA8IDQxO1xufSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xuLyogZXNsaW50LWRpc2FibGUgZXMvbm8tc3ltYm9sIC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nICovXG52YXIgTkFUSVZFX1NZTUJPTCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zeW1ib2wtY29uc3RydWN0b3ItZGV0ZWN0aW9uJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gTkFUSVZFX1NZTUJPTCAmJlxuICAhU3ltYm9sLnNoYW0gJiZcbiAgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PSAnc3ltYm9sJztcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2V0QnVpbHRJbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtYnVpbHQtaW4nKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgaXNQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtaXMtcHJvdG90eXBlLW9mJyk7XG52YXIgVVNFX1NZTUJPTF9BU19VSUQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdXNlLXN5bWJvbC1hcy11aWQnKTtcblxudmFyICRPYmplY3QgPSBPYmplY3Q7XG5cbm1vZHVsZS5leHBvcnRzID0gVVNFX1NZTUJPTF9BU19VSUQgPyBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PSAnc3ltYm9sJztcbn0gOiBmdW5jdGlvbiAoaXQpIHtcbiAgdmFyICRTeW1ib2wgPSBnZXRCdWlsdEluKCdTeW1ib2wnKTtcbiAgcmV0dXJuIGlzQ2FsbGFibGUoJFN5bWJvbCkgJiYgaXNQcm90b3R5cGVPZigkU3ltYm9sLnByb3RvdHlwZSwgJE9iamVjdChpdCkpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgJFN0cmluZyA9IFN0cmluZztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gJFN0cmluZyhhcmd1bWVudCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuICdPYmplY3QnO1xuICB9XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgdHJ5VG9TdHJpbmcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdHJ5LXRvLXN0cmluZycpO1xuXG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcblxuLy8gYEFzc2VydDogSXNDYWxsYWJsZShhcmd1bWVudCkgaXMgdHJ1ZWBcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIGlmIChpc0NhbGxhYmxlKGFyZ3VtZW50KSkgcmV0dXJuIGFyZ3VtZW50O1xuICB0aHJvdyBuZXcgJFR5cGVFcnJvcih0cnlUb1N0cmluZyhhcmd1bWVudCkgKyAnIGlzIG5vdCBhIGZ1bmN0aW9uJyk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBhQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYS1jYWxsYWJsZScpO1xudmFyIGlzTnVsbE9yVW5kZWZpbmVkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW51bGwtb3ItdW5kZWZpbmVkJyk7XG5cbi8vIGBHZXRNZXRob2RgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1nZXRtZXRob2Rcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKFYsIFApIHtcbiAgdmFyIGZ1bmMgPSBWW1BdO1xuICByZXR1cm4gaXNOdWxsT3JVbmRlZmluZWQoZnVuYykgPyB1bmRlZmluZWQgOiBhQ2FsbGFibGUoZnVuYyk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBjYWxsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWNhbGwnKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG5cbnZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xuXG4vLyBgT3JkaW5hcnlUb1ByaW1pdGl2ZWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9yZGluYXJ5dG9wcmltaXRpdmVcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGlucHV0LCBwcmVmKSB7XG4gIHZhciBmbiwgdmFsO1xuICBpZiAocHJlZiA9PT0gJ3N0cmluZycgJiYgaXNDYWxsYWJsZShmbiA9IGlucHV0LnRvU3RyaW5nKSAmJiAhaXNPYmplY3QodmFsID0gY2FsbChmbiwgaW5wdXQpKSkgcmV0dXJuIHZhbDtcbiAgaWYgKGlzQ2FsbGFibGUoZm4gPSBpbnB1dC52YWx1ZU9mKSAmJiAhaXNPYmplY3QodmFsID0gY2FsbChmbiwgaW5wdXQpKSkgcmV0dXJuIHZhbDtcbiAgaWYgKHByZWYgIT09ICdzdHJpbmcnICYmIGlzQ2FsbGFibGUoZm4gPSBpbnB1dC50b1N0cmluZykgJiYgIWlzT2JqZWN0KHZhbCA9IGNhbGwoZm4sIGlucHV0KSkpIHJldHVybiB2YWw7XG4gIHRocm93IG5ldyAkVHlwZUVycm9yKFwiQ2FuJ3QgY29udmVydCBvYmplY3QgdG8gcHJpbWl0aXZlIHZhbHVlXCIpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG5tb2R1bGUuZXhwb3J0cyA9IGZhbHNlO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWxUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbC10aGlzJyk7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZGVmaW5lcHJvcGVydHkgLS0gc2FmZVxudmFyIGRlZmluZVByb3BlcnR5ID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gIHRyeSB7XG4gICAgZGVmaW5lUHJvcGVydHkoZ2xvYmFsVGhpcywga2V5LCB7IHZhbHVlOiB2YWx1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBnbG9iYWxUaGlzW2tleV0gPSB2YWx1ZTtcbiAgfSByZXR1cm4gdmFsdWU7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBJU19QVVJFID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLXB1cmUnKTtcbnZhciBnbG9iYWxUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbC10aGlzJyk7XG52YXIgZGVmaW5lR2xvYmFsUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVmaW5lLWdsb2JhbC1wcm9wZXJ0eScpO1xuXG52YXIgU0hBUkVEID0gJ19fY29yZS1qc19zaGFyZWRfXyc7XG52YXIgc3RvcmUgPSBtb2R1bGUuZXhwb3J0cyA9IGdsb2JhbFRoaXNbU0hBUkVEXSB8fCBkZWZpbmVHbG9iYWxQcm9wZXJ0eShTSEFSRUQsIHt9KTtcblxuKHN0b3JlLnZlcnNpb25zIHx8IChzdG9yZS52ZXJzaW9ucyA9IFtdKSkucHVzaCh7XG4gIHZlcnNpb246ICczLjUwLjAnLFxuICBtb2RlOiBJU19QVVJFID8gJ3B1cmUnIDogJ2dsb2JhbCcsXG4gIGNvcHlyaWdodDogJ8KpIDIwMTPigJMyMDI1IERlbmlzIFB1c2hrYXJldiAoemxvaXJvY2sucnUpLCAyMDI14oCTMjAyNiBDb3JlSlMgQ29tcGFueSAoY29yZS1qcy5pbykuIEFsbCByaWdodHMgcmVzZXJ2ZWQuJyxcbiAgbGljZW5zZTogJ2h0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2Jsb2IvdjMuNTAuMC9MSUNFTlNFJyxcbiAgc291cmNlOiAnaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMnXG59KTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgc3RvcmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkLXN0b3JlJyk7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWNyZWF0ZSAtLSBzYWZlXG52YXIgY3JlYXRlID0gT2JqZWN0LmNyZWF0ZSB8fCBPYmplY3Q7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgcmV0dXJuIHN0b3JlW2tleV0gfHwgKHN0b3JlW2tleV0gPSB2YWx1ZSB8fCBjcmVhdGUobnVsbCkpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgcmVxdWlyZU9iamVjdENvZXJjaWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZXF1aXJlLW9iamVjdC1jb2VyY2libGUnKTtcblxudmFyICRPYmplY3QgPSBPYmplY3Q7XG5cbi8vIGBUb09iamVjdGAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXRvb2JqZWN0XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICByZXR1cm4gJE9iamVjdChyZXF1aXJlT2JqZWN0Q29lcmNpYmxlKGFyZ3VtZW50KSk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1vYmplY3QnKTtcblxudmFyIGhhc093blByb3BlcnR5ID0gdW5jdXJyeVRoaXMoe30uaGFzT3duUHJvcGVydHkpO1xuXG4vLyBgSGFzT3duUHJvcGVydHlgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1oYXNvd25wcm9wZXJ0eVxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1oYXNvd24gLS0gc2FmZVxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuaGFzT3duIHx8IGZ1bmN0aW9uIGhhc093bihpdCwga2V5KSB7XG4gIHJldHVybiBoYXNPd25Qcm9wZXJ0eSh0b09iamVjdChpdCksIGtleSk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcblxudmFyIGlkID0gMDtcbnZhciBwb3N0Zml4ID0gTWF0aC5yYW5kb20oKTtcbnZhciB0b1N0cmluZyA9IHVuY3VycnlUaGlzKDEuMS50b1N0cmluZyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4gJ1N5bWJvbCgnICsgKGtleSA9PT0gdW5kZWZpbmVkID8gJycgOiBrZXkpICsgJylfJyArIHRvU3RyaW5nKCsraWQgKyBwb3N0Zml4LCAzNik7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWxUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbC10aGlzJyk7XG52YXIgc2hhcmVkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZCcpO1xudmFyIGhhc093biA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMtb3duLXByb3BlcnR5Jyk7XG52YXIgdWlkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3VpZCcpO1xudmFyIE5BVElWRV9TWU1CT0wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc3ltYm9sLWNvbnN0cnVjdG9yLWRldGVjdGlvbicpO1xudmFyIFVTRV9TWU1CT0xfQVNfVUlEID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3VzZS1zeW1ib2wtYXMtdWlkJyk7XG5cbnZhciBTeW1ib2wgPSBnbG9iYWxUaGlzLlN5bWJvbDtcbnZhciBXZWxsS25vd25TeW1ib2xzU3RvcmUgPSBzaGFyZWQoJ3drcycpO1xudmFyIGNyZWF0ZVdlbGxLbm93blN5bWJvbCA9IFVTRV9TWU1CT0xfQVNfVUlEID8gU3ltYm9sWydmb3InXSB8fCBTeW1ib2wgOiBTeW1ib2wgJiYgU3ltYm9sLndpdGhvdXRTZXR0ZXIgfHwgdWlkO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIGlmICghaGFzT3duKFdlbGxLbm93blN5bWJvbHNTdG9yZSwgbmFtZSkpIHtcbiAgICBXZWxsS25vd25TeW1ib2xzU3RvcmVbbmFtZV0gPSBOQVRJVkVfU1lNQk9MICYmIGhhc093bihTeW1ib2wsIG5hbWUpXG4gICAgICA/IFN5bWJvbFtuYW1lXVxuICAgICAgOiBjcmVhdGVXZWxsS25vd25TeW1ib2woJ1N5bWJvbC4nICsgbmFtZSk7XG4gIH0gcmV0dXJuIFdlbGxLbm93blN5bWJvbHNTdG9yZVtuYW1lXTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGNhbGwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tY2FsbCcpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xudmFyIGlzU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLXN5bWJvbCcpO1xudmFyIGdldE1ldGhvZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtbWV0aG9kJyk7XG52YXIgb3JkaW5hcnlUb1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vcmRpbmFyeS10by1wcmltaXRpdmUnKTtcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcblxudmFyICRUeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG52YXIgVE9fUFJJTUlUSVZFID0gd2VsbEtub3duU3ltYm9sKCd0b1ByaW1pdGl2ZScpO1xuXG4vLyBgVG9QcmltaXRpdmVgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy10b3ByaW1pdGl2ZVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaW5wdXQsIHByZWYpIHtcbiAgaWYgKCFpc09iamVjdChpbnB1dCkgfHwgaXNTeW1ib2woaW5wdXQpKSByZXR1cm4gaW5wdXQ7XG4gIHZhciBleG90aWNUb1ByaW0gPSBnZXRNZXRob2QoaW5wdXQsIFRPX1BSSU1JVElWRSk7XG4gIHZhciByZXN1bHQ7XG4gIGlmIChleG90aWNUb1ByaW0pIHtcbiAgICBpZiAocHJlZiA9PT0gdW5kZWZpbmVkKSBwcmVmID0gJ2RlZmF1bHQnO1xuICAgIHJlc3VsdCA9IGNhbGwoZXhvdGljVG9QcmltLCBpbnB1dCwgcHJlZik7XG4gICAgaWYgKCFpc09iamVjdChyZXN1bHQpIHx8IGlzU3ltYm9sKHJlc3VsdCkpIHJldHVybiByZXN1bHQ7XG4gICAgdGhyb3cgbmV3ICRUeXBlRXJyb3IoXCJDYW4ndCBjb252ZXJ0IG9iamVjdCB0byBwcmltaXRpdmUgdmFsdWVcIik7XG4gIH1cbiAgaWYgKHByZWYgPT09IHVuZGVmaW5lZCkgcHJlZiA9ICdudW1iZXInO1xuICByZXR1cm4gb3JkaW5hcnlUb1ByaW1pdGl2ZShpbnB1dCwgcHJlZik7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB0b1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1wcmltaXRpdmUnKTtcbnZhciBpc1N5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1zeW1ib2wnKTtcblxuLy8gYFRvUHJvcGVydHlLZXlgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy10b3Byb3BlcnR5a2V5XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICB2YXIga2V5ID0gdG9QcmltaXRpdmUoYXJndW1lbnQsICdzdHJpbmcnKTtcbiAgcmV0dXJuIGlzU3ltYm9sKGtleSkgPyBrZXkgOiBrZXkgKyAnJztcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbFRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsLXRoaXMnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcblxudmFyIGRvY3VtZW50ID0gZ2xvYmFsVGhpcy5kb2N1bWVudDtcbi8vIHR5cGVvZiBkb2N1bWVudC5jcmVhdGVFbGVtZW50IGlzICdvYmplY3QnIGluIG9sZCBJRVxudmFyIEVYSVNUUyA9IGlzT2JqZWN0KGRvY3VtZW50KSAmJiBpc09iamVjdChkb2N1bWVudC5jcmVhdGVFbGVtZW50KTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIEVYSVNUUyA/IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoaXQpIDoge307XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgY3JlYXRlRWxlbWVudCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kb2N1bWVudC1jcmVhdGUtZWxlbWVudCcpO1xuXG4vLyBUaGFua3MgdG8gSUU4IGZvciBpdHMgZnVubnkgZGVmaW5lUHJvcGVydHlcbm1vZHVsZS5leHBvcnRzID0gIURFU0NSSVBUT1JTICYmICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZGVmaW5lcHJvcGVydHkgLS0gcmVxdWlyZWQgZm9yIHRlc3RpbmdcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjcmVhdGVFbGVtZW50KCdkaXYnKSwgJ2EnLCB7XG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9XG4gIH0pLmEgIT09IDc7XG59KTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBjYWxsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWNhbGwnKTtcbnZhciBwcm9wZXJ0eUlzRW51bWVyYWJsZU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtcHJvcGVydHktaXMtZW51bWVyYWJsZScpO1xudmFyIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHktZGVzY3JpcHRvcicpO1xudmFyIHRvSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbmRleGVkLW9iamVjdCcpO1xudmFyIHRvUHJvcGVydHlLZXkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tcHJvcGVydHkta2V5Jyk7XG52YXIgaGFzT3duID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcy1vd24tcHJvcGVydHknKTtcbnZhciBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pZTgtZG9tLWRlZmluZScpO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5ZGVzY3JpcHRvciAtLSBzYWZlXG52YXIgJGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbi8vIGBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb2JqZWN0LmdldG93bnByb3BlcnR5ZGVzY3JpcHRvclxuZXhwb3J0cy5mID0gREVTQ1JJUFRPUlMgPyAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIDogZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApIHtcbiAgTyA9IHRvSW5kZXhlZE9iamVjdChPKTtcbiAgUCA9IHRvUHJvcGVydHlLZXkoUCk7XG4gIGlmIChJRThfRE9NX0RFRklORSkgdHJ5IHtcbiAgICByZXR1cm4gJGdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHsgLyogZW1wdHkgKi8gfVxuICBpZiAoaGFzT3duKE8sIFApKSByZXR1cm4gY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yKCFjYWxsKHByb3BlcnR5SXNFbnVtZXJhYmxlTW9kdWxlLmYsIE8sIFApLCBPW1BdKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcblxuLy8gVjggfiBDaHJvbWUgMzYtXG4vLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0zMzM0XG5tb2R1bGUuZXhwb3J0cyA9IERFU0NSSVBUT1JTICYmIGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1kZWZpbmVwcm9wZXJ0eSAtLSByZXF1aXJlZCBmb3IgdGVzdGluZ1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGZ1bmN0aW9uICgpIHsgLyogZW1wdHkgKi8gfSwgJ3Byb3RvdHlwZScsIHtcbiAgICB2YWx1ZTogNDIsXG4gICAgd3JpdGFibGU6IGZhbHNlXG4gIH0pLnByb3RvdHlwZSAhPT0gNDI7XG59KTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG5cbnZhciAkU3RyaW5nID0gU3RyaW5nO1xudmFyICRUeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG5cbi8vIGBBc3NlcnQ6IFR5cGUoYXJndW1lbnQpIGlzIE9iamVjdGBcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIGlmIChpc09iamVjdChhcmd1bWVudCkpIHJldHVybiBhcmd1bWVudDtcbiAgdGhyb3cgbmV3ICRUeXBlRXJyb3IoJFN0cmluZyhhcmd1bWVudCkgKyAnIGlzIG5vdCBhbiBvYmplY3QnKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaWU4LWRvbS1kZWZpbmUnKTtcbnZhciBWOF9QUk9UT1RZUEVfREVGSU5FX0JVRyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy92OC1wcm90b3R5cGUtZGVmaW5lLWJ1ZycpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xudmFyIHRvUHJvcGVydHlLZXkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tcHJvcGVydHkta2V5Jyk7XG5cbnZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1kZWZpbmVwcm9wZXJ0eSAtLSBzYWZlXG52YXIgJGRlZmluZVByb3BlcnR5ID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1nZXRvd25wcm9wZXJ0eWRlc2NyaXB0b3IgLS0gc2FmZVxudmFyICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xudmFyIEVOVU1FUkFCTEUgPSAnZW51bWVyYWJsZSc7XG52YXIgQ09ORklHVVJBQkxFID0gJ2NvbmZpZ3VyYWJsZSc7XG52YXIgV1JJVEFCTEUgPSAnd3JpdGFibGUnO1xuXG4vLyBgT2JqZWN0LmRlZmluZVByb3BlcnR5YCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb2JqZWN0LmRlZmluZXByb3BlcnR5XG5leHBvcnRzLmYgPSBERVNDUklQVE9SUyA/IFY4X1BST1RPVFlQRV9ERUZJTkVfQlVHID8gZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcykge1xuICBhbk9iamVjdChPKTtcbiAgUCA9IHRvUHJvcGVydHlLZXkoUCk7XG4gIGFuT2JqZWN0KEF0dHJpYnV0ZXMpO1xuICBpZiAodHlwZW9mIE8gPT09ICdmdW5jdGlvbicgJiYgUCA9PT0gJ3Byb3RvdHlwZScgJiYgJ3ZhbHVlJyBpbiBBdHRyaWJ1dGVzICYmIFdSSVRBQkxFIGluIEF0dHJpYnV0ZXMgJiYgIUF0dHJpYnV0ZXNbV1JJVEFCTEVdKSB7XG4gICAgdmFyIGN1cnJlbnQgPSAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApO1xuICAgIGlmIChjdXJyZW50ICYmIGN1cnJlbnRbV1JJVEFCTEVdKSB7XG4gICAgICBPW1BdID0gQXR0cmlidXRlcy52YWx1ZTtcbiAgICAgIEF0dHJpYnV0ZXMgPSB7XG4gICAgICAgIGNvbmZpZ3VyYWJsZTogQ09ORklHVVJBQkxFIGluIEF0dHJpYnV0ZXMgPyBBdHRyaWJ1dGVzW0NPTkZJR1VSQUJMRV0gOiBjdXJyZW50W0NPTkZJR1VSQUJMRV0sXG4gICAgICAgIGVudW1lcmFibGU6IEVOVU1FUkFCTEUgaW4gQXR0cmlidXRlcyA/IEF0dHJpYnV0ZXNbRU5VTUVSQUJMRV0gOiBjdXJyZW50W0VOVU1FUkFCTEVdLFxuICAgICAgICB3cml0YWJsZTogZmFsc2VcbiAgICAgIH07XG4gICAgfVxuICB9IHJldHVybiAkZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcyk7XG59IDogJGRlZmluZVByb3BlcnR5IDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcykge1xuICBhbk9iamVjdChPKTtcbiAgUCA9IHRvUHJvcGVydHlLZXkoUCk7XG4gIGFuT2JqZWN0KEF0dHJpYnV0ZXMpO1xuICBpZiAoSUU4X0RPTV9ERUZJTkUpIHRyeSB7XG4gICAgcmV0dXJuICRkZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHsgLyogZW1wdHkgKi8gfVxuICBpZiAoJ2dldCcgaW4gQXR0cmlidXRlcyB8fCAnc2V0JyBpbiBBdHRyaWJ1dGVzKSB0aHJvdyBuZXcgJFR5cGVFcnJvcignQWNjZXNzb3JzIG5vdCBzdXBwb3J0ZWQnKTtcbiAgaWYgKCd2YWx1ZScgaW4gQXR0cmlidXRlcykgT1tQXSA9IEF0dHJpYnV0ZXMudmFsdWU7XG4gIHJldHVybiBPO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBkZWZpbmVQcm9wZXJ0eU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5Jyk7XG52YXIgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eS1kZXNjcmlwdG9yJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gREVTQ1JJUFRPUlMgPyBmdW5jdGlvbiAob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIHJldHVybiBkZWZpbmVQcm9wZXJ0eU1vZHVsZS5mKG9iamVjdCwga2V5LCBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IoMSwgdmFsdWUpKTtcbn0gOiBmdW5jdGlvbiAob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIG9iamVjdFtrZXldID0gdmFsdWU7XG4gIHJldHVybiBvYmplY3Q7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIGhhc093biA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMtb3duLXByb3BlcnR5Jyk7XG5cbnZhciBGdW5jdGlvblByb3RvdHlwZSA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZ2V0b3ducHJvcGVydHlkZXNjcmlwdG9yIC0tIHNhZmVcbnZhciBnZXREZXNjcmlwdG9yID0gREVTQ1JJUFRPUlMgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxudmFyIEVYSVNUUyA9IGhhc093bihGdW5jdGlvblByb3RvdHlwZSwgJ25hbWUnKTtcbi8vIGFkZGl0aW9uYWwgcHJvdGVjdGlvbiBmcm9tIG1pbmlmaWVkIC8gbWFuZ2xlZCAvIGRyb3BwZWQgZnVuY3Rpb24gbmFtZXNcbnZhciBQUk9QRVIgPSBFWElTVFMgJiYgZnVuY3Rpb24gc29tZXRoaW5nKCkgeyAvKiBlbXB0eSAqLyB9Lm5hbWUgPT09ICdzb21ldGhpbmcnO1xudmFyIENPTkZJR1VSQUJMRSA9IEVYSVNUUyAmJiAoIURFU0NSSVBUT1JTIHx8IChERVNDUklQVE9SUyAmJiBnZXREZXNjcmlwdG9yKEZ1bmN0aW9uUHJvdG90eXBlLCAnbmFtZScpLmNvbmZpZ3VyYWJsZSkpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgRVhJU1RTOiBFWElTVFMsXG4gIFBST1BFUjogUFJPUEVSLFxuICBDT05GSUdVUkFCTEU6IENPTkZJR1VSQUJMRVxufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xudmFyIHN0b3JlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZC1zdG9yZScpO1xuXG52YXIgZnVuY3Rpb25Ub1N0cmluZyA9IHVuY3VycnlUaGlzKEZ1bmN0aW9uLnRvU3RyaW5nKTtcblxuLy8gdGhpcyBoZWxwZXIgYnJva2VuIGluIGBjb3JlLWpzQDMuNC4xLTMuNC40YCwgc28gd2UgY2FuJ3QgdXNlIGBzaGFyZWRgIGhlbHBlclxuaWYgKCFpc0NhbGxhYmxlKHN0b3JlLmluc3BlY3RTb3VyY2UpKSB7XG4gIHN0b3JlLmluc3BlY3RTb3VyY2UgPSBmdW5jdGlvbiAoaXQpIHtcbiAgICByZXR1cm4gZnVuY3Rpb25Ub1N0cmluZyhpdCk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3RvcmUuaW5zcGVjdFNvdXJjZTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsVGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwtdGhpcycpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcblxudmFyIFdlYWtNYXAgPSBnbG9iYWxUaGlzLldlYWtNYXA7XG5cbm1vZHVsZS5leHBvcnRzID0gaXNDYWxsYWJsZShXZWFrTWFwKSAmJiAvbmF0aXZlIGNvZGUvLnRlc3QoU3RyaW5nKFdlYWtNYXApKTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgc2hhcmVkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZCcpO1xudmFyIHVpZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy91aWQnKTtcblxudmFyIGtleXMgPSBzaGFyZWQoJ2tleXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHJldHVybiBrZXlzW2tleV0gfHwgKGtleXNba2V5XSA9IHVpZChrZXkpKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xubW9kdWxlLmV4cG9ydHMgPSB7fTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgTkFUSVZFX1dFQUtfTUFQID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlYWstbWFwLWJhc2ljLWRldGVjdGlvbicpO1xudmFyIGdsb2JhbFRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsLXRoaXMnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcbnZhciBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLW5vbi1lbnVtZXJhYmxlLXByb3BlcnR5Jyk7XG52YXIgaGFzT3duID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcy1vd24tcHJvcGVydHknKTtcbnZhciBzaGFyZWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkLXN0b3JlJyk7XG52YXIgc2hhcmVkS2V5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZC1rZXknKTtcbnZhciBoaWRkZW5LZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hpZGRlbi1rZXlzJyk7XG5cbnZhciBPQkpFQ1RfQUxSRUFEWV9JTklUSUFMSVpFRCA9ICdPYmplY3QgYWxyZWFkeSBpbml0aWFsaXplZCc7XG52YXIgVHlwZUVycm9yID0gZ2xvYmFsVGhpcy5UeXBlRXJyb3I7XG52YXIgV2Vha01hcCA9IGdsb2JhbFRoaXMuV2Vha01hcDtcbnZhciBzZXQsIGdldCwgaGFzO1xuXG52YXIgZW5mb3JjZSA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaGFzKGl0KSA/IGdldChpdCkgOiBzZXQoaXQsIHt9KTtcbn07XG5cbnZhciBnZXR0ZXJGb3IgPSBmdW5jdGlvbiAoVFlQRSkge1xuICByZXR1cm4gZnVuY3Rpb24gKGl0KSB7XG4gICAgdmFyIHN0YXRlO1xuICAgIGlmICghaXNPYmplY3QoaXQpIHx8IChzdGF0ZSA9IGdldChpdCkpLnR5cGUgIT09IFRZUEUpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0luY29tcGF0aWJsZSByZWNlaXZlciwgJyArIFRZUEUgKyAnIHJlcXVpcmVkJyk7XG4gICAgfSByZXR1cm4gc3RhdGU7XG4gIH07XG59O1xuXG5pZiAoTkFUSVZFX1dFQUtfTUFQIHx8IHNoYXJlZC5zdGF0ZSkge1xuICB2YXIgc3RvcmUgPSBzaGFyZWQuc3RhdGUgfHwgKHNoYXJlZC5zdGF0ZSA9IG5ldyBXZWFrTWFwKCkpO1xuICAvKiBlc2xpbnQtZGlzYWJsZSBuby1zZWxmLWFzc2lnbiAtLSBwcm90b3R5cGUgbWV0aG9kcyBwcm90ZWN0aW9uICovXG4gIHN0b3JlLmdldCA9IHN0b3JlLmdldDtcbiAgc3RvcmUuaGFzID0gc3RvcmUuaGFzO1xuICBzdG9yZS5zZXQgPSBzdG9yZS5zZXQ7XG4gIC8qIGVzbGludC1lbmFibGUgbm8tc2VsZi1hc3NpZ24gLS0gcHJvdG90eXBlIG1ldGhvZHMgcHJvdGVjdGlvbiAqL1xuICBzZXQgPSBmdW5jdGlvbiAoaXQsIG1ldGFkYXRhKSB7XG4gICAgaWYgKHN0b3JlLmhhcyhpdCkpIHRocm93IG5ldyBUeXBlRXJyb3IoT0JKRUNUX0FMUkVBRFlfSU5JVElBTElaRUQpO1xuICAgIG1ldGFkYXRhLmZhY2FkZSA9IGl0O1xuICAgIHN0b3JlLnNldChpdCwgbWV0YWRhdGEpO1xuICAgIHJldHVybiBtZXRhZGF0YTtcbiAgfTtcbiAgZ2V0ID0gZnVuY3Rpb24gKGl0KSB7XG4gICAgcmV0dXJuIHN0b3JlLmdldChpdCkgfHwge307XG4gIH07XG4gIGhhcyA9IGZ1bmN0aW9uIChpdCkge1xuICAgIHJldHVybiBzdG9yZS5oYXMoaXQpO1xuICB9O1xufSBlbHNlIHtcbiAgdmFyIFNUQVRFID0gc2hhcmVkS2V5KCdzdGF0ZScpO1xuICBoaWRkZW5LZXlzW1NUQVRFXSA9IHRydWU7XG4gIHNldCA9IGZ1bmN0aW9uIChpdCwgbWV0YWRhdGEpIHtcbiAgICBpZiAoaGFzT3duKGl0LCBTVEFURSkpIHRocm93IG5ldyBUeXBlRXJyb3IoT0JKRUNUX0FMUkVBRFlfSU5JVElBTElaRUQpO1xuICAgIG1ldGFkYXRhLmZhY2FkZSA9IGl0O1xuICAgIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eShpdCwgU1RBVEUsIG1ldGFkYXRhKTtcbiAgICByZXR1cm4gbWV0YWRhdGE7XG4gIH07XG4gIGdldCA9IGZ1bmN0aW9uIChpdCkge1xuICAgIHJldHVybiBoYXNPd24oaXQsIFNUQVRFKSA/IGl0W1NUQVRFXSA6IHt9O1xuICB9O1xuICBoYXMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgICByZXR1cm4gaGFzT3duKGl0LCBTVEFURSk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBzZXQ6IHNldCxcbiAgZ2V0OiBnZXQsXG4gIGhhczogaGFzLFxuICBlbmZvcmNlOiBlbmZvcmNlLFxuICBnZXR0ZXJGb3I6IGdldHRlckZvclxufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgaGFzT3duID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcy1vd24tcHJvcGVydHknKTtcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIENPTkZJR1VSQUJMRV9GVU5DVElPTl9OQU1FID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLW5hbWUnKS5DT05GSUdVUkFCTEU7XG52YXIgaW5zcGVjdFNvdXJjZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbnNwZWN0LXNvdXJjZScpO1xudmFyIEludGVybmFsU3RhdGVNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaW50ZXJuYWwtc3RhdGUnKTtcblxudmFyIGVuZm9yY2VJbnRlcm5hbFN0YXRlID0gSW50ZXJuYWxTdGF0ZU1vZHVsZS5lbmZvcmNlO1xudmFyIGdldEludGVybmFsU3RhdGUgPSBJbnRlcm5hbFN0YXRlTW9kdWxlLmdldDtcbnZhciAkU3RyaW5nID0gU3RyaW5nO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1kZWZpbmVwcm9wZXJ0eSAtLSBzYWZlXG52YXIgZGVmaW5lUHJvcGVydHkgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG52YXIgc3RyaW5nU2xpY2UgPSB1bmN1cnJ5VGhpcygnJy5zbGljZSk7XG52YXIgcmVwbGFjZSA9IHVuY3VycnlUaGlzKCcnLnJlcGxhY2UpO1xudmFyIGpvaW4gPSB1bmN1cnJ5VGhpcyhbXS5qb2luKTtcblxudmFyIENPTkZJR1VSQUJMRV9MRU5HVEggPSBERVNDUklQVE9SUyAmJiAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gZGVmaW5lUHJvcGVydHkoZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9LCAnbGVuZ3RoJywgeyB2YWx1ZTogOCB9KS5sZW5ndGggIT09IDg7XG59KTtcblxudmFyIFRFTVBMQVRFID0gU3RyaW5nKFN0cmluZykuc3BsaXQoJ1N0cmluZycpO1xuXG52YXIgbWFrZUJ1aWx0SW4gPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh2YWx1ZSwgbmFtZSwgb3B0aW9ucykge1xuICBpZiAoc3RyaW5nU2xpY2UoJFN0cmluZyhuYW1lKSwgMCwgNykgPT09ICdTeW1ib2woJykge1xuICAgIG5hbWUgPSAnWycgKyByZXBsYWNlKCRTdHJpbmcobmFtZSksIC9eU3ltYm9sXFwoKFteKV0qKVxcKS4qJC8sICckMScpICsgJ10nO1xuICB9XG4gIGlmIChvcHRpb25zICYmIG9wdGlvbnMuZ2V0dGVyKSBuYW1lID0gJ2dldCAnICsgbmFtZTtcbiAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5zZXR0ZXIpIG5hbWUgPSAnc2V0ICcgKyBuYW1lO1xuICBpZiAoIWhhc093bih2YWx1ZSwgJ25hbWUnKSB8fCAoQ09ORklHVVJBQkxFX0ZVTkNUSU9OX05BTUUgJiYgdmFsdWUubmFtZSAhPT0gbmFtZSkpIHtcbiAgICBpZiAoREVTQ1JJUFRPUlMpIGRlZmluZVByb3BlcnR5KHZhbHVlLCAnbmFtZScsIHsgdmFsdWU6IG5hbWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9KTtcbiAgICBlbHNlIHZhbHVlLm5hbWUgPSBuYW1lO1xuICB9XG4gIGlmIChDT05GSUdVUkFCTEVfTEVOR1RIICYmIG9wdGlvbnMgJiYgaGFzT3duKG9wdGlvbnMsICdhcml0eScpICYmIHZhbHVlLmxlbmd0aCAhPT0gb3B0aW9ucy5hcml0eSkge1xuICAgIGRlZmluZVByb3BlcnR5KHZhbHVlLCAnbGVuZ3RoJywgeyB2YWx1ZTogb3B0aW9ucy5hcml0eSB9KTtcbiAgfVxuICB0cnkge1xuICAgIGlmIChvcHRpb25zICYmIGhhc093bihvcHRpb25zLCAnY29uc3RydWN0b3InKSAmJiBvcHRpb25zLmNvbnN0cnVjdG9yKSB7XG4gICAgICBpZiAoREVTQ1JJUFRPUlMpIGRlZmluZVByb3BlcnR5KHZhbHVlLCAncHJvdG90eXBlJywgeyB3cml0YWJsZTogZmFsc2UgfSk7XG4gICAgLy8gaW4gVjggfiBDaHJvbWUgNTMsIHByb3RvdHlwZXMgb2Ygc29tZSBtZXRob2RzLCBsaWtlIGBBcnJheS5wcm90b3R5cGUudmFsdWVzYCwgYXJlIG5vbi13cml0YWJsZVxuICAgIH0gZWxzZSBpZiAodmFsdWUucHJvdG90eXBlKSB2YWx1ZS5wcm90b3R5cGUgPSB1bmRlZmluZWQ7XG4gIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGVtcHR5ICovIH1cbiAgdmFyIHN0YXRlID0gZW5mb3JjZUludGVybmFsU3RhdGUodmFsdWUpO1xuICBpZiAoIWhhc093bihzdGF0ZSwgJ3NvdXJjZScpKSB7XG4gICAgc3RhdGUuc291cmNlID0gam9pbihURU1QTEFURSwgdHlwZW9mIG5hbWUgPT0gJ3N0cmluZycgPyBuYW1lIDogJycpO1xuICB9IHJldHVybiB2YWx1ZTtcbn07XG5cbi8vIGFkZCBmYWtlIEZ1bmN0aW9uI3RvU3RyaW5nIGZvciBjb3JyZWN0IHdvcmsgd3JhcHBlZCBtZXRob2RzIC8gY29uc3RydWN0b3JzIHdpdGggbWV0aG9kcyBsaWtlIExvRGFzaCBpc05hdGl2ZVxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWV4dGVuZC1uYXRpdmUgLS0gcmVxdWlyZWRcbkZ1bmN0aW9uLnByb3RvdHlwZS50b1N0cmluZyA9IG1ha2VCdWlsdEluKGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICByZXR1cm4gaXNDYWxsYWJsZSh0aGlzKSAmJiBnZXRJbnRlcm5hbFN0YXRlKHRoaXMpLnNvdXJjZSB8fCBpbnNwZWN0U291cmNlKHRoaXMpO1xufSwgJ3RvU3RyaW5nJyk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcbnZhciBkZWZpbmVQcm9wZXJ0eU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5Jyk7XG52YXIgbWFrZUJ1aWx0SW4gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbWFrZS1idWlsdC1pbicpO1xudmFyIGRlZmluZUdsb2JhbFByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RlZmluZS1nbG9iYWwtcHJvcGVydHknKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoTywga2V5LCB2YWx1ZSwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIG9wdGlvbnMgPSB7fTtcbiAgdmFyIHNpbXBsZSA9IG9wdGlvbnMuZW51bWVyYWJsZTtcbiAgdmFyIG5hbWUgPSBvcHRpb25zLm5hbWUgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMubmFtZSA6IGtleTtcbiAgaWYgKGlzQ2FsbGFibGUodmFsdWUpKSBtYWtlQnVpbHRJbih2YWx1ZSwgbmFtZSwgb3B0aW9ucyk7XG4gIGlmIChvcHRpb25zLmdsb2JhbCkge1xuICAgIGlmIChzaW1wbGUpIE9ba2V5XSA9IHZhbHVlO1xuICAgIGVsc2UgZGVmaW5lR2xvYmFsUHJvcGVydHkoa2V5LCB2YWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICghb3B0aW9ucy51bnNhZmUpIGRlbGV0ZSBPW2tleV07XG4gICAgICBlbHNlIGlmIChPW2tleV0pIHNpbXBsZSA9IHRydWU7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHsgLyogZW1wdHkgKi8gfVxuICAgIGlmIChzaW1wbGUpIE9ba2V5XSA9IHZhbHVlO1xuICAgIGVsc2UgZGVmaW5lUHJvcGVydHlNb2R1bGUuZihPLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgY29uZmlndXJhYmxlOiAhb3B0aW9ucy5ub25Db25maWd1cmFibGUsXG4gICAgICB3cml0YWJsZTogIW9wdGlvbnMubm9uV3JpdGFibGVcbiAgICB9KTtcbiAgfSByZXR1cm4gTztcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGNlaWwgPSBNYXRoLmNlaWw7XG52YXIgZmxvb3IgPSBNYXRoLmZsb29yO1xuXG4vLyBgTWF0aC50cnVuY2AgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW1hdGgudHJ1bmNcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1tYXRoLXRydW5jIC0tIHNhZmVcbm1vZHVsZS5leHBvcnRzID0gTWF0aC50cnVuYyB8fCBmdW5jdGlvbiB0cnVuYyh4KSB7XG4gIHZhciBuID0gK3g7XG4gIHJldHVybiAobiA+IDAgPyBmbG9vciA6IGNlaWwpKG4pO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdHJ1bmMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbWF0aC10cnVuYycpO1xuXG4vLyBgVG9JbnRlZ2VyT3JJbmZpbml0eWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXRvaW50ZWdlcm9yaW5maW5pdHlcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHZhciBudW1iZXIgPSArYXJndW1lbnQ7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmUgLS0gTmFOIGNoZWNrXG4gIHJldHVybiBudW1iZXIgIT09IG51bWJlciB8fCBudW1iZXIgPT09IDAgPyAwIDogdHJ1bmMobnVtYmVyKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHRvSW50ZWdlck9ySW5maW5pdHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW50ZWdlci1vci1pbmZpbml0eScpO1xuXG52YXIgbWF4ID0gTWF0aC5tYXg7XG52YXIgbWluID0gTWF0aC5taW47XG5cbi8vIEhlbHBlciBmb3IgYSBwb3B1bGFyIHJlcGVhdGluZyBjYXNlIG9mIHRoZSBzcGVjOlxuLy8gTGV0IGludGVnZXIgYmUgPyBUb0ludGVnZXIoaW5kZXgpLlxuLy8gSWYgaW50ZWdlciA8IDAsIGxldCByZXN1bHQgYmUgbWF4KChsZW5ndGggKyBpbnRlZ2VyKSwgMCk7IGVsc2UgbGV0IHJlc3VsdCBiZSBtaW4oaW50ZWdlciwgbGVuZ3RoKS5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGluZGV4LCBsZW5ndGgpIHtcbiAgdmFyIGludGVnZXIgPSB0b0ludGVnZXJPckluZmluaXR5KGluZGV4KTtcbiAgcmV0dXJuIGludGVnZXIgPCAwID8gbWF4KGludGVnZXIgKyBsZW5ndGgsIDApIDogbWluKGludGVnZXIsIGxlbmd0aCk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB0b0ludGVnZXJPckluZmluaXR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWludGVnZXItb3ItaW5maW5pdHknKTtcblxudmFyIG1pbiA9IE1hdGgubWluO1xuXG4vLyBgVG9MZW5ndGhgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy10b2xlbmd0aFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgdmFyIGxlbiA9IHRvSW50ZWdlck9ySW5maW5pdHkoYXJndW1lbnQpO1xuICByZXR1cm4gbGVuID4gMCA/IG1pbihsZW4sIDB4MUZGRkZGRkZGRkZGRkYpIDogMDsgLy8gMiAqKiA1MyAtIDEgPT0gOTAwNzE5OTI1NDc0MDk5MVxufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tbGVuZ3RoJyk7XG5cbi8vIGBMZW5ndGhPZkFycmF5TGlrZWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWxlbmd0aG9mYXJyYXlsaWtlXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIHRvTGVuZ3RoKG9iai5sZW5ndGgpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdG9JbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWluZGV4ZWQtb2JqZWN0Jyk7XG52YXIgdG9BYnNvbHV0ZUluZGV4ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWFic29sdXRlLWluZGV4Jyk7XG52YXIgbGVuZ3RoT2ZBcnJheUxpa2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbGVuZ3RoLW9mLWFycmF5LWxpa2UnKTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS57IGluZGV4T2YsIGluY2x1ZGVzIH1gIG1ldGhvZHMgaW1wbGVtZW50YXRpb25cbnZhciBjcmVhdGVNZXRob2QgPSBmdW5jdGlvbiAoSVNfSU5DTFVERVMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgkdGhpcywgZWwsIGZyb21JbmRleCkge1xuICAgIHZhciBPID0gdG9JbmRleGVkT2JqZWN0KCR0aGlzKTtcbiAgICB2YXIgbGVuZ3RoID0gbGVuZ3RoT2ZBcnJheUxpa2UoTyk7XG4gICAgaWYgKGxlbmd0aCA9PT0gMCkgcmV0dXJuICFJU19JTkNMVURFUyAmJiAtMTtcbiAgICB2YXIgaW5kZXggPSB0b0Fic29sdXRlSW5kZXgoZnJvbUluZGV4LCBsZW5ndGgpO1xuICAgIHZhciB2YWx1ZTtcbiAgICAvLyBBcnJheSNpbmNsdWRlcyB1c2VzIFNhbWVWYWx1ZVplcm8gZXF1YWxpdHkgYWxnb3JpdGhtXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZSAtLSBOYU4gY2hlY2tcbiAgICBpZiAoSVNfSU5DTFVERVMgJiYgZWwgIT09IGVsKSB3aGlsZSAobGVuZ3RoID4gaW5kZXgpIHtcbiAgICAgIHZhbHVlID0gT1tpbmRleCsrXTtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmUgLS0gTmFOIGNoZWNrXG4gICAgICBpZiAodmFsdWUgIT09IHZhbHVlKSByZXR1cm4gdHJ1ZTtcbiAgICAvLyBBcnJheSNpbmRleE9mIGlnbm9yZXMgaG9sZXMsIEFycmF5I2luY2x1ZGVzIC0gbm90XG4gICAgfSBlbHNlIGZvciAoO2xlbmd0aCA+IGluZGV4OyBpbmRleCsrKSB7XG4gICAgICBpZiAoKElTX0lOQ0xVREVTIHx8IGluZGV4IGluIE8pICYmIE9baW5kZXhdID09PSBlbCkgcmV0dXJuIElTX0lOQ0xVREVTIHx8IGluZGV4IHx8IDA7XG4gICAgfSByZXR1cm4gIUlTX0lOQ0xVREVTICYmIC0xO1xuICB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIC8vIGBBcnJheS5wcm90b3R5cGUuaW5jbHVkZXNgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5pbmNsdWRlc1xuICBpbmNsdWRlczogY3JlYXRlTWV0aG9kKHRydWUpLFxuICAvLyBgQXJyYXkucHJvdG90eXBlLmluZGV4T2ZgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5pbmRleG9mXG4gIGluZGV4T2Y6IGNyZWF0ZU1ldGhvZChmYWxzZSlcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIGhhc093biA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMtb3duLXByb3BlcnR5Jyk7XG52YXIgdG9JbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWluZGV4ZWQtb2JqZWN0Jyk7XG52YXIgaW5kZXhPZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1pbmNsdWRlcycpLmluZGV4T2Y7XG52YXIgaGlkZGVuS2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oaWRkZW4ta2V5cycpO1xuXG52YXIgcHVzaCA9IHVuY3VycnlUaGlzKFtdLnB1c2gpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmplY3QsIG5hbWVzKSB7XG4gIHZhciBPID0gdG9JbmRleGVkT2JqZWN0KG9iamVjdCk7XG4gIHZhciBpID0gMDtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICB2YXIga2V5O1xuICBmb3IgKGtleSBpbiBPKSAhaGFzT3duKGhpZGRlbktleXMsIGtleSkgJiYgaGFzT3duKE8sIGtleSkgJiYgcHVzaChyZXN1bHQsIGtleSk7XG4gIC8vIERvbid0IGVudW0gYnVnICYgaGlkZGVuIGtleXNcbiAgd2hpbGUgKG5hbWVzLmxlbmd0aCA+IGkpIGlmIChoYXNPd24oTywga2V5ID0gbmFtZXNbaSsrXSkpIHtcbiAgICB+aW5kZXhPZihyZXN1bHQsIGtleSkgfHwgcHVzaChyZXN1bHQsIGtleSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xuLy8gSUU4LSBkb24ndCBlbnVtIGJ1ZyBrZXlzXG5tb2R1bGUuZXhwb3J0cyA9IFtcbiAgJ2NvbnN0cnVjdG9yJyxcbiAgJ2hhc093blByb3BlcnR5JyxcbiAgJ2lzUHJvdG90eXBlT2YnLFxuICAncHJvcGVydHlJc0VudW1lcmFibGUnLFxuICAndG9Mb2NhbGVTdHJpbmcnLFxuICAndG9TdHJpbmcnLFxuICAndmFsdWVPZidcbl07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGludGVybmFsT2JqZWN0S2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3Qta2V5cy1pbnRlcm5hbCcpO1xudmFyIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2VudW0tYnVnLWtleXMnKTtcblxudmFyIGhpZGRlbktleXMgPSBlbnVtQnVnS2V5cy5jb25jYXQoJ2xlbmd0aCcsICdwcm90b3R5cGUnKTtcblxuLy8gYE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb2JqZWN0LmdldG93bnByb3BlcnR5bmFtZXNcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZ2V0b3ducHJvcGVydHluYW1lcyAtLSBzYWZlXG5leHBvcnRzLmYgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyB8fCBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKE8pIHtcbiAgcmV0dXJuIGludGVybmFsT2JqZWN0S2V5cyhPLCBoaWRkZW5LZXlzKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1nZXRvd25wcm9wZXJ0eXN5bWJvbHMgLS0gc2FmZVxuZXhwb3J0cy5mID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2V0QnVpbHRJbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtYnVpbHQtaW4nKTtcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcbnZhciBnZXRPd25Qcm9wZXJ0eU5hbWVzTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LW5hbWVzJyk7XG52YXIgZ2V0T3duUHJvcGVydHlTeW1ib2xzTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LXN5bWJvbHMnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcblxudmFyIGNvbmNhdCA9IHVuY3VycnlUaGlzKFtdLmNvbmNhdCk7XG5cbi8vIGFsbCBvYmplY3Qga2V5cywgaW5jbHVkZXMgbm9uLWVudW1lcmFibGUgYW5kIHN5bWJvbHNcbm1vZHVsZS5leHBvcnRzID0gZ2V0QnVpbHRJbignUmVmbGVjdCcsICdvd25LZXlzJykgfHwgZnVuY3Rpb24gb3duS2V5cyhpdCkge1xuICB2YXIga2V5cyA9IGdldE93blByb3BlcnR5TmFtZXNNb2R1bGUuZihhbk9iamVjdChpdCkpO1xuICB2YXIgZ2V0T3duUHJvcGVydHlTeW1ib2xzID0gZ2V0T3duUHJvcGVydHlTeW1ib2xzTW9kdWxlLmY7XG4gIHJldHVybiBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPyBjb25jYXQoa2V5cywgZ2V0T3duUHJvcGVydHlTeW1ib2xzKGl0KSkgOiBrZXlzO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgaGFzT3duID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcy1vd24tcHJvcGVydHknKTtcbnZhciBvd25LZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL293bi1rZXlzJyk7XG52YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3InKTtcbnZhciBkZWZpbmVQcm9wZXJ0eU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHRhcmdldCwgc291cmNlLCBleGNlcHRpb25zKSB7XG4gIHZhciBrZXlzID0gb3duS2V5cyhzb3VyY2UpO1xuICB2YXIgZGVmaW5lUHJvcGVydHkgPSBkZWZpbmVQcm9wZXJ0eU1vZHVsZS5mO1xuICB2YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yTW9kdWxlLmY7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuICAgIGlmICghaGFzT3duKHRhcmdldCwga2V5KSAmJiAhKGV4Y2VwdGlvbnMgJiYgaGFzT3duKGV4Y2VwdGlvbnMsIGtleSkpKSB7XG4gICAgICBkZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7XG4gICAgfVxuICB9XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcblxudmFyIHJlcGxhY2VtZW50ID0gLyN8XFwucHJvdG90eXBlXFwuLztcblxudmFyIGlzRm9yY2VkID0gZnVuY3Rpb24gKGZlYXR1cmUsIGRldGVjdGlvbikge1xuICB2YXIgdmFsdWUgPSBkYXRhW25vcm1hbGl6ZShmZWF0dXJlKV07XG4gIHJldHVybiB2YWx1ZSA9PT0gUE9MWUZJTEwgPyB0cnVlXG4gICAgOiB2YWx1ZSA9PT0gTkFUSVZFID8gZmFsc2VcbiAgICA6IGlzQ2FsbGFibGUoZGV0ZWN0aW9uKSA/IGZhaWxzKGRldGVjdGlvbilcbiAgICA6ICEhZGV0ZWN0aW9uO1xufTtcblxudmFyIG5vcm1hbGl6ZSA9IGlzRm9yY2VkLm5vcm1hbGl6ZSA9IGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgcmV0dXJuIFN0cmluZyhzdHJpbmcpLnJlcGxhY2UocmVwbGFjZW1lbnQsICcuJykudG9Mb3dlckNhc2UoKTtcbn07XG5cbnZhciBkYXRhID0gaXNGb3JjZWQuZGF0YSA9IHt9O1xudmFyIE5BVElWRSA9IGlzRm9yY2VkLk5BVElWRSA9ICdOJztcbnZhciBQT0xZRklMTCA9IGlzRm9yY2VkLlBPTFlGSUxMID0gJ1AnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzRm9yY2VkO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWxUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbC10aGlzJyk7XG52YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3InKS5mO1xudmFyIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHknKTtcbnZhciBkZWZpbmVCdWlsdEluID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RlZmluZS1idWlsdC1pbicpO1xudmFyIGRlZmluZUdsb2JhbFByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RlZmluZS1nbG9iYWwtcHJvcGVydHknKTtcbnZhciBjb3B5Q29uc3RydWN0b3JQcm9wZXJ0aWVzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NvcHktY29uc3RydWN0b3ItcHJvcGVydGllcycpO1xudmFyIGlzRm9yY2VkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWZvcmNlZCcpO1xuXG4vKlxuICBvcHRpb25zLnRhcmdldCAgICAgICAgIC0gbmFtZSBvZiB0aGUgdGFyZ2V0IG9iamVjdFxuICBvcHRpb25zLmdsb2JhbCAgICAgICAgIC0gdGFyZ2V0IGlzIHRoZSBnbG9iYWwgb2JqZWN0XG4gIG9wdGlvbnMuc3RhdCAgICAgICAgICAgLSBleHBvcnQgYXMgc3RhdGljIG1ldGhvZHMgb2YgdGFyZ2V0XG4gIG9wdGlvbnMucHJvdG8gICAgICAgICAgLSBleHBvcnQgYXMgcHJvdG90eXBlIG1ldGhvZHMgb2YgdGFyZ2V0XG4gIG9wdGlvbnMucmVhbCAgICAgICAgICAgLSByZWFsIHByb3RvdHlwZSBtZXRob2QgZm9yIHRoZSBgcHVyZWAgdmVyc2lvblxuICBvcHRpb25zLmZvcmNlZCAgICAgICAgIC0gZXhwb3J0IGV2ZW4gaWYgdGhlIG5hdGl2ZSBmZWF0dXJlIGlzIGF2YWlsYWJsZVxuICBvcHRpb25zLmJpbmQgICAgICAgICAgIC0gYmluZCBtZXRob2RzIHRvIHRoZSB0YXJnZXQsIHJlcXVpcmVkIGZvciB0aGUgYHB1cmVgIHZlcnNpb25cbiAgb3B0aW9ucy53cmFwICAgICAgICAgICAtIHdyYXAgY29uc3RydWN0b3JzIHRvIHByZXZlbnRpbmcgZ2xvYmFsIHBvbGx1dGlvbiwgcmVxdWlyZWQgZm9yIHRoZSBgcHVyZWAgdmVyc2lvblxuICBvcHRpb25zLnVuc2FmZSAgICAgICAgIC0gdXNlIHRoZSBzaW1wbGUgYXNzaWdubWVudCBvZiBwcm9wZXJ0eSBpbnN0ZWFkIG9mIGRlbGV0ZSArIGRlZmluZVByb3BlcnR5XG4gIG9wdGlvbnMuc2hhbSAgICAgICAgICAgLSBhZGQgYSBmbGFnIHRvIG5vdCBjb21wbGV0ZWx5IGZ1bGwgcG9seWZpbGxzXG4gIG9wdGlvbnMuZW51bWVyYWJsZSAgICAgLSBleHBvcnQgYXMgZW51bWVyYWJsZSBwcm9wZXJ0eVxuICBvcHRpb25zLmRvbnRDYWxsR2V0U2V0IC0gcHJldmVudCBjYWxsaW5nIGEgZ2V0dGVyIG9uIHRhcmdldFxuICBvcHRpb25zLm5hbWUgICAgICAgICAgIC0gdGhlIC5uYW1lIG9mIHRoZSBmdW5jdGlvbiBpZiBpdCBkb2VzIG5vdCBtYXRjaCB0aGUga2V5XG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob3B0aW9ucywgc291cmNlKSB7XG4gIHZhciBUQVJHRVQgPSBvcHRpb25zLnRhcmdldDtcbiAgdmFyIEdMT0JBTCA9IG9wdGlvbnMuZ2xvYmFsO1xuICB2YXIgU1RBVElDID0gb3B0aW9ucy5zdGF0O1xuICB2YXIgRk9SQ0VELCB0YXJnZXQsIGtleSwgdGFyZ2V0UHJvcGVydHksIHNvdXJjZVByb3BlcnR5LCBkZXNjcmlwdG9yO1xuICBpZiAoR0xPQkFMKSB7XG4gICAgdGFyZ2V0ID0gZ2xvYmFsVGhpcztcbiAgfSBlbHNlIGlmIChTVEFUSUMpIHtcbiAgICB0YXJnZXQgPSBnbG9iYWxUaGlzW1RBUkdFVF0gfHwgZGVmaW5lR2xvYmFsUHJvcGVydHkoVEFSR0VULCB7fSk7XG4gIH0gZWxzZSB7XG4gICAgdGFyZ2V0ID0gZ2xvYmFsVGhpc1tUQVJHRVRdICYmIGdsb2JhbFRoaXNbVEFSR0VUXS5wcm90b3R5cGU7XG4gIH1cbiAgaWYgKHRhcmdldCkgZm9yIChrZXkgaW4gc291cmNlKSB7XG4gICAgc291cmNlUHJvcGVydHkgPSBzb3VyY2Vba2V5XTtcbiAgICBpZiAob3B0aW9ucy5kb250Q2FsbEdldFNldCkge1xuICAgICAgZGVzY3JpcHRvciA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSk7XG4gICAgICB0YXJnZXRQcm9wZXJ0eSA9IGRlc2NyaXB0b3IgJiYgZGVzY3JpcHRvci52YWx1ZTtcbiAgICB9IGVsc2UgdGFyZ2V0UHJvcGVydHkgPSB0YXJnZXRba2V5XTtcbiAgICBGT1JDRUQgPSBpc0ZvcmNlZChHTE9CQUwgPyBrZXkgOiBUQVJHRVQgKyAoU1RBVElDID8gJy4nIDogJyMnKSArIGtleSwgb3B0aW9ucy5mb3JjZWQpO1xuICAgIC8vIGNvbnRhaW5lZCBpbiB0YXJnZXRcbiAgICBpZiAoIUZPUkNFRCAmJiB0YXJnZXRQcm9wZXJ0eSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBpZiAodHlwZW9mIHNvdXJjZVByb3BlcnR5ID09IHR5cGVvZiB0YXJnZXRQcm9wZXJ0eSkgY29udGludWU7XG4gICAgICBjb3B5Q29uc3RydWN0b3JQcm9wZXJ0aWVzKHNvdXJjZVByb3BlcnR5LCB0YXJnZXRQcm9wZXJ0eSk7XG4gICAgfVxuICAgIC8vIGFkZCBhIGZsYWcgdG8gbm90IGNvbXBsZXRlbHkgZnVsbCBwb2x5ZmlsbHNcbiAgICBpZiAob3B0aW9ucy5zaGFtIHx8ICh0YXJnZXRQcm9wZXJ0eSAmJiB0YXJnZXRQcm9wZXJ0eS5zaGFtKSkge1xuICAgICAgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5KHNvdXJjZVByb3BlcnR5LCAnc2hhbScsIHRydWUpO1xuICAgIH1cbiAgICBkZWZpbmVCdWlsdEluKHRhcmdldCwga2V5LCBzb3VyY2VQcm9wZXJ0eSwgb3B0aW9ucyk7XG4gIH1cbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGlzUHJvdG90eXBlT2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWlzLXByb3RvdHlwZS1vZicpO1xuXG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIFByb3RvdHlwZSkge1xuICBpZiAoaXNQcm90b3R5cGVPZihQcm90b3R5cGUsIGl0KSkgcmV0dXJuIGl0O1xuICB0aHJvdyBuZXcgJFR5cGVFcnJvcignSW5jb3JyZWN0IGludm9jYXRpb24nKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIGFDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hLWNhbGxhYmxlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iamVjdCwga2V5LCBtZXRob2QpIHtcbiAgdHJ5IHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5ZGVzY3JpcHRvciAtLSBzYWZlXG4gICAgcmV0dXJuIHVuY3VycnlUaGlzKGFDYWxsYWJsZShPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwga2V5KVttZXRob2RdKSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGVtcHR5ICovIH1cbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICByZXR1cm4gaXNPYmplY3QoYXJndW1lbnQpIHx8IGFyZ3VtZW50ID09PSBudWxsO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgaXNQb3NzaWJsZVByb3RvdHlwZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1wb3NzaWJsZS1wcm90b3R5cGUnKTtcblxudmFyICRTdHJpbmcgPSBTdHJpbmc7XG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgaWYgKGlzUG9zc2libGVQcm90b3R5cGUoYXJndW1lbnQpKSByZXR1cm4gYXJndW1lbnQ7XG4gIHRocm93IG5ldyAkVHlwZUVycm9yKFwiQ2FuJ3Qgc2V0IFwiICsgJFN0cmluZyhhcmd1bWVudCkgKyAnIGFzIGEgcHJvdG90eXBlJyk7XG59O1xuIiwgIid1c2Ugc3RyaWN0Jztcbi8qIGVzbGludC1kaXNhYmxlIG5vLXByb3RvIC0tIHNhZmUgKi9cbnZhciB1bmN1cnJ5VGhpc0FjY2Vzc29yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcy1hY2Nlc3NvcicpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xudmFyIHJlcXVpcmVPYmplY3RDb2VyY2libGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlJyk7XG52YXIgYVBvc3NpYmxlUHJvdG90eXBlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2EtcG9zc2libGUtcHJvdG90eXBlJyk7XG5cbi8vIGBPYmplY3Quc2V0UHJvdG90eXBlT2ZgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vYmplY3Quc2V0cHJvdG90eXBlb2Zcbi8vIFdvcmtzIHdpdGggX19wcm90b19fIG9ubHkuIE9sZCB2OCBjYW4ndCB3b3JrIHdpdGggbnVsbCBwcm90byBvYmplY3RzLlxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1zZXRwcm90b3R5cGVvZiAtLSBzYWZlXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCAoJ19fcHJvdG9fXycgaW4ge30gPyBmdW5jdGlvbiAoKSB7XG4gIHZhciBDT1JSRUNUX1NFVFRFUiA9IGZhbHNlO1xuICB2YXIgdGVzdCA9IHt9O1xuICB2YXIgc2V0dGVyO1xuICB0cnkge1xuICAgIHNldHRlciA9IHVuY3VycnlUaGlzQWNjZXNzb3IoT2JqZWN0LnByb3RvdHlwZSwgJ19fcHJvdG9fXycsICdzZXQnKTtcbiAgICBzZXR0ZXIodGVzdCwgW10pO1xuICAgIENPUlJFQ1RfU0VUVEVSID0gdGVzdCBpbnN0YW5jZW9mIEFycmF5O1xuICB9IGNhdGNoIChlcnJvcikgeyAvKiBlbXB0eSAqLyB9XG4gIHJldHVybiBmdW5jdGlvbiBzZXRQcm90b3R5cGVPZihPLCBwcm90bykge1xuICAgIHJlcXVpcmVPYmplY3RDb2VyY2libGUoTyk7XG4gICAgYVBvc3NpYmxlUHJvdG90eXBlKHByb3RvKTtcbiAgICBpZiAoIWlzT2JqZWN0KE8pKSByZXR1cm4gTztcbiAgICBpZiAoQ09SUkVDVF9TRVRURVIpIHNldHRlcihPLCBwcm90byk7XG4gICAgZWxzZSBPLl9fcHJvdG9fXyA9IHByb3RvO1xuICAgIHJldHVybiBPO1xuICB9O1xufSgpIDogdW5kZWZpbmVkKTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xudmFyIHNldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1zZXQtcHJvdG90eXBlLW9mJyk7XG5cbi8vIG1ha2VzIHN1YmNsYXNzaW5nIHdvcmsgY29ycmVjdCBmb3Igd3JhcHBlZCBidWlsdC1pbnNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCR0aGlzLCBkdW1teSwgV3JhcHBlcikge1xuICB2YXIgTmV3VGFyZ2V0LCBOZXdUYXJnZXRQcm90b3R5cGU7XG4gIGlmIChcbiAgICAvLyBpdCBjYW4gd29yayBvbmx5IHdpdGggbmF0aXZlIGBzZXRQcm90b3R5cGVPZmBcbiAgICBzZXRQcm90b3R5cGVPZiAmJlxuICAgIC8vIHdlIGhhdmVuJ3QgY29tcGxldGVseSBjb3JyZWN0IHByZS1FUzYgd2F5IGZvciBnZXR0aW5nIGBuZXcudGFyZ2V0YCwgc28gdXNlIHRoaXNcbiAgICBpc0NhbGxhYmxlKE5ld1RhcmdldCA9IGR1bW15LmNvbnN0cnVjdG9yKSAmJlxuICAgIE5ld1RhcmdldCAhPT0gV3JhcHBlciAmJlxuICAgIGlzT2JqZWN0KE5ld1RhcmdldFByb3RvdHlwZSA9IE5ld1RhcmdldC5wcm90b3R5cGUpICYmXG4gICAgTmV3VGFyZ2V0UHJvdG90eXBlICE9PSBXcmFwcGVyLnByb3RvdHlwZVxuICApIHNldFByb3RvdHlwZU9mKCR0aGlzLCBOZXdUYXJnZXRQcm90b3R5cGUpO1xuICByZXR1cm4gJHRoaXM7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcblxudmFyIFRPX1NUUklOR19UQUcgPSB3ZWxsS25vd25TeW1ib2woJ3RvU3RyaW5nVGFnJyk7XG52YXIgdGVzdCA9IHt9O1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHVuaWNvcm4vbm8taW1tZWRpYXRlLW11dGF0aW9uIC0tIEVTMyBzeW50YXggbGltaXRhdGlvblxudGVzdFtUT19TVFJJTkdfVEFHXSA9ICd6JztcblxubW9kdWxlLmV4cG9ydHMgPSBTdHJpbmcodGVzdCkgPT09ICdbb2JqZWN0IHpdJztcbiIsICIndXNlIHN0cmljdCc7XG52YXIgVE9fU1RSSU5HX1RBR19TVVBQT1JUID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXN0cmluZy10YWctc3VwcG9ydCcpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcbnZhciBjbGFzc29mUmF3ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NsYXNzb2YtcmF3Jyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG5cbnZhciBUT19TVFJJTkdfVEFHID0gd2VsbEtub3duU3ltYm9sKCd0b1N0cmluZ1RhZycpO1xudmFyICRPYmplY3QgPSBPYmplY3Q7XG5cbi8vIEVTMyB3cm9uZyBoZXJlXG52YXIgQ09SUkVDVF9BUkdVTUVOVFMgPSBjbGFzc29mUmF3KGZ1bmN0aW9uICgpIHsgcmV0dXJuIGFyZ3VtZW50czsgfSgpKSA9PT0gJ0FyZ3VtZW50cyc7XG5cbi8vIGZhbGxiYWNrIGZvciBJRTExIFNjcmlwdCBBY2Nlc3MgRGVuaWVkIGVycm9yXG52YXIgdHJ5R2V0ID0gZnVuY3Rpb24gKGl0LCBrZXkpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gaXRba2V5XTtcbiAgfSBjYXRjaCAoZXJyb3IpIHsgLyogZW1wdHkgKi8gfVxufTtcblxuLy8gZ2V0dGluZyB0YWcgZnJvbSBFUzYrIGBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nYFxubW9kdWxlLmV4cG9ydHMgPSBUT19TVFJJTkdfVEFHX1NVUFBPUlQgPyBjbGFzc29mUmF3IDogZnVuY3Rpb24gKGl0KSB7XG4gIHZhciBPLCB0YWcsIHJlc3VsdDtcbiAgcmV0dXJuIGl0ID09PSB1bmRlZmluZWQgPyAnVW5kZWZpbmVkJyA6IGl0ID09PSBudWxsID8gJ051bGwnXG4gICAgLy8gQEB0b1N0cmluZ1RhZyBjYXNlXG4gICAgOiB0eXBlb2YgKHRhZyA9IHRyeUdldChPID0gJE9iamVjdChpdCksIFRPX1NUUklOR19UQUcpKSA9PSAnc3RyaW5nJyA/IHRhZ1xuICAgIC8vIGJ1aWx0aW5UYWcgY2FzZVxuICAgIDogQ09SUkVDVF9BUkdVTUVOVFMgPyBjbGFzc29mUmF3KE8pXG4gICAgLy8gRVMzIGFyZ3VtZW50cyBmYWxsYmFja1xuICAgIDogKHJlc3VsdCA9IGNsYXNzb2ZSYXcoTykpID09PSAnT2JqZWN0JyAmJiBpc0NhbGxhYmxlKE8uY2FsbGVlKSA/ICdBcmd1bWVudHMnIDogcmVzdWx0O1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jbGFzc29mJyk7XG5cbnZhciAkU3RyaW5nID0gU3RyaW5nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICBpZiAoY2xhc3NvZihhcmd1bWVudCkgPT09ICdTeW1ib2wnKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY29udmVydCBhIFN5bWJvbCB2YWx1ZSB0byBhIHN0cmluZycpO1xuICByZXR1cm4gJFN0cmluZyhhcmd1bWVudCk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB0b1N0cmluZyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1zdHJpbmcnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQsICRkZWZhdWx0KSB7XG4gIHJldHVybiBhcmd1bWVudCA9PT0gdW5kZWZpbmVkID8gYXJndW1lbnRzLmxlbmd0aCA8IDIgPyAnJyA6ICRkZWZhdWx0IDogdG9TdHJpbmcoYXJndW1lbnQpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgSW5kZXhTaXplRXJyb3I6IHsgczogJ0lOREVYX1NJWkVfRVJSJywgYzogMSwgbTogMSB9LFxuICBET01TdHJpbmdTaXplRXJyb3I6IHsgczogJ0RPTVNUUklOR19TSVpFX0VSUicsIGM6IDIsIG06IDAgfSxcbiAgSGllcmFyY2h5UmVxdWVzdEVycm9yOiB7IHM6ICdISUVSQVJDSFlfUkVRVUVTVF9FUlInLCBjOiAzLCBtOiAxIH0sXG4gIFdyb25nRG9jdW1lbnRFcnJvcjogeyBzOiAnV1JPTkdfRE9DVU1FTlRfRVJSJywgYzogNCwgbTogMSB9LFxuICBJbnZhbGlkQ2hhcmFjdGVyRXJyb3I6IHsgczogJ0lOVkFMSURfQ0hBUkFDVEVSX0VSUicsIGM6IDUsIG06IDEgfSxcbiAgTm9EYXRhQWxsb3dlZEVycm9yOiB7IHM6ICdOT19EQVRBX0FMTE9XRURfRVJSJywgYzogNiwgbTogMCB9LFxuICBOb01vZGlmaWNhdGlvbkFsbG93ZWRFcnJvcjogeyBzOiAnTk9fTU9ESUZJQ0FUSU9OX0FMTE9XRURfRVJSJywgYzogNywgbTogMSB9LFxuICBOb3RGb3VuZEVycm9yOiB7IHM6ICdOT1RfRk9VTkRfRVJSJywgYzogOCwgbTogMSB9LFxuICBOb3RTdXBwb3J0ZWRFcnJvcjogeyBzOiAnTk9UX1NVUFBPUlRFRF9FUlInLCBjOiA5LCBtOiAxIH0sXG4gIEluVXNlQXR0cmlidXRlRXJyb3I6IHsgczogJ0lOVVNFX0FUVFJJQlVURV9FUlInLCBjOiAxMCwgbTogMSB9LFxuICBJbnZhbGlkU3RhdGVFcnJvcjogeyBzOiAnSU5WQUxJRF9TVEFURV9FUlInLCBjOiAxMSwgbTogMSB9LFxuICBTeW50YXhFcnJvcjogeyBzOiAnU1lOVEFYX0VSUicsIGM6IDEyLCBtOiAxIH0sXG4gIEludmFsaWRNb2RpZmljYXRpb25FcnJvcjogeyBzOiAnSU5WQUxJRF9NT0RJRklDQVRJT05fRVJSJywgYzogMTMsIG06IDEgfSxcbiAgTmFtZXNwYWNlRXJyb3I6IHsgczogJ05BTUVTUEFDRV9FUlInLCBjOiAxNCwgbTogMSB9LFxuICBJbnZhbGlkQWNjZXNzRXJyb3I6IHsgczogJ0lOVkFMSURfQUNDRVNTX0VSUicsIGM6IDE1LCBtOiAxIH0sXG4gIFZhbGlkYXRpb25FcnJvcjogeyBzOiAnVkFMSURBVElPTl9FUlInLCBjOiAxNiwgbTogMCB9LFxuICBUeXBlTWlzbWF0Y2hFcnJvcjogeyBzOiAnVFlQRV9NSVNNQVRDSF9FUlInLCBjOiAxNywgbTogMSB9LFxuICBTZWN1cml0eUVycm9yOiB7IHM6ICdTRUNVUklUWV9FUlInLCBjOiAxOCwgbTogMSB9LFxuICBOZXR3b3JrRXJyb3I6IHsgczogJ05FVFdPUktfRVJSJywgYzogMTksIG06IDEgfSxcbiAgQWJvcnRFcnJvcjogeyBzOiAnQUJPUlRfRVJSJywgYzogMjAsIG06IDEgfSxcbiAgVVJMTWlzbWF0Y2hFcnJvcjogeyBzOiAnVVJMX01JU01BVENIX0VSUicsIGM6IDIxLCBtOiAxIH0sXG4gIFF1b3RhRXhjZWVkZWRFcnJvcjogeyBzOiAnUVVPVEFfRVhDRUVERURfRVJSJywgYzogMjIsIG06IDEgfSxcbiAgVGltZW91dEVycm9yOiB7IHM6ICdUSU1FT1VUX0VSUicsIGM6IDIzLCBtOiAxIH0sXG4gIEludmFsaWROb2RlVHlwZUVycm9yOiB7IHM6ICdJTlZBTElEX05PREVfVFlQRV9FUlInLCBjOiAyNCwgbTogMSB9LFxuICBEYXRhQ2xvbmVFcnJvcjogeyBzOiAnREFUQV9DTE9ORV9FUlInLCBjOiAyNSwgbTogMSB9XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcblxudmFyICRFcnJvciA9IEVycm9yO1xudmFyIHJlcGxhY2UgPSB1bmN1cnJ5VGhpcygnJy5yZXBsYWNlKTtcblxudmFyIFRFU1QgPSAoZnVuY3Rpb24gKGFyZykgeyByZXR1cm4gU3RyaW5nKG5ldyAkRXJyb3IoYXJnKS5zdGFjayk7IH0pKCd6eGNhc2QnKTtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWRvcy9uby12dWxuZXJhYmxlIC0tIHNhZmVcbnZhciBWOF9PUl9DSEFLUkFfU1RBQ0tfRU5UUlkgPSAvXFxuXFxzKmF0IFteOl0qOlteXFxuXSovO1xudmFyIElTX1Y4X09SX0NIQUtSQV9TVEFDSyA9IFY4X09SX0NIQUtSQV9TVEFDS19FTlRSWS50ZXN0KFRFU1QpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChzdGFjaywgZHJvcEVudHJpZXMpIHtcbiAgaWYgKElTX1Y4X09SX0NIQUtSQV9TVEFDSyAmJiB0eXBlb2Ygc3RhY2sgPT0gJ3N0cmluZycgJiYgISRFcnJvci5wcmVwYXJlU3RhY2tUcmFjZSkge1xuICAgIHdoaWxlIChkcm9wRW50cmllcy0tKSBzdGFjayA9IHJlcGxhY2Uoc3RhY2ssIFY4X09SX0NIQUtSQV9TVEFDS19FTlRSWSwgJycpO1xuICB9IHJldHVybiBzdGFjaztcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgZ2xvYmFsVGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwtdGhpcycpO1xudmFyIGdldEJ1aWx0SW4gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LWJ1aWx0LWluJyk7XG52YXIgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eS1kZXNjcmlwdG9yJyk7XG52YXIgZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpLmY7XG52YXIgaGFzT3duID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcy1vd24tcHJvcGVydHknKTtcbnZhciBhbkluc3RhbmNlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLWluc3RhbmNlJyk7XG52YXIgaW5oZXJpdElmUmVxdWlyZWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaW5oZXJpdC1pZi1yZXF1aXJlZCcpO1xudmFyIG5vcm1hbGl6ZVN0cmluZ0FyZ3VtZW50ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL25vcm1hbGl6ZS1zdHJpbmctYXJndW1lbnQnKTtcbnZhciBET01FeGNlcHRpb25Db25zdGFudHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZG9tLWV4Y2VwdGlvbi1jb25zdGFudHMnKTtcbnZhciBjbGVhckVycm9yU3RhY2sgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXJyb3Itc3RhY2stY2xlYXInKTtcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIElTX1BVUkUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtcHVyZScpO1xuXG52YXIgRE9NX0VYQ0VQVElPTiA9ICdET01FeGNlcHRpb24nO1xudmFyIEVycm9yID0gZ2V0QnVpbHRJbignRXJyb3InKTtcbnZhciBOYXRpdmVET01FeGNlcHRpb24gPSBnZXRCdWlsdEluKERPTV9FWENFUFRJT04pO1xuXG52YXIgJERPTUV4Y2VwdGlvbiA9IGZ1bmN0aW9uIERPTUV4Y2VwdGlvbigpIHtcbiAgYW5JbnN0YW5jZSh0aGlzLCBET01FeGNlcHRpb25Qcm90b3R5cGUpO1xuICB2YXIgYXJndW1lbnRzTGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgdmFyIG1lc3NhZ2UgPSBub3JtYWxpemVTdHJpbmdBcmd1bWVudChhcmd1bWVudHNMZW5ndGggPCAxID8gdW5kZWZpbmVkIDogYXJndW1lbnRzWzBdKTtcbiAgdmFyIG5hbWUgPSBub3JtYWxpemVTdHJpbmdBcmd1bWVudChhcmd1bWVudHNMZW5ndGggPCAyID8gdW5kZWZpbmVkIDogYXJndW1lbnRzWzFdLCAnRXJyb3InKTtcbiAgdmFyIHRoYXQgPSBuZXcgTmF0aXZlRE9NRXhjZXB0aW9uKG1lc3NhZ2UsIG5hbWUpO1xuICB2YXIgZXJyb3IgPSBuZXcgRXJyb3IobWVzc2FnZSk7XG4gIGVycm9yLm5hbWUgPSBET01fRVhDRVBUSU9OO1xuICBkZWZpbmVQcm9wZXJ0eSh0aGF0LCAnc3RhY2snLCBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IoMSwgY2xlYXJFcnJvclN0YWNrKGVycm9yLnN0YWNrLCAxKSkpO1xuICBpbmhlcml0SWZSZXF1aXJlZCh0aGF0LCB0aGlzLCAkRE9NRXhjZXB0aW9uKTtcbiAgcmV0dXJuIHRoYXQ7XG59O1xuXG52YXIgRE9NRXhjZXB0aW9uUHJvdG90eXBlID0gJERPTUV4Y2VwdGlvbi5wcm90b3R5cGUgPSBOYXRpdmVET01FeGNlcHRpb24ucHJvdG90eXBlO1xuXG52YXIgRVJST1JfSEFTX1NUQUNLID0gJ3N0YWNrJyBpbiBuZXcgRXJyb3IoRE9NX0VYQ0VQVElPTik7XG52YXIgRE9NX0VYQ0VQVElPTl9IQVNfU1RBQ0sgPSAnc3RhY2snIGluIG5ldyBOYXRpdmVET01FeGNlcHRpb24oMSwgMik7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZ2V0b3ducHJvcGVydHlkZXNjcmlwdG9yIC0tIHNhZmVcbnZhciBkZXNjcmlwdG9yID0gTmF0aXZlRE9NRXhjZXB0aW9uICYmIERFU0NSSVBUT1JTICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoZ2xvYmFsVGhpcywgRE9NX0VYQ0VQVElPTik7XG5cbi8vIEJ1biB+IDAuMS4xIERPTUV4Y2VwdGlvbiBoYXZlIGluY29ycmVjdCBkZXNjcmlwdG9yIGFuZCB3ZSBjYW4ndCByZWRlZmluZSBpdFxuLy8gaHR0cHM6Ly9naXRodWIuY29tL0phcnJlZC1TdW1uZXIvYnVuL2lzc3Vlcy8zOTlcbnZhciBCVUdHWV9ERVNDUklQVE9SID0gISFkZXNjcmlwdG9yICYmICEoZGVzY3JpcHRvci53cml0YWJsZSAmJiBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSk7XG5cbnZhciBGT1JDRURfQ09OU1RSVUNUT1IgPSBFUlJPUl9IQVNfU1RBQ0sgJiYgIUJVR0dZX0RFU0NSSVBUT1IgJiYgIURPTV9FWENFUFRJT05fSEFTX1NUQUNLO1xuXG4vLyBgRE9NRXhjZXB0aW9uYCBjb25zdHJ1Y3RvciBwYXRjaCBmb3IgYC5zdGFja2Agd2hlcmUgaXQncyByZXF1aXJlZFxuLy8gaHR0cHM6Ly93ZWJpZGwuc3BlYy53aGF0d2cub3JnLyNlcy1ET01FeGNlcHRpb24tc3BlY2lhbG5lc3NcbiQoeyBnbG9iYWw6IHRydWUsIGNvbnN0cnVjdG9yOiB0cnVlLCBmb3JjZWQ6IElTX1BVUkUgfHwgRk9SQ0VEX0NPTlNUUlVDVE9SIH0sIHsgLy8gVE9ETzogZml4IGV4cG9ydCBsb2dpY1xuICBET01FeGNlcHRpb246IEZPUkNFRF9DT05TVFJVQ1RPUiA/ICRET01FeGNlcHRpb24gOiBOYXRpdmVET01FeGNlcHRpb25cbn0pO1xuXG52YXIgUG9seWZpbGxlZERPTUV4Y2VwdGlvbiA9IGdldEJ1aWx0SW4oRE9NX0VYQ0VQVElPTik7XG52YXIgUG9seWZpbGxlZERPTUV4Y2VwdGlvblByb3RvdHlwZSA9IFBvbHlmaWxsZWRET01FeGNlcHRpb24ucHJvdG90eXBlO1xuXG5pZiAoUG9seWZpbGxlZERPTUV4Y2VwdGlvblByb3RvdHlwZS5jb25zdHJ1Y3RvciAhPT0gUG9seWZpbGxlZERPTUV4Y2VwdGlvbikge1xuICBpZiAoIUlTX1BVUkUpIHtcbiAgICBkZWZpbmVQcm9wZXJ0eShQb2x5ZmlsbGVkRE9NRXhjZXB0aW9uUHJvdG90eXBlLCAnY29uc3RydWN0b3InLCBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IoMSwgUG9seWZpbGxlZERPTUV4Y2VwdGlvbikpO1xuICB9XG5cbiAgZm9yICh2YXIga2V5IGluIERPTUV4Y2VwdGlvbkNvbnN0YW50cykgaWYgKGhhc093bihET01FeGNlcHRpb25Db25zdGFudHMsIGtleSkpIHtcbiAgICB2YXIgY29uc3RhbnQgPSBET01FeGNlcHRpb25Db25zdGFudHNba2V5XTtcbiAgICB2YXIgY29uc3RhbnROYW1lID0gY29uc3RhbnQucztcbiAgICBpZiAoIWhhc093bihQb2x5ZmlsbGVkRE9NRXhjZXB0aW9uLCBjb25zdGFudE5hbWUpKSB7XG4gICAgICBkZWZpbmVQcm9wZXJ0eShQb2x5ZmlsbGVkRE9NRXhjZXB0aW9uLCBjb25zdGFudE5hbWUsIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvcig2LCBjb25zdGFudC5jKSk7XG4gICAgfVxuICB9XG59XG4iLCAiZXhwb3J0ICogZnJvbSAnaWRiLXBsdXMnO1xuIiwgImV4cG9ydCBpbnRlcmZhY2UgRW5zdXJlU3RvcmVPcHRpb25zIHtcbiAgLyoqIGtleVBhdGggZm9yIG9iamVjdFN0b3JlOyBkZWZhdWx0IHVuZGVmaW5lZCAob3V0LW9mLWxpbmUga2V5cykgKi9cbiAga2V5UGF0aD86IHN0cmluZyB8IHN0cmluZ1tdIHwgbnVsbFxuICAvKiogYXV0b0luY3JlbWVudCBmb3Igb2JqZWN0U3RvcmU7IGRlZmF1bHQgZmFsc2UgKi9cbiAgYXV0b0luY3JlbWVudD86IGJvb2xlYW5cbiAgLyoqIGluZGV4ZXMgdG8gZW5zdXJlIGV4aXN0IG9uIHRoZSBzdG9yZSAobWlzc2luZyBvbmVzIHdpbGwgYmUgY3JlYXRlZCBvbiB1cGdyYWRlKSAqL1xuICBpbmRleGVzPzogSURCSW5kZXhEZWZbXVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIElEQkluZGV4RGVmIHtcbiAgbmFtZTogc3RyaW5nXG4gIGtleVBhdGg6IHN0cmluZyB8IHN0cmluZ1tdXG4gIG9wdGlvbnM/OiBJREJJbmRleFBhcmFtZXRlcnNcbn1cblxuZXhwb3J0IG5hbWVzcGFjZSBJREJQbHVzSGVscGVyIHtcbiAgLy8gTG9uZy1saXZlZCBjb25uZWN0aW9uIGNhY2hlIHBlciBEQiBuYW1lXG4gIGV4cG9ydCBjb25zdCBjYWNoZSA9IG5ldyBNYXA8c3RyaW5nLCBQcm9taXNlPElEQkRhdGFiYXNlPj4oKVxuXG4gIGV4cG9ydCBjb25zdCBkZWZhdWx0cyA9IE9iamVjdC5mcmVlemUoeyBpdGVyQmF0Y2g6IDEwMCwgcmV0cnk6IHsgYXR0ZW1wdHM6IDMsIGJhc2VEZWxheU1zOiAxNiB9IH0pXG5cbiAgZXhwb3J0IGNvbnN0IHNsZWVwID0gKG1zOiBudW1iZXIpID0+IG5ldyBQcm9taXNlPHZvaWQ+KChyKSA9PiBzZXRUaW1lb3V0KHIsIG1zKSlcblxuICBleHBvcnQgZnVuY3Rpb24gc2hvdWxkUmVjb25uZWN0KGVycjogdW5rbm93bik6IGJvb2xlYW4ge1xuICAgIGNvbnN0IG5hbWUgPSAoZXJyIGFzIGFueSk/Lm5hbWUgPz8gJydcbiAgICAvLyBIZXVyaXN0aWNzIGZvciBcImNvbm5lY3Rpb24gZHJvcHBlZFwiIHNjZW5hcmlvc1xuICAgIHJldHVybiAoXG4gICAgICBuYW1lID09PSAnQWJvcnRFcnJvcicgfHxcbiAgICAgIG5hbWUgPT09ICdJbnZhbGlkU3RhdGVFcnJvcicgfHxcbiAgICAgIG5hbWUgPT09ICdUcmFuc2FjdGlvbkluYWN0aXZlRXJyb3InIHx8XG4gICAgICBuYW1lID09PSAnVW5rbm93bkVycm9yJ1xuICAgIClcbiAgfVxuXG4gIGV4cG9ydCBhc3luYyBmdW5jdGlvbiB3aXRoUmV0cnk8VD4oXG4gICAgY2ZnOiB7IGF0dGVtcHRzOiBudW1iZXI7IGJhc2VEZWxheU1zOiBudW1iZXIgfSxcbiAgICBydW46IChhdHRlbXB0OiBudW1iZXIpID0+IFByb21pc2U8VD4sXG4gICAgb25GYWlsPzogKGVycjogdW5rbm93biwgYXR0ZW1wdDogbnVtYmVyKSA9PiBQcm9taXNlPHZvaWQ+IHwgdm9pZFxuICApOiBQcm9taXNlPFQ+IHtcbiAgICBjb25zdCBhdHRlbXB0cyA9IE1hdGgubWF4KDEsIGNmZy5hdHRlbXB0cylcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGF0dGVtcHRzOyBpKyspIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBhd2FpdCBydW4oaSlcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBpZiAoaSA9PT0gYXR0ZW1wdHMgLSAxKSB0aHJvdyBlcnJcbiAgICAgICAgYXdhaXQgb25GYWlsPy4oZXJyLCBpKVxuICAgICAgICBjb25zdCBiYWNrb2ZmID0gY2ZnLmJhc2VEZWxheU1zICogTWF0aC5wb3coMiwgaSkgKyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMClcbiAgICAgICAgYXdhaXQgc2xlZXAoYmFja29mZilcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gdW5yZWFjaGFibGVcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3dpdGhSZXRyeSBleGhhdXN0ZWQgdW5leHBlY3RlZGx5JylcbiAgfVxuXG4gIGZ1bmN0aW9uIG9wZW5SYXcoXG4gICAgZGJOYW1lOiBzdHJpbmcsXG4gICAgdmVyc2lvbj86IG51bWJlcixcbiAgICB1cGdyYWRlPzogKGRiOiBJREJEYXRhYmFzZSwgdHg6IElEQlRyYW5zYWN0aW9uKSA9PiB2b2lkXG4gICkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZTxJREJEYXRhYmFzZT4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgY29uc3QgcmVxID0gaW5kZXhlZERCLm9wZW4oZGJOYW1lLCB2ZXJzaW9uKVxuICAgICAgcmVxLm9udXBncmFkZW5lZWRlZCA9ICgpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjb25zdCBkYiA9IHJlcS5yZXN1bHRcbiAgICAgICAgICBjb25zdCB0eCA9IHJlcS50cmFuc2FjdGlvbiFcbiAgICAgICAgICB1cGdyYWRlPy4oZGIsIHR4KVxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgcmVqZWN0KGUpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJlcS5vbmVycm9yID0gKCkgPT4gcmVqZWN0KHJlcS5lcnJvcilcbiAgICAgIHJlcS5vbmJsb2NrZWQgPSAoKSA9PiB7XG4gICAgICAgIC8vIG5vLW9wOyBhbm90aGVyIHRhYiBob2xkcyBhbiBvbGRlciB2ZXJzaW9uIG9wZW5cbiAgICAgIH1cbiAgICAgIHJlcS5vbnN1Y2Nlc3MgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGRiID0gcmVxLnJlc3VsdFxuICAgICAgICBkYi5vbnZlcnNpb25jaGFuZ2UgPSAoKSA9PiB7XG4gICAgICAgICAgLy8gRm9yY2UgY2xpZW50cyB0byBsYXppbHkgcmVjb25uZWN0XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGRiLmNsb3NlKClcbiAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgY2FjaGUuZGVsZXRlKGRiTmFtZSlcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVzb2x2ZShkYilcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gZW5zdXJlU2NoZW1hKFxuICAgIGRiOiBJREJEYXRhYmFzZSxcbiAgICBzdG9yZU5hbWU6IHN0cmluZyxcbiAgICBlbnN1cmU/OiBFbnN1cmVTdG9yZU9wdGlvbnNcbiAgKTogUHJvbWlzZTxJREJEYXRhYmFzZT4ge1xuICAgIGxldCBuZWVkU3RvcmUgPSAhZGIub2JqZWN0U3RvcmVOYW1lcy5jb250YWlucyhzdG9yZU5hbWUpXG4gICAgbGV0IG1pc3NpbmdJZHg6IElEQkluZGV4RGVmW10gPSBbXVxuXG4gICAgaWYgKCFuZWVkU3RvcmUgJiYgZW5zdXJlPy5pbmRleGVzPy5sZW5ndGgpIHtcbiAgICAgIC8vIEluc3BlY3QgaW5kZXhlcyBvbiBhbiBleGlzdGluZyBzdG9yZVxuICAgICAgY29uc3QgdCA9IGRiLnRyYW5zYWN0aW9uKHN0b3JlTmFtZSwgJ3JlYWRvbmx5JylcbiAgICAgIGNvbnN0IHMgPSB0Lm9iamVjdFN0b3JlKHN0b3JlTmFtZSlcbiAgICAgIGNvbnN0IHNldCA9IG5ldyBTZXQoQXJyYXkuZnJvbShzLmluZGV4TmFtZXMpKVxuICAgICAgbWlzc2luZ0lkeCA9IChlbnN1cmUuaW5kZXhlcyB8fCBbXSkuZmlsdGVyKChkKSA9PiAhc2V0LmhhcyhkLm5hbWUpKVxuICAgICAgLy8gZmluYWxpemUgdGhlIHJlYWQtb25seSB0eFxuICAgICAgYXdhaXQgbmV3IFByb21pc2U8dm9pZD4oKHJlcywgcmVqKSA9PiB7XG4gICAgICAgIHQub25jb21wbGV0ZSA9ICgpID0+IHJlcygpXG4gICAgICAgIHQub25hYm9ydCA9ICgpID0+IHJlaih0LmVycm9yKVxuICAgICAgICB0Lm9uZXJyb3IgPSAoKSA9PiByZWoodC5lcnJvcilcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgaWYgKCFuZWVkU3RvcmUgJiYgbWlzc2luZ0lkeC5sZW5ndGggPT09IDApIHJldHVybiBkYlxuXG4gICAgLy8gQnVtcCB2ZXJzaW9uIHRvIHRyaWdnZXIgdXBncmFkZVxuICAgIGNvbnN0IG5leHRWZXIgPSBkYi52ZXJzaW9uICsgMVxuICAgIGRiLmNsb3NlKClcbiAgICBjb25zdCB1cGdyYWRlZCA9IGF3YWl0IG9wZW5SYXcoZGIubmFtZSwgbmV4dFZlciwgKG5kYiwgdnR4KSA9PiB7XG4gICAgICBsZXQgc3RvcmU6IElEQk9iamVjdFN0b3JlXG4gICAgICBpZiAoIW5kYi5vYmplY3RTdG9yZU5hbWVzLmNvbnRhaW5zKHN0b3JlTmFtZSkpIHtcbiAgICAgICAgc3RvcmUgPSBuZGIuY3JlYXRlT2JqZWN0U3RvcmUoc3RvcmVOYW1lLCB7XG4gICAgICAgICAga2V5UGF0aDogZW5zdXJlPy5rZXlQYXRoID8/IHVuZGVmaW5lZCxcbiAgICAgICAgICBhdXRvSW5jcmVtZW50OiAhIWVuc3VyZT8uYXV0b0luY3JlbWVudCxcbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN0b3JlID0gdnR4Lm9iamVjdFN0b3JlKHN0b3JlTmFtZSlcbiAgICAgIH1cbiAgICAgIGZvciAoY29uc3QgaWR4IG9mIG1pc3NpbmdJZHgpIHtcbiAgICAgICAgaWYgKCFzdG9yZS5pbmRleE5hbWVzLmNvbnRhaW5zKGlkeC5uYW1lKSkge1xuICAgICAgICAgIHN0b3JlLmNyZWF0ZUluZGV4KGlkeC5uYW1lLCBpZHgua2V5UGF0aCBhcyBhbnksIGlkeC5vcHRpb25zKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgICB1cGdyYWRlZC5vbnZlcnNpb25jaGFuZ2UgPSAoKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICB1cGdyYWRlZC5jbG9zZSgpXG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBjYWNoZS5kZWxldGUodXBncmFkZWQubmFtZSlcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHVwZ3JhZGVkXG4gIH1cblxuICBleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0REIoZGJOYW1lOiBzdHJpbmcsIHN0b3JlTmFtZTogc3RyaW5nLCBlbnN1cmU/OiBFbnN1cmVTdG9yZU9wdGlvbnMpIHtcbiAgICBsZXQgcCA9IGNhY2hlLmdldChkYk5hbWUpXG4gICAgaWYgKCFwKSB7XG4gICAgICBwID0gKGFzeW5jICgpID0+IHtcbiAgICAgICAgY29uc3QgZGIgPSBhd2FpdCBvcGVuUmF3KGRiTmFtZSlcbiAgICAgICAgcmV0dXJuIGVuc3VyZVNjaGVtYShkYiwgc3RvcmVOYW1lLCBlbnN1cmUpXG4gICAgICB9KSgpXG4gICAgICBjYWNoZS5zZXQoZGJOYW1lLCBwKVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBWZXJpZnkgc2NoZW1hIGxhemlseSBpbiBjYXNlIG9mIGZpcnN0LXRpbWUgY2FsbGVycyB3aXRoIGRpZmZlcmVudCBzdG9yZSByZXF1aXJlbWVudHNcbiAgICAgIHAgPSBwLnRoZW4oKGRiKSA9PiBlbnN1cmVTY2hlbWEoZGIsIHN0b3JlTmFtZSwgZW5zdXJlKSlcbiAgICAgIGNhY2hlLnNldChkYk5hbWUsIHApXG4gICAgfVxuICAgIHJldHVybiBwXG4gIH1cblxuICBleHBvcnQgYXN5bmMgZnVuY3Rpb24gY2xvc2VDb25uZWN0aW9uKGRiTmFtZTogc3RyaW5nKSB7XG4gICAgY29uc3QgcCA9IGNhY2hlLmdldChkYk5hbWUpXG4gICAgY2FjaGUuZGVsZXRlKGRiTmFtZSlcbiAgICBpZiAocCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgOyhhd2FpdCBwKS5jbG9zZSgpXG4gICAgICB9IGNhdGNoIHt9XG4gICAgfVxuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIGFzeW5jUmVxdWVzdDxUID0gYW55PihyZXE6IElEQlJlcXVlc3Q8VD4pOiBQcm9taXNlPFQ+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2U8VD4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgcmVxLm9uc3VjY2VzcyA9ICgpID0+IHJlc29sdmUocmVxLnJlc3VsdCBhcyBUKVxuICAgICAgcmVxLm9uZXJyb3IgPSAoKSA9PiByZWplY3QocmVxLmVycm9yKVxuICAgIH0pXG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gd2FpdFR4KHR4OiBJREJUcmFuc2FjdGlvbik6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZTx2b2lkPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB0eC5vbmNvbXBsZXRlID0gKCkgPT4gcmVzb2x2ZSgpXG4gICAgICB0eC5vbmFib3J0ID0gKCkgPT4gcmVqZWN0KHR4LmVycm9yID8/IG5ldyBET01FeGNlcHRpb24oJ0Fib3J0ZWQnLCAnQWJvcnRFcnJvcicpKVxuICAgICAgdHgub25lcnJvciA9ICgpID0+IHJlamVjdCh0eC5lcnJvciA/PyBuZXcgRE9NRXhjZXB0aW9uKCdUcmFuc2FjdGlvbkVycm9yJywgJ1Vua25vd25FcnJvcicpKVxuICAgIH0pXG4gIH1cbn1cbiIsICJpbXBvcnQgeyBFbnN1cmVTdG9yZU9wdGlvbnMsIElEQlBsdXNIZWxwZXIgfSBmcm9tICcuL2hlbHBlci5qcydcblxuZXhwb3J0ICogZnJvbSAnLi9oZWxwZXIuanMnXG5cbmV4cG9ydCBpbnRlcmZhY2UgSURCUGx1c09wdGlvbnMge1xuICAvKipcbiAgICogQmF0Y2ggc2l6ZSBmb3IgYXN5bmMgaXRlcmF0aW9uXG4gICAqIEBkZWZhdWx0IDEwMFxuICAgKi9cbiAgaXRlckJhdGNoPzogbnVtYmVyXG4gIC8qKiBDcmVhdGlvbiBvcHRpb25zIChzZWUgRW5zdXJlU3RvcmVPcHRpb25zKSAqL1xuICBlbnN1cmU/OiBFbnN1cmVTdG9yZU9wdGlvbnNcbiAgLyoqXG4gICAqIFJldHJ5IGNvbmZpZ1xuICAgKiBAZGVmYXVsdCB7IGF0dGVtcHRzOiAzLCBiYXNlRGVsYXlNczogMTYgfVxuICAgKi9cbiAgcmV0cnk/OiB7IGF0dGVtcHRzPzogbnVtYmVyOyBiYXNlRGVsYXlNcz86IG51bWJlciB9XG59XG5cbi8qKlxuICogSURCIFBsdXNcbiAqXG4gKiDwn5eE77iPIE1pbmltYWwgUHJvbWlzZSBiYXNlZCBJbmRleGVkREIgV3JhcHBlciB3aXRoIE1hcC1saWtlIEFQSVxuICpcbiAqIEBhdXRob3IgZHJhZ29uLWZpc2ggPGRyYWdvbi1maXNoQHFxLmNvbT5cbiAqIEBsaWNlbnNlIE1JVFxuICovXG5leHBvcnQgY2xhc3MgSURCUGx1czxLIGV4dGVuZHMgSURCVmFsaWRLZXkgPSBJREJWYWxpZEtleSwgViA9IGFueT5cbiAgaW1wbGVtZW50cyBBc3luY0l0ZXJhYmxlPFtLLCBWXT5cbntcbiAgY29uc3RydWN0b3IoXG4gICAgcmVhZG9ubHkgZGJOYW1lOiBzdHJpbmcsXG4gICAgcmVhZG9ubHkgc3RvcmVOYW1lOiBzdHJpbmcsXG4gICAgcmVhZG9ubHkgb3B0aW9uczogSURCUGx1c09wdGlvbnMgPSB7fVxuICApIHt9XG5cbiAgcHJpdmF0ZSBnZXQgX2l0ZXJCYXRjaCgpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLml0ZXJCYXRjaCA/PyBJREJQbHVzSGVscGVyLmRlZmF1bHRzLml0ZXJCYXRjaFxuICB9XG4gIHByaXZhdGUgZ2V0IF9yZXRyeUNmZygpIHtcbiAgICBjb25zdCByID0gdGhpcy5vcHRpb25zLnJldHJ5ID8/IElEQlBsdXNIZWxwZXIuZGVmYXVsdHMucmV0cnlcbiAgICByZXR1cm4geyBhdHRlbXB0czogci5hdHRlbXB0cyA/PyAzLCBiYXNlRGVsYXlNczogci5iYXNlRGVsYXlNcyA/PyAxNiB9XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIF93aXRoU3RvcmU8VD4oXG4gICAgbW9kZTogSURCVHJhbnNhY3Rpb25Nb2RlLFxuICAgIGZuOiAoc3RvcmU6IElEQk9iamVjdFN0b3JlKSA9PiBQcm9taXNlPFQ+XG4gICk6IFByb21pc2U8VD4ge1xuICAgIGNvbnN0IGNmZyA9IHRoaXMuX3JldHJ5Q2ZnXG4gICAgcmV0dXJuIElEQlBsdXNIZWxwZXIud2l0aFJldHJ5PFQ+KFxuICAgICAgY2ZnLFxuICAgICAgYXN5bmMgKCkgPT4ge1xuICAgICAgICBjb25zdCBkYiA9IGF3YWl0IElEQlBsdXNIZWxwZXIuZ2V0REIodGhpcy5kYk5hbWUsIHRoaXMuc3RvcmVOYW1lLCB0aGlzLm9wdGlvbnMuZW5zdXJlKVxuICAgICAgICB0cnkge1xuICAgICAgICAgIGNvbnN0IHR4ID0gZGIudHJhbnNhY3Rpb24odGhpcy5zdG9yZU5hbWUsIG1vZGUpXG4gICAgICAgICAgY29uc3Qgc3RvcmUgPSB0eC5vYmplY3RTdG9yZSh0aGlzLnN0b3JlTmFtZSlcbiAgICAgICAgICBjb25zdCBvdXQgPSBhd2FpdCBmbihzdG9yZSlcbiAgICAgICAgICBhd2FpdCBJREJQbHVzSGVscGVyLndhaXRUeCh0eClcbiAgICAgICAgICByZXR1cm4gb3V0XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBSZS10aHJvdyB0byBsZXQgd2l0aFJldHJ5IGRlY2lkZTsgdHggZXJyb3JzIG9mdGVuIG1lYW4gZGlzY29ubmVjdFxuICAgICAgICAgIHRocm93IGVcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGFzeW5jIChlcnIpID0+IHtcbiAgICAgICAgaWYgKElEQlBsdXNIZWxwZXIuc2hvdWxkUmVjb25uZWN0KGVycikpIHtcbiAgICAgICAgICBhd2FpdCBJREJQbHVzSGVscGVyLmNsb3NlQ29ubmVjdGlvbih0aGlzLmRiTmFtZSkgLy8gbGF6eSByZWNvbm5lY3Qgb24gbmV4dCBhdHRlbXB0XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBhc3luYyBnZXQoa2V5OiBLKTogUHJvbWlzZTxWIHwgdW5kZWZpbmVkPiB7XG4gICAgcmV0dXJuIHRoaXMuX3dpdGhTdG9yZSgncmVhZG9ubHknLCBhc3luYyAocykgPT4ge1xuICAgICAgY29uc3QgcmVzID0gYXdhaXQgSURCUGx1c0hlbHBlci5hc3luY1JlcXVlc3Q8YW55PihzLmdldChrZXkgYXMgSURCVmFsaWRLZXkpKVxuICAgICAgcmV0dXJuIHJlcyA9PT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkIDogKHJlcyBhcyBWKVxuICAgIH0pXG4gIH1cblxuICBhc3luYyBzZXQoa2V5OiBLLCB2YWx1ZTogVik6IFByb21pc2U8dGhpcz4ge1xuICAgIGF3YWl0IHRoaXMuX3dpdGhTdG9yZSgncmVhZHdyaXRlJywgYXN5bmMgKHMpID0+IHtcbiAgICAgIGNvbnN0IGhhc0tleVBhdGggPSB0aGlzLm9wdGlvbnMuZW5zdXJlPy5rZXlQYXRoICE9IG51bGxcbiAgICAgIGNvbnN0IHJlcSA9IGhhc0tleVBhdGggPyBzLnB1dCh2YWx1ZSBhcyBhbnkpIDogcy5wdXQodmFsdWUgYXMgYW55LCBrZXkgYXMgSURCVmFsaWRLZXkpXG4gICAgICBhd2FpdCBJREJQbHVzSGVscGVyLmFzeW5jUmVxdWVzdChyZXEpXG4gICAgICByZXR1cm5cbiAgICB9KVxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICBhc3luYyBkZWxldGUoa2V5OiBLKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuX3dpdGhTdG9yZSgncmVhZHdyaXRlJywgYXN5bmMgKHMpID0+IHtcbiAgICAgIC8vIENoZWNrIGV4aXN0ZW5jZSB0byByZXR1cm4gYSB0cnV0aGZ1bCBib29sZWFuXG4gICAgICBjb25zdCBleGlzdGVkID1cbiAgICAgICAgKGF3YWl0IElEQlBsdXNIZWxwZXIuYXN5bmNSZXF1ZXN0PGFueT4ocy5nZXQoa2V5IGFzIElEQlZhbGlkS2V5KSkpICE9PSB1bmRlZmluZWRcbiAgICAgIGF3YWl0IElEQlBsdXNIZWxwZXIuYXN5bmNSZXF1ZXN0KHMuZGVsZXRlKGtleSBhcyBJREJWYWxpZEtleSkpXG4gICAgICByZXR1cm4gZXhpc3RlZFxuICAgIH0pXG4gIH1cblxuICBhc3luYyBjbGVhcigpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBhd2FpdCB0aGlzLl93aXRoU3RvcmUoJ3JlYWR3cml0ZScsIGFzeW5jIChzKSA9PiB7XG4gICAgICBhd2FpdCBJREJQbHVzSGVscGVyLmFzeW5jUmVxdWVzdChzLmNsZWFyKCkpXG4gICAgfSlcbiAgfVxuXG4gIGFzeW5jIGhhcyhrZXk6IEspOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICBjb25zdCB2ID0gYXdhaXQgdGhpcy5nZXQoa2V5KVxuICAgIHJldHVybiB2ICE9PSB1bmRlZmluZWRcbiAgfVxuXG4gIGFzeW5jIGNvdW50KCk6IFByb21pc2U8bnVtYmVyPiB7XG4gICAgcmV0dXJuIHRoaXMuX3dpdGhTdG9yZSgncmVhZG9ubHknLCBhc3luYyAocykgPT4ge1xuICAgICAgY29uc3QgbiA9IGF3YWl0IElEQlBsdXNIZWxwZXIuYXN5bmNSZXF1ZXN0PG51bWJlcj4ocy5jb3VudCgpKVxuICAgICAgcmV0dXJuIG4gPz8gMFxuICAgIH0pXG4gIH1cblxuICBwcml2YXRlIGFzeW5jICpfaXRlcmF0ZUVudHJpZXMoKTogQXN5bmNJdGVyYWJsZTxbSywgVl0+IHtcbiAgICAvLyBSZXN0YXJ0IHRyYW5zYWN0aW9uIGV2ZXJ5IE4gaXRlbXMgdG8gYXZvaWQgbG9uZy1saXZlZCBjdXJzb3JzXG4gICAgbGV0IGxhc3RLZXk6IElEQlZhbGlkS2V5IHwgbnVsbCA9IG51bGxcbiAgICBsZXQgZG9uZSA9IGZhbHNlXG4gICAgY29uc3QgYmF0Y2ggPSBNYXRoLm1heCgxLCB0aGlzLl9pdGVyQmF0Y2gpXG5cbiAgICB3aGlsZSAoIWRvbmUpIHtcbiAgICAgIGNvbnN0IGNodW5rOiBBcnJheTxbSywgVl0+ID0gYXdhaXQgdGhpcy5fd2l0aFN0b3JlKCdyZWFkb25seScsIGFzeW5jIChzKSA9PiB7XG4gICAgICAgIGNvbnN0IG91dDogQXJyYXk8W0ssIFZdPiA9IFtdXG4gICAgICAgIGNvbnN0IHJhbmdlID0gbGFzdEtleSA9PT0gbnVsbCA/IHVuZGVmaW5lZCA6IElEQktleVJhbmdlLmxvd2VyQm91bmQobGFzdEtleSwgdHJ1ZSlcbiAgICAgICAgYXdhaXQgbmV3IFByb21pc2U8dm9pZD4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHJlcSA9IHMub3BlbkN1cnNvcihyYW5nZSlcbiAgICAgICAgICByZXEub25lcnJvciA9ICgpID0+IHJlamVjdChyZXEuZXJyb3IpXG4gICAgICAgICAgcmVxLm9uc3VjY2VzcyA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGN1ciA9IHJlcS5yZXN1bHQgYXMgSURCQ3Vyc29yV2l0aFZhbHVlIHwgbnVsbFxuICAgICAgICAgICAgaWYgKCFjdXIpIHtcbiAgICAgICAgICAgICAgZG9uZSA9IHRydWVcbiAgICAgICAgICAgICAgcmVzb2x2ZSgpXG4gICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb3V0LnB1c2goW2N1ci5rZXkgYXMgSywgY3VyLnZhbHVlIGFzIFZdKVxuICAgICAgICAgICAgbGFzdEtleSA9IGN1ci5rZXkgYXMgSURCVmFsaWRLZXlcbiAgICAgICAgICAgIGlmIChvdXQubGVuZ3RoID49IGJhdGNoKSB7XG4gICAgICAgICAgICAgIHJlc29sdmUoKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY3VyLmNvbnRpbnVlKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiBvdXRcbiAgICAgIH0pXG5cbiAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBjaHVuaykgeWllbGQgaXRlbVxuICAgICAgaWYgKGNodW5rLmxlbmd0aCA9PT0gMCkgYnJlYWtcbiAgICB9XG4gIH1cblxuICBlbnRyaWVzKCk6IEFzeW5jSXRlcmFibGU8W0ssIFZdPiB7XG4gICAgcmV0dXJuIHRoaXMuX2l0ZXJhdGVFbnRyaWVzKClcbiAgfVxuXG4gIGFzeW5jICprZXlzKCk6IEFzeW5jSXRlcmFibGU8Sz4ge1xuICAgIGZvciBhd2FpdCAoY29uc3QgW2tdIG9mIHRoaXMuZW50cmllcygpKSB5aWVsZCBrXG4gIH1cblxuICBhc3luYyAqdmFsdWVzKCk6IEFzeW5jSXRlcmFibGU8Vj4ge1xuICAgIGZvciBhd2FpdCAoY29uc3QgWywgdl0gb2YgdGhpcy5lbnRyaWVzKCkpIHlpZWxkIHZcbiAgfVxuXG4gIFtTeW1ib2wuYXN5bmNJdGVyYXRvcl0oKTogQXN5bmNJdGVyYXRvcjxbSywgVl0+IHtcbiAgICByZXR1cm4gdGhpcy5lbnRyaWVzKClbU3ltYm9sLmFzeW5jSXRlcmF0b3JdKClcbiAgfVxuXG4gIGFzeW5jIGZvckVhY2goXG4gICAgY2I6ICh2YWx1ZTogViwga2V5OiBLLCBzdG9yZTogSURCUGx1czxLLCBWPikgPT4gdm9pZCB8IFByb21pc2U8dm9pZD5cbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgZm9yIGF3YWl0IChjb25zdCBbaywgdl0gb2YgdGhpcy5lbnRyaWVzKCkpIHtcbiAgICAgIGF3YWl0IGNiKHYgYXMgViwgayBhcyBLLCB0aGlzKVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGdldE1hbnkoa2V5czogSXRlcmFibGU8Sz4gfCBBc3luY0l0ZXJhYmxlPEs+KTogUHJvbWlzZTxNYXA8SywgViB8IHVuZGVmaW5lZD4+IHtcbiAgICBjb25zdCBvdXQgPSBuZXcgTWFwPEssIFYgfCB1bmRlZmluZWQ+KClcbiAgICBmb3IgYXdhaXQgKGNvbnN0IGsgb2Yga2V5cykgb3V0LnNldChrLCB1bmRlZmluZWQpXG4gICAgYXdhaXQgdGhpcy5fd2l0aFN0b3JlKCdyZWFkb25seScsIGFzeW5jIChzKSA9PiB7XG4gICAgICBhd2FpdCBQcm9taXNlLmFsbChcbiAgICAgICAgb3V0LmtleXMoKS5tYXAoYXN5bmMgKGspID0+IHtcbiAgICAgICAgICBjb25zdCB2ID0gYXdhaXQgSURCUGx1c0hlbHBlci5hc3luY1JlcXVlc3Q8YW55PihzLmdldChrKSlcbiAgICAgICAgICBvdXQuc2V0KGssIHYgPT09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZCA6ICh2IGFzIFYpKVxuICAgICAgICB9KVxuICAgICAgKVxuICAgIH0pXG4gICAgcmV0dXJuIG91dFxuICB9XG5cbiAgYXN5bmMgc2V0TWFueShlbnRyaWVzOiBJdGVyYWJsZTxbSywgVl0+IHwgQXN5bmNJdGVyYWJsZTxbSywgVl0+KTogUHJvbWlzZTx0aGlzPiB7XG4gICAgY29uc3QgaGFzS2V5UGF0aCA9IHRoaXMub3B0aW9ucy5lbnN1cmU/LmtleVBhdGggIT0gbnVsbFxuICAgIGF3YWl0IHRoaXMuX3dpdGhTdG9yZSgncmVhZHdyaXRlJywgYXN5bmMgKHMpID0+IHtcbiAgICAgIGZvciBhd2FpdCAoY29uc3QgW2ssIHZdIG9mIGVudHJpZXMgYXMgYW55KSB7XG4gICAgICAgIGNvbnN0IHJlcSA9IGhhc0tleVBhdGggPyBzLnB1dCh2IGFzIGFueSkgOiBzLnB1dCh2IGFzIGFueSwgayBhcyBJREJWYWxpZEtleSlcbiAgICAgICAgYXdhaXQgSURCUGx1c0hlbHBlci5hc3luY1JlcXVlc3QocmVxKVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIGFzeW5jIGRlbGV0ZU1hbnkoa2V5czogSXRlcmFibGU8Sz4gfCBBc3luY0l0ZXJhYmxlPEs+KTogUHJvbWlzZTxudW1iZXI+IHtcbiAgICBsZXQgZGVsZXRlZCA9IDBcbiAgICBhd2FpdCB0aGlzLl93aXRoU3RvcmUoJ3JlYWR3cml0ZScsIGFzeW5jIChzKSA9PiB7XG4gICAgICBmb3IgYXdhaXQgKGNvbnN0IGsgb2Yga2V5cyBhcyBhbnkpIHtcbiAgICAgICAgY29uc3QgZXhpc3RlZCA9XG4gICAgICAgICAgKGF3YWl0IElEQlBsdXNIZWxwZXIuYXN5bmNSZXF1ZXN0PGFueT4ocy5nZXQoayBhcyBJREJWYWxpZEtleSkpKSAhPT0gdW5kZWZpbmVkXG4gICAgICAgIGlmIChleGlzdGVkKSBkZWxldGVkKytcbiAgICAgICAgYXdhaXQgSURCUGx1c0hlbHBlci5hc3luY1JlcXVlc3Qocy5kZWxldGUoayBhcyBJREJWYWxpZEtleSkpXG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gZGVsZXRlZFxuICB9XG5cbiAgYXN5bmMgZGlzY29ubmVjdCgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBhd2FpdCBJREJQbHVzSGVscGVyLmNsb3NlQ29ubmVjdGlvbih0aGlzLmRiTmFtZSlcbiAgfVxufVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7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QUE7QUFBQSxjQUFBQztBQUFBLGNBQUE7QUFDOUMscUJBQUFDLGFBQUFyRCxlQUFzQk4sQ0FBQSxHQUFBNEQsUUFBQUosNkJBQUEsRUFBQUksU0FBQSxNQUFBRCxXQUFBbkQsS0FBQSxHQUFBN0YsTUFBQTZJLDZCQUFBLE9BQUE7QUFBQSxvQkFBTC9DLElBQUFtRCxPQUFBL0k7QUFBQTtBQUVaLGlCQUFBLE1BQU16RyxFQUFjMkgsYUFBa0I3QixFQUFFb0IsSUFBSUUsQ0FBZ0IsQ0FBQyxPQUFPLFVBQzFEN0YsS0FBQSxNQUNQdkIsRUFBYzJILGFBQWE3QixFQUFFOUIsT0FBT29ELENBQWdCLENBQUM7Y0FBQTtZQUFBO1VBQUEsU0FBQWhGLEtBQUE7QUFBQWlOLGlDQUFBO0FBQUFDLDhCQUFBbE47VUFBQSxVQUFBO0FBQUEsZ0JBQUE7QUFBQSxrQkFBQWdOLDhCQUFBRyxXQUFBakQsVUFBQSxNQUFBO0FBQUEsc0JBQUFpRCxXQUFBakQsT0FBQTtjQUFBO1lBQUEsVUFBQTtBQUFBLGtCQUFBK0Msb0JBQUE7QUFBQSxzQkFBQUM7Y0FBQTtZQUFBO1VBQUE7UUFFL0QsQ0FBQztBQUFBLGVBQUEsU0FBQUcsTUFBQTtBQUFBLGlCQUFBTixPQUFBdk4sTUFBQSxNQUFBQyxTQUFBO1FBQUE7TUFBQSxHQUFBLENBQUEsR0FDTU47SUFBQSxDQUFBLEVBQUE7RUFDVDtFQUVNbU8sYUFBNEI7QUFBQSxRQUFBQyxVQUFBO0FBQUEsV0FBQTdOLGtCQUFBLGFBQUE7QUFDaEMsWUFBTS9CLEVBQWMwSCxnQkFBZ0JrSSxRQUFLeEgsTUFBTTtJQUFBLENBQUEsRUFBQTtFQUNqRDtBQUNGOyIsCiAgIm5hbWVzIjogWyJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImdsb2JhbFRoaXMiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZ2xvYmFsVGhpcyIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJnbG9iYWxUaGlzIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImdsb2JhbFRoaXMiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZ2xvYmFsVGhpcyIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJnbG9iYWxUaGlzIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImdsb2JhbFRoaXMiLCAiU3ltYm9sIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImdsb2JhbFRoaXMiLCAiZG9jdW1lbnQiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImdsb2JhbFRoaXMiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZ2xvYmFsVGhpcyIsICJUeXBlRXJyb3IiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAieCIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgImV4cG9ydHMiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZ2xvYmFsVGhpcyIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJnbG9iYWxUaGlzIiwgIkVycm9yIiwgIkRPTUV4Y2VwdGlvbiIsICJpZGJfcGx1c19leHBvcnRzIiwgIl9fZXhwb3J0IiwgIklEQlBsdXMiLCAieCIsICJJREJQbHVzSGVscGVyIiwgInMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAiX190b0NvbW1vbkpTIiwgImkiLCAiY2FjaGUiLCAiTWFwIiwgImRlZmF1bHRzIiwgIk9iamVjdCIsICJmcmVlemUiLCAiaXRlckJhdGNoIiwgInJldHJ5IiwgImF0dGVtcHRzIiwgImJhc2VEZWxheU1zIiwgInNsZWVwIiwgImUiLCAiUHJvbWlzZSIsICJuIiwgInNldFRpbWVvdXQiLCAidCIsICJfZSRuYW1lIiwgIm5hbWUiLCAic2hvdWxkUmVjb25uZWN0IiwgImEiLCAiX3giLCAiX3gyIiwgIl94MyIsICJfYSIsICJhcHBseSIsICJhcmd1bWVudHMiLCAiX2FzeW5jVG9HZW5lcmF0b3IiLCAiciIsICJNYXRoIiwgIm1heCIsICJ5IiwgInJ1biIsICJlcnIiLCAiZCIsICJvbkZhaWwiLCAiYmFja29mZiIsICJwb3ciLCAiZmxvb3IiLCAicmFuZG9tIiwgInUiLCAiRXJyb3IiLCAid2l0aFJldHJ5IiwgIm9wZW5SYXciLCAidyIsICJyZXEiLCAiaW5kZXhlZERCIiwgIm9wZW4iLCAib251cGdyYWRlbmVlZGVkIiwgImRiIiwgInJlc3VsdCIsICJsIiwgInRyYW5zYWN0aW9uIiwgInVwZ3JhZGUiLCAicmVqZWN0IiwgIm9uZXJyb3IiLCAiZXJyb3IiLCAib25ibG9ja2VkIiwgIm9uc3VjY2VzcyIsICJvbnZlcnNpb25jaGFuZ2UiLCAiY2xvc2UiLCAiZGVsZXRlIiwgImVuc3VyZVNjaGVtYSIsICJfeDQiLCAiX3g1IiwgIl94NiIsICJfaCIsICJfciRpbmRleGVzIiwgIm5lZWRTdG9yZSIsICJvYmplY3RTdG9yZU5hbWVzIiwgImNvbnRhaW5zIiwgImluZGV4ZXMiLCAibGVuZ3RoIiwgInAiLCAib2JqZWN0U3RvcmUiLCAiZyIsICJTZXQiLCAiQXJyYXkiLCAiZnJvbSIsICJpbmRleE5hbWVzIiwgIm1pc3NpbmdJZHgiLCAiZmlsdGVyIiwgIm0iLCAiaGFzIiwgIlIiLCAib25jb21wbGV0ZSIsICJyZXMiLCAib25hYm9ydCIsICJuZXh0VmVyIiwgInZlcnNpb24iLCAidXBncmFkZWQiLCAibyIsICJfciRrZXlQYXRoIiwgInN0b3JlIiwgImNyZWF0ZU9iamVjdFN0b3JlIiwgImtleVBhdGgiLCAiYXV0b0luY3JlbWVudCIsICJfaXRlcmF0b3I4IiwgIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwgIl9zdGVwOCIsICJkb25lIiwgImlkeCIsICJ2YWx1ZSIsICJjcmVhdGVJbmRleCIsICJvcHRpb25zIiwgImYiLCAiYyIsICJfeDciLCAiX3g4IiwgIl94OSIsICJfYyIsICJnZXQiLCAidGhlbiIsICJoIiwgInNldCIsICJnZXREQiIsICJfeDAiLCAiX2YiLCAiY2xvc2VDb25uZWN0aW9uIiwgInYiLCAiYXN5bmNSZXF1ZXN0IiwgIlMiLCAidHgiLCAiX2UkZXJyb3IiLCAiRE9NRXhjZXB0aW9uIiwgIl9lJGVycm9yMiIsICJ3YWl0VHgiLCAiY29uc3RydWN0b3IiLCAiZGJOYW1lIiwgInN0b3JlTmFtZSIsICJfaXRlckJhdGNoIiwgIl90aGlzJG9wdGlvbnMkaXRlckJhdCIsICJfcmV0cnlDZmciLCAiX3RoaXMkb3B0aW9ucyRyZXRyeSIsICJfdCRhdHRlbXB0cyIsICJfdCRiYXNlRGVsYXlNcyIsICJfd2l0aFN0b3JlIiwgIl90aGlzNCIsICJjZmciLCAiZW5zdXJlIiwgIl9yZWYzIiwgIl94MSIsICJrZXkiLCAiX3RoaXM1IiwgIl9yZWY0IiwgIl94MTAiLCAiX3RoaXM2IiwgIl9yZWY1IiwgIl90aGlzNiRvcHRpb25zJGVuc3VyZSIsICJwdXQiLCAiX3gxMSIsICJfdGhpczciLCAiX3JlZjYiLCAiZXhpc3RlZCIsICJfeDEyIiwgImNsZWFyIiwgIl90aGlzOCIsICJfcmVmNyIsICJfeDEzIiwgIl90aGlzOSIsICJjb3VudCIsICJfdGhpczAiLCAiX3JlZjgiLCAiX3lpZWxkJHMkYXN5bmNSZXF1ZXN0IiwgIl94MTQiLCAiX2l0ZXJhdGVFbnRyaWVzIiwgIl90aGlzIiwgIl93cmFwQXN5bmNHZW5lcmF0b3IiLCAibGFzdEtleSIsICJiYXRjaCIsICJjaHVuayIsICJfYXdhaXRBc3luY0dlbmVyYXRvciIsICJfcmVmOSIsICJvdXQiLCAiSURCS2V5UmFuZ2UiLCAibG93ZXJCb3VuZCIsICJvcGVuQ3Vyc29yIiwgImN1ciIsICJwdXNoIiwgImNvbnRpbnVlIiwgIl94MTUiLCAiX2l0ZXJhdG9yOSIsICJfc3RlcDkiLCAiaXRlbSIsICJlbnRyaWVzIiwgImtleXMiLCAiX3RoaXMyIiwgIl9pdGVyYXRvckFicnVwdENvbXBsZXRpb24iLCAiX2RpZEl0ZXJhdG9yRXJyb3IiLCAiX2l0ZXJhdG9yRXJyb3IiLCAiX2l0ZXJhdG9yIiwgIl9hc3luY0l0ZXJhdG9yIiwgIl9zdGVwIiwgIm5leHQiLCAiayIsICJyZXR1cm4iLCAidmFsdWVzIiwgIl90aGlzMyIsICJfaXRlcmF0b3JBYnJ1cHRDb21wbGV0aW9uMiIsICJfZGlkSXRlcmF0b3JFcnJvcjIiLCAiX2l0ZXJhdG9yRXJyb3IyIiwgIl9pdGVyYXRvcjIiLCAiX3N0ZXAyIiwgIlN5bWJvbCIsICJhc3luY0l0ZXJhdG9yIiwgImZvckVhY2giLCAiX3RoaXMxIiwgIl9pdGVyYXRvckFicnVwdENvbXBsZXRpb24zIiwgIl9kaWRJdGVyYXRvckVycm9yMyIsICJfaXRlcmF0b3JFcnJvcjMiLCAiX2l0ZXJhdG9yMyIsICJfc3RlcDMiLCAiY2IiLCAiZ2V0TWFueSIsICJfdGhpczEwIiwgIl9pdGVyYXRvckFicnVwdENvbXBsZXRpb240IiwgIl9kaWRJdGVyYXRvckVycm9yNCIsICJfaXRlcmF0b3JFcnJvcjQiLCAiX2l0ZXJhdG9yNCIsICJfc3RlcDQiLCAiX3JlZjAiLCAiYWxsIiwgIm1hcCIsICJfcmVmMSIsICJfeDE3IiwgIl94MTYiLCAic2V0TWFueSIsICJfdGhpczExIiwgIl90aGlzMTEkb3B0aW9ucyRlbnN1ciIsICJoYXNLZXlQYXRoIiwgIl9yZWYxMCIsICJfaXRlcmF0b3JBYnJ1cHRDb21wbGV0aW9uNSIsICJfZGlkSXRlcmF0b3JFcnJvcjUiLCAiX2l0ZXJhdG9yRXJyb3I1IiwgIl9pdGVyYXRvcjUiLCAiX3N0ZXA1IiwgIl94MTgiLCAiZGVsZXRlTWFueSIsICJfdGhpczEyIiwgImRlbGV0ZWQiLCAiX3JlZjExIiwgIl9pdGVyYXRvckFicnVwdENvbXBsZXRpb242IiwgIl9kaWRJdGVyYXRvckVycm9yNiIsICJfaXRlcmF0b3JFcnJvcjYiLCAiX2l0ZXJhdG9yNiIsICJfc3RlcDYiLCAiX3gxOSIsICJkaXNjb25uZWN0IiwgIl90aGlzMTMiXQp9Cg==

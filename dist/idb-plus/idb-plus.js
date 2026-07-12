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
    module2.exports = NATIVE_BIND ? uncurryThisWithBind : function(fn) {
      return function() {
        return call.apply(fn, arguments);
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
    var navigator = globalThis2.navigator;
    var userAgent = navigator && navigator.userAgent;
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
      var fn, val;
      if (pref === "string" && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
      if (isCallable(fn = input.valueOf) && !isObject(val = call(fn, input))) return val;
      if (pref !== "string" && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
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
    module2.exports = Math.trunc || function trunc(x2) {
      var n = +x2;
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
    var max = Math.max;
    var min = Math.min;
    module2.exports = function(index, length) {
      var integer = toIntegerOrInfinity(index);
      return integer < 0 ? max(integer + length, 0) : min(integer, length);
    };
  }
});

// node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/to-length.js
var require_to_length = __commonJS({
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/to-length.js"(exports2, module2) {
    "use strict";
    var toIntegerOrInfinity = require_to_integer_or_infinity();
    var min = Math.min;
    module2.exports = function(argument) {
      var len = toIntegerOrInfinity(argument);
      return len > 0 ? min(len, 9007199254740991) : 0;
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

// node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/an-instance.js
var require_an_instance = __commonJS({
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/an-instance.js"(exports2, module2) {
    "use strict";
    var isPrototypeOf = require_object_is_prototype_of();
    var $TypeError = TypeError;
    module2.exports = function(it, Prototype) {
      if (isPrototypeOf(Prototype, it)) return it;
      throw new $TypeError("Incorrect invocation");
    };
  }
});

// node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/function-uncurry-this-accessor.js
var require_function_uncurry_this_accessor = __commonJS({
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/function-uncurry-this-accessor.js"(exports2, module2) {
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

// node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/is-possible-prototype.js
var require_is_possible_prototype = __commonJS({
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/is-possible-prototype.js"(exports2, module2) {
    "use strict";
    var isObject = require_is_object();
    module2.exports = function(argument) {
      return isObject(argument) || argument === null;
    };
  }
});

// node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/a-possible-prototype.js
var require_a_possible_prototype = __commonJS({
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/a-possible-prototype.js"(exports2, module2) {
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

// node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/object-set-prototype-of.js
var require_object_set_prototype_of = __commonJS({
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/object-set-prototype-of.js"(exports2, module2) {
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

// node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/inherit-if-required.js
var require_inherit_if_required = __commonJS({
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/inherit-if-required.js"(exports2, module2) {
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

// node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/normalize-string-argument.js
var require_normalize_string_argument = __commonJS({
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/normalize-string-argument.js"(exports2, module2) {
    "use strict";
    var toString = require_to_string();
    module2.exports = function(argument, $default) {
      return argument === void 0 ? arguments.length < 2 ? "" : $default : toString(argument);
    };
  }
});

// node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/dom-exception-constants.js
var require_dom_exception_constants = __commonJS({
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/dom-exception-constants.js"(exports2, module2) {
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

// node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/error-stack-clear.js
var require_error_stack_clear = __commonJS({
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/error-stack-clear.js"(exports2, module2) {
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

// node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/modules/web.dom-exception.stack.js
var require_web_dom_exception_stack = __commonJS({
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/modules/web.dom-exception.stack.js"() {
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40OS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9nbG9iYWwtdGhpcy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ5LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2ZhaWxzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDkuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZGVzY3JpcHRvcnMuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40OS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mdW5jdGlvbi1iaW5kLW5hdGl2ZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ5LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2Z1bmN0aW9uLWNhbGwuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40OS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3QtcHJvcGVydHktaXMtZW51bWVyYWJsZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ5LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDkuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDkuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY2xhc3NvZi1yYXcuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40OS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pbmRleGVkLW9iamVjdC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ5LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLW51bGwtb3ItdW5kZWZpbmVkLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDkuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDkuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40OS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pcy1jYWxsYWJsZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ5LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLW9iamVjdC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ5LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2dldC1idWlsdC1pbi5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ5LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1pcy1wcm90b3R5cGUtb2YuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40OS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9lbnZpcm9ubWVudC11c2VyLWFnZW50LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDkuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZW52aXJvbm1lbnQtdjgtdmVyc2lvbi5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ5LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3N5bWJvbC1jb25zdHJ1Y3Rvci1kZXRlY3Rpb24uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40OS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy91c2Utc3ltYm9sLWFzLXVpZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ5LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLXN5bWJvbC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ5LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RyeS10by1zdHJpbmcuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40OS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hLWNhbGxhYmxlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDkuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZ2V0LW1ldGhvZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ5LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29yZGluYXJ5LXRvLXByaW1pdGl2ZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ5LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLXB1cmUuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40OS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9kZWZpbmUtZ2xvYmFsLXByb3BlcnR5LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDkuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2hhcmVkLXN0b3JlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDkuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2hhcmVkLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDkuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tb2JqZWN0LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDkuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ5LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3VpZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ5LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDkuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tcHJpbWl0aXZlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDkuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tcHJvcGVydHkta2V5LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDkuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZG9jdW1lbnQtY3JlYXRlLWVsZW1lbnQuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40OS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pZTgtZG9tLWRlZmluZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ5LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3IuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40OS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy92OC1wcm90b3R5cGUtZGVmaW5lLWJ1Zy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ5LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FuLW9iamVjdC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ5LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHkuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40OS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHkuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40OS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mdW5jdGlvbi1uYW1lLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDkuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaW5zcGVjdC1zb3VyY2UuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40OS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy93ZWFrLW1hcC1iYXNpYy1kZXRlY3Rpb24uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40OS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zaGFyZWQta2V5LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDkuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaGlkZGVuLWtleXMuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40OS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pbnRlcm5hbC1zdGF0ZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ5LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL21ha2UtYnVpbHQtaW4uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40OS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9kZWZpbmUtYnVpbHQtaW4uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40OS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9tYXRoLXRydW5jLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDkuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8taW50ZWdlci1vci1pbmZpbml0eS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ5LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RvLWFic29sdXRlLWluZGV4LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDkuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tbGVuZ3RoLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDkuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvbGVuZ3RoLW9mLWFycmF5LWxpa2UuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40OS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1pbmNsdWRlcy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ5LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1rZXlzLWludGVybmFsLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDkuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZW51bS1idWcta2V5cy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ5LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LW5hbWVzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDkuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktc3ltYm9scy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ5LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL293bi1rZXlzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDkuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY29weS1jb25zdHJ1Y3Rvci1wcm9wZXJ0aWVzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDkuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXMtZm9yY2VkLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDkuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZXhwb3J0LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDkuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvbWFwLWhlbHBlcnMuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40OS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMubWFwLmdldC1vci1pbnNlcnQuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40OS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMubWFwLmdldC1vci1pbnNlcnQtY29tcHV0ZWQuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40OS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hbi1pbnN0YW5jZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ5LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcy1hY2Nlc3Nvci5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ5LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLXBvc3NpYmxlLXByb3RvdHlwZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ5LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2EtcG9zc2libGUtcHJvdG90eXBlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDkuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LXNldC1wcm90b3R5cGUtb2YuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40OS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pbmhlcml0LWlmLXJlcXVpcmVkLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDkuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tc3RyaW5nLXRhZy1zdXBwb3J0LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDkuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY2xhc3NvZi5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ5LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RvLXN0cmluZy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ5LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL25vcm1hbGl6ZS1zdHJpbmctYXJndW1lbnQuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40OS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9kb20tZXhjZXB0aW9uLWNvbnN0YW50cy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ5LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2Vycm9yLXN0YWNrLWNsZWFyLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDkuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL3dlYi5kb20tZXhjZXB0aW9uLnN0YWNrLmpzIiwgInNyYy9pZGItcGx1cy9pZGItcGx1cy50cyIsICJub2RlX21vZHVsZXMvLnBucG0vaWRiLXBsdXNAMC4yLjAvbm9kZV9tb2R1bGVzL2lkYi1wbHVzL3NyYy9oZWxwZXIudHMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2lkYi1wbHVzQDAuMi4wL25vZGVfbW9kdWxlcy9pZGItcGx1cy9zcmMvaW5kZXgudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIid1c2Ugc3RyaWN0JztcbnZhciBjaGVjayA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXQgJiYgaXQuTWF0aCA9PT0gTWF0aCAmJiBpdDtcbn07XG5cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy84NiNpc3N1ZWNvbW1lbnQtMTE1NzU5MDI4XG5tb2R1bGUuZXhwb3J0cyA9XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1nbG9iYWwtdGhpcyAtLSBzYWZlXG4gIGNoZWNrKHR5cGVvZiBnbG9iYWxUaGlzID09ICdvYmplY3QnICYmIGdsb2JhbFRoaXMpIHx8XG4gIGNoZWNrKHR5cGVvZiB3aW5kb3cgPT0gJ29iamVjdCcgJiYgd2luZG93KSB8fFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVzdHJpY3RlZC1nbG9iYWxzIC0tIHNhZmVcbiAgY2hlY2sodHlwZW9mIHNlbGYgPT0gJ29iamVjdCcgJiYgc2VsZikgfHxcbiAgY2hlY2sodHlwZW9mIGdsb2JhbCA9PSAnb2JqZWN0JyAmJiBnbG9iYWwpIHx8XG4gIGNoZWNrKHR5cGVvZiB0aGlzID09ICdvYmplY3QnICYmIHRoaXMpIHx8XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1uZXctZnVuYyAtLSBmYWxsYmFja1xuICAoZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSkoKSB8fCBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuIiwgIid1c2Ugc3RyaWN0Jztcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGV4ZWMpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gISFleGVjKCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG5cbi8vIERldGVjdCBJRTgncyBpbmNvbXBsZXRlIGRlZmluZVByb3BlcnR5IGltcGxlbWVudGF0aW9uXG5tb2R1bGUuZXhwb3J0cyA9ICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZGVmaW5lcHJvcGVydHkgLS0gcmVxdWlyZWQgZm9yIHRlc3RpbmdcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgMSwgeyBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDc7IH0gfSlbMV0gIT09IDc7XG59KTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tZnVuY3Rpb24tcHJvdG90eXBlLWJpbmQgLS0gc2FmZVxuICB2YXIgdGVzdCA9IGZ1bmN0aW9uICgpIHsgLyogZW1wdHkgKi8gfS5iaW5kKCk7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnMgLS0gc2FmZVxuICByZXR1cm4gdHlwZW9mIHRlc3QgIT0gJ2Z1bmN0aW9uJyB8fCB0ZXN0Lmhhc093blByb3BlcnR5KCdwcm90b3R5cGUnKTtcbn0pO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBOQVRJVkVfQklORCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1iaW5kLW5hdGl2ZScpO1xuXG52YXIgY2FsbCA9IEZ1bmN0aW9uLnByb3RvdHlwZS5jYWxsO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLWZ1bmN0aW9uLXByb3RvdHlwZS1iaW5kIC0tIHNhZmVcbm1vZHVsZS5leHBvcnRzID0gTkFUSVZFX0JJTkQgPyBjYWxsLmJpbmQoY2FsbCkgOiBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBjYWxsLmFwcGx5KGNhbGwsIGFyZ3VtZW50cyk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciAkcHJvcGVydHlJc0VudW1lcmFibGUgPSB7fS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZ2V0b3ducHJvcGVydHlkZXNjcmlwdG9yIC0tIHNhZmVcbnZhciBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4vLyBOYXNob3JuIH4gSkRLOCBidWdcbnZhciBOQVNIT1JOX0JVRyA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvciAmJiAhJHByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwoeyAxOiAyIH0sIDEpO1xuXG4vLyBgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZWAgbWV0aG9kIGltcGxlbWVudGF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5wcm90b3R5cGUucHJvcGVydHlpc2VudW1lcmFibGVcbmV4cG9ydHMuZiA9IE5BU0hPUk5fQlVHID8gZnVuY3Rpb24gcHJvcGVydHlJc0VudW1lcmFibGUoVikge1xuICB2YXIgZGVzY3JpcHRvciA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvcih0aGlzLCBWKTtcbiAgcmV0dXJuICEhZGVzY3JpcHRvciAmJiBkZXNjcmlwdG9yLmVudW1lcmFibGU7XG59IDogJHByb3BlcnR5SXNFbnVtZXJhYmxlO1xuIiwgIid1c2Ugc3RyaWN0Jztcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGJpdG1hcCwgdmFsdWUpIHtcbiAgcmV0dXJuIHtcbiAgICBlbnVtZXJhYmxlOiAhKGJpdG1hcCAmIDEpLFxuICAgIGNvbmZpZ3VyYWJsZTogIShiaXRtYXAgJiAyKSxcbiAgICB3cml0YWJsZTogIShiaXRtYXAgJiA0KSxcbiAgICB2YWx1ZTogdmFsdWVcbiAgfTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIE5BVElWRV9CSU5EID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWJpbmQtbmF0aXZlJyk7XG5cbnZhciBGdW5jdGlvblByb3RvdHlwZSA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcbnZhciBjYWxsID0gRnVuY3Rpb25Qcm90b3R5cGUuY2FsbDtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1mdW5jdGlvbi1wcm90b3R5cGUtYmluZCAtLSBzYWZlXG52YXIgdW5jdXJyeVRoaXNXaXRoQmluZCA9IE5BVElWRV9CSU5EICYmIEZ1bmN0aW9uUHJvdG90eXBlLmJpbmQuYmluZChjYWxsLCBjYWxsKTtcblxubW9kdWxlLmV4cG9ydHMgPSBOQVRJVkVfQklORCA/IHVuY3VycnlUaGlzV2l0aEJpbmQgOiBmdW5jdGlvbiAoZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gY2FsbC5hcHBseShmbiwgYXJndW1lbnRzKTtcbiAgfTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xuXG52YXIgdG9TdHJpbmcgPSB1bmN1cnJ5VGhpcyh7fS50b1N0cmluZyk7XG52YXIgc3RyaW5nU2xpY2UgPSB1bmN1cnJ5VGhpcygnJy5zbGljZSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBzdHJpbmdTbGljZSh0b1N0cmluZyhpdCksIDgsIC0xKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jbGFzc29mLXJhdycpO1xuXG52YXIgJE9iamVjdCA9IE9iamVjdDtcbnZhciBzcGxpdCA9IHVuY3VycnlUaGlzKCcnLnNwbGl0KTtcblxuLy8gZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBhbmQgbm9uLWVudW1lcmFibGUgb2xkIFY4IHN0cmluZ3Ncbm1vZHVsZS5leHBvcnRzID0gZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyB0aHJvd3MgYW4gZXJyb3IgaW4gcmhpbm8sIHNlZSBodHRwczovL2dpdGh1Yi5jb20vbW96aWxsYS9yaGluby9pc3N1ZXMvMzQ2XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnMgLS0gc2FmZVxuICByZXR1cm4gISRPYmplY3QoJ3onKS5wcm9wZXJ0eUlzRW51bWVyYWJsZSgwKTtcbn0pID8gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBjbGFzc29mKGl0KSA9PT0gJ1N0cmluZycgPyBzcGxpdChpdCwgJycpIDogJE9iamVjdChpdCk7XG59IDogJE9iamVjdDtcbiIsICIndXNlIHN0cmljdCc7XG4vLyB3ZSBjYW4ndCB1c2UganVzdCBgaXQgPT0gbnVsbGAgc2luY2Ugb2YgYGRvY3VtZW50LmFsbGAgc3BlY2lhbCBjYXNlXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLUlzSFRNTEREQS1pbnRlcm5hbC1zbG90LWFlY1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGl0ID09PSBudWxsIHx8IGl0ID09PSB1bmRlZmluZWQ7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBpc051bGxPclVuZGVmaW5lZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1udWxsLW9yLXVuZGVmaW5lZCcpO1xuXG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcblxuLy8gYFJlcXVpcmVPYmplY3RDb2VyY2libGVgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1yZXF1aXJlb2JqZWN0Y29lcmNpYmxlXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoaXNOdWxsT3JVbmRlZmluZWQoaXQpKSB0aHJvdyBuZXcgJFR5cGVFcnJvcihcIkNhbid0IGNhbGwgbWV0aG9kIG9uIFwiICsgaXQpO1xuICByZXR1cm4gaXQ7XG59O1xuIiwgIid1c2Ugc3RyaWN0Jztcbi8vIHRvT2JqZWN0IHdpdGggZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBzdHJpbmdzXG52YXIgSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbmRleGVkLW9iamVjdCcpO1xudmFyIHJlcXVpcmVPYmplY3RDb2VyY2libGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBJbmRleGVkT2JqZWN0KHJlcXVpcmVPYmplY3RDb2VyY2libGUoaXQpKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1Jc0hUTUxEREEtaW50ZXJuYWwtc2xvdFxudmFyIGRvY3VtZW50QWxsID0gdHlwZW9mIGRvY3VtZW50ID09ICdvYmplY3QnICYmIGRvY3VtZW50LmFsbDtcblxuLy8gYElzQ2FsbGFibGVgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1pc2NhbGxhYmxlXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgdW5pY29ybi9uby10eXBlb2YtdW5kZWZpbmVkIC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nXG5tb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiBkb2N1bWVudEFsbCA9PSAndW5kZWZpbmVkJyAmJiBkb2N1bWVudEFsbCAhPT0gdW5kZWZpbmVkID8gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHJldHVybiB0eXBlb2YgYXJndW1lbnQgPT0gJ2Z1bmN0aW9uJyB8fCBhcmd1bWVudCA9PT0gZG9jdW1lbnRBbGw7XG59IDogZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHJldHVybiB0eXBlb2YgYXJndW1lbnQgPT0gJ2Z1bmN0aW9uJztcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PSAnb2JqZWN0JyA/IGl0ICE9PSBudWxsIDogaXNDYWxsYWJsZShpdCk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWxUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbC10aGlzJyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xuXG52YXIgYUZ1bmN0aW9uID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHJldHVybiBpc0NhbGxhYmxlKGFyZ3VtZW50KSA/IGFyZ3VtZW50IDogdW5kZWZpbmVkO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobmFtZXNwYWNlLCBtZXRob2QpIHtcbiAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPCAyID8gYUZ1bmN0aW9uKGdsb2JhbFRoaXNbbmFtZXNwYWNlXSkgOiBnbG9iYWxUaGlzW25hbWVzcGFjZV0gJiYgZ2xvYmFsVGhpc1tuYW1lc3BhY2VdW21ldGhvZF07XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSB1bmN1cnJ5VGhpcyh7fS5pc1Byb3RvdHlwZU9mKTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsVGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwtdGhpcycpO1xuXG52YXIgbmF2aWdhdG9yID0gZ2xvYmFsVGhpcy5uYXZpZ2F0b3I7XG52YXIgdXNlckFnZW50ID0gbmF2aWdhdG9yICYmIG5hdmlnYXRvci51c2VyQWdlbnQ7XG5cbm1vZHVsZS5leHBvcnRzID0gdXNlckFnZW50ID8gU3RyaW5nKHVzZXJBZ2VudCkgOiAnJztcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsVGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwtdGhpcycpO1xudmFyIHVzZXJBZ2VudCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbnZpcm9ubWVudC11c2VyLWFnZW50Jyk7XG5cbnZhciBwcm9jZXNzID0gZ2xvYmFsVGhpcy5wcm9jZXNzO1xudmFyIERlbm8gPSBnbG9iYWxUaGlzLkRlbm87XG52YXIgdmVyc2lvbnMgPSBwcm9jZXNzICYmIHByb2Nlc3MudmVyc2lvbnMgfHwgRGVubyAmJiBEZW5vLnZlcnNpb247XG52YXIgdjggPSB2ZXJzaW9ucyAmJiB2ZXJzaW9ucy52ODtcbnZhciBtYXRjaCwgdmVyc2lvbjtcblxuaWYgKHY4KSB7XG4gIG1hdGNoID0gdjguc3BsaXQoJy4nKTtcbiAgLy8gaW4gb2xkIENocm9tZSwgdmVyc2lvbnMgb2YgVjggaXNuJ3QgVjggPSBDaHJvbWUgLyAxMFxuICAvLyBidXQgdGhlaXIgY29ycmVjdCB2ZXJzaW9ucyBhcmUgbm90IGludGVyZXN0aW5nIGZvciB1c1xuICB2ZXJzaW9uID0gbWF0Y2hbMF0gPiAwICYmIG1hdGNoWzBdIDwgNCA/IDEgOiArKG1hdGNoWzBdICsgbWF0Y2hbMV0pO1xufVxuXG4vLyBCcm93c2VyRlMgTm9kZUpTIGBwcm9jZXNzYCBwb2x5ZmlsbCBpbmNvcnJlY3RseSBzZXQgYC52OGAgdG8gYDAuMGBcbi8vIHNvIGNoZWNrIGB1c2VyQWdlbnRgIGV2ZW4gaWYgYC52OGAgZXhpc3RzLCBidXQgMFxuaWYgKCF2ZXJzaW9uICYmIHVzZXJBZ2VudCkge1xuICBtYXRjaCA9IHVzZXJBZ2VudC5tYXRjaCgvRWRnZVxcLyhcXGQrKS8pO1xuICBpZiAoIW1hdGNoIHx8IG1hdGNoWzFdID49IDc0KSB7XG4gICAgbWF0Y2ggPSB1c2VyQWdlbnQubWF0Y2goL0Nocm9tZVxcLyhcXGQrKS8pO1xuICAgIGlmIChtYXRjaCkgdmVyc2lvbiA9ICttYXRjaFsxXTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHZlcnNpb247XG4iLCAiJ3VzZSBzdHJpY3QnO1xuLyogZXNsaW50LWRpc2FibGUgZXMvbm8tc3ltYm9sIC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nICovXG52YXIgVjhfVkVSU0lPTiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbnZpcm9ubWVudC12OC12ZXJzaW9uJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBnbG9iYWxUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbC10aGlzJyk7XG5cbnZhciAkU3RyaW5nID0gZ2xvYmFsVGhpcy5TdHJpbmc7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZ2V0b3ducHJvcGVydHlzeW1ib2xzIC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nXG5tb2R1bGUuZXhwb3J0cyA9ICEhT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyAmJiAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICB2YXIgc3ltYm9sID0gU3ltYm9sKCdzeW1ib2wgZGV0ZWN0aW9uJyk7XG4gIC8vIENocm9tZSAzOCBTeW1ib2wgaGFzIGluY29ycmVjdCB0b1N0cmluZyBjb252ZXJzaW9uXG4gIC8vIGBnZXQtb3duLXByb3BlcnR5LXN5bWJvbHNgIHBvbHlmaWxsIHN5bWJvbHMgY29udmVydGVkIHRvIG9iamVjdCBhcmUgbm90IFN5bWJvbCBpbnN0YW5jZXNcbiAgLy8gbmI6IERvIG5vdCBjYWxsIGBTdHJpbmdgIGRpcmVjdGx5IHRvIGF2b2lkIHRoaXMgYmVpbmcgb3B0aW1pemVkIG91dCB0byBgc3ltYm9sKycnYCB3aGljaCB3aWxsLFxuICAvLyBvZiBjb3Vyc2UsIGZhaWwuXG4gIHJldHVybiAhJFN0cmluZyhzeW1ib2wpIHx8ICEoT2JqZWN0KHN5bWJvbCkgaW5zdGFuY2VvZiBTeW1ib2wpIHx8XG4gICAgLy8gQ2hyb21lIDM4LTQwIHN5bWJvbHMgYXJlIG5vdCBpbmhlcml0ZWQgZnJvbSBET00gY29sbGVjdGlvbnMgcHJvdG90eXBlcyB0byBpbnN0YW5jZXNcbiAgICAhU3ltYm9sLnNoYW0gJiYgVjhfVkVSU0lPTiAmJiBWOF9WRVJTSU9OIDwgNDE7XG59KTtcbiIsICIndXNlIHN0cmljdCc7XG4vKiBlc2xpbnQtZGlzYWJsZSBlcy9uby1zeW1ib2wgLS0gcmVxdWlyZWQgZm9yIHRlc3RpbmcgKi9cbnZhciBOQVRJVkVfU1lNQk9MID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3N5bWJvbC1jb25zdHJ1Y3Rvci1kZXRlY3Rpb24nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBOQVRJVkVfU1lNQk9MICYmXG4gICFTeW1ib2wuc2hhbSAmJlxuICB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09ICdzeW1ib2wnO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnZXRCdWlsdEluID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1idWlsdC1pbicpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcbnZhciBpc1Byb3RvdHlwZU9mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1pcy1wcm90b3R5cGUtb2YnKTtcbnZhciBVU0VfU1lNQk9MX0FTX1VJRCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy91c2Utc3ltYm9sLWFzLXVpZCcpO1xuXG52YXIgJE9iamVjdCA9IE9iamVjdDtcblxubW9kdWxlLmV4cG9ydHMgPSBVU0VfU1lNQk9MX0FTX1VJRCA/IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gdHlwZW9mIGl0ID09ICdzeW1ib2wnO1xufSA6IGZ1bmN0aW9uIChpdCkge1xuICB2YXIgJFN5bWJvbCA9IGdldEJ1aWx0SW4oJ1N5bWJvbCcpO1xuICByZXR1cm4gaXNDYWxsYWJsZSgkU3ltYm9sKSAmJiBpc1Byb3RvdHlwZU9mKCRTeW1ib2wucHJvdG90eXBlLCAkT2JqZWN0KGl0KSk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciAkU3RyaW5nID0gU3RyaW5nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICB0cnkge1xuICAgIHJldHVybiAkU3RyaW5nKGFyZ3VtZW50KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4gJ09iamVjdCc7XG4gIH1cbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcbnZhciB0cnlUb1N0cmluZyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90cnktdG8tc3RyaW5nJyk7XG5cbnZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xuXG4vLyBgQXNzZXJ0OiBJc0NhbGxhYmxlKGFyZ3VtZW50KSBpcyB0cnVlYFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgaWYgKGlzQ2FsbGFibGUoYXJndW1lbnQpKSByZXR1cm4gYXJndW1lbnQ7XG4gIHRocm93IG5ldyAkVHlwZUVycm9yKHRyeVRvU3RyaW5nKGFyZ3VtZW50KSArICcgaXMgbm90IGEgZnVuY3Rpb24nKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGFDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hLWNhbGxhYmxlJyk7XG52YXIgaXNOdWxsT3JVbmRlZmluZWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtbnVsbC1vci11bmRlZmluZWQnKTtcblxuLy8gYEdldE1ldGhvZGAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWdldG1ldGhvZFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoViwgUCkge1xuICB2YXIgZnVuYyA9IFZbUF07XG4gIHJldHVybiBpc051bGxPclVuZGVmaW5lZChmdW5jKSA/IHVuZGVmaW5lZCA6IGFDYWxsYWJsZShmdW5jKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGNhbGwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tY2FsbCcpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcblxudmFyICRUeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG5cbi8vIGBPcmRpbmFyeVRvUHJpbWl0aXZlYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb3JkaW5hcnl0b3ByaW1pdGl2ZVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaW5wdXQsIHByZWYpIHtcbiAgdmFyIGZuLCB2YWw7XG4gIGlmIChwcmVmID09PSAnc3RyaW5nJyAmJiBpc0NhbGxhYmxlKGZuID0gaW5wdXQudG9TdHJpbmcpICYmICFpc09iamVjdCh2YWwgPSBjYWxsKGZuLCBpbnB1dCkpKSByZXR1cm4gdmFsO1xuICBpZiAoaXNDYWxsYWJsZShmbiA9IGlucHV0LnZhbHVlT2YpICYmICFpc09iamVjdCh2YWwgPSBjYWxsKGZuLCBpbnB1dCkpKSByZXR1cm4gdmFsO1xuICBpZiAocHJlZiAhPT0gJ3N0cmluZycgJiYgaXNDYWxsYWJsZShmbiA9IGlucHV0LnRvU3RyaW5nKSAmJiAhaXNPYmplY3QodmFsID0gY2FsbChmbiwgaW5wdXQpKSkgcmV0dXJuIHZhbDtcbiAgdGhyb3cgbmV3ICRUeXBlRXJyb3IoXCJDYW4ndCBjb252ZXJ0IG9iamVjdCB0byBwcmltaXRpdmUgdmFsdWVcIik7XG59O1xuIiwgIid1c2Ugc3RyaWN0Jztcbm1vZHVsZS5leHBvcnRzID0gZmFsc2U7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbFRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsLXRoaXMnKTtcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1kZWZpbmVwcm9wZXJ0eSAtLSBzYWZlXG52YXIgZGVmaW5lUHJvcGVydHkgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgdHJ5IHtcbiAgICBkZWZpbmVQcm9wZXJ0eShnbG9iYWxUaGlzLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGdsb2JhbFRoaXNba2V5XSA9IHZhbHVlO1xuICB9IHJldHVybiB2YWx1ZTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIElTX1BVUkUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtcHVyZScpO1xudmFyIGdsb2JhbFRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsLXRoaXMnKTtcbnZhciBkZWZpbmVHbG9iYWxQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZWZpbmUtZ2xvYmFsLXByb3BlcnR5Jyk7XG5cbnZhciBTSEFSRUQgPSAnX19jb3JlLWpzX3NoYXJlZF9fJztcbnZhciBzdG9yZSA9IG1vZHVsZS5leHBvcnRzID0gZ2xvYmFsVGhpc1tTSEFSRURdIHx8IGRlZmluZUdsb2JhbFByb3BlcnR5KFNIQVJFRCwge30pO1xuXG4oc3RvcmUudmVyc2lvbnMgfHwgKHN0b3JlLnZlcnNpb25zID0gW10pKS5wdXNoKHtcbiAgdmVyc2lvbjogJzMuNDkuMCcsXG4gIG1vZGU6IElTX1BVUkUgPyAncHVyZScgOiAnZ2xvYmFsJyxcbiAgY29weXJpZ2h0OiAnwqkgMjAxM+KAkzIwMjUgRGVuaXMgUHVzaGthcmV2ICh6bG9pcm9jay5ydSksIDIwMjXigJMyMDI2IENvcmVKUyBDb21wYW55IChjb3JlLWpzLmlvKS4gQWxsIHJpZ2h0cyByZXNlcnZlZC4nLFxuICBsaWNlbnNlOiAnaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvYmxvYi92My40OS4wL0xJQ0VOU0UnLFxuICBzb3VyY2U6ICdodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcydcbn0pO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBzdG9yZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQtc3RvcmUnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICByZXR1cm4gc3RvcmVba2V5XSB8fCAoc3RvcmVba2V5XSA9IHZhbHVlIHx8IHt9KTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHJlcXVpcmVPYmplY3RDb2VyY2libGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlJyk7XG5cbnZhciAkT2JqZWN0ID0gT2JqZWN0O1xuXG4vLyBgVG9PYmplY3RgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy10b29iamVjdFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgcmV0dXJuICRPYmplY3QocmVxdWlyZU9iamVjdENvZXJjaWJsZShhcmd1bWVudCkpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tb2JqZWN0Jyk7XG5cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IHVuY3VycnlUaGlzKHt9Lmhhc093blByb3BlcnR5KTtcblxuLy8gYEhhc093blByb3BlcnR5YCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtaGFzb3ducHJvcGVydHlcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtaGFzb3duIC0tIHNhZmVcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0Lmhhc093biB8fCBmdW5jdGlvbiBoYXNPd24oaXQsIGtleSkge1xuICByZXR1cm4gaGFzT3duUHJvcGVydHkodG9PYmplY3QoaXQpLCBrZXkpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG5cbnZhciBpZCA9IDA7XG52YXIgcG9zdGZpeCA9IE1hdGgucmFuZG9tKCk7XG52YXIgdG9TdHJpbmcgPSB1bmN1cnJ5VGhpcygxLjEudG9TdHJpbmcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuICdTeW1ib2woJyArIChrZXkgPT09IHVuZGVmaW5lZCA/ICcnIDoga2V5KSArICcpXycgKyB0b1N0cmluZygrK2lkICsgcG9zdGZpeCwgMzYpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsVGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwtdGhpcycpO1xudmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQnKTtcbnZhciBoYXNPd24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eScpO1xudmFyIHVpZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy91aWQnKTtcbnZhciBOQVRJVkVfU1lNQk9MID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3N5bWJvbC1jb25zdHJ1Y3Rvci1kZXRlY3Rpb24nKTtcbnZhciBVU0VfU1lNQk9MX0FTX1VJRCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy91c2Utc3ltYm9sLWFzLXVpZCcpO1xuXG52YXIgU3ltYm9sID0gZ2xvYmFsVGhpcy5TeW1ib2w7XG52YXIgV2VsbEtub3duU3ltYm9sc1N0b3JlID0gc2hhcmVkKCd3a3MnKTtcbnZhciBjcmVhdGVXZWxsS25vd25TeW1ib2wgPSBVU0VfU1lNQk9MX0FTX1VJRCA/IFN5bWJvbFsnZm9yJ10gfHwgU3ltYm9sIDogU3ltYm9sICYmIFN5bWJvbC53aXRob3V0U2V0dGVyIHx8IHVpZDtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobmFtZSkge1xuICBpZiAoIWhhc093bihXZWxsS25vd25TeW1ib2xzU3RvcmUsIG5hbWUpKSB7XG4gICAgV2VsbEtub3duU3ltYm9sc1N0b3JlW25hbWVdID0gTkFUSVZFX1NZTUJPTCAmJiBoYXNPd24oU3ltYm9sLCBuYW1lKVxuICAgICAgPyBTeW1ib2xbbmFtZV1cbiAgICAgIDogY3JlYXRlV2VsbEtub3duU3ltYm9sKCdTeW1ib2wuJyArIG5hbWUpO1xuICB9IHJldHVybiBXZWxsS25vd25TeW1ib2xzU3RvcmVbbmFtZV07XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBjYWxsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWNhbGwnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcbnZhciBpc1N5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1zeW1ib2wnKTtcbnZhciBnZXRNZXRob2QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LW1ldGhvZCcpO1xudmFyIG9yZGluYXJ5VG9QcmltaXRpdmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb3JkaW5hcnktdG8tcHJpbWl0aXZlJyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG5cbnZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xudmFyIFRPX1BSSU1JVElWRSA9IHdlbGxLbm93blN5bWJvbCgndG9QcmltaXRpdmUnKTtcblxuLy8gYFRvUHJpbWl0aXZlYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtdG9wcmltaXRpdmVcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGlucHV0LCBwcmVmKSB7XG4gIGlmICghaXNPYmplY3QoaW5wdXQpIHx8IGlzU3ltYm9sKGlucHV0KSkgcmV0dXJuIGlucHV0O1xuICB2YXIgZXhvdGljVG9QcmltID0gZ2V0TWV0aG9kKGlucHV0LCBUT19QUklNSVRJVkUpO1xuICB2YXIgcmVzdWx0O1xuICBpZiAoZXhvdGljVG9QcmltKSB7XG4gICAgaWYgKHByZWYgPT09IHVuZGVmaW5lZCkgcHJlZiA9ICdkZWZhdWx0JztcbiAgICByZXN1bHQgPSBjYWxsKGV4b3RpY1RvUHJpbSwgaW5wdXQsIHByZWYpO1xuICAgIGlmICghaXNPYmplY3QocmVzdWx0KSB8fCBpc1N5bWJvbChyZXN1bHQpKSByZXR1cm4gcmVzdWx0O1xuICAgIHRocm93IG5ldyAkVHlwZUVycm9yKFwiQ2FuJ3QgY29udmVydCBvYmplY3QgdG8gcHJpbWl0aXZlIHZhbHVlXCIpO1xuICB9XG4gIGlmIChwcmVmID09PSB1bmRlZmluZWQpIHByZWYgPSAnbnVtYmVyJztcbiAgcmV0dXJuIG9yZGluYXJ5VG9QcmltaXRpdmUoaW5wdXQsIHByZWYpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tcHJpbWl0aXZlJyk7XG52YXIgaXNTeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtc3ltYm9sJyk7XG5cbi8vIGBUb1Byb3BlcnR5S2V5YCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtdG9wcm9wZXJ0eWtleVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgdmFyIGtleSA9IHRvUHJpbWl0aXZlKGFyZ3VtZW50LCAnc3RyaW5nJyk7XG4gIHJldHVybiBpc1N5bWJvbChrZXkpID8ga2V5IDoga2V5ICsgJyc7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWxUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbC10aGlzJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG5cbnZhciBkb2N1bWVudCA9IGdsb2JhbFRoaXMuZG9jdW1lbnQ7XG4vLyB0eXBlb2YgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCBpcyAnb2JqZWN0JyBpbiBvbGQgSUVcbnZhciBFWElTVFMgPSBpc09iamVjdChkb2N1bWVudCkgJiYgaXNPYmplY3QoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBFWElTVFMgPyBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGl0KSA6IHt9O1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGNyZWF0ZUVsZW1lbnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZG9jdW1lbnQtY3JlYXRlLWVsZW1lbnQnKTtcblxuLy8gVGhhbmtzIHRvIElFOCBmb3IgaXRzIGZ1bm55IGRlZmluZVByb3BlcnR5XG5tb2R1bGUuZXhwb3J0cyA9ICFERVNDUklQVE9SUyAmJiAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWRlZmluZXByb3BlcnR5IC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nXG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoY3JlYXRlRWxlbWVudCgnZGl2JyksICdhJywge1xuICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gNzsgfVxuICB9KS5hICE9PSA3O1xufSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgY2FsbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1jYWxsJyk7XG52YXIgcHJvcGVydHlJc0VudW1lcmFibGVNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LXByb3BlcnR5LWlzLWVudW1lcmFibGUnKTtcbnZhciBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5LWRlc2NyaXB0b3InKTtcbnZhciB0b0luZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QnKTtcbnZhciB0b1Byb3BlcnR5S2V5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXByb3BlcnR5LWtleScpO1xudmFyIGhhc093biA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMtb3duLXByb3BlcnR5Jyk7XG52YXIgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaWU4LWRvbS1kZWZpbmUnKTtcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1nZXRvd25wcm9wZXJ0eWRlc2NyaXB0b3IgLS0gc2FmZVxudmFyICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4vLyBgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcmAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5nZXRvd25wcm9wZXJ0eWRlc2NyaXB0b3JcbmV4cG9ydHMuZiA9IERFU0NSSVBUT1JTID8gJGdldE93blByb3BlcnR5RGVzY3JpcHRvciA6IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKSB7XG4gIE8gPSB0b0luZGV4ZWRPYmplY3QoTyk7XG4gIFAgPSB0b1Byb3BlcnR5S2V5KFApO1xuICBpZiAoSUU4X0RPTV9ERUZJTkUpIHRyeSB7XG4gICAgcmV0dXJuICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGVtcHR5ICovIH1cbiAgaWYgKGhhc093bihPLCBQKSkgcmV0dXJuIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvcighY2FsbChwcm9wZXJ0eUlzRW51bWVyYWJsZU1vZHVsZS5mLCBPLCBQKSwgT1tQXSk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG5cbi8vIFY4IH4gQ2hyb21lIDM2LVxuLy8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzMzNFxubW9kdWxlLmV4cG9ydHMgPSBERVNDUklQVE9SUyAmJiBmYWlscyhmdW5jdGlvbiAoKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZGVmaW5lcHJvcGVydHkgLS0gcmVxdWlyZWQgZm9yIHRlc3RpbmdcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH0sICdwcm90b3R5cGUnLCB7XG4gICAgdmFsdWU6IDQyLFxuICAgIHdyaXRhYmxlOiBmYWxzZVxuICB9KS5wcm90b3R5cGUgIT09IDQyO1xufSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xuXG52YXIgJFN0cmluZyA9IFN0cmluZztcbnZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xuXG4vLyBgQXNzZXJ0OiBUeXBlKGFyZ3VtZW50KSBpcyBPYmplY3RgXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICBpZiAoaXNPYmplY3QoYXJndW1lbnQpKSByZXR1cm4gYXJndW1lbnQ7XG4gIHRocm93IG5ldyAkVHlwZUVycm9yKCRTdHJpbmcoYXJndW1lbnQpICsgJyBpcyBub3QgYW4gb2JqZWN0Jyk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2llOC1kb20tZGVmaW5lJyk7XG52YXIgVjhfUFJPVE9UWVBFX0RFRklORV9CVUcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdjgtcHJvdG90eXBlLWRlZmluZS1idWcnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcbnZhciB0b1Byb3BlcnR5S2V5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXByb3BlcnR5LWtleScpO1xuXG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZGVmaW5lcHJvcGVydHkgLS0gc2FmZVxudmFyICRkZWZpbmVQcm9wZXJ0eSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZ2V0b3ducHJvcGVydHlkZXNjcmlwdG9yIC0tIHNhZmVcbnZhciAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbnZhciBFTlVNRVJBQkxFID0gJ2VudW1lcmFibGUnO1xudmFyIENPTkZJR1VSQUJMRSA9ICdjb25maWd1cmFibGUnO1xudmFyIFdSSVRBQkxFID0gJ3dyaXRhYmxlJztcblxuLy8gYE9iamVjdC5kZWZpbmVQcm9wZXJ0eWAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5kZWZpbmVwcm9wZXJ0eVxuZXhwb3J0cy5mID0gREVTQ1JJUFRPUlMgPyBWOF9QUk9UT1RZUEVfREVGSU5FX0JVRyA/IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpIHtcbiAgYW5PYmplY3QoTyk7XG4gIFAgPSB0b1Byb3BlcnR5S2V5KFApO1xuICBhbk9iamVjdChBdHRyaWJ1dGVzKTtcbiAgaWYgKHR5cGVvZiBPID09PSAnZnVuY3Rpb24nICYmIFAgPT09ICdwcm90b3R5cGUnICYmICd2YWx1ZScgaW4gQXR0cmlidXRlcyAmJiBXUklUQUJMRSBpbiBBdHRyaWJ1dGVzICYmICFBdHRyaWJ1dGVzW1dSSVRBQkxFXSkge1xuICAgIHZhciBjdXJyZW50ID0gJGdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKTtcbiAgICBpZiAoY3VycmVudCAmJiBjdXJyZW50W1dSSVRBQkxFXSkge1xuICAgICAgT1tQXSA9IEF0dHJpYnV0ZXMudmFsdWU7XG4gICAgICBBdHRyaWJ1dGVzID0ge1xuICAgICAgICBjb25maWd1cmFibGU6IENPTkZJR1VSQUJMRSBpbiBBdHRyaWJ1dGVzID8gQXR0cmlidXRlc1tDT05GSUdVUkFCTEVdIDogY3VycmVudFtDT05GSUdVUkFCTEVdLFxuICAgICAgICBlbnVtZXJhYmxlOiBFTlVNRVJBQkxFIGluIEF0dHJpYnV0ZXMgPyBBdHRyaWJ1dGVzW0VOVU1FUkFCTEVdIDogY3VycmVudFtFTlVNRVJBQkxFXSxcbiAgICAgICAgd3JpdGFibGU6IGZhbHNlXG4gICAgICB9O1xuICAgIH1cbiAgfSByZXR1cm4gJGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpO1xufSA6ICRkZWZpbmVQcm9wZXJ0eSA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpIHtcbiAgYW5PYmplY3QoTyk7XG4gIFAgPSB0b1Byb3BlcnR5S2V5KFApO1xuICBhbk9iamVjdChBdHRyaWJ1dGVzKTtcbiAgaWYgKElFOF9ET01fREVGSU5FKSB0cnkge1xuICAgIHJldHVybiAkZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcyk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGVtcHR5ICovIH1cbiAgaWYgKCdnZXQnIGluIEF0dHJpYnV0ZXMgfHwgJ3NldCcgaW4gQXR0cmlidXRlcykgdGhyb3cgbmV3ICRUeXBlRXJyb3IoJ0FjY2Vzc29ycyBub3Qgc3VwcG9ydGVkJyk7XG4gIGlmICgndmFsdWUnIGluIEF0dHJpYnV0ZXMpIE9bUF0gPSBBdHRyaWJ1dGVzLnZhbHVlO1xuICByZXR1cm4gTztcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgZGVmaW5lUHJvcGVydHlNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpO1xudmFyIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHktZGVzY3JpcHRvcicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IERFU0NSSVBUT1JTID8gZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICByZXR1cm4gZGVmaW5lUHJvcGVydHlNb2R1bGUuZihvYmplY3QsIGtleSwgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yKDEsIHZhbHVlKSk7XG59IDogZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICBvYmplY3Rba2V5XSA9IHZhbHVlO1xuICByZXR1cm4gb2JqZWN0O1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBoYXNPd24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eScpO1xuXG52YXIgRnVuY3Rpb25Qcm90b3R5cGUgPSBGdW5jdGlvbi5wcm90b3R5cGU7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5ZGVzY3JpcHRvciAtLSBzYWZlXG52YXIgZ2V0RGVzY3JpcHRvciA9IERFU0NSSVBUT1JTICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbnZhciBFWElTVFMgPSBoYXNPd24oRnVuY3Rpb25Qcm90b3R5cGUsICduYW1lJyk7XG4vLyBhZGRpdGlvbmFsIHByb3RlY3Rpb24gZnJvbSBtaW5pZmllZCAvIG1hbmdsZWQgLyBkcm9wcGVkIGZ1bmN0aW9uIG5hbWVzXG52YXIgUFJPUEVSID0gRVhJU1RTICYmIGZ1bmN0aW9uIHNvbWV0aGluZygpIHsgLyogZW1wdHkgKi8gfS5uYW1lID09PSAnc29tZXRoaW5nJztcbnZhciBDT05GSUdVUkFCTEUgPSBFWElTVFMgJiYgKCFERVNDUklQVE9SUyB8fCAoREVTQ1JJUFRPUlMgJiYgZ2V0RGVzY3JpcHRvcihGdW5jdGlvblByb3RvdHlwZSwgJ25hbWUnKS5jb25maWd1cmFibGUpKTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIEVYSVNUUzogRVhJU1RTLFxuICBQUk9QRVI6IFBST1BFUixcbiAgQ09ORklHVVJBQkxFOiBDT05GSUdVUkFCTEVcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcbnZhciBzdG9yZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQtc3RvcmUnKTtcblxudmFyIGZ1bmN0aW9uVG9TdHJpbmcgPSB1bmN1cnJ5VGhpcyhGdW5jdGlvbi50b1N0cmluZyk7XG5cbi8vIHRoaXMgaGVscGVyIGJyb2tlbiBpbiBgY29yZS1qc0AzLjQuMS0zLjQuNGAsIHNvIHdlIGNhbid0IHVzZSBgc2hhcmVkYCBoZWxwZXJcbmlmICghaXNDYWxsYWJsZShzdG9yZS5pbnNwZWN0U291cmNlKSkge1xuICBzdG9yZS5pbnNwZWN0U291cmNlID0gZnVuY3Rpb24gKGl0KSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uVG9TdHJpbmcoaXQpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0b3JlLmluc3BlY3RTb3VyY2U7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbFRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsLXRoaXMnKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG5cbnZhciBXZWFrTWFwID0gZ2xvYmFsVGhpcy5XZWFrTWFwO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzQ2FsbGFibGUoV2Vha01hcCkgJiYgL25hdGl2ZSBjb2RlLy50ZXN0KFN0cmluZyhXZWFrTWFwKSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQnKTtcbnZhciB1aWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdWlkJyk7XG5cbnZhciBrZXlzID0gc2hhcmVkKCdrZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4ga2V5c1trZXldIHx8IChrZXlzW2tleV0gPSB1aWQoa2V5KSk7XG59O1xuIiwgIid1c2Ugc3RyaWN0Jztcbm1vZHVsZS5leHBvcnRzID0ge307XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIE5BVElWRV9XRUFLX01BUCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWFrLW1hcC1iYXNpYy1kZXRlY3Rpb24nKTtcbnZhciBnbG9iYWxUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbC10aGlzJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG52YXIgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1ub24tZW51bWVyYWJsZS1wcm9wZXJ0eScpO1xudmFyIGhhc093biA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMtb3duLXByb3BlcnR5Jyk7XG52YXIgc2hhcmVkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZC1zdG9yZScpO1xudmFyIHNoYXJlZEtleSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQta2V5Jyk7XG52YXIgaGlkZGVuS2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oaWRkZW4ta2V5cycpO1xuXG52YXIgT0JKRUNUX0FMUkVBRFlfSU5JVElBTElaRUQgPSAnT2JqZWN0IGFscmVhZHkgaW5pdGlhbGl6ZWQnO1xudmFyIFR5cGVFcnJvciA9IGdsb2JhbFRoaXMuVHlwZUVycm9yO1xudmFyIFdlYWtNYXAgPSBnbG9iYWxUaGlzLldlYWtNYXA7XG52YXIgc2V0LCBnZXQsIGhhcztcblxudmFyIGVuZm9yY2UgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGhhcyhpdCkgPyBnZXQoaXQpIDogc2V0KGl0LCB7fSk7XG59O1xuXG52YXIgZ2V0dGVyRm9yID0gZnVuY3Rpb24gKFRZUEUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChpdCkge1xuICAgIHZhciBzdGF0ZTtcbiAgICBpZiAoIWlzT2JqZWN0KGl0KSB8fCAoc3RhdGUgPSBnZXQoaXQpKS50eXBlICE9PSBUWVBFKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdJbmNvbXBhdGlibGUgcmVjZWl2ZXIsICcgKyBUWVBFICsgJyByZXF1aXJlZCcpO1xuICAgIH0gcmV0dXJuIHN0YXRlO1xuICB9O1xufTtcblxuaWYgKE5BVElWRV9XRUFLX01BUCB8fCBzaGFyZWQuc3RhdGUpIHtcbiAgdmFyIHN0b3JlID0gc2hhcmVkLnN0YXRlIHx8IChzaGFyZWQuc3RhdGUgPSBuZXcgV2Vha01hcCgpKTtcbiAgLyogZXNsaW50LWRpc2FibGUgbm8tc2VsZi1hc3NpZ24gLS0gcHJvdG90eXBlIG1ldGhvZHMgcHJvdGVjdGlvbiAqL1xuICBzdG9yZS5nZXQgPSBzdG9yZS5nZXQ7XG4gIHN0b3JlLmhhcyA9IHN0b3JlLmhhcztcbiAgc3RvcmUuc2V0ID0gc3RvcmUuc2V0O1xuICAvKiBlc2xpbnQtZW5hYmxlIG5vLXNlbGYtYXNzaWduIC0tIHByb3RvdHlwZSBtZXRob2RzIHByb3RlY3Rpb24gKi9cbiAgc2V0ID0gZnVuY3Rpb24gKGl0LCBtZXRhZGF0YSkge1xuICAgIGlmIChzdG9yZS5oYXMoaXQpKSB0aHJvdyBuZXcgVHlwZUVycm9yKE9CSkVDVF9BTFJFQURZX0lOSVRJQUxJWkVEKTtcbiAgICBtZXRhZGF0YS5mYWNhZGUgPSBpdDtcbiAgICBzdG9yZS5zZXQoaXQsIG1ldGFkYXRhKTtcbiAgICByZXR1cm4gbWV0YWRhdGE7XG4gIH07XG4gIGdldCA9IGZ1bmN0aW9uIChpdCkge1xuICAgIHJldHVybiBzdG9yZS5nZXQoaXQpIHx8IHt9O1xuICB9O1xuICBoYXMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgICByZXR1cm4gc3RvcmUuaGFzKGl0KTtcbiAgfTtcbn0gZWxzZSB7XG4gIHZhciBTVEFURSA9IHNoYXJlZEtleSgnc3RhdGUnKTtcbiAgaGlkZGVuS2V5c1tTVEFURV0gPSB0cnVlO1xuICBzZXQgPSBmdW5jdGlvbiAoaXQsIG1ldGFkYXRhKSB7XG4gICAgaWYgKGhhc093bihpdCwgU1RBVEUpKSB0aHJvdyBuZXcgVHlwZUVycm9yKE9CSkVDVF9BTFJFQURZX0lOSVRJQUxJWkVEKTtcbiAgICBtZXRhZGF0YS5mYWNhZGUgPSBpdDtcbiAgICBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkoaXQsIFNUQVRFLCBtZXRhZGF0YSk7XG4gICAgcmV0dXJuIG1ldGFkYXRhO1xuICB9O1xuICBnZXQgPSBmdW5jdGlvbiAoaXQpIHtcbiAgICByZXR1cm4gaGFzT3duKGl0LCBTVEFURSkgPyBpdFtTVEFURV0gOiB7fTtcbiAgfTtcbiAgaGFzID0gZnVuY3Rpb24gKGl0KSB7XG4gICAgcmV0dXJuIGhhc093bihpdCwgU1RBVEUpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgc2V0OiBzZXQsXG4gIGdldDogZ2V0LFxuICBoYXM6IGhhcyxcbiAgZW5mb3JjZTogZW5mb3JjZSxcbiAgZ2V0dGVyRm9yOiBnZXR0ZXJGb3Jcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xudmFyIGhhc093biA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMtb3duLXByb3BlcnR5Jyk7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBDT05GSUdVUkFCTEVfRlVOQ1RJT05fTkFNRSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1uYW1lJykuQ09ORklHVVJBQkxFO1xudmFyIGluc3BlY3RTb3VyY2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaW5zcGVjdC1zb3VyY2UnKTtcbnZhciBJbnRlcm5hbFN0YXRlTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ludGVybmFsLXN0YXRlJyk7XG5cbnZhciBlbmZvcmNlSW50ZXJuYWxTdGF0ZSA9IEludGVybmFsU3RhdGVNb2R1bGUuZW5mb3JjZTtcbnZhciBnZXRJbnRlcm5hbFN0YXRlID0gSW50ZXJuYWxTdGF0ZU1vZHVsZS5nZXQ7XG52YXIgJFN0cmluZyA9IFN0cmluZztcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZGVmaW5lcHJvcGVydHkgLS0gc2FmZVxudmFyIGRlZmluZVByb3BlcnR5ID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xudmFyIHN0cmluZ1NsaWNlID0gdW5jdXJyeVRoaXMoJycuc2xpY2UpO1xudmFyIHJlcGxhY2UgPSB1bmN1cnJ5VGhpcygnJy5yZXBsYWNlKTtcbnZhciBqb2luID0gdW5jdXJyeVRoaXMoW10uam9pbik7XG5cbnZhciBDT05GSUdVUkFCTEVfTEVOR1RIID0gREVTQ1JJUFRPUlMgJiYgIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGRlZmluZVByb3BlcnR5KGZ1bmN0aW9uICgpIHsgLyogZW1wdHkgKi8gfSwgJ2xlbmd0aCcsIHsgdmFsdWU6IDggfSkubGVuZ3RoICE9PSA4O1xufSk7XG5cbnZhciBURU1QTEFURSA9IFN0cmluZyhTdHJpbmcpLnNwbGl0KCdTdHJpbmcnKTtcblxudmFyIG1ha2VCdWlsdEluID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodmFsdWUsIG5hbWUsIG9wdGlvbnMpIHtcbiAgaWYgKHN0cmluZ1NsaWNlKCRTdHJpbmcobmFtZSksIDAsIDcpID09PSAnU3ltYm9sKCcpIHtcbiAgICBuYW1lID0gJ1snICsgcmVwbGFjZSgkU3RyaW5nKG5hbWUpLCAvXlN5bWJvbFxcKChbXildKilcXCkuKiQvLCAnJDEnKSArICddJztcbiAgfVxuICBpZiAob3B0aW9ucyAmJiBvcHRpb25zLmdldHRlcikgbmFtZSA9ICdnZXQgJyArIG5hbWU7XG4gIGlmIChvcHRpb25zICYmIG9wdGlvbnMuc2V0dGVyKSBuYW1lID0gJ3NldCAnICsgbmFtZTtcbiAgaWYgKCFoYXNPd24odmFsdWUsICduYW1lJykgfHwgKENPTkZJR1VSQUJMRV9GVU5DVElPTl9OQU1FICYmIHZhbHVlLm5hbWUgIT09IG5hbWUpKSB7XG4gICAgaWYgKERFU0NSSVBUT1JTKSBkZWZpbmVQcm9wZXJ0eSh2YWx1ZSwgJ25hbWUnLCB7IHZhbHVlOiBuYW1lLCBjb25maWd1cmFibGU6IHRydWUgfSk7XG4gICAgZWxzZSB2YWx1ZS5uYW1lID0gbmFtZTtcbiAgfVxuICBpZiAoQ09ORklHVVJBQkxFX0xFTkdUSCAmJiBvcHRpb25zICYmIGhhc093bihvcHRpb25zLCAnYXJpdHknKSAmJiB2YWx1ZS5sZW5ndGggIT09IG9wdGlvbnMuYXJpdHkpIHtcbiAgICBkZWZpbmVQcm9wZXJ0eSh2YWx1ZSwgJ2xlbmd0aCcsIHsgdmFsdWU6IG9wdGlvbnMuYXJpdHkgfSk7XG4gIH1cbiAgdHJ5IHtcbiAgICBpZiAob3B0aW9ucyAmJiBoYXNPd24ob3B0aW9ucywgJ2NvbnN0cnVjdG9yJykgJiYgb3B0aW9ucy5jb25zdHJ1Y3Rvcikge1xuICAgICAgaWYgKERFU0NSSVBUT1JTKSBkZWZpbmVQcm9wZXJ0eSh2YWx1ZSwgJ3Byb3RvdHlwZScsIHsgd3JpdGFibGU6IGZhbHNlIH0pO1xuICAgIC8vIGluIFY4IH4gQ2hyb21lIDUzLCBwcm90b3R5cGVzIG9mIHNvbWUgbWV0aG9kcywgbGlrZSBgQXJyYXkucHJvdG90eXBlLnZhbHVlc2AsIGFyZSBub24td3JpdGFibGVcbiAgICB9IGVsc2UgaWYgKHZhbHVlLnByb3RvdHlwZSkgdmFsdWUucHJvdG90eXBlID0gdW5kZWZpbmVkO1xuICB9IGNhdGNoIChlcnJvcikgeyAvKiBlbXB0eSAqLyB9XG4gIHZhciBzdGF0ZSA9IGVuZm9yY2VJbnRlcm5hbFN0YXRlKHZhbHVlKTtcbiAgaWYgKCFoYXNPd24oc3RhdGUsICdzb3VyY2UnKSkge1xuICAgIHN0YXRlLnNvdXJjZSA9IGpvaW4oVEVNUExBVEUsIHR5cGVvZiBuYW1lID09ICdzdHJpbmcnID8gbmFtZSA6ICcnKTtcbiAgfSByZXR1cm4gdmFsdWU7XG59O1xuXG4vLyBhZGQgZmFrZSBGdW5jdGlvbiN0b1N0cmluZyBmb3IgY29ycmVjdCB3b3JrIHdyYXBwZWQgbWV0aG9kcyAvIGNvbnN0cnVjdG9ycyB3aXRoIG1ldGhvZHMgbGlrZSBMb0Rhc2ggaXNOYXRpdmVcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1leHRlbmQtbmF0aXZlIC0tIHJlcXVpcmVkXG5GdW5jdGlvbi5wcm90b3R5cGUudG9TdHJpbmcgPSBtYWtlQnVpbHRJbihmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgcmV0dXJuIGlzQ2FsbGFibGUodGhpcykgJiYgZ2V0SW50ZXJuYWxTdGF0ZSh0aGlzKS5zb3VyY2UgfHwgaW5zcGVjdFNvdXJjZSh0aGlzKTtcbn0sICd0b1N0cmluZycpO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgZGVmaW5lUHJvcGVydHlNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpO1xudmFyIG1ha2VCdWlsdEluID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL21ha2UtYnVpbHQtaW4nKTtcbnZhciBkZWZpbmVHbG9iYWxQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZWZpbmUtZ2xvYmFsLXByb3BlcnR5Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKE8sIGtleSwgdmFsdWUsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSBvcHRpb25zID0ge307XG4gIHZhciBzaW1wbGUgPSBvcHRpb25zLmVudW1lcmFibGU7XG4gIHZhciBuYW1lID0gb3B0aW9ucy5uYW1lICE9PSB1bmRlZmluZWQgPyBvcHRpb25zLm5hbWUgOiBrZXk7XG4gIGlmIChpc0NhbGxhYmxlKHZhbHVlKSkgbWFrZUJ1aWx0SW4odmFsdWUsIG5hbWUsIG9wdGlvbnMpO1xuICBpZiAob3B0aW9ucy5nbG9iYWwpIHtcbiAgICBpZiAoc2ltcGxlKSBPW2tleV0gPSB2YWx1ZTtcbiAgICBlbHNlIGRlZmluZUdsb2JhbFByb3BlcnR5KGtleSwgdmFsdWUpO1xuICB9IGVsc2Uge1xuICAgIHRyeSB7XG4gICAgICBpZiAoIW9wdGlvbnMudW5zYWZlKSBkZWxldGUgT1trZXldO1xuICAgICAgZWxzZSBpZiAoT1trZXldKSBzaW1wbGUgPSB0cnVlO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGVtcHR5ICovIH1cbiAgICBpZiAoc2ltcGxlKSBPW2tleV0gPSB2YWx1ZTtcbiAgICBlbHNlIGRlZmluZVByb3BlcnR5TW9kdWxlLmYoTywga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogIW9wdGlvbnMubm9uQ29uZmlndXJhYmxlLFxuICAgICAgd3JpdGFibGU6ICFvcHRpb25zLm5vbldyaXRhYmxlXG4gICAgfSk7XG4gIH0gcmV0dXJuIE87XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBjZWlsID0gTWF0aC5jZWlsO1xudmFyIGZsb29yID0gTWF0aC5mbG9vcjtcblxuLy8gYE1hdGgudHJ1bmNgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1tYXRoLnRydW5jXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tbWF0aC10cnVuYyAtLSBzYWZlXG5tb2R1bGUuZXhwb3J0cyA9IE1hdGgudHJ1bmMgfHwgZnVuY3Rpb24gdHJ1bmMoeCkge1xuICB2YXIgbiA9ICt4O1xuICByZXR1cm4gKG4gPiAwID8gZmxvb3IgOiBjZWlsKShuKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHRydW5jID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL21hdGgtdHJ1bmMnKTtcblxuLy8gYFRvSW50ZWdlck9ySW5maW5pdHlgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy10b2ludGVnZXJvcmluZmluaXR5XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICB2YXIgbnVtYmVyID0gK2FyZ3VtZW50O1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlIC0tIE5hTiBjaGVja1xuICByZXR1cm4gbnVtYmVyICE9PSBudW1iZXIgfHwgbnVtYmVyID09PSAwID8gMCA6IHRydW5jKG51bWJlcik7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB0b0ludGVnZXJPckluZmluaXR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWludGVnZXItb3ItaW5maW5pdHknKTtcblxudmFyIG1heCA9IE1hdGgubWF4O1xudmFyIG1pbiA9IE1hdGgubWluO1xuXG4vLyBIZWxwZXIgZm9yIGEgcG9wdWxhciByZXBlYXRpbmcgY2FzZSBvZiB0aGUgc3BlYzpcbi8vIExldCBpbnRlZ2VyIGJlID8gVG9JbnRlZ2VyKGluZGV4KS5cbi8vIElmIGludGVnZXIgPCAwLCBsZXQgcmVzdWx0IGJlIG1heCgobGVuZ3RoICsgaW50ZWdlciksIDApOyBlbHNlIGxldCByZXN1bHQgYmUgbWluKGludGVnZXIsIGxlbmd0aCkuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpbmRleCwgbGVuZ3RoKSB7XG4gIHZhciBpbnRlZ2VyID0gdG9JbnRlZ2VyT3JJbmZpbml0eShpbmRleCk7XG4gIHJldHVybiBpbnRlZ2VyIDwgMCA/IG1heChpbnRlZ2VyICsgbGVuZ3RoLCAwKSA6IG1pbihpbnRlZ2VyLCBsZW5ndGgpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdG9JbnRlZ2VyT3JJbmZpbml0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbnRlZ2VyLW9yLWluZmluaXR5Jyk7XG5cbnZhciBtaW4gPSBNYXRoLm1pbjtcblxuLy8gYFRvTGVuZ3RoYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtdG9sZW5ndGhcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHZhciBsZW4gPSB0b0ludGVnZXJPckluZmluaXR5KGFyZ3VtZW50KTtcbiAgcmV0dXJuIGxlbiA+IDAgPyBtaW4obGVuLCAweDFGRkZGRkZGRkZGRkZGKSA6IDA7IC8vIDIgKiogNTMgLSAxID09IDkwMDcxOTkyNTQ3NDA5OTFcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWxlbmd0aCcpO1xuXG4vLyBgTGVuZ3RoT2ZBcnJheUxpa2VgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1sZW5ndGhvZmFycmF5bGlrZVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiB0b0xlbmd0aChvYmoubGVuZ3RoKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHRvSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbmRleGVkLW9iamVjdCcpO1xudmFyIHRvQWJzb2x1dGVJbmRleCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1hYnNvbHV0ZS1pbmRleCcpO1xudmFyIGxlbmd0aE9mQXJyYXlMaWtlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2xlbmd0aC1vZi1hcnJheS1saWtlJyk7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUueyBpbmRleE9mLCBpbmNsdWRlcyB9YCBtZXRob2RzIGltcGxlbWVudGF0aW9uXG52YXIgY3JlYXRlTWV0aG9kID0gZnVuY3Rpb24gKElTX0lOQ0xVREVTKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoJHRoaXMsIGVsLCBmcm9tSW5kZXgpIHtcbiAgICB2YXIgTyA9IHRvSW5kZXhlZE9iamVjdCgkdGhpcyk7XG4gICAgdmFyIGxlbmd0aCA9IGxlbmd0aE9mQXJyYXlMaWtlKE8pO1xuICAgIGlmIChsZW5ndGggPT09IDApIHJldHVybiAhSVNfSU5DTFVERVMgJiYgLTE7XG4gICAgdmFyIGluZGV4ID0gdG9BYnNvbHV0ZUluZGV4KGZyb21JbmRleCwgbGVuZ3RoKTtcbiAgICB2YXIgdmFsdWU7XG4gICAgLy8gQXJyYXkjaW5jbHVkZXMgdXNlcyBTYW1lVmFsdWVaZXJvIGVxdWFsaXR5IGFsZ29yaXRobVxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmUgLS0gTmFOIGNoZWNrXG4gICAgaWYgKElTX0lOQ0xVREVTICYmIGVsICE9PSBlbCkgd2hpbGUgKGxlbmd0aCA+IGluZGV4KSB7XG4gICAgICB2YWx1ZSA9IE9baW5kZXgrK107XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlIC0tIE5hTiBjaGVja1xuICAgICAgaWYgKHZhbHVlICE9PSB2YWx1ZSkgcmV0dXJuIHRydWU7XG4gICAgLy8gQXJyYXkjaW5kZXhPZiBpZ25vcmVzIGhvbGVzLCBBcnJheSNpbmNsdWRlcyAtIG5vdFxuICAgIH0gZWxzZSBmb3IgKDtsZW5ndGggPiBpbmRleDsgaW5kZXgrKykge1xuICAgICAgaWYgKChJU19JTkNMVURFUyB8fCBpbmRleCBpbiBPKSAmJiBPW2luZGV4XSA9PT0gZWwpIHJldHVybiBJU19JTkNMVURFUyB8fCBpbmRleCB8fCAwO1xuICAgIH0gcmV0dXJuICFJU19JTkNMVURFUyAmJiAtMTtcbiAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAvLyBgQXJyYXkucHJvdG90eXBlLmluY2x1ZGVzYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuaW5jbHVkZXNcbiAgaW5jbHVkZXM6IGNyZWF0ZU1ldGhvZCh0cnVlKSxcbiAgLy8gYEFycmF5LnByb3RvdHlwZS5pbmRleE9mYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuaW5kZXhvZlxuICBpbmRleE9mOiBjcmVhdGVNZXRob2QoZmFsc2UpXG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcbnZhciBoYXNPd24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eScpO1xudmFyIHRvSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbmRleGVkLW9iamVjdCcpO1xudmFyIGluZGV4T2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktaW5jbHVkZXMnKS5pbmRleE9mO1xudmFyIGhpZGRlbktleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGlkZGVuLWtleXMnKTtcblxudmFyIHB1c2ggPSB1bmN1cnJ5VGhpcyhbXS5wdXNoKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob2JqZWN0LCBuYW1lcykge1xuICB2YXIgTyA9IHRvSW5kZXhlZE9iamVjdChvYmplY3QpO1xuICB2YXIgaSA9IDA7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgdmFyIGtleTtcbiAgZm9yIChrZXkgaW4gTykgIWhhc093bihoaWRkZW5LZXlzLCBrZXkpICYmIGhhc093bihPLCBrZXkpICYmIHB1c2gocmVzdWx0LCBrZXkpO1xuICAvLyBEb24ndCBlbnVtIGJ1ZyAmIGhpZGRlbiBrZXlzXG4gIHdoaWxlIChuYW1lcy5sZW5ndGggPiBpKSBpZiAoaGFzT3duKE8sIGtleSA9IG5hbWVzW2krK10pKSB7XG4gICAgfmluZGV4T2YocmVzdWx0LCBrZXkpIHx8IHB1c2gocmVzdWx0LCBrZXkpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuIiwgIid1c2Ugc3RyaWN0Jztcbi8vIElFOC0gZG9uJ3QgZW51bSBidWcga2V5c1xubW9kdWxlLmV4cG9ydHMgPSBbXG4gICdjb25zdHJ1Y3RvcicsXG4gICdoYXNPd25Qcm9wZXJ0eScsXG4gICdpc1Byb3RvdHlwZU9mJyxcbiAgJ3Byb3BlcnR5SXNFbnVtZXJhYmxlJyxcbiAgJ3RvTG9jYWxlU3RyaW5nJyxcbiAgJ3RvU3RyaW5nJyxcbiAgJ3ZhbHVlT2YnXG5dO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBpbnRlcm5hbE9iamVjdEtleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWtleXMtaW50ZXJuYWwnKTtcbnZhciBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbnVtLWJ1Zy1rZXlzJyk7XG5cbnZhciBoaWRkZW5LZXlzID0gZW51bUJ1Z0tleXMuY29uY2F0KCdsZW5ndGgnLCAncHJvdG90eXBlJyk7XG5cbi8vIGBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lc2AgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5nZXRvd25wcm9wZXJ0eW5hbWVzXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5bmFtZXMgLS0gc2FmZVxuZXhwb3J0cy5mID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMgfHwgZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhPKSB7XG4gIHJldHVybiBpbnRlcm5hbE9iamVjdEtleXMoTywgaGlkZGVuS2V5cyk7XG59O1xuIiwgIid1c2Ugc3RyaWN0Jztcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZ2V0b3ducHJvcGVydHlzeW1ib2xzIC0tIHNhZmVcbmV4cG9ydHMuZiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGdldEJ1aWx0SW4gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LWJ1aWx0LWluJyk7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgZ2V0T3duUHJvcGVydHlOYW1lc01vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1uYW1lcycpO1xudmFyIGdldE93blByb3BlcnR5U3ltYm9sc01vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1zeW1ib2xzJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG5cbnZhciBjb25jYXQgPSB1bmN1cnJ5VGhpcyhbXS5jb25jYXQpO1xuXG4vLyBhbGwgb2JqZWN0IGtleXMsIGluY2x1ZGVzIG5vbi1lbnVtZXJhYmxlIGFuZCBzeW1ib2xzXG5tb2R1bGUuZXhwb3J0cyA9IGdldEJ1aWx0SW4oJ1JlZmxlY3QnLCAnb3duS2V5cycpIHx8IGZ1bmN0aW9uIG93bktleXMoaXQpIHtcbiAgdmFyIGtleXMgPSBnZXRPd25Qcm9wZXJ0eU5hbWVzTW9kdWxlLmYoYW5PYmplY3QoaXQpKTtcbiAgdmFyIGdldE93blByb3BlcnR5U3ltYm9scyA9IGdldE93blByb3BlcnR5U3ltYm9sc01vZHVsZS5mO1xuICByZXR1cm4gZ2V0T3duUHJvcGVydHlTeW1ib2xzID8gY29uY2F0KGtleXMsIGdldE93blByb3BlcnR5U3ltYm9scyhpdCkpIDoga2V5cztcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGhhc093biA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMtb3duLXByb3BlcnR5Jyk7XG52YXIgb3duS2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vd24ta2V5cycpO1xudmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvck1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yJyk7XG52YXIgZGVmaW5lUHJvcGVydHlNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh0YXJnZXQsIHNvdXJjZSwgZXhjZXB0aW9ucykge1xuICB2YXIga2V5cyA9IG93bktleXMoc291cmNlKTtcbiAgdmFyIGRlZmluZVByb3BlcnR5ID0gZGVmaW5lUHJvcGVydHlNb2R1bGUuZjtcbiAgdmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvck1vZHVsZS5mO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIga2V5ID0ga2V5c1tpXTtcbiAgICBpZiAoIWhhc093bih0YXJnZXQsIGtleSkgJiYgIShleGNlcHRpb25zICYmIGhhc093bihleGNlcHRpb25zLCBrZXkpKSkge1xuICAgICAgZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpO1xuICAgIH1cbiAgfVxufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG5cbnZhciByZXBsYWNlbWVudCA9IC8jfFxcLnByb3RvdHlwZVxcLi87XG5cbnZhciBpc0ZvcmNlZCA9IGZ1bmN0aW9uIChmZWF0dXJlLCBkZXRlY3Rpb24pIHtcbiAgdmFyIHZhbHVlID0gZGF0YVtub3JtYWxpemUoZmVhdHVyZSldO1xuICByZXR1cm4gdmFsdWUgPT09IFBPTFlGSUxMID8gdHJ1ZVxuICAgIDogdmFsdWUgPT09IE5BVElWRSA/IGZhbHNlXG4gICAgOiBpc0NhbGxhYmxlKGRldGVjdGlvbikgPyBmYWlscyhkZXRlY3Rpb24pXG4gICAgOiAhIWRldGVjdGlvbjtcbn07XG5cbnZhciBub3JtYWxpemUgPSBpc0ZvcmNlZC5ub3JtYWxpemUgPSBmdW5jdGlvbiAoc3RyaW5nKSB7XG4gIHJldHVybiBTdHJpbmcoc3RyaW5nKS5yZXBsYWNlKHJlcGxhY2VtZW50LCAnLicpLnRvTG93ZXJDYXNlKCk7XG59O1xuXG52YXIgZGF0YSA9IGlzRm9yY2VkLmRhdGEgPSB7fTtcbnZhciBOQVRJVkUgPSBpc0ZvcmNlZC5OQVRJVkUgPSAnTic7XG52YXIgUE9MWUZJTEwgPSBpc0ZvcmNlZC5QT0xZRklMTCA9ICdQJztcblxubW9kdWxlLmV4cG9ydHMgPSBpc0ZvcmNlZDtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsVGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwtdGhpcycpO1xudmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yJykuZjtcbnZhciBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLW5vbi1lbnVtZXJhYmxlLXByb3BlcnR5Jyk7XG52YXIgZGVmaW5lQnVpbHRJbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZWZpbmUtYnVpbHQtaW4nKTtcbnZhciBkZWZpbmVHbG9iYWxQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZWZpbmUtZ2xvYmFsLXByb3BlcnR5Jyk7XG52YXIgY29weUNvbnN0cnVjdG9yUHJvcGVydGllcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jb3B5LWNvbnN0cnVjdG9yLXByb3BlcnRpZXMnKTtcbnZhciBpc0ZvcmNlZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1mb3JjZWQnKTtcblxuLypcbiAgb3B0aW9ucy50YXJnZXQgICAgICAgICAtIG5hbWUgb2YgdGhlIHRhcmdldCBvYmplY3RcbiAgb3B0aW9ucy5nbG9iYWwgICAgICAgICAtIHRhcmdldCBpcyB0aGUgZ2xvYmFsIG9iamVjdFxuICBvcHRpb25zLnN0YXQgICAgICAgICAgIC0gZXhwb3J0IGFzIHN0YXRpYyBtZXRob2RzIG9mIHRhcmdldFxuICBvcHRpb25zLnByb3RvICAgICAgICAgIC0gZXhwb3J0IGFzIHByb3RvdHlwZSBtZXRob2RzIG9mIHRhcmdldFxuICBvcHRpb25zLnJlYWwgICAgICAgICAgIC0gcmVhbCBwcm90b3R5cGUgbWV0aG9kIGZvciB0aGUgYHB1cmVgIHZlcnNpb25cbiAgb3B0aW9ucy5mb3JjZWQgICAgICAgICAtIGV4cG9ydCBldmVuIGlmIHRoZSBuYXRpdmUgZmVhdHVyZSBpcyBhdmFpbGFibGVcbiAgb3B0aW9ucy5iaW5kICAgICAgICAgICAtIGJpbmQgbWV0aG9kcyB0byB0aGUgdGFyZ2V0LCByZXF1aXJlZCBmb3IgdGhlIGBwdXJlYCB2ZXJzaW9uXG4gIG9wdGlvbnMud3JhcCAgICAgICAgICAgLSB3cmFwIGNvbnN0cnVjdG9ycyB0byBwcmV2ZW50aW5nIGdsb2JhbCBwb2xsdXRpb24sIHJlcXVpcmVkIGZvciB0aGUgYHB1cmVgIHZlcnNpb25cbiAgb3B0aW9ucy51bnNhZmUgICAgICAgICAtIHVzZSB0aGUgc2ltcGxlIGFzc2lnbm1lbnQgb2YgcHJvcGVydHkgaW5zdGVhZCBvZiBkZWxldGUgKyBkZWZpbmVQcm9wZXJ0eVxuICBvcHRpb25zLnNoYW0gICAgICAgICAgIC0gYWRkIGEgZmxhZyB0byBub3QgY29tcGxldGVseSBmdWxsIHBvbHlmaWxsc1xuICBvcHRpb25zLmVudW1lcmFibGUgICAgIC0gZXhwb3J0IGFzIGVudW1lcmFibGUgcHJvcGVydHlcbiAgb3B0aW9ucy5kb250Q2FsbEdldFNldCAtIHByZXZlbnQgY2FsbGluZyBhIGdldHRlciBvbiB0YXJnZXRcbiAgb3B0aW9ucy5uYW1lICAgICAgICAgICAtIHRoZSAubmFtZSBvZiB0aGUgZnVuY3Rpb24gaWYgaXQgZG9lcyBub3QgbWF0Y2ggdGhlIGtleVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9wdGlvbnMsIHNvdXJjZSkge1xuICB2YXIgVEFSR0VUID0gb3B0aW9ucy50YXJnZXQ7XG4gIHZhciBHTE9CQUwgPSBvcHRpb25zLmdsb2JhbDtcbiAgdmFyIFNUQVRJQyA9IG9wdGlvbnMuc3RhdDtcbiAgdmFyIEZPUkNFRCwgdGFyZ2V0LCBrZXksIHRhcmdldFByb3BlcnR5LCBzb3VyY2VQcm9wZXJ0eSwgZGVzY3JpcHRvcjtcbiAgaWYgKEdMT0JBTCkge1xuICAgIHRhcmdldCA9IGdsb2JhbFRoaXM7XG4gIH0gZWxzZSBpZiAoU1RBVElDKSB7XG4gICAgdGFyZ2V0ID0gZ2xvYmFsVGhpc1tUQVJHRVRdIHx8IGRlZmluZUdsb2JhbFByb3BlcnR5KFRBUkdFVCwge30pO1xuICB9IGVsc2Uge1xuICAgIHRhcmdldCA9IGdsb2JhbFRoaXNbVEFSR0VUXSAmJiBnbG9iYWxUaGlzW1RBUkdFVF0ucHJvdG90eXBlO1xuICB9XG4gIGlmICh0YXJnZXQpIGZvciAoa2V5IGluIHNvdXJjZSkge1xuICAgIHNvdXJjZVByb3BlcnR5ID0gc291cmNlW2tleV07XG4gICAgaWYgKG9wdGlvbnMuZG9udENhbGxHZXRTZXQpIHtcbiAgICAgIGRlc2NyaXB0b3IgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpO1xuICAgICAgdGFyZ2V0UHJvcGVydHkgPSBkZXNjcmlwdG9yICYmIGRlc2NyaXB0b3IudmFsdWU7XG4gICAgfSBlbHNlIHRhcmdldFByb3BlcnR5ID0gdGFyZ2V0W2tleV07XG4gICAgRk9SQ0VEID0gaXNGb3JjZWQoR0xPQkFMID8ga2V5IDogVEFSR0VUICsgKFNUQVRJQyA/ICcuJyA6ICcjJykgKyBrZXksIG9wdGlvbnMuZm9yY2VkKTtcbiAgICAvLyBjb250YWluZWQgaW4gdGFyZ2V0XG4gICAgaWYgKCFGT1JDRUQgJiYgdGFyZ2V0UHJvcGVydHkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaWYgKHR5cGVvZiBzb3VyY2VQcm9wZXJ0eSA9PSB0eXBlb2YgdGFyZ2V0UHJvcGVydHkpIGNvbnRpbnVlO1xuICAgICAgY29weUNvbnN0cnVjdG9yUHJvcGVydGllcyhzb3VyY2VQcm9wZXJ0eSwgdGFyZ2V0UHJvcGVydHkpO1xuICAgIH1cbiAgICAvLyBhZGQgYSBmbGFnIHRvIG5vdCBjb21wbGV0ZWx5IGZ1bGwgcG9seWZpbGxzXG4gICAgaWYgKG9wdGlvbnMuc2hhbSB8fCAodGFyZ2V0UHJvcGVydHkgJiYgdGFyZ2V0UHJvcGVydHkuc2hhbSkpIHtcbiAgICAgIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eShzb3VyY2VQcm9wZXJ0eSwgJ3NoYW0nLCB0cnVlKTtcbiAgICB9XG4gICAgZGVmaW5lQnVpbHRJbih0YXJnZXQsIGtleSwgc291cmNlUHJvcGVydHksIG9wdGlvbnMpO1xuICB9XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW1hcCAtLSBzYWZlXG52YXIgTWFwUHJvdG90eXBlID0gTWFwLnByb3RvdHlwZTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1tYXAgLS0gc2FmZVxuICBNYXA6IE1hcCxcbiAgc2V0OiB1bmN1cnJ5VGhpcyhNYXBQcm90b3R5cGUuc2V0KSxcbiAgZ2V0OiB1bmN1cnJ5VGhpcyhNYXBQcm90b3R5cGUuZ2V0KSxcbiAgaGFzOiB1bmN1cnJ5VGhpcyhNYXBQcm90b3R5cGUuaGFzKSxcbiAgcmVtb3ZlOiB1bmN1cnJ5VGhpcyhNYXBQcm90b3R5cGVbJ2RlbGV0ZSddKSxcbiAgcHJvdG86IE1hcFByb3RvdHlwZVxufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBNYXBIZWxwZXJzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL21hcC1oZWxwZXJzJyk7XG52YXIgSVNfUFVSRSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1wdXJlJyk7XG5cbnZhciBnZXQgPSBNYXBIZWxwZXJzLmdldDtcbnZhciBoYXMgPSBNYXBIZWxwZXJzLmhhcztcbnZhciBzZXQgPSBNYXBIZWxwZXJzLnNldDtcblxuLy8gYE1hcC5wcm90b3R5cGUuZ2V0T3JJbnNlcnRgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1tYXAucHJvdG90eXBlLmdldG9yaW5zZXJ0XG4kKHsgdGFyZ2V0OiAnTWFwJywgcHJvdG86IHRydWUsIHJlYWw6IHRydWUsIGZvcmNlZDogSVNfUFVSRSB9LCB7XG4gIGdldE9ySW5zZXJ0OiBmdW5jdGlvbiBnZXRPckluc2VydChrZXksIHZhbHVlKSB7XG4gICAgaWYgKGhhcyh0aGlzLCBrZXkpKSByZXR1cm4gZ2V0KHRoaXMsIGtleSk7XG4gICAgc2V0KHRoaXMsIGtleSwgdmFsdWUpO1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxufSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgYUNhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2EtY2FsbGFibGUnKTtcbnZhciBNYXBIZWxwZXJzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL21hcC1oZWxwZXJzJyk7XG52YXIgSVNfUFVSRSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1wdXJlJyk7XG5cbnZhciBnZXQgPSBNYXBIZWxwZXJzLmdldDtcbnZhciBoYXMgPSBNYXBIZWxwZXJzLmhhcztcbnZhciBzZXQgPSBNYXBIZWxwZXJzLnNldDtcblxuLy8gYE1hcC5wcm90b3R5cGUuZ2V0T3JJbnNlcnRDb21wdXRlZGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW1hcC5wcm90b3R5cGUuZ2V0b3JpbnNlcnRjb21wdXRlZFxuJCh7IHRhcmdldDogJ01hcCcsIHByb3RvOiB0cnVlLCByZWFsOiB0cnVlLCBmb3JjZWQ6IElTX1BVUkUgfSwge1xuICBnZXRPckluc2VydENvbXB1dGVkOiBmdW5jdGlvbiBnZXRPckluc2VydENvbXB1dGVkKGtleSwgY2FsbGJhY2tmbikge1xuICAgIHZhciBoYXNLZXkgPSBoYXModGhpcywga2V5KTtcbiAgICBhQ2FsbGFibGUoY2FsbGJhY2tmbik7XG4gICAgaWYgKGhhc0tleSkgcmV0dXJuIGdldCh0aGlzLCBrZXkpO1xuICAgIC8vIENhbm9uaWNhbGl6ZUtleWVkQ29sbGVjdGlvbktleVxuICAgIGlmIChrZXkgPT09IDAgJiYgMSAvIGtleSA9PT0gLUluZmluaXR5KSBrZXkgPSAwO1xuICAgIHZhciB2YWx1ZSA9IGNhbGxiYWNrZm4oa2V5KTtcbiAgICBzZXQodGhpcywga2V5LCB2YWx1ZSk7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG59KTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgaXNQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtaXMtcHJvdG90eXBlLW9mJyk7XG5cbnZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwgUHJvdG90eXBlKSB7XG4gIGlmIChpc1Byb3RvdHlwZU9mKFByb3RvdHlwZSwgaXQpKSByZXR1cm4gaXQ7XG4gIHRocm93IG5ldyAkVHlwZUVycm9yKCdJbmNvcnJlY3QgaW52b2NhdGlvbicpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgYUNhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2EtY2FsbGFibGUnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob2JqZWN0LCBrZXksIG1ldGhvZCkge1xuICB0cnkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZ2V0b3ducHJvcGVydHlkZXNjcmlwdG9yIC0tIHNhZmVcbiAgICByZXR1cm4gdW5jdXJyeVRoaXMoYUNhbGxhYmxlKE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBrZXkpW21ldGhvZF0pKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHsgLyogZW1wdHkgKi8gfVxufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHJldHVybiBpc09iamVjdChhcmd1bWVudCkgfHwgYXJndW1lbnQgPT09IG51bGw7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBpc1Bvc3NpYmxlUHJvdG90eXBlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLXBvc3NpYmxlLXByb3RvdHlwZScpO1xuXG52YXIgJFN0cmluZyA9IFN0cmluZztcbnZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICBpZiAoaXNQb3NzaWJsZVByb3RvdHlwZShhcmd1bWVudCkpIHJldHVybiBhcmd1bWVudDtcbiAgdGhyb3cgbmV3ICRUeXBlRXJyb3IoXCJDYW4ndCBzZXQgXCIgKyAkU3RyaW5nKGFyZ3VtZW50KSArICcgYXMgYSBwcm90b3R5cGUnKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xuLyogZXNsaW50LWRpc2FibGUgbm8tcHJvdG8gLS0gc2FmZSAqL1xudmFyIHVuY3VycnlUaGlzQWNjZXNzb3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzLWFjY2Vzc29yJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG52YXIgcmVxdWlyZU9iamVjdENvZXJjaWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZXF1aXJlLW9iamVjdC1jb2VyY2libGUnKTtcbnZhciBhUG9zc2libGVQcm90b3R5cGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYS1wb3NzaWJsZS1wcm90b3R5cGUnKTtcblxuLy8gYE9iamVjdC5zZXRQcm90b3R5cGVPZmAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5zZXRwcm90b3R5cGVvZlxuLy8gV29ya3Mgd2l0aCBfX3Byb3RvX18gb25seS4gT2xkIHY4IGNhbid0IHdvcmsgd2l0aCBudWxsIHByb3RvIG9iamVjdHMuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LXNldHByb3RvdHlwZW9mIC0tIHNhZmVcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8ICgnX19wcm90b19fJyBpbiB7fSA/IGZ1bmN0aW9uICgpIHtcbiAgdmFyIENPUlJFQ1RfU0VUVEVSID0gZmFsc2U7XG4gIHZhciB0ZXN0ID0ge307XG4gIHZhciBzZXR0ZXI7XG4gIHRyeSB7XG4gICAgc2V0dGVyID0gdW5jdXJyeVRoaXNBY2Nlc3NvcihPYmplY3QucHJvdG90eXBlLCAnX19wcm90b19fJywgJ3NldCcpO1xuICAgIHNldHRlcih0ZXN0LCBbXSk7XG4gICAgQ09SUkVDVF9TRVRURVIgPSB0ZXN0IGluc3RhbmNlb2YgQXJyYXk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGVtcHR5ICovIH1cbiAgcmV0dXJuIGZ1bmN0aW9uIHNldFByb3RvdHlwZU9mKE8sIHByb3RvKSB7XG4gICAgcmVxdWlyZU9iamVjdENvZXJjaWJsZShPKTtcbiAgICBhUG9zc2libGVQcm90b3R5cGUocHJvdG8pO1xuICAgIGlmICghaXNPYmplY3QoTykpIHJldHVybiBPO1xuICAgIGlmIChDT1JSRUNUX1NFVFRFUikgc2V0dGVyKE8sIHByb3RvKTtcbiAgICBlbHNlIE8uX19wcm90b19fID0gcHJvdG87XG4gICAgcmV0dXJuIE87XG4gIH07XG59KCkgOiB1bmRlZmluZWQpO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG52YXIgc2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LXNldC1wcm90b3R5cGUtb2YnKTtcblxuLy8gbWFrZXMgc3ViY2xhc3Npbmcgd29yayBjb3JyZWN0IGZvciB3cmFwcGVkIGJ1aWx0LWluc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoJHRoaXMsIGR1bW15LCBXcmFwcGVyKSB7XG4gIHZhciBOZXdUYXJnZXQsIE5ld1RhcmdldFByb3RvdHlwZTtcbiAgaWYgKFxuICAgIC8vIGl0IGNhbiB3b3JrIG9ubHkgd2l0aCBuYXRpdmUgYHNldFByb3RvdHlwZU9mYFxuICAgIHNldFByb3RvdHlwZU9mICYmXG4gICAgLy8gd2UgaGF2ZW4ndCBjb21wbGV0ZWx5IGNvcnJlY3QgcHJlLUVTNiB3YXkgZm9yIGdldHRpbmcgYG5ldy50YXJnZXRgLCBzbyB1c2UgdGhpc1xuICAgIGlzQ2FsbGFibGUoTmV3VGFyZ2V0ID0gZHVtbXkuY29uc3RydWN0b3IpICYmXG4gICAgTmV3VGFyZ2V0ICE9PSBXcmFwcGVyICYmXG4gICAgaXNPYmplY3QoTmV3VGFyZ2V0UHJvdG90eXBlID0gTmV3VGFyZ2V0LnByb3RvdHlwZSkgJiZcbiAgICBOZXdUYXJnZXRQcm90b3R5cGUgIT09IFdyYXBwZXIucHJvdG90eXBlXG4gICkgc2V0UHJvdG90eXBlT2YoJHRoaXMsIE5ld1RhcmdldFByb3RvdHlwZSk7XG4gIHJldHVybiAkdGhpcztcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xuXG52YXIgVE9fU1RSSU5HX1RBRyA9IHdlbGxLbm93blN5bWJvbCgndG9TdHJpbmdUYWcnKTtcbnZhciB0ZXN0ID0ge307XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgdW5pY29ybi9uby1pbW1lZGlhdGUtbXV0YXRpb24gLS0gRVMzIHN5bnRheCBsaW1pdGF0aW9uXG50ZXN0W1RPX1NUUklOR19UQUddID0gJ3onO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFN0cmluZyh0ZXN0KSA9PT0gJ1tvYmplY3Qgel0nO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBUT19TVFJJTkdfVEFHX1NVUFBPUlQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tc3RyaW5nLXRhZy1zdXBwb3J0Jyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xudmFyIGNsYXNzb2ZSYXcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY2xhc3NvZi1yYXcnKTtcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcblxudmFyIFRPX1NUUklOR19UQUcgPSB3ZWxsS25vd25TeW1ib2woJ3RvU3RyaW5nVGFnJyk7XG52YXIgJE9iamVjdCA9IE9iamVjdDtcblxuLy8gRVMzIHdyb25nIGhlcmVcbnZhciBDT1JSRUNUX0FSR1VNRU5UUyA9IGNsYXNzb2ZSYXcoZnVuY3Rpb24gKCkgeyByZXR1cm4gYXJndW1lbnRzOyB9KCkpID09PSAnQXJndW1lbnRzJztcblxuLy8gZmFsbGJhY2sgZm9yIElFMTEgU2NyaXB0IEFjY2VzcyBEZW5pZWQgZXJyb3JcbnZhciB0cnlHZXQgPSBmdW5jdGlvbiAoaXQsIGtleSkge1xuICB0cnkge1xuICAgIHJldHVybiBpdFtrZXldO1xuICB9IGNhdGNoIChlcnJvcikgeyAvKiBlbXB0eSAqLyB9XG59O1xuXG4vLyBnZXR0aW5nIHRhZyBmcm9tIEVTNisgYE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmdgXG5tb2R1bGUuZXhwb3J0cyA9IFRPX1NUUklOR19UQUdfU1VQUE9SVCA/IGNsYXNzb2ZSYXcgOiBmdW5jdGlvbiAoaXQpIHtcbiAgdmFyIE8sIHRhZywgcmVzdWx0O1xuICByZXR1cm4gaXQgPT09IHVuZGVmaW5lZCA/ICdVbmRlZmluZWQnIDogaXQgPT09IG51bGwgPyAnTnVsbCdcbiAgICAvLyBAQHRvU3RyaW5nVGFnIGNhc2VcbiAgICA6IHR5cGVvZiAodGFnID0gdHJ5R2V0KE8gPSAkT2JqZWN0KGl0KSwgVE9fU1RSSU5HX1RBRykpID09ICdzdHJpbmcnID8gdGFnXG4gICAgLy8gYnVpbHRpblRhZyBjYXNlXG4gICAgOiBDT1JSRUNUX0FSR1VNRU5UUyA/IGNsYXNzb2ZSYXcoTylcbiAgICAvLyBFUzMgYXJndW1lbnRzIGZhbGxiYWNrXG4gICAgOiAocmVzdWx0ID0gY2xhc3NvZlJhdyhPKSkgPT09ICdPYmplY3QnICYmIGlzQ2FsbGFibGUoTy5jYWxsZWUpID8gJ0FyZ3VtZW50cycgOiByZXN1bHQ7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBjbGFzc29mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NsYXNzb2YnKTtcblxudmFyICRTdHJpbmcgPSBTdHJpbmc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIGlmIChjbGFzc29mKGFyZ3VtZW50KSA9PT0gJ1N5bWJvbCcpIHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjb252ZXJ0IGEgU3ltYm9sIHZhbHVlIHRvIGEgc3RyaW5nJyk7XG4gIHJldHVybiAkU3RyaW5nKGFyZ3VtZW50KTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHRvU3RyaW5nID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXN0cmluZycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcmd1bWVudCwgJGRlZmF1bHQpIHtcbiAgcmV0dXJuIGFyZ3VtZW50ID09PSB1bmRlZmluZWQgPyBhcmd1bWVudHMubGVuZ3RoIDwgMiA/ICcnIDogJGRlZmF1bHQgOiB0b1N0cmluZyhhcmd1bWVudCk7XG59O1xuIiwgIid1c2Ugc3RyaWN0Jztcbm1vZHVsZS5leHBvcnRzID0ge1xuICBJbmRleFNpemVFcnJvcjogeyBzOiAnSU5ERVhfU0laRV9FUlInLCBjOiAxLCBtOiAxIH0sXG4gIERPTVN0cmluZ1NpemVFcnJvcjogeyBzOiAnRE9NU1RSSU5HX1NJWkVfRVJSJywgYzogMiwgbTogMCB9LFxuICBIaWVyYXJjaHlSZXF1ZXN0RXJyb3I6IHsgczogJ0hJRVJBUkNIWV9SRVFVRVNUX0VSUicsIGM6IDMsIG06IDEgfSxcbiAgV3JvbmdEb2N1bWVudEVycm9yOiB7IHM6ICdXUk9OR19ET0NVTUVOVF9FUlInLCBjOiA0LCBtOiAxIH0sXG4gIEludmFsaWRDaGFyYWN0ZXJFcnJvcjogeyBzOiAnSU5WQUxJRF9DSEFSQUNURVJfRVJSJywgYzogNSwgbTogMSB9LFxuICBOb0RhdGFBbGxvd2VkRXJyb3I6IHsgczogJ05PX0RBVEFfQUxMT1dFRF9FUlInLCBjOiA2LCBtOiAwIH0sXG4gIE5vTW9kaWZpY2F0aW9uQWxsb3dlZEVycm9yOiB7IHM6ICdOT19NT0RJRklDQVRJT05fQUxMT1dFRF9FUlInLCBjOiA3LCBtOiAxIH0sXG4gIE5vdEZvdW5kRXJyb3I6IHsgczogJ05PVF9GT1VORF9FUlInLCBjOiA4LCBtOiAxIH0sXG4gIE5vdFN1cHBvcnRlZEVycm9yOiB7IHM6ICdOT1RfU1VQUE9SVEVEX0VSUicsIGM6IDksIG06IDEgfSxcbiAgSW5Vc2VBdHRyaWJ1dGVFcnJvcjogeyBzOiAnSU5VU0VfQVRUUklCVVRFX0VSUicsIGM6IDEwLCBtOiAxIH0sXG4gIEludmFsaWRTdGF0ZUVycm9yOiB7IHM6ICdJTlZBTElEX1NUQVRFX0VSUicsIGM6IDExLCBtOiAxIH0sXG4gIFN5bnRheEVycm9yOiB7IHM6ICdTWU5UQVhfRVJSJywgYzogMTIsIG06IDEgfSxcbiAgSW52YWxpZE1vZGlmaWNhdGlvbkVycm9yOiB7IHM6ICdJTlZBTElEX01PRElGSUNBVElPTl9FUlInLCBjOiAxMywgbTogMSB9LFxuICBOYW1lc3BhY2VFcnJvcjogeyBzOiAnTkFNRVNQQUNFX0VSUicsIGM6IDE0LCBtOiAxIH0sXG4gIEludmFsaWRBY2Nlc3NFcnJvcjogeyBzOiAnSU5WQUxJRF9BQ0NFU1NfRVJSJywgYzogMTUsIG06IDEgfSxcbiAgVmFsaWRhdGlvbkVycm9yOiB7IHM6ICdWQUxJREFUSU9OX0VSUicsIGM6IDE2LCBtOiAwIH0sXG4gIFR5cGVNaXNtYXRjaEVycm9yOiB7IHM6ICdUWVBFX01JU01BVENIX0VSUicsIGM6IDE3LCBtOiAxIH0sXG4gIFNlY3VyaXR5RXJyb3I6IHsgczogJ1NFQ1VSSVRZX0VSUicsIGM6IDE4LCBtOiAxIH0sXG4gIE5ldHdvcmtFcnJvcjogeyBzOiAnTkVUV09SS19FUlInLCBjOiAxOSwgbTogMSB9LFxuICBBYm9ydEVycm9yOiB7IHM6ICdBQk9SVF9FUlInLCBjOiAyMCwgbTogMSB9LFxuICBVUkxNaXNtYXRjaEVycm9yOiB7IHM6ICdVUkxfTUlTTUFUQ0hfRVJSJywgYzogMjEsIG06IDEgfSxcbiAgUXVvdGFFeGNlZWRlZEVycm9yOiB7IHM6ICdRVU9UQV9FWENFRURFRF9FUlInLCBjOiAyMiwgbTogMSB9LFxuICBUaW1lb3V0RXJyb3I6IHsgczogJ1RJTUVPVVRfRVJSJywgYzogMjMsIG06IDEgfSxcbiAgSW52YWxpZE5vZGVUeXBlRXJyb3I6IHsgczogJ0lOVkFMSURfTk9ERV9UWVBFX0VSUicsIGM6IDI0LCBtOiAxIH0sXG4gIERhdGFDbG9uZUVycm9yOiB7IHM6ICdEQVRBX0NMT05FX0VSUicsIGM6IDI1LCBtOiAxIH1cbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xuXG52YXIgJEVycm9yID0gRXJyb3I7XG52YXIgcmVwbGFjZSA9IHVuY3VycnlUaGlzKCcnLnJlcGxhY2UpO1xuXG52YXIgVEVTVCA9IChmdW5jdGlvbiAoYXJnKSB7IHJldHVybiBTdHJpbmcobmV3ICRFcnJvcihhcmcpLnN0YWNrKTsgfSkoJ3p4Y2FzZCcpO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlZG9zL25vLXZ1bG5lcmFibGUsIHNvbmFyanMvc2xvdy1yZWdleCAtLSBzYWZlXG52YXIgVjhfT1JfQ0hBS1JBX1NUQUNLX0VOVFJZID0gL1xcblxccyphdCBbXjpdKjpbXlxcbl0qLztcbnZhciBJU19WOF9PUl9DSEFLUkFfU1RBQ0sgPSBWOF9PUl9DSEFLUkFfU1RBQ0tfRU5UUlkudGVzdChURVNUKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoc3RhY2ssIGRyb3BFbnRyaWVzKSB7XG4gIGlmIChJU19WOF9PUl9DSEFLUkFfU1RBQ0sgJiYgdHlwZW9mIHN0YWNrID09ICdzdHJpbmcnICYmICEkRXJyb3IucHJlcGFyZVN0YWNrVHJhY2UpIHtcbiAgICB3aGlsZSAoZHJvcEVudHJpZXMtLSkgc3RhY2sgPSByZXBsYWNlKHN0YWNrLCBWOF9PUl9DSEFLUkFfU1RBQ0tfRU5UUlksICcnKTtcbiAgfSByZXR1cm4gc3RhY2s7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIGdsb2JhbFRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsLXRoaXMnKTtcbnZhciBnZXRCdWlsdEluID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1idWlsdC1pbicpO1xudmFyIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHktZGVzY3JpcHRvcicpO1xudmFyIGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHknKS5mO1xudmFyIGhhc093biA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMtb3duLXByb3BlcnR5Jyk7XG52YXIgYW5JbnN0YW5jZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1pbnN0YW5jZScpO1xudmFyIGluaGVyaXRJZlJlcXVpcmVkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2luaGVyaXQtaWYtcmVxdWlyZWQnKTtcbnZhciBub3JtYWxpemVTdHJpbmdBcmd1bWVudCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9ub3JtYWxpemUtc3RyaW5nLWFyZ3VtZW50Jyk7XG52YXIgRE9NRXhjZXB0aW9uQ29uc3RhbnRzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RvbS1leGNlcHRpb24tY29uc3RhbnRzJyk7XG52YXIgY2xlYXJFcnJvclN0YWNrID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Vycm9yLXN0YWNrLWNsZWFyJyk7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBJU19QVVJFID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLXB1cmUnKTtcblxudmFyIERPTV9FWENFUFRJT04gPSAnRE9NRXhjZXB0aW9uJztcbnZhciBFcnJvciA9IGdldEJ1aWx0SW4oJ0Vycm9yJyk7XG52YXIgTmF0aXZlRE9NRXhjZXB0aW9uID0gZ2V0QnVpbHRJbihET01fRVhDRVBUSU9OKTtcblxudmFyICRET01FeGNlcHRpb24gPSBmdW5jdGlvbiBET01FeGNlcHRpb24oKSB7XG4gIGFuSW5zdGFuY2UodGhpcywgRE9NRXhjZXB0aW9uUHJvdG90eXBlKTtcbiAgdmFyIGFyZ3VtZW50c0xlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gIHZhciBtZXNzYWdlID0gbm9ybWFsaXplU3RyaW5nQXJndW1lbnQoYXJndW1lbnRzTGVuZ3RoIDwgMSA/IHVuZGVmaW5lZCA6IGFyZ3VtZW50c1swXSk7XG4gIHZhciBuYW1lID0gbm9ybWFsaXplU3RyaW5nQXJndW1lbnQoYXJndW1lbnRzTGVuZ3RoIDwgMiA/IHVuZGVmaW5lZCA6IGFyZ3VtZW50c1sxXSwgJ0Vycm9yJyk7XG4gIHZhciB0aGF0ID0gbmV3IE5hdGl2ZURPTUV4Y2VwdGlvbihtZXNzYWdlLCBuYW1lKTtcbiAgdmFyIGVycm9yID0gbmV3IEVycm9yKG1lc3NhZ2UpO1xuICBlcnJvci5uYW1lID0gRE9NX0VYQ0VQVElPTjtcbiAgZGVmaW5lUHJvcGVydHkodGhhdCwgJ3N0YWNrJywgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yKDEsIGNsZWFyRXJyb3JTdGFjayhlcnJvci5zdGFjaywgMSkpKTtcbiAgaW5oZXJpdElmUmVxdWlyZWQodGhhdCwgdGhpcywgJERPTUV4Y2VwdGlvbik7XG4gIHJldHVybiB0aGF0O1xufTtcblxudmFyIERPTUV4Y2VwdGlvblByb3RvdHlwZSA9ICRET01FeGNlcHRpb24ucHJvdG90eXBlID0gTmF0aXZlRE9NRXhjZXB0aW9uLnByb3RvdHlwZTtcblxudmFyIEVSUk9SX0hBU19TVEFDSyA9ICdzdGFjaycgaW4gbmV3IEVycm9yKERPTV9FWENFUFRJT04pO1xudmFyIERPTV9FWENFUFRJT05fSEFTX1NUQUNLID0gJ3N0YWNrJyBpbiBuZXcgTmF0aXZlRE9NRXhjZXB0aW9uKDEsIDIpO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5ZGVzY3JpcHRvciAtLSBzYWZlXG52YXIgZGVzY3JpcHRvciA9IE5hdGl2ZURPTUV4Y2VwdGlvbiAmJiBERVNDUklQVE9SUyAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGdsb2JhbFRoaXMsIERPTV9FWENFUFRJT04pO1xuXG4vLyBCdW4gfiAwLjEuMSBET01FeGNlcHRpb24gaGF2ZSBpbmNvcnJlY3QgZGVzY3JpcHRvciBhbmQgd2UgY2FuJ3QgcmVkZWZpbmUgaXRcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9KYXJyZWQtU3VtbmVyL2J1bi9pc3N1ZXMvMzk5XG52YXIgQlVHR1lfREVTQ1JJUFRPUiA9ICEhZGVzY3JpcHRvciAmJiAhKGRlc2NyaXB0b3Iud3JpdGFibGUgJiYgZGVzY3JpcHRvci5jb25maWd1cmFibGUpO1xuXG52YXIgRk9SQ0VEX0NPTlNUUlVDVE9SID0gRVJST1JfSEFTX1NUQUNLICYmICFCVUdHWV9ERVNDUklQVE9SICYmICFET01fRVhDRVBUSU9OX0hBU19TVEFDSztcblxuLy8gYERPTUV4Y2VwdGlvbmAgY29uc3RydWN0b3IgcGF0Y2ggZm9yIGAuc3RhY2tgIHdoZXJlIGl0J3MgcmVxdWlyZWRcbi8vIGh0dHBzOi8vd2ViaWRsLnNwZWMud2hhdHdnLm9yZy8jZXMtRE9NRXhjZXB0aW9uLXNwZWNpYWxuZXNzXG4kKHsgZ2xvYmFsOiB0cnVlLCBjb25zdHJ1Y3RvcjogdHJ1ZSwgZm9yY2VkOiBJU19QVVJFIHx8IEZPUkNFRF9DT05TVFJVQ1RPUiB9LCB7IC8vIFRPRE86IGZpeCBleHBvcnQgbG9naWNcbiAgRE9NRXhjZXB0aW9uOiBGT1JDRURfQ09OU1RSVUNUT1IgPyAkRE9NRXhjZXB0aW9uIDogTmF0aXZlRE9NRXhjZXB0aW9uXG59KTtcblxudmFyIFBvbHlmaWxsZWRET01FeGNlcHRpb24gPSBnZXRCdWlsdEluKERPTV9FWENFUFRJT04pO1xudmFyIFBvbHlmaWxsZWRET01FeGNlcHRpb25Qcm90b3R5cGUgPSBQb2x5ZmlsbGVkRE9NRXhjZXB0aW9uLnByb3RvdHlwZTtcblxuaWYgKFBvbHlmaWxsZWRET01FeGNlcHRpb25Qcm90b3R5cGUuY29uc3RydWN0b3IgIT09IFBvbHlmaWxsZWRET01FeGNlcHRpb24pIHtcbiAgaWYgKCFJU19QVVJFKSB7XG4gICAgZGVmaW5lUHJvcGVydHkoUG9seWZpbGxlZERPTUV4Y2VwdGlvblByb3RvdHlwZSwgJ2NvbnN0cnVjdG9yJywgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yKDEsIFBvbHlmaWxsZWRET01FeGNlcHRpb24pKTtcbiAgfVxuXG4gIGZvciAodmFyIGtleSBpbiBET01FeGNlcHRpb25Db25zdGFudHMpIGlmIChoYXNPd24oRE9NRXhjZXB0aW9uQ29uc3RhbnRzLCBrZXkpKSB7XG4gICAgdmFyIGNvbnN0YW50ID0gRE9NRXhjZXB0aW9uQ29uc3RhbnRzW2tleV07XG4gICAgdmFyIGNvbnN0YW50TmFtZSA9IGNvbnN0YW50LnM7XG4gICAgaWYgKCFoYXNPd24oUG9seWZpbGxlZERPTUV4Y2VwdGlvbiwgY29uc3RhbnROYW1lKSkge1xuICAgICAgZGVmaW5lUHJvcGVydHkoUG9seWZpbGxlZERPTUV4Y2VwdGlvbiwgY29uc3RhbnROYW1lLCBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IoNiwgY29uc3RhbnQuYykpO1xuICAgIH1cbiAgfVxufVxuIiwgImV4cG9ydCAqIGZyb20gJ2lkYi1wbHVzJztcbiIsICJleHBvcnQgaW50ZXJmYWNlIEVuc3VyZVN0b3JlT3B0aW9ucyB7XG4gIC8qKiBrZXlQYXRoIGZvciBvYmplY3RTdG9yZTsgZGVmYXVsdCB1bmRlZmluZWQgKG91dC1vZi1saW5lIGtleXMpICovXG4gIGtleVBhdGg/OiBzdHJpbmcgfCBzdHJpbmdbXSB8IG51bGxcbiAgLyoqIGF1dG9JbmNyZW1lbnQgZm9yIG9iamVjdFN0b3JlOyBkZWZhdWx0IGZhbHNlICovXG4gIGF1dG9JbmNyZW1lbnQ/OiBib29sZWFuXG4gIC8qKiBpbmRleGVzIHRvIGVuc3VyZSBleGlzdCBvbiB0aGUgc3RvcmUgKG1pc3Npbmcgb25lcyB3aWxsIGJlIGNyZWF0ZWQgb24gdXBncmFkZSkgKi9cbiAgaW5kZXhlcz86IElEQkluZGV4RGVmW11cbn1cblxuZXhwb3J0IGludGVyZmFjZSBJREJJbmRleERlZiB7XG4gIG5hbWU6IHN0cmluZ1xuICBrZXlQYXRoOiBzdHJpbmcgfCBzdHJpbmdbXVxuICBvcHRpb25zPzogSURCSW5kZXhQYXJhbWV0ZXJzXG59XG5cbmV4cG9ydCBuYW1lc3BhY2UgSURCUGx1c0hlbHBlciB7XG4gIC8vIExvbmctbGl2ZWQgY29ubmVjdGlvbiBjYWNoZSBwZXIgREIgbmFtZVxuICBleHBvcnQgY29uc3QgY2FjaGUgPSBuZXcgTWFwPHN0cmluZywgUHJvbWlzZTxJREJEYXRhYmFzZT4+KClcblxuICBleHBvcnQgY29uc3QgZGVmYXVsdHMgPSBPYmplY3QuZnJlZXplKHsgaXRlckJhdGNoOiAxMDAsIHJldHJ5OiB7IGF0dGVtcHRzOiAzLCBiYXNlRGVsYXlNczogMTYgfSB9KVxuXG4gIGV4cG9ydCBjb25zdCBzbGVlcCA9IChtczogbnVtYmVyKSA9PiBuZXcgUHJvbWlzZTx2b2lkPigocikgPT4gc2V0VGltZW91dChyLCBtcykpXG5cbiAgZXhwb3J0IGZ1bmN0aW9uIHNob3VsZFJlY29ubmVjdChlcnI6IHVua25vd24pOiBib29sZWFuIHtcbiAgICBjb25zdCBuYW1lID0gKGVyciBhcyBhbnkpPy5uYW1lID8/ICcnXG4gICAgLy8gSGV1cmlzdGljcyBmb3IgXCJjb25uZWN0aW9uIGRyb3BwZWRcIiBzY2VuYXJpb3NcbiAgICByZXR1cm4gKFxuICAgICAgbmFtZSA9PT0gJ0Fib3J0RXJyb3InIHx8XG4gICAgICBuYW1lID09PSAnSW52YWxpZFN0YXRlRXJyb3InIHx8XG4gICAgICBuYW1lID09PSAnVHJhbnNhY3Rpb25JbmFjdGl2ZUVycm9yJyB8fFxuICAgICAgbmFtZSA9PT0gJ1Vua25vd25FcnJvcidcbiAgICApXG4gIH1cblxuICBleHBvcnQgYXN5bmMgZnVuY3Rpb24gd2l0aFJldHJ5PFQ+KFxuICAgIGNmZzogeyBhdHRlbXB0czogbnVtYmVyOyBiYXNlRGVsYXlNczogbnVtYmVyIH0sXG4gICAgcnVuOiAoYXR0ZW1wdDogbnVtYmVyKSA9PiBQcm9taXNlPFQ+LFxuICAgIG9uRmFpbD86IChlcnI6IHVua25vd24sIGF0dGVtcHQ6IG51bWJlcikgPT4gUHJvbWlzZTx2b2lkPiB8IHZvaWRcbiAgKTogUHJvbWlzZTxUPiB7XG4gICAgY29uc3QgYXR0ZW1wdHMgPSBNYXRoLm1heCgxLCBjZmcuYXR0ZW1wdHMpXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhdHRlbXB0czsgaSsrKSB7XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gYXdhaXQgcnVuKGkpXG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgaWYgKGkgPT09IGF0dGVtcHRzIC0gMSkgdGhyb3cgZXJyXG4gICAgICAgIGF3YWl0IG9uRmFpbD8uKGVyciwgaSlcbiAgICAgICAgY29uc3QgYmFja29mZiA9IGNmZy5iYXNlRGVsYXlNcyAqIE1hdGgucG93KDIsIGkpICsgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApXG4gICAgICAgIGF3YWl0IHNsZWVwKGJhY2tvZmYpXG4gICAgICB9XG4gICAgfVxuICAgIC8vIHVucmVhY2hhYmxlXG4gICAgdGhyb3cgbmV3IEVycm9yKCd3aXRoUmV0cnkgZXhoYXVzdGVkIHVuZXhwZWN0ZWRseScpXG4gIH1cblxuICBmdW5jdGlvbiBvcGVuUmF3KFxuICAgIGRiTmFtZTogc3RyaW5nLFxuICAgIHZlcnNpb24/OiBudW1iZXIsXG4gICAgdXBncmFkZT86IChkYjogSURCRGF0YWJhc2UsIHR4OiBJREJUcmFuc2FjdGlvbikgPT4gdm9pZFxuICApIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2U8SURCRGF0YWJhc2U+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGNvbnN0IHJlcSA9IGluZGV4ZWREQi5vcGVuKGRiTmFtZSwgdmVyc2lvbilcbiAgICAgIHJlcS5vbnVwZ3JhZGVuZWVkZWQgPSAoKSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgY29uc3QgZGIgPSByZXEucmVzdWx0XG4gICAgICAgICAgY29uc3QgdHggPSByZXEudHJhbnNhY3Rpb24hXG4gICAgICAgICAgdXBncmFkZT8uKGRiLCB0eClcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIHJlamVjdChlKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXEub25lcnJvciA9ICgpID0+IHJlamVjdChyZXEuZXJyb3IpXG4gICAgICByZXEub25ibG9ja2VkID0gKCkgPT4ge1xuICAgICAgICAvLyBuby1vcDsgYW5vdGhlciB0YWIgaG9sZHMgYW4gb2xkZXIgdmVyc2lvbiBvcGVuXG4gICAgICB9XG4gICAgICByZXEub25zdWNjZXNzID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBkYiA9IHJlcS5yZXN1bHRcbiAgICAgICAgZGIub252ZXJzaW9uY2hhbmdlID0gKCkgPT4ge1xuICAgICAgICAgIC8vIEZvcmNlIGNsaWVudHMgdG8gbGF6aWx5IHJlY29ubmVjdFxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBkYi5jbG9zZSgpXG4gICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgIGNhY2hlLmRlbGV0ZShkYk5hbWUpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlc29sdmUoZGIpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIGVuc3VyZVNjaGVtYShcbiAgICBkYjogSURCRGF0YWJhc2UsXG4gICAgc3RvcmVOYW1lOiBzdHJpbmcsXG4gICAgZW5zdXJlPzogRW5zdXJlU3RvcmVPcHRpb25zXG4gICk6IFByb21pc2U8SURCRGF0YWJhc2U+IHtcbiAgICBsZXQgbmVlZFN0b3JlID0gIWRiLm9iamVjdFN0b3JlTmFtZXMuY29udGFpbnMoc3RvcmVOYW1lKVxuICAgIGxldCBtaXNzaW5nSWR4OiBJREJJbmRleERlZltdID0gW11cblxuICAgIGlmICghbmVlZFN0b3JlICYmIGVuc3VyZT8uaW5kZXhlcz8ubGVuZ3RoKSB7XG4gICAgICAvLyBJbnNwZWN0IGluZGV4ZXMgb24gYW4gZXhpc3Rpbmcgc3RvcmVcbiAgICAgIGNvbnN0IHQgPSBkYi50cmFuc2FjdGlvbihzdG9yZU5hbWUsICdyZWFkb25seScpXG4gICAgICBjb25zdCBzID0gdC5vYmplY3RTdG9yZShzdG9yZU5hbWUpXG4gICAgICBjb25zdCBzZXQgPSBuZXcgU2V0KEFycmF5LmZyb20ocy5pbmRleE5hbWVzKSlcbiAgICAgIG1pc3NpbmdJZHggPSAoZW5zdXJlLmluZGV4ZXMgfHwgW10pLmZpbHRlcigoZCkgPT4gIXNldC5oYXMoZC5uYW1lKSlcbiAgICAgIC8vIGZpbmFsaXplIHRoZSByZWFkLW9ubHkgdHhcbiAgICAgIGF3YWl0IG5ldyBQcm9taXNlPHZvaWQ+KChyZXMsIHJlaikgPT4ge1xuICAgICAgICB0Lm9uY29tcGxldGUgPSAoKSA9PiByZXMoKVxuICAgICAgICB0Lm9uYWJvcnQgPSAoKSA9PiByZWoodC5lcnJvcilcbiAgICAgICAgdC5vbmVycm9yID0gKCkgPT4gcmVqKHQuZXJyb3IpXG4gICAgICB9KVxuICAgIH1cblxuICAgIGlmICghbmVlZFN0b3JlICYmIG1pc3NpbmdJZHgubGVuZ3RoID09PSAwKSByZXR1cm4gZGJcblxuICAgIC8vIEJ1bXAgdmVyc2lvbiB0byB0cmlnZ2VyIHVwZ3JhZGVcbiAgICBjb25zdCBuZXh0VmVyID0gZGIudmVyc2lvbiArIDFcbiAgICBkYi5jbG9zZSgpXG4gICAgY29uc3QgdXBncmFkZWQgPSBhd2FpdCBvcGVuUmF3KGRiLm5hbWUsIG5leHRWZXIsIChuZGIsIHZ0eCkgPT4ge1xuICAgICAgbGV0IHN0b3JlOiBJREJPYmplY3RTdG9yZVxuICAgICAgaWYgKCFuZGIub2JqZWN0U3RvcmVOYW1lcy5jb250YWlucyhzdG9yZU5hbWUpKSB7XG4gICAgICAgIHN0b3JlID0gbmRiLmNyZWF0ZU9iamVjdFN0b3JlKHN0b3JlTmFtZSwge1xuICAgICAgICAgIGtleVBhdGg6IGVuc3VyZT8ua2V5UGF0aCA/PyB1bmRlZmluZWQsXG4gICAgICAgICAgYXV0b0luY3JlbWVudDogISFlbnN1cmU/LmF1dG9JbmNyZW1lbnQsXG4gICAgICAgIH0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdG9yZSA9IHZ0eC5vYmplY3RTdG9yZShzdG9yZU5hbWUpXG4gICAgICB9XG4gICAgICBmb3IgKGNvbnN0IGlkeCBvZiBtaXNzaW5nSWR4KSB7XG4gICAgICAgIGlmICghc3RvcmUuaW5kZXhOYW1lcy5jb250YWlucyhpZHgubmFtZSkpIHtcbiAgICAgICAgICBzdG9yZS5jcmVhdGVJbmRleChpZHgubmFtZSwgaWR4LmtleVBhdGggYXMgYW55LCBpZHgub3B0aW9ucylcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gICAgdXBncmFkZWQub252ZXJzaW9uY2hhbmdlID0gKCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgdXBncmFkZWQuY2xvc2UoKVxuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgY2FjaGUuZGVsZXRlKHVwZ3JhZGVkLm5hbWUpXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB1cGdyYWRlZFxuICB9XG5cbiAgZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldERCKGRiTmFtZTogc3RyaW5nLCBzdG9yZU5hbWU6IHN0cmluZywgZW5zdXJlPzogRW5zdXJlU3RvcmVPcHRpb25zKSB7XG4gICAgbGV0IHAgPSBjYWNoZS5nZXQoZGJOYW1lKVxuICAgIGlmICghcCkge1xuICAgICAgcCA9IChhc3luYyAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGRiID0gYXdhaXQgb3BlblJhdyhkYk5hbWUpXG4gICAgICAgIHJldHVybiBlbnN1cmVTY2hlbWEoZGIsIHN0b3JlTmFtZSwgZW5zdXJlKVxuICAgICAgfSkoKVxuICAgICAgY2FjaGUuc2V0KGRiTmFtZSwgcClcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gVmVyaWZ5IHNjaGVtYSBsYXppbHkgaW4gY2FzZSBvZiBmaXJzdC10aW1lIGNhbGxlcnMgd2l0aCBkaWZmZXJlbnQgc3RvcmUgcmVxdWlyZW1lbnRzXG4gICAgICBwID0gcC50aGVuKChkYikgPT4gZW5zdXJlU2NoZW1hKGRiLCBzdG9yZU5hbWUsIGVuc3VyZSkpXG4gICAgICBjYWNoZS5zZXQoZGJOYW1lLCBwKVxuICAgIH1cbiAgICByZXR1cm4gcFxuICB9XG5cbiAgZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNsb3NlQ29ubmVjdGlvbihkYk5hbWU6IHN0cmluZykge1xuICAgIGNvbnN0IHAgPSBjYWNoZS5nZXQoZGJOYW1lKVxuICAgIGNhY2hlLmRlbGV0ZShkYk5hbWUpXG4gICAgaWYgKHApIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIDsoYXdhaXQgcCkuY2xvc2UoKVxuICAgICAgfSBjYXRjaCB7fVxuICAgIH1cbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBhc3luY1JlcXVlc3Q8VCA9IGFueT4ocmVxOiBJREJSZXF1ZXN0PFQ+KTogUHJvbWlzZTxUPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPFQ+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHJlcS5vbnN1Y2Nlc3MgPSAoKSA9PiByZXNvbHZlKHJlcS5yZXN1bHQgYXMgVClcbiAgICAgIHJlcS5vbmVycm9yID0gKCkgPT4gcmVqZWN0KHJlcS5lcnJvcilcbiAgICB9KVxuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIHdhaXRUeCh0eDogSURCVHJhbnNhY3Rpb24pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2U8dm9pZD4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgdHgub25jb21wbGV0ZSA9ICgpID0+IHJlc29sdmUoKVxuICAgICAgdHgub25hYm9ydCA9ICgpID0+IHJlamVjdCh0eC5lcnJvciA/PyBuZXcgRE9NRXhjZXB0aW9uKCdBYm9ydGVkJywgJ0Fib3J0RXJyb3InKSlcbiAgICAgIHR4Lm9uZXJyb3IgPSAoKSA9PiByZWplY3QodHguZXJyb3IgPz8gbmV3IERPTUV4Y2VwdGlvbignVHJhbnNhY3Rpb25FcnJvcicsICdVbmtub3duRXJyb3InKSlcbiAgICB9KVxuICB9XG59XG4iLCAiaW1wb3J0IHsgRW5zdXJlU3RvcmVPcHRpb25zLCBJREJQbHVzSGVscGVyIH0gZnJvbSAnLi9oZWxwZXIuanMnXG5cbmV4cG9ydCAqIGZyb20gJy4vaGVscGVyLmpzJ1xuXG5leHBvcnQgaW50ZXJmYWNlIElEQlBsdXNPcHRpb25zIHtcbiAgLyoqXG4gICAqIEJhdGNoIHNpemUgZm9yIGFzeW5jIGl0ZXJhdGlvblxuICAgKiBAZGVmYXVsdCAxMDBcbiAgICovXG4gIGl0ZXJCYXRjaD86IG51bWJlclxuICAvKiogQ3JlYXRpb24gb3B0aW9ucyAoc2VlIEVuc3VyZVN0b3JlT3B0aW9ucykgKi9cbiAgZW5zdXJlPzogRW5zdXJlU3RvcmVPcHRpb25zXG4gIC8qKlxuICAgKiBSZXRyeSBjb25maWdcbiAgICogQGRlZmF1bHQgeyBhdHRlbXB0czogMywgYmFzZURlbGF5TXM6IDE2IH1cbiAgICovXG4gIHJldHJ5PzogeyBhdHRlbXB0cz86IG51bWJlcjsgYmFzZURlbGF5TXM/OiBudW1iZXIgfVxufVxuXG4vKipcbiAqIElEQiBQbHVzXG4gKlxuICog8J+XhO+4jyBNaW5pbWFsIFByb21pc2UgYmFzZWQgSW5kZXhlZERCIFdyYXBwZXIgd2l0aCBNYXAtbGlrZSBBUElcbiAqXG4gKiBAYXV0aG9yIGRyYWdvbi1maXNoIDxkcmFnb24tZmlzaEBxcS5jb20+XG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuZXhwb3J0IGNsYXNzIElEQlBsdXM8SyBleHRlbmRzIElEQlZhbGlkS2V5ID0gSURCVmFsaWRLZXksIFYgPSBhbnk+XG4gIGltcGxlbWVudHMgQXN5bmNJdGVyYWJsZTxbSywgVl0+XG57XG4gIGNvbnN0cnVjdG9yKFxuICAgIHJlYWRvbmx5IGRiTmFtZTogc3RyaW5nLFxuICAgIHJlYWRvbmx5IHN0b3JlTmFtZTogc3RyaW5nLFxuICAgIHJlYWRvbmx5IG9wdGlvbnM6IElEQlBsdXNPcHRpb25zID0ge31cbiAgKSB7fVxuXG4gIHByaXZhdGUgZ2V0IF9pdGVyQmF0Y2goKSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5pdGVyQmF0Y2ggPz8gSURCUGx1c0hlbHBlci5kZWZhdWx0cy5pdGVyQmF0Y2hcbiAgfVxuICBwcml2YXRlIGdldCBfcmV0cnlDZmcoKSB7XG4gICAgY29uc3QgciA9IHRoaXMub3B0aW9ucy5yZXRyeSA/PyBJREJQbHVzSGVscGVyLmRlZmF1bHRzLnJldHJ5XG4gICAgcmV0dXJuIHsgYXR0ZW1wdHM6IHIuYXR0ZW1wdHMgPz8gMywgYmFzZURlbGF5TXM6IHIuYmFzZURlbGF5TXMgPz8gMTYgfVxuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfd2l0aFN0b3JlPFQ+KFxuICAgIG1vZGU6IElEQlRyYW5zYWN0aW9uTW9kZSxcbiAgICBmbjogKHN0b3JlOiBJREJPYmplY3RTdG9yZSkgPT4gUHJvbWlzZTxUPlxuICApOiBQcm9taXNlPFQ+IHtcbiAgICBjb25zdCBjZmcgPSB0aGlzLl9yZXRyeUNmZ1xuICAgIHJldHVybiBJREJQbHVzSGVscGVyLndpdGhSZXRyeTxUPihcbiAgICAgIGNmZyxcbiAgICAgIGFzeW5jICgpID0+IHtcbiAgICAgICAgY29uc3QgZGIgPSBhd2FpdCBJREJQbHVzSGVscGVyLmdldERCKHRoaXMuZGJOYW1lLCB0aGlzLnN0b3JlTmFtZSwgdGhpcy5vcHRpb25zLmVuc3VyZSlcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjb25zdCB0eCA9IGRiLnRyYW5zYWN0aW9uKHRoaXMuc3RvcmVOYW1lLCBtb2RlKVxuICAgICAgICAgIGNvbnN0IHN0b3JlID0gdHgub2JqZWN0U3RvcmUodGhpcy5zdG9yZU5hbWUpXG4gICAgICAgICAgY29uc3Qgb3V0ID0gYXdhaXQgZm4oc3RvcmUpXG4gICAgICAgICAgYXdhaXQgSURCUGx1c0hlbHBlci53YWl0VHgodHgpXG4gICAgICAgICAgcmV0dXJuIG91dFxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gUmUtdGhyb3cgdG8gbGV0IHdpdGhSZXRyeSBkZWNpZGU7IHR4IGVycm9ycyBvZnRlbiBtZWFuIGRpc2Nvbm5lY3RcbiAgICAgICAgICB0aHJvdyBlXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBhc3luYyAoZXJyKSA9PiB7XG4gICAgICAgIGlmIChJREJQbHVzSGVscGVyLnNob3VsZFJlY29ubmVjdChlcnIpKSB7XG4gICAgICAgICAgYXdhaXQgSURCUGx1c0hlbHBlci5jbG9zZUNvbm5lY3Rpb24odGhpcy5kYk5hbWUpIC8vIGxhenkgcmVjb25uZWN0IG9uIG5leHQgYXR0ZW1wdFxuICAgICAgICB9XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgYXN5bmMgZ2V0KGtleTogSyk6IFByb21pc2U8ViB8IHVuZGVmaW5lZD4ge1xuICAgIHJldHVybiB0aGlzLl93aXRoU3RvcmUoJ3JlYWRvbmx5JywgYXN5bmMgKHMpID0+IHtcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IElEQlBsdXNIZWxwZXIuYXN5bmNSZXF1ZXN0PGFueT4ocy5nZXQoa2V5IGFzIElEQlZhbGlkS2V5KSlcbiAgICAgIHJldHVybiByZXMgPT09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZCA6IChyZXMgYXMgVilcbiAgICB9KVxuICB9XG5cbiAgYXN5bmMgc2V0KGtleTogSywgdmFsdWU6IFYpOiBQcm9taXNlPHRoaXM+IHtcbiAgICBhd2FpdCB0aGlzLl93aXRoU3RvcmUoJ3JlYWR3cml0ZScsIGFzeW5jIChzKSA9PiB7XG4gICAgICBjb25zdCBoYXNLZXlQYXRoID0gdGhpcy5vcHRpb25zLmVuc3VyZT8ua2V5UGF0aCAhPSBudWxsXG4gICAgICBjb25zdCByZXEgPSBoYXNLZXlQYXRoID8gcy5wdXQodmFsdWUgYXMgYW55KSA6IHMucHV0KHZhbHVlIGFzIGFueSwga2V5IGFzIElEQlZhbGlkS2V5KVxuICAgICAgYXdhaXQgSURCUGx1c0hlbHBlci5hc3luY1JlcXVlc3QocmVxKVxuICAgICAgcmV0dXJuXG4gICAgfSlcbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgYXN5bmMgZGVsZXRlKGtleTogSyk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLl93aXRoU3RvcmUoJ3JlYWR3cml0ZScsIGFzeW5jIChzKSA9PiB7XG4gICAgICAvLyBDaGVjayBleGlzdGVuY2UgdG8gcmV0dXJuIGEgdHJ1dGhmdWwgYm9vbGVhblxuICAgICAgY29uc3QgZXhpc3RlZCA9XG4gICAgICAgIChhd2FpdCBJREJQbHVzSGVscGVyLmFzeW5jUmVxdWVzdDxhbnk+KHMuZ2V0KGtleSBhcyBJREJWYWxpZEtleSkpKSAhPT0gdW5kZWZpbmVkXG4gICAgICBhd2FpdCBJREJQbHVzSGVscGVyLmFzeW5jUmVxdWVzdChzLmRlbGV0ZShrZXkgYXMgSURCVmFsaWRLZXkpKVxuICAgICAgcmV0dXJuIGV4aXN0ZWRcbiAgICB9KVxuICB9XG5cbiAgYXN5bmMgY2xlYXIoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgYXdhaXQgdGhpcy5fd2l0aFN0b3JlKCdyZWFkd3JpdGUnLCBhc3luYyAocykgPT4ge1xuICAgICAgYXdhaXQgSURCUGx1c0hlbHBlci5hc3luY1JlcXVlc3Qocy5jbGVhcigpKVxuICAgIH0pXG4gIH1cblxuICBhc3luYyBoYXMoa2V5OiBLKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgY29uc3QgdiA9IGF3YWl0IHRoaXMuZ2V0KGtleSlcbiAgICByZXR1cm4gdiAhPT0gdW5kZWZpbmVkXG4gIH1cblxuICBhc3luYyBjb3VudCgpOiBQcm9taXNlPG51bWJlcj4ge1xuICAgIHJldHVybiB0aGlzLl93aXRoU3RvcmUoJ3JlYWRvbmx5JywgYXN5bmMgKHMpID0+IHtcbiAgICAgIGNvbnN0IG4gPSBhd2FpdCBJREJQbHVzSGVscGVyLmFzeW5jUmVxdWVzdDxudW1iZXI+KHMuY291bnQoKSlcbiAgICAgIHJldHVybiBuID8/IDBcbiAgICB9KVxuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyAqX2l0ZXJhdGVFbnRyaWVzKCk6IEFzeW5jSXRlcmFibGU8W0ssIFZdPiB7XG4gICAgLy8gUmVzdGFydCB0cmFuc2FjdGlvbiBldmVyeSBOIGl0ZW1zIHRvIGF2b2lkIGxvbmctbGl2ZWQgY3Vyc29yc1xuICAgIGxldCBsYXN0S2V5OiBJREJWYWxpZEtleSB8IG51bGwgPSBudWxsXG4gICAgbGV0IGRvbmUgPSBmYWxzZVxuICAgIGNvbnN0IGJhdGNoID0gTWF0aC5tYXgoMSwgdGhpcy5faXRlckJhdGNoKVxuXG4gICAgd2hpbGUgKCFkb25lKSB7XG4gICAgICBjb25zdCBjaHVuazogQXJyYXk8W0ssIFZdPiA9IGF3YWl0IHRoaXMuX3dpdGhTdG9yZSgncmVhZG9ubHknLCBhc3luYyAocykgPT4ge1xuICAgICAgICBjb25zdCBvdXQ6IEFycmF5PFtLLCBWXT4gPSBbXVxuICAgICAgICBjb25zdCByYW5nZSA9IGxhc3RLZXkgPT09IG51bGwgPyB1bmRlZmluZWQgOiBJREJLZXlSYW5nZS5sb3dlckJvdW5kKGxhc3RLZXksIHRydWUpXG4gICAgICAgIGF3YWl0IG5ldyBQcm9taXNlPHZvaWQ+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICBjb25zdCByZXEgPSBzLm9wZW5DdXJzb3IocmFuZ2UpXG4gICAgICAgICAgcmVxLm9uZXJyb3IgPSAoKSA9PiByZWplY3QocmVxLmVycm9yKVxuICAgICAgICAgIHJlcS5vbnN1Y2Nlc3MgPSAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjdXIgPSByZXEucmVzdWx0IGFzIElEQkN1cnNvcldpdGhWYWx1ZSB8IG51bGxcbiAgICAgICAgICAgIGlmICghY3VyKSB7XG4gICAgICAgICAgICAgIGRvbmUgPSB0cnVlXG4gICAgICAgICAgICAgIHJlc29sdmUoKVxuICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG91dC5wdXNoKFtjdXIua2V5IGFzIEssIGN1ci52YWx1ZSBhcyBWXSlcbiAgICAgICAgICAgIGxhc3RLZXkgPSBjdXIua2V5IGFzIElEQlZhbGlkS2V5XG4gICAgICAgICAgICBpZiAob3V0Lmxlbmd0aCA+PSBiYXRjaCkge1xuICAgICAgICAgICAgICByZXNvbHZlKClcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGN1ci5jb250aW51ZSgpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gb3V0XG4gICAgICB9KVxuXG4gICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgY2h1bmspIHlpZWxkIGl0ZW1cbiAgICAgIGlmIChjaHVuay5sZW5ndGggPT09IDApIGJyZWFrXG4gICAgfVxuICB9XG5cbiAgZW50cmllcygpOiBBc3luY0l0ZXJhYmxlPFtLLCBWXT4ge1xuICAgIHJldHVybiB0aGlzLl9pdGVyYXRlRW50cmllcygpXG4gIH1cblxuICBhc3luYyAqa2V5cygpOiBBc3luY0l0ZXJhYmxlPEs+IHtcbiAgICBmb3IgYXdhaXQgKGNvbnN0IFtrXSBvZiB0aGlzLmVudHJpZXMoKSkgeWllbGQga1xuICB9XG5cbiAgYXN5bmMgKnZhbHVlcygpOiBBc3luY0l0ZXJhYmxlPFY+IHtcbiAgICBmb3IgYXdhaXQgKGNvbnN0IFssIHZdIG9mIHRoaXMuZW50cmllcygpKSB5aWVsZCB2XG4gIH1cblxuICBbU3ltYm9sLmFzeW5jSXRlcmF0b3JdKCk6IEFzeW5jSXRlcmF0b3I8W0ssIFZdPiB7XG4gICAgcmV0dXJuIHRoaXMuZW50cmllcygpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSgpXG4gIH1cblxuICBhc3luYyBmb3JFYWNoKFxuICAgIGNiOiAodmFsdWU6IFYsIGtleTogSywgc3RvcmU6IElEQlBsdXM8SywgVj4pID0+IHZvaWQgfCBQcm9taXNlPHZvaWQ+XG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIGZvciBhd2FpdCAoY29uc3QgW2ssIHZdIG9mIHRoaXMuZW50cmllcygpKSB7XG4gICAgICBhd2FpdCBjYih2IGFzIFYsIGsgYXMgSywgdGhpcylcbiAgICB9XG4gIH1cblxuICBhc3luYyBnZXRNYW55KGtleXM6IEl0ZXJhYmxlPEs+IHwgQXN5bmNJdGVyYWJsZTxLPik6IFByb21pc2U8TWFwPEssIFYgfCB1bmRlZmluZWQ+PiB7XG4gICAgY29uc3Qgb3V0ID0gbmV3IE1hcDxLLCBWIHwgdW5kZWZpbmVkPigpXG4gICAgZm9yIGF3YWl0IChjb25zdCBrIG9mIGtleXMpIG91dC5zZXQoaywgdW5kZWZpbmVkKVxuICAgIGF3YWl0IHRoaXMuX3dpdGhTdG9yZSgncmVhZG9ubHknLCBhc3luYyAocykgPT4ge1xuICAgICAgYXdhaXQgUHJvbWlzZS5hbGwoXG4gICAgICAgIG91dC5rZXlzKCkubWFwKGFzeW5jIChrKSA9PiB7XG4gICAgICAgICAgY29uc3QgdiA9IGF3YWl0IElEQlBsdXNIZWxwZXIuYXN5bmNSZXF1ZXN0PGFueT4ocy5nZXQoaykpXG4gICAgICAgICAgb3V0LnNldChrLCB2ID09PSB1bmRlZmluZWQgPyB1bmRlZmluZWQgOiAodiBhcyBWKSlcbiAgICAgICAgfSlcbiAgICAgIClcbiAgICB9KVxuICAgIHJldHVybiBvdXRcbiAgfVxuXG4gIGFzeW5jIHNldE1hbnkoZW50cmllczogSXRlcmFibGU8W0ssIFZdPiB8IEFzeW5jSXRlcmFibGU8W0ssIFZdPik6IFByb21pc2U8dGhpcz4ge1xuICAgIGNvbnN0IGhhc0tleVBhdGggPSB0aGlzLm9wdGlvbnMuZW5zdXJlPy5rZXlQYXRoICE9IG51bGxcbiAgICBhd2FpdCB0aGlzLl93aXRoU3RvcmUoJ3JlYWR3cml0ZScsIGFzeW5jIChzKSA9PiB7XG4gICAgICBmb3IgYXdhaXQgKGNvbnN0IFtrLCB2XSBvZiBlbnRyaWVzIGFzIGFueSkge1xuICAgICAgICBjb25zdCByZXEgPSBoYXNLZXlQYXRoID8gcy5wdXQodiBhcyBhbnkpIDogcy5wdXQodiBhcyBhbnksIGsgYXMgSURCVmFsaWRLZXkpXG4gICAgICAgIGF3YWl0IElEQlBsdXNIZWxwZXIuYXN5bmNSZXF1ZXN0KHJlcSlcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICBhc3luYyBkZWxldGVNYW55KGtleXM6IEl0ZXJhYmxlPEs+IHwgQXN5bmNJdGVyYWJsZTxLPik6IFByb21pc2U8bnVtYmVyPiB7XG4gICAgbGV0IGRlbGV0ZWQgPSAwXG4gICAgYXdhaXQgdGhpcy5fd2l0aFN0b3JlKCdyZWFkd3JpdGUnLCBhc3luYyAocykgPT4ge1xuICAgICAgZm9yIGF3YWl0IChjb25zdCBrIG9mIGtleXMgYXMgYW55KSB7XG4gICAgICAgIGNvbnN0IGV4aXN0ZWQgPVxuICAgICAgICAgIChhd2FpdCBJREJQbHVzSGVscGVyLmFzeW5jUmVxdWVzdDxhbnk+KHMuZ2V0KGsgYXMgSURCVmFsaWRLZXkpKSkgIT09IHVuZGVmaW5lZFxuICAgICAgICBpZiAoZXhpc3RlZCkgZGVsZXRlZCsrXG4gICAgICAgIGF3YWl0IElEQlBsdXNIZWxwZXIuYXN5bmNSZXF1ZXN0KHMuZGVsZXRlKGsgYXMgSURCVmFsaWRLZXkpKVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIGRlbGV0ZWRcbiAgfVxuXG4gIGFzeW5jIGRpc2Nvbm5lY3QoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgYXdhaXQgSURCUGx1c0hlbHBlci5jbG9zZUNvbm5lY3Rpb24odGhpcy5kYk5hbWUpXG4gIH1cbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBLG9GQUFBQSxVQUFBQyxTQUFBO0FBQUE7QUFDQSxRQUFJLFFBQVEsU0FBVSxJQUFJO0FBQ3hCLGFBQU8sTUFBTSxHQUFHLFNBQVMsUUFBUTtBQUFBLElBQ25DO0FBR0EsSUFBQUEsUUFBTztBQUFBLElBRUwsTUFBTSxPQUFPLGNBQWMsWUFBWSxVQUFVLEtBQ2pELE1BQU0sT0FBTyxVQUFVLFlBQVksTUFBTTtBQUFBLElBRXpDLE1BQU0sT0FBTyxRQUFRLFlBQVksSUFBSSxLQUNyQyxNQUFNLE9BQU8sVUFBVSxZQUFZLE1BQU0sS0FDekMsTUFBTSxPQUFPRCxZQUFRLFlBQVlBLFFBQUk7QUFBQSxJQUVwQyw0QkFBWTtBQUFFLGFBQU87QUFBQSxJQUFNLEdBQUcsS0FBSyxTQUFTLGFBQWEsRUFBRTtBQUFBO0FBQUE7OztBQ2Y5RDtBQUFBLDhFQUFBRSxVQUFBQyxTQUFBO0FBQUE7QUFDQSxJQUFBQSxRQUFPLFVBQVUsU0FBVSxNQUFNO0FBQy9CLFVBQUk7QUFDRixlQUFPLENBQUMsQ0FBQyxLQUFLO0FBQUEsTUFDaEIsU0FBUyxPQUFPO0FBQ2QsZUFBTztBQUFBLE1BQ1Q7QUFBQSxJQUNGO0FBQUE7QUFBQTs7O0FDUEE7QUFBQSxvRkFBQUMsVUFBQUMsU0FBQTtBQUFBO0FBQ0EsUUFBSSxRQUFRO0FBR1osSUFBQUEsUUFBTyxVQUFVLENBQUMsTUFBTSxXQUFZO0FBRWxDLGFBQU8sT0FB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TUFBQTtBQUFBLGlCQUFBTixPQUFBdk4sTUFBQSxNQUFBQyxTQUFBO1FBQUE7TUFBQSxHQUFBLENBQUEsR0FDTU47SUFBQSxDQUFBLEVBQUE7RUFDVDtFQUVNbU8sYUFBNEI7QUFBQSxRQUFBQyxVQUFBO0FBQUEsV0FBQTdOLGtCQUFBLGFBQUE7QUFDaEMsWUFBTS9CLEVBQWMwSCxnQkFBZ0JrSSxRQUFLeEgsTUFBTTtJQUFBLENBQUEsRUFBQTtFQUNqRDtBQUNGOyIsCiAgIm5hbWVzIjogWyJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImdsb2JhbFRoaXMiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZ2xvYmFsVGhpcyIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJnbG9iYWxUaGlzIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImdsb2JhbFRoaXMiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZ2xvYmFsVGhpcyIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJnbG9iYWxUaGlzIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImdsb2JhbFRoaXMiLCAiU3ltYm9sIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImdsb2JhbFRoaXMiLCAiZG9jdW1lbnQiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImdsb2JhbFRoaXMiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZ2xvYmFsVGhpcyIsICJUeXBlRXJyb3IiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAieCIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgImV4cG9ydHMiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZ2xvYmFsVGhpcyIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJnbG9iYWxUaGlzIiwgIkVycm9yIiwgIkRPTUV4Y2VwdGlvbiIsICJpZGJfcGx1c19leHBvcnRzIiwgIl9fZXhwb3J0IiwgIklEQlBsdXMiLCAieCIsICJJREJQbHVzSGVscGVyIiwgInMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAiX190b0NvbW1vbkpTIiwgImkiLCAiY2FjaGUiLCAiTWFwIiwgImRlZmF1bHRzIiwgIk9iamVjdCIsICJmcmVlemUiLCAiaXRlckJhdGNoIiwgInJldHJ5IiwgImF0dGVtcHRzIiwgImJhc2VEZWxheU1zIiwgInNsZWVwIiwgImUiLCAiUHJvbWlzZSIsICJuIiwgInNldFRpbWVvdXQiLCAidCIsICJfZSRuYW1lIiwgIm5hbWUiLCAic2hvdWxkUmVjb25uZWN0IiwgImEiLCAiX3giLCAiX3gyIiwgIl94MyIsICJfYSIsICJhcHBseSIsICJhcmd1bWVudHMiLCAiX2FzeW5jVG9HZW5lcmF0b3IiLCAiciIsICJNYXRoIiwgIm1heCIsICJ5IiwgInJ1biIsICJlcnIiLCAiZCIsICJvbkZhaWwiLCAiYmFja29mZiIsICJwb3ciLCAiZmxvb3IiLCAicmFuZG9tIiwgInUiLCAiRXJyb3IiLCAid2l0aFJldHJ5IiwgIm9wZW5SYXciLCAidyIsICJyZXEiLCAiaW5kZXhlZERCIiwgIm9wZW4iLCAib251cGdyYWRlbmVlZGVkIiwgImRiIiwgInJlc3VsdCIsICJsIiwgInRyYW5zYWN0aW9uIiwgInVwZ3JhZGUiLCAicmVqZWN0IiwgIm9uZXJyb3IiLCAiZXJyb3IiLCAib25ibG9ja2VkIiwgIm9uc3VjY2VzcyIsICJvbnZlcnNpb25jaGFuZ2UiLCAiY2xvc2UiLCAiZGVsZXRlIiwgImVuc3VyZVNjaGVtYSIsICJfeDQiLCAiX3g1IiwgIl94NiIsICJfaCIsICJfciRpbmRleGVzIiwgIm5lZWRTdG9yZSIsICJvYmplY3RTdG9yZU5hbWVzIiwgImNvbnRhaW5zIiwgImluZGV4ZXMiLCAibGVuZ3RoIiwgInAiLCAib2JqZWN0U3RvcmUiLCAiZyIsICJTZXQiLCAiQXJyYXkiLCAiZnJvbSIsICJpbmRleE5hbWVzIiwgIm1pc3NpbmdJZHgiLCAiZmlsdGVyIiwgIm0iLCAiaGFzIiwgIlIiLCAib25jb21wbGV0ZSIsICJyZXMiLCAib25hYm9ydCIsICJuZXh0VmVyIiwgInZlcnNpb24iLCAidXBncmFkZWQiLCAibyIsICJfciRrZXlQYXRoIiwgInN0b3JlIiwgImNyZWF0ZU9iamVjdFN0b3JlIiwgImtleVBhdGgiLCAiYXV0b0luY3JlbWVudCIsICJfaXRlcmF0b3I4IiwgIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwgIl9zdGVwOCIsICJkb25lIiwgImlkeCIsICJ2YWx1ZSIsICJjcmVhdGVJbmRleCIsICJvcHRpb25zIiwgImYiLCAiYyIsICJfeDciLCAiX3g4IiwgIl94OSIsICJfYyIsICJnZXQiLCAidGhlbiIsICJoIiwgInNldCIsICJnZXREQiIsICJfeDAiLCAiX2YiLCAiY2xvc2VDb25uZWN0aW9uIiwgInYiLCAiYXN5bmNSZXF1ZXN0IiwgIlMiLCAidHgiLCAiX2UkZXJyb3IiLCAiRE9NRXhjZXB0aW9uIiwgIl9lJGVycm9yMiIsICJ3YWl0VHgiLCAiY29uc3RydWN0b3IiLCAiZGJOYW1lIiwgInN0b3JlTmFtZSIsICJfaXRlckJhdGNoIiwgIl90aGlzJG9wdGlvbnMkaXRlckJhdCIsICJfcmV0cnlDZmciLCAiX3RoaXMkb3B0aW9ucyRyZXRyeSIsICJfdCRhdHRlbXB0cyIsICJfdCRiYXNlRGVsYXlNcyIsICJfd2l0aFN0b3JlIiwgIl90aGlzNCIsICJjZmciLCAiZW5zdXJlIiwgIl9yZWYzIiwgIl94MSIsICJrZXkiLCAiX3RoaXM1IiwgIl9yZWY0IiwgIl94MTAiLCAiX3RoaXM2IiwgIl9yZWY1IiwgIl90aGlzNiRvcHRpb25zJGVuc3VyZSIsICJwdXQiLCAiX3gxMSIsICJfdGhpczciLCAiX3JlZjYiLCAiZXhpc3RlZCIsICJfeDEyIiwgImNsZWFyIiwgIl90aGlzOCIsICJfcmVmNyIsICJfeDEzIiwgIl90aGlzOSIsICJjb3VudCIsICJfdGhpczAiLCAiX3JlZjgiLCAiX3lpZWxkJHMkYXN5bmNSZXF1ZXN0IiwgIl94MTQiLCAiX2l0ZXJhdGVFbnRyaWVzIiwgIl90aGlzIiwgIl93cmFwQXN5bmNHZW5lcmF0b3IiLCAibGFzdEtleSIsICJiYXRjaCIsICJjaHVuayIsICJfYXdhaXRBc3luY0dlbmVyYXRvciIsICJfcmVmOSIsICJvdXQiLCAiSURCS2V5UmFuZ2UiLCAibG93ZXJCb3VuZCIsICJvcGVuQ3Vyc29yIiwgImN1ciIsICJwdXNoIiwgImNvbnRpbnVlIiwgIl94MTUiLCAiX2l0ZXJhdG9yOSIsICJfc3RlcDkiLCAiaXRlbSIsICJlbnRyaWVzIiwgImtleXMiLCAiX3RoaXMyIiwgIl9pdGVyYXRvckFicnVwdENvbXBsZXRpb24iLCAiX2RpZEl0ZXJhdG9yRXJyb3IiLCAiX2l0ZXJhdG9yRXJyb3IiLCAiX2l0ZXJhdG9yIiwgIl9hc3luY0l0ZXJhdG9yIiwgIl9zdGVwIiwgIm5leHQiLCAiayIsICJyZXR1cm4iLCAidmFsdWVzIiwgIl90aGlzMyIsICJfaXRlcmF0b3JBYnJ1cHRDb21wbGV0aW9uMiIsICJfZGlkSXRlcmF0b3JFcnJvcjIiLCAiX2l0ZXJhdG9yRXJyb3IyIiwgIl9pdGVyYXRvcjIiLCAiX3N0ZXAyIiwgIlN5bWJvbCIsICJhc3luY0l0ZXJhdG9yIiwgImZvckVhY2giLCAiX3RoaXMxIiwgIl9pdGVyYXRvckFicnVwdENvbXBsZXRpb24zIiwgIl9kaWRJdGVyYXRvckVycm9yMyIsICJfaXRlcmF0b3JFcnJvcjMiLCAiX2l0ZXJhdG9yMyIsICJfc3RlcDMiLCAiY2IiLCAiZ2V0TWFueSIsICJfdGhpczEwIiwgIl9pdGVyYXRvckFicnVwdENvbXBsZXRpb240IiwgIl9kaWRJdGVyYXRvckVycm9yNCIsICJfaXRlcmF0b3JFcnJvcjQiLCAiX2l0ZXJhdG9yNCIsICJfc3RlcDQiLCAiX3JlZjAiLCAiYWxsIiwgIm1hcCIsICJfcmVmMSIsICJfeDE3IiwgIl94MTYiLCAic2V0TWFueSIsICJfdGhpczExIiwgIl90aGlzMTEkb3B0aW9ucyRlbnN1ciIsICJoYXNLZXlQYXRoIiwgIl9yZWYxMCIsICJfaXRlcmF0b3JBYnJ1cHRDb21wbGV0aW9uNSIsICJfZGlkSXRlcmF0b3JFcnJvcjUiLCAiX2l0ZXJhdG9yRXJyb3I1IiwgIl9pdGVyYXRvcjUiLCAiX3N0ZXA1IiwgIl94MTgiLCAiZGVsZXRlTWFueSIsICJfdGhpczEyIiwgImRlbGV0ZWQiLCAiX3JlZjExIiwgIl9pdGVyYXRvckFicnVwdENvbXBsZXRpb242IiwgIl9kaWRJdGVyYXRvckVycm9yNiIsICJfaXRlcmF0b3JFcnJvcjYiLCAiX2l0ZXJhdG9yNiIsICJfc3RlcDYiLCAiX3gxOSIsICJkaXNjb25uZWN0IiwgIl90aGlzMTMiXQp9Cg==

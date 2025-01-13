/**
 * SPDX-License-Identifier: MIT
 * _addText: '{{Gadget Header|license=MIT|attribution=Yawei sun}}'
 *
 * @base {@link https://github.com/vsme/chinese-days}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/ChineseDays}
 * @license MIT {@link https://github.com/vsme/chinese-days/blob/main/LICENSE}
 */

/**
 * MIT License
 *
 * Copyright (c) 2024 Yawei sun
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
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/global-this.js
var require_global_this = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/global-this.js"(exports2, module2) {
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

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/fails.js
var require_fails = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/fails.js"(exports2, module2) {
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

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/descriptors.js
var require_descriptors = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/descriptors.js"(exports2, module2) {
    "use strict";
    var fails = require_fails();
    module2.exports = !fails(function() {
      return Object.defineProperty({}, 1, { get: function() {
        return 7;
      } })[1] !== 7;
    });
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/function-bind-native.js
var require_function_bind_native = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/function-bind-native.js"(exports2, module2) {
    "use strict";
    var fails = require_fails();
    module2.exports = !fails(function() {
      var test = function() {
      }.bind();
      return typeof test != "function" || test.hasOwnProperty("prototype");
    });
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/function-call.js
var require_function_call = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/function-call.js"(exports2, module2) {
    "use strict";
    var NATIVE_BIND = require_function_bind_native();
    var call = Function.prototype.call;
    module2.exports = NATIVE_BIND ? call.bind(call) : function() {
      return call.apply(call, arguments);
    };
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/object-property-is-enumerable.js
var require_object_property_is_enumerable = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/object-property-is-enumerable.js"(exports2) {
    "use strict";
    var $propertyIsEnumerable = {}.propertyIsEnumerable;
    var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({ 1: 2 }, 1);
    exports2.f = NASHORN_BUG ? function propertyIsEnumerable(V2) {
      var descriptor = getOwnPropertyDescriptor(this, V2);
      return !!descriptor && descriptor.enumerable;
    } : $propertyIsEnumerable;
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/create-property-descriptor.js
var require_create_property_descriptor = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/create-property-descriptor.js"(exports2, module2) {
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

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/function-uncurry-this.js
var require_function_uncurry_this = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/function-uncurry-this.js"(exports2, module2) {
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

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/classof-raw.js
var require_classof_raw = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/classof-raw.js"(exports2, module2) {
    "use strict";
    var uncurryThis = require_function_uncurry_this();
    var toString = uncurryThis({}.toString);
    var stringSlice = uncurryThis("".slice);
    module2.exports = function(it) {
      return stringSlice(toString(it), 8, -1);
    };
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/indexed-object.js
var require_indexed_object = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/indexed-object.js"(exports2, module2) {
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

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/is-null-or-undefined.js
var require_is_null_or_undefined = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/is-null-or-undefined.js"(exports2, module2) {
    "use strict";
    module2.exports = function(it) {
      return it === null || it === void 0;
    };
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/require-object-coercible.js
var require_require_object_coercible = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/require-object-coercible.js"(exports2, module2) {
    "use strict";
    var isNullOrUndefined = require_is_null_or_undefined();
    var $TypeError = TypeError;
    module2.exports = function(it) {
      if (isNullOrUndefined(it)) throw new $TypeError("Can't call method on " + it);
      return it;
    };
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/to-indexed-object.js
var require_to_indexed_object = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/to-indexed-object.js"(exports2, module2) {
    "use strict";
    var IndexedObject = require_indexed_object();
    var requireObjectCoercible = require_require_object_coercible();
    module2.exports = function(it) {
      return IndexedObject(requireObjectCoercible(it));
    };
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/is-callable.js
var require_is_callable = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/is-callable.js"(exports2, module2) {
    "use strict";
    var documentAll = typeof document == "object" && document.all;
    module2.exports = typeof documentAll == "undefined" && documentAll !== void 0 ? function(argument) {
      return typeof argument == "function" || argument === documentAll;
    } : function(argument) {
      return typeof argument == "function";
    };
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/is-object.js
var require_is_object = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/is-object.js"(exports2, module2) {
    "use strict";
    var isCallable = require_is_callable();
    module2.exports = function(it) {
      return typeof it == "object" ? it !== null : isCallable(it);
    };
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/get-built-in.js
var require_get_built_in = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/get-built-in.js"(exports2, module2) {
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

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/object-is-prototype-of.js
var require_object_is_prototype_of = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/object-is-prototype-of.js"(exports2, module2) {
    "use strict";
    var uncurryThis = require_function_uncurry_this();
    module2.exports = uncurryThis({}.isPrototypeOf);
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/environment-user-agent.js
var require_environment_user_agent = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/environment-user-agent.js"(exports2, module2) {
    "use strict";
    var globalThis2 = require_global_this();
    var navigator = globalThis2.navigator;
    var userAgent = navigator && navigator.userAgent;
    module2.exports = userAgent ? String(userAgent) : "";
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/environment-v8-version.js
var require_environment_v8_version = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/environment-v8-version.js"(exports2, module2) {
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

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/symbol-constructor-detection.js
var require_symbol_constructor_detection = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/symbol-constructor-detection.js"(exports2, module2) {
    "use strict";
    var V8_VERSION = require_environment_v8_version();
    var fails = require_fails();
    var globalThis2 = require_global_this();
    var $String = globalThis2.String;
    module2.exports = !!Object.getOwnPropertySymbols && !fails(function() {
      var symbol = Symbol("symbol detection");
      return !$String(symbol) || !(Object(symbol) instanceof Symbol) || // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
      !Symbol.sham && V8_VERSION && V8_VERSION < 41;
    });
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/use-symbol-as-uid.js
var require_use_symbol_as_uid = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/use-symbol-as-uid.js"(exports2, module2) {
    "use strict";
    var NATIVE_SYMBOL = require_symbol_constructor_detection();
    module2.exports = NATIVE_SYMBOL && !Symbol.sham && typeof Symbol.iterator == "symbol";
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/is-symbol.js
var require_is_symbol = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/is-symbol.js"(exports2, module2) {
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

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/try-to-string.js
var require_try_to_string = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/try-to-string.js"(exports2, module2) {
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

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/a-callable.js
var require_a_callable = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/a-callable.js"(exports2, module2) {
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

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/get-method.js
var require_get_method = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/get-method.js"(exports2, module2) {
    "use strict";
    var aCallable = require_a_callable();
    var isNullOrUndefined = require_is_null_or_undefined();
    module2.exports = function(V2, P2) {
      var func = V2[P2];
      return isNullOrUndefined(func) ? void 0 : aCallable(func);
    };
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/ordinary-to-primitive.js
var require_ordinary_to_primitive = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/ordinary-to-primitive.js"(exports2, module2) {
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

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/is-pure.js
var require_is_pure = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/is-pure.js"(exports2, module2) {
    "use strict";
    module2.exports = false;
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/define-global-property.js
var require_define_global_property = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/define-global-property.js"(exports2, module2) {
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

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/shared-store.js
var require_shared_store = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/shared-store.js"(exports2, module2) {
    "use strict";
    var IS_PURE = require_is_pure();
    var globalThis2 = require_global_this();
    var defineGlobalProperty = require_define_global_property();
    var SHARED = "__core-js_shared__";
    var store = module2.exports = globalThis2[SHARED] || defineGlobalProperty(SHARED, {});
    (store.versions || (store.versions = [])).push({
      version: "3.40.0",
      mode: IS_PURE ? "pure" : "global",
      copyright: "© 2014-2025 Denis Pushkarev (zloirock.ru)",
      license: "https://github.com/zloirock/core-js/blob/v3.40.0/LICENSE",
      source: "https://github.com/zloirock/core-js"
    });
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/shared.js
var require_shared = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/shared.js"(exports2, module2) {
    "use strict";
    var store = require_shared_store();
    module2.exports = function(key, value) {
      return store[key] || (store[key] = value || {});
    };
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/to-object.js
var require_to_object = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/to-object.js"(exports2, module2) {
    "use strict";
    var requireObjectCoercible = require_require_object_coercible();
    var $Object = Object;
    module2.exports = function(argument) {
      return $Object(requireObjectCoercible(argument));
    };
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/has-own-property.js
var require_has_own_property = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/has-own-property.js"(exports2, module2) {
    "use strict";
    var uncurryThis = require_function_uncurry_this();
    var toObject = require_to_object();
    var hasOwnProperty = uncurryThis({}.hasOwnProperty);
    module2.exports = Object.hasOwn || function hasOwn(it, key) {
      return hasOwnProperty(toObject(it), key);
    };
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/uid.js
var require_uid = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/uid.js"(exports2, module2) {
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

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/well-known-symbol.js
var require_well_known_symbol = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/well-known-symbol.js"(exports2, module2) {
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

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/to-primitive.js
var require_to_primitive = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/to-primitive.js"(exports2, module2) {
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

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/to-property-key.js
var require_to_property_key = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/to-property-key.js"(exports2, module2) {
    "use strict";
    var toPrimitive = require_to_primitive();
    var isSymbol = require_is_symbol();
    module2.exports = function(argument) {
      var key = toPrimitive(argument, "string");
      return isSymbol(key) ? key : key + "";
    };
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/document-create-element.js
var require_document_create_element = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/document-create-element.js"(exports2, module2) {
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

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/ie8-dom-define.js
var require_ie8_dom_define = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/ie8-dom-define.js"(exports2, module2) {
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

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/object-get-own-property-descriptor.js
var require_object_get_own_property_descriptor = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/object-get-own-property-descriptor.js"(exports2) {
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
    exports2.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O2, P2) {
      O2 = toIndexedObject(O2);
      P2 = toPropertyKey(P2);
      if (IE8_DOM_DEFINE) try {
        return $getOwnPropertyDescriptor(O2, P2);
      } catch (error) {
      }
      if (hasOwn(O2, P2)) return createPropertyDescriptor(!call(propertyIsEnumerableModule.f, O2, P2), O2[P2]);
    };
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/v8-prototype-define-bug.js
var require_v8_prototype_define_bug = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/v8-prototype-define-bug.js"(exports2, module2) {
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

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/an-object.js
var require_an_object = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/an-object.js"(exports2, module2) {
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

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/object-define-property.js
var require_object_define_property = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/object-define-property.js"(exports2) {
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
    exports2.f = DESCRIPTORS ? V8_PROTOTYPE_DEFINE_BUG ? function defineProperty(O2, P2, Attributes) {
      anObject(O2);
      P2 = toPropertyKey(P2);
      anObject(Attributes);
      if (typeof O2 === "function" && P2 === "prototype" && "value" in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
        var current = $getOwnPropertyDescriptor(O2, P2);
        if (current && current[WRITABLE]) {
          O2[P2] = Attributes.value;
          Attributes = {
            configurable: CONFIGURABLE in Attributes ? Attributes[CONFIGURABLE] : current[CONFIGURABLE],
            enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
            writable: false
          };
        }
      }
      return $defineProperty(O2, P2, Attributes);
    } : $defineProperty : function defineProperty(O2, P2, Attributes) {
      anObject(O2);
      P2 = toPropertyKey(P2);
      anObject(Attributes);
      if (IE8_DOM_DEFINE) try {
        return $defineProperty(O2, P2, Attributes);
      } catch (error) {
      }
      if ("get" in Attributes || "set" in Attributes) throw new $TypeError("Accessors not supported");
      if ("value" in Attributes) O2[P2] = Attributes.value;
      return O2;
    };
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/create-non-enumerable-property.js
var require_create_non_enumerable_property = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/create-non-enumerable-property.js"(exports2, module2) {
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

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/function-name.js
var require_function_name = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/function-name.js"(exports2, module2) {
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

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/inspect-source.js
var require_inspect_source = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/inspect-source.js"(exports2, module2) {
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

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/weak-map-basic-detection.js
var require_weak_map_basic_detection = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/weak-map-basic-detection.js"(exports2, module2) {
    "use strict";
    var globalThis2 = require_global_this();
    var isCallable = require_is_callable();
    var WeakMap = globalThis2.WeakMap;
    module2.exports = isCallable(WeakMap) && /native code/.test(String(WeakMap));
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/shared-key.js
var require_shared_key = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/shared-key.js"(exports2, module2) {
    "use strict";
    var shared = require_shared();
    var uid = require_uid();
    var keys = shared("keys");
    module2.exports = function(key) {
      return keys[key] || (keys[key] = uid(key));
    };
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/hidden-keys.js
var require_hidden_keys = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/hidden-keys.js"(exports2, module2) {
    "use strict";
    module2.exports = {};
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/internal-state.js
var require_internal_state = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/internal-state.js"(exports2, module2) {
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

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/make-built-in.js
var require_make_built_in = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/make-built-in.js"(exports2, module2) {
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

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/define-built-in.js
var require_define_built_in = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/define-built-in.js"(exports2, module2) {
    "use strict";
    var isCallable = require_is_callable();
    var definePropertyModule = require_object_define_property();
    var makeBuiltIn = require_make_built_in();
    var defineGlobalProperty = require_define_global_property();
    module2.exports = function(O2, key, value, options) {
      if (!options) options = {};
      var simple = options.enumerable;
      var name = options.name !== void 0 ? options.name : key;
      if (isCallable(value)) makeBuiltIn(value, name, options);
      if (options.global) {
        if (simple) O2[key] = value;
        else defineGlobalProperty(key, value);
      } else {
        try {
          if (!options.unsafe) delete O2[key];
          else if (O2[key]) simple = true;
        } catch (error) {
        }
        if (simple) O2[key] = value;
        else definePropertyModule.f(O2, key, {
          value,
          enumerable: false,
          configurable: !options.nonConfigurable,
          writable: !options.nonWritable
        });
      }
      return O2;
    };
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/math-trunc.js
var require_math_trunc = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/math-trunc.js"(exports2, module2) {
    "use strict";
    var ceil = Math.ceil;
    var floor = Math.floor;
    module2.exports = Math.trunc || function trunc(x2) {
      var n = +x2;
      return (n > 0 ? floor : ceil)(n);
    };
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/to-integer-or-infinity.js
var require_to_integer_or_infinity = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/to-integer-or-infinity.js"(exports2, module2) {
    "use strict";
    var trunc = require_math_trunc();
    module2.exports = function(argument) {
      var number = +argument;
      return number !== number || number === 0 ? 0 : trunc(number);
    };
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/to-absolute-index.js
var require_to_absolute_index = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/to-absolute-index.js"(exports2, module2) {
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

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/to-length.js
var require_to_length = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/to-length.js"(exports2, module2) {
    "use strict";
    var toIntegerOrInfinity = require_to_integer_or_infinity();
    var min = Math.min;
    module2.exports = function(argument) {
      var len = toIntegerOrInfinity(argument);
      return len > 0 ? min(len, 9007199254740991) : 0;
    };
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/length-of-array-like.js
var require_length_of_array_like = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/length-of-array-like.js"(exports2, module2) {
    "use strict";
    var toLength = require_to_length();
    module2.exports = function(obj) {
      return toLength(obj.length);
    };
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/array-includes.js
var require_array_includes = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/array-includes.js"(exports2, module2) {
    "use strict";
    var toIndexedObject = require_to_indexed_object();
    var toAbsoluteIndex = require_to_absolute_index();
    var lengthOfArrayLike = require_length_of_array_like();
    var createMethod = function(IS_INCLUDES) {
      return function($this, el, fromIndex) {
        var O2 = toIndexedObject($this);
        var length = lengthOfArrayLike(O2);
        if (length === 0) return !IS_INCLUDES && -1;
        var index = toAbsoluteIndex(fromIndex, length);
        var value;
        if (IS_INCLUDES && el !== el) while (length > index) {
          value = O2[index++];
          if (value !== value) return true;
        }
        else for (; length > index; index++) {
          if ((IS_INCLUDES || index in O2) && O2[index] === el) return IS_INCLUDES || index || 0;
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

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/object-keys-internal.js
var require_object_keys_internal = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/object-keys-internal.js"(exports2, module2) {
    "use strict";
    var uncurryThis = require_function_uncurry_this();
    var hasOwn = require_has_own_property();
    var toIndexedObject = require_to_indexed_object();
    var indexOf = require_array_includes().indexOf;
    var hiddenKeys = require_hidden_keys();
    var push = uncurryThis([].push);
    module2.exports = function(object, names) {
      var O2 = toIndexedObject(object);
      var i = 0;
      var result = [];
      var key;
      for (key in O2) !hasOwn(hiddenKeys, key) && hasOwn(O2, key) && push(result, key);
      while (names.length > i) if (hasOwn(O2, key = names[i++])) {
        ~indexOf(result, key) || push(result, key);
      }
      return result;
    };
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/enum-bug-keys.js
var require_enum_bug_keys = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/enum-bug-keys.js"(exports2, module2) {
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

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/object-get-own-property-names.js
var require_object_get_own_property_names = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/object-get-own-property-names.js"(exports2) {
    "use strict";
    var internalObjectKeys = require_object_keys_internal();
    var enumBugKeys = require_enum_bug_keys();
    var hiddenKeys = enumBugKeys.concat("length", "prototype");
    exports2.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O2) {
      return internalObjectKeys(O2, hiddenKeys);
    };
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/object-get-own-property-symbols.js
var require_object_get_own_property_symbols = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/object-get-own-property-symbols.js"(exports2) {
    "use strict";
    exports2.f = Object.getOwnPropertySymbols;
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/own-keys.js
var require_own_keys = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/own-keys.js"(exports2, module2) {
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

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/copy-constructor-properties.js
var require_copy_constructor_properties = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/copy-constructor-properties.js"(exports2, module2) {
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

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/is-forced.js
var require_is_forced = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/is-forced.js"(exports2, module2) {
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

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/export.js
var require_export = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/export.js"(exports2, module2) {
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

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/an-instance.js
var require_an_instance = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/an-instance.js"(exports2, module2) {
    "use strict";
    var isPrototypeOf = require_object_is_prototype_of();
    var $TypeError = TypeError;
    module2.exports = function(it, Prototype) {
      if (isPrototypeOf(Prototype, it)) return it;
      throw new $TypeError("Incorrect invocation");
    };
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/correct-prototype-getter.js
var require_correct_prototype_getter = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/correct-prototype-getter.js"(exports2, module2) {
    "use strict";
    var fails = require_fails();
    module2.exports = !fails(function() {
      function F2() {
      }
      F2.prototype.constructor = null;
      return Object.getPrototypeOf(new F2()) !== F2.prototype;
    });
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/object-get-prototype-of.js
var require_object_get_prototype_of = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/object-get-prototype-of.js"(exports2, module2) {
    "use strict";
    var hasOwn = require_has_own_property();
    var isCallable = require_is_callable();
    var toObject = require_to_object();
    var sharedKey = require_shared_key();
    var CORRECT_PROTOTYPE_GETTER = require_correct_prototype_getter();
    var IE_PROTO = sharedKey("IE_PROTO");
    var $Object = Object;
    var ObjectPrototype = $Object.prototype;
    module2.exports = CORRECT_PROTOTYPE_GETTER ? $Object.getPrototypeOf : function(O2) {
      var object = toObject(O2);
      if (hasOwn(object, IE_PROTO)) return object[IE_PROTO];
      var constructor = object.constructor;
      if (isCallable(constructor) && object instanceof constructor) {
        return constructor.prototype;
      }
      return object instanceof $Object ? ObjectPrototype : null;
    };
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/define-built-in-accessor.js
var require_define_built_in_accessor = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/define-built-in-accessor.js"(exports2, module2) {
    "use strict";
    var makeBuiltIn = require_make_built_in();
    var defineProperty = require_object_define_property();
    module2.exports = function(target, name, descriptor) {
      if (descriptor.get) makeBuiltIn(descriptor.get, name, { getter: true });
      if (descriptor.set) makeBuiltIn(descriptor.set, name, { setter: true });
      return defineProperty.f(target, name, descriptor);
    };
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/create-property.js
var require_create_property = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/create-property.js"(exports2, module2) {
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

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/object-keys.js
var require_object_keys = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/object-keys.js"(exports2, module2) {
    "use strict";
    var internalObjectKeys = require_object_keys_internal();
    var enumBugKeys = require_enum_bug_keys();
    module2.exports = Object.keys || function keys(O2) {
      return internalObjectKeys(O2, enumBugKeys);
    };
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/object-define-properties.js
var require_object_define_properties = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/object-define-properties.js"(exports2) {
    "use strict";
    var DESCRIPTORS = require_descriptors();
    var V8_PROTOTYPE_DEFINE_BUG = require_v8_prototype_define_bug();
    var definePropertyModule = require_object_define_property();
    var anObject = require_an_object();
    var toIndexedObject = require_to_indexed_object();
    var objectKeys = require_object_keys();
    exports2.f = DESCRIPTORS && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function defineProperties(O2, Properties) {
      anObject(O2);
      var props = toIndexedObject(Properties);
      var keys = objectKeys(Properties);
      var length = keys.length;
      var index = 0;
      var key;
      while (length > index) definePropertyModule.f(O2, key = keys[index++], props[key]);
      return O2;
    };
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/html.js
var require_html = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/html.js"(exports2, module2) {
    "use strict";
    var getBuiltIn = require_get_built_in();
    module2.exports = getBuiltIn("document", "documentElement");
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/object-create.js
var require_object_create = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/object-create.js"(exports2, module2) {
    "use strict";
    var anObject = require_an_object();
    var definePropertiesModule = require_object_define_properties();
    var enumBugKeys = require_enum_bug_keys();
    var hiddenKeys = require_hidden_keys();
    var html = require_html();
    var documentCreateElement = require_document_create_element();
    var sharedKey = require_shared_key();
    var GT = ">";
    var LT = "<";
    var PROTOTYPE = "prototype";
    var SCRIPT = "script";
    var IE_PROTO = sharedKey("IE_PROTO");
    var EmptyConstructor = function() {
    };
    var scriptTag = function(content) {
      return LT + SCRIPT + GT + content + LT + "/" + SCRIPT + GT;
    };
    var NullProtoObjectViaActiveX = function(activeXDocument2) {
      activeXDocument2.write(scriptTag(""));
      activeXDocument2.close();
      var temp = activeXDocument2.parentWindow.Object;
      activeXDocument2 = null;
      return temp;
    };
    var NullProtoObjectViaIFrame = function() {
      var iframe = documentCreateElement("iframe");
      var JS = "java" + SCRIPT + ":";
      var iframeDocument;
      iframe.style.display = "none";
      html.appendChild(iframe);
      iframe.src = String(JS);
      iframeDocument = iframe.contentWindow.document;
      iframeDocument.open();
      iframeDocument.write(scriptTag("document.F=Object"));
      iframeDocument.close();
      return iframeDocument.F;
    };
    var activeXDocument;
    var NullProtoObject = function() {
      try {
        activeXDocument = new ActiveXObject("htmlfile");
      } catch (error) {
      }
      NullProtoObject = typeof document != "undefined" ? document.domain && activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame() : NullProtoObjectViaActiveX(activeXDocument);
      var length = enumBugKeys.length;
      while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
      return NullProtoObject();
    };
    hiddenKeys[IE_PROTO] = true;
    module2.exports = Object.create || function create(O2, Properties) {
      var result;
      if (O2 !== null) {
        EmptyConstructor[PROTOTYPE] = anObject(O2);
        result = new EmptyConstructor();
        EmptyConstructor[PROTOTYPE] = null;
        result[IE_PROTO] = O2;
      } else result = NullProtoObject();
      return Properties === void 0 ? result : definePropertiesModule.f(result, Properties);
    };
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/iterators-core.js
var require_iterators_core = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/iterators-core.js"(exports2, module2) {
    "use strict";
    var fails = require_fails();
    var isCallable = require_is_callable();
    var isObject = require_is_object();
    var create = require_object_create();
    var getPrototypeOf = require_object_get_prototype_of();
    var defineBuiltIn = require_define_built_in();
    var wellKnownSymbol = require_well_known_symbol();
    var IS_PURE = require_is_pure();
    var ITERATOR = wellKnownSymbol("iterator");
    var BUGGY_SAFARI_ITERATORS = false;
    var IteratorPrototype;
    var PrototypeOfArrayIteratorPrototype;
    var arrayIterator;
    if ([].keys) {
      arrayIterator = [].keys();
      if (!("next" in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
      else {
        PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
        if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
      }
    }
    var NEW_ITERATOR_PROTOTYPE = !isObject(IteratorPrototype) || fails(function() {
      var test = {};
      return IteratorPrototype[ITERATOR].call(test) !== test;
    });
    if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype = {};
    else if (IS_PURE) IteratorPrototype = create(IteratorPrototype);
    if (!isCallable(IteratorPrototype[ITERATOR])) {
      defineBuiltIn(IteratorPrototype, ITERATOR, function() {
        return this;
      });
    }
    module2.exports = {
      IteratorPrototype,
      BUGGY_SAFARI_ITERATORS
    };
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/es.iterator.constructor.js
var require_es_iterator_constructor = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/es.iterator.constructor.js"() {
    "use strict";
    var $2 = require_export();
    var globalThis2 = require_global_this();
    var anInstance = require_an_instance();
    var anObject = require_an_object();
    var isCallable = require_is_callable();
    var getPrototypeOf = require_object_get_prototype_of();
    var defineBuiltInAccessor = require_define_built_in_accessor();
    var createProperty = require_create_property();
    var fails = require_fails();
    var hasOwn = require_has_own_property();
    var wellKnownSymbol = require_well_known_symbol();
    var IteratorPrototype = require_iterators_core().IteratorPrototype;
    var DESCRIPTORS = require_descriptors();
    var IS_PURE = require_is_pure();
    var CONSTRUCTOR = "constructor";
    var ITERATOR = "Iterator";
    var TO_STRING_TAG = wellKnownSymbol("toStringTag");
    var $TypeError = TypeError;
    var NativeIterator = globalThis2[ITERATOR];
    var FORCED = IS_PURE || !isCallable(NativeIterator) || NativeIterator.prototype !== IteratorPrototype || !fails(function() {
      NativeIterator({});
    });
    var IteratorConstructor = function Iterator() {
      anInstance(this, IteratorPrototype);
      if (getPrototypeOf(this) === IteratorPrototype) throw new $TypeError("Abstract class Iterator not directly constructable");
    };
    var defineIteratorPrototypeAccessor = function(key, value) {
      if (DESCRIPTORS) {
        defineBuiltInAccessor(IteratorPrototype, key, {
          configurable: true,
          get: function() {
            return value;
          },
          set: function(replacement) {
            anObject(this);
            if (this === IteratorPrototype) throw new $TypeError("You can't redefine this property");
            if (hasOwn(this, key)) this[key] = replacement;
            else createProperty(this, key, replacement);
          }
        });
      } else IteratorPrototype[key] = value;
    };
    if (!hasOwn(IteratorPrototype, TO_STRING_TAG)) defineIteratorPrototypeAccessor(TO_STRING_TAG, ITERATOR);
    if (FORCED || !hasOwn(IteratorPrototype, CONSTRUCTOR) || IteratorPrototype[CONSTRUCTOR] === Object) {
      defineIteratorPrototypeAccessor(CONSTRUCTOR, IteratorConstructor);
    }
    IteratorConstructor.prototype = IteratorPrototype;
    $2({ global: true, constructor: true, forced: FORCED }, {
      Iterator: IteratorConstructor
    });
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/esnext.iterator.constructor.js
var require_esnext_iterator_constructor = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/esnext.iterator.constructor.js"() {
    "use strict";
    require_es_iterator_constructor();
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/get-iterator-direct.js
var require_get_iterator_direct = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/get-iterator-direct.js"(exports2, module2) {
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

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/define-built-ins.js
var require_define_built_ins = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/define-built-ins.js"(exports2, module2) {
    "use strict";
    var defineBuiltIn = require_define_built_in();
    module2.exports = function(target, src, options) {
      for (var key in src) defineBuiltIn(target, key, src[key], options);
      return target;
    };
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/create-iter-result-object.js
var require_create_iter_result_object = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/create-iter-result-object.js"(exports2, module2) {
    "use strict";
    module2.exports = function(value, done) {
      return { value, done };
    };
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/iterator-close.js
var require_iterator_close = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/iterator-close.js"(exports2, module2) {
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

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/iterator-create-proxy.js
var require_iterator_create_proxy = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/iterator-create-proxy.js"(exports2, module2) {
    "use strict";
    var call = require_function_call();
    var create = require_object_create();
    var createNonEnumerableProperty = require_create_non_enumerable_property();
    var defineBuiltIns = require_define_built_ins();
    var wellKnownSymbol = require_well_known_symbol();
    var InternalStateModule = require_internal_state();
    var getMethod = require_get_method();
    var IteratorPrototype = require_iterators_core().IteratorPrototype;
    var createIterResultObject = require_create_iter_result_object();
    var iteratorClose = require_iterator_close();
    var TO_STRING_TAG = wellKnownSymbol("toStringTag");
    var ITERATOR_HELPER = "IteratorHelper";
    var WRAP_FOR_VALID_ITERATOR = "WrapForValidIterator";
    var setInternalState = InternalStateModule.set;
    var createIteratorProxyPrototype = function(IS_ITERATOR) {
      var getInternalState = InternalStateModule.getterFor(IS_ITERATOR ? WRAP_FOR_VALID_ITERATOR : ITERATOR_HELPER);
      return defineBuiltIns(create(IteratorPrototype), {
        next: function next() {
          var state = getInternalState(this);
          if (IS_ITERATOR) return state.nextHandler();
          if (state.done) return createIterResultObject(void 0, true);
          try {
            var result = state.nextHandler();
            return state.returnHandlerResult ? result : createIterResultObject(result, state.done);
          } catch (error) {
            state.done = true;
            throw error;
          }
        },
        "return": function() {
          var state = getInternalState(this);
          var iterator = state.iterator;
          state.done = true;
          if (IS_ITERATOR) {
            var returnMethod = getMethod(iterator, "return");
            return returnMethod ? call(returnMethod, iterator) : createIterResultObject(void 0, true);
          }
          if (state.inner) try {
            iteratorClose(state.inner.iterator, "normal");
          } catch (error) {
            return iteratorClose(iterator, "throw", error);
          }
          if (iterator) iteratorClose(iterator, "normal");
          return createIterResultObject(void 0, true);
        }
      });
    };
    var WrapForValidIteratorPrototype = createIteratorProxyPrototype(true);
    var IteratorHelperPrototype = createIteratorProxyPrototype(false);
    createNonEnumerableProperty(IteratorHelperPrototype, TO_STRING_TAG, "Iterator Helper");
    module2.exports = function(nextHandler, IS_ITERATOR, RETURN_HANDLER_RESULT) {
      var IteratorProxy = function Iterator(record, state) {
        if (state) {
          state.iterator = record.iterator;
          state.next = record.next;
        } else state = record;
        state.type = IS_ITERATOR ? WRAP_FOR_VALID_ITERATOR : ITERATOR_HELPER;
        state.returnHandlerResult = !!RETURN_HANDLER_RESULT;
        state.nextHandler = nextHandler;
        state.counter = 0;
        state.done = false;
        setInternalState(this, state);
      };
      IteratorProxy.prototype = IS_ITERATOR ? WrapForValidIteratorPrototype : IteratorHelperPrototype;
      return IteratorProxy;
    };
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/call-with-safe-iteration-closing.js
var require_call_with_safe_iteration_closing = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/call-with-safe-iteration-closing.js"(exports2, module2) {
    "use strict";
    var anObject = require_an_object();
    var iteratorClose = require_iterator_close();
    module2.exports = function(iterator, fn, value, ENTRIES) {
      try {
        return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);
      } catch (error) {
        iteratorClose(iterator, "throw", error);
      }
    };
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/es.iterator.filter.js
var require_es_iterator_filter = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/es.iterator.filter.js"() {
    "use strict";
    var $2 = require_export();
    var call = require_function_call();
    var aCallable = require_a_callable();
    var anObject = require_an_object();
    var getIteratorDirect = require_get_iterator_direct();
    var createIteratorProxy = require_iterator_create_proxy();
    var callWithSafeIterationClosing = require_call_with_safe_iteration_closing();
    var IS_PURE = require_is_pure();
    var IteratorProxy = createIteratorProxy(function() {
      var iterator = this.iterator;
      var predicate = this.predicate;
      var next = this.next;
      var result, done, value;
      while (true) {
        result = anObject(call(next, iterator));
        done = this.done = !!result.done;
        if (done) return;
        value = result.value;
        if (callWithSafeIterationClosing(iterator, predicate, [value, this.counter++], true)) return value;
      }
    });
    $2({ target: "Iterator", proto: true, real: true, forced: IS_PURE }, {
      filter: function filter(predicate) {
        anObject(this);
        aCallable(predicate);
        return new IteratorProxy(getIteratorDirect(this), {
          predicate
        });
      }
    });
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/esnext.iterator.filter.js
var require_esnext_iterator_filter = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/esnext.iterator.filter.js"() {
    "use strict";
    require_es_iterator_filter();
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/function-uncurry-this-clause.js
var require_function_uncurry_this_clause = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/function-uncurry-this-clause.js"(exports2, module2) {
    "use strict";
    var classofRaw = require_classof_raw();
    var uncurryThis = require_function_uncurry_this();
    module2.exports = function(fn) {
      if (classofRaw(fn) === "Function") return uncurryThis(fn);
    };
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/function-bind-context.js
var require_function_bind_context = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/function-bind-context.js"(exports2, module2) {
    "use strict";
    var uncurryThis = require_function_uncurry_this_clause();
    var aCallable = require_a_callable();
    var NATIVE_BIND = require_function_bind_native();
    var bind = uncurryThis(uncurryThis.bind);
    module2.exports = function(fn, that) {
      aCallable(fn);
      return that === void 0 ? fn : NATIVE_BIND ? bind(fn, that) : function() {
        return fn.apply(that, arguments);
      };
    };
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/iterators.js
var require_iterators = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/iterators.js"(exports2, module2) {
    "use strict";
    module2.exports = {};
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/is-array-iterator-method.js
var require_is_array_iterator_method = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/is-array-iterator-method.js"(exports2, module2) {
    "use strict";
    var wellKnownSymbol = require_well_known_symbol();
    var Iterators = require_iterators();
    var ITERATOR = wellKnownSymbol("iterator");
    var ArrayPrototype = Array.prototype;
    module2.exports = function(it) {
      return it !== void 0 && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
    };
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/to-string-tag-support.js
var require_to_string_tag_support = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/to-string-tag-support.js"(exports2, module2) {
    "use strict";
    var wellKnownSymbol = require_well_known_symbol();
    var TO_STRING_TAG = wellKnownSymbol("toStringTag");
    var test = {};
    test[TO_STRING_TAG] = "z";
    module2.exports = String(test) === "[object z]";
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/classof.js
var require_classof = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/classof.js"(exports2, module2) {
    "use strict";
    var TO_STRING_TAG_SUPPORT = require_to_string_tag_support();
    var isCallable = require_is_callable();
    var classofRaw = require_classof_raw();
    var wellKnownSymbol = require_well_known_symbol();
    var TO_STRING_TAG = wellKnownSymbol("toStringTag");
    var $Object = Object;
    var CORRECT_ARGUMENTS = classofRaw(/* @__PURE__ */ function() {
      return arguments;
    }()) === "Arguments";
    var tryGet = function(it, key) {
      try {
        return it[key];
      } catch (error) {
      }
    };
    module2.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function(it) {
      var O2, tag, result;
      return it === void 0 ? "Undefined" : it === null ? "Null" : typeof (tag = tryGet(O2 = $Object(it), TO_STRING_TAG)) == "string" ? tag : CORRECT_ARGUMENTS ? classofRaw(O2) : (result = classofRaw(O2)) === "Object" && isCallable(O2.callee) ? "Arguments" : result;
    };
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/get-iterator-method.js
var require_get_iterator_method = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/get-iterator-method.js"(exports2, module2) {
    "use strict";
    var classof = require_classof();
    var getMethod = require_get_method();
    var isNullOrUndefined = require_is_null_or_undefined();
    var Iterators = require_iterators();
    var wellKnownSymbol = require_well_known_symbol();
    var ITERATOR = wellKnownSymbol("iterator");
    module2.exports = function(it) {
      if (!isNullOrUndefined(it)) return getMethod(it, ITERATOR) || getMethod(it, "@@iterator") || Iterators[classof(it)];
    };
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/get-iterator.js
var require_get_iterator = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/get-iterator.js"(exports2, module2) {
    "use strict";
    var call = require_function_call();
    var aCallable = require_a_callable();
    var anObject = require_an_object();
    var tryToString = require_try_to_string();
    var getIteratorMethod = require_get_iterator_method();
    var $TypeError = TypeError;
    module2.exports = function(argument, usingIterator) {
      var iteratorMethod = arguments.length < 2 ? getIteratorMethod(argument) : usingIterator;
      if (aCallable(iteratorMethod)) return anObject(call(iteratorMethod, argument));
      throw new $TypeError(tryToString(argument) + " is not iterable");
    };
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/iterate.js
var require_iterate = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/iterate.js"(exports2, module2) {
    "use strict";
    var bind = require_function_bind_context();
    var call = require_function_call();
    var anObject = require_an_object();
    var tryToString = require_try_to_string();
    var isArrayIteratorMethod = require_is_array_iterator_method();
    var lengthOfArrayLike = require_length_of_array_like();
    var isPrototypeOf = require_object_is_prototype_of();
    var getIterator = require_get_iterator();
    var getIteratorMethod = require_get_iterator_method();
    var iteratorClose = require_iterator_close();
    var $TypeError = TypeError;
    var Result = function(stopped, result) {
      this.stopped = stopped;
      this.result = result;
    };
    var ResultPrototype = Result.prototype;
    module2.exports = function(iterable, unboundFunction, options) {
      var that = options && options.that;
      var AS_ENTRIES = !!(options && options.AS_ENTRIES);
      var IS_RECORD = !!(options && options.IS_RECORD);
      var IS_ITERATOR = !!(options && options.IS_ITERATOR);
      var INTERRUPTED = !!(options && options.INTERRUPTED);
      var fn = bind(unboundFunction, that);
      var iterator, iterFn, index, length, result, next, step;
      var stop = function(condition) {
        if (iterator) iteratorClose(iterator, "normal", condition);
        return new Result(true, condition);
      };
      var callFn = function(value) {
        if (AS_ENTRIES) {
          anObject(value);
          return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
        }
        return INTERRUPTED ? fn(value, stop) : fn(value);
      };
      if (IS_RECORD) {
        iterator = iterable.iterator;
      } else if (IS_ITERATOR) {
        iterator = iterable;
      } else {
        iterFn = getIteratorMethod(iterable);
        if (!iterFn) throw new $TypeError(tryToString(iterable) + " is not iterable");
        if (isArrayIteratorMethod(iterFn)) {
          for (index = 0, length = lengthOfArrayLike(iterable); length > index; index++) {
            result = callFn(iterable[index]);
            if (result && isPrototypeOf(ResultPrototype, result)) return result;
          }
          return new Result(false);
        }
        iterator = getIterator(iterable, iterFn);
      }
      next = IS_RECORD ? iterable.next : iterator.next;
      while (!(step = call(next, iterator)).done) {
        try {
          result = callFn(step.value);
        } catch (error) {
          iteratorClose(iterator, "throw", error);
        }
        if (typeof result == "object" && result && isPrototypeOf(ResultPrototype, result)) return result;
      }
      return new Result(false);
    };
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/es.iterator.for-each.js
var require_es_iterator_for_each = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/es.iterator.for-each.js"() {
    "use strict";
    var $2 = require_export();
    var iterate = require_iterate();
    var aCallable = require_a_callable();
    var anObject = require_an_object();
    var getIteratorDirect = require_get_iterator_direct();
    $2({ target: "Iterator", proto: true, real: true }, {
      forEach: function forEach(fn) {
        anObject(this);
        aCallable(fn);
        var record = getIteratorDirect(this);
        var counter = 0;
        iterate(record, function(value) {
          fn(value, counter++);
        }, { IS_RECORD: true });
      }
    });
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/esnext.iterator.for-each.js
var require_esnext_iterator_for_each = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/esnext.iterator.for-each.js"() {
    "use strict";
    require_es_iterator_for_each();
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/iterator-map.js
var require_iterator_map = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/iterator-map.js"(exports2, module2) {
    "use strict";
    var call = require_function_call();
    var aCallable = require_a_callable();
    var anObject = require_an_object();
    var getIteratorDirect = require_get_iterator_direct();
    var createIteratorProxy = require_iterator_create_proxy();
    var callWithSafeIterationClosing = require_call_with_safe_iteration_closing();
    var IteratorProxy = createIteratorProxy(function() {
      var iterator = this.iterator;
      var result = anObject(call(this.next, iterator));
      var done = this.done = !!result.done;
      if (!done) return callWithSafeIterationClosing(iterator, this.mapper, [result.value, this.counter++], true);
    });
    module2.exports = function map(mapper) {
      anObject(this);
      aCallable(mapper);
      return new IteratorProxy(getIteratorDirect(this), {
        mapper
      });
    };
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/es.iterator.map.js
var require_es_iterator_map = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/es.iterator.map.js"() {
    "use strict";
    var $2 = require_export();
    var map = require_iterator_map();
    var IS_PURE = require_is_pure();
    $2({ target: "Iterator", proto: true, real: true, forced: IS_PURE }, {
      map
    });
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/esnext.iterator.map.js
var require_esnext_iterator_map = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/esnext.iterator.map.js"() {
    "use strict";
    require_es_iterator_map();
  }
});

// dist/ChineseDays/ChineseDays.js
require_esnext_iterator_constructor();
require_esnext_iterator_filter();
require_esnext_iterator_for_each();
require_esnext_iterator_map();
function _createForOfIteratorHelper(r, e) {
  var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (!t) {
    if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) {
      t && (r = t);
      var n = 0, F2 = function() {
      };
      return { s: F2, n: function() {
        return n >= r.length ? { done: true } : { done: false, value: r[n++] };
      }, e: function(r2) {
        throw r2;
      }, f: F2 };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var o, a = true, u2 = false;
  return { s: function() {
    t = t.call(r);
  }, n: function() {
    var r2 = t.next();
    return a = r2.done, r2;
  }, e: function(r2) {
    u2 = true, o = r2;
  }, f: function() {
    try {
      a || null == t.return || t.return();
    } finally {
      if (u2) throw o;
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
//! src/ChineseDays/ChineseDays.ts
var ChineseDays_exports = {};
__export(ChineseDays_exports, {
  findWorkday: () => z,
  getDayDetail: () => U,
  getHolidaysInRange: () => W,
  getLunarDate: () => O,
  getLunarDatesInRange: () => E,
  getSolarDateFromLunar: () => R,
  getSolarTermDate: () => S,
  getSolarTerms: () => J,
  getSolarTermsInRange: () => K,
  getWorkdaysInRange: () => P,
  isHoliday: () => N,
  isInLieu: () => q,
  isWorkday: () => f
});
module.exports = __toCommonJS(ChineseDays_exports);
var x = Object.defineProperty;
var B = (r, t, e) => t in r ? x(r, t, {
  enumerable: true,
  configurable: true,
  writable: true,
  value: e
}) : r[t] = e;
var c = (r, t, e) => B(r, typeof t != "symbol" ? t + "" : t, e);
var d = class d2 {
  constructor(t) {
    c(this, "_date");
    t instanceof d2 ? this._date = new Date(t.toDate()) : t instanceof Date ? this._date = new Date(t) : typeof t == "string" || typeof t == "number" ? (this._date = new Date(t), typeof t == "string" && isNaN(this._date.getTime()) && (this._date = new Date(t.replace(/-/g, "/")))) : this._date = /* @__PURE__ */ new Date();
  }
  toDate() {
    return this._date;
  }
  isValid() {
    return !isNaN(this._date.getTime());
  }
  diff(t, e = "day") {
    const a = new d2(t).toDate(), s = this._date.getTime() - a.getTime();
    switch (e) {
      case "year":
        return this._date.getFullYear() - a.getFullYear();
      case "month":
        return (this._date.getFullYear() - a.getFullYear()) * 12 + (this._date.getMonth() - a.getMonth());
      case "day":
      default:
        return Math.floor(s / (1e3 * 60 * 60 * 24));
    }
  }
  startOf(t) {
    const e = new Date(this._date);
    switch (t) {
      case "year":
        e.setMonth(0), e.setDate(1), e.setHours(0, 0, 0, 0);
        break;
      case "month":
        e.setDate(1), e.setHours(0, 0, 0, 0);
        break;
      case "day":
        e.setHours(0, 0, 0, 0);
        break;
    }
    return new d2(e);
  }
  endOf(t) {
    const e = new Date(this._date);
    switch (t) {
      case "year":
        e.setMonth(11), e.setDate(31), e.setHours(23, 59, 59, 999);
        break;
      case "month":
        e.setDate(new Date(e.getFullYear(), e.getMonth() + 1, 0).getDate()), e.setHours(23, 59, 59, 999);
        break;
      case "day":
        e.setHours(23, 59, 59, 999);
        break;
    }
    return new d2(e);
  }
  add(t, e) {
    const a = new Date(this._date);
    switch (e) {
      case "year":
        a.setFullYear(a.getFullYear() + t);
        break;
      case "month":
        a.setMonth(a.getMonth() + t);
        break;
      case "day":
        a.setDate(a.getDate() + t);
        break;
    }
    return new d2(a);
  }
  subtract(t, e) {
    return this.add(-t, e);
  }
  format(t) {
    const e = {
      YYYY: this._date.getFullYear(),
      MM: (this._date.getMonth() + 1).toString().padStart(2, "0"),
      DD: this._date.getDate().toString().padStart(2, "0"),
      HH: this._date.getHours().toString().padStart(2, "0"),
      mm: this._date.getMinutes().toString().padStart(2, "0"),
      ss: this._date.getSeconds().toString().padStart(2, "0"),
      dddd: d2.daysOfWeek[this._date.getDay()]
    };
    return t.replace(/YYYY|MM|DD|HH|mm|ss|dddd/g, (a) => e[a].toString());
  }
  year(t) {
    if (t === void 0) return this._date.getFullYear();
    const e = new Date(this._date);
    return e.setFullYear(t), new d2(e);
  }
  month(t) {
    if (t === void 0) return this._date.getMonth();
    const e = new Date(this._date);
    return e.setMonth(t), new d2(e);
  }
  date(t) {
    if (t === void 0) return this._date.getDate();
    const e = new Date(this._date);
    return e.setDate(t), new d2(e);
  }
  day(t) {
    if (t === void 0) return this._date.getDay();
    {
      const e = this._date.getDay(), a = t - e, s = new Date(this._date);
      return s.setDate(this._date.getDate() + a), new d2(s);
    }
  }
  isBefore(t) {
    const e = new d2(t).toDate();
    return this._date.getTime() < e.getTime();
  }
  isAfter(t) {
    const e = new d2(t).toDate();
    return this._date.getTime() > e.getTime();
  }
  isSame(t, e = "day") {
    const a = new d2(t).toDate();
    switch (e) {
      case "year":
        return this._date.getFullYear() === a.getFullYear();
      case "month":
        return this._date.getFullYear() === a.getFullYear() && this._date.getMonth() === a.getMonth();
      case "day":
      default:
        return this._date.getFullYear() === a.getFullYear() && this._date.getMonth() === a.getMonth() && this._date.getDate() === a.getDate();
    }
  }
  isBetween(t, e, a) {
    const s = new d2(t).startOf(a).toDate(), i = new d2(e).endOf(a).toDate(), o = this.toDate();
    return o >= s && o <= i;
  }
};
c(d, "daysOfWeek", ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]);
var M = d;
var h = (r) => new M(r);
var w = (r) => h(r).startOf("day");
var D = (r, t) => {
  r = w(r), t = w(t);
  const e = t.diff(r, "day");
  return Array.from({
    length: e + 1
  }, (a, s) => r.add(s, "day"));
};
var A = {
  // 1999 元旦 1 天、春节、劳动节、国庆节放假 3天
  1999: {
    "New Year's Day,元旦": 1,
    "Spring Festival,春节": 3,
    "Labour Day,劳动节": 3,
    "National Day,国庆节": 3
  },
  // 2008 劳动节改为 1 天，增加清明、端午、中秋各 1 天
  2008: {
    "Tomb-sweeping Day,清明": 1,
    "Labour Day,劳动节": 1,
    "Dragon Boat Festival,端午": 1,
    "Mid-autumn Festival,中秋": 1
  },
  // 2014 春节剔除除夕，改为初一、二、三，依旧 3 天
  // 2015 增加 中国人民抗日战争暨世界反法西斯战争胜利70周年纪念日 1 天
  2015: {
    "Anti-Fascist 70th Day,中国人民抗日战争暨世界反法西斯战争胜利70周年纪念日": 1
  },
  // 2025 春节和劳动节 各增加 1 天
  2025: {
    "Spring Festival,春节": 4,
    "Labour Day,劳动节": 2
  }
};
var C = class {
  constructor() {
    c(this, "dayDetails", {});
    c(this, "holidays", {});
    c(this, "workdays", {});
    c(this, "inLieuDays", {});
  }
  /** year at */
  y(t) {
    return this.dayDetails.year = t, this;
  }
  /** 查询某年 节假日天数 */
  getHolidayDays(t, e) {
    let a = 0;
    for (var _i = 0, _Object$entries = Object.entries(A); _i < _Object$entries.length; _i++) {
      const [s, i] = _Object$entries[_i];
      if (parseInt(s) > t) break;
      i[e] !== void 0 && (a = i[e]);
    }
    return a;
  }
  mark(t) {
    return this.dayDetails.holiday = t, this;
  }
  save(t, e, a) {
    if (!this.dayDetails.year) throw new Error("should set year before saving holiday");
    if (!this.dayDetails.holiday) throw new Error("should set holiday before saving holiday");
    this.dayDetails.month = t, this.dayDetails.day = e, this.dayDetails.dayType = a;
    const s = h("".concat(this.dayDetails.year, "-").concat(t, "-").concat(e)).format("YYYY-MM-DD"), i = this.getHolidayDays(this.dayDetails.year, this.dayDetails.holiday), o = "".concat(this.dayDetails.holiday, ",").concat(i);
    return a === 2 ? this.holidays[s] = o : a === 1 ? this.workdays[s] = o : a === 3 && (this.inLieuDays[s] = o), this;
  }
  to(t, e) {
    if (!this.dayDetails.holiday || !this.dayDetails.year || !this.dayDetails.month || !this.dayDetails.day) throw new Error("should set year/month/day before saving holiday range");
    const a = h("".concat(this.dayDetails.year, "-").concat(this.dayDetails.month, "-").concat(this.dayDetails.day)), s = h("".concat(this.dayDetails.year, "-").concat(t, "-").concat(e));
    if (s.isBefore(a) || s.isSame(a)) throw new Error("end date should be after start date");
    const i = this.getHolidayDays(this.dayDetails.year, this.dayDetails.holiday), o = "".concat(this.dayDetails.holiday, ",").concat(i), l = s.diff(a, "day");
    for (let n = 1; n <= l; n++) {
      const _ = a.add(n, "day").format("YYYY-MM-DD");
      this.dayDetails.dayType === 2 ? this.holidays[_] = o : this.dayDetails.dayType === 1 ? this.workdays[_] = o : this.dayDetails.dayType === 3 && (this.inLieuDays[_] = o);
    }
    return this;
  }
  /** work day */
  w(t, e) {
    return this.save(
      t,
      e,
      1
      /* Workday */
    );
  }
  /** rest */
  r(t, e) {
    return this.save(
      t,
      e,
      2
      /* Holiday */
    );
  }
  /** in-lieu */
  i(t, e) {
    return this.save(
      t,
      e,
      3
      /* InLieu */
    );
  }
  /** New Year's Day 元旦 */
  ny() {
    return this.mark(
      "New Year's Day,元旦"
      /* NY */
    );
  }
  /** Spring Festival 春节 */
  s() {
    return this.mark(
      "Spring Festival,春节"
      /* S */
    );
  }
  /** Tomb-sweeping Day 清明 */
  t() {
    return this.mark(
      "Tomb-sweeping Day,清明"
      /* T */
    );
  }
  /** Labour Day 五一 */
  l() {
    return this.mark(
      "Labour Day,劳动节"
      /* L */
    );
  }
  /** Dragon Boat Festival 端午 */
  d() {
    return this.mark(
      "Dragon Boat Festival,端午"
      /* D */
    );
  }
  /** National Day 国庆节 */
  n() {
    return this.mark(
      "National Day,国庆节"
      /* N */
    );
  }
  /** Mid-autumn Festival 中秋 */
  m() {
    return this.mark(
      "Mid-autumn Festival,中秋"
      /* M */
    );
  }
  /** Anti-Fascist 70th Day 中国人民抗日战争暨世界反法西斯战争胜利70周年纪念日 */
  a() {
    return this.mark(
      "Anti-Fascist 70th Day,中国人民抗日战争暨世界反法西斯战争胜利70周年纪念日"
      /* A */
    );
  }
};
var j = () => {
  const r = new C();
  return r.y(2025).ny().r(1, 1).s().r(1, 28).to(2, 4).w(1, 26).w(2, 8).i(2, 3).i(2, 4).t().r(4, 4).to(4, 6).l().r(5, 1).to(5, 5).w(4, 27).i(5, 5).d().r(5, 31).to(6, 2).n().r(10, 1).to(10, 8).w(9, 28).w(10, 11).i(10, 7).i(10, 8).m().r(10, 6), r.y(2024).ny().r(1, 1).s().r(2, 10).to(2, 17).w(2, 4).w(2, 18).i(2, 15).to(2, 16).t().r(4, 4).to(4, 6).w(4, 7).i(4, 5).l().r(5, 1).to(5, 5).w(4, 28).w(5, 11).i(5, 2).to(5, 3).d().r(6, 10).m().r(9, 15).to(9, 17).w(9, 14).i(9, 16).n().r(10, 1).to(10, 7).w(9, 29).w(10, 12).i(10, 4).i(10, 7), r.y(2023).ny().r(1, 1).to(1, 2).s().r(1, 21).to(1, 27).w(1, 28).to(1, 29).i(1, 26).to(1, 27).t().r(4, 5).l().r(4, 29).to(5, 3).w(4, 23).w(5, 6).i(5, 2).to(5, 3).d().r(6, 22).to(6, 24).w(6, 25).i(6, 23).m().r(9, 29).n().r(9, 30).to(10, 6).w(10, 7).to(10, 8).i(10, 5).to(10, 6), r.y(2022).ny().r(1, 1).to(1, 3).s().r(1, 31).to(2, 6).w(1, 29).w(1, 30).i(2, 3).to(2, 4).t().r(4, 3).to(4, 5).w(4, 2).i(4, 4).l().r(4, 30).to(5, 4).w(4, 24).w(5, 7).i(5, 3).to(5, 4).d().r(6, 3).to(6, 5).m().r(9, 10).to(9, 12).n().r(10, 1).to(10, 7).w(10, 8).w(10, 9).i(10, 6).to(10, 7).ny().r(12, 31), r.y(2021).ny().r(1, 1).to(1, 3).s().r(2, 11).to(2, 17).w(2, 7).w(2, 20).i(2, 16).to(2, 17).t().r(4, 3).to(4, 5).l().r(5, 1).to(5, 5).w(4, 25).w(5, 8).i(5, 4).to(5, 5).d().r(6, 12).to(6, 14).m().r(9, 19).to(9, 21).w(9, 18).i(9, 20).n().r(10, 1).to(10, 7).w(9, 26).w(10, 9).i(10, 6).to(10, 7), r.y(2020).ny().r(1, 1).s().r(1, 24).to(2, 2).w(1, 19).i(1, 29).t().r(4, 4).to(4, 6).l().r(5, 1).to(5, 5).w(4, 26).w(5, 9).i(5, 4).to(5, 5).d().r(6, 25).to(6, 27).w(6, 28).i(6, 26).n().r(10, 1).to(10, 8).w(9, 27).w(10, 10).i(10, 7).to(10, 8), r.y(2019).ny().r(1, 1).s().r(2, 4).to(2, 10).w(2, 2).to(2, 3).i(2, 4).i(2, 8).t().r(4, 5).to(4, 7).l().r(5, 1).to(5, 4).w(4, 28).w(5, 5).i(5, 2).i(5, 3).d().r(6, 7).to(6, 9).m().r(9, 13).to(9, 15).n().r(10, 1).to(10, 7).w(9, 29).w(10, 12).i(10, 4).i(10, 7), r.y(2018).ny().r(1, 1).s().r(2, 15).to(2, 21).w(2, 11).w(2, 24).i(2, 19).to(2, 21).t().r(4, 5).to(4, 7).w(4, 8).i(4, 6).l().r(4, 29).to(5, 1).w(4, 28).i(4, 30).d().r(6, 18).n().r(10, 1).to(10, 7).w(9, 29).to(9, 30).i(10, 4).to(10, 5).m().r(9, 24).ny().r(12, 30).to(12, 31).w(12, 29).i(12, 31), r.y(2017).ny().r(1, 1).to(1, 2).s().r(1, 27).to(2, 2).w(1, 22).w(2, 4).i(2, 1).to(2, 2).t().r(4, 2).to(4, 4).w(4, 1).i(4, 3).l().r(5, 1).d().r(5, 28).to(5, 30).w(5, 27).i(5, 29).n().r(10, 1).to(10, 8).w(9, 30).i(10, 6).m().r(10, 4), r.y(2016).ny().r(1, 1).s().r(2, 7).to(2, 13).w(2, 6).w(2, 14).i(2, 11).to(2, 12).t().r(4, 4).l().r(5, 1).to(5, 2).d().r(6, 9).to(6, 11).w(6, 12).i(6, 10).m().r(9, 15).to(9, 17).w(9, 18).i(9, 16).n().r(10, 1).to(10, 7).w(10, 8).to(10, 9).i(10, 6).to(10, 7), r.y(2015).ny().r(1, 1).to(1, 3).w(1, 4).i(1, 2).s().r(2, 18).to(2, 24).w(2, 15).w(2, 28).i(2, 23).to(2, 24).t().r(4, 5).to(4, 6).l().r(5, 1).d().r(6, 20).r(6, 22).m().r(9, 27).n().r(10, 1).to(10, 7).w(10, 10).i(10, 7).a().r(9, 3).to(9, 4).w(9, 6).i(9, 4), r.y(2014).ny().r(1, 1).s().r(1, 31).to(2, 6).w(1, 26).w(2, 8).i(2, 5).to(2, 6).t().r(4, 5).to(4, 7).l().r(5, 1).to(5, 3).w(5, 4).i(5, 2).d().r(6, 2).m().r(9, 8).n().r(10, 1).to(10, 7).w(9, 28).w(10, 11).i(10, 6).to(10, 7), r.y(2013).ny().r(1, 1).to(1, 3).w(1, 5).to(1, 6).i(1, 2).to(1, 3).s().r(2, 9).to(2, 15).w(2, 16).to(2, 17).i(2, 14).to(2, 15).t().r(4, 4).to(4, 6).w(4, 7).i(4, 5).l().r(4, 29).to(5, 1).w(4, 27).to(4, 28).i(4, 29).to(4, 30).d().r(6, 10).to(6, 12).w(6, 8).to(6, 9).i(6, 10).to(6, 11).m().r(9, 19).to(9, 21).w(9, 22).i(9, 20).n().r(10, 1).to(10, 7).w(9, 29).w(10, 12).i(10, 4).i(10, 7), r.y(2012).ny().r(1, 1).to(1, 3).i(1, 3).s().r(1, 22).to(1, 28).w(1, 21).w(1, 29).i(1, 26).to(1, 27).t().r(4, 2).to(4, 4).w(3, 31).w(4, 1).i(4, 2).to(4, 3).l().r(4, 29).to(5, 1).w(4, 28).i(4, 30).d().r(6, 22).r(6, 24).m().r(9, 30).n().r(10, 1).to(10, 7).w(9, 29).i(10, 5), r.y(2011).ny().r(1, 1).to(1, 3).s().r(2, 2).to(2, 8).w(1, 30).w(2, 12).i(2, 7).to(2, 8).t().r(4, 3).to(4, 5).w(4, 2).i(4, 4).l().r(4, 30).to(5, 2).d().r(6, 4).r(6, 6).m().r(9, 10).to(9, 12).n().r(10, 1).to(10, 7).w(10, 8).to(10, 9).i(10, 6).to(10, 7).ny().w(12, 31), r.y(2010).ny().r(1, 1).to(1, 3).s().r(2, 13).to(2, 19).w(2, 20).to(2, 21).i(2, 18).to(2, 19).t().r(4, 3).to(4, 5).l().r(5, 1).to(5, 3).d().r(6, 14).to(6, 16).w(6, 12).to(6, 13).i(6, 14).to(6, 15).m().r(9, 22).to(9, 24).w(9, 19).w(9, 25).i(9, 23).to(9, 24).n().r(10, 1).to(10, 7).w(9, 26).w(10, 9).i(10, 6).to(10, 7), r.y(2009).ny().r(1, 1).to(1, 3).w(1, 4).i(1, 2).s().r(1, 25).to(1, 31).w(1, 24).w(2, 1).i(1, 29).to(1, 30).t().r(4, 4).to(4, 6).l().r(5, 1).to(5, 3).d().r(5, 28).to(5, 30).w(5, 31).i(5, 29).n().r(10, 1).to(10, 8).w(9, 27).w(10, 10).i(10, 7).to(10, 8).m().r(10, 3), r.y(2008).ny().r(1, 1).s().r(2, 6).to(2, 12).w(2, 2).to(2, 3).i(2, 11).to(2, 12).t().r(4, 4).to(4, 6).l().r(5, 1).to(5, 3).w(5, 4).i(5, 2).d().r(6, 7).to(6, 9).m().r(9, 13).to(9, 15).n().r(9, 29).to(10, 5).w(9, 27).to(9, 28).i(9, 29).to(9, 30), r.y(2007).ny().r(1, 1).to(1, 3).i(1, 2).to(1, 3).s().r(2, 18).to(2, 24).w(2, 17).w(2, 25).i(2, 22).to(2, 23).l().r(5, 1).to(5, 7).w(4, 28).to(4, 29).i(5, 4).i(5, 7).n().r(10, 1).to(10, 7).w(9, 29).to(9, 30).i(10, 4).to(10, 5).ny().r(12, 30).to(12, 31).w(12, 29).i(12, 31), r.y(2006).ny().r(1, 1).to(1, 3).s().r(1, 29).to(2, 4).w(1, 28).w(2, 5).i(2, 2).to(2, 3).l().r(5, 1).to(5, 7).w(4, 29).to(4, 30).i(5, 4).to(5, 5).n().r(10, 1).to(10, 7).w(9, 30).w(10, 8).i(10, 5).to(10, 6).ny().w(12, 30).to(12, 31), r.y(2005).ny().r(1, 1).to(1, 3).s().r(2, 9).to(2, 15).w(2, 5).to(2, 6).i(2, 14).to(2, 15).l().r(5, 1).to(5, 7).w(4, 30).w(5, 8).i(5, 5).to(5, 6).n().r(10, 1).to(10, 7).w(10, 8).to(10, 9).i(10, 6).to(10, 7), r.y(2004).ny().r(1, 1).s().r(1, 22).to(1, 28).w(1, 17).to(1, 18).i(1, 27).to(1, 28).l().r(5, 1).to(5, 7).w(5, 8).to(5, 9).i(5, 6).to(5, 7).n().r(10, 1).to(10, 7).w(10, 9).to(10, 10).i(10, 6).to(10, 7), {
    holidays: r.holidays,
    workdays: r.workdays,
    inLieuDays: r.inLieuDays
  };
};
var {
  holidays: g,
  workdays: p,
  inLieuDays: I
} = j();
var u = (...r) => {
  if (r.length !== 1) return r.map((e) => u(e));
  const t = w(r[0]);
  if (!t.isValid()) throw new Error("unsupported type ".concat(typeof t, ", expected type is Date or Dayjs"));
  return t;
};
var N = (r) => !f(r);
var f = (r) => {
  const t = u(r), e = t.day(), a = t.format("YYYY-MM-DD");
  return !!(p[a] || e >= 1 && e <= 5 && !g[a]);
};
var q = (r) => (r = u(r), !!I[r.format("YYYY-MM-DD")]);
var U = (r) => {
  r = u(r);
  const t = r.format("YYYY-MM-DD");
  if (p[t]) return {
    date: t,
    work: true,
    name: p[t]
  };
  if (g[t]) return {
    date: t,
    work: false,
    name: g[t]
  };
  {
    const e = r.day();
    return {
      date: t,
      work: e !== 0 && e !== 6,
      name: r.format("dddd")
    };
  }
};
var W = (r, t, e = true) => (r = u(r), t = u(t), e ? D(r, t).filter(N).map((a) => a.format("YYYY-MM-DD")) : D(r, t).filter((a) => g[a.format("YYYY-MM-DD")]).map((a) => a.format("YYYY-MM-DD")));
var P = (r, t, e = true) => (r = u(r), t = u(t), e ? D(r, t).filter(f).map((a) => a.format("YYYY-MM-DD")) : D(r, t).filter((a) => f(a) && a.day() >= 1 && a.day() <= 5).map((a) => a.format("YYYY-MM-DD")));
var z = (r = 0, t = h()) => {
  if (t = w(t), r === 0) {
    if (f(t)) return t.format("YYYY-MM-DD");
    r = 1;
  }
  const e = r > 0 ? 1 : -1;
  let a = Math.abs(r);
  for (; a > 0; ) t = t.add(e, "day"), f(t) && a--;
  return t.format("YYYY-MM-DD");
};
var V = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  findWorkday: z,
  getDayDetail: U,
  getHolidaysInRange: W,
  getWorkdaysInRange: P,
  isHoliday: N,
  isInLieu: q,
  isWorkday: f
}, Symbol.toStringTag, {
  value: "Module"
}));
var Z = {
  the_beginning_of_spring: [4.6295, 3.87],
  rain_water: [19.4599, 18.73],
  the_waking_of_insects: [6.3926, 5.63],
  the_spring_equinox: [21.4155, 20.646],
  pure_brightness: [5.59, 4.81],
  grain_rain: [20.888, 20.1],
  the_beginning_of_summer: [6.318, 5.52],
  lesser_fullness_of_grain: [21.86, 21.04],
  grain_in_beard: [6.5, 5.678],
  the_summer_solstice: [22.2, 21.37],
  lesser_heat: [7.928, 7.108],
  greater_heat: [23.65, 22.83],
  the_beginning_of_autumn: [28.35, 7.5],
  the_end_of_heat: [23.95, 23.13],
  white_dew: [8.44, 7.646],
  the_autumn_equinox: [23.822, 23.042],
  code_dew: [9.098, 8.318],
  frost_descent: [24.218, 23.438],
  the_beginning_of_winter: [8.218, 7.438],
  lesser_snow: [23.08, 22.36],
  greater_snow: [7.9, 7.18],
  the_winter_solstice: [22.6, 21.94],
  lesser_cold: [6.11, 5.4055],
  greater_cold: [20.84, 20.12]
};
var T = {
  1: ["lesser_cold", "greater_cold"],
  2: ["the_beginning_of_spring", "rain_water"],
  3: ["the_waking_of_insects", "the_spring_equinox"],
  4: ["pure_brightness", "grain_rain"],
  5: ["the_beginning_of_summer", "lesser_fullness_of_grain"],
  6: ["grain_in_beard", "the_summer_solstice"],
  7: ["lesser_heat", "greater_heat"],
  8: ["the_beginning_of_autumn", "the_end_of_heat"],
  9: ["white_dew", "the_autumn_equinox"],
  10: ["code_dew", "frost_descent"],
  11: ["the_beginning_of_winter", "lesser_snow"],
  12: ["greater_snow", "the_winter_solstice"]
};
var G = {
  "2026_rain_water": -1,
  "2084_the_spring_equinox": 1,
  "1911_the_beginning_of_summer": 1,
  "2008_lesser_fullness_of_grain": 1,
  "1902_grain_in_beard": 1,
  "1928_the_summer_solstice": 1,
  "1925_lesser_heat": 1,
  "2016_lesser_heat": 1,
  "1922_greater_heat": 1,
  "2002_the_beginning_of_autumn": 1,
  "1927_white_dew": 1,
  "1942_the_autumn_equinox": 1,
  "2089_frost_descent": 1,
  "2089_the_beginning_of_winter": 1,
  "1978_lesser_snow": 1,
  "1954_greater_snow": 1,
  "1918_the_winter_solstice": -1,
  "2021_the_winter_solstice": -1,
  "1982_lesser_cold": 1,
  "2019_lesser_cold": -1,
  "2000_greater_cold": 1,
  "2082_greater_cold": 1
};
var v = {
  lesser_cold: "小寒",
  greater_cold: "大寒",
  the_beginning_of_spring: "立春",
  rain_water: "雨水",
  the_waking_of_insects: "惊蛰",
  the_spring_equinox: "春分",
  pure_brightness: "清明",
  grain_rain: "谷雨",
  the_beginning_of_summer: "立夏",
  lesser_fullness_of_grain: "小满",
  grain_in_beard: "芒种",
  the_summer_solstice: "夏至",
  lesser_heat: "小暑",
  greater_heat: "大暑",
  the_beginning_of_autumn: "立秋",
  the_end_of_heat: "处暑",
  white_dew: "白露",
  the_autumn_equinox: "秋分",
  code_dew: "寒露",
  frost_descent: "霜降",
  the_beginning_of_winter: "立冬",
  lesser_snow: "小雪",
  greater_snow: "大雪",
  the_winter_solstice: "冬至"
};
var S = (r, t, e) => {
  const a = r >= 2e3 ? 21 : 20, s = r % 100, i = 0.2422, o = Z[e][a === 21 ? 1 : 0];
  let l = Math.floor(s / 4);
  ["lesser_cold", "greater_cold", "the_beginning_of_spring", "rain_water"].includes(e) && (l = Math.floor((s - 1) / 4));
  let n = Math.floor(s * i + o) - l;
  const _ = G["".concat(r, "_").concat(e)];
  return _ && (n += _), h("".concat(r, "-").concat(t, "-").concat(n)).format("YYYY-MM-DD");
};
var J = (r, t) => {
  const e = [];
  let a = w(r);
  const s = w(t || r);
  for (; a.isBefore(s) || a.isSame(s); ) {
    const i = a.year(), o = a.month() + 1;
    T[o].forEach((l) => {
      const n = h(S(i, o, l));
      (n != null && n.isBefore(s) || n != null && n.isSame(s)) && (n != null && n.isAfter(a) || n != null && n.isSame(a)) && e.push({
        date: n.format("YYYY-MM-DD"),
        term: l,
        name: v[l],
        index: 1
      });
    }), o === 12 ? a = a.add(1, "year").startOf("year") : a = a.add(1, "month").startOf("month");
  }
  return e;
};
var K = (r, t) => {
  let e = w(r).subtract(1, "month");
  const a = w(t || r).add(1, "month"), s = [];
  for (; e.isBefore(a) || e.isSame(a); ) {
    const o = e.year(), l = e.month() + 1;
    T[l].forEach((n) => {
      const _ = h(S(o, l, n));
      s.push({
        term: n,
        date: _
      });
    }), e.month() === 11 ? e = e.add(1, "year").startOf("year") : e = e.add(1, "month").startOf("month");
  }
  const i = [];
  return s.forEach((o, l) => {
    for (let n = o.date; s[l + 1] && n.isBefore(s[l + 1].date); n = n.add(1, "day")) i.push({
      day: n,
      term: o.term,
      name: v[o.term],
      index: n.diff(o.date, "day") + 1
    });
  }), t || (t = r), i.filter((o) => o.day.isBetween(r, t, "day")).map((o) => ({
    date: o.day.format("YYYY-MM-DD"),
    term: o.term,
    name: o.name,
    index: o.index
  }));
};
var Q = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getSolarTermDate: S,
  getSolarTerms: J,
  getSolarTermsInRange: K
}, Symbol.toStringTag, {
  value: "Module"
}));
var m = [
  19416,
  19168,
  42352,
  21717,
  53856,
  55632,
  91476,
  22176,
  39632,
  21970,
  //1900-1909
  19168,
  42422,
  42192,
  53840,
  119381,
  46400,
  54944,
  44450,
  38320,
  84343,
  //1910-1919
  18800,
  42160,
  46261,
  27216,
  27968,
  109396,
  11104,
  38256,
  21234,
  18800,
  //1920-1929
  25958,
  54432,
  59984,
  28309,
  23248,
  11104,
  100067,
  37600,
  116951,
  51536,
  //1930-1939
  54432,
  120998,
  46416,
  22176,
  107956,
  9680,
  37584,
  53938,
  43344,
  46423,
  //1940-1949
  27808,
  46416,
  86869,
  19872,
  42416,
  83315,
  21168,
  43432,
  59728,
  27296,
  //1950-1959
  44710,
  43856,
  19296,
  43748,
  42352,
  21088,
  62051,
  55632,
  23383,
  22176,
  //1960-1969
  38608,
  19925,
  19152,
  42192,
  54484,
  53840,
  54616,
  46400,
  46752,
  103846,
  //1970-1979
  38320,
  18864,
  43380,
  42160,
  45690,
  27216,
  27968,
  44870,
  43872,
  38256,
  //1980-1989
  19189,
  18800,
  25776,
  29859,
  59984,
  27480,
  21952,
  43872,
  38613,
  37600,
  //1990-1999
  51552,
  55636,
  54432,
  55888,
  30034,
  22176,
  43959,
  9680,
  37584,
  51893,
  //2000-2009
  43344,
  46240,
  47780,
  44368,
  21977,
  19360,
  42416,
  86390,
  21168,
  43312,
  //2010-2019
  31060,
  27296,
  44368,
  23378,
  19296,
  42726,
  42208,
  53856,
  60005,
  54576,
  //2020-2029
  23200,
  30371,
  38608,
  19195,
  19152,
  42192,
  118966,
  53840,
  54560,
  56645,
  //2030-2039
  46496,
  22224,
  21938,
  18864,
  42359,
  42160,
  43600,
  111189,
  27936,
  44448,
  //2040-2049
  84835,
  37744,
  18936,
  18800,
  25776,
  92326,
  59984,
  27424,
  108228,
  43744,
  //2050-2059
  41696,
  53987,
  51552,
  54615,
  54432,
  55888,
  23893,
  22176,
  42704,
  21972,
  //2060-2069
  21200,
  43448,
  43344,
  46240,
  46758,
  44368,
  21920,
  43940,
  42416,
  21168,
  //2070-2079
  45683,
  26928,
  29495,
  27296,
  44368,
  84821,
  19296,
  42352,
  21732,
  53600,
  //2080-2089
  59752,
  54560,
  55968,
  92838,
  22224,
  19168,
  43476,
  41680,
  53584,
  62034,
  //2090-2099
  54560
  //2100
];
var $ = ["零", "一", "二", "三", "四", "五", "六", "七", "八", "九"];
var X = ["正", "二", "三", "四", "五", "六", "七", "八", "九", "十", "冬", "腊"];
var tt = ["甲", "乙", "丙", "丁", "戊", "己", "庚", "辛", "壬", "癸"];
var et = ["子", "丑", "寅", "卯", "辰", "巳", "午", "未", "申", "酉", "戌", "亥"];
var rt = ["鼠", "牛", "虎", "兔", "龙", "蛇", "马", "羊", "猴", "鸡", "狗", "猪"];
var H = (r) => {
  let t = 348;
  for (let e = 32768; e > 8; e >>= 1) t += m[r - 1900] & e ? 1 : 0;
  return t + F(r);
};
var k = (r) => m[r - 1900] & 15;
var F = (r) => k(r) ? m[r - 1900] & 65536 ? 30 : 29 : 0;
var Y = (r) => tt[r % 10] + et[r % 12];
var b = (r, t) => m[r - 1900] & 65536 >> t ? 30 : 29;
var at = (r) => rt[(r - 4) % 12];
var ot = (r) => {
  const t = ["初", "十", "廿", "三十"];
  if (r === 10) return "初十";
  if (r === 20) return "二十";
  if (r === 30) return "三十";
  const e = Math.floor(r / 10), a = r % 10;
  return t[e] + (a ? $[a] : "");
};
var O = (r) => {
  const t = new Array(7).fill(0);
  let e = 0, a = 0;
  const s = h(new Date(1900, 0, 31)), i = h(r);
  let o = i.diff(s, "day");
  t[5] = o + 40, t[4] = 14;
  let l = 1900;
  for (; l < 2100 && o > 0; l++) e = H(l), o -= e, t[4] += 12;
  o < 0 && (o += e, l--, t[4] -= 12), t[0] = l, t[3] = l - 1864, a = k(l), t[6] = 0;
  for (let n = 1; n < 13 && o >= 0; n++) a > 0 && n === a + 1 && t[6] === 0 ? (--n, t[6] = 1, e = F(l)) : e = b(l, n), t[6] === 1 && n === a + 1 && (t[6] = 0), o -= e, t[6] === 0 && t[4]++, t[1] = n;
  return o === 0 && a > 0 && t[6] === 1 ? t[6] = 0 : o < 0 && (o += e, t[1]--, t[4]--), t[2] = o + 1, {
    date: i.format("YYYY-MM-DD"),
    // 公历日期
    lunarYear: t[0],
    // 农历年份
    lunarMon: t[1] + 1,
    // 农历月份
    lunarDay: t[2],
    // 农历日期
    isLeap: !!t[6],
    // 是否闰月
    zodiac: at(t[0]),
    // 生肖
    yearCyl: Y(t[3]),
    // 年柱
    monCyl: Y(t[4]),
    // 月柱
    dayCyl: Y(t[5]),
    // 日柱
    lunarYearCN: "".concat(t[0].toString().split("").map((n) => $[Number(n)]).join("")),
    // 农历年份中文表示
    lunarMonCN: "".concat(X[t[1]], "月"),
    // 农历月份中文表示
    lunarDayCN: ot(t[2])
    // 农历日期中文表示
  };
};
var E = (r, t) => {
  const e = h(r), a = h(t), s = [];
  for (let i = e; i.isBefore(a) || i.isSame(a, "day"); i = i.add(1, "day")) s.push(O(i));
  return s;
};
var R = (r) => {
  const t = h(r), e = t.year(), a = t.month() + 1, s = t.date();
  let i = 0;
  for (let y = 1900; y < e; y++) i += H(y);
  let o = k(e);
  for (let y = 1; y < a; y++) i += b(e, y), y === o && (i += F(e));
  i += s - 1;
  const l = h(new Date(1900, 0, 31)), n = l.add(i, "day").format("YYYY-MM-DD");
  let _ = i, L;
  return o === a && (_ += b(e, a), L = l.add(_, "day").format("YYYY-MM-DD")), {
    date: n,
    leapMonthDate: L
  };
};
var nt = {
  getLunarDate: O,
  getLunarDatesInRange: E,
  getSolarDateFromLunar: R
};
var st = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: nt,
  getLunarDate: O,
  getLunarDatesInRange: E,
  getSolarDateFromLunar: R
}, Symbol.toStringTag, {
  value: "Module"
}));
var lt = {
  ...V,
  ...Q,
  ...st
};

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9nbG9iYWwtdGhpcy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2ZhaWxzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZGVzY3JpcHRvcnMuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mdW5jdGlvbi1iaW5kLW5hdGl2ZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2Z1bmN0aW9uLWNhbGwuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3QtcHJvcGVydHktaXMtZW51bWVyYWJsZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY2xhc3NvZi1yYXcuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pbmRleGVkLW9iamVjdC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLW51bGwtb3ItdW5kZWZpbmVkLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pcy1jYWxsYWJsZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLW9iamVjdC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2dldC1idWlsdC1pbi5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1pcy1wcm90b3R5cGUtb2YuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9lbnZpcm9ubWVudC11c2VyLWFnZW50LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZW52aXJvbm1lbnQtdjgtdmVyc2lvbi5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3N5bWJvbC1jb25zdHJ1Y3Rvci1kZXRlY3Rpb24uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy91c2Utc3ltYm9sLWFzLXVpZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLXN5bWJvbC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RyeS10by1zdHJpbmcuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hLWNhbGxhYmxlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZ2V0LW1ldGhvZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29yZGluYXJ5LXRvLXByaW1pdGl2ZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLXB1cmUuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9kZWZpbmUtZ2xvYmFsLXByb3BlcnR5LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2hhcmVkLXN0b3JlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2hhcmVkLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tb2JqZWN0LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3VpZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tcHJpbWl0aXZlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tcHJvcGVydHkta2V5LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZG9jdW1lbnQtY3JlYXRlLWVsZW1lbnQuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pZTgtZG9tLWRlZmluZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3IuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy92OC1wcm90b3R5cGUtZGVmaW5lLWJ1Zy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FuLW9iamVjdC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHkuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHkuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mdW5jdGlvbi1uYW1lLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaW5zcGVjdC1zb3VyY2UuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy93ZWFrLW1hcC1iYXNpYy1kZXRlY3Rpb24uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zaGFyZWQta2V5LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaGlkZGVuLWtleXMuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pbnRlcm5hbC1zdGF0ZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL21ha2UtYnVpbHQtaW4uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9kZWZpbmUtYnVpbHQtaW4uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9tYXRoLXRydW5jLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8taW50ZWdlci1vci1pbmZpbml0eS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RvLWFic29sdXRlLWluZGV4LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tbGVuZ3RoLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvbGVuZ3RoLW9mLWFycmF5LWxpa2UuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1pbmNsdWRlcy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1rZXlzLWludGVybmFsLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZW51bS1idWcta2V5cy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LW5hbWVzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktc3ltYm9scy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL293bi1rZXlzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY29weS1jb25zdHJ1Y3Rvci1wcm9wZXJ0aWVzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXMtZm9yY2VkLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZXhwb3J0LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvYW4taW5zdGFuY2UuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jb3JyZWN0LXByb3RvdHlwZS1nZXR0ZXIuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3QtZ2V0LXByb3RvdHlwZS1vZi5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2RlZmluZS1idWlsdC1pbi1hY2Nlc3Nvci5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1rZXlzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0aWVzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaHRtbC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1jcmVhdGUuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pdGVyYXRvcnMtY29yZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5pdGVyYXRvci5jb25zdHJ1Y3Rvci5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lc25leHQuaXRlcmF0b3IuY29uc3RydWN0b3IuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9nZXQtaXRlcmF0b3ItZGlyZWN0LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZGVmaW5lLWJ1aWx0LWlucy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2NyZWF0ZS1pdGVyLXJlc3VsdC1vYmplY3QuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pdGVyYXRvci1jbG9zZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2l0ZXJhdG9yLWNyZWF0ZS1wcm94eS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2NhbGwtd2l0aC1zYWZlLWl0ZXJhdGlvbi1jbG9zaW5nLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLml0ZXJhdG9yLmZpbHRlci5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lc25leHQuaXRlcmF0b3IuZmlsdGVyLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzLWNsYXVzZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2Z1bmN0aW9uLWJpbmQtY29udGV4dC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2l0ZXJhdG9ycy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLWFycmF5LWl0ZXJhdG9yLW1ldGhvZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RvLXN0cmluZy10YWctc3VwcG9ydC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2NsYXNzb2YuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9nZXQtaXRlcmF0b3ItbWV0aG9kLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZ2V0LWl0ZXJhdG9yLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXRlcmF0ZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5pdGVyYXRvci5mb3ItZWFjaC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lc25leHQuaXRlcmF0b3IuZm9yLWVhY2guanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pdGVyYXRvci1tYXAuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuaXRlcmF0b3IubWFwLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzbmV4dC5pdGVyYXRvci5tYXAuanMiLCAic3JjL0NoaW5lc2VEYXlzL0NoaW5lc2VEYXlzLnRzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jaGluZXNlLWRheXNAMS40LjAvbm9kZV9tb2R1bGVzL2NoaW5lc2UtZGF5cy9kaXN0L2luZGV4LmVzLmpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyIndXNlIHN0cmljdCc7XG52YXIgY2hlY2sgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGl0ICYmIGl0Lk1hdGggPT09IE1hdGggJiYgaXQ7XG59O1xuXG4vLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvODYjaXNzdWVjb21tZW50LTExNTc1OTAyOFxubW9kdWxlLmV4cG9ydHMgPVxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tZ2xvYmFsLXRoaXMgLS0gc2FmZVxuICBjaGVjayh0eXBlb2YgZ2xvYmFsVGhpcyA9PSAnb2JqZWN0JyAmJiBnbG9iYWxUaGlzKSB8fFxuICBjaGVjayh0eXBlb2Ygd2luZG93ID09ICdvYmplY3QnICYmIHdpbmRvdykgfHxcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlc3RyaWN0ZWQtZ2xvYmFscyAtLSBzYWZlXG4gIGNoZWNrKHR5cGVvZiBzZWxmID09ICdvYmplY3QnICYmIHNlbGYpIHx8XG4gIGNoZWNrKHR5cGVvZiBnbG9iYWwgPT0gJ29iamVjdCcgJiYgZ2xvYmFsKSB8fFxuICBjaGVjayh0eXBlb2YgdGhpcyA9PSAnb2JqZWN0JyAmJiB0aGlzKSB8fFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmV3LWZ1bmMgLS0gZmFsbGJhY2tcbiAgKGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0pKCkgfHwgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcbiIsICIndXNlIHN0cmljdCc7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChleGVjKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuICEhZXhlYygpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xuXG4vLyBEZXRlY3QgSUU4J3MgaW5jb21wbGV0ZSBkZWZpbmVQcm9wZXJ0eSBpbXBsZW1lbnRhdGlvblxubW9kdWxlLmV4cG9ydHMgPSAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWRlZmluZXByb3BlcnR5IC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nXG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sIDEsIHsgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9IH0pWzFdICE9PSA3O1xufSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLWZ1bmN0aW9uLXByb3RvdHlwZS1iaW5kIC0tIHNhZmVcbiAgdmFyIHRlc3QgPSAoZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9KS5iaW5kKCk7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnMgLS0gc2FmZVxuICByZXR1cm4gdHlwZW9mIHRlc3QgIT0gJ2Z1bmN0aW9uJyB8fCB0ZXN0Lmhhc093blByb3BlcnR5KCdwcm90b3R5cGUnKTtcbn0pO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBOQVRJVkVfQklORCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1iaW5kLW5hdGl2ZScpO1xuXG52YXIgY2FsbCA9IEZ1bmN0aW9uLnByb3RvdHlwZS5jYWxsO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLWZ1bmN0aW9uLXByb3RvdHlwZS1iaW5kIC0tIHNhZmVcbm1vZHVsZS5leHBvcnRzID0gTkFUSVZFX0JJTkQgPyBjYWxsLmJpbmQoY2FsbCkgOiBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBjYWxsLmFwcGx5KGNhbGwsIGFyZ3VtZW50cyk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciAkcHJvcGVydHlJc0VudW1lcmFibGUgPSB7fS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZ2V0b3ducHJvcGVydHlkZXNjcmlwdG9yIC0tIHNhZmVcbnZhciBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4vLyBOYXNob3JuIH4gSkRLOCBidWdcbnZhciBOQVNIT1JOX0JVRyA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvciAmJiAhJHByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwoeyAxOiAyIH0sIDEpO1xuXG4vLyBgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZWAgbWV0aG9kIGltcGxlbWVudGF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5wcm90b3R5cGUucHJvcGVydHlpc2VudW1lcmFibGVcbmV4cG9ydHMuZiA9IE5BU0hPUk5fQlVHID8gZnVuY3Rpb24gcHJvcGVydHlJc0VudW1lcmFibGUoVikge1xuICB2YXIgZGVzY3JpcHRvciA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvcih0aGlzLCBWKTtcbiAgcmV0dXJuICEhZGVzY3JpcHRvciAmJiBkZXNjcmlwdG9yLmVudW1lcmFibGU7XG59IDogJHByb3BlcnR5SXNFbnVtZXJhYmxlO1xuIiwgIid1c2Ugc3RyaWN0Jztcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGJpdG1hcCwgdmFsdWUpIHtcbiAgcmV0dXJuIHtcbiAgICBlbnVtZXJhYmxlOiAhKGJpdG1hcCAmIDEpLFxuICAgIGNvbmZpZ3VyYWJsZTogIShiaXRtYXAgJiAyKSxcbiAgICB3cml0YWJsZTogIShiaXRtYXAgJiA0KSxcbiAgICB2YWx1ZTogdmFsdWVcbiAgfTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIE5BVElWRV9CSU5EID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWJpbmQtbmF0aXZlJyk7XG5cbnZhciBGdW5jdGlvblByb3RvdHlwZSA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcbnZhciBjYWxsID0gRnVuY3Rpb25Qcm90b3R5cGUuY2FsbDtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1mdW5jdGlvbi1wcm90b3R5cGUtYmluZCAtLSBzYWZlXG52YXIgdW5jdXJyeVRoaXNXaXRoQmluZCA9IE5BVElWRV9CSU5EICYmIEZ1bmN0aW9uUHJvdG90eXBlLmJpbmQuYmluZChjYWxsLCBjYWxsKTtcblxubW9kdWxlLmV4cG9ydHMgPSBOQVRJVkVfQklORCA/IHVuY3VycnlUaGlzV2l0aEJpbmQgOiBmdW5jdGlvbiAoZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gY2FsbC5hcHBseShmbiwgYXJndW1lbnRzKTtcbiAgfTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xuXG52YXIgdG9TdHJpbmcgPSB1bmN1cnJ5VGhpcyh7fS50b1N0cmluZyk7XG52YXIgc3RyaW5nU2xpY2UgPSB1bmN1cnJ5VGhpcygnJy5zbGljZSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBzdHJpbmdTbGljZSh0b1N0cmluZyhpdCksIDgsIC0xKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jbGFzc29mLXJhdycpO1xuXG52YXIgJE9iamVjdCA9IE9iamVjdDtcbnZhciBzcGxpdCA9IHVuY3VycnlUaGlzKCcnLnNwbGl0KTtcblxuLy8gZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBhbmQgbm9uLWVudW1lcmFibGUgb2xkIFY4IHN0cmluZ3Ncbm1vZHVsZS5leHBvcnRzID0gZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyB0aHJvd3MgYW4gZXJyb3IgaW4gcmhpbm8sIHNlZSBodHRwczovL2dpdGh1Yi5jb20vbW96aWxsYS9yaGluby9pc3N1ZXMvMzQ2XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnMgLS0gc2FmZVxuICByZXR1cm4gISRPYmplY3QoJ3onKS5wcm9wZXJ0eUlzRW51bWVyYWJsZSgwKTtcbn0pID8gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBjbGFzc29mKGl0KSA9PT0gJ1N0cmluZycgPyBzcGxpdChpdCwgJycpIDogJE9iamVjdChpdCk7XG59IDogJE9iamVjdDtcbiIsICIndXNlIHN0cmljdCc7XG4vLyB3ZSBjYW4ndCB1c2UganVzdCBgaXQgPT0gbnVsbGAgc2luY2Ugb2YgYGRvY3VtZW50LmFsbGAgc3BlY2lhbCBjYXNlXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLUlzSFRNTEREQS1pbnRlcm5hbC1zbG90LWFlY1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGl0ID09PSBudWxsIHx8IGl0ID09PSB1bmRlZmluZWQ7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBpc051bGxPclVuZGVmaW5lZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1udWxsLW9yLXVuZGVmaW5lZCcpO1xuXG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcblxuLy8gYFJlcXVpcmVPYmplY3RDb2VyY2libGVgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1yZXF1aXJlb2JqZWN0Y29lcmNpYmxlXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoaXNOdWxsT3JVbmRlZmluZWQoaXQpKSB0aHJvdyBuZXcgJFR5cGVFcnJvcihcIkNhbid0IGNhbGwgbWV0aG9kIG9uIFwiICsgaXQpO1xuICByZXR1cm4gaXQ7XG59O1xuIiwgIid1c2Ugc3RyaWN0Jztcbi8vIHRvT2JqZWN0IHdpdGggZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBzdHJpbmdzXG52YXIgSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbmRleGVkLW9iamVjdCcpO1xudmFyIHJlcXVpcmVPYmplY3RDb2VyY2libGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBJbmRleGVkT2JqZWN0KHJlcXVpcmVPYmplY3RDb2VyY2libGUoaXQpKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1Jc0hUTUxEREEtaW50ZXJuYWwtc2xvdFxudmFyIGRvY3VtZW50QWxsID0gdHlwZW9mIGRvY3VtZW50ID09ICdvYmplY3QnICYmIGRvY3VtZW50LmFsbDtcblxuLy8gYElzQ2FsbGFibGVgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1pc2NhbGxhYmxlXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgdW5pY29ybi9uby10eXBlb2YtdW5kZWZpbmVkIC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nXG5tb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiBkb2N1bWVudEFsbCA9PSAndW5kZWZpbmVkJyAmJiBkb2N1bWVudEFsbCAhPT0gdW5kZWZpbmVkID8gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHJldHVybiB0eXBlb2YgYXJndW1lbnQgPT0gJ2Z1bmN0aW9uJyB8fCBhcmd1bWVudCA9PT0gZG9jdW1lbnRBbGw7XG59IDogZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHJldHVybiB0eXBlb2YgYXJndW1lbnQgPT0gJ2Z1bmN0aW9uJztcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PSAnb2JqZWN0JyA/IGl0ICE9PSBudWxsIDogaXNDYWxsYWJsZShpdCk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWxUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbC10aGlzJyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xuXG52YXIgYUZ1bmN0aW9uID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHJldHVybiBpc0NhbGxhYmxlKGFyZ3VtZW50KSA/IGFyZ3VtZW50IDogdW5kZWZpbmVkO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobmFtZXNwYWNlLCBtZXRob2QpIHtcbiAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPCAyID8gYUZ1bmN0aW9uKGdsb2JhbFRoaXNbbmFtZXNwYWNlXSkgOiBnbG9iYWxUaGlzW25hbWVzcGFjZV0gJiYgZ2xvYmFsVGhpc1tuYW1lc3BhY2VdW21ldGhvZF07XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSB1bmN1cnJ5VGhpcyh7fS5pc1Byb3RvdHlwZU9mKTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsVGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwtdGhpcycpO1xuXG52YXIgbmF2aWdhdG9yID0gZ2xvYmFsVGhpcy5uYXZpZ2F0b3I7XG52YXIgdXNlckFnZW50ID0gbmF2aWdhdG9yICYmIG5hdmlnYXRvci51c2VyQWdlbnQ7XG5cbm1vZHVsZS5leHBvcnRzID0gdXNlckFnZW50ID8gU3RyaW5nKHVzZXJBZ2VudCkgOiAnJztcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsVGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwtdGhpcycpO1xudmFyIHVzZXJBZ2VudCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbnZpcm9ubWVudC11c2VyLWFnZW50Jyk7XG5cbnZhciBwcm9jZXNzID0gZ2xvYmFsVGhpcy5wcm9jZXNzO1xudmFyIERlbm8gPSBnbG9iYWxUaGlzLkRlbm87XG52YXIgdmVyc2lvbnMgPSBwcm9jZXNzICYmIHByb2Nlc3MudmVyc2lvbnMgfHwgRGVubyAmJiBEZW5vLnZlcnNpb247XG52YXIgdjggPSB2ZXJzaW9ucyAmJiB2ZXJzaW9ucy52ODtcbnZhciBtYXRjaCwgdmVyc2lvbjtcblxuaWYgKHY4KSB7XG4gIG1hdGNoID0gdjguc3BsaXQoJy4nKTtcbiAgLy8gaW4gb2xkIENocm9tZSwgdmVyc2lvbnMgb2YgVjggaXNuJ3QgVjggPSBDaHJvbWUgLyAxMFxuICAvLyBidXQgdGhlaXIgY29ycmVjdCB2ZXJzaW9ucyBhcmUgbm90IGludGVyZXN0aW5nIGZvciB1c1xuICB2ZXJzaW9uID0gbWF0Y2hbMF0gPiAwICYmIG1hdGNoWzBdIDwgNCA/IDEgOiArKG1hdGNoWzBdICsgbWF0Y2hbMV0pO1xufVxuXG4vLyBCcm93c2VyRlMgTm9kZUpTIGBwcm9jZXNzYCBwb2x5ZmlsbCBpbmNvcnJlY3RseSBzZXQgYC52OGAgdG8gYDAuMGBcbi8vIHNvIGNoZWNrIGB1c2VyQWdlbnRgIGV2ZW4gaWYgYC52OGAgZXhpc3RzLCBidXQgMFxuaWYgKCF2ZXJzaW9uICYmIHVzZXJBZ2VudCkge1xuICBtYXRjaCA9IHVzZXJBZ2VudC5tYXRjaCgvRWRnZVxcLyhcXGQrKS8pO1xuICBpZiAoIW1hdGNoIHx8IG1hdGNoWzFdID49IDc0KSB7XG4gICAgbWF0Y2ggPSB1c2VyQWdlbnQubWF0Y2goL0Nocm9tZVxcLyhcXGQrKS8pO1xuICAgIGlmIChtYXRjaCkgdmVyc2lvbiA9ICttYXRjaFsxXTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHZlcnNpb247XG4iLCAiJ3VzZSBzdHJpY3QnO1xuLyogZXNsaW50LWRpc2FibGUgZXMvbm8tc3ltYm9sIC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nICovXG52YXIgVjhfVkVSU0lPTiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbnZpcm9ubWVudC12OC12ZXJzaW9uJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBnbG9iYWxUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbC10aGlzJyk7XG5cbnZhciAkU3RyaW5nID0gZ2xvYmFsVGhpcy5TdHJpbmc7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZ2V0b3ducHJvcGVydHlzeW1ib2xzIC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nXG5tb2R1bGUuZXhwb3J0cyA9ICEhT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyAmJiAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICB2YXIgc3ltYm9sID0gU3ltYm9sKCdzeW1ib2wgZGV0ZWN0aW9uJyk7XG4gIC8vIENocm9tZSAzOCBTeW1ib2wgaGFzIGluY29ycmVjdCB0b1N0cmluZyBjb252ZXJzaW9uXG4gIC8vIGBnZXQtb3duLXByb3BlcnR5LXN5bWJvbHNgIHBvbHlmaWxsIHN5bWJvbHMgY29udmVydGVkIHRvIG9iamVjdCBhcmUgbm90IFN5bWJvbCBpbnN0YW5jZXNcbiAgLy8gbmI6IERvIG5vdCBjYWxsIGBTdHJpbmdgIGRpcmVjdGx5IHRvIGF2b2lkIHRoaXMgYmVpbmcgb3B0aW1pemVkIG91dCB0byBgc3ltYm9sKycnYCB3aGljaCB3aWxsLFxuICAvLyBvZiBjb3Vyc2UsIGZhaWwuXG4gIHJldHVybiAhJFN0cmluZyhzeW1ib2wpIHx8ICEoT2JqZWN0KHN5bWJvbCkgaW5zdGFuY2VvZiBTeW1ib2wpIHx8XG4gICAgLy8gQ2hyb21lIDM4LTQwIHN5bWJvbHMgYXJlIG5vdCBpbmhlcml0ZWQgZnJvbSBET00gY29sbGVjdGlvbnMgcHJvdG90eXBlcyB0byBpbnN0YW5jZXNcbiAgICAhU3ltYm9sLnNoYW0gJiYgVjhfVkVSU0lPTiAmJiBWOF9WRVJTSU9OIDwgNDE7XG59KTtcbiIsICIndXNlIHN0cmljdCc7XG4vKiBlc2xpbnQtZGlzYWJsZSBlcy9uby1zeW1ib2wgLS0gcmVxdWlyZWQgZm9yIHRlc3RpbmcgKi9cbnZhciBOQVRJVkVfU1lNQk9MID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3N5bWJvbC1jb25zdHJ1Y3Rvci1kZXRlY3Rpb24nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBOQVRJVkVfU1lNQk9MICYmXG4gICFTeW1ib2wuc2hhbSAmJlxuICB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09ICdzeW1ib2wnO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnZXRCdWlsdEluID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1idWlsdC1pbicpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcbnZhciBpc1Byb3RvdHlwZU9mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1pcy1wcm90b3R5cGUtb2YnKTtcbnZhciBVU0VfU1lNQk9MX0FTX1VJRCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy91c2Utc3ltYm9sLWFzLXVpZCcpO1xuXG52YXIgJE9iamVjdCA9IE9iamVjdDtcblxubW9kdWxlLmV4cG9ydHMgPSBVU0VfU1lNQk9MX0FTX1VJRCA/IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gdHlwZW9mIGl0ID09ICdzeW1ib2wnO1xufSA6IGZ1bmN0aW9uIChpdCkge1xuICB2YXIgJFN5bWJvbCA9IGdldEJ1aWx0SW4oJ1N5bWJvbCcpO1xuICByZXR1cm4gaXNDYWxsYWJsZSgkU3ltYm9sKSAmJiBpc1Byb3RvdHlwZU9mKCRTeW1ib2wucHJvdG90eXBlLCAkT2JqZWN0KGl0KSk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciAkU3RyaW5nID0gU3RyaW5nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICB0cnkge1xuICAgIHJldHVybiAkU3RyaW5nKGFyZ3VtZW50KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4gJ09iamVjdCc7XG4gIH1cbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcbnZhciB0cnlUb1N0cmluZyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90cnktdG8tc3RyaW5nJyk7XG5cbnZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xuXG4vLyBgQXNzZXJ0OiBJc0NhbGxhYmxlKGFyZ3VtZW50KSBpcyB0cnVlYFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgaWYgKGlzQ2FsbGFibGUoYXJndW1lbnQpKSByZXR1cm4gYXJndW1lbnQ7XG4gIHRocm93IG5ldyAkVHlwZUVycm9yKHRyeVRvU3RyaW5nKGFyZ3VtZW50KSArICcgaXMgbm90IGEgZnVuY3Rpb24nKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGFDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hLWNhbGxhYmxlJyk7XG52YXIgaXNOdWxsT3JVbmRlZmluZWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtbnVsbC1vci11bmRlZmluZWQnKTtcblxuLy8gYEdldE1ldGhvZGAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWdldG1ldGhvZFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoViwgUCkge1xuICB2YXIgZnVuYyA9IFZbUF07XG4gIHJldHVybiBpc051bGxPclVuZGVmaW5lZChmdW5jKSA/IHVuZGVmaW5lZCA6IGFDYWxsYWJsZShmdW5jKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGNhbGwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tY2FsbCcpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcblxudmFyICRUeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG5cbi8vIGBPcmRpbmFyeVRvUHJpbWl0aXZlYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb3JkaW5hcnl0b3ByaW1pdGl2ZVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaW5wdXQsIHByZWYpIHtcbiAgdmFyIGZuLCB2YWw7XG4gIGlmIChwcmVmID09PSAnc3RyaW5nJyAmJiBpc0NhbGxhYmxlKGZuID0gaW5wdXQudG9TdHJpbmcpICYmICFpc09iamVjdCh2YWwgPSBjYWxsKGZuLCBpbnB1dCkpKSByZXR1cm4gdmFsO1xuICBpZiAoaXNDYWxsYWJsZShmbiA9IGlucHV0LnZhbHVlT2YpICYmICFpc09iamVjdCh2YWwgPSBjYWxsKGZuLCBpbnB1dCkpKSByZXR1cm4gdmFsO1xuICBpZiAocHJlZiAhPT0gJ3N0cmluZycgJiYgaXNDYWxsYWJsZShmbiA9IGlucHV0LnRvU3RyaW5nKSAmJiAhaXNPYmplY3QodmFsID0gY2FsbChmbiwgaW5wdXQpKSkgcmV0dXJuIHZhbDtcbiAgdGhyb3cgbmV3ICRUeXBlRXJyb3IoXCJDYW4ndCBjb252ZXJ0IG9iamVjdCB0byBwcmltaXRpdmUgdmFsdWVcIik7XG59O1xuIiwgIid1c2Ugc3RyaWN0Jztcbm1vZHVsZS5leHBvcnRzID0gZmFsc2U7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbFRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsLXRoaXMnKTtcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1kZWZpbmVwcm9wZXJ0eSAtLSBzYWZlXG52YXIgZGVmaW5lUHJvcGVydHkgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgdHJ5IHtcbiAgICBkZWZpbmVQcm9wZXJ0eShnbG9iYWxUaGlzLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGdsb2JhbFRoaXNba2V5XSA9IHZhbHVlO1xuICB9IHJldHVybiB2YWx1ZTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIElTX1BVUkUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtcHVyZScpO1xudmFyIGdsb2JhbFRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsLXRoaXMnKTtcbnZhciBkZWZpbmVHbG9iYWxQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZWZpbmUtZ2xvYmFsLXByb3BlcnR5Jyk7XG5cbnZhciBTSEFSRUQgPSAnX19jb3JlLWpzX3NoYXJlZF9fJztcbnZhciBzdG9yZSA9IG1vZHVsZS5leHBvcnRzID0gZ2xvYmFsVGhpc1tTSEFSRURdIHx8IGRlZmluZUdsb2JhbFByb3BlcnR5KFNIQVJFRCwge30pO1xuXG4oc3RvcmUudmVyc2lvbnMgfHwgKHN0b3JlLnZlcnNpb25zID0gW10pKS5wdXNoKHtcbiAgdmVyc2lvbjogJzMuNDAuMCcsXG4gIG1vZGU6IElTX1BVUkUgPyAncHVyZScgOiAnZ2xvYmFsJyxcbiAgY29weXJpZ2h0OiAnwqkgMjAxNC0yMDI1IERlbmlzIFB1c2hrYXJldiAoemxvaXJvY2sucnUpJyxcbiAgbGljZW5zZTogJ2h0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2Jsb2IvdjMuNDAuMC9MSUNFTlNFJyxcbiAgc291cmNlOiAnaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMnXG59KTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgc3RvcmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkLXN0b3JlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgcmV0dXJuIHN0b3JlW2tleV0gfHwgKHN0b3JlW2tleV0gPSB2YWx1ZSB8fCB7fSk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciByZXF1aXJlT2JqZWN0Q29lcmNpYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZScpO1xuXG52YXIgJE9iamVjdCA9IE9iamVjdDtcblxuLy8gYFRvT2JqZWN0YCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtdG9vYmplY3Rcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHJldHVybiAkT2JqZWN0KHJlcXVpcmVPYmplY3RDb2VyY2libGUoYXJndW1lbnQpKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLW9iamVjdCcpO1xuXG52YXIgaGFzT3duUHJvcGVydHkgPSB1bmN1cnJ5VGhpcyh7fS5oYXNPd25Qcm9wZXJ0eSk7XG5cbi8vIGBIYXNPd25Qcm9wZXJ0eWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWhhc293bnByb3BlcnR5XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWhhc293biAtLSBzYWZlXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5oYXNPd24gfHwgZnVuY3Rpb24gaGFzT3duKGl0LCBrZXkpIHtcbiAgcmV0dXJuIGhhc093blByb3BlcnR5KHRvT2JqZWN0KGl0KSwga2V5KTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xuXG52YXIgaWQgPSAwO1xudmFyIHBvc3RmaXggPSBNYXRoLnJhbmRvbSgpO1xudmFyIHRvU3RyaW5nID0gdW5jdXJyeVRoaXMoMS4wLnRvU3RyaW5nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHJldHVybiAnU3ltYm9sKCcgKyAoa2V5ID09PSB1bmRlZmluZWQgPyAnJyA6IGtleSkgKyAnKV8nICsgdG9TdHJpbmcoKytpZCArIHBvc3RmaXgsIDM2KTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbFRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsLXRoaXMnKTtcbnZhciBzaGFyZWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkJyk7XG52YXIgaGFzT3duID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcy1vd24tcHJvcGVydHknKTtcbnZhciB1aWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdWlkJyk7XG52YXIgTkFUSVZFX1NZTUJPTCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zeW1ib2wtY29uc3RydWN0b3ItZGV0ZWN0aW9uJyk7XG52YXIgVVNFX1NZTUJPTF9BU19VSUQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdXNlLXN5bWJvbC1hcy11aWQnKTtcblxudmFyIFN5bWJvbCA9IGdsb2JhbFRoaXMuU3ltYm9sO1xudmFyIFdlbGxLbm93blN5bWJvbHNTdG9yZSA9IHNoYXJlZCgnd2tzJyk7XG52YXIgY3JlYXRlV2VsbEtub3duU3ltYm9sID0gVVNFX1NZTUJPTF9BU19VSUQgPyBTeW1ib2xbJ2ZvciddIHx8IFN5bWJvbCA6IFN5bWJvbCAmJiBTeW1ib2wud2l0aG91dFNldHRlciB8fCB1aWQ7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgaWYgKCFoYXNPd24oV2VsbEtub3duU3ltYm9sc1N0b3JlLCBuYW1lKSkge1xuICAgIFdlbGxLbm93blN5bWJvbHNTdG9yZVtuYW1lXSA9IE5BVElWRV9TWU1CT0wgJiYgaGFzT3duKFN5bWJvbCwgbmFtZSlcbiAgICAgID8gU3ltYm9sW25hbWVdXG4gICAgICA6IGNyZWF0ZVdlbGxLbm93blN5bWJvbCgnU3ltYm9sLicgKyBuYW1lKTtcbiAgfSByZXR1cm4gV2VsbEtub3duU3ltYm9sc1N0b3JlW25hbWVdO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgY2FsbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1jYWxsJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG52YXIgaXNTeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtc3ltYm9sJyk7XG52YXIgZ2V0TWV0aG9kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1tZXRob2QnKTtcbnZhciBvcmRpbmFyeVRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29yZGluYXJ5LXRvLXByaW1pdGl2ZScpO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xuXG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcbnZhciBUT19QUklNSVRJVkUgPSB3ZWxsS25vd25TeW1ib2woJ3RvUHJpbWl0aXZlJyk7XG5cbi8vIGBUb1ByaW1pdGl2ZWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXRvcHJpbWl0aXZlXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpbnB1dCwgcHJlZikge1xuICBpZiAoIWlzT2JqZWN0KGlucHV0KSB8fCBpc1N5bWJvbChpbnB1dCkpIHJldHVybiBpbnB1dDtcbiAgdmFyIGV4b3RpY1RvUHJpbSA9IGdldE1ldGhvZChpbnB1dCwgVE9fUFJJTUlUSVZFKTtcbiAgdmFyIHJlc3VsdDtcbiAgaWYgKGV4b3RpY1RvUHJpbSkge1xuICAgIGlmIChwcmVmID09PSB1bmRlZmluZWQpIHByZWYgPSAnZGVmYXVsdCc7XG4gICAgcmVzdWx0ID0gY2FsbChleG90aWNUb1ByaW0sIGlucHV0LCBwcmVmKTtcbiAgICBpZiAoIWlzT2JqZWN0KHJlc3VsdCkgfHwgaXNTeW1ib2wocmVzdWx0KSkgcmV0dXJuIHJlc3VsdDtcbiAgICB0aHJvdyBuZXcgJFR5cGVFcnJvcihcIkNhbid0IGNvbnZlcnQgb2JqZWN0IHRvIHByaW1pdGl2ZSB2YWx1ZVwiKTtcbiAgfVxuICBpZiAocHJlZiA9PT0gdW5kZWZpbmVkKSBwcmVmID0gJ251bWJlcic7XG4gIHJldHVybiBvcmRpbmFyeVRvUHJpbWl0aXZlKGlucHV0LCBwcmVmKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXByaW1pdGl2ZScpO1xudmFyIGlzU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLXN5bWJvbCcpO1xuXG4vLyBgVG9Qcm9wZXJ0eUtleWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXRvcHJvcGVydHlrZXlcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHZhciBrZXkgPSB0b1ByaW1pdGl2ZShhcmd1bWVudCwgJ3N0cmluZycpO1xuICByZXR1cm4gaXNTeW1ib2woa2V5KSA/IGtleSA6IGtleSArICcnO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsVGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwtdGhpcycpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xuXG52YXIgZG9jdW1lbnQgPSBnbG9iYWxUaGlzLmRvY3VtZW50O1xuLy8gdHlwZW9mIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgaXMgJ29iamVjdCcgaW4gb2xkIElFXG52YXIgRVhJU1RTID0gaXNPYmplY3QoZG9jdW1lbnQpICYmIGlzT2JqZWN0KGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gRVhJU1RTID8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChpdCkgOiB7fTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBjcmVhdGVFbGVtZW50ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RvY3VtZW50LWNyZWF0ZS1lbGVtZW50Jyk7XG5cbi8vIFRoYW5rcyB0byBJRTggZm9yIGl0cyBmdW5ueSBkZWZpbmVQcm9wZXJ0eVxubW9kdWxlLmV4cG9ydHMgPSAhREVTQ1JJUFRPUlMgJiYgIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1kZWZpbmVwcm9wZXJ0eSAtLSByZXF1aXJlZCBmb3IgdGVzdGluZ1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGNyZWF0ZUVsZW1lbnQoJ2RpdicpLCAnYScsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDc7IH1cbiAgfSkuYSAhPT0gNztcbn0pO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIGNhbGwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tY2FsbCcpO1xudmFyIHByb3BlcnR5SXNFbnVtZXJhYmxlTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1wcm9wZXJ0eS1pcy1lbnVtZXJhYmxlJyk7XG52YXIgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eS1kZXNjcmlwdG9yJyk7XG52YXIgdG9JbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWluZGV4ZWQtb2JqZWN0Jyk7XG52YXIgdG9Qcm9wZXJ0eUtleSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1wcm9wZXJ0eS1rZXknKTtcbnZhciBoYXNPd24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eScpO1xudmFyIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2llOC1kb20tZGVmaW5lJyk7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZ2V0b3ducHJvcGVydHlkZXNjcmlwdG9yIC0tIHNhZmVcbnZhciAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuLy8gYE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vYmplY3QuZ2V0b3ducHJvcGVydHlkZXNjcmlwdG9yXG5leHBvcnRzLmYgPSBERVNDUklQVE9SUyA/ICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgOiBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUCkge1xuICBPID0gdG9JbmRleGVkT2JqZWN0KE8pO1xuICBQID0gdG9Qcm9wZXJ0eUtleShQKTtcbiAgaWYgKElFOF9ET01fREVGSU5FKSB0cnkge1xuICAgIHJldHVybiAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApO1xuICB9IGNhdGNoIChlcnJvcikgeyAvKiBlbXB0eSAqLyB9XG4gIGlmIChoYXNPd24oTywgUCkpIHJldHVybiBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IoIWNhbGwocHJvcGVydHlJc0VudW1lcmFibGVNb2R1bGUuZiwgTywgUCksIE9bUF0pO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xuXG4vLyBWOCB+IENocm9tZSAzNi1cbi8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTMzMzRcbm1vZHVsZS5leHBvcnRzID0gREVTQ1JJUFRPUlMgJiYgZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWRlZmluZXByb3BlcnR5IC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nXG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9LCAncHJvdG90eXBlJywge1xuICAgIHZhbHVlOiA0MixcbiAgICB3cml0YWJsZTogZmFsc2VcbiAgfSkucHJvdG90eXBlICE9PSA0Mjtcbn0pO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcblxudmFyICRTdHJpbmcgPSBTdHJpbmc7XG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcblxuLy8gYEFzc2VydDogVHlwZShhcmd1bWVudCkgaXMgT2JqZWN0YFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgaWYgKGlzT2JqZWN0KGFyZ3VtZW50KSkgcmV0dXJuIGFyZ3VtZW50O1xuICB0aHJvdyBuZXcgJFR5cGVFcnJvcigkU3RyaW5nKGFyZ3VtZW50KSArICcgaXMgbm90IGFuIG9iamVjdCcpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pZTgtZG9tLWRlZmluZScpO1xudmFyIFY4X1BST1RPVFlQRV9ERUZJTkVfQlVHID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3Y4LXByb3RvdHlwZS1kZWZpbmUtYnVnJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgdG9Qcm9wZXJ0eUtleSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1wcm9wZXJ0eS1rZXknKTtcblxudmFyICRUeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWRlZmluZXByb3BlcnR5IC0tIHNhZmVcbnZhciAkZGVmaW5lUHJvcGVydHkgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5ZGVzY3JpcHRvciAtLSBzYWZlXG52YXIgJGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG52YXIgRU5VTUVSQUJMRSA9ICdlbnVtZXJhYmxlJztcbnZhciBDT05GSUdVUkFCTEUgPSAnY29uZmlndXJhYmxlJztcbnZhciBXUklUQUJMRSA9ICd3cml0YWJsZSc7XG5cbi8vIGBPYmplY3QuZGVmaW5lUHJvcGVydHlgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vYmplY3QuZGVmaW5lcHJvcGVydHlcbmV4cG9ydHMuZiA9IERFU0NSSVBUT1JTID8gVjhfUFJPVE9UWVBFX0RFRklORV9CVUcgPyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKSB7XG4gIGFuT2JqZWN0KE8pO1xuICBQID0gdG9Qcm9wZXJ0eUtleShQKTtcbiAgYW5PYmplY3QoQXR0cmlidXRlcyk7XG4gIGlmICh0eXBlb2YgTyA9PT0gJ2Z1bmN0aW9uJyAmJiBQID09PSAncHJvdG90eXBlJyAmJiAndmFsdWUnIGluIEF0dHJpYnV0ZXMgJiYgV1JJVEFCTEUgaW4gQXR0cmlidXRlcyAmJiAhQXR0cmlidXRlc1tXUklUQUJMRV0pIHtcbiAgICB2YXIgY3VycmVudCA9ICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUCk7XG4gICAgaWYgKGN1cnJlbnQgJiYgY3VycmVudFtXUklUQUJMRV0pIHtcbiAgICAgIE9bUF0gPSBBdHRyaWJ1dGVzLnZhbHVlO1xuICAgICAgQXR0cmlidXRlcyA9IHtcbiAgICAgICAgY29uZmlndXJhYmxlOiBDT05GSUdVUkFCTEUgaW4gQXR0cmlidXRlcyA/IEF0dHJpYnV0ZXNbQ09ORklHVVJBQkxFXSA6IGN1cnJlbnRbQ09ORklHVVJBQkxFXSxcbiAgICAgICAgZW51bWVyYWJsZTogRU5VTUVSQUJMRSBpbiBBdHRyaWJ1dGVzID8gQXR0cmlidXRlc1tFTlVNRVJBQkxFXSA6IGN1cnJlbnRbRU5VTUVSQUJMRV0sXG4gICAgICAgIHdyaXRhYmxlOiBmYWxzZVxuICAgICAgfTtcbiAgICB9XG4gIH0gcmV0dXJuICRkZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKTtcbn0gOiAkZGVmaW5lUHJvcGVydHkgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKSB7XG4gIGFuT2JqZWN0KE8pO1xuICBQID0gdG9Qcm9wZXJ0eUtleShQKTtcbiAgYW5PYmplY3QoQXR0cmlidXRlcyk7XG4gIGlmIChJRThfRE9NX0RFRklORSkgdHJ5IHtcbiAgICByZXR1cm4gJGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpO1xuICB9IGNhdGNoIChlcnJvcikgeyAvKiBlbXB0eSAqLyB9XG4gIGlmICgnZ2V0JyBpbiBBdHRyaWJ1dGVzIHx8ICdzZXQnIGluIEF0dHJpYnV0ZXMpIHRocm93IG5ldyAkVHlwZUVycm9yKCdBY2Nlc3NvcnMgbm90IHN1cHBvcnRlZCcpO1xuICBpZiAoJ3ZhbHVlJyBpbiBBdHRyaWJ1dGVzKSBPW1BdID0gQXR0cmlidXRlcy52YWx1ZTtcbiAgcmV0dXJuIE87XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIGRlZmluZVByb3BlcnR5TW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHknKTtcbnZhciBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5LWRlc2NyaXB0b3InKTtcblxubW9kdWxlLmV4cG9ydHMgPSBERVNDUklQVE9SUyA/IGZ1bmN0aW9uIChvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgcmV0dXJuIGRlZmluZVByb3BlcnR5TW9kdWxlLmYob2JqZWN0LCBrZXksIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvcigxLCB2YWx1ZSkpO1xufSA6IGZ1bmN0aW9uIChvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgb2JqZWN0W2tleV0gPSB2YWx1ZTtcbiAgcmV0dXJuIG9iamVjdDtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgaGFzT3duID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcy1vd24tcHJvcGVydHknKTtcblxudmFyIEZ1bmN0aW9uUHJvdG90eXBlID0gRnVuY3Rpb24ucHJvdG90eXBlO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1nZXRvd25wcm9wZXJ0eWRlc2NyaXB0b3IgLS0gc2FmZVxudmFyIGdldERlc2NyaXB0b3IgPSBERVNDUklQVE9SUyAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG52YXIgRVhJU1RTID0gaGFzT3duKEZ1bmN0aW9uUHJvdG90eXBlLCAnbmFtZScpO1xuLy8gYWRkaXRpb25hbCBwcm90ZWN0aW9uIGZyb20gbWluaWZpZWQgLyBtYW5nbGVkIC8gZHJvcHBlZCBmdW5jdGlvbiBuYW1lc1xudmFyIFBST1BFUiA9IEVYSVNUUyAmJiAoZnVuY3Rpb24gc29tZXRoaW5nKCkgeyAvKiBlbXB0eSAqLyB9KS5uYW1lID09PSAnc29tZXRoaW5nJztcbnZhciBDT05GSUdVUkFCTEUgPSBFWElTVFMgJiYgKCFERVNDUklQVE9SUyB8fCAoREVTQ1JJUFRPUlMgJiYgZ2V0RGVzY3JpcHRvcihGdW5jdGlvblByb3RvdHlwZSwgJ25hbWUnKS5jb25maWd1cmFibGUpKTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIEVYSVNUUzogRVhJU1RTLFxuICBQUk9QRVI6IFBST1BFUixcbiAgQ09ORklHVVJBQkxFOiBDT05GSUdVUkFCTEVcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcbnZhciBzdG9yZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQtc3RvcmUnKTtcblxudmFyIGZ1bmN0aW9uVG9TdHJpbmcgPSB1bmN1cnJ5VGhpcyhGdW5jdGlvbi50b1N0cmluZyk7XG5cbi8vIHRoaXMgaGVscGVyIGJyb2tlbiBpbiBgY29yZS1qc0AzLjQuMS0zLjQuNGAsIHNvIHdlIGNhbid0IHVzZSBgc2hhcmVkYCBoZWxwZXJcbmlmICghaXNDYWxsYWJsZShzdG9yZS5pbnNwZWN0U291cmNlKSkge1xuICBzdG9yZS5pbnNwZWN0U291cmNlID0gZnVuY3Rpb24gKGl0KSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uVG9TdHJpbmcoaXQpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0b3JlLmluc3BlY3RTb3VyY2U7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbFRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsLXRoaXMnKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG5cbnZhciBXZWFrTWFwID0gZ2xvYmFsVGhpcy5XZWFrTWFwO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzQ2FsbGFibGUoV2Vha01hcCkgJiYgL25hdGl2ZSBjb2RlLy50ZXN0KFN0cmluZyhXZWFrTWFwKSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQnKTtcbnZhciB1aWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdWlkJyk7XG5cbnZhciBrZXlzID0gc2hhcmVkKCdrZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4ga2V5c1trZXldIHx8IChrZXlzW2tleV0gPSB1aWQoa2V5KSk7XG59O1xuIiwgIid1c2Ugc3RyaWN0Jztcbm1vZHVsZS5leHBvcnRzID0ge307XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIE5BVElWRV9XRUFLX01BUCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWFrLW1hcC1iYXNpYy1kZXRlY3Rpb24nKTtcbnZhciBnbG9iYWxUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbC10aGlzJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG52YXIgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1ub24tZW51bWVyYWJsZS1wcm9wZXJ0eScpO1xudmFyIGhhc093biA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMtb3duLXByb3BlcnR5Jyk7XG52YXIgc2hhcmVkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZC1zdG9yZScpO1xudmFyIHNoYXJlZEtleSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQta2V5Jyk7XG52YXIgaGlkZGVuS2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oaWRkZW4ta2V5cycpO1xuXG52YXIgT0JKRUNUX0FMUkVBRFlfSU5JVElBTElaRUQgPSAnT2JqZWN0IGFscmVhZHkgaW5pdGlhbGl6ZWQnO1xudmFyIFR5cGVFcnJvciA9IGdsb2JhbFRoaXMuVHlwZUVycm9yO1xudmFyIFdlYWtNYXAgPSBnbG9iYWxUaGlzLldlYWtNYXA7XG52YXIgc2V0LCBnZXQsIGhhcztcblxudmFyIGVuZm9yY2UgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGhhcyhpdCkgPyBnZXQoaXQpIDogc2V0KGl0LCB7fSk7XG59O1xuXG52YXIgZ2V0dGVyRm9yID0gZnVuY3Rpb24gKFRZUEUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChpdCkge1xuICAgIHZhciBzdGF0ZTtcbiAgICBpZiAoIWlzT2JqZWN0KGl0KSB8fCAoc3RhdGUgPSBnZXQoaXQpKS50eXBlICE9PSBUWVBFKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdJbmNvbXBhdGlibGUgcmVjZWl2ZXIsICcgKyBUWVBFICsgJyByZXF1aXJlZCcpO1xuICAgIH0gcmV0dXJuIHN0YXRlO1xuICB9O1xufTtcblxuaWYgKE5BVElWRV9XRUFLX01BUCB8fCBzaGFyZWQuc3RhdGUpIHtcbiAgdmFyIHN0b3JlID0gc2hhcmVkLnN0YXRlIHx8IChzaGFyZWQuc3RhdGUgPSBuZXcgV2Vha01hcCgpKTtcbiAgLyogZXNsaW50LWRpc2FibGUgbm8tc2VsZi1hc3NpZ24gLS0gcHJvdG90eXBlIG1ldGhvZHMgcHJvdGVjdGlvbiAqL1xuICBzdG9yZS5nZXQgPSBzdG9yZS5nZXQ7XG4gIHN0b3JlLmhhcyA9IHN0b3JlLmhhcztcbiAgc3RvcmUuc2V0ID0gc3RvcmUuc2V0O1xuICAvKiBlc2xpbnQtZW5hYmxlIG5vLXNlbGYtYXNzaWduIC0tIHByb3RvdHlwZSBtZXRob2RzIHByb3RlY3Rpb24gKi9cbiAgc2V0ID0gZnVuY3Rpb24gKGl0LCBtZXRhZGF0YSkge1xuICAgIGlmIChzdG9yZS5oYXMoaXQpKSB0aHJvdyBuZXcgVHlwZUVycm9yKE9CSkVDVF9BTFJFQURZX0lOSVRJQUxJWkVEKTtcbiAgICBtZXRhZGF0YS5mYWNhZGUgPSBpdDtcbiAgICBzdG9yZS5zZXQoaXQsIG1ldGFkYXRhKTtcbiAgICByZXR1cm4gbWV0YWRhdGE7XG4gIH07XG4gIGdldCA9IGZ1bmN0aW9uIChpdCkge1xuICAgIHJldHVybiBzdG9yZS5nZXQoaXQpIHx8IHt9O1xuICB9O1xuICBoYXMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgICByZXR1cm4gc3RvcmUuaGFzKGl0KTtcbiAgfTtcbn0gZWxzZSB7XG4gIHZhciBTVEFURSA9IHNoYXJlZEtleSgnc3RhdGUnKTtcbiAgaGlkZGVuS2V5c1tTVEFURV0gPSB0cnVlO1xuICBzZXQgPSBmdW5jdGlvbiAoaXQsIG1ldGFkYXRhKSB7XG4gICAgaWYgKGhhc093bihpdCwgU1RBVEUpKSB0aHJvdyBuZXcgVHlwZUVycm9yKE9CSkVDVF9BTFJFQURZX0lOSVRJQUxJWkVEKTtcbiAgICBtZXRhZGF0YS5mYWNhZGUgPSBpdDtcbiAgICBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkoaXQsIFNUQVRFLCBtZXRhZGF0YSk7XG4gICAgcmV0dXJuIG1ldGFkYXRhO1xuICB9O1xuICBnZXQgPSBmdW5jdGlvbiAoaXQpIHtcbiAgICByZXR1cm4gaGFzT3duKGl0LCBTVEFURSkgPyBpdFtTVEFURV0gOiB7fTtcbiAgfTtcbiAgaGFzID0gZnVuY3Rpb24gKGl0KSB7XG4gICAgcmV0dXJuIGhhc093bihpdCwgU1RBVEUpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgc2V0OiBzZXQsXG4gIGdldDogZ2V0LFxuICBoYXM6IGhhcyxcbiAgZW5mb3JjZTogZW5mb3JjZSxcbiAgZ2V0dGVyRm9yOiBnZXR0ZXJGb3Jcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xudmFyIGhhc093biA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMtb3duLXByb3BlcnR5Jyk7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBDT05GSUdVUkFCTEVfRlVOQ1RJT05fTkFNRSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1uYW1lJykuQ09ORklHVVJBQkxFO1xudmFyIGluc3BlY3RTb3VyY2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaW5zcGVjdC1zb3VyY2UnKTtcbnZhciBJbnRlcm5hbFN0YXRlTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ludGVybmFsLXN0YXRlJyk7XG5cbnZhciBlbmZvcmNlSW50ZXJuYWxTdGF0ZSA9IEludGVybmFsU3RhdGVNb2R1bGUuZW5mb3JjZTtcbnZhciBnZXRJbnRlcm5hbFN0YXRlID0gSW50ZXJuYWxTdGF0ZU1vZHVsZS5nZXQ7XG52YXIgJFN0cmluZyA9IFN0cmluZztcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZGVmaW5lcHJvcGVydHkgLS0gc2FmZVxudmFyIGRlZmluZVByb3BlcnR5ID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xudmFyIHN0cmluZ1NsaWNlID0gdW5jdXJyeVRoaXMoJycuc2xpY2UpO1xudmFyIHJlcGxhY2UgPSB1bmN1cnJ5VGhpcygnJy5yZXBsYWNlKTtcbnZhciBqb2luID0gdW5jdXJyeVRoaXMoW10uam9pbik7XG5cbnZhciBDT05GSUdVUkFCTEVfTEVOR1RIID0gREVTQ1JJUFRPUlMgJiYgIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGRlZmluZVByb3BlcnR5KGZ1bmN0aW9uICgpIHsgLyogZW1wdHkgKi8gfSwgJ2xlbmd0aCcsIHsgdmFsdWU6IDggfSkubGVuZ3RoICE9PSA4O1xufSk7XG5cbnZhciBURU1QTEFURSA9IFN0cmluZyhTdHJpbmcpLnNwbGl0KCdTdHJpbmcnKTtcblxudmFyIG1ha2VCdWlsdEluID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodmFsdWUsIG5hbWUsIG9wdGlvbnMpIHtcbiAgaWYgKHN0cmluZ1NsaWNlKCRTdHJpbmcobmFtZSksIDAsIDcpID09PSAnU3ltYm9sKCcpIHtcbiAgICBuYW1lID0gJ1snICsgcmVwbGFjZSgkU3RyaW5nKG5hbWUpLCAvXlN5bWJvbFxcKChbXildKilcXCkuKiQvLCAnJDEnKSArICddJztcbiAgfVxuICBpZiAob3B0aW9ucyAmJiBvcHRpb25zLmdldHRlcikgbmFtZSA9ICdnZXQgJyArIG5hbWU7XG4gIGlmIChvcHRpb25zICYmIG9wdGlvbnMuc2V0dGVyKSBuYW1lID0gJ3NldCAnICsgbmFtZTtcbiAgaWYgKCFoYXNPd24odmFsdWUsICduYW1lJykgfHwgKENPTkZJR1VSQUJMRV9GVU5DVElPTl9OQU1FICYmIHZhbHVlLm5hbWUgIT09IG5hbWUpKSB7XG4gICAgaWYgKERFU0NSSVBUT1JTKSBkZWZpbmVQcm9wZXJ0eSh2YWx1ZSwgJ25hbWUnLCB7IHZhbHVlOiBuYW1lLCBjb25maWd1cmFibGU6IHRydWUgfSk7XG4gICAgZWxzZSB2YWx1ZS5uYW1lID0gbmFtZTtcbiAgfVxuICBpZiAoQ09ORklHVVJBQkxFX0xFTkdUSCAmJiBvcHRpb25zICYmIGhhc093bihvcHRpb25zLCAnYXJpdHknKSAmJiB2YWx1ZS5sZW5ndGggIT09IG9wdGlvbnMuYXJpdHkpIHtcbiAgICBkZWZpbmVQcm9wZXJ0eSh2YWx1ZSwgJ2xlbmd0aCcsIHsgdmFsdWU6IG9wdGlvbnMuYXJpdHkgfSk7XG4gIH1cbiAgdHJ5IHtcbiAgICBpZiAob3B0aW9ucyAmJiBoYXNPd24ob3B0aW9ucywgJ2NvbnN0cnVjdG9yJykgJiYgb3B0aW9ucy5jb25zdHJ1Y3Rvcikge1xuICAgICAgaWYgKERFU0NSSVBUT1JTKSBkZWZpbmVQcm9wZXJ0eSh2YWx1ZSwgJ3Byb3RvdHlwZScsIHsgd3JpdGFibGU6IGZhbHNlIH0pO1xuICAgIC8vIGluIFY4IH4gQ2hyb21lIDUzLCBwcm90b3R5cGVzIG9mIHNvbWUgbWV0aG9kcywgbGlrZSBgQXJyYXkucHJvdG90eXBlLnZhbHVlc2AsIGFyZSBub24td3JpdGFibGVcbiAgICB9IGVsc2UgaWYgKHZhbHVlLnByb3RvdHlwZSkgdmFsdWUucHJvdG90eXBlID0gdW5kZWZpbmVkO1xuICB9IGNhdGNoIChlcnJvcikgeyAvKiBlbXB0eSAqLyB9XG4gIHZhciBzdGF0ZSA9IGVuZm9yY2VJbnRlcm5hbFN0YXRlKHZhbHVlKTtcbiAgaWYgKCFoYXNPd24oc3RhdGUsICdzb3VyY2UnKSkge1xuICAgIHN0YXRlLnNvdXJjZSA9IGpvaW4oVEVNUExBVEUsIHR5cGVvZiBuYW1lID09ICdzdHJpbmcnID8gbmFtZSA6ICcnKTtcbiAgfSByZXR1cm4gdmFsdWU7XG59O1xuXG4vLyBhZGQgZmFrZSBGdW5jdGlvbiN0b1N0cmluZyBmb3IgY29ycmVjdCB3b3JrIHdyYXBwZWQgbWV0aG9kcyAvIGNvbnN0cnVjdG9ycyB3aXRoIG1ldGhvZHMgbGlrZSBMb0Rhc2ggaXNOYXRpdmVcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1leHRlbmQtbmF0aXZlIC0tIHJlcXVpcmVkXG5GdW5jdGlvbi5wcm90b3R5cGUudG9TdHJpbmcgPSBtYWtlQnVpbHRJbihmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgcmV0dXJuIGlzQ2FsbGFibGUodGhpcykgJiYgZ2V0SW50ZXJuYWxTdGF0ZSh0aGlzKS5zb3VyY2UgfHwgaW5zcGVjdFNvdXJjZSh0aGlzKTtcbn0sICd0b1N0cmluZycpO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgZGVmaW5lUHJvcGVydHlNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpO1xudmFyIG1ha2VCdWlsdEluID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL21ha2UtYnVpbHQtaW4nKTtcbnZhciBkZWZpbmVHbG9iYWxQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZWZpbmUtZ2xvYmFsLXByb3BlcnR5Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKE8sIGtleSwgdmFsdWUsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSBvcHRpb25zID0ge307XG4gIHZhciBzaW1wbGUgPSBvcHRpb25zLmVudW1lcmFibGU7XG4gIHZhciBuYW1lID0gb3B0aW9ucy5uYW1lICE9PSB1bmRlZmluZWQgPyBvcHRpb25zLm5hbWUgOiBrZXk7XG4gIGlmIChpc0NhbGxhYmxlKHZhbHVlKSkgbWFrZUJ1aWx0SW4odmFsdWUsIG5hbWUsIG9wdGlvbnMpO1xuICBpZiAob3B0aW9ucy5nbG9iYWwpIHtcbiAgICBpZiAoc2ltcGxlKSBPW2tleV0gPSB2YWx1ZTtcbiAgICBlbHNlIGRlZmluZUdsb2JhbFByb3BlcnR5KGtleSwgdmFsdWUpO1xuICB9IGVsc2Uge1xuICAgIHRyeSB7XG4gICAgICBpZiAoIW9wdGlvbnMudW5zYWZlKSBkZWxldGUgT1trZXldO1xuICAgICAgZWxzZSBpZiAoT1trZXldKSBzaW1wbGUgPSB0cnVlO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGVtcHR5ICovIH1cbiAgICBpZiAoc2ltcGxlKSBPW2tleV0gPSB2YWx1ZTtcbiAgICBlbHNlIGRlZmluZVByb3BlcnR5TW9kdWxlLmYoTywga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogIW9wdGlvbnMubm9uQ29uZmlndXJhYmxlLFxuICAgICAgd3JpdGFibGU6ICFvcHRpb25zLm5vbldyaXRhYmxlXG4gICAgfSk7XG4gIH0gcmV0dXJuIE87XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBjZWlsID0gTWF0aC5jZWlsO1xudmFyIGZsb29yID0gTWF0aC5mbG9vcjtcblxuLy8gYE1hdGgudHJ1bmNgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1tYXRoLnRydW5jXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tbWF0aC10cnVuYyAtLSBzYWZlXG5tb2R1bGUuZXhwb3J0cyA9IE1hdGgudHJ1bmMgfHwgZnVuY3Rpb24gdHJ1bmMoeCkge1xuICB2YXIgbiA9ICt4O1xuICByZXR1cm4gKG4gPiAwID8gZmxvb3IgOiBjZWlsKShuKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHRydW5jID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL21hdGgtdHJ1bmMnKTtcblxuLy8gYFRvSW50ZWdlck9ySW5maW5pdHlgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy10b2ludGVnZXJvcmluZmluaXR5XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICB2YXIgbnVtYmVyID0gK2FyZ3VtZW50O1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlIC0tIE5hTiBjaGVja1xuICByZXR1cm4gbnVtYmVyICE9PSBudW1iZXIgfHwgbnVtYmVyID09PSAwID8gMCA6IHRydW5jKG51bWJlcik7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB0b0ludGVnZXJPckluZmluaXR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWludGVnZXItb3ItaW5maW5pdHknKTtcblxudmFyIG1heCA9IE1hdGgubWF4O1xudmFyIG1pbiA9IE1hdGgubWluO1xuXG4vLyBIZWxwZXIgZm9yIGEgcG9wdWxhciByZXBlYXRpbmcgY2FzZSBvZiB0aGUgc3BlYzpcbi8vIExldCBpbnRlZ2VyIGJlID8gVG9JbnRlZ2VyKGluZGV4KS5cbi8vIElmIGludGVnZXIgPCAwLCBsZXQgcmVzdWx0IGJlIG1heCgobGVuZ3RoICsgaW50ZWdlciksIDApOyBlbHNlIGxldCByZXN1bHQgYmUgbWluKGludGVnZXIsIGxlbmd0aCkuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpbmRleCwgbGVuZ3RoKSB7XG4gIHZhciBpbnRlZ2VyID0gdG9JbnRlZ2VyT3JJbmZpbml0eShpbmRleCk7XG4gIHJldHVybiBpbnRlZ2VyIDwgMCA/IG1heChpbnRlZ2VyICsgbGVuZ3RoLCAwKSA6IG1pbihpbnRlZ2VyLCBsZW5ndGgpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdG9JbnRlZ2VyT3JJbmZpbml0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbnRlZ2VyLW9yLWluZmluaXR5Jyk7XG5cbnZhciBtaW4gPSBNYXRoLm1pbjtcblxuLy8gYFRvTGVuZ3RoYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtdG9sZW5ndGhcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHZhciBsZW4gPSB0b0ludGVnZXJPckluZmluaXR5KGFyZ3VtZW50KTtcbiAgcmV0dXJuIGxlbiA+IDAgPyBtaW4obGVuLCAweDFGRkZGRkZGRkZGRkZGKSA6IDA7IC8vIDIgKiogNTMgLSAxID09IDkwMDcxOTkyNTQ3NDA5OTFcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWxlbmd0aCcpO1xuXG4vLyBgTGVuZ3RoT2ZBcnJheUxpa2VgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1sZW5ndGhvZmFycmF5bGlrZVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiB0b0xlbmd0aChvYmoubGVuZ3RoKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHRvSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbmRleGVkLW9iamVjdCcpO1xudmFyIHRvQWJzb2x1dGVJbmRleCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1hYnNvbHV0ZS1pbmRleCcpO1xudmFyIGxlbmd0aE9mQXJyYXlMaWtlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2xlbmd0aC1vZi1hcnJheS1saWtlJyk7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUueyBpbmRleE9mLCBpbmNsdWRlcyB9YCBtZXRob2RzIGltcGxlbWVudGF0aW9uXG52YXIgY3JlYXRlTWV0aG9kID0gZnVuY3Rpb24gKElTX0lOQ0xVREVTKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoJHRoaXMsIGVsLCBmcm9tSW5kZXgpIHtcbiAgICB2YXIgTyA9IHRvSW5kZXhlZE9iamVjdCgkdGhpcyk7XG4gICAgdmFyIGxlbmd0aCA9IGxlbmd0aE9mQXJyYXlMaWtlKE8pO1xuICAgIGlmIChsZW5ndGggPT09IDApIHJldHVybiAhSVNfSU5DTFVERVMgJiYgLTE7XG4gICAgdmFyIGluZGV4ID0gdG9BYnNvbHV0ZUluZGV4KGZyb21JbmRleCwgbGVuZ3RoKTtcbiAgICB2YXIgdmFsdWU7XG4gICAgLy8gQXJyYXkjaW5jbHVkZXMgdXNlcyBTYW1lVmFsdWVaZXJvIGVxdWFsaXR5IGFsZ29yaXRobVxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmUgLS0gTmFOIGNoZWNrXG4gICAgaWYgKElTX0lOQ0xVREVTICYmIGVsICE9PSBlbCkgd2hpbGUgKGxlbmd0aCA+IGluZGV4KSB7XG4gICAgICB2YWx1ZSA9IE9baW5kZXgrK107XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlIC0tIE5hTiBjaGVja1xuICAgICAgaWYgKHZhbHVlICE9PSB2YWx1ZSkgcmV0dXJuIHRydWU7XG4gICAgLy8gQXJyYXkjaW5kZXhPZiBpZ25vcmVzIGhvbGVzLCBBcnJheSNpbmNsdWRlcyAtIG5vdFxuICAgIH0gZWxzZSBmb3IgKDtsZW5ndGggPiBpbmRleDsgaW5kZXgrKykge1xuICAgICAgaWYgKChJU19JTkNMVURFUyB8fCBpbmRleCBpbiBPKSAmJiBPW2luZGV4XSA9PT0gZWwpIHJldHVybiBJU19JTkNMVURFUyB8fCBpbmRleCB8fCAwO1xuICAgIH0gcmV0dXJuICFJU19JTkNMVURFUyAmJiAtMTtcbiAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAvLyBgQXJyYXkucHJvdG90eXBlLmluY2x1ZGVzYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuaW5jbHVkZXNcbiAgaW5jbHVkZXM6IGNyZWF0ZU1ldGhvZCh0cnVlKSxcbiAgLy8gYEFycmF5LnByb3RvdHlwZS5pbmRleE9mYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuaW5kZXhvZlxuICBpbmRleE9mOiBjcmVhdGVNZXRob2QoZmFsc2UpXG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcbnZhciBoYXNPd24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eScpO1xudmFyIHRvSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbmRleGVkLW9iamVjdCcpO1xudmFyIGluZGV4T2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktaW5jbHVkZXMnKS5pbmRleE9mO1xudmFyIGhpZGRlbktleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGlkZGVuLWtleXMnKTtcblxudmFyIHB1c2ggPSB1bmN1cnJ5VGhpcyhbXS5wdXNoKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob2JqZWN0LCBuYW1lcykge1xuICB2YXIgTyA9IHRvSW5kZXhlZE9iamVjdChvYmplY3QpO1xuICB2YXIgaSA9IDA7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgdmFyIGtleTtcbiAgZm9yIChrZXkgaW4gTykgIWhhc093bihoaWRkZW5LZXlzLCBrZXkpICYmIGhhc093bihPLCBrZXkpICYmIHB1c2gocmVzdWx0LCBrZXkpO1xuICAvLyBEb24ndCBlbnVtIGJ1ZyAmIGhpZGRlbiBrZXlzXG4gIHdoaWxlIChuYW1lcy5sZW5ndGggPiBpKSBpZiAoaGFzT3duKE8sIGtleSA9IG5hbWVzW2krK10pKSB7XG4gICAgfmluZGV4T2YocmVzdWx0LCBrZXkpIHx8IHB1c2gocmVzdWx0LCBrZXkpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuIiwgIid1c2Ugc3RyaWN0Jztcbi8vIElFOC0gZG9uJ3QgZW51bSBidWcga2V5c1xubW9kdWxlLmV4cG9ydHMgPSBbXG4gICdjb25zdHJ1Y3RvcicsXG4gICdoYXNPd25Qcm9wZXJ0eScsXG4gICdpc1Byb3RvdHlwZU9mJyxcbiAgJ3Byb3BlcnR5SXNFbnVtZXJhYmxlJyxcbiAgJ3RvTG9jYWxlU3RyaW5nJyxcbiAgJ3RvU3RyaW5nJyxcbiAgJ3ZhbHVlT2YnXG5dO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBpbnRlcm5hbE9iamVjdEtleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWtleXMtaW50ZXJuYWwnKTtcbnZhciBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbnVtLWJ1Zy1rZXlzJyk7XG5cbnZhciBoaWRkZW5LZXlzID0gZW51bUJ1Z0tleXMuY29uY2F0KCdsZW5ndGgnLCAncHJvdG90eXBlJyk7XG5cbi8vIGBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lc2AgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5nZXRvd25wcm9wZXJ0eW5hbWVzXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5bmFtZXMgLS0gc2FmZVxuZXhwb3J0cy5mID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMgfHwgZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhPKSB7XG4gIHJldHVybiBpbnRlcm5hbE9iamVjdEtleXMoTywgaGlkZGVuS2V5cyk7XG59O1xuIiwgIid1c2Ugc3RyaWN0Jztcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZ2V0b3ducHJvcGVydHlzeW1ib2xzIC0tIHNhZmVcbmV4cG9ydHMuZiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGdldEJ1aWx0SW4gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LWJ1aWx0LWluJyk7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgZ2V0T3duUHJvcGVydHlOYW1lc01vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1uYW1lcycpO1xudmFyIGdldE93blByb3BlcnR5U3ltYm9sc01vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1zeW1ib2xzJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG5cbnZhciBjb25jYXQgPSB1bmN1cnJ5VGhpcyhbXS5jb25jYXQpO1xuXG4vLyBhbGwgb2JqZWN0IGtleXMsIGluY2x1ZGVzIG5vbi1lbnVtZXJhYmxlIGFuZCBzeW1ib2xzXG5tb2R1bGUuZXhwb3J0cyA9IGdldEJ1aWx0SW4oJ1JlZmxlY3QnLCAnb3duS2V5cycpIHx8IGZ1bmN0aW9uIG93bktleXMoaXQpIHtcbiAgdmFyIGtleXMgPSBnZXRPd25Qcm9wZXJ0eU5hbWVzTW9kdWxlLmYoYW5PYmplY3QoaXQpKTtcbiAgdmFyIGdldE93blByb3BlcnR5U3ltYm9scyA9IGdldE93blByb3BlcnR5U3ltYm9sc01vZHVsZS5mO1xuICByZXR1cm4gZ2V0T3duUHJvcGVydHlTeW1ib2xzID8gY29uY2F0KGtleXMsIGdldE93blByb3BlcnR5U3ltYm9scyhpdCkpIDoga2V5cztcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGhhc093biA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMtb3duLXByb3BlcnR5Jyk7XG52YXIgb3duS2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vd24ta2V5cycpO1xudmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvck1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yJyk7XG52YXIgZGVmaW5lUHJvcGVydHlNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh0YXJnZXQsIHNvdXJjZSwgZXhjZXB0aW9ucykge1xuICB2YXIga2V5cyA9IG93bktleXMoc291cmNlKTtcbiAgdmFyIGRlZmluZVByb3BlcnR5ID0gZGVmaW5lUHJvcGVydHlNb2R1bGUuZjtcbiAgdmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvck1vZHVsZS5mO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIga2V5ID0ga2V5c1tpXTtcbiAgICBpZiAoIWhhc093bih0YXJnZXQsIGtleSkgJiYgIShleGNlcHRpb25zICYmIGhhc093bihleGNlcHRpb25zLCBrZXkpKSkge1xuICAgICAgZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpO1xuICAgIH1cbiAgfVxufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG5cbnZhciByZXBsYWNlbWVudCA9IC8jfFxcLnByb3RvdHlwZVxcLi87XG5cbnZhciBpc0ZvcmNlZCA9IGZ1bmN0aW9uIChmZWF0dXJlLCBkZXRlY3Rpb24pIHtcbiAgdmFyIHZhbHVlID0gZGF0YVtub3JtYWxpemUoZmVhdHVyZSldO1xuICByZXR1cm4gdmFsdWUgPT09IFBPTFlGSUxMID8gdHJ1ZVxuICAgIDogdmFsdWUgPT09IE5BVElWRSA/IGZhbHNlXG4gICAgOiBpc0NhbGxhYmxlKGRldGVjdGlvbikgPyBmYWlscyhkZXRlY3Rpb24pXG4gICAgOiAhIWRldGVjdGlvbjtcbn07XG5cbnZhciBub3JtYWxpemUgPSBpc0ZvcmNlZC5ub3JtYWxpemUgPSBmdW5jdGlvbiAoc3RyaW5nKSB7XG4gIHJldHVybiBTdHJpbmcoc3RyaW5nKS5yZXBsYWNlKHJlcGxhY2VtZW50LCAnLicpLnRvTG93ZXJDYXNlKCk7XG59O1xuXG52YXIgZGF0YSA9IGlzRm9yY2VkLmRhdGEgPSB7fTtcbnZhciBOQVRJVkUgPSBpc0ZvcmNlZC5OQVRJVkUgPSAnTic7XG52YXIgUE9MWUZJTEwgPSBpc0ZvcmNlZC5QT0xZRklMTCA9ICdQJztcblxubW9kdWxlLmV4cG9ydHMgPSBpc0ZvcmNlZDtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsVGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwtdGhpcycpO1xudmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yJykuZjtcbnZhciBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLW5vbi1lbnVtZXJhYmxlLXByb3BlcnR5Jyk7XG52YXIgZGVmaW5lQnVpbHRJbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZWZpbmUtYnVpbHQtaW4nKTtcbnZhciBkZWZpbmVHbG9iYWxQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZWZpbmUtZ2xvYmFsLXByb3BlcnR5Jyk7XG52YXIgY29weUNvbnN0cnVjdG9yUHJvcGVydGllcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jb3B5LWNvbnN0cnVjdG9yLXByb3BlcnRpZXMnKTtcbnZhciBpc0ZvcmNlZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1mb3JjZWQnKTtcblxuLypcbiAgb3B0aW9ucy50YXJnZXQgICAgICAgICAtIG5hbWUgb2YgdGhlIHRhcmdldCBvYmplY3RcbiAgb3B0aW9ucy5nbG9iYWwgICAgICAgICAtIHRhcmdldCBpcyB0aGUgZ2xvYmFsIG9iamVjdFxuICBvcHRpb25zLnN0YXQgICAgICAgICAgIC0gZXhwb3J0IGFzIHN0YXRpYyBtZXRob2RzIG9mIHRhcmdldFxuICBvcHRpb25zLnByb3RvICAgICAgICAgIC0gZXhwb3J0IGFzIHByb3RvdHlwZSBtZXRob2RzIG9mIHRhcmdldFxuICBvcHRpb25zLnJlYWwgICAgICAgICAgIC0gcmVhbCBwcm90b3R5cGUgbWV0aG9kIGZvciB0aGUgYHB1cmVgIHZlcnNpb25cbiAgb3B0aW9ucy5mb3JjZWQgICAgICAgICAtIGV4cG9ydCBldmVuIGlmIHRoZSBuYXRpdmUgZmVhdHVyZSBpcyBhdmFpbGFibGVcbiAgb3B0aW9ucy5iaW5kICAgICAgICAgICAtIGJpbmQgbWV0aG9kcyB0byB0aGUgdGFyZ2V0LCByZXF1aXJlZCBmb3IgdGhlIGBwdXJlYCB2ZXJzaW9uXG4gIG9wdGlvbnMud3JhcCAgICAgICAgICAgLSB3cmFwIGNvbnN0cnVjdG9ycyB0byBwcmV2ZW50aW5nIGdsb2JhbCBwb2xsdXRpb24sIHJlcXVpcmVkIGZvciB0aGUgYHB1cmVgIHZlcnNpb25cbiAgb3B0aW9ucy51bnNhZmUgICAgICAgICAtIHVzZSB0aGUgc2ltcGxlIGFzc2lnbm1lbnQgb2YgcHJvcGVydHkgaW5zdGVhZCBvZiBkZWxldGUgKyBkZWZpbmVQcm9wZXJ0eVxuICBvcHRpb25zLnNoYW0gICAgICAgICAgIC0gYWRkIGEgZmxhZyB0byBub3QgY29tcGxldGVseSBmdWxsIHBvbHlmaWxsc1xuICBvcHRpb25zLmVudW1lcmFibGUgICAgIC0gZXhwb3J0IGFzIGVudW1lcmFibGUgcHJvcGVydHlcbiAgb3B0aW9ucy5kb250Q2FsbEdldFNldCAtIHByZXZlbnQgY2FsbGluZyBhIGdldHRlciBvbiB0YXJnZXRcbiAgb3B0aW9ucy5uYW1lICAgICAgICAgICAtIHRoZSAubmFtZSBvZiB0aGUgZnVuY3Rpb24gaWYgaXQgZG9lcyBub3QgbWF0Y2ggdGhlIGtleVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9wdGlvbnMsIHNvdXJjZSkge1xuICB2YXIgVEFSR0VUID0gb3B0aW9ucy50YXJnZXQ7XG4gIHZhciBHTE9CQUwgPSBvcHRpb25zLmdsb2JhbDtcbiAgdmFyIFNUQVRJQyA9IG9wdGlvbnMuc3RhdDtcbiAgdmFyIEZPUkNFRCwgdGFyZ2V0LCBrZXksIHRhcmdldFByb3BlcnR5LCBzb3VyY2VQcm9wZXJ0eSwgZGVzY3JpcHRvcjtcbiAgaWYgKEdMT0JBTCkge1xuICAgIHRhcmdldCA9IGdsb2JhbFRoaXM7XG4gIH0gZWxzZSBpZiAoU1RBVElDKSB7XG4gICAgdGFyZ2V0ID0gZ2xvYmFsVGhpc1tUQVJHRVRdIHx8IGRlZmluZUdsb2JhbFByb3BlcnR5KFRBUkdFVCwge30pO1xuICB9IGVsc2Uge1xuICAgIHRhcmdldCA9IGdsb2JhbFRoaXNbVEFSR0VUXSAmJiBnbG9iYWxUaGlzW1RBUkdFVF0ucHJvdG90eXBlO1xuICB9XG4gIGlmICh0YXJnZXQpIGZvciAoa2V5IGluIHNvdXJjZSkge1xuICAgIHNvdXJjZVByb3BlcnR5ID0gc291cmNlW2tleV07XG4gICAgaWYgKG9wdGlvbnMuZG9udENhbGxHZXRTZXQpIHtcbiAgICAgIGRlc2NyaXB0b3IgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpO1xuICAgICAgdGFyZ2V0UHJvcGVydHkgPSBkZXNjcmlwdG9yICYmIGRlc2NyaXB0b3IudmFsdWU7XG4gICAgfSBlbHNlIHRhcmdldFByb3BlcnR5ID0gdGFyZ2V0W2tleV07XG4gICAgRk9SQ0VEID0gaXNGb3JjZWQoR0xPQkFMID8ga2V5IDogVEFSR0VUICsgKFNUQVRJQyA/ICcuJyA6ICcjJykgKyBrZXksIG9wdGlvbnMuZm9yY2VkKTtcbiAgICAvLyBjb250YWluZWQgaW4gdGFyZ2V0XG4gICAgaWYgKCFGT1JDRUQgJiYgdGFyZ2V0UHJvcGVydHkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaWYgKHR5cGVvZiBzb3VyY2VQcm9wZXJ0eSA9PSB0eXBlb2YgdGFyZ2V0UHJvcGVydHkpIGNvbnRpbnVlO1xuICAgICAgY29weUNvbnN0cnVjdG9yUHJvcGVydGllcyhzb3VyY2VQcm9wZXJ0eSwgdGFyZ2V0UHJvcGVydHkpO1xuICAgIH1cbiAgICAvLyBhZGQgYSBmbGFnIHRvIG5vdCBjb21wbGV0ZWx5IGZ1bGwgcG9seWZpbGxzXG4gICAgaWYgKG9wdGlvbnMuc2hhbSB8fCAodGFyZ2V0UHJvcGVydHkgJiYgdGFyZ2V0UHJvcGVydHkuc2hhbSkpIHtcbiAgICAgIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eShzb3VyY2VQcm9wZXJ0eSwgJ3NoYW0nLCB0cnVlKTtcbiAgICB9XG4gICAgZGVmaW5lQnVpbHRJbih0YXJnZXQsIGtleSwgc291cmNlUHJvcGVydHksIG9wdGlvbnMpO1xuICB9XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBpc1Byb3RvdHlwZU9mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1pcy1wcm90b3R5cGUtb2YnKTtcblxudmFyICRUeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCBQcm90b3R5cGUpIHtcbiAgaWYgKGlzUHJvdG90eXBlT2YoUHJvdG90eXBlLCBpdCkpIHJldHVybiBpdDtcbiAgdGhyb3cgbmV3ICRUeXBlRXJyb3IoJ0luY29ycmVjdCBpbnZvY2F0aW9uJyk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9ICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIEYoKSB7IC8qIGVtcHR5ICovIH1cbiAgRi5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBudWxsO1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldHByb3RvdHlwZW9mIC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nXG4gIHJldHVybiBPYmplY3QuZ2V0UHJvdG90eXBlT2YobmV3IEYoKSkgIT09IEYucHJvdG90eXBlO1xufSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGhhc093biA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMtb3duLXByb3BlcnR5Jyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLW9iamVjdCcpO1xudmFyIHNoYXJlZEtleSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQta2V5Jyk7XG52YXIgQ09SUkVDVF9QUk9UT1RZUEVfR0VUVEVSID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NvcnJlY3QtcHJvdG90eXBlLWdldHRlcicpO1xuXG52YXIgSUVfUFJPVE8gPSBzaGFyZWRLZXkoJ0lFX1BST1RPJyk7XG52YXIgJE9iamVjdCA9IE9iamVjdDtcbnZhciBPYmplY3RQcm90b3R5cGUgPSAkT2JqZWN0LnByb3RvdHlwZTtcblxuLy8gYE9iamVjdC5nZXRQcm90b3R5cGVPZmAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5nZXRwcm90b3R5cGVvZlxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1nZXRwcm90b3R5cGVvZiAtLSBzYWZlXG5tb2R1bGUuZXhwb3J0cyA9IENPUlJFQ1RfUFJPVE9UWVBFX0dFVFRFUiA/ICRPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiAoTykge1xuICB2YXIgb2JqZWN0ID0gdG9PYmplY3QoTyk7XG4gIGlmIChoYXNPd24ob2JqZWN0LCBJRV9QUk9UTykpIHJldHVybiBvYmplY3RbSUVfUFJPVE9dO1xuICB2YXIgY29uc3RydWN0b3IgPSBvYmplY3QuY29uc3RydWN0b3I7XG4gIGlmIChpc0NhbGxhYmxlKGNvbnN0cnVjdG9yKSAmJiBvYmplY3QgaW5zdGFuY2VvZiBjb25zdHJ1Y3Rvcikge1xuICAgIHJldHVybiBjb25zdHJ1Y3Rvci5wcm90b3R5cGU7XG4gIH0gcmV0dXJuIG9iamVjdCBpbnN0YW5jZW9mICRPYmplY3QgPyBPYmplY3RQcm90b3R5cGUgOiBudWxsO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgbWFrZUJ1aWx0SW4gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbWFrZS1idWlsdC1pbicpO1xudmFyIGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHknKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodGFyZ2V0LCBuYW1lLCBkZXNjcmlwdG9yKSB7XG4gIGlmIChkZXNjcmlwdG9yLmdldCkgbWFrZUJ1aWx0SW4oZGVzY3JpcHRvci5nZXQsIG5hbWUsIHsgZ2V0dGVyOiB0cnVlIH0pO1xuICBpZiAoZGVzY3JpcHRvci5zZXQpIG1ha2VCdWlsdEluKGRlc2NyaXB0b3Iuc2V0LCBuYW1lLCB7IHNldHRlcjogdHJ1ZSB9KTtcbiAgcmV0dXJuIGRlZmluZVByb3BlcnR5LmYodGFyZ2V0LCBuYW1lLCBkZXNjcmlwdG9yKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgZGVmaW5lUHJvcGVydHlNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpO1xudmFyIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHktZGVzY3JpcHRvcicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgaWYgKERFU0NSSVBUT1JTKSBkZWZpbmVQcm9wZXJ0eU1vZHVsZS5mKG9iamVjdCwga2V5LCBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IoMCwgdmFsdWUpKTtcbiAgZWxzZSBvYmplY3Rba2V5XSA9IHZhbHVlO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgaW50ZXJuYWxPYmplY3RLZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1rZXlzLWludGVybmFsJyk7XG52YXIgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW51bS1idWcta2V5cycpO1xuXG4vLyBgT2JqZWN0LmtleXNgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vYmplY3Qua2V5c1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1rZXlzIC0tIHNhZmVcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmtleXMgfHwgZnVuY3Rpb24ga2V5cyhPKSB7XG4gIHJldHVybiBpbnRlcm5hbE9iamVjdEtleXMoTywgZW51bUJ1Z0tleXMpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBWOF9QUk9UT1RZUEVfREVGSU5FX0JVRyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy92OC1wcm90b3R5cGUtZGVmaW5lLWJ1ZycpO1xudmFyIGRlZmluZVByb3BlcnR5TW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHknKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcbnZhciB0b0luZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QnKTtcbnZhciBvYmplY3RLZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1rZXlzJyk7XG5cbi8vIGBPYmplY3QuZGVmaW5lUHJvcGVydGllc2AgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5kZWZpbmVwcm9wZXJ0aWVzXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWRlZmluZXByb3BlcnRpZXMgLS0gc2FmZVxuZXhwb3J0cy5mID0gREVTQ1JJUFRPUlMgJiYgIVY4X1BST1RPVFlQRV9ERUZJTkVfQlVHID8gT2JqZWN0LmRlZmluZVByb3BlcnRpZXMgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKE8sIFByb3BlcnRpZXMpIHtcbiAgYW5PYmplY3QoTyk7XG4gIHZhciBwcm9wcyA9IHRvSW5kZXhlZE9iamVjdChQcm9wZXJ0aWVzKTtcbiAgdmFyIGtleXMgPSBvYmplY3RLZXlzKFByb3BlcnRpZXMpO1xuICB2YXIgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gIHZhciBpbmRleCA9IDA7XG4gIHZhciBrZXk7XG4gIHdoaWxlIChsZW5ndGggPiBpbmRleCkgZGVmaW5lUHJvcGVydHlNb2R1bGUuZihPLCBrZXkgPSBrZXlzW2luZGV4KytdLCBwcm9wc1trZXldKTtcbiAgcmV0dXJuIE87XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnZXRCdWlsdEluID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1idWlsdC1pbicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGdldEJ1aWx0SW4oJ2RvY3VtZW50JywgJ2RvY3VtZW50RWxlbWVudCcpO1xuIiwgIid1c2Ugc3RyaWN0Jztcbi8qIGdsb2JhbCBBY3RpdmVYT2JqZWN0IC0tIG9sZCBJRSwgV1NIICovXG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgZGVmaW5lUHJvcGVydGllc01vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnRpZXMnKTtcbnZhciBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbnVtLWJ1Zy1rZXlzJyk7XG52YXIgaGlkZGVuS2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oaWRkZW4ta2V5cycpO1xudmFyIGh0bWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaHRtbCcpO1xudmFyIGRvY3VtZW50Q3JlYXRlRWxlbWVudCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kb2N1bWVudC1jcmVhdGUtZWxlbWVudCcpO1xudmFyIHNoYXJlZEtleSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQta2V5Jyk7XG5cbnZhciBHVCA9ICc+JztcbnZhciBMVCA9ICc8JztcbnZhciBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcbnZhciBTQ1JJUFQgPSAnc2NyaXB0JztcbnZhciBJRV9QUk9UTyA9IHNoYXJlZEtleSgnSUVfUFJPVE8nKTtcblxudmFyIEVtcHR5Q29uc3RydWN0b3IgPSBmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH07XG5cbnZhciBzY3JpcHRUYWcgPSBmdW5jdGlvbiAoY29udGVudCkge1xuICByZXR1cm4gTFQgKyBTQ1JJUFQgKyBHVCArIGNvbnRlbnQgKyBMVCArICcvJyArIFNDUklQVCArIEdUO1xufTtcblxuLy8gQ3JlYXRlIG9iamVjdCB3aXRoIGZha2UgYG51bGxgIHByb3RvdHlwZTogdXNlIEFjdGl2ZVggT2JqZWN0IHdpdGggY2xlYXJlZCBwcm90b3R5cGVcbnZhciBOdWxsUHJvdG9PYmplY3RWaWFBY3RpdmVYID0gZnVuY3Rpb24gKGFjdGl2ZVhEb2N1bWVudCkge1xuICBhY3RpdmVYRG9jdW1lbnQud3JpdGUoc2NyaXB0VGFnKCcnKSk7XG4gIGFjdGl2ZVhEb2N1bWVudC5jbG9zZSgpO1xuICB2YXIgdGVtcCA9IGFjdGl2ZVhEb2N1bWVudC5wYXJlbnRXaW5kb3cuT2JqZWN0O1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdXNlbGVzcy1hc3NpZ25tZW50IC0tIGF2b2lkIG1lbW9yeSBsZWFrXG4gIGFjdGl2ZVhEb2N1bWVudCA9IG51bGw7XG4gIHJldHVybiB0ZW1wO1xufTtcblxuLy8gQ3JlYXRlIG9iamVjdCB3aXRoIGZha2UgYG51bGxgIHByb3RvdHlwZTogdXNlIGlmcmFtZSBPYmplY3Qgd2l0aCBjbGVhcmVkIHByb3RvdHlwZVxudmFyIE51bGxQcm90b09iamVjdFZpYUlGcmFtZSA9IGZ1bmN0aW9uICgpIHtcbiAgLy8gVGhyYXNoLCB3YXN0ZSBhbmQgc29kb215OiBJRSBHQyBidWdcbiAgdmFyIGlmcmFtZSA9IGRvY3VtZW50Q3JlYXRlRWxlbWVudCgnaWZyYW1lJyk7XG4gIHZhciBKUyA9ICdqYXZhJyArIFNDUklQVCArICc6JztcbiAgdmFyIGlmcmFtZURvY3VtZW50O1xuICBpZnJhbWUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgaHRtbC5hcHBlbmRDaGlsZChpZnJhbWUpO1xuICAvLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvNDc1XG4gIGlmcmFtZS5zcmMgPSBTdHJpbmcoSlMpO1xuICBpZnJhbWVEb2N1bWVudCA9IGlmcmFtZS5jb250ZW50V2luZG93LmRvY3VtZW50O1xuICBpZnJhbWVEb2N1bWVudC5vcGVuKCk7XG4gIGlmcmFtZURvY3VtZW50LndyaXRlKHNjcmlwdFRhZygnZG9jdW1lbnQuRj1PYmplY3QnKSk7XG4gIGlmcmFtZURvY3VtZW50LmNsb3NlKCk7XG4gIHJldHVybiBpZnJhbWVEb2N1bWVudC5GO1xufTtcblxuLy8gQ2hlY2sgZm9yIGRvY3VtZW50LmRvbWFpbiBhbmQgYWN0aXZlIHggc3VwcG9ydFxuLy8gTm8gbmVlZCB0byB1c2UgYWN0aXZlIHggYXBwcm9hY2ggd2hlbiBkb2N1bWVudC5kb21haW4gaXMgbm90IHNldFxuLy8gc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9lcy1zaGltcy9lczUtc2hpbS9pc3N1ZXMvMTUwXG4vLyB2YXJpYXRpb24gb2YgaHR0cHM6Ly9naXRodWIuY29tL2tpdGNhbWJyaWRnZS9lczUtc2hpbS9jb21taXQvNGY3MzhhYzA2NjM0NlxuLy8gYXZvaWQgSUUgR0MgYnVnXG52YXIgYWN0aXZlWERvY3VtZW50O1xudmFyIE51bGxQcm90b09iamVjdCA9IGZ1bmN0aW9uICgpIHtcbiAgdHJ5IHtcbiAgICBhY3RpdmVYRG9jdW1lbnQgPSBuZXcgQWN0aXZlWE9iamVjdCgnaHRtbGZpbGUnKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHsgLyogaWdub3JlICovIH1cbiAgTnVsbFByb3RvT2JqZWN0ID0gdHlwZW9mIGRvY3VtZW50ICE9ICd1bmRlZmluZWQnXG4gICAgPyBkb2N1bWVudC5kb21haW4gJiYgYWN0aXZlWERvY3VtZW50XG4gICAgICA/IE51bGxQcm90b09iamVjdFZpYUFjdGl2ZVgoYWN0aXZlWERvY3VtZW50KSAvLyBvbGQgSUVcbiAgICAgIDogTnVsbFByb3RvT2JqZWN0VmlhSUZyYW1lKClcbiAgICA6IE51bGxQcm90b09iamVjdFZpYUFjdGl2ZVgoYWN0aXZlWERvY3VtZW50KTsgLy8gV1NIXG4gIHZhciBsZW5ndGggPSBlbnVtQnVnS2V5cy5sZW5ndGg7XG4gIHdoaWxlIChsZW5ndGgtLSkgZGVsZXRlIE51bGxQcm90b09iamVjdFtQUk9UT1RZUEVdW2VudW1CdWdLZXlzW2xlbmd0aF1dO1xuICByZXR1cm4gTnVsbFByb3RvT2JqZWN0KCk7XG59O1xuXG5oaWRkZW5LZXlzW0lFX1BST1RPXSA9IHRydWU7XG5cbi8vIGBPYmplY3QuY3JlYXRlYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb2JqZWN0LmNyZWF0ZVxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1jcmVhdGUgLS0gc2FmZVxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuY3JlYXRlIHx8IGZ1bmN0aW9uIGNyZWF0ZShPLCBQcm9wZXJ0aWVzKSB7XG4gIHZhciByZXN1bHQ7XG4gIGlmIChPICE9PSBudWxsKSB7XG4gICAgRW1wdHlDb25zdHJ1Y3RvcltQUk9UT1RZUEVdID0gYW5PYmplY3QoTyk7XG4gICAgcmVzdWx0ID0gbmV3IEVtcHR5Q29uc3RydWN0b3IoKTtcbiAgICBFbXB0eUNvbnN0cnVjdG9yW1BST1RPVFlQRV0gPSBudWxsO1xuICAgIC8vIGFkZCBcIl9fcHJvdG9fX1wiIGZvciBPYmplY3QuZ2V0UHJvdG90eXBlT2YgcG9seWZpbGxcbiAgICByZXN1bHRbSUVfUFJPVE9dID0gTztcbiAgfSBlbHNlIHJlc3VsdCA9IE51bGxQcm90b09iamVjdCgpO1xuICByZXR1cm4gUHJvcGVydGllcyA9PT0gdW5kZWZpbmVkID8gcmVzdWx0IDogZGVmaW5lUHJvcGVydGllc01vZHVsZS5mKHJlc3VsdCwgUHJvcGVydGllcyk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcbnZhciBjcmVhdGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWNyZWF0ZScpO1xudmFyIGdldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtcHJvdG90eXBlLW9mJyk7XG52YXIgZGVmaW5lQnVpbHRJbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZWZpbmUtYnVpbHQtaW4nKTtcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcbnZhciBJU19QVVJFID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLXB1cmUnKTtcblxudmFyIElURVJBVE9SID0gd2VsbEtub3duU3ltYm9sKCdpdGVyYXRvcicpO1xudmFyIEJVR0dZX1NBRkFSSV9JVEVSQVRPUlMgPSBmYWxzZTtcblxuLy8gYCVJdGVyYXRvclByb3RvdHlwZSVgIG9iamVjdFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy0laXRlcmF0b3Jwcm90b3R5cGUlLW9iamVjdFxudmFyIEl0ZXJhdG9yUHJvdG90eXBlLCBQcm90b3R5cGVPZkFycmF5SXRlcmF0b3JQcm90b3R5cGUsIGFycmF5SXRlcmF0b3I7XG5cbi8qIGVzbGludC1kaXNhYmxlIGVzL25vLWFycmF5LXByb3RvdHlwZS1rZXlzIC0tIHNhZmUgKi9cbmlmIChbXS5rZXlzKSB7XG4gIGFycmF5SXRlcmF0b3IgPSBbXS5rZXlzKCk7XG4gIC8vIFNhZmFyaSA4IGhhcyBidWdneSBpdGVyYXRvcnMgdy9vIGBuZXh0YFxuICBpZiAoISgnbmV4dCcgaW4gYXJyYXlJdGVyYXRvcikpIEJVR0dZX1NBRkFSSV9JVEVSQVRPUlMgPSB0cnVlO1xuICBlbHNlIHtcbiAgICBQcm90b3R5cGVPZkFycmF5SXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90b3R5cGVPZihnZXRQcm90b3R5cGVPZihhcnJheUl0ZXJhdG9yKSk7XG4gICAgaWYgKFByb3RvdHlwZU9mQXJyYXlJdGVyYXRvclByb3RvdHlwZSAhPT0gT2JqZWN0LnByb3RvdHlwZSkgSXRlcmF0b3JQcm90b3R5cGUgPSBQcm90b3R5cGVPZkFycmF5SXRlcmF0b3JQcm90b3R5cGU7XG4gIH1cbn1cblxudmFyIE5FV19JVEVSQVRPUl9QUk9UT1RZUEUgPSAhaXNPYmplY3QoSXRlcmF0b3JQcm90b3R5cGUpIHx8IGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgdmFyIHRlc3QgPSB7fTtcbiAgLy8gRkY0NC0gbGVnYWN5IGl0ZXJhdG9ycyBjYXNlXG4gIHJldHVybiBJdGVyYXRvclByb3RvdHlwZVtJVEVSQVRPUl0uY2FsbCh0ZXN0KSAhPT0gdGVzdDtcbn0pO1xuXG5pZiAoTkVXX0lURVJBVE9SX1BST1RPVFlQRSkgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcbmVsc2UgaWYgKElTX1BVUkUpIEl0ZXJhdG9yUHJvdG90eXBlID0gY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlKTtcblxuLy8gYCVJdGVyYXRvclByb3RvdHlwZSVbQEBpdGVyYXRvcl0oKWAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLSVpdGVyYXRvcnByb3RvdHlwZSUtQEBpdGVyYXRvclxuaWYgKCFpc0NhbGxhYmxlKEl0ZXJhdG9yUHJvdG90eXBlW0lURVJBVE9SXSkpIHtcbiAgZGVmaW5lQnVpbHRJbihJdGVyYXRvclByb3RvdHlwZSwgSVRFUkFUT1IsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBJdGVyYXRvclByb3RvdHlwZTogSXRlcmF0b3JQcm90b3R5cGUsXG4gIEJVR0dZX1NBRkFSSV9JVEVSQVRPUlM6IEJVR0dZX1NBRkFSSV9JVEVSQVRPUlNcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgZ2xvYmFsVGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwtdGhpcycpO1xudmFyIGFuSW5zdGFuY2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4taW5zdGFuY2UnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWdldC1wcm90b3R5cGUtb2YnKTtcbnZhciBkZWZpbmVCdWlsdEluQWNjZXNzb3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVmaW5lLWJ1aWx0LWluLWFjY2Vzc29yJyk7XG52YXIgY3JlYXRlUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5Jyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBoYXNPd24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eScpO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xudmFyIEl0ZXJhdG9yUHJvdG90eXBlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2l0ZXJhdG9ycy1jb3JlJykuSXRlcmF0b3JQcm90b3R5cGU7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBJU19QVVJFID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLXB1cmUnKTtcblxudmFyIENPTlNUUlVDVE9SID0gJ2NvbnN0cnVjdG9yJztcbnZhciBJVEVSQVRPUiA9ICdJdGVyYXRvcic7XG52YXIgVE9fU1RSSU5HX1RBRyA9IHdlbGxLbm93blN5bWJvbCgndG9TdHJpbmdUYWcnKTtcblxudmFyICRUeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG52YXIgTmF0aXZlSXRlcmF0b3IgPSBnbG9iYWxUaGlzW0lURVJBVE9SXTtcblxuLy8gRkY1Ni0gaGF2ZSBub24tc3RhbmRhcmQgZ2xvYmFsIGhlbHBlciBgSXRlcmF0b3JgXG52YXIgRk9SQ0VEID0gSVNfUFVSRVxuICB8fCAhaXNDYWxsYWJsZShOYXRpdmVJdGVyYXRvcilcbiAgfHwgTmF0aXZlSXRlcmF0b3IucHJvdG90eXBlICE9PSBJdGVyYXRvclByb3RvdHlwZVxuICAvLyBGRjQ0LSBub24tc3RhbmRhcmQgYEl0ZXJhdG9yYCBwYXNzZXMgcHJldmlvdXMgdGVzdHNcbiAgfHwgIWZhaWxzKGZ1bmN0aW9uICgpIHsgTmF0aXZlSXRlcmF0b3Ioe30pOyB9KTtcblxudmFyIEl0ZXJhdG9yQ29uc3RydWN0b3IgPSBmdW5jdGlvbiBJdGVyYXRvcigpIHtcbiAgYW5JbnN0YW5jZSh0aGlzLCBJdGVyYXRvclByb3RvdHlwZSk7XG4gIGlmIChnZXRQcm90b3R5cGVPZih0aGlzKSA9PT0gSXRlcmF0b3JQcm90b3R5cGUpIHRocm93IG5ldyAkVHlwZUVycm9yKCdBYnN0cmFjdCBjbGFzcyBJdGVyYXRvciBub3QgZGlyZWN0bHkgY29uc3RydWN0YWJsZScpO1xufTtcblxudmFyIGRlZmluZUl0ZXJhdG9yUHJvdG90eXBlQWNjZXNzb3IgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICBpZiAoREVTQ1JJUFRPUlMpIHtcbiAgICBkZWZpbmVCdWlsdEluQWNjZXNzb3IoSXRlcmF0b3JQcm90b3R5cGUsIGtleSwge1xuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgIH0sXG4gICAgICBzZXQ6IGZ1bmN0aW9uIChyZXBsYWNlbWVudCkge1xuICAgICAgICBhbk9iamVjdCh0aGlzKTtcbiAgICAgICAgaWYgKHRoaXMgPT09IEl0ZXJhdG9yUHJvdG90eXBlKSB0aHJvdyBuZXcgJFR5cGVFcnJvcihcIllvdSBjYW4ndCByZWRlZmluZSB0aGlzIHByb3BlcnR5XCIpO1xuICAgICAgICBpZiAoaGFzT3duKHRoaXMsIGtleSkpIHRoaXNba2V5XSA9IHJlcGxhY2VtZW50O1xuICAgICAgICBlbHNlIGNyZWF0ZVByb3BlcnR5KHRoaXMsIGtleSwgcmVwbGFjZW1lbnQpO1xuICAgICAgfVxuICAgIH0pO1xuICB9IGVsc2UgSXRlcmF0b3JQcm90b3R5cGVba2V5XSA9IHZhbHVlO1xufTtcblxuaWYgKCFoYXNPd24oSXRlcmF0b3JQcm90b3R5cGUsIFRPX1NUUklOR19UQUcpKSBkZWZpbmVJdGVyYXRvclByb3RvdHlwZUFjY2Vzc29yKFRPX1NUUklOR19UQUcsIElURVJBVE9SKTtcblxuaWYgKEZPUkNFRCB8fCAhaGFzT3duKEl0ZXJhdG9yUHJvdG90eXBlLCBDT05TVFJVQ1RPUikgfHwgSXRlcmF0b3JQcm90b3R5cGVbQ09OU1RSVUNUT1JdID09PSBPYmplY3QpIHtcbiAgZGVmaW5lSXRlcmF0b3JQcm90b3R5cGVBY2Nlc3NvcihDT05TVFJVQ1RPUiwgSXRlcmF0b3JDb25zdHJ1Y3Rvcik7XG59XG5cbkl0ZXJhdG9yQ29uc3RydWN0b3IucHJvdG90eXBlID0gSXRlcmF0b3JQcm90b3R5cGU7XG5cbi8vIGBJdGVyYXRvcmAgY29uc3RydWN0b3Jcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtaXRlcmF0b3JcbiQoeyBnbG9iYWw6IHRydWUsIGNvbnN0cnVjdG9yOiB0cnVlLCBmb3JjZWQ6IEZPUkNFRCB9LCB7XG4gIEl0ZXJhdG9yOiBJdGVyYXRvckNvbnN0cnVjdG9yXG59KTtcbiIsICIndXNlIHN0cmljdCc7XG4vLyBUT0RPOiBSZW1vdmUgZnJvbSBgY29yZS1qc0A0YFxucmVxdWlyZSgnLi4vbW9kdWxlcy9lcy5pdGVyYXRvci5jb25zdHJ1Y3RvcicpO1xuIiwgIid1c2Ugc3RyaWN0Jztcbi8vIGBHZXRJdGVyYXRvckRpcmVjdChvYmopYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9wcm9wb3NhbC1pdGVyYXRvci1oZWxwZXJzLyNzZWMtZ2V0aXRlcmF0b3JkaXJlY3Rcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4ge1xuICAgIGl0ZXJhdG9yOiBvYmosXG4gICAgbmV4dDogb2JqLm5leHQsXG4gICAgZG9uZTogZmFsc2VcbiAgfTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGRlZmluZUJ1aWx0SW4gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVmaW5lLWJ1aWx0LWluJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHRhcmdldCwgc3JjLCBvcHRpb25zKSB7XG4gIGZvciAodmFyIGtleSBpbiBzcmMpIGRlZmluZUJ1aWx0SW4odGFyZ2V0LCBrZXksIHNyY1trZXldLCBvcHRpb25zKTtcbiAgcmV0dXJuIHRhcmdldDtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xuLy8gYENyZWF0ZUl0ZXJSZXN1bHRPYmplY3RgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1jcmVhdGVpdGVycmVzdWx0b2JqZWN0XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh2YWx1ZSwgZG9uZSkge1xuICByZXR1cm4geyB2YWx1ZTogdmFsdWUsIGRvbmU6IGRvbmUgfTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGNhbGwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tY2FsbCcpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xudmFyIGdldE1ldGhvZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtbWV0aG9kJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZXJhdG9yLCBraW5kLCB2YWx1ZSkge1xuICB2YXIgaW5uZXJSZXN1bHQsIGlubmVyRXJyb3I7XG4gIGFuT2JqZWN0KGl0ZXJhdG9yKTtcbiAgdHJ5IHtcbiAgICBpbm5lclJlc3VsdCA9IGdldE1ldGhvZChpdGVyYXRvciwgJ3JldHVybicpO1xuICAgIGlmICghaW5uZXJSZXN1bHQpIHtcbiAgICAgIGlmIChraW5kID09PSAndGhyb3cnKSB0aHJvdyB2YWx1ZTtcbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gICAgaW5uZXJSZXN1bHQgPSBjYWxsKGlubmVyUmVzdWx0LCBpdGVyYXRvcik7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgaW5uZXJFcnJvciA9IHRydWU7XG4gICAgaW5uZXJSZXN1bHQgPSBlcnJvcjtcbiAgfVxuICBpZiAoa2luZCA9PT0gJ3Rocm93JykgdGhyb3cgdmFsdWU7XG4gIGlmIChpbm5lckVycm9yKSB0aHJvdyBpbm5lclJlc3VsdDtcbiAgYW5PYmplY3QoaW5uZXJSZXN1bHQpO1xuICByZXR1cm4gdmFsdWU7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBjYWxsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWNhbGwnKTtcbnZhciBjcmVhdGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWNyZWF0ZScpO1xudmFyIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHknKTtcbnZhciBkZWZpbmVCdWlsdElucyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZWZpbmUtYnVpbHQtaW5zJyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG52YXIgSW50ZXJuYWxTdGF0ZU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbnRlcm5hbC1zdGF0ZScpO1xudmFyIGdldE1ldGhvZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtbWV0aG9kJyk7XG52YXIgSXRlcmF0b3JQcm90b3R5cGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXRlcmF0b3JzLWNvcmUnKS5JdGVyYXRvclByb3RvdHlwZTtcbnZhciBjcmVhdGVJdGVyUmVzdWx0T2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1pdGVyLXJlc3VsdC1vYmplY3QnKTtcbnZhciBpdGVyYXRvckNsb3NlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2l0ZXJhdG9yLWNsb3NlJyk7XG5cbnZhciBUT19TVFJJTkdfVEFHID0gd2VsbEtub3duU3ltYm9sKCd0b1N0cmluZ1RhZycpO1xudmFyIElURVJBVE9SX0hFTFBFUiA9ICdJdGVyYXRvckhlbHBlcic7XG52YXIgV1JBUF9GT1JfVkFMSURfSVRFUkFUT1IgPSAnV3JhcEZvclZhbGlkSXRlcmF0b3InO1xudmFyIHNldEludGVybmFsU3RhdGUgPSBJbnRlcm5hbFN0YXRlTW9kdWxlLnNldDtcblxudmFyIGNyZWF0ZUl0ZXJhdG9yUHJveHlQcm90b3R5cGUgPSBmdW5jdGlvbiAoSVNfSVRFUkFUT1IpIHtcbiAgdmFyIGdldEludGVybmFsU3RhdGUgPSBJbnRlcm5hbFN0YXRlTW9kdWxlLmdldHRlckZvcihJU19JVEVSQVRPUiA/IFdSQVBfRk9SX1ZBTElEX0lURVJBVE9SIDogSVRFUkFUT1JfSEVMUEVSKTtcblxuICByZXR1cm4gZGVmaW5lQnVpbHRJbnMoY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlKSwge1xuICAgIG5leHQ6IGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICB2YXIgc3RhdGUgPSBnZXRJbnRlcm5hbFN0YXRlKHRoaXMpO1xuICAgICAgLy8gZm9yIHNpbXBsaWZpY2F0aW9uOlxuICAgICAgLy8gICBmb3IgYCVXcmFwRm9yVmFsaWRJdGVyYXRvclByb3RvdHlwZSUubmV4dGAgb3Igd2l0aCBgc3RhdGUucmV0dXJuSGFuZGxlclJlc3VsdGAgb3VyIGBuZXh0SGFuZGxlcmAgcmV0dXJucyBgSXRlclJlc3VsdE9iamVjdGBcbiAgICAgIC8vICAgZm9yIGAlSXRlcmF0b3JIZWxwZXJQcm90b3R5cGUlLm5leHRgIC0ganVzdCBhIHZhbHVlXG4gICAgICBpZiAoSVNfSVRFUkFUT1IpIHJldHVybiBzdGF0ZS5uZXh0SGFuZGxlcigpO1xuICAgICAgaWYgKHN0YXRlLmRvbmUpIHJldHVybiBjcmVhdGVJdGVyUmVzdWx0T2JqZWN0KHVuZGVmaW5lZCwgdHJ1ZSk7XG4gICAgICB0cnkge1xuICAgICAgICB2YXIgcmVzdWx0ID0gc3RhdGUubmV4dEhhbmRsZXIoKTtcbiAgICAgICAgcmV0dXJuIHN0YXRlLnJldHVybkhhbmRsZXJSZXN1bHQgPyByZXN1bHQgOiBjcmVhdGVJdGVyUmVzdWx0T2JqZWN0KHJlc3VsdCwgc3RhdGUuZG9uZSk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBzdGF0ZS5kb25lID0gdHJ1ZTtcbiAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICB9XG4gICAgfSxcbiAgICAncmV0dXJuJzogZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHN0YXRlID0gZ2V0SW50ZXJuYWxTdGF0ZSh0aGlzKTtcbiAgICAgIHZhciBpdGVyYXRvciA9IHN0YXRlLml0ZXJhdG9yO1xuICAgICAgc3RhdGUuZG9uZSA9IHRydWU7XG4gICAgICBpZiAoSVNfSVRFUkFUT1IpIHtcbiAgICAgICAgdmFyIHJldHVybk1ldGhvZCA9IGdldE1ldGhvZChpdGVyYXRvciwgJ3JldHVybicpO1xuICAgICAgICByZXR1cm4gcmV0dXJuTWV0aG9kID8gY2FsbChyZXR1cm5NZXRob2QsIGl0ZXJhdG9yKSA6IGNyZWF0ZUl0ZXJSZXN1bHRPYmplY3QodW5kZWZpbmVkLCB0cnVlKTtcbiAgICAgIH1cbiAgICAgIGlmIChzdGF0ZS5pbm5lcikgdHJ5IHtcbiAgICAgICAgaXRlcmF0b3JDbG9zZShzdGF0ZS5pbm5lci5pdGVyYXRvciwgJ25vcm1hbCcpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhdG9yQ2xvc2UoaXRlcmF0b3IsICd0aHJvdycsIGVycm9yKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVyYXRvcikgaXRlcmF0b3JDbG9zZShpdGVyYXRvciwgJ25vcm1hbCcpO1xuICAgICAgcmV0dXJuIGNyZWF0ZUl0ZXJSZXN1bHRPYmplY3QodW5kZWZpbmVkLCB0cnVlKTtcbiAgICB9XG4gIH0pO1xufTtcblxudmFyIFdyYXBGb3JWYWxpZEl0ZXJhdG9yUHJvdG90eXBlID0gY3JlYXRlSXRlcmF0b3JQcm94eVByb3RvdHlwZSh0cnVlKTtcbnZhciBJdGVyYXRvckhlbHBlclByb3RvdHlwZSA9IGNyZWF0ZUl0ZXJhdG9yUHJveHlQcm90b3R5cGUoZmFsc2UpO1xuXG5jcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkoSXRlcmF0b3JIZWxwZXJQcm90b3R5cGUsIFRPX1NUUklOR19UQUcsICdJdGVyYXRvciBIZWxwZXInKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobmV4dEhhbmRsZXIsIElTX0lURVJBVE9SLCBSRVRVUk5fSEFORExFUl9SRVNVTFQpIHtcbiAgdmFyIEl0ZXJhdG9yUHJveHkgPSBmdW5jdGlvbiBJdGVyYXRvcihyZWNvcmQsIHN0YXRlKSB7XG4gICAgaWYgKHN0YXRlKSB7XG4gICAgICBzdGF0ZS5pdGVyYXRvciA9IHJlY29yZC5pdGVyYXRvcjtcbiAgICAgIHN0YXRlLm5leHQgPSByZWNvcmQubmV4dDtcbiAgICB9IGVsc2Ugc3RhdGUgPSByZWNvcmQ7XG4gICAgc3RhdGUudHlwZSA9IElTX0lURVJBVE9SID8gV1JBUF9GT1JfVkFMSURfSVRFUkFUT1IgOiBJVEVSQVRPUl9IRUxQRVI7XG4gICAgc3RhdGUucmV0dXJuSGFuZGxlclJlc3VsdCA9ICEhUkVUVVJOX0hBTkRMRVJfUkVTVUxUO1xuICAgIHN0YXRlLm5leHRIYW5kbGVyID0gbmV4dEhhbmRsZXI7XG4gICAgc3RhdGUuY291bnRlciA9IDA7XG4gICAgc3RhdGUuZG9uZSA9IGZhbHNlO1xuICAgIHNldEludGVybmFsU3RhdGUodGhpcywgc3RhdGUpO1xuICB9O1xuXG4gIEl0ZXJhdG9yUHJveHkucHJvdG90eXBlID0gSVNfSVRFUkFUT1IgPyBXcmFwRm9yVmFsaWRJdGVyYXRvclByb3RvdHlwZSA6IEl0ZXJhdG9ySGVscGVyUHJvdG90eXBlO1xuXG4gIHJldHVybiBJdGVyYXRvclByb3h5O1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgaXRlcmF0b3JDbG9zZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pdGVyYXRvci1jbG9zZScpO1xuXG4vLyBjYWxsIHNvbWV0aGluZyBvbiBpdGVyYXRvciBzdGVwIHdpdGggc2FmZSBjbG9zaW5nIG9uIGVycm9yXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVyYXRvciwgZm4sIHZhbHVlLCBFTlRSSUVTKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIEVOVFJJRVMgPyBmbihhbk9iamVjdCh2YWx1ZSlbMF0sIHZhbHVlWzFdKSA6IGZuKHZhbHVlKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBpdGVyYXRvckNsb3NlKGl0ZXJhdG9yLCAndGhyb3cnLCBlcnJvcik7XG4gIH1cbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgY2FsbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1jYWxsJyk7XG52YXIgYUNhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2EtY2FsbGFibGUnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcbnZhciBnZXRJdGVyYXRvckRpcmVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtaXRlcmF0b3ItZGlyZWN0Jyk7XG52YXIgY3JlYXRlSXRlcmF0b3JQcm94eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pdGVyYXRvci1jcmVhdGUtcHJveHknKTtcbnZhciBjYWxsV2l0aFNhZmVJdGVyYXRpb25DbG9zaW5nID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NhbGwtd2l0aC1zYWZlLWl0ZXJhdGlvbi1jbG9zaW5nJyk7XG52YXIgSVNfUFVSRSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1wdXJlJyk7XG5cbnZhciBJdGVyYXRvclByb3h5ID0gY3JlYXRlSXRlcmF0b3JQcm94eShmdW5jdGlvbiAoKSB7XG4gIHZhciBpdGVyYXRvciA9IHRoaXMuaXRlcmF0b3I7XG4gIHZhciBwcmVkaWNhdGUgPSB0aGlzLnByZWRpY2F0ZTtcbiAgdmFyIG5leHQgPSB0aGlzLm5leHQ7XG4gIHZhciByZXN1bHQsIGRvbmUsIHZhbHVlO1xuICB3aGlsZSAodHJ1ZSkge1xuICAgIHJlc3VsdCA9IGFuT2JqZWN0KGNhbGwobmV4dCwgaXRlcmF0b3IpKTtcbiAgICBkb25lID0gdGhpcy5kb25lID0gISFyZXN1bHQuZG9uZTtcbiAgICBpZiAoZG9uZSkgcmV0dXJuO1xuICAgIHZhbHVlID0gcmVzdWx0LnZhbHVlO1xuICAgIGlmIChjYWxsV2l0aFNhZmVJdGVyYXRpb25DbG9zaW5nKGl0ZXJhdG9yLCBwcmVkaWNhdGUsIFt2YWx1ZSwgdGhpcy5jb3VudGVyKytdLCB0cnVlKSkgcmV0dXJuIHZhbHVlO1xuICB9XG59KTtcblxuLy8gYEl0ZXJhdG9yLnByb3RvdHlwZS5maWx0ZXJgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1pdGVyYXRvci5wcm90b3R5cGUuZmlsdGVyXG4kKHsgdGFyZ2V0OiAnSXRlcmF0b3InLCBwcm90bzogdHJ1ZSwgcmVhbDogdHJ1ZSwgZm9yY2VkOiBJU19QVVJFIH0sIHtcbiAgZmlsdGVyOiBmdW5jdGlvbiBmaWx0ZXIocHJlZGljYXRlKSB7XG4gICAgYW5PYmplY3QodGhpcyk7XG4gICAgYUNhbGxhYmxlKHByZWRpY2F0ZSk7XG4gICAgcmV0dXJuIG5ldyBJdGVyYXRvclByb3h5KGdldEl0ZXJhdG9yRGlyZWN0KHRoaXMpLCB7XG4gICAgICBwcmVkaWNhdGU6IHByZWRpY2F0ZVxuICAgIH0pO1xuICB9XG59KTtcbiIsICIndXNlIHN0cmljdCc7XG4vLyBUT0RPOiBSZW1vdmUgZnJvbSBgY29yZS1qc0A0YFxucmVxdWlyZSgnLi4vbW9kdWxlcy9lcy5pdGVyYXRvci5maWx0ZXInKTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgY2xhc3NvZlJhdyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jbGFzc29mLXJhdycpO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChmbikge1xuICAvLyBOYXNob3JuIGJ1ZzpcbiAgLy8gICBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvMTEyOFxuICAvLyAgIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy8xMTMwXG4gIGlmIChjbGFzc29mUmF3KGZuKSA9PT0gJ0Z1bmN0aW9uJykgcmV0dXJuIHVuY3VycnlUaGlzKGZuKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcy1jbGF1c2UnKTtcbnZhciBhQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYS1jYWxsYWJsZScpO1xudmFyIE5BVElWRV9CSU5EID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWJpbmQtbmF0aXZlJyk7XG5cbnZhciBiaW5kID0gdW5jdXJyeVRoaXModW5jdXJyeVRoaXMuYmluZCk7XG5cbi8vIG9wdGlvbmFsIC8gc2ltcGxlIGNvbnRleHQgYmluZGluZ1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZm4sIHRoYXQpIHtcbiAgYUNhbGxhYmxlKGZuKTtcbiAgcmV0dXJuIHRoYXQgPT09IHVuZGVmaW5lZCA/IGZuIDogTkFUSVZFX0JJTkQgPyBiaW5kKGZuLCB0aGF0KSA6IGZ1bmN0aW9uICgvKiAuLi5hcmdzICovKSB7XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoYXQsIGFyZ3VtZW50cyk7XG4gIH07XG59O1xuIiwgIid1c2Ugc3RyaWN0Jztcbm1vZHVsZS5leHBvcnRzID0ge307XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pdGVyYXRvcnMnKTtcblxudmFyIElURVJBVE9SID0gd2VsbEtub3duU3ltYm9sKCdpdGVyYXRvcicpO1xudmFyIEFycmF5UHJvdG90eXBlID0gQXJyYXkucHJvdG90eXBlO1xuXG4vLyBjaGVjayBvbiBkZWZhdWx0IEFycmF5IGl0ZXJhdG9yXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXQgIT09IHVuZGVmaW5lZCAmJiAoSXRlcmF0b3JzLkFycmF5ID09PSBpdCB8fCBBcnJheVByb3RvdHlwZVtJVEVSQVRPUl0gPT09IGl0KTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xuXG52YXIgVE9fU1RSSU5HX1RBRyA9IHdlbGxLbm93blN5bWJvbCgndG9TdHJpbmdUYWcnKTtcbnZhciB0ZXN0ID0ge307XG5cbnRlc3RbVE9fU1RSSU5HX1RBR10gPSAneic7XG5cbm1vZHVsZS5leHBvcnRzID0gU3RyaW5nKHRlc3QpID09PSAnW29iamVjdCB6XSc7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIFRPX1NUUklOR19UQUdfU1VQUE9SVCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1zdHJpbmctdGFnLXN1cHBvcnQnKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgY2xhc3NvZlJhdyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jbGFzc29mLXJhdycpO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xuXG52YXIgVE9fU1RSSU5HX1RBRyA9IHdlbGxLbm93blN5bWJvbCgndG9TdHJpbmdUYWcnKTtcbnZhciAkT2JqZWN0ID0gT2JqZWN0O1xuXG4vLyBFUzMgd3JvbmcgaGVyZVxudmFyIENPUlJFQ1RfQVJHVU1FTlRTID0gY2xhc3NvZlJhdyhmdW5jdGlvbiAoKSB7IHJldHVybiBhcmd1bWVudHM7IH0oKSkgPT09ICdBcmd1bWVudHMnO1xuXG4vLyBmYWxsYmFjayBmb3IgSUUxMSBTY3JpcHQgQWNjZXNzIERlbmllZCBlcnJvclxudmFyIHRyeUdldCA9IGZ1bmN0aW9uIChpdCwga2V5KSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGl0W2tleV07XG4gIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGVtcHR5ICovIH1cbn07XG5cbi8vIGdldHRpbmcgdGFnIGZyb20gRVM2KyBgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZ2Bcbm1vZHVsZS5leHBvcnRzID0gVE9fU1RSSU5HX1RBR19TVVBQT1JUID8gY2xhc3NvZlJhdyA6IGZ1bmN0aW9uIChpdCkge1xuICB2YXIgTywgdGFnLCByZXN1bHQ7XG4gIHJldHVybiBpdCA9PT0gdW5kZWZpbmVkID8gJ1VuZGVmaW5lZCcgOiBpdCA9PT0gbnVsbCA/ICdOdWxsJ1xuICAgIC8vIEBAdG9TdHJpbmdUYWcgY2FzZVxuICAgIDogdHlwZW9mICh0YWcgPSB0cnlHZXQoTyA9ICRPYmplY3QoaXQpLCBUT19TVFJJTkdfVEFHKSkgPT0gJ3N0cmluZycgPyB0YWdcbiAgICAvLyBidWlsdGluVGFnIGNhc2VcbiAgICA6IENPUlJFQ1RfQVJHVU1FTlRTID8gY2xhc3NvZlJhdyhPKVxuICAgIC8vIEVTMyBhcmd1bWVudHMgZmFsbGJhY2tcbiAgICA6IChyZXN1bHQgPSBjbGFzc29mUmF3KE8pKSA9PT0gJ09iamVjdCcgJiYgaXNDYWxsYWJsZShPLmNhbGxlZSkgPyAnQXJndW1lbnRzJyA6IHJlc3VsdDtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY2xhc3NvZicpO1xudmFyIGdldE1ldGhvZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtbWV0aG9kJyk7XG52YXIgaXNOdWxsT3JVbmRlZmluZWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtbnVsbC1vci11bmRlZmluZWQnKTtcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXRlcmF0b3JzJyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG5cbnZhciBJVEVSQVRPUiA9IHdlbGxLbm93blN5bWJvbCgnaXRlcmF0b3InKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKCFpc051bGxPclVuZGVmaW5lZChpdCkpIHJldHVybiBnZXRNZXRob2QoaXQsIElURVJBVE9SKVxuICAgIHx8IGdldE1ldGhvZChpdCwgJ0BAaXRlcmF0b3InKVxuICAgIHx8IEl0ZXJhdG9yc1tjbGFzc29mKGl0KV07XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBjYWxsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWNhbGwnKTtcbnZhciBhQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYS1jYWxsYWJsZScpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xudmFyIHRyeVRvU3RyaW5nID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RyeS10by1zdHJpbmcnKTtcbnZhciBnZXRJdGVyYXRvck1ldGhvZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtaXRlcmF0b3ItbWV0aG9kJyk7XG5cbnZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcmd1bWVudCwgdXNpbmdJdGVyYXRvcikge1xuICB2YXIgaXRlcmF0b3JNZXRob2QgPSBhcmd1bWVudHMubGVuZ3RoIDwgMiA/IGdldEl0ZXJhdG9yTWV0aG9kKGFyZ3VtZW50KSA6IHVzaW5nSXRlcmF0b3I7XG4gIGlmIChhQ2FsbGFibGUoaXRlcmF0b3JNZXRob2QpKSByZXR1cm4gYW5PYmplY3QoY2FsbChpdGVyYXRvck1ldGhvZCwgYXJndW1lbnQpKTtcbiAgdGhyb3cgbmV3ICRUeXBlRXJyb3IodHJ5VG9TdHJpbmcoYXJndW1lbnQpICsgJyBpcyBub3QgaXRlcmFibGUnKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGJpbmQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tYmluZC1jb250ZXh0Jyk7XG52YXIgY2FsbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1jYWxsJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgdHJ5VG9TdHJpbmcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdHJ5LXRvLXN0cmluZycpO1xudmFyIGlzQXJyYXlJdGVyYXRvck1ldGhvZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1hcnJheS1pdGVyYXRvci1tZXRob2QnKTtcbnZhciBsZW5ndGhPZkFycmF5TGlrZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9sZW5ndGgtb2YtYXJyYXktbGlrZScpO1xudmFyIGlzUHJvdG90eXBlT2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWlzLXByb3RvdHlwZS1vZicpO1xudmFyIGdldEl0ZXJhdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1pdGVyYXRvcicpO1xudmFyIGdldEl0ZXJhdG9yTWV0aG9kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1pdGVyYXRvci1tZXRob2QnKTtcbnZhciBpdGVyYXRvckNsb3NlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2l0ZXJhdG9yLWNsb3NlJyk7XG5cbnZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xuXG52YXIgUmVzdWx0ID0gZnVuY3Rpb24gKHN0b3BwZWQsIHJlc3VsdCkge1xuICB0aGlzLnN0b3BwZWQgPSBzdG9wcGVkO1xuICB0aGlzLnJlc3VsdCA9IHJlc3VsdDtcbn07XG5cbnZhciBSZXN1bHRQcm90b3R5cGUgPSBSZXN1bHQucHJvdG90eXBlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVyYWJsZSwgdW5ib3VuZEZ1bmN0aW9uLCBvcHRpb25zKSB7XG4gIHZhciB0aGF0ID0gb3B0aW9ucyAmJiBvcHRpb25zLnRoYXQ7XG4gIHZhciBBU19FTlRSSUVTID0gISEob3B0aW9ucyAmJiBvcHRpb25zLkFTX0VOVFJJRVMpO1xuICB2YXIgSVNfUkVDT1JEID0gISEob3B0aW9ucyAmJiBvcHRpb25zLklTX1JFQ09SRCk7XG4gIHZhciBJU19JVEVSQVRPUiA9ICEhKG9wdGlvbnMgJiYgb3B0aW9ucy5JU19JVEVSQVRPUik7XG4gIHZhciBJTlRFUlJVUFRFRCA9ICEhKG9wdGlvbnMgJiYgb3B0aW9ucy5JTlRFUlJVUFRFRCk7XG4gIHZhciBmbiA9IGJpbmQodW5ib3VuZEZ1bmN0aW9uLCB0aGF0KTtcbiAgdmFyIGl0ZXJhdG9yLCBpdGVyRm4sIGluZGV4LCBsZW5ndGgsIHJlc3VsdCwgbmV4dCwgc3RlcDtcblxuICB2YXIgc3RvcCA9IGZ1bmN0aW9uIChjb25kaXRpb24pIHtcbiAgICBpZiAoaXRlcmF0b3IpIGl0ZXJhdG9yQ2xvc2UoaXRlcmF0b3IsICdub3JtYWwnLCBjb25kaXRpb24pO1xuICAgIHJldHVybiBuZXcgUmVzdWx0KHRydWUsIGNvbmRpdGlvbik7XG4gIH07XG5cbiAgdmFyIGNhbGxGbiA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIGlmIChBU19FTlRSSUVTKSB7XG4gICAgICBhbk9iamVjdCh2YWx1ZSk7XG4gICAgICByZXR1cm4gSU5URVJSVVBURUQgPyBmbih2YWx1ZVswXSwgdmFsdWVbMV0sIHN0b3ApIDogZm4odmFsdWVbMF0sIHZhbHVlWzFdKTtcbiAgICB9IHJldHVybiBJTlRFUlJVUFRFRCA/IGZuKHZhbHVlLCBzdG9wKSA6IGZuKHZhbHVlKTtcbiAgfTtcblxuICBpZiAoSVNfUkVDT1JEKSB7XG4gICAgaXRlcmF0b3IgPSBpdGVyYWJsZS5pdGVyYXRvcjtcbiAgfSBlbHNlIGlmIChJU19JVEVSQVRPUikge1xuICAgIGl0ZXJhdG9yID0gaXRlcmFibGU7XG4gIH0gZWxzZSB7XG4gICAgaXRlckZuID0gZ2V0SXRlcmF0b3JNZXRob2QoaXRlcmFibGUpO1xuICAgIGlmICghaXRlckZuKSB0aHJvdyBuZXcgJFR5cGVFcnJvcih0cnlUb1N0cmluZyhpdGVyYWJsZSkgKyAnIGlzIG5vdCBpdGVyYWJsZScpO1xuICAgIC8vIG9wdGltaXNhdGlvbiBmb3IgYXJyYXkgaXRlcmF0b3JzXG4gICAgaWYgKGlzQXJyYXlJdGVyYXRvck1ldGhvZChpdGVyRm4pKSB7XG4gICAgICBmb3IgKGluZGV4ID0gMCwgbGVuZ3RoID0gbGVuZ3RoT2ZBcnJheUxpa2UoaXRlcmFibGUpOyBsZW5ndGggPiBpbmRleDsgaW5kZXgrKykge1xuICAgICAgICByZXN1bHQgPSBjYWxsRm4oaXRlcmFibGVbaW5kZXhdKTtcbiAgICAgICAgaWYgKHJlc3VsdCAmJiBpc1Byb3RvdHlwZU9mKFJlc3VsdFByb3RvdHlwZSwgcmVzdWx0KSkgcmV0dXJuIHJlc3VsdDtcbiAgICAgIH0gcmV0dXJuIG5ldyBSZXN1bHQoZmFsc2UpO1xuICAgIH1cbiAgICBpdGVyYXRvciA9IGdldEl0ZXJhdG9yKGl0ZXJhYmxlLCBpdGVyRm4pO1xuICB9XG5cbiAgbmV4dCA9IElTX1JFQ09SRCA/IGl0ZXJhYmxlLm5leHQgOiBpdGVyYXRvci5uZXh0O1xuICB3aGlsZSAoIShzdGVwID0gY2FsbChuZXh0LCBpdGVyYXRvcikpLmRvbmUpIHtcbiAgICB0cnkge1xuICAgICAgcmVzdWx0ID0gY2FsbEZuKHN0ZXAudmFsdWUpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBpdGVyYXRvckNsb3NlKGl0ZXJhdG9yLCAndGhyb3cnLCBlcnJvcik7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgcmVzdWx0ID09ICdvYmplY3QnICYmIHJlc3VsdCAmJiBpc1Byb3RvdHlwZU9mKFJlc3VsdFByb3RvdHlwZSwgcmVzdWx0KSkgcmV0dXJuIHJlc3VsdDtcbiAgfSByZXR1cm4gbmV3IFJlc3VsdChmYWxzZSk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIGl0ZXJhdGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXRlcmF0ZScpO1xudmFyIGFDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hLWNhbGxhYmxlJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgZ2V0SXRlcmF0b3JEaXJlY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LWl0ZXJhdG9yLWRpcmVjdCcpO1xuXG4vLyBgSXRlcmF0b3IucHJvdG90eXBlLmZvckVhY2hgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1pdGVyYXRvci5wcm90b3R5cGUuZm9yZWFjaFxuJCh7IHRhcmdldDogJ0l0ZXJhdG9yJywgcHJvdG86IHRydWUsIHJlYWw6IHRydWUgfSwge1xuICBmb3JFYWNoOiBmdW5jdGlvbiBmb3JFYWNoKGZuKSB7XG4gICAgYW5PYmplY3QodGhpcyk7XG4gICAgYUNhbGxhYmxlKGZuKTtcbiAgICB2YXIgcmVjb3JkID0gZ2V0SXRlcmF0b3JEaXJlY3QodGhpcyk7XG4gICAgdmFyIGNvdW50ZXIgPSAwO1xuICAgIGl0ZXJhdGUocmVjb3JkLCBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgIGZuKHZhbHVlLCBjb3VudGVyKyspO1xuICAgIH0sIHsgSVNfUkVDT1JEOiB0cnVlIH0pO1xuICB9XG59KTtcbiIsICIndXNlIHN0cmljdCc7XG4vLyBUT0RPOiBSZW1vdmUgZnJvbSBgY29yZS1qc0A0YFxucmVxdWlyZSgnLi4vbW9kdWxlcy9lcy5pdGVyYXRvci5mb3ItZWFjaCcpO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBjYWxsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWNhbGwnKTtcbnZhciBhQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYS1jYWxsYWJsZScpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xudmFyIGdldEl0ZXJhdG9yRGlyZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1pdGVyYXRvci1kaXJlY3QnKTtcbnZhciBjcmVhdGVJdGVyYXRvclByb3h5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2l0ZXJhdG9yLWNyZWF0ZS1wcm94eScpO1xudmFyIGNhbGxXaXRoU2FmZUl0ZXJhdGlvbkNsb3NpbmcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY2FsbC13aXRoLXNhZmUtaXRlcmF0aW9uLWNsb3NpbmcnKTtcblxudmFyIEl0ZXJhdG9yUHJveHkgPSBjcmVhdGVJdGVyYXRvclByb3h5KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGl0ZXJhdG9yID0gdGhpcy5pdGVyYXRvcjtcbiAgdmFyIHJlc3VsdCA9IGFuT2JqZWN0KGNhbGwodGhpcy5uZXh0LCBpdGVyYXRvcikpO1xuICB2YXIgZG9uZSA9IHRoaXMuZG9uZSA9ICEhcmVzdWx0LmRvbmU7XG4gIGlmICghZG9uZSkgcmV0dXJuIGNhbGxXaXRoU2FmZUl0ZXJhdGlvbkNsb3NpbmcoaXRlcmF0b3IsIHRoaXMubWFwcGVyLCBbcmVzdWx0LnZhbHVlLCB0aGlzLmNvdW50ZXIrK10sIHRydWUpO1xufSk7XG5cbi8vIGBJdGVyYXRvci5wcm90b3R5cGUubWFwYCBtZXRob2Rcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLWl0ZXJhdG9yLWhlbHBlcnNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gbWFwKG1hcHBlcikge1xuICBhbk9iamVjdCh0aGlzKTtcbiAgYUNhbGxhYmxlKG1hcHBlcik7XG4gIHJldHVybiBuZXcgSXRlcmF0b3JQcm94eShnZXRJdGVyYXRvckRpcmVjdCh0aGlzKSwge1xuICAgIG1hcHBlcjogbWFwcGVyXG4gIH0pO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBtYXAgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXRlcmF0b3ItbWFwJyk7XG52YXIgSVNfUFVSRSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1wdXJlJyk7XG5cbi8vIGBJdGVyYXRvci5wcm90b3R5cGUubWFwYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtaXRlcmF0b3IucHJvdG90eXBlLm1hcFxuJCh7IHRhcmdldDogJ0l0ZXJhdG9yJywgcHJvdG86IHRydWUsIHJlYWw6IHRydWUsIGZvcmNlZDogSVNfUFVSRSB9LCB7XG4gIG1hcDogbWFwXG59KTtcbiIsICIndXNlIHN0cmljdCc7XG4vLyBUT0RPOiBSZW1vdmUgZnJvbSBgY29yZS1qc0A0YFxucmVxdWlyZSgnLi4vbW9kdWxlcy9lcy5pdGVyYXRvci5tYXAnKTtcbiIsICJleHBvcnQgKiBmcm9tICdjaGluZXNlLWRheXMnO1xuIiwgInZhciB4ID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xudmFyIEIgPSAociwgdCwgZSkgPT4gdCBpbiByID8geChyLCB0LCB7IGVudW1lcmFibGU6ICEwLCBjb25maWd1cmFibGU6ICEwLCB3cml0YWJsZTogITAsIHZhbHVlOiBlIH0pIDogclt0XSA9IGU7XG52YXIgYyA9IChyLCB0LCBlKSA9PiBCKHIsIHR5cGVvZiB0ICE9IFwic3ltYm9sXCIgPyB0ICsgXCJcIiA6IHQsIGUpO1xuY29uc3QgZCA9IGNsYXNzIGQge1xuICBjb25zdHJ1Y3Rvcih0KSB7XG4gICAgYyh0aGlzLCBcIl9kYXRlXCIpO1xuICAgIHQgaW5zdGFuY2VvZiBkID8gdGhpcy5fZGF0ZSA9IG5ldyBEYXRlKHQudG9EYXRlKCkpIDogdCBpbnN0YW5jZW9mIERhdGUgPyB0aGlzLl9kYXRlID0gbmV3IERhdGUodCkgOiB0eXBlb2YgdCA9PSBcInN0cmluZ1wiIHx8IHR5cGVvZiB0ID09IFwibnVtYmVyXCIgPyAodGhpcy5fZGF0ZSA9IG5ldyBEYXRlKHQpLCB0eXBlb2YgdCA9PSBcInN0cmluZ1wiICYmIGlzTmFOKHRoaXMuX2RhdGUuZ2V0VGltZSgpKSAmJiAodGhpcy5fZGF0ZSA9IG5ldyBEYXRlKHQucmVwbGFjZSgvLS9nLCBcIi9cIikpKSkgOiB0aGlzLl9kYXRlID0gLyogQF9fUFVSRV9fICovIG5ldyBEYXRlKCk7XG4gIH1cbiAgdG9EYXRlKCkge1xuICAgIHJldHVybiB0aGlzLl9kYXRlO1xuICB9XG4gIGlzVmFsaWQoKSB7XG4gICAgcmV0dXJuICFpc05hTih0aGlzLl9kYXRlLmdldFRpbWUoKSk7XG4gIH1cbiAgZGlmZih0LCBlID0gXCJkYXlcIikge1xuICAgIGNvbnN0IGEgPSBuZXcgZCh0KS50b0RhdGUoKSwgcyA9IHRoaXMuX2RhdGUuZ2V0VGltZSgpIC0gYS5nZXRUaW1lKCk7XG4gICAgc3dpdGNoIChlKSB7XG4gICAgICBjYXNlIFwieWVhclwiOlxuICAgICAgICByZXR1cm4gdGhpcy5fZGF0ZS5nZXRGdWxsWWVhcigpIC0gYS5nZXRGdWxsWWVhcigpO1xuICAgICAgY2FzZSBcIm1vbnRoXCI6XG4gICAgICAgIHJldHVybiAodGhpcy5fZGF0ZS5nZXRGdWxsWWVhcigpIC0gYS5nZXRGdWxsWWVhcigpKSAqIDEyICsgKHRoaXMuX2RhdGUuZ2V0TW9udGgoKSAtIGEuZ2V0TW9udGgoKSk7XG4gICAgICBjYXNlIFwiZGF5XCI6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihzIC8gKDFlMyAqIDYwICogNjAgKiAyNCkpO1xuICAgIH1cbiAgfVxuICBzdGFydE9mKHQpIHtcbiAgICBjb25zdCBlID0gbmV3IERhdGUodGhpcy5fZGF0ZSk7XG4gICAgc3dpdGNoICh0KSB7XG4gICAgICBjYXNlIFwieWVhclwiOlxuICAgICAgICBlLnNldE1vbnRoKDApLCBlLnNldERhdGUoMSksIGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcIm1vbnRoXCI6XG4gICAgICAgIGUuc2V0RGF0ZSgxKSwgZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiZGF5XCI6XG4gICAgICAgIGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IGQoZSk7XG4gIH1cbiAgZW5kT2YodCkge1xuICAgIGNvbnN0IGUgPSBuZXcgRGF0ZSh0aGlzLl9kYXRlKTtcbiAgICBzd2l0Y2ggKHQpIHtcbiAgICAgIGNhc2UgXCJ5ZWFyXCI6XG4gICAgICAgIGUuc2V0TW9udGgoMTEpLCBlLnNldERhdGUoMzEpLCBlLnNldEhvdXJzKDIzLCA1OSwgNTksIDk5OSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcIm1vbnRoXCI6XG4gICAgICAgIGUuc2V0RGF0ZShuZXcgRGF0ZShlLmdldEZ1bGxZZWFyKCksIGUuZ2V0TW9udGgoKSArIDEsIDApLmdldERhdGUoKSksIGUuc2V0SG91cnMoMjMsIDU5LCA1OSwgOTk5KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiZGF5XCI6XG4gICAgICAgIGUuc2V0SG91cnMoMjMsIDU5LCA1OSwgOTk5KTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHJldHVybiBuZXcgZChlKTtcbiAgfVxuICBhZGQodCwgZSkge1xuICAgIGNvbnN0IGEgPSBuZXcgRGF0ZSh0aGlzLl9kYXRlKTtcbiAgICBzd2l0Y2ggKGUpIHtcbiAgICAgIGNhc2UgXCJ5ZWFyXCI6XG4gICAgICAgIGEuc2V0RnVsbFllYXIoYS5nZXRGdWxsWWVhcigpICsgdCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcIm1vbnRoXCI6XG4gICAgICAgIGEuc2V0TW9udGgoYS5nZXRNb250aCgpICsgdCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcImRheVwiOlxuICAgICAgICBhLnNldERhdGUoYS5nZXREYXRlKCkgKyB0KTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHJldHVybiBuZXcgZChhKTtcbiAgfVxuICBzdWJ0cmFjdCh0LCBlKSB7XG4gICAgcmV0dXJuIHRoaXMuYWRkKC10LCBlKTtcbiAgfVxuICBmb3JtYXQodCkge1xuICAgIGNvbnN0IGUgPSB7XG4gICAgICBZWVlZOiB0aGlzLl9kYXRlLmdldEZ1bGxZZWFyKCksXG4gICAgICBNTTogKHRoaXMuX2RhdGUuZ2V0TW9udGgoKSArIDEpLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgXCIwXCIpLFxuICAgICAgREQ6IHRoaXMuX2RhdGUuZ2V0RGF0ZSgpLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgXCIwXCIpLFxuICAgICAgSEg6IHRoaXMuX2RhdGUuZ2V0SG91cnMoKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsIFwiMFwiKSxcbiAgICAgIG1tOiB0aGlzLl9kYXRlLmdldE1pbnV0ZXMoKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsIFwiMFwiKSxcbiAgICAgIHNzOiB0aGlzLl9kYXRlLmdldFNlY29uZHMoKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsIFwiMFwiKSxcbiAgICAgIGRkZGQ6IGQuZGF5c09mV2Vla1t0aGlzLl9kYXRlLmdldERheSgpXVxuICAgIH07XG4gICAgcmV0dXJuIHQucmVwbGFjZSgvWVlZWXxNTXxERHxISHxtbXxzc3xkZGRkL2csIChhKSA9PiBlW2FdLnRvU3RyaW5nKCkpO1xuICB9XG4gIHllYXIodCkge1xuICAgIGlmICh0ID09PSB2b2lkIDApIHJldHVybiB0aGlzLl9kYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgY29uc3QgZSA9IG5ldyBEYXRlKHRoaXMuX2RhdGUpO1xuICAgIHJldHVybiBlLnNldEZ1bGxZZWFyKHQpLCBuZXcgZChlKTtcbiAgfVxuICBtb250aCh0KSB7XG4gICAgaWYgKHQgPT09IHZvaWQgMCkgcmV0dXJuIHRoaXMuX2RhdGUuZ2V0TW9udGgoKTtcbiAgICBjb25zdCBlID0gbmV3IERhdGUodGhpcy5fZGF0ZSk7XG4gICAgcmV0dXJuIGUuc2V0TW9udGgodCksIG5ldyBkKGUpO1xuICB9XG4gIGRhdGUodCkge1xuICAgIGlmICh0ID09PSB2b2lkIDApIHJldHVybiB0aGlzLl9kYXRlLmdldERhdGUoKTtcbiAgICBjb25zdCBlID0gbmV3IERhdGUodGhpcy5fZGF0ZSk7XG4gICAgcmV0dXJuIGUuc2V0RGF0ZSh0KSwgbmV3IGQoZSk7XG4gIH1cbiAgZGF5KHQpIHtcbiAgICBpZiAodCA9PT0gdm9pZCAwKVxuICAgICAgcmV0dXJuIHRoaXMuX2RhdGUuZ2V0RGF5KCk7XG4gICAge1xuICAgICAgY29uc3QgZSA9IHRoaXMuX2RhdGUuZ2V0RGF5KCksIGEgPSB0IC0gZSwgcyA9IG5ldyBEYXRlKHRoaXMuX2RhdGUpO1xuICAgICAgcmV0dXJuIHMuc2V0RGF0ZSh0aGlzLl9kYXRlLmdldERhdGUoKSArIGEpLCBuZXcgZChzKTtcbiAgICB9XG4gIH1cbiAgaXNCZWZvcmUodCkge1xuICAgIGNvbnN0IGUgPSBuZXcgZCh0KS50b0RhdGUoKTtcbiAgICByZXR1cm4gdGhpcy5fZGF0ZS5nZXRUaW1lKCkgPCBlLmdldFRpbWUoKTtcbiAgfVxuICBpc0FmdGVyKHQpIHtcbiAgICBjb25zdCBlID0gbmV3IGQodCkudG9EYXRlKCk7XG4gICAgcmV0dXJuIHRoaXMuX2RhdGUuZ2V0VGltZSgpID4gZS5nZXRUaW1lKCk7XG4gIH1cbiAgaXNTYW1lKHQsIGUgPSBcImRheVwiKSB7XG4gICAgY29uc3QgYSA9IG5ldyBkKHQpLnRvRGF0ZSgpO1xuICAgIHN3aXRjaCAoZSkge1xuICAgICAgY2FzZSBcInllYXJcIjpcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGUuZ2V0RnVsbFllYXIoKSA9PT0gYS5nZXRGdWxsWWVhcigpO1xuICAgICAgY2FzZSBcIm1vbnRoXCI6XG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRlLmdldEZ1bGxZZWFyKCkgPT09IGEuZ2V0RnVsbFllYXIoKSAmJiB0aGlzLl9kYXRlLmdldE1vbnRoKCkgPT09IGEuZ2V0TW9udGgoKTtcbiAgICAgIGNhc2UgXCJkYXlcIjpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRlLmdldEZ1bGxZZWFyKCkgPT09IGEuZ2V0RnVsbFllYXIoKSAmJiB0aGlzLl9kYXRlLmdldE1vbnRoKCkgPT09IGEuZ2V0TW9udGgoKSAmJiB0aGlzLl9kYXRlLmdldERhdGUoKSA9PT0gYS5nZXREYXRlKCk7XG4gICAgfVxuICB9XG4gIGlzQmV0d2Vlbih0LCBlLCBhKSB7XG4gICAgY29uc3QgcyA9IG5ldyBkKHQpLnN0YXJ0T2YoYSkudG9EYXRlKCksIGkgPSBuZXcgZChlKS5lbmRPZihhKS50b0RhdGUoKSwgbyA9IHRoaXMudG9EYXRlKCk7XG4gICAgcmV0dXJuIG8gPj0gcyAmJiBvIDw9IGk7XG4gIH1cbn07XG5jKGQsIFwiZGF5c09mV2Vla1wiLCBbXG4gIFwiU3VuZGF5XCIsXG4gIFwiTW9uZGF5XCIsXG4gIFwiVHVlc2RheVwiLFxuICBcIldlZG5lc2RheVwiLFxuICBcIlRodXJzZGF5XCIsXG4gIFwiRnJpZGF5XCIsXG4gIFwiU2F0dXJkYXlcIlxuXSk7XG5sZXQgTSA9IGQ7XG5jb25zdCBoID0gKHIpID0+IG5ldyBNKHIpLCB3ID0gKHIpID0+IGgocikuc3RhcnRPZihcImRheVwiKSwgRCA9IChyLCB0KSA9PiB7XG4gIHIgPSB3KHIpLCB0ID0gdyh0KTtcbiAgY29uc3QgZSA9IHQuZGlmZihyLCBcImRheVwiKTtcbiAgcmV0dXJuIEFycmF5LmZyb20oeyBsZW5ndGg6IGUgKyAxIH0sIChhLCBzKSA9PiByLmFkZChzLCBcImRheVwiKSk7XG59LCBBID0ge1xuICAvLyAxOTk5IOWFg+aXpiAxIOWkqeOAgeaYpeiKguOAgeWKs+WKqOiKguOAgeWbveW6huiKguaUvuWBhyAz5aSpXG4gIDE5OTk6IHtcbiAgICBcIk5ldyBZZWFyJ3MgRGF5LOWFg+aXplwiOiAxLFxuICAgIFwiU3ByaW5nIEZlc3RpdmFsLOaYpeiKglwiOiAzLFxuICAgIFwiTGFib3VyIERheSzlirPliqjoioJcIjogMyxcbiAgICBcIk5hdGlvbmFsIERheSzlm73luoboioJcIjogM1xuICB9LFxuICAvLyAyMDA4IOWKs+WKqOiKguaUueS4uiAxIOWkqe+8jOWinuWKoOa4heaYjuOAgeerr+WNiOOAgeS4reeni+WQhCAxIOWkqVxuICAyMDA4OiB7XG4gICAgXCJUb21iLXN3ZWVwaW5nIERheSzmuIXmmI5cIjogMSxcbiAgICBcIkxhYm91ciBEYXks5Yqz5Yqo6IqCXCI6IDEsXG4gICAgXCJEcmFnb24gQm9hdCBGZXN0aXZhbCznq6/ljYhcIjogMSxcbiAgICBcIk1pZC1hdXR1bW4gRmVzdGl2YWws5Lit56eLXCI6IDFcbiAgfSxcbiAgLy8gMjAxNCDmmKXoioLliZTpmaTpmaTlpJXvvIzmlLnkuLrliJ3kuIDjgIHkuozjgIHkuInvvIzkvp3ml6cgMyDlpKlcbiAgLy8gMjAxNSDlop7liqAg5Lit5Zu95Lq65rCR5oqX5pel5oiY5LqJ5pqo5LiW55WM5Y+N5rOV6KW/5pav5oiY5LqJ6IOc5YipNzDlkajlubTnuqrlv7Xml6UgMSDlpKlcbiAgMjAxNToge1xuICAgIFwiQW50aS1GYXNjaXN0IDcwdGggRGF5LOS4reWbveS6uuawkeaKl+aXpeaImOS6ieaaqOS4lueVjOWPjeazleilv+aWr+aImOS6ieiDnOWIqTcw5ZGo5bm057qq5b+15pelXCI6IDFcbiAgfSxcbiAgLy8gMjAyNSDmmKXoioLlkozlirPliqjoioIg5ZCE5aKe5YqgIDEg5aSpXG4gIDIwMjU6IHtcbiAgICBcIlNwcmluZyBGZXN0aXZhbCzmmKXoioJcIjogNCxcbiAgICBcIkxhYm91ciBEYXks5Yqz5Yqo6IqCXCI6IDJcbiAgfVxufTtcbmNsYXNzIEMge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjKHRoaXMsIFwiZGF5RGV0YWlsc1wiLCB7fSk7XG4gICAgYyh0aGlzLCBcImhvbGlkYXlzXCIsIHt9KTtcbiAgICBjKHRoaXMsIFwid29ya2RheXNcIiwge30pO1xuICAgIGModGhpcywgXCJpbkxpZXVEYXlzXCIsIHt9KTtcbiAgfVxuICAvKiogeWVhciBhdCAqL1xuICB5KHQpIHtcbiAgICByZXR1cm4gdGhpcy5kYXlEZXRhaWxzLnllYXIgPSB0LCB0aGlzO1xuICB9XG4gIC8qKiDmn6Xor6Lmn5DlubQg6IqC5YGH5pel5aSp5pWwICovXG4gIGdldEhvbGlkYXlEYXlzKHQsIGUpIHtcbiAgICBsZXQgYSA9IDA7XG4gICAgZm9yIChjb25zdCBbcywgaV0gb2YgT2JqZWN0LmVudHJpZXMoQSkpIHtcbiAgICAgIGlmIChwYXJzZUludChzKSA+IHQpIGJyZWFrO1xuICAgICAgaVtlXSAhPT0gdm9pZCAwICYmIChhID0gaVtlXSk7XG4gICAgfVxuICAgIHJldHVybiBhO1xuICB9XG4gIG1hcmsodCkge1xuICAgIHJldHVybiB0aGlzLmRheURldGFpbHMuaG9saWRheSA9IHQsIHRoaXM7XG4gIH1cbiAgc2F2ZSh0LCBlLCBhKSB7XG4gICAgaWYgKCF0aGlzLmRheURldGFpbHMueWVhcilcbiAgICAgIHRocm93IG5ldyBFcnJvcihcInNob3VsZCBzZXQgeWVhciBiZWZvcmUgc2F2aW5nIGhvbGlkYXlcIik7XG4gICAgaWYgKCF0aGlzLmRheURldGFpbHMuaG9saWRheSlcbiAgICAgIHRocm93IG5ldyBFcnJvcihcInNob3VsZCBzZXQgaG9saWRheSBiZWZvcmUgc2F2aW5nIGhvbGlkYXlcIik7XG4gICAgdGhpcy5kYXlEZXRhaWxzLm1vbnRoID0gdCwgdGhpcy5kYXlEZXRhaWxzLmRheSA9IGUsIHRoaXMuZGF5RGV0YWlscy5kYXlUeXBlID0gYTtcbiAgICBjb25zdCBzID0gaChgJHt0aGlzLmRheURldGFpbHMueWVhcn0tJHt0fS0ke2V9YCkuZm9ybWF0KFwiWVlZWS1NTS1ERFwiKSwgaSA9IHRoaXMuZ2V0SG9saWRheURheXModGhpcy5kYXlEZXRhaWxzLnllYXIsIHRoaXMuZGF5RGV0YWlscy5ob2xpZGF5KSwgbyA9IGAke3RoaXMuZGF5RGV0YWlscy5ob2xpZGF5fSwke2l9YDtcbiAgICByZXR1cm4gYSA9PT0gMiA/IHRoaXMuaG9saWRheXNbc10gPSBvIDogYSA9PT0gMSA/IHRoaXMud29ya2RheXNbc10gPSBvIDogYSA9PT0gMyAmJiAodGhpcy5pbkxpZXVEYXlzW3NdID0gbyksIHRoaXM7XG4gIH1cbiAgdG8odCwgZSkge1xuICAgIGlmICghdGhpcy5kYXlEZXRhaWxzLmhvbGlkYXkgfHwgIXRoaXMuZGF5RGV0YWlscy55ZWFyIHx8ICF0aGlzLmRheURldGFpbHMubW9udGggfHwgIXRoaXMuZGF5RGV0YWlscy5kYXkpXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJzaG91bGQgc2V0IHllYXIvbW9udGgvZGF5IGJlZm9yZSBzYXZpbmcgaG9saWRheSByYW5nZVwiKTtcbiAgICBjb25zdCBhID0gaChcbiAgICAgIGAke3RoaXMuZGF5RGV0YWlscy55ZWFyfS0ke3RoaXMuZGF5RGV0YWlscy5tb250aH0tJHt0aGlzLmRheURldGFpbHMuZGF5fWBcbiAgICApLCBzID0gaChgJHt0aGlzLmRheURldGFpbHMueWVhcn0tJHt0fS0ke2V9YCk7XG4gICAgaWYgKHMuaXNCZWZvcmUoYSkgfHwgcy5pc1NhbWUoYSkpXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJlbmQgZGF0ZSBzaG91bGQgYmUgYWZ0ZXIgc3RhcnQgZGF0ZVwiKTtcbiAgICBjb25zdCBpID0gdGhpcy5nZXRIb2xpZGF5RGF5cyh0aGlzLmRheURldGFpbHMueWVhciwgdGhpcy5kYXlEZXRhaWxzLmhvbGlkYXkpLCBvID0gYCR7dGhpcy5kYXlEZXRhaWxzLmhvbGlkYXl9LCR7aX1gLCBsID0gcy5kaWZmKGEsIFwiZGF5XCIpO1xuICAgIGZvciAobGV0IG4gPSAxOyBuIDw9IGw7IG4rKykge1xuICAgICAgY29uc3QgXyA9IGEuYWRkKG4sIFwiZGF5XCIpLmZvcm1hdChcIllZWVktTU0tRERcIik7XG4gICAgICB0aGlzLmRheURldGFpbHMuZGF5VHlwZSA9PT0gMiA/IHRoaXMuaG9saWRheXNbX10gPSBvIDogdGhpcy5kYXlEZXRhaWxzLmRheVR5cGUgPT09IDEgPyB0aGlzLndvcmtkYXlzW19dID0gbyA6IHRoaXMuZGF5RGV0YWlscy5kYXlUeXBlID09PSAzICYmICh0aGlzLmluTGlldURheXNbX10gPSBvKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgLyoqIHdvcmsgZGF5ICovXG4gIHcodCwgZSkge1xuICAgIHJldHVybiB0aGlzLnNhdmUoXG4gICAgICB0LFxuICAgICAgZSxcbiAgICAgIDFcbiAgICAgIC8qIFdvcmtkYXkgKi9cbiAgICApO1xuICB9XG4gIC8qKiByZXN0ICovXG4gIHIodCwgZSkge1xuICAgIHJldHVybiB0aGlzLnNhdmUoXG4gICAgICB0LFxuICAgICAgZSxcbiAgICAgIDJcbiAgICAgIC8qIEhvbGlkYXkgKi9cbiAgICApO1xuICB9XG4gIC8qKiBpbi1saWV1ICovXG4gIGkodCwgZSkge1xuICAgIHJldHVybiB0aGlzLnNhdmUoXG4gICAgICB0LFxuICAgICAgZSxcbiAgICAgIDNcbiAgICAgIC8qIEluTGlldSAqL1xuICAgICk7XG4gIH1cbiAgLyoqIE5ldyBZZWFyJ3MgRGF5IOWFg+aXpiAqL1xuICBueSgpIHtcbiAgICByZXR1cm4gdGhpcy5tYXJrKFxuICAgICAgXCJOZXcgWWVhcidzIERheSzlhYPml6ZcIlxuICAgICAgLyogTlkgKi9cbiAgICApO1xuICB9XG4gIC8qKiBTcHJpbmcgRmVzdGl2YWwg5pil6IqCICovXG4gIHMoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFyayhcbiAgICAgIFwiU3ByaW5nIEZlc3RpdmFsLOaYpeiKglwiXG4gICAgICAvKiBTICovXG4gICAgKTtcbiAgfVxuICAvKiogVG9tYi1zd2VlcGluZyBEYXkg5riF5piOICovXG4gIHQoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFyayhcbiAgICAgIFwiVG9tYi1zd2VlcGluZyBEYXks5riF5piOXCJcbiAgICAgIC8qIFQgKi9cbiAgICApO1xuICB9XG4gIC8qKiBMYWJvdXIgRGF5IOS6lOS4gCAqL1xuICBsKCkge1xuICAgIHJldHVybiB0aGlzLm1hcmsoXG4gICAgICBcIkxhYm91ciBEYXks5Yqz5Yqo6IqCXCJcbiAgICAgIC8qIEwgKi9cbiAgICApO1xuICB9XG4gIC8qKiBEcmFnb24gQm9hdCBGZXN0aXZhbCDnq6/ljYggKi9cbiAgZCgpIHtcbiAgICByZXR1cm4gdGhpcy5tYXJrKFxuICAgICAgXCJEcmFnb24gQm9hdCBGZXN0aXZhbCznq6/ljYhcIlxuICAgICAgLyogRCAqL1xuICAgICk7XG4gIH1cbiAgLyoqIE5hdGlvbmFsIERheSDlm73luoboioIgKi9cbiAgbigpIHtcbiAgICByZXR1cm4gdGhpcy5tYXJrKFxuICAgICAgXCJOYXRpb25hbCBEYXks5Zu95bqG6IqCXCJcbiAgICAgIC8qIE4gKi9cbiAgICApO1xuICB9XG4gIC8qKiBNaWQtYXV0dW1uIEZlc3RpdmFsIOS4reeniyAqL1xuICBtKCkge1xuICAgIHJldHVybiB0aGlzLm1hcmsoXG4gICAgICBcIk1pZC1hdXR1bW4gRmVzdGl2YWws5Lit56eLXCJcbiAgICAgIC8qIE0gKi9cbiAgICApO1xuICB9XG4gIC8qKiBBbnRpLUZhc2Npc3QgNzB0aCBEYXkg5Lit5Zu95Lq65rCR5oqX5pel5oiY5LqJ5pqo5LiW55WM5Y+N5rOV6KW/5pav5oiY5LqJ6IOc5YipNzDlkajlubTnuqrlv7Xml6UgKi9cbiAgYSgpIHtcbiAgICByZXR1cm4gdGhpcy5tYXJrKFxuICAgICAgXCJBbnRpLUZhc2Npc3QgNzB0aCBEYXks5Lit5Zu95Lq65rCR5oqX5pel5oiY5LqJ5pqo5LiW55WM5Y+N5rOV6KW/5pav5oiY5LqJ6IOc5YipNzDlkajlubTnuqrlv7Xml6VcIlxuICAgICAgLyogQSAqL1xuICAgICk7XG4gIH1cbn1cbmNvbnN0IGogPSAoKSA9PiB7XG4gIGNvbnN0IHIgPSBuZXcgQygpO1xuICByZXR1cm4gci55KDIwMjUpLm55KCkucigxLCAxKS5zKCkucigxLCAyOCkudG8oMiwgNCkudygxLCAyNikudygyLCA4KS5pKDIsIDMpLmkoMiwgNCkudCgpLnIoNCwgNCkudG8oNCwgNikubCgpLnIoNSwgMSkudG8oNSwgNSkudyg0LCAyNykuaSg1LCA1KS5kKCkucig1LCAzMSkudG8oNiwgMikubigpLnIoMTAsIDEpLnRvKDEwLCA4KS53KDksIDI4KS53KDEwLCAxMSkuaSgxMCwgNykuaSgxMCwgOCkubSgpLnIoMTAsIDYpLCByLnkoMjAyNCkubnkoKS5yKDEsIDEpLnMoKS5yKDIsIDEwKS50bygyLCAxNykudygyLCA0KS53KDIsIDE4KS5pKDIsIDE1KS50bygyLCAxNikudCgpLnIoNCwgNCkudG8oNCwgNikudyg0LCA3KS5pKDQsIDUpLmwoKS5yKDUsIDEpLnRvKDUsIDUpLncoNCwgMjgpLncoNSwgMTEpLmkoNSwgMikudG8oNSwgMykuZCgpLnIoNiwgMTApLm0oKS5yKDksIDE1KS50byg5LCAxNykudyg5LCAxNCkuaSg5LCAxNikubigpLnIoMTAsIDEpLnRvKDEwLCA3KS53KDksIDI5KS53KDEwLCAxMikuaSgxMCwgNCkuaSgxMCwgNyksIHIueSgyMDIzKS5ueSgpLnIoMSwgMSkudG8oMSwgMikucygpLnIoMSwgMjEpLnRvKDEsIDI3KS53KDEsIDI4KS50bygxLCAyOSkuaSgxLCAyNikudG8oMSwgMjcpLnQoKS5yKDQsIDUpLmwoKS5yKDQsIDI5KS50byg1LCAzKS53KDQsIDIzKS53KDUsIDYpLmkoNSwgMikudG8oNSwgMykuZCgpLnIoNiwgMjIpLnRvKDYsIDI0KS53KDYsIDI1KS5pKDYsIDIzKS5tKCkucig5LCAyOSkubigpLnIoOSwgMzApLnRvKDEwLCA2KS53KDEwLCA3KS50bygxMCwgOCkuaSgxMCwgNSkudG8oMTAsIDYpLCByLnkoMjAyMikubnkoKS5yKDEsIDEpLnRvKDEsIDMpLnMoKS5yKDEsIDMxKS50bygyLCA2KS53KDEsIDI5KS53KDEsIDMwKS5pKDIsIDMpLnRvKDIsIDQpLnQoKS5yKDQsIDMpLnRvKDQsIDUpLncoNCwgMikuaSg0LCA0KS5sKCkucig0LCAzMCkudG8oNSwgNCkudyg0LCAyNCkudyg1LCA3KS5pKDUsIDMpLnRvKDUsIDQpLmQoKS5yKDYsIDMpLnRvKDYsIDUpLm0oKS5yKDksIDEwKS50byg5LCAxMikubigpLnIoMTAsIDEpLnRvKDEwLCA3KS53KDEwLCA4KS53KDEwLCA5KS5pKDEwLCA2KS50bygxMCwgNykubnkoKS5yKDEyLCAzMSksIHIueSgyMDIxKS5ueSgpLnIoMSwgMSkudG8oMSwgMykucygpLnIoMiwgMTEpLnRvKDIsIDE3KS53KDIsIDcpLncoMiwgMjApLmkoMiwgMTYpLnRvKDIsIDE3KS50KCkucig0LCAzKS50byg0LCA1KS5sKCkucig1LCAxKS50byg1LCA1KS53KDQsIDI1KS53KDUsIDgpLmkoNSwgNCkudG8oNSwgNSkuZCgpLnIoNiwgMTIpLnRvKDYsIDE0KS5tKCkucig5LCAxOSkudG8oOSwgMjEpLncoOSwgMTgpLmkoOSwgMjApLm4oKS5yKDEwLCAxKS50bygxMCwgNykudyg5LCAyNikudygxMCwgOSkuaSgxMCwgNikudG8oMTAsIDcpLCByLnkoMjAyMCkubnkoKS5yKDEsIDEpLnMoKS5yKDEsIDI0KS50bygyLCAyKS53KDEsIDE5KS5pKDEsIDI5KS50KCkucig0LCA0KS50byg0LCA2KS5sKCkucig1LCAxKS50byg1LCA1KS53KDQsIDI2KS53KDUsIDkpLmkoNSwgNCkudG8oNSwgNSkuZCgpLnIoNiwgMjUpLnRvKDYsIDI3KS53KDYsIDI4KS5pKDYsIDI2KS5uKCkucigxMCwgMSkudG8oMTAsIDgpLncoOSwgMjcpLncoMTAsIDEwKS5pKDEwLCA3KS50bygxMCwgOCksIHIueSgyMDE5KS5ueSgpLnIoMSwgMSkucygpLnIoMiwgNCkudG8oMiwgMTApLncoMiwgMikudG8oMiwgMykuaSgyLCA0KS5pKDIsIDgpLnQoKS5yKDQsIDUpLnRvKDQsIDcpLmwoKS5yKDUsIDEpLnRvKDUsIDQpLncoNCwgMjgpLncoNSwgNSkuaSg1LCAyKS5pKDUsIDMpLmQoKS5yKDYsIDcpLnRvKDYsIDkpLm0oKS5yKDksIDEzKS50byg5LCAxNSkubigpLnIoMTAsIDEpLnRvKDEwLCA3KS53KDksIDI5KS53KDEwLCAxMikuaSgxMCwgNCkuaSgxMCwgNyksIHIueSgyMDE4KS5ueSgpLnIoMSwgMSkucygpLnIoMiwgMTUpLnRvKDIsIDIxKS53KDIsIDExKS53KDIsIDI0KS5pKDIsIDE5KS50bygyLCAyMSkudCgpLnIoNCwgNSkudG8oNCwgNykudyg0LCA4KS5pKDQsIDYpLmwoKS5yKDQsIDI5KS50byg1LCAxKS53KDQsIDI4KS5pKDQsIDMwKS5kKCkucig2LCAxOCkubigpLnIoMTAsIDEpLnRvKDEwLCA3KS53KDksIDI5KS50byg5LCAzMCkuaSgxMCwgNCkudG8oMTAsIDUpLm0oKS5yKDksIDI0KS5ueSgpLnIoMTIsIDMwKS50bygxMiwgMzEpLncoMTIsIDI5KS5pKDEyLCAzMSksIHIueSgyMDE3KS5ueSgpLnIoMSwgMSkudG8oMSwgMikucygpLnIoMSwgMjcpLnRvKDIsIDIpLncoMSwgMjIpLncoMiwgNCkuaSgyLCAxKS50bygyLCAyKS50KCkucig0LCAyKS50byg0LCA0KS53KDQsIDEpLmkoNCwgMykubCgpLnIoNSwgMSkuZCgpLnIoNSwgMjgpLnRvKDUsIDMwKS53KDUsIDI3KS5pKDUsIDI5KS5uKCkucigxMCwgMSkudG8oMTAsIDgpLncoOSwgMzApLmkoMTAsIDYpLm0oKS5yKDEwLCA0KSwgci55KDIwMTYpLm55KCkucigxLCAxKS5zKCkucigyLCA3KS50bygyLCAxMykudygyLCA2KS53KDIsIDE0KS5pKDIsIDExKS50bygyLCAxMikudCgpLnIoNCwgNCkubCgpLnIoNSwgMSkudG8oNSwgMikuZCgpLnIoNiwgOSkudG8oNiwgMTEpLncoNiwgMTIpLmkoNiwgMTApLm0oKS5yKDksIDE1KS50byg5LCAxNykudyg5LCAxOCkuaSg5LCAxNikubigpLnIoMTAsIDEpLnRvKDEwLCA3KS53KDEwLCA4KS50bygxMCwgOSkuaSgxMCwgNikudG8oMTAsIDcpLCByLnkoMjAxNSkubnkoKS5yKDEsIDEpLnRvKDEsIDMpLncoMSwgNCkuaSgxLCAyKS5zKCkucigyLCAxOCkudG8oMiwgMjQpLncoMiwgMTUpLncoMiwgMjgpLmkoMiwgMjMpLnRvKDIsIDI0KS50KCkucig0LCA1KS50byg0LCA2KS5sKCkucig1LCAxKS5kKCkucig2LCAyMCkucig2LCAyMikubSgpLnIoOSwgMjcpLm4oKS5yKDEwLCAxKS50bygxMCwgNykudygxMCwgMTApLmkoMTAsIDcpLmEoKS5yKDksIDMpLnRvKDksIDQpLncoOSwgNikuaSg5LCA0KSwgci55KDIwMTQpLm55KCkucigxLCAxKS5zKCkucigxLCAzMSkudG8oMiwgNikudygxLCAyNikudygyLCA4KS5pKDIsIDUpLnRvKDIsIDYpLnQoKS5yKDQsIDUpLnRvKDQsIDcpLmwoKS5yKDUsIDEpLnRvKDUsIDMpLncoNSwgNCkuaSg1LCAyKS5kKCkucig2LCAyKS5tKCkucig5LCA4KS5uKCkucigxMCwgMSkudG8oMTAsIDcpLncoOSwgMjgpLncoMTAsIDExKS5pKDEwLCA2KS50bygxMCwgNyksIHIueSgyMDEzKS5ueSgpLnIoMSwgMSkudG8oMSwgMykudygxLCA1KS50bygxLCA2KS5pKDEsIDIpLnRvKDEsIDMpLnMoKS5yKDIsIDkpLnRvKDIsIDE1KS53KDIsIDE2KS50bygyLCAxNykuaSgyLCAxNCkudG8oMiwgMTUpLnQoKS5yKDQsIDQpLnRvKDQsIDYpLncoNCwgNykuaSg0LCA1KS5sKCkucig0LCAyOSkudG8oNSwgMSkudyg0LCAyNykudG8oNCwgMjgpLmkoNCwgMjkpLnRvKDQsIDMwKS5kKCkucig2LCAxMCkudG8oNiwgMTIpLncoNiwgOCkudG8oNiwgOSkuaSg2LCAxMCkudG8oNiwgMTEpLm0oKS5yKDksIDE5KS50byg5LCAyMSkudyg5LCAyMikuaSg5LCAyMCkubigpLnIoMTAsIDEpLnRvKDEwLCA3KS53KDksIDI5KS53KDEwLCAxMikuaSgxMCwgNCkuaSgxMCwgNyksIHIueSgyMDEyKS5ueSgpLnIoMSwgMSkudG8oMSwgMykuaSgxLCAzKS5zKCkucigxLCAyMikudG8oMSwgMjgpLncoMSwgMjEpLncoMSwgMjkpLmkoMSwgMjYpLnRvKDEsIDI3KS50KCkucig0LCAyKS50byg0LCA0KS53KDMsIDMxKS53KDQsIDEpLmkoNCwgMikudG8oNCwgMykubCgpLnIoNCwgMjkpLnRvKDUsIDEpLncoNCwgMjgpLmkoNCwgMzApLmQoKS5yKDYsIDIyKS5yKDYsIDI0KS5tKCkucig5LCAzMCkubigpLnIoMTAsIDEpLnRvKDEwLCA3KS53KDksIDI5KS5pKDEwLCA1KSwgci55KDIwMTEpLm55KCkucigxLCAxKS50bygxLCAzKS5zKCkucigyLCAyKS50bygyLCA4KS53KDEsIDMwKS53KDIsIDEyKS5pKDIsIDcpLnRvKDIsIDgpLnQoKS5yKDQsIDMpLnRvKDQsIDUpLncoNCwgMikuaSg0LCA0KS5sKCkucig0LCAzMCkudG8oNSwgMikuZCgpLnIoNiwgNCkucig2LCA2KS5tKCkucig5LCAxMCkudG8oOSwgMTIpLm4oKS5yKDEwLCAxKS50bygxMCwgNykudygxMCwgOCkudG8oMTAsIDkpLmkoMTAsIDYpLnRvKDEwLCA3KS5ueSgpLncoMTIsIDMxKSwgci55KDIwMTApLm55KCkucigxLCAxKS50bygxLCAzKS5zKCkucigyLCAxMykudG8oMiwgMTkpLncoMiwgMjApLnRvKDIsIDIxKS5pKDIsIDE4KS50bygyLCAxOSkudCgpLnIoNCwgMykudG8oNCwgNSkubCgpLnIoNSwgMSkudG8oNSwgMykuZCgpLnIoNiwgMTQpLnRvKDYsIDE2KS53KDYsIDEyKS50byg2LCAxMykuaSg2LCAxNCkudG8oNiwgMTUpLm0oKS5yKDksIDIyKS50byg5LCAyNCkudyg5LCAxOSkudyg5LCAyNSkuaSg5LCAyMykudG8oOSwgMjQpLm4oKS5yKDEwLCAxKS50bygxMCwgNykudyg5LCAyNikudygxMCwgOSkuaSgxMCwgNikudG8oMTAsIDcpLCByLnkoMjAwOSkubnkoKS5yKDEsIDEpLnRvKDEsIDMpLncoMSwgNCkuaSgxLCAyKS5zKCkucigxLCAyNSkudG8oMSwgMzEpLncoMSwgMjQpLncoMiwgMSkuaSgxLCAyOSkudG8oMSwgMzApLnQoKS5yKDQsIDQpLnRvKDQsIDYpLmwoKS5yKDUsIDEpLnRvKDUsIDMpLmQoKS5yKDUsIDI4KS50byg1LCAzMCkudyg1LCAzMSkuaSg1LCAyOSkubigpLnIoMTAsIDEpLnRvKDEwLCA4KS53KDksIDI3KS53KDEwLCAxMCkuaSgxMCwgNykudG8oMTAsIDgpLm0oKS5yKDEwLCAzKSwgci55KDIwMDgpLm55KCkucigxLCAxKS5zKCkucigyLCA2KS50bygyLCAxMikudygyLCAyKS50bygyLCAzKS5pKDIsIDExKS50bygyLCAxMikudCgpLnIoNCwgNCkudG8oNCwgNikubCgpLnIoNSwgMSkudG8oNSwgMykudyg1LCA0KS5pKDUsIDIpLmQoKS5yKDYsIDcpLnRvKDYsIDkpLm0oKS5yKDksIDEzKS50byg5LCAxNSkubigpLnIoOSwgMjkpLnRvKDEwLCA1KS53KDksIDI3KS50byg5LCAyOCkuaSg5LCAyOSkudG8oOSwgMzApLCByLnkoMjAwNykubnkoKS5yKDEsIDEpLnRvKDEsIDMpLmkoMSwgMikudG8oMSwgMykucygpLnIoMiwgMTgpLnRvKDIsIDI0KS53KDIsIDE3KS53KDIsIDI1KS5pKDIsIDIyKS50bygyLCAyMykubCgpLnIoNSwgMSkudG8oNSwgNykudyg0LCAyOCkudG8oNCwgMjkpLmkoNSwgNCkuaSg1LCA3KS5uKCkucigxMCwgMSkudG8oMTAsIDcpLncoOSwgMjkpLnRvKDksIDMwKS5pKDEwLCA0KS50bygxMCwgNSkubnkoKS5yKDEyLCAzMCkudG8oMTIsIDMxKS53KDEyLCAyOSkuaSgxMiwgMzEpLCByLnkoMjAwNikubnkoKS5yKDEsIDEpLnRvKDEsIDMpLnMoKS5yKDEsIDI5KS50bygyLCA0KS53KDEsIDI4KS53KDIsIDUpLmkoMiwgMikudG8oMiwgMykubCgpLnIoNSwgMSkudG8oNSwgNykudyg0LCAyOSkudG8oNCwgMzApLmkoNSwgNCkudG8oNSwgNSkubigpLnIoMTAsIDEpLnRvKDEwLCA3KS53KDksIDMwKS53KDEwLCA4KS5pKDEwLCA1KS50bygxMCwgNikubnkoKS53KDEyLCAzMCkudG8oMTIsIDMxKSwgci55KDIwMDUpLm55KCkucigxLCAxKS50bygxLCAzKS5zKCkucigyLCA5KS50bygyLCAxNSkudygyLCA1KS50bygyLCA2KS5pKDIsIDE0KS50bygyLCAxNSkubCgpLnIoNSwgMSkudG8oNSwgNykudyg0LCAzMCkudyg1LCA4KS5pKDUsIDUpLnRvKDUsIDYpLm4oKS5yKDEwLCAxKS50bygxMCwgNykudygxMCwgOCkudG8oMTAsIDkpLmkoMTAsIDYpLnRvKDEwLCA3KSwgci55KDIwMDQpLm55KCkucigxLCAxKS5zKCkucigxLCAyMikudG8oMSwgMjgpLncoMSwgMTcpLnRvKDEsIDE4KS5pKDEsIDI3KS50bygxLCAyOCkubCgpLnIoNSwgMSkudG8oNSwgNykudyg1LCA4KS50byg1LCA5KS5pKDUsIDYpLnRvKDUsIDcpLm4oKS5yKDEwLCAxKS50bygxMCwgNykudygxMCwgOSkudG8oMTAsIDEwKS5pKDEwLCA2KS50bygxMCwgNyksIHtcbiAgICBob2xpZGF5czogci5ob2xpZGF5cyxcbiAgICB3b3JrZGF5czogci53b3JrZGF5cyxcbiAgICBpbkxpZXVEYXlzOiByLmluTGlldURheXNcbiAgfTtcbn0sIHsgaG9saWRheXM6IGcsIHdvcmtkYXlzOiBwLCBpbkxpZXVEYXlzOiBJIH0gPSBqKCksIHUgPSAoLi4ucikgPT4ge1xuICBpZiAoci5sZW5ndGggIT09IDEpXG4gICAgcmV0dXJuIHIubWFwKChlKSA9PiB1KGUpKTtcbiAgY29uc3QgdCA9IHcoclswXSk7XG4gIGlmICghdC5pc1ZhbGlkKCkpXG4gICAgdGhyb3cgbmV3IEVycm9yKGB1bnN1cHBvcnRlZCB0eXBlICR7dHlwZW9mIHR9LCBleHBlY3RlZCB0eXBlIGlzIERhdGUgb3IgRGF5anNgKTtcbiAgcmV0dXJuIHQ7XG59LCBOID0gKHIpID0+ICFmKHIpLCBmID0gKHIpID0+IHtcbiAgY29uc3QgdCA9IHUociksIGUgPSB0LmRheSgpLCBhID0gdC5mb3JtYXQoXCJZWVlZLU1NLUREXCIpO1xuICByZXR1cm4gISEocFthXSB8fCBlID49IDEgJiYgZSA8PSA1ICYmICFnW2FdKTtcbn0sIHEgPSAocikgPT4gKHIgPSB1KHIpLCAhIUlbci5mb3JtYXQoXCJZWVlZLU1NLUREXCIpXSksIFUgPSAocikgPT4ge1xuICByID0gdShyKTtcbiAgY29uc3QgdCA9IHIuZm9ybWF0KFwiWVlZWS1NTS1ERFwiKTtcbiAgaWYgKHBbdF0pXG4gICAgcmV0dXJuIHtcbiAgICAgIGRhdGU6IHQsXG4gICAgICB3b3JrOiAhMCxcbiAgICAgIG5hbWU6IHBbdF1cbiAgICB9O1xuICBpZiAoZ1t0XSlcbiAgICByZXR1cm4ge1xuICAgICAgZGF0ZTogdCxcbiAgICAgIHdvcms6ICExLFxuICAgICAgbmFtZTogZ1t0XVxuICAgIH07XG4gIHtcbiAgICBjb25zdCBlID0gci5kYXkoKTtcbiAgICByZXR1cm4ge1xuICAgICAgZGF0ZTogdCxcbiAgICAgIHdvcms6IGUgIT09IDAgJiYgZSAhPT0gNixcbiAgICAgIG5hbWU6IHIuZm9ybWF0KFwiZGRkZFwiKVxuICAgIH07XG4gIH1cbn0sIFcgPSAociwgdCwgZSA9ICEwKSA9PiAociA9IHUociksIHQgPSB1KHQpLCBlID8gRChyLCB0KS5maWx0ZXIoTikubWFwKChhKSA9PiBhLmZvcm1hdChcIllZWVktTU0tRERcIikpIDogRChyLCB0KS5maWx0ZXIoKGEpID0+IGdbYS5mb3JtYXQoXCJZWVlZLU1NLUREXCIpXSkubWFwKChhKSA9PiBhLmZvcm1hdChcIllZWVktTU0tRERcIikpKSwgUCA9IChyLCB0LCBlID0gITApID0+IChyID0gdShyKSwgdCA9IHUodCksIGUgPyBEKHIsIHQpLmZpbHRlcihmKS5tYXAoKGEpID0+IGEuZm9ybWF0KFwiWVlZWS1NTS1ERFwiKSkgOiBEKHIsIHQpLmZpbHRlcigoYSkgPT4gZihhKSAmJiBhLmRheSgpID49IDEgJiYgYS5kYXkoKSA8PSA1KS5tYXAoKGEpID0+IGEuZm9ybWF0KFwiWVlZWS1NTS1ERFwiKSkpLCB6ID0gKHIgPSAwLCB0ID0gaCgpKSA9PiB7XG4gIGlmICh0ID0gdyh0KSwgciA9PT0gMCkge1xuICAgIGlmIChmKHQpKVxuICAgICAgcmV0dXJuIHQuZm9ybWF0KFwiWVlZWS1NTS1ERFwiKTtcbiAgICByID0gMTtcbiAgfVxuICBjb25zdCBlID0gciA+IDAgPyAxIDogLTE7XG4gIGxldCBhID0gTWF0aC5hYnMocik7XG4gIGZvciAoOyBhID4gMDsgKVxuICAgIHQgPSB0LmFkZChlLCBcImRheVwiKSwgZih0KSAmJiBhLS07XG4gIHJldHVybiB0LmZvcm1hdChcIllZWVktTU0tRERcIik7XG59LCBWID0gLyogQF9fUFVSRV9fICovIE9iamVjdC5mcmVlemUoLyogQF9fUFVSRV9fICovIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7XG4gIF9fcHJvdG9fXzogbnVsbCxcbiAgZmluZFdvcmtkYXk6IHosXG4gIGdldERheURldGFpbDogVSxcbiAgZ2V0SG9saWRheXNJblJhbmdlOiBXLFxuICBnZXRXb3JrZGF5c0luUmFuZ2U6IFAsXG4gIGlzSG9saWRheTogTixcbiAgaXNJbkxpZXU6IHEsXG4gIGlzV29ya2RheTogZlxufSwgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiBcIk1vZHVsZVwiIH0pKSwgWiA9IHtcbiAgdGhlX2JlZ2lubmluZ19vZl9zcHJpbmc6IFs0LjYyOTUsIDMuODddLFxuICByYWluX3dhdGVyOiBbMTkuNDU5OSwgMTguNzNdLFxuICB0aGVfd2FraW5nX29mX2luc2VjdHM6IFs2LjM5MjYsIDUuNjNdLFxuICB0aGVfc3ByaW5nX2VxdWlub3g6IFsyMS40MTU1LCAyMC42NDZdLFxuICBwdXJlX2JyaWdodG5lc3M6IFs1LjU5LCA0LjgxXSxcbiAgZ3JhaW5fcmFpbjogWzIwLjg4OCwgMjAuMV0sXG4gIHRoZV9iZWdpbm5pbmdfb2Zfc3VtbWVyOiBbNi4zMTgsIDUuNTJdLFxuICBsZXNzZXJfZnVsbG5lc3Nfb2ZfZ3JhaW46IFsyMS44NiwgMjEuMDRdLFxuICBncmFpbl9pbl9iZWFyZDogWzYuNSwgNS42NzhdLFxuICB0aGVfc3VtbWVyX3NvbHN0aWNlOiBbMjIuMiwgMjEuMzddLFxuICBsZXNzZXJfaGVhdDogWzcuOTI4LCA3LjEwOF0sXG4gIGdyZWF0ZXJfaGVhdDogWzIzLjY1LCAyMi44M10sXG4gIHRoZV9iZWdpbm5pbmdfb2ZfYXV0dW1uOiBbMjguMzUsIDcuNV0sXG4gIHRoZV9lbmRfb2ZfaGVhdDogWzIzLjk1LCAyMy4xM10sXG4gIHdoaXRlX2RldzogWzguNDQsIDcuNjQ2XSxcbiAgdGhlX2F1dHVtbl9lcXVpbm94OiBbMjMuODIyLCAyMy4wNDJdLFxuICBjb2RlX2RldzogWzkuMDk4LCA4LjMxOF0sXG4gIGZyb3N0X2Rlc2NlbnQ6IFsyNC4yMTgsIDIzLjQzOF0sXG4gIHRoZV9iZWdpbm5pbmdfb2Zfd2ludGVyOiBbOC4yMTgsIDcuNDM4XSxcbiAgbGVzc2VyX3Nub3c6IFsyMy4wOCwgMjIuMzZdLFxuICBncmVhdGVyX3Nub3c6IFs3LjksIDcuMThdLFxuICB0aGVfd2ludGVyX3NvbHN0aWNlOiBbMjIuNiwgMjEuOTRdLFxuICBsZXNzZXJfY29sZDogWzYuMTEsIDUuNDA1NV0sXG4gIGdyZWF0ZXJfY29sZDogWzIwLjg0LCAyMC4xMl1cbn0sIFQgPSB7XG4gIDE6IFtcImxlc3Nlcl9jb2xkXCIsIFwiZ3JlYXRlcl9jb2xkXCJdLFxuICAyOiBbXCJ0aGVfYmVnaW5uaW5nX29mX3NwcmluZ1wiLCBcInJhaW5fd2F0ZXJcIl0sXG4gIDM6IFtcInRoZV93YWtpbmdfb2ZfaW5zZWN0c1wiLCBcInRoZV9zcHJpbmdfZXF1aW5veFwiXSxcbiAgNDogW1wicHVyZV9icmlnaHRuZXNzXCIsIFwiZ3JhaW5fcmFpblwiXSxcbiAgNTogW1widGhlX2JlZ2lubmluZ19vZl9zdW1tZXJcIiwgXCJsZXNzZXJfZnVsbG5lc3Nfb2ZfZ3JhaW5cIl0sXG4gIDY6IFtcImdyYWluX2luX2JlYXJkXCIsIFwidGhlX3N1bW1lcl9zb2xzdGljZVwiXSxcbiAgNzogW1wibGVzc2VyX2hlYXRcIiwgXCJncmVhdGVyX2hlYXRcIl0sXG4gIDg6IFtcInRoZV9iZWdpbm5pbmdfb2ZfYXV0dW1uXCIsIFwidGhlX2VuZF9vZl9oZWF0XCJdLFxuICA5OiBbXCJ3aGl0ZV9kZXdcIiwgXCJ0aGVfYXV0dW1uX2VxdWlub3hcIl0sXG4gIDEwOiBbXCJjb2RlX2Rld1wiLCBcImZyb3N0X2Rlc2NlbnRcIl0sXG4gIDExOiBbXCJ0aGVfYmVnaW5uaW5nX29mX3dpbnRlclwiLCBcImxlc3Nlcl9zbm93XCJdLFxuICAxMjogW1wiZ3JlYXRlcl9zbm93XCIsIFwidGhlX3dpbnRlcl9zb2xzdGljZVwiXVxufSwgRyA9IHtcbiAgXCIyMDI2X3JhaW5fd2F0ZXJcIjogLTEsXG4gIFwiMjA4NF90aGVfc3ByaW5nX2VxdWlub3hcIjogMSxcbiAgXCIxOTExX3RoZV9iZWdpbm5pbmdfb2Zfc3VtbWVyXCI6IDEsXG4gIFwiMjAwOF9sZXNzZXJfZnVsbG5lc3Nfb2ZfZ3JhaW5cIjogMSxcbiAgXCIxOTAyX2dyYWluX2luX2JlYXJkXCI6IDEsXG4gIFwiMTkyOF90aGVfc3VtbWVyX3NvbHN0aWNlXCI6IDEsXG4gIFwiMTkyNV9sZXNzZXJfaGVhdFwiOiAxLFxuICBcIjIwMTZfbGVzc2VyX2hlYXRcIjogMSxcbiAgXCIxOTIyX2dyZWF0ZXJfaGVhdFwiOiAxLFxuICBcIjIwMDJfdGhlX2JlZ2lubmluZ19vZl9hdXR1bW5cIjogMSxcbiAgXCIxOTI3X3doaXRlX2Rld1wiOiAxLFxuICBcIjE5NDJfdGhlX2F1dHVtbl9lcXVpbm94XCI6IDEsXG4gIFwiMjA4OV9mcm9zdF9kZXNjZW50XCI6IDEsXG4gIFwiMjA4OV90aGVfYmVnaW5uaW5nX29mX3dpbnRlclwiOiAxLFxuICBcIjE5NzhfbGVzc2VyX3Nub3dcIjogMSxcbiAgXCIxOTU0X2dyZWF0ZXJfc25vd1wiOiAxLFxuICBcIjE5MThfdGhlX3dpbnRlcl9zb2xzdGljZVwiOiAtMSxcbiAgXCIyMDIxX3RoZV93aW50ZXJfc29sc3RpY2VcIjogLTEsXG4gIFwiMTk4Ml9sZXNzZXJfY29sZFwiOiAxLFxuICBcIjIwMTlfbGVzc2VyX2NvbGRcIjogLTEsXG4gIFwiMjAwMF9ncmVhdGVyX2NvbGRcIjogMSxcbiAgXCIyMDgyX2dyZWF0ZXJfY29sZFwiOiAxXG59LCB2ID0ge1xuICBsZXNzZXJfY29sZDogXCLlsI/lr5JcIixcbiAgZ3JlYXRlcl9jb2xkOiBcIuWkp+WvklwiLFxuICB0aGVfYmVnaW5uaW5nX29mX3NwcmluZzogXCLnq4vmmKVcIixcbiAgcmFpbl93YXRlcjogXCLpm6jmsLRcIixcbiAgdGhlX3dha2luZ19vZl9pbnNlY3RzOiBcIuaDiuibsFwiLFxuICB0aGVfc3ByaW5nX2VxdWlub3g6IFwi5pil5YiGXCIsXG4gIHB1cmVfYnJpZ2h0bmVzczogXCLmuIXmmI5cIixcbiAgZ3JhaW5fcmFpbjogXCLosLfpm6hcIixcbiAgdGhlX2JlZ2lubmluZ19vZl9zdW1tZXI6IFwi56uL5aSPXCIsXG4gIGxlc3Nlcl9mdWxsbmVzc19vZl9ncmFpbjogXCLlsI/mu6FcIixcbiAgZ3JhaW5faW5fYmVhcmQ6IFwi6IqS56eNXCIsXG4gIHRoZV9zdW1tZXJfc29sc3RpY2U6IFwi5aSP6IezXCIsXG4gIGxlc3Nlcl9oZWF0OiBcIuWwj+aakVwiLFxuICBncmVhdGVyX2hlYXQ6IFwi5aSn5pqRXCIsXG4gIHRoZV9iZWdpbm5pbmdfb2ZfYXV0dW1uOiBcIueri+eni1wiLFxuICB0aGVfZW5kX29mX2hlYXQ6IFwi5aSE5pqRXCIsXG4gIHdoaXRlX2RldzogXCLnmb3pnLJcIixcbiAgdGhlX2F1dHVtbl9lcXVpbm94OiBcIueni+WIhlwiLFxuICBjb2RlX2RldzogXCLlr5LpnLJcIixcbiAgZnJvc3RfZGVzY2VudDogXCLpnJzpmY1cIixcbiAgdGhlX2JlZ2lubmluZ19vZl93aW50ZXI6IFwi56uL5YasXCIsXG4gIGxlc3Nlcl9zbm93OiBcIuWwj+mbqlwiLFxuICBncmVhdGVyX3Nub3c6IFwi5aSn6ZuqXCIsXG4gIHRoZV93aW50ZXJfc29sc3RpY2U6IFwi5Yas6IezXCJcbn0sIFMgPSAociwgdCwgZSkgPT4ge1xuICBjb25zdCBhID0gciA+PSAyZTMgPyAyMSA6IDIwLCBzID0gciAlIDEwMCwgaSA9IDAuMjQyMiwgbyA9IFpbZV1bYSA9PT0gMjEgPyAxIDogMF07XG4gIGxldCBsID0gTWF0aC5mbG9vcihzIC8gNCk7XG4gIFtcbiAgICBcImxlc3Nlcl9jb2xkXCIsXG4gICAgXCJncmVhdGVyX2NvbGRcIixcbiAgICBcInRoZV9iZWdpbm5pbmdfb2Zfc3ByaW5nXCIsXG4gICAgXCJyYWluX3dhdGVyXCJcbiAgXS5pbmNsdWRlcyhlKSAmJiAobCA9IE1hdGguZmxvb3IoKHMgLSAxKSAvIDQpKTtcbiAgbGV0IG4gPSBNYXRoLmZsb29yKHMgKiBpICsgbykgLSBsO1xuICBjb25zdCBfID0gR1tgJHtyfV8ke2V9YF07XG4gIHJldHVybiBfICYmIChuICs9IF8pLCBoKGAke3J9LSR7dH0tJHtufWApLmZvcm1hdChcIllZWVktTU0tRERcIik7XG59LCBKID0gKHIsIHQpID0+IHtcbiAgY29uc3QgZSA9IFtdO1xuICBsZXQgYSA9IHcocik7XG4gIGNvbnN0IHMgPSB3KHQgfHwgcik7XG4gIGZvciAoOyBhLmlzQmVmb3JlKHMpIHx8IGEuaXNTYW1lKHMpOyApIHtcbiAgICBjb25zdCBpID0gYS55ZWFyKCksIG8gPSBhLm1vbnRoKCkgKyAxO1xuICAgIFRbb10uZm9yRWFjaCgobCkgPT4ge1xuICAgICAgY29uc3QgbiA9IGgoUyhpLCBvLCBsKSk7XG4gICAgICAobiAhPSBudWxsICYmIG4uaXNCZWZvcmUocykgfHwgbiAhPSBudWxsICYmIG4uaXNTYW1lKHMpKSAmJiAobiAhPSBudWxsICYmIG4uaXNBZnRlcihhKSB8fCBuICE9IG51bGwgJiYgbi5pc1NhbWUoYSkpICYmIGUucHVzaCh7XG4gICAgICAgIGRhdGU6IG4uZm9ybWF0KFwiWVlZWS1NTS1ERFwiKSxcbiAgICAgICAgdGVybTogbCxcbiAgICAgICAgbmFtZTogdltsXSxcbiAgICAgICAgaW5kZXg6IDFcbiAgICAgIH0pO1xuICAgIH0pLCBvID09PSAxMiA/IGEgPSBhLmFkZCgxLCBcInllYXJcIikuc3RhcnRPZihcInllYXJcIikgOiBhID0gYS5hZGQoMSwgXCJtb250aFwiKS5zdGFydE9mKFwibW9udGhcIik7XG4gIH1cbiAgcmV0dXJuIGU7XG59LCBLID0gKHIsIHQpID0+IHtcbiAgbGV0IGUgPSB3KHIpLnN1YnRyYWN0KDEsIFwibW9udGhcIik7XG4gIGNvbnN0IGEgPSB3KHQgfHwgcikuYWRkKDEsIFwibW9udGhcIiksIHMgPSBbXTtcbiAgZm9yICg7IGUuaXNCZWZvcmUoYSkgfHwgZS5pc1NhbWUoYSk7ICkge1xuICAgIGNvbnN0IG8gPSBlLnllYXIoKSwgbCA9IGUubW9udGgoKSArIDE7XG4gICAgVFtsXS5mb3JFYWNoKChuKSA9PiB7XG4gICAgICBjb25zdCBfID0gaChTKG8sIGwsIG4pKTtcbiAgICAgIHMucHVzaCh7IHRlcm06IG4sIGRhdGU6IF8gfSk7XG4gICAgfSksIGUubW9udGgoKSA9PT0gMTEgPyBlID0gZS5hZGQoMSwgXCJ5ZWFyXCIpLnN0YXJ0T2YoXCJ5ZWFyXCIpIDogZSA9IGUuYWRkKDEsIFwibW9udGhcIikuc3RhcnRPZihcIm1vbnRoXCIpO1xuICB9XG4gIGNvbnN0IGkgPSBbXTtcbiAgcmV0dXJuIHMuZm9yRWFjaCgobywgbCkgPT4ge1xuICAgIGZvciAobGV0IG4gPSBvLmRhdGU7IHNbbCArIDFdICYmIG4uaXNCZWZvcmUoc1tsICsgMV0uZGF0ZSk7IG4gPSBuLmFkZCgxLCBcImRheVwiKSlcbiAgICAgIGkucHVzaCh7IGRheTogbiwgdGVybTogby50ZXJtLCBuYW1lOiB2W28udGVybV0sIGluZGV4OiBuLmRpZmYoby5kYXRlLCBcImRheVwiKSArIDEgfSk7XG4gIH0pLCB0IHx8ICh0ID0gciksIGkuZmlsdGVyKChvKSA9PiBvLmRheS5pc0JldHdlZW4ociwgdCwgXCJkYXlcIikpLm1hcCgobykgPT4gKHtcbiAgICBkYXRlOiBvLmRheS5mb3JtYXQoXCJZWVlZLU1NLUREXCIpLFxuICAgIHRlcm06IG8udGVybSxcbiAgICBuYW1lOiBvLm5hbWUsXG4gICAgaW5kZXg6IG8uaW5kZXhcbiAgfSkpO1xufSwgUSA9IC8qIEBfX1BVUkVfXyAqLyBPYmplY3QuZnJlZXplKC8qIEBfX1BVUkVfXyAqLyBPYmplY3QuZGVmaW5lUHJvcGVydHkoe1xuICBfX3Byb3RvX186IG51bGwsXG4gIGdldFNvbGFyVGVybURhdGU6IFMsXG4gIGdldFNvbGFyVGVybXM6IEosXG4gIGdldFNvbGFyVGVybXNJblJhbmdlOiBLXG59LCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6IFwiTW9kdWxlXCIgfSkpLCBtID0gW1xuICAxOTQxNixcbiAgMTkxNjgsXG4gIDQyMzUyLFxuICAyMTcxNyxcbiAgNTM4NTYsXG4gIDU1NjMyLFxuICA5MTQ3NixcbiAgMjIxNzYsXG4gIDM5NjMyLFxuICAyMTk3MCxcbiAgLy8xOTAwLTE5MDlcbiAgMTkxNjgsXG4gIDQyNDIyLFxuICA0MjE5MixcbiAgNTM4NDAsXG4gIDExOTM4MSxcbiAgNDY0MDAsXG4gIDU0OTQ0LFxuICA0NDQ1MCxcbiAgMzgzMjAsXG4gIDg0MzQzLFxuICAvLzE5MTAtMTkxOVxuICAxODgwMCxcbiAgNDIxNjAsXG4gIDQ2MjYxLFxuICAyNzIxNixcbiAgMjc5NjgsXG4gIDEwOTM5NixcbiAgMTExMDQsXG4gIDM4MjU2LFxuICAyMTIzNCxcbiAgMTg4MDAsXG4gIC8vMTkyMC0xOTI5XG4gIDI1OTU4LFxuICA1NDQzMixcbiAgNTk5ODQsXG4gIDI4MzA5LFxuICAyMzI0OCxcbiAgMTExMDQsXG4gIDEwMDA2NyxcbiAgMzc2MDAsXG4gIDExNjk1MSxcbiAgNTE1MzYsXG4gIC8vMTkzMC0xOTM5XG4gIDU0NDMyLFxuICAxMjA5OTgsXG4gIDQ2NDE2LFxuICAyMjE3NixcbiAgMTA3OTU2LFxuICA5NjgwLFxuICAzNzU4NCxcbiAgNTM5MzgsXG4gIDQzMzQ0LFxuICA0NjQyMyxcbiAgLy8xOTQwLTE5NDlcbiAgMjc4MDgsXG4gIDQ2NDE2LFxuICA4Njg2OSxcbiAgMTk4NzIsXG4gIDQyNDE2LFxuICA4MzMxNSxcbiAgMjExNjgsXG4gIDQzNDMyLFxuICA1OTcyOCxcbiAgMjcyOTYsXG4gIC8vMTk1MC0xOTU5XG4gIDQ0NzEwLFxuICA0Mzg1NixcbiAgMTkyOTYsXG4gIDQzNzQ4LFxuICA0MjM1MixcbiAgMjEwODgsXG4gIDYyMDUxLFxuICA1NTYzMixcbiAgMjMzODMsXG4gIDIyMTc2LFxuICAvLzE5NjAtMTk2OVxuICAzODYwOCxcbiAgMTk5MjUsXG4gIDE5MTUyLFxuICA0MjE5MixcbiAgNTQ0ODQsXG4gIDUzODQwLFxuICA1NDYxNixcbiAgNDY0MDAsXG4gIDQ2NzUyLFxuICAxMDM4NDYsXG4gIC8vMTk3MC0xOTc5XG4gIDM4MzIwLFxuICAxODg2NCxcbiAgNDMzODAsXG4gIDQyMTYwLFxuICA0NTY5MCxcbiAgMjcyMTYsXG4gIDI3OTY4LFxuICA0NDg3MCxcbiAgNDM4NzIsXG4gIDM4MjU2LFxuICAvLzE5ODAtMTk4OVxuICAxOTE4OSxcbiAgMTg4MDAsXG4gIDI1Nzc2LFxuICAyOTg1OSxcbiAgNTk5ODQsXG4gIDI3NDgwLFxuICAyMTk1MixcbiAgNDM4NzIsXG4gIDM4NjEzLFxuICAzNzYwMCxcbiAgLy8xOTkwLTE5OTlcbiAgNTE1NTIsXG4gIDU1NjM2LFxuICA1NDQzMixcbiAgNTU4ODgsXG4gIDMwMDM0LFxuICAyMjE3NixcbiAgNDM5NTksXG4gIDk2ODAsXG4gIDM3NTg0LFxuICA1MTg5MyxcbiAgLy8yMDAwLTIwMDlcbiAgNDMzNDQsXG4gIDQ2MjQwLFxuICA0Nzc4MCxcbiAgNDQzNjgsXG4gIDIxOTc3LFxuICAxOTM2MCxcbiAgNDI0MTYsXG4gIDg2MzkwLFxuICAyMTE2OCxcbiAgNDMzMTIsXG4gIC8vMjAxMC0yMDE5XG4gIDMxMDYwLFxuICAyNzI5NixcbiAgNDQzNjgsXG4gIDIzMzc4LFxuICAxOTI5NixcbiAgNDI3MjYsXG4gIDQyMjA4LFxuICA1Mzg1NixcbiAgNjAwMDUsXG4gIDU0NTc2LFxuICAvLzIwMjAtMjAyOVxuICAyMzIwMCxcbiAgMzAzNzEsXG4gIDM4NjA4LFxuICAxOTE5NSxcbiAgMTkxNTIsXG4gIDQyMTkyLFxuICAxMTg5NjYsXG4gIDUzODQwLFxuICA1NDU2MCxcbiAgNTY2NDUsXG4gIC8vMjAzMC0yMDM5XG4gIDQ2NDk2LFxuICAyMjIyNCxcbiAgMjE5MzgsXG4gIDE4ODY0LFxuICA0MjM1OSxcbiAgNDIxNjAsXG4gIDQzNjAwLFxuICAxMTExODksXG4gIDI3OTM2LFxuICA0NDQ0OCxcbiAgLy8yMDQwLTIwNDlcbiAgODQ4MzUsXG4gIDM3NzQ0LFxuICAxODkzNixcbiAgMTg4MDAsXG4gIDI1Nzc2LFxuICA5MjMyNixcbiAgNTk5ODQsXG4gIDI3NDI0LFxuICAxMDgyMjgsXG4gIDQzNzQ0LFxuICAvLzIwNTAtMjA1OVxuICA0MTY5NixcbiAgNTM5ODcsXG4gIDUxNTUyLFxuICA1NDYxNSxcbiAgNTQ0MzIsXG4gIDU1ODg4LFxuICAyMzg5MyxcbiAgMjIxNzYsXG4gIDQyNzA0LFxuICAyMTk3MixcbiAgLy8yMDYwLTIwNjlcbiAgMjEyMDAsXG4gIDQzNDQ4LFxuICA0MzM0NCxcbiAgNDYyNDAsXG4gIDQ2NzU4LFxuICA0NDM2OCxcbiAgMjE5MjAsXG4gIDQzOTQwLFxuICA0MjQxNixcbiAgMjExNjgsXG4gIC8vMjA3MC0yMDc5XG4gIDQ1NjgzLFxuICAyNjkyOCxcbiAgMjk0OTUsXG4gIDI3Mjk2LFxuICA0NDM2OCxcbiAgODQ4MjEsXG4gIDE5Mjk2LFxuICA0MjM1MixcbiAgMjE3MzIsXG4gIDUzNjAwLFxuICAvLzIwODAtMjA4OVxuICA1OTc1MixcbiAgNTQ1NjAsXG4gIDU1OTY4LFxuICA5MjgzOCxcbiAgMjIyMjQsXG4gIDE5MTY4LFxuICA0MzQ3NixcbiAgNDE2ODAsXG4gIDUzNTg0LFxuICA2MjAzNCxcbiAgLy8yMDkwLTIwOTlcbiAgNTQ1NjBcbiAgLy8yMTAwXG5dLCAkID0gW1wi6Zu2XCIsIFwi5LiAXCIsIFwi5LqMXCIsIFwi5LiJXCIsIFwi5ZubXCIsIFwi5LqUXCIsIFwi5YWtXCIsIFwi5LiDXCIsIFwi5YWrXCIsIFwi5LmdXCJdLCBYID0gW1wi5q2jXCIsIFwi5LqMXCIsIFwi5LiJXCIsIFwi5ZubXCIsIFwi5LqUXCIsIFwi5YWtXCIsIFwi5LiDXCIsIFwi5YWrXCIsIFwi5LmdXCIsIFwi5Y2BXCIsIFwi5YasXCIsIFwi6IWKXCJdLCB0dCA9IFtcIueUslwiLCBcIuS5mVwiLCBcIuS4mVwiLCBcIuS4gVwiLCBcIuaIilwiLCBcIuW3sVwiLCBcIuW6mlwiLCBcIui+m1wiLCBcIuWjrFwiLCBcIueZuFwiXSwgZXQgPSBbXCLlrZBcIiwgXCLkuJFcIiwgXCLlr4VcIiwgXCLlja9cIiwgXCLovrBcIiwgXCLlt7NcIiwgXCLljYhcIiwgXCLmnKpcIiwgXCLnlLNcIiwgXCLphYlcIiwgXCLmiIxcIiwgXCLkuqVcIl0sIHJ0ID0gW1wi6bygXCIsIFwi54mbXCIsIFwi6JmOXCIsIFwi5YWUXCIsIFwi6b6ZXCIsIFwi6JuHXCIsIFwi6amsXCIsIFwi576KXCIsIFwi54y0XCIsIFwi6bihXCIsIFwi54uXXCIsIFwi54yqXCJdLCBIID0gKHIpID0+IHtcbiAgbGV0IHQgPSAzNDg7XG4gIGZvciAobGV0IGUgPSAzMjc2ODsgZSA+IDg7IGUgPj49IDEpXG4gICAgdCArPSBtW3IgLSAxOTAwXSAmIGUgPyAxIDogMDtcbiAgcmV0dXJuIHQgKyBGKHIpO1xufSwgayA9IChyKSA9PiBtW3IgLSAxOTAwXSAmIDE1LCBGID0gKHIpID0+IGsocikgPyBtW3IgLSAxOTAwXSAmIDY1NTM2ID8gMzAgOiAyOSA6IDAsIFkgPSAocikgPT4gdHRbciAlIDEwXSArIGV0W3IgJSAxMl0sIGIgPSAociwgdCkgPT4gbVtyIC0gMTkwMF0gJiA2NTUzNiA+PiB0ID8gMzAgOiAyOSwgYXQgPSAocikgPT4gcnRbKHIgLSA0KSAlIDEyXSwgb3QgPSAocikgPT4ge1xuICBjb25zdCB0ID0gW1wi5YidXCIsIFwi5Y2BXCIsIFwi5bu/XCIsIFwi5LiJ5Y2BXCJdO1xuICBpZiAociA9PT0gMTApIHJldHVybiBcIuWIneWNgVwiO1xuICBpZiAociA9PT0gMjApIHJldHVybiBcIuS6jOWNgVwiO1xuICBpZiAociA9PT0gMzApIHJldHVybiBcIuS4ieWNgVwiO1xuICBjb25zdCBlID0gTWF0aC5mbG9vcihyIC8gMTApLCBhID0gciAlIDEwO1xuICByZXR1cm4gdFtlXSArIChhID8gJFthXSA6IFwiXCIpO1xufSwgTyA9IChyKSA9PiB7XG4gIGNvbnN0IHQgPSBuZXcgQXJyYXkoNykuZmlsbCgwKTtcbiAgbGV0IGUgPSAwLCBhID0gMDtcbiAgY29uc3QgcyA9IGgobmV3IERhdGUoMTkwMCwgMCwgMzEpKSwgaSA9IGgocik7XG4gIGxldCBvID0gaS5kaWZmKHMsIFwiZGF5XCIpO1xuICB0WzVdID0gbyArIDQwLCB0WzRdID0gMTQ7XG4gIGxldCBsID0gMTkwMDtcbiAgZm9yICg7IGwgPCAyMTAwICYmIG8gPiAwOyBsKyspXG4gICAgZSA9IEgobCksIG8gLT0gZSwgdFs0XSArPSAxMjtcbiAgbyA8IDAgJiYgKG8gKz0gZSwgbC0tLCB0WzRdIC09IDEyKSwgdFswXSA9IGwsIHRbM10gPSBsIC0gMTg2NCwgYSA9IGsobCksIHRbNl0gPSAwO1xuICBmb3IgKGxldCBuID0gMTsgbiA8IDEzICYmIG8gPj0gMDsgbisrKVxuICAgIGEgPiAwICYmIG4gPT09IGEgKyAxICYmIHRbNl0gPT09IDAgPyAoLS1uLCB0WzZdID0gMSwgZSA9IEYobCkpIDogZSA9IGIobCwgbiksIHRbNl0gPT09IDEgJiYgbiA9PT0gYSArIDEgJiYgKHRbNl0gPSAwKSwgbyAtPSBlLCB0WzZdID09PSAwICYmIHRbNF0rKywgdFsxXSA9IG47XG4gIHJldHVybiBvID09PSAwICYmIGEgPiAwICYmIHRbNl0gPT09IDEgPyB0WzZdID0gMCA6IG8gPCAwICYmIChvICs9IGUsIHRbMV0tLSwgdFs0XS0tKSwgdFsyXSA9IG8gKyAxLCB7XG4gICAgZGF0ZTogaS5mb3JtYXQoXCJZWVlZLU1NLUREXCIpLFxuICAgIC8vIOWFrOWOhuaXpeacn1xuICAgIGx1bmFyWWVhcjogdFswXSxcbiAgICAvLyDlhpzljoblubTku71cbiAgICBsdW5hck1vbjogdFsxXSArIDEsXG4gICAgLy8g5Yac5Y6G5pyI5Lu9XG4gICAgbHVuYXJEYXk6IHRbMl0sXG4gICAgLy8g5Yac5Y6G5pel5pyfXG4gICAgaXNMZWFwOiAhIXRbNl0sXG4gICAgLy8g5piv5ZCm6Zew5pyIXG4gICAgem9kaWFjOiBhdCh0WzBdKSxcbiAgICAvLyDnlJ/ogpZcbiAgICB5ZWFyQ3lsOiBZKHRbM10pLFxuICAgIC8vIOW5tOafsVxuICAgIG1vbkN5bDogWSh0WzRdKSxcbiAgICAvLyDmnIjmn7FcbiAgICBkYXlDeWw6IFkodFs1XSksXG4gICAgLy8g5pel5p+xXG4gICAgbHVuYXJZZWFyQ046IGAke3RbMF0udG9TdHJpbmcoKS5zcGxpdChcIlwiKS5tYXAoKG4pID0+ICRbTnVtYmVyKG4pXSkuam9pbihcIlwiKX1gLFxuICAgIC8vIOWGnOWOhuW5tOS7veS4reaWh+ihqOekulxuICAgIGx1bmFyTW9uQ046IGAke1hbdFsxXV195pyIYCxcbiAgICAvLyDlhpzljobmnIjku73kuK3mlofooajnpLpcbiAgICBsdW5hckRheUNOOiBvdCh0WzJdKVxuICAgIC8vIOWGnOWOhuaXpeacn+S4reaWh+ihqOekulxuICB9O1xufSwgRSA9IChyLCB0KSA9PiB7XG4gIGNvbnN0IGUgPSBoKHIpLCBhID0gaCh0KSwgcyA9IFtdO1xuICBmb3IgKGxldCBpID0gZTsgaS5pc0JlZm9yZShhKSB8fCBpLmlzU2FtZShhLCBcImRheVwiKTsgaSA9IGkuYWRkKDEsIFwiZGF5XCIpKVxuICAgIHMucHVzaChPKGkpKTtcbiAgcmV0dXJuIHM7XG59LCBSID0gKHIpID0+IHtcbiAgY29uc3QgdCA9IGgociksIGUgPSB0LnllYXIoKSwgYSA9IHQubW9udGgoKSArIDEsIHMgPSB0LmRhdGUoKTtcbiAgbGV0IGkgPSAwO1xuICBmb3IgKGxldCB5ID0gMTkwMDsgeSA8IGU7IHkrKylcbiAgICBpICs9IEgoeSk7XG4gIGxldCBvID0gayhlKTtcbiAgZm9yIChsZXQgeSA9IDE7IHkgPCBhOyB5KyspXG4gICAgaSArPSBiKGUsIHkpLCB5ID09PSBvICYmIChpICs9IEYoZSkpO1xuICBpICs9IHMgLSAxO1xuICBjb25zdCBsID0gaChuZXcgRGF0ZSgxOTAwLCAwLCAzMSkpLCBuID0gbC5hZGQoaSwgXCJkYXlcIikuZm9ybWF0KFwiWVlZWS1NTS1ERFwiKTtcbiAgbGV0IF8gPSBpLCBMO1xuICByZXR1cm4gbyA9PT0gYSAmJiAoXyArPSBiKGUsIGEpLCBMID0gbC5hZGQoXywgXCJkYXlcIikuZm9ybWF0KFwiWVlZWS1NTS1ERFwiKSksIHtcbiAgICBkYXRlOiBuLFxuICAgIGxlYXBNb250aERhdGU6IExcbiAgfTtcbn0sIG50ID0ge1xuICBnZXRMdW5hckRhdGU6IE8sXG4gIGdldEx1bmFyRGF0ZXNJblJhbmdlOiBFLFxuICBnZXRTb2xhckRhdGVGcm9tTHVuYXI6IFJcbn0sIHN0ID0gLyogQF9fUFVSRV9fICovIE9iamVjdC5mcmVlemUoLyogQF9fUFVSRV9fICovIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7XG4gIF9fcHJvdG9fXzogbnVsbCxcbiAgZGVmYXVsdDogbnQsXG4gIGdldEx1bmFyRGF0ZTogTyxcbiAgZ2V0THVuYXJEYXRlc0luUmFuZ2U6IEUsXG4gIGdldFNvbGFyRGF0ZUZyb21MdW5hcjogUlxufSwgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiBcIk1vZHVsZVwiIH0pKSwgbHQgPSB7XG4gIC4uLlYsXG4gIC4uLlEsXG4gIC4uLnN0XG59O1xuZXhwb3J0IHtcbiAgbHQgYXMgZGVmYXVsdCxcbiAgeiBhcyBmaW5kV29ya2RheSxcbiAgVSBhcyBnZXREYXlEZXRhaWwsXG4gIFcgYXMgZ2V0SG9saWRheXNJblJhbmdlLFxuICBPIGFzIGdldEx1bmFyRGF0ZSxcbiAgRSBhcyBnZXRMdW5hckRhdGVzSW5SYW5nZSxcbiAgUiBhcyBnZXRTb2xhckRhdGVGcm9tTHVuYXIsXG4gIFMgYXMgZ2V0U29sYXJUZXJtRGF0ZSxcbiAgSiBhcyBnZXRTb2xhclRlcm1zLFxuICBLIGFzIGdldFNvbGFyVGVybXNJblJhbmdlLFxuICBQIGFzIGdldFdvcmtkYXlzSW5SYW5nZSxcbiAgTiBhcyBpc0hvbGlkYXksXG4gIHEgYXMgaXNJbkxpZXUsXG4gIGYgYXMgaXNXb3JrZGF5XG59O1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQSxvRkFBQUEsVUFBQUMsU0FBQTtBQUFBO0FBQ0EsUUFBSSxRQUFRLFNBQVUsSUFBSTtBQUN4QixhQUFPLE1BQU0sR0FBRyxTQUFTLFFBQVE7QUFBQSxJQUNuQztBQUdBLElBQUFBLFFBQU87QUFBQSxJQUVMLE1BQU0sT0FBTyxjQUFjLFlBQVksVUFBVSxLQUNqRCxNQUFNLE9BQU8sVUFBVSxZQUFZLE1BQU07QUFBQSxJQUV6QyxNQUFNLE9BQU8sUUFBUSxZQUFZLElBQUksS0FDckMsTUFBTSxPQUFPLFVBQVUsWUFBWSxNQUFNLEtBQ3pDLE1BQU0sT0FBT0QsWUFBUSxZQUFZQSxRQUFJO0FBQUEsSUFFcEMsMkJBQVk7QUFBRSxhQUFPO0FBQUEsSUFBTSxFQUFHLEtBQUssU0FBUyxhQUFhLEVBQUU7QUFBQTtBQUFBOzs7QUNmOUQ7QUFBQSw4RUFBQUUsVUFBQUMsU0FBQTtBQUFBO0FBQ0EsSUFBQUEsUUFBTyxVQUFVLFNBQVUsTUFBTTtBQUMvQixVQUFJO0FBQ0YsZUFBTyxDQUFDLENBQUMsS0FBSztBQUFBLE1BQ2hCLFNBQVMsT0FBTztBQUNkLGVBQU87QUFBQSxNQUNUO0FBQUEsSUFDRjtBQUFBO0FBQUE7OztBQ1BBO0FBQUEsb0ZBQUFDLFVBQUFDLFNBQUE7QUFBQTtBQUNBLFFBQUksUUFBUTtBQUdaLElBQUFBLFFBQU8sVUFBVSxDQUFDLE1BQU0sV0FBWTtBQUVsQyxhQUFPLE9BQU8sZUFBZSxDQUFDLEdBQUcsR0FBRyxFQUFFLEtBQUssV0FBWTtBQUFFLGVB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QUcsQ0FBQyxFQUFFdUIsR0FBRyxHQUFHLENBQUMsRUFBRTNCLEVBQUUsR0FBRyxFQUFFLEVBQUUyQixHQUFHLEdBQUcsRUFBRSxFQUFFSyxFQUFFLEVBQUV6RixFQUFFLEdBQUcsRUFBRSxFQUFFb0YsR0FBRyxHQUFHLEVBQUUsRUFBRXZCLEVBQUUsR0FBRyxFQUFFLEVBQUVKLEVBQUUsR0FBRyxFQUFFLEVBQUU2QixFQUFFLEVBQUV0RixFQUFFLElBQUksQ0FBQyxFQUFFb0YsR0FBRyxJQUFJLENBQUMsRUFBRXZCLEVBQUUsR0FBRyxFQUFFLEVBQUVBLEVBQUUsSUFBSSxFQUFFLEVBQUVKLEVBQUUsSUFBSSxDQUFDLEVBQUVBLEVBQUUsSUFBSSxDQUFDLEdBQUd6RCxFQUFFb0UsRUFBRSxJQUFJLEVBQUVvQixHQUFHLEVBQUV4RixFQUFFLEdBQUcsQ0FBQyxFQUFFb0YsR0FBRyxHQUFHLENBQUMsRUFBRTNCLEVBQUUsR0FBRyxDQUFDLEVBQUVyQyxFQUFFLEVBQUVwQixFQUFFLEdBQUcsRUFBRSxFQUFFb0YsR0FBRyxHQUFHLEVBQUUsRUFBRXZCLEVBQUUsR0FBRyxFQUFFLEVBQUVBLEVBQUUsR0FBRyxFQUFFLEVBQUVKLEVBQUUsR0FBRyxFQUFFLEVBQUUyQixHQUFHLEdBQUcsRUFBRSxFQUFFbkYsRUFBRSxFQUFFRCxFQUFFLEdBQUcsQ0FBQyxFQUFFb0YsR0FBRyxHQUFHLENBQUMsRUFBRXZCLEVBQUUsR0FBRyxFQUFFLEVBQUVBLEVBQUUsR0FBRyxDQUFDLEVBQUVKLEVBQUUsR0FBRyxDQUFDLEVBQUUyQixHQUFHLEdBQUcsQ0FBQyxFQUFFQyxFQUFFLEVBQUVyRixFQUFFLEdBQUcsRUFBRSxFQUFFb0YsR0FBRyxHQUFHLENBQUMsRUFBRXZCLEVBQUUsR0FBRyxFQUFFLEVBQUVKLEVBQUUsR0FBRyxFQUFFLEVBQUVqRCxFQUFFLEVBQUVSLEVBQUUsR0FBRyxFQUFFLEVBQUVBLEVBQUUsR0FBRyxFQUFFLEVBQUV5RixFQUFFLEVBQUV6RixFQUFFLEdBQUcsRUFBRSxFQUFFc0YsRUFBRSxFQUFF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QUFHLENBQUMsRUFBRTJCLEdBQUcsR0FBRyxDQUFDLEVBQUVDLEVBQUUsRUFBRXJGLEVBQUUsR0FBRyxDQUFDLEVBQUVvRixHQUFHLEdBQUcsQ0FBQyxFQUFFdkIsRUFBRSxHQUFHLEVBQUUsRUFBRXVCLEdBQUcsR0FBRyxFQUFFLEVBQUUzQixFQUFFLEdBQUcsQ0FBQyxFQUFFMkIsR0FBRyxHQUFHLENBQUMsRUFBRUUsRUFBRSxFQUFFdEYsRUFBRSxJQUFJLENBQUMsRUFBRW9GLEdBQUcsSUFBSSxDQUFDLEVBQUV2QixFQUFFLEdBQUcsRUFBRSxFQUFFQSxFQUFFLElBQUksQ0FBQyxFQUFFSixFQUFFLElBQUksQ0FBQyxFQUFFMkIsR0FBRyxJQUFJLENBQUMsRUFBRUksR0FBRyxFQUFFM0IsRUFBRSxJQUFJLEVBQUUsRUFBRXVCLEdBQUcsSUFBSSxFQUFFLEdBQUdwRixFQUFFb0UsRUFBRSxJQUFJLEVBQUVvQixHQUFHLEVBQUV4RixFQUFFLEdBQUcsQ0FBQyxFQUFFb0YsR0FBRyxHQUFHLENBQUMsRUFBRWhFLEVBQUUsRUFBRXBCLEVBQUUsR0FBRyxDQUFDLEVBQUVvRixHQUFHLEdBQUcsRUFBRSxFQUFFdkIsRUFBRSxHQUFHLENBQUMsRUFBRXVCLEdBQUcsR0FBRyxDQUFDLEVBQUUzQixFQUFFLEdBQUcsRUFBRSxFQUFFMkIsR0FBRyxHQUFHLEVBQUUsRUFBRUMsRUFBRSxFQUFFckYsRUFBRSxHQUFHLENBQUMsRUFBRW9GLEdBQUcsR0FBRyxDQUFDLEVBQUV2QixFQUFFLEdBQUcsRUFBRSxFQUFFQSxFQUFFLEdBQUcsQ0FBQyxFQUFFSixFQUFFLEdBQUcsQ0FBQyxFQUFFMkIsR0FBRyxHQUFHLENBQUMsRUFBRUUsRUFBRSxFQUFFdEYsRUFBRSxJQUFJLENBQUMsRUFBRW9GLEdBQUcsSUFBSSxDQUFDLEVBQUV2QixFQUFFLElBQUksQ0FBQyxFQUFFdUIsR0FBRyxJQUFJLENBQUMsRUFBRTNCLEVBQUUsSUFBSSxDQUFDLEVBQUUyQixHQUFHLElBQUksQ0FBQyxHQUFHcEYsRUFBRW9FLEVBQUUsSUFB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RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7O0VBRUE7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7O0VBRUE7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7O0VBRUE7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7O0VBRUE7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7O0VBRUE7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7O0VBRUE7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7O0VBRUE7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7O0VBRUE7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7O0VBRUE7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7O0VBRUE7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7O0VBRUE7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7O0VBRUE7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7O0VBRUE7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7O0VBRUE7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7O0VBRUE7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7O0VBRUE7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7O0VBRUE7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFD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LE1BQUlxRCxJQUFJOUIsR0FBRzZHO0FBQ1gsU0FBTzVHLE1BQU12QyxNQUFNb0UsS0FBSzZELEVBQUVsSixHQUFHaUIsQ0FBQyxHQUFHbUosSUFBSWpGLEVBQUV0RCxJQUFJd0QsR0FBRyxLQUFLLEVBQUVyRCxPQUFPLFlBQVksSUFBSTtJQUMxRWlCLE1BQU1tQztJQUNOaUYsZUFBZUQ7RUFDakI7QUFDRjtBQTdlQSxJQTZlR0UsS0FBSztFQUNObk0sY0FBY0M7RUFDZEMsc0JBQXNCQztFQUN0QkMsdUJBQXVCQztBQUN6QjtBQWpmQSxJQWlmRytMLEtBQXFCNUssdUJBQU93RyxPQUF1QnhHLHVCQUFPQyxlQUFlO0VBQzFFd0csV0FBVztFQUNYb0UsU0FBU0Y7RUFDVG5NLGNBQWNDO0VBQ2RDLHNCQUFzQkM7RUFDdEJDLHVCQUF1QkM7QUFDekIsR0FBRzZILE9BQU9DLGFBQWE7RUFBRWxHLE9BQU87QUFBUyxDQUFDLENBQUM7QUF2ZjNDLElBdWY4Q3FLLEtBQUs7RUFDakQsR0FBR3ZFO0VBQ0gsR0FBR3NDO0VBQ0gsR0FBRytCO0FBQ0w7IiwKICAibmFtZXMiOiBbImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAiViIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJnbG9iYWxUaGlzIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImdsb2JhbFRoaXMiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZ2xvYmFsVGhpcyIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJnbG9iYWxUaGlzIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgIlYiLCAiUCIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJnbG9iYWxUaGlzIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImdsb2JhbFRoaXMiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZ2xvYmFsVGhpcyIsICJTeW1ib2wiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZ2xvYmFsVGhpcyIsICJkb2N1bWVudCIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIk8iLCAiUCIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIk8iLCAiUCIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJnbG9iYWxUaGlzIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImdsb2JhbFRoaXMiLCAiVHlwZUVycm9yIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgIk8iLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAieCIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJPIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgIk8iLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJPIiwgImV4cG9ydHMiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZ2xvYmFsVGhpcyIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJGIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgIk8iLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiTyIsICJleHBvcnRzIiwgIk8iLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiYWN0aXZlWERvY3VtZW50IiwgIk8iLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiJCIsICJnbG9iYWxUaGlzIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgIiQiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiTyIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICIkIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgIiQiLCAiQ2hpbmVzZURheXNfZXhwb3J0cyIsICJfX2V4cG9ydCIsICJmaW5kV29ya2RheSIsICJ6IiwgImdldERheURldGFpbCIsICJVIiwgImdldEhvbGlkYXlzSW5SYW5nZSIsICJXIiwgImdldEx1bmFyRGF0ZSIsICJPIiwgImdldEx1bmFyRGF0ZXNJblJhbmdlIiwgIkUiLCAiZ2V0U29sYXJEYXRlRnJvbUx1bmFyIiwgIlIiLCAiZ2V0U29sYXJUZXJtRGF0ZSIsICJTIiwgImdldFNvbGFyVGVybXMiLCAiSiIsICJnZXRTb2xhclRlcm1zSW5SYW5nZSIsICJLIiwgImdldFdvcmtkYXlzSW5SYW5nZSIsICJQIiwgImlzSG9saWRheSIsICJOIiwgImlzSW5MaWV1IiwgInEiLCAiaXNXb3JrZGF5IiwgImYiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAiX190b0NvbW1vbkpTIiwgIngiLCAiT2JqZWN0IiwgImRlZmluZVByb3BlcnR5IiwgIkIiLCAiciIsICJ0IiwgImUiLCAiZW51bWVyYWJsZSIsICJjb25maWd1cmFibGUiLCAid3JpdGFibGUiLCAidmFsdWUiLCAiYyIsICJkIiwgImQyIiwgImNvbnN0cnVjdG9yIiwgIl9kYXRlIiwgIkRhdGUiLCAidG9EYXRlIiwgImlzTmFOIiwgImdldFRpbWUiLCAicmVwbGFjZSIsICJpc1ZhbGlkIiwgImRpZmYiLCAiYSIsICJzIiwgImdldEZ1bGxZZWFyIiwgImdldE1vbnRoIiwgIk1hdGgiLCAiZmxvb3IiLCAic3RhcnRPZiIsICJzZXRNb250aCIsICJzZXREYXRlIiwgInNldEhvdXJzIiwgImVuZE9mIiwgImdldERhdGUiLCAiYWRkIiwgInNldEZ1bGxZZWFyIiwgInN1YnRyYWN0IiwgImZvcm1hdCIsICJZWVlZIiwgIk1NIiwgInRvU3RyaW5nIiwgInBhZFN0YXJ0IiwgIkREIiwgIkhIIiwgImdldEhvdXJzIiwgIm1tIiwgImdldE1pbnV0ZXMiLCAic3MiLCAiZ2V0U2Vjb25kcyIsICJkZGRkIiwgImRheXNPZldlZWsiLCAiZ2V0RGF5IiwgInllYXIiLCAibW9udGgiLCAiZGF0ZSIsICJkYXkiLCAiaXNCZWZvcmUiLCAiaXNBZnRlciIsICJpc1NhbWUiLCAiaXNCZXR3ZWVuIiwgImkiLCAibyIsICJNIiwgImgiLCAidyIsICJEIiwgIkFycmF5IiwgImZyb20iLCAibGVuZ3RoIiwgIkEiLCAiQyIsICJ5IiwgImRheURldGFpbHMiLCAiZ2V0SG9saWRheURheXMiLCAiX2kiLCAiX09iamVjdCRlbnRyaWVzIiwgImVudHJpZXMiLCAicGFyc2VJbnQiLCAibWFyayIsICJob2xpZGF5IiwgInNhdmUiLCAiRXJyb3IiLCAiZGF5VHlwZSIsICJjb25jYXQiLCAiaG9saWRheXMiLCAid29ya2RheXMiLCAiaW5MaWV1RGF5cyIsICJ0byIsICJsIiwgIm4iLCAiXyIsICJueSIsICJtIiwgImoiLCAiZyIsICJwIiwgIkkiLCAidSIsICJtYXAiLCAid29yayIsICJuYW1lIiwgImZpbHRlciIsICJhYnMiLCAiViIsICJmcmVlemUiLCAiX19wcm90b19fIiwgIlN5bWJvbCIsICJ0b1N0cmluZ1RhZyIsICJaIiwgInRoZV9iZWdpbm5pbmdfb2Zfc3ByaW5nIiwgInJhaW5fd2F0ZXIiLCAidGhlX3dha2luZ19vZl9pbnNlY3RzIiwgInRoZV9zcHJpbmdfZXF1aW5veCIsICJwdXJlX2JyaWdodG5lc3MiLCAiZ3JhaW5fcmFpbiIsICJ0aGVfYmVnaW5uaW5nX29mX3N1bW1lciIsICJsZXNzZXJfZnVsbG5lc3Nfb2ZfZ3JhaW4iLCAiZ3JhaW5faW5fYmVhcmQiLCAidGhlX3N1bW1lcl9zb2xzdGljZSIsICJsZXNzZXJfaGVhdCIsICJncmVhdGVyX2hlYXQiLCAidGhlX2JlZ2lubmluZ19vZl9hdXR1bW4iLCAidGhlX2VuZF9vZl9oZWF0IiwgIndoaXRlX2RldyIsICJ0aGVfYXV0dW1uX2VxdWlub3giLCAiY29kZV9kZXciLCAiZnJvc3RfZGVzY2VudCIsICJ0aGVfYmVnaW5uaW5nX29mX3dpbnRlciIsICJsZXNzZXJfc25vdyIsICJncmVhdGVyX3Nub3ciLCAidGhlX3dpbnRlcl9zb2xzdGljZSIsICJsZXNzZXJfY29sZCIsICJncmVhdGVyX2NvbGQiLCAiVCIsICJHIiwgInYiLCAiaW5jbHVkZXMiLCAiZm9yRWFjaCIsICJwdXNoIiwgInRlcm0iLCAiaW5kZXgiLCAiUSIsICIkIiwgIlgiLCAidHQiLCAiZXQiLCAicnQiLCAiSCIsICJGIiwgImsiLCAiWSIsICJiIiwgImF0IiwgIm90IiwgImZpbGwiLCAibHVuYXJZZWFyIiwgImx1bmFyTW9uIiwgImx1bmFyRGF5IiwgImlzTGVhcCIsICJ6b2RpYWMiLCAieWVhckN5bCIsICJtb25DeWwiLCAiZGF5Q3lsIiwgImx1bmFyWWVhckNOIiwgInNwbGl0IiwgIk51bWJlciIsICJqb2luIiwgImx1bmFyTW9uQ04iLCAibHVuYXJEYXlDTiIsICJMIiwgImxlYXBNb250aERhdGUiLCAibnQiLCAic3QiLCAiZGVmYXVsdCIsICJsdCJdCn0K

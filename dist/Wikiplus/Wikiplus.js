/**
 * SPDX-License-Identifier: CC-BY-SA-4.0 OR Apache-2.0
 * _addText: '{{Gadget Header|title=Wikiplus|license=CC-BY-SA-4.0|license2=Apache-2.0}}'
 *
 * Wikiplus
 *
 * @base {@link https://github.com/Wikiplus/Wikiplus}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/Wikiplus}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/Wikiplus/}
 * @author Eridanus Sora (妹空酱)
 * @license CC-BY-SA-4.0 {@link https://www.qiuwenbaike.cn/wiki/H:CC-BY-SA-4.0} OR Apache-2.0 {@link http://www.apache.org/licenses/LICENSE-2.0}
 */

/**
 * Copyright 2014-2024 Eridanus Sora (妹空酱)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
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
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/global-this.js"(exports, module2) {
    "use strict";
    var check = function(it) {
      return it && it.Math === Math && it;
    };
    module2.exports = // eslint-disable-next-line es/no-global-this -- safe
    check(typeof globalThis == "object" && globalThis) || check(typeof window == "object" && window) || // eslint-disable-next-line no-restricted-globals -- safe
    check(typeof self == "object" && self) || check(typeof global == "object" && global) || check(typeof exports == "object" && exports) || // eslint-disable-next-line no-new-func -- fallback
    /* @__PURE__ */ function() {
      return this;
    }() || Function("return this")();
  }
});

// node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/fails.js
var require_fails = __commonJS({
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/fails.js"(exports, module2) {
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
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/descriptors.js"(exports, module2) {
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
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/function-bind-native.js"(exports, module2) {
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
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/function-call.js"(exports, module2) {
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
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/object-property-is-enumerable.js"(exports) {
    "use strict";
    var $propertyIsEnumerable = {}.propertyIsEnumerable;
    var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({ 1: 2 }, 1);
    exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
      var descriptor = getOwnPropertyDescriptor(this, V);
      return !!descriptor && descriptor.enumerable;
    } : $propertyIsEnumerable;
  }
});

// node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/create-property-descriptor.js
var require_create_property_descriptor = __commonJS({
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/create-property-descriptor.js"(exports, module2) {
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
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/function-uncurry-this.js"(exports, module2) {
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
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/classof-raw.js"(exports, module2) {
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
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/indexed-object.js"(exports, module2) {
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
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/is-null-or-undefined.js"(exports, module2) {
    "use strict";
    module2.exports = function(it) {
      return it === null || it === void 0;
    };
  }
});

// node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/require-object-coercible.js
var require_require_object_coercible = __commonJS({
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/require-object-coercible.js"(exports, module2) {
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
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/to-indexed-object.js"(exports, module2) {
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
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/is-callable.js"(exports, module2) {
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
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/is-object.js"(exports, module2) {
    "use strict";
    var isCallable = require_is_callable();
    module2.exports = function(it) {
      return typeof it == "object" ? it !== null : isCallable(it);
    };
  }
});

// node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/get-built-in.js
var require_get_built_in = __commonJS({
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/get-built-in.js"(exports, module2) {
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
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/object-is-prototype-of.js"(exports, module2) {
    "use strict";
    var uncurryThis = require_function_uncurry_this();
    module2.exports = uncurryThis({}.isPrototypeOf);
  }
});

// node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/environment-user-agent.js
var require_environment_user_agent = __commonJS({
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/environment-user-agent.js"(exports, module2) {
    "use strict";
    var globalThis2 = require_global_this();
    var navigator2 = globalThis2.navigator;
    var userAgent = navigator2 && navigator2.userAgent;
    module2.exports = userAgent ? String(userAgent) : "";
  }
});

// node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/environment-v8-version.js
var require_environment_v8_version = __commonJS({
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/environment-v8-version.js"(exports, module2) {
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
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/symbol-constructor-detection.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/use-symbol-as-uid.js
var require_use_symbol_as_uid = __commonJS({
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/use-symbol-as-uid.js"(exports, module2) {
    "use strict";
    var NATIVE_SYMBOL = require_symbol_constructor_detection();
    module2.exports = NATIVE_SYMBOL && !Symbol.sham && typeof Symbol.iterator == "symbol";
  }
});

// node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/is-symbol.js
var require_is_symbol = __commonJS({
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/is-symbol.js"(exports, module2) {
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
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/try-to-string.js"(exports, module2) {
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
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/a-callable.js"(exports, module2) {
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
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/get-method.js"(exports, module2) {
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
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/ordinary-to-primitive.js"(exports, module2) {
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
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/is-pure.js"(exports, module2) {
    "use strict";
    module2.exports = false;
  }
});

// node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/define-global-property.js
var require_define_global_property = __commonJS({
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/define-global-property.js"(exports, module2) {
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
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/shared-store.js"(exports, module2) {
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
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/shared.js"(exports, module2) {
    "use strict";
    var store = require_shared_store();
    module2.exports = function(key, value) {
      return store[key] || (store[key] = value || {});
    };
  }
});

// node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/to-object.js
var require_to_object = __commonJS({
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/to-object.js"(exports, module2) {
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
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/has-own-property.js"(exports, module2) {
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
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/uid.js"(exports, module2) {
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
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/well-known-symbol.js"(exports, module2) {
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
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/to-primitive.js"(exports, module2) {
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
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/to-property-key.js"(exports, module2) {
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
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/document-create-element.js"(exports, module2) {
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
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/ie8-dom-define.js"(exports, module2) {
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
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/object-get-own-property-descriptor.js"(exports) {
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
    exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
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
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/v8-prototype-define-bug.js"(exports, module2) {
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
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/an-object.js"(exports, module2) {
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
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/object-define-property.js"(exports) {
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
    exports.f = DESCRIPTORS ? V8_PROTOTYPE_DEFINE_BUG ? function defineProperty(O, P, Attributes) {
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
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/create-non-enumerable-property.js"(exports, module2) {
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
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/function-name.js"(exports, module2) {
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
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/inspect-source.js"(exports, module2) {
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
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/weak-map-basic-detection.js"(exports, module2) {
    "use strict";
    var globalThis2 = require_global_this();
    var isCallable = require_is_callable();
    var WeakMap = globalThis2.WeakMap;
    module2.exports = isCallable(WeakMap) && /native code/.test(String(WeakMap));
  }
});

// node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/shared-key.js
var require_shared_key = __commonJS({
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/shared-key.js"(exports, module2) {
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
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/hidden-keys.js"(exports, module2) {
    "use strict";
    module2.exports = {};
  }
});

// node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/internal-state.js
var require_internal_state = __commonJS({
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/internal-state.js"(exports, module2) {
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
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/make-built-in.js"(exports, module2) {
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
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/define-built-in.js"(exports, module2) {
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
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/math-trunc.js"(exports, module2) {
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
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/to-integer-or-infinity.js"(exports, module2) {
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
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/to-absolute-index.js"(exports, module2) {
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
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/to-length.js"(exports, module2) {
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
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/length-of-array-like.js"(exports, module2) {
    "use strict";
    var toLength = require_to_length();
    module2.exports = function(obj) {
      return toLength(obj.length);
    };
  }
});

// node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/array-includes.js
var require_array_includes = __commonJS({
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/array-includes.js"(exports, module2) {
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
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/object-keys-internal.js"(exports, module2) {
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
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/enum-bug-keys.js"(exports, module2) {
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
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/object-get-own-property-names.js"(exports) {
    "use strict";
    var internalObjectKeys = require_object_keys_internal();
    var enumBugKeys = require_enum_bug_keys();
    var hiddenKeys = enumBugKeys.concat("length", "prototype");
    exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
      return internalObjectKeys(O, hiddenKeys);
    };
  }
});

// node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/object-get-own-property-symbols.js
var require_object_get_own_property_symbols = __commonJS({
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/object-get-own-property-symbols.js"(exports) {
    "use strict";
    exports.f = Object.getOwnPropertySymbols;
  }
});

// node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/own-keys.js
var require_own_keys = __commonJS({
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/own-keys.js"(exports, module2) {
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
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/copy-constructor-properties.js"(exports, module2) {
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
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/is-forced.js"(exports, module2) {
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
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/export.js"(exports, module2) {
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
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/is-array.js"(exports, module2) {
    "use strict";
    var classof = require_classof_raw();
    module2.exports = Array.isArray || function isArray(argument) {
      return classof(argument) === "Array";
    };
  }
});

// node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/to-string-tag-support.js
var require_to_string_tag_support = __commonJS({
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/to-string-tag-support.js"(exports, module2) {
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
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/classof.js"(exports, module2) {
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
      var O, tag, result;
      return it === void 0 ? "Undefined" : it === null ? "Null" : typeof (tag = tryGet(O = $Object(it), TO_STRING_TAG)) == "string" ? tag : CORRECT_ARGUMENTS ? classofRaw(O) : (result = classofRaw(O)) === "Object" && isCallable(O.callee) ? "Arguments" : result;
    };
  }
});

// node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/to-string.js
var require_to_string = __commonJS({
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/to-string.js"(exports, module2) {
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
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/create-property.js"(exports, module2) {
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
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/parse-json-string.js"(exports, module2) {
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
    var $2 = require_export();
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
    var Node = function(value, end, source, nodes) {
      this.value = value;
      this.end = end;
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
      node: function(type, value, start, end, nodes) {
        return new Node(value, end, type ? null : slice(this.source, start, end), nodes);
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
    $2({ target: "JSON", stat: true, forced: NO_SOURCE_SUPPORT }, {
      parse: function parse(text, reviver) {
        return PROPER_BASE_PARSE && !isCallable(reviver) ? nativeParse(text) : $parse(text, reviver);
      }
    });
  }
});

// node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/function-apply.js
var require_function_apply = __commonJS({
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/function-apply.js"(exports, module2) {
    "use strict";
    var NATIVE_BIND = require_function_bind_native();
    var FunctionPrototype = Function.prototype;
    var apply = FunctionPrototype.apply;
    var call = FunctionPrototype.call;
    module2.exports = typeof Reflect == "object" && Reflect.apply || (NATIVE_BIND ? call.bind(apply) : function() {
      return call.apply(apply, arguments);
    });
  }
});

// node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/is-raw-json.js
var require_is_raw_json = __commonJS({
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/is-raw-json.js"(exports, module2) {
    "use strict";
    var isObject = require_is_object();
    var getInternalState = require_internal_state().get;
    module2.exports = function isRawJSON(O) {
      if (!isObject(O)) return false;
      var state = getInternalState(O);
      return !!state && state.type === "RawJSON";
    };
  }
});

// node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/array-slice.js
var require_array_slice = __commonJS({
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/array-slice.js"(exports, module2) {
    "use strict";
    var uncurryThis = require_function_uncurry_this();
    module2.exports = uncurryThis([].slice);
  }
});

// node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/native-raw-json.js
var require_native_raw_json = __commonJS({
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/native-raw-json.js"(exports, module2) {
    "use strict";
    var fails = require_fails();
    module2.exports = !fails(function() {
      var unsafeInt = "9007199254740993";
      var raw = JSON.rawJSON(unsafeInt);
      return !JSON.isRawJSON(raw) || JSON.stringify(raw) !== unsafeInt;
    });
  }
});

// node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/modules/es.json.stringify.js
var require_es_json_stringify = __commonJS({
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/modules/es.json.stringify.js"() {
    "use strict";
    var $2 = require_export();
    var getBuiltIn = require_get_built_in();
    var apply = require_function_apply();
    var call = require_function_call();
    var uncurryThis = require_function_uncurry_this();
    var fails = require_fails();
    var isArray = require_is_array();
    var isCallable = require_is_callable();
    var isRawJSON = require_is_raw_json();
    var isSymbol = require_is_symbol();
    var classof = require_classof_raw();
    var toString = require_to_string();
    var arraySlice = require_array_slice();
    var parseJSONString = require_parse_json_string();
    var uid = require_uid();
    var NATIVE_SYMBOL = require_symbol_constructor_detection();
    var NATIVE_RAW_JSON = require_native_raw_json();
    var $String = String;
    var $stringify = getBuiltIn("JSON", "stringify");
    var exec = uncurryThis(/./.exec);
    var charAt = uncurryThis("".charAt);
    var charCodeAt = uncurryThis("".charCodeAt);
    var replace = uncurryThis("".replace);
    var slice = uncurryThis("".slice);
    var push = uncurryThis([].push);
    var numberToString = uncurryThis(1.1.toString);
    var surrogates = /[\uD800-\uDFFF]/g;
    var leadingSurrogates = /^[\uD800-\uDBFF]$/;
    var trailingSurrogates = /^[\uDC00-\uDFFF]$/;
    var MARK = uid();
    var MARK_LENGTH = MARK.length;
    var WRONG_SYMBOLS_CONVERSION = !NATIVE_SYMBOL || fails(function() {
      var symbol = getBuiltIn("Symbol")("stringify detection");
      return $stringify([symbol]) !== "[null]" || $stringify({ a: symbol }) !== "{}" || $stringify(Object(symbol)) !== "{}";
    });
    var ILL_FORMED_UNICODE = fails(function() {
      return $stringify("\uDF06\uD834") !== '"\\udf06\\ud834"' || $stringify("\uDEAD") !== '"\\udead"';
    });
    var stringifyWithProperSymbolsConversion = WRONG_SYMBOLS_CONVERSION ? function(it, replacer) {
      var args = arraySlice(arguments);
      var $replacer = getReplacerFunction(replacer);
      if (!isCallable($replacer) && (it === void 0 || isSymbol(it))) return;
      args[1] = function(key, value) {
        if (isCallable($replacer)) value = call($replacer, this, $String(key), value);
        if (!isSymbol(value)) return value;
      };
      return apply($stringify, null, args);
    } : $stringify;
    var fixIllFormedJSON = function(match, offset, string) {
      var prev = charAt(string, offset - 1);
      var next = charAt(string, offset + 1);
      if (exec(leadingSurrogates, match) && !exec(trailingSurrogates, next) || exec(trailingSurrogates, match) && !exec(leadingSurrogates, prev)) {
        return "\\u" + numberToString(charCodeAt(match, 0), 16);
      }
      return match;
    };
    var getReplacerFunction = function(replacer) {
      if (isCallable(replacer)) return replacer;
      if (!isArray(replacer)) return;
      var rawLength = replacer.length;
      var keys = [];
      for (var i = 0; i < rawLength; i++) {
        var element = replacer[i];
        if (typeof element == "string") push(keys, element);
        else if (typeof element == "number" || classof(element) === "Number" || classof(element) === "String") push(keys, toString(element));
      }
      var keysLength = keys.length;
      var root = true;
      return function(key, value) {
        if (root) {
          root = false;
          return value;
        }
        if (isArray(this)) return value;
        for (var j = 0; j < keysLength; j++) if (keys[j] === key) return value;
      };
    };
    if ($stringify) $2({ target: "JSON", stat: true, arity: 3, forced: WRONG_SYMBOLS_CONVERSION || ILL_FORMED_UNICODE || !NATIVE_RAW_JSON }, {
      stringify: function stringify(text, replacer, space) {
        var replacerFunction = getReplacerFunction(replacer);
        var rawStrings = [];
        var json = stringifyWithProperSymbolsConversion(text, function(key, value) {
          var v = isCallable(replacerFunction) ? call(replacerFunction, this, $String(key), value) : value;
          return !NATIVE_RAW_JSON && isRawJSON(v) ? MARK + (push(rawStrings, v.rawJSON) - 1) : v;
        }, space);
        if (typeof json != "string") return json;
        if (ILL_FORMED_UNICODE) json = replace(json, surrogates, fixIllFormedJSON);
        if (NATIVE_RAW_JSON) return json;
        var result = "";
        var length = json.length;
        for (var i = 0; i < length; i++) {
          var chr = charAt(json, i);
          if (chr === '"') {
            var end = parseJSONString(json, ++i).end - 1;
            var string = slice(json, i, end);
            result += slice(string, 0, MARK_LENGTH) === MARK ? rawStrings[slice(string, MARK_LENGTH)] : '"' + string + '"';
            i = end;
          } else result += chr;
        }
        return result;
      }
    });
  }
});

// dist/Wikiplus/Wikiplus.js
require_es_json_parse();
require_es_json_stringify();
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
var __getOwnPropNames2 = Object.getOwnPropertyNames;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames2(fn)[0]])(fn = 0)), res;
};
//! src/Wikiplus/modules/utils/constants.js
var Constants;
var constants_default;
var init_constants = __esm({
  "src/Wikiplus/modules/utils/constants.js"() {
    "use strict";
    Constants = class {
      version = "4.1.0";
      get isArticle() {
        return window.mw.config.get("wgIsArticle");
      }
      get currentPageName() {
        return window.mw.config.get("wgPageName").replace(/ /g, "_");
      }
      get articleId() {
        return window.mw.config.get("wgArticleId");
      }
      get revisionId() {
        return window.mw.config.get("wgRevisionId");
      }
      get latestRevisionId() {
        return window.mw.config.get("wgCurRevisionId");
      }
      get articlePath() {
        return window.mw.config.get("wgArticlePath");
      }
      get scriptPath() {
        return window.mw.config.get("wgScriptPath");
      }
      get action() {
        return window.mw.config.get("wgAction");
      }
      get skin() {
        return window.mw.config.get("skin");
      }
      get userGroups() {
        return window.mw.config.get("wgUserGroups");
      }
      get wikiId() {
        return window.mw.config.get("wgWikiID");
      }
      userAgent = "Qiuwen/1.1 Wikiplus/".concat(this.version, " (").concat(this.wikiId, ")");
    };
    constants_default = new Constants();
  }
});
//! src/Wikiplus/modules/utils/requests.js
var Requests;
var requests_default;
var init_requests = __esm({
  "src/Wikiplus/modules/utils/requests.js"() {
    "use strict";
    init_constants();
    Requests = {
      base: "".concat(location.protocol, "//").concat(location.host).concat(constants_default.scriptPath, "/api.php"),
      get(query) {
        return _asyncToGenerator(function* () {
          const url = new URL(Requests.base);
          for (var _i = 0, _Object$keys = Object.keys(query); _i < _Object$keys.length; _i++) {
            const key = _Object$keys[_i];
            url.searchParams.append(key, query[key]);
          }
          const response = yield fetch(url, {
            credentials: "same-origin",
            headers: {
              "Api-User-Agent": constants_default.userAgent
            }
          });
          return yield response.json();
        })();
      },
      post(payload) {
        return _asyncToGenerator(function* () {
          const url = new URL(Requests.base);
          const form = new FormData();
          for (var _i2 = 0, _Object$entries = Object.entries(payload); _i2 < _Object$entries.length; _i2++) {
            const [key, value] = _Object$entries[_i2];
            form.append(key, value);
          }
          const response = yield fetch(url, {
            method: "POST",
            body: form,
            credentials: "same-origin",
            headers: {
              "Api-User-Agent": constants_default.userAgent
            }
          });
          return yield response.json();
        })();
      }
    };
    requests_default = Requests;
  }
});
//! src/Wikiplus/modules/utils/i18n.js
var I18n;
var i18n_default;
var init_i18n = __esm({
  "src/Wikiplus/modules/utils/i18n.js"() {
    "use strict";
    I18n = class {
      language;
      i18nData = {};
      sessionUpdateLog = [];
      constructor() {
        let language;
        try {
          language = JSON.parse(localStorage["Wikiplus_Settings"])["language"] || navigator.language.toLowerCase();
        } catch {
          language = (navigator.language || navigator.browserLanguage).replace(/han[st]-?/i, "").toLowerCase();
        }
        this.language = language;
        try {
          const i18nCache = JSON.parse(localStorage.getItem("Wikiplus_i18nCache"));
          for (var _i3 = 0, _Object$keys2 = Object.keys(i18nCache); _i3 < _Object$keys2.length; _i3++) {
            const key = _Object$keys2[_i3];
            this.i18nData[key] = i18nCache[key];
          }
        } catch {
          localStorage.setItem("Wikiplus_i18nCache", "{}");
        }
      }
      translate(key, placeholders = []) {
        let result = "";
        if (this.language in this.i18nData) {
          if (key in this.i18nData[this.language]) {
            result = this.i18nData[this.language][key];
          } else {
            this.loadLanguage(this.language);
            if (key in this.i18nData["en-us"]) {
              result = this.i18nData["en-us"][key];
            } else {
              result = key;
            }
          }
        } else {
          this.loadLanguage(this.language);
        }
        if (placeholders.length > 0) {
          var _iterator = _createForOfIteratorHelper(placeholders.entries()), _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done; ) {
              const [index, placeholder] = _step.value;
              result = result.replace("$".concat(index + 1), placeholder);
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        }
        return result;
      }
      loadLanguage(language) {
        var _this = this;
        return _asyncToGenerator(function* () {
          if (_this.sessionUpdateLog.includes(language)) {
            return;
          }
          try {
            const response = yield (yield fetch("https://gitcdn.qiuwen.net.cn/InterfaceAdmin/Wikiplus/raw/branch/dev/languages/".concat(language, ".json"))).json();
            const nowVersion = localStorage.getItem("Wikiplus_LanguageVersion") || "000";
            _this.sessionUpdateLog.push(language);
            if (response.__version !== nowVersion || !(language in _this.i18nData)) {
              console.info("Update ".concat(language, " support to version ").concat(response.__version));
              _this.i18nData[language] = response;
              localStorage.setItem("Wikiplus_i18nCache", JSON.stringify(_this.i18nData));
            }
          } catch {
          }
        })();
      }
    };
    i18n_default = new I18n();
  }
});
//! src/Wikiplus/modules/utils/log.js
var WikiplusError;
var Log;
var log_default;
var init_log = __esm({
  "src/Wikiplus/modules/utils/log.js"() {
    "use strict";
    init_i18n();
    WikiplusError = class extends Error {
      constructor(message, code) {
        super(message);
        this.code = code;
      }
    };
    Log = {
      debug(message = "") {
        console.debug("[Wikiplus-DEBUG] ".concat(message));
      },
      info(message = "") {
        console.info("[Wikiplus-INFO] ".concat(message));
      },
      error(errorCode, payloads = []) {
        let template = i18n_default.translate(errorCode);
        if (payloads.length > 0) {
          var _iterator2 = _createForOfIteratorHelper(payloads.entries()), _step2;
          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
              const [i, v] = _step2.value;
              template = template.replace(new RegExp("\\".concat(i + 1), "ig"), v);
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
        }
        console.error("[Wikiplus-ERROR] ".concat(template));
        throw new WikiplusError("".concat(template), errorCode);
      }
    };
    log_default = Log;
  }
});
//! src/Wikiplus/modules/services/wiki.js
var Wiki;
var wiki_default;
var init_wiki = __esm({
  "src/Wikiplus/modules/services/wiki.js"() {
    "use strict";
    init_requests();
    init_log();
    init_i18n();
    Wiki = class {
      pageInfoCache = {};
      /**
       * 获得 Edit Token
       * Get Edit Token
       *
       * @returns {Promise<string>}
       */
      getEditToken() {
        return _asyncToGenerator(function* () {
          const response = yield requests_default.get({
            action: "query",
            meta: "tokens",
            format: "json"
          });
          if (response.query && response.query.tokens && response.query.tokens.csrftoken && response.query.tokens.csrftoken !== "+\\") {
            return response.query.tokens.csrftoken;
          }
          return log_default.error("fail_to_get_edittoken");
        })();
      }
      /**
       * 获得页面上一版本时间戳
       * Get the timestamp of the last revision of page specified.
       *
       * @param {params.string} title 页面名 / Pagename
       * @param {params.revisionId} revisionId 修订版本号 / Revision ID
       * @param {params.contentmodel} contentmodel 内容模型 / Content Model
       * @returns {Promise<string>}
       */
      getPageInfo(_x) {
        var _this2 = this;
        return _asyncToGenerator(function* ({
          title,
          revisionId
        }) {
          try {
            const params = {
              action: "query",
              prop: "revisions|info",
              rvprop: "timestamp|ids",
              format: "json"
            };
            if (revisionId) {
              params.revids = revisionId;
            } else if (title) {
              if (_this2.pageInfoCache[title]) {
                return {
                  timestamp: _this2.pageInfoCache[title].timestamp,
                  revisionId: _this2.pageInfoCache[title].revid,
                  contentmodel: _this2.pageInfoCache[title].contentmodel
                };
              }
              params.titles = title;
            }
            const response = yield requests_default.get(params);
            if (response.query && response.query.pages) {
              const pageKey = Object.keys(response.query.pages)[0];
              const contentmodel = response.query.pages[pageKey].contentmodel;
              if (pageKey === "-1") {
                _this2.pageInfoCache[title] = {
                  contentmodel
                };
                return {
                  contentmodel
                };
              }
              const pageInfo = response.query.pages[pageKey].revisions[0];
              if (title) {
                _this2.pageInfoCache[title] = {
                  ...pageInfo,
                  contentmodel
                };
              }
              return {
                timestamp: pageInfo.timestamp,
                revisionId: pageInfo.revid,
                contentmodel
              };
            }
          } catch {
            log_default.error("fail_to_get_edittoken");
          }
        }).apply(this, arguments);
      }
      /**
       * 获得页面的 Wikitext
       * Get wikitext of the page.
       *
       * @param {string} title title
       * @param {Object} config
       * @param {string} config.revisionId 版本号
       * @param {string} config.section 段落号
       * @return {Promise<string>} wikitext内容
       */
      getWikiText(_x2) {
        return _asyncToGenerator(function* ({
          section,
          revisionId
        }) {
          try {
            const params = {
              action: "query",
              prop: "revisions",
              rvprop: "content",
              format: "json",
              revids: revisionId
            };
            if (revisionId) {
              params.revids = revisionId;
            }
            if (section) {
              params.rvsection = section;
            }
            const response = yield requests_default.get(params);
            if (response.query && response.query.pages) {
              if (Object.keys(response.query.pages)[0] === "-1") {
                return "";
              }
              const pageInfo = response.query.pages[Object.keys(response.query.pages)[0]].revisions[0];
              return pageInfo["*"];
            }
          } catch {
            log_default.error("fail_to_get_wikitext");
          }
        }).apply(this, arguments);
      }
      /**
       * 解析 Wikitext
       *
       * @param {string} wikitext wikitext
       * @param {string} title 页面标题
       * @param {Object} config 设置
       * @return {Promise<string>} 解析结果 HTML
       */
      parseWikiText(_x3) {
        return _asyncToGenerator(function* (wikitext, title = "", config = {}) {
          try {
            const response = yield requests_default.post({
              format: "json",
              action: "parse",
              text: wikitext,
              title,
              pst: "true"
            });
            if (response.parse && response.parse.text) {
              return response.parse.text["*"];
            }
          } catch {
            log_default.error("cant_parse_wikitext");
          }
        }).apply(this, arguments);
      }
      /**
       * 编辑页面
       *
       * @param root0
       * @param root0.title
       * @param root0.content
       * @param root0.editToken
       * @param root0.timestamp
       * @param root0.config
       * @param root0.additionalConfig
       */
      edit() {
        return _asyncToGenerator(function* ({
          title,
          content,
          editToken,
          timestamp,
          config = {},
          additionalConfig = {}
        } = {}) {
          let response;
          try {
            response = yield requests_default.post({
              action: "edit",
              format: "json",
              text: content,
              title,
              token: editToken,
              ...timestamp ? {
                basetimestamp: timestamp
              } : {},
              ...config,
              ...additionalConfig
            });
          } catch {
            log_default.error("network_edit_error");
          }
          if (response.edit) {
            if (response.edit.result === "Success") {
              return true;
            }
            if (response.edit.code) {
              throw new Error("\n                        ".concat(i18n_default.translate("hit_abusefilter"), ":").concat(response.edit.info.replace("/Hit AbuseFilter: /ig", ""), '\n                        <br>\n                        <div style="font-size: smaller;">').concat(response.edit.warning, "</div>\n                    "));
            } else {
              log_default.error("unknown_edit_error");
            }
          } else if (response.error && response.error.code) {
            log_default.error(response.error.code);
          } else if (response.code) {
            log_default.error(response.code);
          } else {
            log_default.error("unknown_edit_error");
          }
        }).apply(this, arguments);
      }
      /**
       * 获得指定页面最新修订编号
       * Get latest revisionId of a page.
       *
       * @param {*} title
       */
      getLatestRevisionIdForPage(title) {
        var _this3 = this;
        return _asyncToGenerator(function* () {
          const {
            revisionId
          } = yield _this3.getPageInfo({
            title
          });
          return revisionId;
        })();
      }
    };
    wiki_default = new Wiki();
  }
});
//! src/Wikiplus/modules/core/page.js
var Page;
var page_default;
var init_page = __esm({
  "src/Wikiplus/modules/core/page.js"() {
    "use strict";
    init_wiki();
    init_log();
    Page = class {
      timestamp;
      editToken;
      title;
      revisionId;
      inited = false;
      isNewPage = false;
      contentmodel = "wikitext";
      sectionCache = {};
      /**
       * @param {params.title} 页面标题 Page Name (optional)
       * @param {params.revisionId} 页面修订编号 Revision Id
       * @param {params.contentmodel} 页面内容模型 Content Model
       */
      constructor({
        title,
        revisionId
      }) {
        this.title = title;
        this.revisionId = revisionId;
        this.isNewPage = !revisionId;
      }
      /**
       * 初始化 获得页面EditToken和初始TimeStamp
       * Initialization.
       *
       * @param {string} editToken (optional) 如果提供了editToken，将不会再获取
       */
      init() {
        var _this4 = this;
        return _asyncToGenerator(function* ({
          editToken = ""
        } = {}) {
          const promiseArr = [_this4.getTimestamp(), _this4.getContentModel()];
          if (!editToken) {
            promiseArr.push(_this4.getEditToken());
          }
          yield Promise.all(promiseArr);
          _this4.inited = true;
          log_default.info("Page initialization for ".concat(_this4.title, "#").concat(_this4.revisionId, " finished."));
        }).apply(this, arguments);
      }
      /**
       * 获得 EditToken
       * Get EditToken
       */
      getEditToken() {
        var _this5 = this;
        return _asyncToGenerator(function* () {
          yield mw.loader.using("mediawiki.user");
          if (mw.user.tokens.get("csrfToken") && mw.user.tokens.get("csrfToken") !== "+\\") {
            _this5.editToken = mw.user.tokens.get("csrfToken");
            return;
          }
          _this5.editToken = yield wiki_default.getEditToken();
        })();
      }
      /**
       * 获得编辑基准时间戳
       * Get Base Timestamp
       */
      getTimestamp() {
        var _this6 = this;
        return _asyncToGenerator(function* () {
          const {
            timestamp,
            revisionId
          } = yield wiki_default.getPageInfo({
            revisionId: _this6.revisionId,
            title: _this6.title
          });
          _this6.timestamp = timestamp;
          if (revisionId) {
            _this6.revisionId = revisionId;
            _this6.isNewPage = false;
          }
        })();
      }
      /**
       * 获得页面内容模型
       *
       * @param {Object} config
       * @param {string} config.revisionId
       */
      getContentModel() {
        var _this7 = this;
        return _asyncToGenerator(function* () {
          const {
            contentmodel
          } = yield wiki_default.getPageInfo({
            revisionId: _this7.revisionId,
            title: _this7.title
          });
          _this7.contentmodel = contentmodel || "wikitext";
        })();
      }
      /**
       * 获得 WikiText
       *
       * @param {Object} config
       * @param {string} config.section
       * @param {string} config.revisionId
       */
      getWikiText() {
        var _this8 = this;
        return _asyncToGenerator(function* ({
          section = ""
        } = {}) {
          const sec = section === -1 ? "" : section;
          if (_this8.sectionCache[sec]) {
            return _this8.sectionCache[sec];
          }
          const wikiText = yield wiki_default.getWikiText({
            section: sec,
            revisionId: _this8.revisionId
          });
          log_default.info("Wikitext of ".concat(_this8.title, "#").concat(section, " fetched."));
          _this8.sectionCache[sec] = wikiText;
          return wikiText;
        }).apply(this, arguments);
      }
      /**
       * 解析 WikiText
       *
       * @param {string} wikitext
       */
      parseWikiText(wikitext) {
        var _this9 = this;
        return _asyncToGenerator(function* () {
          return wiki_default.parseWikiText(wikitext, _this9.title);
        })();
      }
      /**
       * 编辑页面
       *
       * @param {*} config
       * @param payload
       */
      edit(payload) {
        var _this0 = this;
        return _asyncToGenerator(function* () {
          if (!_this0.editToken) {
            log_default.error("fail_to_get_edittoken");
            return;
          }
          if (!_this0.timestamp && !_this0.isNewPage) {
            log_default.error("fail_to_get_timestamp");
            return;
          }
          return wiki_default.edit({
            title: _this0.title,
            editToken: _this0.editToken,
            ..._this0.timestamp ? {
              timestamp: _this0.timestamp
            } : {},
            ...payload,
            additionalConfig: {
              ..._this0.isNewPage ? {
                createonly: _this0.isNewPage
              } : {}
            }
          });
        })();
      }
    };
    page_default = Page;
  }
});
//! src/Wikiplus/modules/core/notification.js
var Notification;
var notification_default;
var init_notification = __esm({
  "src/Wikiplus/modules/core/notification.js"() {
    "use strict";
    Notification = class {
      constructor() {
        this.init();
      }
      init() {
        $("body").append('<div id="MoeNotification"></div>');
      }
      display(text = "喵~", type = "success", callback = () => {
      }) {
        $("#MoeNotification").append($("<div>").addClass("MoeNotification-notice").addClass("MoeNotification-notice-".concat(type)).append("<span>".concat(text, "</span>")));
        $("#MoeNotification").find(".MoeNotification-notice").last().fadeIn(300);
        this.bind();
        this.clear();
        callback($("#MoeNotification").find(".MoeNotification-notice").last());
      }
      bind() {
        const self2 = this;
        $(".MoeNotification-notice").on("mouseover", function() {
          self2.slideLeft($(this));
        });
      }
      success(text, callback) {
        this.display(text, "success", callback);
      }
      warning(text, callback) {
        this.display(text, "warning", callback);
      }
      error(text, callback) {
        this.display(text, "error", callback);
      }
      clear() {
        if ($(".MoeNotification-notice").length >= 10) {
          $("#MoeNotification").children().first().fadeOut(150, function() {
            $(this).remove();
          });
          setTimeout(this.clear, 300);
        }
      }
      empty(f) {
        $(".MoeNotification-notice").each(function(i) {
          if (typeof f === "function") {
            const ele = $(this);
            setTimeout(() => {
              f(ele);
            }, 200 * i);
          } else {
            $(this).delay(i * 200).fadeOut("fast", function() {
              $(this).remove();
            });
          }
        });
      }
      slideLeft(ele, speed) {
        ele.css("position", "relative");
        ele.animate({
          left: "-200%"
        }, speed || 150, function() {
          $(this).fadeOut("fast", function() {
            $(this).remove();
          });
        });
      }
    };
    notification_default = new Notification();
  }
});
//! src/Wikiplus/modules/utils/sleep.js
var sleep;
var sleep_default;
var init_sleep = __esm({
  "src/Wikiplus/modules/utils/sleep.js"() {
    "use strict";
    sleep = (time) => {
      return new Promise((resolve) => {
        return setTimeout(resolve, time);
      });
    };
    sleep_default = sleep;
  }
});
//! src/Wikiplus/modules/utils/helpers.js
function parseQuery(url) {
  const reg = /(([^?&=]+)(?:=([^?&=]*))*)/g;
  const params = {};
  let match;
  while (match = reg.exec(url)) {
    try {
      params[match[2]] = decodeURIComponent(match[3]);
    } catch {
      params[match[2]] = match[3];
    }
  }
  return params;
}
var init_helpers = __esm({
  "src/Wikiplus/modules/utils/helpers.js"() {
    "use strict";
  }
});
//! src/Wikiplus/modules/core/ui.js
var UI;
var ui_default;
var init_ui = __esm({
  "src/Wikiplus/modules/core/ui.js"() {
    "use strict";
    init_constants();
    init_notification();
    init_i18n();
    init_log();
    init_sleep();
    init_helpers();
    UI = class {
      quickEditPanelVisible = false;
      scrollTop = 0;
      /**
       * 创建居中对话框
       *
       * @param {string} title 窗口标题
       * @param {string | JQuery<HTMLElement>} content 内容
       * @param {*} width 宽度
       * @param {*} callback 回调函数
       */
      createDialogBox(title = "Wikiplus", content = "", width = 600, callback = () => {
      }) {
        if ($(".Wikiplus-InterBox").length > 0) {
          $(".Wikiplus-InterBox").each(function() {
            $(this).remove();
          });
        }
        const clientWidth = window.innerWidth;
        const clientHeight = window.innerHeight;
        const dialogWidth = Math.min(clientWidth, width);
        const dialogBox = $("<div>").addClass("Wikiplus-InterBox").css({
          "margin-left": clientWidth / 2 - dialogWidth / 2,
          top: $(document).scrollTop() + clientHeight * 0.2,
          display: "none"
        }).append($("<div>").addClass("Wikiplus-InterBox-Header").html(title)).append($("<div>").addClass("Wikiplus-InterBox-Content").append(content)).append($("<span>").text("×").addClass("Wikiplus-InterBox-Close"));
        $("body").append(dialogBox);
        $(".Wikiplus-InterBox").width(dialogWidth);
        $(".Wikiplus-InterBox-Close").on("click", function() {
          $(this).parent().fadeOut("fast", function() {
            window.addEventListener("close", window.onbeforeunload = void 0);
            $(this).remove();
          });
        });
        const bindDragging = function(element) {
          element.mousedown((e) => {
            const baseX = e.clientX;
            const baseY = e.clientY;
            const baseOffsetX = element.parent().offset().left;
            const baseOffsetY = element.parent().offset().top;
            $(document).on("mousemove", (e2) => {
              element.parent().css({
                "margin-left": baseOffsetX + e2.clientX - baseX,
                top: baseOffsetY + e2.clientY - baseY
              });
            });
            $(document).on("mouseup", () => {
              element.unbind("mousedown");
              $(document).off("mousemove");
              $(document).off("mouseup");
              bindDragging(element);
            });
          });
        };
        bindDragging($(".Wikiplus-InterBox-Header"));
        $(".Wikiplus-InterBox").fadeIn(500);
        callback();
        return dialogBox;
      }
      /**
       * 在搜索框左侧「更多」菜单内添加按钮
       * Add a button in "More" menu (left of the search bar)
       *
       * @param {string} text 按钮名 Button text
       * @param {string} id 按钮id Button id
       * @return {JQuery<HTMLElement>} button
       */
      addFunctionButton(text, id) {
        let button;
        switch (constants_default.skin) {
          case "minerva":
            button = $("<li>").attr("id", id).addClass("toggle-list-item").append($("<a>").addClass("mw-ui-icon mw-ui-icon-before toggle-list-item__anchor").append($("<span>").attr("href", "javascript:void(0);").addClass("toggle-list-item__label").text(text)));
            break;
          case "moeskin":
            button = $("<li>").addClass("Wikiplus-More-Function-Button").attr("id", id).append($("<a>").attr("href", "javascript:void(0);").text(text));
            break;
          default:
            button = $("<li>").addClass("mw-list-item").addClass("vector-tab-noicon").attr("id", id).append($("<a>").attr("href", "javascript:void(0);").text(text));
        }
        if (constants_default.skin === "minerva" && $("#p-tb").length > 0) {
          $("#p-tb").append(button);
          return $("#".concat(id));
        } else if (constants_default.skin === "moeskin") {
          $(".more-actions-list").first().append(button);
          return $("#".concat(id));
        } else if ($("#p-cactions").length > 0) {
          $("#p-cactions ul").append(button);
          return $("#".concat(id));
        }
        log_default.info(i18n_default.translate("cant_add_funcbtn"));
      }
      /**
       * 插入快速重定向按钮
       *
       * @param {*} onClick
       */
      insertSimpleRedirectButton(onClick = () => {
      }) {
        const button = this.addFunctionButton(i18n_default.translate("redirect_from"), "Wikiplus-SR-Intro");
        if (button) {
          button.on("click", onClick);
        }
      }
      /**
       * 插入设置面板按钮
       *
       * @param {*} onClick
       */
      insertSettingsPanelButton(onClick = () => {
      }) {
        const button = this.addFunctionButton(i18n_default.translate("wikiplus_settings"), "Wikiplus-Settings-Intro");
        if (button) {
          button.on("click", onClick);
        }
      }
      /**
       * 插入顶部快速编辑按钮
       * Insert QuickEdit button besides page edit button.
       *
       * @param onClick
       */
      insertTopQuickEditEntry(onClick) {
        const topBtn = $("<li>").attr("id", "Wikiplus-Edit-TopBtn").attr("class", "mw-list-item");
        const topBtnLink = $("<a>").attr("href", "javascript:void(0)").text("".concat(i18n_default.translate("quickedit_topbtn")));
        topBtn.append(topBtnLink);
        switch (constants_default.skin) {
          case "minerva":
            topBtn.css({
              "align-items": "center",
              display: "flex"
            });
            topBtn.find("span").addClass("page-actions-menu__list-item");
            topBtn.find("a").addClass("mw-ui-icon mw-ui-icon-element mw-ui-icon-wikimedia-edit-base20 mw-ui-icon-with-label-desktop").css("vertical-align", "middle");
            break;
          case "vector-2022":
            topBtn.addClass("vector-tab-noicon");
            break;
          case "vector":
            topBtn.append($("<span>").append(topBtnLink));
            break;
          default:
        }
        $(topBtn).on("click", () => {
          onClick({
            sectionNumber: -1,
            targetPageName: constants_default.currentPageName
          });
        });
        if ($("#ca-edit").length > 0 && $("#Wikiplus-Edit-TopBtn").length === 0) {
          constants_default.skin === "minerva" ? $("#ca-edit").parent().after(topBtn) : $("#ca-edit").after(topBtn);
        }
      }
      /**
       * 插入段落快速编辑按钮
       * Insert QuickEdit buttons for each section.
       *
       * @param onClick
       */
      insertSectionQuickEditEntries(onClick = () => {
      }) {
        const sectionBtn = constants_default.skin === "minerva" ? $("<span>").append($("<a>").addClass("Wikiplus-Edit-SectionBtn mw-ui-icon mw-ui-icon-element mw-ui-icon-wikimedia-edit-base20 edit-page mw-ui-icon-flush-right").css("margin-left", "0.75em").attr("href", "javascript:void(0)").attr("title", i18n_default.translate("quickedit_sectionbtn"))) : $("<span>").append($("<span>").addClass("mw-editsection-divider").text(" | ")).append($("<a>").addClass("Wikiplus-Edit-SectionBtn").attr("href", "javascript:void(0)").text(i18n_default.translate("quickedit_sectionbtn")));
        $(".mw-editsection").each(function(i) {
          try {
            const editURL = $(this).find("a[href*='action=edit']").first().attr("href");
            const sectionNumber = editURL.match(/&[ve]*section\=([^&]+)/)[1].replace(/T-/gi, "");
            const sectionTargetName = decodeURIComponent(editURL.match(/title=(.+?)&/)[1]);
            const cloneNode = $(this).prev().clone();
            cloneNode.find(".mw-headline-number").remove();
            const sectionName = cloneNode.text().trim();
            const _sectionBtn = sectionBtn.clone();
            _sectionBtn.find(".Wikiplus-Edit-SectionBtn").on("click", () => {
              onClick({
                sectionNumber,
                sectionName,
                targetPageName: sectionTargetName
              });
            });
            constants_default.skin === "minerva" ? $(this).append(_sectionBtn) : $(this).find(".mw-editsection-bracket").last().before(_sectionBtn);
          } catch {
            log_default.error("fail_to_init_quickedit");
          }
        });
      }
      /**
       * 插入任意链接编辑入口
       *
       * @param {*} onClick
       */
      insertLinkEditEntries(onClick = () => {
      }) {
        $("#mw-content-text a.external").each(function(i) {
          const url = $(this).attr("href");
          const params = parseQuery(url);
          if (params.action === "edit" && params.title !== void 0 && params.section !== "new") {
            $(this).after($("<a>").attr({
              href: "javascript:void(0)",
              class: "Wikiplus-Edit-EveryWhereBtn"
            }).text("(".concat(i18n_default.translate("quickedit_sectionbtn"), ")")).on("click", () => {
              var _params$section;
              onClick({
                targetPageName: params.title,
                sectionNumber: (_params$section = params.section) !== null && _params$section !== void 0 ? _params$section : -1
              });
            }));
          }
        });
      }
      showQuickEditPanel({
        title = "",
        content = "",
        summary = "",
        onBack = () => {
        },
        onParse = () => {
        },
        onEdit = () => {
        },
        escExit = false
      }) {
        const self2 = this;
        this.scrollTop = $(document).scrollTop();
        if (this.quickEditPanelVisible) {
          this.hideQuickEditPanel();
        }
        this.quickEditPanelVisible = true;
        window.addEventListener("close", window.onbeforeunload = function() {
          return "".concat(i18n_default.translate("onclose_confirm"));
        });
        const isNewPage = $(".noarticletext").length > 0;
        const backBtn = $("<span>").attr("id", "Wikiplus-Quickedit-Back").addClass("Wikiplus-Btn").text("".concat(i18n_default.translate("back")));
        const jumpBtn = $("<span>").attr("id", "Wikiplus-Quickedit-Jump").addClass("Wikiplus-Btn").append($("<a>").attr("href", "#Wikiplus-Quickedit").text("".concat(i18n_default.translate("goto_editbox"))));
        const inputBox = $("<textarea>").attr("id", "Wikiplus-Quickedit");
        const previewBox = $("<div>").attr("id", "Wikiplus-Quickedit-Preview-Output");
        const summaryBox = $("<input>").attr("id", "Wikiplus-Quickedit-Summary-Input").attr("placeholder", "".concat(i18n_default.translate("summary_placehold")));
        const editSubmitBtn = $("<button>").attr("id", "Wikiplus-Quickedit-Submit").text("".concat(i18n_default.translate(isNewPage ? "publish_page" : "publish_change"), "(Ctrl+S)"));
        const previewSubmitBtn = $("<button>").attr("id", "Wikiplus-Quickedit-Preview-Submit").text("".concat(i18n_default.translate("preview")));
        const isMinorEdit = $("<div>").append($("<input>").attr({
          type: "checkbox",
          id: "Wikiplus-Quickedit-MinorEdit"
        })).append($("<label>").attr("for", "Wikiplus-Quickedit-MinorEdit").text("".concat(i18n_default.translate("mark_minoredit"), "(Ctrl+Shift+S)"))).css({
          margin: "5px 5px 5px -3px",
          display: "inline"
        });
        const editBody = $("<div>").append(backBtn, jumpBtn, previewBox, inputBox, summaryBox, $("<br>"), isMinorEdit, editSubmitBtn, previewSubmitBtn);
        this.createDialogBox(title, editBody, 1e3, () => {
          $("#Wikiplus-Quickedit").val(content);
          $("#Wikiplus-Quickedit-Summary-Input").val(summary);
        });
        $("#Wikiplus-Quickedit-Back").on("click", onBack);
        $("#Wikiplus-Quickedit-Preview-Submit").on("click", /* @__PURE__ */ _asyncToGenerator(function* () {
          const preloadBanner = $("<div>").addClass("Wikiplus-Banner").text("".concat(i18n_default.translate("loading_preview")));
          const wikiText = $("#Wikiplus-Quickedit").val();
          $(this).attr("disabled", "disabled");
          $("#Wikiplus-Quickedit-Preview-Output").fadeOut(100, () => {
            $("#Wikiplus-Quickedit-Preview-Output").html("").append(preloadBanner);
            $("#Wikiplus-Quickedit-Preview-Output").fadeIn(100);
          });
          $("html, body").animate({
            scrollTop: self2.scrollTop
          }, 200);
          const result = yield onParse(wikiText);
          $("#Wikiplus-Quickedit-Preview-Output").fadeOut("100", () => {
            $("#Wikiplus-Quickedit-Preview-Output").html('<hr><div class="mw-body-content">'.concat(result, "</div><hr>"));
            $("#Wikiplus-Quickedit-Preview-Output").fadeIn("100");
            $("#Wikiplus-Quickedit-Preview-Submit").prop("disabled", false);
          });
        }));
        $("#Wikiplus-Quickedit-Submit").on("click", /* @__PURE__ */ _asyncToGenerator(function* () {
          const timer = Date.now();
          const editBanner = $("<div>").addClass("Wikiplus-Banner").text("".concat(i18n_default.translate("submitting_edit")));
          const payload = {
            summary: $("#Wikiplus-Quickedit-Summary-Input").val(),
            content: $("#Wikiplus-Quickedit").val(),
            isMinorEdit: $("#Wikiplus-Quickedit-MinorEdit").is(":checked")
          };
          $("#Wikiplus-Quickedit-Submit,#Wikiplus-Quickedit,#Wikiplus-Quickedit-Preview-Submit").attr("disabled", "disabled");
          $("html, body").animate({
            scrollTop: self2.scrollTop
          }, 200);
          $("#Wikiplus-Quickedit-Preview-Output").fadeOut(100, () => {
            $("#Wikiplus-Quickedit-Preview-Output").html("").append(editBanner);
            $("#Wikiplus-Quickedit-Preview-Output").fadeIn(100);
          });
          try {
            yield onEdit(payload);
            const useTime = Date.now() - timer;
            $("#Wikiplus-Quickedit-Preview-Output").find(".Wikiplus-Banner").css("background", "rgba(6, 239, 92, 0.44)");
            $("#Wikiplus-Quickedit-Preview-Output").find(".Wikiplus-Banner").text("".concat(i18n_default.translate("edit_success", [useTime.toString()])));
            window.addEventListener("close", window.onbeforeunload = void 0);
            setTimeout(() => {
              location.reload();
            }, 500);
          } catch (error) {
            console.log(error);
            $(".Wikiplus-Banner").css("background", "rgba(218, 142, 167, 0.65)");
            $(".Wikiplus-Banner").html(error.message);
          } finally {
            $("#Wikiplus-Quickedit-Submit,#Wikiplus-Quickedit,#Wikiplus-Quickedit-Preview-Submit").prop("disabled", false);
          }
        }));
        $("#Wikiplus-Quickedit,#Wikiplus-Quickedit-Summary-Input,#Wikiplus-Quickedit-MinorEdit").on("keydown", (e) => {
          if (e.ctrlKey && e.which === 83) {
            if (e.shiftKey) {
              $("#Wikiplus-Quickedit-MinorEdit").trigger("click");
            }
            $("#Wikiplus-Quickedit-Submit").trigger("click");
            e.preventDefault();
            e.stopPropagation();
          }
        });
        if (escExit) {
          $(document).on("keydown", (e) => {
            if (e.which === 27) {
              $("#Wikiplus-Quickedit-Back").trigger("click");
            }
          });
        }
      }
      hideQuickEditPanel() {
        this.quickEditPanelVisible = false;
        $(".Wikiplus-InterBox").fadeOut("fast", function() {
          window.addEventListener("close", window.onbeforeunload = void 0);
          $(this).remove();
        });
      }
      /**
       * 显示快速重定向弹窗
       *
       * @param root0
       * @param root0.onEdit
       * @param root0.onSuccess
       */
      showSimpleRedirectPanel({
        onEdit = () => {
        },
        onSuccess = () => {
        }
      } = {}) {
        var _this1 = this;
        const input = $("<input>").addClass("Wikiplus-InterBox-Input").attr("id", "Wikiplus-SR-Title");
        const summaryInputTitle = $("<p>").text(i18n_default.translate("redirect_summary_desc"));
        const summaryInput = $("<input>").addClass("Wikiplus-InterBox-Input").attr("id", "Wikiplus-SR-Summary");
        const applyBtn = $("<div>").addClass("Wikiplus-InterBox-Btn").attr("id", "Wikiplus-SR-Apply").text(i18n_default.translate("submit"));
        const cancelBtn = $("<div>").addClass("Wikiplus-InterBox-Btn").attr("id", "Wikiplus-SR-Cancel").text(i18n_default.translate("cancel"));
        const continueBtn = $("<div>").addClass("Wikiplus-InterBox-Btn").attr("id", "Wikiplus-SR-Continue").text(i18n_default.translate("continue"));
        const content = $("<div>").append(input).append(summaryInputTitle).append(summaryInput).append($("<hr>")).append(applyBtn).append(cancelBtn);
        const dialog = this.createDialogBox(i18n_default.translate("redirect_desc"), content, 600);
        applyBtn.on("click", /* @__PURE__ */ _asyncToGenerator(function* () {
          const title = $("#Wikiplus-SR-Title").val();
          const summary = $("#Wikiplus-SR-Summary").val();
          $(".Wikiplus-InterBox-Content").html('<div class="Wikiplus-Banner">'.concat(i18n_default.translate("submitting_edit"), "</div>"));
          try {
            yield onEdit({
              title,
              summary,
              forceOverwrite: false
            });
            $(".Wikiplus-Banner").text(i18n_default.translate("redirect_saved"));
            _this1.hideSimpleRedirectPanel(dialog);
            onSuccess({
              title
            });
          } catch (error) {
            $(".Wikiplus-Banner").css("background", "rgba(218, 142, 167, 0.65)");
            $(".Wikiplus-Banner").text(error.message);
            if (error.code === "articleexists") {
              $(".Wikiplus-InterBox-Content").append($("<hr>")).append(continueBtn).append(cancelBtn);
              cancelBtn.on("click", () => {
                _this1.hideSimpleRedirectPanel(dialog);
              });
              continueBtn.on("click", /* @__PURE__ */ _asyncToGenerator(function* () {
                $(".Wikiplus-InterBox-Content").html('<div class="Wikiplus-Banner">'.concat(i18n_default.translate("submitting_edit"), "</div>"));
                try {
                  yield onEdit({
                    title,
                    summary,
                    forceOverwrite: true
                  });
                  $(".Wikiplus-Banner").text(i18n_default.translate("redirect_saved"));
                  _this1.hideSimpleRedirectPanel(dialog);
                  onSuccess({
                    title
                  });
                } catch (error2) {
                  $(".Wikiplus-Banner").css("background", "rgba(218, 142, 167, 0.65)");
                  $(".Wikiplus-Banner").text(error2.message);
                }
              }));
            }
          }
        }));
        cancelBtn.on("click", () => {
          this.hideSimpleRedirectPanel(dialog);
        });
      }
      /**
       * 隐藏快速重定向弹窗
       *
       * @param {*} dialog
       */
      hideSimpleRedirectPanel(dialog = $("body")) {
        dialog.find(".Wikiplus-InterBox-Close").trigger("click");
      }
      showSettingsPanel({
        onSubmit = () => {
        }
      } = {}) {
        var _this10 = this;
        const input = $("<textarea>").attr("id", "Wikiplus-Setting-Input").attr("rows", "10");
        const applyBtn = $("<div>").addClass("Wikiplus-InterBox-Btn").attr("id", "Wikiplus-Setting-Apply").text(i18n_default.translate("submit"));
        const cancelBtn = $("<div>").addClass("Wikiplus-InterBox-Btn").attr("id", "Wikiplus-Setting-Cancel").text(i18n_default.translate("cancel"));
        const content = $("<div>").append(input).append($("<hr>")).append(applyBtn).append(cancelBtn);
        const dialog = this.createDialogBox(i18n_default.translate("wikiplus_settings_desc"), content, 600, () => {
          if (localStorage.Wikiplus_Settings) {
            $("#Wikiplus-Setting-Input").val(localStorage.Wikiplus_Settings);
            try {
              const settings = JSON.parse(localStorage.Wikiplus_Settings);
              $("#Wikiplus-Setting-Input").val(JSON.stringify(settings, null, 2));
            } catch {
            }
          } else {
            $("#Wikiplus-Setting-Input").attr("placeholder", i18n_default.translate("wikiplus_settings_placeholder"));
          }
        });
        applyBtn.on("click", /* @__PURE__ */ _asyncToGenerator(function* () {
          const savedBanner = $("<div>").addClass("Wikiplus-Banner").text(i18n_default.translate("wikiplus_settings_saved"));
          const settings = $("#Wikiplus-Setting-Input").val();
          try {
            onSubmit({
              settings
            });
            $(".Wikiplus-InterBox-Content").html("").append(savedBanner);
            yield sleep_default(1500);
            _this10.hideSettingsPanel(dialog);
          } catch {
            notification_default.error(i18n_default.translate("wikiplus_settings_grammar_error"));
          }
        }));
        cancelBtn.on("click", () => {
          this.hideSettingsPanel(dialog);
        });
      }
      hideSettingsPanel(dialog = $("body")) {
        dialog.find(".Wikiplus-InterBox-Close").trigger("click");
      }
      bindPreloadEvents(onPreload) {
        $("#toc").children("ul").find("a").each(function(i) {
          $(this).on("mouseover", function() {
            $(this).off("mouseover");
            onPreload({
              sectionNumber: i + 1
            });
          });
        });
      }
    };
    ui_default = new UI();
  }
});
//! src/Wikiplus/modules/utils/settings.js
var Settings;
var settings_default;
var init_settings = __esm({
  "src/Wikiplus/modules/utils/settings.js"() {
    "use strict";
    Settings = class {
      getSetting(key, object = {}) {
        const w = object;
        let settings;
        try {
          settings = JSON.parse(localStorage["Wikiplus_Settings"]);
        } catch {
          return;
        }
        try {
          const customSettingFunction = new Function("return ".concat(settings[key]));
          if (typeof customSettingFunction === "function") {
            try {
              if (customSettingFunction()(w) === true) {
              } else {
                return customSettingFunction()(w) || settings[key];
              }
            } catch {
              return settings[key];
            }
          } else {
            return settings[key];
          }
        } catch {
          try {
            let result = settings[key];
            for (var _i4 = 0, _Object$keys3 = Object.keys(object); _i4 < _Object$keys3.length; _i4++) {
              const key2 = _Object$keys3[_i4];
              result = result.replace("${".concat(key2, "}"), object[key2]);
            }
            return result;
          } catch {
          }
        }
      }
    };
    settings_default = new Settings();
  }
});
//! src/Wikiplus/modules/wikiplus.less
var init_wikiplus = __esm({
  "src/Wikiplus/modules/wikiplus.less"() {
  }
});
//! src/Wikiplus/modules/index.js
var modules_exports = {};
var init_modules = __esm({
  "src/Wikiplus/modules/index.js"() {
    "use strict";
    init_page();
    init_ui();
    init_notification();
    init_wiki();
    init_settings();
    init_log();
    init_constants();
    init_i18n();
    init_wikiplus();
    $(/* @__PURE__ */ _asyncToGenerator(function* () {
      const Pages = {};
      const isCurrentPageEmpty = $(".noarticletext").length > 0 && constants_default.articleId === 0;
      const getPage = /* @__PURE__ */ function() {
        var _ref7 = _asyncToGenerator(function* ({
          revisionId: revisionId2,
          title
        }) {
          if (Pages[revisionId2]) {
            return Pages[revisionId2];
          }
          const newPage = new page_default({
            revisionId: revisionId2,
            title
          });
          yield newPage.init();
          Pages[revisionId2] = newPage;
          return Pages[revisionId2];
        });
        return function getPage2(_x4) {
          return _ref7.apply(this, arguments);
        };
      }();
      log_default.info("Wikiplus now loading. Version: ".concat(constants_default.version));
      if (!window.mw) {
        console.log("Mediawiki JavaScript not loaded or not a Mediawiki website.");
        return;
      }
      if (!constants_default.userGroups.includes("autoconfirmed") && !constants_default.userGroups.includes("confirmed")) {
        notification_default.error(i18n_default.translate("not_autoconfirmed_user"));
        log_default.info(i18n_default.translate("not_autoconfirmed_user"));
        return;
      }
      if (!constants_default.isArticle || constants_default.action !== "view") {
        log_default.info("Not an editable page. Stop initialization.");
        return;
      }
      window._WikiplusPages = Pages;
      const currentPageName = constants_default.currentPageName;
      const revisionId = constants_default.revisionId;
      const currentPage = yield getPage({
        revisionId,
        title: currentPageName
      });
      const handleQuickEditButtonClicked = /* @__PURE__ */ function() {
        var _ref8 = _asyncToGenerator(function* ({
          sectionNumber,
          sectionName,
          targetPageName
        } = {}) {
          const isOtherPage = targetPageName !== currentPageName;
          if (isOtherPage && constants_default.latestRevisionId !== constants_default.revisionId) {
            log_default.error("cross_page_history_revision_edit_warning");
            return;
          }
          const revisionId2 = isOtherPage ? yield wiki_default.getLatestRevisionIdForPage(targetPageName) : constants_default.revisionId;
          const page = yield getPage({
            revisionId: revisionId2,
            title: targetPageName
          });
          const customSummary = settings_default.getSetting("defaultSummary", {
            sectionName,
            sectionNumber,
            sectionTargetName: targetPageName
          });
          const summary = customSummary || (sectionName ? "/* ".concat(sectionName, " */ ").concat(i18n_default.translate("default_summary_suffix")) : i18n_default.translate("default_summary_suffix"));
          const timer = setTimeout(() => {
            notification_default.success(i18n_default.translate("loading"));
          }, 200);
          const sectionContent = yield page.getWikiText({
            section: sectionNumber
          });
          const isEditHistoryRevision = !isOtherPage && constants_default.latestRevisionId !== constants_default.revisionId;
          const escToExit = settings_default.getSetting("esc_to_exit_quickedit") === true || // 兼容老设置key
          settings_default.getSetting("esc_to_exit_quickedit") === "true" || settings_default.getSetting("escToExitQuickEdit") === true || settings_default.getSetting("escToExitQuickEdit") === "true";
          const customEditTags = settings_default.getSetting("custom_edit_tags");
          const defaultEditTags = [];
          const editTags = customEditTags !== null && customEditTags !== void 0 && customEditTags.length ? customEditTags : defaultEditTags;
          clearTimeout(timer);
          notification_default.empty();
          if (isEditHistoryRevision) {
            notification_default.warning(i18n_default.translate("history_edit_warning"));
          }
          const shouldShowCreatePageTip = isOtherPage ? !revisionId2 : isCurrentPageEmpty;
          ui_default.showQuickEditPanel({
            title: "".concat(i18n_default.translate("quickedit_topbtn")).concat(isEditHistoryRevision ? i18n_default.translate("history_edit_warning") : ""),
            content: shouldShowCreatePageTip ? i18n_default.translate("create_page_tip") : sectionContent,
            summary,
            onBack: ui_default.hideQuickEditPanel,
            onParse: (wikiText) => {
              return page.parseWikiText(wikiText);
            },
            onEdit: function() {
              var _ref9 = _asyncToGenerator(function* ({
                content,
                summary: summary2,
                isMinorEdit
              }) {
                const editPayload = {
                  content,
                  config: {
                    summary: summary2,
                    ...sectionNumber === -1 ? {} : {
                      section: sectionNumber
                    },
                    ...editTags.length ? {
                      tags: editTags.join("|")
                    } : {}
                  }
                };
                if (isMinorEdit) {
                  editPayload.config.minor = "true";
                } else {
                  editPayload.config.notminor = "true";
                }
                yield page.edit(editPayload);
              });
              return function onEdit(_x5) {
                return _ref9.apply(this, arguments);
              };
            }(),
            escExit: escToExit
          });
        });
        return function handleQuickEditButtonClicked2() {
          return _ref8.apply(this, arguments);
        };
      }();
      const handleSimpleRedirectButtonClicked = /* @__PURE__ */ function() {
        var _ref0 = _asyncToGenerator(function* () {
          ui_default.showSimpleRedirectPanel({
            onEdit: function() {
              var _ref1 = _asyncToGenerator(function* ({
                title,
                summary,
                forceOverwrite = false
              }) {
                const page = yield getPage({
                  title
                });
                const currentPageName2 = constants_default.currentPageName;
                const contentmodel = page.contentmodel;
                if (summary == "") {
                  summary = i18n_default.translate("redirect_from_summary", [title, currentPageName2]);
                }
                const content = (() => {
                  let content2;
                  switch (contentmodel) {
                    case "javascript":
                      content2 = '/* #REDIRECT */mw.loader.load("'.concat(location.protocol, "//").concat(location.host).concat(constants_default.scriptPath, "/index.php?title=").concat(mw.util.wikiUrlencode(currentPageName2), '&action=raw&ctype=text/javascript");');
                      break;
                    case "css":
                      content2 = "/* #REDIRECT */@import url(".concat(location.protocol, "//").concat(location.host).concat(constants_default.scriptPath, "/index.php?title=").concat(mw.util.wikiUrlencode(currentPageName2), "&action=raw&ctype=text/css);");
                      break;
                    case "Scribunto":
                      content2 = "return require [[".concat(currentPageName2, "]]");
                      break;
                    case "wikitext":
                    default:
                      content2 = "#REDIRECT [[".concat(currentPageName2, "]]");
                      break;
                  }
                  return content2;
                })();
                const payload = {
                  content,
                  config: {
                    summary
                  }
                };
                if (!forceOverwrite) {
                  payload.config.createonly = "true";
                }
                yield page.edit(payload);
              });
              return function onEdit(_x6) {
                return _ref1.apply(this, arguments);
              };
            }(),
            onSuccess: ({
              title
            }) => {
              location.href = constants_default.articlePath.replace(/\$1/gi, title);
            }
          });
        });
        return function handleSimpleRedirectButtonClicked2() {
          return _ref0.apply(this, arguments);
        };
      }();
      const handleSettingsButtonClicked = /* @__PURE__ */ function() {
        var _ref10 = _asyncToGenerator(function* () {
          ui_default.showSettingsPanel({
            onSubmit: ({
              settings
            }) => {
              JSON.parse(settings);
              localStorage.setItem("Wikiplus_Settings", settings);
            }
          });
        });
        return function handleSettingsButtonClicked2() {
          return _ref10.apply(this, arguments);
        };
      }();
      const handlePreload = /* @__PURE__ */ function() {
        var _ref11 = _asyncToGenerator(function* ({
          sectionNumber
        }) {
          yield currentPage.getWikiText({
            section: sectionNumber
          });
        });
        return function handlePreload2(_x7) {
          return _ref11.apply(this, arguments);
        };
      }();
      ui_default.insertTopQuickEditEntry(handleQuickEditButtonClicked);
      ui_default.insertSectionQuickEditEntries(handleQuickEditButtonClicked);
      ui_default.insertLinkEditEntries(handleQuickEditButtonClicked);
      ui_default.insertSimpleRedirectButton(handleSimpleRedirectButtonClicked);
      ui_default.insertSettingsPanelButton(handleSettingsButtonClicked);
      ui_default.bindPreloadEvents(handlePreload);
    }));
  }
});
//! src/Wikiplus/resize.ts
var resize_exports = {};
var import_ext_gadget;
var init_resize = __esm({
  "src/Wikiplus/resize.ts"() {
    "use strict";
    import_ext_gadget = require("ext.gadget.Util");
    void (0, import_ext_gadget.getBody)().then(($body) => {
      $(window).on("resize", () => {
        const windowWidth = $(window).width();
        const $wikiplusInterbox = $body.find(".Wikiplus-InterBox");
        if ($wikiplusInterbox) {
          $wikiplusInterbox.css("max-width", "calc(".concat(windowWidth, "px - 2em)"));
        }
      });
    });
  }
});
//! src/Wikiplus/Wikiplus.ts
(function Wikiplus() {
  const {
    wgAction,
    wgIsArticle
  } = mw.config.get();
  if (wgAction !== "view" || !wgIsArticle) {
    return;
  }
  const loader = /* @__PURE__ */ function() {
    var _ref12 = _asyncToGenerator(function* () {
      const {
        "visualeditor-enable": isVeEnable
      } = mw.user.options.get();
      if (isVeEnable) {
        yield mw.loader.using("ext.visualEditor.core");
      }
      yield Promise.resolve().then(() => (init_modules(), modules_exports));
      yield Promise.resolve().then(() => (init_resize(), resize_exports));
    });
    return function loader2() {
      return _ref12.apply(this, arguments);
    };
  }();
  void loader();
})();

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40OS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9nbG9iYWwtdGhpcy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ5LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2ZhaWxzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDkuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZGVzY3JpcHRvcnMuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40OS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mdW5jdGlvbi1iaW5kLW5hdGl2ZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ5LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2Z1bmN0aW9uLWNhbGwuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40OS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3QtcHJvcGVydHktaXMtZW51bWVyYWJsZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ5LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDkuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDkuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY2xhc3NvZi1yYXcuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40OS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pbmRleGVkLW9iamVjdC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ5LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLW51bGwtb3ItdW5kZWZpbmVkLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDkuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDkuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40OS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pcy1jYWxsYWJsZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ5LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLW9iamVjdC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ5LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2dldC1idWlsdC1pbi5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ5LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1pcy1wcm90b3R5cGUtb2YuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40OS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9lbnZpcm9ubWVudC11c2VyLWFnZW50LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDkuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZW52aXJvbm1lbnQtdjgtdmVyc2lvbi5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ5LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3N5bWJvbC1jb25zdHJ1Y3Rvci1kZXRlY3Rpb24uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40OS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy91c2Utc3ltYm9sLWFzLXVpZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ5LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLXN5bWJvbC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ5LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RyeS10by1zdHJpbmcuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40OS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hLWNhbGxhYmxlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDkuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZ2V0LW1ldGhvZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ5LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29yZGluYXJ5LXRvLXByaW1pdGl2ZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ5LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLXB1cmUuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40OS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9kZWZpbmUtZ2xvYmFsLXByb3BlcnR5LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDkuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2hhcmVkLXN0b3JlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDkuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2hhcmVkLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDkuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tb2JqZWN0LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDkuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ5LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3VpZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ5LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDkuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tcHJpbWl0aXZlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDkuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tcHJvcGVydHkta2V5LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDkuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZG9jdW1lbnQtY3JlYXRlLWVsZW1lbnQuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40OS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pZTgtZG9tLWRlZmluZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ5LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3IuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40OS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy92OC1wcm90b3R5cGUtZGVmaW5lLWJ1Zy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ5LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FuLW9iamVjdC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ5LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHkuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40OS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHkuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40OS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mdW5jdGlvbi1uYW1lLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDkuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaW5zcGVjdC1zb3VyY2UuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40OS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy93ZWFrLW1hcC1iYXNpYy1kZXRlY3Rpb24uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40OS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zaGFyZWQta2V5LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDkuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaGlkZGVuLWtleXMuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40OS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pbnRlcm5hbC1zdGF0ZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ5LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL21ha2UtYnVpbHQtaW4uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40OS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9kZWZpbmUtYnVpbHQtaW4uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40OS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9tYXRoLXRydW5jLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDkuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8taW50ZWdlci1vci1pbmZpbml0eS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ5LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RvLWFic29sdXRlLWluZGV4LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDkuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tbGVuZ3RoLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDkuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvbGVuZ3RoLW9mLWFycmF5LWxpa2UuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40OS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1pbmNsdWRlcy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ5LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1rZXlzLWludGVybmFsLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDkuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZW51bS1idWcta2V5cy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ5LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LW5hbWVzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDkuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktc3ltYm9scy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ5LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL293bi1rZXlzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDkuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY29weS1jb25zdHJ1Y3Rvci1wcm9wZXJ0aWVzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDkuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXMtZm9yY2VkLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDkuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZXhwb3J0LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDkuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXMtYXJyYXkuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40OS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy90by1zdHJpbmctdGFnLXN1cHBvcnQuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40OS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jbGFzc29mLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDkuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tc3RyaW5nLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDkuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDkuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvcGFyc2UtanNvbi1zdHJpbmcuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40OS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuanNvbi5wYXJzZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ5LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2Z1bmN0aW9uLWFwcGx5LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDkuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXMtcmF3LWpzb24uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40OS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1zbGljZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ5LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL25hdGl2ZS1yYXctanNvbi5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ5LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5qc29uLnN0cmluZ2lmeS5qcyIsICJzcmMvV2lraXBsdXMvbW9kdWxlcy91dGlscy9jb25zdGFudHMuanMiLCAic3JjL1dpa2lwbHVzL21vZHVsZXMvdXRpbHMvcmVxdWVzdHMuanMiLCAic3JjL1dpa2lwbHVzL21vZHVsZXMvdXRpbHMvaTE4bi5qcyIsICJzcmMvV2lraXBsdXMvbW9kdWxlcy91dGlscy9sb2cuanMiLCAic3JjL1dpa2lwbHVzL21vZHVsZXMvc2VydmljZXMvd2lraS5qcyIsICJzcmMvV2lraXBsdXMvbW9kdWxlcy9jb3JlL3BhZ2UuanMiLCAic3JjL1dpa2lwbHVzL21vZHVsZXMvY29yZS9ub3RpZmljYXRpb24uanMiLCAic3JjL1dpa2lwbHVzL21vZHVsZXMvdXRpbHMvc2xlZXAuanMiLCAic3JjL1dpa2lwbHVzL21vZHVsZXMvdXRpbHMvaGVscGVycy5qcyIsICJzcmMvV2lraXBsdXMvbW9kdWxlcy9jb3JlL3VpLmpzIiwgInNyYy9XaWtpcGx1cy9tb2R1bGVzL3V0aWxzL3NldHRpbmdzLmpzIiwgInNyYy9XaWtpcGx1cy9tb2R1bGVzL3dpa2lwbHVzLmxlc3MiLCAic3JjL1dpa2lwbHVzL21vZHVsZXMvaW5kZXguanMiLCAic3JjL1dpa2lwbHVzL3Jlc2l6ZS50cyIsICJzcmMvV2lraXBsdXMvV2lraXBsdXMudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIid1c2Ugc3RyaWN0JztcbnZhciBjaGVjayA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXQgJiYgaXQuTWF0aCA9PT0gTWF0aCAmJiBpdDtcbn07XG5cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy84NiNpc3N1ZWNvbW1lbnQtMTE1NzU5MDI4XG5tb2R1bGUuZXhwb3J0cyA9XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1nbG9iYWwtdGhpcyAtLSBzYWZlXG4gIGNoZWNrKHR5cGVvZiBnbG9iYWxUaGlzID09ICdvYmplY3QnICYmIGdsb2JhbFRoaXMpIHx8XG4gIGNoZWNrKHR5cGVvZiB3aW5kb3cgPT0gJ29iamVjdCcgJiYgd2luZG93KSB8fFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVzdHJpY3RlZC1nbG9iYWxzIC0tIHNhZmVcbiAgY2hlY2sodHlwZW9mIHNlbGYgPT0gJ29iamVjdCcgJiYgc2VsZikgfHxcbiAgY2hlY2sodHlwZW9mIGdsb2JhbCA9PSAnb2JqZWN0JyAmJiBnbG9iYWwpIHx8XG4gIGNoZWNrKHR5cGVvZiB0aGlzID09ICdvYmplY3QnICYmIHRoaXMpIHx8XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1uZXctZnVuYyAtLSBmYWxsYmFja1xuICAoZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSkoKSB8fCBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuIiwgIid1c2Ugc3RyaWN0Jztcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGV4ZWMpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gISFleGVjKCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG5cbi8vIERldGVjdCBJRTgncyBpbmNvbXBsZXRlIGRlZmluZVByb3BlcnR5IGltcGxlbWVudGF0aW9uXG5tb2R1bGUuZXhwb3J0cyA9ICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZGVmaW5lcHJvcGVydHkgLS0gcmVxdWlyZWQgZm9yIHRlc3RpbmdcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgMSwgeyBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDc7IH0gfSlbMV0gIT09IDc7XG59KTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tZnVuY3Rpb24tcHJvdG90eXBlLWJpbmQgLS0gc2FmZVxuICB2YXIgdGVzdCA9IGZ1bmN0aW9uICgpIHsgLyogZW1wdHkgKi8gfS5iaW5kKCk7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnMgLS0gc2FmZVxuICByZXR1cm4gdHlwZW9mIHRlc3QgIT0gJ2Z1bmN0aW9uJyB8fCB0ZXN0Lmhhc093blByb3BlcnR5KCdwcm90b3R5cGUnKTtcbn0pO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBOQVRJVkVfQklORCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1iaW5kLW5hdGl2ZScpO1xuXG52YXIgY2FsbCA9IEZ1bmN0aW9uLnByb3RvdHlwZS5jYWxsO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLWZ1bmN0aW9uLXByb3RvdHlwZS1iaW5kIC0tIHNhZmVcbm1vZHVsZS5leHBvcnRzID0gTkFUSVZFX0JJTkQgPyBjYWxsLmJpbmQoY2FsbCkgOiBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBjYWxsLmFwcGx5KGNhbGwsIGFyZ3VtZW50cyk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciAkcHJvcGVydHlJc0VudW1lcmFibGUgPSB7fS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZ2V0b3ducHJvcGVydHlkZXNjcmlwdG9yIC0tIHNhZmVcbnZhciBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4vLyBOYXNob3JuIH4gSkRLOCBidWdcbnZhciBOQVNIT1JOX0JVRyA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvciAmJiAhJHByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwoeyAxOiAyIH0sIDEpO1xuXG4vLyBgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZWAgbWV0aG9kIGltcGxlbWVudGF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5wcm90b3R5cGUucHJvcGVydHlpc2VudW1lcmFibGVcbmV4cG9ydHMuZiA9IE5BU0hPUk5fQlVHID8gZnVuY3Rpb24gcHJvcGVydHlJc0VudW1lcmFibGUoVikge1xuICB2YXIgZGVzY3JpcHRvciA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvcih0aGlzLCBWKTtcbiAgcmV0dXJuICEhZGVzY3JpcHRvciAmJiBkZXNjcmlwdG9yLmVudW1lcmFibGU7XG59IDogJHByb3BlcnR5SXNFbnVtZXJhYmxlO1xuIiwgIid1c2Ugc3RyaWN0Jztcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGJpdG1hcCwgdmFsdWUpIHtcbiAgcmV0dXJuIHtcbiAgICBlbnVtZXJhYmxlOiAhKGJpdG1hcCAmIDEpLFxuICAgIGNvbmZpZ3VyYWJsZTogIShiaXRtYXAgJiAyKSxcbiAgICB3cml0YWJsZTogIShiaXRtYXAgJiA0KSxcbiAgICB2YWx1ZTogdmFsdWVcbiAgfTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIE5BVElWRV9CSU5EID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWJpbmQtbmF0aXZlJyk7XG5cbnZhciBGdW5jdGlvblByb3RvdHlwZSA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcbnZhciBjYWxsID0gRnVuY3Rpb25Qcm90b3R5cGUuY2FsbDtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1mdW5jdGlvbi1wcm90b3R5cGUtYmluZCAtLSBzYWZlXG52YXIgdW5jdXJyeVRoaXNXaXRoQmluZCA9IE5BVElWRV9CSU5EICYmIEZ1bmN0aW9uUHJvdG90eXBlLmJpbmQuYmluZChjYWxsLCBjYWxsKTtcblxubW9kdWxlLmV4cG9ydHMgPSBOQVRJVkVfQklORCA/IHVuY3VycnlUaGlzV2l0aEJpbmQgOiBmdW5jdGlvbiAoZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gY2FsbC5hcHBseShmbiwgYXJndW1lbnRzKTtcbiAgfTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xuXG52YXIgdG9TdHJpbmcgPSB1bmN1cnJ5VGhpcyh7fS50b1N0cmluZyk7XG52YXIgc3RyaW5nU2xpY2UgPSB1bmN1cnJ5VGhpcygnJy5zbGljZSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBzdHJpbmdTbGljZSh0b1N0cmluZyhpdCksIDgsIC0xKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jbGFzc29mLXJhdycpO1xuXG52YXIgJE9iamVjdCA9IE9iamVjdDtcbnZhciBzcGxpdCA9IHVuY3VycnlUaGlzKCcnLnNwbGl0KTtcblxuLy8gZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBhbmQgbm9uLWVudW1lcmFibGUgb2xkIFY4IHN0cmluZ3Ncbm1vZHVsZS5leHBvcnRzID0gZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyB0aHJvd3MgYW4gZXJyb3IgaW4gcmhpbm8sIHNlZSBodHRwczovL2dpdGh1Yi5jb20vbW96aWxsYS9yaGluby9pc3N1ZXMvMzQ2XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnMgLS0gc2FmZVxuICByZXR1cm4gISRPYmplY3QoJ3onKS5wcm9wZXJ0eUlzRW51bWVyYWJsZSgwKTtcbn0pID8gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBjbGFzc29mKGl0KSA9PT0gJ1N0cmluZycgPyBzcGxpdChpdCwgJycpIDogJE9iamVjdChpdCk7XG59IDogJE9iamVjdDtcbiIsICIndXNlIHN0cmljdCc7XG4vLyB3ZSBjYW4ndCB1c2UganVzdCBgaXQgPT0gbnVsbGAgc2luY2Ugb2YgYGRvY3VtZW50LmFsbGAgc3BlY2lhbCBjYXNlXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLUlzSFRNTEREQS1pbnRlcm5hbC1zbG90LWFlY1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGl0ID09PSBudWxsIHx8IGl0ID09PSB1bmRlZmluZWQ7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBpc051bGxPclVuZGVmaW5lZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1udWxsLW9yLXVuZGVmaW5lZCcpO1xuXG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcblxuLy8gYFJlcXVpcmVPYmplY3RDb2VyY2libGVgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1yZXF1aXJlb2JqZWN0Y29lcmNpYmxlXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoaXNOdWxsT3JVbmRlZmluZWQoaXQpKSB0aHJvdyBuZXcgJFR5cGVFcnJvcihcIkNhbid0IGNhbGwgbWV0aG9kIG9uIFwiICsgaXQpO1xuICByZXR1cm4gaXQ7XG59O1xuIiwgIid1c2Ugc3RyaWN0Jztcbi8vIHRvT2JqZWN0IHdpdGggZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBzdHJpbmdzXG52YXIgSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbmRleGVkLW9iamVjdCcpO1xudmFyIHJlcXVpcmVPYmplY3RDb2VyY2libGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBJbmRleGVkT2JqZWN0KHJlcXVpcmVPYmplY3RDb2VyY2libGUoaXQpKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1Jc0hUTUxEREEtaW50ZXJuYWwtc2xvdFxudmFyIGRvY3VtZW50QWxsID0gdHlwZW9mIGRvY3VtZW50ID09ICdvYmplY3QnICYmIGRvY3VtZW50LmFsbDtcblxuLy8gYElzQ2FsbGFibGVgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1pc2NhbGxhYmxlXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgdW5pY29ybi9uby10eXBlb2YtdW5kZWZpbmVkIC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nXG5tb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiBkb2N1bWVudEFsbCA9PSAndW5kZWZpbmVkJyAmJiBkb2N1bWVudEFsbCAhPT0gdW5kZWZpbmVkID8gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHJldHVybiB0eXBlb2YgYXJndW1lbnQgPT0gJ2Z1bmN0aW9uJyB8fCBhcmd1bWVudCA9PT0gZG9jdW1lbnRBbGw7XG59IDogZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHJldHVybiB0eXBlb2YgYXJndW1lbnQgPT0gJ2Z1bmN0aW9uJztcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PSAnb2JqZWN0JyA/IGl0ICE9PSBudWxsIDogaXNDYWxsYWJsZShpdCk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWxUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbC10aGlzJyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xuXG52YXIgYUZ1bmN0aW9uID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHJldHVybiBpc0NhbGxhYmxlKGFyZ3VtZW50KSA/IGFyZ3VtZW50IDogdW5kZWZpbmVkO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobmFtZXNwYWNlLCBtZXRob2QpIHtcbiAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPCAyID8gYUZ1bmN0aW9uKGdsb2JhbFRoaXNbbmFtZXNwYWNlXSkgOiBnbG9iYWxUaGlzW25hbWVzcGFjZV0gJiYgZ2xvYmFsVGhpc1tuYW1lc3BhY2VdW21ldGhvZF07XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSB1bmN1cnJ5VGhpcyh7fS5pc1Byb3RvdHlwZU9mKTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsVGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwtdGhpcycpO1xuXG52YXIgbmF2aWdhdG9yID0gZ2xvYmFsVGhpcy5uYXZpZ2F0b3I7XG52YXIgdXNlckFnZW50ID0gbmF2aWdhdG9yICYmIG5hdmlnYXRvci51c2VyQWdlbnQ7XG5cbm1vZHVsZS5leHBvcnRzID0gdXNlckFnZW50ID8gU3RyaW5nKHVzZXJBZ2VudCkgOiAnJztcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsVGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwtdGhpcycpO1xudmFyIHVzZXJBZ2VudCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbnZpcm9ubWVudC11c2VyLWFnZW50Jyk7XG5cbnZhciBwcm9jZXNzID0gZ2xvYmFsVGhpcy5wcm9jZXNzO1xudmFyIERlbm8gPSBnbG9iYWxUaGlzLkRlbm87XG52YXIgdmVyc2lvbnMgPSBwcm9jZXNzICYmIHByb2Nlc3MudmVyc2lvbnMgfHwgRGVubyAmJiBEZW5vLnZlcnNpb247XG52YXIgdjggPSB2ZXJzaW9ucyAmJiB2ZXJzaW9ucy52ODtcbnZhciBtYXRjaCwgdmVyc2lvbjtcblxuaWYgKHY4KSB7XG4gIG1hdGNoID0gdjguc3BsaXQoJy4nKTtcbiAgLy8gaW4gb2xkIENocm9tZSwgdmVyc2lvbnMgb2YgVjggaXNuJ3QgVjggPSBDaHJvbWUgLyAxMFxuICAvLyBidXQgdGhlaXIgY29ycmVjdCB2ZXJzaW9ucyBhcmUgbm90IGludGVyZXN0aW5nIGZvciB1c1xuICB2ZXJzaW9uID0gbWF0Y2hbMF0gPiAwICYmIG1hdGNoWzBdIDwgNCA/IDEgOiArKG1hdGNoWzBdICsgbWF0Y2hbMV0pO1xufVxuXG4vLyBCcm93c2VyRlMgTm9kZUpTIGBwcm9jZXNzYCBwb2x5ZmlsbCBpbmNvcnJlY3RseSBzZXQgYC52OGAgdG8gYDAuMGBcbi8vIHNvIGNoZWNrIGB1c2VyQWdlbnRgIGV2ZW4gaWYgYC52OGAgZXhpc3RzLCBidXQgMFxuaWYgKCF2ZXJzaW9uICYmIHVzZXJBZ2VudCkge1xuICBtYXRjaCA9IHVzZXJBZ2VudC5tYXRjaCgvRWRnZVxcLyhcXGQrKS8pO1xuICBpZiAoIW1hdGNoIHx8IG1hdGNoWzFdID49IDc0KSB7XG4gICAgbWF0Y2ggPSB1c2VyQWdlbnQubWF0Y2goL0Nocm9tZVxcLyhcXGQrKS8pO1xuICAgIGlmIChtYXRjaCkgdmVyc2lvbiA9ICttYXRjaFsxXTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHZlcnNpb247XG4iLCAiJ3VzZSBzdHJpY3QnO1xuLyogZXNsaW50LWRpc2FibGUgZXMvbm8tc3ltYm9sIC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nICovXG52YXIgVjhfVkVSU0lPTiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbnZpcm9ubWVudC12OC12ZXJzaW9uJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBnbG9iYWxUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbC10aGlzJyk7XG5cbnZhciAkU3RyaW5nID0gZ2xvYmFsVGhpcy5TdHJpbmc7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZ2V0b3ducHJvcGVydHlzeW1ib2xzIC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nXG5tb2R1bGUuZXhwb3J0cyA9ICEhT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyAmJiAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICB2YXIgc3ltYm9sID0gU3ltYm9sKCdzeW1ib2wgZGV0ZWN0aW9uJyk7XG4gIC8vIENocm9tZSAzOCBTeW1ib2wgaGFzIGluY29ycmVjdCB0b1N0cmluZyBjb252ZXJzaW9uXG4gIC8vIGBnZXQtb3duLXByb3BlcnR5LXN5bWJvbHNgIHBvbHlmaWxsIHN5bWJvbHMgY29udmVydGVkIHRvIG9iamVjdCBhcmUgbm90IFN5bWJvbCBpbnN0YW5jZXNcbiAgLy8gbmI6IERvIG5vdCBjYWxsIGBTdHJpbmdgIGRpcmVjdGx5IHRvIGF2b2lkIHRoaXMgYmVpbmcgb3B0aW1pemVkIG91dCB0byBgc3ltYm9sKycnYCB3aGljaCB3aWxsLFxuICAvLyBvZiBjb3Vyc2UsIGZhaWwuXG4gIHJldHVybiAhJFN0cmluZyhzeW1ib2wpIHx8ICEoT2JqZWN0KHN5bWJvbCkgaW5zdGFuY2VvZiBTeW1ib2wpIHx8XG4gICAgLy8gQ2hyb21lIDM4LTQwIHN5bWJvbHMgYXJlIG5vdCBpbmhlcml0ZWQgZnJvbSBET00gY29sbGVjdGlvbnMgcHJvdG90eXBlcyB0byBpbnN0YW5jZXNcbiAgICAhU3ltYm9sLnNoYW0gJiYgVjhfVkVSU0lPTiAmJiBWOF9WRVJTSU9OIDwgNDE7XG59KTtcbiIsICIndXNlIHN0cmljdCc7XG4vKiBlc2xpbnQtZGlzYWJsZSBlcy9uby1zeW1ib2wgLS0gcmVxdWlyZWQgZm9yIHRlc3RpbmcgKi9cbnZhciBOQVRJVkVfU1lNQk9MID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3N5bWJvbC1jb25zdHJ1Y3Rvci1kZXRlY3Rpb24nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBOQVRJVkVfU1lNQk9MICYmXG4gICFTeW1ib2wuc2hhbSAmJlxuICB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09ICdzeW1ib2wnO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnZXRCdWlsdEluID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1idWlsdC1pbicpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcbnZhciBpc1Byb3RvdHlwZU9mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1pcy1wcm90b3R5cGUtb2YnKTtcbnZhciBVU0VfU1lNQk9MX0FTX1VJRCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy91c2Utc3ltYm9sLWFzLXVpZCcpO1xuXG52YXIgJE9iamVjdCA9IE9iamVjdDtcblxubW9kdWxlLmV4cG9ydHMgPSBVU0VfU1lNQk9MX0FTX1VJRCA/IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gdHlwZW9mIGl0ID09ICdzeW1ib2wnO1xufSA6IGZ1bmN0aW9uIChpdCkge1xuICB2YXIgJFN5bWJvbCA9IGdldEJ1aWx0SW4oJ1N5bWJvbCcpO1xuICByZXR1cm4gaXNDYWxsYWJsZSgkU3ltYm9sKSAmJiBpc1Byb3RvdHlwZU9mKCRTeW1ib2wucHJvdG90eXBlLCAkT2JqZWN0KGl0KSk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciAkU3RyaW5nID0gU3RyaW5nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICB0cnkge1xuICAgIHJldHVybiAkU3RyaW5nKGFyZ3VtZW50KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4gJ09iamVjdCc7XG4gIH1cbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcbnZhciB0cnlUb1N0cmluZyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90cnktdG8tc3RyaW5nJyk7XG5cbnZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xuXG4vLyBgQXNzZXJ0OiBJc0NhbGxhYmxlKGFyZ3VtZW50KSBpcyB0cnVlYFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgaWYgKGlzQ2FsbGFibGUoYXJndW1lbnQpKSByZXR1cm4gYXJndW1lbnQ7XG4gIHRocm93IG5ldyAkVHlwZUVycm9yKHRyeVRvU3RyaW5nKGFyZ3VtZW50KSArICcgaXMgbm90IGEgZnVuY3Rpb24nKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGFDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hLWNhbGxhYmxlJyk7XG52YXIgaXNOdWxsT3JVbmRlZmluZWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtbnVsbC1vci11bmRlZmluZWQnKTtcblxuLy8gYEdldE1ldGhvZGAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWdldG1ldGhvZFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoViwgUCkge1xuICB2YXIgZnVuYyA9IFZbUF07XG4gIHJldHVybiBpc051bGxPclVuZGVmaW5lZChmdW5jKSA/IHVuZGVmaW5lZCA6IGFDYWxsYWJsZShmdW5jKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGNhbGwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tY2FsbCcpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcblxudmFyICRUeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG5cbi8vIGBPcmRpbmFyeVRvUHJpbWl0aXZlYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb3JkaW5hcnl0b3ByaW1pdGl2ZVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaW5wdXQsIHByZWYpIHtcbiAgdmFyIGZuLCB2YWw7XG4gIGlmIChwcmVmID09PSAnc3RyaW5nJyAmJiBpc0NhbGxhYmxlKGZuID0gaW5wdXQudG9TdHJpbmcpICYmICFpc09iamVjdCh2YWwgPSBjYWxsKGZuLCBpbnB1dCkpKSByZXR1cm4gdmFsO1xuICBpZiAoaXNDYWxsYWJsZShmbiA9IGlucHV0LnZhbHVlT2YpICYmICFpc09iamVjdCh2YWwgPSBjYWxsKGZuLCBpbnB1dCkpKSByZXR1cm4gdmFsO1xuICBpZiAocHJlZiAhPT0gJ3N0cmluZycgJiYgaXNDYWxsYWJsZShmbiA9IGlucHV0LnRvU3RyaW5nKSAmJiAhaXNPYmplY3QodmFsID0gY2FsbChmbiwgaW5wdXQpKSkgcmV0dXJuIHZhbDtcbiAgdGhyb3cgbmV3ICRUeXBlRXJyb3IoXCJDYW4ndCBjb252ZXJ0IG9iamVjdCB0byBwcmltaXRpdmUgdmFsdWVcIik7XG59O1xuIiwgIid1c2Ugc3RyaWN0Jztcbm1vZHVsZS5leHBvcnRzID0gZmFsc2U7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbFRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsLXRoaXMnKTtcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1kZWZpbmVwcm9wZXJ0eSAtLSBzYWZlXG52YXIgZGVmaW5lUHJvcGVydHkgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgdHJ5IHtcbiAgICBkZWZpbmVQcm9wZXJ0eShnbG9iYWxUaGlzLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGdsb2JhbFRoaXNba2V5XSA9IHZhbHVlO1xuICB9IHJldHVybiB2YWx1ZTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIElTX1BVUkUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtcHVyZScpO1xudmFyIGdsb2JhbFRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsLXRoaXMnKTtcbnZhciBkZWZpbmVHbG9iYWxQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZWZpbmUtZ2xvYmFsLXByb3BlcnR5Jyk7XG5cbnZhciBTSEFSRUQgPSAnX19jb3JlLWpzX3NoYXJlZF9fJztcbnZhciBzdG9yZSA9IG1vZHVsZS5leHBvcnRzID0gZ2xvYmFsVGhpc1tTSEFSRURdIHx8IGRlZmluZUdsb2JhbFByb3BlcnR5KFNIQVJFRCwge30pO1xuXG4oc3RvcmUudmVyc2lvbnMgfHwgKHN0b3JlLnZlcnNpb25zID0gW10pKS5wdXNoKHtcbiAgdmVyc2lvbjogJzMuNDkuMCcsXG4gIG1vZGU6IElTX1BVUkUgPyAncHVyZScgOiAnZ2xvYmFsJyxcbiAgY29weXJpZ2h0OiAnwqkgMjAxM+KAkzIwMjUgRGVuaXMgUHVzaGthcmV2ICh6bG9pcm9jay5ydSksIDIwMjXigJMyMDI2IENvcmVKUyBDb21wYW55IChjb3JlLWpzLmlvKS4gQWxsIHJpZ2h0cyByZXNlcnZlZC4nLFxuICBsaWNlbnNlOiAnaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvYmxvYi92My40OS4wL0xJQ0VOU0UnLFxuICBzb3VyY2U6ICdodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcydcbn0pO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBzdG9yZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQtc3RvcmUnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICByZXR1cm4gc3RvcmVba2V5XSB8fCAoc3RvcmVba2V5XSA9IHZhbHVlIHx8IHt9KTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHJlcXVpcmVPYmplY3RDb2VyY2libGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlJyk7XG5cbnZhciAkT2JqZWN0ID0gT2JqZWN0O1xuXG4vLyBgVG9PYmplY3RgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy10b29iamVjdFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgcmV0dXJuICRPYmplY3QocmVxdWlyZU9iamVjdENvZXJjaWJsZShhcmd1bWVudCkpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tb2JqZWN0Jyk7XG5cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IHVuY3VycnlUaGlzKHt9Lmhhc093blByb3BlcnR5KTtcblxuLy8gYEhhc093blByb3BlcnR5YCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtaGFzb3ducHJvcGVydHlcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtaGFzb3duIC0tIHNhZmVcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0Lmhhc093biB8fCBmdW5jdGlvbiBoYXNPd24oaXQsIGtleSkge1xuICByZXR1cm4gaGFzT3duUHJvcGVydHkodG9PYmplY3QoaXQpLCBrZXkpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG5cbnZhciBpZCA9IDA7XG52YXIgcG9zdGZpeCA9IE1hdGgucmFuZG9tKCk7XG52YXIgdG9TdHJpbmcgPSB1bmN1cnJ5VGhpcygxLjEudG9TdHJpbmcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuICdTeW1ib2woJyArIChrZXkgPT09IHVuZGVmaW5lZCA/ICcnIDoga2V5KSArICcpXycgKyB0b1N0cmluZygrK2lkICsgcG9zdGZpeCwgMzYpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsVGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwtdGhpcycpO1xudmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQnKTtcbnZhciBoYXNPd24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eScpO1xudmFyIHVpZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy91aWQnKTtcbnZhciBOQVRJVkVfU1lNQk9MID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3N5bWJvbC1jb25zdHJ1Y3Rvci1kZXRlY3Rpb24nKTtcbnZhciBVU0VfU1lNQk9MX0FTX1VJRCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy91c2Utc3ltYm9sLWFzLXVpZCcpO1xuXG52YXIgU3ltYm9sID0gZ2xvYmFsVGhpcy5TeW1ib2w7XG52YXIgV2VsbEtub3duU3ltYm9sc1N0b3JlID0gc2hhcmVkKCd3a3MnKTtcbnZhciBjcmVhdGVXZWxsS25vd25TeW1ib2wgPSBVU0VfU1lNQk9MX0FTX1VJRCA/IFN5bWJvbFsnZm9yJ10gfHwgU3ltYm9sIDogU3ltYm9sICYmIFN5bWJvbC53aXRob3V0U2V0dGVyIHx8IHVpZDtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobmFtZSkge1xuICBpZiAoIWhhc093bihXZWxsS25vd25TeW1ib2xzU3RvcmUsIG5hbWUpKSB7XG4gICAgV2VsbEtub3duU3ltYm9sc1N0b3JlW25hbWVdID0gTkFUSVZFX1NZTUJPTCAmJiBoYXNPd24oU3ltYm9sLCBuYW1lKVxuICAgICAgPyBTeW1ib2xbbmFtZV1cbiAgICAgIDogY3JlYXRlV2VsbEtub3duU3ltYm9sKCdTeW1ib2wuJyArIG5hbWUpO1xuICB9IHJldHVybiBXZWxsS25vd25TeW1ib2xzU3RvcmVbbmFtZV07XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBjYWxsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWNhbGwnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcbnZhciBpc1N5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1zeW1ib2wnKTtcbnZhciBnZXRNZXRob2QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LW1ldGhvZCcpO1xudmFyIG9yZGluYXJ5VG9QcmltaXRpdmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb3JkaW5hcnktdG8tcHJpbWl0aXZlJyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG5cbnZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xudmFyIFRPX1BSSU1JVElWRSA9IHdlbGxLbm93blN5bWJvbCgndG9QcmltaXRpdmUnKTtcblxuLy8gYFRvUHJpbWl0aXZlYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtdG9wcmltaXRpdmVcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGlucHV0LCBwcmVmKSB7XG4gIGlmICghaXNPYmplY3QoaW5wdXQpIHx8IGlzU3ltYm9sKGlucHV0KSkgcmV0dXJuIGlucHV0O1xuICB2YXIgZXhvdGljVG9QcmltID0gZ2V0TWV0aG9kKGlucHV0LCBUT19QUklNSVRJVkUpO1xuICB2YXIgcmVzdWx0O1xuICBpZiAoZXhvdGljVG9QcmltKSB7XG4gICAgaWYgKHByZWYgPT09IHVuZGVmaW5lZCkgcHJlZiA9ICdkZWZhdWx0JztcbiAgICByZXN1bHQgPSBjYWxsKGV4b3RpY1RvUHJpbSwgaW5wdXQsIHByZWYpO1xuICAgIGlmICghaXNPYmplY3QocmVzdWx0KSB8fCBpc1N5bWJvbChyZXN1bHQpKSByZXR1cm4gcmVzdWx0O1xuICAgIHRocm93IG5ldyAkVHlwZUVycm9yKFwiQ2FuJ3QgY29udmVydCBvYmplY3QgdG8gcHJpbWl0aXZlIHZhbHVlXCIpO1xuICB9XG4gIGlmIChwcmVmID09PSB1bmRlZmluZWQpIHByZWYgPSAnbnVtYmVyJztcbiAgcmV0dXJuIG9yZGluYXJ5VG9QcmltaXRpdmUoaW5wdXQsIHByZWYpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tcHJpbWl0aXZlJyk7XG52YXIgaXNTeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtc3ltYm9sJyk7XG5cbi8vIGBUb1Byb3BlcnR5S2V5YCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtdG9wcm9wZXJ0eWtleVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgdmFyIGtleSA9IHRvUHJpbWl0aXZlKGFyZ3VtZW50LCAnc3RyaW5nJyk7XG4gIHJldHVybiBpc1N5bWJvbChrZXkpID8ga2V5IDoga2V5ICsgJyc7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWxUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbC10aGlzJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG5cbnZhciBkb2N1bWVudCA9IGdsb2JhbFRoaXMuZG9jdW1lbnQ7XG4vLyB0eXBlb2YgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCBpcyAnb2JqZWN0JyBpbiBvbGQgSUVcbnZhciBFWElTVFMgPSBpc09iamVjdChkb2N1bWVudCkgJiYgaXNPYmplY3QoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBFWElTVFMgPyBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGl0KSA6IHt9O1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGNyZWF0ZUVsZW1lbnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZG9jdW1lbnQtY3JlYXRlLWVsZW1lbnQnKTtcblxuLy8gVGhhbmtzIHRvIElFOCBmb3IgaXRzIGZ1bm55IGRlZmluZVByb3BlcnR5XG5tb2R1bGUuZXhwb3J0cyA9ICFERVNDUklQVE9SUyAmJiAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWRlZmluZXByb3BlcnR5IC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nXG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoY3JlYXRlRWxlbWVudCgnZGl2JyksICdhJywge1xuICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gNzsgfVxuICB9KS5hICE9PSA3O1xufSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgY2FsbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1jYWxsJyk7XG52YXIgcHJvcGVydHlJc0VudW1lcmFibGVNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LXByb3BlcnR5LWlzLWVudW1lcmFibGUnKTtcbnZhciBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5LWRlc2NyaXB0b3InKTtcbnZhciB0b0luZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QnKTtcbnZhciB0b1Byb3BlcnR5S2V5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXByb3BlcnR5LWtleScpO1xudmFyIGhhc093biA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMtb3duLXByb3BlcnR5Jyk7XG52YXIgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaWU4LWRvbS1kZWZpbmUnKTtcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1nZXRvd25wcm9wZXJ0eWRlc2NyaXB0b3IgLS0gc2FmZVxudmFyICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4vLyBgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcmAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5nZXRvd25wcm9wZXJ0eWRlc2NyaXB0b3JcbmV4cG9ydHMuZiA9IERFU0NSSVBUT1JTID8gJGdldE93blByb3BlcnR5RGVzY3JpcHRvciA6IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKSB7XG4gIE8gPSB0b0luZGV4ZWRPYmplY3QoTyk7XG4gIFAgPSB0b1Byb3BlcnR5S2V5KFApO1xuICBpZiAoSUU4X0RPTV9ERUZJTkUpIHRyeSB7XG4gICAgcmV0dXJuICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGVtcHR5ICovIH1cbiAgaWYgKGhhc093bihPLCBQKSkgcmV0dXJuIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvcighY2FsbChwcm9wZXJ0eUlzRW51bWVyYWJsZU1vZHVsZS5mLCBPLCBQKSwgT1tQXSk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG5cbi8vIFY4IH4gQ2hyb21lIDM2LVxuLy8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzMzNFxubW9kdWxlLmV4cG9ydHMgPSBERVNDUklQVE9SUyAmJiBmYWlscyhmdW5jdGlvbiAoKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZGVmaW5lcHJvcGVydHkgLS0gcmVxdWlyZWQgZm9yIHRlc3RpbmdcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH0sICdwcm90b3R5cGUnLCB7XG4gICAgdmFsdWU6IDQyLFxuICAgIHdyaXRhYmxlOiBmYWxzZVxuICB9KS5wcm90b3R5cGUgIT09IDQyO1xufSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xuXG52YXIgJFN0cmluZyA9IFN0cmluZztcbnZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xuXG4vLyBgQXNzZXJ0OiBUeXBlKGFyZ3VtZW50KSBpcyBPYmplY3RgXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICBpZiAoaXNPYmplY3QoYXJndW1lbnQpKSByZXR1cm4gYXJndW1lbnQ7XG4gIHRocm93IG5ldyAkVHlwZUVycm9yKCRTdHJpbmcoYXJndW1lbnQpICsgJyBpcyBub3QgYW4gb2JqZWN0Jyk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2llOC1kb20tZGVmaW5lJyk7XG52YXIgVjhfUFJPVE9UWVBFX0RFRklORV9CVUcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdjgtcHJvdG90eXBlLWRlZmluZS1idWcnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcbnZhciB0b1Byb3BlcnR5S2V5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXByb3BlcnR5LWtleScpO1xuXG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZGVmaW5lcHJvcGVydHkgLS0gc2FmZVxudmFyICRkZWZpbmVQcm9wZXJ0eSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZ2V0b3ducHJvcGVydHlkZXNjcmlwdG9yIC0tIHNhZmVcbnZhciAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbnZhciBFTlVNRVJBQkxFID0gJ2VudW1lcmFibGUnO1xudmFyIENPTkZJR1VSQUJMRSA9ICdjb25maWd1cmFibGUnO1xudmFyIFdSSVRBQkxFID0gJ3dyaXRhYmxlJztcblxuLy8gYE9iamVjdC5kZWZpbmVQcm9wZXJ0eWAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5kZWZpbmVwcm9wZXJ0eVxuZXhwb3J0cy5mID0gREVTQ1JJUFRPUlMgPyBWOF9QUk9UT1RZUEVfREVGSU5FX0JVRyA/IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpIHtcbiAgYW5PYmplY3QoTyk7XG4gIFAgPSB0b1Byb3BlcnR5S2V5KFApO1xuICBhbk9iamVjdChBdHRyaWJ1dGVzKTtcbiAgaWYgKHR5cGVvZiBPID09PSAnZnVuY3Rpb24nICYmIFAgPT09ICdwcm90b3R5cGUnICYmICd2YWx1ZScgaW4gQXR0cmlidXRlcyAmJiBXUklUQUJMRSBpbiBBdHRyaWJ1dGVzICYmICFBdHRyaWJ1dGVzW1dSSVRBQkxFXSkge1xuICAgIHZhciBjdXJyZW50ID0gJGdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKTtcbiAgICBpZiAoY3VycmVudCAmJiBjdXJyZW50W1dSSVRBQkxFXSkge1xuICAgICAgT1tQXSA9IEF0dHJpYnV0ZXMudmFsdWU7XG4gICAgICBBdHRyaWJ1dGVzID0ge1xuICAgICAgICBjb25maWd1cmFibGU6IENPTkZJR1VSQUJMRSBpbiBBdHRyaWJ1dGVzID8gQXR0cmlidXRlc1tDT05GSUdVUkFCTEVdIDogY3VycmVudFtDT05GSUdVUkFCTEVdLFxuICAgICAgICBlbnVtZXJhYmxlOiBFTlVNRVJBQkxFIGluIEF0dHJpYnV0ZXMgPyBBdHRyaWJ1dGVzW0VOVU1FUkFCTEVdIDogY3VycmVudFtFTlVNRVJBQkxFXSxcbiAgICAgICAgd3JpdGFibGU6IGZhbHNlXG4gICAgICB9O1xuICAgIH1cbiAgfSByZXR1cm4gJGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpO1xufSA6ICRkZWZpbmVQcm9wZXJ0eSA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpIHtcbiAgYW5PYmplY3QoTyk7XG4gIFAgPSB0b1Byb3BlcnR5S2V5KFApO1xuICBhbk9iamVjdChBdHRyaWJ1dGVzKTtcbiAgaWYgKElFOF9ET01fREVGSU5FKSB0cnkge1xuICAgIHJldHVybiAkZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcyk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGVtcHR5ICovIH1cbiAgaWYgKCdnZXQnIGluIEF0dHJpYnV0ZXMgfHwgJ3NldCcgaW4gQXR0cmlidXRlcykgdGhyb3cgbmV3ICRUeXBlRXJyb3IoJ0FjY2Vzc29ycyBub3Qgc3VwcG9ydGVkJyk7XG4gIGlmICgndmFsdWUnIGluIEF0dHJpYnV0ZXMpIE9bUF0gPSBBdHRyaWJ1dGVzLnZhbHVlO1xuICByZXR1cm4gTztcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgZGVmaW5lUHJvcGVydHlNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpO1xudmFyIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHktZGVzY3JpcHRvcicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IERFU0NSSVBUT1JTID8gZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICByZXR1cm4gZGVmaW5lUHJvcGVydHlNb2R1bGUuZihvYmplY3QsIGtleSwgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yKDEsIHZhbHVlKSk7XG59IDogZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICBvYmplY3Rba2V5XSA9IHZhbHVlO1xuICByZXR1cm4gb2JqZWN0O1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBoYXNPd24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eScpO1xuXG52YXIgRnVuY3Rpb25Qcm90b3R5cGUgPSBGdW5jdGlvbi5wcm90b3R5cGU7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5ZGVzY3JpcHRvciAtLSBzYWZlXG52YXIgZ2V0RGVzY3JpcHRvciA9IERFU0NSSVBUT1JTICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbnZhciBFWElTVFMgPSBoYXNPd24oRnVuY3Rpb25Qcm90b3R5cGUsICduYW1lJyk7XG4vLyBhZGRpdGlvbmFsIHByb3RlY3Rpb24gZnJvbSBtaW5pZmllZCAvIG1hbmdsZWQgLyBkcm9wcGVkIGZ1bmN0aW9uIG5hbWVzXG52YXIgUFJPUEVSID0gRVhJU1RTICYmIGZ1bmN0aW9uIHNvbWV0aGluZygpIHsgLyogZW1wdHkgKi8gfS5uYW1lID09PSAnc29tZXRoaW5nJztcbnZhciBDT05GSUdVUkFCTEUgPSBFWElTVFMgJiYgKCFERVNDUklQVE9SUyB8fCAoREVTQ1JJUFRPUlMgJiYgZ2V0RGVzY3JpcHRvcihGdW5jdGlvblByb3RvdHlwZSwgJ25hbWUnKS5jb25maWd1cmFibGUpKTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIEVYSVNUUzogRVhJU1RTLFxuICBQUk9QRVI6IFBST1BFUixcbiAgQ09ORklHVVJBQkxFOiBDT05GSUdVUkFCTEVcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcbnZhciBzdG9yZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQtc3RvcmUnKTtcblxudmFyIGZ1bmN0aW9uVG9TdHJpbmcgPSB1bmN1cnJ5VGhpcyhGdW5jdGlvbi50b1N0cmluZyk7XG5cbi8vIHRoaXMgaGVscGVyIGJyb2tlbiBpbiBgY29yZS1qc0AzLjQuMS0zLjQuNGAsIHNvIHdlIGNhbid0IHVzZSBgc2hhcmVkYCBoZWxwZXJcbmlmICghaXNDYWxsYWJsZShzdG9yZS5pbnNwZWN0U291cmNlKSkge1xuICBzdG9yZS5pbnNwZWN0U291cmNlID0gZnVuY3Rpb24gKGl0KSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uVG9TdHJpbmcoaXQpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0b3JlLmluc3BlY3RTb3VyY2U7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbFRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsLXRoaXMnKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG5cbnZhciBXZWFrTWFwID0gZ2xvYmFsVGhpcy5XZWFrTWFwO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzQ2FsbGFibGUoV2Vha01hcCkgJiYgL25hdGl2ZSBjb2RlLy50ZXN0KFN0cmluZyhXZWFrTWFwKSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQnKTtcbnZhciB1aWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdWlkJyk7XG5cbnZhciBrZXlzID0gc2hhcmVkKCdrZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4ga2V5c1trZXldIHx8IChrZXlzW2tleV0gPSB1aWQoa2V5KSk7XG59O1xuIiwgIid1c2Ugc3RyaWN0Jztcbm1vZHVsZS5leHBvcnRzID0ge307XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIE5BVElWRV9XRUFLX01BUCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWFrLW1hcC1iYXNpYy1kZXRlY3Rpb24nKTtcbnZhciBnbG9iYWxUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbC10aGlzJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG52YXIgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1ub24tZW51bWVyYWJsZS1wcm9wZXJ0eScpO1xudmFyIGhhc093biA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMtb3duLXByb3BlcnR5Jyk7XG52YXIgc2hhcmVkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZC1zdG9yZScpO1xudmFyIHNoYXJlZEtleSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQta2V5Jyk7XG52YXIgaGlkZGVuS2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oaWRkZW4ta2V5cycpO1xuXG52YXIgT0JKRUNUX0FMUkVBRFlfSU5JVElBTElaRUQgPSAnT2JqZWN0IGFscmVhZHkgaW5pdGlhbGl6ZWQnO1xudmFyIFR5cGVFcnJvciA9IGdsb2JhbFRoaXMuVHlwZUVycm9yO1xudmFyIFdlYWtNYXAgPSBnbG9iYWxUaGlzLldlYWtNYXA7XG52YXIgc2V0LCBnZXQsIGhhcztcblxudmFyIGVuZm9yY2UgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGhhcyhpdCkgPyBnZXQoaXQpIDogc2V0KGl0LCB7fSk7XG59O1xuXG52YXIgZ2V0dGVyRm9yID0gZnVuY3Rpb24gKFRZUEUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChpdCkge1xuICAgIHZhciBzdGF0ZTtcbiAgICBpZiAoIWlzT2JqZWN0KGl0KSB8fCAoc3RhdGUgPSBnZXQoaXQpKS50eXBlICE9PSBUWVBFKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdJbmNvbXBhdGlibGUgcmVjZWl2ZXIsICcgKyBUWVBFICsgJyByZXF1aXJlZCcpO1xuICAgIH0gcmV0dXJuIHN0YXRlO1xuICB9O1xufTtcblxuaWYgKE5BVElWRV9XRUFLX01BUCB8fCBzaGFyZWQuc3RhdGUpIHtcbiAgdmFyIHN0b3JlID0gc2hhcmVkLnN0YXRlIHx8IChzaGFyZWQuc3RhdGUgPSBuZXcgV2Vha01hcCgpKTtcbiAgLyogZXNsaW50LWRpc2FibGUgbm8tc2VsZi1hc3NpZ24gLS0gcHJvdG90eXBlIG1ldGhvZHMgcHJvdGVjdGlvbiAqL1xuICBzdG9yZS5nZXQgPSBzdG9yZS5nZXQ7XG4gIHN0b3JlLmhhcyA9IHN0b3JlLmhhcztcbiAgc3RvcmUuc2V0ID0gc3RvcmUuc2V0O1xuICAvKiBlc2xpbnQtZW5hYmxlIG5vLXNlbGYtYXNzaWduIC0tIHByb3RvdHlwZSBtZXRob2RzIHByb3RlY3Rpb24gKi9cbiAgc2V0ID0gZnVuY3Rpb24gKGl0LCBtZXRhZGF0YSkge1xuICAgIGlmIChzdG9yZS5oYXMoaXQpKSB0aHJvdyBuZXcgVHlwZUVycm9yKE9CSkVDVF9BTFJFQURZX0lOSVRJQUxJWkVEKTtcbiAgICBtZXRhZGF0YS5mYWNhZGUgPSBpdDtcbiAgICBzdG9yZS5zZXQoaXQsIG1ldGFkYXRhKTtcbiAgICByZXR1cm4gbWV0YWRhdGE7XG4gIH07XG4gIGdldCA9IGZ1bmN0aW9uIChpdCkge1xuICAgIHJldHVybiBzdG9yZS5nZXQoaXQpIHx8IHt9O1xuICB9O1xuICBoYXMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgICByZXR1cm4gc3RvcmUuaGFzKGl0KTtcbiAgfTtcbn0gZWxzZSB7XG4gIHZhciBTVEFURSA9IHNoYXJlZEtleSgnc3RhdGUnKTtcbiAgaGlkZGVuS2V5c1tTVEFURV0gPSB0cnVlO1xuICBzZXQgPSBmdW5jdGlvbiAoaXQsIG1ldGFkYXRhKSB7XG4gICAgaWYgKGhhc093bihpdCwgU1RBVEUpKSB0aHJvdyBuZXcgVHlwZUVycm9yKE9CSkVDVF9BTFJFQURZX0lOSVRJQUxJWkVEKTtcbiAgICBtZXRhZGF0YS5mYWNhZGUgPSBpdDtcbiAgICBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkoaXQsIFNUQVRFLCBtZXRhZGF0YSk7XG4gICAgcmV0dXJuIG1ldGFkYXRhO1xuICB9O1xuICBnZXQgPSBmdW5jdGlvbiAoaXQpIHtcbiAgICByZXR1cm4gaGFzT3duKGl0LCBTVEFURSkgPyBpdFtTVEFURV0gOiB7fTtcbiAgfTtcbiAgaGFzID0gZnVuY3Rpb24gKGl0KSB7XG4gICAgcmV0dXJuIGhhc093bihpdCwgU1RBVEUpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgc2V0OiBzZXQsXG4gIGdldDogZ2V0LFxuICBoYXM6IGhhcyxcbiAgZW5mb3JjZTogZW5mb3JjZSxcbiAgZ2V0dGVyRm9yOiBnZXR0ZXJGb3Jcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xudmFyIGhhc093biA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMtb3duLXByb3BlcnR5Jyk7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBDT05GSUdVUkFCTEVfRlVOQ1RJT05fTkFNRSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1uYW1lJykuQ09ORklHVVJBQkxFO1xudmFyIGluc3BlY3RTb3VyY2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaW5zcGVjdC1zb3VyY2UnKTtcbnZhciBJbnRlcm5hbFN0YXRlTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ludGVybmFsLXN0YXRlJyk7XG5cbnZhciBlbmZvcmNlSW50ZXJuYWxTdGF0ZSA9IEludGVybmFsU3RhdGVNb2R1bGUuZW5mb3JjZTtcbnZhciBnZXRJbnRlcm5hbFN0YXRlID0gSW50ZXJuYWxTdGF0ZU1vZHVsZS5nZXQ7XG52YXIgJFN0cmluZyA9IFN0cmluZztcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZGVmaW5lcHJvcGVydHkgLS0gc2FmZVxudmFyIGRlZmluZVByb3BlcnR5ID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xudmFyIHN0cmluZ1NsaWNlID0gdW5jdXJyeVRoaXMoJycuc2xpY2UpO1xudmFyIHJlcGxhY2UgPSB1bmN1cnJ5VGhpcygnJy5yZXBsYWNlKTtcbnZhciBqb2luID0gdW5jdXJyeVRoaXMoW10uam9pbik7XG5cbnZhciBDT05GSUdVUkFCTEVfTEVOR1RIID0gREVTQ1JJUFRPUlMgJiYgIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGRlZmluZVByb3BlcnR5KGZ1bmN0aW9uICgpIHsgLyogZW1wdHkgKi8gfSwgJ2xlbmd0aCcsIHsgdmFsdWU6IDggfSkubGVuZ3RoICE9PSA4O1xufSk7XG5cbnZhciBURU1QTEFURSA9IFN0cmluZyhTdHJpbmcpLnNwbGl0KCdTdHJpbmcnKTtcblxudmFyIG1ha2VCdWlsdEluID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodmFsdWUsIG5hbWUsIG9wdGlvbnMpIHtcbiAgaWYgKHN0cmluZ1NsaWNlKCRTdHJpbmcobmFtZSksIDAsIDcpID09PSAnU3ltYm9sKCcpIHtcbiAgICBuYW1lID0gJ1snICsgcmVwbGFjZSgkU3RyaW5nKG5hbWUpLCAvXlN5bWJvbFxcKChbXildKilcXCkuKiQvLCAnJDEnKSArICddJztcbiAgfVxuICBpZiAob3B0aW9ucyAmJiBvcHRpb25zLmdldHRlcikgbmFtZSA9ICdnZXQgJyArIG5hbWU7XG4gIGlmIChvcHRpb25zICYmIG9wdGlvbnMuc2V0dGVyKSBuYW1lID0gJ3NldCAnICsgbmFtZTtcbiAgaWYgKCFoYXNPd24odmFsdWUsICduYW1lJykgfHwgKENPTkZJR1VSQUJMRV9GVU5DVElPTl9OQU1FICYmIHZhbHVlLm5hbWUgIT09IG5hbWUpKSB7XG4gICAgaWYgKERFU0NSSVBUT1JTKSBkZWZpbmVQcm9wZXJ0eSh2YWx1ZSwgJ25hbWUnLCB7IHZhbHVlOiBuYW1lLCBjb25maWd1cmFibGU6IHRydWUgfSk7XG4gICAgZWxzZSB2YWx1ZS5uYW1lID0gbmFtZTtcbiAgfVxuICBpZiAoQ09ORklHVVJBQkxFX0xFTkdUSCAmJiBvcHRpb25zICYmIGhhc093bihvcHRpb25zLCAnYXJpdHknKSAmJiB2YWx1ZS5sZW5ndGggIT09IG9wdGlvbnMuYXJpdHkpIHtcbiAgICBkZWZpbmVQcm9wZXJ0eSh2YWx1ZSwgJ2xlbmd0aCcsIHsgdmFsdWU6IG9wdGlvbnMuYXJpdHkgfSk7XG4gIH1cbiAgdHJ5IHtcbiAgICBpZiAob3B0aW9ucyAmJiBoYXNPd24ob3B0aW9ucywgJ2NvbnN0cnVjdG9yJykgJiYgb3B0aW9ucy5jb25zdHJ1Y3Rvcikge1xuICAgICAgaWYgKERFU0NSSVBUT1JTKSBkZWZpbmVQcm9wZXJ0eSh2YWx1ZSwgJ3Byb3RvdHlwZScsIHsgd3JpdGFibGU6IGZhbHNlIH0pO1xuICAgIC8vIGluIFY4IH4gQ2hyb21lIDUzLCBwcm90b3R5cGVzIG9mIHNvbWUgbWV0aG9kcywgbGlrZSBgQXJyYXkucHJvdG90eXBlLnZhbHVlc2AsIGFyZSBub24td3JpdGFibGVcbiAgICB9IGVsc2UgaWYgKHZhbHVlLnByb3RvdHlwZSkgdmFsdWUucHJvdG90eXBlID0gdW5kZWZpbmVkO1xuICB9IGNhdGNoIChlcnJvcikgeyAvKiBlbXB0eSAqLyB9XG4gIHZhciBzdGF0ZSA9IGVuZm9yY2VJbnRlcm5hbFN0YXRlKHZhbHVlKTtcbiAgaWYgKCFoYXNPd24oc3RhdGUsICdzb3VyY2UnKSkge1xuICAgIHN0YXRlLnNvdXJjZSA9IGpvaW4oVEVNUExBVEUsIHR5cGVvZiBuYW1lID09ICdzdHJpbmcnID8gbmFtZSA6ICcnKTtcbiAgfSByZXR1cm4gdmFsdWU7XG59O1xuXG4vLyBhZGQgZmFrZSBGdW5jdGlvbiN0b1N0cmluZyBmb3IgY29ycmVjdCB3b3JrIHdyYXBwZWQgbWV0aG9kcyAvIGNvbnN0cnVjdG9ycyB3aXRoIG1ldGhvZHMgbGlrZSBMb0Rhc2ggaXNOYXRpdmVcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1leHRlbmQtbmF0aXZlIC0tIHJlcXVpcmVkXG5GdW5jdGlvbi5wcm90b3R5cGUudG9TdHJpbmcgPSBtYWtlQnVpbHRJbihmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgcmV0dXJuIGlzQ2FsbGFibGUodGhpcykgJiYgZ2V0SW50ZXJuYWxTdGF0ZSh0aGlzKS5zb3VyY2UgfHwgaW5zcGVjdFNvdXJjZSh0aGlzKTtcbn0sICd0b1N0cmluZycpO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgZGVmaW5lUHJvcGVydHlNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpO1xudmFyIG1ha2VCdWlsdEluID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL21ha2UtYnVpbHQtaW4nKTtcbnZhciBkZWZpbmVHbG9iYWxQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZWZpbmUtZ2xvYmFsLXByb3BlcnR5Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKE8sIGtleSwgdmFsdWUsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSBvcHRpb25zID0ge307XG4gIHZhciBzaW1wbGUgPSBvcHRpb25zLmVudW1lcmFibGU7XG4gIHZhciBuYW1lID0gb3B0aW9ucy5uYW1lICE9PSB1bmRlZmluZWQgPyBvcHRpb25zLm5hbWUgOiBrZXk7XG4gIGlmIChpc0NhbGxhYmxlKHZhbHVlKSkgbWFrZUJ1aWx0SW4odmFsdWUsIG5hbWUsIG9wdGlvbnMpO1xuICBpZiAob3B0aW9ucy5nbG9iYWwpIHtcbiAgICBpZiAoc2ltcGxlKSBPW2tleV0gPSB2YWx1ZTtcbiAgICBlbHNlIGRlZmluZUdsb2JhbFByb3BlcnR5KGtleSwgdmFsdWUpO1xuICB9IGVsc2Uge1xuICAgIHRyeSB7XG4gICAgICBpZiAoIW9wdGlvbnMudW5zYWZlKSBkZWxldGUgT1trZXldO1xuICAgICAgZWxzZSBpZiAoT1trZXldKSBzaW1wbGUgPSB0cnVlO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGVtcHR5ICovIH1cbiAgICBpZiAoc2ltcGxlKSBPW2tleV0gPSB2YWx1ZTtcbiAgICBlbHNlIGRlZmluZVByb3BlcnR5TW9kdWxlLmYoTywga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogIW9wdGlvbnMubm9uQ29uZmlndXJhYmxlLFxuICAgICAgd3JpdGFibGU6ICFvcHRpb25zLm5vbldyaXRhYmxlXG4gICAgfSk7XG4gIH0gcmV0dXJuIE87XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBjZWlsID0gTWF0aC5jZWlsO1xudmFyIGZsb29yID0gTWF0aC5mbG9vcjtcblxuLy8gYE1hdGgudHJ1bmNgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1tYXRoLnRydW5jXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tbWF0aC10cnVuYyAtLSBzYWZlXG5tb2R1bGUuZXhwb3J0cyA9IE1hdGgudHJ1bmMgfHwgZnVuY3Rpb24gdHJ1bmMoeCkge1xuICB2YXIgbiA9ICt4O1xuICByZXR1cm4gKG4gPiAwID8gZmxvb3IgOiBjZWlsKShuKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHRydW5jID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL21hdGgtdHJ1bmMnKTtcblxuLy8gYFRvSW50ZWdlck9ySW5maW5pdHlgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy10b2ludGVnZXJvcmluZmluaXR5XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICB2YXIgbnVtYmVyID0gK2FyZ3VtZW50O1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlIC0tIE5hTiBjaGVja1xuICByZXR1cm4gbnVtYmVyICE9PSBudW1iZXIgfHwgbnVtYmVyID09PSAwID8gMCA6IHRydW5jKG51bWJlcik7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB0b0ludGVnZXJPckluZmluaXR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWludGVnZXItb3ItaW5maW5pdHknKTtcblxudmFyIG1heCA9IE1hdGgubWF4O1xudmFyIG1pbiA9IE1hdGgubWluO1xuXG4vLyBIZWxwZXIgZm9yIGEgcG9wdWxhciByZXBlYXRpbmcgY2FzZSBvZiB0aGUgc3BlYzpcbi8vIExldCBpbnRlZ2VyIGJlID8gVG9JbnRlZ2VyKGluZGV4KS5cbi8vIElmIGludGVnZXIgPCAwLCBsZXQgcmVzdWx0IGJlIG1heCgobGVuZ3RoICsgaW50ZWdlciksIDApOyBlbHNlIGxldCByZXN1bHQgYmUgbWluKGludGVnZXIsIGxlbmd0aCkuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpbmRleCwgbGVuZ3RoKSB7XG4gIHZhciBpbnRlZ2VyID0gdG9JbnRlZ2VyT3JJbmZpbml0eShpbmRleCk7XG4gIHJldHVybiBpbnRlZ2VyIDwgMCA/IG1heChpbnRlZ2VyICsgbGVuZ3RoLCAwKSA6IG1pbihpbnRlZ2VyLCBsZW5ndGgpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdG9JbnRlZ2VyT3JJbmZpbml0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbnRlZ2VyLW9yLWluZmluaXR5Jyk7XG5cbnZhciBtaW4gPSBNYXRoLm1pbjtcblxuLy8gYFRvTGVuZ3RoYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtdG9sZW5ndGhcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHZhciBsZW4gPSB0b0ludGVnZXJPckluZmluaXR5KGFyZ3VtZW50KTtcbiAgcmV0dXJuIGxlbiA+IDAgPyBtaW4obGVuLCAweDFGRkZGRkZGRkZGRkZGKSA6IDA7IC8vIDIgKiogNTMgLSAxID09IDkwMDcxOTkyNTQ3NDA5OTFcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWxlbmd0aCcpO1xuXG4vLyBgTGVuZ3RoT2ZBcnJheUxpa2VgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1sZW5ndGhvZmFycmF5bGlrZVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiB0b0xlbmd0aChvYmoubGVuZ3RoKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHRvSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbmRleGVkLW9iamVjdCcpO1xudmFyIHRvQWJzb2x1dGVJbmRleCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1hYnNvbHV0ZS1pbmRleCcpO1xudmFyIGxlbmd0aE9mQXJyYXlMaWtlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2xlbmd0aC1vZi1hcnJheS1saWtlJyk7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUueyBpbmRleE9mLCBpbmNsdWRlcyB9YCBtZXRob2RzIGltcGxlbWVudGF0aW9uXG52YXIgY3JlYXRlTWV0aG9kID0gZnVuY3Rpb24gKElTX0lOQ0xVREVTKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoJHRoaXMsIGVsLCBmcm9tSW5kZXgpIHtcbiAgICB2YXIgTyA9IHRvSW5kZXhlZE9iamVjdCgkdGhpcyk7XG4gICAgdmFyIGxlbmd0aCA9IGxlbmd0aE9mQXJyYXlMaWtlKE8pO1xuICAgIGlmIChsZW5ndGggPT09IDApIHJldHVybiAhSVNfSU5DTFVERVMgJiYgLTE7XG4gICAgdmFyIGluZGV4ID0gdG9BYnNvbHV0ZUluZGV4KGZyb21JbmRleCwgbGVuZ3RoKTtcbiAgICB2YXIgdmFsdWU7XG4gICAgLy8gQXJyYXkjaW5jbHVkZXMgdXNlcyBTYW1lVmFsdWVaZXJvIGVxdWFsaXR5IGFsZ29yaXRobVxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmUgLS0gTmFOIGNoZWNrXG4gICAgaWYgKElTX0lOQ0xVREVTICYmIGVsICE9PSBlbCkgd2hpbGUgKGxlbmd0aCA+IGluZGV4KSB7XG4gICAgICB2YWx1ZSA9IE9baW5kZXgrK107XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlIC0tIE5hTiBjaGVja1xuICAgICAgaWYgKHZhbHVlICE9PSB2YWx1ZSkgcmV0dXJuIHRydWU7XG4gICAgLy8gQXJyYXkjaW5kZXhPZiBpZ25vcmVzIGhvbGVzLCBBcnJheSNpbmNsdWRlcyAtIG5vdFxuICAgIH0gZWxzZSBmb3IgKDtsZW5ndGggPiBpbmRleDsgaW5kZXgrKykge1xuICAgICAgaWYgKChJU19JTkNMVURFUyB8fCBpbmRleCBpbiBPKSAmJiBPW2luZGV4XSA9PT0gZWwpIHJldHVybiBJU19JTkNMVURFUyB8fCBpbmRleCB8fCAwO1xuICAgIH0gcmV0dXJuICFJU19JTkNMVURFUyAmJiAtMTtcbiAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAvLyBgQXJyYXkucHJvdG90eXBlLmluY2x1ZGVzYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuaW5jbHVkZXNcbiAgaW5jbHVkZXM6IGNyZWF0ZU1ldGhvZCh0cnVlKSxcbiAgLy8gYEFycmF5LnByb3RvdHlwZS5pbmRleE9mYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuaW5kZXhvZlxuICBpbmRleE9mOiBjcmVhdGVNZXRob2QoZmFsc2UpXG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcbnZhciBoYXNPd24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eScpO1xudmFyIHRvSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbmRleGVkLW9iamVjdCcpO1xudmFyIGluZGV4T2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktaW5jbHVkZXMnKS5pbmRleE9mO1xudmFyIGhpZGRlbktleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGlkZGVuLWtleXMnKTtcblxudmFyIHB1c2ggPSB1bmN1cnJ5VGhpcyhbXS5wdXNoKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob2JqZWN0LCBuYW1lcykge1xuICB2YXIgTyA9IHRvSW5kZXhlZE9iamVjdChvYmplY3QpO1xuICB2YXIgaSA9IDA7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgdmFyIGtleTtcbiAgZm9yIChrZXkgaW4gTykgIWhhc093bihoaWRkZW5LZXlzLCBrZXkpICYmIGhhc093bihPLCBrZXkpICYmIHB1c2gocmVzdWx0LCBrZXkpO1xuICAvLyBEb24ndCBlbnVtIGJ1ZyAmIGhpZGRlbiBrZXlzXG4gIHdoaWxlIChuYW1lcy5sZW5ndGggPiBpKSBpZiAoaGFzT3duKE8sIGtleSA9IG5hbWVzW2krK10pKSB7XG4gICAgfmluZGV4T2YocmVzdWx0LCBrZXkpIHx8IHB1c2gocmVzdWx0LCBrZXkpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuIiwgIid1c2Ugc3RyaWN0Jztcbi8vIElFOC0gZG9uJ3QgZW51bSBidWcga2V5c1xubW9kdWxlLmV4cG9ydHMgPSBbXG4gICdjb25zdHJ1Y3RvcicsXG4gICdoYXNPd25Qcm9wZXJ0eScsXG4gICdpc1Byb3RvdHlwZU9mJyxcbiAgJ3Byb3BlcnR5SXNFbnVtZXJhYmxlJyxcbiAgJ3RvTG9jYWxlU3RyaW5nJyxcbiAgJ3RvU3RyaW5nJyxcbiAgJ3ZhbHVlT2YnXG5dO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBpbnRlcm5hbE9iamVjdEtleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWtleXMtaW50ZXJuYWwnKTtcbnZhciBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbnVtLWJ1Zy1rZXlzJyk7XG5cbnZhciBoaWRkZW5LZXlzID0gZW51bUJ1Z0tleXMuY29uY2F0KCdsZW5ndGgnLCAncHJvdG90eXBlJyk7XG5cbi8vIGBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lc2AgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5nZXRvd25wcm9wZXJ0eW5hbWVzXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5bmFtZXMgLS0gc2FmZVxuZXhwb3J0cy5mID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMgfHwgZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhPKSB7XG4gIHJldHVybiBpbnRlcm5hbE9iamVjdEtleXMoTywgaGlkZGVuS2V5cyk7XG59O1xuIiwgIid1c2Ugc3RyaWN0Jztcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZ2V0b3ducHJvcGVydHlzeW1ib2xzIC0tIHNhZmVcbmV4cG9ydHMuZiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGdldEJ1aWx0SW4gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LWJ1aWx0LWluJyk7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgZ2V0T3duUHJvcGVydHlOYW1lc01vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1uYW1lcycpO1xudmFyIGdldE93blByb3BlcnR5U3ltYm9sc01vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1zeW1ib2xzJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG5cbnZhciBjb25jYXQgPSB1bmN1cnJ5VGhpcyhbXS5jb25jYXQpO1xuXG4vLyBhbGwgb2JqZWN0IGtleXMsIGluY2x1ZGVzIG5vbi1lbnVtZXJhYmxlIGFuZCBzeW1ib2xzXG5tb2R1bGUuZXhwb3J0cyA9IGdldEJ1aWx0SW4oJ1JlZmxlY3QnLCAnb3duS2V5cycpIHx8IGZ1bmN0aW9uIG93bktleXMoaXQpIHtcbiAgdmFyIGtleXMgPSBnZXRPd25Qcm9wZXJ0eU5hbWVzTW9kdWxlLmYoYW5PYmplY3QoaXQpKTtcbiAgdmFyIGdldE93blByb3BlcnR5U3ltYm9scyA9IGdldE93blByb3BlcnR5U3ltYm9sc01vZHVsZS5mO1xuICByZXR1cm4gZ2V0T3duUHJvcGVydHlTeW1ib2xzID8gY29uY2F0KGtleXMsIGdldE93blByb3BlcnR5U3ltYm9scyhpdCkpIDoga2V5cztcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGhhc093biA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMtb3duLXByb3BlcnR5Jyk7XG52YXIgb3duS2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vd24ta2V5cycpO1xudmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvck1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yJyk7XG52YXIgZGVmaW5lUHJvcGVydHlNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh0YXJnZXQsIHNvdXJjZSwgZXhjZXB0aW9ucykge1xuICB2YXIga2V5cyA9IG93bktleXMoc291cmNlKTtcbiAgdmFyIGRlZmluZVByb3BlcnR5ID0gZGVmaW5lUHJvcGVydHlNb2R1bGUuZjtcbiAgdmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvck1vZHVsZS5mO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIga2V5ID0ga2V5c1tpXTtcbiAgICBpZiAoIWhhc093bih0YXJnZXQsIGtleSkgJiYgIShleGNlcHRpb25zICYmIGhhc093bihleGNlcHRpb25zLCBrZXkpKSkge1xuICAgICAgZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpO1xuICAgIH1cbiAgfVxufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG5cbnZhciByZXBsYWNlbWVudCA9IC8jfFxcLnByb3RvdHlwZVxcLi87XG5cbnZhciBpc0ZvcmNlZCA9IGZ1bmN0aW9uIChmZWF0dXJlLCBkZXRlY3Rpb24pIHtcbiAgdmFyIHZhbHVlID0gZGF0YVtub3JtYWxpemUoZmVhdHVyZSldO1xuICByZXR1cm4gdmFsdWUgPT09IFBPTFlGSUxMID8gdHJ1ZVxuICAgIDogdmFsdWUgPT09IE5BVElWRSA/IGZhbHNlXG4gICAgOiBpc0NhbGxhYmxlKGRldGVjdGlvbikgPyBmYWlscyhkZXRlY3Rpb24pXG4gICAgOiAhIWRldGVjdGlvbjtcbn07XG5cbnZhciBub3JtYWxpemUgPSBpc0ZvcmNlZC5ub3JtYWxpemUgPSBmdW5jdGlvbiAoc3RyaW5nKSB7XG4gIHJldHVybiBTdHJpbmcoc3RyaW5nKS5yZXBsYWNlKHJlcGxhY2VtZW50LCAnLicpLnRvTG93ZXJDYXNlKCk7XG59O1xuXG52YXIgZGF0YSA9IGlzRm9yY2VkLmRhdGEgPSB7fTtcbnZhciBOQVRJVkUgPSBpc0ZvcmNlZC5OQVRJVkUgPSAnTic7XG52YXIgUE9MWUZJTEwgPSBpc0ZvcmNlZC5QT0xZRklMTCA9ICdQJztcblxubW9kdWxlLmV4cG9ydHMgPSBpc0ZvcmNlZDtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsVGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwtdGhpcycpO1xudmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yJykuZjtcbnZhciBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLW5vbi1lbnVtZXJhYmxlLXByb3BlcnR5Jyk7XG52YXIgZGVmaW5lQnVpbHRJbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZWZpbmUtYnVpbHQtaW4nKTtcbnZhciBkZWZpbmVHbG9iYWxQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZWZpbmUtZ2xvYmFsLXByb3BlcnR5Jyk7XG52YXIgY29weUNvbnN0cnVjdG9yUHJvcGVydGllcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jb3B5LWNvbnN0cnVjdG9yLXByb3BlcnRpZXMnKTtcbnZhciBpc0ZvcmNlZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1mb3JjZWQnKTtcblxuLypcbiAgb3B0aW9ucy50YXJnZXQgICAgICAgICAtIG5hbWUgb2YgdGhlIHRhcmdldCBvYmplY3RcbiAgb3B0aW9ucy5nbG9iYWwgICAgICAgICAtIHRhcmdldCBpcyB0aGUgZ2xvYmFsIG9iamVjdFxuICBvcHRpb25zLnN0YXQgICAgICAgICAgIC0gZXhwb3J0IGFzIHN0YXRpYyBtZXRob2RzIG9mIHRhcmdldFxuICBvcHRpb25zLnByb3RvICAgICAgICAgIC0gZXhwb3J0IGFzIHByb3RvdHlwZSBtZXRob2RzIG9mIHRhcmdldFxuICBvcHRpb25zLnJlYWwgICAgICAgICAgIC0gcmVhbCBwcm90b3R5cGUgbWV0aG9kIGZvciB0aGUgYHB1cmVgIHZlcnNpb25cbiAgb3B0aW9ucy5mb3JjZWQgICAgICAgICAtIGV4cG9ydCBldmVuIGlmIHRoZSBuYXRpdmUgZmVhdHVyZSBpcyBhdmFpbGFibGVcbiAgb3B0aW9ucy5iaW5kICAgICAgICAgICAtIGJpbmQgbWV0aG9kcyB0byB0aGUgdGFyZ2V0LCByZXF1aXJlZCBmb3IgdGhlIGBwdXJlYCB2ZXJzaW9uXG4gIG9wdGlvbnMud3JhcCAgICAgICAgICAgLSB3cmFwIGNvbnN0cnVjdG9ycyB0byBwcmV2ZW50aW5nIGdsb2JhbCBwb2xsdXRpb24sIHJlcXVpcmVkIGZvciB0aGUgYHB1cmVgIHZlcnNpb25cbiAgb3B0aW9ucy51bnNhZmUgICAgICAgICAtIHVzZSB0aGUgc2ltcGxlIGFzc2lnbm1lbnQgb2YgcHJvcGVydHkgaW5zdGVhZCBvZiBkZWxldGUgKyBkZWZpbmVQcm9wZXJ0eVxuICBvcHRpb25zLnNoYW0gICAgICAgICAgIC0gYWRkIGEgZmxhZyB0byBub3QgY29tcGxldGVseSBmdWxsIHBvbHlmaWxsc1xuICBvcHRpb25zLmVudW1lcmFibGUgICAgIC0gZXhwb3J0IGFzIGVudW1lcmFibGUgcHJvcGVydHlcbiAgb3B0aW9ucy5kb250Q2FsbEdldFNldCAtIHByZXZlbnQgY2FsbGluZyBhIGdldHRlciBvbiB0YXJnZXRcbiAgb3B0aW9ucy5uYW1lICAgICAgICAgICAtIHRoZSAubmFtZSBvZiB0aGUgZnVuY3Rpb24gaWYgaXQgZG9lcyBub3QgbWF0Y2ggdGhlIGtleVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9wdGlvbnMsIHNvdXJjZSkge1xuICB2YXIgVEFSR0VUID0gb3B0aW9ucy50YXJnZXQ7XG4gIHZhciBHTE9CQUwgPSBvcHRpb25zLmdsb2JhbDtcbiAgdmFyIFNUQVRJQyA9IG9wdGlvbnMuc3RhdDtcbiAgdmFyIEZPUkNFRCwgdGFyZ2V0LCBrZXksIHRhcmdldFByb3BlcnR5LCBzb3VyY2VQcm9wZXJ0eSwgZGVzY3JpcHRvcjtcbiAgaWYgKEdMT0JBTCkge1xuICAgIHRhcmdldCA9IGdsb2JhbFRoaXM7XG4gIH0gZWxzZSBpZiAoU1RBVElDKSB7XG4gICAgdGFyZ2V0ID0gZ2xvYmFsVGhpc1tUQVJHRVRdIHx8IGRlZmluZUdsb2JhbFByb3BlcnR5KFRBUkdFVCwge30pO1xuICB9IGVsc2Uge1xuICAgIHRhcmdldCA9IGdsb2JhbFRoaXNbVEFSR0VUXSAmJiBnbG9iYWxUaGlzW1RBUkdFVF0ucHJvdG90eXBlO1xuICB9XG4gIGlmICh0YXJnZXQpIGZvciAoa2V5IGluIHNvdXJjZSkge1xuICAgIHNvdXJjZVByb3BlcnR5ID0gc291cmNlW2tleV07XG4gICAgaWYgKG9wdGlvbnMuZG9udENhbGxHZXRTZXQpIHtcbiAgICAgIGRlc2NyaXB0b3IgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpO1xuICAgICAgdGFyZ2V0UHJvcGVydHkgPSBkZXNjcmlwdG9yICYmIGRlc2NyaXB0b3IudmFsdWU7XG4gICAgfSBlbHNlIHRhcmdldFByb3BlcnR5ID0gdGFyZ2V0W2tleV07XG4gICAgRk9SQ0VEID0gaXNGb3JjZWQoR0xPQkFMID8ga2V5IDogVEFSR0VUICsgKFNUQVRJQyA/ICcuJyA6ICcjJykgKyBrZXksIG9wdGlvbnMuZm9yY2VkKTtcbiAgICAvLyBjb250YWluZWQgaW4gdGFyZ2V0XG4gICAgaWYgKCFGT1JDRUQgJiYgdGFyZ2V0UHJvcGVydHkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaWYgKHR5cGVvZiBzb3VyY2VQcm9wZXJ0eSA9PSB0eXBlb2YgdGFyZ2V0UHJvcGVydHkpIGNvbnRpbnVlO1xuICAgICAgY29weUNvbnN0cnVjdG9yUHJvcGVydGllcyhzb3VyY2VQcm9wZXJ0eSwgdGFyZ2V0UHJvcGVydHkpO1xuICAgIH1cbiAgICAvLyBhZGQgYSBmbGFnIHRvIG5vdCBjb21wbGV0ZWx5IGZ1bGwgcG9seWZpbGxzXG4gICAgaWYgKG9wdGlvbnMuc2hhbSB8fCAodGFyZ2V0UHJvcGVydHkgJiYgdGFyZ2V0UHJvcGVydHkuc2hhbSkpIHtcbiAgICAgIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eShzb3VyY2VQcm9wZXJ0eSwgJ3NoYW0nLCB0cnVlKTtcbiAgICB9XG4gICAgZGVmaW5lQnVpbHRJbih0YXJnZXQsIGtleSwgc291cmNlUHJvcGVydHksIG9wdGlvbnMpO1xuICB9XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBjbGFzc29mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NsYXNzb2YtcmF3Jyk7XG5cbi8vIGBJc0FycmF5YCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtaXNhcnJheVxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLWFycmF5LWlzYXJyYXkgLS0gc2FmZVxubW9kdWxlLmV4cG9ydHMgPSBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uIGlzQXJyYXkoYXJndW1lbnQpIHtcbiAgcmV0dXJuIGNsYXNzb2YoYXJndW1lbnQpID09PSAnQXJyYXknO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG5cbnZhciBUT19TVFJJTkdfVEFHID0gd2VsbEtub3duU3ltYm9sKCd0b1N0cmluZ1RhZycpO1xudmFyIHRlc3QgPSB7fTtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSB1bmljb3JuL25vLWltbWVkaWF0ZS1tdXRhdGlvbiAtLSBFUzMgc3ludGF4IGxpbWl0YXRpb25cbnRlc3RbVE9fU1RSSU5HX1RBR10gPSAneic7XG5cbm1vZHVsZS5leHBvcnRzID0gU3RyaW5nKHRlc3QpID09PSAnW29iamVjdCB6XSc7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIFRPX1NUUklOR19UQUdfU1VQUE9SVCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1zdHJpbmctdGFnLXN1cHBvcnQnKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgY2xhc3NvZlJhdyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jbGFzc29mLXJhdycpO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xuXG52YXIgVE9fU1RSSU5HX1RBRyA9IHdlbGxLbm93blN5bWJvbCgndG9TdHJpbmdUYWcnKTtcbnZhciAkT2JqZWN0ID0gT2JqZWN0O1xuXG4vLyBFUzMgd3JvbmcgaGVyZVxudmFyIENPUlJFQ1RfQVJHVU1FTlRTID0gY2xhc3NvZlJhdyhmdW5jdGlvbiAoKSB7IHJldHVybiBhcmd1bWVudHM7IH0oKSkgPT09ICdBcmd1bWVudHMnO1xuXG4vLyBmYWxsYmFjayBmb3IgSUUxMSBTY3JpcHQgQWNjZXNzIERlbmllZCBlcnJvclxudmFyIHRyeUdldCA9IGZ1bmN0aW9uIChpdCwga2V5KSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGl0W2tleV07XG4gIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGVtcHR5ICovIH1cbn07XG5cbi8vIGdldHRpbmcgdGFnIGZyb20gRVM2KyBgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZ2Bcbm1vZHVsZS5leHBvcnRzID0gVE9fU1RSSU5HX1RBR19TVVBQT1JUID8gY2xhc3NvZlJhdyA6IGZ1bmN0aW9uIChpdCkge1xuICB2YXIgTywgdGFnLCByZXN1bHQ7XG4gIHJldHVybiBpdCA9PT0gdW5kZWZpbmVkID8gJ1VuZGVmaW5lZCcgOiBpdCA9PT0gbnVsbCA/ICdOdWxsJ1xuICAgIC8vIEBAdG9TdHJpbmdUYWcgY2FzZVxuICAgIDogdHlwZW9mICh0YWcgPSB0cnlHZXQoTyA9ICRPYmplY3QoaXQpLCBUT19TVFJJTkdfVEFHKSkgPT0gJ3N0cmluZycgPyB0YWdcbiAgICAvLyBidWlsdGluVGFnIGNhc2VcbiAgICA6IENPUlJFQ1RfQVJHVU1FTlRTID8gY2xhc3NvZlJhdyhPKVxuICAgIC8vIEVTMyBhcmd1bWVudHMgZmFsbGJhY2tcbiAgICA6IChyZXN1bHQgPSBjbGFzc29mUmF3KE8pKSA9PT0gJ09iamVjdCcgJiYgaXNDYWxsYWJsZShPLmNhbGxlZSkgPyAnQXJndW1lbnRzJyA6IHJlc3VsdDtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY2xhc3NvZicpO1xuXG52YXIgJFN0cmluZyA9IFN0cmluZztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgaWYgKGNsYXNzb2YoYXJndW1lbnQpID09PSAnU3ltYm9sJykgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNvbnZlcnQgYSBTeW1ib2wgdmFsdWUgdG8gYSBzdHJpbmcnKTtcbiAgcmV0dXJuICRTdHJpbmcoYXJndW1lbnQpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBkZWZpbmVQcm9wZXJ0eU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5Jyk7XG52YXIgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eS1kZXNjcmlwdG9yJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICBpZiAoREVTQ1JJUFRPUlMpIGRlZmluZVByb3BlcnR5TW9kdWxlLmYob2JqZWN0LCBrZXksIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvcigwLCB2YWx1ZSkpO1xuICBlbHNlIG9iamVjdFtrZXldID0gdmFsdWU7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcbnZhciBoYXNPd24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eScpO1xuXG52YXIgJFN5bnRheEVycm9yID0gU3ludGF4RXJyb3I7XG52YXIgJHBhcnNlSW50ID0gcGFyc2VJbnQ7XG52YXIgZnJvbUNoYXJDb2RlID0gU3RyaW5nLmZyb21DaGFyQ29kZTtcbnZhciBhdCA9IHVuY3VycnlUaGlzKCcnLmNoYXJBdCk7XG52YXIgc2xpY2UgPSB1bmN1cnJ5VGhpcygnJy5zbGljZSk7XG52YXIgZXhlYyA9IHVuY3VycnlUaGlzKC8uLy5leGVjKTtcblxudmFyIGNvZGVQb2ludHMgPSB7XG4gICdcXFxcXCInOiAnXCInLFxuICAnXFxcXFxcXFwnOiAnXFxcXCcsXG4gICdcXFxcLyc6ICcvJyxcbiAgJ1xcXFxiJzogJ1xcYicsXG4gICdcXFxcZic6ICdcXGYnLFxuICAnXFxcXG4nOiAnXFxuJyxcbiAgJ1xcXFxyJzogJ1xccicsXG4gICdcXFxcdCc6ICdcXHQnXG59O1xuXG52YXIgSVNfNF9IRVhfRElHSVRTID0gL15bXFxkYS1mXXs0fSQvaTtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWdleHAvbm8tY29udHJvbC1jaGFyYWN0ZXIgLS0gc2FmZVxudmFyIElTX0MwX0NPTlRST0xfQ09ERSA9IC9eW1xcdTAwMDAtXFx1MDAxRl0kLztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoc291cmNlLCBpKSB7XG4gIHZhciB1bnRlcm1pbmF0ZWQgPSB0cnVlO1xuICB2YXIgdmFsdWUgPSAnJztcbiAgd2hpbGUgKGkgPCBzb3VyY2UubGVuZ3RoKSB7XG4gICAgdmFyIGNociA9IGF0KHNvdXJjZSwgaSk7XG4gICAgaWYgKGNociA9PT0gJ1xcXFwnKSB7XG4gICAgICB2YXIgdHdvQ2hhcnMgPSBzbGljZShzb3VyY2UsIGksIGkgKyAyKTtcbiAgICAgIGlmIChoYXNPd24oY29kZVBvaW50cywgdHdvQ2hhcnMpKSB7XG4gICAgICAgIHZhbHVlICs9IGNvZGVQb2ludHNbdHdvQ2hhcnNdO1xuICAgICAgICBpICs9IDI7XG4gICAgICB9IGVsc2UgaWYgKHR3b0NoYXJzID09PSAnXFxcXHUnKSB7XG4gICAgICAgIGkgKz0gMjtcbiAgICAgICAgdmFyIGZvdXJIZXhEaWdpdHMgPSBzbGljZShzb3VyY2UsIGksIGkgKyA0KTtcbiAgICAgICAgaWYgKCFleGVjKElTXzRfSEVYX0RJR0lUUywgZm91ckhleERpZ2l0cykpIHRocm93IG5ldyAkU3ludGF4RXJyb3IoJ0JhZCBVbmljb2RlIGVzY2FwZSBhdDogJyArIGkpO1xuICAgICAgICB2YWx1ZSArPSBmcm9tQ2hhckNvZGUoJHBhcnNlSW50KGZvdXJIZXhEaWdpdHMsIDE2KSk7XG4gICAgICAgIGkgKz0gNDtcbiAgICAgIH0gZWxzZSB0aHJvdyBuZXcgJFN5bnRheEVycm9yKCdVbmtub3duIGVzY2FwZSBzZXF1ZW5jZTogXCInICsgdHdvQ2hhcnMgKyAnXCInKTtcbiAgICB9IGVsc2UgaWYgKGNociA9PT0gJ1wiJykge1xuICAgICAgdW50ZXJtaW5hdGVkID0gZmFsc2U7XG4gICAgICBpKys7XG4gICAgICBicmVhaztcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGV4ZWMoSVNfQzBfQ09OVFJPTF9DT0RFLCBjaHIpKSB0aHJvdyBuZXcgJFN5bnRheEVycm9yKCdCYWQgY29udHJvbCBjaGFyYWN0ZXIgaW4gc3RyaW5nIGxpdGVyYWwgYXQ6ICcgKyBpKTtcbiAgICAgIHZhbHVlICs9IGNocjtcbiAgICAgIGkrKztcbiAgICB9XG4gIH1cbiAgaWYgKHVudGVybWluYXRlZCkgdGhyb3cgbmV3ICRTeW50YXhFcnJvcignVW50ZXJtaW5hdGVkIHN0cmluZyBhdDogJyArIGkpO1xuICByZXR1cm4geyB2YWx1ZTogdmFsdWUsIGVuZDogaSB9O1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIGdsb2JhbFRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsLXRoaXMnKTtcbnZhciBnZXRCdWlsdEluID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1idWlsdC1pbicpO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIGNhbGwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tY2FsbCcpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcbnZhciBpc0FycmF5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWFycmF5Jyk7XG52YXIgaGFzT3duID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcy1vd24tcHJvcGVydHknKTtcbnZhciB0b1N0cmluZyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1zdHJpbmcnKTtcbnZhciBsZW5ndGhPZkFycmF5TGlrZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9sZW5ndGgtb2YtYXJyYXktbGlrZScpO1xudmFyIGNyZWF0ZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eScpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgcGFyc2VKU09OU3RyaW5nID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3BhcnNlLWpzb24tc3RyaW5nJyk7XG52YXIgTkFUSVZFX1NZTUJPTCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zeW1ib2wtY29uc3RydWN0b3ItZGV0ZWN0aW9uJyk7XG5cbnZhciBKU09OID0gZ2xvYmFsVGhpcy5KU09OO1xudmFyIE51bWJlciA9IGdsb2JhbFRoaXMuTnVtYmVyO1xudmFyIFN5bnRheEVycm9yID0gZ2xvYmFsVGhpcy5TeW50YXhFcnJvcjtcbnZhciBuYXRpdmVQYXJzZSA9IEpTT04gJiYgSlNPTi5wYXJzZTtcbnZhciBlbnVtZXJhYmxlT3duUHJvcGVydGllcyA9IGdldEJ1aWx0SW4oJ09iamVjdCcsICdrZXlzJyk7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5ZGVzY3JpcHRvciAtLSBzYWZlXG52YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbnZhciBhdCA9IHVuY3VycnlUaGlzKCcnLmNoYXJBdCk7XG52YXIgc2xpY2UgPSB1bmN1cnJ5VGhpcygnJy5zbGljZSk7XG52YXIgZXhlYyA9IHVuY3VycnlUaGlzKC8uLy5leGVjKTtcbnZhciBwdXNoID0gdW5jdXJyeVRoaXMoW10ucHVzaCk7XG5cbnZhciBJU19ESUdJVCA9IC9eXFxkJC87XG52YXIgSVNfTk9OX1pFUk9fRElHSVQgPSAvXlsxLTldJC87XG52YXIgSVNfTlVNQkVSX1NUQVJUID0gL15bXFxkLV0kLztcbnZhciBJU19XSElURVNQQUNFID0gL15bXFx0XFxuXFxyIF0kLztcblxudmFyIFBSSU1JVElWRSA9IDA7XG52YXIgT0JKRUNUID0gMTtcblxudmFyICRwYXJzZSA9IGZ1bmN0aW9uIChzb3VyY2UsIHJldml2ZXIpIHtcbiAgc291cmNlID0gdG9TdHJpbmcoc291cmNlKTtcbiAgdmFyIGNvbnRleHQgPSBuZXcgQ29udGV4dChzb3VyY2UsIDAsICcnKTtcbiAgdmFyIHJvb3QgPSBjb250ZXh0LnBhcnNlKCk7XG4gIHZhciB2YWx1ZSA9IHJvb3QudmFsdWU7XG4gIHZhciBlbmRJbmRleCA9IGNvbnRleHQuc2tpcChJU19XSElURVNQQUNFLCByb290LmVuZCk7XG4gIGlmIChlbmRJbmRleCA8IHNvdXJjZS5sZW5ndGgpIHtcbiAgICB0aHJvdyBuZXcgU3ludGF4RXJyb3IoJ1VuZXhwZWN0ZWQgZXh0cmEgY2hhcmFjdGVyOiBcIicgKyBhdChzb3VyY2UsIGVuZEluZGV4KSArICdcIiBhZnRlciB0aGUgcGFyc2VkIGRhdGEgYXQ6ICcgKyBlbmRJbmRleCk7XG4gIH1cbiAgcmV0dXJuIGlzQ2FsbGFibGUocmV2aXZlcikgPyBpbnRlcm5hbGl6ZSh7ICcnOiB2YWx1ZSB9LCAnJywgcmV2aXZlciwgcm9vdCkgOiB2YWx1ZTtcbn07XG5cbnZhciBpbnRlcm5hbGl6ZSA9IGZ1bmN0aW9uIChob2xkZXIsIG5hbWUsIHJldml2ZXIsIG5vZGUpIHtcbiAgdmFyIHZhbCA9IGhvbGRlcltuYW1lXTtcbiAgdmFyIHVubW9kaWZpZWQgPSBub2RlICYmIHZhbCA9PT0gbm9kZS52YWx1ZTtcbiAgdmFyIGNvbnRleHQgPSB1bm1vZGlmaWVkICYmIHR5cGVvZiBub2RlLnNvdXJjZSA9PSAnc3RyaW5nJyA/IHsgc291cmNlOiBub2RlLnNvdXJjZSB9IDoge307XG4gIHZhciBlbGVtZW50UmVjb3Jkc0xlbiwga2V5cywgbGVuLCBpLCBQO1xuICBpZiAoaXNPYmplY3QodmFsKSkge1xuICAgIHZhciBub2RlSXNBcnJheSA9IGlzQXJyYXkodmFsKTtcbiAgICB2YXIgbm9kZXMgPSB1bm1vZGlmaWVkID8gbm9kZS5ub2RlcyA6IG5vZGVJc0FycmF5ID8gW10gOiB7fTtcbiAgICBpZiAobm9kZUlzQXJyYXkpIHtcbiAgICAgIGVsZW1lbnRSZWNvcmRzTGVuID0gbm9kZXMubGVuZ3RoO1xuICAgICAgbGVuID0gbGVuZ3RoT2ZBcnJheUxpa2UodmFsKTtcbiAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICBpbnRlcm5hbGl6ZVByb3BlcnR5KHZhbCwgaSwgaW50ZXJuYWxpemUodmFsLCAnJyArIGksIHJldml2ZXIsIGkgPCBlbGVtZW50UmVjb3Jkc0xlbiA/IG5vZGVzW2ldIDogdW5kZWZpbmVkKSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGtleXMgPSBlbnVtZXJhYmxlT3duUHJvcGVydGllcyh2YWwpO1xuICAgICAgbGVuID0gbGVuZ3RoT2ZBcnJheUxpa2Uoa2V5cyk7XG4gICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgUCA9IGtleXNbaV07XG4gICAgICAgIGludGVybmFsaXplUHJvcGVydHkodmFsLCBQLCBpbnRlcm5hbGl6ZSh2YWwsIFAsIHJldml2ZXIsIGhhc093bihub2RlcywgUCkgPyBub2Rlc1tQXSA6IHVuZGVmaW5lZCkpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gY2FsbChyZXZpdmVyLCBob2xkZXIsIG5hbWUsIHZhbCwgY29udGV4dCk7XG59O1xuXG52YXIgaW50ZXJuYWxpemVQcm9wZXJ0eSA9IGZ1bmN0aW9uIChvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgaWYgKERFU0NSSVBUT1JTKSB7XG4gICAgdmFyIGRlc2NyaXB0b3IgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBrZXkpO1xuICAgIGlmIChkZXNjcmlwdG9yICYmICFkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSkgcmV0dXJuO1xuICB9XG4gIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSBkZWxldGUgb2JqZWN0W2tleV07XG4gIGVsc2UgY3JlYXRlUHJvcGVydHkob2JqZWN0LCBrZXksIHZhbHVlKTtcbn07XG5cbnZhciBOb2RlID0gZnVuY3Rpb24gKHZhbHVlLCBlbmQsIHNvdXJjZSwgbm9kZXMpIHtcbiAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICB0aGlzLmVuZCA9IGVuZDtcbiAgdGhpcy5zb3VyY2UgPSBzb3VyY2U7XG4gIHRoaXMubm9kZXMgPSBub2Rlcztcbn07XG5cbnZhciBDb250ZXh0ID0gZnVuY3Rpb24gKHNvdXJjZSwgaW5kZXgpIHtcbiAgdGhpcy5zb3VyY2UgPSBzb3VyY2U7XG4gIHRoaXMuaW5kZXggPSBpbmRleDtcbn07XG5cbi8vIGh0dHBzOi8vd3d3Lmpzb24ub3JnL2pzb24tZW4uaHRtbFxuQ29udGV4dC5wcm90b3R5cGUgPSB7XG4gIGZvcms6IGZ1bmN0aW9uIChuZXh0SW5kZXgpIHtcbiAgICByZXR1cm4gbmV3IENvbnRleHQodGhpcy5zb3VyY2UsIG5leHRJbmRleCk7XG4gIH0sXG4gIHBhcnNlOiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHNvdXJjZSA9IHRoaXMuc291cmNlO1xuICAgIHZhciBpID0gdGhpcy5za2lwKElTX1dISVRFU1BBQ0UsIHRoaXMuaW5kZXgpO1xuICAgIHZhciBmb3JrID0gdGhpcy5mb3JrKGkpO1xuICAgIHZhciBjaHIgPSBhdChzb3VyY2UsIGkpO1xuICAgIGlmIChleGVjKElTX05VTUJFUl9TVEFSVCwgY2hyKSkgcmV0dXJuIGZvcmsubnVtYmVyKCk7XG4gICAgc3dpdGNoIChjaHIpIHtcbiAgICAgIGNhc2UgJ3snOlxuICAgICAgICByZXR1cm4gZm9yay5vYmplY3QoKTtcbiAgICAgIGNhc2UgJ1snOlxuICAgICAgICByZXR1cm4gZm9yay5hcnJheSgpO1xuICAgICAgY2FzZSAnXCInOlxuICAgICAgICByZXR1cm4gZm9yay5zdHJpbmcoKTtcbiAgICAgIGNhc2UgJ3QnOlxuICAgICAgICByZXR1cm4gZm9yay5rZXl3b3JkKHRydWUpO1xuICAgICAgY2FzZSAnZic6XG4gICAgICAgIHJldHVybiBmb3JrLmtleXdvcmQoZmFsc2UpO1xuICAgICAgY2FzZSAnbic6XG4gICAgICAgIHJldHVybiBmb3JrLmtleXdvcmQobnVsbCk7XG4gICAgfSB0aHJvdyBuZXcgU3ludGF4RXJyb3IoJ1VuZXhwZWN0ZWQgY2hhcmFjdGVyOiBcIicgKyBjaHIgKyAnXCIgYXQ6ICcgKyBpKTtcbiAgfSxcbiAgbm9kZTogZnVuY3Rpb24gKHR5cGUsIHZhbHVlLCBzdGFydCwgZW5kLCBub2Rlcykge1xuICAgIHJldHVybiBuZXcgTm9kZSh2YWx1ZSwgZW5kLCB0eXBlID8gbnVsbCA6IHNsaWNlKHRoaXMuc291cmNlLCBzdGFydCwgZW5kKSwgbm9kZXMpO1xuICB9LFxuICBvYmplY3Q6IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc291cmNlID0gdGhpcy5zb3VyY2U7XG4gICAgdmFyIGkgPSB0aGlzLmluZGV4ICsgMTtcbiAgICB2YXIgZXhwZWN0S2V5cGFpciA9IGZhbHNlO1xuICAgIHZhciBvYmplY3QgPSB7fTtcbiAgICB2YXIgbm9kZXMgPSB7fTtcbiAgICB2YXIgY2xvc2VkID0gZmFsc2U7XG4gICAgd2hpbGUgKGkgPCBzb3VyY2UubGVuZ3RoKSB7XG4gICAgICBpID0gdGhpcy51bnRpbChbJ1wiJywgJ30nXSwgaSk7XG4gICAgICBpZiAoYXQoc291cmNlLCBpKSA9PT0gJ30nICYmICFleHBlY3RLZXlwYWlyKSB7XG4gICAgICAgIGkrKztcbiAgICAgICAgY2xvc2VkID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICAvLyBQYXJzaW5nIHRoZSBrZXlcbiAgICAgIHZhciByZXN1bHQgPSB0aGlzLmZvcmsoaSkuc3RyaW5nKCk7XG4gICAgICB2YXIga2V5ID0gcmVzdWx0LnZhbHVlO1xuICAgICAgaSA9IHJlc3VsdC5lbmQ7XG4gICAgICBpID0gdGhpcy51bnRpbChbJzonXSwgaSkgKyAxO1xuICAgICAgLy8gUGFyc2luZyB2YWx1ZVxuICAgICAgaSA9IHRoaXMuc2tpcChJU19XSElURVNQQUNFLCBpKTtcbiAgICAgIHJlc3VsdCA9IHRoaXMuZm9yayhpKS5wYXJzZSgpO1xuICAgICAgY3JlYXRlUHJvcGVydHkobm9kZXMsIGtleSwgcmVzdWx0KTtcbiAgICAgIGNyZWF0ZVByb3BlcnR5KG9iamVjdCwga2V5LCByZXN1bHQudmFsdWUpO1xuICAgICAgaSA9IHRoaXMudW50aWwoWycsJywgJ30nXSwgcmVzdWx0LmVuZCk7XG4gICAgICB2YXIgY2hyID0gYXQoc291cmNlLCBpKTtcbiAgICAgIGlmIChjaHIgPT09ICcsJykge1xuICAgICAgICBleHBlY3RLZXlwYWlyID0gdHJ1ZTtcbiAgICAgICAgaSsrO1xuICAgICAgfSBlbHNlIGlmIChjaHIgPT09ICd9Jykge1xuICAgICAgICBpKys7XG4gICAgICAgIGNsb3NlZCA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoIWNsb3NlZCkgdGhyb3cgbmV3IFN5bnRheEVycm9yKCdVbnRlcm1pbmF0ZWQgb2JqZWN0IGF0OiAnICsgaSk7XG4gICAgcmV0dXJuIHRoaXMubm9kZShPQkpFQ1QsIG9iamVjdCwgdGhpcy5pbmRleCwgaSwgbm9kZXMpO1xuICB9LFxuICBhcnJheTogZnVuY3Rpb24gKCkge1xuICAgIHZhciBzb3VyY2UgPSB0aGlzLnNvdXJjZTtcbiAgICB2YXIgaSA9IHRoaXMuaW5kZXggKyAxO1xuICAgIHZhciBleHBlY3RFbGVtZW50ID0gZmFsc2U7XG4gICAgdmFyIGFycmF5ID0gW107XG4gICAgdmFyIG5vZGVzID0gW107XG4gICAgdmFyIGNsb3NlZCA9IGZhbHNlO1xuICAgIHdoaWxlIChpIDwgc291cmNlLmxlbmd0aCkge1xuICAgICAgaSA9IHRoaXMuc2tpcChJU19XSElURVNQQUNFLCBpKTtcbiAgICAgIGlmIChhdChzb3VyY2UsIGkpID09PSAnXScgJiYgIWV4cGVjdEVsZW1lbnQpIHtcbiAgICAgICAgaSsrO1xuICAgICAgICBjbG9zZWQgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIHZhciByZXN1bHQgPSB0aGlzLmZvcmsoaSkucGFyc2UoKTtcbiAgICAgIHB1c2gobm9kZXMsIHJlc3VsdCk7XG4gICAgICBwdXNoKGFycmF5LCByZXN1bHQudmFsdWUpO1xuICAgICAgaSA9IHRoaXMudW50aWwoWycsJywgJ10nXSwgcmVzdWx0LmVuZCk7XG4gICAgICBpZiAoYXQoc291cmNlLCBpKSA9PT0gJywnKSB7XG4gICAgICAgIGV4cGVjdEVsZW1lbnQgPSB0cnVlO1xuICAgICAgICBpKys7XG4gICAgICB9IGVsc2UgaWYgKGF0KHNvdXJjZSwgaSkgPT09ICddJykge1xuICAgICAgICBpKys7XG4gICAgICAgIGNsb3NlZCA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoIWNsb3NlZCkgdGhyb3cgbmV3IFN5bnRheEVycm9yKCdVbnRlcm1pbmF0ZWQgYXJyYXkgYXQ6ICcgKyBpKTtcbiAgICByZXR1cm4gdGhpcy5ub2RlKE9CSkVDVCwgYXJyYXksIHRoaXMuaW5kZXgsIGksIG5vZGVzKTtcbiAgfSxcbiAgc3RyaW5nOiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGluZGV4ID0gdGhpcy5pbmRleDtcbiAgICB2YXIgcGFyc2VkID0gcGFyc2VKU09OU3RyaW5nKHRoaXMuc291cmNlLCB0aGlzLmluZGV4ICsgMSk7XG4gICAgcmV0dXJuIHRoaXMubm9kZShQUklNSVRJVkUsIHBhcnNlZC52YWx1ZSwgaW5kZXgsIHBhcnNlZC5lbmQpO1xuICB9LFxuICBudW1iZXI6IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc291cmNlID0gdGhpcy5zb3VyY2U7XG4gICAgdmFyIHN0YXJ0SW5kZXggPSB0aGlzLmluZGV4O1xuICAgIHZhciBpID0gc3RhcnRJbmRleDtcbiAgICBpZiAoYXQoc291cmNlLCBpKSA9PT0gJy0nKSBpKys7XG4gICAgaWYgKGF0KHNvdXJjZSwgaSkgPT09ICcwJykgaSsrO1xuICAgIGVsc2UgaWYgKGV4ZWMoSVNfTk9OX1pFUk9fRElHSVQsIGF0KHNvdXJjZSwgaSkpKSBpID0gdGhpcy5za2lwKElTX0RJR0lULCBpICsgMSk7XG4gICAgZWxzZSB0aHJvdyBuZXcgU3ludGF4RXJyb3IoJ0ZhaWxlZCB0byBwYXJzZSBudW1iZXIgYXQ6ICcgKyBpKTtcbiAgICBpZiAoYXQoc291cmNlLCBpKSA9PT0gJy4nKSB7XG4gICAgICB2YXIgZnJhY3Rpb25TdGFydEluZGV4ID0gaSArIDE7XG4gICAgICBpID0gdGhpcy5za2lwKElTX0RJR0lULCBmcmFjdGlvblN0YXJ0SW5kZXgpO1xuICAgICAgaWYgKGZyYWN0aW9uU3RhcnRJbmRleCA9PT0gaSkgdGhyb3cgbmV3IFN5bnRheEVycm9yKFwiRmFpbGVkIHRvIHBhcnNlIG51bWJlcidzIGZyYWN0aW9uIGF0OiBcIiArIGkpO1xuICAgIH1cbiAgICBpZiAoYXQoc291cmNlLCBpKSA9PT0gJ2UnIHx8IGF0KHNvdXJjZSwgaSkgPT09ICdFJykge1xuICAgICAgaSsrO1xuICAgICAgaWYgKGF0KHNvdXJjZSwgaSkgPT09ICcrJyB8fCBhdChzb3VyY2UsIGkpID09PSAnLScpIGkrKztcbiAgICAgIHZhciBleHBvbmVudFN0YXJ0SW5kZXggPSBpO1xuICAgICAgaSA9IHRoaXMuc2tpcChJU19ESUdJVCwgaSk7XG4gICAgICBpZiAoZXhwb25lbnRTdGFydEluZGV4ID09PSBpKSB0aHJvdyBuZXcgU3ludGF4RXJyb3IoXCJGYWlsZWQgdG8gcGFyc2UgbnVtYmVyJ3MgZXhwb25lbnQgdmFsdWUgYXQ6IFwiICsgaSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLm5vZGUoUFJJTUlUSVZFLCBOdW1iZXIoc2xpY2Uoc291cmNlLCBzdGFydEluZGV4LCBpKSksIHN0YXJ0SW5kZXgsIGkpO1xuICB9LFxuICBrZXl3b3JkOiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICB2YXIga2V5d29yZCA9ICcnICsgdmFsdWU7XG4gICAgdmFyIGluZGV4ID0gdGhpcy5pbmRleDtcbiAgICB2YXIgZW5kSW5kZXggPSBpbmRleCArIGtleXdvcmQubGVuZ3RoO1xuICAgIGlmIChzbGljZSh0aGlzLnNvdXJjZSwgaW5kZXgsIGVuZEluZGV4KSAhPT0ga2V5d29yZCkgdGhyb3cgbmV3IFN5bnRheEVycm9yKCdGYWlsZWQgdG8gcGFyc2UgdmFsdWUgYXQ6ICcgKyBpbmRleCk7XG4gICAgcmV0dXJuIHRoaXMubm9kZShQUklNSVRJVkUsIHZhbHVlLCBpbmRleCwgZW5kSW5kZXgpO1xuICB9LFxuICBza2lwOiBmdW5jdGlvbiAocmVnZXgsIGkpIHtcbiAgICB2YXIgc291cmNlID0gdGhpcy5zb3VyY2U7XG4gICAgZm9yICg7IGkgPCBzb3VyY2UubGVuZ3RoOyBpKyspIGlmICghZXhlYyhyZWdleCwgYXQoc291cmNlLCBpKSkpIGJyZWFrO1xuICAgIHJldHVybiBpO1xuICB9LFxuICB1bnRpbDogZnVuY3Rpb24gKGFycmF5LCBpKSB7XG4gICAgaSA9IHRoaXMuc2tpcChJU19XSElURVNQQUNFLCBpKTtcbiAgICB2YXIgY2hyID0gYXQodGhpcy5zb3VyY2UsIGkpO1xuICAgIGZvciAodmFyIGogPSAwOyBqIDwgYXJyYXkubGVuZ3RoOyBqKyspIGlmIChhcnJheVtqXSA9PT0gY2hyKSByZXR1cm4gaTtcbiAgICB0aHJvdyBuZXcgU3ludGF4RXJyb3IoJ1VuZXhwZWN0ZWQgY2hhcmFjdGVyOiBcIicgKyBjaHIgKyAnXCIgYXQ6ICcgKyBpKTtcbiAgfVxufTtcblxudmFyIE5PX1NPVVJDRV9TVVBQT1JUID0gZmFpbHMoZnVuY3Rpb24gKCkge1xuICB2YXIgdW5zYWZlSW50ID0gJzkwMDcxOTkyNTQ3NDA5OTMnO1xuICB2YXIgc291cmNlO1xuICBuYXRpdmVQYXJzZSh1bnNhZmVJbnQsIGZ1bmN0aW9uIChrZXksIHZhbHVlLCBjb250ZXh0KSB7XG4gICAgc291cmNlID0gY29udGV4dC5zb3VyY2U7XG4gIH0pO1xuICByZXR1cm4gc291cmNlICE9PSB1bnNhZmVJbnQ7XG59KTtcblxudmFyIFBST1BFUl9CQVNFX1BBUlNFID0gTkFUSVZFX1NZTUJPTCAmJiAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyBTYWZhcmkgOSBidWdcbiAgcmV0dXJuIDEgLyBuYXRpdmVQYXJzZSgnLTAgXFx0JykgIT09IC1JbmZpbml0eTtcbn0pO1xuXG4vLyBgSlNPTi5wYXJzZWAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWpzb24ucGFyc2Vcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLWpzb24tcGFyc2Utd2l0aC1zb3VyY2VcbiQoeyB0YXJnZXQ6ICdKU09OJywgc3RhdDogdHJ1ZSwgZm9yY2VkOiBOT19TT1VSQ0VfU1VQUE9SVCB9LCB7XG4gIHBhcnNlOiBmdW5jdGlvbiBwYXJzZSh0ZXh0LCByZXZpdmVyKSB7XG4gICAgcmV0dXJuIFBST1BFUl9CQVNFX1BBUlNFICYmICFpc0NhbGxhYmxlKHJldml2ZXIpID8gbmF0aXZlUGFyc2UodGV4dCkgOiAkcGFyc2UodGV4dCwgcmV2aXZlcik7XG4gIH1cbn0pO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBOQVRJVkVfQklORCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1iaW5kLW5hdGl2ZScpO1xuXG52YXIgRnVuY3Rpb25Qcm90b3R5cGUgPSBGdW5jdGlvbi5wcm90b3R5cGU7XG52YXIgYXBwbHkgPSBGdW5jdGlvblByb3RvdHlwZS5hcHBseTtcbnZhciBjYWxsID0gRnVuY3Rpb25Qcm90b3R5cGUuY2FsbDtcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLWZ1bmN0aW9uLXByb3RvdHlwZS1iaW5kLCBlcy9uby1yZWZsZWN0IC0tIHNhZmVcbm1vZHVsZS5leHBvcnRzID0gdHlwZW9mIFJlZmxlY3QgPT0gJ29iamVjdCcgJiYgUmVmbGVjdC5hcHBseSB8fCAoTkFUSVZFX0JJTkQgPyBjYWxsLmJpbmQoYXBwbHkpIDogZnVuY3Rpb24gKCkge1xuICByZXR1cm4gY2FsbC5hcHBseShhcHBseSwgYXJndW1lbnRzKTtcbn0pO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcbnZhciBnZXRJbnRlcm5hbFN0YXRlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ludGVybmFsLXN0YXRlJykuZ2V0O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzUmF3SlNPTihPKSB7XG4gIGlmICghaXNPYmplY3QoTykpIHJldHVybiBmYWxzZTtcbiAgdmFyIHN0YXRlID0gZ2V0SW50ZXJuYWxTdGF0ZShPKTtcbiAgcmV0dXJuICEhc3RhdGUgJiYgc3RhdGUudHlwZSA9PT0gJ1Jhd0pTT04nO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gdW5jdXJyeVRoaXMoW10uc2xpY2UpO1xuIiwgIid1c2Ugc3RyaWN0Jztcbi8qIGVzbGludC1kaXNhYmxlIGVzL25vLWpzb24gLS0gc2FmZSAqL1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgdmFyIHVuc2FmZUludCA9ICc5MDA3MTk5MjU0NzQwOTkzJztcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLWpzb24tcmF3anNvbiAtLSBmZWF0dXJlIGRldGVjdGlvblxuICB2YXIgcmF3ID0gSlNPTi5yYXdKU09OKHVuc2FmZUludCk7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1qc29uLWlzcmF3anNvbiAtLSBmZWF0dXJlIGRldGVjdGlvblxuICByZXR1cm4gIUpTT04uaXNSYXdKU09OKHJhdykgfHwgSlNPTi5zdHJpbmdpZnkocmF3KSAhPT0gdW5zYWZlSW50O1xufSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgZ2V0QnVpbHRJbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtYnVpbHQtaW4nKTtcbnZhciBhcHBseSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1hcHBseScpO1xudmFyIGNhbGwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tY2FsbCcpO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgaXNBcnJheSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1hcnJheScpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcbnZhciBpc1Jhd0pTT04gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtcmF3LWpzb24nKTtcbnZhciBpc1N5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1zeW1ib2wnKTtcbnZhciBjbGFzc29mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NsYXNzb2YtcmF3Jyk7XG52YXIgdG9TdHJpbmcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tc3RyaW5nJyk7XG52YXIgYXJyYXlTbGljZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1zbGljZScpO1xudmFyIHBhcnNlSlNPTlN0cmluZyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9wYXJzZS1qc29uLXN0cmluZycpO1xudmFyIHVpZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy91aWQnKTtcbnZhciBOQVRJVkVfU1lNQk9MID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3N5bWJvbC1jb25zdHJ1Y3Rvci1kZXRlY3Rpb24nKTtcbnZhciBOQVRJVkVfUkFXX0pTT04gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbmF0aXZlLXJhdy1qc29uJyk7XG5cbnZhciAkU3RyaW5nID0gU3RyaW5nO1xudmFyICRzdHJpbmdpZnkgPSBnZXRCdWlsdEluKCdKU09OJywgJ3N0cmluZ2lmeScpO1xudmFyIGV4ZWMgPSB1bmN1cnJ5VGhpcygvLi8uZXhlYyk7XG52YXIgY2hhckF0ID0gdW5jdXJyeVRoaXMoJycuY2hhckF0KTtcbnZhciBjaGFyQ29kZUF0ID0gdW5jdXJyeVRoaXMoJycuY2hhckNvZGVBdCk7XG52YXIgcmVwbGFjZSA9IHVuY3VycnlUaGlzKCcnLnJlcGxhY2UpO1xudmFyIHNsaWNlID0gdW5jdXJyeVRoaXMoJycuc2xpY2UpO1xudmFyIHB1c2ggPSB1bmN1cnJ5VGhpcyhbXS5wdXNoKTtcbnZhciBudW1iZXJUb1N0cmluZyA9IHVuY3VycnlUaGlzKDEuMS50b1N0cmluZyk7XG5cbnZhciBzdXJyb2dhdGVzID0gL1tcXHVEODAwLVxcdURGRkZdL2c7XG52YXIgbGVhZGluZ1N1cnJvZ2F0ZXMgPSAvXltcXHVEODAwLVxcdURCRkZdJC87XG52YXIgdHJhaWxpbmdTdXJyb2dhdGVzID0gL15bXFx1REMwMC1cXHVERkZGXSQvO1xuXG52YXIgTUFSSyA9IHVpZCgpO1xudmFyIE1BUktfTEVOR1RIID0gTUFSSy5sZW5ndGg7XG5cbnZhciBXUk9OR19TWU1CT0xTX0NPTlZFUlNJT04gPSAhTkFUSVZFX1NZTUJPTCB8fCBmYWlscyhmdW5jdGlvbiAoKSB7XG4gIHZhciBzeW1ib2wgPSBnZXRCdWlsdEluKCdTeW1ib2wnKSgnc3RyaW5naWZ5IGRldGVjdGlvbicpO1xuICAvLyBNUyBFZGdlIGNvbnZlcnRzIHN5bWJvbCB2YWx1ZXMgdG8gSlNPTiBhcyB7fVxuICByZXR1cm4gJHN0cmluZ2lmeShbc3ltYm9sXSkgIT09ICdbbnVsbF0nXG4gICAgLy8gV2ViS2l0IGNvbnZlcnRzIHN5bWJvbCB2YWx1ZXMgdG8gSlNPTiBhcyBudWxsXG4gICAgfHwgJHN0cmluZ2lmeSh7IGE6IHN5bWJvbCB9KSAhPT0gJ3t9J1xuICAgIC8vIFY4IHRocm93cyBvbiBib3hlZCBzeW1ib2xzXG4gICAgfHwgJHN0cmluZ2lmeShPYmplY3Qoc3ltYm9sKSkgIT09ICd7fSc7XG59KTtcblxuLy8gaHR0cHM6Ly9naXRodWIuY29tL3RjMzkvcHJvcG9zYWwtd2VsbC1mb3JtZWQtc3RyaW5naWZ5XG52YXIgSUxMX0ZPUk1FRF9VTklDT0RFID0gZmFpbHMoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gJHN0cmluZ2lmeSgnXFx1REYwNlxcdUQ4MzQnKSAhPT0gJ1wiXFxcXHVkZjA2XFxcXHVkODM0XCInXG4gICAgfHwgJHN0cmluZ2lmeSgnXFx1REVBRCcpICE9PSAnXCJcXFxcdWRlYWRcIic7XG59KTtcblxudmFyIHN0cmluZ2lmeVdpdGhQcm9wZXJTeW1ib2xzQ29udmVyc2lvbiA9IFdST05HX1NZTUJPTFNfQ09OVkVSU0lPTiA/IGZ1bmN0aW9uIChpdCwgcmVwbGFjZXIpIHtcbiAgdmFyIGFyZ3MgPSBhcnJheVNsaWNlKGFyZ3VtZW50cyk7XG4gIHZhciAkcmVwbGFjZXIgPSBnZXRSZXBsYWNlckZ1bmN0aW9uKHJlcGxhY2VyKTtcbiAgaWYgKCFpc0NhbGxhYmxlKCRyZXBsYWNlcikgJiYgKGl0ID09PSB1bmRlZmluZWQgfHwgaXNTeW1ib2woaXQpKSkgcmV0dXJuOyAvLyBJRTggcmV0dXJucyBzdHJpbmcgb24gdW5kZWZpbmVkXG4gIGFyZ3NbMV0gPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgIC8vIHNvbWUgb2xkIGltcGxlbWVudGF0aW9ucyAobGlrZSBXZWJLaXQpIGNvdWxkIHBhc3MgbnVtYmVycyBhcyBrZXlzXG4gICAgaWYgKGlzQ2FsbGFibGUoJHJlcGxhY2VyKSkgdmFsdWUgPSBjYWxsKCRyZXBsYWNlciwgdGhpcywgJFN0cmluZyhrZXkpLCB2YWx1ZSk7XG4gICAgaWYgKCFpc1N5bWJvbCh2YWx1ZSkpIHJldHVybiB2YWx1ZTtcbiAgfTtcbiAgcmV0dXJuIGFwcGx5KCRzdHJpbmdpZnksIG51bGwsIGFyZ3MpO1xufSA6ICRzdHJpbmdpZnk7XG5cbnZhciBmaXhJbGxGb3JtZWRKU09OID0gZnVuY3Rpb24gKG1hdGNoLCBvZmZzZXQsIHN0cmluZykge1xuICB2YXIgcHJldiA9IGNoYXJBdChzdHJpbmcsIG9mZnNldCAtIDEpO1xuICB2YXIgbmV4dCA9IGNoYXJBdChzdHJpbmcsIG9mZnNldCArIDEpO1xuICBpZiAoXG4gICAgKGV4ZWMobGVhZGluZ1N1cnJvZ2F0ZXMsIG1hdGNoKSAmJiAhZXhlYyh0cmFpbGluZ1N1cnJvZ2F0ZXMsIG5leHQpKSB8fFxuICAgIChleGVjKHRyYWlsaW5nU3Vycm9nYXRlcywgbWF0Y2gpICYmICFleGVjKGxlYWRpbmdTdXJyb2dhdGVzLCBwcmV2KSlcbiAgKSB7XG4gICAgcmV0dXJuICdcXFxcdScgKyBudW1iZXJUb1N0cmluZyhjaGFyQ29kZUF0KG1hdGNoLCAwKSwgMTYpO1xuICB9IHJldHVybiBtYXRjaDtcbn07XG5cbnZhciBnZXRSZXBsYWNlckZ1bmN0aW9uID0gZnVuY3Rpb24gKHJlcGxhY2VyKSB7XG4gIGlmIChpc0NhbGxhYmxlKHJlcGxhY2VyKSkgcmV0dXJuIHJlcGxhY2VyO1xuICBpZiAoIWlzQXJyYXkocmVwbGFjZXIpKSByZXR1cm47XG4gIHZhciByYXdMZW5ndGggPSByZXBsYWNlci5sZW5ndGg7XG4gIHZhciBrZXlzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcmF3TGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZWxlbWVudCA9IHJlcGxhY2VyW2ldO1xuICAgIGlmICh0eXBlb2YgZWxlbWVudCA9PSAnc3RyaW5nJykgcHVzaChrZXlzLCBlbGVtZW50KTtcbiAgICBlbHNlIGlmICh0eXBlb2YgZWxlbWVudCA9PSAnbnVtYmVyJyB8fCBjbGFzc29mKGVsZW1lbnQpID09PSAnTnVtYmVyJyB8fCBjbGFzc29mKGVsZW1lbnQpID09PSAnU3RyaW5nJykgcHVzaChrZXlzLCB0b1N0cmluZyhlbGVtZW50KSk7XG4gIH1cbiAgdmFyIGtleXNMZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgdmFyIHJvb3QgPSB0cnVlO1xuICByZXR1cm4gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgICBpZiAocm9vdCkge1xuICAgICAgcm9vdCA9IGZhbHNlO1xuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgICBpZiAoaXNBcnJheSh0aGlzKSkgcmV0dXJuIHZhbHVlO1xuICAgIGZvciAodmFyIGogPSAwOyBqIDwga2V5c0xlbmd0aDsgaisrKSBpZiAoa2V5c1tqXSA9PT0ga2V5KSByZXR1cm4gdmFsdWU7XG4gIH07XG59O1xuXG4vLyBgSlNPTi5zdHJpbmdpZnlgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1qc29uLnN0cmluZ2lmeVxuLy8gaHR0cHM6Ly9naXRodWIuY29tL3RjMzkvcHJvcG9zYWwtanNvbi1wYXJzZS13aXRoLXNvdXJjZVxuaWYgKCRzdHJpbmdpZnkpICQoeyB0YXJnZXQ6ICdKU09OJywgc3RhdDogdHJ1ZSwgYXJpdHk6IDMsIGZvcmNlZDogV1JPTkdfU1lNQk9MU19DT05WRVJTSU9OIHx8IElMTF9GT1JNRURfVU5JQ09ERSB8fCAhTkFUSVZFX1JBV19KU09OIH0sIHtcbiAgc3RyaW5naWZ5OiBmdW5jdGlvbiBzdHJpbmdpZnkodGV4dCwgcmVwbGFjZXIsIHNwYWNlKSB7XG4gICAgdmFyIHJlcGxhY2VyRnVuY3Rpb24gPSBnZXRSZXBsYWNlckZ1bmN0aW9uKHJlcGxhY2VyKTtcbiAgICB2YXIgcmF3U3RyaW5ncyA9IFtdO1xuXG4gICAgdmFyIGpzb24gPSBzdHJpbmdpZnlXaXRoUHJvcGVyU3ltYm9sc0NvbnZlcnNpb24odGV4dCwgZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgICAgIC8vIHNvbWUgb2xkIGltcGxlbWVudGF0aW9ucyAobGlrZSBXZWJLaXQpIGNvdWxkIHBhc3MgbnVtYmVycyBhcyBrZXlzXG4gICAgICB2YXIgdiA9IGlzQ2FsbGFibGUocmVwbGFjZXJGdW5jdGlvbikgPyBjYWxsKHJlcGxhY2VyRnVuY3Rpb24sIHRoaXMsICRTdHJpbmcoa2V5KSwgdmFsdWUpIDogdmFsdWU7XG4gICAgICByZXR1cm4gIU5BVElWRV9SQVdfSlNPTiAmJiBpc1Jhd0pTT04odikgPyBNQVJLICsgKHB1c2gocmF3U3RyaW5ncywgdi5yYXdKU09OKSAtIDEpIDogdjtcbiAgICB9LCBzcGFjZSk7XG5cbiAgICBpZiAodHlwZW9mIGpzb24gIT0gJ3N0cmluZycpIHJldHVybiBqc29uO1xuXG4gICAgaWYgKElMTF9GT1JNRURfVU5JQ09ERSkganNvbiA9IHJlcGxhY2UoanNvbiwgc3Vycm9nYXRlcywgZml4SWxsRm9ybWVkSlNPTik7XG5cbiAgICBpZiAoTkFUSVZFX1JBV19KU09OKSByZXR1cm4ganNvbjtcblxuICAgIHZhciByZXN1bHQgPSAnJztcbiAgICB2YXIgbGVuZ3RoID0ganNvbi5sZW5ndGg7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgY2hyID0gY2hhckF0KGpzb24sIGkpO1xuICAgICAgaWYgKGNociA9PT0gJ1wiJykge1xuICAgICAgICB2YXIgZW5kID0gcGFyc2VKU09OU3RyaW5nKGpzb24sICsraSkuZW5kIC0gMTtcbiAgICAgICAgdmFyIHN0cmluZyA9IHNsaWNlKGpzb24sIGksIGVuZCk7XG4gICAgICAgIHJlc3VsdCArPSBzbGljZShzdHJpbmcsIDAsIE1BUktfTEVOR1RIKSA9PT0gTUFSS1xuICAgICAgICAgID8gcmF3U3RyaW5nc1tzbGljZShzdHJpbmcsIE1BUktfTEVOR1RIKV1cbiAgICAgICAgICA6ICdcIicgKyBzdHJpbmcgKyAnXCInO1xuICAgICAgICBpID0gZW5kO1xuICAgICAgfSBlbHNlIHJlc3VsdCArPSBjaHI7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxufSk7XG4iLCAiY2xhc3MgQ29uc3RhbnRzIHtcblx0dmVyc2lvbiA9ICc0LjEuMCc7XG5cdGdldCBpc0FydGljbGUoKSB7XG5cdFx0cmV0dXJuIHdpbmRvdy5tdy5jb25maWcuZ2V0KCd3Z0lzQXJ0aWNsZScpO1xuXHR9XG5cdGdldCBjdXJyZW50UGFnZU5hbWUoKSB7XG5cdFx0cmV0dXJuIHdpbmRvdy5tdy5jb25maWcuZ2V0KCd3Z1BhZ2VOYW1lJykucmVwbGFjZSgvIC9nLCAnXycpO1xuXHR9XG5cdGdldCBhcnRpY2xlSWQoKSB7XG5cdFx0cmV0dXJuIHdpbmRvdy5tdy5jb25maWcuZ2V0KCd3Z0FydGljbGVJZCcpO1xuXHR9XG5cdGdldCByZXZpc2lvbklkKCkge1xuXHRcdHJldHVybiB3aW5kb3cubXcuY29uZmlnLmdldCgnd2dSZXZpc2lvbklkJyk7XG5cdH1cblx0Z2V0IGxhdGVzdFJldmlzaW9uSWQoKSB7XG5cdFx0cmV0dXJuIHdpbmRvdy5tdy5jb25maWcuZ2V0KCd3Z0N1clJldmlzaW9uSWQnKTtcblx0fVxuXHRnZXQgYXJ0aWNsZVBhdGgoKSB7XG5cdFx0cmV0dXJuIHdpbmRvdy5tdy5jb25maWcuZ2V0KCd3Z0FydGljbGVQYXRoJyk7XG5cdH1cblx0Z2V0IHNjcmlwdFBhdGgoKSB7XG5cdFx0cmV0dXJuIHdpbmRvdy5tdy5jb25maWcuZ2V0KCd3Z1NjcmlwdFBhdGgnKTtcblx0fVxuXHRnZXQgYWN0aW9uKCkge1xuXHRcdHJldHVybiB3aW5kb3cubXcuY29uZmlnLmdldCgnd2dBY3Rpb24nKTtcblx0fVxuXHRnZXQgc2tpbigpIHtcblx0XHRyZXR1cm4gd2luZG93Lm13LmNvbmZpZy5nZXQoJ3NraW4nKTtcblx0fVxuXHRnZXQgdXNlckdyb3VwcygpIHtcblx0XHRyZXR1cm4gd2luZG93Lm13LmNvbmZpZy5nZXQoJ3dnVXNlckdyb3VwcycpO1xuXHR9XG5cdGdldCB3aWtpSWQoKSB7XG5cdFx0cmV0dXJuIHdpbmRvdy5tdy5jb25maWcuZ2V0KCd3Z1dpa2lJRCcpO1xuXHR9XG5cdHVzZXJBZ2VudCA9IGBRaXV3ZW4vMS4xIFdpa2lwbHVzLyR7dGhpcy52ZXJzaW9ufSAoJHt0aGlzLndpa2lJZH0pYDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IENvbnN0YW50cygpO1xuIiwgIi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXRzLWNvbW1lbnRcbi8vIEB0cy1ub2NoZWNrXG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gJy4uL3V0aWxzL2NvbnN0YW50cyc7XG5cbmNvbnN0IFJlcXVlc3RzID0ge1xuXHRiYXNlOiBgJHtsb2NhdGlvbi5wcm90b2NvbH0vLyR7bG9jYXRpb24uaG9zdH0ke0NvbnN0YW50cy5zY3JpcHRQYXRofS9hcGkucGhwYCxcblx0YXN5bmMgZ2V0KHF1ZXJ5KSB7XG5cdFx0Y29uc3QgdXJsID0gbmV3IFVSTChSZXF1ZXN0cy5iYXNlKTtcblx0XHRmb3IgKGNvbnN0IGtleSBvZiBPYmplY3Qua2V5cyhxdWVyeSkpIHtcblx0XHRcdHVybC5zZWFyY2hQYXJhbXMuYXBwZW5kKGtleSwgcXVlcnlba2V5XSk7XG5cdFx0fVxuXHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7XG5cdFx0XHRjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcblx0XHRcdGhlYWRlcnM6IHtcblx0XHRcdFx0J0FwaS1Vc2VyLUFnZW50JzogQ29uc3RhbnRzLnVzZXJBZ2VudCxcblx0XHRcdH0sXG5cdFx0fSk7XG5cdFx0cmV0dXJuIGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblx0fSxcblx0YXN5bmMgcG9zdChwYXlsb2FkKSB7XG5cdFx0Y29uc3QgdXJsID0gbmV3IFVSTChSZXF1ZXN0cy5iYXNlKTtcblx0XHRjb25zdCBmb3JtID0gbmV3IEZvcm1EYXRhKCk7XG5cdFx0Zm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMocGF5bG9hZCkpIHtcblx0XHRcdGZvcm0uYXBwZW5kKGtleSwgdmFsdWUpO1xuXHRcdH1cblx0XHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwge1xuXHRcdFx0bWV0aG9kOiAnUE9TVCcsXG5cdFx0XHRib2R5OiBmb3JtLFxuXHRcdFx0Y3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG5cdFx0XHRoZWFkZXJzOiB7XG5cdFx0XHRcdCdBcGktVXNlci1BZ2VudCc6IENvbnN0YW50cy51c2VyQWdlbnQsXG5cdFx0XHR9LFxuXHRcdH0pO1xuXHRcdHJldHVybiBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cdH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBSZXF1ZXN0cztcbiIsICIvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10cy1jb21tZW50XG4vLyBAdHMtbm9jaGVja1xuY2xhc3MgSTE4biB7XG5cdGxhbmd1YWdlO1xuXHRpMThuRGF0YSA9IHt9O1xuXHRzZXNzaW9uVXBkYXRlTG9nID0gW107XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdGxldCBsYW5ndWFnZTtcblx0XHR0cnkge1xuXHRcdFx0bGFuZ3VhZ2UgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZVsnV2lraXBsdXNfU2V0dGluZ3MnXSlbJ2xhbmd1YWdlJ10gfHwgbmF2aWdhdG9yLmxhbmd1YWdlLnRvTG93ZXJDYXNlKCk7XG5cdFx0fSBjYXRjaCB7XG5cdFx0XHRsYW5ndWFnZSA9IChuYXZpZ2F0b3IubGFuZ3VhZ2UgfHwgbmF2aWdhdG9yLmJyb3dzZXJMYW5ndWFnZSlcblx0XHRcdFx0LnJlcGxhY2UoL2hhbltzdF0tPy9pLCAnJykgLy8gZm9yIGxhbmd1YWdlcyBsaWtlIHpoLUhhbnMtQ05cblx0XHRcdFx0LnRvTG93ZXJDYXNlKCk7XG5cdFx0fVxuXHRcdHRoaXMubGFuZ3VhZ2UgPSBsYW5ndWFnZTtcblx0XHQvLyBNZXJnZSB3aXRoIGxvY2FsU3RvcmFnZSBpMThuIGNhY2hlXG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IGkxOG5DYWNoZSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ1dpa2lwbHVzX2kxOG5DYWNoZScpKTtcblx0XHRcdGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKGkxOG5DYWNoZSkpIHtcblx0XHRcdFx0dGhpcy5pMThuRGF0YVtrZXldID0gaTE4bkNhY2hlW2tleV07XG5cdFx0XHR9XG5cdFx0fSBjYXRjaCB7XG5cdFx0XHQvLyBGYWlsIHRvIHBhcnNlIGkxOG4gY2FjaGUsIHJlc2V0XG5cdFx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnV2lraXBsdXNfaTE4bkNhY2hlJywgJ3t9Jyk7XG5cdFx0fVxuXHR9XG5cdHRyYW5zbGF0ZShrZXksIHBsYWNlaG9sZGVycyA9IFtdKSB7XG5cdFx0bGV0IHJlc3VsdCA9ICcnO1xuXHRcdGlmICh0aGlzLmxhbmd1YWdlIGluIHRoaXMuaTE4bkRhdGEpIHtcblx0XHRcdGlmIChrZXkgaW4gdGhpcy5pMThuRGF0YVt0aGlzLmxhbmd1YWdlXSkge1xuXHRcdFx0XHRyZXN1bHQgPSB0aGlzLmkxOG5EYXRhW3RoaXMubGFuZ3VhZ2VdW2tleV07XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQvLyB0cnkgdXBkYXRlIGxhbmd1YWdlIHZlcmlzb25cblx0XHRcdFx0dGhpcy5sb2FkTGFuZ3VhZ2UodGhpcy5sYW5ndWFnZSk7XG5cdFx0XHRcdGlmIChrZXkgaW4gdGhpcy5pMThuRGF0YVsnZW4tdXMnXSkge1xuXHRcdFx0XHRcdC8vIEZhbGxiYWNrIHRvIEVuZ2xpc2hcblx0XHRcdFx0XHRyZXN1bHQgPSB0aGlzLmkxOG5EYXRhWydlbi11cyddW2tleV07XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0cmVzdWx0ID0ga2V5O1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMubG9hZExhbmd1YWdlKHRoaXMubGFuZ3VhZ2UpO1xuXHRcdH1cblxuXHRcdGlmIChwbGFjZWhvbGRlcnMubGVuZ3RoID4gMCkge1xuXHRcdFx0Zm9yIChjb25zdCBbaW5kZXgsIHBsYWNlaG9sZGVyXSBvZiBwbGFjZWhvbGRlcnMuZW50cmllcygpKSB7XG5cdFx0XHRcdHJlc3VsdCA9IHJlc3VsdC5yZXBsYWNlKGAkJHtpbmRleCArIDF9YCwgcGxhY2Vob2xkZXIpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9XG5cdGFzeW5jIGxvYWRMYW5ndWFnZShsYW5ndWFnZSkge1xuXHRcdGlmICh0aGlzLnNlc3Npb25VcGRhdGVMb2cuaW5jbHVkZXMobGFuZ3VhZ2UpKSB7XG5cdFx0XHQvLyBIYXMgYmVlbiB1cGRhdGVkIHRoaXMgc2Vzc2lvbi5cblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgKFxuXHRcdFx0XHRhd2FpdCBmZXRjaChcblx0XHRcdFx0XHRgaHR0cHM6Ly9naXRjZG4ucWl1d2VuLm5ldC5jbi9JbnRlcmZhY2VBZG1pbi9XaWtpcGx1cy9yYXcvYnJhbmNoL2Rldi9sYW5ndWFnZXMvJHtsYW5ndWFnZX0uanNvbmBcblx0XHRcdFx0KVxuXHRcdFx0KS5qc29uKCk7XG5cdFx0XHRjb25zdCBub3dWZXJzaW9uID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ1dpa2lwbHVzX0xhbmd1YWdlVmVyc2lvbicpIHx8ICcwMDAnO1xuXHRcdFx0dGhpcy5zZXNzaW9uVXBkYXRlTG9nLnB1c2gobGFuZ3VhZ2UpO1xuXHRcdFx0aWYgKHJlc3BvbnNlLl9fdmVyc2lvbiAhPT0gbm93VmVyc2lvbiB8fCAhKGxhbmd1YWdlIGluIHRoaXMuaTE4bkRhdGEpKSB7XG5cdFx0XHRcdC8vIExhbmd1YWdlIGdldCB1cGRhdGVkXG5cdFx0XHRcdGNvbnNvbGUuaW5mbyhgVXBkYXRlICR7bGFuZ3VhZ2V9IHN1cHBvcnQgdG8gdmVyc2lvbiAke3Jlc3BvbnNlLl9fdmVyc2lvbn1gKTtcblx0XHRcdFx0dGhpcy5pMThuRGF0YVtsYW5ndWFnZV0gPSByZXNwb25zZTtcblx0XHRcdFx0Ly8gVXBkYXRlIGxvY2FsU3RvcmFnZSBjYWNoZVxuXHRcdFx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnV2lraXBsdXNfaTE4bkNhY2hlJywgSlNPTi5zdHJpbmdpZnkodGhpcy5pMThuRGF0YSkpO1xuXHRcdFx0fVxuXHRcdH0gY2F0Y2gge1xuXHRcdFx0Ly8gVW5zdXBwb3J0ZWQgbGFuZ3VhZ2Vcblx0XHR9XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IEkxOG4oKTtcbiIsICIvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10cy1jb21tZW50XG4vLyBAdHMtbm9jaGVja1xuaW1wb3J0IGkxOG4gZnJvbSAnLi9pMThuJztcblxuY2xhc3MgV2lraXBsdXNFcnJvciBleHRlbmRzIEVycm9yIHtcblx0Y29uc3RydWN0b3IobWVzc2FnZSwgY29kZSkge1xuXHRcdHN1cGVyKG1lc3NhZ2UpO1xuXHRcdHRoaXMuY29kZSA9IGNvZGU7XG5cdH1cbn1cblxuY29uc3QgTG9nID0ge1xuXHRkZWJ1ZyhtZXNzYWdlID0gJycpIHtcblx0XHRjb25zb2xlLmRlYnVnKGBbV2lraXBsdXMtREVCVUddICR7bWVzc2FnZX1gKTtcblx0fSxcblx0aW5mbyhtZXNzYWdlID0gJycpIHtcblx0XHRjb25zb2xlLmluZm8oYFtXaWtpcGx1cy1JTkZPXSAke21lc3NhZ2V9YCk7XG5cdH0sXG5cdGVycm9yKGVycm9yQ29kZSwgcGF5bG9hZHMgPSBbXSkge1xuXHRcdGxldCB0ZW1wbGF0ZSA9IGkxOG4udHJhbnNsYXRlKGVycm9yQ29kZSk7XG5cdFx0aWYgKHBheWxvYWRzLmxlbmd0aCA+IDApIHtcblx0XHRcdC8vIEZpbGxcblx0XHRcdGZvciAoY29uc3QgW2ksIHZdIG9mIHBheWxvYWRzLmVudHJpZXMoKSkge1xuXHRcdFx0XHR0ZW1wbGF0ZSA9IHRlbXBsYXRlLnJlcGxhY2UobmV3IFJlZ0V4cChgXFxcXCR7aSArIDF9YCwgJ2lnJyksIHYpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRjb25zb2xlLmVycm9yKGBbV2lraXBsdXMtRVJST1JdICR7dGVtcGxhdGV9YCk7XG5cdFx0dGhyb3cgbmV3IFdpa2lwbHVzRXJyb3IoYCR7dGVtcGxhdGV9YCwgZXJyb3JDb2RlKTtcblx0fSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExvZztcbiIsICIvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10cy1jb21tZW50XG4vLyBAdHMtbm9jaGVja1xuaW1wb3J0IHJlcXVlc3RzIGZyb20gJy4uL3V0aWxzL3JlcXVlc3RzJztcbmltcG9ydCBMb2cgZnJvbSAnLi4vdXRpbHMvbG9nJztcbmltcG9ydCBpMThuIGZyb20gJy4uL3V0aWxzL2kxOG4nO1xuXG5jbGFzcyBXaWtpIHtcblx0cGFnZUluZm9DYWNoZSA9IHt9O1xuXHQvKipcblx0ICog6I635b6XIEVkaXQgVG9rZW5cblx0ICogR2V0IEVkaXQgVG9rZW5cblx0ICpcblx0ICogQHJldHVybnMge1Byb21pc2U8c3RyaW5nPn1cblx0ICovXG5cdGFzeW5jIGdldEVkaXRUb2tlbigpIHtcblx0XHQvLyDlsJ3or5Xku44gQVBJIOiOt+W+lyBFZGl0VG9rZW5cblx0XHQvLyBUcnkgdG8gZ2V0IEVkaXRUb2tlbiBmcm9tIEFQSVxuXHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcmVxdWVzdHMuZ2V0KHtcblx0XHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRcdG1ldGE6ICd0b2tlbnMnLFxuXHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0fSk7XG5cdFx0aWYgKFxuXHRcdFx0cmVzcG9uc2UucXVlcnkgJiZcblx0XHRcdHJlc3BvbnNlLnF1ZXJ5LnRva2VucyAmJlxuXHRcdFx0cmVzcG9uc2UucXVlcnkudG9rZW5zLmNzcmZ0b2tlbiAmJlxuXHRcdFx0cmVzcG9uc2UucXVlcnkudG9rZW5zLmNzcmZ0b2tlbiAhPT0gJytcXFxcJ1xuXHRcdCkge1xuXHRcdFx0cmV0dXJuIHJlc3BvbnNlLnF1ZXJ5LnRva2Vucy5jc3JmdG9rZW47XG5cdFx0fVxuXHRcdHJldHVybiBMb2cuZXJyb3IoJ2ZhaWxfdG9fZ2V0X2VkaXR0b2tlbicpO1xuXHR9XG5cdC8qKlxuXHQgKiDojrflvpfpobXpnaLkuIrkuIDniYjmnKzml7bpl7TmiLNcblx0ICogR2V0IHRoZSB0aW1lc3RhbXAgb2YgdGhlIGxhc3QgcmV2aXNpb24gb2YgcGFnZSBzcGVjaWZpZWQuXG5cdCAqXG5cdCAqIEBwYXJhbSB7cGFyYW1zLnN0cmluZ30gdGl0bGUg6aG16Z2i5ZCNIC8gUGFnZW5hbWVcblx0ICogQHBhcmFtIHtwYXJhbXMucmV2aXNpb25JZH0gcmV2aXNpb25JZCDkv67orqLniYjmnKzlj7cgLyBSZXZpc2lvbiBJRFxuXHQgKiBAcGFyYW0ge3BhcmFtcy5jb250ZW50bW9kZWx9IGNvbnRlbnRtb2RlbCDlhoXlrrnmqKHlnosgLyBDb250ZW50IE1vZGVsXG5cdCAqIEByZXR1cm5zIHtQcm9taXNlPHN0cmluZz59XG5cdCAqL1xuXHRhc3luYyBnZXRQYWdlSW5mbyh7dGl0bGUsIHJldmlzaW9uSWR9KSB7XG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IHBhcmFtcyA9IHtcblx0XHRcdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdFx0XHRwcm9wOiAncmV2aXNpb25zfGluZm8nLFxuXHRcdFx0XHRydnByb3A6ICd0aW1lc3RhbXB8aWRzJyxcblx0XHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHR9O1xuXHRcdFx0aWYgKHJldmlzaW9uSWQpIHtcblx0XHRcdFx0cGFyYW1zLnJldmlkcyA9IHJldmlzaW9uSWQ7XG5cdFx0XHR9IGVsc2UgaWYgKHRpdGxlKSB7XG5cdFx0XHRcdGlmICh0aGlzLnBhZ2VJbmZvQ2FjaGVbdGl0bGVdKSB7XG5cdFx0XHRcdFx0Ly8gSGl0IGNhY2hlXG5cdFx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHRcdHRpbWVzdGFtcDogdGhpcy5wYWdlSW5mb0NhY2hlW3RpdGxlXS50aW1lc3RhbXAsXG5cdFx0XHRcdFx0XHRyZXZpc2lvbklkOiB0aGlzLnBhZ2VJbmZvQ2FjaGVbdGl0bGVdLnJldmlkLFxuXHRcdFx0XHRcdFx0Y29udGVudG1vZGVsOiB0aGlzLnBhZ2VJbmZvQ2FjaGVbdGl0bGVdLmNvbnRlbnRtb2RlbCxcblx0XHRcdFx0XHR9O1xuXHRcdFx0XHR9XG5cdFx0XHRcdHBhcmFtcy50aXRsZXMgPSB0aXRsZTtcblx0XHRcdH1cblx0XHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcmVxdWVzdHMuZ2V0KHBhcmFtcyk7XG5cdFx0XHRpZiAocmVzcG9uc2UucXVlcnkgJiYgcmVzcG9uc2UucXVlcnkucGFnZXMpIHtcblx0XHRcdFx0Y29uc3QgcGFnZUtleSA9IE9iamVjdC5rZXlzKHJlc3BvbnNlLnF1ZXJ5LnBhZ2VzKVswXTtcblx0XHRcdFx0Y29uc3QgY29udGVudG1vZGVsID0gcmVzcG9uc2UucXVlcnkucGFnZXNbcGFnZUtleV0uY29udGVudG1vZGVsO1xuXHRcdFx0XHRpZiAocGFnZUtleSA9PT0gJy0xJykge1xuXHRcdFx0XHRcdC8vIOS4jeWtmOWcqOi/meS4gOmhtemdolxuXHRcdFx0XHRcdC8vIFBhZ2Ugbm90IGZvdW5kLlxuXHRcdFx0XHRcdHRoaXMucGFnZUluZm9DYWNoZVt0aXRsZV0gPSB7Y29udGVudG1vZGVsfTtcblx0XHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdFx0Y29udGVudG1vZGVsOiBjb250ZW50bW9kZWwsXG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0fVxuXHRcdFx0XHRjb25zdCBwYWdlSW5mbyA9IHJlc3BvbnNlLnF1ZXJ5LnBhZ2VzW3BhZ2VLZXldLnJldmlzaW9uc1swXTtcblx0XHRcdFx0aWYgKHRpdGxlKSB7XG5cdFx0XHRcdFx0dGhpcy5wYWdlSW5mb0NhY2hlW3RpdGxlXSA9IHsuLi5wYWdlSW5mbywgY29udGVudG1vZGVsfTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdHRpbWVzdGFtcDogcGFnZUluZm8udGltZXN0YW1wLFxuXHRcdFx0XHRcdHJldmlzaW9uSWQ6IHBhZ2VJbmZvLnJldmlkLFxuXHRcdFx0XHRcdGNvbnRlbnRtb2RlbDogY29udGVudG1vZGVsLFxuXHRcdFx0XHR9O1xuXHRcdFx0fVxuXHRcdH0gY2F0Y2gge1xuXHRcdFx0TG9nLmVycm9yKCdmYWlsX3RvX2dldF9lZGl0dG9rZW4nKTtcblx0XHR9XG5cdH1cblx0LyoqXG5cdCAqIOiOt+W+l+mhtemdoueahCBXaWtpdGV4dFxuXHQgKiBHZXQgd2lraXRleHQgb2YgdGhlIHBhZ2UuXG5cdCAqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSB0aXRsZSB0aXRsZVxuXHQgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBjb25maWcucmV2aXNpb25JZCDniYjmnKzlj7dcblx0ICogQHBhcmFtIHtzdHJpbmd9IGNvbmZpZy5zZWN0aW9uIOauteiQveWPt1xuXHQgKiBAcmV0dXJuIHtQcm9taXNlPHN0cmluZz59IHdpa2l0ZXh05YaF5a65XG5cdCAqL1xuXHRhc3luYyBnZXRXaWtpVGV4dCh7c2VjdGlvbiwgcmV2aXNpb25JZH0pIHtcblx0XHR0cnkge1xuXHRcdFx0Y29uc3QgcGFyYW1zID0ge1xuXHRcdFx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0XHRcdHByb3A6ICdyZXZpc2lvbnMnLFxuXHRcdFx0XHRydnByb3A6ICdjb250ZW50Jyxcblx0XHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHRcdHJldmlkczogcmV2aXNpb25JZCxcblx0XHRcdH07XG5cdFx0XHRpZiAocmV2aXNpb25JZCkge1xuXHRcdFx0XHRwYXJhbXMucmV2aWRzID0gcmV2aXNpb25JZDtcblx0XHRcdH1cblx0XHRcdGlmIChzZWN0aW9uKSB7XG5cdFx0XHRcdHBhcmFtcy5ydnNlY3Rpb24gPSBzZWN0aW9uO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCByZXF1ZXN0cy5nZXQocGFyYW1zKTtcblx0XHRcdGlmIChyZXNwb25zZS5xdWVyeSAmJiByZXNwb25zZS5xdWVyeS5wYWdlcykge1xuXHRcdFx0XHRpZiAoT2JqZWN0LmtleXMocmVzcG9uc2UucXVlcnkucGFnZXMpWzBdID09PSAnLTEnKSB7XG5cdFx0XHRcdFx0Ly8g5LiN5a2Y5Zyo6L+Z5LiA6aG16Z2iXG5cdFx0XHRcdFx0Ly8gUGFnZSBub3QgZm91bmQuXG5cdFx0XHRcdFx0cmV0dXJuICcnO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNvbnN0IHBhZ2VJbmZvID0gcmVzcG9uc2UucXVlcnkucGFnZXNbT2JqZWN0LmtleXMocmVzcG9uc2UucXVlcnkucGFnZXMpWzBdXS5yZXZpc2lvbnNbMF07XG5cdFx0XHRcdHJldHVybiBwYWdlSW5mb1snKiddO1xuXHRcdFx0fVxuXHRcdH0gY2F0Y2gge1xuXHRcdFx0TG9nLmVycm9yKCdmYWlsX3RvX2dldF93aWtpdGV4dCcpO1xuXHRcdH1cblx0fVxuXHQvKipcblx0ICog6Kej5p6QIFdpa2l0ZXh0XG5cdCAqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSB3aWtpdGV4dCB3aWtpdGV4dFxuXHQgKiBAcGFyYW0ge3N0cmluZ30gdGl0bGUg6aG16Z2i5qCH6aKYXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcg6K6+572uXG5cdCAqIEByZXR1cm4ge1Byb21pc2U8c3RyaW5nPn0g6Kej5p6Q57uT5p6cIEhUTUxcblx0ICovXG5cdGFzeW5jIHBhcnNlV2lraVRleHQod2lraXRleHQsIHRpdGxlID0gJycsIGNvbmZpZyA9IHt9KSB7XG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcmVxdWVzdHMucG9zdCh7XG5cdFx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0XHRhY3Rpb246ICdwYXJzZScsXG5cdFx0XHRcdHRleHQ6IHdpa2l0ZXh0LFxuXHRcdFx0XHR0aXRsZSxcblx0XHRcdFx0cHN0OiAndHJ1ZScsXG5cdFx0XHR9KTtcblx0XHRcdGlmIChyZXNwb25zZS5wYXJzZSAmJiByZXNwb25zZS5wYXJzZS50ZXh0KSB7XG5cdFx0XHRcdHJldHVybiByZXNwb25zZS5wYXJzZS50ZXh0WycqJ107XG5cdFx0XHR9XG5cdFx0fSBjYXRjaCB7XG5cdFx0XHRMb2cuZXJyb3IoJ2NhbnRfcGFyc2Vfd2lraXRleHQnKTtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICog57yW6L6R6aG16Z2iXG5cdCAqXG5cdCAqIEBwYXJhbSByb290MFxuXHQgKiBAcGFyYW0gcm9vdDAudGl0bGVcblx0ICogQHBhcmFtIHJvb3QwLmNvbnRlbnRcblx0ICogQHBhcmFtIHJvb3QwLmVkaXRUb2tlblxuXHQgKiBAcGFyYW0gcm9vdDAudGltZXN0YW1wXG5cdCAqIEBwYXJhbSByb290MC5jb25maWdcblx0ICogQHBhcmFtIHJvb3QwLmFkZGl0aW9uYWxDb25maWdcblx0ICovXG5cdGFzeW5jIGVkaXQoe3RpdGxlLCBjb250ZW50LCBlZGl0VG9rZW4sIHRpbWVzdGFtcCwgY29uZmlnID0ge30sIGFkZGl0aW9uYWxDb25maWcgPSB7fX0gPSB7fSkge1xuXHRcdGxldCByZXNwb25zZTtcblx0XHR0cnkge1xuXHRcdFx0cmVzcG9uc2UgPSBhd2FpdCByZXF1ZXN0cy5wb3N0KHtcblx0XHRcdFx0YWN0aW9uOiAnZWRpdCcsXG5cdFx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0XHR0ZXh0OiBjb250ZW50LFxuXHRcdFx0XHR0aXRsZSxcblx0XHRcdFx0dG9rZW46IGVkaXRUb2tlbixcblx0XHRcdFx0Li4uKHRpbWVzdGFtcCA/IHtiYXNldGltZXN0YW1wOiB0aW1lc3RhbXB9IDoge30pLFxuXHRcdFx0XHQuLi5jb25maWcsXG5cdFx0XHRcdC4uLmFkZGl0aW9uYWxDb25maWcsXG5cdFx0XHR9KTtcblx0XHR9IGNhdGNoIHtcblx0XHRcdExvZy5lcnJvcignbmV0d29ya19lZGl0X2Vycm9yJyk7XG5cdFx0fVxuXHRcdGlmIChyZXNwb25zZS5lZGl0KSB7XG5cdFx0XHRpZiAocmVzcG9uc2UuZWRpdC5yZXN1bHQgPT09ICdTdWNjZXNzJykge1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblx0XHRcdGlmIChyZXNwb25zZS5lZGl0LmNvZGUpIHtcblx0XHRcdFx0Ly8gQWJ1c2UgRmlsdGVyXG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcihgXG4gICAgICAgICAgICAgICAgICAgICAgICAke2kxOG4udHJhbnNsYXRlKCdoaXRfYWJ1c2VmaWx0ZXInKX06JHtyZXNwb25zZS5lZGl0LmluZm8ucmVwbGFjZSgnL0hpdCBBYnVzZUZpbHRlcjogL2lnJywgJycpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPGJyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT1cImZvbnQtc2l6ZTogc21hbGxlcjtcIj4ke3Jlc3BvbnNlLmVkaXQud2FybmluZ308L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgYCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRMb2cuZXJyb3IoJ3Vua25vd25fZWRpdF9lcnJvcicpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSBpZiAocmVzcG9uc2UuZXJyb3IgJiYgcmVzcG9uc2UuZXJyb3IuY29kZSkge1xuXHRcdFx0TG9nLmVycm9yKHJlc3BvbnNlLmVycm9yLmNvZGUpO1xuXHRcdH0gZWxzZSBpZiAocmVzcG9uc2UuY29kZSkge1xuXHRcdFx0TG9nLmVycm9yKHJlc3BvbnNlLmNvZGUpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRMb2cuZXJyb3IoJ3Vua25vd25fZWRpdF9lcnJvcicpO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiDojrflvpfmjIflrprpobXpnaLmnIDmlrDkv67orqLnvJblj7dcblx0ICogR2V0IGxhdGVzdCByZXZpc2lvbklkIG9mIGEgcGFnZS5cblx0ICpcblx0ICogQHBhcmFtIHsqfSB0aXRsZVxuXHQgKi9cblx0YXN5bmMgZ2V0TGF0ZXN0UmV2aXNpb25JZEZvclBhZ2UodGl0bGUpIHtcblx0XHRjb25zdCB7cmV2aXNpb25JZH0gPSBhd2FpdCB0aGlzLmdldFBhZ2VJbmZvKHt0aXRsZX0pO1xuXHRcdHJldHVybiByZXZpc2lvbklkO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBXaWtpKCk7XG4iLCAiLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHMtY29tbWVudFxuLy8gQHRzLW5vY2hlY2tcbmltcG9ydCBXaWtpIGZyb20gJy4uL3NlcnZpY2VzL3dpa2knO1xuaW1wb3J0IExvZyBmcm9tICcuLi91dGlscy9sb2cnO1xuXG5jbGFzcyBQYWdlIHtcblx0dGltZXN0YW1wO1xuXHRlZGl0VG9rZW47XG5cdHRpdGxlO1xuXHRyZXZpc2lvbklkO1xuXG5cdGluaXRlZCA9IGZhbHNlO1xuXHRpc05ld1BhZ2UgPSBmYWxzZTtcblxuXHRjb250ZW50bW9kZWwgPSAnd2lraXRleHQnO1xuXG5cdHNlY3Rpb25DYWNoZSA9IHt9O1xuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge3BhcmFtcy50aXRsZX0g6aG16Z2i5qCH6aKYIFBhZ2UgTmFtZSAob3B0aW9uYWwpXG5cdCAqIEBwYXJhbSB7cGFyYW1zLnJldmlzaW9uSWR9IOmhtemdouS/ruiuoue8luWPtyBSZXZpc2lvbiBJZFxuXHQgKiBAcGFyYW0ge3BhcmFtcy5jb250ZW50bW9kZWx9IOmhtemdouWGheWuueaooeWeiyBDb250ZW50IE1vZGVsXG5cdCAqL1xuXHRjb25zdHJ1Y3Rvcih7dGl0bGUsIHJldmlzaW9uSWR9KSB7XG5cdFx0dGhpcy50aXRsZSA9IHRpdGxlO1xuXHRcdHRoaXMucmV2aXNpb25JZCA9IHJldmlzaW9uSWQ7XG5cdFx0dGhpcy5pc05ld1BhZ2UgPSAhcmV2aXNpb25JZDtcblx0fVxuXG5cdC8qKlxuXHQgKiDliJ3lp4vljJYg6I635b6X6aG16Z2iRWRpdFRva2Vu5ZKM5Yid5aeLVGltZVN0YW1wXG5cdCAqIEluaXRpYWxpemF0aW9uLlxuXHQgKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gZWRpdFRva2VuIChvcHRpb25hbCkg5aaC5p6c5o+Q5L6b5LqGZWRpdFRva2Vu77yM5bCG5LiN5Lya5YaN6I635Y+WXG5cdCAqL1xuXHRhc3luYyBpbml0KHtlZGl0VG9rZW4gPSAnJ30gPSB7fSkge1xuXHRcdGNvbnN0IHByb21pc2VBcnIgPSBbdGhpcy5nZXRUaW1lc3RhbXAoKSwgdGhpcy5nZXRDb250ZW50TW9kZWwoKV07XG5cdFx0aWYgKCFlZGl0VG9rZW4pIHtcblx0XHRcdHByb21pc2VBcnIucHVzaCh0aGlzLmdldEVkaXRUb2tlbigpKTtcblx0XHR9XG5cdFx0YXdhaXQgUHJvbWlzZS5hbGwocHJvbWlzZUFycik7XG5cdFx0dGhpcy5pbml0ZWQgPSB0cnVlO1xuXHRcdExvZy5pbmZvKGBQYWdlIGluaXRpYWxpemF0aW9uIGZvciAke3RoaXMudGl0bGV9IyR7dGhpcy5yZXZpc2lvbklkfSBmaW5pc2hlZC5gKTtcblx0fVxuXG5cdC8qKlxuXHQgKiDojrflvpcgRWRpdFRva2VuXG5cdCAqIEdldCBFZGl0VG9rZW5cblx0ICovXG5cdGFzeW5jIGdldEVkaXRUb2tlbigpIHtcblx0XHRhd2FpdCBtdy5sb2FkZXIudXNpbmcoJ21lZGlhd2lraS51c2VyJyk7XG5cdFx0aWYgKG13LnVzZXIudG9rZW5zLmdldCgnY3NyZlRva2VuJykgJiYgbXcudXNlci50b2tlbnMuZ2V0KCdjc3JmVG9rZW4nKSAhPT0gJytcXFxcJykge1xuXHRcdFx0Ly8g5aaC5p6cIE1lZGlhV2lraSBKYXZhU2NyaXB0IEFQSSDlj6/ku6Xnm7TmjqXojrflvpcgRWRpdFRva2VuIOWImeebtOaOpei/lOWbnlxuXHRcdFx0Ly8gUmV0dXJuIEVkaXRUb2tlbiByZXRyaWV2ZWQgZnJvbSBNZWRpYVdpa2kgSmF2YVNjcmlwdCBBUEkgaWYgYWNjZXNzaWJsZVxuXHRcdFx0dGhpcy5lZGl0VG9rZW4gPSBtdy51c2VyLnRva2Vucy5nZXQoJ2NzcmZUb2tlbicpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHQvLyDku45BUEnojrflvpdFZGl0VG9rZW5cblx0XHQvLyBHZXQgRWRpdFRva2VuIGZyb20gTWVkaWFXaWtpIEFQSVxuXHRcdHRoaXMuZWRpdFRva2VuID0gYXdhaXQgV2lraS5nZXRFZGl0VG9rZW4oKTtcblx0fVxuXG5cdC8qKlxuXHQgKiDojrflvpfnvJbovpHln7rlh4bml7bpl7TmiLNcblx0ICogR2V0IEJhc2UgVGltZXN0YW1wXG5cdCAqL1xuXHRhc3luYyBnZXRUaW1lc3RhbXAoKSB7XG5cdFx0Y29uc3Qge3RpbWVzdGFtcCwgcmV2aXNpb25JZH0gPSBhd2FpdCBXaWtpLmdldFBhZ2VJbmZvKHtcblx0XHRcdHJldmlzaW9uSWQ6IHRoaXMucmV2aXNpb25JZCxcblx0XHRcdHRpdGxlOiB0aGlzLnRpdGxlLFxuXHRcdH0pO1xuXHRcdHRoaXMudGltZXN0YW1wID0gdGltZXN0YW1wO1xuXHRcdGlmIChyZXZpc2lvbklkKSB7XG5cdFx0XHR0aGlzLnJldmlzaW9uSWQgPSByZXZpc2lvbklkO1xuXHRcdFx0dGhpcy5pc05ld1BhZ2UgPSBmYWxzZTtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICog6I635b6X6aG16Z2i5YaF5a655qih5Z6LXG5cdCAqXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWdcblx0ICogQHBhcmFtIHtzdHJpbmd9IGNvbmZpZy5yZXZpc2lvbklkXG5cdCAqL1xuXHRhc3luYyBnZXRDb250ZW50TW9kZWwoKSB7XG5cdFx0Y29uc3Qge2NvbnRlbnRtb2RlbH0gPSBhd2FpdCBXaWtpLmdldFBhZ2VJbmZvKHtcblx0XHRcdHJldmlzaW9uSWQ6IHRoaXMucmV2aXNpb25JZCxcblx0XHRcdHRpdGxlOiB0aGlzLnRpdGxlLFxuXHRcdH0pO1xuXHRcdHRoaXMuY29udGVudG1vZGVsID0gY29udGVudG1vZGVsIHx8ICd3aWtpdGV4dCc7XG5cdH1cblxuXHQvKipcblx0ICog6I635b6XIFdpa2lUZXh0XG5cdCAqXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWdcblx0ICogQHBhcmFtIHtzdHJpbmd9IGNvbmZpZy5zZWN0aW9uXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBjb25maWcucmV2aXNpb25JZFxuXHQgKi9cblx0YXN5bmMgZ2V0V2lraVRleHQoe3NlY3Rpb24gPSAnJ30gPSB7fSkge1xuXHRcdGNvbnN0IHNlYyA9IHNlY3Rpb24gPT09IC0xID8gJycgOiBzZWN0aW9uO1xuXHRcdGlmICh0aGlzLnNlY3Rpb25DYWNoZVtzZWNdKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5zZWN0aW9uQ2FjaGVbc2VjXTtcblx0XHR9XG5cdFx0Y29uc3Qgd2lraVRleHQgPSBhd2FpdCBXaWtpLmdldFdpa2lUZXh0KHtcblx0XHRcdHNlY3Rpb246IHNlYyxcblx0XHRcdHJldmlzaW9uSWQ6IHRoaXMucmV2aXNpb25JZCxcblx0XHR9KTtcblx0XHRMb2cuaW5mbyhgV2lraXRleHQgb2YgJHt0aGlzLnRpdGxlfSMke3NlY3Rpb259IGZldGNoZWQuYCk7XG5cdFx0dGhpcy5zZWN0aW9uQ2FjaGVbc2VjXSA9IHdpa2lUZXh0O1xuXHRcdHJldHVybiB3aWtpVGV4dDtcblx0fVxuXG5cdC8qKlxuXHQgKiDop6PmnpAgV2lraVRleHRcblx0ICpcblx0ICogQHBhcmFtIHtzdHJpbmd9IHdpa2l0ZXh0XG5cdCAqL1xuXHRhc3luYyBwYXJzZVdpa2lUZXh0KHdpa2l0ZXh0KSB7XG5cdFx0cmV0dXJuIFdpa2kucGFyc2VXaWtpVGV4dCh3aWtpdGV4dCwgdGhpcy50aXRsZSk7XG5cdH1cblxuXHQvKipcblx0ICog57yW6L6R6aG16Z2iXG5cdCAqXG5cdCAqIEBwYXJhbSB7Kn0gY29uZmlnXG5cdCAqIEBwYXJhbSBwYXlsb2FkXG5cdCAqL1xuXHRhc3luYyBlZGl0KHBheWxvYWQpIHtcblx0XHRpZiAoIXRoaXMuZWRpdFRva2VuKSB7XG5cdFx0XHRMb2cuZXJyb3IoJ2ZhaWxfdG9fZ2V0X2VkaXR0b2tlbicpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRpZiAoIXRoaXMudGltZXN0YW1wICYmICF0aGlzLmlzTmV3UGFnZSkge1xuXHRcdFx0Ly8g5aaC5p6c5LiN5piv5Yib5bu65paw6aG16Z2iIOWPiOayoeacieWfuuWHhuaXtumXtOaIsyDliJnmnInlj6/og73pgKDmiJDnvJbovpHopobnm5Yg5L+d6Zmp6LW36KeB55u05o6l5ouS57udXG5cdFx0XHRMb2cuZXJyb3IoJ2ZhaWxfdG9fZ2V0X3RpbWVzdGFtcCcpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRyZXR1cm4gV2lraS5lZGl0KHtcblx0XHRcdHRpdGxlOiB0aGlzLnRpdGxlLFxuXHRcdFx0ZWRpdFRva2VuOiB0aGlzLmVkaXRUb2tlbixcblx0XHRcdC4uLih0aGlzLnRpbWVzdGFtcCA/IHt0aW1lc3RhbXA6IHRoaXMudGltZXN0YW1wfSA6IHt9KSxcblx0XHRcdC4uLnBheWxvYWQsXG5cdFx0XHRhZGRpdGlvbmFsQ29uZmlnOiB7XG5cdFx0XHRcdC4uLih0aGlzLmlzTmV3UGFnZSA/IHtjcmVhdGVvbmx5OiB0aGlzLmlzTmV3UGFnZX0gOiB7fSksXG5cdFx0XHR9LFxuXHRcdH0pO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBhZ2U7XG4iLCAiLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHMtY29tbWVudFxuLy8gQHRzLW5vY2hlY2tcbmNsYXNzIE5vdGlmaWNhdGlvbiB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHRoaXMuaW5pdCgpO1xuXHR9XG5cdGluaXQoKSB7XG5cdFx0JCgnYm9keScpLmFwcGVuZCgnPGRpdiBpZD1cIk1vZU5vdGlmaWNhdGlvblwiPjwvZGl2PicpO1xuXHR9XG5cdGRpc3BsYXkodGV4dCA9ICfllrV+JywgdHlwZSA9ICdzdWNjZXNzJywgY2FsbGJhY2sgPSAoKSA9PiB7fSkge1xuXHRcdCQoJyNNb2VOb3RpZmljYXRpb24nKS5hcHBlbmQoXG5cdFx0XHQkKCc8ZGl2PicpXG5cdFx0XHRcdC5hZGRDbGFzcygnTW9lTm90aWZpY2F0aW9uLW5vdGljZScpXG5cdFx0XHRcdC5hZGRDbGFzcyhgTW9lTm90aWZpY2F0aW9uLW5vdGljZS0ke3R5cGV9YClcblx0XHRcdFx0LmFwcGVuZChgPHNwYW4+JHt0ZXh0fTwvc3Bhbj5gKVxuXHRcdCk7XG5cdFx0JCgnI01vZU5vdGlmaWNhdGlvbicpLmZpbmQoJy5Nb2VOb3RpZmljYXRpb24tbm90aWNlJykubGFzdCgpLmZhZGVJbigzMDApO1xuXHRcdHRoaXMuYmluZCgpO1xuXHRcdHRoaXMuY2xlYXIoKTtcblx0XHRjYWxsYmFjaygkKCcjTW9lTm90aWZpY2F0aW9uJykuZmluZCgnLk1vZU5vdGlmaWNhdGlvbi1ub3RpY2UnKS5sYXN0KCkpO1xuXHR9XG5cdGJpbmQoKSB7XG5cdFx0Y29uc3Qgc2VsZiA9IHRoaXM7XG5cdFx0JCgnLk1vZU5vdGlmaWNhdGlvbi1ub3RpY2UnKS5vbignbW91c2VvdmVyJywgZnVuY3Rpb24gKCkge1xuXHRcdFx0c2VsZi5zbGlkZUxlZnQoJCh0aGlzKSk7XG5cdFx0fSk7XG5cdH1cblx0c3VjY2Vzcyh0ZXh0LCBjYWxsYmFjaykge1xuXHRcdHRoaXMuZGlzcGxheSh0ZXh0LCAnc3VjY2VzcycsIGNhbGxiYWNrKTtcblx0fVxuXHR3YXJuaW5nKHRleHQsIGNhbGxiYWNrKSB7XG5cdFx0dGhpcy5kaXNwbGF5KHRleHQsICd3YXJuaW5nJywgY2FsbGJhY2spO1xuXHR9XG5cdGVycm9yKHRleHQsIGNhbGxiYWNrKSB7XG5cdFx0dGhpcy5kaXNwbGF5KHRleHQsICdlcnJvcicsIGNhbGxiYWNrKTtcblx0fVxuXHRjbGVhcigpIHtcblx0XHRpZiAoJCgnLk1vZU5vdGlmaWNhdGlvbi1ub3RpY2UnKS5sZW5ndGggPj0gMTApIHtcblx0XHRcdCQoJyNNb2VOb3RpZmljYXRpb24nKVxuXHRcdFx0XHQuY2hpbGRyZW4oKVxuXHRcdFx0XHQuZmlyc3QoKVxuXHRcdFx0XHQuZmFkZU91dCgxNTAsIGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHQkKHRoaXMpLnJlbW92ZSgpO1xuXHRcdFx0XHR9KTtcblx0XHRcdHNldFRpbWVvdXQodGhpcy5jbGVhciwgMzAwKTtcblx0XHR9XG5cdH1cblx0ZW1wdHkoZikge1xuXHRcdCQoJy5Nb2VOb3RpZmljYXRpb24tbm90aWNlJykuZWFjaChmdW5jdGlvbiAoaSkge1xuXHRcdFx0aWYgKHR5cGVvZiBmID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRcdGNvbnN0IGVsZSA9ICQodGhpcyk7XG5cdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHRcdGYoZWxlKTtcblx0XHRcdFx0fSwgMjAwICogaSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQkKHRoaXMpXG5cdFx0XHRcdFx0LmRlbGF5KGkgKiAyMDApXG5cdFx0XHRcdFx0LmZhZGVPdXQoJ2Zhc3QnLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0XHQkKHRoaXMpLnJlbW92ZSgpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG5cdHNsaWRlTGVmdChlbGUsIHNwZWVkKSB7XG5cdFx0ZWxlLmNzcygncG9zaXRpb24nLCAncmVsYXRpdmUnKTtcblx0XHRlbGUuYW5pbWF0ZShcblx0XHRcdHtcblx0XHRcdFx0bGVmdDogJy0yMDAlJyxcblx0XHRcdH0sXG5cdFx0XHRzcGVlZCB8fCAxNTAsXG5cdFx0XHRmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdCQodGhpcykuZmFkZU91dCgnZmFzdCcsIGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHQkKHRoaXMpLnJlbW92ZSgpO1xuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHQpO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBOb3RpZmljYXRpb24oKTtcbiIsICIvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10cy1jb21tZW50XG4vLyBAdHMtbm9jaGVja1xuY29uc3Qgc2xlZXAgPSAodGltZSkgPT4ge1xuXHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcblx0XHRyZXR1cm4gc2V0VGltZW91dChyZXNvbHZlLCB0aW1lKTtcblx0fSk7XG59O1xuZXhwb3J0IGRlZmF1bHQgc2xlZXA7XG4iLCAiLyoqXG4gKiDop6PmnpBVUkzlj4LmlbDliJfooahcbiAqIFBhcnNlIFVSTCBxdWVyeS5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gKiBAcGFyYW0gdXJsXG4gKi9cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXRzLWNvbW1lbnRcbi8vIEB0cy1ub2NoZWNrXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VRdWVyeSh1cmwpIHtcblx0Y29uc3QgcmVnID0gLygoW14/Jj1dKykoPzo9KFtePyY9XSopKSopL2c7XG5cdGNvbnN0IHBhcmFtcyA9IHt9O1xuXHRsZXQgbWF0Y2g7XG5cdHdoaWxlICgobWF0Y2ggPSByZWcuZXhlYyh1cmwpKSkge1xuXHRcdHRyeSB7XG5cdFx0XHRwYXJhbXNbbWF0Y2hbMl1dID0gZGVjb2RlVVJJQ29tcG9uZW50KG1hdGNoWzNdKTtcblx0XHR9IGNhdGNoIHtcblx0XHRcdHBhcmFtc1ttYXRjaFsyXV0gPSBtYXRjaFszXTtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHBhcmFtcztcbn1cbiIsICIvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10cy1jb21tZW50XG4vLyBAdHMtbm9jaGVja1xuaW1wb3J0IENvbnN0YW50cyBmcm9tICcuLi91dGlscy9jb25zdGFudHMnO1xuaW1wb3J0IE5vdGlmaWNhdGlvbiBmcm9tICcuL25vdGlmaWNhdGlvbic7XG5pbXBvcnQgaTE4biBmcm9tICcuLi91dGlscy9pMThuJztcbmltcG9ydCBMb2cgZnJvbSAnLi4vdXRpbHMvbG9nJztcbmltcG9ydCBzbGVlcCBmcm9tICcuLi91dGlscy9zbGVlcCc7XG5pbXBvcnQge3BhcnNlUXVlcnl9IGZyb20gJy4uL3V0aWxzL2hlbHBlcnMnO1xuXG5jbGFzcyBVSSB7XG5cdHF1aWNrRWRpdFBhbmVsVmlzaWJsZSA9IGZhbHNlO1xuXHRzY3JvbGxUb3AgPSAwO1xuXG5cdC8qKlxuXHQgKiDliJvlu7rlsYXkuK3lr7nor53moYZcblx0ICpcblx0ICogQHBhcmFtIHtzdHJpbmd9IHRpdGxlIOeql+WPo+agh+mimFxuXHQgKiBAcGFyYW0ge3N0cmluZyB8IEpRdWVyeTxIVE1MRWxlbWVudD59IGNvbnRlbnQg5YaF5a65XG5cdCAqIEBwYXJhbSB7Kn0gd2lkdGgg5a695bqmXG5cdCAqIEBwYXJhbSB7Kn0gY2FsbGJhY2sg5Zue6LCD5Ye95pWwXG5cdCAqL1xuXHRjcmVhdGVEaWFsb2dCb3godGl0bGUgPSAnV2lraXBsdXMnLCBjb250ZW50ID0gJycsIHdpZHRoID0gNjAwLCBjYWxsYmFjayA9ICgpID0+IHt9KSB7XG5cdFx0aWYgKCQoJy5XaWtpcGx1cy1JbnRlckJveCcpLmxlbmd0aCA+IDApIHtcblx0XHRcdCQoJy5XaWtpcGx1cy1JbnRlckJveCcpLmVhY2goZnVuY3Rpb24gKCkge1xuXHRcdFx0XHQkKHRoaXMpLnJlbW92ZSgpO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHRcdGNvbnN0IGNsaWVudFdpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG5cdFx0Y29uc3QgY2xpZW50SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuXHRcdGNvbnN0IGRpYWxvZ1dpZHRoID0gTWF0aC5taW4oY2xpZW50V2lkdGgsIHdpZHRoKTtcblx0XHRjb25zdCBkaWFsb2dCb3ggPSAkKCc8ZGl2PicpXG5cdFx0XHQuYWRkQ2xhc3MoJ1dpa2lwbHVzLUludGVyQm94Jylcblx0XHRcdC5jc3Moe1xuXHRcdFx0XHQnbWFyZ2luLWxlZnQnOiBjbGllbnRXaWR0aCAvIDIgLSBkaWFsb2dXaWR0aCAvIDIsXG5cdFx0XHRcdHRvcDogJChkb2N1bWVudCkuc2Nyb2xsVG9wKCkgKyBjbGllbnRIZWlnaHQgKiAwLjIsXG5cdFx0XHRcdGRpc3BsYXk6ICdub25lJyxcblx0XHRcdH0pXG5cdFx0XHQuYXBwZW5kKCQoJzxkaXY+JykuYWRkQ2xhc3MoJ1dpa2lwbHVzLUludGVyQm94LUhlYWRlcicpLmh0bWwodGl0bGUpKVxuXHRcdFx0LmFwcGVuZCgkKCc8ZGl2PicpLmFkZENsYXNzKCdXaWtpcGx1cy1JbnRlckJveC1Db250ZW50JykuYXBwZW5kKGNvbnRlbnQpKVxuXHRcdFx0LmFwcGVuZCgkKCc8c3Bhbj4nKS50ZXh0KCfDlycpLmFkZENsYXNzKCdXaWtpcGx1cy1JbnRlckJveC1DbG9zZScpKTtcblx0XHQkKCdib2R5JykuYXBwZW5kKGRpYWxvZ0JveCk7XG5cdFx0JCgnLldpa2lwbHVzLUludGVyQm94Jykud2lkdGgoZGlhbG9nV2lkdGgpO1xuXHRcdCQoJy5XaWtpcGx1cy1JbnRlckJveC1DbG9zZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcblx0XHRcdCQodGhpcylcblx0XHRcdFx0LnBhcmVudCgpXG5cdFx0XHRcdC5mYWRlT3V0KCdmYXN0JywgZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbG9zZScsICh3aW5kb3cub25iZWZvcmV1bmxvYWQgPSB1bmRlZmluZWQpKTsgLy8g5Y+W5raI6aG16Z2i5YWz6Zet56Gu6K6kXG5cdFx0XHRcdFx0JCh0aGlzKS5yZW1vdmUoKTtcblx0XHRcdFx0fSk7XG5cdFx0fSk7XG5cdFx0Ly/mi5bmm7Ncblx0XHRjb25zdCBiaW5kRHJhZ2dpbmcgPSBmdW5jdGlvbiAoZWxlbWVudCkge1xuXHRcdFx0ZWxlbWVudC5tb3VzZWRvd24oKGUpID0+IHtcblx0XHRcdFx0Y29uc3QgYmFzZVggPSBlLmNsaWVudFg7XG5cdFx0XHRcdGNvbnN0IGJhc2VZID0gZS5jbGllbnRZO1xuXHRcdFx0XHRjb25zdCBiYXNlT2Zmc2V0WCA9IGVsZW1lbnQucGFyZW50KCkub2Zmc2V0KCkubGVmdDtcblx0XHRcdFx0Y29uc3QgYmFzZU9mZnNldFkgPSBlbGVtZW50LnBhcmVudCgpLm9mZnNldCgpLnRvcDtcblx0XHRcdFx0JChkb2N1bWVudCkub24oJ21vdXNlbW92ZScsIChlKSA9PiB7XG5cdFx0XHRcdFx0ZWxlbWVudC5wYXJlbnQoKS5jc3Moe1xuXHRcdFx0XHRcdFx0J21hcmdpbi1sZWZ0JzogYmFzZU9mZnNldFggKyBlLmNsaWVudFggLSBiYXNlWCxcblx0XHRcdFx0XHRcdHRvcDogYmFzZU9mZnNldFkgKyBlLmNsaWVudFkgLSBiYXNlWSxcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fSk7XG5cdFx0XHRcdCQoZG9jdW1lbnQpLm9uKCdtb3VzZXVwJywgKCkgPT4ge1xuXHRcdFx0XHRcdGVsZW1lbnQudW5iaW5kKCdtb3VzZWRvd24nKTtcblx0XHRcdFx0XHQkKGRvY3VtZW50KS5vZmYoJ21vdXNlbW92ZScpO1xuXHRcdFx0XHRcdCQoZG9jdW1lbnQpLm9mZignbW91c2V1cCcpO1xuXHRcdFx0XHRcdGJpbmREcmFnZ2luZyhlbGVtZW50KTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblx0XHR9O1xuXHRcdGJpbmREcmFnZ2luZygkKCcuV2lraXBsdXMtSW50ZXJCb3gtSGVhZGVyJykpO1xuXHRcdCQoJy5XaWtpcGx1cy1JbnRlckJveCcpLmZhZGVJbig1MDApO1xuXHRcdGNhbGxiYWNrKCk7XG5cdFx0cmV0dXJuIGRpYWxvZ0JveDtcblx0fVxuXG5cdC8qKlxuXHQgKiDlnKjmkJzntKLmoYblt6bkvqfjgIzmm7TlpJrjgI3oj5zljZXlhoXmt7vliqDmjInpkq5cblx0ICogQWRkIGEgYnV0dG9uIGluIFwiTW9yZVwiIG1lbnUgKGxlZnQgb2YgdGhlIHNlYXJjaCBiYXIpXG5cdCAqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IOaMiemSruWQjSBCdXR0b24gdGV4dFxuXHQgKiBAcGFyYW0ge3N0cmluZ30gaWQg5oyJ6ZKuaWQgQnV0dG9uIGlkXG5cdCAqIEByZXR1cm4ge0pRdWVyeTxIVE1MRWxlbWVudD59IGJ1dHRvblxuXHQgKi9cblx0YWRkRnVuY3Rpb25CdXR0b24odGV4dCwgaWQpIHtcblx0XHRsZXQgYnV0dG9uO1xuXHRcdHN3aXRjaCAoQ29uc3RhbnRzLnNraW4pIHtcblx0XHRcdGNhc2UgJ21pbmVydmEnOlxuXHRcdFx0XHRidXR0b24gPSAkKCc8bGk+Jylcblx0XHRcdFx0XHQuYXR0cignaWQnLCBpZClcblx0XHRcdFx0XHQuYWRkQ2xhc3MoJ3RvZ2dsZS1saXN0LWl0ZW0nKVxuXHRcdFx0XHRcdC5hcHBlbmQoXG5cdFx0XHRcdFx0XHQkKCc8YT4nKVxuXHRcdFx0XHRcdFx0XHQuYWRkQ2xhc3MoJ213LXVpLWljb24gbXctdWktaWNvbi1iZWZvcmUgdG9nZ2xlLWxpc3QtaXRlbV9fYW5jaG9yJylcblx0XHRcdFx0XHRcdFx0LmFwcGVuZChcblx0XHRcdFx0XHRcdFx0XHQkKCc8c3Bhbj4nKVxuXHRcdFx0XHRcdFx0XHRcdFx0LmF0dHIoJ2hyZWYnLCAnamF2YXNjcmlwdDp2b2lkKDApOycpXG5cdFx0XHRcdFx0XHRcdFx0XHQuYWRkQ2xhc3MoJ3RvZ2dsZS1saXN0LWl0ZW1fX2xhYmVsJylcblx0XHRcdFx0XHRcdFx0XHRcdC50ZXh0KHRleHQpXG5cdFx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSAnbW9lc2tpbic6XG5cdFx0XHRcdGJ1dHRvbiA9ICQoJzxsaT4nKVxuXHRcdFx0XHRcdC5hZGRDbGFzcygnV2lraXBsdXMtTW9yZS1GdW5jdGlvbi1CdXR0b24nKVxuXHRcdFx0XHRcdC5hdHRyKCdpZCcsIGlkKVxuXHRcdFx0XHRcdC5hcHBlbmQoJCgnPGE+JykuYXR0cignaHJlZicsICdqYXZhc2NyaXB0OnZvaWQoMCk7JykudGV4dCh0ZXh0KSk7XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRidXR0b24gPSAkKCc8bGk+Jylcblx0XHRcdFx0XHQuYWRkQ2xhc3MoJ213LWxpc3QtaXRlbScpXG5cdFx0XHRcdFx0LmFkZENsYXNzKCd2ZWN0b3ItdGFiLW5vaWNvbicpXG5cdFx0XHRcdFx0LmF0dHIoJ2lkJywgaWQpXG5cdFx0XHRcdFx0LmFwcGVuZCgkKCc8YT4nKS5hdHRyKCdocmVmJywgJ2phdmFzY3JpcHQ6dm9pZCgwKTsnKS50ZXh0KHRleHQpKTtcblx0XHR9XG5cdFx0aWYgKENvbnN0YW50cy5za2luID09PSAnbWluZXJ2YScgJiYgJCgnI3AtdGInKS5sZW5ndGggPiAwKSB7XG5cdFx0XHQkKCcjcC10YicpLmFwcGVuZChidXR0b24pO1xuXHRcdFx0cmV0dXJuICQoYCMke2lkfWApO1xuXHRcdH0gZWxzZSBpZiAoQ29uc3RhbnRzLnNraW4gPT09ICdtb2Vza2luJykge1xuXHRcdFx0JCgnLm1vcmUtYWN0aW9ucy1saXN0JykuZmlyc3QoKS5hcHBlbmQoYnV0dG9uKTtcblx0XHRcdHJldHVybiAkKGAjJHtpZH1gKTtcblx0XHR9IGVsc2UgaWYgKCQoJyNwLWNhY3Rpb25zJykubGVuZ3RoID4gMCkge1xuXHRcdFx0JCgnI3AtY2FjdGlvbnMgdWwnKS5hcHBlbmQoYnV0dG9uKTtcblx0XHRcdHJldHVybiAkKGAjJHtpZH1gKTtcblx0XHR9XG5cdFx0TG9nLmluZm8oaTE4bi50cmFuc2xhdGUoJ2NhbnRfYWRkX2Z1bmNidG4nKSk7XG5cdH1cblxuXHQvKipcblx0ICog5o+S5YWl5b+r6YCf6YeN5a6a5ZCR5oyJ6ZKuXG5cdCAqXG5cdCAqIEBwYXJhbSB7Kn0gb25DbGlja1xuXHQgKi9cblx0aW5zZXJ0U2ltcGxlUmVkaXJlY3RCdXR0b24ob25DbGljayA9ICgpID0+IHt9KSB7XG5cdFx0Y29uc3QgYnV0dG9uID0gdGhpcy5hZGRGdW5jdGlvbkJ1dHRvbihpMThuLnRyYW5zbGF0ZSgncmVkaXJlY3RfZnJvbScpLCAnV2lraXBsdXMtU1ItSW50cm8nKTtcblx0XHRpZiAoYnV0dG9uKSB7XG5cdFx0XHRidXR0b24ub24oJ2NsaWNrJywgb25DbGljayk7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIOaPkuWFpeiuvue9rumdouadv+aMiemSrlxuXHQgKlxuXHQgKiBAcGFyYW0geyp9IG9uQ2xpY2tcblx0ICovXG5cdGluc2VydFNldHRpbmdzUGFuZWxCdXR0b24ob25DbGljayA9ICgpID0+IHt9KSB7XG5cdFx0Y29uc3QgYnV0dG9uID0gdGhpcy5hZGRGdW5jdGlvbkJ1dHRvbihpMThuLnRyYW5zbGF0ZSgnd2lraXBsdXNfc2V0dGluZ3MnKSwgJ1dpa2lwbHVzLVNldHRpbmdzLUludHJvJyk7XG5cdFx0aWYgKGJ1dHRvbikge1xuXHRcdFx0YnV0dG9uLm9uKCdjbGljaycsIG9uQ2xpY2spO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiDmj5LlhaXpobbpg6jlv6vpgJ/nvJbovpHmjInpkq5cblx0ICogSW5zZXJ0IFF1aWNrRWRpdCBidXR0b24gYmVzaWRlcyBwYWdlIGVkaXQgYnV0dG9uLlxuXHQgKlxuXHQgKiBAcGFyYW0gb25DbGlja1xuXHQgKi9cblx0aW5zZXJ0VG9wUXVpY2tFZGl0RW50cnkob25DbGljaykge1xuXHRcdGNvbnN0IHRvcEJ0biA9ICQoJzxsaT4nKS5hdHRyKCdpZCcsICdXaWtpcGx1cy1FZGl0LVRvcEJ0bicpLmF0dHIoJ2NsYXNzJywgJ213LWxpc3QtaXRlbScpO1xuXHRcdGNvbnN0IHRvcEJ0bkxpbmsgPSAkKCc8YT4nKVxuXHRcdFx0LmF0dHIoJ2hyZWYnLCAnamF2YXNjcmlwdDp2b2lkKDApJylcblx0XHRcdC50ZXh0KGAke2kxOG4udHJhbnNsYXRlKCdxdWlja2VkaXRfdG9wYnRuJyl9YCk7XG5cdFx0dG9wQnRuLmFwcGVuZCh0b3BCdG5MaW5rKTtcblx0XHRzd2l0Y2ggKENvbnN0YW50cy5za2luKSB7XG5cdFx0XHRjYXNlICdtaW5lcnZhJzpcblx0XHRcdFx0dG9wQnRuLmNzcyh7J2FsaWduLWl0ZW1zJzogJ2NlbnRlcicsIGRpc3BsYXk6ICdmbGV4J30pO1xuXHRcdFx0XHR0b3BCdG4uZmluZCgnc3BhbicpLmFkZENsYXNzKCdwYWdlLWFjdGlvbnMtbWVudV9fbGlzdC1pdGVtJyk7XG5cdFx0XHRcdHRvcEJ0blxuXHRcdFx0XHRcdC5maW5kKCdhJylcblx0XHRcdFx0XHQuYWRkQ2xhc3MoXG5cdFx0XHRcdFx0XHQnbXctdWktaWNvbiBtdy11aS1pY29uLWVsZW1lbnQgbXctdWktaWNvbi13aWtpbWVkaWEtZWRpdC1iYXNlMjAgbXctdWktaWNvbi13aXRoLWxhYmVsLWRlc2t0b3AnXG5cdFx0XHRcdFx0KVxuXHRcdFx0XHRcdC5jc3MoJ3ZlcnRpY2FsLWFsaWduJywgJ21pZGRsZScpO1xuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSAndmVjdG9yLTIwMjInOlxuXHRcdFx0XHR0b3BCdG4uYWRkQ2xhc3MoJ3ZlY3Rvci10YWItbm9pY29uJyk7XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlICd2ZWN0b3InOlxuXHRcdFx0XHR0b3BCdG4uYXBwZW5kKCQoJzxzcGFuPicpLmFwcGVuZCh0b3BCdG5MaW5rKSk7XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRkZWZhdWx0OlxuXHRcdH1cblx0XHQkKHRvcEJ0bikub24oJ2NsaWNrJywgKCkgPT4ge1xuXHRcdFx0b25DbGljayh7XG5cdFx0XHRcdHNlY3Rpb25OdW1iZXI6IC0xLFxuXHRcdFx0XHR0YXJnZXRQYWdlTmFtZTogQ29uc3RhbnRzLmN1cnJlbnRQYWdlTmFtZSxcblx0XHRcdH0pO1xuXHRcdH0pO1xuXHRcdGlmICgkKCcjY2EtZWRpdCcpLmxlbmd0aCA+IDAgJiYgJCgnI1dpa2lwbHVzLUVkaXQtVG9wQnRuJykubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRDb25zdGFudHMuc2tpbiA9PT0gJ21pbmVydmEnID8gJCgnI2NhLWVkaXQnKS5wYXJlbnQoKS5hZnRlcih0b3BCdG4pIDogJCgnI2NhLWVkaXQnKS5hZnRlcih0b3BCdG4pO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiDmj5LlhaXmrrXokL3lv6vpgJ/nvJbovpHmjInpkq5cblx0ICogSW5zZXJ0IFF1aWNrRWRpdCBidXR0b25zIGZvciBlYWNoIHNlY3Rpb24uXG5cdCAqXG5cdCAqIEBwYXJhbSBvbkNsaWNrXG5cdCAqL1xuXHRpbnNlcnRTZWN0aW9uUXVpY2tFZGl0RW50cmllcyhvbkNsaWNrID0gKCkgPT4ge30pIHtcblx0XHRjb25zdCBzZWN0aW9uQnRuID1cblx0XHRcdENvbnN0YW50cy5za2luID09PSAnbWluZXJ2YSdcblx0XHRcdFx0PyAkKCc8c3Bhbj4nKS5hcHBlbmQoXG5cdFx0XHRcdFx0XHQkKCc8YT4nKVxuXHRcdFx0XHRcdFx0XHQuYWRkQ2xhc3MoXG5cdFx0XHRcdFx0XHRcdFx0J1dpa2lwbHVzLUVkaXQtU2VjdGlvbkJ0biBtdy11aS1pY29uIG13LXVpLWljb24tZWxlbWVudCBtdy11aS1pY29uLXdpa2ltZWRpYS1lZGl0LWJhc2UyMCBlZGl0LXBhZ2UgbXctdWktaWNvbi1mbHVzaC1yaWdodCdcblx0XHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdFx0XHQuY3NzKCdtYXJnaW4tbGVmdCcsICcwLjc1ZW0nKVxuXHRcdFx0XHRcdFx0XHQuYXR0cignaHJlZicsICdqYXZhc2NyaXB0OnZvaWQoMCknKVxuXHRcdFx0XHRcdFx0XHQuYXR0cigndGl0bGUnLCBpMThuLnRyYW5zbGF0ZSgncXVpY2tlZGl0X3NlY3Rpb25idG4nKSlcblx0XHRcdFx0XHQpXG5cdFx0XHRcdDogJCgnPHNwYW4+Jylcblx0XHRcdFx0XHRcdC5hcHBlbmQoJCgnPHNwYW4+JykuYWRkQ2xhc3MoJ213LWVkaXRzZWN0aW9uLWRpdmlkZXInKS50ZXh0KCcgfCAnKSlcblx0XHRcdFx0XHRcdC5hcHBlbmQoXG5cdFx0XHRcdFx0XHRcdCQoJzxhPicpXG5cdFx0XHRcdFx0XHRcdFx0LmFkZENsYXNzKCdXaWtpcGx1cy1FZGl0LVNlY3Rpb25CdG4nKVxuXHRcdFx0XHRcdFx0XHRcdC5hdHRyKCdocmVmJywgJ2phdmFzY3JpcHQ6dm9pZCgwKScpXG5cdFx0XHRcdFx0XHRcdFx0LnRleHQoaTE4bi50cmFuc2xhdGUoJ3F1aWNrZWRpdF9zZWN0aW9uYnRuJykpXG5cdFx0XHRcdFx0XHQpO1xuXHRcdCQoJy5tdy1lZGl0c2VjdGlvbicpLmVhY2goZnVuY3Rpb24gKGkpIHtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGNvbnN0IGVkaXRVUkwgPSAkKHRoaXMpLmZpbmQoXCJhW2hyZWYqPSdhY3Rpb249ZWRpdCddXCIpLmZpcnN0KCkuYXR0cignaHJlZicpO1xuXHRcdFx0XHRjb25zdCBzZWN0aW9uTnVtYmVyID0gZWRpdFVSTFxuXHRcdFx0XHRcdC5tYXRjaCgvJlt2ZV0qc2VjdGlvblxcPShbXiZdKykvKVsxXSAvLyBgdmVgIGZvciB2aXN1YWwgZWRpdG9yXG5cdFx0XHRcdFx0LnJlcGxhY2UoL1QtL2dpLCAnJyk7IC8vIGVtYmVkZGVkIHBhZ2VzIHVzZSBULXNlcmllcyBzZWN0aW9uIG51bWJlclxuXHRcdFx0XHRjb25zdCBzZWN0aW9uVGFyZ2V0TmFtZSA9IGRlY29kZVVSSUNvbXBvbmVudChlZGl0VVJMLm1hdGNoKC90aXRsZT0oLis/KSYvKVsxXSk7XG5cdFx0XHRcdGNvbnN0IGNsb25lTm9kZSA9ICQodGhpcykucHJldigpLmNsb25lKCk7XG5cdFx0XHRcdGNsb25lTm9kZS5maW5kKCcubXctaGVhZGxpbmUtbnVtYmVyJykucmVtb3ZlKCk7XG5cdFx0XHRcdGNvbnN0IHNlY3Rpb25OYW1lID0gY2xvbmVOb2RlLnRleHQoKS50cmltKCk7XG5cdFx0XHRcdGNvbnN0IF9zZWN0aW9uQnRuID0gc2VjdGlvbkJ0bi5jbG9uZSgpO1xuXHRcdFx0XHRfc2VjdGlvbkJ0bi5maW5kKCcuV2lraXBsdXMtRWRpdC1TZWN0aW9uQnRuJykub24oJ2NsaWNrJywgKCkgPT4ge1xuXHRcdFx0XHRcdG9uQ2xpY2soe1xuXHRcdFx0XHRcdFx0c2VjdGlvbk51bWJlcixcblx0XHRcdFx0XHRcdHNlY3Rpb25OYW1lLFxuXHRcdFx0XHRcdFx0dGFyZ2V0UGFnZU5hbWU6IHNlY3Rpb25UYXJnZXROYW1lLFxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9KTtcblx0XHRcdFx0Q29uc3RhbnRzLnNraW4gPT09ICdtaW5lcnZhJ1xuXHRcdFx0XHRcdD8gJCh0aGlzKS5hcHBlbmQoX3NlY3Rpb25CdG4pXG5cdFx0XHRcdFx0OiAkKHRoaXMpLmZpbmQoJy5tdy1lZGl0c2VjdGlvbi1icmFja2V0JykubGFzdCgpLmJlZm9yZShfc2VjdGlvbkJ0bik7XG5cdFx0XHR9IGNhdGNoIHtcblx0XHRcdFx0TG9nLmVycm9yKCdmYWlsX3RvX2luaXRfcXVpY2tlZGl0Jyk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cblxuXHQvKipcblx0ICog5o+S5YWl5Lu75oSP6ZO+5o6l57yW6L6R5YWl5Y+jXG5cdCAqXG5cdCAqIEBwYXJhbSB7Kn0gb25DbGlja1xuXHQgKi9cblx0aW5zZXJ0TGlua0VkaXRFbnRyaWVzKG9uQ2xpY2sgPSAoKSA9PiB7fSkge1xuXHRcdCQoJyNtdy1jb250ZW50LXRleHQgYS5leHRlcm5hbCcpLmVhY2goZnVuY3Rpb24gKGkpIHtcblx0XHRcdGNvbnN0IHVybCA9ICQodGhpcykuYXR0cignaHJlZicpO1xuXHRcdFx0Y29uc3QgcGFyYW1zID0gcGFyc2VRdWVyeSh1cmwpO1xuXHRcdFx0aWYgKHBhcmFtcy5hY3Rpb24gPT09ICdlZGl0JyAmJiBwYXJhbXMudGl0bGUgIT09IHVuZGVmaW5lZCAmJiBwYXJhbXMuc2VjdGlvbiAhPT0gJ25ldycpIHtcblx0XHRcdFx0JCh0aGlzKS5hZnRlcihcblx0XHRcdFx0XHQkKCc8YT4nKVxuXHRcdFx0XHRcdFx0LmF0dHIoe1xuXHRcdFx0XHRcdFx0XHRocmVmOiAnamF2YXNjcmlwdDp2b2lkKDApJyxcblx0XHRcdFx0XHRcdFx0Y2xhc3M6ICdXaWtpcGx1cy1FZGl0LUV2ZXJ5V2hlcmVCdG4nLFxuXHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdC50ZXh0KGAoJHtpMThuLnRyYW5zbGF0ZSgncXVpY2tlZGl0X3NlY3Rpb25idG4nKX0pYClcblx0XHRcdFx0XHRcdC5vbignY2xpY2snLCAoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdG9uQ2xpY2soe1xuXHRcdFx0XHRcdFx0XHRcdHRhcmdldFBhZ2VOYW1lOiBwYXJhbXMudGl0bGUsXG5cdFx0XHRcdFx0XHRcdFx0c2VjdGlvbk51bWJlcjogcGFyYW1zLnNlY3Rpb24gPz8gLTEsXG5cdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHR9KTtcblx0fVxuXG5cdHNob3dRdWlja0VkaXRQYW5lbCh7XG5cdFx0dGl0bGUgPSAnJyxcblx0XHRjb250ZW50ID0gJycsXG5cdFx0c3VtbWFyeSA9ICcnLFxuXHRcdG9uQmFjayA9ICgpID0+IHt9LFxuXHRcdG9uUGFyc2UgPSAoKSA9PiB7fSxcblx0XHRvbkVkaXQgPSAoKSA9PiB7fSxcblx0XHRlc2NFeGl0ID0gZmFsc2UsXG5cdH0pIHtcblx0XHRjb25zdCBzZWxmID0gdGhpcztcblx0XHR0aGlzLnNjcm9sbFRvcCA9ICQoZG9jdW1lbnQpLnNjcm9sbFRvcCgpO1xuXHRcdGlmICh0aGlzLnF1aWNrRWRpdFBhbmVsVmlzaWJsZSkge1xuXHRcdFx0dGhpcy5oaWRlUXVpY2tFZGl0UGFuZWwoKTtcblx0XHR9XG5cdFx0dGhpcy5xdWlja0VkaXRQYW5lbFZpc2libGUgPSB0cnVlO1xuXHRcdC8vIOmYsuatouaJi+a7keWFs+mXremhtemdolxuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFxuXHRcdFx0J2Nsb3NlJyxcblx0XHRcdCh3aW5kb3cub25iZWZvcmV1bmxvYWQgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdHJldHVybiBgJHtpMThuLnRyYW5zbGF0ZSgnb25jbG9zZV9jb25maXJtJyl9YDtcblx0XHRcdH0pXG5cdFx0KTtcblx0XHRjb25zdCBpc05ld1BhZ2UgPSAkKCcubm9hcnRpY2xldGV4dCcpLmxlbmd0aCA+IDA7XG5cdFx0Ly8gRE9NIOWumuS5ieW8gOWni1xuXHRcdGNvbnN0IGJhY2tCdG4gPSAkKCc8c3Bhbj4nKVxuXHRcdFx0LmF0dHIoJ2lkJywgJ1dpa2lwbHVzLVF1aWNrZWRpdC1CYWNrJylcblx0XHRcdC5hZGRDbGFzcygnV2lraXBsdXMtQnRuJylcblx0XHRcdC50ZXh0KGAke2kxOG4udHJhbnNsYXRlKCdiYWNrJyl9YCk7IC8vIOi/lOWbnuaMiemSrlxuXHRcdGNvbnN0IGp1bXBCdG4gPSAkKCc8c3Bhbj4nKVxuXHRcdFx0LmF0dHIoJ2lkJywgJ1dpa2lwbHVzLVF1aWNrZWRpdC1KdW1wJylcblx0XHRcdC5hZGRDbGFzcygnV2lraXBsdXMtQnRuJylcblx0XHRcdC5hcHBlbmQoXG5cdFx0XHRcdCQoJzxhPicpXG5cdFx0XHRcdFx0LmF0dHIoJ2hyZWYnLCAnI1dpa2lwbHVzLVF1aWNrZWRpdCcpXG5cdFx0XHRcdFx0LnRleHQoYCR7aTE4bi50cmFuc2xhdGUoJ2dvdG9fZWRpdGJveCcpfWApXG5cdFx0XHQpOyAvLyDliLDnvJbovpHmoYZcblx0XHRjb25zdCBpbnB1dEJveCA9ICQoJzx0ZXh0YXJlYT4nKS5hdHRyKCdpZCcsICdXaWtpcGx1cy1RdWlja2VkaXQnKTsgLy8g5Li757yW6L6R5qGGXG5cdFx0Y29uc3QgcHJldmlld0JveCA9ICQoJzxkaXY+JykuYXR0cignaWQnLCAnV2lraXBsdXMtUXVpY2tlZGl0LVByZXZpZXctT3V0cHV0Jyk7IC8vIOmihOiniOi+k+WHulxuXHRcdGNvbnN0IHN1bW1hcnlCb3ggPSAkKCc8aW5wdXQ+Jylcblx0XHRcdC5hdHRyKCdpZCcsICdXaWtpcGx1cy1RdWlja2VkaXQtU3VtbWFyeS1JbnB1dCcpXG5cdFx0XHQuYXR0cigncGxhY2Vob2xkZXInLCBgJHtpMThuLnRyYW5zbGF0ZSgnc3VtbWFyeV9wbGFjZWhvbGQnKX1gKTsgLy8g57yW6L6R5pGY6KaB6L6T5YWlXG5cdFx0Y29uc3QgZWRpdFN1Ym1pdEJ0biA9ICQoJzxidXR0b24+Jylcblx0XHRcdC5hdHRyKCdpZCcsICdXaWtpcGx1cy1RdWlja2VkaXQtU3VibWl0Jylcblx0XHRcdC50ZXh0KGAke2kxOG4udHJhbnNsYXRlKGlzTmV3UGFnZSA/ICdwdWJsaXNoX3BhZ2UnIDogJ3B1Ymxpc2hfY2hhbmdlJyl9KEN0cmwrUylgKTsgLy8g5o+Q5Lqk5oyJ6ZKuXG5cdFx0Y29uc3QgcHJldmlld1N1Ym1pdEJ0biA9ICQoJzxidXR0b24+Jylcblx0XHRcdC5hdHRyKCdpZCcsICdXaWtpcGx1cy1RdWlja2VkaXQtUHJldmlldy1TdWJtaXQnKVxuXHRcdFx0LnRleHQoYCR7aTE4bi50cmFuc2xhdGUoJ3ByZXZpZXcnKX1gKTsgLy8g6aKE6KeI5oyJ6ZKuXG5cdFx0Y29uc3QgaXNNaW5vckVkaXQgPSAkKCc8ZGl2PicpXG5cdFx0XHQuYXBwZW5kKCQoJzxpbnB1dD4nKS5hdHRyKHt0eXBlOiAnY2hlY2tib3gnLCBpZDogJ1dpa2lwbHVzLVF1aWNrZWRpdC1NaW5vckVkaXQnfSkpXG5cdFx0XHQuYXBwZW5kKFxuXHRcdFx0XHQkKCc8bGFiZWw+Jylcblx0XHRcdFx0XHQuYXR0cignZm9yJywgJ1dpa2lwbHVzLVF1aWNrZWRpdC1NaW5vckVkaXQnKVxuXHRcdFx0XHRcdC50ZXh0KGAke2kxOG4udHJhbnNsYXRlKCdtYXJrX21pbm9yZWRpdCcpfShDdHJsK1NoaWZ0K1MpYClcblx0XHRcdClcblx0XHRcdC5jc3Moe21hcmdpbjogJzVweCA1cHggNXB4IC0zcHgnLCBkaXNwbGF5OiAnaW5saW5lJ30pO1xuXHRcdC8vIERPTeWumuS5iee7k+adn1xuXHRcdGNvbnN0IGVkaXRCb2R5ID0gJCgnPGRpdj4nKS5hcHBlbmQoXG5cdFx0XHRiYWNrQnRuLFxuXHRcdFx0anVtcEJ0bixcblx0XHRcdHByZXZpZXdCb3gsXG5cdFx0XHRpbnB1dEJveCxcblx0XHRcdHN1bW1hcnlCb3gsXG5cdFx0XHQkKCc8YnI+JyksXG5cdFx0XHRpc01pbm9yRWRpdCxcblx0XHRcdGVkaXRTdWJtaXRCdG4sXG5cdFx0XHRwcmV2aWV3U3VibWl0QnRuXG5cdFx0KTtcblx0XHR0aGlzLmNyZWF0ZURpYWxvZ0JveCh0aXRsZSwgZWRpdEJvZHksIDEwMDAsICgpID0+IHtcblx0XHRcdCQoJyNXaWtpcGx1cy1RdWlja2VkaXQnKS52YWwoY29udGVudCk7XG5cdFx0XHQkKCcjV2lraXBsdXMtUXVpY2tlZGl0LVN1bW1hcnktSW5wdXQnKS52YWwoc3VtbWFyeSk7XG5cdFx0fSk7XG5cdFx0Ly8gQmFja1xuXHRcdCQoJyNXaWtpcGx1cy1RdWlja2VkaXQtQmFjaycpLm9uKCdjbGljaycsIG9uQmFjayk7XG5cdFx0Ly8gUHJldmlld1xuXHRcdCQoJyNXaWtpcGx1cy1RdWlja2VkaXQtUHJldmlldy1TdWJtaXQnKS5vbignY2xpY2snLCBhc3luYyBmdW5jdGlvbiAoKSB7XG5cdFx0XHRjb25zdCBwcmVsb2FkQmFubmVyID0gJCgnPGRpdj4nKVxuXHRcdFx0XHQuYWRkQ2xhc3MoJ1dpa2lwbHVzLUJhbm5lcicpXG5cdFx0XHRcdC50ZXh0KGAke2kxOG4udHJhbnNsYXRlKCdsb2FkaW5nX3ByZXZpZXcnKX1gKTtcblx0XHRcdGNvbnN0IHdpa2lUZXh0ID0gJCgnI1dpa2lwbHVzLVF1aWNrZWRpdCcpLnZhbCgpO1xuXHRcdFx0JCh0aGlzKS5hdHRyKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpO1xuXHRcdFx0JCgnI1dpa2lwbHVzLVF1aWNrZWRpdC1QcmV2aWV3LU91dHB1dCcpLmZhZGVPdXQoMTAwLCAoKSA9PiB7XG5cdFx0XHRcdCQoJyNXaWtpcGx1cy1RdWlja2VkaXQtUHJldmlldy1PdXRwdXQnKS5odG1sKCcnKS5hcHBlbmQocHJlbG9hZEJhbm5lcik7XG5cdFx0XHRcdCQoJyNXaWtpcGx1cy1RdWlja2VkaXQtUHJldmlldy1PdXRwdXQnKS5mYWRlSW4oMTAwKTtcblx0XHRcdH0pO1xuXHRcdFx0JCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe3Njcm9sbFRvcDogc2VsZi5zY3JvbGxUb3B9LCAyMDApOyAvL+i/lOWbnumhtumDqFxuXHRcdFx0Y29uc3QgcmVzdWx0ID0gYXdhaXQgb25QYXJzZSh3aWtpVGV4dCk7XG5cdFx0XHQkKCcjV2lraXBsdXMtUXVpY2tlZGl0LVByZXZpZXctT3V0cHV0JykuZmFkZU91dCgnMTAwJywgKCkgPT4ge1xuXHRcdFx0XHQkKCcjV2lraXBsdXMtUXVpY2tlZGl0LVByZXZpZXctT3V0cHV0JykuaHRtbChgPGhyPjxkaXYgY2xhc3M9XCJtdy1ib2R5LWNvbnRlbnRcIj4ke3Jlc3VsdH08L2Rpdj48aHI+YCk7XG5cdFx0XHRcdCQoJyNXaWtpcGx1cy1RdWlja2VkaXQtUHJldmlldy1PdXRwdXQnKS5mYWRlSW4oJzEwMCcpO1xuXHRcdFx0XHQkKCcjV2lraXBsdXMtUXVpY2tlZGl0LVByZXZpZXctU3VibWl0JykucHJvcCgnZGlzYWJsZWQnLCBmYWxzZSk7XG5cdFx0XHR9KTtcblx0XHR9KTtcblx0XHQvLyBFZGl0XG5cdFx0JCgnI1dpa2lwbHVzLVF1aWNrZWRpdC1TdWJtaXQnKS5vbignY2xpY2snLCBhc3luYyAoKSA9PiB7XG5cdFx0XHRjb25zdCB0aW1lciA9IERhdGUubm93KCk7XG5cdFx0XHRjb25zdCBlZGl0QmFubmVyID0gJCgnPGRpdj4nKVxuXHRcdFx0XHQuYWRkQ2xhc3MoJ1dpa2lwbHVzLUJhbm5lcicpXG5cdFx0XHRcdC50ZXh0KGAke2kxOG4udHJhbnNsYXRlKCdzdWJtaXR0aW5nX2VkaXQnKX1gKTtcblx0XHRcdGNvbnN0IHBheWxvYWQgPSB7XG5cdFx0XHRcdHN1bW1hcnk6ICQoJyNXaWtpcGx1cy1RdWlja2VkaXQtU3VtbWFyeS1JbnB1dCcpLnZhbCgpLFxuXHRcdFx0XHRjb250ZW50OiAkKCcjV2lraXBsdXMtUXVpY2tlZGl0JykudmFsKCksXG5cdFx0XHRcdGlzTWlub3JFZGl0OiAkKCcjV2lraXBsdXMtUXVpY2tlZGl0LU1pbm9yRWRpdCcpLmlzKCc6Y2hlY2tlZCcpLFxuXHRcdFx0fTtcblx0XHRcdC8vIOWHhuWkh+e8lui+kSDnpoHnlKjmjInpkq4g5omn6KGM5Yqo55S7XG5cdFx0XHQkKCcjV2lraXBsdXMtUXVpY2tlZGl0LVN1Ym1pdCwjV2lraXBsdXMtUXVpY2tlZGl0LCNXaWtpcGx1cy1RdWlja2VkaXQtUHJldmlldy1TdWJtaXQnKS5hdHRyKFxuXHRcdFx0XHQnZGlzYWJsZWQnLFxuXHRcdFx0XHQnZGlzYWJsZWQnXG5cdFx0XHQpO1xuXHRcdFx0JCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe3Njcm9sbFRvcDogc2VsZi5zY3JvbGxUb3B9LCAyMDApO1xuXHRcdFx0JCgnI1dpa2lwbHVzLVF1aWNrZWRpdC1QcmV2aWV3LU91dHB1dCcpLmZhZGVPdXQoMTAwLCAoKSA9PiB7XG5cdFx0XHRcdCQoJyNXaWtpcGx1cy1RdWlja2VkaXQtUHJldmlldy1PdXRwdXQnKS5odG1sKCcnKS5hcHBlbmQoZWRpdEJhbm5lcik7XG5cdFx0XHRcdCQoJyNXaWtpcGx1cy1RdWlja2VkaXQtUHJldmlldy1PdXRwdXQnKS5mYWRlSW4oMTAwKTtcblx0XHRcdH0pO1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0YXdhaXQgb25FZGl0KHBheWxvYWQpO1xuXHRcdFx0XHRjb25zdCB1c2VUaW1lID0gRGF0ZS5ub3coKSAtIHRpbWVyO1xuXHRcdFx0XHQkKCcjV2lraXBsdXMtUXVpY2tlZGl0LVByZXZpZXctT3V0cHV0Jylcblx0XHRcdFx0XHQuZmluZCgnLldpa2lwbHVzLUJhbm5lcicpXG5cdFx0XHRcdFx0LmNzcygnYmFja2dyb3VuZCcsICdyZ2JhKDYsIDIzOSwgOTIsIDAuNDQpJyk7XG5cdFx0XHRcdCQoJyNXaWtpcGx1cy1RdWlja2VkaXQtUHJldmlldy1PdXRwdXQnKVxuXHRcdFx0XHRcdC5maW5kKCcuV2lraXBsdXMtQmFubmVyJylcblx0XHRcdFx0XHQudGV4dChgJHtpMThuLnRyYW5zbGF0ZSgnZWRpdF9zdWNjZXNzJywgW3VzZVRpbWUudG9TdHJpbmcoKV0pfWApO1xuXHRcdFx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xvc2UnLCAod2luZG93Lm9uYmVmb3JldW5sb2FkID0gdW5kZWZpbmVkKSk7IC8v5Y+W5raI6aG16Z2i5YWz6Zet56Gu6K6kXG5cdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHRcdGxvY2F0aW9uLnJlbG9hZCgpO1xuXHRcdFx0XHR9LCA1MDApO1xuXHRcdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdFx0Y29uc29sZS5sb2coZXJyb3IpO1xuXHRcdFx0XHQkKCcuV2lraXBsdXMtQmFubmVyJykuY3NzKCdiYWNrZ3JvdW5kJywgJ3JnYmEoMjE4LCAxNDIsIDE2NywgMC42NSknKTtcblx0XHRcdFx0JCgnLldpa2lwbHVzLUJhbm5lcicpLmh0bWwoZXJyb3IubWVzc2FnZSk7XG5cdFx0XHR9IGZpbmFsbHkge1xuXHRcdFx0XHQkKCcjV2lraXBsdXMtUXVpY2tlZGl0LVN1Ym1pdCwjV2lraXBsdXMtUXVpY2tlZGl0LCNXaWtpcGx1cy1RdWlja2VkaXQtUHJldmlldy1TdWJtaXQnKS5wcm9wKFxuXHRcdFx0XHRcdCdkaXNhYmxlZCcsXG5cdFx0XHRcdFx0ZmFsc2Vcblx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHQvL0N0cmwrU+aPkOS6pCBDdHJsK1NoaWZ0K1PlsI/nvJbovpFcblx0XHQkKCcjV2lraXBsdXMtUXVpY2tlZGl0LCNXaWtpcGx1cy1RdWlja2VkaXQtU3VtbWFyeS1JbnB1dCwjV2lraXBsdXMtUXVpY2tlZGl0LU1pbm9yRWRpdCcpLm9uKCdrZXlkb3duJywgKGUpID0+IHtcblx0XHRcdGlmIChlLmN0cmxLZXkgJiYgZS53aGljaCA9PT0gODMpIHtcblx0XHRcdFx0aWYgKGUuc2hpZnRLZXkpIHtcblx0XHRcdFx0XHQkKCcjV2lraXBsdXMtUXVpY2tlZGl0LU1pbm9yRWRpdCcpLnRyaWdnZXIoJ2NsaWNrJyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0JCgnI1dpa2lwbHVzLVF1aWNrZWRpdC1TdWJtaXQnKS50cmlnZ2VyKCdjbGljaycpO1xuXHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0Ly9Fc2PpgIDlh7pcblx0XHRpZiAoZXNjRXhpdCkge1xuXHRcdFx0JChkb2N1bWVudCkub24oJ2tleWRvd24nLCAoZSkgPT4ge1xuXHRcdFx0XHRpZiAoZS53aGljaCA9PT0gMjcpIHtcblx0XHRcdFx0XHQkKCcjV2lraXBsdXMtUXVpY2tlZGl0LUJhY2snKS50cmlnZ2VyKCdjbGljaycpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9XG5cdH1cblxuXHRoaWRlUXVpY2tFZGl0UGFuZWwoKSB7XG5cdFx0dGhpcy5xdWlja0VkaXRQYW5lbFZpc2libGUgPSBmYWxzZTtcblx0XHQkKCcuV2lraXBsdXMtSW50ZXJCb3gnKS5mYWRlT3V0KCdmYXN0JywgZnVuY3Rpb24gKCkge1xuXHRcdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2Nsb3NlJywgKHdpbmRvdy5vbmJlZm9yZXVubG9hZCA9IHVuZGVmaW5lZCkpOyAvL+WPlua2iOmhtemdouWFs+mXreehruiupFxuXHRcdFx0JCh0aGlzKS5yZW1vdmUoKTtcblx0XHR9KTtcblx0fVxuXG5cdC8qKlxuXHQgKiDmmL7npLrlv6vpgJ/ph43lrprlkJHlvLnnqpdcblx0ICpcblx0ICogQHBhcmFtIHJvb3QwXG5cdCAqIEBwYXJhbSByb290MC5vbkVkaXRcblx0ICogQHBhcmFtIHJvb3QwLm9uU3VjY2Vzc1xuXHQgKi9cblx0c2hvd1NpbXBsZVJlZGlyZWN0UGFuZWwoe29uRWRpdCA9ICgpID0+IHt9LCBvblN1Y2Nlc3MgPSAoKSA9PiB7fX0gPSB7fSkge1xuXHRcdGNvbnN0IGlucHV0ID0gJCgnPGlucHV0PicpLmFkZENsYXNzKCdXaWtpcGx1cy1JbnRlckJveC1JbnB1dCcpLmF0dHIoJ2lkJywgJ1dpa2lwbHVzLVNSLVRpdGxlJyk7XG5cdFx0Y29uc3Qgc3VtbWFyeUlucHV0VGl0bGUgPSAkKCc8cD4nKS50ZXh0KGkxOG4udHJhbnNsYXRlKCdyZWRpcmVjdF9zdW1tYXJ5X2Rlc2MnKSk7XG5cdFx0Y29uc3Qgc3VtbWFyeUlucHV0ID0gJCgnPGlucHV0PicpLmFkZENsYXNzKCdXaWtpcGx1cy1JbnRlckJveC1JbnB1dCcpLmF0dHIoJ2lkJywgJ1dpa2lwbHVzLVNSLVN1bW1hcnknKTtcblx0XHRjb25zdCBhcHBseUJ0biA9ICQoJzxkaXY+Jylcblx0XHRcdC5hZGRDbGFzcygnV2lraXBsdXMtSW50ZXJCb3gtQnRuJylcblx0XHRcdC5hdHRyKCdpZCcsICdXaWtpcGx1cy1TUi1BcHBseScpXG5cdFx0XHQudGV4dChpMThuLnRyYW5zbGF0ZSgnc3VibWl0JykpO1xuXHRcdGNvbnN0IGNhbmNlbEJ0biA9ICQoJzxkaXY+Jylcblx0XHRcdC5hZGRDbGFzcygnV2lraXBsdXMtSW50ZXJCb3gtQnRuJylcblx0XHRcdC5hdHRyKCdpZCcsICdXaWtpcGx1cy1TUi1DYW5jZWwnKVxuXHRcdFx0LnRleHQoaTE4bi50cmFuc2xhdGUoJ2NhbmNlbCcpKTtcblx0XHRjb25zdCBjb250aW51ZUJ0biA9ICQoJzxkaXY+Jylcblx0XHRcdC5hZGRDbGFzcygnV2lraXBsdXMtSW50ZXJCb3gtQnRuJylcblx0XHRcdC5hdHRyKCdpZCcsICdXaWtpcGx1cy1TUi1Db250aW51ZScpXG5cdFx0XHQudGV4dChpMThuLnRyYW5zbGF0ZSgnY29udGludWUnKSk7XG5cdFx0Y29uc3QgY29udGVudCA9ICQoJzxkaXY+Jylcblx0XHRcdC5hcHBlbmQoaW5wdXQpXG5cdFx0XHQuYXBwZW5kKHN1bW1hcnlJbnB1dFRpdGxlKVxuXHRcdFx0LmFwcGVuZChzdW1tYXJ5SW5wdXQpXG5cdFx0XHQuYXBwZW5kKCQoJzxocj4nKSlcblx0XHRcdC5hcHBlbmQoYXBwbHlCdG4pXG5cdFx0XHQuYXBwZW5kKGNhbmNlbEJ0bik7IC8v5ou85o6lXG5cdFx0Y29uc3QgZGlhbG9nID0gdGhpcy5jcmVhdGVEaWFsb2dCb3goaTE4bi50cmFuc2xhdGUoJ3JlZGlyZWN0X2Rlc2MnKSwgY29udGVudCwgNjAwKTtcblx0XHRhcHBseUJ0bi5vbignY2xpY2snLCBhc3luYyAoKSA9PiB7XG5cdFx0XHRjb25zdCB0aXRsZSA9ICQoJyNXaWtpcGx1cy1TUi1UaXRsZScpLnZhbCgpO1xuXHRcdFx0Y29uc3Qgc3VtbWFyeSA9ICQoJyNXaWtpcGx1cy1TUi1TdW1tYXJ5JykudmFsKCk7XG5cdFx0XHQkKCcuV2lraXBsdXMtSW50ZXJCb3gtQ29udGVudCcpLmh0bWwoXG5cdFx0XHRcdGA8ZGl2IGNsYXNzPVwiV2lraXBsdXMtQmFubmVyXCI+JHtpMThuLnRyYW5zbGF0ZSgnc3VibWl0dGluZ19lZGl0Jyl9PC9kaXY+YFxuXHRcdFx0KTtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGF3YWl0IG9uRWRpdCh7XG5cdFx0XHRcdFx0dGl0bGUsXG5cdFx0XHRcdFx0c3VtbWFyeSxcblx0XHRcdFx0XHRmb3JjZU92ZXJ3cml0ZTogZmFsc2UsXG5cdFx0XHRcdH0pO1xuXHRcdFx0XHQkKCcuV2lraXBsdXMtQmFubmVyJykudGV4dChpMThuLnRyYW5zbGF0ZSgncmVkaXJlY3Rfc2F2ZWQnKSk7XG5cdFx0XHRcdHRoaXMuaGlkZVNpbXBsZVJlZGlyZWN0UGFuZWwoZGlhbG9nKTtcblx0XHRcdFx0b25TdWNjZXNzKHt0aXRsZX0pO1xuXHRcdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdFx0JCgnLldpa2lwbHVzLUJhbm5lcicpLmNzcygnYmFja2dyb3VuZCcsICdyZ2JhKDIxOCwgMTQyLCAxNjcsIDAuNjUpJyk7XG5cdFx0XHRcdCQoJy5XaWtpcGx1cy1CYW5uZXInKS50ZXh0KGVycm9yLm1lc3NhZ2UpO1xuXHRcdFx0XHRpZiAoZXJyb3IuY29kZSA9PT0gJ2FydGljbGVleGlzdHMnKSB7XG5cdFx0XHRcdFx0JCgnLldpa2lwbHVzLUludGVyQm94LUNvbnRlbnQnKS5hcHBlbmQoJCgnPGhyPicpKS5hcHBlbmQoY29udGludWVCdG4pLmFwcGVuZChjYW5jZWxCdG4pO1xuXHRcdFx0XHRcdGNhbmNlbEJ0bi5vbignY2xpY2snLCAoKSA9PiB7XG5cdFx0XHRcdFx0XHR0aGlzLmhpZGVTaW1wbGVSZWRpcmVjdFBhbmVsKGRpYWxvZyk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0Y29udGludWVCdG4ub24oJ2NsaWNrJywgYXN5bmMgKCkgPT4ge1xuXHRcdFx0XHRcdFx0JCgnLldpa2lwbHVzLUludGVyQm94LUNvbnRlbnQnKS5odG1sKFxuXHRcdFx0XHRcdFx0XHRgPGRpdiBjbGFzcz1cIldpa2lwbHVzLUJhbm5lclwiPiR7aTE4bi50cmFuc2xhdGUoJ3N1Ym1pdHRpbmdfZWRpdCcpfTwvZGl2PmBcblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdFx0XHRhd2FpdCBvbkVkaXQoe1xuXHRcdFx0XHRcdFx0XHRcdHRpdGxlLFxuXHRcdFx0XHRcdFx0XHRcdHN1bW1hcnksXG5cdFx0XHRcdFx0XHRcdFx0Zm9yY2VPdmVyd3JpdGU6IHRydWUsXG5cdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0XHQkKCcuV2lraXBsdXMtQmFubmVyJykudGV4dChpMThuLnRyYW5zbGF0ZSgncmVkaXJlY3Rfc2F2ZWQnKSk7XG5cdFx0XHRcdFx0XHRcdHRoaXMuaGlkZVNpbXBsZVJlZGlyZWN0UGFuZWwoZGlhbG9nKTtcblx0XHRcdFx0XHRcdFx0b25TdWNjZXNzKHt0aXRsZX0pO1xuXHRcdFx0XHRcdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdFx0XHRcdFx0JCgnLldpa2lwbHVzLUJhbm5lcicpLmNzcygnYmFja2dyb3VuZCcsICdyZ2JhKDIxOCwgMTQyLCAxNjcsIDAuNjUpJyk7XG5cdFx0XHRcdFx0XHRcdCQoJy5XaWtpcGx1cy1CYW5uZXInKS50ZXh0KGVycm9yLm1lc3NhZ2UpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0Y2FuY2VsQnRuLm9uKCdjbGljaycsICgpID0+IHtcblx0XHRcdHRoaXMuaGlkZVNpbXBsZVJlZGlyZWN0UGFuZWwoZGlhbG9nKTtcblx0XHR9KTtcblx0fVxuXG5cdC8qKlxuXHQgKiDpmpDol4/lv6vpgJ/ph43lrprlkJHlvLnnqpdcblx0ICpcblx0ICogQHBhcmFtIHsqfSBkaWFsb2dcblx0ICovXG5cdGhpZGVTaW1wbGVSZWRpcmVjdFBhbmVsKGRpYWxvZyA9ICQoJ2JvZHknKSkge1xuXHRcdGRpYWxvZy5maW5kKCcuV2lraXBsdXMtSW50ZXJCb3gtQ2xvc2UnKS50cmlnZ2VyKCdjbGljaycpO1xuXHR9XG5cblx0c2hvd1NldHRpbmdzUGFuZWwoe29uU3VibWl0ID0gKCkgPT4ge319ID0ge30pIHtcblx0XHRjb25zdCBpbnB1dCA9ICQoJzx0ZXh0YXJlYT4nKS5hdHRyKCdpZCcsICdXaWtpcGx1cy1TZXR0aW5nLUlucHV0JykuYXR0cigncm93cycsICcxMCcpO1xuXHRcdGNvbnN0IGFwcGx5QnRuID0gJCgnPGRpdj4nKVxuXHRcdFx0LmFkZENsYXNzKCdXaWtpcGx1cy1JbnRlckJveC1CdG4nKVxuXHRcdFx0LmF0dHIoJ2lkJywgJ1dpa2lwbHVzLVNldHRpbmctQXBwbHknKVxuXHRcdFx0LnRleHQoaTE4bi50cmFuc2xhdGUoJ3N1Ym1pdCcpKTtcblx0XHRjb25zdCBjYW5jZWxCdG4gPSAkKCc8ZGl2PicpXG5cdFx0XHQuYWRkQ2xhc3MoJ1dpa2lwbHVzLUludGVyQm94LUJ0bicpXG5cdFx0XHQuYXR0cignaWQnLCAnV2lraXBsdXMtU2V0dGluZy1DYW5jZWwnKVxuXHRcdFx0LnRleHQoaTE4bi50cmFuc2xhdGUoJ2NhbmNlbCcpKTtcblx0XHRjb25zdCBjb250ZW50ID0gJCgnPGRpdj4nKS5hcHBlbmQoaW5wdXQpLmFwcGVuZCgkKCc8aHI+JykpLmFwcGVuZChhcHBseUJ0bikuYXBwZW5kKGNhbmNlbEJ0bik7IC8v5ou85o6lXG5cblx0XHRjb25zdCBkaWFsb2cgPSB0aGlzLmNyZWF0ZURpYWxvZ0JveChpMThuLnRyYW5zbGF0ZSgnd2lraXBsdXNfc2V0dGluZ3NfZGVzYycpLCBjb250ZW50LCA2MDAsICgpID0+IHtcblx0XHRcdGlmIChsb2NhbFN0b3JhZ2UuV2lraXBsdXNfU2V0dGluZ3MpIHtcblx0XHRcdFx0JCgnI1dpa2lwbHVzLVNldHRpbmctSW5wdXQnKS52YWwobG9jYWxTdG9yYWdlLldpa2lwbHVzX1NldHRpbmdzKTtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRjb25zdCBzZXR0aW5ncyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLldpa2lwbHVzX1NldHRpbmdzKTtcblx0XHRcdFx0XHQkKCcjV2lraXBsdXMtU2V0dGluZy1JbnB1dCcpLnZhbChKU09OLnN0cmluZ2lmeShzZXR0aW5ncywgbnVsbCwgMikpO1xuXHRcdFx0XHR9IGNhdGNoIHtcblx0XHRcdFx0XHQvLyBpZ25vcmVcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0JCgnI1dpa2lwbHVzLVNldHRpbmctSW5wdXQnKS5hdHRyKCdwbGFjZWhvbGRlcicsIGkxOG4udHJhbnNsYXRlKCd3aWtpcGx1c19zZXR0aW5nc19wbGFjZWhvbGRlcicpKTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRhcHBseUJ0bi5vbignY2xpY2snLCBhc3luYyAoKSA9PiB7XG5cdFx0XHRjb25zdCBzYXZlZEJhbm5lciA9ICQoJzxkaXY+JykuYWRkQ2xhc3MoJ1dpa2lwbHVzLUJhbm5lcicpLnRleHQoaTE4bi50cmFuc2xhdGUoJ3dpa2lwbHVzX3NldHRpbmdzX3NhdmVkJykpO1xuXHRcdFx0Y29uc3Qgc2V0dGluZ3MgPSAkKCcjV2lraXBsdXMtU2V0dGluZy1JbnB1dCcpLnZhbCgpO1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0b25TdWJtaXQoe3NldHRpbmdzfSk7XG5cdFx0XHRcdCQoJy5XaWtpcGx1cy1JbnRlckJveC1Db250ZW50JykuaHRtbCgnJykuYXBwZW5kKHNhdmVkQmFubmVyKTtcblx0XHRcdFx0YXdhaXQgc2xlZXAoMTUwMCk7XG5cdFx0XHRcdHRoaXMuaGlkZVNldHRpbmdzUGFuZWwoZGlhbG9nKTtcblx0XHRcdH0gY2F0Y2gge1xuXHRcdFx0XHROb3RpZmljYXRpb24uZXJyb3IoaTE4bi50cmFuc2xhdGUoJ3dpa2lwbHVzX3NldHRpbmdzX2dyYW1tYXJfZXJyb3InKSk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0Y2FuY2VsQnRuLm9uKCdjbGljaycsICgpID0+IHtcblx0XHRcdHRoaXMuaGlkZVNldHRpbmdzUGFuZWwoZGlhbG9nKTtcblx0XHR9KTtcblx0fVxuXG5cdGhpZGVTZXR0aW5nc1BhbmVsKGRpYWxvZyA9ICQoJ2JvZHknKSkge1xuXHRcdGRpYWxvZy5maW5kKCcuV2lraXBsdXMtSW50ZXJCb3gtQ2xvc2UnKS50cmlnZ2VyKCdjbGljaycpO1xuXHR9XG5cblx0YmluZFByZWxvYWRFdmVudHMob25QcmVsb2FkKSB7XG5cdFx0JCgnI3RvYycpXG5cdFx0XHQuY2hpbGRyZW4oJ3VsJylcblx0XHRcdC5maW5kKCdhJylcblx0XHRcdC5lYWNoKGZ1bmN0aW9uIChpKSB7XG5cdFx0XHRcdCQodGhpcykub24oJ21vdXNlb3ZlcicsIGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHQkKHRoaXMpLm9mZignbW91c2VvdmVyJyk7XG5cdFx0XHRcdFx0b25QcmVsb2FkKHtcblx0XHRcdFx0XHRcdHNlY3Rpb25OdW1iZXI6IGkgKyAxLFxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9KTtcblx0XHRcdH0pO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBVSSgpO1xuIiwgIi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXRzLWNvbW1lbnRcbi8vIEB0cy1ub2NoZWNrXG5jbGFzcyBTZXR0aW5ncyB7XG5cdGdldFNldHRpbmcoa2V5LCBvYmplY3QgPSB7fSkge1xuXHRcdGNvbnN0IHcgPSBvYmplY3Q7XG5cdFx0bGV0IHNldHRpbmdzO1xuXHRcdHRyeSB7XG5cdFx0XHRzZXR0aW5ncyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlWydXaWtpcGx1c19TZXR0aW5ncyddKTtcblx0XHR9IGNhdGNoIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IGN1c3RvbVNldHRpbmdGdW5jdGlvbiA9IG5ldyBGdW5jdGlvbihgcmV0dXJuICR7c2V0dGluZ3Nba2V5XX1gKTtcblx0XHRcdGlmICh0eXBlb2YgY3VzdG9tU2V0dGluZ0Z1bmN0aW9uID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0aWYgKGN1c3RvbVNldHRpbmdGdW5jdGlvbigpKHcpID09PSB0cnVlKSB7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHJldHVybiBjdXN0b21TZXR0aW5nRnVuY3Rpb24oKSh3KSB8fCBzZXR0aW5nc1trZXldO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBjYXRjaCB7XG5cdFx0XHRcdFx0cmV0dXJuIHNldHRpbmdzW2tleV07XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiBzZXR0aW5nc1trZXldO1xuXHRcdFx0fVxuXHRcdH0gY2F0Y2gge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0bGV0IHJlc3VsdCA9IHNldHRpbmdzW2tleV07XG5cdFx0XHRcdGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKG9iamVjdCkpIHtcblx0XHRcdFx0XHRyZXN1bHQgPSByZXN1bHQucmVwbGFjZShgXFwkeyR7a2V5fX1gLCBvYmplY3Rba2V5XSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIHJlc3VsdDtcblx0XHRcdH0gY2F0Y2gge31cblx0XHR9XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IFNldHRpbmdzKCk7XG4iLCAiLyohIFdpa2lwbHVzIC0gNC4wLjExIHwgRXJpZGFudXMgU29yYSAo5aa556m66YWxKSB8IENDLUJZLVNBLTQuMCA8aHR0cHM6Ly9xd2JrLmNjL0g6Q0MtQlktU0EtNC4wPiAqL1xuI1dpa2lwbHVzLVF1aWNrZWRpdCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiA1MDBweDtcbiAgd29yZC1icmVhazogYnJlYWstYWxsO1xufVxuI1dpa2lwbHVzLVF1aWNrZWRpdC1TdW1tYXJ5LUlucHV0IHtcbiAgd2lkdGg6IDUwJTtcbn1cbi5za2luLXZlY3RvciAjV2lraXBsdXMtUXVpY2tlZGl0LVN1bW1hcnktSW5wdXQge1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG4jV2lraXBsdXMtUXVpY2tlZGl0LVByZXZpZXctU3VibWl0LFxuI1dpa2lwbHVzLVF1aWNrZWRpdC1TdWJtaXQge1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIHBhZGRpbmc6IHJldmVydDtcbn1cbiNXaWtpcGx1cy1RdWlja2VkaXQtUHJldmlldy1PdXRwdXQge1xuICBjbGVhcjogYm90aDtcbiAgbWFyZ2luOiA1cHggMDtcbn1cbi5XaWtpcGx1cy1CdG4ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW46IDNweCA1cHg7XG4gIHBhZGRpbmc6IDNweCAxZW07XG4gIHdpZHRoOiBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3gtc2hhZG93OiAwIDFweCAycHggI2FhYTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uV2lraXBsdXMtQnRuIGEge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiAjMDAwO1xuICAtd2Via2l0LXRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLldpa2lwbHVzLUludGVyQm94IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDIwJTtcbiAgei1pbmRleDogMjAwO1xuICBwYWRkaW5nOiAyMHB4IDEwcHg7XG4gIHdpZHRoOiA2MDBweDtcbiAgbWluLWhlaWdodDogMTAwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTYxLCAxNTQsIDIyMCwgMC40MSk7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZGY5Zjc7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG4uV2lraXBsdXMtSW50ZXJCb3gtSGVhZGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDA7XG4gIHRvcDogLThweDtcbiAgbWFyZ2luOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM2Y2Y7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xuICBsaW5lLWhlaWdodDogMnJlbTtcbiAgY3Vyc29yOiBtb3ZlO1xufVxuLldpa2lwbHVzLUludGVyQm94LUlucHV0IHtcbiAgbWFyZ2luOiAyMHB4O1xuICB3aWR0aDogNjAlO1xufVxuLldpa2lwbHVzLUludGVyQm94LUJ0biB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW46IGF1dG8gM3B4O1xuICBwYWRkaW5nOiA2cHggMTJweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RlZGVkZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uV2lraXBsdXMtSW50ZXJCb3gtQnRuOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U4ZThlODtcbn1cbi5XaWtpcGx1cy1JbnRlckJveC1DbG9zZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgbWFyZ2luOiAzcHggN3B4O1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLldpa2lwbHVzLUludGVyQm94IGxhYmVsIHtcbiAgZm9udC1zaXplOiAwLjk1cmVtO1xufVxuLldpa2lwbHVzLUludGVyQm94IHRhYmxlLmRpZmYge1xuICB0YWJsZS1sYXlvdXQ6IGF1dG87XG59XG4uV2lraXBsdXMtSW50ZXJCb3ggdGFibGUuZGlmZiAuZGlmZi1hZGRlZGxpbmUsXG4uV2lraXBsdXMtSW50ZXJCb3ggdGFibGUuZGlmZiAuZGlmZi1kZWxldGVkbGluZSxcbi5XaWtpcGx1cy1JbnRlckJveCB0YWJsZS5kaWZmIC5kaWZmLWxpbmVubyB7XG4gIHdpZHRoOiA1MCU7XG59XG4uV2lraXBsdXMtSW50ZXJCb3ggdGFibGUuZGlmZiAuZGlmZi1tYXJrZXIge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLldpa2lwbHVzLUJhbm5lciB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMTBweCA1cHg7XG4gIG1pbi1oZWlnaHQ6IDUwcHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMTkzLCAyMjIsIDIxNCwgMC41MSk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAycmVtO1xuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnRzLXNhbnMsIHNhbnMtc2VyaWYpO1xufVxuLk1vZU5vdGlmaWNhdGlvbi1ub3RpY2Uge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG1hcmdpbjogM3B4IDVweDtcbiAgcGFkZGluZzogMCA1cHg7XG4gIHdpZHRoOiBhdXRvO1xuICBib3gtc2hhZG93OiAwIDNweCAzcHggI2FhYTtcbiAgZm9udC1zaXplOiAxcmVtO1xufVxuLk1vZU5vdGlmaWNhdGlvbi1ub3RpY2Ugc3BhbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiAzcHggYXV0byAzcHggM3B4O1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnRzLXNhbnMsIHNhbnMtc2VyaWYpO1xuICBsaW5lLWhlaWdodDogMS41O1xufVxuLk1vZU5vdGlmaWNhdGlvbi1ub3RpY2Utc3VjY2VzcyB7XG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgIzhkZGE5MztcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogM3B4O1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAzcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDhhMDA7XG59XG4uTW9lTm90aWZpY2F0aW9uLW5vdGljZS13YXJuaW5nIHtcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjZmZkZjAwO1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAzcHg7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDNweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0YmQwMDtcbn1cbi5Nb2VOb3RpZmljYXRpb24tbm90aWNlLXdhcm5pbmcgc3BhbiB7XG4gIGNvbG9yOiAjMDAwO1xufVxuLk1vZU5vdGlmaWNhdGlvbi1ub3RpY2UtZXJyb3Ige1xuICBib3JkZXItbGVmdDogNXB4IHNvbGlkICNlNzE3MTc7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDNweDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogM3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjAwZTA2O1xufVxuI01vZU5vdGlmaWNhdGlvbiB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAzMHB4O1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiA3MTM7XG4gIG1pbi13aWR0aDogMjAlO1xufVxuIiwgIi8qKlxuICogV2lraXBsdXNcbiAqIEVyaWRhbnVzIFNvcmEgPHNvcmFAc291bmQubW9lPlxuICovXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10cy1jb21tZW50XG4vLyBAdHMtbm9jaGVja1xuaW1wb3J0IFBhZ2UgZnJvbSAnLi9jb3JlL3BhZ2UnO1xuaW1wb3J0IFVJIGZyb20gJy4vY29yZS91aSc7XG5pbXBvcnQgTm90aWZpY2F0aW9uIGZyb20gJy4vY29yZS9ub3RpZmljYXRpb24nO1xuaW1wb3J0IFdpa2kgZnJvbSAnLi9zZXJ2aWNlcy93aWtpJztcbmltcG9ydCBTZXR0aW5ncyBmcm9tICcuL3V0aWxzL3NldHRpbmdzJztcbmltcG9ydCBMb2cgZnJvbSAnLi91dGlscy9sb2cnO1xuaW1wb3J0IENvbnN0YW50cyBmcm9tICcuL3V0aWxzL2NvbnN0YW50cyc7XG5pbXBvcnQgaTE4biBmcm9tICcuL3V0aWxzL2kxOG4nO1xuaW1wb3J0ICcuL3dpa2lwbHVzLmxlc3MnO1xuXG4kKGFzeW5jICgpID0+IHtcblx0Y29uc3QgUGFnZXMgPSB7fTtcblx0Y29uc3QgaXNDdXJyZW50UGFnZUVtcHR5ID0gJCgnLm5vYXJ0aWNsZXRleHQnKS5sZW5ndGggPiAwICYmIENvbnN0YW50cy5hcnRpY2xlSWQgPT09IDA7XG5cblx0LyoqXG5cdCAqIEdldCBwYWdlIGluc3RhbmNlLlxuXHQgKlxuXHQgKiBAcGFyYW0geyp9IHBhcmFtc1xuXHQgKiBAcGFyYW0ge251bWJlcn0gcGFyYW1zLnJldmlzaW9uSWQg6aG16Z2i5L+u6K6i54mI5pys5Y+3XG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBwYXJhbXMudGl0bGUg6aG16Z2i5qCH6aKYXG5cdCAqL1xuXHRjb25zdCBnZXRQYWdlID0gYXN5bmMgKHtyZXZpc2lvbklkLCB0aXRsZX0pID0+IHtcblx0XHRpZiAoUGFnZXNbcmV2aXNpb25JZF0pIHtcblx0XHRcdHJldHVybiBQYWdlc1tyZXZpc2lvbklkXTtcblx0XHR9XG5cdFx0Y29uc3QgbmV3UGFnZSA9IG5ldyBQYWdlKHtcblx0XHRcdHJldmlzaW9uSWQsXG5cdFx0XHR0aXRsZSxcblx0XHR9KTtcblx0XHRhd2FpdCBuZXdQYWdlLmluaXQoKTtcblx0XHRQYWdlc1tyZXZpc2lvbklkXSA9IG5ld1BhZ2U7XG5cdFx0cmV0dXJuIFBhZ2VzW3JldmlzaW9uSWRdO1xuXHR9O1xuXG5cdExvZy5pbmZvKGBXaWtpcGx1cyBub3cgbG9hZGluZy4gVmVyc2lvbjogJHtDb25zdGFudHMudmVyc2lvbn1gKTtcblxuXHRpZiAoIXdpbmRvdy5tdykge1xuXHRcdGNvbnNvbGUubG9nKCdNZWRpYXdpa2kgSmF2YVNjcmlwdCBub3QgbG9hZGVkIG9yIG5vdCBhIE1lZGlhd2lraSB3ZWJzaXRlLicpO1xuXHRcdHJldHVybjtcblx0fVxuXHRpZiAoIUNvbnN0YW50cy51c2VyR3JvdXBzLmluY2x1ZGVzKCdhdXRvY29uZmlybWVkJykgJiYgIUNvbnN0YW50cy51c2VyR3JvdXBzLmluY2x1ZGVzKCdjb25maXJtZWQnKSkge1xuXHRcdE5vdGlmaWNhdGlvbi5lcnJvcihpMThuLnRyYW5zbGF0ZSgnbm90X2F1dG9jb25maXJtZWRfdXNlcicpKTtcblx0XHRMb2cuaW5mbyhpMThuLnRyYW5zbGF0ZSgnbm90X2F1dG9jb25maXJtZWRfdXNlcicpKTtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRpZiAoIUNvbnN0YW50cy5pc0FydGljbGUgfHwgQ29uc3RhbnRzLmFjdGlvbiAhPT0gJ3ZpZXcnKSB7XG5cdFx0TG9nLmluZm8oJ05vdCBhbiBlZGl0YWJsZSBwYWdlLiBTdG9wIGluaXRpYWxpemF0aW9uLicpO1xuXHRcdHJldHVybjtcblx0fVxuXG5cdC8vIEluaXRpYWxpemUgY3VycmVudCBwYWdlIOm7mOiupOWIneWni+WMluW9k+WJjemhtemdolxuXHR3aW5kb3cuX1dpa2lwbHVzUGFnZXMgPSBQYWdlcztcblx0Y29uc3QgY3VycmVudFBhZ2VOYW1lID0gQ29uc3RhbnRzLmN1cnJlbnRQYWdlTmFtZTtcblx0Y29uc3QgcmV2aXNpb25JZCA9IENvbnN0YW50cy5yZXZpc2lvbklkO1xuXHRjb25zdCBjdXJyZW50UGFnZSA9IGF3YWl0IGdldFBhZ2Uoe1xuXHRcdHJldmlzaW9uSWQsXG5cdFx0dGl0bGU6IGN1cnJlbnRQYWdlTmFtZSxcblx0fSk7XG5cblx0Y29uc3QgaGFuZGxlUXVpY2tFZGl0QnV0dG9uQ2xpY2tlZCA9IGFzeW5jICh7c2VjdGlvbk51bWJlciwgc2VjdGlvbk5hbWUsIHRhcmdldFBhZ2VOYW1lfSA9IHt9KSA9PiB7XG5cdFx0Y29uc3QgaXNPdGhlclBhZ2UgPSB0YXJnZXRQYWdlTmFtZSAhPT0gY3VycmVudFBhZ2VOYW1lO1xuXHRcdGlmIChpc090aGVyUGFnZSAmJiBDb25zdGFudHMubGF0ZXN0UmV2aXNpb25JZCAhPT0gQ29uc3RhbnRzLnJldmlzaW9uSWQpIHtcblx0XHRcdC8vIOWcqOWOhuWPsueJiOacrOe8lui+keWFtuS7lumhtemdouaciemXrumimCDmmoLml7bkuI3mlK/mjIFcblx0XHRcdExvZy5lcnJvcignY3Jvc3NfcGFnZV9oaXN0b3J5X3JldmlzaW9uX2VkaXRfd2FybmluZycpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRjb25zdCByZXZpc2lvbklkID0gaXNPdGhlclBhZ2UgPyBhd2FpdCBXaWtpLmdldExhdGVzdFJldmlzaW9uSWRGb3JQYWdlKHRhcmdldFBhZ2VOYW1lKSA6IENvbnN0YW50cy5yZXZpc2lvbklkO1xuXG5cdFx0Y29uc3QgcGFnZSA9IGF3YWl0IGdldFBhZ2Uoe3JldmlzaW9uSWQsIHRpdGxlOiB0YXJnZXRQYWdlTmFtZX0pO1xuXHRcdGNvbnN0IGN1c3RvbVN1bW1hcnkgPSBTZXR0aW5ncy5nZXRTZXR0aW5nKCdkZWZhdWx0U3VtbWFyeScsIHtcblx0XHRcdHNlY3Rpb25OYW1lLFxuXHRcdFx0c2VjdGlvbk51bWJlcixcblx0XHRcdHNlY3Rpb25UYXJnZXROYW1lOiB0YXJnZXRQYWdlTmFtZSxcblx0XHR9KTtcblx0XHRjb25zdCBzdW1tYXJ5ID1cblx0XHRcdGN1c3RvbVN1bW1hcnkgfHxcblx0XHRcdChzZWN0aW9uTmFtZVxuXHRcdFx0XHQ/IGAvKiAke3NlY3Rpb25OYW1lfSAqLyAke2kxOG4udHJhbnNsYXRlKCdkZWZhdWx0X3N1bW1hcnlfc3VmZml4Jyl9YFxuXHRcdFx0XHQ6IGkxOG4udHJhbnNsYXRlKCdkZWZhdWx0X3N1bW1hcnlfc3VmZml4JykpO1xuXHRcdGNvbnN0IHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHROb3RpZmljYXRpb24uc3VjY2VzcyhpMThuLnRyYW5zbGF0ZSgnbG9hZGluZycpKTtcblx0XHR9LCAyMDApO1xuXHRcdGNvbnN0IHNlY3Rpb25Db250ZW50ID0gYXdhaXQgcGFnZS5nZXRXaWtpVGV4dCh7XG5cdFx0XHRzZWN0aW9uOiBzZWN0aW9uTnVtYmVyLFxuXHRcdH0pO1xuXHRcdGNvbnN0IGlzRWRpdEhpc3RvcnlSZXZpc2lvbiA9ICFpc090aGVyUGFnZSAmJiBDb25zdGFudHMubGF0ZXN0UmV2aXNpb25JZCAhPT0gQ29uc3RhbnRzLnJldmlzaW9uSWQ7XG5cdFx0Y29uc3QgZXNjVG9FeGl0ID1cblx0XHRcdFNldHRpbmdzLmdldFNldHRpbmcoJ2VzY190b19leGl0X3F1aWNrZWRpdCcpID09PSB0cnVlIHx8IC8vIOWFvOWuueiAgeiuvue9rmtleVxuXHRcdFx0U2V0dGluZ3MuZ2V0U2V0dGluZygnZXNjX3RvX2V4aXRfcXVpY2tlZGl0JykgPT09ICd0cnVlJyB8fFxuXHRcdFx0U2V0dGluZ3MuZ2V0U2V0dGluZygnZXNjVG9FeGl0UXVpY2tFZGl0JykgPT09IHRydWUgfHxcblx0XHRcdFNldHRpbmdzLmdldFNldHRpbmcoJ2VzY1RvRXhpdFF1aWNrRWRpdCcpID09PSAndHJ1ZSc7XG5cdFx0Y29uc3QgY3VzdG9tRWRpdFRhZ3MgPSBTZXR0aW5ncy5nZXRTZXR0aW5nKCdjdXN0b21fZWRpdF90YWdzJyk7XG5cdFx0Y29uc3QgZGVmYXVsdEVkaXRUYWdzID0gW107XG5cdFx0Y29uc3QgZWRpdFRhZ3MgPSBjdXN0b21FZGl0VGFncz8ubGVuZ3RoID8gY3VzdG9tRWRpdFRhZ3MgOiBkZWZhdWx0RWRpdFRhZ3M7XG5cdFx0Y2xlYXJUaW1lb3V0KHRpbWVyKTtcblx0XHROb3RpZmljYXRpb24uZW1wdHkoKTtcblxuXHRcdGlmIChpc0VkaXRIaXN0b3J5UmV2aXNpb24pIHtcblx0XHRcdE5vdGlmaWNhdGlvbi53YXJuaW5nKGkxOG4udHJhbnNsYXRlKCdoaXN0b3J5X2VkaXRfd2FybmluZycpKTtcblx0XHR9XG5cblx0XHRjb25zdCBzaG91bGRTaG93Q3JlYXRlUGFnZVRpcCA9IGlzT3RoZXJQYWdlID8gIXJldmlzaW9uSWQgOiBpc0N1cnJlbnRQYWdlRW1wdHk7XG5cblx0XHRVSS5zaG93UXVpY2tFZGl0UGFuZWwoe1xuXHRcdFx0dGl0bGU6IGAke2kxOG4udHJhbnNsYXRlKCdxdWlja2VkaXRfdG9wYnRuJyl9JHtcblx0XHRcdFx0aXNFZGl0SGlzdG9yeVJldmlzaW9uID8gaTE4bi50cmFuc2xhdGUoJ2hpc3RvcnlfZWRpdF93YXJuaW5nJykgOiAnJ1xuXHRcdFx0fWAsXG5cdFx0XHRjb250ZW50OiBzaG91bGRTaG93Q3JlYXRlUGFnZVRpcCA/IGkxOG4udHJhbnNsYXRlKCdjcmVhdGVfcGFnZV90aXAnKSA6IHNlY3Rpb25Db250ZW50LFxuXHRcdFx0c3VtbWFyeSxcblx0XHRcdG9uQmFjazogVUkuaGlkZVF1aWNrRWRpdFBhbmVsLFxuXHRcdFx0b25QYXJzZTogKHdpa2lUZXh0KSA9PiB7XG5cdFx0XHRcdHJldHVybiBwYWdlLnBhcnNlV2lraVRleHQod2lraVRleHQpO1xuXHRcdFx0fSxcblx0XHRcdG9uRWRpdDogYXN5bmMgKHtjb250ZW50LCBzdW1tYXJ5LCBpc01pbm9yRWRpdH0pID0+IHtcblx0XHRcdFx0Y29uc3QgZWRpdFBheWxvYWQgPSB7XG5cdFx0XHRcdFx0Y29udGVudCxcblx0XHRcdFx0XHRjb25maWc6IHtcblx0XHRcdFx0XHRcdHN1bW1hcnksXG5cdFx0XHRcdFx0XHQuLi4oc2VjdGlvbk51bWJlciA9PT0gLTEgPyB7fSA6IHtzZWN0aW9uOiBzZWN0aW9uTnVtYmVyfSksXG5cdFx0XHRcdFx0XHQuLi4oZWRpdFRhZ3MubGVuZ3RoID8ge3RhZ3M6IGVkaXRUYWdzLmpvaW4oJ3wnKX0gOiB7fSksXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0fTtcblx0XHRcdFx0aWYgKGlzTWlub3JFZGl0KSB7XG5cdFx0XHRcdFx0ZWRpdFBheWxvYWQuY29uZmlnLm1pbm9yID0gJ3RydWUnO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGVkaXRQYXlsb2FkLmNvbmZpZy5ub3RtaW5vciA9ICd0cnVlJztcblx0XHRcdFx0fVxuXHRcdFx0XHRhd2FpdCBwYWdlLmVkaXQoZWRpdFBheWxvYWQpO1xuXHRcdFx0fSxcblx0XHRcdGVzY0V4aXQ6IGVzY1RvRXhpdCxcblx0XHR9KTtcblx0fTtcblxuXHRjb25zdCBoYW5kbGVTaW1wbGVSZWRpcmVjdEJ1dHRvbkNsaWNrZWQgPSBhc3luYyAoKSA9PiB7XG5cdFx0VUkuc2hvd1NpbXBsZVJlZGlyZWN0UGFuZWwoe1xuXHRcdFx0b25FZGl0OiBhc3luYyAoe3RpdGxlLCBzdW1tYXJ5LCBmb3JjZU92ZXJ3cml0ZSA9IGZhbHNlfSkgPT4ge1xuXHRcdFx0XHRjb25zdCBwYWdlID0gYXdhaXQgZ2V0UGFnZSh7dGl0bGV9KTtcblx0XHRcdFx0Y29uc3QgY3VycmVudFBhZ2VOYW1lID0gQ29uc3RhbnRzLmN1cnJlbnRQYWdlTmFtZTtcblx0XHRcdFx0Y29uc3QgY29udGVudG1vZGVsID0gcGFnZS5jb250ZW50bW9kZWw7XG5cdFx0XHRcdGlmIChzdW1tYXJ5ID09ICcnKSB7XG5cdFx0XHRcdFx0c3VtbWFyeSA9IGkxOG4udHJhbnNsYXRlKCdyZWRpcmVjdF9mcm9tX3N1bW1hcnknLCBbdGl0bGUsIGN1cnJlbnRQYWdlTmFtZV0pO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNvbnN0IGNvbnRlbnQgPSAoKCkgPT4ge1xuXHRcdFx0XHRcdGxldCBjb250ZW50O1xuXHRcdFx0XHRcdHN3aXRjaCAoY29udGVudG1vZGVsKSB7XG5cdFx0XHRcdFx0XHRjYXNlICdqYXZhc2NyaXB0Jzpcblx0XHRcdFx0XHRcdFx0Y29udGVudCA9IGAvKiAjUkVESVJFQ1QgKi9tdy5sb2FkZXIubG9hZChcIiR7bG9jYXRpb24ucHJvdG9jb2x9Ly8ke1xuXHRcdFx0XHRcdFx0XHRcdGxvY2F0aW9uLmhvc3Rcblx0XHRcdFx0XHRcdFx0fSR7Q29uc3RhbnRzLnNjcmlwdFBhdGh9L2luZGV4LnBocD90aXRsZT0ke213LnV0aWwud2lraVVybGVuY29kZShcblx0XHRcdFx0XHRcdFx0XHRjdXJyZW50UGFnZU5hbWVcblx0XHRcdFx0XHRcdFx0KX0mYWN0aW9uPXJhdyZjdHlwZT10ZXh0L2phdmFzY3JpcHRcIik7YDtcblx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHRjYXNlICdjc3MnOlxuXHRcdFx0XHRcdFx0XHRjb250ZW50ID0gYC8qICNSRURJUkVDVCAqL0BpbXBvcnQgdXJsKCR7bG9jYXRpb24ucHJvdG9jb2x9Ly8ke1xuXHRcdFx0XHRcdFx0XHRcdGxvY2F0aW9uLmhvc3Rcblx0XHRcdFx0XHRcdFx0fSR7Q29uc3RhbnRzLnNjcmlwdFBhdGh9L2luZGV4LnBocD90aXRsZT0ke213LnV0aWwud2lraVVybGVuY29kZShcblx0XHRcdFx0XHRcdFx0XHRjdXJyZW50UGFnZU5hbWVcblx0XHRcdFx0XHRcdFx0KX0mYWN0aW9uPXJhdyZjdHlwZT10ZXh0L2Nzcyk7YDtcblx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHRjYXNlICdTY3JpYnVudG8nOlxuXHRcdFx0XHRcdFx0XHRjb250ZW50ID0gYHJldHVybiByZXF1aXJlIFtbJHtjdXJyZW50UGFnZU5hbWV9XV1gO1xuXHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdGNhc2UgJ3dpa2l0ZXh0Jzpcblx0XHRcdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0XHRcdGNvbnRlbnQgPSBgI1JFRElSRUNUIFtbJHtjdXJyZW50UGFnZU5hbWV9XV1gO1xuXHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cmV0dXJuIGNvbnRlbnQ7XG5cdFx0XHRcdH0pKCk7XG5cdFx0XHRcdGNvbnN0IHBheWxvYWQgPSB7XG5cdFx0XHRcdFx0Y29udGVudDogY29udGVudCxcblx0XHRcdFx0XHRjb25maWc6IHtcblx0XHRcdFx0XHRcdHN1bW1hcnksXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0fTtcblx0XHRcdFx0aWYgKCFmb3JjZU92ZXJ3cml0ZSkge1xuXHRcdFx0XHRcdHBheWxvYWQuY29uZmlnLmNyZWF0ZW9ubHkgPSAndHJ1ZSc7XG5cdFx0XHRcdH1cblx0XHRcdFx0YXdhaXQgcGFnZS5lZGl0KHBheWxvYWQpO1xuXHRcdFx0fSxcblx0XHRcdG9uU3VjY2VzczogKHt0aXRsZX0pID0+IHtcblx0XHRcdFx0bG9jYXRpb24uaHJlZiA9IENvbnN0YW50cy5hcnRpY2xlUGF0aC5yZXBsYWNlKC9cXCQxL2dpLCB0aXRsZSk7XG5cdFx0XHR9LFxuXHRcdH0pO1xuXHR9O1xuXG5cdGNvbnN0IGhhbmRsZVNldHRpbmdzQnV0dG9uQ2xpY2tlZCA9IGFzeW5jICgpID0+IHtcblx0XHRVSS5zaG93U2V0dGluZ3NQYW5lbCh7XG5cdFx0XHRvblN1Ym1pdDogKHtzZXR0aW5nc30pID0+IHtcblx0XHRcdFx0SlNPTi5wYXJzZShzZXR0aW5ncyk7XG5cdFx0XHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdXaWtpcGx1c19TZXR0aW5ncycsIHNldHRpbmdzKTtcblx0XHRcdH0sXG5cdFx0fSk7XG5cdH07XG5cblx0Y29uc3QgaGFuZGxlUHJlbG9hZCA9IGFzeW5jICh7c2VjdGlvbk51bWJlcn0pID0+IHtcblx0XHRhd2FpdCBjdXJyZW50UGFnZS5nZXRXaWtpVGV4dCh7XG5cdFx0XHRzZWN0aW9uOiBzZWN0aW9uTnVtYmVyLFxuXHRcdH0pO1xuXHR9O1xuXG5cdFVJLmluc2VydFRvcFF1aWNrRWRpdEVudHJ5KGhhbmRsZVF1aWNrRWRpdEJ1dHRvbkNsaWNrZWQpO1xuXHRVSS5pbnNlcnRTZWN0aW9uUXVpY2tFZGl0RW50cmllcyhoYW5kbGVRdWlja0VkaXRCdXR0b25DbGlja2VkKTtcblx0VUkuaW5zZXJ0TGlua0VkaXRFbnRyaWVzKGhhbmRsZVF1aWNrRWRpdEJ1dHRvbkNsaWNrZWQpO1xuXHRVSS5pbnNlcnRTaW1wbGVSZWRpcmVjdEJ1dHRvbihoYW5kbGVTaW1wbGVSZWRpcmVjdEJ1dHRvbkNsaWNrZWQpO1xuXHRVSS5pbnNlcnRTZXR0aW5nc1BhbmVsQnV0dG9uKGhhbmRsZVNldHRpbmdzQnV0dG9uQ2xpY2tlZCk7XG5cdFVJLmJpbmRQcmVsb2FkRXZlbnRzKGhhbmRsZVByZWxvYWQpO1xufSk7XG5cbmV4cG9ydCB7fTtcbiIsICJpbXBvcnQge2dldEJvZHl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbnZvaWQgZ2V0Qm9keSgpLnRoZW4oKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQgPT4ge1xuXHQkKHdpbmRvdykub24oJ3Jlc2l6ZScsICgpOiB2b2lkID0+IHtcblx0XHRjb25zdCB3aW5kb3dXaWR0aCA9ICQod2luZG93KS53aWR0aCgpO1xuXHRcdGNvbnN0ICR3aWtpcGx1c0ludGVyYm94ID0gJGJvZHkuZmluZCgnLldpa2lwbHVzLUludGVyQm94Jyk7XG5cdFx0aWYgKCR3aWtpcGx1c0ludGVyYm94KSB7XG5cdFx0XHQkd2lraXBsdXNJbnRlcmJveC5jc3MoJ21heC13aWR0aCcsIGBjYWxjKCR7d2luZG93V2lkdGh9cHggLSAyZW0pYCk7XG5cdFx0fVxuXHR9KTtcbn0pO1xuIiwgImltcG9ydCAnLi9XaWtpcGx1cy5sZXNzJztcblxuKGZ1bmN0aW9uIFdpa2lwbHVzKCk6IHZvaWQge1xuXHRjb25zdCB7d2dBY3Rpb24sIHdnSXNBcnRpY2xlfSA9IG13LmNvbmZpZy5nZXQoKTtcblx0aWYgKHdnQWN0aW9uICE9PSAndmlldycgfHwgIXdnSXNBcnRpY2xlKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgbG9hZGVyID0gYXN5bmMgKCk6IFByb21pc2U8dm9pZD4gPT4ge1xuXHRcdGNvbnN0IHsndmlzdWFsZWRpdG9yLWVuYWJsZSc6IGlzVmVFbmFibGV9ID0gbXcudXNlci5vcHRpb25zLmdldCgpIGFzIFJlY29yZDxzdHJpbmcsIHVua25vd24+O1xuXG5cdFx0Lyogc2VlIDxodHRwczovL2dpdGh1Yi5jb20vV2lraXBsdXMvV2lraXBsdXMvaXNzdWVzLzY1PiAqL1xuXHRcdGlmIChpc1ZlRW5hYmxlKSB7XG5cdFx0XHRhd2FpdCBtdy5sb2FkZXIudXNpbmcoJ2V4dC52aXN1YWxFZGl0b3IuY29yZScpO1xuXHRcdH1cblxuXHRcdGF3YWl0IGltcG9ydCgnLi9tb2R1bGVzL2luZGV4Jyk7XG5cdFx0YXdhaXQgaW1wb3J0KCcuL3Jlc2l6ZScpO1xuXHR9O1xuXG5cdHZvaWQgbG9hZGVyKCk7XG59KSgpO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBLDZGQUFBQSxTQUFBO0FBQUE7QUFDQSxRQUFJLFFBQVEsU0FBVSxJQUFJO0FBQ3hCLGFBQU8sTUFBTSxHQUFHLFNBQVMsUUFBUTtBQUFBLElBQ25DO0FBR0EsSUFBQUEsUUFBTztBQUFBLElBRUwsTUFBTSxPQUFPLGNBQWMsWUFBWSxVQUFVLEtBQ2pELE1BQU0sT0FBTyxVQUFVLFlBQVksTUFBTTtBQUFBLElBRXpDLE1BQU0sT0FBTyxRQUFRLFlBQVksSUFBSSxLQUNyQyxNQUFNLE9BQU8sVUFBVSxZQUFZLE1BQU0sS0FDekMsTUFBTSxPQUFPLFdBQVEsWUFBWSxPQUFJO0FBQUEsSUFFcEMsMkJBQVk7QUFBRSxhQUFPO0FBQUEsSUFBTSxFQUFHLEtBQUssU0FBUyxhQUFhLEVBQUU7QUFBQTtBQUFBOzs7QUNmOUQ7QUFBQSx1RkFBQUMsU0FBQTtBQUFBO0FBQ0EsSUFBQUEsUUFBTyxVQUFV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b0JGLE1BQU10TixLQUFLLG9CQUFvQjtBQUN6RCxZQUFJd04sbUJBQW1CO0FBQ3RCQSw0QkFBa0JyTSxJQUFJLGFBQUEsUUFBQTlMLE9BQXFCa1ksYUFBVyxXQUFBLENBQVc7UUFDbEU7TUFDRCxDQUFDO0lBQ0YsQ0FBQztFQUFBO0FBQUEsQ0FBQTs7Q0NSQSxTQUFTRSxXQUFpQjtBQUMxQixRQUFNO0lBQUNDO0lBQVVDO0VBQVcsSUFBSXJaLEdBQUdDLE9BQU9DLElBQUk7QUFDOUMsTUFBSWtaLGFBQWEsVUFBVSxDQUFDQyxhQUFhO0FBQ3hDO0VBQ0Q7QUFFQSxRQUFNOU8sU0FBQSwyQkFBQTtBQUFBLFFBQUErTyxTQUFBOVgsa0JBQVMsYUFBMkI7QUFDekMsWUFBTTtRQUFDLHVCQUF1QitYO01BQVUsSUFBSXZaLEdBQUd5SyxLQUFLK08sUUFBUXRaLElBQUk7QUFHaEUsVUFBSXFaLFlBQVk7QUFDZixjQUFNdlosR0FBR3VLLE9BQU9DLE1BQU0sdUJBQXVCO01BQzlDO0FBRUEsWUFBTUosUUFBQWdELFFBQUEsRUFBQTJMLEtBQUEsT0FBQWpELGFBQUEsR0FBQUQsZ0JBQUE7QUFDTixZQUFNekwsUUFBQWdELFFBQUEsRUFBQTJMLEtBQUEsT0FBQUgsWUFBQSxHQUFBRixlQUFBO0lBQ1AsQ0FBQTtBQUFBLFdBQUEsU0FWTW5PLFVBQUE7QUFBQSxhQUFBK08sT0FBQWpSLE1BQUEsTUFBQUMsU0FBQTtJQUFBO0VBQUEsRUFBQTtBQVlOLE9BQUtpQyxPQUFPO0FBQ2IsR0FBRzsiLAogICJuYW1lcyI6IFsibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAiZ2xvYmFsVGhpcyIsICJtb2R1bGUiLCAibW9kdWxlIiwgImdsb2JhbFRoaXMiLCAibmF2aWdhdG9yIiwgIm1vZHVsZSIsICJnbG9iYWxUaGlzIiwgIm1vZHVsZSIsICJnbG9iYWxUaGlzIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAiZ2xvYmFsVGhpcyIsICJtb2R1bGUiLCAiZ2xvYmFsVGhpcyIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgImdsb2JhbFRoaXMiLCAiU3ltYm9sIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgImdsb2JhbFRoaXMiLCAiZG9jdW1lbnQiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgImdsb2JhbFRoaXMiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAiZ2xvYmFsVGhpcyIsICJUeXBlRXJyb3IiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJnbG9iYWxUaGlzIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIiQiLCAiZ2xvYmFsVGhpcyIsICJKU09OIiwgIlN5bnRheEVycm9yIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICIkIiwgIkNvbnN0YW50cyIsICJjb25zdGFudHNfZGVmYXVsdCIsICJpbml0X2NvbnN0YW50cyIsICJfX2VzbSIsICJ2ZXJzaW9uIiwgImlzQXJ0aWNsZSIsICJ3aW5kb3ciLCAibXciLCAiY29uZmlnIiwgImdldCIsICJjdXJyZW50UGFnZU5hbWUiLCAicmVwbGFjZSIsICJhcnRpY2xlSWQiLCAicmV2aXNpb25JZCIsICJsYXRlc3RSZXZpc2lvbklkIiwgImFydGljbGVQYXRoIiwgInNjcmlwdFBhdGgiLCAiYWN0aW9uIiwgInNraW4iLCAidXNlckdyb3VwcyIsICJ3aWtpSWQiLCAidXNlckFnZW50IiwgImNvbmNhdCIsICJSZXF1ZXN0cyIsICJyZXF1ZXN0c19kZWZhdWx0IiwgImluaXRfcmVxdWVzdHMiLCAiYmFzZSIsICJsb2NhdGlvbiIsICJwcm90b2NvbCIsICJob3N0IiwgInF1ZXJ5IiwgIl9hc3luY1RvR2VuZXJhdG9yIiwgInVybCIsICJVUkwiLCAiX2kiLCAiX09iamVjdCRrZXlzIiwgIk9iamVjdCIsICJrZXlzIiwgImxlbmd0aCIsICJrZXkiLCAic2VhcmNoUGFyYW1zIiwgImFwcGVuZCIsICJyZXNwb25zZSIsICJmZXRjaCIsICJjcmVkZW50aWFscyIsICJoZWFkZXJzIiwgImpzb24iLCAicG9zdCIsICJwYXlsb2FkIiwgImZvcm0iLCAiRm9ybURhdGEiLCAiX2kyIiwgIl9PYmplY3QkZW50cmllcyIsICJlbnRyaWVzIiwgInZhbHVlIiwgIm1ldGhvZCIsICJib2R5IiwgIkkxOG4iLCAiaTE4bl9kZWZhdWx0IiwgImluaXRfaTE4biIsICJsYW5ndWFnZSIsICJpMThuRGF0YSIsICJzZXNzaW9uVXBkYXRlTG9nIiwgImNvbnN0cnVjdG9yIiwgIkpTT04iLCAicGFyc2UiLCAibG9jYWxTdG9yYWdlIiwgIm5hdmlnYXRvciIsICJ0b0xvd2VyQ2FzZSIsICJicm93c2VyTGFuZ3VhZ2UiLCAiaTE4bkNhY2hlIiwgImdldEl0ZW0iLCAiX2kzIiwgIl9PYmplY3Qka2V5czIiLCAic2V0SXRlbSIsICJ0cmFuc2xhdGUiLCAicGxhY2Vob2xkZXJzIiwgInJlc3VsdCIsICJsb2FkTGFuZ3VhZ2UiLCAiX2l0ZXJhdG9yIiwgIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwgIl9zdGVwIiwgInMiLCAibiIsICJkb25lIiwgImluZGV4IiwgInBsYWNlaG9sZGVyIiwgImVyciIsICJlIiwgImYiLCAiX3RoaXMiLCAiaW5jbHVkZXMiLCAibm93VmVyc2lvbiIsICJwdXNoIiwgIl9fdmVyc2lvbiIsICJjb25zb2xlIiwgImluZm8iLCAic3RyaW5naWZ5IiwgIldpa2lwbHVzRXJyb3IiLCAiTG9nIiwgImxvZ19kZWZhdWx0IiwgImluaXRfbG9nIiwgIkVycm9yIiwgIm1lc3NhZ2UiLCAiY29kZSIsICJkZWJ1ZyIsICJlcnJvciIsICJlcnJvckNvZGUiLCAicGF5bG9hZHMiLCAidGVtcGxhdGUiLCAiX2l0ZXJhdG9yMiIsICJfc3RlcDIiLCAiaSIsICJ2IiwgIlJlZ0V4cCIsICJXaWtpIiwgIndpa2lfZGVmYXVsdCIsICJpbml0X3dpa2kiLCAicGFnZUluZm9DYWNoZSIsICJnZXRFZGl0VG9rZW4iLCAibWV0YSIsICJmb3JtYXQiLCAidG9rZW5zIiwgImNzcmZ0b2tlbiIsICJnZXRQYWdlSW5mbyIsICJfeCIsICJfdGhpczIiLCAidGl0bGUiLCAicGFyYW1zIiwgInByb3AiLCAicnZwcm9wIiwgInJldmlkcyIsICJ0aW1lc3RhbXAiLCAicmV2aWQiLCAiY29udGVudG1vZGVsIiwgInRpdGxlcyIsICJwYWdlcyIsICJwYWdlS2V5IiwgInBhZ2VJbmZvIiwgInJldmlzaW9ucyIsICJhcHBseSIsICJhcmd1bWVudHMiLCAiZ2V0V2lraVRleHQiLCAiX3gyIiwgInNlY3Rpb24iLCAicnZzZWN0aW9uIiwgInBhcnNlV2lraVRleHQiLCAiX3gzIiwgIndpa2l0ZXh0IiwgInRleHQiLCAicHN0IiwgImVkaXQiLCAiY29udGVudCIsICJlZGl0VG9rZW4iLCAiYWRkaXRpb25hbENvbmZpZyIsICJ0b2tlbiIsICJiYXNldGltZXN0YW1wIiwgIndhcm5pbmciLCAiZ2V0TGF0ZXN0UmV2aXNpb25JZEZvclBhZ2UiLCAiX3RoaXMzIiwgIlBhZ2UiLCAicGFnZV9kZWZhdWx0IiwgImluaXRfcGFnZSIsICJpbml0ZWQiLCAiaXNOZXdQYWdlIiwgInNlY3Rpb25DYWNoZSIsICJpbml0IiwgIl90aGlzNCIsICJwcm9taXNlQXJyIiwgImdldFRpbWVzdGFtcCIsICJnZXRDb250ZW50TW9kZWwiLCAiUHJvbWlzZSIsICJhbGwiLCAiX3RoaXM1IiwgImxvYWRlciIsICJ1c2luZyIsICJ1c2VyIiwgIl90aGlzNiIsICJfdGhpczciLCAiX3RoaXM4IiwgInNlYyIsICJ3aWtpVGV4dCIsICJfdGhpczkiLCAiX3RoaXMwIiwgImNyZWF0ZW9ubHkiLCAiTm90aWZpY2F0aW9uIiwgIm5vdGlmaWNhdGlvbl9kZWZhdWx0IiwgImluaXRfbm90aWZpY2F0aW9uIiwgIiQiLCAiZGlzcGxheSIsICJ0eXBlIiwgImNhbGxiYWNrIiwgImFkZENsYXNzIiwgImZpbmQiLCAibGFzdCIsICJmYWRlSW4iLCAiYmluZCIsICJjbGVhciIsICJzZWxmIiwgIm9uIiwgInNsaWRlTGVmdCIsICJzdWNjZXNzIiwgImNoaWxkcmVuIiwgImZpcnN0IiwgImZhZGVPdXQiLCAicmVtb3ZlIiwgInNldFRpbWVvdXQiLCAiZW1wdHkiLCAiZWFjaCIsICJlbGUiLCAiZGVsYXkiLCAic3BlZWQiLCAiY3NzIiwgImFuaW1hdGUiLCAibGVmdCIsICJzbGVlcCIsICJzbGVlcF9kZWZhdWx0IiwgImluaXRfc2xlZXAiLCAidGltZSIsICJyZXNvbHZlIiwgInBhcnNlUXVlcnkiLCAicmVnIiwgIm1hdGNoIiwgImV4ZWMiLCAiZGVjb2RlVVJJQ29tcG9uZW50IiwgImluaXRfaGVscGVycyIsICJVSSIsICJ1aV9kZWZhdWx0IiwgImluaXRfdWkiLCAicXVpY2tFZGl0UGFuZWxWaXNpYmxlIiwgInNjcm9sbFRvcCIsICJjcmVhdGVEaWFsb2dCb3giLCAid2lkdGgiLCAiY2xpZW50V2lkdGgiLCAiaW5uZXJXaWR0aCIsICJjbGllbnRIZWlnaHQiLCAiaW5uZXJIZWlnaHQiLCAiZGlhbG9nV2lkdGgiLCAiTWF0aCIsICJtaW4iLCAiZGlhbG9nQm94IiwgInRvcCIsICJkb2N1bWVudCIsICJodG1sIiwgInBhcmVudCIsICJhZGRFdmVudExpc3RlbmVyIiwgIm9uYmVmb3JldW5sb2FkIiwgImJpbmREcmFnZ2luZyIsICJlbGVtZW50IiwgIm1vdXNlZG93biIsICJiYXNlWCIsICJjbGllbnRYIiwgImJhc2VZIiwgImNsaWVudFkiLCAiYmFzZU9mZnNldFgiLCAib2Zmc2V0IiwgImJhc2VPZmZzZXRZIiwgImUyIiwgInVuYmluZCIsICJvZmYiLCAiYWRkRnVuY3Rpb25CdXR0b24iLCAiaWQiLCAiYnV0dG9uIiwgImF0dHIiLCAiaW5zZXJ0U2ltcGxlUmVkaXJlY3RCdXR0b24iLCAib25DbGljayIsICJpbnNlcnRTZXR0aW5nc1BhbmVsQnV0dG9uIiwgImluc2VydFRvcFF1aWNrRWRpdEVudHJ5IiwgInRvcEJ0biIsICJ0b3BCdG5MaW5rIiwgInNlY3Rpb25OdW1iZXIiLCAidGFyZ2V0UGFnZU5hbWUiLCAiYWZ0ZXIiLCAiaW5zZXJ0U2VjdGlvblF1aWNrRWRpdEVudHJpZXMiLCAic2VjdGlvbkJ0biIsICJlZGl0VVJMIiwgInNlY3Rpb25UYXJnZXROYW1lIiwgImNsb25lTm9kZSIsICJwcmV2IiwgImNsb25lIiwgInNlY3Rpb25OYW1lIiwgInRyaW0iLCAiX3NlY3Rpb25CdG4iLCAiYmVmb3JlIiwgImluc2VydExpbmtFZGl0RW50cmllcyIsICJocmVmIiwgImNsYXNzIiwgIl9wYXJhbXMkc2VjdGlvbiIsICJzaG93UXVpY2tFZGl0UGFuZWwiLCAic3VtbWFyeSIsICJvbkJhY2siLCAib25QYXJzZSIsICJvbkVkaXQiLCAiZXNjRXhpdCIsICJoaWRlUXVpY2tFZGl0UGFuZWwiLCAiYmFja0J0biIsICJqdW1wQnRuIiwgImlucHV0Qm94IiwgInByZXZpZXdCb3giLCAic3VtbWFyeUJveCIsICJlZGl0U3VibWl0QnRuIiwgInByZXZpZXdTdWJtaXRCdG4iLCAiaXNNaW5vckVkaXQiLCAibWFyZ2luIiwgImVkaXRCb2R5IiwgInZhbCIsICJwcmVsb2FkQmFubmVyIiwgInRpbWVyIiwgIkRhdGUiLCAibm93IiwgImVkaXRCYW5uZXIiLCAiaXMiLCAidXNlVGltZSIsICJ0b1N0cmluZyIsICJyZWxvYWQiLCAibG9nIiwgImN0cmxLZXkiLCAid2hpY2giLCAic2hpZnRLZXkiLCAidHJpZ2dlciIsICJwcmV2ZW50RGVmYXVsdCIsICJzdG9wUHJvcGFnYXRpb24iLCAic2hvd1NpbXBsZVJlZGlyZWN0UGFuZWwiLCAib25TdWNjZXNzIiwgIl90aGlzMSIsICJpbnB1dCIsICJzdW1tYXJ5SW5wdXRUaXRsZSIsICJzdW1tYXJ5SW5wdXQiLCAiYXBwbHlCdG4iLCAiY2FuY2VsQnRuIiwgImNvbnRpbnVlQnRuIiwgImRpYWxvZyIsICJmb3JjZU92ZXJ3cml0ZSIsICJoaWRlU2ltcGxlUmVkaXJlY3RQYW5lbCIsICJlcnJvcjIiLCAic2hvd1NldHRpbmdzUGFuZWwiLCAib25TdWJtaXQiLCAiX3RoaXMxMCIsICJXaWtpcGx1c19TZXR0aW5ncyIsICJzZXR0aW5ncyIsICJzYXZlZEJhbm5lciIsICJoaWRlU2V0dGluZ3NQYW5lbCIsICJiaW5kUHJlbG9hZEV2ZW50cyIsICJvblByZWxvYWQiLCAiU2V0dGluZ3MiLCAic2V0dGluZ3NfZGVmYXVsdCIsICJpbml0X3NldHRpbmdzIiwgImdldFNldHRpbmciLCAib2JqZWN0IiwgInciLCAiY3VzdG9tU2V0dGluZ0Z1bmN0aW9uIiwgIkZ1bmN0aW9uIiwgIl9pNCIsICJfT2JqZWN0JGtleXMzIiwgImtleTIiLCAiaW5pdF93aWtpcGx1cyIsICJtb2R1bGVzX2V4cG9ydHMiLCAiaW5pdF9tb2R1bGVzIiwgIlBhZ2VzIiwgImlzQ3VycmVudFBhZ2VFbXB0eSIsICJnZXRQYWdlIiwgIl9yZWY3IiwgInJldmlzaW9uSWQyIiwgIm5ld1BhZ2UiLCAiX3g0IiwgIl9XaWtpcGx1c1BhZ2VzIiwgImN1cnJlbnRQYWdlIiwgImhhbmRsZVF1aWNrRWRpdEJ1dHRvbkNsaWNrZWQiLCAiX3JlZjgiLCAiaXNPdGhlclBhZ2UiLCAicGFnZSIsICJjdXN0b21TdW1tYXJ5IiwgInNlY3Rpb25Db250ZW50IiwgImlzRWRpdEhpc3RvcnlSZXZpc2lvbiIsICJlc2NUb0V4aXQiLCAiY3VzdG9tRWRpdFRhZ3MiLCAiZGVmYXVsdEVkaXRUYWdzIiwgImVkaXRUYWdzIiwgImNsZWFyVGltZW91dCIsICJzaG91bGRTaG93Q3JlYXRlUGFnZVRpcCIsICJfcmVmOSIsICJzdW1tYXJ5MiIsICJlZGl0UGF5bG9hZCIsICJ0YWdzIiwgImpvaW4iLCAibWlub3IiLCAibm90bWlub3IiLCAiX3g1IiwgImhhbmRsZVNpbXBsZVJlZGlyZWN0QnV0dG9uQ2xpY2tlZCIsICJfcmVmMCIsICJfcmVmMSIsICJjdXJyZW50UGFnZU5hbWUyIiwgImNvbnRlbnQyIiwgInV0aWwiLCAid2lraVVybGVuY29kZSIsICJfeDYiLCAiaGFuZGxlU2V0dGluZ3NCdXR0b25DbGlja2VkIiwgIl9yZWYxMCIsICJoYW5kbGVQcmVsb2FkIiwgIl9yZWYxMSIsICJfeDciLCAicmVzaXplX2V4cG9ydHMiLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAiaW5pdF9yZXNpemUiLCAicmVxdWlyZSIsICJnZXRCb2R5IiwgInRoZW4iLCAiJGJvZHkiLCAid2luZG93V2lkdGgiLCAiJHdpa2lwbHVzSW50ZXJib3giLCAiV2lraXBsdXMiLCAid2dBY3Rpb24iLCAid2dJc0FydGljbGUiLCAiX3JlZjEyIiwgImlzVmVFbmFibGUiLCAib3B0aW9ucyJdCn0K
